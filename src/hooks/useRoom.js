import { useState, useEffect } from "react";
import { grtRoom } from "../api/roomApi";

export const useRoom = ({ dept, room, startTime, endTime, day }) => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!dept && !room && !startTime && !endTime && !day) {
      setRooms([]);
      setLoading(false);
      setError(null);
      return;
    }


    const fetchRoutines = async () => {
      try {
        setLoading(true);
        const data = await grtRoom({ dept, room, startTime, endTime, day });
        setRooms(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRoutines();
  }, [dept, room, startTime, endTime, day]);

  return { rooms, loading, error };
};