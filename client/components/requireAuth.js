import React, {Component} from "react";
import {graphql} from "react-apollo";
import query from "../queries/CurrentUser"
import {hashHistory} from "react-router";

export default (WrappedComponent) => {
  class RequireAuth extends Component {
    componentWillUpdate(nextProps) {
      console.log(nextProps.data)
      if (!nextProps.data.loading && !nextProps.data.user) {
        hashHistory.push('/login')
      }
    }
    render() {
      return <WrappedComponent {...this.props}/>
    }
  }
  return  graphql(query)(RequireAuth)
}


