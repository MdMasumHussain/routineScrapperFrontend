import React from "react";
import { GoDownload } from "react-icons/go";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Box from "@mui/material/Box";

function TopContainer() {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen((prev) => !prev);
  };
  const handleClickAway = () => {
    setOpen(false);
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

  return (
    <>
      <ClickAwayListener onClickAway={handleClickAway}>
        <div className="container card border border-gray-300 rounded-lg shadow-lg p-6 mx-auto mt-5">
          <p
            className="mb-4 text-blue-700 font-semibold cursor-pointer"
            onClick={handleClick}
          >
            Enrolled Courses
          </p>
          <div className="grid grid-cols-2 gap-y-2">
            <p className="text-left">Batch</p>
            <p className="text-right justify-self-end">63</p>

            <p className="text-left">Section</p>
            <p className="text-right justify-self-end">A</p>

            <p className="text-left">Total Courses</p>
            <p className="text-right justify-self-end">9</p>

            <p className="text-left">Routine</p>
            <p className="text-right justify-self-end">3.0</p>

            <p className="text-left">Classes per Week</p>
            <p className="text-right justify-self-end">4</p>

            <p className="text-left">Download PDF for 63_A</p>
            <p className="text-right justify-self-end">
              <a className="text-blue-700" href="">
                <GoDownload />
              </a>
            </p>
          </div>

          <Box sx={{ position: "relative" }}>
            {/* <button type="button" onClick={handleClick}>
              Open menu dropdown
            </button> */}
            {open ? (
              <Box sx={styles}>
                hare we can add more details about the courses, such as
                course descriptions, instructors, schedules, and any other.
              </Box>
            ) : null}
          </Box>
        </div>
      </ClickAwayListener>
    </>
  );
}

export default TopContainer;
