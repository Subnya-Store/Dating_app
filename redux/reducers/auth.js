const initstate = {
  username: null,
  setModalmsg:null,
  matches:{},
  matches_index:0
};
export default function Reducer(state = initstate, action) {
  switch (action.type) {
    case "matches":
      return { ...state, matches: action.payload };
    case "matches_index":
      return { ...state, matches_index: action.payload };
    
    default:
      return state;
  }
}