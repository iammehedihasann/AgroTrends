import React from "react";
import { useState, useEffect } from "react";

const Calender = () => {
  const [date, setDate] = useState(new Date());

  // Realtime  clock update
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Get details from current state
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();
  const today = date.getDate();

  const dayInMonth = new Date(currentYear, currentYear + 1, 0).getDate();
  const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();

  const prevMonthDays = new Date(currentYear, currentMonth, 0).getDate();

  const generateCalender = () => {
    const calender = [];

    // Previous month's trailling days
    for (let i = firstDayIndex - 1; i >= 0; i--) {
      calender.push({
        day: prevMonthDays - i,
        currentMonth: false,
      });
    }
    //current month  days
    for (let i = 1; i <= dayInMonth; i++) {
      calender.push({
        day: i,
        currentMonth: true,
        isToday: i === today && date.getMonth() === currentMonth,
      });
    }

    //Next month's leading days
    while (Calender.length % 7 !== 0) {
      calender.push({
        day: (Calender.length % 7) + 1,
        currenMonth: false,
      });
    }
    return Calender;
  };

  const calenderDays = generateCalender();

  const goToPrevMonth = () => {
    const newDate = new Date(currentYear, currentMonth - 1, 1);
    setDate(newDate);
  };

  const goToNextMonth = () => {
    const newDate = new Date(currentYear, currentMonth + 1, 1);
    setDate(newDate);
  };

  const getMonthName = (MonthIndex) => {
    new Date(0, MonthIndex).toLocaleString("default", { month: "long" });
  };
  return (
    <div className="max-w-xl mx-auto p-4 mt-10 bg-white shadow-lg rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={goToPrevMonth}
          className="text-xl text-gray-600 hover:text-white border p-2 rounded shadow-md hover:bg-green-700 "
        >
          &lt;
        </button>

        <h2 className="text-xl text-gray-600 hover:text-black">
          {getMonthName(currentMonth)}
          {currentYear}
        </h2>
        <button
          onClick={goToNextMonth}
          className="text-xl text-gray-600 hover:text-white border p-2 rounded shadow-md hover:bg-green-700 "
        >
          &gt;
        </button>
        <p>This is calender Pages</p>
      </div>
      <div className="text-center text-gray-500 mb-4">
        {Date.toLocaleString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })}

        <p>This is TolocalString</p>
      </div>

      <div className="grid grid-cols-7 gap-2 text-center font-semibold text-gray-700 mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2 text-center">
        {calenderDays.map((d, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg text-sm ${
              !d.currentMonth
                ? "text-gray-300"
                : d.isToday
                ? "bg-blue-500 text-white font-bold"
                : "text-gray-800 hover:bg-blue-100"
            }`}
          >
            {d.day}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Calender;
