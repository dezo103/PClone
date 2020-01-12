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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nlet fillTool = document.querySelector('.item__fill');\r\nfillTool.addEventListener('click', fillCanvas);\r\n\r\nlet pencilTool = document.querySelector('.item__pencil');\r\npencilTool.addEventListener('click', drawInCanvas(6));\r\n\r\nlet pencilX1 = document.querySelector('.item__pencil-size-1');\r\npencilX1.addEventListener('click', () => {\r\n    drawInCanvas(5);\r\n});\r\n\r\nlet pencilX2 = document.querySelector('.item__pencil-size-2');\r\npencilX2.addEventListener('click', () => {\r\n    drawInCanvas(32);\r\n});\r\n\r\nlet pencilX3 = document.querySelector('.item__pencil-size-3');\r\npencilX3.addEventListener('click', () => {\r\n    drawInCanvas(64);\r\n});\r\n\r\n\r\nfunction fillCanvas() {\r\n    let canvas = document.querySelector('canvas'); \r\n    let ctx = canvas.getContext('2d');\r\n    let width = 512;\r\n    let height = 512;\r\n    canvas.width = width;\r\n    canvas.height = height;\r\n\r\n    for(let row = 0; row < height; row++) {\r\n        for(let col = 0; col < width; col++) { \r\n            ctx.fillStyle = colorWell.value;\r\n            ctx.fillRect(0, 0, canvas.width, canvas.height);                \r\n        }\r\n    } \r\n    \r\n}\r\n\r\nlet ctx = canvas.getContext('2d');\r\nlet width = 512;\r\nlet height = 512;\r\ncanvas.width = width;\r\ncanvas.height = height;\r\n\r\n\r\nfunction drawInCanvas(lineWidth) {\r\n  \r\n    let toDraw = false;\r\n   \r\n    canvas.addEventListener('mousedown', function () {\r\n        toDraw = true;\r\n    });\r\n\r\n    canvas.addEventListener('mouseup', function() {\r\n        toDraw = false;\r\n    });\r\n\r\n    canvas.addEventListener('mousemove', function(e) {\r\n\r\n        if(toDraw){\r\n            ctx.fillStyle = colorWell.value;\r\n            ctx.fillRect(e.offsetX, e.offsetY, lineWidth, lineWidth);\r\n\r\n        }\r\n        else {\r\n            return;\r\n        }\r\n    });\r\n\r\n}\r\n\r\n\r\n\r\nlet palleteColorRed = document.querySelector('.item__red');\r\npalleteColorRed.addEventListener('click', ()=>{\r\n    colorWell.value = '#ff0000';\r\n    let currentColorHTMLCircle = document.querySelector('.item__current-color');\r\n    currentColorHTMLCircle.style.color = colorWell.value;\r\n});\r\n\r\nlet palleteColorBlue = document.querySelector('.item__blue');\r\npalleteColorBlue.addEventListener('click', ()=>{\r\n    colorWell.value = '#0000ff';\r\n    let currentColorHTMLCircle = document.querySelector('.item__current-color');\r\n    currentColorHTMLCircle.style.color = colorWell.value;\r\n});\r\n\r\n\r\n\r\nlet colorWell;\r\nlet defaultColor = '#008000';\r\n\r\n\r\nwindow.addEventListener('load', startup, false);\r\n\r\nfunction startup(){\r\n    colorWell = document.querySelector('#color-choose');\r\n    colorWell.value = defaultColor;\r\n    colorWell.value = localStorage.getItem('lastColor');\r\n\r\n\r\n    let currentColorHTMLCircle = document.querySelector('.item__current-color');\r\n    currentColorHTMLCircle.style.color = colorWell.value;\r\n\r\n\r\n    colorWell.addEventListener('input', updateFirst, false);\r\n}\r\n\r\nfunction updateFirst() {\r\n    let currentColorHTMLCircle = document.querySelector('.item__current-color');\r\n    currentColorHTMLCircle.style.color = colorWell.value;\r\n    localStorage.setItem('lastColor', colorWell.value);\r\n}\r\n\r\n\r\ndocument.addEventListener('keydown', function(event) {\r\n    switch(event.code){\r\n        case 'KeyS':\r\n            (document.querySelector('#color-choose')).click()\r\n            break;\r\n        case 'KeyA':\r\n            fillCanvas()\r\n            break;\r\n        case 'KeyD':\r\n            drawInCanvas()\r\n            break;\r\n        default:\r\n            break;\r\n    }\r\n  });\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL3N0eWxlLnNjc3NcIlxyXG5cclxubGV0IGZpbGxUb29sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW1fX2ZpbGwnKTtcclxuZmlsbFRvb2wuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmaWxsQ2FudmFzKTtcclxuXHJcbmxldCBwZW5jaWxUb29sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW1fX3BlbmNpbCcpO1xyXG5wZW5jaWxUb29sLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZHJhd0luQ2FudmFzKDYpKTtcclxuXHJcbmxldCBwZW5jaWxYMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtX19wZW5jaWwtc2l6ZS0xJyk7XHJcbnBlbmNpbFgxLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgZHJhd0luQ2FudmFzKDUpO1xyXG59KTtcclxuXHJcbmxldCBwZW5jaWxYMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtX19wZW5jaWwtc2l6ZS0yJyk7XHJcbnBlbmNpbFgyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgZHJhd0luQ2FudmFzKDMyKTtcclxufSk7XHJcblxyXG5sZXQgcGVuY2lsWDMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbV9fcGVuY2lsLXNpemUtMycpO1xyXG5wZW5jaWxYMy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGRyYXdJbkNhbnZhcyg2NCk7XHJcbn0pO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGZpbGxDYW52YXMoKSB7XHJcbiAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzJyk7IFxyXG4gICAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgbGV0IHdpZHRoID0gNTEyO1xyXG4gICAgbGV0IGhlaWdodCA9IDUxMjtcclxuICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcclxuXHJcbiAgICBmb3IobGV0IHJvdyA9IDA7IHJvdyA8IGhlaWdodDsgcm93KyspIHtcclxuICAgICAgICBmb3IobGV0IGNvbCA9IDA7IGNvbCA8IHdpZHRoOyBjb2wrKykgeyBcclxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yV2VsbC52YWx1ZTtcclxuICAgICAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0gXHJcbiAgICBcclxufVxyXG5cclxubGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5sZXQgd2lkdGggPSA1MTI7XHJcbmxldCBoZWlnaHQgPSA1MTI7XHJcbmNhbnZhcy53aWR0aCA9IHdpZHRoO1xyXG5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuXHJcbmZ1bmN0aW9uIGRyYXdJbkNhbnZhcyhsaW5lV2lkdGgpIHtcclxuICBcclxuICAgIGxldCB0b0RyYXcgPSBmYWxzZTtcclxuICAgXHJcbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRvRHJhdyA9IHRydWU7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRvRHJhdyA9IGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGZ1bmN0aW9uKGUpIHtcclxuXHJcbiAgICAgICAgaWYodG9EcmF3KXtcclxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yV2VsbC52YWx1ZTtcclxuICAgICAgICAgICAgY3R4LmZpbGxSZWN0KGUub2Zmc2V0WCwgZS5vZmZzZXRZLCBsaW5lV2lkdGgsIGxpbmVXaWR0aCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG5sZXQgcGFsbGV0ZUNvbG9yUmVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW1fX3JlZCcpO1xyXG5wYWxsZXRlQ29sb3JSZWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgY29sb3JXZWxsLnZhbHVlID0gJyNmZjAwMDAnO1xyXG4gICAgbGV0IGN1cnJlbnRDb2xvckhUTUxDaXJjbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbV9fY3VycmVudC1jb2xvcicpO1xyXG4gICAgY3VycmVudENvbG9ySFRNTENpcmNsZS5zdHlsZS5jb2xvciA9IGNvbG9yV2VsbC52YWx1ZTtcclxufSk7XHJcblxyXG5sZXQgcGFsbGV0ZUNvbG9yQmx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtX19ibHVlJyk7XHJcbnBhbGxldGVDb2xvckJsdWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgY29sb3JXZWxsLnZhbHVlID0gJyMwMDAwZmYnO1xyXG4gICAgbGV0IGN1cnJlbnRDb2xvckhUTUxDaXJjbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbV9fY3VycmVudC1jb2xvcicpO1xyXG4gICAgY3VycmVudENvbG9ySFRNTENpcmNsZS5zdHlsZS5jb2xvciA9IGNvbG9yV2VsbC52YWx1ZTtcclxufSk7XHJcblxyXG5cclxuXHJcbmxldCBjb2xvcldlbGw7XHJcbmxldCBkZWZhdWx0Q29sb3IgPSAnIzAwODAwMCc7XHJcblxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBzdGFydHVwLCBmYWxzZSk7XHJcblxyXG5mdW5jdGlvbiBzdGFydHVwKCl7XHJcbiAgICBjb2xvcldlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29sb3ItY2hvb3NlJyk7XHJcbiAgICBjb2xvcldlbGwudmFsdWUgPSBkZWZhdWx0Q29sb3I7XHJcbiAgICBjb2xvcldlbGwudmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFzdENvbG9yJyk7XHJcblxyXG5cclxuICAgIGxldCBjdXJyZW50Q29sb3JIVE1MQ2lyY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW1fX2N1cnJlbnQtY29sb3InKTtcclxuICAgIGN1cnJlbnRDb2xvckhUTUxDaXJjbGUuc3R5bGUuY29sb3IgPSBjb2xvcldlbGwudmFsdWU7XHJcblxyXG5cclxuICAgIGNvbG9yV2VsbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHVwZGF0ZUZpcnN0LCBmYWxzZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUZpcnN0KCkge1xyXG4gICAgbGV0IGN1cnJlbnRDb2xvckhUTUxDaXJjbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbV9fY3VycmVudC1jb2xvcicpO1xyXG4gICAgY3VycmVudENvbG9ySFRNTENpcmNsZS5zdHlsZS5jb2xvciA9IGNvbG9yV2VsbC52YWx1ZTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsYXN0Q29sb3InLCBjb2xvcldlbGwudmFsdWUpO1xyXG59XHJcblxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBzd2l0Y2goZXZlbnQuY29kZSl7XHJcbiAgICAgICAgY2FzZSAnS2V5Uyc6XHJcbiAgICAgICAgICAgIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29sb3ItY2hvb3NlJykpLmNsaWNrKClcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnS2V5QSc6XHJcbiAgICAgICAgICAgIGZpbGxDYW52YXMoKVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdLZXlEJzpcclxuICAgICAgICAgICAgZHJhd0luQ2FudmFzKClcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG5cclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGUuc2Nzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZS5zY3NzP2JjM2IiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/style.scss\n");

/***/ })

/******/ });