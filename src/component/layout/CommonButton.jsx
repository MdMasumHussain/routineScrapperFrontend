import React from 'react'

function CommonButton(text) {
  return (
    <>
    <div className="bg-white flex mt-5 rounded-full border border-red-500 overflow-hidden max-w-md mx-auto">
          <button className="bg-red-600 hover:bg-red-700 w-full transition-all text-white text-sm rounded-full px-5 py-2.5">
            {text.text || "Submit"}
          </button>
        </div>
    </>
  )
}

export default CommonButton