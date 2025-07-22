import React from 'react'
import Dept from '../component/layout/Dept'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";


function EmptyRoom() {
  return (
    <>
      <Dept />
      <div className="bg-white flex mt-5 px-1 py-1 rounded-full border border-red-500 overflow-hidden max-w-md mx-auto">
          <select
            className="bg-white outline-none text-sm w-full px-2 py-1"
            name="time"
            id="time"
          >
            <option value="CSE">Select Time</option>
            <option value="1">9:00 - 10:20</option>
            <option value="2">10:30 - 11:50</option>
            <option value="3">12:00 - 1:10</option>
            <option value="4">1:30 - 2:50</option>
            <option value="5">3:00 - 4:20</option>
          </select>
        </div>
        <section>
          <Card sx={{border:"1px solid lightgray", margin: "20px"}}>
            <CardContent>
              <h2 className="text-center text-black font-bold">222</h2>
              <p className="text-center text-gray-600">9:00-10:20</p>
            </CardContent>
          </Card>
          <Card sx={{border:"1px solid lightgray", margin: "20px"}}>
            <CardContent>
              <h2 className="text-center text-black font-bold">222</h2>
              <p className="text-center text-gray-600">9:00-10:20</p>
            </CardContent>
          </Card>
          <Card sx={{border:"1px solid lightgray", margin: "20px"}}>
            <CardContent>
              <h2 className="text-center text-black font-bold">222</h2>
              <p className="text-center text-gray-600">9:00-10:20</p>
            </CardContent>
          </Card>
          <Card sx={{border:"1px solid lightgray", margin: "20px"}}>
            <CardContent>
              <h2 className="text-center text-black font-bold">222</h2>
              <p className="text-center text-gray-600">9:00-10:20</p>
            </CardContent>
          </Card>
          <Card sx={{border:"1px solid lightgray", margin: "20px"}}>
            <CardContent>
              <h2 className="text-center text-black font-bold">222</h2>
              <p className="text-center text-gray-600">9:00-10:20</p>
            </CardContent>
          </Card>
        </section>
    </>
  )
}

export default EmptyRoom