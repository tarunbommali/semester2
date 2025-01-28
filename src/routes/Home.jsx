import { useState } from "react";
import { subjectSyllabus } from "../utils/syllabus";
import { dbmsLab, computerNetworkLab, javaLab } from "../utils/syllabus";
import Header from "../components/Header";
import TimeTable from "../components/TimeTable";
import { RegularSubjectDetails } from "../components/RegularSubjectDetails";
import { LabDetails } from "../components/LabDetails";

const Home = () => {
  const [selectedCourseCode, setSelectedCourseCode] = useState("");
  const [showLabDetails, setShowLabDetails] = useState(false);

  const handleSelect = (course_code) => {
    setSelectedCourseCode(course_code);
    setShowLabDetails(false); // Reset lab details view when selecting a new course
  };

  const handleLabClick = () => {
    setShowLabDetails(true); // Show lab details
  };

  const handleRegularClick = () => {
    setShowLabDetails(false); // Show regular subject details
  };

  const filteredSubject = subjectSyllabus.find(
    (subject) => subject.course_code === selectedCourseCode
  );

  const labDetails = (() => {
    switch (selectedCourseCode) {
      case "MCA2101":
        return dbmsLab[0];
      case "MCA2102":
        return computerNetworkLab;
      case "MCA1103":
        return javaLab;
      default:
        return null;
    }
  })();

  return (
    <div className="p-4">
      <Header onSelect={handleSelect} />
      <div className="mt-4">
        {filteredSubject ? (
          showLabDetails && labDetails ? (
            // Lab Details
            <LabDetails
              labDetails={labDetails}
              handleRegularClick={handleRegularClick}
            />
          ) : (
            // Regular Subject Details
            <RegularSubjectDetails
              filteredSubject={filteredSubject}
              handleLabClick={handleLabClick}
            />
          )
        ) : (
          <TimeTable />
        )}
      </div>
    </div>
  );
};

export default Home;
