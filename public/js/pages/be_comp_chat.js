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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ 3:
/*!***********************************************************!*\
  !*** multi ./resources/assets/_es6/pages/be_comp_chat.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\wamp64\www\projetos_laravel\elyder\code-base\resources\assets\_es6\pages\be_comp_chat.js */"./resources/assets/_es6/pages/be_comp_chat.js");


/***/ })

/******/ });