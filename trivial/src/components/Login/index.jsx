import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { useAuth0 } from '@auth0/auth0-react';
import { login } from '../../redux/actions/actionCreators';
import './login.css';

function Login({ auth, actions }) {
  const {
    loginWithRedirect,
    logout,
    isAuthenticated,
    user
  } = useAuth0();

  useEffect(() => {
    if (isAuthenticated && user) {
      actions.login(user);
    }
  }, [isAuthenticated, user]);

  const loggedInTemplate = () => (
    <>
      <section className="logOutSection">
        <section className="logOutSection__components">
          <p>
            Welcome
            {' '}
            {auth.user.name}
          </p>
          <button type="button" className="logOutSection__components--button" onClick={() => logout({ returnTo: window.location.origin })}>Log out</button>
        </section>
        <img src={auth.user.picture} alt="Imagen" className="logOutSection__components--img" />
      </section>
    </>
  );

  const loggedOutTemplate = () => (
    <>
      <section className="loginSection">
        <button type="button" className="loginSection__components--button" onClick={() => loginWithRedirect()}>Login</button>
      </section>
    </>
  );

  return (
    <>
      { auth.isLoggedIn
        ? loggedInTemplate()
        : loggedOutTemplate()}
    </>
  );
}

Login.propTypes = {
  auth: PropTypes.shape({
    isLoggedIn: PropTypes.bool.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired
    })
  }).isRequired,
  actions: PropTypes.shape({
    login: PropTypes.func.isRequired
  }).isRequired
};

function mapStateToProps({ auth }) {
  return {
    auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      { login },
      dispatch
    )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
