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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar OfficeSlider = /** @class */ (function () {\n    function OfficeSlider() {\n        var _this = this;\n        // console.log('office slider start')\n        this.parent = document.getElementById('office-slider');\n        this.stop = false;\n        this.count = 1;\n        this.max = Number(this.parent.dataset.slide);\n        var child = this.parent.children[0];\n        this.width = child.offsetWidth;\n        this.height = child.offsetHeight;\n        this.parent.style.width = this.width + 'px';\n        this.parent.style.height = this.height + 'px';\n        this.parent.style.overflow = 'hidden';\n        this.parent.style.position = 'relative';\n        var childimg = child.children[0];\n        this.src = childimg.src;\n        this.wrap = document.createElement('div');\n        this.wrap.style.width = (this.width * this.max) + 'px';\n        this.wrap.style.height = this.height + 'px';\n        this.wrap.style.transition = (this.parent.dataset.anime ? this.parent.dataset.anime : 'all .3s ease-in-out');\n        this.wrap.style.position = 'absolute';\n        this.wrap.style.display = 'flex';\n        this.wrap.style.flexDirection = 'row-reverse';\n        this.wrap.style.top = '0';\n        this.wrap.style.right = \"0px\";\n        var slide = function (i) {\n            var slide = document.createElement('div');\n            var img = document.createElement('img');\n            var src = _this.src;\n            src = src.replace(/(.+office-slide)([0-9]*)\\.(.+)/, '$1' + i + '.$3');\n            img.src = src;\n            slide.appendChild(img);\n            return slide;\n        };\n        for (var i = 1; i <= this.max; i++) {\n            this.wrap.appendChild(slide(i));\n        }\n        this.parent.textContent = null;\n        this.parent.appendChild(this.wrap);\n        var createBtn = function (type) {\n            var btn = document.createElement('button');\n            btn.className = 'office-slider__btn is-' + type;\n            return btn;\n        };\n        this.prevBtn = createBtn('prev');\n        this.nextBtn = createBtn('next');\n        this.parent.appendChild(this.prevBtn);\n        this.parent.appendChild(this.nextBtn);\n        this.prevBtn.addEventListener('click', function () { return _this.pagenationBtn('prev'); });\n        this.nextBtn.addEventListener('click', function () { return _this.pagenationBtn('next'); });\n        this.thumbnail = document.createElement('div');\n        this.thumbnail.className = 'office-slider__thumbnail';\n        var parentNode = this.parent.parentNode;\n        parentNode.insertBefore(this.thumbnail, this.parent.nextSibling);\n        var thumbnail = function (i) {\n            var btn = document.createElement('div');\n            btn.className = 'office-slider__thumbnail-item';\n            if (_this.count === i)\n                btn.classList.add('on');\n            var src = _this.src.replace(/(.+office-slide)([0-9]*)\\.(.+)/, '$1' + i + '.$3');\n            btn.style.backgroundImage = \"url(\" + src + \")\";\n            btn.addEventListener('click', function () { return _this.thumbnailBtn(i); });\n            return btn;\n        };\n        for (var i = 1; i <= this.max; i++) {\n            this.thumbnail.appendChild(thumbnail(i));\n        }\n    }\n    OfficeSlider.run = function () {\n        window.addEventListener('load', function () { return new OfficeSlider(); });\n    };\n    OfficeSlider.prototype.pagenationBtn = function (name) {\n        if (this.stop)\n            return;\n        // console.log('pagenation ' + name)\n        this.stop = true;\n        if (name === 'next') {\n            this.count++;\n            if (this.count > this.max)\n                this.count = 1;\n        }\n        if (name === 'prev') {\n            this.count--;\n            if (this.count < 1)\n                this.count = this.max;\n        }\n        // console.log('pagenation count: ' + this.count)\n        this.slideMove();\n    };\n    OfficeSlider.prototype.thumbnailBtn = function (num) {\n        if (this.stop)\n            return;\n        this.stop = true;\n        this.count = num;\n        console.log('thumbnail count: ' + this.count);\n        this.slideMove();\n    };\n    OfficeSlider.prototype.slideMove = function () {\n        var _this = this;\n        this.wrap.style.right = \"-\" + this.width * (this.count - 1) + \"px\";\n        setTimeout(function () {\n            _this.stop = false;\n        }, 500);\n        var elems = this.thumbnail.children;\n        for (var i = 0; i < (this.max); i++) {\n            elems[i].classList.contains('on') && elems[i].classList.remove('on');\n            if (i === (this.count - 1))\n                elems[i].classList.add('on');\n        }\n    };\n    return OfficeSlider;\n}());\nOfficeSlider.run();\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ })

/******/ });