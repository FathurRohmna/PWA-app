import { connect } from 'react-redux';
import { compose } from 'redux';
import { requestLoginData, userLogin } from 'store/authentication/action';
import { isLoginLoading, isLoginLoaded, user, errors } from './../../../store/authentication/selector';
import Login from './Login';

const mapStateToProps = (state) => ({
  isLoading: isLoginLoading(state),
  isLoaded: isLoginLoaded(state),
  user: user(state),
  errors: errors(state)
})

const actions = {
  submitAuthentication: requestLoginData,
  userLogin
}

export default compose(
  connect(mapStateToProps, actions)
)(Login)
