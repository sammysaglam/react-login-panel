(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("ReactLoginPanelRedux", [], factory);
	else if(typeof exports === 'object')
		exports["ReactLoginPanelRedux"] = factory();
	else
		root["ReactLoginPanelRedux"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ReactLoginPanel.redux.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/object-foreach/src/object-foreach.js":
/*!***********************************************************!*\
  !*** ./node_modules/object-foreach/src/object-foreach.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Executes a function on each of an objects own enumerable properties. The
 *  callback function will receive three arguments: the value of the current
 *  property, the name of the property, and the object being processed. This is
 *  roughly equivalent to the signature for callbacks to
 *  Array.prototype.forEach.
 * @param {Object} obj The object to act on.
 * @param {Function} callback The function to execute.
 * @returns {Object} Returns the given object.
 */
function objectForeach(obj, callback) {
    "use strict";
    Object.keys(obj).forEach(function (prop) {
        callback(obj[prop], prop, obj);
    });
    return obj;
};
module.exports = objectForeach;

/***/ }),

/***/ "./node_modules/redux-ducklings/dist/redux-ducklings.cjs.js":
/*!******************************************************************!*\
  !*** ./node_modules/redux-ducklings/dist/redux-ducklings.cjs.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports["createReduxDuckling"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createReduxDuckling = function createReduxDuckling(actions, createReducer, actionCreators) {
	return function (namespace) {

		// randomize namespace if not defined
		var RAND_MIN = 10000000000000;
		var RAND_MAX = 99999999999999;
		var ducklingNamespace = namespace ? namespace : 'redux-duck-' + (Math.floor(Math.random() * (RAND_MAX - RAND_MIN + 1)) + RAND_MIN);

		// namespace actions for modularity
		var ACTIONS = Object.keys(actions).reduce(function (previous, current) {
			previous[current] = actions[current] + '/' + ducklingNamespace;
			return previous;
		}, {});

		return {
			ACTIONS: ACTIONS,
			createReducer: createReducer(ACTIONS),
			actionCreators: actionCreators(ACTIONS)
		};
	};
};

module.exports = createReduxDuckling;

/***/ })
/******/ ]);

/***/ }),

/***/ "./node_modules/redux-ducklings/index.js":
/*!***********************************************!*\
  !*** ./node_modules/redux-ducklings/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dist_redux_ducklings_cjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dist/redux-ducklings.cjs */ "./node_modules/redux-ducklings/dist/redux-ducklings.cjs.js");
/* harmony import */ var _dist_redux_ducklings_cjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dist_redux_ducklings_cjs__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = (_dist_redux_ducklings_cjs__WEBPACK_IMPORTED_MODULE_0__["createReduxDuckling"]);

/***/ }),

/***/ "./src/ReactLoginPanel.redux.js":
/*!**************************************!*\
  !*** ./src/ReactLoginPanel.redux.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_ducklings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-ducklings */ "./node_modules/redux-ducklings/index.js");
/* harmony import */ var object_foreach__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! object-foreach */ "./node_modules/object-foreach/src/object-foreach.js");
/* harmony import */ var object_foreach__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(object_foreach__WEBPACK_IMPORTED_MODULE_1__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




var ReduxBundleCreator = function () {
	// actions
	var REDUX_ACTIONS = {
		TOGGLE_LOGIN_FORM: 'react-login-panel/TOGGLE_LOGIN_FORM',
		TOGGLE_SIGNUP_FORM: 'react-login-panel/TOGGLE_SIGNUP_FORM',
		UPDATE_LOGGED_IN_USER: 'react-login-panel/UPDATE_LOGGED_IN_USER',
		SUBMIT_LOGIN_FORM: 'react-login-panel/SUBMIT_LOGIN_FORM',
		SUBMIT_SIGNUP_FORM: 'react-login-panel/SUBMIT_SIGNUP_FORM',
		RECEIVED_LOGIN_RESPONSE: 'react-login-panel/RECEIVED_LOGIN_RESPONSE',
		RECEIVED_SIGNUP_RESPONSE: 'react-login-panel/RECEIVED_SIGNUP_RESPONSE',
		SIGN_OUT: 'react-login-panel/SIGN_OUT'
	};

	// default state
	var defaultState = {
		showLoginForm: false,
		showSignupForm: false,
		loggedInUser: null,
		loggingIn: false,
		loginFailed: false
	};

	// reducer
	var createReducer = function createReducer(ACTIONS) {
		return function () {
			return function () {
				var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
				var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

				switch (action.type) {
					case ACTIONS.TOGGLE_LOGIN_FORM:
						{
							var newShowLoginForm = !state.showLoginForm;

							return _extends({}, state, {
								showLoginForm: newShowLoginForm,
								loginFailed: newShowLoginForm ? false : state.loginFailed,
								showSignupForm: newShowLoginForm ? false : state.showSignupForm
							});
						}

					case ACTIONS.TOGGLE_SIGNUP_FORM:
						{
							var newShowSignupForm = !state.showSignupForm;

							return _extends({}, state, {
								showSignupForm: !state.showSignupForm,
								showLoginForm: newShowSignupForm ? false : state.showLoginForm
							});
						}

					case ACTIONS.UPDATE_LOGGED_IN_USER:
						{
							return _extends({}, state, {
								loggedInUser: action.loggedInUser
							});
						}

					case ACTIONS.SUBMIT_LOGIN_FORM:
						{
							return _extends({}, state, {
								loggingIn: true,
								loginFailed: false
							});
						}

					case ACTIONS.SUBMIT_SIGNUP_FORM:
						{
							return _extends({}, state, {
								signingUp: true,
								signupFailed: false
							});
						}

					case ACTIONS.RECEIVED_LOGIN_RESPONSE:
						{
							return _extends({}, state, {
								loggingIn: false,
								loggedInUser: action.user,
								showLoginForm: action.user ? false : state.showLoginForm,
								showSignupForm: action.user ? false : state.showSignupForm,
								loginFailed: !action.user
							});
						}

					case ACTIONS.RECEIVED_SIGNUP_RESPONSE:
						{
							return _extends({}, state, {
								signingUp: false,
								loggedInUser: action.user,
								showLoginForm: action.user ? false : state.showLoginForm,
								showSignupForm: action.user ? false : state.showSignupForm,
								signupFailed: !action.user
							});
						}

					case ACTIONS.SIGN_OUT:
						{
							return _extends({}, state, {
								loggedInUser: null,
								user: action.user,
								loginFailed: false
							});
						}

					default:
						return state;
				}
			};
		};
	};

	// action Creators
	var actionCreators = function actionCreators(ACTIONS) {
		return function (apiUrls) {
			return {
				toggleLoginForm: function toggleLoginForm() {
					return { type: ACTIONS.TOGGLE_LOGIN_FORM };
				},
				toggleSignupForm: function toggleSignupForm() {
					return { type: ACTIONS.TOGGLE_SIGNUP_FORM };
				},
				updateLoggedInUser: function updateLoggedInUser(user) {
					return {
						type: ACTIONS.UPDATE_LOGGED_IN_USER,
						loggedInUser: user
					};
				},
				submitLoginForm: function submitLoginForm(loginData) {
					return function (dispatch) {
						var fetchUrl = typeof apiUrls['login'] === 'function' ? apiUrls['login']() : apiUrls['login'];

						dispatch({ type: ACTIONS.SUBMIT_LOGIN_FORM });

						// create post data
						var formData = new FormData();
						object_foreach__WEBPACK_IMPORTED_MODULE_1___default()(loginData, function (value, key) {
							formData.append(key, value);
						});

						// post
						fetch(fetchUrl ? fetchUrl : '/login', {
							credentials: 'include',
							headers: new Headers({
								'X-Requested-With': 'XMLHttpRequest'
							}),
							method: 'POST',
							body: formData
						}).then(function (response) {
							return response.json();
						}).then(function (response) {
							dispatch({
								type: ACTIONS.RECEIVED_LOGIN_RESPONSE,
								user: response
							});
						});
					};
				},
				submitSignupForm: function submitSignupForm(signupData) {
					return function (dispatch) {
						var fetchUrl = typeof apiUrls['signup'] === 'function' ? apiUrls['signup']() : apiUrls['signup'];

						dispatch({ type: ACTIONS.SUBMIT_SIGNUP_FORM });

						// create post data
						var formData = new FormData();
						object_foreach__WEBPACK_IMPORTED_MODULE_1___default()(signupData, function (value, key) {
							formData.append(key, value);
						});

						// post
						fetch(fetchUrl ? fetchUrl : '/signup', {
							credentials: 'include',
							headers: new Headers({
								'X-Requested-With': 'XMLHttpRequest'
							}),
							method: 'POST',
							body: formData
						}).then(function (response) {
							return response.json();
						}).then(function (response) {
							dispatch({
								type: ACTIONS.RECEIVED_SIGNUP_RESPONSE,
								user: response
							});
						});
					};
				},
				signout: function signout() {
					return function (dispatch) {
						dispatch({ type: ACTIONS.SIGN_OUT });

						var fetchUrl = typeof apiUrls['signout'] === 'function' ? apiUrls['signout']() : apiUrls['signout'];

						fetch(fetchUrl ? fetchUrl : '/signout', {
							credentials: 'include',
							headers: new Headers({
								'X-Requested-With': 'XMLHttpRequest'
							})
						});
					};
				}
			};
		};
	};

	return Object(redux_ducklings__WEBPACK_IMPORTED_MODULE_0__["default"])(REDUX_ACTIONS, createReducer, actionCreators);
}();

/* harmony default export */ __webpack_exports__["default"] = (ReduxBundleCreator);

/***/ })

/******/ });
});
//# sourceMappingURL=react-login-panel.redux.js.map