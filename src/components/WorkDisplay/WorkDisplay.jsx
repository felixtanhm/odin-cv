function WorkDisplay({ workList }) {
  return (
    <div>
      <h2>Work Experience</h2>
      {workList.map((work, index) => {
        return (
          <div key={index}>
            <p>
              {work.title}, {work.company} • {work.startDate} -{work.endDate}
            </p>
            <p>{work.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default WorkDisplay;
