import axios from "axios";
export const getHuatiData = (huatiList) => ({
  type: 'get_huati_data',
  huatiList
})
export const initHuatiData = () => {
  return dispatch => {
    axios.get ('hao123_api/huati/getRootData')
    .then (res => {
      let list = res.data.data.resource_list.list
      dispatch (getHuatiData(list))
    })
  }
}

