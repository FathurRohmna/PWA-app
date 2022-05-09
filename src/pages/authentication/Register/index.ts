import { connect } from 'react-redux';
import { compose } from 'redux';
import { requestRegisterData, userLogin } from 'store/authentication/action';
import { isLoginLoading, isLoginLoaded, user, errors } from './../../../store/authentication/selector';

import Register from './Register';

const mapStateToProps = (state) => ({
  isLoading: isLoginLoading(state),
  isLoaded: isLoginLoaded(state),
  user: user(state),
  errors: errors(state)
})

const actions = {
  submitAuthentication: requestRegisterData,
  userLogin
}

export default compose(
  connect(mapStateToProps, actions)
)(Register)
