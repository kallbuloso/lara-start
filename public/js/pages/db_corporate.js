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
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/assets/_es6/pages/db_corporate.js":
/*!*****************************************************!*\
  !*** ./resources/assets/_es6/pages/db_corporate.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 *  Document   : db_corporate.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Corporate Dashboard Page
 */
// Chart.js Charts, for more examples you can check out http://www.chartjs.org/docs
var DbCorporate =
/*#__PURE__*/
function () {
  function DbCorporate() {
    _classCallCheck(this, DbCorporate);
  }

  _createClass(DbCorporate, null, [{
    key: "initCorporateChartJS",

    /*
     * Init Charts
     *
     */
    value: function initCorporateChartJS() {
      // Set Global Chart.js configuration
      Chart.defaults.global.defaultFontColor = '#7c7c7c';
      Chart.defaults.scale.gridLines.color = "transparent";
      Chart.defaults.scale.gridLines.zeroLineColor = "transparent";
      Chart.defaults.scale.display = false;
      Chart.defaults.scale.ticks.beginAtZero = true;
      Chart.defaults.global.elements.line.borderWidth = 2;
      Chart.defaults.global.elements.point.radius = 5;
      Chart.defaults.global.elements.point.hoverRadius = 7;
      Chart.defaults.global.tooltips.cornerRadius = 3;
      Chart.defaults.global.legend.display = false; // Chart Containers

      var chartCorporateLinesCon = jQuery('.js-chartjs-corporate-lines');
      var chartCorporateLinesCon2 = jQuery('.js-chartjs-corporate-lines2'); // Chart Variables

      var chartCorporateLines, chartCorporateLines2; // Lines Charts Data

      var chartCorporateLinesData = {
        labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
        datasets: [{
          label: 'This Week',
          fill: true,
          backgroundColor: 'rgba(38,198,218,.1)',
          borderColor: 'rgba(38,198,218,.5)',
          pointBackgroundColor: 'rgba(38,198,218,.5)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(38,198,218,.5)',
          data: [39, 27, 23, 34, 42, 46, 31]
        }]
      };
      var chartCorporateLinesOptions = {
        scales: {
          yAxes: [{
            ticks: {
              suggestedMax: 50
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
      var chartCorporateLinesData2 = {
        labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
        datasets: [{
          label: 'This Week',
          fill: true,
          backgroundColor: 'rgba(156,204,101,.1)',
          borderColor: 'rgba(156,204,101,.5)',
          pointBackgroundColor: 'rgba(156,204,101,.5)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(156,204,101,.5)',
          data: [325, 290, 209, 290, 410, 384, 425]
        }]
      };
      var chartCorporateLinesOptions2 = {
        scales: {
          yAxes: [{
            ticks: {
              suggestedMax: 480
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

      if (chartCorporateLinesCon.length) {
        chartCorporateLines = new Chart(chartCorporateLinesCon, {
          type: 'line',
          data: chartCorporateLinesData,
          options: chartCorporateLinesOptions
        });
      }

      if (chartCorporateLinesCon2.length) {
        chartCorporateLines2 = new Chart(chartCorporateLinesCon2, {
          type: 'line',
          data: chartCorporateLinesData2,
          options: chartCorporateLinesOptions2
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
      this.initCorporateChartJS();
    }
  }]);

  return DbCorporate;
}(); // Initialize when page loads


jQuery(function () {
  DbCorporate.init();
});

/***/ }),

/***/ 23:
/*!***********************************************************!*\
  !*** multi ./resources/assets/_es6/pages/db_corporate.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\wamp64\www\projetos_laravel\elyder\code-base\resources\assets\_es6\pages\db_corporate.js */"./resources/assets/_es6/pages/db_corporate.js");


/***/ })

/******/ });