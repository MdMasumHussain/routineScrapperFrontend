import React from 'react'
import Search from '../component/layout/Search'
import { GoDownload } from 'react-icons/go'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Box from '@mui/material/Box'
import DateComponent from '../component/layout/DateComponent'
import { useTeacher } from "../hooks/useTeacher";
import { useRoutineByTeacher } from "../hooks/useRoutine";


function Teacher() {
  const [open, setOpen] = React.useState(false);
    const handleClick = () => {
      setOpen((prev) => !prev);
    };
    const handleClickAway = () => {
      setOpen(false);
    };
    const [searchParams, setSearchParams] = React.useState({ initial : "" });

    const searchParamsHandeler = (params) => {
      setSearchParams({
        initial: params.batch || "",
      });
    };

   const styles = {
    width: "100%",
    maxWidth: "1024px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "1.25rem",
    padding: "1.5rem",
    backgroundColor: "#e5e7eb",
    border: "1px solid #d1d5db",
    borderRadius: "0.5rem",
    boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
  };
  let teacherName ;
  const {teacher, loading, error} = useTeacher(searchParams);
  teacher.map((item) => {
    teacherName = item.name;
  });
  console.log("Teacher Name:", teacherName);
  const { routines, Tloading, Terror } = useRoutineByTeacher({
    teacher: teacherName || ""
  });
  console.log("Routines by Teacher:", routines);

  return (
    <>
      <div className="mt-5">
        <Search
          onSearch={searchParamsHandeler}
          placeholder="Enter Teacher initial : AIM"
        />
      </div>
      <ClickAwayListener onClickAway={handleClickAway}>
        <div className="container card border border-gray-300 rounded-lg shadow-lg p-6 mx-auto mt-5">
          <p
            className="mb-4 text-blue-700 font-semibold cursor-pointer"
            onClick={handleClick}
          >
            Registered Courses
          </p>
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
          {teacher.length > 0 ? (
            teacher.map((item, index) => (
              <div key={index} className="grid grid-cols-2 gap-y-2">
                <p className="text-left">Teacher</p>
                <p className="text-right justify-self-end">{item.name}</p>

                <p className="text-left">Section</p>
                <p className="text-right justify-self-end">
                  {item.section.join(", ")}
                </p>

                <p className="text-left">Total Courses</p>
                <p className="text-right justify-self-end">
                  {item.totalCourses}
                </p>

                <p className="text-left">Routine</p>
                <p className="text-right justify-self-end">{item.routine}</p>

                <p className="text-left">Classes per Week</p>
                <p className="text-right justify-self-end">
                  {item.classPerWeek}
                </p>

                <p className="text-left">Download PDF for 63_A</p>
                <p className="text-right justify-self-end">
                  <a className="text-blue-700" href="">
                    <GoDownload />
                  </a>
                </p>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500 mt-4">
              No teachers found
            </div>
          )}
          <Box sx={{ position: "relative" }}>
            {/* <button type="button" onClick={handleClick}>
              Open menu dropdown
            </button> */}
            {open ? (
              <Box sx={styles}>
                hare we can add more details about the courses, such as course
                descriptions, instructors, schedules, and any other.
              </Box>
            ) : null}
          </Box>
        </div>
      </ClickAwayListener>
      <DateComponent />
    </>
  );
}

export default Teacher