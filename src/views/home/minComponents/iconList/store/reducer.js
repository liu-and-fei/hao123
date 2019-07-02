import * as Types from './actionTypes'

const initState = {
  iconList: ['百度','凤凰','腾讯','搜狐','新浪','网易','苏宁','同城','百度地图','携程','爱奇艺','免费下','京东','热搜','淘宝','爱淘宝','东方财富','4399','淘宝特卖','安居客','12306','二手车','去哪儿网','好看视频'],
  urlList: ['大额优惠','前程无忧','限时好价','QQ音乐','优酷网','哔哩哔哩','双色球','每日精选','直播吧','网址大全'],
  links: [
    '极致性价比 超级好货疯狂抢',
    '哎!你们慢点抢,给我留两件',
    '便宜无好货?你应该来看看这个',
    '商家又耍什么"花样"?白送一样!'
  ]
}

export default ( state = initState, action ) => {
let newState = JSON.parse(JSON.stringify(state))
  if(action.type === Types.GET_ICON_LIST){
    newState.iconList = action.data
  }
  return newState
}
