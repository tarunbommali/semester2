import { timetable } from "../utils/timeTable";

const Timetable = () => {
  // Function to get today's day in lowercase (e.g., "monday", "tuesday")
  const getToday = () => {
    const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    return days[new Date().getDay()];
  };

  const today = getToday(); // Get today's day

  return (
    <div className="p-6 bg-gray-50">
      <h1 className="text-2xl font-bold mb-4">{timetable.semester} Timetable</h1>
      <p className="text-gray-700 mb-2">Academic Year: {timetable.academicYear}</p>
      <p className="text-gray-700 mb-6">Effective Date: {timetable.effectiveDate}</p>
      <div className="overflow-auto">
        <table className="table-auto border-collapse border border-gray-300 w-full text-sm">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Day</th>
              {timetable.schedule.map((slot, index) => (
                <th key={index} className="border border-gray-300 px-4 py-2">{slot.time}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {["monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].map((day, index) => (
              <tr
                key={index}
                className={`text-center ${
                  day === today ? "bg-blue-100 font-semibold" : "" // Highlight the row if it matches today
                }`}
              >
                <td className="border border-gray-300 px-4 py-2 capitalize">{day}</td>
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
