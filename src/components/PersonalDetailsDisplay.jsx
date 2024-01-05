function PersonalDetailsDisplay({ name, email, github, linkedin, location }) {
  return (
    <div className="display">
      <h1>{name}</h1>
      <div id="contact-display">
        <p>
          <span>Contact: </span>
          {email}
        </p>
        <p>
          <span>Github: </span>
          {github}
        </p>
        <p>
          <span>LinkedIn: </span>
          {linkedin}
        </p>
        <p>
          <span>Location: </span>
          {location}
        </p>
      </div>
    </div>
  );
}

export default PersonalDetailsDisplay;
