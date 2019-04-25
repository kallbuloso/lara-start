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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/assets/_es6/pages/be_pages_ecom_dashboard.js":
/*!****************************************************************!*\
  !*** ./resources/assets/_es6/pages/be_pages_ecom_dashboard.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 *  Document   : be_pages_ecom_dashboard.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in e-Commerce Dashboard Page
 */
var BePagesEcomDashboard =
/*#__PURE__*/
function () {
  function BePagesEcomDashboard() {
    _classCallCheck(this, BePagesEcomDashboard);
  }

  _createClass(BePagesEcomDashboard, null, [{
    key: "initEcomChartJS",

    /*
     * Chart.js Charts, for more examples you can check out http://www.chartjs.org/docs
     *
     */
    value: function initEcomChartJS() {
      // Set Global Chart.js configuration
      Chart.defaults.global.defaultFontColor = '#555555';
      Chart.defaults.scale.gridLines.color = "transparent";
      Chart.defaults.scale.gridLines.zeroLineColor = "transparent";
      Chart.defaults.scale.display = false;
      Chart.defaults.scale.ticks.beginAtZero = true;
      Chart.defaults.scale.ticks.suggestedMax = 4300;
      Chart.defaults.global.elements.line.borderWidth = 2;
      Chart.defaults.global.elements.point.radius = 5;
      Chart.defaults.global.elements.point.hoverRadius = 7;
      Chart.defaults.global.tooltips.cornerRadius = 3;
      Chart.defaults.global.legend.display = false; // Chart Containers

      var chartEcomEarningsCon = jQuery('.js-chartjs-ecom-dashboard-earnings');
      var chartEcomOrdersCon = jQuery('.js-chartjs-ecom-dashboard-orders'); // Charts Variables

      var chartEcomOrders, chartEcomEarnings; // Charts Data

      var chartEcomEarningsData = {
        labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
        datasets: [{
          label: 'Earnings',
          fill: true,
          backgroundColor: 'rgba(188,38,211,.25)',
          borderColor: 'rgba(188,38,211,1)',
          pointBackgroundColor: 'rgba(188,38,211,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(188,38,211,1)',
          data: [1780, 2440, 3252, 2109, 1892, 3890, 1820]
        }]
      };
      var chartEcomOrdersData = {
        labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
        datasets: [{
          label: 'Orders',
          fill: true,
          backgroundColor: 'rgba(112,178,156,.25)',
          borderColor: 'rgba(112,178,156,1)',
          pointBackgroundColor: 'rgba(112,178,156,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(112,178,156,1)',
          data: [20, 27, 40, 19, 23, 38, 16]
        }]
      }; // Init Charts

      if (chartEcomEarningsCon.length) {
        chartEcomEarnings = new Chart(chartEcomEarningsCon, {
          type: 'line',
          data: chartEcomEarningsData,
          options: {
            tooltips: {
              callbacks: {
                label: function label(tooltipItems, data) {
                  return data.datasets[tooltipItems.datasetIndex].label + ': $' + tooltipItems.yLabel;
                }
              }
            }
          }
        });
      }

      if (chartEcomOrdersCon.length) {
        Chart.defaults.scale.ticks.suggestedMax = 60;
        chartEcomOrders = new Chart(chartEcomOrdersCon, {
          type: 'line',
          data: chartEcomOrdersData
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
      this.initEcomChartJS();
    }
  }]);

  return BePagesEcomDashboard;
}(); // Initialize when page loads


jQuery(function () {
  BePagesEcomDashboard.init();
});

/***/ }),

/***/ 14:
/*!**********************************************************************!*\
  !*** multi ./resources/assets/_es6/pages/be_pages_ecom_dashboard.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\wamp64\www\projetos_laravel\elyder\code-base\resources\assets\_es6\pages\be_pages_ecom_dashboard.js */"./resources/assets/_es6/pages/be_pages_ecom_dashboard.js");


/***/ })

/******/ });