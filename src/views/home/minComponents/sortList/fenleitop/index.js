import React from 'react';

// 引入本组件css样式
import './style.scss';

const Fenleitop = ({ dataList }) =>  {
  if (dataList.length > 0) {
    return (
        <div className="feilei-top">
          <ul>
            { dataList.map(item => (
                <li key={ item.title }>{ item.title }</li>
            )) }
          </ul>
        </div>
    );
  }
  return null;
};

export default Fenleitop;
