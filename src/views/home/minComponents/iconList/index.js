import React from "react";
import * as iconActions from './store/actionCreate';
import { connect } from 'react-redux';


class Iconlist extends React.Component {
  render () {
    console.log(this.props.list)
    return (
      <div>
        <ul>

        </ul>
      </div>
    )
  }

  componentDidMount () {
    this.props.handleGetIconLIst()
  }
}

export default connect (
  (state) => ({
    list:state.iconList
  }),
  dispatch => ({
    handleGetIconLIst () {
      dispatch (iconActions.asyncIconList())
    }
  })

)(Iconlist)
