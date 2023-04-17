(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[9],{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperty(obj, key, value) {
  key = Object(_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toPrimitive; });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");

function _toPrimitive(input, hint) {
  if (Object(_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (Object(_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toPropertyKey; });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js");


function _toPropertyKey(arg) {
  var key = Object(_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arg, "string");
  return Object(_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key) === "symbol" ? key : String(key);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  setPrototypeOf(subClass, superClass);
}
module.exports = _inheritsLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@emotion/cache/dist/cache.browser.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@emotion/cache/dist/cache.browser.esm.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_sheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/sheet */ "./node_modules/@emotion/sheet/dist/sheet.browser.esm.js");
/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/stylis */ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js");
/* harmony import */ var _emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/weak-memoize */ "./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js");




// https://github.com/thysultan/stylis.js/tree/master/plugins/rule-sheet
// inlined to avoid umd wrapper and peerDep warnings/installing stylis
// since we use stylis after closure compiler
var delimiter = '/*|*/';
var needle = delimiter + '}';

function toSheet(block) {
  if (block) {
    Sheet.current.insert(block + '}');
  }
}

var Sheet = {
  current: null
};
var ruleSheet = function ruleSheet(context, content, selectors, parents, line, column, length, ns, depth, at) {
  switch (context) {
    // property
    case 1:
      {
        switch (content.charCodeAt(0)) {
          case 64:
            {
              // @import
              Sheet.current.insert(content + ';');
              return '';
            }
          // charcode for l

          case 108:
            {
              // charcode for b
              // this ignores label
              if (content.charCodeAt(2) === 98) {
                return '';
              }
            }
        }

        break;
      }
    // selector

    case 2:
      {
        if (ns === 0) return content + delimiter;
        break;
      }
    // at-rule

    case 3:
      {
        switch (ns) {
          // @font-face, @page
          case 102:
          case 112:
            {
              Sheet.current.insert(selectors[0] + content);
              return '';
            }

          default:
            {
              return content + (at === 0 ? delimiter : '');
            }
        }
      }

    case -2:
      {
        content.split(needle).forEach(toSheet);
      }
  }
};

var createCache = function createCache(options) {
  if (options === undefined) options = {};
  var key = options.key || 'css';
  var stylisOptions;

  if (options.prefix !== undefined) {
    stylisOptions = {
      prefix: options.prefix
    };
  }

  var stylis = new _emotion_stylis__WEBPACK_IMPORTED_MODULE_1__["default"](stylisOptions);

  if (true) {
    // $FlowFixMe
    if (/[^a-z-]/.test(key)) {
      throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
    }
  }

  var inserted = {}; // $FlowFixMe

  var container;

  {
    container = options.container || document.head;
    var nodes = document.querySelectorAll("style[data-emotion-" + key + "]");
    Array.prototype.forEach.call(nodes, function (node) {
      var attrib = node.getAttribute("data-emotion-" + key); // $FlowFixMe

      attrib.split(' ').forEach(function (id) {
        inserted[id] = true;
      });

      if (node.parentNode !== container) {
        container.appendChild(node);
      }
    });
  }

  var _insert;

  {
    stylis.use(options.stylisPlugins)(ruleSheet);

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      Sheet.current = sheet;

      if ( true && serialized.map !== undefined) {
        var map = serialized.map;
        Sheet.current = {
          insert: function insert(rule) {
            sheet.insert(rule + map);
          }
        };
      }

      stylis(selector, serialized.styles);

      if (shouldCache) {
        cache.inserted[name] = true;
      }
    };
  }

  if (true) {
    // https://esbench.com/bench/5bf7371a4cd7e6009ef61d0a
    var commentStart = /\/\*/g;
    var commentEnd = /\*\//g;
    stylis.use(function (context, content) {
      switch (context) {
        case -1:
          {
            while (commentStart.test(content)) {
              commentEnd.lastIndex = commentStart.lastIndex;

              if (commentEnd.test(content)) {
                commentStart.lastIndex = commentEnd.lastIndex;
                continue;
              }

              throw new Error('Your styles have an unterminated comment ("/*" without corresponding "*/").');
            }

            commentStart.lastIndex = 0;
            break;
          }
      }
    });
    stylis.use(function (context, content, selectors) {
      switch (context) {
        case -1:
          {
            var flag = 'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';
            var unsafePseudoClasses = content.match(/(:first|:nth|:nth-last)-child/g);

            if (unsafePseudoClasses && cache.compat !== true) {
              unsafePseudoClasses.forEach(function (unsafePseudoClass) {
                var ignoreRegExp = new RegExp(unsafePseudoClass + ".*\\/\\* " + flag + " \\*\\/");
                var ignore = ignoreRegExp.test(content);

                if (unsafePseudoClass && !ignore) {
                  console.error("The pseudo class \"" + unsafePseudoClass + "\" is potentially unsafe when doing server-side rendering. Try changing it to \"" + unsafePseudoClass.split('-child')[0] + "-of-type\".");
                }
              });
            }

            break;
          }
      }
    });
  }

  var cache = {
    key: key,
    sheet: new _emotion_sheet__WEBPACK_IMPORTED_MODULE_0__["StyleSheet"]({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  return cache;
};

/* harmony default export */ __webpack_exports__["default"] = (createCache);


/***/ }),

/***/ "./node_modules/@emotion/core/dist/core.browser.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@emotion/core/dist/core.browser.esm.js ***!
  \*************************************************************/
/*! exports provided: CacheProvider, ThemeContext, withEmotionCache, css, ClassNames, Global, createElement, jsx, keyframes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassNames", function() { return ClassNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Global", function() { return Global; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/cache */ "./node_modules/@emotion/cache/dist/cache.browser.esm.js");
/* harmony import */ var _emotion_element_04d85134_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./emotion-element-04d85134.browser.esm.js */ "./node_modules/@emotion/core/dist/emotion-element-04d85134.browser.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CacheProvider", function() { return _emotion_element_04d85134_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__["C"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return _emotion_element_04d85134_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__["T"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withEmotionCache", function() { return _emotion_element_04d85134_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__["w"]; });

/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/utils */ "./node_modules/@emotion/utils/dist/utils.browser.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/serialize.browser.esm.js");
/* harmony import */ var _emotion_sheet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/sheet */ "./node_modules/@emotion/sheet/dist/sheet.browser.esm.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/css */ "./node_modules/@emotion/css/dist/css.browser.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return _emotion_css__WEBPACK_IMPORTED_MODULE_7__["default"]; });












var jsx = function jsx(type, props) {
  var args = arguments;

  if (props == null || !_emotion_element_04d85134_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__["h"].call(props, 'css')) {
    // $FlowFixMe
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"].apply(undefined, args);
  }

  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = _emotion_element_04d85134_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__["E"];
  createElementArgArray[1] = Object(_emotion_element_04d85134_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__["c"])(type, props);

  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  } // $FlowFixMe


  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"].apply(null, createElementArgArray);
};

var warnedAboutCssPropForGlobal = false;
var Global = /* #__PURE__ */Object(_emotion_element_04d85134_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__["w"])(function (props, cache) {
  if ( true && !warnedAboutCssPropForGlobal && ( // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  props.className || props.css)) {
    console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?");
    warnedAboutCssPropForGlobal = true;
  }

  var styles = props.styles;

  if (typeof styles === 'function') {
    return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_emotion_element_04d85134_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__["T"].Consumer, null, function (theme) {
      var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_5__["serializeStyles"])([styles(theme)]);
      return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerGlobal, {
        serialized: serialized,
        cache: cache
      });
    });
  }

  var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_5__["serializeStyles"])([styles]);
  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerGlobal, {
    serialized: serialized,
    cache: cache
  });
});

// maintain place over rerenders.
// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag
var InnerGlobal = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(InnerGlobal, _React$Component);

  function InnerGlobal(props, context, updater) {
    return _React$Component.call(this, props, context, updater) || this;
  }

  var _proto = InnerGlobal.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.sheet = new _emotion_sheet__WEBPACK_IMPORTED_MODULE_6__["StyleSheet"]({
      key: this.props.cache.key + "-global",
      nonce: this.props.cache.sheet.nonce,
      container: this.props.cache.sheet.container
    }); // $FlowFixMe

    var node = document.querySelector("style[data-emotion-" + this.props.cache.key + "=\"" + this.props.serialized.name + "\"]");

    if (node !== null) {
      this.sheet.tags.push(node);
    }

    if (this.props.cache.sheet.tags.length) {
      this.sheet.before = this.props.cache.sheet.tags[0];
    }

    this.insertStyles();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.serialized.name !== this.props.serialized.name) {
      this.insertStyles();
    }
  };

  _proto.insertStyles = function insertStyles$1() {
    if (this.props.serialized.next !== undefined) {
      // insert keyframes
      Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_4__["insertStyles"])(this.props.cache, this.props.serialized.next, true);
    }

    if (this.sheet.tags.length) {
      // if this doesn't exist then it will be null so the style element will be appended
      var element = this.sheet.tags[this.sheet.tags.length - 1].nextElementSibling;
      this.sheet.before = element;
      this.sheet.flush();
    }

    this.props.cache.insert("", this.props.serialized, this.sheet, false);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.sheet.flush();
  };

  _proto.render = function render() {

    return null;
  };

  return InnerGlobal;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var keyframes = function keyframes() {
  var insertable = _emotion_css__WEBPACK_IMPORTED_MODULE_7__["default"].apply(void 0, arguments);
  var name = "animation-" + insertable.name; // $FlowFixMe

  return {
    name: name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};

var classnames = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';

  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};

function merge(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_4__["getRegisteredStyles"])(registered, registeredStyles, className);

  if (registeredStyles.length < 2) {
    return className;
  }

  return rawClassName + css(registeredStyles);
}

var Noop = function Noop() {
  return null;
};

var ClassNames = Object(_emotion_element_04d85134_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__["w"])(function (props, context) {
  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_emotion_element_04d85134_browser_esm_js__WEBPACK_IMPORTED_MODULE_3__["T"].Consumer, null, function (theme) {
    var hasRendered = false;

    var css = function css() {
      if (hasRendered && "development" !== 'production') {
        throw new Error('css can only be used during render');
      }

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_5__["serializeStyles"])(args, context.registered);

      {
        Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_4__["insertStyles"])(context, serialized, false);
      }

      return context.key + "-" + serialized.name;
    };

    var cx = function cx() {
      if (hasRendered && "development" !== 'production') {
        throw new Error('cx can only be used during render');
      }

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return merge(context.registered, css, classnames(args));
    };

    var content = {
      css: css,
      cx: cx,
      theme: theme
    };
    var ele = props.children(content);
    hasRendered = true;
    var possiblyStyleElement = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Noop, null);


    return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, possiblyStyleElement, ele);
  });
});




/***/ }),

/***/ "./node_modules/@emotion/core/dist/emotion-element-04d85134.browser.esm.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@emotion/core/dist/emotion-element-04d85134.browser.esm.js ***!
  \*********************************************************************************/
/*! exports provided: C, E, T, c, h, w */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return CacheProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return Emotion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return ThemeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createEmotionProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hasOwnProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return withEmotionCache; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/cache */ "./node_modules/@emotion/cache/dist/cache.browser.esm.js");
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/utils */ "./node_modules/@emotion/utils/dist/utils.browser.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/serialize.browser.esm.js");






var hasOwnProperty = Object.prototype.hasOwnProperty;

var EmotionCacheContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])( // we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? Object(_emotion_cache__WEBPACK_IMPORTED_MODULE_2__["default"])() : null);
var ThemeContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
var CacheProvider = EmotionCacheContext.Provider;

var withEmotionCache = function withEmotionCache(func) {
  var render = function render(props, ref) {
    return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(EmotionCacheContext.Consumer, null, function (cache) {
      return func(props, cache, ref);
    });
  }; // $FlowFixMe


  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(render);
};

// thus we only need to replace what is a valid character for JS, but not for CSS

var sanitizeIdentifier = function sanitizeIdentifier(identifier) {
  return identifier.replace(/\$/g, '-');
};

var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
var createEmotionProps = function createEmotionProps(type, props) {
  if ( true && typeof props.css === 'string' && // check if there is a css declaration
  props.css.indexOf(':') !== -1) {
    throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/css' like this: css`" + props.css + "`");
  }

  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key)) {
      newProps[key] = props[key];
    }
  }

  newProps[typePropName] = type; // TODO: check if this still works with all of those different JSX functions

  if (true) {
    var error = new Error();

    if (error.stack) {
      // chrome
      var match = error.stack.match(/at (?:Object\.|Module\.|)(?:jsx|createEmotionProps).*\n\s+at (?:Object\.|)([A-Z][A-Za-z$]+) /);

      if (!match) {
        // safari and firefox
        match = error.stack.match(/.*\n([A-Z][A-Za-z$]+)@/);
      }

      if (match) {
        newProps[labelPropName] = sanitizeIdentifier(match[1]);
      }
    }
  }

  return newProps;
};

var Noop = function Noop() {
  return null;
};

var render = function render(cache, props, theme, ref) {
  var cssProp = theme === null ? props.css : props.css(theme); // so that using `css` from `emotion` and passing the result to the css prop works
  // not passing the registered cache to serializeStyles because it would
  // make certain babel optimisations not possible

  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
    cssProp = cache.registered[cssProp];
  }

  var type = props[typePropName];
  var registeredStyles = [cssProp];
  var className = '';

  if (typeof props.className === 'string') {
    className = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["getRegisteredStyles"])(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }

  var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__["serializeStyles"])(registeredStyles);

  if ( true && serialized.name.indexOf('-') === -1) {
    var labelFromStack = props[labelPropName];

    if (labelFromStack) {
      serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__["serializeStyles"])([serialized, 'label:' + labelFromStack + ';']);
    }
  }

  var rules = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["insertStyles"])(cache, serialized, typeof type === 'string');
  className += cache.key + "-" + serialized.name;
  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && ( false || key !== labelPropName)) {
      newProps[key] = props[key];
    }
  }

  newProps.ref = ref;
  newProps.className = className;
  var ele = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(type, newProps);
  var possiblyStyleElement = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Noop, null);


  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, possiblyStyleElement, ele);
}; // eslint-disable-next-line no-undef


var Emotion = /* #__PURE__ */withEmotionCache(function (props, cache, ref) {
  if (typeof props.css === 'function') {
    return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ThemeContext.Consumer, null, function (theme) {
      return render(cache, props, theme, ref);
    });
  }

  return render(cache, props, null, ref);
});

if (true) {
  Emotion.displayName = 'EmotionCssPropInternal';
}




/***/ }),

/***/ "./node_modules/@emotion/core/package.json":
/*!*************************************************!*\
  !*** ./node_modules/@emotion/core/package.json ***!
  \*************************************************/
/*! exports provided: name, version, main, module, browser, types, files, author, license, scripts, dependencies, peerDependencies, devDependencies, repository, publishConfig, umd:main, preconstruct, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"@emotion/core\",\"version\":\"10.3.1\",\"main\":\"dist/core.cjs.js\",\"module\":\"dist/core.esm.js\",\"browser\":{\"./dist/core.cjs.js\":\"./dist/core.browser.cjs.js\",\"./dist/core.esm.js\":\"./dist/core.browser.esm.js\"},\"types\":\"types/index.d.ts\",\"files\":[\"src\",\"dist\",\"jsx-runtime\",\"jsx-dev-runtime\",\"types\"],\"author\":\"mitchellhamilton <mitchell@mitchellhamilton.me>\",\"license\":\"MIT\",\"scripts\":{\"test:typescript\":\"dtslint types\"},\"dependencies\":{\"@babel/runtime\":\"^7.5.5\",\"@emotion/cache\":\"^10.0.27\",\"@emotion/css\":\"^10.0.27\",\"@emotion/serialize\":\"^0.11.15\",\"@emotion/sheet\":\"0.9.4\",\"@emotion/utils\":\"0.11.3\"},\"peerDependencies\":{\"react\":\">=16.3.0\"},\"devDependencies\":{\"@emotion/styled\":\"^10.3.0\",\"@types/react\":\"^16.8.20\",\"dtslint\":\"^0.3.0\",\"emotion\":\"^10.0.27\",\"emotion-server\":\"^10.0.27\",\"emotion-theming\":\"^10.3.0\",\"html-tag-names\":\"^1.1.2\",\"react\":\"16.14.0\",\"svg-tag-names\":\"^1.1.1\"},\"repository\":\"https://github.com/emotion-js/emotion/tree/master/packages/core\",\"publishConfig\":{\"access\":\"public\"},\"umd:main\":\"dist/core.umd.min.js\",\"preconstruct\":{\"source\":\"src/index.js\",\"entrypoints\":[\".\",\"jsx-runtime\",\"jsx-dev-runtime\"],\"umdName\":\"emotionCore\"}}");

/***/ }),

/***/ "./node_modules/@emotion/css/dist/css.browser.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/@emotion/css/dist/css.browser.esm.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/serialize.browser.esm.js");


function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_0__["serializeStyles"])(args);
}

/* harmony default export */ __webpack_exports__["default"] = (css);


/***/ }),

/***/ "./node_modules/@emotion/hash/dist/hash.browser.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@emotion/hash/dist/hash.browser.esm.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

/* harmony default export */ __webpack_exports__["default"] = (murmur2);


/***/ }),

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/serialize/dist/serialize.browser.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@emotion/serialize/dist/serialize.browser.esm.js ***!
  \***********************************************************************/
/*! exports provided: serializeStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeStyles", function() { return serializeStyles; });
/* harmony import */ var _emotion_hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/hash */ "./node_modules/@emotion/hash/dist/hash.browser.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js");
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js");




var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_2__["default"])(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (_emotion_unitless__WEBPACK_IMPORTED_MODULE_1__["default"][key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (true) {
  var contentValuePattern = /(attr|calc|counters?|url)\(/;
  var contentValues = ['normal', 'none', 'counter', 'open-quote', 'close-quote', 'no-open-quote', 'no-close-quote', 'initial', 'inherit', 'unset'];
  var oldProcessStyleValue = processStyleValue;
  var msPattern = /^-ms-/;
  var hyphenPattern = /-(.)/g;
  var hyphenatedCache = {};

  processStyleValue = function processStyleValue(key, value) {
    if (key === 'content') {
      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        console.error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }

    var processed = oldProcessStyleValue(key, value);

    if (processed !== '' && !isCustomProperty(key) && key.indexOf('-') !== -1 && hyphenatedCache[key] === undefined) {
      hyphenatedCache[key] = true;
      console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, 'ms-').replace(hyphenPattern, function (str, _char) {
        return _char.toUpperCase();
      }) + "?");
    }

    return processed;
  };
}

var shouldWarnAboutInterpolatingClassNameFromCss = true;

function handleInterpolation(mergedProps, registered, interpolation, couldBeSelectorInterpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {
    if ( true && interpolation.toString() === 'NO_COMPONENT_SELECTOR') {
      throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
    }

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          if ( true && interpolation.map !== undefined) {
            styles += interpolation.map;
          }

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result, couldBeSelectorInterpolation);
        } else if (true) {
          console.error('Functions that are interpolated in css calls will be stringified.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
        }

        break;
      }

    case 'string':
      if (true) {
        var matched = [];
        var replaced = interpolation.replace(animationRegex, function (match, p1, p2) {
          var fakeVarName = "animation" + matched.length;
          matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, '') + "`");
          return "${" + fakeVarName + "}";
        });

        if (matched.length) {
          console.error('`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\n' + 'Instead of doing this:\n\n' + [].concat(matched, ["`" + replaced + "`"]).join('\n') + '\n\nYou should wrap it with `css` like this:\n\n' + ("css`" + replaced + "`"));
        }
      }

      break;
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];

  if ( true && couldBeSelectorInterpolation && shouldWarnAboutInterpolatingClassNameFromCss && cached !== undefined) {
    console.error('Interpolating a className from css`` is not recommended and will cause problems with composition.\n' + 'Interpolating a className from css`` will be completely unsupported in a future major version of Emotion');
    shouldWarnAboutInterpolatingClassNameFromCss = false;
  }

  return cached !== undefined && !couldBeSelectorInterpolation ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i], false);
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && "development" !== 'production') {
          throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value, false);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {
                if ( true && _key === 'undefined') {
                  console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                }

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;
var sourceMapPattern;

if (true) {
  sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//;
} // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings, false);
  } else {
    if ( true && strings[0] === undefined) {
      console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
    }

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i], styles.charCodeAt(styles.length - 1) === 46);

    if (stringMode) {
      if ( true && strings[i] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }

      styles += strings[i];
    }
  }

  var sourceMap;

  if (true) {
    styles = styles.replace(sourceMapPattern, function (match) {
      sourceMap = match;
      return '';
    });
  } // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = Object(_emotion_hash__WEBPACK_IMPORTED_MODULE_0__["default"])(styles) + identifierName;

  if (true) {
    // $FlowFixMe SerializedStyles type doesn't have toString property (and we don't want to add it)
    return {
      name: name,
      styles: styles,
      map: sourceMap,
      next: cursor,
      toString: function toString() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
  }

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};




/***/ }),

/***/ "./node_modules/@emotion/sheet/dist/sheet.browser.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@emotion/sheet/dist/sheet.browser.esm.js ***!
  \***************************************************************/
/*! exports provided: StyleSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheet", function() { return StyleSheet; });
/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  return tag;
}

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(options) {
    this.isSpeedy = options.speedy === undefined ? "development" === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      var _tag = createStyleElement(this);

      var before;

      if (this.tags.length === 0) {
        before = this.before;
      } else {
        before = this.tags[this.tags.length - 1].nextSibling;
      }

      this.container.insertBefore(_tag, before);
      this.tags.push(_tag);
    }

    var tag = this.tags[this.tags.length - 1];

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is a really hot path
        // we check the second character first because having "i"
        // as the second character will happen less often than
        // having "@" as the first character
        var isImportRule = rule.charCodeAt(1) === 105 && rule.charCodeAt(0) === 64; // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools

        sheet.insertRule(rule, // we need to insert @import rules before anything else
        // otherwise there will be an error
        // technically this means that the @import rules will
        // _usually_(not always since there could be multiple style tags)
        // be the first ones in prod and generally later in dev
        // this shouldn't really matter in the real world though
        // @import is generally only used for font faces from google fonts and etc.
        // so while this could be technically correct then it would be slower and larger
        // for a tiny bit of correctness that won't matter in the real world
        isImportRule ? 0 : sheet.cssRules.length);
      } catch (e) {
        if (true) {
          console.warn("There was a problem inserting the following rule: \"" + rule + "\"", e);
        }
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };

  return StyleSheet;
}();




/***/ }),

/***/ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/utils */ "./node_modules/@emotion/utils/dist/utils.browser.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/serialize.browser.esm.js");







var testOmitPropsOnStringTag = _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_2__["default"];

var testOmitPropsOnComponent = function testOmitPropsOnComponent(key) {
  return key !== 'theme' && key !== 'innerRef';
};

var getDefaultShouldForwardProp = function getDefaultShouldForwardProp(tag) {
  return typeof tag === 'string' && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";

var Noop = function Noop() {
  return null;
};

var createStyled = function createStyled(tag, options) {
  if (true) {
    if (tag === undefined) {
      throw new Error('You are trying to create a styled element with an undefined component.\nYou may have forgotten to import it.');
    }
  }

  var identifierName;
  var shouldForwardProp;
  var targetClassName;

  if (options !== undefined) {
    identifierName = options.label;
    targetClassName = options.target;
    shouldForwardProp = tag.__emotion_forwardProp && options.shouldForwardProp ? function (propName) {
      return tag.__emotion_forwardProp(propName) && // $FlowFixMe
      options.shouldForwardProp(propName);
    } : options.shouldForwardProp;
  }

  var isReal = tag.__emotion_real === tag;
  var baseTag = isReal && tag.__emotion_base || tag;

  if (typeof shouldForwardProp !== 'function' && isReal) {
    shouldForwardProp = tag.__emotion_forwardProp;
  }

  var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
  var shouldUseAs = !defaultShouldForwardProp('as');
  return function () {
    var args = arguments;
    var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];

    if (identifierName !== undefined) {
      styles.push("label:" + identifierName + ";");
    }

    if (args[0] == null || args[0].raw === undefined) {
      styles.push.apply(styles, args);
    } else {
      if ( true && args[0][0] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }

      styles.push(args[0][0]);
      var len = args.length;
      var i = 1;

      for (; i < len; i++) {
        if ( true && args[0][i] === undefined) {
          console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
        }

        styles.push(args[i], args[0][i]);
      }
    } // $FlowFixMe: we need to cast StatelessFunctionalComponent to our PrivateStyledComponent class


    var Styled = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["withEmotionCache"])(function (props, context, ref) {
      return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["ThemeContext"].Consumer, null, function (theme) {
        var finalTag = shouldUseAs && props.as || baseTag;
        var className = '';
        var classInterpolations = [];
        var mergedProps = props;

        if (props.theme == null) {
          mergedProps = {};

          for (var key in props) {
            mergedProps[key] = props[key];
          }

          mergedProps.theme = theme;
        }

        if (typeof props.className === 'string') {
          className = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_4__["getRegisteredStyles"])(context.registered, classInterpolations, props.className);
        } else if (props.className != null) {
          className = props.className + " ";
        }

        var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_5__["serializeStyles"])(styles.concat(classInterpolations), context.registered, mergedProps);
        var rules = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_4__["insertStyles"])(context, serialized, typeof finalTag === 'string');
        className += context.key + "-" + serialized.name;

        if (targetClassName !== undefined) {
          className += " " + targetClassName;
        }

        var finalShouldForwardProp = shouldUseAs && shouldForwardProp === undefined ? getDefaultShouldForwardProp(finalTag) : defaultShouldForwardProp;
        var newProps = {};

        for (var _key in props) {
          if (shouldUseAs && _key === 'as') continue;

          if ( // $FlowFixMe
          finalShouldForwardProp(_key)) {
            newProps[_key] = props[_key];
          }
        }

        newProps.className = className;
        newProps.ref = ref || props.innerRef;

        if ( true && props.innerRef) {
          console.error('`innerRef` is deprecated and will be removed in a future major version of Emotion, please use the `ref` prop instead' + (identifierName === undefined ? '' : " in the usage of `" + identifierName + "`"));
        }

        var ele = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(finalTag, newProps);
        var possiblyStyleElement = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Noop, null);


        return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, possiblyStyleElement, ele);
      });
    });
    Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') + ")";
    Styled.defaultProps = tag.defaultProps;
    Styled.__emotion_real = Styled;
    Styled.__emotion_base = baseTag;
    Styled.__emotion_styles = styles;
    Styled.__emotion_forwardProp = shouldForwardProp;
    Object.defineProperty(Styled, 'toString', {
      value: function value() {
        if (targetClassName === undefined && "development" !== 'production') {
          return 'NO_COMPONENT_SELECTOR';
        } // $FlowFixMe: coerce undefined to string


        return "." + targetClassName;
      }
    });

    Styled.withComponent = function (nextTag, nextOptions) {
      return createStyled(nextTag, nextOptions !== undefined ? _objectSpread({}, options || {}, {}, nextOptions) : options).apply(void 0, styles);
    };

    return Styled;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (createStyled);


/***/ }),

/***/ "./node_modules/@emotion/styled/dist/styled.browser.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@emotion/styled/dist/styled.browser.esm.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");


var tags = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

var newStyled = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"].bind();
tags.forEach(function (tagName) {
  newStyled[tagName] = newStyled(tagName);
});

/* harmony default export */ __webpack_exports__["default"] = (newStyled);


/***/ }),

/***/ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@emotion/stylis/dist/stylis.browser.esm.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ __webpack_exports__["default"] = (stylis_min);


/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);


/***/ }),

/***/ "./node_modules/@emotion/utils/dist/utils.browser.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@emotion/utils/dist/utils.browser.esm.js ***!
  \***************************************************************/
/*! exports provided: getRegisteredStyles, insertStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegisteredStyles", function() { return getRegisteredStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertStyles", function() { return insertStyles; });
var isBrowser = "object" !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className]);
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }

  if (cache.inserted[serialized.name] === undefined) {
    var current = serialized;

    do {
      var maybeStyles = cache.insert("." + className, current, cache.sheet, true);

      current = current.next;
    } while (current !== undefined);
  }
};




/***/ }),

/***/ "./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var weakMemoize = function weakMemoize(func) {
  // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
  var cache = new WeakMap();
  return function (arg) {
    if (cache.has(arg)) {
      // $FlowFixMe
      return cache.get(arg);
    }

    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (weakMemoize);


/***/ }),

/***/ "./node_modules/@mdx-js/react/dist/esm.js":
/*!************************************************!*\
  !*** ./node_modules/@mdx-js/react/dist/esm.js ***!
  \************************************************/
/*! exports provided: MDXContext, MDXProvider, mdx, useMDXComponents, withMDXComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDXContext", function() { return MDXContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDXProvider", function() { return MDXProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mdx", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMDXComponents", function() { return useMDXComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withMDXComponents", function() { return withMDXComponents; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var isFunction = function isFunction(obj) {
  return typeof obj === 'function';
};

var MDXContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});
var withMDXComponents = function withMDXComponents(Component) {
  return function (props) {
    var allComponents = useMDXComponents(props.components);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({}, props, {
      components: allComponents
    }));
  };
};
var useMDXComponents = function useMDXComponents(components) {
  var contextComponents = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(MDXContext);
  var allComponents = contextComponents;

  if (components) {
    allComponents = isFunction(components) ? components(contextComponents) : _objectSpread2(_objectSpread2({}, contextComponents), components);
  }

  return allComponents;
};
var MDXProvider = function MDXProvider(props) {
  var allComponents = useMDXComponents(props.components);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MDXContext.Provider, {
    value: allComponents
  }, props.children);
};

var TYPE_PROP_NAME = 'mdxType';
var DEFAULTS = {
  inlineCode: 'code',
  wrapper: function wrapper(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {}, children);
  }
};
var MDXCreateElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (props, ref) {
  var propComponents = props.components,
      mdxType = props.mdxType,
      originalType = props.originalType,
      parentName = props.parentName,
      etc = _objectWithoutProperties(props, ["components", "mdxType", "originalType", "parentName"]);

  var components = useMDXComponents(propComponents);
  var type = mdxType;
  var Component = components["".concat(parentName, ".").concat(type)] || components[type] || DEFAULTS[type] || originalType;

  if (propComponents) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _objectSpread2(_objectSpread2({
      ref: ref
    }, etc), {}, {
      components: propComponents
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _objectSpread2({
    ref: ref
  }, etc));
});
MDXCreateElement.displayName = 'MDXCreateElement';
function createElement (type, props) {
  var args = arguments;
  var mdxType = props && props.mdxType;

  if (typeof type === 'string' || mdxType) {
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = MDXCreateElement;
    var newProps = {};

    for (var key in props) {
      if (hasOwnProperty.call(props, key)) {
        newProps[key] = props[key];
      }
    }

    newProps.originalType = type;
    newProps[TYPE_PROP_NAME] = typeof type === 'string' ? type : mdxType;
    createElementArgArray[1] = newProps;

    for (var i = 2; i < argsLength; i++) {
      createElementArgArray[i] = args[i];
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement.apply(null, createElementArgArray);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement.apply(null, args);
}




/***/ }),

/***/ "./node_modules/@styled-system/background/dist/index.esm.js":
/*!******************************************************************!*\
  !*** ./node_modules/@styled-system/background/dist/index.esm.js ***!
  \******************************************************************/
/*! exports provided: background, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "background", function() { return background; });
/* harmony import */ var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-system/core */ "./node_modules/@styled-system/core/dist/index.esm.js");

var config = {
  background: true,
  backgroundImage: true,
  backgroundSize: true,
  backgroundPosition: true,
  backgroundRepeat: true
};
config.bgImage = config.backgroundImage;
config.bgSize = config.backgroundSize;
config.bgPosition = config.backgroundPosition;
config.bgRepeat = config.backgroundRepeat;
var background = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["system"])(config);
/* harmony default export */ __webpack_exports__["default"] = (background);


/***/ }),

/***/ "./node_modules/@styled-system/border/dist/index.esm.js":
/*!**************************************************************!*\
  !*** ./node_modules/@styled-system/border/dist/index.esm.js ***!
  \**************************************************************/
/*! exports provided: border, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "border", function() { return border; });
/* harmony import */ var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-system/core */ "./node_modules/@styled-system/core/dist/index.esm.js");

var config = {
  border: {
    property: 'border',
    scale: 'borders'
  },
  borderWidth: {
    property: 'borderWidth',
    scale: 'borderWidths'
  },
  borderStyle: {
    property: 'borderStyle',
    scale: 'borderStyles'
  },
  borderColor: {
    property: 'borderColor',
    scale: 'colors'
  },
  borderRadius: {
    property: 'borderRadius',
    scale: 'radii'
  },
  borderTop: {
    property: 'borderTop',
    scale: 'borders'
  },
  borderTopLeftRadius: {
    property: 'borderTopLeftRadius',
    scale: 'radii'
  },
  borderTopRightRadius: {
    property: 'borderTopRightRadius',
    scale: 'radii'
  },
  borderRight: {
    property: 'borderRight',
    scale: 'borders'
  },
  borderBottom: {
    property: 'borderBottom',
    scale: 'borders'
  },
  borderBottomLeftRadius: {
    property: 'borderBottomLeftRadius',
    scale: 'radii'
  },
  borderBottomRightRadius: {
    property: 'borderBottomRightRadius',
    scale: 'radii'
  },
  borderLeft: {
    property: 'borderLeft',
    scale: 'borders'
  },
  borderX: {
    properties: ['borderLeft', 'borderRight'],
    scale: 'borders'
  },
  borderY: {
    properties: ['borderTop', 'borderBottom'],
    scale: 'borders'
  }
};
config.borderTopWidth = {
  property: 'borderTopWidth',
  scale: 'borderWidths'
};
config.borderTopColor = {
  property: 'borderTopColor',
  scale: 'colors'
};
config.borderTopStyle = {
  property: 'borderTopStyle',
  scale: 'borderStyles'
};
config.borderTopLeftRadius = {
  property: 'borderTopLeftRadius',
  scale: 'radii'
};
config.borderTopRightRadius = {
  property: 'borderTopRightRadius',
  scale: 'radii'
};
config.borderBottomWidth = {
  property: 'borderBottomWidth',
  scale: 'borderWidths'
};
config.borderBottomColor = {
  property: 'borderBottomColor',
  scale: 'colors'
};
config.borderBottomStyle = {
  property: 'borderBottomStyle',
  scale: 'borderStyles'
};
config.borderBottomLeftRadius = {
  property: 'borderBottomLeftRadius',
  scale: 'radii'
};
config.borderBottomRightRadius = {
  property: 'borderBottomRightRadius',
  scale: 'radii'
};
config.borderLeftWidth = {
  property: 'borderLeftWidth',
  scale: 'borderWidths'
};
config.borderLeftColor = {
  property: 'borderLeftColor',
  scale: 'colors'
};
config.borderLeftStyle = {
  property: 'borderLeftStyle',
  scale: 'borderStyles'
};
config.borderRightWidth = {
  property: 'borderRightWidth',
  scale: 'borderWidths'
};
config.borderRightColor = {
  property: 'borderRightColor',
  scale: 'colors'
};
config.borderRightStyle = {
  property: 'borderRightStyle',
  scale: 'borderStyles'
};
var border = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["system"])(config);
/* harmony default export */ __webpack_exports__["default"] = (border);


/***/ }),

/***/ "./node_modules/@styled-system/color/dist/index.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@styled-system/color/dist/index.esm.js ***!
  \*************************************************************/
/*! exports provided: color, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
/* harmony import */ var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-system/core */ "./node_modules/@styled-system/core/dist/index.esm.js");

var config = {
  color: {
    property: 'color',
    scale: 'colors'
  },
  backgroundColor: {
    property: 'backgroundColor',
    scale: 'colors'
  },
  opacity: true
};
config.bg = config.backgroundColor;
var color = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["system"])(config);
/* harmony default export */ __webpack_exports__["default"] = (color);


/***/ }),

/***/ "./node_modules/@styled-system/core/dist/index.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/@styled-system/core/dist/index.esm.js ***!
  \************************************************************/
/*! exports provided: merge, get, createParser, createStyleFunction, system, compose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createParser", function() { return createParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStyleFunction", function() { return createStyleFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "system", function() { return system; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(object_assign__WEBPACK_IMPORTED_MODULE_0__);

var merge = function merge(a, b) {
  var result = object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, a, b);

  for (var key in a) {
    var _assign;

    if (!a[key] || typeof b[key] !== 'object') continue;
    object_assign__WEBPACK_IMPORTED_MODULE_0___default()(result, (_assign = {}, _assign[key] = object_assign__WEBPACK_IMPORTED_MODULE_0___default()(a[key], b[key]), _assign));
  }

  return result;
}; // sort object-value responsive styles

var sort = function sort(obj) {
  var next = {};
  Object.keys(obj).sort(function (a, b) {
    return a.localeCompare(b, undefined, {
      numeric: true,
      sensitivity: 'base'
    });
  }).forEach(function (key) {
    next[key] = obj[key];
  });
  return next;
};

var defaults = {
  breakpoints: [40, 52, 64].map(function (n) {
    return n + 'em';
  })
};

var createMediaQuery = function createMediaQuery(n) {
  return "@media screen and (min-width: " + n + ")";
};

var getValue = function getValue(n, scale) {
  return get(scale, n, n);
};

var get = function get(obj, key, def, p, undef) {
  key = key && key.split ? key.split('.') : [key];

  for (p = 0; p < key.length; p++) {
    obj = obj ? obj[key[p]] : undef;
  }

  return obj === undef ? def : obj;
};
var createParser = function createParser(config) {
  var cache = {};

  var parse = function parse(props) {
    var styles = {};
    var shouldSort = false;
    var isCacheDisabled = props.theme && props.theme.disableStyledSystemCache;

    for (var key in props) {
      if (!config[key]) continue;
      var sx = config[key];
      var raw = props[key];
      var scale = get(props.theme, sx.scale, sx.defaults);

      if (typeof raw === 'object') {
        cache.breakpoints = !isCacheDisabled && cache.breakpoints || get(props.theme, 'breakpoints', defaults.breakpoints);

        if (Array.isArray(raw)) {
          cache.media = !isCacheDisabled && cache.media || [null].concat(cache.breakpoints.map(createMediaQuery));
          styles = merge(styles, parseResponsiveStyle(cache.media, sx, scale, raw, props));
          continue;
        }

        if (raw !== null) {
          styles = merge(styles, parseResponsiveObject(cache.breakpoints, sx, scale, raw, props));
          shouldSort = true;
        }

        continue;
      }

      object_assign__WEBPACK_IMPORTED_MODULE_0___default()(styles, sx(raw, scale, props));
    } // sort object-based responsive styles


    if (shouldSort) {
      styles = sort(styles);
    }

    return styles;
  };

  parse.config = config;
  parse.propNames = Object.keys(config);
  parse.cache = cache;
  var keys = Object.keys(config).filter(function (k) {
    return k !== 'config';
  });

  if (keys.length > 1) {
    keys.forEach(function (key) {
      var _createParser;

      parse[key] = createParser((_createParser = {}, _createParser[key] = config[key], _createParser));
    });
  }

  return parse;
};

var parseResponsiveStyle = function parseResponsiveStyle(mediaQueries, sx, scale, raw, _props) {
  var styles = {};
  raw.slice(0, mediaQueries.length).forEach(function (value, i) {
    var media = mediaQueries[i];
    var style = sx(value, scale, _props);

    if (!media) {
      object_assign__WEBPACK_IMPORTED_MODULE_0___default()(styles, style);
    } else {
      var _assign2;

      object_assign__WEBPACK_IMPORTED_MODULE_0___default()(styles, (_assign2 = {}, _assign2[media] = object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, styles[media], style), _assign2));
    }
  });
  return styles;
};

var parseResponsiveObject = function parseResponsiveObject(breakpoints, sx, scale, raw, _props) {
  var styles = {};

  for (var key in raw) {
    var breakpoint = breakpoints[key];
    var value = raw[key];
    var style = sx(value, scale, _props);

    if (!breakpoint) {
      object_assign__WEBPACK_IMPORTED_MODULE_0___default()(styles, style);
    } else {
      var _assign3;

      var media = createMediaQuery(breakpoint);
      object_assign__WEBPACK_IMPORTED_MODULE_0___default()(styles, (_assign3 = {}, _assign3[media] = object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, styles[media], style), _assign3));
    }
  }

  return styles;
};

var createStyleFunction = function createStyleFunction(_ref) {
  var properties = _ref.properties,
      property = _ref.property,
      scale = _ref.scale,
      _ref$transform = _ref.transform,
      transform = _ref$transform === void 0 ? getValue : _ref$transform,
      defaultScale = _ref.defaultScale;
  properties = properties || [property];

  var sx = function sx(value, scale, _props) {
    var result = {};
    var n = transform(value, scale, _props);
    if (n === null) return;
    properties.forEach(function (prop) {
      result[prop] = n;
    });
    return result;
  };

  sx.scale = scale;
  sx.defaults = defaultScale;
  return sx;
}; // new v5 API

var system = function system(args) {
  if (args === void 0) {
    args = {};
  }

  var config = {};
  Object.keys(args).forEach(function (key) {
    var conf = args[key];

    if (conf === true) {
      // shortcut definition
      config[key] = createStyleFunction({
        property: key,
        scale: key
      });
      return;
    }

    if (typeof conf === 'function') {
      config[key] = conf;
      return;
    }

    config[key] = createStyleFunction(conf);
  });
  var parser = createParser(config);
  return parser;
};
var compose = function compose() {
  var config = {};

  for (var _len = arguments.length, parsers = new Array(_len), _key = 0; _key < _len; _key++) {
    parsers[_key] = arguments[_key];
  }

  parsers.forEach(function (parser) {
    if (!parser || !parser.config) return;
    object_assign__WEBPACK_IMPORTED_MODULE_0___default()(config, parser.config);
  });
  var parser = createParser(config);
  return parser;
};


/***/ }),

/***/ "./node_modules/@styled-system/css/dist/index.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/@styled-system/css/dist/index.esm.js ***!
  \***********************************************************/
/*! exports provided: get, responsive, css, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "responsive", function() { return responsive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// based on https://github.com/developit/dlv
var get = function get(obj, key, def, p, undef) {
  key = key && key.split ? key.split('.') : [key];

  for (p = 0; p < key.length; p++) {
    obj = obj ? obj[key[p]] : undef;
  }

  return obj === undef ? def : obj;
};
var defaultBreakpoints = [40, 52, 64].map(function (n) {
  return n + 'em';
});
var defaultTheme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
};
var aliases = {
  bg: 'backgroundColor',
  m: 'margin',
  mt: 'marginTop',
  mr: 'marginRight',
  mb: 'marginBottom',
  ml: 'marginLeft',
  mx: 'marginX',
  my: 'marginY',
  p: 'padding',
  pt: 'paddingTop',
  pr: 'paddingRight',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  px: 'paddingX',
  py: 'paddingY'
};
var multiples = {
  marginX: ['marginLeft', 'marginRight'],
  marginY: ['marginTop', 'marginBottom'],
  paddingX: ['paddingLeft', 'paddingRight'],
  paddingY: ['paddingTop', 'paddingBottom'],
  size: ['width', 'height']
};
var scales = {
  color: 'colors',
  backgroundColor: 'colors',
  borderColor: 'colors',
  margin: 'space',
  marginTop: 'space',
  marginRight: 'space',
  marginBottom: 'space',
  marginLeft: 'space',
  marginX: 'space',
  marginY: 'space',
  padding: 'space',
  paddingTop: 'space',
  paddingRight: 'space',
  paddingBottom: 'space',
  paddingLeft: 'space',
  paddingX: 'space',
  paddingY: 'space',
  top: 'space',
  right: 'space',
  bottom: 'space',
  left: 'space',
  gridGap: 'space',
  gridColumnGap: 'space',
  gridRowGap: 'space',
  gap: 'space',
  columnGap: 'space',
  rowGap: 'space',
  fontFamily: 'fonts',
  fontSize: 'fontSizes',
  fontWeight: 'fontWeights',
  lineHeight: 'lineHeights',
  letterSpacing: 'letterSpacings',
  border: 'borders',
  borderTop: 'borders',
  borderRight: 'borders',
  borderBottom: 'borders',
  borderLeft: 'borders',
  borderWidth: 'borderWidths',
  borderStyle: 'borderStyles',
  borderRadius: 'radii',
  borderTopRightRadius: 'radii',
  borderTopLeftRadius: 'radii',
  borderBottomRightRadius: 'radii',
  borderBottomLeftRadius: 'radii',
  borderTopWidth: 'borderWidths',
  borderTopColor: 'colors',
  borderTopStyle: 'borderStyles',
  borderBottomWidth: 'borderWidths',
  borderBottomColor: 'colors',
  borderBottomStyle: 'borderStyles',
  borderLeftWidth: 'borderWidths',
  borderLeftColor: 'colors',
  borderLeftStyle: 'borderStyles',
  borderRightWidth: 'borderWidths',
  borderRightColor: 'colors',
  borderRightStyle: 'borderStyles',
  outlineColor: 'colors',
  boxShadow: 'shadows',
  textShadow: 'shadows',
  zIndex: 'zIndices',
  width: 'sizes',
  minWidth: 'sizes',
  maxWidth: 'sizes',
  height: 'sizes',
  minHeight: 'sizes',
  maxHeight: 'sizes',
  flexBasis: 'sizes',
  size: 'sizes',
  // svg
  fill: 'colors',
  stroke: 'colors'
};

var positiveOrNegative = function positiveOrNegative(scale, value) {
  if (typeof value !== 'number' || value >= 0) {
    return get(scale, value, value);
  }

  var absolute = Math.abs(value);
  var n = get(scale, absolute, absolute);
  if (typeof n === 'string') return '-' + n;
  return n * -1;
};

var transforms = ['margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginX', 'marginY', 'top', 'bottom', 'left', 'right'].reduce(function (acc, curr) {
  var _extends2;

  return _extends({}, acc, (_extends2 = {}, _extends2[curr] = positiveOrNegative, _extends2));
}, {});
var responsive = function responsive(styles) {
  return function (theme) {
    var next = {};
    var breakpoints = get(theme, 'breakpoints', defaultBreakpoints);
    var mediaQueries = [null].concat(breakpoints.map(function (n) {
      return "@media screen and (min-width: " + n + ")";
    }));

    for (var key in styles) {
      var value = typeof styles[key] === 'function' ? styles[key](theme) : styles[key];
      if (value == null) continue;

      if (!Array.isArray(value)) {
        next[key] = value;
        continue;
      }

      for (var i = 0; i < value.slice(0, mediaQueries.length).length; i++) {
        var media = mediaQueries[i];

        if (!media) {
          next[key] = value[i];
          continue;
        }

        next[media] = next[media] || {};
        if (value[i] == null) continue;
        next[media][key] = value[i];
      }
    }

    return next;
  };
};
var css = function css(args) {
  return function (props) {
    if (props === void 0) {
      props = {};
    }

    var theme = _extends({}, defaultTheme, {}, props.theme || props);

    var result = {};
    var obj = typeof args === 'function' ? args(theme) : args;
    var styles = responsive(obj)(theme);

    for (var key in styles) {
      var x = styles[key];
      var val = typeof x === 'function' ? x(theme) : x;

      if (key === 'variant') {
        var variant = css(get(theme, val))(theme);
        result = _extends({}, result, {}, variant);
        continue;
      }

      if (val && typeof val === 'object') {
        result[key] = css(val)(theme);
        continue;
      }

      var prop = get(aliases, key, key);
      var scaleName = get(scales, prop);
      var scale = get(theme, scaleName, get(theme, prop, {}));
      var transform = get(transforms, prop, get);
      var value = transform(scale, val, val);

      if (multiples[prop]) {
        var dirs = multiples[prop];

        for (var i = 0; i < dirs.length; i++) {
          result[dirs[i]] = value;
        }
      } else {
        result[prop] = value;
      }
    }

    return result;
  };
};
/* harmony default export */ __webpack_exports__["default"] = (css);


/***/ }),

/***/ "./node_modules/@styled-system/flexbox/dist/index.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@styled-system/flexbox/dist/index.esm.js ***!
  \***************************************************************/
/*! exports provided: flexbox, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flexbox", function() { return flexbox; });
/* harmony import */ var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-system/core */ "./node_modules/@styled-system/core/dist/index.esm.js");

var config = {
  alignItems: true,
  alignContent: true,
  justifyItems: true,
  justifyContent: true,
  flexWrap: true,
  flexDirection: true,
  // item
  flex: true,
  flexGrow: true,
  flexShrink: true,
  flexBasis: true,
  justifySelf: true,
  alignSelf: true,
  order: true
};
var flexbox = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["system"])(config);
/* harmony default export */ __webpack_exports__["default"] = (flexbox);


/***/ }),

/***/ "./node_modules/@styled-system/grid/dist/index.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/@styled-system/grid/dist/index.esm.js ***!
  \************************************************************/
/*! exports provided: grid, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grid", function() { return grid; });
/* harmony import */ var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-system/core */ "./node_modules/@styled-system/core/dist/index.esm.js");

var defaults = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
};
var config = {
  gridGap: {
    property: 'gridGap',
    scale: 'space',
    defaultScale: defaults.space
  },
  gridColumnGap: {
    property: 'gridColumnGap',
    scale: 'space',
    defaultScale: defaults.space
  },
  gridRowGap: {
    property: 'gridRowGap',
    scale: 'space',
    defaultScale: defaults.space
  },
  gridColumn: true,
  gridRow: true,
  gridAutoFlow: true,
  gridAutoColumns: true,
  gridAutoRows: true,
  gridTemplateColumns: true,
  gridTemplateRows: true,
  gridTemplateAreas: true,
  gridArea: true
};
var grid = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["system"])(config);
/* harmony default export */ __webpack_exports__["default"] = (grid);


/***/ }),

/***/ "./node_modules/@styled-system/layout/dist/index.esm.js":
/*!**************************************************************!*\
  !*** ./node_modules/@styled-system/layout/dist/index.esm.js ***!
  \**************************************************************/
/*! exports provided: layout, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layout", function() { return layout; });
/* harmony import */ var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-system/core */ "./node_modules/@styled-system/core/dist/index.esm.js");


var isNumber = function isNumber(n) {
  return typeof n === 'number' && !isNaN(n);
};

var getWidth = function getWidth(n, scale) {
  return Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["get"])(scale, n, !isNumber(n) || n > 1 ? n : n * 100 + '%');
};

var config = {
  width: {
    property: 'width',
    scale: 'sizes',
    transform: getWidth
  },
  height: {
    property: 'height',
    scale: 'sizes'
  },
  minWidth: {
    property: 'minWidth',
    scale: 'sizes'
  },
  minHeight: {
    property: 'minHeight',
    scale: 'sizes'
  },
  maxWidth: {
    property: 'maxWidth',
    scale: 'sizes'
  },
  maxHeight: {
    property: 'maxHeight',
    scale: 'sizes'
  },
  size: {
    properties: ['width', 'height'],
    scale: 'sizes'
  },
  overflow: true,
  overflowX: true,
  overflowY: true,
  display: true,
  verticalAlign: true
};
var layout = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["system"])(config);
/* harmony default export */ __webpack_exports__["default"] = (layout);


/***/ }),

/***/ "./node_modules/@styled-system/position/dist/index.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/@styled-system/position/dist/index.esm.js ***!
  \****************************************************************/
/*! exports provided: position, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "position", function() { return position; });
/* harmony import */ var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-system/core */ "./node_modules/@styled-system/core/dist/index.esm.js");

var defaults = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
};
var config = {
  position: true,
  zIndex: {
    property: 'zIndex',
    scale: 'zIndices'
  },
  top: {
    property: 'top',
    scale: 'space',
    defaultScale: defaults.space
  },
  right: {
    property: 'right',
    scale: 'space',
    defaultScale: defaults.space
  },
  bottom: {
    property: 'bottom',
    scale: 'space',
    defaultScale: defaults.space
  },
  left: {
    property: 'left',
    scale: 'space',
    defaultScale: defaults.space
  }
};
var position = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["system"])(config);
/* harmony default export */ __webpack_exports__["default"] = (position);


/***/ }),

/***/ "./node_modules/@styled-system/shadow/dist/index.esm.js":
/*!**************************************************************!*\
  !*** ./node_modules/@styled-system/shadow/dist/index.esm.js ***!
  \**************************************************************/
/*! exports provided: shadow, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shadow", function() { return shadow; });
/* harmony import */ var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-system/core */ "./node_modules/@styled-system/core/dist/index.esm.js");

var shadow = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["system"])({
  boxShadow: {
    property: 'boxShadow',
    scale: 'shadows'
  },
  textShadow: {
    property: 'textShadow',
    scale: 'shadows'
  }
});
/* harmony default export */ __webpack_exports__["default"] = (shadow);


/***/ }),

/***/ "./node_modules/@styled-system/should-forward-prop/dist/index.esm.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@styled-system/should-forward-prop/dist/index.esm.js ***!
  \***************************************************************************/
/*! exports provided: props, createShouldForwardProp, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "props", function() { return props; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createShouldForwardProp", function() { return createShouldForwardProp; });
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@styled-system/should-forward-prop/node_modules/@emotion/memoize/dist/emotion-memoize.browser.esm.js");
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "./node_modules/styled-system/dist/index.esm.js");



var all = Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["compose"])(styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], styled_system__WEBPACK_IMPORTED_MODULE_2__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], styled_system__WEBPACK_IMPORTED_MODULE_2__["layout"], styled_system__WEBPACK_IMPORTED_MODULE_2__["flexbox"], styled_system__WEBPACK_IMPORTED_MODULE_2__["border"], styled_system__WEBPACK_IMPORTED_MODULE_2__["background"], styled_system__WEBPACK_IMPORTED_MODULE_2__["position"], styled_system__WEBPACK_IMPORTED_MODULE_2__["grid"], styled_system__WEBPACK_IMPORTED_MODULE_2__["shadow"], styled_system__WEBPACK_IMPORTED_MODULE_2__["buttonStyle"], styled_system__WEBPACK_IMPORTED_MODULE_2__["textStyle"], styled_system__WEBPACK_IMPORTED_MODULE_2__["colorStyle"]);
var props = all.propNames;
var createShouldForwardProp = function createShouldForwardProp(props) {
  var regex = new RegExp("^(" + props.join('|') + ")$");
  return Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
    return Object(_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_1__["default"])(prop) && !regex.test(prop);
  });
};
/* harmony default export */ __webpack_exports__["default"] = (createShouldForwardProp(props));


/***/ }),

/***/ "./node_modules/@styled-system/should-forward-prop/node_modules/@emotion/memoize/dist/emotion-memoize.browser.esm.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/@styled-system/should-forward-prop/node_modules/@emotion/memoize/dist/emotion-memoize.browser.esm.js ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/@styled-system/space/dist/index.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@styled-system/space/dist/index.esm.js ***!
  \*************************************************************/
/*! exports provided: margin, padding, space, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "margin", function() { return margin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "padding", function() { return padding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "space", function() { return space; });
/* harmony import */ var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-system/core */ "./node_modules/@styled-system/core/dist/index.esm.js");

var defaults = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
};

var isNumber = function isNumber(n) {
  return typeof n === 'number' && !isNaN(n);
};

var getMargin = function getMargin(n, scale) {
  if (!isNumber(n)) {
    return Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["get"])(scale, n, n);
  }

  var isNegative = n < 0;
  var absolute = Math.abs(n);
  var value = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["get"])(scale, absolute, absolute);

  if (!isNumber(value)) {
    return isNegative ? '-' + value : value;
  }

  return value * (isNegative ? -1 : 1);
};

var configs = {};
configs.margin = {
  margin: {
    property: 'margin',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults.space
  },
  marginTop: {
    property: 'marginTop',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults.space
  },
  marginRight: {
    property: 'marginRight',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults.space
  },
  marginBottom: {
    property: 'marginBottom',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults.space
  },
  marginLeft: {
    property: 'marginLeft',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults.space
  },
  marginX: {
    properties: ['marginLeft', 'marginRight'],
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults.space
  },
  marginY: {
    properties: ['marginTop', 'marginBottom'],
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults.space
  }
};
configs.margin.m = configs.margin.margin;
configs.margin.mt = configs.margin.marginTop;
configs.margin.mr = configs.margin.marginRight;
configs.margin.mb = configs.margin.marginBottom;
configs.margin.ml = configs.margin.marginLeft;
configs.margin.mx = configs.margin.marginX;
configs.margin.my = configs.margin.marginY;
configs.padding = {
  padding: {
    property: 'padding',
    scale: 'space',
    defaultScale: defaults.space
  },
  paddingTop: {
    property: 'paddingTop',
    scale: 'space',
    defaultScale: defaults.space
  },
  paddingRight: {
    property: 'paddingRight',
    scale: 'space',
    defaultScale: defaults.space
  },
  paddingBottom: {
    property: 'paddingBottom',
    scale: 'space',
    defaultScale: defaults.space
  },
  paddingLeft: {
    property: 'paddingLeft',
    scale: 'space',
    defaultScale: defaults.space
  },
  paddingX: {
    properties: ['paddingLeft', 'paddingRight'],
    scale: 'space',
    defaultScale: defaults.space
  },
  paddingY: {
    properties: ['paddingTop', 'paddingBottom'],
    scale: 'space',
    defaultScale: defaults.space
  }
};
configs.padding.p = configs.padding.padding;
configs.padding.pt = configs.padding.paddingTop;
configs.padding.pr = configs.padding.paddingRight;
configs.padding.pb = configs.padding.paddingBottom;
configs.padding.pl = configs.padding.paddingLeft;
configs.padding.px = configs.padding.paddingX;
configs.padding.py = configs.padding.paddingY;
var margin = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["system"])(configs.margin);
var padding = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["system"])(configs.padding);
var space = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["compose"])(margin, padding);
/* harmony default export */ __webpack_exports__["default"] = (space);


/***/ }),

/***/ "./node_modules/@styled-system/typography/dist/index.esm.js":
/*!******************************************************************!*\
  !*** ./node_modules/@styled-system/typography/dist/index.esm.js ***!
  \******************************************************************/
/*! exports provided: typography, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typography", function() { return typography; });
/* harmony import */ var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-system/core */ "./node_modules/@styled-system/core/dist/index.esm.js");

var defaults = {
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
};
var config = {
  fontFamily: {
    property: 'fontFamily',
    scale: 'fonts'
  },
  fontSize: {
    property: 'fontSize',
    scale: 'fontSizes',
    defaultScale: defaults.fontSizes
  },
  fontWeight: {
    property: 'fontWeight',
    scale: 'fontWeights'
  },
  lineHeight: {
    property: 'lineHeight',
    scale: 'lineHeights'
  },
  letterSpacing: {
    property: 'letterSpacing',
    scale: 'letterSpacings'
  },
  textAlign: true,
  fontStyle: true
};
var typography = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["system"])(config);
/* harmony default export */ __webpack_exports__["default"] = (typography);


/***/ }),

/***/ "./node_modules/@styled-system/variant/dist/index.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@styled-system/variant/dist/index.esm.js ***!
  \***************************************************************/
/*! exports provided: variant, default, buttonStyle, textStyle, colorStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "variant", function() { return variant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonStyle", function() { return buttonStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textStyle", function() { return textStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorStyle", function() { return colorStyle; });
/* harmony import */ var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-system/core */ "./node_modules/@styled-system/core/dist/index.esm.js");
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/css */ "./node_modules/@styled-system/css/dist/index.esm.js");


var variant = function variant(_ref) {
  var _config;

  var scale = _ref.scale,
      _ref$prop = _ref.prop,
      prop = _ref$prop === void 0 ? 'variant' : _ref$prop,
      _ref$variants = _ref.variants,
      variants = _ref$variants === void 0 ? {} : _ref$variants,
      key = _ref.key;
  var sx;

  if (Object.keys(variants).length) {
    sx = function sx(value, scale, props) {
      return Object(_styled_system_css__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["get"])(scale, value, null))(props.theme);
    };
  } else {
    sx = function sx(value, scale) {
      return Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["get"])(scale, value, null);
    };
  }

  sx.scale = scale || key;
  sx.defaults = variants;
  var config = (_config = {}, _config[prop] = sx, _config);
  var parser = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["createParser"])(config);
  return parser;
};
/* harmony default export */ __webpack_exports__["default"] = (variant);
var buttonStyle = variant({
  key: 'buttons'
});
var textStyle = variant({
  key: 'textStyles',
  prop: 'textStyle'
});
var colorStyle = variant({
  key: 'colorStyles',
  prop: 'colors'
});


/***/ }),

/***/ "./node_modules/@theme-ui/color-modes/dist/index.esm.js":
/*!**************************************************************!*\
  !*** ./node_modules/@theme-ui/color-modes/dist/index.esm.js ***!
  \**************************************************************/
/*! exports provided: useColorMode, ColorModeProvider, InitializeColorMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useColorMode", function() { return useColorMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorModeProvider", function() { return ColorModeProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitializeColorMode", function() { return InitializeColorMode; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @theme-ui/core */ "./node_modules/@theme-ui/core/dist/index.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var _theme_ui_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @theme-ui/css */ "./node_modules/@theme-ui/css/dist/index.esm.js");





var toVarName = function (key) { return ("--theme-ui-" + key); };

var toVarValue = function (key, value) { return ("var(" + (toVarName(key)) + ", " + value + ")"); };

var join = function () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.filter(Boolean).join('-');
};

var numberScales = {
  fontWeights: true,
  lineHeights: true
};
var reservedKeys = {
  useCustomProperties: true,
  initialColorModeName: true,
  initialColorMode: true
};

var toPixel = function (key, value) {
  if (typeof value !== 'number') { return value; }
  if (numberScales[key]) { return value; }
  return value + 'px';
}; // convert theme values to custom properties


var toCustomProperties = function (obj, parent, themeKey) {
  var next = Array.isArray(obj) ? [] : {};

  for (var key in obj) {
    var value = obj[key];
    var name = join(parent, key);

    if (value && typeof value === 'object') {
      next[key] = toCustomProperties(value, name, key);
      continue;
    }

    if (reservedKeys[key]) {
      next[key] = value;
      continue;
    }

    var val = toPixel(themeKey || key, value);
    next[key] = toVarValue(name, val);
  }

  return next;
};
var objectToVars = function (parent, obj) {
  var vars = {};

  for (var key in obj) {
    if (key === 'modes') { continue; }
    var name = join(parent, key);
    var value = obj[key];

    if (value && typeof value === 'object') {
      vars = Object.assign({}, vars,
        objectToVars(name, value));
    } else {
      vars[toVarName(name)] = value;
    }
  }

  return vars;
}; // create body styles for color modes

var createColorStyles = function (theme) {
  if ( theme === void 0 ) theme = {};

  if (!theme.colors || theme.useBodyStyles === false) { return {}; }

  if (theme.useCustomProperties === false || !theme.colors.modes) {
    return Object(_theme_ui_css__WEBPACK_IMPORTED_MODULE_3__["css"])({
      body: {
        color: 'text',
        bg: 'background'
      }
    })(theme);
  }

  var colors = theme.rawColors || theme.colors;
  var modes = colors.modes;
  var styles = objectToVars('colors', colors);
  Object.keys(modes).forEach(function (mode) {
    var key = "&.theme-ui-" + mode;
    styles[key] = objectToVars('colors', modes[mode]);
  });
  return Object(_theme_ui_css__WEBPACK_IMPORTED_MODULE_3__["css"])({
    body: Object.assign({}, styles,
      {color: 'text',
      bg: 'background'})
  })(theme);
};

var STORAGE_KEY = 'theme-ui-color-mode';
var storage = {
  get: function (init) {
    try {
      return window.localStorage.getItem(STORAGE_KEY) || init;
    } catch (e) {
      console.warn('localStorage is disabled and color mode might not work as expected.', 'Please check your Site Settings.', e);
    }
  },
  set: function (value) {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch (e) {
      console.warn('localStorage is disabled and color mode might not work as expected.', 'Please check your Site Settings.', e);
    }
  }
};

var getMediaQuery = function () {
  var darkQuery = '(prefers-color-scheme: dark)';
  var lightQuery = '(prefers-color-scheme: light)';
  var darkMQL = window.matchMedia ? window.matchMedia(darkQuery) : {};
  var lightMQL = window.matchMedia ? window.matchMedia(lightQuery) : {};
  var dark = darkMQL.media === darkQuery && darkMQL.matches;
  if (dark) { return 'dark'; }
  var light = lightMQL.media === lightQuery && lightMQL.matches;
  if (light) { return 'light'; }
  return 'default';
};

var useColorModeState = function (theme) {
  if ( theme === void 0 ) theme = {};

  var ref = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(theme.initialColorModeName || 'default');
  var mode = ref[0];
  var setMode = ref[1]; // initialize state

  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    var stored = storage.get();
    document.body.classList.remove('theme-ui-' + stored);

    if (!stored && theme.useColorSchemeMediaQuery) {
      var query = getMediaQuery();
      setMode(query);
      return;
    }

    if (!stored || stored === mode) { return; }
    setMode(stored);
  }, []);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    if (!mode) { return; }
    storage.set(mode);
  }, [mode]);

  if (true) {
    if (theme.colors && theme.colors.modes && Object.keys(theme.colors.modes).indexOf(theme.initialColorModeName) > -1) {
      console.warn('The `initialColorModeName` value should be a unique name' + ' and cannot reference a key in `theme.colors.modes`.');
    }
  }

  return [mode, setMode];
};

var useColorMode = function () {
  var ref = Object(_theme_ui_core__WEBPACK_IMPORTED_MODULE_1__["useThemeUI"])();
  var colorMode = ref.colorMode;
  var setColorMode = ref.setColorMode;

  if (typeof setColorMode !== 'function') {
    throw new Error("[useColorMode] requires the ColorModeProvider component");
  }

  return [colorMode, setColorMode];
};

var applyColorMode = function (theme, mode) {
  if (!mode) { return theme; }
  var modes = Object(_theme_ui_css__WEBPACK_IMPORTED_MODULE_3__["get"])(theme, 'colors.modes', {});
  return _theme_ui_core__WEBPACK_IMPORTED_MODULE_1__["merge"].all({}, theme, {
    colors: Object(_theme_ui_css__WEBPACK_IMPORTED_MODULE_3__["get"])(modes, mode, {})
  });
};

var BodyStyles = function () { return Object(_theme_ui_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["Global"], {
  styles: function (theme) { return createColorStyles(theme); }
}); };

var ColorModeProvider = function (ref) {
  var children = ref.children;

  var outer = Object(_theme_ui_core__WEBPACK_IMPORTED_MODULE_1__["useThemeUI"])();
  var ref$1 = useColorModeState(outer.theme);
  var colorMode = ref$1[0];
  var setColorMode = ref$1[1];
  var theme = applyColorMode(outer.theme || {}, colorMode);
  var emotionTheme = Object.assign({}, theme);

  if (theme.useCustomProperties !== false) {
    emotionTheme.colors = toCustomProperties(emotionTheme.colors, 'colors');
  }

  var context = Object.assign({}, outer,
    {theme: theme,
    colorMode: colorMode,
    setColorMode: setColorMode});
  return Object(_theme_ui_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["ThemeContext"].Provider, {
    value: emotionTheme
  }, Object(_theme_ui_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_theme_ui_core__WEBPACK_IMPORTED_MODULE_1__["Context"].Provider, {
    value: context
  }, Object(_theme_ui_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(BodyStyles, {
    key: 'color-mode'
  }), children));
};
var noflash = "(function() { try {\n  var mode = localStorage.getItem('theme-ui-color-mode');\n  if (!mode) return\n  document.body.classList.add('theme-ui-' + mode);\n} catch (e) {} })();";
var InitializeColorMode = function () { return Object(_theme_ui_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])('script', {
  key: 'theme-ui-no-flash',
  dangerouslySetInnerHTML: {
    __html: noflash
  }
}); };


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/@theme-ui/components/dist/index.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@theme-ui/components/dist/index.esm.js ***!
  \*************************************************************/
/*! exports provided: Box, Flex, Grid, Button, Link, Text, Heading, Image, Card, Label, Input, Select, Textarea, Radio, Checkbox, Slider, Field, Progress, Donut, Spinner, Avatar, Badge, Close, Alert, Divider, Embed, AspectRatio, AspectImage, Container, NavLink, Message, IconButton, MenuButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return Box; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Flex", function() { return Flex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return Grid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Heading", function() { return Heading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return Select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return Textarea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return Radio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return Checkbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return Slider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return Field; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return Progress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Donut", function() { return Donut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return Spinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Avatar", function() { return Avatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Badge", function() { return Badge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Close", function() { return Close; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Divider", function() { return Divider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Embed", function() { return Embed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AspectRatio", function() { return AspectRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AspectImage", function() { return AspectImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return NavLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconButton", function() { return IconButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuButton", function() { return MenuButton; });
/* harmony import */ var _theme_ui_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @theme-ui/css */ "./node_modules/@theme-ui/css/dist/index.esm.js");
/* harmony import */ var _styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/should-forward-prop */ "./node_modules/@styled-system/should-forward-prop/dist/index.esm.js");
/* harmony import */ var _styled_system_space__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @styled-system/space */ "./node_modules/@styled-system/space/dist/index.esm.js");
/* harmony import */ var _styled_system_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @styled-system/color */ "./node_modules/@styled-system/color/dist/index.esm.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);








var shouldForwardProp = Object(_styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_1__["createShouldForwardProp"])(( _styled_system_space__WEBPACK_IMPORTED_MODULE_2__["default"].propNames ).concat( _styled_system_color__WEBPACK_IMPORTED_MODULE_3__["default"].propNames));

var sx = function (props) { return Object(_theme_ui_css__WEBPACK_IMPORTED_MODULE_0__["css"])(props.sx)(props.theme); };

var base = function (props) { return Object(_theme_ui_css__WEBPACK_IMPORTED_MODULE_0__["css"])(props.__css)(props.theme); };

var variant = function (ref) {
  var theme = ref.theme;
  var variant = ref.variant;
  var __themeKey = ref.__themeKey; if ( __themeKey === void 0 ) __themeKey = 'variants';

  return Object(_theme_ui_css__WEBPACK_IMPORTED_MODULE_0__["css"])(Object(_theme_ui_css__WEBPACK_IMPORTED_MODULE_0__["get"])(theme, __themeKey + '.' + variant, Object(_theme_ui_css__WEBPACK_IMPORTED_MODULE_0__["get"])(theme, variant)));
};

var Box = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"])('div', {
  shouldForwardProp: shouldForwardProp
})({
  boxSizing: 'border-box',
  margin: 0,
  minWidth: 0
}, base, variant, _styled_system_space__WEBPACK_IMPORTED_MODULE_2__["default"], _styled_system_color__WEBPACK_IMPORTED_MODULE_3__["default"], sx, function (props) { return props.css; });

var Flex = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"])(Box)({
  display: 'flex'
});

function objectWithoutProperties (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var px = function (n) { return typeof n === 'number' ? n + 'px' : n; };

var widthToColumns = function (width) { return Array.isArray(width) ? width.map(widthToColumns) : !!width && ("repeat(auto-fit, minmax(" + (px(width)) + ", 1fr))"); };

var countToColumns = function (n) { return Array.isArray(n) ? n.map(countToColumns) : !!n && (typeof n === 'number' ? ("repeat(" + n + ", 1fr)") : n); };

var Grid = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (ref$1, ref) {
  var width = ref$1.width;
  var columns = ref$1.columns;
  var gap = ref$1.gap; if ( gap === void 0 ) gap = 3;
  var rest = objectWithoutProperties( ref$1, ["width", "columns", "gap"] );
  var props = rest;

  var gridTemplateColumns = !!width ? widthToColumns(width) : countToColumns(columns);
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref }, props, { __themeKey: "grids", __css: {
    display: 'grid',
    gridGap: gap,
    gridTemplateColumns: gridTemplateColumns
  } }));
});

var Button = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (props, ref) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref, as: "button", variant: "primary" }, props, { __themeKey: "buttons", __css: {
  appearance: 'none',
  display: 'inline-block',
  textAlign: 'center',
  lineHeight: 'inherit',
  textDecoration: 'none',
  fontSize: 'inherit',
  px: 3,
  py: 2,
  color: 'white',
  bg: 'primary',
  border: 0,
  borderRadius: 4
} })); });

var Link = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (props, ref) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref, as: "a", variant: "styles.a" }, props, { __themeKey: "links" })); });

var Text = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (props, ref) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref, variant: "default" }, props, { __themeKey: "text" })); });

var Heading = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (props, ref) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref, as: "h2", variant: "heading" }, props, { __themeKey: "text", __css: {
  fontFamily: 'heading',
  fontWeight: 'heading',
  lineHeight: 'heading'
} })); });

var Image = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (props, ref) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref, as: "img" }, props, { __themeKey: "images", __css: Object.assign({}, {maxWidth: '100%',
  height: 'auto'},
  props.__css) })); });

var Card = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (props, ref) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref, variant: "primary" }, props, { __themeKey: "cards" })); });

var Label = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (props, ref) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref, as: "label", variant: "label" }, props, { __themeKey: "forms", __css: {
  width: '100%',
  display: 'flex'
} })); });

var Input = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (props, ref) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref, as: "input", variant: "input" }, props, { __themeKey: "forms", __css: {
  display: 'block',
  width: '100%',
  p: 2,
  appearance: 'none',
  fontSize: 'inherit',
  lineHeight: 'inherit',
  border: '1px solid',
  borderRadius: 4,
  color: 'inherit',
  bg: 'transparent'
} })); });

function objectWithoutProperties$1 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
var SVG = (function (ref) {
  var size = ref.size; if ( size === void 0 ) size = 24;
  var rest = objectWithoutProperties$1( ref, ["size"] );
  var props = rest;

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { as: "svg", xmlns: "http://www.w3.org/2000/svg", width: size + '', height: size + '', viewBox: "0 0 24 24", fill: "currentcolor" }, props));
});

var getProps = function (test) { return function (props) {
  var next = {};

  for (var key in props) {
    if (test(key || '')) { next[key] = props[key]; }
  }

  return next;
}; };
var MRE = /^m[trblxy]?$/;
var getMargin = getProps(function (k) { return MRE.test(k); });
var omitMargin = getProps(function (k) { return !MRE.test(k); });

var DownArrow = function (props) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( SVG, props,
    react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( 'path', { d: "M7 10l5 5 5-5z" })
  ); };

var Select = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (props, ref) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, getMargin(props), { sx: {
  display: 'flex'
} }),
    react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref, as: "select", variant: "select" }, omitMargin(props), { __themeKey: "forms", __css: {
    display: 'block',
    width: '100%',
    p: 2,
    appearance: 'none',
    fontSize: 'inherit',
    lineHeight: 'inherit',
    border: '1px solid',
    borderRadius: 4,
    color: 'inherit',
    bg: 'transparent'
  } })),
    react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( DownArrow, { sx: {
    ml: -28,
    alignSelf: 'center',
    pointerEvents: 'none'
  } })
  ); });

var Textarea = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (props, ref) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref, as: "textarea", variant: "textarea" }, props, { __themeKey: "forms", __css: {
  display: 'block',
  width: '100%',
  p: 2,
  appearance: 'none',
  fontSize: 'inherit',
  lineHeight: 'inherit',
  border: '1px solid',
  borderRadius: 4,
  color: 'inherit',
  bg: 'transparent'
} })); });

function objectWithoutProperties$2 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var RadioChecked = function (props) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( SVG, props,
    react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( 'path', { d: "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" })
  ); };

var RadioUnchecked = function (props) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( SVG, props,
    react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( 'path', { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" })
  ); };

var RadioIcon = function (props) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null,
    react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( RadioChecked, Object.assign({}, props, { __css: {
    display: 'none',
    'input:checked ~ &': {
      display: 'block'
    }
  } })),
    react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( RadioUnchecked, Object.assign({}, props, { __css: {
    display: 'block',
    'input:checked ~ &': {
      display: 'none'
    }
  } }))
  ); };

var Radio = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (ref$1, ref) {
  var className = ref$1.className;
  var sx = ref$1.sx;
  var variant = ref$1.variant; if ( variant === void 0 ) variant = 'radio';
  var rest = objectWithoutProperties$2( ref$1, ["className", "sx", "variant"] );
  var props = rest;

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, null,
      react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref, as: "input", type: "radio" }, props, { sx: {
    position: 'absolute',
    opacity: 0,
    zIndex: -1,
    width: 1,
    height: 1,
    overflow: 'hidden'
  } })),
      react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, { as: RadioIcon, 'aria-hidden': "true", __themeKey: "forms", variant: variant, className: className, sx: sx, __css: {
    // todo: system props??
    mr: 2,
    borderRadius: 9999,
    color: 'gray',
    'input:checked ~ &': {
      color: 'primary'
    },
    'input:focus ~ &': {
      bg: 'highlight'
    }
  } })
    );
});

function objectWithoutProperties$3 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

var CheckboxChecked = function (props) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( SVG, props,
    react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( 'path', { d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" })
  ); };

var CheckboxUnchecked = function (props) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( SVG, props,
    react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( 'path', { d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" })
  ); };

var CheckboxIcon = function (props) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null,
    react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( CheckboxChecked, Object.assign({}, props, { __css: {
    display: 'none',
    'input:checked ~ &': {
      display: 'block'
    }
  } })),
    react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( CheckboxUnchecked, Object.assign({}, props, { __css: {
    display: 'block',
    'input:checked ~ &': {
      display: 'none'
    }
  } }))
  ); };

var Checkbox = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (ref$1, ref) {
  var className = ref$1.className;
  var sx = ref$1.sx;
  var variant = ref$1.variant; if ( variant === void 0 ) variant = 'checkbox';
  var rest = objectWithoutProperties$3( ref$1, ["className", "sx", "variant"] );
  var props = rest;

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, null,
      react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref, as: "input", type: "checkbox" }, props, { sx: {
    position: 'absolute',
    opacity: 0,
    zIndex: -1,
    width: 1,
    height: 1,
    overflow: 'hidden'
  } })),
      react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, { as: CheckboxIcon, 'aria-hidden': "true", __themeKey: "forms", variant: variant, className: className, sx: sx, __css: {
    mr: 2,
    borderRadius: 4,
    color: 'gray',
    'input:checked ~ &': {
      color: 'primary'
    },
    'input:focus ~ &': {
      color: 'primary',
      bg: 'highlight'
    }
  } })
    );
});

var thumb = {
  appearance: 'none',
  width: 16,
  height: 16,
  bg: 'currentcolor',
  border: 0,
  borderRadius: 9999,
  variant: 'forms.slider.thumb'
};
var Slider = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (props, ref) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref, as: "input", type: "range", variant: "slider" }, props, { __themeKey: "forms", __css: {
  display: 'block',
  width: '100%',
  height: 4,
  my: 2,
  cursor: 'pointer',
  appearance: 'none',
  borderRadius: 9999,
  color: 'inherit',
  bg: 'gray',
  ':focus': {
    outline: 'none',
    color: 'primary'
  },
  '&::-webkit-slider-thumb': thumb,
  '&::-moz-range-thumb': thumb,
  '&::-ms-thumb': thumb
} })); });

function objectWithoutProperties$4 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
var Field = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (ref$1, ref) {
  var Control = ref$1.as; if ( Control === void 0 ) Control = Input;
  var label = ref$1.label;
  var name = ref$1.name;
  var rest = objectWithoutProperties$4( ref$1, ["as", "label", "name"] );
  var props = rest;

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, getMargin(props),
        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Label, { htmlFor: name }, label),
        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Control, Object.assign({}, { ref: ref, id: name, name: name }, omitMargin(props)))
      );
});

var Progress = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (props, ref) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref, as: "progress", variant: "styles.progress" }, props, { __css: {
  display: 'block',
  width: '100%',
  height: '4px',
  margin: 0,
  padding: 0,
  overflow: 'hidden',
  appearance: 'none',
  color: 'primary',
  bg: 'gray',
  borderRadius: 9999,
  border: 'none',
  '&::-webkit-progress-bar': {
    bg: 'transparent'
  },
  '&::-webkit-progress-value': {
    bg: 'currentcolor'
  },
  '&::-moz-progress-bar': {
    bg: 'currentcolor'
  }
} })); });

function objectWithoutProperties$5 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
var Donut = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (ref$1, ref) {
  var size = ref$1.size; if ( size === void 0 ) size = 128;
  var strokeWidth = ref$1.strokeWidth; if ( strokeWidth === void 0 ) strokeWidth = 2;
  var value = ref$1.value; if ( value === void 0 ) value = 0;
  var min = ref$1.min; if ( min === void 0 ) min = 0;
  var max = ref$1.max; if ( max === void 0 ) max = 1;
  var title = ref$1.title;
  var rest = objectWithoutProperties$5( ref$1, ["size", "strokeWidth", "value", "min", "max", "title"] );
  var props = rest;

  var r = 16 - strokeWidth;
  var C = 2 * r * Math.PI;
  var offset = C - (value - min) / (max - min) * C;
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref, as: "svg", viewBox: "0 0 32 32", width: size, height: size, strokeWidth: strokeWidth, fill: "none", stroke: "currentcolor", role: "img", 'aria-valuenow': value, 'aria-valuemin': min, 'aria-valuemax': max }, props, { __css: {
    color: 'primary'
  } }),
        title && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( 'title', null, title ),
        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( 'circle', { cx: 16, cy: 16, r: r, opacity: 1 / 8 }),
        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( 'circle', { cx: 16, cy: 16, r: r, strokeDasharray: C, strokeDashoffset: offset, transform: "rotate(-90 16 16)" })
      );
});

function objectWithoutProperties$6 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
var spin = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["keyframes"])({
  from: {
    transform: 'rotate(0deg)'
  },
  to: {
    transform: 'rotate(360deg)'
  }
});
var Spinner = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (ref$1, ref) {
  var size = ref$1.size; if ( size === void 0 ) size = 48;
  var strokeWidth = ref$1.strokeWidth; if ( strokeWidth === void 0 ) strokeWidth = 4;
  var title = ref$1.title; if ( title === void 0 ) title = 'Loading...';
  var duration = ref$1.duration; if ( duration === void 0 ) duration = 500;
  var rest = objectWithoutProperties$6( ref$1, ["size", "strokeWidth", "max", "title", "duration"] );
  var props = rest;

  var r = 16 - strokeWidth;
  var C = 2 * r * Math.PI;
  var offset = C - 1 / 4 * C;
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref, as: "svg", viewBox: "0 0 32 32", width: size, height: size, strokeWidth: strokeWidth, fill: "none", stroke: "currentcolor", role: "img" }, props, { __css: {
    color: 'primary',
    overflow: 'visible'
  } }),
        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( 'title', null, title ),
        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( 'circle', { cx: 16, cy: 16, r: r, opacity: 1 / 8 }),
        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, { as: "circle", cx: 16, cy: 16, r: r, strokeDasharray: C, strokeDashoffset: offset, __css: {
      transformOrigin: '50% 50%',
      animationName: spin.toString(),
      animationTimingFunction: 'linear',
      animationDuration: duration + 'ms',
      animationIterationCount: 'infinite'
    } })
      );
});

function objectWithoutProperties$7 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
var Avatar = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (ref$1, ref) {
  var size = ref$1.size; if ( size === void 0 ) size = 48;
  var rest = objectWithoutProperties$7( ref$1, ["size"] );
  var props = rest;

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Image, Object.assign({}, { ref: ref, width: size, height: size, variant: "avatar" }, props, { __css: {
  borderRadius: 9999
} }));
});

var Badge = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (props, ref) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref, variant: "primary" }, props, { __themeKey: "badges", __css: {
  display: 'inline-block',
  verticalAlign: 'baseline',
  fontSize: 0,
  fontWeight: 'bold',
  whiteSpace: 'nowrap',
  px: 1,
  borderRadius: 2,
  color: 'white',
  bg: 'primary'
} })); });

function objectWithoutProperties$8 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
var IconButton = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (ref$1, ref) {
  var size = ref$1.size; if ( size === void 0 ) size = 32;
  var rest = objectWithoutProperties$8( ref$1, ["size"] );
  var props = rest;

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref, as: "button", variant: "icon" }, props, { __themeKey: "buttons", __css: {
  appearance: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 1,
  width: size,
  height: size,
  color: 'inherit',
  bg: 'transparent',
  border: 'none',
  borderRadius: 4
} }));
});

function objectWithoutProperties$9 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
var x = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( 'svg', { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", fill: "currentcolor", viewBox: "0 0 24 24" },
    react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( 'path', { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })
  );
var Close = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (ref$1, ref) {
  var rest = objectWithoutProperties$9( ref$1, ["size"] );
  var props = rest;

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( IconButton, Object.assign({}, { ref: ref, title: "Close", 'aria-label': "Close", variant: "close" }, props, { children: x }));
});

var Alert = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (props, ref) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref, variant: "primary" }, props, { __themeKey: "alerts", __css: {
  display: 'flex',
  alignItems: 'center',
  px: 3,
  py: 2,
  fontWeight: 'bold',
  color: 'white',
  bg: 'primary',
  borderRadius: 4
} })); });

var Divider = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (props, ref) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref, as: "hr", variant: "styles.hr" }, props, { __css: {
  color: 'gray',
  m: 0,
  my: 2,
  border: 0,
  borderBottom: '1px solid'
} })); });

function objectWithoutProperties$a (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
var Embed = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (ref$1, ref) {
  var ratio = ref$1.ratio; if ( ratio === void 0 ) ratio = 16 / 9;
  var src = ref$1.src;
  var frameBorder = ref$1.frameBorder; if ( frameBorder === void 0 ) frameBorder = 0;
  var allowFullScreen = ref$1.allowFullScreen; if ( allowFullScreen === void 0 ) allowFullScreen = true;
  var width = ref$1.width; if ( width === void 0 ) width = 560;
  var height = ref$1.height; if ( height === void 0 ) height = 315;
  var allow = ref$1.allow;
  var rest = objectWithoutProperties$a( ref$1, ["ratio", "src", "frameBorder", "allowFullScreen", "width", "height", "allow"] );
  var props = rest;

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, props, { __css: {
  width: '100%',
  height: 0,
  paddingBottom: 100 / ratio + '%',
  position: 'relative',
  overflow: 'hidden'
} }),
      react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, { ref: ref, as: "iframe", src: src, width: width, height: height, frameBorder: frameBorder, allowFullScreen: allowFullScreen, allow: allow, __css: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    bottom: 0,
    left: 0,
    border: 0
  } })
    );
});

function objectWithoutProperties$b (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
var AspectRatio = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (ref$1, ref) {
  var ratio = ref$1.ratio; if ( ratio === void 0 ) ratio = 4 / 3;
  var children = ref$1.children;
  var rest = objectWithoutProperties$b( ref$1, ["ratio", "children"] );
  var props = rest;

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, { ref: ref, sx: {
  position: 'relative',
  overflow: 'hidden'
} },
      react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, { sx: {
    width: '100%',
    height: 0,
    paddingBottom: 100 / ratio + '%'
  } }),
      react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, props, { __css: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  } }),
        children
      )
    );
});

function objectWithoutProperties$c (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
var AspectImage = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (ref$1, ref) {
  var ratio = ref$1.ratio;
  var rest = objectWithoutProperties$c( ref$1, ["ratio"] );
  var props = rest;

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( AspectRatio, { ratio: ratio },
    react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Image, Object.assign({}, { ref: ref }, props, { __css: {
    objectFit: 'cover'
  } }))
  );
});

var Container = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (props, ref) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref, variant: "container" }, props, { __themeKey: "layout", __css: {
  width: '100%',
  maxWidth: 'container',
  mx: 'auto'
} })); });

var NavLink = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (props, ref) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Link, Object.assign({}, { ref: ref, variant: "nav" }, props, { __css: {
  color: 'inherit',
  textDecoration: 'none',
  fontWeight: 'bold',
  display: 'inline-block',
  '&:hover, &:focus, &.active': {
    color: 'primary'
  }
} })); });

var Message = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (props, ref) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, Object.assign({}, { ref: ref }, props, { __themeKey: "messages", __css: {
  padding: 3,
  paddingLeft: function (t) { return t.space[3] - t.space[1]; },
  borderLeftWidth: function (t) { return t.space[1]; },
  borderLeftStyle: 'solid',
  borderLeftColor: 'primary',
  borderRadius: 4,
  bg: 'highlight'
} })); });

var MenuIcon = function (ref) {
  var size = ref.size; if ( size === void 0 ) size = 24;

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( Box, { as: "svg", xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "currentcolor", viewBox: "0 0 24 24", sx: {
  display: 'block',
  margin: 0
} },
    react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( 'path', { d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" })
  );
};
var MenuButton = react__WEBPACK_IMPORTED_MODULE_6___default.a.forwardRef(function (props, ref) { return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( IconButton, Object.assign({}, { ref: ref, title: "Menu", 'aria-label': "Toggle Menu", variant: "menu" }, props),
    react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement( MenuIcon, null )
  ); });


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/@theme-ui/core/dist/index.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/@theme-ui/core/dist/index.esm.js ***!
  \*******************************************************/
/*! exports provided: jsx, Context, useThemeUI, merge, ThemeProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return jsx$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useThemeUI", function() { return useThemeUI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return ThemeProvider; });
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var _theme_ui_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @theme-ui/css */ "./node_modules/@theme-ui/css/dist/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! deepmerge */ "./node_modules/deepmerge/dist/cjs.js");
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_core_package_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core/package.json */ "./node_modules/@emotion/core/package.json");
var _emotion_core_package_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! @emotion/core/package.json */ "./node_modules/@emotion/core/package.json", 1);






var __EMOTION_VERSION__ = _emotion_core_package_json__WEBPACK_IMPORTED_MODULE_4__.version;

var getCSS = function (props) {
  if (!props.sx && !props.css) { return undefined; }
  return function (theme) {
    var styles = Object(_theme_ui_css__WEBPACK_IMPORTED_MODULE_1__["css"])(props.sx)(theme);
    var raw = typeof props.css === 'function' ? props.css(theme) : props.css;
    return [styles, raw];
  };
};

var parseProps = function (props) {
  if (!props) { return null; }
  var next = {};

  for (var key in props) {
    if (key === 'sx') { continue; }
    next[key] = props[key];
  }

  var css$$1 = getCSS(props);
  if (css$$1) { next.css = css$$1; }
  return next;
};

var jsx$1 = function (type, props) {
  var children = [], len = arguments.length - 2;
  while ( len-- > 0 ) children[ len ] = arguments[ len + 2 ];

  return _emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"].apply(undefined, [type, parseProps(props) ].concat( children));
};
var Context = react__WEBPACK_IMPORTED_MODULE_2___default.a.createContext({
  __EMOTION_VERSION__: __EMOTION_VERSION__,
  theme: null
});
var useThemeUI = function () { return react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(Context); };
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT = canUseSymbol ? Symbol.for('react.element') : 0xeac7;
var FORWARD_REF = canUseSymbol ? Symbol.for('react.forward_ref') : 0xeac7;

var isMergeableObject = function (n) {
  return !!n && typeof n === 'object' && n.$$typeof !== REACT_ELEMENT && n.$$typeof !== FORWARD_REF;
};

var arrayMerge = function (destinationArray, sourceArray, options) { return sourceArray; };

var merge = function (a, b) { return deepmerge__WEBPACK_IMPORTED_MODULE_3___default()(a, b, {
  isMergeableObject: isMergeableObject,
  arrayMerge: arrayMerge
}); };

merge.all = function () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return deepmerge__WEBPACK_IMPORTED_MODULE_3___default.a.all(args, {
  isMergeableObject: isMergeableObject,
  arrayMerge: arrayMerge
});
};

var BaseProvider = function (ref) {
  var context = ref.context;
  var children = ref.children;

  return jsx$1(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["ThemeContext"].Provider, {
  value: context.theme
}, jsx$1(Context.Provider, {
  value: context,
  children: children
}));
};

var ThemeProvider = function (ref) {
  var theme = ref.theme;
  var children = ref.children;

  var outer = useThemeUI();

  if (true) {
    if (outer.__EMOTION_VERSION__ !== __EMOTION_VERSION__) {
      console.warn('Multiple versions of Emotion detected,', 'and theming might not work as expected.', 'Please ensure there is only one copy of @emotion/core installed in your application.');
    }
  }

  var context = typeof theme === 'function' ? Object.assign({}, outer,
    {theme: theme(outer.theme)}) : merge.all({}, outer, {
    theme: theme
  });
  return jsx$1(BaseProvider, {
    context: context,
    children: children
  });
};


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/@theme-ui/css/dist/index.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/@theme-ui/css/dist/index.esm.js ***!
  \******************************************************/
/*! exports provided: get, css */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
var get = function (obj, key, def, p, undef) {
  key = key && key.split ? key.split('.') : [key];

  for (p = 0; p < key.length; p++) {
    obj = obj ? obj[key[p]] : undef;
  }

  return obj === undef ? def : obj;
};
var defaultBreakpoints = [40, 52, 64].map(function (n) { return n + 'em'; });
var defaultTheme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
};
var aliases = {
  bg: 'backgroundColor',
  m: 'margin',
  mt: 'marginTop',
  mr: 'marginRight',
  mb: 'marginBottom',
  ml: 'marginLeft',
  mx: 'marginX',
  my: 'marginY',
  p: 'padding',
  pt: 'paddingTop',
  pr: 'paddingRight',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  px: 'paddingX',
  py: 'paddingY'
};
var multiples = {
  marginX: ['marginLeft', 'marginRight'],
  marginY: ['marginTop', 'marginBottom'],
  paddingX: ['paddingLeft', 'paddingRight'],
  paddingY: ['paddingTop', 'paddingBottom'],
  size: ['width', 'height']
};
var scales = {
  color: 'colors',
  backgroundColor: 'colors',
  borderColor: 'colors',
  caretColor: 'colors',
  columnRuleColor: 'colors',
  margin: 'space',
  marginTop: 'space',
  marginRight: 'space',
  marginBottom: 'space',
  marginLeft: 'space',
  marginX: 'space',
  marginY: 'space',
  padding: 'space',
  paddingTop: 'space',
  paddingRight: 'space',
  paddingBottom: 'space',
  paddingLeft: 'space',
  paddingX: 'space',
  paddingY: 'space',
  top: 'space',
  right: 'space',
  bottom: 'space',
  left: 'space',
  gridGap: 'space',
  gridColumnGap: 'space',
  gridRowGap: 'space',
  gap: 'space',
  columnGap: 'space',
  rowGap: 'space',
  fontFamily: 'fonts',
  fontSize: 'fontSizes',
  fontWeight: 'fontWeights',
  lineHeight: 'lineHeights',
  letterSpacing: 'letterSpacings',
  border: 'borders',
  borderTop: 'borders',
  borderRight: 'borders',
  borderBottom: 'borders',
  borderLeft: 'borders',
  borderWidth: 'borderWidths',
  borderStyle: 'borderStyles',
  borderRadius: 'radii',
  borderTopRightRadius: 'radii',
  borderTopLeftRadius: 'radii',
  borderBottomRightRadius: 'radii',
  borderBottomLeftRadius: 'radii',
  borderTopWidth: 'borderWidths',
  borderTopColor: 'colors',
  borderTopStyle: 'borderStyles',
  borderBottomWidth: 'borderWidths',
  borderBottomColor: 'colors',
  borderBottomStyle: 'borderStyles',
  borderLeftWidth: 'borderWidths',
  borderLeftColor: 'colors',
  borderLeftStyle: 'borderStyles',
  borderRightWidth: 'borderWidths',
  borderRightColor: 'colors',
  borderRightStyle: 'borderStyles',
  outlineColor: 'colors',
  boxShadow: 'shadows',
  textShadow: 'shadows',
  zIndex: 'zIndices',
  width: 'sizes',
  minWidth: 'sizes',
  maxWidth: 'sizes',
  height: 'sizes',
  minHeight: 'sizes',
  maxHeight: 'sizes',
  flexBasis: 'sizes',
  size: 'sizes',
  // svg
  fill: 'colors',
  stroke: 'colors'
};

var positiveOrNegative = function (scale, value) {
  if (typeof value !== 'number' || value >= 0) {
    return get(scale, value, value);
  }

  var absolute = Math.abs(value);
  var n = get(scale, absolute, absolute);
  if (typeof n === 'string') { return '-' + n; }
  return n * -1;
};

var transforms = ['margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginX', 'marginY', 'top', 'bottom', 'left', 'right'].reduce(function (acc, curr) {
  var obj;

  return (Object.assign({}, acc,
  ( obj = {}, obj[curr] = positiveOrNegative, obj )));
}, {});

var responsive = function (styles) { return function (theme) {
  var next = {};
  var breakpoints = get(theme, 'breakpoints', defaultBreakpoints);
  var mediaQueries = [null ].concat( breakpoints.map(function (n) { return ("@media screen and (min-width: " + n + ")"); }));

  for (var key in styles) {
    var value = typeof styles[key] === 'function' ? styles[key](theme) : styles[key];
    if (value == null) { continue; }

    if (!Array.isArray(value)) {
      next[key] = value;
      continue;
    }

    for (var i = 0; i < value.slice(0, mediaQueries.length).length; i++) {
      var media = mediaQueries[i];

      if (!media) {
        next[key] = value[i];
        continue;
      }

      next[media] = next[media] || {};
      if (value[i] == null) { continue; }
      next[media][key] = value[i];
    }
  }

  return next;
}; };

var css = function (args) { return function (props) {
  if ( props === void 0 ) props = {};

  var theme = Object.assign({}, defaultTheme,
    (props.theme || props));
  var result = {};
  var obj = typeof args === 'function' ? args(theme) : args;
  var styles = responsive(obj)(theme);

  for (var key in styles) {
    var x = styles[key];
    var val = typeof x === 'function' ? x(theme) : x;

    if (key === 'variant') {
      var variant = css(get(theme, val))(theme);
      result = Object.assign({}, result,
        variant);
      continue;
    }

    if (val && typeof val === 'object') {
      result[key] = css(val)(theme);
      continue;
    }

    var prop = get(aliases, key, key);
    var scaleName = get(scales, prop);
    var scale = get(theme, scaleName, get(theme, prop, {}));
    var transform = get(transforms, prop, get);
    var value = transform(scale, val, val);

    if (multiples[prop]) {
      var dirs = multiples[prop];

      for (var i = 0; i < dirs.length; i++) {
        result[dirs[i]] = value;
      }
    } else {
      result[prop] = value;
    }
  }

  return result;
}; };


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/@theme-ui/mdx/dist/index.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/@theme-ui/mdx/dist/index.esm.js ***!
  \******************************************************/
/*! exports provided: themed, Styled, components, MDXProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themed", function() { return themed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Styled", function() { return Styled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDXProvider", function() { return MDXProvider$1; });
/* harmony import */ var _theme_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @theme-ui/core */ "./node_modules/@theme-ui/core/dist/index.esm.js");
/* harmony import */ var _theme_ui_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @theme-ui/css */ "./node_modules/@theme-ui/css/dist/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");







var tags = ['p', 'b', 'i', 'a', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'img', 'pre', 'code', 'ol', 'ul', 'li', 'blockquote', 'hr', 'em', 'table', 'tr', 'th', 'td', 'em', 'strong', 'del', // mdx
'inlineCode', 'thematicBreak', // other
'div', // theme-ui
'root'];
var aliases = {
  inlineCode: 'code',
  thematicBreak: 'hr',
  root: 'div'
};

var alias = function (n) { return aliases[n] || n; };

var themed = function (key) { return function (props) { return Object(_theme_ui_css__WEBPACK_IMPORTED_MODULE_1__["css"])(Object(_theme_ui_css__WEBPACK_IMPORTED_MODULE_1__["get"])(props.theme, ("styles." + key)))(props.theme); }; };
var Styled = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"])('div')(themed('div'));
var components = {};
tags.forEach(function (tag) {
  components[tag] = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"])(alias(tag))(themed(tag));
  Styled[tag] = components[tag];
});

var createComponents = function (comps) {
  var next = Object.assign({}, components);
  Object.keys(comps).forEach(function (key) {
    next[key] = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"])(comps[key])(themed(key));
  });
  return next;
};

var MDXProvider$1 = function (ref) {
  var components = ref.components;
  var children = ref.children;

  var outer = Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__["useMDXComponents"])();
  return Object(_theme_ui_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__["MDXProvider"], {
    components: createComponents(Object.assign({}, outer,
      components)),
    children: children
  });
};


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/@theme-ui/theme-provider/dist/index.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@theme-ui/theme-provider/dist/index.esm.js ***!
  \*****************************************************************/
/*! exports provided: ThemeProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return ThemeProvider$1; });
/* harmony import */ var _theme_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @theme-ui/core */ "./node_modules/@theme-ui/core/dist/index.esm.js");
/* harmony import */ var _theme_ui_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @theme-ui/css */ "./node_modules/@theme-ui/css/dist/index.esm.js");
/* harmony import */ var _theme_ui_color_modes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @theme-ui/color-modes */ "./node_modules/@theme-ui/color-modes/dist/index.esm.js");
/* harmony import */ var _theme_ui_mdx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @theme-ui/mdx */ "./node_modules/@theme-ui/mdx/dist/index.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");






var BodyStyles = function () { return Object(_theme_ui_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["Global"], {
  styles: function (theme) {
    if (theme.useBodyStyles === false || theme.styles && !theme.styles.root) { return false; }
    var boxSizing = theme.useBorderBox === false ? null : 'border-box';
    return Object(_theme_ui_css__WEBPACK_IMPORTED_MODULE_1__["css"])({
      '*': {
        boxSizing: boxSizing
      },
      body: {
        margin: 0,
        variant: 'styles.root'
      }
    })(theme);
  }
}); };

var ThemeProvider$1 = function (ref) {
  var theme = ref.theme;
  var components = ref.components;
  var children = ref.children;

  var outer = Object(_theme_ui_core__WEBPACK_IMPORTED_MODULE_0__["useThemeUI"])();

  if (typeof outer.setColorMode === 'function') {
    return Object(_theme_ui_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_theme_ui_core__WEBPACK_IMPORTED_MODULE_0__["ThemeProvider"], {
      theme: theme
    }, Object(_theme_ui_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_theme_ui_mdx__WEBPACK_IMPORTED_MODULE_3__["MDXProvider"], {
      components: components,
      children: children
    }));
  }

  return Object(_theme_ui_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_theme_ui_core__WEBPACK_IMPORTED_MODULE_0__["ThemeProvider"], {
    theme: theme
  }, Object(_theme_ui_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_theme_ui_color_modes__WEBPACK_IMPORTED_MODULE_2__["ColorModeProvider"], null, Object(_theme_ui_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(BodyStyles), Object(_theme_ui_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_theme_ui_mdx__WEBPACK_IMPORTED_MODULE_3__["MDXProvider"], {
    components: components,
    children: children
  })));
};


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/deepmerge/dist/cjs.js":
/*!********************************************!*\
  !*** ./node_modules/deepmerge/dist/cjs.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, options) {
	return (options.clone !== false && options.isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, options)
		: value
}

function defaultArrayMerge(target, source, options) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, options)
	})
}

function getMergeFunction(key, options) {
	if (!options.customMerge) {
		return deepmerge
	}
	var customMerge = options.customMerge(key);
	return typeof customMerge === 'function' ? customMerge : deepmerge
}

function getEnumerableOwnPropertySymbols(target) {
	return Object.getOwnPropertySymbols
		? Object.getOwnPropertySymbols(target).filter(function(symbol) {
			return Object.propertyIsEnumerable.call(target, symbol)
		})
		: []
}

function getKeys(target) {
	return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))
}

function propertyIsOnObject(object, property) {
	try {
		return property in object
	} catch(_) {
		return false
	}
}

// Protects from prototype poisoning and unexpected merging up the prototype chain.
function propertyIsUnsafe(target, key) {
	return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
		&& !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
			&& Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.
}

function mergeObject(target, source, options) {
	var destination = {};
	if (options.isMergeableObject(target)) {
		getKeys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
	}
	getKeys(source).forEach(function(key) {
		if (propertyIsUnsafe(target, key)) {
			return
		}

		if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
			destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
		} else {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		}
	});
	return destination
}

function deepmerge(target, source, options) {
	options = options || {};
	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	options.isMergeableObject = options.isMergeableObject || isMergeableObject;
	// cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
	// implementations can use it. The caller may not replace it.
	options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;

	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, options)
	} else if (sourceIsArray) {
		return options.arrayMerge(target, source, options)
	} else {
		return mergeObject(target, source, options)
	}
}

deepmerge.all = function deepmergeAll(array, options) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, options)
	}, {})
};

var deepmerge_1 = deepmerge;

module.exports = deepmerge_1;


/***/ }),

/***/ "./node_modules/styled-system/dist/index.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/styled-system/dist/index.esm.js ***!
  \******************************************************/
/*! exports provided: get, createParser, createStyleFunction, compose, system, margin, padding, space, color, layout, typography, flexbox, border, background, position, grid, shadow, boxShadow, textShadow, variant, buttonStyle, textStyle, colorStyle, borders, width, height, minWidth, minHeight, maxWidth, maxHeight, size, verticalAlign, display, overflow, overflowX, overflowY, opacity, fontSize, fontFamily, fontWeight, lineHeight, textAlign, fontStyle, letterSpacing, alignItems, alignContent, justifyItems, justifyContent, flexWrap, flexDirection, flex, flexGrow, flexShrink, flexBasis, justifySelf, alignSelf, order, gridGap, gridColumnGap, gridRowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea, borderWidth, borderStyle, borderColor, borderTop, borderRight, borderBottom, borderLeft, borderRadius, backgroundImage, backgroundSize, backgroundPosition, backgroundRepeat, zIndex, top, right, bottom, left, style */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "width", function() { return width; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "height", function() { return height; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minWidth", function() { return minWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minHeight", function() { return minHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxWidth", function() { return maxWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxHeight", function() { return maxHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "size", function() { return size; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verticalAlign", function() { return verticalAlign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "display", function() { return display; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "overflow", function() { return overflow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "overflowX", function() { return overflowX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "overflowY", function() { return overflowY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "opacity", function() { return opacity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontSize", function() { return fontSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontFamily", function() { return fontFamily; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontWeight", function() { return fontWeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineHeight", function() { return lineHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textAlign", function() { return textAlign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontStyle", function() { return fontStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "letterSpacing", function() { return letterSpacing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignItems", function() { return alignItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignContent", function() { return alignContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "justifyItems", function() { return justifyItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "justifyContent", function() { return justifyContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flexWrap", function() { return flexWrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flexDirection", function() { return flexDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flex", function() { return flex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flexGrow", function() { return flexGrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flexShrink", function() { return flexShrink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flexBasis", function() { return flexBasis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "justifySelf", function() { return justifySelf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignSelf", function() { return alignSelf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "order", function() { return order; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridGap", function() { return gridGap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridColumnGap", function() { return gridColumnGap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridRowGap", function() { return gridRowGap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridColumn", function() { return gridColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridRow", function() { return gridRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridAutoFlow", function() { return gridAutoFlow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridAutoColumns", function() { return gridAutoColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridAutoRows", function() { return gridAutoRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridTemplateColumns", function() { return gridTemplateColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridTemplateRows", function() { return gridTemplateRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridTemplateAreas", function() { return gridTemplateAreas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridArea", function() { return gridArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderWidth", function() { return borderWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderStyle", function() { return borderStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderColor", function() { return borderColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderTop", function() { return borderTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderRight", function() { return borderRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderBottom", function() { return borderBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderLeft", function() { return borderLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderRadius", function() { return borderRadius; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundImage", function() { return backgroundImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundSize", function() { return backgroundSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundPosition", function() { return backgroundPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundRepeat", function() { return backgroundRepeat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zIndex", function() { return zIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "top", function() { return top; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "right", function() { return right; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bottom", function() { return bottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "left", function() { return left; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "style", function() { return style; });
/* harmony import */ var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-system/core */ "./node_modules/@styled-system/core/dist/index.esm.js");
/* harmony import */ var _styled_system_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/layout */ "./node_modules/@styled-system/layout/dist/index.esm.js");
/* harmony import */ var _styled_system_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @styled-system/color */ "./node_modules/@styled-system/color/dist/index.esm.js");
/* harmony import */ var _styled_system_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @styled-system/typography */ "./node_modules/@styled-system/typography/dist/index.esm.js");
/* harmony import */ var _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @styled-system/flexbox */ "./node_modules/@styled-system/flexbox/dist/index.esm.js");
/* harmony import */ var _styled_system_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @styled-system/grid */ "./node_modules/@styled-system/grid/dist/index.esm.js");
/* harmony import */ var _styled_system_border__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @styled-system/border */ "./node_modules/@styled-system/border/dist/index.esm.js");
/* harmony import */ var _styled_system_background__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @styled-system/background */ "./node_modules/@styled-system/background/dist/index.esm.js");
/* harmony import */ var _styled_system_position__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @styled-system/position */ "./node_modules/@styled-system/position/dist/index.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "get", function() { return _styled_system_core__WEBPACK_IMPORTED_MODULE_0__["get"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createParser", function() { return _styled_system_core__WEBPACK_IMPORTED_MODULE_0__["createParser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStyleFunction", function() { return _styled_system_core__WEBPACK_IMPORTED_MODULE_0__["createStyleFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return _styled_system_core__WEBPACK_IMPORTED_MODULE_0__["compose"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "system", function() { return _styled_system_core__WEBPACK_IMPORTED_MODULE_0__["system"]; });

/* harmony import */ var _styled_system_space__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @styled-system/space */ "./node_modules/@styled-system/space/dist/index.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "margin", function() { return _styled_system_space__WEBPACK_IMPORTED_MODULE_9__["margin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "padding", function() { return _styled_system_space__WEBPACK_IMPORTED_MODULE_9__["padding"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "space", function() { return _styled_system_space__WEBPACK_IMPORTED_MODULE_9__["space"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "color", function() { return _styled_system_color__WEBPACK_IMPORTED_MODULE_2__["color"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "layout", function() { return _styled_system_layout__WEBPACK_IMPORTED_MODULE_1__["layout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "typography", function() { return _styled_system_typography__WEBPACK_IMPORTED_MODULE_3__["typography"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flexbox", function() { return _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_4__["flexbox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "border", function() { return _styled_system_border__WEBPACK_IMPORTED_MODULE_6__["border"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "background", function() { return _styled_system_background__WEBPACK_IMPORTED_MODULE_7__["background"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "position", function() { return _styled_system_position__WEBPACK_IMPORTED_MODULE_8__["position"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "grid", function() { return _styled_system_grid__WEBPACK_IMPORTED_MODULE_5__["grid"]; });

/* harmony import */ var _styled_system_shadow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @styled-system/shadow */ "./node_modules/@styled-system/shadow/dist/index.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shadow", function() { return _styled_system_shadow__WEBPACK_IMPORTED_MODULE_10__["shadow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "boxShadow", function() { return _styled_system_shadow__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textShadow", function() { return _styled_system_shadow__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _styled_system_variant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @styled-system/variant */ "./node_modules/@styled-system/variant/dist/index.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "variant", function() { return _styled_system_variant__WEBPACK_IMPORTED_MODULE_11__["variant"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buttonStyle", function() { return _styled_system_variant__WEBPACK_IMPORTED_MODULE_11__["buttonStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textStyle", function() { return _styled_system_variant__WEBPACK_IMPORTED_MODULE_11__["textStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colorStyle", function() { return _styled_system_variant__WEBPACK_IMPORTED_MODULE_11__["colorStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "borders", function() { return _styled_system_border__WEBPACK_IMPORTED_MODULE_6__["default"]; });

 // v4 api shims






















var width = _styled_system_layout__WEBPACK_IMPORTED_MODULE_1__["default"].width,
    height = _styled_system_layout__WEBPACK_IMPORTED_MODULE_1__["default"].height,
    minWidth = _styled_system_layout__WEBPACK_IMPORTED_MODULE_1__["default"].minWidth,
    minHeight = _styled_system_layout__WEBPACK_IMPORTED_MODULE_1__["default"].minHeight,
    maxWidth = _styled_system_layout__WEBPACK_IMPORTED_MODULE_1__["default"].maxWidth,
    maxHeight = _styled_system_layout__WEBPACK_IMPORTED_MODULE_1__["default"].maxHeight,
    size = _styled_system_layout__WEBPACK_IMPORTED_MODULE_1__["default"].size,
    verticalAlign = _styled_system_layout__WEBPACK_IMPORTED_MODULE_1__["default"].verticalAlign,
    display = _styled_system_layout__WEBPACK_IMPORTED_MODULE_1__["default"].display,
    overflow = _styled_system_layout__WEBPACK_IMPORTED_MODULE_1__["default"].overflow,
    overflowX = _styled_system_layout__WEBPACK_IMPORTED_MODULE_1__["default"].overflowX,
    overflowY = _styled_system_layout__WEBPACK_IMPORTED_MODULE_1__["default"].overflowY;
var opacity = _styled_system_color__WEBPACK_IMPORTED_MODULE_2__["default"].opacity;
var fontSize = _styled_system_typography__WEBPACK_IMPORTED_MODULE_3__["default"].fontSize,
    fontFamily = _styled_system_typography__WEBPACK_IMPORTED_MODULE_3__["default"].fontFamily,
    fontWeight = _styled_system_typography__WEBPACK_IMPORTED_MODULE_3__["default"].fontWeight,
    lineHeight = _styled_system_typography__WEBPACK_IMPORTED_MODULE_3__["default"].lineHeight,
    textAlign = _styled_system_typography__WEBPACK_IMPORTED_MODULE_3__["default"].textAlign,
    fontStyle = _styled_system_typography__WEBPACK_IMPORTED_MODULE_3__["default"].fontStyle,
    letterSpacing = _styled_system_typography__WEBPACK_IMPORTED_MODULE_3__["default"].letterSpacing;
var alignItems = _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_4__["default"].alignItems,
    alignContent = _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_4__["default"].alignContent,
    justifyItems = _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_4__["default"].justifyItems,
    justifyContent = _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_4__["default"].justifyContent,
    flexWrap = _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_4__["default"].flexWrap,
    flexDirection = _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_4__["default"].flexDirection,
    flex = _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_4__["default"].flex,
    flexGrow = _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_4__["default"].flexGrow,
    flexShrink = _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_4__["default"].flexShrink,
    flexBasis = _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_4__["default"].flexBasis,
    justifySelf = _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_4__["default"].justifySelf,
    alignSelf = _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_4__["default"].alignSelf,
    order = _styled_system_flexbox__WEBPACK_IMPORTED_MODULE_4__["default"].order;
var gridGap = _styled_system_grid__WEBPACK_IMPORTED_MODULE_5__["default"].gridGap,
    gridColumnGap = _styled_system_grid__WEBPACK_IMPORTED_MODULE_5__["default"].gridColumnGap,
    gridRowGap = _styled_system_grid__WEBPACK_IMPORTED_MODULE_5__["default"].gridRowGap,
    gridColumn = _styled_system_grid__WEBPACK_IMPORTED_MODULE_5__["default"].gridColumn,
    gridRow = _styled_system_grid__WEBPACK_IMPORTED_MODULE_5__["default"].gridRow,
    gridAutoFlow = _styled_system_grid__WEBPACK_IMPORTED_MODULE_5__["default"].gridAutoFlow,
    gridAutoColumns = _styled_system_grid__WEBPACK_IMPORTED_MODULE_5__["default"].gridAutoColumns,
    gridAutoRows = _styled_system_grid__WEBPACK_IMPORTED_MODULE_5__["default"].gridAutoRows,
    gridTemplateColumns = _styled_system_grid__WEBPACK_IMPORTED_MODULE_5__["default"].gridTemplateColumns,
    gridTemplateRows = _styled_system_grid__WEBPACK_IMPORTED_MODULE_5__["default"].gridTemplateRows,
    gridTemplateAreas = _styled_system_grid__WEBPACK_IMPORTED_MODULE_5__["default"].gridTemplateAreas,
    gridArea = _styled_system_grid__WEBPACK_IMPORTED_MODULE_5__["default"].gridArea;
var borderWidth = _styled_system_border__WEBPACK_IMPORTED_MODULE_6__["default"].borderWidth,
    borderStyle = _styled_system_border__WEBPACK_IMPORTED_MODULE_6__["default"].borderStyle,
    borderColor = _styled_system_border__WEBPACK_IMPORTED_MODULE_6__["default"].borderColor,
    borderTop = _styled_system_border__WEBPACK_IMPORTED_MODULE_6__["default"].borderTop,
    borderRight = _styled_system_border__WEBPACK_IMPORTED_MODULE_6__["default"].borderRight,
    borderBottom = _styled_system_border__WEBPACK_IMPORTED_MODULE_6__["default"].borderBottom,
    borderLeft = _styled_system_border__WEBPACK_IMPORTED_MODULE_6__["default"].borderLeft,
    borderRadius = _styled_system_border__WEBPACK_IMPORTED_MODULE_6__["default"].borderRadius;
var backgroundImage = _styled_system_background__WEBPACK_IMPORTED_MODULE_7__["default"].backgroundImage,
    backgroundSize = _styled_system_background__WEBPACK_IMPORTED_MODULE_7__["default"].backgroundSize,
    backgroundPosition = _styled_system_background__WEBPACK_IMPORTED_MODULE_7__["default"].backgroundPosition,
    backgroundRepeat = _styled_system_background__WEBPACK_IMPORTED_MODULE_7__["default"].backgroundRepeat;
var zIndex = _styled_system_position__WEBPACK_IMPORTED_MODULE_8__["default"].zIndex,
    top = _styled_system_position__WEBPACK_IMPORTED_MODULE_8__["default"].top,
    right = _styled_system_position__WEBPACK_IMPORTED_MODULE_8__["default"].right,
    bottom = _styled_system_position__WEBPACK_IMPORTED_MODULE_8__["default"].bottom,
    left = _styled_system_position__WEBPACK_IMPORTED_MODULE_8__["default"].left;

 // v4 style API shim

var style = function style(_ref) {
  var prop = _ref.prop,
      cssProperty = _ref.cssProperty,
      alias = _ref.alias,
      key = _ref.key,
      transformValue = _ref.transformValue,
      scale = _ref.scale,
      properties = _ref.properties;
  var config = {};
  config[prop] = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["createStyleFunction"])({
    properties: properties,
    property: cssProperty || prop,
    scale: key,
    defaultScale: scale,
    transform: transformValue
  });
  if (alias) config[alias] = config[prop];
  var parse = Object(_styled_system_core__WEBPACK_IMPORTED_MODULE_0__["createParser"])(config);
  return parse;
};


/***/ }),

/***/ "./node_modules/theme-ui/dist/index.esm.js":
/*!*************************************************!*\
  !*** ./node_modules/theme-ui/dist/index.esm.js ***!
  \*************************************************/
/*! exports provided: jsx, Context, merge, useThemeUI, useColorMode, InitializeColorMode, Styled, components, ThemeProvider, Box, Flex, Grid, Button, Link, Text, Heading, Image, Card, Label, Input, Select, Textarea, Radio, Checkbox, Slider, Field, Progress, Donut, Spinner, Avatar, Badge, Close, Alert, Divider, Embed, AspectRatio, AspectImage, Container, NavLink, Message, IconButton, MenuButton, css, get, BaseStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseStyles", function() { return BaseStyles; });
/* harmony import */ var _theme_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @theme-ui/core */ "./node_modules/@theme-ui/core/dist/index.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return _theme_ui_core__WEBPACK_IMPORTED_MODULE_0__["jsx"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return _theme_ui_core__WEBPACK_IMPORTED_MODULE_0__["Context"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return _theme_ui_core__WEBPACK_IMPORTED_MODULE_0__["merge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useThemeUI", function() { return _theme_ui_core__WEBPACK_IMPORTED_MODULE_0__["useThemeUI"]; });

/* harmony import */ var _theme_ui_color_modes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @theme-ui/color-modes */ "./node_modules/@theme-ui/color-modes/dist/index.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useColorMode", function() { return _theme_ui_color_modes__WEBPACK_IMPORTED_MODULE_1__["useColorMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InitializeColorMode", function() { return _theme_ui_color_modes__WEBPACK_IMPORTED_MODULE_1__["InitializeColorMode"]; });

/* harmony import */ var _theme_ui_mdx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @theme-ui/mdx */ "./node_modules/@theme-ui/mdx/dist/index.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Styled", function() { return _theme_ui_mdx__WEBPACK_IMPORTED_MODULE_2__["Styled"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _theme_ui_mdx__WEBPACK_IMPORTED_MODULE_2__["components"]; });

/* harmony import */ var _theme_ui_theme_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @theme-ui/theme-provider */ "./node_modules/@theme-ui/theme-provider/dist/index.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return _theme_ui_theme_provider__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"]; });

/* harmony import */ var _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @theme-ui/components */ "./node_modules/@theme-ui/components/dist/index.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Box"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Flex", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Flex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Grid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Button"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Link"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Text"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Heading", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Heading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Image"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Card"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Label"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Input"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Select"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Textarea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Radio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Checkbox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Slider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Field"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Progress"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Donut", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Donut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Spinner"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Avatar", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Avatar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Badge", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Badge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Close", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Close"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Alert"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Divider", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Divider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Embed", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Embed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AspectRatio", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["AspectRatio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AspectImage", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["AspectImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Container"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["NavLink"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["Message"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconButton", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["IconButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuButton", function() { return _theme_ui_components__WEBPACK_IMPORTED_MODULE_4__["MenuButton"]; });

/* harmony import */ var _theme_ui_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @theme-ui/css */ "./node_modules/@theme-ui/css/dist/index.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return _theme_ui_css__WEBPACK_IMPORTED_MODULE_5__["css"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "get", function() { return _theme_ui_css__WEBPACK_IMPORTED_MODULE_5__["get"]; });









function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var BaseStyles = function BaseStyles(props) {
  return Object(_theme_ui_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])('div', _objectSpread2({}, props, {
    sx: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      variant: 'styles'
    }
  }));
};


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./src/assets/partner.png":
/*!********************************!*\
  !*** ./src/assets/partner.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/_next/static/media/partner.e6e444dc50c6acbf17cf07f4b532d992.png");

/***/ }),

/***/ "./src/components/image.js":
/*!*********************************!*\
  !*** ./src/components/image.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Image; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");


var _jsxFileName = "/home/nick/workspace/onda-project/onda-website/src/components/image.js";
var _excluded = ["src"];
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


function Image(_ref) {
  var src = _ref.src,
    rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Image"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    src: src
  }, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 10
    }
  }));
}
_c = Image;
var _c;
$RefreshReg$(_c, "Image");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/text-feature.js":
/*!****************************************!*\
  !*** ./src/components/text-feature.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextFeature; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
var _jsxFileName = "/home/nick/workspace/onda-project/onda-website/src/components/text-feature.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/** @jsx jsx */


function TextFeature(_ref) {
  var subTitle = _ref.subTitle,
    title = _ref.title,
    description = _ref.description,
    btnName = _ref.btnName,
    _ref$btnURL = _ref.btnURL,
    btnURL = _ref$btnURL === void 0 ? '#' : _ref$btnURL;
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.card,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.wrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    sx: styles.wrapper.subTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, subTitle), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h2",
    sx: styles.wrapper.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, title)), description && Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    className: "description",
    sx: styles.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, description), btnName && Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: btnURL,
    variant: "default",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "primary",
    "aria-label": btnName,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, btnName)));
}
_c = TextFeature;
var styles = {
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexShrink: 0,
    a: {
      m: ['0 auto', null, null, 0]
    }
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: ['24px', null, '28px', '32px', '36px', '42px', null, '46px'],
      color: 'heading_secondary',
      lineHeight: [1.35, null, null, 1.3, 1.2],
      fontWeight: '700',
      letterSpacing: '-.5px',
      mb: 5
    },
    subTitle: {
      fontSize: [0, null, '14px'],
      color: 'heading',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      fontWeight: '700',
      mb: [2, null, null, null, 3],
      lineHeight: 1.5
    }
  },
  description: {
    fontSize: ['15px', 2, null, null, null, '17px', null, 3],
    fontWeight: 400,
    lineHeight: [1.85, null, null, 2, null, '2.2'],
    color: 'text_secondary',
    mb: '30px'
  }
};
var _c;
$RefreshReg$(_c, "TextFeature");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/sections/partner.js":
/*!*********************************!*\
  !*** ./src/sections/partner.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PartnerSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var _components_text_feature__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/text-feature */ "./src/components/text-feature.js");
/* harmony import */ var _components_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/image */ "./src/components/image.js");
/* harmony import */ var _assets_partner_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/partner.png */ "./src/assets/partner.png");
var _jsxFileName = "/home/nick/workspace/onda-project/onda-website/src/sections/partner.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/** @jsx jsx */





var data = {
  subTitle: 'Core features',
  title: 'Smart Jackpots that you may love this anytime & anywhere',
  description: 'Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever. Get your tests delivered at let home collect sample.',
  btnName: 'Get Started',
  btnURL: '#'
};
function PartnerSection() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    sx: {
      variant: 'section.partner'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    sx: styles.containerBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.contentBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_text_feature__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subTitle: data.subTitle,
    title: data.title,
    description: data.description,
    btnName: data.btnName,
    btnURL: data.btnURL,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: {
      px: [0, null, '40px', 0]
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
    src: _assets_partner_png__WEBPACK_IMPORTED_MODULE_4__["default"],
    alt: "Partner",
    width: "794",
    height: "544",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }))));
}
_c = PartnerSection;
var styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap']
  },
  contentBox: {
    'flexShrink': 0,
    'px': [0, null, '30px', 0],
    'textAlign': ['center', null, null, 'left'],
    'width': ['100%', 450, 550, '350px', '410px', '485px'],
    'mx': 'auto',
    'pb': ['30px', null, null, 0],
    '.description': {
      pr: [0, null, null, null, 4]
    }
  }
};
var _c;
$RefreshReg$(_c, "PartnerSection");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvUHJpbWl0aXZlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Qcm9wZXJ0eUtleS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNMb29zZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9jYWNoZS9kaXN0L2NhY2hlLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vY29yZS9kaXN0L2NvcmUuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9jb3JlL2Rpc3QvZW1vdGlvbi1lbGVtZW50LTA0ZDg1MTM0LmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vY3NzL2Rpc3QvY3NzLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vaGFzaC9kaXN0L2hhc2guYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9pcy1wcm9wLXZhbGlkL2Rpc3QvaXMtcHJvcC12YWxpZC5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL21lbW9pemUvZGlzdC9tZW1vaXplLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vc2VyaWFsaXplL2Rpc3Qvc2VyaWFsaXplLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vc2hlZXQvZGlzdC9zaGVldC5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3N0eWxlZC1iYXNlL2Rpc3Qvc3R5bGVkLWJhc2UuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9zdHlsZWQvZGlzdC9zdHlsZWQuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9zdHlsaXMvZGlzdC9zdHlsaXMuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi91bml0bGVzcy9kaXN0L3VuaXRsZXNzLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vdXRpbHMvZGlzdC91dGlscy5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3dlYWstbWVtb2l6ZS9kaXN0L3dlYWstbWVtb2l6ZS5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvZGlzdC9lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac3R5bGVkLXN5c3RlbS9iYWNrZ3JvdW5kL2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHN0eWxlZC1zeXN0ZW0vYm9yZGVyL2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHN0eWxlZC1zeXN0ZW0vY29sb3IvZGlzdC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac3R5bGVkLXN5c3RlbS9jb3JlL2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHN0eWxlZC1zeXN0ZW0vY3NzL2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHN0eWxlZC1zeXN0ZW0vZmxleGJveC9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzdHlsZWQtc3lzdGVtL2dyaWQvZGlzdC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac3R5bGVkLXN5c3RlbS9sYXlvdXQvZGlzdC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac3R5bGVkLXN5c3RlbS9wb3NpdGlvbi9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzdHlsZWQtc3lzdGVtL3NoYWRvdy9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzdHlsZWQtc3lzdGVtL3Nob3VsZC1mb3J3YXJkLXByb3AvZGlzdC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac3R5bGVkLXN5c3RlbS9zaG91bGQtZm9yd2FyZC1wcm9wL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9tZW1vaXplL2Rpc3QvZW1vdGlvbi1tZW1vaXplLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHN0eWxlZC1zeXN0ZW0vc3BhY2UvZGlzdC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac3R5bGVkLXN5c3RlbS90eXBvZ3JhcGh5L2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHN0eWxlZC1zeXN0ZW0vdmFyaWFudC9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0B0aGVtZS11aS9jb2xvci1tb2Rlcy9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0B0aGVtZS11aS9jb21wb25lbnRzL2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHRoZW1lLXVpL2NvcmUvZGlzdC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AdGhlbWUtdWkvY3NzL2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHRoZW1lLXVpL21keC9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0B0aGVtZS11aS90aGVtZS1wcm92aWRlci9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2RlZXBtZXJnZS9kaXN0L2Nqcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3N0eWxlZC1zeXN0ZW0vZGlzdC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy90aGVtZS11aS9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2Fzc2V0cy9wYXJ0bmVyLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3RleHQtZmVhdHVyZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3BhcnRuZXIuanMiXSwibmFtZXMiOlsiSW1hZ2UiLCJfcmVmIiwic3JjIiwicmVzdCIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsIl9leGNsdWRlZCIsIl9fanN4IiwiSW1nIiwiX2V4dGVuZHMiLCJfX3NlbGYiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIl9jIiwiJFJlZnJlc2hSZWckIiwiVGV4dEZlYXR1cmUiLCJzdWJUaXRsZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJidG5OYW1lIiwiX3JlZiRidG5VUkwiLCJidG5VUkwiLCJqc3giLCJCb3giLCJzeCIsInN0eWxlcyIsImNhcmQiLCJ3cmFwcGVyIiwiVGV4dCIsImFzIiwiSGVhZGluZyIsImNsYXNzTmFtZSIsIkxpbmsiLCJocmVmIiwidmFyaWFudCIsIkJ1dHRvbiIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiZmxleERpcmVjdGlvbiIsImZsZXhTaHJpbmsiLCJhIiwibSIsIndpZHRoIiwibXQiLCJmb250U2l6ZSIsImNvbG9yIiwibGluZUhlaWdodCIsImZvbnRXZWlnaHQiLCJsZXR0ZXJTcGFjaW5nIiwibWIiLCJ0ZXh0VHJhbnNmb3JtIiwiZGF0YSIsIlBhcnRuZXJTZWN0aW9uIiwiQ29udGFpbmVyIiwiY29udGFpbmVyQm94IiwiY29udGVudEJveCIsInB4IiwiUGFydG5lciIsImFsdCIsImhlaWdodCIsImp1c3RpZnlDb250ZW50IiwiZmxleFdyYXAiLCJwciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUErQztBQUNoQztBQUNmLFFBQVEsaUVBQWE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQWU7QUFDZjtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNiQTtBQUFBO0FBQUE7QUFBaUQ7QUFDbEM7QUFDZjtBQUNBO0FBQ0EsRUFBRSxrRUFBYztBQUNoQixDOzs7Ozs7Ozs7Ozs7QUNMQTtBQUFBO0FBQUE7QUFBNkU7QUFDOUQ7QUFDZjtBQUNBLGVBQWUsZ0ZBQTRCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLGVBQWUsNkJBQTZCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDZkE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHVCQUF1QjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDWEE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ05BO0FBQUE7QUFBQTtBQUFrQztBQUNuQjtBQUNmLE1BQU0sMERBQU87QUFDYjtBQUNBO0FBQ0E7QUFDQSxRQUFRLDBEQUFPO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsQzs7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O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLGtDQUFrQztBQUMxRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixVQUFVO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIsVUFBVTtBQUN4QztBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sYUFBYSxrRUFBTTtBQUNYLHFFQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNoSXRCO0FBQUE7QUFBQTtBQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ08sWUFBWSxrRUFBTTtBQUNWLG9FQUFLLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNkckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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QUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFLElBQUk7QUFDTjs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ3BJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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LEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUMxQixXQUFXLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUM7SUFDM0MsT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUM7SUFDdEQsSUFBSSxFQUFFLE1BQU07SUFDWixJQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDN0IsY0FBYyxFQUFFO01BQ2RPLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO0lBQzdCO0VBQ0Y7QUFDRixDQUFDO0FBQUEsSUFBQWpELEVBQUE7QUFBQUMsWUFBQSxDQUFBRCxFQUFBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0b1Byb3BlcnR5S2V5IGZyb20gXCIuL3RvUHJvcGVydHlLZXkuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAga2V5ID0gdG9Qcm9wZXJ0eUtleShrZXkpO1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gb2JqO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gPyBPYmplY3QuYXNzaWduLmJpbmQoKSA6IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufSIsImltcG9ydCBzZXRQcm90b3R5cGVPZiBmcm9tIFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7XG4gIHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzO1xuICBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59IiwiaW1wb3J0IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIi4vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSBvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuICB2YXIga2V5LCBpO1xuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdGFyZ2V0O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG4gIHJldHVybiB0YXJnZXQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCIuL3R5cGVvZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7XG4gIGlmIChfdHlwZW9mKGlucHV0KSAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0O1xuICB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07XG4gIGlmIChwcmltICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTtcbiAgICBpZiAoX3R5cGVvZihyZXMpICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzO1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTtcbiAgfVxuICByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiLi90eXBlb2YuanNcIjtcbmltcG9ydCB0b1ByaW1pdGl2ZSBmcm9tIFwiLi90b1ByaW1pdGl2ZS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7XG4gIHZhciBrZXkgPSB0b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpO1xuICByZXR1cm4gX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIF90eXBlb2Yob2JqKTtcbn0iLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiKTtcbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpO1xuICBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzcztcbiAgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHNMb29zZSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImltcG9ydCB7IFN0eWxlU2hlZXQgfSBmcm9tICdAZW1vdGlvbi9zaGVldCc7XG5pbXBvcnQgU3R5bGlzIGZyb20gJ0BlbW90aW9uL3N0eWxpcyc7XG5pbXBvcnQgJ0BlbW90aW9uL3dlYWstbWVtb2l6ZSc7XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90aHlzdWx0YW4vc3R5bGlzLmpzL3RyZWUvbWFzdGVyL3BsdWdpbnMvcnVsZS1zaGVldFxuLy8gaW5saW5lZCB0byBhdm9pZCB1bWQgd3JhcHBlciBhbmQgcGVlckRlcCB3YXJuaW5ncy9pbnN0YWxsaW5nIHN0eWxpc1xuLy8gc2luY2Ugd2UgdXNlIHN0eWxpcyBhZnRlciBjbG9zdXJlIGNvbXBpbGVyXG52YXIgZGVsaW1pdGVyID0gJy8qfCovJztcbnZhciBuZWVkbGUgPSBkZWxpbWl0ZXIgKyAnfSc7XG5cbmZ1bmN0aW9uIHRvU2hlZXQoYmxvY2spIHtcbiAgaWYgKGJsb2NrKSB7XG4gICAgU2hlZXQuY3VycmVudC5pbnNlcnQoYmxvY2sgKyAnfScpO1xuICB9XG59XG5cbnZhciBTaGVldCA9IHtcbiAgY3VycmVudDogbnVsbFxufTtcbnZhciBydWxlU2hlZXQgPSBmdW5jdGlvbiBydWxlU2hlZXQoY29udGV4dCwgY29udGVudCwgc2VsZWN0b3JzLCBwYXJlbnRzLCBsaW5lLCBjb2x1bW4sIGxlbmd0aCwgbnMsIGRlcHRoLCBhdCkge1xuICBzd2l0Y2ggKGNvbnRleHQpIHtcbiAgICAvLyBwcm9wZXJ0eVxuICAgIGNhc2UgMTpcbiAgICAgIHtcbiAgICAgICAgc3dpdGNoIChjb250ZW50LmNoYXJDb2RlQXQoMCkpIHtcbiAgICAgICAgICBjYXNlIDY0OlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAvLyBAaW1wb3J0XG4gICAgICAgICAgICAgIFNoZWV0LmN1cnJlbnQuaW5zZXJ0KGNvbnRlbnQgKyAnOycpO1xuICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgLy8gY2hhcmNvZGUgZm9yIGxcblxuICAgICAgICAgIGNhc2UgMTA4OlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAvLyBjaGFyY29kZSBmb3IgYlxuICAgICAgICAgICAgICAvLyB0aGlzIGlnbm9yZXMgbGFiZWxcbiAgICAgICAgICAgICAgaWYgKGNvbnRlbnQuY2hhckNvZGVBdCgyKSA9PT0gOTgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIC8vIHNlbGVjdG9yXG5cbiAgICBjYXNlIDI6XG4gICAgICB7XG4gICAgICAgIGlmIChucyA9PT0gMCkgcmV0dXJuIGNvbnRlbnQgKyBkZWxpbWl0ZXI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIC8vIGF0LXJ1bGVcblxuICAgIGNhc2UgMzpcbiAgICAgIHtcbiAgICAgICAgc3dpdGNoIChucykge1xuICAgICAgICAgIC8vIEBmb250LWZhY2UsIEBwYWdlXG4gICAgICAgICAgY2FzZSAxMDI6XG4gICAgICAgICAgY2FzZSAxMTI6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFNoZWV0LmN1cnJlbnQuaW5zZXJ0KHNlbGVjdG9yc1swXSArIGNvbnRlbnQpO1xuICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZXR1cm4gY29udGVudCArIChhdCA9PT0gMCA/IGRlbGltaXRlciA6ICcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgY2FzZSAtMjpcbiAgICAgIHtcbiAgICAgICAgY29udGVudC5zcGxpdChuZWVkbGUpLmZvckVhY2godG9TaGVldCk7XG4gICAgICB9XG4gIH1cbn07XG5cbnZhciBjcmVhdGVDYWNoZSA9IGZ1bmN0aW9uIGNyZWF0ZUNhY2hlKG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHVuZGVmaW5lZCkgb3B0aW9ucyA9IHt9O1xuICB2YXIga2V5ID0gb3B0aW9ucy5rZXkgfHwgJ2Nzcyc7XG4gIHZhciBzdHlsaXNPcHRpb25zO1xuXG4gIGlmIChvcHRpb25zLnByZWZpeCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgc3R5bGlzT3B0aW9ucyA9IHtcbiAgICAgIHByZWZpeDogb3B0aW9ucy5wcmVmaXhcbiAgICB9O1xuICB9XG5cbiAgdmFyIHN0eWxpcyA9IG5ldyBTdHlsaXMoc3R5bGlzT3B0aW9ucyk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyAkRmxvd0ZpeE1lXG4gICAgaWYgKC9bXmEtei1dLy50ZXN0KGtleSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkVtb3Rpb24ga2V5IG11c3Qgb25seSBjb250YWluIGxvd2VyIGNhc2UgYWxwaGFiZXRpY2FsIGNoYXJhY3RlcnMgYW5kIC0gYnV0IFxcXCJcIiArIGtleSArIFwiXFxcIiB3YXMgcGFzc2VkXCIpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBpbnNlcnRlZCA9IHt9OyAvLyAkRmxvd0ZpeE1lXG5cbiAgdmFyIGNvbnRhaW5lcjtcblxuICB7XG4gICAgY29udGFpbmVyID0gb3B0aW9ucy5jb250YWluZXIgfHwgZG9jdW1lbnQuaGVhZDtcbiAgICB2YXIgbm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic3R5bGVbZGF0YS1lbW90aW9uLVwiICsga2V5ICsgXCJdXCIpO1xuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobm9kZXMsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICB2YXIgYXR0cmliID0gbm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWVtb3Rpb24tXCIgKyBrZXkpOyAvLyAkRmxvd0ZpeE1lXG5cbiAgICAgIGF0dHJpYi5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIGluc2VydGVkW2lkXSA9IHRydWU7XG4gICAgICB9KTtcblxuICAgICAgaWYgKG5vZGUucGFyZW50Tm9kZSAhPT0gY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHZhciBfaW5zZXJ0O1xuXG4gIHtcbiAgICBzdHlsaXMudXNlKG9wdGlvbnMuc3R5bGlzUGx1Z2lucykocnVsZVNoZWV0KTtcblxuICAgIF9pbnNlcnQgPSBmdW5jdGlvbiBpbnNlcnQoc2VsZWN0b3IsIHNlcmlhbGl6ZWQsIHNoZWV0LCBzaG91bGRDYWNoZSkge1xuICAgICAgdmFyIG5hbWUgPSBzZXJpYWxpemVkLm5hbWU7XG4gICAgICBTaGVldC5jdXJyZW50ID0gc2hlZXQ7XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHNlcmlhbGl6ZWQubWFwICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFyIG1hcCA9IHNlcmlhbGl6ZWQubWFwO1xuICAgICAgICBTaGVldC5jdXJyZW50ID0ge1xuICAgICAgICAgIGluc2VydDogZnVuY3Rpb24gaW5zZXJ0KHJ1bGUpIHtcbiAgICAgICAgICAgIHNoZWV0Lmluc2VydChydWxlICsgbWFwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHN0eWxpcyhzZWxlY3Rvciwgc2VyaWFsaXplZC5zdHlsZXMpO1xuXG4gICAgICBpZiAoc2hvdWxkQ2FjaGUpIHtcbiAgICAgICAgY2FjaGUuaW5zZXJ0ZWRbbmFtZV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIC8vIGh0dHBzOi8vZXNiZW5jaC5jb20vYmVuY2gvNWJmNzM3MWE0Y2Q3ZTYwMDllZjYxZDBhXG4gICAgdmFyIGNvbW1lbnRTdGFydCA9IC9cXC9cXCovZztcbiAgICB2YXIgY29tbWVudEVuZCA9IC9cXCpcXC8vZztcbiAgICBzdHlsaXMudXNlKGZ1bmN0aW9uIChjb250ZXh0LCBjb250ZW50KSB7XG4gICAgICBzd2l0Y2ggKGNvbnRleHQpIHtcbiAgICAgICAgY2FzZSAtMTpcbiAgICAgICAgICB7XG4gICAgICAgICAgICB3aGlsZSAoY29tbWVudFN0YXJ0LnRlc3QoY29udGVudCkpIHtcbiAgICAgICAgICAgICAgY29tbWVudEVuZC5sYXN0SW5kZXggPSBjb21tZW50U3RhcnQubGFzdEluZGV4O1xuXG4gICAgICAgICAgICAgIGlmIChjb21tZW50RW5kLnRlc3QoY29udGVudCkpIHtcbiAgICAgICAgICAgICAgICBjb21tZW50U3RhcnQubGFzdEluZGV4ID0gY29tbWVudEVuZC5sYXN0SW5kZXg7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdXIgc3R5bGVzIGhhdmUgYW4gdW50ZXJtaW5hdGVkIGNvbW1lbnQgKFwiLypcIiB3aXRob3V0IGNvcnJlc3BvbmRpbmcgXCIqL1wiKS4nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29tbWVudFN0YXJ0Lmxhc3RJbmRleCA9IDA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgc3R5bGlzLnVzZShmdW5jdGlvbiAoY29udGV4dCwgY29udGVudCwgc2VsZWN0b3JzKSB7XG4gICAgICBzd2l0Y2ggKGNvbnRleHQpIHtcbiAgICAgICAgY2FzZSAtMTpcbiAgICAgICAgICB7XG4gICAgICAgICAgICB2YXIgZmxhZyA9ICdlbW90aW9uLWRpc2FibGUtc2VydmVyLXJlbmRlcmluZy11bnNhZmUtc2VsZWN0b3Itd2FybmluZy1wbGVhc2UtZG8tbm90LXVzZS10aGlzLXRoZS13YXJuaW5nLWV4aXN0cy1mb3ItYS1yZWFzb24nO1xuICAgICAgICAgICAgdmFyIHVuc2FmZVBzZXVkb0NsYXNzZXMgPSBjb250ZW50Lm1hdGNoKC8oOmZpcnN0fDpudGh8Om50aC1sYXN0KS1jaGlsZC9nKTtcblxuICAgICAgICAgICAgaWYgKHVuc2FmZVBzZXVkb0NsYXNzZXMgJiYgY2FjaGUuY29tcGF0ICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgIHVuc2FmZVBzZXVkb0NsYXNzZXMuZm9yRWFjaChmdW5jdGlvbiAodW5zYWZlUHNldWRvQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICB2YXIgaWdub3JlUmVnRXhwID0gbmV3IFJlZ0V4cCh1bnNhZmVQc2V1ZG9DbGFzcyArIFwiLipcXFxcL1xcXFwqIFwiICsgZmxhZyArIFwiIFxcXFwqXFxcXC9cIik7XG4gICAgICAgICAgICAgICAgdmFyIGlnbm9yZSA9IGlnbm9yZVJlZ0V4cC50ZXN0KGNvbnRlbnQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHVuc2FmZVBzZXVkb0NsYXNzICYmICFpZ25vcmUpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUaGUgcHNldWRvIGNsYXNzIFxcXCJcIiArIHVuc2FmZVBzZXVkb0NsYXNzICsgXCJcXFwiIGlzIHBvdGVudGlhbGx5IHVuc2FmZSB3aGVuIGRvaW5nIHNlcnZlci1zaWRlIHJlbmRlcmluZy4gVHJ5IGNoYW5naW5nIGl0IHRvIFxcXCJcIiArIHVuc2FmZVBzZXVkb0NsYXNzLnNwbGl0KCctY2hpbGQnKVswXSArIFwiLW9mLXR5cGVcXFwiLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB2YXIgY2FjaGUgPSB7XG4gICAga2V5OiBrZXksXG4gICAgc2hlZXQ6IG5ldyBTdHlsZVNoZWV0KHtcbiAgICAgIGtleToga2V5LFxuICAgICAgY29udGFpbmVyOiBjb250YWluZXIsXG4gICAgICBub25jZTogb3B0aW9ucy5ub25jZSxcbiAgICAgIHNwZWVkeTogb3B0aW9ucy5zcGVlZHlcbiAgICB9KSxcbiAgICBub25jZTogb3B0aW9ucy5ub25jZSxcbiAgICBpbnNlcnRlZDogaW5zZXJ0ZWQsXG4gICAgcmVnaXN0ZXJlZDoge30sXG4gICAgaW5zZXJ0OiBfaW5zZXJ0XG4gIH07XG4gIHJldHVybiBjYWNoZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNhY2hlO1xuIiwiaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2UnO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnQGVtb3Rpb24vY2FjaGUnO1xuaW1wb3J0IHsgaCBhcyBoYXNPd25Qcm9wZXJ0eSwgRSBhcyBFbW90aW9uLCBjIGFzIGNyZWF0ZUVtb3Rpb25Qcm9wcywgdyBhcyB3aXRoRW1vdGlvbkNhY2hlLCBUIGFzIFRoZW1lQ29udGV4dCB9IGZyb20gJy4vZW1vdGlvbi1lbGVtZW50LTA0ZDg1MTM0LmJyb3dzZXIuZXNtLmpzJztcbmV4cG9ydCB7IEMgYXMgQ2FjaGVQcm92aWRlciwgVCBhcyBUaGVtZUNvbnRleHQsIHcgYXMgd2l0aEVtb3Rpb25DYWNoZSB9IGZyb20gJy4vZW1vdGlvbi1lbGVtZW50LTA0ZDg1MTM0LmJyb3dzZXIuZXNtLmpzJztcbmltcG9ydCB7IGluc2VydFN0eWxlcywgZ2V0UmVnaXN0ZXJlZFN0eWxlcyB9IGZyb20gJ0BlbW90aW9uL3V0aWxzJztcbmltcG9ydCB7IHNlcmlhbGl6ZVN0eWxlcyB9IGZyb20gJ0BlbW90aW9uL3NlcmlhbGl6ZSc7XG5pbXBvcnQgeyBTdHlsZVNoZWV0IH0gZnJvbSAnQGVtb3Rpb24vc2hlZXQnO1xuaW1wb3J0IGNzcyBmcm9tICdAZW1vdGlvbi9jc3MnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuXG52YXIganN4ID0gZnVuY3Rpb24ganN4KHR5cGUsIHByb3BzKSB7XG4gIHZhciBhcmdzID0gYXJndW1lbnRzO1xuXG4gIGlmIChwcm9wcyA9PSBudWxsIHx8ICFoYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3BzLCAnY3NzJykpIHtcbiAgICAvLyAkRmxvd0ZpeE1lXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQuYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgfVxuXG4gIHZhciBhcmdzTGVuZ3RoID0gYXJncy5sZW5ndGg7XG4gIHZhciBjcmVhdGVFbGVtZW50QXJnQXJyYXkgPSBuZXcgQXJyYXkoYXJnc0xlbmd0aCk7XG4gIGNyZWF0ZUVsZW1lbnRBcmdBcnJheVswXSA9IEVtb3Rpb247XG4gIGNyZWF0ZUVsZW1lbnRBcmdBcnJheVsxXSA9IGNyZWF0ZUVtb3Rpb25Qcm9wcyh0eXBlLCBwcm9wcyk7XG5cbiAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmdzTGVuZ3RoOyBpKyspIHtcbiAgICBjcmVhdGVFbGVtZW50QXJnQXJyYXlbaV0gPSBhcmdzW2ldO1xuICB9IC8vICRGbG93Rml4TWVcblxuXG4gIHJldHVybiBjcmVhdGVFbGVtZW50LmFwcGx5KG51bGwsIGNyZWF0ZUVsZW1lbnRBcmdBcnJheSk7XG59O1xuXG52YXIgd2FybmVkQWJvdXRDc3NQcm9wRm9yR2xvYmFsID0gZmFsc2U7XG52YXIgR2xvYmFsID0gLyogI19fUFVSRV9fICovd2l0aEVtb3Rpb25DYWNoZShmdW5jdGlvbiAocHJvcHMsIGNhY2hlKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICF3YXJuZWRBYm91dENzc1Byb3BGb3JHbG9iYWwgJiYgKCAvLyBjaGVjayBmb3IgY2xhc3NOYW1lIGFzIHdlbGwgc2luY2UgdGhlIHVzZXIgaXNcbiAgLy8gcHJvYmFibHkgdXNpbmcgdGhlIGN1c3RvbSBjcmVhdGVFbGVtZW50IHdoaWNoXG4gIC8vIG1lYW5zIGl0IHdpbGwgYmUgdHVybmVkIGludG8gYSBjbGFzc05hbWUgcHJvcFxuICAvLyAkRmxvd0ZpeE1lIEkgZG9uJ3QgcmVhbGx5IHdhbnQgdG8gYWRkIGl0IHRvIHRoZSB0eXBlIHNpbmNlIGl0IHNob3VsZG4ndCBiZSB1c2VkXG4gIHByb3BzLmNsYXNzTmFtZSB8fCBwcm9wcy5jc3MpKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkl0IGxvb2tzIGxpa2UgeW91J3JlIHVzaW5nIHRoZSBjc3MgcHJvcCBvbiBHbG9iYWwsIGRpZCB5b3UgbWVhbiB0byB1c2UgdGhlIHN0eWxlcyBwcm9wIGluc3RlYWQ/XCIpO1xuICAgIHdhcm5lZEFib3V0Q3NzUHJvcEZvckdsb2JhbCA9IHRydWU7XG4gIH1cblxuICB2YXIgc3R5bGVzID0gcHJvcHMuc3R5bGVzO1xuXG4gIGlmICh0eXBlb2Ygc3R5bGVzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KFRoZW1lQ29udGV4dC5Db25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKHRoZW1lKSB7XG4gICAgICB2YXIgc2VyaWFsaXplZCA9IHNlcmlhbGl6ZVN0eWxlcyhbc3R5bGVzKHRoZW1lKV0pO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KElubmVyR2xvYmFsLCB7XG4gICAgICAgIHNlcmlhbGl6ZWQ6IHNlcmlhbGl6ZWQsXG4gICAgICAgIGNhY2hlOiBjYWNoZVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICB2YXIgc2VyaWFsaXplZCA9IHNlcmlhbGl6ZVN0eWxlcyhbc3R5bGVzXSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChJbm5lckdsb2JhbCwge1xuICAgIHNlcmlhbGl6ZWQ6IHNlcmlhbGl6ZWQsXG4gICAgY2FjaGU6IGNhY2hlXG4gIH0pO1xufSk7XG5cbi8vIG1haW50YWluIHBsYWNlIG92ZXIgcmVyZW5kZXJzLlxuLy8gaW5pdGlhbCByZW5kZXIgZnJvbSBicm93c2VyLCBpbnNlcnRCZWZvcmUgY29udGV4dC5zaGVldC50YWdzWzBdIG9yIGlmIGEgc3R5bGUgaGFzbid0IGJlZW4gaW5zZXJ0ZWQgdGhlcmUgeWV0LCBhcHBlbmRDaGlsZFxuLy8gaW5pdGlhbCBjbGllbnQtc2lkZSByZW5kZXIgZnJvbSBTU1IsIHVzZSBwbGFjZSBvZiBoeWRyYXRpbmcgdGFnXG52YXIgSW5uZXJHbG9iYWwgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoSW5uZXJHbG9iYWwsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIElubmVyR2xvYmFsKHByb3BzLCBjb250ZXh0LCB1cGRhdGVyKSB7XG4gICAgcmV0dXJuIF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCwgdXBkYXRlcikgfHwgdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBJbm5lckdsb2JhbC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5zaGVldCA9IG5ldyBTdHlsZVNoZWV0KHtcbiAgICAgIGtleTogdGhpcy5wcm9wcy5jYWNoZS5rZXkgKyBcIi1nbG9iYWxcIixcbiAgICAgIG5vbmNlOiB0aGlzLnByb3BzLmNhY2hlLnNoZWV0Lm5vbmNlLFxuICAgICAgY29udGFpbmVyOiB0aGlzLnByb3BzLmNhY2hlLnNoZWV0LmNvbnRhaW5lclxuICAgIH0pOyAvLyAkRmxvd0ZpeE1lXG5cbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzdHlsZVtkYXRhLWVtb3Rpb24tXCIgKyB0aGlzLnByb3BzLmNhY2hlLmtleSArIFwiPVxcXCJcIiArIHRoaXMucHJvcHMuc2VyaWFsaXplZC5uYW1lICsgXCJcXFwiXVwiKTtcblxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnNoZWV0LnRhZ3MucHVzaChub2RlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5jYWNoZS5zaGVldC50YWdzLmxlbmd0aCkge1xuICAgICAgdGhpcy5zaGVldC5iZWZvcmUgPSB0aGlzLnByb3BzLmNhY2hlLnNoZWV0LnRhZ3NbMF07XG4gICAgfVxuXG4gICAgdGhpcy5pbnNlcnRTdHlsZXMoKTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGlmIChwcmV2UHJvcHMuc2VyaWFsaXplZC5uYW1lICE9PSB0aGlzLnByb3BzLnNlcmlhbGl6ZWQubmFtZSkge1xuICAgICAgdGhpcy5pbnNlcnRTdHlsZXMoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmluc2VydFN0eWxlcyA9IGZ1bmN0aW9uIGluc2VydFN0eWxlcyQxKCkge1xuICAgIGlmICh0aGlzLnByb3BzLnNlcmlhbGl6ZWQubmV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBpbnNlcnQga2V5ZnJhbWVzXG4gICAgICBpbnNlcnRTdHlsZXModGhpcy5wcm9wcy5jYWNoZSwgdGhpcy5wcm9wcy5zZXJpYWxpemVkLm5leHQsIHRydWUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNoZWV0LnRhZ3MubGVuZ3RoKSB7XG4gICAgICAvLyBpZiB0aGlzIGRvZXNuJ3QgZXhpc3QgdGhlbiBpdCB3aWxsIGJlIG51bGwgc28gdGhlIHN0eWxlIGVsZW1lbnQgd2lsbCBiZSBhcHBlbmRlZFxuICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLnNoZWV0LnRhZ3NbdGhpcy5zaGVldC50YWdzLmxlbmd0aCAtIDFdLm5leHRFbGVtZW50U2libGluZztcbiAgICAgIHRoaXMuc2hlZXQuYmVmb3JlID0gZWxlbWVudDtcbiAgICAgIHRoaXMuc2hlZXQuZmx1c2goKTtcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLmNhY2hlLmluc2VydChcIlwiLCB0aGlzLnByb3BzLnNlcmlhbGl6ZWQsIHRoaXMuc2hlZXQsIGZhbHNlKTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnNoZWV0LmZsdXNoKCk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcblxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIHJldHVybiBJbm5lckdsb2JhbDtcbn0oQ29tcG9uZW50KTtcblxudmFyIGtleWZyYW1lcyA9IGZ1bmN0aW9uIGtleWZyYW1lcygpIHtcbiAgdmFyIGluc2VydGFibGUgPSBjc3MuYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpO1xuICB2YXIgbmFtZSA9IFwiYW5pbWF0aW9uLVwiICsgaW5zZXJ0YWJsZS5uYW1lOyAvLyAkRmxvd0ZpeE1lXG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBuYW1lLFxuICAgIHN0eWxlczogXCJAa2V5ZnJhbWVzIFwiICsgbmFtZSArIFwie1wiICsgaW5zZXJ0YWJsZS5zdHlsZXMgKyBcIn1cIixcbiAgICBhbmltOiAxLFxuICAgIHRvU3RyaW5nOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgIHJldHVybiBcIl9FTU9fXCIgKyB0aGlzLm5hbWUgKyBcIl9cIiArIHRoaXMuc3R5bGVzICsgXCJfRU1PX1wiO1xuICAgIH1cbiAgfTtcbn07XG5cbnZhciBjbGFzc25hbWVzID0gZnVuY3Rpb24gY2xhc3NuYW1lcyhhcmdzKSB7XG4gIHZhciBsZW4gPSBhcmdzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgY2xzID0gJyc7XG5cbiAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgIHZhciBhcmcgPSBhcmdzW2ldO1xuICAgIGlmIChhcmcgPT0gbnVsbCkgY29udGludWU7XG4gICAgdmFyIHRvQWRkID0gdm9pZCAwO1xuXG4gICAgc3dpdGNoICh0eXBlb2YgYXJnKSB7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG4gICAgICAgICAgICB0b0FkZCA9IGNsYXNzbmFtZXMoYXJnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG9BZGQgPSAnJztcblxuICAgICAgICAgICAgZm9yICh2YXIgayBpbiBhcmcpIHtcbiAgICAgICAgICAgICAgaWYgKGFyZ1trXSAmJiBrKSB7XG4gICAgICAgICAgICAgICAgdG9BZGQgJiYgKHRvQWRkICs9ICcgJyk7XG4gICAgICAgICAgICAgICAgdG9BZGQgKz0gaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHtcbiAgICAgICAgICB0b0FkZCA9IGFyZztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0b0FkZCkge1xuICAgICAgY2xzICYmIChjbHMgKz0gJyAnKTtcbiAgICAgIGNscyArPSB0b0FkZDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY2xzO1xufTtcblxuZnVuY3Rpb24gbWVyZ2UocmVnaXN0ZXJlZCwgY3NzLCBjbGFzc05hbWUpIHtcbiAgdmFyIHJlZ2lzdGVyZWRTdHlsZXMgPSBbXTtcbiAgdmFyIHJhd0NsYXNzTmFtZSA9IGdldFJlZ2lzdGVyZWRTdHlsZXMocmVnaXN0ZXJlZCwgcmVnaXN0ZXJlZFN0eWxlcywgY2xhc3NOYW1lKTtcblxuICBpZiAocmVnaXN0ZXJlZFN0eWxlcy5sZW5ndGggPCAyKSB7XG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgfVxuXG4gIHJldHVybiByYXdDbGFzc05hbWUgKyBjc3MocmVnaXN0ZXJlZFN0eWxlcyk7XG59XG5cbnZhciBOb29wID0gZnVuY3Rpb24gTm9vcCgpIHtcbiAgcmV0dXJuIG51bGw7XG59O1xuXG52YXIgQ2xhc3NOYW1lcyA9IHdpdGhFbW90aW9uQ2FjaGUoZnVuY3Rpb24gKHByb3BzLCBjb250ZXh0KSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChUaGVtZUNvbnRleHQuQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uICh0aGVtZSkge1xuICAgIHZhciBoYXNSZW5kZXJlZCA9IGZhbHNlO1xuXG4gICAgdmFyIGNzcyA9IGZ1bmN0aW9uIGNzcygpIHtcbiAgICAgIGlmIChoYXNSZW5kZXJlZCAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY3NzIGNhbiBvbmx5IGJlIHVzZWQgZHVyaW5nIHJlbmRlcicpO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgdmFyIHNlcmlhbGl6ZWQgPSBzZXJpYWxpemVTdHlsZXMoYXJncywgY29udGV4dC5yZWdpc3RlcmVkKTtcblxuICAgICAge1xuICAgICAgICBpbnNlcnRTdHlsZXMoY29udGV4dCwgc2VyaWFsaXplZCwgZmFsc2UpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGV4dC5rZXkgKyBcIi1cIiArIHNlcmlhbGl6ZWQubmFtZTtcbiAgICB9O1xuXG4gICAgdmFyIGN4ID0gZnVuY3Rpb24gY3goKSB7XG4gICAgICBpZiAoaGFzUmVuZGVyZWQgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2N4IGNhbiBvbmx5IGJlIHVzZWQgZHVyaW5nIHJlbmRlcicpO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbWVyZ2UoY29udGV4dC5yZWdpc3RlcmVkLCBjc3MsIGNsYXNzbmFtZXMoYXJncykpO1xuICAgIH07XG5cbiAgICB2YXIgY29udGVudCA9IHtcbiAgICAgIGNzczogY3NzLFxuICAgICAgY3g6IGN4LFxuICAgICAgdGhlbWU6IHRoZW1lXG4gICAgfTtcbiAgICB2YXIgZWxlID0gcHJvcHMuY2hpbGRyZW4oY29udGVudCk7XG4gICAgaGFzUmVuZGVyZWQgPSB0cnVlO1xuICAgIHZhciBwb3NzaWJseVN0eWxlRWxlbWVudCA9IC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KE5vb3AsIG51bGwpO1xuXG5cbiAgICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoRnJhZ21lbnQsIG51bGwsIHBvc3NpYmx5U3R5bGVFbGVtZW50LCBlbGUpO1xuICB9KTtcbn0pO1xuXG5leHBvcnQgeyBDbGFzc05hbWVzLCBHbG9iYWwsIGpzeCBhcyBjcmVhdGVFbGVtZW50LCBqc3gsIGtleWZyYW1lcyB9O1xuIiwiaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzTG9vc2UnO1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgZm9yd2FyZFJlZiwgY3JlYXRlRWxlbWVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3JlYXRlQ2FjaGUgZnJvbSAnQGVtb3Rpb24vY2FjaGUnO1xuaW1wb3J0IHsgZ2V0UmVnaXN0ZXJlZFN0eWxlcywgaW5zZXJ0U3R5bGVzIH0gZnJvbSAnQGVtb3Rpb24vdXRpbHMnO1xuaW1wb3J0IHsgc2VyaWFsaXplU3R5bGVzIH0gZnJvbSAnQGVtb3Rpb24vc2VyaWFsaXplJztcblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIEVtb3Rpb25DYWNoZUNvbnRleHQgPSAvKiNfX1BVUkVfXyovY3JlYXRlQ29udGV4dCggLy8gd2UncmUgZG9pbmcgdGhpcyB0byBhdm9pZCBwcmVjb25zdHJ1Y3QncyBkZWFkIGNvZGUgZWxpbWluYXRpb24gaW4gdGhpcyBvbmUgY2FzZVxuLy8gYmVjYXVzZSB0aGlzIG1vZHVsZSBpcyBwcmltYXJpbHkgaW50ZW5kZWQgZm9yIHRoZSBicm93c2VyIGFuZCBub2RlXG4vLyBidXQgaXQncyBhbHNvIHJlcXVpcmVkIGluIHJlYWN0IG5hdGl2ZSBhbmQgc2ltaWxhciBlbnZpcm9ubWVudHMgc29tZXRpbWVzXG4vLyBhbmQgd2UgY291bGQgaGF2ZSBhIHNwZWNpYWwgYnVpbGQganVzdCBmb3IgdGhhdFxuLy8gYnV0IHRoaXMgaXMgbXVjaCBlYXNpZXIgYW5kIHRoZSBuYXRpdmUgcGFja2FnZXNcbi8vIG1pZ2h0IHVzZSBhIGRpZmZlcmVudCB0aGVtZSBjb250ZXh0IGluIHRoZSBmdXR1cmUgYW55d2F5XG50eXBlb2YgSFRNTEVsZW1lbnQgIT09ICd1bmRlZmluZWQnID8gY3JlYXRlQ2FjaGUoKSA6IG51bGwpO1xudmFyIFRoZW1lQ29udGV4dCA9IC8qI19fUFVSRV9fKi9jcmVhdGVDb250ZXh0KHt9KTtcbnZhciBDYWNoZVByb3ZpZGVyID0gRW1vdGlvbkNhY2hlQ29udGV4dC5Qcm92aWRlcjtcblxudmFyIHdpdGhFbW90aW9uQ2FjaGUgPSBmdW5jdGlvbiB3aXRoRW1vdGlvbkNhY2hlKGZ1bmMpIHtcbiAgdmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcihwcm9wcywgcmVmKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KEVtb3Rpb25DYWNoZUNvbnRleHQuQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChjYWNoZSkge1xuICAgICAgcmV0dXJuIGZ1bmMocHJvcHMsIGNhY2hlLCByZWYpO1xuICAgIH0pO1xuICB9OyAvLyAkRmxvd0ZpeE1lXG5cblxuICByZXR1cm4gLyojX19QVVJFX18qL2ZvcndhcmRSZWYocmVuZGVyKTtcbn07XG5cbi8vIHRodXMgd2Ugb25seSBuZWVkIHRvIHJlcGxhY2Ugd2hhdCBpcyBhIHZhbGlkIGNoYXJhY3RlciBmb3IgSlMsIGJ1dCBub3QgZm9yIENTU1xuXG52YXIgc2FuaXRpemVJZGVudGlmaWVyID0gZnVuY3Rpb24gc2FuaXRpemVJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgcmV0dXJuIGlkZW50aWZpZXIucmVwbGFjZSgvXFwkL2csICctJyk7XG59O1xuXG52YXIgdHlwZVByb3BOYW1lID0gJ19fRU1PVElPTl9UWVBFX1BMRUFTRV9ET19OT1RfVVNFX18nO1xudmFyIGxhYmVsUHJvcE5hbWUgPSAnX19FTU9USU9OX0xBQkVMX1BMRUFTRV9ET19OT1RfVVNFX18nO1xudmFyIGNyZWF0ZUVtb3Rpb25Qcm9wcyA9IGZ1bmN0aW9uIGNyZWF0ZUVtb3Rpb25Qcm9wcyh0eXBlLCBwcm9wcykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgcHJvcHMuY3NzID09PSAnc3RyaW5nJyAmJiAvLyBjaGVjayBpZiB0aGVyZSBpcyBhIGNzcyBkZWNsYXJhdGlvblxuICBwcm9wcy5jc3MuaW5kZXhPZignOicpICE9PSAtMSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlN0cmluZ3MgYXJlIG5vdCBhbGxvd2VkIGFzIGNzcyBwcm9wIHZhbHVlcywgcGxlYXNlIHdyYXAgaXQgaW4gYSBjc3MgdGVtcGxhdGUgbGl0ZXJhbCBmcm9tICdAZW1vdGlvbi9jc3MnIGxpa2UgdGhpczogY3NzYFwiICsgcHJvcHMuY3NzICsgXCJgXCIpO1xuICB9XG5cbiAgdmFyIG5ld1Byb3BzID0ge307XG5cbiAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwocHJvcHMsIGtleSkpIHtcbiAgICAgIG5ld1Byb3BzW2tleV0gPSBwcm9wc1trZXldO1xuICAgIH1cbiAgfVxuXG4gIG5ld1Byb3BzW3R5cGVQcm9wTmFtZV0gPSB0eXBlOyAvLyBUT0RPOiBjaGVjayBpZiB0aGlzIHN0aWxsIHdvcmtzIHdpdGggYWxsIG9mIHRob3NlIGRpZmZlcmVudCBKU1ggZnVuY3Rpb25zXG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcblxuICAgIGlmIChlcnJvci5zdGFjaykge1xuICAgICAgLy8gY2hyb21lXG4gICAgICB2YXIgbWF0Y2ggPSBlcnJvci5zdGFjay5tYXRjaCgvYXQgKD86T2JqZWN0XFwufE1vZHVsZVxcLnwpKD86anN4fGNyZWF0ZUVtb3Rpb25Qcm9wcykuKlxcblxccythdCAoPzpPYmplY3RcXC58KShbQS1aXVtBLVphLXokXSspIC8pO1xuXG4gICAgICBpZiAoIW1hdGNoKSB7XG4gICAgICAgIC8vIHNhZmFyaSBhbmQgZmlyZWZveFxuICAgICAgICBtYXRjaCA9IGVycm9yLnN0YWNrLm1hdGNoKC8uKlxcbihbQS1aXVtBLVphLXokXSspQC8pO1xuICAgICAgfVxuXG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgbmV3UHJvcHNbbGFiZWxQcm9wTmFtZV0gPSBzYW5pdGl6ZUlkZW50aWZpZXIobWF0Y2hbMV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdQcm9wcztcbn07XG5cbnZhciBOb29wID0gZnVuY3Rpb24gTm9vcCgpIHtcbiAgcmV0dXJuIG51bGw7XG59O1xuXG52YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKGNhY2hlLCBwcm9wcywgdGhlbWUsIHJlZikge1xuICB2YXIgY3NzUHJvcCA9IHRoZW1lID09PSBudWxsID8gcHJvcHMuY3NzIDogcHJvcHMuY3NzKHRoZW1lKTsgLy8gc28gdGhhdCB1c2luZyBgY3NzYCBmcm9tIGBlbW90aW9uYCBhbmQgcGFzc2luZyB0aGUgcmVzdWx0IHRvIHRoZSBjc3MgcHJvcCB3b3Jrc1xuICAvLyBub3QgcGFzc2luZyB0aGUgcmVnaXN0ZXJlZCBjYWNoZSB0byBzZXJpYWxpemVTdHlsZXMgYmVjYXVzZSBpdCB3b3VsZFxuICAvLyBtYWtlIGNlcnRhaW4gYmFiZWwgb3B0aW1pc2F0aW9ucyBub3QgcG9zc2libGVcblxuICBpZiAodHlwZW9mIGNzc1Byb3AgPT09ICdzdHJpbmcnICYmIGNhY2hlLnJlZ2lzdGVyZWRbY3NzUHJvcF0gIT09IHVuZGVmaW5lZCkge1xuICAgIGNzc1Byb3AgPSBjYWNoZS5yZWdpc3RlcmVkW2Nzc1Byb3BdO1xuICB9XG5cbiAgdmFyIHR5cGUgPSBwcm9wc1t0eXBlUHJvcE5hbWVdO1xuICB2YXIgcmVnaXN0ZXJlZFN0eWxlcyA9IFtjc3NQcm9wXTtcbiAgdmFyIGNsYXNzTmFtZSA9ICcnO1xuXG4gIGlmICh0eXBlb2YgcHJvcHMuY2xhc3NOYW1lID09PSAnc3RyaW5nJykge1xuICAgIGNsYXNzTmFtZSA9IGdldFJlZ2lzdGVyZWRTdHlsZXMoY2FjaGUucmVnaXN0ZXJlZCwgcmVnaXN0ZXJlZFN0eWxlcywgcHJvcHMuY2xhc3NOYW1lKTtcbiAgfSBlbHNlIGlmIChwcm9wcy5jbGFzc05hbWUgIT0gbnVsbCkge1xuICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSArIFwiIFwiO1xuICB9XG5cbiAgdmFyIHNlcmlhbGl6ZWQgPSBzZXJpYWxpemVTdHlsZXMocmVnaXN0ZXJlZFN0eWxlcyk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgc2VyaWFsaXplZC5uYW1lLmluZGV4T2YoJy0nKSA9PT0gLTEpIHtcbiAgICB2YXIgbGFiZWxGcm9tU3RhY2sgPSBwcm9wc1tsYWJlbFByb3BOYW1lXTtcblxuICAgIGlmIChsYWJlbEZyb21TdGFjaykge1xuICAgICAgc2VyaWFsaXplZCA9IHNlcmlhbGl6ZVN0eWxlcyhbc2VyaWFsaXplZCwgJ2xhYmVsOicgKyBsYWJlbEZyb21TdGFjayArICc7J10pO1xuICAgIH1cbiAgfVxuXG4gIHZhciBydWxlcyA9IGluc2VydFN0eWxlcyhjYWNoZSwgc2VyaWFsaXplZCwgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKTtcbiAgY2xhc3NOYW1lICs9IGNhY2hlLmtleSArIFwiLVwiICsgc2VyaWFsaXplZC5uYW1lO1xuICB2YXIgbmV3UHJvcHMgPSB7fTtcblxuICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChwcm9wcywga2V5KSAmJiBrZXkgIT09ICdjc3MnICYmIGtleSAhPT0gdHlwZVByb3BOYW1lICYmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nIHx8IGtleSAhPT0gbGFiZWxQcm9wTmFtZSkpIHtcbiAgICAgIG5ld1Byb3BzW2tleV0gPSBwcm9wc1trZXldO1xuICAgIH1cbiAgfVxuXG4gIG5ld1Byb3BzLnJlZiA9IHJlZjtcbiAgbmV3UHJvcHMuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICB2YXIgZWxlID0gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQodHlwZSwgbmV3UHJvcHMpO1xuICB2YXIgcG9zc2libHlTdHlsZUVsZW1lbnQgPSAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChOb29wLCBudWxsKTtcblxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChGcmFnbWVudCwgbnVsbCwgcG9zc2libHlTdHlsZUVsZW1lbnQsIGVsZSk7XG59OyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblxuXG52YXIgRW1vdGlvbiA9IC8qICNfX1BVUkVfXyAqL3dpdGhFbW90aW9uQ2FjaGUoZnVuY3Rpb24gKHByb3BzLCBjYWNoZSwgcmVmKSB7XG4gIGlmICh0eXBlb2YgcHJvcHMuY3NzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KFRoZW1lQ29udGV4dC5Db25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKHRoZW1lKSB7XG4gICAgICByZXR1cm4gcmVuZGVyKGNhY2hlLCBwcm9wcywgdGhlbWUsIHJlZik7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gcmVuZGVyKGNhY2hlLCBwcm9wcywgbnVsbCwgcmVmKTtcbn0pO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBFbW90aW9uLmRpc3BsYXlOYW1lID0gJ0Vtb3Rpb25Dc3NQcm9wSW50ZXJuYWwnO1xufVxuXG5leHBvcnQgeyBDYWNoZVByb3ZpZGVyIGFzIEMsIEVtb3Rpb24gYXMgRSwgVGhlbWVDb250ZXh0IGFzIFQsIGNyZWF0ZUVtb3Rpb25Qcm9wcyBhcyBjLCBoYXNPd25Qcm9wZXJ0eSBhcyBoLCB3aXRoRW1vdGlvbkNhY2hlIGFzIHcgfTtcbiIsImltcG9ydCB7IHNlcmlhbGl6ZVN0eWxlcyB9IGZyb20gJ0BlbW90aW9uL3NlcmlhbGl6ZSc7XG5cbmZ1bmN0aW9uIGNzcygpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBzZXJpYWxpemVTdHlsZXMoYXJncyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNzcztcbiIsIi8qIGVzbGludC1kaXNhYmxlICovXG4vLyBJbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vZ2FyeWNvdXJ0L211cm11cmhhc2gtanNcbi8vIFBvcnRlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9hYXBwbGVieS9zbWhhc2hlci9ibG9iLzYxYTA1MzBmMjgyNzdmMmU4NTBiZmMzOTYwMGNlNjFkMDJiNTE4ZGUvc3JjL011cm11ckhhc2gyLmNwcCNMMzctTDg2XG5mdW5jdGlvbiBtdXJtdXIyKHN0cikge1xuICAvLyAnbScgYW5kICdyJyBhcmUgbWl4aW5nIGNvbnN0YW50cyBnZW5lcmF0ZWQgb2ZmbGluZS5cbiAgLy8gVGhleSdyZSBub3QgcmVhbGx5ICdtYWdpYycsIHRoZXkganVzdCBoYXBwZW4gdG8gd29yayB3ZWxsLlxuICAvLyBjb25zdCBtID0gMHg1YmQxZTk5NTtcbiAgLy8gY29uc3QgciA9IDI0O1xuICAvLyBJbml0aWFsaXplIHRoZSBoYXNoXG4gIHZhciBoID0gMDsgLy8gTWl4IDQgYnl0ZXMgYXQgYSB0aW1lIGludG8gdGhlIGhhc2hcblxuICB2YXIgayxcbiAgICAgIGkgPSAwLFxuICAgICAgbGVuID0gc3RyLmxlbmd0aDtcblxuICBmb3IgKDsgbGVuID49IDQ7ICsraSwgbGVuIC09IDQpIHtcbiAgICBrID0gc3RyLmNoYXJDb2RlQXQoaSkgJiAweGZmIHwgKHN0ci5jaGFyQ29kZUF0KCsraSkgJiAweGZmKSA8PCA4IHwgKHN0ci5jaGFyQ29kZUF0KCsraSkgJiAweGZmKSA8PCAxNiB8IChzdHIuY2hhckNvZGVBdCgrK2kpICYgMHhmZikgPDwgMjQ7XG4gICAgayA9XG4gICAgLyogTWF0aC5pbXVsKGssIG0pOiAqL1xuICAgIChrICYgMHhmZmZmKSAqIDB4NWJkMWU5OTUgKyAoKGsgPj4+IDE2KSAqIDB4ZTk5NSA8PCAxNik7XG4gICAgayBePVxuICAgIC8qIGsgPj4+IHI6ICovXG4gICAgayA+Pj4gMjQ7XG4gICAgaCA9XG4gICAgLyogTWF0aC5pbXVsKGssIG0pOiAqL1xuICAgIChrICYgMHhmZmZmKSAqIDB4NWJkMWU5OTUgKyAoKGsgPj4+IDE2KSAqIDB4ZTk5NSA8PCAxNikgXlxuICAgIC8qIE1hdGguaW11bChoLCBtKTogKi9cbiAgICAoaCAmIDB4ZmZmZikgKiAweDViZDFlOTk1ICsgKChoID4+PiAxNikgKiAweGU5OTUgPDwgMTYpO1xuICB9IC8vIEhhbmRsZSB0aGUgbGFzdCBmZXcgYnl0ZXMgb2YgdGhlIGlucHV0IGFycmF5XG5cblxuICBzd2l0Y2ggKGxlbikge1xuICAgIGNhc2UgMzpcbiAgICAgIGggXj0gKHN0ci5jaGFyQ29kZUF0KGkgKyAyKSAmIDB4ZmYpIDw8IDE2O1xuXG4gICAgY2FzZSAyOlxuICAgICAgaCBePSAoc3RyLmNoYXJDb2RlQXQoaSArIDEpICYgMHhmZikgPDwgODtcblxuICAgIGNhc2UgMTpcbiAgICAgIGggXj0gc3RyLmNoYXJDb2RlQXQoaSkgJiAweGZmO1xuICAgICAgaCA9XG4gICAgICAvKiBNYXRoLmltdWwoaCwgbSk6ICovXG4gICAgICAoaCAmIDB4ZmZmZikgKiAweDViZDFlOTk1ICsgKChoID4+PiAxNikgKiAweGU5OTUgPDwgMTYpO1xuICB9IC8vIERvIGEgZmV3IGZpbmFsIG1peGVzIG9mIHRoZSBoYXNoIHRvIGVuc3VyZSB0aGUgbGFzdCBmZXdcbiAgLy8gYnl0ZXMgYXJlIHdlbGwtaW5jb3Jwb3JhdGVkLlxuXG5cbiAgaCBePSBoID4+PiAxMztcbiAgaCA9XG4gIC8qIE1hdGguaW11bChoLCBtKTogKi9cbiAgKGggJiAweGZmZmYpICogMHg1YmQxZTk5NSArICgoaCA+Pj4gMTYpICogMHhlOTk1IDw8IDE2KTtcbiAgcmV0dXJuICgoaCBeIGggPj4+IDE1KSA+Pj4gMCkudG9TdHJpbmcoMzYpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtdXJtdXIyO1xuIiwiaW1wb3J0IG1lbW9pemUgZnJvbSAnQGVtb3Rpb24vbWVtb2l6ZSc7XG5cbnZhciByZWFjdFByb3BzUmVnZXggPSAvXigoY2hpbGRyZW58ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUx8a2V5fHJlZnxhdXRvRm9jdXN8ZGVmYXVsdFZhbHVlfGRlZmF1bHRDaGVja2VkfGlubmVySFRNTHxzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmd8c3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nfHZhbHVlTGlua3xhY2NlcHR8YWNjZXB0Q2hhcnNldHxhY2Nlc3NLZXl8YWN0aW9ufGFsbG93fGFsbG93VXNlck1lZGlhfGFsbG93UGF5bWVudFJlcXVlc3R8YWxsb3dGdWxsU2NyZWVufGFsbG93VHJhbnNwYXJlbmN5fGFsdHxhc3luY3xhdXRvQ29tcGxldGV8YXV0b1BsYXl8Y2FwdHVyZXxjZWxsUGFkZGluZ3xjZWxsU3BhY2luZ3xjaGFsbGVuZ2V8Y2hhclNldHxjaGVja2VkfGNpdGV8Y2xhc3NJRHxjbGFzc05hbWV8Y29sc3xjb2xTcGFufGNvbnRlbnR8Y29udGVudEVkaXRhYmxlfGNvbnRleHRNZW51fGNvbnRyb2xzfGNvbnRyb2xzTGlzdHxjb29yZHN8Y3Jvc3NPcmlnaW58ZGF0YXxkYXRlVGltZXxkZWNvZGluZ3xkZWZhdWx0fGRlZmVyfGRpcnxkaXNhYmxlZHxkaXNhYmxlUGljdHVyZUluUGljdHVyZXxkb3dubG9hZHxkcmFnZ2FibGV8ZW5jVHlwZXxmb3JtfGZvcm1BY3Rpb258Zm9ybUVuY1R5cGV8Zm9ybU1ldGhvZHxmb3JtTm9WYWxpZGF0ZXxmb3JtVGFyZ2V0fGZyYW1lQm9yZGVyfGhlYWRlcnN8aGVpZ2h0fGhpZGRlbnxoaWdofGhyZWZ8aHJlZkxhbmd8aHRtbEZvcnxodHRwRXF1aXZ8aWR8aW5wdXRNb2RlfGludGVncml0eXxpc3xrZXlQYXJhbXN8a2V5VHlwZXxraW5kfGxhYmVsfGxhbmd8bGlzdHxsb2FkaW5nfGxvb3B8bG93fG1hcmdpbkhlaWdodHxtYXJnaW5XaWR0aHxtYXh8bWF4TGVuZ3RofG1lZGlhfG1lZGlhR3JvdXB8bWV0aG9kfG1pbnxtaW5MZW5ndGh8bXVsdGlwbGV8bXV0ZWR8bmFtZXxub25jZXxub1ZhbGlkYXRlfG9wZW58b3B0aW11bXxwYXR0ZXJufHBsYWNlaG9sZGVyfHBsYXlzSW5saW5lfHBvc3RlcnxwcmVsb2FkfHByb2ZpbGV8cmFkaW9Hcm91cHxyZWFkT25seXxyZWZlcnJlclBvbGljeXxyZWx8cmVxdWlyZWR8cmV2ZXJzZWR8cm9sZXxyb3dzfHJvd1NwYW58c2FuZGJveHxzY29wZXxzY29wZWR8c2Nyb2xsaW5nfHNlYW1sZXNzfHNlbGVjdGVkfHNoYXBlfHNpemV8c2l6ZXN8c2xvdHxzcGFufHNwZWxsQ2hlY2t8c3JjfHNyY0RvY3xzcmNMYW5nfHNyY1NldHxzdGFydHxzdGVwfHN0eWxlfHN1bW1hcnl8dGFiSW5kZXh8dGFyZ2V0fHRpdGxlfHR5cGV8dXNlTWFwfHZhbHVlfHdpZHRofHdtb2RlfHdyYXB8YWJvdXR8ZGF0YXR5cGV8aW5saXN0fHByZWZpeHxwcm9wZXJ0eXxyZXNvdXJjZXx0eXBlb2Z8dm9jYWJ8YXV0b0NhcGl0YWxpemV8YXV0b0NvcnJlY3R8YXV0b1NhdmV8Y29sb3J8aW5lcnR8aXRlbVByb3B8aXRlbVNjb3BlfGl0ZW1UeXBlfGl0ZW1JRHxpdGVtUmVmfG9ufHJlc3VsdHN8c2VjdXJpdHl8dW5zZWxlY3RhYmxlfGFjY2VudEhlaWdodHxhY2N1bXVsYXRlfGFkZGl0aXZlfGFsaWdubWVudEJhc2VsaW5lfGFsbG93UmVvcmRlcnxhbHBoYWJldGljfGFtcGxpdHVkZXxhcmFiaWNGb3JtfGFzY2VudHxhdHRyaWJ1dGVOYW1lfGF0dHJpYnV0ZVR5cGV8YXV0b1JldmVyc2V8YXppbXV0aHxiYXNlRnJlcXVlbmN5fGJhc2VsaW5lU2hpZnR8YmFzZVByb2ZpbGV8YmJveHxiZWdpbnxiaWFzfGJ5fGNhbGNNb2RlfGNhcEhlaWdodHxjbGlwfGNsaXBQYXRoVW5pdHN8Y2xpcFBhdGh8Y2xpcFJ1bGV8Y29sb3JJbnRlcnBvbGF0aW9ufGNvbG9ySW50ZXJwb2xhdGlvbkZpbHRlcnN8Y29sb3JQcm9maWxlfGNvbG9yUmVuZGVyaW5nfGNvbnRlbnRTY3JpcHRUeXBlfGNvbnRlbnRTdHlsZVR5cGV8Y3Vyc29yfGN4fGN5fGR8ZGVjZWxlcmF0ZXxkZXNjZW50fGRpZmZ1c2VDb25zdGFudHxkaXJlY3Rpb258ZGlzcGxheXxkaXZpc29yfGRvbWluYW50QmFzZWxpbmV8ZHVyfGR4fGR5fGVkZ2VNb2RlfGVsZXZhdGlvbnxlbmFibGVCYWNrZ3JvdW5kfGVuZHxleHBvbmVudHxleHRlcm5hbFJlc291cmNlc1JlcXVpcmVkfGZpbGx8ZmlsbE9wYWNpdHl8ZmlsbFJ1bGV8ZmlsdGVyfGZpbHRlclJlc3xmaWx0ZXJVbml0c3xmbG9vZENvbG9yfGZsb29kT3BhY2l0eXxmb2N1c2FibGV8Zm9udEZhbWlseXxmb250U2l6ZXxmb250U2l6ZUFkanVzdHxmb250U3RyZXRjaHxmb250U3R5bGV8Zm9udFZhcmlhbnR8Zm9udFdlaWdodHxmb3JtYXR8ZnJvbXxmcnxmeHxmeXxnMXxnMnxnbHlwaE5hbWV8Z2x5cGhPcmllbnRhdGlvbkhvcml6b250YWx8Z2x5cGhPcmllbnRhdGlvblZlcnRpY2FsfGdseXBoUmVmfGdyYWRpZW50VHJhbnNmb3JtfGdyYWRpZW50VW5pdHN8aGFuZ2luZ3xob3JpekFkdlh8aG9yaXpPcmlnaW5YfGlkZW9ncmFwaGljfGltYWdlUmVuZGVyaW5nfGlufGluMnxpbnRlcmNlcHR8a3xrMXxrMnxrM3xrNHxrZXJuZWxNYXRyaXh8a2VybmVsVW5pdExlbmd0aHxrZXJuaW5nfGtleVBvaW50c3xrZXlTcGxpbmVzfGtleVRpbWVzfGxlbmd0aEFkanVzdHxsZXR0ZXJTcGFjaW5nfGxpZ2h0aW5nQ29sb3J8bGltaXRpbmdDb25lQW5nbGV8bG9jYWx8bWFya2VyRW5kfG1hcmtlck1pZHxtYXJrZXJTdGFydHxtYXJrZXJIZWlnaHR8bWFya2VyVW5pdHN8bWFya2VyV2lkdGh8bWFza3xtYXNrQ29udGVudFVuaXRzfG1hc2tVbml0c3xtYXRoZW1hdGljYWx8bW9kZXxudW1PY3RhdmVzfG9mZnNldHxvcGFjaXR5fG9wZXJhdG9yfG9yZGVyfG9yaWVudHxvcmllbnRhdGlvbnxvcmlnaW58b3ZlcmZsb3d8b3ZlcmxpbmVQb3NpdGlvbnxvdmVybGluZVRoaWNrbmVzc3xwYW5vc2UxfHBhaW50T3JkZXJ8cGF0aExlbmd0aHxwYXR0ZXJuQ29udGVudFVuaXRzfHBhdHRlcm5UcmFuc2Zvcm18cGF0dGVyblVuaXRzfHBvaW50ZXJFdmVudHN8cG9pbnRzfHBvaW50c0F0WHxwb2ludHNBdFl8cG9pbnRzQXRafHByZXNlcnZlQWxwaGF8cHJlc2VydmVBc3BlY3RSYXRpb3xwcmltaXRpdmVVbml0c3xyfHJhZGl1c3xyZWZYfHJlZll8cmVuZGVyaW5nSW50ZW50fHJlcGVhdENvdW50fHJlcGVhdER1cnxyZXF1aXJlZEV4dGVuc2lvbnN8cmVxdWlyZWRGZWF0dXJlc3xyZXN0YXJ0fHJlc3VsdHxyb3RhdGV8cnh8cnl8c2NhbGV8c2VlZHxzaGFwZVJlbmRlcmluZ3xzbG9wZXxzcGFjaW5nfHNwZWN1bGFyQ29uc3RhbnR8c3BlY3VsYXJFeHBvbmVudHxzcGVlZHxzcHJlYWRNZXRob2R8c3RhcnRPZmZzZXR8c3RkRGV2aWF0aW9ufHN0ZW1ofHN0ZW12fHN0aXRjaFRpbGVzfHN0b3BDb2xvcnxzdG9wT3BhY2l0eXxzdHJpa2V0aHJvdWdoUG9zaXRpb258c3RyaWtldGhyb3VnaFRoaWNrbmVzc3xzdHJpbmd8c3Ryb2tlfHN0cm9rZURhc2hhcnJheXxzdHJva2VEYXNob2Zmc2V0fHN0cm9rZUxpbmVjYXB8c3Ryb2tlTGluZWpvaW58c3Ryb2tlTWl0ZXJsaW1pdHxzdHJva2VPcGFjaXR5fHN0cm9rZVdpZHRofHN1cmZhY2VTY2FsZXxzeXN0ZW1MYW5ndWFnZXx0YWJsZVZhbHVlc3x0YXJnZXRYfHRhcmdldFl8dGV4dEFuY2hvcnx0ZXh0RGVjb3JhdGlvbnx0ZXh0UmVuZGVyaW5nfHRleHRMZW5ndGh8dG98dHJhbnNmb3JtfHUxfHUyfHVuZGVybGluZVBvc2l0aW9ufHVuZGVybGluZVRoaWNrbmVzc3x1bmljb2RlfHVuaWNvZGVCaWRpfHVuaWNvZGVSYW5nZXx1bml0c1BlckVtfHZBbHBoYWJldGljfHZIYW5naW5nfHZJZGVvZ3JhcGhpY3x2TWF0aGVtYXRpY2FsfHZhbHVlc3x2ZWN0b3JFZmZlY3R8dmVyc2lvbnx2ZXJ0QWR2WXx2ZXJ0T3JpZ2luWHx2ZXJ0T3JpZ2luWXx2aWV3Qm94fHZpZXdUYXJnZXR8dmlzaWJpbGl0eXx3aWR0aHN8d29yZFNwYWNpbmd8d3JpdGluZ01vZGV8eHx4SGVpZ2h0fHgxfHgyfHhDaGFubmVsU2VsZWN0b3J8eGxpbmtBY3R1YXRlfHhsaW5rQXJjcm9sZXx4bGlua0hyZWZ8eGxpbmtSb2xlfHhsaW5rU2hvd3x4bGlua1RpdGxlfHhsaW5rVHlwZXx4bWxCYXNlfHhtbG5zfHhtbG5zWGxpbmt8eG1sTGFuZ3x4bWxTcGFjZXx5fHkxfHkyfHlDaGFubmVsU2VsZWN0b3J8enx6b29tQW5kUGFufGZvcnxjbGFzc3xhdXRvZm9jdXMpfCgoW0RkXVtBYV1bVHRdW0FhXXxbQWFdW1JyXVtJaV1bQWFdfHgpLS4qKSkkLzsgLy8gaHR0cHM6Ly9lc2JlbmNoLmNvbS9iZW5jaC81YmZlZTY4YTRjZDdlNjAwOWVmNjFkMjNcblxudmFyIGluZGV4ID0gbWVtb2l6ZShmdW5jdGlvbiAocHJvcCkge1xuICByZXR1cm4gcmVhY3RQcm9wc1JlZ2V4LnRlc3QocHJvcCkgfHwgcHJvcC5jaGFyQ29kZUF0KDApID09PSAxMTFcbiAgLyogbyAqL1xuICAmJiBwcm9wLmNoYXJDb2RlQXQoMSkgPT09IDExMFxuICAvKiBuICovXG4gICYmIHByb3AuY2hhckNvZGVBdCgyKSA8IDkxO1xufVxuLyogWisxICovXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbiIsImZ1bmN0aW9uIG1lbW9pemUoZm4pIHtcbiAgdmFyIGNhY2hlID0ge307XG4gIHJldHVybiBmdW5jdGlvbiAoYXJnKSB7XG4gICAgaWYgKGNhY2hlW2FyZ10gPT09IHVuZGVmaW5lZCkgY2FjaGVbYXJnXSA9IGZuKGFyZyk7XG4gICAgcmV0dXJuIGNhY2hlW2FyZ107XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW9pemU7XG4iLCJpbXBvcnQgaGFzaFN0cmluZyBmcm9tICdAZW1vdGlvbi9oYXNoJztcbmltcG9ydCB1bml0bGVzcyBmcm9tICdAZW1vdGlvbi91bml0bGVzcyc7XG5pbXBvcnQgbWVtb2l6ZSBmcm9tICdAZW1vdGlvbi9tZW1vaXplJztcblxudmFyIElMTEVHQUxfRVNDQVBFX1NFUVVFTkNFX0VSUk9SID0gXCJZb3UgaGF2ZSBpbGxlZ2FsIGVzY2FwZSBzZXF1ZW5jZSBpbiB5b3VyIHRlbXBsYXRlIGxpdGVyYWwsIG1vc3QgbGlrZWx5IGluc2lkZSBjb250ZW50J3MgcHJvcGVydHkgdmFsdWUuXFxuQmVjYXVzZSB5b3Ugd3JpdGUgeW91ciBDU1MgaW5zaWRlIGEgSmF2YVNjcmlwdCBzdHJpbmcgeW91IGFjdHVhbGx5IGhhdmUgdG8gZG8gZG91YmxlIGVzY2FwaW5nLCBzbyBmb3IgZXhhbXBsZSBcXFwiY29udGVudDogJ1xcXFwwMGQ3JztcXFwiIHNob3VsZCBiZWNvbWUgXFxcImNvbnRlbnQ6ICdcXFxcXFxcXDAwZDcnO1xcXCIuXFxuWW91IGNhbiByZWFkIG1vcmUgYWJvdXQgdGhpcyBoZXJlOlxcbmh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL1RlbXBsYXRlX2xpdGVyYWxzI0VTMjAxOF9yZXZpc2lvbl9vZl9pbGxlZ2FsX2VzY2FwZV9zZXF1ZW5jZXNcIjtcbnZhciBVTkRFRklORURfQVNfT0JKRUNUX0tFWV9FUlJPUiA9IFwiWW91IGhhdmUgcGFzc2VkIGluIGZhbHN5IHZhbHVlIGFzIHN0eWxlIG9iamVjdCdzIGtleSAoY2FuIGhhcHBlbiB3aGVuIGluIGV4YW1wbGUgeW91IHBhc3MgdW5leHBvcnRlZCBjb21wb25lbnQgYXMgY29tcHV0ZWQga2V5KS5cIjtcbnZhciBoeXBoZW5hdGVSZWdleCA9IC9bQS1aXXxebXMvZztcbnZhciBhbmltYXRpb25SZWdleCA9IC9fRU1PXyhbXl9dKz8pXyhbXl0qPylfRU1PXy9nO1xuXG52YXIgaXNDdXN0b21Qcm9wZXJ0eSA9IGZ1bmN0aW9uIGlzQ3VzdG9tUHJvcGVydHkocHJvcGVydHkpIHtcbiAgcmV0dXJuIHByb3BlcnR5LmNoYXJDb2RlQXQoMSkgPT09IDQ1O1xufTtcblxudmFyIGlzUHJvY2Vzc2FibGVWYWx1ZSA9IGZ1bmN0aW9uIGlzUHJvY2Vzc2FibGVWYWx1ZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgIT09ICdib29sZWFuJztcbn07XG5cbnZhciBwcm9jZXNzU3R5bGVOYW1lID0gbWVtb2l6ZShmdW5jdGlvbiAoc3R5bGVOYW1lKSB7XG4gIHJldHVybiBpc0N1c3RvbVByb3BlcnR5KHN0eWxlTmFtZSkgPyBzdHlsZU5hbWUgOiBzdHlsZU5hbWUucmVwbGFjZShoeXBoZW5hdGVSZWdleCwgJy0kJicpLnRvTG93ZXJDYXNlKCk7XG59KTtcblxudmFyIHByb2Nlc3NTdHlsZVZhbHVlID0gZnVuY3Rpb24gcHJvY2Vzc1N0eWxlVmFsdWUoa2V5LCB2YWx1ZSkge1xuICBzd2l0Y2ggKGtleSkge1xuICAgIGNhc2UgJ2FuaW1hdGlvbic6XG4gICAgY2FzZSAnYW5pbWF0aW9uTmFtZSc6XG4gICAgICB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoYW5pbWF0aW9uUmVnZXgsIGZ1bmN0aW9uIChtYXRjaCwgcDEsIHAyKSB7XG4gICAgICAgICAgICBjdXJzb3IgPSB7XG4gICAgICAgICAgICAgIG5hbWU6IHAxLFxuICAgICAgICAgICAgICBzdHlsZXM6IHAyLFxuICAgICAgICAgICAgICBuZXh0OiBjdXJzb3JcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gcDE7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgfVxuXG4gIGlmICh1bml0bGVzc1trZXldICE9PSAxICYmICFpc0N1c3RvbVByb3BlcnR5KGtleSkgJiYgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiB2YWx1ZSAhPT0gMCkge1xuICAgIHJldHVybiB2YWx1ZSArICdweCc7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgY29udGVudFZhbHVlUGF0dGVybiA9IC8oYXR0cnxjYWxjfGNvdW50ZXJzP3x1cmwpXFwoLztcbiAgdmFyIGNvbnRlbnRWYWx1ZXMgPSBbJ25vcm1hbCcsICdub25lJywgJ2NvdW50ZXInLCAnb3Blbi1xdW90ZScsICdjbG9zZS1xdW90ZScsICduby1vcGVuLXF1b3RlJywgJ25vLWNsb3NlLXF1b3RlJywgJ2luaXRpYWwnLCAnaW5oZXJpdCcsICd1bnNldCddO1xuICB2YXIgb2xkUHJvY2Vzc1N0eWxlVmFsdWUgPSBwcm9jZXNzU3R5bGVWYWx1ZTtcbiAgdmFyIG1zUGF0dGVybiA9IC9eLW1zLS87XG4gIHZhciBoeXBoZW5QYXR0ZXJuID0gLy0oLikvZztcbiAgdmFyIGh5cGhlbmF0ZWRDYWNoZSA9IHt9O1xuXG4gIHByb2Nlc3NTdHlsZVZhbHVlID0gZnVuY3Rpb24gcHJvY2Vzc1N0eWxlVmFsdWUoa2V5LCB2YWx1ZSkge1xuICAgIGlmIChrZXkgPT09ICdjb250ZW50Jykge1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycgfHwgY29udGVudFZhbHVlcy5pbmRleE9mKHZhbHVlKSA9PT0gLTEgJiYgIWNvbnRlbnRWYWx1ZVBhdHRlcm4udGVzdCh2YWx1ZSkgJiYgKHZhbHVlLmNoYXJBdCgwKSAhPT0gdmFsdWUuY2hhckF0KHZhbHVlLmxlbmd0aCAtIDEpIHx8IHZhbHVlLmNoYXJBdCgwKSAhPT0gJ1wiJyAmJiB2YWx1ZS5jaGFyQXQoMCkgIT09IFwiJ1wiKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiWW91IHNlZW0gdG8gYmUgdXNpbmcgYSB2YWx1ZSBmb3IgJ2NvbnRlbnQnIHdpdGhvdXQgcXVvdGVzLCB0cnkgcmVwbGFjaW5nIGl0IHdpdGggYGNvbnRlbnQ6ICdcXFwiXCIgKyB2YWx1ZSArIFwiXFxcIidgXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcm9jZXNzZWQgPSBvbGRQcm9jZXNzU3R5bGVWYWx1ZShrZXksIHZhbHVlKTtcblxuICAgIGlmIChwcm9jZXNzZWQgIT09ICcnICYmICFpc0N1c3RvbVByb3BlcnR5KGtleSkgJiYga2V5LmluZGV4T2YoJy0nKSAhPT0gLTEgJiYgaHlwaGVuYXRlZENhY2hlW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgaHlwaGVuYXRlZENhY2hlW2tleV0gPSB0cnVlO1xuICAgICAgY29uc29sZS5lcnJvcihcIlVzaW5nIGtlYmFiLWNhc2UgZm9yIGNzcyBwcm9wZXJ0aWVzIGluIG9iamVjdHMgaXMgbm90IHN1cHBvcnRlZC4gRGlkIHlvdSBtZWFuIFwiICsga2V5LnJlcGxhY2UobXNQYXR0ZXJuLCAnbXMtJykucmVwbGFjZShoeXBoZW5QYXR0ZXJuLCBmdW5jdGlvbiAoc3RyLCBfY2hhcikge1xuICAgICAgICByZXR1cm4gX2NoYXIudG9VcHBlckNhc2UoKTtcbiAgICAgIH0pICsgXCI/XCIpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9jZXNzZWQ7XG4gIH07XG59XG5cbnZhciBzaG91bGRXYXJuQWJvdXRJbnRlcnBvbGF0aW5nQ2xhc3NOYW1lRnJvbUNzcyA9IHRydWU7XG5cbmZ1bmN0aW9uIGhhbmRsZUludGVycG9sYXRpb24obWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIGludGVycG9sYXRpb24sIGNvdWxkQmVTZWxlY3RvckludGVycG9sYXRpb24pIHtcbiAgaWYgKGludGVycG9sYXRpb24gPT0gbnVsbCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmIChpbnRlcnBvbGF0aW9uLl9fZW1vdGlvbl9zdHlsZXMgIT09IHVuZGVmaW5lZCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGludGVycG9sYXRpb24udG9TdHJpbmcoKSA9PT0gJ05PX0NPTVBPTkVOVF9TRUxFQ1RPUicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ29tcG9uZW50IHNlbGVjdG9ycyBjYW4gb25seSBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYmFiZWwtcGx1Z2luLWVtb3Rpb24uJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGludGVycG9sYXRpb247XG4gIH1cblxuICBzd2l0Y2ggKHR5cGVvZiBpbnRlcnBvbGF0aW9uKSB7XG4gICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cblxuICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICB7XG4gICAgICAgIGlmIChpbnRlcnBvbGF0aW9uLmFuaW0gPT09IDEpIHtcbiAgICAgICAgICBjdXJzb3IgPSB7XG4gICAgICAgICAgICBuYW1lOiBpbnRlcnBvbGF0aW9uLm5hbWUsXG4gICAgICAgICAgICBzdHlsZXM6IGludGVycG9sYXRpb24uc3R5bGVzLFxuICAgICAgICAgICAgbmV4dDogY3Vyc29yXG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXR1cm4gaW50ZXJwb2xhdGlvbi5uYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGludGVycG9sYXRpb24uc3R5bGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB2YXIgbmV4dCA9IGludGVycG9sYXRpb24ubmV4dDtcblxuICAgICAgICAgIGlmIChuZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIG5vdCB0aGUgbW9zdCBlZmZpY2llbnQgdGhpbmcgZXZlciBidXQgdGhpcyBpcyBhIHByZXR0eSByYXJlIGNhc2VcbiAgICAgICAgICAgIC8vIGFuZCB0aGVyZSB3aWxsIGJlIHZlcnkgZmV3IGl0ZXJhdGlvbnMgb2YgdGhpcyBnZW5lcmFsbHlcbiAgICAgICAgICAgIHdoaWxlIChuZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgY3Vyc29yID0ge1xuICAgICAgICAgICAgICAgIG5hbWU6IG5leHQubmFtZSxcbiAgICAgICAgICAgICAgICBzdHlsZXM6IG5leHQuc3R5bGVzLFxuICAgICAgICAgICAgICAgIG5leHQ6IGN1cnNvclxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICBuZXh0ID0gbmV4dC5uZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBzdHlsZXMgPSBpbnRlcnBvbGF0aW9uLnN0eWxlcyArIFwiO1wiO1xuXG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgaW50ZXJwb2xhdGlvbi5tYXAgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgc3R5bGVzICs9IGludGVycG9sYXRpb24ubWFwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBzdHlsZXM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY3JlYXRlU3RyaW5nRnJvbU9iamVjdChtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgaW50ZXJwb2xhdGlvbik7XG4gICAgICB9XG5cbiAgICBjYXNlICdmdW5jdGlvbic6XG4gICAgICB7XG4gICAgICAgIGlmIChtZXJnZWRQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdmFyIHByZXZpb3VzQ3Vyc29yID0gY3Vyc29yO1xuICAgICAgICAgIHZhciByZXN1bHQgPSBpbnRlcnBvbGF0aW9uKG1lcmdlZFByb3BzKTtcbiAgICAgICAgICBjdXJzb3IgPSBwcmV2aW91c0N1cnNvcjtcbiAgICAgICAgICByZXR1cm4gaGFuZGxlSW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgcmVzdWx0LCBjb3VsZEJlU2VsZWN0b3JJbnRlcnBvbGF0aW9uKTtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRnVuY3Rpb25zIHRoYXQgYXJlIGludGVycG9sYXRlZCBpbiBjc3MgY2FsbHMgd2lsbCBiZSBzdHJpbmdpZmllZC5cXG4nICsgJ0lmIHlvdSB3YW50IHRvIGhhdmUgYSBjc3MgY2FsbCBiYXNlZCBvbiBwcm9wcywgY3JlYXRlIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgY3NzIGNhbGwgbGlrZSB0aGlzXFxuJyArICdsZXQgZHluYW1pY1N0eWxlID0gKHByb3BzKSA9PiBjc3NgY29sb3I6ICR7cHJvcHMuY29sb3J9YFxcbicgKyAnSXQgY2FuIGJlIGNhbGxlZCBkaXJlY3RseSB3aXRoIHByb3BzIG9yIGludGVycG9sYXRlZCBpbiBhIHN0eWxlZCBjYWxsIGxpa2UgdGhpc1xcbicgKyBcImxldCBTb21lQ29tcG9uZW50ID0gc3R5bGVkKCdkaXYnKWAke2R5bmFtaWNTdHlsZX1gXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdmFyIG1hdGNoZWQgPSBbXTtcbiAgICAgICAgdmFyIHJlcGxhY2VkID0gaW50ZXJwb2xhdGlvbi5yZXBsYWNlKGFuaW1hdGlvblJlZ2V4LCBmdW5jdGlvbiAobWF0Y2gsIHAxLCBwMikge1xuICAgICAgICAgIHZhciBmYWtlVmFyTmFtZSA9IFwiYW5pbWF0aW9uXCIgKyBtYXRjaGVkLmxlbmd0aDtcbiAgICAgICAgICBtYXRjaGVkLnB1c2goXCJjb25zdCBcIiArIGZha2VWYXJOYW1lICsgXCIgPSBrZXlmcmFtZXNgXCIgKyBwMi5yZXBsYWNlKC9eQGtleWZyYW1lcyBhbmltYXRpb24tXFx3Ky8sICcnKSArIFwiYFwiKTtcbiAgICAgICAgICByZXR1cm4gXCIke1wiICsgZmFrZVZhck5hbWUgKyBcIn1cIjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG1hdGNoZWQubGVuZ3RoKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignYGtleWZyYW1lc2Agb3V0cHV0IGdvdCBpbnRlcnBvbGF0ZWQgaW50byBwbGFpbiBzdHJpbmcsIHBsZWFzZSB3cmFwIGl0IHdpdGggYGNzc2AuXFxuXFxuJyArICdJbnN0ZWFkIG9mIGRvaW5nIHRoaXM6XFxuXFxuJyArIFtdLmNvbmNhdChtYXRjaGVkLCBbXCJgXCIgKyByZXBsYWNlZCArIFwiYFwiXSkuam9pbignXFxuJykgKyAnXFxuXFxuWW91IHNob3VsZCB3cmFwIGl0IHdpdGggYGNzc2AgbGlrZSB0aGlzOlxcblxcbicgKyAoXCJjc3NgXCIgKyByZXBsYWNlZCArIFwiYFwiKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gIH0gLy8gZmluYWxpemUgc3RyaW5nIHZhbHVlcyAocmVndWxhciBzdHJpbmdzIGFuZCBmdW5jdGlvbnMgaW50ZXJwb2xhdGVkIGludG8gY3NzIGNhbGxzKVxuXG5cbiAgaWYgKHJlZ2lzdGVyZWQgPT0gbnVsbCkge1xuICAgIHJldHVybiBpbnRlcnBvbGF0aW9uO1xuICB9XG5cbiAgdmFyIGNhY2hlZCA9IHJlZ2lzdGVyZWRbaW50ZXJwb2xhdGlvbl07XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgY291bGRCZVNlbGVjdG9ySW50ZXJwb2xhdGlvbiAmJiBzaG91bGRXYXJuQWJvdXRJbnRlcnBvbGF0aW5nQ2xhc3NOYW1lRnJvbUNzcyAmJiBjYWNoZWQgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0ludGVycG9sYXRpbmcgYSBjbGFzc05hbWUgZnJvbSBjc3NgYCBpcyBub3QgcmVjb21tZW5kZWQgYW5kIHdpbGwgY2F1c2UgcHJvYmxlbXMgd2l0aCBjb21wb3NpdGlvbi5cXG4nICsgJ0ludGVycG9sYXRpbmcgYSBjbGFzc05hbWUgZnJvbSBjc3NgYCB3aWxsIGJlIGNvbXBsZXRlbHkgdW5zdXBwb3J0ZWQgaW4gYSBmdXR1cmUgbWFqb3IgdmVyc2lvbiBvZiBFbW90aW9uJyk7XG4gICAgc2hvdWxkV2FybkFib3V0SW50ZXJwb2xhdGluZ0NsYXNzTmFtZUZyb21Dc3MgPSBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBjYWNoZWQgIT09IHVuZGVmaW5lZCAmJiAhY291bGRCZVNlbGVjdG9ySW50ZXJwb2xhdGlvbiA/IGNhY2hlZCA6IGludGVycG9sYXRpb247XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0cmluZ0Zyb21PYmplY3QobWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIG9iaikge1xuICB2YXIgc3RyaW5nID0gJyc7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqLmxlbmd0aDsgaSsrKSB7XG4gICAgICBzdHJpbmcgKz0gaGFuZGxlSW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgb2JqW2ldLCBmYWxzZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAodmFyIF9rZXkgaW4gb2JqKSB7XG4gICAgICB2YXIgdmFsdWUgPSBvYmpbX2tleV07XG5cbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGlmIChyZWdpc3RlcmVkICE9IG51bGwgJiYgcmVnaXN0ZXJlZFt2YWx1ZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHN0cmluZyArPSBfa2V5ICsgXCJ7XCIgKyByZWdpc3RlcmVkW3ZhbHVlXSArIFwifVwiO1xuICAgICAgICB9IGVsc2UgaWYgKGlzUHJvY2Vzc2FibGVWYWx1ZSh2YWx1ZSkpIHtcbiAgICAgICAgICBzdHJpbmcgKz0gcHJvY2Vzc1N0eWxlTmFtZShfa2V5KSArIFwiOlwiICsgcHJvY2Vzc1N0eWxlVmFsdWUoX2tleSwgdmFsdWUpICsgXCI7XCI7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChfa2V5ID09PSAnTk9fQ09NUE9ORU5UX1NFTEVDVE9SJyAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb21wb25lbnQgc2VsZWN0b3JzIGNhbiBvbmx5IGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBiYWJlbC1wbHVnaW4tZW1vdGlvbi4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB0eXBlb2YgdmFsdWVbMF0gPT09ICdzdHJpbmcnICYmIChyZWdpc3RlcmVkID09IG51bGwgfHwgcmVnaXN0ZXJlZFt2YWx1ZVswXV0gPT09IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdmFsdWUubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBpZiAoaXNQcm9jZXNzYWJsZVZhbHVlKHZhbHVlW19pXSkpIHtcbiAgICAgICAgICAgICAgc3RyaW5nICs9IHByb2Nlc3NTdHlsZU5hbWUoX2tleSkgKyBcIjpcIiArIHByb2Nlc3NTdHlsZVZhbHVlKF9rZXksIHZhbHVlW19pXSkgKyBcIjtcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGludGVycG9sYXRlZCA9IGhhbmRsZUludGVycG9sYXRpb24obWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIHZhbHVlLCBmYWxzZSk7XG5cbiAgICAgICAgICBzd2l0Y2ggKF9rZXkpIHtcbiAgICAgICAgICAgIGNhc2UgJ2FuaW1hdGlvbic6XG4gICAgICAgICAgICBjYXNlICdhbmltYXRpb25OYW1lJzpcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0cmluZyArPSBwcm9jZXNzU3R5bGVOYW1lKF9rZXkpICsgXCI6XCIgKyBpbnRlcnBvbGF0ZWQgKyBcIjtcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgX2tleSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoVU5ERUZJTkVEX0FTX09CSkVDVF9LRVlfRVJST1IpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHN0cmluZyArPSBfa2V5ICsgXCJ7XCIgKyBpbnRlcnBvbGF0ZWQgKyBcIn1cIjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbnZhciBsYWJlbFBhdHRlcm4gPSAvbGFiZWw6XFxzKihbXlxccztcXG57XSspXFxzKjsvZztcbnZhciBzb3VyY2VNYXBQYXR0ZXJuO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBzb3VyY2VNYXBQYXR0ZXJuID0gL1xcL1xcKiNcXHNzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb25cXC9qc29uO1xcUytcXHMrXFwqXFwvLztcbn0gLy8gdGhpcyBpcyB0aGUgY3Vyc29yIGZvciBrZXlmcmFtZXNcbi8vIGtleWZyYW1lcyBhcmUgc3RvcmVkIG9uIHRoZSBTZXJpYWxpemVkU3R5bGVzIG9iamVjdCBhcyBhIGxpbmtlZCBsaXN0XG5cblxudmFyIGN1cnNvcjtcbnZhciBzZXJpYWxpemVTdHlsZXMgPSBmdW5jdGlvbiBzZXJpYWxpemVTdHlsZXMoYXJncywgcmVnaXN0ZXJlZCwgbWVyZ2VkUHJvcHMpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoID09PSAxICYmIHR5cGVvZiBhcmdzWzBdID09PSAnb2JqZWN0JyAmJiBhcmdzWzBdICE9PSBudWxsICYmIGFyZ3NbMF0uc3R5bGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gYXJnc1swXTtcbiAgfVxuXG4gIHZhciBzdHJpbmdNb2RlID0gdHJ1ZTtcbiAgdmFyIHN0eWxlcyA9ICcnO1xuICBjdXJzb3IgPSB1bmRlZmluZWQ7XG4gIHZhciBzdHJpbmdzID0gYXJnc1swXTtcblxuICBpZiAoc3RyaW5ncyA9PSBudWxsIHx8IHN0cmluZ3MucmF3ID09PSB1bmRlZmluZWQpIHtcbiAgICBzdHJpbmdNb2RlID0gZmFsc2U7XG4gICAgc3R5bGVzICs9IGhhbmRsZUludGVycG9sYXRpb24obWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIHN0cmluZ3MsIGZhbHNlKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBzdHJpbmdzWzBdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoSUxMRUdBTF9FU0NBUEVfU0VRVUVOQ0VfRVJST1IpO1xuICAgIH1cblxuICAgIHN0eWxlcyArPSBzdHJpbmdzWzBdO1xuICB9IC8vIHdlIHN0YXJ0IGF0IDEgc2luY2Ugd2UndmUgYWxyZWFkeSBoYW5kbGVkIHRoZSBmaXJzdCBhcmdcblxuXG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgIHN0eWxlcyArPSBoYW5kbGVJbnRlcnBvbGF0aW9uKG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCBhcmdzW2ldLCBzdHlsZXMuY2hhckNvZGVBdChzdHlsZXMubGVuZ3RoIC0gMSkgPT09IDQ2KTtcblxuICAgIGlmIChzdHJpbmdNb2RlKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBzdHJpbmdzW2ldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihJTExFR0FMX0VTQ0FQRV9TRVFVRU5DRV9FUlJPUik7XG4gICAgICB9XG5cbiAgICAgIHN0eWxlcyArPSBzdHJpbmdzW2ldO1xuICAgIH1cbiAgfVxuXG4gIHZhciBzb3VyY2VNYXA7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBzdHlsZXMgPSBzdHlsZXMucmVwbGFjZShzb3VyY2VNYXBQYXR0ZXJuLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgIHNvdXJjZU1hcCA9IG1hdGNoO1xuICAgICAgcmV0dXJuICcnO1xuICAgIH0pO1xuICB9IC8vIHVzaW5nIGEgZ2xvYmFsIHJlZ2V4IHdpdGggLmV4ZWMgaXMgc3RhdGVmdWwgc28gbGFzdEluZGV4IGhhcyB0byBiZSByZXNldCBlYWNoIHRpbWVcblxuXG4gIGxhYmVsUGF0dGVybi5sYXN0SW5kZXggPSAwO1xuICB2YXIgaWRlbnRpZmllck5hbWUgPSAnJztcbiAgdmFyIG1hdGNoOyAvLyBodHRwczovL2VzYmVuY2guY29tL2JlbmNoLzViODA5YzJjZjI5NDk4MDBhMGY2MWZiNVxuXG4gIHdoaWxlICgobWF0Y2ggPSBsYWJlbFBhdHRlcm4uZXhlYyhzdHlsZXMpKSAhPT0gbnVsbCkge1xuICAgIGlkZW50aWZpZXJOYW1lICs9ICctJyArIC8vICRGbG93Rml4TWUgd2Uga25vdyBpdCdzIG5vdCBudWxsXG4gICAgbWF0Y2hbMV07XG4gIH1cblxuICB2YXIgbmFtZSA9IGhhc2hTdHJpbmcoc3R5bGVzKSArIGlkZW50aWZpZXJOYW1lO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gJEZsb3dGaXhNZSBTZXJpYWxpemVkU3R5bGVzIHR5cGUgZG9lc24ndCBoYXZlIHRvU3RyaW5nIHByb3BlcnR5IChhbmQgd2UgZG9uJ3Qgd2FudCB0byBhZGQgaXQpXG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBzdHlsZXM6IHN0eWxlcyxcbiAgICAgIG1hcDogc291cmNlTWFwLFxuICAgICAgbmV4dDogY3Vyc29yLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gXCJZb3UgaGF2ZSB0cmllZCB0byBzdHJpbmdpZnkgb2JqZWN0IHJldHVybmVkIGZyb20gYGNzc2AgZnVuY3Rpb24uIEl0IGlzbid0IHN1cHBvc2VkIHRvIGJlIHVzZWQgZGlyZWN0bHkgKGUuZy4gYXMgdmFsdWUgb2YgdGhlIGBjbGFzc05hbWVgIHByb3ApLCBidXQgcmF0aGVyIGhhbmRlZCB0byBlbW90aW9uIHNvIGl0IGNhbiBoYW5kbGUgaXQgKGUuZy4gYXMgdmFsdWUgb2YgYGNzc2AgcHJvcCkuXCI7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmFtZTogbmFtZSxcbiAgICBzdHlsZXM6IHN0eWxlcyxcbiAgICBuZXh0OiBjdXJzb3JcbiAgfTtcbn07XG5cbmV4cG9ydCB7IHNlcmlhbGl6ZVN0eWxlcyB9O1xuIiwiLypcblxuQmFzZWQgb2ZmIGdsYW1vcidzIFN0eWxlU2hlZXQsIHRoYW5rcyBTdW5pbCDinaTvuI9cblxuaGlnaCBwZXJmb3JtYW5jZSBTdHlsZVNoZWV0IGZvciBjc3MtaW4tanMgc3lzdGVtc1xuXG4tIHVzZXMgbXVsdGlwbGUgc3R5bGUgdGFncyBiZWhpbmQgdGhlIHNjZW5lcyBmb3IgbWlsbGlvbnMgb2YgcnVsZXNcbi0gdXNlcyBgaW5zZXJ0UnVsZWAgZm9yIGFwcGVuZGluZyBpbiBwcm9kdWN0aW9uIGZvciAqbXVjaCogZmFzdGVyIHBlcmZvcm1hbmNlXG5cbi8vIHVzYWdlXG5cbmltcG9ydCB7IFN0eWxlU2hlZXQgfSBmcm9tICdAZW1vdGlvbi9zaGVldCdcblxubGV0IHN0eWxlU2hlZXQgPSBuZXcgU3R5bGVTaGVldCh7IGtleTogJycsIGNvbnRhaW5lcjogZG9jdW1lbnQuaGVhZCB9KVxuXG5zdHlsZVNoZWV0Lmluc2VydCgnI2JveCB7IGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgfScpXG4tIGFwcGVuZHMgYSBjc3MgcnVsZSBpbnRvIHRoZSBzdHlsZXNoZWV0XG5cbnN0eWxlU2hlZXQuZmx1c2goKVxuLSBlbXB0aWVzIHRoZSBzdHlsZXNoZWV0IG9mIGFsbCBpdHMgY29udGVudHNcblxuKi9cbi8vICRGbG93Rml4TWVcbmZ1bmN0aW9uIHNoZWV0Rm9yVGFnKHRhZykge1xuICBpZiAodGFnLnNoZWV0KSB7XG4gICAgLy8gJEZsb3dGaXhNZVxuICAgIHJldHVybiB0YWcuc2hlZXQ7XG4gIH0gLy8gdGhpcyB3ZWlyZG5lc3MgYnJvdWdodCB0byB5b3UgYnkgZmlyZWZveFxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGRvY3VtZW50LnN0eWxlU2hlZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGRvY3VtZW50LnN0eWxlU2hlZXRzW2ldLm93bmVyTm9kZSA9PT0gdGFnKSB7XG4gICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICByZXR1cm4gZG9jdW1lbnQuc3R5bGVTaGVldHNbaV07XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB0YWcuc2V0QXR0cmlidXRlKCdkYXRhLWVtb3Rpb24nLCBvcHRpb25zLmtleSk7XG5cbiAgaWYgKG9wdGlvbnMubm9uY2UgIT09IHVuZGVmaW5lZCkge1xuICAgIHRhZy5zZXRBdHRyaWJ1dGUoJ25vbmNlJywgb3B0aW9ucy5ub25jZSk7XG4gIH1cblxuICB0YWcuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpKTtcbiAgcmV0dXJuIHRhZztcbn1cblxudmFyIFN0eWxlU2hlZXQgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTdHlsZVNoZWV0KG9wdGlvbnMpIHtcbiAgICB0aGlzLmlzU3BlZWR5ID0gb3B0aW9ucy5zcGVlZHkgPT09IHVuZGVmaW5lZCA/IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgOiBvcHRpb25zLnNwZWVkeTtcbiAgICB0aGlzLnRhZ3MgPSBbXTtcbiAgICB0aGlzLmN0ciA9IDA7XG4gICAgdGhpcy5ub25jZSA9IG9wdGlvbnMubm9uY2U7IC8vIGtleSBpcyB0aGUgdmFsdWUgb2YgdGhlIGRhdGEtZW1vdGlvbiBhdHRyaWJ1dGUsIGl0J3MgdXNlZCB0byBpZGVudGlmeSBkaWZmZXJlbnQgc2hlZXRzXG5cbiAgICB0aGlzLmtleSA9IG9wdGlvbnMua2V5O1xuICAgIHRoaXMuY29udGFpbmVyID0gb3B0aW9ucy5jb250YWluZXI7XG4gICAgdGhpcy5iZWZvcmUgPSBudWxsO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFN0eWxlU2hlZXQucHJvdG90eXBlO1xuXG4gIF9wcm90by5pbnNlcnQgPSBmdW5jdGlvbiBpbnNlcnQocnVsZSkge1xuICAgIC8vIHRoZSBtYXggbGVuZ3RoIGlzIGhvdyBtYW55IHJ1bGVzIHdlIGhhdmUgcGVyIHN0eWxlIHRhZywgaXQncyA2NTAwMCBpbiBzcGVlZHkgbW9kZVxuICAgIC8vIGl0J3MgMSBpbiBkZXYgYmVjYXVzZSB3ZSBpbnNlcnQgc291cmNlIG1hcHMgdGhhdCBtYXAgYSBzaW5nbGUgcnVsZSB0byBhIGxvY2F0aW9uXG4gICAgLy8gYW5kIHlvdSBjYW4gb25seSBoYXZlIG9uZSBzb3VyY2UgbWFwIHBlciBzdHlsZSB0YWdcbiAgICBpZiAodGhpcy5jdHIgJSAodGhpcy5pc1NwZWVkeSA/IDY1MDAwIDogMSkgPT09IDApIHtcbiAgICAgIHZhciBfdGFnID0gY3JlYXRlU3R5bGVFbGVtZW50KHRoaXMpO1xuXG4gICAgICB2YXIgYmVmb3JlO1xuXG4gICAgICBpZiAodGhpcy50YWdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBiZWZvcmUgPSB0aGlzLmJlZm9yZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJlZm9yZSA9IHRoaXMudGFnc1t0aGlzLnRhZ3MubGVuZ3RoIC0gMV0ubmV4dFNpYmxpbmc7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY29udGFpbmVyLmluc2VydEJlZm9yZShfdGFnLCBiZWZvcmUpO1xuICAgICAgdGhpcy50YWdzLnB1c2goX3RhZyk7XG4gICAgfVxuXG4gICAgdmFyIHRhZyA9IHRoaXMudGFnc1t0aGlzLnRhZ3MubGVuZ3RoIC0gMV07XG5cbiAgICBpZiAodGhpcy5pc1NwZWVkeSkge1xuICAgICAgdmFyIHNoZWV0ID0gc2hlZXRGb3JUYWcodGFnKTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gdGhpcyBpcyBhIHJlYWxseSBob3QgcGF0aFxuICAgICAgICAvLyB3ZSBjaGVjayB0aGUgc2Vjb25kIGNoYXJhY3RlciBmaXJzdCBiZWNhdXNlIGhhdmluZyBcImlcIlxuICAgICAgICAvLyBhcyB0aGUgc2Vjb25kIGNoYXJhY3RlciB3aWxsIGhhcHBlbiBsZXNzIG9mdGVuIHRoYW5cbiAgICAgICAgLy8gaGF2aW5nIFwiQFwiIGFzIHRoZSBmaXJzdCBjaGFyYWN0ZXJcbiAgICAgICAgdmFyIGlzSW1wb3J0UnVsZSA9IHJ1bGUuY2hhckNvZGVBdCgxKSA9PT0gMTA1ICYmIHJ1bGUuY2hhckNvZGVBdCgwKSA9PT0gNjQ7IC8vIHRoaXMgaXMgdGhlIHVsdHJhZmFzdCB2ZXJzaW9uLCB3b3JrcyBhY3Jvc3MgYnJvd3NlcnNcbiAgICAgICAgLy8gdGhlIGJpZyBkcmF3YmFjayBpcyB0aGF0IHRoZSBjc3Mgd29uJ3QgYmUgZWRpdGFibGUgaW4gZGV2dG9vbHNcblxuICAgICAgICBzaGVldC5pbnNlcnRSdWxlKHJ1bGUsIC8vIHdlIG5lZWQgdG8gaW5zZXJ0IEBpbXBvcnQgcnVsZXMgYmVmb3JlIGFueXRoaW5nIGVsc2VcbiAgICAgICAgLy8gb3RoZXJ3aXNlIHRoZXJlIHdpbGwgYmUgYW4gZXJyb3JcbiAgICAgICAgLy8gdGVjaG5pY2FsbHkgdGhpcyBtZWFucyB0aGF0IHRoZSBAaW1wb3J0IHJ1bGVzIHdpbGxcbiAgICAgICAgLy8gX3VzdWFsbHlfKG5vdCBhbHdheXMgc2luY2UgdGhlcmUgY291bGQgYmUgbXVsdGlwbGUgc3R5bGUgdGFncylcbiAgICAgICAgLy8gYmUgdGhlIGZpcnN0IG9uZXMgaW4gcHJvZCBhbmQgZ2VuZXJhbGx5IGxhdGVyIGluIGRldlxuICAgICAgICAvLyB0aGlzIHNob3VsZG4ndCByZWFsbHkgbWF0dGVyIGluIHRoZSByZWFsIHdvcmxkIHRob3VnaFxuICAgICAgICAvLyBAaW1wb3J0IGlzIGdlbmVyYWxseSBvbmx5IHVzZWQgZm9yIGZvbnQgZmFjZXMgZnJvbSBnb29nbGUgZm9udHMgYW5kIGV0Yy5cbiAgICAgICAgLy8gc28gd2hpbGUgdGhpcyBjb3VsZCBiZSB0ZWNobmljYWxseSBjb3JyZWN0IHRoZW4gaXQgd291bGQgYmUgc2xvd2VyIGFuZCBsYXJnZXJcbiAgICAgICAgLy8gZm9yIGEgdGlueSBiaXQgb2YgY29ycmVjdG5lc3MgdGhhdCB3b24ndCBtYXR0ZXIgaW4gdGhlIHJlYWwgd29ybGRcbiAgICAgICAgaXNJbXBvcnRSdWxlID8gMCA6IHNoZWV0LmNzc1J1bGVzLmxlbmd0aCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFwiVGhlcmUgd2FzIGEgcHJvYmxlbSBpbnNlcnRpbmcgdGhlIGZvbGxvd2luZyBydWxlOiBcXFwiXCIgKyBydWxlICsgXCJcXFwiXCIsIGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhZy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShydWxlKSk7XG4gICAgfVxuXG4gICAgdGhpcy5jdHIrKztcbiAgfTtcblxuICBfcHJvdG8uZmx1c2ggPSBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICAvLyAkRmxvd0ZpeE1lXG4gICAgdGhpcy50YWdzLmZvckVhY2goZnVuY3Rpb24gKHRhZykge1xuICAgICAgcmV0dXJuIHRhZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRhZyk7XG4gICAgfSk7XG4gICAgdGhpcy50YWdzID0gW107XG4gICAgdGhpcy5jdHIgPSAwO1xuICB9O1xuXG4gIHJldHVybiBTdHlsZVNoZWV0O1xufSgpO1xuXG5leHBvcnQgeyBTdHlsZVNoZWV0IH07XG4iLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5JztcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGlzUHJvcFZhbGlkIGZyb20gJ0BlbW90aW9uL2lzLXByb3AtdmFsaWQnO1xuaW1wb3J0IHsgd2l0aEVtb3Rpb25DYWNoZSwgVGhlbWVDb250ZXh0IH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgeyBnZXRSZWdpc3RlcmVkU3R5bGVzLCBpbnNlcnRTdHlsZXMgfSBmcm9tICdAZW1vdGlvbi91dGlscyc7XG5pbXBvcnQgeyBzZXJpYWxpemVTdHlsZXMgfSBmcm9tICdAZW1vdGlvbi9zZXJpYWxpemUnO1xuXG52YXIgdGVzdE9taXRQcm9wc09uU3RyaW5nVGFnID0gaXNQcm9wVmFsaWQ7XG5cbnZhciB0ZXN0T21pdFByb3BzT25Db21wb25lbnQgPSBmdW5jdGlvbiB0ZXN0T21pdFByb3BzT25Db21wb25lbnQoa2V5KSB7XG4gIHJldHVybiBrZXkgIT09ICd0aGVtZScgJiYga2V5ICE9PSAnaW5uZXJSZWYnO1xufTtcblxudmFyIGdldERlZmF1bHRTaG91bGRGb3J3YXJkUHJvcCA9IGZ1bmN0aW9uIGdldERlZmF1bHRTaG91bGRGb3J3YXJkUHJvcCh0YWcpIHtcbiAgcmV0dXJuIHR5cGVvZiB0YWcgPT09ICdzdHJpbmcnICYmIC8vIDk2IGlzIG9uZSBsZXNzIHRoYW4gdGhlIGNoYXIgY29kZVxuICAvLyBmb3IgXCJhXCIgc28gdGhpcyBpcyBjaGVja2luZyB0aGF0XG4gIC8vIGl0J3MgYSBsb3dlcmNhc2UgY2hhcmFjdGVyXG4gIHRhZy5jaGFyQ29kZUF0KDApID4gOTYgPyB0ZXN0T21pdFByb3BzT25TdHJpbmdUYWcgOiB0ZXN0T21pdFByb3BzT25Db21wb25lbnQ7XG59O1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cbnZhciBJTExFR0FMX0VTQ0FQRV9TRVFVRU5DRV9FUlJPUiA9IFwiWW91IGhhdmUgaWxsZWdhbCBlc2NhcGUgc2VxdWVuY2UgaW4geW91ciB0ZW1wbGF0ZSBsaXRlcmFsLCBtb3N0IGxpa2VseSBpbnNpZGUgY29udGVudCdzIHByb3BlcnR5IHZhbHVlLlxcbkJlY2F1c2UgeW91IHdyaXRlIHlvdXIgQ1NTIGluc2lkZSBhIEphdmFTY3JpcHQgc3RyaW5nIHlvdSBhY3R1YWxseSBoYXZlIHRvIGRvIGRvdWJsZSBlc2NhcGluZywgc28gZm9yIGV4YW1wbGUgXFxcImNvbnRlbnQ6ICdcXFxcMDBkNyc7XFxcIiBzaG91bGQgYmVjb21lIFxcXCJjb250ZW50OiAnXFxcXFxcXFwwMGQ3JztcXFwiLlxcbllvdSBjYW4gcmVhZCBtb3JlIGFib3V0IHRoaXMgaGVyZTpcXG5odHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9UZW1wbGF0ZV9saXRlcmFscyNFUzIwMThfcmV2aXNpb25fb2ZfaWxsZWdhbF9lc2NhcGVfc2VxdWVuY2VzXCI7XG5cbnZhciBOb29wID0gZnVuY3Rpb24gTm9vcCgpIHtcbiAgcmV0dXJuIG51bGw7XG59O1xuXG52YXIgY3JlYXRlU3R5bGVkID0gZnVuY3Rpb24gY3JlYXRlU3R5bGVkKHRhZywgb3B0aW9ucykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICh0YWcgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgYXJlIHRyeWluZyB0byBjcmVhdGUgYSBzdHlsZWQgZWxlbWVudCB3aXRoIGFuIHVuZGVmaW5lZCBjb21wb25lbnQuXFxuWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBpbXBvcnQgaXQuJyk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGlkZW50aWZpZXJOYW1lO1xuICB2YXIgc2hvdWxkRm9yd2FyZFByb3A7XG4gIHZhciB0YXJnZXRDbGFzc05hbWU7XG5cbiAgaWYgKG9wdGlvbnMgIT09IHVuZGVmaW5lZCkge1xuICAgIGlkZW50aWZpZXJOYW1lID0gb3B0aW9ucy5sYWJlbDtcbiAgICB0YXJnZXRDbGFzc05hbWUgPSBvcHRpb25zLnRhcmdldDtcbiAgICBzaG91bGRGb3J3YXJkUHJvcCA9IHRhZy5fX2Vtb3Rpb25fZm9yd2FyZFByb3AgJiYgb3B0aW9ucy5zaG91bGRGb3J3YXJkUHJvcCA/IGZ1bmN0aW9uIChwcm9wTmFtZSkge1xuICAgICAgcmV0dXJuIHRhZy5fX2Vtb3Rpb25fZm9yd2FyZFByb3AocHJvcE5hbWUpICYmIC8vICRGbG93Rml4TWVcbiAgICAgIG9wdGlvbnMuc2hvdWxkRm9yd2FyZFByb3AocHJvcE5hbWUpO1xuICAgIH0gOiBvcHRpb25zLnNob3VsZEZvcndhcmRQcm9wO1xuICB9XG5cbiAgdmFyIGlzUmVhbCA9IHRhZy5fX2Vtb3Rpb25fcmVhbCA9PT0gdGFnO1xuICB2YXIgYmFzZVRhZyA9IGlzUmVhbCAmJiB0YWcuX19lbW90aW9uX2Jhc2UgfHwgdGFnO1xuXG4gIGlmICh0eXBlb2Ygc2hvdWxkRm9yd2FyZFByb3AgIT09ICdmdW5jdGlvbicgJiYgaXNSZWFsKSB7XG4gICAgc2hvdWxkRm9yd2FyZFByb3AgPSB0YWcuX19lbW90aW9uX2ZvcndhcmRQcm9wO1xuICB9XG5cbiAgdmFyIGRlZmF1bHRTaG91bGRGb3J3YXJkUHJvcCA9IHNob3VsZEZvcndhcmRQcm9wIHx8IGdldERlZmF1bHRTaG91bGRGb3J3YXJkUHJvcChiYXNlVGFnKTtcbiAgdmFyIHNob3VsZFVzZUFzID0gIWRlZmF1bHRTaG91bGRGb3J3YXJkUHJvcCgnYXMnKTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICB2YXIgc3R5bGVzID0gaXNSZWFsICYmIHRhZy5fX2Vtb3Rpb25fc3R5bGVzICE9PSB1bmRlZmluZWQgPyB0YWcuX19lbW90aW9uX3N0eWxlcy5zbGljZSgwKSA6IFtdO1xuXG4gICAgaWYgKGlkZW50aWZpZXJOYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHN0eWxlcy5wdXNoKFwibGFiZWw6XCIgKyBpZGVudGlmaWVyTmFtZSArIFwiO1wiKTtcbiAgICB9XG5cbiAgICBpZiAoYXJnc1swXSA9PSBudWxsIHx8IGFyZ3NbMF0ucmF3ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHN0eWxlcy5wdXNoLmFwcGx5KHN0eWxlcywgYXJncyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGFyZ3NbMF1bMF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKElMTEVHQUxfRVNDQVBFX1NFUVVFTkNFX0VSUk9SKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGVzLnB1c2goYXJnc1swXVswXSk7XG4gICAgICB2YXIgbGVuID0gYXJncy5sZW5ndGg7XG4gICAgICB2YXIgaSA9IDE7XG5cbiAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgYXJnc1swXVtpXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihJTExFR0FMX0VTQ0FQRV9TRVFVRU5DRV9FUlJPUik7XG4gICAgICAgIH1cblxuICAgICAgICBzdHlsZXMucHVzaChhcmdzW2ldLCBhcmdzWzBdW2ldKTtcbiAgICAgIH1cbiAgICB9IC8vICRGbG93Rml4TWU6IHdlIG5lZWQgdG8gY2FzdCBTdGF0ZWxlc3NGdW5jdGlvbmFsQ29tcG9uZW50IHRvIG91ciBQcml2YXRlU3R5bGVkQ29tcG9uZW50IGNsYXNzXG5cblxuICAgIHZhciBTdHlsZWQgPSB3aXRoRW1vdGlvbkNhY2hlKGZ1bmN0aW9uIChwcm9wcywgY29udGV4dCwgcmVmKSB7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoVGhlbWVDb250ZXh0LkNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAodGhlbWUpIHtcbiAgICAgICAgdmFyIGZpbmFsVGFnID0gc2hvdWxkVXNlQXMgJiYgcHJvcHMuYXMgfHwgYmFzZVRhZztcbiAgICAgICAgdmFyIGNsYXNzTmFtZSA9ICcnO1xuICAgICAgICB2YXIgY2xhc3NJbnRlcnBvbGF0aW9ucyA9IFtdO1xuICAgICAgICB2YXIgbWVyZ2VkUHJvcHMgPSBwcm9wcztcblxuICAgICAgICBpZiAocHJvcHMudGhlbWUgPT0gbnVsbCkge1xuICAgICAgICAgIG1lcmdlZFByb3BzID0ge307XG5cbiAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgICAgIG1lcmdlZFByb3BzW2tleV0gPSBwcm9wc1trZXldO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG1lcmdlZFByb3BzLnRoZW1lID0gdGhlbWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHByb3BzLmNsYXNzTmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjbGFzc05hbWUgPSBnZXRSZWdpc3RlcmVkU3R5bGVzKGNvbnRleHQucmVnaXN0ZXJlZCwgY2xhc3NJbnRlcnBvbGF0aW9ucywgcHJvcHMuY2xhc3NOYW1lKTtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9wcy5jbGFzc05hbWUgIT0gbnVsbCkge1xuICAgICAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSArIFwiIFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNlcmlhbGl6ZWQgPSBzZXJpYWxpemVTdHlsZXMoc3R5bGVzLmNvbmNhdChjbGFzc0ludGVycG9sYXRpb25zKSwgY29udGV4dC5yZWdpc3RlcmVkLCBtZXJnZWRQcm9wcyk7XG4gICAgICAgIHZhciBydWxlcyA9IGluc2VydFN0eWxlcyhjb250ZXh0LCBzZXJpYWxpemVkLCB0eXBlb2YgZmluYWxUYWcgPT09ICdzdHJpbmcnKTtcbiAgICAgICAgY2xhc3NOYW1lICs9IGNvbnRleHQua2V5ICsgXCItXCIgKyBzZXJpYWxpemVkLm5hbWU7XG5cbiAgICAgICAgaWYgKHRhcmdldENsYXNzTmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY2xhc3NOYW1lICs9IFwiIFwiICsgdGFyZ2V0Q2xhc3NOYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGZpbmFsU2hvdWxkRm9yd2FyZFByb3AgPSBzaG91bGRVc2VBcyAmJiBzaG91bGRGb3J3YXJkUHJvcCA9PT0gdW5kZWZpbmVkID8gZ2V0RGVmYXVsdFNob3VsZEZvcndhcmRQcm9wKGZpbmFsVGFnKSA6IGRlZmF1bHRTaG91bGRGb3J3YXJkUHJvcDtcbiAgICAgICAgdmFyIG5ld1Byb3BzID0ge307XG5cbiAgICAgICAgZm9yICh2YXIgX2tleSBpbiBwcm9wcykge1xuICAgICAgICAgIGlmIChzaG91bGRVc2VBcyAmJiBfa2V5ID09PSAnYXMnKSBjb250aW51ZTtcblxuICAgICAgICAgIGlmICggLy8gJEZsb3dGaXhNZVxuICAgICAgICAgIGZpbmFsU2hvdWxkRm9yd2FyZFByb3AoX2tleSkpIHtcbiAgICAgICAgICAgIG5ld1Byb3BzW19rZXldID0gcHJvcHNbX2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbmV3UHJvcHMuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgICAgICBuZXdQcm9wcy5yZWYgPSByZWYgfHwgcHJvcHMuaW5uZXJSZWY7XG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgcHJvcHMuaW5uZXJSZWYpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdgaW5uZXJSZWZgIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciB2ZXJzaW9uIG9mIEVtb3Rpb24sIHBsZWFzZSB1c2UgdGhlIGByZWZgIHByb3AgaW5zdGVhZCcgKyAoaWRlbnRpZmllck5hbWUgPT09IHVuZGVmaW5lZCA/ICcnIDogXCIgaW4gdGhlIHVzYWdlIG9mIGBcIiArIGlkZW50aWZpZXJOYW1lICsgXCJgXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBlbGUgPSAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChmaW5hbFRhZywgbmV3UHJvcHMpO1xuICAgICAgICB2YXIgcG9zc2libHlTdHlsZUVsZW1lbnQgPSAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChOb29wLCBudWxsKTtcblxuXG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChGcmFnbWVudCwgbnVsbCwgcG9zc2libHlTdHlsZUVsZW1lbnQsIGVsZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBTdHlsZWQuZGlzcGxheU5hbWUgPSBpZGVudGlmaWVyTmFtZSAhPT0gdW5kZWZpbmVkID8gaWRlbnRpZmllck5hbWUgOiBcIlN0eWxlZChcIiArICh0eXBlb2YgYmFzZVRhZyA9PT0gJ3N0cmluZycgPyBiYXNlVGFnIDogYmFzZVRhZy5kaXNwbGF5TmFtZSB8fCBiYXNlVGFnLm5hbWUgfHwgJ0NvbXBvbmVudCcpICsgXCIpXCI7XG4gICAgU3R5bGVkLmRlZmF1bHRQcm9wcyA9IHRhZy5kZWZhdWx0UHJvcHM7XG4gICAgU3R5bGVkLl9fZW1vdGlvbl9yZWFsID0gU3R5bGVkO1xuICAgIFN0eWxlZC5fX2Vtb3Rpb25fYmFzZSA9IGJhc2VUYWc7XG4gICAgU3R5bGVkLl9fZW1vdGlvbl9zdHlsZXMgPSBzdHlsZXM7XG4gICAgU3R5bGVkLl9fZW1vdGlvbl9mb3J3YXJkUHJvcCA9IHNob3VsZEZvcndhcmRQcm9wO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHlsZWQsICd0b1N0cmluZycsIHtcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSgpIHtcbiAgICAgICAgaWYgKHRhcmdldENsYXNzTmFtZSA9PT0gdW5kZWZpbmVkICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICByZXR1cm4gJ05PX0NPTVBPTkVOVF9TRUxFQ1RPUic7XG4gICAgICAgIH0gLy8gJEZsb3dGaXhNZTogY29lcmNlIHVuZGVmaW5lZCB0byBzdHJpbmdcblxuXG4gICAgICAgIHJldHVybiBcIi5cIiArIHRhcmdldENsYXNzTmFtZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIFN0eWxlZC53aXRoQ29tcG9uZW50ID0gZnVuY3Rpb24gKG5leHRUYWcsIG5leHRPcHRpb25zKSB7XG4gICAgICByZXR1cm4gY3JlYXRlU3R5bGVkKG5leHRUYWcsIG5leHRPcHRpb25zICE9PSB1bmRlZmluZWQgPyBfb2JqZWN0U3ByZWFkKHt9LCBvcHRpb25zIHx8IHt9LCB7fSwgbmV4dE9wdGlvbnMpIDogb3B0aW9ucykuYXBwbHkodm9pZCAwLCBzdHlsZXMpO1xuICAgIH07XG5cbiAgICByZXR1cm4gU3R5bGVkO1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3R5bGVkO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQtYmFzZSc7XG5cbnZhciB0YWdzID0gWydhJywgJ2FiYnInLCAnYWRkcmVzcycsICdhcmVhJywgJ2FydGljbGUnLCAnYXNpZGUnLCAnYXVkaW8nLCAnYicsICdiYXNlJywgJ2JkaScsICdiZG8nLCAnYmlnJywgJ2Jsb2NrcXVvdGUnLCAnYm9keScsICdicicsICdidXR0b24nLCAnY2FudmFzJywgJ2NhcHRpb24nLCAnY2l0ZScsICdjb2RlJywgJ2NvbCcsICdjb2xncm91cCcsICdkYXRhJywgJ2RhdGFsaXN0JywgJ2RkJywgJ2RlbCcsICdkZXRhaWxzJywgJ2RmbicsICdkaWFsb2cnLCAnZGl2JywgJ2RsJywgJ2R0JywgJ2VtJywgJ2VtYmVkJywgJ2ZpZWxkc2V0JywgJ2ZpZ2NhcHRpb24nLCAnZmlndXJlJywgJ2Zvb3RlcicsICdmb3JtJywgJ2gxJywgJ2gyJywgJ2gzJywgJ2g0JywgJ2g1JywgJ2g2JywgJ2hlYWQnLCAnaGVhZGVyJywgJ2hncm91cCcsICdocicsICdodG1sJywgJ2knLCAnaWZyYW1lJywgJ2ltZycsICdpbnB1dCcsICdpbnMnLCAna2JkJywgJ2tleWdlbicsICdsYWJlbCcsICdsZWdlbmQnLCAnbGknLCAnbGluaycsICdtYWluJywgJ21hcCcsICdtYXJrJywgJ21hcnF1ZWUnLCAnbWVudScsICdtZW51aXRlbScsICdtZXRhJywgJ21ldGVyJywgJ25hdicsICdub3NjcmlwdCcsICdvYmplY3QnLCAnb2wnLCAnb3B0Z3JvdXAnLCAnb3B0aW9uJywgJ291dHB1dCcsICdwJywgJ3BhcmFtJywgJ3BpY3R1cmUnLCAncHJlJywgJ3Byb2dyZXNzJywgJ3EnLCAncnAnLCAncnQnLCAncnVieScsICdzJywgJ3NhbXAnLCAnc2NyaXB0JywgJ3NlY3Rpb24nLCAnc2VsZWN0JywgJ3NtYWxsJywgJ3NvdXJjZScsICdzcGFuJywgJ3N0cm9uZycsICdzdHlsZScsICdzdWInLCAnc3VtbWFyeScsICdzdXAnLCAndGFibGUnLCAndGJvZHknLCAndGQnLCAndGV4dGFyZWEnLCAndGZvb3QnLCAndGgnLCAndGhlYWQnLCAndGltZScsICd0aXRsZScsICd0cicsICd0cmFjaycsICd1JywgJ3VsJywgJ3ZhcicsICd2aWRlbycsICd3YnInLCAvLyBTVkdcbidjaXJjbGUnLCAnY2xpcFBhdGgnLCAnZGVmcycsICdlbGxpcHNlJywgJ2ZvcmVpZ25PYmplY3QnLCAnZycsICdpbWFnZScsICdsaW5lJywgJ2xpbmVhckdyYWRpZW50JywgJ21hc2snLCAncGF0aCcsICdwYXR0ZXJuJywgJ3BvbHlnb24nLCAncG9seWxpbmUnLCAncmFkaWFsR3JhZGllbnQnLCAncmVjdCcsICdzdG9wJywgJ3N2ZycsICd0ZXh0JywgJ3RzcGFuJ107XG5cbnZhciBuZXdTdHlsZWQgPSBzdHlsZWQuYmluZCgpO1xudGFncy5mb3JFYWNoKGZ1bmN0aW9uICh0YWdOYW1lKSB7XG4gIG5ld1N0eWxlZFt0YWdOYW1lXSA9IG5ld1N0eWxlZCh0YWdOYW1lKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBuZXdTdHlsZWQ7XG4iLCJmdW5jdGlvbiBzdHlsaXNfbWluIChXKSB7XG4gIGZ1bmN0aW9uIE0oZCwgYywgZSwgaCwgYSkge1xuICAgIGZvciAodmFyIG0gPSAwLCBiID0gMCwgdiA9IDAsIG4gPSAwLCBxLCBnLCB4ID0gMCwgSyA9IDAsIGssIHUgPSBrID0gcSA9IDAsIGwgPSAwLCByID0gMCwgSSA9IDAsIHQgPSAwLCBCID0gZS5sZW5ndGgsIEogPSBCIC0gMSwgeSwgZiA9ICcnLCBwID0gJycsIEYgPSAnJywgRyA9ICcnLCBDOyBsIDwgQjspIHtcbiAgICAgIGcgPSBlLmNoYXJDb2RlQXQobCk7XG4gICAgICBsID09PSBKICYmIDAgIT09IGIgKyBuICsgdiArIG0gJiYgKDAgIT09IGIgJiYgKGcgPSA0NyA9PT0gYiA/IDEwIDogNDcpLCBuID0gdiA9IG0gPSAwLCBCKyssIEorKyk7XG5cbiAgICAgIGlmICgwID09PSBiICsgbiArIHYgKyBtKSB7XG4gICAgICAgIGlmIChsID09PSBKICYmICgwIDwgciAmJiAoZiA9IGYucmVwbGFjZShOLCAnJykpLCAwIDwgZi50cmltKCkubGVuZ3RoKSkge1xuICAgICAgICAgIHN3aXRjaCAoZykge1xuICAgICAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgIGNhc2UgNTk6XG4gICAgICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIGYgKz0gZS5jaGFyQXQobCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZyA9IDU5O1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoIChnKSB7XG4gICAgICAgICAgY2FzZSAxMjM6XG4gICAgICAgICAgICBmID0gZi50cmltKCk7XG4gICAgICAgICAgICBxID0gZi5jaGFyQ29kZUF0KDApO1xuICAgICAgICAgICAgayA9IDE7XG5cbiAgICAgICAgICAgIGZvciAodCA9ICsrbDsgbCA8IEI7KSB7XG4gICAgICAgICAgICAgIHN3aXRjaCAoZyA9IGUuY2hhckNvZGVBdChsKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMTIzOlxuICAgICAgICAgICAgICAgICAgaysrO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDEyNTpcbiAgICAgICAgICAgICAgICAgIGstLTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSA0NzpcbiAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZyA9IGUuY2hhckNvZGVBdChsICsgMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0MjpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0NzpcbiAgICAgICAgICAgICAgICAgICAgICBhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHUgPSBsICsgMTsgdSA8IEo7ICsrdSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGUuY2hhckNvZGVBdCh1KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoNDIgPT09IGcgJiYgNDIgPT09IGUuY2hhckNvZGVBdCh1IC0gMSkgJiYgbCArIDIgIT09IHUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbCA9IHUgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhayBhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoNDcgPT09IGcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbCA9IHUgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhayBhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbCA9IHU7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSA5MTpcbiAgICAgICAgICAgICAgICAgIGcrKztcblxuICAgICAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgICAgICBnKys7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDM0OlxuICAgICAgICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICAgICAgICBmb3IgKDsgbCsrIDwgSiAmJiBlLmNoYXJDb2RlQXQobCkgIT09IGc7KSB7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICgwID09PSBrKSBicmVhaztcbiAgICAgICAgICAgICAgbCsrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBrID0gZS5zdWJzdHJpbmcodCwgbCk7XG4gICAgICAgICAgICAwID09PSBxICYmIChxID0gKGYgPSBmLnJlcGxhY2UoY2EsICcnKS50cmltKCkpLmNoYXJDb2RlQXQoMCkpO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKHEpIHtcbiAgICAgICAgICAgICAgY2FzZSA2NDpcbiAgICAgICAgICAgICAgICAwIDwgciAmJiAoZiA9IGYucmVwbGFjZShOLCAnJykpO1xuICAgICAgICAgICAgICAgIGcgPSBmLmNoYXJDb2RlQXQoMSk7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGcpIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgMTAwOlxuICAgICAgICAgICAgICAgICAgY2FzZSAxMDk6XG4gICAgICAgICAgICAgICAgICBjYXNlIDExNTpcbiAgICAgICAgICAgICAgICAgIGNhc2UgNDU6XG4gICAgICAgICAgICAgICAgICAgIHIgPSBjO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgciA9IE87XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgayA9IE0oYywgciwgaywgZywgYSArIDEpO1xuICAgICAgICAgICAgICAgIHQgPSBrLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAwIDwgQSAmJiAociA9IFgoTywgZiwgSSksIEMgPSBIKDMsIGssIHIsIGMsIEQsIHosIHQsIGcsIGEsIGgpLCBmID0gci5qb2luKCcnKSwgdm9pZCAwICE9PSBDICYmIDAgPT09ICh0ID0gKGsgPSBDLnRyaW0oKSkubGVuZ3RoKSAmJiAoZyA9IDAsIGsgPSAnJykpO1xuICAgICAgICAgICAgICAgIGlmICgwIDwgdCkgc3dpdGNoIChnKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIDExNTpcbiAgICAgICAgICAgICAgICAgICAgZiA9IGYucmVwbGFjZShkYSwgZWEpO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlIDEwMDpcbiAgICAgICAgICAgICAgICAgIGNhc2UgMTA5OlxuICAgICAgICAgICAgICAgICAgY2FzZSA0NTpcbiAgICAgICAgICAgICAgICAgICAgayA9IGYgKyAneycgKyBrICsgJ30nO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgY2FzZSAxMDc6XG4gICAgICAgICAgICAgICAgICAgIGYgPSBmLnJlcGxhY2UoZmEsICckMSAkMicpO1xuICAgICAgICAgICAgICAgICAgICBrID0gZiArICd7JyArIGsgKyAnfSc7XG4gICAgICAgICAgICAgICAgICAgIGsgPSAxID09PSB3IHx8IDIgPT09IHcgJiYgTCgnQCcgKyBrLCAzKSA/ICdALXdlYmtpdC0nICsgayArICdAJyArIGsgOiAnQCcgKyBrO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgayA9IGYgKyBrLCAxMTIgPT09IGggJiYgKGsgPSAocCArPSBrLCAnJykpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBrID0gJyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBrID0gTShjLCBYKGMsIGYsIEkpLCBrLCBoLCBhICsgMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEYgKz0gaztcbiAgICAgICAgICAgIGsgPSBJID0gciA9IHUgPSBxID0gMDtcbiAgICAgICAgICAgIGYgPSAnJztcbiAgICAgICAgICAgIGcgPSBlLmNoYXJDb2RlQXQoKytsKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAxMjU6XG4gICAgICAgICAgY2FzZSA1OTpcbiAgICAgICAgICAgIGYgPSAoMCA8IHIgPyBmLnJlcGxhY2UoTiwgJycpIDogZikudHJpbSgpO1xuICAgICAgICAgICAgaWYgKDEgPCAodCA9IGYubGVuZ3RoKSkgc3dpdGNoICgwID09PSB1ICYmIChxID0gZi5jaGFyQ29kZUF0KDApLCA0NSA9PT0gcSB8fCA5NiA8IHEgJiYgMTIzID4gcSkgJiYgKHQgPSAoZiA9IGYucmVwbGFjZSgnICcsICc6JykpLmxlbmd0aCksIDAgPCBBICYmIHZvaWQgMCAhPT0gKEMgPSBIKDEsIGYsIGMsIGQsIEQsIHosIHAubGVuZ3RoLCBoLCBhLCBoKSkgJiYgMCA9PT0gKHQgPSAoZiA9IEMudHJpbSgpKS5sZW5ndGgpICYmIChmID0gJ1xceDAwXFx4MDAnKSwgcSA9IGYuY2hhckNvZGVBdCgwKSwgZyA9IGYuY2hhckNvZGVBdCgxKSwgcSkge1xuICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgY2FzZSA2NDpcbiAgICAgICAgICAgICAgICBpZiAoMTA1ID09PSBnIHx8IDk5ID09PSBnKSB7XG4gICAgICAgICAgICAgICAgICBHICs9IGYgKyBlLmNoYXJBdChsKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIDU4ICE9PSBmLmNoYXJDb2RlQXQodCAtIDEpICYmIChwICs9IFAoZiwgcSwgZywgZi5jaGFyQ29kZUF0KDIpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBJID0gciA9IHUgPSBxID0gMDtcbiAgICAgICAgICAgIGYgPSAnJztcbiAgICAgICAgICAgIGcgPSBlLmNoYXJDb2RlQXQoKytsKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzd2l0Y2ggKGcpIHtcbiAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICA0NyA9PT0gYiA/IGIgPSAwIDogMCA9PT0gMSArIHEgJiYgMTA3ICE9PSBoICYmIDAgPCBmLmxlbmd0aCAmJiAociA9IDEsIGYgKz0gJ1xceDAwJyk7XG4gICAgICAgICAgMCA8IEEgKiBZICYmIEgoMCwgZiwgYywgZCwgRCwgeiwgcC5sZW5ndGgsIGgsIGEsIGgpO1xuICAgICAgICAgIHogPSAxO1xuICAgICAgICAgIEQrKztcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDU5OlxuICAgICAgICBjYXNlIDEyNTpcbiAgICAgICAgICBpZiAoMCA9PT0gYiArIG4gKyB2ICsgbSkge1xuICAgICAgICAgICAgeisrO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgeisrO1xuICAgICAgICAgIHkgPSBlLmNoYXJBdChsKTtcblxuICAgICAgICAgIHN3aXRjaCAoZykge1xuICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICAgICAgaWYgKDAgPT09IG4gKyBtICsgYikgc3dpdGNoICh4KSB7XG4gICAgICAgICAgICAgICAgY2FzZSA0NDpcbiAgICAgICAgICAgICAgICBjYXNlIDU4OlxuICAgICAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgICAgICAgeSA9ICcnO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgMzIgIT09IGcgJiYgKHkgPSAnICcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgIHkgPSAnXFxcXDAnO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgICAgeSA9ICdcXFxcZic7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICB5ID0gJ1xcXFx2JztcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgIDAgPT09IG4gKyBiICsgbSAmJiAociA9IEkgPSAxLCB5ID0gJ1xcZicgKyB5KTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMTA4OlxuICAgICAgICAgICAgICBpZiAoMCA9PT0gbiArIGIgKyBtICsgRSAmJiAwIDwgdSkgc3dpdGNoIChsIC0gdSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgIDExMiA9PT0geCAmJiA1OCA9PT0gZS5jaGFyQ29kZUF0KGwgLSAzKSAmJiAoRSA9IHgpO1xuXG4gICAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgICAgMTExID09PSBLICYmIChFID0gSyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNTg6XG4gICAgICAgICAgICAgIDAgPT09IG4gKyBiICsgbSAmJiAodSA9IGwpO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA0NDpcbiAgICAgICAgICAgICAgMCA9PT0gYiArIHYgKyBuICsgbSAmJiAociA9IDEsIHkgKz0gJ1xccicpO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAzNDpcbiAgICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICAgIDAgPT09IGIgJiYgKG4gPSBuID09PSBnID8gMCA6IDAgPT09IG4gPyBnIDogbik7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDkxOlxuICAgICAgICAgICAgICAwID09PSBuICsgYiArIHYgJiYgbSsrO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA5MzpcbiAgICAgICAgICAgICAgMCA9PT0gbiArIGIgKyB2ICYmIG0tLTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNDE6XG4gICAgICAgICAgICAgIDAgPT09IG4gKyBiICsgbSAmJiB2LS07XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICBpZiAoMCA9PT0gbiArIGIgKyBtKSB7XG4gICAgICAgICAgICAgICAgaWYgKDAgPT09IHEpIHN3aXRjaCAoMiAqIHggKyAzICogSykge1xuICAgICAgICAgICAgICAgICAgY2FzZSA1MzM6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBxID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdisrO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNjQ6XG4gICAgICAgICAgICAgIDAgPT09IGIgKyB2ICsgbiArIG0gKyB1ICsgayAmJiAoayA9IDEpO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA0MjpcbiAgICAgICAgICAgIGNhc2UgNDc6XG4gICAgICAgICAgICAgIGlmICghKDAgPCBuICsgbSArIHYpKSBzd2l0Y2ggKGIpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICBzd2l0Y2ggKDIgKiBnICsgMyAqIGUuY2hhckNvZGVBdChsICsgMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyMzU6XG4gICAgICAgICAgICAgICAgICAgICAgYiA9IDQ3O1xuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjIwOlxuICAgICAgICAgICAgICAgICAgICAgIHQgPSBsLCBiID0gNDI7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSA0MjpcbiAgICAgICAgICAgICAgICAgIDQ3ID09PSBnICYmIDQyID09PSB4ICYmIHQgKyAyICE9PSBsICYmICgzMyA9PT0gZS5jaGFyQ29kZUF0KHQgKyAyKSAmJiAocCArPSBlLnN1YnN0cmluZyh0LCBsICsgMSkpLCB5ID0gJycsIGIgPSAwKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIDAgPT09IGIgJiYgKGYgKz0geSk7XG4gICAgICB9XG5cbiAgICAgIEsgPSB4O1xuICAgICAgeCA9IGc7XG4gICAgICBsKys7XG4gICAgfVxuXG4gICAgdCA9IHAubGVuZ3RoO1xuXG4gICAgaWYgKDAgPCB0KSB7XG4gICAgICByID0gYztcbiAgICAgIGlmICgwIDwgQSAmJiAoQyA9IEgoMiwgcCwgciwgZCwgRCwgeiwgdCwgaCwgYSwgaCksIHZvaWQgMCAhPT0gQyAmJiAwID09PSAocCA9IEMpLmxlbmd0aCkpIHJldHVybiBHICsgcCArIEY7XG4gICAgICBwID0gci5qb2luKCcsJykgKyAneycgKyBwICsgJ30nO1xuXG4gICAgICBpZiAoMCAhPT0gdyAqIEUpIHtcbiAgICAgICAgMiAhPT0gdyB8fCBMKHAsIDIpIHx8IChFID0gMCk7XG5cbiAgICAgICAgc3dpdGNoIChFKSB7XG4gICAgICAgICAgY2FzZSAxMTE6XG4gICAgICAgICAgICBwID0gcC5yZXBsYWNlKGhhLCAnOi1tb3otJDEnKSArIHA7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgMTEyOlxuICAgICAgICAgICAgcCA9IHAucmVwbGFjZShRLCAnOjotd2Via2l0LWlucHV0LSQxJykgKyBwLnJlcGxhY2UoUSwgJzo6LW1vei0kMScpICsgcC5yZXBsYWNlKFEsICc6LW1zLWlucHV0LSQxJykgKyBwO1xuICAgICAgICB9XG5cbiAgICAgICAgRSA9IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIEcgKyBwICsgRjtcbiAgfVxuXG4gIGZ1bmN0aW9uIFgoZCwgYywgZSkge1xuICAgIHZhciBoID0gYy50cmltKCkuc3BsaXQoaWEpO1xuICAgIGMgPSBoO1xuICAgIHZhciBhID0gaC5sZW5ndGgsXG4gICAgICAgIG0gPSBkLmxlbmd0aDtcblxuICAgIHN3aXRjaCAobSkge1xuICAgICAgY2FzZSAwOlxuICAgICAgY2FzZSAxOlxuICAgICAgICB2YXIgYiA9IDA7XG5cbiAgICAgICAgZm9yIChkID0gMCA9PT0gbSA/ICcnIDogZFswXSArICcgJzsgYiA8IGE7ICsrYikge1xuICAgICAgICAgIGNbYl0gPSBaKGQsIGNbYl0sIGUpLnRyaW0oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB2YXIgdiA9IGIgPSAwO1xuXG4gICAgICAgIGZvciAoYyA9IFtdOyBiIDwgYTsgKytiKSB7XG4gICAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCBtOyArK24pIHtcbiAgICAgICAgICAgIGNbdisrXSA9IFooZFtuXSArICcgJywgaFtiXSwgZSkudHJpbSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIGM7XG4gIH1cblxuICBmdW5jdGlvbiBaKGQsIGMsIGUpIHtcbiAgICB2YXIgaCA9IGMuY2hhckNvZGVBdCgwKTtcbiAgICAzMyA+IGggJiYgKGggPSAoYyA9IGMudHJpbSgpKS5jaGFyQ29kZUF0KDApKTtcblxuICAgIHN3aXRjaCAoaCkge1xuICAgICAgY2FzZSAzODpcbiAgICAgICAgcmV0dXJuIGMucmVwbGFjZShGLCAnJDEnICsgZC50cmltKCkpO1xuXG4gICAgICBjYXNlIDU4OlxuICAgICAgICByZXR1cm4gZC50cmltKCkgKyBjLnJlcGxhY2UoRiwgJyQxJyArIGQudHJpbSgpKTtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKDAgPCAxICogZSAmJiAwIDwgYy5pbmRleE9mKCdcXGYnKSkgcmV0dXJuIGMucmVwbGFjZShGLCAoNTggPT09IGQuY2hhckNvZGVBdCgwKSA/ICcnIDogJyQxJykgKyBkLnRyaW0oKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGQgKyBjO1xuICB9XG5cbiAgZnVuY3Rpb24gUChkLCBjLCBlLCBoKSB7XG4gICAgdmFyIGEgPSBkICsgJzsnLFxuICAgICAgICBtID0gMiAqIGMgKyAzICogZSArIDQgKiBoO1xuXG4gICAgaWYgKDk0NCA9PT0gbSkge1xuICAgICAgZCA9IGEuaW5kZXhPZignOicsIDkpICsgMTtcbiAgICAgIHZhciBiID0gYS5zdWJzdHJpbmcoZCwgYS5sZW5ndGggLSAxKS50cmltKCk7XG4gICAgICBiID0gYS5zdWJzdHJpbmcoMCwgZCkudHJpbSgpICsgYiArICc7JztcbiAgICAgIHJldHVybiAxID09PSB3IHx8IDIgPT09IHcgJiYgTChiLCAxKSA/ICctd2Via2l0LScgKyBiICsgYiA6IGI7XG4gICAgfVxuXG4gICAgaWYgKDAgPT09IHcgfHwgMiA9PT0gdyAmJiAhTChhLCAxKSkgcmV0dXJuIGE7XG5cbiAgICBzd2l0Y2ggKG0pIHtcbiAgICAgIGNhc2UgMTAxNTpcbiAgICAgICAgcmV0dXJuIDk3ID09PSBhLmNoYXJDb2RlQXQoMTApID8gJy13ZWJraXQtJyArIGEgKyBhIDogYTtcblxuICAgICAgY2FzZSA5NTE6XG4gICAgICAgIHJldHVybiAxMTYgPT09IGEuY2hhckNvZGVBdCgzKSA/ICctd2Via2l0LScgKyBhICsgYSA6IGE7XG5cbiAgICAgIGNhc2UgOTYzOlxuICAgICAgICByZXR1cm4gMTEwID09PSBhLmNoYXJDb2RlQXQoNSkgPyAnLXdlYmtpdC0nICsgYSArIGEgOiBhO1xuXG4gICAgICBjYXNlIDEwMDk6XG4gICAgICAgIGlmICgxMDAgIT09IGEuY2hhckNvZGVBdCg0KSkgYnJlYWs7XG5cbiAgICAgIGNhc2UgOTY5OlxuICAgICAgY2FzZSA5NDI6XG4gICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArIGE7XG5cbiAgICAgIGNhc2UgOTc4OlxuICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1vei0nICsgYSArIGE7XG5cbiAgICAgIGNhc2UgMTAxOTpcbiAgICAgIGNhc2UgOTgzOlxuICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1vei0nICsgYSArICctbXMtJyArIGEgKyBhO1xuXG4gICAgICBjYXNlIDg4MzpcbiAgICAgICAgaWYgKDQ1ID09PSBhLmNoYXJDb2RlQXQoOCkpIHJldHVybiAnLXdlYmtpdC0nICsgYSArIGE7XG4gICAgICAgIGlmICgwIDwgYS5pbmRleE9mKCdpbWFnZS1zZXQoJywgMTEpKSByZXR1cm4gYS5yZXBsYWNlKGphLCAnJDEtd2Via2l0LSQyJykgKyBhO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSA5MzI6XG4gICAgICAgIGlmICg0NSA9PT0gYS5jaGFyQ29kZUF0KDQpKSBzd2l0Y2ggKGEuY2hhckNvZGVBdCg1KSkge1xuICAgICAgICAgIGNhc2UgMTAzOlxuICAgICAgICAgICAgcmV0dXJuICctd2Via2l0LWJveC0nICsgYS5yZXBsYWNlKCctZ3JvdycsICcnKSArICctd2Via2l0LScgKyBhICsgJy1tcy0nICsgYS5yZXBsYWNlKCdncm93JywgJ3Bvc2l0aXZlJykgKyBhO1xuXG4gICAgICAgICAgY2FzZSAxMTU6XG4gICAgICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLScgKyBhLnJlcGxhY2UoJ3NocmluaycsICduZWdhdGl2ZScpICsgYTtcblxuICAgICAgICAgIGNhc2UgOTg6XG4gICAgICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLScgKyBhLnJlcGxhY2UoJ2Jhc2lzJywgJ3ByZWZlcnJlZC1zaXplJykgKyBhO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtJyArIGEgKyBhO1xuXG4gICAgICBjYXNlIDk2NDpcbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy1mbGV4LScgKyBhICsgYTtcblxuICAgICAgY2FzZSAxMDIzOlxuICAgICAgICBpZiAoOTkgIT09IGEuY2hhckNvZGVBdCg4KSkgYnJlYWs7XG4gICAgICAgIGIgPSBhLnN1YnN0cmluZyhhLmluZGV4T2YoJzonLCAxNSkpLnJlcGxhY2UoJ2ZsZXgtJywgJycpLnJlcGxhY2UoJ3NwYWNlLWJldHdlZW4nLCAnanVzdGlmeScpO1xuICAgICAgICByZXR1cm4gJy13ZWJraXQtYm94LXBhY2snICsgYiArICctd2Via2l0LScgKyBhICsgJy1tcy1mbGV4LXBhY2snICsgYiArIGE7XG5cbiAgICAgIGNhc2UgMTAwNTpcbiAgICAgICAgcmV0dXJuIGthLnRlc3QoYSkgPyBhLnJlcGxhY2UoYWEsICc6LXdlYmtpdC0nKSArIGEucmVwbGFjZShhYSwgJzotbW96LScpICsgYSA6IGE7XG5cbiAgICAgIGNhc2UgMWUzOlxuICAgICAgICBiID0gYS5zdWJzdHJpbmcoMTMpLnRyaW0oKTtcbiAgICAgICAgYyA9IGIuaW5kZXhPZignLScpICsgMTtcblxuICAgICAgICBzd2l0Y2ggKGIuY2hhckNvZGVBdCgwKSArIGIuY2hhckNvZGVBdChjKSkge1xuICAgICAgICAgIGNhc2UgMjI2OlxuICAgICAgICAgICAgYiA9IGEucmVwbGFjZShHLCAndGInKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAyMzI6XG4gICAgICAgICAgICBiID0gYS5yZXBsYWNlKEcsICd0Yi1ybCcpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDIyMDpcbiAgICAgICAgICAgIGIgPSBhLnJlcGxhY2UoRywgJ2xyJyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gYTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtJyArIGIgKyBhO1xuXG4gICAgICBjYXNlIDEwMTc6XG4gICAgICAgIGlmICgtMSA9PT0gYS5pbmRleE9mKCdzdGlja3knLCA5KSkgYnJlYWs7XG5cbiAgICAgIGNhc2UgOTc1OlxuICAgICAgICBjID0gKGEgPSBkKS5sZW5ndGggLSAxMDtcbiAgICAgICAgYiA9ICgzMyA9PT0gYS5jaGFyQ29kZUF0KGMpID8gYS5zdWJzdHJpbmcoMCwgYykgOiBhKS5zdWJzdHJpbmcoZC5pbmRleE9mKCc6JywgNykgKyAxKS50cmltKCk7XG5cbiAgICAgICAgc3dpdGNoIChtID0gYi5jaGFyQ29kZUF0KDApICsgKGIuY2hhckNvZGVBdCg3KSB8IDApKSB7XG4gICAgICAgICAgY2FzZSAyMDM6XG4gICAgICAgICAgICBpZiAoMTExID4gYi5jaGFyQ29kZUF0KDgpKSBicmVhaztcblxuICAgICAgICAgIGNhc2UgMTE1OlxuICAgICAgICAgICAgYSA9IGEucmVwbGFjZShiLCAnLXdlYmtpdC0nICsgYikgKyAnOycgKyBhO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDIwNzpcbiAgICAgICAgICBjYXNlIDEwMjpcbiAgICAgICAgICAgIGEgPSBhLnJlcGxhY2UoYiwgJy13ZWJraXQtJyArICgxMDIgPCBtID8gJ2lubGluZS0nIDogJycpICsgJ2JveCcpICsgJzsnICsgYS5yZXBsYWNlKGIsICctd2Via2l0LScgKyBiKSArICc7JyArIGEucmVwbGFjZShiLCAnLW1zLScgKyBiICsgJ2JveCcpICsgJzsnICsgYTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhICsgJzsnO1xuXG4gICAgICBjYXNlIDkzODpcbiAgICAgICAgaWYgKDQ1ID09PSBhLmNoYXJDb2RlQXQoNSkpIHN3aXRjaCAoYS5jaGFyQ29kZUF0KDYpKSB7XG4gICAgICAgICAgY2FzZSAxMDU6XG4gICAgICAgICAgICByZXR1cm4gYiA9IGEucmVwbGFjZSgnLWl0ZW1zJywgJycpLCAnLXdlYmtpdC0nICsgYSArICctd2Via2l0LWJveC0nICsgYiArICctbXMtZmxleC0nICsgYiArIGE7XG5cbiAgICAgICAgICBjYXNlIDExNTpcbiAgICAgICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtZmxleC1pdGVtLScgKyBhLnJlcGxhY2UoYmEsICcnKSArIGE7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy1mbGV4LWxpbmUtcGFjaycgKyBhLnJlcGxhY2UoJ2FsaWduLWNvbnRlbnQnLCAnJykucmVwbGFjZShiYSwgJycpICsgYTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSA5NzM6XG4gICAgICBjYXNlIDk4OTpcbiAgICAgICAgaWYgKDQ1ICE9PSBhLmNoYXJDb2RlQXQoMykgfHwgMTIyID09PSBhLmNoYXJDb2RlQXQoNCkpIGJyZWFrO1xuXG4gICAgICBjYXNlIDkzMTpcbiAgICAgIGNhc2UgOTUzOlxuICAgICAgICBpZiAoITAgPT09IGxhLnRlc3QoZCkpIHJldHVybiAxMTUgPT09IChiID0gZC5zdWJzdHJpbmcoZC5pbmRleE9mKCc6JykgKyAxKSkuY2hhckNvZGVBdCgwKSA/IFAoZC5yZXBsYWNlKCdzdHJldGNoJywgJ2ZpbGwtYXZhaWxhYmxlJyksIGMsIGUsIGgpLnJlcGxhY2UoJzpmaWxsLWF2YWlsYWJsZScsICc6c3RyZXRjaCcpIDogYS5yZXBsYWNlKGIsICctd2Via2l0LScgKyBiKSArIGEucmVwbGFjZShiLCAnLW1vei0nICsgYi5yZXBsYWNlKCdmaWxsLScsICcnKSkgKyBhO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSA5NjI6XG4gICAgICAgIGlmIChhID0gJy13ZWJraXQtJyArIGEgKyAoMTAyID09PSBhLmNoYXJDb2RlQXQoNSkgPyAnLW1zLScgKyBhIDogJycpICsgYSwgMjExID09PSBlICsgaCAmJiAxMDUgPT09IGEuY2hhckNvZGVBdCgxMykgJiYgMCA8IGEuaW5kZXhPZigndHJhbnNmb3JtJywgMTApKSByZXR1cm4gYS5zdWJzdHJpbmcoMCwgYS5pbmRleE9mKCc7JywgMjcpICsgMSkucmVwbGFjZShtYSwgJyQxLXdlYmtpdC0kMicpICsgYTtcbiAgICB9XG5cbiAgICByZXR1cm4gYTtcbiAgfVxuXG4gIGZ1bmN0aW9uIEwoZCwgYykge1xuICAgIHZhciBlID0gZC5pbmRleE9mKDEgPT09IGMgPyAnOicgOiAneycpLFxuICAgICAgICBoID0gZC5zdWJzdHJpbmcoMCwgMyAhPT0gYyA/IGUgOiAxMCk7XG4gICAgZSA9IGQuc3Vic3RyaW5nKGUgKyAxLCBkLmxlbmd0aCAtIDEpO1xuICAgIHJldHVybiBSKDIgIT09IGMgPyBoIDogaC5yZXBsYWNlKG5hLCAnJDEnKSwgZSwgYyk7XG4gIH1cblxuICBmdW5jdGlvbiBlYShkLCBjKSB7XG4gICAgdmFyIGUgPSBQKGMsIGMuY2hhckNvZGVBdCgwKSwgYy5jaGFyQ29kZUF0KDEpLCBjLmNoYXJDb2RlQXQoMikpO1xuICAgIHJldHVybiBlICE9PSBjICsgJzsnID8gZS5yZXBsYWNlKG9hLCAnIG9yICgkMSknKS5zdWJzdHJpbmcoNCkgOiAnKCcgKyBjICsgJyknO1xuICB9XG5cbiAgZnVuY3Rpb24gSChkLCBjLCBlLCBoLCBhLCBtLCBiLCB2LCBuLCBxKSB7XG4gICAgZm9yICh2YXIgZyA9IDAsIHggPSBjLCB3OyBnIDwgQTsgKytnKSB7XG4gICAgICBzd2l0Y2ggKHcgPSBTW2ddLmNhbGwoQiwgZCwgeCwgZSwgaCwgYSwgbSwgYiwgdiwgbiwgcSkpIHtcbiAgICAgICAgY2FzZSB2b2lkIDA6XG4gICAgICAgIGNhc2UgITE6XG4gICAgICAgIGNhc2UgITA6XG4gICAgICAgIGNhc2UgbnVsbDpcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHggPSB3O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh4ICE9PSBjKSByZXR1cm4geDtcbiAgfVxuXG4gIGZ1bmN0aW9uIFQoZCkge1xuICAgIHN3aXRjaCAoZCkge1xuICAgICAgY2FzZSB2b2lkIDA6XG4gICAgICBjYXNlIG51bGw6XG4gICAgICAgIEEgPSBTLmxlbmd0aCA9IDA7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGQpIFNbQSsrXSA9IGQ7ZWxzZSBpZiAoJ29iamVjdCcgPT09IHR5cGVvZiBkKSBmb3IgKHZhciBjID0gMCwgZSA9IGQubGVuZ3RoOyBjIDwgZTsgKytjKSB7XG4gICAgICAgICAgVChkW2NdKTtcbiAgICAgICAgfSBlbHNlIFkgPSAhIWQgfCAwO1xuICAgIH1cblxuICAgIHJldHVybiBUO1xuICB9XG5cbiAgZnVuY3Rpb24gVShkKSB7XG4gICAgZCA9IGQucHJlZml4O1xuICAgIHZvaWQgMCAhPT0gZCAmJiAoUiA9IG51bGwsIGQgPyAnZnVuY3Rpb24nICE9PSB0eXBlb2YgZCA/IHcgPSAxIDogKHcgPSAyLCBSID0gZCkgOiB3ID0gMCk7XG4gICAgcmV0dXJuIFU7XG4gIH1cblxuICBmdW5jdGlvbiBCKGQsIGMpIHtcbiAgICB2YXIgZSA9IGQ7XG4gICAgMzMgPiBlLmNoYXJDb2RlQXQoMCkgJiYgKGUgPSBlLnRyaW0oKSk7XG4gICAgViA9IGU7XG4gICAgZSA9IFtWXTtcblxuICAgIGlmICgwIDwgQSkge1xuICAgICAgdmFyIGggPSBIKC0xLCBjLCBlLCBlLCBELCB6LCAwLCAwLCAwLCAwKTtcbiAgICAgIHZvaWQgMCAhPT0gaCAmJiAnc3RyaW5nJyA9PT0gdHlwZW9mIGggJiYgKGMgPSBoKTtcbiAgICB9XG5cbiAgICB2YXIgYSA9IE0oTywgZSwgYywgMCwgMCk7XG4gICAgMCA8IEEgJiYgKGggPSBIKC0yLCBhLCBlLCBlLCBELCB6LCBhLmxlbmd0aCwgMCwgMCwgMCksIHZvaWQgMCAhPT0gaCAmJiAoYSA9IGgpKTtcbiAgICBWID0gJyc7XG4gICAgRSA9IDA7XG4gICAgeiA9IEQgPSAxO1xuICAgIHJldHVybiBhO1xuICB9XG5cbiAgdmFyIGNhID0gL15cXDArL2csXG4gICAgICBOID0gL1tcXDBcXHJcXGZdL2csXG4gICAgICBhYSA9IC86ICovZyxcbiAgICAgIGthID0gL3pvb3xncmEvLFxuICAgICAgbWEgPSAvKFssOiBdKSh0cmFuc2Zvcm0pL2csXG4gICAgICBpYSA9IC8sXFxyKz8vZyxcbiAgICAgIEYgPSAvKFtcXHRcXHJcXG4gXSkqXFxmPyYvZyxcbiAgICAgIGZhID0gL0Aoa1xcdyspXFxzKihcXFMqKVxccyovLFxuICAgICAgUSA9IC86OihwbGFjZSkvZyxcbiAgICAgIGhhID0gLzoocmVhZC1vbmx5KS9nLFxuICAgICAgRyA9IC9bc3ZoXVxcdystW3RibHJdezJ9LyxcbiAgICAgIGRhID0gL1xcKFxccyooLiopXFxzKlxcKS9nLFxuICAgICAgb2EgPSAvKFtcXHNcXFNdKj8pOy9nLFxuICAgICAgYmEgPSAvLXNlbGZ8ZmxleC0vZyxcbiAgICAgIG5hID0gL1teXSo/KDpbcnBdW2VsXWFbXFx3LV0rKVteXSovLFxuICAgICAgbGEgPSAvc3RyZXRjaHw6XFxzKlxcdytcXC0oPzpjb250ZXxhdmFpbCkvLFxuICAgICAgamEgPSAvKFteLV0pKGltYWdlLXNldFxcKCkvLFxuICAgICAgeiA9IDEsXG4gICAgICBEID0gMSxcbiAgICAgIEUgPSAwLFxuICAgICAgdyA9IDEsXG4gICAgICBPID0gW10sXG4gICAgICBTID0gW10sXG4gICAgICBBID0gMCxcbiAgICAgIFIgPSBudWxsLFxuICAgICAgWSA9IDAsXG4gICAgICBWID0gJyc7XG4gIEIudXNlID0gVDtcbiAgQi5zZXQgPSBVO1xuICB2b2lkIDAgIT09IFcgJiYgVShXKTtcbiAgcmV0dXJuIEI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxpc19taW47XG4iLCJ2YXIgdW5pdGxlc3NLZXlzID0ge1xuICBhbmltYXRpb25JdGVyYXRpb25Db3VudDogMSxcbiAgYm9yZGVySW1hZ2VPdXRzZXQ6IDEsXG4gIGJvcmRlckltYWdlU2xpY2U6IDEsXG4gIGJvcmRlckltYWdlV2lkdGg6IDEsXG4gIGJveEZsZXg6IDEsXG4gIGJveEZsZXhHcm91cDogMSxcbiAgYm94T3JkaW5hbEdyb3VwOiAxLFxuICBjb2x1bW5Db3VudDogMSxcbiAgY29sdW1uczogMSxcbiAgZmxleDogMSxcbiAgZmxleEdyb3c6IDEsXG4gIGZsZXhQb3NpdGl2ZTogMSxcbiAgZmxleFNocmluazogMSxcbiAgZmxleE5lZ2F0aXZlOiAxLFxuICBmbGV4T3JkZXI6IDEsXG4gIGdyaWRSb3c6IDEsXG4gIGdyaWRSb3dFbmQ6IDEsXG4gIGdyaWRSb3dTcGFuOiAxLFxuICBncmlkUm93U3RhcnQ6IDEsXG4gIGdyaWRDb2x1bW46IDEsXG4gIGdyaWRDb2x1bW5FbmQ6IDEsXG4gIGdyaWRDb2x1bW5TcGFuOiAxLFxuICBncmlkQ29sdW1uU3RhcnQ6IDEsXG4gIG1zR3JpZFJvdzogMSxcbiAgbXNHcmlkUm93U3BhbjogMSxcbiAgbXNHcmlkQ29sdW1uOiAxLFxuICBtc0dyaWRDb2x1bW5TcGFuOiAxLFxuICBmb250V2VpZ2h0OiAxLFxuICBsaW5lSGVpZ2h0OiAxLFxuICBvcGFjaXR5OiAxLFxuICBvcmRlcjogMSxcbiAgb3JwaGFuczogMSxcbiAgdGFiU2l6ZTogMSxcbiAgd2lkb3dzOiAxLFxuICB6SW5kZXg6IDEsXG4gIHpvb206IDEsXG4gIFdlYmtpdExpbmVDbGFtcDogMSxcbiAgLy8gU1ZHLXJlbGF0ZWQgcHJvcGVydGllc1xuICBmaWxsT3BhY2l0eTogMSxcbiAgZmxvb2RPcGFjaXR5OiAxLFxuICBzdG9wT3BhY2l0eTogMSxcbiAgc3Ryb2tlRGFzaGFycmF5OiAxLFxuICBzdHJva2VEYXNob2Zmc2V0OiAxLFxuICBzdHJva2VNaXRlcmxpbWl0OiAxLFxuICBzdHJva2VPcGFjaXR5OiAxLFxuICBzdHJva2VXaWR0aDogMVxufTtcblxuZXhwb3J0IGRlZmF1bHQgdW5pdGxlc3NLZXlzO1xuIiwidmFyIGlzQnJvd3NlciA9IFwib2JqZWN0XCIgIT09ICd1bmRlZmluZWQnO1xuZnVuY3Rpb24gZ2V0UmVnaXN0ZXJlZFN0eWxlcyhyZWdpc3RlcmVkLCByZWdpc3RlcmVkU3R5bGVzLCBjbGFzc05hbWVzKSB7XG4gIHZhciByYXdDbGFzc05hbWUgPSAnJztcbiAgY2xhc3NOYW1lcy5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgIGlmIChyZWdpc3RlcmVkW2NsYXNzTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVnaXN0ZXJlZFN0eWxlcy5wdXNoKHJlZ2lzdGVyZWRbY2xhc3NOYW1lXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJhd0NsYXNzTmFtZSArPSBjbGFzc05hbWUgKyBcIiBcIjtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmF3Q2xhc3NOYW1lO1xufVxudmFyIGluc2VydFN0eWxlcyA9IGZ1bmN0aW9uIGluc2VydFN0eWxlcyhjYWNoZSwgc2VyaWFsaXplZCwgaXNTdHJpbmdUYWcpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IGNhY2hlLmtleSArIFwiLVwiICsgc2VyaWFsaXplZC5uYW1lO1xuXG4gIGlmICggLy8gd2Ugb25seSBuZWVkIHRvIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSByZWdpc3RlcmVkIGNhY2hlIGlmIHRoZVxuICAvLyBjbGFzcyBuYW1lIGNvdWxkIGJlIHVzZWQgZnVydGhlciBkb3duXG4gIC8vIHRoZSB0cmVlIGJ1dCBpZiBpdCdzIGEgc3RyaW5nIHRhZywgd2Uga25vdyBpdCB3b24ndFxuICAvLyBzbyB3ZSBkb24ndCBoYXZlIHRvIGFkZCBpdCB0byByZWdpc3RlcmVkIGNhY2hlLlxuICAvLyB0aGlzIGltcHJvdmVzIG1lbW9yeSB1c2FnZSBzaW5jZSB3ZSBjYW4gYXZvaWQgc3RvcmluZyB0aGUgd2hvbGUgc3R5bGUgc3RyaW5nXG4gIChpc1N0cmluZ1RhZyA9PT0gZmFsc2UgfHwgLy8gd2UgbmVlZCB0byBhbHdheXMgc3RvcmUgaXQgaWYgd2UncmUgaW4gY29tcGF0IG1vZGUgYW5kXG4gIC8vIGluIG5vZGUgc2luY2UgZW1vdGlvbi1zZXJ2ZXIgcmVsaWVzIG9uIHdoZXRoZXIgYSBzdHlsZSBpcyBpblxuICAvLyB0aGUgcmVnaXN0ZXJlZCBjYWNoZSB0byBrbm93IHdoZXRoZXIgYSBzdHlsZSBpcyBnbG9iYWwgb3Igbm90XG4gIC8vIGFsc28sIG5vdGUgdGhhdCB0aGlzIGNoZWNrIHdpbGwgYmUgZGVhZCBjb2RlIGVsaW1pbmF0ZWQgaW4gdGhlIGJyb3dzZXJcbiAgaXNCcm93c2VyID09PSBmYWxzZSAmJiBjYWNoZS5jb21wYXQgIT09IHVuZGVmaW5lZCkgJiYgY2FjaGUucmVnaXN0ZXJlZFtjbGFzc05hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICBjYWNoZS5yZWdpc3RlcmVkW2NsYXNzTmFtZV0gPSBzZXJpYWxpemVkLnN0eWxlcztcbiAgfVxuXG4gIGlmIChjYWNoZS5pbnNlcnRlZFtzZXJpYWxpemVkLm5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgY3VycmVudCA9IHNlcmlhbGl6ZWQ7XG5cbiAgICBkbyB7XG4gICAgICB2YXIgbWF5YmVTdHlsZXMgPSBjYWNoZS5pbnNlcnQoXCIuXCIgKyBjbGFzc05hbWUsIGN1cnJlbnQsIGNhY2hlLnNoZWV0LCB0cnVlKTtcblxuICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICB9IHdoaWxlIChjdXJyZW50ICE9PSB1bmRlZmluZWQpO1xuICB9XG59O1xuXG5leHBvcnQgeyBnZXRSZWdpc3RlcmVkU3R5bGVzLCBpbnNlcnRTdHlsZXMgfTtcbiIsInZhciB3ZWFrTWVtb2l6ZSA9IGZ1bmN0aW9uIHdlYWtNZW1vaXplKGZ1bmMpIHtcbiAgLy8gJEZsb3dGaXhNZSBmbG93IGRvZXNuJ3QgaW5jbHVkZSBhbGwgbm9uLXByaW1pdGl2ZSB0eXBlcyBhcyBhbGxvd2VkIGZvciB3ZWFrbWFwc1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuICByZXR1cm4gZnVuY3Rpb24gKGFyZykge1xuICAgIGlmIChjYWNoZS5oYXMoYXJnKSkge1xuICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgcmV0dXJuIGNhY2hlLmdldChhcmcpO1xuICAgIH1cblxuICAgIHZhciByZXQgPSBmdW5jKGFyZyk7XG4gICAgY2FjaGUuc2V0KGFyZywgcmV0KTtcbiAgICByZXR1cm4gcmV0O1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2Vha01lbW9pemU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpO1xuICAgIGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlO1xuICAgIH0pO1xuICAgIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTtcbiAgfVxuXG4gIHJldHVybiBrZXlzO1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkMih0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcblxuICAgIGlmIChpICUgMikge1xuICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuXG4gIHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcblxuICB2YXIga2V5LCBpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTtcbiAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG52YXIgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uIGlzRnVuY3Rpb24ob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSAnZnVuY3Rpb24nO1xufTtcblxudmFyIE1EWENvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dCh7fSk7XG52YXIgd2l0aE1EWENvbXBvbmVudHMgPSBmdW5jdGlvbiB3aXRoTURYQ29tcG9uZW50cyhDb21wb25lbnQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHZhciBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wcy5jb21wb25lbnRzKTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgIGNvbXBvbmVudHM6IGFsbENvbXBvbmVudHNcbiAgICB9KSk7XG4gIH07XG59O1xudmFyIHVzZU1EWENvbXBvbmVudHMgPSBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgdmFyIGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KTtcbiAgdmFyIGFsbENvbXBvbmVudHMgPSBjb250ZXh0Q29tcG9uZW50cztcblxuICBpZiAoY29tcG9uZW50cykge1xuICAgIGFsbENvbXBvbmVudHMgPSBpc0Z1bmN0aW9uKGNvbXBvbmVudHMpID8gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cykgOiBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgY29udGV4dENvbXBvbmVudHMpLCBjb21wb25lbnRzKTtcbiAgfVxuXG4gIHJldHVybiBhbGxDb21wb25lbnRzO1xufTtcbnZhciBNRFhQcm92aWRlciA9IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BzKSB7XG4gIHZhciBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wcy5jb21wb25lbnRzKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE1EWENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogYWxsQ29tcG9uZW50c1xuICB9LCBwcm9wcy5jaGlsZHJlbik7XG59O1xuXG52YXIgVFlQRV9QUk9QX05BTUUgPSAnbWR4VHlwZSc7XG52YXIgREVGQVVMVFMgPSB7XG4gIGlubGluZUNvZGU6ICdjb2RlJyxcbiAgd3JhcHBlcjogZnVuY3Rpb24gd3JhcHBlcihfcmVmKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbjtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIHt9LCBjaGlsZHJlbik7XG4gIH1cbn07XG52YXIgTURYQ3JlYXRlRWxlbWVudCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7XG4gIHZhciBwcm9wQ29tcG9uZW50cyA9IHByb3BzLmNvbXBvbmVudHMsXG4gICAgICBtZHhUeXBlID0gcHJvcHMubWR4VHlwZSxcbiAgICAgIG9yaWdpbmFsVHlwZSA9IHByb3BzLm9yaWdpbmFsVHlwZSxcbiAgICAgIHBhcmVudE5hbWUgPSBwcm9wcy5wYXJlbnROYW1lLFxuICAgICAgZXRjID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjb21wb25lbnRzXCIsIFwibWR4VHlwZVwiLCBcIm9yaWdpbmFsVHlwZVwiLCBcInBhcmVudE5hbWVcIl0pO1xuXG4gIHZhciBjb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wQ29tcG9uZW50cyk7XG4gIHZhciB0eXBlID0gbWR4VHlwZTtcbiAgdmFyIENvbXBvbmVudCA9IGNvbXBvbmVudHNbXCJcIi5jb25jYXQocGFyZW50TmFtZSwgXCIuXCIpLmNvbmNhdCh0eXBlKV0gfHwgY29tcG9uZW50c1t0eXBlXSB8fCBERUZBVUxUU1t0eXBlXSB8fCBvcmlnaW5hbFR5cGU7XG5cbiAgaWYgKHByb3BDb21wb25lbnRzKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe1xuICAgICAgcmVmOiByZWZcbiAgICB9LCBldGMpLCB7fSwge1xuICAgICAgY29tcG9uZW50czogcHJvcENvbXBvbmVudHNcbiAgICB9KSk7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfb2JqZWN0U3ByZWFkMih7XG4gICAgcmVmOiByZWZcbiAgfSwgZXRjKSk7XG59KTtcbk1EWENyZWF0ZUVsZW1lbnQuZGlzcGxheU5hbWUgPSAnTURYQ3JlYXRlRWxlbWVudCc7XG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50ICh0eXBlLCBwcm9wcykge1xuICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgdmFyIG1keFR5cGUgPSBwcm9wcyAmJiBwcm9wcy5tZHhUeXBlO1xuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgbWR4VHlwZSkge1xuICAgIHZhciBhcmdzTGVuZ3RoID0gYXJncy5sZW5ndGg7XG4gICAgdmFyIGNyZWF0ZUVsZW1lbnRBcmdBcnJheSA9IG5ldyBBcnJheShhcmdzTGVuZ3RoKTtcbiAgICBjcmVhdGVFbGVtZW50QXJnQXJyYXlbMF0gPSBNRFhDcmVhdGVFbGVtZW50O1xuICAgIHZhciBuZXdQcm9wcyA9IHt9O1xuXG4gICAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChwcm9wcywga2V5KSkge1xuICAgICAgICBuZXdQcm9wc1trZXldID0gcHJvcHNba2V5XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBuZXdQcm9wcy5vcmlnaW5hbFR5cGUgPSB0eXBlO1xuICAgIG5ld1Byb3BzW1RZUEVfUFJPUF9OQU1FXSA9IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyA/IHR5cGUgOiBtZHhUeXBlO1xuICAgIGNyZWF0ZUVsZW1lbnRBcmdBcnJheVsxXSA9IG5ld1Byb3BzO1xuXG4gICAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmdzTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNyZWF0ZUVsZW1lbnRBcmdBcnJheVtpXSA9IGFyZ3NbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkobnVsbCwgY3JlYXRlRWxlbWVudEFyZ0FycmF5KTtcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50LmFwcGx5KG51bGwsIGFyZ3MpO1xufVxuXG5leHBvcnQgeyBNRFhDb250ZXh0LCBNRFhQcm92aWRlciwgY3JlYXRlRWxlbWVudCBhcyBtZHgsIHVzZU1EWENvbXBvbmVudHMsIHdpdGhNRFhDb21wb25lbnRzIH07XG4iLCJpbXBvcnQgeyBzeXN0ZW0gfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9jb3JlJztcbnZhciBjb25maWcgPSB7XG4gIGJhY2tncm91bmQ6IHRydWUsXG4gIGJhY2tncm91bmRJbWFnZTogdHJ1ZSxcbiAgYmFja2dyb3VuZFNpemU6IHRydWUsXG4gIGJhY2tncm91bmRQb3NpdGlvbjogdHJ1ZSxcbiAgYmFja2dyb3VuZFJlcGVhdDogdHJ1ZVxufTtcbmNvbmZpZy5iZ0ltYWdlID0gY29uZmlnLmJhY2tncm91bmRJbWFnZTtcbmNvbmZpZy5iZ1NpemUgPSBjb25maWcuYmFja2dyb3VuZFNpemU7XG5jb25maWcuYmdQb3NpdGlvbiA9IGNvbmZpZy5iYWNrZ3JvdW5kUG9zaXRpb247XG5jb25maWcuYmdSZXBlYXQgPSBjb25maWcuYmFja2dyb3VuZFJlcGVhdDtcbmV4cG9ydCB2YXIgYmFja2dyb3VuZCA9IHN5c3RlbShjb25maWcpO1xuZXhwb3J0IGRlZmF1bHQgYmFja2dyb3VuZDtcbiIsImltcG9ydCB7IHN5c3RlbSB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL2NvcmUnO1xudmFyIGNvbmZpZyA9IHtcbiAgYm9yZGVyOiB7XG4gICAgcHJvcGVydHk6ICdib3JkZXInLFxuICAgIHNjYWxlOiAnYm9yZGVycydcbiAgfSxcbiAgYm9yZGVyV2lkdGg6IHtcbiAgICBwcm9wZXJ0eTogJ2JvcmRlcldpZHRoJyxcbiAgICBzY2FsZTogJ2JvcmRlcldpZHRocydcbiAgfSxcbiAgYm9yZGVyU3R5bGU6IHtcbiAgICBwcm9wZXJ0eTogJ2JvcmRlclN0eWxlJyxcbiAgICBzY2FsZTogJ2JvcmRlclN0eWxlcydcbiAgfSxcbiAgYm9yZGVyQ29sb3I6IHtcbiAgICBwcm9wZXJ0eTogJ2JvcmRlckNvbG9yJyxcbiAgICBzY2FsZTogJ2NvbG9ycydcbiAgfSxcbiAgYm9yZGVyUmFkaXVzOiB7XG4gICAgcHJvcGVydHk6ICdib3JkZXJSYWRpdXMnLFxuICAgIHNjYWxlOiAncmFkaWknXG4gIH0sXG4gIGJvcmRlclRvcDoge1xuICAgIHByb3BlcnR5OiAnYm9yZGVyVG9wJyxcbiAgICBzY2FsZTogJ2JvcmRlcnMnXG4gIH0sXG4gIGJvcmRlclRvcExlZnRSYWRpdXM6IHtcbiAgICBwcm9wZXJ0eTogJ2JvcmRlclRvcExlZnRSYWRpdXMnLFxuICAgIHNjYWxlOiAncmFkaWknXG4gIH0sXG4gIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiB7XG4gICAgcHJvcGVydHk6ICdib3JkZXJUb3BSaWdodFJhZGl1cycsXG4gICAgc2NhbGU6ICdyYWRpaSdcbiAgfSxcbiAgYm9yZGVyUmlnaHQ6IHtcbiAgICBwcm9wZXJ0eTogJ2JvcmRlclJpZ2h0JyxcbiAgICBzY2FsZTogJ2JvcmRlcnMnXG4gIH0sXG4gIGJvcmRlckJvdHRvbToge1xuICAgIHByb3BlcnR5OiAnYm9yZGVyQm90dG9tJyxcbiAgICBzY2FsZTogJ2JvcmRlcnMnXG4gIH0sXG4gIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6IHtcbiAgICBwcm9wZXJ0eTogJ2JvcmRlckJvdHRvbUxlZnRSYWRpdXMnLFxuICAgIHNjYWxlOiAncmFkaWknXG4gIH0sXG4gIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiB7XG4gICAgcHJvcGVydHk6ICdib3JkZXJCb3R0b21SaWdodFJhZGl1cycsXG4gICAgc2NhbGU6ICdyYWRpaSdcbiAgfSxcbiAgYm9yZGVyTGVmdDoge1xuICAgIHByb3BlcnR5OiAnYm9yZGVyTGVmdCcsXG4gICAgc2NhbGU6ICdib3JkZXJzJ1xuICB9LFxuICBib3JkZXJYOiB7XG4gICAgcHJvcGVydGllczogWydib3JkZXJMZWZ0JywgJ2JvcmRlclJpZ2h0J10sXG4gICAgc2NhbGU6ICdib3JkZXJzJ1xuICB9LFxuICBib3JkZXJZOiB7XG4gICAgcHJvcGVydGllczogWydib3JkZXJUb3AnLCAnYm9yZGVyQm90dG9tJ10sXG4gICAgc2NhbGU6ICdib3JkZXJzJ1xuICB9XG59O1xuY29uZmlnLmJvcmRlclRvcFdpZHRoID0ge1xuICBwcm9wZXJ0eTogJ2JvcmRlclRvcFdpZHRoJyxcbiAgc2NhbGU6ICdib3JkZXJXaWR0aHMnXG59O1xuY29uZmlnLmJvcmRlclRvcENvbG9yID0ge1xuICBwcm9wZXJ0eTogJ2JvcmRlclRvcENvbG9yJyxcbiAgc2NhbGU6ICdjb2xvcnMnXG59O1xuY29uZmlnLmJvcmRlclRvcFN0eWxlID0ge1xuICBwcm9wZXJ0eTogJ2JvcmRlclRvcFN0eWxlJyxcbiAgc2NhbGU6ICdib3JkZXJTdHlsZXMnXG59O1xuY29uZmlnLmJvcmRlclRvcExlZnRSYWRpdXMgPSB7XG4gIHByb3BlcnR5OiAnYm9yZGVyVG9wTGVmdFJhZGl1cycsXG4gIHNjYWxlOiAncmFkaWknXG59O1xuY29uZmlnLmJvcmRlclRvcFJpZ2h0UmFkaXVzID0ge1xuICBwcm9wZXJ0eTogJ2JvcmRlclRvcFJpZ2h0UmFkaXVzJyxcbiAgc2NhbGU6ICdyYWRpaSdcbn07XG5jb25maWcuYm9yZGVyQm90dG9tV2lkdGggPSB7XG4gIHByb3BlcnR5OiAnYm9yZGVyQm90dG9tV2lkdGgnLFxuICBzY2FsZTogJ2JvcmRlcldpZHRocydcbn07XG5jb25maWcuYm9yZGVyQm90dG9tQ29sb3IgPSB7XG4gIHByb3BlcnR5OiAnYm9yZGVyQm90dG9tQ29sb3InLFxuICBzY2FsZTogJ2NvbG9ycydcbn07XG5jb25maWcuYm9yZGVyQm90dG9tU3R5bGUgPSB7XG4gIHByb3BlcnR5OiAnYm9yZGVyQm90dG9tU3R5bGUnLFxuICBzY2FsZTogJ2JvcmRlclN0eWxlcydcbn07XG5jb25maWcuYm9yZGVyQm90dG9tTGVmdFJhZGl1cyA9IHtcbiAgcHJvcGVydHk6ICdib3JkZXJCb3R0b21MZWZ0UmFkaXVzJyxcbiAgc2NhbGU6ICdyYWRpaSdcbn07XG5jb25maWcuYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMgPSB7XG4gIHByb3BlcnR5OiAnYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMnLFxuICBzY2FsZTogJ3JhZGlpJ1xufTtcbmNvbmZpZy5ib3JkZXJMZWZ0V2lkdGggPSB7XG4gIHByb3BlcnR5OiAnYm9yZGVyTGVmdFdpZHRoJyxcbiAgc2NhbGU6ICdib3JkZXJXaWR0aHMnXG59O1xuY29uZmlnLmJvcmRlckxlZnRDb2xvciA9IHtcbiAgcHJvcGVydHk6ICdib3JkZXJMZWZ0Q29sb3InLFxuICBzY2FsZTogJ2NvbG9ycydcbn07XG5jb25maWcuYm9yZGVyTGVmdFN0eWxlID0ge1xuICBwcm9wZXJ0eTogJ2JvcmRlckxlZnRTdHlsZScsXG4gIHNjYWxlOiAnYm9yZGVyU3R5bGVzJ1xufTtcbmNvbmZpZy5ib3JkZXJSaWdodFdpZHRoID0ge1xuICBwcm9wZXJ0eTogJ2JvcmRlclJpZ2h0V2lkdGgnLFxuICBzY2FsZTogJ2JvcmRlcldpZHRocydcbn07XG5jb25maWcuYm9yZGVyUmlnaHRDb2xvciA9IHtcbiAgcHJvcGVydHk6ICdib3JkZXJSaWdodENvbG9yJyxcbiAgc2NhbGU6ICdjb2xvcnMnXG59O1xuY29uZmlnLmJvcmRlclJpZ2h0U3R5bGUgPSB7XG4gIHByb3BlcnR5OiAnYm9yZGVyUmlnaHRTdHlsZScsXG4gIHNjYWxlOiAnYm9yZGVyU3R5bGVzJ1xufTtcbmV4cG9ydCB2YXIgYm9yZGVyID0gc3lzdGVtKGNvbmZpZyk7XG5leHBvcnQgZGVmYXVsdCBib3JkZXI7XG4iLCJpbXBvcnQgeyBzeXN0ZW0gfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9jb3JlJztcbnZhciBjb25maWcgPSB7XG4gIGNvbG9yOiB7XG4gICAgcHJvcGVydHk6ICdjb2xvcicsXG4gICAgc2NhbGU6ICdjb2xvcnMnXG4gIH0sXG4gIGJhY2tncm91bmRDb2xvcjoge1xuICAgIHByb3BlcnR5OiAnYmFja2dyb3VuZENvbG9yJyxcbiAgICBzY2FsZTogJ2NvbG9ycydcbiAgfSxcbiAgb3BhY2l0eTogdHJ1ZVxufTtcbmNvbmZpZy5iZyA9IGNvbmZpZy5iYWNrZ3JvdW5kQ29sb3I7XG5leHBvcnQgdmFyIGNvbG9yID0gc3lzdGVtKGNvbmZpZyk7XG5leHBvcnQgZGVmYXVsdCBjb2xvcjtcbiIsImltcG9ydCBhc3NpZ24gZnJvbSAnb2JqZWN0LWFzc2lnbic7XG5leHBvcnQgdmFyIG1lcmdlID0gZnVuY3Rpb24gbWVyZ2UoYSwgYikge1xuICB2YXIgcmVzdWx0ID0gYXNzaWduKHt9LCBhLCBiKTtcblxuICBmb3IgKHZhciBrZXkgaW4gYSkge1xuICAgIHZhciBfYXNzaWduO1xuXG4gICAgaWYgKCFhW2tleV0gfHwgdHlwZW9mIGJba2V5XSAhPT0gJ29iamVjdCcpIGNvbnRpbnVlO1xuICAgIGFzc2lnbihyZXN1bHQsIChfYXNzaWduID0ge30sIF9hc3NpZ25ba2V5XSA9IGFzc2lnbihhW2tleV0sIGJba2V5XSksIF9hc3NpZ24pKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59OyAvLyBzb3J0IG9iamVjdC12YWx1ZSByZXNwb25zaXZlIHN0eWxlc1xuXG52YXIgc29ydCA9IGZ1bmN0aW9uIHNvcnQob2JqKSB7XG4gIHZhciBuZXh0ID0ge307XG4gIE9iamVjdC5rZXlzKG9iaikuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBhLmxvY2FsZUNvbXBhcmUoYiwgdW5kZWZpbmVkLCB7XG4gICAgICBudW1lcmljOiB0cnVlLFxuICAgICAgc2Vuc2l0aXZpdHk6ICdiYXNlJ1xuICAgIH0pO1xuICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBuZXh0W2tleV0gPSBvYmpba2V5XTtcbiAgfSk7XG4gIHJldHVybiBuZXh0O1xufTtcblxudmFyIGRlZmF1bHRzID0ge1xuICBicmVha3BvaW50czogWzQwLCA1MiwgNjRdLm1hcChmdW5jdGlvbiAobikge1xuICAgIHJldHVybiBuICsgJ2VtJztcbiAgfSlcbn07XG5cbnZhciBjcmVhdGVNZWRpYVF1ZXJ5ID0gZnVuY3Rpb24gY3JlYXRlTWVkaWFRdWVyeShuKSB7XG4gIHJldHVybiBcIkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IFwiICsgbiArIFwiKVwiO1xufTtcblxudmFyIGdldFZhbHVlID0gZnVuY3Rpb24gZ2V0VmFsdWUobiwgc2NhbGUpIHtcbiAgcmV0dXJuIGdldChzY2FsZSwgbiwgbik7XG59O1xuXG5leHBvcnQgdmFyIGdldCA9IGZ1bmN0aW9uIGdldChvYmosIGtleSwgZGVmLCBwLCB1bmRlZikge1xuICBrZXkgPSBrZXkgJiYga2V5LnNwbGl0ID8ga2V5LnNwbGl0KCcuJykgOiBba2V5XTtcblxuICBmb3IgKHAgPSAwOyBwIDwga2V5Lmxlbmd0aDsgcCsrKSB7XG4gICAgb2JqID0gb2JqID8gb2JqW2tleVtwXV0gOiB1bmRlZjtcbiAgfVxuXG4gIHJldHVybiBvYmogPT09IHVuZGVmID8gZGVmIDogb2JqO1xufTtcbmV4cG9ydCB2YXIgY3JlYXRlUGFyc2VyID0gZnVuY3Rpb24gY3JlYXRlUGFyc2VyKGNvbmZpZykge1xuICB2YXIgY2FjaGUgPSB7fTtcblxuICB2YXIgcGFyc2UgPSBmdW5jdGlvbiBwYXJzZShwcm9wcykge1xuICAgIHZhciBzdHlsZXMgPSB7fTtcbiAgICB2YXIgc2hvdWxkU29ydCA9IGZhbHNlO1xuICAgIHZhciBpc0NhY2hlRGlzYWJsZWQgPSBwcm9wcy50aGVtZSAmJiBwcm9wcy50aGVtZS5kaXNhYmxlU3R5bGVkU3lzdGVtQ2FjaGU7XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICAgIGlmICghY29uZmlnW2tleV0pIGNvbnRpbnVlO1xuICAgICAgdmFyIHN4ID0gY29uZmlnW2tleV07XG4gICAgICB2YXIgcmF3ID0gcHJvcHNba2V5XTtcbiAgICAgIHZhciBzY2FsZSA9IGdldChwcm9wcy50aGVtZSwgc3guc2NhbGUsIHN4LmRlZmF1bHRzKTtcblxuICAgICAgaWYgKHR5cGVvZiByYXcgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGNhY2hlLmJyZWFrcG9pbnRzID0gIWlzQ2FjaGVEaXNhYmxlZCAmJiBjYWNoZS5icmVha3BvaW50cyB8fCBnZXQocHJvcHMudGhlbWUsICdicmVha3BvaW50cycsIGRlZmF1bHRzLmJyZWFrcG9pbnRzKTtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyYXcpKSB7XG4gICAgICAgICAgY2FjaGUubWVkaWEgPSAhaXNDYWNoZURpc2FibGVkICYmIGNhY2hlLm1lZGlhIHx8IFtudWxsXS5jb25jYXQoY2FjaGUuYnJlYWtwb2ludHMubWFwKGNyZWF0ZU1lZGlhUXVlcnkpKTtcbiAgICAgICAgICBzdHlsZXMgPSBtZXJnZShzdHlsZXMsIHBhcnNlUmVzcG9uc2l2ZVN0eWxlKGNhY2hlLm1lZGlhLCBzeCwgc2NhbGUsIHJhdywgcHJvcHMpKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyYXcgIT09IG51bGwpIHtcbiAgICAgICAgICBzdHlsZXMgPSBtZXJnZShzdHlsZXMsIHBhcnNlUmVzcG9uc2l2ZU9iamVjdChjYWNoZS5icmVha3BvaW50cywgc3gsIHNjYWxlLCByYXcsIHByb3BzKSk7XG4gICAgICAgICAgc2hvdWxkU29ydCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgYXNzaWduKHN0eWxlcywgc3gocmF3LCBzY2FsZSwgcHJvcHMpKTtcbiAgICB9IC8vIHNvcnQgb2JqZWN0LWJhc2VkIHJlc3BvbnNpdmUgc3R5bGVzXG5cblxuICAgIGlmIChzaG91bGRTb3J0KSB7XG4gICAgICBzdHlsZXMgPSBzb3J0KHN0eWxlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlcztcbiAgfTtcblxuICBwYXJzZS5jb25maWcgPSBjb25maWc7XG4gIHBhcnNlLnByb3BOYW1lcyA9IE9iamVjdC5rZXlzKGNvbmZpZyk7XG4gIHBhcnNlLmNhY2hlID0gY2FjaGU7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoY29uZmlnKS5maWx0ZXIoZnVuY3Rpb24gKGspIHtcbiAgICByZXR1cm4gayAhPT0gJ2NvbmZpZyc7XG4gIH0pO1xuXG4gIGlmIChrZXlzLmxlbmd0aCA+IDEpIHtcbiAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIF9jcmVhdGVQYXJzZXI7XG5cbiAgICAgIHBhcnNlW2tleV0gPSBjcmVhdGVQYXJzZXIoKF9jcmVhdGVQYXJzZXIgPSB7fSwgX2NyZWF0ZVBhcnNlcltrZXldID0gY29uZmlnW2tleV0sIF9jcmVhdGVQYXJzZXIpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZTtcbn07XG5cbnZhciBwYXJzZVJlc3BvbnNpdmVTdHlsZSA9IGZ1bmN0aW9uIHBhcnNlUmVzcG9uc2l2ZVN0eWxlKG1lZGlhUXVlcmllcywgc3gsIHNjYWxlLCByYXcsIF9wcm9wcykge1xuICB2YXIgc3R5bGVzID0ge307XG4gIHJhdy5zbGljZSgwLCBtZWRpYVF1ZXJpZXMubGVuZ3RoKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwgaSkge1xuICAgIHZhciBtZWRpYSA9IG1lZGlhUXVlcmllc1tpXTtcbiAgICB2YXIgc3R5bGUgPSBzeCh2YWx1ZSwgc2NhbGUsIF9wcm9wcyk7XG5cbiAgICBpZiAoIW1lZGlhKSB7XG4gICAgICBhc3NpZ24oc3R5bGVzLCBzdHlsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfYXNzaWduMjtcblxuICAgICAgYXNzaWduKHN0eWxlcywgKF9hc3NpZ24yID0ge30sIF9hc3NpZ24yW21lZGlhXSA9IGFzc2lnbih7fSwgc3R5bGVzW21lZGlhXSwgc3R5bGUpLCBfYXNzaWduMikpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBzdHlsZXM7XG59O1xuXG52YXIgcGFyc2VSZXNwb25zaXZlT2JqZWN0ID0gZnVuY3Rpb24gcGFyc2VSZXNwb25zaXZlT2JqZWN0KGJyZWFrcG9pbnRzLCBzeCwgc2NhbGUsIHJhdywgX3Byb3BzKSB7XG4gIHZhciBzdHlsZXMgPSB7fTtcblxuICBmb3IgKHZhciBrZXkgaW4gcmF3KSB7XG4gICAgdmFyIGJyZWFrcG9pbnQgPSBicmVha3BvaW50c1trZXldO1xuICAgIHZhciB2YWx1ZSA9IHJhd1trZXldO1xuICAgIHZhciBzdHlsZSA9IHN4KHZhbHVlLCBzY2FsZSwgX3Byb3BzKTtcblxuICAgIGlmICghYnJlYWtwb2ludCkge1xuICAgICAgYXNzaWduKHN0eWxlcywgc3R5bGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2Fzc2lnbjM7XG5cbiAgICAgIHZhciBtZWRpYSA9IGNyZWF0ZU1lZGlhUXVlcnkoYnJlYWtwb2ludCk7XG4gICAgICBhc3NpZ24oc3R5bGVzLCAoX2Fzc2lnbjMgPSB7fSwgX2Fzc2lnbjNbbWVkaWFdID0gYXNzaWduKHt9LCBzdHlsZXNbbWVkaWFdLCBzdHlsZSksIF9hc3NpZ24zKSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0eWxlcztcbn07XG5cbmV4cG9ydCB2YXIgY3JlYXRlU3R5bGVGdW5jdGlvbiA9IGZ1bmN0aW9uIGNyZWF0ZVN0eWxlRnVuY3Rpb24oX3JlZikge1xuICB2YXIgcHJvcGVydGllcyA9IF9yZWYucHJvcGVydGllcyxcbiAgICAgIHByb3BlcnR5ID0gX3JlZi5wcm9wZXJ0eSxcbiAgICAgIHNjYWxlID0gX3JlZi5zY2FsZSxcbiAgICAgIF9yZWYkdHJhbnNmb3JtID0gX3JlZi50cmFuc2Zvcm0sXG4gICAgICB0cmFuc2Zvcm0gPSBfcmVmJHRyYW5zZm9ybSA9PT0gdm9pZCAwID8gZ2V0VmFsdWUgOiBfcmVmJHRyYW5zZm9ybSxcbiAgICAgIGRlZmF1bHRTY2FsZSA9IF9yZWYuZGVmYXVsdFNjYWxlO1xuICBwcm9wZXJ0aWVzID0gcHJvcGVydGllcyB8fCBbcHJvcGVydHldO1xuXG4gIHZhciBzeCA9IGZ1bmN0aW9uIHN4KHZhbHVlLCBzY2FsZSwgX3Byb3BzKSB7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIHZhciBuID0gdHJhbnNmb3JtKHZhbHVlLCBzY2FsZSwgX3Byb3BzKTtcbiAgICBpZiAobiA9PT0gbnVsbCkgcmV0dXJuO1xuICAgIHByb3BlcnRpZXMuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuICAgICAgcmVzdWx0W3Byb3BdID0gbjtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIHN4LnNjYWxlID0gc2NhbGU7XG4gIHN4LmRlZmF1bHRzID0gZGVmYXVsdFNjYWxlO1xuICByZXR1cm4gc3g7XG59OyAvLyBuZXcgdjUgQVBJXG5cbmV4cG9ydCB2YXIgc3lzdGVtID0gZnVuY3Rpb24gc3lzdGVtKGFyZ3MpIHtcbiAgaWYgKGFyZ3MgPT09IHZvaWQgMCkge1xuICAgIGFyZ3MgPSB7fTtcbiAgfVxuXG4gIHZhciBjb25maWcgPSB7fTtcbiAgT2JqZWN0LmtleXMoYXJncykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIGNvbmYgPSBhcmdzW2tleV07XG5cbiAgICBpZiAoY29uZiA9PT0gdHJ1ZSkge1xuICAgICAgLy8gc2hvcnRjdXQgZGVmaW5pdGlvblxuICAgICAgY29uZmlnW2tleV0gPSBjcmVhdGVTdHlsZUZ1bmN0aW9uKHtcbiAgICAgICAgcHJvcGVydHk6IGtleSxcbiAgICAgICAgc2NhbGU6IGtleVxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25mID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25maWdba2V5XSA9IGNvbmY7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uZmlnW2tleV0gPSBjcmVhdGVTdHlsZUZ1bmN0aW9uKGNvbmYpO1xuICB9KTtcbiAgdmFyIHBhcnNlciA9IGNyZWF0ZVBhcnNlcihjb25maWcpO1xuICByZXR1cm4gcGFyc2VyO1xufTtcbmV4cG9ydCB2YXIgY29tcG9zZSA9IGZ1bmN0aW9uIGNvbXBvc2UoKSB7XG4gIHZhciBjb25maWcgPSB7fTtcblxuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcGFyc2VycyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBwYXJzZXJzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcGFyc2Vycy5mb3JFYWNoKGZ1bmN0aW9uIChwYXJzZXIpIHtcbiAgICBpZiAoIXBhcnNlciB8fCAhcGFyc2VyLmNvbmZpZykgcmV0dXJuO1xuICAgIGFzc2lnbihjb25maWcsIHBhcnNlci5jb25maWcpO1xuICB9KTtcbiAgdmFyIHBhcnNlciA9IGNyZWF0ZVBhcnNlcihjb25maWcpO1xuICByZXR1cm4gcGFyc2VyO1xufTtcbiIsImZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbi8vIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvZGx2XG5leHBvcnQgdmFyIGdldCA9IGZ1bmN0aW9uIGdldChvYmosIGtleSwgZGVmLCBwLCB1bmRlZikge1xuICBrZXkgPSBrZXkgJiYga2V5LnNwbGl0ID8ga2V5LnNwbGl0KCcuJykgOiBba2V5XTtcblxuICBmb3IgKHAgPSAwOyBwIDwga2V5Lmxlbmd0aDsgcCsrKSB7XG4gICAgb2JqID0gb2JqID8gb2JqW2tleVtwXV0gOiB1bmRlZjtcbiAgfVxuXG4gIHJldHVybiBvYmogPT09IHVuZGVmID8gZGVmIDogb2JqO1xufTtcbnZhciBkZWZhdWx0QnJlYWtwb2ludHMgPSBbNDAsIDUyLCA2NF0ubWFwKGZ1bmN0aW9uIChuKSB7XG4gIHJldHVybiBuICsgJ2VtJztcbn0pO1xudmFyIGRlZmF1bHRUaGVtZSA9IHtcbiAgc3BhY2U6IFswLCA0LCA4LCAxNiwgMzIsIDY0LCAxMjgsIDI1NiwgNTEyXSxcbiAgZm9udFNpemVzOiBbMTIsIDE0LCAxNiwgMjAsIDI0LCAzMiwgNDgsIDY0LCA3Ml1cbn07XG52YXIgYWxpYXNlcyA9IHtcbiAgYmc6ICdiYWNrZ3JvdW5kQ29sb3InLFxuICBtOiAnbWFyZ2luJyxcbiAgbXQ6ICdtYXJnaW5Ub3AnLFxuICBtcjogJ21hcmdpblJpZ2h0JyxcbiAgbWI6ICdtYXJnaW5Cb3R0b20nLFxuICBtbDogJ21hcmdpbkxlZnQnLFxuICBteDogJ21hcmdpblgnLFxuICBteTogJ21hcmdpblknLFxuICBwOiAncGFkZGluZycsXG4gIHB0OiAncGFkZGluZ1RvcCcsXG4gIHByOiAncGFkZGluZ1JpZ2h0JyxcbiAgcGI6ICdwYWRkaW5nQm90dG9tJyxcbiAgcGw6ICdwYWRkaW5nTGVmdCcsXG4gIHB4OiAncGFkZGluZ1gnLFxuICBweTogJ3BhZGRpbmdZJ1xufTtcbnZhciBtdWx0aXBsZXMgPSB7XG4gIG1hcmdpblg6IFsnbWFyZ2luTGVmdCcsICdtYXJnaW5SaWdodCddLFxuICBtYXJnaW5ZOiBbJ21hcmdpblRvcCcsICdtYXJnaW5Cb3R0b20nXSxcbiAgcGFkZGluZ1g6IFsncGFkZGluZ0xlZnQnLCAncGFkZGluZ1JpZ2h0J10sXG4gIHBhZGRpbmdZOiBbJ3BhZGRpbmdUb3AnLCAncGFkZGluZ0JvdHRvbSddLFxuICBzaXplOiBbJ3dpZHRoJywgJ2hlaWdodCddXG59O1xudmFyIHNjYWxlcyA9IHtcbiAgY29sb3I6ICdjb2xvcnMnLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICdjb2xvcnMnLFxuICBib3JkZXJDb2xvcjogJ2NvbG9ycycsXG4gIG1hcmdpbjogJ3NwYWNlJyxcbiAgbWFyZ2luVG9wOiAnc3BhY2UnLFxuICBtYXJnaW5SaWdodDogJ3NwYWNlJyxcbiAgbWFyZ2luQm90dG9tOiAnc3BhY2UnLFxuICBtYXJnaW5MZWZ0OiAnc3BhY2UnLFxuICBtYXJnaW5YOiAnc3BhY2UnLFxuICBtYXJnaW5ZOiAnc3BhY2UnLFxuICBwYWRkaW5nOiAnc3BhY2UnLFxuICBwYWRkaW5nVG9wOiAnc3BhY2UnLFxuICBwYWRkaW5nUmlnaHQ6ICdzcGFjZScsXG4gIHBhZGRpbmdCb3R0b206ICdzcGFjZScsXG4gIHBhZGRpbmdMZWZ0OiAnc3BhY2UnLFxuICBwYWRkaW5nWDogJ3NwYWNlJyxcbiAgcGFkZGluZ1k6ICdzcGFjZScsXG4gIHRvcDogJ3NwYWNlJyxcbiAgcmlnaHQ6ICdzcGFjZScsXG4gIGJvdHRvbTogJ3NwYWNlJyxcbiAgbGVmdDogJ3NwYWNlJyxcbiAgZ3JpZEdhcDogJ3NwYWNlJyxcbiAgZ3JpZENvbHVtbkdhcDogJ3NwYWNlJyxcbiAgZ3JpZFJvd0dhcDogJ3NwYWNlJyxcbiAgZ2FwOiAnc3BhY2UnLFxuICBjb2x1bW5HYXA6ICdzcGFjZScsXG4gIHJvd0dhcDogJ3NwYWNlJyxcbiAgZm9udEZhbWlseTogJ2ZvbnRzJyxcbiAgZm9udFNpemU6ICdmb250U2l6ZXMnLFxuICBmb250V2VpZ2h0OiAnZm9udFdlaWdodHMnLFxuICBsaW5lSGVpZ2h0OiAnbGluZUhlaWdodHMnLFxuICBsZXR0ZXJTcGFjaW5nOiAnbGV0dGVyU3BhY2luZ3MnLFxuICBib3JkZXI6ICdib3JkZXJzJyxcbiAgYm9yZGVyVG9wOiAnYm9yZGVycycsXG4gIGJvcmRlclJpZ2h0OiAnYm9yZGVycycsXG4gIGJvcmRlckJvdHRvbTogJ2JvcmRlcnMnLFxuICBib3JkZXJMZWZ0OiAnYm9yZGVycycsXG4gIGJvcmRlcldpZHRoOiAnYm9yZGVyV2lkdGhzJyxcbiAgYm9yZGVyU3R5bGU6ICdib3JkZXJTdHlsZXMnLFxuICBib3JkZXJSYWRpdXM6ICdyYWRpaScsXG4gIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiAncmFkaWknLFxuICBib3JkZXJUb3BMZWZ0UmFkaXVzOiAncmFkaWknLFxuICBib3JkZXJCb3R0b21SaWdodFJhZGl1czogJ3JhZGlpJyxcbiAgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogJ3JhZGlpJyxcbiAgYm9yZGVyVG9wV2lkdGg6ICdib3JkZXJXaWR0aHMnLFxuICBib3JkZXJUb3BDb2xvcjogJ2NvbG9ycycsXG4gIGJvcmRlclRvcFN0eWxlOiAnYm9yZGVyU3R5bGVzJyxcbiAgYm9yZGVyQm90dG9tV2lkdGg6ICdib3JkZXJXaWR0aHMnLFxuICBib3JkZXJCb3R0b21Db2xvcjogJ2NvbG9ycycsXG4gIGJvcmRlckJvdHRvbVN0eWxlOiAnYm9yZGVyU3R5bGVzJyxcbiAgYm9yZGVyTGVmdFdpZHRoOiAnYm9yZGVyV2lkdGhzJyxcbiAgYm9yZGVyTGVmdENvbG9yOiAnY29sb3JzJyxcbiAgYm9yZGVyTGVmdFN0eWxlOiAnYm9yZGVyU3R5bGVzJyxcbiAgYm9yZGVyUmlnaHRXaWR0aDogJ2JvcmRlcldpZHRocycsXG4gIGJvcmRlclJpZ2h0Q29sb3I6ICdjb2xvcnMnLFxuICBib3JkZXJSaWdodFN0eWxlOiAnYm9yZGVyU3R5bGVzJyxcbiAgb3V0bGluZUNvbG9yOiAnY29sb3JzJyxcbiAgYm94U2hhZG93OiAnc2hhZG93cycsXG4gIHRleHRTaGFkb3c6ICdzaGFkb3dzJyxcbiAgekluZGV4OiAnekluZGljZXMnLFxuICB3aWR0aDogJ3NpemVzJyxcbiAgbWluV2lkdGg6ICdzaXplcycsXG4gIG1heFdpZHRoOiAnc2l6ZXMnLFxuICBoZWlnaHQ6ICdzaXplcycsXG4gIG1pbkhlaWdodDogJ3NpemVzJyxcbiAgbWF4SGVpZ2h0OiAnc2l6ZXMnLFxuICBmbGV4QmFzaXM6ICdzaXplcycsXG4gIHNpemU6ICdzaXplcycsXG4gIC8vIHN2Z1xuICBmaWxsOiAnY29sb3JzJyxcbiAgc3Ryb2tlOiAnY29sb3JzJ1xufTtcblxudmFyIHBvc2l0aXZlT3JOZWdhdGl2ZSA9IGZ1bmN0aW9uIHBvc2l0aXZlT3JOZWdhdGl2ZShzY2FsZSwgdmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ251bWJlcicgfHwgdmFsdWUgPj0gMCkge1xuICAgIHJldHVybiBnZXQoc2NhbGUsIHZhbHVlLCB2YWx1ZSk7XG4gIH1cblxuICB2YXIgYWJzb2x1dGUgPSBNYXRoLmFicyh2YWx1ZSk7XG4gIHZhciBuID0gZ2V0KHNjYWxlLCBhYnNvbHV0ZSwgYWJzb2x1dGUpO1xuICBpZiAodHlwZW9mIG4gPT09ICdzdHJpbmcnKSByZXR1cm4gJy0nICsgbjtcbiAgcmV0dXJuIG4gKiAtMTtcbn07XG5cbnZhciB0cmFuc2Zvcm1zID0gWydtYXJnaW4nLCAnbWFyZ2luVG9wJywgJ21hcmdpblJpZ2h0JywgJ21hcmdpbkJvdHRvbScsICdtYXJnaW5MZWZ0JywgJ21hcmdpblgnLCAnbWFyZ2luWScsICd0b3AnLCAnYm90dG9tJywgJ2xlZnQnLCAncmlnaHQnXS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgY3Vycikge1xuICB2YXIgX2V4dGVuZHMyO1xuXG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgYWNjLCAoX2V4dGVuZHMyID0ge30sIF9leHRlbmRzMltjdXJyXSA9IHBvc2l0aXZlT3JOZWdhdGl2ZSwgX2V4dGVuZHMyKSk7XG59LCB7fSk7XG5leHBvcnQgdmFyIHJlc3BvbnNpdmUgPSBmdW5jdGlvbiByZXNwb25zaXZlKHN0eWxlcykge1xuICByZXR1cm4gZnVuY3Rpb24gKHRoZW1lKSB7XG4gICAgdmFyIG5leHQgPSB7fTtcbiAgICB2YXIgYnJlYWtwb2ludHMgPSBnZXQodGhlbWUsICdicmVha3BvaW50cycsIGRlZmF1bHRCcmVha3BvaW50cyk7XG4gICAgdmFyIG1lZGlhUXVlcmllcyA9IFtudWxsXS5jb25jYXQoYnJlYWtwb2ludHMubWFwKGZ1bmN0aW9uIChuKSB7XG4gICAgICByZXR1cm4gXCJAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBcIiArIG4gKyBcIilcIjtcbiAgICB9KSk7XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc3R5bGVzKSB7XG4gICAgICB2YXIgdmFsdWUgPSB0eXBlb2Ygc3R5bGVzW2tleV0gPT09ICdmdW5jdGlvbicgPyBzdHlsZXNba2V5XSh0aGVtZSkgOiBzdHlsZXNba2V5XTtcbiAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSBjb250aW51ZTtcblxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICBuZXh0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsdWUuc2xpY2UoMCwgbWVkaWFRdWVyaWVzLmxlbmd0aCkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIG1lZGlhID0gbWVkaWFRdWVyaWVzW2ldO1xuXG4gICAgICAgIGlmICghbWVkaWEpIHtcbiAgICAgICAgICBuZXh0W2tleV0gPSB2YWx1ZVtpXTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5leHRbbWVkaWFdID0gbmV4dFttZWRpYV0gfHwge307XG4gICAgICAgIGlmICh2YWx1ZVtpXSA9PSBudWxsKSBjb250aW51ZTtcbiAgICAgICAgbmV4dFttZWRpYV1ba2V5XSA9IHZhbHVlW2ldO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXh0O1xuICB9O1xufTtcbmV4cG9ydCB2YXIgY3NzID0gZnVuY3Rpb24gY3NzKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwcm9wcykge1xuICAgIGlmIChwcm9wcyA9PT0gdm9pZCAwKSB7XG4gICAgICBwcm9wcyA9IHt9O1xuICAgIH1cblxuICAgIHZhciB0aGVtZSA9IF9leHRlbmRzKHt9LCBkZWZhdWx0VGhlbWUsIHt9LCBwcm9wcy50aGVtZSB8fCBwcm9wcyk7XG5cbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgdmFyIG9iaiA9IHR5cGVvZiBhcmdzID09PSAnZnVuY3Rpb24nID8gYXJncyh0aGVtZSkgOiBhcmdzO1xuICAgIHZhciBzdHlsZXMgPSByZXNwb25zaXZlKG9iaikodGhlbWUpO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHN0eWxlcykge1xuICAgICAgdmFyIHggPSBzdHlsZXNba2V5XTtcbiAgICAgIHZhciB2YWwgPSB0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJyA/IHgodGhlbWUpIDogeDtcblxuICAgICAgaWYgKGtleSA9PT0gJ3ZhcmlhbnQnKSB7XG4gICAgICAgIHZhciB2YXJpYW50ID0gY3NzKGdldCh0aGVtZSwgdmFsKSkodGhlbWUpO1xuICAgICAgICByZXN1bHQgPSBfZXh0ZW5kcyh7fSwgcmVzdWx0LCB7fSwgdmFyaWFudCk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodmFsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJlc3VsdFtrZXldID0gY3NzKHZhbCkodGhlbWUpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHByb3AgPSBnZXQoYWxpYXNlcywga2V5LCBrZXkpO1xuICAgICAgdmFyIHNjYWxlTmFtZSA9IGdldChzY2FsZXMsIHByb3ApO1xuICAgICAgdmFyIHNjYWxlID0gZ2V0KHRoZW1lLCBzY2FsZU5hbWUsIGdldCh0aGVtZSwgcHJvcCwge30pKTtcbiAgICAgIHZhciB0cmFuc2Zvcm0gPSBnZXQodHJhbnNmb3JtcywgcHJvcCwgZ2V0KTtcbiAgICAgIHZhciB2YWx1ZSA9IHRyYW5zZm9ybShzY2FsZSwgdmFsLCB2YWwpO1xuXG4gICAgICBpZiAobXVsdGlwbGVzW3Byb3BdKSB7XG4gICAgICAgIHZhciBkaXJzID0gbXVsdGlwbGVzW3Byb3BdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGlycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHJlc3VsdFtkaXJzW2ldXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IGNzcztcbiIsImltcG9ydCB7IHN5c3RlbSB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL2NvcmUnO1xudmFyIGNvbmZpZyA9IHtcbiAgYWxpZ25JdGVtczogdHJ1ZSxcbiAgYWxpZ25Db250ZW50OiB0cnVlLFxuICBqdXN0aWZ5SXRlbXM6IHRydWUsXG4gIGp1c3RpZnlDb250ZW50OiB0cnVlLFxuICBmbGV4V3JhcDogdHJ1ZSxcbiAgZmxleERpcmVjdGlvbjogdHJ1ZSxcbiAgLy8gaXRlbVxuICBmbGV4OiB0cnVlLFxuICBmbGV4R3JvdzogdHJ1ZSxcbiAgZmxleFNocmluazogdHJ1ZSxcbiAgZmxleEJhc2lzOiB0cnVlLFxuICBqdXN0aWZ5U2VsZjogdHJ1ZSxcbiAgYWxpZ25TZWxmOiB0cnVlLFxuICBvcmRlcjogdHJ1ZVxufTtcbmV4cG9ydCB2YXIgZmxleGJveCA9IHN5c3RlbShjb25maWcpO1xuZXhwb3J0IGRlZmF1bHQgZmxleGJveDtcbiIsImltcG9ydCB7IHN5c3RlbSB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL2NvcmUnO1xudmFyIGRlZmF1bHRzID0ge1xuICBzcGFjZTogWzAsIDQsIDgsIDE2LCAzMiwgNjQsIDEyOCwgMjU2LCA1MTJdXG59O1xudmFyIGNvbmZpZyA9IHtcbiAgZ3JpZEdhcDoge1xuICAgIHByb3BlcnR5OiAnZ3JpZEdhcCcsXG4gICAgc2NhbGU6ICdzcGFjZScsXG4gICAgZGVmYXVsdFNjYWxlOiBkZWZhdWx0cy5zcGFjZVxuICB9LFxuICBncmlkQ29sdW1uR2FwOiB7XG4gICAgcHJvcGVydHk6ICdncmlkQ29sdW1uR2FwJyxcbiAgICBzY2FsZTogJ3NwYWNlJyxcbiAgICBkZWZhdWx0U2NhbGU6IGRlZmF1bHRzLnNwYWNlXG4gIH0sXG4gIGdyaWRSb3dHYXA6IHtcbiAgICBwcm9wZXJ0eTogJ2dyaWRSb3dHYXAnLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfSxcbiAgZ3JpZENvbHVtbjogdHJ1ZSxcbiAgZ3JpZFJvdzogdHJ1ZSxcbiAgZ3JpZEF1dG9GbG93OiB0cnVlLFxuICBncmlkQXV0b0NvbHVtbnM6IHRydWUsXG4gIGdyaWRBdXRvUm93czogdHJ1ZSxcbiAgZ3JpZFRlbXBsYXRlQ29sdW1uczogdHJ1ZSxcbiAgZ3JpZFRlbXBsYXRlUm93czogdHJ1ZSxcbiAgZ3JpZFRlbXBsYXRlQXJlYXM6IHRydWUsXG4gIGdyaWRBcmVhOiB0cnVlXG59O1xuZXhwb3J0IHZhciBncmlkID0gc3lzdGVtKGNvbmZpZyk7XG5leHBvcnQgZGVmYXVsdCBncmlkO1xuIiwiaW1wb3J0IHsgc3lzdGVtLCBnZXQgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9jb3JlJztcblxudmFyIGlzTnVtYmVyID0gZnVuY3Rpb24gaXNOdW1iZXIobikge1xuICByZXR1cm4gdHlwZW9mIG4gPT09ICdudW1iZXInICYmICFpc05hTihuKTtcbn07XG5cbnZhciBnZXRXaWR0aCA9IGZ1bmN0aW9uIGdldFdpZHRoKG4sIHNjYWxlKSB7XG4gIHJldHVybiBnZXQoc2NhbGUsIG4sICFpc051bWJlcihuKSB8fCBuID4gMSA/IG4gOiBuICogMTAwICsgJyUnKTtcbn07XG5cbnZhciBjb25maWcgPSB7XG4gIHdpZHRoOiB7XG4gICAgcHJvcGVydHk6ICd3aWR0aCcsXG4gICAgc2NhbGU6ICdzaXplcycsXG4gICAgdHJhbnNmb3JtOiBnZXRXaWR0aFxuICB9LFxuICBoZWlnaHQ6IHtcbiAgICBwcm9wZXJ0eTogJ2hlaWdodCcsXG4gICAgc2NhbGU6ICdzaXplcydcbiAgfSxcbiAgbWluV2lkdGg6IHtcbiAgICBwcm9wZXJ0eTogJ21pbldpZHRoJyxcbiAgICBzY2FsZTogJ3NpemVzJ1xuICB9LFxuICBtaW5IZWlnaHQ6IHtcbiAgICBwcm9wZXJ0eTogJ21pbkhlaWdodCcsXG4gICAgc2NhbGU6ICdzaXplcydcbiAgfSxcbiAgbWF4V2lkdGg6IHtcbiAgICBwcm9wZXJ0eTogJ21heFdpZHRoJyxcbiAgICBzY2FsZTogJ3NpemVzJ1xuICB9LFxuICBtYXhIZWlnaHQ6IHtcbiAgICBwcm9wZXJ0eTogJ21heEhlaWdodCcsXG4gICAgc2NhbGU6ICdzaXplcydcbiAgfSxcbiAgc2l6ZToge1xuICAgIHByb3BlcnRpZXM6IFsnd2lkdGgnLCAnaGVpZ2h0J10sXG4gICAgc2NhbGU6ICdzaXplcydcbiAgfSxcbiAgb3ZlcmZsb3c6IHRydWUsXG4gIG92ZXJmbG93WDogdHJ1ZSxcbiAgb3ZlcmZsb3dZOiB0cnVlLFxuICBkaXNwbGF5OiB0cnVlLFxuICB2ZXJ0aWNhbEFsaWduOiB0cnVlXG59O1xuZXhwb3J0IHZhciBsYXlvdXQgPSBzeXN0ZW0oY29uZmlnKTtcbmV4cG9ydCBkZWZhdWx0IGxheW91dDtcbiIsImltcG9ydCB7IHN5c3RlbSB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL2NvcmUnO1xudmFyIGRlZmF1bHRzID0ge1xuICBzcGFjZTogWzAsIDQsIDgsIDE2LCAzMiwgNjQsIDEyOCwgMjU2LCA1MTJdXG59O1xudmFyIGNvbmZpZyA9IHtcbiAgcG9zaXRpb246IHRydWUsXG4gIHpJbmRleDoge1xuICAgIHByb3BlcnR5OiAnekluZGV4JyxcbiAgICBzY2FsZTogJ3pJbmRpY2VzJ1xuICB9LFxuICB0b3A6IHtcbiAgICBwcm9wZXJ0eTogJ3RvcCcsXG4gICAgc2NhbGU6ICdzcGFjZScsXG4gICAgZGVmYXVsdFNjYWxlOiBkZWZhdWx0cy5zcGFjZVxuICB9LFxuICByaWdodDoge1xuICAgIHByb3BlcnR5OiAncmlnaHQnLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfSxcbiAgYm90dG9tOiB7XG4gICAgcHJvcGVydHk6ICdib3R0b20nLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfSxcbiAgbGVmdDoge1xuICAgIHByb3BlcnR5OiAnbGVmdCcsXG4gICAgc2NhbGU6ICdzcGFjZScsXG4gICAgZGVmYXVsdFNjYWxlOiBkZWZhdWx0cy5zcGFjZVxuICB9XG59O1xuZXhwb3J0IHZhciBwb3NpdGlvbiA9IHN5c3RlbShjb25maWcpO1xuZXhwb3J0IGRlZmF1bHQgcG9zaXRpb247XG4iLCJpbXBvcnQgeyBzeXN0ZW0gfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9jb3JlJztcbmV4cG9ydCB2YXIgc2hhZG93ID0gc3lzdGVtKHtcbiAgYm94U2hhZG93OiB7XG4gICAgcHJvcGVydHk6ICdib3hTaGFkb3cnLFxuICAgIHNjYWxlOiAnc2hhZG93cydcbiAgfSxcbiAgdGV4dFNoYWRvdzoge1xuICAgIHByb3BlcnR5OiAndGV4dFNoYWRvdycsXG4gICAgc2NhbGU6ICdzaGFkb3dzJ1xuICB9XG59KTtcbmV4cG9ydCBkZWZhdWx0IHNoYWRvdztcbiIsImltcG9ydCBtZW1vaXplIGZyb20gJ0BlbW90aW9uL21lbW9pemUnO1xuaW1wb3J0IGlzUHJvcFZhbGlkIGZyb20gJ0BlbW90aW9uL2lzLXByb3AtdmFsaWQnO1xuaW1wb3J0IHsgY29tcG9zZSwgc3BhY2UsIHR5cG9ncmFwaHksIGNvbG9yLCBsYXlvdXQsIGZsZXhib3gsIGJvcmRlciwgYmFja2dyb3VuZCwgcG9zaXRpb24sIGdyaWQsIHNoYWRvdywgYnV0dG9uU3R5bGUsIHRleHRTdHlsZSwgY29sb3JTdHlsZSB9IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xudmFyIGFsbCA9IGNvbXBvc2Uoc3BhY2UsIHR5cG9ncmFwaHksIGNvbG9yLCBsYXlvdXQsIGZsZXhib3gsIGJvcmRlciwgYmFja2dyb3VuZCwgcG9zaXRpb24sIGdyaWQsIHNoYWRvdywgYnV0dG9uU3R5bGUsIHRleHRTdHlsZSwgY29sb3JTdHlsZSk7XG5leHBvcnQgdmFyIHByb3BzID0gYWxsLnByb3BOYW1lcztcbmV4cG9ydCB2YXIgY3JlYXRlU2hvdWxkRm9yd2FyZFByb3AgPSBmdW5jdGlvbiBjcmVhdGVTaG91bGRGb3J3YXJkUHJvcChwcm9wcykge1xuICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKFwiXihcIiArIHByb3BzLmpvaW4oJ3wnKSArIFwiKSRcIik7XG4gIHJldHVybiBtZW1vaXplKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgcmV0dXJuIGlzUHJvcFZhbGlkKHByb3ApICYmICFyZWdleC50ZXN0KHByb3ApO1xuICB9KTtcbn07XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTaG91bGRGb3J3YXJkUHJvcChwcm9wcyk7XG4iLCJmdW5jdGlvbiBtZW1vaXplKGZuKSB7XG4gIHZhciBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHJldHVybiBmdW5jdGlvbiAoYXJnKSB7XG4gICAgaWYgKGNhY2hlW2FyZ10gPT09IHVuZGVmaW5lZCkgY2FjaGVbYXJnXSA9IGZuKGFyZyk7XG4gICAgcmV0dXJuIGNhY2hlW2FyZ107XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW9pemU7XG4iLCJpbXBvcnQgeyBnZXQsIHN5c3RlbSwgY29tcG9zZSB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL2NvcmUnO1xudmFyIGRlZmF1bHRzID0ge1xuICBzcGFjZTogWzAsIDQsIDgsIDE2LCAzMiwgNjQsIDEyOCwgMjU2LCA1MTJdXG59O1xuXG52YXIgaXNOdW1iZXIgPSBmdW5jdGlvbiBpc051bWJlcihuKSB7XG4gIHJldHVybiB0eXBlb2YgbiA9PT0gJ251bWJlcicgJiYgIWlzTmFOKG4pO1xufTtcblxudmFyIGdldE1hcmdpbiA9IGZ1bmN0aW9uIGdldE1hcmdpbihuLCBzY2FsZSkge1xuICBpZiAoIWlzTnVtYmVyKG4pKSB7XG4gICAgcmV0dXJuIGdldChzY2FsZSwgbiwgbik7XG4gIH1cblxuICB2YXIgaXNOZWdhdGl2ZSA9IG4gPCAwO1xuICB2YXIgYWJzb2x1dGUgPSBNYXRoLmFicyhuKTtcbiAgdmFyIHZhbHVlID0gZ2V0KHNjYWxlLCBhYnNvbHV0ZSwgYWJzb2x1dGUpO1xuXG4gIGlmICghaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgcmV0dXJuIGlzTmVnYXRpdmUgPyAnLScgKyB2YWx1ZSA6IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlICogKGlzTmVnYXRpdmUgPyAtMSA6IDEpO1xufTtcblxudmFyIGNvbmZpZ3MgPSB7fTtcbmNvbmZpZ3MubWFyZ2luID0ge1xuICBtYXJnaW46IHtcbiAgICBwcm9wZXJ0eTogJ21hcmdpbicsXG4gICAgc2NhbGU6ICdzcGFjZScsXG4gICAgdHJhbnNmb3JtOiBnZXRNYXJnaW4sXG4gICAgZGVmYXVsdFNjYWxlOiBkZWZhdWx0cy5zcGFjZVxuICB9LFxuICBtYXJnaW5Ub3A6IHtcbiAgICBwcm9wZXJ0eTogJ21hcmdpblRvcCcsXG4gICAgc2NhbGU6ICdzcGFjZScsXG4gICAgdHJhbnNmb3JtOiBnZXRNYXJnaW4sXG4gICAgZGVmYXVsdFNjYWxlOiBkZWZhdWx0cy5zcGFjZVxuICB9LFxuICBtYXJnaW5SaWdodDoge1xuICAgIHByb3BlcnR5OiAnbWFyZ2luUmlnaHQnLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIHRyYW5zZm9ybTogZ2V0TWFyZ2luLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfSxcbiAgbWFyZ2luQm90dG9tOiB7XG4gICAgcHJvcGVydHk6ICdtYXJnaW5Cb3R0b20nLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIHRyYW5zZm9ybTogZ2V0TWFyZ2luLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfSxcbiAgbWFyZ2luTGVmdDoge1xuICAgIHByb3BlcnR5OiAnbWFyZ2luTGVmdCcsXG4gICAgc2NhbGU6ICdzcGFjZScsXG4gICAgdHJhbnNmb3JtOiBnZXRNYXJnaW4sXG4gICAgZGVmYXVsdFNjYWxlOiBkZWZhdWx0cy5zcGFjZVxuICB9LFxuICBtYXJnaW5YOiB7XG4gICAgcHJvcGVydGllczogWydtYXJnaW5MZWZ0JywgJ21hcmdpblJpZ2h0J10sXG4gICAgc2NhbGU6ICdzcGFjZScsXG4gICAgdHJhbnNmb3JtOiBnZXRNYXJnaW4sXG4gICAgZGVmYXVsdFNjYWxlOiBkZWZhdWx0cy5zcGFjZVxuICB9LFxuICBtYXJnaW5ZOiB7XG4gICAgcHJvcGVydGllczogWydtYXJnaW5Ub3AnLCAnbWFyZ2luQm90dG9tJ10sXG4gICAgc2NhbGU6ICdzcGFjZScsXG4gICAgdHJhbnNmb3JtOiBnZXRNYXJnaW4sXG4gICAgZGVmYXVsdFNjYWxlOiBkZWZhdWx0cy5zcGFjZVxuICB9XG59O1xuY29uZmlncy5tYXJnaW4ubSA9IGNvbmZpZ3MubWFyZ2luLm1hcmdpbjtcbmNvbmZpZ3MubWFyZ2luLm10ID0gY29uZmlncy5tYXJnaW4ubWFyZ2luVG9wO1xuY29uZmlncy5tYXJnaW4ubXIgPSBjb25maWdzLm1hcmdpbi5tYXJnaW5SaWdodDtcbmNvbmZpZ3MubWFyZ2luLm1iID0gY29uZmlncy5tYXJnaW4ubWFyZ2luQm90dG9tO1xuY29uZmlncy5tYXJnaW4ubWwgPSBjb25maWdzLm1hcmdpbi5tYXJnaW5MZWZ0O1xuY29uZmlncy5tYXJnaW4ubXggPSBjb25maWdzLm1hcmdpbi5tYXJnaW5YO1xuY29uZmlncy5tYXJnaW4ubXkgPSBjb25maWdzLm1hcmdpbi5tYXJnaW5ZO1xuY29uZmlncy5wYWRkaW5nID0ge1xuICBwYWRkaW5nOiB7XG4gICAgcHJvcGVydHk6ICdwYWRkaW5nJyxcbiAgICBzY2FsZTogJ3NwYWNlJyxcbiAgICBkZWZhdWx0U2NhbGU6IGRlZmF1bHRzLnNwYWNlXG4gIH0sXG4gIHBhZGRpbmdUb3A6IHtcbiAgICBwcm9wZXJ0eTogJ3BhZGRpbmdUb3AnLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfSxcbiAgcGFkZGluZ1JpZ2h0OiB7XG4gICAgcHJvcGVydHk6ICdwYWRkaW5nUmlnaHQnLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfSxcbiAgcGFkZGluZ0JvdHRvbToge1xuICAgIHByb3BlcnR5OiAncGFkZGluZ0JvdHRvbScsXG4gICAgc2NhbGU6ICdzcGFjZScsXG4gICAgZGVmYXVsdFNjYWxlOiBkZWZhdWx0cy5zcGFjZVxuICB9LFxuICBwYWRkaW5nTGVmdDoge1xuICAgIHByb3BlcnR5OiAncGFkZGluZ0xlZnQnLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfSxcbiAgcGFkZGluZ1g6IHtcbiAgICBwcm9wZXJ0aWVzOiBbJ3BhZGRpbmdMZWZ0JywgJ3BhZGRpbmdSaWdodCddLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfSxcbiAgcGFkZGluZ1k6IHtcbiAgICBwcm9wZXJ0aWVzOiBbJ3BhZGRpbmdUb3AnLCAncGFkZGluZ0JvdHRvbSddLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfVxufTtcbmNvbmZpZ3MucGFkZGluZy5wID0gY29uZmlncy5wYWRkaW5nLnBhZGRpbmc7XG5jb25maWdzLnBhZGRpbmcucHQgPSBjb25maWdzLnBhZGRpbmcucGFkZGluZ1RvcDtcbmNvbmZpZ3MucGFkZGluZy5wciA9IGNvbmZpZ3MucGFkZGluZy5wYWRkaW5nUmlnaHQ7XG5jb25maWdzLnBhZGRpbmcucGIgPSBjb25maWdzLnBhZGRpbmcucGFkZGluZ0JvdHRvbTtcbmNvbmZpZ3MucGFkZGluZy5wbCA9IGNvbmZpZ3MucGFkZGluZy5wYWRkaW5nTGVmdDtcbmNvbmZpZ3MucGFkZGluZy5weCA9IGNvbmZpZ3MucGFkZGluZy5wYWRkaW5nWDtcbmNvbmZpZ3MucGFkZGluZy5weSA9IGNvbmZpZ3MucGFkZGluZy5wYWRkaW5nWTtcbmV4cG9ydCB2YXIgbWFyZ2luID0gc3lzdGVtKGNvbmZpZ3MubWFyZ2luKTtcbmV4cG9ydCB2YXIgcGFkZGluZyA9IHN5c3RlbShjb25maWdzLnBhZGRpbmcpO1xuZXhwb3J0IHZhciBzcGFjZSA9IGNvbXBvc2UobWFyZ2luLCBwYWRkaW5nKTtcbmV4cG9ydCBkZWZhdWx0IHNwYWNlO1xuIiwiaW1wb3J0IHsgc3lzdGVtIH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vY29yZSc7XG52YXIgZGVmYXVsdHMgPSB7XG4gIGZvbnRTaXplczogWzEyLCAxNCwgMTYsIDIwLCAyNCwgMzIsIDQ4LCA2NCwgNzJdXG59O1xudmFyIGNvbmZpZyA9IHtcbiAgZm9udEZhbWlseToge1xuICAgIHByb3BlcnR5OiAnZm9udEZhbWlseScsXG4gICAgc2NhbGU6ICdmb250cydcbiAgfSxcbiAgZm9udFNpemU6IHtcbiAgICBwcm9wZXJ0eTogJ2ZvbnRTaXplJyxcbiAgICBzY2FsZTogJ2ZvbnRTaXplcycsXG4gICAgZGVmYXVsdFNjYWxlOiBkZWZhdWx0cy5mb250U2l6ZXNcbiAgfSxcbiAgZm9udFdlaWdodDoge1xuICAgIHByb3BlcnR5OiAnZm9udFdlaWdodCcsXG4gICAgc2NhbGU6ICdmb250V2VpZ2h0cydcbiAgfSxcbiAgbGluZUhlaWdodDoge1xuICAgIHByb3BlcnR5OiAnbGluZUhlaWdodCcsXG4gICAgc2NhbGU6ICdsaW5lSGVpZ2h0cydcbiAgfSxcbiAgbGV0dGVyU3BhY2luZzoge1xuICAgIHByb3BlcnR5OiAnbGV0dGVyU3BhY2luZycsXG4gICAgc2NhbGU6ICdsZXR0ZXJTcGFjaW5ncydcbiAgfSxcbiAgdGV4dEFsaWduOiB0cnVlLFxuICBmb250U3R5bGU6IHRydWVcbn07XG5leHBvcnQgdmFyIHR5cG9ncmFwaHkgPSBzeXN0ZW0oY29uZmlnKTtcbmV4cG9ydCBkZWZhdWx0IHR5cG9ncmFwaHk7XG4iLCJpbXBvcnQgeyBnZXQsIGNyZWF0ZVBhcnNlciB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL2NvcmUnO1xuaW1wb3J0IGNzcyBmcm9tICdAc3R5bGVkLXN5c3RlbS9jc3MnO1xuZXhwb3J0IHZhciB2YXJpYW50ID0gZnVuY3Rpb24gdmFyaWFudChfcmVmKSB7XG4gIHZhciBfY29uZmlnO1xuXG4gIHZhciBzY2FsZSA9IF9yZWYuc2NhbGUsXG4gICAgICBfcmVmJHByb3AgPSBfcmVmLnByb3AsXG4gICAgICBwcm9wID0gX3JlZiRwcm9wID09PSB2b2lkIDAgPyAndmFyaWFudCcgOiBfcmVmJHByb3AsXG4gICAgICBfcmVmJHZhcmlhbnRzID0gX3JlZi52YXJpYW50cyxcbiAgICAgIHZhcmlhbnRzID0gX3JlZiR2YXJpYW50cyA9PT0gdm9pZCAwID8ge30gOiBfcmVmJHZhcmlhbnRzLFxuICAgICAga2V5ID0gX3JlZi5rZXk7XG4gIHZhciBzeDtcblxuICBpZiAoT2JqZWN0LmtleXModmFyaWFudHMpLmxlbmd0aCkge1xuICAgIHN4ID0gZnVuY3Rpb24gc3godmFsdWUsIHNjYWxlLCBwcm9wcykge1xuICAgICAgcmV0dXJuIGNzcyhnZXQoc2NhbGUsIHZhbHVlLCBudWxsKSkocHJvcHMudGhlbWUpO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgc3ggPSBmdW5jdGlvbiBzeCh2YWx1ZSwgc2NhbGUpIHtcbiAgICAgIHJldHVybiBnZXQoc2NhbGUsIHZhbHVlLCBudWxsKTtcbiAgICB9O1xuICB9XG5cbiAgc3guc2NhbGUgPSBzY2FsZSB8fCBrZXk7XG4gIHN4LmRlZmF1bHRzID0gdmFyaWFudHM7XG4gIHZhciBjb25maWcgPSAoX2NvbmZpZyA9IHt9LCBfY29uZmlnW3Byb3BdID0gc3gsIF9jb25maWcpO1xuICB2YXIgcGFyc2VyID0gY3JlYXRlUGFyc2VyKGNvbmZpZyk7XG4gIHJldHVybiBwYXJzZXI7XG59O1xuZXhwb3J0IGRlZmF1bHQgdmFyaWFudDtcbmV4cG9ydCB2YXIgYnV0dG9uU3R5bGUgPSB2YXJpYW50KHtcbiAga2V5OiAnYnV0dG9ucydcbn0pO1xuZXhwb3J0IHZhciB0ZXh0U3R5bGUgPSB2YXJpYW50KHtcbiAga2V5OiAndGV4dFN0eWxlcycsXG4gIHByb3A6ICd0ZXh0U3R5bGUnXG59KTtcbmV4cG9ydCB2YXIgY29sb3JTdHlsZSA9IHZhcmlhbnQoe1xuICBrZXk6ICdjb2xvclN0eWxlcycsXG4gIHByb3A6ICdjb2xvcnMnXG59KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIHVzZVRoZW1lVUksIG1lcmdlLCBDb250ZXh0IH0gZnJvbSAnQHRoZW1lLXVpL2NvcmUnO1xuaW1wb3J0IHsgR2xvYmFsLCBUaGVtZUNvbnRleHQgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCB7IGNzcywgZ2V0IH0gZnJvbSAnQHRoZW1lLXVpL2Nzcyc7XG5cbnZhciB0b1Zhck5hbWUgPSBmdW5jdGlvbiAoa2V5KSB7IHJldHVybiAoXCItLXRoZW1lLXVpLVwiICsga2V5KTsgfTtcblxudmFyIHRvVmFyVmFsdWUgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkgeyByZXR1cm4gKFwidmFyKFwiICsgKHRvVmFyTmFtZShrZXkpKSArIFwiLCBcIiArIHZhbHVlICsgXCIpXCIpOyB9O1xuXG52YXIgam9pbiA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICByZXR1cm4gYXJncy5maWx0ZXIoQm9vbGVhbikuam9pbignLScpO1xufTtcblxudmFyIG51bWJlclNjYWxlcyA9IHtcbiAgZm9udFdlaWdodHM6IHRydWUsXG4gIGxpbmVIZWlnaHRzOiB0cnVlXG59O1xudmFyIHJlc2VydmVkS2V5cyA9IHtcbiAgdXNlQ3VzdG9tUHJvcGVydGllczogdHJ1ZSxcbiAgaW5pdGlhbENvbG9yTW9kZU5hbWU6IHRydWUsXG4gIGluaXRpYWxDb2xvck1vZGU6IHRydWVcbn07XG5cbnZhciB0b1BpeGVsID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ251bWJlcicpIHsgcmV0dXJuIHZhbHVlOyB9XG4gIGlmIChudW1iZXJTY2FsZXNba2V5XSkgeyByZXR1cm4gdmFsdWU7IH1cbiAgcmV0dXJuIHZhbHVlICsgJ3B4Jztcbn07IC8vIGNvbnZlcnQgdGhlbWUgdmFsdWVzIHRvIGN1c3RvbSBwcm9wZXJ0aWVzXG5cblxudmFyIHRvQ3VzdG9tUHJvcGVydGllcyA9IGZ1bmN0aW9uIChvYmosIHBhcmVudCwgdGhlbWVLZXkpIHtcbiAgdmFyIG5leHQgPSBBcnJheS5pc0FycmF5KG9iaikgPyBbXSA6IHt9O1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICB2YXIgdmFsdWUgPSBvYmpba2V5XTtcbiAgICB2YXIgbmFtZSA9IGpvaW4ocGFyZW50LCBrZXkpO1xuXG4gICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG5leHRba2V5XSA9IHRvQ3VzdG9tUHJvcGVydGllcyh2YWx1ZSwgbmFtZSwga2V5KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChyZXNlcnZlZEtleXNba2V5XSkge1xuICAgICAgbmV4dFtrZXldID0gdmFsdWU7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB2YXIgdmFsID0gdG9QaXhlbCh0aGVtZUtleSB8fCBrZXksIHZhbHVlKTtcbiAgICBuZXh0W2tleV0gPSB0b1ZhclZhbHVlKG5hbWUsIHZhbCk7XG4gIH1cblxuICByZXR1cm4gbmV4dDtcbn07XG52YXIgb2JqZWN0VG9WYXJzID0gZnVuY3Rpb24gKHBhcmVudCwgb2JqKSB7XG4gIHZhciB2YXJzID0ge307XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChrZXkgPT09ICdtb2RlcycpIHsgY29udGludWU7IH1cbiAgICB2YXIgbmFtZSA9IGpvaW4ocGFyZW50LCBrZXkpO1xuICAgIHZhciB2YWx1ZSA9IG9ialtrZXldO1xuXG4gICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHZhcnMgPSBPYmplY3QuYXNzaWduKHt9LCB2YXJzLFxuICAgICAgICBvYmplY3RUb1ZhcnMobmFtZSwgdmFsdWUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyc1t0b1Zhck5hbWUobmFtZSldID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZhcnM7XG59OyAvLyBjcmVhdGUgYm9keSBzdHlsZXMgZm9yIGNvbG9yIG1vZGVzXG5cbnZhciBjcmVhdGVDb2xvclN0eWxlcyA9IGZ1bmN0aW9uICh0aGVtZSkge1xuICBpZiAoIHRoZW1lID09PSB2b2lkIDAgKSB0aGVtZSA9IHt9O1xuXG4gIGlmICghdGhlbWUuY29sb3JzIHx8IHRoZW1lLnVzZUJvZHlTdHlsZXMgPT09IGZhbHNlKSB7IHJldHVybiB7fTsgfVxuXG4gIGlmICh0aGVtZS51c2VDdXN0b21Qcm9wZXJ0aWVzID09PSBmYWxzZSB8fCAhdGhlbWUuY29sb3JzLm1vZGVzKSB7XG4gICAgcmV0dXJuIGNzcyh7XG4gICAgICBib2R5OiB7XG4gICAgICAgIGNvbG9yOiAndGV4dCcsXG4gICAgICAgIGJnOiAnYmFja2dyb3VuZCdcbiAgICAgIH1cbiAgICB9KSh0aGVtZSk7XG4gIH1cblxuICB2YXIgY29sb3JzID0gdGhlbWUucmF3Q29sb3JzIHx8IHRoZW1lLmNvbG9ycztcbiAgdmFyIG1vZGVzID0gY29sb3JzLm1vZGVzO1xuICB2YXIgc3R5bGVzID0gb2JqZWN0VG9WYXJzKCdjb2xvcnMnLCBjb2xvcnMpO1xuICBPYmplY3Qua2V5cyhtb2RlcykuZm9yRWFjaChmdW5jdGlvbiAobW9kZSkge1xuICAgIHZhciBrZXkgPSBcIiYudGhlbWUtdWktXCIgKyBtb2RlO1xuICAgIHN0eWxlc1trZXldID0gb2JqZWN0VG9WYXJzKCdjb2xvcnMnLCBtb2Rlc1ttb2RlXSk7XG4gIH0pO1xuICByZXR1cm4gY3NzKHtcbiAgICBib2R5OiBPYmplY3QuYXNzaWduKHt9LCBzdHlsZXMsXG4gICAgICB7Y29sb3I6ICd0ZXh0JyxcbiAgICAgIGJnOiAnYmFja2dyb3VuZCd9KVxuICB9KSh0aGVtZSk7XG59O1xuXG52YXIgU1RPUkFHRV9LRVkgPSAndGhlbWUtdWktY29sb3ItbW9kZSc7XG52YXIgc3RvcmFnZSA9IHtcbiAgZ2V0OiBmdW5jdGlvbiAoaW5pdCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFNUT1JBR0VfS0VZKSB8fCBpbml0O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUud2FybignbG9jYWxTdG9yYWdlIGlzIGRpc2FibGVkIGFuZCBjb2xvciBtb2RlIG1pZ2h0IG5vdCB3b3JrIGFzIGV4cGVjdGVkLicsICdQbGVhc2UgY2hlY2sgeW91ciBTaXRlIFNldHRpbmdzLicsIGUpO1xuICAgIH1cbiAgfSxcbiAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB0cnkge1xuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFNUT1JBR0VfS0VZLCB2YWx1ZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS53YXJuKCdsb2NhbFN0b3JhZ2UgaXMgZGlzYWJsZWQgYW5kIGNvbG9yIG1vZGUgbWlnaHQgbm90IHdvcmsgYXMgZXhwZWN0ZWQuJywgJ1BsZWFzZSBjaGVjayB5b3VyIFNpdGUgU2V0dGluZ3MuJywgZSk7XG4gICAgfVxuICB9XG59O1xuXG52YXIgZ2V0TWVkaWFRdWVyeSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGRhcmtRdWVyeSA9ICcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJztcbiAgdmFyIGxpZ2h0UXVlcnkgPSAnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBsaWdodCknO1xuICB2YXIgZGFya01RTCA9IHdpbmRvdy5tYXRjaE1lZGlhID8gd2luZG93Lm1hdGNoTWVkaWEoZGFya1F1ZXJ5KSA6IHt9O1xuICB2YXIgbGlnaHRNUUwgPSB3aW5kb3cubWF0Y2hNZWRpYSA/IHdpbmRvdy5tYXRjaE1lZGlhKGxpZ2h0UXVlcnkpIDoge307XG4gIHZhciBkYXJrID0gZGFya01RTC5tZWRpYSA9PT0gZGFya1F1ZXJ5ICYmIGRhcmtNUUwubWF0Y2hlcztcbiAgaWYgKGRhcmspIHsgcmV0dXJuICdkYXJrJzsgfVxuICB2YXIgbGlnaHQgPSBsaWdodE1RTC5tZWRpYSA9PT0gbGlnaHRRdWVyeSAmJiBsaWdodE1RTC5tYXRjaGVzO1xuICBpZiAobGlnaHQpIHsgcmV0dXJuICdsaWdodCc7IH1cbiAgcmV0dXJuICdkZWZhdWx0Jztcbn07XG5cbnZhciB1c2VDb2xvck1vZGVTdGF0ZSA9IGZ1bmN0aW9uICh0aGVtZSkge1xuICBpZiAoIHRoZW1lID09PSB2b2lkIDAgKSB0aGVtZSA9IHt9O1xuXG4gIHZhciByZWYgPSBSZWFjdC51c2VTdGF0ZSh0aGVtZS5pbml0aWFsQ29sb3JNb2RlTmFtZSB8fCAnZGVmYXVsdCcpO1xuICB2YXIgbW9kZSA9IHJlZlswXTtcbiAgdmFyIHNldE1vZGUgPSByZWZbMV07IC8vIGluaXRpYWxpemUgc3RhdGVcblxuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHZhciBzdG9yZWQgPSBzdG9yYWdlLmdldCgpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgndGhlbWUtdWktJyArIHN0b3JlZCk7XG5cbiAgICBpZiAoIXN0b3JlZCAmJiB0aGVtZS51c2VDb2xvclNjaGVtZU1lZGlhUXVlcnkpIHtcbiAgICAgIHZhciBxdWVyeSA9IGdldE1lZGlhUXVlcnkoKTtcbiAgICAgIHNldE1vZGUocXVlcnkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghc3RvcmVkIHx8IHN0b3JlZCA9PT0gbW9kZSkgeyByZXR1cm47IH1cbiAgICBzZXRNb2RlKHN0b3JlZCk7XG4gIH0sIFtdKTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIW1vZGUpIHsgcmV0dXJuOyB9XG4gICAgc3RvcmFnZS5zZXQobW9kZSk7XG4gIH0sIFttb2RlXSk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAodGhlbWUuY29sb3JzICYmIHRoZW1lLmNvbG9ycy5tb2RlcyAmJiBPYmplY3Qua2V5cyh0aGVtZS5jb2xvcnMubW9kZXMpLmluZGV4T2YodGhlbWUuaW5pdGlhbENvbG9yTW9kZU5hbWUpID4gLTEpIHtcbiAgICAgIGNvbnNvbGUud2FybignVGhlIGBpbml0aWFsQ29sb3JNb2RlTmFtZWAgdmFsdWUgc2hvdWxkIGJlIGEgdW5pcXVlIG5hbWUnICsgJyBhbmQgY2Fubm90IHJlZmVyZW5jZSBhIGtleSBpbiBgdGhlbWUuY29sb3JzLm1vZGVzYC4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gW21vZGUsIHNldE1vZGVdO1xufTtcblxudmFyIHVzZUNvbG9yTW9kZSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHJlZiA9IHVzZVRoZW1lVUkoKTtcbiAgdmFyIGNvbG9yTW9kZSA9IHJlZi5jb2xvck1vZGU7XG4gIHZhciBzZXRDb2xvck1vZGUgPSByZWYuc2V0Q29sb3JNb2RlO1xuXG4gIGlmICh0eXBlb2Ygc2V0Q29sb3JNb2RlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiW3VzZUNvbG9yTW9kZV0gcmVxdWlyZXMgdGhlIENvbG9yTW9kZVByb3ZpZGVyIGNvbXBvbmVudFwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29sb3JNb2RlLCBzZXRDb2xvck1vZGVdO1xufTtcblxudmFyIGFwcGx5Q29sb3JNb2RlID0gZnVuY3Rpb24gKHRoZW1lLCBtb2RlKSB7XG4gIGlmICghbW9kZSkgeyByZXR1cm4gdGhlbWU7IH1cbiAgdmFyIG1vZGVzID0gZ2V0KHRoZW1lLCAnY29sb3JzLm1vZGVzJywge30pO1xuICByZXR1cm4gbWVyZ2UuYWxsKHt9LCB0aGVtZSwge1xuICAgIGNvbG9yczogZ2V0KG1vZGVzLCBtb2RlLCB7fSlcbiAgfSk7XG59O1xuXG52YXIgQm9keVN0eWxlcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGpzeChHbG9iYWwsIHtcbiAgc3R5bGVzOiBmdW5jdGlvbiAodGhlbWUpIHsgcmV0dXJuIGNyZWF0ZUNvbG9yU3R5bGVzKHRoZW1lKTsgfVxufSk7IH07XG5cbnZhciBDb2xvck1vZGVQcm92aWRlciA9IGZ1bmN0aW9uIChyZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gcmVmLmNoaWxkcmVuO1xuXG4gIHZhciBvdXRlciA9IHVzZVRoZW1lVUkoKTtcbiAgdmFyIHJlZiQxID0gdXNlQ29sb3JNb2RlU3RhdGUob3V0ZXIudGhlbWUpO1xuICB2YXIgY29sb3JNb2RlID0gcmVmJDFbMF07XG4gIHZhciBzZXRDb2xvck1vZGUgPSByZWYkMVsxXTtcbiAgdmFyIHRoZW1lID0gYXBwbHlDb2xvck1vZGUob3V0ZXIudGhlbWUgfHwge30sIGNvbG9yTW9kZSk7XG4gIHZhciBlbW90aW9uVGhlbWUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGVtZSk7XG5cbiAgaWYgKHRoZW1lLnVzZUN1c3RvbVByb3BlcnRpZXMgIT09IGZhbHNlKSB7XG4gICAgZW1vdGlvblRoZW1lLmNvbG9ycyA9IHRvQ3VzdG9tUHJvcGVydGllcyhlbW90aW9uVGhlbWUuY29sb3JzLCAnY29sb3JzJyk7XG4gIH1cblxuICB2YXIgY29udGV4dCA9IE9iamVjdC5hc3NpZ24oe30sIG91dGVyLFxuICAgIHt0aGVtZTogdGhlbWUsXG4gICAgY29sb3JNb2RlOiBjb2xvck1vZGUsXG4gICAgc2V0Q29sb3JNb2RlOiBzZXRDb2xvck1vZGV9KTtcbiAgcmV0dXJuIGpzeChUaGVtZUNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogZW1vdGlvblRoZW1lXG4gIH0sIGpzeChDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IGNvbnRleHRcbiAgfSwganN4KEJvZHlTdHlsZXMsIHtcbiAgICBrZXk6ICdjb2xvci1tb2RlJ1xuICB9KSwgY2hpbGRyZW4pKTtcbn07XG52YXIgbm9mbGFzaCA9IFwiKGZ1bmN0aW9uKCkgeyB0cnkge1xcbiAgdmFyIG1vZGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUtdWktY29sb3ItbW9kZScpO1xcbiAgaWYgKCFtb2RlKSByZXR1cm5cXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgndGhlbWUtdWktJyArIG1vZGUpO1xcbn0gY2F0Y2ggKGUpIHt9IH0pKCk7XCI7XG52YXIgSW5pdGlhbGl6ZUNvbG9yTW9kZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGpzeCgnc2NyaXB0Jywge1xuICBrZXk6ICd0aGVtZS11aS1uby1mbGFzaCcsXG4gIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7XG4gICAgX19odG1sOiBub2ZsYXNoXG4gIH1cbn0pOyB9O1xuXG5leHBvcnQgeyB1c2VDb2xvck1vZGUsIENvbG9yTW9kZVByb3ZpZGVyLCBJbml0aWFsaXplQ29sb3JNb2RlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lc20uanMubWFwXG4iLCJpbXBvcnQgeyBjc3MsIGdldCB9IGZyb20gJ0B0aGVtZS11aS9jc3MnO1xuaW1wb3J0IHsgY3JlYXRlU2hvdWxkRm9yd2FyZFByb3AgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9zaG91bGQtZm9yd2FyZC1wcm9wJztcbmltcG9ydCBzcGFjZSBmcm9tICdAc3R5bGVkLXN5c3RlbS9zcGFjZSc7XG5pbXBvcnQgY29sb3IgZnJvbSAnQHN0eWxlZC1zeXN0ZW0vY29sb3InO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsga2V5ZnJhbWVzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG52YXIgc2hvdWxkRm9yd2FyZFByb3AgPSBjcmVhdGVTaG91bGRGb3J3YXJkUHJvcCgoIHNwYWNlLnByb3BOYW1lcyApLmNvbmNhdCggY29sb3IucHJvcE5hbWVzKSk7XG5cbnZhciBzeCA9IGZ1bmN0aW9uIChwcm9wcykgeyByZXR1cm4gY3NzKHByb3BzLnN4KShwcm9wcy50aGVtZSk7IH07XG5cbnZhciBiYXNlID0gZnVuY3Rpb24gKHByb3BzKSB7IHJldHVybiBjc3MocHJvcHMuX19jc3MpKHByb3BzLnRoZW1lKTsgfTtcblxudmFyIHZhcmlhbnQgPSBmdW5jdGlvbiAocmVmKSB7XG4gIHZhciB0aGVtZSA9IHJlZi50aGVtZTtcbiAgdmFyIHZhcmlhbnQgPSByZWYudmFyaWFudDtcbiAgdmFyIF9fdGhlbWVLZXkgPSByZWYuX190aGVtZUtleTsgaWYgKCBfX3RoZW1lS2V5ID09PSB2b2lkIDAgKSBfX3RoZW1lS2V5ID0gJ3ZhcmlhbnRzJztcblxuICByZXR1cm4gY3NzKGdldCh0aGVtZSwgX190aGVtZUtleSArICcuJyArIHZhcmlhbnQsIGdldCh0aGVtZSwgdmFyaWFudCkpKTtcbn07XG5cbnZhciBCb3ggPSBzdHlsZWQoJ2RpdicsIHtcbiAgc2hvdWxkRm9yd2FyZFByb3A6IHNob3VsZEZvcndhcmRQcm9wXG59KSh7XG4gIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICBtYXJnaW46IDAsXG4gIG1pbldpZHRoOiAwXG59LCBiYXNlLCB2YXJpYW50LCBzcGFjZSwgY29sb3IsIHN4LCBmdW5jdGlvbiAocHJvcHMpIHsgcmV0dXJuIHByb3BzLmNzczsgfSk7XG5cbnZhciBGbGV4ID0gc3R5bGVkKEJveCkoe1xuICBkaXNwbGF5OiAnZmxleCdcbn0pO1xuXG5mdW5jdGlvbiBvYmplY3RXaXRob3V0UHJvcGVydGllcyAob2JqLCBleGNsdWRlKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgayBpbiBvYmopIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrKSAmJiBleGNsdWRlLmluZGV4T2YoaykgPT09IC0xKSB0YXJnZXRba10gPSBvYmpba107IHJldHVybiB0YXJnZXQ7IH1cblxudmFyIHB4ID0gZnVuY3Rpb24gKG4pIHsgcmV0dXJuIHR5cGVvZiBuID09PSAnbnVtYmVyJyA/IG4gKyAncHgnIDogbjsgfTtcblxudmFyIHdpZHRoVG9Db2x1bW5zID0gZnVuY3Rpb24gKHdpZHRoKSB7IHJldHVybiBBcnJheS5pc0FycmF5KHdpZHRoKSA/IHdpZHRoLm1hcCh3aWR0aFRvQ29sdW1ucykgOiAhIXdpZHRoICYmIChcInJlcGVhdChhdXRvLWZpdCwgbWlubWF4KFwiICsgKHB4KHdpZHRoKSkgKyBcIiwgMWZyKSlcIik7IH07XG5cbnZhciBjb3VudFRvQ29sdW1ucyA9IGZ1bmN0aW9uIChuKSB7IHJldHVybiBBcnJheS5pc0FycmF5KG4pID8gbi5tYXAoY291bnRUb0NvbHVtbnMpIDogISFuICYmICh0eXBlb2YgbiA9PT0gJ251bWJlcicgPyAoXCJyZXBlYXQoXCIgKyBuICsgXCIsIDFmcilcIikgOiBuKTsgfTtcblxudmFyIEdyaWQgPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChyZWYkMSwgcmVmKSB7XG4gIHZhciB3aWR0aCA9IHJlZiQxLndpZHRoO1xuICB2YXIgY29sdW1ucyA9IHJlZiQxLmNvbHVtbnM7XG4gIHZhciBnYXAgPSByZWYkMS5nYXA7IGlmICggZ2FwID09PSB2b2lkIDAgKSBnYXAgPSAzO1xuICB2YXIgcmVzdCA9IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKCByZWYkMSwgW1wid2lkdGhcIiwgXCJjb2x1bW5zXCIsIFwiZ2FwXCJdICk7XG4gIHZhciBwcm9wcyA9IHJlc3Q7XG5cbiAgdmFyIGdyaWRUZW1wbGF0ZUNvbHVtbnMgPSAhIXdpZHRoID8gd2lkdGhUb0NvbHVtbnMod2lkdGgpIDogY291bnRUb0NvbHVtbnMoY29sdW1ucyk7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCBCb3gsIE9iamVjdC5hc3NpZ24oe30sIHsgcmVmOiByZWYgfSwgcHJvcHMsIHsgX190aGVtZUtleTogXCJncmlkc1wiLCBfX2Nzczoge1xuICAgIGRpc3BsYXk6ICdncmlkJyxcbiAgICBncmlkR2FwOiBnYXAsXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogZ3JpZFRlbXBsYXRlQ29sdW1uc1xuICB9IH0pKTtcbn0pO1xuXG52YXIgQnV0dG9uID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikgeyByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCggQm94LCBPYmplY3QuYXNzaWduKHt9LCB7IHJlZjogcmVmLCBhczogXCJidXR0b25cIiwgdmFyaWFudDogXCJwcmltYXJ5XCIgfSwgcHJvcHMsIHsgX190aGVtZUtleTogXCJidXR0b25zXCIsIF9fY3NzOiB7XG4gIGFwcGVhcmFuY2U6ICdub25lJyxcbiAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIGxpbmVIZWlnaHQ6ICdpbmhlcml0JyxcbiAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgZm9udFNpemU6ICdpbmhlcml0JyxcbiAgcHg6IDMsXG4gIHB5OiAyLFxuICBjb2xvcjogJ3doaXRlJyxcbiAgYmc6ICdwcmltYXJ5JyxcbiAgYm9yZGVyOiAwLFxuICBib3JkZXJSYWRpdXM6IDRcbn0gfSkpOyB9KTtcblxudmFyIExpbmsgPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7IHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCBCb3gsIE9iamVjdC5hc3NpZ24oe30sIHsgcmVmOiByZWYsIGFzOiBcImFcIiwgdmFyaWFudDogXCJzdHlsZXMuYVwiIH0sIHByb3BzLCB7IF9fdGhlbWVLZXk6IFwibGlua3NcIiB9KSk7IH0pO1xuXG52YXIgVGV4dCA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHsgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoIEJveCwgT2JqZWN0LmFzc2lnbih7fSwgeyByZWY6IHJlZiwgdmFyaWFudDogXCJkZWZhdWx0XCIgfSwgcHJvcHMsIHsgX190aGVtZUtleTogXCJ0ZXh0XCIgfSkpOyB9KTtcblxudmFyIEhlYWRpbmcgPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7IHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCBCb3gsIE9iamVjdC5hc3NpZ24oe30sIHsgcmVmOiByZWYsIGFzOiBcImgyXCIsIHZhcmlhbnQ6IFwiaGVhZGluZ1wiIH0sIHByb3BzLCB7IF9fdGhlbWVLZXk6IFwidGV4dFwiLCBfX2Nzczoge1xuICBmb250RmFtaWx5OiAnaGVhZGluZycsXG4gIGZvbnRXZWlnaHQ6ICdoZWFkaW5nJyxcbiAgbGluZUhlaWdodDogJ2hlYWRpbmcnXG59IH0pKTsgfSk7XG5cbnZhciBJbWFnZSA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHsgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoIEJveCwgT2JqZWN0LmFzc2lnbih7fSwgeyByZWY6IHJlZiwgYXM6IFwiaW1nXCIgfSwgcHJvcHMsIHsgX190aGVtZUtleTogXCJpbWFnZXNcIiwgX19jc3M6IE9iamVjdC5hc3NpZ24oe30sIHttYXhXaWR0aDogJzEwMCUnLFxuICBoZWlnaHQ6ICdhdXRvJ30sXG4gIHByb3BzLl9fY3NzKSB9KSk7IH0pO1xuXG52YXIgQ2FyZCA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHsgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoIEJveCwgT2JqZWN0LmFzc2lnbih7fSwgeyByZWY6IHJlZiwgdmFyaWFudDogXCJwcmltYXJ5XCIgfSwgcHJvcHMsIHsgX190aGVtZUtleTogXCJjYXJkc1wiIH0pKTsgfSk7XG5cbnZhciBMYWJlbCA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHsgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoIEJveCwgT2JqZWN0LmFzc2lnbih7fSwgeyByZWY6IHJlZiwgYXM6IFwibGFiZWxcIiwgdmFyaWFudDogXCJsYWJlbFwiIH0sIHByb3BzLCB7IF9fdGhlbWVLZXk6IFwiZm9ybXNcIiwgX19jc3M6IHtcbiAgd2lkdGg6ICcxMDAlJyxcbiAgZGlzcGxheTogJ2ZsZXgnXG59IH0pKTsgfSk7XG5cbnZhciBJbnB1dCA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHsgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoIEJveCwgT2JqZWN0LmFzc2lnbih7fSwgeyByZWY6IHJlZiwgYXM6IFwiaW5wdXRcIiwgdmFyaWFudDogXCJpbnB1dFwiIH0sIHByb3BzLCB7IF9fdGhlbWVLZXk6IFwiZm9ybXNcIiwgX19jc3M6IHtcbiAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgcDogMixcbiAgYXBwZWFyYW5jZTogJ25vbmUnLFxuICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICBsaW5lSGVpZ2h0OiAnaW5oZXJpdCcsXG4gIGJvcmRlcjogJzFweCBzb2xpZCcsXG4gIGJvcmRlclJhZGl1czogNCxcbiAgY29sb3I6ICdpbmhlcml0JyxcbiAgYmc6ICd0cmFuc3BhcmVudCdcbn0gfSkpOyB9KTtcblxuZnVuY3Rpb24gb2JqZWN0V2l0aG91dFByb3BlcnRpZXMkMSAob2JqLCBleGNsdWRlKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgayBpbiBvYmopIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrKSAmJiBleGNsdWRlLmluZGV4T2YoaykgPT09IC0xKSB0YXJnZXRba10gPSBvYmpba107IHJldHVybiB0YXJnZXQ7IH1cbnZhciBTVkcgPSAoZnVuY3Rpb24gKHJlZikge1xuICB2YXIgc2l6ZSA9IHJlZi5zaXplOyBpZiAoIHNpemUgPT09IHZvaWQgMCApIHNpemUgPSAyNDtcbiAgdmFyIHJlc3QgPSBvYmplY3RXaXRob3V0UHJvcGVydGllcyQxKCByZWYsIFtcInNpemVcIl0gKTtcbiAgdmFyIHByb3BzID0gcmVzdDtcblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCggQm94LCBPYmplY3QuYXNzaWduKHt9LCB7IGFzOiBcInN2Z1wiLCB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCB3aWR0aDogc2l6ZSArICcnLCBoZWlnaHQ6IHNpemUgKyAnJywgdmlld0JveDogXCIwIDAgMjQgMjRcIiwgZmlsbDogXCJjdXJyZW50Y29sb3JcIiB9LCBwcm9wcykpO1xufSk7XG5cbnZhciBnZXRQcm9wcyA9IGZ1bmN0aW9uICh0ZXN0KSB7IHJldHVybiBmdW5jdGlvbiAocHJvcHMpIHtcbiAgdmFyIG5leHQgPSB7fTtcblxuICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICBpZiAodGVzdChrZXkgfHwgJycpKSB7IG5leHRba2V5XSA9IHByb3BzW2tleV07IH1cbiAgfVxuXG4gIHJldHVybiBuZXh0O1xufTsgfTtcbnZhciBNUkUgPSAvXm1bdHJibHh5XT8kLztcbnZhciBnZXRNYXJnaW4gPSBnZXRQcm9wcyhmdW5jdGlvbiAoaykgeyByZXR1cm4gTVJFLnRlc3Qoayk7IH0pO1xudmFyIG9taXRNYXJnaW4gPSBnZXRQcm9wcyhmdW5jdGlvbiAoaykgeyByZXR1cm4gIU1SRS50ZXN0KGspOyB9KTtcblxudmFyIERvd25BcnJvdyA9IGZ1bmN0aW9uIChwcm9wcykgeyByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCggU1ZHLCBwcm9wcyxcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCAncGF0aCcsIHsgZDogXCJNNyAxMGw1IDUgNS01elwiIH0pXG4gICk7IH07XG5cbnZhciBTZWxlY3QgPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7IHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCBCb3gsIE9iamVjdC5hc3NpZ24oe30sIGdldE1hcmdpbihwcm9wcyksIHsgc3g6IHtcbiAgZGlzcGxheTogJ2ZsZXgnXG59IH0pLFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoIEJveCwgT2JqZWN0LmFzc2lnbih7fSwgeyByZWY6IHJlZiwgYXM6IFwic2VsZWN0XCIsIHZhcmlhbnQ6IFwic2VsZWN0XCIgfSwgb21pdE1hcmdpbihwcm9wcyksIHsgX190aGVtZUtleTogXCJmb3Jtc1wiLCBfX2Nzczoge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBwOiAyLFxuICAgIGFwcGVhcmFuY2U6ICdub25lJyxcbiAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgIGxpbmVIZWlnaHQ6ICdpbmhlcml0JyxcbiAgICBib3JkZXI6ICcxcHggc29saWQnLFxuICAgIGJvcmRlclJhZGl1czogNCxcbiAgICBjb2xvcjogJ2luaGVyaXQnLFxuICAgIGJnOiAndHJhbnNwYXJlbnQnXG4gIH0gfSkpLFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoIERvd25BcnJvdywgeyBzeDoge1xuICAgIG1sOiAtMjgsXG4gICAgYWxpZ25TZWxmOiAnY2VudGVyJyxcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZSdcbiAgfSB9KVxuICApOyB9KTtcblxudmFyIFRleHRhcmVhID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikgeyByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCggQm94LCBPYmplY3QuYXNzaWduKHt9LCB7IHJlZjogcmVmLCBhczogXCJ0ZXh0YXJlYVwiLCB2YXJpYW50OiBcInRleHRhcmVhXCIgfSwgcHJvcHMsIHsgX190aGVtZUtleTogXCJmb3Jtc1wiLCBfX2Nzczoge1xuICBkaXNwbGF5OiAnYmxvY2snLFxuICB3aWR0aDogJzEwMCUnLFxuICBwOiAyLFxuICBhcHBlYXJhbmNlOiAnbm9uZScsXG4gIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gIGxpbmVIZWlnaHQ6ICdpbmhlcml0JyxcbiAgYm9yZGVyOiAnMXB4IHNvbGlkJyxcbiAgYm9yZGVyUmFkaXVzOiA0LFxuICBjb2xvcjogJ2luaGVyaXQnLFxuICBiZzogJ3RyYW5zcGFyZW50J1xufSB9KSk7IH0pO1xuXG5mdW5jdGlvbiBvYmplY3RXaXRob3V0UHJvcGVydGllcyQyIChvYmosIGV4Y2x1ZGUpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBrIGluIG9iaikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGspICYmIGV4Y2x1ZGUuaW5kZXhPZihrKSA9PT0gLTEpIHRhcmdldFtrXSA9IG9ialtrXTsgcmV0dXJuIHRhcmdldDsgfVxuXG52YXIgUmFkaW9DaGVja2VkID0gZnVuY3Rpb24gKHByb3BzKSB7IHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCBTVkcsIHByb3BzLFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoICdwYXRoJywgeyBkOiBcIk0xMiA3Yy0yLjc2IDAtNSAyLjI0LTUgNXMyLjI0IDUgNSA1IDUtMi4yNCA1LTUtMi4yNC01LTUtNXptMC01QzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0wIDE4Yy00LjQyIDAtOC0zLjU4LTgtOHMzLjU4LTggOC04IDggMy41OCA4IDgtMy41OCA4LTggOHpcIiB9KVxuICApOyB9O1xuXG52YXIgUmFkaW9VbmNoZWNrZWQgPSBmdW5jdGlvbiAocHJvcHMpIHsgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoIFNWRywgcHJvcHMsXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudCggJ3BhdGgnLCB7IGQ6IFwiTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgMThjLTQuNDIgMC04LTMuNTgtOC04czMuNTgtOCA4LTggOCAzLjU4IDggOC0zLjU4IDgtOCA4elwiIH0pXG4gICk7IH07XG5cbnZhciBSYWRpb0ljb24gPSBmdW5jdGlvbiAocHJvcHMpIHsgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoIFJlYWN0LkZyYWdtZW50LCBudWxsLFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoIFJhZGlvQ2hlY2tlZCwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHsgX19jc3M6IHtcbiAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgJ2lucHV0OmNoZWNrZWQgfiAmJzoge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xuICAgIH1cbiAgfSB9KSksXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudCggUmFkaW9VbmNoZWNrZWQsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzLCB7IF9fY3NzOiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAnaW5wdXQ6Y2hlY2tlZCB+ICYnOiB7XG4gICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICB9XG4gIH0gfSkpXG4gICk7IH07XG5cbnZhciBSYWRpbyA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHJlZiQxLCByZWYpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHJlZiQxLmNsYXNzTmFtZTtcbiAgdmFyIHN4ID0gcmVmJDEuc3g7XG4gIHZhciB2YXJpYW50ID0gcmVmJDEudmFyaWFudDsgaWYgKCB2YXJpYW50ID09PSB2b2lkIDAgKSB2YXJpYW50ID0gJ3JhZGlvJztcbiAgdmFyIHJlc3QgPSBvYmplY3RXaXRob3V0UHJvcGVydGllcyQyKCByZWYkMSwgW1wiY2xhc3NOYW1lXCIsIFwic3hcIiwgXCJ2YXJpYW50XCJdICk7XG4gIHZhciBwcm9wcyA9IHJlc3Q7XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoIEJveCwgbnVsbCxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoIEJveCwgT2JqZWN0LmFzc2lnbih7fSwgeyByZWY6IHJlZiwgYXM6IFwiaW5wdXRcIiwgdHlwZTogXCJyYWRpb1wiIH0sIHByb3BzLCB7IHN4OiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgb3BhY2l0eTogMCxcbiAgICB6SW5kZXg6IC0xLFxuICAgIHdpZHRoOiAxLFxuICAgIGhlaWdodDogMSxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgfSB9KSksXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCBCb3gsIHsgYXM6IFJhZGlvSWNvbiwgJ2FyaWEtaGlkZGVuJzogXCJ0cnVlXCIsIF9fdGhlbWVLZXk6IFwiZm9ybXNcIiwgdmFyaWFudDogdmFyaWFudCwgY2xhc3NOYW1lOiBjbGFzc05hbWUsIHN4OiBzeCwgX19jc3M6IHtcbiAgICAvLyB0b2RvOiBzeXN0ZW0gcHJvcHM/P1xuICAgIG1yOiAyLFxuICAgIGJvcmRlclJhZGl1czogOTk5OSxcbiAgICBjb2xvcjogJ2dyYXknLFxuICAgICdpbnB1dDpjaGVja2VkIH4gJic6IHtcbiAgICAgIGNvbG9yOiAncHJpbWFyeSdcbiAgICB9LFxuICAgICdpbnB1dDpmb2N1cyB+ICYnOiB7XG4gICAgICBiZzogJ2hpZ2hsaWdodCdcbiAgICB9XG4gIH0gfSlcbiAgICApO1xufSk7XG5cbmZ1bmN0aW9uIG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJDMgKG9iaiwgZXhjbHVkZSkgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGsgaW4gb2JqKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaykgJiYgZXhjbHVkZS5pbmRleE9mKGspID09PSAtMSkgdGFyZ2V0W2tdID0gb2JqW2tdOyByZXR1cm4gdGFyZ2V0OyB9XG5cbnZhciBDaGVja2JveENoZWNrZWQgPSBmdW5jdGlvbiAocHJvcHMpIHsgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoIFNWRywgcHJvcHMsXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudCggJ3BhdGgnLCB7IGQ6IFwiTTE5IDNINWMtMS4xMSAwLTIgLjktMiAydjE0YzAgMS4xLjg5IDIgMiAyaDE0YzEuMTEgMCAyLS45IDItMlY1YzAtMS4xLS44OS0yLTItMnptLTkgMTRsLTUtNSAxLjQxLTEuNDFMMTAgMTQuMTdsNy41OS03LjU5TDE5IDhsLTkgOXpcIiB9KVxuICApOyB9O1xuXG52YXIgQ2hlY2tib3hVbmNoZWNrZWQgPSBmdW5jdGlvbiAocHJvcHMpIHsgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoIFNWRywgcHJvcHMsXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudCggJ3BhdGgnLCB7IGQ6IFwiTTE5IDV2MTRINVY1aDE0bTAtMkg1Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6XCIgfSlcbiAgKTsgfTtcblxudmFyIENoZWNrYm94SWNvbiA9IGZ1bmN0aW9uIChwcm9wcykgeyByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCggUmVhY3QuRnJhZ21lbnQsIG51bGwsXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudCggQ2hlY2tib3hDaGVja2VkLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywgeyBfX2Nzczoge1xuICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAnaW5wdXQ6Y2hlY2tlZCB+ICYnOiB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snXG4gICAgfVxuICB9IH0pKSxcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCBDaGVja2JveFVuY2hlY2tlZCwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHsgX19jc3M6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICdpbnB1dDpjaGVja2VkIH4gJic6IHtcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgIH1cbiAgfSB9KSlcbiAgKTsgfTtcblxudmFyIENoZWNrYm94ID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocmVmJDEsIHJlZikge1xuICB2YXIgY2xhc3NOYW1lID0gcmVmJDEuY2xhc3NOYW1lO1xuICB2YXIgc3ggPSByZWYkMS5zeDtcbiAgdmFyIHZhcmlhbnQgPSByZWYkMS52YXJpYW50OyBpZiAoIHZhcmlhbnQgPT09IHZvaWQgMCApIHZhcmlhbnQgPSAnY2hlY2tib3gnO1xuICB2YXIgcmVzdCA9IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJDMoIHJlZiQxLCBbXCJjbGFzc05hbWVcIiwgXCJzeFwiLCBcInZhcmlhbnRcIl0gKTtcbiAgdmFyIHByb3BzID0gcmVzdDtcblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCggQm94LCBudWxsLFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCggQm94LCBPYmplY3QuYXNzaWduKHt9LCB7IHJlZjogcmVmLCBhczogXCJpbnB1dFwiLCB0eXBlOiBcImNoZWNrYm94XCIgfSwgcHJvcHMsIHsgc3g6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBvcGFjaXR5OiAwLFxuICAgIHpJbmRleDogLTEsXG4gICAgd2lkdGg6IDEsXG4gICAgaGVpZ2h0OiAxLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICB9IH0pKSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoIEJveCwgeyBhczogQ2hlY2tib3hJY29uLCAnYXJpYS1oaWRkZW4nOiBcInRydWVcIiwgX190aGVtZUtleTogXCJmb3Jtc1wiLCB2YXJpYW50OiB2YXJpYW50LCBjbGFzc05hbWU6IGNsYXNzTmFtZSwgc3g6IHN4LCBfX2Nzczoge1xuICAgIG1yOiAyLFxuICAgIGJvcmRlclJhZGl1czogNCxcbiAgICBjb2xvcjogJ2dyYXknLFxuICAgICdpbnB1dDpjaGVja2VkIH4gJic6IHtcbiAgICAgIGNvbG9yOiAncHJpbWFyeSdcbiAgICB9LFxuICAgICdpbnB1dDpmb2N1cyB+ICYnOiB7XG4gICAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgICAgYmc6ICdoaWdobGlnaHQnXG4gICAgfVxuICB9IH0pXG4gICAgKTtcbn0pO1xuXG52YXIgdGh1bWIgPSB7XG4gIGFwcGVhcmFuY2U6ICdub25lJyxcbiAgd2lkdGg6IDE2LFxuICBoZWlnaHQ6IDE2LFxuICBiZzogJ2N1cnJlbnRjb2xvcicsXG4gIGJvcmRlcjogMCxcbiAgYm9yZGVyUmFkaXVzOiA5OTk5LFxuICB2YXJpYW50OiAnZm9ybXMuc2xpZGVyLnRodW1iJ1xufTtcbnZhciBTbGlkZXIgPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7IHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCBCb3gsIE9iamVjdC5hc3NpZ24oe30sIHsgcmVmOiByZWYsIGFzOiBcImlucHV0XCIsIHR5cGU6IFwicmFuZ2VcIiwgdmFyaWFudDogXCJzbGlkZXJcIiB9LCBwcm9wcywgeyBfX3RoZW1lS2V5OiBcImZvcm1zXCIsIF9fY3NzOiB7XG4gIGRpc3BsYXk6ICdibG9jaycsXG4gIHdpZHRoOiAnMTAwJScsXG4gIGhlaWdodDogNCxcbiAgbXk6IDIsXG4gIGN1cnNvcjogJ3BvaW50ZXInLFxuICBhcHBlYXJhbmNlOiAnbm9uZScsXG4gIGJvcmRlclJhZGl1czogOTk5OSxcbiAgY29sb3I6ICdpbmhlcml0JyxcbiAgYmc6ICdncmF5JyxcbiAgJzpmb2N1cyc6IHtcbiAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgY29sb3I6ICdwcmltYXJ5J1xuICB9LFxuICAnJjo6LXdlYmtpdC1zbGlkZXItdGh1bWInOiB0aHVtYixcbiAgJyY6Oi1tb3otcmFuZ2UtdGh1bWInOiB0aHVtYixcbiAgJyY6Oi1tcy10aHVtYic6IHRodW1iXG59IH0pKTsgfSk7XG5cbmZ1bmN0aW9uIG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJDQgKG9iaiwgZXhjbHVkZSkgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGsgaW4gb2JqKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaykgJiYgZXhjbHVkZS5pbmRleE9mKGspID09PSAtMSkgdGFyZ2V0W2tdID0gb2JqW2tdOyByZXR1cm4gdGFyZ2V0OyB9XG52YXIgRmllbGQgPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChyZWYkMSwgcmVmKSB7XG4gIHZhciBDb250cm9sID0gcmVmJDEuYXM7IGlmICggQ29udHJvbCA9PT0gdm9pZCAwICkgQ29udHJvbCA9IElucHV0O1xuICB2YXIgbGFiZWwgPSByZWYkMS5sYWJlbDtcbiAgdmFyIG5hbWUgPSByZWYkMS5uYW1lO1xuICB2YXIgcmVzdCA9IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJDQoIHJlZiQxLCBbXCJhc1wiLCBcImxhYmVsXCIsIFwibmFtZVwiXSApO1xuICB2YXIgcHJvcHMgPSByZXN0O1xuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCBCb3gsIGdldE1hcmdpbihwcm9wcyksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoIExhYmVsLCB7IGh0bWxGb3I6IG5hbWUgfSwgbGFiZWwpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCBDb250cm9sLCBPYmplY3QuYXNzaWduKHt9LCB7IHJlZjogcmVmLCBpZDogbmFtZSwgbmFtZTogbmFtZSB9LCBvbWl0TWFyZ2luKHByb3BzKSkpXG4gICAgICApO1xufSk7XG5cbnZhciBQcm9ncmVzcyA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHsgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoIEJveCwgT2JqZWN0LmFzc2lnbih7fSwgeyByZWY6IHJlZiwgYXM6IFwicHJvZ3Jlc3NcIiwgdmFyaWFudDogXCJzdHlsZXMucHJvZ3Jlc3NcIiB9LCBwcm9wcywgeyBfX2Nzczoge1xuICBkaXNwbGF5OiAnYmxvY2snLFxuICB3aWR0aDogJzEwMCUnLFxuICBoZWlnaHQ6ICc0cHgnLFxuICBtYXJnaW46IDAsXG4gIHBhZGRpbmc6IDAsXG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgYXBwZWFyYW5jZTogJ25vbmUnLFxuICBjb2xvcjogJ3ByaW1hcnknLFxuICBiZzogJ2dyYXknLFxuICBib3JkZXJSYWRpdXM6IDk5OTksXG4gIGJvcmRlcjogJ25vbmUnLFxuICAnJjo6LXdlYmtpdC1wcm9ncmVzcy1iYXInOiB7XG4gICAgYmc6ICd0cmFuc3BhcmVudCdcbiAgfSxcbiAgJyY6Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUnOiB7XG4gICAgYmc6ICdjdXJyZW50Y29sb3InXG4gIH0sXG4gICcmOjotbW96LXByb2dyZXNzLWJhcic6IHtcbiAgICBiZzogJ2N1cnJlbnRjb2xvcidcbiAgfVxufSB9KSk7IH0pO1xuXG5mdW5jdGlvbiBvYmplY3RXaXRob3V0UHJvcGVydGllcyQ1IChvYmosIGV4Y2x1ZGUpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBrIGluIG9iaikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGspICYmIGV4Y2x1ZGUuaW5kZXhPZihrKSA9PT0gLTEpIHRhcmdldFtrXSA9IG9ialtrXTsgcmV0dXJuIHRhcmdldDsgfVxudmFyIERvbnV0ID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocmVmJDEsIHJlZikge1xuICB2YXIgc2l6ZSA9IHJlZiQxLnNpemU7IGlmICggc2l6ZSA9PT0gdm9pZCAwICkgc2l6ZSA9IDEyODtcbiAgdmFyIHN0cm9rZVdpZHRoID0gcmVmJDEuc3Ryb2tlV2lkdGg7IGlmICggc3Ryb2tlV2lkdGggPT09IHZvaWQgMCApIHN0cm9rZVdpZHRoID0gMjtcbiAgdmFyIHZhbHVlID0gcmVmJDEudmFsdWU7IGlmICggdmFsdWUgPT09IHZvaWQgMCApIHZhbHVlID0gMDtcbiAgdmFyIG1pbiA9IHJlZiQxLm1pbjsgaWYgKCBtaW4gPT09IHZvaWQgMCApIG1pbiA9IDA7XG4gIHZhciBtYXggPSByZWYkMS5tYXg7IGlmICggbWF4ID09PSB2b2lkIDAgKSBtYXggPSAxO1xuICB2YXIgdGl0bGUgPSByZWYkMS50aXRsZTtcbiAgdmFyIHJlc3QgPSBvYmplY3RXaXRob3V0UHJvcGVydGllcyQ1KCByZWYkMSwgW1wic2l6ZVwiLCBcInN0cm9rZVdpZHRoXCIsIFwidmFsdWVcIiwgXCJtaW5cIiwgXCJtYXhcIiwgXCJ0aXRsZVwiXSApO1xuICB2YXIgcHJvcHMgPSByZXN0O1xuXG4gIHZhciByID0gMTYgLSBzdHJva2VXaWR0aDtcbiAgdmFyIEMgPSAyICogciAqIE1hdGguUEk7XG4gIHZhciBvZmZzZXQgPSBDIC0gKHZhbHVlIC0gbWluKSAvIChtYXggLSBtaW4pICogQztcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoIEJveCwgT2JqZWN0LmFzc2lnbih7fSwgeyByZWY6IHJlZiwgYXM6IFwic3ZnXCIsIHZpZXdCb3g6IFwiMCAwIDMyIDMyXCIsIHdpZHRoOiBzaXplLCBoZWlnaHQ6IHNpemUsIHN0cm9rZVdpZHRoOiBzdHJva2VXaWR0aCwgZmlsbDogXCJub25lXCIsIHN0cm9rZTogXCJjdXJyZW50Y29sb3JcIiwgcm9sZTogXCJpbWdcIiwgJ2FyaWEtdmFsdWVub3cnOiB2YWx1ZSwgJ2FyaWEtdmFsdWVtaW4nOiBtaW4sICdhcmlhLXZhbHVlbWF4JzogbWF4IH0sIHByb3BzLCB7IF9fY3NzOiB7XG4gICAgY29sb3I6ICdwcmltYXJ5J1xuICB9IH0pLFxuICAgICAgICB0aXRsZSAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KCAndGl0bGUnLCBudWxsLCB0aXRsZSApLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCAnY2lyY2xlJywgeyBjeDogMTYsIGN5OiAxNiwgcjogciwgb3BhY2l0eTogMSAvIDggfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoICdjaXJjbGUnLCB7IGN4OiAxNiwgY3k6IDE2LCByOiByLCBzdHJva2VEYXNoYXJyYXk6IEMsIHN0cm9rZURhc2hvZmZzZXQ6IG9mZnNldCwgdHJhbnNmb3JtOiBcInJvdGF0ZSgtOTAgMTYgMTYpXCIgfSlcbiAgICAgICk7XG59KTtcblxuZnVuY3Rpb24gb2JqZWN0V2l0aG91dFByb3BlcnRpZXMkNiAob2JqLCBleGNsdWRlKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgayBpbiBvYmopIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrKSAmJiBleGNsdWRlLmluZGV4T2YoaykgPT09IC0xKSB0YXJnZXRba10gPSBvYmpba107IHJldHVybiB0YXJnZXQ7IH1cbnZhciBzcGluID0ga2V5ZnJhbWVzKHtcbiAgZnJvbToge1xuICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgwZGVnKSdcbiAgfSxcbiAgdG86IHtcbiAgICB0cmFuc2Zvcm06ICdyb3RhdGUoMzYwZGVnKSdcbiAgfVxufSk7XG52YXIgU3Bpbm5lciA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHJlZiQxLCByZWYpIHtcbiAgdmFyIHNpemUgPSByZWYkMS5zaXplOyBpZiAoIHNpemUgPT09IHZvaWQgMCApIHNpemUgPSA0ODtcbiAgdmFyIHN0cm9rZVdpZHRoID0gcmVmJDEuc3Ryb2tlV2lkdGg7IGlmICggc3Ryb2tlV2lkdGggPT09IHZvaWQgMCApIHN0cm9rZVdpZHRoID0gNDtcbiAgdmFyIHRpdGxlID0gcmVmJDEudGl0bGU7IGlmICggdGl0bGUgPT09IHZvaWQgMCApIHRpdGxlID0gJ0xvYWRpbmcuLi4nO1xuICB2YXIgZHVyYXRpb24gPSByZWYkMS5kdXJhdGlvbjsgaWYgKCBkdXJhdGlvbiA9PT0gdm9pZCAwICkgZHVyYXRpb24gPSA1MDA7XG4gIHZhciByZXN0ID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXMkNiggcmVmJDEsIFtcInNpemVcIiwgXCJzdHJva2VXaWR0aFwiLCBcIm1heFwiLCBcInRpdGxlXCIsIFwiZHVyYXRpb25cIl0gKTtcbiAgdmFyIHByb3BzID0gcmVzdDtcblxuICB2YXIgciA9IDE2IC0gc3Ryb2tlV2lkdGg7XG4gIHZhciBDID0gMiAqIHIgKiBNYXRoLlBJO1xuICB2YXIgb2Zmc2V0ID0gQyAtIDEgLyA0ICogQztcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoIEJveCwgT2JqZWN0LmFzc2lnbih7fSwgeyByZWY6IHJlZiwgYXM6IFwic3ZnXCIsIHZpZXdCb3g6IFwiMCAwIDMyIDMyXCIsIHdpZHRoOiBzaXplLCBoZWlnaHQ6IHNpemUsIHN0cm9rZVdpZHRoOiBzdHJva2VXaWR0aCwgZmlsbDogXCJub25lXCIsIHN0cm9rZTogXCJjdXJyZW50Y29sb3JcIiwgcm9sZTogXCJpbWdcIiB9LCBwcm9wcywgeyBfX2Nzczoge1xuICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgb3ZlcmZsb3c6ICd2aXNpYmxlJ1xuICB9IH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCAndGl0bGUnLCBudWxsLCB0aXRsZSApLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCAnY2lyY2xlJywgeyBjeDogMTYsIGN5OiAxNiwgcjogciwgb3BhY2l0eTogMSAvIDggfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoIEJveCwgeyBhczogXCJjaXJjbGVcIiwgY3g6IDE2LCBjeTogMTYsIHI6IHIsIHN0cm9rZURhc2hhcnJheTogQywgc3Ryb2tlRGFzaG9mZnNldDogb2Zmc2V0LCBfX2Nzczoge1xuICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnNTAlIDUwJScsXG4gICAgICBhbmltYXRpb25OYW1lOiBzcGluLnRvU3RyaW5nKCksXG4gICAgICBhbmltYXRpb25UaW1pbmdGdW5jdGlvbjogJ2xpbmVhcicsXG4gICAgICBhbmltYXRpb25EdXJhdGlvbjogZHVyYXRpb24gKyAnbXMnLFxuICAgICAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6ICdpbmZpbml0ZSdcbiAgICB9IH0pXG4gICAgICApO1xufSk7XG5cbmZ1bmN0aW9uIG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJDcgKG9iaiwgZXhjbHVkZSkgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGsgaW4gb2JqKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaykgJiYgZXhjbHVkZS5pbmRleE9mKGspID09PSAtMSkgdGFyZ2V0W2tdID0gb2JqW2tdOyByZXR1cm4gdGFyZ2V0OyB9XG52YXIgQXZhdGFyID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocmVmJDEsIHJlZikge1xuICB2YXIgc2l6ZSA9IHJlZiQxLnNpemU7IGlmICggc2l6ZSA9PT0gdm9pZCAwICkgc2l6ZSA9IDQ4O1xuICB2YXIgcmVzdCA9IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJDcoIHJlZiQxLCBbXCJzaXplXCJdICk7XG4gIHZhciBwcm9wcyA9IHJlc3Q7XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoIEltYWdlLCBPYmplY3QuYXNzaWduKHt9LCB7IHJlZjogcmVmLCB3aWR0aDogc2l6ZSwgaGVpZ2h0OiBzaXplLCB2YXJpYW50OiBcImF2YXRhclwiIH0sIHByb3BzLCB7IF9fY3NzOiB7XG4gIGJvcmRlclJhZGl1czogOTk5OVxufSB9KSk7XG59KTtcblxudmFyIEJhZGdlID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikgeyByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCggQm94LCBPYmplY3QuYXNzaWduKHt9LCB7IHJlZjogcmVmLCB2YXJpYW50OiBcInByaW1hcnlcIiB9LCBwcm9wcywgeyBfX3RoZW1lS2V5OiBcImJhZGdlc1wiLCBfX2Nzczoge1xuICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgdmVydGljYWxBbGlnbjogJ2Jhc2VsaW5lJyxcbiAgZm9udFNpemU6IDAsXG4gIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gIHB4OiAxLFxuICBib3JkZXJSYWRpdXM6IDIsXG4gIGNvbG9yOiAnd2hpdGUnLFxuICBiZzogJ3ByaW1hcnknXG59IH0pKTsgfSk7XG5cbmZ1bmN0aW9uIG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJDggKG9iaiwgZXhjbHVkZSkgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGsgaW4gb2JqKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaykgJiYgZXhjbHVkZS5pbmRleE9mKGspID09PSAtMSkgdGFyZ2V0W2tdID0gb2JqW2tdOyByZXR1cm4gdGFyZ2V0OyB9XG52YXIgSWNvbkJ1dHRvbiA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHJlZiQxLCByZWYpIHtcbiAgdmFyIHNpemUgPSByZWYkMS5zaXplOyBpZiAoIHNpemUgPT09IHZvaWQgMCApIHNpemUgPSAzMjtcbiAgdmFyIHJlc3QgPSBvYmplY3RXaXRob3V0UHJvcGVydGllcyQ4KCByZWYkMSwgW1wic2l6ZVwiXSApO1xuICB2YXIgcHJvcHMgPSByZXN0O1xuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCBCb3gsIE9iamVjdC5hc3NpZ24oe30sIHsgcmVmOiByZWYsIGFzOiBcImJ1dHRvblwiLCB2YXJpYW50OiBcImljb25cIiB9LCBwcm9wcywgeyBfX3RoZW1lS2V5OiBcImJ1dHRvbnNcIiwgX19jc3M6IHtcbiAgYXBwZWFyYW5jZTogJ25vbmUnLFxuICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICBwYWRkaW5nOiAxLFxuICB3aWR0aDogc2l6ZSxcbiAgaGVpZ2h0OiBzaXplLFxuICBjb2xvcjogJ2luaGVyaXQnLFxuICBiZzogJ3RyYW5zcGFyZW50JyxcbiAgYm9yZGVyOiAnbm9uZScsXG4gIGJvcmRlclJhZGl1czogNFxufSB9KSk7XG59KTtcblxuZnVuY3Rpb24gb2JqZWN0V2l0aG91dFByb3BlcnRpZXMkOSAob2JqLCBleGNsdWRlKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgayBpbiBvYmopIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrKSAmJiBleGNsdWRlLmluZGV4T2YoaykgPT09IC0xKSB0YXJnZXRba10gPSBvYmpba107IHJldHVybiB0YXJnZXQ7IH1cbnZhciB4ID0gUmVhY3QuY3JlYXRlRWxlbWVudCggJ3N2ZycsIHsgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgd2lkdGg6IFwiMjRcIiwgaGVpZ2h0OiBcIjI0XCIsIGZpbGw6IFwiY3VycmVudGNvbG9yXCIsIHZpZXdCb3g6IFwiMCAwIDI0IDI0XCIgfSxcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCAncGF0aCcsIHsgZDogXCJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyelwiIH0pXG4gICk7XG52YXIgQ2xvc2UgPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChyZWYkMSwgcmVmKSB7XG4gIHZhciByZXN0ID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXMkOSggcmVmJDEsIFtcInNpemVcIl0gKTtcbiAgdmFyIHByb3BzID0gcmVzdDtcblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCggSWNvbkJ1dHRvbiwgT2JqZWN0LmFzc2lnbih7fSwgeyByZWY6IHJlZiwgdGl0bGU6IFwiQ2xvc2VcIiwgJ2FyaWEtbGFiZWwnOiBcIkNsb3NlXCIsIHZhcmlhbnQ6IFwiY2xvc2VcIiB9LCBwcm9wcywgeyBjaGlsZHJlbjogeCB9KSk7XG59KTtcblxudmFyIEFsZXJ0ID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikgeyByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCggQm94LCBPYmplY3QuYXNzaWduKHt9LCB7IHJlZjogcmVmLCB2YXJpYW50OiBcInByaW1hcnlcIiB9LCBwcm9wcywgeyBfX3RoZW1lS2V5OiBcImFsZXJ0c1wiLCBfX2Nzczoge1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBweDogMyxcbiAgcHk6IDIsXG4gIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgY29sb3I6ICd3aGl0ZScsXG4gIGJnOiAncHJpbWFyeScsXG4gIGJvcmRlclJhZGl1czogNFxufSB9KSk7IH0pO1xuXG52YXIgRGl2aWRlciA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHsgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoIEJveCwgT2JqZWN0LmFzc2lnbih7fSwgeyByZWY6IHJlZiwgYXM6IFwiaHJcIiwgdmFyaWFudDogXCJzdHlsZXMuaHJcIiB9LCBwcm9wcywgeyBfX2Nzczoge1xuICBjb2xvcjogJ2dyYXknLFxuICBtOiAwLFxuICBteTogMixcbiAgYm9yZGVyOiAwLFxuICBib3JkZXJCb3R0b206ICcxcHggc29saWQnXG59IH0pKTsgfSk7XG5cbmZ1bmN0aW9uIG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJGEgKG9iaiwgZXhjbHVkZSkgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGsgaW4gb2JqKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaykgJiYgZXhjbHVkZS5pbmRleE9mKGspID09PSAtMSkgdGFyZ2V0W2tdID0gb2JqW2tdOyByZXR1cm4gdGFyZ2V0OyB9XG52YXIgRW1iZWQgPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChyZWYkMSwgcmVmKSB7XG4gIHZhciByYXRpbyA9IHJlZiQxLnJhdGlvOyBpZiAoIHJhdGlvID09PSB2b2lkIDAgKSByYXRpbyA9IDE2IC8gOTtcbiAgdmFyIHNyYyA9IHJlZiQxLnNyYztcbiAgdmFyIGZyYW1lQm9yZGVyID0gcmVmJDEuZnJhbWVCb3JkZXI7IGlmICggZnJhbWVCb3JkZXIgPT09IHZvaWQgMCApIGZyYW1lQm9yZGVyID0gMDtcbiAgdmFyIGFsbG93RnVsbFNjcmVlbiA9IHJlZiQxLmFsbG93RnVsbFNjcmVlbjsgaWYgKCBhbGxvd0Z1bGxTY3JlZW4gPT09IHZvaWQgMCApIGFsbG93RnVsbFNjcmVlbiA9IHRydWU7XG4gIHZhciB3aWR0aCA9IHJlZiQxLndpZHRoOyBpZiAoIHdpZHRoID09PSB2b2lkIDAgKSB3aWR0aCA9IDU2MDtcbiAgdmFyIGhlaWdodCA9IHJlZiQxLmhlaWdodDsgaWYgKCBoZWlnaHQgPT09IHZvaWQgMCApIGhlaWdodCA9IDMxNTtcbiAgdmFyIGFsbG93ID0gcmVmJDEuYWxsb3c7XG4gIHZhciByZXN0ID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXMkYSggcmVmJDEsIFtcInJhdGlvXCIsIFwic3JjXCIsIFwiZnJhbWVCb3JkZXJcIiwgXCJhbGxvd0Z1bGxTY3JlZW5cIiwgXCJ3aWR0aFwiLCBcImhlaWdodFwiLCBcImFsbG93XCJdICk7XG4gIHZhciBwcm9wcyA9IHJlc3Q7XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoIEJveCwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHsgX19jc3M6IHtcbiAgd2lkdGg6ICcxMDAlJyxcbiAgaGVpZ2h0OiAwLFxuICBwYWRkaW5nQm90dG9tOiAxMDAgLyByYXRpbyArICclJyxcbiAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gIG92ZXJmbG93OiAnaGlkZGVuJ1xufSB9KSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoIEJveCwgeyByZWY6IHJlZiwgYXM6IFwiaWZyYW1lXCIsIHNyYzogc3JjLCB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0LCBmcmFtZUJvcmRlcjogZnJhbWVCb3JkZXIsIGFsbG93RnVsbFNjcmVlbjogYWxsb3dGdWxsU2NyZWVuLCBhbGxvdzogYWxsb3csIF9fY3NzOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICB0b3A6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgYm9yZGVyOiAwXG4gIH0gfSlcbiAgICApO1xufSk7XG5cbmZ1bmN0aW9uIG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJGIgKG9iaiwgZXhjbHVkZSkgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGsgaW4gb2JqKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaykgJiYgZXhjbHVkZS5pbmRleE9mKGspID09PSAtMSkgdGFyZ2V0W2tdID0gb2JqW2tdOyByZXR1cm4gdGFyZ2V0OyB9XG52YXIgQXNwZWN0UmF0aW8gPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChyZWYkMSwgcmVmKSB7XG4gIHZhciByYXRpbyA9IHJlZiQxLnJhdGlvOyBpZiAoIHJhdGlvID09PSB2b2lkIDAgKSByYXRpbyA9IDQgLyAzO1xuICB2YXIgY2hpbGRyZW4gPSByZWYkMS5jaGlsZHJlbjtcbiAgdmFyIHJlc3QgPSBvYmplY3RXaXRob3V0UHJvcGVydGllcyRiKCByZWYkMSwgW1wicmF0aW9cIiwgXCJjaGlsZHJlblwiXSApO1xuICB2YXIgcHJvcHMgPSByZXN0O1xuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCBCb3gsIHsgcmVmOiByZWYsIHN4OiB7XG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICBvdmVyZmxvdzogJ2hpZGRlbidcbn0gfSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoIEJveCwgeyBzeDoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAwLFxuICAgIHBhZGRpbmdCb3R0b206IDEwMCAvIHJhdGlvICsgJyUnXG4gIH0gfSksXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCBCb3gsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzLCB7IF9fY3NzOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICBsZWZ0OiAwXG4gIH0gfSksXG4gICAgICAgIGNoaWxkcmVuXG4gICAgICApXG4gICAgKTtcbn0pO1xuXG5mdW5jdGlvbiBvYmplY3RXaXRob3V0UHJvcGVydGllcyRjIChvYmosIGV4Y2x1ZGUpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBrIGluIG9iaikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGspICYmIGV4Y2x1ZGUuaW5kZXhPZihrKSA9PT0gLTEpIHRhcmdldFtrXSA9IG9ialtrXTsgcmV0dXJuIHRhcmdldDsgfVxudmFyIEFzcGVjdEltYWdlID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocmVmJDEsIHJlZikge1xuICB2YXIgcmF0aW8gPSByZWYkMS5yYXRpbztcbiAgdmFyIHJlc3QgPSBvYmplY3RXaXRob3V0UHJvcGVydGllcyRjKCByZWYkMSwgW1wicmF0aW9cIl0gKTtcbiAgdmFyIHByb3BzID0gcmVzdDtcblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCggQXNwZWN0UmF0aW8sIHsgcmF0aW86IHJhdGlvIH0sXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudCggSW1hZ2UsIE9iamVjdC5hc3NpZ24oe30sIHsgcmVmOiByZWYgfSwgcHJvcHMsIHsgX19jc3M6IHtcbiAgICBvYmplY3RGaXQ6ICdjb3ZlcidcbiAgfSB9KSlcbiAgKTtcbn0pO1xuXG52YXIgQ29udGFpbmVyID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikgeyByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCggQm94LCBPYmplY3QuYXNzaWduKHt9LCB7IHJlZjogcmVmLCB2YXJpYW50OiBcImNvbnRhaW5lclwiIH0sIHByb3BzLCB7IF9fdGhlbWVLZXk6IFwibGF5b3V0XCIsIF9fY3NzOiB7XG4gIHdpZHRoOiAnMTAwJScsXG4gIG1heFdpZHRoOiAnY29udGFpbmVyJyxcbiAgbXg6ICdhdXRvJ1xufSB9KSk7IH0pO1xuXG52YXIgTmF2TGluayA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHsgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoIExpbmssIE9iamVjdC5hc3NpZ24oe30sIHsgcmVmOiByZWYsIHZhcmlhbnQ6IFwibmF2XCIgfSwgcHJvcHMsIHsgX19jc3M6IHtcbiAgY29sb3I6ICdpbmhlcml0JyxcbiAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgZm9udFdlaWdodDogJ2JvbGQnLFxuICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgJyY6aG92ZXIsICY6Zm9jdXMsICYuYWN0aXZlJzoge1xuICAgIGNvbG9yOiAncHJpbWFyeSdcbiAgfVxufSB9KSk7IH0pO1xuXG52YXIgTWVzc2FnZSA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHsgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoIEJveCwgT2JqZWN0LmFzc2lnbih7fSwgeyByZWY6IHJlZiB9LCBwcm9wcywgeyBfX3RoZW1lS2V5OiBcIm1lc3NhZ2VzXCIsIF9fY3NzOiB7XG4gIHBhZGRpbmc6IDMsXG4gIHBhZGRpbmdMZWZ0OiBmdW5jdGlvbiAodCkgeyByZXR1cm4gdC5zcGFjZVszXSAtIHQuc3BhY2VbMV07IH0sXG4gIGJvcmRlckxlZnRXaWR0aDogZnVuY3Rpb24gKHQpIHsgcmV0dXJuIHQuc3BhY2VbMV07IH0sXG4gIGJvcmRlckxlZnRTdHlsZTogJ3NvbGlkJyxcbiAgYm9yZGVyTGVmdENvbG9yOiAncHJpbWFyeScsXG4gIGJvcmRlclJhZGl1czogNCxcbiAgYmc6ICdoaWdobGlnaHQnXG59IH0pKTsgfSk7XG5cbnZhciBNZW51SWNvbiA9IGZ1bmN0aW9uIChyZWYpIHtcbiAgdmFyIHNpemUgPSByZWYuc2l6ZTsgaWYgKCBzaXplID09PSB2b2lkIDAgKSBzaXplID0gMjQ7XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoIEJveCwgeyBhczogXCJzdmdcIiwgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgd2lkdGg6IHNpemUsIGhlaWdodDogc2l6ZSwgZmlsbDogXCJjdXJyZW50Y29sb3JcIiwgdmlld0JveDogXCIwIDAgMjQgMjRcIiwgc3g6IHtcbiAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgbWFyZ2luOiAwXG59IH0sXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudCggJ3BhdGgnLCB7IGQ6IFwiTTMgMThoMTh2LTJIM3Yyem0wLTVoMTh2LTJIM3Yyem0wLTd2MmgxOFY2SDN6XCIgfSlcbiAgKTtcbn07XG52YXIgTWVudUJ1dHRvbiA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHsgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoIEljb25CdXR0b24sIE9iamVjdC5hc3NpZ24oe30sIHsgcmVmOiByZWYsIHRpdGxlOiBcIk1lbnVcIiwgJ2FyaWEtbGFiZWwnOiBcIlRvZ2dsZSBNZW51XCIsIHZhcmlhbnQ6IFwibWVudVwiIH0sIHByb3BzKSxcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCBNZW51SWNvbiwgbnVsbCApXG4gICk7IH0pO1xuXG5leHBvcnQgeyBCb3gsIEZsZXgsIEdyaWQsIEJ1dHRvbiwgTGluaywgVGV4dCwgSGVhZGluZywgSW1hZ2UsIENhcmQsIExhYmVsLCBJbnB1dCwgU2VsZWN0LCBUZXh0YXJlYSwgUmFkaW8sIENoZWNrYm94LCBTbGlkZXIsIEZpZWxkLCBQcm9ncmVzcywgRG9udXQsIFNwaW5uZXIsIEF2YXRhciwgQmFkZ2UsIENsb3NlLCBBbGVydCwgRGl2aWRlciwgRW1iZWQsIEFzcGVjdFJhdGlvLCBBc3BlY3RJbWFnZSwgQ29udGFpbmVyLCBOYXZMaW5rLCBNZXNzYWdlLCBJY29uQnV0dG9uLCBNZW51QnV0dG9uIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lc20uanMubWFwXG4iLCJpbXBvcnQgeyBqc3gsIFRoZW1lQ29udGV4dCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQHRoZW1lLXVpL2Nzcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGRlZXBtZXJnZSBmcm9tICdkZWVwbWVyZ2UnO1xuaW1wb3J0IHBhY2thZ2VJbmZvIGZyb20gJ0BlbW90aW9uL2NvcmUvcGFja2FnZS5qc29uJztcblxudmFyIF9fRU1PVElPTl9WRVJTSU9OX18gPSBwYWNrYWdlSW5mby52ZXJzaW9uO1xuXG52YXIgZ2V0Q1NTID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gIGlmICghcHJvcHMuc3ggJiYgIXByb3BzLmNzcykgeyByZXR1cm4gdW5kZWZpbmVkOyB9XG4gIHJldHVybiBmdW5jdGlvbiAodGhlbWUpIHtcbiAgICB2YXIgc3R5bGVzID0gY3NzKHByb3BzLnN4KSh0aGVtZSk7XG4gICAgdmFyIHJhdyA9IHR5cGVvZiBwcm9wcy5jc3MgPT09ICdmdW5jdGlvbicgPyBwcm9wcy5jc3ModGhlbWUpIDogcHJvcHMuY3NzO1xuICAgIHJldHVybiBbc3R5bGVzLCByYXddO1xuICB9O1xufTtcblxudmFyIHBhcnNlUHJvcHMgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgaWYgKCFwcm9wcykgeyByZXR1cm4gbnVsbDsgfVxuICB2YXIgbmV4dCA9IHt9O1xuXG4gIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgIGlmIChrZXkgPT09ICdzeCcpIHsgY29udGludWU7IH1cbiAgICBuZXh0W2tleV0gPSBwcm9wc1trZXldO1xuICB9XG5cbiAgdmFyIGNzcyQkMSA9IGdldENTUyhwcm9wcyk7XG4gIGlmIChjc3MkJDEpIHsgbmV4dC5jc3MgPSBjc3MkJDE7IH1cbiAgcmV0dXJuIG5leHQ7XG59O1xuXG52YXIganN4JDEgPSBmdW5jdGlvbiAodHlwZSwgcHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuICB3aGlsZSAoIGxlbi0tID4gMCApIGNoaWxkcmVuWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuICsgMiBdO1xuXG4gIHJldHVybiBqc3guYXBwbHkodW5kZWZpbmVkLCBbdHlwZSwgcGFyc2VQcm9wcyhwcm9wcykgXS5jb25jYXQoIGNoaWxkcmVuKSk7XG59O1xudmFyIENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHtcbiAgX19FTU9USU9OX1ZFUlNJT05fXzogX19FTU9USU9OX1ZFUlNJT05fXyxcbiAgdGhlbWU6IG51bGxcbn0pO1xudmFyIHVzZVRoZW1lVUkgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBSZWFjdC51c2VDb250ZXh0KENvbnRleHQpOyB9O1xudmFyIGNhblVzZVN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcbnZhciBSRUFDVF9FTEVNRU5UID0gY2FuVXNlU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIEZPUldBUkRfUkVGID0gY2FuVXNlU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKSA6IDB4ZWFjNztcblxudmFyIGlzTWVyZ2VhYmxlT2JqZWN0ID0gZnVuY3Rpb24gKG4pIHtcbiAgcmV0dXJuICEhbiAmJiB0eXBlb2YgbiA9PT0gJ29iamVjdCcgJiYgbi4kJHR5cGVvZiAhPT0gUkVBQ1RfRUxFTUVOVCAmJiBuLiQkdHlwZW9mICE9PSBGT1JXQVJEX1JFRjtcbn07XG5cbnZhciBhcnJheU1lcmdlID0gZnVuY3Rpb24gKGRlc3RpbmF0aW9uQXJyYXksIHNvdXJjZUFycmF5LCBvcHRpb25zKSB7IHJldHVybiBzb3VyY2VBcnJheTsgfTtcblxudmFyIG1lcmdlID0gZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGRlZXBtZXJnZShhLCBiLCB7XG4gIGlzTWVyZ2VhYmxlT2JqZWN0OiBpc01lcmdlYWJsZU9iamVjdCxcbiAgYXJyYXlNZXJnZTogYXJyYXlNZXJnZVxufSk7IH07XG5cbm1lcmdlLmFsbCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICByZXR1cm4gZGVlcG1lcmdlLmFsbChhcmdzLCB7XG4gIGlzTWVyZ2VhYmxlT2JqZWN0OiBpc01lcmdlYWJsZU9iamVjdCxcbiAgYXJyYXlNZXJnZTogYXJyYXlNZXJnZVxufSk7XG59O1xuXG52YXIgQmFzZVByb3ZpZGVyID0gZnVuY3Rpb24gKHJlZikge1xuICB2YXIgY29udGV4dCA9IHJlZi5jb250ZXh0O1xuICB2YXIgY2hpbGRyZW4gPSByZWYuY2hpbGRyZW47XG5cbiAgcmV0dXJuIGpzeCQxKFRoZW1lQ29udGV4dC5Qcm92aWRlciwge1xuICB2YWx1ZTogY29udGV4dC50aGVtZVxufSwganN4JDEoQ29udGV4dC5Qcm92aWRlciwge1xuICB2YWx1ZTogY29udGV4dCxcbiAgY2hpbGRyZW46IGNoaWxkcmVuXG59KSk7XG59O1xuXG52YXIgVGhlbWVQcm92aWRlciA9IGZ1bmN0aW9uIChyZWYpIHtcbiAgdmFyIHRoZW1lID0gcmVmLnRoZW1lO1xuICB2YXIgY2hpbGRyZW4gPSByZWYuY2hpbGRyZW47XG5cbiAgdmFyIG91dGVyID0gdXNlVGhlbWVVSSgpO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKG91dGVyLl9fRU1PVElPTl9WRVJTSU9OX18gIT09IF9fRU1PVElPTl9WRVJTSU9OX18pIHtcbiAgICAgIGNvbnNvbGUud2FybignTXVsdGlwbGUgdmVyc2lvbnMgb2YgRW1vdGlvbiBkZXRlY3RlZCwnLCAnYW5kIHRoZW1pbmcgbWlnaHQgbm90IHdvcmsgYXMgZXhwZWN0ZWQuJywgJ1BsZWFzZSBlbnN1cmUgdGhlcmUgaXMgb25seSBvbmUgY29weSBvZiBAZW1vdGlvbi9jb3JlIGluc3RhbGxlZCBpbiB5b3VyIGFwcGxpY2F0aW9uLicpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb250ZXh0ID0gdHlwZW9mIHRoZW1lID09PSAnZnVuY3Rpb24nID8gT2JqZWN0LmFzc2lnbih7fSwgb3V0ZXIsXG4gICAge3RoZW1lOiB0aGVtZShvdXRlci50aGVtZSl9KSA6IG1lcmdlLmFsbCh7fSwgb3V0ZXIsIHtcbiAgICB0aGVtZTogdGhlbWVcbiAgfSk7XG4gIHJldHVybiBqc3gkMShCYXNlUHJvdmlkZXIsIHtcbiAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICB9KTtcbn07XG5cbmV4cG9ydCB7IGpzeCQxIGFzIGpzeCwgQ29udGV4dCwgdXNlVGhlbWVVSSwgbWVyZ2UsIFRoZW1lUHJvdmlkZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzbS5qcy5tYXBcbiIsInZhciBnZXQgPSBmdW5jdGlvbiAob2JqLCBrZXksIGRlZiwgcCwgdW5kZWYpIHtcbiAga2V5ID0ga2V5ICYmIGtleS5zcGxpdCA/IGtleS5zcGxpdCgnLicpIDogW2tleV07XG5cbiAgZm9yIChwID0gMDsgcCA8IGtleS5sZW5ndGg7IHArKykge1xuICAgIG9iaiA9IG9iaiA/IG9ialtrZXlbcF1dIDogdW5kZWY7XG4gIH1cblxuICByZXR1cm4gb2JqID09PSB1bmRlZiA/IGRlZiA6IG9iajtcbn07XG52YXIgZGVmYXVsdEJyZWFrcG9pbnRzID0gWzQwLCA1MiwgNjRdLm1hcChmdW5jdGlvbiAobikgeyByZXR1cm4gbiArICdlbSc7IH0pO1xudmFyIGRlZmF1bHRUaGVtZSA9IHtcbiAgc3BhY2U6IFswLCA0LCA4LCAxNiwgMzIsIDY0LCAxMjgsIDI1NiwgNTEyXSxcbiAgZm9udFNpemVzOiBbMTIsIDE0LCAxNiwgMjAsIDI0LCAzMiwgNDgsIDY0LCA3Ml1cbn07XG52YXIgYWxpYXNlcyA9IHtcbiAgYmc6ICdiYWNrZ3JvdW5kQ29sb3InLFxuICBtOiAnbWFyZ2luJyxcbiAgbXQ6ICdtYXJnaW5Ub3AnLFxuICBtcjogJ21hcmdpblJpZ2h0JyxcbiAgbWI6ICdtYXJnaW5Cb3R0b20nLFxuICBtbDogJ21hcmdpbkxlZnQnLFxuICBteDogJ21hcmdpblgnLFxuICBteTogJ21hcmdpblknLFxuICBwOiAncGFkZGluZycsXG4gIHB0OiAncGFkZGluZ1RvcCcsXG4gIHByOiAncGFkZGluZ1JpZ2h0JyxcbiAgcGI6ICdwYWRkaW5nQm90dG9tJyxcbiAgcGw6ICdwYWRkaW5nTGVmdCcsXG4gIHB4OiAncGFkZGluZ1gnLFxuICBweTogJ3BhZGRpbmdZJ1xufTtcbnZhciBtdWx0aXBsZXMgPSB7XG4gIG1hcmdpblg6IFsnbWFyZ2luTGVmdCcsICdtYXJnaW5SaWdodCddLFxuICBtYXJnaW5ZOiBbJ21hcmdpblRvcCcsICdtYXJnaW5Cb3R0b20nXSxcbiAgcGFkZGluZ1g6IFsncGFkZGluZ0xlZnQnLCAncGFkZGluZ1JpZ2h0J10sXG4gIHBhZGRpbmdZOiBbJ3BhZGRpbmdUb3AnLCAncGFkZGluZ0JvdHRvbSddLFxuICBzaXplOiBbJ3dpZHRoJywgJ2hlaWdodCddXG59O1xudmFyIHNjYWxlcyA9IHtcbiAgY29sb3I6ICdjb2xvcnMnLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICdjb2xvcnMnLFxuICBib3JkZXJDb2xvcjogJ2NvbG9ycycsXG4gIGNhcmV0Q29sb3I6ICdjb2xvcnMnLFxuICBjb2x1bW5SdWxlQ29sb3I6ICdjb2xvcnMnLFxuICBtYXJnaW46ICdzcGFjZScsXG4gIG1hcmdpblRvcDogJ3NwYWNlJyxcbiAgbWFyZ2luUmlnaHQ6ICdzcGFjZScsXG4gIG1hcmdpbkJvdHRvbTogJ3NwYWNlJyxcbiAgbWFyZ2luTGVmdDogJ3NwYWNlJyxcbiAgbWFyZ2luWDogJ3NwYWNlJyxcbiAgbWFyZ2luWTogJ3NwYWNlJyxcbiAgcGFkZGluZzogJ3NwYWNlJyxcbiAgcGFkZGluZ1RvcDogJ3NwYWNlJyxcbiAgcGFkZGluZ1JpZ2h0OiAnc3BhY2UnLFxuICBwYWRkaW5nQm90dG9tOiAnc3BhY2UnLFxuICBwYWRkaW5nTGVmdDogJ3NwYWNlJyxcbiAgcGFkZGluZ1g6ICdzcGFjZScsXG4gIHBhZGRpbmdZOiAnc3BhY2UnLFxuICB0b3A6ICdzcGFjZScsXG4gIHJpZ2h0OiAnc3BhY2UnLFxuICBib3R0b206ICdzcGFjZScsXG4gIGxlZnQ6ICdzcGFjZScsXG4gIGdyaWRHYXA6ICdzcGFjZScsXG4gIGdyaWRDb2x1bW5HYXA6ICdzcGFjZScsXG4gIGdyaWRSb3dHYXA6ICdzcGFjZScsXG4gIGdhcDogJ3NwYWNlJyxcbiAgY29sdW1uR2FwOiAnc3BhY2UnLFxuICByb3dHYXA6ICdzcGFjZScsXG4gIGZvbnRGYW1pbHk6ICdmb250cycsXG4gIGZvbnRTaXplOiAnZm9udFNpemVzJyxcbiAgZm9udFdlaWdodDogJ2ZvbnRXZWlnaHRzJyxcbiAgbGluZUhlaWdodDogJ2xpbmVIZWlnaHRzJyxcbiAgbGV0dGVyU3BhY2luZzogJ2xldHRlclNwYWNpbmdzJyxcbiAgYm9yZGVyOiAnYm9yZGVycycsXG4gIGJvcmRlclRvcDogJ2JvcmRlcnMnLFxuICBib3JkZXJSaWdodDogJ2JvcmRlcnMnLFxuICBib3JkZXJCb3R0b206ICdib3JkZXJzJyxcbiAgYm9yZGVyTGVmdDogJ2JvcmRlcnMnLFxuICBib3JkZXJXaWR0aDogJ2JvcmRlcldpZHRocycsXG4gIGJvcmRlclN0eWxlOiAnYm9yZGVyU3R5bGVzJyxcbiAgYm9yZGVyUmFkaXVzOiAncmFkaWknLFxuICBib3JkZXJUb3BSaWdodFJhZGl1czogJ3JhZGlpJyxcbiAgYm9yZGVyVG9wTGVmdFJhZGl1czogJ3JhZGlpJyxcbiAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6ICdyYWRpaScsXG4gIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6ICdyYWRpaScsXG4gIGJvcmRlclRvcFdpZHRoOiAnYm9yZGVyV2lkdGhzJyxcbiAgYm9yZGVyVG9wQ29sb3I6ICdjb2xvcnMnLFxuICBib3JkZXJUb3BTdHlsZTogJ2JvcmRlclN0eWxlcycsXG4gIGJvcmRlckJvdHRvbVdpZHRoOiAnYm9yZGVyV2lkdGhzJyxcbiAgYm9yZGVyQm90dG9tQ29sb3I6ICdjb2xvcnMnLFxuICBib3JkZXJCb3R0b21TdHlsZTogJ2JvcmRlclN0eWxlcycsXG4gIGJvcmRlckxlZnRXaWR0aDogJ2JvcmRlcldpZHRocycsXG4gIGJvcmRlckxlZnRDb2xvcjogJ2NvbG9ycycsXG4gIGJvcmRlckxlZnRTdHlsZTogJ2JvcmRlclN0eWxlcycsXG4gIGJvcmRlclJpZ2h0V2lkdGg6ICdib3JkZXJXaWR0aHMnLFxuICBib3JkZXJSaWdodENvbG9yOiAnY29sb3JzJyxcbiAgYm9yZGVyUmlnaHRTdHlsZTogJ2JvcmRlclN0eWxlcycsXG4gIG91dGxpbmVDb2xvcjogJ2NvbG9ycycsXG4gIGJveFNoYWRvdzogJ3NoYWRvd3MnLFxuICB0ZXh0U2hhZG93OiAnc2hhZG93cycsXG4gIHpJbmRleDogJ3pJbmRpY2VzJyxcbiAgd2lkdGg6ICdzaXplcycsXG4gIG1pbldpZHRoOiAnc2l6ZXMnLFxuICBtYXhXaWR0aDogJ3NpemVzJyxcbiAgaGVpZ2h0OiAnc2l6ZXMnLFxuICBtaW5IZWlnaHQ6ICdzaXplcycsXG4gIG1heEhlaWdodDogJ3NpemVzJyxcbiAgZmxleEJhc2lzOiAnc2l6ZXMnLFxuICBzaXplOiAnc2l6ZXMnLFxuICAvLyBzdmdcbiAgZmlsbDogJ2NvbG9ycycsXG4gIHN0cm9rZTogJ2NvbG9ycydcbn07XG5cbnZhciBwb3NpdGl2ZU9yTmVnYXRpdmUgPSBmdW5jdGlvbiAoc2NhbGUsIHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdudW1iZXInIHx8IHZhbHVlID49IDApIHtcbiAgICByZXR1cm4gZ2V0KHNjYWxlLCB2YWx1ZSwgdmFsdWUpO1xuICB9XG5cbiAgdmFyIGFic29sdXRlID0gTWF0aC5hYnModmFsdWUpO1xuICB2YXIgbiA9IGdldChzY2FsZSwgYWJzb2x1dGUsIGFic29sdXRlKTtcbiAgaWYgKHR5cGVvZiBuID09PSAnc3RyaW5nJykgeyByZXR1cm4gJy0nICsgbjsgfVxuICByZXR1cm4gbiAqIC0xO1xufTtcblxudmFyIHRyYW5zZm9ybXMgPSBbJ21hcmdpbicsICdtYXJnaW5Ub3AnLCAnbWFyZ2luUmlnaHQnLCAnbWFyZ2luQm90dG9tJywgJ21hcmdpbkxlZnQnLCAnbWFyZ2luWCcsICdtYXJnaW5ZJywgJ3RvcCcsICdib3R0b20nLCAnbGVmdCcsICdyaWdodCddLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBjdXJyKSB7XG4gIHZhciBvYmo7XG5cbiAgcmV0dXJuIChPYmplY3QuYXNzaWduKHt9LCBhY2MsXG4gICggb2JqID0ge30sIG9ialtjdXJyXSA9IHBvc2l0aXZlT3JOZWdhdGl2ZSwgb2JqICkpKTtcbn0sIHt9KTtcblxudmFyIHJlc3BvbnNpdmUgPSBmdW5jdGlvbiAoc3R5bGVzKSB7IHJldHVybiBmdW5jdGlvbiAodGhlbWUpIHtcbiAgdmFyIG5leHQgPSB7fTtcbiAgdmFyIGJyZWFrcG9pbnRzID0gZ2V0KHRoZW1lLCAnYnJlYWtwb2ludHMnLCBkZWZhdWx0QnJlYWtwb2ludHMpO1xuICB2YXIgbWVkaWFRdWVyaWVzID0gW251bGwgXS5jb25jYXQoIGJyZWFrcG9pbnRzLm1hcChmdW5jdGlvbiAobikgeyByZXR1cm4gKFwiQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogXCIgKyBuICsgXCIpXCIpOyB9KSk7XG5cbiAgZm9yICh2YXIga2V5IGluIHN0eWxlcykge1xuICAgIHZhciB2YWx1ZSA9IHR5cGVvZiBzdHlsZXNba2V5XSA9PT0gJ2Z1bmN0aW9uJyA/IHN0eWxlc1trZXldKHRoZW1lKSA6IHN0eWxlc1trZXldO1xuICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7IGNvbnRpbnVlOyB9XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICBuZXh0W2tleV0gPSB2YWx1ZTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsdWUuc2xpY2UoMCwgbWVkaWFRdWVyaWVzLmxlbmd0aCkubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBtZWRpYSA9IG1lZGlhUXVlcmllc1tpXTtcblxuICAgICAgaWYgKCFtZWRpYSkge1xuICAgICAgICBuZXh0W2tleV0gPSB2YWx1ZVtpXTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIG5leHRbbWVkaWFdID0gbmV4dFttZWRpYV0gfHwge307XG4gICAgICBpZiAodmFsdWVbaV0gPT0gbnVsbCkgeyBjb250aW51ZTsgfVxuICAgICAgbmV4dFttZWRpYV1ba2V5XSA9IHZhbHVlW2ldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXh0O1xufTsgfTtcblxudmFyIGNzcyA9IGZ1bmN0aW9uIChhcmdzKSB7IHJldHVybiBmdW5jdGlvbiAocHJvcHMpIHtcbiAgaWYgKCBwcm9wcyA9PT0gdm9pZCAwICkgcHJvcHMgPSB7fTtcblxuICB2YXIgdGhlbWUgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0VGhlbWUsXG4gICAgKHByb3BzLnRoZW1lIHx8IHByb3BzKSk7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgdmFyIG9iaiA9IHR5cGVvZiBhcmdzID09PSAnZnVuY3Rpb24nID8gYXJncyh0aGVtZSkgOiBhcmdzO1xuICB2YXIgc3R5bGVzID0gcmVzcG9uc2l2ZShvYmopKHRoZW1lKTtcblxuICBmb3IgKHZhciBrZXkgaW4gc3R5bGVzKSB7XG4gICAgdmFyIHggPSBzdHlsZXNba2V5XTtcbiAgICB2YXIgdmFsID0gdHlwZW9mIHggPT09ICdmdW5jdGlvbicgPyB4KHRoZW1lKSA6IHg7XG5cbiAgICBpZiAoa2V5ID09PSAndmFyaWFudCcpIHtcbiAgICAgIHZhciB2YXJpYW50ID0gY3NzKGdldCh0aGVtZSwgdmFsKSkodGhlbWUpO1xuICAgICAgcmVzdWx0ID0gT2JqZWN0LmFzc2lnbih7fSwgcmVzdWx0LFxuICAgICAgICB2YXJpYW50KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICh2YWwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gY3NzKHZhbCkodGhlbWUpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgdmFyIHByb3AgPSBnZXQoYWxpYXNlcywga2V5LCBrZXkpO1xuICAgIHZhciBzY2FsZU5hbWUgPSBnZXQoc2NhbGVzLCBwcm9wKTtcbiAgICB2YXIgc2NhbGUgPSBnZXQodGhlbWUsIHNjYWxlTmFtZSwgZ2V0KHRoZW1lLCBwcm9wLCB7fSkpO1xuICAgIHZhciB0cmFuc2Zvcm0gPSBnZXQodHJhbnNmb3JtcywgcHJvcCwgZ2V0KTtcbiAgICB2YXIgdmFsdWUgPSB0cmFuc2Zvcm0oc2NhbGUsIHZhbCwgdmFsKTtcblxuICAgIGlmIChtdWx0aXBsZXNbcHJvcF0pIHtcbiAgICAgIHZhciBkaXJzID0gbXVsdGlwbGVzW3Byb3BdO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRpcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzdWx0W2RpcnNbaV1dID0gdmFsdWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtwcm9wXSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59OyB9O1xuXG5leHBvcnQgeyBnZXQsIGNzcyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXNtLmpzLm1hcFxuIiwiaW1wb3J0IHsganN4IH0gZnJvbSAnQHRoZW1lLXVpL2NvcmUnO1xuaW1wb3J0IHsgY3NzLCBnZXQgfSBmcm9tICdAdGhlbWUtdWkvY3NzJztcbmltcG9ydCAncmVhY3QnO1xuaW1wb3J0ICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IE1EWFByb3ZpZGVyLCB1c2VNRFhDb21wb25lbnRzIH0gZnJvbSAnQG1keC1qcy9yZWFjdCc7XG5cbnZhciB0YWdzID0gWydwJywgJ2InLCAnaScsICdhJywgJ2gxJywgJ2gyJywgJ2gzJywgJ2g0JywgJ2g1JywgJ2g2JywgJ2ltZycsICdwcmUnLCAnY29kZScsICdvbCcsICd1bCcsICdsaScsICdibG9ja3F1b3RlJywgJ2hyJywgJ2VtJywgJ3RhYmxlJywgJ3RyJywgJ3RoJywgJ3RkJywgJ2VtJywgJ3N0cm9uZycsICdkZWwnLCAvLyBtZHhcbidpbmxpbmVDb2RlJywgJ3RoZW1hdGljQnJlYWsnLCAvLyBvdGhlclxuJ2RpdicsIC8vIHRoZW1lLXVpXG4ncm9vdCddO1xudmFyIGFsaWFzZXMgPSB7XG4gIGlubGluZUNvZGU6ICdjb2RlJyxcbiAgdGhlbWF0aWNCcmVhazogJ2hyJyxcbiAgcm9vdDogJ2Rpdidcbn07XG5cbnZhciBhbGlhcyA9IGZ1bmN0aW9uIChuKSB7IHJldHVybiBhbGlhc2VzW25dIHx8IG47IH07XG5cbnZhciB0aGVtZWQgPSBmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBmdW5jdGlvbiAocHJvcHMpIHsgcmV0dXJuIGNzcyhnZXQocHJvcHMudGhlbWUsIChcInN0eWxlcy5cIiArIGtleSkpKShwcm9wcy50aGVtZSk7IH07IH07XG52YXIgU3R5bGVkID0gc3R5bGVkKCdkaXYnKSh0aGVtZWQoJ2RpdicpKTtcbnZhciBjb21wb25lbnRzID0ge307XG50YWdzLmZvckVhY2goZnVuY3Rpb24gKHRhZykge1xuICBjb21wb25lbnRzW3RhZ10gPSBzdHlsZWQoYWxpYXModGFnKSkodGhlbWVkKHRhZykpO1xuICBTdHlsZWRbdGFnXSA9IGNvbXBvbmVudHNbdGFnXTtcbn0pO1xuXG52YXIgY3JlYXRlQ29tcG9uZW50cyA9IGZ1bmN0aW9uIChjb21wcykge1xuICB2YXIgbmV4dCA9IE9iamVjdC5hc3NpZ24oe30sIGNvbXBvbmVudHMpO1xuICBPYmplY3Qua2V5cyhjb21wcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgbmV4dFtrZXldID0gc3R5bGVkKGNvbXBzW2tleV0pKHRoZW1lZChrZXkpKTtcbiAgfSk7XG4gIHJldHVybiBuZXh0O1xufTtcblxudmFyIE1EWFByb3ZpZGVyJDEgPSBmdW5jdGlvbiAocmVmKSB7XG4gIHZhciBjb21wb25lbnRzID0gcmVmLmNvbXBvbmVudHM7XG4gIHZhciBjaGlsZHJlbiA9IHJlZi5jaGlsZHJlbjtcblxuICB2YXIgb3V0ZXIgPSB1c2VNRFhDb21wb25lbnRzKCk7XG4gIHJldHVybiBqc3goTURYUHJvdmlkZXIsIHtcbiAgICBjb21wb25lbnRzOiBjcmVhdGVDb21wb25lbnRzKE9iamVjdC5hc3NpZ24oe30sIG91dGVyLFxuICAgICAgY29tcG9uZW50cykpLFxuICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICB9KTtcbn07XG5cbmV4cG9ydCB7IHRoZW1lZCwgU3R5bGVkLCBjb21wb25lbnRzLCBNRFhQcm92aWRlciQxIGFzIE1EWFByb3ZpZGVyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lc20uanMubWFwXG4iLCJpbXBvcnQgeyBqc3gsIHVzZVRoZW1lVUksIFRoZW1lUHJvdmlkZXIgfSBmcm9tICdAdGhlbWUtdWkvY29yZSc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAdGhlbWUtdWkvY3NzJztcbmltcG9ydCB7IENvbG9yTW9kZVByb3ZpZGVyIH0gZnJvbSAnQHRoZW1lLXVpL2NvbG9yLW1vZGVzJztcbmltcG9ydCB7IE1EWFByb3ZpZGVyIH0gZnJvbSAnQHRoZW1lLXVpL21keCc7XG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcblxudmFyIEJvZHlTdHlsZXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBqc3goR2xvYmFsLCB7XG4gIHN0eWxlczogZnVuY3Rpb24gKHRoZW1lKSB7XG4gICAgaWYgKHRoZW1lLnVzZUJvZHlTdHlsZXMgPT09IGZhbHNlIHx8IHRoZW1lLnN0eWxlcyAmJiAhdGhlbWUuc3R5bGVzLnJvb3QpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgdmFyIGJveFNpemluZyA9IHRoZW1lLnVzZUJvcmRlckJveCA9PT0gZmFsc2UgPyBudWxsIDogJ2JvcmRlci1ib3gnO1xuICAgIHJldHVybiBjc3Moe1xuICAgICAgJyonOiB7XG4gICAgICAgIGJveFNpemluZzogYm94U2l6aW5nXG4gICAgICB9LFxuICAgICAgYm9keToge1xuICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgIHZhcmlhbnQ6ICdzdHlsZXMucm9vdCdcbiAgICAgIH1cbiAgICB9KSh0aGVtZSk7XG4gIH1cbn0pOyB9O1xuXG52YXIgVGhlbWVQcm92aWRlciQxID0gZnVuY3Rpb24gKHJlZikge1xuICB2YXIgdGhlbWUgPSByZWYudGhlbWU7XG4gIHZhciBjb21wb25lbnRzID0gcmVmLmNvbXBvbmVudHM7XG4gIHZhciBjaGlsZHJlbiA9IHJlZi5jaGlsZHJlbjtcblxuICB2YXIgb3V0ZXIgPSB1c2VUaGVtZVVJKCk7XG5cbiAgaWYgKHR5cGVvZiBvdXRlci5zZXRDb2xvck1vZGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4ganN4KFRoZW1lUHJvdmlkZXIsIHtcbiAgICAgIHRoZW1lOiB0aGVtZVxuICAgIH0sIGpzeChNRFhQcm92aWRlciwge1xuICAgICAgY29tcG9uZW50czogY29tcG9uZW50cyxcbiAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgIH0pKTtcbiAgfVxuXG4gIHJldHVybiBqc3goVGhlbWVQcm92aWRlciwge1xuICAgIHRoZW1lOiB0aGVtZVxuICB9LCBqc3goQ29sb3JNb2RlUHJvdmlkZXIsIG51bGwsIGpzeChCb2R5U3R5bGVzKSwganN4KE1EWFByb3ZpZGVyLCB7XG4gICAgY29tcG9uZW50czogY29tcG9uZW50cyxcbiAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgfSkpKTtcbn07XG5cbmV4cG9ydCB7IFRoZW1lUHJvdmlkZXIkMSBhcyBUaGVtZVByb3ZpZGVyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lc20uanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpc01lcmdlYWJsZU9iamVjdCA9IGZ1bmN0aW9uIGlzTWVyZ2VhYmxlT2JqZWN0KHZhbHVlKSB7XG5cdHJldHVybiBpc05vbk51bGxPYmplY3QodmFsdWUpXG5cdFx0JiYgIWlzU3BlY2lhbCh2YWx1ZSlcbn07XG5cbmZ1bmN0aW9uIGlzTm9uTnVsbE9iamVjdCh2YWx1ZSkge1xuXHRyZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnXG59XG5cbmZ1bmN0aW9uIGlzU3BlY2lhbCh2YWx1ZSkge1xuXHR2YXIgc3RyaW5nVmFsdWUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuXG5cdHJldHVybiBzdHJpbmdWYWx1ZSA9PT0gJ1tvYmplY3QgUmVnRXhwXSdcblx0XHR8fCBzdHJpbmdWYWx1ZSA9PT0gJ1tvYmplY3QgRGF0ZV0nXG5cdFx0fHwgaXNSZWFjdEVsZW1lbnQodmFsdWUpXG59XG5cbi8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi9iNWFjOTYzZmI3OTFkMTI5OGU3ZjM5NjIzNjM4M2JjOTU1ZjkxNmMxL3NyYy9pc29tb3JwaGljL2NsYXNzaWMvZWxlbWVudC9SZWFjdEVsZW1lbnQuanMjTDIxLUwyNVxudmFyIGNhblVzZVN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBjYW5Vc2VTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XG5cbmZ1bmN0aW9uIGlzUmVhY3RFbGVtZW50KHZhbHVlKSB7XG5cdHJldHVybiB2YWx1ZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFXG59XG5cbmZ1bmN0aW9uIGVtcHR5VGFyZ2V0KHZhbCkge1xuXHRyZXR1cm4gQXJyYXkuaXNBcnJheSh2YWwpID8gW10gOiB7fVxufVxuXG5mdW5jdGlvbiBjbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZCh2YWx1ZSwgb3B0aW9ucykge1xuXHRyZXR1cm4gKG9wdGlvbnMuY2xvbmUgIT09IGZhbHNlICYmIG9wdGlvbnMuaXNNZXJnZWFibGVPYmplY3QodmFsdWUpKVxuXHRcdD8gZGVlcG1lcmdlKGVtcHR5VGFyZ2V0KHZhbHVlKSwgdmFsdWUsIG9wdGlvbnMpXG5cdFx0OiB2YWx1ZVxufVxuXG5mdW5jdGlvbiBkZWZhdWx0QXJyYXlNZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucykge1xuXHRyZXR1cm4gdGFyZ2V0LmNvbmNhdChzb3VyY2UpLm1hcChmdW5jdGlvbihlbGVtZW50KSB7XG5cdFx0cmV0dXJuIGNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkKGVsZW1lbnQsIG9wdGlvbnMpXG5cdH0pXG59XG5cbmZ1bmN0aW9uIGdldE1lcmdlRnVuY3Rpb24oa2V5LCBvcHRpb25zKSB7XG5cdGlmICghb3B0aW9ucy5jdXN0b21NZXJnZSkge1xuXHRcdHJldHVybiBkZWVwbWVyZ2Vcblx0fVxuXHR2YXIgY3VzdG9tTWVyZ2UgPSBvcHRpb25zLmN1c3RvbU1lcmdlKGtleSk7XG5cdHJldHVybiB0eXBlb2YgY3VzdG9tTWVyZ2UgPT09ICdmdW5jdGlvbicgPyBjdXN0b21NZXJnZSA6IGRlZXBtZXJnZVxufVxuXG5mdW5jdGlvbiBnZXRFbnVtZXJhYmxlT3duUHJvcGVydHlTeW1ib2xzKHRhcmdldCkge1xuXHRyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9sc1xuXHRcdD8gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyh0YXJnZXQpLmZpbHRlcihmdW5jdGlvbihzeW1ib2wpIHtcblx0XHRcdHJldHVybiBPYmplY3QucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh0YXJnZXQsIHN5bWJvbClcblx0XHR9KVxuXHRcdDogW11cbn1cblxuZnVuY3Rpb24gZ2V0S2V5cyh0YXJnZXQpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKHRhcmdldCkuY29uY2F0KGdldEVudW1lcmFibGVPd25Qcm9wZXJ0eVN5bWJvbHModGFyZ2V0KSlcbn1cblxuZnVuY3Rpb24gcHJvcGVydHlJc09uT2JqZWN0KG9iamVjdCwgcHJvcGVydHkpIHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gcHJvcGVydHkgaW4gb2JqZWN0XG5cdH0gY2F0Y2goXykge1xuXHRcdHJldHVybiBmYWxzZVxuXHR9XG59XG5cbi8vIFByb3RlY3RzIGZyb20gcHJvdG90eXBlIHBvaXNvbmluZyBhbmQgdW5leHBlY3RlZCBtZXJnaW5nIHVwIHRoZSBwcm90b3R5cGUgY2hhaW4uXG5mdW5jdGlvbiBwcm9wZXJ0eUlzVW5zYWZlKHRhcmdldCwga2V5KSB7XG5cdHJldHVybiBwcm9wZXJ0eUlzT25PYmplY3QodGFyZ2V0LCBrZXkpIC8vIFByb3BlcnRpZXMgYXJlIHNhZmUgdG8gbWVyZ2UgaWYgdGhleSBkb24ndCBleGlzdCBpbiB0aGUgdGFyZ2V0IHlldCxcblx0XHQmJiAhKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhcmdldCwga2V5KSAvLyB1bnNhZmUgaWYgdGhleSBleGlzdCB1cCB0aGUgcHJvdG90eXBlIGNoYWluLFxuXHRcdFx0JiYgT2JqZWN0LnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodGFyZ2V0LCBrZXkpKSAvLyBhbmQgYWxzbyB1bnNhZmUgaWYgdGhleSdyZSBub25lbnVtZXJhYmxlLlxufVxuXG5mdW5jdGlvbiBtZXJnZU9iamVjdCh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucykge1xuXHR2YXIgZGVzdGluYXRpb24gPSB7fTtcblx0aWYgKG9wdGlvbnMuaXNNZXJnZWFibGVPYmplY3QodGFyZ2V0KSkge1xuXHRcdGdldEtleXModGFyZ2V0KS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuXHRcdFx0ZGVzdGluYXRpb25ba2V5XSA9IGNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkKHRhcmdldFtrZXldLCBvcHRpb25zKTtcblx0XHR9KTtcblx0fVxuXHRnZXRLZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcblx0XHRpZiAocHJvcGVydHlJc1Vuc2FmZSh0YXJnZXQsIGtleSkpIHtcblx0XHRcdHJldHVyblxuXHRcdH1cblxuXHRcdGlmIChwcm9wZXJ0eUlzT25PYmplY3QodGFyZ2V0LCBrZXkpICYmIG9wdGlvbnMuaXNNZXJnZWFibGVPYmplY3Qoc291cmNlW2tleV0pKSB7XG5cdFx0XHRkZXN0aW5hdGlvbltrZXldID0gZ2V0TWVyZ2VGdW5jdGlvbihrZXksIG9wdGlvbnMpKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSwgb3B0aW9ucyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRlc3RpbmF0aW9uW2tleV0gPSBjbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZChzb3VyY2Vba2V5XSwgb3B0aW9ucyk7XG5cdFx0fVxuXHR9KTtcblx0cmV0dXJuIGRlc3RpbmF0aW9uXG59XG5cbmZ1bmN0aW9uIGRlZXBtZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucykge1xuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0b3B0aW9ucy5hcnJheU1lcmdlID0gb3B0aW9ucy5hcnJheU1lcmdlIHx8IGRlZmF1bHRBcnJheU1lcmdlO1xuXHRvcHRpb25zLmlzTWVyZ2VhYmxlT2JqZWN0ID0gb3B0aW9ucy5pc01lcmdlYWJsZU9iamVjdCB8fCBpc01lcmdlYWJsZU9iamVjdDtcblx0Ly8gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQgaXMgYWRkZWQgdG8gYG9wdGlvbnNgIHNvIHRoYXQgY3VzdG9tIGFycmF5TWVyZ2UoKVxuXHQvLyBpbXBsZW1lbnRhdGlvbnMgY2FuIHVzZSBpdC4gVGhlIGNhbGxlciBtYXkgbm90IHJlcGxhY2UgaXQuXG5cdG9wdGlvbnMuY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQgPSBjbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZDtcblxuXHR2YXIgc291cmNlSXNBcnJheSA9IEFycmF5LmlzQXJyYXkoc291cmNlKTtcblx0dmFyIHRhcmdldElzQXJyYXkgPSBBcnJheS5pc0FycmF5KHRhcmdldCk7XG5cdHZhciBzb3VyY2VBbmRUYXJnZXRUeXBlc01hdGNoID0gc291cmNlSXNBcnJheSA9PT0gdGFyZ2V0SXNBcnJheTtcblxuXHRpZiAoIXNvdXJjZUFuZFRhcmdldFR5cGVzTWF0Y2gpIHtcblx0XHRyZXR1cm4gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQoc291cmNlLCBvcHRpb25zKVxuXHR9IGVsc2UgaWYgKHNvdXJjZUlzQXJyYXkpIHtcblx0XHRyZXR1cm4gb3B0aW9ucy5hcnJheU1lcmdlKHRhcmdldCwgc291cmNlLCBvcHRpb25zKVxuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBtZXJnZU9iamVjdCh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucylcblx0fVxufVxuXG5kZWVwbWVyZ2UuYWxsID0gZnVuY3Rpb24gZGVlcG1lcmdlQWxsKGFycmF5LCBvcHRpb25zKSB7XG5cdGlmICghQXJyYXkuaXNBcnJheShhcnJheSkpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ2ZpcnN0IGFyZ3VtZW50IHNob3VsZCBiZSBhbiBhcnJheScpXG5cdH1cblxuXHRyZXR1cm4gYXJyYXkucmVkdWNlKGZ1bmN0aW9uKHByZXYsIG5leHQpIHtcblx0XHRyZXR1cm4gZGVlcG1lcmdlKHByZXYsIG5leHQsIG9wdGlvbnMpXG5cdH0sIHt9KVxufTtcblxudmFyIGRlZXBtZXJnZV8xID0gZGVlcG1lcmdlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZXBtZXJnZV8xO1xuIiwiaW1wb3J0IHsgY3JlYXRlU3R5bGVGdW5jdGlvbiwgY3JlYXRlUGFyc2VyIH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vY29yZSc7IC8vIHY0IGFwaSBzaGltc1xuXG5pbXBvcnQgbGF5b3V0IGZyb20gJ0BzdHlsZWQtc3lzdGVtL2xheW91dCc7XG5pbXBvcnQgY29sb3IgZnJvbSAnQHN0eWxlZC1zeXN0ZW0vY29sb3InO1xuaW1wb3J0IHR5cG9ncmFwaHkgZnJvbSAnQHN0eWxlZC1zeXN0ZW0vdHlwb2dyYXBoeSc7XG5pbXBvcnQgZmxleGJveCBmcm9tICdAc3R5bGVkLXN5c3RlbS9mbGV4Ym94JztcbmltcG9ydCBncmlkIGZyb20gJ0BzdHlsZWQtc3lzdGVtL2dyaWQnO1xuaW1wb3J0IGJvcmRlciBmcm9tICdAc3R5bGVkLXN5c3RlbS9ib3JkZXInO1xuaW1wb3J0IGJhY2tncm91bmQgZnJvbSAnQHN0eWxlZC1zeXN0ZW0vYmFja2dyb3VuZCc7XG5pbXBvcnQgcG9zaXRpb24gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vcG9zaXRpb24nO1xuZXhwb3J0IHsgZ2V0LCBjcmVhdGVQYXJzZXIsIGNyZWF0ZVN0eWxlRnVuY3Rpb24sIGNvbXBvc2UsIHN5c3RlbSB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL2NvcmUnO1xuZXhwb3J0IHsgbWFyZ2luLCBwYWRkaW5nLCBzcGFjZSB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL3NwYWNlJztcbmV4cG9ydCB7IGNvbG9yIH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vY29sb3InO1xuZXhwb3J0IHsgbGF5b3V0IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vbGF5b3V0JztcbmV4cG9ydCB7IHR5cG9ncmFwaHkgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS90eXBvZ3JhcGh5JztcbmV4cG9ydCB7IGZsZXhib3ggfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9mbGV4Ym94JztcbmV4cG9ydCB7IGJvcmRlciB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL2JvcmRlcic7XG5leHBvcnQgeyBiYWNrZ3JvdW5kIH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vYmFja2dyb3VuZCc7XG5leHBvcnQgeyBwb3NpdGlvbiB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL3Bvc2l0aW9uJztcbmV4cG9ydCB7IGdyaWQgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9ncmlkJztcbmV4cG9ydCB7IHNoYWRvdyB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL3NoYWRvdyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGJveFNoYWRvdywgZGVmYXVsdCBhcyB0ZXh0U2hhZG93IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vc2hhZG93JztcbmV4cG9ydCB7IHZhcmlhbnQsIGJ1dHRvblN0eWxlLCB0ZXh0U3R5bGUsIGNvbG9yU3R5bGUgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS92YXJpYW50JztcbnZhciB3aWR0aCA9IGxheW91dC53aWR0aCxcbiAgICBoZWlnaHQgPSBsYXlvdXQuaGVpZ2h0LFxuICAgIG1pbldpZHRoID0gbGF5b3V0Lm1pbldpZHRoLFxuICAgIG1pbkhlaWdodCA9IGxheW91dC5taW5IZWlnaHQsXG4gICAgbWF4V2lkdGggPSBsYXlvdXQubWF4V2lkdGgsXG4gICAgbWF4SGVpZ2h0ID0gbGF5b3V0Lm1heEhlaWdodCxcbiAgICBzaXplID0gbGF5b3V0LnNpemUsXG4gICAgdmVydGljYWxBbGlnbiA9IGxheW91dC52ZXJ0aWNhbEFsaWduLFxuICAgIGRpc3BsYXkgPSBsYXlvdXQuZGlzcGxheSxcbiAgICBvdmVyZmxvdyA9IGxheW91dC5vdmVyZmxvdyxcbiAgICBvdmVyZmxvd1ggPSBsYXlvdXQub3ZlcmZsb3dYLFxuICAgIG92ZXJmbG93WSA9IGxheW91dC5vdmVyZmxvd1k7XG52YXIgb3BhY2l0eSA9IGNvbG9yLm9wYWNpdHk7XG52YXIgZm9udFNpemUgPSB0eXBvZ3JhcGh5LmZvbnRTaXplLFxuICAgIGZvbnRGYW1pbHkgPSB0eXBvZ3JhcGh5LmZvbnRGYW1pbHksXG4gICAgZm9udFdlaWdodCA9IHR5cG9ncmFwaHkuZm9udFdlaWdodCxcbiAgICBsaW5lSGVpZ2h0ID0gdHlwb2dyYXBoeS5saW5lSGVpZ2h0LFxuICAgIHRleHRBbGlnbiA9IHR5cG9ncmFwaHkudGV4dEFsaWduLFxuICAgIGZvbnRTdHlsZSA9IHR5cG9ncmFwaHkuZm9udFN0eWxlLFxuICAgIGxldHRlclNwYWNpbmcgPSB0eXBvZ3JhcGh5LmxldHRlclNwYWNpbmc7XG52YXIgYWxpZ25JdGVtcyA9IGZsZXhib3guYWxpZ25JdGVtcyxcbiAgICBhbGlnbkNvbnRlbnQgPSBmbGV4Ym94LmFsaWduQ29udGVudCxcbiAgICBqdXN0aWZ5SXRlbXMgPSBmbGV4Ym94Lmp1c3RpZnlJdGVtcyxcbiAgICBqdXN0aWZ5Q29udGVudCA9IGZsZXhib3guanVzdGlmeUNvbnRlbnQsXG4gICAgZmxleFdyYXAgPSBmbGV4Ym94LmZsZXhXcmFwLFxuICAgIGZsZXhEaXJlY3Rpb24gPSBmbGV4Ym94LmZsZXhEaXJlY3Rpb24sXG4gICAgZmxleCA9IGZsZXhib3guZmxleCxcbiAgICBmbGV4R3JvdyA9IGZsZXhib3guZmxleEdyb3csXG4gICAgZmxleFNocmluayA9IGZsZXhib3guZmxleFNocmluayxcbiAgICBmbGV4QmFzaXMgPSBmbGV4Ym94LmZsZXhCYXNpcyxcbiAgICBqdXN0aWZ5U2VsZiA9IGZsZXhib3guanVzdGlmeVNlbGYsXG4gICAgYWxpZ25TZWxmID0gZmxleGJveC5hbGlnblNlbGYsXG4gICAgb3JkZXIgPSBmbGV4Ym94Lm9yZGVyO1xudmFyIGdyaWRHYXAgPSBncmlkLmdyaWRHYXAsXG4gICAgZ3JpZENvbHVtbkdhcCA9IGdyaWQuZ3JpZENvbHVtbkdhcCxcbiAgICBncmlkUm93R2FwID0gZ3JpZC5ncmlkUm93R2FwLFxuICAgIGdyaWRDb2x1bW4gPSBncmlkLmdyaWRDb2x1bW4sXG4gICAgZ3JpZFJvdyA9IGdyaWQuZ3JpZFJvdyxcbiAgICBncmlkQXV0b0Zsb3cgPSBncmlkLmdyaWRBdXRvRmxvdyxcbiAgICBncmlkQXV0b0NvbHVtbnMgPSBncmlkLmdyaWRBdXRvQ29sdW1ucyxcbiAgICBncmlkQXV0b1Jvd3MgPSBncmlkLmdyaWRBdXRvUm93cyxcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zID0gZ3JpZC5ncmlkVGVtcGxhdGVDb2x1bW5zLFxuICAgIGdyaWRUZW1wbGF0ZVJvd3MgPSBncmlkLmdyaWRUZW1wbGF0ZVJvd3MsXG4gICAgZ3JpZFRlbXBsYXRlQXJlYXMgPSBncmlkLmdyaWRUZW1wbGF0ZUFyZWFzLFxuICAgIGdyaWRBcmVhID0gZ3JpZC5ncmlkQXJlYTtcbnZhciBib3JkZXJXaWR0aCA9IGJvcmRlci5ib3JkZXJXaWR0aCxcbiAgICBib3JkZXJTdHlsZSA9IGJvcmRlci5ib3JkZXJTdHlsZSxcbiAgICBib3JkZXJDb2xvciA9IGJvcmRlci5ib3JkZXJDb2xvcixcbiAgICBib3JkZXJUb3AgPSBib3JkZXIuYm9yZGVyVG9wLFxuICAgIGJvcmRlclJpZ2h0ID0gYm9yZGVyLmJvcmRlclJpZ2h0LFxuICAgIGJvcmRlckJvdHRvbSA9IGJvcmRlci5ib3JkZXJCb3R0b20sXG4gICAgYm9yZGVyTGVmdCA9IGJvcmRlci5ib3JkZXJMZWZ0LFxuICAgIGJvcmRlclJhZGl1cyA9IGJvcmRlci5ib3JkZXJSYWRpdXM7XG52YXIgYmFja2dyb3VuZEltYWdlID0gYmFja2dyb3VuZC5iYWNrZ3JvdW5kSW1hZ2UsXG4gICAgYmFja2dyb3VuZFNpemUgPSBiYWNrZ3JvdW5kLmJhY2tncm91bmRTaXplLFxuICAgIGJhY2tncm91bmRQb3NpdGlvbiA9IGJhY2tncm91bmQuYmFja2dyb3VuZFBvc2l0aW9uLFxuICAgIGJhY2tncm91bmRSZXBlYXQgPSBiYWNrZ3JvdW5kLmJhY2tncm91bmRSZXBlYXQ7XG52YXIgekluZGV4ID0gcG9zaXRpb24uekluZGV4LFxuICAgIHRvcCA9IHBvc2l0aW9uLnRvcCxcbiAgICByaWdodCA9IHBvc2l0aW9uLnJpZ2h0LFxuICAgIGJvdHRvbSA9IHBvc2l0aW9uLmJvdHRvbSxcbiAgICBsZWZ0ID0gcG9zaXRpb24ubGVmdDtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYm9yZGVycyB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL2JvcmRlcic7XG5leHBvcnQgeyB3aWR0aCwgaGVpZ2h0LCBtaW5XaWR0aCwgbWluSGVpZ2h0LCBtYXhXaWR0aCwgbWF4SGVpZ2h0LCBzaXplLCB2ZXJ0aWNhbEFsaWduLCBkaXNwbGF5LCBvdmVyZmxvdywgb3ZlcmZsb3dYLCBvdmVyZmxvd1kgLy8gY29sb3Jcbiwgb3BhY2l0eSAvLyB0eXBvZ3JhcGh5XG4sIGZvbnRTaXplLCBmb250RmFtaWx5LCBmb250V2VpZ2h0LCBsaW5lSGVpZ2h0LCB0ZXh0QWxpZ24sIGZvbnRTdHlsZSwgbGV0dGVyU3BhY2luZyAvLyBmbGV4Ym94XG4sIGFsaWduSXRlbXMsIGFsaWduQ29udGVudCwganVzdGlmeUl0ZW1zLCBqdXN0aWZ5Q29udGVudCwgZmxleFdyYXAsIGZsZXhEaXJlY3Rpb24sIGZsZXgsIGZsZXhHcm93LCBmbGV4U2hyaW5rLCBmbGV4QmFzaXMsIGp1c3RpZnlTZWxmLCBhbGlnblNlbGYsIG9yZGVyIC8vIGdyaWRcbiwgZ3JpZEdhcCwgZ3JpZENvbHVtbkdhcCwgZ3JpZFJvd0dhcCwgZ3JpZENvbHVtbiwgZ3JpZFJvdywgZ3JpZEF1dG9GbG93LCBncmlkQXV0b0NvbHVtbnMsIGdyaWRBdXRvUm93cywgZ3JpZFRlbXBsYXRlQ29sdW1ucywgZ3JpZFRlbXBsYXRlUm93cywgZ3JpZFRlbXBsYXRlQXJlYXMsIGdyaWRBcmVhIC8vIGJvcmRlclxuLCBib3JkZXJXaWR0aCwgYm9yZGVyU3R5bGUsIGJvcmRlckNvbG9yLCBib3JkZXJUb3AsIGJvcmRlclJpZ2h0LCBib3JkZXJCb3R0b20sIGJvcmRlckxlZnQsIGJvcmRlclJhZGl1cyAvLyBiYWNrZ3JvdW5kXG4sIGJhY2tncm91bmRJbWFnZSwgYmFja2dyb3VuZFNpemUsIGJhY2tncm91bmRQb3NpdGlvbiwgYmFja2dyb3VuZFJlcGVhdCAvLyBwb3NpdGlvblxuLCB6SW5kZXgsIHRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdCB9OyAvLyB2NCBzdHlsZSBBUEkgc2hpbVxuXG5leHBvcnQgdmFyIHN0eWxlID0gZnVuY3Rpb24gc3R5bGUoX3JlZikge1xuICB2YXIgcHJvcCA9IF9yZWYucHJvcCxcbiAgICAgIGNzc1Byb3BlcnR5ID0gX3JlZi5jc3NQcm9wZXJ0eSxcbiAgICAgIGFsaWFzID0gX3JlZi5hbGlhcyxcbiAgICAgIGtleSA9IF9yZWYua2V5LFxuICAgICAgdHJhbnNmb3JtVmFsdWUgPSBfcmVmLnRyYW5zZm9ybVZhbHVlLFxuICAgICAgc2NhbGUgPSBfcmVmLnNjYWxlLFxuICAgICAgcHJvcGVydGllcyA9IF9yZWYucHJvcGVydGllcztcbiAgdmFyIGNvbmZpZyA9IHt9O1xuICBjb25maWdbcHJvcF0gPSBjcmVhdGVTdHlsZUZ1bmN0aW9uKHtcbiAgICBwcm9wZXJ0aWVzOiBwcm9wZXJ0aWVzLFxuICAgIHByb3BlcnR5OiBjc3NQcm9wZXJ0eSB8fCBwcm9wLFxuICAgIHNjYWxlOiBrZXksXG4gICAgZGVmYXVsdFNjYWxlOiBzY2FsZSxcbiAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybVZhbHVlXG4gIH0pO1xuICBpZiAoYWxpYXMpIGNvbmZpZ1thbGlhc10gPSBjb25maWdbcHJvcF07XG4gIHZhciBwYXJzZSA9IGNyZWF0ZVBhcnNlcihjb25maWcpO1xuICByZXR1cm4gcGFyc2U7XG59O1xuIiwiaW1wb3J0IHsganN4IH0gZnJvbSAnQHRoZW1lLXVpL2NvcmUnO1xuZXhwb3J0IHsganN4LCBDb250ZXh0LCBtZXJnZSwgdXNlVGhlbWVVSSB9IGZyb20gJ0B0aGVtZS11aS9jb3JlJztcbmV4cG9ydCB7IHVzZUNvbG9yTW9kZSwgSW5pdGlhbGl6ZUNvbG9yTW9kZSB9IGZyb20gJ0B0aGVtZS11aS9jb2xvci1tb2Rlcyc7XG5leHBvcnQgeyBTdHlsZWQsIGNvbXBvbmVudHMgfSBmcm9tICdAdGhlbWUtdWkvbWR4JztcbmV4cG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdAdGhlbWUtdWkvdGhlbWUtcHJvdmlkZXInO1xuZXhwb3J0ICogZnJvbSAnQHRoZW1lLXVpL2NvbXBvbmVudHMnO1xuZXhwb3J0IHsgY3NzLCBnZXQgfSBmcm9tICdAdGhlbWUtdWkvY3NzJztcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTtcbiAgICBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTtcbiAgICB9KTtcbiAgICBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7XG4gIH1cblxuICByZXR1cm4ga2V5cztcbn1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZDIodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG5cbiAgICBpZiAoaSAlIDIpIHtcbiAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbnZhciBCYXNlU3R5bGVzID0gZnVuY3Rpb24gQmFzZVN0eWxlcyhwcm9wcykge1xuICByZXR1cm4ganN4KCdkaXYnLCBfb2JqZWN0U3ByZWFkMih7fSwgcHJvcHMsIHtcbiAgICBzeDoge1xuICAgICAgZm9udEZhbWlseTogJ2JvZHknLFxuICAgICAgbGluZUhlaWdodDogJ2JvZHknLFxuICAgICAgZm9udFdlaWdodDogJ2JvZHknLFxuICAgICAgdmFyaWFudDogJ3N0eWxlcydcbiAgICB9XG4gIH0pKTtcbn07XG5cbmV4cG9ydCB7IEJhc2VTdHlsZXMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzbS5qcy5tYXBcbiIsImV4cG9ydCBkZWZhdWx0IFwiL19uZXh0L3N0YXRpYy9tZWRpYS9wYXJ0bmVyLmU2ZTQ0NGRjNTBjNmFjYmYxN2NmMDdmNGI1MzJkOTkyLnBuZ1wiOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEltYWdlIGFzIEltZyB9IGZyb20gJ3RoZW1lLXVpJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWFnZSh7IHNyYywgLi4ucmVzdCB9KSB7XG4gIHJldHVybiA8SW1nIHNyYz17c3JjfSB7Li4ucmVzdH0gLz5cbn1cbiIsIi8qKiBAanN4IGpzeCAqL1xuXG5pbXBvcnQgeyBqc3gsIEJveCwgSGVhZGluZywgVGV4dCwgQnV0dG9uLCBMaW5rIH0gZnJvbSAndGhlbWUtdWknXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRleHRGZWF0dXJlKHtcbiAgc3ViVGl0bGUsXG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgYnRuTmFtZSxcbiAgYnRuVVJMID0gJyMnLFxufSkge1xuICByZXR1cm4gKFxuICAgIDxCb3ggc3g9e3N0eWxlcy5jYXJkfT5cbiAgICAgIDxCb3ggc3g9e3N0eWxlcy53cmFwcGVyfT5cbiAgICAgICAgPFRleHQgYXM9XCJwXCIgc3g9e3N0eWxlcy53cmFwcGVyLnN1YlRpdGxlfT5cbiAgICAgICAgICB7c3ViVGl0bGV9XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAgPEhlYWRpbmcgYXM9XCJoMlwiIHN4PXtzdHlsZXMud3JhcHBlci50aXRsZX0+XG4gICAgICAgICAge3RpdGxlfVxuICAgICAgICA8L0hlYWRpbmc+XG4gICAgICA8L0JveD5cblxuICAgICAge2Rlc2NyaXB0aW9uICYmIChcbiAgICAgICAgPFRleHQgYXM9XCJwXCIgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIiBzeD17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICB7ZGVzY3JpcHRpb259XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICl9XG5cbiAgICAgIHtidG5OYW1lICYmIChcbiAgICAgICAgPExpbmsgaHJlZj17YnRuVVJMfSB2YXJpYW50PVwiZGVmYXVsdFwiPlxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBhcmlhLWxhYmVsPXtidG5OYW1lfT5cbiAgICAgICAgICAgIHtidG5OYW1lfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0xpbms+XG4gICAgICApfVxuICAgIDwvQm94PlxuICApXG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgY2FyZDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgZmxleFNocmluazogMCxcbiAgICBhOiB7XG4gICAgICBtOiBbJzAgYXV0bycsIG51bGwsIG51bGwsIDBdLFxuICAgIH0sXG4gIH0sXG4gIHdyYXBwZXI6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBtdDogJy01cHgnLFxuICAgIHRpdGxlOiB7XG4gICAgICBmb250U2l6ZTogWycyNHB4JywgbnVsbCwgJzI4cHgnLCAnMzJweCcsICczNnB4JywgJzQycHgnLCBudWxsLCAnNDZweCddLFxuICAgICAgY29sb3I6ICdoZWFkaW5nX3NlY29uZGFyeScsXG4gICAgICBsaW5lSGVpZ2h0OiBbMS4zNSwgbnVsbCwgbnVsbCwgMS4zLCAxLjJdLFxuICAgICAgZm9udFdlaWdodDogJzcwMCcsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnLS41cHgnLFxuICAgICAgbWI6IDUsXG4gICAgfSxcblxuICAgIHN1YlRpdGxlOiB7XG4gICAgICBmb250U2l6ZTogWzAsIG51bGwsICcxNHB4J10sXG4gICAgICBjb2xvcjogJ2hlYWRpbmcnLFxuICAgICAgbGV0dGVyU3BhY2luZzogJzJweCcsXG4gICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgICAgIGZvbnRXZWlnaHQ6ICc3MDAnLFxuICAgICAgbWI6IFsyLCBudWxsLCBudWxsLCBudWxsLCAzXSxcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNSxcbiAgICB9LFxuICB9LFxuICBkZXNjcmlwdGlvbjoge1xuICAgIGZvbnRTaXplOiBbJzE1cHgnLCAyLCBudWxsLCBudWxsLCBudWxsLCAnMTdweCcsIG51bGwsIDNdLFxuICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICBsaW5lSGVpZ2h0OiBbMS44NSwgbnVsbCwgbnVsbCwgMiwgbnVsbCwgJzIuMiddLFxuICAgIGNvbG9yOiAndGV4dF9zZWNvbmRhcnknLFxuICAgIG1iOiAnMzBweCcsXG4gIH0sXG59XG4iLCIvKiogQGpzeCBqc3ggKi9cblxuaW1wb3J0IHsganN4LCBDb250YWluZXIsIEJveCB9IGZyb20gJ3RoZW1lLXVpJ1xuaW1wb3J0IFRleHRGZWF0dXJlIGZyb20gJ0AvY29tcG9uZW50cy90ZXh0LWZlYXR1cmUnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnQC9jb21wb25lbnRzL2ltYWdlJ1xuXG5pbXBvcnQgUGFydG5lciBmcm9tICdAL2Fzc2V0cy9wYXJ0bmVyLnBuZydcblxuY29uc3QgZGF0YSA9IHtcbiAgc3ViVGl0bGU6ICdDb3JlIGZlYXR1cmVzJyxcbiAgdGl0bGU6ICdTbWFydCBKYWNrcG90cyB0aGF0IHlvdSBtYXkgbG92ZSB0aGlzIGFueXRpbWUgJiBhbnl3aGVyZScsXG4gIGRlc2NyaXB0aW9uOlxuICAgICdHZXQgeW91ciB0ZXN0cyBkZWxpdmVyZWQgYXQgbGV0IGhvbWUgY29sbGVjdCBzYW1wbGUgZnJvbSB0aGUgdmljdG9yeSBvZiB0aGUgbWFuYWdlbWVudHMgdGhhdCBzdXBwbGllcyBiZXN0IGRlc2lnbiBzeXN0ZW0gZ3VpZGVsaW5lcyBldmVyLiBHZXQgeW91ciB0ZXN0cyBkZWxpdmVyZWQgYXQgbGV0IGhvbWUgY29sbGVjdCBzYW1wbGUuJyxcbiAgYnRuTmFtZTogJ0dldCBTdGFydGVkJyxcbiAgYnRuVVJMOiAnIycsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhcnRuZXJTZWN0aW9uKCkge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIHN4PXt7IHZhcmlhbnQ6ICdzZWN0aW9uLnBhcnRuZXInIH19PlxuICAgICAgPENvbnRhaW5lciBzeD17c3R5bGVzLmNvbnRhaW5lckJveH0+XG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jb250ZW50Qm94fT5cbiAgICAgICAgICA8VGV4dEZlYXR1cmVcbiAgICAgICAgICAgIHN1YlRpdGxlPXtkYXRhLnN1YlRpdGxlfVxuICAgICAgICAgICAgdGl0bGU9e2RhdGEudGl0bGV9XG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17ZGF0YS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIGJ0bk5hbWU9e2RhdGEuYnRuTmFtZX1cbiAgICAgICAgICAgIGJ0blVSTD17ZGF0YS5idG5VUkx9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3ggc3g9e3sgcHg6IFswLCBudWxsLCAnNDBweCcsIDBdIH19PlxuICAgICAgICAgIDxJbWFnZSBzcmM9e1BhcnRuZXJ9IGFsdD1cIlBhcnRuZXJcIiB3aWR0aD1cIjc5NFwiIGhlaWdodD1cIjU0NFwiIC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgY29udGFpbmVyQm94OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgZmxleFdyYXA6IFsnd3JhcCcsIG51bGwsIG51bGwsICdub3dyYXAnXSxcbiAgfSxcbiAgY29udGVudEJveDoge1xuICAgICdmbGV4U2hyaW5rJzogMCxcbiAgICAncHgnOiBbMCwgbnVsbCwgJzMwcHgnLCAwXSxcbiAgICAndGV4dEFsaWduJzogWydjZW50ZXInLCBudWxsLCBudWxsLCAnbGVmdCddLFxuICAgICd3aWR0aCc6IFsnMTAwJScsIDQ1MCwgNTUwLCAnMzUwcHgnLCAnNDEwcHgnLCAnNDg1cHgnXSxcbiAgICAnbXgnOiAnYXV0bycsXG4gICAgJ3BiJzogWyczMHB4JywgbnVsbCwgbnVsbCwgMF0sXG4gICAgJy5kZXNjcmlwdGlvbic6IHtcbiAgICAgIHByOiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgNF0sXG4gICAgfSxcbiAgfSxcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=