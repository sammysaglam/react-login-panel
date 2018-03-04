import React from 'react';
import ReactLoginPanel from '../ReactLoginPanel';

// signup form constants
const IS_VALID = true;

const ERROR_ISEMPTY = 1;
const ERROR_USERNAMETAKEN = 2;
const ERROR_TOOLONG = 4;
const ERROR_TOOSHORT = 8;
const ERROR_REQUIRESUPPERCASELETTERS = 16;
const ERROR_REQUIRESLOWERCASELETTERS = 32;
const ERROR_REQUIRESNUMBERS = 64;

const USERNAME_MAX_LENGTH = 10;
const PASSWORD_MIN_LENGTH = 5;
const NAME_MAX_LENGTH = 20;

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoginFormVisible: false,
			isSignupFormVisible: false
		};

		this.toggleLoginForm = this.toggleLoginForm.bind(this);
		this.toggleSignupForm = this.toggleSignupForm.bind(this);
	}

	toggleLoginForm() {
		const { isLoginFormVisible, isSignupFormVisible } = this.state;

		const newIsLoginFormVisible = !isLoginFormVisible;

		this.setState({
			isLoginFormVisible: newIsLoginFormVisible,
			isSignupFormVisible: newIsLoginFormVisible ? false : isSignupFormVisible
		});
	}

	toggleSignupForm() {
		const { isLoginFormVisible, isSignupFormVisible } = this.state;

		const newIsSignupFormVisible = !isSignupFormVisible;

		this.setState({
			isSignupFormVisible: newIsSignupFormVisible,
			isLoginFormVisible: newIsSignupFormVisible ? false : isLoginFormVisible
		});
	}

	render() {
		const { isLoginFormVisible, isSignupFormVisible } = this.state;
		const { toggleLoginForm, toggleSignupForm } = this;

		return (
			<div>
				<ReactLoginPanel
					areFormTitlesVisible={true}
					isLoginFormVisible={isLoginFormVisible}
					isSignupFormVisible={isSignupFormVisible}
					loggingIn={false}
					loginFailed={false}
					loginFormFields={[
						{
							id: 'username',
							element: <input placeholder="Username" />
						} ,
						{
							id: 'password',
							element: <input placeholder="Password" type="password" />
						}
					]}
					onSubmitLoginForm={() => alert('Logged in!')}
					onSubmitSignupForm={() => alert('Signed up!')}
					signingUp={false}
					signupFormFields={[
						{
							id: 'username',
							element: <input placeholder="Username" />,
							validator: async (value, done) => {
								// sync validators
								if (value.length === 0) {
									return done(ERROR_ISEMPTY);
								} else if (value.length > USERNAME_MAX_LENGTH) {
									return done(ERROR_TOOLONG);
								}

								// async validator
								const asyncResponse = await new Promise(resolve => {
									const FAKE_TIMEOUT = 250;

									setTimeout(() => {
										resolve(value === 'sammy' ? ERROR_USERNAMETAKEN : IS_VALID);
									}, FAKE_TIMEOUT);
								});

								return done(asyncResponse);
							},
							errorFeedbackElement: errorCode => {
								switch (errorCode) {
									case ERROR_ISEMPTY:
										return <div>Username cannot be empty!</div>;
									case ERROR_TOOLONG:
										return <div>Username cannot be longer than {USERNAME_MAX_LENGTH} characters!</div>;
									case ERROR_USERNAMETAKEN:
										return <div>Username already taken!</div>;
									default:
										return <div>Unknown Error</div>;
								}
							}
						},
						{
							id: 'password',
							element: <input placeholder="Password" type="password" />,
							validator: val => {
								if (val.length === 0) {
									return ERROR_ISEMPTY;
								}

								let BITWISE_ERROR_CODE = 0;

								if (val.length < PASSWORD_MIN_LENGTH) {
									BITWISE_ERROR_CODE |= ERROR_TOOSHORT;
								}

								if (val.replace(/[^A-Z]/g, '').length === 0) {
									BITWISE_ERROR_CODE |= ERROR_REQUIRESUPPERCASELETTERS;
								}

								if (val.replace(/[^a-z]/g, '').length === 0) {
									BITWISE_ERROR_CODE |= ERROR_REQUIRESLOWERCASELETTERS;
								}

								if (val.replace(/[^0-9]/g, '').length === 0) {
									BITWISE_ERROR_CODE |= ERROR_REQUIRESNUMBERS;
								}

								if (BITWISE_ERROR_CODE === 0) {
									return true;
								}
								return BITWISE_ERROR_CODE;
							},
							errorFeedbackElement: errorCode => {
								switch (errorCode) {
									case ERROR_ISEMPTY:
										return <div>Password cannot be empty!</div>;

									default:
										return (
											<React.Fragment>
												{errorCode & ERROR_TOOSHORT ? <div>Password must be min {PASSWORD_MIN_LENGTH} characters.</div> : null}
												{errorCode & ERROR_REQUIRESUPPERCASELETTERS ? <div>Password requires Uppercase Letters.</div> : null}
												{errorCode & ERROR_REQUIRESLOWERCASELETTERS ? <div>Password requires Lowercase Letters.</div> : null}
												{errorCode & ERROR_REQUIRESNUMBERS ? <div>Password requires Numbers.</div> : null}
											</React.Fragment>
										);
								}
							}
						},
						{
							id: 'name',
							element: <input placeholder="Full Name" />,
							validator: val => {
								if (val.length === 0) {
									return ERROR_ISEMPTY;
								} else if (val.length >= NAME_MAX_LENGTH) {
									return ERROR_TOOLONG;
								}

								return true;
							},
							errorFeedbackElement: errorCode => {
								switch (errorCode) {
									case ERROR_ISEMPTY:
										return <div>Name cannot be empty!</div>;
									case ERROR_TOOLONG:
										return <div>Name cannot be longer than {NAME_MAX_LENGTH} characters!</div>;
									default:
										return <div>Unknown Error</div>;
								}
							}
						}
					]}
					toggleLoginForm={toggleLoginForm}
					toggleSignupForm={toggleSignupForm}
				/>
			</div>
		);
	}
}

export default App;
