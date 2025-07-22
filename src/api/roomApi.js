import axiosClient from "./axiosClient";

export const grtRoom = async ({ dept = "", room = "", startTime = "", endTime ="", day = "" }) => {
  try {
    const response = await axiosClient.get("/room", {
      params: { dept, room, startTime, endTime, day },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching rooms:", error);
    throw error;
  }
};
