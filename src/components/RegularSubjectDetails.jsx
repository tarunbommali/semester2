/* eslint-disable react/prop-types */
export const RegularSubjectDetails = ({ filteredSubject, handleLabClick }) => {
     const { course_outcomes = [], course_code, course_title, lab, units = [] } = filteredSubject;
  
    return (
      <div>
        {/* Title Section */}
        <h2 className="text-2xl font-semibold text-[#202124] my-2">
          <div className="flex justify-between items-center">
            {`${course_title} (${course_code})`}
            {lab === "yes" && (
              <button
                className="ml-4 text-[#5f6368] hover:text-black py-1 px-3 rounded transition"
                onClick={handleLabClick} 
              >
                Lab
              </button>
            )}
          </div>
        </h2>
  
        {/* Units Section */}
        <h3 className="mt-4 text-xl font-semibold">Units:</h3>
        {units.length > 0 ? (
          <ul>
            {units.map((unit, index) => (
              <li className="shadow-lg my-2 p-4 rounded-lg" key={index}>
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
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No units available for this course.</p>
        )}
  
        {/* Course Outcomes Section */}
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
  