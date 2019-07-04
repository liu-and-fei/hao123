const initState = {

};

const reducer = (state = initState, action) => {
  let newState = JSON.parse(JSON.stringify(state));


  return newState;
};

export default reducer;
