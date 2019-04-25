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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ 5:
/*!******************************************************************!*\
  !*** multi ./resources/assets/_es6/pages/be_comp_maps_google.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\wamp64\www\projetos_laravel\elyder\code-base\resources\assets\_es6\pages\be_comp_maps_google.js */"./resources/assets/_es6/pages/be_comp_maps_google.js");


/***/ })

/******/ });