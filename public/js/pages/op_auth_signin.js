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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 29);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/assets/_es6/pages/op_auth_signin.js":
/*!*******************************************************!*\
  !*** ./resources/assets/_es6/pages/op_auth_signin.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 *  Document   : op_auth_signin.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Sign In Page
 */
// Form Validation, for more examples you can check out https://github.com/jzaefferer/jquery-validation
var OpAuthSignIn =
/*#__PURE__*/
function () {
  function OpAuthSignIn() {
    _classCallCheck(this, OpAuthSignIn);
  }

  _createClass(OpAuthSignIn, null, [{
    key: "initValidationSignIn",

    /*
     * Init Sign In Form Validation
     *
     */
    value: function initValidationSignIn() {
      jQuery('.js-validation-signin').validate({
        errorClass: 'invalid-feedback animated fadeInDown',
        errorElement: 'div',
        errorPlacement: function errorPlacement(error, e) {
          jQuery(e).parents('.form-group > div').append(error);
        },
        highlight: function highlight(e) {
          jQuery(e).closest('.form-group').removeClass('is-invalid').addClass('is-invalid');
        },
        success: function success(e) {
          jQuery(e).closest('.form-group').removeClass('is-invalid');
          jQuery(e).remove();
        },
        rules: {
          'login-username': {
            required: true,
            minlength: 3
          },
          'login-password': {
            required: true,
            minlength: 5
          }
        },
        messages: {
          'login-username': {
            required: 'Please enter a username',
            minlength: 'Your username must consist of at least 3 characters'
          },
          'login-password': {
            required: 'Please provide a password',
            minlength: 'Your password must be at least 5 characters long'
          }
        }
      });
    }
    /*
     * Init functionality
     *
     */

  }, {
    key: "init",
    value: function init() {
      this.initValidationSignIn();
    }
  }]);

  return OpAuthSignIn;
}(); // Initialize when page loads


jQuery(function () {
  OpAuthSignIn.init();
});

/***/ }),

/***/ 29:
/*!*************************************************************!*\
  !*** multi ./resources/assets/_es6/pages/op_auth_signin.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\wamp64\www\projetos_laravel\elyder\code-base\resources\assets\_es6\pages\op_auth_signin.js */"./resources/assets/_es6/pages/op_auth_signin.js");


/***/ })

/******/ });