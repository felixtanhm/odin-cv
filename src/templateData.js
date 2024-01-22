// const templateDataold = {
//   profile: {
//     fullName: "Felix Tan",
//     email: "felixtanhm@gmail.com",
//     github: "https://github.com/felixtanhm",
//     linkedIn: "https://linkedin.com/felixtanhm",
//     location: "Remote / Singapore",
//   },
//   workExperiences: [
//     {
//       id: 0,
//       title: "Senior Software Engineer",
//       company: "Facebook",
//       description: "Created React, made history",
//       startDate: "01/2014",
//       endDate: "Present",
//     },
//     {
//       id: 1,
//       title: "Software Engineer",
//       company: "Amazon",
//       description: "Created React, made history",
//       startDate: "01/2009",
//       endDate: "12/2013",
//     },
//   ],
// };

// const templateData = {
//   profile: [
//     {
//       field: "name",
//       default: "Felix Tan",
//       type: "text",
//       placeholder: "Enter your full name.",
//     },
//     {
//       field: "email",
//       default: "felixtanhm@gmail.com",
//       type: "email",
//       placeholder: "Enter your email.",
//     },
//     {
//       field: "github",
//       default: "https://www.github.com/felixtanhm",
//       type: "url",
//       placeholder: "Enter your github url.",
//       subtext: "recommended",
//     },
//   ],
// };

const templateData = {
  profile: {
    name: {
      type: "text",
      placeholder: "Enter your full name.",
      default: "",
    },
    email: {
      type: "email",
      placeholder: "Enter your email.",
      default: "",
    },
    github: {
      type: "url",
      placeholder: "Enter your github url.",
      default: "",
      subtext: "recommended",
    },
    linkedIn: {
      type: "url",
      placeholder: "Enter your linkedIn url.",
      default: "",
      subtext: "recommended",
    },
    location: {
      type: "textarea",
      placeholder: "Where are you currently based?",
      default: "",
      subtext: "recommended",
    },
  },
  work: {
    title: {
      type: "text",
      placeholder: "What is the name of your role?",
      default: "",
    },
    company: {
      type: "text",
      placeholder: "Name of the company you work for.",
      default: "",
    },
    description: {
      type: "textarea",
      placeholder: "Describe your roles and responsibilities",
      default: "",
    },
    startDate: {
      type: "date",
      placeholder: "",
      default: "",
    },
    endDate: {
      type: "date",
      placeholder: "",
      default: "",
    },
  },
};

export default templateData;
