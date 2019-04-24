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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/assets/_es6/pages/be_blocks_widgets_stats.js":
/*!****************************************************************!*\
  !*** ./resources/assets/_es6/pages/be_blocks_widgets_stats.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 *  Document   : be_blocks_widgets_stats.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Widgets Stats Page
 */
var BeBlocksWidgetsStats =
/*#__PURE__*/
function () {
  function BeBlocksWidgetsStats() {
    _classCallCheck(this, BeBlocksWidgetsStats);
  }

  _createClass(BeBlocksWidgetsStats, null, [{
    key: "initWidgetsChartJS",

    /*
     * Chart.js Charts, for more examples you can check out http://www.chartjs.org/docs
     *
     */
    value: function initWidgetsChartJS() {
      // Set Global Chart.js configuration
      Chart.defaults.global.defaultFontColor = '#555555';
      Chart.defaults.scale.gridLines.color = "transparent";
      Chart.defaults.scale.gridLines.zeroLineColor = "transparent";
      Chart.defaults.scale.display = false;
      Chart.defaults.scale.ticks.beginAtZero = true;
      Chart.defaults.scale.ticks.suggestedMax = 11;
      Chart.defaults.global.elements.line.borderWidth = 2;
      Chart.defaults.global.elements.point.radius = 5;
      Chart.defaults.global.elements.point.hoverRadius = 7;
      Chart.defaults.global.tooltips.cornerRadius = 3;
      Chart.defaults.global.legend.display = false; // Chart Containers

      var chartWidgetLinesCon = jQuery('.js-chartjs-widget-lines');
      var chartWidgetLinesCon2 = jQuery('.js-chartjs-widget-lines2');
      var chartWidgetLinesCon3 = jQuery('.js-chartjs-widget-lines3');
      var chartWidgetLinesCon4 = jQuery('.js-chartjs-widget-lines4'); // Charts letiables

      var chartWidgetLines, chartWidgetLines2, chartWidgetLines3, chartWidgetLines4; // Lines Charts Data

      var chartWidgetLinesData = {
        labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
        datasets: [{
          label: 'This Week',
          fill: true,
          backgroundColor: 'rgba(66,165,245,.25)',
          borderColor: 'rgba(66,165,245,1)',
          pointBackgroundColor: 'rgba(66,165,245,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(66,165,245,1)',
          data: [5, 7, 4, 5, 6, 8, 4]
        }]
      };
      var chartWidgetLinesData2 = {
        labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
        datasets: [{
          label: 'This Week',
          fill: true,
          backgroundColor: 'rgba(255,202,40,.25)',
          borderColor: 'rgba(255,202,40,1)',
          pointBackgroundColor: 'rgba(255,202,40,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,202,40,1)',
          data: [6, 9, 5, 6, 9, 7, 10]
        }]
      };
      var chartWidgetLinesData3 = {
        labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
        datasets: [{
          label: 'This Week',
          fill: true,
          backgroundColor: 'rgba(1,229,148,.25)',
          borderColor: 'rgba(1,229,148,1)',
          pointBackgroundColor: 'rgba(1,229,148,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(1,229,148,1)',
          data: [6, 9, 5, 6, 9, 7, 10]
        }]
      };
      var chartWidgetLinesData4 = {
        labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
        datasets: [{
          label: 'This Week',
          fill: true,
          backgroundColor: 'rgba(237,83,80,.25)',
          borderColor: 'rgba(237,83,80,1)',
          pointBackgroundColor: 'rgba(237,83,80,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(237,83,80,1)',
          data: [5, 7, 4, 5, 6, 8, 4]
        }]
      }; // Init Charts

      if (chartWidgetLinesCon.length) {
        chartWidgetLines = new Chart(chartWidgetLinesCon, {
          type: 'line',
          data: chartWidgetLinesData
        });
      }

      if (chartWidgetLinesCon2.length) {
        chartWidgetLines2 = new Chart(chartWidgetLinesCon2, {
          type: 'line',
          data: chartWidgetLinesData2
        });
      }

      if (chartWidgetLinesCon3.length) {
        chartWidgetLines3 = new Chart(chartWidgetLinesCon3, {
          type: 'line',
          data: chartWidgetLinesData3
        });
      }

      if (chartWidgetLinesCon4.length) {
        chartWidgetLines4 = new Chart(chartWidgetLinesCon4, {
          type: 'line',
          data: chartWidgetLinesData4
        });
      }
    }
    /*
     * Init functionality
     *
     */

  }, {
    key: "init",
    value: function init() {
      this.initWidgetsChartJS();
    }
  }]);

  return BeBlocksWidgetsStats;
}(); // Initialize when page loads


jQuery(function () {
  BeBlocksWidgetsStats.init();
});

/***/ }),

/***/ "./resources/assets/sass/codebase/themes/corporate.scss":
/*!**************************************************************!*\
  !*** ./resources/assets/sass/codebase/themes/corporate.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/sass/codebase/themes/earth.scss":
/*!**********************************************************!*\
  !*** ./resources/assets/sass/codebase/themes/earth.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/sass/codebase/themes/elegance.scss":
/*!*************************************************************!*\
  !*** ./resources/assets/sass/codebase/themes/elegance.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/sass/codebase/themes/flat.scss":
/*!*********************************************************!*\
  !*** ./resources/assets/sass/codebase/themes/flat.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/sass/codebase/themes/pulse.scss":
/*!**********************************************************!*\
  !*** ./resources/assets/sass/codebase/themes/pulse.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/sass/main.scss":
/*!*****************************************!*\
  !*** ./resources/assets/sass/main.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./resources/assets/_es6/pages/be_blocks_widgets_stats.js ./resources/assets/sass/codebase/themes/corporate.scss ./resources/assets/sass/codebase/themes/earth.scss ./resources/assets/sass/codebase/themes/elegance.scss ./resources/assets/sass/codebase/themes/flat.scss ./resources/assets/sass/codebase/themes/pulse.scss ./resources/assets/sass/main.scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! c:\wamp64\www\projetos_laravel\elyder\code-base\resources\assets\_es6\pages\be_blocks_widgets_stats.js */"./resources/assets/_es6/pages/be_blocks_widgets_stats.js");
__webpack_require__(/*! c:\wamp64\www\projetos_laravel\elyder\code-base\resources\assets\sass\codebase\themes\corporate.scss */"./resources/assets/sass/codebase/themes/corporate.scss");
__webpack_require__(/*! c:\wamp64\www\projetos_laravel\elyder\code-base\resources\assets\sass\codebase\themes\earth.scss */"./resources/assets/sass/codebase/themes/earth.scss");
__webpack_require__(/*! c:\wamp64\www\projetos_laravel\elyder\code-base\resources\assets\sass\codebase\themes\elegance.scss */"./resources/assets/sass/codebase/themes/elegance.scss");
__webpack_require__(/*! c:\wamp64\www\projetos_laravel\elyder\code-base\resources\assets\sass\codebase\themes\flat.scss */"./resources/assets/sass/codebase/themes/flat.scss");
__webpack_require__(/*! c:\wamp64\www\projetos_laravel\elyder\code-base\resources\assets\sass\codebase\themes\pulse.scss */"./resources/assets/sass/codebase/themes/pulse.scss");
module.exports = __webpack_require__(/*! c:\wamp64\www\projetos_laravel\elyder\code-base\resources\assets\sass\main.scss */"./resources/assets/sass/main.scss");


/***/ })

/******/ });