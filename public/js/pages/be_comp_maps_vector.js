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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ 6:
/*!******************************************************************!*\
  !*** multi ./resources/assets/_es6/pages/be_comp_maps_vector.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\wamp64\www\projetos_laravel\elyder\code-base\resources\assets\_es6\pages\be_comp_maps_vector.js */"./resources/assets/_es6/pages/be_comp_maps_vector.js");


/***/ })

/******/ });