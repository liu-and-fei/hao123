import * as Types from "./actionTypes";
// import thunk from 'redux-thunk';
export const asyncIconList = () => {
  return dispatch => {

    // fetch('https://m.hao123.com/hao123_api/page/getRootData?vit=h123&from=3w123&sample=1',{method : 'GET'})
    // .then(response => response.json())
    // .then(res => {
    //   console.log(res)
    //   dispatch(onIconList(res))
    // })
  }
}
export const onIconList = (data) => ({
  type: Types.GET_ICON_LIST,
  data
})
