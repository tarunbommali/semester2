/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const Header = ({ onSelect }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [activeCourse, setActiveCourse] = useState(""); // State to track the active course
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track if the menu is open
  const menuRef = useRef(null); // Ref to detect clicks outside the menu

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Set breakpoint for small screens
    };

    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize); // Add resize listener

    return () => window.removeEventListener("resize", handleResize); // Clean up listener
  }, []);

  useEffect(() => {
    // Close the menu if clicked outside
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      window.addEventListener("click", handleClickOutside);
    } else {
      window.removeEventListener("click", handleClickOutside);
    }

    return () => window.removeEventListener("click", handleClickOutside); // Cleanup on unmount
  }, []);

  const buttons = [
    { course_title: "AI", course_code: "MCA2105" },
    { course_title: "Computer Network", course_code: "MCA2102" },
    { course_title: "DAA", course_code: "MCA2104" },
    { course_title: "DBMS", course_code: "MCA2101" },
    { course_title: "Java", course_code: "MCA1103" },
  ];

  const handleCourseSelect = (courseCode) => {
    setActiveCourse(courseCode); // Update the active course
    onSelect(courseCode); // Call the parent handler
    setIsMenuOpen(false); // Close the menu after selecting
  };

  const renderLargeScreen = () => (
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
        <button
          onClick={() => handleCourseSelect("timetable")}
          className={`text-lg font-thin border border-[#d1d9e0] rounded-md mx-2 py-2 px-4 transition duration-200 ${
            activeCourse === "timetable"
              ? "bg-[#0056b3] text-[#f9fafb] border-transparent cursor-not-allowed"
              : "text-[#1f1f1f] hover:bg-[#0056b3] hover:text-[#f9fafb]"
          }`}
        >
          Time Table
        </button>
      </nav>
    </div>
  );

  const renderSmallScreen = () => (
    <div className="flex flex-col items-start bg-[#f6f8fa] px-4 py-2 text-black text-xl shadow-md relative">
      <div className="flex justify-between w-full items-center">
        <h1 className="font-bold">MCA-II Semester</h1>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <GiHamburgerMenu className="cursor-pointer" />
        </button>
      </div>

      {/* Menu Overlay */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="bg-white fixed top-0 left-0 w-full h-full z-50 shadow-lg border-t border-[#d1d9e0] mt-4"
          style={{
            display: "flex",
            flexDirection: "column",
            paddingTop: "50px",
            overflowY: "auto",
          }}
        >
          <div className="flex justify-between  mb-4 px-4 w-full items-center">
            <h1 className="font-bold">MCA-II Semester</h1>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <MdClose className="cursor-pointer" />
            </button>
          </div>

          {buttons.map((button, index) => (
            <button
              key={index}
              className={`w-full text-lg font-thin border-t border-[#d1d9e0] py-2 px-4 text-left transition duration-200 ${
                activeCourse === button.course_code
                  ? "bg-[#0056b3] text-[#f9fafb] border-transparent cursor-not-allowed"
                  : "text-[#1f1f1f] hover:bg-[#0056b3] hover:text-[#f9fafb]"
              }`}
              onClick={() => handleCourseSelect(button.course_code)}
            >
              {button.course_title}
            </button>
          ))}
          <button
            onClick={() => handleCourseSelect("timetable")}
            className={`w-full text-lg font-thin border-t border-[#d1d9e0] py-2 px-4 text-left transition duration-200 ${
              activeCourse === "timetable"
                ? "bg-[#0056b3] text-[#f9fafb] border-transparent cursor-not-allowed"
                : "text-[#1f1f1f] hover:bg-[#0056b3] hover:text-[#f9fafb]"
            }`}
          >
            Time Table
          </button>
        </div>
      )}
    </div>
  );

  return <div>{isSmallScreen ? renderSmallScreen() : renderLargeScreen()}</div>;
};

export default Header;
