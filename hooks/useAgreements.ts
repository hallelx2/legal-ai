"use client";

import { createAgreement } from "@/lib/apis/agreements";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "./use-toast";

export const useCreateAgreement = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: createAgreement,

    onSuccess: (newAgreement) => {
      // Invalidate and refetch
      console.log("New Agreement Data:", newAgreement);
      queryClient.invalidateQueries({
        queryKey: ["agreements"],
      });

      toast({
        title: "Agreement created",
      });
    },

    onError: (error: any) => {
      console.error("Agreement creation failed: ", error);

      toast({
        title: "Agreement creation failed",
        variant: "destructive",
      });
    },

    onMutate: async (newAgreementData) => {
      console.log("Mutation Success Data:", newAgreementData);
      // Cancel any outgoing refetches
      await queryClient.cancelQueries({ queryKey: ["agreements"] });

      // Snapshot the previous value
      const previousAgreements = queryClient.getQueryData(["agreements"]);

      // Optimistically update to the new value
      queryClient.setQueryData(["agreements"], (oldData: any) => {
        // Handle case where oldData might be null
        if (!oldData) return [newAgreementData];

        // If oldData exists, add the new agreement
        return [...oldData, newAgreementData];
      });

      // Return a context object with the snapshotted value
      return { previousAgreements };
    },

    onSettled: (result, error, variables, context) => {
      // If there was an error, restore the previous data
      if (error) {
        queryClient.setQueryData(["agreements"], context?.previousAgreements);
      }
    },
  });
};
