import { format } from "date-fns";

function EducationDisplay({ educationList }) {
  return (
    <div>
      <h2>Education & Certifications</h2>
      {educationList.map((edu) => {
        return (
          <div key={edu.id}>
            <p>
              {edu.school} • {format(edu.startDate, "MMM yyyy")} -{" "}
              {format(edu.endDate, "MMM yyyy")}
            </p>
            <p>{edu.degree}</p>
          </div>
        );
      })}
    </div>
  );
}

export default EducationDisplay;
