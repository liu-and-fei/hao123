import React from 'react';

export default class Img extends React.Component {
  render() {
    return (
      <div className="imglist imgleft">
        {
          this.props.imgList.map((item,index) => {
            return (
              <div key={index} className="imgtwo">
                <img src={item} alt="" />
              </div>
            )
          })
        }
      </div>
    )
  }
}
