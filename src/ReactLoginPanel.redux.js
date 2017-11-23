import createReduxDuckling from 'redux-ducklings';
import each from 'object-each';

const ReduxBundleCreator = (() => {

	// actions
	const REDUX_ACTIONS = {
		TOGGLE_LOGIN_FORM:'react-login-panel/TOGGLE_LOGIN_FORM' ,
		TOGGLE_SIGNUP_FORM:'react-login-panel/TOGGLE_SIGNUP_FORM' ,
		UPDATE_LOGGED_IN_USER:'react-login-panel/UPDATE_LOGGED_IN_USER' ,
		SUBMIT_LOGIN_FORM:'react-login-panel/SUBMIT_LOGIN_FORM' ,
		SUBMIT_SIGNUP_FORM:'react-login-panel/SUBMIT_SIGNUP_FORM' ,
		RECEIVED_LOGIN_RESPONSE:'react-login-panel/RECEIVED_LOGIN_RESPONSE' ,
		RECEIVED_SIGNUP_RESPONSE:'react-login-panel/RECEIVED_SIGNUP_RESPONSE' ,
		SIGN_OUT:'react-login-panel/SIGN_OUT'
	};

	// default state
	const defaultState = {
		showLoginForm:false ,
		showSignupForm:false ,
		loggedInUser:null ,
		loggingIn:false ,
		loginFailed:false
	};

	// reducer
	const createReducer = ACTIONS => () => (state = defaultState , action = {}) => {
		switch (action.type) {
			case ACTIONS.TOGGLE_LOGIN_FORM: {

				const newShowLoginForm = !state.showLoginForm;

				return {
					...state ,
					showLoginForm:newShowLoginForm ,
					loginFailed:newShowLoginForm ? false : state.loginFailed ,
					showSignupForm:newShowLoginForm ? false : state.showSignupForm
				};
			}

			case ACTIONS.TOGGLE_SIGNUP_FORM: {

				const newShowSignupForm = !state.showSignupForm;

				return {
					...state ,
					showSignupForm:!state.showSignupForm ,
					showLoginForm:newShowSignupForm ? false : state.showLoginForm
				};
			}

			case ACTIONS.UPDATE_LOGGED_IN_USER: {

				return {
					...state ,
					loggedInUser:action.loggedInUser
				};
			}

			case ACTIONS.SUBMIT_LOGIN_FORM: {

				return {
					...state ,
					loggingIn:true ,
					loginFailed:false
				};
			}

			case ACTIONS.SUBMIT_SIGNUP_FORM: {

				return {
					...state ,
					signingUp:true ,
					signupFailed:false
				};
			}

			case ACTIONS.RECEIVED_LOGIN_RESPONSE: {

				return {
					...state ,
					loggingIn:false ,
					loggedInUser:action.user ,
					showLoginForm:action.user ? false : state.showLoginForm ,
					showSignupForm:action.user ? false : state.showSignupForm ,
					loginFailed:!action.user
				};
			}

			case ACTIONS.RECEIVED_SIGNUP_RESPONSE: {

				return {
					...state ,
					signingUp:false ,
					loggedInUser:action.user ,
					showLoginForm:action.user ? false : state.showLoginForm ,
					showSignupForm:action.user ? false : state.showSignupForm ,
					signupFailed:!action.user
				};
			}

			case ACTIONS.SIGN_OUT: {

				return {
					...state ,
					loggedInUser:null ,
					user:action.user ,
					loginFailed:false
				};
			}

			default:
				return state;
		}
	};

	// action Creators
	const actionCreators = ACTIONS => apiUrls => ({
		toggleLoginForm:() => ({type:ACTIONS.TOGGLE_LOGIN_FORM}) ,
		toggleSignupForm:() => ({type:ACTIONS.TOGGLE_SIGNUP_FORM}) ,
		updateLoggedInUser:user => ({
			type:ACTIONS.UPDATE_LOGGED_IN_USER ,
			loggedInUser:user
		}) ,
		submitLoginForm:loginData => dispatch => {

			const fetchUrl = typeof apiUrls['login'] === 'function' ? apiUrls['login']() : apiUrls['login'];

			dispatch({type:ACTIONS.SUBMIT_LOGIN_FORM});

			// create post data
			const formData = new FormData();
			each(loginData , (value , key) => {
				formData.append(key , value);
			});

			// post
			fetch(fetchUrl ? fetchUrl : '/login' , {
				credentials:'include' ,
				headers:new Headers({
					'X-Requested-With':'XMLHttpRequest'
				}) ,
				method:'POST' ,
				body:formData
			}).then(response => response.json()).then(response => {
				dispatch({
					type:ACTIONS.RECEIVED_LOGIN_RESPONSE ,
					user:response
				});
			});

		} ,
		submitSignupForm:signupData => dispatch => {

			const fetchUrl = typeof apiUrls['signup'] === 'function' ? apiUrls['signup']() : apiUrls['signup'];

			dispatch({type:ACTIONS.SUBMIT_SIGNUP_FORM});

			// create post data
			const formData = new FormData();
			each(signupData , (value , key) => {
				formData.append(key , value);
			});

			// post
			fetch(fetchUrl ? fetchUrl : '/signup' , {
				credentials:'include' ,
				headers:new Headers({
					'X-Requested-With':'XMLHttpRequest'
				}) ,
				method:'POST' ,
				body:formData
			}).then(response => response.json()).then(response => {
				dispatch({
					type:ACTIONS.RECEIVED_SIGNUP_RESPONSE ,
					user:response
				});
			});

		} ,
		signout:() => dispatch => {

			dispatch({type:ACTIONS.SIGN_OUT});

			const fetchUrl = typeof apiUrls['signout'] === 'function' ? apiUrls['signout']() : apiUrls['signout'];

			fetch(fetchUrl ? fetchUrl : '/signout' , {
				credentials:'include' ,
				headers:new Headers({
					'X-Requested-With':'XMLHttpRequest'
				})
			});
		}
	});

	return createReduxDuckling(
		REDUX_ACTIONS ,
		createReducer ,
		actionCreators
	);
})();

module.exports = ReduxBundleCreator;