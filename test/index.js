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

	var _throttle = __webpack_require__(3);

	var _throttle2 = _interopRequireDefault(_throttle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.debounce = _debounce2.default;
	exports.throttle = _throttle2.default;

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
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * Method debounce creates Hi Ordered Function which sets minimal period between calls.
	 * @param {Function} func - original function.
	 * @param {Object} [config = {}] - configurin object.
	 * @param {number} [config#wait = 100] - minimal number of milliseconds to be waited between calls.
	 * @param {boolean} [config#immediate = false] - when immediate = true function calls immediatly
	 *                                               if it is possible, in other case it cals after
	 *                                               wait ms.
	 * @param {Object} [config#context] - context object of function. If context was set it can not
	 *                                    be changed or removed.
	 * @return {Function} - decorated function.
	 */
	exports.default = function (func) {
	  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var _config$wait = config.wait,
	      wait = _config$wait === undefined ? 100 : _config$wait,
	      _config$immediate = config.immediate,
	      immediate = _config$immediate === undefined ? false : _config$immediate,
	      context = config.context;

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

	    timeout = setTimeout(callback, wait);
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
	exports.default = undefined;

	var _throttle = __webpack_require__(4);

	var _throttle2 = _interopRequireDefault(_throttle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _throttle2.default;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	/**
	 * Method debounce creates Hi Ordered Function which sets minimal period between calls
	 * and execute last call every time.
	 * @param {Function} func - original function.
	 * @param {number} [period = 100] - minimal number of milliseconds to be waited between calls.
	 * @return {Function} - decorated function.
	 */
	exports.default = function (func) {
	  var period = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

	  var timeout = void 0;
	  var argList = void 0;
	  var context = void 0;

	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    if (timeout) {
	      argList = args;
	      context = this;
	    } else {
	      argList = context = null;

	      func.apply(this, args);

	      timeout = setTimeout(function () {
	        timeout = null;

	        if (argList) {
	          func.apply(context, argList);
	        }
	      }, period);
	    }
	  };
	};

/***/ })
/******/ ])
});
;
//# sourceMappingURL=index.js.map