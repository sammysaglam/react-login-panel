import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from './components/LoginForm/LoginForm';
import SignupForm from './components/SignupForm/SignupForm';

const runOrPrint = value => (typeof value === 'function' ? value() : value);

const ReactLoginPanel = ({
	isLoginFormVisible,
	isSignupFormVisible,
	areFormTitlesVisible,
	loggedInUser,
	userLoggedInMessage,
	signout,
	toggleLoginForm,
	loginFormFields,
	onSubmitLoginForm,
	loggingIn,
	loginFailed,
	toggleSignupForm,
	signupFormFields,
	signingUp,
	onSubmitSignupForm,
	lang
}) => (
	<div className="react-login-panel">
		{loginFormFields &&
			signupFormFields && (
				<div className="react-login-panel__nav">
					{loggedInUser ? (
						typeof userLoggedInMessage === 'function' ? (
							userLoggedInMessage(loggedInUser)
						) : (
							<React.Fragment>
								{userLoggedInMessage}
								<div className="react-login-panel__button" onClick={signout}>
									{runOrPrint(lang.signout)}
								</div>
							</React.Fragment>
						)
					) : (
						<React.Fragment>
							<div className={'react-login-panel__button' + (isLoginFormVisible ? ' active' : '')} onClick={toggleLoginForm}>
								{runOrPrint(lang.login)}
							</div>
							<div className={'react-login-panel__button' + (isSignupFormVisible ? ' active' : '')} onClick={toggleSignupForm}>
								{runOrPrint(lang.signup)}
							</div>
						</React.Fragment>
					)}
				</div>
			)}
		<div className="react-login-panel__forms">
			{loginFormFields && (
				<LoginForm
					areFormTitlesVisible={areFormTitlesVisible}
					formFields={loginFormFields}
					isLoginFormVisible={isLoginFormVisible && !loggedInUser}
					lang={lang}
					loggingIn={loggingIn}
					loginFailed={loginFailed}
					onSubmitForm={onSubmitLoginForm}
				/>
			)}
			{signupFormFields && (
				<SignupForm
					areFormTitlesVisible={areFormTitlesVisible}
					formFields={signupFormFields}
					isSignupFormVisible={isSignupFormVisible && !loggedInUser}
					lang={lang}
					onSubmitForm={onSubmitSignupForm}
					signingUp={signingUp}
				/>
			)}
		</div>
	</div>
);

ReactLoginPanel.propTypes = {
	areFormTitlesVisible: PropTypes.bool,
	isLoginFormVisible: PropTypes.bool.isRequired,
	isSignupFormVisible: PropTypes.bool.isRequired,
	lang: PropTypes.shape({
		login: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
		signup: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
		signout: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
		loggingIn: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
		loginFailedMessage: PropTypes.oneOfType([PropTypes.func, PropTypes.node])
	}),
	loggedInUser: PropTypes.object, // eslint-disable-line react/forbid-prop-types
	loggingIn: PropTypes.bool,
	loginFailed: PropTypes.bool,
	loginFormFields: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			element: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired
		})
	),
	onSubmitLoginForm: PropTypes.func,
	onSubmitSignupForm: PropTypes.func,
	signingUp: PropTypes.bool,
	signout: PropTypes.func,
	signupFormFields: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			element: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
			validator: PropTypes.func.isRequired,
			errorFeedbackElement: PropTypes.func.isRequired
		})
	),
	toggleLoginForm: PropTypes.func,
	toggleSignupForm: PropTypes.func,
	userLoggedInMessage: PropTypes.oneOfType([PropTypes.func, PropTypes.node])
};

ReactLoginPanel.defaultProps = {
	areFormTitlesVisible: true,
	lang: {
		login: 'Login',
		signup: 'Signup',
		signout: 'Sign Out',
		loggingIn: 'Logging In',
		loginFailedMessage: 'Login failed'
	},
	loggedInUser: null,
	loggingIn: null,
	loginFailed: null,
	loginFormFields: null,
	onSubmitLoginForm: null,
	onSubmitSignupForm: null,
	signingUp: null,
	signout: null,
	signupFormFields: null,
	toggleLoginForm: null,
	toggleSignupForm: null,
	userLoggedInMessage: null
};

export default ReactLoginPanel;
