import React, { Component, Fragment } from "react";
import { getResultAction } from "../store/actions/gameActions";
import { connect } from "react-redux";
import Result from "../components/Game/Result";

class ResultContainer extends Component {
  render() {
    return (
      <Fragment>
        <Result games={this.props.games} getResult={this.props.getResult} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    games: state.games
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getResult: game => dispatch(getResultAction(game))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultContainer);
