function ProfileDisplay({ profile }) {
  return (
    <div>
      <h1>{profile.name}</h1>
      <div>
        {profile?.email && (
          <p>
            <span>Contact: </span>
            {profile.email}
          </p>
        )}
        {profile?.github && (
          <p>
            <span>Github: </span>
            {profile.github}
          </p>
        )}
        {profile?.linkedin && (
          <p>
            <span>LinkedIn: </span>
            {profile.linkedin}
          </p>
        )}
        {profile?.location && (
          <p>
            <span>Location: </span>
            {profile.location}
          </p>
        )}
      </div>
    </div>
  );
}

export default ProfileDisplay;
