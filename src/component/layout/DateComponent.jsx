import React from "react";
import { useState } from "react";

function DateComponent({onDaySelect}) {
  const today = new Date().getDate();
  const days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    const day = date.getDate();
    const weekday = date.toLocaleDateString("en-US", { weekday: "short" });
    return { day, weekday };
  });
  const todayIndex = days.findIndex((d) => d.day === today);
  const [selectedIndex, setSelectedIndex] = useState(todayIndex);

  const handleSelectDay = (index) => {
    setSelectedIndex(index);
    if (onDaySelect && typeof onDaySelect === "function") {
      onDaySelect(days[index].weekday);
      console.log("Selected Day in dateComponent:", days[index].weekday);
    }
  };

  return (
    <>
      <div className="mt-5 overflow-x-auto">
        <div className="flex sm:grid sm:grid-cols-7 gap-4 min-w-max sm:min-w-0 px-2">
          {days.map(({ day, weekday }, index) => {
            const isSelected = selectedIndex === index;
            return (
              <div
                key={index}
                onClick={() => handleSelectDay(index)}
                className={`min-w-[80px] card border border-gray-300 rounded-lg shadow-lg p-4 text-center flex-shrink-0 cursor-pointer transition-all duration-300
                ${
                  isSelected
                    ? "bg-gradient-to-r from-red-600 to-red-50 text-white"
                    : "hover:bg-gradient-to-r from-red-600 to-red-50"
                }
              `}
              >
                <p className="text-center">{day}</p>
                <p className="text-center">{weekday}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default DateComponent;
