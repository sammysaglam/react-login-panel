(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "prop-types"], factory);
	else if(typeof exports === 'object')
		exports["ReactLoginPanel"] = factory(require("react"), require("prop-types"));
	else
		root["ReactLoginPanel"] = factory(root["react"], root["prop-types"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_2__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _LoginForm = __webpack_require__(3);

var _LoginForm2 = _interopRequireDefault(_LoginForm);

var _SignupForm = __webpack_require__(4);

var _SignupForm2 = _interopRequireDefault(_SignupForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LangDefaults = {
	'login': 'Login',
	'signup': 'Signup',
	'signout': 'Sign Out',
	'loggingIn': 'Logging In'
};

var ReactLoginPanel = function (_React$Component) {
	_inherits(ReactLoginPanel, _React$Component);

	function ReactLoginPanel(props) {
		_classCallCheck(this, ReactLoginPanel);

		var _this = _possibleConstructorReturn(this, (ReactLoginPanel.__proto__ || Object.getPrototypeOf(ReactLoginPanel)).call(this, props));

		_this.lang = _extends({}, LangDefaults, props.lang);
		return _this;
	}

	_createClass(ReactLoginPanel, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    _props$showFormTitles = _props.showFormTitles,
			    showFormTitles = _props$showFormTitles === undefined ? true : _props$showFormTitles,
			    loggedInUser = _props.loggedInUser,
			    userLoggedInMessage = _props.userLoggedInMessage,
			    signout = _props.signout,
			    showLoginForm = _props.showLoginForm,
			    toggleLoginForm = _props.toggleLoginForm,
			    loginFormFields = _props.loginFormFields,
			    submitLoginForm = _props.submitLoginForm,
			    loggingIn = _props.loggingIn,
			    loginFailed = _props.loginFailed,
			    loginFailedMessage = _props.loginFailedMessage,
			    showSignupForm = _props.showSignupForm,
			    toggleSignupForm = _props.toggleSignupForm,
			    signupFormFields = _props.signupFormFields,
			    submitSignupForm = _props.submitSignupForm;


			return _react2.default.createElement(
				'div',
				{ className: 'react-login-panel' },
				loginFormFields && signupFormFields && _react2.default.createElement(
					'div',
					{ className: 'nav' },
					loggedInUser ? [typeof userLoggedInMessage === 'function' ? userLoggedInMessage(loggedInUser) : userLoggedInMessage, _react2.default.createElement(
						'div',
						{ key: 'signout', className: 'button', onClick: signout },
						this.lang.signout
					)] : [_react2.default.createElement(
						'div',
						{ key: 'login', className: 'button' + (showLoginForm ? ' active' : ''), onClick: toggleLoginForm },
						this.lang.login
					), _react2.default.createElement(
						'div',
						{ key: 'signup', className: 'button' + (showSignupForm ? ' active' : ''), onClick: toggleSignupForm },
						this.lang.signup
					)]
				),
				_react2.default.createElement(
					'div',
					{ className: 'forms' },
					loginFormFields && _react2.default.createElement(_LoginForm2.default, {
						showFormTitles: showFormTitles,
						lang: this.lang,
						showLoginForm: showLoginForm && !loggedInUser,
						loggingIn: loggingIn,
						formFields: loginFormFields,
						submitForm: submitLoginForm,
						loginFailed: loginFailed,
						loginFailedMessage: loginFailedMessage
					}),
					signupFormFields && _react2.default.createElement(_SignupForm2.default, {
						showFormTitles: showFormTitles,
						lang: this.lang,
						showSignupForm: showSignupForm && !loggedInUser,
						formFields: signupFormFields,
						submitForm: submitSignupForm
					})
				)
			);
		}
	}]);

	return ReactLoginPanel;
}(_react2.default.Component);

ReactLoginPanel.propTypes = {
	showFormTitles: _propTypes2.default.bool,
	lang: _propTypes2.default.shape({
		'login': _propTypes2.default.string,
		'signup': _propTypes2.default.string,
		'signout': _propTypes2.default.string,
		'loggingIn': _propTypes2.default.string
	}),
	loggedInUser: _propTypes2.default.oneOfType([_propTypes2.default.object]),
	userLoggedInMessage: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.object, _propTypes2.default.string]),
	signout: _propTypes2.default.func,
	showLoginForm: _propTypes2.default.bool,
	toggleLoginForm: _propTypes2.default.func,
	loginFormFields: _propTypes2.default.arrayOf(_propTypes2.default.shape({
		id: _propTypes2.default.string,
		fields: _propTypes2.default.object
	})),
	submitLoginForm: _propTypes2.default.func,
	loggingIn: _propTypes2.default.bool,
	loginFailed: _propTypes2.default.bool,
	loginFailedMessage: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.object, _propTypes2.default.string]),
	showSignupForm: _propTypes2.default.bool,
	toggleSignupForm: _propTypes2.default.func,
	signupFormFields: _propTypes2.default.arrayOf(_propTypes2.default.shape({
		id: _propTypes2.default.string,
		fields: _propTypes2.default.object,
		validator: _propTypes2.default.func,
		errorFeedbackElement: _propTypes2.default.func
	})),
	submitSignupForm: _propTypes2.default.func
};

module.exports = ReactLoginPanel;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginForm = function (_React$Component) {
	_inherits(LoginForm, _React$Component);

	function LoginForm(props) {
		_classCallCheck(this, LoginForm);

		var _this = _possibleConstructorReturn(this, (LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).call(this, props));

		_this.state = {
			customFields: {}
		};

		_this.onFieldChange = _this.onFieldChange.bind(_this);
		_this.onSubmit = _this.onSubmit.bind(_this);
		return _this;
	}

	_createClass(LoginForm, [{
		key: 'onFieldChange',
		value: function onFieldChange(fieldId, newVal) {

			// save field's new value to state
			this.setState({
				customFields: _extends({}, this.state.customFields, _defineProperty({}, fieldId, newVal))
			});
		}
	}, {
		key: 'onSubmit',
		value: function onSubmit(event) {
			event.preventDefault();

			this.props.submitForm(this.state.customFields);
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    showFormTitles = _props.showFormTitles,
			    lang = _props.lang,
			    formFields = _props.formFields,
			    showLoginForm = _props.showLoginForm,
			    loggingIn = _props.loggingIn,
			    loginFailed = _props.loginFailed,
			    loginFailedMessage = _props.loginFailedMessage;
			var onSubmit = this.onSubmit,
			    onFieldChange = this.onFieldChange;


			var classNames = ['login-form', showLoginForm ? 'show' : null, loggingIn ? 'logging-in' : null, loginFailed ? 'login-failed' : null].filter(function (className) {
				return className;
			}).join(' ');

			return _react2.default.createElement(
				'div',
				{ className: classNames },
				showFormTitles && _react2.default.createElement(
					'h2',
					null,
					lang.login
				),
				loginFailed && loginFailedMessage ? typeof loginFailedMessage === 'function' ? loginFailedMessage() : loginFailedMessage : null,
				_react2.default.createElement(
					'form',
					{ onSubmit: onSubmit },
					formFields.map(function (_ref) {
						var id = _ref.id,
						    element = _ref.element;
						return typeof element === 'function' ? _react2.default.cloneElement(element({
							onChange: function onChange(newVal) {
								onFieldChange(id, newVal);
							},
							disabled: loggingIn
						}), {
							key: id
						}) : _react2.default.cloneElement(element, {
							key: id,
							onChange: function onChange(event) {
								onFieldChange(id, event.target.value);
								if (typeof element.props.onChange === 'function') {
									field.element.props.onChange(event);
								}
							},
							disabled: loggingIn
						});
					}),
					_react2.default.createElement('input', {
						type: 'submit',
						value: loggingIn ? lang.loggingIn : lang.login,
						disabled: loggingIn
					})
				)
			);
		}
	}]);

	return LoginForm;
}(_react2.default.Component);

exports.default = LoginForm;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _object = __webpack_require__(5);

var _object2 = _interopRequireDefault(_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignupForm = function (_React$Component) {
	_inherits(SignupForm, _React$Component);

	function SignupForm(props) {
		_classCallCheck(this, SignupForm);

		var _this = _possibleConstructorReturn(this, (SignupForm.__proto__ || Object.getPrototypeOf(SignupForm)).call(this, props));

		_this.state = {
			customFields: {}
		};

		_this.onFieldChange = _this.onFieldChange.bind(_this);
		_this.validateAllFieldsAndSubmit = _this.validateAllFieldsAndSubmit.bind(_this);
		_this.onSubmit = _this.onSubmit.bind(_this);
		return _this;
	}

	_createClass(SignupForm, [{
		key: 'onFieldChange',
		value: function onFieldChange(fieldId, newVal, validator) {
			var _this2 = this;

			// save field's new value to state
			var newState = {
				customFields: _extends({}, this.state.customFields, _defineProperty({}, fieldId, _extends({}, this.state.customFields[fieldId], {
					value: newVal
				})))
			};

			// create callback if validator is async
			var asyncCallback = function asyncCallback(jsonResponse) {

				var currentValue = _this2.state.customFields[fieldId] && _this2.state.customFields[fieldId].value ? _this2.state.customFields[fieldId].value : '';

				if (jsonResponse.value === currentValue) {
					_this2.setState({
						customFields: _extends({}, _this2.state.customFields, _defineProperty({}, fieldId, _extends({}, _this2.state.customFields[fieldId], {
							isValid: jsonResponse.isValid
						})))
					});
				}
			};

			// run user-defined validation function
			var validationResult = validator(newVal, asyncCallback);

			// check if validator is async
			if ((typeof validationResult === 'undefined' ? 'undefined' : _typeof(validationResult)) === 'object') {

				// set new validity state to 'pending'
				newState.customFields[fieldId].isValid = 'pending';
			} else {

				// no async, so we can safely update the state immediately
				newState.customFields[fieldId].isValid = validationResult;
			}

			this.setState(newState);
		}
	}, {
		key: 'validateAllFieldsAndSubmit',
		value: function validateAllFieldsAndSubmit(submitFn) {
			var _this3 = this;

			var formFields = this.props.formFields;

			var booleanValidators = true;
			var asyncValidators = {};
			var newState = {
				customFields: _extends({}, this.state.customFields)
			};

			// a function to check if ready to submit
			var passedValidation = function passedValidation() {
				return booleanValidators && function () {

					return !(0, _object2.default)(asyncValidators, function (failuresExist, state) {
						return failuresExist || state.passed !== true;
					}, false);
				}();
			};

			formFields.forEach(function (field) {

				// get current user input
				var fieldValue = _this3.state.customFields[field.id] && _this3.state.customFields[field.id].value ? _this3.state.customFields[field.id].value : '';

				// run validation function
				var validationResult = field.validator(fieldValue);

				// check if validationResult is a promise
				if (validationResult.then) {

					// add async validator to list
					asyncValidators = _extends({}, asyncValidators, _defineProperty({}, field.id, {
						value: fieldValue
					}));

					// save response to list when ready
					validationResult.then(function (response) {
						return response.json();
					}).then(function (response) {

						// update state to display errors to user
						var newStateAsync = {
							customFields: _extends({}, _this3.state.customFields, _defineProperty({}, field.id, _extends({}, _this3.state.customFields[field.id], {
								isValid: response.isValid
							})))
						};
						_this3.setState(newStateAsync);

						// store validity response
						asyncValidators = _extends({}, asyncValidators, _defineProperty({}, field.id, {
							passed: response.value === fieldValue && response.isValid === true
						}));

						// if ready, then submit
						if (passedValidation()) {
							submitFn();
						}
					});
				} else {
					booleanValidators = booleanValidators && validationResult === true;

					// update state to display errors to user
					newState = {
						customFields: _extends({}, newState.customFields, _defineProperty({}, field.id, {
							value: fieldValue,
							isValid: validationResult
						}))
					};
				}
			});

			// save new state
			this.setState(newState);

			// if ready, then submit
			if (passedValidation()) {
				submitFn();
			}
		}
	}, {
		key: 'onSubmit',
		value: function onSubmit(event) {
			var _this4 = this;

			event.preventDefault();

			this.validateAllFieldsAndSubmit(function () {
				_this4.props.submitForm(_this4.state.customFields);
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    showFormTitles = _props.showFormTitles,
			    lang = _props.lang,
			    formFields = _props.formFields,
			    showSignupForm = _props.showSignupForm;
			var customFields = this.state.customFields;
			var onSubmit = this.onSubmit,
			    onFieldChange = this.onFieldChange;


			var classNames = ['signup-form', showSignupForm ? 'show' : null].filter(function (className) {
				return className;
			}).join(' ');

			return _react2.default.createElement(
				'div',
				{ className: classNames },
				showFormTitles && _react2.default.createElement(
					'h2',
					null,
					lang.signup
				),
				_react2.default.createElement(
					'form',
					{ onSubmit: onSubmit },
					formFields.map(function (_ref) {
						var id = _ref.id,
						    element = _ref.element,
						    validator = _ref.validator,
						    errorFeedbackElement = _ref.errorFeedbackElement;


						var validityPending = customFields[id] && customFields[id].isValid === 'pending';
						var hasErrors = !validityPending && customFields[id] && customFields[id].isValid !== true;
						var errorCode = hasErrors && customFields[id].isValid;

						var fieldClassNames = [validityPending ? 'pending' : null, hasErrors ? 'error' : null].filter(function (className) {
							return className;
						}).join(' ');

						return _react2.default.createElement(
							'div',
							{ key: id },
							typeof element === 'function' ? element({
								onChange: function onChange(newVal) {
									onFieldChange(id, newVal, validator);
								}
							}) : _react2.default.cloneElement(element, {
								className: ((element.props.className ? element.props.className + ' ' : '') + fieldClassNames).trim(),
								onChange: function onChange(event) {
									onFieldChange(id, event.target.value, validator);
									if (typeof element.props.onChange === 'function') {
										element.props.onChange(event);
									}
								}
							}),
							hasErrors ? errorFeedbackElement(errorCode) : null
						);
					}),
					_react2.default.createElement('input', { type: 'submit', value: lang.signup })
				)
			);
		}
	}]);

	return SignupForm;
}(_react2.default.Component);

exports.default = SignupForm;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * object.reduce <https://github.com/jonschlinkert/object.reduce>
 *
 * Copyright (c) 2014-2015, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var makeIterator = __webpack_require__(6);
var forOwn = __webpack_require__(9);

module.exports = function reduce(target, fn, acc, thisArg) {
  var first = arguments.length > 2;
  if (target && !Object.keys(target).length && !first) {
    return null;
  }

  var iterator = makeIterator(fn, thisArg);

  forOwn(target, function(value, key, orig) {
    if (!first) {
      acc = value;
      first = true;
    } else {
      acc = iterator(acc, value, key, orig);
    }
  });

  return acc;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * make-iterator <https://github.com/jonschlinkert/make-iterator>
 *
 * Copyright (c) 2014, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var typeOf = __webpack_require__(7);

module.exports = function makeIterator(target, thisArg) {
  switch (typeOf(target)) {
    case 'undefined':
    case 'null':
      return noop;
    case 'function':
      // function is the first to improve perf (most common case)
      // also avoid using `Function#call` if not needed, which boosts
      // perf a lot in some cases
      return (typeof thisArg !== 'undefined') ? function(val, i, arr) {
        return target.call(thisArg, val, i, arr);
      } : target;
    case 'object':
      return function(val) {
        return deepMatches(val, target);
      };
    case 'regexp':
      return function(str) {
        return target.test(str);
      };
    case 'string':
    case 'number':
    default: {
      return prop(target);
    }
  }
};

function containsMatch(array, value) {
  var len = array.length;
  var i = -1;

  while (++i < len) {
    if (deepMatches(array[i], value)) {
      return true;
    }
  }
  return false;
}

function matchArray(arr, value) {
  var len = value.length;
  var i = -1;

  while (++i < len) {
    if (!containsMatch(arr, value[i])) {
      return false;
    }
  }
  return true;
}

function matchObject(obj, value) {
  for (var key in value) {
    if (value.hasOwnProperty(key)) {
      if (deepMatches(obj[key], value[key]) === false) {
        return false;
      }
    }
  }
  return true;
}

/**
 * Recursively compare objects
 */

function deepMatches(val, value) {
  if (typeOf(val) === 'object') {
    if (Array.isArray(val) && Array.isArray(value)) {
      return matchArray(val, value);
    } else {
      return matchObject(val, value);
    }
  } else {
    return val === value;
  }
}

function prop(name) {
  return function(obj) {
    return obj[name];
  };
}

function noop(val) {
  return val;
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var isBuffer = __webpack_require__(8);
var toString = Object.prototype.toString;

/**
 * Get the native `typeof` a value.
 *
 * @param  {*} `val`
 * @return {*} Native javascript type
 */

module.exports = function kindOf(val) {
  // primitivies
  if (typeof val === 'undefined') {
    return 'undefined';
  }
  if (val === null) {
    return 'null';
  }
  if (val === true || val === false || val instanceof Boolean) {
    return 'boolean';
  }
  if (typeof val === 'string' || val instanceof String) {
    return 'string';
  }
  if (typeof val === 'number' || val instanceof Number) {
    return 'number';
  }

  // functions
  if (typeof val === 'function' || val instanceof Function) {
    return 'function';
  }

  // array
  if (typeof Array.isArray !== 'undefined' && Array.isArray(val)) {
    return 'array';
  }

  // check for instances of RegExp and Date before calling `toString`
  if (val instanceof RegExp) {
    return 'regexp';
  }
  if (val instanceof Date) {
    return 'date';
  }

  // other objects
  var type = toString.call(val);

  if (type === '[object RegExp]') {
    return 'regexp';
  }
  if (type === '[object Date]') {
    return 'date';
  }
  if (type === '[object Arguments]') {
    return 'arguments';
  }
  if (type === '[object Error]') {
    return 'error';
  }

  // buffer
  if (isBuffer(val)) {
    return 'buffer';
  }

  // es6: Map, WeakMap, Set, WeakSet
  if (type === '[object Set]') {
    return 'set';
  }
  if (type === '[object WeakSet]') {
    return 'weakset';
  }
  if (type === '[object Map]') {
    return 'map';
  }
  if (type === '[object WeakMap]') {
    return 'weakmap';
  }
  if (type === '[object Symbol]') {
    return 'symbol';
  }

  // typed arrays
  if (type === '[object Int8Array]') {
    return 'int8array';
  }
  if (type === '[object Uint8Array]') {
    return 'uint8array';
  }
  if (type === '[object Uint8ClampedArray]') {
    return 'uint8clampedarray';
  }
  if (type === '[object Int16Array]') {
    return 'int16array';
  }
  if (type === '[object Uint16Array]') {
    return 'uint16array';
  }
  if (type === '[object Int32Array]') {
    return 'int32array';
  }
  if (type === '[object Uint32Array]') {
    return 'uint32array';
  }
  if (type === '[object Float32Array]') {
    return 'float32array';
  }
  if (type === '[object Float64Array]') {
    return 'float64array';
  }

  // must be a plain object
  return 'object';
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * for-own <https://github.com/jonschlinkert/for-own>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var forIn = __webpack_require__(10);
var hasOwn = Object.prototype.hasOwnProperty;

module.exports = function forOwn(obj, fn, thisArg) {
  forIn(obj, function(val, key) {
    if (hasOwn.call(obj, key)) {
      return fn.call(thisArg, obj[key], key, obj);
    }
  });
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * for-in <https://github.com/jonschlinkert/for-in>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function forIn(obj, fn, thisArg) {
  for (var key in obj) {
    if (fn.call(thisArg, obj[key], key, obj) === false) {
      break;
    }
  }
};


/***/ })
/******/ ]);
});
//# sourceMappingURL=react-login-panel.umd.js.map