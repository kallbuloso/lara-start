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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/assets/_es6/pages/be_comp_calendar.js":
/*!*********************************************************!*\
  !*** ./resources/assets/_es6/pages/be_comp_calendar.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 *  Document   : be_comp_calendar.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Calendar Page
 */
// Full Calendar, for more examples you can check out http://fullcalendar.io/
var BeCompCalendar =
/*#__PURE__*/
function () {
  function BeCompCalendar() {
    _classCallCheck(this, BeCompCalendar);
  }

  _createClass(BeCompCalendar, null, [{
    key: "addEvent",

    /*
     * Add new event in the event list
     *
     */
    value: function addEvent() {
      var _this = this;

      var eventInput = jQuery('.js-add-event');
      var eventInputVal = ''; // When the add event form is submitted

      jQuery('.js-form-add-event').on('submit', function (e) {
        eventInputVal = eventInput.prop('value'); // Get input value
        // Check if the user entered something

        if (eventInputVal) {
          // Add it to the events list
          jQuery('.js-events').prepend('<li>' + jQuery('<div />').text(eventInputVal).html() + '</li>'); // Clear input field

          eventInput.prop('value', ''); // Re-Init Events

          _this.initEvents();
        }

        return false;
      });
    }
    /*
     * Init drag and drop event functionality
     *
     */

  }, {
    key: "initEvents",
    value: function initEvents() {
      jQuery('.js-events').find('li').each(function (index, element) {
        var event = jQuery(element); // create an Event Object

        var eventObject = {
          title: jQuery.trim(event.text()),
          color: event.css('background-color')
        }; // store the Event Object in the DOM element so we can get to it later

        event.data('eventObject', eventObject); // make the event draggable using jQuery UI

        event.draggable({
          zIndex: 999,
          revert: true,
          revertDuration: 0
        });
      });
    }
    /*
     * Init calendar demo functionality
     *
     */

  }, {
    key: "initCalendar",
    value: function initCalendar() {
      var date = new Date();
      var d = date.getDate();
      var m = date.getMonth();
      var y = date.getFullYear();
      jQuery('.js-calendar').fullCalendar({
        firstDay: 1,
        editable: true,
        droppable: true,
        header: {
          left: 'title',
          right: 'prev,next today month,agendaWeek,agendaDay,listWeek'
        },
        drop: function drop(date, jsEvent, ui, resourceId) {
          // this function is called when something is dropped
          var event = jQuery(ui.helper); // retrieve the dropped element's stored Event Object

          var originalEventObject = event.data('eventObject'); // we need to copy it, so that multiple events don't have a reference to the same object

          var copiedEventObject = jQuery.extend({}, originalEventObject); // assign it the date that was reported

          copiedEventObject.start = date; // render the event on the calendar
          // the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)

          jQuery('.js-calendar').fullCalendar('renderEvent', copiedEventObject, true); // remove the element from the "Draggable Events" list

          event.remove();
        },
        events: [{
          title: 'Gaming Day',
          start: new Date(y, m, 1),
          allDay: true,
          color: '#fcf7e6'
        }, {
          title: 'Skype Meeting',
          start: new Date(y, m, 3)
        }, {
          title: 'Project X',
          start: new Date(y, m, 9),
          end: new Date(y, m, 12),
          allDay: true,
          color: '#fae9e8'
        }, {
          title: 'Work',
          start: new Date(y, m, 17),
          end: new Date(y, m, 19),
          allDay: true,
          color: '#fae9e8'
        }, {
          id: 999,
          title: 'Hiking (repeated)',
          start: new Date(y, m, d - 1, 15, 0)
        }, {
          id: 999,
          title: 'Hiking (repeated)',
          start: new Date(y, m, d + 3, 15, 0)
        }, {
          title: 'Landing Template',
          start: new Date(y, m, d - 3),
          end: new Date(y, m, d - 3),
          allDay: true,
          color: '#fcf7e6'
        }, {
          title: 'Lunch',
          start: new Date(y, m, d + 7, 15, 0),
          color: '#ebf5df'
        }, {
          title: 'Coding',
          start: new Date(y, m, d, 8, 0),
          end: new Date(y, m, d, 14, 0),
          color: '#fcf7e6'
        }, {
          title: 'Trip',
          start: new Date(y, m, 25),
          end: new Date(y, m, 27),
          allDay: true,
          color: '#fcf7e6'
        }, {
          title: 'Reading',
          start: new Date(y, m, d + 8, 20, 0),
          end: new Date(y, m, d + 8, 22, 0)
        }, {
          title: 'Follow me on Twitter',
          start: new Date(y, m, 22),
          allDay: true,
          url: 'http://twitter.com/pixelcave'
        }]
      });
    }
    /*
     * Init functionality
     *
     */

  }, {
    key: "init",
    value: function init() {
      this.addEvent();
      this.initEvents();
      this.initCalendar();
    }
  }]);

  return BeCompCalendar;
}(); // Initialize when page loads


jQuery(function () {
  BeCompCalendar.init();
});

/***/ }),

/***/ 1:
/*!***************************************************************!*\
  !*** multi ./resources/assets/_es6/pages/be_comp_calendar.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\wamp64\www\projetos_laravel\elyder\code-base\resources\assets\_es6\pages\be_comp_calendar.js */"./resources/assets/_es6/pages/be_comp_calendar.js");


/***/ })

/******/ });