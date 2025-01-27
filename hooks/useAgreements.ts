"use client";

import {
  createAgreement,
  fetchAgreementbyId,
  fetchAgreements,
  sendForSignature,
} from "@/lib/apis/agreements";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "./use-toast";
import { useQuery } from "@tanstack/react-query";
import { Agreement } from "@/types/agreements";
import { useRouter } from "next/navigation";

const useCreateAgreement = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const router = useRouter();

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
      router.push("/dashboard/agreements");
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

interface AgreementsData {
  id: string;
  title: string;
  type: string;
  status: string;
  updatedAt: Date;
  party: string;
}

const useAgreements = (userId: string) => {
  return useQuery<Agreement[], Error, AgreementsData[]>({
    queryKey: ["agreements"],
    queryFn: () => fetchAgreements(userId),
    select(data) {
      return data.map((data) => {
        return {
          id: data._id,
          title: data.name,
          type: data.templateId, // Assuming a static value, replace as needed
          status: data.metadata.status,
          updatedAt: new Date(data.updatedAt),
          party: "Tech Corp", // Replace or fetch dynamically if needed
        };
      });
    },
  });
};

export interface Party {
  name: string;
  email: string;
  status: string;
}

export interface AgreementData {
  id: string;
  title: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  parties: Party[];
  type: string;
  content: string;
}

const useAgreement = (userId: string) => {
  return useQuery<Agreement, Error, AgreementData>({
    queryKey: ["agreement"],
    queryFn: () => fetchAgreementbyId(userId),
    select(data) {
      return {
        id: data._id,
        title: data.name,
        status: data.metadata.status,
        createdAt: new Date(data.createdAt),
        updatedAt: new Date(data.updatedAt),
        parties: data.signatureLocations.map(
          (data): Party => ({
            name: data.email,
            status: data.role,
            email: data.email,
          }),
        ),
        type: data.templateId,
        content: data.htmlContent,
      };
    },
  });
};

export interface AgreementSentResponse {
  agreementId: string;
  envelopeId: string;
  status: string;
}

export interface AgreementDataResquest {
  userId: string;
  agreement_id: string;
}

const useSendForSignature = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation<AgreementSentResponse, Error, AgreementDataResquest>({
    mutationFn: sendForSignature,

    onSuccess: (data) => {
      // Invalidate and refetch
      console.log("signature Sent:", data.status);
      queryClient.invalidateQueries({
        queryKey: ["sendsign"],
      });

      toast({
        title: "Signature Sent Successfully",
      });
    },

    onError: (error: any) => {
      console.error("Send Signature failed: ", error);

      toast({
        title: "Send Signature failed",
        variant: "destructive",
      });
    },

    onMutate: async (variables) => {
      console.log("Mutation Success Data:", variables.userId);
      const { userId, agreement_id } = variables;
      // Cancel any outgoing refetches
      await queryClient.cancelQueries({ queryKey: ["sendsign"] });

      // Snapshot the previous value
      const previousSign = queryClient.getQueryData(["sendsign"]);

      // Optimistically update to the new value
      queryClient.setQueryData(["sendsign"], (oldData: any) => {
        // Handle case where oldData might be null
        if (!oldData) return [variables];

        // If oldData exists, add the new agreement
        return [...oldData, variables];
      });

      // Return a context object with the snapshotted value
      return { previousSign };
    },

    onSettled: (result, error, variables, context) => {
      // If there was an error, restore the previous data
      if (error) {
        queryClient.setQueryData(["sendsign"], context);
      }
    },
  });
};

export { useAgreements, useCreateAgreement, useAgreement, useSendForSignature };
