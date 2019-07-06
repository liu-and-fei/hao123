import React from 'react';

export default class Img extends React.Component {
  render() {
    return (
      <div className="imglist">
        {
          this.props.imgList.map((item,index) => {
            return (
              <div key={index} className="imgwp">
                <img src={item} alt="" />
              </div>
            )
          })
        }
      </div>
    )
  }
}
