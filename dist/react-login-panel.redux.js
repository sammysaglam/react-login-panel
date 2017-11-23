var ReactLoginPanelRedux =
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

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reduxDucklings = __webpack_require__(2);

var _reduxDucklings2 = _interopRequireDefault(_reduxDucklings);

var _objectEach = __webpack_require__(4);

var _objectEach2 = _interopRequireDefault(_objectEach);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
						(0, _objectEach2.default)(loginData, function (value, key) {
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
						(0, _objectEach2.default)(signupData, function (value, key) {
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

	return (0, _reduxDucklings2.default)(REDUX_ACTIONS, createReducer, actionCreators);
}();

module.exports = ReduxBundleCreator;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxDucklings = __webpack_require__(3);

exports.default = _reduxDucklings.createReduxDuckling;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports["createReduxDuckling"] =
/******/function (modules) {
	// webpackBootstrap
	/******/ // The module cache
	/******/var installedModules = {};
	/******/
	/******/ // The require function
	/******/function __webpack_require__(moduleId) {
		/******/
		/******/ // Check if module is in cache
		/******/if (installedModules[moduleId]) {
			/******/return installedModules[moduleId].exports;
			/******/
		}
		/******/ // Create a new module (and put it into the cache)
		/******/var module = installedModules[moduleId] = {
			/******/i: moduleId,
			/******/l: false,
			/******/exports: {}
			/******/ };
		/******/
		/******/ // Execute the module function
		/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
		/******/
		/******/ // Flag the module as loaded
		/******/module.l = true;
		/******/
		/******/ // Return the exports of the module
		/******/return module.exports;
		/******/
	}
	/******/
	/******/
	/******/ // expose the modules object (__webpack_modules__)
	/******/__webpack_require__.m = modules;
	/******/
	/******/ // expose the module cache
	/******/__webpack_require__.c = installedModules;
	/******/
	/******/ // define getter function for harmony exports
	/******/__webpack_require__.d = function (exports, name, getter) {
		/******/if (!__webpack_require__.o(exports, name)) {
			/******/Object.defineProperty(exports, name, {
				/******/configurable: false,
				/******/enumerable: true,
				/******/get: getter
				/******/ });
			/******/
		}
		/******/
	};
	/******/
	/******/ // getDefaultExport function for compatibility with non-harmony modules
	/******/__webpack_require__.n = function (module) {
		/******/var getter = module && module.__esModule ?
		/******/function getDefault() {
			return module['default'];
		} :
		/******/function getModuleExports() {
			return module;
		};
		/******/__webpack_require__.d(getter, 'a', getter);
		/******/return getter;
		/******/
	};
	/******/
	/******/ // Object.prototype.hasOwnProperty.call
	/******/__webpack_require__.o = function (object, property) {
		return Object.prototype.hasOwnProperty.call(object, property);
	};
	/******/
	/******/ // __webpack_public_path__
	/******/__webpack_require__.p = "";
	/******/
	/******/ // Load entry module and return exports
	/******/return __webpack_require__(__webpack_require__.s = 0);
	/******/
}(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports, __webpack_require__) {

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

	/***/
}]
/******/);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = each;
/**
 * Iterates over the object `obj` entries and
 * calls `fn(value, key, obj)` for each entry.
 *
 * @param {Object} obj
 * @param {Function} fn
 */
function each(obj, fn) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = Object.entries(obj)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _ref = _step.value;

      var _ref2 = _slicedToArray(_ref, 2);

      var key = _ref2[0];
      var value = _ref2[1];

      fn(value, key, obj);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

/***/ })
/******/ ]);
//# sourceMappingURL=react-login-panel.redux.js.map