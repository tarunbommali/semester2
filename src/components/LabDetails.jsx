
/* eslint-disable react/prop-types */
export const LabDetails = ({ labDetails }) => {
  if (!labDetails) {
    return <p className="text-gray-500">No lab details available.</p>;
  }

  const renderOutcome = () => {
    return (
      <>
      <h3 className="mt-4 text-xl font-semibold">Course Outcomes:</h3>
      <ul className="pl-6">
        {labDetails.course_outcomes.map((outcome, index) => (
          <li key={index}>{outcome}</li>
        ))}
      </ul></>
    );
  };

  const renderObjective = () => {
    return (
      <>
      <h3 className="mt-4 text-xl font-semibold">Lab Objectives:</h3>
      <ul className="pl-6">
        {labDetails.course_objectives.map((objective, index) => (
          <li key={index}>{objective}</li>
        ))}
      </ul></>
    );
  };

  const renderJavaLabExperiments = () => {
    return (
      <div>
        <h3 className="mt-4 text-xl font-semibold">List of Experiments:</h3>
        <ul className=" pl-6">
          {labDetails.part_a_experiments.map((experiment, index) => (
            <li key={index}>{`${index + 1}) ${experiment}`}</li>
          ))}
        </ul>
      </div>
    );
  };

  const renderDBMSLabExperiments = () => {
    return (
      <div>
        <h3 className="mt-4 text-xl font-semibold">List of Experiments:</h3>
        <ul className=" pl-6">
          <li>1. Implementation of different types of operators and built-in functions with suitable examples</li>
          <li>2. Implementation of different types of joins with suitable examples</li>
          <li>3. Create views, partitions, Sequence, Indexes, and locks for a particular DB</li>
          <li>4. Implement different types of constraints on relations</li>
          <li>5. Implementation of subqueries and nested queries</li>
          <li>6. Implement Queries on Group By & Having Clauses, ALIAS, Sequence By, Order By</li>
          <li>7. Control Structure:
            <ul className=" pl-6">
              <li>a. Write a PL/SQL block for Addition of Two Numbers</li>
              <li>b. Write a PL/SQL block for IF, IF and else condition</li>
              <li>c. Write a PL/SQL block for implementation of loops</li>
              <li>d. Write a PL/SQL block for greatest of three numbers using IF ANDELSEIF</li>
            </ul>
          </li>
          <li>8 Exception Handling - Implement the following with respect to exception handling:
            <ul className=" pl-6">
              <li>a. Raising Exceptions, User Defined Exceptions, Pre-Defined Exceptions</li>
            </ul>
          </li>
          <li>9 Write PL/SQL block for an application using exception handlingProcedures
            <ul className=" pl-6">
              <li>a. Write a PL/SQL Procedure using Positional Parameters</li>
              <li>b. Write a PL/SQL Procedure using notational parameters</li>
              <li>c. Write a PL/SQL Procedure for GCDNumbers</li>
              <li>d. Write a PL/SQL Procedures for cursor implementation (explicit and implicit cursors)</li>
            </ul>
          </li>
          <li>10 Functions: 
            <ul className=" pl-6">
              <li>a. Write a PL/SQL block to implement factorial using functions</li>
              <li>b. Write a PL/SQL function to search an address from the given database</li>
            </ul>
          </li>
          <li>11 Write a DBMS program to prepare Pl/SQL reports for an application using functions.</li>
          <li>12 Triggers: 
            <ul className=" pl-6">
              <li>a. Write a Trigger to pop-up the DML operations</li>
              <li>b. Write a Trigger to check the age valid or not Using Message Alert</li>
              <li>c. Create a Trigger to Raise appropriate error code and error message</li>
              <li>d. Create a Trigger on a table so that it will update another table while inserting values</li>
            </ul>
          </li>
          <li>13. Write PL/SQL block for an application using cursors and all types of triggers.</li>
          <li>14. Write a PL/SQL block for transaction operations of a typical application using package.</li>
        </ul>
      </div>
    );
  };

  const renderComputerNetworkLabExperiments = () => {
    return (
      <div>
        <h3 className="mt-4 text-xl font-semibold">List of Experiments:</h3>
        <div>
          <h4 className="mt-2 text-lg font-semibold">PART – A</h4>
          <ul className="pl-6">
            <li>1. Implement the data link layer framing methods such as character stuffing and bit stuffing.</li>
            <li>2. Implement on a data set of characters the three CRC polynomials – CRC 12, CRC 16 and CRC CCIP.</li>
            <li>3. Implement Dijkstra s algorithm to compute the shortest path through a graph.</li>
            <li>4. Take an example subnet graph with weights indicating delay between nodes. Now obtain Routing table at each node using distance vector routing algorithm.</li>
            <li>5. Take an example subnet of hosts. Obtain a broadcast tree for it.</li>
          </ul>
        </div>
        <div>
          <h4 className="mt-2 text-lg font-semibold">PART – B</h4>
          <ul className="pl-6">
            <li>1. Implement the following forms of IPC:
              <ul className="pl-6">
                <li>a. Pipes</li>
                <li>b. FIFO</li>
              </ul>
            </li>
            <li>2. Implement file transfer using Message Queue form of IPC.</li>
            <li>3. Write a program to create an integer variable using shared memory concept and increment the variable simultaneously by two processes. Use semaphores to avoid race conditions.</li>
            <li>4. Design TCP iterative Client and server application to reverse the given input sentence.</li>
            <li>5. Design TCP client and server application to transfer a file.</li>
            <li>6. Design a TCP concurrent server to convert a given text into upper case using multiplexing system call "select".</li>
            <li>7. Design a TCP concurrent server to echo given set of sentences using poll functions.</li>
            <li>8. Design UDP Client and server application to reverse the given input sentence.</li>
            <li>9. Design UDP Client server to transfer a file.</li>
            <li>10. Design using poll client server application to multiplex TCP and UDP requests for converting a given text into upper case.</li>
            <li>11. Design an RPC application to add and subtract a given pair of integers.</li>
          </ul>
        </div>
      </div>
    );
  };

  const renderExperiments = () => {
    switch (labDetails.course_code_lab) {
      case "MCA2101-lab":
        return renderDBMSLabExperiments();
      case "MCA2102-lab":
        return renderComputerNetworkLabExperiments();
      case "MCA1103-lab":
        return renderJavaLabExperiments();
      default:
        return null;
    }
  };

  return (
    <div>
      <h2 className="text-xl text-[#22252d] font-thin my-4">
        {`${labDetails.course_title} (${labDetails.course_code_lab})`}
      </h2>

      {/* Render lab experiments based on the lab code */}
      {renderExperiments()}

      {renderOutcome()}

      {renderObjective()}
    </div>
  );
};
