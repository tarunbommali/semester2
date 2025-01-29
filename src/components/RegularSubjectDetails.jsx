import { motion } from "framer-motion";
import { listVariants, itemVariants } from "../utils/motionUtils";
import CourseOutcomes from "./CourseOutcomes";

/* eslint-disable react/prop-types */
export const RegularSubjectDetails = ({ filteredSubject }) => {
  const {
    course_outcomes = [],
    course_code,
    course_title,
    units = [],
  } = filteredSubject;

  // Function to render unit details with animation
  const renderUnitDetails = (unit, index) => {
    return (
      <li key={index} className="shadow-lg my-2 p-2 rounded-lg">
        <strong className="text-[#1f2328] text-xl my-4">{unit.unit_title}</strong>
        {unit.topics.length > 0 && (
          <ul className="list-circle mt-2">
            {unit.topics.map((topic, topicIndex) => (
              <motion.li
                variants={itemVariants}  // Apply item animation to topics
                key={topicIndex}
                className="mx-4 bg-[#ddf4ff] text-[#0969da] p-2 rounded-lg my-2"
              >
                {topic}
              </motion.li>
            ))}
          </ul>
        )}
      </li>
    );
  };

  const renderUnitList = () => {
    return (
      <div>
        {units.length > 0 ? (
          <motion.ul
            variants={listVariants} // Apply animation to unit list
            initial="hidden"
            animate="visible"
          >
            {units.map((unit, index) => renderUnitDetails(unit, index))}
          </motion.ul>
        ) : (
          <p className="text-gray-500">No units available for this course.</p>
        )}
      </div>
    );
  };

  return (
    <div>
      <h2 className="text-xl text-[#22252d] font-thin my-4">
        {`${course_title} (${course_code})`}
      </h2>

      {renderUnitList()}

      {/* Render Course Outcomes Component */}
      <CourseOutcomes course_outcomes={course_outcomes} />
    </div>
  );
};
