import { timetable } from "../utils/timeTable";

const Timetable = () => {
  // Function to get today's day in lowercase (e.g., "monday", "tuesday")
  const getToday = () => {
    const days = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];
    return days[new Date().getDay()];
  };

  const today = getToday();
  const getDate = () => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date().toLocaleDateString(undefined, options);
  };
  return (
    <div className="p-6 bg-gray-50">
      <h1 className="text-xl text-[#22252d] font-thin mb-4">
        {timetable.semester} Timetable {timetable.academicYear}
      </h1>

      <p className="text-[#22252d] mb-6">
        <span className="text-[#1f1f1f] font-bold">Today</span>{" "}
        <span className="font-light">Day</span>{" "}
        {getToday().charAt(0).toUpperCase() + getToday().slice(1)}{" "}
        <span className="font-light">Date</span> {getDate()}
      </p>

      <div className="overflow-auto">
        <table className="table-auto border-collapse border border-gray-300 w-full text-sm">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Day</th>
              {timetable.schedule.map((slot, index) => (
                <th key={index} className="border border-gray-300 px-4 py-2">
                  {slot.time}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              "monday",
              "tuesday",
              "wednesday",
              "thursday",
              "friday",
              "saturday",
            ].map((day, index) => (
              <tr
                key={index}
                className={`text-center ${
                  day === today ? "bg-blue-100 font-semibold" : "" // Highlight the row if it matches today
                }`}
              >
                <td className="border border-gray-300 px-4 py-2 capitalize">
                  {day}
                </td>
                {timetable.schedule.map((slot, idx) => (
                  <td key={idx} className="border border-gray-300 px-4 py-2">
                    {slot[day] || "-"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Timetable;
