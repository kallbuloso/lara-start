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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/assets/_es6/pages/be_comp_rating.js":
/*!*******************************************************!*\
  !*** ./resources/assets/_es6/pages/be_comp_rating.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 *  Document   : be_comp_rating.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Rating Page
 */
// jQuery Raty, for more examples you can check out https://github.com/wbotelhos/raty
var BeCompRating =
/*#__PURE__*/
function () {
  function BeCompRating() {
    _classCallCheck(this, BeCompRating);
  }

  _createClass(BeCompRating, null, [{
    key: "initRating",

    /*
     * Init demo rating functionality
     *
     */
    value: function initRating() {
      // Set Default options
      jQuery.fn.raty.defaults.starType = 'i';
      jQuery.fn.raty.defaults.hints = ['Just Bad!', 'Almost There!', 'It’s ok!', 'That’s nice!', 'Incredible!']; // Init Raty on .js-rating class

      jQuery('.js-rating').each(function (index, element) {
        var el = jQuery(element);
        el.raty({
          score: el.data('score') || 0,
          number: el.data('number') || 5,
          cancel: el.data('cancel') || false,
          target: el.data('target') || false,
          targetScore: el.data('target-score') || false,
          precision: el.data('precision') || false,
          cancelOff: el.data('cancel-off') || 'fa fa-fw fa-times-circle text-danger',
          cancelOn: el.data('cancel-on') || 'fa fa-fw fa-times-circle',
          starHalf: el.data('star-half') || 'fa fa-fw fa-star-half text-warning',
          starOff: el.data('star-off') || 'fa fa-fw fa-star text-muted',
          starOn: el.data('star-on') || 'fa fa-fw fa-star text-warning',
          click: function click(score, evt) {// Here you could add your logic on rating click
            // console.log('ID: ' + this.id + "\nscore: " + score + "\nevent: " + evt);
          }
        });
      });
    }
    /*
     * Init functionality
     *
     */

  }, {
    key: "init",
    value: function init() {
      this.initRating();
    }
  }]);

  return BeCompRating;
}(); // Initialize when page loads


jQuery(function () {
  BeCompRating.init();
});

/***/ }),

/***/ 8:
/*!*************************************************************!*\
  !*** multi ./resources/assets/_es6/pages/be_comp_rating.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\wamp64\www\projetos_laravel\elyder\code-base\resources\assets\_es6\pages\be_comp_rating.js */"./resources/assets/_es6/pages/be_comp_rating.js");


/***/ })

/******/ });