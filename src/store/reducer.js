const initialState = {
  personal: {
    fullName: "",
    email: "",
    aboutMe: "",
    country: "",
    state: "",
    city: "",
    phoneNum: "",
    githubUrl: "",
    linkedinUrl: ""
  },
  education: {
    eduArray: []
  },
  experience: {
    expArray: []
  },
  abilities: {
    skills: [],
    languages: [],
    achievements: "",
    hobbies: []
  },
  isPersonal: true,
  isEducation: false,
  isExperience: false,
  isAbilities: false,
  isPortfolio: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PERSONAL":
      console.log(action.payload);
      return {
        ...state,
        personal: {
          ...state.personal,
          fullName: action.payload.fullName,
          aboutMe: action.payload.aboutMe,
          email: action.payload.email,
          country: action.payload.country,
          city: action.payload.city,
          state: action.payload.state,
          phoneNum: action.payload.phoneNum,
          githubUrl: action.payload.githubUrl,
          linkedinUrl: action.payload.linkedinUrl
        },
        isEducation: true
      };

    case "ADD_EDUCATION":
      console.log(action.payload);
      return {
        ...state,
        education: {
          ...state.education,
          eduArray: [...state.education.eduArray.concat(action.payload)]
        },
        isExperience: true
      };
    case "ADD_EXPERIENCE":
      return {
        ...state,
        experience: {
          ...state.experience,
          expArray: [...state.experience.expArray.concat(action.payload)]
        },
        isAbilities: true
      };
    case "ADD_ABILITIES":
      console.log(state);
      return {
        ...state,
        abilities: {
          ...state.abilities,
          skills: [
            ...state.abilities.skills.concat(action.payload.skills.split(","))
          ],
          languages: [
            ...state.abilities.languages.concat(
              action.payload.languages.split(",")
            )
          ],
          hobbies: [
            ...state.abilities.hobbies.concat(action.payload.hobbies.split(","))
          ],
          achievements: action.payload.achievements
        },
        isPortfolio: false
      };
    default:
      return state;
  }
};

export default reducer;
