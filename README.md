# react-login-panel

Example
-------
Clone repo and find an example in "dist/example/example.html" (requires PHP server to run with api calls).

Usage
------
*with redux*:

```
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>ReactLoginPanel</title>
		<script src="https://unpkg.com/react@15.6.1/dist/react.js"></script>
		<script src="https://unpkg.com/react-dom@15.6.1/dist/react-dom.js"></script>
		<script src="https://unpkg.com/prop-types@15.5.10/prop-types.js"></script>
		<script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
		<script src="https://unpkg.com/redux@3.7.2/dist/redux.js"></script>
		<script src="https://unpkg.com/react-redux@5.0.5/dist/react-redux.js"></script>
		<script src="https://unpkg.com/redux-thunk@2.2.0/dist/redux-thunk.js"></script>
		<script src="../react-login-panel.js"></script>
		<script src="../react-login-panel.redux.js"></script>
		<link rel="stylesheet" href="../react-login-panel.css"/>
		<link rel="stylesheet" href="../themes/theme-1/theme-1.css"/>
	</head>
	<body>
		<div id="target"></div>
		<script type="text/babel">

			// redux adapters
			const {combineReducers , createStore , applyMiddleware} = Redux;
			const {Provider , connect} = ReactRedux;

			// signup form fields
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

			const signupFormFields = [
				{
					id:'username' ,
					element:<input placeholder="Username"/> ,
					validator:(val,callback) => {

						// check that username is not empty
						if ( val.length === 0 ) {
							return ERROR_ISEMPTY;
						} else if ( val.length > USERNAME_MAX_LENGTH ) {
							return ERROR_TOOLONG;
						}

						// check if username already has been taken
						const formData = new FormData();
						formData.append('value' , val);
						return fetch('api/does-username-exist.php' , {
							credentials:'include' ,
							headers:new Headers({
								'X-Requested-With':'XMLHttpRequest'
							}) ,
							method:"POST" ,
							body:formData
						}).then(response => response.json()).then(response => {
							callback(response);
						});
					} ,
					errorFeedbackElement:errorCode => {
						switch (errorCode) {
							case ERROR_ISEMPTY:
								return (<div>Username cannot be empty!</div>);
							case ERROR_TOOLONG:
								return (<div>Username cannot be longer than {USERNAME_MAX_LENGTH} characters!</div>);
							case ERROR_USERNAMETAKEN:
								return (<div>Username already taken!</div>);
							default:
								return (<div>Unknown Error</div>);
						}
					}
				} ,
				{
					id:'password' ,
					element:<input placeholder="Password" type="password"/> ,
					validator:val => {

						if ( val.length === 0 ) {
							return ERROR_ISEMPTY;
						}

						let BITWISE_ERROR_CODE = 0;

						if ( val.length < PASSWORD_MIN_LENGTH ) {
							BITWISE_ERROR_CODE = BITWISE_ERROR_CODE | ERROR_TOOSHORT;
						}

						if ( val.replace(/[^A-Z]/g , '').length === 0 ) {
							BITWISE_ERROR_CODE = BITWISE_ERROR_CODE | ERROR_REQUIRESUPPERCASELETTERS;
						}

						if ( val.replace(/[^a-z]/g , '').length === 0 ) {
							BITWISE_ERROR_CODE = BITWISE_ERROR_CODE | ERROR_REQUIRESLOWERCASELETTERS;
						}

						if ( val.replace(/[^0-9]/g , '').length === 0 ) {
							BITWISE_ERROR_CODE = BITWISE_ERROR_CODE | ERROR_REQUIRESNUMBERS;
						}

						if ( BITWISE_ERROR_CODE === 0 ) return true;
						else return BITWISE_ERROR_CODE;
					} ,
					errorFeedbackElement:errorCode => {
						switch (errorCode) {
							case ERROR_ISEMPTY:
								return (<div>Password cannot be empty!</div>);

							default:
								return (
									[
										(errorCode & ERROR_TOOSHORT) ? <div>Password must be min {PASSWORD_MIN_LENGTH} characters.</div> : null ,
										(errorCode & ERROR_REQUIRESUPPERCASELETTERS) ? <div>Password requires Uppercase Letters.</div> : null ,
										(errorCode & ERROR_REQUIRESLOWERCASELETTERS) ? <div>Password requires Lowercase Letters.</div> : null ,
										(errorCode & ERROR_REQUIRESNUMBERS) ? <div>Password requires Numbers.</div> : null
									]
								);
						}
					}
				} ,
				{
					id:'name' ,
					element:<input placeholder="Full Name"/> ,
					validator:val => {
						if ( val.length === 0 ) {
							return ERROR_ISEMPTY;
						} else if ( val.length >= 30 ) {
							return ERROR_TOOLONG;
						}

						return true;
					} ,
					errorFeedbackElement:errorCode => {
						switch (errorCode) {
							case ERROR_ISEMPTY:
								return (<div>Name cannot be empty!</div>);
							case ERROR_TOOLONG:
								return (<div>Name cannot be longer than {NAME_MAX_LENGTH} characters!</div>);
							default:
								return (<div>Unknown Error</div>);
						}
					}
				} ,
				{
					id:'asyncTest' ,
					element:<input placeholder="A field with Async Validation"/> ,
					validator:(val,callback) => {
						const formData = new FormData();
						formData.append('value' , val);
						return fetch('api/async-test.php' , {
							credentials:'include' ,
							headers:new Headers({
								'X-Requested-With':'XMLHttpRequest'
							}) ,
							method:"POST" ,
							body:formData
						}).then(response => response.json()).then(response => {
							callback(response);
						});
					} ,
					errorFeedbackElement:errorCode => {
						return <div>Value must be "123" (without quotes)</div>
					}
				}
			];

			const loginFormFields = [
				{
					id:'username' ,
					element:<input placeholder="Username" name="username"/>
				} ,
				{
					id:'password' ,
					element:<input type="password" placeholder="Password" name="password"/>
				}
			];

			const userLoggedInMessage = user => `Welcome ${user.first}!`;
			const loginFailedMessage = () => <div>Failed!!!</div>;

			// login form redux bundle
			const ReactLoginPanelReduxBundle = ReactLoginPanelRedux();
			const ReactLoginPanelActionCreators = ReactLoginPanelReduxBundle.actionCreators({
				login:'api/signup-and-login.php' ,
				signup:'api/signup-and-login.php' ,
				signout:'api/signout.php'
			});

			// redux init
			const reducers = combineReducers({
				reactLoginPanel:ReactLoginPanelReduxBundle.createReducer()
			});
			const store = createStore(
				reducers ,
				applyMiddleware(ReduxThunk.default)
			);

			// react-redux connection
			const mapStateToProps = (state , ownProps) => ({
				showLoginForm:state.reactLoginPanel.showLoginForm ,
				showSignupForm:state.reactLoginPanel.showSignupForm ,
				loggedInUser:state.reactLoginPanel.loggedInUser ,
				loggingIn:state.reactLoginPanel.loggingIn ,
				loginFailed:state.reactLoginPanel.loginFailed
			});
			const mapDispatchToProps = dispatch => ({
				toggleLoginForm:() => {
					dispatch(ReactLoginPanelActionCreators.toggleLoginForm());
				} ,
				toggleSignupForm:() => {
					dispatch(ReactLoginPanelActionCreators.toggleSignupForm());
				} ,
				submitLoginForm:loginData => {
					dispatch(ReactLoginPanelActionCreators.submitLoginForm(loginData))
				} ,
				submitSignupForm:signupData => {
					dispatch(ReactLoginPanelActionCreators.submitSignupForm(signupData))
				} ,
				signout:() => {
					dispatch(ReactLoginPanelActionCreators.signout());
				}
			});
			const ReactLoginPanelContainer = ReactRedux.connect(
				mapStateToProps ,
				mapDispatchToProps
			)(ReactLoginPanel);

			// render
			ReactDOM.render(
					<Provider store={store}>
						<ReactLoginPanelContainer
								loginFormFields={loginFormFields}
								signupFormFields={signupFormFields}
								userLoggedInMessage={userLoggedInMessage}
								loginFailedMessage={loginFailedMessage}
						/>
					</Provider> ,
				document.getElementById('target')
			);

		</script>
	</body>
</html>
```