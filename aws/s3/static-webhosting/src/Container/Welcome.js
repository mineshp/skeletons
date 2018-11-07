import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { welcome } from '../actions/welcome';
import { addNotification } from '../actions/notification';
import Welcome from '../Presentational/Welcome';

class WelcomeComponent extends Component {
  async componentDidMount() {
    const { actions } = this.props;

    await actions.welcome();
  }

  render() {
    const { welcomeMessage } = this.props;
    if (welcomeMessage) {
      return (
        <Welcome data={welcomeMessage}/>
      );
    }
    return;

  }
}

WelcomeComponent.propTypes = {
  actions: PropTypes.shape({
    welcome: PropTypes.func.isRequired,
  }),
  welcomeMessage: PropTypes.shape({}),
  notification: PropTypes.shape({
    message: PropTypes.string,
    level: PropTypes.string,
    title: PropTypes.string
  })
};

WelcomeComponent.defaultProps = {
  actions: null,
  welcomeMessage: {},
  notification: null
};

WelcomeComponent.contextTypes = {
  router: PropTypes.shape({})
};

/* istanbul ignore next: not testing mapStateToProps */
const mapStateToProps = ({welcomeMessage}) => ({
  welcomeMessage: welcomeMessage.data,
  notification: welcomeMessage.notification
});

/* istanbul ignore next: not testing mapDispatchToProps */
const mapDispatchToProps = (dispatch) => (
  {
    actions: bindActionCreators({
      welcome, addNotification
    }, dispatch)
  }
);

const WelcomeConnectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(WelcomeComponent);

export {
  WelcomeComponent,
  WelcomeConnectedComponent
};
