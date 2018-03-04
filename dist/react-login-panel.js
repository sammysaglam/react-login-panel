(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"));
	else if(typeof define === 'function' && define.amd)
		define("ReactLoginPanel", ["react", "prop-types"], factory);
	else if(typeof exports === 'object')
		exports["ReactLoginPanel"] = factory(require("react"), require("prop-types"));
	else
		root["ReactLoginPanel"] = factory(root["React"], root["PropTypes"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_prop_types__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var React=_interopDefault(__webpack_require__(/*! react */ "react")),classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},inherits=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},possibleConstructorReturn=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},AppContainer=function(e){function t(){return classCallCheck(this,t),possibleConstructorReturn(this,e.apply(this,arguments))}return inherits(t,e),t.prototype.render=function(){return React.Children.only(this.props.children)},t}(React.Component),hot_prod=function(){return function(e){return e}},areComponentsEqual=function(e,t){return e===t},setConfig=function(){};exports.AppContainer=AppContainer,exports.hot=hot_prod,exports.areComponentsEqual=areComponentsEqual,exports.setConfig=setConfig;


/***/ }),

/***/ "./node_modules/react-hot-loader/index.js":
/*!************************************************!*\
  !*** ./node_modules/react-hot-loader/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(/*! ./dist/react-hot-loader.production.min.js */ "./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js");
} else {}


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/ReactLoginPanel.js":
/*!********************************!*\
  !*** ./src/ReactLoginPanel.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_LoginForm_LoginForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/LoginForm/LoginForm */ "./src/components/LoginForm/LoginForm.js");
/* harmony import */ var _components_SignupForm_SignupForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/SignupForm/SignupForm */ "./src/components/SignupForm/SignupForm.js");
(function () {
	var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

	enterModule && enterModule(module);
})();






var runOrPrint = function runOrPrint(value) {
	return typeof value === 'function' ? value() : value;
};

var ReactLoginPanel = function ReactLoginPanel(_ref) {
	var isLoginFormVisible = _ref.isLoginFormVisible,
	    isSignupFormVisible = _ref.isSignupFormVisible,
	    areFormTitlesVisible = _ref.areFormTitlesVisible,
	    loggedInUser = _ref.loggedInUser,
	    userLoggedInMessage = _ref.userLoggedInMessage,
	    signout = _ref.signout,
	    toggleLoginForm = _ref.toggleLoginForm,
	    loginFormFields = _ref.loginFormFields,
	    onSubmitLoginForm = _ref.onSubmitLoginForm,
	    loggingIn = _ref.loggingIn,
	    loginFailed = _ref.loginFailed,
	    toggleSignupForm = _ref.toggleSignupForm,
	    signupFormFields = _ref.signupFormFields,
	    signingUp = _ref.signingUp,
	    onSubmitSignupForm = _ref.onSubmitSignupForm,
	    lang = _ref.lang;
	return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
		'div',
		{ className: 'react-login-panel' },
		loginFormFields && signupFormFields && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
			'div',
			{ className: 'react-login-panel__nav' },
			loggedInUser ? typeof userLoggedInMessage === 'function' ? userLoggedInMessage(loggedInUser) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
				react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
				null,
				userLoggedInMessage,
				react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
					'div',
					{ className: 'react-login-panel__button', onClick: signout },
					runOrPrint(lang.signout)
				)
			) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
				react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
				null,
				react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
					'div',
					{ className: 'react-login-panel__button' + (isLoginFormVisible ? ' active' : ''), onClick: toggleLoginForm },
					runOrPrint(lang.login)
				),
				react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
					'div',
					{ className: 'react-login-panel__button' + (isSignupFormVisible ? ' active' : ''), onClick: toggleSignupForm },
					runOrPrint(lang.signup)
				)
			)
		),
		react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
			'div',
			{ className: 'react-login-panel__forms' },
			loginFormFields && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LoginForm_LoginForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
				areFormTitlesVisible: areFormTitlesVisible,
				formFields: loginFormFields,
				isLoginFormVisible: isLoginFormVisible && !loggedInUser,
				lang: lang,
				loggingIn: loggingIn,
				loginFailed: loginFailed,
				onSubmitForm: onSubmitLoginForm
			}),
			signupFormFields && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SignupForm_SignupForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
				areFormTitlesVisible: areFormTitlesVisible,
				formFields: signupFormFields,
				isSignupFormVisible: isSignupFormVisible && !loggedInUser,
				lang: lang,
				onSubmitForm: onSubmitSignupForm,
				signingUp: signingUp
			})
		)
	);
};

ReactLoginPanel.propTypes = {
	areFormTitlesVisible: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
	isLoginFormVisible: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
	isSignupFormVisible: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
	lang: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
		login: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node]),
		signup: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node]),
		signout: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node]),
		loggingIn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node]),
		loginFailedMessage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node])
	}),
	loggedInUser: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, // eslint-disable-line react/forbid-prop-types
	loggingIn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
	loginFailed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
	loginFormFields: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
		id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
		element: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func]).isRequired
	})),
	onSubmitLoginForm: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
	onSubmitSignupForm: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
	signingUp: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
	signout: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
	signupFormFields: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
		id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
		element: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func]).isRequired,
		validator: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
		errorFeedbackElement: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
	})),
	toggleLoginForm: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
	toggleSignupForm: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
	userLoggedInMessage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node])
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

var _default = ReactLoginPanel;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
	var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

	var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(runOrPrint, 'runOrPrint', '/home/sammysaglam/work/axe-framework/modules/Auth/views/_react-login-panel-package/src/ReactLoginPanel.js');
	reactHotLoader.register(ReactLoginPanel, 'ReactLoginPanel', '/home/sammysaglam/work/axe-framework/modules/Auth/views/_react-login-panel-package/src/ReactLoginPanel.js');
	reactHotLoader.register(_default, 'default', '/home/sammysaglam/work/axe-framework/modules/Auth/views/_react-login-panel-package/src/ReactLoginPanel.js');
	leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/ReactLoginPanel.scss":
/*!**********************************!*\
  !*** ./src/ReactLoginPanel.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/components/LoginForm/LoginForm.js":
/*!***********************************************!*\
  !*** ./src/components/LoginForm/LoginForm.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
	var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

	enterModule && enterModule(module);
})();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var runOrPrint = function runOrPrint(value) {
	return typeof value === 'function' ? value() : value;
};

var LoginForm = function (_React$Component) {
	_inherits(LoginForm, _React$Component);

	function LoginForm(props) {
		_classCallCheck(this, LoginForm);

		var _this = _possibleConstructorReturn(this, (LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).call(this, props));

		_this.state = {
			fieldValues: {}
		};

		_this.onFieldChange = _this.onFieldChange.bind(_this);
		_this.onSubmit = _this.onSubmit.bind(_this);
		return _this;
	}

	_createClass(LoginForm, [{
		key: 'onFieldChange',
		value: function onFieldChange(fieldId, newVal) {
			var fieldValues = this.state.fieldValues;

			// save field's new value to state

			this.setState({
				fieldValues: _extends({}, fieldValues, _defineProperty({}, fieldId, newVal))
			});
		}
	}, {
		key: 'onSubmit',
		value: function onSubmit(event) {
			event.preventDefault();

			var onSubmitForm = this.props.onSubmitForm;
			var fieldValues = this.state.fieldValues;


			onSubmitForm(fieldValues);
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    areFormTitlesVisible = _props.areFormTitlesVisible,
			    lang = _props.lang,
			    formFields = _props.formFields,
			    isLoginFormVisible = _props.isLoginFormVisible,
			    loggingIn = _props.loggingIn,
			    loginFailed = _props.loginFailed;
			var onSubmit = this.onSubmit,
			    onFieldChange = this.onFieldChange;


			var classNames = ['react-login-panel__form', 'react-login-panel__form--login', isLoginFormVisible ? 'react-login-panel__form--show' : null, loggingIn ? 'react-login-panel__form--logging-in' : null, loginFailed ? 'react-login-panel__form--login-failed' : null].filter(function (className) {
				return className;
			}).join(' ');

			return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
				'div',
				{ className: classNames },
				areFormTitlesVisible && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
					'h2',
					null,
					runOrPrint(lang.login)
				),
				loginFailed ? runOrPrint(lang.loginFailedMessage) : null,
				react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
					'form',
					{ onSubmit: onSubmit },
					formFields.map(function (_ref) {
						var id = _ref.id,
						    element = _ref.element;
						return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
							react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
							{ key: id },
							typeof element === 'function' ? element({
								onChange: function onChange(newVal) {
									onFieldChange(id, newVal);
								},
								disabled: loggingIn
							}) : react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(element, {
								onChange: function onChange(event) {
									onFieldChange(id, event.target.value);
									if (typeof element.props.onChange === 'function') {
										element.props.onChange(event);
									}
								},
								disabled: loggingIn
							})
						);
					}),
					react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', { disabled: loggingIn, type: 'submit', value: loggingIn ? runOrPrint(lang.loggingIn) : runOrPrint(lang.login) })
				)
			);
		}
	}, {
		key: '__reactstandin__regenerateByEval',
		value: function __reactstandin__regenerateByEval(key, code) {
			this[key] = eval(code);
		}
	}]);

	return LoginForm;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var _default = LoginForm;
/* harmony default export */ __webpack_exports__["default"] = (_default);


LoginForm.propTypes = {
	areFormTitlesVisible: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
	formFields: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
		id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
		element: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func]).isRequired
	})).isRequired,
	isLoginFormVisible: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
	lang: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
		loggingIn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
		login: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
	}).isRequired,
	loggingIn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
	loginFailed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
	onSubmitForm: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

LoginForm.defaultProps = {
	areFormTitlesVisible: true
};
;

(function () {
	var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

	var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(runOrPrint, 'runOrPrint', '/home/sammysaglam/work/axe-framework/modules/Auth/views/_react-login-panel-package/src/components/LoginForm/LoginForm.js');
	reactHotLoader.register(LoginForm, 'LoginForm', '/home/sammysaglam/work/axe-framework/modules/Auth/views/_react-login-panel-package/src/components/LoginForm/LoginForm.js');
	reactHotLoader.register(_default, 'default', '/home/sammysaglam/work/axe-framework/modules/Auth/views/_react-login-panel-package/src/components/LoginForm/LoginForm.js');
	leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/SignupForm/SignupForm.js":
/*!*************************************************!*\
  !*** ./src/components/SignupForm/SignupForm.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
	var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

	enterModule && enterModule(module);
})();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var runOrPrint = function runOrPrint(value) {
	return typeof value === 'function' ? value() : value;
};

var SignupForm = function (_React$Component) {
	_inherits(SignupForm, _React$Component);

	function SignupForm(props) {
		_classCallCheck(this, SignupForm);

		var _this = _possibleConstructorReturn(this, (SignupForm.__proto__ || Object.getPrototypeOf(SignupForm)).call(this, props));

		_this.state = {
			validating: false,
			fieldValues: {}
		};

		_this.onFieldChange = _this.onFieldChange.bind(_this);
		_this.validateField = _this.validateField.bind(_this);
		_this.validateAllFieldsAndSubmit = _this.validateAllFieldsAndSubmit.bind(_this);
		return _this;
	}

	_createClass(SignupForm, [{
		key: 'onFieldChange',
		value: function onFieldChange(fieldId, newVal, validator) {
			var _this2 = this;

			var fieldValues = this.state.fieldValues;

			// save new value to state and mark isValid as pending

			var newState = {
				fieldValues: _extends({}, fieldValues, _defineProperty({}, fieldId, _extends({}, fieldValues[fieldId], {
					value: newVal,
					isValid: 'pending'
				})))
			};
			this.setState(newState);

			// validate field value
			this.validateField({
				fieldId: fieldId,
				value: newVal,
				validator: validator,
				done: function done(response) {
					_this2.setState(_extends({}, newState, {
						fieldValues: _extends({}, newState.fieldValues, _defineProperty({}, fieldId, _extends({}, newState.fieldValues[fieldId], {
							isValid: response
						})))
					}));
				}
			});
		}
	}, {
		key: 'validateField',
		value: function validateField(_ref) {
			var _this3 = this;

			var fieldId = _ref.fieldId,
			    value = _ref.value,
			    validator = _ref.validator,
			    done = _ref.done;

			var generateValidationId = function generateValidationId(_ref2) {
				var field = _ref2.fieldId;

				if (!_this3.mostRecentValidationId) {
					_this3.mostRecentValidationId = {};
				}

				// increment the validation id tracker
				if (_this3.mostRecentValidationId[field]) {
					_this3.mostRecentValidationId[field]++;
				} else {
					_this3.mostRecentValidationId[field] = 1;
				}

				return _this3.mostRecentValidationId[field];
			};

			var hasValidationExpired = function hasValidationExpired(_ref3) {
				var field = _ref3.fieldId,
				    validationId = _ref3.validationId;
				return validationId !== _this3.mostRecentValidationId[field];
			};

			var validationId = generateValidationId({ fieldId: fieldId });

			// run user-defined validation function
			var validationResult = validator(value, function (response) {
				if (!hasValidationExpired({
					fieldId: fieldId,
					validationId: validationId
				})) {
					done(response);
				}
			});

			// if not async, return validation result to done callback
			if (!validationResult.then) {
				if (!hasValidationExpired({
					fieldId: fieldId,
					validationId: validationId
				})) {
					done(validationResult);
				}
			}
		}
	}, {
		key: 'validateAllFieldsAndSubmit',
		value: function validateAllFieldsAndSubmit() {
			var _this4 = this;

			var _props = this.props,
			    formFields = _props.formFields,
			    onSubmitForm = _props.onSubmitForm;
			var fieldValues = this.state.fieldValues;


			var numberOfFields = formFields.length;
			var validFieldsCount = 0;
			var parsedFieldsCount = 0;
			var newState = {
				validating: true,
				fieldValues: fieldValues
			};
			this.setState(newState);

			formFields.forEach(function (_ref4) {
				var fieldId = _ref4.id,
				    validator = _ref4.validator;

				var fieldValue = fieldValues[fieldId] && fieldValues[fieldId].value ? fieldValues[fieldId].value : '';

				// validate field value
				_this4.validateField({
					fieldId: fieldId,
					value: fieldValue,
					validator: validator,
					done: function done(response) {
						newState = _extends({}, newState, {
							fieldValues: _extends({}, newState.fieldValues, _defineProperty({}, fieldId, _extends({}, newState.fieldValues[fieldId], {
								isValid: response
							})))
						});

						// response is valid
						if (response === true) {
							validFieldsCount++;
						}

						// increment parsed fields
						parsedFieldsCount++;

						// check if finished
						var validationFinished = parsedFieldsCount === numberOfFields;

						if (validationFinished) {
							_this4.setState(_extends({}, newState, {
								validating: false
							}));

							var allAreValid = validFieldsCount === parsedFieldsCount;
							if (allAreValid) {
								onSubmitForm(newState.fieldValues);
							}
						}
					}
				});
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this5 = this;

			var _props2 = this.props,
			    areFormTitlesVisible = _props2.areFormTitlesVisible,
			    lang = _props2.lang,
			    formFields = _props2.formFields,
			    isSignupFormVisible = _props2.isSignupFormVisible,
			    signingUp = _props2.signingUp;
			var _state = this.state,
			    validating = _state.validating,
			    fieldValues = _state.fieldValues;
			var onFieldChange = this.onFieldChange;


			var classNames = ['react-login-panel__form', 'react-login-panel__form--signup', isSignupFormVisible ? 'react-login-panel__form--show' : null].filter(function (isNotEmpty) {
				return isNotEmpty;
			}).join(' ');

			return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
				'div',
				{ className: classNames },
				areFormTitlesVisible && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
					'h2',
					null,
					runOrPrint(lang.signup)
				),
				react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
					'form',
					{
						onSubmit: function onSubmit(event) {
							event.preventDefault();
							_this5.validateAllFieldsAndSubmit();
						}
					},
					formFields.map(function (_ref5) {
						var fieldId = _ref5.id,
						    element = _ref5.element,
						    validator = _ref5.validator,
						    errorFeedbackElement = _ref5.errorFeedbackElement;

						var validityPending = fieldValues[fieldId] && fieldValues[fieldId].isValid === 'pending';
						var hasErrors = !validityPending && fieldValues[fieldId] && fieldValues[fieldId].isValid !== true;
						var errorCode = hasErrors && fieldValues[fieldId].isValid;

						var fieldClassNames = ['react-login-panel__input', validityPending ? 'react-login-panel__input--pending' : null, hasErrors ? 'react-login-panel__input--error' : null].filter(function (className) {
							return className;
						}).join(' ');

						return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
							react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
							{ key: fieldId },
							typeof element === 'function' ? element({
								onChange: function onChange(newVal) {
									onFieldChange(fieldId, newVal, validator);
								},
								pendingValidation: validityPending,
								disabled: validating || signingUp
							}) : react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(element, {
								className: ((element.props.className ? element.props.className + ' ' : '') + fieldClassNames).trim(),
								onChange: function onChange(event) {
									onFieldChange(fieldId, event.target.value, validator);
									if (typeof element.props.onChange === 'function') {
										element.props.onChange(event);
									}
								},
								disabled: validating || signingUp
							}),
							hasErrors ? errorFeedbackElement(errorCode) : null
						);
					}),
					react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', { type: 'submit', value: runOrPrint(lang.signup) })
				)
			);
		}
	}, {
		key: '__reactstandin__regenerateByEval',
		value: function __reactstandin__regenerateByEval(key, code) {
			this[key] = eval(code);
		}
	}]);

	return SignupForm;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var _default = SignupForm;
/* harmony default export */ __webpack_exports__["default"] = (_default);


SignupForm.propTypes = {
	areFormTitlesVisible: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
	formFields: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
		id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
		element: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func]).isRequired,
		validator: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
		errorFeedbackElement: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
	})).isRequired,
	isSignupFormVisible: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
	lang: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
		signup: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
	}).isRequired,
	onSubmitForm: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
	signingUp: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
};

SignupForm.defaultProps = {
	areFormTitlesVisible: true
};
;

(function () {
	var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

	var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(runOrPrint, 'runOrPrint', '/home/sammysaglam/work/axe-framework/modules/Auth/views/_react-login-panel-package/src/components/SignupForm/SignupForm.js');
	reactHotLoader.register(SignupForm, 'SignupForm', '/home/sammysaglam/work/axe-framework/modules/Auth/views/_react-login-panel-package/src/components/SignupForm/SignupForm.js');
	reactHotLoader.register(_default, 'default', '/home/sammysaglam/work/axe-framework/modules/Auth/views/_react-login-panel-package/src/components/SignupForm/SignupForm.js');
	leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/themes/theme-1/theme-1.scss":
/*!*****************************************!*\
  !*** ./src/themes/theme-1/theme-1.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!************************************************************************************************!*\
  !*** multi ./src/themes/theme-1/theme-1.scss ./src/ReactLoginPanel.scss ./src/ReactLoginPanel ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/themes/theme-1/theme-1.scss */"./src/themes/theme-1/theme-1.scss");
__webpack_require__(/*! ./src/ReactLoginPanel.scss */"./src/ReactLoginPanel.scss");
module.exports = __webpack_require__(/*! ./src/ReactLoginPanel */"./src/ReactLoginPanel.js");


/***/ }),

/***/ "prop-types":
/*!*********************************************************************************************************!*\
  !*** external {"commonjs":"prop-types","commonjs2":"prop-types","amd":"prop-types","root":"PropTypes"} ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_prop_types__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});
//# sourceMappingURL=react-login-panel.js.map