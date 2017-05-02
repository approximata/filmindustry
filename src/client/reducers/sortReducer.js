
const sortReducer = (state = 0, action) => {
  switch (action.type) {
    case 'SET_SORT':
      return action.value;
    default:
      return state;
  }
};
export default sortReducer;
