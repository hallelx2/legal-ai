"use server";

import { axiosInstance } from "./helper";

export const getPredefinedTemplates = async () => {
  try {
    const response = await axiosInstance.get("templates/predefined");
    return response.data;
  } catch (error) {
    console.error("Error in getPredefinedTemplates:", error);
    return null;
  }
};
