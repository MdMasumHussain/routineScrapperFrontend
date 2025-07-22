import React from "react";
import Dept from "../component/layout/Dept";
import CommonButton from "../component/layout/CommonButton";
import { useState } from "react";
import { useRoom } from "../hooks/useroom";

function Room() {
   const [dept, setDept] = useState("");
   const [roomNumber, setRoomNumber] = useState("");
   const [selectedTimeSlot, setSelectedTimeSlot] = useState({});
   const [selectedDay, setSelectedDay] = useState("");
     const [searchParams, setSearchParams] = useState({dept: "", room: "", startTime: "", endTime: "", day: ""});

   const timeSlots = [
     { id: 1, label: "09:00 - 10:20", startTime: "09:00", endTime: "10:20" },
     { id: 2, label: "10:30 - 11:50", startTime: "10:30", endTime: "11:50" },
     { id: 3, label: "12:00 - 1:10", startTime: "12:00", endTime: "01:10" },
     { id: 4, label: "01:30 - 2:50", startTime: "01:30", endTime: "02:50" },
     { id: 5, label: "03:00 - 04:20", startTime: "03:00", endTime: "04:20" },
   ];
   

   const handleRoomChange = (e) => {
     setRoomNumber(e.target.value);
   };

   const handleTimeChange = (e) => {
     const slot = timeSlots.find(
       (item) => item.id === parseInt(e.target.value)
     );
     setSelectedTimeSlot(slot || {});
   };

   const handleDayChange = (e) => {
     setSelectedDay(e.target.value);
   };

   const handleDeptChange = (e) => {
     setDept(e.target.value);
   };

   const handleSubmit = () => {
     const requestData = {
       dept,
       room : roomNumber,
       day: selectedDay,
       startTime: selectedTimeSlot.startTime,
       endTime: selectedTimeSlot.endTime,
     };
      setSearchParams(requestData);
     console.log(requestData);
   };
   const { rooms, loading, error } = useRoom(searchParams);
   console.log("Rooms:", rooms);
  return (
    <>
      <section>
        <Dept dept={dept} onDeptChange={handleDeptChange} />

        <div className="bg-white flex mt-5 px-1 py-1 rounded-full border border-red-500 overflow-hidden max-w-md mx-auto">
          <input
            className="px-3 outline-0"
            type="text"
            placeholder="Enter Room Number: 222"
            value={roomNumber}
            onChange={handleRoomChange}
          />
        </div>

        <div className="bg-white flex mt-5 px-1 py-1 rounded-full border border-red-500 overflow-hidden max-w-md mx-auto">
          <select
            className="bg-white outline-none text-sm w-full px-2 py-1"
            onChange={handleTimeChange}
          >
            <option value="">Select Time</option>
            {timeSlots.map((slot) => (
              <option key={slot.id} value={slot.id}>
                {slot.label}
              </option>
            ))}
          </select>
        </div>

        <div className="bg-white flex mt-5 px-1 py-1 rounded-full border border-red-500 overflow-hidden max-w-md mx-auto">
          <select
            className="bg-white outline-none text-sm w-full px-2 py-1"
            onChange={handleDayChange}
          >
            <option value="">Select Day</option>
            {[
              "Saturday",
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
            ].map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
        </div>

        <div onClick={handleSubmit}>
          <CommonButton text="Get Schedule" />
        </div>
      </section>
      <section>
        {loading && (
          <div className="text-center text-gray-500 mt-4">Loading...</div>
        )}
        {error ? (
          <div className="text-center text-red-500 mt-4">
            Error: {error.message}
          </div>
        ) : (
          <></>
        )}
        {rooms.length > 0 ? (
          rooms.map((room, index) => (
            <div
              key={index}
              className="container card border border-gray-300 rounded-lg shadow-lg p-6 mx-auto mt-5"
            >
              <p className="mb-4 text-red-300 font-bold">{room.courseName}</p>
              <div className="grid grid-cols-2 gap-y-2">
                <p className="text-left">Time</p>
                <p className="text-right justify-self-end">
                  {room.startTime}-{room.endTime}
                </p>

                <p className="text-left">Course</p>
                <p className="text-right justify-self-end">{room.courseCode}</p>

                <p className="text-left">Batch</p>
                <p className="text-right justify-self-end">{room.batch}</p>

                <p className="text-left">Room</p>
                <p className="text-right justify-self-end">{room.room}</p>

                <p className="text-left">Teacher</p>
                <p className="text-right justify-self-end">{room.teacher}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500 mt-4">No rooms found</div>
        )}
      </section>
    </>
  );
}

export default Room;
