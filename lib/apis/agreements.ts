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

export const fetchAgreements = async (userId: string): Promise<Array<any>> => {
  try {
    console.log("Axios Client:", axiosInstance);
    const response = await axiosInstance.get(`agreements/user/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchAgreementbyId = async (id: string): Promise<any> => {
  try {
    console.log("Axios Client:", axiosInstance);
    const response = await axiosInstance.get(`agreements/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const sendForSignature = async ({
  userId,
  agreement_id,
}: {
  userId: string;
  agreement_id: string;
}): Promise<any> => {
  try {
    console.log("Axios Client:", axiosInstance);
    const response = await axiosInstance.post(
      `agreements/${agreement_id}/sign`,
      { userId },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
