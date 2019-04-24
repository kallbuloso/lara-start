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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ 17:
/*!********************************************************************!*\
  !*** multi ./resources/assets/_es6/pages/be_pages_generic_todo.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\wamp64\www\projetos_laravel\elyder\code-base\resources\assets\_es6\pages\be_pages_generic_todo.js */"./resources/assets/_es6/pages/be_pages_generic_todo.js");


/***/ })

/******/ });