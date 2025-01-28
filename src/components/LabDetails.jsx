/* eslint-disable react/prop-types */
export const LabDetails = ({ labDetails, handleRegularClick }) => {
    if (!labDetails) {
      return <p className="text-gray-500">No lab details available.</p>;
    }
  
    return (
      <div>
        <h2 className="text-2xl font-semibold text-[#202124] my-2">
          <div className="flex justify-between items-center">
            {`${labDetails.course_title} (${labDetails.course_code_lab})`}
            <button
              className="ml-4 text-[#5f6368] hover:text-black py-1 px-3 rounded transition"
              onClick={handleRegularClick} // Show regular subject details
            >
              Regular
            </button>
          </div>
        </h2>
        <h3 className="mt-4 text-xl font-semibold">Lab Objectives:</h3>
        <ul className="list-disc pl-6">
          {labDetails.course_objectives.map((objective, index) => (
            <li key={index}>{objective}</li>
          ))}
        </ul>
        <h3 className="mt-4 text-xl font-semibold">Experiments:</h3>
        <ul className="list-disc pl-6">
          {labDetails.list_of_experiments.map((experiment, index) =>
            typeof experiment === "string" ? (
              <li key={index}>{experiment}</li>
            ) : (
              <li key={index}>
                <strong>{experiment.experiment_title}</strong>
                <ul className="list-circle pl-6">
                  {experiment.tasks.map((task, taskIndex) => (
                    <li key={taskIndex}>{task}</li>
                  ))}
                </ul>
              </li>
            )
          )}
        </ul>
        <h3 className="mt-4 text-xl font-semibold">Course Outcomes:</h3>
        <ul className="list-disc pl-6">
          {labDetails.course_outcomes.map((outcome, index) => (
            <li key={index}>{outcome}</li>
          ))}
        </ul>
      </div>
    );
  };
  