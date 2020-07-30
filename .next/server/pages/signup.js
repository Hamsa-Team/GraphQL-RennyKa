module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/signup.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Login; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction Login() {\n  const {\n    0: username,\n    1: setUsername\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  const {\n    0: password,\n    1: setPassword\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  const {\n    0: email,\n    1: setEmail\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  const {\n    0: mess,\n    1: setMess\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  const SIGNUP = _apollo_client__WEBPACK_IMPORTED_MODULE_1__[\"gql\"]`\n    mutation signup($username: String, $password: String, $email: String) {\n            signup(user: {\n                        username: $username,\n                        password: $password,\n                        email: $email\n                        }\n                )\n                         {\n    mess\n  }\n}\n    `;\n  const [signup] = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__[\"useMutation\"])(SIGNUP);\n\n  const handleSubmit = async event => {\n    event.preventDefault();\n    await signup({\n      variables: {\n        username: username,\n        password: password,\n        email: email\n      }\n    }).then(res => {\n      if (res.data.signup.mess === \"Signup successfully!\") {\n        setMess(res.data.signup.mess);\n        console.log(res.data.signup.mess);\n        setUsername('');\n        setPassword('');\n      } else {\n        setMess(res.data.signup.mess);\n      }\n    });\n  };\n\n  return __jsx(\"div\", null, __jsx(\"label\", null, \"Username\"), __jsx(\"br\", null), __jsx(\"input\", {\n    type: \"text\",\n    placeholder: \"Enter username\",\n    value: username,\n    onChange: event => setUsername(event.target.value)\n  }), __jsx(\"br\", null), __jsx(\"br\", null), __jsx(\"label\", null, \"Username\"), __jsx(\"br\", null), __jsx(\"input\", {\n    type: \"email\",\n    placeholder: \"Enter email\",\n    value: email,\n    onChange: event => setEmail(event.target.value)\n  }), __jsx(\"br\", null), __jsx(\"br\", null), __jsx(\"label\", null, \"Password\"), __jsx(\"br\", null), __jsx(\"input\", {\n    type: \"password\",\n    value: password,\n    onChange: event => setPassword(event.target.value),\n    placeholder: \"Enter password\"\n  }), __jsx(\"br\", null), __jsx(\"br\", null), __jsx(\"p\", {\n    style: {\n      color: \"red\"\n    }\n  }, mess), __jsx(\"button\", {\n    type: \"submit\",\n    onClick: handleSubmit\n  }, \"Signup\"));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zaWdudXAuanM/YmNiZiJdLCJuYW1lcyI6WyJMb2dpbiIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJ1c2VTdGF0ZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJlbWFpbCIsInNldEVtYWlsIiwibWVzcyIsInNldE1lc3MiLCJTSUdOVVAiLCJncWwiLCJzaWdudXAiLCJ1c2VNdXRhdGlvbiIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ2YXJpYWJsZXMiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLEtBQVQsR0FBaUI7QUFDNUIsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCQyxzREFBUSxDQUFDLEVBQUQsQ0FBeEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJGLHNEQUFRLENBQUMsRUFBRCxDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDRyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkosc0RBQVEsQ0FBQyxFQUFELENBQWxDO0FBQ0EsUUFBTTtBQUFBLE9BQUNLLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCTixzREFBUSxDQUFDLEVBQUQsQ0FBaEM7QUFDQSxRQUFNTyxNQUFNLEdBQUdDLGtEQUFJOzs7Ozs7Ozs7Ozs7S0FBbkI7QUFhQSxRQUFNLENBQUNDLE1BQUQsSUFBV0Msa0VBQVcsQ0FBQ0gsTUFBRCxDQUE1Qjs7QUFFQSxRQUFNSSxZQUFZLEdBQUcsTUFBT0MsS0FBUCxJQUFpQjtBQUNsQ0EsU0FBSyxDQUFDQyxjQUFOO0FBQ0EsVUFBTUosTUFBTSxDQUFDO0FBQ1RLLGVBQVMsRUFBRTtBQUNQaEIsZ0JBQVEsRUFBRUEsUUFESDtBQUVQRyxnQkFBUSxFQUFFQSxRQUZIO0FBR1BFLGFBQUssRUFBRUE7QUFIQTtBQURGLEtBQUQsQ0FBTixDQU1IWSxJQU5HLENBTUVDLEdBQUcsSUFBSTtBQUNYLFVBQUlBLEdBQUcsQ0FBQ0MsSUFBSixDQUFTUixNQUFULENBQWdCSixJQUFoQixLQUF5QixzQkFBN0IsRUFBcUQ7QUFDakRDLGVBQU8sQ0FBQ1UsR0FBRyxDQUFDQyxJQUFKLENBQVNSLE1BQVQsQ0FBZ0JKLElBQWpCLENBQVA7QUFDQWEsZUFBTyxDQUFDQyxHQUFSLENBQVlILEdBQUcsQ0FBQ0MsSUFBSixDQUFTUixNQUFULENBQWdCSixJQUE1QjtBQUNBTixtQkFBVyxDQUFDLEVBQUQsQ0FBWDtBQUNBRyxtQkFBVyxDQUFDLEVBQUQsQ0FBWDtBQUNILE9BTEQsTUFLTztBQUNISSxlQUFPLENBQUNVLEdBQUcsQ0FBQ0MsSUFBSixDQUFTUixNQUFULENBQWdCSixJQUFqQixDQUFQO0FBQ0g7QUFDSixLQWZLLENBQU47QUFnQkgsR0FsQkQ7O0FBb0JBLFNBQ0ksbUJBQ0ksZ0NBREosRUFFSSxpQkFGSixFQUdJO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsZUFBVyxFQUFDLGdCQUEvQjtBQUFnRCxTQUFLLEVBQUVQLFFBQXZEO0FBQWlFLFlBQVEsRUFBRWMsS0FBSyxJQUFJYixXQUFXLENBQUNhLEtBQUssQ0FBQ1EsTUFBTixDQUFhQyxLQUFkO0FBQS9GLElBSEosRUFJSSxpQkFKSixFQUtJLGlCQUxKLEVBTUksZ0NBTkosRUFPSSxpQkFQSixFQVFJO0FBQU8sUUFBSSxFQUFDLE9BQVo7QUFBb0IsZUFBVyxFQUFDLGFBQWhDO0FBQThDLFNBQUssRUFBRWxCLEtBQXJEO0FBQTRELFlBQVEsRUFBRVMsS0FBSyxJQUFJUixRQUFRLENBQUNRLEtBQUssQ0FBQ1EsTUFBTixDQUFhQyxLQUFkO0FBQXZGLElBUkosRUFTSSxpQkFUSixFQVVJLGlCQVZKLEVBV0ksZ0NBWEosRUFZSSxpQkFaSixFQWFJO0FBQU8sUUFBSSxFQUFDLFVBQVo7QUFBdUIsU0FBSyxFQUFFcEIsUUFBOUI7QUFBd0MsWUFBUSxFQUFFVyxLQUFLLElBQUlWLFdBQVcsQ0FBQ1UsS0FBSyxDQUFDUSxNQUFOLENBQWFDLEtBQWQsQ0FBdEU7QUFBNEYsZUFBVyxFQUFDO0FBQXhHLElBYkosRUFjSSxpQkFkSixFQWVJLGlCQWZKLEVBZ0JJO0FBQUcsU0FBSyxFQUFFO0FBQUVDLFdBQUssRUFBRTtBQUFUO0FBQVYsS0FBNkJqQixJQUE3QixDQWhCSixFQWlCSTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLFdBQU8sRUFBRU07QUFBL0IsY0FqQkosQ0FESjtBQXFCSCIsImZpbGUiOiIuL3BhZ2VzL3NpZ251cC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZU11dGF0aW9uLCBncWwgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xuICAgIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFttZXNzLCBzZXRNZXNzXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBTSUdOVVAgPSBncWxgXG4gICAgbXV0YXRpb24gc2lnbnVwKCR1c2VybmFtZTogU3RyaW5nLCAkcGFzc3dvcmQ6IFN0cmluZywgJGVtYWlsOiBTdHJpbmcpIHtcbiAgICAgICAgICAgIHNpZ251cCh1c2VyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogJHVzZXJuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6ICRwYXNzd29yZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiAkZW1haWxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgIG1lc3NcbiAgfVxufVxuICAgIGBcbiAgICBjb25zdCBbc2lnbnVwXSA9IHVzZU11dGF0aW9uKFNJR05VUCk7XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYXdhaXQgc2lnbnVwKHtcbiAgICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgZW1haWw6IGVtYWlsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zaWdudXAubWVzcyA9PT0gXCJTaWdudXAgc3VjY2Vzc2Z1bGx5IVwiKSB7XG4gICAgICAgICAgICAgICAgc2V0TWVzcyhyZXMuZGF0YS5zaWdudXAubWVzcyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEuc2lnbnVwLm1lc3MpO1xuICAgICAgICAgICAgICAgIHNldFVzZXJuYW1lKCcnKTtcbiAgICAgICAgICAgICAgICBzZXRQYXNzd29yZCgnJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldE1lc3MocmVzLmRhdGEuc2lnbnVwLm1lc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWw+VXNlcm5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHVzZXJuYW1lXCIgdmFsdWU9e3VzZXJuYW1lfSBvbkNoYW5nZT17ZXZlbnQgPT4gc2V0VXNlcm5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8bGFiZWw+VXNlcm5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBlbWFpbFwiIHZhbHVlPXtlbWFpbH0gb25DaGFuZ2U9e2V2ZW50ID0+IHNldEVtYWlsKGV2ZW50LnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGxhYmVsPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9e2V2ZW50ID0+IHNldFBhc3N3b3JkKGV2ZW50LnRhcmdldC52YWx1ZSl9IHBsYWNlaG9sZGVyPVwiRW50ZXIgcGFzc3dvcmRcIiAvPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19PnttZXNzfTwvcD5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+U2lnbnVwPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/signup.js\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiPzRjMmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGFwb2xsby9jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/client\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });