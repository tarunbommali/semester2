import * as motion from "motion/react-client";

/* eslint-disable react/prop-types */
export const RegularSubjectDetails = ({
  filteredSubject,
  handleLabClick,
}) => {
  const { course_outcomes = [], course_code, course_title, lab, units = [] } = filteredSubject;

  return (
    <div>
      <h2 className="text-xl text-[#22252d] font-thin my-4">
        {`${course_title} (${course_code})`}
      </h2>

      <div className="flex items-center">
        <button
          className="text-lg font-thin border rounded-md mx-2 py-2 px-4 bg-[#0056b3] text-[#f9fafb] border-transparent cursor-not-allowed"
          disabled={true}
        >
          Regular
        </button>
        {lab === "yes" && (
          <button
            className="text-lg font-thin border rounded-md mx-2 py-2 px-4 hover:bg-[#0056b3] hover:text-[#f9fafb] transition duration-200"
            onClick={handleLabClick}
          >
            View Lab Details
          </button>
        )}
      </div>

      <h3 className="mt-4 text-xl font-semibold">Units:</h3>
      {units.length > 0 ? (
        <ul>
          {units.map((unit, index) => (
            <motion.li
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                scale: { type: "spring", visualDuration: 0.8, bounce: 0.5 },
              }}
              key={index}
              className="shadow-lg my-2 p-2 rounded-lg"
            >
              <strong className="text-[#1f2328] text-xl my-4">
                {unit.unit_title}
              </strong>
              {unit.topics.length > 0 && (
                <ul className="list-circle mt-2">
                  {unit.topics.map((topic, topicIndex) => (
                    <li
                      key={topicIndex}
                      className="mx-4 bg-[#ddf4ff] text-[#0969da] p-2 rounded-lg my-2"
                    >
                      {topic}
                    </li>
                  ))}
                </ul>
              )}
            </motion.li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No units available for this course.</p>
      )}

      <h3 className="mt-4 text-xl font-semibold">Course Outcomes:</h3>
      {course_outcomes.length > 0 ? (
        <ul className="list-disc pl-6">
          {course_outcomes.map((outcome, index) => (
            <li key={index}>{outcome}</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No course outcomes available.</p>
      )}
    </div>
  );
};
