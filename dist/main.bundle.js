/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./imgs/checkmark.png */ "./src/assets/imgs/checkmark.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./imgs/bin-black.png */ "./src/assets/imgs/bin-black.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./imgs/bin-grey.png */ "./src/assets/imgs/bin-grey.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./imgs/options-btn-grey.png */ "./src/assets/imgs/options-btn-grey.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./imgs/options-btn-black.png */ "./src/assets/imgs/options-btn-black.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
ul li {
    list-style-type: none;
}
button:hover {
    cursor: pointer;
}

#app-container {
    display: flex;
    justify-content: space-between;
    min-height: 100vh;
}
#project-container {
    display: flex;
    flex-direction: column;
    flex-basis: 20%;
    max-width: 20%; 
    align-items: center;
}
#project-container > .title {
    flex-basis: 1.5em;
}
#project-list {
    width: 100%;
}
#project-list li {
    background-color: cyan;
    color: black;
    padding: 0.5em;
    margin: 0.1em;
    font-weight: 500;
    font-size: 1.1em;
    font-family: 'Courier New', Courier, monospace;
}
#project-list li:hover {
    background-color: lightgrey;
    cursor: pointer;;
}
#task-container {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: flex-start;
    padding-left: 2em;
    background-color: rgba(242, 242, 242, 0.8);
}
#task-list {
    width: 100%;
    display: flex;
    flex-direction: column;
}
#task-list li {
    display: flex;
    align-items: center;
    width: 80%;
    padding: 1em;
    margin: 0.1em;
    font-size: 1.1em;
    border: 1px solid grey;
    border-radius: 5px;
}
.checked {
    background-color: lightgrey;
}
.task-completion-btn {
    justify-self: start;
    width: 1.5em;
    height: 1.5em;
    border: 1px solid grey;
    background-color: transparent;
}
.task-completion-btn:hover {
    background-color: lightgrey;
}
.task-completion-btn-checked {
    width: 1.5em;
    height: 1.5em;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: cover;
    background-position: center;
    border: none;
}
.task-completion-btn-checked{
    background-color: transparent;
}
.task-text-checked {
    text-decoration: line-through;
}
.delete-btn {
    justify-self: end;
    width: 1.5em;
    height: 1.5em;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-size: cover;
    background-position: center;
    background-color: transparent;
    outline: none;
    border: none;
}
.delete-btn-checked {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}

#task-list li p {
    flex-grow: 1;
    margin: 0 1em;
}
.text-btn {
    border: 1px solid black;
    background-color: transparent;
    padding: 1em;
    font-weight: bolder;
    font-family: 'cursive';
    margin: 0.5em 0;
    min-width: 10em;
}
.text-btn:hover {
    background-color: lightgray;
}
.title {
    text-align: center;
    margin: 0.5em 0;
}
.subtitle {
    font-size: 1.3em;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.7);
}
.title-container {
    display: flex;
    flex-basis: 1.5em;
    flex-direction: column;
    align-items: start;
    max-height: 5em;
}
.title-container-secondary {
    display: flex;
    align-items: end;
}
.title-container-secondary > .title {
    margin-top: 0.5em;
    margin-bottom: 0;
}
.options-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
.options-btn {
    min-width: 3em;
    min-height: 3em;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
.options-btn:hover {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
    transform: scale(0.75); /* black png is bigger than grey png so appears larger, scaling down to make it same size */
}
.options-menu {
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    position: absolute;
    left: 1em;
    top: 100%;
}
.options-menu button {
    padding: 1em 2em;
    font-weight: bolder;
    font-size: 1em;
    background-color: white;
    outline: none;
    border: none;
}
.options-menu button:hover {
    background-color: lightgrey;
}
.hide {
    display: none;
}

.modal-primary-container{
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
}
.modal-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}
.modal {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 80%;
    max-width: 1000px;
    min-height: 30%;
    background-color: white;
    font-family: 'Courier New', Courier, monospace;
    padding: 1em;
}
.modal-title-container {
    display: flex;
    flex-direction: column;
    margin: 1em;
}
.modal-title-input {
    resize: none;
    width: 100%;
    padding: 0.5em 1em;
}
.modal-desc-container {
    display: flex;
    flex-direction: column;
    margin: 1em;
}
.modal-desc-input {
    width: 100%;
    height: 5em;
    resize: none;
    padding: 0.5em 1em;
}
.modal-btn-container {
    display: flex;
    justify-content: center;
    margin: 1em;
}
.cancel-btn, .submit-btn {
    width: 10em;
    margin: 0 1em;
}`, "",{"version":3,"sources":["webpack://./src/assets/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;AACA;IACI,qBAAqB;AACzB;AACA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,eAAe;IACf,cAAc;IACd,mBAAmB;AACvB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,WAAW;AACf;AACA;IACI,sBAAsB;IACtB,YAAY;IACZ,cAAc;IACd,aAAa;IACb,gBAAgB;IAChB,gBAAgB;IAChB,8CAA8C;AAClD;AACA;IACI,2BAA2B;IAC3B,eAAe;AACnB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,uBAAuB;IACvB,iBAAiB;IACjB,0CAA0C;AAC9C;AACA;IACI,WAAW;IACX,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,UAAU;IACV,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,sBAAsB;IACtB,kBAAkB;AACtB;AACA;IACI,2BAA2B;AAC/B;AACA;IACI,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,6BAA6B;AACjC;AACA;IACI,2BAA2B;AAC/B;AACA;IACI,YAAY;IACZ,aAAa;IACb,yDAA6C;IAC7C,sBAAsB;IACtB,2BAA2B;IAC3B,YAAY;AAChB;AACA;IACI,6BAA6B;AACjC;AACA;IACI,6BAA6B;AACjC;AACA;IACI,iBAAiB;IACjB,YAAY;IACZ,aAAa;IACb,yDAA6C;IAC7C,sBAAsB;IACtB,2BAA2B;IAC3B,6BAA6B;IAC7B,aAAa;IACb,YAAY;AAChB;AACA;IACI,yDAA4C;AAChD;;AAEA;IACI,YAAY;IACZ,aAAa;AACjB;AACA;IACI,uBAAuB;IACvB,6BAA6B;IAC7B,YAAY;IACZ,mBAAmB;IACnB,sBAAsB;IACtB,eAAe;IACf,eAAe;AACnB;AACA;IACI,2BAA2B;AAC/B;AACA;IACI,kBAAkB;IAClB,eAAe;AACnB;AACA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,yBAAyB;AAC7B;AACA;IACI,aAAa;IACb,iBAAiB;IACjB,sBAAsB;IACtB,kBAAkB;IAClB,eAAe;AACnB;AACA;IACI,aAAa;IACb,gBAAgB;AACpB;AACA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;AACtB;AACA;IACI,cAAc;IACd,eAAe;IACf,yDAAoD;IACpD,sBAAsB;IACtB,2BAA2B;IAC3B,4BAA4B;AAChC;AACA;IACI,yDAAqD;IACrD,sBAAsB,EAAE,2FAA2F;AACvH;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,kBAAkB;IAClB,SAAS;IACT,SAAS;AACb;AACA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,cAAc;IACd,uBAAuB;IACvB,aAAa;IACb,YAAY;AAChB;AACA;IACI,2BAA2B;AAC/B;AACA;IACI,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,UAAU;IACV,OAAO;IACP,MAAM;IACN,WAAW;IACX,YAAY;IACZ,cAAc;IACd,oCAAoC;AACxC;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,YAAY;AAChB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,UAAU;IACV,iBAAiB;IACjB,eAAe;IACf,uBAAuB;IACvB,8CAA8C;IAC9C,YAAY;AAChB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;AACf;AACA;IACI,YAAY;IACZ,WAAW;IACX,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;AACf;AACA;IACI,WAAW;IACX,WAAW;IACX,YAAY;IACZ,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,WAAW;AACf;AACA;IACI,WAAW;IACX,aAAa;AACjB","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\nul li {\n    list-style-type: none;\n}\nbutton:hover {\n    cursor: pointer;\n}\n\n#app-container {\n    display: flex;\n    justify-content: space-between;\n    min-height: 100vh;\n}\n#project-container {\n    display: flex;\n    flex-direction: column;\n    flex-basis: 20%;\n    max-width: 20%; \n    align-items: center;\n}\n#project-container > .title {\n    flex-basis: 1.5em;\n}\n#project-list {\n    width: 100%;\n}\n#project-list li {\n    background-color: cyan;\n    color: black;\n    padding: 0.5em;\n    margin: 0.1em;\n    font-weight: 500;\n    font-size: 1.1em;\n    font-family: 'Courier New', Courier, monospace;\n}\n#project-list li:hover {\n    background-color: lightgrey;\n    cursor: pointer;;\n}\n#task-container {\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n    align-items: flex-start;\n    padding-left: 2em;\n    background-color: rgba(242, 242, 242, 0.8);\n}\n#task-list {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n}\n#task-list li {\n    display: flex;\n    align-items: center;\n    width: 80%;\n    padding: 1em;\n    margin: 0.1em;\n    font-size: 1.1em;\n    border: 1px solid grey;\n    border-radius: 5px;\n}\n.checked {\n    background-color: lightgrey;\n}\n.task-completion-btn {\n    justify-self: start;\n    width: 1.5em;\n    height: 1.5em;\n    border: 1px solid grey;\n    background-color: transparent;\n}\n.task-completion-btn:hover {\n    background-color: lightgrey;\n}\n.task-completion-btn-checked {\n    width: 1.5em;\n    height: 1.5em;\n    background-image: url('./imgs/checkmark.png');\n    background-size: cover;\n    background-position: center;\n    border: none;\n}\n.task-completion-btn-checked{\n    background-color: transparent;\n}\n.task-text-checked {\n    text-decoration: line-through;\n}\n.delete-btn {\n    justify-self: end;\n    width: 1.5em;\n    height: 1.5em;\n    background-image: url('./imgs/bin-black.png');\n    background-size: cover;\n    background-position: center;\n    background-color: transparent;\n    outline: none;\n    border: none;\n}\n.delete-btn-checked {\n    background-image: url('./imgs/bin-grey.png');\n}\n\n#task-list li p {\n    flex-grow: 1;\n    margin: 0 1em;\n}\n.text-btn {\n    border: 1px solid black;\n    background-color: transparent;\n    padding: 1em;\n    font-weight: bolder;\n    font-family: 'cursive';\n    margin: 0.5em 0;\n    min-width: 10em;\n}\n.text-btn:hover {\n    background-color: lightgray;\n}\n.title {\n    text-align: center;\n    margin: 0.5em 0;\n}\n.subtitle {\n    font-size: 1.3em;\n    font-weight: 500;\n    color: rgba(0, 0, 0, 0.7);\n}\n.title-container {\n    display: flex;\n    flex-basis: 1.5em;\n    flex-direction: column;\n    align-items: start;\n    max-height: 5em;\n}\n.title-container-secondary {\n    display: flex;\n    align-items: end;\n}\n.title-container-secondary > .title {\n    margin-top: 0.5em;\n    margin-bottom: 0;\n}\n.options-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n}\n.options-btn {\n    min-width: 3em;\n    min-height: 3em;\n    background-image: url('./imgs/options-btn-grey.png');\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n}\n.options-btn:hover {\n    background-image: url('./imgs/options-btn-black.png');\n    transform: scale(0.75); /* black png is bigger than grey png so appears larger, scaling down to make it same size */\n}\n.options-menu {\n    display: flex;\n    flex-direction: column;\n    border: 1px solid black;\n    position: absolute;\n    left: 1em;\n    top: 100%;\n}\n.options-menu button {\n    padding: 1em 2em;\n    font-weight: bolder;\n    font-size: 1em;\n    background-color: white;\n    outline: none;\n    border: none;\n}\n.options-menu button:hover {\n    background-color: lightgrey;\n}\n.hide {\n    display: none;\n}\n\n.modal-primary-container{\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgba(0, 0, 0, 0.4);\n}\n.modal-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n}\n.modal {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    width: 80%;\n    max-width: 1000px;\n    min-height: 30%;\n    background-color: white;\n    font-family: 'Courier New', Courier, monospace;\n    padding: 1em;\n}\n.modal-title-container {\n    display: flex;\n    flex-direction: column;\n    margin: 1em;\n}\n.modal-title-input {\n    resize: none;\n    width: 100%;\n    padding: 0.5em 1em;\n}\n.modal-desc-container {\n    display: flex;\n    flex-direction: column;\n    margin: 1em;\n}\n.modal-desc-input {\n    width: 100%;\n    height: 5em;\n    resize: none;\n    padding: 0.5em 1em;\n}\n.modal-btn-container {\n    display: flex;\n    justify-content: center;\n    margin: 1em;\n}\n.cancel-btn, .submit-btn {\n    width: 10em;\n    margin: 0 1em;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/style.css":
/*!******************************!*\
  !*** ./src/assets/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/imgs/bin-black.png":
/*!***************************************!*\
  !*** ./src/assets/imgs/bin-black.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c4f0af28c10a19fbeee1.png";

/***/ }),

/***/ "./src/assets/imgs/bin-grey.png":
/*!**************************************!*\
  !*** ./src/assets/imgs/bin-grey.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a6fd29509719f079bfd7.png";

/***/ }),

/***/ "./src/assets/imgs/checkmark.png":
/*!***************************************!*\
  !*** ./src/assets/imgs/checkmark.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a5f18e9b36d7b0d9b8c6.png";

/***/ }),

/***/ "./src/assets/imgs/options-btn-black.png":
/*!***********************************************!*\
  !*** ./src/assets/imgs/options-btn-black.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f587c2b8be786d80be09.png";

/***/ }),

/***/ "./src/assets/imgs/options-btn-grey.png":
/*!**********************************************!*\
  !*** ./src/assets/imgs/options-btn-grey.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3e14968fb2282c60d6e9.png";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/style.css */ "./src/assets/style.css");


// render html elements in dom
const body = document.querySelector('body');

// app-container
const appContainer = document.createElement('div');
appContainer.id = 'app-container';
body.appendChild(appContainer);

// modal-primary-container
const modalPrimaryContainer = document.createElement('div');
modalPrimaryContainer.classList.add('modal-primary-container', 'hide'); 
appContainer.appendChild(modalPrimaryContainer);

// modal-primary-container > modal-container
const modalContainer = document.createElement('div');
modalContainer.classList.add('modal-container');
modalPrimaryContainer.appendChild(modalContainer);

// modal > modal-content
const modal = document.createElement('div');
modal.classList.add('modal');
modalContainer.appendChild(modal);

// modal-primary-container > modal-container > modal > title-container
const modalTitleContainer = document.createElement('div');
modalTitleContainer.classList.add('modal-title-container');
modal.appendChild(modalTitleContainer);

// modal-primary-container > modal-container > modal > title-container > title-label
const titleLabel = document.createElement('label');
titleLabel.classList.add('modal-title-label');
titleLabel.for = 'title-input';
titleLabel.textContent = 'Title';
modalTitleContainer.appendChild(titleLabel);

// modal-primary-container > modal-container > modal > title-container > title-input
const titleInput = document.createElement('textarea');
titleInput.classList.add('modal-title-input');
titleInput.id = 'title-input';
modalTitleContainer.appendChild(titleInput);

// modal-primary-container > modal-container > modal > description-container
const modalDescContainer = document.createElement('div');
modalDescContainer.classList.add('modal-desc-container');
modal.appendChild(modalDescContainer);

// modal-primary-container > modal-container > modal > description-container > description-label
const descLabel = document.createElement('label');
descLabel.classList.add('modal-desc-label');
descLabel.for = 'desc-input';
descLabel.textContent = 'Description';
modalDescContainer.appendChild(descLabel);

// modal-primary-container > modal-container > modal > title-container > desc-input
const descInput = document.createElement('textarea');
descInput.classList.add('modal-desc-input');
modalDescContainer.appendChild(descInput);

// modal-primary-container > modal-container > modal > btn-container;
const modalBtnContainer = document.createElement('div');
modalBtnContainer.classList.add('modal-btn-container');
modal.appendChild(modalBtnContainer);

// modal-primary-container > modal-container > modal > cancel-btn;
const cancelBtn = document.createElement('button');
cancelBtn.classList.add('cancel-btn', 'text-btn');
cancelBtn.textContent = 'Cancel';
modalBtnContainer.appendChild(cancelBtn);

// modal-primary-container > modal-container > modal > submit-btn;
const submitBtn = document.createElement('button');
submitBtn.classList.add('submit-btn', 'text-btn');
submitBtn.textContent = 'Submit';
modalBtnContainer.appendChild(submitBtn);

// project-container
const projectContainer = document.createElement('div');
projectContainer.id = 'project-container';
appContainer.appendChild(projectContainer)

// project-container > title
const appTitle = document.createElement('h1')
appTitle.textContent = 'Project Master';
appTitle.classList.add('title');
projectContainer.appendChild(appTitle);

// project-container > new-project-btn
const newProjectBtn = document.createElement('button');
newProjectBtn.id = 'new-project-btn';
newProjectBtn.classList.add('text-btn');
newProjectBtn.textContent = '+ NEW PROJECT';
projectContainer.appendChild(newProjectBtn);

// project-container > project-list
const projectList = document.createElement('ul');
projectList.id = 'project-list';
projectContainer.appendChild(projectList);

// project-container > project-list | logic
function renderProject() {
    projectList.addEventListener('click', (e) => {
        const project = e.target;

        taskTitle.textContent = project.textContent;
        subtitle.textContent = projects[project.textContent];

        optionsMenu.classList.add('hide');
        optionsEditBtn.classList.add('hide');
        optionsDeleteBtn.classList.add('hide');
    });
}

try {
    renderProject();
}
catch (err) {
    console.error('no projects listed');
};

// new-project functions
function displayModal(submitType) {
    modalPrimaryContainer.classList.remove('hide');
    submitBtn.classList.add(submitType);
};

function hideModal() {
    modalPrimaryContainer.classList.add('hide');
    
    if (submitBtn.classList.contains('add-project')) {
        submitBtn.classList.remove('add-project');
    } else if (submitBtn.classList.contains('edit-project')) {
        submitBtn.classList.remove('edit-project');
    };

    optionsMenu.classList.add('hide');
    optionsEditBtn.classList.add('hide');
    optionsDeleteBtn.classList.add('hide');
}

function addProject() {
    // add to projects obj
    projects[titleInput.value] = descInput.value;
    console.log(projects);
    
    // render html element
    const projectListItem = document.createElement('li');
    projectListItem.textContent = titleInput.value;
    projectListItem.dataset.project = titleInput.value;
    projectList.appendChild(projectListItem);

    // update task-title and subtitle
    taskTitle.textContent = titleInput.value;
    subtitle.textContent = descInput.value;

    // clear modal
    titleInput.value = '';
    descInput.value = '';
    hideModal();
};

// projects obj
let projects = {};

// project-container > new-project-btn | logic
newProjectBtn.addEventListener('click', () => {
    displayModal('add-project');
    cancelBtn.addEventListener('click', hideModal);
    submitBtn.addEventListener('click', () => {
        if (submitBtn.classList.contains('add-project')) {
            addProject();
        };
    });
});

// task-container
const taskContainer = document.createElement('div');
taskContainer.id = 'task-container';
appContainer.appendChild(taskContainer);

// task-container > title-container
const titleContainer = document.createElement('div');
titleContainer.classList.add('title-container');
taskContainer.appendChild(titleContainer);

// task-container > title-container > title-container-secondary
const titleContainerSecondary = document.createElement('div');
titleContainerSecondary.classList.add('title-container-secondary');
titleContainer.appendChild(titleContainerSecondary);

// task-container > title-container > title-container-secondary > title
const taskTitle = document.createElement('h1');
taskTitle.classList.add('title');
taskTitle.textContent = 'My Project';
titleContainerSecondary.appendChild(taskTitle);

// task-container > title-container > title-container-secondary > options-container
const optionsContainer = document.createElement('div');
optionsContainer.classList.add('options-container');
titleContainerSecondary.appendChild(optionsContainer);

// task-container > title-container > title-container-secondary > options-container > options-btn
const optionsBtn = document.createElement('div');
optionsBtn.classList.add('options-btn');
optionsContainer.appendChild(optionsBtn);

// task-container > title-container > title-container-secondary > options-container > options-btn | logic
optionsBtn.addEventListener('click', () => {
    optionsMenu.classList.toggle('hide');
    optionsEditBtn.classList.toggle('hide');
    optionsDeleteBtn.classList.toggle('hide');
});

// task-container > title-container > title-container-secondary > options-container > options-menu
const optionsMenu = document.createElement('div');
optionsMenu.classList.add('options-menu', 'hide');
optionsContainer.appendChild(optionsMenu);

// task-container > title-container > title-container-secondary > options-container > options-menu > edit-btn
const optionsEditBtn = document.createElement('button');
optionsEditBtn.classList.add('hide');
optionsEditBtn.id = 'options-edit-btn';
optionsEditBtn.textContent = 'Edit';
optionsMenu.appendChild(optionsEditBtn);

// task-container > title-container > title-container-secondary > options-container > options-menu > edit-btn | logic
function editProject() {
    if (projects.length > 0) {
        // add new key to projects obj
        projects[titleInput.value] = descInput.value;
        
        // remove old key from project obj
        delete projects[taskTitle.textContent];
        console.log(projects);
        
        // update html elements
        const projectListItem = document.querySelector(`[data-project="${taskTitle.textContent}"]`);
        projectListItem.textContent = titleInput.value;
        taskTitle.textContent = titleInput.value;
        subtitle.textContent = descInput.value;
    } else {
        // update html elements
        taskTitle.textContent = titleInput.value;
        subtitle.textContent = descInput.value;
    }

    // clear modal
    titleInput.value = '';
    descInput.value = '';
    hideModal();
    optionsMenu.classList.add('hide');
    optionsEditBtn.classList.add('hide');
    optionsDeleteBtn.classList.add('hide');
};

try {
    optionsEditBtn.addEventListener('click', () => {
        displayModal('edit-project');
        submitBtn.addEventListener('click', () => {
            if (submitBtn.classList.contains('edit-project')) {
                editProject();
            };
        });
        cancelBtn.addEventListener('click', hideModal);
    });
} catch (err) {
    console.error('project does not exist');
};

// task-container > title-container > title-container-secondary > options-container > options-menu > delete-btn
const optionsDeleteBtn = document.createElement('button');
optionsDeleteBtn.classList.add('hide');
optionsDeleteBtn.id = 'options-delete-btn';
optionsDeleteBtn.textContent = 'Delete';
optionsMenu.appendChild(optionsDeleteBtn);

// task-container > title-container > title-container-secondary > options-container > options-menu > delete-btn | logic
function deleteProject() {
    // delete key value pair from projects obj
    delete projects[taskTitle.textContent];

    // remove project from project-list
    const projectListItem = document.querySelector(`[data-project="${taskTitle.textContent}"]`);
    projectListItem.remove();

    // reset task-title and subtitle to default
    taskTitle.textContent = 'My Project';
    subtitle.textContent = 'Rest and recreation';
};

try {
    optionsDeleteBtn.addEventListener('click', deleteProject);
} catch (err) {
    console.error('project does not exist');
};

// task-conatiner > title-container > subtitle
const subtitle = document.createElement('p');
subtitle.classList.add('subtitle');
subtitle.textContent = 'Rest and recreation';
titleContainer.appendChild(subtitle);

// task-container > new-task-btn
const newTaskBtn = document.createElement('button');
newTaskBtn.id = 'new-task-btn';
newTaskBtn.classList.add('text-btn');
newTaskBtn.textContent = '+ NEW TASK';
taskContainer.appendChild(newTaskBtn);

// task-container > new-task-btn | logic
function renderTaskListItem() {
    const taskListItem = document.createElement('li');

    const taskCompletionBtn = document.createElement('button');
    taskCompletionBtn.classList.add('task-completion-btn');
    
    const taskText = document.createElement('p');
    taskText.textContent = `My Task 1`;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');

    taskListItem.appendChild(taskCompletionBtn);
    taskListItem.appendChild(taskText);
    taskListItem.appendChild(deleteBtn);
    taskList.appendChild(taskListItem);

    return { taskListItem, taskCompletionBtn, taskText, deleteBtn };
};

try {
    newTaskBtn.addEventListener('click', () => {
        const { taskListItem, taskCompletionBtn, taskText, deleteBtn } = renderTaskListItem();
        
        taskCompletionBtn.addEventListener('click', () => {
            taskListItem.classList.toggle('checked');
            taskCompletionBtn.classList.toggle('task-completion-btn-checked');
            taskText.classList.toggle('task-text-checked');
            deleteBtn.classList.toggle('delete-btn-checked');
        });

        deleteBtn.addEventListener('click', (e) => {
            e.target.parentElement.remove();
        });
    });
}
catch (err) {
    console.error('task-list-item does not exist');
};

// task-container > task-list
const taskList = document.createElement('ul');
taskList.id = 'task-list';
taskContainer.appendChild(taskList);



// i am here
// then need to implement code for when default 'My Project' title and 'Rest and recreation' subtitle are edited, projects obj is not updated, no new project is added. Only the textContent for the title and subtitle should be changed 
//      i need to create a default project by the same name of 'My Project'. Therefore, the app loads with a project which you can edit / delete
//      i need to implement logic to remove all children under task-container (if all projects are deleted) and to render them when atleast 1 project exists. 
// then need to create a tasks obj and append this to the value of each project key in the projects obj
// then need to create a input field when adding a new task. +new task button should be repurposed to the submit button. a new task should be rendered to the task list. the list of tasks should be saved to the tasks obj for that project


})();

/******/ })()
;
//# sourceMappingURL=main.bundle.js.map