const templateData = {
  profile: {
    name: {
      type: "text",
      placeholder: "Enter your full name.",
      default: "",
      required: true,
    },
    email: {
      type: "email",
      placeholder: "Enter your email.",
      default: "",
      required: true,
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
      required: true,
    },
    company: {
      type: "text",
      placeholder: "Name of the company you work for.",
      default: "",
      required: true,
    },
    description: {
      type: "textarea",
      placeholder: "Describe your roles and responsibilities",
      default: "",
      required: true,
    },
    startDate: {
      type: "date",
      placeholder: "",
      default: "",
      required: true,
    },
    endDate: {
      type: "date",
      placeholder: "",
      default: "",
    },
  },
  education: {
    degree: {
      type: "text",
      placeholder: "Enter your degree / field of study",
      default: "",
      required: true,
    },
    school: {
      type: "text",
      placeholder: "Enter your school / university",
      default: "",
      required: true,
    },
    startDate: {
      type: "date",
      placeholder: "",
      default: "",
      required: true,
    },
    endDate: {
      type: "date",
      placeholder: "",
      default: "",
    },
  },
};

export default templateData;
