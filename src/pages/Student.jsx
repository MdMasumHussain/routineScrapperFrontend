import React from "react";
import { useState } from "react";
import TopContainer from "../component/layout/TopContainer";
import DateComponent from "../component/layout/DateComponent";
import BasicCard from "../component/layout/BasicCard";
import Search from "../component/layout/Search";
import { useRoutine } from "../hooks/useRoutine";



function Student() {
  const dayMap = {
    sunday: "Sun",
    monday: "Mon",
    tuesday: "Tue",
    wednesday: "Wed",
    thursday: "Thu",
    friday: "Fri",
    saturday: "Sat",
  };

  const convartDay = (day) => {
    if (!day) return "";
    return dayMap[day.toLowerCase()] || "";
  };
  



  const [searchParams, setSearchParams] = useState({batch: "", dept: ""});
  const today = new Date();
  const defaultWeekday = today.toLocaleDateString("en-US", {
    weekday: "short",
  });

  const [selectedDay, setSelectedDay] = useState(defaultWeekday);
  console.log("selectedDay:", selectedDay);
  const { routines, loading, error } = useRoutine(searchParams);
  console.log("Routines:", routines);

  // routines.forEach((routine) => {
  //   const convertedDay = convartDay(routine.day);
  //   console.log("Routine Day from DB:", routine.day);
  //   console.log("Converted Day:", convertedDay);
  //   console.log("Selected Day:", selectedDay);
  //   console.log("Match:", convertedDay === selectedDay);
  // });
  


  const filteredRoutines = routines.filter(
    (routine) => convartDay(routine.day) === selectedDay
  );

  const searchParamsHandler = (params) => {
    console.log("Search Params Handler:", params);
    setSearchParams({
      batch: params.batch || "",
      dept: params.dept || "CSE",
    });
  };
  console.log("Search Params:", searchParams);
  return (
    <>
      <div className="mt-5">
        <Search
          placeholder="Enter batch: 63_A"
          onSearch={searchParamsHandler}
        />
      </div>
      <TopContainer />
      <DateComponent onDaySelect={setSelectedDay} />
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

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredRoutines.map((routine, index) => (
          <>
            <BasicCard
              key={index}
              data={{
                startTime: routine.startTime,
                endTime: routine.endTime,
                courseName: routine.courseName,
                courseCode: routine.courseCode,
                batch: routine.batch,
                teacher: routine.teacher,
                room: routine.room,
              }}
            />
            {index === 2 && (
              <div className="border-2 border-gray-300 my-8 p-4 rounded-lg">
                <h2 className="text-2xl font-bold text-center mb-4">
                  1:00----------------1:30
                </h2>
                <h3 className="text-xl font-semibold text-center mb-2">
                  Lunch Break
                </h3>
              </div>
            )}
          </>
        ))}
      </div>
    </>
  );
}

export default Student;
