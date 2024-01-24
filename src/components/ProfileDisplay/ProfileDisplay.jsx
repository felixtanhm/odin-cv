import styles from "./ProfileDisplay.module.css";

function ProfileDisplay({ profile }) {
  return (
    <div>
      <h1>{profile.name}</h1>
      <div className={styles["contact-details"]}>
        {profile?.email && (
          <p>
            <span>Contact: </span>
            {profile.email}
            {" • "}
          </p>
        )}
        {profile?.github && (
          <p>
            <a href={profile.github} target="_blank" rel="noreferrer">
              Github
            </a>
            {" • "}
          </p>
        )}
        {profile?.linkedIn && (
          <p>
            <a href={profile.linkedIn} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            {" • "}
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
