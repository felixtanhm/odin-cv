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
            <a href={profile.github}>Github</a>
          </p>
        )}
        {profile?.linkedIn && (
          <p>
            <a href={profile.linkedIn}>LinkedIn</a>
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
