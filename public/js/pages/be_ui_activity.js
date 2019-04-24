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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/assets/_es6/pages/be_ui_activity.js":
/*!*******************************************************!*\
  !*** ./resources/assets/_es6/pages/be_ui_activity.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 *  Document   : be_ui_activity.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Activity Page
 */
var BeUIActivity =
/*#__PURE__*/
function () {
  function BeUIActivity() {
    _classCallCheck(this, BeUIActivity);
  }

  _createClass(BeUIActivity, null, [{
    key: "barsRandomize",

    /*
     * Randomize progress bars values
     *
     */
    value: function barsRandomize() {
      jQuery('.js-bar-randomize').on('click', function (e) {
        jQuery(e.currentTarget).parents('.block').find('.progress-bar').each(function (index, element) {
          var el = jQuery(element);
          var random = Math.floor(Math.random() * 91 + 10); // Update progress width

          el.css('width', random + '%'); // Update progress label

          jQuery('.progress-bar-label', el).html(random + '%');
        });
      });
    }
    /*
     * SweetAlert2, for more examples you can check out https://github.com/limonte/sweetalert2
     *
     */

  }, {
    key: "sweetAlert2",
    value: function sweetAlert2() {
      // Set default properties
      var toast = Swal.mixin({
        buttonsStyling: false,
        customClass: {
          confirmButton: 'btn btn-alt-success m-5',
          cancelButton: 'btn btn-alt-danger m-5',
          input: 'form-control'
        }
      }); // Init a simple alert on button click

      jQuery('.js-swal-alert').on('click', function (e) {
        toast.fire('Hi, this is a simple alert!');
      }); // Init an success alert on button click

      jQuery('.js-swal-success').on('click', function (e) {
        toast.fire('Success', 'Everything updated perfectly!', 'success');
      }); // Init an info alert on button click

      jQuery('.js-swal-info').on('click', function (e) {
        toast.fire('Info', 'Just an informational modal!', 'info');
      }); // Init an warning alert on button click

      jQuery('.js-swal-warning').on('click', function (e) {
        toast.fire('Warning', 'Something needs your attention!', 'warning');
      }); // Init an error alert on button click

      jQuery('.js-swal-error').on('click', function (e) {
        toast.fire('Oops...', 'Something went wrong!', 'error');
      }); // Init an question alert on button click

      jQuery('.js-swal-question').on('click', function (e) {
        toast.fire('Question', 'Are you sure?', 'question');
      }); // Init an example confirm alert on button click

      jQuery('.js-swal-confirm').on('click', function (e) {
        toast.fire({
          title: 'Are you sure?',
          text: 'You will not be able to recover this imaginary file!',
          type: 'warning',
          showCancelButton: true,
          customClass: {
            confirmButton: 'btn btn-alt-danger m-1',
            cancelButton: 'btn btn-alt-secondary m-1'
          },
          confirmButtonText: 'Yes, delete it!',
          html: false,
          preConfirm: function preConfirm(e) {
            return new Promise(function (resolve) {
              setTimeout(function () {
                resolve();
              }, 50);
            });
          }
        }).then(function (result) {
          if (result.value) {
            toast.fire('Deleted!', 'Your imaginary file has been deleted.', 'success'); // result.dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
          } else if (result.dismiss === 'cancel') {
            toast.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
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
      this.barsRandomize();
      this.sweetAlert2();
    }
  }]);

  return BeUIActivity;
}(); // Initialize when page loads


jQuery(function () {
  BeUIActivity.init();
});

/***/ }),

/***/ 19:
/*!*************************************************************!*\
  !*** multi ./resources/assets/_es6/pages/be_ui_activity.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\wamp64\www\projetos_laravel\elyder\code-base\resources\assets\_es6\pages\be_ui_activity.js */"./resources/assets/_es6/pages/be_ui_activity.js");


/***/ })

/******/ });