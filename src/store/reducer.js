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
        isEducation : true
      };
    
    case "ADD_EDUCATION":
      console.log(action.payload);
      let temp = [{}]
      temp[0] = action.payload;
      return {
        ...state,
        education:{
          ...state.education,
          eduArray:{

            ...state.education.eduArray.concat(temp)
          }
        },
        isExperience : true
      }

    default: 
      return state;
  }
};

export default reducer;
