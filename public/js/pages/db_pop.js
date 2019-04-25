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
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/assets/_es6/pages/db_pop.js":
/*!***********************************************!*\
  !*** ./resources/assets/_es6/pages/db_pop.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 *  Document   : db_pop.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Pop Dashboard Page
 */
// Chart.js Charts, for more examples you can check out http://www.chartjs.org/docs
var DbPop =
/*#__PURE__*/
function () {
  function DbPop() {
    _classCallCheck(this, DbPop);
  }

  _createClass(DbPop, null, [{
    key: "initPopChartJS",

    /*
     * Init Charts
     *
     */
    value: function initPopChartJS() {
      // Set Global Chart.js configuration
      Chart.defaults.global.defaultFontColor = '#7c7c7c';
      Chart.defaults.scale.gridLines.color = "#f1f1f1";
      Chart.defaults.scale.gridLines.zeroLineColor = "#f1f1f1";
      Chart.defaults.scale.display = true;
      Chart.defaults.scale.ticks.beginAtZero = true;
      Chart.defaults.global.elements.line.borderWidth = 2;
      Chart.defaults.global.elements.point.radius = 6;
      Chart.defaults.global.elements.point.hoverRadius = 12;
      Chart.defaults.global.tooltips.cornerRadius = 2;
      Chart.defaults.global.legend.display = false; // Chart Containers

      var chartPopLinesCon = jQuery('.js-chartjs-pop-lines');
      var chartPopLinesCon2 = jQuery('.js-chartjs-pop-lines2'); // Chart Variables

      var chartPopLines, chartPopLines2; // Lines Charts Data

      var chartPopLinesData = {
        labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
        datasets: [{
          label: 'This Week',
          fill: true,
          backgroundColor: 'rgba(56,56,56,.4)',
          borderColor: 'rgba(56,56,56,.9)',
          pointBackgroundColor: 'rgba(56,56,56,.9)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(56,56,56,.9)',
          data: [75, 88, 34, 49, 52, 89, 96]
        }]
      };
      var chartPopLinesOptions = {
        scales: {
          yAxes: [{
            ticks: {
              suggestedMax: 100
            }
          }]
        },
        tooltips: {
          callbacks: {
            label: function label(tooltipItems, data) {
              return ' ' + tooltipItems.yLabel + ' Sales';
            }
          }
        }
      };
      var chartPopLinesData2 = {
        labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
        datasets: [{
          label: 'This Week',
          fill: true,
          backgroundColor: 'rgba(230,76,60,.4)',
          borderColor: 'rgba(230,76,60,.9)',
          pointBackgroundColor: 'rgba(230,76,60,.9)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(230,76,60,.9)',
          data: [750, 880, 398, 420, 590, 630, 930]
        }]
      };
      var chartPopLinesOptions2 = {
        scales: {
          yAxes: [{
            ticks: {
              suggestedMax: 1000
            }
          }]
        },
        tooltips: {
          callbacks: {
            label: function label(tooltipItems, data) {
              return ' $ ' + tooltipItems.yLabel;
            }
          }
        }
      }; // Init Charts

      if (chartPopLinesCon.length) {
        chartPopLines = new Chart(chartPopLinesCon, {
          type: 'line',
          data: chartPopLinesData,
          options: chartPopLinesOptions
        });
      }

      if (chartPopLinesCon2.length) {
        chartPopLines2 = new Chart(chartPopLinesCon2, {
          type: 'line',
          data: chartPopLinesData2,
          options: chartPopLinesOptions2
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
      this.initPopChartJS();
    }
  }]);

  return DbPop;
}(); // Initialize when page loads


jQuery(function () {
  DbPop.init();
});

/***/ }),

/***/ 26:
/*!*****************************************************!*\
  !*** multi ./resources/assets/_es6/pages/db_pop.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\wamp64\www\projetos_laravel\elyder\code-base\resources\assets\_es6\pages\db_pop.js */"./resources/assets/_es6/pages/db_pop.js");


/***/ })

/******/ });