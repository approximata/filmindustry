
const searchReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_VISIBILITY':
      return action.filter;
      break;
    default:
      return state;
  }
};
export default searchReducer;
