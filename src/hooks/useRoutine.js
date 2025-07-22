import { useState, useEffect } from "react";
import { grtRoutines, getRoutinesByTeacher } from "../api/routineApi";

export const useRoutine = ({dept, batch}) => {
  const [routines, setRoutines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!dept && !batch) {
      setRoutines([]);
      setLoading(false);
      setError(null);
      return;
    }
    const fetchRoutines = async () => {
      try {
        setLoading(true);
        const data = await grtRoutines({ dept, batch });
        setRoutines(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRoutines();
  }, [dept, batch]);

  return { routines, loading, error };
}

export const useRoutineByTeacher = (teacher) => {
  const [routines, setRoutines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Fetching routines for teacher:", teacher);
    if (!teacher) {
      setRoutines([]);
      setLoading(false);
      setError(null);
      return;
    }
    const fetchRoutinesByTeacher = async () => {
      try {
        setLoading(true);
        const data = await getRoutinesByTeacher(teacher);
        setRoutines(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRoutinesByTeacher();
  }, [teacher]);

  return { routines, loading, error };
}
