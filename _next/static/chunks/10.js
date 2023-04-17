(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[10],{

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

/***/ "./src/assets/key-feature/editing.svg":
/*!********************************************!*\
  !*** ./src/assets/key-feature/editing.svg ***!
  \********************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgEditing; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path, _path2, _defs;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function SvgEditing(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 110,
    height: 110,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    opacity: 0.09,
    d: "M75 0H35C15.67 0 0 15.67 0 35v40c0 19.33 15.67 35 35 35h40c19.33 0 35-15.67 35-35V35c0-19.33-15.67-35-35-35z",
    fill: "#2563FF"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fill: "url(#editing_svg__pattern0)",
    d: "M32 32h46v46H32z"
  })), _defs || (_defs = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("pattern", {
    id: "editing_svg__pattern0",
    patternContentUnits: "objectBoundingBox",
    width: 1,
    height: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("use", {
    xlinkHref: "#editing_svg__image0",
    transform: "scale(.02174)"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("image", {
    id: "editing_svg__image0",
    width: 46,
    height: 46,
    xlinkHref: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAABHNCSVQICAgIfAhkiAAABNJJREFUaIHt2WuoXcUVB/DfObm+qoiKWnzUB3gnRktBpaaUfqgKaowaRVExWNE7ShWbKKmmFvqtHxSUxvhAcdQgiiBEa33EZ3wgVFtfVKxl1A8afAUt8UHV1uT0w94nd+fcfe4995x7ckH8w4a115o18z9z1qw9a6bRarWEaHcswxnYHk/g2py8bhYRon1KXiegiYdwXU7ebYyOtfYoFUd2+P0bC3Lyt63KtkSI5uMuHNRhehsnjOC3JpKG3bAyRL8fIr8NOXmli+14E0krdX9sjI613sV+Q6M2OVpYlpM/dRpC1MRVuLzG7/0RRUzPFhoqkxain+AcLM/JJlwRohau6PDbZkSxEBd36Xgdbu+D0IH4VSk/i2e6tFuPu0vSh2M1DsDuIbogJ9/mZHmIvsEfKn7vNEbHWofiOUVMd+LcnNw5XdYhOhIvlq9X5uSqKdofjKewd0V9W05ipc3Vxmf+lGZO3sBCPF9xegfn90O6xE4VedJQDNE8rOkgDWMhurX9kpPlWKFYEw+MlMoXQvS7CvlVObmjT9I9I0Q/xl8U4VGHGKL/YUkZNpe1Dc1Ko20r8sjM09wSIToEf1ash8lwEVaFuCWn6ktjhrl1RYjm4hHs36PL69hUVQxrZudU5Oq/KkRH4H78qMe+Yk5u61Q261rOAD6pyF+0hXKmV+ud9NI60gxpxnPyaohOVyy6O9mc8h7XO+klObm+9F2EnXFXTloMcRHmZHVbLlPeI3onfUlObix9D1csYop/cg3DC5XNKFPew7qnvE78pk26RPXDuE9bGGraC9EoHq0OOAlauDQnN3Toq9lkY1sY9ox/hn/22DbmZGWvHQ+FeIh2hJysV1RV3TZZbSzNaXqbuRknXqa8v4foYsjJBpyk2CXWYel0ZrqNbsS/mW5HEKIf4jHMw3UhuhBy8iVONnHml/RA+j91ym6Lc36IzuuB60c5FempxGLjn/ER3Byi7XOyMiefh+hUxQfoaFumvOOxV5cx5k2H+KLymRIhOjMn95avZ3eYG1gRok05uSEnG0K0GD/PyX2l/3Fs8eN7wkykw1ZJYC4OrbE3cH2INuLmnHxEQbrqP110I/5A+UyFD3PyaCkfY/Ki4SY8jX9VlTl5PEQLTB4qEwrmbsRf7KOQOGsK+2V4q85Q+fETEKKfmQbx7aYg0dn5IvyixvQpXsKKychNgR/UKQeO8RAtxD3GC5EvFBuqB7E2Jx8OOkYdBiIeogNxL3YoVStxTU7WDUpsKgw64xuNb3xuycnStiFEe2PPnLw24Bi1GOiTn5P3MB/H5OTXbX2I9sNf8XKIE3L7jGDgGM/Jm3izQz3X+NHaIYOOUYdhbWs3VuRvhzHA0CugYeF74lsb3wni1Q17X4XEkFDl9XVbaEKI9mf8JBSnheiorUSsK8rzmOod1IXlOYtmeSW3RlHUtnEEngjRsX2O+VVF/m8/HYQoKOrUkyrqX+LJEP10BFeqL4/m4JoQXdrHuIdV5LkhOrqPPpZhjxr9rri6MTrWWod9++h4NrG+iW1mm0UfmDOi2Dt3q+gzk188DRHnqy9OIDdGx1qjWKs+XE7NafNJ6VZFeef5LHbpMH2FE5s5eQsLFEe5HyjuHp/HKbNFGnLyDxyrOFP/AB8rs0xO1v4fJ5NM9PJxOEkAAAAASUVORK5CYII="
  }))));
}
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEwIiBoZWlnaHQ9IjExMCIgdmlld0JveD0iMCAwIDExMCAxMTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgo8cGF0aCBvcGFjaXR5PSIwLjA5IiBkPSJNNzUgMEgzNUMxNS42NyAwIDAgMTUuNjcgMCAzNVY3NUMwIDk0LjMzIDE1LjY3IDExMCAzNSAxMTBINzVDOTQuMzMgMTEwIDExMCA5NC4zMyAxMTAgNzVWMzVDMTEwIDE1LjY3IDk0LjMzIDAgNzUgMFoiIGZpbGw9IiMyNTYzRkYiLz4KPHJlY3QgeD0iMzIiIHk9IjMyIiB3aWR0aD0iNDYiIGhlaWdodD0iNDYiIGZpbGw9InVybCgjcGF0dGVybjApIi8+CjxkZWZzPgo8cGF0dGVybiBpZD0icGF0dGVybjAiIHBhdHRlcm5Db250ZW50VW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiB3aWR0aD0iMSIgaGVpZ2h0PSIxIj4KPHVzZSB4bGluazpocmVmPSIjaW1hZ2UwIiB0cmFuc2Zvcm09InNjYWxlKDAuMDIxNzM5MSkiLz4KPC9wYXR0ZXJuPgo8aW1hZ2UgaWQ9ImltYWdlMCIgd2lkdGg9IjQ2IiBoZWlnaHQ9IjQ2IiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUM0QUFBQXVDQVlBQUFCWHVTczNBQUFBQkhOQ1NWUUlDQWdJZkFoa2lBQUFCTkpKUkVGVWFJSHQyV3VvWGNVVkIvRGZPYm0rcW9pS1duelVCM2duUmt0QnBhYVVmcWdLYW93YVJWRXhXTkU3U2hXYktLbW1GdnF0SHhTVXh2aEFjZFFnaWlCRWEzM0VaM3dnVkZ0ZlZLeGwxQThhZkFVdDhVSFYxdVQwdzk0bmQrZmNmZTQ5OTV4N2NrSDh3NGExMTVvMTh6OXoxcXc5YTZiUmFyV0VhSGNzd3huWUhrL2cycHk4YmhZUm9uMUtYaWVnaVlkd1hVN2ViWXlPdGZZb0ZVZDIrUDBiQzNMeXQ2M0t0a1NJNXVNdUhOUmhlaHNuak9DM0pwS0czYkF5Ukw4ZklyOE5PWG1saSsxNEUwa3JkWDlzakk2MTNzVitRNk0yT1ZwWWxwTS9kUnBDMU1SVnVMekc3LzBSUlV6UEZob3FreGFpbitBY0xNL0pKbHdSb2hhdTZQRGJaa1N4RUJkMzZYZ2RidStEMElINFZTay9pMmU2dEZ1UHUwdlNoMk0xRHNEdUlib2dKOS9tWkhtSXZzRWZLbjd2TkViSFdvZmlPVVZNZCtMY25OdzVYZFloT2hJdmxxOVg1dVNxS2RvZmpLZXdkMFY5VzA1aXBjM1Z4bWYrbEdaTzNzQkNQRjl4ZWdmbjkwTzZ4RTRWZWRKUURORThyT2tnRFdNaHVyWDlrcFBsV0tGWUV3K01sTW9YUXZTN0N2bFZPYm1qVDlJOUkwUS94bDhVNFZHSEdLTC9ZVWtaTnBlMURjMUtvMjByOHNqTTA5d1NJVG9FZjFhc2g4bHdFVmFGdUNXbjZrdGpocmwxUllqbTRoSHMzNlBMNjloVVZReHJadWRVNU9xL0trUkg0SDc4cU1lK1lrNXU2MVEyNjFyT0FENnB5RiswaFhLbVYrdWQ5Tkk2MGd4cHhuUHlhb2hPVnl5Nk85bWM4aDdYTytrbE9ibSs5RjJFblhGWFRsb01jUkhtWkhWYkxsUGVJM29uZlVsT2JpeDlEMWNzWW9wL2NnM0RDNVhOS0ZQZXc3cW52RTc4cGsyNlJQWER1RTliR0dyYUM5RW9IcTBPT0FsYXVEUW5OM1RvcTlsa1kxc1k5b3gvaG4vMjJEYm1aR1d2SFErRmVJaDJoSnlzVjFSVjNUWlpiU3pOYVhxYnVSa25YcWE4djRmb1lzakpCcHlrMkNYV1llbDBacnFOYnNTL21XNUhFS0lmNGpITXczVWh1aEJ5OGlWT05uSG1sL1JBK2o5MXltNkxjMzZJenV1QjYwYzVGZW1weEdMam4vRVIzQnlpN1hPeU1pZWZoK2hVeFFmb2FGdW12T094VjVjeDVrMkgrS0x5bVJJaE9qTW45NWF2WjNlWUcxZ1JvazA1dVNFbkcwSzBHRC9QeVgybC8zRnM4ZU43d2t5a3cxWkpZQzRPcmJFM2NIMklOdUxtbkh4RVFicnFQMTEwSS81QStVeUZEM1B5YUNrZlkvS2k0U1k4alg5VmxUbDVQRVFMVEI0cUV3cm1ic1JmN0tPUU9Hc0srMlY0cTg1UStmRVRFS0tmbVFieDdhWWcwZG41SXZ5aXh2UXBYc0tLeWNoTmdSL1VLUWVPOFJBdHhEM0dDNUV2RkJ1cUI3RTJKeDhPT2tZZEJpSWVvZ054TDNZb1ZTdHhUVTdXRFVwc0tndzY0eHVOYjN4dXljblN0aUZFZTJQUG5MdzI0QmkxR09pVG41UDNNQi9INU9UWGJYMkk5c05mOFhLSUUzTDdqR0RnR00vSm0zaXpRejNYK05IYUlZT09VWWRoYldzM1Z1UnZoekhBMEN1Z1llRjc0bHNiM3duaTFRMTdYNFhFa0ZEbDlYVmJhRUtJOW1mOEpCU25oZWlvclVTc0s4cnptT29kMUlYbE9ZdG1lU1czUmxIVXRuRUVuZ2pSc1gyTytWVkYvbTgvSFlRb0tPclVreXJxWCtMSkVQMTBCRmVxTDQvbTRKb1FYZHJIdUlkVjVMa2hPcnFQUHBaaGp4cjlycmk2TVRyV1dvZDkrK2g0TnJHK2lXMW1tMFVmbURPaTJEdDNxK2d6azE4OERSSG5xeTlPSURkR3gxcWpXS3MrWEU3TmFmTko2VlpGZWVmNUxIYnBNSDJGRTVzNWVRc0xGRWU1SHlqdUhwL0hLYk5GR25MeUR4eXJPRlAvQUI4cnMweE8xdjRmSjVOTTlQSnhPRWtBQUFBQVNVVk9SSzVDWUlJPSIvPgo8L2RlZnM+Cjwvc3ZnPgo=");


/***/ }),

/***/ "./src/assets/key-feature/speed.svg":
/*!******************************************!*\
  !*** ./src/assets/key-feature/speed.svg ***!
  \******************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgSpeed; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path, _path2;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function SvgSpeed(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 110,
    height: 110,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    opacity: 0.102,
    d: "M75 0H35C15.67 0 0 15.67 0 35v40c0 19.33 15.67 35 35 35h40c19.33 0 35-15.67 35-35V35c0-19.33-15.67-35-35-35z",
    fill: "#FF4361"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M56.227 84h-.137a25.106 25.106 0 01-5.693-.658.948.948 0 01-.706-1.138.934.934 0 011.126-.713 23.46 23.46 0 004.488.586V80.2a.939.939 0 111.879 0v1.87a23.112 23.112 0 009.825-2.7l-.926-1.622a.955.955 0 01.692-1.42.931.931 0 01.935.467l.923 1.618a23.808 23.808 0 007.3-7.384l-1.6-.934a.956.956 0 01.225-1.742.935.935 0 01.714.095l1.6.937a23.777 23.777 0 002.677-10.089H77.7a.95.95 0 010-1.9h1.856a23.768 23.768 0 00-2.677-10.087l-1.6.936a.924.924 0 01-.94 0 .955.955 0 010-1.647l1.599-.933a23.81 23.81 0 00-7.3-7.385l-.923 1.618a.934.934 0 01-1.284.348.956.956 0 01-.345-1.3l.927-1.622a23.109 23.109 0 00-9.825-2.7v1.871a.94.94 0 01-1.88 0v-1.877a31.5 31.5 0 00-.868.054l-1.009.078c-.878.103-1.75.254-2.612.454a.938.938 0 01-1.126-.714.948.948 0 01.706-1.138c.998-.23 2.01-.4 3.029-.509v-1.1h-1.409a2.375 2.375 0 010-4.749h8.457a2.375 2.375 0 010 4.75h-1.409v1.131a25 25 0 019.653 3.234c.02.011.041.01.06.021.019.012.029.03.047.042a25.469 25.469 0 014.519 3.388l2.019-2.039-1.329-1.345 3.987-4.03 3.986 4.03-3.986 4.03-1.329-1.343-2.018 2.04a25.79 25.79 0 013.35 4.568c.013.017.03.03.041.047.011.018.01.041.02.061a25.8 25.8 0 010 25.53c-.01.02-.009.04-.02.06-.011.018-.039.048-.057.074a25.7 25.7 0 01-9.184 9.273c-.018.012-.028.03-.047.041a.855.855 0 01-.088.038 25 25 0 01-12.422 3.394h-.023c-.009 0-.013.011-.019.011zm20.461-47.814l1.33 1.345 1.328-1.345-1.328-1.344-1.33 1.344zm-19.5-3.46v-2.87h3.289a.475.475 0 000-.95H52.02a.475.475 0 100 .95h3.28v2.87c.113-.006.216 0 .325-.008.154 0 .308-.013.462-.013h.153c.304-.005.616.001.943.015l.005.005zM41.213 75.453a.95.95 0 110-1.9h6.577a.95.95 0 010 1.9h-6.577zm-5.638-6.65a.95.95 0 010-1.9h12.216a.95.95 0 110 1.9H35.575zm18.835-6.692a3.408 3.408 0 01.4-5.13l12.165-8.9a.935.935 0 011.215.1.958.958 0 01.1 1.227l-8.8 12.3a3.334 3.334 0 01-4 1.137 3.324 3.324 0 01-1.085-.739l.005.005zm1.5-3.595a1.485 1.485 0 00.979 2.682 1.466 1.466 0 001.075-.608l5.367-7.5-7.421 5.426zm-25.976 3.636a.95.95 0 010-1.9h17.854a.95.95 0 110 1.9H29.934zm3.759-6.649a.95.95 0 010-1.9h14.095a.95.95 0 010 1.9H33.693zm4.7-6.65a.95.95 0 110-1.9h9.4a.95.95 0 110 1.9h-9.4zm4.7-6.65a.95.95 0 110-1.9h4.7a.95.95 0 010 1.9h-4.7z",
    fill: "#FF4361"
  })));
}
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEwIiBoZWlnaHQ9IjExMCIgdmlld0JveD0iMCAwIDExMCAxMTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIG9wYWNpdHk9IjAuMTAyIiBkPSJNNzUgMEgzNUMxNS42NyAwIDAgMTUuNjcgMCAzNVY3NUMwIDk0LjMzIDE1LjY3IDExMCAzNSAxMTBINzVDOTQuMzMgMTEwIDExMCA5NC4zMyAxMTAgNzVWMzVDMTEwIDE1LjY3IDk0LjMzIDAgNzUgMFoiIGZpbGw9IiNGRjQzNjEiLz4KPHBhdGggZD0iTTU2LjIyNyA4NC4wMDAxQzU2LjE4MSA4NC4wMDAxIDU2LjEzNiA4NC4wMDAxIDU2LjA5IDg0LjAwMDFDNTQuMTczNSA4My45OTg4IDUyLjI2MzMgODMuNzc4MSA1MC4zOTcgODMuMzQyMkM1MC4xNTI2IDgzLjI4NDYgNDkuOTQxIDgzLjEzMjQgNDkuODA4NyA4Mi45MTkxQzQ5LjY3NjMgODIuNzA1NyA0OS42MzQgODIuNDQ4NiA0OS42OTEgODIuMjA0MUM0OS43MTcxIDgyLjA4MjggNDkuNzY3MSA4MS45NjggNDkuODM4MSA4MS44NjYyQzQ5LjkwOTEgODEuNzY0NCA0OS45OTk2IDgxLjY3NzggNTAuMTA0NCA4MS42MTE1QzUwLjIwOTMgODEuNTQ1MSA1MC4zMjYzIDgxLjUwMDMgNTAuNDQ4NiA4MS40Nzk2QzUwLjU3MSA4MS40NTkgNTAuNjk2MiA4MS40NjI4IDUwLjgxNyA4MS40OTExQzUyLjI5MDYgODEuODMwNiA1My43OTM2IDgyLjAyNjkgNTUuMzA1IDgyLjA3NzFWODAuMjAwMUM1NS4zMDA5IDgwLjA3NDEgNTUuMzIyMSA3OS45NDg2IDU1LjM2NzUgNzkuODMxMUM1NS40MTI5IDc5LjcxMzUgNTUuNDgxNCA3OS42MDYzIDU1LjU2OTEgNzkuNTE1N0M1NS42NTY3IDc5LjQyNTIgNTUuNzYxNyA3OS4zNTMxIDU1Ljg3NzcgNzkuMzA0QzU1Ljk5MzcgNzkuMjU0OCA1Ni4xMTg1IDc5LjIyOTUgNTYuMjQ0NSA3OS4yMjk1QzU2LjM3MDUgNzkuMjI5NSA1Ni40OTUyIDc5LjI1NDggNTYuNjExMyA3OS4zMDRDNTYuNzI3MyA3OS4zNTMxIDU2LjgzMjMgNzkuNDI1MiA1Ni45MTk5IDc5LjUxNTdDNTcuMDA3NiA3OS42MDYzIDU3LjA3NjEgNzkuNzEzNSA1Ny4xMjE1IDc5LjgzMTFDNTcuMTY2OCA3OS45NDg2IDU3LjE4ODEgODAuMDc0MSA1Ny4xODQgODAuMjAwMVY4Mi4wNjkxQzYwLjYxOTEgODEuOTExMiA2My45NzU2IDgwLjk4ODggNjcuMDA5IDc5LjM2OTFMNjYuMDgzIDc3Ljc0ODJDNjUuOTU3MSA3Ny41MyA2NS45MjI2IDc3LjI3MDggNjUuOTg3IDc3LjAyNzJDNjYuMDUxNCA3Ni43ODM3IDY2LjIwOTYgNzYuNTc1NSA2Ni40MjcgNzYuNDQ4MUM2Ni41MzM4IDc2LjM4NTYgNjYuNjUxOSA3Ni4zNDUgNjYuNzc0NSA3Ni4zMjg2QzY2Ljg5NzIgNzYuMzEyMiA2Ny4wMjE4IDc2LjMyMDUgNjcuMTQxMiA3Ni4zNTI4QzY3LjI2MDcgNzYuMzg1MSA2Ny4zNzI0IDc2LjQ0MDggNjcuNDcwMSA3Ni41MTY3QzY3LjU2NzcgNzYuNTkyNyA2Ny42NDkzIDc2LjY4NzQgNjcuNzEgNzYuNzk1Mkw2OC42MzMgNzguNDEzMUM3MS41OCA3Ni41MTg4IDc0LjA3MjYgNzMuOTk3NiA3NS45MzMgNzEuMDI5Mkw3NC4zMzMgNzAuMDk1MUM3NC4xMTYgNjkuOTY3NCA3My45NTgyIDY5Ljc1OTMgNzMuODkzOCA2OS41MTU5QzczLjgyOTQgNjkuMjcyNSA3My44NjM2IDY5LjAxMzUgNzMuOTg5IDY4Ljc5NTJDNzQuMDQ5OCA2OC42ODc1IDc0LjEzMTQgNjguNTkyOCA3NC4yMjkxIDY4LjUxN0M3NC4zMjY3IDY4LjQ0MTEgNzQuNDM4NSA2OC4zODU0IDc0LjU1NzkgNjguMzUzMUM3NC42NzcyIDY4LjMyMDkgNzQuODAxOSA2OC4zMTI3IDc0LjkyNDUgNjguMzI5Qzc1LjA0NzEgNjguMzQ1MyA3NS4xNjUyIDY4LjM4NTcgNzUuMjcyIDY4LjQ0ODFMNzYuODcyIDY5LjM4NTFDNzguNTAwNiA2Ni4yNjE5IDc5LjQxNSA2Mi44MTU5IDc5LjU0OSA1OS4yOTYxSDc3LjdDNzcuNDQ4MSA1OS4yOTYxIDc3LjIwNjQgNTkuMTk2IDc3LjAyODMgNTkuMDE3OEM3Ni44NTAxIDU4LjgzOTcgNzYuNzUgNTguNTk4IDc2Ljc1IDU4LjM0NjFDNzYuNzUgNTguMDk0MSA3Ni44NTAxIDU3Ljg1MjUgNzcuMDI4MyA1Ny42NzQzQzc3LjIwNjQgNTcuNDk2MiA3Ny40NDgxIDU3LjM5NjEgNzcuNyA1Ny4zOTYxSDc5LjU1NkM3OS40MjIgNTMuODc3IDc4LjUwNzYgNTAuNDMxNiA3Ni44NzkgNDcuMzA5MUw3NS4yNzkgNDguMjQ1MUM3NS4xMzY5IDQ4LjMyODkgNzQuOTc1IDQ4LjM3MzEgNzQuODEgNDguMzczMkM3NC42NDQ1IDQ4LjM3MyA3NC40ODE5IDQ4LjMyODggNzQuMzM4OSA0OC4yNDU0Qzc0LjE5NTkgNDguMTYxOSA3NC4wNzc2IDQ4LjA0MjEgNzMuOTk2IDQ3Ljg5ODFDNzMuODcwNCA0Ny42OCA3My44MzU5IDQ3LjQyMTIgNzMuOSA0Ny4xNzc5QzczLjk2NCA0Ni45MzQ1IDc0LjEyMTQgNDYuNzI2MiA3NC4zMzggNDYuNTk4MUw3NS45MzggNDUuNjY1MkM3NC4wNzc2IDQyLjY5NjQgNzEuNTg1IDQwLjE3NDcgNjguNjM4IDM4LjI4MDJMNjcuNzE1IDM5Ljg5ODFDNjcuNjMzNiA0MC4wNDI1IDY3LjUxNTEgNDAuMTYyNiA2Ny4zNzE5IDQwLjI0NjFDNjcuMjI4NyA0MC4zMjk2IDY3LjA2NTggNDAuMzczNCA2Ni45IDQwLjM3MzJDNjYuNzM1MiA0MC4zNzM1IDY2LjU3MzIgNDAuMzI5NiA2Ni40MzEgNDAuMjQ2MUM2Ni4yMTM5IDQwLjExODUgNjYuMDU1OCAzOS45MTA1IDY1Ljk5MTIgMzkuNjY3MUM2NS45MjY2IDM5LjQyMzcgNjUuOTYwNyAzOS4xNjQ2IDY2LjA4NiAzOC45NDYyTDY3LjAxMyAzNy4zMjQxQzYzLjk3OTcgMzUuNzA0MyA2MC42MjMxIDM0Ljc4MTkgNTcuMTg4IDM0LjYyNDFWMzYuNDk1MUM1Ny4xODggMzYuNzQ0NCA1Ny4wODg5IDM2Ljk4MzUgNTYuOTEyNyAzNy4xNTk4QzU2LjczNjQgMzcuMzM2MSA1Ni40OTczIDM3LjQzNTIgNTYuMjQ4IDM3LjQzNTJDNTUuOTk4NyAzNy40MzUyIDU1Ljc1OTYgMzcuMzM2MSA1NS41ODMzIDM3LjE1OThDNTUuNDA3IDM2Ljk4MzUgNTUuMzA4IDM2Ljc0NDQgNTUuMzA4IDM2LjQ5NTFWMzQuNjE4MkM1NS4wMzIgMzQuNjMxMiA1NC43NDggMzQuNjQ5MSA1NC40NCAzNC42NzIxTDUzLjQzMSAzNC43NTAxQzUyLjU1MjYgMzQuODUyNyA1MS42ODA1IDM1LjAwNDMgNTAuODE5IDM1LjIwNDFDNTAuNjk4MSAzNS4yMzE5IDUwLjU3MjkgMzUuMjM1NSA1MC40NTA3IDM1LjIxNDZDNTAuMzI4NCAzNS4xOTM3IDUwLjIxMTYgMzUuMTQ4OCA1MC4xMDY4IDM1LjA4MjRDNTAuMDAyMSAzNS4wMTYgNDkuOTExNiAzNC45Mjk0IDQ5Ljg0MDUgMzQuODI3OEM0OS43Njk1IDM0LjcyNjEgNDkuNzE5MyAzNC42MTEzIDQ5LjY5MyAzNC40OTAxQzQ5LjYzNiAzNC4yNDU2IDQ5LjY3ODMgMzMuOTg4NSA0OS44MTA3IDMzLjc3NTFDNDkuOTQzIDMzLjU2MTggNTAuMTU0NiAzMy40MDk3IDUwLjM5OSAzMy4zNTIyQzUxLjM5NzUgMzMuMTIxNyA1Mi40MDkgMzIuOTUxNyA1My40MjggMzIuODQzMVYzMS43NDMySDUyLjAxOUM1MS4zOTc3IDMxLjczMDQgNTAuODA2MSAzMS40NzQ2IDUwLjM3MTIgMzEuMDMwNkM0OS45MzYzIDMwLjU4NjcgNDkuNjkyNyAyOS45OTAxIDQ5LjY5MjcgMjkuMzY4N0M0OS42OTI3IDI4Ljc0NzIgNDkuOTM2MyAyOC4xNTA1IDUwLjM3MTIgMjcuNzA2NUM1MC44MDYxIDI3LjI2MjYgNTEuMzk3NyAyNy4wMDY5IDUyLjAxOSAyNi45OTQxSDYwLjQ3NkM2MS4wOTczIDI3LjAwNjkgNjEuNjg4OSAyNy4yNjI2IDYyLjEyMzggMjcuNzA2NUM2Mi41NTg3IDI4LjE1MDUgNjIuODAyMiAyOC43NDcyIDYyLjgwMjIgMjkuMzY4N0M2Mi44MDIyIDI5Ljk5MDEgNjIuNTU4NyAzMC41ODY3IDYyLjEyMzggMzEuMDMwNkM2MS42ODg5IDMxLjQ3NDYgNjEuMDk3MyAzMS43MzA0IDYwLjQ3NiAzMS43NDMySDU5LjA2N1YzMi44NzUxQzYyLjQ3MjQgMzMuMjc5NiA2NS43NTgyIDM0LjM4MDUgNjguNzIgMzYuMTA5MUM2OC43NCAzNi4xMjAxIDY4Ljc2MSAzNi4xMTgxIDY4Ljc4IDM2LjEzMDFDNjguNzk5IDM2LjE0MjEgNjguODA5IDM2LjE2MDEgNjguODI3IDM2LjE3MjFDNzAuNDU0MyAzNy4xMzA0IDcxLjk2OTkgMzguMjY2OCA3My4zNDYgMzkuNTYwMkw3NS4zNjUgMzcuNTIxMUw3NC4wMzYgMzYuMTc2MUw3OC4wMjMgMzIuMTQ2MUw4Mi4wMDkgMzYuMTc2MUw3OC4wMjMgNDAuMjA2Mkw3Ni42OTQgMzguODYzMkw3NC42NzYgNDAuOTAzMUM3NS45NTcgNDIuMjk4MSA3Ny4wODA0IDQzLjgzIDc4LjAyNiA0NS40NzExQzc4LjAzOSA0NS40ODgxIDc4LjA1NiA0NS41MDAxIDc4LjA2NyA0NS41MTgxQzc4LjA3OCA0NS41MzYxIDc4LjA3NyA0NS41NTkxIDc4LjA4NyA0NS41NzkxQzgwLjMwMTQgNDkuNDY4OCA4MS40NjU5IDUzLjg2NzcgODEuNDY1OSA1OC4zNDM2QzgxLjQ2NTkgNjIuODE5NSA4MC4zMDE0IDY3LjIxODQgNzguMDg3IDcxLjEwODJDNzguMDc3IDcxLjEyODIgNzguMDc4IDcxLjE0OTEgNzguMDY3IDcxLjE2ODFDNzguMDU2IDcxLjE4NzEgNzguMDI4IDcxLjIxNzIgNzguMDEgNzEuMjQzMkM3NS43OTc2IDc1LjA3MjkgNzIuNjM0MiA3OC4yNjY5IDY4LjgyNiA4MC41MTYxQzY4LjgwOCA4MC41MjgxIDY4Ljc5OCA4MC41NDYxIDY4Ljc3OSA4MC41NTcxQzY4Ljc1MDQgODAuNTcxNCA2OC43MjEgODAuNTg0MSA2OC42OTEgODAuNTk1MUM2NC45MTc3IDgyLjc5MTcgNjAuNjM1IDgzLjk2MTkgNTYuMjY5IDgzLjk4OTFDNTYuMjYxIDgzLjk4OTEgNTYuMjU1IDgzLjk4OTEgNTYuMjQ2IDgzLjk4OTFDNTYuMjM3IDgzLjk4OTEgNTYuMjMzIDg0LjAwMDEgNTYuMjI3IDg0LjAwMDFaTTc2LjY4OCAzNi4xODYyTDc4LjAxOCAzNy41MzExTDc5LjM0NiAzNi4xODYyTDc4LjAxOCAzNC44NDIyTDc2LjY4OCAzNi4xODYyWk01Ny4xODggMzIuNzI1MVYyOS44NTUxSDYwLjQ3N0M2MC42MDMgMjkuODU1MSA2MC43MjM4IDI5LjgwNSA2MC44MTI5IDI5LjcxNTlDNjAuOTAxOSAyOS42MjY5IDYwLjk1MiAyOS41MDYxIDYwLjk1MiAyOS4zODAxQzYwLjk1MiAyOS4yNTQxIDYwLjkwMTkgMjkuMTMzMyA2MC44MTI5IDI5LjA0NDJDNjAuNzIzOCAyOC45NTUxIDYwLjYwMyAyOC45MDUyIDYwLjQ3NyAyOC45MDUySDUyLjAyQzUxLjg5NCAyOC45MDUyIDUxLjc3MzIgMjguOTU1MSA1MS42ODQxIDI5LjA0NDJDNTEuNTk1MSAyOS4xMzMzIDUxLjU0NSAyOS4yNTQxIDUxLjU0NSAyOS4zODAxQzUxLjU0NSAyOS41MDYxIDUxLjU5NTEgMjkuNjI2OSA1MS42ODQxIDI5LjcxNTlDNTEuNzczMiAyOS44MDUgNTEuODk0IDI5Ljg1NTEgNTIuMDIgMjkuODU1MUg1NS4zVjMyLjcyNTFDNTUuNDEzIDMyLjcyMDEgNTUuNTE2IDMyLjcyNTEgNTUuNjI1IDMyLjcxODFDNTUuNzc5IDMyLjcxODEgNTUuOTMzIDMyLjcwNTEgNTYuMDg3IDMyLjcwNTFINTYuMTU4SDU2LjI0QzU2LjU0NCAzMi43MDAxIDU2Ljg1NiAzMi43MDYxIDU3LjE4MyAzMi43MjAxTDU3LjE4OCAzMi43MjUxWk00MS4yMTMgNzUuNDU0MUM0MC45NjExIDc1LjQ1NDEgNDAuNzE5NCA3NS4zNTQxIDQwLjU0MTMgNzUuMTc1OUM0MC4zNjMxIDc0Ljk5NzcgNDAuMjYzIDc0Ljc1NjEgNDAuMjYzIDc0LjUwNDJDNDAuMjYzIDc0LjI1MjIgNDAuMzYzMSA3NC4wMTA2IDQwLjU0MTMgNzMuODMyNEM0MC43MTk0IDczLjY1NDIgNDAuOTYxMSA3My41NTQxIDQxLjIxMyA3My41NTQxSDQ3Ljc5QzQ4LjA0MTkgNzMuNTU0MSA0OC4yODM2IDczLjY1NDIgNDguNDYxNyA3My44MzI0QzQ4LjYzOTkgNzQuMDEwNiA0OC43NCA3NC4yNTIyIDQ4Ljc0IDc0LjUwNDJDNDguNzQgNzQuNzU2MSA0OC42Mzk5IDc0Ljk5NzcgNDguNDYxNyA3NS4xNzU5QzQ4LjI4MzYgNzUuMzU0MSA0OC4wNDE5IDc1LjQ1NDEgNDcuNzkgNzUuNDU0MUg0MS4yMTNaTTM1LjU3NSA2OC44MDQxQzM1LjMyMzEgNjguODA0MSAzNS4wODE0IDY4LjcwNCAzNC45MDMzIDY4LjUyNTlDMzQuNzI1MSA2OC4zNDc3IDM0LjYyNSA2OC4xMDYxIDM0LjYyNSA2Ny44NTQxQzM0LjYyNSA2Ny42MDIyIDM0LjcyNTEgNjcuMzYwNSAzNC45MDMzIDY3LjE4MjRDMzUuMDgxNCA2Ny4wMDQyIDM1LjMyMzEgNjYuOTA0MiAzNS41NzUgNjYuOTA0Mkg0Ny43OTFDNDguMDQzIDY2LjkwNDIgNDguMjg0NiA2Ny4wMDQyIDQ4LjQ2MjggNjcuMTgyNEM0OC42NDA5IDY3LjM2MDUgNDguNzQxIDY3LjYwMjIgNDguNzQxIDY3Ljg1NDFDNDguNzQxIDY4LjEwNjEgNDguNjQwOSA2OC4zNDc3IDQ4LjQ2MjggNjguNTI1OUM0OC4yODQ2IDY4LjcwNCA0OC4wNDMgNjguODA0MSA0Ny43OTEgNjguODA0MUgzNS41NzVaTTU0LjQxIDYyLjExMjJDNTQuMDY3NyA2MS43NjQ1IDUzLjgwNCA2MS4zNDc0IDUzLjYzNjggNjAuODg5QzUzLjQ2OTUgNjAuNDMwNyA1My40MDI2IDU5Ljk0MTkgNTMuNDQwNSA1OS40NTU0QzUzLjQ3ODQgNTguOTY5IDUzLjYyMDMgNTguNDk2NCA1My44NTY2IDU4LjA2OTZDNTQuMDkyOCA1Ny42NDI3IDU0LjQxOCA1Ny4yNzE1IDU0LjgxIDU2Ljk4MTFMNjYuOTc1IDQ4LjA4MTJDNjcuMTU1OSA0Ny45NDk2IDY3LjM3ODEgNDcuODg3MiA2Ny42MDExIDQ3LjkwNTVDNjcuODI0MSA0Ny45MjM5IDY4LjAzMyA0OC4wMjE3IDY4LjE5IDQ4LjE4MTJDNjguMzQ4NCA0OC4zNDE0IDY4LjQ0NTMgNDguNTUyMyA2OC40NjM2IDQ4Ljc3NjlDNjguNDgxOSA0OS4wMDE0IDY4LjQyMDQgNDkuMjI1NCA2OC4yOSA0OS40MDkyTDU5LjQ5IDYxLjcwOTFDNTkuMjA3NSA2Mi4xMDQ3IDU4Ljg0MTkgNjIuNDMzOCA1OC40MTg5IDYyLjY3MzJDNTcuOTk1OCA2Mi45MTI2IDU3LjUyNTYgNjMuMDU2NiA1Ny4wNDEgNjMuMDk1MUM1Ni45NTIgNjMuMTAyMSA1Ni44NjUgNjMuMTA2MSA1Ni43NzcgNjMuMTA2MUM1Ni4zMzUgNjMuMTA1NyA1NS44OTc2IDYzLjAxNzEgNTUuNDkwNCA2Mi44NDU2QzU1LjA4MzEgNjIuNjc0IDU0LjcxNDEgNjIuNDIzMSA1NC40MDUgNjIuMTA3Mkw1NC40MSA2Mi4xMTIyWk01NS45MSA1OC41MTcxQzU1LjY0OTIgNTguNzA2OSA1NS40NTczIDU4Ljk3NjQgNTUuMzYzMyA1OS4yODQ5QzU1LjI2OTIgNTkuNTkzNCA1NS4yNzgyIDU5LjkyNDEgNTUuMzg4OCA2MC4yMjcxQzU1LjQ5OTQgNjAuNTMgNTUuNzA1NiA2MC43ODg3IDU1Ljk3NjMgNjAuOTY0MUM1Ni4yNDY5IDYxLjEzOTUgNTYuNTY3MyA2MS4yMjIgNTYuODg5IDYxLjE5OTFDNTcuMTAxNiA2MS4xODIxIDU3LjMwOCA2MS4xMTg4IDU3LjQ5MzcgNjEuMDEzOEM1Ny42NzkzIDYwLjkwODggNTcuODM5OCA2MC43NjQ1IDU3Ljk2NCA2MC41OTExTDYzLjMzMSA1My4wOTExTDU1LjkxIDU4LjUxNzFaTTI5LjkzNCA2Mi4xNTMxQzI5LjY4MjEgNjIuMTUzMSAyOS40NDA0IDYyLjA1MyAyOS4yNjIzIDYxLjg3NDlDMjkuMDg0MSA2MS42OTY3IDI4Ljk4NCA2MS40NTUxIDI4Ljk4NCA2MS4yMDMxQzI4Ljk4NCA2MC45NTEyIDI5LjA4NDEgNjAuNzA5NSAyOS4yNjIzIDYwLjUzMTRDMjkuNDQwNCA2MC4zNTMyIDI5LjY4MjEgNjAuMjUzMiAyOS45MzQgNjAuMjUzMkg0Ny43ODhDNDguMDQgNjAuMjUzMiA0OC4yODE2IDYwLjM1MzIgNDguNDU5OCA2MC41MzE0QzQ4LjYzNzkgNjAuNzA5NSA0OC43MzggNjAuOTUxMiA0OC43MzggNjEuMjAzMUM0OC43MzggNjEuNDU1MSA0OC42Mzc5IDYxLjY5NjcgNDguNDU5OCA2MS44NzQ5QzQ4LjI4MTYgNjIuMDUzIDQ4LjA0IDYyLjE1MzEgNDcuNzg4IDYyLjE1MzFIMjkuOTM0Wk0zMy42OTMgNTUuNTA0MkMzMy40NDEgNTUuNTA0MiAzMy4xOTk0IDU1LjQwNCAzMy4wMjEyIDU1LjIyNThDMzIuODQzMSA1NS4wNDc3IDMyLjc0MyA1NC44MDYgMzIuNzQzIDU0LjU1NDFDMzIuNzQzIDU0LjMwMjEgMzIuODQzMSA1NC4wNjA1IDMzLjAyMTIgNTMuODgyM0MzMy4xOTk0IDUzLjcwNDIgMzMuNDQxIDUzLjYwNDEgMzMuNjkzIDUzLjYwNDFINDcuNzg4QzQ4LjA0IDUzLjYwNDEgNDguMjgxNiA1My43MDQyIDQ4LjQ1OTggNTMuODgyM0M0OC42Mzc5IDU0LjA2MDUgNDguNzM4IDU0LjMwMjEgNDguNzM4IDU0LjU1NDFDNDguNzM4IDU0LjgwNiA0OC42Mzc5IDU1LjA0NzcgNDguNDU5OCA1NS4yMjU4QzQ4LjI4MTYgNTUuNDA0IDQ4LjA0IDU1LjUwNDIgNDcuNzg4IDU1LjUwNDJIMzMuNjkzWk0zOC4zOTMgNDguODUzMUMzOC4xNDEgNDguODUzMSAzNy44OTk0IDQ4Ljc1MyAzNy43MjEzIDQ4LjU3NDhDMzcuNTQzMSA0OC4zOTY3IDM3LjQ0MyA0OC4xNTUgMzcuNDQzIDQ3LjkwMzFDMzcuNDQzIDQ3LjY1MTEgMzcuNTQzMSA0Ny40MDk1IDM3LjcyMTMgNDcuMjMxM0MzNy44OTk0IDQ3LjA1MzIgMzguMTQxIDQ2Ljk1MzEgMzguMzkzIDQ2Ljk1MzFINDcuNzkzQzQ4LjA0NSA0Ni45NTMxIDQ4LjI4NjYgNDcuMDUzMiA0OC40NjQ3IDQ3LjIzMTNDNDguNjQyOSA0Ny40MDk1IDQ4Ljc0MyA0Ny42NTExIDQ4Ljc0MyA0Ny45MDMxQzQ4Ljc0MyA0OC4xNTUgNDguNjQyOSA0OC4zOTY3IDQ4LjQ2NDcgNDguNTc0OEM0OC4yODY2IDQ4Ljc1MyA0OC4wNDUgNDguODUzMSA0Ny43OTMgNDguODUzMUgzOC4zOTNaTTQzLjA5MyA0Mi4yMDMxQzQyLjg0MTEgNDIuMjAzMSA0Mi41OTk0IDQyLjEwMzEgNDIuNDIxMyA0MS45MjQ5QzQyLjI0MzEgNDEuNzQ2OCA0Mi4xNDMgNDEuNTA1MSA0Mi4xNDMgNDEuMjUzMkM0Mi4xNDMgNDEuMDAxMiA0Mi4yNDMxIDQwLjc1OTYgNDIuNDIxMyA0MC41ODE0QzQyLjU5OTQgNDAuNDAzMyA0Mi44NDExIDQwLjMwMzEgNDMuMDkzIDQwLjMwMzFINDcuNzkzQzQ4LjA0NSA0MC4zMDMxIDQ4LjI4NjYgNDAuNDAzMyA0OC40NjQ3IDQwLjU4MTRDNDguNjQyOSA0MC43NTk2IDQ4Ljc0MyA0MS4wMDEyIDQ4Ljc0MyA0MS4yNTMyQzQ4Ljc0MyA0MS41MDUxIDQ4LjY0MjkgNDEuNzQ2OCA0OC40NjQ3IDQxLjkyNDlDNDguMjg2NiA0Mi4xMDMxIDQ4LjA0NSA0Mi4yMDMxIDQ3Ljc5MyA0Mi4yMDMxSDQzLjA5M1oiIGZpbGw9IiNGRjQzNjEiLz4KPC9zdmc+Cg==");


/***/ }),

/***/ "./src/assets/key-feature/vector.svg":
/*!*******************************************!*\
  !*** ./src/assets/key-feature/vector.svg ***!
  \*******************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgVector; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path, _path2;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function SvgVector(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 110,
    height: 110,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M75 0H35C15.67 0 0 15.67 0 35v40c0 19.33 15.67 35 35 35h40c19.33 0 35-15.67 35-35V35c0-19.33-15.67-35-35-35z",
    fill: "#E4FFEE"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M79.479 66.589l-.12-3.735a2.37 2.37 0 00-2.442-2.3l-.507.015a21.282 21.282 0 00-6.164-10.686l-.032-.03a21.362 21.362 0 00-6.49-4.206l6.55-.2a4.4 4.4 0 008.5-1.732 4.415 4.415 0 00-2.84-3.988 4.352 4.352 0 00-1.697-.277 4.4 4.4 0 00-4.058 3.045l-11.791.353-.013-.4a2.369 2.369 0 00-2.443-2.3l-3.774.105a2.357 2.357 0 00-2.292 2.438l.013.4-11.791.354a4.4 4.4 0 00-8.5 1.732 4.4 4.4 0 008.586 1.212l6.549-.2a21.45 21.45 0 00-11.712 15.653l-.63.019a2.377 2.377 0 00-2.3 2.446l.119 3.75a2.367 2.367 0 002.443 2.3l3.751-.112a2.378 2.378 0 002.3-2.446l-.12-3.751a2.367 2.367 0 00-2.442-2.3h-.108a18.527 18.527 0 0114.207-14.366 2.365 2.365 0 002.215 1.35l3.751-.112a2.37 2.37 0 002.122-1.48 18.6 18.6 0 0115.093 13.488l-.231.007a2.378 2.378 0 00-2.3 2.446l.119 3.75a2.369 2.369 0 002.443 2.3l3.75-.112a2.354 2.354 0 002.286-2.43zm-43.753.758l-2.629.08-.084-2.63 2.629-.079.084 2.63zm38.583-24.96a1.456 1.456 0 11-1.318.94 1.472 1.472 0 011.318-.94zm-40.283 4.138a1.456 1.456 0 11-.08-2.913 1.456 1.456 0 01.079 2.914zm18.873-.719l-.084-2.629 2.629-.079.042 1.307.042 1.307-2.629.094zm21.006 20.388l-.084-2.629 2.629-.078.084 2.629-2.629.078z",
    fill: "#40975F"
  })));
}
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEwIiBoZWlnaHQ9IjExMCIgdmlld0JveD0iMCAwIDExMCAxMTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik03NSAwSDM1QzE1LjY3IDAgMCAxNS42NyAwIDM1Vjc1QzAgOTQuMzMgMTUuNjcgMTEwIDM1IDExMEg3NUM5NC4zMyAxMTAgMTEwIDk0LjMzIDExMCA3NVYzNUMxMTAgMTUuNjcgOTQuMzMgMCA3NSAwWiIgZmlsbD0iI0U0RkZFRSIvPgo8cGF0aCBkPSJNNzkuNDc4OSA2Ni41ODlMNzkuMzU5OSA2Mi44NTQxQzc5LjM1MSA2Mi41NDI1IDc5LjI4MDcgNjIuMjM1NyA3OS4xNTMgNjEuOTUxM0M3OS4wMjUzIDYxLjY2NyA3OC44NDI3IDYxLjQxMDYgNzguNjE1OCA2MS4xOTY5Qzc4LjM4ODggNjAuOTgzMyA3OC4xMjE5IDYwLjgxNjYgNzcuODMwNCA2MC43MDYyQzc3LjUzODkgNjAuNTk1OSA3Ny4yMjg1IDYwLjU0NDEgNzYuOTE2OSA2MC41NTRMNzYuNDEgNjAuNTY5Qzc1LjQ1NTQgNTYuNDc2NiA3My4zMTA1IDUyLjc1ODQgNzAuMjQ1OSA0OS44ODMxTDcwLjIxMzkgNDkuODUzMUM2OC4zMjQ4IDQ4LjA2OCA2Ni4xMjU4IDQ2LjY0MjYgNjMuNzI0OSA0NS42NDdMNzAuMjc0IDQ1LjQ0NzFDNzAuNjQ5NiA0Ni40MTU0IDcxLjM1NTYgNDcuMjE5NyA3Mi4yNjcyIDQ3LjcxNzZDNzMuMTc4NyA0OC4yMTU0IDc0LjIzNyA0OC4zNzQ4IDc1LjI1NDcgNDguMTY3NEM3Ni4yNzI0IDQ3Ljk2IDc3LjE4NCA0Ny4zOTkyIDc3LjgyODEgNDYuNTg0NEM3OC40NzIxIDQ1Ljc2OTYgNzguODA3MyA0NC43NTMxIDc4Ljc3NCA0My43MTVDNzguNzM3OSA0Mi41NDc0IDc4LjI0MDYgNDEuNDQxNyA3Ny4zOTA5IDQwLjY0MDFDNzYuOTcwOCA0MC4yNDE5IDc2LjQ3NTUgMzkuOTMxNiA3NS45MzM5IDM5LjcyNzJDNzUuMzkyMyAzOS41MjI5IDc0LjgxNTQgMzkuNDI4NiA3NC4yMzcgMzkuNDVDNzMuMDcxIDM5LjQ4MzYgNzEuOTY2IDM5Ljk3OSA3MS4xNjUgNDAuODI3MUM3MC43MTc4IDQxLjMwMzkgNzAuMzgxIDQxLjg3MzQgNzAuMTc4OSA0Mi40OTVMNTguMzg3OSA0Mi44NDgxTDU4LjM3NDkgNDIuNDQ4QzU4LjM2NjEgNDIuMTM2NCA1OC4yOTU5IDQxLjgyOTYgNTguMTY4MyA0MS41NDUyQzU4LjA0MDYgNDEuMjYwOCA1Ny44NTggNDEuMDA0NCA1Ny42MzEgNDAuNzkwN0M1Ny40MDQxIDQwLjU3NyA1Ny4xMzcyIDQwLjQxMDMgNTYuODQ1NiA0MC4zQzU2LjU1NDEgNDAuMTg5NyA1Ni4yNDM1IDQwLjEzOCA1NS45MzE5IDQwLjE0OEw1Mi4xNTc5IDQwLjI1MzFDNTEuODQ2OSA0MC4yNjE1IDUxLjU0MDcgNDAuMzMxMiA1MS4yNTY5IDQwLjQ1ODVDNTAuOTczMSA0MC41ODU4IDUwLjcxNzMgNDAuNzY4MiA1MC41MDQyIDQwLjk5NDhDNTAuMjkxMSA0MS4yMjE0IDUwLjEyNTEgNDEuNDg4IDUwLjAxNTYgNDEuNzc5MUM0OS45MDYgNDIuMDcwMiA0OS44NTUxIDQyLjM4MDIgNDkuODY1OSA0Mi42OTExTDQ5Ljg3OSA0My4wOTFMMzguMDg4IDQzLjQ0NUMzNy43MTI0IDQyLjQ3NjYgMzcuMDA2MyA0MS42NzIzIDM2LjA5NDggNDEuMTc0NUMzNS4xODMyIDQwLjY3NjYgMzQuMTI0OSA0MC41MTczIDMzLjEwNzEgNDAuNzI0N0MzMi4wODk0IDQwLjkzMiAzMS4xNzc4IDQxLjQ5MjggMzAuNTMzOCA0Mi4zMDc3QzI5Ljg4OTcgNDMuMTIyNSAyOS41NTQ3IDQ0LjEzODkgMjkuNTg4IDQ1LjE3N0MyOS42MjAyIDQ2LjIxMzQgMzAuMDE3NCA0Ny4yMDUgMzAuNzA5NSA0Ny45NzcxQzMxLjQwMTYgNDguNzQ5MiAzMi4zNDQxIDQ5LjI1MiAzMy4zNzA4IDQ5LjM5NjlDMzQuMzk3NSA0OS41NDE4IDM1LjQ0MjMgNDkuMzE5NSAzNi4zMjExIDQ4Ljc2OTJDMzcuMTk5OSA0OC4yMTg5IDM3Ljg1NiA0Ny4zNzYgMzguMTczOSA0Ni4zODkxTDQ0LjcyMyA0Ni4xODlDNDEuNjcwMyA0Ny42ODM2IDM5LjAxNjQgNDkuODgyMyAzNi45ODAyIDUyLjYwMzhDMzQuOTQzOSA1NS4zMjUzIDMzLjU4MzQgNTguNDkxNyAzMy4wMTA5IDYxLjg0MjFMMzIuMzgwOSA2MS44NjFDMzEuNzUxOCA2MS44ODExIDMxLjE1NjUgNjIuMTUgMzAuNzI1MyA2Mi42MDg2QzMwLjI5NDEgNjMuMDY3MSAzMC4wNjI0IDYzLjY3NzkgMzAuMDgxIDY0LjMwNzFMMzAuMTk5OSA2OC4wNTcxQzMwLjIwODcgNjguMzY4NyAzMC4yNzg5IDY4LjY3NTUgMzAuNDA2NiA2OC45NTk5QzMwLjUzNDIgNjkuMjQ0MyAzMC43MTY4IDY5LjUwMDcgMzAuOTQzOCA2OS43MTQ0QzMxLjE3MDggNjkuOTI4MSAzMS40Mzc3IDcwLjA5NDggMzEuNzI5MyA3MC4yMDUxQzMyLjAyMDkgNzAuMzE1NCAzMi4zMzEzIDcwLjM2NzEgMzIuNjQyOSA3MC4zNTcxTDM2LjM5NCA3MC4yNDVDMzcuMDIzIDcwLjIyNDcgMzcuNjE4MyA2OS45NTU3IDM4LjA0OTQgNjkuNDk3MkMzOC40ODA1IDY5LjAzODggMzguNzEyMiA2OC40MjgxIDM4LjY5MzkgNjcuNzk5TDM4LjU3NDkgNjQuMDQ4QzM4LjU2NjIgNjMuNzM2NCAzOC40OTYxIDYzLjQyOTUgMzguMzY4NSA2My4xNDUxQzM4LjI0MDkgNjIuODYwNiAzOC4wNTg0IDYyLjYwNDEgMzcuODMxNCA2Mi4zOTA0QzM3LjYwNDQgNjIuMTc2NyAzNy4zMzc0IDYyLjAwOTkgMzcuMDQ1NyA2MS44OTk3QzM2Ljc1NDEgNjEuNzg5NSAzNi40NDM1IDYxLjczOCAzNi4xMzE5IDYxLjc0ODFIMzYuMDI0QzM2Ljc0NzUgNTguMjM1NCAzOC40NzQ5IDU1LjAwOCA0MC45OTY4IDUyLjQ1NzlDNDMuNTE4NiA0OS45MDc4IDQ2LjcyNjQgNDguMTQ0NSA1MC4yMzA5IDQ3LjM4MkM1MC4zNTUgNDcuNjQ5MiA1MC41Mjk5IDQ3Ljg4OTcgNTAuNzQ1OSA0OC4wOUM1MC45NzMgNDguMzAzOCA1MS4yNDAxIDQ4LjQ3MDYgNTEuNTMxOCA0OC41ODA3QzUxLjgyMzYgNDguNjkwOSA1Mi4xMzQzIDQ4Ljc0MjQgNTIuNDQ2IDQ4LjczMjFMNTYuMTk3IDQ4LjYyQzU2LjY1NiA0OC42MDU1IDU3LjEwMSA0OC40NTc5IDU3LjQ3NzcgNDguMTk1MUM1Ny44NTQ1IDQ3LjkzMjQgNTguMTQ2NyA0Ny41NjU4IDU4LjMxODkgNDcuMTQwMUM2MS44Njg0IDQ3LjY5MDkgNjUuMTgyNiA0OS4yNTc3IDY3Ljg2MDkgNTEuNjUxMkM3MC41MzkyIDU0LjA0NDcgNzIuNDY3MiA1Ny4xNjI2IDczLjQxMTkgNjAuNjI4MUw3My4xODEgNjAuNjM1MUM3Mi41NTIgNjAuNjU1NCA3MS45NTY3IDYwLjkyNDQgNzEuNTI1NiA2MS4zODI5QzcxLjA5NDUgNjEuODQxMyA3MC44NjI2IDYyLjQ1MiA3MC44ODA5IDYzLjA4MTFMNzAuOTk5OSA2Ni44MzExQzcxLjAwODcgNjcuMTQyNyA3MS4wNzkgNjcuNDQ5NSA3MS4yMDY2IDY3LjczMzlDNzEuMzM0MyA2OC4wMTgzIDcxLjUxNjkgNjguMjc0OCA3MS43NDM4IDY4LjQ4ODVDNzEuOTcwOCA2OC43MDIxIDcyLjIzNzcgNjguODY4OSA3Mi41MjkyIDY4Ljk3OTJDNzIuODIwOCA2OS4wODk1IDczLjEzMTQgNjkuMTQxIDczLjQ0MjkgNjkuMTMxTDc3LjE5MzkgNjkuMDE5MUM3Ny41MDM3IDY5LjAxMDIgNzcuODA4NyA2OC45NDAxIDc4LjA5MTQgNjguODEzQzc4LjM3NCA2OC42ODYgNzguNjI4OCA2OC41MDQ0IDc4Ljg0MTEgNjguMjc4NkM3OS4wNTM0IDY4LjA1MjggNzkuMjE5IDY3Ljc4NzQgNzkuMzI4NCA2Ny40OTc1Qzc5LjQzNzkgNjcuMjA3NSA3OS40ODkxIDY2Ljg5ODggNzkuNDc4OSA2Ni41ODlWNjYuNTg5Wk0zNS43MjU5IDY3LjM0NzFMMzMuMDk3IDY3LjQyNjFMMzMuMDEyOSA2NC43OTdMMzUuNjQxOSA2NC43MTgxTDM1LjcyNTkgNjcuMzQ3MVpNNzQuMzA4OSA0Mi4zODdDNzQuNTk2NiA0Mi4zNzg4IDc0Ljg4MDMgNDIuNDU2MiA3NS4xMjQxIDQyLjYwOTJDNzUuMzY3OSA0Mi43NjIyIDc1LjU2MSA0Mi45ODQgNzUuNjc4OCA0My4yNDY2Qzc1Ljc5NjYgNDMuNTA5MyA3NS44MzM4IDQzLjgwMDggNzUuNzg1OSA0NC4wODQ2Qzc1LjczODEgNDQuMzY4NSA3NS42MDcyIDQ0LjYzMTggNzUuNDA5NyA0NC44NDEyQzc1LjIxMjMgNDUuMDUwNyA3NC45NTcyIDQ1LjE5NjkgNzQuNjc2NyA0NS4yNjE0Qzc0LjM5NjIgNDUuMzI1OSA3NC4xMDI5IDQ1LjMwNTkgNzMuODMzOCA0NS4yMDM4QzczLjU2NDcgNDUuMTAxNyA3My4zMzE4IDQ0LjkyMjIgNzMuMTY0NyA0NC42ODc4QzcyLjk5NzYgNDQuNDUzNCA3Mi45MDM4IDQ0LjE3NDcgNzIuODk1IDQzLjg4N0M3Mi44ODk2IDQzLjY5NTUgNzIuOTIyMSA0My41MDQ5IDcyLjk5MDggNDMuMzI2MUM3My4wNTk0IDQzLjE0NzMgNzMuMTYyOSA0Mi45ODM3IDczLjI5NSA0Mi44NDVDNzMuNTYgNDIuNTY1NiA3My45MjQgNDIuNDAxMSA3NC4zMDg5IDQyLjM4N1Y0Mi4zODdaTTM0LjAyNTkgNDYuNTI1MUMzMy43MzgyIDQ2LjUzMzIgMzMuNDU0NiA0Ni40NTU5IDMzLjIxMDggNDYuMzAyOUMzMi45NjY5IDQ2LjE0OTkgMzIuNzc0IDQ1LjkyODIgMzIuNjU2MiA0NS42NjU2QzMyLjUzODQgNDUuNDAzIDMyLjUwMSA0NS4xMTEzIDMyLjU0ODkgNDQuODI3NEMzMi41OTY4IDQ0LjU0MzYgMzIuNzI3NyA0NC4yODAzIDMyLjkyNTEgNDQuMDcwOEMzMy4xMjI1IDQzLjg2MTQgMzMuMzc3NiA0My43MTUyIDMzLjY1ODEgNDMuNjUwN0MzMy45Mzg2IDQzLjU4NjEgMzQuMjMyIDQzLjYwNjIgMzQuNTAxMiA0My43MDgzQzM0Ljc3MDMgNDMuODEwNCAzNS4wMDMgNDMuOTkwMSAzNS4xNzAxIDQ0LjIyNDRDMzUuMzM3MiA0NC40NTg4IDM1LjQzMTEgNDQuNzM3NCAzNS40Mzk5IDQ1LjAyNTFDMzUuNDQ1NyA0NS4yMTY2IDM1LjQxMzkgNDUuNDA3MyAzNS4zNDU5IDQ1LjU4NjVDMzUuMjc3OSA0NS43NjU2IDM1LjE3NTIgNDUuOTI5NiAzNS4wNDM4IDQ2LjA2OUMzNC45MTIzIDQ2LjIwODQgMzQuNzU0NyA0Ni4zMjA3IDM0LjU3OTkgNDYuMzk5MUMzNC40MDUxIDQ2LjQ3NzUgMzQuMjE2NSA0Ni41MjA2IDM0LjAyNSA0Ni41MjZMMzQuMDI1OSA0Ni41MjUxWk01Mi44OTkgNDUuODA2MUw1Mi44MTQ5IDQzLjE3N0w1NS40NDM5IDQzLjA5ODFMNTUuNDg1OSA0NC40MDUxTDU1LjUyNzkgNDUuNzEyMUw1Mi44OTkgNDUuODA2MVpNNzMuOTA1IDY2LjE5NEw3My44MjEgNjMuNTY1TDc2LjQ0OTkgNjMuNDg3MUw3Ni41MzQgNjYuMTE2TDczLjkwNSA2Ni4xOTRaIiBmaWxsPSIjNDA5NzVGIi8+Cjwvc3ZnPgo=");


/***/ }),

/***/ "./src/components/feature-card-column.js":
/*!***********************************************!*\
  !*** ./src/components/feature-card-column.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FeatureCardColumn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
var _jsxFileName = "/home/nick/workspace/onda-project/onda-website/src/components/feature-card-column.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/** @jsx jsx */


function FeatureCardColumn(_ref) {
  var src = _ref.src,
    _ref$altText = _ref.altText,
    altText = _ref$altText === void 0 ? 'default alt text' : _ref$altText,
    title = _ref.title,
    text = _ref.text;
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.card,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: src,
    alt: altText,
    sx: styles.img,
    width: "110",
    height: "110",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.wrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    sx: styles.wrapper.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    sx: styles.wrapper.subTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, text)));
}
_c = FeatureCardColumn;
var styles = {
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    textAlign: 'center',
    flexDirection: 'column'
  },
  img: {
    mx: 'auto',
    mb: [3, null, 4, null, null, 5],
    width: ['80px', '90px', null, null, null, '100px', 'auto']
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    title: {
      fontSize: [3, null, null, null, null, 4],
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, null, null, null, 3]
    },
    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, null, 1.9, 2]
    }
  }
};
var _c;
$RefreshReg$(_c, "FeatureCardColumn");

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

/***/ "./src/components/section-header.js":
/*!******************************************!*\
  !*** ./src/components/section-header.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SectionHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
var _jsxFileName = "/home/nick/workspace/onda-project/onda-website/src/components/section-header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function SectionHeader(_ref) {
  var title = _ref.title,
    slogan = _ref.slogan,
    isWhite = _ref.isWhite;
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: {
      variant: 'sectionHeader'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    sx: {
      variant: 'sectionHeader.subTitle',
      color: isWhite ? 'white' : 'heading',
      opacity: isWhite ? 0.7 : 1
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, slogan), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h2",
    sx: {
      variant: 'sectionHeader.title',
      color: isWhite ? 'white' : 'heading_secondary'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, title));
}
_c = SectionHeader;
var _c;
$RefreshReg$(_c, "SectionHeader");

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

/***/ "./src/sections/key-feature.js":
/*!*************************************!*\
  !*** ./src/sections/key-feature.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KeyFeature; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var _components_section_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/section-header */ "./src/components/section-header.js");
/* harmony import */ var _components_feature_card_column_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/feature-card-column.js */ "./src/components/feature-card-column.js");
/* harmony import */ var _assets_key_feature_vector_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/key-feature/vector.svg */ "./src/assets/key-feature/vector.svg");
/* harmony import */ var _assets_key_feature_editing_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/assets/key-feature/editing.svg */ "./src/assets/key-feature/editing.svg");
/* harmony import */ var _assets_key_feature_speed_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/assets/key-feature/speed.svg */ "./src/assets/key-feature/speed.svg");
var _jsxFileName = "/home/nick/workspace/onda-project/onda-website/src/sections/key-feature.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/** @jsx jsx */








var data = [{
  id: 1,
  imgSrc: _assets_key_feature_vector_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
  altText: 'Vector',
  title: 'Vector Editing',
  text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'
}, {
  id: 2,
  imgSrc: _assets_key_feature_editing_svg__WEBPACK_IMPORTED_MODULE_5__["default"],
  altText: 'Monitoring',
  title: 'Customize & Monitoring',
  text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'
}, {
  id: 3,
  imgSrc: _assets_key_feature_speed_svg__WEBPACK_IMPORTED_MODULE_6__["default"],
  altText: 'Quality',
  title: 'Quality & Short-period',
  text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'
}];
function KeyFeature() {
  var _this = this;
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    sx: {
      variant: 'section.keyFeature'
    },
    id: "feature",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_section_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    slogan: "Quality features",
    title: "Meet exciting feature of app",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    sx: styles.grid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, data.map(function (item) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_feature_card_column_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: item.id,
      src: item.imgSrc,
      alt: item.title,
      title: item.title,
      text: item.text,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 13
      }
    });
  }))));
}
_c = KeyFeature;
var styles = {
  grid: {
    'px': [0, null, null, '40px', null, '80px'],
    'pt': [0, null, null, null, null, null, null, 3],
    'gridGap': ['35px 0', null, '40px 0'],
    'gridTemplateColumns': ['repeat(1,1fr)', null, 'repeat(2,1fr)', null, 'repeat(3,1fr)'],
    'width': ['100%', '80%', '100%'],
    'mx': 'auto',
    '& > div': {
      px: [0, '15px', null, '25px', null, '30px', '40px', '60px']
    }
  }
};
var _c;
$RefreshReg$(_c, "KeyFeature");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9QcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b1Byb3BlcnR5S2V5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c0xvb3NlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL2NhY2hlL2Rpc3QvY2FjaGUuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9jb3JlL2Rpc3QvY29yZS5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL2NvcmUvZGlzdC9lbW90aW9uLWVsZW1lbnQtMDRkODUxMzQuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9jc3MvZGlzdC9jc3MuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9oYXNoL2Rpc3QvaGFzaC5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL2lzLXByb3AtdmFsaWQvZGlzdC9pcy1wcm9wLXZhbGlkLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vbWVtb2l6ZS9kaXN0L21lbW9pemUuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9zZXJpYWxpemUvZGlzdC9zZXJpYWxpemUuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9zaGVldC9kaXN0L3NoZWV0LmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vc3R5bGVkLWJhc2UvZGlzdC9zdHlsZWQtYmFzZS5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3N0eWxlZC9kaXN0L3N0eWxlZC5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3N0eWxpcy9kaXN0L3N0eWxpcy5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3VuaXRsZXNzL2Rpc3QvdW5pdGxlc3MuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi91dGlscy9kaXN0L3V0aWxzLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vd2Vhay1tZW1vaXplL2Rpc3Qvd2Vhay1tZW1vaXplLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1keC1qcy9yZWFjdC9kaXN0L2VzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzdHlsZWQtc3lzdGVtL2JhY2tncm91bmQvZGlzdC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac3R5bGVkLXN5c3RlbS9ib3JkZXIvZGlzdC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac3R5bGVkLXN5c3RlbS9jb2xvci9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzdHlsZWQtc3lzdGVtL2NvcmUvZGlzdC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac3R5bGVkLXN5c3RlbS9jc3MvZGlzdC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac3R5bGVkLXN5c3RlbS9mbGV4Ym94L2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHN0eWxlZC1zeXN0ZW0vZ3JpZC9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzdHlsZWQtc3lzdGVtL2xheW91dC9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzdHlsZWQtc3lzdGVtL3Bvc2l0aW9uL2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHN0eWxlZC1zeXN0ZW0vc2hhZG93L2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHN0eWxlZC1zeXN0ZW0vc2hvdWxkLWZvcndhcmQtcHJvcC9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzdHlsZWQtc3lzdGVtL3Nob3VsZC1mb3J3YXJkLXByb3Avbm9kZV9tb2R1bGVzL0BlbW90aW9uL21lbW9pemUvZGlzdC9lbW90aW9uLW1lbW9pemUuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac3R5bGVkLXN5c3RlbS9zcGFjZS9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzdHlsZWQtc3lzdGVtL3R5cG9ncmFwaHkvZGlzdC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac3R5bGVkLXN5c3RlbS92YXJpYW50L2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHRoZW1lLXVpL2NvbG9yLW1vZGVzL2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHRoZW1lLXVpL2NvbXBvbmVudHMvZGlzdC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AdGhlbWUtdWkvY29yZS9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0B0aGVtZS11aS9jc3MvZGlzdC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AdGhlbWUtdWkvbWR4L2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHRoZW1lLXVpL3RoZW1lLXByb3ZpZGVyL2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZGVlcG1lcmdlL2Rpc3QvY2pzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvc3R5bGVkLXN5c3RlbS9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3RoZW1lLXVpL2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvYXNzZXRzL2tleS1mZWF0dXJlL2VkaXRpbmcuc3ZnIiwid2VicGFjazovL19OX0UvLi9zcmMvYXNzZXRzL2tleS1mZWF0dXJlL3NwZWVkLnN2ZyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2Fzc2V0cy9rZXktZmVhdHVyZS92ZWN0b3Iuc3ZnIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9mZWF0dXJlLWNhcmQtY29sdW1uLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9zZWN0aW9uLWhlYWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2tleS1mZWF0dXJlLmpzIl0sIm5hbWVzIjpbIkZlYXR1cmVDYXJkQ29sdW1uIiwiX3JlZiIsInNyYyIsIl9yZWYkYWx0VGV4dCIsImFsdFRleHQiLCJ0aXRsZSIsInRleHQiLCJqc3giLCJCb3giLCJzeCIsInN0eWxlcyIsImNhcmQiLCJfX3NlbGYiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIkltYWdlIiwiYWx0IiwiaW1nIiwid2lkdGgiLCJoZWlnaHQiLCJ3cmFwcGVyIiwiSGVhZGluZyIsIlRleHQiLCJzdWJUaXRsZSIsIl9jIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJ0ZXh0QWxpZ24iLCJmbGV4RGlyZWN0aW9uIiwibXgiLCJtYiIsImZvbnRTaXplIiwiY29sb3IiLCJsaW5lSGVpZ2h0IiwiZm9udFdlaWdodCIsIiRSZWZyZXNoUmVnJCIsIlNlY3Rpb25IZWFkZXIiLCJzbG9nYW4iLCJpc1doaXRlIiwiX19qc3giLCJ2YXJpYW50IiwiYXMiLCJvcGFjaXR5IiwiZGF0YSIsImlkIiwiaW1nU3JjIiwiVmVjdG9yIiwiRWRpdGluZyIsIlNwZWVkIiwiS2V5RmVhdHVyZSIsIl90aGlzIiwiQ29udGFpbmVyIiwiR3JpZCIsImdyaWQiLCJtYXAiLCJpdGVtIiwia2V5IiwicHgiXSwibWFwcGluZ3MiOiI7Ozs7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixVQUFVOztBQUVwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJDQUEyQyxPQUFPO0FBQ2xEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxvQkFBb0IsT0FBTztBQUMzQix5QkFBeUIsT0FBTztBQUNoQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaURBQWlEO0FBQ2pEOztBQUVBO0FBQ0E7QUFDQSxrRkFBa0YscUNBQXFDLHlDQUF5QztBQUNoSzs7QUFFQSxxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaU1BQWlNO0FBQ2pNOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QjtBQUN2Qjs7QUFFQTtBQUNBLDZCQUE2QixPQUFPO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdEQUFnRCw2REFBNkQsT0FBTztBQUNwSDtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixFQUFFO0FBQzdCO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLHlFQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUN0bUIxQjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSwyRUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDakQ1QjtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRTZDOzs7Ozs7Ozs7Ozs7O0FDdkM3QztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSwwRUFBVyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDZjNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEI7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztB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QUcsQ0FBQyw0REFBYTtBQUMxQjtBQUNBLEdBQUcsRUFBRSwwREFBRyxDQUFDLHVFQUFpQixRQUFRLDBEQUFHLGNBQWMsMERBQUcsQ0FBQyx5REFBVztBQUNsRTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUU0QztBQUM1Qzs7Ozs7Ozs7Ozs7OztBQy9DYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFLElBQUk7QUFDTjs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ3BJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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RXFELElBQUksQ0FBQ3JELEtBQU07TUFDbEJDLElBQUksRUFBRW9ELElBQUksQ0FBQ3BELElBQUs7TUFBQU0sTUFBQSxFQUFBeUMsS0FBQTtNQUFBeEMsUUFBQTtRQUFBQyxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUE7SUFBQSxFQUNoQjtFQUFBLENBQ0gsQ0FBQyxDQUNHLENBQ0csQ0FDSjtBQUVkO0FBQUNVLEVBQUEsR0F2QnVCeUIsVUFBVTtBQXlCbEMsSUFBTTFDLE1BQU0sR0FBRztFQUNiOEMsSUFBSSxFQUFFO0lBQ0osSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUM7SUFDM0MsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNoRCxTQUFTLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQztJQUNyQyxxQkFBcUIsRUFBRSxDQUNyQixlQUFlLEVBQ2YsSUFBSSxFQUNKLGVBQWUsRUFDZixJQUFJLEVBQ0osZUFBZSxDQUNoQjtJQUNELE9BQU8sRUFBRSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDO0lBQ2hDLElBQUksRUFBRSxNQUFNO0lBQ1osU0FBUyxFQUFFO01BQ1RJLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNO0lBQzVEO0VBQ0Y7QUFDRixDQUFDO0FBQUEsSUFBQWpDLEVBQUE7QUFBQVcsWUFBQSxDQUFBWCxFQUFBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdG9Qcm9wZXJ0eUtleSBmcm9tIFwiLi90b1Byb3BlcnR5S2V5LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGtleSA9IHRvUHJvcGVydHlLZXkoa2V5KTtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn0iLCJpbXBvcnQgc2V0UHJvdG90eXBlT2YgZnJvbSBcIi4vc2V0UHJvdG90eXBlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpO1xuICBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzcztcbiAgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiLi90eXBlb2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkge1xuICBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDtcbiAgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdO1xuICBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7XG4gICAgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlcztcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7XG4gIH1cbiAgcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIi4vdHlwZW9mLmpzXCI7XG5pbXBvcnQgdG9QcmltaXRpdmUgZnJvbSBcIi4vdG9QcmltaXRpdmUuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykge1xuICB2YXIga2V5ID0gdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTtcbiAgcmV0dXJuIF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBfdHlwZW9mKG9iaik7XG59IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2YuanNcIik7XG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTtcbiAgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7XG4gIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzTG9vc2UsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJpbXBvcnQgeyBTdHlsZVNoZWV0IH0gZnJvbSAnQGVtb3Rpb24vc2hlZXQnO1xuaW1wb3J0IFN0eWxpcyBmcm9tICdAZW1vdGlvbi9zdHlsaXMnO1xuaW1wb3J0ICdAZW1vdGlvbi93ZWFrLW1lbW9pemUnO1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGh5c3VsdGFuL3N0eWxpcy5qcy90cmVlL21hc3Rlci9wbHVnaW5zL3J1bGUtc2hlZXRcbi8vIGlubGluZWQgdG8gYXZvaWQgdW1kIHdyYXBwZXIgYW5kIHBlZXJEZXAgd2FybmluZ3MvaW5zdGFsbGluZyBzdHlsaXNcbi8vIHNpbmNlIHdlIHVzZSBzdHlsaXMgYWZ0ZXIgY2xvc3VyZSBjb21waWxlclxudmFyIGRlbGltaXRlciA9ICcvKnwqLyc7XG52YXIgbmVlZGxlID0gZGVsaW1pdGVyICsgJ30nO1xuXG5mdW5jdGlvbiB0b1NoZWV0KGJsb2NrKSB7XG4gIGlmIChibG9jaykge1xuICAgIFNoZWV0LmN1cnJlbnQuaW5zZXJ0KGJsb2NrICsgJ30nKTtcbiAgfVxufVxuXG52YXIgU2hlZXQgPSB7XG4gIGN1cnJlbnQ6IG51bGxcbn07XG52YXIgcnVsZVNoZWV0ID0gZnVuY3Rpb24gcnVsZVNoZWV0KGNvbnRleHQsIGNvbnRlbnQsIHNlbGVjdG9ycywgcGFyZW50cywgbGluZSwgY29sdW1uLCBsZW5ndGgsIG5zLCBkZXB0aCwgYXQpIHtcbiAgc3dpdGNoIChjb250ZXh0KSB7XG4gICAgLy8gcHJvcGVydHlcbiAgICBjYXNlIDE6XG4gICAgICB7XG4gICAgICAgIHN3aXRjaCAoY29udGVudC5jaGFyQ29kZUF0KDApKSB7XG4gICAgICAgICAgY2FzZSA2NDpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgLy8gQGltcG9ydFxuICAgICAgICAgICAgICBTaGVldC5jdXJyZW50Lmluc2VydChjb250ZW50ICsgJzsnKTtcbiAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIC8vIGNoYXJjb2RlIGZvciBsXG5cbiAgICAgICAgICBjYXNlIDEwODpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgLy8gY2hhcmNvZGUgZm9yIGJcbiAgICAgICAgICAgICAgLy8gdGhpcyBpZ25vcmVzIGxhYmVsXG4gICAgICAgICAgICAgIGlmIChjb250ZW50LmNoYXJDb2RlQXQoMikgPT09IDk4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAvLyBzZWxlY3RvclxuXG4gICAgY2FzZSAyOlxuICAgICAge1xuICAgICAgICBpZiAobnMgPT09IDApIHJldHVybiBjb250ZW50ICsgZGVsaW1pdGVyO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAvLyBhdC1ydWxlXG5cbiAgICBjYXNlIDM6XG4gICAgICB7XG4gICAgICAgIHN3aXRjaCAobnMpIHtcbiAgICAgICAgICAvLyBAZm9udC1mYWNlLCBAcGFnZVxuICAgICAgICAgIGNhc2UgMTAyOlxuICAgICAgICAgIGNhc2UgMTEyOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBTaGVldC5jdXJyZW50Lmluc2VydChzZWxlY3RvcnNbMF0gKyBjb250ZW50KTtcbiAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQgKyAoYXQgPT09IDAgPyBkZWxpbWl0ZXIgOiAnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIGNhc2UgLTI6XG4gICAgICB7XG4gICAgICAgIGNvbnRlbnQuc3BsaXQobmVlZGxlKS5mb3JFYWNoKHRvU2hlZXQpO1xuICAgICAgfVxuICB9XG59O1xuXG52YXIgY3JlYXRlQ2FjaGUgPSBmdW5jdGlvbiBjcmVhdGVDYWNoZShvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB1bmRlZmluZWQpIG9wdGlvbnMgPSB7fTtcbiAgdmFyIGtleSA9IG9wdGlvbnMua2V5IHx8ICdjc3MnO1xuICB2YXIgc3R5bGlzT3B0aW9ucztcblxuICBpZiAob3B0aW9ucy5wcmVmaXggIT09IHVuZGVmaW5lZCkge1xuICAgIHN0eWxpc09wdGlvbnMgPSB7XG4gICAgICBwcmVmaXg6IG9wdGlvbnMucHJlZml4XG4gICAgfTtcbiAgfVxuXG4gIHZhciBzdHlsaXMgPSBuZXcgU3R5bGlzKHN0eWxpc09wdGlvbnMpO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gJEZsb3dGaXhNZVxuICAgIGlmICgvW15hLXotXS8udGVzdChrZXkpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFbW90aW9uIGtleSBtdXN0IG9ubHkgY29udGFpbiBsb3dlciBjYXNlIGFscGhhYmV0aWNhbCBjaGFyYWN0ZXJzIGFuZCAtIGJ1dCBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgd2FzIHBhc3NlZFwiKTtcbiAgICB9XG4gIH1cblxuICB2YXIgaW5zZXJ0ZWQgPSB7fTsgLy8gJEZsb3dGaXhNZVxuXG4gIHZhciBjb250YWluZXI7XG5cbiAge1xuICAgIGNvbnRhaW5lciA9IG9wdGlvbnMuY29udGFpbmVyIHx8IGRvY3VtZW50LmhlYWQ7XG4gICAgdmFyIG5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInN0eWxlW2RhdGEtZW1vdGlvbi1cIiArIGtleSArIFwiXVwiKTtcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKG5vZGVzLCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgdmFyIGF0dHJpYiA9IG5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1lbW90aW9uLVwiICsga2V5KTsgLy8gJEZsb3dGaXhNZVxuXG4gICAgICBhdHRyaWIuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChpZCkge1xuICAgICAgICBpbnNlcnRlZFtpZF0gPSB0cnVlO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChub2RlLnBhcmVudE5vZGUgIT09IGNvbnRhaW5lcikge1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB2YXIgX2luc2VydDtcblxuICB7XG4gICAgc3R5bGlzLnVzZShvcHRpb25zLnN0eWxpc1BsdWdpbnMpKHJ1bGVTaGVldCk7XG5cbiAgICBfaW5zZXJ0ID0gZnVuY3Rpb24gaW5zZXJ0KHNlbGVjdG9yLCBzZXJpYWxpemVkLCBzaGVldCwgc2hvdWxkQ2FjaGUpIHtcbiAgICAgIHZhciBuYW1lID0gc2VyaWFsaXplZC5uYW1lO1xuICAgICAgU2hlZXQuY3VycmVudCA9IHNoZWV0O1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBzZXJpYWxpemVkLm1hcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciBtYXAgPSBzZXJpYWxpemVkLm1hcDtcbiAgICAgICAgU2hlZXQuY3VycmVudCA9IHtcbiAgICAgICAgICBpbnNlcnQ6IGZ1bmN0aW9uIGluc2VydChydWxlKSB7XG4gICAgICAgICAgICBzaGVldC5pbnNlcnQocnVsZSArIG1hcCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBzdHlsaXMoc2VsZWN0b3IsIHNlcmlhbGl6ZWQuc3R5bGVzKTtcblxuICAgICAgaWYgKHNob3VsZENhY2hlKSB7XG4gICAgICAgIGNhY2hlLmluc2VydGVkW25hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyBodHRwczovL2VzYmVuY2guY29tL2JlbmNoLzViZjczNzFhNGNkN2U2MDA5ZWY2MWQwYVxuICAgIHZhciBjb21tZW50U3RhcnQgPSAvXFwvXFwqL2c7XG4gICAgdmFyIGNvbW1lbnRFbmQgPSAvXFwqXFwvL2c7XG4gICAgc3R5bGlzLnVzZShmdW5jdGlvbiAoY29udGV4dCwgY29udGVudCkge1xuICAgICAgc3dpdGNoIChjb250ZXh0KSB7XG4gICAgICAgIGNhc2UgLTE6XG4gICAgICAgICAge1xuICAgICAgICAgICAgd2hpbGUgKGNvbW1lbnRTdGFydC50ZXN0KGNvbnRlbnQpKSB7XG4gICAgICAgICAgICAgIGNvbW1lbnRFbmQubGFzdEluZGV4ID0gY29tbWVudFN0YXJ0Lmxhc3RJbmRleDtcblxuICAgICAgICAgICAgICBpZiAoY29tbWVudEVuZC50ZXN0KGNvbnRlbnQpKSB7XG4gICAgICAgICAgICAgICAgY29tbWVudFN0YXJ0Lmxhc3RJbmRleCA9IGNvbW1lbnRFbmQubGFzdEluZGV4O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3VyIHN0eWxlcyBoYXZlIGFuIHVudGVybWluYXRlZCBjb21tZW50IChcIi8qXCIgd2l0aG91dCBjb3JyZXNwb25kaW5nIFwiKi9cIikuJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbW1lbnRTdGFydC5sYXN0SW5kZXggPSAwO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHN0eWxpcy51c2UoZnVuY3Rpb24gKGNvbnRleHQsIGNvbnRlbnQsIHNlbGVjdG9ycykge1xuICAgICAgc3dpdGNoIChjb250ZXh0KSB7XG4gICAgICAgIGNhc2UgLTE6XG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFyIGZsYWcgPSAnZW1vdGlvbi1kaXNhYmxlLXNlcnZlci1yZW5kZXJpbmctdW5zYWZlLXNlbGVjdG9yLXdhcm5pbmctcGxlYXNlLWRvLW5vdC11c2UtdGhpcy10aGUtd2FybmluZy1leGlzdHMtZm9yLWEtcmVhc29uJztcbiAgICAgICAgICAgIHZhciB1bnNhZmVQc2V1ZG9DbGFzc2VzID0gY29udGVudC5tYXRjaCgvKDpmaXJzdHw6bnRofDpudGgtbGFzdCktY2hpbGQvZyk7XG5cbiAgICAgICAgICAgIGlmICh1bnNhZmVQc2V1ZG9DbGFzc2VzICYmIGNhY2hlLmNvbXBhdCAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICB1bnNhZmVQc2V1ZG9DbGFzc2VzLmZvckVhY2goZnVuY3Rpb24gKHVuc2FmZVBzZXVkb0NsYXNzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlnbm9yZVJlZ0V4cCA9IG5ldyBSZWdFeHAodW5zYWZlUHNldWRvQ2xhc3MgKyBcIi4qXFxcXC9cXFxcKiBcIiArIGZsYWcgKyBcIiBcXFxcKlxcXFwvXCIpO1xuICAgICAgICAgICAgICAgIHZhciBpZ25vcmUgPSBpZ25vcmVSZWdFeHAudGVzdChjb250ZW50KTtcblxuICAgICAgICAgICAgICAgIGlmICh1bnNhZmVQc2V1ZG9DbGFzcyAmJiAhaWdub3JlKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiVGhlIHBzZXVkbyBjbGFzcyBcXFwiXCIgKyB1bnNhZmVQc2V1ZG9DbGFzcyArIFwiXFxcIiBpcyBwb3RlbnRpYWxseSB1bnNhZmUgd2hlbiBkb2luZyBzZXJ2ZXItc2lkZSByZW5kZXJpbmcuIFRyeSBjaGFuZ2luZyBpdCB0byBcXFwiXCIgKyB1bnNhZmVQc2V1ZG9DbGFzcy5zcGxpdCgnLWNoaWxkJylbMF0gKyBcIi1vZi10eXBlXFxcIi5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdmFyIGNhY2hlID0ge1xuICAgIGtleToga2V5LFxuICAgIHNoZWV0OiBuZXcgU3R5bGVTaGVldCh7XG4gICAgICBrZXk6IGtleSxcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLFxuICAgICAgbm9uY2U6IG9wdGlvbnMubm9uY2UsXG4gICAgICBzcGVlZHk6IG9wdGlvbnMuc3BlZWR5XG4gICAgfSksXG4gICAgbm9uY2U6IG9wdGlvbnMubm9uY2UsXG4gICAgaW5zZXJ0ZWQ6IGluc2VydGVkLFxuICAgIHJlZ2lzdGVyZWQ6IHt9LFxuICAgIGluc2VydDogX2luc2VydFxuICB9O1xuICByZXR1cm4gY2FjaGU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDYWNoZTtcbiIsImltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlJztcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJ0BlbW90aW9uL2NhY2hlJztcbmltcG9ydCB7IGggYXMgaGFzT3duUHJvcGVydHksIEUgYXMgRW1vdGlvbiwgYyBhcyBjcmVhdGVFbW90aW9uUHJvcHMsIHcgYXMgd2l0aEVtb3Rpb25DYWNoZSwgVCBhcyBUaGVtZUNvbnRleHQgfSBmcm9tICcuL2Vtb3Rpb24tZWxlbWVudC0wNGQ4NTEzNC5icm93c2VyLmVzbS5qcyc7XG5leHBvcnQgeyBDIGFzIENhY2hlUHJvdmlkZXIsIFQgYXMgVGhlbWVDb250ZXh0LCB3IGFzIHdpdGhFbW90aW9uQ2FjaGUgfSBmcm9tICcuL2Vtb3Rpb24tZWxlbWVudC0wNGQ4NTEzNC5icm93c2VyLmVzbS5qcyc7XG5pbXBvcnQgeyBpbnNlcnRTdHlsZXMsIGdldFJlZ2lzdGVyZWRTdHlsZXMgfSBmcm9tICdAZW1vdGlvbi91dGlscyc7XG5pbXBvcnQgeyBzZXJpYWxpemVTdHlsZXMgfSBmcm9tICdAZW1vdGlvbi9zZXJpYWxpemUnO1xuaW1wb3J0IHsgU3R5bGVTaGVldCB9IGZyb20gJ0BlbW90aW9uL3NoZWV0JztcbmltcG9ydCBjc3MgZnJvbSAnQGVtb3Rpb24vY3NzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcblxudmFyIGpzeCA9IGZ1bmN0aW9uIGpzeCh0eXBlLCBwcm9wcykge1xuICB2YXIgYXJncyA9IGFyZ3VtZW50cztcblxuICBpZiAocHJvcHMgPT0gbnVsbCB8fCAhaGFzT3duUHJvcGVydHkuY2FsbChwcm9wcywgJ2NzcycpKSB7XG4gICAgLy8gJEZsb3dGaXhNZVxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50LmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gIH1cblxuICB2YXIgYXJnc0xlbmd0aCA9IGFyZ3MubGVuZ3RoO1xuICB2YXIgY3JlYXRlRWxlbWVudEFyZ0FycmF5ID0gbmV3IEFycmF5KGFyZ3NMZW5ndGgpO1xuICBjcmVhdGVFbGVtZW50QXJnQXJyYXlbMF0gPSBFbW90aW9uO1xuICBjcmVhdGVFbGVtZW50QXJnQXJyYXlbMV0gPSBjcmVhdGVFbW90aW9uUHJvcHModHlwZSwgcHJvcHMpO1xuXG4gIGZvciAodmFyIGkgPSAyOyBpIDwgYXJnc0xlbmd0aDsgaSsrKSB7XG4gICAgY3JlYXRlRWxlbWVudEFyZ0FycmF5W2ldID0gYXJnc1tpXTtcbiAgfSAvLyAkRmxvd0ZpeE1lXG5cblxuICByZXR1cm4gY3JlYXRlRWxlbWVudC5hcHBseShudWxsLCBjcmVhdGVFbGVtZW50QXJnQXJyYXkpO1xufTtcblxudmFyIHdhcm5lZEFib3V0Q3NzUHJvcEZvckdsb2JhbCA9IGZhbHNlO1xudmFyIEdsb2JhbCA9IC8qICNfX1BVUkVfXyAqL3dpdGhFbW90aW9uQ2FjaGUoZnVuY3Rpb24gKHByb3BzLCBjYWNoZSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhd2FybmVkQWJvdXRDc3NQcm9wRm9yR2xvYmFsICYmICggLy8gY2hlY2sgZm9yIGNsYXNzTmFtZSBhcyB3ZWxsIHNpbmNlIHRoZSB1c2VyIGlzXG4gIC8vIHByb2JhYmx5IHVzaW5nIHRoZSBjdXN0b20gY3JlYXRlRWxlbWVudCB3aGljaFxuICAvLyBtZWFucyBpdCB3aWxsIGJlIHR1cm5lZCBpbnRvIGEgY2xhc3NOYW1lIHByb3BcbiAgLy8gJEZsb3dGaXhNZSBJIGRvbid0IHJlYWxseSB3YW50IHRvIGFkZCBpdCB0byB0aGUgdHlwZSBzaW5jZSBpdCBzaG91bGRuJ3QgYmUgdXNlZFxuICBwcm9wcy5jbGFzc05hbWUgfHwgcHJvcHMuY3NzKSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJJdCBsb29rcyBsaWtlIHlvdSdyZSB1c2luZyB0aGUgY3NzIHByb3Agb24gR2xvYmFsLCBkaWQgeW91IG1lYW4gdG8gdXNlIHRoZSBzdHlsZXMgcHJvcCBpbnN0ZWFkP1wiKTtcbiAgICB3YXJuZWRBYm91dENzc1Byb3BGb3JHbG9iYWwgPSB0cnVlO1xuICB9XG5cbiAgdmFyIHN0eWxlcyA9IHByb3BzLnN0eWxlcztcblxuICBpZiAodHlwZW9mIHN0eWxlcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChUaGVtZUNvbnRleHQuQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uICh0aGVtZSkge1xuICAgICAgdmFyIHNlcmlhbGl6ZWQgPSBzZXJpYWxpemVTdHlsZXMoW3N0eWxlcyh0aGVtZSldKTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChJbm5lckdsb2JhbCwge1xuICAgICAgICBzZXJpYWxpemVkOiBzZXJpYWxpemVkLFxuICAgICAgICBjYWNoZTogY2FjaGVcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIHNlcmlhbGl6ZWQgPSBzZXJpYWxpemVTdHlsZXMoW3N0eWxlc10pO1xuICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoSW5uZXJHbG9iYWwsIHtcbiAgICBzZXJpYWxpemVkOiBzZXJpYWxpemVkLFxuICAgIGNhY2hlOiBjYWNoZVxuICB9KTtcbn0pO1xuXG4vLyBtYWludGFpbiBwbGFjZSBvdmVyIHJlcmVuZGVycy5cbi8vIGluaXRpYWwgcmVuZGVyIGZyb20gYnJvd3NlciwgaW5zZXJ0QmVmb3JlIGNvbnRleHQuc2hlZXQudGFnc1swXSBvciBpZiBhIHN0eWxlIGhhc24ndCBiZWVuIGluc2VydGVkIHRoZXJlIHlldCwgYXBwZW5kQ2hpbGRcbi8vIGluaXRpYWwgY2xpZW50LXNpZGUgcmVuZGVyIGZyb20gU1NSLCB1c2UgcGxhY2Ugb2YgaHlkcmF0aW5nIHRhZ1xudmFyIElubmVyR2xvYmFsID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKElubmVyR2xvYmFsLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBJbm5lckdsb2JhbChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICAgIHJldHVybiBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHx8IHRoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gSW5uZXJHbG9iYWwucHJvdG90eXBlO1xuXG4gIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2hlZXQgPSBuZXcgU3R5bGVTaGVldCh7XG4gICAgICBrZXk6IHRoaXMucHJvcHMuY2FjaGUua2V5ICsgXCItZ2xvYmFsXCIsXG4gICAgICBub25jZTogdGhpcy5wcm9wcy5jYWNoZS5zaGVldC5ub25jZSxcbiAgICAgIGNvbnRhaW5lcjogdGhpcy5wcm9wcy5jYWNoZS5zaGVldC5jb250YWluZXJcbiAgICB9KTsgLy8gJEZsb3dGaXhNZVxuXG4gICAgdmFyIG5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic3R5bGVbZGF0YS1lbW90aW9uLVwiICsgdGhpcy5wcm9wcy5jYWNoZS5rZXkgKyBcIj1cXFwiXCIgKyB0aGlzLnByb3BzLnNlcmlhbGl6ZWQubmFtZSArIFwiXFxcIl1cIik7XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5zaGVldC50YWdzLnB1c2gobm9kZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMuY2FjaGUuc2hlZXQudGFncy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuc2hlZXQuYmVmb3JlID0gdGhpcy5wcm9wcy5jYWNoZS5zaGVldC50YWdzWzBdO1xuICAgIH1cblxuICAgIHRoaXMuaW5zZXJ0U3R5bGVzKCk7XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBpZiAocHJldlByb3BzLnNlcmlhbGl6ZWQubmFtZSAhPT0gdGhpcy5wcm9wcy5zZXJpYWxpemVkLm5hbWUpIHtcbiAgICAgIHRoaXMuaW5zZXJ0U3R5bGVzKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5pbnNlcnRTdHlsZXMgPSBmdW5jdGlvbiBpbnNlcnRTdHlsZXMkMSgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5zZXJpYWxpemVkLm5leHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gaW5zZXJ0IGtleWZyYW1lc1xuICAgICAgaW5zZXJ0U3R5bGVzKHRoaXMucHJvcHMuY2FjaGUsIHRoaXMucHJvcHMuc2VyaWFsaXplZC5uZXh0LCB0cnVlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zaGVldC50YWdzLmxlbmd0aCkge1xuICAgICAgLy8gaWYgdGhpcyBkb2Vzbid0IGV4aXN0IHRoZW4gaXQgd2lsbCBiZSBudWxsIHNvIHRoZSBzdHlsZSBlbGVtZW50IHdpbGwgYmUgYXBwZW5kZWRcbiAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5zaGVldC50YWdzW3RoaXMuc2hlZXQudGFncy5sZW5ndGggLSAxXS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICB0aGlzLnNoZWV0LmJlZm9yZSA9IGVsZW1lbnQ7XG4gICAgICB0aGlzLnNoZWV0LmZsdXNoKCk7XG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5jYWNoZS5pbnNlcnQoXCJcIiwgdGhpcy5wcm9wcy5zZXJpYWxpemVkLCB0aGlzLnNoZWV0LCBmYWxzZSk7XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5zaGVldC5mbHVzaCgpO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICByZXR1cm4gSW5uZXJHbG9iYWw7XG59KENvbXBvbmVudCk7XG5cbnZhciBrZXlmcmFtZXMgPSBmdW5jdGlvbiBrZXlmcmFtZXMoKSB7XG4gIHZhciBpbnNlcnRhYmxlID0gY3NzLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKTtcbiAgdmFyIG5hbWUgPSBcImFuaW1hdGlvbi1cIiArIGluc2VydGFibGUubmFtZTsgLy8gJEZsb3dGaXhNZVxuXG4gIHJldHVybiB7XG4gICAgbmFtZTogbmFtZSxcbiAgICBzdHlsZXM6IFwiQGtleWZyYW1lcyBcIiArIG5hbWUgKyBcIntcIiArIGluc2VydGFibGUuc3R5bGVzICsgXCJ9XCIsXG4gICAgYW5pbTogMSxcbiAgICB0b1N0cmluZzogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICByZXR1cm4gXCJfRU1PX1wiICsgdGhpcy5uYW1lICsgXCJfXCIgKyB0aGlzLnN0eWxlcyArIFwiX0VNT19cIjtcbiAgICB9XG4gIH07XG59O1xuXG52YXIgY2xhc3NuYW1lcyA9IGZ1bmN0aW9uIGNsYXNzbmFtZXMoYXJncykge1xuICB2YXIgbGVuID0gYXJncy5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIGNscyA9ICcnO1xuXG4gIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICB2YXIgYXJnID0gYXJnc1tpXTtcbiAgICBpZiAoYXJnID09IG51bGwpIGNvbnRpbnVlO1xuICAgIHZhciB0b0FkZCA9IHZvaWQgMDtcblxuICAgIHN3aXRjaCAodHlwZW9mIGFyZykge1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICB7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuICAgICAgICAgICAgdG9BZGQgPSBjbGFzc25hbWVzKGFyZyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRvQWRkID0gJyc7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGsgaW4gYXJnKSB7XG4gICAgICAgICAgICAgIGlmIChhcmdba10gJiYgaykge1xuICAgICAgICAgICAgICAgIHRvQWRkICYmICh0b0FkZCArPSAnICcpO1xuICAgICAgICAgICAgICAgIHRvQWRkICs9IGs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB7XG4gICAgICAgICAgdG9BZGQgPSBhcmc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodG9BZGQpIHtcbiAgICAgIGNscyAmJiAoY2xzICs9ICcgJyk7XG4gICAgICBjbHMgKz0gdG9BZGQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNscztcbn07XG5cbmZ1bmN0aW9uIG1lcmdlKHJlZ2lzdGVyZWQsIGNzcywgY2xhc3NOYW1lKSB7XG4gIHZhciByZWdpc3RlcmVkU3R5bGVzID0gW107XG4gIHZhciByYXdDbGFzc05hbWUgPSBnZXRSZWdpc3RlcmVkU3R5bGVzKHJlZ2lzdGVyZWQsIHJlZ2lzdGVyZWRTdHlsZXMsIGNsYXNzTmFtZSk7XG5cbiAgaWYgKHJlZ2lzdGVyZWRTdHlsZXMubGVuZ3RoIDwgMikge1xuICAgIHJldHVybiBjbGFzc05hbWU7XG4gIH1cblxuICByZXR1cm4gcmF3Q2xhc3NOYW1lICsgY3NzKHJlZ2lzdGVyZWRTdHlsZXMpO1xufVxuXG52YXIgTm9vcCA9IGZ1bmN0aW9uIE5vb3AoKSB7XG4gIHJldHVybiBudWxsO1xufTtcblxudmFyIENsYXNzTmFtZXMgPSB3aXRoRW1vdGlvbkNhY2hlKGZ1bmN0aW9uIChwcm9wcywgY29udGV4dCkge1xuICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoVGhlbWVDb250ZXh0LkNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAodGhlbWUpIHtcbiAgICB2YXIgaGFzUmVuZGVyZWQgPSBmYWxzZTtcblxuICAgIHZhciBjc3MgPSBmdW5jdGlvbiBjc3MoKSB7XG4gICAgICBpZiAoaGFzUmVuZGVyZWQgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NzcyBjYW4gb25seSBiZSB1c2VkIGR1cmluZyByZW5kZXInKTtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHZhciBzZXJpYWxpemVkID0gc2VyaWFsaXplU3R5bGVzKGFyZ3MsIGNvbnRleHQucmVnaXN0ZXJlZCk7XG5cbiAgICAgIHtcbiAgICAgICAgaW5zZXJ0U3R5bGVzKGNvbnRleHQsIHNlcmlhbGl6ZWQsIGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRleHQua2V5ICsgXCItXCIgKyBzZXJpYWxpemVkLm5hbWU7XG4gICAgfTtcblxuICAgIHZhciBjeCA9IGZ1bmN0aW9uIGN4KCkge1xuICAgICAgaWYgKGhhc1JlbmRlcmVkICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjeCBjYW4gb25seSBiZSB1c2VkIGR1cmluZyByZW5kZXInKTtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG1lcmdlKGNvbnRleHQucmVnaXN0ZXJlZCwgY3NzLCBjbGFzc25hbWVzKGFyZ3MpKTtcbiAgICB9O1xuXG4gICAgdmFyIGNvbnRlbnQgPSB7XG4gICAgICBjc3M6IGNzcyxcbiAgICAgIGN4OiBjeCxcbiAgICAgIHRoZW1lOiB0aGVtZVxuICAgIH07XG4gICAgdmFyIGVsZSA9IHByb3BzLmNoaWxkcmVuKGNvbnRlbnQpO1xuICAgIGhhc1JlbmRlcmVkID0gdHJ1ZTtcbiAgICB2YXIgcG9zc2libHlTdHlsZUVsZW1lbnQgPSAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChOb29wLCBudWxsKTtcblxuXG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KEZyYWdtZW50LCBudWxsLCBwb3NzaWJseVN0eWxlRWxlbWVudCwgZWxlKTtcbiAgfSk7XG59KTtcblxuZXhwb3J0IHsgQ2xhc3NOYW1lcywgR2xvYmFsLCBqc3ggYXMgY3JlYXRlRWxlbWVudCwganN4LCBrZXlmcmFtZXMgfTtcbiIsImltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c0xvb3NlJztcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIGZvcndhcmRSZWYsIGNyZWF0ZUVsZW1lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNyZWF0ZUNhY2hlIGZyb20gJ0BlbW90aW9uL2NhY2hlJztcbmltcG9ydCB7IGdldFJlZ2lzdGVyZWRTdHlsZXMsIGluc2VydFN0eWxlcyB9IGZyb20gJ0BlbW90aW9uL3V0aWxzJztcbmltcG9ydCB7IHNlcmlhbGl6ZVN0eWxlcyB9IGZyb20gJ0BlbW90aW9uL3NlcmlhbGl6ZSc7XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbnZhciBFbW90aW9uQ2FjaGVDb250ZXh0ID0gLyojX19QVVJFX18qL2NyZWF0ZUNvbnRleHQoIC8vIHdlJ3JlIGRvaW5nIHRoaXMgdG8gYXZvaWQgcHJlY29uc3RydWN0J3MgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIGluIHRoaXMgb25lIGNhc2Vcbi8vIGJlY2F1c2UgdGhpcyBtb2R1bGUgaXMgcHJpbWFyaWx5IGludGVuZGVkIGZvciB0aGUgYnJvd3NlciBhbmQgbm9kZVxuLy8gYnV0IGl0J3MgYWxzbyByZXF1aXJlZCBpbiByZWFjdCBuYXRpdmUgYW5kIHNpbWlsYXIgZW52aXJvbm1lbnRzIHNvbWV0aW1lc1xuLy8gYW5kIHdlIGNvdWxkIGhhdmUgYSBzcGVjaWFsIGJ1aWxkIGp1c3QgZm9yIHRoYXRcbi8vIGJ1dCB0aGlzIGlzIG11Y2ggZWFzaWVyIGFuZCB0aGUgbmF0aXZlIHBhY2thZ2VzXG4vLyBtaWdodCB1c2UgYSBkaWZmZXJlbnQgdGhlbWUgY29udGV4dCBpbiB0aGUgZnV0dXJlIGFueXdheVxudHlwZW9mIEhUTUxFbGVtZW50ICE9PSAndW5kZWZpbmVkJyA/IGNyZWF0ZUNhY2hlKCkgOiBudWxsKTtcbnZhciBUaGVtZUNvbnRleHQgPSAvKiNfX1BVUkVfXyovY3JlYXRlQ29udGV4dCh7fSk7XG52YXIgQ2FjaGVQcm92aWRlciA9IEVtb3Rpb25DYWNoZUNvbnRleHQuUHJvdmlkZXI7XG5cbnZhciB3aXRoRW1vdGlvbkNhY2hlID0gZnVuY3Rpb24gd2l0aEVtb3Rpb25DYWNoZShmdW5jKSB7XG4gIHZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIocHJvcHMsIHJlZikge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChFbW90aW9uQ2FjaGVDb250ZXh0LkNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoY2FjaGUpIHtcbiAgICAgIHJldHVybiBmdW5jKHByb3BzLCBjYWNoZSwgcmVmKTtcbiAgICB9KTtcbiAgfTsgLy8gJEZsb3dGaXhNZVxuXG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9mb3J3YXJkUmVmKHJlbmRlcik7XG59O1xuXG4vLyB0aHVzIHdlIG9ubHkgbmVlZCB0byByZXBsYWNlIHdoYXQgaXMgYSB2YWxpZCBjaGFyYWN0ZXIgZm9yIEpTLCBidXQgbm90IGZvciBDU1NcblxudmFyIHNhbml0aXplSWRlbnRpZmllciA9IGZ1bmN0aW9uIHNhbml0aXplSWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHJldHVybiBpZGVudGlmaWVyLnJlcGxhY2UoL1xcJC9nLCAnLScpO1xufTtcblxudmFyIHR5cGVQcm9wTmFtZSA9ICdfX0VNT1RJT05fVFlQRV9QTEVBU0VfRE9fTk9UX1VTRV9fJztcbnZhciBsYWJlbFByb3BOYW1lID0gJ19fRU1PVElPTl9MQUJFTF9QTEVBU0VfRE9fTk9UX1VTRV9fJztcbnZhciBjcmVhdGVFbW90aW9uUHJvcHMgPSBmdW5jdGlvbiBjcmVhdGVFbW90aW9uUHJvcHModHlwZSwgcHJvcHMpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIHByb3BzLmNzcyA9PT0gJ3N0cmluZycgJiYgLy8gY2hlY2sgaWYgdGhlcmUgaXMgYSBjc3MgZGVjbGFyYXRpb25cbiAgcHJvcHMuY3NzLmluZGV4T2YoJzonKSAhPT0gLTEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJTdHJpbmdzIGFyZSBub3QgYWxsb3dlZCBhcyBjc3MgcHJvcCB2YWx1ZXMsIHBsZWFzZSB3cmFwIGl0IGluIGEgY3NzIHRlbXBsYXRlIGxpdGVyYWwgZnJvbSAnQGVtb3Rpb24vY3NzJyBsaWtlIHRoaXM6IGNzc2BcIiArIHByb3BzLmNzcyArIFwiYFwiKTtcbiAgfVxuXG4gIHZhciBuZXdQcm9wcyA9IHt9O1xuXG4gIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3BzLCBrZXkpKSB7XG4gICAgICBuZXdQcm9wc1trZXldID0gcHJvcHNba2V5XTtcbiAgICB9XG4gIH1cblxuICBuZXdQcm9wc1t0eXBlUHJvcE5hbWVdID0gdHlwZTsgLy8gVE9ETzogY2hlY2sgaWYgdGhpcyBzdGlsbCB3b3JrcyB3aXRoIGFsbCBvZiB0aG9zZSBkaWZmZXJlbnQgSlNYIGZ1bmN0aW9uc1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgdmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG5cbiAgICBpZiAoZXJyb3Iuc3RhY2spIHtcbiAgICAgIC8vIGNocm9tZVxuICAgICAgdmFyIG1hdGNoID0gZXJyb3Iuc3RhY2subWF0Y2goL2F0ICg/Ok9iamVjdFxcLnxNb2R1bGVcXC58KSg/OmpzeHxjcmVhdGVFbW90aW9uUHJvcHMpLipcXG5cXHMrYXQgKD86T2JqZWN0XFwufCkoW0EtWl1bQS1aYS16JF0rKSAvKTtcblxuICAgICAgaWYgKCFtYXRjaCkge1xuICAgICAgICAvLyBzYWZhcmkgYW5kIGZpcmVmb3hcbiAgICAgICAgbWF0Y2ggPSBlcnJvci5zdGFjay5tYXRjaCgvLipcXG4oW0EtWl1bQS1aYS16JF0rKUAvKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIG5ld1Byb3BzW2xhYmVsUHJvcE5hbWVdID0gc2FuaXRpemVJZGVudGlmaWVyKG1hdGNoWzFdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3UHJvcHM7XG59O1xuXG52YXIgTm9vcCA9IGZ1bmN0aW9uIE5vb3AoKSB7XG4gIHJldHVybiBudWxsO1xufTtcblxudmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcihjYWNoZSwgcHJvcHMsIHRoZW1lLCByZWYpIHtcbiAgdmFyIGNzc1Byb3AgPSB0aGVtZSA9PT0gbnVsbCA/IHByb3BzLmNzcyA6IHByb3BzLmNzcyh0aGVtZSk7IC8vIHNvIHRoYXQgdXNpbmcgYGNzc2AgZnJvbSBgZW1vdGlvbmAgYW5kIHBhc3NpbmcgdGhlIHJlc3VsdCB0byB0aGUgY3NzIHByb3Agd29ya3NcbiAgLy8gbm90IHBhc3NpbmcgdGhlIHJlZ2lzdGVyZWQgY2FjaGUgdG8gc2VyaWFsaXplU3R5bGVzIGJlY2F1c2UgaXQgd291bGRcbiAgLy8gbWFrZSBjZXJ0YWluIGJhYmVsIG9wdGltaXNhdGlvbnMgbm90IHBvc3NpYmxlXG5cbiAgaWYgKHR5cGVvZiBjc3NQcm9wID09PSAnc3RyaW5nJyAmJiBjYWNoZS5yZWdpc3RlcmVkW2Nzc1Byb3BdICE9PSB1bmRlZmluZWQpIHtcbiAgICBjc3NQcm9wID0gY2FjaGUucmVnaXN0ZXJlZFtjc3NQcm9wXTtcbiAgfVxuXG4gIHZhciB0eXBlID0gcHJvcHNbdHlwZVByb3BOYW1lXTtcbiAgdmFyIHJlZ2lzdGVyZWRTdHlsZXMgPSBbY3NzUHJvcF07XG4gIHZhciBjbGFzc05hbWUgPSAnJztcblxuICBpZiAodHlwZW9mIHByb3BzLmNsYXNzTmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICBjbGFzc05hbWUgPSBnZXRSZWdpc3RlcmVkU3R5bGVzKGNhY2hlLnJlZ2lzdGVyZWQsIHJlZ2lzdGVyZWRTdHlsZXMsIHByb3BzLmNsYXNzTmFtZSk7XG4gIH0gZWxzZSBpZiAocHJvcHMuY2xhc3NOYW1lICE9IG51bGwpIHtcbiAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUgKyBcIiBcIjtcbiAgfVxuXG4gIHZhciBzZXJpYWxpemVkID0gc2VyaWFsaXplU3R5bGVzKHJlZ2lzdGVyZWRTdHlsZXMpO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHNlcmlhbGl6ZWQubmFtZS5pbmRleE9mKCctJykgPT09IC0xKSB7XG4gICAgdmFyIGxhYmVsRnJvbVN0YWNrID0gcHJvcHNbbGFiZWxQcm9wTmFtZV07XG5cbiAgICBpZiAobGFiZWxGcm9tU3RhY2spIHtcbiAgICAgIHNlcmlhbGl6ZWQgPSBzZXJpYWxpemVTdHlsZXMoW3NlcmlhbGl6ZWQsICdsYWJlbDonICsgbGFiZWxGcm9tU3RhY2sgKyAnOyddKTtcbiAgICB9XG4gIH1cblxuICB2YXIgcnVsZXMgPSBpbnNlcnRTdHlsZXMoY2FjaGUsIHNlcmlhbGl6ZWQsIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyk7XG4gIGNsYXNzTmFtZSArPSBjYWNoZS5rZXkgKyBcIi1cIiArIHNlcmlhbGl6ZWQubmFtZTtcbiAgdmFyIG5ld1Byb3BzID0ge307XG5cbiAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwocHJvcHMsIGtleSkgJiYga2V5ICE9PSAnY3NzJyAmJiBrZXkgIT09IHR5cGVQcm9wTmFtZSAmJiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyB8fCBrZXkgIT09IGxhYmVsUHJvcE5hbWUpKSB7XG4gICAgICBuZXdQcm9wc1trZXldID0gcHJvcHNba2V5XTtcbiAgICB9XG4gIH1cblxuICBuZXdQcm9wcy5yZWYgPSByZWY7XG4gIG5ld1Byb3BzLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgdmFyIGVsZSA9IC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KHR5cGUsIG5ld1Byb3BzKTtcbiAgdmFyIHBvc3NpYmx5U3R5bGVFbGVtZW50ID0gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoTm9vcCwgbnVsbCk7XG5cblxuICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoRnJhZ21lbnQsIG51bGwsIHBvc3NpYmx5U3R5bGVFbGVtZW50LCBlbGUpO1xufTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cblxudmFyIEVtb3Rpb24gPSAvKiAjX19QVVJFX18gKi93aXRoRW1vdGlvbkNhY2hlKGZ1bmN0aW9uIChwcm9wcywgY2FjaGUsIHJlZikge1xuICBpZiAodHlwZW9mIHByb3BzLmNzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChUaGVtZUNvbnRleHQuQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uICh0aGVtZSkge1xuICAgICAgcmV0dXJuIHJlbmRlcihjYWNoZSwgcHJvcHMsIHRoZW1lLCByZWYpO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHJlbmRlcihjYWNoZSwgcHJvcHMsIG51bGwsIHJlZik7XG59KTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgRW1vdGlvbi5kaXNwbGF5TmFtZSA9ICdFbW90aW9uQ3NzUHJvcEludGVybmFsJztcbn1cblxuZXhwb3J0IHsgQ2FjaGVQcm92aWRlciBhcyBDLCBFbW90aW9uIGFzIEUsIFRoZW1lQ29udGV4dCBhcyBULCBjcmVhdGVFbW90aW9uUHJvcHMgYXMgYywgaGFzT3duUHJvcGVydHkgYXMgaCwgd2l0aEVtb3Rpb25DYWNoZSBhcyB3IH07XG4iLCJpbXBvcnQgeyBzZXJpYWxpemVTdHlsZXMgfSBmcm9tICdAZW1vdGlvbi9zZXJpYWxpemUnO1xuXG5mdW5jdGlvbiBjc3MoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gc2VyaWFsaXplU3R5bGVzKGFyZ3MpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjc3M7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuLy8gSW5zcGlyZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL2dhcnljb3VydC9tdXJtdXJoYXNoLWpzXG4vLyBQb3J0ZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vYWFwcGxlYnkvc21oYXNoZXIvYmxvYi82MWEwNTMwZjI4Mjc3ZjJlODUwYmZjMzk2MDBjZTYxZDAyYjUxOGRlL3NyYy9NdXJtdXJIYXNoMi5jcHAjTDM3LUw4NlxuZnVuY3Rpb24gbXVybXVyMihzdHIpIHtcbiAgLy8gJ20nIGFuZCAncicgYXJlIG1peGluZyBjb25zdGFudHMgZ2VuZXJhdGVkIG9mZmxpbmUuXG4gIC8vIFRoZXkncmUgbm90IHJlYWxseSAnbWFnaWMnLCB0aGV5IGp1c3QgaGFwcGVuIHRvIHdvcmsgd2VsbC5cbiAgLy8gY29uc3QgbSA9IDB4NWJkMWU5OTU7XG4gIC8vIGNvbnN0IHIgPSAyNDtcbiAgLy8gSW5pdGlhbGl6ZSB0aGUgaGFzaFxuICB2YXIgaCA9IDA7IC8vIE1peCA0IGJ5dGVzIGF0IGEgdGltZSBpbnRvIHRoZSBoYXNoXG5cbiAgdmFyIGssXG4gICAgICBpID0gMCxcbiAgICAgIGxlbiA9IHN0ci5sZW5ndGg7XG5cbiAgZm9yICg7IGxlbiA+PSA0OyArK2ksIGxlbiAtPSA0KSB7XG4gICAgayA9IHN0ci5jaGFyQ29kZUF0KGkpICYgMHhmZiB8IChzdHIuY2hhckNvZGVBdCgrK2kpICYgMHhmZikgPDwgOCB8IChzdHIuY2hhckNvZGVBdCgrK2kpICYgMHhmZikgPDwgMTYgfCAoc3RyLmNoYXJDb2RlQXQoKytpKSAmIDB4ZmYpIDw8IDI0O1xuICAgIGsgPVxuICAgIC8qIE1hdGguaW11bChrLCBtKTogKi9cbiAgICAoayAmIDB4ZmZmZikgKiAweDViZDFlOTk1ICsgKChrID4+PiAxNikgKiAweGU5OTUgPDwgMTYpO1xuICAgIGsgXj1cbiAgICAvKiBrID4+PiByOiAqL1xuICAgIGsgPj4+IDI0O1xuICAgIGggPVxuICAgIC8qIE1hdGguaW11bChrLCBtKTogKi9cbiAgICAoayAmIDB4ZmZmZikgKiAweDViZDFlOTk1ICsgKChrID4+PiAxNikgKiAweGU5OTUgPDwgMTYpIF5cbiAgICAvKiBNYXRoLmltdWwoaCwgbSk6ICovXG4gICAgKGggJiAweGZmZmYpICogMHg1YmQxZTk5NSArICgoaCA+Pj4gMTYpICogMHhlOTk1IDw8IDE2KTtcbiAgfSAvLyBIYW5kbGUgdGhlIGxhc3QgZmV3IGJ5dGVzIG9mIHRoZSBpbnB1dCBhcnJheVxuXG5cbiAgc3dpdGNoIChsZW4pIHtcbiAgICBjYXNlIDM6XG4gICAgICBoIF49IChzdHIuY2hhckNvZGVBdChpICsgMikgJiAweGZmKSA8PCAxNjtcblxuICAgIGNhc2UgMjpcbiAgICAgIGggXj0gKHN0ci5jaGFyQ29kZUF0KGkgKyAxKSAmIDB4ZmYpIDw8IDg7XG5cbiAgICBjYXNlIDE6XG4gICAgICBoIF49IHN0ci5jaGFyQ29kZUF0KGkpICYgMHhmZjtcbiAgICAgIGggPVxuICAgICAgLyogTWF0aC5pbXVsKGgsIG0pOiAqL1xuICAgICAgKGggJiAweGZmZmYpICogMHg1YmQxZTk5NSArICgoaCA+Pj4gMTYpICogMHhlOTk1IDw8IDE2KTtcbiAgfSAvLyBEbyBhIGZldyBmaW5hbCBtaXhlcyBvZiB0aGUgaGFzaCB0byBlbnN1cmUgdGhlIGxhc3QgZmV3XG4gIC8vIGJ5dGVzIGFyZSB3ZWxsLWluY29ycG9yYXRlZC5cblxuXG4gIGggXj0gaCA+Pj4gMTM7XG4gIGggPVxuICAvKiBNYXRoLmltdWwoaCwgbSk6ICovXG4gIChoICYgMHhmZmZmKSAqIDB4NWJkMWU5OTUgKyAoKGggPj4+IDE2KSAqIDB4ZTk5NSA8PCAxNik7XG4gIHJldHVybiAoKGggXiBoID4+PiAxNSkgPj4+IDApLnRvU3RyaW5nKDM2KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbXVybXVyMjtcbiIsImltcG9ydCBtZW1vaXplIGZyb20gJ0BlbW90aW9uL21lbW9pemUnO1xuXG52YXIgcmVhY3RQcm9wc1JlZ2V4ID0gL14oKGNoaWxkcmVufGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MfGtleXxyZWZ8YXV0b0ZvY3VzfGRlZmF1bHRWYWx1ZXxkZWZhdWx0Q2hlY2tlZHxpbm5lckhUTUx8c3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nfHN1cHByZXNzSHlkcmF0aW9uV2FybmluZ3x2YWx1ZUxpbmt8YWNjZXB0fGFjY2VwdENoYXJzZXR8YWNjZXNzS2V5fGFjdGlvbnxhbGxvd3xhbGxvd1VzZXJNZWRpYXxhbGxvd1BheW1lbnRSZXF1ZXN0fGFsbG93RnVsbFNjcmVlbnxhbGxvd1RyYW5zcGFyZW5jeXxhbHR8YXN5bmN8YXV0b0NvbXBsZXRlfGF1dG9QbGF5fGNhcHR1cmV8Y2VsbFBhZGRpbmd8Y2VsbFNwYWNpbmd8Y2hhbGxlbmdlfGNoYXJTZXR8Y2hlY2tlZHxjaXRlfGNsYXNzSUR8Y2xhc3NOYW1lfGNvbHN8Y29sU3Bhbnxjb250ZW50fGNvbnRlbnRFZGl0YWJsZXxjb250ZXh0TWVudXxjb250cm9sc3xjb250cm9sc0xpc3R8Y29vcmRzfGNyb3NzT3JpZ2lufGRhdGF8ZGF0ZVRpbWV8ZGVjb2Rpbmd8ZGVmYXVsdHxkZWZlcnxkaXJ8ZGlzYWJsZWR8ZGlzYWJsZVBpY3R1cmVJblBpY3R1cmV8ZG93bmxvYWR8ZHJhZ2dhYmxlfGVuY1R5cGV8Zm9ybXxmb3JtQWN0aW9ufGZvcm1FbmNUeXBlfGZvcm1NZXRob2R8Zm9ybU5vVmFsaWRhdGV8Zm9ybVRhcmdldHxmcmFtZUJvcmRlcnxoZWFkZXJzfGhlaWdodHxoaWRkZW58aGlnaHxocmVmfGhyZWZMYW5nfGh0bWxGb3J8aHR0cEVxdWl2fGlkfGlucHV0TW9kZXxpbnRlZ3JpdHl8aXN8a2V5UGFyYW1zfGtleVR5cGV8a2luZHxsYWJlbHxsYW5nfGxpc3R8bG9hZGluZ3xsb29wfGxvd3xtYXJnaW5IZWlnaHR8bWFyZ2luV2lkdGh8bWF4fG1heExlbmd0aHxtZWRpYXxtZWRpYUdyb3VwfG1ldGhvZHxtaW58bWluTGVuZ3RofG11bHRpcGxlfG11dGVkfG5hbWV8bm9uY2V8bm9WYWxpZGF0ZXxvcGVufG9wdGltdW18cGF0dGVybnxwbGFjZWhvbGRlcnxwbGF5c0lubGluZXxwb3N0ZXJ8cHJlbG9hZHxwcm9maWxlfHJhZGlvR3JvdXB8cmVhZE9ubHl8cmVmZXJyZXJQb2xpY3l8cmVsfHJlcXVpcmVkfHJldmVyc2VkfHJvbGV8cm93c3xyb3dTcGFufHNhbmRib3h8c2NvcGV8c2NvcGVkfHNjcm9sbGluZ3xzZWFtbGVzc3xzZWxlY3RlZHxzaGFwZXxzaXplfHNpemVzfHNsb3R8c3BhbnxzcGVsbENoZWNrfHNyY3xzcmNEb2N8c3JjTGFuZ3xzcmNTZXR8c3RhcnR8c3RlcHxzdHlsZXxzdW1tYXJ5fHRhYkluZGV4fHRhcmdldHx0aXRsZXx0eXBlfHVzZU1hcHx2YWx1ZXx3aWR0aHx3bW9kZXx3cmFwfGFib3V0fGRhdGF0eXBlfGlubGlzdHxwcmVmaXh8cHJvcGVydHl8cmVzb3VyY2V8dHlwZW9mfHZvY2FifGF1dG9DYXBpdGFsaXplfGF1dG9Db3JyZWN0fGF1dG9TYXZlfGNvbG9yfGluZXJ0fGl0ZW1Qcm9wfGl0ZW1TY29wZXxpdGVtVHlwZXxpdGVtSUR8aXRlbVJlZnxvbnxyZXN1bHRzfHNlY3VyaXR5fHVuc2VsZWN0YWJsZXxhY2NlbnRIZWlnaHR8YWNjdW11bGF0ZXxhZGRpdGl2ZXxhbGlnbm1lbnRCYXNlbGluZXxhbGxvd1Jlb3JkZXJ8YWxwaGFiZXRpY3xhbXBsaXR1ZGV8YXJhYmljRm9ybXxhc2NlbnR8YXR0cmlidXRlTmFtZXxhdHRyaWJ1dGVUeXBlfGF1dG9SZXZlcnNlfGF6aW11dGh8YmFzZUZyZXF1ZW5jeXxiYXNlbGluZVNoaWZ0fGJhc2VQcm9maWxlfGJib3h8YmVnaW58Ymlhc3xieXxjYWxjTW9kZXxjYXBIZWlnaHR8Y2xpcHxjbGlwUGF0aFVuaXRzfGNsaXBQYXRofGNsaXBSdWxlfGNvbG9ySW50ZXJwb2xhdGlvbnxjb2xvckludGVycG9sYXRpb25GaWx0ZXJzfGNvbG9yUHJvZmlsZXxjb2xvclJlbmRlcmluZ3xjb250ZW50U2NyaXB0VHlwZXxjb250ZW50U3R5bGVUeXBlfGN1cnNvcnxjeHxjeXxkfGRlY2VsZXJhdGV8ZGVzY2VudHxkaWZmdXNlQ29uc3RhbnR8ZGlyZWN0aW9ufGRpc3BsYXl8ZGl2aXNvcnxkb21pbmFudEJhc2VsaW5lfGR1cnxkeHxkeXxlZGdlTW9kZXxlbGV2YXRpb258ZW5hYmxlQmFja2dyb3VuZHxlbmR8ZXhwb25lbnR8ZXh0ZXJuYWxSZXNvdXJjZXNSZXF1aXJlZHxmaWxsfGZpbGxPcGFjaXR5fGZpbGxSdWxlfGZpbHRlcnxmaWx0ZXJSZXN8ZmlsdGVyVW5pdHN8Zmxvb2RDb2xvcnxmbG9vZE9wYWNpdHl8Zm9jdXNhYmxlfGZvbnRGYW1pbHl8Zm9udFNpemV8Zm9udFNpemVBZGp1c3R8Zm9udFN0cmV0Y2h8Zm9udFN0eWxlfGZvbnRWYXJpYW50fGZvbnRXZWlnaHR8Zm9ybWF0fGZyb218ZnJ8Znh8Znl8ZzF8ZzJ8Z2x5cGhOYW1lfGdseXBoT3JpZW50YXRpb25Ib3Jpem9udGFsfGdseXBoT3JpZW50YXRpb25WZXJ0aWNhbHxnbHlwaFJlZnxncmFkaWVudFRyYW5zZm9ybXxncmFkaWVudFVuaXRzfGhhbmdpbmd8aG9yaXpBZHZYfGhvcml6T3JpZ2luWHxpZGVvZ3JhcGhpY3xpbWFnZVJlbmRlcmluZ3xpbnxpbjJ8aW50ZXJjZXB0fGt8azF8azJ8azN8azR8a2VybmVsTWF0cml4fGtlcm5lbFVuaXRMZW5ndGh8a2VybmluZ3xrZXlQb2ludHN8a2V5U3BsaW5lc3xrZXlUaW1lc3xsZW5ndGhBZGp1c3R8bGV0dGVyU3BhY2luZ3xsaWdodGluZ0NvbG9yfGxpbWl0aW5nQ29uZUFuZ2xlfGxvY2FsfG1hcmtlckVuZHxtYXJrZXJNaWR8bWFya2VyU3RhcnR8bWFya2VySGVpZ2h0fG1hcmtlclVuaXRzfG1hcmtlcldpZHRofG1hc2t8bWFza0NvbnRlbnRVbml0c3xtYXNrVW5pdHN8bWF0aGVtYXRpY2FsfG1vZGV8bnVtT2N0YXZlc3xvZmZzZXR8b3BhY2l0eXxvcGVyYXRvcnxvcmRlcnxvcmllbnR8b3JpZW50YXRpb258b3JpZ2lufG92ZXJmbG93fG92ZXJsaW5lUG9zaXRpb258b3ZlcmxpbmVUaGlja25lc3N8cGFub3NlMXxwYWludE9yZGVyfHBhdGhMZW5ndGh8cGF0dGVybkNvbnRlbnRVbml0c3xwYXR0ZXJuVHJhbnNmb3JtfHBhdHRlcm5Vbml0c3xwb2ludGVyRXZlbnRzfHBvaW50c3xwb2ludHNBdFh8cG9pbnRzQXRZfHBvaW50c0F0WnxwcmVzZXJ2ZUFscGhhfHByZXNlcnZlQXNwZWN0UmF0aW98cHJpbWl0aXZlVW5pdHN8cnxyYWRpdXN8cmVmWHxyZWZZfHJlbmRlcmluZ0ludGVudHxyZXBlYXRDb3VudHxyZXBlYXREdXJ8cmVxdWlyZWRFeHRlbnNpb25zfHJlcXVpcmVkRmVhdHVyZXN8cmVzdGFydHxyZXN1bHR8cm90YXRlfHJ4fHJ5fHNjYWxlfHNlZWR8c2hhcGVSZW5kZXJpbmd8c2xvcGV8c3BhY2luZ3xzcGVjdWxhckNvbnN0YW50fHNwZWN1bGFyRXhwb25lbnR8c3BlZWR8c3ByZWFkTWV0aG9kfHN0YXJ0T2Zmc2V0fHN0ZERldmlhdGlvbnxzdGVtaHxzdGVtdnxzdGl0Y2hUaWxlc3xzdG9wQ29sb3J8c3RvcE9wYWNpdHl8c3RyaWtldGhyb3VnaFBvc2l0aW9ufHN0cmlrZXRocm91Z2hUaGlja25lc3N8c3RyaW5nfHN0cm9rZXxzdHJva2VEYXNoYXJyYXl8c3Ryb2tlRGFzaG9mZnNldHxzdHJva2VMaW5lY2FwfHN0cm9rZUxpbmVqb2lufHN0cm9rZU1pdGVybGltaXR8c3Ryb2tlT3BhY2l0eXxzdHJva2VXaWR0aHxzdXJmYWNlU2NhbGV8c3lzdGVtTGFuZ3VhZ2V8dGFibGVWYWx1ZXN8dGFyZ2V0WHx0YXJnZXRZfHRleHRBbmNob3J8dGV4dERlY29yYXRpb258dGV4dFJlbmRlcmluZ3x0ZXh0TGVuZ3RofHRvfHRyYW5zZm9ybXx1MXx1Mnx1bmRlcmxpbmVQb3NpdGlvbnx1bmRlcmxpbmVUaGlja25lc3N8dW5pY29kZXx1bmljb2RlQmlkaXx1bmljb2RlUmFuZ2V8dW5pdHNQZXJFbXx2QWxwaGFiZXRpY3x2SGFuZ2luZ3x2SWRlb2dyYXBoaWN8dk1hdGhlbWF0aWNhbHx2YWx1ZXN8dmVjdG9yRWZmZWN0fHZlcnNpb258dmVydEFkdll8dmVydE9yaWdpblh8dmVydE9yaWdpbll8dmlld0JveHx2aWV3VGFyZ2V0fHZpc2liaWxpdHl8d2lkdGhzfHdvcmRTcGFjaW5nfHdyaXRpbmdNb2RlfHh8eEhlaWdodHx4MXx4Mnx4Q2hhbm5lbFNlbGVjdG9yfHhsaW5rQWN0dWF0ZXx4bGlua0FyY3JvbGV8eGxpbmtIcmVmfHhsaW5rUm9sZXx4bGlua1Nob3d8eGxpbmtUaXRsZXx4bGlua1R5cGV8eG1sQmFzZXx4bWxuc3x4bWxuc1hsaW5rfHhtbExhbmd8eG1sU3BhY2V8eXx5MXx5Mnx5Q2hhbm5lbFNlbGVjdG9yfHp8em9vbUFuZFBhbnxmb3J8Y2xhc3N8YXV0b2ZvY3VzKXwoKFtEZF1bQWFdW1R0XVtBYV18W0FhXVtScl1bSWldW0FhXXx4KS0uKikpJC87IC8vIGh0dHBzOi8vZXNiZW5jaC5jb20vYmVuY2gvNWJmZWU2OGE0Y2Q3ZTYwMDllZjYxZDIzXG5cbnZhciBpbmRleCA9IG1lbW9pemUoZnVuY3Rpb24gKHByb3ApIHtcbiAgcmV0dXJuIHJlYWN0UHJvcHNSZWdleC50ZXN0KHByb3ApIHx8IHByb3AuY2hhckNvZGVBdCgwKSA9PT0gMTExXG4gIC8qIG8gKi9cbiAgJiYgcHJvcC5jaGFyQ29kZUF0KDEpID09PSAxMTBcbiAgLyogbiAqL1xuICAmJiBwcm9wLmNoYXJDb2RlQXQoMikgPCA5MTtcbn1cbi8qIForMSAqL1xuKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG4iLCJmdW5jdGlvbiBtZW1vaXplKGZuKSB7XG4gIHZhciBjYWNoZSA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gKGFyZykge1xuICAgIGlmIChjYWNoZVthcmddID09PSB1bmRlZmluZWQpIGNhY2hlW2FyZ10gPSBmbihhcmcpO1xuICAgIHJldHVybiBjYWNoZVthcmddO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBtZW1vaXplO1xuIiwiaW1wb3J0IGhhc2hTdHJpbmcgZnJvbSAnQGVtb3Rpb24vaGFzaCc7XG5pbXBvcnQgdW5pdGxlc3MgZnJvbSAnQGVtb3Rpb24vdW5pdGxlc3MnO1xuaW1wb3J0IG1lbW9pemUgZnJvbSAnQGVtb3Rpb24vbWVtb2l6ZSc7XG5cbnZhciBJTExFR0FMX0VTQ0FQRV9TRVFVRU5DRV9FUlJPUiA9IFwiWW91IGhhdmUgaWxsZWdhbCBlc2NhcGUgc2VxdWVuY2UgaW4geW91ciB0ZW1wbGF0ZSBsaXRlcmFsLCBtb3N0IGxpa2VseSBpbnNpZGUgY29udGVudCdzIHByb3BlcnR5IHZhbHVlLlxcbkJlY2F1c2UgeW91IHdyaXRlIHlvdXIgQ1NTIGluc2lkZSBhIEphdmFTY3JpcHQgc3RyaW5nIHlvdSBhY3R1YWxseSBoYXZlIHRvIGRvIGRvdWJsZSBlc2NhcGluZywgc28gZm9yIGV4YW1wbGUgXFxcImNvbnRlbnQ6ICdcXFxcMDBkNyc7XFxcIiBzaG91bGQgYmVjb21lIFxcXCJjb250ZW50OiAnXFxcXFxcXFwwMGQ3JztcXFwiLlxcbllvdSBjYW4gcmVhZCBtb3JlIGFib3V0IHRoaXMgaGVyZTpcXG5odHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9UZW1wbGF0ZV9saXRlcmFscyNFUzIwMThfcmV2aXNpb25fb2ZfaWxsZWdhbF9lc2NhcGVfc2VxdWVuY2VzXCI7XG52YXIgVU5ERUZJTkVEX0FTX09CSkVDVF9LRVlfRVJST1IgPSBcIllvdSBoYXZlIHBhc3NlZCBpbiBmYWxzeSB2YWx1ZSBhcyBzdHlsZSBvYmplY3QncyBrZXkgKGNhbiBoYXBwZW4gd2hlbiBpbiBleGFtcGxlIHlvdSBwYXNzIHVuZXhwb3J0ZWQgY29tcG9uZW50IGFzIGNvbXB1dGVkIGtleSkuXCI7XG52YXIgaHlwaGVuYXRlUmVnZXggPSAvW0EtWl18Xm1zL2c7XG52YXIgYW5pbWF0aW9uUmVnZXggPSAvX0VNT18oW15fXSs/KV8oW15dKj8pX0VNT18vZztcblxudmFyIGlzQ3VzdG9tUHJvcGVydHkgPSBmdW5jdGlvbiBpc0N1c3RvbVByb3BlcnR5KHByb3BlcnR5KSB7XG4gIHJldHVybiBwcm9wZXJ0eS5jaGFyQ29kZUF0KDEpID09PSA0NTtcbn07XG5cbnZhciBpc1Byb2Nlc3NhYmxlVmFsdWUgPSBmdW5jdGlvbiBpc1Byb2Nlc3NhYmxlVmFsdWUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlICE9PSAnYm9vbGVhbic7XG59O1xuXG52YXIgcHJvY2Vzc1N0eWxlTmFtZSA9IG1lbW9pemUoZnVuY3Rpb24gKHN0eWxlTmFtZSkge1xuICByZXR1cm4gaXNDdXN0b21Qcm9wZXJ0eShzdHlsZU5hbWUpID8gc3R5bGVOYW1lIDogc3R5bGVOYW1lLnJlcGxhY2UoaHlwaGVuYXRlUmVnZXgsICctJCYnKS50b0xvd2VyQ2FzZSgpO1xufSk7XG5cbnZhciBwcm9jZXNzU3R5bGVWYWx1ZSA9IGZ1bmN0aW9uIHByb2Nlc3NTdHlsZVZhbHVlKGtleSwgdmFsdWUpIHtcbiAgc3dpdGNoIChrZXkpIHtcbiAgICBjYXNlICdhbmltYXRpb24nOlxuICAgIGNhc2UgJ2FuaW1hdGlvbk5hbWUnOlxuICAgICAge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKGFuaW1hdGlvblJlZ2V4LCBmdW5jdGlvbiAobWF0Y2gsIHAxLCBwMikge1xuICAgICAgICAgICAgY3Vyc29yID0ge1xuICAgICAgICAgICAgICBuYW1lOiBwMSxcbiAgICAgICAgICAgICAgc3R5bGVzOiBwMixcbiAgICAgICAgICAgICAgbmV4dDogY3Vyc29yXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIHAxO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gIH1cblxuICBpZiAodW5pdGxlc3Nba2V5XSAhPT0gMSAmJiAhaXNDdXN0b21Qcm9wZXJ0eShrZXkpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgdmFsdWUgIT09IDApIHtcbiAgICByZXR1cm4gdmFsdWUgKyAncHgnO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIGNvbnRlbnRWYWx1ZVBhdHRlcm4gPSAvKGF0dHJ8Y2FsY3xjb3VudGVycz98dXJsKVxcKC87XG4gIHZhciBjb250ZW50VmFsdWVzID0gWydub3JtYWwnLCAnbm9uZScsICdjb3VudGVyJywgJ29wZW4tcXVvdGUnLCAnY2xvc2UtcXVvdGUnLCAnbm8tb3Blbi1xdW90ZScsICduby1jbG9zZS1xdW90ZScsICdpbml0aWFsJywgJ2luaGVyaXQnLCAndW5zZXQnXTtcbiAgdmFyIG9sZFByb2Nlc3NTdHlsZVZhbHVlID0gcHJvY2Vzc1N0eWxlVmFsdWU7XG4gIHZhciBtc1BhdHRlcm4gPSAvXi1tcy0vO1xuICB2YXIgaHlwaGVuUGF0dGVybiA9IC8tKC4pL2c7XG4gIHZhciBoeXBoZW5hdGVkQ2FjaGUgPSB7fTtcblxuICBwcm9jZXNzU3R5bGVWYWx1ZSA9IGZ1bmN0aW9uIHByb2Nlc3NTdHlsZVZhbHVlKGtleSwgdmFsdWUpIHtcbiAgICBpZiAoa2V5ID09PSAnY29udGVudCcpIHtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnIHx8IGNvbnRlbnRWYWx1ZXMuaW5kZXhPZih2YWx1ZSkgPT09IC0xICYmICFjb250ZW50VmFsdWVQYXR0ZXJuLnRlc3QodmFsdWUpICYmICh2YWx1ZS5jaGFyQXQoMCkgIT09IHZhbHVlLmNoYXJBdCh2YWx1ZS5sZW5ndGggLSAxKSB8fCB2YWx1ZS5jaGFyQXQoMCkgIT09ICdcIicgJiYgdmFsdWUuY2hhckF0KDApICE9PSBcIidcIikpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIllvdSBzZWVtIHRvIGJlIHVzaW5nIGEgdmFsdWUgZm9yICdjb250ZW50JyB3aXRob3V0IHF1b3RlcywgdHJ5IHJlcGxhY2luZyBpdCB3aXRoIGBjb250ZW50OiAnXFxcIlwiICsgdmFsdWUgKyBcIlxcXCInYFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJvY2Vzc2VkID0gb2xkUHJvY2Vzc1N0eWxlVmFsdWUoa2V5LCB2YWx1ZSk7XG5cbiAgICBpZiAocHJvY2Vzc2VkICE9PSAnJyAmJiAhaXNDdXN0b21Qcm9wZXJ0eShrZXkpICYmIGtleS5pbmRleE9mKCctJykgIT09IC0xICYmIGh5cGhlbmF0ZWRDYWNoZVtrZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGh5cGhlbmF0ZWRDYWNoZVtrZXldID0gdHJ1ZTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJVc2luZyBrZWJhYi1jYXNlIGZvciBjc3MgcHJvcGVydGllcyBpbiBvYmplY3RzIGlzIG5vdCBzdXBwb3J0ZWQuIERpZCB5b3UgbWVhbiBcIiArIGtleS5yZXBsYWNlKG1zUGF0dGVybiwgJ21zLScpLnJlcGxhY2UoaHlwaGVuUGF0dGVybiwgZnVuY3Rpb24gKHN0ciwgX2NoYXIpIHtcbiAgICAgICAgcmV0dXJuIF9jaGFyLnRvVXBwZXJDYXNlKCk7XG4gICAgICB9KSArIFwiP1wiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvY2Vzc2VkO1xuICB9O1xufVxuXG52YXIgc2hvdWxkV2FybkFib3V0SW50ZXJwb2xhdGluZ0NsYXNzTmFtZUZyb21Dc3MgPSB0cnVlO1xuXG5mdW5jdGlvbiBoYW5kbGVJbnRlcnBvbGF0aW9uKG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCBpbnRlcnBvbGF0aW9uLCBjb3VsZEJlU2VsZWN0b3JJbnRlcnBvbGF0aW9uKSB7XG4gIGlmIChpbnRlcnBvbGF0aW9uID09IG51bGwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAoaW50ZXJwb2xhdGlvbi5fX2Vtb3Rpb25fc3R5bGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBpbnRlcnBvbGF0aW9uLnRvU3RyaW5nKCkgPT09ICdOT19DT01QT05FTlRfU0VMRUNUT1InKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbXBvbmVudCBzZWxlY3RvcnMgY2FuIG9ubHkgYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGJhYmVsLXBsdWdpbi1lbW90aW9uLicpO1xuICAgIH1cblxuICAgIHJldHVybiBpbnRlcnBvbGF0aW9uO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlb2YgaW50ZXJwb2xhdGlvbikge1xuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG5cbiAgICBjYXNlICdvYmplY3QnOlxuICAgICAge1xuICAgICAgICBpZiAoaW50ZXJwb2xhdGlvbi5hbmltID09PSAxKSB7XG4gICAgICAgICAgY3Vyc29yID0ge1xuICAgICAgICAgICAgbmFtZTogaW50ZXJwb2xhdGlvbi5uYW1lLFxuICAgICAgICAgICAgc3R5bGVzOiBpbnRlcnBvbGF0aW9uLnN0eWxlcyxcbiAgICAgICAgICAgIG5leHQ6IGN1cnNvclxuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIGludGVycG9sYXRpb24ubmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbnRlcnBvbGF0aW9uLnN0eWxlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdmFyIG5leHQgPSBpbnRlcnBvbGF0aW9uLm5leHQ7XG5cbiAgICAgICAgICBpZiAobmV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBub3QgdGhlIG1vc3QgZWZmaWNpZW50IHRoaW5nIGV2ZXIgYnV0IHRoaXMgaXMgYSBwcmV0dHkgcmFyZSBjYXNlXG4gICAgICAgICAgICAvLyBhbmQgdGhlcmUgd2lsbCBiZSB2ZXJ5IGZldyBpdGVyYXRpb25zIG9mIHRoaXMgZ2VuZXJhbGx5XG4gICAgICAgICAgICB3aGlsZSAobmV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGN1cnNvciA9IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuZXh0Lm5hbWUsXG4gICAgICAgICAgICAgICAgc3R5bGVzOiBuZXh0LnN0eWxlcyxcbiAgICAgICAgICAgICAgICBuZXh0OiBjdXJzb3JcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgbmV4dCA9IG5leHQubmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgc3R5bGVzID0gaW50ZXJwb2xhdGlvbi5zdHlsZXMgKyBcIjtcIjtcblxuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGludGVycG9sYXRpb24ubWFwICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHN0eWxlcyArPSBpbnRlcnBvbGF0aW9uLm1hcDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gc3R5bGVzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNyZWF0ZVN0cmluZ0Zyb21PYmplY3QobWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIGludGVycG9sYXRpb24pO1xuICAgICAgfVxuXG4gICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAge1xuICAgICAgICBpZiAobWVyZ2VkUHJvcHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHZhciBwcmV2aW91c0N1cnNvciA9IGN1cnNvcjtcbiAgICAgICAgICB2YXIgcmVzdWx0ID0gaW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcyk7XG4gICAgICAgICAgY3Vyc29yID0gcHJldmlvdXNDdXJzb3I7XG4gICAgICAgICAgcmV0dXJuIGhhbmRsZUludGVycG9sYXRpb24obWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIHJlc3VsdCwgY291bGRCZVNlbGVjdG9ySW50ZXJwb2xhdGlvbik7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Z1bmN0aW9ucyB0aGF0IGFyZSBpbnRlcnBvbGF0ZWQgaW4gY3NzIGNhbGxzIHdpbGwgYmUgc3RyaW5naWZpZWQuXFxuJyArICdJZiB5b3Ugd2FudCB0byBoYXZlIGEgY3NzIGNhbGwgYmFzZWQgb24gcHJvcHMsIGNyZWF0ZSBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIGNzcyBjYWxsIGxpa2UgdGhpc1xcbicgKyAnbGV0IGR5bmFtaWNTdHlsZSA9IChwcm9wcykgPT4gY3NzYGNvbG9yOiAke3Byb3BzLmNvbG9yfWBcXG4nICsgJ0l0IGNhbiBiZSBjYWxsZWQgZGlyZWN0bHkgd2l0aCBwcm9wcyBvciBpbnRlcnBvbGF0ZWQgaW4gYSBzdHlsZWQgY2FsbCBsaWtlIHRoaXNcXG4nICsgXCJsZXQgU29tZUNvbXBvbmVudCA9IHN0eWxlZCgnZGl2JylgJHtkeW5hbWljU3R5bGV9YFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHZhciBtYXRjaGVkID0gW107XG4gICAgICAgIHZhciByZXBsYWNlZCA9IGludGVycG9sYXRpb24ucmVwbGFjZShhbmltYXRpb25SZWdleCwgZnVuY3Rpb24gKG1hdGNoLCBwMSwgcDIpIHtcbiAgICAgICAgICB2YXIgZmFrZVZhck5hbWUgPSBcImFuaW1hdGlvblwiICsgbWF0Y2hlZC5sZW5ndGg7XG4gICAgICAgICAgbWF0Y2hlZC5wdXNoKFwiY29uc3QgXCIgKyBmYWtlVmFyTmFtZSArIFwiID0ga2V5ZnJhbWVzYFwiICsgcDIucmVwbGFjZSgvXkBrZXlmcmFtZXMgYW5pbWF0aW9uLVxcdysvLCAnJykgKyBcImBcIik7XG4gICAgICAgICAgcmV0dXJuIFwiJHtcIiArIGZha2VWYXJOYW1lICsgXCJ9XCI7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChtYXRjaGVkLmxlbmd0aCkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2BrZXlmcmFtZXNgIG91dHB1dCBnb3QgaW50ZXJwb2xhdGVkIGludG8gcGxhaW4gc3RyaW5nLCBwbGVhc2Ugd3JhcCBpdCB3aXRoIGBjc3NgLlxcblxcbicgKyAnSW5zdGVhZCBvZiBkb2luZyB0aGlzOlxcblxcbicgKyBbXS5jb25jYXQobWF0Y2hlZCwgW1wiYFwiICsgcmVwbGFjZWQgKyBcImBcIl0pLmpvaW4oJ1xcbicpICsgJ1xcblxcbllvdSBzaG91bGQgd3JhcCBpdCB3aXRoIGBjc3NgIGxpa2UgdGhpczpcXG5cXG4nICsgKFwiY3NzYFwiICsgcmVwbGFjZWQgKyBcImBcIikpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICB9IC8vIGZpbmFsaXplIHN0cmluZyB2YWx1ZXMgKHJlZ3VsYXIgc3RyaW5ncyBhbmQgZnVuY3Rpb25zIGludGVycG9sYXRlZCBpbnRvIGNzcyBjYWxscylcblxuXG4gIGlmIChyZWdpc3RlcmVkID09IG51bGwpIHtcbiAgICByZXR1cm4gaW50ZXJwb2xhdGlvbjtcbiAgfVxuXG4gIHZhciBjYWNoZWQgPSByZWdpc3RlcmVkW2ludGVycG9sYXRpb25dO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGNvdWxkQmVTZWxlY3RvckludGVycG9sYXRpb24gJiYgc2hvdWxkV2FybkFib3V0SW50ZXJwb2xhdGluZ0NsYXNzTmFtZUZyb21Dc3MgJiYgY2FjaGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zb2xlLmVycm9yKCdJbnRlcnBvbGF0aW5nIGEgY2xhc3NOYW1lIGZyb20gY3NzYGAgaXMgbm90IHJlY29tbWVuZGVkIGFuZCB3aWxsIGNhdXNlIHByb2JsZW1zIHdpdGggY29tcG9zaXRpb24uXFxuJyArICdJbnRlcnBvbGF0aW5nIGEgY2xhc3NOYW1lIGZyb20gY3NzYGAgd2lsbCBiZSBjb21wbGV0ZWx5IHVuc3VwcG9ydGVkIGluIGEgZnV0dXJlIG1ham9yIHZlcnNpb24gb2YgRW1vdGlvbicpO1xuICAgIHNob3VsZFdhcm5BYm91dEludGVycG9sYXRpbmdDbGFzc05hbWVGcm9tQ3NzID0gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gY2FjaGVkICE9PSB1bmRlZmluZWQgJiYgIWNvdWxkQmVTZWxlY3RvckludGVycG9sYXRpb24gPyBjYWNoZWQgOiBpbnRlcnBvbGF0aW9uO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHJpbmdGcm9tT2JqZWN0KG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCBvYmopIHtcbiAgdmFyIHN0cmluZyA9ICcnO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iai5sZW5ndGg7IGkrKykge1xuICAgICAgc3RyaW5nICs9IGhhbmRsZUludGVycG9sYXRpb24obWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIG9ialtpXSwgZmFsc2UpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKHZhciBfa2V5IGluIG9iaikge1xuICAgICAgdmFyIHZhbHVlID0gb2JqW19rZXldO1xuXG4gICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBpZiAocmVnaXN0ZXJlZCAhPSBudWxsICYmIHJlZ2lzdGVyZWRbdmFsdWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBzdHJpbmcgKz0gX2tleSArIFwie1wiICsgcmVnaXN0ZXJlZFt2YWx1ZV0gKyBcIn1cIjtcbiAgICAgICAgfSBlbHNlIGlmIChpc1Byb2Nlc3NhYmxlVmFsdWUodmFsdWUpKSB7XG4gICAgICAgICAgc3RyaW5nICs9IHByb2Nlc3NTdHlsZU5hbWUoX2tleSkgKyBcIjpcIiArIHByb2Nlc3NTdHlsZVZhbHVlKF9rZXksIHZhbHVlKSArIFwiO1wiO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoX2tleSA9PT0gJ05PX0NPTVBPTkVOVF9TRUxFQ1RPUicgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ29tcG9uZW50IHNlbGVjdG9ycyBjYW4gb25seSBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYmFiZWwtcGx1Z2luLWVtb3Rpb24uJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdHlwZW9mIHZhbHVlWzBdID09PSAnc3RyaW5nJyAmJiAocmVnaXN0ZXJlZCA9PSBudWxsIHx8IHJlZ2lzdGVyZWRbdmFsdWVbMF1dID09PSB1bmRlZmluZWQpKSB7XG4gICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHZhbHVlLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgaWYgKGlzUHJvY2Vzc2FibGVWYWx1ZSh2YWx1ZVtfaV0pKSB7XG4gICAgICAgICAgICAgIHN0cmluZyArPSBwcm9jZXNzU3R5bGVOYW1lKF9rZXkpICsgXCI6XCIgKyBwcm9jZXNzU3R5bGVWYWx1ZShfa2V5LCB2YWx1ZVtfaV0pICsgXCI7XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBpbnRlcnBvbGF0ZWQgPSBoYW5kbGVJbnRlcnBvbGF0aW9uKG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCB2YWx1ZSwgZmFsc2UpO1xuXG4gICAgICAgICAgc3dpdGNoIChfa2V5KSB7XG4gICAgICAgICAgICBjYXNlICdhbmltYXRpb24nOlxuICAgICAgICAgICAgY2FzZSAnYW5pbWF0aW9uTmFtZSc6XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gcHJvY2Vzc1N0eWxlTmFtZShfa2V5KSArIFwiOlwiICsgaW50ZXJwb2xhdGVkICsgXCI7XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIF9rZXkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFVOREVGSU5FRF9BU19PQkpFQ1RfS0VZX0VSUk9SKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gX2tleSArIFwie1wiICsgaW50ZXJwb2xhdGVkICsgXCJ9XCI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG52YXIgbGFiZWxQYXR0ZXJuID0gL2xhYmVsOlxccyooW15cXHM7XFxue10rKVxccyo7L2c7XG52YXIgc291cmNlTWFwUGF0dGVybjtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgc291cmNlTWFwUGF0dGVybiA9IC9cXC9cXCojXFxzc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uXFwvanNvbjtcXFMrXFxzK1xcKlxcLy87XG59IC8vIHRoaXMgaXMgdGhlIGN1cnNvciBmb3Iga2V5ZnJhbWVzXG4vLyBrZXlmcmFtZXMgYXJlIHN0b3JlZCBvbiB0aGUgU2VyaWFsaXplZFN0eWxlcyBvYmplY3QgYXMgYSBsaW5rZWQgbGlzdFxuXG5cbnZhciBjdXJzb3I7XG52YXIgc2VyaWFsaXplU3R5bGVzID0gZnVuY3Rpb24gc2VyaWFsaXplU3R5bGVzKGFyZ3MsIHJlZ2lzdGVyZWQsIG1lcmdlZFByb3BzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA9PT0gMSAmJiB0eXBlb2YgYXJnc1swXSA9PT0gJ29iamVjdCcgJiYgYXJnc1swXSAhPT0gbnVsbCAmJiBhcmdzWzBdLnN0eWxlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGFyZ3NbMF07XG4gIH1cblxuICB2YXIgc3RyaW5nTW9kZSA9IHRydWU7XG4gIHZhciBzdHlsZXMgPSAnJztcbiAgY3Vyc29yID0gdW5kZWZpbmVkO1xuICB2YXIgc3RyaW5ncyA9IGFyZ3NbMF07XG5cbiAgaWYgKHN0cmluZ3MgPT0gbnVsbCB8fCBzdHJpbmdzLnJhdyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgc3RyaW5nTW9kZSA9IGZhbHNlO1xuICAgIHN0eWxlcyArPSBoYW5kbGVJbnRlcnBvbGF0aW9uKG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCBzdHJpbmdzLCBmYWxzZSk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgc3RyaW5nc1swXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zb2xlLmVycm9yKElMTEVHQUxfRVNDQVBFX1NFUVVFTkNFX0VSUk9SKTtcbiAgICB9XG5cbiAgICBzdHlsZXMgKz0gc3RyaW5nc1swXTtcbiAgfSAvLyB3ZSBzdGFydCBhdCAxIHNpbmNlIHdlJ3ZlIGFscmVhZHkgaGFuZGxlZCB0aGUgZmlyc3QgYXJnXG5cblxuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICBzdHlsZXMgKz0gaGFuZGxlSW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgYXJnc1tpXSwgc3R5bGVzLmNoYXJDb2RlQXQoc3R5bGVzLmxlbmd0aCAtIDEpID09PSA0Nik7XG5cbiAgICBpZiAoc3RyaW5nTW9kZSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgc3RyaW5nc1tpXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoSUxMRUdBTF9FU0NBUEVfU0VRVUVOQ0VfRVJST1IpO1xuICAgICAgfVxuXG4gICAgICBzdHlsZXMgKz0gc3RyaW5nc1tpXTtcbiAgICB9XG4gIH1cblxuICB2YXIgc291cmNlTWFwO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgc3R5bGVzID0gc3R5bGVzLnJlcGxhY2Uoc291cmNlTWFwUGF0dGVybiwgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICBzb3VyY2VNYXAgPSBtYXRjaDtcbiAgICAgIHJldHVybiAnJztcbiAgICB9KTtcbiAgfSAvLyB1c2luZyBhIGdsb2JhbCByZWdleCB3aXRoIC5leGVjIGlzIHN0YXRlZnVsIHNvIGxhc3RJbmRleCBoYXMgdG8gYmUgcmVzZXQgZWFjaCB0aW1lXG5cblxuICBsYWJlbFBhdHRlcm4ubGFzdEluZGV4ID0gMDtcbiAgdmFyIGlkZW50aWZpZXJOYW1lID0gJyc7XG4gIHZhciBtYXRjaDsgLy8gaHR0cHM6Ly9lc2JlbmNoLmNvbS9iZW5jaC81YjgwOWMyY2YyOTQ5ODAwYTBmNjFmYjVcblxuICB3aGlsZSAoKG1hdGNoID0gbGFiZWxQYXR0ZXJuLmV4ZWMoc3R5bGVzKSkgIT09IG51bGwpIHtcbiAgICBpZGVudGlmaWVyTmFtZSArPSAnLScgKyAvLyAkRmxvd0ZpeE1lIHdlIGtub3cgaXQncyBub3QgbnVsbFxuICAgIG1hdGNoWzFdO1xuICB9XG5cbiAgdmFyIG5hbWUgPSBoYXNoU3RyaW5nKHN0eWxlcykgKyBpZGVudGlmaWVyTmFtZTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIC8vICRGbG93Rml4TWUgU2VyaWFsaXplZFN0eWxlcyB0eXBlIGRvZXNuJ3QgaGF2ZSB0b1N0cmluZyBwcm9wZXJ0eSAoYW5kIHdlIGRvbid0IHdhbnQgdG8gYWRkIGl0KVxuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgc3R5bGVzOiBzdHlsZXMsXG4gICAgICBtYXA6IHNvdXJjZU1hcCxcbiAgICAgIG5leHQ6IGN1cnNvcixcbiAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIFwiWW91IGhhdmUgdHJpZWQgdG8gc3RyaW5naWZ5IG9iamVjdCByZXR1cm5lZCBmcm9tIGBjc3NgIGZ1bmN0aW9uLiBJdCBpc24ndCBzdXBwb3NlZCB0byBiZSB1c2VkIGRpcmVjdGx5IChlLmcuIGFzIHZhbHVlIG9mIHRoZSBgY2xhc3NOYW1lYCBwcm9wKSwgYnV0IHJhdGhlciBoYW5kZWQgdG8gZW1vdGlvbiBzbyBpdCBjYW4gaGFuZGxlIGl0IChlLmcuIGFzIHZhbHVlIG9mIGBjc3NgIHByb3ApLlwiO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5hbWU6IG5hbWUsXG4gICAgc3R5bGVzOiBzdHlsZXMsXG4gICAgbmV4dDogY3Vyc29yXG4gIH07XG59O1xuXG5leHBvcnQgeyBzZXJpYWxpemVTdHlsZXMgfTtcbiIsIi8qXG5cbkJhc2VkIG9mZiBnbGFtb3IncyBTdHlsZVNoZWV0LCB0aGFua3MgU3VuaWwg4p2k77iPXG5cbmhpZ2ggcGVyZm9ybWFuY2UgU3R5bGVTaGVldCBmb3IgY3NzLWluLWpzIHN5c3RlbXNcblxuLSB1c2VzIG11bHRpcGxlIHN0eWxlIHRhZ3MgYmVoaW5kIHRoZSBzY2VuZXMgZm9yIG1pbGxpb25zIG9mIHJ1bGVzXG4tIHVzZXMgYGluc2VydFJ1bGVgIGZvciBhcHBlbmRpbmcgaW4gcHJvZHVjdGlvbiBmb3IgKm11Y2gqIGZhc3RlciBwZXJmb3JtYW5jZVxuXG4vLyB1c2FnZVxuXG5pbXBvcnQgeyBTdHlsZVNoZWV0IH0gZnJvbSAnQGVtb3Rpb24vc2hlZXQnXG5cbmxldCBzdHlsZVNoZWV0ID0gbmV3IFN0eWxlU2hlZXQoeyBrZXk6ICcnLCBjb250YWluZXI6IGRvY3VtZW50LmhlYWQgfSlcblxuc3R5bGVTaGVldC5pbnNlcnQoJyNib3ggeyBib3JkZXI6IDFweCBzb2xpZCByZWQ7IH0nKVxuLSBhcHBlbmRzIGEgY3NzIHJ1bGUgaW50byB0aGUgc3R5bGVzaGVldFxuXG5zdHlsZVNoZWV0LmZsdXNoKClcbi0gZW1wdGllcyB0aGUgc3R5bGVzaGVldCBvZiBhbGwgaXRzIGNvbnRlbnRzXG5cbiovXG4vLyAkRmxvd0ZpeE1lXG5mdW5jdGlvbiBzaGVldEZvclRhZyh0YWcpIHtcbiAgaWYgKHRhZy5zaGVldCkge1xuICAgIC8vICRGbG93Rml4TWVcbiAgICByZXR1cm4gdGFnLnNoZWV0O1xuICB9IC8vIHRoaXMgd2VpcmRuZXNzIGJyb3VnaHQgdG8geW91IGJ5IGZpcmVmb3hcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBkb2N1bWVudC5zdHlsZVNoZWV0cy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChkb2N1bWVudC5zdHlsZVNoZWV0c1tpXS5vd25lck5vZGUgPT09IHRhZykge1xuICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgcmV0dXJuIGRvY3VtZW50LnN0eWxlU2hlZXRzW2ldO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdGFnLnNldEF0dHJpYnV0ZSgnZGF0YS1lbW90aW9uJywgb3B0aW9ucy5rZXkpO1xuXG4gIGlmIChvcHRpb25zLm5vbmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICB0YWcuc2V0QXR0cmlidXRlKCdub25jZScsIG9wdGlvbnMubm9uY2UpO1xuICB9XG5cbiAgdGFnLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKSk7XG4gIHJldHVybiB0YWc7XG59XG5cbnZhciBTdHlsZVNoZWV0ID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU3R5bGVTaGVldChvcHRpb25zKSB7XG4gICAgdGhpcy5pc1NwZWVkeSA9IG9wdGlvbnMuc3BlZWR5ID09PSB1bmRlZmluZWQgPyBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nIDogb3B0aW9ucy5zcGVlZHk7XG4gICAgdGhpcy50YWdzID0gW107XG4gICAgdGhpcy5jdHIgPSAwO1xuICAgIHRoaXMubm9uY2UgPSBvcHRpb25zLm5vbmNlOyAvLyBrZXkgaXMgdGhlIHZhbHVlIG9mIHRoZSBkYXRhLWVtb3Rpb24gYXR0cmlidXRlLCBpdCdzIHVzZWQgdG8gaWRlbnRpZnkgZGlmZmVyZW50IHNoZWV0c1xuXG4gICAgdGhpcy5rZXkgPSBvcHRpb25zLmtleTtcbiAgICB0aGlzLmNvbnRhaW5lciA9IG9wdGlvbnMuY29udGFpbmVyO1xuICAgIHRoaXMuYmVmb3JlID0gbnVsbDtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBTdHlsZVNoZWV0LnByb3RvdHlwZTtcblxuICBfcHJvdG8uaW5zZXJ0ID0gZnVuY3Rpb24gaW5zZXJ0KHJ1bGUpIHtcbiAgICAvLyB0aGUgbWF4IGxlbmd0aCBpcyBob3cgbWFueSBydWxlcyB3ZSBoYXZlIHBlciBzdHlsZSB0YWcsIGl0J3MgNjUwMDAgaW4gc3BlZWR5IG1vZGVcbiAgICAvLyBpdCdzIDEgaW4gZGV2IGJlY2F1c2Ugd2UgaW5zZXJ0IHNvdXJjZSBtYXBzIHRoYXQgbWFwIGEgc2luZ2xlIHJ1bGUgdG8gYSBsb2NhdGlvblxuICAgIC8vIGFuZCB5b3UgY2FuIG9ubHkgaGF2ZSBvbmUgc291cmNlIG1hcCBwZXIgc3R5bGUgdGFnXG4gICAgaWYgKHRoaXMuY3RyICUgKHRoaXMuaXNTcGVlZHkgPyA2NTAwMCA6IDEpID09PSAwKSB7XG4gICAgICB2YXIgX3RhZyA9IGNyZWF0ZVN0eWxlRWxlbWVudCh0aGlzKTtcblxuICAgICAgdmFyIGJlZm9yZTtcblxuICAgICAgaWYgKHRoaXMudGFncy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgYmVmb3JlID0gdGhpcy5iZWZvcmU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBiZWZvcmUgPSB0aGlzLnRhZ3NbdGhpcy50YWdzLmxlbmd0aCAtIDFdLm5leHRTaWJsaW5nO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNvbnRhaW5lci5pbnNlcnRCZWZvcmUoX3RhZywgYmVmb3JlKTtcbiAgICAgIHRoaXMudGFncy5wdXNoKF90YWcpO1xuICAgIH1cblxuICAgIHZhciB0YWcgPSB0aGlzLnRhZ3NbdGhpcy50YWdzLmxlbmd0aCAtIDFdO1xuXG4gICAgaWYgKHRoaXMuaXNTcGVlZHkpIHtcbiAgICAgIHZhciBzaGVldCA9IHNoZWV0Rm9yVGFnKHRhZyk7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIHRoaXMgaXMgYSByZWFsbHkgaG90IHBhdGhcbiAgICAgICAgLy8gd2UgY2hlY2sgdGhlIHNlY29uZCBjaGFyYWN0ZXIgZmlyc3QgYmVjYXVzZSBoYXZpbmcgXCJpXCJcbiAgICAgICAgLy8gYXMgdGhlIHNlY29uZCBjaGFyYWN0ZXIgd2lsbCBoYXBwZW4gbGVzcyBvZnRlbiB0aGFuXG4gICAgICAgIC8vIGhhdmluZyBcIkBcIiBhcyB0aGUgZmlyc3QgY2hhcmFjdGVyXG4gICAgICAgIHZhciBpc0ltcG9ydFJ1bGUgPSBydWxlLmNoYXJDb2RlQXQoMSkgPT09IDEwNSAmJiBydWxlLmNoYXJDb2RlQXQoMCkgPT09IDY0OyAvLyB0aGlzIGlzIHRoZSB1bHRyYWZhc3QgdmVyc2lvbiwgd29ya3MgYWNyb3NzIGJyb3dzZXJzXG4gICAgICAgIC8vIHRoZSBiaWcgZHJhd2JhY2sgaXMgdGhhdCB0aGUgY3NzIHdvbid0IGJlIGVkaXRhYmxlIGluIGRldnRvb2xzXG5cbiAgICAgICAgc2hlZXQuaW5zZXJ0UnVsZShydWxlLCAvLyB3ZSBuZWVkIHRvIGluc2VydCBAaW1wb3J0IHJ1bGVzIGJlZm9yZSBhbnl0aGluZyBlbHNlXG4gICAgICAgIC8vIG90aGVyd2lzZSB0aGVyZSB3aWxsIGJlIGFuIGVycm9yXG4gICAgICAgIC8vIHRlY2huaWNhbGx5IHRoaXMgbWVhbnMgdGhhdCB0aGUgQGltcG9ydCBydWxlcyB3aWxsXG4gICAgICAgIC8vIF91c3VhbGx5Xyhub3QgYWx3YXlzIHNpbmNlIHRoZXJlIGNvdWxkIGJlIG11bHRpcGxlIHN0eWxlIHRhZ3MpXG4gICAgICAgIC8vIGJlIHRoZSBmaXJzdCBvbmVzIGluIHByb2QgYW5kIGdlbmVyYWxseSBsYXRlciBpbiBkZXZcbiAgICAgICAgLy8gdGhpcyBzaG91bGRuJ3QgcmVhbGx5IG1hdHRlciBpbiB0aGUgcmVhbCB3b3JsZCB0aG91Z2hcbiAgICAgICAgLy8gQGltcG9ydCBpcyBnZW5lcmFsbHkgb25seSB1c2VkIGZvciBmb250IGZhY2VzIGZyb20gZ29vZ2xlIGZvbnRzIGFuZCBldGMuXG4gICAgICAgIC8vIHNvIHdoaWxlIHRoaXMgY291bGQgYmUgdGVjaG5pY2FsbHkgY29ycmVjdCB0aGVuIGl0IHdvdWxkIGJlIHNsb3dlciBhbmQgbGFyZ2VyXG4gICAgICAgIC8vIGZvciBhIHRpbnkgYml0IG9mIGNvcnJlY3RuZXNzIHRoYXQgd29uJ3QgbWF0dGVyIGluIHRoZSByZWFsIHdvcmxkXG4gICAgICAgIGlzSW1wb3J0UnVsZSA/IDAgOiBzaGVldC5jc3NSdWxlcy5sZW5ndGgpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcIlRoZXJlIHdhcyBhIHByb2JsZW0gaW5zZXJ0aW5nIHRoZSBmb2xsb3dpbmcgcnVsZTogXFxcIlwiICsgcnVsZSArIFwiXFxcIlwiLCBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0YWcuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocnVsZSkpO1xuICAgIH1cblxuICAgIHRoaXMuY3RyKys7XG4gIH07XG5cbiAgX3Byb3RvLmZsdXNoID0gZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgLy8gJEZsb3dGaXhNZVxuICAgIHRoaXMudGFncy5mb3JFYWNoKGZ1bmN0aW9uICh0YWcpIHtcbiAgICAgIHJldHVybiB0YWcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0YWcpO1xuICAgIH0pO1xuICAgIHRoaXMudGFncyA9IFtdO1xuICAgIHRoaXMuY3RyID0gMDtcbiAgfTtcblxuICByZXR1cm4gU3R5bGVTaGVldDtcbn0oKTtcblxuZXhwb3J0IHsgU3R5bGVTaGVldCB9O1xuIiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBpc1Byb3BWYWxpZCBmcm9tICdAZW1vdGlvbi9pcy1wcm9wLXZhbGlkJztcbmltcG9ydCB7IHdpdGhFbW90aW9uQ2FjaGUsIFRoZW1lQ29udGV4dCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHsgZ2V0UmVnaXN0ZXJlZFN0eWxlcywgaW5zZXJ0U3R5bGVzIH0gZnJvbSAnQGVtb3Rpb24vdXRpbHMnO1xuaW1wb3J0IHsgc2VyaWFsaXplU3R5bGVzIH0gZnJvbSAnQGVtb3Rpb24vc2VyaWFsaXplJztcblxudmFyIHRlc3RPbWl0UHJvcHNPblN0cmluZ1RhZyA9IGlzUHJvcFZhbGlkO1xuXG52YXIgdGVzdE9taXRQcm9wc09uQ29tcG9uZW50ID0gZnVuY3Rpb24gdGVzdE9taXRQcm9wc09uQ29tcG9uZW50KGtleSkge1xuICByZXR1cm4ga2V5ICE9PSAndGhlbWUnICYmIGtleSAhPT0gJ2lubmVyUmVmJztcbn07XG5cbnZhciBnZXREZWZhdWx0U2hvdWxkRm9yd2FyZFByb3AgPSBmdW5jdGlvbiBnZXREZWZhdWx0U2hvdWxkRm9yd2FyZFByb3AodGFnKSB7XG4gIHJldHVybiB0eXBlb2YgdGFnID09PSAnc3RyaW5nJyAmJiAvLyA5NiBpcyBvbmUgbGVzcyB0aGFuIHRoZSBjaGFyIGNvZGVcbiAgLy8gZm9yIFwiYVwiIHNvIHRoaXMgaXMgY2hlY2tpbmcgdGhhdFxuICAvLyBpdCdzIGEgbG93ZXJjYXNlIGNoYXJhY3RlclxuICB0YWcuY2hhckNvZGVBdCgwKSA+IDk2ID8gdGVzdE9taXRQcm9wc09uU3RyaW5nVGFnIDogdGVzdE9taXRQcm9wc09uQ29tcG9uZW50O1xufTtcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG52YXIgSUxMRUdBTF9FU0NBUEVfU0VRVUVOQ0VfRVJST1IgPSBcIllvdSBoYXZlIGlsbGVnYWwgZXNjYXBlIHNlcXVlbmNlIGluIHlvdXIgdGVtcGxhdGUgbGl0ZXJhbCwgbW9zdCBsaWtlbHkgaW5zaWRlIGNvbnRlbnQncyBwcm9wZXJ0eSB2YWx1ZS5cXG5CZWNhdXNlIHlvdSB3cml0ZSB5b3VyIENTUyBpbnNpZGUgYSBKYXZhU2NyaXB0IHN0cmluZyB5b3UgYWN0dWFsbHkgaGF2ZSB0byBkbyBkb3VibGUgZXNjYXBpbmcsIHNvIGZvciBleGFtcGxlIFxcXCJjb250ZW50OiAnXFxcXDAwZDcnO1xcXCIgc2hvdWxkIGJlY29tZSBcXFwiY29udGVudDogJ1xcXFxcXFxcMDBkNyc7XFxcIi5cXG5Zb3UgY2FuIHJlYWQgbW9yZSBhYm91dCB0aGlzIGhlcmU6XFxuaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvVGVtcGxhdGVfbGl0ZXJhbHMjRVMyMDE4X3JldmlzaW9uX29mX2lsbGVnYWxfZXNjYXBlX3NlcXVlbmNlc1wiO1xuXG52YXIgTm9vcCA9IGZ1bmN0aW9uIE5vb3AoKSB7XG4gIHJldHVybiBudWxsO1xufTtcblxudmFyIGNyZWF0ZVN0eWxlZCA9IGZ1bmN0aW9uIGNyZWF0ZVN0eWxlZCh0YWcsIG9wdGlvbnMpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAodGFnID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignWW91IGFyZSB0cnlpbmcgdG8gY3JlYXRlIGEgc3R5bGVkIGVsZW1lbnQgd2l0aCBhbiB1bmRlZmluZWQgY29tcG9uZW50LlxcbllvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gaW1wb3J0IGl0LicpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBpZGVudGlmaWVyTmFtZTtcbiAgdmFyIHNob3VsZEZvcndhcmRQcm9wO1xuICB2YXIgdGFyZ2V0Q2xhc3NOYW1lO1xuXG4gIGlmIChvcHRpb25zICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZGVudGlmaWVyTmFtZSA9IG9wdGlvbnMubGFiZWw7XG4gICAgdGFyZ2V0Q2xhc3NOYW1lID0gb3B0aW9ucy50YXJnZXQ7XG4gICAgc2hvdWxkRm9yd2FyZFByb3AgPSB0YWcuX19lbW90aW9uX2ZvcndhcmRQcm9wICYmIG9wdGlvbnMuc2hvdWxkRm9yd2FyZFByb3AgPyBmdW5jdGlvbiAocHJvcE5hbWUpIHtcbiAgICAgIHJldHVybiB0YWcuX19lbW90aW9uX2ZvcndhcmRQcm9wKHByb3BOYW1lKSAmJiAvLyAkRmxvd0ZpeE1lXG4gICAgICBvcHRpb25zLnNob3VsZEZvcndhcmRQcm9wKHByb3BOYW1lKTtcbiAgICB9IDogb3B0aW9ucy5zaG91bGRGb3J3YXJkUHJvcDtcbiAgfVxuXG4gIHZhciBpc1JlYWwgPSB0YWcuX19lbW90aW9uX3JlYWwgPT09IHRhZztcbiAgdmFyIGJhc2VUYWcgPSBpc1JlYWwgJiYgdGFnLl9fZW1vdGlvbl9iYXNlIHx8IHRhZztcblxuICBpZiAodHlwZW9mIHNob3VsZEZvcndhcmRQcm9wICE9PSAnZnVuY3Rpb24nICYmIGlzUmVhbCkge1xuICAgIHNob3VsZEZvcndhcmRQcm9wID0gdGFnLl9fZW1vdGlvbl9mb3J3YXJkUHJvcDtcbiAgfVxuXG4gIHZhciBkZWZhdWx0U2hvdWxkRm9yd2FyZFByb3AgPSBzaG91bGRGb3J3YXJkUHJvcCB8fCBnZXREZWZhdWx0U2hvdWxkRm9yd2FyZFByb3AoYmFzZVRhZyk7XG4gIHZhciBzaG91bGRVc2VBcyA9ICFkZWZhdWx0U2hvdWxkRm9yd2FyZFByb3AoJ2FzJyk7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgdmFyIHN0eWxlcyA9IGlzUmVhbCAmJiB0YWcuX19lbW90aW9uX3N0eWxlcyAhPT0gdW5kZWZpbmVkID8gdGFnLl9fZW1vdGlvbl9zdHlsZXMuc2xpY2UoMCkgOiBbXTtcblxuICAgIGlmIChpZGVudGlmaWVyTmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBzdHlsZXMucHVzaChcImxhYmVsOlwiICsgaWRlbnRpZmllck5hbWUgKyBcIjtcIik7XG4gICAgfVxuXG4gICAgaWYgKGFyZ3NbMF0gPT0gbnVsbCB8fCBhcmdzWzBdLnJhdyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBzdHlsZXMucHVzaC5hcHBseShzdHlsZXMsIGFyZ3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBhcmdzWzBdWzBdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihJTExFR0FMX0VTQ0FQRV9TRVFVRU5DRV9FUlJPUik7XG4gICAgICB9XG5cbiAgICAgIHN0eWxlcy5wdXNoKGFyZ3NbMF1bMF0pO1xuICAgICAgdmFyIGxlbiA9IGFyZ3MubGVuZ3RoO1xuICAgICAgdmFyIGkgPSAxO1xuXG4gICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGFyZ3NbMF1baV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoSUxMRUdBTF9FU0NBUEVfU0VRVUVOQ0VfRVJST1IpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3R5bGVzLnB1c2goYXJnc1tpXSwgYXJnc1swXVtpXSk7XG4gICAgICB9XG4gICAgfSAvLyAkRmxvd0ZpeE1lOiB3ZSBuZWVkIHRvIGNhc3QgU3RhdGVsZXNzRnVuY3Rpb25hbENvbXBvbmVudCB0byBvdXIgUHJpdmF0ZVN0eWxlZENvbXBvbmVudCBjbGFzc1xuXG5cbiAgICB2YXIgU3R5bGVkID0gd2l0aEVtb3Rpb25DYWNoZShmdW5jdGlvbiAocHJvcHMsIGNvbnRleHQsIHJlZikge1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KFRoZW1lQ29udGV4dC5Db25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKHRoZW1lKSB7XG4gICAgICAgIHZhciBmaW5hbFRhZyA9IHNob3VsZFVzZUFzICYmIHByb3BzLmFzIHx8IGJhc2VUYWc7XG4gICAgICAgIHZhciBjbGFzc05hbWUgPSAnJztcbiAgICAgICAgdmFyIGNsYXNzSW50ZXJwb2xhdGlvbnMgPSBbXTtcbiAgICAgICAgdmFyIG1lcmdlZFByb3BzID0gcHJvcHM7XG5cbiAgICAgICAgaWYgKHByb3BzLnRoZW1lID09IG51bGwpIHtcbiAgICAgICAgICBtZXJnZWRQcm9wcyA9IHt9O1xuXG4gICAgICAgICAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgICAgICAgICBtZXJnZWRQcm9wc1trZXldID0gcHJvcHNba2V5XTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBtZXJnZWRQcm9wcy50aGVtZSA9IHRoZW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBwcm9wcy5jbGFzc05hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY2xhc3NOYW1lID0gZ2V0UmVnaXN0ZXJlZFN0eWxlcyhjb250ZXh0LnJlZ2lzdGVyZWQsIGNsYXNzSW50ZXJwb2xhdGlvbnMsIHByb3BzLmNsYXNzTmFtZSk7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvcHMuY2xhc3NOYW1lICE9IG51bGwpIHtcbiAgICAgICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUgKyBcIiBcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzZXJpYWxpemVkID0gc2VyaWFsaXplU3R5bGVzKHN0eWxlcy5jb25jYXQoY2xhc3NJbnRlcnBvbGF0aW9ucyksIGNvbnRleHQucmVnaXN0ZXJlZCwgbWVyZ2VkUHJvcHMpO1xuICAgICAgICB2YXIgcnVsZXMgPSBpbnNlcnRTdHlsZXMoY29udGV4dCwgc2VyaWFsaXplZCwgdHlwZW9mIGZpbmFsVGFnID09PSAnc3RyaW5nJyk7XG4gICAgICAgIGNsYXNzTmFtZSArPSBjb250ZXh0LmtleSArIFwiLVwiICsgc2VyaWFsaXplZC5uYW1lO1xuXG4gICAgICAgIGlmICh0YXJnZXRDbGFzc05hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGNsYXNzTmFtZSArPSBcIiBcIiArIHRhcmdldENsYXNzTmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBmaW5hbFNob3VsZEZvcndhcmRQcm9wID0gc2hvdWxkVXNlQXMgJiYgc2hvdWxkRm9yd2FyZFByb3AgPT09IHVuZGVmaW5lZCA/IGdldERlZmF1bHRTaG91bGRGb3J3YXJkUHJvcChmaW5hbFRhZykgOiBkZWZhdWx0U2hvdWxkRm9yd2FyZFByb3A7XG4gICAgICAgIHZhciBuZXdQcm9wcyA9IHt9O1xuXG4gICAgICAgIGZvciAodmFyIF9rZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgICBpZiAoc2hvdWxkVXNlQXMgJiYgX2tleSA9PT0gJ2FzJykgY29udGludWU7XG5cbiAgICAgICAgICBpZiAoIC8vICRGbG93Rml4TWVcbiAgICAgICAgICBmaW5hbFNob3VsZEZvcndhcmRQcm9wKF9rZXkpKSB7XG4gICAgICAgICAgICBuZXdQcm9wc1tfa2V5XSA9IHByb3BzW19rZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG5ld1Byb3BzLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICAgICAgbmV3UHJvcHMucmVmID0gcmVmIHx8IHByb3BzLmlubmVyUmVmO1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHByb3BzLmlubmVyUmVmKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignYGlubmVyUmVmYCBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgdmVyc2lvbiBvZiBFbW90aW9uLCBwbGVhc2UgdXNlIHRoZSBgcmVmYCBwcm9wIGluc3RlYWQnICsgKGlkZW50aWZpZXJOYW1lID09PSB1bmRlZmluZWQgPyAnJyA6IFwiIGluIHRoZSB1c2FnZSBvZiBgXCIgKyBpZGVudGlmaWVyTmFtZSArIFwiYFwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZWxlID0gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoZmluYWxUYWcsIG5ld1Byb3BzKTtcbiAgICAgICAgdmFyIHBvc3NpYmx5U3R5bGVFbGVtZW50ID0gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoTm9vcCwgbnVsbCk7XG5cblxuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoRnJhZ21lbnQsIG51bGwsIHBvc3NpYmx5U3R5bGVFbGVtZW50LCBlbGUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgU3R5bGVkLmRpc3BsYXlOYW1lID0gaWRlbnRpZmllck5hbWUgIT09IHVuZGVmaW5lZCA/IGlkZW50aWZpZXJOYW1lIDogXCJTdHlsZWQoXCIgKyAodHlwZW9mIGJhc2VUYWcgPT09ICdzdHJpbmcnID8gYmFzZVRhZyA6IGJhc2VUYWcuZGlzcGxheU5hbWUgfHwgYmFzZVRhZy5uYW1lIHx8ICdDb21wb25lbnQnKSArIFwiKVwiO1xuICAgIFN0eWxlZC5kZWZhdWx0UHJvcHMgPSB0YWcuZGVmYXVsdFByb3BzO1xuICAgIFN0eWxlZC5fX2Vtb3Rpb25fcmVhbCA9IFN0eWxlZDtcbiAgICBTdHlsZWQuX19lbW90aW9uX2Jhc2UgPSBiYXNlVGFnO1xuICAgIFN0eWxlZC5fX2Vtb3Rpb25fc3R5bGVzID0gc3R5bGVzO1xuICAgIFN0eWxlZC5fX2Vtb3Rpb25fZm9yd2FyZFByb3AgPSBzaG91bGRGb3J3YXJkUHJvcDtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3R5bGVkLCAndG9TdHJpbmcnLCB7XG4gICAgICB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoKSB7XG4gICAgICAgIGlmICh0YXJnZXRDbGFzc05hbWUgPT09IHVuZGVmaW5lZCAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgcmV0dXJuICdOT19DT01QT05FTlRfU0VMRUNUT1InO1xuICAgICAgICB9IC8vICRGbG93Rml4TWU6IGNvZXJjZSB1bmRlZmluZWQgdG8gc3RyaW5nXG5cblxuICAgICAgICByZXR1cm4gXCIuXCIgKyB0YXJnZXRDbGFzc05hbWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBTdHlsZWQud2l0aENvbXBvbmVudCA9IGZ1bmN0aW9uIChuZXh0VGFnLCBuZXh0T3B0aW9ucykge1xuICAgICAgcmV0dXJuIGNyZWF0ZVN0eWxlZChuZXh0VGFnLCBuZXh0T3B0aW9ucyAhPT0gdW5kZWZpbmVkID8gX29iamVjdFNwcmVhZCh7fSwgb3B0aW9ucyB8fCB7fSwge30sIG5leHRPcHRpb25zKSA6IG9wdGlvbnMpLmFwcGx5KHZvaWQgMCwgc3R5bGVzKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFN0eWxlZDtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN0eWxlZDtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkLWJhc2UnO1xuXG52YXIgdGFncyA9IFsnYScsICdhYmJyJywgJ2FkZHJlc3MnLCAnYXJlYScsICdhcnRpY2xlJywgJ2FzaWRlJywgJ2F1ZGlvJywgJ2InLCAnYmFzZScsICdiZGknLCAnYmRvJywgJ2JpZycsICdibG9ja3F1b3RlJywgJ2JvZHknLCAnYnInLCAnYnV0dG9uJywgJ2NhbnZhcycsICdjYXB0aW9uJywgJ2NpdGUnLCAnY29kZScsICdjb2wnLCAnY29sZ3JvdXAnLCAnZGF0YScsICdkYXRhbGlzdCcsICdkZCcsICdkZWwnLCAnZGV0YWlscycsICdkZm4nLCAnZGlhbG9nJywgJ2RpdicsICdkbCcsICdkdCcsICdlbScsICdlbWJlZCcsICdmaWVsZHNldCcsICdmaWdjYXB0aW9uJywgJ2ZpZ3VyZScsICdmb290ZXInLCAnZm9ybScsICdoMScsICdoMicsICdoMycsICdoNCcsICdoNScsICdoNicsICdoZWFkJywgJ2hlYWRlcicsICdoZ3JvdXAnLCAnaHInLCAnaHRtbCcsICdpJywgJ2lmcmFtZScsICdpbWcnLCAnaW5wdXQnLCAnaW5zJywgJ2tiZCcsICdrZXlnZW4nLCAnbGFiZWwnLCAnbGVnZW5kJywgJ2xpJywgJ2xpbmsnLCAnbWFpbicsICdtYXAnLCAnbWFyaycsICdtYXJxdWVlJywgJ21lbnUnLCAnbWVudWl0ZW0nLCAnbWV0YScsICdtZXRlcicsICduYXYnLCAnbm9zY3JpcHQnLCAnb2JqZWN0JywgJ29sJywgJ29wdGdyb3VwJywgJ29wdGlvbicsICdvdXRwdXQnLCAncCcsICdwYXJhbScsICdwaWN0dXJlJywgJ3ByZScsICdwcm9ncmVzcycsICdxJywgJ3JwJywgJ3J0JywgJ3J1YnknLCAncycsICdzYW1wJywgJ3NjcmlwdCcsICdzZWN0aW9uJywgJ3NlbGVjdCcsICdzbWFsbCcsICdzb3VyY2UnLCAnc3BhbicsICdzdHJvbmcnLCAnc3R5bGUnLCAnc3ViJywgJ3N1bW1hcnknLCAnc3VwJywgJ3RhYmxlJywgJ3Rib2R5JywgJ3RkJywgJ3RleHRhcmVhJywgJ3Rmb290JywgJ3RoJywgJ3RoZWFkJywgJ3RpbWUnLCAndGl0bGUnLCAndHInLCAndHJhY2snLCAndScsICd1bCcsICd2YXInLCAndmlkZW8nLCAnd2JyJywgLy8gU1ZHXG4nY2lyY2xlJywgJ2NsaXBQYXRoJywgJ2RlZnMnLCAnZWxsaXBzZScsICdmb3JlaWduT2JqZWN0JywgJ2cnLCAnaW1hZ2UnLCAnbGluZScsICdsaW5lYXJHcmFkaWVudCcsICdtYXNrJywgJ3BhdGgnLCAncGF0dGVybicsICdwb2x5Z29uJywgJ3BvbHlsaW5lJywgJ3JhZGlhbEdyYWRpZW50JywgJ3JlY3QnLCAnc3RvcCcsICdzdmcnLCAndGV4dCcsICd0c3BhbiddO1xuXG52YXIgbmV3U3R5bGVkID0gc3R5bGVkLmJpbmQoKTtcbnRhZ3MuZm9yRWFjaChmdW5jdGlvbiAodGFnTmFtZSkge1xuICBuZXdTdHlsZWRbdGFnTmFtZV0gPSBuZXdTdHlsZWQodGFnTmFtZSk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgbmV3U3R5bGVkO1xuIiwiZnVuY3Rpb24gc3R5bGlzX21pbiAoVykge1xuICBmdW5jdGlvbiBNKGQsIGMsIGUsIGgsIGEpIHtcbiAgICBmb3IgKHZhciBtID0gMCwgYiA9IDAsIHYgPSAwLCBuID0gMCwgcSwgZywgeCA9IDAsIEsgPSAwLCBrLCB1ID0gayA9IHEgPSAwLCBsID0gMCwgciA9IDAsIEkgPSAwLCB0ID0gMCwgQiA9IGUubGVuZ3RoLCBKID0gQiAtIDEsIHksIGYgPSAnJywgcCA9ICcnLCBGID0gJycsIEcgPSAnJywgQzsgbCA8IEI7KSB7XG4gICAgICBnID0gZS5jaGFyQ29kZUF0KGwpO1xuICAgICAgbCA9PT0gSiAmJiAwICE9PSBiICsgbiArIHYgKyBtICYmICgwICE9PSBiICYmIChnID0gNDcgPT09IGIgPyAxMCA6IDQ3KSwgbiA9IHYgPSBtID0gMCwgQisrLCBKKyspO1xuXG4gICAgICBpZiAoMCA9PT0gYiArIG4gKyB2ICsgbSkge1xuICAgICAgICBpZiAobCA9PT0gSiAmJiAoMCA8IHIgJiYgKGYgPSBmLnJlcGxhY2UoTiwgJycpKSwgMCA8IGYudHJpbSgpLmxlbmd0aCkpIHtcbiAgICAgICAgICBzd2l0Y2ggKGcpIHtcbiAgICAgICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICBjYXNlIDU5OlxuICAgICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBmICs9IGUuY2hhckF0KGwpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGcgPSA1OTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAoZykge1xuICAgICAgICAgIGNhc2UgMTIzOlxuICAgICAgICAgICAgZiA9IGYudHJpbSgpO1xuICAgICAgICAgICAgcSA9IGYuY2hhckNvZGVBdCgwKTtcbiAgICAgICAgICAgIGsgPSAxO1xuXG4gICAgICAgICAgICBmb3IgKHQgPSArK2w7IGwgPCBCOykge1xuICAgICAgICAgICAgICBzd2l0Y2ggKGcgPSBlLmNoYXJDb2RlQXQobCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDEyMzpcbiAgICAgICAgICAgICAgICAgIGsrKztcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAxMjU6XG4gICAgICAgICAgICAgICAgICBrLS07XG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgNDc6XG4gICAgICAgICAgICAgICAgICBzd2l0Y2ggKGcgPSBlLmNoYXJDb2RlQXQobCArIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDI6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDc6XG4gICAgICAgICAgICAgICAgICAgICAgYToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh1ID0gbCArIDE7IHUgPCBKOyArK3UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChlLmNoYXJDb2RlQXQodSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ3OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDQyID09PSBnICYmIDQyID09PSBlLmNoYXJDb2RlQXQodSAtIDEpICYmIGwgKyAyICE9PSB1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwgPSB1ICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWsgYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDQ3ID09PSBnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwgPSB1ICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWsgYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGwgPSB1O1xuICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgOTE6XG4gICAgICAgICAgICAgICAgICBnKys7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICAgICAgZysrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAzNDpcbiAgICAgICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAgICAgZm9yICg7IGwrKyA8IEogJiYgZS5jaGFyQ29kZUF0KGwpICE9PSBnOykge1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoMCA9PT0gaykgYnJlYWs7XG4gICAgICAgICAgICAgIGwrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgayA9IGUuc3Vic3RyaW5nKHQsIGwpO1xuICAgICAgICAgICAgMCA9PT0gcSAmJiAocSA9IChmID0gZi5yZXBsYWNlKGNhLCAnJykudHJpbSgpKS5jaGFyQ29kZUF0KDApKTtcblxuICAgICAgICAgICAgc3dpdGNoIChxKSB7XG4gICAgICAgICAgICAgIGNhc2UgNjQ6XG4gICAgICAgICAgICAgICAgMCA8IHIgJiYgKGYgPSBmLnJlcGxhY2UoTiwgJycpKTtcbiAgICAgICAgICAgICAgICBnID0gZi5jaGFyQ29kZUF0KDEpO1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoIChnKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIDEwMDpcbiAgICAgICAgICAgICAgICAgIGNhc2UgMTA5OlxuICAgICAgICAgICAgICAgICAgY2FzZSAxMTU6XG4gICAgICAgICAgICAgICAgICBjYXNlIDQ1OlxuICAgICAgICAgICAgICAgICAgICByID0gYztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHIgPSBPO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGsgPSBNKGMsIHIsIGssIGcsIGEgKyAxKTtcbiAgICAgICAgICAgICAgICB0ID0gay5sZW5ndGg7XG4gICAgICAgICAgICAgICAgMCA8IEEgJiYgKHIgPSBYKE8sIGYsIEkpLCBDID0gSCgzLCBrLCByLCBjLCBELCB6LCB0LCBnLCBhLCBoKSwgZiA9IHIuam9pbignJyksIHZvaWQgMCAhPT0gQyAmJiAwID09PSAodCA9IChrID0gQy50cmltKCkpLmxlbmd0aCkgJiYgKGcgPSAwLCBrID0gJycpKTtcbiAgICAgICAgICAgICAgICBpZiAoMCA8IHQpIHN3aXRjaCAoZykge1xuICAgICAgICAgICAgICAgICAgY2FzZSAxMTU6XG4gICAgICAgICAgICAgICAgICAgIGYgPSBmLnJlcGxhY2UoZGEsIGVhKTtcblxuICAgICAgICAgICAgICAgICAgY2FzZSAxMDA6XG4gICAgICAgICAgICAgICAgICBjYXNlIDEwOTpcbiAgICAgICAgICAgICAgICAgIGNhc2UgNDU6XG4gICAgICAgICAgICAgICAgICAgIGsgPSBmICsgJ3snICsgayArICd9JztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2UgMTA3OlxuICAgICAgICAgICAgICAgICAgICBmID0gZi5yZXBsYWNlKGZhLCAnJDEgJDInKTtcbiAgICAgICAgICAgICAgICAgICAgayA9IGYgKyAneycgKyBrICsgJ30nO1xuICAgICAgICAgICAgICAgICAgICBrID0gMSA9PT0gdyB8fCAyID09PSB3ICYmIEwoJ0AnICsgaywgMykgPyAnQC13ZWJraXQtJyArIGsgKyAnQCcgKyBrIDogJ0AnICsgaztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGsgPSBmICsgaywgMTEyID09PSBoICYmIChrID0gKHAgKz0gaywgJycpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgayA9ICcnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgayA9IE0oYywgWChjLCBmLCBJKSwgaywgaCwgYSArIDEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBGICs9IGs7XG4gICAgICAgICAgICBrID0gSSA9IHIgPSB1ID0gcSA9IDA7XG4gICAgICAgICAgICBmID0gJyc7XG4gICAgICAgICAgICBnID0gZS5jaGFyQ29kZUF0KCsrbCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgMTI1OlxuICAgICAgICAgIGNhc2UgNTk6XG4gICAgICAgICAgICBmID0gKDAgPCByID8gZi5yZXBsYWNlKE4sICcnKSA6IGYpLnRyaW0oKTtcbiAgICAgICAgICAgIGlmICgxIDwgKHQgPSBmLmxlbmd0aCkpIHN3aXRjaCAoMCA9PT0gdSAmJiAocSA9IGYuY2hhckNvZGVBdCgwKSwgNDUgPT09IHEgfHwgOTYgPCBxICYmIDEyMyA+IHEpICYmICh0ID0gKGYgPSBmLnJlcGxhY2UoJyAnLCAnOicpKS5sZW5ndGgpLCAwIDwgQSAmJiB2b2lkIDAgIT09IChDID0gSCgxLCBmLCBjLCBkLCBELCB6LCBwLmxlbmd0aCwgaCwgYSwgaCkpICYmIDAgPT09ICh0ID0gKGYgPSBDLnRyaW0oKSkubGVuZ3RoKSAmJiAoZiA9ICdcXHgwMFxceDAwJyksIHEgPSBmLmNoYXJDb2RlQXQoMCksIGcgPSBmLmNoYXJDb2RlQXQoMSksIHEpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgNjQ6XG4gICAgICAgICAgICAgICAgaWYgKDEwNSA9PT0gZyB8fCA5OSA9PT0gZykge1xuICAgICAgICAgICAgICAgICAgRyArPSBmICsgZS5jaGFyQXQobCk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICA1OCAhPT0gZi5jaGFyQ29kZUF0KHQgLSAxKSAmJiAocCArPSBQKGYsIHEsIGcsIGYuY2hhckNvZGVBdCgyKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgSSA9IHIgPSB1ID0gcSA9IDA7XG4gICAgICAgICAgICBmID0gJyc7XG4gICAgICAgICAgICBnID0gZS5jaGFyQ29kZUF0KCsrbCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc3dpdGNoIChnKSB7XG4gICAgICAgIGNhc2UgMTM6XG4gICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgNDcgPT09IGIgPyBiID0gMCA6IDAgPT09IDEgKyBxICYmIDEwNyAhPT0gaCAmJiAwIDwgZi5sZW5ndGggJiYgKHIgPSAxLCBmICs9ICdcXHgwMCcpO1xuICAgICAgICAgIDAgPCBBICogWSAmJiBIKDAsIGYsIGMsIGQsIEQsIHosIHAubGVuZ3RoLCBoLCBhLCBoKTtcbiAgICAgICAgICB6ID0gMTtcbiAgICAgICAgICBEKys7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSA1OTpcbiAgICAgICAgY2FzZSAxMjU6XG4gICAgICAgICAgaWYgKDAgPT09IGIgKyBuICsgdiArIG0pIHtcbiAgICAgICAgICAgIHorKztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHorKztcbiAgICAgICAgICB5ID0gZS5jaGFyQXQobCk7XG5cbiAgICAgICAgICBzd2l0Y2ggKGcpIHtcbiAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgICAgIGlmICgwID09PSBuICsgbSArIGIpIHN3aXRjaCAoeCkge1xuICAgICAgICAgICAgICAgIGNhc2UgNDQ6XG4gICAgICAgICAgICAgICAgY2FzZSA1ODpcbiAgICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICAgICAgICAgIHkgPSAnJztcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgIDMyICE9PSBnICYmICh5ID0gJyAnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICB5ID0gJ1xcXFwwJztcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICAgIHkgPSAnXFxcXGYnO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgICAgeSA9ICdcXFxcdic7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICAwID09PSBuICsgYiArIG0gJiYgKHIgPSBJID0gMSwgeSA9ICdcXGYnICsgeSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDEwODpcbiAgICAgICAgICAgICAgaWYgKDAgPT09IG4gKyBiICsgbSArIEUgJiYgMCA8IHUpIHN3aXRjaCAobCAtIHUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAxMTIgPT09IHggJiYgNTggPT09IGUuY2hhckNvZGVBdChsIC0gMykgJiYgKEUgPSB4KTtcblxuICAgICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICAgIDExMSA9PT0gSyAmJiAoRSA9IEspO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDU4OlxuICAgICAgICAgICAgICAwID09PSBuICsgYiArIG0gJiYgKHUgPSBsKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNDQ6XG4gICAgICAgICAgICAgIDAgPT09IGIgKyB2ICsgbiArIG0gJiYgKHIgPSAxLCB5ICs9ICdcXHInKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMzQ6XG4gICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAwID09PSBiICYmIChuID0gbiA9PT0gZyA/IDAgOiAwID09PSBuID8gZyA6IG4pO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA5MTpcbiAgICAgICAgICAgICAgMCA9PT0gbiArIGIgKyB2ICYmIG0rKztcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgOTM6XG4gICAgICAgICAgICAgIDAgPT09IG4gKyBiICsgdiAmJiBtLS07XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDQxOlxuICAgICAgICAgICAgICAwID09PSBuICsgYiArIG0gJiYgdi0tO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgaWYgKDAgPT09IG4gKyBiICsgbSkge1xuICAgICAgICAgICAgICAgIGlmICgwID09PSBxKSBzd2l0Y2ggKDIgKiB4ICsgMyAqIEspIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgNTMzOlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcSA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHYrKztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDY0OlxuICAgICAgICAgICAgICAwID09PSBiICsgdiArIG4gKyBtICsgdSArIGsgJiYgKGsgPSAxKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNDI6XG4gICAgICAgICAgICBjYXNlIDQ3OlxuICAgICAgICAgICAgICBpZiAoISgwIDwgbiArIG0gKyB2KSkgc3dpdGNoIChiKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgc3dpdGNoICgyICogZyArIDMgKiBlLmNoYXJDb2RlQXQobCArIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjM1OlxuICAgICAgICAgICAgICAgICAgICAgIGIgPSA0NztcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlIDIyMDpcbiAgICAgICAgICAgICAgICAgICAgICB0ID0gbCwgYiA9IDQyO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgNDI6XG4gICAgICAgICAgICAgICAgICA0NyA9PT0gZyAmJiA0MiA9PT0geCAmJiB0ICsgMiAhPT0gbCAmJiAoMzMgPT09IGUuY2hhckNvZGVBdCh0ICsgMikgJiYgKHAgKz0gZS5zdWJzdHJpbmcodCwgbCArIDEpKSwgeSA9ICcnLCBiID0gMCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAwID09PSBiICYmIChmICs9IHkpO1xuICAgICAgfVxuXG4gICAgICBLID0geDtcbiAgICAgIHggPSBnO1xuICAgICAgbCsrO1xuICAgIH1cblxuICAgIHQgPSBwLmxlbmd0aDtcblxuICAgIGlmICgwIDwgdCkge1xuICAgICAgciA9IGM7XG4gICAgICBpZiAoMCA8IEEgJiYgKEMgPSBIKDIsIHAsIHIsIGQsIEQsIHosIHQsIGgsIGEsIGgpLCB2b2lkIDAgIT09IEMgJiYgMCA9PT0gKHAgPSBDKS5sZW5ndGgpKSByZXR1cm4gRyArIHAgKyBGO1xuICAgICAgcCA9IHIuam9pbignLCcpICsgJ3snICsgcCArICd9JztcblxuICAgICAgaWYgKDAgIT09IHcgKiBFKSB7XG4gICAgICAgIDIgIT09IHcgfHwgTChwLCAyKSB8fCAoRSA9IDApO1xuXG4gICAgICAgIHN3aXRjaCAoRSkge1xuICAgICAgICAgIGNhc2UgMTExOlxuICAgICAgICAgICAgcCA9IHAucmVwbGFjZShoYSwgJzotbW96LSQxJykgKyBwO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDExMjpcbiAgICAgICAgICAgIHAgPSBwLnJlcGxhY2UoUSwgJzo6LXdlYmtpdC1pbnB1dC0kMScpICsgcC5yZXBsYWNlKFEsICc6Oi1tb3otJDEnKSArIHAucmVwbGFjZShRLCAnOi1tcy1pbnB1dC0kMScpICsgcDtcbiAgICAgICAgfVxuXG4gICAgICAgIEUgPSAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBHICsgcCArIEY7XG4gIH1cblxuICBmdW5jdGlvbiBYKGQsIGMsIGUpIHtcbiAgICB2YXIgaCA9IGMudHJpbSgpLnNwbGl0KGlhKTtcbiAgICBjID0gaDtcbiAgICB2YXIgYSA9IGgubGVuZ3RoLFxuICAgICAgICBtID0gZC5sZW5ndGg7XG5cbiAgICBzd2l0Y2ggKG0pIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgdmFyIGIgPSAwO1xuXG4gICAgICAgIGZvciAoZCA9IDAgPT09IG0gPyAnJyA6IGRbMF0gKyAnICc7IGIgPCBhOyArK2IpIHtcbiAgICAgICAgICBjW2JdID0gWihkLCBjW2JdLCBlKS50cmltKCk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdmFyIHYgPSBiID0gMDtcblxuICAgICAgICBmb3IgKGMgPSBbXTsgYiA8IGE7ICsrYikge1xuICAgICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgbTsgKytuKSB7XG4gICAgICAgICAgICBjW3YrK10gPSBaKGRbbl0gKyAnICcsIGhbYl0sIGUpLnRyaW0oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybiBjO1xuICB9XG5cbiAgZnVuY3Rpb24gWihkLCBjLCBlKSB7XG4gICAgdmFyIGggPSBjLmNoYXJDb2RlQXQoMCk7XG4gICAgMzMgPiBoICYmIChoID0gKGMgPSBjLnRyaW0oKSkuY2hhckNvZGVBdCgwKSk7XG5cbiAgICBzd2l0Y2ggKGgpIHtcbiAgICAgIGNhc2UgMzg6XG4gICAgICAgIHJldHVybiBjLnJlcGxhY2UoRiwgJyQxJyArIGQudHJpbSgpKTtcblxuICAgICAgY2FzZSA1ODpcbiAgICAgICAgcmV0dXJuIGQudHJpbSgpICsgYy5yZXBsYWNlKEYsICckMScgKyBkLnRyaW0oKSk7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmICgwIDwgMSAqIGUgJiYgMCA8IGMuaW5kZXhPZignXFxmJykpIHJldHVybiBjLnJlcGxhY2UoRiwgKDU4ID09PSBkLmNoYXJDb2RlQXQoMCkgPyAnJyA6ICckMScpICsgZC50cmltKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBkICsgYztcbiAgfVxuXG4gIGZ1bmN0aW9uIFAoZCwgYywgZSwgaCkge1xuICAgIHZhciBhID0gZCArICc7JyxcbiAgICAgICAgbSA9IDIgKiBjICsgMyAqIGUgKyA0ICogaDtcblxuICAgIGlmICg5NDQgPT09IG0pIHtcbiAgICAgIGQgPSBhLmluZGV4T2YoJzonLCA5KSArIDE7XG4gICAgICB2YXIgYiA9IGEuc3Vic3RyaW5nKGQsIGEubGVuZ3RoIC0gMSkudHJpbSgpO1xuICAgICAgYiA9IGEuc3Vic3RyaW5nKDAsIGQpLnRyaW0oKSArIGIgKyAnOyc7XG4gICAgICByZXR1cm4gMSA9PT0gdyB8fCAyID09PSB3ICYmIEwoYiwgMSkgPyAnLXdlYmtpdC0nICsgYiArIGIgOiBiO1xuICAgIH1cblxuICAgIGlmICgwID09PSB3IHx8IDIgPT09IHcgJiYgIUwoYSwgMSkpIHJldHVybiBhO1xuXG4gICAgc3dpdGNoIChtKSB7XG4gICAgICBjYXNlIDEwMTU6XG4gICAgICAgIHJldHVybiA5NyA9PT0gYS5jaGFyQ29kZUF0KDEwKSA/ICctd2Via2l0LScgKyBhICsgYSA6IGE7XG5cbiAgICAgIGNhc2UgOTUxOlxuICAgICAgICByZXR1cm4gMTE2ID09PSBhLmNoYXJDb2RlQXQoMykgPyAnLXdlYmtpdC0nICsgYSArIGEgOiBhO1xuXG4gICAgICBjYXNlIDk2MzpcbiAgICAgICAgcmV0dXJuIDExMCA9PT0gYS5jaGFyQ29kZUF0KDUpID8gJy13ZWJraXQtJyArIGEgKyBhIDogYTtcblxuICAgICAgY2FzZSAxMDA5OlxuICAgICAgICBpZiAoMTAwICE9PSBhLmNoYXJDb2RlQXQoNCkpIGJyZWFrO1xuXG4gICAgICBjYXNlIDk2OTpcbiAgICAgIGNhc2UgOTQyOlxuICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyBhO1xuXG4gICAgICBjYXNlIDk3ODpcbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tb3otJyArIGEgKyBhO1xuXG4gICAgICBjYXNlIDEwMTk6XG4gICAgICBjYXNlIDk4MzpcbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tb3otJyArIGEgKyAnLW1zLScgKyBhICsgYTtcblxuICAgICAgY2FzZSA4ODM6XG4gICAgICAgIGlmICg0NSA9PT0gYS5jaGFyQ29kZUF0KDgpKSByZXR1cm4gJy13ZWJraXQtJyArIGEgKyBhO1xuICAgICAgICBpZiAoMCA8IGEuaW5kZXhPZignaW1hZ2Utc2V0KCcsIDExKSkgcmV0dXJuIGEucmVwbGFjZShqYSwgJyQxLXdlYmtpdC0kMicpICsgYTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgOTMyOlxuICAgICAgICBpZiAoNDUgPT09IGEuY2hhckNvZGVBdCg0KSkgc3dpdGNoIChhLmNoYXJDb2RlQXQoNSkpIHtcbiAgICAgICAgICBjYXNlIDEwMzpcbiAgICAgICAgICAgIHJldHVybiAnLXdlYmtpdC1ib3gtJyArIGEucmVwbGFjZSgnLWdyb3cnLCAnJykgKyAnLXdlYmtpdC0nICsgYSArICctbXMtJyArIGEucmVwbGFjZSgnZ3JvdycsICdwb3NpdGl2ZScpICsgYTtcblxuICAgICAgICAgIGNhc2UgMTE1OlxuICAgICAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy0nICsgYS5yZXBsYWNlKCdzaHJpbmsnLCAnbmVnYXRpdmUnKSArIGE7XG5cbiAgICAgICAgICBjYXNlIDk4OlxuICAgICAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy0nICsgYS5yZXBsYWNlKCdiYXNpcycsICdwcmVmZXJyZWQtc2l6ZScpICsgYTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLScgKyBhICsgYTtcblxuICAgICAgY2FzZSA5NjQ6XG4gICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtZmxleC0nICsgYSArIGE7XG5cbiAgICAgIGNhc2UgMTAyMzpcbiAgICAgICAgaWYgKDk5ICE9PSBhLmNoYXJDb2RlQXQoOCkpIGJyZWFrO1xuICAgICAgICBiID0gYS5zdWJzdHJpbmcoYS5pbmRleE9mKCc6JywgMTUpKS5yZXBsYWNlKCdmbGV4LScsICcnKS5yZXBsYWNlKCdzcGFjZS1iZXR3ZWVuJywgJ2p1c3RpZnknKTtcbiAgICAgICAgcmV0dXJuICctd2Via2l0LWJveC1wYWNrJyArIGIgKyAnLXdlYmtpdC0nICsgYSArICctbXMtZmxleC1wYWNrJyArIGIgKyBhO1xuXG4gICAgICBjYXNlIDEwMDU6XG4gICAgICAgIHJldHVybiBrYS50ZXN0KGEpID8gYS5yZXBsYWNlKGFhLCAnOi13ZWJraXQtJykgKyBhLnJlcGxhY2UoYWEsICc6LW1vei0nKSArIGEgOiBhO1xuXG4gICAgICBjYXNlIDFlMzpcbiAgICAgICAgYiA9IGEuc3Vic3RyaW5nKDEzKS50cmltKCk7XG4gICAgICAgIGMgPSBiLmluZGV4T2YoJy0nKSArIDE7XG5cbiAgICAgICAgc3dpdGNoIChiLmNoYXJDb2RlQXQoMCkgKyBiLmNoYXJDb2RlQXQoYykpIHtcbiAgICAgICAgICBjYXNlIDIyNjpcbiAgICAgICAgICAgIGIgPSBhLnJlcGxhY2UoRywgJ3RiJyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgMjMyOlxuICAgICAgICAgICAgYiA9IGEucmVwbGFjZShHLCAndGItcmwnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAyMjA6XG4gICAgICAgICAgICBiID0gYS5yZXBsYWNlKEcsICdscicpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLScgKyBiICsgYTtcblxuICAgICAgY2FzZSAxMDE3OlxuICAgICAgICBpZiAoLTEgPT09IGEuaW5kZXhPZignc3RpY2t5JywgOSkpIGJyZWFrO1xuXG4gICAgICBjYXNlIDk3NTpcbiAgICAgICAgYyA9IChhID0gZCkubGVuZ3RoIC0gMTA7XG4gICAgICAgIGIgPSAoMzMgPT09IGEuY2hhckNvZGVBdChjKSA/IGEuc3Vic3RyaW5nKDAsIGMpIDogYSkuc3Vic3RyaW5nKGQuaW5kZXhPZignOicsIDcpICsgMSkudHJpbSgpO1xuXG4gICAgICAgIHN3aXRjaCAobSA9IGIuY2hhckNvZGVBdCgwKSArIChiLmNoYXJDb2RlQXQoNykgfCAwKSkge1xuICAgICAgICAgIGNhc2UgMjAzOlxuICAgICAgICAgICAgaWYgKDExMSA+IGIuY2hhckNvZGVBdCg4KSkgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDExNTpcbiAgICAgICAgICAgIGEgPSBhLnJlcGxhY2UoYiwgJy13ZWJraXQtJyArIGIpICsgJzsnICsgYTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAyMDc6XG4gICAgICAgICAgY2FzZSAxMDI6XG4gICAgICAgICAgICBhID0gYS5yZXBsYWNlKGIsICctd2Via2l0LScgKyAoMTAyIDwgbSA/ICdpbmxpbmUtJyA6ICcnKSArICdib3gnKSArICc7JyArIGEucmVwbGFjZShiLCAnLXdlYmtpdC0nICsgYikgKyAnOycgKyBhLnJlcGxhY2UoYiwgJy1tcy0nICsgYiArICdib3gnKSArICc7JyArIGE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYSArICc7JztcblxuICAgICAgY2FzZSA5Mzg6XG4gICAgICAgIGlmICg0NSA9PT0gYS5jaGFyQ29kZUF0KDUpKSBzd2l0Y2ggKGEuY2hhckNvZGVBdCg2KSkge1xuICAgICAgICAgIGNhc2UgMTA1OlxuICAgICAgICAgICAgcmV0dXJuIGIgPSBhLnJlcGxhY2UoJy1pdGVtcycsICcnKSwgJy13ZWJraXQtJyArIGEgKyAnLXdlYmtpdC1ib3gtJyArIGIgKyAnLW1zLWZsZXgtJyArIGIgKyBhO1xuXG4gICAgICAgICAgY2FzZSAxMTU6XG4gICAgICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLWZsZXgtaXRlbS0nICsgYS5yZXBsYWNlKGJhLCAnJykgKyBhO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtZmxleC1saW5lLXBhY2snICsgYS5yZXBsYWNlKCdhbGlnbi1jb250ZW50JywgJycpLnJlcGxhY2UoYmEsICcnKSArIGE7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgOTczOlxuICAgICAgY2FzZSA5ODk6XG4gICAgICAgIGlmICg0NSAhPT0gYS5jaGFyQ29kZUF0KDMpIHx8IDEyMiA9PT0gYS5jaGFyQ29kZUF0KDQpKSBicmVhaztcblxuICAgICAgY2FzZSA5MzE6XG4gICAgICBjYXNlIDk1MzpcbiAgICAgICAgaWYgKCEwID09PSBsYS50ZXN0KGQpKSByZXR1cm4gMTE1ID09PSAoYiA9IGQuc3Vic3RyaW5nKGQuaW5kZXhPZignOicpICsgMSkpLmNoYXJDb2RlQXQoMCkgPyBQKGQucmVwbGFjZSgnc3RyZXRjaCcsICdmaWxsLWF2YWlsYWJsZScpLCBjLCBlLCBoKS5yZXBsYWNlKCc6ZmlsbC1hdmFpbGFibGUnLCAnOnN0cmV0Y2gnKSA6IGEucmVwbGFjZShiLCAnLXdlYmtpdC0nICsgYikgKyBhLnJlcGxhY2UoYiwgJy1tb3otJyArIGIucmVwbGFjZSgnZmlsbC0nLCAnJykpICsgYTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgOTYyOlxuICAgICAgICBpZiAoYSA9ICctd2Via2l0LScgKyBhICsgKDEwMiA9PT0gYS5jaGFyQ29kZUF0KDUpID8gJy1tcy0nICsgYSA6ICcnKSArIGEsIDIxMSA9PT0gZSArIGggJiYgMTA1ID09PSBhLmNoYXJDb2RlQXQoMTMpICYmIDAgPCBhLmluZGV4T2YoJ3RyYW5zZm9ybScsIDEwKSkgcmV0dXJuIGEuc3Vic3RyaW5nKDAsIGEuaW5kZXhPZignOycsIDI3KSArIDEpLnJlcGxhY2UobWEsICckMS13ZWJraXQtJDInKSArIGE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGE7XG4gIH1cblxuICBmdW5jdGlvbiBMKGQsIGMpIHtcbiAgICB2YXIgZSA9IGQuaW5kZXhPZigxID09PSBjID8gJzonIDogJ3snKSxcbiAgICAgICAgaCA9IGQuc3Vic3RyaW5nKDAsIDMgIT09IGMgPyBlIDogMTApO1xuICAgIGUgPSBkLnN1YnN0cmluZyhlICsgMSwgZC5sZW5ndGggLSAxKTtcbiAgICByZXR1cm4gUigyICE9PSBjID8gaCA6IGgucmVwbGFjZShuYSwgJyQxJyksIGUsIGMpO1xuICB9XG5cbiAgZnVuY3Rpb24gZWEoZCwgYykge1xuICAgIHZhciBlID0gUChjLCBjLmNoYXJDb2RlQXQoMCksIGMuY2hhckNvZGVBdCgxKSwgYy5jaGFyQ29kZUF0KDIpKTtcbiAgICByZXR1cm4gZSAhPT0gYyArICc7JyA/IGUucmVwbGFjZShvYSwgJyBvciAoJDEpJykuc3Vic3RyaW5nKDQpIDogJygnICsgYyArICcpJztcbiAgfVxuXG4gIGZ1bmN0aW9uIEgoZCwgYywgZSwgaCwgYSwgbSwgYiwgdiwgbiwgcSkge1xuICAgIGZvciAodmFyIGcgPSAwLCB4ID0gYywgdzsgZyA8IEE7ICsrZykge1xuICAgICAgc3dpdGNoICh3ID0gU1tnXS5jYWxsKEIsIGQsIHgsIGUsIGgsIGEsIG0sIGIsIHYsIG4sIHEpKSB7XG4gICAgICAgIGNhc2Ugdm9pZCAwOlxuICAgICAgICBjYXNlICExOlxuICAgICAgICBjYXNlICEwOlxuICAgICAgICBjYXNlIG51bGw6XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB4ID0gdztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoeCAhPT0gYykgcmV0dXJuIHg7XG4gIH1cblxuICBmdW5jdGlvbiBUKGQpIHtcbiAgICBzd2l0Y2ggKGQpIHtcbiAgICAgIGNhc2Ugdm9pZCAwOlxuICAgICAgY2FzZSBudWxsOlxuICAgICAgICBBID0gUy5sZW5ndGggPSAwO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBkKSBTW0ErK10gPSBkO2Vsc2UgaWYgKCdvYmplY3QnID09PSB0eXBlb2YgZCkgZm9yICh2YXIgYyA9IDAsIGUgPSBkLmxlbmd0aDsgYyA8IGU7ICsrYykge1xuICAgICAgICAgIFQoZFtjXSk7XG4gICAgICAgIH0gZWxzZSBZID0gISFkIHwgMDtcbiAgICB9XG5cbiAgICByZXR1cm4gVDtcbiAgfVxuXG4gIGZ1bmN0aW9uIFUoZCkge1xuICAgIGQgPSBkLnByZWZpeDtcbiAgICB2b2lkIDAgIT09IGQgJiYgKFIgPSBudWxsLCBkID8gJ2Z1bmN0aW9uJyAhPT0gdHlwZW9mIGQgPyB3ID0gMSA6ICh3ID0gMiwgUiA9IGQpIDogdyA9IDApO1xuICAgIHJldHVybiBVO1xuICB9XG5cbiAgZnVuY3Rpb24gQihkLCBjKSB7XG4gICAgdmFyIGUgPSBkO1xuICAgIDMzID4gZS5jaGFyQ29kZUF0KDApICYmIChlID0gZS50cmltKCkpO1xuICAgIFYgPSBlO1xuICAgIGUgPSBbVl07XG5cbiAgICBpZiAoMCA8IEEpIHtcbiAgICAgIHZhciBoID0gSCgtMSwgYywgZSwgZSwgRCwgeiwgMCwgMCwgMCwgMCk7XG4gICAgICB2b2lkIDAgIT09IGggJiYgJ3N0cmluZycgPT09IHR5cGVvZiBoICYmIChjID0gaCk7XG4gICAgfVxuXG4gICAgdmFyIGEgPSBNKE8sIGUsIGMsIDAsIDApO1xuICAgIDAgPCBBICYmIChoID0gSCgtMiwgYSwgZSwgZSwgRCwgeiwgYS5sZW5ndGgsIDAsIDAsIDApLCB2b2lkIDAgIT09IGggJiYgKGEgPSBoKSk7XG4gICAgViA9ICcnO1xuICAgIEUgPSAwO1xuICAgIHogPSBEID0gMTtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG4gIHZhciBjYSA9IC9eXFwwKy9nLFxuICAgICAgTiA9IC9bXFwwXFxyXFxmXS9nLFxuICAgICAgYWEgPSAvOiAqL2csXG4gICAgICBrYSA9IC96b298Z3JhLyxcbiAgICAgIG1hID0gLyhbLDogXSkodHJhbnNmb3JtKS9nLFxuICAgICAgaWEgPSAvLFxccis/L2csXG4gICAgICBGID0gLyhbXFx0XFxyXFxuIF0pKlxcZj8mL2csXG4gICAgICBmYSA9IC9AKGtcXHcrKVxccyooXFxTKilcXHMqLyxcbiAgICAgIFEgPSAvOjoocGxhY2UpL2csXG4gICAgICBoYSA9IC86KHJlYWQtb25seSkvZyxcbiAgICAgIEcgPSAvW3N2aF1cXHcrLVt0YmxyXXsyfS8sXG4gICAgICBkYSA9IC9cXChcXHMqKC4qKVxccypcXCkvZyxcbiAgICAgIG9hID0gLyhbXFxzXFxTXSo/KTsvZyxcbiAgICAgIGJhID0gLy1zZWxmfGZsZXgtL2csXG4gICAgICBuYSA9IC9bXl0qPyg6W3JwXVtlbF1hW1xcdy1dKylbXl0qLyxcbiAgICAgIGxhID0gL3N0cmV0Y2h8OlxccypcXHcrXFwtKD86Y29udGV8YXZhaWwpLyxcbiAgICAgIGphID0gLyhbXi1dKShpbWFnZS1zZXRcXCgpLyxcbiAgICAgIHogPSAxLFxuICAgICAgRCA9IDEsXG4gICAgICBFID0gMCxcbiAgICAgIHcgPSAxLFxuICAgICAgTyA9IFtdLFxuICAgICAgUyA9IFtdLFxuICAgICAgQSA9IDAsXG4gICAgICBSID0gbnVsbCxcbiAgICAgIFkgPSAwLFxuICAgICAgViA9ICcnO1xuICBCLnVzZSA9IFQ7XG4gIEIuc2V0ID0gVTtcbiAgdm9pZCAwICE9PSBXICYmIFUoVyk7XG4gIHJldHVybiBCO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHlsaXNfbWluO1xuIiwidmFyIHVuaXRsZXNzS2V5cyA9IHtcbiAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6IDEsXG4gIGJvcmRlckltYWdlT3V0c2V0OiAxLFxuICBib3JkZXJJbWFnZVNsaWNlOiAxLFxuICBib3JkZXJJbWFnZVdpZHRoOiAxLFxuICBib3hGbGV4OiAxLFxuICBib3hGbGV4R3JvdXA6IDEsXG4gIGJveE9yZGluYWxHcm91cDogMSxcbiAgY29sdW1uQ291bnQ6IDEsXG4gIGNvbHVtbnM6IDEsXG4gIGZsZXg6IDEsXG4gIGZsZXhHcm93OiAxLFxuICBmbGV4UG9zaXRpdmU6IDEsXG4gIGZsZXhTaHJpbms6IDEsXG4gIGZsZXhOZWdhdGl2ZTogMSxcbiAgZmxleE9yZGVyOiAxLFxuICBncmlkUm93OiAxLFxuICBncmlkUm93RW5kOiAxLFxuICBncmlkUm93U3BhbjogMSxcbiAgZ3JpZFJvd1N0YXJ0OiAxLFxuICBncmlkQ29sdW1uOiAxLFxuICBncmlkQ29sdW1uRW5kOiAxLFxuICBncmlkQ29sdW1uU3BhbjogMSxcbiAgZ3JpZENvbHVtblN0YXJ0OiAxLFxuICBtc0dyaWRSb3c6IDEsXG4gIG1zR3JpZFJvd1NwYW46IDEsXG4gIG1zR3JpZENvbHVtbjogMSxcbiAgbXNHcmlkQ29sdW1uU3BhbjogMSxcbiAgZm9udFdlaWdodDogMSxcbiAgbGluZUhlaWdodDogMSxcbiAgb3BhY2l0eTogMSxcbiAgb3JkZXI6IDEsXG4gIG9ycGhhbnM6IDEsXG4gIHRhYlNpemU6IDEsXG4gIHdpZG93czogMSxcbiAgekluZGV4OiAxLFxuICB6b29tOiAxLFxuICBXZWJraXRMaW5lQ2xhbXA6IDEsXG4gIC8vIFNWRy1yZWxhdGVkIHByb3BlcnRpZXNcbiAgZmlsbE9wYWNpdHk6IDEsXG4gIGZsb29kT3BhY2l0eTogMSxcbiAgc3RvcE9wYWNpdHk6IDEsXG4gIHN0cm9rZURhc2hhcnJheTogMSxcbiAgc3Ryb2tlRGFzaG9mZnNldDogMSxcbiAgc3Ryb2tlTWl0ZXJsaW1pdDogMSxcbiAgc3Ryb2tlT3BhY2l0eTogMSxcbiAgc3Ryb2tlV2lkdGg6IDFcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVuaXRsZXNzS2V5cztcbiIsInZhciBpc0Jyb3dzZXIgPSBcIm9iamVjdFwiICE9PSAndW5kZWZpbmVkJztcbmZ1bmN0aW9uIGdldFJlZ2lzdGVyZWRTdHlsZXMocmVnaXN0ZXJlZCwgcmVnaXN0ZXJlZFN0eWxlcywgY2xhc3NOYW1lcykge1xuICB2YXIgcmF3Q2xhc3NOYW1lID0gJyc7XG4gIGNsYXNzTmFtZXMuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICBpZiAocmVnaXN0ZXJlZFtjbGFzc05hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlZ2lzdGVyZWRTdHlsZXMucHVzaChyZWdpc3RlcmVkW2NsYXNzTmFtZV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByYXdDbGFzc05hbWUgKz0gY2xhc3NOYW1lICsgXCIgXCI7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJhd0NsYXNzTmFtZTtcbn1cbnZhciBpbnNlcnRTdHlsZXMgPSBmdW5jdGlvbiBpbnNlcnRTdHlsZXMoY2FjaGUsIHNlcmlhbGl6ZWQsIGlzU3RyaW5nVGFnKSB7XG4gIHZhciBjbGFzc05hbWUgPSBjYWNoZS5rZXkgKyBcIi1cIiArIHNlcmlhbGl6ZWQubmFtZTtcblxuICBpZiAoIC8vIHdlIG9ubHkgbmVlZCB0byBhZGQgdGhlIHN0eWxlcyB0byB0aGUgcmVnaXN0ZXJlZCBjYWNoZSBpZiB0aGVcbiAgLy8gY2xhc3MgbmFtZSBjb3VsZCBiZSB1c2VkIGZ1cnRoZXIgZG93blxuICAvLyB0aGUgdHJlZSBidXQgaWYgaXQncyBhIHN0cmluZyB0YWcsIHdlIGtub3cgaXQgd29uJ3RcbiAgLy8gc28gd2UgZG9uJ3QgaGF2ZSB0byBhZGQgaXQgdG8gcmVnaXN0ZXJlZCBjYWNoZS5cbiAgLy8gdGhpcyBpbXByb3ZlcyBtZW1vcnkgdXNhZ2Ugc2luY2Ugd2UgY2FuIGF2b2lkIHN0b3JpbmcgdGhlIHdob2xlIHN0eWxlIHN0cmluZ1xuICAoaXNTdHJpbmdUYWcgPT09IGZhbHNlIHx8IC8vIHdlIG5lZWQgdG8gYWx3YXlzIHN0b3JlIGl0IGlmIHdlJ3JlIGluIGNvbXBhdCBtb2RlIGFuZFxuICAvLyBpbiBub2RlIHNpbmNlIGVtb3Rpb24tc2VydmVyIHJlbGllcyBvbiB3aGV0aGVyIGEgc3R5bGUgaXMgaW5cbiAgLy8gdGhlIHJlZ2lzdGVyZWQgY2FjaGUgdG8ga25vdyB3aGV0aGVyIGEgc3R5bGUgaXMgZ2xvYmFsIG9yIG5vdFxuICAvLyBhbHNvLCBub3RlIHRoYXQgdGhpcyBjaGVjayB3aWxsIGJlIGRlYWQgY29kZSBlbGltaW5hdGVkIGluIHRoZSBicm93c2VyXG4gIGlzQnJvd3NlciA9PT0gZmFsc2UgJiYgY2FjaGUuY29tcGF0ICE9PSB1bmRlZmluZWQpICYmIGNhY2hlLnJlZ2lzdGVyZWRbY2xhc3NOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2FjaGUucmVnaXN0ZXJlZFtjbGFzc05hbWVdID0gc2VyaWFsaXplZC5zdHlsZXM7XG4gIH1cblxuICBpZiAoY2FjaGUuaW5zZXJ0ZWRbc2VyaWFsaXplZC5uYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGN1cnJlbnQgPSBzZXJpYWxpemVkO1xuXG4gICAgZG8ge1xuICAgICAgdmFyIG1heWJlU3R5bGVzID0gY2FjaGUuaW5zZXJ0KFwiLlwiICsgY2xhc3NOYW1lLCBjdXJyZW50LCBjYWNoZS5zaGVldCwgdHJ1ZSk7XG5cbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgfSB3aGlsZSAoY3VycmVudCAhPT0gdW5kZWZpbmVkKTtcbiAgfVxufTtcblxuZXhwb3J0IHsgZ2V0UmVnaXN0ZXJlZFN0eWxlcywgaW5zZXJ0U3R5bGVzIH07XG4iLCJ2YXIgd2Vha01lbW9pemUgPSBmdW5jdGlvbiB3ZWFrTWVtb2l6ZShmdW5jKSB7XG4gIC8vICRGbG93Rml4TWUgZmxvdyBkb2Vzbid0IGluY2x1ZGUgYWxsIG5vbi1wcmltaXRpdmUgdHlwZXMgYXMgYWxsb3dlZCBmb3Igd2Vha21hcHNcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhcmcpIHtcbiAgICBpZiAoY2FjaGUuaGFzKGFyZykpIHtcbiAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgIHJldHVybiBjYWNoZS5nZXQoYXJnKTtcbiAgICB9XG5cbiAgICB2YXIgcmV0ID0gZnVuYyhhcmcpO1xuICAgIGNhY2hlLnNldChhcmcsIHJldCk7XG4gICAgcmV0dXJuIHJldDtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdlYWtNZW1vaXplO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTtcbiAgICBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTtcbiAgICB9KTtcbiAgICBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7XG4gIH1cblxuICByZXR1cm4ga2V5cztcbn1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZDIodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG5cbiAgICBpZiAoaSAlIDIpIHtcbiAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcblxuICB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG5cbiAgdmFyIGtleSwgaTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxudmFyIGlzRnVuY3Rpb24gPSBmdW5jdGlvbiBpc0Z1bmN0aW9uKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cbnZhciBNRFhDb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQoe30pO1xudmFyIHdpdGhNRFhDb21wb25lbnRzID0gZnVuY3Rpb24gd2l0aE1EWENvbXBvbmVudHMoQ29tcG9uZW50KSB7XG4gIHJldHVybiBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcHMuY29tcG9uZW50cyk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICBjb21wb25lbnRzOiBhbGxDb21wb25lbnRzXG4gICAgfSkpO1xuICB9O1xufTtcbnZhciB1c2VNRFhDb21wb25lbnRzID0gZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIHZhciBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dCk7XG4gIHZhciBhbGxDb21wb25lbnRzID0gY29udGV4dENvbXBvbmVudHM7XG5cbiAgaWYgKGNvbXBvbmVudHMpIHtcbiAgICBhbGxDb21wb25lbnRzID0gaXNGdW5jdGlvbihjb21wb25lbnRzKSA/IGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpIDogX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIGNvbnRleHRDb21wb25lbnRzKSwgY29tcG9uZW50cyk7XG4gIH1cblxuICByZXR1cm4gYWxsQ29tcG9uZW50cztcbn07XG52YXIgTURYUHJvdmlkZXIgPSBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wcykge1xuICB2YXIgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcHMuY29tcG9uZW50cyk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChNRFhDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IGFsbENvbXBvbmVudHNcbiAgfSwgcHJvcHMuY2hpbGRyZW4pO1xufTtcblxudmFyIFRZUEVfUFJPUF9OQU1FID0gJ21keFR5cGUnO1xudmFyIERFRkFVTFRTID0ge1xuICBpbmxpbmVDb2RlOiAnY29kZScsXG4gIHdyYXBwZXI6IGZ1bmN0aW9uIHdyYXBwZXIoX3JlZikge1xuICAgIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW47XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCB7fSwgY2hpbGRyZW4pO1xuICB9XG59O1xudmFyIE1EWENyZWF0ZUVsZW1lbnQgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICB2YXIgcHJvcENvbXBvbmVudHMgPSBwcm9wcy5jb21wb25lbnRzLFxuICAgICAgbWR4VHlwZSA9IHByb3BzLm1keFR5cGUsXG4gICAgICBvcmlnaW5hbFR5cGUgPSBwcm9wcy5vcmlnaW5hbFR5cGUsXG4gICAgICBwYXJlbnROYW1lID0gcHJvcHMucGFyZW50TmFtZSxcbiAgICAgIGV0YyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY29tcG9uZW50c1wiLCBcIm1keFR5cGVcIiwgXCJvcmlnaW5hbFR5cGVcIiwgXCJwYXJlbnROYW1lXCJdKTtcblxuICB2YXIgY29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcENvbXBvbmVudHMpO1xuICB2YXIgdHlwZSA9IG1keFR5cGU7XG4gIHZhciBDb21wb25lbnQgPSBjb21wb25lbnRzW1wiXCIuY29uY2F0KHBhcmVudE5hbWUsIFwiLlwiKS5jb25jYXQodHlwZSldIHx8IGNvbXBvbmVudHNbdHlwZV0gfHwgREVGQVVMVFNbdHlwZV0gfHwgb3JpZ2luYWxUeXBlO1xuXG4gIGlmIChwcm9wQ29tcG9uZW50cykge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHtcbiAgICAgIHJlZjogcmVmXG4gICAgfSwgZXRjKSwge30sIHtcbiAgICAgIGNvbXBvbmVudHM6IHByb3BDb21wb25lbnRzXG4gICAgfSkpO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX29iamVjdFNwcmVhZDIoe1xuICAgIHJlZjogcmVmXG4gIH0sIGV0YykpO1xufSk7XG5NRFhDcmVhdGVFbGVtZW50LmRpc3BsYXlOYW1lID0gJ01EWENyZWF0ZUVsZW1lbnQnO1xuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCAodHlwZSwgcHJvcHMpIHtcbiAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gIHZhciBtZHhUeXBlID0gcHJvcHMgJiYgcHJvcHMubWR4VHlwZTtcblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IG1keFR5cGUpIHtcbiAgICB2YXIgYXJnc0xlbmd0aCA9IGFyZ3MubGVuZ3RoO1xuICAgIHZhciBjcmVhdGVFbGVtZW50QXJnQXJyYXkgPSBuZXcgQXJyYXkoYXJnc0xlbmd0aCk7XG4gICAgY3JlYXRlRWxlbWVudEFyZ0FycmF5WzBdID0gTURYQ3JlYXRlRWxlbWVudDtcbiAgICB2YXIgbmV3UHJvcHMgPSB7fTtcblxuICAgIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwocHJvcHMsIGtleSkpIHtcbiAgICAgICAgbmV3UHJvcHNba2V5XSA9IHByb3BzW2tleV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgbmV3UHJvcHMub3JpZ2luYWxUeXBlID0gdHlwZTtcbiAgICBuZXdQcm9wc1tUWVBFX1BST1BfTkFNRV0gPSB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgPyB0eXBlIDogbWR4VHlwZTtcbiAgICBjcmVhdGVFbGVtZW50QXJnQXJyYXlbMV0gPSBuZXdQcm9wcztcblxuICAgIGZvciAodmFyIGkgPSAyOyBpIDwgYXJnc0xlbmd0aDsgaSsrKSB7XG4gICAgICBjcmVhdGVFbGVtZW50QXJnQXJyYXlbaV0gPSBhcmdzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50LmFwcGx5KG51bGwsIGNyZWF0ZUVsZW1lbnRBcmdBcnJheSk7XG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudC5hcHBseShudWxsLCBhcmdzKTtcbn1cblxuZXhwb3J0IHsgTURYQ29udGV4dCwgTURYUHJvdmlkZXIsIGNyZWF0ZUVsZW1lbnQgYXMgbWR4LCB1c2VNRFhDb21wb25lbnRzLCB3aXRoTURYQ29tcG9uZW50cyB9O1xuIiwiaW1wb3J0IHsgc3lzdGVtIH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vY29yZSc7XG52YXIgY29uZmlnID0ge1xuICBiYWNrZ3JvdW5kOiB0cnVlLFxuICBiYWNrZ3JvdW5kSW1hZ2U6IHRydWUsXG4gIGJhY2tncm91bmRTaXplOiB0cnVlLFxuICBiYWNrZ3JvdW5kUG9zaXRpb246IHRydWUsXG4gIGJhY2tncm91bmRSZXBlYXQ6IHRydWVcbn07XG5jb25maWcuYmdJbWFnZSA9IGNvbmZpZy5iYWNrZ3JvdW5kSW1hZ2U7XG5jb25maWcuYmdTaXplID0gY29uZmlnLmJhY2tncm91bmRTaXplO1xuY29uZmlnLmJnUG9zaXRpb24gPSBjb25maWcuYmFja2dyb3VuZFBvc2l0aW9uO1xuY29uZmlnLmJnUmVwZWF0ID0gY29uZmlnLmJhY2tncm91bmRSZXBlYXQ7XG5leHBvcnQgdmFyIGJhY2tncm91bmQgPSBzeXN0ZW0oY29uZmlnKTtcbmV4cG9ydCBkZWZhdWx0IGJhY2tncm91bmQ7XG4iLCJpbXBvcnQgeyBzeXN0ZW0gfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9jb3JlJztcbnZhciBjb25maWcgPSB7XG4gIGJvcmRlcjoge1xuICAgIHByb3BlcnR5OiAnYm9yZGVyJyxcbiAgICBzY2FsZTogJ2JvcmRlcnMnXG4gIH0sXG4gIGJvcmRlcldpZHRoOiB7XG4gICAgcHJvcGVydHk6ICdib3JkZXJXaWR0aCcsXG4gICAgc2NhbGU6ICdib3JkZXJXaWR0aHMnXG4gIH0sXG4gIGJvcmRlclN0eWxlOiB7XG4gICAgcHJvcGVydHk6ICdib3JkZXJTdHlsZScsXG4gICAgc2NhbGU6ICdib3JkZXJTdHlsZXMnXG4gIH0sXG4gIGJvcmRlckNvbG9yOiB7XG4gICAgcHJvcGVydHk6ICdib3JkZXJDb2xvcicsXG4gICAgc2NhbGU6ICdjb2xvcnMnXG4gIH0sXG4gIGJvcmRlclJhZGl1czoge1xuICAgIHByb3BlcnR5OiAnYm9yZGVyUmFkaXVzJyxcbiAgICBzY2FsZTogJ3JhZGlpJ1xuICB9LFxuICBib3JkZXJUb3A6IHtcbiAgICBwcm9wZXJ0eTogJ2JvcmRlclRvcCcsXG4gICAgc2NhbGU6ICdib3JkZXJzJ1xuICB9LFxuICBib3JkZXJUb3BMZWZ0UmFkaXVzOiB7XG4gICAgcHJvcGVydHk6ICdib3JkZXJUb3BMZWZ0UmFkaXVzJyxcbiAgICBzY2FsZTogJ3JhZGlpJ1xuICB9LFxuICBib3JkZXJUb3BSaWdodFJhZGl1czoge1xuICAgIHByb3BlcnR5OiAnYm9yZGVyVG9wUmlnaHRSYWRpdXMnLFxuICAgIHNjYWxlOiAncmFkaWknXG4gIH0sXG4gIGJvcmRlclJpZ2h0OiB7XG4gICAgcHJvcGVydHk6ICdib3JkZXJSaWdodCcsXG4gICAgc2NhbGU6ICdib3JkZXJzJ1xuICB9LFxuICBib3JkZXJCb3R0b206IHtcbiAgICBwcm9wZXJ0eTogJ2JvcmRlckJvdHRvbScsXG4gICAgc2NhbGU6ICdib3JkZXJzJ1xuICB9LFxuICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzOiB7XG4gICAgcHJvcGVydHk6ICdib3JkZXJCb3R0b21MZWZ0UmFkaXVzJyxcbiAgICBzY2FsZTogJ3JhZGlpJ1xuICB9LFxuICBib3JkZXJCb3R0b21SaWdodFJhZGl1czoge1xuICAgIHByb3BlcnR5OiAnYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMnLFxuICAgIHNjYWxlOiAncmFkaWknXG4gIH0sXG4gIGJvcmRlckxlZnQ6IHtcbiAgICBwcm9wZXJ0eTogJ2JvcmRlckxlZnQnLFxuICAgIHNjYWxlOiAnYm9yZGVycydcbiAgfSxcbiAgYm9yZGVyWDoge1xuICAgIHByb3BlcnRpZXM6IFsnYm9yZGVyTGVmdCcsICdib3JkZXJSaWdodCddLFxuICAgIHNjYWxlOiAnYm9yZGVycydcbiAgfSxcbiAgYm9yZGVyWToge1xuICAgIHByb3BlcnRpZXM6IFsnYm9yZGVyVG9wJywgJ2JvcmRlckJvdHRvbSddLFxuICAgIHNjYWxlOiAnYm9yZGVycydcbiAgfVxufTtcbmNvbmZpZy5ib3JkZXJUb3BXaWR0aCA9IHtcbiAgcHJvcGVydHk6ICdib3JkZXJUb3BXaWR0aCcsXG4gIHNjYWxlOiAnYm9yZGVyV2lkdGhzJ1xufTtcbmNvbmZpZy5ib3JkZXJUb3BDb2xvciA9IHtcbiAgcHJvcGVydHk6ICdib3JkZXJUb3BDb2xvcicsXG4gIHNjYWxlOiAnY29sb3JzJ1xufTtcbmNvbmZpZy5ib3JkZXJUb3BTdHlsZSA9IHtcbiAgcHJvcGVydHk6ICdib3JkZXJUb3BTdHlsZScsXG4gIHNjYWxlOiAnYm9yZGVyU3R5bGVzJ1xufTtcbmNvbmZpZy5ib3JkZXJUb3BMZWZ0UmFkaXVzID0ge1xuICBwcm9wZXJ0eTogJ2JvcmRlclRvcExlZnRSYWRpdXMnLFxuICBzY2FsZTogJ3JhZGlpJ1xufTtcbmNvbmZpZy5ib3JkZXJUb3BSaWdodFJhZGl1cyA9IHtcbiAgcHJvcGVydHk6ICdib3JkZXJUb3BSaWdodFJhZGl1cycsXG4gIHNjYWxlOiAncmFkaWknXG59O1xuY29uZmlnLmJvcmRlckJvdHRvbVdpZHRoID0ge1xuICBwcm9wZXJ0eTogJ2JvcmRlckJvdHRvbVdpZHRoJyxcbiAgc2NhbGU6ICdib3JkZXJXaWR0aHMnXG59O1xuY29uZmlnLmJvcmRlckJvdHRvbUNvbG9yID0ge1xuICBwcm9wZXJ0eTogJ2JvcmRlckJvdHRvbUNvbG9yJyxcbiAgc2NhbGU6ICdjb2xvcnMnXG59O1xuY29uZmlnLmJvcmRlckJvdHRvbVN0eWxlID0ge1xuICBwcm9wZXJ0eTogJ2JvcmRlckJvdHRvbVN0eWxlJyxcbiAgc2NhbGU6ICdib3JkZXJTdHlsZXMnXG59O1xuY29uZmlnLmJvcmRlckJvdHRvbUxlZnRSYWRpdXMgPSB7XG4gIHByb3BlcnR5OiAnYm9yZGVyQm90dG9tTGVmdFJhZGl1cycsXG4gIHNjYWxlOiAncmFkaWknXG59O1xuY29uZmlnLmJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzID0ge1xuICBwcm9wZXJ0eTogJ2JvcmRlckJvdHRvbVJpZ2h0UmFkaXVzJyxcbiAgc2NhbGU6ICdyYWRpaSdcbn07XG5jb25maWcuYm9yZGVyTGVmdFdpZHRoID0ge1xuICBwcm9wZXJ0eTogJ2JvcmRlckxlZnRXaWR0aCcsXG4gIHNjYWxlOiAnYm9yZGVyV2lkdGhzJ1xufTtcbmNvbmZpZy5ib3JkZXJMZWZ0Q29sb3IgPSB7XG4gIHByb3BlcnR5OiAnYm9yZGVyTGVmdENvbG9yJyxcbiAgc2NhbGU6ICdjb2xvcnMnXG59O1xuY29uZmlnLmJvcmRlckxlZnRTdHlsZSA9IHtcbiAgcHJvcGVydHk6ICdib3JkZXJMZWZ0U3R5bGUnLFxuICBzY2FsZTogJ2JvcmRlclN0eWxlcydcbn07XG5jb25maWcuYm9yZGVyUmlnaHRXaWR0aCA9IHtcbiAgcHJvcGVydHk6ICdib3JkZXJSaWdodFdpZHRoJyxcbiAgc2NhbGU6ICdib3JkZXJXaWR0aHMnXG59O1xuY29uZmlnLmJvcmRlclJpZ2h0Q29sb3IgPSB7XG4gIHByb3BlcnR5OiAnYm9yZGVyUmlnaHRDb2xvcicsXG4gIHNjYWxlOiAnY29sb3JzJ1xufTtcbmNvbmZpZy5ib3JkZXJSaWdodFN0eWxlID0ge1xuICBwcm9wZXJ0eTogJ2JvcmRlclJpZ2h0U3R5bGUnLFxuICBzY2FsZTogJ2JvcmRlclN0eWxlcydcbn07XG5leHBvcnQgdmFyIGJvcmRlciA9IHN5c3RlbShjb25maWcpO1xuZXhwb3J0IGRlZmF1bHQgYm9yZGVyO1xuIiwiaW1wb3J0IHsgc3lzdGVtIH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vY29yZSc7XG52YXIgY29uZmlnID0ge1xuICBjb2xvcjoge1xuICAgIHByb3BlcnR5OiAnY29sb3InLFxuICAgIHNjYWxlOiAnY29sb3JzJ1xuICB9LFxuICBiYWNrZ3JvdW5kQ29sb3I6IHtcbiAgICBwcm9wZXJ0eTogJ2JhY2tncm91bmRDb2xvcicsXG4gICAgc2NhbGU6ICdjb2xvcnMnXG4gIH0sXG4gIG9wYWNpdHk6IHRydWVcbn07XG5jb25maWcuYmcgPSBjb25maWcuYmFja2dyb3VuZENvbG9yO1xuZXhwb3J0IHZhciBjb2xvciA9IHN5c3RlbShjb25maWcpO1xuZXhwb3J0IGRlZmF1bHQgY29sb3I7XG4iLCJpbXBvcnQgYXNzaWduIGZyb20gJ29iamVjdC1hc3NpZ24nO1xuZXhwb3J0IHZhciBtZXJnZSA9IGZ1bmN0aW9uIG1lcmdlKGEsIGIpIHtcbiAgdmFyIHJlc3VsdCA9IGFzc2lnbih7fSwgYSwgYik7XG5cbiAgZm9yICh2YXIga2V5IGluIGEpIHtcbiAgICB2YXIgX2Fzc2lnbjtcblxuICAgIGlmICghYVtrZXldIHx8IHR5cGVvZiBiW2tleV0gIT09ICdvYmplY3QnKSBjb250aW51ZTtcbiAgICBhc3NpZ24ocmVzdWx0LCAoX2Fzc2lnbiA9IHt9LCBfYXNzaWduW2tleV0gPSBhc3NpZ24oYVtrZXldLCBiW2tleV0pLCBfYXNzaWduKSk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTsgLy8gc29ydCBvYmplY3QtdmFsdWUgcmVzcG9uc2l2ZSBzdHlsZXNcblxudmFyIHNvcnQgPSBmdW5jdGlvbiBzb3J0KG9iaikge1xuICB2YXIgbmV4dCA9IHt9O1xuICBPYmplY3Qua2V5cyhvYmopLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gYS5sb2NhbGVDb21wYXJlKGIsIHVuZGVmaW5lZCwge1xuICAgICAgbnVtZXJpYzogdHJ1ZSxcbiAgICAgIHNlbnNpdGl2aXR5OiAnYmFzZSdcbiAgICB9KTtcbiAgfSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgbmV4dFtrZXldID0gb2JqW2tleV07XG4gIH0pO1xuICByZXR1cm4gbmV4dDtcbn07XG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgYnJlYWtwb2ludHM6IFs0MCwgNTIsIDY0XS5tYXAoZnVuY3Rpb24gKG4pIHtcbiAgICByZXR1cm4gbiArICdlbSc7XG4gIH0pXG59O1xuXG52YXIgY3JlYXRlTWVkaWFRdWVyeSA9IGZ1bmN0aW9uIGNyZWF0ZU1lZGlhUXVlcnkobikge1xuICByZXR1cm4gXCJAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBcIiArIG4gKyBcIilcIjtcbn07XG5cbnZhciBnZXRWYWx1ZSA9IGZ1bmN0aW9uIGdldFZhbHVlKG4sIHNjYWxlKSB7XG4gIHJldHVybiBnZXQoc2NhbGUsIG4sIG4pO1xufTtcblxuZXhwb3J0IHZhciBnZXQgPSBmdW5jdGlvbiBnZXQob2JqLCBrZXksIGRlZiwgcCwgdW5kZWYpIHtcbiAga2V5ID0ga2V5ICYmIGtleS5zcGxpdCA/IGtleS5zcGxpdCgnLicpIDogW2tleV07XG5cbiAgZm9yIChwID0gMDsgcCA8IGtleS5sZW5ndGg7IHArKykge1xuICAgIG9iaiA9IG9iaiA/IG9ialtrZXlbcF1dIDogdW5kZWY7XG4gIH1cblxuICByZXR1cm4gb2JqID09PSB1bmRlZiA/IGRlZiA6IG9iajtcbn07XG5leHBvcnQgdmFyIGNyZWF0ZVBhcnNlciA9IGZ1bmN0aW9uIGNyZWF0ZVBhcnNlcihjb25maWcpIHtcbiAgdmFyIGNhY2hlID0ge307XG5cbiAgdmFyIHBhcnNlID0gZnVuY3Rpb24gcGFyc2UocHJvcHMpIHtcbiAgICB2YXIgc3R5bGVzID0ge307XG4gICAgdmFyIHNob3VsZFNvcnQgPSBmYWxzZTtcbiAgICB2YXIgaXNDYWNoZURpc2FibGVkID0gcHJvcHMudGhlbWUgJiYgcHJvcHMudGhlbWUuZGlzYWJsZVN0eWxlZFN5c3RlbUNhY2hlO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgICBpZiAoIWNvbmZpZ1trZXldKSBjb250aW51ZTtcbiAgICAgIHZhciBzeCA9IGNvbmZpZ1trZXldO1xuICAgICAgdmFyIHJhdyA9IHByb3BzW2tleV07XG4gICAgICB2YXIgc2NhbGUgPSBnZXQocHJvcHMudGhlbWUsIHN4LnNjYWxlLCBzeC5kZWZhdWx0cyk7XG5cbiAgICAgIGlmICh0eXBlb2YgcmF3ID09PSAnb2JqZWN0Jykge1xuICAgICAgICBjYWNoZS5icmVha3BvaW50cyA9ICFpc0NhY2hlRGlzYWJsZWQgJiYgY2FjaGUuYnJlYWtwb2ludHMgfHwgZ2V0KHByb3BzLnRoZW1lLCAnYnJlYWtwb2ludHMnLCBkZWZhdWx0cy5icmVha3BvaW50cyk7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmF3KSkge1xuICAgICAgICAgIGNhY2hlLm1lZGlhID0gIWlzQ2FjaGVEaXNhYmxlZCAmJiBjYWNoZS5tZWRpYSB8fCBbbnVsbF0uY29uY2F0KGNhY2hlLmJyZWFrcG9pbnRzLm1hcChjcmVhdGVNZWRpYVF1ZXJ5KSk7XG4gICAgICAgICAgc3R5bGVzID0gbWVyZ2Uoc3R5bGVzLCBwYXJzZVJlc3BvbnNpdmVTdHlsZShjYWNoZS5tZWRpYSwgc3gsIHNjYWxlLCByYXcsIHByb3BzKSk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmF3ICE9PSBudWxsKSB7XG4gICAgICAgICAgc3R5bGVzID0gbWVyZ2Uoc3R5bGVzLCBwYXJzZVJlc3BvbnNpdmVPYmplY3QoY2FjaGUuYnJlYWtwb2ludHMsIHN4LCBzY2FsZSwgcmF3LCBwcm9wcykpO1xuICAgICAgICAgIHNob3VsZFNvcnQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGFzc2lnbihzdHlsZXMsIHN4KHJhdywgc2NhbGUsIHByb3BzKSk7XG4gICAgfSAvLyBzb3J0IG9iamVjdC1iYXNlZCByZXNwb25zaXZlIHN0eWxlc1xuXG5cbiAgICBpZiAoc2hvdWxkU29ydCkge1xuICAgICAgc3R5bGVzID0gc29ydChzdHlsZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBzdHlsZXM7XG4gIH07XG5cbiAgcGFyc2UuY29uZmlnID0gY29uZmlnO1xuICBwYXJzZS5wcm9wTmFtZXMgPSBPYmplY3Qua2V5cyhjb25maWcpO1xuICBwYXJzZS5jYWNoZSA9IGNhY2hlO1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGNvbmZpZykuZmlsdGVyKGZ1bmN0aW9uIChrKSB7XG4gICAgcmV0dXJuIGsgIT09ICdjb25maWcnO1xuICB9KTtcblxuICBpZiAoa2V5cy5sZW5ndGggPiAxKSB7XG4gICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBfY3JlYXRlUGFyc2VyO1xuXG4gICAgICBwYXJzZVtrZXldID0gY3JlYXRlUGFyc2VyKChfY3JlYXRlUGFyc2VyID0ge30sIF9jcmVhdGVQYXJzZXJba2V5XSA9IGNvbmZpZ1trZXldLCBfY3JlYXRlUGFyc2VyKSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gcGFyc2U7XG59O1xuXG52YXIgcGFyc2VSZXNwb25zaXZlU3R5bGUgPSBmdW5jdGlvbiBwYXJzZVJlc3BvbnNpdmVTdHlsZShtZWRpYVF1ZXJpZXMsIHN4LCBzY2FsZSwgcmF3LCBfcHJvcHMpIHtcbiAgdmFyIHN0eWxlcyA9IHt9O1xuICByYXcuc2xpY2UoMCwgbWVkaWFRdWVyaWVzLmxlbmd0aCkuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGkpIHtcbiAgICB2YXIgbWVkaWEgPSBtZWRpYVF1ZXJpZXNbaV07XG4gICAgdmFyIHN0eWxlID0gc3godmFsdWUsIHNjYWxlLCBfcHJvcHMpO1xuXG4gICAgaWYgKCFtZWRpYSkge1xuICAgICAgYXNzaWduKHN0eWxlcywgc3R5bGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2Fzc2lnbjI7XG5cbiAgICAgIGFzc2lnbihzdHlsZXMsIChfYXNzaWduMiA9IHt9LCBfYXNzaWduMlttZWRpYV0gPSBhc3NpZ24oe30sIHN0eWxlc1ttZWRpYV0sIHN0eWxlKSwgX2Fzc2lnbjIpKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gc3R5bGVzO1xufTtcblxudmFyIHBhcnNlUmVzcG9uc2l2ZU9iamVjdCA9IGZ1bmN0aW9uIHBhcnNlUmVzcG9uc2l2ZU9iamVjdChicmVha3BvaW50cywgc3gsIHNjYWxlLCByYXcsIF9wcm9wcykge1xuICB2YXIgc3R5bGVzID0ge307XG5cbiAgZm9yICh2YXIga2V5IGluIHJhdykge1xuICAgIHZhciBicmVha3BvaW50ID0gYnJlYWtwb2ludHNba2V5XTtcbiAgICB2YXIgdmFsdWUgPSByYXdba2V5XTtcbiAgICB2YXIgc3R5bGUgPSBzeCh2YWx1ZSwgc2NhbGUsIF9wcm9wcyk7XG5cbiAgICBpZiAoIWJyZWFrcG9pbnQpIHtcbiAgICAgIGFzc2lnbihzdHlsZXMsIHN0eWxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9hc3NpZ24zO1xuXG4gICAgICB2YXIgbWVkaWEgPSBjcmVhdGVNZWRpYVF1ZXJ5KGJyZWFrcG9pbnQpO1xuICAgICAgYXNzaWduKHN0eWxlcywgKF9hc3NpZ24zID0ge30sIF9hc3NpZ24zW21lZGlhXSA9IGFzc2lnbih7fSwgc3R5bGVzW21lZGlhXSwgc3R5bGUpLCBfYXNzaWduMykpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHlsZXM7XG59O1xuXG5leHBvcnQgdmFyIGNyZWF0ZVN0eWxlRnVuY3Rpb24gPSBmdW5jdGlvbiBjcmVhdGVTdHlsZUZ1bmN0aW9uKF9yZWYpIHtcbiAgdmFyIHByb3BlcnRpZXMgPSBfcmVmLnByb3BlcnRpZXMsXG4gICAgICBwcm9wZXJ0eSA9IF9yZWYucHJvcGVydHksXG4gICAgICBzY2FsZSA9IF9yZWYuc2NhbGUsXG4gICAgICBfcmVmJHRyYW5zZm9ybSA9IF9yZWYudHJhbnNmb3JtLFxuICAgICAgdHJhbnNmb3JtID0gX3JlZiR0cmFuc2Zvcm0gPT09IHZvaWQgMCA/IGdldFZhbHVlIDogX3JlZiR0cmFuc2Zvcm0sXG4gICAgICBkZWZhdWx0U2NhbGUgPSBfcmVmLmRlZmF1bHRTY2FsZTtcbiAgcHJvcGVydGllcyA9IHByb3BlcnRpZXMgfHwgW3Byb3BlcnR5XTtcblxuICB2YXIgc3ggPSBmdW5jdGlvbiBzeCh2YWx1ZSwgc2NhbGUsIF9wcm9wcykge1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICB2YXIgbiA9IHRyYW5zZm9ybSh2YWx1ZSwgc2NhbGUsIF9wcm9wcyk7XG4gICAgaWYgKG4gPT09IG51bGwpIHJldHVybjtcbiAgICBwcm9wZXJ0aWVzLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgIHJlc3VsdFtwcm9wXSA9IG47XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICBzeC5zY2FsZSA9IHNjYWxlO1xuICBzeC5kZWZhdWx0cyA9IGRlZmF1bHRTY2FsZTtcbiAgcmV0dXJuIHN4O1xufTsgLy8gbmV3IHY1IEFQSVxuXG5leHBvcnQgdmFyIHN5c3RlbSA9IGZ1bmN0aW9uIHN5c3RlbShhcmdzKSB7XG4gIGlmIChhcmdzID09PSB2b2lkIDApIHtcbiAgICBhcmdzID0ge307XG4gIH1cblxuICB2YXIgY29uZmlnID0ge307XG4gIE9iamVjdC5rZXlzKGFyZ3MpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciBjb25mID0gYXJnc1trZXldO1xuXG4gICAgaWYgKGNvbmYgPT09IHRydWUpIHtcbiAgICAgIC8vIHNob3J0Y3V0IGRlZmluaXRpb25cbiAgICAgIGNvbmZpZ1trZXldID0gY3JlYXRlU3R5bGVGdW5jdGlvbih7XG4gICAgICAgIHByb3BlcnR5OiBrZXksXG4gICAgICAgIHNjYWxlOiBrZXlcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uZmlnW2tleV0gPSBjb25mO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbmZpZ1trZXldID0gY3JlYXRlU3R5bGVGdW5jdGlvbihjb25mKTtcbiAgfSk7XG4gIHZhciBwYXJzZXIgPSBjcmVhdGVQYXJzZXIoY29uZmlnKTtcbiAgcmV0dXJuIHBhcnNlcjtcbn07XG5leHBvcnQgdmFyIGNvbXBvc2UgPSBmdW5jdGlvbiBjb21wb3NlKCkge1xuICB2YXIgY29uZmlnID0ge307XG5cbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHBhcnNlcnMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgcGFyc2Vyc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHBhcnNlcnMuZm9yRWFjaChmdW5jdGlvbiAocGFyc2VyKSB7XG4gICAgaWYgKCFwYXJzZXIgfHwgIXBhcnNlci5jb25maWcpIHJldHVybjtcbiAgICBhc3NpZ24oY29uZmlnLCBwYXJzZXIuY29uZmlnKTtcbiAgfSk7XG4gIHZhciBwYXJzZXIgPSBjcmVhdGVQYXJzZXIoY29uZmlnKTtcbiAgcmV0dXJuIHBhcnNlcjtcbn07XG4iLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG4vLyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L2RsdlxuZXhwb3J0IHZhciBnZXQgPSBmdW5jdGlvbiBnZXQob2JqLCBrZXksIGRlZiwgcCwgdW5kZWYpIHtcbiAga2V5ID0ga2V5ICYmIGtleS5zcGxpdCA/IGtleS5zcGxpdCgnLicpIDogW2tleV07XG5cbiAgZm9yIChwID0gMDsgcCA8IGtleS5sZW5ndGg7IHArKykge1xuICAgIG9iaiA9IG9iaiA/IG9ialtrZXlbcF1dIDogdW5kZWY7XG4gIH1cblxuICByZXR1cm4gb2JqID09PSB1bmRlZiA/IGRlZiA6IG9iajtcbn07XG52YXIgZGVmYXVsdEJyZWFrcG9pbnRzID0gWzQwLCA1MiwgNjRdLm1hcChmdW5jdGlvbiAobikge1xuICByZXR1cm4gbiArICdlbSc7XG59KTtcbnZhciBkZWZhdWx0VGhlbWUgPSB7XG4gIHNwYWNlOiBbMCwgNCwgOCwgMTYsIDMyLCA2NCwgMTI4LCAyNTYsIDUxMl0sXG4gIGZvbnRTaXplczogWzEyLCAxNCwgMTYsIDIwLCAyNCwgMzIsIDQ4LCA2NCwgNzJdXG59O1xudmFyIGFsaWFzZXMgPSB7XG4gIGJnOiAnYmFja2dyb3VuZENvbG9yJyxcbiAgbTogJ21hcmdpbicsXG4gIG10OiAnbWFyZ2luVG9wJyxcbiAgbXI6ICdtYXJnaW5SaWdodCcsXG4gIG1iOiAnbWFyZ2luQm90dG9tJyxcbiAgbWw6ICdtYXJnaW5MZWZ0JyxcbiAgbXg6ICdtYXJnaW5YJyxcbiAgbXk6ICdtYXJnaW5ZJyxcbiAgcDogJ3BhZGRpbmcnLFxuICBwdDogJ3BhZGRpbmdUb3AnLFxuICBwcjogJ3BhZGRpbmdSaWdodCcsXG4gIHBiOiAncGFkZGluZ0JvdHRvbScsXG4gIHBsOiAncGFkZGluZ0xlZnQnLFxuICBweDogJ3BhZGRpbmdYJyxcbiAgcHk6ICdwYWRkaW5nWSdcbn07XG52YXIgbXVsdGlwbGVzID0ge1xuICBtYXJnaW5YOiBbJ21hcmdpbkxlZnQnLCAnbWFyZ2luUmlnaHQnXSxcbiAgbWFyZ2luWTogWydtYXJnaW5Ub3AnLCAnbWFyZ2luQm90dG9tJ10sXG4gIHBhZGRpbmdYOiBbJ3BhZGRpbmdMZWZ0JywgJ3BhZGRpbmdSaWdodCddLFxuICBwYWRkaW5nWTogWydwYWRkaW5nVG9wJywgJ3BhZGRpbmdCb3R0b20nXSxcbiAgc2l6ZTogWyd3aWR0aCcsICdoZWlnaHQnXVxufTtcbnZhciBzY2FsZXMgPSB7XG4gIGNvbG9yOiAnY29sb3JzJyxcbiAgYmFja2dyb3VuZENvbG9yOiAnY29sb3JzJyxcbiAgYm9yZGVyQ29sb3I6ICdjb2xvcnMnLFxuICBtYXJnaW46ICdzcGFjZScsXG4gIG1hcmdpblRvcDogJ3NwYWNlJyxcbiAgbWFyZ2luUmlnaHQ6ICdzcGFjZScsXG4gIG1hcmdpbkJvdHRvbTogJ3NwYWNlJyxcbiAgbWFyZ2luTGVmdDogJ3NwYWNlJyxcbiAgbWFyZ2luWDogJ3NwYWNlJyxcbiAgbWFyZ2luWTogJ3NwYWNlJyxcbiAgcGFkZGluZzogJ3NwYWNlJyxcbiAgcGFkZGluZ1RvcDogJ3NwYWNlJyxcbiAgcGFkZGluZ1JpZ2h0OiAnc3BhY2UnLFxuICBwYWRkaW5nQm90dG9tOiAnc3BhY2UnLFxuICBwYWRkaW5nTGVmdDogJ3NwYWNlJyxcbiAgcGFkZGluZ1g6ICdzcGFjZScsXG4gIHBhZGRpbmdZOiAnc3BhY2UnLFxuICB0b3A6ICdzcGFjZScsXG4gIHJpZ2h0OiAnc3BhY2UnLFxuICBib3R0b206ICdzcGFjZScsXG4gIGxlZnQ6ICdzcGFjZScsXG4gIGdyaWRHYXA6ICdzcGFjZScsXG4gIGdyaWRDb2x1bW5HYXA6ICdzcGFjZScsXG4gIGdyaWRSb3dHYXA6ICdzcGFjZScsXG4gIGdhcDogJ3NwYWNlJyxcbiAgY29sdW1uR2FwOiAnc3BhY2UnLFxuICByb3dHYXA6ICdzcGFjZScsXG4gIGZvbnRGYW1pbHk6ICdmb250cycsXG4gIGZvbnRTaXplOiAnZm9udFNpemVzJyxcbiAgZm9udFdlaWdodDogJ2ZvbnRXZWlnaHRzJyxcbiAgbGluZUhlaWdodDogJ2xpbmVIZWlnaHRzJyxcbiAgbGV0dGVyU3BhY2luZzogJ2xldHRlclNwYWNpbmdzJyxcbiAgYm9yZGVyOiAnYm9yZGVycycsXG4gIGJvcmRlclRvcDogJ2JvcmRlcnMnLFxuICBib3JkZXJSaWdodDogJ2JvcmRlcnMnLFxuICBib3JkZXJCb3R0b206ICdib3JkZXJzJyxcbiAgYm9yZGVyTGVmdDogJ2JvcmRlcnMnLFxuICBib3JkZXJXaWR0aDogJ2JvcmRlcldpZHRocycsXG4gIGJvcmRlclN0eWxlOiAnYm9yZGVyU3R5bGVzJyxcbiAgYm9yZGVyUmFkaXVzOiAncmFkaWknLFxuICBib3JkZXJUb3BSaWdodFJhZGl1czogJ3JhZGlpJyxcbiAgYm9yZGVyVG9wTGVmdFJhZGl1czogJ3JhZGlpJyxcbiAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6ICdyYWRpaScsXG4gIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6ICdyYWRpaScsXG4gIGJvcmRlclRvcFdpZHRoOiAnYm9yZGVyV2lkdGhzJyxcbiAgYm9yZGVyVG9wQ29sb3I6ICdjb2xvcnMnLFxuICBib3JkZXJUb3BTdHlsZTogJ2JvcmRlclN0eWxlcycsXG4gIGJvcmRlckJvdHRvbVdpZHRoOiAnYm9yZGVyV2lkdGhzJyxcbiAgYm9yZGVyQm90dG9tQ29sb3I6ICdjb2xvcnMnLFxuICBib3JkZXJCb3R0b21TdHlsZTogJ2JvcmRlclN0eWxlcycsXG4gIGJvcmRlckxlZnRXaWR0aDogJ2JvcmRlcldpZHRocycsXG4gIGJvcmRlckxlZnRDb2xvcjogJ2NvbG9ycycsXG4gIGJvcmRlckxlZnRTdHlsZTogJ2JvcmRlclN0eWxlcycsXG4gIGJvcmRlclJpZ2h0V2lkdGg6ICdib3JkZXJXaWR0aHMnLFxuICBib3JkZXJSaWdodENvbG9yOiAnY29sb3JzJyxcbiAgYm9yZGVyUmlnaHRTdHlsZTogJ2JvcmRlclN0eWxlcycsXG4gIG91dGxpbmVDb2xvcjogJ2NvbG9ycycsXG4gIGJveFNoYWRvdzogJ3NoYWRvd3MnLFxuICB0ZXh0U2hhZG93OiAnc2hhZG93cycsXG4gIHpJbmRleDogJ3pJbmRpY2VzJyxcbiAgd2lkdGg6ICdzaXplcycsXG4gIG1pbldpZHRoOiAnc2l6ZXMnLFxuICBtYXhXaWR0aDogJ3NpemVzJyxcbiAgaGVpZ2h0OiAnc2l6ZXMnLFxuICBtaW5IZWlnaHQ6ICdzaXplcycsXG4gIG1heEhlaWdodDogJ3NpemVzJyxcbiAgZmxleEJhc2lzOiAnc2l6ZXMnLFxuICBzaXplOiAnc2l6ZXMnLFxuICAvLyBzdmdcbiAgZmlsbDogJ2NvbG9ycycsXG4gIHN0cm9rZTogJ2NvbG9ycydcbn07XG5cbnZhciBwb3NpdGl2ZU9yTmVnYXRpdmUgPSBmdW5jdGlvbiBwb3NpdGl2ZU9yTmVnYXRpdmUoc2NhbGUsIHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdudW1iZXInIHx8IHZhbHVlID49IDApIHtcbiAgICByZXR1cm4gZ2V0KHNjYWxlLCB2YWx1ZSwgdmFsdWUpO1xuICB9XG5cbiAgdmFyIGFic29sdXRlID0gTWF0aC5hYnModmFsdWUpO1xuICB2YXIgbiA9IGdldChzY2FsZSwgYWJzb2x1dGUsIGFic29sdXRlKTtcbiAgaWYgKHR5cGVvZiBuID09PSAnc3RyaW5nJykgcmV0dXJuICctJyArIG47XG4gIHJldHVybiBuICogLTE7XG59O1xuXG52YXIgdHJhbnNmb3JtcyA9IFsnbWFyZ2luJywgJ21hcmdpblRvcCcsICdtYXJnaW5SaWdodCcsICdtYXJnaW5Cb3R0b20nLCAnbWFyZ2luTGVmdCcsICdtYXJnaW5YJywgJ21hcmdpblknLCAndG9wJywgJ2JvdHRvbScsICdsZWZ0JywgJ3JpZ2h0J10ucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGN1cnIpIHtcbiAgdmFyIF9leHRlbmRzMjtcblxuICByZXR1cm4gX2V4dGVuZHMoe30sIGFjYywgKF9leHRlbmRzMiA9IHt9LCBfZXh0ZW5kczJbY3Vycl0gPSBwb3NpdGl2ZU9yTmVnYXRpdmUsIF9leHRlbmRzMikpO1xufSwge30pO1xuZXhwb3J0IHZhciByZXNwb25zaXZlID0gZnVuY3Rpb24gcmVzcG9uc2l2ZShzdHlsZXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0aGVtZSkge1xuICAgIHZhciBuZXh0ID0ge307XG4gICAgdmFyIGJyZWFrcG9pbnRzID0gZ2V0KHRoZW1lLCAnYnJlYWtwb2ludHMnLCBkZWZhdWx0QnJlYWtwb2ludHMpO1xuICAgIHZhciBtZWRpYVF1ZXJpZXMgPSBbbnVsbF0uY29uY2F0KGJyZWFrcG9pbnRzLm1hcChmdW5jdGlvbiAobikge1xuICAgICAgcmV0dXJuIFwiQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogXCIgKyBuICsgXCIpXCI7XG4gICAgfSkpO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHN0eWxlcykge1xuICAgICAgdmFyIHZhbHVlID0gdHlwZW9mIHN0eWxlc1trZXldID09PSAnZnVuY3Rpb24nID8gc3R5bGVzW2tleV0odGhlbWUpIDogc3R5bGVzW2tleV07XG4gICAgICBpZiAodmFsdWUgPT0gbnVsbCkgY29udGludWU7XG5cbiAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgbmV4dFtrZXldID0gdmFsdWU7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlLnNsaWNlKDAsIG1lZGlhUXVlcmllcy5sZW5ndGgpLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBtZWRpYSA9IG1lZGlhUXVlcmllc1tpXTtcblxuICAgICAgICBpZiAoIW1lZGlhKSB7XG4gICAgICAgICAgbmV4dFtrZXldID0gdmFsdWVbaV07XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBuZXh0W21lZGlhXSA9IG5leHRbbWVkaWFdIHx8IHt9O1xuICAgICAgICBpZiAodmFsdWVbaV0gPT0gbnVsbCkgY29udGludWU7XG4gICAgICAgIG5leHRbbWVkaWFdW2tleV0gPSB2YWx1ZVtpXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dDtcbiAgfTtcbn07XG5leHBvcnQgdmFyIGNzcyA9IGZ1bmN0aW9uIGNzcyhhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICBpZiAocHJvcHMgPT09IHZvaWQgMCkge1xuICAgICAgcHJvcHMgPSB7fTtcbiAgICB9XG5cbiAgICB2YXIgdGhlbWUgPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdFRoZW1lLCB7fSwgcHJvcHMudGhlbWUgfHwgcHJvcHMpO1xuXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIHZhciBvYmogPSB0eXBlb2YgYXJncyA9PT0gJ2Z1bmN0aW9uJyA/IGFyZ3ModGhlbWUpIDogYXJncztcbiAgICB2YXIgc3R5bGVzID0gcmVzcG9uc2l2ZShvYmopKHRoZW1lKTtcblxuICAgIGZvciAodmFyIGtleSBpbiBzdHlsZXMpIHtcbiAgICAgIHZhciB4ID0gc3R5bGVzW2tleV07XG4gICAgICB2YXIgdmFsID0gdHlwZW9mIHggPT09ICdmdW5jdGlvbicgPyB4KHRoZW1lKSA6IHg7XG5cbiAgICAgIGlmIChrZXkgPT09ICd2YXJpYW50Jykge1xuICAgICAgICB2YXIgdmFyaWFudCA9IGNzcyhnZXQodGhlbWUsIHZhbCkpKHRoZW1lKTtcbiAgICAgICAgcmVzdWx0ID0gX2V4dGVuZHMoe30sIHJlc3VsdCwge30sIHZhcmlhbnQpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZhbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgICByZXN1bHRba2V5XSA9IGNzcyh2YWwpKHRoZW1lKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBwcm9wID0gZ2V0KGFsaWFzZXMsIGtleSwga2V5KTtcbiAgICAgIHZhciBzY2FsZU5hbWUgPSBnZXQoc2NhbGVzLCBwcm9wKTtcbiAgICAgIHZhciBzY2FsZSA9IGdldCh0aGVtZSwgc2NhbGVOYW1lLCBnZXQodGhlbWUsIHByb3AsIHt9KSk7XG4gICAgICB2YXIgdHJhbnNmb3JtID0gZ2V0KHRyYW5zZm9ybXMsIHByb3AsIGdldCk7XG4gICAgICB2YXIgdmFsdWUgPSB0cmFuc2Zvcm0oc2NhbGUsIHZhbCwgdmFsKTtcblxuICAgICAgaWYgKG11bHRpcGxlc1twcm9wXSkge1xuICAgICAgICB2YXIgZGlycyA9IG11bHRpcGxlc1twcm9wXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRpcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICByZXN1bHRbZGlyc1tpXV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0W3Byb3BdID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBjc3M7XG4iLCJpbXBvcnQgeyBzeXN0ZW0gfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9jb3JlJztcbnZhciBjb25maWcgPSB7XG4gIGFsaWduSXRlbXM6IHRydWUsXG4gIGFsaWduQ29udGVudDogdHJ1ZSxcbiAganVzdGlmeUl0ZW1zOiB0cnVlLFxuICBqdXN0aWZ5Q29udGVudDogdHJ1ZSxcbiAgZmxleFdyYXA6IHRydWUsXG4gIGZsZXhEaXJlY3Rpb246IHRydWUsXG4gIC8vIGl0ZW1cbiAgZmxleDogdHJ1ZSxcbiAgZmxleEdyb3c6IHRydWUsXG4gIGZsZXhTaHJpbms6IHRydWUsXG4gIGZsZXhCYXNpczogdHJ1ZSxcbiAganVzdGlmeVNlbGY6IHRydWUsXG4gIGFsaWduU2VsZjogdHJ1ZSxcbiAgb3JkZXI6IHRydWVcbn07XG5leHBvcnQgdmFyIGZsZXhib3ggPSBzeXN0ZW0oY29uZmlnKTtcbmV4cG9ydCBkZWZhdWx0IGZsZXhib3g7XG4iLCJpbXBvcnQgeyBzeXN0ZW0gfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9jb3JlJztcbnZhciBkZWZhdWx0cyA9IHtcbiAgc3BhY2U6IFswLCA0LCA4LCAxNiwgMzIsIDY0LCAxMjgsIDI1NiwgNTEyXVxufTtcbnZhciBjb25maWcgPSB7XG4gIGdyaWRHYXA6IHtcbiAgICBwcm9wZXJ0eTogJ2dyaWRHYXAnLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfSxcbiAgZ3JpZENvbHVtbkdhcDoge1xuICAgIHByb3BlcnR5OiAnZ3JpZENvbHVtbkdhcCcsXG4gICAgc2NhbGU6ICdzcGFjZScsXG4gICAgZGVmYXVsdFNjYWxlOiBkZWZhdWx0cy5zcGFjZVxuICB9LFxuICBncmlkUm93R2FwOiB7XG4gICAgcHJvcGVydHk6ICdncmlkUm93R2FwJyxcbiAgICBzY2FsZTogJ3NwYWNlJyxcbiAgICBkZWZhdWx0U2NhbGU6IGRlZmF1bHRzLnNwYWNlXG4gIH0sXG4gIGdyaWRDb2x1bW46IHRydWUsXG4gIGdyaWRSb3c6IHRydWUsXG4gIGdyaWRBdXRvRmxvdzogdHJ1ZSxcbiAgZ3JpZEF1dG9Db2x1bW5zOiB0cnVlLFxuICBncmlkQXV0b1Jvd3M6IHRydWUsXG4gIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IHRydWUsXG4gIGdyaWRUZW1wbGF0ZVJvd3M6IHRydWUsXG4gIGdyaWRUZW1wbGF0ZUFyZWFzOiB0cnVlLFxuICBncmlkQXJlYTogdHJ1ZVxufTtcbmV4cG9ydCB2YXIgZ3JpZCA9IHN5c3RlbShjb25maWcpO1xuZXhwb3J0IGRlZmF1bHQgZ3JpZDtcbiIsImltcG9ydCB7IHN5c3RlbSwgZ2V0IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vY29yZSc7XG5cbnZhciBpc051bWJlciA9IGZ1bmN0aW9uIGlzTnVtYmVyKG4pIHtcbiAgcmV0dXJuIHR5cGVvZiBuID09PSAnbnVtYmVyJyAmJiAhaXNOYU4obik7XG59O1xuXG52YXIgZ2V0V2lkdGggPSBmdW5jdGlvbiBnZXRXaWR0aChuLCBzY2FsZSkge1xuICByZXR1cm4gZ2V0KHNjYWxlLCBuLCAhaXNOdW1iZXIobikgfHwgbiA+IDEgPyBuIDogbiAqIDEwMCArICclJyk7XG59O1xuXG52YXIgY29uZmlnID0ge1xuICB3aWR0aDoge1xuICAgIHByb3BlcnR5OiAnd2lkdGgnLFxuICAgIHNjYWxlOiAnc2l6ZXMnLFxuICAgIHRyYW5zZm9ybTogZ2V0V2lkdGhcbiAgfSxcbiAgaGVpZ2h0OiB7XG4gICAgcHJvcGVydHk6ICdoZWlnaHQnLFxuICAgIHNjYWxlOiAnc2l6ZXMnXG4gIH0sXG4gIG1pbldpZHRoOiB7XG4gICAgcHJvcGVydHk6ICdtaW5XaWR0aCcsXG4gICAgc2NhbGU6ICdzaXplcydcbiAgfSxcbiAgbWluSGVpZ2h0OiB7XG4gICAgcHJvcGVydHk6ICdtaW5IZWlnaHQnLFxuICAgIHNjYWxlOiAnc2l6ZXMnXG4gIH0sXG4gIG1heFdpZHRoOiB7XG4gICAgcHJvcGVydHk6ICdtYXhXaWR0aCcsXG4gICAgc2NhbGU6ICdzaXplcydcbiAgfSxcbiAgbWF4SGVpZ2h0OiB7XG4gICAgcHJvcGVydHk6ICdtYXhIZWlnaHQnLFxuICAgIHNjYWxlOiAnc2l6ZXMnXG4gIH0sXG4gIHNpemU6IHtcbiAgICBwcm9wZXJ0aWVzOiBbJ3dpZHRoJywgJ2hlaWdodCddLFxuICAgIHNjYWxlOiAnc2l6ZXMnXG4gIH0sXG4gIG92ZXJmbG93OiB0cnVlLFxuICBvdmVyZmxvd1g6IHRydWUsXG4gIG92ZXJmbG93WTogdHJ1ZSxcbiAgZGlzcGxheTogdHJ1ZSxcbiAgdmVydGljYWxBbGlnbjogdHJ1ZVxufTtcbmV4cG9ydCB2YXIgbGF5b3V0ID0gc3lzdGVtKGNvbmZpZyk7XG5leHBvcnQgZGVmYXVsdCBsYXlvdXQ7XG4iLCJpbXBvcnQgeyBzeXN0ZW0gfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9jb3JlJztcbnZhciBkZWZhdWx0cyA9IHtcbiAgc3BhY2U6IFswLCA0LCA4LCAxNiwgMzIsIDY0LCAxMjgsIDI1NiwgNTEyXVxufTtcbnZhciBjb25maWcgPSB7XG4gIHBvc2l0aW9uOiB0cnVlLFxuICB6SW5kZXg6IHtcbiAgICBwcm9wZXJ0eTogJ3pJbmRleCcsXG4gICAgc2NhbGU6ICd6SW5kaWNlcydcbiAgfSxcbiAgdG9wOiB7XG4gICAgcHJvcGVydHk6ICd0b3AnLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfSxcbiAgcmlnaHQ6IHtcbiAgICBwcm9wZXJ0eTogJ3JpZ2h0JyxcbiAgICBzY2FsZTogJ3NwYWNlJyxcbiAgICBkZWZhdWx0U2NhbGU6IGRlZmF1bHRzLnNwYWNlXG4gIH0sXG4gIGJvdHRvbToge1xuICAgIHByb3BlcnR5OiAnYm90dG9tJyxcbiAgICBzY2FsZTogJ3NwYWNlJyxcbiAgICBkZWZhdWx0U2NhbGU6IGRlZmF1bHRzLnNwYWNlXG4gIH0sXG4gIGxlZnQ6IHtcbiAgICBwcm9wZXJ0eTogJ2xlZnQnLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfVxufTtcbmV4cG9ydCB2YXIgcG9zaXRpb24gPSBzeXN0ZW0oY29uZmlnKTtcbmV4cG9ydCBkZWZhdWx0IHBvc2l0aW9uO1xuIiwiaW1wb3J0IHsgc3lzdGVtIH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vY29yZSc7XG5leHBvcnQgdmFyIHNoYWRvdyA9IHN5c3RlbSh7XG4gIGJveFNoYWRvdzoge1xuICAgIHByb3BlcnR5OiAnYm94U2hhZG93JyxcbiAgICBzY2FsZTogJ3NoYWRvd3MnXG4gIH0sXG4gIHRleHRTaGFkb3c6IHtcbiAgICBwcm9wZXJ0eTogJ3RleHRTaGFkb3cnLFxuICAgIHNjYWxlOiAnc2hhZG93cydcbiAgfVxufSk7XG5leHBvcnQgZGVmYXVsdCBzaGFkb3c7XG4iLCJpbXBvcnQgbWVtb2l6ZSBmcm9tICdAZW1vdGlvbi9tZW1vaXplJztcbmltcG9ydCBpc1Byb3BWYWxpZCBmcm9tICdAZW1vdGlvbi9pcy1wcm9wLXZhbGlkJztcbmltcG9ydCB7IGNvbXBvc2UsIHNwYWNlLCB0eXBvZ3JhcGh5LCBjb2xvciwgbGF5b3V0LCBmbGV4Ym94LCBib3JkZXIsIGJhY2tncm91bmQsIHBvc2l0aW9uLCBncmlkLCBzaGFkb3csIGJ1dHRvblN0eWxlLCB0ZXh0U3R5bGUsIGNvbG9yU3R5bGUgfSBmcm9tICdzdHlsZWQtc3lzdGVtJztcbnZhciBhbGwgPSBjb21wb3NlKHNwYWNlLCB0eXBvZ3JhcGh5LCBjb2xvciwgbGF5b3V0LCBmbGV4Ym94LCBib3JkZXIsIGJhY2tncm91bmQsIHBvc2l0aW9uLCBncmlkLCBzaGFkb3csIGJ1dHRvblN0eWxlLCB0ZXh0U3R5bGUsIGNvbG9yU3R5bGUpO1xuZXhwb3J0IHZhciBwcm9wcyA9IGFsbC5wcm9wTmFtZXM7XG5leHBvcnQgdmFyIGNyZWF0ZVNob3VsZEZvcndhcmRQcm9wID0gZnVuY3Rpb24gY3JlYXRlU2hvdWxkRm9yd2FyZFByb3AocHJvcHMpIHtcbiAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChcIl4oXCIgKyBwcm9wcy5qb2luKCd8JykgKyBcIikkXCIpO1xuICByZXR1cm4gbWVtb2l6ZShmdW5jdGlvbiAocHJvcCkge1xuICAgIHJldHVybiBpc1Byb3BWYWxpZChwcm9wKSAmJiAhcmVnZXgudGVzdChwcm9wKTtcbiAgfSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2hvdWxkRm9yd2FyZFByb3AocHJvcHMpO1xuIiwiZnVuY3Rpb24gbWVtb2l6ZShmbikge1xuICB2YXIgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICByZXR1cm4gZnVuY3Rpb24gKGFyZykge1xuICAgIGlmIChjYWNoZVthcmddID09PSB1bmRlZmluZWQpIGNhY2hlW2FyZ10gPSBmbihhcmcpO1xuICAgIHJldHVybiBjYWNoZVthcmddO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBtZW1vaXplO1xuIiwiaW1wb3J0IHsgZ2V0LCBzeXN0ZW0sIGNvbXBvc2UgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9jb3JlJztcbnZhciBkZWZhdWx0cyA9IHtcbiAgc3BhY2U6IFswLCA0LCA4LCAxNiwgMzIsIDY0LCAxMjgsIDI1NiwgNTEyXVxufTtcblxudmFyIGlzTnVtYmVyID0gZnVuY3Rpb24gaXNOdW1iZXIobikge1xuICByZXR1cm4gdHlwZW9mIG4gPT09ICdudW1iZXInICYmICFpc05hTihuKTtcbn07XG5cbnZhciBnZXRNYXJnaW4gPSBmdW5jdGlvbiBnZXRNYXJnaW4obiwgc2NhbGUpIHtcbiAgaWYgKCFpc051bWJlcihuKSkge1xuICAgIHJldHVybiBnZXQoc2NhbGUsIG4sIG4pO1xuICB9XG5cbiAgdmFyIGlzTmVnYXRpdmUgPSBuIDwgMDtcbiAgdmFyIGFic29sdXRlID0gTWF0aC5hYnMobik7XG4gIHZhciB2YWx1ZSA9IGdldChzY2FsZSwgYWJzb2x1dGUsIGFic29sdXRlKTtcblxuICBpZiAoIWlzTnVtYmVyKHZhbHVlKSkge1xuICAgIHJldHVybiBpc05lZ2F0aXZlID8gJy0nICsgdmFsdWUgOiB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZSAqIChpc05lZ2F0aXZlID8gLTEgOiAxKTtcbn07XG5cbnZhciBjb25maWdzID0ge307XG5jb25maWdzLm1hcmdpbiA9IHtcbiAgbWFyZ2luOiB7XG4gICAgcHJvcGVydHk6ICdtYXJnaW4nLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIHRyYW5zZm9ybTogZ2V0TWFyZ2luLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfSxcbiAgbWFyZ2luVG9wOiB7XG4gICAgcHJvcGVydHk6ICdtYXJnaW5Ub3AnLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIHRyYW5zZm9ybTogZ2V0TWFyZ2luLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfSxcbiAgbWFyZ2luUmlnaHQ6IHtcbiAgICBwcm9wZXJ0eTogJ21hcmdpblJpZ2h0JyxcbiAgICBzY2FsZTogJ3NwYWNlJyxcbiAgICB0cmFuc2Zvcm06IGdldE1hcmdpbixcbiAgICBkZWZhdWx0U2NhbGU6IGRlZmF1bHRzLnNwYWNlXG4gIH0sXG4gIG1hcmdpbkJvdHRvbToge1xuICAgIHByb3BlcnR5OiAnbWFyZ2luQm90dG9tJyxcbiAgICBzY2FsZTogJ3NwYWNlJyxcbiAgICB0cmFuc2Zvcm06IGdldE1hcmdpbixcbiAgICBkZWZhdWx0U2NhbGU6IGRlZmF1bHRzLnNwYWNlXG4gIH0sXG4gIG1hcmdpbkxlZnQ6IHtcbiAgICBwcm9wZXJ0eTogJ21hcmdpbkxlZnQnLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIHRyYW5zZm9ybTogZ2V0TWFyZ2luLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfSxcbiAgbWFyZ2luWDoge1xuICAgIHByb3BlcnRpZXM6IFsnbWFyZ2luTGVmdCcsICdtYXJnaW5SaWdodCddLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIHRyYW5zZm9ybTogZ2V0TWFyZ2luLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfSxcbiAgbWFyZ2luWToge1xuICAgIHByb3BlcnRpZXM6IFsnbWFyZ2luVG9wJywgJ21hcmdpbkJvdHRvbSddLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIHRyYW5zZm9ybTogZ2V0TWFyZ2luLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfVxufTtcbmNvbmZpZ3MubWFyZ2luLm0gPSBjb25maWdzLm1hcmdpbi5tYXJnaW47XG5jb25maWdzLm1hcmdpbi5tdCA9IGNvbmZpZ3MubWFyZ2luLm1hcmdpblRvcDtcbmNvbmZpZ3MubWFyZ2luLm1yID0gY29uZmlncy5tYXJnaW4ubWFyZ2luUmlnaHQ7XG5jb25maWdzLm1hcmdpbi5tYiA9IGNvbmZpZ3MubWFyZ2luLm1hcmdpbkJvdHRvbTtcbmNvbmZpZ3MubWFyZ2luLm1sID0gY29uZmlncy5tYXJnaW4ubWFyZ2luTGVmdDtcbmNvbmZpZ3MubWFyZ2luLm14ID0gY29uZmlncy5tYXJnaW4ubWFyZ2luWDtcbmNvbmZpZ3MubWFyZ2luLm15ID0gY29uZmlncy5tYXJnaW4ubWFyZ2luWTtcbmNvbmZpZ3MucGFkZGluZyA9IHtcbiAgcGFkZGluZzoge1xuICAgIHByb3BlcnR5OiAncGFkZGluZycsXG4gICAgc2NhbGU6ICdzcGFjZScsXG4gICAgZGVmYXVsdFNjYWxlOiBkZWZhdWx0cy5zcGFjZVxuICB9LFxuICBwYWRkaW5nVG9wOiB7XG4gICAgcHJvcGVydHk6ICdwYWRkaW5nVG9wJyxcbiAgICBzY2FsZTogJ3NwYWNlJyxcbiAgICBkZWZhdWx0U2NhbGU6IGRlZmF1bHRzLnNwYWNlXG4gIH0sXG4gIHBhZGRpbmdSaWdodDoge1xuICAgIHByb3BlcnR5OiAncGFkZGluZ1JpZ2h0JyxcbiAgICBzY2FsZTogJ3NwYWNlJyxcbiAgICBkZWZhdWx0U2NhbGU6IGRlZmF1bHRzLnNwYWNlXG4gIH0sXG4gIHBhZGRpbmdCb3R0b206IHtcbiAgICBwcm9wZXJ0eTogJ3BhZGRpbmdCb3R0b20nLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfSxcbiAgcGFkZGluZ0xlZnQ6IHtcbiAgICBwcm9wZXJ0eTogJ3BhZGRpbmdMZWZ0JyxcbiAgICBzY2FsZTogJ3NwYWNlJyxcbiAgICBkZWZhdWx0U2NhbGU6IGRlZmF1bHRzLnNwYWNlXG4gIH0sXG4gIHBhZGRpbmdYOiB7XG4gICAgcHJvcGVydGllczogWydwYWRkaW5nTGVmdCcsICdwYWRkaW5nUmlnaHQnXSxcbiAgICBzY2FsZTogJ3NwYWNlJyxcbiAgICBkZWZhdWx0U2NhbGU6IGRlZmF1bHRzLnNwYWNlXG4gIH0sXG4gIHBhZGRpbmdZOiB7XG4gICAgcHJvcGVydGllczogWydwYWRkaW5nVG9wJywgJ3BhZGRpbmdCb3R0b20nXSxcbiAgICBzY2FsZTogJ3NwYWNlJyxcbiAgICBkZWZhdWx0U2NhbGU6IGRlZmF1bHRzLnNwYWNlXG4gIH1cbn07XG5jb25maWdzLnBhZGRpbmcucCA9IGNvbmZpZ3MucGFkZGluZy5wYWRkaW5nO1xuY29uZmlncy5wYWRkaW5nLnB0ID0gY29uZmlncy5wYWRkaW5nLnBhZGRpbmdUb3A7XG5jb25maWdzLnBhZGRpbmcucHIgPSBjb25maWdzLnBhZGRpbmcucGFkZGluZ1JpZ2h0O1xuY29uZmlncy5wYWRkaW5nLnBiID0gY29uZmlncy5wYWRkaW5nLnBhZGRpbmdCb3R0b207XG5jb25maWdzLnBhZGRpbmcucGwgPSBjb25maWdzLnBhZGRpbmcucGFkZGluZ0xlZnQ7XG5jb25maWdzLnBhZGRpbmcucHggPSBjb25maWdzLnBhZGRpbmcucGFkZGluZ1g7XG5jb25maWdzLnBhZGRpbmcucHkgPSBjb25maWdzLnBhZGRpbmcucGFkZGluZ1k7XG5leHBvcnQgdmFyIG1hcmdpbiA9IHN5c3RlbShjb25maWdzLm1hcmdpbik7XG5leHBvcnQgdmFyIHBhZGRpbmcgPSBzeXN0ZW0oY29uZmlncy5wYWRkaW5nKTtcbmV4cG9ydCB2YXIgc3BhY2UgPSBjb21wb3NlKG1hcmdpbiwgcGFkZGluZyk7XG5leHBvcnQgZGVmYXVsdCBzcGFjZTtcbiIsImltcG9ydCB7IHN5c3RlbSB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL2NvcmUnO1xudmFyIGRlZmF1bHRzID0ge1xuICBmb250U2l6ZXM6IFsxMiwgMTQsIDE2LCAyMCwgMjQsIDMyLCA0OCwgNjQsIDcyXVxufTtcbnZhciBjb25maWcgPSB7XG4gIGZvbnRGYW1pbHk6IHtcbiAgICBwcm9wZXJ0eTogJ2ZvbnRGYW1pbHknLFxuICAgIHNjYWxlOiAnZm9udHMnXG4gIH0sXG4gIGZvbnRTaXplOiB7XG4gICAgcHJvcGVydHk6ICdmb250U2l6ZScsXG4gICAgc2NhbGU6ICdmb250U2l6ZXMnLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuZm9udFNpemVzXG4gIH0sXG4gIGZvbnRXZWlnaHQ6IHtcbiAgICBwcm9wZXJ0eTogJ2ZvbnRXZWlnaHQnLFxuICAgIHNjYWxlOiAnZm9udFdlaWdodHMnXG4gIH0sXG4gIGxpbmVIZWlnaHQ6IHtcbiAgICBwcm9wZXJ0eTogJ2xpbmVIZWlnaHQnLFxuICAgIHNjYWxlOiAnbGluZUhlaWdodHMnXG4gIH0sXG4gIGxldHRlclNwYWNpbmc6IHtcbiAgICBwcm9wZXJ0eTogJ2xldHRlclNwYWNpbmcnLFxuICAgIHNjYWxlOiAnbGV0dGVyU3BhY2luZ3MnXG4gIH0sXG4gIHRleHRBbGlnbjogdHJ1ZSxcbiAgZm9udFN0eWxlOiB0cnVlXG59O1xuZXhwb3J0IHZhciB0eXBvZ3JhcGh5ID0gc3lzdGVtKGNvbmZpZyk7XG5leHBvcnQgZGVmYXVsdCB0eXBvZ3JhcGh5O1xuIiwiaW1wb3J0IHsgZ2V0LCBjcmVhdGVQYXJzZXIgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9jb3JlJztcbmltcG9ydCBjc3MgZnJvbSAnQHN0eWxlZC1zeXN0ZW0vY3NzJztcbmV4cG9ydCB2YXIgdmFyaWFudCA9IGZ1bmN0aW9uIHZhcmlhbnQoX3JlZikge1xuICB2YXIgX2NvbmZpZztcblxuICB2YXIgc2NhbGUgPSBfcmVmLnNjYWxlLFxuICAgICAgX3JlZiRwcm9wID0gX3JlZi5wcm9wLFxuICAgICAgcHJvcCA9IF9yZWYkcHJvcCA9PT0gdm9pZCAwID8gJ3ZhcmlhbnQnIDogX3JlZiRwcm9wLFxuICAgICAgX3JlZiR2YXJpYW50cyA9IF9yZWYudmFyaWFudHMsXG4gICAgICB2YXJpYW50cyA9IF9yZWYkdmFyaWFudHMgPT09IHZvaWQgMCA/IHt9IDogX3JlZiR2YXJpYW50cyxcbiAgICAgIGtleSA9IF9yZWYua2V5O1xuICB2YXIgc3g7XG5cbiAgaWYgKE9iamVjdC5rZXlzKHZhcmlhbnRzKS5sZW5ndGgpIHtcbiAgICBzeCA9IGZ1bmN0aW9uIHN4KHZhbHVlLCBzY2FsZSwgcHJvcHMpIHtcbiAgICAgIHJldHVybiBjc3MoZ2V0KHNjYWxlLCB2YWx1ZSwgbnVsbCkpKHByb3BzLnRoZW1lKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHN4ID0gZnVuY3Rpb24gc3godmFsdWUsIHNjYWxlKSB7XG4gICAgICByZXR1cm4gZ2V0KHNjYWxlLCB2YWx1ZSwgbnVsbCk7XG4gICAgfTtcbiAgfVxuXG4gIHN4LnNjYWxlID0gc2NhbGUgfHwga2V5O1xuICBzeC5kZWZhdWx0cyA9IHZhcmlhbnRzO1xuICB2YXIgY29uZmlnID0gKF9jb25maWcgPSB7fSwgX2NvbmZpZ1twcm9wXSA9IHN4LCBfY29uZmlnKTtcbiAgdmFyIHBhcnNlciA9IGNyZWF0ZVBhcnNlcihjb25maWcpO1xuICByZXR1cm4gcGFyc2VyO1xufTtcbmV4cG9ydCBkZWZhdWx0IHZhcmlhbnQ7XG5leHBvcnQgdmFyIGJ1dHRvblN0eWxlID0gdmFyaWFudCh7XG4gIGtleTogJ2J1dHRvbnMnXG59KTtcbmV4cG9ydCB2YXIgdGV4dFN0eWxlID0gdmFyaWFudCh7XG4gIGtleTogJ3RleHRTdHlsZXMnLFxuICBwcm9wOiAndGV4dFN0eWxlJ1xufSk7XG5leHBvcnQgdmFyIGNvbG9yU3R5bGUgPSB2YXJpYW50KHtcbiAga2V5OiAnY29sb3JTdHlsZXMnLFxuICBwcm9wOiAnY29sb3JzJ1xufSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsganN4LCB1c2VUaGVtZVVJLCBtZXJnZSwgQ29udGV4dCB9IGZyb20gJ0B0aGVtZS11aS9jb3JlJztcbmltcG9ydCB7IEdsb2JhbCwgVGhlbWVDb250ZXh0IH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgeyBjc3MsIGdldCB9IGZyb20gJ0B0aGVtZS11aS9jc3MnO1xuXG52YXIgdG9WYXJOYW1lID0gZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gKFwiLS10aGVtZS11aS1cIiArIGtleSk7IH07XG5cbnZhciB0b1ZhclZhbHVlID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHsgcmV0dXJuIChcInZhcihcIiArICh0b1Zhck5hbWUoa2V5KSkgKyBcIiwgXCIgKyB2YWx1ZSArIFwiKVwiKTsgfTtcblxudmFyIGpvaW4gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgcmV0dXJuIGFyZ3MuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJy0nKTtcbn07XG5cbnZhciBudW1iZXJTY2FsZXMgPSB7XG4gIGZvbnRXZWlnaHRzOiB0cnVlLFxuICBsaW5lSGVpZ2h0czogdHJ1ZVxufTtcbnZhciByZXNlcnZlZEtleXMgPSB7XG4gIHVzZUN1c3RvbVByb3BlcnRpZXM6IHRydWUsXG4gIGluaXRpYWxDb2xvck1vZGVOYW1lOiB0cnVlLFxuICBpbml0aWFsQ29sb3JNb2RlOiB0cnVlXG59O1xuXG52YXIgdG9QaXhlbCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdudW1iZXInKSB7IHJldHVybiB2YWx1ZTsgfVxuICBpZiAobnVtYmVyU2NhbGVzW2tleV0pIHsgcmV0dXJuIHZhbHVlOyB9XG4gIHJldHVybiB2YWx1ZSArICdweCc7XG59OyAvLyBjb252ZXJ0IHRoZW1lIHZhbHVlcyB0byBjdXN0b20gcHJvcGVydGllc1xuXG5cbnZhciB0b0N1c3RvbVByb3BlcnRpZXMgPSBmdW5jdGlvbiAob2JqLCBwYXJlbnQsIHRoZW1lS2V5KSB7XG4gIHZhciBuZXh0ID0gQXJyYXkuaXNBcnJheShvYmopID8gW10gOiB7fTtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgdmFyIHZhbHVlID0gb2JqW2tleV07XG4gICAgdmFyIG5hbWUgPSBqb2luKHBhcmVudCwga2V5KTtcblxuICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICBuZXh0W2tleV0gPSB0b0N1c3RvbVByb3BlcnRpZXModmFsdWUsIG5hbWUsIGtleSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAocmVzZXJ2ZWRLZXlzW2tleV0pIHtcbiAgICAgIG5leHRba2V5XSA9IHZhbHVlO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgdmFyIHZhbCA9IHRvUGl4ZWwodGhlbWVLZXkgfHwga2V5LCB2YWx1ZSk7XG4gICAgbmV4dFtrZXldID0gdG9WYXJWYWx1ZShuYW1lLCB2YWwpO1xuICB9XG5cbiAgcmV0dXJuIG5leHQ7XG59O1xudmFyIG9iamVjdFRvVmFycyA9IGZ1bmN0aW9uIChwYXJlbnQsIG9iaikge1xuICB2YXIgdmFycyA9IHt9O1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoa2V5ID09PSAnbW9kZXMnKSB7IGNvbnRpbnVlOyB9XG4gICAgdmFyIG5hbWUgPSBqb2luKHBhcmVudCwga2V5KTtcbiAgICB2YXIgdmFsdWUgPSBvYmpba2V5XTtcblxuICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICB2YXJzID0gT2JqZWN0LmFzc2lnbih7fSwgdmFycyxcbiAgICAgICAgb2JqZWN0VG9WYXJzKG5hbWUsIHZhbHVlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhcnNbdG9WYXJOYW1lKG5hbWUpXSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB2YXJzO1xufTsgLy8gY3JlYXRlIGJvZHkgc3R5bGVzIGZvciBjb2xvciBtb2Rlc1xuXG52YXIgY3JlYXRlQ29sb3JTdHlsZXMgPSBmdW5jdGlvbiAodGhlbWUpIHtcbiAgaWYgKCB0aGVtZSA9PT0gdm9pZCAwICkgdGhlbWUgPSB7fTtcblxuICBpZiAoIXRoZW1lLmNvbG9ycyB8fCB0aGVtZS51c2VCb2R5U3R5bGVzID09PSBmYWxzZSkgeyByZXR1cm4ge307IH1cblxuICBpZiAodGhlbWUudXNlQ3VzdG9tUHJvcGVydGllcyA9PT0gZmFsc2UgfHwgIXRoZW1lLmNvbG9ycy5tb2Rlcykge1xuICAgIHJldHVybiBjc3Moe1xuICAgICAgYm9keToge1xuICAgICAgICBjb2xvcjogJ3RleHQnLFxuICAgICAgICBiZzogJ2JhY2tncm91bmQnXG4gICAgICB9XG4gICAgfSkodGhlbWUpO1xuICB9XG5cbiAgdmFyIGNvbG9ycyA9IHRoZW1lLnJhd0NvbG9ycyB8fCB0aGVtZS5jb2xvcnM7XG4gIHZhciBtb2RlcyA9IGNvbG9ycy5tb2RlcztcbiAgdmFyIHN0eWxlcyA9IG9iamVjdFRvVmFycygnY29sb3JzJywgY29sb3JzKTtcbiAgT2JqZWN0LmtleXMobW9kZXMpLmZvckVhY2goZnVuY3Rpb24gKG1vZGUpIHtcbiAgICB2YXIga2V5ID0gXCImLnRoZW1lLXVpLVwiICsgbW9kZTtcbiAgICBzdHlsZXNba2V5XSA9IG9iamVjdFRvVmFycygnY29sb3JzJywgbW9kZXNbbW9kZV0pO1xuICB9KTtcbiAgcmV0dXJuIGNzcyh7XG4gICAgYm9keTogT2JqZWN0LmFzc2lnbih7fSwgc3R5bGVzLFxuICAgICAge2NvbG9yOiAndGV4dCcsXG4gICAgICBiZzogJ2JhY2tncm91bmQnfSlcbiAgfSkodGhlbWUpO1xufTtcblxudmFyIFNUT1JBR0VfS0VZID0gJ3RoZW1lLXVpLWNvbG9yLW1vZGUnO1xudmFyIHN0b3JhZ2UgPSB7XG4gIGdldDogZnVuY3Rpb24gKGluaXQpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShTVE9SQUdFX0tFWSkgfHwgaW5pdDtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ2xvY2FsU3RvcmFnZSBpcyBkaXNhYmxlZCBhbmQgY29sb3IgbW9kZSBtaWdodCBub3Qgd29yayBhcyBleHBlY3RlZC4nLCAnUGxlYXNlIGNoZWNrIHlvdXIgU2l0ZSBTZXR0aW5ncy4nLCBlKTtcbiAgICB9XG4gIH0sXG4gIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdHJ5IHtcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShTVE9SQUdFX0tFWSwgdmFsdWUpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUud2FybignbG9jYWxTdG9yYWdlIGlzIGRpc2FibGVkIGFuZCBjb2xvciBtb2RlIG1pZ2h0IG5vdCB3b3JrIGFzIGV4cGVjdGVkLicsICdQbGVhc2UgY2hlY2sgeW91ciBTaXRlIFNldHRpbmdzLicsIGUpO1xuICAgIH1cbiAgfVxufTtcblxudmFyIGdldE1lZGlhUXVlcnkgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBkYXJrUXVlcnkgPSAnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSc7XG4gIHZhciBsaWdodFF1ZXJ5ID0gJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogbGlnaHQpJztcbiAgdmFyIGRhcmtNUUwgPSB3aW5kb3cubWF0Y2hNZWRpYSA/IHdpbmRvdy5tYXRjaE1lZGlhKGRhcmtRdWVyeSkgOiB7fTtcbiAgdmFyIGxpZ2h0TVFMID0gd2luZG93Lm1hdGNoTWVkaWEgPyB3aW5kb3cubWF0Y2hNZWRpYShsaWdodFF1ZXJ5KSA6IHt9O1xuICB2YXIgZGFyayA9IGRhcmtNUUwubWVkaWEgPT09IGRhcmtRdWVyeSAmJiBkYXJrTVFMLm1hdGNoZXM7XG4gIGlmIChkYXJrKSB7IHJldHVybiAnZGFyayc7IH1cbiAgdmFyIGxpZ2h0ID0gbGlnaHRNUUwubWVkaWEgPT09IGxpZ2h0UXVlcnkgJiYgbGlnaHRNUUwubWF0Y2hlcztcbiAgaWYgKGxpZ2h0KSB7IHJldHVybiAnbGlnaHQnOyB9XG4gIHJldHVybiAnZGVmYXVsdCc7XG59O1xuXG52YXIgdXNlQ29sb3JNb2RlU3RhdGUgPSBmdW5jdGlvbiAodGhlbWUpIHtcbiAgaWYgKCB0aGVtZSA9PT0gdm9pZCAwICkgdGhlbWUgPSB7fTtcblxuICB2YXIgcmVmID0gUmVhY3QudXNlU3RhdGUodGhlbWUuaW5pdGlhbENvbG9yTW9kZU5hbWUgfHwgJ2RlZmF1bHQnKTtcbiAgdmFyIG1vZGUgPSByZWZbMF07XG4gIHZhciBzZXRNb2RlID0gcmVmWzFdOyAvLyBpbml0aWFsaXplIHN0YXRlXG5cbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RvcmVkID0gc3RvcmFnZS5nZXQoKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3RoZW1lLXVpLScgKyBzdG9yZWQpO1xuXG4gICAgaWYgKCFzdG9yZWQgJiYgdGhlbWUudXNlQ29sb3JTY2hlbWVNZWRpYVF1ZXJ5KSB7XG4gICAgICB2YXIgcXVlcnkgPSBnZXRNZWRpYVF1ZXJ5KCk7XG4gICAgICBzZXRNb2RlKHF1ZXJ5KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXN0b3JlZCB8fCBzdG9yZWQgPT09IG1vZGUpIHsgcmV0dXJuOyB9XG4gICAgc2V0TW9kZShzdG9yZWQpO1xuICB9LCBbXSk7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFtb2RlKSB7IHJldHVybjsgfVxuICAgIHN0b3JhZ2Uuc2V0KG1vZGUpO1xuICB9LCBbbW9kZV0pO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKHRoZW1lLmNvbG9ycyAmJiB0aGVtZS5jb2xvcnMubW9kZXMgJiYgT2JqZWN0LmtleXModGhlbWUuY29sb3JzLm1vZGVzKS5pbmRleE9mKHRoZW1lLmluaXRpYWxDb2xvck1vZGVOYW1lKSA+IC0xKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1RoZSBgaW5pdGlhbENvbG9yTW9kZU5hbWVgIHZhbHVlIHNob3VsZCBiZSBhIHVuaXF1ZSBuYW1lJyArICcgYW5kIGNhbm5vdCByZWZlcmVuY2UgYSBrZXkgaW4gYHRoZW1lLmNvbG9ycy5tb2Rlc2AuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFttb2RlLCBzZXRNb2RlXTtcbn07XG5cbnZhciB1c2VDb2xvck1vZGUgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciByZWYgPSB1c2VUaGVtZVVJKCk7XG4gIHZhciBjb2xvck1vZGUgPSByZWYuY29sb3JNb2RlO1xuICB2YXIgc2V0Q29sb3JNb2RlID0gcmVmLnNldENvbG9yTW9kZTtcblxuICBpZiAodHlwZW9mIHNldENvbG9yTW9kZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlt1c2VDb2xvck1vZGVdIHJlcXVpcmVzIHRoZSBDb2xvck1vZGVQcm92aWRlciBjb21wb25lbnRcIik7XG4gIH1cblxuICByZXR1cm4gW2NvbG9yTW9kZSwgc2V0Q29sb3JNb2RlXTtcbn07XG5cbnZhciBhcHBseUNvbG9yTW9kZSA9IGZ1bmN0aW9uICh0aGVtZSwgbW9kZSkge1xuICBpZiAoIW1vZGUpIHsgcmV0dXJuIHRoZW1lOyB9XG4gIHZhciBtb2RlcyA9IGdldCh0aGVtZSwgJ2NvbG9ycy5tb2RlcycsIHt9KTtcbiAgcmV0dXJuIG1lcmdlLmFsbCh7fSwgdGhlbWUsIHtcbiAgICBjb2xvcnM6IGdldChtb2RlcywgbW9kZSwge30pXG4gIH0pO1xufTtcblxudmFyIEJvZHlTdHlsZXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBqc3goR2xvYmFsLCB7XG4gIHN0eWxlczogZnVuY3Rpb24gKHRoZW1lKSB7IHJldHVybiBjcmVhdGVDb2xvclN0eWxlcyh0aGVtZSk7IH1cbn0pOyB9O1xuXG52YXIgQ29sb3JNb2RlUHJvdmlkZXIgPSBmdW5jdGlvbiAocmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IHJlZi5jaGlsZHJlbjtcblxuICB2YXIgb3V0ZXIgPSB1c2VUaGVtZVVJKCk7XG4gIHZhciByZWYkMSA9IHVzZUNvbG9yTW9kZVN0YXRlKG91dGVyLnRoZW1lKTtcbiAgdmFyIGNvbG9yTW9kZSA9IHJlZiQxWzBdO1xuICB2YXIgc2V0Q29sb3JNb2RlID0gcmVmJDFbMV07XG4gIHZhciB0aGVtZSA9IGFwcGx5Q29sb3JNb2RlKG91dGVyLnRoZW1lIHx8IHt9LCBjb2xvck1vZGUpO1xuICB2YXIgZW1vdGlvblRoZW1lID0gT2JqZWN0LmFzc2lnbih7fSwgdGhlbWUpO1xuXG4gIGlmICh0aGVtZS51c2VDdXN0b21Qcm9wZXJ0aWVzICE9PSBmYWxzZSkge1xuICAgIGVtb3Rpb25UaGVtZS5jb2xvcnMgPSB0b0N1c3RvbVByb3BlcnRpZXMoZW1vdGlvblRoZW1lLmNvbG9ycywgJ2NvbG9ycycpO1xuICB9XG5cbiAgdmFyIGNvbnRleHQgPSBPYmplY3QuYXNzaWduKHt9LCBvdXRlcixcbiAgICB7dGhlbWU6IHRoZW1lLFxuICAgIGNvbG9yTW9kZTogY29sb3JNb2RlLFxuICAgIHNldENvbG9yTW9kZTogc2V0Q29sb3JNb2RlfSk7XG4gIHJldHVybiBqc3goVGhlbWVDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IGVtb3Rpb25UaGVtZVxuICB9LCBqc3goQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiBjb250ZXh0XG4gIH0sIGpzeChCb2R5U3R5bGVzLCB7XG4gICAga2V5OiAnY29sb3ItbW9kZSdcbiAgfSksIGNoaWxkcmVuKSk7XG59O1xudmFyIG5vZmxhc2ggPSBcIihmdW5jdGlvbigpIHsgdHJ5IHtcXG4gIHZhciBtb2RlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lLXVpLWNvbG9yLW1vZGUnKTtcXG4gIGlmICghbW9kZSkgcmV0dXJuXFxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3RoZW1lLXVpLScgKyBtb2RlKTtcXG59IGNhdGNoIChlKSB7fSB9KSgpO1wiO1xudmFyIEluaXRpYWxpemVDb2xvck1vZGUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBqc3goJ3NjcmlwdCcsIHtcbiAga2V5OiAndGhlbWUtdWktbm8tZmxhc2gnLFxuICBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuICAgIF9faHRtbDogbm9mbGFzaFxuICB9XG59KTsgfTtcblxuZXhwb3J0IHsgdXNlQ29sb3JNb2RlLCBDb2xvck1vZGVQcm92aWRlciwgSW5pdGlhbGl6ZUNvbG9yTW9kZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXNtLmpzLm1hcFxuIiwiaW1wb3J0IHsgY3NzLCBnZXQgfSBmcm9tICdAdGhlbWUtdWkvY3NzJztcbmltcG9ydCB7IGNyZWF0ZVNob3VsZEZvcndhcmRQcm9wIH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vc2hvdWxkLWZvcndhcmQtcHJvcCc7XG5pbXBvcnQgc3BhY2UgZnJvbSAnQHN0eWxlZC1zeXN0ZW0vc3BhY2UnO1xuaW1wb3J0IGNvbG9yIGZyb20gJ0BzdHlsZWQtc3lzdGVtL2NvbG9yJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxudmFyIHNob3VsZEZvcndhcmRQcm9wID0gY3JlYXRlU2hvdWxkRm9yd2FyZFByb3AoKCBzcGFjZS5wcm9wTmFtZXMgKS5jb25jYXQoIGNvbG9yLnByb3BOYW1lcykpO1xuXG52YXIgc3ggPSBmdW5jdGlvbiAocHJvcHMpIHsgcmV0dXJuIGNzcyhwcm9wcy5zeCkocHJvcHMudGhlbWUpOyB9O1xuXG52YXIgYmFzZSA9IGZ1bmN0aW9uIChwcm9wcykgeyByZXR1cm4gY3NzKHByb3BzLl9fY3NzKShwcm9wcy50aGVtZSk7IH07XG5cbnZhciB2YXJpYW50ID0gZnVuY3Rpb24gKHJlZikge1xuICB2YXIgdGhlbWUgPSByZWYudGhlbWU7XG4gIHZhciB2YXJpYW50ID0gcmVmLnZhcmlhbnQ7XG4gIHZhciBfX3RoZW1lS2V5ID0gcmVmLl9fdGhlbWVLZXk7IGlmICggX190aGVtZUtleSA9PT0gdm9pZCAwICkgX190aGVtZUtleSA9ICd2YXJpYW50cyc7XG5cbiAgcmV0dXJuIGNzcyhnZXQodGhlbWUsIF9fdGhlbWVLZXkgKyAnLicgKyB2YXJpYW50LCBnZXQodGhlbWUsIHZhcmlhbnQpKSk7XG59O1xuXG52YXIgQm94ID0gc3R5bGVkKCdkaXYnLCB7XG4gIHNob3VsZEZvcndhcmRQcm9wOiBzaG91bGRGb3J3YXJkUHJvcFxufSkoe1xuICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgbWFyZ2luOiAwLFxuICBtaW5XaWR0aDogMFxufSwgYmFzZSwgdmFyaWFudCwgc3BhY2UsIGNvbG9yLCBzeCwgZnVuY3Rpb24gKHByb3BzKSB7IHJldHVybiBwcm9wcy5jc3M7IH0pO1xuXG52YXIgRmxleCA9IHN0eWxlZChCb3gpKHtcbiAgZGlzcGxheTogJ2ZsZXgnXG59KTtcblxuZnVuY3Rpb24gb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgKG9iaiwgZXhjbHVkZSkgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGsgaW4gb2JqKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaykgJiYgZXhjbHVkZS5pbmRleE9mKGspID09PSAtMSkgdGFyZ2V0W2tdID0gb2JqW2tdOyByZXR1cm4gdGFyZ2V0OyB9XG5cbnZhciBweCA9IGZ1bmN0aW9uIChuKSB7IHJldHVybiB0eXBlb2YgbiA9PT0gJ251bWJlcicgPyBuICsgJ3B4JyA6IG47IH07XG5cbnZhciB3aWR0aFRvQ29sdW1ucyA9IGZ1bmN0aW9uICh3aWR0aCkgeyByZXR1cm4gQXJyYXkuaXNBcnJheSh3aWR0aCkgPyB3aWR0aC5tYXAod2lkdGhUb0NvbHVtbnMpIDogISF3aWR0aCAmJiAoXCJyZXBlYXQoYXV0by1maXQsIG1pbm1heChcIiArIChweCh3aWR0aCkpICsgXCIsIDFmcikpXCIpOyB9O1xuXG52YXIgY291bnRUb0NvbHVtbnMgPSBmdW5jdGlvbiAobikgeyByZXR1cm4gQXJyYXkuaXNBcnJheShuKSA/IG4ubWFwKGNvdW50VG9Db2x1bW5zKSA6ICEhbiAmJiAodHlwZW9mIG4gPT09ICdudW1iZXInID8gKFwicmVwZWF0KFwiICsgbiArIFwiLCAxZnIpXCIpIDogbik7IH07XG5cbnZhciBHcmlkID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocmVmJDEsIHJlZikge1xuICB2YXIgd2lkdGggPSByZWYkMS53aWR0aDtcbiAgdmFyIGNvbHVtbnMgPSByZWYkMS5jb2x1bW5zO1xuICB2YXIgZ2FwID0gcmVmJDEuZ2FwOyBpZiAoIGdhcCA9PT0gdm9pZCAwICkgZ2FwID0gMztcbiAgdmFyIHJlc3QgPSBvYmplY3RXaXRob3V0UHJvcGVydGllcyggcmVmJDEsIFtcIndpZHRoXCIsIFwiY29sdW1uc1wiLCBcImdhcFwiXSApO1xuICB2YXIgcHJvcHMgPSByZXN0O1xuXG4gIHZhciBncmlkVGVtcGxhdGVDb2x1bW5zID0gISF3aWR0aCA/IHdpZHRoVG9Db2x1bW5zKHdpZHRoKSA6IGNvdW50VG9Db2x1bW5zKGNvbHVtbnMpO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCggQm94LCBPYmplY3QuYXNzaWduKHt9LCB7IHJlZjogcmVmIH0sIHByb3BzLCB7IF9fdGhlbWVLZXk6IFwiZ3JpZHNcIiwgX19jc3M6IHtcbiAgICBkaXNwbGF5OiAnZ3JpZCcsXG4gICAgZ3JpZEdhcDogZ2FwLFxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IGdyaWRUZW1wbGF0ZUNvbHVtbnNcbiAgfSB9KSk7XG59KTtcblxudmFyIEJ1dHRvbiA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHsgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoIEJveCwgT2JqZWN0LmFzc2lnbih7fSwgeyByZWY6IHJlZiwgYXM6IFwiYnV0dG9uXCIsIHZhcmlhbnQ6IFwicHJpbWFyeVwiIH0sIHByb3BzLCB7IF9fdGhlbWVLZXk6IFwiYnV0dG9uc1wiLCBfX2Nzczoge1xuICBhcHBlYXJhbmNlOiAnbm9uZScsXG4gIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICBsaW5lSGVpZ2h0OiAnaW5oZXJpdCcsXG4gIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gIHB4OiAzLFxuICBweTogMixcbiAgY29sb3I6ICd3aGl0ZScsXG4gIGJnOiAncHJpbWFyeScsXG4gIGJvcmRlcjogMCxcbiAgYm9yZGVyUmFkaXVzOiA0XG59IH0pKTsgfSk7XG5cbnZhciBMaW5rID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikgeyByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCggQm94LCBPYmplY3QuYXNzaWduKHt9LCB7IHJlZjogcmVmLCBhczogXCJhXCIsIHZhcmlhbnQ6IFwic3R5bGVzLmFcIiB9LCBwcm9wcywgeyBfX3RoZW1lS2V5OiBcImxpbmtzXCIgfSkpOyB9KTtcblxudmFyIFRleHQgPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7IHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCBCb3gsIE9iamVjdC5hc3NpZ24oe30sIHsgcmVmOiByZWYsIHZhcmlhbnQ6IFwiZGVmYXVsdFwiIH0sIHByb3BzLCB7IF9fdGhlbWVLZXk6IFwidGV4dFwiIH0pKTsgfSk7XG5cbnZhciBIZWFkaW5nID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikgeyByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCggQm94LCBPYmplY3QuYXNzaWduKHt9LCB7IHJlZjogcmVmLCBhczogXCJoMlwiLCB2YXJpYW50OiBcImhlYWRpbmdcIiB9LCBwcm9wcywgeyBfX3RoZW1lS2V5OiBcInRleHRcIiwgX19jc3M6IHtcbiAgZm9udEZhbWlseTogJ2hlYWRpbmcnLFxuICBmb250V2VpZ2h0OiAnaGVhZGluZycsXG4gIGxpbmVIZWlnaHQ6ICdoZWFkaW5nJ1xufSB9KSk7IH0pO1xuXG52YXIgSW1hZ2UgPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7IHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCBCb3gsIE9iamVjdC5hc3NpZ24oe30sIHsgcmVmOiByZWYsIGFzOiBcImltZ1wiIH0sIHByb3BzLCB7IF9fdGhlbWVLZXk6IFwiaW1hZ2VzXCIsIF9fY3NzOiBPYmplY3QuYXNzaWduKHt9LCB7bWF4V2lkdGg6ICcxMDAlJyxcbiAgaGVpZ2h0OiAnYXV0byd9LFxuICBwcm9wcy5fX2NzcykgfSkpOyB9KTtcblxudmFyIENhcmQgPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7IHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCBCb3gsIE9iamVjdC5hc3NpZ24oe30sIHsgcmVmOiByZWYsIHZhcmlhbnQ6IFwicHJpbWFyeVwiIH0sIHByb3BzLCB7IF9fdGhlbWVLZXk6IFwiY2FyZHNcIiB9KSk7IH0pO1xuXG52YXIgTGFiZWwgPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7IHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCBCb3gsIE9iamVjdC5hc3NpZ24oe30sIHsgcmVmOiByZWYsIGFzOiBcImxhYmVsXCIsIHZhcmlhbnQ6IFwibGFiZWxcIiB9LCBwcm9wcywgeyBfX3RoZW1lS2V5OiBcImZvcm1zXCIsIF9fY3NzOiB7XG4gIHdpZHRoOiAnMTAwJScsXG4gIGRpc3BsYXk6ICdmbGV4J1xufSB9KSk7IH0pO1xuXG52YXIgSW5wdXQgPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7IHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCBCb3gsIE9iamVjdC5hc3NpZ24oe30sIHsgcmVmOiByZWYsIGFzOiBcImlucHV0XCIsIHZhcmlhbnQ6IFwiaW5wdXRcIiB9LCBwcm9wcywgeyBfX3RoZW1lS2V5OiBcImZvcm1zXCIsIF9fY3NzOiB7XG4gIGRpc3BsYXk6ICdibG9jaycsXG4gIHdpZHRoOiAnMTAwJScsXG4gIHA6IDIsXG4gIGFwcGVhcmFuY2U6ICdub25lJyxcbiAgZm9udFNpemU6ICdpbmhlcml0JyxcbiAgbGluZUhlaWdodDogJ2luaGVyaXQnLFxuICBib3JkZXI6ICcxcHggc29saWQnLFxuICBib3JkZXJSYWRpdXM6IDQsXG4gIGNvbG9yOiAnaW5oZXJpdCcsXG4gIGJnOiAndHJhbnNwYXJlbnQnXG59IH0pKTsgfSk7XG5cbmZ1bmN0aW9uIG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJDEgKG9iaiwgZXhjbHVkZSkgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGsgaW4gb2JqKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaykgJiYgZXhjbHVkZS5pbmRleE9mKGspID09PSAtMSkgdGFyZ2V0W2tdID0gb2JqW2tdOyByZXR1cm4gdGFyZ2V0OyB9XG52YXIgU1ZHID0gKGZ1bmN0aW9uIChyZWYpIHtcbiAgdmFyIHNpemUgPSByZWYuc2l6ZTsgaWYgKCBzaXplID09PSB2b2lkIDAgKSBzaXplID0gMjQ7XG4gIHZhciByZXN0ID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXMkMSggcmVmLCBbXCJzaXplXCJdICk7XG4gIHZhciBwcm9wcyA9IHJlc3Q7XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoIEJveCwgT2JqZWN0LmFzc2lnbih7fSwgeyBhczogXCJzdmdcIiwgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgd2lkdGg6IHNpemUgKyAnJywgaGVpZ2h0OiBzaXplICsgJycsIHZpZXdCb3g6IFwiMCAwIDI0IDI0XCIsIGZpbGw6IFwiY3VycmVudGNvbG9yXCIgfSwgcHJvcHMpKTtcbn0pO1xuXG52YXIgZ2V0UHJvcHMgPSBmdW5jdGlvbiAodGVzdCkgeyByZXR1cm4gZnVuY3Rpb24gKHByb3BzKSB7XG4gIHZhciBuZXh0ID0ge307XG5cbiAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgaWYgKHRlc3Qoa2V5IHx8ICcnKSkgeyBuZXh0W2tleV0gPSBwcm9wc1trZXldOyB9XG4gIH1cblxuICByZXR1cm4gbmV4dDtcbn07IH07XG52YXIgTVJFID0gL15tW3RyYmx4eV0/JC87XG52YXIgZ2V0TWFyZ2luID0gZ2V0UHJvcHMoZnVuY3Rpb24gKGspIHsgcmV0dXJuIE1SRS50ZXN0KGspOyB9KTtcbnZhciBvbWl0TWFyZ2luID0gZ2V0UHJvcHMoZnVuY3Rpb24gKGspIHsgcmV0dXJuICFNUkUudGVzdChrKTsgfSk7XG5cbnZhciBEb3duQXJyb3cgPSBmdW5jdGlvbiAocHJvcHMpIHsgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoIFNWRywgcHJvcHMsXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudCggJ3BhdGgnLCB7IGQ6IFwiTTcgMTBsNSA1IDUtNXpcIiB9KVxuICApOyB9O1xuXG52YXIgU2VsZWN0ID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikgeyByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCggQm94LCBPYmplY3QuYXNzaWduKHt9LCBnZXRNYXJnaW4ocHJvcHMpLCB7IHN4OiB7XG4gIGRpc3BsYXk6ICdmbGV4J1xufSB9KSxcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCBCb3gsIE9iamVjdC5hc3NpZ24oe30sIHsgcmVmOiByZWYsIGFzOiBcInNlbGVjdFwiLCB2YXJpYW50OiBcInNlbGVjdFwiIH0sIG9taXRNYXJnaW4ocHJvcHMpLCB7IF9fdGhlbWVLZXk6IFwiZm9ybXNcIiwgX19jc3M6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgcDogMixcbiAgICBhcHBlYXJhbmNlOiAnbm9uZScsXG4gICAgZm9udFNpemU6ICdpbmhlcml0JyxcbiAgICBsaW5lSGVpZ2h0OiAnaW5oZXJpdCcsXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkJyxcbiAgICBib3JkZXJSYWRpdXM6IDQsXG4gICAgY29sb3I6ICdpbmhlcml0JyxcbiAgICBiZzogJ3RyYW5zcGFyZW50J1xuICB9IH0pKSxcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCBEb3duQXJyb3csIHsgc3g6IHtcbiAgICBtbDogLTI4LFxuICAgIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gICAgcG9pbnRlckV2ZW50czogJ25vbmUnXG4gIH0gfSlcbiAgKTsgfSk7XG5cbnZhciBUZXh0YXJlYSA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHsgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoIEJveCwgT2JqZWN0LmFzc2lnbih7fSwgeyByZWY6IHJlZiwgYXM6IFwidGV4dGFyZWFcIiwgdmFyaWFudDogXCJ0ZXh0YXJlYVwiIH0sIHByb3BzLCB7IF9fdGhlbWVLZXk6IFwiZm9ybXNcIiwgX19jc3M6IHtcbiAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgcDogMixcbiAgYXBwZWFyYW5jZTogJ25vbmUnLFxuICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICBsaW5lSGVpZ2h0OiAnaW5oZXJpdCcsXG4gIGJvcmRlcjogJzFweCBzb2xpZCcsXG4gIGJvcmRlclJhZGl1czogNCxcbiAgY29sb3I6ICdpbmhlcml0JyxcbiAgYmc6ICd0cmFuc3BhcmVudCdcbn0gfSkpOyB9KTtcblxuZnVuY3Rpb24gb2JqZWN0V2l0aG91dFByb3BlcnRpZXMkMiAob2JqLCBleGNsdWRlKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgayBpbiBvYmopIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrKSAmJiBleGNsdWRlLmluZGV4T2YoaykgPT09IC0xKSB0YXJnZXRba10gPSBvYmpba107IHJldHVybiB0YXJnZXQ7IH1cblxudmFyIFJhZGlvQ2hlY2tlZCA9IGZ1bmN0aW9uIChwcm9wcykgeyByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCggU1ZHLCBwcm9wcyxcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCAncGF0aCcsIHsgZDogXCJNMTIgN2MtMi43NiAwLTUgMi4yNC01IDVzMi4yNCA1IDUgNSA1LTIuMjQgNS01LTIuMjQtNS01LTV6bTAtNUM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMCAxOGMtNC40MiAwLTgtMy41OC04LThzMy41OC04IDgtOCA4IDMuNTggOCA4LTMuNTggOC04IDh6XCIgfSlcbiAgKTsgfTtcblxudmFyIFJhZGlvVW5jaGVja2VkID0gZnVuY3Rpb24gKHByb3BzKSB7IHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCBTVkcsIHByb3BzLFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoICdwYXRoJywgeyBkOiBcIk0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0wIDE4Yy00LjQyIDAtOC0zLjU4LTgtOHMzLjU4LTggOC04IDggMy41OCA4IDgtMy41OCA4LTggOHpcIiB9KVxuICApOyB9O1xuXG52YXIgUmFkaW9JY29uID0gZnVuY3Rpb24gKHByb3BzKSB7IHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCBSZWFjdC5GcmFnbWVudCwgbnVsbCxcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCBSYWRpb0NoZWNrZWQsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzLCB7IF9fY3NzOiB7XG4gICAgZGlzcGxheTogJ25vbmUnLFxuICAgICdpbnB1dDpjaGVja2VkIH4gJic6IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaydcbiAgICB9XG4gIH0gfSkpLFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoIFJhZGlvVW5jaGVja2VkLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywgeyBfX2Nzczoge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgJ2lucHV0OmNoZWNrZWQgfiAmJzoge1xuICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgfVxuICB9IH0pKVxuICApOyB9O1xuXG52YXIgUmFkaW8gPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChyZWYkMSwgcmVmKSB7XG4gIHZhciBjbGFzc05hbWUgPSByZWYkMS5jbGFzc05hbWU7XG4gIHZhciBzeCA9IHJlZiQxLnN4O1xuICB2YXIgdmFyaWFudCA9IHJlZiQxLnZhcmlhbnQ7IGlmICggdmFyaWFudCA9PT0gdm9pZCAwICkgdmFyaWFudCA9ICdyYWRpbyc7XG4gIHZhciByZXN0ID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXMkMiggcmVmJDEsIFtcImNsYXNzTmFtZVwiLCBcInN4XCIsIFwidmFyaWFudFwiXSApO1xuICB2YXIgcHJvcHMgPSByZXN0O1xuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCBCb3gsIG51bGwsXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCBCb3gsIE9iamVjdC5hc3NpZ24oe30sIHsgcmVmOiByZWYsIGFzOiBcImlucHV0XCIsIHR5cGU6IFwicmFkaW9cIiB9LCBwcm9wcywgeyBzeDoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIG9wYWNpdHk6IDAsXG4gICAgekluZGV4OiAtMSxcbiAgICB3aWR0aDogMSxcbiAgICBoZWlnaHQ6IDEsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gIH0gfSkpLFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCggQm94LCB7IGFzOiBSYWRpb0ljb24sICdhcmlhLWhpZGRlbic6IFwidHJ1ZVwiLCBfX3RoZW1lS2V5OiBcImZvcm1zXCIsIHZhcmlhbnQ6IHZhcmlhbnQsIGNsYXNzTmFtZTogY2xhc3NOYW1lLCBzeDogc3gsIF9fY3NzOiB7XG4gICAgLy8gdG9kbzogc3lzdGVtIHByb3BzPz9cbiAgICBtcjogMixcbiAgICBib3JkZXJSYWRpdXM6IDk5OTksXG4gICAgY29sb3I6ICdncmF5JyxcbiAgICAnaW5wdXQ6Y2hlY2tlZCB+ICYnOiB7XG4gICAgICBjb2xvcjogJ3ByaW1hcnknXG4gICAgfSxcbiAgICAnaW5wdXQ6Zm9jdXMgfiAmJzoge1xuICAgICAgYmc6ICdoaWdobGlnaHQnXG4gICAgfVxuICB9IH0pXG4gICAgKTtcbn0pO1xuXG5mdW5jdGlvbiBvYmplY3RXaXRob3V0UHJvcGVydGllcyQzIChvYmosIGV4Y2x1ZGUpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBrIGluIG9iaikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGspICYmIGV4Y2x1ZGUuaW5kZXhPZihrKSA9PT0gLTEpIHRhcmdldFtrXSA9IG9ialtrXTsgcmV0dXJuIHRhcmdldDsgfVxuXG52YXIgQ2hlY2tib3hDaGVja2VkID0gZnVuY3Rpb24gKHByb3BzKSB7IHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCBTVkcsIHByb3BzLFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoICdwYXRoJywgeyBkOiBcIk0xOSAzSDVjLTEuMTEgMC0yIC45LTIgMnYxNGMwIDEuMS44OSAyIDIgMmgxNGMxLjExIDAgMi0uOSAyLTJWNWMwLTEuMS0uODktMi0yLTJ6bS05IDE0bC01LTUgMS40MS0xLjQxTDEwIDE0LjE3bDcuNTktNy41OUwxOSA4bC05IDl6XCIgfSlcbiAgKTsgfTtcblxudmFyIENoZWNrYm94VW5jaGVja2VkID0gZnVuY3Rpb24gKHByb3BzKSB7IHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCBTVkcsIHByb3BzLFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoICdwYXRoJywgeyBkOiBcIk0xOSA1djE0SDVWNWgxNG0wLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yelwiIH0pXG4gICk7IH07XG5cbnZhciBDaGVja2JveEljb24gPSBmdW5jdGlvbiAocHJvcHMpIHsgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoIFJlYWN0LkZyYWdtZW50LCBudWxsLFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoIENoZWNrYm94Q2hlY2tlZCwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHsgX19jc3M6IHtcbiAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgJ2lucHV0OmNoZWNrZWQgfiAmJzoge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xuICAgIH1cbiAgfSB9KSksXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudCggQ2hlY2tib3hVbmNoZWNrZWQsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzLCB7IF9fY3NzOiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAnaW5wdXQ6Y2hlY2tlZCB+ICYnOiB7XG4gICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICB9XG4gIH0gfSkpXG4gICk7IH07XG5cbnZhciBDaGVja2JveCA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHJlZiQxLCByZWYpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHJlZiQxLmNsYXNzTmFtZTtcbiAgdmFyIHN4ID0gcmVmJDEuc3g7XG4gIHZhciB2YXJpYW50ID0gcmVmJDEudmFyaWFudDsgaWYgKCB2YXJpYW50ID09PSB2b2lkIDAgKSB2YXJpYW50ID0gJ2NoZWNrYm94JztcbiAgdmFyIHJlc3QgPSBvYmplY3RXaXRob3V0UHJvcGVydGllcyQzKCByZWYkMSwgW1wiY2xhc3NOYW1lXCIsIFwic3hcIiwgXCJ2YXJpYW50XCJdICk7XG4gIHZhciBwcm9wcyA9IHJlc3Q7XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoIEJveCwgbnVsbCxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoIEJveCwgT2JqZWN0LmFzc2lnbih7fSwgeyByZWY6IHJlZiwgYXM6IFwiaW5wdXRcIiwgdHlwZTogXCJjaGVja2JveFwiIH0sIHByb3BzLCB7IHN4OiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgb3BhY2l0eTogMCxcbiAgICB6SW5kZXg6IC0xLFxuICAgIHdpZHRoOiAxLFxuICAgIGhlaWdodDogMSxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgfSB9KSksXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCBCb3gsIHsgYXM6IENoZWNrYm94SWNvbiwgJ2FyaWEtaGlkZGVuJzogXCJ0cnVlXCIsIF9fdGhlbWVLZXk6IFwiZm9ybXNcIiwgdmFyaWFudDogdmFyaWFudCwgY2xhc3NOYW1lOiBjbGFzc05hbWUsIHN4OiBzeCwgX19jc3M6IHtcbiAgICBtcjogMixcbiAgICBib3JkZXJSYWRpdXM6IDQsXG4gICAgY29sb3I6ICdncmF5JyxcbiAgICAnaW5wdXQ6Y2hlY2tlZCB+ICYnOiB7XG4gICAgICBjb2xvcjogJ3ByaW1hcnknXG4gICAgfSxcbiAgICAnaW5wdXQ6Zm9jdXMgfiAmJzoge1xuICAgICAgY29sb3I6ICdwcmltYXJ5JyxcbiAgICAgIGJnOiAnaGlnaGxpZ2h0J1xuICAgIH1cbiAgfSB9KVxuICAgICk7XG59KTtcblxudmFyIHRodW1iID0ge1xuICBhcHBlYXJhbmNlOiAnbm9uZScsXG4gIHdpZHRoOiAxNixcbiAgaGVpZ2h0OiAxNixcbiAgYmc6ICdjdXJyZW50Y29sb3InLFxuICBib3JkZXI6IDAsXG4gIGJvcmRlclJhZGl1czogOTk5OSxcbiAgdmFyaWFudDogJ2Zvcm1zLnNsaWRlci50aHVtYidcbn07XG52YXIgU2xpZGVyID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikgeyByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCggQm94LCBPYmplY3QuYXNzaWduKHt9LCB7IHJlZjogcmVmLCBhczogXCJpbnB1dFwiLCB0eXBlOiBcInJhbmdlXCIsIHZhcmlhbnQ6IFwic2xpZGVyXCIgfSwgcHJvcHMsIHsgX190aGVtZUtleTogXCJmb3Jtc1wiLCBfX2Nzczoge1xuICBkaXNwbGF5OiAnYmxvY2snLFxuICB3aWR0aDogJzEwMCUnLFxuICBoZWlnaHQ6IDQsXG4gIG15OiAyLFxuICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgYXBwZWFyYW5jZTogJ25vbmUnLFxuICBib3JkZXJSYWRpdXM6IDk5OTksXG4gIGNvbG9yOiAnaW5oZXJpdCcsXG4gIGJnOiAnZ3JheScsXG4gICc6Zm9jdXMnOiB7XG4gICAgb3V0bGluZTogJ25vbmUnLFxuICAgIGNvbG9yOiAncHJpbWFyeSdcbiAgfSxcbiAgJyY6Oi13ZWJraXQtc2xpZGVyLXRodW1iJzogdGh1bWIsXG4gICcmOjotbW96LXJhbmdlLXRodW1iJzogdGh1bWIsXG4gICcmOjotbXMtdGh1bWInOiB0aHVtYlxufSB9KSk7IH0pO1xuXG5mdW5jdGlvbiBvYmplY3RXaXRob3V0UHJvcGVydGllcyQ0IChvYmosIGV4Y2x1ZGUpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBrIGluIG9iaikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGspICYmIGV4Y2x1ZGUuaW5kZXhPZihrKSA9PT0gLTEpIHRhcmdldFtrXSA9IG9ialtrXTsgcmV0dXJuIHRhcmdldDsgfVxudmFyIEZpZWxkID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocmVmJDEsIHJlZikge1xuICB2YXIgQ29udHJvbCA9IHJlZiQxLmFzOyBpZiAoIENvbnRyb2wgPT09IHZvaWQgMCApIENvbnRyb2wgPSBJbnB1dDtcbiAgdmFyIGxhYmVsID0gcmVmJDEubGFiZWw7XG4gIHZhciBuYW1lID0gcmVmJDEubmFtZTtcbiAgdmFyIHJlc3QgPSBvYmplY3RXaXRob3V0UHJvcGVydGllcyQ0KCByZWYkMSwgW1wiYXNcIiwgXCJsYWJlbFwiLCBcIm5hbWVcIl0gKTtcbiAgdmFyIHByb3BzID0gcmVzdDtcblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCggQm94LCBnZXRNYXJnaW4ocHJvcHMpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCBMYWJlbCwgeyBodG1sRm9yOiBuYW1lIH0sIGxhYmVsKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCggQ29udHJvbCwgT2JqZWN0LmFzc2lnbih7fSwgeyByZWY6IHJlZiwgaWQ6IG5hbWUsIG5hbWU6IG5hbWUgfSwgb21pdE1hcmdpbihwcm9wcykpKVxuICAgICAgKTtcbn0pO1xuXG52YXIgUHJvZ3Jlc3MgPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7IHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCBCb3gsIE9iamVjdC5hc3NpZ24oe30sIHsgcmVmOiByZWYsIGFzOiBcInByb2dyZXNzXCIsIHZhcmlhbnQ6IFwic3R5bGVzLnByb2dyZXNzXCIgfSwgcHJvcHMsIHsgX19jc3M6IHtcbiAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgaGVpZ2h0OiAnNHB4JyxcbiAgbWFyZ2luOiAwLFxuICBwYWRkaW5nOiAwLFxuICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gIGFwcGVhcmFuY2U6ICdub25lJyxcbiAgY29sb3I6ICdwcmltYXJ5JyxcbiAgYmc6ICdncmF5JyxcbiAgYm9yZGVyUmFkaXVzOiA5OTk5LFxuICBib3JkZXI6ICdub25lJyxcbiAgJyY6Oi13ZWJraXQtcHJvZ3Jlc3MtYmFyJzoge1xuICAgIGJnOiAndHJhbnNwYXJlbnQnXG4gIH0sXG4gICcmOjotd2Via2l0LXByb2dyZXNzLXZhbHVlJzoge1xuICAgIGJnOiAnY3VycmVudGNvbG9yJ1xuICB9LFxuICAnJjo6LW1vei1wcm9ncmVzcy1iYXInOiB7XG4gICAgYmc6ICdjdXJyZW50Y29sb3InXG4gIH1cbn0gfSkpOyB9KTtcblxuZnVuY3Rpb24gb2JqZWN0V2l0aG91dFByb3BlcnRpZXMkNSAob2JqLCBleGNsdWRlKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgayBpbiBvYmopIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrKSAmJiBleGNsdWRlLmluZGV4T2YoaykgPT09IC0xKSB0YXJnZXRba10gPSBvYmpba107IHJldHVybiB0YXJnZXQ7IH1cbnZhciBEb251dCA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHJlZiQxLCByZWYpIHtcbiAgdmFyIHNpemUgPSByZWYkMS5zaXplOyBpZiAoIHNpemUgPT09IHZvaWQgMCApIHNpemUgPSAxMjg7XG4gIHZhciBzdHJva2VXaWR0aCA9IHJlZiQxLnN0cm9rZVdpZHRoOyBpZiAoIHN0cm9rZVdpZHRoID09PSB2b2lkIDAgKSBzdHJva2VXaWR0aCA9IDI7XG4gIHZhciB2YWx1ZSA9IHJlZiQxLnZhbHVlOyBpZiAoIHZhbHVlID09PSB2b2lkIDAgKSB2YWx1ZSA9IDA7XG4gIHZhciBtaW4gPSByZWYkMS5taW47IGlmICggbWluID09PSB2b2lkIDAgKSBtaW4gPSAwO1xuICB2YXIgbWF4ID0gcmVmJDEubWF4OyBpZiAoIG1heCA9PT0gdm9pZCAwICkgbWF4ID0gMTtcbiAgdmFyIHRpdGxlID0gcmVmJDEudGl0bGU7XG4gIHZhciByZXN0ID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXMkNSggcmVmJDEsIFtcInNpemVcIiwgXCJzdHJva2VXaWR0aFwiLCBcInZhbHVlXCIsIFwibWluXCIsIFwibWF4XCIsIFwidGl0bGVcIl0gKTtcbiAgdmFyIHByb3BzID0gcmVzdDtcblxuICB2YXIgciA9IDE2IC0gc3Ryb2tlV2lkdGg7XG4gIHZhciBDID0gMiAqIHIgKiBNYXRoLlBJO1xuICB2YXIgb2Zmc2V0ID0gQyAtICh2YWx1ZSAtIG1pbikgLyAobWF4IC0gbWluKSAqIEM7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCBCb3gsIE9iamVjdC5hc3NpZ24oe30sIHsgcmVmOiByZWYsIGFzOiBcInN2Z1wiLCB2aWV3Qm94OiBcIjAgMCAzMiAzMlwiLCB3aWR0aDogc2l6ZSwgaGVpZ2h0OiBzaXplLCBzdHJva2VXaWR0aDogc3Ryb2tlV2lkdGgsIGZpbGw6IFwibm9uZVwiLCBzdHJva2U6IFwiY3VycmVudGNvbG9yXCIsIHJvbGU6IFwiaW1nXCIsICdhcmlhLXZhbHVlbm93JzogdmFsdWUsICdhcmlhLXZhbHVlbWluJzogbWluLCAnYXJpYS12YWx1ZW1heCc6IG1heCB9LCBwcm9wcywgeyBfX2Nzczoge1xuICAgIGNvbG9yOiAncHJpbWFyeSdcbiAgfSB9KSxcbiAgICAgICAgdGl0bGUgJiYgUmVhY3QuY3JlYXRlRWxlbWVudCggJ3RpdGxlJywgbnVsbCwgdGl0bGUgKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCggJ2NpcmNsZScsIHsgY3g6IDE2LCBjeTogMTYsIHI6IHIsIG9wYWNpdHk6IDEgLyA4IH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCAnY2lyY2xlJywgeyBjeDogMTYsIGN5OiAxNiwgcjogciwgc3Ryb2tlRGFzaGFycmF5OiBDLCBzdHJva2VEYXNob2Zmc2V0OiBvZmZzZXQsIHRyYW5zZm9ybTogXCJyb3RhdGUoLTkwIDE2IDE2KVwiIH0pXG4gICAgICApO1xufSk7XG5cbmZ1bmN0aW9uIG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJDYgKG9iaiwgZXhjbHVkZSkgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGsgaW4gb2JqKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaykgJiYgZXhjbHVkZS5pbmRleE9mKGspID09PSAtMSkgdGFyZ2V0W2tdID0gb2JqW2tdOyByZXR1cm4gdGFyZ2V0OyB9XG52YXIgc3BpbiA9IGtleWZyYW1lcyh7XG4gIGZyb206IHtcbiAgICB0cmFuc2Zvcm06ICdyb3RhdGUoMGRlZyknXG4gIH0sXG4gIHRvOiB7XG4gICAgdHJhbnNmb3JtOiAncm90YXRlKDM2MGRlZyknXG4gIH1cbn0pO1xudmFyIFNwaW5uZXIgPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChyZWYkMSwgcmVmKSB7XG4gIHZhciBzaXplID0gcmVmJDEuc2l6ZTsgaWYgKCBzaXplID09PSB2b2lkIDAgKSBzaXplID0gNDg7XG4gIHZhciBzdHJva2VXaWR0aCA9IHJlZiQxLnN0cm9rZVdpZHRoOyBpZiAoIHN0cm9rZVdpZHRoID09PSB2b2lkIDAgKSBzdHJva2VXaWR0aCA9IDQ7XG4gIHZhciB0aXRsZSA9IHJlZiQxLnRpdGxlOyBpZiAoIHRpdGxlID09PSB2b2lkIDAgKSB0aXRsZSA9ICdMb2FkaW5nLi4uJztcbiAgdmFyIGR1cmF0aW9uID0gcmVmJDEuZHVyYXRpb247IGlmICggZHVyYXRpb24gPT09IHZvaWQgMCApIGR1cmF0aW9uID0gNTAwO1xuICB2YXIgcmVzdCA9IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJDYoIHJlZiQxLCBbXCJzaXplXCIsIFwic3Ryb2tlV2lkdGhcIiwgXCJtYXhcIiwgXCJ0aXRsZVwiLCBcImR1cmF0aW9uXCJdICk7XG4gIHZhciBwcm9wcyA9IHJlc3Q7XG5cbiAgdmFyIHIgPSAxNiAtIHN0cm9rZVdpZHRoO1xuICB2YXIgQyA9IDIgKiByICogTWF0aC5QSTtcbiAgdmFyIG9mZnNldCA9IEMgLSAxIC8gNCAqIEM7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCBCb3gsIE9iamVjdC5hc3NpZ24oe30sIHsgcmVmOiByZWYsIGFzOiBcInN2Z1wiLCB2aWV3Qm94OiBcIjAgMCAzMiAzMlwiLCB3aWR0aDogc2l6ZSwgaGVpZ2h0OiBzaXplLCBzdHJva2VXaWR0aDogc3Ryb2tlV2lkdGgsIGZpbGw6IFwibm9uZVwiLCBzdHJva2U6IFwiY3VycmVudGNvbG9yXCIsIHJvbGU6IFwiaW1nXCIgfSwgcHJvcHMsIHsgX19jc3M6IHtcbiAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgIG92ZXJmbG93OiAndmlzaWJsZSdcbiAgfSB9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCggJ3RpdGxlJywgbnVsbCwgdGl0bGUgKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCggJ2NpcmNsZScsIHsgY3g6IDE2LCBjeTogMTYsIHI6IHIsIG9wYWNpdHk6IDEgLyA4IH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCBCb3gsIHsgYXM6IFwiY2lyY2xlXCIsIGN4OiAxNiwgY3k6IDE2LCByOiByLCBzdHJva2VEYXNoYXJyYXk6IEMsIHN0cm9rZURhc2hvZmZzZXQ6IG9mZnNldCwgX19jc3M6IHtcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzUwJSA1MCUnLFxuICAgICAgYW5pbWF0aW9uTmFtZTogc3Bpbi50b1N0cmluZygpLFxuICAgICAgYW5pbWF0aW9uVGltaW5nRnVuY3Rpb246ICdsaW5lYXInLFxuICAgICAgYW5pbWF0aW9uRHVyYXRpb246IGR1cmF0aW9uICsgJ21zJyxcbiAgICAgIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiAnaW5maW5pdGUnXG4gICAgfSB9KVxuICAgICAgKTtcbn0pO1xuXG5mdW5jdGlvbiBvYmplY3RXaXRob3V0UHJvcGVydGllcyQ3IChvYmosIGV4Y2x1ZGUpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBrIGluIG9iaikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGspICYmIGV4Y2x1ZGUuaW5kZXhPZihrKSA9PT0gLTEpIHRhcmdldFtrXSA9IG9ialtrXTsgcmV0dXJuIHRhcmdldDsgfVxudmFyIEF2YXRhciA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHJlZiQxLCByZWYpIHtcbiAgdmFyIHNpemUgPSByZWYkMS5zaXplOyBpZiAoIHNpemUgPT09IHZvaWQgMCApIHNpemUgPSA0ODtcbiAgdmFyIHJlc3QgPSBvYmplY3RXaXRob3V0UHJvcGVydGllcyQ3KCByZWYkMSwgW1wic2l6ZVwiXSApO1xuICB2YXIgcHJvcHMgPSByZXN0O1xuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCBJbWFnZSwgT2JqZWN0LmFzc2lnbih7fSwgeyByZWY6IHJlZiwgd2lkdGg6IHNpemUsIGhlaWdodDogc2l6ZSwgdmFyaWFudDogXCJhdmF0YXJcIiB9LCBwcm9wcywgeyBfX2Nzczoge1xuICBib3JkZXJSYWRpdXM6IDk5OTlcbn0gfSkpO1xufSk7XG5cbnZhciBCYWRnZSA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHsgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoIEJveCwgT2JqZWN0LmFzc2lnbih7fSwgeyByZWY6IHJlZiwgdmFyaWFudDogXCJwcmltYXJ5XCIgfSwgcHJvcHMsIHsgX190aGVtZUtleTogXCJiYWRnZXNcIiwgX19jc3M6IHtcbiAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gIHZlcnRpY2FsQWxpZ246ICdiYXNlbGluZScsXG4gIGZvbnRTaXplOiAwLFxuICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICBweDogMSxcbiAgYm9yZGVyUmFkaXVzOiAyLFxuICBjb2xvcjogJ3doaXRlJyxcbiAgYmc6ICdwcmltYXJ5J1xufSB9KSk7IH0pO1xuXG5mdW5jdGlvbiBvYmplY3RXaXRob3V0UHJvcGVydGllcyQ4IChvYmosIGV4Y2x1ZGUpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBrIGluIG9iaikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGspICYmIGV4Y2x1ZGUuaW5kZXhPZihrKSA9PT0gLTEpIHRhcmdldFtrXSA9IG9ialtrXTsgcmV0dXJuIHRhcmdldDsgfVxudmFyIEljb25CdXR0b24gPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChyZWYkMSwgcmVmKSB7XG4gIHZhciBzaXplID0gcmVmJDEuc2l6ZTsgaWYgKCBzaXplID09PSB2b2lkIDAgKSBzaXplID0gMzI7XG4gIHZhciByZXN0ID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXMkOCggcmVmJDEsIFtcInNpemVcIl0gKTtcbiAgdmFyIHByb3BzID0gcmVzdDtcblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCggQm94LCBPYmplY3QuYXNzaWduKHt9LCB7IHJlZjogcmVmLCBhczogXCJidXR0b25cIiwgdmFyaWFudDogXCJpY29uXCIgfSwgcHJvcHMsIHsgX190aGVtZUtleTogXCJidXR0b25zXCIsIF9fY3NzOiB7XG4gIGFwcGVhcmFuY2U6ICdub25lJyxcbiAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgcGFkZGluZzogMSxcbiAgd2lkdGg6IHNpemUsXG4gIGhlaWdodDogc2l6ZSxcbiAgY29sb3I6ICdpbmhlcml0JyxcbiAgYmc6ICd0cmFuc3BhcmVudCcsXG4gIGJvcmRlcjogJ25vbmUnLFxuICBib3JkZXJSYWRpdXM6IDRcbn0gfSkpO1xufSk7XG5cbmZ1bmN0aW9uIG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJDkgKG9iaiwgZXhjbHVkZSkgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGsgaW4gb2JqKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaykgJiYgZXhjbHVkZS5pbmRleE9mKGspID09PSAtMSkgdGFyZ2V0W2tdID0gb2JqW2tdOyByZXR1cm4gdGFyZ2V0OyB9XG52YXIgeCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoICdzdmcnLCB7IHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIHdpZHRoOiBcIjI0XCIsIGhlaWdodDogXCIyNFwiLCBmaWxsOiBcImN1cnJlbnRjb2xvclwiLCB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiIH0sXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudCggJ3BhdGgnLCB7IGQ6IFwiTTE5IDYuNDFMMTcuNTkgNSAxMiAxMC41OSA2LjQxIDUgNSA2LjQxIDEwLjU5IDEyIDUgMTcuNTkgNi40MSAxOSAxMiAxMy40MSAxNy41OSAxOSAxOSAxNy41OSAxMy40MSAxMnpcIiB9KVxuICApO1xudmFyIENsb3NlID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocmVmJDEsIHJlZikge1xuICB2YXIgcmVzdCA9IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJDkoIHJlZiQxLCBbXCJzaXplXCJdICk7XG4gIHZhciBwcm9wcyA9IHJlc3Q7XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoIEljb25CdXR0b24sIE9iamVjdC5hc3NpZ24oe30sIHsgcmVmOiByZWYsIHRpdGxlOiBcIkNsb3NlXCIsICdhcmlhLWxhYmVsJzogXCJDbG9zZVwiLCB2YXJpYW50OiBcImNsb3NlXCIgfSwgcHJvcHMsIHsgY2hpbGRyZW46IHggfSkpO1xufSk7XG5cbnZhciBBbGVydCA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHsgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoIEJveCwgT2JqZWN0LmFzc2lnbih7fSwgeyByZWY6IHJlZiwgdmFyaWFudDogXCJwcmltYXJ5XCIgfSwgcHJvcHMsIHsgX190aGVtZUtleTogXCJhbGVydHNcIiwgX19jc3M6IHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgcHg6IDMsXG4gIHB5OiAyLFxuICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gIGNvbG9yOiAnd2hpdGUnLFxuICBiZzogJ3ByaW1hcnknLFxuICBib3JkZXJSYWRpdXM6IDRcbn0gfSkpOyB9KTtcblxudmFyIERpdmlkZXIgPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7IHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCBCb3gsIE9iamVjdC5hc3NpZ24oe30sIHsgcmVmOiByZWYsIGFzOiBcImhyXCIsIHZhcmlhbnQ6IFwic3R5bGVzLmhyXCIgfSwgcHJvcHMsIHsgX19jc3M6IHtcbiAgY29sb3I6ICdncmF5JyxcbiAgbTogMCxcbiAgbXk6IDIsXG4gIGJvcmRlcjogMCxcbiAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkJ1xufSB9KSk7IH0pO1xuXG5mdW5jdGlvbiBvYmplY3RXaXRob3V0UHJvcGVydGllcyRhIChvYmosIGV4Y2x1ZGUpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBrIGluIG9iaikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGspICYmIGV4Y2x1ZGUuaW5kZXhPZihrKSA9PT0gLTEpIHRhcmdldFtrXSA9IG9ialtrXTsgcmV0dXJuIHRhcmdldDsgfVxudmFyIEVtYmVkID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocmVmJDEsIHJlZikge1xuICB2YXIgcmF0aW8gPSByZWYkMS5yYXRpbzsgaWYgKCByYXRpbyA9PT0gdm9pZCAwICkgcmF0aW8gPSAxNiAvIDk7XG4gIHZhciBzcmMgPSByZWYkMS5zcmM7XG4gIHZhciBmcmFtZUJvcmRlciA9IHJlZiQxLmZyYW1lQm9yZGVyOyBpZiAoIGZyYW1lQm9yZGVyID09PSB2b2lkIDAgKSBmcmFtZUJvcmRlciA9IDA7XG4gIHZhciBhbGxvd0Z1bGxTY3JlZW4gPSByZWYkMS5hbGxvd0Z1bGxTY3JlZW47IGlmICggYWxsb3dGdWxsU2NyZWVuID09PSB2b2lkIDAgKSBhbGxvd0Z1bGxTY3JlZW4gPSB0cnVlO1xuICB2YXIgd2lkdGggPSByZWYkMS53aWR0aDsgaWYgKCB3aWR0aCA9PT0gdm9pZCAwICkgd2lkdGggPSA1NjA7XG4gIHZhciBoZWlnaHQgPSByZWYkMS5oZWlnaHQ7IGlmICggaGVpZ2h0ID09PSB2b2lkIDAgKSBoZWlnaHQgPSAzMTU7XG4gIHZhciBhbGxvdyA9IHJlZiQxLmFsbG93O1xuICB2YXIgcmVzdCA9IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJGEoIHJlZiQxLCBbXCJyYXRpb1wiLCBcInNyY1wiLCBcImZyYW1lQm9yZGVyXCIsIFwiYWxsb3dGdWxsU2NyZWVuXCIsIFwid2lkdGhcIiwgXCJoZWlnaHRcIiwgXCJhbGxvd1wiXSApO1xuICB2YXIgcHJvcHMgPSByZXN0O1xuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCBCb3gsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzLCB7IF9fY3NzOiB7XG4gIHdpZHRoOiAnMTAwJScsXG4gIGhlaWdodDogMCxcbiAgcGFkZGluZ0JvdHRvbTogMTAwIC8gcmF0aW8gKyAnJScsXG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICBvdmVyZmxvdzogJ2hpZGRlbidcbn0gfSksXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCBCb3gsIHsgcmVmOiByZWYsIGFzOiBcImlmcmFtZVwiLCBzcmM6IHNyYywgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCwgZnJhbWVCb3JkZXI6IGZyYW1lQm9yZGVyLCBhbGxvd0Z1bGxTY3JlZW46IGFsbG93RnVsbFNjcmVlbiwgYWxsb3c6IGFsbG93LCBfX2Nzczoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgdG9wOiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICBsZWZ0OiAwLFxuICAgIGJvcmRlcjogMFxuICB9IH0pXG4gICAgKTtcbn0pO1xuXG5mdW5jdGlvbiBvYmplY3RXaXRob3V0UHJvcGVydGllcyRiIChvYmosIGV4Y2x1ZGUpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBrIGluIG9iaikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGspICYmIGV4Y2x1ZGUuaW5kZXhPZihrKSA9PT0gLTEpIHRhcmdldFtrXSA9IG9ialtrXTsgcmV0dXJuIHRhcmdldDsgfVxudmFyIEFzcGVjdFJhdGlvID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocmVmJDEsIHJlZikge1xuICB2YXIgcmF0aW8gPSByZWYkMS5yYXRpbzsgaWYgKCByYXRpbyA9PT0gdm9pZCAwICkgcmF0aW8gPSA0IC8gMztcbiAgdmFyIGNoaWxkcmVuID0gcmVmJDEuY2hpbGRyZW47XG4gIHZhciByZXN0ID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXMkYiggcmVmJDEsIFtcInJhdGlvXCIsIFwiY2hpbGRyZW5cIl0gKTtcbiAgdmFyIHByb3BzID0gcmVzdDtcblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCggQm94LCB7IHJlZjogcmVmLCBzeDoge1xuICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgb3ZlcmZsb3c6ICdoaWRkZW4nXG59IH0sXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCBCb3gsIHsgc3g6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogMCxcbiAgICBwYWRkaW5nQm90dG9tOiAxMDAgLyByYXRpbyArICclJ1xuICB9IH0pLFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCggQm94LCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywgeyBfX2Nzczoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogMCxcbiAgICByaWdodDogMCxcbiAgICBib3R0b206IDAsXG4gICAgbGVmdDogMFxuICB9IH0pLFxuICAgICAgICBjaGlsZHJlblxuICAgICAgKVxuICAgICk7XG59KTtcblxuZnVuY3Rpb24gb2JqZWN0V2l0aG91dFByb3BlcnRpZXMkYyAob2JqLCBleGNsdWRlKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgayBpbiBvYmopIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrKSAmJiBleGNsdWRlLmluZGV4T2YoaykgPT09IC0xKSB0YXJnZXRba10gPSBvYmpba107IHJldHVybiB0YXJnZXQ7IH1cbnZhciBBc3BlY3RJbWFnZSA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHJlZiQxLCByZWYpIHtcbiAgdmFyIHJhdGlvID0gcmVmJDEucmF0aW87XG4gIHZhciByZXN0ID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXMkYyggcmVmJDEsIFtcInJhdGlvXCJdICk7XG4gIHZhciBwcm9wcyA9IHJlc3Q7XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoIEFzcGVjdFJhdGlvLCB7IHJhdGlvOiByYXRpbyB9LFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoIEltYWdlLCBPYmplY3QuYXNzaWduKHt9LCB7IHJlZjogcmVmIH0sIHByb3BzLCB7IF9fY3NzOiB7XG4gICAgb2JqZWN0Rml0OiAnY292ZXInXG4gIH0gfSkpXG4gICk7XG59KTtcblxudmFyIENvbnRhaW5lciA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHsgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoIEJveCwgT2JqZWN0LmFzc2lnbih7fSwgeyByZWY6IHJlZiwgdmFyaWFudDogXCJjb250YWluZXJcIiB9LCBwcm9wcywgeyBfX3RoZW1lS2V5OiBcImxheW91dFwiLCBfX2Nzczoge1xuICB3aWR0aDogJzEwMCUnLFxuICBtYXhXaWR0aDogJ2NvbnRhaW5lcicsXG4gIG14OiAnYXV0bydcbn0gfSkpOyB9KTtcblxudmFyIE5hdkxpbmsgPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7IHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCBMaW5rLCBPYmplY3QuYXNzaWduKHt9LCB7IHJlZjogcmVmLCB2YXJpYW50OiBcIm5hdlwiIH0sIHByb3BzLCB7IF9fY3NzOiB7XG4gIGNvbG9yOiAnaW5oZXJpdCcsXG4gIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICcmOmhvdmVyLCAmOmZvY3VzLCAmLmFjdGl2ZSc6IHtcbiAgICBjb2xvcjogJ3ByaW1hcnknXG4gIH1cbn0gfSkpOyB9KTtcblxudmFyIE1lc3NhZ2UgPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7IHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCBCb3gsIE9iamVjdC5hc3NpZ24oe30sIHsgcmVmOiByZWYgfSwgcHJvcHMsIHsgX190aGVtZUtleTogXCJtZXNzYWdlc1wiLCBfX2Nzczoge1xuICBwYWRkaW5nOiAzLFxuICBwYWRkaW5nTGVmdDogZnVuY3Rpb24gKHQpIHsgcmV0dXJuIHQuc3BhY2VbM10gLSB0LnNwYWNlWzFdOyB9LFxuICBib3JkZXJMZWZ0V2lkdGg6IGZ1bmN0aW9uICh0KSB7IHJldHVybiB0LnNwYWNlWzFdOyB9LFxuICBib3JkZXJMZWZ0U3R5bGU6ICdzb2xpZCcsXG4gIGJvcmRlckxlZnRDb2xvcjogJ3ByaW1hcnknLFxuICBib3JkZXJSYWRpdXM6IDQsXG4gIGJnOiAnaGlnaGxpZ2h0J1xufSB9KSk7IH0pO1xuXG52YXIgTWVudUljb24gPSBmdW5jdGlvbiAocmVmKSB7XG4gIHZhciBzaXplID0gcmVmLnNpemU7IGlmICggc2l6ZSA9PT0gdm9pZCAwICkgc2l6ZSA9IDI0O1xuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCBCb3gsIHsgYXM6IFwic3ZnXCIsIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIHdpZHRoOiBzaXplLCBoZWlnaHQ6IHNpemUsIGZpbGw6IFwiY3VycmVudGNvbG9yXCIsIHZpZXdCb3g6IFwiMCAwIDI0IDI0XCIsIHN4OiB7XG4gIGRpc3BsYXk6ICdibG9jaycsXG4gIG1hcmdpbjogMFxufSB9LFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoICdwYXRoJywgeyBkOiBcIk0zIDE4aDE4di0ySDN2MnptMC01aDE4di0ySDN2MnptMC03djJoMThWNkgzelwiIH0pXG4gICk7XG59O1xudmFyIE1lbnVCdXR0b24gPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7IHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCBJY29uQnV0dG9uLCBPYmplY3QuYXNzaWduKHt9LCB7IHJlZjogcmVmLCB0aXRsZTogXCJNZW51XCIsICdhcmlhLWxhYmVsJzogXCJUb2dnbGUgTWVudVwiLCB2YXJpYW50OiBcIm1lbnVcIiB9LCBwcm9wcyksXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudCggTWVudUljb24sIG51bGwgKVxuICApOyB9KTtcblxuZXhwb3J0IHsgQm94LCBGbGV4LCBHcmlkLCBCdXR0b24sIExpbmssIFRleHQsIEhlYWRpbmcsIEltYWdlLCBDYXJkLCBMYWJlbCwgSW5wdXQsIFNlbGVjdCwgVGV4dGFyZWEsIFJhZGlvLCBDaGVja2JveCwgU2xpZGVyLCBGaWVsZCwgUHJvZ3Jlc3MsIERvbnV0LCBTcGlubmVyLCBBdmF0YXIsIEJhZGdlLCBDbG9zZSwgQWxlcnQsIERpdmlkZXIsIEVtYmVkLCBBc3BlY3RSYXRpbywgQXNwZWN0SW1hZ2UsIENvbnRhaW5lciwgTmF2TGluaywgTWVzc2FnZSwgSWNvbkJ1dHRvbiwgTWVudUJ1dHRvbiB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXNtLmpzLm1hcFxuIiwiaW1wb3J0IHsganN4LCBUaGVtZUNvbnRleHQgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0B0aGVtZS11aS9jc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBkZWVwbWVyZ2UgZnJvbSAnZGVlcG1lcmdlJztcbmltcG9ydCBwYWNrYWdlSW5mbyBmcm9tICdAZW1vdGlvbi9jb3JlL3BhY2thZ2UuanNvbic7XG5cbnZhciBfX0VNT1RJT05fVkVSU0lPTl9fID0gcGFja2FnZUluZm8udmVyc2lvbjtcblxudmFyIGdldENTUyA9IGZ1bmN0aW9uIChwcm9wcykge1xuICBpZiAoIXByb3BzLnN4ICYmICFwcm9wcy5jc3MpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfVxuICByZXR1cm4gZnVuY3Rpb24gKHRoZW1lKSB7XG4gICAgdmFyIHN0eWxlcyA9IGNzcyhwcm9wcy5zeCkodGhlbWUpO1xuICAgIHZhciByYXcgPSB0eXBlb2YgcHJvcHMuY3NzID09PSAnZnVuY3Rpb24nID8gcHJvcHMuY3NzKHRoZW1lKSA6IHByb3BzLmNzcztcbiAgICByZXR1cm4gW3N0eWxlcywgcmF3XTtcbiAgfTtcbn07XG5cbnZhciBwYXJzZVByb3BzID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gIGlmICghcHJvcHMpIHsgcmV0dXJuIG51bGw7IH1cbiAgdmFyIG5leHQgPSB7fTtcblxuICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICBpZiAoa2V5ID09PSAnc3gnKSB7IGNvbnRpbnVlOyB9XG4gICAgbmV4dFtrZXldID0gcHJvcHNba2V5XTtcbiAgfVxuXG4gIHZhciBjc3MkJDEgPSBnZXRDU1MocHJvcHMpO1xuICBpZiAoY3NzJCQxKSB7IG5leHQuY3NzID0gY3NzJCQxOyB9XG4gIHJldHVybiBuZXh0O1xufTtcblxudmFyIGpzeCQxID0gZnVuY3Rpb24gKHR5cGUsIHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcbiAgd2hpbGUgKCBsZW4tLSA+IDAgKSBjaGlsZHJlblsgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiArIDIgXTtcblxuICByZXR1cm4ganN4LmFwcGx5KHVuZGVmaW5lZCwgW3R5cGUsIHBhcnNlUHJvcHMocHJvcHMpIF0uY29uY2F0KCBjaGlsZHJlbikpO1xufTtcbnZhciBDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7XG4gIF9fRU1PVElPTl9WRVJTSU9OX186IF9fRU1PVElPTl9WRVJTSU9OX18sXG4gIHRoZW1lOiBudWxsXG59KTtcbnZhciB1c2VUaGVtZVVJID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gUmVhY3QudXNlQ29udGV4dChDb250ZXh0KTsgfTtcbnZhciBjYW5Vc2VTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG52YXIgUkVBQ1RfRUxFTUVOVCA9IGNhblVzZVN5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcbnZhciBGT1JXQVJEX1JFRiA9IGNhblVzZVN5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhYzc7XG5cbnZhciBpc01lcmdlYWJsZU9iamVjdCA9IGZ1bmN0aW9uIChuKSB7XG4gIHJldHVybiAhIW4gJiYgdHlwZW9mIG4gPT09ICdvYmplY3QnICYmIG4uJCR0eXBlb2YgIT09IFJFQUNUX0VMRU1FTlQgJiYgbi4kJHR5cGVvZiAhPT0gRk9SV0FSRF9SRUY7XG59O1xuXG52YXIgYXJyYXlNZXJnZSA9IGZ1bmN0aW9uIChkZXN0aW5hdGlvbkFycmF5LCBzb3VyY2VBcnJheSwgb3B0aW9ucykgeyByZXR1cm4gc291cmNlQXJyYXk7IH07XG5cbnZhciBtZXJnZSA9IGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBkZWVwbWVyZ2UoYSwgYiwge1xuICBpc01lcmdlYWJsZU9iamVjdDogaXNNZXJnZWFibGVPYmplY3QsXG4gIGFycmF5TWVyZ2U6IGFycmF5TWVyZ2Vcbn0pOyB9O1xuXG5tZXJnZS5hbGwgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgcmV0dXJuIGRlZXBtZXJnZS5hbGwoYXJncywge1xuICBpc01lcmdlYWJsZU9iamVjdDogaXNNZXJnZWFibGVPYmplY3QsXG4gIGFycmF5TWVyZ2U6IGFycmF5TWVyZ2Vcbn0pO1xufTtcblxudmFyIEJhc2VQcm92aWRlciA9IGZ1bmN0aW9uIChyZWYpIHtcbiAgdmFyIGNvbnRleHQgPSByZWYuY29udGV4dDtcbiAgdmFyIGNoaWxkcmVuID0gcmVmLmNoaWxkcmVuO1xuXG4gIHJldHVybiBqc3gkMShUaGVtZUNvbnRleHQuUHJvdmlkZXIsIHtcbiAgdmFsdWU6IGNvbnRleHQudGhlbWVcbn0sIGpzeCQxKENvbnRleHQuUHJvdmlkZXIsIHtcbiAgdmFsdWU6IGNvbnRleHQsXG4gIGNoaWxkcmVuOiBjaGlsZHJlblxufSkpO1xufTtcblxudmFyIFRoZW1lUHJvdmlkZXIgPSBmdW5jdGlvbiAocmVmKSB7XG4gIHZhciB0aGVtZSA9IHJlZi50aGVtZTtcbiAgdmFyIGNoaWxkcmVuID0gcmVmLmNoaWxkcmVuO1xuXG4gIHZhciBvdXRlciA9IHVzZVRoZW1lVUkoKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChvdXRlci5fX0VNT1RJT05fVkVSU0lPTl9fICE9PSBfX0VNT1RJT05fVkVSU0lPTl9fKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ011bHRpcGxlIHZlcnNpb25zIG9mIEVtb3Rpb24gZGV0ZWN0ZWQsJywgJ2FuZCB0aGVtaW5nIG1pZ2h0IG5vdCB3b3JrIGFzIGV4cGVjdGVkLicsICdQbGVhc2UgZW5zdXJlIHRoZXJlIGlzIG9ubHkgb25lIGNvcHkgb2YgQGVtb3Rpb24vY29yZSBpbnN0YWxsZWQgaW4geW91ciBhcHBsaWNhdGlvbi4nKTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29udGV4dCA9IHR5cGVvZiB0aGVtZSA9PT0gJ2Z1bmN0aW9uJyA/IE9iamVjdC5hc3NpZ24oe30sIG91dGVyLFxuICAgIHt0aGVtZTogdGhlbWUob3V0ZXIudGhlbWUpfSkgOiBtZXJnZS5hbGwoe30sIG91dGVyLCB7XG4gICAgdGhlbWU6IHRoZW1lXG4gIH0pO1xuICByZXR1cm4ganN4JDEoQmFzZVByb3ZpZGVyLCB7XG4gICAgY29udGV4dDogY29udGV4dCxcbiAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgfSk7XG59O1xuXG5leHBvcnQgeyBqc3gkMSBhcyBqc3gsIENvbnRleHQsIHVzZVRoZW1lVUksIG1lcmdlLCBUaGVtZVByb3ZpZGVyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lc20uanMubWFwXG4iLCJ2YXIgZ2V0ID0gZnVuY3Rpb24gKG9iaiwga2V5LCBkZWYsIHAsIHVuZGVmKSB7XG4gIGtleSA9IGtleSAmJiBrZXkuc3BsaXQgPyBrZXkuc3BsaXQoJy4nKSA6IFtrZXldO1xuXG4gIGZvciAocCA9IDA7IHAgPCBrZXkubGVuZ3RoOyBwKyspIHtcbiAgICBvYmogPSBvYmogPyBvYmpba2V5W3BdXSA6IHVuZGVmO1xuICB9XG5cbiAgcmV0dXJuIG9iaiA9PT0gdW5kZWYgPyBkZWYgOiBvYmo7XG59O1xudmFyIGRlZmF1bHRCcmVha3BvaW50cyA9IFs0MCwgNTIsIDY0XS5tYXAoZnVuY3Rpb24gKG4pIHsgcmV0dXJuIG4gKyAnZW0nOyB9KTtcbnZhciBkZWZhdWx0VGhlbWUgPSB7XG4gIHNwYWNlOiBbMCwgNCwgOCwgMTYsIDMyLCA2NCwgMTI4LCAyNTYsIDUxMl0sXG4gIGZvbnRTaXplczogWzEyLCAxNCwgMTYsIDIwLCAyNCwgMzIsIDQ4LCA2NCwgNzJdXG59O1xudmFyIGFsaWFzZXMgPSB7XG4gIGJnOiAnYmFja2dyb3VuZENvbG9yJyxcbiAgbTogJ21hcmdpbicsXG4gIG10OiAnbWFyZ2luVG9wJyxcbiAgbXI6ICdtYXJnaW5SaWdodCcsXG4gIG1iOiAnbWFyZ2luQm90dG9tJyxcbiAgbWw6ICdtYXJnaW5MZWZ0JyxcbiAgbXg6ICdtYXJnaW5YJyxcbiAgbXk6ICdtYXJnaW5ZJyxcbiAgcDogJ3BhZGRpbmcnLFxuICBwdDogJ3BhZGRpbmdUb3AnLFxuICBwcjogJ3BhZGRpbmdSaWdodCcsXG4gIHBiOiAncGFkZGluZ0JvdHRvbScsXG4gIHBsOiAncGFkZGluZ0xlZnQnLFxuICBweDogJ3BhZGRpbmdYJyxcbiAgcHk6ICdwYWRkaW5nWSdcbn07XG52YXIgbXVsdGlwbGVzID0ge1xuICBtYXJnaW5YOiBbJ21hcmdpbkxlZnQnLCAnbWFyZ2luUmlnaHQnXSxcbiAgbWFyZ2luWTogWydtYXJnaW5Ub3AnLCAnbWFyZ2luQm90dG9tJ10sXG4gIHBhZGRpbmdYOiBbJ3BhZGRpbmdMZWZ0JywgJ3BhZGRpbmdSaWdodCddLFxuICBwYWRkaW5nWTogWydwYWRkaW5nVG9wJywgJ3BhZGRpbmdCb3R0b20nXSxcbiAgc2l6ZTogWyd3aWR0aCcsICdoZWlnaHQnXVxufTtcbnZhciBzY2FsZXMgPSB7XG4gIGNvbG9yOiAnY29sb3JzJyxcbiAgYmFja2dyb3VuZENvbG9yOiAnY29sb3JzJyxcbiAgYm9yZGVyQ29sb3I6ICdjb2xvcnMnLFxuICBjYXJldENvbG9yOiAnY29sb3JzJyxcbiAgY29sdW1uUnVsZUNvbG9yOiAnY29sb3JzJyxcbiAgbWFyZ2luOiAnc3BhY2UnLFxuICBtYXJnaW5Ub3A6ICdzcGFjZScsXG4gIG1hcmdpblJpZ2h0OiAnc3BhY2UnLFxuICBtYXJnaW5Cb3R0b206ICdzcGFjZScsXG4gIG1hcmdpbkxlZnQ6ICdzcGFjZScsXG4gIG1hcmdpblg6ICdzcGFjZScsXG4gIG1hcmdpblk6ICdzcGFjZScsXG4gIHBhZGRpbmc6ICdzcGFjZScsXG4gIHBhZGRpbmdUb3A6ICdzcGFjZScsXG4gIHBhZGRpbmdSaWdodDogJ3NwYWNlJyxcbiAgcGFkZGluZ0JvdHRvbTogJ3NwYWNlJyxcbiAgcGFkZGluZ0xlZnQ6ICdzcGFjZScsXG4gIHBhZGRpbmdYOiAnc3BhY2UnLFxuICBwYWRkaW5nWTogJ3NwYWNlJyxcbiAgdG9wOiAnc3BhY2UnLFxuICByaWdodDogJ3NwYWNlJyxcbiAgYm90dG9tOiAnc3BhY2UnLFxuICBsZWZ0OiAnc3BhY2UnLFxuICBncmlkR2FwOiAnc3BhY2UnLFxuICBncmlkQ29sdW1uR2FwOiAnc3BhY2UnLFxuICBncmlkUm93R2FwOiAnc3BhY2UnLFxuICBnYXA6ICdzcGFjZScsXG4gIGNvbHVtbkdhcDogJ3NwYWNlJyxcbiAgcm93R2FwOiAnc3BhY2UnLFxuICBmb250RmFtaWx5OiAnZm9udHMnLFxuICBmb250U2l6ZTogJ2ZvbnRTaXplcycsXG4gIGZvbnRXZWlnaHQ6ICdmb250V2VpZ2h0cycsXG4gIGxpbmVIZWlnaHQ6ICdsaW5lSGVpZ2h0cycsXG4gIGxldHRlclNwYWNpbmc6ICdsZXR0ZXJTcGFjaW5ncycsXG4gIGJvcmRlcjogJ2JvcmRlcnMnLFxuICBib3JkZXJUb3A6ICdib3JkZXJzJyxcbiAgYm9yZGVyUmlnaHQ6ICdib3JkZXJzJyxcbiAgYm9yZGVyQm90dG9tOiAnYm9yZGVycycsXG4gIGJvcmRlckxlZnQ6ICdib3JkZXJzJyxcbiAgYm9yZGVyV2lkdGg6ICdib3JkZXJXaWR0aHMnLFxuICBib3JkZXJTdHlsZTogJ2JvcmRlclN0eWxlcycsXG4gIGJvcmRlclJhZGl1czogJ3JhZGlpJyxcbiAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6ICdyYWRpaScsXG4gIGJvcmRlclRvcExlZnRSYWRpdXM6ICdyYWRpaScsXG4gIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiAncmFkaWknLFxuICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzOiAncmFkaWknLFxuICBib3JkZXJUb3BXaWR0aDogJ2JvcmRlcldpZHRocycsXG4gIGJvcmRlclRvcENvbG9yOiAnY29sb3JzJyxcbiAgYm9yZGVyVG9wU3R5bGU6ICdib3JkZXJTdHlsZXMnLFxuICBib3JkZXJCb3R0b21XaWR0aDogJ2JvcmRlcldpZHRocycsXG4gIGJvcmRlckJvdHRvbUNvbG9yOiAnY29sb3JzJyxcbiAgYm9yZGVyQm90dG9tU3R5bGU6ICdib3JkZXJTdHlsZXMnLFxuICBib3JkZXJMZWZ0V2lkdGg6ICdib3JkZXJXaWR0aHMnLFxuICBib3JkZXJMZWZ0Q29sb3I6ICdjb2xvcnMnLFxuICBib3JkZXJMZWZ0U3R5bGU6ICdib3JkZXJTdHlsZXMnLFxuICBib3JkZXJSaWdodFdpZHRoOiAnYm9yZGVyV2lkdGhzJyxcbiAgYm9yZGVyUmlnaHRDb2xvcjogJ2NvbG9ycycsXG4gIGJvcmRlclJpZ2h0U3R5bGU6ICdib3JkZXJTdHlsZXMnLFxuICBvdXRsaW5lQ29sb3I6ICdjb2xvcnMnLFxuICBib3hTaGFkb3c6ICdzaGFkb3dzJyxcbiAgdGV4dFNoYWRvdzogJ3NoYWRvd3MnLFxuICB6SW5kZXg6ICd6SW5kaWNlcycsXG4gIHdpZHRoOiAnc2l6ZXMnLFxuICBtaW5XaWR0aDogJ3NpemVzJyxcbiAgbWF4V2lkdGg6ICdzaXplcycsXG4gIGhlaWdodDogJ3NpemVzJyxcbiAgbWluSGVpZ2h0OiAnc2l6ZXMnLFxuICBtYXhIZWlnaHQ6ICdzaXplcycsXG4gIGZsZXhCYXNpczogJ3NpemVzJyxcbiAgc2l6ZTogJ3NpemVzJyxcbiAgLy8gc3ZnXG4gIGZpbGw6ICdjb2xvcnMnLFxuICBzdHJva2U6ICdjb2xvcnMnXG59O1xuXG52YXIgcG9zaXRpdmVPck5lZ2F0aXZlID0gZnVuY3Rpb24gKHNjYWxlLCB2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnbnVtYmVyJyB8fCB2YWx1ZSA+PSAwKSB7XG4gICAgcmV0dXJuIGdldChzY2FsZSwgdmFsdWUsIHZhbHVlKTtcbiAgfVxuXG4gIHZhciBhYnNvbHV0ZSA9IE1hdGguYWJzKHZhbHVlKTtcbiAgdmFyIG4gPSBnZXQoc2NhbGUsIGFic29sdXRlLCBhYnNvbHV0ZSk7XG4gIGlmICh0eXBlb2YgbiA9PT0gJ3N0cmluZycpIHsgcmV0dXJuICctJyArIG47IH1cbiAgcmV0dXJuIG4gKiAtMTtcbn07XG5cbnZhciB0cmFuc2Zvcm1zID0gWydtYXJnaW4nLCAnbWFyZ2luVG9wJywgJ21hcmdpblJpZ2h0JywgJ21hcmdpbkJvdHRvbScsICdtYXJnaW5MZWZ0JywgJ21hcmdpblgnLCAnbWFyZ2luWScsICd0b3AnLCAnYm90dG9tJywgJ2xlZnQnLCAncmlnaHQnXS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgY3Vycikge1xuICB2YXIgb2JqO1xuXG4gIHJldHVybiAoT2JqZWN0LmFzc2lnbih7fSwgYWNjLFxuICAoIG9iaiA9IHt9LCBvYmpbY3Vycl0gPSBwb3NpdGl2ZU9yTmVnYXRpdmUsIG9iaiApKSk7XG59LCB7fSk7XG5cbnZhciByZXNwb25zaXZlID0gZnVuY3Rpb24gKHN0eWxlcykgeyByZXR1cm4gZnVuY3Rpb24gKHRoZW1lKSB7XG4gIHZhciBuZXh0ID0ge307XG4gIHZhciBicmVha3BvaW50cyA9IGdldCh0aGVtZSwgJ2JyZWFrcG9pbnRzJywgZGVmYXVsdEJyZWFrcG9pbnRzKTtcbiAgdmFyIG1lZGlhUXVlcmllcyA9IFtudWxsIF0uY29uY2F0KCBicmVha3BvaW50cy5tYXAoZnVuY3Rpb24gKG4pIHsgcmV0dXJuIChcIkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IFwiICsgbiArIFwiKVwiKTsgfSkpO1xuXG4gIGZvciAodmFyIGtleSBpbiBzdHlsZXMpIHtcbiAgICB2YXIgdmFsdWUgPSB0eXBlb2Ygc3R5bGVzW2tleV0gPT09ICdmdW5jdGlvbicgPyBzdHlsZXNba2V5XSh0aGVtZSkgOiBzdHlsZXNba2V5XTtcbiAgICBpZiAodmFsdWUgPT0gbnVsbCkgeyBjb250aW51ZTsgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgbmV4dFtrZXldID0gdmFsdWU7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlLnNsaWNlKDAsIG1lZGlhUXVlcmllcy5sZW5ndGgpLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgbWVkaWEgPSBtZWRpYVF1ZXJpZXNbaV07XG5cbiAgICAgIGlmICghbWVkaWEpIHtcbiAgICAgICAgbmV4dFtrZXldID0gdmFsdWVbaV07XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBuZXh0W21lZGlhXSA9IG5leHRbbWVkaWFdIHx8IHt9O1xuICAgICAgaWYgKHZhbHVlW2ldID09IG51bGwpIHsgY29udGludWU7IH1cbiAgICAgIG5leHRbbWVkaWFdW2tleV0gPSB2YWx1ZVtpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV4dDtcbn07IH07XG5cbnZhciBjc3MgPSBmdW5jdGlvbiAoYXJncykgeyByZXR1cm4gZnVuY3Rpb24gKHByb3BzKSB7XG4gIGlmICggcHJvcHMgPT09IHZvaWQgMCApIHByb3BzID0ge307XG5cbiAgdmFyIHRoZW1lID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdFRoZW1lLFxuICAgIChwcm9wcy50aGVtZSB8fCBwcm9wcykpO1xuICB2YXIgcmVzdWx0ID0ge307XG4gIHZhciBvYmogPSB0eXBlb2YgYXJncyA9PT0gJ2Z1bmN0aW9uJyA/IGFyZ3ModGhlbWUpIDogYXJncztcbiAgdmFyIHN0eWxlcyA9IHJlc3BvbnNpdmUob2JqKSh0aGVtZSk7XG5cbiAgZm9yICh2YXIga2V5IGluIHN0eWxlcykge1xuICAgIHZhciB4ID0gc3R5bGVzW2tleV07XG4gICAgdmFyIHZhbCA9IHR5cGVvZiB4ID09PSAnZnVuY3Rpb24nID8geCh0aGVtZSkgOiB4O1xuXG4gICAgaWYgKGtleSA9PT0gJ3ZhcmlhbnQnKSB7XG4gICAgICB2YXIgdmFyaWFudCA9IGNzcyhnZXQodGhlbWUsIHZhbCkpKHRoZW1lKTtcbiAgICAgIHJlc3VsdCA9IE9iamVjdC5hc3NpZ24oe30sIHJlc3VsdCxcbiAgICAgICAgdmFyaWFudCk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAodmFsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHRba2V5XSA9IGNzcyh2YWwpKHRoZW1lKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHZhciBwcm9wID0gZ2V0KGFsaWFzZXMsIGtleSwga2V5KTtcbiAgICB2YXIgc2NhbGVOYW1lID0gZ2V0KHNjYWxlcywgcHJvcCk7XG4gICAgdmFyIHNjYWxlID0gZ2V0KHRoZW1lLCBzY2FsZU5hbWUsIGdldCh0aGVtZSwgcHJvcCwge30pKTtcbiAgICB2YXIgdHJhbnNmb3JtID0gZ2V0KHRyYW5zZm9ybXMsIHByb3AsIGdldCk7XG4gICAgdmFyIHZhbHVlID0gdHJhbnNmb3JtKHNjYWxlLCB2YWwsIHZhbCk7XG5cbiAgICBpZiAobXVsdGlwbGVzW3Byb3BdKSB7XG4gICAgICB2YXIgZGlycyA9IG11bHRpcGxlc1twcm9wXTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdFtkaXJzW2ldXSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRbcHJvcF0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTsgfTtcblxuZXhwb3J0IHsgZ2V0LCBjc3MgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzbS5qcy5tYXBcbiIsImltcG9ydCB7IGpzeCB9IGZyb20gJ0B0aGVtZS11aS9jb3JlJztcbmltcG9ydCB7IGNzcywgZ2V0IH0gZnJvbSAnQHRoZW1lLXVpL2Nzcyc7XG5pbXBvcnQgJ3JlYWN0JztcbmltcG9ydCAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBNRFhQcm92aWRlciwgdXNlTURYQ29tcG9uZW50cyB9IGZyb20gJ0BtZHgtanMvcmVhY3QnO1xuXG52YXIgdGFncyA9IFsncCcsICdiJywgJ2knLCAnYScsICdoMScsICdoMicsICdoMycsICdoNCcsICdoNScsICdoNicsICdpbWcnLCAncHJlJywgJ2NvZGUnLCAnb2wnLCAndWwnLCAnbGknLCAnYmxvY2txdW90ZScsICdocicsICdlbScsICd0YWJsZScsICd0cicsICd0aCcsICd0ZCcsICdlbScsICdzdHJvbmcnLCAnZGVsJywgLy8gbWR4XG4naW5saW5lQ29kZScsICd0aGVtYXRpY0JyZWFrJywgLy8gb3RoZXJcbidkaXYnLCAvLyB0aGVtZS11aVxuJ3Jvb3QnXTtcbnZhciBhbGlhc2VzID0ge1xuICBpbmxpbmVDb2RlOiAnY29kZScsXG4gIHRoZW1hdGljQnJlYWs6ICdocicsXG4gIHJvb3Q6ICdkaXYnXG59O1xuXG52YXIgYWxpYXMgPSBmdW5jdGlvbiAobikgeyByZXR1cm4gYWxpYXNlc1tuXSB8fCBuOyB9O1xuXG52YXIgdGhlbWVkID0gZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gZnVuY3Rpb24gKHByb3BzKSB7IHJldHVybiBjc3MoZ2V0KHByb3BzLnRoZW1lLCAoXCJzdHlsZXMuXCIgKyBrZXkpKSkocHJvcHMudGhlbWUpOyB9OyB9O1xudmFyIFN0eWxlZCA9IHN0eWxlZCgnZGl2JykodGhlbWVkKCdkaXYnKSk7XG52YXIgY29tcG9uZW50cyA9IHt9O1xudGFncy5mb3JFYWNoKGZ1bmN0aW9uICh0YWcpIHtcbiAgY29tcG9uZW50c1t0YWddID0gc3R5bGVkKGFsaWFzKHRhZykpKHRoZW1lZCh0YWcpKTtcbiAgU3R5bGVkW3RhZ10gPSBjb21wb25lbnRzW3RhZ107XG59KTtcblxudmFyIGNyZWF0ZUNvbXBvbmVudHMgPSBmdW5jdGlvbiAoY29tcHMpIHtcbiAgdmFyIG5leHQgPSBPYmplY3QuYXNzaWduKHt9LCBjb21wb25lbnRzKTtcbiAgT2JqZWN0LmtleXMoY29tcHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIG5leHRba2V5XSA9IHN0eWxlZChjb21wc1trZXldKSh0aGVtZWQoa2V5KSk7XG4gIH0pO1xuICByZXR1cm4gbmV4dDtcbn07XG5cbnZhciBNRFhQcm92aWRlciQxID0gZnVuY3Rpb24gKHJlZikge1xuICB2YXIgY29tcG9uZW50cyA9IHJlZi5jb21wb25lbnRzO1xuICB2YXIgY2hpbGRyZW4gPSByZWYuY2hpbGRyZW47XG5cbiAgdmFyIG91dGVyID0gdXNlTURYQ29tcG9uZW50cygpO1xuICByZXR1cm4ganN4KE1EWFByb3ZpZGVyLCB7XG4gICAgY29tcG9uZW50czogY3JlYXRlQ29tcG9uZW50cyhPYmplY3QuYXNzaWduKHt9LCBvdXRlcixcbiAgICAgIGNvbXBvbmVudHMpKSxcbiAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgfSk7XG59O1xuXG5leHBvcnQgeyB0aGVtZWQsIFN0eWxlZCwgY29tcG9uZW50cywgTURYUHJvdmlkZXIkMSBhcyBNRFhQcm92aWRlciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXNtLmpzLm1hcFxuIiwiaW1wb3J0IHsganN4LCB1c2VUaGVtZVVJLCBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQHRoZW1lLXVpL2NvcmUnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQHRoZW1lLXVpL2Nzcyc7XG5pbXBvcnQgeyBDb2xvck1vZGVQcm92aWRlciB9IGZyb20gJ0B0aGVtZS11aS9jb2xvci1tb2Rlcyc7XG5pbXBvcnQgeyBNRFhQcm92aWRlciB9IGZyb20gJ0B0aGVtZS11aS9tZHgnO1xuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5cbnZhciBCb2R5U3R5bGVzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4ganN4KEdsb2JhbCwge1xuICBzdHlsZXM6IGZ1bmN0aW9uICh0aGVtZSkge1xuICAgIGlmICh0aGVtZS51c2VCb2R5U3R5bGVzID09PSBmYWxzZSB8fCB0aGVtZS5zdHlsZXMgJiYgIXRoZW1lLnN0eWxlcy5yb290KSB7IHJldHVybiBmYWxzZTsgfVxuICAgIHZhciBib3hTaXppbmcgPSB0aGVtZS51c2VCb3JkZXJCb3ggPT09IGZhbHNlID8gbnVsbCA6ICdib3JkZXItYm94JztcbiAgICByZXR1cm4gY3NzKHtcbiAgICAgICcqJzoge1xuICAgICAgICBib3hTaXppbmc6IGJveFNpemluZ1xuICAgICAgfSxcbiAgICAgIGJvZHk6IHtcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICB2YXJpYW50OiAnc3R5bGVzLnJvb3QnXG4gICAgICB9XG4gICAgfSkodGhlbWUpO1xuICB9XG59KTsgfTtcblxudmFyIFRoZW1lUHJvdmlkZXIkMSA9IGZ1bmN0aW9uIChyZWYpIHtcbiAgdmFyIHRoZW1lID0gcmVmLnRoZW1lO1xuICB2YXIgY29tcG9uZW50cyA9IHJlZi5jb21wb25lbnRzO1xuICB2YXIgY2hpbGRyZW4gPSByZWYuY2hpbGRyZW47XG5cbiAgdmFyIG91dGVyID0gdXNlVGhlbWVVSSgpO1xuXG4gIGlmICh0eXBlb2Ygb3V0ZXIuc2V0Q29sb3JNb2RlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGpzeChUaGVtZVByb3ZpZGVyLCB7XG4gICAgICB0aGVtZTogdGhlbWVcbiAgICB9LCBqc3goTURYUHJvdmlkZXIsIHtcbiAgICAgIGNvbXBvbmVudHM6IGNvbXBvbmVudHMsXG4gICAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgICB9KSk7XG4gIH1cblxuICByZXR1cm4ganN4KFRoZW1lUHJvdmlkZXIsIHtcbiAgICB0aGVtZTogdGhlbWVcbiAgfSwganN4KENvbG9yTW9kZVByb3ZpZGVyLCBudWxsLCBqc3goQm9keVN0eWxlcyksIGpzeChNRFhQcm92aWRlciwge1xuICAgIGNvbXBvbmVudHM6IGNvbXBvbmVudHMsXG4gICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gIH0pKSk7XG59O1xuXG5leHBvcnQgeyBUaGVtZVByb3ZpZGVyJDEgYXMgVGhlbWVQcm92aWRlciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXNtLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNNZXJnZWFibGVPYmplY3QgPSBmdW5jdGlvbiBpc01lcmdlYWJsZU9iamVjdCh2YWx1ZSkge1xuXHRyZXR1cm4gaXNOb25OdWxsT2JqZWN0KHZhbHVlKVxuXHRcdCYmICFpc1NwZWNpYWwodmFsdWUpXG59O1xuXG5mdW5jdGlvbiBpc05vbk51bGxPYmplY3QodmFsdWUpIHtcblx0cmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0J1xufVxuXG5mdW5jdGlvbiBpc1NwZWNpYWwodmFsdWUpIHtcblx0dmFyIHN0cmluZ1ZhbHVlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKTtcblxuXHRyZXR1cm4gc3RyaW5nVmFsdWUgPT09ICdbb2JqZWN0IFJlZ0V4cF0nXG5cdFx0fHwgc3RyaW5nVmFsdWUgPT09ICdbb2JqZWN0IERhdGVdJ1xuXHRcdHx8IGlzUmVhY3RFbGVtZW50KHZhbHVlKVxufVxuXG4vLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvYjVhYzk2M2ZiNzkxZDEyOThlN2YzOTYyMzYzODNiYzk1NWY5MTZjMS9zcmMvaXNvbW9ycGhpYy9jbGFzc2ljL2VsZW1lbnQvUmVhY3RFbGVtZW50LmpzI0wyMS1MMjVcbnZhciBjYW5Vc2VTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gY2FuVXNlU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xuXG5mdW5jdGlvbiBpc1JlYWN0RWxlbWVudCh2YWx1ZSkge1xuXHRyZXR1cm4gdmFsdWUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRVxufVxuXG5mdW5jdGlvbiBlbXB0eVRhcmdldCh2YWwpIHtcblx0cmV0dXJuIEFycmF5LmlzQXJyYXkodmFsKSA/IFtdIDoge31cbn1cblxuZnVuY3Rpb24gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQodmFsdWUsIG9wdGlvbnMpIHtcblx0cmV0dXJuIChvcHRpb25zLmNsb25lICE9PSBmYWxzZSAmJiBvcHRpb25zLmlzTWVyZ2VhYmxlT2JqZWN0KHZhbHVlKSlcblx0XHQ/IGRlZXBtZXJnZShlbXB0eVRhcmdldCh2YWx1ZSksIHZhbHVlLCBvcHRpb25zKVxuXHRcdDogdmFsdWVcbn1cblxuZnVuY3Rpb24gZGVmYXVsdEFycmF5TWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnMpIHtcblx0cmV0dXJuIHRhcmdldC5jb25jYXQoc291cmNlKS5tYXAoZnVuY3Rpb24oZWxlbWVudCkge1xuXHRcdHJldHVybiBjbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZChlbGVtZW50LCBvcHRpb25zKVxuXHR9KVxufVxuXG5mdW5jdGlvbiBnZXRNZXJnZUZ1bmN0aW9uKGtleSwgb3B0aW9ucykge1xuXHRpZiAoIW9wdGlvbnMuY3VzdG9tTWVyZ2UpIHtcblx0XHRyZXR1cm4gZGVlcG1lcmdlXG5cdH1cblx0dmFyIGN1c3RvbU1lcmdlID0gb3B0aW9ucy5jdXN0b21NZXJnZShrZXkpO1xuXHRyZXR1cm4gdHlwZW9mIGN1c3RvbU1lcmdlID09PSAnZnVuY3Rpb24nID8gY3VzdG9tTWVyZ2UgOiBkZWVwbWVyZ2Vcbn1cblxuZnVuY3Rpb24gZ2V0RW51bWVyYWJsZU93blByb3BlcnR5U3ltYm9scyh0YXJnZXQpIHtcblx0cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHNcblx0XHQ/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModGFyZ2V0KS5maWx0ZXIoZnVuY3Rpb24oc3ltYm9sKSB7XG5cdFx0XHRyZXR1cm4gT2JqZWN0LnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodGFyZ2V0LCBzeW1ib2wpXG5cdFx0fSlcblx0XHQ6IFtdXG59XG5cbmZ1bmN0aW9uIGdldEtleXModGFyZ2V0KSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyh0YXJnZXQpLmNvbmNhdChnZXRFbnVtZXJhYmxlT3duUHJvcGVydHlTeW1ib2xzKHRhcmdldCkpXG59XG5cbmZ1bmN0aW9uIHByb3BlcnR5SXNPbk9iamVjdChvYmplY3QsIHByb3BlcnR5KSB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHByb3BlcnR5IGluIG9iamVjdFxuXHR9IGNhdGNoKF8pIHtcblx0XHRyZXR1cm4gZmFsc2Vcblx0fVxufVxuXG4vLyBQcm90ZWN0cyBmcm9tIHByb3RvdHlwZSBwb2lzb25pbmcgYW5kIHVuZXhwZWN0ZWQgbWVyZ2luZyB1cCB0aGUgcHJvdG90eXBlIGNoYWluLlxuZnVuY3Rpb24gcHJvcGVydHlJc1Vuc2FmZSh0YXJnZXQsIGtleSkge1xuXHRyZXR1cm4gcHJvcGVydHlJc09uT2JqZWN0KHRhcmdldCwga2V5KSAvLyBQcm9wZXJ0aWVzIGFyZSBzYWZlIHRvIG1lcmdlIGlmIHRoZXkgZG9uJ3QgZXhpc3QgaW4gdGhlIHRhcmdldCB5ZXQsXG5cdFx0JiYgIShPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbCh0YXJnZXQsIGtleSkgLy8gdW5zYWZlIGlmIHRoZXkgZXhpc3QgdXAgdGhlIHByb3RvdHlwZSBjaGFpbixcblx0XHRcdCYmIE9iamVjdC5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHRhcmdldCwga2V5KSkgLy8gYW5kIGFsc28gdW5zYWZlIGlmIHRoZXkncmUgbm9uZW51bWVyYWJsZS5cbn1cblxuZnVuY3Rpb24gbWVyZ2VPYmplY3QodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnMpIHtcblx0dmFyIGRlc3RpbmF0aW9uID0ge307XG5cdGlmIChvcHRpb25zLmlzTWVyZ2VhYmxlT2JqZWN0KHRhcmdldCkpIHtcblx0XHRnZXRLZXlzKHRhcmdldCkuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcblx0XHRcdGRlc3RpbmF0aW9uW2tleV0gPSBjbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZCh0YXJnZXRba2V5XSwgb3B0aW9ucyk7XG5cdFx0fSk7XG5cdH1cblx0Z2V0S2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG5cdFx0aWYgKHByb3BlcnR5SXNVbnNhZmUodGFyZ2V0LCBrZXkpKSB7XG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cblx0XHRpZiAocHJvcGVydHlJc09uT2JqZWN0KHRhcmdldCwga2V5KSAmJiBvcHRpb25zLmlzTWVyZ2VhYmxlT2JqZWN0KHNvdXJjZVtrZXldKSkge1xuXHRcdFx0ZGVzdGluYXRpb25ba2V5XSA9IGdldE1lcmdlRnVuY3Rpb24oa2V5LCBvcHRpb25zKSh0YXJnZXRba2V5XSwgc291cmNlW2tleV0sIG9wdGlvbnMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkZXN0aW5hdGlvbltrZXldID0gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQoc291cmNlW2tleV0sIG9wdGlvbnMpO1xuXHRcdH1cblx0fSk7XG5cdHJldHVybiBkZXN0aW5hdGlvblxufVxuXG5mdW5jdGlvbiBkZWVwbWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnMpIHtcblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdG9wdGlvbnMuYXJyYXlNZXJnZSA9IG9wdGlvbnMuYXJyYXlNZXJnZSB8fCBkZWZhdWx0QXJyYXlNZXJnZTtcblx0b3B0aW9ucy5pc01lcmdlYWJsZU9iamVjdCA9IG9wdGlvbnMuaXNNZXJnZWFibGVPYmplY3QgfHwgaXNNZXJnZWFibGVPYmplY3Q7XG5cdC8vIGNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkIGlzIGFkZGVkIHRvIGBvcHRpb25zYCBzbyB0aGF0IGN1c3RvbSBhcnJheU1lcmdlKClcblx0Ly8gaW1wbGVtZW50YXRpb25zIGNhbiB1c2UgaXQuIFRoZSBjYWxsZXIgbWF5IG5vdCByZXBsYWNlIGl0LlxuXHRvcHRpb25zLmNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkID0gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQ7XG5cblx0dmFyIHNvdXJjZUlzQXJyYXkgPSBBcnJheS5pc0FycmF5KHNvdXJjZSk7XG5cdHZhciB0YXJnZXRJc0FycmF5ID0gQXJyYXkuaXNBcnJheSh0YXJnZXQpO1xuXHR2YXIgc291cmNlQW5kVGFyZ2V0VHlwZXNNYXRjaCA9IHNvdXJjZUlzQXJyYXkgPT09IHRhcmdldElzQXJyYXk7XG5cblx0aWYgKCFzb3VyY2VBbmRUYXJnZXRUeXBlc01hdGNoKSB7XG5cdFx0cmV0dXJuIGNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkKHNvdXJjZSwgb3B0aW9ucylcblx0fSBlbHNlIGlmIChzb3VyY2VJc0FycmF5KSB7XG5cdFx0cmV0dXJuIG9wdGlvbnMuYXJyYXlNZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucylcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gbWVyZ2VPYmplY3QodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnMpXG5cdH1cbn1cblxuZGVlcG1lcmdlLmFsbCA9IGZ1bmN0aW9uIGRlZXBtZXJnZUFsbChhcnJheSwgb3B0aW9ucykge1xuXHRpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdmaXJzdCBhcmd1bWVudCBzaG91bGQgYmUgYW4gYXJyYXknKVxuXHR9XG5cblx0cmV0dXJuIGFycmF5LnJlZHVjZShmdW5jdGlvbihwcmV2LCBuZXh0KSB7XG5cdFx0cmV0dXJuIGRlZXBtZXJnZShwcmV2LCBuZXh0LCBvcHRpb25zKVxuXHR9LCB7fSlcbn07XG5cbnZhciBkZWVwbWVyZ2VfMSA9IGRlZXBtZXJnZTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWVwbWVyZ2VfMTtcbiIsImltcG9ydCB7IGNyZWF0ZVN0eWxlRnVuY3Rpb24sIGNyZWF0ZVBhcnNlciB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL2NvcmUnOyAvLyB2NCBhcGkgc2hpbXNcblxuaW1wb3J0IGxheW91dCBmcm9tICdAc3R5bGVkLXN5c3RlbS9sYXlvdXQnO1xuaW1wb3J0IGNvbG9yIGZyb20gJ0BzdHlsZWQtc3lzdGVtL2NvbG9yJztcbmltcG9ydCB0eXBvZ3JhcGh5IGZyb20gJ0BzdHlsZWQtc3lzdGVtL3R5cG9ncmFwaHknO1xuaW1wb3J0IGZsZXhib3ggZnJvbSAnQHN0eWxlZC1zeXN0ZW0vZmxleGJveCc7XG5pbXBvcnQgZ3JpZCBmcm9tICdAc3R5bGVkLXN5c3RlbS9ncmlkJztcbmltcG9ydCBib3JkZXIgZnJvbSAnQHN0eWxlZC1zeXN0ZW0vYm9yZGVyJztcbmltcG9ydCBiYWNrZ3JvdW5kIGZyb20gJ0BzdHlsZWQtc3lzdGVtL2JhY2tncm91bmQnO1xuaW1wb3J0IHBvc2l0aW9uIGZyb20gJ0BzdHlsZWQtc3lzdGVtL3Bvc2l0aW9uJztcbmV4cG9ydCB7IGdldCwgY3JlYXRlUGFyc2VyLCBjcmVhdGVTdHlsZUZ1bmN0aW9uLCBjb21wb3NlLCBzeXN0ZW0gfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9jb3JlJztcbmV4cG9ydCB7IG1hcmdpbiwgcGFkZGluZywgc3BhY2UgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9zcGFjZSc7XG5leHBvcnQgeyBjb2xvciB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL2NvbG9yJztcbmV4cG9ydCB7IGxheW91dCB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL2xheW91dCc7XG5leHBvcnQgeyB0eXBvZ3JhcGh5IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vdHlwb2dyYXBoeSc7XG5leHBvcnQgeyBmbGV4Ym94IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vZmxleGJveCc7XG5leHBvcnQgeyBib3JkZXIgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9ib3JkZXInO1xuZXhwb3J0IHsgYmFja2dyb3VuZCB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL2JhY2tncm91bmQnO1xuZXhwb3J0IHsgcG9zaXRpb24gfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9wb3NpdGlvbic7XG5leHBvcnQgeyBncmlkIH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vZ3JpZCc7XG5leHBvcnQgeyBzaGFkb3cgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9zaGFkb3cnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBib3hTaGFkb3csIGRlZmF1bHQgYXMgdGV4dFNoYWRvdyB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL3NoYWRvdyc7XG5leHBvcnQgeyB2YXJpYW50LCBidXR0b25TdHlsZSwgdGV4dFN0eWxlLCBjb2xvclN0eWxlIH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vdmFyaWFudCc7XG52YXIgd2lkdGggPSBsYXlvdXQud2lkdGgsXG4gICAgaGVpZ2h0ID0gbGF5b3V0LmhlaWdodCxcbiAgICBtaW5XaWR0aCA9IGxheW91dC5taW5XaWR0aCxcbiAgICBtaW5IZWlnaHQgPSBsYXlvdXQubWluSGVpZ2h0LFxuICAgIG1heFdpZHRoID0gbGF5b3V0Lm1heFdpZHRoLFxuICAgIG1heEhlaWdodCA9IGxheW91dC5tYXhIZWlnaHQsXG4gICAgc2l6ZSA9IGxheW91dC5zaXplLFxuICAgIHZlcnRpY2FsQWxpZ24gPSBsYXlvdXQudmVydGljYWxBbGlnbixcbiAgICBkaXNwbGF5ID0gbGF5b3V0LmRpc3BsYXksXG4gICAgb3ZlcmZsb3cgPSBsYXlvdXQub3ZlcmZsb3csXG4gICAgb3ZlcmZsb3dYID0gbGF5b3V0Lm92ZXJmbG93WCxcbiAgICBvdmVyZmxvd1kgPSBsYXlvdXQub3ZlcmZsb3dZO1xudmFyIG9wYWNpdHkgPSBjb2xvci5vcGFjaXR5O1xudmFyIGZvbnRTaXplID0gdHlwb2dyYXBoeS5mb250U2l6ZSxcbiAgICBmb250RmFtaWx5ID0gdHlwb2dyYXBoeS5mb250RmFtaWx5LFxuICAgIGZvbnRXZWlnaHQgPSB0eXBvZ3JhcGh5LmZvbnRXZWlnaHQsXG4gICAgbGluZUhlaWdodCA9IHR5cG9ncmFwaHkubGluZUhlaWdodCxcbiAgICB0ZXh0QWxpZ24gPSB0eXBvZ3JhcGh5LnRleHRBbGlnbixcbiAgICBmb250U3R5bGUgPSB0eXBvZ3JhcGh5LmZvbnRTdHlsZSxcbiAgICBsZXR0ZXJTcGFjaW5nID0gdHlwb2dyYXBoeS5sZXR0ZXJTcGFjaW5nO1xudmFyIGFsaWduSXRlbXMgPSBmbGV4Ym94LmFsaWduSXRlbXMsXG4gICAgYWxpZ25Db250ZW50ID0gZmxleGJveC5hbGlnbkNvbnRlbnQsXG4gICAganVzdGlmeUl0ZW1zID0gZmxleGJveC5qdXN0aWZ5SXRlbXMsXG4gICAganVzdGlmeUNvbnRlbnQgPSBmbGV4Ym94Lmp1c3RpZnlDb250ZW50LFxuICAgIGZsZXhXcmFwID0gZmxleGJveC5mbGV4V3JhcCxcbiAgICBmbGV4RGlyZWN0aW9uID0gZmxleGJveC5mbGV4RGlyZWN0aW9uLFxuICAgIGZsZXggPSBmbGV4Ym94LmZsZXgsXG4gICAgZmxleEdyb3cgPSBmbGV4Ym94LmZsZXhHcm93LFxuICAgIGZsZXhTaHJpbmsgPSBmbGV4Ym94LmZsZXhTaHJpbmssXG4gICAgZmxleEJhc2lzID0gZmxleGJveC5mbGV4QmFzaXMsXG4gICAganVzdGlmeVNlbGYgPSBmbGV4Ym94Lmp1c3RpZnlTZWxmLFxuICAgIGFsaWduU2VsZiA9IGZsZXhib3guYWxpZ25TZWxmLFxuICAgIG9yZGVyID0gZmxleGJveC5vcmRlcjtcbnZhciBncmlkR2FwID0gZ3JpZC5ncmlkR2FwLFxuICAgIGdyaWRDb2x1bW5HYXAgPSBncmlkLmdyaWRDb2x1bW5HYXAsXG4gICAgZ3JpZFJvd0dhcCA9IGdyaWQuZ3JpZFJvd0dhcCxcbiAgICBncmlkQ29sdW1uID0gZ3JpZC5ncmlkQ29sdW1uLFxuICAgIGdyaWRSb3cgPSBncmlkLmdyaWRSb3csXG4gICAgZ3JpZEF1dG9GbG93ID0gZ3JpZC5ncmlkQXV0b0Zsb3csXG4gICAgZ3JpZEF1dG9Db2x1bW5zID0gZ3JpZC5ncmlkQXV0b0NvbHVtbnMsXG4gICAgZ3JpZEF1dG9Sb3dzID0gZ3JpZC5ncmlkQXV0b1Jvd3MsXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IGdyaWQuZ3JpZFRlbXBsYXRlQ29sdW1ucyxcbiAgICBncmlkVGVtcGxhdGVSb3dzID0gZ3JpZC5ncmlkVGVtcGxhdGVSb3dzLFxuICAgIGdyaWRUZW1wbGF0ZUFyZWFzID0gZ3JpZC5ncmlkVGVtcGxhdGVBcmVhcyxcbiAgICBncmlkQXJlYSA9IGdyaWQuZ3JpZEFyZWE7XG52YXIgYm9yZGVyV2lkdGggPSBib3JkZXIuYm9yZGVyV2lkdGgsXG4gICAgYm9yZGVyU3R5bGUgPSBib3JkZXIuYm9yZGVyU3R5bGUsXG4gICAgYm9yZGVyQ29sb3IgPSBib3JkZXIuYm9yZGVyQ29sb3IsXG4gICAgYm9yZGVyVG9wID0gYm9yZGVyLmJvcmRlclRvcCxcbiAgICBib3JkZXJSaWdodCA9IGJvcmRlci5ib3JkZXJSaWdodCxcbiAgICBib3JkZXJCb3R0b20gPSBib3JkZXIuYm9yZGVyQm90dG9tLFxuICAgIGJvcmRlckxlZnQgPSBib3JkZXIuYm9yZGVyTGVmdCxcbiAgICBib3JkZXJSYWRpdXMgPSBib3JkZXIuYm9yZGVyUmFkaXVzO1xudmFyIGJhY2tncm91bmRJbWFnZSA9IGJhY2tncm91bmQuYmFja2dyb3VuZEltYWdlLFxuICAgIGJhY2tncm91bmRTaXplID0gYmFja2dyb3VuZC5iYWNrZ3JvdW5kU2l6ZSxcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb24gPSBiYWNrZ3JvdW5kLmJhY2tncm91bmRQb3NpdGlvbixcbiAgICBiYWNrZ3JvdW5kUmVwZWF0ID0gYmFja2dyb3VuZC5iYWNrZ3JvdW5kUmVwZWF0O1xudmFyIHpJbmRleCA9IHBvc2l0aW9uLnpJbmRleCxcbiAgICB0b3AgPSBwb3NpdGlvbi50b3AsXG4gICAgcmlnaHQgPSBwb3NpdGlvbi5yaWdodCxcbiAgICBib3R0b20gPSBwb3NpdGlvbi5ib3R0b20sXG4gICAgbGVmdCA9IHBvc2l0aW9uLmxlZnQ7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGJvcmRlcnMgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9ib3JkZXInO1xuZXhwb3J0IHsgd2lkdGgsIGhlaWdodCwgbWluV2lkdGgsIG1pbkhlaWdodCwgbWF4V2lkdGgsIG1heEhlaWdodCwgc2l6ZSwgdmVydGljYWxBbGlnbiwgZGlzcGxheSwgb3ZlcmZsb3csIG92ZXJmbG93WCwgb3ZlcmZsb3dZIC8vIGNvbG9yXG4sIG9wYWNpdHkgLy8gdHlwb2dyYXBoeVxuLCBmb250U2l6ZSwgZm9udEZhbWlseSwgZm9udFdlaWdodCwgbGluZUhlaWdodCwgdGV4dEFsaWduLCBmb250U3R5bGUsIGxldHRlclNwYWNpbmcgLy8gZmxleGJveFxuLCBhbGlnbkl0ZW1zLCBhbGlnbkNvbnRlbnQsIGp1c3RpZnlJdGVtcywganVzdGlmeUNvbnRlbnQsIGZsZXhXcmFwLCBmbGV4RGlyZWN0aW9uLCBmbGV4LCBmbGV4R3JvdywgZmxleFNocmluaywgZmxleEJhc2lzLCBqdXN0aWZ5U2VsZiwgYWxpZ25TZWxmLCBvcmRlciAvLyBncmlkXG4sIGdyaWRHYXAsIGdyaWRDb2x1bW5HYXAsIGdyaWRSb3dHYXAsIGdyaWRDb2x1bW4sIGdyaWRSb3csIGdyaWRBdXRvRmxvdywgZ3JpZEF1dG9Db2x1bW5zLCBncmlkQXV0b1Jvd3MsIGdyaWRUZW1wbGF0ZUNvbHVtbnMsIGdyaWRUZW1wbGF0ZVJvd3MsIGdyaWRUZW1wbGF0ZUFyZWFzLCBncmlkQXJlYSAvLyBib3JkZXJcbiwgYm9yZGVyV2lkdGgsIGJvcmRlclN0eWxlLCBib3JkZXJDb2xvciwgYm9yZGVyVG9wLCBib3JkZXJSaWdodCwgYm9yZGVyQm90dG9tLCBib3JkZXJMZWZ0LCBib3JkZXJSYWRpdXMgLy8gYmFja2dyb3VuZFxuLCBiYWNrZ3JvdW5kSW1hZ2UsIGJhY2tncm91bmRTaXplLCBiYWNrZ3JvdW5kUG9zaXRpb24sIGJhY2tncm91bmRSZXBlYXQgLy8gcG9zaXRpb25cbiwgekluZGV4LCB0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnQgfTsgLy8gdjQgc3R5bGUgQVBJIHNoaW1cblxuZXhwb3J0IHZhciBzdHlsZSA9IGZ1bmN0aW9uIHN0eWxlKF9yZWYpIHtcbiAgdmFyIHByb3AgPSBfcmVmLnByb3AsXG4gICAgICBjc3NQcm9wZXJ0eSA9IF9yZWYuY3NzUHJvcGVydHksXG4gICAgICBhbGlhcyA9IF9yZWYuYWxpYXMsXG4gICAgICBrZXkgPSBfcmVmLmtleSxcbiAgICAgIHRyYW5zZm9ybVZhbHVlID0gX3JlZi50cmFuc2Zvcm1WYWx1ZSxcbiAgICAgIHNjYWxlID0gX3JlZi5zY2FsZSxcbiAgICAgIHByb3BlcnRpZXMgPSBfcmVmLnByb3BlcnRpZXM7XG4gIHZhciBjb25maWcgPSB7fTtcbiAgY29uZmlnW3Byb3BdID0gY3JlYXRlU3R5bGVGdW5jdGlvbih7XG4gICAgcHJvcGVydGllczogcHJvcGVydGllcyxcbiAgICBwcm9wZXJ0eTogY3NzUHJvcGVydHkgfHwgcHJvcCxcbiAgICBzY2FsZToga2V5LFxuICAgIGRlZmF1bHRTY2FsZTogc2NhbGUsXG4gICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm1WYWx1ZVxuICB9KTtcbiAgaWYgKGFsaWFzKSBjb25maWdbYWxpYXNdID0gY29uZmlnW3Byb3BdO1xuICB2YXIgcGFyc2UgPSBjcmVhdGVQYXJzZXIoY29uZmlnKTtcbiAgcmV0dXJuIHBhcnNlO1xufTtcbiIsImltcG9ydCB7IGpzeCB9IGZyb20gJ0B0aGVtZS11aS9jb3JlJztcbmV4cG9ydCB7IGpzeCwgQ29udGV4dCwgbWVyZ2UsIHVzZVRoZW1lVUkgfSBmcm9tICdAdGhlbWUtdWkvY29yZSc7XG5leHBvcnQgeyB1c2VDb2xvck1vZGUsIEluaXRpYWxpemVDb2xvck1vZGUgfSBmcm9tICdAdGhlbWUtdWkvY29sb3ItbW9kZXMnO1xuZXhwb3J0IHsgU3R5bGVkLCBjb21wb25lbnRzIH0gZnJvbSAnQHRoZW1lLXVpL21keCc7XG5leHBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQHRoZW1lLXVpL3RoZW1lLXByb3ZpZGVyJztcbmV4cG9ydCAqIGZyb20gJ0B0aGVtZS11aS9jb21wb25lbnRzJztcbmV4cG9ydCB7IGNzcywgZ2V0IH0gZnJvbSAnQHRoZW1lLXVpL2Nzcyc7XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7XG4gICAgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7XG4gICAgfSk7XG4gICAga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpO1xuICB9XG5cbiAgcmV0dXJuIGtleXM7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuXG4gICAgaWYgKGkgJSAyKSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG52YXIgQmFzZVN0eWxlcyA9IGZ1bmN0aW9uIEJhc2VTdHlsZXMocHJvcHMpIHtcbiAgcmV0dXJuIGpzeCgnZGl2JywgX29iamVjdFNwcmVhZDIoe30sIHByb3BzLCB7XG4gICAgc3g6IHtcbiAgICAgIGZvbnRGYW1pbHk6ICdib2R5JyxcbiAgICAgIGxpbmVIZWlnaHQ6ICdib2R5JyxcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2R5JyxcbiAgICAgIHZhcmlhbnQ6ICdzdHlsZXMnXG4gICAgfVxuICB9KSk7XG59O1xuXG5leHBvcnQgeyBCYXNlU3R5bGVzIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lc20uanMubWFwXG4iLCJ2YXIgX3BhdGgsIF9wYXRoMiwgX2RlZnM7XG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduID8gT2JqZWN0LmFzc2lnbi5iaW5kKCkgOiBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZnVuY3Rpb24gU3ZnRWRpdGluZyhwcm9wcykge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgX2V4dGVuZHMoe1xuICAgIHdpZHRoOiAxMTAsXG4gICAgaGVpZ2h0OiAxMTAsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICB4bWxuc1hsaW5rOiBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIlxuICB9LCBwcm9wcyksIF9wYXRoIHx8IChfcGF0aCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgb3BhY2l0eTogMC4wOSxcbiAgICBkOiBcIk03NSAwSDM1QzE1LjY3IDAgMCAxNS42NyAwIDM1djQwYzAgMTkuMzMgMTUuNjcgMzUgMzUgMzVoNDBjMTkuMzMgMCAzNS0xNS42NyAzNS0zNVYzNWMwLTE5LjMzLTE1LjY3LTM1LTM1LTM1elwiLFxuICAgIGZpbGw6IFwiIzI1NjNGRlwiXG4gIH0pKSwgX3BhdGgyIHx8IChfcGF0aDIgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGZpbGw6IFwidXJsKCNlZGl0aW5nX3N2Z19fcGF0dGVybjApXCIsXG4gICAgZDogXCJNMzIgMzJoNDZ2NDZIMzJ6XCJcbiAgfSkpLCBfZGVmcyB8fCAoX2RlZnMgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRlZnNcIiwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXR0ZXJuXCIsIHtcbiAgICBpZDogXCJlZGl0aW5nX3N2Z19fcGF0dGVybjBcIixcbiAgICBwYXR0ZXJuQ29udGVudFVuaXRzOiBcIm9iamVjdEJvdW5kaW5nQm94XCIsXG4gICAgd2lkdGg6IDEsXG4gICAgaGVpZ2h0OiAxXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwidXNlXCIsIHtcbiAgICB4bGlua0hyZWY6IFwiI2VkaXRpbmdfc3ZnX19pbWFnZTBcIixcbiAgICB0cmFuc2Zvcm06IFwic2NhbGUoLjAyMTc0KVwiXG4gIH0pKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWFnZVwiLCB7XG4gICAgaWQ6IFwiZWRpdGluZ19zdmdfX2ltYWdlMFwiLFxuICAgIHdpZHRoOiA0NixcbiAgICBoZWlnaHQ6IDQ2LFxuICAgIHhsaW5rSHJlZjogXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUM0QUFBQXVDQVlBQUFCWHVTczNBQUFBQkhOQ1NWUUlDQWdJZkFoa2lBQUFCTkpKUkVGVWFJSHQyV3VvWGNVVkIvRGZPYm0rcW9pS1duelVCM2duUmt0QnBhYVVmcWdLYW93YVJWRXhXTkU3U2hXYktLbW1GdnF0SHhTVXh2aEFjZFFnaWlCRWEzM0VaM3dnVkZ0ZlZLeGwxQThhZkFVdDhVSFYxdVQwdzk0bmQrZmNmZTQ5OTV4N2NrSDh3NGExMTVvMTh6OXoxcXc5YTZiUmFyV0VhSGNzd3huWUhrL2cycHk4YmhZUm9uMUtYaWVnaVlkd1hVN2ViWXlPdGZZb0ZVZDIrUDBiQzNMeXQ2M0t0a1NJNXVNdUhOUmhlaHNuak9DM0pwS0czYkF5Ukw4ZklyOE5PWG1saSsxNEUwa3JkWDlzakk2MTNzVitRNk0yT1ZwWWxwTS9kUnBDMU1SVnVMekc3LzBSUlV6UEZob3FreGFpbitBY0xNL0pKbHdSb2hhdTZQRGJaa1N4RUJkMzZYZ2RidStEMElINFZTay9pMmU2dEZ1UHUwdlNoMk0xRHNEdUlib2dKOS9tWkhtSXZzRWZLbjd2TkViSFdvZmlPVVZNZCtMY25OdzVYZFloT2hJdmxxOVg1dVNxS2RvZmpLZXdkMFY5VzA1aXBjM1Z4bWYrbEdaTzNzQkNQRjl4ZWdmbjkwTzZ4RTRWZWRKUURORThyT2tnRFdNaHVyWDlrcFBsV0tGWUV3K01sTW9YUXZTN0N2bFZPYm1qVDlJOUkwUS94bDhVNFZHSEdLTC9ZVWtaTnBlMURjMUtvMjByOHNqTTA5d1NJVG9FZjFhc2g4bHdFVmFGdUNXbjZrdGpocmwxUllqbTRoSHMzNlBMNjloVVZReHJadWRVNU9xL0trUkg0SDc4cU1lK1lrNXU2MVEyNjFyT0FENnB5RiswaFhLbVYrdWQ5Tkk2MGd4cHhuUHlhb2hPVnl5Nk85bWM4aDdYTytrbE9ibSs5RjJFblhGWFRsb01jUkhtWkhWYkxsUGVJM29uZlVsT2JpeDlEMWNzWW9wL2NnM0RDNVhOS0ZQZXc3cW52RTc4cGsyNlJQWER1RTliR0dyYUM5RW9IcTBPT0FsYXVEUW5OM1RvcTlsa1kxc1k5b3gvaG4vMjJEYm1aR1d2SFErRmVJaDJoSnlzVjFSVjNUWlpiU3pOYVhxYnVSa25YcWE4djRmb1lzakpCcHlrMkNYV1llbDBacnFOYnNTL21XNUhFS0lmNGpITXczVWh1aEJ5OGlWT05uSG1sL1JBK2o5MXltNkxjMzZJenV1QjYwYzVGZW1weEdMam4vRVIzQnlpN1hPeU1pZWZoK2hVeFFmb2FGdW12T094VjVjeDVrMkgrS0x5bVJJaE9qTW45NWF2WjNlWUcxZ1JvazA1dVNFbkcwSzBHRC9QeVgybC8zRnM4ZU43d2t5a3cxWkpZQzRPcmJFM2NIMklOdUxtbkh4RVFicnFQMTEwSS81QStVeUZEM1B5YUNrZlkvS2k0U1k4alg5VmxUbDVQRVFMVEI0cUV3cm1ic1JmN0tPUU9Hc0srMlY0cTg1UStmRVRFS0tmbVFieDdhWWcwZG41SXZ5aXh2UXBYc0tLeWNoTmdSL1VLUWVPOFJBdHhEM0dDNUV2RkJ1cUI3RTJKeDhPT2tZZEJpSWVvZ054TDNZb1ZTdHhUVTdXRFVwc0tndzY0eHVOYjN4dXljblN0aUZFZTJQUG5MdzI0QmkxR09pVG41UDNNQi9INU9UWGJYMkk5c05mOFhLSUUzTDdqR0RnR00vSm0zaXpRejNYK05IYUlZT09VWWRoYldzM1Z1UnZoekhBMEN1Z1llRjc0bHNiM3duaTFRMTdYNFhFa0ZEbDlYVmJhRUtJOW1mOEpCU25oZWlvclVTc0s4cnptT29kMUlYbE9ZdG1lU1czUmxIVXRuRUVuZ2pSc1gyTytWVkYvbTgvSFlRb0tPclVreXJxWCtMSkVQMTBCRmVxTDQvbTRKb1FYZHJIdUlkVjVMa2hPcnFQUHBaaGp4cjlycmk2TVRyV1dvZDkrK2g0TnJHK2lXMW1tMFVmbURPaTJEdDNxK2d6azE4OERSSG5xeTlPSURkR3gxcWpXS3MrWEU3TmFmTko2VlpGZWVmNUxIYnBNSDJGRTVzNWVRc0xGRWU1SHlqdUhwL0hLYk5GR25MeUR4eXJPRlAvQUI4cnMweE8xdjRmSjVOTTlQSnhPRWtBQUFBQVNVVk9SSzVDWUlJPVwiXG4gIH0pKSkpO1xufVxuZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlNVEV3SWlCb1pXbG5hSFE5SWpFeE1DSWdkbWxsZDBKdmVEMGlNQ0F3SURFeE1DQXhNVEFpSUdacGJHdzlJbTV2Ym1VaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2VHMXNibk02ZUd4cGJtczlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1RrdmVHeHBibXNpUGdvOGNHRjBhQ0J2Y0dGamFYUjVQU0l3TGpBNUlpQmtQU0pOTnpVZ01FZ3pOVU14TlM0Mk55QXdJREFnTVRVdU5qY2dNQ0F6TlZZM05VTXdJRGswTGpNeklERTFMalkzSURFeE1DQXpOU0F4TVRCSU56VkRPVFF1TXpNZ01URXdJREV4TUNBNU5DNHpNeUF4TVRBZ056VldNelZETVRFd0lERTFMalkzSURrMExqTXpJREFnTnpVZ01Gb2lJR1pwYkd3OUlpTXlOVFl6UmtZaUx6NEtQSEpsWTNRZ2VEMGlNeklpSUhrOUlqTXlJaUIzYVdSMGFEMGlORFlpSUdobGFXZG9kRDBpTkRZaUlHWnBiR3c5SW5WeWJDZ2pjR0YwZEdWeWJqQXBJaTgrQ2p4a1pXWnpQZ284Y0dGMGRHVnliaUJwWkQwaWNHRjBkR1Z5YmpBaUlIQmhkSFJsY201RGIyNTBaVzUwVlc1cGRITTlJbTlpYW1WamRFSnZkVzVrYVc1blFtOTRJaUIzYVdSMGFEMGlNU0lnYUdWcFoyaDBQU0l4SWo0S1BIVnpaU0I0YkdsdWF6cG9jbVZtUFNJamFXMWhaMlV3SWlCMGNtRnVjMlp2Y20wOUluTmpZV3hsS0RBdU1ESXhOek01TVNraUx6NEtQQzl3WVhSMFpYSnVQZ284YVcxaFoyVWdhV1E5SW1sdFlXZGxNQ0lnZDJsa2RHZzlJalEySWlCb1pXbG5hSFE5SWpRMklpQjRiR2x1YXpwb2NtVm1QU0prWVhSaE9tbHRZV2RsTDNCdVp6dGlZWE5sTmpRc2FWWkNUMUozTUV0SFoyOUJRVUZCVGxOVmFFVlZaMEZCUVVNMFFVRkJRWFZEUVZsQlFVRkNXSFZUY3pOQlFVRkJRa2hPUTFOV1VVbERRV2RKWmtGb2EybEJRVUZDVGtwS1VrVkdWV0ZKU0hReVYzVnZXR05WVmtJdlJHWlBZbTByY1c5cFMxZHVlbFZDTTJkdVVtdDBRbkJoWVZWbWNXZExZVzkzWVZKV1JYaFhUa1UzVTJoWFlrdExiVzFHZG5GMFNIaFRWWGgyYUVGalpGRm5hV2xDUldFek0wVmFNM2RuVmtaMFpsWkxlR3d4UVRoaFprRlZkRGhWU0ZZeGRWUXdkemswYm1RclptTm1aVFE1T1RWNE4yTnJTRGgzTkdFeE1UVnZNVGg2T1hveGNYYzVZVFppVW1GeVYwVmhTR056ZDNodVdVaHJMMmN5Y0hrNFltaFpVbTl1TVV0WWFXVm5hVmxrZDFoVk4yVmlXWGxQZEdaWmIwWlZaRElyVURCaVF6Tk1lWFEyTTB0MGExTkpOWFZOZFVoT1VtaGxhSE51YWs5RE0wcHdTMGN6WWtGNVVrdzRaa2x5T0U1UFdHMXNhU3N4TkVVd2EzSmtXRGx6YWtrMk1UTnpWaXRSTmsweVQxWndXV3h3VFM5a1VuQkRNVTFTVm5WTWVrYzNMekJTVWxWNlVFWm9iM0ZyZUdGcGJpdEJZMHhOTDBwS2JIZFNiMmhoZFRaUVJHSmFhMU40UlVKa016WllaMlJpZFN0RU1FbElORlpUYXk5cE1tVTJkRVoxVUhVd2RsTm9NazB4UkhORWRVbGliMmRLT1M5dFdraHRTWFp6UldaTGJqZDJUa1ZpU0ZkdlptbFBWVlpOWkN0TVkyNU9kelZZWkZsb1QyaEpkbXh4T1ZnMWRWTnhTMlJ2Wm1wTFpYZGtNRlk1VnpBMWFYQmpNMVo0YldZcmJFZGFUek56UWtOUVJqbDRaV2RtYmprd1R6WjRSVFJXWldSS1VVUk9SVGh5VDJ0blJGZE5hSFZ5V0RscmNGQnNWMHRHV1VWM0swMXNUVzlZVVhaVE4wTjJiRlpQWW0xcVZEbEpPVWt3VVM5NGJEaFZORlpIU0VkTFRDOVpWV3RhVG5CbE1VUmpNVXR2TWpCeU9ITnFUVEE1ZDFOSlZHOUZaakZoYzJnNGJIZEZWbUZHZFVOWGJqWnJkR3BvY213eFVsbHFiVFJvU0hNek5sQk1OamxvVlZaUmVISmFkV1JWTlU5eEwwdHJVa2cwU0RjNGNVMWxLMWxyTlhVMk1WRXlOakZ5VDBGRU5uQjVSaXN3YUZoTGJWWXJkV1E1VGtrMk1HZDRjSGh1VUhsaGIyaFBWbmw1Tms4NWJXTTRhRGRZVHl0cmJFOWliU3M1UmpKRmJsaEdXRlJzYjAxalVraHRXa2hXWWt4c1VHVkpNMjl1WmxWc1QySnBlRGxFTVdOeldXOXdMMk5uTTBSRE5WaE9TMFpRWlhjM2NXNTJSVGM0Y0dzeU5sSlFXRVIxUlRsaVIwZHlZVU01Ulc5SWNUQlBUMEZzWVhWRVVXNU9NMVJ2Y1Rsc2Exa3hjMWs1YjNndmFHNHZNakpFWW0xYVIxZDJTRkVyUm1WSmFESm9Tbmx6VmpGU1ZqTlVXbHBpVTNwT1lWaHhZblZTYTI1WWNXRTRkalJtYjFsemFrcENjSGxyTWtOWVYxbGxiREJhY25GT1luTlRMMjFYTlVoRlMwbG1OR3BJVFhjelZXaDFhRUo1T0dsV1QwNXVTRzFzTDFKQksybzVNWGx0Tmt4ak16WkplblYxUWpZd1l6VkdaVzF3ZUVkTWFtNHZSVkl6UW5scE4xaFBlVTFwWldab0syaFZlRkZtYjJGR2RXMTJUMDk0VmpWamVEVnJNa2dyUzB4NWJWSkphRTlxVFc0NU5XRjJXak5sV1VjeFoxSnZhekExZFZORmJrY3dTekJIUkM5UWVWZ3liQzh6Um5NNFpVNDNkMnQ1YTNjeFdrcFpRelJQY21KRk0yTklNa2xPZFV4dGJraDRSVkZpY25GUU1URXdTUzgxUVN0VmVVWkVNMUI1WVVOclpsa3ZTMmswVTFrNGFsZzVWbXhVYkRWUVJWRk1WRUkwY1VWM2NtMWljMUptTjB0UFVVOUhjMHNyTWxZMGNUZzFVU3RtUlZSRlMwdG1iVkZpZURkaFdXY3daRzQxU1haNWFYaDJVWEJZYzB0TGVXTm9UbWRTTDFWTFVXVlBPRkpCZEhoRU0wZEROVVYyUmtKMWNVSTNSVEpLZURoUFQydFpaRUpwU1dWdlowNTRURE5aYjFaVGRIaFVWVGRYUkZWd2MwdG5kelkwZUhWT1lqTjRkWGxqYmxOMGFVWkZaVEpRVUc1TWR6STBRbWt4UjA5cFZHNDFVRE5OUWk5SU5VOVVXR0pZTWtrNWMwNW1PRmhMU1VVelREZHFSMFJuUjAwdlNtMHphWHBSZWpOWUswNUlZVWxaVDA5VldXUm9ZbGR6TTFaMVVuWm9la2hCTUVOMVoxbGxSamMwYkhOaU0zZHVhVEZSTVRkWU5GaEZhMFpFYkRsWVZtSmhSVXRKT1cxbU9FcENVMjVvWldsdmNsVlRjMHM0Y25wdFQyOWtNVWxZYkU5WmRHMWxVMWN6VW14SVZYUnVSVVZ1WjJwU2MxZ3lUeXRXVmtZdmJUZ3ZTRmxSYjB0UGNsVnJlWEp4V0N0TVNrVlFNVEJDUm1WeFREUXZiVFJLYjFGWVpISklkVWxrVmpWTWEyaFBjbkZRVUhCYWFHcDRjamx5Y21rMlRWUnlWMWR2WkRrcksyZzBUbkpISzJsWE1XMXRNRlZtYlVSUGFUSkVkRE54SzJkNmF6RTRPRVJTU0c1eGVUbFBTVVJrUjNneGNXcFhTM01yV0VVM1RtRm1Ua28yVmxwR1pXVm1OVXhJWW5CTlNESkdSVFZ6TldWUmMweEdSV1UxU0hscWRVaHdMMGhMWWs1R1IyNU1lVVI0ZVhKUFJsQXZRVUk0Y25Nd2VFOHhkalJtU2pWT1RUbFFTbmhQUld0QlFVRkJRVk5WVms5U1N6VkRXVWxKUFNJdlBnbzhMMlJsWm5NK0Nqd3ZjM1puUGdvPVwiO1xuZXhwb3J0IHsgU3ZnRWRpdGluZyBhcyBSZWFjdENvbXBvbmVudCB9OyIsInZhciBfcGF0aCwgX3BhdGgyO1xuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiA/IE9iamVjdC5hc3NpZ24uYmluZCgpIDogZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmZ1bmN0aW9uIFN2Z1NwZWVkKHByb3BzKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCBfZXh0ZW5kcyh7XG4gICAgd2lkdGg6IDExMCxcbiAgICBoZWlnaHQ6IDExMCxcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gIH0sIHByb3BzKSwgX3BhdGggfHwgKF9wYXRoID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBvcGFjaXR5OiAwLjEwMixcbiAgICBkOiBcIk03NSAwSDM1QzE1LjY3IDAgMCAxNS42NyAwIDM1djQwYzAgMTkuMzMgMTUuNjcgMzUgMzUgMzVoNDBjMTkuMzMgMCAzNS0xNS42NyAzNS0zNVYzNWMwLTE5LjMzLTE1LjY3LTM1LTM1LTM1elwiLFxuICAgIGZpbGw6IFwiI0ZGNDM2MVwiXG4gIH0pKSwgX3BhdGgyIHx8IChfcGF0aDIgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTU2LjIyNyA4NGgtLjEzN2EyNS4xMDYgMjUuMTA2IDAgMDEtNS42OTMtLjY1OC45NDguOTQ4IDAgMDEtLjcwNi0xLjEzOC45MzQuOTM0IDAgMDExLjEyNi0uNzEzIDIzLjQ2IDIzLjQ2IDAgMDA0LjQ4OC41ODZWODAuMmEuOTM5LjkzOSAwIDExMS44NzkgMHYxLjg3YTIzLjExMiAyMy4xMTIgMCAwMDkuODI1LTIuN2wtLjkyNi0xLjYyMmEuOTU1Ljk1NSAwIDAxLjY5Mi0xLjQyLjkzMS45MzEgMCAwMS45MzUuNDY3bC45MjMgMS42MThhMjMuODA4IDIzLjgwOCAwIDAwNy4zLTcuMzg0bC0xLjYtLjkzNGEuOTU2Ljk1NiAwIDAxLjIyNS0xLjc0Mi45MzUuOTM1IDAgMDEuNzE0LjA5NWwxLjYuOTM3YTIzLjc3NyAyMy43NzcgMCAwMDIuNjc3LTEwLjA4OUg3Ny43YS45NS45NSAwIDAxMC0xLjloMS44NTZhMjMuNzY4IDIzLjc2OCAwIDAwLTIuNjc3LTEwLjA4N2wtMS42LjkzNmEuOTI0LjkyNCAwIDAxLS45NCAwIC45NTUuOTU1IDAgMDEwLTEuNjQ3bDEuNTk5LS45MzNhMjMuODEgMjMuODEgMCAwMC03LjMtNy4zODVsLS45MjMgMS42MThhLjkzNC45MzQgMCAwMS0xLjI4NC4zNDguOTU2Ljk1NiAwIDAxLS4zNDUtMS4zbC45MjctMS42MjJhMjMuMTA5IDIzLjEwOSAwIDAwLTkuODI1LTIuN3YxLjg3MWEuOTQuOTQgMCAwMS0xLjg4IDB2LTEuODc3YTMxLjUgMzEuNSAwIDAwLS44NjguMDU0bC0xLjAwOS4wNzhjLS44NzguMTAzLTEuNzUuMjU0LTIuNjEyLjQ1NGEuOTM4LjkzOCAwIDAxLTEuMTI2LS43MTQuOTQ4Ljk0OCAwIDAxLjcwNi0xLjEzOGMuOTk4LS4yMyAyLjAxLS40IDMuMDI5LS41MDl2LTEuMWgtMS40MDlhMi4zNzUgMi4zNzUgMCAwMTAtNC43NDloOC40NTdhMi4zNzUgMi4zNzUgMCAwMTAgNC43NWgtMS40MDl2MS4xMzFhMjUgMjUgMCAwMTkuNjUzIDMuMjM0Yy4wMi4wMTEuMDQxLjAxLjA2LjAyMS4wMTkuMDEyLjAyOS4wMy4wNDcuMDQyYTI1LjQ2OSAyNS40NjkgMCAwMTQuNTE5IDMuMzg4bDIuMDE5LTIuMDM5LTEuMzI5LTEuMzQ1IDMuOTg3LTQuMDMgMy45ODYgNC4wMy0zLjk4NiA0LjAzLTEuMzI5LTEuMzQzLTIuMDE4IDIuMDRhMjUuNzkgMjUuNzkgMCAwMTMuMzUgNC41NjhjLjAxMy4wMTcuMDMuMDMuMDQxLjA0Ny4wMTEuMDE4LjAxLjA0MS4wMi4wNjFhMjUuOCAyNS44IDAgMDEwIDI1LjUzYy0uMDEuMDItLjAwOS4wNC0uMDIuMDYtLjAxMS4wMTgtLjAzOS4wNDgtLjA1Ny4wNzRhMjUuNyAyNS43IDAgMDEtOS4xODQgOS4yNzNjLS4wMTguMDEyLS4wMjguMDMtLjA0Ny4wNDFhLjg1NS44NTUgMCAwMS0uMDg4LjAzOCAyNSAyNSAwIDAxLTEyLjQyMiAzLjM5NGgtLjAyM2MtLjAwOSAwLS4wMTMuMDExLS4wMTkuMDExem0yMC40NjEtNDcuODE0bDEuMzMgMS4zNDUgMS4zMjgtMS4zNDUtMS4zMjgtMS4zNDQtMS4zMyAxLjM0NHptLTE5LjUtMy40NnYtMi44N2gzLjI4OWEuNDc1LjQ3NSAwIDAwMC0uOTVINTIuMDJhLjQ3NS40NzUgMCAxMDAgLjk1aDMuMjh2Mi44N2MuMTEzLS4wMDYuMjE2IDAgLjMyNS0uMDA4LjE1NCAwIC4zMDgtLjAxMy40NjItLjAxM2guMTUzYy4zMDQtLjAwNS42MTYuMDAxLjk0My4wMTVsLjAwNS4wMDV6TTQxLjIxMyA3NS40NTNhLjk1Ljk1IDAgMTEwLTEuOWg2LjU3N2EuOTUuOTUgMCAwMTAgMS45aC02LjU3N3ptLTUuNjM4LTYuNjVhLjk1Ljk1IDAgMDEwLTEuOWgxMi4yMTZhLjk1Ljk1IDAgMTEwIDEuOUgzNS41NzV6bTE4LjgzNS02LjY5MmEzLjQwOCAzLjQwOCAwIDAxLjQtNS4xM2wxMi4xNjUtOC45YS45MzUuOTM1IDAgMDExLjIxNS4xLjk1OC45NTggMCAwMS4xIDEuMjI3bC04LjggMTIuM2EzLjMzNCAzLjMzNCAwIDAxLTQgMS4xMzcgMy4zMjQgMy4zMjQgMCAwMS0xLjA4NS0uNzM5bC4wMDUuMDA1em0xLjUtMy41OTVhMS40ODUgMS40ODUgMCAwMC45NzkgMi42ODIgMS40NjYgMS40NjYgMCAwMDEuMDc1LS42MDhsNS4zNjctNy41LTcuNDIxIDUuNDI2em0tMjUuOTc2IDMuNjM2YS45NS45NSAwIDAxMC0xLjloMTcuODU0YS45NS45NSAwIDExMCAxLjlIMjkuOTM0em0zLjc1OS02LjY0OWEuOTUuOTUgMCAwMTAtMS45aDE0LjA5NWEuOTUuOTUgMCAwMTAgMS45SDMzLjY5M3ptNC43LTYuNjVhLjk1Ljk1IDAgMTEwLTEuOWg5LjRhLjk1Ljk1IDAgMTEwIDEuOWgtOS40em00LjctNi42NWEuOTUuOTUgMCAxMTAtMS45aDQuN2EuOTUuOTUgMCAwMTAgMS45aC00Ljd6XCIsXG4gICAgZmlsbDogXCIjRkY0MzYxXCJcbiAgfSkpKTtcbn1cbmV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTVRFd0lpQm9aV2xuYUhROUlqRXhNQ0lnZG1sbGQwSnZlRDBpTUNBd0lERXhNQ0F4TVRBaUlHWnBiR3c5SW01dmJtVWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SStDanh3WVhSb0lHOXdZV05wZEhrOUlqQXVNVEF5SWlCa1BTSk5OelVnTUVnek5VTXhOUzQyTnlBd0lEQWdNVFV1TmpjZ01DQXpOVlkzTlVNd0lEazBMak16SURFMUxqWTNJREV4TUNBek5TQXhNVEJJTnpWRE9UUXVNek1nTVRFd0lERXhNQ0E1TkM0ek15QXhNVEFnTnpWV016VkRNVEV3SURFMUxqWTNJRGswTGpNeklEQWdOelVnTUZvaUlHWnBiR3c5SWlOR1JqUXpOakVpTHo0S1BIQmhkR2dnWkQwaVRUVTJMakl5TnlBNE5DNHdNREF4UXpVMkxqRTRNU0E0TkM0d01EQXhJRFUyTGpFek5pQTROQzR3TURBeElEVTJMakE1SURnMExqQXdNREZETlRRdU1UY3pOU0E0TXk0NU9UZzRJRFV5TGpJMk16TWdPRE11TnpjNE1TQTFNQzR6T1RjZ09ETXVNelF5TWtNMU1DNHhOVEkySURnekxqSTRORFlnTkRrdU9UUXhJRGd6TGpFek1qUWdORGt1T0RBNE55QTRNaTQ1TVRreFF6UTVMalkzTmpNZ09ESXVOekExTnlBME9TNDJNelFnT0RJdU5EUTROaUEwT1M0Mk9URWdPREl1TWpBME1VTTBPUzQzTVRjeElEZ3lMakE0TWpnZ05Ea3VOelkzTVNBNE1TNDVOamdnTkRrdU9ETTRNU0E0TVM0NE5qWXlRelE1TGprd09URWdPREV1TnpZME5DQTBPUzQ1T1RrMklEZ3hMalkzTnpnZ05UQXVNVEEwTkNBNE1TNDJNVEUxUXpVd0xqSXdPVE1nT0RFdU5UUTFNU0ExTUM0ek1qWXpJRGd4TGpVd01ETWdOVEF1TkRRNE5pQTRNUzQwTnprMlF6VXdMalUzTVNBNE1TNDBOVGtnTlRBdU5qazJNaUE0TVM0ME5qSTRJRFV3TGpneE55QTRNUzQwT1RFeFF6VXlMakk1TURZZ09ERXVPRE13TmlBMU15NDNPVE0ySURneUxqQXlOamtnTlRVdU16QTFJRGd5TGpBM056RldPREF1TWpBd01VTTFOUzR6TURBNUlEZ3dMakEzTkRFZ05UVXVNekl5TVNBM09TNDVORGcySURVMUxqTTJOelVnTnprdU9ETXhNVU0xTlM0ME1USTVJRGM1TGpjeE16VWdOVFV1TkRneE5DQTNPUzQyTURZeklEVTFMalUyT1RFZ056a3VOVEUxTjBNMU5TNDJOVFkzSURjNUxqUXlOVElnTlRVdU56WXhOeUEzT1M0ek5UTXhJRFUxTGpnM056Y2dOemt1TXpBMFF6VTFMams1TXpjZ056a3VNalUwT0NBMU5pNHhNVGcxSURjNUxqSXlPVFVnTlRZdU1qUTBOU0EzT1M0eU1qazFRelUyTGpNM01EVWdOemt1TWpJNU5TQTFOaTQwT1RVeUlEYzVMakkxTkRnZ05UWXVOakV4TXlBM09TNHpNRFJETlRZdU56STNNeUEzT1M0ek5UTXhJRFUyTGpnek1qTWdOemt1TkRJMU1pQTFOaTQ1TVRrNUlEYzVMalV4TlRkRE5UY3VNREEzTmlBM09TNDJNRFl6SURVM0xqQTNOakVnTnprdU56RXpOU0ExTnk0eE1qRTFJRGM1TGpnek1URkROVGN1TVRZMk9DQTNPUzQ1TkRnMklEVTNMakU0T0RFZ09EQXVNRGMwTVNBMU55NHhPRFFnT0RBdU1qQXdNVlk0TWk0d05qa3hRell3TGpZeE9URWdPREV1T1RFeE1pQTJNeTQ1TnpVMklEZ3dMams0T0RnZ05qY3VNREE1SURjNUxqTTJPVEZNTmpZdU1EZ3pJRGMzTGpjME9ESkROalV1T1RVM01TQTNOeTQxTXlBMk5TNDVNakkySURjM0xqSTNNRGdnTmpVdU9UZzNJRGMzTGpBeU56SkROall1TURVeE5DQTNOaTQzT0RNM0lEWTJMakl3T1RZZ056WXVOVGMxTlNBMk5pNDBNamNnTnpZdU5EUTRNVU0yTmk0MU16TTRJRGMyTGpNNE5UWWdOall1TmpVeE9TQTNOaTR6TkRVZ05qWXVOemMwTlNBM05pNHpNamcyUXpZMkxqZzVOeklnTnpZdU16RXlNaUEyTnk0d01qRTRJRGMyTGpNeU1EVWdOamN1TVRReE1pQTNOaTR6TlRJNFF6WTNMakkyTURjZ056WXVNemcxTVNBMk55NHpOekkwSURjMkxqUTBNRGdnTmpjdU5EY3dNU0EzTmk0MU1UWTNRelkzTGpVMk56Y2dOell1TlRreU55QTJOeTQyTkRreklEYzJMalk0TnpRZ05qY3VOekVnTnpZdU56azFNa3cyT0M0Mk16TWdOemd1TkRFek1VTTNNUzQxT0NBM05pNDFNVGc0SURjMExqQTNNallnTnpNdU9UazNOaUEzTlM0NU16TWdOekV1TURJNU1rdzNOQzR6TXpNZ056QXVNRGsxTVVNM05DNHhNVFlnTmprdU9UWTNOQ0EzTXk0NU5UZ3lJRFk1TGpjMU9UTWdOek11T0Rrek9DQTJPUzQxTVRVNVF6Y3pMamd5T1RRZ05qa3VNamN5TlNBM015NDROak0ySURZNUxqQXhNelVnTnpNdU9UZzVJRFk0TGpjNU5USkROelF1TURRNU9DQTJPQzQyT0RjMUlEYzBMakV6TVRRZ05qZ3VOVGt5T0NBM05DNHlNamt4SURZNExqVXhOME0zTkM0ek1qWTNJRFk0TGpRME1URWdOelF1TkRNNE5TQTJPQzR6T0RVMElEYzBMalUxTnprZ05qZ3VNelV6TVVNM05DNDJOemN5SURZNExqTXlNRGtnTnpRdU9EQXhPU0EyT0M0ek1USTNJRGMwTGpreU5EVWdOamd1TXpJNVF6YzFMakEwTnpFZ05qZ3VNelExTXlBM05TNHhOalV5SURZNExqTTROVGNnTnpVdU1qY3lJRFk0TGpRME9ERk1Oell1T0RjeUlEWTVMak00TlRGRE56Z3VOVEF3TmlBMk5pNHlOakU1SURjNUxqUXhOU0EyTWk0NE1UVTVJRGM1TGpVME9TQTFPUzR5T1RZeFNEYzNMamRETnpjdU5EUTRNU0ExT1M0eU9UWXhJRGMzTGpJd05qUWdOVGt1TVRrMklEYzNMakF5T0RNZ05Ua3VNREUzT0VNM05pNDROVEF4SURVNExqZ3pPVGNnTnpZdU56VWdOVGd1TlRrNElEYzJMamMxSURVNExqTTBOakZETnpZdU56VWdOVGd1TURrME1TQTNOaTQ0TlRBeElEVTNMamcxTWpVZ056Y3VNREk0TXlBMU55NDJOelF6UXpjM0xqSXdOalFnTlRjdU5EazJNaUEzTnk0ME5EZ3hJRFUzTGpNNU5qRWdOemN1TnlBMU55NHpPVFl4U0RjNUxqVTFOa00zT1M0ME1qSWdOVE11T0RjM0lEYzRMalV3TnpZZ05UQXVORE14TmlBM05pNDROemtnTkRjdU16QTVNVXczTlM0eU56a2dORGd1TWpRMU1VTTNOUzR4TXpZNUlEUTRMak15T0RrZ056UXVPVGMxSURRNExqTTNNekVnTnpRdU9ERWdORGd1TXpjek1rTTNOQzQyTkRRMUlEUTRMak0zTXlBM05DNDBPREU1SURRNExqTXlPRGdnTnpRdU16TTRPU0EwT0M0eU5EVTBRemMwTGpFNU5Ua2dORGd1TVRZeE9TQTNOQzR3TnpjMklEUTRMakEwTWpFZ056TXVPVGsySURRM0xqZzVPREZETnpNdU9EY3dOQ0EwTnk0Mk9DQTNNeTQ0TXpVNUlEUTNMalF5TVRJZ056TXVPU0EwTnk0eE56YzVRemN6TGprMk5DQTBOaTQ1TXpRMUlEYzBMakV5TVRRZ05EWXVOekkyTWlBM05DNHpNemdnTkRZdU5UazRNVXczTlM0NU16Z2dORFV1TmpZMU1rTTNOQzR3TnpjMklEUXlMalk1TmpRZ056RXVOVGcxSURRd0xqRTNORGNnTmpndU5qTTRJRE00TGpJNE1ESk1OamN1TnpFMUlETTVMamc1T0RGRE5qY3VOak16TmlBME1DNHdOREkxSURZM0xqVXhOVEVnTkRBdU1UWXlOaUEyTnk0ek56RTVJRFF3TGpJME5qRkROamN1TWpJNE55QTBNQzR6TWprMklEWTNMakEyTlRnZ05EQXVNemN6TkNBMk5pNDVJRFF3TGpNM016SkROall1TnpNMU1pQTBNQzR6TnpNMUlEWTJMalUzTXpJZ05EQXVNekk1TmlBMk5pNDBNekVnTkRBdU1qUTJNVU0yTmk0eU1UTTVJRFF3TGpFeE9EVWdOall1TURVMU9DQXpPUzQ1TVRBMUlEWTFMams1TVRJZ016a3VOalkzTVVNMk5TNDVNalkySURNNUxqUXlNemNnTmpVdU9UWXdOeUF6T1M0eE5qUTJJRFkyTGpBNE5pQXpPQzQ1TkRZeVREWTNMakF4TXlBek55NHpNalF4UXpZekxqazNPVGNnTXpVdU56QTBNeUEyTUM0Mk1qTXhJRE0wTGpjNE1Ua2dOVGN1TVRnNElETTBMall5TkRGV016WXVORGsxTVVNMU55NHhPRGdnTXpZdU56UTBOQ0ExTnk0d09EZzVJRE0yTGprNE16VWdOVFl1T1RFeU55QXpOeTR4TlRrNFF6VTJMamN6TmpRZ016Y3VNek0yTVNBMU5pNDBPVGN6SURNM0xqUXpOVElnTlRZdU1qUTRJRE0zTGpRek5USkROVFV1T1RrNE55QXpOeTQwTXpVeUlEVTFMamMxT1RZZ016Y3VNek0yTVNBMU5TNDFPRE16SURNM0xqRTFPVGhETlRVdU5EQTNJRE0yTGprNE16VWdOVFV1TXpBNElETTJMamMwTkRRZ05UVXVNekE0SURNMkxqUTVOVEZXTXpRdU5qRTRNa00xTlM0d016SWdNelF1TmpNeE1pQTFOQzQzTkRnZ016UXVOalE1TVNBMU5DNDBOQ0F6TkM0Mk56SXhURFV6TGpRek1TQXpOQzQzTlRBeFF6VXlMalUxTWpZZ016UXVPRFV5TnlBMU1TNDJPREExSURNMUxqQXdORE1nTlRBdU9ERTVJRE0xTGpJd05ERkROVEF1TmprNE1TQXpOUzR5TXpFNUlEVXdMalUzTWprZ016VXVNak0xTlNBMU1DNDBOVEEzSURNMUxqSXhORFpETlRBdU16STROQ0F6TlM0eE9UTTNJRFV3TGpJeE1UWWdNelV1TVRRNE9DQTFNQzR4TURZNElETTFMakE0TWpSRE5UQXVNREF5TVNBek5TNHdNVFlnTkRrdU9URXhOaUF6TkM0NU1qazBJRFE1TGpnME1EVWdNelF1T0RJM09FTTBPUzQzTmprMUlETTBMamN5TmpFZ05Ea3VOekU1TXlBek5DNDJNVEV6SURRNUxqWTVNeUF6TkM0ME9UQXhRelE1TGpZek5pQXpOQzR5TkRVMklEUTVMalkzT0RNZ016TXVPVGc0TlNBME9TNDRNVEEzSURNekxqYzNOVEZETkRrdU9UUXpJRE16TGpVMk1UZ2dOVEF1TVRVME5pQXpNeTQwTURrM0lEVXdMak01T1NBek15NHpOVEl5UXpVeExqTTVOelVnTXpNdU1USXhOeUExTWk0ME1Ea2dNekl1T1RVeE55QTFNeTQwTWpnZ016SXVPRFF6TVZZek1TNDNORE15U0RVeUxqQXhPVU0xTVM0ek9UYzNJRE14TGpjek1EUWdOVEF1T0RBMk1TQXpNUzQwTnpRMklEVXdMak0zTVRJZ016RXVNRE13TmtNME9TNDVNell6SURNd0xqVTROamNnTkRrdU5qa3lOeUF5T1M0NU9UQXhJRFE1TGpZNU1qY2dNamt1TXpZNE4wTTBPUzQyT1RJM0lESTRMamMwTnpJZ05Ea3VPVE0yTXlBeU9DNHhOVEExSURVd0xqTTNNVElnTWpjdU56QTJOVU0xTUM0NE1EWXhJREkzTGpJMk1qWWdOVEV1TXprM055QXlOeTR3TURZNUlEVXlMakF4T1NBeU5pNDVPVFF4U0RZd0xqUTNOa00yTVM0d09UY3pJREkzTGpBd05qa2dOakV1TmpnNE9TQXlOeTR5TmpJMklEWXlMakV5TXpnZ01qY3VOekEyTlVNMk1pNDFOVGczSURJNExqRTFNRFVnTmpJdU9EQXlNaUF5T0M0M05EY3lJRFl5TGpnd01qSWdNamt1TXpZNE4wTTJNaTQ0TURJeUlESTVMams1TURFZ05qSXVOVFU0TnlBek1DNDFPRFkzSURZeUxqRXlNemdnTXpFdU1ETXdOa00yTVM0Mk9EZzVJRE14TGpRM05EWWdOakV1TURrM015QXpNUzQzTXpBMElEWXdMalEzTmlBek1TNDNORE15U0RVNUxqQTJOMVl6TWk0NE56VXhRell5TGpRM01qUWdNek11TWpjNU5pQTJOUzQzTlRneUlETTBMak00TURVZ05qZ3VOeklnTXpZdU1UQTVNVU0yT0M0M05DQXpOaTR4TWpBeElEWTRMamMyTVNBek5pNHhNVGd4SURZNExqYzRJRE0yTGpFek1ERkROamd1TnprNUlETTJMakUwTWpFZ05qZ3VPREE1SURNMkxqRTJNREVnTmpndU9ESTNJRE0yTGpFM01qRkROekF1TkRVME15QXpOeTR4TXpBMElEY3hMamsyT1RrZ016Z3VNalkyT0NBM015NHpORFlnTXprdU5UWXdNa3czTlM0ek5qVWdNemN1TlRJeE1VdzNOQzR3TXpZZ016WXVNVGMyTVV3M09DNHdNak1nTXpJdU1UUTJNVXc0TWk0d01Ea2dNell1TVRjMk1VdzNPQzR3TWpNZ05EQXVNakEyTWt3M05pNDJPVFFnTXpndU9EWXpNa3czTkM0Mk56WWdOREF1T1RBek1VTTNOUzQ1TlRjZ05ESXVNams0TVNBM055NHdPREEwSURRekxqZ3pJRGM0TGpBeU5pQTBOUzQwTnpFeFF6YzRMakF6T1NBME5TNDBPRGd4SURjNExqQTFOaUEwTlM0MU1EQXhJRGM0TGpBMk55QTBOUzQxTVRneFF6YzRMakEzT0NBME5TNDFNell4SURjNExqQTNOeUEwTlM0MU5Ua3hJRGM0TGpBNE55QTBOUzQxTnpreFF6Z3dMak13TVRRZ05Ea3VORFk0T0NBNE1TNDBOalU1SURVekxqZzJOemNnT0RFdU5EWTFPU0ExT0M0ek5ETTJRemd4TGpRMk5Ua2dOakl1T0RFNU5TQTRNQzR6TURFMElEWTNMakl4T0RRZ056Z3VNRGczSURjeExqRXdPREpETnpndU1EYzNJRGN4TGpFeU9ESWdOemd1TURjNElEY3hMakUwT1RFZ056Z3VNRFkzSURjeExqRTJPREZETnpndU1EVTJJRGN4TGpFNE56RWdOemd1TURJNElEY3hMakl4TnpJZ056Z3VNREVnTnpFdU1qUXpNa00zTlM0M09UYzJJRGMxTGpBM01qa2dOekl1TmpNME1pQTNPQzR5TmpZNUlEWTRMamd5TmlBNE1DNDFNVFl4UXpZNExqZ3dPQ0E0TUM0MU1qZ3hJRFk0TGpjNU9DQTRNQzQxTkRZeElEWTRMamMzT1NBNE1DNDFOVGN4UXpZNExqYzFNRFFnT0RBdU5UY3hOQ0EyT0M0M01qRWdPREF1TlRnME1TQTJPQzQyT1RFZ09EQXVOVGsxTVVNMk5DNDVNVGMzSURneUxqYzVNVGNnTmpBdU5qTTFJRGd6TGprMk1Ua2dOVFl1TWpZNUlEZ3pMams0T1RGRE5UWXVNall4SURnekxqazRPVEVnTlRZdU1qVTFJRGd6TGprNE9URWdOVFl1TWpRMklEZ3pMams0T1RGRE5UWXVNak0zSURnekxqazRPVEVnTlRZdU1qTXpJRGcwTGpBd01ERWdOVFl1TWpJM0lEZzBMakF3TURGYVRUYzJMalk0T0NBek5pNHhPRFl5VERjNExqQXhPQ0F6Tnk0MU16RXhURGM1TGpNME5pQXpOaTR4T0RZeVREYzRMakF4T0NBek5DNDROREl5VERjMkxqWTRPQ0F6Tmk0eE9EWXlXazAxTnk0eE9EZ2dNekl1TnpJMU1WWXlPUzQ0TlRVeFNEWXdMalEzTjBNMk1DNDJNRE1nTWprdU9EVTFNU0EyTUM0M01qTTRJREk1TGpnd05TQTJNQzQ0TVRJNUlESTVMamN4TlRsRE5qQXVPVEF4T1NBeU9TNDJNalk1SURZd0xqazFNaUF5T1M0MU1EWXhJRFl3TGprMU1pQXlPUzR6T0RBeFF6WXdMamsxTWlBeU9TNHlOVFF4SURZd0xqa3dNVGtnTWprdU1UTXpNeUEyTUM0NE1USTVJREk1TGpBME5ESkROakF1TnpJek9DQXlPQzQ1TlRVeElEWXdMall3TXlBeU9DNDVNRFV5SURZd0xqUTNOeUF5T0M0NU1EVXlTRFV5TGpBeVF6VXhMamc1TkNBeU9DNDVNRFV5SURVeExqYzNNeklnTWpndU9UVTFNU0ExTVM0Mk9EUXhJREk1TGpBME5ESkROVEV1TlRrMU1TQXlPUzR4TXpNeklEVXhMalUwTlNBeU9TNHlOVFF4SURVeExqVTBOU0F5T1M0ek9EQXhRelV4TGpVME5TQXlPUzQxTURZeElEVXhMalU1TlRFZ01qa3VOakkyT1NBMU1TNDJPRFF4SURJNUxqY3hOVGxETlRFdU56Y3pNaUF5T1M0NE1EVWdOVEV1T0RrMElESTVMamcxTlRFZ05USXVNRElnTWprdU9EVTFNVWcxTlM0elZqTXlMamN5TlRGRE5UVXVOREV6SURNeUxqY3lNREVnTlRVdU5URTJJRE15TGpjeU5URWdOVFV1TmpJMUlETXlMamN4T0RGRE5UVXVOemM1SURNeUxqY3hPREVnTlRVdU9UTXpJRE15TGpjd05URWdOVFl1TURnM0lETXlMamN3TlRGSU5UWXVNVFU0U0RVMkxqSTBRelUyTGpVME5DQXpNaTQzTURBeElEVTJMamcxTmlBek1pNDNNRFl4SURVM0xqRTRNeUF6TWk0M01qQXhURFUzTGpFNE9DQXpNaTQzTWpVeFdrMDBNUzR5TVRNZ056VXVORFUwTVVNME1DNDVOakV4SURjMUxqUTFOREVnTkRBdU56RTVOQ0EzTlM0ek5UUXhJRFF3TGpVME1UTWdOelV1TVRjMU9VTTBNQzR6TmpNeElEYzBMams1TnpjZ05EQXVNall6SURjMExqYzFOakVnTkRBdU1qWXpJRGMwTGpVd05ESkROREF1TWpZeklEYzBMakkxTWpJZ05EQXVNell6TVNBM05DNHdNVEEySURRd0xqVTBNVE1nTnpNdU9ETXlORU0wTUM0M01UazBJRGN6TGpZMU5ESWdOREF1T1RZeE1TQTNNeTQxTlRReElEUXhMakl4TXlBM015NDFOVFF4U0RRM0xqYzVRelE0TGpBME1Ua2dOek11TlRVME1TQTBPQzR5T0RNMklEY3pMalkxTkRJZ05EZ3VORFl4TnlBM015NDRNekkwUXpRNExqWXpPVGtnTnpRdU1ERXdOaUEwT0M0M05DQTNOQzR5TlRJeUlEUTRMamMwSURjMExqVXdOREpETkRndU56UWdOelF1TnpVMk1TQTBPQzQyTXprNUlEYzBMams1TnpjZ05EZ3VORFl4TnlBM05TNHhOelU1UXpRNExqSTRNellnTnpVdU16VTBNU0EwT0M0d05ERTVJRGMxTGpRMU5ERWdORGN1TnprZ056VXVORFUwTVVnME1TNHlNVE5hVFRNMUxqVTNOU0EyT0M0NE1EUXhRek0xTGpNeU16RWdOamd1T0RBME1TQXpOUzR3T0RFMElEWTRMamN3TkNBek5DNDVNRE16SURZNExqVXlOVGxETXpRdU56STFNU0EyT0M0ek5EYzNJRE0wTGpZeU5TQTJPQzR4TURZeElETTBMall5TlNBMk55NDROVFF4UXpNMExqWXlOU0EyTnk0Mk1ESXlJRE0wTGpjeU5URWdOamN1TXpZd05TQXpOQzQ1TURNeklEWTNMakU0TWpSRE16VXVNRGd4TkNBMk55NHdNRFF5SURNMUxqTXlNekVnTmpZdU9UQTBNaUF6TlM0MU56VWdOall1T1RBME1rZzBOeTQzT1RGRE5EZ3VNRFF6SURZMkxqa3dORElnTkRndU1qZzBOaUEyTnk0d01EUXlJRFE0TGpRMk1qZ2dOamN1TVRneU5FTTBPQzQyTkRBNUlEWTNMak0yTURVZ05EZ3VOelF4SURZM0xqWXdNaklnTkRndU56UXhJRFkzTGpnMU5ERkRORGd1TnpReElEWTRMakV3TmpFZ05EZ3VOalF3T1NBMk9DNHpORGMzSURRNExqUTJNamdnTmpndU5USTFPVU0wT0M0eU9EUTJJRFk0TGpjd05DQTBPQzR3TkRNZ05qZ3VPREEwTVNBME55NDNPVEVnTmpndU9EQTBNVWd6TlM0MU56VmFUVFUwTGpReElEWXlMakV4TWpKRE5UUXVNRFkzTnlBMk1TNDNOalExSURVekxqZ3dOQ0EyTVM0ek5EYzBJRFV6TGpZek5qZ2dOakF1T0RnNVF6VXpMalEyT1RVZ05qQXVORE13TnlBMU15NDBNREkySURVNUxqazBNVGtnTlRNdU5EUXdOU0ExT1M0ME5UVTBRelV6TGpRM09EUWdOVGd1T1RZNUlEVXpMall5TURNZ05UZ3VORGsyTkNBMU15NDROVFkySURVNExqQTJPVFpETlRRdU1Ea3lPQ0ExTnk0Mk5ESTNJRFUwTGpReE9DQTFOeTR5TnpFMUlEVTBMamd4SURVMkxqazRNVEZNTmpZdU9UYzFJRFE0TGpBNE1USkROamN1TVRVMU9TQTBOeTQ1TkRrMklEWTNMak0zT0RFZ05EY3VPRGczTWlBMk55NDJNREV4SURRM0xqa3dOVFZETmpjdU9ESTBNU0EwTnk0NU1qTTVJRFk0TGpBek15QTBPQzR3TWpFM0lEWTRMakU1SURRNExqRTRNVEpETmpndU16UTROQ0EwT0M0ek5ERTBJRFk0TGpRME5UTWdORGd1TlRVeU15QTJPQzQwTmpNMklEUTRMamMzTmpsRE5qZ3VORGd4T1NBME9TNHdNREUwSURZNExqUXlNRFFnTkRrdU1qSTFOQ0EyT0M0eU9TQTBPUzQwTURreVREVTVMalE1SURZeExqY3dPVEZETlRrdU1qQTNOU0EyTWk0eE1EUTNJRFU0TGpnME1Ua2dOakl1TkRNek9DQTFPQzQwTVRnNUlEWXlMalkzTXpKRE5UY3VPVGsxT0NBMk1pNDVNVEkySURVM0xqVXlOVFlnTmpNdU1EVTJOaUExTnk0d05ERWdOak11TURrMU1VTTFOaTQ1TlRJZ05qTXVNVEF5TVNBMU5pNDROalVnTmpNdU1UQTJNU0ExTmk0M056Y2dOak11TVRBMk1VTTFOaTR6TXpVZ05qTXVNVEExTnlBMU5TNDRPVGMySURZekxqQXhOekVnTlRVdU5Ea3dOQ0EyTWk0NE5EVTJRelUxTGpBNE16RWdOakl1TmpjMElEVTBMamN4TkRFZ05qSXVOREl6TVNBMU5DNDBNRFVnTmpJdU1UQTNNa3cxTkM0ME1TQTJNaTR4TVRJeVdrMDFOUzQ1TVNBMU9DNDFNVGN4UXpVMUxqWTBPVElnTlRndU56QTJPU0ExTlM0ME5UY3pJRFU0TGprM05qUWdOVFV1TXpZek15QTFPUzR5T0RRNVF6VTFMakkyT1RJZ05Ua3VOVGt6TkNBMU5TNHlOemd5SURVNUxqa3lOREVnTlRVdU16ZzRPQ0EyTUM0eU1qY3hRelUxTGpRNU9UUWdOakF1TlRNZ05UVXVOekExTmlBMk1DNDNPRGczSURVMUxqazNOak1nTmpBdU9UWTBNVU0xTmk0eU5EWTVJRFl4TGpFek9UVWdOVFl1TlRZM015QTJNUzR5TWpJZ05UWXVPRGc1SURZeExqRTVPVEZETlRjdU1UQXhOaUEyTVM0eE9ESXhJRFUzTGpNd09DQTJNUzR4TVRnNElEVTNMalE1TXpjZ05qRXVNREV6T0VNMU55NDJOemt6SURZd0xqa3dPRGdnTlRjdU9ETTVPQ0EyTUM0M05qUTFJRFUzTGprMk5DQTJNQzQxT1RFeFREWXpMak16TVNBMU15NHdPVEV4VERVMUxqa3hJRFU0TGpVeE56RmFUVEk1TGprek5DQTJNaTR4TlRNeFF6STVMalk0TWpFZ05qSXVNVFV6TVNBeU9TNDBOREEwSURZeUxqQTFNeUF5T1M0eU5qSXpJRFl4TGpnM05EbERNamt1TURnME1TQTJNUzQyT1RZM0lESTRMams0TkNBMk1TNDBOVFV4SURJNExqazROQ0EyTVM0eU1ETXhRekk0TGprNE5DQTJNQzQ1TlRFeUlESTVMakE0TkRFZ05qQXVOekE1TlNBeU9TNHlOakl6SURZd0xqVXpNVFJETWprdU5EUXdOQ0EyTUM0ek5UTXlJREk1TGpZNE1qRWdOakF1TWpVek1pQXlPUzQ1TXpRZ05qQXVNalV6TWtnME55NDNPRGhETkRndU1EUWdOakF1TWpVek1pQTBPQzR5T0RFMklEWXdMak0xTXpJZ05EZ3VORFU1T0NBMk1DNDFNekUwUXpRNExqWXpOemtnTmpBdU56QTVOU0EwT0M0M016Z2dOakF1T1RVeE1pQTBPQzQzTXpnZ05qRXVNakF6TVVNME9DNDNNemdnTmpFdU5EVTFNU0EwT0M0Mk16YzVJRFl4TGpZNU5qY2dORGd1TkRVNU9DQTJNUzQ0TnpRNVF6UTRMakk0TVRZZ05qSXVNRFV6SURRNExqQTBJRFl5TGpFMU16RWdORGN1TnpnNElEWXlMakUxTXpGSU1qa3VPVE0wV2swek15NDJPVE1nTlRVdU5UQTBNa016TXk0ME5ERWdOVFV1TlRBME1pQXpNeTR4T1RrMElEVTFMalF3TkNBek15NHdNakV5SURVMUxqSXlOVGhETXpJdU9EUXpNU0ExTlM0d05EYzNJRE15TGpjME15QTFOQzQ0TURZZ016SXVOelF6SURVMExqVTFOREZETXpJdU56UXpJRFUwTGpNd01qRWdNekl1T0RRek1TQTFOQzR3TmpBMUlETXpMakF5TVRJZ05UTXVPRGd5TTBNek15NHhPVGswSURVekxqY3dORElnTXpNdU5EUXhJRFV6TGpZd05ERWdNek11TmpreklEVXpMall3TkRGSU5EY3VOemc0UXpRNExqQTBJRFV6TGpZd05ERWdORGd1TWpneE5pQTFNeTQzTURReUlEUTRMalExT1RnZ05UTXVPRGd5TTBNME9DNDJNemM1SURVMExqQTJNRFVnTkRndU56TTRJRFUwTGpNd01qRWdORGd1TnpNNElEVTBMalUxTkRGRE5EZ3VOek00SURVMExqZ3dOaUEwT0M0Mk16YzVJRFUxTGpBME56Y2dORGd1TkRVNU9DQTFOUzR5TWpVNFF6UTRMakk0TVRZZ05UVXVOREEwSURRNExqQTBJRFUxTGpVd05ESWdORGN1TnpnNElEVTFMalV3TkRKSU16TXVOamt6V2swek9DNHpPVE1nTkRndU9EVXpNVU16T0M0eE5ERWdORGd1T0RVek1TQXpOeTQ0T1RrMElEUTRMamMxTXlBek55NDNNakV6SURRNExqVTNORGhETXpjdU5UUXpNU0EwT0M0ek9UWTNJRE0zTGpRME15QTBPQzR4TlRVZ016Y3VORFF6SURRM0xqa3dNekZETXpjdU5EUXpJRFEzTGpZMU1URWdNemN1TlRRek1TQTBOeTQwTURrMUlETTNMamN5TVRNZ05EY3VNak14TTBNek55NDRPVGswSURRM0xqQTFNeklnTXpndU1UUXhJRFEyTGprMU16RWdNemd1TXpreklEUTJMamsxTXpGSU5EY3VOemt6UXpRNExqQTBOU0EwTmk0NU5UTXhJRFE0TGpJNE5qWWdORGN1TURVek1pQTBPQzQwTmpRM0lEUTNMakl6TVRORE5EZ3VOalF5T1NBME55NDBNRGsxSURRNExqYzBNeUEwTnk0Mk5URXhJRFE0TGpjME15QTBOeTQ1TURNeFF6UTRMamMwTXlBME9DNHhOVFVnTkRndU5qUXlPU0EwT0M0ek9UWTNJRFE0TGpRMk5EY2dORGd1TlRjME9FTTBPQzR5T0RZMklEUTRMamMxTXlBME9DNHdORFVnTkRndU9EVXpNU0EwTnk0M09UTWdORGd1T0RVek1VZ3pPQzR6T1ROYVRUUXpMakE1TXlBME1pNHlNRE14UXpReUxqZzBNVEVnTkRJdU1qQXpNU0EwTWk0MU9UazBJRFF5TGpFd016RWdOREl1TkRJeE15QTBNUzQ1TWpRNVF6UXlMakkwTXpFZ05ERXVOelEyT0NBME1pNHhORE1nTkRFdU5UQTFNU0EwTWk0eE5ETWdOREV1TWpVek1rTTBNaTR4TkRNZ05ERXVNREF4TWlBME1pNHlORE14SURRd0xqYzFPVFlnTkRJdU5ESXhNeUEwTUM0MU9ERTBRelF5TGpVNU9UUWdOREF1TkRBek15QTBNaTQ0TkRFeElEUXdMak13TXpFZ05ETXVNRGt6SURRd0xqTXdNekZJTkRjdU56a3pRelE0TGpBME5TQTBNQzR6TURNeElEUTRMakk0TmpZZ05EQXVOREF6TXlBME9DNDBOalEzSURRd0xqVTRNVFJETkRndU5qUXlPU0EwTUM0M05UazJJRFE0TGpjME15QTBNUzR3TURFeUlEUTRMamMwTXlBME1TNHlOVE15UXpRNExqYzBNeUEwTVM0MU1EVXhJRFE0TGpZME1qa2dOREV1TnpRMk9DQTBPQzQwTmpRM0lEUXhMamt5TkRsRE5EZ3VNamcyTmlBME1pNHhNRE14SURRNExqQTBOU0EwTWk0eU1ETXhJRFEzTGpjNU15QTBNaTR5TURNeFNEUXpMakE1TTFvaUlHWnBiR3c5SWlOR1JqUXpOakVpTHo0S1BDOXpkbWMrQ2c9PVwiO1xuZXhwb3J0IHsgU3ZnU3BlZWQgYXMgUmVhY3RDb21wb25lbnQgfTsiLCJ2YXIgX3BhdGgsIF9wYXRoMjtcbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gPyBPYmplY3QuYXNzaWduLmJpbmQoKSA6IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5mdW5jdGlvbiBTdmdWZWN0b3IocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIF9leHRlbmRzKHtcbiAgICB3aWR0aDogMTEwLFxuICAgIGhlaWdodDogMTEwLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgfSwgcHJvcHMpLCBfcGF0aCB8fCAoX3BhdGggPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTc1IDBIMzVDMTUuNjcgMCAwIDE1LjY3IDAgMzV2NDBjMCAxOS4zMyAxNS42NyAzNSAzNSAzNWg0MGMxOS4zMyAwIDM1LTE1LjY3IDM1LTM1VjM1YzAtMTkuMzMtMTUuNjctMzUtMzUtMzV6XCIsXG4gICAgZmlsbDogXCIjRTRGRkVFXCJcbiAgfSkpLCBfcGF0aDIgfHwgKF9wYXRoMiA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNNzkuNDc5IDY2LjU4OWwtLjEyLTMuNzM1YTIuMzcgMi4zNyAwIDAwLTIuNDQyLTIuM2wtLjUwNy4wMTVhMjEuMjgyIDIxLjI4MiAwIDAwLTYuMTY0LTEwLjY4NmwtLjAzMi0uMDNhMjEuMzYyIDIxLjM2MiAwIDAwLTYuNDktNC4yMDZsNi41NS0uMmE0LjQgNC40IDAgMDA4LjUtMS43MzIgNC40MTUgNC40MTUgMCAwMC0yLjg0LTMuOTg4IDQuMzUyIDQuMzUyIDAgMDAtMS42OTctLjI3NyA0LjQgNC40IDAgMDAtNC4wNTggMy4wNDVsLTExLjc5MS4zNTMtLjAxMy0uNGEyLjM2OSAyLjM2OSAwIDAwLTIuNDQzLTIuM2wtMy43NzQuMTA1YTIuMzU3IDIuMzU3IDAgMDAtMi4yOTIgMi40MzhsLjAxMy40LTExLjc5MS4zNTRhNC40IDQuNCAwIDAwLTguNSAxLjczMiA0LjQgNC40IDAgMDA4LjU4NiAxLjIxMmw2LjU0OS0uMmEyMS40NSAyMS40NSAwIDAwLTExLjcxMiAxNS42NTNsLS42My4wMTlhMi4zNzcgMi4zNzcgMCAwMC0yLjMgMi40NDZsLjExOSAzLjc1YTIuMzY3IDIuMzY3IDAgMDAyLjQ0MyAyLjNsMy43NTEtLjExMmEyLjM3OCAyLjM3OCAwIDAwMi4zLTIuNDQ2bC0uMTItMy43NTFhMi4zNjcgMi4zNjcgMCAwMC0yLjQ0Mi0yLjNoLS4xMDhhMTguNTI3IDE4LjUyNyAwIDAxMTQuMjA3LTE0LjM2NiAyLjM2NSAyLjM2NSAwIDAwMi4yMTUgMS4zNWwzLjc1MS0uMTEyYTIuMzcgMi4zNyAwIDAwMi4xMjItMS40OCAxOC42IDE4LjYgMCAwMTE1LjA5MyAxMy40ODhsLS4yMzEuMDA3YTIuMzc4IDIuMzc4IDAgMDAtMi4zIDIuNDQ2bC4xMTkgMy43NWEyLjM2OSAyLjM2OSAwIDAwMi40NDMgMi4zbDMuNzUtLjExMmEyLjM1NCAyLjM1NCAwIDAwMi4yODYtMi40M3ptLTQzLjc1My43NThsLTIuNjI5LjA4LS4wODQtMi42MyAyLjYyOS0uMDc5LjA4NCAyLjYzem0zOC41ODMtMjQuOTZhMS40NTYgMS40NTYgMCAxMS0xLjMxOC45NCAxLjQ3MiAxLjQ3MiAwIDAxMS4zMTgtLjk0em0tNDAuMjgzIDQuMTM4YTEuNDU2IDEuNDU2IDAgMTEtLjA4LTIuOTEzIDEuNDU2IDEuNDU2IDAgMDEuMDc5IDIuOTE0em0xOC44NzMtLjcxOWwtLjA4NC0yLjYyOSAyLjYyOS0uMDc5LjA0MiAxLjMwNy4wNDIgMS4zMDctMi42MjkuMDk0em0yMS4wMDYgMjAuMzg4bC0uMDg0LTIuNjI5IDIuNjI5LS4wNzguMDg0IDIuNjI5LTIuNjI5LjA3OHpcIixcbiAgICBmaWxsOiBcIiM0MDk3NUZcIlxuICB9KSkpO1xufVxuZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlNVEV3SWlCb1pXbG5hSFE5SWpFeE1DSWdkbWxsZDBKdmVEMGlNQ0F3SURFeE1DQXhNVEFpSUdacGJHdzlJbTV2Ym1VaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJK0NqeHdZWFJvSUdROUlrMDNOU0F3U0RNMVF6RTFMalkzSURBZ01DQXhOUzQyTnlBd0lETTFWamMxUXpBZ09UUXVNek1nTVRVdU5qY2dNVEV3SURNMUlERXhNRWczTlVNNU5DNHpNeUF4TVRBZ01URXdJRGswTGpNeklERXhNQ0EzTlZZek5VTXhNVEFnTVRVdU5qY2dPVFF1TXpNZ01DQTNOU0F3V2lJZ1ptbHNiRDBpSTBVMFJrWkZSU0l2UGdvOGNHRjBhQ0JrUFNKTk56a3VORGM0T1NBMk5pNDFPRGxNTnprdU16VTVPU0EyTWk0NE5UUXhRemM1TGpNMU1TQTJNaTQxTkRJMUlEYzVMakk0TURjZ05qSXVNak0xTnlBM09TNHhOVE1nTmpFdU9UVXhNME0zT1M0d01qVXpJRFl4TGpZMk55QTNPQzQ0TkRJM0lEWXhMalF4TURZZ056Z3VOakUxT0NBMk1TNHhPVFk1UXpjNExqTTRPRGdnTmpBdU9UZ3pNeUEzT0M0eE1qRTVJRFl3TGpneE5qWWdOemN1T0RNd05DQTJNQzQzTURZeVF6YzNMalV6T0RrZ05qQXVOVGsxT1NBM055NHlNamcxSURZd0xqVTBOREVnTnpZdU9URTJPU0EyTUM0MU5UUk1Oell1TkRFZ05qQXVOVFk1UXpjMUxqUTFOVFFnTlRZdU5EYzJOaUEzTXk0ek1UQTFJRFV5TGpjMU9EUWdOekF1TWpRMU9TQTBPUzQ0T0RNeFREY3dMakl4TXprZ05Ea3VPRFV6TVVNMk9DNHpNalE0SURRNExqQTJPQ0EyTmk0eE1qVTRJRFEyTGpZME1qWWdOak11TnpJME9TQTBOUzQyTkRkTU56QXVNamMwSURRMUxqUTBOekZETnpBdU5qUTVOaUEwTmk0ME1UVTBJRGN4TGpNMU5UWWdORGN1TWpFNU55QTNNaTR5TmpjeUlEUTNMamN4TnpaRE56TXVNVGM0TnlBME9DNHlNVFUwSURjMExqSXpOeUEwT0M0ek56UTRJRGMxTGpJMU5EY2dORGd1TVRZM05FTTNOaTR5TnpJMElEUTNMamsySURjM0xqRTROQ0EwTnk0ek9Ua3lJRGMzTGpneU9ERWdORFl1TlRnME5FTTNPQzQwTnpJeElEUTFMamMyT1RZZ056Z3VPREEzTXlBME5DNDNOVE14SURjNExqYzNOQ0EwTXk0M01UVkROemd1TnpNM09TQTBNaTQxTkRjMElEYzRMakkwTURZZ05ERXVORFF4TnlBM055NHpPVEE1SURRd0xqWTBNREZETnpZdU9UY3dPQ0EwTUM0eU5ERTVJRGMyTGpRM05UVWdNemt1T1RNeE5pQTNOUzQ1TXpNNUlETTVMamN5TnpKRE56VXVNemt5TXlBek9TNDFNakk1SURjMExqZ3hOVFFnTXprdU5ESTROaUEzTkM0eU16Y2dNemt1TkRWRE56TXVNRGN4SURNNUxqUTRNellnTnpFdU9UWTJJRE01TGprM09TQTNNUzR4TmpVZ05EQXVPREkzTVVNM01DNDNNVGM0SURReExqTXdNemtnTnpBdU16Z3hJRFF4TGpnM016UWdOekF1TVRjNE9TQTBNaTQwT1RWTU5UZ3VNemczT1NBME1pNDRORGd4VERVNExqTTNORGtnTkRJdU5EUTRRelU0TGpNMk5qRWdOREl1TVRNMk5DQTFPQzR5T1RVNUlEUXhMamd5T1RZZ05UZ3VNVFk0TXlBME1TNDFORFV5UXpVNExqQTBNRFlnTkRFdU1qWXdPQ0ExTnk0NE5UZ2dOREV1TURBME5DQTFOeTQyTXpFZ05EQXVOemt3TjBNMU55NDBNRFF4SURRd0xqVTNOeUExTnk0eE16Y3lJRFF3TGpReE1ETWdOVFl1T0RRMU5pQTBNQzR6UXpVMkxqVTFOREVnTkRBdU1UZzVOeUExTmk0eU5ETTFJRFF3TGpFek9DQTFOUzQ1TXpFNUlEUXdMakUwT0V3MU1pNHhOVGM1SURRd0xqSTFNekZETlRFdU9EUTJPU0EwTUM0eU5qRTFJRFV4TGpVME1EY2dOREF1TXpNeE1pQTFNUzR5TlRZNUlEUXdMalExT0RWRE5UQXVPVGN6TVNBME1DNDFPRFU0SURVd0xqY3hOek1nTkRBdU56WTRNaUExTUM0MU1EUXlJRFF3TGprNU5EaEROVEF1TWpreE1TQTBNUzR5TWpFMElEVXdMakV5TlRFZ05ERXVORGc0SURVd0xqQXhOVFlnTkRFdU56YzVNVU0wT1M0NU1EWWdOREl1TURjd01pQTBPUzQ0TlRVeElEUXlMak00TURJZ05Ea3VPRFkxT1NBME1pNDJPVEV4VERRNUxqZzNPU0EwTXk0d09URk1Nemd1TURnNElEUXpMalEwTlVNek55NDNNVEkwSURReUxqUTNOallnTXpjdU1EQTJNeUEwTVM0Mk56SXpJRE0yTGpBNU5EZ2dOREV1TVRjME5VTXpOUzR4T0RNeUlEUXdMalkzTmpZZ016UXVNVEkwT1NBME1DNDFNVGN6SURNekxqRXdOekVnTkRBdU56STBOME16TWk0d09EazBJRFF3TGprek1pQXpNUzR4TnpjNElEUXhMalE1TWpnZ016QXVOVE16T0NBME1pNHpNRGMzUXpJNUxqZzRPVGNnTkRNdU1USXlOU0F5T1M0MU5UUTNJRFEwTGpFek9Ea2dNamt1TlRnNElEUTFMakUzTjBNeU9TNDJNakF5SURRMkxqSXhNelFnTXpBdU1ERTNOQ0EwTnk0eU1EVWdNekF1TnpBNU5TQTBOeTQ1TnpjeFF6TXhMalF3TVRZZ05EZ3VOelE1TWlBek1pNHpORFF4SURRNUxqSTFNaUF6TXk0ek56QTRJRFE1TGpNNU5qbERNelF1TXprM05TQTBPUzQxTkRFNElETTFMalEwTWpNZ05Ea3VNekU1TlNBek5pNHpNakV4SURRNExqYzJPVEpETXpjdU1UazVPU0EwT0M0eU1UZzVJRE0zTGpnMU5pQTBOeTR6TnpZZ016Z3VNVGN6T1NBME5pNHpPRGt4VERRMExqY3lNeUEwTmk0eE9EbEROREV1Tmpjd015QTBOeTQyT0RNMklETTVMakF4TmpRZ05Ea3VPRGd5TXlBek5pNDVPREF5SURVeUxqWXdNemhETXpRdU9UUXpPU0ExTlM0ek1qVXpJRE16TGpVNE16UWdOVGd1TkRreE55QXpNeTR3TVRBNUlEWXhMamcwTWpGTU16SXVNemd3T1NBMk1TNDROakZETXpFdU56VXhPQ0EyTVM0NE9ERXhJRE14TGpFMU5qVWdOakl1TVRVZ016QXVOekkxTXlBMk1pNDJNRGcyUXpNd0xqSTVOREVnTmpNdU1EWTNNU0F6TUM0d05qSTBJRFl6TGpZM056a2dNekF1TURneElEWTBMak13TnpGTU16QXVNVGs1T1NBMk9DNHdOVGN4UXpNd0xqSXdPRGNnTmpndU16WTROeUF6TUM0eU56ZzVJRFk0TGpZM05UVWdNekF1TkRBMk5pQTJPQzQ1TlRrNVF6TXdMalV6TkRJZ05qa3VNalEwTXlBek1DNDNNVFk0SURZNUxqVXdNRGNnTXpBdU9UUXpPQ0EyT1M0M01UUTBRek14TGpFM01EZ2dOamt1T1RJNE1TQXpNUzQwTXpjM0lEY3dMakE1TkRnZ016RXVOekk1TXlBM01DNHlNRFV4UXpNeUxqQXlNRGtnTnpBdU16RTFOQ0F6TWk0ek16RXpJRGN3TGpNMk56RWdNekl1TmpReU9TQTNNQzR6TlRjeFRETTJMak01TkNBM01DNHlORFZETXpjdU1ESXpJRGN3TGpJeU5EY2dNemN1TmpFNE15QTJPUzQ1TlRVM0lETTRMakEwT1RRZ05qa3VORGszTWtNek9DNDBPREExSURZNUxqQXpPRGdnTXpndU56RXlNaUEyT0M0ME1qZ3hJRE00TGpZNU16a2dOamN1TnprNVRETTRMalUzTkRrZ05qUXVNRFE0UXpNNExqVTJOaklnTmpNdU56TTJOQ0F6T0M0ME9UWXhJRFl6TGpReU9UVWdNemd1TXpZNE5TQTJNeTR4TkRVeFF6TTRMakkwTURrZ05qSXVPRFl3TmlBek9DNHdOVGcwSURZeUxqWXdOREVnTXpjdU9ETXhOQ0EyTWk0ek9UQTBRek0zTGpZd05EUWdOakl1TVRjMk55QXpOeTR6TXpjMElEWXlMakF3T1RrZ016Y3VNRFExTnlBMk1TNDRPVGszUXpNMkxqYzFOREVnTmpFdU56ZzVOU0F6Tmk0ME5ETTFJRFl4TGpjek9DQXpOaTR4TXpFNUlEWXhMamMwT0RGSU16WXVNREkwUXpNMkxqYzBOelVnTlRndU1qTTFOQ0F6T0M0ME56UTVJRFUxTGpBd09DQTBNQzQ1T1RZNElEVXlMalExTnpsRE5ETXVOVEU0TmlBME9TNDVNRGM0SURRMkxqY3lOalFnTkRndU1UUTBOU0ExTUM0eU16QTVJRFEzTGpNNE1rTTFNQzR6TlRVZ05EY3VOalE1TWlBMU1DNDFNams1SURRM0xqZzRPVGNnTlRBdU56UTFPU0EwT0M0d09VTTFNQzQ1TnpNZ05EZ3VNekF6T0NBMU1TNHlOREF4SURRNExqUTNNRFlnTlRFdU5UTXhPQ0EwT0M0MU9EQTNRelV4TGpneU16WWdORGd1Tmprd09TQTFNaTR4TXpReklEUTRMamMwTWpRZ05USXVORFEySURRNExqY3pNakZNTlRZdU1UazNJRFE0TGpZeVF6VTJMalkxTmlBME9DNDJNRFUxSURVM0xqRXdNU0EwT0M0ME5UYzVJRFUzTGpRM056Y2dORGd1TVRrMU1VTTFOeTQ0TlRRMUlEUTNMamt6TWpRZ05UZ3VNVFEyTnlBME55NDFOalU0SURVNExqTXhPRGtnTkRjdU1UUXdNVU0yTVM0NE5qZzBJRFEzTGpZNU1Ea2dOalV1TVRneU5pQTBPUzR5TlRjM0lEWTNMamcyTURrZ05URXVOalV4TWtNM01DNDFNemt5SURVMExqQTBORGNnTnpJdU5EWTNNaUExTnk0eE5qSTJJRGN6TGpReE1Ua2dOakF1TmpJNE1VdzNNeTR4T0RFZ05qQXVOak0xTVVNM01pNDFOVElnTmpBdU5qVTFOQ0EzTVM0NU5UWTNJRFl3TGpreU5EUWdOekV1TlRJMU5pQTJNUzR6T0RJNVF6Y3hMakE1TkRVZ05qRXVPRFF4TXlBM01DNDROakkySURZeUxqUTFNaUEzTUM0NE9EQTVJRFl6TGpBNE1URk1OekF1T1RrNU9TQTJOaTQ0TXpFeFF6Y3hMakF3T0RjZ05qY3VNVFF5TnlBM01TNHdOemtnTmpjdU5EUTVOU0EzTVM0eU1EWTJJRFkzTGpjek16bEROekV1TXpNME15QTJPQzR3TVRneklEY3hMalV4TmprZ05qZ3VNamMwT0NBM01TNDNORE00SURZNExqUTRPRFZETnpFdU9UY3dPQ0EyT0M0M01ESXhJRGN5TGpJek56Y2dOamd1T0RZNE9TQTNNaTQxTWpreUlEWTRMamszT1RKRE56SXVPREl3T0NBMk9TNHdPRGsxSURjekxqRXpNVFFnTmprdU1UUXhJRGN6TGpRME1qa2dOamt1TVRNeFREYzNMakU1TXprZ05qa3VNREU1TVVNM055NDFNRE0zSURZNUxqQXhNRElnTnpjdU9EQTROeUEyT0M0NU5EQXhJRGM0TGpBNU1UUWdOamd1T0RFelF6YzRMak0zTkNBMk9DNDJPRFlnTnpndU5qSTRPQ0EyT0M0MU1EUTBJRGM0TGpnME1URWdOamd1TWpjNE5rTTNPUzR3TlRNMElEWTRMakExTWpnZ056a3VNakU1SURZM0xqYzROelFnTnprdU16STROQ0EyTnk0ME9UYzFRemM1TGpRek56a2dOamN1TWpBM05TQTNPUzQwT0RreElEWTJMamc1T0RnZ056a3VORGM0T1NBMk5pNDFPRGxXTmpZdU5UZzVXazB6TlM0M01qVTVJRFkzTGpNME56Rk1Nek11TURrM0lEWTNMalF5TmpGTU16TXVNREV5T1NBMk5DNDNPVGRNTXpVdU5qUXhPU0EyTkM0M01UZ3hURE0xTGpjeU5Ua2dOamN1TXpRM01WcE5OelF1TXpBNE9TQTBNaTR6T0RkRE56UXVOVGsyTmlBME1pNHpOemc0SURjMExqZzRNRE1nTkRJdU5EVTJNaUEzTlM0eE1qUXhJRFF5TGpZd09USkROelV1TXpZM09TQTBNaTQzTmpJeUlEYzFMalUyTVNBME1pNDVPRFFnTnpVdU5qYzRPQ0EwTXk0eU5EWTJRemMxTGpjNU5qWWdORE11TlRBNU15QTNOUzQ0TXpNNElEUXpMamd3TURnZ056VXVOemcxT1NBME5DNHdPRFEyUXpjMUxqY3pPREVnTkRRdU16WTROU0EzTlM0Mk1EY3lJRFEwTGpZek1UZ2dOelV1TkRBNU55QTBOQzQ0TkRFeVF6YzFMakl4TWpNZ05EVXVNRFV3TnlBM05DNDVOVGN5SURRMUxqRTVOamtnTnpRdU5qYzJOeUEwTlM0eU5qRTBRemMwTGpNNU5qSWdORFV1TXpJMU9TQTNOQzR4TURJNUlEUTFMak13TlRrZ056TXVPRE16T0NBME5TNHlNRE00UXpjekxqVTJORGNnTkRVdU1UQXhOeUEzTXk0ek16RTRJRFEwTGpreU1qSWdOek11TVRZME55QTBOQzQyT0RjNFF6Y3lMams1TnpZZ05EUXVORFV6TkNBM01pNDVNRE00SURRMExqRTNORGNnTnpJdU9EazFJRFF6TGpnNE4wTTNNaTQ0T0RrMklEUXpMalk1TlRVZ056SXVPVEl5TVNBME15NDFNRFE1SURjeUxqazVNRGdnTkRNdU16STJNVU0zTXk0d05UazBJRFF6TGpFME56TWdOek11TVRZeU9TQTBNaTQ1T0RNM0lEY3pMakk1TlNBME1pNDRORFZETnpNdU5UWWdOREl1TlRZMU5pQTNNeTQ1TWpRZ05ESXVOREF4TVNBM05DNHpNRGc1SURReUxqTTROMVkwTWk0ek9EZGFUVE0wTGpBeU5Ua2dORFl1TlRJMU1VTXpNeTQzTXpneUlEUTJMalV6TXpJZ016TXVORFUwTmlBME5pNDBOVFU1SURNekxqSXhNRGdnTkRZdU16QXlPVU16TWk0NU5qWTVJRFEyTGpFME9Ua2dNekl1TnpjMElEUTFMamt5T0RJZ016SXVOalUyTWlBME5TNDJOalUyUXpNeUxqVXpPRFFnTkRVdU5EQXpJRE15TGpVd01TQTBOUzR4TVRFeklETXlMalUwT0RrZ05EUXVPREkzTkVNek1pNDFPVFk0SURRMExqVTBNellnTXpJdU56STNOeUEwTkM0eU9EQXpJRE15TGpreU5URWdORFF1TURjd09FTXpNeTR4TWpJMUlEUXpMamcyTVRRZ016TXVNemMzTmlBME15NDNNVFV5SURNekxqWTFPREVnTkRNdU5qVXdOME16TXk0NU16ZzJJRFF6TGpVNE5qRWdNelF1TWpNeUlEUXpMall3TmpJZ016UXVOVEF4TWlBME15NDNNRGd6UXpNMExqYzNNRE1nTkRNdU9ERXdOQ0F6TlM0d01ETWdORE11T1Rrd01TQXpOUzR4TnpBeElEUTBMakl5TkRSRE16VXVNek0zTWlBME5DNDBOVGc0SURNMUxqUXpNVEVnTkRRdU56TTNOQ0F6TlM0ME16azVJRFExTGpBeU5URkRNelV1TkRRMU55QTBOUzR5TVRZMklETTFMalF4TXprZ05EVXVOREEzTXlBek5TNHpORFU1SURRMUxqVTROalZETXpVdU1qYzNPU0EwTlM0M05qVTJJRE0xTGpFM05USWdORFV1T1RJNU5pQXpOUzR3TkRNNElEUTJMakEyT1VNek5DNDVNVEl6SURRMkxqSXdPRFFnTXpRdU56VTBOeUEwTmk0ek1qQTNJRE0wTGpVM09Ua2dORFl1TXprNU1VTXpOQzQwTURVeElEUTJMalEzTnpVZ016UXVNakUyTlNBME5pNDFNakEySURNMExqQXlOU0EwTmk0MU1qWk1NelF1TURJMU9TQTBOaTQxTWpVeFdrMDFNaTQ0T1RrZ05EVXVPREEyTVV3MU1pNDRNVFE1SURRekxqRTNOMHcxTlM0ME5ETTVJRFF6TGpBNU9ERk1OVFV1TkRnMU9TQTBOQzQwTURVeFREVTFMalV5TnprZ05EVXVOekV5TVV3MU1pNDRPVGtnTkRVdU9EQTJNVnBOTnpNdU9UQTFJRFkyTGpFNU5FdzNNeTQ0TWpFZ05qTXVOVFkxVERjMkxqUTBPVGtnTmpNdU5EZzNNVXczTmk0MU16UWdOall1TVRFMlREY3pMamt3TlNBMk5pNHhPVFJhSWlCbWFXeHNQU0lqTkRBNU56VkdJaTgrQ2p3dmMzWm5QZ289XCI7XG5leHBvcnQgeyBTdmdWZWN0b3IgYXMgUmVhY3RDb21wb25lbnQgfTsiLCIvKiogQGpzeCBqc3ggKi9cblxuaW1wb3J0IHsganN4LCBJbWFnZSwgQm94LCBIZWFkaW5nLCBUZXh0IH0gZnJvbSAndGhlbWUtdWknXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZlYXR1cmVDYXJkQ29sdW1uKHtcbiAgc3JjLFxuICBhbHRUZXh0ID0gJ2RlZmF1bHQgYWx0IHRleHQnLFxuICB0aXRsZSxcbiAgdGV4dCxcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8Qm94IHN4PXtzdHlsZXMuY2FyZH0+XG4gICAgICA8SW1hZ2Ugc3JjPXtzcmN9IGFsdD17YWx0VGV4dH0gc3g9e3N0eWxlcy5pbWd9IHdpZHRoPVwiMTEwXCIgaGVpZ2h0PVwiMTEwXCIgLz5cbiAgICAgIDxCb3ggc3g9e3N0eWxlcy53cmFwcGVyfT5cbiAgICAgICAgPEhlYWRpbmcgc3g9e3N0eWxlcy53cmFwcGVyLnRpdGxlfT57dGl0bGV9PC9IZWFkaW5nPlxuICAgICAgICA8VGV4dCBzeD17c3R5bGVzLndyYXBwZXIuc3ViVGl0bGV9Pnt0ZXh0fTwvVGV4dD5cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApXG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgY2FyZDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgfSxcbiAgaW1nOiB7XG4gICAgbXg6ICdhdXRvJyxcbiAgICBtYjogWzMsIG51bGwsIDQsIG51bGwsIG51bGwsIDVdLFxuICAgIHdpZHRoOiBbJzgwcHgnLCAnOTBweCcsIG51bGwsIG51bGwsIG51bGwsICcxMDBweCcsICdhdXRvJ10sXG4gIH0sXG4gIHdyYXBwZXI6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICB0aXRsZToge1xuICAgICAgZm9udFNpemU6IFszLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCA0XSxcbiAgICAgIGNvbG9yOiAnaGVhZGluZ19zZWNvbmRhcnknLFxuICAgICAgbGluZUhlaWdodDogMS40LFxuICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgbWI6IFsyLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAzXSxcbiAgICB9LFxuXG4gICAgc3ViVGl0bGU6IHtcbiAgICAgIGZvbnRTaXplOiAxLFxuICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgbGluZUhlaWdodDogWzEuODUsIG51bGwsIG51bGwsIDEuOSwgMl0sXG4gICAgfSxcbiAgfSxcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJveCwgVGV4dCwgSGVhZGluZyB9IGZyb20gJ3RoZW1lLXVpJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWN0aW9uSGVhZGVyKHsgdGl0bGUsIHNsb2dhbiwgaXNXaGl0ZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPEJveCBzeD17eyB2YXJpYW50OiAnc2VjdGlvbkhlYWRlcicgfX0+XG4gICAgICA8VGV4dFxuICAgICAgICBhcz1cInBcIlxuICAgICAgICBzeD17e1xuICAgICAgICAgIHZhcmlhbnQ6ICdzZWN0aW9uSGVhZGVyLnN1YlRpdGxlJyxcbiAgICAgICAgICBjb2xvcjogaXNXaGl0ZSA/ICd3aGl0ZScgOiAnaGVhZGluZycsXG4gICAgICAgICAgb3BhY2l0eTogaXNXaGl0ZSA/IDAuNyA6IDEsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtzbG9nYW59XG4gICAgICA8L1RleHQ+XG4gICAgICA8SGVhZGluZ1xuICAgICAgICBhcz1cImgyXCJcbiAgICAgICAgc3g9e3tcbiAgICAgICAgICB2YXJpYW50OiAnc2VjdGlvbkhlYWRlci50aXRsZScsXG4gICAgICAgICAgY29sb3I6IGlzV2hpdGUgPyAnd2hpdGUnIDogJ2hlYWRpbmdfc2Vjb25kYXJ5JyxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge3RpdGxlfVxuICAgICAgPC9IZWFkaW5nPlxuICAgIDwvQm94PlxuICApXG59XG4iLCIvKiogQGpzeCBqc3ggKi9cblxuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknXG5pbXBvcnQgeyBDb250YWluZXIsIEdyaWQgfSBmcm9tICd0aGVtZS11aSdcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXInXG5pbXBvcnQgRmVhdHVyZUNhcmRDb2x1bW4gZnJvbSAnQC9jb21wb25lbnRzL2ZlYXR1cmUtY2FyZC1jb2x1bW4uanMnXG5pbXBvcnQgVmVjdG9yIGZyb20gJ0AvYXNzZXRzL2tleS1mZWF0dXJlL3ZlY3Rvci5zdmcnXG5pbXBvcnQgRWRpdGluZyBmcm9tICdAL2Fzc2V0cy9rZXktZmVhdHVyZS9lZGl0aW5nLnN2ZydcbmltcG9ydCBTcGVlZCBmcm9tICdAL2Fzc2V0cy9rZXktZmVhdHVyZS9zcGVlZC5zdmcnXG5cbmNvbnN0IGRhdGEgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICBpbWdTcmM6IFZlY3RvcixcbiAgICBhbHRUZXh0OiAnVmVjdG9yJyxcbiAgICB0aXRsZTogJ1ZlY3RvciBFZGl0aW5nJyxcbiAgICB0ZXh0OlxuICAgICAgJ0dldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdCBob21lIGNvbGxlY3QgYSBzYW1wbGUgZnJvbSB0aGUgeW91ciBibG9vZCB0ZXN0cy4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgaW1nU3JjOiBFZGl0aW5nLFxuICAgIGFsdFRleHQ6ICdNb25pdG9yaW5nJyxcbiAgICB0aXRsZTogJ0N1c3RvbWl6ZSAmIE1vbml0b3JpbmcnLFxuICAgIHRleHQ6XG4gICAgICAnR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0IGhvbWUgY29sbGVjdCBhIHNhbXBsZSBmcm9tIHRoZSB5b3VyIGJsb29kIHRlc3RzLicsXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICBpbWdTcmM6IFNwZWVkLFxuICAgIGFsdFRleHQ6ICdRdWFsaXR5JyxcbiAgICB0aXRsZTogJ1F1YWxpdHkgJiBTaG9ydC1wZXJpb2QnLFxuICAgIHRleHQ6XG4gICAgICAnR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0IGhvbWUgY29sbGVjdCBhIHNhbXBsZSBmcm9tIHRoZSB5b3VyIGJsb29kIHRlc3RzLicsXG4gIH0sXG5dXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEtleUZlYXR1cmUoKSB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gc3g9e3sgdmFyaWFudDogJ3NlY3Rpb24ua2V5RmVhdHVyZScgfX0gaWQ9XCJmZWF0dXJlXCI+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U2VjdGlvbkhlYWRlclxuICAgICAgICAgIHNsb2dhbj1cIlF1YWxpdHkgZmVhdHVyZXNcIlxuICAgICAgICAgIHRpdGxlPVwiTWVldCBleGNpdGluZyBmZWF0dXJlIG9mIGFwcFwiXG4gICAgICAgIC8+XG5cbiAgICAgICAgPEdyaWQgc3g9e3N0eWxlcy5ncmlkfT5cbiAgICAgICAgICB7ZGF0YS5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICA8RmVhdHVyZUNhcmRDb2x1bW5cbiAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICBzcmM9e2l0ZW0uaW1nU3JjfVxuICAgICAgICAgICAgICBhbHQ9e2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICB0ZXh0PXtpdGVtLnRleHR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBncmlkOiB7XG4gICAgJ3B4JzogWzAsIG51bGwsIG51bGwsICc0MHB4JywgbnVsbCwgJzgwcHgnXSxcbiAgICAncHQnOiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgM10sXG4gICAgJ2dyaWRHYXAnOiBbJzM1cHggMCcsIG51bGwsICc0MHB4IDAnXSxcbiAgICAnZ3JpZFRlbXBsYXRlQ29sdW1ucyc6IFtcbiAgICAgICdyZXBlYXQoMSwxZnIpJyxcbiAgICAgIG51bGwsXG4gICAgICAncmVwZWF0KDIsMWZyKScsXG4gICAgICBudWxsLFxuICAgICAgJ3JlcGVhdCgzLDFmciknLFxuICAgIF0sXG4gICAgJ3dpZHRoJzogWycxMDAlJywgJzgwJScsICcxMDAlJ10sXG4gICAgJ214JzogJ2F1dG8nLFxuICAgICcmID4gZGl2Jzoge1xuICAgICAgcHg6IFswLCAnMTVweCcsIG51bGwsICcyNXB4JywgbnVsbCwgJzMwcHgnLCAnNDBweCcsICc2MHB4J10sXG4gICAgfSxcbiAgfSxcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=