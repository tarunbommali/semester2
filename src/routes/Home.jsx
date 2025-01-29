import { useState } from "react";
import { subjectSyllabus } from "../utils/syllabus";
import { dbmsLab, computerNetworkLab, javaLab } from "../utils/syllabus";
import Header from "../components/Header";
import TimeTable from "../components/TimeTable";
import { RegularSubjectDetails } from "../components/RegularSubjectDetails";
import { LabDetails } from "../components/LabDetails";

 const Home = () => {
  const [selectedCourseCode, setSelectedCourseCode] = useState(""); // Store the selected course code
  const [showLabDetails, setShowLabDetails] = useState(false); // State to track if lab details are shown

  // Function to handle the course selection
  const handleSelect = (course_code) => {
    setSelectedCourseCode(course_code);
    setShowLabDetails(false); 
  };

  // Function to show lab details
  const handleLabClick = () => {
    setShowLabDetails(true); // Show lab details
  };

  // Function to show regular details
  const handleRegularClick = () => {
    setShowLabDetails(false); // Hide lab details and show regular details
  };

  // Find the filtered subject from the syllabus
  const filteredSubject = subjectSyllabus.find(
    (subject) => subject.course_code === selectedCourseCode
  );

  // Get the corresponding lab details based on the course code
  const labDetails = (() => {
    switch (selectedCourseCode) {
      case "MCA2101":
        return dbmsLab[0];  // DBMS lab details
      case "MCA2102":
        return computerNetworkLab; // Computer Network lab details
      case "MCA1103":
        return javaLab; // Java lab details
      default:
        return null;
    }
  })();

  return (
    <div className="p-4">
      <Header onSelect={handleSelect} />
      <div className="mt-4">
        {/* Render Timetable or filtered subject */}
        {selectedCourseCode === "timetable" ? (
          <TimeTable />
        ) : filteredSubject ? (
          <div>
            {/* Course Buttons (Regular and Lab Details) */}
            <div className="flex items-center">
              <button
                className={`text-lg font-thin border rounded-md mx-2 py-2 px-4 ${!showLabDetails ? "bg-[#0056b3] text-[#f9fafb]" : "text-[#1f1f1f] hover:bg-[#0056b3] hover:text-[#f9fafb]"}`}
                onClick={handleRegularClick}
              >
                Regular
              </button>

              {filteredSubject.lab === "yes" && (
                <button
                  className={`text-lg font-thin border rounded-md mx-2 py-2 px-4 ${showLabDetails ? "bg-[#0056b3] text-[#f9fafb]" : "hover:bg-[#0056b3] hover:text-[#f9fafb]"}`}
                  onClick={handleLabClick}
                >
                  View Lab Details
                </button>
              )}
            </div>

            {/* Show either Regular Subject Details or Lab Details */}
            {showLabDetails && labDetails ? (
              <div>
                <LabDetails labDetails={labDetails} handleRegularClick={handleRegularClick} />
              </div>
            ) : (
              <RegularSubjectDetails filteredSubject={filteredSubject} handleLabClick={handleLabClick} />
            )}
          </div>
        ) : (
          <TimeTable />
        )}
      </div>
    </div>
  );
};


export default Home