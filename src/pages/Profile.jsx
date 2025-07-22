import React from 'react'
import CommonButton from '../component/layout/CommonButton'

function Profile() {
  return (
    <>
        <section>
         <div className="container card border border-gray-300 rounded-lg shadow-lg p-6 mx-auto mt-5">
          <p className="mb-4 text-red-300 font-bold">
            Md Masum Hossain
          </p>
          <div className="grid grid-cols-2 gap-y-2">
            <p className="text-left">Depertment</p>
            <p className="text-right justify-self-end">CSE</p>

            <p className="text-left">ID</p>
            <p className="text-right justify-self-end">0272320005101024</p>

            <p className="text-left">Batch</p>
            <p className="text-right justify-self-end">63</p>

            <p className="text-left">Faculty</p>
            <p className="text-right justify-self-end">Science</p>

            <p className="text-left">Since</p>
            <p className="text-right justify-self-end">Fall-2023</p>

            <p className="text-left">Shift</p>
            <p className="text-right justify-self-end">Day</p>
          </div>
        </div>
        <CommonButton text="Logout" />
      </section>
    </>
  )
}

export default Profile