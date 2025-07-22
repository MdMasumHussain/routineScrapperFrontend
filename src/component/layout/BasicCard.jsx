import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CommentModal from "../layout/CommonModal";

function BasicCard({data}) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      {data && (
        <Card sx={{ minWidth: 275, maxWidth: 300, margin: "20px" }}>
          <CardContent>
            <h2>
              {data.startTime}---------{data.endTime}
            </h2>
            <h3>{data.courseName}</h3>
            <div className="grid-cols-2">
              <div className="flex justify-between">
                <p>Course</p>
                <p>{data.courseCode}</p>
              </div>
              <div className="flex justify-between">
                <p>Section</p>
                <p>{data.batch}</p>
              </div>
              <div className="flex justify-between">
                <p>Teacher</p>
                <p
                  className="text-blue-600 cursor-pointer"
                  onClick={handleModal}
                >
                  {data.teacher}
                </p>
              </div>
              <div className="flex justify-between">
                <p>Room</p>
                <p>{data.room}</p>
              </div>
            </div>
          </CardContent>
          <CommentModal status={isModalOpen} />
        </Card>
      )}
    </>
  );
}

export default BasicCard;
