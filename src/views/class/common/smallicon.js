import React from 'react';
export default class Icon extends React.Component{
  constructor(props) {
    super(props);
    this.picture = this.picture.bind(this);
    this.backtop = this.backtop.bind(this);
    this.state = {
      display: 'none'
    }
  }
  render() {
    return (
      <div className="fixed-btn" style={{display: this.state.display}}>
        <ul>
          <li onClick={this.backtop}></li>
          <li onClick={this.change}></li>
        </ul>
      </div>
    )
  }
  change=()=>{
    this.props.callback();
}
  componentDidMount() {
    window.addEventListener('scroll', this.picture)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.picture)
  }
  // 下拉显示回到顶部和刷新图标
  picture() {
    let scrolllist = document.body.scrollTop || document.documentElement.scrollTop;
    console.log(scrolllist)
    if (scrolllist > 850) {
      this.setState({
        display: 'block'
      })
    } else {
      this.setState({
        display: 'none'
      })
    }
  }

  // 回到顶部
  backtop = () => {
    document.documentElement.scrollTop = 0;
    console.log('回到顶部');
  }

}
