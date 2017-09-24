(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["fcronjs"] = factory();
	else
		root["fcronjs"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _debounce = __webpack_require__(1);

	var _debounce2 = _interopRequireDefault(_debounce);

	var _throttle = __webpack_require__(5);

	var _throttle2 = _interopRequireDefault(_throttle);

	var _waiter = __webpack_require__(7);

	var _waiter2 = _interopRequireDefault(_waiter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.debounce = _debounce2.default;
	exports.throttle = _throttle2.default;
	exports.waiter = _waiter2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _debounce = __webpack_require__(2);

	var _debounce2 = _interopRequireDefault(_debounce);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _debounce2.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _utils = __webpack_require__(3);

	/**
	 * Method debounce creates Hi Ordered Function which sets minimal period between calls.
	 * @param {Function} func - original function.
	 * @param {Object|number} [secondArgument] - in case Object - configurin object,
	 *                                           in other case - [config#delay = 100].
	 * Configuring object has 3 parameters:
	 * @param {number} [config#delay = 100] - minimal number of milliseconds to be waited between calls.
	 * @param {boolean} [config#immediate = false] - when immediate = true function calls immediatly
	 *                                               if it is possible, in other case it cals after
	 *                                               delay ms.
	 * @param {Object} [config#context] - context object of function. If context was set it can not
	 *                                    be changed or removed.
	 * @return {Function} - decorated function.
	 */
	exports.default = function (func, secondArgument) {
	  var _getConfig = (0, _utils.getConfig)(secondArgument),
	      _getConfig$delay = _getConfig.delay,
	      delay = _getConfig$delay === undefined ? 100 : _getConfig$delay,
	      _getConfig$immediate = _getConfig.immediate,
	      immediate = _getConfig$immediate === undefined ? false : _getConfig$immediate,
	      context = _getConfig.context;

	  var timeout = void 0;

	  var debouncedFunc = function debouncedFunc() {
	    var _this = this;

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    var callback = function callback() {
	      timeout = null;

	      if (!immediate) {
	        func.apply(_this, args);
	      }
	    };

	    if (timeout) {
	      return;
	    }

	    if (immediate) {
	      func.apply(this, args);
	    }

	    timeout = setTimeout(callback, delay);
	  };

	  return context && (typeof context === 'undefined' ? 'undefined' : _typeof(context)) === 'object' ? debouncedFunc.bind(context) : debouncedFunc;
	};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getConfig = undefined;

	var _getConfig = __webpack_require__(4);

	var _getConfig2 = _interopRequireDefault(_getConfig);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.getConfig = _getConfig2.default;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * Converts argument into config for debounce and throttle functions.
	 * @params {*} [arg] - argument to be converted inco config object.
	 * @return {Object} - config.
	 */
	exports.default = function (arg) {
	  if (arg === null || typeof arg === 'undefined') {
	    return { delay: 100, immediate: false };
	  }

	  if ((typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object') {
	    var _arg = arg,
	        _arg$delay = _arg.delay,
	        delay = _arg$delay === undefined ? 100 : _arg$delay,
	        _arg$immediate = _arg.immediate,
	        immediate = _arg$immediate === undefined ? false : _arg$immediate,
	        context = _arg.context;

	    return { delay: delay, immediate: immediate, context: context };
	  }

	  if (typeof arg === 'string') {
	    arg = parseInt(arg, 10);
	  }

	  if (typeof arg !== 'number' || isNaN(arg)) {
	    arg = 0;
	  }

	  return { delay: arg, immediate: false };
	};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _throttle = __webpack_require__(6);

	var _throttle2 = _interopRequireDefault(_throttle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _throttle2.default;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(3);

	/**
	 * Method throttle creates Hi Ordered Function which sets minimal period between calls
	 * and execute last call every time at the end.
	 * @param {Function} func - original function.
	 * @param {Object|number} [secondArgument] - in case Object - configurin object,
	 *                                           in other case - [config#delay = 100].
	 * Configuring object has 3 parameters:
	 * @param {number} [config#delay = 100] - minimal number of milliseconds to be waited between calls.
	 * @param {boolean} [config#immediate = false] - when immediate = true function calls immediatly
	 *                                               if it is possible, in other case it cals after
	 *                                               delay ms.
	 * @return {Function} - decorated function.
	 */
	exports.default = function (func, secondArgument) {
	  var _getConfig = (0, _utils.getConfig)(secondArgument),
	      _getConfig$delay = _getConfig.delay,
	      delay = _getConfig$delay === undefined ? 100 : _getConfig$delay,
	      _getConfig$immediate = _getConfig.immediate,
	      immediate = _getConfig$immediate === undefined ? false : _getConfig$immediate;

	  var timeout = void 0;
	  var argList = void 0;
	  var context = void 0;

	  return function () {
	    var _this = this;

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    if (timeout) {
	      argList = args;
	      context = this;
	    } else {
	      argList = context = null;

	      if (immediate) {
	        func.apply(this, args);
	      }

	      timeout = setTimeout(function () {
	        timeout = null;

	        if (!immediate) {
	          func.apply(_this, args);
	        }

	        if (argList) {
	          func.apply(context, argList);
	        }
	      }, delay);
	    }
	  };
	};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _waiter = __webpack_require__(8);

	var _waiter2 = _interopRequireDefault(_waiter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _waiter2.default;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	/**
	 * Method waiter creates Hi Ordered Function which at call
	 * waits some time befor call original function, and in
	 * case of second call before function called, it stops
	 * waiting without calling function.
	 * @param {Function} func - original function.
	 * @param {number} [delay = 100] - number of milliseconds
	 *                                 must be waited before
	 *                                 original function call.
	 * @return {Function} - decorated function.
	 */
	exports.default = function (func) {
	  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

	  var timeout = void 0;

	  return function () {
	    var _this = this;

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    if (timeout) {
	      clearTimeout(timeout);
	      timeout = null;
	    } else {
	      timeout = setTimeout(function () {
	        timeout = null;
	        func.apply(_this, args);
	      }, delay);
	    }
	  };
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=index.js.map