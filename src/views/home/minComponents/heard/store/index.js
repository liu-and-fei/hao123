
const initState={
  searchList:[],
  res:{}
}
export default (state=initState,action) => {
  let newState=JSON.parse(JSON.stringify(state))
    if(action.type=="searchList"){
      newState.searchList=action.value
    }
    if(action.type=='SETRES'){
      newState.res=action.value
    }
    return newState
}