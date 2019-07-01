import * as Types from './actionTypes'

const initState = {
  iconList: ['百度','凤凰','腾讯','搜狐','新浪','网易','苏宁','同城','百度地图','携程','爱奇艺','免费下','京东','热搜','淘宝','爱淘宝','东方财富','4399','淘宝特卖','安居客','12306','二手车','去哪儿网','好看视频']
}

export default ( state = initState, action ) => {
let newState = JSON.parse(JSON.stringify(state))
// if(action.type = Types.GET_ICON_LIST){
//   newState.iconList = action.data
// }

return newState
}
