import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from './components/LoginForm/LoginForm';
import SignupForm from './components/SignupForm/SignupForm';

const LangDefaults = {
	'login':'Login' ,
	'signup':'Signup' ,
	'signout':'Sign Out' ,
	'loggingIn':'Logging In'
};

class ReactLoginPanel extends React.Component {
	constructor(props) {
		super(props);

		this.lang = {
			...LangDefaults ,
			...props.lang
		};
	}

	render() {

		const {
			loggedInUser ,
			userLoggedInMessage ,
			signout ,
			showLoginForm ,
			toggleLoginForm ,
			loginFormFields ,
			submitLoginForm ,
			loggingIn ,
			loginFailed ,
			loginFailedMessage ,
			showSignupForm ,
			toggleSignupForm ,
			signupFormFields ,
			submitSignupForm

		} = this.props;

		return (
			<div className="react-login-panel">
				<div className="nav">
					{
						loggedInUser ?
							[
								typeof userLoggedInMessage === 'function' ? userLoggedInMessage(loggedInUser) : userLoggedInMessage ,
								<div key="signout" className="button" onClick={signout}>{this.lang.signout}</div>
							]

							:

							[
								<div key="login" className={'button' + (showLoginForm ? ' active' : '')} onClick={toggleLoginForm}>{this.lang.login}</div> ,
								<div key="signup" className={'button' + (showSignupForm ? ' active' : '')} onClick={toggleSignupForm}>{this.lang.signup}</div>
							]
					}
				</div>
				<div className="forms">
					<LoginForm
						lang={this.lang}
						showLoginForm={showLoginForm && !loggedInUser}
						loggingIn={loggingIn}
						formFields={loginFormFields}
						submitForm={submitLoginForm}
						loginFailed={loginFailed}
						loginFailedMessage={loginFailedMessage}
					/>
					<SignupForm
						lang={this.lang}
						showSignupForm={showSignupForm && !loggedInUser}
						formFields={signupFormFields}
						submitForm={submitSignupForm}
					/>
				</div>
			</div>
		);
	}
}

ReactLoginPanel.propTypes = {
	lang:PropTypes.shape({
		'login':PropTypes.string ,
		'signup':PropTypes.string ,
		'signout':PropTypes.string ,
		'loggingIn':PropTypes.string
	}) ,
	loggedInUser:PropTypes.oneOfType([
		PropTypes.object
	])
};

module.exports = ReactLoginPanel;