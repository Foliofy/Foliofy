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
  }
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
        }
      };
    default: 
      return state;
  }
};

export default reducer;
