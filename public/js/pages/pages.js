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

/***/ "./resources/assets/_es6/pages/be_comp_charts.js":
/*!*******************************************************!*\
  !*** ./resources/assets/_es6/pages/be_comp_charts.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 *  Document   : be_comp_charts.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Charts Page
 */
var BeCompCharts =
/*#__PURE__*/
function () {
  function BeCompCharts() {
    _classCallCheck(this, BeCompCharts);
  }

  _createClass(BeCompCharts, null, [{
    key: "initRandomEasyPieChart",

    /*
     * Randomize Easy Pie Chart values
     *
     */
    value: function initRandomEasyPieChart() {
      jQuery('.js-pie-randomize').on('click', function (e) {
        jQuery(e.currentTarget).parents('.block').find('.pie-chart').each(function (index, element) {
          jQuery(element).data('easyPieChart').update(Math.floor(Math.random() * 100 + 1));
        });
      });
    }
    /*
     * jQuery Sparkline Charts, for more examples you can check out http://omnipotent.net/jquery.sparkline/#s-docs
     *
     */

  }, {
    key: "initChartsSparkline",
    value: function initChartsSparkline() {
      // Chart Containers
      var slcLine1 = jQuery('.js-slc-line1');
      var slcLine2 = jQuery('.js-slc-line2');
      var slcLine3 = jQuery('.js-slc-line3');
      var slcBar1 = jQuery('.js-slc-bar1');
      var slcBar2 = jQuery('.js-slc-bar2');
      var slcBar3 = jQuery('.js-slc-bar3');
      var slcPie1 = jQuery('.js-slc-pie1');
      var slcPie2 = jQuery('.js-slc-pie2');
      var slcPie3 = jQuery('.js-slc-pie3');
      var slcTristate1 = jQuery('.js-slc-tristate1');
      var slcTristate2 = jQuery('.js-slc-tristate2');
      var slcTristate3 = jQuery('.js-slc-tristate3'); // Line Charts

      var lineOptions = {
        type: 'line',
        width: '120px',
        height: '80px',
        tooltipOffsetX: -25,
        tooltipOffsetY: 20,
        lineColor: '#ffca28',
        fillColor: '#ffca28',
        spotColor: '#555',
        minSpotColor: '#555',
        maxSpotColor: '#555',
        highlightSpotColor: '#555',
        highlightLineColor: '#555',
        spotRadius: 2,
        tooltipPrefix: '',
        tooltipSuffix: ' Tickets',
        tooltipFormat: '{{prefix}}{{y}}{{suffix}}'
      };

      if (slcLine1.length) {
        slcLine1.sparkline('html', lineOptions);
      }

      lineOptions['lineColor'] = '#9ccc65';
      lineOptions['fillColor'] = '#9ccc65';
      lineOptions['tooltipPrefix'] = '$ ';
      lineOptions['tooltipSuffix'] = '';

      if (slcLine2.length) {
        slcLine2.sparkline('html', lineOptions);
      }

      lineOptions['lineColor'] = '#42a5f5';
      lineOptions['fillColor'] = '#42a5f5';
      lineOptions['tooltipPrefix'] = '';
      lineOptions['tooltipSuffix'] = ' Sales';

      if (slcLine3.length) {
        slcLine3.sparkline('html', lineOptions);
      } // Bar Charts


      var barOptions = {
        type: 'bar',
        barWidth: 8,
        barSpacing: 6,
        height: '80px',
        barColor: '#ffca28',
        tooltipPrefix: '',
        tooltipSuffix: ' Tickets',
        tooltipFormat: '{{prefix}}{{value}}{{suffix}}'
      };

      if (slcBar1.length) {
        slcBar1.sparkline('html', barOptions);
      }

      barOptions['barColor'] = '#9ccc65';
      barOptions['tooltipPrefix'] = '$ ';
      barOptions['tooltipSuffix'] = '';

      if (slcBar2.length) {
        slcBar2.sparkline('html', barOptions);
      }

      barOptions['barColor'] = '#42a5f5';
      barOptions['tooltipPrefix'] = '';
      barOptions['tooltipSuffix'] = ' Sales';

      if (slcBar3.length) {
        slcBar3.sparkline('html', barOptions);
      } // Pie Charts


      var pieCharts = {
        type: 'pie',
        width: '80px',
        height: '80px',
        sliceColors: ['#ffca28', '#9ccc65', '#42a5f5', '#ef5350'],
        highlightLighten: 1.1,
        tooltipPrefix: '',
        tooltipSuffix: ' Tickets',
        tooltipFormat: '{{prefix}}{{value}}{{suffix}}'
      };

      if (slcPie1.length) {
        slcPie1.sparkline('html', pieCharts);
      }

      pieCharts['tooltipPrefix'] = '$ ';
      pieCharts['tooltipSuffix'] = '';

      if (slcPie2.length) {
        slcPie2.sparkline('html', pieCharts);
      }

      pieCharts['tooltipPrefix'] = '';
      pieCharts['tooltipSuffix'] = ' Sales';

      if (slcPie3.length) {
        slcPie3.sparkline('html', pieCharts);
      } // Tristate Charts


      var tristateOptions = {
        type: 'tristate',
        barWidth: 8,
        barSpacing: 6,
        height: '110px',
        posBarColor: '#9ccc65',
        negBarColor: '#ef5350'
      };

      if (slcTristate1.length) {
        slcTristate1.sparkline('html', tristateOptions);
      }

      if (slcTristate2.length) {
        slcTristate2.sparkline('html', tristateOptions);
      }

      if (slcTristate3.length) {
        slcTristate3.sparkline('html', tristateOptions);
      }
    }
    /*
     * Chart.js Charts, for more examples you can check out http://www.chartjs.org/docs
     *
     */

  }, {
    key: "initChartsChartJS",
    value: function initChartsChartJS() {
      // Set Global Chart.js configuration
      Chart.defaults.global.defaultFontColor = '#555555';
      Chart.defaults.scale.gridLines.color = "rgba(0,0,0,.04)";
      Chart.defaults.scale.gridLines.zeroLineColor = "rgba(0,0,0,.1)";
      Chart.defaults.scale.ticks.beginAtZero = true;
      Chart.defaults.global.elements.line.borderWidth = 2;
      Chart.defaults.global.elements.point.radius = 5;
      Chart.defaults.global.elements.point.hoverRadius = 7;
      Chart.defaults.global.tooltips.cornerRadius = 3;
      Chart.defaults.global.legend.labels.boxWidth = 12; // Get Chart Containers

      var chartLinesCon = jQuery('.js-chartjs-lines');
      var chartBarsCon = jQuery('.js-chartjs-bars');
      var chartRadarCon = jQuery('.js-chartjs-radar');
      var chartPolarCon = jQuery('.js-chartjs-polar');
      var chartPieCon = jQuery('.js-chartjs-pie');
      var chartDonutCon = jQuery('.js-chartjs-donut'); // Lines/Bar/Radar Chart Data

      var chartLinesBarsRadarData = {
        labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
        datasets: [{
          label: 'This Week',
          fill: true,
          backgroundColor: 'rgba(66,165,245,.75)',
          borderColor: 'rgba(66,165,245,1)',
          pointBackgroundColor: 'rgba(66,165,245,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(66,165,245,1)',
          data: [25, 38, 62, 45, 90, 115, 130]
        }, {
          label: 'Last Week',
          fill: true,
          backgroundColor: 'rgba(66,165,245,.25)',
          borderColor: 'rgba(66,165,245,1)',
          pointBackgroundColor: 'rgba(66,165,245,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(66,165,245,1)',
          data: [112, 90, 142, 130, 170, 188, 196]
        }]
      }; // Polar/Pie/Donut Data

      var chartPolarPieDonutData = {
        labels: ['Earnings', 'Sales', 'Tickets'],
        datasets: [{
          data: [50, 25, 25],
          backgroundColor: ['rgba(156,204,101,1)', 'rgba(255,202,40,1)', 'rgba(239,83,80,1)'],
          hoverBackgroundColor: ['rgba(156,204,101,.5)', 'rgba(255,202,40,.5)', 'rgba(239,83,80,.5)']
        }]
      }; // Init Charts

      var chartLines, chartBars, chartRadar, chartPolar, chartPie, chartDonut;

      if (chartLinesCon.length) {
        chartLines = new Chart(chartLinesCon, {
          type: 'line',
          data: chartLinesBarsRadarData
        });
      }

      if (chartBarsCon.length) {
        chartBars = new Chart(chartBarsCon, {
          type: 'bar',
          data: chartLinesBarsRadarData
        });
      }

      if (chartRadarCon.length) {
        chartRadar = new Chart(chartRadarCon, {
          type: 'radar',
          data: chartLinesBarsRadarData
        });
      }

      if (chartPolarCon.length) {
        chartPolar = new Chart(chartPolarCon, {
          type: 'polarArea',
          data: chartPolarPieDonutData
        });
      }

      if (chartPieCon.length) {
        chartPie = new Chart(chartPieCon, {
          type: 'pie',
          data: chartPolarPieDonutData
        });
      }

      if (chartDonutCon.length) {
        chartDonut = new Chart(chartDonutCon, {
          type: 'doughnut',
          data: chartPolarPieDonutData
        });
      }
    }
    /*
     * Flot charts, for more examples you can check out http://www.flotcharts.org/flot/examples/
     *
     */

  }, {
    key: "initChartsFlot",
    value: function initChartsFlot() {
      // Get the elements where we will attach the charts
      var flotLive = jQuery('.js-flot-live');
      var flotLines = jQuery('.js-flot-lines');
      var flotStacked = jQuery('.js-flot-stacked');
      var flotPie = jQuery('.js-flot-pie');
      var flotBars = jQuery('.js-flot-bars'); // Demo Data

      var dataEarnings = [[1, 1500], [2, 1700], [3, 1400], [4, 1900], [5, 2500], [6, 2300], [7, 2700], [8, 3200], [9, 3500], [10, 3260], [11, 4100], [12, 4600]];
      var dataSales = [[1, 500], [2, 600], [3, 400], [4, 750], [5, 1150], [6, 950], [7, 1400], [8, 1700], [9, 1800], [10, 1300], [11, 1750], [12, 2900]];
      var dataSalesBefore = [[1, 500], [4, 600], [7, 1000], [10, 600], [13, 800], [16, 1200], [19, 1500], [22, 1600], [25, 2500], [28, 2700], [31, 3500], [34, 4500]];
      var dataSalesAfter = [[2, 900], [5, 1200], [8, 2000], [11, 1200], [14, 1600], [17, 2400], [20, 3000], [23, 3200], [26, 5000], [29, 5400], [32, 7000], [35, 9000]];
      var dataMonths = [[1, 'Jan'], [2, 'Feb'], [3, 'Mar'], [4, 'Apr'], [5, 'May'], [6, 'Jun'], [7, 'Jul'], [8, 'Aug'], [9, 'Sep'], [10, 'Oct'], [11, 'Nov'], [12, 'Dec']];
      var dataMonthsBars = [[2, 'Jan'], [5, 'Feb'], [8, 'Mar'], [11, 'Apr'], [14, 'May'], [17, 'Jun'], [20, 'Jul'], [23, 'Aug'], [26, 'Sep'], [29, 'Oct'], [32, 'Nov'], [35, 'Dec']]; // Live Chart

      var dataLive = [],
          y = 0,
          chartLive;

      function getRandomData() {
        // Random data generator
        if (dataLive.length > 0) dataLive = dataLive.slice(1);

        while (dataLive.length < 300) {
          var prev = dataLive.length > 0 ? dataLive[dataLive.length - 1] : 50;

          var _y = prev + Math.random() * 10 - 5;

          if (_y < 0) _y = 0;
          if (_y > 100) _y = 100;
          dataLive.push(_y);
        }

        var res = [];

        for (var i = 0; i < dataLive.length; ++i) {
          res.push([i, dataLive[i]]);
        }

        jQuery('.js-flot-live-info').html(y.toFixed(0) + '%'); // Show live chart info

        return res;
      }

      function updateChartLive() {
        // Update live chart
        chartLive.setData([getRandomData()]);
        chartLive.draw();
        setTimeout(updateChartLive, 100);
      }

      if (flotLive.length) {
        chartLive = jQuery.plot(flotLive, // Init live chart
        [{
          data: getRandomData()
        }], {
          series: {
            shadowSize: 0
          },
          lines: {
            show: true,
            lineWidth: 1,
            fill: true,
            fillColor: {
              colors: [{
                opacity: 1
              }, {
                opacity: .5
              }]
            }
          },
          colors: ['#42a5f5'],
          grid: {
            borderWidth: 0,
            color: '#cccccc'
          },
          yaxis: {
            show: true,
            min: 0,
            max: 100
          },
          xaxis: {
            show: false
          }
        });
        updateChartLive(); // Start getting new data
      } // Init lines chart


      if (flotLines.length) {
        jQuery.plot(flotLines, [{
          label: 'Earnings',
          data: dataEarnings,
          lines: {
            show: true,
            fill: true,
            fillColor: {
              colors: [{
                opacity: .7
              }, {
                opacity: .7
              }]
            }
          },
          points: {
            show: true,
            radius: 5
          }
        }, {
          label: 'Sales',
          data: dataSales,
          lines: {
            show: true,
            fill: true,
            fillColor: {
              colors: [{
                opacity: .5
              }, {
                opacity: .5
              }]
            }
          },
          points: {
            show: true,
            radius: 5
          }
        }], {
          colors: ['#ffca28', '#555555'],
          legend: {
            show: true,
            position: 'nw',
            backgroundOpacity: 0
          },
          grid: {
            borderWidth: 0,
            hoverable: true,
            clickable: true
          },
          yaxis: {
            tickColor: '#ffffff',
            ticks: 3
          },
          xaxis: {
            ticks: dataMonths,
            tickColor: '#f5f5f5'
          }
        }); // Creating and attaching a tooltip to the classic chart

        var previousPoint = null,
            ttlabel = null;
        flotLines.bind('plothover', function (event, pos, item) {
          if (item) {
            if (previousPoint !== item.dataIndex) {
              previousPoint = item.dataIndex;
              jQuery('.js-flot-tooltip').remove();
              var x = item.datapoint[0],
                  _y2 = item.datapoint[1];

              if (item.seriesIndex === 0) {
                ttlabel = '$ <strong>' + _y2 + '</strong>';
              } else if (item.seriesIndex === 1) {
                ttlabel = '<strong>' + _y2 + '</strong> sales';
              } else {
                ttlabel = '<strong>' + _y2 + '</strong> tickets';
              }

              jQuery('<div class="js-flot-tooltip flot-tooltip">' + ttlabel + '</div>').css({
                top: item.pageY - 45,
                left: item.pageX + 5
              }).appendTo("body").show();
            }
          } else {
            jQuery('.js-flot-tooltip').remove();
            previousPoint = null;
          }
        });
      } // Stacked Chart


      if (flotStacked.length) {
        jQuery.plot(flotStacked, [{
          label: 'Sales',
          data: dataSales
        }, {
          label: 'Earnings',
          data: dataEarnings
        }], {
          colors: ['#555555', '#26c6da'],
          series: {
            stack: true,
            lines: {
              show: true,
              fill: true
            }
          },
          lines: {
            show: true,
            lineWidth: 0,
            fill: true,
            fillColor: {
              colors: [{
                opacity: 1
              }, {
                opacity: 1
              }]
            }
          },
          legend: {
            show: true,
            position: 'nw',
            sorted: true,
            backgroundOpacity: 0
          },
          grid: {
            borderWidth: 0
          },
          yaxis: {
            tickColor: '#ffffff',
            ticks: 3
          },
          xaxis: {
            ticks: dataMonths,
            tickColor: '#f5f5f5'
          }
        });
      } // Bars Chart


      if (flotBars.length) {
        jQuery.plot(flotBars, [{
          label: 'Sales Before Release',
          data: dataSalesBefore,
          bars: {
            show: true,
            lineWidth: 0,
            fillColor: {
              colors: [{
                opacity: .75
              }, {
                opacity: .75
              }]
            }
          }
        }, {
          label: 'Sales After Release',
          data: dataSalesAfter,
          bars: {
            show: true,
            lineWidth: 0,
            fillColor: {
              colors: [{
                opacity: .75
              }, {
                opacity: .75
              }]
            }
          }
        }], {
          colors: ['#ef5350', '#9ccc65'],
          legend: {
            show: true,
            position: 'nw',
            backgroundOpacity: 0
          },
          grid: {
            borderWidth: 0
          },
          yaxis: {
            ticks: 3,
            tickColor: '#f5f5f5'
          },
          xaxis: {
            ticks: dataMonthsBars,
            tickColor: '#f5f5f5'
          }
        });
      } // Pie Chart


      if (flotPie.length) {
        jQuery.plot(flotPie, [{
          label: 'Sales',
          data: 15
        }, {
          label: 'Tickets',
          data: 12
        }, {
          label: 'Earnings',
          data: 73
        }], {
          colors: ['#26c6da', '#ffca28', '#9ccc65'],
          legend: {
            show: false
          },
          series: {
            pie: {
              show: true,
              radius: 1,
              label: {
                show: true,
                radius: 2 / 3,
                formatter: function formatter(label, pieSeries) {
                  return '<div class="flot-pie-label">' + label + '<br>' + Math.round(pieSeries.percent) + '%</div>';
                },
                background: {
                  opacity: .75,
                  color: '#000000'
                }
              }
            }
          }
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
      this.initRandomEasyPieChart();
      this.initChartsSparkline();
      this.initChartsChartJS();
      this.initChartsFlot();
    }
  }]);

  return BeCompCharts;
}(); // Initialize when page loads


jQuery(function () {
  BeCompCharts.init();
});

/***/ }),

/***/ "./resources/assets/_es6/pages/be_comp_chat.js":
/*!*****************************************************!*\
  !*** ./resources/assets/_es6/pages/be_comp_chat.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 *  Document   : be_comp_chat.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Chat Page
 */
// Helper variables
var lWindow, lHeader, lFooter, cContainer, cHeight, cHead, cTalk, cPeople, cform, cTimeout; // Message Classes

var classesMsgBase = 'rounded font-w600 p-10 mb-10 animated fadeIn',
    classesMsgSelf = 'ml-50 bg-primary-lighter text-primary-darker',
    classesMsgOther = 'mr-50 bg-body-light',
    classesMsgHeader = 'font-size-sm font-italic text-muted text-center mt-20 mb-10';

var BeCompChat =
/*#__PURE__*/
function () {
  function BeCompChat() {
    _classCallCheck(this, BeCompChat);
  }

  _createClass(BeCompChat, null, [{
    key: "initChat",

    /*
     * Init chat
     *
     */
    value: function initChat() {
      var self = this; // Set variables

      lWindow = jQuery(window);
      lHeader = jQuery('#page-header');
      lFooter = jQuery('#page-footer');
      cContainer = jQuery('.js-chat-container');
      cHeight = cContainer.data('chat-height');
      cHead = jQuery('.js-chat-head');
      cTalk = jQuery('.js-chat-talk');
      cPeople = jQuery('.js-chat-people');
      cform = jQuery('.js-chat-form'); // Chat height mode ('auto' for full height, number for specific height in pixels)

      switch (cHeight) {
        case 'auto':
          // Init chat windows' height to full available (also on browser resize or orientation change)
          jQuery(window).on('resize.cb.chat orientationchange.cb.chat', function (e) {
            clearTimeout(cTimeout);
            cTimeout = setTimeout(function (e) {
              self.initChatWindows();
            }, 150);
          }).triggerHandler('resize.cb.chat');
          break;

        default:
          // Init chat windows' height with a specific height
          self.initChatWindows(cHeight);
      } // Enable scroll lock to chat talk and people window


      cTalk.scrollLock('enable');

      if (cPeople.length) {
        cPeople.scrollLock('enable');
      } // Init form submission


      jQuery('form', cform).on('submit', function (e) {
        // Stop form submission
        e.preventDefault(); // Get chat input

        var chatInput = jQuery('.js-chat-input', jQuery(e.currentTarget)); // Add message

        self.chatAddMessage(chatInput.data('target-chat-id'), chatInput.val(), 'self', chatInput);
      });
    }
    /*
     * Init chat windows' height
     *
     */

  }, {
    key: "initChatWindows",
    value: function initChatWindows(customHeight) {
      var cHeightFinal; // If height is specified

      if (customHeight) {
        cHeightFinal = parseInt(customHeight);
      } else {
        // Calculate height
        cHeightFinal = lWindow.height() - (lHeader.length ? lHeader.outerHeight() : 0) - (lFooter.length ? lFooter.outerHeight() : 0) - (parseInt(cContainer.css('padding-top')) + parseInt(cContainer.css('padding-bottom'))) - cHead.outerHeight();
      } // Add a minimum height


      if (cHeightFinal < 200) {
        cHeightFinal = 200;
      } // Set height to chat windows (+ people window if exists)


      cTalk.css('height', cHeightFinal - cform.outerHeight());

      if (cPeople.length) {
        cPeople.css('height', cHeightFinal);
      }
    }
    /*
     * Add a header message to a chat window
     *
     */

  }, {
    key: "chatAddHeader",
    value: function chatAddHeader(chatId, chatMsg) {
      // Get chat window
      var chatWindow = jQuery('.js-chat-talk[data-chat-id="' + chatId + '"]'); // If time header and chat window exists

      if (chatMsg && chatWindow.length) {
        chatWindow.append('<div class="' + classesMsgHeader + '">' + jQuery('<div />').text(chatMsg).html() + '</div>'); // Scroll the message list to the bottom

        chatWindow.animate({
          scrollTop: chatWindow[0].scrollHeight
        }, 150);
      }
    }
    /*
     * Add a message to a chat window
     *
     */

  }, {
    key: "chatAddMessage",
    value: function chatAddMessage(chatId, chatMsg, chatMsgLevel, chatInput) {
      // Get chat window
      var chatWindow = jQuery('.js-chat-talk[data-chat-id="' + chatId + '"]'); // If message and chat window exists

      if (chatMsg && chatWindow.length) {
        // Post it to its related window (if message level is 'self', make it stand out)
        chatWindow.append('<div class="' + classesMsgBase + ' ' + (chatMsgLevel === 'self' ? classesMsgSelf : classesMsgOther) + '">' + jQuery('<div />').text(chatMsg).html() + '</div>'); // Scroll the message list to the bottom

        chatWindow.animate({
          scrollTop: chatWindow[0].scrollHeight
        }, 150); // If input is set, reset it

        if (chatInput) {
          chatInput.val('');
        }
      }
    }
    /*
     * Init functionality
     *
     */

  }, {
    key: "init",
    value: function init() {
      this.initChat();
    }
    /*
     * Add time header
     *
     */

  }, {
    key: "addHeader",
    value: function addHeader(chatId, chatMsg) {
      this.chatAddHeader(chatId, chatMsg);
    }
    /*
     * Add message
     *
     */

  }, {
    key: "addMessage",
    value: function addMessage(chatId, chatMsg, chatMsgLevel) {
      this.chatAddMessage(chatId, chatMsg, chatMsgLevel, false);
    }
  }]);

  return BeCompChat;
}(); // Initialize when page loads


jQuery(function () {
  BeCompChat.init();
  window.BeCompChat = BeCompChat;
});

/***/ }),

/***/ "./resources/assets/_es6/pages/be_comp_image_cropper.js":
/*!**************************************************************!*\
  !*** ./resources/assets/_es6/pages/be_comp_image_cropper.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 *  Document   : be_comp_image_cropper.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Image Cropper Page
 */
// Image Cropper, for more examples you can check out https://fengyuanchen.github.io/cropperjs/
var BeCompImageCropper =
/*#__PURE__*/
function () {
  function BeCompImageCropper() {
    _classCallCheck(this, BeCompImageCropper);
  }

  _createClass(BeCompImageCropper, null, [{
    key: "initImageCropper",

    /*
     * Init image cropper demo functionality
     *
     */
    value: function initImageCropper() {
      // Get Image Container
      var image = document.getElementById('js-img-cropper'); // Set Options

      Cropper.setDefaults({
        aspectRatio: 4 / 3,
        preview: '.js-img-cropper-preview'
      }); // Init Image Cropper

      var cropper = new Cropper(image, {
        crop: function crop(e) {// e.detail contains all data required to crop the image server side
          // You will have to send it to your custom server side script and crop the image there
          // Since this event is fired each time you set the crop section, you could also use getData()
          // method on demand. Please check out https://fengyuanchen.github.io/cropperjs/ for more info
          // console.log(e.detail);
        }
      }); // Mini Cropper API

      jQuery('[data-toggle="cropper"]').on('click', function (e) {
        var btn = jQuery(e.currentTarget);
        var method = btn.data('method') || false;
        var option = btn.data('option') || false; // Method selection with object literals

        var cropperAPI = {
          zoom: function zoom() {
            cropper.zoom(option);
          },
          setDragMode: function setDragMode() {
            cropper.setDragMode(option);
          },
          rotate: function rotate() {
            cropper.rotate(option);
          },
          scaleX: function scaleX() {
            cropper.scaleX(option);
            btn.data('option', -option);
          },
          scaleY: function scaleY() {
            cropper.scaleY(option);
            btn.data('option', -option);
          },
          setAspectRatio: function setAspectRatio() {
            cropper.setAspectRatio(option);
          },
          crop: function crop() {
            cropper.crop();
          },
          clear: function clear() {
            cropper.clear();
          }
        }; // If method exists, execute it

        if (cropperAPI[method]) {
          cropperAPI[method]();
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
      this.initImageCropper();
    }
  }]);

  return BeCompImageCropper;
}(); // Initialize when page loads


jQuery(function () {
  BeCompImageCropper.init();
});

/***/ }),

/***/ "./resources/assets/_es6/pages/be_comp_maps_google.js":
/*!************************************************************!*\
  !*** ./resources/assets/_es6/pages/be_comp_maps_google.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 *  Document   : be_comp_maps_google.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Google Maps Page
 */
// Gmaps.js, for more examples you can check out https://hpneo.github.io/gmaps/
var BeCompMapsGoogle =
/*#__PURE__*/
function () {
  function BeCompMapsGoogle() {
    _classCallCheck(this, BeCompMapsGoogle);
  }

  _createClass(BeCompMapsGoogle, null, [{
    key: "initMapSearch",

    /*
     * Init Search Map functionality
     *
     */
    value: function initMapSearch() {
      if (jQuery('#js-map-search').length) {
        // Init Map
        var mapSearch = new GMaps({
          div: '#js-map-search',
          lat: 20,
          lng: 0,
          zoom: 2,
          scrollwheel: false
        }); // When the search form is submitted

        jQuery('.js-form-search').on('submit', function (e) {
          var inputGroup = jQuery('.js-search-address').parent('.input-group');
          GMaps.geocode({
            address: jQuery('.js-search-address').val().trim(),
            callback: function callback(results, status) {
              if (status === 'OK' && results) {
                var latlng = results[0].geometry.location;
                mapSearch.removeMarkers();
                mapSearch.addMarker({
                  lat: latlng.lat(),
                  lng: latlng.lng()
                });
                mapSearch.fitBounds(results[0].geometry.viewport);
                inputGroup.siblings('.form-text').remove();
              } else {
                inputGroup.after('<div class="font-text text-danger text-center animated fadeInDown">Address not found!</div>');
              }
            }
          });
          return false;
        });
      }
    }
    /*
     * Init Satellite Map
     *
     */

  }, {
    key: "initMapSat",
    value: function initMapSat() {
      if (jQuery('#js-map-sat').length) {
        new GMaps({
          div: '#js-map-sat',
          lat: 20,
          lng: 0,
          zoom: 2,
          scrollwheel: false
        }).setMapTypeId(google.maps.MapTypeId.SATELLITE);
      }
    }
    /*
     * Init Terrain Map
     *
     */

  }, {
    key: "initMapTer",
    value: function initMapTer() {
      if (jQuery('#js-map-ter').length) {
        new GMaps({
          div: '#js-map-ter',
          lat: 20,
          lng: 0,
          zoom: 2,
          scrollwheel: false
        }).setMapTypeId(google.maps.MapTypeId.TERRAIN);
      }
    }
    /*
     * Init Overlay Map
     *
     */

  }, {
    key: "initMapOverlay",
    value: function initMapOverlay() {
      if (jQuery('#js-map-overlay').length) {
        new GMaps({
          div: '#js-map-overlay',
          lat: 35,
          lng: 139,
          zoom: 6,
          scrollwheel: false
        }).drawOverlay({
          lat: 35,
          lng: 139,
          content: '<div class="alert alert-info text-xs-center"><h4 class="alert-heading mt-5 mb-15">Message</h4><p class="font-size-h5 mb-0">You can overlay messages on your maps!</p></div>'
        });
      }
    }
    /*
     * Init Markers Map
     *
     */

  }, {
    key: "initMapMarkers",
    value: function initMapMarkers() {
      if (jQuery('#js-map-markers').length) {
        new GMaps({
          div: '#js-map-markers',
          lat: 35.652832,
          lng: 139.839478,
          zoom: 11,
          scrollwheel: false
        }).addMarkers([{
          lat: 35.65,
          lng: 139.83,
          title: 'Map Marker #1',
          animation: google.maps.Animation.DROP,
          infoWindow: {
            content: 'Map Marker #1'
          }
        }, {
          lat: 35.71,
          lng: 139.89,
          title: 'Map Marker #2',
          animation: google.maps.Animation.DROP,
          infoWindow: {
            content: 'Map Marker #2'
          }
        }, {
          lat: 35.68,
          lng: 139.80,
          title: 'Map Marker #3',
          animation: google.maps.Animation.DROP,
          infoWindow: {
            content: 'Map Marker #3'
          }
        }, {
          lat: 35.63,
          lng: 139.88,
          title: 'Map Marker #4',
          animation: google.maps.Animation.DROP,
          infoWindow: {
            content: 'Map Marker #4'
          }
        }, {
          lat: 35.70,
          lng: 139.85,
          title: 'Map Marker #5',
          animation: google.maps.Animation.DROP,
          infoWindow: {
            content: 'Map Marker #5'
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
      this.initMapSearch();
      this.initMapSat();
      this.initMapTer();
      this.initMapOverlay();
      this.initMapMarkers();
    }
  }]);

  return BeCompMapsGoogle;
}(); // Initialize when page loads


jQuery(function () {
  BeCompMapsGoogle.init();
});

/***/ }),

/***/ "./resources/assets/_es6/pages/be_comp_maps_vector.js":
/*!************************************************************!*\
  !*** ./resources/assets/_es6/pages/be_comp_maps_vector.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 *  Document   : be_comp_maps_vector.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Vector Maps Page
 */
// Set default options for all maps
var mapOptions = {
  map: '',
  backgroundColor: '#ffffff',
  regionStyle: {
    initial: {
      fill: '#42a5f5',
      'fill-opacity': 1,
      stroke: 'none',
      'stroke-width': 0,
      'stroke-opacity': 1
    },
    hover: {
      'fill-opacity': .8,
      cursor: 'pointer'
    }
  }
}; // jVectorMap, for more examples you can check out http://jvectormap.com/documentation/

var BeCompMapsVector =
/*#__PURE__*/
function () {
  function BeCompMapsVector() {
    _classCallCheck(this, BeCompMapsVector);
  }

  _createClass(BeCompMapsVector, null, [{
    key: "initMapWorld",

    /*
     * Init World Map
     *
     */
    value: function initMapWorld() {
      // Set Active Map
      mapOptions['map'] = 'world_mill_en'; // Init Map

      jQuery('.js-vector-map-world').vectorMap(mapOptions);
    }
    /*
     * Init Europe Map
     *
     */

  }, {
    key: "initMapEurope",
    value: function initMapEurope() {
      // Set Active Map
      mapOptions['map'] = 'europe_mill_en'; // Init Map

      jQuery('.js-vector-map-europe').vectorMap(mapOptions);
    }
    /*
     * Init USA Map
     *
     */

  }, {
    key: "initMapUsa",
    value: function initMapUsa() {
      // Set Active Map
      mapOptions['map'] = 'us_aea_en'; // Init Map

      jQuery('.js-vector-map-usa').vectorMap(mapOptions);
    }
    /*
     * Init India Map
     *
     */

  }, {
    key: "initMapIndia",
    value: function initMapIndia() {
      // Set Active Map
      mapOptions['map'] = 'in_mill_en'; // Init Map

      jQuery('.js-vector-map-india').vectorMap(mapOptions);
    }
    /*
     * Init China Map
     *
     */

  }, {
    key: "initMapChina",
    value: function initMapChina() {
      // Set Active Map
      mapOptions['map'] = 'cn_mill_en'; // Init Map

      jQuery('.js-vector-map-china').vectorMap(mapOptions);
    }
    /*
     * Init Australia Map
     *
     */

  }, {
    key: "initMapAustralia",
    value: function initMapAustralia() {
      // Set Active Map
      mapOptions['map'] = 'au_mill_en'; // Init Map

      jQuery('.js-vector-map-australia').vectorMap(mapOptions);
    }
    /*
     * Init South Africa Map
     *
     */

  }, {
    key: "initMapSouthAfrica",
    value: function initMapSouthAfrica() {
      // Set Active Map
      mapOptions['map'] = 'za_mill_en'; // Init Map

      jQuery('.js-vector-map-south-africa').vectorMap(mapOptions);
    }
    /*
     * Init France Map
     *
     */

  }, {
    key: "initMapFrance",
    value: function initMapFrance() {
      // Set Active Map
      mapOptions['map'] = 'fr_mill_en'; // Init Map

      jQuery('.js-vector-map-france').vectorMap(mapOptions);
    }
    /*
     * Init Germany Map
     *
     */

  }, {
    key: "initMapGermany",
    value: function initMapGermany() {
      // Set Active Map
      mapOptions['map'] = 'de_mill_en'; // Init Map

      jQuery('.js-vector-map-germany').vectorMap(mapOptions);
    }
    /*
     * Init functionality
     *
     */

  }, {
    key: "init",
    value: function init() {
      this.initMapWorld();
      this.initMapEurope();
      this.initMapUsa();
      this.initMapIndia();
      this.initMapChina();
      this.initMapAustralia();
      this.initMapSouthAfrica();
      this.initMapFrance();
      this.initMapGermany();
    }
  }]);

  return BeCompMapsVector;
}(); // Initialize when page loads


jQuery(function () {
  BeCompMapsVector.init();
});

/***/ }),

/***/ "./resources/assets/_es6/pages/be_comp_nestable.js":
/*!*********************************************************!*\
  !*** ./resources/assets/_es6/pages/be_comp_nestable.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 *  Document   : be_comp_nestable.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Nestable Page
 */
// Nestable2, for more examples you can check out https://github.com/RamonSmit/Nestable2
var pageCompNestable =
/*#__PURE__*/
function () {
  function pageCompNestable() {
    _classCallCheck(this, pageCompNestable);
  }

  _createClass(pageCompNestable, null, [{
    key: "nestable2",

    /*
     * Nestable2 demo functionality
     *
     */
    value: function nestable2() {
      // Init Connected Lists
      jQuery('.js-nestable-connected-simple').add('.js-nestable-connected-icons').add('.js-nestable-connected-treeview').nestable({
        group: 0
      }); // Init Simple List

      jQuery('.js-nestable-simple').nestable({
        group: 1
      }); // Init Icons List

      jQuery('.js-nestable-icons').nestable({
        group: 2
      }); // Init Tree View List

      jQuery('.js-nestable-treeview').nestable({
        group: 3
      });
    }
    /*
     * Init functionality
     *
     */

  }, {
    key: "init",
    value: function init() {
      this.nestable2();
    }
  }]);

  return pageCompNestable;
}(); // Initialize when page loads


jQuery(function () {
  pageCompNestable.init();
});

/***/ }),

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

/***/ "./resources/assets/_es6/pages/be_forms_plugins.js":
/*!*********************************************************!*\
  !*** ./resources/assets/_es6/pages/be_forms_plugins.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 *  Document   : be_forms_plugins.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Form Page
 */
var BeFormPlugins =
/*#__PURE__*/
function () {
  function BeFormPlugins() {
    _classCallCheck(this, BeFormPlugins);
  }

  _createClass(BeFormPlugins, null, [{
    key: "initAutoComplete",

    /*
     * Init jQuery AutoComplete example, for more examples you can check out https://github.com/Pixabay/jQuery-autoComplete
     *
     */
    value: function initAutoComplete() {
      // Init autocomplete functionality
      jQuery('.js-autocomplete').autoComplete({
        minChars: 1,
        source: function source(term, suggest) {
          term = term.toLowerCase();
          var countriesList = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua &amp; Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia &amp; Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Cape Verde', 'Cayman Islands', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote D Ivoire', 'Croatia', 'Cruise Ship', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyz Republic', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania', 'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Pierre &amp; Miquelon', 'Samoa', 'San Marino', 'Satellite', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'St Kitts &amp; Nevis', 'St Lucia', 'St Vincent', 'St. Lucia', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor L\'Este', 'Togo', 'Tonga', 'Trinidad &amp; Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks &amp; Caicos', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe'];
          var suggestions = [];

          for (i = 0; i < countriesList.length; i++) {
            if (~countriesList[i].toLowerCase().indexOf(term)) suggestions.push(countriesList[i]);
          }

          suggest(suggestions);
        }
      });
    }
    /*
     * Init Password Strength, for more examples you can check out https://github.com/ablanco/jquery.pwstrength.bootstrap
     *
     */

  }, {
    key: "initPwStrength",
    value: function initPwStrength() {
      // Bootstrap Form
      jQuery('.js-pw-strength1').pwstrength({
        ui: {
          container: "#js-pw-strength1-container",
          viewports: {
            progress: ".js-pw-strength1-progress",
            verdict: ".js-pw-strength1-feedback"
          }
        }
      }); // Material Form

      jQuery('.js-pw-strength2').pwstrength({
        ui: {
          container: "#js-pw-strength2-container",
          viewports: {
            progress: ".js-pw-strength2-progress",
            verdict: ".js-pw-strength2-feedback"
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
      this.initAutoComplete();
      this.initPwStrength();
    }
  }]);

  return BeFormPlugins;
}(); // Initialize when page loads


jQuery(function () {
  BeFormPlugins.init();
});

/***/ }),

/***/ "./resources/assets/_es6/pages/be_forms_validation.js":
/*!************************************************************!*\
  !*** ./resources/assets/_es6/pages/be_forms_validation.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 *  Document   : be_forms_validation.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Form Validation Page
 */
// jQuery Validation, for more examples you can check out https://github.com/jzaefferer/jquery-validation
var BeFormValidation =
/*#__PURE__*/
function () {
  function BeFormValidation() {
    _classCallCheck(this, BeFormValidation);
  }

  _createClass(BeFormValidation, null, [{
    key: "initValidationBootstrap",

    /*
     * Init Bootstrap Forms Validation
     *
     */
    value: function initValidationBootstrap() {
      jQuery('.js-validation-bootstrap').validate({
        ignore: [],
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
          'val-username': {
            required: true,
            minlength: 3
          },
          'val-email': {
            required: true,
            email: true
          },
          'val-password': {
            required: true,
            minlength: 5
          },
          'val-confirm-password': {
            required: true,
            equalTo: '#val-password'
          },
          'val-select2': {
            required: true
          },
          'val-select2-multiple': {
            required: true,
            minlength: 2
          },
          'val-suggestions': {
            required: true,
            minlength: 5
          },
          'val-skill': {
            required: true
          },
          'val-currency': {
            required: true,
            currency: ['$', true]
          },
          'val-website': {
            required: true,
            url: true
          },
          'val-phoneus': {
            required: true,
            phoneUS: true
          },
          'val-digits': {
            required: true,
            digits: true
          },
          'val-number': {
            required: true,
            number: true
          },
          'val-range': {
            required: true,
            range: [1, 5]
          },
          'val-terms': {
            required: true
          }
        },
        messages: {
          'val-username': {
            required: 'Please enter a username',
            minlength: 'Your username must consist of at least 3 characters'
          },
          'val-email': 'Please enter a valid email address',
          'val-password': {
            required: 'Please provide a password',
            minlength: 'Your password must be at least 5 characters long'
          },
          'val-confirm-password': {
            required: 'Please provide a password',
            minlength: 'Your password must be at least 5 characters long',
            equalTo: 'Please enter the same password as above'
          },
          'val-select2': 'Please select a value!',
          'val-select2-multiple': 'Please select at least 2 values!',
          'val-suggestions': 'What can we do to become better?',
          'val-skill': 'Please select a skill!',
          'val-currency': 'Please enter a price!',
          'val-website': 'Please enter your website!',
          'val-phoneus': 'Please enter a US phone!',
          'val-digits': 'Please enter only digits!',
          'val-number': 'Please enter a number!',
          'val-range': 'Please enter a number between 1 and 5!',
          'val-terms': 'You must agree to the service terms!'
        }
      });
    }
    /*
     * Init Material Forms Validation
     *
     */

  }, {
    key: "initValidationMaterial",
    value: function initValidationMaterial() {
      jQuery('.js-validation-material').validate({
        ignore: [],
        errorClass: 'invalid-feedback animated fadeInDown',
        errorElement: 'div',
        errorPlacement: function errorPlacement(error, e) {
          jQuery(e).parents('.form-group').append(error);
        },
        highlight: function highlight(e) {
          jQuery(e).closest('.form-group').removeClass('is-invalid').addClass('is-invalid');
        },
        success: function success(e) {
          jQuery(e).closest('.form-group').removeClass('is-invalid');
          jQuery(e).remove();
        },
        rules: {
          'val-username2': {
            required: true,
            minlength: 3
          },
          'val-email2': {
            required: true,
            email: true
          },
          'val-password2': {
            required: true,
            minlength: 5
          },
          'val-confirm-password2': {
            required: true,
            equalTo: '#val-password2'
          },
          'val-select22': {
            required: true
          },
          'val-select2-multiple2': {
            required: true,
            minlength: 2
          },
          'val-suggestions2': {
            required: true,
            minlength: 5
          },
          'val-skill2': {
            required: true
          },
          'val-currency2': {
            required: true,
            currency: ['$', true]
          },
          'val-website2': {
            required: true,
            url: true
          },
          'val-phoneus2': {
            required: true,
            phoneUS: true
          },
          'val-digits2': {
            required: true,
            digits: true
          },
          'val-number2': {
            required: true,
            number: true
          },
          'val-range2': {
            required: true,
            range: [1, 5]
          },
          'val-terms2': {
            required: true
          }
        },
        messages: {
          'val-username2': {
            required: 'Please enter a username',
            minlength: 'Your username must consist of at least 3 characters'
          },
          'val-email2': 'Please enter a valid email address',
          'val-password2': {
            required: 'Please provide a password',
            minlength: 'Your password must be at least 5 characters long'
          },
          'val-confirm-password2': {
            required: 'Please provide a password',
            minlength: 'Your password must be at least 5 characters long',
            equalTo: 'Please enter the same password as above'
          },
          'val-select22': 'Please select a value!',
          'val-select2-multiple2': 'Please select at least 2 values!',
          'val-suggestions2': 'What can we do to become better?',
          'val-skill2': 'Please select a skill!',
          'val-currency2': 'Please enter a price!',
          'val-website2': 'Please enter your website!',
          'val-phoneus2': 'Please enter a US phone!',
          'val-digits2': 'Please enter only digits!',
          'val-number2': 'Please enter a number!',
          'val-range2': 'Please enter a number between 1 and 5!',
          'val-terms2': 'You must agree to the service terms!'
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
      this.initValidationBootstrap();
      this.initValidationMaterial(); // Init Validation on Select2 change

      jQuery('.js-select2').on('change', function (e) {
        jQuery(e.currentTarget).valid();
      });
    }
  }]);

  return BeFormValidation;
}(); // Initialize when page loads


jQuery(function () {
  BeFormValidation.init();
});

/***/ }),

/***/ "./resources/assets/_es6/pages/be_forms_wizard.js":
/*!********************************************************!*\
  !*** ./resources/assets/_es6/pages/be_forms_wizard.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 *  Document   : be_forms_wizard.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Form Wizard Page
 */
var BeFormWizard =
/*#__PURE__*/
function () {
  function BeFormWizard() {
    _classCallCheck(this, BeFormWizard);
  }

  _createClass(BeFormWizard, null, [{
    key: "initWizardDefaults",

    /*
     * Init Wizard defaults
     *
     */
    value: function initWizardDefaults() {
      jQuery.fn.bootstrapWizard.defaults.tabClass = 'nav nav-tabs';
      jQuery.fn.bootstrapWizard.defaults.nextSelector = '[data-wizard="next"]';
      jQuery.fn.bootstrapWizard.defaults.previousSelector = '[data-wizard="prev"]';
      jQuery.fn.bootstrapWizard.defaults.firstSelector = '[data-wizard="first"]';
      jQuery.fn.bootstrapWizard.defaults.lastSelector = '[data-wizard="lsat"]';
      jQuery.fn.bootstrapWizard.defaults.finishSelector = '[data-wizard="finish"]';
      jQuery.fn.bootstrapWizard.defaults.backSelector = '[data-wizard="back"]';
    }
    /*
     * Init simple wizard, for more examples you can check out https://github.com/VinceG/twitter-bootstrap-wizard
     *
     */

  }, {
    key: "initWizardSimple",
    value: function initWizardSimple() {
      jQuery('.js-wizard-simple').bootstrapWizard({
        onTabShow: function onTabShow(tab, navigation, index) {
          var percent = (index + 1) / navigation.find('li').length * 100; // Get progress bar

          var progress = navigation.parents('.block').find('[data-wizard="progress"] > .progress-bar'); // Update progress bar if there is one

          if (progress.length) {
            progress.css({
              width: percent + 1 + '%'
            });
          }
        }
      });
    }
    /*
     * Init wizards with validation, for more examples you can check out
     * https://github.com/VinceG/twitter-bootstrap-wizard and https://github.com/jzaefferer/jquery-validation
     *
     */

  }, {
    key: "initWizardValidation",
    value: function initWizardValidation() {
      // Get forms
      var formClassic = jQuery('.js-wizard-validation-classic-form');
      var formMaterial = jQuery('.js-wizard-validation-material-form'); // Prevent forms from submitting on enter key press

      formClassic.add(formMaterial).on('keyup keypress', function (e) {
        var code = e.keyCode || e.which;

        if (code === 13) {
          e.preventDefault();
          return false;
        }
      }); // Init form validation on classic wizard form

      var validatorClassic = formClassic.validate({
        errorClass: 'invalid-feedback animated fadeInDown',
        errorElement: 'div',
        errorPlacement: function errorPlacement(error, e) {
          jQuery(e).parents('.form-group').append(error);
        },
        highlight: function highlight(e) {
          jQuery(e).closest('.form-group').removeClass('is-invalid').addClass('is-invalid');
        },
        success: function success(e) {
          jQuery(e).closest('.form-group').removeClass('is-invalid');
          jQuery(e).remove();
        },
        rules: {
          'wizard-validation-classic-firstname': {
            required: true,
            minlength: 2
          },
          'wizard-validation-classic-lastname': {
            required: true,
            minlength: 2
          },
          'wizard-validation-classic-email': {
            required: true,
            email: true
          },
          'wizard-validation-classic-bio': {
            required: true,
            minlength: 5
          },
          'wizard-validation-classic-location': {
            required: true
          },
          'wizard-validation-classic-skills': {
            required: true
          },
          'wizard-validation-classic-terms': {
            required: true
          }
        },
        messages: {
          'wizard-validation-classic-firstname': {
            required: 'Please enter a firstname',
            minlength: 'Your firtname must consist of at least 2 characters'
          },
          'wizard-validation-classic-lastname': {
            required: 'Please enter a lastname',
            minlength: 'Your lastname must consist of at least 2 characters'
          },
          'wizard-validation-classic-email': 'Please enter a valid email address',
          'wizard-validation-classic-bio': 'Let us know a few thing about yourself',
          'wizard-validation-classic-skills': 'Please select a skill!',
          'wizard-validation-classic-terms': 'You must agree to the service terms!'
        }
      }); // Init form validation on material wizard form

      var validatorMaterial = formMaterial.validate({
        errorClass: 'invalid-feedback animated fadeInDown',
        errorElement: 'div',
        errorPlacement: function errorPlacement(error, e) {
          jQuery(e).parents('.form-group').append(error);
        },
        highlight: function highlight(e) {
          jQuery(e).closest('.form-group').removeClass('is-invalid').addClass('is-invalid');
        },
        success: function success(e) {
          jQuery(e).closest('.form-group').removeClass('is-invalid');
          jQuery(e).remove();
        },
        rules: {
          'wizard-validation-material-firstname': {
            required: true,
            minlength: 2
          },
          'wizard-validation-material-lastname': {
            required: true,
            minlength: 2
          },
          'wizard-validation-material-email': {
            required: true,
            email: true
          },
          'wizard-validation-material-bio': {
            required: true,
            minlength: 5
          },
          'wizard-validation-material-location': {
            required: true
          },
          'wizard-validation-material-skills': {
            required: true
          },
          'wizard-validation-material-terms': {
            required: true
          }
        },
        messages: {
          'wizard-validation-material-firstname': {
            required: 'Please enter a firstname',
            minlength: 'Your firtname must consist of at least 2 characters'
          },
          'wizard-validation-material-lastname': {
            required: 'Please enter a lastname',
            minlength: 'Your lastname must consist of at least 2 characters'
          },
          'wizard-validation-material-email': 'Please enter a valid email address',
          'wizard-validation-material-bio': 'Let us know a few thing about yourself',
          'wizard-validation-material-skills': 'Please select a skill!',
          'wizard-validation-material-terms': 'You must agree to the service terms!'
        }
      }); // Init classic wizard with validation

      jQuery('.js-wizard-validation-classic').bootstrapWizard({
        tabClass: '',
        onTabShow: function onTabShow(tab, navigation, index) {
          var percent = (index + 1) / navigation.find('li').length * 100; // Get progress bar

          var progress = navigation.parents('.block').find('[data-wizard="progress"] > .progress-bar'); // Update progress bar if there is one

          if (progress.length) {
            progress.css({
              width: percent + 1 + '%'
            });
          }
        },
        onNext: function onNext(tab, navigation, index) {
          if (!formClassic.valid()) {
            validatorClassic.focusInvalid();
            return false;
          }
        },
        onTabClick: function onTabClick(tab, navigation, index) {
          jQuery('a', navigation).blur();
          return false;
        }
      }); // Init wizard with validation

      jQuery('.js-wizard-validation-material').bootstrapWizard({
        tabClass: '',
        onTabShow: function onTabShow(tab, navigation, index) {
          var percent = (index + 1) / navigation.find('li').length * 100; // Get progress bar

          var progress = navigation.parents('.block').find('[data-wizard="progress"] > .progress-bar'); // Update progress bar if there is one

          if (progress.length) {
            progress.css({
              width: percent + 1 + '%'
            });
          }
        },
        onNext: function onNext(tab, navigation, index) {
          if (!formMaterial.valid()) {
            validatorMaterial.focusInvalid();
            return false;
          }
        },
        onTabClick: function onTabClick(tab, navigation, index) {
          jQuery('a', navigation).blur();
          return false;
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
      this.initWizardDefaults();
      this.initWizardSimple();
      this.initWizardValidation();
    }
  }]);

  return BeFormWizard;
}(); // Initialize when page loads


jQuery(function () {
  BeFormWizard.init();
});

/***/ }),

/***/ "./resources/assets/_es6/pages/be_pages_crypto_dashboard.js":
/*!******************************************************************!*\
  !*** ./resources/assets/_es6/pages/be_pages_crypto_dashboard.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 *  Document   : be_pages_crypto_dashboard.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Crypto Dashboard Page
 */
var BePagesCryptoDashboard =
/*#__PURE__*/
function () {
  function BePagesCryptoDashboard() {
    _classCallCheck(this, BePagesCryptoDashboard);
  }

  _createClass(BePagesCryptoDashboard, null, [{
    key: "initChartsCrypto",

    /*
     * Crypto Charts, for more examples you can check out http://www.chartjs.org/docs
     *
     */
    value: function initChartsCrypto() {
      // Set Global Chart.js configuration
      Chart.defaults.global.defaultFontColor = '#555555';
      Chart.defaults.scale.gridLines.color = "transparent";
      Chart.defaults.global.elements.point.radius = 5;
      Chart.defaults.global.elements.point.hoverRadius = 7;
      Chart.defaults.global.tooltips.cornerRadius = 3;
      Chart.defaults.global.legend.labels.boxWidth = 15;
      Chart.defaults.global.legend.display = false; // Get Chart Containers

      var chartBitcoinCon = jQuery('.js-chartjs-bitcoin');
      var chartEthereumCon = jQuery('.js-chartjs-ethereum');
      var chartLitecoinCon = jQuery('.js-chartjs-litecoin'); // Helper Classes

      var chartBitcoin, chartEthereum, chartLitecoin; // Set up labels

      var chartCryptolabels = [];

      for (i = 0; i < 30; i++) {
        chartCryptolabels[i] = i === 29 ? '1 day ago' : 30 - i + ' days ago';
      } // Cryto Data


      var chartBitcoinData = [10500, 10400, 9500, 8268, 10218, 8250, 8707, 9284, 9718, 9950, 9879, 10147, 10883, 11071, 11332, 11584, 11878, 13540, 16501, 16007, 15142, 14869, 16762, 17276, 16808, 16678, 16771, 12900, 13100, 14000];
      var chartEthereumData = [500, 525, 584, 485, 470, 320, 380, 580, 620, 785, 795, 801, 799, 750, 900, 920, 930, 1300, 1250, 1150, 1365, 1258, 980, 870, 860, 925, 999, 1050, 1090, 1100];
      var chartLitecoinData = [300, 320, 330, 331, 335, 340, 358, 310, 220, 180, 190, 195, 203, 187, 198, 258, 270, 340, 356, 309, 218, 230, 242, 243, 250, 210, 205, 226, 214, 250]; // Init Bitcoin Chart on Tab Shown

      jQuery('a[href="#crypto-coins-btc"]', 'ul#crypto-tabs').on('shown.bs.tab', function (e) {
        // if already exists destroy it
        if (chartBitcoin) {
          chartBitcoin.destroy();
        } // Init Chart


        chartBitcoin = new Chart(chartBitcoinCon, {
          type: 'line',
          data: {
            labels: chartCryptolabels,
            datasets: [{
              label: 'Bitcoin Price',
              fill: true,
              backgroundColor: 'rgba(255,193,7,.25)',
              borderColor: 'rgba(255,193,7,1)',
              pointBackgroundColor: 'rgba(255,193,7,1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(255,193,7,1)',
              data: chartBitcoinData
            }]
          },
          options: {
            maintainAspectRatio: false,
            scales: {
              yAxes: [{
                ticks: {
                  suggestedMin: 6000,
                  suggestedMax: 20000
                }
              }]
            },
            tooltips: {
              intersect: false,
              callbacks: {
                label: function label(tooltipItems, data) {
                  return ' $' + tooltipItems.yLabel;
                }
              }
            }
          }
        });
      }); // Init Ethereum Chart on Tab Shown

      jQuery('a[href="#crypto-coins-eth"]', 'ul#crypto-tabs').on('shown.bs.tab', function (e) {
        // if already exists destroy it
        if (chartEthereum) {
          chartEthereum.destroy();
        } // Init Chart


        chartEthereum = new Chart(chartEthereumCon, {
          type: 'line',
          data: {
            labels: chartCryptolabels,
            datasets: [{
              label: 'Ethereum Price',
              fill: true,
              backgroundColor: 'rgba(111,124,186, .25)',
              borderColor: 'rgba(111,124,186, 1)',
              pointBackgroundColor: 'rgba(111,124,186, 1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(111,124,186, 1)',
              data: chartEthereumData
            }]
          },
          options: {
            maintainAspectRatio: false,
            scales: {
              yAxes: [{
                ticks: {
                  suggestedMin: 0,
                  suggestedMax: 1500
                }
              }]
            },
            tooltips: {
              intersect: false,
              callbacks: {
                label: function label(tooltipItems, data) {
                  return ' $' + tooltipItems.yLabel;
                }
              }
            }
          }
        });
      }); // Init Litecoin Chart on Tab Shown

      jQuery('a[href="#crypto-coins-ltc"]', 'ul#crypto-tabs').on('shown.bs.tab', function (e) {
        // if already exists destroy it
        if (chartLitecoin) {
          chartLitecoin.destroy();
        } // Init Chart


        chartLitecoin = new Chart(chartLitecoinCon, {
          type: 'line',
          data: {
            labels: chartCryptolabels,
            datasets: [{
              label: 'Litecoin Price',
              fill: true,
              backgroundColor: 'rgba(181,181,181,.25)',
              borderColor: 'rgba(181,181,181,1)',
              pointBackgroundColor: 'rgba(181,181,181,1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(181,181,181,1)',
              data: chartLitecoinData
            }]
          },
          options: {
            maintainAspectRatio: false,
            scales: {
              yAxes: [{
                ticks: {
                  suggestedMin: 0,
                  suggestedMax: 400
                }
              }]
            },
            tooltips: {
              intersect: false,
              callbacks: {
                label: function label(tooltipItems, data) {
                  return ' $' + tooltipItems.yLabel;
                }
              }
            }
          }
        });
      }); // Shown Bitcoin Tab which will trigger the first init of the chart

      jQuery('a[href="#crypto-coins-btc"]', 'ul#crypto-tabs').tab('show');
    }
    /*
     * Init functionality
     *
     */

  }, {
    key: "init",
    value: function init() {
      this.initChartsCrypto();
    }
  }]);

  return BePagesCryptoDashboard;
}(); // Initialize when page loads


jQuery(function () {
  BePagesCryptoDashboard.init();
});

/***/ }),

/***/ "./resources/assets/_es6/pages/be_pages_dashboard.js":
/*!***********************************************************!*\
  !*** ./resources/assets/_es6/pages/be_pages_dashboard.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 *  Document   : be_pages_dashboard.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Dashboard Page
 */
var BePagesDashboard =
/*#__PURE__*/
function () {
  function BePagesDashboard() {
    _classCallCheck(this, BePagesDashboard);
  }

  _createClass(BePagesDashboard, null, [{
    key: "initDashboardChartJS",

    /*
     * Chart.js Charts, for more examples you can check out http://www.chartjs.org/docs
     *
     */
    value: function initDashboardChartJS() {
      // Set Global Chart.js configuration
      Chart.defaults.global.defaultFontColor = '#555555';
      Chart.defaults.scale.gridLines.color = "transparent";
      Chart.defaults.scale.gridLines.zeroLineColor = "transparent";
      Chart.defaults.scale.display = false;
      Chart.defaults.scale.ticks.beginAtZero = true;
      Chart.defaults.global.elements.line.borderWidth = 2;
      Chart.defaults.global.elements.point.radius = 5;
      Chart.defaults.global.elements.point.hoverRadius = 7;
      Chart.defaults.global.tooltips.cornerRadius = 3;
      Chart.defaults.global.legend.display = false; // Chart Containers

      var chartDashboardLinesCon = jQuery('.js-chartjs-dashboard-lines');
      var chartDashboardLinesCon2 = jQuery('.js-chartjs-dashboard-lines2'); // Chart Variables

      var chartDashboardLines, chartDashboardLines2; // Lines Charts Data

      var chartDashboardLinesData = {
        labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
        datasets: [{
          label: 'This Week',
          fill: true,
          backgroundColor: 'rgba(66,165,245,.45)',
          borderColor: 'rgba(66,165,245,1)',
          pointBackgroundColor: 'rgba(66,165,245,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(66,165,245,1)',
          data: [25, 21, 23, 38, 36, 35, 39]
        }]
      };
      var chartDashboardLinesOptions = {
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
      var chartDashboardLinesData2 = {
        labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
        datasets: [{
          label: 'This Week',
          fill: true,
          backgroundColor: 'rgba(156,204,101,.45)',
          borderColor: 'rgba(156,204,101,1)',
          pointBackgroundColor: 'rgba(156,204,101,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(156,204,101,1)',
          data: [190, 219, 235, 320, 360, 354, 390]
        }]
      };
      var chartDashboardLinesOptions2 = {
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

      if (chartDashboardLinesCon.length) {
        chartDashboardLines = new Chart(chartDashboardLinesCon, {
          type: 'line',
          data: chartDashboardLinesData,
          options: chartDashboardLinesOptions
        });
      }

      if (chartDashboardLinesCon2.length) {
        chartDashboardLines2 = new Chart(chartDashboardLinesCon2, {
          type: 'line',
          data: chartDashboardLinesData2,
          options: chartDashboardLinesOptions2
        });
      }
    }
    /*
     * Init Onboarding modal
     *
     */

  }, {
    key: "initOnboardingModal",
    value: function initOnboardingModal() {
      // Show Onboarding Modal by default
      jQuery('#modal-onboarding').modal('show'); // Re-init Slick Slider every time the modal is shown

      jQuery('#modal-onboarding').on('shown.bs.modal', function (e) {
        // Remove enabled class added by the helper to prevent re-init
        jQuery('js-slider', '#modal-onboarding').removeClass('js-slider-enabled'); // Re-init Slick Slider

        Codebase.helpers('slick');
      });
    }
    /*
     * Init functionality
     *
     */

  }, {
    key: "init",
    value: function init() {
      this.initDashboardChartJS();
      this.initOnboardingModal();
    }
  }]);

  return BePagesDashboard;
}(); // Initialize when page loads


jQuery(function () {
  BePagesDashboard.init();
});

/***/ }),

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

/***/ "./resources/assets/_es6/pages/be_pages_generic_scrumboard.js":
/*!********************************************************************!*\
  !*** ./resources/assets/_es6/pages/be_pages_generic_scrumboard.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 *  Document   : be_pages_generic_scrumboard.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Scrum Board Page
 */
// Helper variables
var scrumBoard, itemList, itemInput, itemInputVal, cardInput, cardInputVal;

var BeScrumBoard =
/*#__PURE__*/
function () {
  function BeScrumBoard() {
    _classCallCheck(this, BeScrumBoard);
  }

  _createClass(BeScrumBoard, null, [{
    key: "initScrumBoard",

    /*
     * Description
     *
     */
    value: function initScrumBoard() {
      scrumBoard = jQuery('.js-scrumboard'); // Make the main container a flex container

      jQuery('#main-container').addClass('d-flex align-items-stretch'); // Fade in the main scrumboard content

      scrumBoard.fadeTo(1000, 1);
    }
    /*
     * Description
     *
     */

  }, {
    key: "cardAdd",
    value: function cardAdd() {
      var _this = this;

      scrumBoard.on('submit.cb.sb.card.add', 'form[data-toggle="sb-card-add"]', function (e) {
        e.preventDefault(); // Get input value

        cardInput = jQuery(e.currentTarget).find('input');
        cardInputVal = cardInput.prop('value'); // Check if the user entered something

        if (cardInputVal) {
          // Add Card
          cardInput.parents('.scrumboard-col').before('<div class="scrumboard-col block block-themed">' + '<div class="block-header bg-primary">' + '<h3 class="block-title font-w600">' + jQuery('<span />').text(cardInputVal).html() + '</h3>' + '<div class="block-options">' + '<div class="dropdown">' + '<button type="button" class="btn-block-option" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' + '<i class="fa fa-fw fa-ellipsis-v"></i>' + '</button>' + '<div class="dropdown-menu dropdown-menu-right">' + '<a class="dropdown-item" href="javascript:void(0)">' + '<i class="fa fa-fw fa-pencil mr-5"></i>Edit' + '</a>' + '<div class="dropdown-divider"></div>' + '<a class="dropdown-item" href="javascript:void(0)" data-toggle="block-option" data-action="close">' + '<i class="fa fa-fw fa-times text-danger mr-5"></i>Delete' + '</a>' + '</div>' + '</div>' + '</div>' + '</div>' + '<div class="block-content block-content-full bg-body-light">' + '<form class="w-100" method="post" data-toggle="sb-item-add">' + '<div class="input-group">' + '<div class="input-group-prepend">' + '<span class="input-group-text">' + '<i class="fa fa-lightbulb-o"></i>' + '</span>' + '</div>' + '<input type="text" class="form-control" placeholder="New Idea..">' + '</div>' + '</form>' + '</div>' + '<div class="scrumboard-items block-content"></div>' + '</div>'); // Clear and focus input field

          cardInput.prop('value', ''); // Refresh sortable

          _this.initDraggableItems('refresh');
        }
      });
    }
    /*
     * Description
     *
     */

  }, {
    key: "itemAdd",
    value: function itemAdd() {
      var _this2 = this;

      scrumBoard.on('submit.cb.sb.item.add', 'form[data-toggle="sb-item-add"]', function (e) {
        e.preventDefault(); // Get input value

        itemList = jQuery(e.currentTarget).parents('.scrumboard-col').find('.scrumboard-items');
        itemInput = jQuery(e.currentTarget).find('input');
        itemInputVal = itemInput.prop('value'); // Check if the user entered something

        if (itemInputVal) {
          // Add Item
          itemList.prepend('<div class="scrumboard-item">' + '<div class="scrumboard-item-options">' + '<a class="scrumboard-item-handler btn btn-sm btn-alt-warning" href="javascript:void(0)">' + '<i class="fa fa-hand-grab-o"></i>' + '</a> ' + '<button class="btn btn-sm btn-alt-warning" data-toggle="sb-item-remove">' + '<i class="fa fa-close"></i>' + '</button>' + '</div>' + '<div class="scrumboard-item-content">' + jQuery('<span />').text(itemInputVal).html() + '</div>' + '</div>'); // Clear and focus input field

          itemInput.prop('value', '').focus(); // Refresh sortable

          _this2.initDraggableItems('refresh');
        }
      });
    }
    /*
     * Description
     *
     */

  }, {
    key: "itemRemove",
    value: function itemRemove() {
      scrumBoard.on('click.cb.sb.item.remove', 'button[data-toggle="sb-item-remove"]', function (e) {
        jQuery(e.currentTarget).parents('.scrumboard-item').remove();
      });
    }
    /*
     * Description
     *
     */

  }, {
    key: "initDraggableItems",
    value: function initDraggableItems(mode) {
      if (mode === 'refresh') {
        jQuery('.scrumboard-items.js-draggable-enabled').sortable('destroy');
        this.initDraggableItems();
      } else {
        jQuery('.scrumboard-items').addClass('js-draggable-enabled').sortable({
          connectWith: '.scrumboard-items',
          items: '.scrumboard-item',
          dropOnEmpty: true,
          opacity: .75,
          handle: '.scrumboard-item-handler',
          placeholder: 'scrumboard-item-placeholder',
          tolerance: 'pointer',
          start: function start(e, ui) {
            ui.placeholder.css({
              height: ui.item.outerHeight(),
              'margin-bottom': ui.item.css('margin-bottom')
            });
          }
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
      this.initScrumBoard();
      this.cardAdd();
      this.itemAdd();
      this.itemRemove();
      this.initDraggableItems();
    }
  }]);

  return BeScrumBoard;
}(); // Initialize when page loads


jQuery(function () {
  BeScrumBoard.init();
});

/***/ }),

/***/ "./resources/assets/_es6/pages/be_pages_generic_todo.js":
/*!**************************************************************!*\
  !*** ./resources/assets/_es6/pages/be_pages_generic_todo.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 *  Document   : be_pages_generic_todo.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Todo Page
 */
// Helper variables
var taskIdNext, tasks, taskForm, taskInput, taskInputVal, taskList, taskListStarred, taskListCompleted, taskBadge, taskBadgeStarred, taskBadgeCompleted;

var BeTasks =
/*#__PURE__*/
function () {
  function BeTasks() {
    _classCallCheck(this, BeTasks);
  }

  _createClass(BeTasks, null, [{
    key: "initTasks",

    /*
     * Set variables and default functionality
     *
     */
    value: function initTasks() {
      var self = this;
      tasks = jQuery('.js-tasks');
      taskForm = jQuery('#js-task-form');
      taskInput = jQuery('#js-task-input');
      taskList = jQuery('.js-task-list');
      taskListStarred = jQuery('.js-task-list-starred');
      taskListCompleted = jQuery('.js-task-list-completed');
      taskBadge = jQuery('.js-task-badge');
      taskBadgeStarred = jQuery('.js-task-badge-starred');
      taskBadgeCompleted = jQuery('.js-task-badge-completed'); // Set your own next new task id based on your database setup

      taskIdNext = 10; // Update badges

      self.badgesUpdate(); // New task form submission

      taskForm.on('submit', function (e) {
        e.preventDefault(); // Get input value

        taskInputVal = taskInput.prop('value'); // Check if the user entered something

        if (taskInputVal) {
          // Add Task
          self.taskAdd(taskInputVal); // Clear and focus input field

          taskInput.prop('value', '').focus();
        }
      }); // Task status update on checkbox click

      var stask, staskId;
      tasks.on('click', '.js-task-status', function (e) {
        e.preventDefault();
        stask = jQuery(e.currentTarget).closest('.js-task');
        staskId = stask.attr('data-task-id'); // Check task status and toggle it

        if (stask.attr('data-task-completed') === 'true') {
          self.taskSetActive(staskId);
        } else {
          self.taskSetCompleted(staskId);
        }
      }); // Task starred status update on star click

      var ftask, ftaskId;
      tasks.on('click', '.js-task-star', function (e) {
        ftask = jQuery(e.currentTarget).closest('.js-task');
        ftaskId = ftask.attr('data-task-id'); // Check task starred status and toggle it

        if (ftask.attr('data-task-starred') === 'true') {
          self.taskStarRemove(ftaskId);
        } else {
          self.taskStarAdd(ftaskId);
        }
      }); // Remove task on remove button click

      tasks.on('click', '.js-task-remove', function (e) {
        ftask = jQuery(e.currentTarget).closest('.js-task');
        ftaskId = ftask.attr('data-task-id'); // Remove task

        self.taskRemove(ftaskId);
      });
    }
    /*
     * Update badges
     *
     */

  }, {
    key: "badgesUpdate",
    value: function badgesUpdate() {
      taskBadge.text(taskList.children().length || '');
      taskBadgeStarred.text(taskListStarred.children().length || '');
      taskBadgeCompleted.text(taskListCompleted.children().length || '');
    }
    /*
     * Add a task
     *
     */

  }, {
    key: "taskAdd",
    value: function taskAdd(taskContent) {
      // Add it to the task list
      taskList.prepend('<div class="js-task block block-rounded mb-5 animated fadeIn" data-task-id="' + taskIdNext + '" data-task-completed="false" data-task-starred="false">' + '<table class="table table-borderless table-vcenter mb-0">' + '<tr>' + '<td class="text-center" style="width: 50px;">' + '<label class="js-task-status css-control css-control-primary css-checkbox py-0">' + '<input type="checkbox" class="css-control-input">' + '<span class="css-control-indicator"></span>' + '</label>' + '</td>' + '<td class="js-task-content font-w600">' + jQuery('<span />').text(taskContent).html() + '</td>' + '<td class="text-right" style="width: 100px;">' + '<button class="js-task-star btn btn-sm btn-alt-warning" type="button">' + '<i class="fa fa-star-o"></i>' + '</button> ' + '<button class="js-task-remove btn btn-sm btn-alt-danger" type="button">' + '<i class="fa fa-times"></i>' + '</button>' + '</td>' + '</tr>' + '</table>' + '</div>'); // Update badges

      this.badgesUpdate(); // Save the task based on your database setup
      // ..
      // Update task next id

      taskIdNext++;
    }
    /*
     * Remove a task
     *
     */

  }, {
    key: "taskRemove",
    value: function taskRemove(taskId) {
      jQuery('.js-task[data-task-id="' + taskId + '"]').remove(); // Update badges

      this.badgesUpdate(); // Remove the task based on your database setup
      // ..
    }
    /*
     * Star a task
     *
     */

  }, {
    key: "taskStarAdd",
    value: function taskStarAdd(taskId) {
      var task = jQuery('.js-task[data-task-id="' + taskId + '"]'); // Check if exists and update accordignly the markup

      if (task.length > 0) {
        task.attr('data-task-starred', true);
        task.find('.js-task-star > i').toggleClass('fa-star fa-star-o');

        if (task.attr('data-task-completed') === 'false') {
          task.prependTo(taskListStarred);
        } // Update badges


        this.badgesUpdate(); // Star the task based on your database setup
        // ..
      }
    }
    /*
     * Unstar a task
     *
     */

  }, {
    key: "taskStarRemove",
    value: function taskStarRemove(taskId) {
      var task = jQuery('.js-task[data-task-id="' + taskId + '"]'); // Check if exists and update accordignly the markup

      if (task.length > 0) {
        task.attr('data-task-starred', false);
        task.find('.js-task-star > i').toggleClass('fa-star fa-star-o');

        if (task.attr('data-task-completed') === 'false') {
          task.prependTo(taskList);
        } // Update badges


        this.badgesUpdate(); // Unstar the task based on your database setup
        // ..
      }
    }
    /*
     * Set a task to active
     *
     */

  }, {
    key: "taskSetActive",
    value: function taskSetActive(taskId) {
      var task = jQuery('.js-task[data-task-id="' + taskId + '"]'); // Check if exists and update accordignly

      if (task.length > 0) {
        task.attr('data-task-completed', false);
        task.find('.table').toggleClass('bg-body-light');
        task.find('.js-task-status > input').prop('checked', false);
        task.find('.js-task-content > del').contents().unwrap();

        if (task.attr('data-task-starred') === 'true') {
          task.prependTo(taskListStarred);
        } else {
          task.prependTo(taskList);
        } // Update badges


        this.badgesUpdate(); // Update task status based on your database setup
        // ..
      }
    }
    /*
     * Set a task to completed
     *
     */

  }, {
    key: "taskSetCompleted",
    value: function taskSetCompleted(taskId) {
      var task = jQuery('.js-task[data-task-id="' + taskId + '"]'); // Check if exists and update accordignly

      if (task.length > 0) {
        task.attr('data-task-completed', true);
        task.find('.table').toggleClass('bg-body-light');
        task.find('.js-task-status > input').prop('checked', true);
        task.find('.js-task-content').wrapInner('<del></del>');
        task.prependTo(taskListCompleted); // Update badges

        this.badgesUpdate(); // Update task status based on your database setup
        // ..
      }
    }
    /*
     * Init functionality
     *
     */

  }, {
    key: "init",
    value: function init() {
      this.initTasks();
    }
  }]);

  return BeTasks;
}(); // Initialize when page loads


jQuery(function () {
  BeTasks.init();
});

/***/ }),

/***/ "./resources/assets/_es6/pages/be_tables_datatables.js":
/*!*************************************************************!*\
  !*** ./resources/assets/_es6/pages/be_tables_datatables.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 *  Document   : be_tables_datatables.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Tables Datatables Page
 */
// DataTables, for more examples you can check out https://www.datatables.net/
var BeTableDatatables =
/*#__PURE__*/
function () {
  function BeTableDatatables() {
    _classCallCheck(this, BeTableDatatables);
  }

  _createClass(BeTableDatatables, null, [{
    key: "exDataTable",

    /*
     * Override a few DataTable defaults
     *
     */
    value: function exDataTable() {
      jQuery.extend(jQuery.fn.dataTable.ext.classes, {
        sWrapper: "dataTables_wrapper dt-bootstrap4"
      });
    }
    /*
     * Init full DataTable
     *
     */

  }, {
    key: "initDataTableFull",
    value: function initDataTableFull() {
      jQuery('.js-dataTable-full').dataTable({
        columnDefs: [{
          orderable: false,
          targets: [4]
        }],
        pageLength: 8,
        lengthMenu: [[5, 8, 15, 20], [5, 8, 15, 20]],
        autoWidth: false
      });
    }
    /*
     * Init full extra DataTable
     *
     */

  }, {
    key: "initDataTableFullPagination",
    value: function initDataTableFullPagination() {
      jQuery('.js-dataTable-full-pagination').dataTable({
        pagingType: "full_numbers",
        columnDefs: [{
          orderable: false,
          targets: [4]
        }],
        pageLength: 8,
        lengthMenu: [[5, 8, 15, 20], [5, 8, 15, 20]],
        autoWidth: false
      });
    }
    /*
     * Init simple DataTable
     *
     */

  }, {
    key: "initDataTableSimple",
    value: function initDataTableSimple() {
      jQuery('.js-dataTable-simple').dataTable({
        columnDefs: [{
          orderable: false,
          targets: [4]
        }],
        pageLength: 8,
        lengthMenu: [[5, 8, 15, 20], [5, 8, 15, 20]],
        autoWidth: false,
        searching: false,
        oLanguage: {
          sLengthMenu: ""
        },
        dom: "<'row'<'col-sm-12'tr>>" + "<'row'<'col-sm-6'i><'col-sm-6'p>>"
      });
    }
    /*
     * Init functionality
     *
     */

  }, {
    key: "init",
    value: function init() {
      this.exDataTable();
      this.initDataTableSimple();
      this.initDataTableFull();
      this.initDataTableFullPagination();
    }
  }]);

  return BeTableDatatables;
}(); // Initialize when page loads


jQuery(function () {
  BeTableDatatables.init();
});

/***/ }),

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

/***/ "./resources/assets/_es6/pages/be_ui_animations.js":
/*!*********************************************************!*\
  !*** ./resources/assets/_es6/pages/be_ui_animations.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 *  Document   : be_ui_animations.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Animations Page
 */
var BeUIAnimations =
/*#__PURE__*/
function () {
  function BeUIAnimations() {
    _classCallCheck(this, BeUIAnimations);
  }

  _createClass(BeUIAnimations, null, [{
    key: "animationsToggle",

    /*
     * Animation toggle functionality
     *
     */
    value: function animationsToggle() {
      var animationClass, animationButton, currentSection; // On button click

      jQuery('.js-animation-section button').on('click', function (e) {
        animationButton = jQuery(e.currentTarget);
        animationClass = animationButton.data('animation-class');
        currentSection = animationButton.parents('.js-animation-section'); // Update class preview

        jQuery('.js-animation-preview', currentSection).html(animationClass); // Update animation object classes

        jQuery('.js-animation-object', currentSection).removeClass().addClass('js-animation-object animated ' + animationClass);
      });
    }
    /*
     * Init functionality
     *
     */

  }, {
    key: "init",
    value: function init() {
      this.animationsToggle();
    }
  }]);

  return BeUIAnimations;
}(); // Initialize when page loads


jQuery(function () {
  BeUIAnimations.init();
});

/***/ }),

/***/ "./resources/assets/_es6/pages/be_ui_icons.js":
/*!****************************************************!*\
  !*** ./resources/assets/_es6/pages/be_ui_icons.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 *  Document   : be_ui_icons.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Icons Page
 */
var BeUIIcons =
/*#__PURE__*/
function () {
  function BeUIIcons() {
    _classCallCheck(this, BeUIIcons);
  }

  _createClass(BeUIIcons, null, [{
    key: "iconSearch",

    /*
     * Icon Search functionality
     *
     */
    value: function iconSearch() {
      var searchItems = jQuery('.js-icon-list > div');
      var searchValue = '',
          el; // Disable form submission

      jQuery('.js-form-icon-search').on('submit', function () {
        return false;
      }); // When user types

      jQuery('.js-icon-search').on('keyup', function (e) {
        searchValue = jQuery(e.currentTarget).val().toLowerCase();

        if (searchValue.length > 2) {
          // If ore than 2 characters, search the icons
          searchItems.hide();
          jQuery('code', searchItems).each(function (index, element) {
            el = jQuery(element);

            if (el.text().match(searchValue)) {
              el.parent('div').fadeIn(250);
            }
          });
        } else if (searchValue.length === 0) {
          // If text was deleted, show all icons
          searchItems.show();
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
      this.iconSearch();
    }
  }]);

  return BeUIIcons;
}(); // Initialize when page loads


jQuery(function () {
  BeUIIcons.init();
});

/***/ }),

/***/ "./resources/assets/_es6/pages/db_classic.js":
/*!***************************************************!*\
  !*** ./resources/assets/_es6/pages/db_classic.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 *  Document   : db_classic.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Classic Dashboard Page
 */
// Chart.js Charts, for more examples you can check out http://www.chartjs.org/docs
var DbClassic =
/*#__PURE__*/
function () {
  function DbClassic() {
    _classCallCheck(this, DbClassic);
  }

  _createClass(DbClassic, null, [{
    key: "initClassicChartJS",

    /*
     * Init Charts
     *
     */
    value: function initClassicChartJS() {
      // Set Global Chart.js configuration
      Chart.defaults.global.defaultFontColor = '#7c7c7c';
      Chart.defaults.scale.gridLines.color = "#f5f5f5";
      Chart.defaults.scale.gridLines.zeroLineColor = "#f5f5f5";
      Chart.defaults.scale.display = true;
      Chart.defaults.scale.ticks.beginAtZero = true;
      Chart.defaults.global.elements.line.borderWidth = 2;
      Chart.defaults.global.elements.point.radius = 5;
      Chart.defaults.global.elements.point.hoverRadius = 7;
      Chart.defaults.global.tooltips.cornerRadius = 3;
      Chart.defaults.global.legend.display = false; // Chart Containers

      var chartClassicLinesCon = jQuery('.js-chartjs-classic-lines');
      var chartClassicLinesCon2 = jQuery('.js-chartjs-classic-lines2'); // Chart Variables

      var chartClassicLines, chartClassicLines2; // Lines Charts Data

      var chartClassicLinesData = {
        labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
        datasets: [{
          label: 'This Week',
          fill: true,
          backgroundColor: 'rgba(114,102,186,.15)',
          borderColor: 'rgba(114,102,186,.5)',
          pointBackgroundColor: 'rgba(114,102,186,.5)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(114,102,186,.5)',
          data: [39, 27, 23, 34, 42, 46, 31]
        }]
      };
      var chartClassicLinesOptions = {
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
      var chartClassicLinesData2 = {
        labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
        datasets: [{
          label: 'This Week',
          fill: true,
          backgroundColor: 'rgba(247,93,129,.15)',
          borderColor: 'rgba(247,93,129,.5)',
          pointBackgroundColor: 'rgba(247,93,129,.5)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(247,93,129,.5)',
          data: [325, 290, 209, 290, 410, 384, 425]
        }]
      };
      var chartClassicLinesOptions2 = {
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

      if (chartClassicLinesCon.length) {
        chartClassicLines = new Chart(chartClassicLinesCon, {
          type: 'line',
          data: chartClassicLinesData,
          options: chartClassicLinesOptions
        });
      }

      if (chartClassicLinesCon2.length) {
        chartClassicLines2 = new Chart(chartClassicLinesCon2, {
          type: 'line',
          data: chartClassicLinesData2,
          options: chartClassicLinesOptions2
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
      this.initClassicChartJS();
    }
  }]);

  return DbClassic;
}(); // Initialize when page loads


jQuery(function () {
  DbClassic.init();
});

/***/ }),

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

/***/ "./resources/assets/_es6/pages/db_dark.js":
/*!************************************************!*\
  !*** ./resources/assets/_es6/pages/db_dark.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 *  Document   : db_dark.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Dark Dashboard Page
 */
// Chart.js Charts, for more examples you can check out http://www.chartjs.org/docs
var DbDark =
/*#__PURE__*/
function () {
  function DbDark() {
    _classCallCheck(this, DbDark);
  }

  _createClass(DbDark, null, [{
    key: "initDarkChartJS",

    /*
     * Init Charts
     *
     */
    value: function initDarkChartJS() {
      // Set Global Chart.js configuration
      Chart.defaults.global.defaultFontColor = '#ccc';
      Chart.defaults.scale.gridLines.color = "transparent";
      Chart.defaults.scale.gridLines.zeroLineColor = "transparent";
      Chart.defaults.scale.display = false;
      Chart.defaults.scale.ticks.beginAtZero = true;
      Chart.defaults.global.elements.line.borderWidth = 2;
      Chart.defaults.global.elements.point.radius = 3;
      Chart.defaults.global.elements.point.hoverRadius = 5;
      Chart.defaults.global.tooltips.cornerRadius = 3;
      Chart.defaults.global.legend.display = false; // Chart Containers

      var chartDarkLinesCon = jQuery('.js-chartjs-dark-lines');
      var chartDarkLinesCon2 = jQuery('.js-chartjs-dark-lines2'); // Chart Variables

      var chartDarkLines, chartDarkLines2; // Lines Charts Data

      var chartDarkLinesData = {
        labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
        datasets: [{
          label: 'This Week',
          fill: true,
          backgroundColor: 'rgba(255,255,255,.1)',
          borderColor: 'rgba(255,255,255,.4)',
          pointBackgroundColor: 'rgba(255,255,255,.4)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,255,255,.4)',
          data: [39, 15, 25, 32, 38, 10, 45]
        }]
      };
      var chartDarkLinesOptions = {
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
      var chartDarkLinesData2 = {
        labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
        datasets: [{
          label: 'This Week',
          fill: true,
          backgroundColor: 'rgba(255,255,255,.1)',
          borderColor: 'rgba(255,255,255,.4)',
          pointBackgroundColor: 'rgba(255,255,255,.4)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,255,255,.4)',
          data: [345, 190, 220, 290, 380, 230, 455]
        }]
      };
      var chartDarkLinesOptions2 = {
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

      if (chartDarkLinesCon.length) {
        chartDarkLines = new Chart(chartDarkLinesCon, {
          type: 'line',
          data: chartDarkLinesData,
          options: chartDarkLinesOptions
        });
      }

      if (chartDarkLinesCon2.length) {
        chartDarkLines2 = new Chart(chartDarkLinesCon2, {
          type: 'line',
          data: chartDarkLinesData2,
          options: chartDarkLinesOptions2
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
      this.initDarkChartJS();
    }
  }]);

  return DbDark;
}(); // Initialize when page loads


jQuery(function () {
  DbDark.init();
});

/***/ }),

/***/ "./resources/assets/_es6/pages/db_minimal.js":
/*!***************************************************!*\
  !*** ./resources/assets/_es6/pages/db_minimal.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 *  Document   : db_minimal.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Minimal Dashboard Page
 */
// Chart.js Charts, for more examples you can check out http://www.chartjs.org/docs
var DbMinimal =
/*#__PURE__*/
function () {
  function DbMinimal() {
    _classCallCheck(this, DbMinimal);
  }

  _createClass(DbMinimal, null, [{
    key: "initMinimalChartJS",

    /*
     * Init Charts
     *
     */
    value: function initMinimalChartJS() {
      // Set Global Chart.js configuration
      Chart.defaults.global.defaultFontColor = '#7c7c7c';
      Chart.defaults.scale.gridLines.color = "transparent";
      Chart.defaults.scale.gridLines.zeroLineColor = "transparent";
      Chart.defaults.scale.display = false;
      Chart.defaults.scale.ticks.beginAtZero = true;
      Chart.defaults.global.elements.line.borderWidth = 2;
      Chart.defaults.global.elements.point.radius = 3;
      Chart.defaults.global.elements.point.hoverRadius = 5;
      Chart.defaults.global.tooltips.cornerRadius = 3;
      Chart.defaults.global.legend.display = false; // Chart Containers

      var chartMinimalLinesCon = jQuery('.js-chartjs-minimal-lines');
      var chartMinimalLinesCon2 = jQuery('.js-chartjs-minimal-lines2'); // Chart Variables

      var chartMinimalLines, chartMinimalLines2; // Lines Charts Data

      var chartMinimalLinesData = {
        labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
        datasets: [{
          label: 'This Week',
          fill: true,
          backgroundColor: 'rgba(92,85,75,.1)',
          borderColor: 'rgba(92,85,75,.4)',
          pointBackgroundColor: 'rgba(92,85,75,.4)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(92,85,75,.4)',
          data: [39, 15, 25, 32, 38, 10, 45]
        }]
      };
      var chartMinimalLinesOptions = {
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
      var chartMinimalLinesData2 = {
        labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
        datasets: [{
          label: 'This Week',
          fill: true,
          backgroundColor: 'rgba(146,170,90,.1)',
          borderColor: 'rgba(146,170,90,.4)',
          pointBackgroundColor: 'rgba(146,170,90,.4)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(146,170,90,.4)',
          data: [345, 190, 220, 290, 380, 230, 455]
        }]
      };
      var chartMinimalLinesOptions2 = {
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

      if (chartMinimalLinesCon.length) {
        chartMinimalLines = new Chart(chartMinimalLinesCon, {
          type: 'line',
          data: chartMinimalLinesData,
          options: chartMinimalLinesOptions
        });
      }

      if (chartMinimalLinesCon2.length) {
        chartMinimalLines2 = new Chart(chartMinimalLinesCon2, {
          type: 'line',
          data: chartMinimalLinesData2,
          options: chartMinimalLinesOptions2
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
      this.initMinimalChartJS();
    }
  }]);

  return DbMinimal;
}(); // Initialize when page loads


jQuery(function () {
  DbMinimal.init();
});

/***/ }),

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

/***/ "./resources/assets/_es6/pages/op_auth_lock.js":
/*!*****************************************************!*\
  !*** ./resources/assets/_es6/pages/op_auth_lock.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 *  Document   : op_auth_lock.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Lock Page
 */
// Form Validation, for more examples you can check out https://github.com/jzaefferer/jquery-validation
var OpAuthLock =
/*#__PURE__*/
function () {
  function OpAuthLock() {
    _classCallCheck(this, OpAuthLock);
  }

  _createClass(OpAuthLock, null, [{
    key: "initValidationLock",

    /*
     * Init Lock Form Validation
     *
     */
    value: function initValidationLock() {
      jQuery('.js-validation-lock').validate({
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
          'lock-password': {
            required: true,
            minlength: 3
          }
        },
        messages: {
          'lock-password': {
            required: 'Please enter your valid password'
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
      this.initValidationLock();
    }
  }]);

  return OpAuthLock;
}(); // Initialize when page loads


jQuery(function () {
  OpAuthLock.init();
});

/***/ }),

/***/ "./resources/assets/_es6/pages/op_auth_reminder.js":
/*!*********************************************************!*\
  !*** ./resources/assets/_es6/pages/op_auth_reminder.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 *  Document   : op_auth_reminder.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Password Reminder Page
 */
// Form Validation, for more examples you can check out https://github.com/jzaefferer/jquery-validation
var OpAuthReminder =
/*#__PURE__*/
function () {
  function OpAuthReminder() {
    _classCallCheck(this, OpAuthReminder);
  }

  _createClass(OpAuthReminder, null, [{
    key: "initValidationReminder",

    /*
     * Init Password Reminder Form Validation
     *
     */
    value: function initValidationReminder() {
      jQuery('.js-validation-reminder').validate({
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
          'reminder-credential': {
            required: true,
            minlength: 3
          }
        },
        messages: {
          'reminder-credential': {
            required: 'Please enter a valid credential'
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
      this.initValidationReminder();
    }
  }]);

  return OpAuthReminder;
}(); // Initialize when page loads


jQuery(function () {
  OpAuthReminder.init();
});

/***/ }),

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

/***/ "./resources/assets/_es6/pages/op_auth_signup.js":
/*!*******************************************************!*\
  !*** ./resources/assets/_es6/pages/op_auth_signup.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 *  Document   : op_auth_signup.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Sign Up Page
 */
// Form Validation, for more examples you can check out https://github.com/jzaefferer/jquery-validation
var OpAuthSignUp =
/*#__PURE__*/
function () {
  function OpAuthSignUp() {
    _classCallCheck(this, OpAuthSignUp);
  }

  _createClass(OpAuthSignUp, null, [{
    key: "initValidationSignUp",

    /*
     * Init Sign Up Form Validation
     *
     */
    value: function initValidationSignUp() {
      jQuery('.js-validation-signup').validate({
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
          'signup-username': {
            required: true,
            minlength: 3
          },
          'signup-email': {
            required: true,
            email: true
          },
          'signup-password': {
            required: true,
            minlength: 5
          },
          'signup-password-confirm': {
            required: true,
            equalTo: '#signup-password'
          },
          'signup-terms': {
            required: true
          }
        },
        messages: {
          'signup-username': {
            required: 'Please enter a username',
            minlength: 'Your username must consist of at least 3 characters'
          },
          'signup-email': 'Please enter a valid email address',
          'signup-password': {
            required: 'Please provide a password',
            minlength: 'Your password must be at least 5 characters long'
          },
          'signup-password-confirm': {
            required: 'Please provide a password',
            minlength: 'Your password must be at least 5 characters long',
            equalTo: 'Please enter the same password as above'
          },
          'signup-terms': 'You must agree to the service terms!'
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
      this.initValidationSignUp();
    }
  }]);

  return OpAuthSignUp;
}(); // Initialize when page loads


jQuery(function () {
  OpAuthSignUp.init();
});

/***/ }),

/***/ "./resources/assets/_es6/pages/op_coming_soon.js":
/*!*******************************************************!*\
  !*** ./resources/assets/_es6/pages/op_coming_soon.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 *  Document   : op_coming_soon.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Coming Soon Page
 */
// Countdown.js, for more examples you can check out https://github.com/hilios/jQuery.countdown
var OpComingSoon =
/*#__PURE__*/
function () {
  function OpComingSoon() {
    _classCallCheck(this, OpComingSoon);
  }

  _createClass(OpComingSoon, null, [{
    key: "initCounter",

    /*
     * Init Countdown
     *
     */
    value: function initCounter() {
      jQuery('.js-countdown').countdown(new Date().getFullYear() + 1 + '/02/01', function (e) {
        jQuery(e.currentTarget).html(e.strftime('<div class="row items-push text-center">' + '<div class="col-6 col-sm-3"><div class="font-size-h1 font-w700 text-white">%-D</div><div class="font-size-xs font-w700 text-white-op">DAYS</div></div>' + '<div class="col-6 col-sm-3"><div class="font-size-h1 font-w700 text-white">%H</div><div class="font-size-xs font-w700 text-white-op">HOURS</div></div>' + '<div class="col-6 col-sm-3"><div class="font-size-h1 font-w700 text-white">%M</div><div class="font-size-xs font-w700 text-white-op">MINUTES</div></div>' + '<div class="col-6 col-sm-3"><div class="font-size-h1 font-w700 text-white">%S</div><div class="font-size-xs font-w700 text-white-op">SECONDS</div></div>' + '</div>'));
      });
    }
    /*
     * Init functionality
     *
     */

  }, {
    key: "init",
    value: function init() {
      this.initCounter();
    }
  }]);

  return OpComingSoon;
}(); // Initialize when page loads


jQuery(function () {
  OpComingSoon.init();
});

/***/ }),

/***/ "./resources/assets/_es6/pages/op_installation.js":
/*!********************************************************!*\
  !*** ./resources/assets/_es6/pages/op_installation.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 *  Document   : op_installation.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Installation Page
 */
// Form Validation, for more examples you can check out https://github.com/jzaefferer/jquery-validation
var OpInstallation =
/*#__PURE__*/
function () {
  function OpInstallation() {
    _classCallCheck(this, OpInstallation);
  }

  _createClass(OpInstallation, null, [{
    key: "initValidationInstallation",

    /*
     * Init Installation Form Validation
     *
     */
    value: function initValidationInstallation() {
      jQuery('.js-validation-installation').validate({
        errorClass: 'invalid-feedback animated fadeInDown',
        errorElement: 'div',
        errorPlacement: function errorPlacement(error, e) {
          jQuery(e).parents('.form-group').append(error);
        },
        highlight: function highlight(e) {
          jQuery(e).closest('.form-group').removeClass('is-invalid').addClass('is-invalid');
        },
        success: function success(e) {
          jQuery(e).closest('.form-group').removeClass('is-invalid');
          jQuery(e).remove();
        },
        rules: {
          'install-db-name': {
            required: true
          },
          'install-db-username': {
            required: true
          },
          'install-db-password': {
            required: true
          },
          'install-admin-email': {
            required: true,
            email: true
          },
          'install-admin-password': {
            required: true,
            minlength: 5
          },
          'install-admin-password-confirm': {
            required: true,
            equalTo: '#install-admin-password'
          }
        },
        messages: {
          'install-db-name': {
            required: 'Please provide the name of your database'
          },
          'install-db-username': {
            required: 'Please provide the username with access to your database'
          },
          'install-db-password': {
            required: 'Please provide the password of your database user'
          },
          'install-admin-email': {
            required: 'Please enter your email'
          },
          'install-admin-password': {
            required: 'Please provide a password',
            minlength: 'Your password must be at least 5 characters long'
          },
          'install-admin-password-confirm': {
            required: 'Please provide a password',
            minlength: 'Your password must be at least 5 characters long',
            equalTo: 'Please enter the same password as above'
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
      this.initValidationInstallation();
    }
  }]);

  return OpInstallation;
}(); // Initialize when page loads


jQuery(function () {
  OpInstallation.init();
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
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./resources/assets/_es6/pages/be_blocks_widgets_stats.js ./resources/assets/_es6/pages/be_comp_calendar.js ./resources/assets/_es6/pages/be_comp_charts.js ./resources/assets/_es6/pages/be_comp_chat.js ./resources/assets/_es6/pages/be_comp_image_cropper.js ./resources/assets/_es6/pages/be_comp_maps_google.js ./resources/assets/_es6/pages/be_comp_maps_vector.js ./resources/assets/_es6/pages/be_comp_nestable.js ./resources/assets/_es6/pages/be_comp_rating.js ./resources/assets/_es6/pages/be_forms_plugins.js ./resources/assets/_es6/pages/be_forms_validation.js ./resources/assets/_es6/pages/be_forms_wizard.js ./resources/assets/_es6/pages/be_pages_crypto_dashboard.js ./resources/assets/_es6/pages/be_pages_dashboard.js ./resources/assets/_es6/pages/be_pages_ecom_dashboard.js ./resources/assets/_es6/pages/be_pages_generic_contact.js ./resources/assets/_es6/pages/be_pages_generic_scrumboard.js ./resources/assets/_es6/pages/be_pages_generic_todo.js ./resources/assets/_es6/pages/be_tables_datatables.js ./resources/assets/_es6/pages/be_ui_activity.js ./resources/assets/_es6/pages/be_ui_animations.js ./resources/assets/_es6/pages/be_ui_icons.js ./resources/assets/_es6/pages/db_classic.js ./resources/assets/_es6/pages/db_corporate.js ./resources/assets/_es6/pages/db_dark.js ./resources/assets/_es6/pages/db_minimal.js ./resources/assets/_es6/pages/db_pop.js ./resources/assets/_es6/pages/op_auth_lock.js ./resources/assets/_es6/pages/op_auth_reminder.js ./resources/assets/_es6/pages/op_auth_signin.js ./resources/assets/_es6/pages/op_auth_signup.js ./resources/assets/_es6/pages/op_coming_soon.js ./resources/assets/_es6/pages/op_installation.js ./resources/assets/sass/codebase/themes/corporate.scss ./resources/assets/sass/codebase/themes/earth.scss ./resources/assets/sass/codebase/themes/elegance.scss ./resources/assets/sass/codebase/themes/flat.scss ./resources/assets/sass/codebase/themes/pulse.scss ./resources/assets/sass/main.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! c:\wamp64\www\projetos_laravel\elyder\code-base\resources\assets\_es6\pages\be_blocks_widgets_stats.js */"./resources/assets/_es6/pages/be_blocks_widgets_stats.js");
__webpack_require__(/*! c:\wamp64\www\projetos_laravel\elyder\code-base\resources\assets\_es6\pages\be_comp_calendar.js */"./resources/assets/_es6/pages/be_comp_calendar.js");
__webpack_require__(/*! c:\wamp64\www\projetos_laravel\elyder\code-base\resources\assets\_es6\pages\be_comp_charts.js */"./resources/assets/_es6/pages/be_comp_charts.js");
__webpack_require__(/*! c:\wamp64\www\projetos_laravel\elyder\code-base\resources\assets\_es6\pages\be_comp_chat.js */"./resources/assets/_es6/pages/be_comp_chat.js");
__webpack_require__(/*! c:\wamp64\www\projetos_laravel\elyder\code-base\resources\assets\_es6\pages\be_comp_image_cropper.js */"./resources/assets/_es6/pages/be_comp_image_cropper.js");
__webpack_require__(/*! c:\wamp64\www\projetos_laravel\elyder\code-base\resources\assets\_es6\pages\be_comp_maps_google.js */"./resources/assets/_es6/pages/be_comp_maps_google.js");
__webpack_require__(/*! c:\wamp64\www\projetos_laravel\elyder\code-base\resources\assets\_es6\pages\be_comp_maps_vector.js */"./resources/assets/_es6/pages/be_comp_maps_vector.js");
__webpack_require__(/*! c:\wamp64\www\projetos_laravel\elyder\code-base\resources\assets\_es6\pages\be_comp_nestable.js */"./resources/assets/_es6/pages/be_comp_nestable.js");
__webpack_require__(/*! c:\wamp64\www\projetos_laravel\elyder\code-base\resources\assets\_es6\pages\be_comp_rating.js */"./resources/assets/_es6/pages/be_comp_rating.js");
__webpack_require__(/*! c:\wamp64\www\projetos_laravel\elyder\code-base\resources\assets\_es6\pages\be_forms_plugins.js */"./resources/assets/_es6/pages/be_forms_plugins.js");
__webpack_require__(/*! c:\wamp64\www\projetos_laravel\elyder\code-base\resources\assets\_es6\pages\be_forms_validation.js */"./resources/assets/_es6/pages/be_forms_validation.js");
__webpack_require__(/*! c:\wamp64\www\projetos_laravel\elyder\code-base\resources\assets\_es6\pages\be_forms_wizard.js */"./resources/assets/_es6/pages/be_forms_wizard.js");
__webpack_require__(/*! c:\wamp64\www\projetos_laravel\elyder\code-base\resources\assets\_es6\pages\be_pages_crypto_dashboard.js */"./resources/assets/_es6/pages/be_pages_crypto_dashboard.js");
__webpack_require__(/*! c:\wamp64\www\projetos_laravel\elyder\code-base\resources\assets\_es6\pages\be_pages_dashboard.js */"./resources/assets/_es6/pages/be_pages_dashboard.js");
__webpack_require__(/*! c:\wamp64\www\projetos_laravel\elyder\code-base\resources\assets\_es6\pages\be_pages_ecom_dashboard.js */"./resources/assets/_es6/pages/be_pages_ecom_dashboard.js");
__webpack_require__(/*! c:\wamp64\www\projetos_laravel\elyder\code-base\resources\assets\_es6\pages\be_pages_generic_contact.js */"./resources/assets/_es6/pages/be_pages_generic_contact.js");
__webpack_require__(/*! c:\wamp64\www\projetos_laravel\elyder\code-base\resources\assets\_es6\pages\be_pages_generic_scrumboard.js */"./resources/assets/_es6/pages/be_pages_generic_scrumboard.js");
__webpack_require__(/*! c:\wamp64\www\projetos_laravel\elyder\code-base\resources\assets\_es6\pages\be_pages_generic_todo.js */"./resources/assets/_es6/pages/be_pages_generic_todo.js");
__webpack_require__(/*! c:\wamp64\www\projetos_laravel\elyder\code-base\resources\assets\_es6\pages\be_tables_datatables.js */"./resources/assets/_es6/pages/be_tables_datatables.js");
__webpack_require__(/*! c:\wamp64\www\projetos_laravel\elyder\code-base\resources\assets\_es6\pages\be_ui_activity.js */"./resources/assets/_es6/pages/be_ui_activity.js");
__webpack_require__(/*! c:\wamp64\www\projetos_laravel\elyder\code-base\resources\assets\_es6\pages\be_ui_animations.js */"./resources/assets/_es6/pages/be_ui_animations.js");
__webpack_require__(/*! c:\wamp64\www\projetos_laravel\elyder\code-base\resources\assets\_es6\pages\be_ui_icons.js */"./resources/assets/_es6/pages/be_ui_icons.js");
__webpack_require__(/*! c:\wamp64\www\projetos_laravel\elyder\code-base\resources\assets\_es6\pages\db_classic.js */"./resources/assets/_es6/pages/db_classic.js");
__webpack_require__(/*! c:\wamp64\www\projetos_laravel\elyder\code-base\resources\assets\_es6\pages\db_corporate.js */"./resources/assets/_es6/pages/db_corporate.js");
__webpack_require__(/*! c:\wamp64\www\projetos_laravel\elyder\code-base\resources\assets\_es6\pages\db_dark.js */"./resources/assets/_es6/pages/db_dark.js");
__webpack_require__(/*! c:\wamp64\www\projetos_laravel\elyder\code-base\resources\assets\_es6\pages\db_minimal.js */"./resources/assets/_es6/pages/db_minimal.js");
__webpack_require__(/*! c:\wamp64\www\projetos_laravel\elyder\code-base\resources\assets\_es6\pages\db_pop.js */"./resources/assets/_es6/pages/db_pop.js");
__webpack_require__(/*! c:\wamp64\www\projetos_laravel\elyder\code-base\resources\assets\_es6\pages\op_auth_lock.js */"./resources/assets/_es6/pages/op_auth_lock.js");
__webpack_require__(/*! c:\wamp64\www\projetos_laravel\elyder\code-base\resources\assets\_es6\pages\op_auth_reminder.js */"./resources/assets/_es6/pages/op_auth_reminder.js");
__webpack_require__(/*! c:\wamp64\www\projetos_laravel\elyder\code-base\resources\assets\_es6\pages\op_auth_signin.js */"./resources/assets/_es6/pages/op_auth_signin.js");
__webpack_require__(/*! c:\wamp64\www\projetos_laravel\elyder\code-base\resources\assets\_es6\pages\op_auth_signup.js */"./resources/assets/_es6/pages/op_auth_signup.js");
__webpack_require__(/*! c:\wamp64\www\projetos_laravel\elyder\code-base\resources\assets\_es6\pages\op_coming_soon.js */"./resources/assets/_es6/pages/op_coming_soon.js");
__webpack_require__(/*! c:\wamp64\www\projetos_laravel\elyder\code-base\resources\assets\_es6\pages\op_installation.js */"./resources/assets/_es6/pages/op_installation.js");
__webpack_require__(/*! c:\wamp64\www\projetos_laravel\elyder\code-base\resources\assets\sass\codebase\themes\corporate.scss */"./resources/assets/sass/codebase/themes/corporate.scss");
__webpack_require__(/*! c:\wamp64\www\projetos_laravel\elyder\code-base\resources\assets\sass\codebase\themes\earth.scss */"./resources/assets/sass/codebase/themes/earth.scss");
__webpack_require__(/*! c:\wamp64\www\projetos_laravel\elyder\code-base\resources\assets\sass\codebase\themes\elegance.scss */"./resources/assets/sass/codebase/themes/elegance.scss");
__webpack_require__(/*! c:\wamp64\www\projetos_laravel\elyder\code-base\resources\assets\sass\codebase\themes\flat.scss */"./resources/assets/sass/codebase/themes/flat.scss");
__webpack_require__(/*! c:\wamp64\www\projetos_laravel\elyder\code-base\resources\assets\sass\codebase\themes\pulse.scss */"./resources/assets/sass/codebase/themes/pulse.scss");
module.exports = __webpack_require__(/*! c:\wamp64\www\projetos_laravel\elyder\code-base\resources\assets\sass\main.scss */"./resources/assets/sass/main.scss");


/***/ })

/******/ });