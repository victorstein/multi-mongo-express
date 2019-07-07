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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/api/conn1_endpoints/user.js":
/*!*****************************************!*\
  !*** ./src/api/conn1_endpoints/user.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_db1_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/db1_models */ \"./src/models/db1_models/index.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\nvar _Models$User = _models_db1_models__WEBPACK_IMPORTED_MODULE_1__[\"default\"].User,\n    model = _Models$User.model,\n    validation = _Models$User.validation;\nvar User = model;\nvar UserValidation = validation;\nvar router = Object(express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"])();\nvar status = 500;\n/* harmony default export */ __webpack_exports__[\"default\"] = (router.get('/user',\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(req, res) {\n    var users, message;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return User.find().exec();\n\n          case 3:\n            users = _context.sent;\n            res.json(users);\n            _context.next = 11;\n            break;\n\n          case 7:\n            _context.prev = 7;\n            _context.t0 = _context[\"catch\"](0);\n            message = _context.t0.message;\n            res.status(status).json(message);\n\n          case 11:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 7]]);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}()).post('/user',\n/*#__PURE__*/\nfunction () {\n  var _ref3 = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee2(req, res) {\n    var _validation, user, message;\n\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.prev = 0;\n            // Validate received data\n            _validation = UserValidation.validate(req.body); // Throw error id data is invalid\n\n            if (!_validation.error) {\n              _context2.next = 5;\n              break;\n            }\n\n            status = 400;\n            throw new Error(_validation.error);\n\n          case 5:\n            // If data is validproceed to create user\n            user = new User(req.body); // Save user\n\n            _context2.next = 8;\n            return user.save();\n\n          case 8:\n            user = _context2.sent;\n            // return successful response\n            res.status(200).json(user);\n            _context2.next = 16;\n            break;\n\n          case 12:\n            _context2.prev = 12;\n            _context2.t0 = _context2[\"catch\"](0);\n            message = _context2.t0.message;\n            res.status(status).json({\n              error: message\n            });\n\n          case 16:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[0, 12]]);\n  }));\n\n  return function (_x3, _x4) {\n    return _ref3.apply(this, arguments);\n  };\n}()));\n\n//# sourceURL=webpack:///./src/api/conn1_endpoints/user.js?");

/***/ }),

/***/ "./src/api/conn2_endpoints/user.js":
/*!*****************************************!*\
  !*** ./src/api/conn2_endpoints/user.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_db2_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/db2_models */ \"./src/models/db2_models/index.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\nvar _Models$User = _models_db2_models__WEBPACK_IMPORTED_MODULE_1__[\"default\"].User,\n    model = _Models$User.model,\n    validation = _Models$User.validation;\nvar User = model;\nvar UserValidation = validation;\nvar router = Object(express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"])();\nvar status = 500;\n/* harmony default export */ __webpack_exports__[\"default\"] = (router.get('/user',\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(req, res) {\n    var users, message;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return User.find().exec();\n\n          case 3:\n            users = _context.sent;\n            res.json(users);\n            _context.next = 11;\n            break;\n\n          case 7:\n            _context.prev = 7;\n            _context.t0 = _context[\"catch\"](0);\n            message = _context.t0.message;\n            res.status(status).json(message);\n\n          case 11:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 7]]);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}()).post('/user',\n/*#__PURE__*/\nfunction () {\n  var _ref3 = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee2(req, res) {\n    var _validation, user, message;\n\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.prev = 0;\n            // Validate received data\n            _validation = UserValidation.validate(req.body); // Throw error id data is invalid\n\n            if (!_validation.error) {\n              _context2.next = 5;\n              break;\n            }\n\n            status = 400;\n            throw new Error(_validation.error);\n\n          case 5:\n            // If data is validproceed to create user\n            user = new User(req.body); // Save user\n\n            _context2.next = 8;\n            return user.save();\n\n          case 8:\n            user = _context2.sent;\n            // return successful response\n            res.status(200).json(user);\n            _context2.next = 16;\n            break;\n\n          case 12:\n            _context2.prev = 12;\n            _context2.t0 = _context2[\"catch\"](0);\n            message = _context2.t0.message;\n            res.status(status).json({\n              error: message\n            });\n\n          case 16:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[0, 12]]);\n  }));\n\n  return function (_x3, _x4) {\n    return _ref3.apply(this, arguments);\n  };\n}()));\n\n//# sourceURL=webpack:///./src/api/conn2_endpoints/user.js?");

/***/ }),

/***/ "./src/db_connection/db1.js":
/*!**********************************!*\
  !*** ./src/db_connection/db1.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);\n\n\nObject(dotenv__WEBPACK_IMPORTED_MODULE_1__[\"config\"])();\nvar _process$env = process.env,\n    DB_USER_1 = _process$env.DB_USER_1,\n    DB_PASSWORD_1 = _process$env.DB_PASSWORD_1,\n    DB_URI_1 = _process$env.DB_URI_1;\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.createConnection(\"mongodb+srv://\".concat(DB_USER_1, \":\").concat(DB_PASSWORD_1).concat(DB_URI_1), {\n  useNewUrlParser: true\n}));\n\n//# sourceURL=webpack:///./src/db_connection/db1.js?");

/***/ }),

/***/ "./src/db_connection/db2.js":
/*!**********************************!*\
  !*** ./src/db_connection/db2.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);\n\n\nObject(dotenv__WEBPACK_IMPORTED_MODULE_1__[\"config\"])();\nvar _process$env = process.env,\n    DB_USER_2 = _process$env.DB_USER_2,\n    DB_PASSWORD_2 = _process$env.DB_PASSWORD_2,\n    DB_URI_2 = _process$env.DB_URI_2;\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.createConnection(\"mongodb+srv://\".concat(DB_USER_2, \":\").concat(DB_PASSWORD_2).concat(DB_URI_2), {\n  useNewUrlParser: true\n}));\n\n//# sourceURL=webpack:///./src/db_connection/db2.js?");

/***/ }),

/***/ "./src/db_connection/index.js":
/*!************************************!*\
  !*** ./src/db_connection/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _db1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./db1 */ \"./src/db_connection/db1.js\");\n/* harmony import */ var _db2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./db2 */ \"./src/db_connection/db2.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  db1: _db1__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  db2: _db2__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n\n//# sourceURL=webpack:///./src/db_connection/index.js?");

/***/ }),

/***/ "./src/models/db1_models/index.js":
/*!****************************************!*\
  !*** ./src/models/db1_models/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ \"./src/models/db1_models/user.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  User: _user__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n});\n\n//# sourceURL=webpack:///./src/models/db1_models/index.js?");

/***/ }),

/***/ "./src/models/db1_models/user.js":
/*!***************************************!*\
  !*** ./src/models/db1_models/user.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _db_connection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../db_connection */ \"./src/db_connection/index.js\");\n/* harmony import */ var _hapi_joi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hapi/joi */ \"@hapi/joi\");\n/* harmony import */ var _hapi_joi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_hapi_joi__WEBPACK_IMPORTED_MODULE_2__);\n\n\n // Retreive database 1\n\nvar db1 = _db_connection__WEBPACK_IMPORTED_MODULE_1__[\"default\"].db1;\nvar User = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  email: {\n    required: true,\n    lowercase: true,\n    type: String\n  },\n  password: {\n    required: true,\n    type: String\n  }\n}, {\n  timestamps: true\n});\nvar UserValidation = _hapi_joi__WEBPACK_IMPORTED_MODULE_2___default.a.object().keys({\n  email: _hapi_joi__WEBPACK_IMPORTED_MODULE_2___default.a.string().email({\n    minDomainSegments: 2\n  }),\n  password: _hapi_joi__WEBPACK_IMPORTED_MODULE_2___default.a.string().regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/).error(new Error('The password must be at least: - 8 characters long - Contain 1 uppercase letter - Contain 1 number - Contain 1 special character'))\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  model: db1.model('User', User),\n  validation: UserValidation\n});\n\n//# sourceURL=webpack:///./src/models/db1_models/user.js?");

/***/ }),

/***/ "./src/models/db2_models/index.js":
/*!****************************************!*\
  !*** ./src/models/db2_models/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ \"./src/models/db2_models/user.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  User: _user__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n});\n\n//# sourceURL=webpack:///./src/models/db2_models/index.js?");

/***/ }),

/***/ "./src/models/db2_models/user.js":
/*!***************************************!*\
  !*** ./src/models/db2_models/user.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _db_connection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../db_connection */ \"./src/db_connection/index.js\");\n/* harmony import */ var _hapi_joi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hapi/joi */ \"@hapi/joi\");\n/* harmony import */ var _hapi_joi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_hapi_joi__WEBPACK_IMPORTED_MODULE_2__);\n\n\n // Retreive database 1\n\nvar db2 = _db_connection__WEBPACK_IMPORTED_MODULE_1__[\"default\"].db2;\nvar User = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  email: {\n    required: true,\n    lowercase: true,\n    type: String\n  },\n  password: {\n    required: true,\n    type: String\n  }\n}, {\n  timestamps: true\n});\nvar UserValidation = _hapi_joi__WEBPACK_IMPORTED_MODULE_2___default.a.object().keys({\n  email: _hapi_joi__WEBPACK_IMPORTED_MODULE_2___default.a.string().email({\n    minDomainSegments: 2\n  }),\n  password: _hapi_joi__WEBPACK_IMPORTED_MODULE_2___default.a.string().regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/).error(new Error('The password must be at least: - 8 characters long - Contain 1 uppercase letter - Contain 1 number - Contain 1 special character'))\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  model: db2.model('User', User),\n  validation: UserValidation\n});\n\n//# sourceURL=webpack:///./src/models/db2_models/user.js?");

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _db_connection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./db_connection */ \"./src/db_connection/index.js\");\n/* harmony import */ var _api_conn1_endpoints_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api/conn1_endpoints/user */ \"./src/api/conn1_endpoints/user.js\");\n/* harmony import */ var _api_conn2_endpoints_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api/conn2_endpoints/user */ \"./src/api/conn2_endpoints/user.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n\n // retreive databases\n\nvar db1 = _db_connection__WEBPACK_IMPORTED_MODULE_3__[\"default\"].db1,\n    db2 = _db_connection__WEBPACK_IMPORTED_MODULE_3__[\"default\"].db2; // initiate env imports\n\nObject(dotenv__WEBPACK_IMPORTED_MODULE_2__[\"config\"])(); // Retreive variables from process.env\n\nvar PORT = process.env.PORT; // Initiate server with a self invoking function\n\n_asyncToGenerator(\n/*#__PURE__*/\nregeneratorRuntime.mark(function _callee() {\n  var app;\n  return regeneratorRuntime.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.prev = 0;\n          // Create the app\n          app = express__WEBPACK_IMPORTED_MODULE_0___default()(); // Apply body parser middleware\n\n          app.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default.a.json()); // Set up db connection\n\n          _context.next = 5;\n          return Promise.all([db1, db2]);\n\n        case 5:\n          // Use router connection 1\n          app.use('/api/conn1', _api_conn1_endpoints_user__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n          app.use('/api/conn2', _api_conn2_endpoints_user__WEBPACK_IMPORTED_MODULE_5__[\"default\"]); // listen for connections\n\n          app.listen(PORT, function () {\n            console.log(\"App listening to port \".concat(4000));\n          });\n          _context.next = 13;\n          break;\n\n        case 10:\n          _context.prev = 10;\n          _context.t0 = _context[\"catch\"](0);\n          console.log(_context.t0);\n\n        case 13:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee, null, [[0, 10]]);\n}))();\n\n//# sourceURL=webpack:///./src/server.js?");

/***/ }),

/***/ 0:
/*!*********************************************!*\
  !*** multi @babel/polyfill ./src/server.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! @babel/polyfill */\"@babel/polyfill\");\nmodule.exports = __webpack_require__(/*! ./src/server.js */\"./src/server.js\");\n\n\n//# sourceURL=webpack:///multi_@babel/polyfill_./src/server.js?");

/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/polyfill\");\n\n//# sourceURL=webpack:///external_%22@babel/polyfill%22?");

/***/ }),

/***/ "@hapi/joi":
/*!****************************!*\
  !*** external "@hapi/joi" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@hapi/joi\");\n\n//# sourceURL=webpack:///external_%22@hapi/joi%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ })

/******/ });