
const initState = {
  huati: {}
}
export default (state = initState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  if(action.type === 'get_huati_data') {
    newState.huati = action.huatiList
  }
  return newState
}
