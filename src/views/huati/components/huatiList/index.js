import React, {Component} from 'react'
import List from "./components/list";
import Text from "./components/text";
import Vote from "./components/vote";

export default class HuatiList extends Component {
  constructor (props) {
  super (props)
    this.state = {
      visible: false,
      selected: '',
      HuatiList: {}
    }
  }
  renderImg () {
    let list=this.props
    if(list.huati.content_type === 'image-list'){
      return (<List data={list.huati}/>)
    }else if(list.huati.content_type === 'image-text'){
      return (<Text data={list.huati}/>)
    }else if(list.huati.content_type === 'vote'){
      return (<Vote data={list.huati}/>)
    }
}
  render() {
    return (
      <>
      {
        this.renderImg()
      }
      </>
    )
  }
}
