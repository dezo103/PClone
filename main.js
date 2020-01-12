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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nlet fillTool = document.querySelector('.item__fill');\r\nfillTool.addEventListener('click', fillCanvas);\r\n\r\nlet pencilTool = document.querySelector('.item__pencil');\r\npencilTool.addEventListener('click', drawInCanvas(6));\r\n\r\nlet eraserTool = document.querySelector('.item__eraser');\r\neraserTool.addEventListener('click', ()=>{\r\n    colorWell.value = '#ffffff';\r\n    currentColorHTMLCircle.style.color = colorWell.value;\r\n});\r\n\r\n\r\n\r\nlet pencilX1 = document.querySelector('.item__pencil-size-1');\r\npencilX1.addEventListener('click', () => {\r\n    drawInCanvas(5);\r\n});\r\n\r\nlet pencilX2 = document.querySelector('.item__pencil-size-2');\r\npencilX2.addEventListener('click', () => {\r\n    drawInCanvas(32);\r\n});\r\n\r\nlet pencilX3 = document.querySelector('.item__pencil-size-3');\r\npencilX3.addEventListener('click', () => {\r\n    drawInCanvas(64);\r\n});\r\n\r\n\r\nfunction fillCanvas() {\r\n    let canvas = document.querySelector('canvas'); \r\n    let ctx = canvas.getContext('2d');\r\n    let width = 512;\r\n    let height = 512;\r\n    canvas.width = width;\r\n    canvas.height = height;\r\n\r\n    for(let row = 0; row < height; row++) {\r\n        for(let col = 0; col < width; col++) { \r\n            ctx.fillStyle = colorWell.value;\r\n            ctx.fillRect(0, 0, canvas.width, canvas.height);                \r\n        }\r\n    } \r\n    \r\n}\r\n\r\nlet ctx = canvas.getContext('2d');\r\nlet width = 512;\r\nlet height = 512;\r\ncanvas.width = width;\r\ncanvas.height = height;\r\n\r\n\r\nfunction drawInCanvas(lineWidth) {\r\n    let toDraw = false;\r\n   \r\n    canvas.addEventListener('mousedown', function () {\r\n        toDraw = true;\r\n    });\r\n\r\n    canvas.addEventListener('mouseup', function() {\r\n        toDraw = false;\r\n    });\r\n\r\n\r\n    canvas.addEventListener('mousemove', function(e) {\r\n\r\n        if(toDraw){\r\n            ctx.fillStyle = colorWell.value;\r\n            ctx.fillRect(e.offsetX, e.offsetY, lineWidth, lineWidth);\r\n\r\n        }\r\n        else {\r\n            return;\r\n        }\r\n    });\r\n\r\n}\r\n\r\n\r\nlet palleteColorRed = document.querySelector('.item__red');\r\npalleteColorRed.addEventListener('click', ()=>{\r\n    colorWell.value = '#ff0000';\r\n    let currentColorHTMLCircle = document.querySelector('.item__current-color');\r\n    currentColorHTMLCircle.style.color = colorWell.value;\r\n});\r\n\r\nlet palleteColorBlue = document.querySelector('.item__blue');\r\npalleteColorBlue.addEventListener('click', ()=>{\r\n    colorWell.value = '#0000ff';\r\n    let currentColorHTMLCircle = document.querySelector('.item__current-color');\r\n    currentColorHTMLCircle.style.color = colorWell.value;\r\n});\r\n\r\n\r\n\r\nlet colorWell;\r\nlet defaultColor = '#008000';\r\n\r\n\r\nwindow.addEventListener('load', startup, false);\r\n\r\nfunction startup(){\r\n    colorWell = document.querySelector('#color-choose');\r\n    colorWell.value = defaultColor;\r\n    colorWell.value = localStorage.getItem('lastColor');\r\n\r\n\r\n    let currentColorHTMLCircle = document.querySelector('.item__current-color');\r\n    currentColorHTMLCircle.style.color = colorWell.value;\r\n\r\n\r\n    colorWell.addEventListener('input', updateFirst, false);\r\n}\r\n\r\nfunction updateFirst() {\r\n    let currentColorHTMLCircle = document.querySelector('.item__current-color');\r\n    currentColorHTMLCircle.style.color = colorWell.value;\r\n    localStorage.setItem('lastColor', colorWell.value);\r\n}\r\n\r\n\r\ndocument.addEventListener('keydown', function(event) {\r\n    switch(event.code){\r\n        case 'KeyS':\r\n            (document.querySelector('#color-choose')).click()\r\n            break;\r\n        case 'KeyA':\r\n            fillCanvas()\r\n            break;\r\n        case 'KeyD':\r\n            drawInCanvas()\r\n            break;\r\n        default:\r\n            break;\r\n    }\r\n  });\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL3N0eWxlLnNjc3NcIlxyXG5cclxubGV0IGZpbGxUb29sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW1fX2ZpbGwnKTtcclxuZmlsbFRvb2wuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmaWxsQ2FudmFzKTtcclxuXHJcbmxldCBwZW5jaWxUb29sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW1fX3BlbmNpbCcpO1xyXG5wZW5jaWxUb29sLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZHJhd0luQ2FudmFzKDYpKTtcclxuXHJcbmxldCBlcmFzZXJUb29sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW1fX2VyYXNlcicpO1xyXG5lcmFzZXJUb29sLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgIGNvbG9yV2VsbC52YWx1ZSA9ICcjZmZmZmZmJztcclxuICAgIGN1cnJlbnRDb2xvckhUTUxDaXJjbGUuc3R5bGUuY29sb3IgPSBjb2xvcldlbGwudmFsdWU7XHJcbn0pO1xyXG5cclxuXHJcblxyXG5sZXQgcGVuY2lsWDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbV9fcGVuY2lsLXNpemUtMScpO1xyXG5wZW5jaWxYMS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGRyYXdJbkNhbnZhcyg1KTtcclxufSk7XHJcblxyXG5sZXQgcGVuY2lsWDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbV9fcGVuY2lsLXNpemUtMicpO1xyXG5wZW5jaWxYMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGRyYXdJbkNhbnZhcygzMik7XHJcbn0pO1xyXG5cclxubGV0IHBlbmNpbFgzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW1fX3BlbmNpbC1zaXplLTMnKTtcclxucGVuY2lsWDMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBkcmF3SW5DYW52YXMoNjQpO1xyXG59KTtcclxuXHJcblxyXG5mdW5jdGlvbiBmaWxsQ2FudmFzKCkge1xyXG4gICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpOyBcclxuICAgIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIGxldCB3aWR0aCA9IDUxMjtcclxuICAgIGxldCBoZWlnaHQgPSA1MTI7XHJcbiAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XHJcblxyXG4gICAgZm9yKGxldCByb3cgPSAwOyByb3cgPCBoZWlnaHQ7IHJvdysrKSB7XHJcbiAgICAgICAgZm9yKGxldCBjb2wgPSAwOyBjb2wgPCB3aWR0aDsgY29sKyspIHsgXHJcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcldlbGwudmFsdWU7XHJcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpOyAgICAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9IFxyXG4gICAgXHJcbn1cclxuXHJcbmxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxubGV0IHdpZHRoID0gNTEyO1xyXG5sZXQgaGVpZ2h0ID0gNTEyO1xyXG5jYW52YXMud2lkdGggPSB3aWR0aDtcclxuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcclxuXHJcblxyXG5mdW5jdGlvbiBkcmF3SW5DYW52YXMobGluZVdpZHRoKSB7XHJcbiAgICBsZXQgdG9EcmF3ID0gZmFsc2U7XHJcbiAgIFxyXG4gICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0b0RyYXcgPSB0cnVlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICB0b0RyYXcgPSBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZnVuY3Rpb24oZSkge1xyXG5cclxuICAgICAgICBpZih0b0RyYXcpe1xyXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gY29sb3JXZWxsLnZhbHVlO1xyXG4gICAgICAgICAgICBjdHguZmlsbFJlY3QoZS5vZmZzZXRYLCBlLm9mZnNldFksIGxpbmVXaWR0aCwgbGluZVdpZHRoKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG59XHJcblxyXG5cclxubGV0IHBhbGxldGVDb2xvclJlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtX19yZWQnKTtcclxucGFsbGV0ZUNvbG9yUmVkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgIGNvbG9yV2VsbC52YWx1ZSA9ICcjZmYwMDAwJztcclxuICAgIGxldCBjdXJyZW50Q29sb3JIVE1MQ2lyY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW1fX2N1cnJlbnQtY29sb3InKTtcclxuICAgIGN1cnJlbnRDb2xvckhUTUxDaXJjbGUuc3R5bGUuY29sb3IgPSBjb2xvcldlbGwudmFsdWU7XHJcbn0pO1xyXG5cclxubGV0IHBhbGxldGVDb2xvckJsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbV9fYmx1ZScpO1xyXG5wYWxsZXRlQ29sb3JCbHVlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgIGNvbG9yV2VsbC52YWx1ZSA9ICcjMDAwMGZmJztcclxuICAgIGxldCBjdXJyZW50Q29sb3JIVE1MQ2lyY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW1fX2N1cnJlbnQtY29sb3InKTtcclxuICAgIGN1cnJlbnRDb2xvckhUTUxDaXJjbGUuc3R5bGUuY29sb3IgPSBjb2xvcldlbGwudmFsdWU7XHJcbn0pO1xyXG5cclxuXHJcblxyXG5sZXQgY29sb3JXZWxsO1xyXG5sZXQgZGVmYXVsdENvbG9yID0gJyMwMDgwMDAnO1xyXG5cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgc3RhcnR1cCwgZmFsc2UpO1xyXG5cclxuZnVuY3Rpb24gc3RhcnR1cCgpe1xyXG4gICAgY29sb3JXZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbG9yLWNob29zZScpO1xyXG4gICAgY29sb3JXZWxsLnZhbHVlID0gZGVmYXVsdENvbG9yO1xyXG4gICAgY29sb3JXZWxsLnZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhc3RDb2xvcicpO1xyXG5cclxuXHJcbiAgICBsZXQgY3VycmVudENvbG9ySFRNTENpcmNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtX19jdXJyZW50LWNvbG9yJyk7XHJcbiAgICBjdXJyZW50Q29sb3JIVE1MQ2lyY2xlLnN0eWxlLmNvbG9yID0gY29sb3JXZWxsLnZhbHVlO1xyXG5cclxuXHJcbiAgICBjb2xvcldlbGwuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB1cGRhdGVGaXJzdCwgZmFsc2UpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVGaXJzdCgpIHtcclxuICAgIGxldCBjdXJyZW50Q29sb3JIVE1MQ2lyY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW1fX2N1cnJlbnQtY29sb3InKTtcclxuICAgIGN1cnJlbnRDb2xvckhUTUxDaXJjbGUuc3R5bGUuY29sb3IgPSBjb2xvcldlbGwudmFsdWU7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGFzdENvbG9yJywgY29sb3JXZWxsLnZhbHVlKTtcclxufVxyXG5cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgc3dpdGNoKGV2ZW50LmNvZGUpe1xyXG4gICAgICAgIGNhc2UgJ0tleVMnOlxyXG4gICAgICAgICAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbG9yLWNob29zZScpKS5jbGljaygpXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ0tleUEnOlxyXG4gICAgICAgICAgICBmaWxsQ2FudmFzKClcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnS2V5RCc6XHJcbiAgICAgICAgICAgIGRyYXdJbkNhbnZhcygpXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuXHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

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