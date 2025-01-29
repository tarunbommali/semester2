/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { listVariants,itemVariants } from "../utils/motionUtils";

const CourseOutcomes = ({ course_outcomes }) => {
  return (
    <>
      <h3 className="mt-4 text-xl font-semibold">Course Outcomes:</h3>
      {course_outcomes.length > 0 ? (
        <motion.ul 
          className="list-disc pl-6"
          variants={listVariants}
          initial="hidden"
          animate="visible"
        >
          {course_outcomes.map((outcome, index) => (
            <motion.li key={index} variants={itemVariants}>
              {outcome}
            </motion.li>
          ))}
        </motion.ul>
      ) : (
        <p className="text-gray-500">No course outcomes available.</p>
      )}
    </>
  );
};

export default CourseOutcomes;
