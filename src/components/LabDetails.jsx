/* eslint-disable react/prop-types */
export const LabDetails = ({ labDetails, handleRegularClick }) => {
  if (!labDetails) {
    return <p className="text-gray-500">No lab details available.</p>;
  }

  return (
    <div>
      <h2 className="text-xl text-[#22252d] font-thin my-4">
        {`${labDetails.course_title} (${labDetails.course_code_lab})`}
      </h2>

      <div className="flex items-center">
        <button
          className="text-[#1f1f1f] text-lg font-thin border border-[#d1d9e0] rounded-md mx-2 py-2 px-4 hover:bg-[#0056b3] hover:text-[#f9fafb] transition duration-200"
          onClick={handleRegularClick}
        >
          Regular
        </button>
        <button
          className="text-lg font-thin border rounded-md mx-2 py-2 px-4 bg-[#0056b3] text-[#f9fafb] border-transparent cursor-not-allowed"
          disabled={true} // Lab button is active and disabled
        >
          Lab
        </button>
      </div>

      <h3 className="mt-4 text-xl font-semibold">Experiments:</h3>
      {/* Use the correct lab experiment properties */}
      <ul className="list-disc pl-6">
        {labDetails.part_a_experiments && Array.isArray(labDetails.part_a_experiments) && labDetails.part_a_experiments.length > 0
          ? labDetails.part_a_experiments.map((experiment, index) => (
              <li key={index}>{experiment}</li>
            ))
          : null}

        {labDetails.part_b_experiments && Array.isArray(labDetails.part_b_experiments) && labDetails.part_b_experiments.length > 0
          ? labDetails.part_b_experiments.map((experiment, index) => (
              <li key={index}>
                <strong>{experiment.experiment_title}</strong>
                <ul className="list-circle pl-6">
                  {Array.isArray(experiment.tasks) &&
                    experiment.tasks.map((task, taskIndex) => (
                      <li key={taskIndex}>{task}</li>
                    ))}
                </ul>
              </li>
            ))
          : null}
      </ul>

      <h3 className="mt-4 text-xl font-semibold">Course Outcomes:</h3>
      <ul className="list-disc pl-6">
        {labDetails.course_outcomes.map((outcome, index) => (
          <li key={index}>{outcome}</li>
        ))}
      </ul>

      <h3 className="mt-4 text-xl font-semibold">Lab Objectives:</h3>
      <ul className="list-disc pl-6">
        {labDetails.course_objectives.map((objective, index) => (
          <li key={index}>{objective}</li>
        ))}
      </ul>
    </div>
  );
};
