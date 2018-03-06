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

/***/ "./node_modules/for-in/index.js":
/*!**************************************!*\
  !*** ./node_modules/for-in/index.js ***!
  \**************************************/
/*! no static exports found */
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


/***/ }),

/***/ "./node_modules/for-own/index.js":
/*!***************************************!*\
  !*** ./node_modules/for-own/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * for-own <https://github.com/jonschlinkert/for-own>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var forIn = __webpack_require__(/*! for-in */ "./node_modules/for-in/index.js");
var hasOwn = Object.prototype.hasOwnProperty;

module.exports = function forOwn(obj, fn, thisArg) {
  forIn(obj, function(val, key) {
    if (hasOwn.call(obj, key)) {
      return fn.call(thisArg, obj[key], key, obj);
    }
  });
};


/***/ }),

/***/ "./node_modules/is-buffer/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
/*! no static exports found */
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

/***/ "./node_modules/kind-of/index.js":
/*!***************************************!*\
  !*** ./node_modules/kind-of/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isBuffer = __webpack_require__(/*! is-buffer */ "./node_modules/is-buffer/index.js");
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

/***/ "./node_modules/make-iterator/index.js":
/*!*********************************************!*\
  !*** ./node_modules/make-iterator/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * make-iterator <https://github.com/jonschlinkert/make-iterator>
 *
 * Copyright (c) 2014, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var typeOf = __webpack_require__(/*! kind-of */ "./node_modules/kind-of/index.js");

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

/***/ "./node_modules/object.reduce/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object.reduce/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * object.reduce <https://github.com/jonschlinkert/object.reduce>
 *
 * Copyright (c) 2014-2015, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var makeIterator = __webpack_require__(/*! make-iterator */ "./node_modules/make-iterator/index.js");
var forOwn = __webpack_require__(/*! for-own */ "./node_modules/for-own/index.js");

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
/* harmony import */ var object_reduce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! object.reduce */ "./node_modules/object.reduce/index.js");
/* harmony import */ var object_reduce__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(object_reduce__WEBPACK_IMPORTED_MODULE_2__);
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
			fieldValues: object_reduce__WEBPACK_IMPORTED_MODULE_2___default()(props.formFields, function (concatenated, _ref) {
				var id = _ref.id,
				    defaultValue = _ref.defaultValue;
				return _extends({}, concatenated, _defineProperty({}, id, defaultValue ? defaultValue : ''));
			}, {})
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
			var fieldValues = this.state.fieldValues;
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
					formFields.map(function (_ref2) {
						var id = _ref2.id,
						    element = _ref2.element;
						return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
							react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
							{ key: id },
							typeof element === 'function' ? element({
								onChange: function onChange(newVal) {
									onFieldChange(id, newVal);
								},
								value: fieldValues[id],
								disabled: loggingIn
							}) : react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(element, {
								value: fieldValues[id],
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
/* harmony import */ var object_reduce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! object.reduce */ "./node_modules/object.reduce/index.js");
/* harmony import */ var object_reduce__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(object_reduce__WEBPACK_IMPORTED_MODULE_2__);
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
			fieldValues: object_reduce__WEBPACK_IMPORTED_MODULE_2___default()(props.formFields, function (concatenated, _ref) {
				var id = _ref.id,
				    defaultValue = _ref.defaultValue;
				return _extends({}, concatenated, _defineProperty({}, id, {
					value: defaultValue ? defaultValue : ''
				}));
			}, {})
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
		value: function validateField(_ref2) {
			var _this3 = this;

			var fieldId = _ref2.fieldId,
			    value = _ref2.value,
			    validator = _ref2.validator,
			    done = _ref2.done;

			var generateValidationId = function generateValidationId(_ref3) {
				var field = _ref3.fieldId;

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

			var hasValidationExpired = function hasValidationExpired(_ref4) {
				var field = _ref4.fieldId,
				    validationId = _ref4.validationId;
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

			formFields.forEach(function (_ref5) {
				var fieldId = _ref5.id,
				    validator = _ref5.validator;

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
					formFields.map(function (_ref6) {
						var fieldId = _ref6.id,
						    element = _ref6.element,
						    validator = _ref6.validator,
						    errorFeedbackElement = _ref6.errorFeedbackElement;

						var validityPending = fieldValues[fieldId] && fieldValues[fieldId].isValid === 'pending';
						var hasErrors = !validityPending && typeof fieldValues[fieldId].isValid !== 'undefined' && fieldValues[fieldId].isValid !== true;
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
								value: fieldValues[fieldId].value,
								pendingValidation: validityPending,
								disabled: validating || signingUp
							}) : react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(element, {
								className: ((element.props.className ? element.props.className + ' ' : '') + fieldClassNames).trim(),
								value: fieldValues[fieldId].value,
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