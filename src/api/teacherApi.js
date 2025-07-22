import axiosClient from "./axiosClient";

export const grtTeacher = async ({ initial }) => {
  try {
    const response = await axiosClient.get("/teacher", {
      params: { initial },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching routines:", error);
    throw error;
  }
};
