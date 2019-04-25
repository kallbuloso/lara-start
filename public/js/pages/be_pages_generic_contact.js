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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/assets/_es6/pages/be_pages_generic_contact.js":
/*!*****************************************************************!*\
  !*** ./resources/assets/_es6/pages/be_pages_generic_contact.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 *  Document   : be_pages_generic_contact.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Contact Page
 */
var page =
/*#__PURE__*/
function () {
  function page() {
    _classCallCheck(this, page);
  }

  _createClass(page, null, [{
    key: "initValidationContact",

    /*
     * Init Contact Form Validation, for more examples you can check out https://github.com/jzaefferer/jquery-validation
     *
     */
    value: function initValidationContact() {
      jQuery('.js-validation-be-contact').validate({
        errorClass: 'invalid-feedback animated fadeInDown',
        errorElement: 'div',
        errorPlacement: function errorPlacement(error, e) {
          jQuery(e).after(error);
        },
        highlight: function highlight(e) {
          jQuery(e).removeClass('is-invalid').addClass('is-invalid');
        },
        success: function success(e) {
          jQuery(e).prev().removeClass('is-invalid');
          jQuery(e).remove();
        },
        rules: {
          'be-contact-name': {
            required: true,
            minlength: 2
          },
          'be-contact-email': {
            required: true,
            email: true
          },
          'be-contact-subject': {
            required: true
          },
          'be-contact-message': {
            required: true,
            minlength: 2
          }
        },
        messages: {
          'be-contact-name': 'Please provide at least your first name',
          'be-contact-email': 'Please enter your valid email address to be able to reach you back',
          'be-contact-subject': 'Please select where woul you like to send your message',
          'be-contact-message': 'What would you like to say?'
        }
      });
    }
    /*
     * Init Contact Map, for more examples you can check out https://hpneo.github.io/gmaps/
     *
     */

  }, {
    key: "initMapContact",
    value: function initMapContact() {
      if (jQuery('#js-map-be-contact').length) {
        new GMaps({
          div: '#js-map-be-contact',
          lat: 37.840,
          lng: -122.500,
          zoom: 13,
          disableDefaultUI: true,
          scrollwheel: false
        }).addMarkers([{
          lat: 37.840,
          lng: -122.500,
          title: 'Marker #1',
          animation: google.maps.Animation.DROP,
          infoWindow: {
            content: 'Company LTD'
          }
        }]);
      }
    }
    /*
     * Init functionality
     *
     */

  }, {
    key: "init",
    value: function init() {
      this.initValidationContact();
      this.initMapContact();
    }
  }]);

  return page;
}(); // Initialize when page loads


jQuery(function () {
  page.init();
});

/***/ }),

/***/ 15:
/*!***********************************************************************!*\
  !*** multi ./resources/assets/_es6/pages/be_pages_generic_contact.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\wamp64\www\projetos_laravel\elyder\code-base\resources\assets\_es6\pages\be_pages_generic_contact.js */"./resources/assets/_es6/pages/be_pages_generic_contact.js");


/***/ })

/******/ });