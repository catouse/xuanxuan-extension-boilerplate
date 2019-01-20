module.exports =
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var xext_1 = __webpack_require__(/*! ./xext */ "./src/xext.ts");
var extension = {
    onAttach: function (ext) {
        if (xext_1.DEBUG) {
            console.log("Extension '" + ext.displayName + "' loaded from " + ext.mainFile + ".");
        }
    },
};
exports["default"] = extension;


/***/ }),

/***/ "./src/xext.ts":
/*!*********************!*\
  !*** ./src/xext.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
/// <reference path="./xext.d.ts" />
/**
 * 全局扩展访问模块
 * @private
 */
var xext = global.Xext;
/**
 * 是否开启了调试模式
 */
exports.DEBUG = global.DEBUG;
/**
 * 界面语言访问模块
 */
exports.lang = xext.lang;
/**
 * 依赖模块
 */
exports.nodeModules = xext.nodeModules;
/**
 * React 模块
 */
exports.React = xext.nodeModules.React;
/**
 * ReactDOM 模块
 */
exports.ReactDOM = xext.nodeModules.ReactDOM;
/**
 * ReactSplitPane 组件
 */
exports.ReactSplitPane = xext.nodeModules.ReactSplitPane;
/**
 * EmojionePicker 组件
 */
exports.EmojionePicker = xext.nodeModules.EmojionePicker;
/**
 * marked 模块
 */
exports.marked = xext.nodeModules.marked;
/**
 * md5 模块
 */
exports.md5 = xext.nodeModules.md5;
/**
 * fs-extra 模块
 */
exports.fs = xext.nodeModules.fs;
/**
 * 解压缩模块
 */
exports.extractZip = xext.nodeModules.extractZip;
/**
 * Emojione 管理模块
 */
exports.emojione = xext.nodeModules.emojione;
/**
 * DraftJs 模块
 */
exports.DraftJs = xext.nodeModules.DraftJs;
/**
 * HTMLParser 模块
 */
exports.HTMLParser = xext.nodeModules.HTMLParser;
/**
 * 版本比较模块
 */
exports.compareVersions = xext.nodeModules.compareVersions;
/**
 * 快捷键模块
 */
exports.hotkeys = xext.nodeModules.hotkeys;
/**
 * 拼音模块
 */
exports.pinyin = xext.nodeModules.pinyin;
/**
 * UUID 模块
 */
exports.uuid = xext.nodeModules.uuid;
/**
 * 通用组件库
 */
exports.components = xext.components;
/**
 * 通用工具模块
 */
exports.utils = xext.utils;
/**
 * 平台访问模块
 */
exports.platform = xext.platform;
/**
 * 应用核心模块
 */
exports.app = xext.app;
/**
 * 界面视图库
 */
exports.views = xext.views;
;
/**
 *
 */
exports["default"] = xext;


/***/ })

/******/ });
//# sourceMappingURL=index.js.map