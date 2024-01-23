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
