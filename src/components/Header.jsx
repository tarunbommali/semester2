import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const Header = ({ onSelect }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [activeCourse, setActiveCourse] = useState(""); // State to track the active course

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Set breakpoint for small screens
    };

    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize); // Add resize listener

    return () => window.removeEventListener("resize", handleResize); // Clean up listener
  }, []);

  const buttons = [
    { course_title: "Time Table", course_code: "timetable" },
    { course_title: "AI", course_code: "MCA120" },
    { course_title: "Computer Network", course_code: "MCA2102" },
    { course_title: "DAA", course_code: "MCA2104" },
    { course_title: "DBMS", course_code: "MCA2101" },
    { course_title: "Java", course_code: "MCA1103" },
  ];

  const handleCourseSelect = (courseCode) => {
    setActiveCourse(courseCode); // Update the active course
    onSelect(courseCode); // Call the parent handler
  };

  return (
    <div>
      {isSmallScreen ? (
        // Render a select dropdown for small screens with flex direction column
        <div className="flex flex-col items-start bg-[#f6f8fa] px-4 py-2 text-black text-xl shadow-md">
          <h1 className="font-bold">MCA-II Semester</h1>

          <select
            className="bg-white text-black border border-[#d1d9e0] rounded-md py-2 px-4 mt-2"
            value={activeCourse}
            onChange={(e) => handleCourseSelect(e.target.value)}
          >
            <option value="" disabled>
              Select Course
            </option>
            {buttons.map((button, index) => (
              <option key={index} value={button.course_code}>
                {button.course_title}
              </option>
            ))}
          </select>
        </div>
      ) : (
        // Render navigation buttons for larger screens
        <div className="flex flex-col sm:flex-row justify-between items-center bg-[#f6f8fa] px-4 py-2 text-black text-xl shadow-md">
          <h1 className="font-bold">MCA-II Semester</h1>

          <nav className="flex">
            {buttons.map((button, index) => (
              <button
                key={index}
                className={`text-lg font-thin border border-[#d1d9e0] rounded-md mx-2 py-2 px-4 transition duration-200 ${
                  activeCourse === button.course_code
                    ? "bg-[#0056b3] text-[#f9fafb] border-transparent cursor-not-allowed"
                    : "text-[#1f1f1f] hover:bg-[#0056b3] hover:text-[#f9fafb]"
                }`}
                onClick={() => handleCourseSelect(button.course_code)}
              >
                {button.course_title}
              </button>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;
