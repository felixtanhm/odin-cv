function EducationDisplay({ educationList }) {
  return (
    <div>
      <h2>Education & Certifications</h2>
      {educationList.map((edu) => {
        return (
          <div key={edu.id}>
            <p>
              {edu.school} • {edu.startDate} - {edu.endDate}
            </p>
            <p>{edu.degree}</p>
          </div>
        );
      })}
    </div>
  );
}

export default EducationDisplay;
