import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const Header = ({ onSelect }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Set breakpoint for small screens
    };

    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize); // Add resize listener

    return () => window.removeEventListener("resize", handleResize); // Clean up listener
  }, []);

  const buttons = [
    { course_title: "DBMS", course_code: "MCA2101" },
    { course_title: "Java", course_code: "MCA1103" },
    { course_title: "AI", course_code: "MCA120" },
    { course_title: "Computer Network", course_code: "MCA2102" },
    { course_title: "DAA", course_code: "MCA2104" },
  ];

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center bg-[#f6f8fa] px-4 py-2 text-black text-xl shadow-md">
      <h1 className="font-bold">MCA-II Semester</h1>

      {isSmallScreen ? (
        // Render a select dropdown for small screens
        <select
          className="bg-white text-black border border-[#d1d9e0] rounded-md py-2 px-4"
          onChange={(e) => onSelect(e.target.value)}
        >
          <option value="" disabled selected>
            Select Course
          </option>
          {buttons.map((button, index) => (
            <option key={index} value={button.course_code}>
              {button.course_title}
            </option>
          ))}
        </select>
      ) : (
        // Render navigation buttons for larger screens
        <nav className="flex">
          {buttons.map((button, index) => (
            <button
              key={index}
              className="bg-[#007bff] text-white border border-[#d1d9e0] rounded-md mx-2 py-2 px-4 hover:bg-[#0056b3] transition duration-200"
              onClick={() => onSelect(button.course_code)}
            >
              {button.course_title}
            </button>
          ))}
        </nav>
      )}
    </div>
  );
};

export default Header;
