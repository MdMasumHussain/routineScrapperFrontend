import axiosClient from "./axiosClient";

export const grtRoutines = async ({dept='', batch=''}) => {
  try {
    const response = await axiosClient.get("/routine", {
      params: { dept, batch }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching routines:", error);
    throw error;
  }
}

export const getRoutinesByTeacher = async (teacher) => {
  try {
    const response = await axiosClient.get("/routine/teacher", {
      params: { teacher }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching routines by teacher:", error);
    throw error;
  }
}