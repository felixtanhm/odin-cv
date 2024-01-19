const templateDataold = {
  profile: {
    fullName: "Felix Tan",
    email: "felixtanhm@gmail.com",
    github: "https://github.com/felixtanhm",
    linkedIn: "https://linkedin.com/felixtanhm",
    location: "Remote / Singapore",
  },
  workExperiences: [
    {
      id: 0,
      title: "Senior Software Engineer",
      company: "Facebook",
      description: "Created React, made history",
      startDate: "01/2014",
      endDate: "Present",
    },
    {
      id: 1,
      title: "Software Engineer",
      company: "Amazon",
      description: "Created React, made history",
      startDate: "01/2009",
      endDate: "12/2013",
    },
  ],
};

const templateData = {
  profile: [
    {
      field: "name",
      default: "Felix Tan",
      type: "text",
      placeholder: "Enter your full name.",
    },
    {
      field: "email",
      default: "felixtanhm@gmail.com",
      type: "email",
      placeholder: "Enter your email.",
    },
    {
      field: "github",
      default: "https://www.github.com/felixtanhm",
      type: "url",
      placeholder: "Enter your github url.",
      subtext: "recommended",
    },
  ],
};

export default templateData;
