import { useState, useEffect } from "react";
import { grtTeacher } from "../api/teacherApi";

export const useTeacher = ({initial}) => {
  const [teacher, setTeacher] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!initial) {
      setTeacher([]);
      setLoading(false);
      setError(null);
      return;
    }
    const fetchRoutines = async () => {
      try {
        setLoading(true);
        const data = await grtTeacher({ initial });
        setTeacher(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRoutines();
  }, [initial]);

  return { teacher, loading, error };
}