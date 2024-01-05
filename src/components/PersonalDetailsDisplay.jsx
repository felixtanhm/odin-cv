function PersonalDetailsDisplay({ name, email, github, linkedin, location }) {
  return (
    <div className="display">
      <h1>{name}</h1>
      <div id="contact-display">
        {email && (
          <p>
            <span>Contact: </span>
            {email}
          </p>
        )}
        {github && (
          <p>
            <span>Github: </span>
            {github}
          </p>
        )}
        {linkedin && (
          <p>
            <span>LinkedIn: </span>
            {linkedin}
          </p>
        )}
        {location && (
          <p>
            <span>Location: </span>
            {location}
          </p>
        )}
      </div>
    </div>
  );
}

export default PersonalDetailsDisplay;
