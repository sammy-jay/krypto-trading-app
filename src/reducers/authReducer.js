const initialState = {
  user: null,
  marketData: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH":
      const newUser = {
        fullname: action.payload.fullname,
        email: action.payload.email,
        username: action.payload.username,
      };
      return { ...state, user: newUser };
    case "MARKETDATA":
    
      return { ...state, marketData: action.payload };
    default:
      return state;
  }
};

export default authReducer;
