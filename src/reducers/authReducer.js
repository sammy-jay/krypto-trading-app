const initialState = {
  user: null,
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
    default:
      return state;
  }
};

export default authReducer;
