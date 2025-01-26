import { axiosInstance } from "./helper";

export const createAgreement = async (data: any) => {
  try {
    console.log("Axios Client:", axiosInstance);
    const response = await axiosInstance.post("agreements/generate", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
