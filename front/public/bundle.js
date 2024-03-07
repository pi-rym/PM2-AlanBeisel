/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const renderCards = __webpack_require__(/*! ./renderCards */ \"./scripts/renderCards.js\")\r\n\r\n$.get(\"https://students-api.2.us-1.fl0.io/movies\", (data) => {\r\n    renderCards(data);\r\n});\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://front/./scripts/index.js?");

/***/ }),

/***/ "./scripts/renderCards.js":
/*!********************************!*\
  !*** ./scripts/renderCards.js ***!
  \********************************/
/***/ ((module) => {

eval("\r\nconst div = document.getElementById(\"div2\");\r\n\r\nconst renderCards = (data) => {\r\n    data.map(obj => {\r\n    \r\n    const contenedorPeli = document.createElement(\"div\");\r\n    contenedorPeli.classList.add(\"card\"); \r\n    \r\n    const poster = document.createElement(\"img\");\r\n    poster.classList.add(\"card-img-top\") \r\n    poster.src = obj.poster;\r\n    \r\n    const contenedorInfo = document.createElement(\"div\");\r\n    contenedorInfo.classList.add(\"card-body\")\r\n    \r\n    const movieTitleLink = document.createElement(\"a\");\r\n    movieTitleLink.textContent = obj.title; \r\n    movieTitleLink.href = \"#\";\r\n    movieTitleLink.classList.add(\"link-peli\")\r\n    \r\n    const movieTitle = document.createElement(\"h5\");\r\n    movieTitle.classList.add(\"card-title\");\r\n    \r\n    const movieYear = document.createElement(\"p\");\r\n    movieYear.textContent = \"Año: \" + obj.year;\r\n    movieYear.classList.add(\"card-text\") \r\n    \r\n    const movieDirector = document.createElement(\"p\");\r\n    movieDirector.textContent = \"Director: \" + obj.director;\r\n    movieDirector.classList.add(\"card-text\")\r\n    \r\n    \r\n    contenedorPeli.appendChild(poster);\r\n    contenedorPeli.appendChild(contenedorInfo)\r\n    contenedorInfo.appendChild(movieTitle);\r\n    contenedorInfo.appendChild(movieYear);\r\n    contenedorInfo.appendChild(movieDirector);\r\n    movieTitle.appendChild(movieTitleLink);\r\n    \r\n    div.appendChild(contenedorPeli);\r\n    });\r\n    \r\n    };\r\n\r\n    module.exports = renderCards;\n\n//# sourceURL=webpack://front/./scripts/renderCards.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/index.js");
/******/ 	
/******/ })()
;