(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[7],{

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

/***/ "./src/assets/feature/chat.svg":
/*!*************************************!*\
  !*** ./src/assets/feature/chat.svg ***!
  \*************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgChat; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path, _path2, _defs;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function SvgChat(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 82,
    height: 82,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    opacity: 0.122,
    d: "M54 0H28C12.536 0 0 12.536 0 28v26c0 15.464 12.536 28 28 28h26c15.464 0 28-12.536 28-28V28C82 12.536 69.464 0 54 0z",
    fill: "#E97425"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    fill: "url(#chat_svg__pattern0)",
    d: "M24 24h34v34H24z"
  })), _defs || (_defs = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("pattern", {
    id: "chat_svg__pattern0",
    patternContentUnits: "objectBoundingBox",
    width: 1,
    height: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("use", {
    xlinkHref: "#chat_svg__image0",
    transform: "scale(.02941)"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("image", {
    id: "chat_svg__image0",
    width: 34,
    height: 34,
    xlinkHref: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAABHNCSVQICAgIfAhkiAAABAhJREFUWIXFl1uIVlUUgL/z93sZax4U3RmRWTE7pYtEYRcqIgayIHrIMqFIu0jSIHnZFD1WYLlDugiV+JAlhQ1d8MWiC02liT01ZdomisaI3JqBjpLNjKeHtc7Mafz/858ziS447H/WXmvvb/Zee6+1kzRNAYjOTgDuB+4ArgQmMTb5HfgC2Gh82FbWKUnTlOjsxcDrwDWqHwD+HiNIe+73WmCV8SFt5VSPzrYBm4CrgF3q/AnQP0aQC4F7gMeAFcAvwLpWTsm+VR1LgNeAH4CbjA/7xwjwH4nOLgTeAv4EZrcatw7cqb+fKzLWGFoA3A7sAzYZH3Y0szc+vB2dfQi4GbgeeL8IpAZcARwDPiuAmKb9G4H5wKPA9ujsk0WDA1u0vaiFHTWgTUGKYmI5cB3wM7AYWAOkwNPR2VkFflnAD7YCqeuAiUI1k9u07TI+bAWIzs4E7gZuBPY08cvGvEW3NlGoPmCH8aEvD1JGeoEzgXxMZEcyKeE/T7+8HIrOrjY+PFsF5AFgvPHhaHS2E+hEgnwA6Cnh3wNsV+hxwBwdY3V09nzjw9JSIMaHQWAwOjsH+DjX9bjxodm25OUD48MLeUV0dh7wHvBIdHZrUVw0krO03Q90Gh/WlPQ7Y7TC+PAh8JT++XDZrcnkO+BF4Gvjw6cV/GZEZy9H4mqP8WFA9a8ADphbaUWMD4eQ7dhc0iUL6GXAt0jQv5zr7wcOAO2VQKKzHUCMzr5TxQ+5iXv1+z6nryEBnFbdmmPAb8AfJe2zbO6MD28WGVbdmj7gUuPDsla20dm5wELgMLAtOlt431RdEVrVFtHZiUg6WA+MV/UWoBadPQ6sNz68VBokOrsA6AImAMeRvSxzi05hJMkN6RyX5PpnN3LKgwxPEp1dCTxfYtJm8ivwBtCN/BPZ+EPAT0UgCXA0OtuO3BOLVb8cOBt4AtiMVG8Jciz7GTmeeek3PuytSp6B/ANMBzYghcxh4EHjQ3d0dqna7DU+7Mwco7OLkCUfDVOLzo7jxNs0W5F3jQ8n5Ke6drYhhc9M4EfgPuPDN2ozUdvhgbVQ2tBgsjJyHg0SZbYibQrRA9w1qmT8S9vpOd0BJHtexkgMtJKsFvmoUWe2IiDPiS7jw5FRNjt1ss7o7BTjw0E9wp/rd1KkjpT+k40P3U1sdgNfIZXYWmDRyZo8L0n20iuS6Oy1yFtnElKPdANVT8YQkrWHa2MN6l3AuaVA1OkGpIq/oCJAXnqRGAxjBlHHachWXg1MrQCQIrdtB1I432t8+DI6W0cedtVA/o9EZycj+Wc+cm+tND6si87uBmacMhCFSZDUsUJVzyCvx3NOKUgOaAlSqWXZ+eBpAVGYW5HEOBU4ctpAFGYW8CqQ/Asgj1lfK9ukIwAAAABJRU5ErkJggg=="
  }))));
}
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODIiIGhlaWdodD0iODIiIHZpZXdCb3g9IjAgMCA4MiA4MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CjxwYXRoIG9wYWNpdHk9IjAuMTIyIiBkPSJNNTQgMEgyOEMxMi41MzYgMCAwIDEyLjUzNiAwIDI4VjU0QzAgNjkuNDY0IDEyLjUzNiA4MiAyOCA4Mkg1NEM2OS40NjQgODIgODIgNjkuNDY0IDgyIDU0VjI4QzgyIDEyLjUzNiA2OS40NjQgMCA1NCAwWiIgZmlsbD0iI0U5NzQyNSIvPgo8cmVjdCB4PSIyNCIgeT0iMjQiIHdpZHRoPSIzNCIgaGVpZ2h0PSIzNCIgZmlsbD0idXJsKCNwYXR0ZXJuMCkiLz4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJwYXR0ZXJuMCIgcGF0dGVybkNvbnRlbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPgo8dXNlIHhsaW5rOmhyZWY9IiNpbWFnZTAiIHRyYW5zZm9ybT0ic2NhbGUoMC4wMjk0MTE4KSIvPgo8L3BhdHRlcm4+CjxpbWFnZSBpZD0iaW1hZ2UwIiB3aWR0aD0iMzQiIGhlaWdodD0iMzQiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ0lBQUFBaUNBWUFBQUE2Und2Q0FBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUJBaEpSRUZVV0lYRmwxdUlWbFVVZ0wvejkzc1pheDRVM1JtUldURTdwWXRFWVJjcUlnYXlJSHJJTXFGSXUwalNJSG5aRkQxV1lMbER1Z2lWK0pBbGhRMWQ4TVdpQzAybGlUMDFaZG9taXNhSTNKcUJqcExOaktlSHRjN01hZnovODU4emlTNDQ3SC9XWG12dmIvWmVlNisxa3pSTkFZak9UZ0R1Qis0QXJnUW1NVGI1SGZnQzJHaDgyRmJXS1VuVGxPanN4Y0Ryd0RXcUh3RCtIaU5JZSs3M1dtQ1Y4U0Z0NVZTUHpyWUJtNENyZ0YzcS9BblFQMGFRQzRGN2dNZUFGY0F2d0xwV1RzbStWUjFMZ05lQUg0Q2JqQS83eHdqd0g0bk9MZ1RlQXY0RVpyY2F0dzdjcWIrZkt6TFdHRm9BM0E3c0F6WVpIM1kwc3pjK3ZCMmRmUWk0R2JnZWVMOElwQVpjQVJ3RFBpdUFtS2I5RzRINXdLUEE5dWpzazBXREExdTB2YWlGSFRXZ1RVR0tZbUk1Y0Izd003QVlXQU9rd05QUjJWa0ZmbG5BRDdZQ3FldUFpVUkxazl1MDdUSStiQVdJenM0RTdnWnVCUFkwOGN2R3ZFVzNObEdvUG1DSDhhRXZEMUpHZW9FemdYeE1aRWN5S2VFL1Q3KzhISXJPcmpZK1BGc0Y1QUZndlBIaGFIUzJFK2hFZ253QTZDbmgzd05zVitoeHdCd2RZM1YwOW56anc5SlNJTWFIUVdBd09qc0grRGpYOWJqeG9kbTI1T1VENDhNTGVVVjBkaDd3SHZCSWRIWnJVVncwa3JPMDNROTBHaC9XbFBRN1k3VEMrUEFoOEpUKytYRFpyY25rTytCRjRHdmp3NmNWL0daRVp5OUg0bXFQOFdGQTlhOEFEcGhiYVVXTUQ0ZVE3ZGhjMGlVTDZHWEF0MGpRdjV6cjd3Y09BTzJWUUtLekhVQ016cjVUeFErNWlYdjErejZucnlFQm5GYmRtbVBBYjhBZkplMnpiTzZNRDI4V0dWYmRtajdnVXVQRHNsYTIwZG01d0VMZ01MQXRPbHQ0MzFSZEVWclZGdEhaaVVnNldBK01WL1VXb0JhZFBRNnNOejY4VkJva09yc0E2QUltQU1lUnZTeHppMDVoSk1rTjZSeVg1UHBuTjNMS2d3eFBFcDFkQ1R4Zll0Sm04aXZ3QnRDTi9CUForRVBBVDBVZ0NYQTBPdHVPM0JPTFZiOGNPQnQ0QXRpTVZHOEpjaXo3R1RtZWVlazNQdXl0U3A2Qi9BTk1CellnaGN4aDRFSGpRM2QwZHFuYTdEVSs3TXdjbzdPTGtDVWZEVk9Mem83anhOczBXNUYzalE4bjVLZTZkclloaGM5TTRFZmdQdVBETjJvelVkdmhnYlZRMnRCZ3NqSnlIZzBTWmJZaWJRclJBOXcxcW1UOFM5dnBPZDBCSkh0ZXhrZ010SktzRnZtb1VXZTJJaURQaVM3anc1RlJOanQxc3M3bzdCVGp3MEU5d3AvcmQxS2tqcFQrazQwUDNVMXNkZ05mSVpYWVdtRFJ5Wm84TDBuMjBpdVM2T3kxeUZ0bkVsS1BkQU5WVDhZUWtyV0hhMk1ONmwzQXVhVkExT2tHcElxL29DSkFYbnFSR0F4akJsSEhhY2hXWGcxTXJRQ1FJcmR0QjFJNDMydDgrREk2VzBjZWR0VkEvbzlFWnljaitXYytjbSt0TkQ2c2k4N3VCbWFjTWhDRlNaRFVzVUpWenlDdngzTk9LVWdPYUFsU3FXWForZUJwQVZHWVc1SEVPQlU0Y3RwQUZHWVc4Q3FRL0FzZ2oxbGZLOXVrSXdBQUFBQkpSVTVFcmtKZ2dnPT0iLz4KPC9kZWZzPgo8L3N2Zz4K");


/***/ }),

/***/ "./src/assets/feature/cloud.svg":
/*!**************************************!*\
  !*** ./src/assets/feature/cloud.svg ***!
  \**************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgCloud; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path, _path2, _path3, _path4, _path5;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function SvgCloud(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 82,
    height: 82,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M54 0H28C12.536 0 0 12.536 0 28v26c0 15.464 12.536 28 28 28h26c15.464 0 28-12.536 28-28V28C82 12.536 69.464 0 54 0z",
    fill: "#FFF6D3"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M45.534 46.778a.961.961 0 110-1.924h3.538a6.014 6.014 0 004.207-1.694 5.681 5.681 0 000-8.187 6.014 6.014 0 00-4.207-1.694 6.215 6.215 0 00-1.211.115.99.99 0 01-1.116-.59 7.743 7.743 0 00-2.906-3.551 8.058 8.058 0 00-10.014.915 7.54 7.54 0 00-2.308 5.421V35.705a.972.972 0 01-.977.966h-.055l-.169-.008h-.128a4.257 4.257 0 00-2.977 1.2 4.02 4.02 0 000 5.793 4.258 4.258 0 002.977 1.2h4.752a.962.962 0 110 1.924h-4.752a6.26 6.26 0 01-4.376-1.763 5.9 5.9 0 010-8.513 6.247 6.247 0 013.76-1.738 9.454 9.454 0 012.853-5.96 10.064 10.064 0 0112.524-1.14 9.712 9.712 0 013.313 3.729 8.021 8.021 0 016.406 2.217 7.56 7.56 0 010 10.9 8.021 8.021 0 01-5.606 2.259l-3.528.007z",
    fill: "#333"
  })), _path3 || (_path3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M39.511 36.117a.99.99 0 011.978 0v18.921a.989.989 0 01-1.978 0v-18.92z",
    fill: "#333"
  })), _path4 || (_path4 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M47.302 40.798a.94.94 0 010 1.356 1.007 1.007 0 01-1.395 0l-5.4-5.3-5.4 5.3a1.007 1.007 0 01-1.395 0 .94.94 0 010-1.356l6.1-5.986a1.007 1.007 0 011.395 0l6.1 5.986h-.005z",
    fill: "#333"
  })), _path5 || (_path5 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M39.511 55.038V37.821l-4.414 4.33a1.007 1.007 0 01-1.4 0 .942.942 0 010-1.356l6.1-5.986a1.008 1.008 0 011.4 0l6.1 5.986a.942.942 0 010 1.356 1.006 1.006 0 01-1.394 0l-4.414-4.33v17.217a.99.99 0 01-1.978 0zm6.023-8.26a.962.962 0 110-1.924h3.537a6.013 6.013 0 004.208-1.695 5.682 5.682 0 000-8.187 6.016 6.016 0 00-4.208-1.694 6.208 6.208 0 00-1.21.115.993.993 0 01-1.116-.59 7.744 7.744 0 00-2.906-3.552 8.059 8.059 0 00-10.013.915 7.536 7.536 0 00-2.308 5.42v.118a.969.969 0 01-.977.966h-.055l-.168-.007h-.128a4.253 4.253 0 00-2.977 1.2 4.013 4.013 0 000 5.792 4.255 4.255 0 002.977 1.2h4.752a.962.962 0 010 1.924H30.19a6.263 6.263 0 01-4.377-1.763 5.907 5.907 0 010-8.513 6.25 6.25 0 013.765-1.734 9.455 9.455 0 012.852-5.96 10.064 10.064 0 0112.524-1.14 9.708 9.708 0 013.313 3.73 8.023 8.023 0 016.407 2.217 7.56 7.56 0 010 10.9 8.023 8.023 0 01-5.607 2.259l-3.533.003z",
    fill: "#D6AB00"
  })));
}
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODIiIGhlaWdodD0iODIiIHZpZXdCb3g9IjAgMCA4MiA4MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTU0IDBIMjhDMTIuNTM2IDAgMCAxMi41MzYgMCAyOFY1NEMwIDY5LjQ2NCAxMi41MzYgODIgMjggODJINTRDNjkuNDY0IDgyIDgyIDY5LjQ2NCA4MiA1NFYyOEM4MiAxMi41MzYgNjkuNDY0IDAgNTQgMFoiIGZpbGw9IiNGRkY2RDMiLz4KPHBhdGggZD0iTTQ1LjUzNCA0Ni43NzgxQzQ1LjQwNzcgNDYuNzc4MSA0NS4yODI1IDQ2Ljc1MzIgNDUuMTY1OCA0Ni43MDQ4QzQ1LjA0OTEgNDYuNjU2NSA0NC45NDMxIDQ2LjU4NTYgNDQuODUzOCA0Ni40OTYzQzQ0Ljc2NDQgNDYuNDA3IDQ0LjY5MzUgNDYuMzAwOSA0NC42NDUyIDQ2LjE4NDJDNDQuNTk2OSA0Ni4wNjc1IDQ0LjU3MiA0NS45NDI0IDQ0LjU3MiA0NS44MTZDNDQuNTcyIDQ1LjY4OTcgNDQuNTk2OSA0NS41NjQ2IDQ0LjY0NTIgNDUuNDQ3OUM0NC42OTM1IDQ1LjMzMTIgNDQuNzY0NCA0NS4yMjUxIDQ0Ljg1MzggNDUuMTM1OEM0NC45NDMxIDQ1LjA0NjUgNDUuMDQ5MSA0NC45NzU2IDQ1LjE2NTggNDQuOTI3M0M0NS4yODI1IDQ0Ljg3ODkgNDUuNDA3NyA0NC44NTQgNDUuNTM0IDQ0Ljg1NEg0OS4wNzJDNTAuNjQxNiA0NC44NiA1Mi4xNTE1IDQ0LjI1MjEgNTMuMjc5IDQzLjE2QzUzLjgyOTggNDIuNjMgNTQuMjY4IDQxLjk5NDIgNTQuNTY3MyA0MS4yOTA5QzU0Ljg2NjYgNDAuNTg3NSA1NS4wMjA4IDM5LjgzMDkgNTUuMDIwOCAzOS4wNjY1QzU1LjAyMDggMzguMzAyMSA1NC44NjY2IDM3LjU0NTYgNTQuNTY3MyAzNi44NDIyQzU0LjI2OCAzNi4xMzg4IDUzLjgyOTggMzUuNTAzMSA1My4yNzkgMzQuOTczQzUyLjE1MTUgMzMuODgxIDUwLjY0MTYgMzMuMjczIDQ5LjA3MiAzMy4yNzlDNDguODQ2IDMzLjI3OSA0OC42NDEgMzMuMjg4IDQ4LjQ2MSAzMy4zMDZDNDguMjYxIDMzLjMyNiA0OC4wNjEgMzMuMzU1NCA0Ny44NjEgMzMuMzk0QzQ3LjYzNTQgMzMuNDQwOCA0Ny40MDA2IDMzLjQwNzQgNDcuMTk2OSAzMy4yOTk3QzQ2Ljk5MzIgMzMuMTkyIDQ2LjgzMzQgMzMuMDE2OCA0Ni43NDUgMzIuODA0MUM0Ni4xNTc0IDMxLjM1NCA0NS4xNDQyIDMwLjExNTkgNDMuODM5IDI5LjI1M0M0Mi4zMTMzIDI4LjI0NzYgNDAuNDkxMyAyNy43OTA2IDM4LjY3MTggMjcuOTU2OEMzNi44NTIyIDI4LjEyMzEgMzUuMTQzMSAyOC45MDI4IDMzLjgyNSAzMC4xNjhDMzMuMDk2IDMwLjg3MDQgMzIuNTE2IDMxLjcxMjQgMzIuMTE5NCAzMi42NDM3QzMxLjcyMjkgMzMuNTc1MSAzMS41MTggMzQuNTc2OCAzMS41MTcgMzUuNTg5QzMxLjUxNyAzNS42MTQgMzEuNTE3IDM1LjY0IDMxLjUxNyAzNS42NjVWMzUuNzA1MUMzMS41MTU0IDM1Ljk2MjcgMzEuNDExNiAzNi4yMDkxIDMxLjIyODQgMzYuMzkwMkMzMS4wNDUyIDM2LjU3MTQgMzAuNzk3NiAzNi42NzI0IDMwLjU0IDM2LjY3MUgzMC40ODVMMzAuMzE2IDM2LjY2M0gzMC4xODhDMjkuMDc3MSAzNi42NTkzIDI4LjAwODcgMzcuMDg5OSAyNy4yMTEgMzcuODYzQzI2LjgyMSAzOC4yMzggMjYuNTEwOCAzOC42ODc3IDI2LjI5ODggMzkuMTg1NUMyNi4wODY5IDM5LjY4MzIgMjUuOTc3NyA0MC4yMTg2IDI1Ljk3NzcgNDAuNzU5NUMyNS45Nzc3IDQxLjMwMDUgMjYuMDg2OSA0MS44MzU5IDI2LjI5ODggNDIuMzMzNkMyNi41MTA4IDQyLjgzMTMgMjYuODIxIDQzLjI4MTEgMjcuMjExIDQzLjY1NkMyOC4wMDg4IDQ0LjQyOTEgMjkuMDc3MSA0NC44NTk3IDMwLjE4OCA0NC44NTYxSDM0Ljk0QzM1LjE5NTEgNDQuODU2MSAzNS40Mzk4IDQ0Ljk1NzQgMzUuNjIwMiA0NS4xMzc4QzM1LjgwMDYgNDUuMzE4MiAzNS45MDIgNDUuNTYyOSAzNS45MDIgNDUuODE4QzM1LjkwMiA0Ni4wNzMyIDM1LjgwMDYgNDYuMzE3OSAzNS42MjAyIDQ2LjQ5ODNDMzUuNDM5OCA0Ni42Nzg3IDM1LjE5NTEgNDYuNzggMzQuOTQgNDYuNzhIMzAuMTg4QzI4LjU1NTIgNDYuNzg1NCAyNi45ODQ5IDQ2LjE1MjggMjUuODEyIDQ1LjAxN0MyNS4yMzgzIDQ0LjQ2NjQgMjQuNzgxOSA0My44MDU1IDI0LjQ3MDEgNDMuMDc0MUMyNC4xNTgzIDQyLjM0MjYgMjMuOTk3NiA0MS41NTU3IDIzLjk5NzYgNDAuNzYwNUMyMy45OTc2IDM5Ljk2NTQgMjQuMTU4MyAzOS4xNzg1IDI0LjQ3MDEgMzguNDQ3QzI0Ljc4MTkgMzcuNzE1NSAyNS4yMzgzIDM3LjA1NDYgMjUuODEyIDM2LjUwNEMyNi44MzExIDM1LjUxMzkgMjguMTU3NCAzNC45MDA5IDI5LjU3MiAzNC43NjZDMjkuNzc1MSAzMi41MDA5IDMwLjc4ODEgMzAuMzg0OSAzMi40MjUgMjguODA2QzM0LjA3MjggMjcuMjIyMSAzNi4yMTA3IDI2LjI0NjIgMzguNDg3IDI2LjAzOUM0MC43NjMzIDI1LjgzMTggNDMuMDQyMiAyNi40MDU2IDQ0Ljk0OSAyNy42NjYxQzQ2LjM1OTEgMjguNTk5NCA0Ny41MDExIDI5Ljg4NDggNDguMjYyIDMxLjM5NUM0OC41NDYgMzEuMzY3IDQ4LjgxNSAzMS4zNTMgNDkuMDYyIDMxLjM1M0M1MS4xNTM3IDMxLjM0NjIgNTMuMTY1MyAzMi4xNTY5IDU0LjY2OCAzMy42MTJDNTUuNDAxOSAzNC4zMTc0IDU1Ljk4NTcgMzUuMTYzNyA1Ni4zODQ2IDM2LjEwMDJDNTYuNzgzNCAzNy4wMzY3IDU2Ljk4OSAzOC4wNDQxIDU2Ljk4OSAzOS4wNjJDNTYuOTg5IDQwLjA4IDU2Ljc4MzQgNDEuMDg3NCA1Ni4zODQ2IDQyLjAyMzlDNTUuOTg1NyA0Mi45NjA0IDU1LjQwMTkgNDMuODA2NyA1NC42NjggNDQuNTEyQzUzLjE2NTMgNDUuOTY3MiA1MS4xNTM3IDQ2Ljc3NzggNDkuMDYyIDQ2Ljc3MUw0NS41MzQgNDYuNzc4MVoiIGZpbGw9IiMzMzMzMzMiLz4KPHBhdGggZD0iTTM5LjUxMSAzNi4xMTcxQzM5LjUxMSAzNS44NTQ4IDM5LjYxNTIgMzUuNjAzMiAzOS44MDA3IDM1LjQxNzdDMzkuOTg2MSAzNS4yMzIzIDQwLjIzNzcgMzUuMTI4MSA0MC41IDM1LjEyODFDNDAuNzYyMyAzNS4xMjgxIDQxLjAxMzggMzUuMjMyMyA0MS4xOTkzIDM1LjQxNzdDNDEuMzg0OCAzNS42MDMyIDQxLjQ4OSAzNS44NTQ4IDQxLjQ4OSAzNi4xMTcxVjU1LjAzODFDNDEuNDg5IDU1LjMwMDQgNDEuMzg0OCA1NS41NTE5IDQxLjE5OTMgNTUuNzM3NEM0MS4wMTM4IDU1LjkyMjkgNDAuNzYyMyA1Ni4wMjcxIDQwLjUgNTYuMDI3MUM0MC4yMzc3IDU2LjAyNzEgMzkuOTg2MSA1NS45MjI5IDM5LjgwMDcgNTUuNzM3NEMzOS42MTUyIDU1LjU1MTkgMzkuNTExIDU1LjMwMDQgMzkuNTExIDU1LjAzODFWMzYuMTE3MVoiIGZpbGw9IiMzMzMzMzMiLz4KPHBhdGggZD0iTTQ3LjMwMiA0MC43OTgxQzQ3LjM5MzMgNDAuODg1OCA0Ny40NjYgNDAuOTkxMSA0Ny41MTU2IDQxLjEwNzZDNDcuNTY1MyA0MS4yMjQxIDQ3LjU5MDkgNDEuMzQ5NCA0Ny41OTA5IDQxLjQ3NjFDNDcuNTkwOSA0MS42MDI3IDQ3LjU2NTMgNDEuNzI4MSA0Ny41MTU2IDQxLjg0NDZDNDcuNDY2IDQxLjk2MTEgNDcuMzkzMyA0Mi4wNjYzIDQ3LjMwMiA0Mi4xNTQxQzQ3LjExNDUgNDIuMzM0MiA0Ni44NjQ1IDQyLjQzNDggNDYuNjA0NSA0Mi40MzQ4QzQ2LjM0NDUgNDIuNDM0OCA0Ni4wOTQ1IDQyLjMzNDIgNDUuOTA3IDQyLjE1NDFMNDAuNTA3IDM2Ljg1NDFMMzUuMTA3IDQyLjE1NDFDMzQuOTE5NSA0Mi4zMzQyIDM0LjY2OTUgNDIuNDM0OCAzNC40MDk1IDQyLjQzNDhDMzQuMTQ5NSA0Mi40MzQ4IDMzLjg5OTUgNDIuMzM0MiAzMy43MTIgNDIuMTU0MUMzMy42MjA2IDQyLjA2NjMgMzMuNTQ3OSA0MS45NjExIDMzLjQ5ODMgNDEuODQ0NkMzMy40NDg2IDQxLjcyODEgMzMuNDIzIDQxLjYwMjcgMzMuNDIzIDQxLjQ3NjFDMzMuNDIzIDQxLjM0OTQgMzMuNDQ4NiA0MS4yMjQxIDMzLjQ5ODMgNDEuMTA3NkMzMy41NDc5IDQwLjk5MTEgMzMuNjIwNiA0MC44ODU4IDMzLjcxMiA0MC43OTgxTDM5LjgxMiAzNC44MTIxQzM5Ljk5OTUgMzQuNjMyIDQwLjI0OTQgMzQuNTMxNCA0MC41MDk1IDM0LjUzMTRDNDAuNzY5NSAzNC41MzE0IDQxLjAxOTQgMzQuNjMyIDQxLjIwNyAzNC44MTIxTDQ3LjMwNjkgNDAuNzk4MUg0Ny4zMDJaIiBmaWxsPSIjMzMzMzMzIi8+CjxwYXRoIGQ9Ik0zOS41MTEgNTUuMDM4VjM3LjgyMUwzNS4wOTcgNDIuMTUwOEMzNC45MDkzIDQyLjMzMjQgMzQuNjU4MiA0Mi40MzQgMzQuMzk3IDQyLjQzNEMzNC4xMzU4IDQyLjQzNCAzMy44ODQ4IDQyLjMzMjQgMzMuNjk3IDQyLjE1MDhDMzMuNjA1OCA0Mi4wNjMgMzMuNTMzMiA0MS45NTc4IDMzLjQ4MzYgNDEuODQxM0MzMy40MzQxIDQxLjcyNDggMzMuNDA4NiA0MS41OTk1IDMzLjQwODYgNDEuNDcyOEMzMy40MDg2IDQxLjM0NjIgMzMuNDM0MSA0MS4yMjA5IDMzLjQ4MzYgNDEuMTA0NEMzMy41MzMyIDQwLjk4NzkgMzMuNjA1OCA0MC44ODI3IDMzLjY5NyA0MC43OTQ5TDM5Ljc5NyAzNC44MDlDMzkuOTg0OSAzNC42Mjc3IDQwLjIzNTggMzQuNTI2MyA0MC40OTY5IDM0LjUyNjNDNDAuNzU4MSAzNC41MjYzIDQxLjAwOTEgMzQuNjI3NyA0MS4xOTcgMzQuODA5TDQ3LjI5NyA0MC43OTQ5QzQ3LjM4ODIgNDAuODgyNyA0Ny40NjA4IDQwLjk4NzkgNDcuNTEwNCA0MS4xMDQ0QzQ3LjU1OTkgNDEuMjIwOSA0Ny41ODU0IDQxLjM0NjIgNDcuNTg1NCA0MS40NzI4QzQ3LjU4NTQgNDEuNTk5NSA0Ny41NTk5IDQxLjcyNDggNDcuNTEwNCA0MS44NDEzQzQ3LjQ2MDggNDEuOTU3OCA0Ny4zODgyIDQyLjA2MyA0Ny4yOTcgNDIuMTUwOEM0Ny4xMDk2IDQyLjMzMDkgNDYuODU5OCA0Mi40MzE2IDQ2LjYgNDIuNDMxNkM0Ni4zNDAxIDQyLjQzMTYgNDYuMDkwMyA0Mi4zMzA5IDQ1LjkwMyA0Mi4xNTA4TDQxLjQ4OSAzNy44MjFWNTUuMDM4QzQxLjQ3NzYgNTUuMjkyNiA0MS4zNjgzIDU1LjUzMjggNDEuMTg0MSA1NS43MDg5QzQwLjk5OTkgNTUuODg1MSA0MC43NTQ5IDU1Ljk4MzMgNDAuNSA1NS45ODMzQzQwLjI0NTEgNTUuOTgzMyA0MC4wMDAxIDU1Ljg4NTEgMzkuODE1OSA1NS43MDg5QzM5LjYzMTcgNTUuNTMyOCAzOS41MjI0IDU1LjI5MjYgMzkuNTExIDU1LjAzOFpNNDUuNTM0MSA0Ni43NzhDNDUuMjc4OSA0Ni43NzggNDUuMDM0MiA0Ni42NzY3IDQ0Ljg1MzggNDYuNDk2M0M0NC42NzMzIDQ2LjMxNTkgNDQuNTcyIDQ2LjA3MSA0NC41NzIgNDUuODE1OUM0NC41NzIgNDUuNTYwNyA0NC42NzMzIDQ1LjMxNjEgNDQuODUzOCA0NS4xMzU3QzQ1LjAzNDIgNDQuOTU1MyA0NS4yNzg5IDQ0Ljg1NCA0NS41MzQxIDQ0Ljg1NEg0OS4wNzFDNTAuNjQxMiA0NC44NjAyIDUyLjE1MTYgNDQuMjUxNyA1My4yNzkxIDQzLjE1ODlDNTMuODI5OSA0Mi42Mjg4IDU0LjI2OCA0MS45OTMxIDU0LjU2NzMgNDEuMjg5N0M1NC44NjY2IDQwLjU4NjQgNTUuMDIwOSAzOS44Mjk4IDU1LjAyMDkgMzkuMDY1NEM1NS4wMjA5IDM4LjMwMSA1NC44NjY2IDM3LjU0NDQgNTQuNTY3MyAzNi44NDFDNTQuMjY4IDM2LjEzNzYgNTMuODI5OSAzNS41MDE5IDUzLjI3OTEgMzQuOTcxOUM1Mi4xNTEyIDMzLjg3OTggNTAuNjQxIDMzLjI3MiA0OS4wNzEgMzMuMjc4QzQ4Ljg0NiAzMy4yNzggNDguNjQxMSAzMy4yODY5IDQ4LjQ2MTEgMzMuMzA0OUM0OC4yNTk3IDMzLjMyMzggNDguMDU5MyAzMy4zNTMzIDQ3Ljg2MSAzMy4zOTNDNDcuNjM1NCAzMy40Mzk1IDQ3LjQwMDYgMzMuNDA1OSA0Ny4xOTcgMzMuMjk4M0M0Ni45OTM0IDMzLjE5MDYgNDYuODMzNiAzMy4wMTU1IDQ2Ljc0NSAzMi44MDI5QzQ2LjE1NzUgMzEuMzUyNSA0NS4xNDQzIDMwLjExNDEgNDMuODM5IDI5LjI1MDlDNDIuMzEzNCAyOC4yNDU4IDQwLjQ5MTYgMjcuNzg4OCAzOC42NzIyIDI3Ljk1NUMzNi44NTI5IDI4LjEyMTMgMzUuMTQ0MSAyOC45MDEgMzMuODI2IDMwLjE2NkMzMy4wOTcgMzAuODY4MyAzMi41MTY5IDMxLjcxMDIgMzIuMTIwNCAzMi42NDE2QzMxLjcyMzggMzMuNTcyOSAzMS41MTg5IDM0LjU3NDYgMzEuNTE3OSAzNS41ODY5QzMxLjUxNzkgMzUuNjExOSAzMS41MTc5IDM1LjYzOSAzMS41MTc5IDM1LjY2NFYzNS43MDQxQzMxLjUxNzMgMzUuODMxNiAzMS40OTE2IDM1Ljk1NzggMzEuNDQyMSAzNi4wNzU0QzMxLjM5MjcgMzYuMTkzIDMxLjMyMDUgMzYuMjk5NiAzMS4yMjk3IDM2LjM4OTRDMzEuMTM5IDM2LjQ3OTEgMzEuMDMxNSAzNi41NTAyIDMwLjkxMzMgMzYuNTk4M0MzMC43OTUyIDM2LjY0NjUgMzAuNjY4NiAzNi42NzA3IDMwLjU0MSAzNi42Njk5SDMwLjQ4NkwzMC4zMTggMzYuNjYzSDMwLjE4OTlDMjkuMDc5IDM2LjY1ODggMjguMDEwNSAzNy4wODk1IDI3LjIxMyAzNy44NjNDMjYuODIyOSAzOC4yMzc3IDI2LjUxMjYgMzguNjg3NCAyNi4zMDA3IDM5LjE4NUMyNi4wODg3IDM5LjY4MjcgMjUuOTc5NCA0MC4yMTgxIDI1Ljk3OTQgNDAuNzU5QzI1Ljk3OTQgNDEuMjk5OSAyNi4wODg3IDQxLjgzNTMgMjYuMzAwNyA0Mi4zMzNDMjYuNTEyNiA0Mi44MzA2IDI2LjgyMjkgNDMuMjgwMiAyNy4yMTMgNDMuNjU1QzI4LjAxMDYgNDQuNDI4MyAyOS4wNzkgNDQuODU4OSAzMC4xODk5IDQ0Ljg1NDlIMzQuOTQyQzM1LjE5NzIgNDQuODU0OSAzNS40NDE4IDQ0Ljk1NjMgMzUuNjIyMiA0NS4xMzY3QzM1LjgwMjYgNDUuMzE3MSAzNS45MDQxIDQ1LjU2MTcgMzUuOTA0MSA0NS44MTY4QzM1LjkwNDEgNDYuMDcyIDM1LjgwMjYgNDYuMzE2OSAzNS42MjIyIDQ2LjQ5NzNDMzUuNDQxOCA0Ni42Nzc3IDM1LjE5NzIgNDYuNzc5IDM0Ljk0MiA0Ni43NzlIMzAuMTg5OUMyOC41NTY5IDQ2Ljc4NDUgMjYuOTg2MyA0Ni4xNTE5IDI1LjgxMyA0NS4wMTYxQzI1LjI0MDEgNDQuNDY1IDI0Ljc4NDMgNDMuODAzOSAyNC40NzMgNDMuMDcyNUMyNC4xNjE3IDQyLjM0MTEgMjQuMDAxMiA0MS41NTQ0IDI0LjAwMTIgNDAuNzU5NUMyNC4wMDEyIDM5Ljk2NDYgMjQuMTYxNyAzOS4xNzc5IDI0LjQ3MyAzOC40NDY1QzI0Ljc4NDMgMzcuNzE1MSAyNS4yNDAxIDM3LjA1MzkgMjUuODEzIDM2LjUwMjlDMjYuODM0MiAzNS41MTM0IDI4LjE2MjMgMzQuOTAxOCAyOS41NzggMzQuNzY5QzI5Ljc4MSAzMi41MDQgMzAuNzkzNiAzMC4zODgxIDMyLjQzMDEgMjguODA5QzM0LjA3NzkgMjcuMjI1MSAzNi4yMTU4IDI2LjI0OTEgMzguNDkyMSAyNi4wNDE5QzQwLjc2ODMgMjUuODM0NyA0My4wNDcyIDI2LjQwODUgNDQuOTU0IDI3LjY2ODlDNDYuMzY0NCAyOC42MDI0IDQ3LjUwNjQgMjkuODg4MiA0OC4yNjcgMzEuMzk4OUM0OC41NTEgMzEuMzcwOSA0OC44MiAzMS4zNTY5IDQ5LjA2NyAzMS4zNTY5QzUxLjE1OTEgMzEuMzUgNTMuMTcxIDMyLjE2MDcgNTQuNjc0IDMzLjYxNTlDNTUuNDA3OSAzNC4zMjEzIDU1Ljk5MTggMzUuMTY3NyA1Ni4zOTA2IDM2LjEwNDJDNTYuNzg5NSAzNy4wNDA3IDU2Ljk5NTEgMzguMDQ4IDU2Ljk5NTEgMzkuMDY1OUM1Ni45OTUxIDQwLjA4MzggNTYuNzg5NSA0MS4wOTEzIDU2LjM5MDYgNDIuMDI3OEM1NS45OTE4IDQyLjk2NDMgNTUuNDA3OSA0My44MTA3IDU0LjY3NCA0NC41MTYxQzUzLjE3MSA0NS45NzEzIDUxLjE1OTEgNDYuNzgxNyA0OS4wNjcgNDYuNzc0OUw0NS41MzQxIDQ2Ljc3OFoiIGZpbGw9IiNENkFCMDAiLz4KPC9zdmc+Cg==");


/***/ }),

/***/ "./src/assets/feature/design.svg":
/*!***************************************!*\
  !*** ./src/assets/feature/design.svg ***!
  \***************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgDesign; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path, _path2;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function SvgDesign(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 82,
    height: 82,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M54 0H28C12.536 0 0 12.536 0 28v26c0 15.464 12.536 28 28 28h26c15.464 0 28-12.536 28-28V28C82 12.536 69.464 0 54 0z",
    fill: "#F4F4FF"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M46.684 59.618l-3.316-3.38-3.317 3.38a1.258 1.258 0 01-1.8 0 1.317 1.317 0 010-1.84l3.317-3.38-3.317-3.379a1.317 1.317 0 010-1.84 1.259 1.259 0 011.8 0l3.317 3.38 3.316-3.38a1.258 1.258 0 011.8 0 1.32 1.32 0 010 1.84l-3.316 3.379 3.316 3.38a1.318 1.318 0 010 1.84 1.258 1.258 0 01-1.8 0zM22.119 53.78a3.772 3.772 0 113.77 3.84 3.806 3.806 0 01-3.769-3.84h-.001zm3.772-5.98c-.26 0-.52.018-.778.054a25.074 25.074 0 013.91-8.1 22.212 22.212 0 0115.475-8.99l-2.729-2.418a1.316 1.316 0 01.265-2.145 1.26 1.26 0 011.409.182l5.145 4.56a1.318 1.318 0 01.126 1.835l-4.473 5.245a1.257 1.257 0 01-1.8.128 1.317 1.317 0 01-.126-1.834l2.543-2.982a19.5 19.5 0 00-13.727 7.89 22.76 22.76 0 00-3.427 6.869 5.74 5.74 0 00-1.812-.294h-.001zm27.568-16.13a3.77 3.77 0 113.77 3.84 3.806 3.806 0 01-3.769-3.84h-.001zm-23.648 2.15l-3.317-3.381-3.316 3.38a1.26 1.26 0 01-1.8 0 1.318 1.318 0 010-1.84l3.317-3.38-3.317-3.379a1.318 1.318 0 010-1.84 1.258 1.258 0 011.8 0l3.316 3.38 3.317-3.38a1.258 1.258 0 011.8 0 1.32 1.32 0 010 1.84l-3.317 3.38 3.316 3.379a1.318 1.318 0 010 1.84 1.259 1.259 0 01-1.8 0h.001z",
    fill: "#5856D6"
  })));
}
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODIiIGhlaWdodD0iODIiIHZpZXdCb3g9IjAgMCA4MiA4MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTU0IDBIMjhDMTIuNTM2IDAgMCAxMi41MzYgMCAyOFY1NEMwIDY5LjQ2NCAxMi41MzYgODIgMjggODJINTRDNjkuNDY0IDgyIDgyIDY5LjQ2NCA4MiA1NFYyOEM4MiAxMi41MzYgNjkuNDY0IDAgNTQgMFoiIGZpbGw9IiNGNEY0RkYiLz4KPHBhdGggZD0iTTQ2LjY4NCA1OS42MTc5TDQzLjM2OCA1Ni4yMzhMNDAuMDUxIDU5LjYxNzlDMzkuOTMzOCA1OS43Mzc4IDM5Ljc5MzggNTkuODMzMiAzOS42MzkyIDU5Ljg5ODJDMzkuNDg0NyA1OS45NjMyIDM5LjMxODcgNTkuOTk2NiAzOS4xNTEgNTkuOTk2NkMzOC45ODMzIDU5Ljk5NjYgMzguODE3MyA1OS45NjMyIDM4LjY2MjggNTkuODk4MkMzOC41MDgyIDU5LjgzMzIgMzguMzY4MiA1OS43Mzc4IDM4LjI1MSA1OS42MTc5QzM4LjAxMSA1OS4zNzE4IDM3Ljg3NjggNTkuMDQxNyAzNy44NzY4IDU4LjY5OEMzNy44NzY4IDU4LjM1NDMgMzguMDExIDU4LjAyNDIgMzguMjUxIDU3Ljc3ODFMNDEuNTY4IDU0LjM5NzlMMzguMjUxIDUxLjAxOUMzOC4wMTEgNTAuNzcyOSAzNy44NzY4IDUwLjQ0MjkgMzcuODc2OCA1MC4wOTkxQzM3Ljg3NjggNDkuNzU1NCAzOC4wMTEgNDkuNDI1MSAzOC4yNTEgNDkuMTc5QzM4LjM2ODMgNDkuMDU5MiAzOC41MDg0IDQ4Ljk2NDEgMzguNjYyOSA0OC44OTkyQzM4LjgxNzQgNDguODM0MiAzOC45ODM0IDQ4LjgwMDggMzkuMTUxIDQ4LjgwMDhDMzkuMzE4NiA0OC44MDA4IDM5LjQ4NDYgNDguODM0MiAzOS42MzkxIDQ4Ljg5OTJDMzkuNzkzNiA0OC45NjQxIDM5LjkzMzcgNDkuMDU5MiA0MC4wNTEgNDkuMTc5TDQzLjM2OCA1Mi41NTkxTDQ2LjY4NCA0OS4xNzlDNDYuODAxMyA0OS4wNTkyIDQ2Ljk0MTMgNDguOTY0MSA0Ny4wOTU5IDQ4Ljg5OTJDNDcuMjUwNCA0OC44MzQyIDQ3LjQxNjQgNDguODAwOCA0Ny41ODQgNDguODAwOEM0Ny43NTE2IDQ4LjgwMDggNDcuOTE3NiA0OC44MzQyIDQ4LjA3MjEgNDguODk5MkM0OC4yMjY3IDQ4Ljk2NDEgNDguMzY2NyA0OS4wNTkyIDQ4LjQ4NCA0OS4xNzlDNDguNzIzNyA0OS40MjUyIDQ4Ljg1NzggNDkuNzU1NSA0OC44NTc4IDUwLjA5OTFDNDguODU3OCA1MC40NDI4IDQ4LjcyMzcgNTAuNzcyOCA0OC40ODQgNTEuMDE5TDQ1LjE2OCA1NC4zOTc5TDQ4LjQ4NCA1Ny43NzgxQzQ4LjcyMzkgNTguMDI0MiA0OC44NTgyIDU4LjM1NDMgNDguODU4MiA1OC42OThDNDguODU4MiA1OS4wNDE3IDQ4LjcyMzkgNTkuMzcxOCA0OC40ODQgNTkuNjE3OUM0OC4zNjY4IDU5LjczNzggNDguMjI2OCA1OS44MzMyIDQ4LjA3MjIgNTkuODk4MkM0Ny45MTc3IDU5Ljk2MzIgNDcuNzUxNyA1OS45OTY2IDQ3LjU4NCA1OS45OTY2QzQ3LjQxNjMgNTkuOTk2NiA0Ny4yNTA0IDU5Ljk2MzIgNDcuMDk1OCA1OS44OTgyQzQ2Ljk0MTMgNTkuODMzMiA0Ni44MDEzIDU5LjczNzggNDYuNjg0IDU5LjYxNzlaTTIyLjExOSA1My43OEMyMi4xMzI2IDUzLjAzNzIgMjIuMzY1MyA1Mi4zMTQ5IDIyLjc4NzggNTEuNzAzOUMyMy4yMTA0IDUxLjA5MjggMjMuODA0MSA1MC42MjAzIDI0LjQ5NDMgNTAuMzQ1NUMyNS4xODQ1IDUwLjA3MDYgMjUuOTQwNSA1MC4wMDU5IDI2LjY2NzQgNTAuMTU5MkMyNy4zOTQzIDUwLjMxMjUgMjguMDU5OCA1MC42NzY5IDI4LjU4MDMgNTEuMjA3QzI5LjEwMDcgNTEuNzM3MiAyOS40NTMgNTIuNDA5MyAyOS41OTI5IDUzLjEzODlDMjkuNzMyOCA1My44Njg1IDI5LjY1NDEgNTQuNjIzMyAyOS4zNjY2IDU1LjMwODNDMjkuMDc5MSA1NS45OTM0IDI4LjU5NTcgNTYuNTc4MiAyNy45NzcgNTYuOTg5NUMyNy4zNTgzIDU3LjQwMDggMjYuNjMxOSA1Ny42MjAyIDI1Ljg4OSA1Ny42MjAxQzI0Ljg4MDEgNTcuNjEwMyAyMy45MTYzIDU3LjIwMDMgMjMuMjA5NiA1Ni40ODAyQzIyLjUwMjggNTUuNzYwMiAyMi4xMTA5IDU0Ljc4ODkgMjIuMTIgNTMuNzhIMjIuMTE5Wk0yNS44OTEgNDcuOEMyNS42MzA3IDQ3LjgwMDIgMjUuMzcwOCA0Ny44MTgyIDI1LjExMyA0Ny44NTRDMjUuOTE3NCA0NC45NDA0IDI3LjI0MjEgNDIuMTk2MiAyOS4wMjMgMzkuNzUzOUMzMC44Mzc5IDM3LjI2NDEgMzMuMTUwOSAzNS4xNzkzIDM1LjgxNTEgMzMuNjMxNkMzOC40NzkyIDMyLjA4MzkgNDEuNDM2MSAzMS4xMDcyIDQ0LjQ5OCAzMC43NjM5TDQxLjc2OSAyOC4zNDU5QzQxLjUxMyAyOC4xMTcgNDEuMzU2NiAyNy43OTcyIDQxLjMzMzEgMjcuNDU0NkM0MS4zMDk1IDI3LjExMiA0MS40MjA4IDI2Ljc3MzcgNDEuNjQzIDI2LjUxMkM0MS43NTE0IDI2LjM4MzMgNDEuODg0NSAyNi4yNzc4IDQyLjAzNDQgMjYuMjAxNEM0Mi4xODQzIDI2LjEyNTEgNDIuMzQ4IDI2LjA3OTQgNDIuNTE1NyAyNi4wNjc0QzQyLjY4MzUgMjYuMDU1NCA0Mi44NTIgMjYuMDc3MiA0My4wMTEzIDI2LjEzMTNDNDMuMTcwNSAyNi4xODU1IDQzLjMxNzQgMjYuMjcxMiA0My40NDMgMjYuMzgzMUw0OC41ODggMzAuOTQzMUM0OC44NDQgMzEuMTcyMiA0OS4wMDA1IDMxLjQ5MjIgNDkuMDI0IDMxLjgzNUM0OS4wNDc1IDMyLjE3NzcgNDguOTM2MyAzMi41MTYxIDQ4LjcxNCAzMi43NzgxTDQ0LjI0MSAzOC4wMjI5QzQ0LjEzMjYgMzguMTUxNiA0My45OTk1IDM4LjI1NzQgNDMuODQ5NSAzOC4zMzM3QzQzLjY5OTYgMzguNDEwMSA0My41MzU5IDM4LjQ1NTYgNDMuMzY4IDM4LjQ2NzVDNDMuMjAwMiAzOC40Nzk1IDQzLjAzMTcgMzguNDU3NCA0Mi44NzI0IDM4LjQwMzFDNDIuNzEzMiAzOC4zNDg3IDQyLjU2NjUgMzguMjYyOSA0Mi40NDEgMzguMTUwOUM0Mi4xODUgMzcuOTIxOSA0Mi4wMjg2IDM3LjYwMjEgNDIuMDA1MSAzNy4yNTk1QzQxLjk4MTUgMzYuOTE2OSA0Mi4wOTI4IDM2LjU3ODcgNDIuMzE1IDM2LjMxNjlMNDQuODU4IDMzLjMzNUM0Mi4xNDU0IDMzLjYxNzEgMzkuNTIyMiAzNC40NjUyIDM3LjE1NzcgMzUuODI0MkMzNC43OTMyIDM3LjE4MzMgMzIuNzQwMSAzOS4wMjMyIDMxLjEzMSA0MS4yMjUxQzI5LjYwOCA0My4zMDQzIDI4LjQ0OTIgNDUuNjI2OCAyNy43MDQgNDguMDk0QzI3LjExOTcgNDcuODk5NCAyNi41MDc5IDQ3LjgwMDIgMjUuODkyIDQ3LjhIMjUuODkxWk01My40NTkgMzEuNjcwOUM1My40NzI0IDMwLjkyODEgNTMuNzA0OSAzMC4yMDU5IDU0LjEyNzQgMjkuNTk0N0M1NC41NDk4IDI4Ljk4MzYgNTUuMTQzNCAyOC41MTA4IDU1LjgzMzYgMjguMjM1OEM1Ni41MjM4IDI3Ljk2MDkgNTcuMjc5OCAyNy44OTU5IDU4LjAwNjggMjguMDQ5MUM1OC43MzM4IDI4LjIwMjIgNTkuMzk5NCAyOC41NjY2IDU5LjkyIDI5LjA5NjdDNjAuNDQwNSAyOS42MjY4IDYwLjc5MjkgMzAuMjk4OSA2MC45MzI5IDMxLjAyODZDNjEuMDcyOCAzMS43NTgyIDYwLjk5NDEgMzIuNTEyOSA2MC43MDY3IDMzLjE5OEM2MC40MTkyIDMzLjg4MzEgNTkuOTM1OCAzNC40NjgxIDU5LjMxNzEgMzQuODc5NEM1OC42OTg0IDM1LjI5MDcgNTcuOTcyIDM1LjUxMDEgNTcuMjI5IDM1LjUxQzU2LjIyMDMgMzUuNTAwMiA1NS4yNTY3IDM1LjA5MDUgNTQuNTUgMzQuMzcwNkM1My44NDMzIDMzLjY1MDggNTMuNDUxMiAzMi42Nzk2IDUzLjQ2IDMxLjY3MDlINTMuNDU5Wk0yOS44MTEgMzMuODE5MUwyNi40OTQgMzAuNDM5TDIzLjE3OCAzMy44MTkxQzIzLjA2MDcgMzMuOTM4OCAyMi45MjA3IDM0LjAzMzkgMjIuNzY2MSAzNC4wOTg5QzIyLjYxMTYgMzQuMTYzOCAyMi40NDU2IDM0LjE5NzMgMjIuMjc4IDM0LjE5NzNDMjIuMTEwNCAzNC4xOTczIDIxLjk0NDQgMzQuMTYzOCAyMS43ODk5IDM0LjA5ODlDMjEuNjM1MyAzNC4wMzM5IDIxLjQ5NTMgMzMuOTM4OCAyMS4zNzggMzMuODE5MUMyMS4xMzgxIDMzLjU3MyAyMS4wMDM4IDMzLjI0MjcgMjEuMDAzOCAzMi44OTg5QzIxLjAwMzggMzIuNTU1MiAyMS4xMzgxIDMyLjIyNTEgMjEuMzc4IDMxLjk3OUwyNC42OTUgMjguNTk5MUwyMS4zNzggMjUuMjJDMjEuMTM4MSAyNC45NzM4IDIxLjAwMzggMjQuNjQzOCAyMS4wMDM4IDI0LjNDMjEuMDAzOCAyMy45NTYzIDIxLjEzODEgMjMuNjI2IDIxLjM3OCAyMy4zNzk5QzIxLjQ5NTIgMjMuMjU5OSAyMS42MzUyIDIzLjE2NDcgMjEuNzg5NyAyMy4wOTk2QzIxLjk0NDMgMjMuMDM0NSAyMi4xMTAzIDIzLjAwMSAyMi4yNzggMjMuMDAxQzIyLjQ0NTcgMjMuMDAxIDIyLjYxMTcgMjMuMDM0NSAyMi43NjYzIDIzLjA5OTZDMjIuOTIwOSAyMy4xNjQ3IDIzLjA2MDggMjMuMjU5OSAyMy4xNzggMjMuMzc5OUwyNi40OTQgMjYuNzZMMjkuODExIDIzLjM3OTlDMjkuOTI4MiAyMy4yNTk5IDMwLjA2ODIgMjMuMTY0NyAzMC4yMjI3IDIzLjA5OTZDMzAuMzc3MyAyMy4wMzQ1IDMwLjU0MzMgMjMuMDAxIDMwLjcxMSAyMy4wMDFDMzAuODc4NyAyMy4wMDEgMzEuMDQ0NyAyMy4wMzQ1IDMxLjE5OTMgMjMuMDk5NkMzMS4zNTM4IDIzLjE2NDcgMzEuNDkzOCAyMy4yNTk5IDMxLjYxMSAyMy4zNzk5QzMxLjg1MDUgMjMuNjI2MyAzMS45ODQ0IDIzLjk1NjUgMzEuOTg0NCAyNC4zQzMxLjk4NDQgMjQuNjQzNiAzMS44NTA1IDI0Ljk3MzYgMzEuNjExIDI1LjIyTDI4LjI5NCAyOC42MDAxTDMxLjYxIDMxLjk3OUMzMS44NDk5IDMyLjIyNTEgMzEuOTg0MiAzMi41NTUyIDMxLjk4NDIgMzIuODk4OUMzMS45ODQyIDMzLjI0MjcgMzEuODQ5OSAzMy41NzMgMzEuNjEgMzMuODE5MUMzMS40OTI3IDMzLjkzOSAzMS4zNTI3IDM0LjAzNDEgMzEuMTk4MiAzNC4wOTkxQzMxLjA0MzYgMzQuMTY0MSAzMC44Nzc3IDM0LjE5NzUgMzAuNzEgMzQuMTk3NUMzMC41NDI0IDM0LjE5NzUgMzAuMzc2NCAzNC4xNjQxIDMwLjIyMTggMzQuMDk5MUMzMC4wNjczIDM0LjAzNDEgMjkuOTI3MiAzMy45MzkgMjkuODEgMzMuODE5MUgyOS44MTFaIiBmaWxsPSIjNTg1NkQ2Ii8+Cjwvc3ZnPgo=");


/***/ }),

/***/ "./src/assets/feature/setting.svg":
/*!****************************************!*\
  !*** ./src/assets/feature/setting.svg ***!
  \****************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgSetting; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path, _path2;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function SvgSetting(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 82,
    height: 82,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M54 0H28C12.536 0 0 12.536 0 28v26c0 15.464 12.536 28 28 28h26c15.464 0 28-12.536 28-28V28C82 12.536 69.464 0 54 0z",
    fill: "#E4FFEE"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M39.866 60a2.284 2.284 0 01-2.257-1.91l-.433-2.6c-.843-.26-1.66-.594-2.443-1l-2.172 1.545a2.272 2.272 0 01-2.938-.247l-2.3-2.3a2.28 2.28 0 01-.247-2.945l1.523-2.118a14.247 14.247 0 01-1.058-2.513l-2.628-.447A2.285 2.285 0 0123 43.2v-3.253a2.283 2.283 0 011.91-2.257l2.566-.433c.262-.873.606-1.72 1.028-2.528l-1.545-2.172a2.287 2.287 0 01.247-2.945l2.311-2.3a2.284 2.284 0 012.945-.247l2.126 1.531a14.177 14.177 0 012.512-1.059l.448-2.628A2.284 2.284 0 0139.8 23h3.254a2.285 2.285 0 012.257 1.909l.432 2.566c.904.272 1.78.632 2.613 1.075l2.149-1.53a2.27 2.27 0 012.937.246l2.3 2.3a2.28 2.28 0 01.247 2.946l-1.53 2.141c.425.806.774 1.649 1.043 2.52l2.6.44a2.255 2.255 0 011.894 2.256v3.254a2.284 2.284 0 01-1.909 2.257l-2.6.433c-.268.87-.617 1.714-1.043 2.52l1.53 2.148a2.287 2.287 0 01-.247 2.945l-2.3 2.3a2.284 2.284 0 01-2.945.247l-2.141-1.53c-.806.425-1.65.774-2.52 1.043l-.44 2.6a2.284 2.284 0 01-2.257 1.91L39.866 60zm-4.668-7.621c.994.573 2.06 1.01 3.169 1.3a1.036 1.036 0 01.765.834l.541 3.247a.2.2 0 00.2.169h3.254a.2.2 0 00.2-.169l.549-3.247a1.026 1.026 0 01.765-.834 12.36 12.36 0 003.239-1.345 1.046 1.046 0 011.136.047l2.682 1.909a.192.192 0 00.196.024.2.2 0 00.067-.046l2.3-2.3a.21.21 0 00.023-.263l-1.909-2.69a1.042 1.042 0 01-.046-1.135c.6-1.01 1.053-2.1 1.345-3.239a1.04 1.04 0 01.835-.766l3.246-.541a.2.2 0 00.17-.2h.007V39.88a.199.199 0 00-.17-.2l-3.246-.549a1.023 1.023 0 01-.834-.765 12.399 12.399 0 00-1.345-3.238 1.046 1.046 0 01.047-1.137l1.909-2.68a.21.21 0 00-.023-.265l-2.3-2.3a.21.21 0 00-.147-.062.23.23 0 00-.116.04L49.04 30.64a1.043 1.043 0 01-1.136.047 12.513 12.513 0 00-3.316-1.36 1.048 1.048 0 01-.773-.843l-.541-3.223a.2.2 0 00-.2-.17H39.82a.2.2 0 00-.2.17l-.556 3.27a1.06 1.06 0 01-.766.834 12.24 12.24 0 00-3.23 1.361 1.059 1.059 0 01-1.144-.047l-2.667-1.9a.2.2 0 00-.263.023l-2.3 2.3a.211.211 0 00-.022.264l1.924 2.7a1.035 1.035 0 01.054 1.13 12.326 12.326 0 00-1.321 3.246 1.045 1.045 0 01-.843.772l-3.223.54a.2.2 0 00-.17.201v3.253a.2.2 0 00.17.2l3.27.556a1.06 1.06 0 01.835.766 12.237 12.237 0 001.36 3.23 1.06 1.06 0 01-.046 1.145l-1.9 2.666a.209.209 0 00.023.263l2.3 2.3a.208.208 0 00.147.061.235.235 0 00.116-.038l2.705-1.925c.175-.127.385-.194.6-.193.185 0 .366.048.527.139h-.002zM33.52 41.496a7.984 7.984 0 1115.968.004 7.984 7.984 0 01-15.968-.005v.001zm2.087 0a5.9 5.9 0 1011.8.002 5.9 5.9 0 00-11.8-.003v.001z",
    fill: "#40975F"
  })));
}
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODIiIGhlaWdodD0iODIiIHZpZXdCb3g9IjAgMCA4MiA4MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTU0IDBIMjhDMTIuNTM2IDAgMCAxMi41MzYgMCAyOFY1NEMwIDY5LjQ2NCAxMi41MzYgODIgMjggODJINTRDNjkuNDY0IDgyIDgyIDY5LjQ2NCA4MiA1NFYyOEM4MiAxMi41MzYgNjkuNDY0IDAgNTQgMFoiIGZpbGw9IiNFNEZGRUUiLz4KPHBhdGggZD0iTTM5Ljg2NiA2MEMzOS4zMjQ0IDYwLjAwMDkgMzguODAwMiA1OS44MDkzIDM4LjM4NjggNTkuNDU5NUMzNy45NzM0IDU5LjEwOTYgMzcuNjk3NyA1OC42MjQ0IDM3LjYwOSA1OC4wOTAxTDM3LjE3NiA1NS40OUMzNi4zMzMzIDU1LjIzMDggMzUuNTE1NiA1NC44OTYxIDM0LjczMyA1NC40OUwzMi41NjEgNTYuMDM0OUMzMi4xNzY2IDU2LjMxMzMgMzEuNzEzNyA1Ni40NjI1IDMxLjIzOSA1Ni40NjA5QzMwLjkzODYgNTYuNDYxMiAzMC42NDEgNTYuNDAxOSAzMC4zNjM2IDU2LjI4NjRDMzAuMDg2MiA1Ni4xNzA5IDI5LjgzNDUgNTYuMDAxNiAyOS42MjMgNTUuNzg4MUwyNy4zMjMgNTMuNDg4QzI2LjkzODggNTMuMTA2NCAyNi43MDMgNTIuNjAwNiAyNi42NTc4IDUyLjA2MUMyNi42MTI1IDUxLjUyMTQgMjYuNzYwOCA1MC45ODMyIDI3LjA3NiA1MC41NDNMMjguNTk5IDQ4LjQyNTFDMjguMTY2OCA0Ny42MjMxIDI3LjgxMjUgNDYuNzgxNyAyNy41NDEgNDUuOTEyMUwyNC45MTMgNDUuNDY1MUMyNC4zNzY5IDQ1LjM3NjYgMjMuODg5OSA0NS4wOTk5IDIzLjUzOTMgNDQuNjg0OEMyMy4xODg3IDQ0LjI2OTcgMjIuOTk3NSA0My43NDMzIDIzIDQzLjJWMzkuOTQ3QzIyLjk5ODkgMzkuNDA1NCAyMy4xOTA0IDM4Ljg4MSAyMy41NDAzIDM4LjQ2NzVDMjMuODkwMiAzOC4wNTQxIDI0LjM3NTcgMzcuNzc4NCAyNC45MSAzNy42ODk5TDI3LjQ3NiAzNy4yNTcxQzI3LjczNzYgMzYuMzgzNyAyOC4wODE4IDM1LjUzNzEgMjguNTA0IDM0LjcyOUwyNi45NTkgMzIuNTU2OUMyNi42NDUyIDMyLjExNjEgMjYuNDk3NyAzMS41Nzg1IDI2LjU0MjkgMzEuMDM5M0MyNi41ODgyIDMwLjUwMDEgMjYuODIzMSAyOS45OTQ0IDI3LjIwNiAyOS42MTIxTDI5LjUxNyAyNy4zMTJDMjkuODk5IDI2LjkyODYgMzAuNDA0OCAyNi42OTMyIDMwLjk0NDIgMjYuNjQ4QzMxLjQ4MzYgMjYuNjAyNyAzMi4wMjE1IDI2Ljc1MDUgMzIuNDYyIDI3LjA2NDlMMzQuNTg4IDI4LjU5NkMzNS4zODk0IDI4LjE2MzEgMzYuMjMwNiAyNy44MDg2IDM3LjEgMjcuNTM3MUwzNy41NDggMjQuOTA4OUMzNy42MzY4IDI0LjM3NTcgMzcuOTExOCAyMy44OTEzIDM4LjMyNDIgMjMuNTQxOEMzOC43MzY1IDIzLjE5MjIgMzkuMjU5NCAyMy4wMDAyIDM5LjggMjNINDMuMDU0QzQzLjU5NTQgMjIuOTk5MSA0NC4xMTk2IDIzLjE5MDQgNDQuNTMzIDIzLjU0QzQ0Ljk0NjQgMjMuODg5NyA0NS4yMjIxIDI0LjM3NDkgNDUuMzExIDI0LjkwODlMNDUuNzQzIDI3LjQ3NTFDNDYuNjQ3IDI3Ljc0NzQgNDcuNTIyMSAyOC4xMDc0IDQ4LjM1NiAyOC41NTAxTDUwLjUwNSAyNy4wMkM1MC44ODkyIDI2Ljc0MTcgNTEuMzUxNyAyNi41OTI2IDUxLjgyNiAyNi41OTRDNTIuMTI2NCAyNi41OTM2IDUyLjQyNCAyNi42NTI3IDUyLjcwMTMgMjYuNzY4MUM1Mi45Nzg3IDI2Ljg4MzQgNTMuMjMwNSAyNy4wNTI4IDUzLjQ0MiAyNy4yNjYxTDU1Ljc0MiAyOS41NjU5QzU2LjEyNjUgMjkuOTQ3NiA1Ni4zNjI0IDMwLjQ1MzggNTYuNDA3NyAzMC45OTM3QzU2LjQ1MyAzMS41MzM1IDU2LjMwNDYgMzIuMDcxNiA1NS45ODkgMzIuNTEyTDU0LjQ1OSAzNC42NTMxQzU0Ljg4NDMgMzUuNDU4NSA1NS4yMzM1IDM2LjMwMTkgNTUuNTAyIDM3LjE3MjFMNTguMTAyIDM3LjYxM0M1OC42MzU3IDM3LjY5OTcgNTkuMTIwNCAzNy45NzUxIDU5LjQ2OCAzOC4zODkyQzU5LjgxNTcgMzguODAzMiA2MC4wMDMgMzkuMzI4MyA1OS45OTYgMzkuODY4OVY0My4xMjMxQzU5Ljk5NyA0My42NjQ1IDU5LjgwNTUgNDQuMTg4NyA1OS40NTU5IDQ0LjYwMjFDNTkuMTA2MiA0NS4wMTU0IDU4LjYyMTEgNDUuMjkxIDU4LjA4NyA0NS4zNzk5TDU1LjQ4NyA0NS44MTNDNTUuMjE4OCA0Ni42ODM3IDU0Ljg2OTYgNDcuNTI3NCA1NC40NDQgNDguMzMzTDU1Ljk3NCA1MC40ODFDNTYuMjg3OSA1MC45MjE3IDU2LjQzNTMgNTEuNDU5NiA1Ni4zOTAxIDUxLjk5ODhDNTYuMzQ0OSA1Mi41MzggNTYuMTA5OSA1My4wNDM3IDU1LjcyNyA1My40MjZMNTMuNDI3IDU1LjcyNjFDNTMuMDQ1IDU2LjEwOTUgNTIuNTM5MiA1Ni4zNDQ3IDUxLjk5OTkgNTYuMzg5OUM1MS40NjA1IDU2LjQzNTEgNTAuOTIyNiA1Ni4yODc0IDUwLjQ4MiA1NS45NzI5TDQ4LjM0MSA1NC40NDMxQzQ3LjUzNTEgNTQuODY4MSA0Ni42OTE1IDU1LjIxNzIgNDUuODIxIDU1LjQ4NjFMNDUuMzgxIDU4LjA4NTlDNDUuMjkyNCA1OC42MjAyIDQ1LjAxNjcgNTkuMTA1NyA0NC42MDMzIDU5LjQ1NTZDNDQuMTg5OSA1OS44MDU0IDQzLjY2NTYgNTkuOTk3IDQzLjEyNCA1OS45OTYxTDM5Ljg2NiA2MFpNMzUuMTk4IDUyLjM3ODlDMzYuMTkxNyA1Mi45NTE1IDM3LjI1NzUgNTMuMzg4NyAzOC4zNjcgNTMuNjc5QzM4LjU2MTcgNTMuNzI4OCAzOC43Mzc2IDUzLjgzNDMgMzguODczNSA1My45ODI0QzM5LjAwOTMgNTQuMTMwNSAzOS4wOTkxIDU0LjMxNDcgMzkuMTMyIDU0LjUxMjlMMzkuNjczIDU3Ljc2QzM5LjY4MDUgNTcuODA3NSAzOS43MDQ4IDU3Ljg1MDggMzkuNzQxNSA1Ny44ODE4QzM5Ljc3ODIgNTcuOTEyOSAzOS44MjQ5IDU3LjkyOTUgMzkuODczIDU3LjkyOUg0My4xMjdDNDMuMTc1MSA1Ny45Mjk1IDQzLjIyMTggNTcuOTEyOSA0My4yNTg1IDU3Ljg4MThDNDMuMjk1MyA1Ny44NTA4IDQzLjMxOTYgNTcuODA3NSA0My4zMjcgNTcuNzZMNDMuODc2IDU0LjUxMjlDNDMuOTA3NyA1NC4zMTQyIDQzLjk5NzEgNTQuMTI5MiA0NC4xMzMxIDUzLjk4MUM0NC4yNjkyIDUzLjgzMjcgNDQuNDQ1OCA1My43Mjc2IDQ0LjY0MSA1My42NzlDNDUuNzc5MSA1My4zODY5IDQ2Ljg2OTggNTIuOTM0IDQ3Ljg4IDUyLjMzNEM0OC4wNTM4IDUyLjIzMTQgNDguMjUzNCA1Mi4xODE0IDQ4LjQ1NSA1Mi4xODk3QzQ4LjY1NjUgNTIuMTk4IDQ4Ljg1MTQgNTIuMjY0NiA0OS4wMTYgNTIuMzgxMUw1MS42OTggNTQuMjlDNTEuNzMxMyA1NC4zMTU3IDUxLjc3MiA1NC4zMjk4IDUxLjgxNCA1NC4zMzAxQzUxLjg0MTUgNTQuMzMwNCA1MS44Njg3IDU0LjMyNDkgNTEuODk0IDU0LjMxNDJDNTEuOTE5MyA1NC4zMDM1IDUxLjk0MjEgNTQuMjg3OSA1MS45NjEgNTQuMjY4MUw1NC4yNjEgNTEuOTY4QzU0LjI5NDQgNTEuOTMzNCA1NC4zMTQ4IDUxLjg4ODQgNTQuMzE5IDUxLjg0MDZDNTQuMzIzMiA1MS43OTI3IDU0LjMxMDkgNTEuNzQ0OSA1NC4yODQgNTEuNzA1MUw1Mi4zNzUgNDkuMDE0OUM1Mi4yNTg1IDQ4Ljg1MDQgNTIuMTkyMSA0OC42NTU4IDUyLjE4NCA0OC40NTQzQzUyLjE3NTggNDguMjUyOSA1Mi4yMjYyIDQ4LjA1MzMgNTIuMzI5IDQ3Ljg3OTlDNTIuOTI4OCA0Ni44Njk1IDUzLjM4MTcgNDUuNzc5MSA1My42NzQgNDQuNjQxMUM1My43MjQxIDQ0LjQ0NjMgNTMuODI5NyA0NC4yNyA1My45Nzc5IDQ0LjEzNEM1NC4xMjYxIDQzLjk5ODEgNTQuMzEwNiA0My45MDgyIDU0LjUwOSA0My44NzVMNTcuNzU1IDQzLjMzNEM1Ny44MDI3IDQzLjMyNjggNTcuODQ2MiA0My4zMDI2IDU3Ljg3NzQgNDMuMjY1OUM1Ny45MDg3IDQzLjIyOTEgNTcuOTI1NiA0My4xODIzIDU3LjkyNSA0My4xMzRINTcuOTMyVjM5Ljg3OTlDNTcuOTMyNiAzOS44MzE3IDU3LjkxNTcgMzkuNzg1IDU3Ljg4NDQgMzkuNzQ4M0M1Ny44NTMyIDM5LjcxMTUgNTcuODA5NyAzOS42ODcyIDU3Ljc2MiAzOS42Nzk5TDU0LjUxNiAzOS4xMzExQzU0LjMxNzIgMzkuMDk5OCA1NC4xMzIgMzkuMDEwNCA1My45ODM2IDM4Ljg3NDNDNTMuODM1MyAzOC43MzgyIDUzLjczMDQgMzguNTYxNCA1My42ODIgMzguMzY2QzUzLjM4OTMgMzcuMjI4NCA1Mi45MzY1IDM2LjEzODEgNTIuMzM3IDM1LjEyNzlDNTIuMjM0MyAzNC45NTQxIDUyLjE4NCAzNC43NTQzIDUyLjE5MjQgMzQuNTUyNUM1Mi4yMDA3IDM0LjM1MDcgNTIuMjY3MyAzNC4xNTU3IDUyLjM4NCAzMy45OTFMNTQuMjkzIDMxLjMxMDFDNTQuMzIwMSAzMS4yNzAxIDU0LjMzMjYgMzEuMjIxOSA1NC4zMjg0IDMxLjE3MzhDNTQuMzI0MiAzMS4xMjU3IDU0LjMwMzYgMzEuMDgwNiA1NC4yNyAzMS4wNDU5TDUxLjk3IDI4Ljc0NjFDNTEuOTUwOCAyOC43MjY2IDUxLjkyNzkgMjguNzExMSA1MS45MDI3IDI4LjcwMDRDNTEuODc3NSAyOC42ODk4IDUxLjg1MDQgMjguNjg0MiA1MS44MjMgMjguNjg0MUM1MS43ODE0IDI4LjY4NjcgNTEuNzQxNCAyOC43MDA1IDUxLjcwNyAyOC43MjQxTDQ5LjA0IDMwLjYzOTlDNDguODc1NSAzMC43NTY4IDQ4LjY4MDYgMzAuODIzNCA0OC40NzkgMzAuODMxOEM0OC4yNzc0IDMwLjg0MDEgNDguMDc3NiAzMC43ODk5IDQ3LjkwNCAzMC42ODdDNDYuODY5NyAzMC4wNzY5IDQ1Ljc1MjkgMjkuNjE4OCA0NC41ODggMjkuMzI2OUM0NC4zOTE0IDI5LjI3NjQgNDQuMjEzNiAyOS4xNjk5IDQ0LjA3NjQgMjkuMDIwM0M0My45MzkxIDI4Ljg3MDYgNDMuODQ4NCAyOC42ODQyIDQzLjgxNSAyOC40ODM5TDQzLjI3NCAyNS4yNjFDNDMuMjY2OCAyNS4yMTMzIDQzLjI0MjYgMjUuMTY5OSA0My4yMDU4IDI1LjEzODdDNDMuMTY5MSAyNS4xMDc0IDQzLjEyMjMgMjUuMDkwNSA0My4wNzQgMjUuMDkxMUgzOS44MkMzOS43NzE4IDI1LjA5MDUgMzkuNzI1IDI1LjEwNzQgMzkuNjg4MiAyNS4xMzg3QzM5LjY1MTUgMjUuMTY5OSAzOS42MjczIDI1LjIxMzMgMzkuNjIgMjUuMjYxTDM5LjA2NCAyOC41MzFDMzkuMDI4MiAyOC43MjgyIDM4LjkzNzMgMjguOTExMiAzOC44MDE3IDI5LjA1ODhDMzguNjY2MSAyOS4yMDY1IDM4LjQ5MTUgMjkuMzEyNiAzOC4yOTggMjkuMzY1QzM3LjE2MTYgMjkuNjYxNCAzNi4wNzM4IDMwLjExOTggMzUuMDY4IDMwLjcyNjFDMzQuODkyOSAzMC44Mjg4IDM0LjY5MiAzMC44Nzg5IDM0LjQ4OTEgMzAuODcwNkMzNC4yODYzIDMwLjg2MjMgMzQuMDkwMSAzMC43OTU3IDMzLjkyNCAzMC42NzlMMzEuMjU3IDI4Ljc3OTFDMzEuMjE3OSAyOC43NTAzIDMxLjE2OTYgMjguNzM2NyAzMS4xMjEyIDI4Ljc0MUMzMS4wNzI4IDI4Ljc0NTIgMzEuMDI3NiAyOC43NjY5IDMwLjk5NCAyOC44MDJMMjguNjk0IDMxLjEwMjFDMjguNjYwOCAzMS4xMzY5IDI4LjY0MDQgMzEuMTgyMiAyOC42MzY0IDMxLjIzMDJDMjguNjMyNCAzMS4yNzgzIDI4LjY0NSAzMS4zMjYxIDI4LjY3MiAzMS4zNjZMMzAuNTk2IDM0LjA2NTlDMzAuNzEzOCAzNC4yMjg3IDMwLjc4MTcgMzQuNDIyNCAzMC43OTEzIDM0LjYyMzFDMzAuODAwOCAzNC44MjM3IDMwLjc1MTggMzUuMDIyOCAzMC42NSAzNS4xOTZDMzAuMDU3MyAzNi4yMDk2IDI5LjYxMjUgMzcuMzAyNSAyOS4zMjkgMzguNDQxOUMyOS4yNzg3IDM4LjYzODYgMjkuMTcyMSAzOC44MTYzIDI5LjAyMjQgMzguOTUzNEMyOC44NzI3IDM5LjA5MDUgMjguNjg2MyAzOS4xODEyIDI4LjQ4NiAzOS4yMTQxTDI1LjI2MyAzOS43NTQ5QzI1LjIxNTMgMzkuNzYyMSAyNS4xNzE5IDM5Ljc4NjUgMjUuMTQwNiAzOS44MjMyQzI1LjEwOTQgMzkuODYgMjUuMDkyNSAzOS45MDY4IDI1LjA5MyAzOS45NTUxVjQzLjIwOEMyNS4wOTI1IDQzLjI1NjIgMjUuMTA5NCA0My4zMDMxIDI1LjE0MDYgNDMuMzM5OEMyNS4xNzE5IDQzLjM3NjYgMjUuMjE1MyA0My40MDA3IDI1LjI2MyA0My40MDhMMjguNTMzIDQzLjk2NDFDMjguNzMwNCA0My45OTk3IDI4LjkxMzYgNDQuMDkwNSAyOS4wNjE1IDQ0LjIyNjFDMjkuMjA5MyA0NC4zNjE3IDI5LjMxNTYgNDQuNTM2NCAyOS4zNjggNDQuNzNDMjkuNjY0IDQ1Ljg2NjMgMzAuMTIyIDQ2Ljk1NDEgMzAuNzI4IDQ3Ljk2QzMwLjgzMDkgNDguMTM1MiAzMC44ODEyIDQ4LjMzNjMgMzAuODczMSA0OC41MzkzQzMwLjg2NDkgNDguNzQyMyAzMC43OTg2IDQ4LjkzODYgMzAuNjgyIDQ5LjEwNUwyOC43ODIgNTEuNzcxQzI4Ljc1NSA1MS44MTA4IDI4Ljc0MjUgNTEuODU4NiAyOC43NDY3IDUxLjkwNjVDMjguNzUwOSA1MS45NTQ0IDI4Ljc3MTUgNTEuOTk5NCAyOC44MDUgNTIuMDMzOUwzMS4xMDUgNTQuMzM0QzMxLjEyNDMgNTQuMzUzNCAzMS4xNDcyIDU0LjM2ODcgMzEuMTcyNCA1NC4zNzkyQzMxLjE5NzYgNTQuMzg5NiAzMS4yMjQ3IDU0LjM5NTEgMzEuMjUyIDU0LjM5NUMzMS4yOTM0IDU0LjM5MjcgMzEuMzMzNCA1NC4zNzk2IDMxLjM2OCA1NC4zNTY5TDM0LjA3MyA1Mi40MzE5QzM0LjI0NzUgNTIuMzA1NSAzNC40NTc2IDUyLjIzODEgMzQuNjczIDUyLjIzOUMzNC44NTc3IDUyLjIzOTMgMzUuMDM5MiA1Mi4yODcxIDM1LjIgNTIuMzc3OUwzNS4xOTggNTIuMzc4OVpNMzMuNTIgNDEuNDk2MUMzMy41MjAyIDM5LjkxNzEgMzMuOTg4NiAzOC4zNzM2IDM0Ljg2NiAzNy4wNjA4QzM1Ljc0MzQgMzUuNzQ4IDM2Ljk5MDMgMzQuNzI0OCAzOC40NDkyIDM0LjEyMDZDMzkuOTA4IDMzLjUxNjQgNDEuNTEzMiAzMy4zNTg0IDQzLjA2MTkgMzMuNjY2NUM0NC42MTA1IDMzLjk3NDYgNDYuMDMzIDM0LjczNSA0Ny4xNDk2IDM1Ljg1MTZDNDguMjY2MSAzNi45NjgxIDQ5LjAyNjUgMzguMzkwNiA0OS4zMzQ2IDM5LjkzOTJDNDkuNjQyNyA0MS40ODc5IDQ5LjQ4NDYgNDMuMDkzMiA0OC44ODA1IDQ0LjU1MkM0OC4yNzYzIDQ2LjAxMDkgNDcuMjUzMSA0Ny4yNTc2IDQ1Ljk0MDMgNDguMTM1QzQ0LjYyNzUgNDkuMDEyNCA0My4wODQgNDkuNDgwOCA0MS41MDUgNDkuNDgxQzM5LjM4NzQgNDkuNDc5OSAzNy4zNTY5IDQ4LjYzODEgMzUuODU5NiA0Ny4xNDA2QzM0LjM2MjMgNDUuNjQzMiAzMy41MjA4IDQzLjYxMjcgMzMuNTIgNDEuNDk1MVY0MS40OTYxWk0zNS42MDcgNDEuNDk2MUMzNS42MDcgNDIuNjYzIDM1Ljk1MyA0My44MDM3IDM2LjYwMTMgNDQuNzczOUMzNy4yNDk2IDQ1Ljc0NDIgMzguMTcxMSA0Ni41MDAyIDM5LjI0OTIgNDYuOTQ2OEM0MC4zMjczIDQ3LjM5MzMgNDEuNTEzNiA0Ny41MTA0IDQyLjY1OCA0Ny4yODI3QzQzLjgwMjUgNDcuMDU1MSA0NC44NTM4IDQ2LjQ5MzEgNDUuNjc4OSA0NS42NjhDNDYuNTA0MSA0NC44NDI4IDQ3LjA2NiA0My43OTE1IDQ3LjI5MzcgNDIuNjQ3QzQ3LjUyMTMgNDEuNTAyNSA0Ny40MDQ1IDQwLjMxNjQgNDYuOTU3OSAzOS4yMzgzQzQ2LjUxMTQgMzguMTYwMiA0NS43NTUxIDM3LjIzODYgNDQuNzg0OSAzNi41OTAzQzQzLjgxNDYgMzUuOTQyIDQyLjY3MzkgMzUuNTk2IDQxLjUwNyAzNS41OTZDMzkuOTQyNCAzNS41OTYgMzguNDQxOSAzNi4yMTc1IDM3LjMzNTQgMzcuMzIzN0MzNi4yMjkgMzguNDMgMzUuNjA3MyAzOS45MzA1IDM1LjYwNyA0MS40OTUxVjQxLjQ5NjFaIiBmaWxsPSIjNDA5NzVGIi8+Cjwvc3ZnPgo=");


/***/ }),

/***/ "./src/assets/feature/smart.svg":
/*!**************************************!*\
  !*** ./src/assets/feature/smart.svg ***!
  \**************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgSmart; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path, _path2, _path3, _path4;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function SvgSmart(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 82,
    height: 82,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    opacity: 0.102,
    d: "M54 0H28C12.536 0 0 12.536 0 28v26c0 15.464 12.536 28 28 28h26c15.464 0 28-12.536 28-28V28C82 12.536 69.464 0 54 0z",
    fill: "#FF4361"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M49.229 51.456a6.032 6.032 0 00-.324-2.914 7.301 7.301 0 00-2.851-2.687c-.357-.235-.585-.378-.819-.525-1.537-.969-3.152-1.987-3.734-3.42-.58 1.432-2.2 2.45-3.732 3.419-.308.195-.611.385-.821.523a7.247 7.247 0 00-2.845 2.709 6.074 6.074 0 00-.328 2.893l15.454.002zm1.467-3.741a8.974 8.974 0 01.43 4.733.988.988 0 01-.989.986H32.862a.985.985 0 01-.981-.9 9.16 9.16 0 01.429-4.789c.587-1.284 1.666-2.294 3.557-3.537.327-.215.589-.381.851-.545 1.468-.926 3.029-1.911 3.029-2.9 0-.989-1.561-1.971-3.029-2.9-.261-.164-.523-.33-.851-.545-1.963-1.29-3.055-2.391-3.626-3.772a10.163 10.163 0 01-.365-4.947.99.99 0 01.988-.978h17.27a.985.985 0 01.981.892 10.3 10.3 0 01-.357 5.028c-.57 1.38-1.663 2.482-3.626 3.772-.333.219-.59.38-.852.546-1.467.925-3.029 1.91-3.029 2.9s1.563 1.971 3.031 2.9c.335.211.67.423.849.541 1.893 1.244 2.976 2.233 3.564 3.508l.001.007zm-9.2-8.1c.581-1.431 2.2-2.449 3.733-3.418.307-.194.615-.387.82-.522a6.933 6.933 0 002.884-2.876c.34-1.03.441-2.125.293-3.2H33.77a7.095 7.095 0 00.294 3.2 6.935 6.935 0 002.883 2.876c.21.137.513.329.821.522 1.536.968 3.151 1.987 3.732 3.418h-.004z",
    fill: "#333"
  })), _path3 || (_path3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M30.773 24h21.45a2.765 2.765 0 011.955.814 2.772 2.772 0 01.813 1.96 2.768 2.768 0 01-.816 1.958 2.767 2.767 0 01-1.96.815H30.773a2.765 2.765 0 01-1.959-.815 2.77 2.77 0 01-.815-1.958 2.767 2.767 0 01.813-1.956 2.761 2.761 0 011.955-.814l.006-.004zm21.454 1.978H30.773a.8.8 0 00-.562.231.8.8 0 000 1.122.8.8 0 00.562.234h21.45a.791.791 0 00.792-.795.795.795 0 00-.798-.794l.01.002zM30.773 51.456h21.45a2.768 2.768 0 011.96.814 2.769 2.769 0 01.816 1.957 2.78 2.78 0 01-2.773 2.774H30.773a2.765 2.765 0 01-1.959-.815 2.765 2.765 0 01-.813-1.956 2.77 2.77 0 01.815-1.957 2.77 2.77 0 011.959-.814l-.002-.003zm21.454 1.978H30.773a.8.8 0 00-.733.492.8.8 0 00.735 1.101h21.448a.8.8 0 00.569-1.36.793.793 0 00-.561-.235l-.004.002z",
    fill: "#333"
  })), _path4 || (_path4 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M30.774 57a2.77 2.77 0 01-1.96-.814 2.763 2.763 0 01.901-4.516c.336-.14.697-.212 1.061-.212H31.8a7.634 7.634 0 01.509-3.712c.587-1.283 1.666-2.294 3.557-3.537.327-.215.589-.381.85-.544 1.468-.926 3.029-1.912 3.029-2.9s-1.562-1.971-3.029-2.9a40 40 0 01-.85-.544c-1.963-1.29-3.055-2.39-3.626-3.772a8.682 8.682 0 01-.443-4h-1.025a2.767 2.767 0 01-1.96-.814 2.758 2.758 0 010-3.915 2.758 2.758 0 011.956-.814h21.453a2.761 2.761 0 011.956.814 2.763 2.763 0 010 3.918 2.766 2.766 0 01-1.96.814H51.2a8.683 8.683 0 01-.442 4c-.571 1.381-1.663 2.482-3.626 3.772-.332.22-.59.38-.851.545-1.467.925-3.029 1.911-3.029 2.9 0 .989 1.563 1.97 3.032 2.9.334.21.67.423.849.541 1.893 1.245 2.976 2.234 3.564 3.508a7.567 7.567 0 01.5 3.74h1.025c.735 0 1.44.294 1.96.814a2.766 2.766 0 01.002 3.918c-.52.52-1.225.813-1.96.814L30.774 57zm0-1.979h21.453a.8.8 0 00.74-1.098.793.793 0 00-.732-.493H30.774a.8.8 0 00-.734.492.8.8 0 00.174.867c.149.148.35.232.56.232zm6.995-9.695a57.62 57.62 0 00-.821.523 7.248 7.248 0 00-2.845 2.71 6.062 6.062 0 00-.328 2.893H49.23a6.02 6.02 0 00-.325-2.914 7.289 7.289 0 00-2.851-2.687c-.357-.235-.585-.378-.818-.526-1.538-.969-3.153-1.987-3.734-3.419-.583 1.433-2.202 2.452-3.733 3.42zm-3.7-12.527a6.942 6.942 0 002.884 2.876c.21.137.513.329.821.522 1.536.969 3.151 1.987 3.731 3.418.581-1.431 2.2-2.449 3.732-3.418.307-.193.615-.387.82-.522a6.934 6.934 0 002.884-2.876c.34-1.03.44-2.125.293-3.2H33.771a7.108 7.108 0 00.293 3.201h.005zm-3.853-6.591a.8.8 0 000 1.123.8.8 0 00.563.234h21.453a.793.793 0 00.795-.796.794.794 0 00-.796-.794H30.774a.8.8 0 00-.563.233h.005z",
    fill: "#F55767"
  })));
}
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODIiIGhlaWdodD0iODIiIHZpZXdCb3g9IjAgMCA4MiA4MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggb3BhY2l0eT0iMC4xMDIiIGQ9Ik01NCAwSDI4QzEyLjUzNiAwIDAgMTIuNTM2IDAgMjhWNTRDMCA2OS40NjQgMTIuNTM2IDgyIDI4IDgySDU0QzY5LjQ2NCA4MiA4MiA2OS40NjQgODIgNTRWMjhDODIgMTIuNTM2IDY5LjQ2NCAwIDU0IDBaIiBmaWxsPSIjRkY0MzYxIi8+CjxwYXRoIGQ9Ik00OS4yMjkgNTEuNDU2QzQ5LjM2MjMgNTAuNDcyOCA0OS4yNTExIDQ5LjQ3MTkgNDguOTA1MSA0OC41NDJDNDguMjE3MyA0Ny40MDMzIDQ3LjIzMTQgNDYuNDc0MSA0Ni4wNTQgNDUuODU0OUM0NS42OTcgNDUuNjE5OSA0NS40NjkgNDUuNDc3IDQ1LjIzNSA0NS4zM0M0My42OTggNDQuMzYxIDQyLjA4MzEgNDMuMzQyOSA0MS41MDExIDQxLjkxMDlDNDAuOTIwMSA0My4zNDE5IDM5LjMwMSA0NC4zNjA5IDM3Ljc2OSA0NS4zMjg5QzM3LjQ2MSA0NS41MjM5IDM3LjE1OCA0NS43MTQgMzYuOTQ4IDQ1Ljg1MkMzNS43Njg0IDQ2LjQ3NTggMzQuNzgzOSA0Ny40MTMyIDM0LjEwMzEgNDguNTYwOUMzMy43NjA4IDQ5LjQ4NDQgMzMuNjQ4MiA1MC40NzczIDMzLjc3NSA1MS40NTM5TDQ5LjIyOSA1MS40NTZaTTUwLjY5NiA0Ny43MTVDNTEuMjYyMSA0OS4yMjUzIDUxLjQxMDcgNTAuODYwMyA1MS4xMjYxIDUyLjQ0OEM1MS4xMjU1IDUyLjcwOTggNTEuMDIxIDUyLjk2MDcgNTAuODM1NiA1My4xNDU2QzUwLjY1MDIgNTMuMzMwNSA1MC4zOTg5IDUzLjQzNDIgNTAuMTM3IDUzLjQzNEgzMi44NjJDMzIuNjE1NiA1My40MzM5IDMyLjM3ODEgNTMuMzQxNCAzMi4xOTY1IDUzLjE3NDhDMzIuMDE0OSA1My4wMDgyIDMxLjkwMjMgNTIuNzc5NSAzMS44ODEgNTIuNTM0QzMxLjU5NSA1MC45Mjc5IDMxLjc0MzEgNDkuMjc0NiAzMi4zMSA0Ny43NDVDMzIuODk3IDQ2LjQ2MSAzMy45NzYgNDUuNDUwOSAzNS44NjcgNDQuMjA3OUMzNi4xOTQgNDMuOTkyOSAzNi40NTYgNDMuODI3IDM2LjcxOCA0My42NjNDMzguMTg2IDQyLjczNyAzOS43NDcgNDEuNzUyIDM5Ljc0NyA0MC43NjNDMzkuNzQ3IDM5Ljc3NCAzOC4xODYgMzguNzkxOSAzNi43MTggMzcuODYyOUMzNi40NTcgMzcuNjk4OSAzNi4xOTUgMzcuNTMzIDM1Ljg2NyAzNy4zMThDMzMuOTA0IDM2LjAyOCAzMi44MTIxIDM0LjkyNyAzMi4yNDExIDMzLjU0NkMzMS43MTI3IDMxLjk1MjQgMzEuNTg3MyAzMC4yNTI4IDMxLjg3NjEgMjguNTk5QzMxLjg3OTIgMjguMzM4OCAzMS45ODQ2IDI4LjA5MDQgMzIuMTY5NSAyNy45MDc0QzMyLjM1NDQgMjcuNzI0NCAzMi42MDM5IDI3LjYyMTUgMzIuODY0IDI3LjYyMUg1MC4xMzQxQzUwLjM3OTMgMjcuNjIwOSA1MC42MTU3IDI3LjcxMjIgNTAuNzk3MSAyNy44NzcyQzUwLjk3ODUgMjguMDQyMiA1MS4wOTE5IDI4LjI2ODkgNTEuMTE1IDI4LjUxM0M1MS40MTQzIDMwLjE5MjcgNTEuMjkxNiAzMS45MjA0IDUwLjc1OCAzMy41NDFDNTAuMTg4IDM0LjkyMSA0OS4wOTUgMzYuMDIzIDQ3LjEzMiAzNy4zMTNDNDYuNzk5IDM3LjUzMiA0Ni41NDIxIDM3LjY5MzkgNDYuMjgwMSAzNy44NTg5QzQ0LjgxMzEgMzguNzgzOSA0My4yNTExIDM5Ljc2OSA0My4yNTExIDQwLjc1OUM0My4yNTExIDQxLjc0OSA0NC44MTQgNDIuNzMgNDYuMjgyIDQzLjY1OUM0Ni42MTcgNDMuODcgNDYuOTUyIDQ0LjA4MiA0Ny4xMzEgNDQuMkM0OS4wMjQgNDUuNDQ0IDUwLjEwNyA0Ni40MzI5IDUwLjY5NSA0Ny43MDc5TDUwLjY5NiA0Ny43MTVaTTQxLjQ5NjEgMzkuNjE1QzQyLjA3NzEgMzguMTg0IDQzLjY5NiAzNy4xNjYgNDUuMjI5IDM2LjE5N0M0NS41MzYgMzYuMDAzIDQ1Ljg0NCAzNS44MSA0Ni4wNDkgMzUuNjc1QzQ3LjI3NjYgMzUuMDI2NyA0OC4yODEzIDM0LjAyNDcgNDguOTMzIDMyLjc5OUM0OS4yNzM3IDMxLjc2ODYgNDkuMzc0IDMwLjY3NCA0OS4yMjYgMjkuNTk5SDMzLjc3QzMzLjYyMiAzMC42NzQxIDMzLjcyMjYgMzEuNzY4OCAzNC4wNjQxIDMyLjc5OUMzNC43MTU2IDM0LjAyNDUgMzUuNzE5OSAzNS4wMjY0IDM2Ljk0NyAzNS42NzVDMzcuMTU3IDM1LjgxMiAzNy40NiAzNi4wMDQgMzcuNzY4IDM2LjE5N0MzOS4zMDQgMzcuMTY1IDQwLjkxOSAzOC4xODQgNDEuNSAzOS42MTVINDEuNDk2MVoiIGZpbGw9IiMzMzMzMzMiLz4KPHBhdGggZD0iTTMwLjc3MyAyNEg1Mi4yMjNDNTIuNTg2NCAyNC4wMDA1IDUyLjk0NjEgMjQuMDcyNiA1My4yODE2IDI0LjIxMjJDNTMuNjE3MSAyNC4zNTE5IDUzLjkyMTcgMjQuNTU2NCA1NC4xNzggMjQuODE0QzU0LjQzNTYgMjUuMDcxMyA1NC42NCAyNS4zNzY4IDU0Ljc3OTUgMjUuNzEzMUM1NC45MTkgMjYuMDQ5NCA1NC45OTA5IDI2LjQwOTkgNTQuOTkxIDI2Ljc3NEM1NC45OTA0IDI3LjEzOCA1NC45MTggMjcuNDk4MyA1NC43NzggMjcuODM0MkM1NC42Mzc5IDI4LjE3MDIgNTQuNDMzIDI4LjQ3NTMgNTQuMTc1IDI4LjczMkM1My45MTggMjguOTkwMiA1My42MTI3IDI5LjE5NTEgNTMuMjc2MyAyOS4zMzVDNTIuOTQgMjkuNDc0OSA1Mi41NzkzIDI5LjU0NjkgNTIuMjE1IDI5LjU0N0gzMC43NzNDMzAuNDA4OSAyOS41NDY4IDMwLjA0ODUgMjkuNDc0NyAyOS43MTIzIDI5LjMzNDhDMjkuMzc2MSAyOS4xOTUgMjkuMDcwOCAyOC45OTAxIDI4LjgxNCAyOC43MzJDMjguNTU2MiAyOC40NzUyIDI4LjM1MTUgMjguMTcwMSAyOC4yMTE2IDI3LjgzNDFDMjguMDcxOCAyNy40OTgxIDI3Ljk5OTUgMjcuMTM3OSAyNy45OTkgMjYuNzc0QzI3Ljk5OTQgMjYuNDEwNSAyOC4wNzE0IDI2LjA1MDcgMjguMjEwOSAyNS43MTUxQzI4LjM1MDQgMjUuMzc5NSAyOC41NTQ2IDI1LjA3NDYgMjguODEyIDI0LjgxOEMyOS4wNjgzIDI0LjU2MDMgMjkuMzcyOSAyNC4zNTU4IDI5LjcwODQgMjQuMjE2MUMzMC4wNDM5IDI0LjA3NjQgMzAuNDAzNiAyNC4wMDQzIDMwLjc2NyAyNC4wMDRMMzAuNzczIDI0Wk01Mi4yMjcgMjUuOTc4SDMwLjc3M0MzMC41NjI2IDI1Ljk3ODEgMzAuMzYwNyAyNi4wNjExIDMwLjIxMSAyNi4yMDlDMzAuMDYzMyAyNi4zNTg0IDI5Ljk4MDMgMjYuNTU5OSAyOS45OCAyNi43N0MyOS45Nzk3IDI2Ljg3NDEgMzAgMjYuOTc3MiAzMC4wMzk3IDI3LjA3MzVDMzAuMDc5MyAyNy4xNjk3IDMwLjEzNzUgMjcuMjU3MyAzMC4yMTEgMjcuMzMxQzMwLjM2MDIgMjcuNDggMzAuNTYyMiAyNy41NjQxIDMwLjc3MyAyNy41NjVINTIuMjIzQzUyLjMyNzMgMjcuNTY0OSA1Mi40MzA2IDI3LjU0NDEgNTIuNTI2OSAyNy41MDM5QzUyLjYyMzEgMjcuNDYzOCA1Mi43MTA1IDI3LjQwNSA1Mi43ODQgMjcuMzMxQzUyLjg1NzUgMjcuMjU3MyA1Mi45MTU3IDI3LjE2OTcgNTIuOTU1NCAyNy4wNzM1QzUyLjk5NSAyNi45NzcyIDUzLjAxNTMgMjYuODc0MSA1My4wMTUgMjYuNzdDNTMuMDE0NiAyNi42NjU2IDUyLjk5MzcgMjYuNTYyNCA1Mi45NTM0IDI2LjQ2NjFDNTIuOTEzIDI2LjM2OTggNTIuODU0MSAyNi4yODI1IDUyLjc4IDI2LjIwOUM1Mi42MzA0IDI2LjA2MDEgNTIuNDI4IDI1Ljk3NjMgNTIuMjE3IDI1Ljk3Nkw1Mi4yMjcgMjUuOTc4WiIgZmlsbD0iIzMzMzMzMyIvPgo8cGF0aCBkPSJNMzAuNzczIDUxLjQ1NjFINTIuMjIzQzUyLjU4NzIgNTEuNDU2MiA1Mi45NDc4IDUxLjUyODEgNTMuMjg0MSA1MS42Njc4QzUzLjYyMDQgNTEuODA3NSA1My45MjU5IDUyLjAxMjEgNTQuMTgzIDUyLjI3MDFDNTQuNDQwOSA1Mi41MjY3IDU0LjY0NTggNTIuODMxNiA1NC43ODU4IDUzLjE2NzRDNTQuOTI1OCA1My41MDMyIDU0Ljk5ODIgNTMuODYzMiA1NC45OTkgNTQuMjI3MUM1NC45OTc0IDU0Ljk2MjEgNTQuNzA0OCA1NS42NjY2IDU0LjE4NTEgNTYuMTg2NUM1My42NjU1IDU2LjcwNjMgNTIuOTYxMSA1Ni45OTkyIDUyLjIyNiA1Ny4wMDFIMzAuNzczQzMwLjQwODkgNTcuMDAwOCAzMC4wNDg1IDU2LjkyODcgMjkuNzEyMyA1Ni43ODg4QzI5LjM3NjEgNTYuNjQ5IDI5LjA3MDggNTYuNDQ0MSAyOC44MTQgNTYuMTg2QzI4LjU1NjYgNTUuOTI5NCAyOC4zNTIzIDU1LjYyNDYgMjguMjEyOCA1NS4yODlDMjguMDczMyA1NC45NTMzIDI4LjAwMTQgNTQuNTkzNSAyOC4wMDEgNTQuMjNDMjguMDAxNyA1My44NjYzIDI4LjA3NCA1My41MDYzIDI4LjIxMzggNTMuMTcwNUMyOC4zNTM2IDUyLjgzNDcgMjguNTU4MyA1Mi41Mjk3IDI4LjgxNiA1Mi4yNzNDMjkuMDczIDUyLjAxNTMgMjkuMzc4MyA1MS44MTA3IDI5LjcxNDUgNTEuNjcxQzMwLjA1MDYgNTEuNTMxMyAzMC40MTEgNTEuNDU5MyAzMC43NzUgNTEuNDU5TDMwLjc3MyA1MS40NTYxWk01Mi4yMjcgNTMuNDM0MUgzMC43NzNDMzAuNTYyIDUzLjQzNTIgMzAuMzYgNTMuNTE5NyAzMC4yMTEgNTMuNjY5QzMwLjEzNzUgNTMuNzQyNSAzMC4wNzkyIDUzLjgyOTkgMzAuMDM5NiA1My45MjZDMjkuOTk5OSA1NC4wMjIxIDI5Ljk3OTYgNTQuMTI1MSAyOS45OCA1NC4yMjlDMjkuOTgwMSA1NC40NDA0IDMwLjA2MzkgNTQuNjQzMiAzMC4yMTMgNTQuNzkzMUMzMC4zNjIyIDU0Ljk0MjEgMzAuNTY0MiA1NS4wMjYxIDMwLjc3NSA1NS4wMjdINTIuMjIzQzUyLjMyODEgNTUuMDI3IDUyLjQzMjEgNTUuMDA2NCA1Mi41MjkyIDU0Ljk2NjJDNTIuNjI2MiA1NC45MjYgNTIuNzE0NCA1NC44NjcgNTIuNzg4NyA1NC43OTI3QzUyLjg2MyA1NC43MTg0IDUyLjkyMTkgNTQuNjMwMyA1Mi45NjIxIDU0LjUzMzJDNTMuMDAyMyA1NC40MzYxIDUzLjAyMyA1NC4zMzIxIDUzLjAyMyA1NC4yMjcxQzUzLjAyMzQgNTQuMTIzMSA1My4wMDMxIDU0LjAyMDEgNTIuOTYzNSA1My45MjRDNTIuOTIzOSA1My44Mjc4IDUyLjg2NTUgNTMuNzQwNSA1Mi43OTIgNTMuNjY3MUM1Mi43MTg1IDUzLjU5MjkgNTIuNjMxMiA1My41MzM5IDUyLjUzNDkgNTMuNDkzNkM1Mi40Mzg2IDUzLjQ1MzMgNTIuMzM1NCA1My40MzI0IDUyLjIzMSA1My40MzJMNTIuMjI3IDUzLjQzNDFaIiBmaWxsPSIjMzMzMzMzIi8+CjxwYXRoIGQ9Ik0zMC43NzQgNTdDMzAuNDA5OCA1Ni45OTk4IDMwLjA0OTIgNTYuOTI3OCAyOS43MTI5IDU2Ljc4ODFDMjkuMzc2NiA1Ni42NDg0IDI5LjA3MTEgNTYuNDQzOSAyOC44MTQgNTYuMTg2QzI4LjU1NjUgNTUuOTI5NSAyOC4zNTIxIDU1LjYyNDcgMjguMjEyNiA1NS4yODkxQzI4LjA3MzEgNTQuOTUzNCAyOC4wMDEyIDU0LjU5MzUgMjguMDAxIDU0LjIzQzI4LjAwMTMgNTMuODY2IDI4LjA3MzUgNTMuNTA1NyAyOC4yMTMzIDUzLjE2OTdDMjguMzUzMiA1Mi44MzM3IDI4LjU1OCA1Mi41Mjg3IDI4LjgxNiA1Mi4yNzJDMjkuMDczMiA1Mi4wMTQyIDI5LjM3ODcgNTEuODA5NiAyOS43MTUgNTEuNjY5OUMzMC4wNTEzIDUxLjUzMDMgMzAuNDExOCA1MS40NTgzIDMwLjc3NiA1MS40NThIMzEuOEMzMS42NTg3IDUwLjE5NzYgMzEuODMzNiA0OC45MjE5IDMyLjMwOSA0Ny43NDYxQzMyLjg5NiA0Ni40NjMxIDMzLjk3NSA0NS40NTIgMzUuODY2IDQ0LjIwOUMzNi4xOTMgNDMuOTk0IDM2LjQ1NSA0My44MjggMzYuNzE2IDQzLjY2NUMzOC4xODQgNDIuNzM5IDM5Ljc0NSA0MS43NTI5IDM5Ljc0NSA0MC43NjQ5QzM5Ljc0NSAzOS43NzY5IDM4LjE4MyAzOC43OTQgMzYuNzE2IDM3Ljg2NUMzNi40NTQgMzcuNzAxIDM2LjE5MiAzNy41MzYgMzUuODY2IDM3LjMyMUMzMy45MDMgMzYuMDMxIDMyLjgxMSAzNC45MzAxIDMyLjI0IDMzLjU0OTFDMzEuNzgxMSAzMi4yNjg4IDMxLjYyOTMgMzAuODk4NyAzMS43OTcgMjkuNTQ5MUgzMC43NzJDMzAuNDA3OCAyOS41NDkxIDMwLjA0NzEgMjkuNDc3MSAyOS43MTA4IDI5LjMzNzRDMjkuMzc0NCAyOS4xOTc3IDI5LjA2OSAyOC45OTMxIDI4LjgxMiAyOC43MzUxQzI4LjU1MzkgMjguNDc4NiAyOC4zNDkxIDI4LjE3MzYgMjguMjA5NCAyNy44Mzc2QzI4LjA2OTYgMjcuNTAxNyAyNy45OTc3IDI3LjE0MTQgMjcuOTk3NyAyNi43Nzc2QzI3Ljk5NzcgMjYuNDEzNyAyOC4wNjk2IDI2LjA1MzUgMjguMjA5NCAyNS43MTc1QzI4LjM0OTEgMjUuMzgxNiAyOC41NTM5IDI1LjA3NjYgMjguODEyIDI0LjgyMDFDMjkuMDY4MyAyNC41NjIyIDI5LjM3MyAyNC4zNTc1IDI5LjcwODcgMjQuMjE3OEMzMC4wNDQ0IDI0LjA3ODEgMzAuNDA0NCAyNC4wMDYyIDMwLjc2OCAyNC4wMDYxSDUyLjIyMUM1Mi41ODQ1IDI0LjAwNjMgNTIuOTQ0NSAyNC4wNzgzIDUzLjI4MDIgMjQuMjE4QzUzLjYxNTggMjQuMzU3NyA1My45MjA2IDI0LjU2MjMgNTQuMTc3IDI0LjgyMDFDNTQuNDM1MSAyNS4wNzY4IDU0LjY0IDI1LjM4MjEgNTQuNzc5OCAyNS43MTgzQzU0LjkxOTUgMjYuMDU0NSA1NC45OTE1IDI2LjQxNSA1NC45OTE1IDI2Ljc3OTFDNTQuOTkxNSAyNy4xNDMxIDU0LjkxOTUgMjcuNTAzNyA1NC43Nzk4IDI3LjgzOThDNTQuNjQgMjguMTc2IDU0LjQzNTEgMjguNDgxMyA1NC4xNzcgMjguNzM4QzUzLjkxOTkgMjguOTk2MSA1My42MTQ1IDI5LjIwMDkgNTMuMjc4MSAyOS4zNDA2QzUyLjk0MTggMjkuNDgwMyA1Mi41ODEyIDI5LjU1MiA1Mi4yMTcgMjkuNTUySDUxLjJDNTEuMzY4IDMwLjkwMTYgNTEuMjE2NSAzMi4yNzE3IDUwLjc1OCAzMy41NTJDNTAuMTg3IDM0LjkzMyA0OS4wOTUgMzYuMDM0IDQ3LjEzMiAzNy4zMjRDNDYuOCAzNy41NDQgNDYuNTQyIDM3LjcwNDkgNDYuMjgxIDM3Ljg2ODlDNDQuODE0IDM4Ljc5MzkgNDMuMjUyIDM5Ljc4IDQzLjI1MiA0MC43NjlDNDMuMjUyIDQxLjc1OCA0NC44MTUgNDIuNzM5OSA0Ni4yODQgNDMuNjY4OUM0Ni42MTggNDMuODc4OSA0Ni45NTQgNDQuMDkyIDQ3LjEzMyA0NC4yMUM0OS4wMjYgNDUuNDU1IDUwLjEwOSA0Ni40NDQgNTAuNjk3IDQ3LjcxOEM1MS4xNzY4IDQ4LjkwMjUgNTEuMzQ4OCA1MC4xODkxIDUxLjE5NyA1MS40NThINTIuMjIyQzUyLjk1NzQgNTEuNDU4NyA1My42NjI0IDUxLjc1MTUgNTQuMTgyIDUyLjI3MkM1NC40NDAxIDUyLjUyODYgNTQuNjQ1IDUyLjgzMzcgNTQuNzg1IDUzLjE2OTdDNTQuOTI1MSA1My41MDU3IDU0Ljk5NzQgNTMuODY2IDU0Ljk5OCA1NC4yM0M1NC45OTY2IDU0Ljk2NTMgNTQuNzA0IDU1LjY3IDU0LjE4NCA1Ni4xODk5QzUzLjY2NDEgNTYuNzA5OSA1Mi45NTkzIDU3LjAwMjYgNTIuMjI0IDU3LjAwMzlMMzAuNzc0IDU3Wk0zMC43NzQgNTUuMDIxSDUyLjIyN0M1Mi40MzgzIDU1LjAyMSA1Mi42NDEgNTQuOTM3NSA1Mi43OTA5IDU0Ljc4ODZDNTIuOTQwOCA1NC42Mzk2IDUzLjAyNTcgNTQuNDM3NCA1My4wMjcgNTQuMjI2MUM1My4wMjc0IDU0LjEyMiA1My4wMDcyIDU0LjAxODkgNTIuOTY3OCA1My45MjI2QzUyLjkyODMgNTMuODI2MyA1Mi44NzAzIDUzLjczODkgNTIuNzk3IDUzLjY2NUM1Mi43MjM0IDUzLjU5MDggNTIuNjM1OCA1My41MzE4IDUyLjUzOTQgNTMuNDkxNUM1Mi40NDMgNTMuNDUxMSA1Mi4zMzk1IDUzLjQzMDIgNTIuMjM1IDUzLjQyOTlIMzAuNzc0QzMwLjU2MyA1My40MzExIDMwLjM2MSA1My41MTU3IDMwLjIxMiA1My42NjVDMzAuMTM4NCA1My43Mzg3IDMwLjA4MDEgNTMuODI2MSAzMC4wNDA0IDUzLjkyMjRDMzAuMDAwOCA1NC4wMTg2IDI5Ljk4MDUgNTQuMTIxOSAyOS45ODEgNTQuMjI2MUMyOS45ODEzIDU0LjQzNzEgMzAuMDY1MSA1NC42Mzk1IDMwLjIxNCA1NC43ODkxQzMwLjM2MjYgNTQuOTM3NCAzMC41NjQgNTUuMDIwOCAzMC43NzQgNTUuMDIxWk0zNy43NjkgNDUuMzI1OUMzNy40NjEgNDUuNTE5OSAzNy4xNTggNDUuNzExMSAzNi45NDggNDUuODQ5MUMzNS43NjgyIDQ2LjQ3MzMgMzQuNzgzNyA0Ny40MTExIDM0LjEwMyA0OC41NTkxQzMzLjc2MDMgNDkuNDgyNSAzMy42NDc3IDUwLjQ3NTIgMzMuNzc1IDUxLjQ1MTlINDkuMjNDNDkuMzYzNCA1MC40Njg2IDQ5LjI1MTggNDkuNDY3OCA0OC45MDUgNDguNTM4MUM0OC4yMTc3IDQ3LjM5OSA0Ny4yMzE3IDQ2LjQ2OTggNDYuMDU0IDQ1Ljg1MTFDNDUuNjk3IDQ1LjYxNjEgNDUuNDY5IDQ1LjQ3MyA0NS4yMzYgNDUuMzI1QzQzLjY5OCA0NC4zNTYgNDIuMDgzIDQzLjMzOCA0MS41MDIgNDEuOTA2QzQwLjkxOSA0My4zMzkgMzkuMyA0NC4zNTc5IDM3Ljc2OSA0NS4zMjU5Wk0zNC4wNjkgMzIuNzk5MUMzNC43MjEyIDM0LjAyNDUgMzUuNzI1NyAzNS4wMjYzIDM2Ljk1MyAzNS42NzVDMzcuMTYzIDM1LjgxMiAzNy40NjYgMzYuMDA0IDM3Ljc3NCAzNi4xOTdDMzkuMzEgMzcuMTY2IDQwLjkyNSAzOC4xODQgNDEuNTA1IDM5LjYxNUM0Mi4wODYgMzguMTg0IDQzLjcwNSAzNy4xNjYgNDUuMjM3IDM2LjE5N0M0NS41NDQgMzYuMDA0IDQ1Ljg1MiAzNS44MSA0Ni4wNTcgMzUuNjc1QzQ3LjI4NDUgMzUuMDI2NyA0OC4yODkyIDM0LjAyNDggNDguOTQxIDMyLjc5OTFDNDkuMjgxMSAzMS43Njg3IDQ5LjM4MTQgMzAuNjc0MiA0OS4yMzQgMjkuNTk5MUgzMy43NzFDMzMuNjIzIDMwLjY3NDUgMzMuNzIzMiAzMS43Njk0IDM0LjA2NCAzMi44TDM0LjA2OSAzMi43OTkxWk0zMC4yMTYgMjYuMjA4QzMwLjA2ODUgMjYuMzU3NyAyOS45ODU4IDI2LjU1OTQgMjkuOTg1OCAyNi43Njk1QzI5Ljk4NTggMjYuOTc5NyAzMC4wNjg1IDI3LjE4MTQgMzAuMjE2IDI3LjMzMTFDMzAuMzY1NCAyNy40ODAzIDMwLjU2NzggMjcuNTY0MyAzMC43NzkgMjcuNTY0OUg1Mi4yMzJDNTIuMzM2NCAyNy41NjQ5IDUyLjQzOTkgMjcuNTQ0MyA1Mi41MzYzIDI3LjUwNDJDNTIuNjMyOCAyNy40NjQgNTIuNzIwMyAyNy40MDUyIDUyLjc5NCAyNy4zMzExQzUyLjg2NzcgMjcuMjU3MyA1Mi45MjYyIDI3LjE2OTggNTIuOTY2MSAyNy4wNzM1QzUzLjAwNiAyNi45NzcxIDUzLjAyNjYgMjYuODczOCA1My4wMjY2IDI2Ljc2OTVDNTMuMDI2NiAyNi42NjUyIDUzLjAwNiAyNi41NjE5IDUyLjk2NjEgMjYuNDY1NkM1Mi45MjYyIDI2LjM2OTIgNTIuODY3NyAyNi4yODE3IDUyLjc5NCAyNi4yMDhDNTIuNjQ0NCAyNi4wNTkxIDUyLjQ0MiAyNS45NzU1IDUyLjIzMSAyNS45NzUxSDMwLjc3NEMzMC41NjI5IDI1Ljk3NTUgMzAuMzYwNiAyNi4wNTkxIDMwLjIxMSAyNi4yMDhIMzAuMjE2WiIgZmlsbD0iI0Y1NTc2NyIvPgo8L3N2Zz4K");


/***/ }),

/***/ "./src/assets/feature/winner.svg":
/*!***************************************!*\
  !*** ./src/assets/feature/winner.svg ***!
  \***************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgWinner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path, _path2;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function SvgWinner(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 82,
    height: 82,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M54 0H28C12.536 0 0 12.536 0 28v26c0 15.464 12.536 28 28 28h26c15.464 0 28-12.536 28-28V28C82 12.536 69.464 0 54 0z",
    fill: "#EAF9FF"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M30.653 61a.923.923 0 01-.919-.926v-2.19a2.77 2.77 0 012.757-2.778H34.2v-4.247a.923.923 0 01.7-.9h.012a4.226 4.226 0 003.241-4.524 11.606 11.606 0 01-5.322-5.059 19.688 19.688 0 01-1.24-2.506 14.975 14.975 0 01-7.555-10.694 2.88 2.88 0 012.835-3.335h2.775v-.874a1.956 1.956 0 011.947-1.962h18.814a1.957 1.957 0 011.948 1.962v.874h2.774a2.878 2.878 0 012.835 3.335 14.975 14.975 0 01-7.553 10.694c-.354.864-.77 1.701-1.242 2.506a11.68 11.68 0 01-5.233 5.021 4.223 4.223 0 003.238 4.562h.011a.923.923 0 01.707.9v4.247h1.7a2.77 2.77 0 012.758 2.777v2.191a.923.923 0 01-.92.926H30.653zm.92-3.118v1.266h18.943v-1.266a.923.923 0 00-.919-.925H32.491a.923.923 0 00-.919.924v.001zm4.461-2.777h10.021v-3.321H36.034v3.321zm3.03-5.99a6.181 6.181 0 01-.62.817h5.209a6.118 6.118 0 01-1.579-4.008A7.096 7.096 0 0141 46c-.33 0-.66-.023-.988-.068a6.053 6.053 0 01-.948 3.182v.001zm-7.58-26.153v4.43a24.067 24.067 0 002.927 12.034c1.8 3.05 4.139 4.729 6.589 4.729s4.79-1.678 6.589-4.729a24.065 24.065 0 002.927-12.035v-4.43a.109.109 0 00-.068-.102.11.11 0 00-.042-.008H31.593a.11.11 0 00-.109.11zm20.87 4.43a29.28 29.28 0 01-.98 7.623 13.13 13.13 0 004.774-8.141 1 1 0 00-.229-.817 1.035 1.035 0 00-.792-.37h-2.774l.001 1.704zm-26.275-1.336a1 1 0 00-.229.818 13.13 13.13 0 004.775 8.14 29.28 29.28 0 01-.979-7.623v-1.7h-2.775a1.035 1.035 0 00-.791.364h-.001zm11.472 11.056a.927.927 0 01-.365-.905l.473-2.783-2.007-1.97a.93.93 0 01.51-1.58l2.773-.406 1.24-2.531a.915.915 0 011.649 0l1.239 2.531 2.773.406a.927.927 0 01.509 1.58l-2.006 1.97.473 2.783a.928.928 0 01-.365.905.917.917 0 01-.967.071L41 35.87l-2.48 1.314a.914.914 0 01-.967-.07h-.002zm3.875-3.11l1.26.668-.241-1.413a.93.93 0 01.265-.819l1.02-1-1.408-.206a.917.917 0 01-.692-.506L41 29.44l-.63 1.286a.917.917 0 01-.692.506l-1.409.206 1.02 1a.93.93 0 01.264.82l-.24 1.412 1.26-.667a.913.913 0 01.855 0h-.002z",
    fill: "#3DABDD"
  })));
}
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODIiIGhlaWdodD0iODIiIHZpZXdCb3g9IjAgMCA4MiA4MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTU0IDBIMjhDMTIuNTM2IDAgMCAxMi41MzYgMCAyOFY1NEMwIDY5LjQ2NCAxMi41MzYgODIgMjggODJINTRDNjkuNDY0IDgyIDgyIDY5LjQ2NCA4MiA1NFYyOEM4MiAxMi41MzYgNjkuNDY0IDAgNTQgMFoiIGZpbGw9IiNFQUY5RkYiLz4KPHBhdGggZD0iTTMwLjY1MyA2MUMzMC41MzE5IDYwLjk5OTYgMzAuNDEyIDYwLjk3NTIgMzAuMzAwMiA2MC45Mjg1QzMwLjE4ODQgNjAuODgxNyAzMC4wODcgNjAuODEzNSAzMC4wMDE2IDYwLjcyNzVDMjkuOTE2MyA2MC42NDE1IDI5Ljg0ODcgNjAuNTM5NiAyOS44MDI4IDYwLjQyNzVDMjkuNzU2OSA2MC4zMTU0IDI5LjczMzUgNjAuMTk1MSAyOS43MzQgNjAuMDc0VjU3Ljg4MzFDMjkuNzMyMiA1Ny4xNDk0IDMwLjAyMTQgNTYuNDQ0OSAzMC41MzgzIDU1LjkyNDNDMzEuMDU1MiA1NS40MDM3IDMxLjc1NzQgNTUuMTA5NCAzMi40OTExIDU1LjEwNkgzNC4yVjUwLjg1ODlDMzQuMTk5MSA1MC42NTIxIDM0LjI2NzUgNTAuNDUxMyAzNC4zOTQ0IDUwLjI4ODFDMzQuNTIxNCA1MC4xMjQ5IDM0LjY5OTQgNTAuMDA4OSAzNC45MDAxIDQ5Ljk1OUgzNC45MTJDMzUuOTA4NSA0OS43MjUyIDM2Ljc4NjMgNDkuMTM3OSAzNy4zODI0IDQ4LjMwNTlDMzcuOTc4NCA0Ny40NzM5IDM4LjI1MjMgNDYuNDUzNyAzOC4xNTMgNDUuNDM1MUMzNS44NzgyIDQ0LjM2OTIgMzQuMDEwNyA0Mi41OTM5IDMyLjgzMSA0MC4zNzZDMzIuMzU4NSAzOS41NzExIDMxLjk0MzggMzguNzMzOCAzMS41OTAxIDM3Ljg3MDFDMjkuNjAzMyAzNi43NzYgMjcuODkxIDM1LjI0NDkgMjYuNTgyNCAzMy4zOTIzQzI1LjI3MzggMzEuNTM5OCAyNC40MDMxIDI5LjQxNDIgMjQuMDM2IDI3LjE3NkMyMy45NzAxIDI2Ljc2NTMgMjMuOTk0MSAyNi4zNDUyIDI0LjEwNjEgMjUuOTQ0NkMyNC4yMTgyIDI1LjU0NCAyNC40MTU3IDI1LjE3MjIgMjQuNjg1MSAyNC44NTUyQzI0Ljk1NDYgMjQuNTM4MyAyNS4yODk1IDI0LjI4MzUgMjUuNjY2OCAyNC4xMDg0QzI2LjA0NDIgMjMuOTMzMyAyNi40NTUgMjMuODQyMiAyNi44NzEgMjMuODQxMUgyOS42NDZWMjIuOTY3QzI5LjY0NDQgMjIuNDQ4OCAyOS44NDg2IDIxLjk1MTEgMzAuMjEzNyAyMS41ODMzQzMwLjU3ODcgMjEuMjE1NCAzMS4wNzQ4IDIxLjAwNzMgMzEuNTkzIDIxLjAwNDlINTAuNDA3QzUwLjkyNTMgMjEuMDA3MyA1MS40MjE2IDIxLjIxNTQgNTEuNzg2OCAyMS41ODMzQzUyLjE1MiAyMS45NTExIDUyLjM1NjMgMjIuNDQ4NyA1Mi4zNTUgMjIuOTY3VjIzLjg0MTFINTUuMTI5MUM1NS41NDUgMjMuODQyMyA1NS45NTU3IDIzLjkzMzcgNTYuMzMzIDI0LjEwODlDNTYuNzEwMiAyNC4yODQgNTcuMDQ1MSAyNC41Mzg4IDU3LjMxNDUgMjQuODU1N0M1Ny41ODM5IDI1LjE3MjYgNTcuNzgxNSAyNS41NDQgNTcuODkzNiAyNS45NDQ2QzU4LjAwNTcgMjYuMzQ1MSA1OC4wMjk3IDI2Ljc2NTMgNTcuOTY0IDI3LjE3NkM1Ny41OTcgMjkuNDE0MSA1Ni43MjY1IDMxLjUzOTYgNTUuNDE4MSAzMy4zOTIxQzU0LjEwOTcgMzUuMjQ0NiA1Mi4zOTc2IDM2Ljc3NTkgNTAuNDExIDM3Ljg3MDFDNTAuMDU2NiAzOC43MzM3IDQ5LjY0MTYgMzkuNTcxIDQ5LjE2OSA0MC4zNzZDNDguMDAxNiA0Mi41NjI1IDQ2LjE2ODkgNDQuMzIwOSA0My45MzYgNDUuMzk3QzQzLjgyNjMgNDYuNDIxNSA0NC4wOTQ5IDQ3LjQ1MDggNDQuNjkxMyA0OC4yOTFDNDUuMjg3NiA0OS4xMzEzIDQ2LjE3MDcgNDkuNzI0NSA0Ny4xNzQgNDkuOTU5SDQ3LjE4NUM0Ny4zODY5IDUwLjAwNzYgNDcuNTY2NiA1MC4xMjI4IDQ3LjY5NDkgNTAuMjg2MUM0Ny44MjMxIDUwLjQ0OTQgNDcuODkyNiA1MC42NTEyIDQ3Ljg5MjEgNTAuODU4OVY1NS4xMDZINDkuNTkyQzUwLjMyNTcgNTUuMTA5NCA1MS4wMjgxIDU1LjQwMzcgNTEuNTQ1MSA1NS45MjQzQzUyLjA2MjIgNTYuNDQ0OSA1Mi4zNTE2IDU3LjE0OTMgNTIuMzUgNTcuODgzMVY2MC4wNzRDNTIuMzUwNCA2MC4xOTUyIDUyLjMyNjkgNjAuMzE1NCA1Mi4yODA5IDYwLjQyNzVDNTIuMjM0OSA2MC41Mzk2IDUyLjE2NzIgNjAuNjQxNiA1Mi4wODE4IDYwLjcyNzVDNTEuOTk2NCA2MC44MTM1IDUxLjg5NDggNjAuODgyIDUxLjc4MyA2MC45Mjg3QzUxLjY3MTIgNjAuOTc1NSA1MS41NTEyIDYwLjk5OTYgNTEuNDMgNjFIMzAuNjUzWk0zMS41NzIxIDU3Ljg4MjFWNTkuMTQ3OUg1MC41MTZWNTcuODgyMUM1MC41MTY2IDU3LjYzNzYgNTAuNDIwMSA1Ny40MDI5IDUwLjI0NzggNTcuMjI5NUM1MC4wNzU1IDU3LjA1NjEgNDkuODQxNSA1Ni45NTgxIDQ5LjU5NyA1Ni45NTdIMzIuNDkxMUMzMi4yNDY4IDU2Ljk1ODEgMzIuMDEyOSA1Ny4wNTU4IDMxLjg0MDYgNTcuMjI5QzMxLjY2ODMgNTcuNDAyMiAzMS41NzE4IDU3LjYzNjggMzEuNTcyMSA1Ny44ODExVjU3Ljg4MjFaTTM2LjAzNCA1NS4xMDVINDYuMDU1VjUxLjc4MzlIMzYuMDM0VjU1LjEwNVpNMzkuMDY0MSA0OS4xMTVDMzguODgwNCA0OS40MDQgMzguNjczIDQ5LjY3NzIgMzguNDQ0IDQ5LjkzMTlINDMuNjUzQzQyLjY1ODIgNDguODMxNSA0Mi4wOTcgNDcuNDA3MyA0Mi4wNzQgNDUuOTI0MUM0MS43MTg0IDQ1Ljk3NjYgNDEuMzU5NCA0Ni4wMDE5IDQxIDQ2QzQwLjY2OTUgNDYgNDAuMzM5NCA0NS45NzcxIDQwLjAxMjEgNDUuOTMxOUMzOS45OTg5IDQ3LjA2MDIgMzkuNjcwNSA0OC4xNjI1IDM5LjA2NDEgNDkuMTE0VjQ5LjExNVpNMzEuNDg0IDIyLjk2MTlWMjcuMzkxMUMzMS4zOTMgMzEuNTg5NCAzMi40MDIxIDM1LjczODQgMzQuNDExIDM5LjQyNkMzNi4yMTEgNDIuNDc2IDM4LjU1IDQ0LjE1NSA0MSA0NC4xNTVDNDMuNDUgNDQuMTU1IDQ1Ljc5IDQyLjQ3NyA0Ny41ODkgMzkuNDI2QzQ5LjU5OCAzNS43Mzg0IDUwLjYwNzEgMzEuNTg5NCA1MC41MTYgMjcuMzkxMVYyMi45NjE5QzUwLjUxNjIgMjIuOTQ3NCA1MC41MTM0IDIyLjkzMzEgNTAuNTA4IDIyLjkxOTdDNTAuNTAyNSAyMi45MDYyIDUwLjQ5NDQgMjIuODkzOSA1MC40ODQyIDIyLjg4MzVDNTAuNDczOSAyMi44NzMyIDUwLjQ2MTcgMjIuODY1IDUwLjQ0ODMgMjIuODU5NEM1MC40MzQ5IDIyLjg1MzggNTAuNDIwNiAyMi44NTExIDUwLjQwNiAyMi44NTExSDMxLjU5M0MzMS41NjQgMjIuODUxMyAzMS41MzYzIDIyLjg2MjkgMzEuNTE1OSAyMi44ODM1QzMxLjQ5NTUgMjIuOTA0MSAzMS40ODQgMjIuOTMxOSAzMS40ODQgMjIuOTYwOVYyMi45NjE5Wk01Mi4zNTQgMjcuMzkxMUM1Mi4zNjM4IDI5Ljk2NDUgNTIuMDM0MyAzMi41Mjc3IDUxLjM3NDEgMzUuMDE0OUM1My45MTk0IDMyLjk4NjcgNTUuNjIwNyAzMC4wODU2IDU2LjE0OCAyNi44NzRDNTYuMTcyMSAyNi43Mjk0IDU2LjE2NDEgMjYuNTgxMSA1Ni4xMjQ1IDI2LjQzOTlDNTYuMDg0OSAyNi4yOTg4IDU2LjAxNDggMjYuMTY3OSA1NS45MTkgMjYuMDU2OUM1NS44MjIgMjUuOTQxMiA1NS43MDA4IDI1Ljg0ODEgNTUuNTY0IDI1Ljc4NDJDNTUuNDI3MiAyNS43MjAzIDU1LjI3ODEgMjUuNjg3MiA1NS4xMjcgMjUuNjg3SDUyLjM1MzFMNTIuMzU0IDI3LjM5MTFaTTI2LjA3OSAyNi4wNTU5QzI1Ljk4MzEgMjYuMTY3MSAyNS45MTMgMjYuMjk4MSAyNS44NzM0IDI2LjQzOTVDMjUuODMzOCAyNi41ODA4IDI1LjgyNTggMjYuNzI5MiAyNS44NSAyNi44NzRDMjYuMzc3NyAzMC4wODU3IDI4LjA3OTQgMzIuOTg2OCAzMC42MjUgMzUuMDE0OUMyOS45NjUxIDMyLjUyNzYgMjkuNjM1OSAyOS45NjQ0IDI5LjY0NiAyNy4zOTExVjI1LjY5MDlIMjYuODcxQzI2LjcyMDYgMjUuNjkwNCAyNi41NzE5IDI1LjcyMjggMjYuNDM1MyAyNS43ODU2QzI2LjI5ODcgMjUuODQ4NSAyNi4xNzc1IDI1Ljk0MDQgMjYuMDggMjYuMDU0OUwyNi4wNzkgMjYuMDU1OVpNMzcuNTUxMSAzNy4xMTIxQzM3LjQxMjEgMzcuMDEwMSAzNy4zMDQzIDM2Ljg3MTMgMzcuMjM5OCAzNi43MTE0QzM3LjE3NTQgMzYuNTUxNiAzNy4xNTY3IDM2LjM3NjkgMzcuMTg2IDM2LjIwN0wzNy42NTkgMzMuNDI0MUwzNS42NTIgMzEuNDU0MUMzNS41MjkyIDMxLjMzMjkgMzUuNDQyNSAzMS4xOCAzNS40MDE2IDMxLjAxMjVDMzUuMzYwNiAzMC44NDQ5IDM1LjM2NyAzMC42NjkgMzUuNDIgMzAuNTA0OUMzNS40NzI0IDMwLjM0MDkgMzUuNTY5NiAzMC4xOTUgMzUuNzAwOCAzMC4wODM1QzM1LjgzMTkgMjkuOTcyIDM1Ljk5MTcgMjkuODk5MyAzNi4xNjIgMjkuODc0TDM4LjkzNSAyOS40NjhMNDAuMTc1IDI2LjkzN0M0MC4yNSAyNi43ODIxIDQwLjM2NzEgMjYuNjUxNSA0MC41MTMgMjYuNTYwMUM0MC42NTg4IDI2LjQ2ODYgNDAuODI3NCAyNi40MjAyIDQwLjk5OTUgMjYuNDIwMkM0MS4xNzE3IDI2LjQyMDIgNDEuMzQwMyAyNi40Njg2IDQxLjQ4NjEgMjYuNTYwMUM0MS42MzE5IDI2LjY1MTUgNDEuNzQ5IDI2Ljc4MjEgNDEuODI0IDI2LjkzN0w0My4wNjMgMjkuNDY4TDQ1LjgzNiAyOS44NzRDNDYuMDA2NiAyOS44OTk4IDQ2LjE2NjUgMjkuOTcyNSA0Ni4yOTc5IDMwLjA4NDJDNDYuNDI5NCAzMC4xOTU5IDQ2LjUyNyAzMC4zNDIyIDQ2LjU3OTkgMzAuNTA2M0M0Ni42MzI4IDMwLjY3MDUgNDYuNjM4OCAzMC44NDYzIDQ2LjU5NzMgMzEuMDEzN0M0Ni41NTU4IDMxLjE4MTEgNDYuNDY4NCAzMS4zMzM2IDQ2LjM0NSAzMS40NTQxTDQ0LjMzOSAzMy40MjQxTDQ0LjgxMiAzNi4yMDdDNDQuODQxMSAzNi4zNzY5IDQ0LjgyMjQgMzYuNTUxNCA0NC43NTc5IDM2LjcxMTJDNDQuNjkzNCAzNi44NzEgNDQuNTg1OCAzNy4wMDk5IDQ0LjQ0NzEgMzcuMTEyMUM0NC4yOTA0IDM3LjIyNjggNDQuMTAxMiAzNy4yODg4IDQzLjkwNyAzNy4yODkxQzQzLjc1ODEgMzcuMjg5NiA0My42MTE0IDM3LjI1MzIgNDMuNDggMzcuMTgzMUw0MSAzNS44Njg5TDM4LjUyIDM3LjE4MzFDMzguMzY4NSAzNy4yNjMzIDM4LjE5NzUgMzcuMjk5MiAzOC4wMjY1IDM3LjI4NjlDMzcuODU1NSAzNy4yNzQ1IDM3LjY5MTQgMzcuMjE0MiAzNy41NTMgMzcuMTEzTDM3LjU1MTEgMzcuMTEyMVpNNDEuNDI2MSAzNC4wMDI5TDQyLjY4NiAzNC42Njk5TDQyLjQ0NSAzMy4yNTcxQzQyLjQxOTkgMzMuMTA5MyA0Mi40MzA5IDMyLjk1NzUgNDIuNDc3MSAzMi44MTQ5QzQyLjUyMzIgMzIuNjcyMyA0Mi42MDMyIDMyLjU0MyA0Mi43MTAxIDMyLjQzOEw0My43MyAzMS40MzhMNDIuMzIyMSAzMS4yMzE5QzQyLjE3NDIgMzEuMjEwMyA0Mi4wMzQgMzEuMTUyOSA0MS45MTM0IDMxLjA2NDdDNDEuNzkyOCAzMC45NzY1IDQxLjY5NTUgMzAuODYwNCA0MS42MyAzMC43MjYxTDQxIDI5LjQzOTlMNDAuMzcgMzAuNzI2MUM0MC4zMDQ2IDMwLjg2MDQgNDAuMjA3MyAzMC45NzY1IDQwLjA4NjcgMzEuMDY0N0MzOS45NjYxIDMxLjE1MjkgMzkuODI1OCAzMS4yMTAzIDM5LjY3OCAzMS4yMzE5TDM4LjI2OSAzMS40MzhMMzkuMjg5IDMyLjQzOEMzOS4zOTU4IDMyLjU0MzEgMzkuNDc1NSAzMi42NzI2IDM5LjUyMTUgMzIuODE1MkMzOS41Njc0IDMyLjk1NzggMzkuNTc4MiAzMy4xMDk0IDM5LjU1MyAzMy4yNTcxTDM5LjMxMyAzNC42Njk5TDQwLjU3MyAzNC4wMDI5QzQwLjcwNDcgMzMuOTMzMSA0MC44NTE1IDMzLjg5NjcgNDEuMDAwNSAzMy44OTY3QzQxLjE0OTYgMzMuODk2NyA0MS4yOTYzIDMzLjkzMzEgNDEuNDI4IDM0LjAwMjlINDEuNDI2MVoiIGZpbGw9IiMzREFCREQiLz4KPC9zdmc+Cg==");


/***/ }),

/***/ "./src/components/feature-card.js":
/*!****************************************!*\
  !*** ./src/components/feature-card.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FeatureCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
var _jsxFileName = "/home/nick/workspace/onda-project/onda-website/src/components/feature-card.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/** @jsx jsx */


function FeatureCard(_ref) {
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
    width: "80",
    height: "80",
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
_c = FeatureCard;
var styles = {
  card: {
    display: 'flex',
    alignItems: 'flex-start'
  },
  img: {
    width: ['60px', null, null, null, '55px', '70px', null, '80px'],
    height: 'auto',
    flexShrink: 0,
    mr: [3, 4, null, null, 3, 4, null, 5]
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: [3, null, null, null, null, 4],
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, null, null, null, 3],
      mt: '2px'
    },
    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, 2]
    }
  }
};
var _c;
$RefreshReg$(_c, "FeatureCard");

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

/***/ "./src/sections/feature.js":
/*!*********************************!*\
  !*** ./src/sections/feature.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Feature; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var _components_section_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/section-header */ "./src/components/section-header.js");
/* harmony import */ var _components_feature_card_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/feature-card.js */ "./src/components/feature-card.js");
/* harmony import */ var _assets_feature_smart_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/feature/smart.svg */ "./src/assets/feature/smart.svg");
/* harmony import */ var _assets_feature_winner_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/assets/feature/winner.svg */ "./src/assets/feature/winner.svg");
/* harmony import */ var _assets_feature_cloud_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/assets/feature/cloud.svg */ "./src/assets/feature/cloud.svg");
/* harmony import */ var _assets_feature_setting_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/assets/feature/setting.svg */ "./src/assets/feature/setting.svg");
/* harmony import */ var _assets_feature_design_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/assets/feature/design.svg */ "./src/assets/feature/design.svg");
/* harmony import */ var _assets_feature_chat_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/assets/feature/chat.svg */ "./src/assets/feature/chat.svg");
var _jsxFileName = "/home/nick/workspace/onda-project/onda-website/src/sections/feature.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/** @jsx jsx */











var data = [{
  id: 1,
  imgSrc: _assets_feature_smart_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
  altText: 'Smart',
  title: 'Smart Features',
  text: 'Get your blood tests delivered at let home collect sample from the victory of the managements.'
}, {
  id: 2,
  imgSrc: _assets_feature_winner_svg__WEBPACK_IMPORTED_MODULE_5__["default"],
  altText: 'Performance',
  title: 'Fast Performance',
  text: 'Get your blood tests delivered at let home collect sample from the victory of the managements.'
}, {
  id: 3,
  imgSrc: _assets_feature_cloud_svg__WEBPACK_IMPORTED_MODULE_6__["default"],
  altText: 'Content',
  title: 'Unlimited Content',
  text: 'Get your blood tests delivered at let home collect sample from the victory of the managements.'
}, {
  id: 4,
  imgSrc: _assets_feature_setting_svg__WEBPACK_IMPORTED_MODULE_7__["default"],
  altText: 'Customization',
  title: 'Unlimited Customization',
  text: 'Get your blood tests delivered at let home collect sample from the victory of the managements.'
}, {
  id: 5,
  imgSrc: _assets_feature_design_svg__WEBPACK_IMPORTED_MODULE_8__["default"],
  altText: 'Productivity',
  title: 'Boost Productivity',
  text: 'Get your blood tests delivered at let home collect sample from the victory of the managements.'
}, {
  id: 6,
  imgSrc: _assets_feature_chat_svg__WEBPACK_IMPORTED_MODULE_9__["default"],
  altText: 'Support',
  title: 'Customer Support',
  text: 'Get your blood tests delivered at let home collect sample from the victory of the managements.'
}];
function Feature() {
  var _this = this;
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    sx: {
      variant: 'section.feature'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_section_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    slogan: "Quality features",
    title: "Meet exciting feature of app",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    sx: styles.grid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, data.map(function (item) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_feature_card_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: item.id,
      src: item.imgSrc,
      alt: item.title,
      title: item.title,
      text: item.text,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 13
      }
    });
  }))));
}
_c = Feature;
var styles = {
  grid: {
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: ['37px 0', null, '45px 30px', null, '50px 30px', null, null, '90px 70px'],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)', null, 'repeat(3,1fr)']
  }
};
var _c;
$RefreshReg$(_c, "Feature");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9QcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b1Byb3BlcnR5S2V5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c0xvb3NlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL2NhY2hlL2Rpc3QvY2FjaGUuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9jb3JlL2Rpc3QvY29yZS5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL2NvcmUvZGlzdC9lbW90aW9uLWVsZW1lbnQtMDRkODUxMzQuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9jc3MvZGlzdC9jc3MuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9oYXNoL2Rpc3QvaGFzaC5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL2lzLXByb3AtdmFsaWQvZGlzdC9pcy1wcm9wLXZhbGlkLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vbWVtb2l6ZS9kaXN0L21lbW9pemUuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9zZXJpYWxpemUvZGlzdC9zZXJpYWxpemUuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9zaGVldC9kaXN0L3NoZWV0LmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vc3R5bGVkLWJhc2UvZGlzdC9zdHlsZWQtYmFzZS5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3N0eWxlZC9kaXN0L3N0eWxlZC5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3N0eWxpcy9kaXN0L3N0eWxpcy5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3VuaXRsZXNzL2Rpc3QvdW5pdGxlc3MuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi91dGlscy9kaXN0L3V0aWxzLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vd2Vhay1tZW1vaXplL2Rpc3Qvd2Vhay1tZW1vaXplLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1keC1qcy9yZWFjdC9kaXN0L2VzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzdHlsZWQtc3lzdGVtL2JhY2tncm91bmQvZGlzdC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac3R5bGVkLXN5c3RlbS9ib3JkZXIvZGlzdC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac3R5bGVkLXN5c3RlbS9jb2xvci9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzdHlsZWQtc3lzdGVtL2NvcmUvZGlzdC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac3R5bGVkLXN5c3RlbS9jc3MvZGlzdC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac3R5bGVkLXN5c3RlbS9mbGV4Ym94L2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHN0eWxlZC1zeXN0ZW0vZ3JpZC9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzdHlsZWQtc3lzdGVtL2xheW91dC9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzdHlsZWQtc3lzdGVtL3Bvc2l0aW9uL2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHN0eWxlZC1zeXN0ZW0vc2hhZG93L2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHN0eWxlZC1zeXN0ZW0vc2hvdWxkLWZvcndhcmQtcHJvcC9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzdHlsZWQtc3lzdGVtL3Nob3VsZC1mb3J3YXJkLXByb3Avbm9kZV9tb2R1bGVzL0BlbW90aW9uL21lbW9pemUvZGlzdC9lbW90aW9uLW1lbW9pemUuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac3R5bGVkLXN5c3RlbS9zcGFjZS9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BzdHlsZWQtc3lzdGVtL3R5cG9ncmFwaHkvZGlzdC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac3R5bGVkLXN5c3RlbS92YXJpYW50L2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHRoZW1lLXVpL2NvbG9yLW1vZGVzL2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHRoZW1lLXVpL2NvbXBvbmVudHMvZGlzdC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AdGhlbWUtdWkvY29yZS9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0B0aGVtZS11aS9jc3MvZGlzdC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AdGhlbWUtdWkvbWR4L2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHRoZW1lLXVpL3RoZW1lLXByb3ZpZGVyL2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZGVlcG1lcmdlL2Rpc3QvY2pzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvc3R5bGVkLXN5c3RlbS9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3RoZW1lLXVpL2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvYXNzZXRzL2ZlYXR1cmUvY2hhdC5zdmciLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hc3NldHMvZmVhdHVyZS9jbG91ZC5zdmciLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hc3NldHMvZmVhdHVyZS9kZXNpZ24uc3ZnIiwid2VicGFjazovL19OX0UvLi9zcmMvYXNzZXRzL2ZlYXR1cmUvc2V0dGluZy5zdmciLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hc3NldHMvZmVhdHVyZS9zbWFydC5zdmciLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hc3NldHMvZmVhdHVyZS93aW5uZXIuc3ZnIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9mZWF0dXJlLWNhcmQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3NlY3Rpb24taGVhZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvc2VjdGlvbnMvZmVhdHVyZS5qcyJdLCJuYW1lcyI6WyJGZWF0dXJlQ2FyZCIsIl9yZWYiLCJzcmMiLCJfcmVmJGFsdFRleHQiLCJhbHRUZXh0IiwidGl0bGUiLCJ0ZXh0IiwianN4IiwiQm94Iiwic3giLCJzdHlsZXMiLCJjYXJkIiwiX19zZWxmIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJJbWFnZSIsImFsdCIsImltZyIsIndpZHRoIiwiaGVpZ2h0Iiwid3JhcHBlciIsIkhlYWRpbmciLCJUZXh0Iiwic3ViVGl0bGUiLCJfYyIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiZmxleFNocmluayIsIm1yIiwiZmxleERpcmVjdGlvbiIsIm10IiwiZm9udFNpemUiLCJjb2xvciIsImxpbmVIZWlnaHQiLCJmb250V2VpZ2h0IiwibWIiLCIkUmVmcmVzaFJlZyQiLCJTZWN0aW9uSGVhZGVyIiwic2xvZ2FuIiwiaXNXaGl0ZSIsIl9fanN4IiwidmFyaWFudCIsImFzIiwib3BhY2l0eSIsImRhdGEiLCJpZCIsImltZ1NyYyIsIlNtYXJ0IiwiV2lubmVyIiwiQ2xvdWQiLCJTZXR0aW5nIiwiRGVzaWduIiwiQ2hhdCIsIkZlYXR1cmUiLCJfdGhpcyIsIkNvbnRhaW5lciIsIkdyaWQiLCJncmlkIiwibWFwIiwiaXRlbSIsImtleSIsInB0IiwiZ3JpZEdhcCIsIm14IiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUErQztBQUNoQztBQUNmLFFBQVEsaUVBQWE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7QUFBaUQ7QUFDbEM7QUFDZjtBQUNBO0FBQ0EsRUFBRSxrRUFBYztBQUNoQixDOzs7Ozs7Ozs7Ozs7QUNMQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDTkE7QUFBQTtBQUFBO0FBQWtDO0FBQ25CO0FBQ2YsTUFBTSwwREFBTztBQUNiO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMERBQU87QUFDZjtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNWQTtBQUFBO0FBQUE7QUFBQTtBQUFrQztBQUNTO0FBQzVCO0FBQ2YsWUFBWSwrREFBVztBQUN2QixTQUFTLDBEQUFPO0FBQ2hCLEM7Ozs7Ozs7Ozs7OztBQ0xBO0FBQUE7QUFBZTtBQUNmOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gsQzs7Ozs7Ozs7Ozs7QUNSQSxxQkFBcUIsbUJBQU8sQ0FBQyxvRkFBcUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhHOzs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSwrRzs7Ozs7Ozs7Ozs7O0FDUEE7QUFBQTtBQUFBO0FBQUE7QUFBNEM7QUFDUDtBQUNOOztBQUUvQjtBQUNBO0FBQ0E7QUFD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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLFVBQVU7O0FBRXBDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkNBQTJDLE9BQU87QUFDbEQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLG9CQUFvQixPQUFPO0FBQzNCLHlCQUF5QixPQUFPO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpREFBaUQ7QUFDakQ7O0FBRUE7QUFDQTtBQUNBLGtGQUFrRixxQ0FBcUMseUNBQXlDO0FBQ2hLOztBQUVBLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpTUFBaU07QUFDak07O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCOztBQUVBO0FBQ0EsNkJBQTZCLE9BQU87QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0RBQWdELDZEQUE2RCxPQUFPO0FBQ3BIO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLEVBQUU7QUFDN0I7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUseUVBQVUsRUFBQzs7Ozs7Ozs7Ozs7OztBQ3RtQjFCO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLDJFQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNqRDVCO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFNkM7Ozs7Ozs7Ozs7Ozs7QUN2QzdDO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsZUFBZSxHQUFHLHdDQUF3Qzs7QUFFM1Q7QUFDTztBQUNQOztBQUVBLGFBQWEsZ0JBQWdCO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0JBQW9CLHNCQUFzQjtBQUMxQyxDQUFDLElBQUk7QUFDRTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsZ0RBQWdEO0FBQ3JFOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FB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QSxDQUNILENBQUMsQ0FDRyxDQUNHLENBQ0o7QUFFZDtBQUFDVSxFQUFBLEdBdkJ1QjZCLE9BQU87QUF5Qi9CLElBQU05QyxNQUFNLEdBQUc7RUFDYmtELElBQUksRUFBRTtJQUNKSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzlDQyxPQUFPLEVBQUUsQ0FDUCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFdBQVcsRUFDWCxJQUFJLEVBQ0osV0FBVyxFQUNYLElBQUksRUFDSixJQUFJLEVBQ0osV0FBVyxDQUNaO0lBQ0Q1QyxLQUFLLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQztJQUM5QjZDLEVBQUUsRUFBRSxNQUFNO0lBQ1ZDLG1CQUFtQixFQUFFLENBQ25CLGVBQWUsRUFDZixJQUFJLEVBQ0osZUFBZSxFQUNmLElBQUksRUFDSixlQUFlO0VBRW5CO0FBQ0YsQ0FBQztBQUFBLElBQUF4QyxFQUFBO0FBQUFZLFlBQUEsQ0FBQVosRUFBQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdG9Qcm9wZXJ0eUtleSBmcm9tIFwiLi90b1Byb3BlcnR5S2V5LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGtleSA9IHRvUHJvcGVydHlLZXkoa2V5KTtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn0iLCJpbXBvcnQgc2V0UHJvdG90eXBlT2YgZnJvbSBcIi4vc2V0UHJvdG90eXBlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpO1xuICBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzcztcbiAgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiLi90eXBlb2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkge1xuICBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDtcbiAgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdO1xuICBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7XG4gICAgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlcztcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7XG4gIH1cbiAgcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIi4vdHlwZW9mLmpzXCI7XG5pbXBvcnQgdG9QcmltaXRpdmUgZnJvbSBcIi4vdG9QcmltaXRpdmUuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykge1xuICB2YXIga2V5ID0gdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTtcbiAgcmV0dXJuIF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBfdHlwZW9mKG9iaik7XG59IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2YuanNcIik7XG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTtcbiAgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7XG4gIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzTG9vc2UsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJpbXBvcnQgeyBTdHlsZVNoZWV0IH0gZnJvbSAnQGVtb3Rpb24vc2hlZXQnO1xuaW1wb3J0IFN0eWxpcyBmcm9tICdAZW1vdGlvbi9zdHlsaXMnO1xuaW1wb3J0ICdAZW1vdGlvbi93ZWFrLW1lbW9pemUnO1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGh5c3VsdGFuL3N0eWxpcy5qcy90cmVlL21hc3Rlci9wbHVnaW5zL3J1bGUtc2hlZXRcbi8vIGlubGluZWQgdG8gYXZvaWQgdW1kIHdyYXBwZXIgYW5kIHBlZXJEZXAgd2FybmluZ3MvaW5zdGFsbGluZyBzdHlsaXNcbi8vIHNpbmNlIHdlIHVzZSBzdHlsaXMgYWZ0ZXIgY2xvc3VyZSBjb21waWxlclxudmFyIGRlbGltaXRlciA9ICcvKnwqLyc7XG52YXIgbmVlZGxlID0gZGVsaW1pdGVyICsgJ30nO1xuXG5mdW5jdGlvbiB0b1NoZWV0KGJsb2NrKSB7XG4gIGlmIChibG9jaykge1xuICAgIFNoZWV0LmN1cnJlbnQuaW5zZXJ0KGJsb2NrICsgJ30nKTtcbiAgfVxufVxuXG52YXIgU2hlZXQgPSB7XG4gIGN1cnJlbnQ6IG51bGxcbn07XG52YXIgcnVsZVNoZWV0ID0gZnVuY3Rpb24gcnVsZVNoZWV0KGNvbnRleHQsIGNvbnRlbnQsIHNlbGVjdG9ycywgcGFyZW50cywgbGluZSwgY29sdW1uLCBsZW5ndGgsIG5zLCBkZXB0aCwgYXQpIHtcbiAgc3dpdGNoIChjb250ZXh0KSB7XG4gICAgLy8gcHJvcGVydHlcbiAgICBjYXNlIDE6XG4gICAgICB7XG4gICAgICAgIHN3aXRjaCAoY29udGVudC5jaGFyQ29kZUF0KDApKSB7XG4gICAgICAgICAgY2FzZSA2NDpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgLy8gQGltcG9ydFxuICAgICAgICAgICAgICBTaGVldC5jdXJyZW50Lmluc2VydChjb250ZW50ICsgJzsnKTtcbiAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIC8vIGNoYXJjb2RlIGZvciBsXG5cbiAgICAgICAgICBjYXNlIDEwODpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgLy8gY2hhcmNvZGUgZm9yIGJcbiAgICAgICAgICAgICAgLy8gdGhpcyBpZ25vcmVzIGxhYmVsXG4gICAgICAgICAgICAgIGlmIChjb250ZW50LmNoYXJDb2RlQXQoMikgPT09IDk4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAvLyBzZWxlY3RvclxuXG4gICAgY2FzZSAyOlxuICAgICAge1xuICAgICAgICBpZiAobnMgPT09IDApIHJldHVybiBjb250ZW50ICsgZGVsaW1pdGVyO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAvLyBhdC1ydWxlXG5cbiAgICBjYXNlIDM6XG4gICAgICB7XG4gICAgICAgIHN3aXRjaCAobnMpIHtcbiAgICAgICAgICAvLyBAZm9udC1mYWNlLCBAcGFnZVxuICAgICAgICAgIGNhc2UgMTAyOlxuICAgICAgICAgIGNhc2UgMTEyOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBTaGVldC5jdXJyZW50Lmluc2VydChzZWxlY3RvcnNbMF0gKyBjb250ZW50KTtcbiAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQgKyAoYXQgPT09IDAgPyBkZWxpbWl0ZXIgOiAnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIGNhc2UgLTI6XG4gICAgICB7XG4gICAgICAgIGNvbnRlbnQuc3BsaXQobmVlZGxlKS5mb3JFYWNoKHRvU2hlZXQpO1xuICAgICAgfVxuICB9XG59O1xuXG52YXIgY3JlYXRlQ2FjaGUgPSBmdW5jdGlvbiBjcmVhdGVDYWNoZShvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB1bmRlZmluZWQpIG9wdGlvbnMgPSB7fTtcbiAgdmFyIGtleSA9IG9wdGlvbnMua2V5IHx8ICdjc3MnO1xuICB2YXIgc3R5bGlzT3B0aW9ucztcblxuICBpZiAob3B0aW9ucy5wcmVmaXggIT09IHVuZGVmaW5lZCkge1xuICAgIHN0eWxpc09wdGlvbnMgPSB7XG4gICAgICBwcmVmaXg6IG9wdGlvbnMucHJlZml4XG4gICAgfTtcbiAgfVxuXG4gIHZhciBzdHlsaXMgPSBuZXcgU3R5bGlzKHN0eWxpc09wdGlvbnMpO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gJEZsb3dGaXhNZVxuICAgIGlmICgvW15hLXotXS8udGVzdChrZXkpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFbW90aW9uIGtleSBtdXN0IG9ubHkgY29udGFpbiBsb3dlciBjYXNlIGFscGhhYmV0aWNhbCBjaGFyYWN0ZXJzIGFuZCAtIGJ1dCBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgd2FzIHBhc3NlZFwiKTtcbiAgICB9XG4gIH1cblxuICB2YXIgaW5zZXJ0ZWQgPSB7fTsgLy8gJEZsb3dGaXhNZVxuXG4gIHZhciBjb250YWluZXI7XG5cbiAge1xuICAgIGNvbnRhaW5lciA9IG9wdGlvbnMuY29udGFpbmVyIHx8IGRvY3VtZW50LmhlYWQ7XG4gICAgdmFyIG5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInN0eWxlW2RhdGEtZW1vdGlvbi1cIiArIGtleSArIFwiXVwiKTtcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKG5vZGVzLCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgdmFyIGF0dHJpYiA9IG5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1lbW90aW9uLVwiICsga2V5KTsgLy8gJEZsb3dGaXhNZVxuXG4gICAgICBhdHRyaWIuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChpZCkge1xuICAgICAgICBpbnNlcnRlZFtpZF0gPSB0cnVlO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChub2RlLnBhcmVudE5vZGUgIT09IGNvbnRhaW5lcikge1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB2YXIgX2luc2VydDtcblxuICB7XG4gICAgc3R5bGlzLnVzZShvcHRpb25zLnN0eWxpc1BsdWdpbnMpKHJ1bGVTaGVldCk7XG5cbiAgICBfaW5zZXJ0ID0gZnVuY3Rpb24gaW5zZXJ0KHNlbGVjdG9yLCBzZXJpYWxpemVkLCBzaGVldCwgc2hvdWxkQ2FjaGUpIHtcbiAgICAgIHZhciBuYW1lID0gc2VyaWFsaXplZC5uYW1lO1xuICAgICAgU2hlZXQuY3VycmVudCA9IHNoZWV0O1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBzZXJpYWxpemVkLm1hcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciBtYXAgPSBzZXJpYWxpemVkLm1hcDtcbiAgICAgICAgU2hlZXQuY3VycmVudCA9IHtcbiAgICAgICAgICBpbnNlcnQ6IGZ1bmN0aW9uIGluc2VydChydWxlKSB7XG4gICAgICAgICAgICBzaGVldC5pbnNlcnQocnVsZSArIG1hcCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBzdHlsaXMoc2VsZWN0b3IsIHNlcmlhbGl6ZWQuc3R5bGVzKTtcblxuICAgICAgaWYgKHNob3VsZENhY2hlKSB7XG4gICAgICAgIGNhY2hlLmluc2VydGVkW25hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyBodHRwczovL2VzYmVuY2guY29tL2JlbmNoLzViZjczNzFhNGNkN2U2MDA5ZWY2MWQwYVxuICAgIHZhciBjb21tZW50U3RhcnQgPSAvXFwvXFwqL2c7XG4gICAgdmFyIGNvbW1lbnRFbmQgPSAvXFwqXFwvL2c7XG4gICAgc3R5bGlzLnVzZShmdW5jdGlvbiAoY29udGV4dCwgY29udGVudCkge1xuICAgICAgc3dpdGNoIChjb250ZXh0KSB7XG4gICAgICAgIGNhc2UgLTE6XG4gICAgICAgICAge1xuICAgICAgICAgICAgd2hpbGUgKGNvbW1lbnRTdGFydC50ZXN0KGNvbnRlbnQpKSB7XG4gICAgICAgICAgICAgIGNvbW1lbnRFbmQubGFzdEluZGV4ID0gY29tbWVudFN0YXJ0Lmxhc3RJbmRleDtcblxuICAgICAgICAgICAgICBpZiAoY29tbWVudEVuZC50ZXN0KGNvbnRlbnQpKSB7XG4gICAgICAgICAgICAgICAgY29tbWVudFN0YXJ0Lmxhc3RJbmRleCA9IGNvbW1lbnRFbmQubGFzdEluZGV4O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3VyIHN0eWxlcyBoYXZlIGFuIHVudGVybWluYXRlZCBjb21tZW50IChcIi8qXCIgd2l0aG91dCBjb3JyZXNwb25kaW5nIFwiKi9cIikuJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbW1lbnRTdGFydC5sYXN0SW5kZXggPSAwO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHN0eWxpcy51c2UoZnVuY3Rpb24gKGNvbnRleHQsIGNvbnRlbnQsIHNlbGVjdG9ycykge1xuICAgICAgc3dpdGNoIChjb250ZXh0KSB7XG4gICAgICAgIGNhc2UgLTE6XG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFyIGZsYWcgPSAnZW1vdGlvbi1kaXNhYmxlLXNlcnZlci1yZW5kZXJpbmctdW5zYWZlLXNlbGVjdG9yLXdhcm5pbmctcGxlYXNlLWRvLW5vdC11c2UtdGhpcy10aGUtd2FybmluZy1leGlzdHMtZm9yLWEtcmVhc29uJztcbiAgICAgICAgICAgIHZhciB1bnNhZmVQc2V1ZG9DbGFzc2VzID0gY29udGVudC5tYXRjaCgvKDpmaXJzdHw6bnRofDpudGgtbGFzdCktY2hpbGQvZyk7XG5cbiAgICAgICAgICAgIGlmICh1bnNhZmVQc2V1ZG9DbGFzc2VzICYmIGNhY2hlLmNvbXBhdCAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICB1bnNhZmVQc2V1ZG9DbGFzc2VzLmZvckVhY2goZnVuY3Rpb24gKHVuc2FmZVBzZXVkb0NsYXNzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlnbm9yZVJlZ0V4cCA9IG5ldyBSZWdFeHAodW5zYWZlUHNldWRvQ2xhc3MgKyBcIi4qXFxcXC9cXFxcKiBcIiArIGZsYWcgKyBcIiBcXFxcKlxcXFwvXCIpO1xuICAgICAgICAgICAgICAgIHZhciBpZ25vcmUgPSBpZ25vcmVSZWdFeHAudGVzdChjb250ZW50KTtcblxuICAgICAgICAgICAgICAgIGlmICh1bnNhZmVQc2V1ZG9DbGFzcyAmJiAhaWdub3JlKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiVGhlIHBzZXVkbyBjbGFzcyBcXFwiXCIgKyB1bnNhZmVQc2V1ZG9DbGFzcyArIFwiXFxcIiBpcyBwb3RlbnRpYWxseSB1bnNhZmUgd2hlbiBkb2luZyBzZXJ2ZXItc2lkZSByZW5kZXJpbmcuIFRyeSBjaGFuZ2luZyBpdCB0byBcXFwiXCIgKyB1bnNhZmVQc2V1ZG9DbGFzcy5zcGxpdCgnLWNoaWxkJylbMF0gKyBcIi1vZi10eXBlXFxcIi5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdmFyIGNhY2hlID0ge1xuICAgIGtleToga2V5LFxuICAgIHNoZWV0OiBuZXcgU3R5bGVTaGVldCh7XG4gICAgICBrZXk6IGtleSxcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLFxuICAgICAgbm9uY2U6IG9wdGlvbnMubm9uY2UsXG4gICAgICBzcGVlZHk6IG9wdGlvbnMuc3BlZWR5XG4gICAgfSksXG4gICAgbm9uY2U6IG9wdGlvbnMubm9uY2UsXG4gICAgaW5zZXJ0ZWQ6IGluc2VydGVkLFxuICAgIHJlZ2lzdGVyZWQ6IHt9LFxuICAgIGluc2VydDogX2luc2VydFxuICB9O1xuICByZXR1cm4gY2FjaGU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDYWNoZTtcbiIsImltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlJztcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJ0BlbW90aW9uL2NhY2hlJztcbmltcG9ydCB7IGggYXMgaGFzT3duUHJvcGVydHksIEUgYXMgRW1vdGlvbiwgYyBhcyBjcmVhdGVFbW90aW9uUHJvcHMsIHcgYXMgd2l0aEVtb3Rpb25DYWNoZSwgVCBhcyBUaGVtZUNvbnRleHQgfSBmcm9tICcuL2Vtb3Rpb24tZWxlbWVudC0wNGQ4NTEzNC5icm93c2VyLmVzbS5qcyc7XG5leHBvcnQgeyBDIGFzIENhY2hlUHJvdmlkZXIsIFQgYXMgVGhlbWVDb250ZXh0LCB3IGFzIHdpdGhFbW90aW9uQ2FjaGUgfSBmcm9tICcuL2Vtb3Rpb24tZWxlbWVudC0wNGQ4NTEzNC5icm93c2VyLmVzbS5qcyc7XG5pbXBvcnQgeyBpbnNlcnRTdHlsZXMsIGdldFJlZ2lzdGVyZWRTdHlsZXMgfSBmcm9tICdAZW1vdGlvbi91dGlscyc7XG5pbXBvcnQgeyBzZXJpYWxpemVTdHlsZXMgfSBmcm9tICdAZW1vdGlvbi9zZXJpYWxpemUnO1xuaW1wb3J0IHsgU3R5bGVTaGVldCB9IGZyb20gJ0BlbW90aW9uL3NoZWV0JztcbmltcG9ydCBjc3MgZnJvbSAnQGVtb3Rpb24vY3NzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcblxudmFyIGpzeCA9IGZ1bmN0aW9uIGpzeCh0eXBlLCBwcm9wcykge1xuICB2YXIgYXJncyA9IGFyZ3VtZW50cztcblxuICBpZiAocHJvcHMgPT0gbnVsbCB8fCAhaGFzT3duUHJvcGVydHkuY2FsbChwcm9wcywgJ2NzcycpKSB7XG4gICAgLy8gJEZsb3dGaXhNZVxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50LmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gIH1cblxuICB2YXIgYXJnc0xlbmd0aCA9IGFyZ3MubGVuZ3RoO1xuICB2YXIgY3JlYXRlRWxlbWVudEFyZ0FycmF5ID0gbmV3IEFycmF5KGFyZ3NMZW5ndGgpO1xuICBjcmVhdGVFbGVtZW50QXJnQXJyYXlbMF0gPSBFbW90aW9uO1xuICBjcmVhdGVFbGVtZW50QXJnQXJyYXlbMV0gPSBjcmVhdGVFbW90aW9uUHJvcHModHlwZSwgcHJvcHMpO1xuXG4gIGZvciAodmFyIGkgPSAyOyBpIDwgYXJnc0xlbmd0aDsgaSsrKSB7XG4gICAgY3JlYXRlRWxlbWVudEFyZ0FycmF5W2ldID0gYXJnc1tpXTtcbiAgfSAvLyAkRmxvd0ZpeE1lXG5cblxuICByZXR1cm4gY3JlYXRlRWxlbWVudC5hcHBseShudWxsLCBjcmVhdGVFbGVtZW50QXJnQXJyYXkpO1xufTtcblxudmFyIHdhcm5lZEFib3V0Q3NzUHJvcEZvckdsb2JhbCA9IGZhbHNlO1xudmFyIEdsb2JhbCA9IC8qICNfX1BVUkVfXyAqL3dpdGhFbW90aW9uQ2FjaGUoZnVuY3Rpb24gKHByb3BzLCBjYWNoZSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhd2FybmVkQWJvdXRDc3NQcm9wRm9yR2xvYmFsICYmICggLy8gY2hlY2sgZm9yIGNsYXNzTmFtZSBhcyB3ZWxsIHNpbmNlIHRoZSB1c2VyIGlzXG4gIC8vIHByb2JhYmx5IHVzaW5nIHRoZSBjdXN0b20gY3JlYXRlRWxlbWVudCB3aGljaFxuICAvLyBtZWFucyBpdCB3aWxsIGJlIHR1cm5lZCBpbnRvIGEgY2xhc3NOYW1lIHByb3BcbiAgLy8gJEZsb3dGaXhNZSBJIGRvbid0IHJlYWxseSB3YW50IHRvIGFkZCBpdCB0byB0aGUgdHlwZSBzaW5jZSBpdCBzaG91bGRuJ3QgYmUgdXNlZFxuICBwcm9wcy5jbGFzc05hbWUgfHwgcHJvcHMuY3NzKSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJJdCBsb29rcyBsaWtlIHlvdSdyZSB1c2luZyB0aGUgY3NzIHByb3Agb24gR2xvYmFsLCBkaWQgeW91IG1lYW4gdG8gdXNlIHRoZSBzdHlsZXMgcHJvcCBpbnN0ZWFkP1wiKTtcbiAgICB3YXJuZWRBYm91dENzc1Byb3BGb3JHbG9iYWwgPSB0cnVlO1xuICB9XG5cbiAgdmFyIHN0eWxlcyA9IHByb3BzLnN0eWxlcztcblxuICBpZiAodHlwZW9mIHN0eWxlcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChUaGVtZUNvbnRleHQuQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uICh0aGVtZSkge1xuICAgICAgdmFyIHNlcmlhbGl6ZWQgPSBzZXJpYWxpemVTdHlsZXMoW3N0eWxlcyh0aGVtZSldKTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChJbm5lckdsb2JhbCwge1xuICAgICAgICBzZXJpYWxpemVkOiBzZXJpYWxpemVkLFxuICAgICAgICBjYWNoZTogY2FjaGVcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIHNlcmlhbGl6ZWQgPSBzZXJpYWxpemVTdHlsZXMoW3N0eWxlc10pO1xuICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoSW5uZXJHbG9iYWwsIHtcbiAgICBzZXJpYWxpemVkOiBzZXJpYWxpemVkLFxuICAgIGNhY2hlOiBjYWNoZVxuICB9KTtcbn0pO1xuXG4vLyBtYWludGFpbiBwbGFjZSBvdmVyIHJlcmVuZGVycy5cbi8vIGluaXRpYWwgcmVuZGVyIGZyb20gYnJvd3NlciwgaW5zZXJ0QmVmb3JlIGNvbnRleHQuc2hlZXQudGFnc1swXSBvciBpZiBhIHN0eWxlIGhhc24ndCBiZWVuIGluc2VydGVkIHRoZXJlIHlldCwgYXBwZW5kQ2hpbGRcbi8vIGluaXRpYWwgY2xpZW50LXNpZGUgcmVuZGVyIGZyb20gU1NSLCB1c2UgcGxhY2Ugb2YgaHlkcmF0aW5nIHRhZ1xudmFyIElubmVyR2xvYmFsID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKElubmVyR2xvYmFsLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBJbm5lckdsb2JhbChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICAgIHJldHVybiBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHx8IHRoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gSW5uZXJHbG9iYWwucHJvdG90eXBlO1xuXG4gIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2hlZXQgPSBuZXcgU3R5bGVTaGVldCh7XG4gICAgICBrZXk6IHRoaXMucHJvcHMuY2FjaGUua2V5ICsgXCItZ2xvYmFsXCIsXG4gICAgICBub25jZTogdGhpcy5wcm9wcy5jYWNoZS5zaGVldC5ub25jZSxcbiAgICAgIGNvbnRhaW5lcjogdGhpcy5wcm9wcy5jYWNoZS5zaGVldC5jb250YWluZXJcbiAgICB9KTsgLy8gJEZsb3dGaXhNZVxuXG4gICAgdmFyIG5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic3R5bGVbZGF0YS1lbW90aW9uLVwiICsgdGhpcy5wcm9wcy5jYWNoZS5rZXkgKyBcIj1cXFwiXCIgKyB0aGlzLnByb3BzLnNlcmlhbGl6ZWQubmFtZSArIFwiXFxcIl1cIik7XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5zaGVldC50YWdzLnB1c2gobm9kZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMuY2FjaGUuc2hlZXQudGFncy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuc2hlZXQuYmVmb3JlID0gdGhpcy5wcm9wcy5jYWNoZS5zaGVldC50YWdzWzBdO1xuICAgIH1cblxuICAgIHRoaXMuaW5zZXJ0U3R5bGVzKCk7XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBpZiAocHJldlByb3BzLnNlcmlhbGl6ZWQubmFtZSAhPT0gdGhpcy5wcm9wcy5zZXJpYWxpemVkLm5hbWUpIHtcbiAgICAgIHRoaXMuaW5zZXJ0U3R5bGVzKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5pbnNlcnRTdHlsZXMgPSBmdW5jdGlvbiBpbnNlcnRTdHlsZXMkMSgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5zZXJpYWxpemVkLm5leHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gaW5zZXJ0IGtleWZyYW1lc1xuICAgICAgaW5zZXJ0U3R5bGVzKHRoaXMucHJvcHMuY2FjaGUsIHRoaXMucHJvcHMuc2VyaWFsaXplZC5uZXh0LCB0cnVlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zaGVldC50YWdzLmxlbmd0aCkge1xuICAgICAgLy8gaWYgdGhpcyBkb2Vzbid0IGV4aXN0IHRoZW4gaXQgd2lsbCBiZSBudWxsIHNvIHRoZSBzdHlsZSBlbGVtZW50IHdpbGwgYmUgYXBwZW5kZWRcbiAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5zaGVldC50YWdzW3RoaXMuc2hlZXQudGFncy5sZW5ndGggLSAxXS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICB0aGlzLnNoZWV0LmJlZm9yZSA9IGVsZW1lbnQ7XG4gICAgICB0aGlzLnNoZWV0LmZsdXNoKCk7XG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5jYWNoZS5pbnNlcnQoXCJcIiwgdGhpcy5wcm9wcy5zZXJpYWxpemVkLCB0aGlzLnNoZWV0LCBmYWxzZSk7XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5zaGVldC5mbHVzaCgpO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICByZXR1cm4gSW5uZXJHbG9iYWw7XG59KENvbXBvbmVudCk7XG5cbnZhciBrZXlmcmFtZXMgPSBmdW5jdGlvbiBrZXlmcmFtZXMoKSB7XG4gIHZhciBpbnNlcnRhYmxlID0gY3NzLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKTtcbiAgdmFyIG5hbWUgPSBcImFuaW1hdGlvbi1cIiArIGluc2VydGFibGUubmFtZTsgLy8gJEZsb3dGaXhNZVxuXG4gIHJldHVybiB7XG4gICAgbmFtZTogbmFtZSxcbiAgICBzdHlsZXM6IFwiQGtleWZyYW1lcyBcIiArIG5hbWUgKyBcIntcIiArIGluc2VydGFibGUuc3R5bGVzICsgXCJ9XCIsXG4gICAgYW5pbTogMSxcbiAgICB0b1N0cmluZzogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICByZXR1cm4gXCJfRU1PX1wiICsgdGhpcy5uYW1lICsgXCJfXCIgKyB0aGlzLnN0eWxlcyArIFwiX0VNT19cIjtcbiAgICB9XG4gIH07XG59O1xuXG52YXIgY2xhc3NuYW1lcyA9IGZ1bmN0aW9uIGNsYXNzbmFtZXMoYXJncykge1xuICB2YXIgbGVuID0gYXJncy5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIGNscyA9ICcnO1xuXG4gIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICB2YXIgYXJnID0gYXJnc1tpXTtcbiAgICBpZiAoYXJnID09IG51bGwpIGNvbnRpbnVlO1xuICAgIHZhciB0b0FkZCA9IHZvaWQgMDtcblxuICAgIHN3aXRjaCAodHlwZW9mIGFyZykge1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICB7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuICAgICAgICAgICAgdG9BZGQgPSBjbGFzc25hbWVzKGFyZyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRvQWRkID0gJyc7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGsgaW4gYXJnKSB7XG4gICAgICAgICAgICAgIGlmIChhcmdba10gJiYgaykge1xuICAgICAgICAgICAgICAgIHRvQWRkICYmICh0b0FkZCArPSAnICcpO1xuICAgICAgICAgICAgICAgIHRvQWRkICs9IGs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB7XG4gICAgICAgICAgdG9BZGQgPSBhcmc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodG9BZGQpIHtcbiAgICAgIGNscyAmJiAoY2xzICs9ICcgJyk7XG4gICAgICBjbHMgKz0gdG9BZGQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNscztcbn07XG5cbmZ1bmN0aW9uIG1lcmdlKHJlZ2lzdGVyZWQsIGNzcywgY2xhc3NOYW1lKSB7XG4gIHZhciByZWdpc3RlcmVkU3R5bGVzID0gW107XG4gIHZhciByYXdDbGFzc05hbWUgPSBnZXRSZWdpc3RlcmVkU3R5bGVzKHJlZ2lzdGVyZWQsIHJlZ2lzdGVyZWRTdHlsZXMsIGNsYXNzTmFtZSk7XG5cbiAgaWYgKHJlZ2lzdGVyZWRTdHlsZXMubGVuZ3RoIDwgMikge1xuICAgIHJldHVybiBjbGFzc05hbWU7XG4gIH1cblxuICByZXR1cm4gcmF3Q2xhc3NOYW1lICsgY3NzKHJlZ2lzdGVyZWRTdHlsZXMpO1xufVxuXG52YXIgTm9vcCA9IGZ1bmN0aW9uIE5vb3AoKSB7XG4gIHJldHVybiBudWxsO1xufTtcblxudmFyIENsYXNzTmFtZXMgPSB3aXRoRW1vdGlvbkNhY2hlKGZ1bmN0aW9uIChwcm9wcywgY29udGV4dCkge1xuICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoVGhlbWVDb250ZXh0LkNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAodGhlbWUpIHtcbiAgICB2YXIgaGFzUmVuZGVyZWQgPSBmYWxzZTtcblxuICAgIHZhciBjc3MgPSBmdW5jdGlvbiBjc3MoKSB7XG4gICAgICBpZiAoaGFzUmVuZGVyZWQgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NzcyBjYW4gb25seSBiZSB1c2VkIGR1cmluZyByZW5kZXInKTtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHZhciBzZXJpYWxpemVkID0gc2VyaWFsaXplU3R5bGVzKGFyZ3MsIGNvbnRleHQucmVnaXN0ZXJlZCk7XG5cbiAgICAgIHtcbiAgICAgICAgaW5zZXJ0U3R5bGVzKGNvbnRleHQsIHNlcmlhbGl6ZWQsIGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRleHQua2V5ICsgXCItXCIgKyBzZXJpYWxpemVkLm5hbWU7XG4gICAgfTtcblxuICAgIHZhciBjeCA9IGZ1bmN0aW9uIGN4KCkge1xuICAgICAgaWYgKGhhc1JlbmRlcmVkICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjeCBjYW4gb25seSBiZSB1c2VkIGR1cmluZyByZW5kZXInKTtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG1lcmdlKGNvbnRleHQucmVnaXN0ZXJlZCwgY3NzLCBjbGFzc25hbWVzKGFyZ3MpKTtcbiAgICB9O1xuXG4gICAgdmFyIGNvbnRlbnQgPSB7XG4gICAgICBjc3M6IGNzcyxcbiAgICAgIGN4OiBjeCxcbiAgICAgIHRoZW1lOiB0aGVtZVxuICAgIH07XG4gICAgdmFyIGVsZSA9IHByb3BzLmNoaWxkcmVuKGNvbnRlbnQpO1xuICAgIGhhc1JlbmRlcmVkID0gdHJ1ZTtcbiAgICB2YXIgcG9zc2libHlTdHlsZUVsZW1lbnQgPSAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChOb29wLCBudWxsKTtcblxuXG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KEZyYWdtZW50LCBudWxsLCBwb3NzaWJseVN0eWxlRWxlbWVudCwgZWxlKTtcbiAgfSk7XG59KTtcblxuZXhwb3J0IHsgQ2xhc3NOYW1lcywgR2xvYmFsLCBqc3ggYXMgY3JlYXRlRWxlbWVudCwganN4LCBrZXlmcmFtZXMgfTtcbiIsImltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c0xvb3NlJztcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIGZvcndhcmRSZWYsIGNyZWF0ZUVsZW1lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNyZWF0ZUNhY2hlIGZyb20gJ0BlbW90aW9uL2NhY2hlJztcbmltcG9ydCB7IGdldFJlZ2lzdGVyZWRTdHlsZXMsIGluc2VydFN0eWxlcyB9IGZyb20gJ0BlbW90aW9uL3V0aWxzJztcbmltcG9ydCB7IHNlcmlhbGl6ZVN0eWxlcyB9IGZyb20gJ0BlbW90aW9uL3NlcmlhbGl6ZSc7XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbnZhciBFbW90aW9uQ2FjaGVDb250ZXh0ID0gLyojX19QVVJFX18qL2NyZWF0ZUNvbnRleHQoIC8vIHdlJ3JlIGRvaW5nIHRoaXMgdG8gYXZvaWQgcHJlY29uc3RydWN0J3MgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIGluIHRoaXMgb25lIGNhc2Vcbi8vIGJlY2F1c2UgdGhpcyBtb2R1bGUgaXMgcHJpbWFyaWx5IGludGVuZGVkIGZvciB0aGUgYnJvd3NlciBhbmQgbm9kZVxuLy8gYnV0IGl0J3MgYWxzbyByZXF1aXJlZCBpbiByZWFjdCBuYXRpdmUgYW5kIHNpbWlsYXIgZW52aXJvbm1lbnRzIHNvbWV0aW1lc1xuLy8gYW5kIHdlIGNvdWxkIGhhdmUgYSBzcGVjaWFsIGJ1aWxkIGp1c3QgZm9yIHRoYXRcbi8vIGJ1dCB0aGlzIGlzIG11Y2ggZWFzaWVyIGFuZCB0aGUgbmF0aXZlIHBhY2thZ2VzXG4vLyBtaWdodCB1c2UgYSBkaWZmZXJlbnQgdGhlbWUgY29udGV4dCBpbiB0aGUgZnV0dXJlIGFueXdheVxudHlwZW9mIEhUTUxFbGVtZW50ICE9PSAndW5kZWZpbmVkJyA/IGNyZWF0ZUNhY2hlKCkgOiBudWxsKTtcbnZhciBUaGVtZUNvbnRleHQgPSAvKiNfX1BVUkVfXyovY3JlYXRlQ29udGV4dCh7fSk7XG52YXIgQ2FjaGVQcm92aWRlciA9IEVtb3Rpb25DYWNoZUNvbnRleHQuUHJvdmlkZXI7XG5cbnZhciB3aXRoRW1vdGlvbkNhY2hlID0gZnVuY3Rpb24gd2l0aEVtb3Rpb25DYWNoZShmdW5jKSB7XG4gIHZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIocHJvcHMsIHJlZikge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChFbW90aW9uQ2FjaGVDb250ZXh0LkNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoY2FjaGUpIHtcbiAgICAgIHJldHVybiBmdW5jKHByb3BzLCBjYWNoZSwgcmVmKTtcbiAgICB9KTtcbiAgfTsgLy8gJEZsb3dGaXhNZVxuXG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9mb3J3YXJkUmVmKHJlbmRlcik7XG59O1xuXG4vLyB0aHVzIHdlIG9ubHkgbmVlZCB0byByZXBsYWNlIHdoYXQgaXMgYSB2YWxpZCBjaGFyYWN0ZXIgZm9yIEpTLCBidXQgbm90IGZvciBDU1NcblxudmFyIHNhbml0aXplSWRlbnRpZmllciA9IGZ1bmN0aW9uIHNhbml0aXplSWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHJldHVybiBpZGVudGlmaWVyLnJlcGxhY2UoL1xcJC9nLCAnLScpO1xufTtcblxudmFyIHR5cGVQcm9wTmFtZSA9ICdfX0VNT1RJT05fVFlQRV9QTEVBU0VfRE9fTk9UX1VTRV9fJztcbnZhciBsYWJlbFByb3BOYW1lID0gJ19fRU1PVElPTl9MQUJFTF9QTEVBU0VfRE9fTk9UX1VTRV9fJztcbnZhciBjcmVhdGVFbW90aW9uUHJvcHMgPSBmdW5jdGlvbiBjcmVhdGVFbW90aW9uUHJvcHModHlwZSwgcHJvcHMpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIHByb3BzLmNzcyA9PT0gJ3N0cmluZycgJiYgLy8gY2hlY2sgaWYgdGhlcmUgaXMgYSBjc3MgZGVjbGFyYXRpb25cbiAgcHJvcHMuY3NzLmluZGV4T2YoJzonKSAhPT0gLTEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJTdHJpbmdzIGFyZSBub3QgYWxsb3dlZCBhcyBjc3MgcHJvcCB2YWx1ZXMsIHBsZWFzZSB3cmFwIGl0IGluIGEgY3NzIHRlbXBsYXRlIGxpdGVyYWwgZnJvbSAnQGVtb3Rpb24vY3NzJyBsaWtlIHRoaXM6IGNzc2BcIiArIHByb3BzLmNzcyArIFwiYFwiKTtcbiAgfVxuXG4gIHZhciBuZXdQcm9wcyA9IHt9O1xuXG4gIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3BzLCBrZXkpKSB7XG4gICAgICBuZXdQcm9wc1trZXldID0gcHJvcHNba2V5XTtcbiAgICB9XG4gIH1cblxuICBuZXdQcm9wc1t0eXBlUHJvcE5hbWVdID0gdHlwZTsgLy8gVE9ETzogY2hlY2sgaWYgdGhpcyBzdGlsbCB3b3JrcyB3aXRoIGFsbCBvZiB0aG9zZSBkaWZmZXJlbnQgSlNYIGZ1bmN0aW9uc1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgdmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG5cbiAgICBpZiAoZXJyb3Iuc3RhY2spIHtcbiAgICAgIC8vIGNocm9tZVxuICAgICAgdmFyIG1hdGNoID0gZXJyb3Iuc3RhY2subWF0Y2goL2F0ICg/Ok9iamVjdFxcLnxNb2R1bGVcXC58KSg/OmpzeHxjcmVhdGVFbW90aW9uUHJvcHMpLipcXG5cXHMrYXQgKD86T2JqZWN0XFwufCkoW0EtWl1bQS1aYS16JF0rKSAvKTtcblxuICAgICAgaWYgKCFtYXRjaCkge1xuICAgICAgICAvLyBzYWZhcmkgYW5kIGZpcmVmb3hcbiAgICAgICAgbWF0Y2ggPSBlcnJvci5zdGFjay5tYXRjaCgvLipcXG4oW0EtWl1bQS1aYS16JF0rKUAvKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIG5ld1Byb3BzW2xhYmVsUHJvcE5hbWVdID0gc2FuaXRpemVJZGVudGlmaWVyKG1hdGNoWzFdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3UHJvcHM7XG59O1xuXG52YXIgTm9vcCA9IGZ1bmN0aW9uIE5vb3AoKSB7XG4gIHJldHVybiBudWxsO1xufTtcblxudmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcihjYWNoZSwgcHJvcHMsIHRoZW1lLCByZWYpIHtcbiAgdmFyIGNzc1Byb3AgPSB0aGVtZSA9PT0gbnVsbCA/IHByb3BzLmNzcyA6IHByb3BzLmNzcyh0aGVtZSk7IC8vIHNvIHRoYXQgdXNpbmcgYGNzc2AgZnJvbSBgZW1vdGlvbmAgYW5kIHBhc3NpbmcgdGhlIHJlc3VsdCB0byB0aGUgY3NzIHByb3Agd29ya3NcbiAgLy8gbm90IHBhc3NpbmcgdGhlIHJlZ2lzdGVyZWQgY2FjaGUgdG8gc2VyaWFsaXplU3R5bGVzIGJlY2F1c2UgaXQgd291bGRcbiAgLy8gbWFrZSBjZXJ0YWluIGJhYmVsIG9wdGltaXNhdGlvbnMgbm90IHBvc3NpYmxlXG5cbiAgaWYgKHR5cGVvZiBjc3NQcm9wID09PSAnc3RyaW5nJyAmJiBjYWNoZS5yZWdpc3RlcmVkW2Nzc1Byb3BdICE9PSB1bmRlZmluZWQpIHtcbiAgICBjc3NQcm9wID0gY2FjaGUucmVnaXN0ZXJlZFtjc3NQcm9wXTtcbiAgfVxuXG4gIHZhciB0eXBlID0gcHJvcHNbdHlwZVByb3BOYW1lXTtcbiAgdmFyIHJlZ2lzdGVyZWRTdHlsZXMgPSBbY3NzUHJvcF07XG4gIHZhciBjbGFzc05hbWUgPSAnJztcblxuICBpZiAodHlwZW9mIHByb3BzLmNsYXNzTmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICBjbGFzc05hbWUgPSBnZXRSZWdpc3RlcmVkU3R5bGVzKGNhY2hlLnJlZ2lzdGVyZWQsIHJlZ2lzdGVyZWRTdHlsZXMsIHByb3BzLmNsYXNzTmFtZSk7XG4gIH0gZWxzZSBpZiAocHJvcHMuY2xhc3NOYW1lICE9IG51bGwpIHtcbiAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUgKyBcIiBcIjtcbiAgfVxuXG4gIHZhciBzZXJpYWxpemVkID0gc2VyaWFsaXplU3R5bGVzKHJlZ2lzdGVyZWRTdHlsZXMpO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHNlcmlhbGl6ZWQubmFtZS5pbmRleE9mKCctJykgPT09IC0xKSB7XG4gICAgdmFyIGxhYmVsRnJvbVN0YWNrID0gcHJvcHNbbGFiZWxQcm9wTmFtZV07XG5cbiAgICBpZiAobGFiZWxGcm9tU3RhY2spIHtcbiAgICAgIHNlcmlhbGl6ZWQgPSBzZXJpYWxpemVTdHlsZXMoW3NlcmlhbGl6ZWQsICdsYWJlbDonICsgbGFiZWxGcm9tU3RhY2sgKyAnOyddKTtcbiAgICB9XG4gIH1cblxuICB2YXIgcnVsZXMgPSBpbnNlcnRTdHlsZXMoY2FjaGUsIHNlcmlhbGl6ZWQsIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyk7XG4gIGNsYXNzTmFtZSArPSBjYWNoZS5rZXkgKyBcIi1cIiArIHNlcmlhbGl6ZWQubmFtZTtcbiAgdmFyIG5ld1Byb3BzID0ge307XG5cbiAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwocHJvcHMsIGtleSkgJiYga2V5ICE9PSAnY3NzJyAmJiBrZXkgIT09IHR5cGVQcm9wTmFtZSAmJiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyB8fCBrZXkgIT09IGxhYmVsUHJvcE5hbWUpKSB7XG4gICAgICBuZXdQcm9wc1trZXldID0gcHJvcHNba2V5XTtcbiAgICB9XG4gIH1cblxuICBuZXdQcm9wcy5yZWYgPSByZWY7XG4gIG5ld1Byb3BzLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgdmFyIGVsZSA9IC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KHR5cGUsIG5ld1Byb3BzKTtcbiAgdmFyIHBvc3NpYmx5U3R5bGVFbGVtZW50ID0gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoTm9vcCwgbnVsbCk7XG5cblxuICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoRnJhZ21lbnQsIG51bGwsIHBvc3NpYmx5U3R5bGVFbGVtZW50LCBlbGUpO1xufTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cblxudmFyIEVtb3Rpb24gPSAvKiAjX19QVVJFX18gKi93aXRoRW1vdGlvbkNhY2hlKGZ1bmN0aW9uIChwcm9wcywgY2FjaGUsIHJlZikge1xuICBpZiAodHlwZW9mIHByb3BzLmNzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChUaGVtZUNvbnRleHQuQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uICh0aGVtZSkge1xuICAgICAgcmV0dXJuIHJlbmRlcihjYWNoZSwgcHJvcHMsIHRoZW1lLCByZWYpO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHJlbmRlcihjYWNoZSwgcHJvcHMsIG51bGwsIHJlZik7XG59KTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgRW1vdGlvbi5kaXNwbGF5TmFtZSA9ICdFbW90aW9uQ3NzUHJvcEludGVybmFsJztcbn1cblxuZXhwb3J0IHsgQ2FjaGVQcm92aWRlciBhcyBDLCBFbW90aW9uIGFzIEUsIFRoZW1lQ29udGV4dCBhcyBULCBjcmVhdGVFbW90aW9uUHJvcHMgYXMgYywgaGFzT3duUHJvcGVydHkgYXMgaCwgd2l0aEVtb3Rpb25DYWNoZSBhcyB3IH07XG4iLCJpbXBvcnQgeyBzZXJpYWxpemVTdHlsZXMgfSBmcm9tICdAZW1vdGlvbi9zZXJpYWxpemUnO1xuXG5mdW5jdGlvbiBjc3MoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gc2VyaWFsaXplU3R5bGVzKGFyZ3MpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjc3M7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuLy8gSW5zcGlyZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL2dhcnljb3VydC9tdXJtdXJoYXNoLWpzXG4vLyBQb3J0ZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vYWFwcGxlYnkvc21oYXNoZXIvYmxvYi82MWEwNTMwZjI4Mjc3ZjJlODUwYmZjMzk2MDBjZTYxZDAyYjUxOGRlL3NyYy9NdXJtdXJIYXNoMi5jcHAjTDM3LUw4NlxuZnVuY3Rpb24gbXVybXVyMihzdHIpIHtcbiAgLy8gJ20nIGFuZCAncicgYXJlIG1peGluZyBjb25zdGFudHMgZ2VuZXJhdGVkIG9mZmxpbmUuXG4gIC8vIFRoZXkncmUgbm90IHJlYWxseSAnbWFnaWMnLCB0aGV5IGp1c3QgaGFwcGVuIHRvIHdvcmsgd2VsbC5cbiAgLy8gY29uc3QgbSA9IDB4NWJkMWU5OTU7XG4gIC8vIGNvbnN0IHIgPSAyNDtcbiAgLy8gSW5pdGlhbGl6ZSB0aGUgaGFzaFxuICB2YXIgaCA9IDA7IC8vIE1peCA0IGJ5dGVzIGF0IGEgdGltZSBpbnRvIHRoZSBoYXNoXG5cbiAgdmFyIGssXG4gICAgICBpID0gMCxcbiAgICAgIGxlbiA9IHN0ci5sZW5ndGg7XG5cbiAgZm9yICg7IGxlbiA+PSA0OyArK2ksIGxlbiAtPSA0KSB7XG4gICAgayA9IHN0ci5jaGFyQ29kZUF0KGkpICYgMHhmZiB8IChzdHIuY2hhckNvZGVBdCgrK2kpICYgMHhmZikgPDwgOCB8IChzdHIuY2hhckNvZGVBdCgrK2kpICYgMHhmZikgPDwgMTYgfCAoc3RyLmNoYXJDb2RlQXQoKytpKSAmIDB4ZmYpIDw8IDI0O1xuICAgIGsgPVxuICAgIC8qIE1hdGguaW11bChrLCBtKTogKi9cbiAgICAoayAmIDB4ZmZmZikgKiAweDViZDFlOTk1ICsgKChrID4+PiAxNikgKiAweGU5OTUgPDwgMTYpO1xuICAgIGsgXj1cbiAgICAvKiBrID4+PiByOiAqL1xuICAgIGsgPj4+IDI0O1xuICAgIGggPVxuICAgIC8qIE1hdGguaW11bChrLCBtKTogKi9cbiAgICAoayAmIDB4ZmZmZikgKiAweDViZDFlOTk1ICsgKChrID4+PiAxNikgKiAweGU5OTUgPDwgMTYpIF5cbiAgICAvKiBNYXRoLmltdWwoaCwgbSk6ICovXG4gICAgKGggJiAweGZmZmYpICogMHg1YmQxZTk5NSArICgoaCA+Pj4gMTYpICogMHhlOTk1IDw8IDE2KTtcbiAgfSAvLyBIYW5kbGUgdGhlIGxhc3QgZmV3IGJ5dGVzIG9mIHRoZSBpbnB1dCBhcnJheVxuXG5cbiAgc3dpdGNoIChsZW4pIHtcbiAgICBjYXNlIDM6XG4gICAgICBoIF49IChzdHIuY2hhckNvZGVBdChpICsgMikgJiAweGZmKSA8PCAxNjtcblxuICAgIGNhc2UgMjpcbiAgICAgIGggXj0gKHN0ci5jaGFyQ29kZUF0KGkgKyAxKSAmIDB4ZmYpIDw8IDg7XG5cbiAgICBjYXNlIDE6XG4gICAgICBoIF49IHN0ci5jaGFyQ29kZUF0KGkpICYgMHhmZjtcbiAgICAgIGggPVxuICAgICAgLyogTWF0aC5pbXVsKGgsIG0pOiAqL1xuICAgICAgKGggJiAweGZmZmYpICogMHg1YmQxZTk5NSArICgoaCA+Pj4gMTYpICogMHhlOTk1IDw8IDE2KTtcbiAgfSAvLyBEbyBhIGZldyBmaW5hbCBtaXhlcyBvZiB0aGUgaGFzaCB0byBlbnN1cmUgdGhlIGxhc3QgZmV3XG4gIC8vIGJ5dGVzIGFyZSB3ZWxsLWluY29ycG9yYXRlZC5cblxuXG4gIGggXj0gaCA+Pj4gMTM7XG4gIGggPVxuICAvKiBNYXRoLmltdWwoaCwgbSk6ICovXG4gIChoICYgMHhmZmZmKSAqIDB4NWJkMWU5OTUgKyAoKGggPj4+IDE2KSAqIDB4ZTk5NSA8PCAxNik7XG4gIHJldHVybiAoKGggXiBoID4+PiAxNSkgPj4+IDApLnRvU3RyaW5nKDM2KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbXVybXVyMjtcbiIsImltcG9ydCBtZW1vaXplIGZyb20gJ0BlbW90aW9uL21lbW9pemUnO1xuXG52YXIgcmVhY3RQcm9wc1JlZ2V4ID0gL14oKGNoaWxkcmVufGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MfGtleXxyZWZ8YXV0b0ZvY3VzfGRlZmF1bHRWYWx1ZXxkZWZhdWx0Q2hlY2tlZHxpbm5lckhUTUx8c3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nfHN1cHByZXNzSHlkcmF0aW9uV2FybmluZ3x2YWx1ZUxpbmt8YWNjZXB0fGFjY2VwdENoYXJzZXR8YWNjZXNzS2V5fGFjdGlvbnxhbGxvd3xhbGxvd1VzZXJNZWRpYXxhbGxvd1BheW1lbnRSZXF1ZXN0fGFsbG93RnVsbFNjcmVlbnxhbGxvd1RyYW5zcGFyZW5jeXxhbHR8YXN5bmN8YXV0b0NvbXBsZXRlfGF1dG9QbGF5fGNhcHR1cmV8Y2VsbFBhZGRpbmd8Y2VsbFNwYWNpbmd8Y2hhbGxlbmdlfGNoYXJTZXR8Y2hlY2tlZHxjaXRlfGNsYXNzSUR8Y2xhc3NOYW1lfGNvbHN8Y29sU3Bhbnxjb250ZW50fGNvbnRlbnRFZGl0YWJsZXxjb250ZXh0TWVudXxjb250cm9sc3xjb250cm9sc0xpc3R8Y29vcmRzfGNyb3NzT3JpZ2lufGRhdGF8ZGF0ZVRpbWV8ZGVjb2Rpbmd8ZGVmYXVsdHxkZWZlcnxkaXJ8ZGlzYWJsZWR8ZGlzYWJsZVBpY3R1cmVJblBpY3R1cmV8ZG93bmxvYWR8ZHJhZ2dhYmxlfGVuY1R5cGV8Zm9ybXxmb3JtQWN0aW9ufGZvcm1FbmNUeXBlfGZvcm1NZXRob2R8Zm9ybU5vVmFsaWRhdGV8Zm9ybVRhcmdldHxmcmFtZUJvcmRlcnxoZWFkZXJzfGhlaWdodHxoaWRkZW58aGlnaHxocmVmfGhyZWZMYW5nfGh0bWxGb3J8aHR0cEVxdWl2fGlkfGlucHV0TW9kZXxpbnRlZ3JpdHl8aXN8a2V5UGFyYW1zfGtleVR5cGV8a2luZHxsYWJlbHxsYW5nfGxpc3R8bG9hZGluZ3xsb29wfGxvd3xtYXJnaW5IZWlnaHR8bWFyZ2luV2lkdGh8bWF4fG1heExlbmd0aHxtZWRpYXxtZWRpYUdyb3VwfG1ldGhvZHxtaW58bWluTGVuZ3RofG11bHRpcGxlfG11dGVkfG5hbWV8bm9uY2V8bm9WYWxpZGF0ZXxvcGVufG9wdGltdW18cGF0dGVybnxwbGFjZWhvbGRlcnxwbGF5c0lubGluZXxwb3N0ZXJ8cHJlbG9hZHxwcm9maWxlfHJhZGlvR3JvdXB8cmVhZE9ubHl8cmVmZXJyZXJQb2xpY3l8cmVsfHJlcXVpcmVkfHJldmVyc2VkfHJvbGV8cm93c3xyb3dTcGFufHNhbmRib3h8c2NvcGV8c2NvcGVkfHNjcm9sbGluZ3xzZWFtbGVzc3xzZWxlY3RlZHxzaGFwZXxzaXplfHNpemVzfHNsb3R8c3BhbnxzcGVsbENoZWNrfHNyY3xzcmNEb2N8c3JjTGFuZ3xzcmNTZXR8c3RhcnR8c3RlcHxzdHlsZXxzdW1tYXJ5fHRhYkluZGV4fHRhcmdldHx0aXRsZXx0eXBlfHVzZU1hcHx2YWx1ZXx3aWR0aHx3bW9kZXx3cmFwfGFib3V0fGRhdGF0eXBlfGlubGlzdHxwcmVmaXh8cHJvcGVydHl8cmVzb3VyY2V8dHlwZW9mfHZvY2FifGF1dG9DYXBpdGFsaXplfGF1dG9Db3JyZWN0fGF1dG9TYXZlfGNvbG9yfGluZXJ0fGl0ZW1Qcm9wfGl0ZW1TY29wZXxpdGVtVHlwZXxpdGVtSUR8aXRlbVJlZnxvbnxyZXN1bHRzfHNlY3VyaXR5fHVuc2VsZWN0YWJsZXxhY2NlbnRIZWlnaHR8YWNjdW11bGF0ZXxhZGRpdGl2ZXxhbGlnbm1lbnRCYXNlbGluZXxhbGxvd1Jlb3JkZXJ8YWxwaGFiZXRpY3xhbXBsaXR1ZGV8YXJhYmljRm9ybXxhc2NlbnR8YXR0cmlidXRlTmFtZXxhdHRyaWJ1dGVUeXBlfGF1dG9SZXZlcnNlfGF6aW11dGh8YmFzZUZyZXF1ZW5jeXxiYXNlbGluZVNoaWZ0fGJhc2VQcm9maWxlfGJib3h8YmVnaW58Ymlhc3xieXxjYWxjTW9kZXxjYXBIZWlnaHR8Y2xpcHxjbGlwUGF0aFVuaXRzfGNsaXBQYXRofGNsaXBSdWxlfGNvbG9ySW50ZXJwb2xhdGlvbnxjb2xvckludGVycG9sYXRpb25GaWx0ZXJzfGNvbG9yUHJvZmlsZXxjb2xvclJlbmRlcmluZ3xjb250ZW50U2NyaXB0VHlwZXxjb250ZW50U3R5bGVUeXBlfGN1cnNvcnxjeHxjeXxkfGRlY2VsZXJhdGV8ZGVzY2VudHxkaWZmdXNlQ29uc3RhbnR8ZGlyZWN0aW9ufGRpc3BsYXl8ZGl2aXNvcnxkb21pbmFudEJhc2VsaW5lfGR1cnxkeHxkeXxlZGdlTW9kZXxlbGV2YXRpb258ZW5hYmxlQmFja2dyb3VuZHxlbmR8ZXhwb25lbnR8ZXh0ZXJuYWxSZXNvdXJjZXNSZXF1aXJlZHxmaWxsfGZpbGxPcGFjaXR5fGZpbGxSdWxlfGZpbHRlcnxmaWx0ZXJSZXN8ZmlsdGVyVW5pdHN8Zmxvb2RDb2xvcnxmbG9vZE9wYWNpdHl8Zm9jdXNhYmxlfGZvbnRGYW1pbHl8Zm9udFNpemV8Zm9udFNpemVBZGp1c3R8Zm9udFN0cmV0Y2h8Zm9udFN0eWxlfGZvbnRWYXJpYW50fGZvbnRXZWlnaHR8Zm9ybWF0fGZyb218ZnJ8Znh8Znl8ZzF8ZzJ8Z2x5cGhOYW1lfGdseXBoT3JpZW50YXRpb25Ib3Jpem9udGFsfGdseXBoT3JpZW50YXRpb25WZXJ0aWNhbHxnbHlwaFJlZnxncmFkaWVudFRyYW5zZm9ybXxncmFkaWVudFVuaXRzfGhhbmdpbmd8aG9yaXpBZHZYfGhvcml6T3JpZ2luWHxpZGVvZ3JhcGhpY3xpbWFnZVJlbmRlcmluZ3xpbnxpbjJ8aW50ZXJjZXB0fGt8azF8azJ8azN8azR8a2VybmVsTWF0cml4fGtlcm5lbFVuaXRMZW5ndGh8a2VybmluZ3xrZXlQb2ludHN8a2V5U3BsaW5lc3xrZXlUaW1lc3xsZW5ndGhBZGp1c3R8bGV0dGVyU3BhY2luZ3xsaWdodGluZ0NvbG9yfGxpbWl0aW5nQ29uZUFuZ2xlfGxvY2FsfG1hcmtlckVuZHxtYXJrZXJNaWR8bWFya2VyU3RhcnR8bWFya2VySGVpZ2h0fG1hcmtlclVuaXRzfG1hcmtlcldpZHRofG1hc2t8bWFza0NvbnRlbnRVbml0c3xtYXNrVW5pdHN8bWF0aGVtYXRpY2FsfG1vZGV8bnVtT2N0YXZlc3xvZmZzZXR8b3BhY2l0eXxvcGVyYXRvcnxvcmRlcnxvcmllbnR8b3JpZW50YXRpb258b3JpZ2lufG92ZXJmbG93fG92ZXJsaW5lUG9zaXRpb258b3ZlcmxpbmVUaGlja25lc3N8cGFub3NlMXxwYWludE9yZGVyfHBhdGhMZW5ndGh8cGF0dGVybkNvbnRlbnRVbml0c3xwYXR0ZXJuVHJhbnNmb3JtfHBhdHRlcm5Vbml0c3xwb2ludGVyRXZlbnRzfHBvaW50c3xwb2ludHNBdFh8cG9pbnRzQXRZfHBvaW50c0F0WnxwcmVzZXJ2ZUFscGhhfHByZXNlcnZlQXNwZWN0UmF0aW98cHJpbWl0aXZlVW5pdHN8cnxyYWRpdXN8cmVmWHxyZWZZfHJlbmRlcmluZ0ludGVudHxyZXBlYXRDb3VudHxyZXBlYXREdXJ8cmVxdWlyZWRFeHRlbnNpb25zfHJlcXVpcmVkRmVhdHVyZXN8cmVzdGFydHxyZXN1bHR8cm90YXRlfHJ4fHJ5fHNjYWxlfHNlZWR8c2hhcGVSZW5kZXJpbmd8c2xvcGV8c3BhY2luZ3xzcGVjdWxhckNvbnN0YW50fHNwZWN1bGFyRXhwb25lbnR8c3BlZWR8c3ByZWFkTWV0aG9kfHN0YXJ0T2Zmc2V0fHN0ZERldmlhdGlvbnxzdGVtaHxzdGVtdnxzdGl0Y2hUaWxlc3xzdG9wQ29sb3J8c3RvcE9wYWNpdHl8c3RyaWtldGhyb3VnaFBvc2l0aW9ufHN0cmlrZXRocm91Z2hUaGlja25lc3N8c3RyaW5nfHN0cm9rZXxzdHJva2VEYXNoYXJyYXl8c3Ryb2tlRGFzaG9mZnNldHxzdHJva2VMaW5lY2FwfHN0cm9rZUxpbmVqb2lufHN0cm9rZU1pdGVybGltaXR8c3Ryb2tlT3BhY2l0eXxzdHJva2VXaWR0aHxzdXJmYWNlU2NhbGV8c3lzdGVtTGFuZ3VhZ2V8dGFibGVWYWx1ZXN8dGFyZ2V0WHx0YXJnZXRZfHRleHRBbmNob3J8dGV4dERlY29yYXRpb258dGV4dFJlbmRlcmluZ3x0ZXh0TGVuZ3RofHRvfHRyYW5zZm9ybXx1MXx1Mnx1bmRlcmxpbmVQb3NpdGlvbnx1bmRlcmxpbmVUaGlja25lc3N8dW5pY29kZXx1bmljb2RlQmlkaXx1bmljb2RlUmFuZ2V8dW5pdHNQZXJFbXx2QWxwaGFiZXRpY3x2SGFuZ2luZ3x2SWRlb2dyYXBoaWN8dk1hdGhlbWF0aWNhbHx2YWx1ZXN8dmVjdG9yRWZmZWN0fHZlcnNpb258dmVydEFkdll8dmVydE9yaWdpblh8dmVydE9yaWdpbll8dmlld0JveHx2aWV3VGFyZ2V0fHZpc2liaWxpdHl8d2lkdGhzfHdvcmRTcGFjaW5nfHdyaXRpbmdNb2RlfHh8eEhlaWdodHx4MXx4Mnx4Q2hhbm5lbFNlbGVjdG9yfHhsaW5rQWN0dWF0ZXx4bGlua0FyY3JvbGV8eGxpbmtIcmVmfHhsaW5rUm9sZXx4bGlua1Nob3d8eGxpbmtUaXRsZXx4bGlua1R5cGV8eG1sQmFzZXx4bWxuc3x4bWxuc1hsaW5rfHhtbExhbmd8eG1sU3BhY2V8eXx5MXx5Mnx5Q2hhbm5lbFNlbGVjdG9yfHp8em9vbUFuZFBhbnxmb3J8Y2xhc3N8YXV0b2ZvY3VzKXwoKFtEZF1bQWFdW1R0XVtBYV18W0FhXVtScl1bSWldW0FhXXx4KS0uKikpJC87IC8vIGh0dHBzOi8vZXNiZW5jaC5jb20vYmVuY2gvNWJmZWU2OGE0Y2Q3ZTYwMDllZjYxZDIzXG5cbnZhciBpbmRleCA9IG1lbW9pemUoZnVuY3Rpb24gKHByb3ApIHtcbiAgcmV0dXJuIHJlYWN0UHJvcHNSZWdleC50ZXN0KHByb3ApIHx8IHByb3AuY2hhckNvZGVBdCgwKSA9PT0gMTExXG4gIC8qIG8gKi9cbiAgJiYgcHJvcC5jaGFyQ29kZUF0KDEpID09PSAxMTBcbiAgLyogbiAqL1xuICAmJiBwcm9wLmNoYXJDb2RlQXQoMikgPCA5MTtcbn1cbi8qIForMSAqL1xuKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG4iLCJmdW5jdGlvbiBtZW1vaXplKGZuKSB7XG4gIHZhciBjYWNoZSA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gKGFyZykge1xuICAgIGlmIChjYWNoZVthcmddID09PSB1bmRlZmluZWQpIGNhY2hlW2FyZ10gPSBmbihhcmcpO1xuICAgIHJldHVybiBjYWNoZVthcmddO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBtZW1vaXplO1xuIiwiaW1wb3J0IGhhc2hTdHJpbmcgZnJvbSAnQGVtb3Rpb24vaGFzaCc7XG5pbXBvcnQgdW5pdGxlc3MgZnJvbSAnQGVtb3Rpb24vdW5pdGxlc3MnO1xuaW1wb3J0IG1lbW9pemUgZnJvbSAnQGVtb3Rpb24vbWVtb2l6ZSc7XG5cbnZhciBJTExFR0FMX0VTQ0FQRV9TRVFVRU5DRV9FUlJPUiA9IFwiWW91IGhhdmUgaWxsZWdhbCBlc2NhcGUgc2VxdWVuY2UgaW4geW91ciB0ZW1wbGF0ZSBsaXRlcmFsLCBtb3N0IGxpa2VseSBpbnNpZGUgY29udGVudCdzIHByb3BlcnR5IHZhbHVlLlxcbkJlY2F1c2UgeW91IHdyaXRlIHlvdXIgQ1NTIGluc2lkZSBhIEphdmFTY3JpcHQgc3RyaW5nIHlvdSBhY3R1YWxseSBoYXZlIHRvIGRvIGRvdWJsZSBlc2NhcGluZywgc28gZm9yIGV4YW1wbGUgXFxcImNvbnRlbnQ6ICdcXFxcMDBkNyc7XFxcIiBzaG91bGQgYmVjb21lIFxcXCJjb250ZW50OiAnXFxcXFxcXFwwMGQ3JztcXFwiLlxcbllvdSBjYW4gcmVhZCBtb3JlIGFib3V0IHRoaXMgaGVyZTpcXG5odHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9UZW1wbGF0ZV9saXRlcmFscyNFUzIwMThfcmV2aXNpb25fb2ZfaWxsZWdhbF9lc2NhcGVfc2VxdWVuY2VzXCI7XG52YXIgVU5ERUZJTkVEX0FTX09CSkVDVF9LRVlfRVJST1IgPSBcIllvdSBoYXZlIHBhc3NlZCBpbiBmYWxzeSB2YWx1ZSBhcyBzdHlsZSBvYmplY3QncyBrZXkgKGNhbiBoYXBwZW4gd2hlbiBpbiBleGFtcGxlIHlvdSBwYXNzIHVuZXhwb3J0ZWQgY29tcG9uZW50IGFzIGNvbXB1dGVkIGtleSkuXCI7XG52YXIgaHlwaGVuYXRlUmVnZXggPSAvW0EtWl18Xm1zL2c7XG52YXIgYW5pbWF0aW9uUmVnZXggPSAvX0VNT18oW15fXSs/KV8oW15dKj8pX0VNT18vZztcblxudmFyIGlzQ3VzdG9tUHJvcGVydHkgPSBmdW5jdGlvbiBpc0N1c3RvbVByb3BlcnR5KHByb3BlcnR5KSB7XG4gIHJldHVybiBwcm9wZXJ0eS5jaGFyQ29kZUF0KDEpID09PSA0NTtcbn07XG5cbnZhciBpc1Byb2Nlc3NhYmxlVmFsdWUgPSBmdW5jdGlvbiBpc1Byb2Nlc3NhYmxlVmFsdWUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlICE9PSAnYm9vbGVhbic7XG59O1xuXG52YXIgcHJvY2Vzc1N0eWxlTmFtZSA9IG1lbW9pemUoZnVuY3Rpb24gKHN0eWxlTmFtZSkge1xuICByZXR1cm4gaXNDdXN0b21Qcm9wZXJ0eShzdHlsZU5hbWUpID8gc3R5bGVOYW1lIDogc3R5bGVOYW1lLnJlcGxhY2UoaHlwaGVuYXRlUmVnZXgsICctJCYnKS50b0xvd2VyQ2FzZSgpO1xufSk7XG5cbnZhciBwcm9jZXNzU3R5bGVWYWx1ZSA9IGZ1bmN0aW9uIHByb2Nlc3NTdHlsZVZhbHVlKGtleSwgdmFsdWUpIHtcbiAgc3dpdGNoIChrZXkpIHtcbiAgICBjYXNlICdhbmltYXRpb24nOlxuICAgIGNhc2UgJ2FuaW1hdGlvbk5hbWUnOlxuICAgICAge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKGFuaW1hdGlvblJlZ2V4LCBmdW5jdGlvbiAobWF0Y2gsIHAxLCBwMikge1xuICAgICAgICAgICAgY3Vyc29yID0ge1xuICAgICAgICAgICAgICBuYW1lOiBwMSxcbiAgICAgICAgICAgICAgc3R5bGVzOiBwMixcbiAgICAgICAgICAgICAgbmV4dDogY3Vyc29yXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIHAxO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gIH1cblxuICBpZiAodW5pdGxlc3Nba2V5XSAhPT0gMSAmJiAhaXNDdXN0b21Qcm9wZXJ0eShrZXkpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgdmFsdWUgIT09IDApIHtcbiAgICByZXR1cm4gdmFsdWUgKyAncHgnO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIGNvbnRlbnRWYWx1ZVBhdHRlcm4gPSAvKGF0dHJ8Y2FsY3xjb3VudGVycz98dXJsKVxcKC87XG4gIHZhciBjb250ZW50VmFsdWVzID0gWydub3JtYWwnLCAnbm9uZScsICdjb3VudGVyJywgJ29wZW4tcXVvdGUnLCAnY2xvc2UtcXVvdGUnLCAnbm8tb3Blbi1xdW90ZScsICduby1jbG9zZS1xdW90ZScsICdpbml0aWFsJywgJ2luaGVyaXQnLCAndW5zZXQnXTtcbiAgdmFyIG9sZFByb2Nlc3NTdHlsZVZhbHVlID0gcHJvY2Vzc1N0eWxlVmFsdWU7XG4gIHZhciBtc1BhdHRlcm4gPSAvXi1tcy0vO1xuICB2YXIgaHlwaGVuUGF0dGVybiA9IC8tKC4pL2c7XG4gIHZhciBoeXBoZW5hdGVkQ2FjaGUgPSB7fTtcblxuICBwcm9jZXNzU3R5bGVWYWx1ZSA9IGZ1bmN0aW9uIHByb2Nlc3NTdHlsZVZhbHVlKGtleSwgdmFsdWUpIHtcbiAgICBpZiAoa2V5ID09PSAnY29udGVudCcpIHtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnIHx8IGNvbnRlbnRWYWx1ZXMuaW5kZXhPZih2YWx1ZSkgPT09IC0xICYmICFjb250ZW50VmFsdWVQYXR0ZXJuLnRlc3QodmFsdWUpICYmICh2YWx1ZS5jaGFyQXQoMCkgIT09IHZhbHVlLmNoYXJBdCh2YWx1ZS5sZW5ndGggLSAxKSB8fCB2YWx1ZS5jaGFyQXQoMCkgIT09ICdcIicgJiYgdmFsdWUuY2hhckF0KDApICE9PSBcIidcIikpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIllvdSBzZWVtIHRvIGJlIHVzaW5nIGEgdmFsdWUgZm9yICdjb250ZW50JyB3aXRob3V0IHF1b3RlcywgdHJ5IHJlcGxhY2luZyBpdCB3aXRoIGBjb250ZW50OiAnXFxcIlwiICsgdmFsdWUgKyBcIlxcXCInYFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJvY2Vzc2VkID0gb2xkUHJvY2Vzc1N0eWxlVmFsdWUoa2V5LCB2YWx1ZSk7XG5cbiAgICBpZiAocHJvY2Vzc2VkICE9PSAnJyAmJiAhaXNDdXN0b21Qcm9wZXJ0eShrZXkpICYmIGtleS5pbmRleE9mKCctJykgIT09IC0xICYmIGh5cGhlbmF0ZWRDYWNoZVtrZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGh5cGhlbmF0ZWRDYWNoZVtrZXldID0gdHJ1ZTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJVc2luZyBrZWJhYi1jYXNlIGZvciBjc3MgcHJvcGVydGllcyBpbiBvYmplY3RzIGlzIG5vdCBzdXBwb3J0ZWQuIERpZCB5b3UgbWVhbiBcIiArIGtleS5yZXBsYWNlKG1zUGF0dGVybiwgJ21zLScpLnJlcGxhY2UoaHlwaGVuUGF0dGVybiwgZnVuY3Rpb24gKHN0ciwgX2NoYXIpIHtcbiAgICAgICAgcmV0dXJuIF9jaGFyLnRvVXBwZXJDYXNlKCk7XG4gICAgICB9KSArIFwiP1wiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvY2Vzc2VkO1xuICB9O1xufVxuXG52YXIgc2hvdWxkV2FybkFib3V0SW50ZXJwb2xhdGluZ0NsYXNzTmFtZUZyb21Dc3MgPSB0cnVlO1xuXG5mdW5jdGlvbiBoYW5kbGVJbnRlcnBvbGF0aW9uKG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCBpbnRlcnBvbGF0aW9uLCBjb3VsZEJlU2VsZWN0b3JJbnRlcnBvbGF0aW9uKSB7XG4gIGlmIChpbnRlcnBvbGF0aW9uID09IG51bGwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAoaW50ZXJwb2xhdGlvbi5fX2Vtb3Rpb25fc3R5bGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBpbnRlcnBvbGF0aW9uLnRvU3RyaW5nKCkgPT09ICdOT19DT01QT05FTlRfU0VMRUNUT1InKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbXBvbmVudCBzZWxlY3RvcnMgY2FuIG9ubHkgYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGJhYmVsLXBsdWdpbi1lbW90aW9uLicpO1xuICAgIH1cblxuICAgIHJldHVybiBpbnRlcnBvbGF0aW9uO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlb2YgaW50ZXJwb2xhdGlvbikge1xuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG5cbiAgICBjYXNlICdvYmplY3QnOlxuICAgICAge1xuICAgICAgICBpZiAoaW50ZXJwb2xhdGlvbi5hbmltID09PSAxKSB7XG4gICAgICAgICAgY3Vyc29yID0ge1xuICAgICAgICAgICAgbmFtZTogaW50ZXJwb2xhdGlvbi5uYW1lLFxuICAgICAgICAgICAgc3R5bGVzOiBpbnRlcnBvbGF0aW9uLnN0eWxlcyxcbiAgICAgICAgICAgIG5leHQ6IGN1cnNvclxuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIGludGVycG9sYXRpb24ubmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbnRlcnBvbGF0aW9uLnN0eWxlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdmFyIG5leHQgPSBpbnRlcnBvbGF0aW9uLm5leHQ7XG5cbiAgICAgICAgICBpZiAobmV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBub3QgdGhlIG1vc3QgZWZmaWNpZW50IHRoaW5nIGV2ZXIgYnV0IHRoaXMgaXMgYSBwcmV0dHkgcmFyZSBjYXNlXG4gICAgICAgICAgICAvLyBhbmQgdGhlcmUgd2lsbCBiZSB2ZXJ5IGZldyBpdGVyYXRpb25zIG9mIHRoaXMgZ2VuZXJhbGx5XG4gICAgICAgICAgICB3aGlsZSAobmV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGN1cnNvciA9IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuZXh0Lm5hbWUsXG4gICAgICAgICAgICAgICAgc3R5bGVzOiBuZXh0LnN0eWxlcyxcbiAgICAgICAgICAgICAgICBuZXh0OiBjdXJzb3JcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgbmV4dCA9IG5leHQubmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgc3R5bGVzID0gaW50ZXJwb2xhdGlvbi5zdHlsZXMgKyBcIjtcIjtcblxuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGludGVycG9sYXRpb24ubWFwICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHN0eWxlcyArPSBpbnRlcnBvbGF0aW9uLm1hcDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gc3R5bGVzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNyZWF0ZVN0cmluZ0Zyb21PYmplY3QobWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIGludGVycG9sYXRpb24pO1xuICAgICAgfVxuXG4gICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAge1xuICAgICAgICBpZiAobWVyZ2VkUHJvcHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHZhciBwcmV2aW91c0N1cnNvciA9IGN1cnNvcjtcbiAgICAgICAgICB2YXIgcmVzdWx0ID0gaW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcyk7XG4gICAgICAgICAgY3Vyc29yID0gcHJldmlvdXNDdXJzb3I7XG4gICAgICAgICAgcmV0dXJuIGhhbmRsZUludGVycG9sYXRpb24obWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIHJlc3VsdCwgY291bGRCZVNlbGVjdG9ySW50ZXJwb2xhdGlvbik7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Z1bmN0aW9ucyB0aGF0IGFyZSBpbnRlcnBvbGF0ZWQgaW4gY3NzIGNhbGxzIHdpbGwgYmUgc3RyaW5naWZpZWQuXFxuJyArICdJZiB5b3Ugd2FudCB0byBoYXZlIGEgY3NzIGNhbGwgYmFzZWQgb24gcHJvcHMsIGNyZWF0ZSBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIGNzcyBjYWxsIGxpa2UgdGhpc1xcbicgKyAnbGV0IGR5bmFtaWNTdHlsZSA9IChwcm9wcykgPT4gY3NzYGNvbG9yOiAke3Byb3BzLmNvbG9yfWBcXG4nICsgJ0l0IGNhbiBiZSBjYWxsZWQgZGlyZWN0bHkgd2l0aCBwcm9wcyBvciBpbnRlcnBvbGF0ZWQgaW4gYSBzdHlsZWQgY2FsbCBsaWtlIHRoaXNcXG4nICsgXCJsZXQgU29tZUNvbXBvbmVudCA9IHN0eWxlZCgnZGl2JylgJHtkeW5hbWljU3R5bGV9YFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHZhciBtYXRjaGVkID0gW107XG4gICAgICAgIHZhciByZXBsYWNlZCA9IGludGVycG9sYXRpb24ucmVwbGFjZShhbmltYXRpb25SZWdleCwgZnVuY3Rpb24gKG1hdGNoLCBwMSwgcDIpIHtcbiAgICAgICAgICB2YXIgZmFrZVZhck5hbWUgPSBcImFuaW1hdGlvblwiICsgbWF0Y2hlZC5sZW5ndGg7XG4gICAgICAgICAgbWF0Y2hlZC5wdXNoKFwiY29uc3QgXCIgKyBmYWtlVmFyTmFtZSArIFwiID0ga2V5ZnJhbWVzYFwiICsgcDIucmVwbGFjZSgvXkBrZXlmcmFtZXMgYW5pbWF0aW9uLVxcdysvLCAnJykgKyBcImBcIik7XG4gICAgICAgICAgcmV0dXJuIFwiJHtcIiArIGZha2VWYXJOYW1lICsgXCJ9XCI7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChtYXRjaGVkLmxlbmd0aCkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2BrZXlmcmFtZXNgIG91dHB1dCBnb3QgaW50ZXJwb2xhdGVkIGludG8gcGxhaW4gc3RyaW5nLCBwbGVhc2Ugd3JhcCBpdCB3aXRoIGBjc3NgLlxcblxcbicgKyAnSW5zdGVhZCBvZiBkb2luZyB0aGlzOlxcblxcbicgKyBbXS5jb25jYXQobWF0Y2hlZCwgW1wiYFwiICsgcmVwbGFjZWQgKyBcImBcIl0pLmpvaW4oJ1xcbicpICsgJ1xcblxcbllvdSBzaG91bGQgd3JhcCBpdCB3aXRoIGBjc3NgIGxpa2UgdGhpczpcXG5cXG4nICsgKFwiY3NzYFwiICsgcmVwbGFjZWQgKyBcImBcIikpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICB9IC8vIGZpbmFsaXplIHN0cmluZyB2YWx1ZXMgKHJlZ3VsYXIgc3RyaW5ncyBhbmQgZnVuY3Rpb25zIGludGVycG9sYXRlZCBpbnRvIGNzcyBjYWxscylcblxuXG4gIGlmIChyZWdpc3RlcmVkID09IG51bGwpIHtcbiAgICByZXR1cm4gaW50ZXJwb2xhdGlvbjtcbiAgfVxuXG4gIHZhciBjYWNoZWQgPSByZWdpc3RlcmVkW2ludGVycG9sYXRpb25dO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGNvdWxkQmVTZWxlY3RvckludGVycG9sYXRpb24gJiYgc2hvdWxkV2FybkFib3V0SW50ZXJwb2xhdGluZ0NsYXNzTmFtZUZyb21Dc3MgJiYgY2FjaGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zb2xlLmVycm9yKCdJbnRlcnBvbGF0aW5nIGEgY2xhc3NOYW1lIGZyb20gY3NzYGAgaXMgbm90IHJlY29tbWVuZGVkIGFuZCB3aWxsIGNhdXNlIHByb2JsZW1zIHdpdGggY29tcG9zaXRpb24uXFxuJyArICdJbnRlcnBvbGF0aW5nIGEgY2xhc3NOYW1lIGZyb20gY3NzYGAgd2lsbCBiZSBjb21wbGV0ZWx5IHVuc3VwcG9ydGVkIGluIGEgZnV0dXJlIG1ham9yIHZlcnNpb24gb2YgRW1vdGlvbicpO1xuICAgIHNob3VsZFdhcm5BYm91dEludGVycG9sYXRpbmdDbGFzc05hbWVGcm9tQ3NzID0gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gY2FjaGVkICE9PSB1bmRlZmluZWQgJiYgIWNvdWxkQmVTZWxlY3RvckludGVycG9sYXRpb24gPyBjYWNoZWQgOiBpbnRlcnBvbGF0aW9uO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHJpbmdGcm9tT2JqZWN0KG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCBvYmopIHtcbiAgdmFyIHN0cmluZyA9ICcnO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iai5sZW5ndGg7IGkrKykge1xuICAgICAgc3RyaW5nICs9IGhhbmRsZUludGVycG9sYXRpb24obWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIG9ialtpXSwgZmFsc2UpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKHZhciBfa2V5IGluIG9iaikge1xuICAgICAgdmFyIHZhbHVlID0gb2JqW19rZXldO1xuXG4gICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBpZiAocmVnaXN0ZXJlZCAhPSBudWxsICYmIHJlZ2lzdGVyZWRbdmFsdWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBzdHJpbmcgKz0gX2tleSArIFwie1wiICsgcmVnaXN0ZXJlZFt2YWx1ZV0gKyBcIn1cIjtcbiAgICAgICAgfSBlbHNlIGlmIChpc1Byb2Nlc3NhYmxlVmFsdWUodmFsdWUpKSB7XG4gICAgICAgICAgc3RyaW5nICs9IHByb2Nlc3NTdHlsZU5hbWUoX2tleSkgKyBcIjpcIiArIHByb2Nlc3NTdHlsZVZhbHVlKF9rZXksIHZhbHVlKSArIFwiO1wiO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoX2tleSA9PT0gJ05PX0NPTVBPTkVOVF9TRUxFQ1RPUicgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ29tcG9uZW50IHNlbGVjdG9ycyBjYW4gb25seSBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYmFiZWwtcGx1Z2luLWVtb3Rpb24uJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdHlwZW9mIHZhbHVlWzBdID09PSAnc3RyaW5nJyAmJiAocmVnaXN0ZXJlZCA9PSBudWxsIHx8IHJlZ2lzdGVyZWRbdmFsdWVbMF1dID09PSB1bmRlZmluZWQpKSB7XG4gICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHZhbHVlLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgaWYgKGlzUHJvY2Vzc2FibGVWYWx1ZSh2YWx1ZVtfaV0pKSB7XG4gICAgICAgICAgICAgIHN0cmluZyArPSBwcm9jZXNzU3R5bGVOYW1lKF9rZXkpICsgXCI6XCIgKyBwcm9jZXNzU3R5bGVWYWx1ZShfa2V5LCB2YWx1ZVtfaV0pICsgXCI7XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBpbnRlcnBvbGF0ZWQgPSBoYW5kbGVJbnRlcnBvbGF0aW9uKG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCB2YWx1ZSwgZmFsc2UpO1xuXG4gICAgICAgICAgc3dpdGNoIChfa2V5KSB7XG4gICAgICAgICAgICBjYXNlICdhbmltYXRpb24nOlxuICAgICAgICAgICAgY2FzZSAnYW5pbWF0aW9uTmFtZSc6XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gcHJvY2Vzc1N0eWxlTmFtZShfa2V5KSArIFwiOlwiICsgaW50ZXJwb2xhdGVkICsgXCI7XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIF9rZXkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFVOREVGSU5FRF9BU19PQkpFQ1RfS0VZX0VSUk9SKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gX2tleSArIFwie1wiICsgaW50ZXJwb2xhdGVkICsgXCJ9XCI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG52YXIgbGFiZWxQYXR0ZXJuID0gL2xhYmVsOlxccyooW15cXHM7XFxue10rKVxccyo7L2c7XG52YXIgc291cmNlTWFwUGF0dGVybjtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgc291cmNlTWFwUGF0dGVybiA9IC9cXC9cXCojXFxzc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uXFwvanNvbjtcXFMrXFxzK1xcKlxcLy87XG59IC8vIHRoaXMgaXMgdGhlIGN1cnNvciBmb3Iga2V5ZnJhbWVzXG4vLyBrZXlmcmFtZXMgYXJlIHN0b3JlZCBvbiB0aGUgU2VyaWFsaXplZFN0eWxlcyBvYmplY3QgYXMgYSBsaW5rZWQgbGlzdFxuXG5cbnZhciBjdXJzb3I7XG52YXIgc2VyaWFsaXplU3R5bGVzID0gZnVuY3Rpb24gc2VyaWFsaXplU3R5bGVzKGFyZ3MsIHJlZ2lzdGVyZWQsIG1lcmdlZFByb3BzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA9PT0gMSAmJiB0eXBlb2YgYXJnc1swXSA9PT0gJ29iamVjdCcgJiYgYXJnc1swXSAhPT0gbnVsbCAmJiBhcmdzWzBdLnN0eWxlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGFyZ3NbMF07XG4gIH1cblxuICB2YXIgc3RyaW5nTW9kZSA9IHRydWU7XG4gIHZhciBzdHlsZXMgPSAnJztcbiAgY3Vyc29yID0gdW5kZWZpbmVkO1xuICB2YXIgc3RyaW5ncyA9IGFyZ3NbMF07XG5cbiAgaWYgKHN0cmluZ3MgPT0gbnVsbCB8fCBzdHJpbmdzLnJhdyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgc3RyaW5nTW9kZSA9IGZhbHNlO1xuICAgIHN0eWxlcyArPSBoYW5kbGVJbnRlcnBvbGF0aW9uKG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCBzdHJpbmdzLCBmYWxzZSk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgc3RyaW5nc1swXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zb2xlLmVycm9yKElMTEVHQUxfRVNDQVBFX1NFUVVFTkNFX0VSUk9SKTtcbiAgICB9XG5cbiAgICBzdHlsZXMgKz0gc3RyaW5nc1swXTtcbiAgfSAvLyB3ZSBzdGFydCBhdCAxIHNpbmNlIHdlJ3ZlIGFscmVhZHkgaGFuZGxlZCB0aGUgZmlyc3QgYXJnXG5cblxuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICBzdHlsZXMgKz0gaGFuZGxlSW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgYXJnc1tpXSwgc3R5bGVzLmNoYXJDb2RlQXQoc3R5bGVzLmxlbmd0aCAtIDEpID09PSA0Nik7XG5cbiAgICBpZiAoc3RyaW5nTW9kZSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgc3RyaW5nc1tpXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoSUxMRUdBTF9FU0NBUEVfU0VRVUVOQ0VfRVJST1IpO1xuICAgICAgfVxuXG4gICAgICBzdHlsZXMgKz0gc3RyaW5nc1tpXTtcbiAgICB9XG4gIH1cblxuICB2YXIgc291cmNlTWFwO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgc3R5bGVzID0gc3R5bGVzLnJlcGxhY2Uoc291cmNlTWFwUGF0dGVybiwgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICBzb3VyY2VNYXAgPSBtYXRjaDtcbiAgICAgIHJldHVybiAnJztcbiAgICB9KTtcbiAgfSAvLyB1c2luZyBhIGdsb2JhbCByZWdleCB3aXRoIC5leGVjIGlzIHN0YXRlZnVsIHNvIGxhc3RJbmRleCBoYXMgdG8gYmUgcmVzZXQgZWFjaCB0aW1lXG5cblxuICBsYWJlbFBhdHRlcm4ubGFzdEluZGV4ID0gMDtcbiAgdmFyIGlkZW50aWZpZXJOYW1lID0gJyc7XG4gIHZhciBtYXRjaDsgLy8gaHR0cHM6Ly9lc2JlbmNoLmNvbS9iZW5jaC81YjgwOWMyY2YyOTQ5ODAwYTBmNjFmYjVcblxuICB3aGlsZSAoKG1hdGNoID0gbGFiZWxQYXR0ZXJuLmV4ZWMoc3R5bGVzKSkgIT09IG51bGwpIHtcbiAgICBpZGVudGlmaWVyTmFtZSArPSAnLScgKyAvLyAkRmxvd0ZpeE1lIHdlIGtub3cgaXQncyBub3QgbnVsbFxuICAgIG1hdGNoWzFdO1xuICB9XG5cbiAgdmFyIG5hbWUgPSBoYXNoU3RyaW5nKHN0eWxlcykgKyBpZGVudGlmaWVyTmFtZTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIC8vICRGbG93Rml4TWUgU2VyaWFsaXplZFN0eWxlcyB0eXBlIGRvZXNuJ3QgaGF2ZSB0b1N0cmluZyBwcm9wZXJ0eSAoYW5kIHdlIGRvbid0IHdhbnQgdG8gYWRkIGl0KVxuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgc3R5bGVzOiBzdHlsZXMsXG4gICAgICBtYXA6IHNvdXJjZU1hcCxcbiAgICAgIG5leHQ6IGN1cnNvcixcbiAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIFwiWW91IGhhdmUgdHJpZWQgdG8gc3RyaW5naWZ5IG9iamVjdCByZXR1cm5lZCBmcm9tIGBjc3NgIGZ1bmN0aW9uLiBJdCBpc24ndCBzdXBwb3NlZCB0byBiZSB1c2VkIGRpcmVjdGx5IChlLmcuIGFzIHZhbHVlIG9mIHRoZSBgY2xhc3NOYW1lYCBwcm9wKSwgYnV0IHJhdGhlciBoYW5kZWQgdG8gZW1vdGlvbiBzbyBpdCBjYW4gaGFuZGxlIGl0IChlLmcuIGFzIHZhbHVlIG9mIGBjc3NgIHByb3ApLlwiO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5hbWU6IG5hbWUsXG4gICAgc3R5bGVzOiBzdHlsZXMsXG4gICAgbmV4dDogY3Vyc29yXG4gIH07XG59O1xuXG5leHBvcnQgeyBzZXJpYWxpemVTdHlsZXMgfTtcbiIsIi8qXG5cbkJhc2VkIG9mZiBnbGFtb3IncyBTdHlsZVNoZWV0LCB0aGFua3MgU3VuaWwg4p2k77iPXG5cbmhpZ2ggcGVyZm9ybWFuY2UgU3R5bGVTaGVldCBmb3IgY3NzLWluLWpzIHN5c3RlbXNcblxuLSB1c2VzIG11bHRpcGxlIHN0eWxlIHRhZ3MgYmVoaW5kIHRoZSBzY2VuZXMgZm9yIG1pbGxpb25zIG9mIHJ1bGVzXG4tIHVzZXMgYGluc2VydFJ1bGVgIGZvciBhcHBlbmRpbmcgaW4gcHJvZHVjdGlvbiBmb3IgKm11Y2gqIGZhc3RlciBwZXJmb3JtYW5jZVxuXG4vLyB1c2FnZVxuXG5pbXBvcnQgeyBTdHlsZVNoZWV0IH0gZnJvbSAnQGVtb3Rpb24vc2hlZXQnXG5cbmxldCBzdHlsZVNoZWV0ID0gbmV3IFN0eWxlU2hlZXQoeyBrZXk6ICcnLCBjb250YWluZXI6IGRvY3VtZW50LmhlYWQgfSlcblxuc3R5bGVTaGVldC5pbnNlcnQoJyNib3ggeyBib3JkZXI6IDFweCBzb2xpZCByZWQ7IH0nKVxuLSBhcHBlbmRzIGEgY3NzIHJ1bGUgaW50byB0aGUgc3R5bGVzaGVldFxuXG5zdHlsZVNoZWV0LmZsdXNoKClcbi0gZW1wdGllcyB0aGUgc3R5bGVzaGVldCBvZiBhbGwgaXRzIGNvbnRlbnRzXG5cbiovXG4vLyAkRmxvd0ZpeE1lXG5mdW5jdGlvbiBzaGVldEZvclRhZyh0YWcpIHtcbiAgaWYgKHRhZy5zaGVldCkge1xuICAgIC8vICRGbG93Rml4TWVcbiAgICByZXR1cm4gdGFnLnNoZWV0O1xuICB9IC8vIHRoaXMgd2VpcmRuZXNzIGJyb3VnaHQgdG8geW91IGJ5IGZpcmVmb3hcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBkb2N1bWVudC5zdHlsZVNoZWV0cy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChkb2N1bWVudC5zdHlsZVNoZWV0c1tpXS5vd25lck5vZGUgPT09IHRhZykge1xuICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgcmV0dXJuIGRvY3VtZW50LnN0eWxlU2hlZXRzW2ldO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdGFnLnNldEF0dHJpYnV0ZSgnZGF0YS1lbW90aW9uJywgb3B0aW9ucy5rZXkpO1xuXG4gIGlmIChvcHRpb25zLm5vbmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICB0YWcuc2V0QXR0cmlidXRlKCdub25jZScsIG9wdGlvbnMubm9uY2UpO1xuICB9XG5cbiAgdGFnLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKSk7XG4gIHJldHVybiB0YWc7XG59XG5cbnZhciBTdHlsZVNoZWV0ID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU3R5bGVTaGVldChvcHRpb25zKSB7XG4gICAgdGhpcy5pc1NwZWVkeSA9IG9wdGlvbnMuc3BlZWR5ID09PSB1bmRlZmluZWQgPyBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nIDogb3B0aW9ucy5zcGVlZHk7XG4gICAgdGhpcy50YWdzID0gW107XG4gICAgdGhpcy5jdHIgPSAwO1xuICAgIHRoaXMubm9uY2UgPSBvcHRpb25zLm5vbmNlOyAvLyBrZXkgaXMgdGhlIHZhbHVlIG9mIHRoZSBkYXRhLWVtb3Rpb24gYXR0cmlidXRlLCBpdCdzIHVzZWQgdG8gaWRlbnRpZnkgZGlmZmVyZW50IHNoZWV0c1xuXG4gICAgdGhpcy5rZXkgPSBvcHRpb25zLmtleTtcbiAgICB0aGlzLmNvbnRhaW5lciA9IG9wdGlvbnMuY29udGFpbmVyO1xuICAgIHRoaXMuYmVmb3JlID0gbnVsbDtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBTdHlsZVNoZWV0LnByb3RvdHlwZTtcblxuICBfcHJvdG8uaW5zZXJ0ID0gZnVuY3Rpb24gaW5zZXJ0KHJ1bGUpIHtcbiAgICAvLyB0aGUgbWF4IGxlbmd0aCBpcyBob3cgbWFueSBydWxlcyB3ZSBoYXZlIHBlciBzdHlsZSB0YWcsIGl0J3MgNjUwMDAgaW4gc3BlZWR5IG1vZGVcbiAgICAvLyBpdCdzIDEgaW4gZGV2IGJlY2F1c2Ugd2UgaW5zZXJ0IHNvdXJjZSBtYXBzIHRoYXQgbWFwIGEgc2luZ2xlIHJ1bGUgdG8gYSBsb2NhdGlvblxuICAgIC8vIGFuZCB5b3UgY2FuIG9ubHkgaGF2ZSBvbmUgc291cmNlIG1hcCBwZXIgc3R5bGUgdGFnXG4gICAgaWYgKHRoaXMuY3RyICUgKHRoaXMuaXNTcGVlZHkgPyA2NTAwMCA6IDEpID09PSAwKSB7XG4gICAgICB2YXIgX3RhZyA9IGNyZWF0ZVN0eWxlRWxlbWVudCh0aGlzKTtcblxuICAgICAgdmFyIGJlZm9yZTtcblxuICAgICAgaWYgKHRoaXMudGFncy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgYmVmb3JlID0gdGhpcy5iZWZvcmU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBiZWZvcmUgPSB0aGlzLnRhZ3NbdGhpcy50YWdzLmxlbmd0aCAtIDFdLm5leHRTaWJsaW5nO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNvbnRhaW5lci5pbnNlcnRCZWZvcmUoX3RhZywgYmVmb3JlKTtcbiAgICAgIHRoaXMudGFncy5wdXNoKF90YWcpO1xuICAgIH1cblxuICAgIHZhciB0YWcgPSB0aGlzLnRhZ3NbdGhpcy50YWdzLmxlbmd0aCAtIDFdO1xuXG4gICAgaWYgKHRoaXMuaXNTcGVlZHkpIHtcbiAgICAgIHZhciBzaGVldCA9IHNoZWV0Rm9yVGFnKHRhZyk7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIHRoaXMgaXMgYSByZWFsbHkgaG90IHBhdGhcbiAgICAgICAgLy8gd2UgY2hlY2sgdGhlIHNlY29uZCBjaGFyYWN0ZXIgZmlyc3QgYmVjYXVzZSBoYXZpbmcgXCJpXCJcbiAgICAgICAgLy8gYXMgdGhlIHNlY29uZCBjaGFyYWN0ZXIgd2lsbCBoYXBwZW4gbGVzcyBvZnRlbiB0aGFuXG4gICAgICAgIC8vIGhhdmluZyBcIkBcIiBhcyB0aGUgZmlyc3QgY2hhcmFjdGVyXG4gICAgICAgIHZhciBpc0ltcG9ydFJ1bGUgPSBydWxlLmNoYXJDb2RlQXQoMSkgPT09IDEwNSAmJiBydWxlLmNoYXJDb2RlQXQoMCkgPT09IDY0OyAvLyB0aGlzIGlzIHRoZSB1bHRyYWZhc3QgdmVyc2lvbiwgd29ya3MgYWNyb3NzIGJyb3dzZXJzXG4gICAgICAgIC8vIHRoZSBiaWcgZHJhd2JhY2sgaXMgdGhhdCB0aGUgY3NzIHdvbid0IGJlIGVkaXRhYmxlIGluIGRldnRvb2xzXG5cbiAgICAgICAgc2hlZXQuaW5zZXJ0UnVsZShydWxlLCAvLyB3ZSBuZWVkIHRvIGluc2VydCBAaW1wb3J0IHJ1bGVzIGJlZm9yZSBhbnl0aGluZyBlbHNlXG4gICAgICAgIC8vIG90aGVyd2lzZSB0aGVyZSB3aWxsIGJlIGFuIGVycm9yXG4gICAgICAgIC8vIHRlY2huaWNhbGx5IHRoaXMgbWVhbnMgdGhhdCB0aGUgQGltcG9ydCBydWxlcyB3aWxsXG4gICAgICAgIC8vIF91c3VhbGx5Xyhub3QgYWx3YXlzIHNpbmNlIHRoZXJlIGNvdWxkIGJlIG11bHRpcGxlIHN0eWxlIHRhZ3MpXG4gICAgICAgIC8vIGJlIHRoZSBmaXJzdCBvbmVzIGluIHByb2QgYW5kIGdlbmVyYWxseSBsYXRlciBpbiBkZXZcbiAgICAgICAgLy8gdGhpcyBzaG91bGRuJ3QgcmVhbGx5IG1hdHRlciBpbiB0aGUgcmVhbCB3b3JsZCB0aG91Z2hcbiAgICAgICAgLy8gQGltcG9ydCBpcyBnZW5lcmFsbHkgb25seSB1c2VkIGZvciBmb250IGZhY2VzIGZyb20gZ29vZ2xlIGZvbnRzIGFuZCBldGMuXG4gICAgICAgIC8vIHNvIHdoaWxlIHRoaXMgY291bGQgYmUgdGVjaG5pY2FsbHkgY29ycmVjdCB0aGVuIGl0IHdvdWxkIGJlIHNsb3dlciBhbmQgbGFyZ2VyXG4gICAgICAgIC8vIGZvciBhIHRpbnkgYml0IG9mIGNvcnJlY3RuZXNzIHRoYXQgd29uJ3QgbWF0dGVyIGluIHRoZSByZWFsIHdvcmxkXG4gICAgICAgIGlzSW1wb3J0UnVsZSA/IDAgOiBzaGVldC5jc3NSdWxlcy5sZW5ndGgpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcIlRoZXJlIHdhcyBhIHByb2JsZW0gaW5zZXJ0aW5nIHRoZSBmb2xsb3dpbmcgcnVsZTogXFxcIlwiICsgcnVsZSArIFwiXFxcIlwiLCBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0YWcuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocnVsZSkpO1xuICAgIH1cblxuICAgIHRoaXMuY3RyKys7XG4gIH07XG5cbiAgX3Byb3RvLmZsdXNoID0gZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgLy8gJEZsb3dGaXhNZVxuICAgIHRoaXMudGFncy5mb3JFYWNoKGZ1bmN0aW9uICh0YWcpIHtcbiAgICAgIHJldHVybiB0YWcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0YWcpO1xuICAgIH0pO1xuICAgIHRoaXMudGFncyA9IFtdO1xuICAgIHRoaXMuY3RyID0gMDtcbiAgfTtcblxuICByZXR1cm4gU3R5bGVTaGVldDtcbn0oKTtcblxuZXhwb3J0IHsgU3R5bGVTaGVldCB9O1xuIiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBpc1Byb3BWYWxpZCBmcm9tICdAZW1vdGlvbi9pcy1wcm9wLXZhbGlkJztcbmltcG9ydCB7IHdpdGhFbW90aW9uQ2FjaGUsIFRoZW1lQ29udGV4dCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHsgZ2V0UmVnaXN0ZXJlZFN0eWxlcywgaW5zZXJ0U3R5bGVzIH0gZnJvbSAnQGVtb3Rpb24vdXRpbHMnO1xuaW1wb3J0IHsgc2VyaWFsaXplU3R5bGVzIH0gZnJvbSAnQGVtb3Rpb24vc2VyaWFsaXplJztcblxudmFyIHRlc3RPbWl0UHJvcHNPblN0cmluZ1RhZyA9IGlzUHJvcFZhbGlkO1xuXG52YXIgdGVzdE9taXRQcm9wc09uQ29tcG9uZW50ID0gZnVuY3Rpb24gdGVzdE9taXRQcm9wc09uQ29tcG9uZW50KGtleSkge1xuICByZXR1cm4ga2V5ICE9PSAndGhlbWUnICYmIGtleSAhPT0gJ2lubmVyUmVmJztcbn07XG5cbnZhciBnZXREZWZhdWx0U2hvdWxkRm9yd2FyZFByb3AgPSBmdW5jdGlvbiBnZXREZWZhdWx0U2hvdWxkRm9yd2FyZFByb3AodGFnKSB7XG4gIHJldHVybiB0eXBlb2YgdGFnID09PSAnc3RyaW5nJyAmJiAvLyA5NiBpcyBvbmUgbGVzcyB0aGFuIHRoZSBjaGFyIGNvZGVcbiAgLy8gZm9yIFwiYVwiIHNvIHRoaXMgaXMgY2hlY2tpbmcgdGhhdFxuICAvLyBpdCdzIGEgbG93ZXJjYXNlIGNoYXJhY3RlclxuICB0YWcuY2hhckNvZGVBdCgwKSA+IDk2ID8gdGVzdE9taXRQcm9wc09uU3RyaW5nVGFnIDogdGVzdE9taXRQcm9wc09uQ29tcG9uZW50O1xufTtcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG52YXIgSUxMRUdBTF9FU0NBUEVfU0VRVUVOQ0VfRVJST1IgPSBcIllvdSBoYXZlIGlsbGVnYWwgZXNjYXBlIHNlcXVlbmNlIGluIHlvdXIgdGVtcGxhdGUgbGl0ZXJhbCwgbW9zdCBsaWtlbHkgaW5zaWRlIGNvbnRlbnQncyBwcm9wZXJ0eSB2YWx1ZS5cXG5CZWNhdXNlIHlvdSB3cml0ZSB5b3VyIENTUyBpbnNpZGUgYSBKYXZhU2NyaXB0IHN0cmluZyB5b3UgYWN0dWFsbHkgaGF2ZSB0byBkbyBkb3VibGUgZXNjYXBpbmcsIHNvIGZvciBleGFtcGxlIFxcXCJjb250ZW50OiAnXFxcXDAwZDcnO1xcXCIgc2hvdWxkIGJlY29tZSBcXFwiY29udGVudDogJ1xcXFxcXFxcMDBkNyc7XFxcIi5cXG5Zb3UgY2FuIHJlYWQgbW9yZSBhYm91dCB0aGlzIGhlcmU6XFxuaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvVGVtcGxhdGVfbGl0ZXJhbHMjRVMyMDE4X3JldmlzaW9uX29mX2lsbGVnYWxfZXNjYXBlX3NlcXVlbmNlc1wiO1xuXG52YXIgTm9vcCA9IGZ1bmN0aW9uIE5vb3AoKSB7XG4gIHJldHVybiBudWxsO1xufTtcblxudmFyIGNyZWF0ZVN0eWxlZCA9IGZ1bmN0aW9uIGNyZWF0ZVN0eWxlZCh0YWcsIG9wdGlvbnMpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAodGFnID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignWW91IGFyZSB0cnlpbmcgdG8gY3JlYXRlIGEgc3R5bGVkIGVsZW1lbnQgd2l0aCBhbiB1bmRlZmluZWQgY29tcG9uZW50LlxcbllvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gaW1wb3J0IGl0LicpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBpZGVudGlmaWVyTmFtZTtcbiAgdmFyIHNob3VsZEZvcndhcmRQcm9wO1xuICB2YXIgdGFyZ2V0Q2xhc3NOYW1lO1xuXG4gIGlmIChvcHRpb25zICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZGVudGlmaWVyTmFtZSA9IG9wdGlvbnMubGFiZWw7XG4gICAgdGFyZ2V0Q2xhc3NOYW1lID0gb3B0aW9ucy50YXJnZXQ7XG4gICAgc2hvdWxkRm9yd2FyZFByb3AgPSB0YWcuX19lbW90aW9uX2ZvcndhcmRQcm9wICYmIG9wdGlvbnMuc2hvdWxkRm9yd2FyZFByb3AgPyBmdW5jdGlvbiAocHJvcE5hbWUpIHtcbiAgICAgIHJldHVybiB0YWcuX19lbW90aW9uX2ZvcndhcmRQcm9wKHByb3BOYW1lKSAmJiAvLyAkRmxvd0ZpeE1lXG4gICAgICBvcHRpb25zLnNob3VsZEZvcndhcmRQcm9wKHByb3BOYW1lKTtcbiAgICB9IDogb3B0aW9ucy5zaG91bGRGb3J3YXJkUHJvcDtcbiAgfVxuXG4gIHZhciBpc1JlYWwgPSB0YWcuX19lbW90aW9uX3JlYWwgPT09IHRhZztcbiAgdmFyIGJhc2VUYWcgPSBpc1JlYWwgJiYgdGFnLl9fZW1vdGlvbl9iYXNlIHx8IHRhZztcblxuICBpZiAodHlwZW9mIHNob3VsZEZvcndhcmRQcm9wICE9PSAnZnVuY3Rpb24nICYmIGlzUmVhbCkge1xuICAgIHNob3VsZEZvcndhcmRQcm9wID0gdGFnLl9fZW1vdGlvbl9mb3J3YXJkUHJvcDtcbiAgfVxuXG4gIHZhciBkZWZhdWx0U2hvdWxkRm9yd2FyZFByb3AgPSBzaG91bGRGb3J3YXJkUHJvcCB8fCBnZXREZWZhdWx0U2hvdWxkRm9yd2FyZFByb3AoYmFzZVRhZyk7XG4gIHZhciBzaG91bGRVc2VBcyA9ICFkZWZhdWx0U2hvdWxkRm9yd2FyZFByb3AoJ2FzJyk7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgdmFyIHN0eWxlcyA9IGlzUmVhbCAmJiB0YWcuX19lbW90aW9uX3N0eWxlcyAhPT0gdW5kZWZpbmVkID8gdGFnLl9fZW1vdGlvbl9zdHlsZXMuc2xpY2UoMCkgOiBbXTtcblxuICAgIGlmIChpZGVudGlmaWVyTmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBzdHlsZXMucHVzaChcImxhYmVsOlwiICsgaWRlbnRpZmllck5hbWUgKyBcIjtcIik7XG4gICAgfVxuXG4gICAgaWYgKGFyZ3NbMF0gPT0gbnVsbCB8fCBhcmdzWzBdLnJhdyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBzdHlsZXMucHVzaC5hcHBseShzdHlsZXMsIGFyZ3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBhcmdzWzBdWzBdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihJTExFR0FMX0VTQ0FQRV9TRVFVRU5DRV9FUlJPUik7XG4gICAgICB9XG5cbiAgICAgIHN0eWxlcy5wdXNoKGFyZ3NbMF1bMF0pO1xuICAgICAgdmFyIGxlbiA9IGFyZ3MubGVuZ3RoO1xuICAgICAgdmFyIGkgPSAxO1xuXG4gICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGFyZ3NbMF1baV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoSUxMRUdBTF9FU0NBUEVfU0VRVUVOQ0VfRVJST1IpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3R5bGVzLnB1c2goYXJnc1tpXSwgYXJnc1swXVtpXSk7XG4gICAgICB9XG4gICAgfSAvLyAkRmxvd0ZpeE1lOiB3ZSBuZWVkIHRvIGNhc3QgU3RhdGVsZXNzRnVuY3Rpb25hbENvbXBvbmVudCB0byBvdXIgUHJpdmF0ZVN0eWxlZENvbXBvbmVudCBjbGFzc1xuXG5cbiAgICB2YXIgU3R5bGVkID0gd2l0aEVtb3Rpb25DYWNoZShmdW5jdGlvbiAocHJvcHMsIGNvbnRleHQsIHJlZikge1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KFRoZW1lQ29udGV4dC5Db25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKHRoZW1lKSB7XG4gICAgICAgIHZhciBmaW5hbFRhZyA9IHNob3VsZFVzZUFzICYmIHByb3BzLmFzIHx8IGJhc2VUYWc7XG4gICAgICAgIHZhciBjbGFzc05hbWUgPSAnJztcbiAgICAgICAgdmFyIGNsYXNzSW50ZXJwb2xhdGlvbnMgPSBbXTtcbiAgICAgICAgdmFyIG1lcmdlZFByb3BzID0gcHJvcHM7XG5cbiAgICAgICAgaWYgKHByb3BzLnRoZW1lID09IG51bGwpIHtcbiAgICAgICAgICBtZXJnZWRQcm9wcyA9IHt9O1xuXG4gICAgICAgICAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgICAgICAgICBtZXJnZWRQcm9wc1trZXldID0gcHJvcHNba2V5XTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBtZXJnZWRQcm9wcy50aGVtZSA9IHRoZW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBwcm9wcy5jbGFzc05hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY2xhc3NOYW1lID0gZ2V0UmVnaXN0ZXJlZFN0eWxlcyhjb250ZXh0LnJlZ2lzdGVyZWQsIGNsYXNzSW50ZXJwb2xhdGlvbnMsIHByb3BzLmNsYXNzTmFtZSk7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvcHMuY2xhc3NOYW1lICE9IG51bGwpIHtcbiAgICAgICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUgKyBcIiBcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzZXJpYWxpemVkID0gc2VyaWFsaXplU3R5bGVzKHN0eWxlcy5jb25jYXQoY2xhc3NJbnRlcnBvbGF0aW9ucyksIGNvbnRleHQucmVnaXN0ZXJlZCwgbWVyZ2VkUHJvcHMpO1xuICAgICAgICB2YXIgcnVsZXMgPSBpbnNlcnRTdHlsZXMoY29udGV4dCwgc2VyaWFsaXplZCwgdHlwZW9mIGZpbmFsVGFnID09PSAnc3RyaW5nJyk7XG4gICAgICAgIGNsYXNzTmFtZSArPSBjb250ZXh0LmtleSArIFwiLVwiICsgc2VyaWFsaXplZC5uYW1lO1xuXG4gICAgICAgIGlmICh0YXJnZXRDbGFzc05hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGNsYXNzTmFtZSArPSBcIiBcIiArIHRhcmdldENsYXNzTmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBmaW5hbFNob3VsZEZvcndhcmRQcm9wID0gc2hvdWxkVXNlQXMgJiYgc2hvdWxkRm9yd2FyZFByb3AgPT09IHVuZGVmaW5lZCA/IGdldERlZmF1bHRTaG91bGRGb3J3YXJkUHJvcChmaW5hbFRhZykgOiBkZWZhdWx0U2hvdWxkRm9yd2FyZFByb3A7XG4gICAgICAgIHZhciBuZXdQcm9wcyA9IHt9O1xuXG4gICAgICAgIGZvciAodmFyIF9rZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgICBpZiAoc2hvdWxkVXNlQXMgJiYgX2tleSA9PT0gJ2FzJykgY29udGludWU7XG5cbiAgICAgICAgICBpZiAoIC8vICRGbG93Rml4TWVcbiAgICAgICAgICBmaW5hbFNob3VsZEZvcndhcmRQcm9wKF9rZXkpKSB7XG4gICAgICAgICAgICBuZXdQcm9wc1tfa2V5XSA9IHByb3BzW19rZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG5ld1Byb3BzLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICAgICAgbmV3UHJvcHMucmVmID0gcmVmIHx8IHByb3BzLmlubmVyUmVmO1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHByb3BzLmlubmVyUmVmKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignYGlubmVyUmVmYCBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgdmVyc2lvbiBvZiBFbW90aW9uLCBwbGVhc2UgdXNlIHRoZSBgcmVmYCBwcm9wIGluc3RlYWQnICsgKGlkZW50aWZpZXJOYW1lID09PSB1bmRlZmluZWQgPyAnJyA6IFwiIGluIHRoZSB1c2FnZSBvZiBgXCIgKyBpZGVudGlmaWVyTmFtZSArIFwiYFwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZWxlID0gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoZmluYWxUYWcsIG5ld1Byb3BzKTtcbiAgICAgICAgdmFyIHBvc3NpYmx5U3R5bGVFbGVtZW50ID0gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoTm9vcCwgbnVsbCk7XG5cblxuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoRnJhZ21lbnQsIG51bGwsIHBvc3NpYmx5U3R5bGVFbGVtZW50LCBlbGUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgU3R5bGVkLmRpc3BsYXlOYW1lID0gaWRlbnRpZmllck5hbWUgIT09IHVuZGVmaW5lZCA/IGlkZW50aWZpZXJOYW1lIDogXCJTdHlsZWQoXCIgKyAodHlwZW9mIGJhc2VUYWcgPT09ICdzdHJpbmcnID8gYmFzZVRhZyA6IGJhc2VUYWcuZGlzcGxheU5hbWUgfHwgYmFzZVRhZy5uYW1lIHx8ICdDb21wb25lbnQnKSArIFwiKVwiO1xuICAgIFN0eWxlZC5kZWZhdWx0UHJvcHMgPSB0YWcuZGVmYXVsdFByb3BzO1xuICAgIFN0eWxlZC5fX2Vtb3Rpb25fcmVhbCA9IFN0eWxlZDtcbiAgICBTdHlsZWQuX19lbW90aW9uX2Jhc2UgPSBiYXNlVGFnO1xuICAgIFN0eWxlZC5fX2Vtb3Rpb25fc3R5bGVzID0gc3R5bGVzO1xuICAgIFN0eWxlZC5fX2Vtb3Rpb25fZm9yd2FyZFByb3AgPSBzaG91bGRGb3J3YXJkUHJvcDtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU3R5bGVkLCAndG9TdHJpbmcnLCB7XG4gICAgICB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoKSB7XG4gICAgICAgIGlmICh0YXJnZXRDbGFzc05hbWUgPT09IHVuZGVmaW5lZCAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgcmV0dXJuICdOT19DT01QT05FTlRfU0VMRUNUT1InO1xuICAgICAgICB9IC8vICRGbG93Rml4TWU6IGNvZXJjZSB1bmRlZmluZWQgdG8gc3RyaW5nXG5cblxuICAgICAgICByZXR1cm4gXCIuXCIgKyB0YXJnZXRDbGFzc05hbWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBTdHlsZWQud2l0aENvbXBvbmVudCA9IGZ1bmN0aW9uIChuZXh0VGFnLCBuZXh0T3B0aW9ucykge1xuICAgICAgcmV0dXJuIGNyZWF0ZVN0eWxlZChuZXh0VGFnLCBuZXh0T3B0aW9ucyAhPT0gdW5kZWZpbmVkID8gX29iamVjdFNwcmVhZCh7fSwgb3B0aW9ucyB8fCB7fSwge30sIG5leHRPcHRpb25zKSA6IG9wdGlvbnMpLmFwcGx5KHZvaWQgMCwgc3R5bGVzKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFN0eWxlZDtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN0eWxlZDtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkLWJhc2UnO1xuXG52YXIgdGFncyA9IFsnYScsICdhYmJyJywgJ2FkZHJlc3MnLCAnYXJlYScsICdhcnRpY2xlJywgJ2FzaWRlJywgJ2F1ZGlvJywgJ2InLCAnYmFzZScsICdiZGknLCAnYmRvJywgJ2JpZycsICdibG9ja3F1b3RlJywgJ2JvZHknLCAnYnInLCAnYnV0dG9uJywgJ2NhbnZhcycsICdjYXB0aW9uJywgJ2NpdGUnLCAnY29kZScsICdjb2wnLCAnY29sZ3JvdXAnLCAnZGF0YScsICdkYXRhbGlzdCcsICdkZCcsICdkZWwnLCAnZGV0YWlscycsICdkZm4nLCAnZGlhbG9nJywgJ2RpdicsICdkbCcsICdkdCcsICdlbScsICdlbWJlZCcsICdmaWVsZHNldCcsICdmaWdjYXB0aW9uJywgJ2ZpZ3VyZScsICdmb290ZXInLCAnZm9ybScsICdoMScsICdoMicsICdoMycsICdoNCcsICdoNScsICdoNicsICdoZWFkJywgJ2hlYWRlcicsICdoZ3JvdXAnLCAnaHInLCAnaHRtbCcsICdpJywgJ2lmcmFtZScsICdpbWcnLCAnaW5wdXQnLCAnaW5zJywgJ2tiZCcsICdrZXlnZW4nLCAnbGFiZWwnLCAnbGVnZW5kJywgJ2xpJywgJ2xpbmsnLCAnbWFpbicsICdtYXAnLCAnbWFyaycsICdtYXJxdWVlJywgJ21lbnUnLCAnbWVudWl0ZW0nLCAnbWV0YScsICdtZXRlcicsICduYXYnLCAnbm9zY3JpcHQnLCAnb2JqZWN0JywgJ29sJywgJ29wdGdyb3VwJywgJ29wdGlvbicsICdvdXRwdXQnLCAncCcsICdwYXJhbScsICdwaWN0dXJlJywgJ3ByZScsICdwcm9ncmVzcycsICdxJywgJ3JwJywgJ3J0JywgJ3J1YnknLCAncycsICdzYW1wJywgJ3NjcmlwdCcsICdzZWN0aW9uJywgJ3NlbGVjdCcsICdzbWFsbCcsICdzb3VyY2UnLCAnc3BhbicsICdzdHJvbmcnLCAnc3R5bGUnLCAnc3ViJywgJ3N1bW1hcnknLCAnc3VwJywgJ3RhYmxlJywgJ3Rib2R5JywgJ3RkJywgJ3RleHRhcmVhJywgJ3Rmb290JywgJ3RoJywgJ3RoZWFkJywgJ3RpbWUnLCAndGl0bGUnLCAndHInLCAndHJhY2snLCAndScsICd1bCcsICd2YXInLCAndmlkZW8nLCAnd2JyJywgLy8gU1ZHXG4nY2lyY2xlJywgJ2NsaXBQYXRoJywgJ2RlZnMnLCAnZWxsaXBzZScsICdmb3JlaWduT2JqZWN0JywgJ2cnLCAnaW1hZ2UnLCAnbGluZScsICdsaW5lYXJHcmFkaWVudCcsICdtYXNrJywgJ3BhdGgnLCAncGF0dGVybicsICdwb2x5Z29uJywgJ3BvbHlsaW5lJywgJ3JhZGlhbEdyYWRpZW50JywgJ3JlY3QnLCAnc3RvcCcsICdzdmcnLCAndGV4dCcsICd0c3BhbiddO1xuXG52YXIgbmV3U3R5bGVkID0gc3R5bGVkLmJpbmQoKTtcbnRhZ3MuZm9yRWFjaChmdW5jdGlvbiAodGFnTmFtZSkge1xuICBuZXdTdHlsZWRbdGFnTmFtZV0gPSBuZXdTdHlsZWQodGFnTmFtZSk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgbmV3U3R5bGVkO1xuIiwiZnVuY3Rpb24gc3R5bGlzX21pbiAoVykge1xuICBmdW5jdGlvbiBNKGQsIGMsIGUsIGgsIGEpIHtcbiAgICBmb3IgKHZhciBtID0gMCwgYiA9IDAsIHYgPSAwLCBuID0gMCwgcSwgZywgeCA9IDAsIEsgPSAwLCBrLCB1ID0gayA9IHEgPSAwLCBsID0gMCwgciA9IDAsIEkgPSAwLCB0ID0gMCwgQiA9IGUubGVuZ3RoLCBKID0gQiAtIDEsIHksIGYgPSAnJywgcCA9ICcnLCBGID0gJycsIEcgPSAnJywgQzsgbCA8IEI7KSB7XG4gICAgICBnID0gZS5jaGFyQ29kZUF0KGwpO1xuICAgICAgbCA9PT0gSiAmJiAwICE9PSBiICsgbiArIHYgKyBtICYmICgwICE9PSBiICYmIChnID0gNDcgPT09IGIgPyAxMCA6IDQ3KSwgbiA9IHYgPSBtID0gMCwgQisrLCBKKyspO1xuXG4gICAgICBpZiAoMCA9PT0gYiArIG4gKyB2ICsgbSkge1xuICAgICAgICBpZiAobCA9PT0gSiAmJiAoMCA8IHIgJiYgKGYgPSBmLnJlcGxhY2UoTiwgJycpKSwgMCA8IGYudHJpbSgpLmxlbmd0aCkpIHtcbiAgICAgICAgICBzd2l0Y2ggKGcpIHtcbiAgICAgICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICBjYXNlIDU5OlxuICAgICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBmICs9IGUuY2hhckF0KGwpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGcgPSA1OTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAoZykge1xuICAgICAgICAgIGNhc2UgMTIzOlxuICAgICAgICAgICAgZiA9IGYudHJpbSgpO1xuICAgICAgICAgICAgcSA9IGYuY2hhckNvZGVBdCgwKTtcbiAgICAgICAgICAgIGsgPSAxO1xuXG4gICAgICAgICAgICBmb3IgKHQgPSArK2w7IGwgPCBCOykge1xuICAgICAgICAgICAgICBzd2l0Y2ggKGcgPSBlLmNoYXJDb2RlQXQobCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDEyMzpcbiAgICAgICAgICAgICAgICAgIGsrKztcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAxMjU6XG4gICAgICAgICAgICAgICAgICBrLS07XG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgNDc6XG4gICAgICAgICAgICAgICAgICBzd2l0Y2ggKGcgPSBlLmNoYXJDb2RlQXQobCArIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDI6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDc6XG4gICAgICAgICAgICAgICAgICAgICAgYToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh1ID0gbCArIDE7IHUgPCBKOyArK3UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChlLmNoYXJDb2RlQXQodSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ3OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDQyID09PSBnICYmIDQyID09PSBlLmNoYXJDb2RlQXQodSAtIDEpICYmIGwgKyAyICE9PSB1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwgPSB1ICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWsgYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDQ3ID09PSBnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwgPSB1ICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWsgYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGwgPSB1O1xuICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgOTE6XG4gICAgICAgICAgICAgICAgICBnKys7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICAgICAgZysrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAzNDpcbiAgICAgICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAgICAgZm9yICg7IGwrKyA8IEogJiYgZS5jaGFyQ29kZUF0KGwpICE9PSBnOykge1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoMCA9PT0gaykgYnJlYWs7XG4gICAgICAgICAgICAgIGwrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgayA9IGUuc3Vic3RyaW5nKHQsIGwpO1xuICAgICAgICAgICAgMCA9PT0gcSAmJiAocSA9IChmID0gZi5yZXBsYWNlKGNhLCAnJykudHJpbSgpKS5jaGFyQ29kZUF0KDApKTtcblxuICAgICAgICAgICAgc3dpdGNoIChxKSB7XG4gICAgICAgICAgICAgIGNhc2UgNjQ6XG4gICAgICAgICAgICAgICAgMCA8IHIgJiYgKGYgPSBmLnJlcGxhY2UoTiwgJycpKTtcbiAgICAgICAgICAgICAgICBnID0gZi5jaGFyQ29kZUF0KDEpO1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoIChnKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIDEwMDpcbiAgICAgICAgICAgICAgICAgIGNhc2UgMTA5OlxuICAgICAgICAgICAgICAgICAgY2FzZSAxMTU6XG4gICAgICAgICAgICAgICAgICBjYXNlIDQ1OlxuICAgICAgICAgICAgICAgICAgICByID0gYztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHIgPSBPO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGsgPSBNKGMsIHIsIGssIGcsIGEgKyAxKTtcbiAgICAgICAgICAgICAgICB0ID0gay5sZW5ndGg7XG4gICAgICAgICAgICAgICAgMCA8IEEgJiYgKHIgPSBYKE8sIGYsIEkpLCBDID0gSCgzLCBrLCByLCBjLCBELCB6LCB0LCBnLCBhLCBoKSwgZiA9IHIuam9pbignJyksIHZvaWQgMCAhPT0gQyAmJiAwID09PSAodCA9IChrID0gQy50cmltKCkpLmxlbmd0aCkgJiYgKGcgPSAwLCBrID0gJycpKTtcbiAgICAgICAgICAgICAgICBpZiAoMCA8IHQpIHN3aXRjaCAoZykge1xuICAgICAgICAgICAgICAgICAgY2FzZSAxMTU6XG4gICAgICAgICAgICAgICAgICAgIGYgPSBmLnJlcGxhY2UoZGEsIGVhKTtcblxuICAgICAgICAgICAgICAgICAgY2FzZSAxMDA6XG4gICAgICAgICAgICAgICAgICBjYXNlIDEwOTpcbiAgICAgICAgICAgICAgICAgIGNhc2UgNDU6XG4gICAgICAgICAgICAgICAgICAgIGsgPSBmICsgJ3snICsgayArICd9JztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2UgMTA3OlxuICAgICAgICAgICAgICAgICAgICBmID0gZi5yZXBsYWNlKGZhLCAnJDEgJDInKTtcbiAgICAgICAgICAgICAgICAgICAgayA9IGYgKyAneycgKyBrICsgJ30nO1xuICAgICAgICAgICAgICAgICAgICBrID0gMSA9PT0gdyB8fCAyID09PSB3ICYmIEwoJ0AnICsgaywgMykgPyAnQC13ZWJraXQtJyArIGsgKyAnQCcgKyBrIDogJ0AnICsgaztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGsgPSBmICsgaywgMTEyID09PSBoICYmIChrID0gKHAgKz0gaywgJycpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgayA9ICcnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgayA9IE0oYywgWChjLCBmLCBJKSwgaywgaCwgYSArIDEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBGICs9IGs7XG4gICAgICAgICAgICBrID0gSSA9IHIgPSB1ID0gcSA9IDA7XG4gICAgICAgICAgICBmID0gJyc7XG4gICAgICAgICAgICBnID0gZS5jaGFyQ29kZUF0KCsrbCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgMTI1OlxuICAgICAgICAgIGNhc2UgNTk6XG4gICAgICAgICAgICBmID0gKDAgPCByID8gZi5yZXBsYWNlKE4sICcnKSA6IGYpLnRyaW0oKTtcbiAgICAgICAgICAgIGlmICgxIDwgKHQgPSBmLmxlbmd0aCkpIHN3aXRjaCAoMCA9PT0gdSAmJiAocSA9IGYuY2hhckNvZGVBdCgwKSwgNDUgPT09IHEgfHwgOTYgPCBxICYmIDEyMyA+IHEpICYmICh0ID0gKGYgPSBmLnJlcGxhY2UoJyAnLCAnOicpKS5sZW5ndGgpLCAwIDwgQSAmJiB2b2lkIDAgIT09IChDID0gSCgxLCBmLCBjLCBkLCBELCB6LCBwLmxlbmd0aCwgaCwgYSwgaCkpICYmIDAgPT09ICh0ID0gKGYgPSBDLnRyaW0oKSkubGVuZ3RoKSAmJiAoZiA9ICdcXHgwMFxceDAwJyksIHEgPSBmLmNoYXJDb2RlQXQoMCksIGcgPSBmLmNoYXJDb2RlQXQoMSksIHEpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgNjQ6XG4gICAgICAgICAgICAgICAgaWYgKDEwNSA9PT0gZyB8fCA5OSA9PT0gZykge1xuICAgICAgICAgICAgICAgICAgRyArPSBmICsgZS5jaGFyQXQobCk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICA1OCAhPT0gZi5jaGFyQ29kZUF0KHQgLSAxKSAmJiAocCArPSBQKGYsIHEsIGcsIGYuY2hhckNvZGVBdCgyKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgSSA9IHIgPSB1ID0gcSA9IDA7XG4gICAgICAgICAgICBmID0gJyc7XG4gICAgICAgICAgICBnID0gZS5jaGFyQ29kZUF0KCsrbCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc3dpdGNoIChnKSB7XG4gICAgICAgIGNhc2UgMTM6XG4gICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgNDcgPT09IGIgPyBiID0gMCA6IDAgPT09IDEgKyBxICYmIDEwNyAhPT0gaCAmJiAwIDwgZi5sZW5ndGggJiYgKHIgPSAxLCBmICs9ICdcXHgwMCcpO1xuICAgICAgICAgIDAgPCBBICogWSAmJiBIKDAsIGYsIGMsIGQsIEQsIHosIHAubGVuZ3RoLCBoLCBhLCBoKTtcbiAgICAgICAgICB6ID0gMTtcbiAgICAgICAgICBEKys7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSA1OTpcbiAgICAgICAgY2FzZSAxMjU6XG4gICAgICAgICAgaWYgKDAgPT09IGIgKyBuICsgdiArIG0pIHtcbiAgICAgICAgICAgIHorKztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHorKztcbiAgICAgICAgICB5ID0gZS5jaGFyQXQobCk7XG5cbiAgICAgICAgICBzd2l0Y2ggKGcpIHtcbiAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgICAgIGlmICgwID09PSBuICsgbSArIGIpIHN3aXRjaCAoeCkge1xuICAgICAgICAgICAgICAgIGNhc2UgNDQ6XG4gICAgICAgICAgICAgICAgY2FzZSA1ODpcbiAgICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICAgICAgICAgIHkgPSAnJztcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgIDMyICE9PSBnICYmICh5ID0gJyAnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICB5ID0gJ1xcXFwwJztcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICAgIHkgPSAnXFxcXGYnO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgICAgeSA9ICdcXFxcdic7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICAwID09PSBuICsgYiArIG0gJiYgKHIgPSBJID0gMSwgeSA9ICdcXGYnICsgeSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDEwODpcbiAgICAgICAgICAgICAgaWYgKDAgPT09IG4gKyBiICsgbSArIEUgJiYgMCA8IHUpIHN3aXRjaCAobCAtIHUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAxMTIgPT09IHggJiYgNTggPT09IGUuY2hhckNvZGVBdChsIC0gMykgJiYgKEUgPSB4KTtcblxuICAgICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICAgIDExMSA9PT0gSyAmJiAoRSA9IEspO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDU4OlxuICAgICAgICAgICAgICAwID09PSBuICsgYiArIG0gJiYgKHUgPSBsKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNDQ6XG4gICAgICAgICAgICAgIDAgPT09IGIgKyB2ICsgbiArIG0gJiYgKHIgPSAxLCB5ICs9ICdcXHInKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMzQ6XG4gICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAwID09PSBiICYmIChuID0gbiA9PT0gZyA/IDAgOiAwID09PSBuID8gZyA6IG4pO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA5MTpcbiAgICAgICAgICAgICAgMCA9PT0gbiArIGIgKyB2ICYmIG0rKztcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgOTM6XG4gICAgICAgICAgICAgIDAgPT09IG4gKyBiICsgdiAmJiBtLS07XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDQxOlxuICAgICAgICAgICAgICAwID09PSBuICsgYiArIG0gJiYgdi0tO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgaWYgKDAgPT09IG4gKyBiICsgbSkge1xuICAgICAgICAgICAgICAgIGlmICgwID09PSBxKSBzd2l0Y2ggKDIgKiB4ICsgMyAqIEspIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgNTMzOlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcSA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHYrKztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDY0OlxuICAgICAgICAgICAgICAwID09PSBiICsgdiArIG4gKyBtICsgdSArIGsgJiYgKGsgPSAxKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNDI6XG4gICAgICAgICAgICBjYXNlIDQ3OlxuICAgICAgICAgICAgICBpZiAoISgwIDwgbiArIG0gKyB2KSkgc3dpdGNoIChiKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgc3dpdGNoICgyICogZyArIDMgKiBlLmNoYXJDb2RlQXQobCArIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjM1OlxuICAgICAgICAgICAgICAgICAgICAgIGIgPSA0NztcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlIDIyMDpcbiAgICAgICAgICAgICAgICAgICAgICB0ID0gbCwgYiA9IDQyO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgNDI6XG4gICAgICAgICAgICAgICAgICA0NyA9PT0gZyAmJiA0MiA9PT0geCAmJiB0ICsgMiAhPT0gbCAmJiAoMzMgPT09IGUuY2hhckNvZGVBdCh0ICsgMikgJiYgKHAgKz0gZS5zdWJzdHJpbmcodCwgbCArIDEpKSwgeSA9ICcnLCBiID0gMCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAwID09PSBiICYmIChmICs9IHkpO1xuICAgICAgfVxuXG4gICAgICBLID0geDtcbiAgICAgIHggPSBnO1xuICAgICAgbCsrO1xuICAgIH1cblxuICAgIHQgPSBwLmxlbmd0aDtcblxuICAgIGlmICgwIDwgdCkge1xuICAgICAgciA9IGM7XG4gICAgICBpZiAoMCA8IEEgJiYgKEMgPSBIKDIsIHAsIHIsIGQsIEQsIHosIHQsIGgsIGEsIGgpLCB2b2lkIDAgIT09IEMgJiYgMCA9PT0gKHAgPSBDKS5sZW5ndGgpKSByZXR1cm4gRyArIHAgKyBGO1xuICAgICAgcCA9IHIuam9pbignLCcpICsgJ3snICsgcCArICd9JztcblxuICAgICAgaWYgKDAgIT09IHcgKiBFKSB7XG4gICAgICAgIDIgIT09IHcgfHwgTChwLCAyKSB8fCAoRSA9IDApO1xuXG4gICAgICAgIHN3aXRjaCAoRSkge1xuICAgICAgICAgIGNhc2UgMTExOlxuICAgICAgICAgICAgcCA9IHAucmVwbGFjZShoYSwgJzotbW96LSQxJykgKyBwO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDExMjpcbiAgICAgICAgICAgIHAgPSBwLnJlcGxhY2UoUSwgJzo6LXdlYmtpdC1pbnB1dC0kMScpICsgcC5yZXBsYWNlKFEsICc6Oi1tb3otJDEnKSArIHAucmVwbGFjZShRLCAnOi1tcy1pbnB1dC0kMScpICsgcDtcbiAgICAgICAgfVxuXG4gICAgICAgIEUgPSAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBHICsgcCArIEY7XG4gIH1cblxuICBmdW5jdGlvbiBYKGQsIGMsIGUpIHtcbiAgICB2YXIgaCA9IGMudHJpbSgpLnNwbGl0KGlhKTtcbiAgICBjID0gaDtcbiAgICB2YXIgYSA9IGgubGVuZ3RoLFxuICAgICAgICBtID0gZC5sZW5ndGg7XG5cbiAgICBzd2l0Y2ggKG0pIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgdmFyIGIgPSAwO1xuXG4gICAgICAgIGZvciAoZCA9IDAgPT09IG0gPyAnJyA6IGRbMF0gKyAnICc7IGIgPCBhOyArK2IpIHtcbiAgICAgICAgICBjW2JdID0gWihkLCBjW2JdLCBlKS50cmltKCk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdmFyIHYgPSBiID0gMDtcblxuICAgICAgICBmb3IgKGMgPSBbXTsgYiA8IGE7ICsrYikge1xuICAgICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgbTsgKytuKSB7XG4gICAgICAgICAgICBjW3YrK10gPSBaKGRbbl0gKyAnICcsIGhbYl0sIGUpLnRyaW0oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybiBjO1xuICB9XG5cbiAgZnVuY3Rpb24gWihkLCBjLCBlKSB7XG4gICAgdmFyIGggPSBjLmNoYXJDb2RlQXQoMCk7XG4gICAgMzMgPiBoICYmIChoID0gKGMgPSBjLnRyaW0oKSkuY2hhckNvZGVBdCgwKSk7XG5cbiAgICBzd2l0Y2ggKGgpIHtcbiAgICAgIGNhc2UgMzg6XG4gICAgICAgIHJldHVybiBjLnJlcGxhY2UoRiwgJyQxJyArIGQudHJpbSgpKTtcblxuICAgICAgY2FzZSA1ODpcbiAgICAgICAgcmV0dXJuIGQudHJpbSgpICsgYy5yZXBsYWNlKEYsICckMScgKyBkLnRyaW0oKSk7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmICgwIDwgMSAqIGUgJiYgMCA8IGMuaW5kZXhPZignXFxmJykpIHJldHVybiBjLnJlcGxhY2UoRiwgKDU4ID09PSBkLmNoYXJDb2RlQXQoMCkgPyAnJyA6ICckMScpICsgZC50cmltKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBkICsgYztcbiAgfVxuXG4gIGZ1bmN0aW9uIFAoZCwgYywgZSwgaCkge1xuICAgIHZhciBhID0gZCArICc7JyxcbiAgICAgICAgbSA9IDIgKiBjICsgMyAqIGUgKyA0ICogaDtcblxuICAgIGlmICg5NDQgPT09IG0pIHtcbiAgICAgIGQgPSBhLmluZGV4T2YoJzonLCA5KSArIDE7XG4gICAgICB2YXIgYiA9IGEuc3Vic3RyaW5nKGQsIGEubGVuZ3RoIC0gMSkudHJpbSgpO1xuICAgICAgYiA9IGEuc3Vic3RyaW5nKDAsIGQpLnRyaW0oKSArIGIgKyAnOyc7XG4gICAgICByZXR1cm4gMSA9PT0gdyB8fCAyID09PSB3ICYmIEwoYiwgMSkgPyAnLXdlYmtpdC0nICsgYiArIGIgOiBiO1xuICAgIH1cblxuICAgIGlmICgwID09PSB3IHx8IDIgPT09IHcgJiYgIUwoYSwgMSkpIHJldHVybiBhO1xuXG4gICAgc3dpdGNoIChtKSB7XG4gICAgICBjYXNlIDEwMTU6XG4gICAgICAgIHJldHVybiA5NyA9PT0gYS5jaGFyQ29kZUF0KDEwKSA/ICctd2Via2l0LScgKyBhICsgYSA6IGE7XG5cbiAgICAgIGNhc2UgOTUxOlxuICAgICAgICByZXR1cm4gMTE2ID09PSBhLmNoYXJDb2RlQXQoMykgPyAnLXdlYmtpdC0nICsgYSArIGEgOiBhO1xuXG4gICAgICBjYXNlIDk2MzpcbiAgICAgICAgcmV0dXJuIDExMCA9PT0gYS5jaGFyQ29kZUF0KDUpID8gJy13ZWJraXQtJyArIGEgKyBhIDogYTtcblxuICAgICAgY2FzZSAxMDA5OlxuICAgICAgICBpZiAoMTAwICE9PSBhLmNoYXJDb2RlQXQoNCkpIGJyZWFrO1xuXG4gICAgICBjYXNlIDk2OTpcbiAgICAgIGNhc2UgOTQyOlxuICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyBhO1xuXG4gICAgICBjYXNlIDk3ODpcbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tb3otJyArIGEgKyBhO1xuXG4gICAgICBjYXNlIDEwMTk6XG4gICAgICBjYXNlIDk4MzpcbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tb3otJyArIGEgKyAnLW1zLScgKyBhICsgYTtcblxuICAgICAgY2FzZSA4ODM6XG4gICAgICAgIGlmICg0NSA9PT0gYS5jaGFyQ29kZUF0KDgpKSByZXR1cm4gJy13ZWJraXQtJyArIGEgKyBhO1xuICAgICAgICBpZiAoMCA8IGEuaW5kZXhPZignaW1hZ2Utc2V0KCcsIDExKSkgcmV0dXJuIGEucmVwbGFjZShqYSwgJyQxLXdlYmtpdC0kMicpICsgYTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgOTMyOlxuICAgICAgICBpZiAoNDUgPT09IGEuY2hhckNvZGVBdCg0KSkgc3dpdGNoIChhLmNoYXJDb2RlQXQoNSkpIHtcbiAgICAgICAgICBjYXNlIDEwMzpcbiAgICAgICAgICAgIHJldHVybiAnLXdlYmtpdC1ib3gtJyArIGEucmVwbGFjZSgnLWdyb3cnLCAnJykgKyAnLXdlYmtpdC0nICsgYSArICctbXMtJyArIGEucmVwbGFjZSgnZ3JvdycsICdwb3NpdGl2ZScpICsgYTtcblxuICAgICAgICAgIGNhc2UgMTE1OlxuICAgICAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy0nICsgYS5yZXBsYWNlKCdzaHJpbmsnLCAnbmVnYXRpdmUnKSArIGE7XG5cbiAgICAgICAgICBjYXNlIDk4OlxuICAgICAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy0nICsgYS5yZXBsYWNlKCdiYXNpcycsICdwcmVmZXJyZWQtc2l6ZScpICsgYTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLScgKyBhICsgYTtcblxuICAgICAgY2FzZSA5NjQ6XG4gICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtZmxleC0nICsgYSArIGE7XG5cbiAgICAgIGNhc2UgMTAyMzpcbiAgICAgICAgaWYgKDk5ICE9PSBhLmNoYXJDb2RlQXQoOCkpIGJyZWFrO1xuICAgICAgICBiID0gYS5zdWJzdHJpbmcoYS5pbmRleE9mKCc6JywgMTUpKS5yZXBsYWNlKCdmbGV4LScsICcnKS5yZXBsYWNlKCdzcGFjZS1iZXR3ZWVuJywgJ2p1c3RpZnknKTtcbiAgICAgICAgcmV0dXJuICctd2Via2l0LWJveC1wYWNrJyArIGIgKyAnLXdlYmtpdC0nICsgYSArICctbXMtZmxleC1wYWNrJyArIGIgKyBhO1xuXG4gICAgICBjYXNlIDEwMDU6XG4gICAgICAgIHJldHVybiBrYS50ZXN0KGEpID8gYS5yZXBsYWNlKGFhLCAnOi13ZWJraXQtJykgKyBhLnJlcGxhY2UoYWEsICc6LW1vei0nKSArIGEgOiBhO1xuXG4gICAgICBjYXNlIDFlMzpcbiAgICAgICAgYiA9IGEuc3Vic3RyaW5nKDEzKS50cmltKCk7XG4gICAgICAgIGMgPSBiLmluZGV4T2YoJy0nKSArIDE7XG5cbiAgICAgICAgc3dpdGNoIChiLmNoYXJDb2RlQXQoMCkgKyBiLmNoYXJDb2RlQXQoYykpIHtcbiAgICAgICAgICBjYXNlIDIyNjpcbiAgICAgICAgICAgIGIgPSBhLnJlcGxhY2UoRywgJ3RiJyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgMjMyOlxuICAgICAgICAgICAgYiA9IGEucmVwbGFjZShHLCAndGItcmwnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAyMjA6XG4gICAgICAgICAgICBiID0gYS5yZXBsYWNlKEcsICdscicpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLScgKyBiICsgYTtcblxuICAgICAgY2FzZSAxMDE3OlxuICAgICAgICBpZiAoLTEgPT09IGEuaW5kZXhPZignc3RpY2t5JywgOSkpIGJyZWFrO1xuXG4gICAgICBjYXNlIDk3NTpcbiAgICAgICAgYyA9IChhID0gZCkubGVuZ3RoIC0gMTA7XG4gICAgICAgIGIgPSAoMzMgPT09IGEuY2hhckNvZGVBdChjKSA/IGEuc3Vic3RyaW5nKDAsIGMpIDogYSkuc3Vic3RyaW5nKGQuaW5kZXhPZignOicsIDcpICsgMSkudHJpbSgpO1xuXG4gICAgICAgIHN3aXRjaCAobSA9IGIuY2hhckNvZGVBdCgwKSArIChiLmNoYXJDb2RlQXQoNykgfCAwKSkge1xuICAgICAgICAgIGNhc2UgMjAzOlxuICAgICAgICAgICAgaWYgKDExMSA+IGIuY2hhckNvZGVBdCg4KSkgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDExNTpcbiAgICAgICAgICAgIGEgPSBhLnJlcGxhY2UoYiwgJy13ZWJraXQtJyArIGIpICsgJzsnICsgYTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAyMDc6XG4gICAgICAgICAgY2FzZSAxMDI6XG4gICAgICAgICAgICBhID0gYS5yZXBsYWNlKGIsICctd2Via2l0LScgKyAoMTAyIDwgbSA/ICdpbmxpbmUtJyA6ICcnKSArICdib3gnKSArICc7JyArIGEucmVwbGFjZShiLCAnLXdlYmtpdC0nICsgYikgKyAnOycgKyBhLnJlcGxhY2UoYiwgJy1tcy0nICsgYiArICdib3gnKSArICc7JyArIGE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYSArICc7JztcblxuICAgICAgY2FzZSA5Mzg6XG4gICAgICAgIGlmICg0NSA9PT0gYS5jaGFyQ29kZUF0KDUpKSBzd2l0Y2ggKGEuY2hhckNvZGVBdCg2KSkge1xuICAgICAgICAgIGNhc2UgMTA1OlxuICAgICAgICAgICAgcmV0dXJuIGIgPSBhLnJlcGxhY2UoJy1pdGVtcycsICcnKSwgJy13ZWJraXQtJyArIGEgKyAnLXdlYmtpdC1ib3gtJyArIGIgKyAnLW1zLWZsZXgtJyArIGIgKyBhO1xuXG4gICAgICAgICAgY2FzZSAxMTU6XG4gICAgICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLWZsZXgtaXRlbS0nICsgYS5yZXBsYWNlKGJhLCAnJykgKyBhO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtZmxleC1saW5lLXBhY2snICsgYS5yZXBsYWNlKCdhbGlnbi1jb250ZW50JywgJycpLnJlcGxhY2UoYmEsICcnKSArIGE7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgOTczOlxuICAgICAgY2FzZSA5ODk6XG4gICAgICAgIGlmICg0NSAhPT0gYS5jaGFyQ29kZUF0KDMpIHx8IDEyMiA9PT0gYS5jaGFyQ29kZUF0KDQpKSBicmVhaztcblxuICAgICAgY2FzZSA5MzE6XG4gICAgICBjYXNlIDk1MzpcbiAgICAgICAgaWYgKCEwID09PSBsYS50ZXN0KGQpKSByZXR1cm4gMTE1ID09PSAoYiA9IGQuc3Vic3RyaW5nKGQuaW5kZXhPZignOicpICsgMSkpLmNoYXJDb2RlQXQoMCkgPyBQKGQucmVwbGFjZSgnc3RyZXRjaCcsICdmaWxsLWF2YWlsYWJsZScpLCBjLCBlLCBoKS5yZXBsYWNlKCc6ZmlsbC1hdmFpbGFibGUnLCAnOnN0cmV0Y2gnKSA6IGEucmVwbGFjZShiLCAnLXdlYmtpdC0nICsgYikgKyBhLnJlcGxhY2UoYiwgJy1tb3otJyArIGIucmVwbGFjZSgnZmlsbC0nLCAnJykpICsgYTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgOTYyOlxuICAgICAgICBpZiAoYSA9ICctd2Via2l0LScgKyBhICsgKDEwMiA9PT0gYS5jaGFyQ29kZUF0KDUpID8gJy1tcy0nICsgYSA6ICcnKSArIGEsIDIxMSA9PT0gZSArIGggJiYgMTA1ID09PSBhLmNoYXJDb2RlQXQoMTMpICYmIDAgPCBhLmluZGV4T2YoJ3RyYW5zZm9ybScsIDEwKSkgcmV0dXJuIGEuc3Vic3RyaW5nKDAsIGEuaW5kZXhPZignOycsIDI3KSArIDEpLnJlcGxhY2UobWEsICckMS13ZWJraXQtJDInKSArIGE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGE7XG4gIH1cblxuICBmdW5jdGlvbiBMKGQsIGMpIHtcbiAgICB2YXIgZSA9IGQuaW5kZXhPZigxID09PSBjID8gJzonIDogJ3snKSxcbiAgICAgICAgaCA9IGQuc3Vic3RyaW5nKDAsIDMgIT09IGMgPyBlIDogMTApO1xuICAgIGUgPSBkLnN1YnN0cmluZyhlICsgMSwgZC5sZW5ndGggLSAxKTtcbiAgICByZXR1cm4gUigyICE9PSBjID8gaCA6IGgucmVwbGFjZShuYSwgJyQxJyksIGUsIGMpO1xuICB9XG5cbiAgZnVuY3Rpb24gZWEoZCwgYykge1xuICAgIHZhciBlID0gUChjLCBjLmNoYXJDb2RlQXQoMCksIGMuY2hhckNvZGVBdCgxKSwgYy5jaGFyQ29kZUF0KDIpKTtcbiAgICByZXR1cm4gZSAhPT0gYyArICc7JyA/IGUucmVwbGFjZShvYSwgJyBvciAoJDEpJykuc3Vic3RyaW5nKDQpIDogJygnICsgYyArICcpJztcbiAgfVxuXG4gIGZ1bmN0aW9uIEgoZCwgYywgZSwgaCwgYSwgbSwgYiwgdiwgbiwgcSkge1xuICAgIGZvciAodmFyIGcgPSAwLCB4ID0gYywgdzsgZyA8IEE7ICsrZykge1xuICAgICAgc3dpdGNoICh3ID0gU1tnXS5jYWxsKEIsIGQsIHgsIGUsIGgsIGEsIG0sIGIsIHYsIG4sIHEpKSB7XG4gICAgICAgIGNhc2Ugdm9pZCAwOlxuICAgICAgICBjYXNlICExOlxuICAgICAgICBjYXNlICEwOlxuICAgICAgICBjYXNlIG51bGw6XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB4ID0gdztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoeCAhPT0gYykgcmV0dXJuIHg7XG4gIH1cblxuICBmdW5jdGlvbiBUKGQpIHtcbiAgICBzd2l0Y2ggKGQpIHtcbiAgICAgIGNhc2Ugdm9pZCAwOlxuICAgICAgY2FzZSBudWxsOlxuICAgICAgICBBID0gUy5sZW5ndGggPSAwO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBkKSBTW0ErK10gPSBkO2Vsc2UgaWYgKCdvYmplY3QnID09PSB0eXBlb2YgZCkgZm9yICh2YXIgYyA9IDAsIGUgPSBkLmxlbmd0aDsgYyA8IGU7ICsrYykge1xuICAgICAgICAgIFQoZFtjXSk7XG4gICAgICAgIH0gZWxzZSBZID0gISFkIHwgMDtcbiAgICB9XG5cbiAgICByZXR1cm4gVDtcbiAgfVxuXG4gIGZ1bmN0aW9uIFUoZCkge1xuICAgIGQgPSBkLnByZWZpeDtcbiAgICB2b2lkIDAgIT09IGQgJiYgKFIgPSBudWxsLCBkID8gJ2Z1bmN0aW9uJyAhPT0gdHlwZW9mIGQgPyB3ID0gMSA6ICh3ID0gMiwgUiA9IGQpIDogdyA9IDApO1xuICAgIHJldHVybiBVO1xuICB9XG5cbiAgZnVuY3Rpb24gQihkLCBjKSB7XG4gICAgdmFyIGUgPSBkO1xuICAgIDMzID4gZS5jaGFyQ29kZUF0KDApICYmIChlID0gZS50cmltKCkpO1xuICAgIFYgPSBlO1xuICAgIGUgPSBbVl07XG5cbiAgICBpZiAoMCA8IEEpIHtcbiAgICAgIHZhciBoID0gSCgtMSwgYywgZSwgZSwgRCwgeiwgMCwgMCwgMCwgMCk7XG4gICAgICB2b2lkIDAgIT09IGggJiYgJ3N0cmluZycgPT09IHR5cGVvZiBoICYmIChjID0gaCk7XG4gICAgfVxuXG4gICAgdmFyIGEgPSBNKE8sIGUsIGMsIDAsIDApO1xuICAgIDAgPCBBICYmIChoID0gSCgtMiwgYSwgZSwgZSwgRCwgeiwgYS5sZW5ndGgsIDAsIDAsIDApLCB2b2lkIDAgIT09IGggJiYgKGEgPSBoKSk7XG4gICAgViA9ICcnO1xuICAgIEUgPSAwO1xuICAgIHogPSBEID0gMTtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG4gIHZhciBjYSA9IC9eXFwwKy9nLFxuICAgICAgTiA9IC9bXFwwXFxyXFxmXS9nLFxuICAgICAgYWEgPSAvOiAqL2csXG4gICAgICBrYSA9IC96b298Z3JhLyxcbiAgICAgIG1hID0gLyhbLDogXSkodHJhbnNmb3JtKS9nLFxuICAgICAgaWEgPSAvLFxccis/L2csXG4gICAgICBGID0gLyhbXFx0XFxyXFxuIF0pKlxcZj8mL2csXG4gICAgICBmYSA9IC9AKGtcXHcrKVxccyooXFxTKilcXHMqLyxcbiAgICAgIFEgPSAvOjoocGxhY2UpL2csXG4gICAgICBoYSA9IC86KHJlYWQtb25seSkvZyxcbiAgICAgIEcgPSAvW3N2aF1cXHcrLVt0YmxyXXsyfS8sXG4gICAgICBkYSA9IC9cXChcXHMqKC4qKVxccypcXCkvZyxcbiAgICAgIG9hID0gLyhbXFxzXFxTXSo/KTsvZyxcbiAgICAgIGJhID0gLy1zZWxmfGZsZXgtL2csXG4gICAgICBuYSA9IC9bXl0qPyg6W3JwXVtlbF1hW1xcdy1dKylbXl0qLyxcbiAgICAgIGxhID0gL3N0cmV0Y2h8OlxccypcXHcrXFwtKD86Y29udGV8YXZhaWwpLyxcbiAgICAgIGphID0gLyhbXi1dKShpbWFnZS1zZXRcXCgpLyxcbiAgICAgIHogPSAxLFxuICAgICAgRCA9IDEsXG4gICAgICBFID0gMCxcbiAgICAgIHcgPSAxLFxuICAgICAgTyA9IFtdLFxuICAgICAgUyA9IFtdLFxuICAgICAgQSA9IDAsXG4gICAgICBSID0gbnVsbCxcbiAgICAgIFkgPSAwLFxuICAgICAgViA9ICcnO1xuICBCLnVzZSA9IFQ7XG4gIEIuc2V0ID0gVTtcbiAgdm9pZCAwICE9PSBXICYmIFUoVyk7XG4gIHJldHVybiBCO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHlsaXNfbWluO1xuIiwidmFyIHVuaXRsZXNzS2V5cyA9IHtcbiAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6IDEsXG4gIGJvcmRlckltYWdlT3V0c2V0OiAxLFxuICBib3JkZXJJbWFnZVNsaWNlOiAxLFxuICBib3JkZXJJbWFnZVdpZHRoOiAxLFxuICBib3hGbGV4OiAxLFxuICBib3hGbGV4R3JvdXA6IDEsXG4gIGJveE9yZGluYWxHcm91cDogMSxcbiAgY29sdW1uQ291bnQ6IDEsXG4gIGNvbHVtbnM6IDEsXG4gIGZsZXg6IDEsXG4gIGZsZXhHcm93OiAxLFxuICBmbGV4UG9zaXRpdmU6IDEsXG4gIGZsZXhTaHJpbms6IDEsXG4gIGZsZXhOZWdhdGl2ZTogMSxcbiAgZmxleE9yZGVyOiAxLFxuICBncmlkUm93OiAxLFxuICBncmlkUm93RW5kOiAxLFxuICBncmlkUm93U3BhbjogMSxcbiAgZ3JpZFJvd1N0YXJ0OiAxLFxuICBncmlkQ29sdW1uOiAxLFxuICBncmlkQ29sdW1uRW5kOiAxLFxuICBncmlkQ29sdW1uU3BhbjogMSxcbiAgZ3JpZENvbHVtblN0YXJ0OiAxLFxuICBtc0dyaWRSb3c6IDEsXG4gIG1zR3JpZFJvd1NwYW46IDEsXG4gIG1zR3JpZENvbHVtbjogMSxcbiAgbXNHcmlkQ29sdW1uU3BhbjogMSxcbiAgZm9udFdlaWdodDogMSxcbiAgbGluZUhlaWdodDogMSxcbiAgb3BhY2l0eTogMSxcbiAgb3JkZXI6IDEsXG4gIG9ycGhhbnM6IDEsXG4gIHRhYlNpemU6IDEsXG4gIHdpZG93czogMSxcbiAgekluZGV4OiAxLFxuICB6b29tOiAxLFxuICBXZWJraXRMaW5lQ2xhbXA6IDEsXG4gIC8vIFNWRy1yZWxhdGVkIHByb3BlcnRpZXNcbiAgZmlsbE9wYWNpdHk6IDEsXG4gIGZsb29kT3BhY2l0eTogMSxcbiAgc3RvcE9wYWNpdHk6IDEsXG4gIHN0cm9rZURhc2hhcnJheTogMSxcbiAgc3Ryb2tlRGFzaG9mZnNldDogMSxcbiAgc3Ryb2tlTWl0ZXJsaW1pdDogMSxcbiAgc3Ryb2tlT3BhY2l0eTogMSxcbiAgc3Ryb2tlV2lkdGg6IDFcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVuaXRsZXNzS2V5cztcbiIsInZhciBpc0Jyb3dzZXIgPSBcIm9iamVjdFwiICE9PSAndW5kZWZpbmVkJztcbmZ1bmN0aW9uIGdldFJlZ2lzdGVyZWRTdHlsZXMocmVnaXN0ZXJlZCwgcmVnaXN0ZXJlZFN0eWxlcywgY2xhc3NOYW1lcykge1xuICB2YXIgcmF3Q2xhc3NOYW1lID0gJyc7XG4gIGNsYXNzTmFtZXMuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICBpZiAocmVnaXN0ZXJlZFtjbGFzc05hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlZ2lzdGVyZWRTdHlsZXMucHVzaChyZWdpc3RlcmVkW2NsYXNzTmFtZV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByYXdDbGFzc05hbWUgKz0gY2xhc3NOYW1lICsgXCIgXCI7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJhd0NsYXNzTmFtZTtcbn1cbnZhciBpbnNlcnRTdHlsZXMgPSBmdW5jdGlvbiBpbnNlcnRTdHlsZXMoY2FjaGUsIHNlcmlhbGl6ZWQsIGlzU3RyaW5nVGFnKSB7XG4gIHZhciBjbGFzc05hbWUgPSBjYWNoZS5rZXkgKyBcIi1cIiArIHNlcmlhbGl6ZWQubmFtZTtcblxuICBpZiAoIC8vIHdlIG9ubHkgbmVlZCB0byBhZGQgdGhlIHN0eWxlcyB0byB0aGUgcmVnaXN0ZXJlZCBjYWNoZSBpZiB0aGVcbiAgLy8gY2xhc3MgbmFtZSBjb3VsZCBiZSB1c2VkIGZ1cnRoZXIgZG93blxuICAvLyB0aGUgdHJlZSBidXQgaWYgaXQncyBhIHN0cmluZyB0YWcsIHdlIGtub3cgaXQgd29uJ3RcbiAgLy8gc28gd2UgZG9uJ3QgaGF2ZSB0byBhZGQgaXQgdG8gcmVnaXN0ZXJlZCBjYWNoZS5cbiAgLy8gdGhpcyBpbXByb3ZlcyBtZW1vcnkgdXNhZ2Ugc2luY2Ugd2UgY2FuIGF2b2lkIHN0b3JpbmcgdGhlIHdob2xlIHN0eWxlIHN0cmluZ1xuICAoaXNTdHJpbmdUYWcgPT09IGZhbHNlIHx8IC8vIHdlIG5lZWQgdG8gYWx3YXlzIHN0b3JlIGl0IGlmIHdlJ3JlIGluIGNvbXBhdCBtb2RlIGFuZFxuICAvLyBpbiBub2RlIHNpbmNlIGVtb3Rpb24tc2VydmVyIHJlbGllcyBvbiB3aGV0aGVyIGEgc3R5bGUgaXMgaW5cbiAgLy8gdGhlIHJlZ2lzdGVyZWQgY2FjaGUgdG8ga25vdyB3aGV0aGVyIGEgc3R5bGUgaXMgZ2xvYmFsIG9yIG5vdFxuICAvLyBhbHNvLCBub3RlIHRoYXQgdGhpcyBjaGVjayB3aWxsIGJlIGRlYWQgY29kZSBlbGltaW5hdGVkIGluIHRoZSBicm93c2VyXG4gIGlzQnJvd3NlciA9PT0gZmFsc2UgJiYgY2FjaGUuY29tcGF0ICE9PSB1bmRlZmluZWQpICYmIGNhY2hlLnJlZ2lzdGVyZWRbY2xhc3NOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2FjaGUucmVnaXN0ZXJlZFtjbGFzc05hbWVdID0gc2VyaWFsaXplZC5zdHlsZXM7XG4gIH1cblxuICBpZiAoY2FjaGUuaW5zZXJ0ZWRbc2VyaWFsaXplZC5uYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGN1cnJlbnQgPSBzZXJpYWxpemVkO1xuXG4gICAgZG8ge1xuICAgICAgdmFyIG1heWJlU3R5bGVzID0gY2FjaGUuaW5zZXJ0KFwiLlwiICsgY2xhc3NOYW1lLCBjdXJyZW50LCBjYWNoZS5zaGVldCwgdHJ1ZSk7XG5cbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgfSB3aGlsZSAoY3VycmVudCAhPT0gdW5kZWZpbmVkKTtcbiAgfVxufTtcblxuZXhwb3J0IHsgZ2V0UmVnaXN0ZXJlZFN0eWxlcywgaW5zZXJ0U3R5bGVzIH07XG4iLCJ2YXIgd2Vha01lbW9pemUgPSBmdW5jdGlvbiB3ZWFrTWVtb2l6ZShmdW5jKSB7XG4gIC8vICRGbG93Rml4TWUgZmxvdyBkb2Vzbid0IGluY2x1ZGUgYWxsIG5vbi1wcmltaXRpdmUgdHlwZXMgYXMgYWxsb3dlZCBmb3Igd2Vha21hcHNcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhcmcpIHtcbiAgICBpZiAoY2FjaGUuaGFzKGFyZykpIHtcbiAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgIHJldHVybiBjYWNoZS5nZXQoYXJnKTtcbiAgICB9XG5cbiAgICB2YXIgcmV0ID0gZnVuYyhhcmcpO1xuICAgIGNhY2hlLnNldChhcmcsIHJldCk7XG4gICAgcmV0dXJuIHJldDtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdlYWtNZW1vaXplO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTtcbiAgICBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTtcbiAgICB9KTtcbiAgICBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7XG4gIH1cblxuICByZXR1cm4ga2V5cztcbn1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZDIodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG5cbiAgICBpZiAoaSAlIDIpIHtcbiAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcblxuICB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG5cbiAgdmFyIGtleSwgaTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxudmFyIGlzRnVuY3Rpb24gPSBmdW5jdGlvbiBpc0Z1bmN0aW9uKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cbnZhciBNRFhDb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQoe30pO1xudmFyIHdpdGhNRFhDb21wb25lbnRzID0gZnVuY3Rpb24gd2l0aE1EWENvbXBvbmVudHMoQ29tcG9uZW50KSB7XG4gIHJldHVybiBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcHMuY29tcG9uZW50cyk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICBjb21wb25lbnRzOiBhbGxDb21wb25lbnRzXG4gICAgfSkpO1xuICB9O1xufTtcbnZhciB1c2VNRFhDb21wb25lbnRzID0gZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIHZhciBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dCk7XG4gIHZhciBhbGxDb21wb25lbnRzID0gY29udGV4dENvbXBvbmVudHM7XG5cbiAgaWYgKGNvbXBvbmVudHMpIHtcbiAgICBhbGxDb21wb25lbnRzID0gaXNGdW5jdGlvbihjb21wb25lbnRzKSA/IGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpIDogX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIGNvbnRleHRDb21wb25lbnRzKSwgY29tcG9uZW50cyk7XG4gIH1cblxuICByZXR1cm4gYWxsQ29tcG9uZW50cztcbn07XG52YXIgTURYUHJvdmlkZXIgPSBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wcykge1xuICB2YXIgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcHMuY29tcG9uZW50cyk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChNRFhDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IGFsbENvbXBvbmVudHNcbiAgfSwgcHJvcHMuY2hpbGRyZW4pO1xufTtcblxudmFyIFRZUEVfUFJPUF9OQU1FID0gJ21keFR5cGUnO1xudmFyIERFRkFVTFRTID0ge1xuICBpbmxpbmVDb2RlOiAnY29kZScsXG4gIHdyYXBwZXI6IGZ1bmN0aW9uIHdyYXBwZXIoX3JlZikge1xuICAgIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW47XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCB7fSwgY2hpbGRyZW4pO1xuICB9XG59O1xudmFyIE1EWENyZWF0ZUVsZW1lbnQgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICB2YXIgcHJvcENvbXBvbmVudHMgPSBwcm9wcy5jb21wb25lbnRzLFxuICAgICAgbWR4VHlwZSA9IHByb3BzLm1keFR5cGUsXG4gICAgICBvcmlnaW5hbFR5cGUgPSBwcm9wcy5vcmlnaW5hbFR5cGUsXG4gICAgICBwYXJlbnROYW1lID0gcHJvcHMucGFyZW50TmFtZSxcbiAgICAgIGV0YyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY29tcG9uZW50c1wiLCBcIm1keFR5cGVcIiwgXCJvcmlnaW5hbFR5cGVcIiwgXCJwYXJlbnROYW1lXCJdKTtcblxuICB2YXIgY29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcENvbXBvbmVudHMpO1xuICB2YXIgdHlwZSA9IG1keFR5cGU7XG4gIHZhciBDb21wb25lbnQgPSBjb21wb25lbnRzW1wiXCIuY29uY2F0KHBhcmVudE5hbWUsIFwiLlwiKS5jb25jYXQodHlwZSldIHx8IGNvbXBvbmVudHNbdHlwZV0gfHwgREVGQVVMVFNbdHlwZV0gfHwgb3JpZ2luYWxUeXBlO1xuXG4gIGlmIChwcm9wQ29tcG9uZW50cykge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHtcbiAgICAgIHJlZjogcmVmXG4gICAgfSwgZXRjKSwge30sIHtcbiAgICAgIGNvbXBvbmVudHM6IHByb3BDb21wb25lbnRzXG4gICAgfSkpO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX29iamVjdFNwcmVhZDIoe1xuICAgIHJlZjogcmVmXG4gIH0sIGV0YykpO1xufSk7XG5NRFhDcmVhdGVFbGVtZW50LmRpc3BsYXlOYW1lID0gJ01EWENyZWF0ZUVsZW1lbnQnO1xuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCAodHlwZSwgcHJvcHMpIHtcbiAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gIHZhciBtZHhUeXBlID0gcHJvcHMgJiYgcHJvcHMubWR4VHlwZTtcblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IG1keFR5cGUpIHtcbiAgICB2YXIgYXJnc0xlbmd0aCA9IGFyZ3MubGVuZ3RoO1xuICAgIHZhciBjcmVhdGVFbGVtZW50QXJnQXJyYXkgPSBuZXcgQXJyYXkoYXJnc0xlbmd0aCk7XG4gICAgY3JlYXRlRWxlbWVudEFyZ0FycmF5WzBdID0gTURYQ3JlYXRlRWxlbWVudDtcbiAgICB2YXIgbmV3UHJvcHMgPSB7fTtcblxuICAgIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwocHJvcHMsIGtleSkpIHtcbiAgICAgICAgbmV3UHJvcHNba2V5XSA9IHByb3BzW2tleV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgbmV3UHJvcHMub3JpZ2luYWxUeXBlID0gdHlwZTtcbiAgICBuZXdQcm9wc1tUWVBFX1BST1BfTkFNRV0gPSB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgPyB0eXBlIDogbWR4VHlwZTtcbiAgICBjcmVhdGVFbGVtZW50QXJnQXJyYXlbMV0gPSBuZXdQcm9wcztcblxuICAgIGZvciAodmFyIGkgPSAyOyBpIDwgYXJnc0xlbmd0aDsgaSsrKSB7XG4gICAgICBjcmVhdGVFbGVtZW50QXJnQXJyYXlbaV0gPSBhcmdzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50LmFwcGx5KG51bGwsIGNyZWF0ZUVsZW1lbnRBcmdBcnJheSk7XG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudC5hcHBseShudWxsLCBhcmdzKTtcbn1cblxuZXhwb3J0IHsgTURYQ29udGV4dCwgTURYUHJvdmlkZXIsIGNyZWF0ZUVsZW1lbnQgYXMgbWR4LCB1c2VNRFhDb21wb25lbnRzLCB3aXRoTURYQ29tcG9uZW50cyB9O1xuIiwiaW1wb3J0IHsgc3lzdGVtIH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vY29yZSc7XG52YXIgY29uZmlnID0ge1xuICBiYWNrZ3JvdW5kOiB0cnVlLFxuICBiYWNrZ3JvdW5kSW1hZ2U6IHRydWUsXG4gIGJhY2tncm91bmRTaXplOiB0cnVlLFxuICBiYWNrZ3JvdW5kUG9zaXRpb246IHRydWUsXG4gIGJhY2tncm91bmRSZXBlYXQ6IHRydWVcbn07XG5jb25maWcuYmdJbWFnZSA9IGNvbmZpZy5iYWNrZ3JvdW5kSW1hZ2U7XG5jb25maWcuYmdTaXplID0gY29uZmlnLmJhY2tncm91bmRTaXplO1xuY29uZmlnLmJnUG9zaXRpb24gPSBjb25maWcuYmFja2dyb3VuZFBvc2l0aW9uO1xuY29uZmlnLmJnUmVwZWF0ID0gY29uZmlnLmJhY2tncm91bmRSZXBlYXQ7XG5leHBvcnQgdmFyIGJhY2tncm91bmQgPSBzeXN0ZW0oY29uZmlnKTtcbmV4cG9ydCBkZWZhdWx0IGJhY2tncm91bmQ7XG4iLCJpbXBvcnQgeyBzeXN0ZW0gfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9jb3JlJztcbnZhciBjb25maWcgPSB7XG4gIGJvcmRlcjoge1xuICAgIHByb3BlcnR5OiAnYm9yZGVyJyxcbiAgICBzY2FsZTogJ2JvcmRlcnMnXG4gIH0sXG4gIGJvcmRlcldpZHRoOiB7XG4gICAgcHJvcGVydHk6ICdib3JkZXJXaWR0aCcsXG4gICAgc2NhbGU6ICdib3JkZXJXaWR0aHMnXG4gIH0sXG4gIGJvcmRlclN0eWxlOiB7XG4gICAgcHJvcGVydHk6ICdib3JkZXJTdHlsZScsXG4gICAgc2NhbGU6ICdib3JkZXJTdHlsZXMnXG4gIH0sXG4gIGJvcmRlckNvbG9yOiB7XG4gICAgcHJvcGVydHk6ICdib3JkZXJDb2xvcicsXG4gICAgc2NhbGU6ICdjb2xvcnMnXG4gIH0sXG4gIGJvcmRlclJhZGl1czoge1xuICAgIHByb3BlcnR5OiAnYm9yZGVyUmFkaXVzJyxcbiAgICBzY2FsZTogJ3JhZGlpJ1xuICB9LFxuICBib3JkZXJUb3A6IHtcbiAgICBwcm9wZXJ0eTogJ2JvcmRlclRvcCcsXG4gICAgc2NhbGU6ICdib3JkZXJzJ1xuICB9LFxuICBib3JkZXJUb3BMZWZ0UmFkaXVzOiB7XG4gICAgcHJvcGVydHk6ICdib3JkZXJUb3BMZWZ0UmFkaXVzJyxcbiAgICBzY2FsZTogJ3JhZGlpJ1xuICB9LFxuICBib3JkZXJUb3BSaWdodFJhZGl1czoge1xuICAgIHByb3BlcnR5OiAnYm9yZGVyVG9wUmlnaHRSYWRpdXMnLFxuICAgIHNjYWxlOiAncmFkaWknXG4gIH0sXG4gIGJvcmRlclJpZ2h0OiB7XG4gICAgcHJvcGVydHk6ICdib3JkZXJSaWdodCcsXG4gICAgc2NhbGU6ICdib3JkZXJzJ1xuICB9LFxuICBib3JkZXJCb3R0b206IHtcbiAgICBwcm9wZXJ0eTogJ2JvcmRlckJvdHRvbScsXG4gICAgc2NhbGU6ICdib3JkZXJzJ1xuICB9LFxuICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzOiB7XG4gICAgcHJvcGVydHk6ICdib3JkZXJCb3R0b21MZWZ0UmFkaXVzJyxcbiAgICBzY2FsZTogJ3JhZGlpJ1xuICB9LFxuICBib3JkZXJCb3R0b21SaWdodFJhZGl1czoge1xuICAgIHByb3BlcnR5OiAnYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMnLFxuICAgIHNjYWxlOiAncmFkaWknXG4gIH0sXG4gIGJvcmRlckxlZnQ6IHtcbiAgICBwcm9wZXJ0eTogJ2JvcmRlckxlZnQnLFxuICAgIHNjYWxlOiAnYm9yZGVycydcbiAgfSxcbiAgYm9yZGVyWDoge1xuICAgIHByb3BlcnRpZXM6IFsnYm9yZGVyTGVmdCcsICdib3JkZXJSaWdodCddLFxuICAgIHNjYWxlOiAnYm9yZGVycydcbiAgfSxcbiAgYm9yZGVyWToge1xuICAgIHByb3BlcnRpZXM6IFsnYm9yZGVyVG9wJywgJ2JvcmRlckJvdHRvbSddLFxuICAgIHNjYWxlOiAnYm9yZGVycydcbiAgfVxufTtcbmNvbmZpZy5ib3JkZXJUb3BXaWR0aCA9IHtcbiAgcHJvcGVydHk6ICdib3JkZXJUb3BXaWR0aCcsXG4gIHNjYWxlOiAnYm9yZGVyV2lkdGhzJ1xufTtcbmNvbmZpZy5ib3JkZXJUb3BDb2xvciA9IHtcbiAgcHJvcGVydHk6ICdib3JkZXJUb3BDb2xvcicsXG4gIHNjYWxlOiAnY29sb3JzJ1xufTtcbmNvbmZpZy5ib3JkZXJUb3BTdHlsZSA9IHtcbiAgcHJvcGVydHk6ICdib3JkZXJUb3BTdHlsZScsXG4gIHNjYWxlOiAnYm9yZGVyU3R5bGVzJ1xufTtcbmNvbmZpZy5ib3JkZXJUb3BMZWZ0UmFkaXVzID0ge1xuICBwcm9wZXJ0eTogJ2JvcmRlclRvcExlZnRSYWRpdXMnLFxuICBzY2FsZTogJ3JhZGlpJ1xufTtcbmNvbmZpZy5ib3JkZXJUb3BSaWdodFJhZGl1cyA9IHtcbiAgcHJvcGVydHk6ICdib3JkZXJUb3BSaWdodFJhZGl1cycsXG4gIHNjYWxlOiAncmFkaWknXG59O1xuY29uZmlnLmJvcmRlckJvdHRvbVdpZHRoID0ge1xuICBwcm9wZXJ0eTogJ2JvcmRlckJvdHRvbVdpZHRoJyxcbiAgc2NhbGU6ICdib3JkZXJXaWR0aHMnXG59O1xuY29uZmlnLmJvcmRlckJvdHRvbUNvbG9yID0ge1xuICBwcm9wZXJ0eTogJ2JvcmRlckJvdHRvbUNvbG9yJyxcbiAgc2NhbGU6ICdjb2xvcnMnXG59O1xuY29uZmlnLmJvcmRlckJvdHRvbVN0eWxlID0ge1xuICBwcm9wZXJ0eTogJ2JvcmRlckJvdHRvbVN0eWxlJyxcbiAgc2NhbGU6ICdib3JkZXJTdHlsZXMnXG59O1xuY29uZmlnLmJvcmRlckJvdHRvbUxlZnRSYWRpdXMgPSB7XG4gIHByb3BlcnR5OiAnYm9yZGVyQm90dG9tTGVmdFJhZGl1cycsXG4gIHNjYWxlOiAncmFkaWknXG59O1xuY29uZmlnLmJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzID0ge1xuICBwcm9wZXJ0eTogJ2JvcmRlckJvdHRvbVJpZ2h0UmFkaXVzJyxcbiAgc2NhbGU6ICdyYWRpaSdcbn07XG5jb25maWcuYm9yZGVyTGVmdFdpZHRoID0ge1xuICBwcm9wZXJ0eTogJ2JvcmRlckxlZnRXaWR0aCcsXG4gIHNjYWxlOiAnYm9yZGVyV2lkdGhzJ1xufTtcbmNvbmZpZy5ib3JkZXJMZWZ0Q29sb3IgPSB7XG4gIHByb3BlcnR5OiAnYm9yZGVyTGVmdENvbG9yJyxcbiAgc2NhbGU6ICdjb2xvcnMnXG59O1xuY29uZmlnLmJvcmRlckxlZnRTdHlsZSA9IHtcbiAgcHJvcGVydHk6ICdib3JkZXJMZWZ0U3R5bGUnLFxuICBzY2FsZTogJ2JvcmRlclN0eWxlcydcbn07XG5jb25maWcuYm9yZGVyUmlnaHRXaWR0aCA9IHtcbiAgcHJvcGVydHk6ICdib3JkZXJSaWdodFdpZHRoJyxcbiAgc2NhbGU6ICdib3JkZXJXaWR0aHMnXG59O1xuY29uZmlnLmJvcmRlclJpZ2h0Q29sb3IgPSB7XG4gIHByb3BlcnR5OiAnYm9yZGVyUmlnaHRDb2xvcicsXG4gIHNjYWxlOiAnY29sb3JzJ1xufTtcbmNvbmZpZy5ib3JkZXJSaWdodFN0eWxlID0ge1xuICBwcm9wZXJ0eTogJ2JvcmRlclJpZ2h0U3R5bGUnLFxuICBzY2FsZTogJ2JvcmRlclN0eWxlcydcbn07XG5leHBvcnQgdmFyIGJvcmRlciA9IHN5c3RlbShjb25maWcpO1xuZXhwb3J0IGRlZmF1bHQgYm9yZGVyO1xuIiwiaW1wb3J0IHsgc3lzdGVtIH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vY29yZSc7XG52YXIgY29uZmlnID0ge1xuICBjb2xvcjoge1xuICAgIHByb3BlcnR5OiAnY29sb3InLFxuICAgIHNjYWxlOiAnY29sb3JzJ1xuICB9LFxuICBiYWNrZ3JvdW5kQ29sb3I6IHtcbiAgICBwcm9wZXJ0eTogJ2JhY2tncm91bmRDb2xvcicsXG4gICAgc2NhbGU6ICdjb2xvcnMnXG4gIH0sXG4gIG9wYWNpdHk6IHRydWVcbn07XG5jb25maWcuYmcgPSBjb25maWcuYmFja2dyb3VuZENvbG9yO1xuZXhwb3J0IHZhciBjb2xvciA9IHN5c3RlbShjb25maWcpO1xuZXhwb3J0IGRlZmF1bHQgY29sb3I7XG4iLCJpbXBvcnQgYXNzaWduIGZyb20gJ29iamVjdC1hc3NpZ24nO1xuZXhwb3J0IHZhciBtZXJnZSA9IGZ1bmN0aW9uIG1lcmdlKGEsIGIpIHtcbiAgdmFyIHJlc3VsdCA9IGFzc2lnbih7fSwgYSwgYik7XG5cbiAgZm9yICh2YXIga2V5IGluIGEpIHtcbiAgICB2YXIgX2Fzc2lnbjtcblxuICAgIGlmICghYVtrZXldIHx8IHR5cGVvZiBiW2tleV0gIT09ICdvYmplY3QnKSBjb250aW51ZTtcbiAgICBhc3NpZ24ocmVzdWx0LCAoX2Fzc2lnbiA9IHt9LCBfYXNzaWduW2tleV0gPSBhc3NpZ24oYVtrZXldLCBiW2tleV0pLCBfYXNzaWduKSk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTsgLy8gc29ydCBvYmplY3QtdmFsdWUgcmVzcG9uc2l2ZSBzdHlsZXNcblxudmFyIHNvcnQgPSBmdW5jdGlvbiBzb3J0KG9iaikge1xuICB2YXIgbmV4dCA9IHt9O1xuICBPYmplY3Qua2V5cyhvYmopLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gYS5sb2NhbGVDb21wYXJlKGIsIHVuZGVmaW5lZCwge1xuICAgICAgbnVtZXJpYzogdHJ1ZSxcbiAgICAgIHNlbnNpdGl2aXR5OiAnYmFzZSdcbiAgICB9KTtcbiAgfSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgbmV4dFtrZXldID0gb2JqW2tleV07XG4gIH0pO1xuICByZXR1cm4gbmV4dDtcbn07XG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgYnJlYWtwb2ludHM6IFs0MCwgNTIsIDY0XS5tYXAoZnVuY3Rpb24gKG4pIHtcbiAgICByZXR1cm4gbiArICdlbSc7XG4gIH0pXG59O1xuXG52YXIgY3JlYXRlTWVkaWFRdWVyeSA9IGZ1bmN0aW9uIGNyZWF0ZU1lZGlhUXVlcnkobikge1xuICByZXR1cm4gXCJAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBcIiArIG4gKyBcIilcIjtcbn07XG5cbnZhciBnZXRWYWx1ZSA9IGZ1bmN0aW9uIGdldFZhbHVlKG4sIHNjYWxlKSB7XG4gIHJldHVybiBnZXQoc2NhbGUsIG4sIG4pO1xufTtcblxuZXhwb3J0IHZhciBnZXQgPSBmdW5jdGlvbiBnZXQob2JqLCBrZXksIGRlZiwgcCwgdW5kZWYpIHtcbiAga2V5ID0ga2V5ICYmIGtleS5zcGxpdCA/IGtleS5zcGxpdCgnLicpIDogW2tleV07XG5cbiAgZm9yIChwID0gMDsgcCA8IGtleS5sZW5ndGg7IHArKykge1xuICAgIG9iaiA9IG9iaiA/IG9ialtrZXlbcF1dIDogdW5kZWY7XG4gIH1cblxuICByZXR1cm4gb2JqID09PSB1bmRlZiA/IGRlZiA6IG9iajtcbn07XG5leHBvcnQgdmFyIGNyZWF0ZVBhcnNlciA9IGZ1bmN0aW9uIGNyZWF0ZVBhcnNlcihjb25maWcpIHtcbiAgdmFyIGNhY2hlID0ge307XG5cbiAgdmFyIHBhcnNlID0gZnVuY3Rpb24gcGFyc2UocHJvcHMpIHtcbiAgICB2YXIgc3R5bGVzID0ge307XG4gICAgdmFyIHNob3VsZFNvcnQgPSBmYWxzZTtcbiAgICB2YXIgaXNDYWNoZURpc2FibGVkID0gcHJvcHMudGhlbWUgJiYgcHJvcHMudGhlbWUuZGlzYWJsZVN0eWxlZFN5c3RlbUNhY2hlO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgICBpZiAoIWNvbmZpZ1trZXldKSBjb250aW51ZTtcbiAgICAgIHZhciBzeCA9IGNvbmZpZ1trZXldO1xuICAgICAgdmFyIHJhdyA9IHByb3BzW2tleV07XG4gICAgICB2YXIgc2NhbGUgPSBnZXQocHJvcHMudGhlbWUsIHN4LnNjYWxlLCBzeC5kZWZhdWx0cyk7XG5cbiAgICAgIGlmICh0eXBlb2YgcmF3ID09PSAnb2JqZWN0Jykge1xuICAgICAgICBjYWNoZS5icmVha3BvaW50cyA9ICFpc0NhY2hlRGlzYWJsZWQgJiYgY2FjaGUuYnJlYWtwb2ludHMgfHwgZ2V0KHByb3BzLnRoZW1lLCAnYnJlYWtwb2ludHMnLCBkZWZhdWx0cy5icmVha3BvaW50cyk7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmF3KSkge1xuICAgICAgICAgIGNhY2hlLm1lZGlhID0gIWlzQ2FjaGVEaXNhYmxlZCAmJiBjYWNoZS5tZWRpYSB8fCBbbnVsbF0uY29uY2F0KGNhY2hlLmJyZWFrcG9pbnRzLm1hcChjcmVhdGVNZWRpYVF1ZXJ5KSk7XG4gICAgICAgICAgc3R5bGVzID0gbWVyZ2Uoc3R5bGVzLCBwYXJzZVJlc3BvbnNpdmVTdHlsZShjYWNoZS5tZWRpYSwgc3gsIHNjYWxlLCByYXcsIHByb3BzKSk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmF3ICE9PSBudWxsKSB7XG4gICAgICAgICAgc3R5bGVzID0gbWVyZ2Uoc3R5bGVzLCBwYXJzZVJlc3BvbnNpdmVPYmplY3QoY2FjaGUuYnJlYWtwb2ludHMsIHN4LCBzY2FsZSwgcmF3LCBwcm9wcykpO1xuICAgICAgICAgIHNob3VsZFNvcnQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGFzc2lnbihzdHlsZXMsIHN4KHJhdywgc2NhbGUsIHByb3BzKSk7XG4gICAgfSAvLyBzb3J0IG9iamVjdC1iYXNlZCByZXNwb25zaXZlIHN0eWxlc1xuXG5cbiAgICBpZiAoc2hvdWxkU29ydCkge1xuICAgICAgc3R5bGVzID0gc29ydChzdHlsZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBzdHlsZXM7XG4gIH07XG5cbiAgcGFyc2UuY29uZmlnID0gY29uZmlnO1xuICBwYXJzZS5wcm9wTmFtZXMgPSBPYmplY3Qua2V5cyhjb25maWcpO1xuICBwYXJzZS5jYWNoZSA9IGNhY2hlO1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGNvbmZpZykuZmlsdGVyKGZ1bmN0aW9uIChrKSB7XG4gICAgcmV0dXJuIGsgIT09ICdjb25maWcnO1xuICB9KTtcblxuICBpZiAoa2V5cy5sZW5ndGggPiAxKSB7XG4gICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBfY3JlYXRlUGFyc2VyO1xuXG4gICAgICBwYXJzZVtrZXldID0gY3JlYXRlUGFyc2VyKChfY3JlYXRlUGFyc2VyID0ge30sIF9jcmVhdGVQYXJzZXJba2V5XSA9IGNvbmZpZ1trZXldLCBfY3JlYXRlUGFyc2VyKSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gcGFyc2U7XG59O1xuXG52YXIgcGFyc2VSZXNwb25zaXZlU3R5bGUgPSBmdW5jdGlvbiBwYXJzZVJlc3BvbnNpdmVTdHlsZShtZWRpYVF1ZXJpZXMsIHN4LCBzY2FsZSwgcmF3LCBfcHJvcHMpIHtcbiAgdmFyIHN0eWxlcyA9IHt9O1xuICByYXcuc2xpY2UoMCwgbWVkaWFRdWVyaWVzLmxlbmd0aCkuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGkpIHtcbiAgICB2YXIgbWVkaWEgPSBtZWRpYVF1ZXJpZXNbaV07XG4gICAgdmFyIHN0eWxlID0gc3godmFsdWUsIHNjYWxlLCBfcHJvcHMpO1xuXG4gICAgaWYgKCFtZWRpYSkge1xuICAgICAgYXNzaWduKHN0eWxlcywgc3R5bGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2Fzc2lnbjI7XG5cbiAgICAgIGFzc2lnbihzdHlsZXMsIChfYXNzaWduMiA9IHt9LCBfYXNzaWduMlttZWRpYV0gPSBhc3NpZ24oe30sIHN0eWxlc1ttZWRpYV0sIHN0eWxlKSwgX2Fzc2lnbjIpKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gc3R5bGVzO1xufTtcblxudmFyIHBhcnNlUmVzcG9uc2l2ZU9iamVjdCA9IGZ1bmN0aW9uIHBhcnNlUmVzcG9uc2l2ZU9iamVjdChicmVha3BvaW50cywgc3gsIHNjYWxlLCByYXcsIF9wcm9wcykge1xuICB2YXIgc3R5bGVzID0ge307XG5cbiAgZm9yICh2YXIga2V5IGluIHJhdykge1xuICAgIHZhciBicmVha3BvaW50ID0gYnJlYWtwb2ludHNba2V5XTtcbiAgICB2YXIgdmFsdWUgPSByYXdba2V5XTtcbiAgICB2YXIgc3R5bGUgPSBzeCh2YWx1ZSwgc2NhbGUsIF9wcm9wcyk7XG5cbiAgICBpZiAoIWJyZWFrcG9pbnQpIHtcbiAgICAgIGFzc2lnbihzdHlsZXMsIHN0eWxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9hc3NpZ24zO1xuXG4gICAgICB2YXIgbWVkaWEgPSBjcmVhdGVNZWRpYVF1ZXJ5KGJyZWFrcG9pbnQpO1xuICAgICAgYXNzaWduKHN0eWxlcywgKF9hc3NpZ24zID0ge30sIF9hc3NpZ24zW21lZGlhXSA9IGFzc2lnbih7fSwgc3R5bGVzW21lZGlhXSwgc3R5bGUpLCBfYXNzaWduMykpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHlsZXM7XG59O1xuXG5leHBvcnQgdmFyIGNyZWF0ZVN0eWxlRnVuY3Rpb24gPSBmdW5jdGlvbiBjcmVhdGVTdHlsZUZ1bmN0aW9uKF9yZWYpIHtcbiAgdmFyIHByb3BlcnRpZXMgPSBfcmVmLnByb3BlcnRpZXMsXG4gICAgICBwcm9wZXJ0eSA9IF9yZWYucHJvcGVydHksXG4gICAgICBzY2FsZSA9IF9yZWYuc2NhbGUsXG4gICAgICBfcmVmJHRyYW5zZm9ybSA9IF9yZWYudHJhbnNmb3JtLFxuICAgICAgdHJhbnNmb3JtID0gX3JlZiR0cmFuc2Zvcm0gPT09IHZvaWQgMCA/IGdldFZhbHVlIDogX3JlZiR0cmFuc2Zvcm0sXG4gICAgICBkZWZhdWx0U2NhbGUgPSBfcmVmLmRlZmF1bHRTY2FsZTtcbiAgcHJvcGVydGllcyA9IHByb3BlcnRpZXMgfHwgW3Byb3BlcnR5XTtcblxuICB2YXIgc3ggPSBmdW5jdGlvbiBzeCh2YWx1ZSwgc2NhbGUsIF9wcm9wcykge1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICB2YXIgbiA9IHRyYW5zZm9ybSh2YWx1ZSwgc2NhbGUsIF9wcm9wcyk7XG4gICAgaWYgKG4gPT09IG51bGwpIHJldHVybjtcbiAgICBwcm9wZXJ0aWVzLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgIHJlc3VsdFtwcm9wXSA9IG47XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICBzeC5zY2FsZSA9IHNjYWxlO1xuICBzeC5kZWZhdWx0cyA9IGRlZmF1bHRTY2FsZTtcbiAgcmV0dXJuIHN4O1xufTsgLy8gbmV3IHY1IEFQSVxuXG5leHBvcnQgdmFyIHN5c3RlbSA9IGZ1bmN0aW9uIHN5c3RlbShhcmdzKSB7XG4gIGlmIChhcmdzID09PSB2b2lkIDApIHtcbiAgICBhcmdzID0ge307XG4gIH1cblxuICB2YXIgY29uZmlnID0ge307XG4gIE9iamVjdC5rZXlzKGFyZ3MpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciBjb25mID0gYXJnc1trZXldO1xuXG4gICAgaWYgKGNvbmYgPT09IHRydWUpIHtcbiAgICAgIC8vIHNob3J0Y3V0IGRlZmluaXRpb25cbiAgICAgIGNvbmZpZ1trZXldID0gY3JlYXRlU3R5bGVGdW5jdGlvbih7XG4gICAgICAgIHByb3BlcnR5OiBrZXksXG4gICAgICAgIHNjYWxlOiBrZXlcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uZmlnW2tleV0gPSBjb25mO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbmZpZ1trZXldID0gY3JlYXRlU3R5bGVGdW5jdGlvbihjb25mKTtcbiAgfSk7XG4gIHZhciBwYXJzZXIgPSBjcmVhdGVQYXJzZXIoY29uZmlnKTtcbiAgcmV0dXJuIHBhcnNlcjtcbn07XG5leHBvcnQgdmFyIGNvbXBvc2UgPSBmdW5jdGlvbiBjb21wb3NlKCkge1xuICB2YXIgY29uZmlnID0ge307XG5cbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHBhcnNlcnMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgcGFyc2Vyc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHBhcnNlcnMuZm9yRWFjaChmdW5jdGlvbiAocGFyc2VyKSB7XG4gICAgaWYgKCFwYXJzZXIgfHwgIXBhcnNlci5jb25maWcpIHJldHVybjtcbiAgICBhc3NpZ24oY29uZmlnLCBwYXJzZXIuY29uZmlnKTtcbiAgfSk7XG4gIHZhciBwYXJzZXIgPSBjcmVhdGVQYXJzZXIoY29uZmlnKTtcbiAgcmV0dXJuIHBhcnNlcjtcbn07XG4iLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG4vLyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L2RsdlxuZXhwb3J0IHZhciBnZXQgPSBmdW5jdGlvbiBnZXQob2JqLCBrZXksIGRlZiwgcCwgdW5kZWYpIHtcbiAga2V5ID0ga2V5ICYmIGtleS5zcGxpdCA/IGtleS5zcGxpdCgnLicpIDogW2tleV07XG5cbiAgZm9yIChwID0gMDsgcCA8IGtleS5sZW5ndGg7IHArKykge1xuICAgIG9iaiA9IG9iaiA/IG9ialtrZXlbcF1dIDogdW5kZWY7XG4gIH1cblxuICByZXR1cm4gb2JqID09PSB1bmRlZiA/IGRlZiA6IG9iajtcbn07XG52YXIgZGVmYXVsdEJyZWFrcG9pbnRzID0gWzQwLCA1MiwgNjRdLm1hcChmdW5jdGlvbiAobikge1xuICByZXR1cm4gbiArICdlbSc7XG59KTtcbnZhciBkZWZhdWx0VGhlbWUgPSB7XG4gIHNwYWNlOiBbMCwgNCwgOCwgMTYsIDMyLCA2NCwgMTI4LCAyNTYsIDUxMl0sXG4gIGZvbnRTaXplczogWzEyLCAxNCwgMTYsIDIwLCAyNCwgMzIsIDQ4LCA2NCwgNzJdXG59O1xudmFyIGFsaWFzZXMgPSB7XG4gIGJnOiAnYmFja2dyb3VuZENvbG9yJyxcbiAgbTogJ21hcmdpbicsXG4gIG10OiAnbWFyZ2luVG9wJyxcbiAgbXI6ICdtYXJnaW5SaWdodCcsXG4gIG1iOiAnbWFyZ2luQm90dG9tJyxcbiAgbWw6ICdtYXJnaW5MZWZ0JyxcbiAgbXg6ICdtYXJnaW5YJyxcbiAgbXk6ICdtYXJnaW5ZJyxcbiAgcDogJ3BhZGRpbmcnLFxuICBwdDogJ3BhZGRpbmdUb3AnLFxuICBwcjogJ3BhZGRpbmdSaWdodCcsXG4gIHBiOiAncGFkZGluZ0JvdHRvbScsXG4gIHBsOiAncGFkZGluZ0xlZnQnLFxuICBweDogJ3BhZGRpbmdYJyxcbiAgcHk6ICdwYWRkaW5nWSdcbn07XG52YXIgbXVsdGlwbGVzID0ge1xuICBtYXJnaW5YOiBbJ21hcmdpbkxlZnQnLCAnbWFyZ2luUmlnaHQnXSxcbiAgbWFyZ2luWTogWydtYXJnaW5Ub3AnLCAnbWFyZ2luQm90dG9tJ10sXG4gIHBhZGRpbmdYOiBbJ3BhZGRpbmdMZWZ0JywgJ3BhZGRpbmdSaWdodCddLFxuICBwYWRkaW5nWTogWydwYWRkaW5nVG9wJywgJ3BhZGRpbmdCb3R0b20nXSxcbiAgc2l6ZTogWyd3aWR0aCcsICdoZWlnaHQnXVxufTtcbnZhciBzY2FsZXMgPSB7XG4gIGNvbG9yOiAnY29sb3JzJyxcbiAgYmFja2dyb3VuZENvbG9yOiAnY29sb3JzJyxcbiAgYm9yZGVyQ29sb3I6ICdjb2xvcnMnLFxuICBtYXJnaW46ICdzcGFjZScsXG4gIG1hcmdpblRvcDogJ3NwYWNlJyxcbiAgbWFyZ2luUmlnaHQ6ICdzcGFjZScsXG4gIG1hcmdpbkJvdHRvbTogJ3NwYWNlJyxcbiAgbWFyZ2luTGVmdDogJ3NwYWNlJyxcbiAgbWFyZ2luWDogJ3NwYWNlJyxcbiAgbWFyZ2luWTogJ3NwYWNlJyxcbiAgcGFkZGluZzogJ3NwYWNlJyxcbiAgcGFkZGluZ1RvcDogJ3NwYWNlJyxcbiAgcGFkZGluZ1JpZ2h0OiAnc3BhY2UnLFxuICBwYWRkaW5nQm90dG9tOiAnc3BhY2UnLFxuICBwYWRkaW5nTGVmdDogJ3NwYWNlJyxcbiAgcGFkZGluZ1g6ICdzcGFjZScsXG4gIHBhZGRpbmdZOiAnc3BhY2UnLFxuICB0b3A6ICdzcGFjZScsXG4gIHJpZ2h0OiAnc3BhY2UnLFxuICBib3R0b206ICdzcGFjZScsXG4gIGxlZnQ6ICdzcGFjZScsXG4gIGdyaWRHYXA6ICdzcGFjZScsXG4gIGdyaWRDb2x1bW5HYXA6ICdzcGFjZScsXG4gIGdyaWRSb3dHYXA6ICdzcGFjZScsXG4gIGdhcDogJ3NwYWNlJyxcbiAgY29sdW1uR2FwOiAnc3BhY2UnLFxuICByb3dHYXA6ICdzcGFjZScsXG4gIGZvbnRGYW1pbHk6ICdmb250cycsXG4gIGZvbnRTaXplOiAnZm9udFNpemVzJyxcbiAgZm9udFdlaWdodDogJ2ZvbnRXZWlnaHRzJyxcbiAgbGluZUhlaWdodDogJ2xpbmVIZWlnaHRzJyxcbiAgbGV0dGVyU3BhY2luZzogJ2xldHRlclNwYWNpbmdzJyxcbiAgYm9yZGVyOiAnYm9yZGVycycsXG4gIGJvcmRlclRvcDogJ2JvcmRlcnMnLFxuICBib3JkZXJSaWdodDogJ2JvcmRlcnMnLFxuICBib3JkZXJCb3R0b206ICdib3JkZXJzJyxcbiAgYm9yZGVyTGVmdDogJ2JvcmRlcnMnLFxuICBib3JkZXJXaWR0aDogJ2JvcmRlcldpZHRocycsXG4gIGJvcmRlclN0eWxlOiAnYm9yZGVyU3R5bGVzJyxcbiAgYm9yZGVyUmFkaXVzOiAncmFkaWknLFxuICBib3JkZXJUb3BSaWdodFJhZGl1czogJ3JhZGlpJyxcbiAgYm9yZGVyVG9wTGVmdFJhZGl1czogJ3JhZGlpJyxcbiAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6ICdyYWRpaScsXG4gIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6ICdyYWRpaScsXG4gIGJvcmRlclRvcFdpZHRoOiAnYm9yZGVyV2lkdGhzJyxcbiAgYm9yZGVyVG9wQ29sb3I6ICdjb2xvcnMnLFxuICBib3JkZXJUb3BTdHlsZTogJ2JvcmRlclN0eWxlcycsXG4gIGJvcmRlckJvdHRvbVdpZHRoOiAnYm9yZGVyV2lkdGhzJyxcbiAgYm9yZGVyQm90dG9tQ29sb3I6ICdjb2xvcnMnLFxuICBib3JkZXJCb3R0b21TdHlsZTogJ2JvcmRlclN0eWxlcycsXG4gIGJvcmRlckxlZnRXaWR0aDogJ2JvcmRlcldpZHRocycsXG4gIGJvcmRlckxlZnRDb2xvcjogJ2NvbG9ycycsXG4gIGJvcmRlckxlZnRTdHlsZTogJ2JvcmRlclN0eWxlcycsXG4gIGJvcmRlclJpZ2h0V2lkdGg6ICdib3JkZXJXaWR0aHMnLFxuICBib3JkZXJSaWdodENvbG9yOiAnY29sb3JzJyxcbiAgYm9yZGVyUmlnaHRTdHlsZTogJ2JvcmRlclN0eWxlcycsXG4gIG91dGxpbmVDb2xvcjogJ2NvbG9ycycsXG4gIGJveFNoYWRvdzogJ3NoYWRvd3MnLFxuICB0ZXh0U2hhZG93OiAnc2hhZG93cycsXG4gIHpJbmRleDogJ3pJbmRpY2VzJyxcbiAgd2lkdGg6ICdzaXplcycsXG4gIG1pbldpZHRoOiAnc2l6ZXMnLFxuICBtYXhXaWR0aDogJ3NpemVzJyxcbiAgaGVpZ2h0OiAnc2l6ZXMnLFxuICBtaW5IZWlnaHQ6ICdzaXplcycsXG4gIG1heEhlaWdodDogJ3NpemVzJyxcbiAgZmxleEJhc2lzOiAnc2l6ZXMnLFxuICBzaXplOiAnc2l6ZXMnLFxuICAvLyBzdmdcbiAgZmlsbDogJ2NvbG9ycycsXG4gIHN0cm9rZTogJ2NvbG9ycydcbn07XG5cbnZhciBwb3NpdGl2ZU9yTmVnYXRpdmUgPSBmdW5jdGlvbiBwb3NpdGl2ZU9yTmVnYXRpdmUoc2NhbGUsIHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdudW1iZXInIHx8IHZhbHVlID49IDApIHtcbiAgICByZXR1cm4gZ2V0KHNjYWxlLCB2YWx1ZSwgdmFsdWUpO1xuICB9XG5cbiAgdmFyIGFic29sdXRlID0gTWF0aC5hYnModmFsdWUpO1xuICB2YXIgbiA9IGdldChzY2FsZSwgYWJzb2x1dGUsIGFic29sdXRlKTtcbiAgaWYgKHR5cGVvZiBuID09PSAnc3RyaW5nJykgcmV0dXJuICctJyArIG47XG4gIHJldHVybiBuICogLTE7XG59O1xuXG52YXIgdHJhbnNmb3JtcyA9IFsnbWFyZ2luJywgJ21hcmdpblRvcCcsICdtYXJnaW5SaWdodCcsICdtYXJnaW5Cb3R0b20nLCAnbWFyZ2luTGVmdCcsICdtYXJnaW5YJywgJ21hcmdpblknLCAndG9wJywgJ2JvdHRvbScsICdsZWZ0JywgJ3JpZ2h0J10ucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGN1cnIpIHtcbiAgdmFyIF9leHRlbmRzMjtcblxuICByZXR1cm4gX2V4dGVuZHMoe30sIGFjYywgKF9leHRlbmRzMiA9IHt9LCBfZXh0ZW5kczJbY3Vycl0gPSBwb3NpdGl2ZU9yTmVnYXRpdmUsIF9leHRlbmRzMikpO1xufSwge30pO1xuZXhwb3J0IHZhciByZXNwb25zaXZlID0gZnVuY3Rpb24gcmVzcG9uc2l2ZShzdHlsZXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0aGVtZSkge1xuICAgIHZhciBuZXh0ID0ge307XG4gICAgdmFyIGJyZWFrcG9pbnRzID0gZ2V0KHRoZW1lLCAnYnJlYWtwb2ludHMnLCBkZWZhdWx0QnJlYWtwb2ludHMpO1xuICAgIHZhciBtZWRpYVF1ZXJpZXMgPSBbbnVsbF0uY29uY2F0KGJyZWFrcG9pbnRzLm1hcChmdW5jdGlvbiAobikge1xuICAgICAgcmV0dXJuIFwiQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogXCIgKyBuICsgXCIpXCI7XG4gICAgfSkpO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHN0eWxlcykge1xuICAgICAgdmFyIHZhbHVlID0gdHlwZW9mIHN0eWxlc1trZXldID09PSAnZnVuY3Rpb24nID8gc3R5bGVzW2tleV0odGhlbWUpIDogc3R5bGVzW2tleV07XG4gICAgICBpZiAodmFsdWUgPT0gbnVsbCkgY29udGludWU7XG5cbiAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgbmV4dFtrZXldID0gdmFsdWU7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlLnNsaWNlKDAsIG1lZGlhUXVlcmllcy5sZW5ndGgpLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBtZWRpYSA9IG1lZGlhUXVlcmllc1tpXTtcblxuICAgICAgICBpZiAoIW1lZGlhKSB7XG4gICAgICAgICAgbmV4dFtrZXldID0gdmFsdWVbaV07XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBuZXh0W21lZGlhXSA9IG5leHRbbWVkaWFdIHx8IHt9O1xuICAgICAgICBpZiAodmFsdWVbaV0gPT0gbnVsbCkgY29udGludWU7XG4gICAgICAgIG5leHRbbWVkaWFdW2tleV0gPSB2YWx1ZVtpXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dDtcbiAgfTtcbn07XG5leHBvcnQgdmFyIGNzcyA9IGZ1bmN0aW9uIGNzcyhhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICBpZiAocHJvcHMgPT09IHZvaWQgMCkge1xuICAgICAgcHJvcHMgPSB7fTtcbiAgICB9XG5cbiAgICB2YXIgdGhlbWUgPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdFRoZW1lLCB7fSwgcHJvcHMudGhlbWUgfHwgcHJvcHMpO1xuXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIHZhciBvYmogPSB0eXBlb2YgYXJncyA9PT0gJ2Z1bmN0aW9uJyA/IGFyZ3ModGhlbWUpIDogYXJncztcbiAgICB2YXIgc3R5bGVzID0gcmVzcG9uc2l2ZShvYmopKHRoZW1lKTtcblxuICAgIGZvciAodmFyIGtleSBpbiBzdHlsZXMpIHtcbiAgICAgIHZhciB4ID0gc3R5bGVzW2tleV07XG4gICAgICB2YXIgdmFsID0gdHlwZW9mIHggPT09ICdmdW5jdGlvbicgPyB4KHRoZW1lKSA6IHg7XG5cbiAgICAgIGlmIChrZXkgPT09ICd2YXJpYW50Jykge1xuICAgICAgICB2YXIgdmFyaWFudCA9IGNzcyhnZXQodGhlbWUsIHZhbCkpKHRoZW1lKTtcbiAgICAgICAgcmVzdWx0ID0gX2V4dGVuZHMoe30sIHJlc3VsdCwge30sIHZhcmlhbnQpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZhbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgICByZXN1bHRba2V5XSA9IGNzcyh2YWwpKHRoZW1lKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBwcm9wID0gZ2V0KGFsaWFzZXMsIGtleSwga2V5KTtcbiAgICAgIHZhciBzY2FsZU5hbWUgPSBnZXQoc2NhbGVzLCBwcm9wKTtcbiAgICAgIHZhciBzY2FsZSA9IGdldCh0aGVtZSwgc2NhbGVOYW1lLCBnZXQodGhlbWUsIHByb3AsIHt9KSk7XG4gICAgICB2YXIgdHJhbnNmb3JtID0gZ2V0KHRyYW5zZm9ybXMsIHByb3AsIGdldCk7XG4gICAgICB2YXIgdmFsdWUgPSB0cmFuc2Zvcm0oc2NhbGUsIHZhbCwgdmFsKTtcblxuICAgICAgaWYgKG11bHRpcGxlc1twcm9wXSkge1xuICAgICAgICB2YXIgZGlycyA9IG11bHRpcGxlc1twcm9wXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRpcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICByZXN1bHRbZGlyc1tpXV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0W3Byb3BdID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBjc3M7XG4iLCJpbXBvcnQgeyBzeXN0ZW0gfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9jb3JlJztcbnZhciBjb25maWcgPSB7XG4gIGFsaWduSXRlbXM6IHRydWUsXG4gIGFsaWduQ29udGVudDogdHJ1ZSxcbiAganVzdGlmeUl0ZW1zOiB0cnVlLFxuICBqdXN0aWZ5Q29udGVudDogdHJ1ZSxcbiAgZmxleFdyYXA6IHRydWUsXG4gIGZsZXhEaXJlY3Rpb246IHRydWUsXG4gIC8vIGl0ZW1cbiAgZmxleDogdHJ1ZSxcbiAgZmxleEdyb3c6IHRydWUsXG4gIGZsZXhTaHJpbms6IHRydWUsXG4gIGZsZXhCYXNpczogdHJ1ZSxcbiAganVzdGlmeVNlbGY6IHRydWUsXG4gIGFsaWduU2VsZjogdHJ1ZSxcbiAgb3JkZXI6IHRydWVcbn07XG5leHBvcnQgdmFyIGZsZXhib3ggPSBzeXN0ZW0oY29uZmlnKTtcbmV4cG9ydCBkZWZhdWx0IGZsZXhib3g7XG4iLCJpbXBvcnQgeyBzeXN0ZW0gfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9jb3JlJztcbnZhciBkZWZhdWx0cyA9IHtcbiAgc3BhY2U6IFswLCA0LCA4LCAxNiwgMzIsIDY0LCAxMjgsIDI1NiwgNTEyXVxufTtcbnZhciBjb25maWcgPSB7XG4gIGdyaWRHYXA6IHtcbiAgICBwcm9wZXJ0eTogJ2dyaWRHYXAnLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfSxcbiAgZ3JpZENvbHVtbkdhcDoge1xuICAgIHByb3BlcnR5OiAnZ3JpZENvbHVtbkdhcCcsXG4gICAgc2NhbGU6ICdzcGFjZScsXG4gICAgZGVmYXVsdFNjYWxlOiBkZWZhdWx0cy5zcGFjZVxuICB9LFxuICBncmlkUm93R2FwOiB7XG4gICAgcHJvcGVydHk6ICdncmlkUm93R2FwJyxcbiAgICBzY2FsZTogJ3NwYWNlJyxcbiAgICBkZWZhdWx0U2NhbGU6IGRlZmF1bHRzLnNwYWNlXG4gIH0sXG4gIGdyaWRDb2x1bW46IHRydWUsXG4gIGdyaWRSb3c6IHRydWUsXG4gIGdyaWRBdXRvRmxvdzogdHJ1ZSxcbiAgZ3JpZEF1dG9Db2x1bW5zOiB0cnVlLFxuICBncmlkQXV0b1Jvd3M6IHRydWUsXG4gIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IHRydWUsXG4gIGdyaWRUZW1wbGF0ZVJvd3M6IHRydWUsXG4gIGdyaWRUZW1wbGF0ZUFyZWFzOiB0cnVlLFxuICBncmlkQXJlYTogdHJ1ZVxufTtcbmV4cG9ydCB2YXIgZ3JpZCA9IHN5c3RlbShjb25maWcpO1xuZXhwb3J0IGRlZmF1bHQgZ3JpZDtcbiIsImltcG9ydCB7IHN5c3RlbSwgZ2V0IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vY29yZSc7XG5cbnZhciBpc051bWJlciA9IGZ1bmN0aW9uIGlzTnVtYmVyKG4pIHtcbiAgcmV0dXJuIHR5cGVvZiBuID09PSAnbnVtYmVyJyAmJiAhaXNOYU4obik7XG59O1xuXG52YXIgZ2V0V2lkdGggPSBmdW5jdGlvbiBnZXRXaWR0aChuLCBzY2FsZSkge1xuICByZXR1cm4gZ2V0KHNjYWxlLCBuLCAhaXNOdW1iZXIobikgfHwgbiA+IDEgPyBuIDogbiAqIDEwMCArICclJyk7XG59O1xuXG52YXIgY29uZmlnID0ge1xuICB3aWR0aDoge1xuICAgIHByb3BlcnR5OiAnd2lkdGgnLFxuICAgIHNjYWxlOiAnc2l6ZXMnLFxuICAgIHRyYW5zZm9ybTogZ2V0V2lkdGhcbiAgfSxcbiAgaGVpZ2h0OiB7XG4gICAgcHJvcGVydHk6ICdoZWlnaHQnLFxuICAgIHNjYWxlOiAnc2l6ZXMnXG4gIH0sXG4gIG1pbldpZHRoOiB7XG4gICAgcHJvcGVydHk6ICdtaW5XaWR0aCcsXG4gICAgc2NhbGU6ICdzaXplcydcbiAgfSxcbiAgbWluSGVpZ2h0OiB7XG4gICAgcHJvcGVydHk6ICdtaW5IZWlnaHQnLFxuICAgIHNjYWxlOiAnc2l6ZXMnXG4gIH0sXG4gIG1heFdpZHRoOiB7XG4gICAgcHJvcGVydHk6ICdtYXhXaWR0aCcsXG4gICAgc2NhbGU6ICdzaXplcydcbiAgfSxcbiAgbWF4SGVpZ2h0OiB7XG4gICAgcHJvcGVydHk6ICdtYXhIZWlnaHQnLFxuICAgIHNjYWxlOiAnc2l6ZXMnXG4gIH0sXG4gIHNpemU6IHtcbiAgICBwcm9wZXJ0aWVzOiBbJ3dpZHRoJywgJ2hlaWdodCddLFxuICAgIHNjYWxlOiAnc2l6ZXMnXG4gIH0sXG4gIG92ZXJmbG93OiB0cnVlLFxuICBvdmVyZmxvd1g6IHRydWUsXG4gIG92ZXJmbG93WTogdHJ1ZSxcbiAgZGlzcGxheTogdHJ1ZSxcbiAgdmVydGljYWxBbGlnbjogdHJ1ZVxufTtcbmV4cG9ydCB2YXIgbGF5b3V0ID0gc3lzdGVtKGNvbmZpZyk7XG5leHBvcnQgZGVmYXVsdCBsYXlvdXQ7XG4iLCJpbXBvcnQgeyBzeXN0ZW0gfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9jb3JlJztcbnZhciBkZWZhdWx0cyA9IHtcbiAgc3BhY2U6IFswLCA0LCA4LCAxNiwgMzIsIDY0LCAxMjgsIDI1NiwgNTEyXVxufTtcbnZhciBjb25maWcgPSB7XG4gIHBvc2l0aW9uOiB0cnVlLFxuICB6SW5kZXg6IHtcbiAgICBwcm9wZXJ0eTogJ3pJbmRleCcsXG4gICAgc2NhbGU6ICd6SW5kaWNlcydcbiAgfSxcbiAgdG9wOiB7XG4gICAgcHJvcGVydHk6ICd0b3AnLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfSxcbiAgcmlnaHQ6IHtcbiAgICBwcm9wZXJ0eTogJ3JpZ2h0JyxcbiAgICBzY2FsZTogJ3NwYWNlJyxcbiAgICBkZWZhdWx0U2NhbGU6IGRlZmF1bHRzLnNwYWNlXG4gIH0sXG4gIGJvdHRvbToge1xuICAgIHByb3BlcnR5OiAnYm90dG9tJyxcbiAgICBzY2FsZTogJ3NwYWNlJyxcbiAgICBkZWZhdWx0U2NhbGU6IGRlZmF1bHRzLnNwYWNlXG4gIH0sXG4gIGxlZnQ6IHtcbiAgICBwcm9wZXJ0eTogJ2xlZnQnLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfVxufTtcbmV4cG9ydCB2YXIgcG9zaXRpb24gPSBzeXN0ZW0oY29uZmlnKTtcbmV4cG9ydCBkZWZhdWx0IHBvc2l0aW9uO1xuIiwiaW1wb3J0IHsgc3lzdGVtIH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vY29yZSc7XG5leHBvcnQgdmFyIHNoYWRvdyA9IHN5c3RlbSh7XG4gIGJveFNoYWRvdzoge1xuICAgIHByb3BlcnR5OiAnYm94U2hhZG93JyxcbiAgICBzY2FsZTogJ3NoYWRvd3MnXG4gIH0sXG4gIHRleHRTaGFkb3c6IHtcbiAgICBwcm9wZXJ0eTogJ3RleHRTaGFkb3cnLFxuICAgIHNjYWxlOiAnc2hhZG93cydcbiAgfVxufSk7XG5leHBvcnQgZGVmYXVsdCBzaGFkb3c7XG4iLCJpbXBvcnQgbWVtb2l6ZSBmcm9tICdAZW1vdGlvbi9tZW1vaXplJztcbmltcG9ydCBpc1Byb3BWYWxpZCBmcm9tICdAZW1vdGlvbi9pcy1wcm9wLXZhbGlkJztcbmltcG9ydCB7IGNvbXBvc2UsIHNwYWNlLCB0eXBvZ3JhcGh5LCBjb2xvciwgbGF5b3V0LCBmbGV4Ym94LCBib3JkZXIsIGJhY2tncm91bmQsIHBvc2l0aW9uLCBncmlkLCBzaGFkb3csIGJ1dHRvblN0eWxlLCB0ZXh0U3R5bGUsIGNvbG9yU3R5bGUgfSBmcm9tICdzdHlsZWQtc3lzdGVtJztcbnZhciBhbGwgPSBjb21wb3NlKHNwYWNlLCB0eXBvZ3JhcGh5LCBjb2xvciwgbGF5b3V0LCBmbGV4Ym94LCBib3JkZXIsIGJhY2tncm91bmQsIHBvc2l0aW9uLCBncmlkLCBzaGFkb3csIGJ1dHRvblN0eWxlLCB0ZXh0U3R5bGUsIGNvbG9yU3R5bGUpO1xuZXhwb3J0IHZhciBwcm9wcyA9IGFsbC5wcm9wTmFtZXM7XG5leHBvcnQgdmFyIGNyZWF0ZVNob3VsZEZvcndhcmRQcm9wID0gZnVuY3Rpb24gY3JlYXRlU2hvdWxkRm9yd2FyZFByb3AocHJvcHMpIHtcbiAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChcIl4oXCIgKyBwcm9wcy5qb2luKCd8JykgKyBcIikkXCIpO1xuICByZXR1cm4gbWVtb2l6ZShmdW5jdGlvbiAocHJvcCkge1xuICAgIHJldHVybiBpc1Byb3BWYWxpZChwcm9wKSAmJiAhcmVnZXgudGVzdChwcm9wKTtcbiAgfSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2hvdWxkRm9yd2FyZFByb3AocHJvcHMpO1xuIiwiZnVuY3Rpb24gbWVtb2l6ZShmbikge1xuICB2YXIgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICByZXR1cm4gZnVuY3Rpb24gKGFyZykge1xuICAgIGlmIChjYWNoZVthcmddID09PSB1bmRlZmluZWQpIGNhY2hlW2FyZ10gPSBmbihhcmcpO1xuICAgIHJldHVybiBjYWNoZVthcmddO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBtZW1vaXplO1xuIiwiaW1wb3J0IHsgZ2V0LCBzeXN0ZW0sIGNvbXBvc2UgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9jb3JlJztcbnZhciBkZWZhdWx0cyA9IHtcbiAgc3BhY2U6IFswLCA0LCA4LCAxNiwgMzIsIDY0LCAxMjgsIDI1NiwgNTEyXVxufTtcblxudmFyIGlzTnVtYmVyID0gZnVuY3Rpb24gaXNOdW1iZXIobikge1xuICByZXR1cm4gdHlwZW9mIG4gPT09ICdudW1iZXInICYmICFpc05hTihuKTtcbn07XG5cbnZhciBnZXRNYXJnaW4gPSBmdW5jdGlvbiBnZXRNYXJnaW4obiwgc2NhbGUpIHtcbiAgaWYgKCFpc051bWJlcihuKSkge1xuICAgIHJldHVybiBnZXQoc2NhbGUsIG4sIG4pO1xuICB9XG5cbiAgdmFyIGlzTmVnYXRpdmUgPSBuIDwgMDtcbiAgdmFyIGFic29sdXRlID0gTWF0aC5hYnMobik7XG4gIHZhciB2YWx1ZSA9IGdldChzY2FsZSwgYWJzb2x1dGUsIGFic29sdXRlKTtcblxuICBpZiAoIWlzTnVtYmVyKHZhbHVlKSkge1xuICAgIHJldHVybiBpc05lZ2F0aXZlID8gJy0nICsgdmFsdWUgOiB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZSAqIChpc05lZ2F0aXZlID8gLTEgOiAxKTtcbn07XG5cbnZhciBjb25maWdzID0ge307XG5jb25maWdzLm1hcmdpbiA9IHtcbiAgbWFyZ2luOiB7XG4gICAgcHJvcGVydHk6ICdtYXJnaW4nLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIHRyYW5zZm9ybTogZ2V0TWFyZ2luLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfSxcbiAgbWFyZ2luVG9wOiB7XG4gICAgcHJvcGVydHk6ICdtYXJnaW5Ub3AnLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIHRyYW5zZm9ybTogZ2V0TWFyZ2luLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfSxcbiAgbWFyZ2luUmlnaHQ6IHtcbiAgICBwcm9wZXJ0eTogJ21hcmdpblJpZ2h0JyxcbiAgICBzY2FsZTogJ3NwYWNlJyxcbiAgICB0cmFuc2Zvcm06IGdldE1hcmdpbixcbiAgICBkZWZhdWx0U2NhbGU6IGRlZmF1bHRzLnNwYWNlXG4gIH0sXG4gIG1hcmdpbkJvdHRvbToge1xuICAgIHByb3BlcnR5OiAnbWFyZ2luQm90dG9tJyxcbiAgICBzY2FsZTogJ3NwYWNlJyxcbiAgICB0cmFuc2Zvcm06IGdldE1hcmdpbixcbiAgICBkZWZhdWx0U2NhbGU6IGRlZmF1bHRzLnNwYWNlXG4gIH0sXG4gIG1hcmdpbkxlZnQ6IHtcbiAgICBwcm9wZXJ0eTogJ21hcmdpbkxlZnQnLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIHRyYW5zZm9ybTogZ2V0TWFyZ2luLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfSxcbiAgbWFyZ2luWDoge1xuICAgIHByb3BlcnRpZXM6IFsnbWFyZ2luTGVmdCcsICdtYXJnaW5SaWdodCddLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIHRyYW5zZm9ybTogZ2V0TWFyZ2luLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfSxcbiAgbWFyZ2luWToge1xuICAgIHByb3BlcnRpZXM6IFsnbWFyZ2luVG9wJywgJ21hcmdpbkJvdHRvbSddLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIHRyYW5zZm9ybTogZ2V0TWFyZ2luLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfVxufTtcbmNvbmZpZ3MubWFyZ2luLm0gPSBjb25maWdzLm1hcmdpbi5tYXJnaW47XG5jb25maWdzLm1hcmdpbi5tdCA9IGNvbmZpZ3MubWFyZ2luLm1hcmdpblRvcDtcbmNvbmZpZ3MubWFyZ2luLm1yID0gY29uZmlncy5tYXJnaW4ubWFyZ2luUmlnaHQ7XG5jb25maWdzLm1hcmdpbi5tYiA9IGNvbmZpZ3MubWFyZ2luLm1hcmdpbkJvdHRvbTtcbmNvbmZpZ3MubWFyZ2luLm1sID0gY29uZmlncy5tYXJnaW4ubWFyZ2luTGVmdDtcbmNvbmZpZ3MubWFyZ2luLm14ID0gY29uZmlncy5tYXJnaW4ubWFyZ2luWDtcbmNvbmZpZ3MubWFyZ2luLm15ID0gY29uZmlncy5tYXJnaW4ubWFyZ2luWTtcbmNvbmZpZ3MucGFkZGluZyA9IHtcbiAgcGFkZGluZzoge1xuICAgIHByb3BlcnR5OiAncGFkZGluZycsXG4gICAgc2NhbGU6ICdzcGFjZScsXG4gICAgZGVmYXVsdFNjYWxlOiBkZWZhdWx0cy5zcGFjZVxuICB9LFxuICBwYWRkaW5nVG9wOiB7XG4gICAgcHJvcGVydHk6ICdwYWRkaW5nVG9wJyxcbiAgICBzY2FsZTogJ3NwYWNlJyxcbiAgICBkZWZhdWx0U2NhbGU6IGRlZmF1bHRzLnNwYWNlXG4gIH0sXG4gIHBhZGRpbmdSaWdodDoge1xuICAgIHByb3BlcnR5OiAncGFkZGluZ1JpZ2h0JyxcbiAgICBzY2FsZTogJ3NwYWNlJyxcbiAgICBkZWZhdWx0U2NhbGU6IGRlZmF1bHRzLnNwYWNlXG4gIH0sXG4gIHBhZGRpbmdCb3R0b206IHtcbiAgICBwcm9wZXJ0eTogJ3BhZGRpbmdCb3R0b20nLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfSxcbiAgcGFkZGluZ0xlZnQ6IHtcbiAgICBwcm9wZXJ0eTogJ3BhZGRpbmdMZWZ0JyxcbiAgICBzY2FsZTogJ3NwYWNlJyxcbiAgICBkZWZhdWx0U2NhbGU6IGRlZmF1bHRzLnNwYWNlXG4gIH0sXG4gIHBhZGRpbmdYOiB7XG4gICAgcHJvcGVydGllczogWydwYWRkaW5nTGVmdCcsICdwYWRkaW5nUmlnaHQnXSxcbiAgICBzY2FsZTogJ3NwYWNlJyxcbiAgICBkZWZhdWx0U2NhbGU6IGRlZmF1bHRzLnNwYWNlXG4gIH0sXG4gIHBhZGRpbmdZOiB7XG4gICAgcHJvcGVydGllczogWydwYWRkaW5nVG9wJywgJ3BhZGRpbmdCb3R0b20nXSxcbiAgICBzY2FsZTogJ3NwYWNlJyxcbiAgICBkZWZhdWx0U2NhbGU6IGRlZmF1bHRzLnNwYWNlXG4gIH1cbn07XG5jb25maWdzLnBhZGRpbmcucCA9IGNvbmZpZ3MucGFkZGluZy5wYWRkaW5nO1xuY29uZmlncy5wYWRkaW5nLnB0ID0gY29uZmlncy5wYWRkaW5nLnBhZGRpbmdUb3A7XG5jb25maWdzLnBhZGRpbmcucHIgPSBjb25maWdzLnBhZGRpbmcucGFkZGluZ1JpZ2h0O1xuY29uZmlncy5wYWRkaW5nLnBiID0gY29uZmlncy5wYWRkaW5nLnBhZGRpbmdCb3R0b207XG5jb25maWdzLnBhZGRpbmcucGwgPSBjb25maWdzLnBhZGRpbmcucGFkZGluZ0xlZnQ7XG5jb25maWdzLnBhZGRpbmcucHggPSBjb25maWdzLnBhZGRpbmcucGFkZGluZ1g7XG5jb25maWdzLnBhZGRpbmcucHkgPSBjb25maWdzLnBhZGRpbmcucGFkZGluZ1k7XG5leHBvcnQgdmFyIG1hcmdpbiA9IHN5c3RlbShjb25maWdzLm1hcmdpbik7XG5leHBvcnQgdmFyIHBhZGRpbmcgPSBzeXN0ZW0oY29uZmlncy5wYWRkaW5nKTtcbmV4cG9ydCB2YXIgc3BhY2UgPSBjb21wb3NlKG1hcmdpbiwgcGFkZGluZyk7XG5leHBvcnQgZGVmYXVsdCBzcGFjZTtcbiIsImltcG9ydCB7IHN5c3RlbSB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL2NvcmUnO1xudmFyIGRlZmF1bHRzID0ge1xuICBmb250U2l6ZXM6IFsxMiwgMTQsIDE2LCAyMCwgMjQsIDMyLCA0OCwgNjQsIDcyXVxufTtcbnZhciBjb25maWcgPSB7XG4gIGZvbnRGYW1pbHk6IHtcbiAgICBwcm9wZXJ0eTogJ2ZvbnRGYW1pbHknLFxuICAgIHNjYWxlOiAnZm9udHMnXG4gIH0sXG4gIGZvbnRTaXplOiB7XG4gICAgcHJvcGVydHk6ICdmb250U2l6ZScsXG4gICAgc2NhbGU6ICdmb250U2l6ZXMnLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuZm9udFNpemVzXG4gIH0sXG4gIGZvbnRXZWlnaHQ6IHtcbiAgICBwcm9wZXJ0eTogJ2ZvbnRXZWlnaHQnLFxuICAgIHNjYWxlOiAnZm9udFdlaWdodHMnXG4gIH0sXG4gIGxpbmVIZWlnaHQ6IHtcbiAgICBwcm9wZXJ0eTogJ2xpbmVIZWlnaHQnLFxuICAgIHNjYWxlOiAnbGluZUhlaWdodHMnXG4gIH0sXG4gIGxldHRlclNwYWNpbmc6IHtcbiAgICBwcm9wZXJ0eTogJ2xldHRlclNwYWNpbmcnLFxuICAgIHNjYWxlOiAnbGV0dGVyU3BhY2luZ3MnXG4gIH0sXG4gIHRleHRBbGlnbjogdHJ1ZSxcbiAgZm9udFN0eWxlOiB0cnVlXG59O1xuZXhwb3J0IHZhciB0eXBvZ3JhcGh5ID0gc3lzdGVtKGNvbmZpZyk7XG5leHBvcnQgZGVmYXVsdCB0eXBvZ3JhcGh5O1xuIiwiaW1wb3J0IHsgZ2V0LCBjcmVhdGVQYXJzZXIgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9jb3JlJztcbmltcG9ydCBjc3MgZnJvbSAnQHN0eWxlZC1zeXN0ZW0vY3NzJztcbmV4cG9ydCB2YXIgdmFyaWFudCA9IGZ1bmN0aW9uIHZhcmlhbnQoX3JlZikge1xuICB2YXIgX2NvbmZpZztcblxuICB2YXIgc2NhbGUgPSBfcmVmLnNjYWxlLFxuICAgICAgX3JlZiRwcm9wID0gX3JlZi5wcm9wLFxuICAgICAgcHJvcCA9IF9yZWYkcHJvcCA9PT0gdm9pZCAwID8gJ3ZhcmlhbnQnIDogX3JlZiRwcm9wLFxuICAgICAgX3JlZiR2YXJpYW50cyA9IF9yZWYudmFyaWFudHMsXG4gICAgICB2YXJpYW50cyA9IF9yZWYkdmFyaWFudHMgPT09IHZvaWQgMCA/IHt9IDogX3JlZiR2YXJpYW50cyxcbiAgICAgIGtleSA9IF9yZWYua2V5O1xuICB2YXIgc3g7XG5cbiAgaWYgKE9iamVjdC5rZXlzKHZhcmlhbnRzKS5sZW5ndGgpIHtcbiAgICBzeCA9IGZ1bmN0aW9uIHN4KHZhbHVlLCBzY2FsZSwgcHJvcHMpIHtcbiAgICAgIHJldHVybiBjc3MoZ2V0KHNjYWxlLCB2YWx1ZSwgbnVsbCkpKHByb3BzLnRoZW1lKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHN4ID0gZnVuY3Rpb24gc3godmFsdWUsIHNjYWxlKSB7XG4gICAgICByZXR1cm4gZ2V0KHNjYWxlLCB2YWx1ZSwgbnVsbCk7XG4gICAgfTtcbiAgfVxuXG4gIHN4LnNjYWxlID0gc2NhbGUgfHwga2V5O1xuICBzeC5kZWZhdWx0cyA9IHZhcmlhbnRzO1xuICB2YXIgY29uZmlnID0gKF9jb25maWcgPSB7fSwgX2NvbmZpZ1twcm9wXSA9IHN4LCBfY29uZmlnKTtcbiAgdmFyIHBhcnNlciA9IGNyZWF0ZVBhcnNlcihjb25maWcpO1xuICByZXR1cm4gcGFyc2VyO1xufTtcbmV4cG9ydCBkZWZhdWx0IHZhcmlhbnQ7XG5leHBvcnQgdmFyIGJ1dHRvblN0eWxlID0gdmFyaWFudCh7XG4gIGtleTogJ2J1dHRvbnMnXG59KTtcbmV4cG9ydCB2YXIgdGV4dFN0eWxlID0gdmFyaWFudCh7XG4gIGtleTogJ3RleHRTdHlsZXMnLFxuICBwcm9wOiAndGV4dFN0eWxlJ1xufSk7XG5leHBvcnQgdmFyIGNvbG9yU3R5bGUgPSB2YXJpYW50KHtcbiAga2V5OiAnY29sb3JTdHlsZXMnLFxuICBwcm9wOiAnY29sb3JzJ1xufSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsganN4LCB1c2VUaGVtZVVJLCBtZXJnZSwgQ29udGV4dCB9IGZyb20gJ0B0aGVtZS11aS9jb3JlJztcbmltcG9ydCB7IEdsb2JhbCwgVGhlbWVDb250ZXh0IH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgeyBjc3MsIGdldCB9IGZyb20gJ0B0aGVtZS11aS9jc3MnO1xuXG52YXIgdG9WYXJOYW1lID0gZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gKFwiLS10aGVtZS11aS1cIiArIGtleSk7IH07XG5cbnZhciB0b1ZhclZhbHVlID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHsgcmV0dXJuIChcInZhcihcIiArICh0b1Zhck5hbWUoa2V5KSkgKyBcIiwgXCIgKyB2YWx1ZSArIFwiKVwiKTsgfTtcblxudmFyIGpvaW4gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgcmV0dXJuIGFyZ3MuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJy0nKTtcbn07XG5cbnZhciBudW1iZXJTY2FsZXMgPSB7XG4gIGZvbnRXZWlnaHRzOiB0cnVlLFxuICBsaW5lSGVpZ2h0czogdHJ1ZVxufTtcbnZhciByZXNlcnZlZEtleXMgPSB7XG4gIHVzZUN1c3RvbVByb3BlcnRpZXM6IHRydWUsXG4gIGluaXRpYWxDb2xvck1vZGVOYW1lOiB0cnVlLFxuICBpbml0aWFsQ29sb3JNb2RlOiB0cnVlXG59O1xuXG52YXIgdG9QaXhlbCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdudW1iZXInKSB7IHJldHVybiB2YWx1ZTsgfVxuICBpZiAobnVtYmVyU2NhbGVzW2tleV0pIHsgcmV0dXJuIHZhbHVlOyB9XG4gIHJldHVybiB2YWx1ZSArICdweCc7XG59OyAvLyBjb252ZXJ0IHRoZW1lIHZhbHVlcyB0byBjdXN0b20gcHJvcGVydGllc1xuXG5cbnZhciB0b0N1c3RvbVByb3BlcnRpZXMgPSBmdW5jdGlvbiAob2JqLCBwYXJlbnQsIHRoZW1lS2V5KSB7XG4gIHZhciBuZXh0ID0gQXJyYXkuaXNBcnJheShvYmopID8gW10gOiB7fTtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgdmFyIHZhbHVlID0gb2JqW2tleV07XG4gICAgdmFyIG5hbWUgPSBqb2luKHBhcmVudCwga2V5KTtcblxuICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICBuZXh0W2tleV0gPSB0b0N1c3RvbVByb3BlcnRpZXModmFsdWUsIG5hbWUsIGtleSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAocmVzZXJ2ZWRLZXlzW2tleV0pIHtcbiAgICAgIG5leHRba2V5XSA9IHZhbHVlO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgdmFyIHZhbCA9IHRvUGl4ZWwodGhlbWVLZXkgfHwga2V5LCB2YWx1ZSk7XG4gICAgbmV4dFtrZXldID0gdG9WYXJWYWx1ZShuYW1lLCB2YWwpO1xuICB9XG5cbiAgcmV0dXJuIG5leHQ7XG59O1xudmFyIG9iamVjdFRvVmFycyA9IGZ1bmN0aW9uIChwYXJlbnQsIG9iaikge1xuICB2YXIgdmFycyA9IHt9O1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoa2V5ID09PSAnbW9kZXMnKSB7IGNvbnRpbnVlOyB9XG4gICAgdmFyIG5hbWUgPSBqb2luKHBhcmVudCwga2V5KTtcbiAgICB2YXIgdmFsdWUgPSBvYmpba2V5XTtcblxuICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICB2YXJzID0gT2JqZWN0LmFzc2lnbih7fSwgdmFycyxcbiAgICAgICAgb2JqZWN0VG9WYXJzKG5hbWUsIHZhbHVlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhcnNbdG9WYXJOYW1lKG5hbWUpXSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB2YXJzO1xufTsgLy8gY3JlYXRlIGJvZHkgc3R5bGVzIGZvciBjb2xvciBtb2Rlc1xuXG52YXIgY3JlYXRlQ29sb3JTdHlsZXMgPSBmdW5jdGlvbiAodGhlbWUpIHtcbiAgaWYgKCB0aGVtZSA9PT0gdm9pZCAwICkgdGhlbWUgPSB7fTtcblxuICBpZiAoIXRoZW1lLmNvbG9ycyB8fCB0aGVtZS51c2VCb2R5U3R5bGVzID09PSBmYWxzZSkgeyByZXR1cm4ge307IH1cblxuICBpZiAodGhlbWUudXNlQ3VzdG9tUHJvcGVydGllcyA9PT0gZmFsc2UgfHwgIXRoZW1lLmNvbG9ycy5tb2Rlcykge1xuICAgIHJldHVybiBjc3Moe1xuICAgICAgYm9keToge1xuICAgICAgICBjb2xvcjogJ3RleHQnLFxuICAgICAgICBiZzogJ2JhY2tncm91bmQnXG4gICAgICB9XG4gICAgfSkodGhlbWUpO1xuICB9XG5cbiAgdmFyIGNvbG9ycyA9IHRoZW1lLnJhd0NvbG9ycyB8fCB0aGVtZS5jb2xvcnM7XG4gIHZhciBtb2RlcyA9IGNvbG9ycy5tb2RlcztcbiAgdmFyIHN0eWxlcyA9IG9iamVjdFRvVmFycygnY29sb3JzJywgY29sb3JzKTtcbiAgT2JqZWN0LmtleXMobW9kZXMpLmZvckVhY2goZnVuY3Rpb24gKG1vZGUpIHtcbiAgICB2YXIga2V5ID0gXCImLnRoZW1lLXVpLVwiICsgbW9kZTtcbiAgICBzdHlsZXNba2V5XSA9IG9iamVjdFRvVmFycygnY29sb3JzJywgbW9kZXNbbW9kZV0pO1xuICB9KTtcbiAgcmV0dXJuIGNzcyh7XG4gICAgYm9keTogT2JqZWN0LmFzc2lnbih7fSwgc3R5bGVzLFxuICAgICAge2NvbG9yOiAndGV4dCcsXG4gICAgICBiZzogJ2JhY2tncm91bmQnfSlcbiAgfSkodGhlbWUpO1xufTtcblxudmFyIFNUT1JBR0VfS0VZID0gJ3RoZW1lLXVpLWNvbG9yLW1vZGUnO1xudmFyIHN0b3JhZ2UgPSB7XG4gIGdldDogZnVuY3Rpb24gKGluaXQpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShTVE9SQUdFX0tFWSkgfHwgaW5pdDtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ2xvY2FsU3RvcmFnZSBpcyBkaXNhYmxlZCBhbmQgY29sb3IgbW9kZSBtaWdodCBub3Qgd29yayBhcyBleHBlY3RlZC4nLCAnUGxlYXNlIGNoZWNrIHlvdXIgU2l0ZSBTZXR0aW5ncy4nLCBlKTtcbiAgICB9XG4gIH0sXG4gIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdHJ5IHtcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShTVE9SQUdFX0tFWSwgdmFsdWUpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUud2FybignbG9jYWxTdG9yYWdlIGlzIGRpc2FibGVkIGFuZCBjb2xvciBtb2RlIG1pZ2h0IG5vdCB3b3JrIGFzIGV4cGVjdGVkLicsICdQbGVhc2UgY2hlY2sgeW91ciBTaXRlIFNldHRpbmdzLicsIGUpO1xuICAgIH1cbiAgfVxufTtcblxudmFyIGdldE1lZGlhUXVlcnkgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBkYXJrUXVlcnkgPSAnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSc7XG4gIHZhciBsaWdodFF1ZXJ5ID0gJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogbGlnaHQpJztcbiAgdmFyIGRhcmtNUUwgPSB3aW5kb3cubWF0Y2hNZWRpYSA/IHdpbmRvdy5tYXRjaE1lZGlhKGRhcmtRdWVyeSkgOiB7fTtcbiAgdmFyIGxpZ2h0TVFMID0gd2luZG93Lm1hdGNoTWVkaWEgPyB3aW5kb3cubWF0Y2hNZWRpYShsaWdodFF1ZXJ5KSA6IHt9O1xuICB2YXIgZGFyayA9IGRhcmtNUUwubWVkaWEgPT09IGRhcmtRdWVyeSAmJiBkYXJrTVFMLm1hdGNoZXM7XG4gIGlmIChkYXJrKSB7IHJldHVybiAnZGFyayc7IH1cbiAgdmFyIGxpZ2h0ID0gbGlnaHRNUUwubWVkaWEgPT09IGxpZ2h0UXVlcnkgJiYgbGlnaHRNUUwubWF0Y2hlcztcbiAgaWYgKGxpZ2h0KSB7IHJldHVybiAnbGlnaHQnOyB9XG4gIHJldHVybiAnZGVmYXVsdCc7XG59O1xuXG52YXIgdXNlQ29sb3JNb2RlU3RhdGUgPSBmdW5jdGlvbiAodGhlbWUpIHtcbiAgaWYgKCB0aGVtZSA9PT0gdm9pZCAwICkgdGhlbWUgPSB7fTtcblxuICB2YXIgcmVmID0gUmVhY3QudXNlU3RhdGUodGhlbWUuaW5pdGlhbENvbG9yTW9kZU5hbWUgfHwgJ2RlZmF1bHQnKTtcbiAgdmFyIG1vZGUgPSByZWZbMF07XG4gIHZhciBzZXRNb2RlID0gcmVmWzFdOyAvLyBpbml0aWFsaXplIHN0YXRlXG5cbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RvcmVkID0gc3RvcmFnZS5nZXQoKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3RoZW1lLXVpLScgKyBzdG9yZWQpO1xuXG4gICAgaWYgKCFzdG9yZWQgJiYgdGhlbWUudXNlQ29sb3JTY2hlbWVNZWRpYVF1ZXJ5KSB7XG4gICAgICB2YXIgcXVlcnkgPSBnZXRNZWRpYVF1ZXJ5KCk7XG4gICAgICBzZXRNb2RlKHF1ZXJ5KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXN0b3JlZCB8fCBzdG9yZWQgPT09IG1vZGUpIHsgcmV0dXJuOyB9XG4gICAgc2V0TW9kZShzdG9yZWQpO1xuICB9LCBbXSk7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFtb2RlKSB7IHJldHVybjsgfVxuICAgIHN0b3JhZ2Uuc2V0KG1vZGUpO1xuICB9LCBbbW9kZV0pO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKHRoZW1lLmNvbG9ycyAmJiB0aGVtZS5jb2xvcnMubW9kZXMgJiYgT2JqZWN0LmtleXModGhlbWUuY29sb3JzLm1vZGVzKS5pbmRleE9mKHRoZW1lLmluaXRpYWxDb2xvck1vZGVOYW1lKSA+IC0xKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1RoZSBgaW5pdGlhbENvbG9yTW9kZU5hbWVgIHZhbHVlIHNob3VsZCBiZSBhIHVuaXF1ZSBuYW1lJyArICcgYW5kIGNhbm5vdCByZWZlcmVuY2UgYSBrZXkgaW4gYHRoZW1lLmNvbG9ycy5tb2Rlc2AuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFttb2RlLCBzZXRNb2RlXTtcbn07XG5cbnZhciB1c2VDb2xvck1vZGUgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciByZWYgPSB1c2VUaGVtZVVJKCk7XG4gIHZhciBjb2xvck1vZGUgPSByZWYuY29sb3JNb2RlO1xuICB2YXIgc2V0Q29sb3JNb2RlID0gcmVmLnNldENvbG9yTW9kZTtcblxuICBpZiAodHlwZW9mIHNldENvbG9yTW9kZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlt1c2VDb2xvck1vZGVdIHJlcXVpcmVzIHRoZSBDb2xvck1vZGVQcm92aWRlciBjb21wb25lbnRcIik7XG4gIH1cblxuICByZXR1cm4gW2NvbG9yTW9kZSwgc2V0Q29sb3JNb2RlXTtcbn07XG5cbnZhciBhcHBseUNvbG9yTW9kZSA9IGZ1bmN0aW9uICh0aGVtZSwgbW9kZSkge1xuICBpZiAoIW1vZGUpIHsgcmV0dXJuIHRoZW1lOyB9XG4gIHZhciBtb2RlcyA9IGdldCh0aGVtZSwgJ2NvbG9ycy5tb2RlcycsIHt9KTtcbiAgcmV0dXJuIG1lcmdlLmFsbCh7fSwgdGhlbWUsIHtcbiAgICBjb2xvcnM6IGdldChtb2RlcywgbW9kZSwge30pXG4gIH0pO1xufTtcblxudmFyIEJvZHlTdHlsZXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBqc3goR2xvYmFsLCB7XG4gIHN0eWxlczogZnVuY3Rpb24gKHRoZW1lKSB7IHJldHVybiBjcmVhdGVDb2xvclN0eWxlcyh0aGVtZSk7IH1cbn0pOyB9O1xuXG52YXIgQ29sb3JNb2RlUHJvdmlkZXIgPSBmdW5jdGlvbiAocmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IHJlZi5jaGlsZHJlbjtcblxuICB2YXIgb3V0ZXIgPSB1c2VUaGVtZVVJKCk7XG4gIHZhciByZWYkMSA9IHVzZUNvbG9yTW9kZVN0YXRlKG91dGVyLnRoZW1lKTtcbiAgdmFyIGNvbG9yTW9kZSA9IHJlZiQxWzBdO1xuICB2YXIgc2V0Q29sb3JNb2RlID0gcmVmJDFbMV07XG4gIHZhciB0aGVtZSA9IGFwcGx5Q29sb3JNb2RlKG91dGVyLnRoZW1lIHx8IHt9LCBjb2xvck1vZGUpO1xuICB2YXIgZW1vdGlvblRoZW1lID0gT2JqZWN0LmFzc2lnbih7fSwgdGhlbWUpO1xuXG4gIGlmICh0aGVtZS51c2VDdXN0b21Qcm9wZXJ0aWVzICE9PSBmYWxzZSkge1xuICAgIGVtb3Rpb25UaGVtZS5jb2xvcnMgPSB0b0N1c3RvbVByb3BlcnRpZXMoZW1vdGlvblRoZW1lLmNvbG9ycywgJ2NvbG9ycycpO1xuICB9XG5cbiAgdmFyIGNvbnRleHQgPSBPYmplY3QuYXNzaWduKHt9LCBvdXRlcixcbiAgICB7dGhlbWU6IHRoZW1lLFxuICAgIGNvbG9yTW9kZTogY29sb3JNb2RlLFxuICAgIHNldENvbG9yTW9kZTogc2V0Q29sb3JNb2RlfSk7XG4gIHJldHVybiBqc3goVGhlbWVDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IGVtb3Rpb25UaGVtZVxuICB9LCBqc3goQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiBjb250ZXh0XG4gIH0sIGpzeChCb2R5U3R5bGVzLCB7XG4gICAga2V5OiAnY29sb3ItbW9kZSdcbiAgfSksIGNoaWxkcmVuKSk7XG59O1xudmFyIG5vZmxhc2ggPSBcIihmdW5jdGlvbigpIHsgdHJ5IHtcXG4gIHZhciBtb2RlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lLXVpLWNvbG9yLW1vZGUnKTtcXG4gIGlmICghbW9kZSkgcmV0dXJuXFxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3RoZW1lLXVpLScgKyBtb2RlKTtcXG59IGNhdGNoIChlKSB7fSB9KSgpO1wiO1xudmFyIEluaXRpYWxpemVDb2xvck1vZGUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBqc3goJ3NjcmlwdCcsIHtcbiAga2V5OiAndGhlbWUtdWktbm8tZmxhc2gnLFxuICBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuICAgIF9faHRtbDogbm9mbGFzaFxuICB9XG59KTsgfTtcblxuZXhwb3J0IHsgdXNlQ29sb3JNb2RlLCBDb2xvck1vZGVQcm92aWRlciwgSW5pdGlhbGl6ZUNvbG9yTW9kZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXNtLmpzLm1hcFxuIiwiaW1wb3J0IHsgY3NzLCBnZXQgfSBmcm9tICdAdGhlbWUtdWkvY3NzJztcbmltcG9ydCB7IGNyZWF0ZVNob3VsZEZvcndhcmRQcm9wIH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vc2hvdWxkLWZvcndhcmQtcHJvcCc7XG5pbXBvcnQgc3BhY2UgZnJvbSAnQHN0eWxlZC1zeXN0ZW0vc3BhY2UnO1xuaW1wb3J0IGNvbG9yIGZyb20gJ0BzdHlsZWQtc3lzdGVtL2NvbG9yJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxudmFyIHNob3VsZEZvcndhcmRQcm9wID0gY3JlYXRlU2hvdWxkRm9yd2FyZFByb3AoKCBzcGFjZS5wcm9wTmFtZXMgKS5jb25jYXQoIGNvbG9yLnByb3BOYW1lcykpO1xuXG52YXIgc3ggPSBmdW5jdGlvbiAocHJvcHMpIHsgcmV0dXJuIGNzcyhwcm9wcy5zeCkocHJvcHMudGhlbWUpOyB9O1xuXG52YXIgYmFzZSA9IGZ1bmN0aW9uIChwcm9wcykgeyByZXR1cm4gY3NzKHByb3BzLl9fY3NzKShwcm9wcy50aGVtZSk7IH07XG5cbnZhciB2YXJpYW50ID0gZnVuY3Rpb24gKHJlZikge1xuICB2YXIgdGhlbWUgPSByZWYudGhlbWU7XG4gIHZhciB2YXJpYW50ID0gcmVmLnZhcmlhbnQ7XG4gIHZhciBfX3RoZW1lS2V5ID0gcmVmLl9fdGhlbWVLZXk7IGlmICggX190aGVtZUtleSA9PT0gdm9pZCAwICkgX190aGVtZUtleSA9ICd2YXJpYW50cyc7XG5cbiAgcmV0dXJuIGNzcyhnZXQodGhlbWUsIF9fdGhlbWVLZXkgKyAnLicgKyB2YXJpYW50LCBnZXQodGhlbWUsIHZhcmlhbnQpKSk7XG59O1xuXG52YXIgQm94ID0gc3R5bGVkKCdkaXYnLCB7XG4gIHNob3VsZEZvcndhcmRQcm9wOiBzaG91bGRGb3J3YXJkUHJvcFxufSkoe1xuICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgbWFyZ2luOiAwLFxuICBtaW5XaWR0aDogMFxufSwgYmFzZSwgdmFyaWFudCwgc3BhY2UsIGNvbG9yLCBzeCwgZnVuY3Rpb24gKHByb3BzKSB7IHJldHVybiBwcm9wcy5jc3M7IH0pO1xuXG52YXIgRmxleCA9IHN0eWxlZChCb3gpKHtcbiAgZGlzcGxheTogJ2ZsZXgnXG59KTtcblxuZnVuY3Rpb24gb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgKG9iaiwgZXhjbHVkZSkgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGsgaW4gb2JqKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaykgJiYgZXhjbHVkZS5pbmRleE9mKGspID09PSAtMSkgdGFyZ2V0W2tdID0gb2JqW2tdOyByZXR1cm4gdGFyZ2V0OyB9XG5cbnZhciBweCA9IGZ1bmN0aW9uIChuKSB7IHJldHVybiB0eXBlb2YgbiA9PT0gJ251bWJlcicgPyBuICsgJ3B4JyA6IG47IH07XG5cbnZhciB3aWR0aFRvQ29sdW1ucyA9IGZ1bmN0aW9uICh3aWR0aCkgeyByZXR1cm4gQXJyYXkuaXNBcnJheSh3aWR0aCkgPyB3aWR0aC5tYXAod2lkdGhUb0NvbHVtbnMpIDogISF3aWR0aCAmJiAoXCJyZXBlYXQoYXV0by1maXQsIG1pbm1heChcIiArIChweCh3aWR0aCkpICsgXCIsIDFmcikpXCIpOyB9O1xuXG52YXIgY291bnRUb0NvbHVtbnMgPSBmdW5jdGlvbiAobikgeyByZXR1cm4gQXJyYXkuaXNBcnJheShuKSA/IG4ubWFwKGNvdW50VG9Db2x1bW5zKSA6ICEhbiAmJiAodHlwZW9mIG4gPT09ICdudW1iZXInID8gKFwicmVwZWF0KFwiICsgbiArIFwiLCAxZnIpXCIpIDogbik7IH07XG5cbnZhciBHcmlkID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocmVmJDEsIHJlZikge1xuICB2YXIgd2lkdGggPSByZWYkMS53aWR0aDtcbiAgdmFyIGNvbHVtbnMgPSByZWYkMS5jb2x1bW5zO1xuICB2YXIgZ2FwID0gcmVmJDEuZ2FwOyBpZiAoIGdhcCA9PT0gdm9pZCAwICkgZ2FwID0gMztcbiAgdmFyIHJlc3QgPSBvYmplY3RXaXRob3V0UHJvcGVydGllcyggcmVmJDEsIFtcIndpZHRoXCIsIFwiY29sdW1uc1wiLCBcImdhcFwiXSApO1xuICB2YXIgcHJvcHMgPSByZXN0O1xuXG4gIHZhciBncmlkVGVtcGxhdGVDb2x1bW5zID0gISF3aWR0aCA/IHdpZHRoVG9Db2x1bW5zKHdpZHRoKSA6IGNvdW50VG9Db2x1bW5zKGNvbHVtbnMpO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCggQm94LCBPYmplY3QuYXNzaWduKHt9LCB7IHJlZjogcmVmIH0sIHByb3BzLCB7IF9fdGhlbWVLZXk6IFwiZ3JpZHNcIiwgX19jc3M6IHtcbiAgICBkaXNwbGF5OiAnZ3JpZCcsXG4gICAgZ3JpZEdhcDogZ2FwLFxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IGdyaWRUZW1wbGF0ZUNvbHVtbnNcbiAgfSB9KSk7XG59KTtcblxudmFyIEJ1dHRvbiA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHsgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoIEJveCwgT2JqZWN0LmFzc2lnbih7fSwgeyByZWY6IHJlZiwgYXM6IFwiYnV0dG9uXCIsIHZhcmlhbnQ6IFwicHJpbWFyeVwiIH0sIHByb3BzLCB7IF9fdGhlbWVLZXk6IFwiYnV0dG9uc1wiLCBfX2Nzczoge1xuICBhcHBlYXJhbmNlOiAnbm9uZScsXG4gIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICBsaW5lSGVpZ2h0OiAnaW5oZXJpdCcsXG4gIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gIHB4OiAzLFxuICBweTogMixcbiAgY29sb3I6ICd3aGl0ZScsXG4gIGJnOiAncHJpbWFyeScsXG4gIGJvcmRlcjogMCxcbiAgYm9yZGVyUmFkaXVzOiA0XG59IH0pKTsgfSk7XG5cbnZhciBMaW5rID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikgeyByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCggQm94LCBPYmplY3QuYXNzaWduKHt9LCB7IHJlZjogcmVmLCBhczogXCJhXCIsIHZhcmlhbnQ6IFwic3R5bGVzLmFcIiB9LCBwcm9wcywgeyBfX3RoZW1lS2V5OiBcImxpbmtzXCIgfSkpOyB9KTtcblxudmFyIFRleHQgPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7IHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCBCb3gsIE9iamVjdC5hc3NpZ24oe30sIHsgcmVmOiByZWYsIHZhcmlhbnQ6IFwiZGVmYXVsdFwiIH0sIHByb3BzLCB7IF9fdGhlbWVLZXk6IFwidGV4dFwiIH0pKTsgfSk7XG5cbnZhciBIZWFkaW5nID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikgeyByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCggQm94LCBPYmplY3QuYXNzaWduKHt9LCB7IHJlZjogcmVmLCBhczogXCJoMlwiLCB2YXJpYW50OiBcImhlYWRpbmdcIiB9LCBwcm9wcywgeyBfX3RoZW1lS2V5OiBcInRleHRcIiwgX19jc3M6IHtcbiAgZm9udEZhbWlseTogJ2hlYWRpbmcnLFxuICBmb250V2VpZ2h0OiAnaGVhZGluZycsXG4gIGxpbmVIZWlnaHQ6ICdoZWFkaW5nJ1xufSB9KSk7IH0pO1xuXG52YXIgSW1hZ2UgPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7IHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCBCb3gsIE9iamVjdC5hc3NpZ24oe30sIHsgcmVmOiByZWYsIGFzOiBcImltZ1wiIH0sIHByb3BzLCB7IF9fdGhlbWVLZXk6IFwiaW1hZ2VzXCIsIF9fY3NzOiBPYmplY3QuYXNzaWduKHt9LCB7bWF4V2lkdGg6ICcxMDAlJyxcbiAgaGVpZ2h0OiAnYXV0byd9LFxuICBwcm9wcy5fX2NzcykgfSkpOyB9KTtcblxudmFyIENhcmQgPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7IHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCBCb3gsIE9iamVjdC5hc3NpZ24oe30sIHsgcmVmOiByZWYsIHZhcmlhbnQ6IFwicHJpbWFyeVwiIH0sIHByb3BzLCB7IF9fdGhlbWVLZXk6IFwiY2FyZHNcIiB9KSk7IH0pO1xuXG52YXIgTGFiZWwgPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7IHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCBCb3gsIE9iamVjdC5hc3NpZ24oe30sIHsgcmVmOiByZWYsIGFzOiBcImxhYmVsXCIsIHZhcmlhbnQ6IFwibGFiZWxcIiB9LCBwcm9wcywgeyBfX3RoZW1lS2V5OiBcImZvcm1zXCIsIF9fY3NzOiB7XG4gIHdpZHRoOiAnMTAwJScsXG4gIGRpc3BsYXk6ICdmbGV4J1xufSB9KSk7IH0pO1xuXG52YXIgSW5wdXQgPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7IHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCBCb3gsIE9iamVjdC5hc3NpZ24oe30sIHsgcmVmOiByZWYsIGFzOiBcImlucHV0XCIsIHZhcmlhbnQ6IFwiaW5wdXRcIiB9LCBwcm9wcywgeyBfX3RoZW1lS2V5OiBcImZvcm1zXCIsIF9fY3NzOiB7XG4gIGRpc3BsYXk6ICdibG9jaycsXG4gIHdpZHRoOiAnMTAwJScsXG4gIHA6IDIsXG4gIGFwcGVhcmFuY2U6ICdub25lJyxcbiAgZm9udFNpemU6ICdpbmhlcml0JyxcbiAgbGluZUhlaWdodDogJ2luaGVyaXQnLFxuICBib3JkZXI6ICcxcHggc29saWQnLFxuICBib3JkZXJSYWRpdXM6IDQsXG4gIGNvbG9yOiAnaW5oZXJpdCcsXG4gIGJnOiAndHJhbnNwYXJlbnQnXG59IH0pKTsgfSk7XG5cbmZ1bmN0aW9uIG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJDEgKG9iaiwgZXhjbHVkZSkgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGsgaW4gb2JqKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaykgJiYgZXhjbHVkZS5pbmRleE9mKGspID09PSAtMSkgdGFyZ2V0W2tdID0gb2JqW2tdOyByZXR1cm4gdGFyZ2V0OyB9XG52YXIgU1ZHID0gKGZ1bmN0aW9uIChyZWYpIHtcbiAgdmFyIHNpemUgPSByZWYuc2l6ZTsgaWYgKCBzaXplID09PSB2b2lkIDAgKSBzaXplID0gMjQ7XG4gIHZhciByZXN0ID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXMkMSggcmVmLCBbXCJzaXplXCJdICk7XG4gIHZhciBwcm9wcyA9IHJlc3Q7XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoIEJveCwgT2JqZWN0LmFzc2lnbih7fSwgeyBhczogXCJzdmdcIiwgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgd2lkdGg6IHNpemUgKyAnJywgaGVpZ2h0OiBzaXplICsgJycsIHZpZXdCb3g6IFwiMCAwIDI0IDI0XCIsIGZpbGw6IFwiY3VycmVudGNvbG9yXCIgfSwgcHJvcHMpKTtcbn0pO1xuXG52YXIgZ2V0UHJvcHMgPSBmdW5jdGlvbiAodGVzdCkgeyByZXR1cm4gZnVuY3Rpb24gKHByb3BzKSB7XG4gIHZhciBuZXh0ID0ge307XG5cbiAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgaWYgKHRlc3Qoa2V5IHx8ICcnKSkgeyBuZXh0W2tleV0gPSBwcm9wc1trZXldOyB9XG4gIH1cblxuICByZXR1cm4gbmV4dDtcbn07IH07XG52YXIgTVJFID0gL15tW3RyYmx4eV0/JC87XG52YXIgZ2V0TWFyZ2luID0gZ2V0UHJvcHMoZnVuY3Rpb24gKGspIHsgcmV0dXJuIE1SRS50ZXN0KGspOyB9KTtcbnZhciBvbWl0TWFyZ2luID0gZ2V0UHJvcHMoZnVuY3Rpb24gKGspIHsgcmV0dXJuICFNUkUudGVzdChrKTsgfSk7XG5cbnZhciBEb3duQXJyb3cgPSBmdW5jdGlvbiAocHJvcHMpIHsgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoIFNWRywgcHJvcHMsXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudCggJ3BhdGgnLCB7IGQ6IFwiTTcgMTBsNSA1IDUtNXpcIiB9KVxuICApOyB9O1xuXG52YXIgU2VsZWN0ID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikgeyByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCggQm94LCBPYmplY3QuYXNzaWduKHt9LCBnZXRNYXJnaW4ocHJvcHMpLCB7IHN4OiB7XG4gIGRpc3BsYXk6ICdmbGV4J1xufSB9KSxcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCBCb3gsIE9iamVjdC5hc3NpZ24oe30sIHsgcmVmOiByZWYsIGFzOiBcInNlbGVjdFwiLCB2YXJpYW50OiBcInNlbGVjdFwiIH0sIG9taXRNYXJnaW4ocHJvcHMpLCB7IF9fdGhlbWVLZXk6IFwiZm9ybXNcIiwgX19jc3M6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgcDogMixcbiAgICBhcHBlYXJhbmNlOiAnbm9uZScsXG4gICAgZm9udFNpemU6ICdpbmhlcml0JyxcbiAgICBsaW5lSGVpZ2h0OiAnaW5oZXJpdCcsXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkJyxcbiAgICBib3JkZXJSYWRpdXM6IDQsXG4gICAgY29sb3I6ICdpbmhlcml0JyxcbiAgICBiZzogJ3RyYW5zcGFyZW50J1xuICB9IH0pKSxcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCBEb3duQXJyb3csIHsgc3g6IHtcbiAgICBtbDogLTI4LFxuICAgIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gICAgcG9pbnRlckV2ZW50czogJ25vbmUnXG4gIH0gfSlcbiAgKTsgfSk7XG5cbnZhciBUZXh0YXJlYSA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHsgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoIEJveCwgT2JqZWN0LmFzc2lnbih7fSwgeyByZWY6IHJlZiwgYXM6IFwidGV4dGFyZWFcIiwgdmFyaWFudDogXCJ0ZXh0YXJlYVwiIH0sIHByb3BzLCB7IF9fdGhlbWVLZXk6IFwiZm9ybXNcIiwgX19jc3M6IHtcbiAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgcDogMixcbiAgYXBwZWFyYW5jZTogJ25vbmUnLFxuICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICBsaW5lSGVpZ2h0OiAnaW5oZXJpdCcsXG4gIGJvcmRlcjogJzFweCBzb2xpZCcsXG4gIGJvcmRlclJhZGl1czogNCxcbiAgY29sb3I6ICdpbmhlcml0JyxcbiAgYmc6ICd0cmFuc3BhcmVudCdcbn0gfSkpOyB9KTtcblxuZnVuY3Rpb24gb2JqZWN0V2l0aG91dFByb3BlcnRpZXMkMiAob2JqLCBleGNsdWRlKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgayBpbiBvYmopIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrKSAmJiBleGNsdWRlLmluZGV4T2YoaykgPT09IC0xKSB0YXJnZXRba10gPSBvYmpba107IHJldHVybiB0YXJnZXQ7IH1cblxudmFyIFJhZGlvQ2hlY2tlZCA9IGZ1bmN0aW9uIChwcm9wcykgeyByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCggU1ZHLCBwcm9wcyxcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCAncGF0aCcsIHsgZDogXCJNMTIgN2MtMi43NiAwLTUgMi4yNC01IDVzMi4yNCA1IDUgNSA1LTIuMjQgNS01LTIuMjQtNS01LTV6bTAtNUM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMCAxOGMtNC40MiAwLTgtMy41OC04LThzMy41OC04IDgtOCA4IDMuNTggOCA4LTMuNTggOC04IDh6XCIgfSlcbiAgKTsgfTtcblxudmFyIFJhZGlvVW5jaGVja2VkID0gZnVuY3Rpb24gKHByb3BzKSB7IHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCBTVkcsIHByb3BzLFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoICdwYXRoJywgeyBkOiBcIk0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0wIDE4Yy00LjQyIDAtOC0zLjU4LTgtOHMzLjU4LTggOC04IDggMy41OCA4IDgtMy41OCA4LTggOHpcIiB9KVxuICApOyB9O1xuXG52YXIgUmFkaW9JY29uID0gZnVuY3Rpb24gKHByb3BzKSB7IHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCBSZWFjdC5GcmFnbWVudCwgbnVsbCxcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCBSYWRpb0NoZWNrZWQsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzLCB7IF9fY3NzOiB7XG4gICAgZGlzcGxheTogJ25vbmUnLFxuICAgICdpbnB1dDpjaGVja2VkIH4gJic6IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaydcbiAgICB9XG4gIH0gfSkpLFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoIFJhZGlvVW5jaGVja2VkLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywgeyBfX2Nzczoge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgJ2lucHV0OmNoZWNrZWQgfiAmJzoge1xuICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgfVxuICB9IH0pKVxuICApOyB9O1xuXG52YXIgUmFkaW8gPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChyZWYkMSwgcmVmKSB7XG4gIHZhciBjbGFzc05hbWUgPSByZWYkMS5jbGFzc05hbWU7XG4gIHZhciBzeCA9IHJlZiQxLnN4O1xuICB2YXIgdmFyaWFudCA9IHJlZiQxLnZhcmlhbnQ7IGlmICggdmFyaWFudCA9PT0gdm9pZCAwICkgdmFyaWFudCA9ICdyYWRpbyc7XG4gIHZhciByZXN0ID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXMkMiggcmVmJDEsIFtcImNsYXNzTmFtZVwiLCBcInN4XCIsIFwidmFyaWFudFwiXSApO1xuICB2YXIgcHJvcHMgPSByZXN0O1xuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCBCb3gsIG51bGwsXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCBCb3gsIE9iamVjdC5hc3NpZ24oe30sIHsgcmVmOiByZWYsIGFzOiBcImlucHV0XCIsIHR5cGU6IFwicmFkaW9cIiB9LCBwcm9wcywgeyBzeDoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIG9wYWNpdHk6IDAsXG4gICAgekluZGV4OiAtMSxcbiAgICB3aWR0aDogMSxcbiAgICBoZWlnaHQ6IDEsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gIH0gfSkpLFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCggQm94LCB7IGFzOiBSYWRpb0ljb24sICdhcmlhLWhpZGRlbic6IFwidHJ1ZVwiLCBfX3RoZW1lS2V5OiBcImZvcm1zXCIsIHZhcmlhbnQ6IHZhcmlhbnQsIGNsYXNzTmFtZTogY2xhc3NOYW1lLCBzeDogc3gsIF9fY3NzOiB7XG4gICAgLy8gdG9kbzogc3lzdGVtIHByb3BzPz9cbiAgICBtcjogMixcbiAgICBib3JkZXJSYWRpdXM6IDk5OTksXG4gICAgY29sb3I6ICdncmF5JyxcbiAgICAnaW5wdXQ6Y2hlY2tlZCB+ICYnOiB7XG4gICAgICBjb2xvcjogJ3ByaW1hcnknXG4gICAgfSxcbiAgICAnaW5wdXQ6Zm9jdXMgfiAmJzoge1xuICAgICAgYmc6ICdoaWdobGlnaHQnXG4gICAgfVxuICB9IH0pXG4gICAgKTtcbn0pO1xuXG5mdW5jdGlvbiBvYmplY3RXaXRob3V0UHJvcGVydGllcyQzIChvYmosIGV4Y2x1ZGUpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBrIGluIG9iaikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGspICYmIGV4Y2x1ZGUuaW5kZXhPZihrKSA9PT0gLTEpIHRhcmdldFtrXSA9IG9ialtrXTsgcmV0dXJuIHRhcmdldDsgfVxuXG52YXIgQ2hlY2tib3hDaGVja2VkID0gZnVuY3Rpb24gKHByb3BzKSB7IHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCBTVkcsIHByb3BzLFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoICdwYXRoJywgeyBkOiBcIk0xOSAzSDVjLTEuMTEgMC0yIC45LTIgMnYxNGMwIDEuMS44OSAyIDIgMmgxNGMxLjExIDAgMi0uOSAyLTJWNWMwLTEuMS0uODktMi0yLTJ6bS05IDE0bC01LTUgMS40MS0xLjQxTDEwIDE0LjE3bDcuNTktNy41OUwxOSA4bC05IDl6XCIgfSlcbiAgKTsgfTtcblxudmFyIENoZWNrYm94VW5jaGVja2VkID0gZnVuY3Rpb24gKHByb3BzKSB7IHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCBTVkcsIHByb3BzLFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoICdwYXRoJywgeyBkOiBcIk0xOSA1djE0SDVWNWgxNG0wLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yelwiIH0pXG4gICk7IH07XG5cbnZhciBDaGVja2JveEljb24gPSBmdW5jdGlvbiAocHJvcHMpIHsgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoIFJlYWN0LkZyYWdtZW50LCBudWxsLFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoIENoZWNrYm94Q2hlY2tlZCwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHsgX19jc3M6IHtcbiAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgJ2lucHV0OmNoZWNrZWQgfiAmJzoge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xuICAgIH1cbiAgfSB9KSksXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudCggQ2hlY2tib3hVbmNoZWNrZWQsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzLCB7IF9fY3NzOiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAnaW5wdXQ6Y2hlY2tlZCB+ICYnOiB7XG4gICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICB9XG4gIH0gfSkpXG4gICk7IH07XG5cbnZhciBDaGVja2JveCA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHJlZiQxLCByZWYpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHJlZiQxLmNsYXNzTmFtZTtcbiAgdmFyIHN4ID0gcmVmJDEuc3g7XG4gIHZhciB2YXJpYW50ID0gcmVmJDEudmFyaWFudDsgaWYgKCB2YXJpYW50ID09PSB2b2lkIDAgKSB2YXJpYW50ID0gJ2NoZWNrYm94JztcbiAgdmFyIHJlc3QgPSBvYmplY3RXaXRob3V0UHJvcGVydGllcyQzKCByZWYkMSwgW1wiY2xhc3NOYW1lXCIsIFwic3hcIiwgXCJ2YXJpYW50XCJdICk7XG4gIHZhciBwcm9wcyA9IHJlc3Q7XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoIEJveCwgbnVsbCxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoIEJveCwgT2JqZWN0LmFzc2lnbih7fSwgeyByZWY6IHJlZiwgYXM6IFwiaW5wdXRcIiwgdHlwZTogXCJjaGVja2JveFwiIH0sIHByb3BzLCB7IHN4OiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgb3BhY2l0eTogMCxcbiAgICB6SW5kZXg6IC0xLFxuICAgIHdpZHRoOiAxLFxuICAgIGhlaWdodDogMSxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgfSB9KSksXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCBCb3gsIHsgYXM6IENoZWNrYm94SWNvbiwgJ2FyaWEtaGlkZGVuJzogXCJ0cnVlXCIsIF9fdGhlbWVLZXk6IFwiZm9ybXNcIiwgdmFyaWFudDogdmFyaWFudCwgY2xhc3NOYW1lOiBjbGFzc05hbWUsIHN4OiBzeCwgX19jc3M6IHtcbiAgICBtcjogMixcbiAgICBib3JkZXJSYWRpdXM6IDQsXG4gICAgY29sb3I6ICdncmF5JyxcbiAgICAnaW5wdXQ6Y2hlY2tlZCB+ICYnOiB7XG4gICAgICBjb2xvcjogJ3ByaW1hcnknXG4gICAgfSxcbiAgICAnaW5wdXQ6Zm9jdXMgfiAmJzoge1xuICAgICAgY29sb3I6ICdwcmltYXJ5JyxcbiAgICAgIGJnOiAnaGlnaGxpZ2h0J1xuICAgIH1cbiAgfSB9KVxuICAgICk7XG59KTtcblxudmFyIHRodW1iID0ge1xuICBhcHBlYXJhbmNlOiAnbm9uZScsXG4gIHdpZHRoOiAxNixcbiAgaGVpZ2h0OiAxNixcbiAgYmc6ICdjdXJyZW50Y29sb3InLFxuICBib3JkZXI6IDAsXG4gIGJvcmRlclJhZGl1czogOTk5OSxcbiAgdmFyaWFudDogJ2Zvcm1zLnNsaWRlci50aHVtYidcbn07XG52YXIgU2xpZGVyID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikgeyByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCggQm94LCBPYmplY3QuYXNzaWduKHt9LCB7IHJlZjogcmVmLCBhczogXCJpbnB1dFwiLCB0eXBlOiBcInJhbmdlXCIsIHZhcmlhbnQ6IFwic2xpZGVyXCIgfSwgcHJvcHMsIHsgX190aGVtZUtleTogXCJmb3Jtc1wiLCBfX2Nzczoge1xuICBkaXNwbGF5OiAnYmxvY2snLFxuICB3aWR0aDogJzEwMCUnLFxuICBoZWlnaHQ6IDQsXG4gIG15OiAyLFxuICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgYXBwZWFyYW5jZTogJ25vbmUnLFxuICBib3JkZXJSYWRpdXM6IDk5OTksXG4gIGNvbG9yOiAnaW5oZXJpdCcsXG4gIGJnOiAnZ3JheScsXG4gICc6Zm9jdXMnOiB7XG4gICAgb3V0bGluZTogJ25vbmUnLFxuICAgIGNvbG9yOiAncHJpbWFyeSdcbiAgfSxcbiAgJyY6Oi13ZWJraXQtc2xpZGVyLXRodW1iJzogdGh1bWIsXG4gICcmOjotbW96LXJhbmdlLXRodW1iJzogdGh1bWIsXG4gICcmOjotbXMtdGh1bWInOiB0aHVtYlxufSB9KSk7IH0pO1xuXG5mdW5jdGlvbiBvYmplY3RXaXRob3V0UHJvcGVydGllcyQ0IChvYmosIGV4Y2x1ZGUpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBrIGluIG9iaikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGspICYmIGV4Y2x1ZGUuaW5kZXhPZihrKSA9PT0gLTEpIHRhcmdldFtrXSA9IG9ialtrXTsgcmV0dXJuIHRhcmdldDsgfVxudmFyIEZpZWxkID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocmVmJDEsIHJlZikge1xuICB2YXIgQ29udHJvbCA9IHJlZiQxLmFzOyBpZiAoIENvbnRyb2wgPT09IHZvaWQgMCApIENvbnRyb2wgPSBJbnB1dDtcbiAgdmFyIGxhYmVsID0gcmVmJDEubGFiZWw7XG4gIHZhciBuYW1lID0gcmVmJDEubmFtZTtcbiAgdmFyIHJlc3QgPSBvYmplY3RXaXRob3V0UHJvcGVydGllcyQ0KCByZWYkMSwgW1wiYXNcIiwgXCJsYWJlbFwiLCBcIm5hbWVcIl0gKTtcbiAgdmFyIHByb3BzID0gcmVzdDtcblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCggQm94LCBnZXRNYXJnaW4ocHJvcHMpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCBMYWJlbCwgeyBodG1sRm9yOiBuYW1lIH0sIGxhYmVsKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCggQ29udHJvbCwgT2JqZWN0LmFzc2lnbih7fSwgeyByZWY6IHJlZiwgaWQ6IG5hbWUsIG5hbWU6IG5hbWUgfSwgb21pdE1hcmdpbihwcm9wcykpKVxuICAgICAgKTtcbn0pO1xuXG52YXIgUHJvZ3Jlc3MgPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7IHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCBCb3gsIE9iamVjdC5hc3NpZ24oe30sIHsgcmVmOiByZWYsIGFzOiBcInByb2dyZXNzXCIsIHZhcmlhbnQ6IFwic3R5bGVzLnByb2dyZXNzXCIgfSwgcHJvcHMsIHsgX19jc3M6IHtcbiAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgaGVpZ2h0OiAnNHB4JyxcbiAgbWFyZ2luOiAwLFxuICBwYWRkaW5nOiAwLFxuICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gIGFwcGVhcmFuY2U6ICdub25lJyxcbiAgY29sb3I6ICdwcmltYXJ5JyxcbiAgYmc6ICdncmF5JyxcbiAgYm9yZGVyUmFkaXVzOiA5OTk5LFxuICBib3JkZXI6ICdub25lJyxcbiAgJyY6Oi13ZWJraXQtcHJvZ3Jlc3MtYmFyJzoge1xuICAgIGJnOiAndHJhbnNwYXJlbnQnXG4gIH0sXG4gICcmOjotd2Via2l0LXByb2dyZXNzLXZhbHVlJzoge1xuICAgIGJnOiAnY3VycmVudGNvbG9yJ1xuICB9LFxuICAnJjo6LW1vei1wcm9ncmVzcy1iYXInOiB7XG4gICAgYmc6ICdjdXJyZW50Y29sb3InXG4gIH1cbn0gfSkpOyB9KTtcblxuZnVuY3Rpb24gb2JqZWN0V2l0aG91dFByb3BlcnRpZXMkNSAob2JqLCBleGNsdWRlKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgayBpbiBvYmopIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrKSAmJiBleGNsdWRlLmluZGV4T2YoaykgPT09IC0xKSB0YXJnZXRba10gPSBvYmpba107IHJldHVybiB0YXJnZXQ7IH1cbnZhciBEb251dCA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHJlZiQxLCByZWYpIHtcbiAgdmFyIHNpemUgPSByZWYkMS5zaXplOyBpZiAoIHNpemUgPT09IHZvaWQgMCApIHNpemUgPSAxMjg7XG4gIHZhciBzdHJva2VXaWR0aCA9IHJlZiQxLnN0cm9rZVdpZHRoOyBpZiAoIHN0cm9rZVdpZHRoID09PSB2b2lkIDAgKSBzdHJva2VXaWR0aCA9IDI7XG4gIHZhciB2YWx1ZSA9IHJlZiQxLnZhbHVlOyBpZiAoIHZhbHVlID09PSB2b2lkIDAgKSB2YWx1ZSA9IDA7XG4gIHZhciBtaW4gPSByZWYkMS5taW47IGlmICggbWluID09PSB2b2lkIDAgKSBtaW4gPSAwO1xuICB2YXIgbWF4ID0gcmVmJDEubWF4OyBpZiAoIG1heCA9PT0gdm9pZCAwICkgbWF4ID0gMTtcbiAgdmFyIHRpdGxlID0gcmVmJDEudGl0bGU7XG4gIHZhciByZXN0ID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXMkNSggcmVmJDEsIFtcInNpemVcIiwgXCJzdHJva2VXaWR0aFwiLCBcInZhbHVlXCIsIFwibWluXCIsIFwibWF4XCIsIFwidGl0bGVcIl0gKTtcbiAgdmFyIHByb3BzID0gcmVzdDtcblxuICB2YXIgciA9IDE2IC0gc3Ryb2tlV2lkdGg7XG4gIHZhciBDID0gMiAqIHIgKiBNYXRoLlBJO1xuICB2YXIgb2Zmc2V0ID0gQyAtICh2YWx1ZSAtIG1pbikgLyAobWF4IC0gbWluKSAqIEM7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCBCb3gsIE9iamVjdC5hc3NpZ24oe30sIHsgcmVmOiByZWYsIGFzOiBcInN2Z1wiLCB2aWV3Qm94OiBcIjAgMCAzMiAzMlwiLCB3aWR0aDogc2l6ZSwgaGVpZ2h0OiBzaXplLCBzdHJva2VXaWR0aDogc3Ryb2tlV2lkdGgsIGZpbGw6IFwibm9uZVwiLCBzdHJva2U6IFwiY3VycmVudGNvbG9yXCIsIHJvbGU6IFwiaW1nXCIsICdhcmlhLXZhbHVlbm93JzogdmFsdWUsICdhcmlhLXZhbHVlbWluJzogbWluLCAnYXJpYS12YWx1ZW1heCc6IG1heCB9LCBwcm9wcywgeyBfX2Nzczoge1xuICAgIGNvbG9yOiAncHJpbWFyeSdcbiAgfSB9KSxcbiAgICAgICAgdGl0bGUgJiYgUmVhY3QuY3JlYXRlRWxlbWVudCggJ3RpdGxlJywgbnVsbCwgdGl0bGUgKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCggJ2NpcmNsZScsIHsgY3g6IDE2LCBjeTogMTYsIHI6IHIsIG9wYWNpdHk6IDEgLyA4IH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCAnY2lyY2xlJywgeyBjeDogMTYsIGN5OiAxNiwgcjogciwgc3Ryb2tlRGFzaGFycmF5OiBDLCBzdHJva2VEYXNob2Zmc2V0OiBvZmZzZXQsIHRyYW5zZm9ybTogXCJyb3RhdGUoLTkwIDE2IDE2KVwiIH0pXG4gICAgICApO1xufSk7XG5cbmZ1bmN0aW9uIG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJDYgKG9iaiwgZXhjbHVkZSkgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGsgaW4gb2JqKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaykgJiYgZXhjbHVkZS5pbmRleE9mKGspID09PSAtMSkgdGFyZ2V0W2tdID0gb2JqW2tdOyByZXR1cm4gdGFyZ2V0OyB9XG52YXIgc3BpbiA9IGtleWZyYW1lcyh7XG4gIGZyb206IHtcbiAgICB0cmFuc2Zvcm06ICdyb3RhdGUoMGRlZyknXG4gIH0sXG4gIHRvOiB7XG4gICAgdHJhbnNmb3JtOiAncm90YXRlKDM2MGRlZyknXG4gIH1cbn0pO1xudmFyIFNwaW5uZXIgPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChyZWYkMSwgcmVmKSB7XG4gIHZhciBzaXplID0gcmVmJDEuc2l6ZTsgaWYgKCBzaXplID09PSB2b2lkIDAgKSBzaXplID0gNDg7XG4gIHZhciBzdHJva2VXaWR0aCA9IHJlZiQxLnN0cm9rZVdpZHRoOyBpZiAoIHN0cm9rZVdpZHRoID09PSB2b2lkIDAgKSBzdHJva2VXaWR0aCA9IDQ7XG4gIHZhciB0aXRsZSA9IHJlZiQxLnRpdGxlOyBpZiAoIHRpdGxlID09PSB2b2lkIDAgKSB0aXRsZSA9ICdMb2FkaW5nLi4uJztcbiAgdmFyIGR1cmF0aW9uID0gcmVmJDEuZHVyYXRpb247IGlmICggZHVyYXRpb24gPT09IHZvaWQgMCApIGR1cmF0aW9uID0gNTAwO1xuICB2YXIgcmVzdCA9IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJDYoIHJlZiQxLCBbXCJzaXplXCIsIFwic3Ryb2tlV2lkdGhcIiwgXCJtYXhcIiwgXCJ0aXRsZVwiLCBcImR1cmF0aW9uXCJdICk7XG4gIHZhciBwcm9wcyA9IHJlc3Q7XG5cbiAgdmFyIHIgPSAxNiAtIHN0cm9rZVdpZHRoO1xuICB2YXIgQyA9IDIgKiByICogTWF0aC5QSTtcbiAgdmFyIG9mZnNldCA9IEMgLSAxIC8gNCAqIEM7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCBCb3gsIE9iamVjdC5hc3NpZ24oe30sIHsgcmVmOiByZWYsIGFzOiBcInN2Z1wiLCB2aWV3Qm94OiBcIjAgMCAzMiAzMlwiLCB3aWR0aDogc2l6ZSwgaGVpZ2h0OiBzaXplLCBzdHJva2VXaWR0aDogc3Ryb2tlV2lkdGgsIGZpbGw6IFwibm9uZVwiLCBzdHJva2U6IFwiY3VycmVudGNvbG9yXCIsIHJvbGU6IFwiaW1nXCIgfSwgcHJvcHMsIHsgX19jc3M6IHtcbiAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgIG92ZXJmbG93OiAndmlzaWJsZSdcbiAgfSB9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCggJ3RpdGxlJywgbnVsbCwgdGl0bGUgKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCggJ2NpcmNsZScsIHsgY3g6IDE2LCBjeTogMTYsIHI6IHIsIG9wYWNpdHk6IDEgLyA4IH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCBCb3gsIHsgYXM6IFwiY2lyY2xlXCIsIGN4OiAxNiwgY3k6IDE2LCByOiByLCBzdHJva2VEYXNoYXJyYXk6IEMsIHN0cm9rZURhc2hvZmZzZXQ6IG9mZnNldCwgX19jc3M6IHtcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzUwJSA1MCUnLFxuICAgICAgYW5pbWF0aW9uTmFtZTogc3Bpbi50b1N0cmluZygpLFxuICAgICAgYW5pbWF0aW9uVGltaW5nRnVuY3Rpb246ICdsaW5lYXInLFxuICAgICAgYW5pbWF0aW9uRHVyYXRpb246IGR1cmF0aW9uICsgJ21zJyxcbiAgICAgIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiAnaW5maW5pdGUnXG4gICAgfSB9KVxuICAgICAgKTtcbn0pO1xuXG5mdW5jdGlvbiBvYmplY3RXaXRob3V0UHJvcGVydGllcyQ3IChvYmosIGV4Y2x1ZGUpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBrIGluIG9iaikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGspICYmIGV4Y2x1ZGUuaW5kZXhPZihrKSA9PT0gLTEpIHRhcmdldFtrXSA9IG9ialtrXTsgcmV0dXJuIHRhcmdldDsgfVxudmFyIEF2YXRhciA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHJlZiQxLCByZWYpIHtcbiAgdmFyIHNpemUgPSByZWYkMS5zaXplOyBpZiAoIHNpemUgPT09IHZvaWQgMCApIHNpemUgPSA0ODtcbiAgdmFyIHJlc3QgPSBvYmplY3RXaXRob3V0UHJvcGVydGllcyQ3KCByZWYkMSwgW1wic2l6ZVwiXSApO1xuICB2YXIgcHJvcHMgPSByZXN0O1xuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCBJbWFnZSwgT2JqZWN0LmFzc2lnbih7fSwgeyByZWY6IHJlZiwgd2lkdGg6IHNpemUsIGhlaWdodDogc2l6ZSwgdmFyaWFudDogXCJhdmF0YXJcIiB9LCBwcm9wcywgeyBfX2Nzczoge1xuICBib3JkZXJSYWRpdXM6IDk5OTlcbn0gfSkpO1xufSk7XG5cbnZhciBCYWRnZSA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHsgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoIEJveCwgT2JqZWN0LmFzc2lnbih7fSwgeyByZWY6IHJlZiwgdmFyaWFudDogXCJwcmltYXJ5XCIgfSwgcHJvcHMsIHsgX190aGVtZUtleTogXCJiYWRnZXNcIiwgX19jc3M6IHtcbiAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gIHZlcnRpY2FsQWxpZ246ICdiYXNlbGluZScsXG4gIGZvbnRTaXplOiAwLFxuICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICBweDogMSxcbiAgYm9yZGVyUmFkaXVzOiAyLFxuICBjb2xvcjogJ3doaXRlJyxcbiAgYmc6ICdwcmltYXJ5J1xufSB9KSk7IH0pO1xuXG5mdW5jdGlvbiBvYmplY3RXaXRob3V0UHJvcGVydGllcyQ4IChvYmosIGV4Y2x1ZGUpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBrIGluIG9iaikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGspICYmIGV4Y2x1ZGUuaW5kZXhPZihrKSA9PT0gLTEpIHRhcmdldFtrXSA9IG9ialtrXTsgcmV0dXJuIHRhcmdldDsgfVxudmFyIEljb25CdXR0b24gPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChyZWYkMSwgcmVmKSB7XG4gIHZhciBzaXplID0gcmVmJDEuc2l6ZTsgaWYgKCBzaXplID09PSB2b2lkIDAgKSBzaXplID0gMzI7XG4gIHZhciByZXN0ID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXMkOCggcmVmJDEsIFtcInNpemVcIl0gKTtcbiAgdmFyIHByb3BzID0gcmVzdDtcblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCggQm94LCBPYmplY3QuYXNzaWduKHt9LCB7IHJlZjogcmVmLCBhczogXCJidXR0b25cIiwgdmFyaWFudDogXCJpY29uXCIgfSwgcHJvcHMsIHsgX190aGVtZUtleTogXCJidXR0b25zXCIsIF9fY3NzOiB7XG4gIGFwcGVhcmFuY2U6ICdub25lJyxcbiAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgcGFkZGluZzogMSxcbiAgd2lkdGg6IHNpemUsXG4gIGhlaWdodDogc2l6ZSxcbiAgY29sb3I6ICdpbmhlcml0JyxcbiAgYmc6ICd0cmFuc3BhcmVudCcsXG4gIGJvcmRlcjogJ25vbmUnLFxuICBib3JkZXJSYWRpdXM6IDRcbn0gfSkpO1xufSk7XG5cbmZ1bmN0aW9uIG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJDkgKG9iaiwgZXhjbHVkZSkgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGsgaW4gb2JqKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaykgJiYgZXhjbHVkZS5pbmRleE9mKGspID09PSAtMSkgdGFyZ2V0W2tdID0gb2JqW2tdOyByZXR1cm4gdGFyZ2V0OyB9XG52YXIgeCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoICdzdmcnLCB7IHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIHdpZHRoOiBcIjI0XCIsIGhlaWdodDogXCIyNFwiLCBmaWxsOiBcImN1cnJlbnRjb2xvclwiLCB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiIH0sXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudCggJ3BhdGgnLCB7IGQ6IFwiTTE5IDYuNDFMMTcuNTkgNSAxMiAxMC41OSA2LjQxIDUgNSA2LjQxIDEwLjU5IDEyIDUgMTcuNTkgNi40MSAxOSAxMiAxMy40MSAxNy41OSAxOSAxOSAxNy41OSAxMy40MSAxMnpcIiB9KVxuICApO1xudmFyIENsb3NlID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocmVmJDEsIHJlZikge1xuICB2YXIgcmVzdCA9IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJDkoIHJlZiQxLCBbXCJzaXplXCJdICk7XG4gIHZhciBwcm9wcyA9IHJlc3Q7XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoIEljb25CdXR0b24sIE9iamVjdC5hc3NpZ24oe30sIHsgcmVmOiByZWYsIHRpdGxlOiBcIkNsb3NlXCIsICdhcmlhLWxhYmVsJzogXCJDbG9zZVwiLCB2YXJpYW50OiBcImNsb3NlXCIgfSwgcHJvcHMsIHsgY2hpbGRyZW46IHggfSkpO1xufSk7XG5cbnZhciBBbGVydCA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHsgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoIEJveCwgT2JqZWN0LmFzc2lnbih7fSwgeyByZWY6IHJlZiwgdmFyaWFudDogXCJwcmltYXJ5XCIgfSwgcHJvcHMsIHsgX190aGVtZUtleTogXCJhbGVydHNcIiwgX19jc3M6IHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgcHg6IDMsXG4gIHB5OiAyLFxuICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gIGNvbG9yOiAnd2hpdGUnLFxuICBiZzogJ3ByaW1hcnknLFxuICBib3JkZXJSYWRpdXM6IDRcbn0gfSkpOyB9KTtcblxudmFyIERpdmlkZXIgPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7IHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCBCb3gsIE9iamVjdC5hc3NpZ24oe30sIHsgcmVmOiByZWYsIGFzOiBcImhyXCIsIHZhcmlhbnQ6IFwic3R5bGVzLmhyXCIgfSwgcHJvcHMsIHsgX19jc3M6IHtcbiAgY29sb3I6ICdncmF5JyxcbiAgbTogMCxcbiAgbXk6IDIsXG4gIGJvcmRlcjogMCxcbiAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkJ1xufSB9KSk7IH0pO1xuXG5mdW5jdGlvbiBvYmplY3RXaXRob3V0UHJvcGVydGllcyRhIChvYmosIGV4Y2x1ZGUpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBrIGluIG9iaikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGspICYmIGV4Y2x1ZGUuaW5kZXhPZihrKSA9PT0gLTEpIHRhcmdldFtrXSA9IG9ialtrXTsgcmV0dXJuIHRhcmdldDsgfVxudmFyIEVtYmVkID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocmVmJDEsIHJlZikge1xuICB2YXIgcmF0aW8gPSByZWYkMS5yYXRpbzsgaWYgKCByYXRpbyA9PT0gdm9pZCAwICkgcmF0aW8gPSAxNiAvIDk7XG4gIHZhciBzcmMgPSByZWYkMS5zcmM7XG4gIHZhciBmcmFtZUJvcmRlciA9IHJlZiQxLmZyYW1lQm9yZGVyOyBpZiAoIGZyYW1lQm9yZGVyID09PSB2b2lkIDAgKSBmcmFtZUJvcmRlciA9IDA7XG4gIHZhciBhbGxvd0Z1bGxTY3JlZW4gPSByZWYkMS5hbGxvd0Z1bGxTY3JlZW47IGlmICggYWxsb3dGdWxsU2NyZWVuID09PSB2b2lkIDAgKSBhbGxvd0Z1bGxTY3JlZW4gPSB0cnVlO1xuICB2YXIgd2lkdGggPSByZWYkMS53aWR0aDsgaWYgKCB3aWR0aCA9PT0gdm9pZCAwICkgd2lkdGggPSA1NjA7XG4gIHZhciBoZWlnaHQgPSByZWYkMS5oZWlnaHQ7IGlmICggaGVpZ2h0ID09PSB2b2lkIDAgKSBoZWlnaHQgPSAzMTU7XG4gIHZhciBhbGxvdyA9IHJlZiQxLmFsbG93O1xuICB2YXIgcmVzdCA9IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJGEoIHJlZiQxLCBbXCJyYXRpb1wiLCBcInNyY1wiLCBcImZyYW1lQm9yZGVyXCIsIFwiYWxsb3dGdWxsU2NyZWVuXCIsIFwid2lkdGhcIiwgXCJoZWlnaHRcIiwgXCJhbGxvd1wiXSApO1xuICB2YXIgcHJvcHMgPSByZXN0O1xuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCBCb3gsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzLCB7IF9fY3NzOiB7XG4gIHdpZHRoOiAnMTAwJScsXG4gIGhlaWdodDogMCxcbiAgcGFkZGluZ0JvdHRvbTogMTAwIC8gcmF0aW8gKyAnJScsXG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICBvdmVyZmxvdzogJ2hpZGRlbidcbn0gfSksXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCBCb3gsIHsgcmVmOiByZWYsIGFzOiBcImlmcmFtZVwiLCBzcmM6IHNyYywgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCwgZnJhbWVCb3JkZXI6IGZyYW1lQm9yZGVyLCBhbGxvd0Z1bGxTY3JlZW46IGFsbG93RnVsbFNjcmVlbiwgYWxsb3c6IGFsbG93LCBfX2Nzczoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgdG9wOiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICBsZWZ0OiAwLFxuICAgIGJvcmRlcjogMFxuICB9IH0pXG4gICAgKTtcbn0pO1xuXG5mdW5jdGlvbiBvYmplY3RXaXRob3V0UHJvcGVydGllcyRiIChvYmosIGV4Y2x1ZGUpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBrIGluIG9iaikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGspICYmIGV4Y2x1ZGUuaW5kZXhPZihrKSA9PT0gLTEpIHRhcmdldFtrXSA9IG9ialtrXTsgcmV0dXJuIHRhcmdldDsgfVxudmFyIEFzcGVjdFJhdGlvID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocmVmJDEsIHJlZikge1xuICB2YXIgcmF0aW8gPSByZWYkMS5yYXRpbzsgaWYgKCByYXRpbyA9PT0gdm9pZCAwICkgcmF0aW8gPSA0IC8gMztcbiAgdmFyIGNoaWxkcmVuID0gcmVmJDEuY2hpbGRyZW47XG4gIHZhciByZXN0ID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXMkYiggcmVmJDEsIFtcInJhdGlvXCIsIFwiY2hpbGRyZW5cIl0gKTtcbiAgdmFyIHByb3BzID0gcmVzdDtcblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCggQm94LCB7IHJlZjogcmVmLCBzeDoge1xuICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgb3ZlcmZsb3c6ICdoaWRkZW4nXG59IH0sXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCBCb3gsIHsgc3g6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogMCxcbiAgICBwYWRkaW5nQm90dG9tOiAxMDAgLyByYXRpbyArICclJ1xuICB9IH0pLFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCggQm94LCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywgeyBfX2Nzczoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogMCxcbiAgICByaWdodDogMCxcbiAgICBib3R0b206IDAsXG4gICAgbGVmdDogMFxuICB9IH0pLFxuICAgICAgICBjaGlsZHJlblxuICAgICAgKVxuICAgICk7XG59KTtcblxuZnVuY3Rpb24gb2JqZWN0V2l0aG91dFByb3BlcnRpZXMkYyAob2JqLCBleGNsdWRlKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgayBpbiBvYmopIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrKSAmJiBleGNsdWRlLmluZGV4T2YoaykgPT09IC0xKSB0YXJnZXRba10gPSBvYmpba107IHJldHVybiB0YXJnZXQ7IH1cbnZhciBBc3BlY3RJbWFnZSA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHJlZiQxLCByZWYpIHtcbiAgdmFyIHJhdGlvID0gcmVmJDEucmF0aW87XG4gIHZhciByZXN0ID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXMkYyggcmVmJDEsIFtcInJhdGlvXCJdICk7XG4gIHZhciBwcm9wcyA9IHJlc3Q7XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoIEFzcGVjdFJhdGlvLCB7IHJhdGlvOiByYXRpbyB9LFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoIEltYWdlLCBPYmplY3QuYXNzaWduKHt9LCB7IHJlZjogcmVmIH0sIHByb3BzLCB7IF9fY3NzOiB7XG4gICAgb2JqZWN0Rml0OiAnY292ZXInXG4gIH0gfSkpXG4gICk7XG59KTtcblxudmFyIENvbnRhaW5lciA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHsgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoIEJveCwgT2JqZWN0LmFzc2lnbih7fSwgeyByZWY6IHJlZiwgdmFyaWFudDogXCJjb250YWluZXJcIiB9LCBwcm9wcywgeyBfX3RoZW1lS2V5OiBcImxheW91dFwiLCBfX2Nzczoge1xuICB3aWR0aDogJzEwMCUnLFxuICBtYXhXaWR0aDogJ2NvbnRhaW5lcicsXG4gIG14OiAnYXV0bydcbn0gfSkpOyB9KTtcblxudmFyIE5hdkxpbmsgPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7IHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCBMaW5rLCBPYmplY3QuYXNzaWduKHt9LCB7IHJlZjogcmVmLCB2YXJpYW50OiBcIm5hdlwiIH0sIHByb3BzLCB7IF9fY3NzOiB7XG4gIGNvbG9yOiAnaW5oZXJpdCcsXG4gIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICcmOmhvdmVyLCAmOmZvY3VzLCAmLmFjdGl2ZSc6IHtcbiAgICBjb2xvcjogJ3ByaW1hcnknXG4gIH1cbn0gfSkpOyB9KTtcblxudmFyIE1lc3NhZ2UgPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7IHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCBCb3gsIE9iamVjdC5hc3NpZ24oe30sIHsgcmVmOiByZWYgfSwgcHJvcHMsIHsgX190aGVtZUtleTogXCJtZXNzYWdlc1wiLCBfX2Nzczoge1xuICBwYWRkaW5nOiAzLFxuICBwYWRkaW5nTGVmdDogZnVuY3Rpb24gKHQpIHsgcmV0dXJuIHQuc3BhY2VbM10gLSB0LnNwYWNlWzFdOyB9LFxuICBib3JkZXJMZWZ0V2lkdGg6IGZ1bmN0aW9uICh0KSB7IHJldHVybiB0LnNwYWNlWzFdOyB9LFxuICBib3JkZXJMZWZ0U3R5bGU6ICdzb2xpZCcsXG4gIGJvcmRlckxlZnRDb2xvcjogJ3ByaW1hcnknLFxuICBib3JkZXJSYWRpdXM6IDQsXG4gIGJnOiAnaGlnaGxpZ2h0J1xufSB9KSk7IH0pO1xuXG52YXIgTWVudUljb24gPSBmdW5jdGlvbiAocmVmKSB7XG4gIHZhciBzaXplID0gcmVmLnNpemU7IGlmICggc2l6ZSA9PT0gdm9pZCAwICkgc2l6ZSA9IDI0O1xuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCBCb3gsIHsgYXM6IFwic3ZnXCIsIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIHdpZHRoOiBzaXplLCBoZWlnaHQ6IHNpemUsIGZpbGw6IFwiY3VycmVudGNvbG9yXCIsIHZpZXdCb3g6IFwiMCAwIDI0IDI0XCIsIHN4OiB7XG4gIGRpc3BsYXk6ICdibG9jaycsXG4gIG1hcmdpbjogMFxufSB9LFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoICdwYXRoJywgeyBkOiBcIk0zIDE4aDE4di0ySDN2MnptMC01aDE4di0ySDN2MnptMC03djJoMThWNkgzelwiIH0pXG4gICk7XG59O1xudmFyIE1lbnVCdXR0b24gPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7IHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCBJY29uQnV0dG9uLCBPYmplY3QuYXNzaWduKHt9LCB7IHJlZjogcmVmLCB0aXRsZTogXCJNZW51XCIsICdhcmlhLWxhYmVsJzogXCJUb2dnbGUgTWVudVwiLCB2YXJpYW50OiBcIm1lbnVcIiB9LCBwcm9wcyksXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudCggTWVudUljb24sIG51bGwgKVxuICApOyB9KTtcblxuZXhwb3J0IHsgQm94LCBGbGV4LCBHcmlkLCBCdXR0b24sIExpbmssIFRleHQsIEhlYWRpbmcsIEltYWdlLCBDYXJkLCBMYWJlbCwgSW5wdXQsIFNlbGVjdCwgVGV4dGFyZWEsIFJhZGlvLCBDaGVja2JveCwgU2xpZGVyLCBGaWVsZCwgUHJvZ3Jlc3MsIERvbnV0LCBTcGlubmVyLCBBdmF0YXIsIEJhZGdlLCBDbG9zZSwgQWxlcnQsIERpdmlkZXIsIEVtYmVkLCBBc3BlY3RSYXRpbywgQXNwZWN0SW1hZ2UsIENvbnRhaW5lciwgTmF2TGluaywgTWVzc2FnZSwgSWNvbkJ1dHRvbiwgTWVudUJ1dHRvbiB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXNtLmpzLm1hcFxuIiwiaW1wb3J0IHsganN4LCBUaGVtZUNvbnRleHQgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0B0aGVtZS11aS9jc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBkZWVwbWVyZ2UgZnJvbSAnZGVlcG1lcmdlJztcbmltcG9ydCBwYWNrYWdlSW5mbyBmcm9tICdAZW1vdGlvbi9jb3JlL3BhY2thZ2UuanNvbic7XG5cbnZhciBfX0VNT1RJT05fVkVSU0lPTl9fID0gcGFja2FnZUluZm8udmVyc2lvbjtcblxudmFyIGdldENTUyA9IGZ1bmN0aW9uIChwcm9wcykge1xuICBpZiAoIXByb3BzLnN4ICYmICFwcm9wcy5jc3MpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfVxuICByZXR1cm4gZnVuY3Rpb24gKHRoZW1lKSB7XG4gICAgdmFyIHN0eWxlcyA9IGNzcyhwcm9wcy5zeCkodGhlbWUpO1xuICAgIHZhciByYXcgPSB0eXBlb2YgcHJvcHMuY3NzID09PSAnZnVuY3Rpb24nID8gcHJvcHMuY3NzKHRoZW1lKSA6IHByb3BzLmNzcztcbiAgICByZXR1cm4gW3N0eWxlcywgcmF3XTtcbiAgfTtcbn07XG5cbnZhciBwYXJzZVByb3BzID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gIGlmICghcHJvcHMpIHsgcmV0dXJuIG51bGw7IH1cbiAgdmFyIG5leHQgPSB7fTtcblxuICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICBpZiAoa2V5ID09PSAnc3gnKSB7IGNvbnRpbnVlOyB9XG4gICAgbmV4dFtrZXldID0gcHJvcHNba2V5XTtcbiAgfVxuXG4gIHZhciBjc3MkJDEgPSBnZXRDU1MocHJvcHMpO1xuICBpZiAoY3NzJCQxKSB7IG5leHQuY3NzID0gY3NzJCQxOyB9XG4gIHJldHVybiBuZXh0O1xufTtcblxudmFyIGpzeCQxID0gZnVuY3Rpb24gKHR5cGUsIHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcbiAgd2hpbGUgKCBsZW4tLSA+IDAgKSBjaGlsZHJlblsgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiArIDIgXTtcblxuICByZXR1cm4ganN4LmFwcGx5KHVuZGVmaW5lZCwgW3R5cGUsIHBhcnNlUHJvcHMocHJvcHMpIF0uY29uY2F0KCBjaGlsZHJlbikpO1xufTtcbnZhciBDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7XG4gIF9fRU1PVElPTl9WRVJTSU9OX186IF9fRU1PVElPTl9WRVJTSU9OX18sXG4gIHRoZW1lOiBudWxsXG59KTtcbnZhciB1c2VUaGVtZVVJID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gUmVhY3QudXNlQ29udGV4dChDb250ZXh0KTsgfTtcbnZhciBjYW5Vc2VTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG52YXIgUkVBQ1RfRUxFTUVOVCA9IGNhblVzZVN5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcbnZhciBGT1JXQVJEX1JFRiA9IGNhblVzZVN5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhYzc7XG5cbnZhciBpc01lcmdlYWJsZU9iamVjdCA9IGZ1bmN0aW9uIChuKSB7XG4gIHJldHVybiAhIW4gJiYgdHlwZW9mIG4gPT09ICdvYmplY3QnICYmIG4uJCR0eXBlb2YgIT09IFJFQUNUX0VMRU1FTlQgJiYgbi4kJHR5cGVvZiAhPT0gRk9SV0FSRF9SRUY7XG59O1xuXG52YXIgYXJyYXlNZXJnZSA9IGZ1bmN0aW9uIChkZXN0aW5hdGlvbkFycmF5LCBzb3VyY2VBcnJheSwgb3B0aW9ucykgeyByZXR1cm4gc291cmNlQXJyYXk7IH07XG5cbnZhciBtZXJnZSA9IGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBkZWVwbWVyZ2UoYSwgYiwge1xuICBpc01lcmdlYWJsZU9iamVjdDogaXNNZXJnZWFibGVPYmplY3QsXG4gIGFycmF5TWVyZ2U6IGFycmF5TWVyZ2Vcbn0pOyB9O1xuXG5tZXJnZS5hbGwgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgcmV0dXJuIGRlZXBtZXJnZS5hbGwoYXJncywge1xuICBpc01lcmdlYWJsZU9iamVjdDogaXNNZXJnZWFibGVPYmplY3QsXG4gIGFycmF5TWVyZ2U6IGFycmF5TWVyZ2Vcbn0pO1xufTtcblxudmFyIEJhc2VQcm92aWRlciA9IGZ1bmN0aW9uIChyZWYpIHtcbiAgdmFyIGNvbnRleHQgPSByZWYuY29udGV4dDtcbiAgdmFyIGNoaWxkcmVuID0gcmVmLmNoaWxkcmVuO1xuXG4gIHJldHVybiBqc3gkMShUaGVtZUNvbnRleHQuUHJvdmlkZXIsIHtcbiAgdmFsdWU6IGNvbnRleHQudGhlbWVcbn0sIGpzeCQxKENvbnRleHQuUHJvdmlkZXIsIHtcbiAgdmFsdWU6IGNvbnRleHQsXG4gIGNoaWxkcmVuOiBjaGlsZHJlblxufSkpO1xufTtcblxudmFyIFRoZW1lUHJvdmlkZXIgPSBmdW5jdGlvbiAocmVmKSB7XG4gIHZhciB0aGVtZSA9IHJlZi50aGVtZTtcbiAgdmFyIGNoaWxkcmVuID0gcmVmLmNoaWxkcmVuO1xuXG4gIHZhciBvdXRlciA9IHVzZVRoZW1lVUkoKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChvdXRlci5fX0VNT1RJT05fVkVSU0lPTl9fICE9PSBfX0VNT1RJT05fVkVSU0lPTl9fKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ011bHRpcGxlIHZlcnNpb25zIG9mIEVtb3Rpb24gZGV0ZWN0ZWQsJywgJ2FuZCB0aGVtaW5nIG1pZ2h0IG5vdCB3b3JrIGFzIGV4cGVjdGVkLicsICdQbGVhc2UgZW5zdXJlIHRoZXJlIGlzIG9ubHkgb25lIGNvcHkgb2YgQGVtb3Rpb24vY29yZSBpbnN0YWxsZWQgaW4geW91ciBhcHBsaWNhdGlvbi4nKTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29udGV4dCA9IHR5cGVvZiB0aGVtZSA9PT0gJ2Z1bmN0aW9uJyA/IE9iamVjdC5hc3NpZ24oe30sIG91dGVyLFxuICAgIHt0aGVtZTogdGhlbWUob3V0ZXIudGhlbWUpfSkgOiBtZXJnZS5hbGwoe30sIG91dGVyLCB7XG4gICAgdGhlbWU6IHRoZW1lXG4gIH0pO1xuICByZXR1cm4ganN4JDEoQmFzZVByb3ZpZGVyLCB7XG4gICAgY29udGV4dDogY29udGV4dCxcbiAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgfSk7XG59O1xuXG5leHBvcnQgeyBqc3gkMSBhcyBqc3gsIENvbnRleHQsIHVzZVRoZW1lVUksIG1lcmdlLCBUaGVtZVByb3ZpZGVyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lc20uanMubWFwXG4iLCJ2YXIgZ2V0ID0gZnVuY3Rpb24gKG9iaiwga2V5LCBkZWYsIHAsIHVuZGVmKSB7XG4gIGtleSA9IGtleSAmJiBrZXkuc3BsaXQgPyBrZXkuc3BsaXQoJy4nKSA6IFtrZXldO1xuXG4gIGZvciAocCA9IDA7IHAgPCBrZXkubGVuZ3RoOyBwKyspIHtcbiAgICBvYmogPSBvYmogPyBvYmpba2V5W3BdXSA6IHVuZGVmO1xuICB9XG5cbiAgcmV0dXJuIG9iaiA9PT0gdW5kZWYgPyBkZWYgOiBvYmo7XG59O1xudmFyIGRlZmF1bHRCcmVha3BvaW50cyA9IFs0MCwgNTIsIDY0XS5tYXAoZnVuY3Rpb24gKG4pIHsgcmV0dXJuIG4gKyAnZW0nOyB9KTtcbnZhciBkZWZhdWx0VGhlbWUgPSB7XG4gIHNwYWNlOiBbMCwgNCwgOCwgMTYsIDMyLCA2NCwgMTI4LCAyNTYsIDUxMl0sXG4gIGZvbnRTaXplczogWzEyLCAxNCwgMTYsIDIwLCAyNCwgMzIsIDQ4LCA2NCwgNzJdXG59O1xudmFyIGFsaWFzZXMgPSB7XG4gIGJnOiAnYmFja2dyb3VuZENvbG9yJyxcbiAgbTogJ21hcmdpbicsXG4gIG10OiAnbWFyZ2luVG9wJyxcbiAgbXI6ICdtYXJnaW5SaWdodCcsXG4gIG1iOiAnbWFyZ2luQm90dG9tJyxcbiAgbWw6ICdtYXJnaW5MZWZ0JyxcbiAgbXg6ICdtYXJnaW5YJyxcbiAgbXk6ICdtYXJnaW5ZJyxcbiAgcDogJ3BhZGRpbmcnLFxuICBwdDogJ3BhZGRpbmdUb3AnLFxuICBwcjogJ3BhZGRpbmdSaWdodCcsXG4gIHBiOiAncGFkZGluZ0JvdHRvbScsXG4gIHBsOiAncGFkZGluZ0xlZnQnLFxuICBweDogJ3BhZGRpbmdYJyxcbiAgcHk6ICdwYWRkaW5nWSdcbn07XG52YXIgbXVsdGlwbGVzID0ge1xuICBtYXJnaW5YOiBbJ21hcmdpbkxlZnQnLCAnbWFyZ2luUmlnaHQnXSxcbiAgbWFyZ2luWTogWydtYXJnaW5Ub3AnLCAnbWFyZ2luQm90dG9tJ10sXG4gIHBhZGRpbmdYOiBbJ3BhZGRpbmdMZWZ0JywgJ3BhZGRpbmdSaWdodCddLFxuICBwYWRkaW5nWTogWydwYWRkaW5nVG9wJywgJ3BhZGRpbmdCb3R0b20nXSxcbiAgc2l6ZTogWyd3aWR0aCcsICdoZWlnaHQnXVxufTtcbnZhciBzY2FsZXMgPSB7XG4gIGNvbG9yOiAnY29sb3JzJyxcbiAgYmFja2dyb3VuZENvbG9yOiAnY29sb3JzJyxcbiAgYm9yZGVyQ29sb3I6ICdjb2xvcnMnLFxuICBjYXJldENvbG9yOiAnY29sb3JzJyxcbiAgY29sdW1uUnVsZUNvbG9yOiAnY29sb3JzJyxcbiAgbWFyZ2luOiAnc3BhY2UnLFxuICBtYXJnaW5Ub3A6ICdzcGFjZScsXG4gIG1hcmdpblJpZ2h0OiAnc3BhY2UnLFxuICBtYXJnaW5Cb3R0b206ICdzcGFjZScsXG4gIG1hcmdpbkxlZnQ6ICdzcGFjZScsXG4gIG1hcmdpblg6ICdzcGFjZScsXG4gIG1hcmdpblk6ICdzcGFjZScsXG4gIHBhZGRpbmc6ICdzcGFjZScsXG4gIHBhZGRpbmdUb3A6ICdzcGFjZScsXG4gIHBhZGRpbmdSaWdodDogJ3NwYWNlJyxcbiAgcGFkZGluZ0JvdHRvbTogJ3NwYWNlJyxcbiAgcGFkZGluZ0xlZnQ6ICdzcGFjZScsXG4gIHBhZGRpbmdYOiAnc3BhY2UnLFxuICBwYWRkaW5nWTogJ3NwYWNlJyxcbiAgdG9wOiAnc3BhY2UnLFxuICByaWdodDogJ3NwYWNlJyxcbiAgYm90dG9tOiAnc3BhY2UnLFxuICBsZWZ0OiAnc3BhY2UnLFxuICBncmlkR2FwOiAnc3BhY2UnLFxuICBncmlkQ29sdW1uR2FwOiAnc3BhY2UnLFxuICBncmlkUm93R2FwOiAnc3BhY2UnLFxuICBnYXA6ICdzcGFjZScsXG4gIGNvbHVtbkdhcDogJ3NwYWNlJyxcbiAgcm93R2FwOiAnc3BhY2UnLFxuICBmb250RmFtaWx5OiAnZm9udHMnLFxuICBmb250U2l6ZTogJ2ZvbnRTaXplcycsXG4gIGZvbnRXZWlnaHQ6ICdmb250V2VpZ2h0cycsXG4gIGxpbmVIZWlnaHQ6ICdsaW5lSGVpZ2h0cycsXG4gIGxldHRlclNwYWNpbmc6ICdsZXR0ZXJTcGFjaW5ncycsXG4gIGJvcmRlcjogJ2JvcmRlcnMnLFxuICBib3JkZXJUb3A6ICdib3JkZXJzJyxcbiAgYm9yZGVyUmlnaHQ6ICdib3JkZXJzJyxcbiAgYm9yZGVyQm90dG9tOiAnYm9yZGVycycsXG4gIGJvcmRlckxlZnQ6ICdib3JkZXJzJyxcbiAgYm9yZGVyV2lkdGg6ICdib3JkZXJXaWR0aHMnLFxuICBib3JkZXJTdHlsZTogJ2JvcmRlclN0eWxlcycsXG4gIGJvcmRlclJhZGl1czogJ3JhZGlpJyxcbiAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6ICdyYWRpaScsXG4gIGJvcmRlclRvcExlZnRSYWRpdXM6ICdyYWRpaScsXG4gIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiAncmFkaWknLFxuICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzOiAncmFkaWknLFxuICBib3JkZXJUb3BXaWR0aDogJ2JvcmRlcldpZHRocycsXG4gIGJvcmRlclRvcENvbG9yOiAnY29sb3JzJyxcbiAgYm9yZGVyVG9wU3R5bGU6ICdib3JkZXJTdHlsZXMnLFxuICBib3JkZXJCb3R0b21XaWR0aDogJ2JvcmRlcldpZHRocycsXG4gIGJvcmRlckJvdHRvbUNvbG9yOiAnY29sb3JzJyxcbiAgYm9yZGVyQm90dG9tU3R5bGU6ICdib3JkZXJTdHlsZXMnLFxuICBib3JkZXJMZWZ0V2lkdGg6ICdib3JkZXJXaWR0aHMnLFxuICBib3JkZXJMZWZ0Q29sb3I6ICdjb2xvcnMnLFxuICBib3JkZXJMZWZ0U3R5bGU6ICdib3JkZXJTdHlsZXMnLFxuICBib3JkZXJSaWdodFdpZHRoOiAnYm9yZGVyV2lkdGhzJyxcbiAgYm9yZGVyUmlnaHRDb2xvcjogJ2NvbG9ycycsXG4gIGJvcmRlclJpZ2h0U3R5bGU6ICdib3JkZXJTdHlsZXMnLFxuICBvdXRsaW5lQ29sb3I6ICdjb2xvcnMnLFxuICBib3hTaGFkb3c6ICdzaGFkb3dzJyxcbiAgdGV4dFNoYWRvdzogJ3NoYWRvd3MnLFxuICB6SW5kZXg6ICd6SW5kaWNlcycsXG4gIHdpZHRoOiAnc2l6ZXMnLFxuICBtaW5XaWR0aDogJ3NpemVzJyxcbiAgbWF4V2lkdGg6ICdzaXplcycsXG4gIGhlaWdodDogJ3NpemVzJyxcbiAgbWluSGVpZ2h0OiAnc2l6ZXMnLFxuICBtYXhIZWlnaHQ6ICdzaXplcycsXG4gIGZsZXhCYXNpczogJ3NpemVzJyxcbiAgc2l6ZTogJ3NpemVzJyxcbiAgLy8gc3ZnXG4gIGZpbGw6ICdjb2xvcnMnLFxuICBzdHJva2U6ICdjb2xvcnMnXG59O1xuXG52YXIgcG9zaXRpdmVPck5lZ2F0aXZlID0gZnVuY3Rpb24gKHNjYWxlLCB2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnbnVtYmVyJyB8fCB2YWx1ZSA+PSAwKSB7XG4gICAgcmV0dXJuIGdldChzY2FsZSwgdmFsdWUsIHZhbHVlKTtcbiAgfVxuXG4gIHZhciBhYnNvbHV0ZSA9IE1hdGguYWJzKHZhbHVlKTtcbiAgdmFyIG4gPSBnZXQoc2NhbGUsIGFic29sdXRlLCBhYnNvbHV0ZSk7XG4gIGlmICh0eXBlb2YgbiA9PT0gJ3N0cmluZycpIHsgcmV0dXJuICctJyArIG47IH1cbiAgcmV0dXJuIG4gKiAtMTtcbn07XG5cbnZhciB0cmFuc2Zvcm1zID0gWydtYXJnaW4nLCAnbWFyZ2luVG9wJywgJ21hcmdpblJpZ2h0JywgJ21hcmdpbkJvdHRvbScsICdtYXJnaW5MZWZ0JywgJ21hcmdpblgnLCAnbWFyZ2luWScsICd0b3AnLCAnYm90dG9tJywgJ2xlZnQnLCAncmlnaHQnXS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgY3Vycikge1xuICB2YXIgb2JqO1xuXG4gIHJldHVybiAoT2JqZWN0LmFzc2lnbih7fSwgYWNjLFxuICAoIG9iaiA9IHt9LCBvYmpbY3Vycl0gPSBwb3NpdGl2ZU9yTmVnYXRpdmUsIG9iaiApKSk7XG59LCB7fSk7XG5cbnZhciByZXNwb25zaXZlID0gZnVuY3Rpb24gKHN0eWxlcykgeyByZXR1cm4gZnVuY3Rpb24gKHRoZW1lKSB7XG4gIHZhciBuZXh0ID0ge307XG4gIHZhciBicmVha3BvaW50cyA9IGdldCh0aGVtZSwgJ2JyZWFrcG9pbnRzJywgZGVmYXVsdEJyZWFrcG9pbnRzKTtcbiAgdmFyIG1lZGlhUXVlcmllcyA9IFtudWxsIF0uY29uY2F0KCBicmVha3BvaW50cy5tYXAoZnVuY3Rpb24gKG4pIHsgcmV0dXJuIChcIkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IFwiICsgbiArIFwiKVwiKTsgfSkpO1xuXG4gIGZvciAodmFyIGtleSBpbiBzdHlsZXMpIHtcbiAgICB2YXIgdmFsdWUgPSB0eXBlb2Ygc3R5bGVzW2tleV0gPT09ICdmdW5jdGlvbicgPyBzdHlsZXNba2V5XSh0aGVtZSkgOiBzdHlsZXNba2V5XTtcbiAgICBpZiAodmFsdWUgPT0gbnVsbCkgeyBjb250aW51ZTsgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgbmV4dFtrZXldID0gdmFsdWU7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlLnNsaWNlKDAsIG1lZGlhUXVlcmllcy5sZW5ndGgpLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgbWVkaWEgPSBtZWRpYVF1ZXJpZXNbaV07XG5cbiAgICAgIGlmICghbWVkaWEpIHtcbiAgICAgICAgbmV4dFtrZXldID0gdmFsdWVbaV07XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBuZXh0W21lZGlhXSA9IG5leHRbbWVkaWFdIHx8IHt9O1xuICAgICAgaWYgKHZhbHVlW2ldID09IG51bGwpIHsgY29udGludWU7IH1cbiAgICAgIG5leHRbbWVkaWFdW2tleV0gPSB2YWx1ZVtpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV4dDtcbn07IH07XG5cbnZhciBjc3MgPSBmdW5jdGlvbiAoYXJncykgeyByZXR1cm4gZnVuY3Rpb24gKHByb3BzKSB7XG4gIGlmICggcHJvcHMgPT09IHZvaWQgMCApIHByb3BzID0ge307XG5cbiAgdmFyIHRoZW1lID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdFRoZW1lLFxuICAgIChwcm9wcy50aGVtZSB8fCBwcm9wcykpO1xuICB2YXIgcmVzdWx0ID0ge307XG4gIHZhciBvYmogPSB0eXBlb2YgYXJncyA9PT0gJ2Z1bmN0aW9uJyA/IGFyZ3ModGhlbWUpIDogYXJncztcbiAgdmFyIHN0eWxlcyA9IHJlc3BvbnNpdmUob2JqKSh0aGVtZSk7XG5cbiAgZm9yICh2YXIga2V5IGluIHN0eWxlcykge1xuICAgIHZhciB4ID0gc3R5bGVzW2tleV07XG4gICAgdmFyIHZhbCA9IHR5cGVvZiB4ID09PSAnZnVuY3Rpb24nID8geCh0aGVtZSkgOiB4O1xuXG4gICAgaWYgKGtleSA9PT0gJ3ZhcmlhbnQnKSB7XG4gICAgICB2YXIgdmFyaWFudCA9IGNzcyhnZXQodGhlbWUsIHZhbCkpKHRoZW1lKTtcbiAgICAgIHJlc3VsdCA9IE9iamVjdC5hc3NpZ24oe30sIHJlc3VsdCxcbiAgICAgICAgdmFyaWFudCk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAodmFsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHRba2V5XSA9IGNzcyh2YWwpKHRoZW1lKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHZhciBwcm9wID0gZ2V0KGFsaWFzZXMsIGtleSwga2V5KTtcbiAgICB2YXIgc2NhbGVOYW1lID0gZ2V0KHNjYWxlcywgcHJvcCk7XG4gICAgdmFyIHNjYWxlID0gZ2V0KHRoZW1lLCBzY2FsZU5hbWUsIGdldCh0aGVtZSwgcHJvcCwge30pKTtcbiAgICB2YXIgdHJhbnNmb3JtID0gZ2V0KHRyYW5zZm9ybXMsIHByb3AsIGdldCk7XG4gICAgdmFyIHZhbHVlID0gdHJhbnNmb3JtKHNjYWxlLCB2YWwsIHZhbCk7XG5cbiAgICBpZiAobXVsdGlwbGVzW3Byb3BdKSB7XG4gICAgICB2YXIgZGlycyA9IG11bHRpcGxlc1twcm9wXTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdFtkaXJzW2ldXSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRbcHJvcF0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTsgfTtcblxuZXhwb3J0IHsgZ2V0LCBjc3MgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzbS5qcy5tYXBcbiIsImltcG9ydCB7IGpzeCB9IGZyb20gJ0B0aGVtZS11aS9jb3JlJztcbmltcG9ydCB7IGNzcywgZ2V0IH0gZnJvbSAnQHRoZW1lLXVpL2Nzcyc7XG5pbXBvcnQgJ3JlYWN0JztcbmltcG9ydCAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBNRFhQcm92aWRlciwgdXNlTURYQ29tcG9uZW50cyB9IGZyb20gJ0BtZHgtanMvcmVhY3QnO1xuXG52YXIgdGFncyA9IFsncCcsICdiJywgJ2knLCAnYScsICdoMScsICdoMicsICdoMycsICdoNCcsICdoNScsICdoNicsICdpbWcnLCAncHJlJywgJ2NvZGUnLCAnb2wnLCAndWwnLCAnbGknLCAnYmxvY2txdW90ZScsICdocicsICdlbScsICd0YWJsZScsICd0cicsICd0aCcsICd0ZCcsICdlbScsICdzdHJvbmcnLCAnZGVsJywgLy8gbWR4XG4naW5saW5lQ29kZScsICd0aGVtYXRpY0JyZWFrJywgLy8gb3RoZXJcbidkaXYnLCAvLyB0aGVtZS11aVxuJ3Jvb3QnXTtcbnZhciBhbGlhc2VzID0ge1xuICBpbmxpbmVDb2RlOiAnY29kZScsXG4gIHRoZW1hdGljQnJlYWs6ICdocicsXG4gIHJvb3Q6ICdkaXYnXG59O1xuXG52YXIgYWxpYXMgPSBmdW5jdGlvbiAobikgeyByZXR1cm4gYWxpYXNlc1tuXSB8fCBuOyB9O1xuXG52YXIgdGhlbWVkID0gZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gZnVuY3Rpb24gKHByb3BzKSB7IHJldHVybiBjc3MoZ2V0KHByb3BzLnRoZW1lLCAoXCJzdHlsZXMuXCIgKyBrZXkpKSkocHJvcHMudGhlbWUpOyB9OyB9O1xudmFyIFN0eWxlZCA9IHN0eWxlZCgnZGl2JykodGhlbWVkKCdkaXYnKSk7XG52YXIgY29tcG9uZW50cyA9IHt9O1xudGFncy5mb3JFYWNoKGZ1bmN0aW9uICh0YWcpIHtcbiAgY29tcG9uZW50c1t0YWddID0gc3R5bGVkKGFsaWFzKHRhZykpKHRoZW1lZCh0YWcpKTtcbiAgU3R5bGVkW3RhZ10gPSBjb21wb25lbnRzW3RhZ107XG59KTtcblxudmFyIGNyZWF0ZUNvbXBvbmVudHMgPSBmdW5jdGlvbiAoY29tcHMpIHtcbiAgdmFyIG5leHQgPSBPYmplY3QuYXNzaWduKHt9LCBjb21wb25lbnRzKTtcbiAgT2JqZWN0LmtleXMoY29tcHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIG5leHRba2V5XSA9IHN0eWxlZChjb21wc1trZXldKSh0aGVtZWQoa2V5KSk7XG4gIH0pO1xuICByZXR1cm4gbmV4dDtcbn07XG5cbnZhciBNRFhQcm92aWRlciQxID0gZnVuY3Rpb24gKHJlZikge1xuICB2YXIgY29tcG9uZW50cyA9IHJlZi5jb21wb25lbnRzO1xuICB2YXIgY2hpbGRyZW4gPSByZWYuY2hpbGRyZW47XG5cbiAgdmFyIG91dGVyID0gdXNlTURYQ29tcG9uZW50cygpO1xuICByZXR1cm4ganN4KE1EWFByb3ZpZGVyLCB7XG4gICAgY29tcG9uZW50czogY3JlYXRlQ29tcG9uZW50cyhPYmplY3QuYXNzaWduKHt9LCBvdXRlcixcbiAgICAgIGNvbXBvbmVudHMpKSxcbiAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgfSk7XG59O1xuXG5leHBvcnQgeyB0aGVtZWQsIFN0eWxlZCwgY29tcG9uZW50cywgTURYUHJvdmlkZXIkMSBhcyBNRFhQcm92aWRlciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXNtLmpzLm1hcFxuIiwiaW1wb3J0IHsganN4LCB1c2VUaGVtZVVJLCBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQHRoZW1lLXVpL2NvcmUnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQHRoZW1lLXVpL2Nzcyc7XG5pbXBvcnQgeyBDb2xvck1vZGVQcm92aWRlciB9IGZyb20gJ0B0aGVtZS11aS9jb2xvci1tb2Rlcyc7XG5pbXBvcnQgeyBNRFhQcm92aWRlciB9IGZyb20gJ0B0aGVtZS11aS9tZHgnO1xuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5cbnZhciBCb2R5U3R5bGVzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4ganN4KEdsb2JhbCwge1xuICBzdHlsZXM6IGZ1bmN0aW9uICh0aGVtZSkge1xuICAgIGlmICh0aGVtZS51c2VCb2R5U3R5bGVzID09PSBmYWxzZSB8fCB0aGVtZS5zdHlsZXMgJiYgIXRoZW1lLnN0eWxlcy5yb290KSB7IHJldHVybiBmYWxzZTsgfVxuICAgIHZhciBib3hTaXppbmcgPSB0aGVtZS51c2VCb3JkZXJCb3ggPT09IGZhbHNlID8gbnVsbCA6ICdib3JkZXItYm94JztcbiAgICByZXR1cm4gY3NzKHtcbiAgICAgICcqJzoge1xuICAgICAgICBib3hTaXppbmc6IGJveFNpemluZ1xuICAgICAgfSxcbiAgICAgIGJvZHk6IHtcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICB2YXJpYW50OiAnc3R5bGVzLnJvb3QnXG4gICAgICB9XG4gICAgfSkodGhlbWUpO1xuICB9XG59KTsgfTtcblxudmFyIFRoZW1lUHJvdmlkZXIkMSA9IGZ1bmN0aW9uIChyZWYpIHtcbiAgdmFyIHRoZW1lID0gcmVmLnRoZW1lO1xuICB2YXIgY29tcG9uZW50cyA9IHJlZi5jb21wb25lbnRzO1xuICB2YXIgY2hpbGRyZW4gPSByZWYuY2hpbGRyZW47XG5cbiAgdmFyIG91dGVyID0gdXNlVGhlbWVVSSgpO1xuXG4gIGlmICh0eXBlb2Ygb3V0ZXIuc2V0Q29sb3JNb2RlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGpzeChUaGVtZVByb3ZpZGVyLCB7XG4gICAgICB0aGVtZTogdGhlbWVcbiAgICB9LCBqc3goTURYUHJvdmlkZXIsIHtcbiAgICAgIGNvbXBvbmVudHM6IGNvbXBvbmVudHMsXG4gICAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgICB9KSk7XG4gIH1cblxuICByZXR1cm4ganN4KFRoZW1lUHJvdmlkZXIsIHtcbiAgICB0aGVtZTogdGhlbWVcbiAgfSwganN4KENvbG9yTW9kZVByb3ZpZGVyLCBudWxsLCBqc3goQm9keVN0eWxlcyksIGpzeChNRFhQcm92aWRlciwge1xuICAgIGNvbXBvbmVudHM6IGNvbXBvbmVudHMsXG4gICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gIH0pKSk7XG59O1xuXG5leHBvcnQgeyBUaGVtZVByb3ZpZGVyJDEgYXMgVGhlbWVQcm92aWRlciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXNtLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNNZXJnZWFibGVPYmplY3QgPSBmdW5jdGlvbiBpc01lcmdlYWJsZU9iamVjdCh2YWx1ZSkge1xuXHRyZXR1cm4gaXNOb25OdWxsT2JqZWN0KHZhbHVlKVxuXHRcdCYmICFpc1NwZWNpYWwodmFsdWUpXG59O1xuXG5mdW5jdGlvbiBpc05vbk51bGxPYmplY3QodmFsdWUpIHtcblx0cmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0J1xufVxuXG5mdW5jdGlvbiBpc1NwZWNpYWwodmFsdWUpIHtcblx0dmFyIHN0cmluZ1ZhbHVlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKTtcblxuXHRyZXR1cm4gc3RyaW5nVmFsdWUgPT09ICdbb2JqZWN0IFJlZ0V4cF0nXG5cdFx0fHwgc3RyaW5nVmFsdWUgPT09ICdbb2JqZWN0IERhdGVdJ1xuXHRcdHx8IGlzUmVhY3RFbGVtZW50KHZhbHVlKVxufVxuXG4vLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvYjVhYzk2M2ZiNzkxZDEyOThlN2YzOTYyMzYzODNiYzk1NWY5MTZjMS9zcmMvaXNvbW9ycGhpYy9jbGFzc2ljL2VsZW1lbnQvUmVhY3RFbGVtZW50LmpzI0wyMS1MMjVcbnZhciBjYW5Vc2VTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gY2FuVXNlU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xuXG5mdW5jdGlvbiBpc1JlYWN0RWxlbWVudCh2YWx1ZSkge1xuXHRyZXR1cm4gdmFsdWUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRVxufVxuXG5mdW5jdGlvbiBlbXB0eVRhcmdldCh2YWwpIHtcblx0cmV0dXJuIEFycmF5LmlzQXJyYXkodmFsKSA/IFtdIDoge31cbn1cblxuZnVuY3Rpb24gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQodmFsdWUsIG9wdGlvbnMpIHtcblx0cmV0dXJuIChvcHRpb25zLmNsb25lICE9PSBmYWxzZSAmJiBvcHRpb25zLmlzTWVyZ2VhYmxlT2JqZWN0KHZhbHVlKSlcblx0XHQ/IGRlZXBtZXJnZShlbXB0eVRhcmdldCh2YWx1ZSksIHZhbHVlLCBvcHRpb25zKVxuXHRcdDogdmFsdWVcbn1cblxuZnVuY3Rpb24gZGVmYXVsdEFycmF5TWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnMpIHtcblx0cmV0dXJuIHRhcmdldC5jb25jYXQoc291cmNlKS5tYXAoZnVuY3Rpb24oZWxlbWVudCkge1xuXHRcdHJldHVybiBjbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZChlbGVtZW50LCBvcHRpb25zKVxuXHR9KVxufVxuXG5mdW5jdGlvbiBnZXRNZXJnZUZ1bmN0aW9uKGtleSwgb3B0aW9ucykge1xuXHRpZiAoIW9wdGlvbnMuY3VzdG9tTWVyZ2UpIHtcblx0XHRyZXR1cm4gZGVlcG1lcmdlXG5cdH1cblx0dmFyIGN1c3RvbU1lcmdlID0gb3B0aW9ucy5jdXN0b21NZXJnZShrZXkpO1xuXHRyZXR1cm4gdHlwZW9mIGN1c3RvbU1lcmdlID09PSAnZnVuY3Rpb24nID8gY3VzdG9tTWVyZ2UgOiBkZWVwbWVyZ2Vcbn1cblxuZnVuY3Rpb24gZ2V0RW51bWVyYWJsZU93blByb3BlcnR5U3ltYm9scyh0YXJnZXQpIHtcblx0cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHNcblx0XHQ/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModGFyZ2V0KS5maWx0ZXIoZnVuY3Rpb24oc3ltYm9sKSB7XG5cdFx0XHRyZXR1cm4gT2JqZWN0LnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodGFyZ2V0LCBzeW1ib2wpXG5cdFx0fSlcblx0XHQ6IFtdXG59XG5cbmZ1bmN0aW9uIGdldEtleXModGFyZ2V0KSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyh0YXJnZXQpLmNvbmNhdChnZXRFbnVtZXJhYmxlT3duUHJvcGVydHlTeW1ib2xzKHRhcmdldCkpXG59XG5cbmZ1bmN0aW9uIHByb3BlcnR5SXNPbk9iamVjdChvYmplY3QsIHByb3BlcnR5KSB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHByb3BlcnR5IGluIG9iamVjdFxuXHR9IGNhdGNoKF8pIHtcblx0XHRyZXR1cm4gZmFsc2Vcblx0fVxufVxuXG4vLyBQcm90ZWN0cyBmcm9tIHByb3RvdHlwZSBwb2lzb25pbmcgYW5kIHVuZXhwZWN0ZWQgbWVyZ2luZyB1cCB0aGUgcHJvdG90eXBlIGNoYWluLlxuZnVuY3Rpb24gcHJvcGVydHlJc1Vuc2FmZSh0YXJnZXQsIGtleSkge1xuXHRyZXR1cm4gcHJvcGVydHlJc09uT2JqZWN0KHRhcmdldCwga2V5KSAvLyBQcm9wZXJ0aWVzIGFyZSBzYWZlIHRvIG1lcmdlIGlmIHRoZXkgZG9uJ3QgZXhpc3QgaW4gdGhlIHRhcmdldCB5ZXQsXG5cdFx0JiYgIShPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbCh0YXJnZXQsIGtleSkgLy8gdW5zYWZlIGlmIHRoZXkgZXhpc3QgdXAgdGhlIHByb3RvdHlwZSBjaGFpbixcblx0XHRcdCYmIE9iamVjdC5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHRhcmdldCwga2V5KSkgLy8gYW5kIGFsc28gdW5zYWZlIGlmIHRoZXkncmUgbm9uZW51bWVyYWJsZS5cbn1cblxuZnVuY3Rpb24gbWVyZ2VPYmplY3QodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnMpIHtcblx0dmFyIGRlc3RpbmF0aW9uID0ge307XG5cdGlmIChvcHRpb25zLmlzTWVyZ2VhYmxlT2JqZWN0KHRhcmdldCkpIHtcblx0XHRnZXRLZXlzKHRhcmdldCkuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcblx0XHRcdGRlc3RpbmF0aW9uW2tleV0gPSBjbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZCh0YXJnZXRba2V5XSwgb3B0aW9ucyk7XG5cdFx0fSk7XG5cdH1cblx0Z2V0S2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG5cdFx0aWYgKHByb3BlcnR5SXNVbnNhZmUodGFyZ2V0LCBrZXkpKSB7XG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cblx0XHRpZiAocHJvcGVydHlJc09uT2JqZWN0KHRhcmdldCwga2V5KSAmJiBvcHRpb25zLmlzTWVyZ2VhYmxlT2JqZWN0KHNvdXJjZVtrZXldKSkge1xuXHRcdFx0ZGVzdGluYXRpb25ba2V5XSA9IGdldE1lcmdlRnVuY3Rpb24oa2V5LCBvcHRpb25zKSh0YXJnZXRba2V5XSwgc291cmNlW2tleV0sIG9wdGlvbnMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkZXN0aW5hdGlvbltrZXldID0gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQoc291cmNlW2tleV0sIG9wdGlvbnMpO1xuXHRcdH1cblx0fSk7XG5cdHJldHVybiBkZXN0aW5hdGlvblxufVxuXG5mdW5jdGlvbiBkZWVwbWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnMpIHtcblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdG9wdGlvbnMuYXJyYXlNZXJnZSA9IG9wdGlvbnMuYXJyYXlNZXJnZSB8fCBkZWZhdWx0QXJyYXlNZXJnZTtcblx0b3B0aW9ucy5pc01lcmdlYWJsZU9iamVjdCA9IG9wdGlvbnMuaXNNZXJnZWFibGVPYmplY3QgfHwgaXNNZXJnZWFibGVPYmplY3Q7XG5cdC8vIGNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkIGlzIGFkZGVkIHRvIGBvcHRpb25zYCBzbyB0aGF0IGN1c3RvbSBhcnJheU1lcmdlKClcblx0Ly8gaW1wbGVtZW50YXRpb25zIGNhbiB1c2UgaXQuIFRoZSBjYWxsZXIgbWF5IG5vdCByZXBsYWNlIGl0LlxuXHRvcHRpb25zLmNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkID0gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQ7XG5cblx0dmFyIHNvdXJjZUlzQXJyYXkgPSBBcnJheS5pc0FycmF5KHNvdXJjZSk7XG5cdHZhciB0YXJnZXRJc0FycmF5ID0gQXJyYXkuaXNBcnJheSh0YXJnZXQpO1xuXHR2YXIgc291cmNlQW5kVGFyZ2V0VHlwZXNNYXRjaCA9IHNvdXJjZUlzQXJyYXkgPT09IHRhcmdldElzQXJyYXk7XG5cblx0aWYgKCFzb3VyY2VBbmRUYXJnZXRUeXBlc01hdGNoKSB7XG5cdFx0cmV0dXJuIGNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkKHNvdXJjZSwgb3B0aW9ucylcblx0fSBlbHNlIGlmIChzb3VyY2VJc0FycmF5KSB7XG5cdFx0cmV0dXJuIG9wdGlvbnMuYXJyYXlNZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucylcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gbWVyZ2VPYmplY3QodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnMpXG5cdH1cbn1cblxuZGVlcG1lcmdlLmFsbCA9IGZ1bmN0aW9uIGRlZXBtZXJnZUFsbChhcnJheSwgb3B0aW9ucykge1xuXHRpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdmaXJzdCBhcmd1bWVudCBzaG91bGQgYmUgYW4gYXJyYXknKVxuXHR9XG5cblx0cmV0dXJuIGFycmF5LnJlZHVjZShmdW5jdGlvbihwcmV2LCBuZXh0KSB7XG5cdFx0cmV0dXJuIGRlZXBtZXJnZShwcmV2LCBuZXh0LCBvcHRpb25zKVxuXHR9LCB7fSlcbn07XG5cbnZhciBkZWVwbWVyZ2VfMSA9IGRlZXBtZXJnZTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWVwbWVyZ2VfMTtcbiIsImltcG9ydCB7IGNyZWF0ZVN0eWxlRnVuY3Rpb24sIGNyZWF0ZVBhcnNlciB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL2NvcmUnOyAvLyB2NCBhcGkgc2hpbXNcblxuaW1wb3J0IGxheW91dCBmcm9tICdAc3R5bGVkLXN5c3RlbS9sYXlvdXQnO1xuaW1wb3J0IGNvbG9yIGZyb20gJ0BzdHlsZWQtc3lzdGVtL2NvbG9yJztcbmltcG9ydCB0eXBvZ3JhcGh5IGZyb20gJ0BzdHlsZWQtc3lzdGVtL3R5cG9ncmFwaHknO1xuaW1wb3J0IGZsZXhib3ggZnJvbSAnQHN0eWxlZC1zeXN0ZW0vZmxleGJveCc7XG5pbXBvcnQgZ3JpZCBmcm9tICdAc3R5bGVkLXN5c3RlbS9ncmlkJztcbmltcG9ydCBib3JkZXIgZnJvbSAnQHN0eWxlZC1zeXN0ZW0vYm9yZGVyJztcbmltcG9ydCBiYWNrZ3JvdW5kIGZyb20gJ0BzdHlsZWQtc3lzdGVtL2JhY2tncm91bmQnO1xuaW1wb3J0IHBvc2l0aW9uIGZyb20gJ0BzdHlsZWQtc3lzdGVtL3Bvc2l0aW9uJztcbmV4cG9ydCB7IGdldCwgY3JlYXRlUGFyc2VyLCBjcmVhdGVTdHlsZUZ1bmN0aW9uLCBjb21wb3NlLCBzeXN0ZW0gfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9jb3JlJztcbmV4cG9ydCB7IG1hcmdpbiwgcGFkZGluZywgc3BhY2UgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9zcGFjZSc7XG5leHBvcnQgeyBjb2xvciB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL2NvbG9yJztcbmV4cG9ydCB7IGxheW91dCB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL2xheW91dCc7XG5leHBvcnQgeyB0eXBvZ3JhcGh5IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vdHlwb2dyYXBoeSc7XG5leHBvcnQgeyBmbGV4Ym94IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vZmxleGJveCc7XG5leHBvcnQgeyBib3JkZXIgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9ib3JkZXInO1xuZXhwb3J0IHsgYmFja2dyb3VuZCB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL2JhY2tncm91bmQnO1xuZXhwb3J0IHsgcG9zaXRpb24gfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9wb3NpdGlvbic7XG5leHBvcnQgeyBncmlkIH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vZ3JpZCc7XG5leHBvcnQgeyBzaGFkb3cgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9zaGFkb3cnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBib3hTaGFkb3csIGRlZmF1bHQgYXMgdGV4dFNoYWRvdyB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL3NoYWRvdyc7XG5leHBvcnQgeyB2YXJpYW50LCBidXR0b25TdHlsZSwgdGV4dFN0eWxlLCBjb2xvclN0eWxlIH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vdmFyaWFudCc7XG52YXIgd2lkdGggPSBsYXlvdXQud2lkdGgsXG4gICAgaGVpZ2h0ID0gbGF5b3V0LmhlaWdodCxcbiAgICBtaW5XaWR0aCA9IGxheW91dC5taW5XaWR0aCxcbiAgICBtaW5IZWlnaHQgPSBsYXlvdXQubWluSGVpZ2h0LFxuICAgIG1heFdpZHRoID0gbGF5b3V0Lm1heFdpZHRoLFxuICAgIG1heEhlaWdodCA9IGxheW91dC5tYXhIZWlnaHQsXG4gICAgc2l6ZSA9IGxheW91dC5zaXplLFxuICAgIHZlcnRpY2FsQWxpZ24gPSBsYXlvdXQudmVydGljYWxBbGlnbixcbiAgICBkaXNwbGF5ID0gbGF5b3V0LmRpc3BsYXksXG4gICAgb3ZlcmZsb3cgPSBsYXlvdXQub3ZlcmZsb3csXG4gICAgb3ZlcmZsb3dYID0gbGF5b3V0Lm92ZXJmbG93WCxcbiAgICBvdmVyZmxvd1kgPSBsYXlvdXQub3ZlcmZsb3dZO1xudmFyIG9wYWNpdHkgPSBjb2xvci5vcGFjaXR5O1xudmFyIGZvbnRTaXplID0gdHlwb2dyYXBoeS5mb250U2l6ZSxcbiAgICBmb250RmFtaWx5ID0gdHlwb2dyYXBoeS5mb250RmFtaWx5LFxuICAgIGZvbnRXZWlnaHQgPSB0eXBvZ3JhcGh5LmZvbnRXZWlnaHQsXG4gICAgbGluZUhlaWdodCA9IHR5cG9ncmFwaHkubGluZUhlaWdodCxcbiAgICB0ZXh0QWxpZ24gPSB0eXBvZ3JhcGh5LnRleHRBbGlnbixcbiAgICBmb250U3R5bGUgPSB0eXBvZ3JhcGh5LmZvbnRTdHlsZSxcbiAgICBsZXR0ZXJTcGFjaW5nID0gdHlwb2dyYXBoeS5sZXR0ZXJTcGFjaW5nO1xudmFyIGFsaWduSXRlbXMgPSBmbGV4Ym94LmFsaWduSXRlbXMsXG4gICAgYWxpZ25Db250ZW50ID0gZmxleGJveC5hbGlnbkNvbnRlbnQsXG4gICAganVzdGlmeUl0ZW1zID0gZmxleGJveC5qdXN0aWZ5SXRlbXMsXG4gICAganVzdGlmeUNvbnRlbnQgPSBmbGV4Ym94Lmp1c3RpZnlDb250ZW50LFxuICAgIGZsZXhXcmFwID0gZmxleGJveC5mbGV4V3JhcCxcbiAgICBmbGV4RGlyZWN0aW9uID0gZmxleGJveC5mbGV4RGlyZWN0aW9uLFxuICAgIGZsZXggPSBmbGV4Ym94LmZsZXgsXG4gICAgZmxleEdyb3cgPSBmbGV4Ym94LmZsZXhHcm93LFxuICAgIGZsZXhTaHJpbmsgPSBmbGV4Ym94LmZsZXhTaHJpbmssXG4gICAgZmxleEJhc2lzID0gZmxleGJveC5mbGV4QmFzaXMsXG4gICAganVzdGlmeVNlbGYgPSBmbGV4Ym94Lmp1c3RpZnlTZWxmLFxuICAgIGFsaWduU2VsZiA9IGZsZXhib3guYWxpZ25TZWxmLFxuICAgIG9yZGVyID0gZmxleGJveC5vcmRlcjtcbnZhciBncmlkR2FwID0gZ3JpZC5ncmlkR2FwLFxuICAgIGdyaWRDb2x1bW5HYXAgPSBncmlkLmdyaWRDb2x1bW5HYXAsXG4gICAgZ3JpZFJvd0dhcCA9IGdyaWQuZ3JpZFJvd0dhcCxcbiAgICBncmlkQ29sdW1uID0gZ3JpZC5ncmlkQ29sdW1uLFxuICAgIGdyaWRSb3cgPSBncmlkLmdyaWRSb3csXG4gICAgZ3JpZEF1dG9GbG93ID0gZ3JpZC5ncmlkQXV0b0Zsb3csXG4gICAgZ3JpZEF1dG9Db2x1bW5zID0gZ3JpZC5ncmlkQXV0b0NvbHVtbnMsXG4gICAgZ3JpZEF1dG9Sb3dzID0gZ3JpZC5ncmlkQXV0b1Jvd3MsXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IGdyaWQuZ3JpZFRlbXBsYXRlQ29sdW1ucyxcbiAgICBncmlkVGVtcGxhdGVSb3dzID0gZ3JpZC5ncmlkVGVtcGxhdGVSb3dzLFxuICAgIGdyaWRUZW1wbGF0ZUFyZWFzID0gZ3JpZC5ncmlkVGVtcGxhdGVBcmVhcyxcbiAgICBncmlkQXJlYSA9IGdyaWQuZ3JpZEFyZWE7XG52YXIgYm9yZGVyV2lkdGggPSBib3JkZXIuYm9yZGVyV2lkdGgsXG4gICAgYm9yZGVyU3R5bGUgPSBib3JkZXIuYm9yZGVyU3R5bGUsXG4gICAgYm9yZGVyQ29sb3IgPSBib3JkZXIuYm9yZGVyQ29sb3IsXG4gICAgYm9yZGVyVG9wID0gYm9yZGVyLmJvcmRlclRvcCxcbiAgICBib3JkZXJSaWdodCA9IGJvcmRlci5ib3JkZXJSaWdodCxcbiAgICBib3JkZXJCb3R0b20gPSBib3JkZXIuYm9yZGVyQm90dG9tLFxuICAgIGJvcmRlckxlZnQgPSBib3JkZXIuYm9yZGVyTGVmdCxcbiAgICBib3JkZXJSYWRpdXMgPSBib3JkZXIuYm9yZGVyUmFkaXVzO1xudmFyIGJhY2tncm91bmRJbWFnZSA9IGJhY2tncm91bmQuYmFja2dyb3VuZEltYWdlLFxuICAgIGJhY2tncm91bmRTaXplID0gYmFja2dyb3VuZC5iYWNrZ3JvdW5kU2l6ZSxcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb24gPSBiYWNrZ3JvdW5kLmJhY2tncm91bmRQb3NpdGlvbixcbiAgICBiYWNrZ3JvdW5kUmVwZWF0ID0gYmFja2dyb3VuZC5iYWNrZ3JvdW5kUmVwZWF0O1xudmFyIHpJbmRleCA9IHBvc2l0aW9uLnpJbmRleCxcbiAgICB0b3AgPSBwb3NpdGlvbi50b3AsXG4gICAgcmlnaHQgPSBwb3NpdGlvbi5yaWdodCxcbiAgICBib3R0b20gPSBwb3NpdGlvbi5ib3R0b20sXG4gICAgbGVmdCA9IHBvc2l0aW9uLmxlZnQ7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGJvcmRlcnMgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9ib3JkZXInO1xuZXhwb3J0IHsgd2lkdGgsIGhlaWdodCwgbWluV2lkdGgsIG1pbkhlaWdodCwgbWF4V2lkdGgsIG1heEhlaWdodCwgc2l6ZSwgdmVydGljYWxBbGlnbiwgZGlzcGxheSwgb3ZlcmZsb3csIG92ZXJmbG93WCwgb3ZlcmZsb3dZIC8vIGNvbG9yXG4sIG9wYWNpdHkgLy8gdHlwb2dyYXBoeVxuLCBmb250U2l6ZSwgZm9udEZhbWlseSwgZm9udFdlaWdodCwgbGluZUhlaWdodCwgdGV4dEFsaWduLCBmb250U3R5bGUsIGxldHRlclNwYWNpbmcgLy8gZmxleGJveFxuLCBhbGlnbkl0ZW1zLCBhbGlnbkNvbnRlbnQsIGp1c3RpZnlJdGVtcywganVzdGlmeUNvbnRlbnQsIGZsZXhXcmFwLCBmbGV4RGlyZWN0aW9uLCBmbGV4LCBmbGV4R3JvdywgZmxleFNocmluaywgZmxleEJhc2lzLCBqdXN0aWZ5U2VsZiwgYWxpZ25TZWxmLCBvcmRlciAvLyBncmlkXG4sIGdyaWRHYXAsIGdyaWRDb2x1bW5HYXAsIGdyaWRSb3dHYXAsIGdyaWRDb2x1bW4sIGdyaWRSb3csIGdyaWRBdXRvRmxvdywgZ3JpZEF1dG9Db2x1bW5zLCBncmlkQXV0b1Jvd3MsIGdyaWRUZW1wbGF0ZUNvbHVtbnMsIGdyaWRUZW1wbGF0ZVJvd3MsIGdyaWRUZW1wbGF0ZUFyZWFzLCBncmlkQXJlYSAvLyBib3JkZXJcbiwgYm9yZGVyV2lkdGgsIGJvcmRlclN0eWxlLCBib3JkZXJDb2xvciwgYm9yZGVyVG9wLCBib3JkZXJSaWdodCwgYm9yZGVyQm90dG9tLCBib3JkZXJMZWZ0LCBib3JkZXJSYWRpdXMgLy8gYmFja2dyb3VuZFxuLCBiYWNrZ3JvdW5kSW1hZ2UsIGJhY2tncm91bmRTaXplLCBiYWNrZ3JvdW5kUG9zaXRpb24sIGJhY2tncm91bmRSZXBlYXQgLy8gcG9zaXRpb25cbiwgekluZGV4LCB0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnQgfTsgLy8gdjQgc3R5bGUgQVBJIHNoaW1cblxuZXhwb3J0IHZhciBzdHlsZSA9IGZ1bmN0aW9uIHN0eWxlKF9yZWYpIHtcbiAgdmFyIHByb3AgPSBfcmVmLnByb3AsXG4gICAgICBjc3NQcm9wZXJ0eSA9IF9yZWYuY3NzUHJvcGVydHksXG4gICAgICBhbGlhcyA9IF9yZWYuYWxpYXMsXG4gICAgICBrZXkgPSBfcmVmLmtleSxcbiAgICAgIHRyYW5zZm9ybVZhbHVlID0gX3JlZi50cmFuc2Zvcm1WYWx1ZSxcbiAgICAgIHNjYWxlID0gX3JlZi5zY2FsZSxcbiAgICAgIHByb3BlcnRpZXMgPSBfcmVmLnByb3BlcnRpZXM7XG4gIHZhciBjb25maWcgPSB7fTtcbiAgY29uZmlnW3Byb3BdID0gY3JlYXRlU3R5bGVGdW5jdGlvbih7XG4gICAgcHJvcGVydGllczogcHJvcGVydGllcyxcbiAgICBwcm9wZXJ0eTogY3NzUHJvcGVydHkgfHwgcHJvcCxcbiAgICBzY2FsZToga2V5LFxuICAgIGRlZmF1bHRTY2FsZTogc2NhbGUsXG4gICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm1WYWx1ZVxuICB9KTtcbiAgaWYgKGFsaWFzKSBjb25maWdbYWxpYXNdID0gY29uZmlnW3Byb3BdO1xuICB2YXIgcGFyc2UgPSBjcmVhdGVQYXJzZXIoY29uZmlnKTtcbiAgcmV0dXJuIHBhcnNlO1xufTtcbiIsImltcG9ydCB7IGpzeCB9IGZyb20gJ0B0aGVtZS11aS9jb3JlJztcbmV4cG9ydCB7IGpzeCwgQ29udGV4dCwgbWVyZ2UsIHVzZVRoZW1lVUkgfSBmcm9tICdAdGhlbWUtdWkvY29yZSc7XG5leHBvcnQgeyB1c2VDb2xvck1vZGUsIEluaXRpYWxpemVDb2xvck1vZGUgfSBmcm9tICdAdGhlbWUtdWkvY29sb3ItbW9kZXMnO1xuZXhwb3J0IHsgU3R5bGVkLCBjb21wb25lbnRzIH0gZnJvbSAnQHRoZW1lLXVpL21keCc7XG5leHBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQHRoZW1lLXVpL3RoZW1lLXByb3ZpZGVyJztcbmV4cG9ydCAqIGZyb20gJ0B0aGVtZS11aS9jb21wb25lbnRzJztcbmV4cG9ydCB7IGNzcywgZ2V0IH0gZnJvbSAnQHRoZW1lLXVpL2Nzcyc7XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7XG4gICAgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7XG4gICAgfSk7XG4gICAga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpO1xuICB9XG5cbiAgcmV0dXJuIGtleXM7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuXG4gICAgaWYgKGkgJSAyKSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG52YXIgQmFzZVN0eWxlcyA9IGZ1bmN0aW9uIEJhc2VTdHlsZXMocHJvcHMpIHtcbiAgcmV0dXJuIGpzeCgnZGl2JywgX29iamVjdFNwcmVhZDIoe30sIHByb3BzLCB7XG4gICAgc3g6IHtcbiAgICAgIGZvbnRGYW1pbHk6ICdib2R5JyxcbiAgICAgIGxpbmVIZWlnaHQ6ICdib2R5JyxcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2R5JyxcbiAgICAgIHZhcmlhbnQ6ICdzdHlsZXMnXG4gICAgfVxuICB9KSk7XG59O1xuXG5leHBvcnQgeyBCYXNlU3R5bGVzIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lc20uanMubWFwXG4iLCJ2YXIgX3BhdGgsIF9wYXRoMiwgX2RlZnM7XG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduID8gT2JqZWN0LmFzc2lnbi5iaW5kKCkgOiBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZnVuY3Rpb24gU3ZnQ2hhdChwcm9wcykge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgX2V4dGVuZHMoe1xuICAgIHdpZHRoOiA4MixcbiAgICBoZWlnaHQ6IDgyLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgeG1sbnNYbGluazogXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCJcbiAgfSwgcHJvcHMpLCBfcGF0aCB8fCAoX3BhdGggPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIG9wYWNpdHk6IDAuMTIyLFxuICAgIGQ6IFwiTTU0IDBIMjhDMTIuNTM2IDAgMCAxMi41MzYgMCAyOHYyNmMwIDE1LjQ2NCAxMi41MzYgMjggMjggMjhoMjZjMTUuNDY0IDAgMjgtMTIuNTM2IDI4LTI4VjI4QzgyIDEyLjUzNiA2OS40NjQgMCA1NCAwelwiLFxuICAgIGZpbGw6IFwiI0U5NzQyNVwiXG4gIH0pKSwgX3BhdGgyIHx8IChfcGF0aDIgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGZpbGw6IFwidXJsKCNjaGF0X3N2Z19fcGF0dGVybjApXCIsXG4gICAgZDogXCJNMjQgMjRoMzR2MzRIMjR6XCJcbiAgfSkpLCBfZGVmcyB8fCAoX2RlZnMgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRlZnNcIiwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXR0ZXJuXCIsIHtcbiAgICBpZDogXCJjaGF0X3N2Z19fcGF0dGVybjBcIixcbiAgICBwYXR0ZXJuQ29udGVudFVuaXRzOiBcIm9iamVjdEJvdW5kaW5nQm94XCIsXG4gICAgd2lkdGg6IDEsXG4gICAgaGVpZ2h0OiAxXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwidXNlXCIsIHtcbiAgICB4bGlua0hyZWY6IFwiI2NoYXRfc3ZnX19pbWFnZTBcIixcbiAgICB0cmFuc2Zvcm06IFwic2NhbGUoLjAyOTQxKVwiXG4gIH0pKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWFnZVwiLCB7XG4gICAgaWQ6IFwiY2hhdF9zdmdfX2ltYWdlMFwiLFxuICAgIHdpZHRoOiAzNCxcbiAgICBoZWlnaHQ6IDM0LFxuICAgIHhsaW5rSHJlZjogXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNJQUFBQWlDQVlBQUFBNlJ3dkNBQUFBQkhOQ1NWUUlDQWdJZkFoa2lBQUFCQWhKUkVGVVdJWEZsMXVJVmxVVWdML3o5M3NaYXg0VTNSbVJXVEU3cFl0RVlSY3FJZ2F5SUhySU1xRkl1MGpTSUhuWkZEMVdZTGxEdWdpVitKQWxoUTFkOE1XaUMwMmxpVDAxWmRvbWlzYUkzSnFCanBMTmpLZUh0YzdNYWZ6Lzg1OHppUzQ0N0gvV1htdnZiL1plZTYrMWt6Uk5BWWpPVGdEdUIrNEFyZ1FtTVRiNUhmZ0MyR2g4MkZiV0tVblRsT2pzeGNEcndEV3FId0QrSGlOSWUrNzNXbUNWOFNGdDVWU1B6cllCbTRDcmdGM3EvQW5RUDBhUUM0RjdnTWVBRmNBdndMcFdUc20rVlIxTGdOZUFINENiakEvN3h3andING5PTGdUZUF2NEVacmNhdHc3Y3FiK2ZLekxXR0ZvQTNBN3NBellaSDNZMHN6Yyt2QjJkZlFpNEdiZ2VlTDhJcEFaY0FSd0RQaXVBbUtiOUc0SDV3S1BBOXVqc2swV0RBMXUwdmFpRkhUV2dUVUdLWW1JNWNCM3dNN0FZV0FPa3dOUFIyVmtGZmxuQUQ3WUNxZXVBaVVJMWs5dTA3VEkrYkFXSXpzNEU3Z1p1QlBZMDhjdkd2RVczTmxHb1BtQ0g4YUV2RDFKR2VvRXpnWHhNWkVjeUtlRS9UNys4SElyT3JqWStQRnNGNUFGZ3ZQSGhhSFMyRStoRWdud0E2Q25oM3dOc1YraHh3QndkWTNWMDluemp3OUpTSU1hSFFXQXdPanNIK0RqWDlianhvZG0yNU9VRDQ4TUxlVVYwZGg3d0h2QklkSFpyVVZ3MGtyTzAzUTkwR2gvV2xQUTdZN1RDK1BBaDhKVCsrWERacmNua08rQkY0R3ZqdzZjVi9HWkVaeTlING1xUDhXRkE5YThBRHBoYmFVV01ENGVRN2RoYzBpVUw2R1hBdDBqUXY1enI3d2NPQU8yVlFLS3pIVUNNenI1VHhRKzVpWHYxK3o2bnJ5RUJuRmJkbW1QQWI4QWZKZTJ6Yk82TUQyOFdHVmJkbWo3Z1V1UERzbGEyMGRtNXdFTGdNTEF0T2x0NDMxUmRFVnJWRnRIWmlVZzZXQStNVi9VV29CYWRQUTZzTno2OFZCb2tPcnNBNkFJbUFNZVJ2U3h6aTA1aEpNa042UnlYNVBwbk4zTEtnd3hQRXAxZENUeGZZdEptOGl2d0J0Q04vQlBaK0VQQVQwVWdDWEEwT3R1TzNCT0xWYjhjT0J0NEF0aU1WRzhKY2l6N0dUbWVlZWszUHV5dFNwNkIvQU5NQnpZZ2hjeGg0RUhqUTNkMGRxbmE3RFUrN013Y283T0xrQ1VmRFZPTHpvN2p4TnMwVzVGM2pROG41S2U2ZHJZaGhjOU00RWZnUHVQRE4yb3pVZHZoZ2JWUTJ0Qmdzakp5SGcwU1piWWliUXJSQTl3MXFtVDhTOXZwT2QwQkpIdGV4a2dNdEpLc0Z2bW9VV2UySWlEUGlTN2p3NUZSTmp0MXNzN283QlRqdzBFOXdwL3JkMUtranBUK2s0MFAzVTFzZGdOZklaWFlXbURSeVpvOEwwbjIwaXVTNk95MXlGdG5FbEtQZEFOVlQ4WVFrcldIYTJNTjZsM0F1YVZBMU9rR3BJcS9vQ0pBWG5xUkdBeGpCbEhIYWNoV1hnMU1yUUNRSXJkdEIxSTQzMnQ4K0RJNlcwY2VkdFZBL285RVp5Y2orV2MrY20rdE5ENnNpODd1Qm1hY01oQ0ZTWkRVc1VKVnp5Q3Z4M05PS1VnT2FBbFNxV1haK2VCcEFWR1lXNUhFT0JVNGN0cEFGR1lXOENxUS9Bc2dqMWxmSzl1a0l3QUFBQUJKUlU1RXJrSmdnZz09XCJcbiAgfSkpKSk7XG59XG5leHBvcnQgZGVmYXVsdCBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU9ESWlJR2hsYVdkb2REMGlPRElpSUhacFpYZENiM2c5SWpBZ01DQTRNaUE0TWlJZ1ptbHNiRDBpYm05dVpTSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklpQjRiV3h1Y3pwNGJHbHVhejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOTRiR2x1YXlJK0NqeHdZWFJvSUc5d1lXTnBkSGs5SWpBdU1USXlJaUJrUFNKTk5UUWdNRWd5T0VNeE1pNDFNellnTUNBd0lERXlMalV6TmlBd0lESTRWalUwUXpBZ05qa3VORFkwSURFeUxqVXpOaUE0TWlBeU9DQTRNa2cxTkVNMk9TNDBOalFnT0RJZ09ESWdOamt1TkRZMElEZ3lJRFUwVmpJNFF6Z3lJREV5TGpVek5pQTJPUzQwTmpRZ01DQTFOQ0F3V2lJZ1ptbHNiRDBpSTBVNU56UXlOU0l2UGdvOGNtVmpkQ0I0UFNJeU5DSWdlVDBpTWpRaUlIZHBaSFJvUFNJek5DSWdhR1ZwWjJoMFBTSXpOQ0lnWm1sc2JEMGlkWEpzS0NOd1lYUjBaWEp1TUNraUx6NEtQR1JsWm5NK0NqeHdZWFIwWlhKdUlHbGtQU0p3WVhSMFpYSnVNQ0lnY0dGMGRHVnlia052Ym5SbGJuUlZibWwwY3owaWIySnFaV04wUW05MWJtUnBibWRDYjNnaUlIZHBaSFJvUFNJeElpQm9aV2xuYUhROUlqRWlQZ284ZFhObElIaHNhVzVyT21oeVpXWTlJaU5wYldGblpUQWlJSFJ5WVc1elptOXliVDBpYzJOaGJHVW9NQzR3TWprME1URTRLU0l2UGdvOEwzQmhkSFJsY200K0NqeHBiV0ZuWlNCcFpEMGlhVzFoWjJVd0lpQjNhV1IwYUQwaU16UWlJR2hsYVdkb2REMGlNelFpSUhoc2FXNXJPbWh5WldZOUltUmhkR0U2YVcxaFoyVXZjRzVuTzJKaGMyVTJOQ3hwVmtKUFVuY3dTMGRuYjBGQlFVRk9VMVZvUlZWblFVRkJRMGxCUVVGQmFVTkJXVUZCUVVFMlVuZDJRMEZCUVVGQ1NFNURVMVpSU1VOQlowbG1RV2hyYVVGQlFVSkJhRXBTUlVaVlYwbFlSbXd4ZFVsV2JGVlZaMHd2ZWpremMxcGhlRFJWTTFKdFVsZFVSVGR3V1hSRldWSmpjVWxuWVhsSlNISkpUWEZHU1hVd2FsTkpTRzVhUmtReFYxbE1iRVIxWjJsV0swcEJiR2hSTVdRNFRWZHBRekF5YkdsVU1ERmFaRzl0YVhOaFNUTktjVUpxY0V4T2FrdGxTSFJqTjAxaFpub3ZPRFU0ZW1sVE5EUTNTQzlYV0cxMmRtSXZXbVZsTmlzeGEzcFNUa0ZaYWs5VVowUjFRaXMwUVhKblVXMU5WR0kxU0dablF6SkhhRGd5Um1KWFMxVnVWR3hQYW5ONFkwUnlkMFJYY1VoM1JDdElhVTVKWlNzM00xZHRRMVk0VTBaME5WWlRVSHB5V1VKdE5FTnlaMFl6Y1M5QmJsRlFNR0ZSUXpSR04yZE5aVUZHWTBGMmQweHdWMVJ6YlN0V1VqRk1aMDVsUVVnMFEySnFRUzgzZUhkcWQwZzBiazlNWjFSbFFYWTBSVnB5WTJGMGR6ZGpjV0lyWmt0NlRGZEhSbTlCTTBFM2MwRjZXVnBJTTFrd2MzcGpLM1pDTW1SbVVXazBSMkpuWldWTU9FbHdRVnBqUVZKM1JGQnBkVUZ0UzJJNVJ6UklOWGRMVUVFNWRXcHphekJYUkVFeGRUQjJZV2xHU0ZSWFoxUlZSMHRaYlVrMVkwSXpkMDAzUVZsWFFVOXJkMDVRVWpKV2EwWm1iRzVCUkRkWlEzRmxkVUZwVlVreGF6bDFNRGRVU1N0aVFWZEplbk0wUlRkblduVkNVRmt3T0dOMlIzWkZWek5PYkVkdlVHMURTRGhoUlhaRU1VcEhaVzlGZW1kWWVFMWFSV041UzJWRkwxUTNLemhJU1hKUGNtcFpLMUJHYzBZMVFVWm5kbEJJYUdGSVV6SkZLMmhGWjI1M1FUWkRibWd6ZDA1elZpdG9lSGRDZDJSWk0xWXdPVzU2YW5jNVNsTkpUV0ZJVVZkQmQwOXFjMGdyUkdwWU9XSnFlRzlrYlRJMVQxVkVORGhOVEdWVlZqQmthRGQzU0haQ1NXUklXbkpWVm5jd2EzSlBNRE5ST1RCSGFDOVhiRkJSTjFrM1ZFTXJVRUZvT0VwVUt5dFlSRnB5WTI1clR5dENSalJIZG1wM05tTldMMGRhUlZwNU9VZzBiWEZRT0ZkR1FUbGhPRUZFY0doaVlWVlhUVVEwWlZFM1pHaGpNR2xWVERaSFdFRjBNR3BSZGpWNmNqZDNZMDlCVHpKV1VVdExla2hWUTAxNmNqVlVlRkVyTldsWWRqRXJlalp1Y25sRlFtNUdZbVJ0YlZCQllqaEJaa3BsTW5waVR6Wk5SREk0VjBkV1ltUnRhamRuVlhWUVJITnNZVEl3WkcwMWQwVk1aMDFNUVhSUGJIUTBNekZTWkVWV2NsWkdkRWhhYVZWbk5sZEJLMDFXTDFWWGIwSmhaRkJSTm5OT2VqWTRWa0p2YTA5eWMwRTJRVWx0UVUxbFVuWlRlSHBwTURWb1NrMXJUalpTZVZnMVVIQnVUak5NUzJkM2VGQkZjREZrUTFSNFpsbDBTbTA0YVhaM1FuUkRUaTlDVUZvclJWQkJWREJWWjBOWVFUQlBkSFZQTTBKUFRGWmlPR05QUW5RMFFYUnBUVlpIT0VwamFYbzNSMVJ0WldWbGF6TlFkWGwwVTNBMlFpOUJUazFDZWxsbmFHTjRhRFJGU0dwUk0yUXdaSEZ1WVRkRVZTczNUWGRqYnpkUFRHdERWV1pFVms5TWVtODNhbmhPY3pCWE5VWXphbEU0YmpWTFpUWmtjbGxvYUdNNVRUUkZabWRRZFZCRVRqSnZlbFZrZG1obllsWlJNblJDWjNOcVNubElaekJUV21KWmFXSlJjbEpCT1hjeGNXMVVPRk01ZG5CUFpEQkNTa2gwWlhoclowMTBTa3R6Um5adGIxVlhaVEpKYVVSUWFWTTNhbmMxUmxKT2FuUXhjM00zYnpkQ1ZHcDNNRVU1ZDNBdmNtUXhTMnRxY0ZRcmF6UXdVRE5WTVhOa1owNW1TVnBZV1ZkdFJGSjVXbTg0VERCdU1qQnBkVk0yVDNreGVVWjBia1ZzUzFCa1FVNVdWRGhaVVd0eVYwaGhNazFPTm13elFYVmhWa0V4VDJ0SGNFbHhMMjlEU2tGWWJuRlNSMEY0YWtKc1NFaGhZMmhYV0djeFRYSlJRMUZKY21SMFFqRkpORE15ZERnclJFazJWekJqWldSMFZrRXZiemxGV25samFpdFhZeXRqYlN0MFRrUTJjMms0TjNWQ2JXRmpUV2hEUmxOYVJGVnpWVXBXZW5sRGRuZ3pUazlMVldkUFlVRnNVM0ZYV0ZvclpVSndRVlpIV1ZjMVNFVlBRbFUwWTNSd1FVWkhXVmM0UTNGUkwwRnpaMm94YkdaTE9YVnJTWGRCUVVGQlFrcFNWVFZGY210S1oyZG5QVDBpTHo0S1BDOWtaV1p6UGdvOEwzTjJaejRLXCI7XG5leHBvcnQgeyBTdmdDaGF0IGFzIFJlYWN0Q29tcG9uZW50IH07IiwidmFyIF9wYXRoLCBfcGF0aDIsIF9wYXRoMywgX3BhdGg0LCBfcGF0aDU7XG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduID8gT2JqZWN0LmFzc2lnbi5iaW5kKCkgOiBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZnVuY3Rpb24gU3ZnQ2xvdWQocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIF9leHRlbmRzKHtcbiAgICB3aWR0aDogODIsXG4gICAgaGVpZ2h0OiA4MixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gIH0sIHByb3BzKSwgX3BhdGggfHwgKF9wYXRoID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk01NCAwSDI4QzEyLjUzNiAwIDAgMTIuNTM2IDAgMjh2MjZjMCAxNS40NjQgMTIuNTM2IDI4IDI4IDI4aDI2YzE1LjQ2NCAwIDI4LTEyLjUzNiAyOC0yOFYyOEM4MiAxMi41MzYgNjkuNDY0IDAgNTQgMHpcIixcbiAgICBmaWxsOiBcIiNGRkY2RDNcIlxuICB9KSksIF9wYXRoMiB8fCAoX3BhdGgyID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk00NS41MzQgNDYuNzc4YS45NjEuOTYxIDAgMTEwLTEuOTI0aDMuNTM4YTYuMDE0IDYuMDE0IDAgMDA0LjIwNy0xLjY5NCA1LjY4MSA1LjY4MSAwIDAwMC04LjE4NyA2LjAxNCA2LjAxNCAwIDAwLTQuMjA3LTEuNjk0IDYuMjE1IDYuMjE1IDAgMDAtMS4yMTEuMTE1Ljk5Ljk5IDAgMDEtMS4xMTYtLjU5IDcuNzQzIDcuNzQzIDAgMDAtMi45MDYtMy41NTEgOC4wNTggOC4wNTggMCAwMC0xMC4wMTQuOTE1IDcuNTQgNy41NCAwIDAwLTIuMzA4IDUuNDIxVjM1LjcwNWEuOTcyLjk3MiAwIDAxLS45NzcuOTY2aC0uMDU1bC0uMTY5LS4wMDhoLS4xMjhhNC4yNTcgNC4yNTcgMCAwMC0yLjk3NyAxLjIgNC4wMiA0LjAyIDAgMDAwIDUuNzkzIDQuMjU4IDQuMjU4IDAgMDAyLjk3NyAxLjJoNC43NTJhLjk2Mi45NjIgMCAxMTAgMS45MjRoLTQuNzUyYTYuMjYgNi4yNiAwIDAxLTQuMzc2LTEuNzYzIDUuOSA1LjkgMCAwMTAtOC41MTMgNi4yNDcgNi4yNDcgMCAwMTMuNzYtMS43MzggOS40NTQgOS40NTQgMCAwMTIuODUzLTUuOTYgMTAuMDY0IDEwLjA2NCAwIDAxMTIuNTI0LTEuMTQgOS43MTIgOS43MTIgMCAwMTMuMzEzIDMuNzI5IDguMDIxIDguMDIxIDAgMDE2LjQwNiAyLjIxNyA3LjU2IDcuNTYgMCAwMTAgMTAuOSA4LjAyMSA4LjAyMSAwIDAxLTUuNjA2IDIuMjU5bC0zLjUyOC4wMDd6XCIsXG4gICAgZmlsbDogXCIjMzMzXCJcbiAgfSkpLCBfcGF0aDMgfHwgKF9wYXRoMyA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNMzkuNTExIDM2LjExN2EuOTkuOTkgMCAwMTEuOTc4IDB2MTguOTIxYS45ODkuOTg5IDAgMDEtMS45NzggMHYtMTguOTJ6XCIsXG4gICAgZmlsbDogXCIjMzMzXCJcbiAgfSkpLCBfcGF0aDQgfHwgKF9wYXRoNCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNNDcuMzAyIDQwLjc5OGEuOTQuOTQgMCAwMTAgMS4zNTYgMS4wMDcgMS4wMDcgMCAwMS0xLjM5NSAwbC01LjQtNS4zLTUuNCA1LjNhMS4wMDcgMS4wMDcgMCAwMS0xLjM5NSAwIC45NC45NCAwIDAxMC0xLjM1Nmw2LjEtNS45ODZhMS4wMDcgMS4wMDcgMCAwMTEuMzk1IDBsNi4xIDUuOTg2aC0uMDA1elwiLFxuICAgIGZpbGw6IFwiIzMzM1wiXG4gIH0pKSwgX3BhdGg1IHx8IChfcGF0aDUgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTM5LjUxMSA1NS4wMzhWMzcuODIxbC00LjQxNCA0LjMzYTEuMDA3IDEuMDA3IDAgMDEtMS40IDAgLjk0Mi45NDIgMCAwMTAtMS4zNTZsNi4xLTUuOTg2YTEuMDA4IDEuMDA4IDAgMDExLjQgMGw2LjEgNS45ODZhLjk0Mi45NDIgMCAwMTAgMS4zNTYgMS4wMDYgMS4wMDYgMCAwMS0xLjM5NCAwbC00LjQxNC00LjMzdjE3LjIxN2EuOTkuOTkgMCAwMS0xLjk3OCAwem02LjAyMy04LjI2YS45NjIuOTYyIDAgMTEwLTEuOTI0aDMuNTM3YTYuMDEzIDYuMDEzIDAgMDA0LjIwOC0xLjY5NSA1LjY4MiA1LjY4MiAwIDAwMC04LjE4NyA2LjAxNiA2LjAxNiAwIDAwLTQuMjA4LTEuNjk0IDYuMjA4IDYuMjA4IDAgMDAtMS4yMS4xMTUuOTkzLjk5MyAwIDAxLTEuMTE2LS41OSA3Ljc0NCA3Ljc0NCAwIDAwLTIuOTA2LTMuNTUyIDguMDU5IDguMDU5IDAgMDAtMTAuMDEzLjkxNSA3LjUzNiA3LjUzNiAwIDAwLTIuMzA4IDUuNDJ2LjExOGEuOTY5Ljk2OSAwIDAxLS45NzcuOTY2aC0uMDU1bC0uMTY4LS4wMDdoLS4xMjhhNC4yNTMgNC4yNTMgMCAwMC0yLjk3NyAxLjIgNC4wMTMgNC4wMTMgMCAwMDAgNS43OTIgNC4yNTUgNC4yNTUgMCAwMDIuOTc3IDEuMmg0Ljc1MmEuOTYyLjk2MiAwIDAxMCAxLjkyNEgzMC4xOWE2LjI2MyA2LjI2MyAwIDAxLTQuMzc3LTEuNzYzIDUuOTA3IDUuOTA3IDAgMDEwLTguNTEzIDYuMjUgNi4yNSAwIDAxMy43NjUtMS43MzQgOS40NTUgOS40NTUgMCAwMTIuODUyLTUuOTYgMTAuMDY0IDEwLjA2NCAwIDAxMTIuNTI0LTEuMTQgOS43MDggOS43MDggMCAwMTMuMzEzIDMuNzMgOC4wMjMgOC4wMjMgMCAwMTYuNDA3IDIuMjE3IDcuNTYgNy41NiAwIDAxMCAxMC45IDguMDIzIDguMDIzIDAgMDEtNS42MDcgMi4yNTlsLTMuNTMzLjAwM3pcIixcbiAgICBmaWxsOiBcIiNENkFCMDBcIlxuICB9KSkpO1xufVxuZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlPRElpSUdobGFXZG9kRDBpT0RJaUlIWnBaWGRDYjNnOUlqQWdNQ0E0TWlBNE1pSWdabWxzYkQwaWJtOXVaU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajRLUEhCaGRHZ2daRDBpVFRVMElEQklNamhETVRJdU5UTTJJREFnTUNBeE1pNDFNellnTUNBeU9GWTFORU13SURZNUxqUTJOQ0F4TWk0MU16WWdPRElnTWpnZ09ESklOVFJETmprdU5EWTBJRGd5SURneUlEWTVMalEyTkNBNE1pQTFORll5T0VNNE1pQXhNaTQxTXpZZ05qa3VORFkwSURBZ05UUWdNRm9pSUdacGJHdzlJaU5HUmtZMlJETWlMejRLUEhCaGRHZ2daRDBpVFRRMUxqVXpOQ0EwTmk0M056Z3hRelExTGpRd056Y2dORFl1TnpjNE1TQTBOUzR5T0RJMUlEUTJMamMxTXpJZ05EVXVNVFkxT0NBME5pNDNNRFE0UXpRMUxqQTBPVEVnTkRZdU5qVTJOU0EwTkM0NU5ETXhJRFEyTGpVNE5UWWdORFF1T0RVek9DQTBOaTQwT1RZelF6UTBMamMyTkRRZ05EWXVOREEzSURRMExqWTVNelVnTkRZdU16QXdPU0EwTkM0Mk5EVXlJRFEyTGpFNE5ESkRORFF1TlRrMk9TQTBOaTR3TmpjMUlEUTBMalUzTWlBME5TNDVOREkwSURRMExqVTNNaUEwTlM0NE1UWkRORFF1TlRjeUlEUTFMalk0T1RjZ05EUXVOVGsyT1NBME5TNDFOalEySURRMExqWTBOVElnTkRVdU5EUTNPVU0wTkM0Mk9UTTFJRFExTGpNek1USWdORFF1TnpZME5DQTBOUzR5TWpVeElEUTBMamcxTXpnZ05EVXVNVE0xT0VNME5DNDVORE14SURRMUxqQTBOalVnTkRVdU1EUTVNU0EwTkM0NU56VTJJRFExTGpFMk5UZ2dORFF1T1RJM00wTTBOUzR5T0RJMUlEUTBMamczT0RrZ05EVXVOREEzTnlBME5DNDROVFFnTkRVdU5UTTBJRFEwTGpnMU5FZzBPUzR3TnpKRE5UQXVOalF4TmlBME5DNDROaUExTWk0eE5URTFJRFEwTGpJMU1qRWdOVE11TWpjNUlEUXpMakUyUXpVekxqZ3lPVGdnTkRJdU5qTWdOVFF1TWpZNElEUXhMams1TkRJZ05UUXVOVFkzTXlBME1TNHlPVEE1UXpVMExqZzJOallnTkRBdU5UZzNOU0ExTlM0d01qQTRJRE01TGpnek1Ea2dOVFV1TURJd09DQXpPUzR3TmpZMVF6VTFMakF5TURnZ016Z3VNekF5TVNBMU5DNDROalkySURNM0xqVTBOVFlnTlRRdU5UWTNNeUF6Tmk0NE5ESXlRelUwTGpJMk9DQXpOaTR4TXpnNElEVXpMamd5T1RnZ016VXVOVEF6TVNBMU15NHlOemtnTXpRdU9UY3pRelV5TGpFMU1UVWdNek11T0RneElEVXdMalkwTVRZZ016TXVNamN6SURRNUxqQTNNaUF6TXk0eU56bERORGd1T0RRMklETXpMakkzT1NBME9DNDJOREVnTXpNdU1qZzRJRFE0TGpRMk1TQXpNeTR6TURaRE5EZ3VNall4SURNekxqTXlOaUEwT0M0d05qRWdNek11TXpVMU5DQTBOeTQ0TmpFZ016TXVNemswUXpRM0xqWXpOVFFnTXpNdU5EUXdPQ0EwTnk0ME1EQTJJRE16TGpRd056UWdORGN1TVRrMk9TQXpNeTR5T1RrM1F6UTJMams1TXpJZ016TXVNVGt5SURRMkxqZ3pNelFnTXpNdU1ERTJPQ0EwTmk0M05EVWdNekl1T0RBME1VTTBOaTR4TlRjMElETXhMak0xTkNBME5TNHhORFF5SURNd0xqRXhOVGtnTkRNdU9ETTVJREk1TGpJMU0wTTBNaTR6TVRNeklESTRMakkwTnpZZ05EQXVORGt4TXlBeU55NDNPVEEySURNNExqWTNNVGdnTWpjdU9UVTJPRU16Tmk0NE5USXlJREk0TGpFeU16RWdNelV1TVRRek1TQXlPQzQ1TURJNElETXpMamd5TlNBek1DNHhOamhETXpNdU1EazJJRE13TGpnM01EUWdNekl1TlRFMklETXhMamN4TWpRZ016SXVNVEU1TkNBek1pNDJORE0zUXpNeExqY3lNamtnTXpNdU5UYzFNU0F6TVM0MU1UZ2dNelF1TlRjMk9DQXpNUzQxTVRjZ016VXVOVGc1UXpNeExqVXhOeUF6TlM0Mk1UUWdNekV1TlRFM0lETTFMalkwSURNeExqVXhOeUF6TlM0Mk5qVldNelV1TnpBMU1VTXpNUzQxTVRVMElETTFMamsyTWpjZ016RXVOREV4TmlBek5pNHlNRGt4SURNeExqSXlPRFFnTXpZdU16a3dNa016TVM0d05EVXlJRE0yTGpVM01UUWdNekF1TnprM05pQXpOaTQyTnpJMElETXdMalUwSURNMkxqWTNNVWd6TUM0ME9EVk1NekF1TXpFMklETTJMalkyTTBnek1DNHhPRGhETWprdU1EYzNNU0F6Tmk0Mk5Ua3pJREk0TGpBd09EY2dNemN1TURnNU9TQXlOeTR5TVRFZ016Y3VPRFl6UXpJMkxqZ3lNU0F6T0M0eU16Z2dNall1TlRFd09DQXpPQzQyT0RjM0lESTJMakk1T0RnZ016a3VNVGcxTlVNeU5pNHdPRFk1SURNNUxqWTRNeklnTWpVdU9UYzNOeUEwTUM0eU1UZzJJREkxTGprM056Y2dOREF1TnpVNU5VTXlOUzQ1TnpjM0lEUXhMak13TURVZ01qWXVNRGcyT1NBME1TNDRNelU1SURJMkxqSTVPRGdnTkRJdU16TXpOa015Tmk0MU1UQTRJRFF5TGpnek1UTWdNall1T0RJeElEUXpMakk0TVRFZ01qY3VNakV4SURRekxqWTFOa015T0M0d01EZzRJRFEwTGpReU9URWdNamt1TURjM01TQTBOQzQ0TlRrM0lETXdMakU0T0NBME5DNDROVFl4U0RNMExqazBRek0xTGpFNU5URWdORFF1T0RVMk1TQXpOUzQwTXprNElEUTBMamsxTnpRZ016VXVOakl3TWlBME5TNHhNemM0UXpNMUxqZ3dNRFlnTkRVdU16RTRNaUF6TlM0NU1ESWdORFV1TlRZeU9TQXpOUzQ1TURJZ05EVXVPREU0UXpNMUxqa3dNaUEwTmk0d056TXlJRE0xTGpnd01EWWdORFl1TXpFM09TQXpOUzQyTWpBeUlEUTJMalE1T0RORE16VXVORE01T0NBME5pNDJOemczSURNMUxqRTVOVEVnTkRZdU56Z2dNelF1T1RRZ05EWXVOemhJTXpBdU1UZzRRekk0TGpVMU5USWdORFl1TnpnMU5DQXlOaTQ1T0RRNUlEUTJMakUxTWpnZ01qVXVPREV5SURRMUxqQXhOME15TlM0eU16Z3pJRFEwTGpRMk5qUWdNalF1TnpneE9TQTBNeTQ0TURVMUlESTBMalEzTURFZ05ETXVNRGMwTVVNeU5DNHhOVGd6SURReUxqTTBNallnTWpNdU9UazNOaUEwTVM0MU5UVTNJREl6TGprNU56WWdOREF1TnpZd05VTXlNeTQ1T1RjMklETTVMamsyTlRRZ01qUXVNVFU0TXlBek9TNHhOemcxSURJMExqUTNNREVnTXpndU5EUTNRekkwTGpjNE1Ua2dNemN1TnpFMU5TQXlOUzR5TXpneklETTNMakExTkRZZ01qVXVPREV5SURNMkxqVXdORU15Tmk0NE16RXhJRE0xTGpVeE16a2dNamd1TVRVM05DQXpOQzQ1TURBNUlESTVMalUzTWlBek5DNDNOalpETWprdU56YzFNU0F6TWk0MU1EQTVJRE13TGpjNE9ERWdNekF1TXpnME9TQXpNaTQwTWpVZ01qZ3VPREEyUXpNMExqQTNNamdnTWpjdU1qSXlNU0F6Tmk0eU1UQTNJREkyTGpJME5qSWdNemd1TkRnM0lESTJMakF6T1VNME1DNDNOak16SURJMUxqZ3pNVGdnTkRNdU1EUXlNaUF5Tmk0ME1EVTJJRFEwTGprME9TQXlOeTQyTmpZeFF6UTJMak0xT1RFZ01qZ3VOVGs1TkNBME55NDFNREV4SURJNUxqZzRORGdnTkRndU1qWXlJRE14TGpNNU5VTTBPQzQxTkRZZ016RXVNelkzSURRNExqZ3hOU0F6TVM0ek5UTWdORGt1TURZeUlETXhMak0xTTBNMU1TNHhOVE0zSURNeExqTTBOaklnTlRNdU1UWTFNeUF6TWk0eE5UWTVJRFUwTGpZMk9DQXpNeTQyTVRKRE5UVXVOREF4T1NBek5DNHpNVGMwSURVMUxqazROVGNnTXpVdU1UWXpOeUExTmk0ek9EUTJJRE0yTGpFd01ESkROVFl1Tnpnek5DQXpOeTR3TXpZM0lEVTJMams0T1NBek9DNHdORFF4SURVMkxqazRPU0F6T1M0d05qSkROVFl1T1RnNUlEUXdMakE0SURVMkxqYzRNelFnTkRFdU1EZzNOQ0ExTmk0ek9EUTJJRFF5TGpBeU16bEROVFV1T1RnMU55QTBNaTQ1TmpBMElEVTFMalF3TVRrZ05ETXVPREEyTnlBMU5DNDJOamdnTkRRdU5URXlRelV6TGpFMk5UTWdORFV1T1RZM01pQTFNUzR4TlRNM0lEUTJMamMzTnpnZ05Ea3VNRFl5SURRMkxqYzNNVXcwTlM0MU16UWdORFl1TnpjNE1Wb2lJR1pwYkd3OUlpTXpNek16TXpNaUx6NEtQSEJoZEdnZ1pEMGlUVE01TGpVeE1TQXpOaTR4TVRjeFF6TTVMalV4TVNBek5TNDROVFE0SURNNUxqWXhOVElnTXpVdU5qQXpNaUF6T1M0NE1EQTNJRE0xTGpReE56ZERNemt1T1RnMk1TQXpOUzR5TXpJeklEUXdMakl6TnpjZ016VXVNVEk0TVNBME1DNDFJRE0xTGpFeU9ERkROREF1TnpZeU15QXpOUzR4TWpneElEUXhMakF4TXpnZ016VXVNak15TXlBME1TNHhPVGt6SURNMUxqUXhOemRETkRFdU16ZzBPQ0F6TlM0Mk1ETXlJRFF4TGpRNE9TQXpOUzQ0TlRRNElEUXhMalE0T1NBek5pNHhNVGN4VmpVMUxqQXpPREZETkRFdU5EZzVJRFUxTGpNd01EUWdOREV1TXpnME9DQTFOUzQxTlRFNUlEUXhMakU1T1RNZ05UVXVOek0zTkVNME1TNHdNVE00SURVMUxqa3lNamtnTkRBdU56WXlNeUExTmk0d01qY3hJRFF3TGpVZ05UWXVNREkzTVVNME1DNHlNemMzSURVMkxqQXlOekVnTXprdU9UZzJNU0ExTlM0NU1qSTVJRE01TGpnd01EY2dOVFV1TnpNM05FTXpPUzQyTVRVeUlEVTFMalUxTVRrZ016a3VOVEV4SURVMUxqTXdNRFFnTXprdU5URXhJRFUxTGpBek9ERldNell1TVRFM01Wb2lJR1pwYkd3OUlpTXpNek16TXpNaUx6NEtQSEJoZEdnZ1pEMGlUVFEzTGpNd01pQTBNQzQzT1RneFF6UTNMak01TXpNZ05EQXVPRGcxT0NBME55NDBOallnTkRBdU9Ua3hNU0EwTnk0MU1UVTJJRFF4TGpFd056WkRORGN1TlRZMU15QTBNUzR5TWpReElEUTNMalU1TURrZ05ERXVNelE1TkNBME55NDFPVEE1SURReExqUTNOakZETkRjdU5Ua3dPU0EwTVM0Mk1ESTNJRFEzTGpVMk5UTWdOREV1TnpJNE1TQTBOeTQxTVRVMklEUXhMamcwTkRaRE5EY3VORFkySURReExqazJNVEVnTkRjdU16a3pNeUEwTWk0d05qWXpJRFEzTGpNd01pQTBNaTR4TlRReFF6UTNMakV4TkRVZ05ESXVNek0wTWlBME5pNDROalExSURReUxqUXpORGdnTkRZdU5qQTBOU0EwTWk0ME16UTRRelEyTGpNME5EVWdOREl1TkRNME9DQTBOaTR3T1RRMUlEUXlMak16TkRJZ05EVXVPVEEzSURReUxqRTFOREZNTkRBdU5UQTNJRE0yTGpnMU5ERk1NelV1TVRBM0lEUXlMakUxTkRGRE16UXVPVEU1TlNBME1pNHpNelF5SURNMExqWTJPVFVnTkRJdU5ETTBPQ0F6TkM0ME1EazFJRFF5TGpRek5EaERNelF1TVRRNU5TQTBNaTQwTXpRNElETXpMamc1T1RVZ05ESXVNek0wTWlBek15NDNNVElnTkRJdU1UVTBNVU16TXk0Mk1qQTJJRFF5TGpBMk5qTWdNek11TlRRM09TQTBNUzQ1TmpFeElETXpMalE1T0RNZ05ERXVPRFEwTmtNek15NDBORGcySURReExqY3lPREVnTXpNdU5ESXpJRFF4TGpZd01qY2dNek11TkRJeklEUXhMalEzTmpGRE16TXVOREl6SURReExqTTBPVFFnTXpNdU5EUTROaUEwTVM0eU1qUXhJRE16TGpRNU9ETWdOREV1TVRBM05rTXpNeTQxTkRjNUlEUXdMams1TVRFZ016TXVOakl3TmlBME1DNDRPRFU0SURNekxqY3hNaUEwTUM0M09UZ3hURE01TGpneE1pQXpOQzQ0TVRJeFF6TTVMams1T1RVZ016UXVOak15SURRd0xqSTBPVFFnTXpRdU5UTXhOQ0EwTUM0MU1EazFJRE0wTGpVek1UUkROREF1TnpZNU5TQXpOQzQxTXpFMElEUXhMakF4T1RRZ016UXVOak15SURReExqSXdOeUF6TkM0NE1USXhURFEzTGpNd05qa2dOREF1TnprNE1VZzBOeTR6TURKYUlpQm1hV3hzUFNJak16TXpNek16SWk4K0NqeHdZWFJvSUdROUlrMHpPUzQxTVRFZ05UVXVNRE00VmpNM0xqZ3lNVXd6TlM0d09UY2dOREl1TVRVd09FTXpOQzQ1TURreklEUXlMak16TWpRZ016UXVOalU0TWlBME1pNDBNelFnTXpRdU16azNJRFF5TGpRek5FTXpOQzR4TXpVNElEUXlMalF6TkNBek15NDRPRFE0SURReUxqTXpNalFnTXpNdU5qazNJRFF5TGpFMU1EaERNek11TmpBMU9DQTBNaTR3TmpNZ016TXVOVE16TWlBME1TNDVOVGM0SURNekxqUTRNellnTkRFdU9EUXhNME16TXk0ME16UXhJRFF4TGpjeU5EZ2dNek11TkRBNE5pQTBNUzQxT1RrMUlETXpMalF3T0RZZ05ERXVORGN5T0VNek15NDBNRGcySURReExqTTBOaklnTXpNdU5ETTBNU0EwTVM0eU1qQTVJRE16TGpRNE16WWdOREV1TVRBME5FTXpNeTQxTXpNeUlEUXdMams0TnprZ016TXVOakExT0NBME1DNDRPREkzSURNekxqWTVOeUEwTUM0M09UUTVURE01TGpjNU55QXpOQzQ0TURsRE16a3VPVGcwT1NBek5DNDJNamMzSURRd0xqSXpOVGdnTXpRdU5USTJNeUEwTUM0ME9UWTVJRE0wTGpVeU5qTkROREF1TnpVNE1TQXpOQzQxTWpZeklEUXhMakF3T1RFZ016UXVOakkzTnlBME1TNHhPVGNnTXpRdU9EQTVURFEzTGpJNU55QTBNQzQzT1RRNVF6UTNMak00T0RJZ05EQXVPRGd5TnlBME55NDBOakE0SURRd0xqazROemtnTkRjdU5URXdOQ0EwTVM0eE1EUTBRelEzTGpVMU9Ua2dOREV1TWpJd09TQTBOeTQxT0RVMElEUXhMak0wTmpJZ05EY3VOVGcxTkNBME1TNDBOekk0UXpRM0xqVTROVFFnTkRFdU5UazVOU0EwTnk0MU5UazVJRFF4TGpjeU5EZ2dORGN1TlRFd05DQTBNUzQ0TkRFelF6UTNMalEyTURnZ05ERXVPVFUzT0NBME55NHpPRGd5SURReUxqQTJNeUEwTnk0eU9UY2dOREl1TVRVd09FTTBOeTR4TURrMklEUXlMak16TURrZ05EWXVPRFU1T0NBME1pNDBNekUySURRMkxqWWdOREl1TkRNeE5rTTBOaTR6TkRBeElEUXlMalF6TVRZZ05EWXVNRGt3TXlBME1pNHpNekE1SURRMUxqa3dNeUEwTWk0eE5UQTRURFF4TGpRNE9TQXpOeTQ0TWpGV05UVXVNRE00UXpReExqUTNOellnTlRVdU1qa3lOaUEwTVM0ek5qZ3pJRFUxTGpVek1qZ2dOREV1TVRnME1TQTFOUzQzTURnNVF6UXdMams1T1RrZ05UVXVPRGcxTVNBME1DNDNOVFE1SURVMUxqazRNek1nTkRBdU5TQTFOUzQ1T0RNelF6UXdMakkwTlRFZ05UVXVPVGd6TXlBME1DNHdNREF4SURVMUxqZzROVEVnTXprdU9ERTFPU0ExTlM0M01EZzVRek01TGpZek1UY2dOVFV1TlRNeU9DQXpPUzQxTWpJMElEVTFMakk1TWpZZ016a3VOVEV4SURVMUxqQXpPRnBOTkRVdU5UTTBNU0EwTmk0M056aERORFV1TWpjNE9TQTBOaTQzTnpnZ05EVXVNRE0wTWlBME5pNDJOelkzSURRMExqZzFNemdnTkRZdU5EazJNME0wTkM0Mk56TXpJRFEyTGpNeE5Ua2dORFF1TlRjeUlEUTJMakEzTVNBME5DNDFOeklnTkRVdU9ERTFPVU0wTkM0MU56SWdORFV1TlRZd055QTBOQzQyTnpNeklEUTFMak14TmpFZ05EUXVPRFV6T0NBME5TNHhNelUzUXpRMUxqQXpORElnTkRRdU9UVTFNeUEwTlM0eU56ZzVJRFEwTGpnMU5DQTBOUzQxTXpReElEUTBMamcxTkVnME9TNHdOekZETlRBdU5qUXhNaUEwTkM0NE5qQXlJRFV5TGpFMU1UWWdORFF1TWpVeE55QTFNeTR5TnpreElEUXpMakUxT0RsRE5UTXVPREk1T1NBME1pNDJNamc0SURVMExqSTJPQ0EwTVM0NU9UTXhJRFUwTGpVMk56TWdOREV1TWpnNU4wTTFOQzQ0TmpZMklEUXdMalU0TmpRZ05UVXVNREl3T1NBek9TNDRNams0SURVMUxqQXlNRGtnTXprdU1EWTFORU0xTlM0d01qQTVJRE00TGpNd01TQTFOQzQ0TmpZMklETTNMalUwTkRRZ05UUXVOVFkzTXlBek5pNDROREZETlRRdU1qWTRJRE0yTGpFek56WWdOVE11T0RJNU9TQXpOUzQxTURFNUlEVXpMakkzT1RFZ016UXVPVGN4T1VNMU1pNHhOVEV5SURNekxqZzNPVGdnTlRBdU5qUXhJRE16TGpJM01pQTBPUzR3TnpFZ016TXVNamM0UXpRNExqZzBOaUF6TXk0eU56Z2dORGd1TmpReE1TQXpNeTR5T0RZNUlEUTRMalEyTVRFZ016TXVNekEwT1VNME9DNHlOVGszSURNekxqTXlNemdnTkRndU1EVTVNeUF6TXk0ek5UTXpJRFEzTGpnMk1TQXpNeTR6T1RORE5EY3VOak0xTkNBek15NDBNemsxSURRM0xqUXdNRFlnTXpNdU5EQTFPU0EwTnk0eE9UY2dNek11TWprNE0wTTBOaTQ1T1RNMElETXpMakU1TURZZ05EWXVPRE16TmlBek15NHdNVFUxSURRMkxqYzBOU0F6TWk0NE1ESTVRelEyTGpFMU56VWdNekV1TXpVeU5TQTBOUzR4TkRReklETXdMakV4TkRFZ05ETXVPRE01SURJNUxqSTFNRGxETkRJdU16RXpOQ0F5T0M0eU5EVTRJRFF3TGpRNU1UWWdNamN1TnpnNE9DQXpPQzQyTnpJeUlESTNMamsxTlVNek5pNDROVEk1SURJNExqRXlNVE1nTXpVdU1UUTBNU0F5T0M0NU1ERWdNek11T0RJMklETXdMakUyTmtNek15NHdPVGNnTXpBdU9EWTRNeUF6TWk0MU1UWTVJRE14TGpjeE1ESWdNekl1TVRJd05DQXpNaTQyTkRFMlF6TXhMamN5TXpnZ016TXVOVGN5T1NBek1TNDFNVGc1SURNMExqVTNORFlnTXpFdU5URTNPU0F6TlM0MU9EWTVRek14TGpVeE56a2dNelV1TmpFeE9TQXpNUzQxTVRjNUlETTFMall6T1NBek1TNDFNVGM1SURNMUxqWTJORll6TlM0M01EUXhRek14TGpVeE56TWdNelV1T0RNeE5pQXpNUzQwT1RFMklETTFMamsxTnpnZ016RXVORFF5TVNBek5pNHdOelUwUXpNeExqTTVNamNnTXpZdU1Ua3pJRE14TGpNeU1EVWdNell1TWprNU5pQXpNUzR5TWprM0lETTJMak00T1RSRE16RXVNVE01SURNMkxqUTNPVEVnTXpFdU1ETXhOU0F6Tmk0MU5UQXlJRE13TGpreE16TWdNell1TlRrNE0wTXpNQzQzT1RVeUlETTJMalkwTmpVZ016QXVOalk0TmlBek5pNDJOekEzSURNd0xqVTBNU0F6Tmk0Mk5qazVTRE13TGpRNE5rd3pNQzR6TVRnZ016WXVOall6U0RNd0xqRTRPVGxETWprdU1EYzVJRE0yTGpZMU9EZ2dNamd1TURFd05TQXpOeTR3T0RrMUlESTNMakl4TXlBek55NDROak5ETWpZdU9ESXlPU0F6T0M0eU16YzNJREkyTGpVeE1qWWdNemd1TmpnM05DQXlOaTR6TURBM0lETTVMakU0TlVNeU5pNHdPRGczSURNNUxqWTRNamNnTWpVdU9UYzVOQ0EwTUM0eU1UZ3hJREkxTGprM09UUWdOREF1TnpVNVF6STFMamszT1RRZ05ERXVNams1T1NBeU5pNHdPRGczSURReExqZ3pOVE1nTWpZdU16QXdOeUEwTWk0ek16TkRNall1TlRFeU5pQTBNaTQ0TXpBMklESTJMamd5TWprZ05ETXVNamd3TWlBeU55NHlNVE1nTkRNdU5qVTFRekk0TGpBeE1EWWdORFF1TkRJNE15QXlPUzR3TnprZ05EUXVPRFU0T1NBek1DNHhPRGs1SURRMExqZzFORGxJTXpRdU9UUXlRek0xTGpFNU56SWdORFF1T0RVME9TQXpOUzQwTkRFNElEUTBMamsxTmpNZ016VXVOakl5TWlBME5TNHhNelkzUXpNMUxqZ3dNallnTkRVdU16RTNNU0F6TlM0NU1EUXhJRFExTGpVMk1UY2dNelV1T1RBME1TQTBOUzQ0TVRZNFF6TTFMamt3TkRFZ05EWXVNRGN5SURNMUxqZ3dNallnTkRZdU16RTJPU0F6TlM0Mk1qSXlJRFEyTGpRNU56TkRNelV1TkRReE9DQTBOaTQyTnpjM0lETTFMakU1TnpJZ05EWXVOemM1SURNMExqazBNaUEwTmk0M056bElNekF1TVRnNU9VTXlPQzQxTlRZNUlEUTJMamM0TkRVZ01qWXVPVGcyTXlBME5pNHhOVEU1SURJMUxqZ3hNeUEwTlM0d01UWXhRekkxTGpJME1ERWdORFF1TkRZMUlESTBMamM0TkRNZ05ETXVPREF6T1NBeU5DNDBOek1nTkRNdU1EY3lOVU15TkM0eE5qRTNJRFF5TGpNME1URWdNalF1TURBeE1pQTBNUzQxTlRRMElESTBMakF3TVRJZ05EQXVOelU1TlVNeU5DNHdNREV5SURNNUxqazJORFlnTWpRdU1UWXhOeUF6T1M0eE56YzVJREkwTGpRM015QXpPQzQwTkRZMVF6STBMamM0TkRNZ016Y3VOekUxTVNBeU5TNHlOREF4SURNM0xqQTFNemtnTWpVdU9ERXpJRE0yTGpVd01qbERNall1T0RNME1pQXpOUzQxTVRNMElESTRMakUyTWpNZ016UXVPVEF4T0NBeU9TNDFOemdnTXpRdU56WTVRekk1TGpjNE1TQXpNaTQxTURRZ016QXVOemt6TmlBek1DNHpPRGd4SURNeUxqUXpNREVnTWpndU9EQTVRek0wTGpBM056a2dNamN1TWpJMU1TQXpOaTR5TVRVNElESTJMakkwT1RFZ016Z3VORGt5TVNBeU5pNHdOREU1UXpRd0xqYzJPRE1nTWpVdU9ETTBOeUEwTXk0d05EY3lJREkyTGpRd09EVWdORFF1T1RVMElESTNMalkyT0RsRE5EWXVNelkwTkNBeU9DNDJNREkwSURRM0xqVXdOalFnTWprdU9EZzRNaUEwT0M0eU5qY2dNekV1TXprNE9VTTBPQzQxTlRFZ016RXVNemN3T1NBME9DNDRNaUF6TVM0ek5UWTVJRFE1TGpBMk55QXpNUzR6TlRZNVF6VXhMakUxT1RFZ016RXVNelVnTlRNdU1UY3hJRE15TGpFMk1EY2dOVFF1TmpjMElETXpMall4TlRsRE5UVXVOREEzT1NBek5DNHpNakV6SURVMUxqazVNVGdnTXpVdU1UWTNOeUExTmk0ek9UQTJJRE0yTGpFd05ESkROVFl1TnpnNU5TQXpOeTR3TkRBM0lEVTJMams1TlRFZ016Z3VNRFE0SURVMkxqazVOVEVnTXprdU1EWTFPVU0xTmk0NU9UVXhJRFF3TGpBNE16Z2dOVFl1TnpnNU5TQTBNUzR3T1RFeklEVTJMak01TURZZ05ESXVNREkzT0VNMU5TNDVPVEU0SURReUxqazJORE1nTlRVdU5EQTNPU0EwTXk0NE1UQTNJRFUwTGpZM05DQTBOQzQxTVRZeFF6VXpMakUzTVNBME5TNDVOekV6SURVeExqRTFPVEVnTkRZdU56Z3hOeUEwT1M0d05qY2dORFl1TnpjME9VdzBOUzQxTXpReElEUTJMamMzT0ZvaUlHWnBiR3c5SWlORU5rRkNNREFpTHo0S1BDOXpkbWMrQ2c9PVwiO1xuZXhwb3J0IHsgU3ZnQ2xvdWQgYXMgUmVhY3RDb21wb25lbnQgfTsiLCJ2YXIgX3BhdGgsIF9wYXRoMjtcbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gPyBPYmplY3QuYXNzaWduLmJpbmQoKSA6IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5mdW5jdGlvbiBTdmdEZXNpZ24ocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIF9leHRlbmRzKHtcbiAgICB3aWR0aDogODIsXG4gICAgaGVpZ2h0OiA4MixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gIH0sIHByb3BzKSwgX3BhdGggfHwgKF9wYXRoID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk01NCAwSDI4QzEyLjUzNiAwIDAgMTIuNTM2IDAgMjh2MjZjMCAxNS40NjQgMTIuNTM2IDI4IDI4IDI4aDI2YzE1LjQ2NCAwIDI4LTEyLjUzNiAyOC0yOFYyOEM4MiAxMi41MzYgNjkuNDY0IDAgNTQgMHpcIixcbiAgICBmaWxsOiBcIiNGNEY0RkZcIlxuICB9KSksIF9wYXRoMiB8fCAoX3BhdGgyID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk00Ni42ODQgNTkuNjE4bC0zLjMxNi0zLjM4LTMuMzE3IDMuMzhhMS4yNTggMS4yNTggMCAwMS0xLjggMCAxLjMxNyAxLjMxNyAwIDAxMC0xLjg0bDMuMzE3LTMuMzgtMy4zMTctMy4zNzlhMS4zMTcgMS4zMTcgMCAwMTAtMS44NCAxLjI1OSAxLjI1OSAwIDAxMS44IDBsMy4zMTcgMy4zOCAzLjMxNi0zLjM4YTEuMjU4IDEuMjU4IDAgMDExLjggMCAxLjMyIDEuMzIgMCAwMTAgMS44NGwtMy4zMTYgMy4zNzkgMy4zMTYgMy4zOGExLjMxOCAxLjMxOCAwIDAxMCAxLjg0IDEuMjU4IDEuMjU4IDAgMDEtMS44IDB6TTIyLjExOSA1My43OGEzLjc3MiAzLjc3MiAwIDExMy43NyAzLjg0IDMuODA2IDMuODA2IDAgMDEtMy43NjktMy44NGgtLjAwMXptMy43NzItNS45OGMtLjI2IDAtLjUyLjAxOC0uNzc4LjA1NGEyNS4wNzQgMjUuMDc0IDAgMDEzLjkxLTguMSAyMi4yMTIgMjIuMjEyIDAgMDExNS40NzUtOC45OWwtMi43MjktMi40MThhMS4zMTYgMS4zMTYgMCAwMS4yNjUtMi4xNDUgMS4yNiAxLjI2IDAgMDExLjQwOS4xODJsNS4xNDUgNC41NmExLjMxOCAxLjMxOCAwIDAxLjEyNiAxLjgzNWwtNC40NzMgNS4yNDVhMS4yNTcgMS4yNTcgMCAwMS0xLjguMTI4IDEuMzE3IDEuMzE3IDAgMDEtLjEyNi0xLjgzNGwyLjU0My0yLjk4MmExOS41IDE5LjUgMCAwMC0xMy43MjcgNy44OSAyMi43NiAyMi43NiAwIDAwLTMuNDI3IDYuODY5IDUuNzQgNS43NCAwIDAwLTEuODEyLS4yOTRoLS4wMDF6bTI3LjU2OC0xNi4xM2EzLjc3IDMuNzcgMCAxMTMuNzcgMy44NCAzLjgwNiAzLjgwNiAwIDAxLTMuNzY5LTMuODRoLS4wMDF6bS0yMy42NDggMi4xNWwtMy4zMTctMy4zODEtMy4zMTYgMy4zOGExLjI2IDEuMjYgMCAwMS0xLjggMCAxLjMxOCAxLjMxOCAwIDAxMC0xLjg0bDMuMzE3LTMuMzgtMy4zMTctMy4zNzlhMS4zMTggMS4zMTggMCAwMTAtMS44NCAxLjI1OCAxLjI1OCAwIDAxMS44IDBsMy4zMTYgMy4zOCAzLjMxNy0zLjM4YTEuMjU4IDEuMjU4IDAgMDExLjggMCAxLjMyIDEuMzIgMCAwMTAgMS44NGwtMy4zMTcgMy4zOCAzLjMxNiAzLjM3OWExLjMxOCAxLjMxOCAwIDAxMCAxLjg0IDEuMjU5IDEuMjU5IDAgMDEtMS44IDBoLjAwMXpcIixcbiAgICBmaWxsOiBcIiM1ODU2RDZcIlxuICB9KSkpO1xufVxuZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlPRElpSUdobGFXZG9kRDBpT0RJaUlIWnBaWGRDYjNnOUlqQWdNQ0E0TWlBNE1pSWdabWxzYkQwaWJtOXVaU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajRLUEhCaGRHZ2daRDBpVFRVMElEQklNamhETVRJdU5UTTJJREFnTUNBeE1pNDFNellnTUNBeU9GWTFORU13SURZNUxqUTJOQ0F4TWk0MU16WWdPRElnTWpnZ09ESklOVFJETmprdU5EWTBJRGd5SURneUlEWTVMalEyTkNBNE1pQTFORll5T0VNNE1pQXhNaTQxTXpZZ05qa3VORFkwSURBZ05UUWdNRm9pSUdacGJHdzlJaU5HTkVZMFJrWWlMejRLUEhCaGRHZ2daRDBpVFRRMkxqWTROQ0ExT1M0Mk1UYzVURFF6TGpNMk9DQTFOaTR5TXpoTU5EQXVNRFV4SURVNUxqWXhOemxETXprdU9UTXpPQ0ExT1M0M016YzRJRE01TGpjNU16Z2dOVGt1T0RNek1pQXpPUzQyTXpreUlEVTVMamc1T0RKRE16a3VORGcwTnlBMU9TNDVOak15SURNNUxqTXhPRGNnTlRrdU9UazJOaUF6T1M0eE5URWdOVGt1T1RrMk5rTXpPQzQ1T0RNeklEVTVMams1TmpZZ016Z3VPREUzTXlBMU9TNDVOak15SURNNExqWTJNamdnTlRrdU9EazRNa016T0M0MU1EZ3lJRFU1TGpnek16SWdNemd1TXpZNE1pQTFPUzQzTXpjNElETTRMakkxTVNBMU9TNDJNVGM1UXpNNExqQXhNU0ExT1M0ek56RTRJRE0zTGpnM05qZ2dOVGt1TURReE55QXpOeTQ0TnpZNElEVTRMalk1T0VNek55NDROelk0SURVNExqTTFORE1nTXpndU1ERXhJRFU0TGpBeU5ESWdNemd1TWpVeElEVTNMamMzT0RGTU5ERXVOVFk0SURVMExqTTVOemxNTXpndU1qVXhJRFV4TGpBeE9VTXpPQzR3TVRFZ05UQXVOemN5T1NBek55NDROelk0SURVd0xqUTBNamtnTXpjdU9EYzJPQ0ExTUM0d09Ua3hRek0zTGpnM05qZ2dORGt1TnpVMU5DQXpPQzR3TVRFZ05Ea3VOREkxTVNBek9DNHlOVEVnTkRrdU1UYzVRek00TGpNMk9ETWdORGt1TURVNU1pQXpPQzQxTURnMElEUTRMamsyTkRFZ016Z3VOall5T1NBME9DNDRPVGt5UXpNNExqZ3hOelFnTkRndU9ETTBNaUF6T0M0NU9ETTBJRFE0TGpnd01EZ2dNemt1TVRVeElEUTRMamd3TURoRE16a3VNekU0TmlBME9DNDRNREE0SURNNUxqUTRORFlnTkRndU9ETTBNaUF6T1M0Mk16a3hJRFE0TGpnNU9USkRNemt1Tnprek5pQTBPQzQ1TmpReElETTVMamt6TXpjZ05Ea3VNRFU1TWlBME1DNHdOVEVnTkRrdU1UYzVURFF6TGpNMk9DQTFNaTQxTlRreFREUTJMalk0TkNBME9TNHhOemxETkRZdU9EQXhNeUEwT1M0d05Ua3lJRFEyTGprME1UTWdORGd1T1RZME1TQTBOeTR3T1RVNUlEUTRMamc1T1RKRE5EY3VNalV3TkNBME9DNDRNelF5SURRM0xqUXhOalFnTkRndU9EQXdPQ0EwTnk0MU9EUWdORGd1T0RBd09FTTBOeTQzTlRFMklEUTRMamd3TURnZ05EY3VPVEUzTmlBME9DNDRNelF5SURRNExqQTNNakVnTkRndU9EazVNa00wT0M0eU1qWTNJRFE0TGprMk5ERWdORGd1TXpZMk55QTBPUzR3TlRreUlEUTRMalE0TkNBME9TNHhOemxETkRndU56SXpOeUEwT1M0ME1qVXlJRFE0TGpnMU56Z2dORGt1TnpVMU5TQTBPQzQ0TlRjNElEVXdMakE1T1RGRE5EZ3VPRFUzT0NBMU1DNDBOREk0SURRNExqY3lNemNnTlRBdU56Y3lPQ0EwT0M0ME9EUWdOVEV1TURFNVREUTFMakUyT0NBMU5DNHpPVGM1VERRNExqUTROQ0ExTnk0M056Z3hRelE0TGpjeU16a2dOVGd1TURJME1pQTBPQzQ0TlRneUlEVTRMak0xTkRNZ05EZ3VPRFU0TWlBMU9DNDJPVGhETkRndU9EVTRNaUExT1M0d05ERTNJRFE0TGpjeU16a2dOVGt1TXpjeE9DQTBPQzQwT0RRZ05Ua3VOakUzT1VNME9DNHpOalk0SURVNUxqY3pOemdnTkRndU1qSTJPQ0ExT1M0NE16TXlJRFE0TGpBM01qSWdOVGt1T0RrNE1rTTBOeTQ1TVRjM0lEVTVMamsyTXpJZ05EY3VOelV4TnlBMU9TNDVPVFkySURRM0xqVTROQ0ExT1M0NU9UWTJRelEzTGpReE5qTWdOVGt1T1RrMk5pQTBOeTR5TlRBMElEVTVMamsyTXpJZ05EY3VNRGsxT0NBMU9TNDRPVGd5UXpRMkxqazBNVE1nTlRrdU9ETXpNaUEwTmk0NE1ERXpJRFU1TGpjek56Z2dORFl1TmpnMElEVTVMall4TnpsYVRUSXlMakV4T1NBMU15NDNPRU15TWk0eE16STJJRFV6TGpBek56SWdNakl1TXpZMU15QTFNaTR6TVRRNUlESXlMamM0TnpnZ05URXVOekF6T1VNeU15NHlNVEEwSURVeExqQTVNamdnTWpNdU9EQTBNU0ExTUM0Mk1qQXpJREkwTGpRNU5ETWdOVEF1TXpRMU5VTXlOUzR4T0RRMUlEVXdMakEzTURZZ01qVXVPVFF3TlNBMU1DNHdNRFU1SURJMkxqWTJOelFnTlRBdU1UVTVNa015Tnk0ek9UUXpJRFV3TGpNeE1qVWdNamd1TURVNU9DQTFNQzQyTnpZNUlESTRMalU0TURNZ05URXVNakEzUXpJNUxqRXdNRGNnTlRFdU56TTNNaUF5T1M0ME5UTWdOVEl1TkRBNU15QXlPUzQxT1RJNUlEVXpMakV6T0RsRE1qa3VOek15T0NBMU15NDROamcxSURJNUxqWTFOREVnTlRRdU5qSXpNeUF5T1M0ek5qWTJJRFUxTGpNd09ETkRNamt1TURjNU1TQTFOUzQ1T1RNMElESTRMalU1TlRjZ05UWXVOVGM0TWlBeU55NDVOemNnTlRZdU9UZzVOVU15Tnk0ek5UZ3pJRFUzTGpRd01EZ2dNall1TmpNeE9TQTFOeTQyTWpBeUlESTFMamc0T1NBMU55NDJNakF4UXpJMExqZzRNREVnTlRjdU5qRXdNeUF5TXk0NU1UWXpJRFUzTGpJd01ETWdNak11TWpBNU5pQTFOaTQwT0RBeVF6SXlMalV3TWpnZ05UVXVOell3TWlBeU1pNHhNVEE1SURVMExqYzRPRGtnTWpJdU1USWdOVE11TnpoSU1qSXVNVEU1V2sweU5TNDRPVEVnTkRjdU9FTXlOUzQyTXpBM0lEUTNMamd3TURJZ01qVXVNemN3T0NBME55NDRNVGd5SURJMUxqRXhNeUEwTnk0NE5UUkRNalV1T1RFM05DQTBOQzQ1TkRBMElESTNMakkwTWpFZ05ESXVNVGsyTWlBeU9TNHdNak1nTXprdU56VXpPVU16TUM0NE16YzVJRE0zTGpJMk5ERWdNek11TVRVd09TQXpOUzR4TnpreklETTFMamd4TlRFZ016TXVOak14TmtNek9DNDBOemt5SURNeUxqQTRNemtnTkRFdU5ETTJNU0F6TVM0eE1EY3lJRFEwTGpRNU9DQXpNQzQzTmpNNVREUXhMamMyT1NBeU9DNHpORFU1UXpReExqVXhNeUF5T0M0eE1UY2dOREV1TXpVMk5pQXlOeTQzT1RjeUlEUXhMak16TXpFZ01qY3VORFUwTmtNME1TNHpNRGsxSURJM0xqRXhNaUEwTVM0ME1qQTRJREkyTGpjM016Y2dOREV1TmpReklESTJMalV4TWtNME1TNDNOVEUwSURJMkxqTTRNek1nTkRFdU9EZzBOU0F5Tmk0eU56YzRJRFF5TGpBek5EUWdNall1TWpBeE5FTTBNaTR4T0RReklESTJMakV5TlRFZ05ESXVNelE0SURJMkxqQTNPVFFnTkRJdU5URTFOeUF5Tmk0d05qYzBRelF5TGpZNE16VWdNall1TURVMU5DQTBNaTQ0TlRJZ01qWXVNRGMzTWlBME15NHdNVEV6SURJMkxqRXpNVE5ETkRNdU1UY3dOU0F5Tmk0eE9EVTFJRFF6TGpNeE56UWdNall1TWpjeE1pQTBNeTQwTkRNZ01qWXVNemd6TVV3ME9DNDFPRGdnTXpBdU9UUXpNVU0wT0M0NE5EUWdNekV1TVRjeU1pQTBPUzR3TURBMUlETXhMalE1TWpJZ05Ea3VNREkwSURNeExqZ3pOVU0wT1M0d05EYzFJRE15TGpFM056Y2dORGd1T1RNMk15QXpNaTQxTVRZeElEUTRMamN4TkNBek1pNDNOemd4VERRMExqSTBNU0F6T0M0d01qSTVRelEwTGpFek1qWWdNemd1TVRVeE5pQTBNeTQ1T1RrMUlETTRMakkxTnpRZ05ETXVPRFE1TlNBek9DNHpNek0zUXpRekxqWTVPVFlnTXpndU5ERXdNU0EwTXk0MU16VTVJRE00TGpRMU5UWWdORE11TXpZNElETTRMalEyTnpWRE5ETXVNakF3TWlBek9DNDBOemsxSURRekxqQXpNVGNnTXpndU5EVTNOQ0EwTWk0NE56STBJRE00TGpRd016RkROREl1TnpFek1pQXpPQzR6TkRnM0lEUXlMalUyTmpVZ016Z3VNall5T1NBME1pNDBOREVnTXpndU1UVXdPVU0wTWk0eE9EVWdNemN1T1RJeE9TQTBNaTR3TWpnMklETTNMall3TWpFZ05ESXVNREExTVNBek55NHlOVGsxUXpReExqazRNVFVnTXpZdU9URTJPU0EwTWk0d09USTRJRE0yTGpVM09EY2dOREl1TXpFMUlETTJMak14TmpsTU5EUXVPRFU0SURNekxqTXpOVU0wTWk0eE5EVTBJRE16TGpZeE56RWdNemt1TlRJeU1pQXpOQzQwTmpVeUlETTNMakUxTnpjZ016VXVPREkwTWtNek5DNDNPVE15SURNM0xqRTRNek1nTXpJdU56UXdNU0F6T1M0d01qTXlJRE14TGpFek1TQTBNUzR5TWpVeFF6STVMall3T0NBME15NHpNRFF6SURJNExqUTBPVElnTkRVdU5qSTJPQ0F5Tnk0M01EUWdORGd1TURrMFF6STNMakV4T1RjZ05EY3VPRGs1TkNBeU5pNDFNRGM1SURRM0xqZ3dNRElnTWpVdU9Ea3lJRFEzTGpoSU1qVXVPRGt4V2swMU15NDBOVGtnTXpFdU5qY3dPVU0xTXk0ME56STBJRE13TGpreU9ERWdOVE11TnpBME9TQXpNQzR5TURVNUlEVTBMakV5TnpRZ01qa3VOVGswTjBNMU5DNDFORGs0SURJNExqazRNellnTlRVdU1UUXpOQ0F5T0M0MU1UQTRJRFUxTGpnek16WWdNamd1TWpNMU9FTTFOaTQxTWpNNElESTNMamsyTURrZ05UY3VNamM1T0NBeU55NDRPVFU1SURVNExqQXdOamdnTWpndU1EUTVNVU0xT0M0M016TTRJREk0TGpJd01qSWdOVGt1TXprNU5DQXlPQzQxTmpZMklEVTVMamt5SURJNUxqQTVOamRETmpBdU5EUXdOU0F5T1M0Mk1qWTRJRFl3TGpjNU1qa2dNekF1TWprNE9TQTJNQzQ1TXpJNUlETXhMakF5T0RaRE5qRXVNRGN5T0NBek1TNDNOVGd5SURZd0xqazVOREVnTXpJdU5URXlPU0EyTUM0M01EWTNJRE16TGpFNU9FTTJNQzQwTVRreUlETXpMamc0TXpFZ05Ua3VPVE0xT0NBek5DNDBOamd4SURVNUxqTXhOekVnTXpRdU9EYzVORU0xT0M0Mk9UZzBJRE0xTGpJNU1EY2dOVGN1T1RjeUlETTFMalV4TURFZ05UY3VNakk1SURNMUxqVXhRelUyTGpJeU1ETWdNelV1TlRBd01pQTFOUzR5TlRZM0lETTFMakE1TURVZ05UUXVOVFVnTXpRdU16Y3dOa00xTXk0NE5ETXpJRE16TGpZMU1EZ2dOVE11TkRVeE1pQXpNaTQyTnprMklEVXpMalEySURNeExqWTNNRGxJTlRNdU5EVTVXazB5T1M0NE1URWdNek11T0RFNU1Vd3lOaTQwT1RRZ016QXVORE01VERJekxqRTNPQ0F6TXk0NE1Ua3hRekl6TGpBMk1EY2dNek11T1RNNE9DQXlNaTQ1TWpBM0lETTBMakF6TXprZ01qSXVOelkyTVNBek5DNHdPVGc1UXpJeUxqWXhNVFlnTXpRdU1UWXpPQ0F5TWk0ME5EVTJJRE0wTGpFNU56TWdNakl1TWpjNElETTBMakU1TnpORE1qSXVNVEV3TkNBek5DNHhPVGN6SURJeExqazBORFFnTXpRdU1UWXpPQ0F5TVM0M09EazVJRE0wTGpBNU9EbERNakV1TmpNMU15QXpOQzR3TXpNNUlESXhMalE1TlRNZ016TXVPVE00T0NBeU1TNHpOemdnTXpNdU9ERTVNVU15TVM0eE16Z3hJRE16TGpVM015QXlNUzR3TURNNElETXpMakkwTWpjZ01qRXVNREF6T0NBek1pNDRPVGc1UXpJeExqQXdNemdnTXpJdU5UVTFNaUF5TVM0eE16Z3hJRE15TGpJeU5URWdNakV1TXpjNElETXhMamszT1V3eU5DNDJPVFVnTWpndU5UazVNVXd5TVM0ek56Z2dNalV1TWpKRE1qRXVNVE00TVNBeU5DNDVOek00SURJeExqQXdNemdnTWpRdU5qUXpPQ0F5TVM0d01ETTRJREkwTGpORE1qRXVNREF6T0NBeU15NDVOVFl6SURJeExqRXpPREVnTWpNdU5qSTJJREl4TGpNM09DQXlNeTR6TnprNVF6SXhMalE1TlRJZ01qTXVNalU1T1NBeU1TNDJNelV5SURJekxqRTJORGNnTWpFdU56ZzVOeUF5TXk0d09UazJRekl4TGprME5ETWdNak11TURNME5TQXlNaTR4TVRBeklESXpMakF3TVNBeU1pNHlOemdnTWpNdU1EQXhRekl5TGpRME5UY2dNak11TURBeElESXlMall4TVRjZ01qTXVNRE0wTlNBeU1pNDNOall6SURJekxqQTVPVFpETWpJdU9USXdPU0F5TXk0eE5qUTNJREl6TGpBMk1EZ2dNak11TWpVNU9TQXlNeTR4TnpnZ01qTXVNemM1T1V3eU5pNDBPVFFnTWpZdU56Wk1Namt1T0RFeElESXpMak0zT1RsRE1qa3VPVEk0TWlBeU15NHlOVGs1SURNd0xqQTJPRElnTWpNdU1UWTBOeUF6TUM0eU1qSTNJREl6TGpBNU9UWkRNekF1TXpjM015QXlNeTR3TXpRMUlETXdMalUwTXpNZ01qTXVNREF4SURNd0xqY3hNU0F5TXk0d01ERkRNekF1T0RjNE55QXlNeTR3TURFZ016RXVNRFEwTnlBeU15NHdNelExSURNeExqRTVPVE1nTWpNdU1EazVOa016TVM0ek5UTTRJREl6TGpFMk5EY2dNekV1TkRrek9DQXlNeTR5TlRrNUlETXhMall4TVNBeU15NHpOems1UXpNeExqZzFNRFVnTWpNdU5qSTJNeUF6TVM0NU9EUTBJREl6TGprMU5qVWdNekV1T1RnME5DQXlOQzR6UXpNeExqazRORFFnTWpRdU5qUXpOaUF6TVM0NE5UQTFJREkwTGprM016WWdNekV1TmpFeElESTFMakl5VERJNExqSTVOQ0F5T0M0Mk1EQXhURE14TGpZeElETXhMamszT1VNek1TNDRORGs1SURNeUxqSXlOVEVnTXpFdU9UZzBNaUF6TWk0MU5UVXlJRE14TGprNE5ESWdNekl1T0RrNE9VTXpNUzQ1T0RReUlETXpMakkwTWpjZ016RXVPRFE1T1NBek15NDFOek1nTXpFdU5qRWdNek11T0RFNU1VTXpNUzQwT1RJM0lETXpMamt6T1NBek1TNHpOVEkzSURNMExqQXpOREVnTXpFdU1UazRNaUF6TkM0d09Ua3hRek14TGpBME16WWdNelF1TVRZME1TQXpNQzQ0TnpjM0lETTBMakU1TnpVZ016QXVOekVnTXpRdU1UazNOVU16TUM0MU5ESTBJRE0wTGpFNU56VWdNekF1TXpjMk5DQXpOQzR4TmpReElETXdMakl5TVRnZ016UXVNRGs1TVVNek1DNHdOamN6SURNMExqQXpOREVnTWprdU9USTNNaUF6TXk0NU16a2dNamt1T0RFZ016TXVPREU1TVVneU9TNDRNVEZhSWlCbWFXeHNQU0lqTlRnMU5rUTJJaTgrQ2p3dmMzWm5QZ289XCI7XG5leHBvcnQgeyBTdmdEZXNpZ24gYXMgUmVhY3RDb21wb25lbnQgfTsiLCJ2YXIgX3BhdGgsIF9wYXRoMjtcbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gPyBPYmplY3QuYXNzaWduLmJpbmQoKSA6IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5mdW5jdGlvbiBTdmdTZXR0aW5nKHByb3BzKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCBfZXh0ZW5kcyh7XG4gICAgd2lkdGg6IDgyLFxuICAgIGhlaWdodDogODIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICB9LCBwcm9wcyksIF9wYXRoIHx8IChfcGF0aCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNNTQgMEgyOEMxMi41MzYgMCAwIDEyLjUzNiAwIDI4djI2YzAgMTUuNDY0IDEyLjUzNiAyOCAyOCAyOGgyNmMxNS40NjQgMCAyOC0xMi41MzYgMjgtMjhWMjhDODIgMTIuNTM2IDY5LjQ2NCAwIDU0IDB6XCIsXG4gICAgZmlsbDogXCIjRTRGRkVFXCJcbiAgfSkpLCBfcGF0aDIgfHwgKF9wYXRoMiA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNMzkuODY2IDYwYTIuMjg0IDIuMjg0IDAgMDEtMi4yNTctMS45MWwtLjQzMy0yLjZjLS44NDMtLjI2LTEuNjYtLjU5NC0yLjQ0My0xbC0yLjE3MiAxLjU0NWEyLjI3MiAyLjI3MiAwIDAxLTIuOTM4LS4yNDdsLTIuMy0yLjNhMi4yOCAyLjI4IDAgMDEtLjI0Ny0yLjk0NWwxLjUyMy0yLjExOGExNC4yNDcgMTQuMjQ3IDAgMDEtMS4wNTgtMi41MTNsLTIuNjI4LS40NDdBMi4yODUgMi4yODUgMCAwMTIzIDQzLjJ2LTMuMjUzYTIuMjgzIDIuMjgzIDAgMDExLjkxLTIuMjU3bDIuNTY2LS40MzNjLjI2Mi0uODczLjYwNi0xLjcyIDEuMDI4LTIuNTI4bC0xLjU0NS0yLjE3MmEyLjI4NyAyLjI4NyAwIDAxLjI0Ny0yLjk0NWwyLjMxMS0yLjNhMi4yODQgMi4yODQgMCAwMTIuOTQ1LS4yNDdsMi4xMjYgMS41MzFhMTQuMTc3IDE0LjE3NyAwIDAxMi41MTItMS4wNTlsLjQ0OC0yLjYyOEEyLjI4NCAyLjI4NCAwIDAxMzkuOCAyM2gzLjI1NGEyLjI4NSAyLjI4NSAwIDAxMi4yNTcgMS45MDlsLjQzMiAyLjU2NmMuOTA0LjI3MiAxLjc4LjYzMiAyLjYxMyAxLjA3NWwyLjE0OS0xLjUzYTIuMjcgMi4yNyAwIDAxMi45MzcuMjQ2bDIuMyAyLjNhMi4yOCAyLjI4IDAgMDEuMjQ3IDIuOTQ2bC0xLjUzIDIuMTQxYy40MjUuODA2Ljc3NCAxLjY0OSAxLjA0MyAyLjUybDIuNi40NGEyLjI1NSAyLjI1NSAwIDAxMS44OTQgMi4yNTZ2My4yNTRhMi4yODQgMi4yODQgMCAwMS0xLjkwOSAyLjI1N2wtMi42LjQzM2MtLjI2OC44Ny0uNjE3IDEuNzE0LTEuMDQzIDIuNTJsMS41MyAyLjE0OGEyLjI4NyAyLjI4NyAwIDAxLS4yNDcgMi45NDVsLTIuMyAyLjNhMi4yODQgMi4yODQgMCAwMS0yLjk0NS4yNDdsLTIuMTQxLTEuNTNjLS44MDYuNDI1LTEuNjUuNzc0LTIuNTIgMS4wNDNsLS40NCAyLjZhMi4yODQgMi4yODQgMCAwMS0yLjI1NyAxLjkxTDM5Ljg2NiA2MHptLTQuNjY4LTcuNjIxYy45OTQuNTczIDIuMDYgMS4wMSAzLjE2OSAxLjNhMS4wMzYgMS4wMzYgMCAwMS43NjUuODM0bC41NDEgMy4yNDdhLjIuMiAwIDAwLjIuMTY5aDMuMjU0YS4yLjIgMCAwMC4yLS4xNjlsLjU0OS0zLjI0N2ExLjAyNiAxLjAyNiAwIDAxLjc2NS0uODM0IDEyLjM2IDEyLjM2IDAgMDAzLjIzOS0xLjM0NSAxLjA0NiAxLjA0NiAwIDAxMS4xMzYuMDQ3bDIuNjgyIDEuOTA5YS4xOTIuMTkyIDAgMDAuMTk2LjAyNC4yLjIgMCAwMC4wNjctLjA0NmwyLjMtMi4zYS4yMS4yMSAwIDAwLjAyMy0uMjYzbC0xLjkwOS0yLjY5YTEuMDQyIDEuMDQyIDAgMDEtLjA0Ni0xLjEzNWMuNi0xLjAxIDEuMDUzLTIuMSAxLjM0NS0zLjIzOWExLjA0IDEuMDQgMCAwMS44MzUtLjc2NmwzLjI0Ni0uNTQxYS4yLjIgMCAwMC4xNy0uMmguMDA3VjM5Ljg4YS4xOTkuMTk5IDAgMDAtLjE3LS4ybC0zLjI0Ni0uNTQ5YTEuMDIzIDEuMDIzIDAgMDEtLjgzNC0uNzY1IDEyLjM5OSAxMi4zOTkgMCAwMC0xLjM0NS0zLjIzOCAxLjA0NiAxLjA0NiAwIDAxLjA0Ny0xLjEzN2wxLjkwOS0yLjY4YS4yMS4yMSAwIDAwLS4wMjMtLjI2NWwtMi4zLTIuM2EuMjEuMjEgMCAwMC0uMTQ3LS4wNjIuMjMuMjMgMCAwMC0uMTE2LjA0TDQ5LjA0IDMwLjY0YTEuMDQzIDEuMDQzIDAgMDEtMS4xMzYuMDQ3IDEyLjUxMyAxMi41MTMgMCAwMC0zLjMxNi0xLjM2IDEuMDQ4IDEuMDQ4IDAgMDEtLjc3My0uODQzbC0uNTQxLTMuMjIzYS4yLjIgMCAwMC0uMi0uMTdIMzkuODJhLjIuMiAwIDAwLS4yLjE3bC0uNTU2IDMuMjdhMS4wNiAxLjA2IDAgMDEtLjc2Ni44MzQgMTIuMjQgMTIuMjQgMCAwMC0zLjIzIDEuMzYxIDEuMDU5IDEuMDU5IDAgMDEtMS4xNDQtLjA0N2wtMi42NjctMS45YS4yLjIgMCAwMC0uMjYzLjAyM2wtMi4zIDIuM2EuMjExLjIxMSAwIDAwLS4wMjIuMjY0bDEuOTI0IDIuN2ExLjAzNSAxLjAzNSAwIDAxLjA1NCAxLjEzIDEyLjMyNiAxMi4zMjYgMCAwMC0xLjMyMSAzLjI0NiAxLjA0NSAxLjA0NSAwIDAxLS44NDMuNzcybC0zLjIyMy41NGEuMi4yIDAgMDAtLjE3LjIwMXYzLjI1M2EuMi4yIDAgMDAuMTcuMmwzLjI3LjU1NmExLjA2IDEuMDYgMCAwMS44MzUuNzY2IDEyLjIzNyAxMi4yMzcgMCAwMDEuMzYgMy4yMyAxLjA2IDEuMDYgMCAwMS0uMDQ2IDEuMTQ1bC0xLjkgMi42NjZhLjIwOS4yMDkgMCAwMC4wMjMuMjYzbDIuMyAyLjNhLjIwOC4yMDggMCAwMC4xNDcuMDYxLjIzNS4yMzUgMCAwMC4xMTYtLjAzOGwyLjcwNS0xLjkyNWMuMTc1LS4xMjcuMzg1LS4xOTQuNi0uMTkzLjE4NSAwIC4zNjYuMDQ4LjUyNy4xMzloLS4wMDJ6TTMzLjUyIDQxLjQ5NmE3Ljk4NCA3Ljk4NCAwIDExMTUuOTY4LjAwNCA3Ljk4NCA3Ljk4NCAwIDAxLTE1Ljk2OC0uMDA1di4wMDF6bTIuMDg3IDBhNS45IDUuOSAwIDEwMTEuOC4wMDIgNS45IDUuOSAwIDAwLTExLjgtLjAwM3YuMDAxelwiLFxuICAgIGZpbGw6IFwiIzQwOTc1RlwiXG4gIH0pKSk7XG59XG5leHBvcnQgZGVmYXVsdCBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU9ESWlJR2hsYVdkb2REMGlPRElpSUhacFpYZENiM2c5SWpBZ01DQTRNaUE0TWlJZ1ptbHNiRDBpYm05dVpTSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklqNEtQSEJoZEdnZ1pEMGlUVFUwSURCSU1qaERNVEl1TlRNMklEQWdNQ0F4TWk0MU16WWdNQ0F5T0ZZMU5FTXdJRFk1TGpRMk5DQXhNaTQxTXpZZ09ESWdNamdnT0RKSU5UUkROamt1TkRZMElEZ3lJRGd5SURZNUxqUTJOQ0E0TWlBMU5GWXlPRU00TWlBeE1pNDFNellnTmprdU5EWTBJREFnTlRRZ01Gb2lJR1pwYkd3OUlpTkZORVpHUlVVaUx6NEtQSEJoZEdnZ1pEMGlUVE01TGpnMk5pQTJNRU16T1M0ek1qUTBJRFl3TGpBd01Ea2dNemd1T0RBd01pQTFPUzQ0TURreklETTRMak00TmpnZ05Ua3VORFU1TlVNek55NDVOek0wSURVNUxqRXdPVFlnTXpjdU5qazNOeUExT0M0Mk1qUTBJRE0zTGpZd09TQTFPQzR3T1RBeFRETTNMakUzTmlBMU5TNDBPVU16Tmk0ek16TXpJRFUxTGpJek1EZ2dNelV1TlRFMU5pQTFOQzQ0T1RZeElETTBMamN6TXlBMU5DNDBPVXd6TWk0MU5qRWdOVFl1TURNME9VTXpNaTR4TnpZMklEVTJMak14TXpNZ016RXVOekV6TnlBMU5pNDBOakkxSURNeExqSXpPU0ExTmk0ME5qQTVRek13TGprek9EWWdOVFl1TkRZeE1pQXpNQzQyTkRFZ05UWXVOREF4T1NBek1DNHpOak0ySURVMkxqSTROalJETXpBdU1EZzJNaUExTmk0eE56QTVJREk1TGpnek5EVWdOVFl1TURBeE5pQXlPUzQyTWpNZ05UVXVOemc0TVV3eU55NHpNak1nTlRNdU5EZzRRekkyTGprek9EZ2dOVE11TVRBMk5DQXlOaTQzTURNZ05USXVOakF3TmlBeU5pNDJOVGM0SURVeUxqQTJNVU15Tmk0Mk1USTFJRFV4TGpVeU1UUWdNall1TnpZd09DQTFNQzQ1T0RNeUlESTNMakEzTmlBMU1DNDFORE5NTWpndU5UazVJRFE0TGpReU5URkRNamd1TVRZMk9DQTBOeTQyTWpNeElESTNMamd4TWpVZ05EWXVOemd4TnlBeU55NDFOREVnTkRVdU9URXlNVXd5TkM0NU1UTWdORFV1TkRZMU1VTXlOQzR6TnpZNUlEUTFMak0zTmpZZ01qTXVPRGc1T1NBME5TNHdPVGs1SURJekxqVXpPVE1nTkRRdU5qZzBPRU15TXk0eE9EZzNJRFEwTGpJMk9UY2dNakl1T1RrM05TQTBNeTQzTkRNeklESXpJRFF6TGpKV016a3VPVFEzUXpJeUxqazVPRGtnTXprdU5EQTFOQ0F5TXk0eE9UQTBJRE00TGpnNE1TQXlNeTQxTkRBeklETTRMalEyTnpWRE1qTXVPRGt3TWlBek9DNHdOVFF4SURJMExqTTNOVGNnTXpjdU56YzROQ0F5TkM0NU1TQXpOeTQyT0RrNVRESTNMalEzTmlBek55NHlOVGN4UXpJM0xqY3pOellnTXpZdU16Z3pOeUF5T0M0d09ERTRJRE0xTGpVek56RWdNamd1TlRBMElETTBMamN5T1V3eU5pNDVOVGtnTXpJdU5UVTJPVU15Tmk0Mk5EVXlJRE15TGpFeE5qRWdNall1TkRrM055QXpNUzQxTnpnMUlESTJMalUwTWprZ016RXVNRE01TTBNeU5pNDFPRGd5SURNd0xqVXdNREVnTWpZdU9ESXpNU0F5T1M0NU9UUTBJREkzTGpJd05pQXlPUzQyTVRJeFRESTVMalV4TnlBeU55NHpNVEpETWprdU9EazVJREkyTGpreU9EWWdNekF1TkRBME9DQXlOaTQyT1RNeUlETXdMamswTkRJZ01qWXVOalE0UXpNeExqUTRNellnTWpZdU5qQXlOeUF6TWk0d01qRTFJREkyTGpjMU1EVWdNekl1TkRZeUlESTNMakEyTkRsTU16UXVOVGc0SURJNExqVTVOa016TlM0ek9EazBJREk0TGpFMk16RWdNell1TWpNd05pQXlOeTQ0TURnMklETTNMakVnTWpjdU5UTTNNVXd6Tnk0MU5EZ2dNalF1T1RBNE9VTXpOeTQyTXpZNElESTBMak0zTlRjZ016Y3VPVEV4T0NBeU15NDRPVEV6SURNNExqTXlORElnTWpNdU5UUXhPRU16T0M0M016WTFJREl6TGpFNU1qSWdNemt1TWpVNU5DQXlNeTR3TURBeUlETTVMamdnTWpOSU5ETXVNRFUwUXpRekxqVTVOVFFnTWpJdU9UazVNU0EwTkM0eE1UazJJREl6TGpFNU1EUWdORFF1TlRNeklESXpMalUwUXpRMExqazBOalFnTWpNdU9EZzVOeUEwTlM0eU1qSXhJREkwTGpNM05Ea2dORFV1TXpFeElESTBMamt3T0RsTU5EVXVOelF6SURJM0xqUTNOVEZETkRZdU5qUTNJREkzTGpjME56UWdORGN1TlRJeU1TQXlPQzR4TURjMElEUTRMak0xTmlBeU9DNDFOVEF4VERVd0xqVXdOU0F5Tnk0d01rTTFNQzQ0T0RreUlESTJMamMwTVRjZ05URXVNelV4TnlBeU5pNDFPVEkySURVeExqZ3lOaUF5Tmk0MU9UUkROVEl1TVRJMk5DQXlOaTQxT1RNMklEVXlMalF5TkNBeU5pNDJOVEkzSURVeUxqY3dNVE1nTWpZdU56WTRNVU0xTWk0NU56ZzNJREkyTGpnNE16UWdOVE11TWpNd05TQXlOeTR3TlRJNElEVXpMalEwTWlBeU55NHlOall4VERVMUxqYzBNaUF5T1M0MU5qVTVRelUyTGpFeU5qVWdNamt1T1RRM05pQTFOaTR6TmpJMElETXdMalExTXpnZ05UWXVOREEzTnlBek1DNDVPVE0zUXpVMkxqUTFNeUF6TVM0MU16TTFJRFUyTGpNd05EWWdNekl1TURjeE5pQTFOUzQ1T0RrZ016SXVOVEV5VERVMExqUTFPU0F6TkM0Mk5UTXhRelUwTGpnNE5ETWdNelV1TkRVNE5TQTFOUzR5TXpNMUlETTJMak13TVRrZ05UVXVOVEF5SURNM0xqRTNNakZNTlRndU1UQXlJRE0zTGpZeE0wTTFPQzQyTXpVM0lETTNMalk1T1RjZ05Ua3VNVEl3TkNBek55NDVOelV4SURVNUxqUTJPQ0F6T0M0ek9Ea3lRelU1TGpneE5UY2dNemd1T0RBek1pQTJNQzR3TURNZ016a3VNekk0TXlBMU9TNDVPVFlnTXprdU9EWTRPVlkwTXk0eE1qTXhRelU1TGprNU55QTBNeTQyTmpRMUlEVTVMamd3TlRVZ05EUXVNVGc0TnlBMU9TNDBOVFU1SURRMExqWXdNakZETlRrdU1UQTJNaUEwTlM0d01UVTBJRFU0TGpZeU1URWdORFV1TWpreElEVTRMakE0TnlBME5TNHpOems1VERVMUxqUTROeUEwTlM0NE1UTkROVFV1TWpFNE9DQTBOaTQyT0RNM0lEVTBMamcyT1RZZ05EY3VOVEkzTkNBMU5DNDBORFFnTkRndU16TXpURFUxTGprM05DQTFNQzQwT0RGRE5UWXVNamczT1NBMU1DNDVNakUzSURVMkxqUXpOVE1nTlRFdU5EVTVOaUExTmk0ek9UQXhJRFV4TGprNU9EaEROVFl1TXpRME9TQTFNaTQxTXpnZ05UWXVNVEE1T1NBMU15NHdORE0zSURVMUxqY3lOeUExTXk0ME1qWk1OVE11TkRJM0lEVTFMamN5TmpGRE5UTXVNRFExSURVMkxqRXdPVFVnTlRJdU5UTTVNaUExTmk0ek5EUTNJRFV4TGprNU9Ua2dOVFl1TXpnNU9VTTFNUzQwTmpBMUlEVTJMalF6TlRFZ05UQXVPVEl5TmlBMU5pNHlPRGMwSURVd0xqUTRNaUExTlM0NU56STVURFE0TGpNME1TQTFOQzQwTkRNeFF6UTNMalV6TlRFZ05UUXVPRFk0TVNBME5pNDJPVEUxSURVMUxqSXhOeklnTkRVdU9ESXhJRFUxTGpRNE5qRk1ORFV1TXpneElEVTRMakE0TlRsRE5EVXVNamt5TkNBMU9DNDJNakF5SURRMUxqQXhOamNnTlRrdU1UQTFOeUEwTkM0Mk1ETXpJRFU1TGpRMU5UWkRORFF1TVRnNU9TQTFPUzQ0TURVMElEUXpMalkyTlRZZ05Ua3VPVGszSURRekxqRXlOQ0ExT1M0NU9UWXhURE01TGpnMk5pQTJNRnBOTXpVdU1UazRJRFV5TGpNM09EbERNell1TVRreE55QTFNaTQ1TlRFMUlETTNMakkxTnpVZ05UTXVNemc0TnlBek9DNHpOamNnTlRNdU5qYzVRek00TGpVMk1UY2dOVE11TnpJNE9DQXpPQzQzTXpjMklEVXpMamd6TkRNZ016Z3VPRGN6TlNBMU15NDVPREkwUXpNNUxqQXdPVE1nTlRRdU1UTXdOU0F6T1M0d09Ua3hJRFUwTGpNeE5EY2dNemt1TVRNeUlEVTBMalV4TWpsTU16a3VOamN6SURVM0xqYzJRek01TGpZNE1EVWdOVGN1T0RBM05TQXpPUzQzTURRNElEVTNMamcxTURnZ016a3VOelF4TlNBMU55NDRPREU0UXpNNUxqYzNPRElnTlRjdU9URXlPU0F6T1M0NE1qUTVJRFUzTGpreU9UVWdNemt1T0RjeklEVTNMamt5T1VnME15NHhNamRETkRNdU1UYzFNU0ExTnk0NU1qazFJRFF6TGpJeU1UZ2dOVGN1T1RFeU9TQTBNeTR5TlRnMUlEVTNMamc0TVRoRE5ETXVNamsxTXlBMU55NDROVEE0SURRekxqTXhPVFlnTlRjdU9EQTNOU0EwTXk0ek1qY2dOVGN1TnpaTU5ETXVPRGMySURVMExqVXhNamxETkRNdU9UQTNOeUExTkM0ek1UUXlJRFF6TGprNU56RWdOVFF1TVRJNU1pQTBOQzR4TXpNeElEVXpMams0TVVNME5DNHlOamt5SURVekxqZ3pNamNnTkRRdU5EUTFPQ0ExTXk0M01qYzJJRFEwTGpZME1TQTFNeTQyTnpsRE5EVXVOemM1TVNBMU15NHpPRFk1SURRMkxqZzJPVGdnTlRJdU9UTTBJRFEzTGpnNElEVXlMak16TkVNME9DNHdOVE00SURVeUxqSXpNVFFnTkRndU1qVXpOQ0ExTWk0eE9ERTBJRFE0TGpRMU5TQTFNaTR4T0RrM1F6UTRMalkxTmpVZ05USXVNVGs0SURRNExqZzFNVFFnTlRJdU1qWTBOaUEwT1M0d01UWWdOVEl1TXpneE1VdzFNUzQyT1RnZ05UUXVNamxETlRFdU56TXhNeUExTkM0ek1UVTNJRFV4TGpjM01pQTFOQzR6TWprNElEVXhMamd4TkNBMU5DNHpNekF4UXpVeExqZzBNVFVnTlRRdU16TXdOQ0ExTVM0NE5qZzNJRFUwTGpNeU5Ea2dOVEV1T0RrMElEVTBMak14TkRKRE5URXVPVEU1TXlBMU5DNHpNRE0xSURVeExqazBNakVnTlRRdU1qZzNPU0ExTVM0NU5qRWdOVFF1TWpZNE1VdzFOQzR5TmpFZ05URXVPVFk0UXpVMExqSTVORFFnTlRFdU9UTXpOQ0ExTkM0ek1UUTRJRFV4TGpnNE9EUWdOVFF1TXpFNUlEVXhMamcwTURaRE5UUXVNekl6TWlBMU1TNDNPVEkzSURVMExqTXhNRGtnTlRFdU56UTBPU0ExTkM0eU9EUWdOVEV1TnpBMU1VdzFNaTR6TnpVZ05Ea3VNREUwT1VNMU1pNHlOVGcxSURRNExqZzFNRFFnTlRJdU1Ua3lNU0EwT0M0Mk5UVTRJRFV5TGpFNE5DQTBPQzQwTlRRelF6VXlMakUzTlRnZ05EZ3VNalV5T1NBMU1pNHlNall5SURRNExqQTFNek1nTlRJdU16STVJRFEzTGpnM09UbEROVEl1T1RJNE9DQTBOaTQ0TmprMUlEVXpMak00TVRjZ05EVXVOemM1TVNBMU15NDJOelFnTkRRdU5qUXhNVU0xTXk0M01qUXhJRFEwTGpRME5qTWdOVE11T0RJNU55QTBOQzR5TnlBMU15NDVOemM1SURRMExqRXpORU0xTkM0eE1qWXhJRFF6TGprNU9ERWdOVFF1TXpFd05pQTBNeTQ1TURneUlEVTBMalV3T1NBME15NDROelZNTlRjdU56VTFJRFF6TGpNek5FTTFOeTQ0TURJM0lEUXpMak15TmpnZ05UY3VPRFEyTWlBME15NHpNREkySURVM0xqZzNOelFnTkRNdU1qWTFPVU0xTnk0NU1EZzNJRFF6TGpJeU9URWdOVGN1T1RJMU5pQTBNeTR4T0RJeklEVTNMamt5TlNBME15NHhNelJJTlRjdU9UTXlWak01TGpnM09UbEROVGN1T1RNeU5pQXpPUzQ0TXpFM0lEVTNMamt4TlRjZ016a3VOemcxSURVM0xqZzRORFFnTXprdU56UTRNME0xTnk0NE5UTXlJRE01TGpjeE1UVWdOVGN1T0RBNU55QXpPUzQyT0RjeUlEVTNMamMyTWlBek9TNDJOems1VERVMExqVXhOaUF6T1M0eE16RXhRelUwTGpNeE56SWdNemt1TURrNU9DQTFOQzR4TXpJZ016a3VNREV3TkNBMU15NDVPRE0ySURNNExqZzNORE5ETlRNdU9ETTFNeUF6T0M0M016Z3lJRFV6TGpjek1EUWdNemd1TlRZeE5DQTFNeTQyT0RJZ016Z3VNelkyUXpVekxqTTRPVE1nTXpjdU1qSTROQ0ExTWk0NU16WTFJRE0yTGpFek9ERWdOVEl1TXpNM0lETTFMakV5TnpsRE5USXVNak0wTXlBek5DNDVOVFF4SURVeUxqRTROQ0F6TkM0M05UUXpJRFV5TGpFNU1qUWdNelF1TlRVeU5VTTFNaTR5TURBM0lETTBMak0xTURjZ05USXVNalkzTXlBek5DNHhOVFUzSURVeUxqTTROQ0F6TXk0NU9URk1OVFF1TWpreklETXhMak14TURGRE5UUXVNekl3TVNBek1TNHlOekF4SURVMExqTXpNallnTXpFdU1qSXhPU0ExTkM0ek1qZzBJRE14TGpFM016aEROVFF1TXpJME1pQXpNUzR4TWpVM0lEVTBMak13TXpZZ016RXVNRGd3TmlBMU5DNHlOeUF6TVM0d05EVTVURFV4TGprM0lESTRMamMwTmpGRE5URXVPVFV3T0NBeU9DNDNNalkySURVeExqa3lOemtnTWpndU56RXhNU0ExTVM0NU1ESTNJREk0TGpjd01EUkROVEV1T0RjM05TQXlPQzQyT0RrNElEVXhMamcxTURRZ01qZ3VOamcwTWlBMU1TNDRNak1nTWpndU5qZzBNVU0xTVM0M09ERTBJREk0TGpZNE5qY2dOVEV1TnpReE5DQXlPQzQzTURBMUlEVXhMamN3TnlBeU9DNDNNalF4VERRNUxqQTBJRE13TGpZek9UbERORGd1T0RjMU5TQXpNQzQzTlRZNElEUTRMalk0TURZZ016QXVPREl6TkNBME9DNDBOemtnTXpBdU9ETXhPRU0wT0M0eU56YzBJRE13TGpnME1ERWdORGd1TURjM05pQXpNQzQzT0RrNUlEUTNMamt3TkNBek1DNDJPRGRETkRZdU9EWTVOeUF6TUM0d056WTVJRFExTGpjMU1qa2dNamt1TmpFNE9DQTBOQzQxT0RnZ01qa3VNekkyT1VNME5DNHpPVEUwSURJNUxqSTNOalFnTkRRdU1qRXpOaUF5T1M0eE5qazVJRFEwTGpBM05qUWdNamt1TURJd00wTTBNeTQ1TXpreElESTRMamczTURZZ05ETXVPRFE0TkNBeU9DNDJPRFF5SURRekxqZ3hOU0F5T0M0ME9ETTVURFF6TGpJM05DQXlOUzR5TmpGRE5ETXVNalkyT0NBeU5TNHlNVE16SURRekxqSTBNallnTWpVdU1UWTVPU0EwTXk0eU1EVTRJREkxTGpFek9EZERORE11TVRZNU1TQXlOUzR4TURjMElEUXpMakV5TWpNZ01qVXVNRGt3TlNBME15NHdOelFnTWpVdU1Ea3hNVWd6T1M0NE1rTXpPUzQzTnpFNElESTFMakE1TURVZ016a3VOekkxSURJMUxqRXdOelFnTXprdU5qZzRNaUF5TlM0eE16ZzNRek01TGpZMU1UVWdNalV1TVRZNU9TQXpPUzQyTWpjeklESTFMakl4TXpNZ016a3VOaklnTWpVdU1qWXhURE01TGpBMk5DQXlPQzQxTXpGRE16a3VNREk0TWlBeU9DNDNNamd5SURNNExqa3pOek1nTWpndU9URXhNaUF6T0M0NE1ERTNJREk1TGpBMU9EaERNemd1TmpZMk1TQXlPUzR5TURZMUlETTRMalE1TVRVZ01qa3VNekV5TmlBek9DNHlPVGdnTWprdU16WTFRek0zTGpFMk1UWWdNamt1TmpZeE5DQXpOaTR3TnpNNElETXdMakV4T1RnZ016VXVNRFk0SURNd0xqY3lOakZETXpRdU9Ea3lPU0F6TUM0NE1qZzRJRE0wTGpZNU1pQXpNQzQ0TnpnNUlETTBMalE0T1RFZ016QXVPRGN3TmtNek5DNHlPRFl6SURNd0xqZzJNak1nTXpRdU1Ea3dNU0F6TUM0M09UVTNJRE16TGpreU5DQXpNQzQyTnpsTU16RXVNalUzSURJNExqYzNPVEZETXpFdU1qRTNPU0F5T0M0M05UQXpJRE14TGpFMk9UWWdNamd1TnpNMk55QXpNUzR4TWpFeUlESTRMamMwTVVNek1TNHdOekk0SURJNExqYzBOVElnTXpFdU1ESTNOaUF5T0M0M05qWTVJRE13TGprNU5DQXlPQzQ0TURKTU1qZ3VOamswSURNeExqRXdNakZETWpndU5qWXdPQ0F6TVM0eE16WTVJREk0TGpZME1EUWdNekV1TVRneU1pQXlPQzQyTXpZMElETXhMakl6TURKRE1qZ3VOak15TkNBek1TNHlOemd6SURJNExqWTBOU0F6TVM0ek1qWXhJREk0TGpZM01pQXpNUzR6TmpaTU16QXVOVGsySURNMExqQTJOVGxETXpBdU56RXpPQ0F6TkM0eU1qZzNJRE13TGpjNE1UY2dNelF1TkRJeU5DQXpNQzQzT1RFeklETTBMall5TXpGRE16QXVPREF3T0NBek5DNDRNak0zSURNd0xqYzFNVGdnTXpVdU1ESXlPQ0F6TUM0Mk5TQXpOUzR4T1RaRE16QXVNRFUzTXlBek5pNHlNRGsySURJNUxqWXhNalVnTXpjdU16QXlOU0F5T1M0ek1qa2dNemd1TkRReE9VTXlPUzR5TnpnM0lETTRMall6T0RZZ01qa3VNVGN5TVNBek9DNDRNVFl6SURJNUxqQXlNalFnTXpndU9UVXpORU15T0M0NE56STNJRE01TGpBNU1EVWdNamd1TmpnMk15QXpPUzR4T0RFeUlESTRMalE0TmlBek9TNHlNVFF4VERJMUxqSTJNeUF6T1M0M05UUTVRekkxTGpJeE5UTWdNemt1TnpZeU1TQXlOUzR4TnpFNUlETTVMamM0TmpVZ01qVXVNVFF3TmlBek9TNDRNak15UXpJMUxqRXdPVFFnTXprdU9EWWdNalV1TURreU5TQXpPUzQ1TURZNElESTFMakE1TXlBek9TNDVOVFV4VmpRekxqSXdPRU15TlM0d09USTFJRFF6TGpJMU5qSWdNalV1TVRBNU5DQTBNeTR6TURNeElESTFMakUwTURZZ05ETXVNek01T0VNeU5TNHhOekU1SURRekxqTTNOallnTWpVdU1qRTFNeUEwTXk0ME1EQTNJREkxTGpJMk15QTBNeTQwTURoTU1qZ3VOVE16SURRekxqazJOREZETWpndU56TXdOQ0EwTXk0NU9UazNJREk0TGpreE16WWdORFF1TURrd05TQXlPUzR3TmpFMUlEUTBMakl5TmpGRE1qa3VNakE1TXlBME5DNHpOakUzSURJNUxqTXhOVFlnTkRRdU5UTTJOQ0F5T1M0ek5qZ2dORFF1TnpORE1qa3VOalkwSURRMUxqZzJOak1nTXpBdU1USXlJRFEyTGprMU5ERWdNekF1TnpJNElEUTNMamsyUXpNd0xqZ3pNRGtnTkRndU1UTTFNaUF6TUM0NE9ERXlJRFE0TGpNek5qTWdNekF1T0Rjek1TQTBPQzQxTXprelF6TXdMamcyTkRrZ05EZ3VOelF5TXlBek1DNDNPVGcySURRNExqa3pPRFlnTXpBdU5qZ3lJRFE1TGpFd05Vd3lPQzQzT0RJZ05URXVOemN4UXpJNExqYzFOU0ExTVM0NE1UQTRJREk0TGpjME1qVWdOVEV1T0RVNE5pQXlPQzQzTkRZM0lEVXhMamt3TmpWRE1qZ3VOelV3T1NBMU1TNDVOVFEwSURJNExqYzNNVFVnTlRFdU9UazVOQ0F5T0M0NE1EVWdOVEl1TURNek9Vd3pNUzR4TURVZ05UUXVNek0wUXpNeExqRXlORE1nTlRRdU16VXpOQ0F6TVM0eE5EY3lJRFUwTGpNMk9EY2dNekV1TVRjeU5DQTFOQzR6TnpreVF6TXhMakU1TnpZZ05UUXVNemc1TmlBek1TNHlNalEzSURVMExqTTVOVEVnTXpFdU1qVXlJRFUwTGpNNU5VTXpNUzR5T1RNMElEVTBMak01TWpjZ016RXVNek16TkNBMU5DNHpOemsySURNeExqTTJPQ0ExTkM0ek5UWTVURE0wTGpBM015QTFNaTQwTXpFNVF6TTBMakkwTnpVZ05USXVNekExTlNBek5DNDBOVGMySURVeUxqSXpPREVnTXpRdU5qY3pJRFV5TGpJek9VTXpOQzQ0TlRjM0lEVXlMakl6T1RNZ016VXVNRE01TWlBMU1pNHlPRGN4SURNMUxqSWdOVEl1TXpjM09Vd3pOUzR4T1RnZ05USXVNemM0T1ZwTk16TXVOVElnTkRFdU5EazJNVU16TXk0MU1qQXlJRE01TGpreE56RWdNek11T1RnNE5pQXpPQzR6TnpNMklETTBMamcyTmlBek55NHdOakE0UXpNMUxqYzBNelFnTXpVdU56UTRJRE0yTGprNU1ETWdNelF1TnpJME9DQXpPQzQwTkRreUlETTBMakV5TURaRE16a3VPVEE0SURNekxqVXhOalFnTkRFdU5URXpNaUF6TXk0ek5UZzBJRFF6TGpBMk1Ua2dNek11TmpZMk5VTTBOQzQyTVRBMUlETXpMamszTkRZZ05EWXVNRE16SURNMExqY3pOU0EwTnk0eE5EazJJRE0xTGpnMU1UWkRORGd1TWpZMk1TQXpOaTQ1TmpneElEUTVMakF5TmpVZ016Z3VNemt3TmlBME9TNHpNelEySURNNUxqa3pPVEpETkRrdU5qUXlOeUEwTVM0ME9EYzVJRFE1TGpRNE5EWWdORE11TURrek1pQTBPQzQ0T0RBMUlEUTBMalUxTWtNME9DNHlOell6SURRMkxqQXhNRGtnTkRjdU1qVXpNU0EwTnk0eU5UYzJJRFExTGprME1ETWdORGd1TVRNMVF6UTBMall5TnpVZ05Ea3VNREV5TkNBME15NHdPRFFnTkRrdU5EZ3dPQ0EwTVM0MU1EVWdORGt1TkRneFF6TTVMak00TnpRZ05Ea3VORGM1T1NBek55NHpOVFk1SURRNExqWXpPREVnTXpVdU9EVTVOaUEwTnk0eE5EQTJRek0wTGpNMk1qTWdORFV1TmpRek1pQXpNeTQxTWpBNElEUXpMall4TWpjZ016TXVOVElnTkRFdU5EazFNVlkwTVM0ME9UWXhXazB6TlM0Mk1EY2dOREV1TkRrMk1VTXpOUzQyTURjZ05ESXVOall6SURNMUxqazFNeUEwTXk0NE1ETTNJRE0yTGpZd01UTWdORFF1Tnpjek9VTXpOeTR5TkRrMklEUTFMamMwTkRJZ016Z3VNVGN4TVNBME5pNDFNREF5SURNNUxqSTBPVElnTkRZdU9UUTJPRU0wTUM0ek1qY3pJRFEzTGpNNU16TWdOREV1TlRFek5pQTBOeTQxTVRBMElEUXlMalkxT0NBME55NHlPREkzUXpRekxqZ3dNalVnTkRjdU1EVTFNU0EwTkM0NE5UTTRJRFEyTGpRNU16RWdORFV1TmpjNE9TQTBOUzQyTmpoRE5EWXVOVEEwTVNBME5DNDROREk0SURRM0xqQTJOaUEwTXk0M09URTFJRFEzTGpJNU16Y2dOREl1TmpRM1F6UTNMalV5TVRNZ05ERXVOVEF5TlNBME55NDBNRFExSURRd0xqTXhOalFnTkRZdU9UVTNPU0F6T1M0eU16Z3pRelEyTGpVeE1UUWdNemd1TVRZd01pQTBOUzQzTlRVeElETTNMakl6T0RZZ05EUXVOemcwT1NBek5pNDFPVEF6UXpRekxqZ3hORFlnTXpVdU9UUXlJRFF5TGpZM016a2dNelV1TlRrMklEUXhMalV3TnlBek5TNDFPVFpETXprdU9UUXlOQ0F6TlM0MU9UWWdNemd1TkRReE9TQXpOaTR5TVRjMUlETTNMak16TlRRZ016Y3VNekl6TjBNek5pNHlNamtnTXpndU5ETWdNelV1TmpBM015QXpPUzQ1TXpBMUlETTFMall3TnlBME1TNDBPVFV4VmpReExqUTVOakZhSWlCbWFXeHNQU0lqTkRBNU56VkdJaTgrQ2p3dmMzWm5QZ289XCI7XG5leHBvcnQgeyBTdmdTZXR0aW5nIGFzIFJlYWN0Q29tcG9uZW50IH07IiwidmFyIF9wYXRoLCBfcGF0aDIsIF9wYXRoMywgX3BhdGg0O1xuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiA/IE9iamVjdC5hc3NpZ24uYmluZCgpIDogZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmZ1bmN0aW9uIFN2Z1NtYXJ0KHByb3BzKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCBfZXh0ZW5kcyh7XG4gICAgd2lkdGg6IDgyLFxuICAgIGhlaWdodDogODIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICB9LCBwcm9wcyksIF9wYXRoIHx8IChfcGF0aCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgb3BhY2l0eTogMC4xMDIsXG4gICAgZDogXCJNNTQgMEgyOEMxMi41MzYgMCAwIDEyLjUzNiAwIDI4djI2YzAgMTUuNDY0IDEyLjUzNiAyOCAyOCAyOGgyNmMxNS40NjQgMCAyOC0xMi41MzYgMjgtMjhWMjhDODIgMTIuNTM2IDY5LjQ2NCAwIDU0IDB6XCIsXG4gICAgZmlsbDogXCIjRkY0MzYxXCJcbiAgfSkpLCBfcGF0aDIgfHwgKF9wYXRoMiA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNNDkuMjI5IDUxLjQ1NmE2LjAzMiA2LjAzMiAwIDAwLS4zMjQtMi45MTQgNy4zMDEgNy4zMDEgMCAwMC0yLjg1MS0yLjY4N2MtLjM1Ny0uMjM1LS41ODUtLjM3OC0uODE5LS41MjUtMS41MzctLjk2OS0zLjE1Mi0xLjk4Ny0zLjczNC0zLjQyLS41OCAxLjQzMi0yLjIgMi40NS0zLjczMiAzLjQxOS0uMzA4LjE5NS0uNjExLjM4NS0uODIxLjUyM2E3LjI0NyA3LjI0NyAwIDAwLTIuODQ1IDIuNzA5IDYuMDc0IDYuMDc0IDAgMDAtLjMyOCAyLjg5M2wxNS40NTQuMDAyem0xLjQ2Ny0zLjc0MWE4Ljk3NCA4Ljk3NCAwIDAxLjQzIDQuNzMzLjk4OC45ODggMCAwMS0uOTg5Ljk4NkgzMi44NjJhLjk4NS45ODUgMCAwMS0uOTgxLS45IDkuMTYgOS4xNiAwIDAxLjQyOS00Ljc4OWMuNTg3LTEuMjg0IDEuNjY2LTIuMjk0IDMuNTU3LTMuNTM3LjMyNy0uMjE1LjU4OS0uMzgxLjg1MS0uNTQ1IDEuNDY4LS45MjYgMy4wMjktMS45MTEgMy4wMjktMi45IDAtLjk4OS0xLjU2MS0xLjk3MS0zLjAyOS0yLjktLjI2MS0uMTY0LS41MjMtLjMzLS44NTEtLjU0NS0xLjk2My0xLjI5LTMuMDU1LTIuMzkxLTMuNjI2LTMuNzcyYTEwLjE2MyAxMC4xNjMgMCAwMS0uMzY1LTQuOTQ3Ljk5Ljk5IDAgMDEuOTg4LS45NzhoMTcuMjdhLjk4NS45ODUgMCAwMS45ODEuODkyIDEwLjMgMTAuMyAwIDAxLS4zNTcgNS4wMjhjLS41NyAxLjM4LTEuNjYzIDIuNDgyLTMuNjI2IDMuNzcyLS4zMzMuMjE5LS41OS4zOC0uODUyLjU0Ni0xLjQ2Ny45MjUtMy4wMjkgMS45MS0zLjAyOSAyLjlzMS41NjMgMS45NzEgMy4wMzEgMi45Yy4zMzUuMjExLjY3LjQyMy44NDkuNTQxIDEuODkzIDEuMjQ0IDIuOTc2IDIuMjMzIDMuNTY0IDMuNTA4bC4wMDEuMDA3em0tOS4yLTguMWMuNTgxLTEuNDMxIDIuMi0yLjQ0OSAzLjczMy0zLjQxOC4zMDctLjE5NC42MTUtLjM4Ny44Mi0uNTIyYTYuOTMzIDYuOTMzIDAgMDAyLjg4NC0yLjg3NmMuMzQtMS4wMy40NDEtMi4xMjUuMjkzLTMuMkgzMy43N2E3LjA5NSA3LjA5NSAwIDAwLjI5NCAzLjIgNi45MzUgNi45MzUgMCAwMDIuODgzIDIuODc2Yy4yMS4xMzcuNTEzLjMyOS44MjEuNTIyIDEuNTM2Ljk2OCAzLjE1MSAxLjk4NyAzLjczMiAzLjQxOGgtLjAwNHpcIixcbiAgICBmaWxsOiBcIiMzMzNcIlxuICB9KSksIF9wYXRoMyB8fCAoX3BhdGgzID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0zMC43NzMgMjRoMjEuNDVhMi43NjUgMi43NjUgMCAwMTEuOTU1LjgxNCAyLjc3MiAyLjc3MiAwIDAxLjgxMyAxLjk2IDIuNzY4IDIuNzY4IDAgMDEtLjgxNiAxLjk1OCAyLjc2NyAyLjc2NyAwIDAxLTEuOTYuODE1SDMwLjc3M2EyLjc2NSAyLjc2NSAwIDAxLTEuOTU5LS44MTUgMi43NyAyLjc3IDAgMDEtLjgxNS0xLjk1OCAyLjc2NyAyLjc2NyAwIDAxLjgxMy0xLjk1NiAyLjc2MSAyLjc2MSAwIDAxMS45NTUtLjgxNGwuMDA2LS4wMDR6bTIxLjQ1NCAxLjk3OEgzMC43NzNhLjguOCAwIDAwLS41NjIuMjMxLjguOCAwIDAwMCAxLjEyMi44LjggMCAwMC41NjIuMjM0aDIxLjQ1YS43OTEuNzkxIDAgMDAuNzkyLS43OTUuNzk1Ljc5NSAwIDAwLS43OTgtLjc5NGwuMDEuMDAyek0zMC43NzMgNTEuNDU2aDIxLjQ1YTIuNzY4IDIuNzY4IDAgMDExLjk2LjgxNCAyLjc2OSAyLjc2OSAwIDAxLjgxNiAxLjk1NyAyLjc4IDIuNzggMCAwMS0yLjc3MyAyLjc3NEgzMC43NzNhMi43NjUgMi43NjUgMCAwMS0xLjk1OS0uODE1IDIuNzY1IDIuNzY1IDAgMDEtLjgxMy0xLjk1NiAyLjc3IDIuNzcgMCAwMS44MTUtMS45NTcgMi43NyAyLjc3IDAgMDExLjk1OS0uODE0bC0uMDAyLS4wMDN6bTIxLjQ1NCAxLjk3OEgzMC43NzNhLjguOCAwIDAwLS43MzMuNDkyLjguOCAwIDAwLjczNSAxLjEwMWgyMS40NDhhLjguOCAwIDAwLjU2OS0xLjM2Ljc5My43OTMgMCAwMC0uNTYxLS4yMzVsLS4wMDQuMDAyelwiLFxuICAgIGZpbGw6IFwiIzMzM1wiXG4gIH0pKSwgX3BhdGg0IHx8IChfcGF0aDQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTMwLjc3NCA1N2EyLjc3IDIuNzcgMCAwMS0xLjk2LS44MTQgMi43NjMgMi43NjMgMCAwMS45MDEtNC41MTZjLjMzNi0uMTQuNjk3LS4yMTIgMS4wNjEtLjIxMkgzMS44YTcuNjM0IDcuNjM0IDAgMDEuNTA5LTMuNzEyYy41ODctMS4yODMgMS42NjYtMi4yOTQgMy41NTctMy41MzcuMzI3LS4yMTUuNTg5LS4zODEuODUtLjU0NCAxLjQ2OC0uOTI2IDMuMDI5LTEuOTEyIDMuMDI5LTIuOXMtMS41NjItMS45NzEtMy4wMjktMi45YTQwIDQwIDAgMDEtLjg1LS41NDRjLTEuOTYzLTEuMjktMy4wNTUtMi4zOS0zLjYyNi0zLjc3MmE4LjY4MiA4LjY4MiAwIDAxLS40NDMtNGgtMS4wMjVhMi43NjcgMi43NjcgMCAwMS0xLjk2LS44MTQgMi43NTggMi43NTggMCAwMTAtMy45MTUgMi43NTggMi43NTggMCAwMTEuOTU2LS44MTRoMjEuNDUzYTIuNzYxIDIuNzYxIDAgMDExLjk1Ni44MTQgMi43NjMgMi43NjMgMCAwMTAgMy45MTggMi43NjYgMi43NjYgMCAwMS0xLjk2LjgxNEg1MS4yYTguNjgzIDguNjgzIDAgMDEtLjQ0MiA0Yy0uNTcxIDEuMzgxLTEuNjYzIDIuNDgyLTMuNjI2IDMuNzcyLS4zMzIuMjItLjU5LjM4LS44NTEuNTQ1LTEuNDY3LjkyNS0zLjAyOSAxLjkxMS0zLjAyOSAyLjkgMCAuOTg5IDEuNTYzIDEuOTcgMy4wMzIgMi45LjMzNC4yMS42Ny40MjMuODQ5LjU0MSAxLjg5MyAxLjI0NSAyLjk3NiAyLjIzNCAzLjU2NCAzLjUwOGE3LjU2NyA3LjU2NyAwIDAxLjUgMy43NGgxLjAyNWMuNzM1IDAgMS40NC4yOTQgMS45Ni44MTRhMi43NjYgMi43NjYgMCAwMS4wMDIgMy45MThjLS41Mi41Mi0xLjIyNS44MTMtMS45Ni44MTRMMzAuNzc0IDU3em0wLTEuOTc5aDIxLjQ1M2EuOC44IDAgMDAuNzQtMS4wOTguNzkzLjc5MyAwIDAwLS43MzItLjQ5M0gzMC43NzRhLjguOCAwIDAwLS43MzQuNDkyLjguOCAwIDAwLjE3NC44NjdjLjE0OS4xNDguMzUuMjMyLjU2LjIzMnptNi45OTUtOS42OTVhNTcuNjIgNTcuNjIgMCAwMC0uODIxLjUyMyA3LjI0OCA3LjI0OCAwIDAwLTIuODQ1IDIuNzEgNi4wNjIgNi4wNjIgMCAwMC0uMzI4IDIuODkzSDQ5LjIzYTYuMDIgNi4wMiAwIDAwLS4zMjUtMi45MTQgNy4yODkgNy4yODkgMCAwMC0yLjg1MS0yLjY4N2MtLjM1Ny0uMjM1LS41ODUtLjM3OC0uODE4LS41MjYtMS41MzgtLjk2OS0zLjE1My0xLjk4Ny0zLjczNC0zLjQxOS0uNTgzIDEuNDMzLTIuMjAyIDIuNDUyLTMuNzMzIDMuNDJ6bS0zLjctMTIuNTI3YTYuOTQyIDYuOTQyIDAgMDAyLjg4NCAyLjg3NmMuMjEuMTM3LjUxMy4zMjkuODIxLjUyMiAxLjUzNi45NjkgMy4xNTEgMS45ODcgMy43MzEgMy40MTguNTgxLTEuNDMxIDIuMi0yLjQ0OSAzLjczMi0zLjQxOC4zMDctLjE5My42MTUtLjM4Ny44Mi0uNTIyYTYuOTM0IDYuOTM0IDAgMDAyLjg4NC0yLjg3NmMuMzQtMS4wMy40NC0yLjEyNS4yOTMtMy4ySDMzLjc3MWE3LjEwOCA3LjEwOCAwIDAwLjI5MyAzLjIwMWguMDA1em0tMy44NTMtNi41OTFhLjguOCAwIDAwMCAxLjEyMy44LjggMCAwMC41NjMuMjM0aDIxLjQ1M2EuNzkzLjc5MyAwIDAwLjc5NS0uNzk2Ljc5NC43OTQgMCAwMC0uNzk2LS43OTRIMzAuNzc0YS44LjggMCAwMC0uNTYzLjIzM2guMDA1elwiLFxuICAgIGZpbGw6IFwiI0Y1NTc2N1wiXG4gIH0pKSk7XG59XG5leHBvcnQgZGVmYXVsdCBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU9ESWlJR2hsYVdkb2REMGlPRElpSUhacFpYZENiM2c5SWpBZ01DQTRNaUE0TWlJZ1ptbHNiRDBpYm05dVpTSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklqNEtQSEJoZEdnZ2IzQmhZMmwwZVQwaU1DNHhNRElpSUdROUlrMDFOQ0F3U0RJNFF6RXlMalV6TmlBd0lEQWdNVEl1TlRNMklEQWdNamhXTlRSRE1DQTJPUzQwTmpRZ01USXVOVE0ySURneUlESTRJRGd5U0RVMFF6WTVMalEyTkNBNE1pQTRNaUEyT1M0ME5qUWdPRElnTlRSV01qaERPRElnTVRJdU5UTTJJRFk1TGpRMk5DQXdJRFUwSURCYUlpQm1hV3hzUFNJalJrWTBNell4SWk4K0NqeHdZWFJvSUdROUlrMDBPUzR5TWprZ05URXVORFUyUXpRNUxqTTJNak1nTlRBdU5EY3lPQ0EwT1M0eU5URXhJRFE1TGpRM01Ua2dORGd1T1RBMU1TQTBPQzQxTkRKRE5EZ3VNakUzTXlBME55NDBNRE16SURRM0xqSXpNVFFnTkRZdU5EYzBNU0EwTmk0d05UUWdORFV1T0RVME9VTTBOUzQyT1RjZ05EVXVOakU1T1NBME5TNDBOamtnTkRVdU5EYzNJRFExTGpJek5TQTBOUzR6TTBNME15NDJPVGdnTkRRdU16WXhJRFF5TGpBNE16RWdORE11TXpReU9TQTBNUzQxTURFeElEUXhMamt4TURsRE5EQXVPVEl3TVNBME15NHpOREU1SURNNUxqTXdNU0EwTkM0ek5qQTVJRE0zTGpjMk9TQTBOUzR6TWpnNVF6TTNMalEyTVNBME5TNDFNak01SURNM0xqRTFPQ0EwTlM0M01UUWdNell1T1RRNElEUTFMamcxTWtNek5TNDNOamcwSURRMkxqUTNOVGdnTXpRdU56Z3pPU0EwTnk0ME1UTXlJRE0wTGpFd016RWdORGd1TlRZd09VTXpNeTQzTmpBNElEUTVMalE0TkRRZ016TXVOalE0TWlBMU1DNDBOemN6SURNekxqYzNOU0ExTVM0ME5UTTVURFE1TGpJeU9TQTFNUzQwTlRaYVRUVXdMalk1TmlBME55NDNNVFZETlRFdU1qWXlNU0EwT1M0eU1qVXpJRFV4TGpReE1EY2dOVEF1T0RZd015QTFNUzR4TWpZeElEVXlMalEwT0VNMU1TNHhNalUxSURVeUxqY3dPVGdnTlRFdU1ESXhJRFV5TGprMk1EY2dOVEF1T0RNMU5pQTFNeTR4TkRVMlF6VXdMalkxTURJZ05UTXVNek13TlNBMU1DNHpPVGc1SURVekxqUXpORElnTlRBdU1UTTNJRFV6TGpRek5FZ3pNaTQ0TmpKRE16SXVOakUxTmlBMU15NDBNek01SURNeUxqTTNPREVnTlRNdU16UXhOQ0F6TWk0eE9UWTFJRFV6TGpFM05EaERNekl1TURFME9TQTFNeTR3TURneUlETXhMamt3TWpNZ05USXVOemM1TlNBek1TNDRPREVnTlRJdU5UTTBRek14TGpVNU5TQTFNQzQ1TWpjNUlETXhMamMwTXpFZ05Ea3VNamMwTmlBek1pNHpNU0EwTnk0M05EVkRNekl1T0RrM0lEUTJMalEyTVNBek15NDVOellnTkRVdU5EVXdPU0F6TlM0NE5qY2dORFF1TWpBM09VTXpOaTR4T1RRZ05ETXVPVGt5T1NBek5pNDBOVFlnTkRNdU9ESTNJRE0yTGpjeE9DQTBNeTQyTmpORE16Z3VNVGcySURReUxqY3pOeUF6T1M0M05EY2dOREV1TnpVeUlETTVMamMwTnlBME1DNDNOak5ETXprdU56UTNJRE01TGpjM05DQXpPQzR4T0RZZ016Z3VOemt4T1NBek5pNDNNVGdnTXpjdU9EWXlPVU16Tmk0ME5UY2dNemN1TmprNE9TQXpOaTR4T1RVZ016Y3VOVE16SURNMUxqZzJOeUF6Tnk0ek1UaERNek11T1RBMElETTJMakF5T0NBek1pNDRNVEl4SURNMExqa3lOeUF6TWk0eU5ERXhJRE16TGpVME5rTXpNUzQzTVRJM0lETXhMamsxTWpRZ016RXVOVGczTXlBek1DNHlOVEk0SURNeExqZzNOakVnTWpndU5UazVRek14TGpnM09USWdNamd1TXpNNE9DQXpNUzQ1T0RRMklESTRMakE1TURRZ016SXVNVFk1TlNBeU55NDVNRGMwUXpNeUxqTTFORFFnTWpjdU56STBOQ0F6TWk0Mk1ETTVJREkzTGpZeU1UVWdNekl1T0RZMElESTNMall5TVVnMU1DNHhNelF4UXpVd0xqTTNPVE1nTWpjdU5qSXdPU0ExTUM0Mk1UVTNJREkzTGpjeE1qSWdOVEF1TnprM01TQXlOeTQ0TnpjeVF6VXdMamszT0RVZ01qZ3VNRFF5TWlBMU1TNHdPVEU1SURJNExqSTJPRGtnTlRFdU1URTFJREk0TGpVeE0wTTFNUzQwTVRReklETXdMakU1TWpjZ05URXVNamt4TmlBek1TNDVNakEwSURVd0xqYzFPQ0F6TXk0MU5ERkROVEF1TVRnNElETTBMamt5TVNBME9TNHdPVFVnTXpZdU1ESXpJRFEzTGpFek1pQXpOeTR6TVRORE5EWXVOems1SURNM0xqVXpNaUEwTmk0MU5ESXhJRE0zTGpZNU16a2dORFl1TWpnd01TQXpOeTQ0TlRnNVF6UTBMamd4TXpFZ016Z3VOemd6T1NBME15NHlOVEV4SURNNUxqYzJPU0EwTXk0eU5URXhJRFF3TGpjMU9VTTBNeTR5TlRFeElEUXhMamMwT1NBME5DNDRNVFFnTkRJdU56TWdORFl1TWpneUlEUXpMalkxT1VNME5pNDJNVGNnTkRNdU9EY2dORFl1T1RVeUlEUTBMakE0TWlBME55NHhNekVnTkRRdU1rTTBPUzR3TWpRZ05EVXVORFEwSURVd0xqRXdOeUEwTmk0ME16STVJRFV3TGpZNU5TQTBOeTQzTURjNVREVXdMalk1TmlBME55NDNNVFZhVFRReExqUTVOakVnTXprdU5qRTFRelF5TGpBM056RWdNemd1TVRnMElEUXpMalk1TmlBek55NHhOallnTkRVdU1qSTVJRE0yTGpFNU4wTTBOUzQxTXpZZ016WXVNREF6SURRMUxqZzBOQ0F6TlM0NE1TQTBOaTR3TkRrZ016VXVOamMxUXpRM0xqSTNOallnTXpVdU1ESTJOeUEwT0M0eU9ERXpJRE0wTGpBeU5EY2dORGd1T1RNeklETXlMamM1T1VNME9TNHlOek0zSURNeExqYzJPRFlnTkRrdU16YzBJRE13TGpZM05DQTBPUzR5TWpZZ01qa3VOVGs1U0RNekxqYzNRek16TGpZeU1pQXpNQzQyTnpReElETXpMamN5TWpZZ016RXVOelk0T0NBek5DNHdOalF4SURNeUxqYzVPVU16TkM0M01UVTJJRE0wTGpBeU5EVWdNelV1TnpFNU9TQXpOUzR3TWpZMElETTJMamswTnlBek5TNDJOelZETXpjdU1UVTNJRE0xTGpneE1pQXpOeTQwTmlBek5pNHdNRFFnTXpjdU56WTRJRE0yTGpFNU4wTXpPUzR6TURRZ016Y3VNVFkxSURRd0xqa3hPU0F6T0M0eE9EUWdOREV1TlNBek9TNDJNVFZJTkRFdU5EazJNVm9pSUdacGJHdzlJaU16TXpNek16TWlMejRLUEhCaGRHZ2daRDBpVFRNd0xqYzNNeUF5TkVnMU1pNHlNak5ETlRJdU5UZzJOQ0F5TkM0d01EQTFJRFV5TGprME5qRWdNalF1TURjeU5pQTFNeTR5T0RFMklESTBMakl4TWpKRE5UTXVOakUzTVNBeU5DNHpOVEU1SURVekxqa3lNVGNnTWpRdU5UVTJOQ0ExTkM0eE56Z2dNalF1T0RFMFF6VTBMalF6TlRZZ01qVXVNRGN4TXlBMU5DNDJOQ0F5TlM0ek56WTRJRFUwTGpjM09UVWdNalV1TnpFek1VTTFOQzQ1TVRrZ01qWXVNRFE1TkNBMU5DNDVPVEE1SURJMkxqUXdPVGtnTlRRdU9Ua3hJREkyTGpjM05FTTFOQzQ1T1RBMElESTNMakV6T0NBMU5DNDVNVGdnTWpjdU5EazRNeUExTkM0M056Z2dNamN1T0RNME1rTTFOQzQyTXpjNUlESTRMakUzTURJZ05UUXVORE16SURJNExqUTNOVE1nTlRRdU1UYzFJREk0TGpjek1rTTFNeTQ1TVRnZ01qZ3VPVGt3TWlBMU15NDJNVEkzSURJNUxqRTVOVEVnTlRNdU1qYzJNeUF5T1M0ek16VkROVEl1T1RRZ01qa3VORGMwT1NBMU1pNDFOemt6SURJNUxqVTBOamtnTlRJdU1qRTFJREk1TGpVME4wZ3pNQzQzTnpORE16QXVOREE0T1NBeU9TNDFORFk0SURNd0xqQTBPRFVnTWprdU5EYzBOeUF5T1M0M01USXpJREk1TGpNek5EaERNamt1TXpjMk1TQXlPUzR4T1RVZ01qa3VNRGN3T0NBeU9DNDVPVEF4SURJNExqZ3hOQ0F5T0M0M016SkRNamd1TlRVMk1pQXlPQzQwTnpVeUlESTRMak0xTVRVZ01qZ3VNVGN3TVNBeU9DNHlNVEUySURJM0xqZ3pOREZETWpndU1EY3hPQ0F5Tnk0ME9UZ3hJREkzTGprNU9UVWdNamN1TVRNM09TQXlOeTQ1T1RrZ01qWXVOemMwUXpJM0xqazVPVFFnTWpZdU5ERXdOU0F5T0M0d056RTBJREkyTGpBMU1EY2dNamd1TWpFd09TQXlOUzQzTVRVeFF6STRMak0xTURRZ01qVXVNemM1TlNBeU9DNDFOVFEySURJMUxqQTNORFlnTWpndU9ERXlJREkwTGpneE9FTXlPUzR3TmpneklESTBMalUyTURNZ01qa3VNemN5T1NBeU5DNHpOVFU0SURJNUxqY3dPRFFnTWpRdU1qRTJNVU16TUM0d05ETTVJREkwTGpBM05qUWdNekF1TkRBek5pQXlOQzR3TURReklETXdMamMyTnlBeU5DNHdNRFJNTXpBdU56Y3pJREkwV2swMU1pNHlNamNnTWpVdU9UYzRTRE13TGpjM00wTXpNQzQxTmpJMklESTFMamszT0RFZ016QXVNell3TnlBeU5pNHdOakV4SURNd0xqSXhNU0F5Tmk0eU1EbERNekF1TURZek15QXlOaTR6TlRnMElESTVMams0TURNZ01qWXVOVFU1T1NBeU9TNDVPQ0F5Tmk0M04wTXlPUzQ1TnprM0lESTJMamczTkRFZ016QWdNall1T1RjM01pQXpNQzR3TXprM0lESTNMakEzTXpWRE16QXVNRGM1TXlBeU55NHhOamszSURNd0xqRXpOelVnTWpjdU1qVTNNeUF6TUM0eU1URWdNamN1TXpNeFF6TXdMak0yTURJZ01qY3VORGdnTXpBdU5UWXlNaUF5Tnk0MU5qUXhJRE13TGpjM015QXlOeTQxTmpWSU5USXVNakl6UXpVeUxqTXlOek1nTWpjdU5UWTBPU0ExTWk0ME16QTJJREkzTGpVME5ERWdOVEl1TlRJMk9TQXlOeTQxTURNNVF6VXlMall5TXpFZ01qY3VORFl6T0NBMU1pNDNNVEExSURJM0xqUXdOU0ExTWk0M09EUWdNamN1TXpNeFF6VXlMamcxTnpVZ01qY3VNalUzTXlBMU1pNDVNVFUzSURJM0xqRTJPVGNnTlRJdU9UVTFOQ0F5Tnk0d056TTFRelV5TGprNU5TQXlOaTQ1TnpjeUlEVXpMakF4TlRNZ01qWXVPRGMwTVNBMU15NHdNVFVnTWpZdU56ZEROVE11TURFME5pQXlOaTQyTmpVMklEVXlMams1TXpjZ01qWXVOVFl5TkNBMU1pNDVOVE0wSURJMkxqUTJOakZETlRJdU9URXpJREkyTGpNMk9UZ2dOVEl1T0RVME1TQXlOaTR5T0RJMUlEVXlMamM0SURJMkxqSXdPVU0xTWk0Mk16QTBJREkyTGpBMk1ERWdOVEl1TkRJNElESTFMamszTmpNZ05USXVNakUzSURJMUxqazNOa3cxTWk0eU1qY2dNalV1T1RjNFdpSWdabWxzYkQwaUl6TXpNek16TXlJdlBnbzhjR0YwYUNCa1BTSk5NekF1TnpjeklEVXhMalExTmpGSU5USXVNakl6UXpVeUxqVTROeklnTlRFdU5EVTJNaUExTWk0NU5EYzRJRFV4TGpVeU9ERWdOVE11TWpnME1TQTFNUzQyTmpjNFF6VXpMall5TURRZ05URXVPREEzTlNBMU15NDVNalU1SURVeUxqQXhNakVnTlRRdU1UZ3pJRFV5TGpJM01ERkROVFF1TkRRd09TQTFNaTQxTWpZM0lEVTBMalkwTlRnZ05USXVPRE14TmlBMU5DNDNPRFU0SURVekxqRTJOelJETlRRdU9USTFPQ0ExTXk0MU1ETXlJRFUwTGprNU9ESWdOVE11T0RZek1pQTFOQzQ1T1RrZ05UUXVNakkzTVVNMU5DNDVPVGMwSURVMExqazJNakVnTlRRdU56QTBPQ0ExTlM0Mk5qWTJJRFUwTGpFNE5URWdOVFl1TVRnMk5VTTFNeTQyTmpVMUlEVTJMamN3TmpNZ05USXVPVFl4TVNBMU5pNDVPVGt5SURVeUxqSXlOaUExTnk0d01ERklNekF1TnpjelF6TXdMalF3T0RrZ05UY3VNREF3T0NBek1DNHdORGcxSURVMkxqa3lPRGNnTWprdU56RXlNeUExTmk0M09EZzRRekk1TGpNM05qRWdOVFl1TmpRNUlESTVMakEzTURnZ05UWXVORFEwTVNBeU9DNDRNVFFnTlRZdU1UZzJRekk0TGpVMU5qWWdOVFV1T1RJNU5DQXlPQzR6TlRJeklEVTFMall5TkRZZ01qZ3VNakV5T0NBMU5TNHlPRGxETWpndU1EY3pNeUExTkM0NU5UTXpJREk0TGpBd01UUWdOVFF1TlRrek5TQXlPQzR3TURFZ05UUXVNak5ETWpndU1EQXhOeUExTXk0NE5qWXpJREk0TGpBM05DQTFNeTQxTURZeklESTRMakl4TXpnZ05UTXVNVGN3TlVNeU9DNHpOVE0ySURVeUxqZ3pORGNnTWpndU5UVTRNeUExTWk0MU1qazNJREk0TGpneE5pQTFNaTR5TnpORE1qa3VNRGN6SURVeUxqQXhOVE1nTWprdU16YzRNeUExTVM0NE1UQTNJREk1TGpjeE5EVWdOVEV1TmpjeFF6TXdMakExTURZZ05URXVOVE14TXlBek1DNDBNVEVnTlRFdU5EVTVNeUF6TUM0M056VWdOVEV1TkRVNVRETXdMamMzTXlBMU1TNDBOVFl4V2swMU1pNHlNamNnTlRNdU5ETTBNVWd6TUM0M056TkRNekF1TlRZeUlEVXpMalF6TlRJZ016QXVNellnTlRNdU5URTVOeUF6TUM0eU1URWdOVE11TmpZNVF6TXdMakV6TnpVZ05UTXVOelF5TlNBek1DNHdOemt5SURVekxqZ3lPVGtnTXpBdU1ETTVOaUExTXk0NU1qWkRNamt1T1RrNU9TQTFOQzR3TWpJeElESTVMamszT1RZZ05UUXVNVEkxTVNBeU9TNDVPQ0ExTkM0eU1qbERNamt1T1Rnd01TQTFOQzQwTkRBMElETXdMakEyTXprZ05UUXVOalF6TWlBek1DNHlNVE1nTlRRdU56a3pNVU16TUM0ek5qSXlJRFUwTGprME1qRWdNekF1TlRZME1pQTFOUzR3TWpZeElETXdMamMzTlNBMU5TNHdNamRJTlRJdU1qSXpRelV5TGpNeU9ERWdOVFV1TURJM0lEVXlMalF6TWpFZ05UVXVNREEyTkNBMU1pNDFNamt5SURVMExqazJOakpETlRJdU5qSTJNaUExTkM0NU1qWWdOVEl1TnpFME5DQTFOQzQ0TmpjZ05USXVOemc0TnlBMU5DNDNPVEkzUXpVeUxqZzJNeUExTkM0M01UZzBJRFV5TGpreU1Ua2dOVFF1TmpNd015QTFNaTQ1TmpJeElEVTBMalV6TXpKRE5UTXVNREF5TXlBMU5DNDBNell4SURVekxqQXlNeUExTkM0ek16SXhJRFV6TGpBeU15QTFOQzR5TWpjeFF6VXpMakF5TXpRZ05UUXVNVEl6TVNBMU15NHdNRE14SURVMExqQXlNREVnTlRJdU9UWXpOU0ExTXk0NU1qUkROVEl1T1RJek9TQTFNeTQ0TWpjNElEVXlMamcyTlRVZ05UTXVOelF3TlNBMU1pNDNPVElnTlRNdU5qWTNNVU0xTWk0M01UZzFJRFV6TGpVNU1qa2dOVEl1TmpNeE1pQTFNeTQxTXpNNUlEVXlMalV6TkRrZ05UTXVORGt6TmtNMU1pNDBNemcySURVekxqUTFNek1nTlRJdU16TTFOQ0ExTXk0ME16STBJRFV5TGpJek1TQTFNeTQwTXpKTU5USXVNakkzSURVekxqUXpOREZhSWlCbWFXeHNQU0lqTXpNek16TXpJaTgrQ2p4d1lYUm9JR1E5SWswek1DNDNOelFnTlRkRE16QXVOREE1T0NBMU5pNDVPVGs0SURNd0xqQTBPVElnTlRZdU9USTNPQ0F5T1M0M01USTVJRFUyTGpjNE9ERkRNamt1TXpjMk5pQTFOaTQyTkRnMElESTVMakEzTVRFZ05UWXVORFF6T1NBeU9DNDRNVFFnTlRZdU1UZzJRekk0TGpVMU5qVWdOVFV1T1RJNU5TQXlPQzR6TlRJeElEVTFMall5TkRjZ01qZ3VNakV5TmlBMU5TNHlPRGt4UXpJNExqQTNNekVnTlRRdU9UVXpOQ0F5T0M0d01ERXlJRFUwTGpVNU16VWdNamd1TURBeElEVTBMakl6UXpJNExqQXdNVE1nTlRNdU9EWTJJREk0TGpBM016VWdOVE11TlRBMU55QXlPQzR5TVRNeklEVXpMakUyT1RkRE1qZ3VNelV6TWlBMU1pNDRNek0zSURJNExqVTFPQ0ExTWk0MU1qZzNJREk0TGpneE5pQTFNaTR5TnpKRE1qa3VNRGN6TWlBMU1pNHdNVFF5SURJNUxqTTNPRGNnTlRFdU9EQTVOaUF5T1M0M01UVWdOVEV1TmpZNU9VTXpNQzR3TlRFeklEVXhMalV6TURNZ016QXVOREV4T0NBMU1TNDBOVGd6SURNd0xqYzNOaUExTVM0ME5UaElNekV1T0VNek1TNDJOVGczSURVd0xqRTVOellnTXpFdU9ETXpOaUEwT0M0NU1qRTVJRE15TGpNd09TQTBOeTQzTkRZeFF6TXlMamc1TmlBME5pNDBOak14SURNekxqazNOU0EwTlM0ME5USWdNelV1T0RZMklEUTBMakl3T1VNek5pNHhPVE1nTkRNdU9UazBJRE0yTGpRMU5TQTBNeTQ0TWpnZ016WXVOekUySURRekxqWTJOVU16T0M0eE9EUWdOREl1TnpNNUlETTVMamMwTlNBME1TNDNOVEk1SURNNUxqYzBOU0EwTUM0M05qUTVRek01TGpjME5TQXpPUzQzTnpZNUlETTRMakU0TXlBek9DNDNPVFFnTXpZdU56RTJJRE0zTGpnMk5VTXpOaTQwTlRRZ016Y3VOekF4SURNMkxqRTVNaUF6Tnk0MU16WWdNelV1T0RZMklETTNMak15TVVNek15NDVNRE1nTXpZdU1ETXhJRE15TGpneE1TQXpOQzQ1TXpBeElETXlMakkwSURNekxqVTBPVEZETXpFdU56Z3hNU0F6TWk0eU5qZzRJRE14TGpZeU9UTWdNekF1T0RrNE55QXpNUzQzT1RjZ01qa3VOVFE1TVVnek1DNDNOekpETXpBdU5EQTNPQ0F5T1M0MU5Ea3hJRE13TGpBME56RWdNamt1TkRjM01TQXlPUzQzTVRBNElESTVMak16TnpSRE1qa3VNemMwTkNBeU9TNHhPVGMzSURJNUxqQTJPU0F5T0M0NU9UTXhJREk0TGpneE1pQXlPQzQzTXpVeFF6STRMalUxTXprZ01qZ3VORGM0TmlBeU9DNHpORGt4SURJNExqRTNNellnTWpndU1qQTVOQ0F5Tnk0NE16YzJRekk0TGpBMk9UWWdNamN1TlRBeE55QXlOeTQ1T1RjM0lESTNMakUwTVRRZ01qY3VPVGszTnlBeU5pNDNOemMyUXpJM0xqazVOemNnTWpZdU5ERXpOeUF5T0M0d05qazJJREkyTGpBMU16VWdNamd1TWpBNU5DQXlOUzQzTVRjMVF6STRMak0wT1RFZ01qVXVNemd4TmlBeU9DNDFOVE01SURJMUxqQTNOallnTWpndU9ERXlJREkwTGpneU1ERkRNamt1TURZNE15QXlOQzQxTmpJeUlESTVMak0zTXlBeU5DNHpOVGMxSURJNUxqY3dPRGNnTWpRdU1qRTNPRU16TUM0d05EUTBJREkwTGpBM09ERWdNekF1TkRBME5DQXlOQzR3TURZeUlETXdMamMyT0NBeU5DNHdNRFl4U0RVeUxqSXlNVU0xTWk0MU9EUTFJREkwTGpBd05qTWdOVEl1T1RRME5TQXlOQzR3TnpneklEVXpMakk0TURJZ01qUXVNakU0UXpVekxqWXhOVGdnTWpRdU16VTNOeUExTXk0NU1qQTJJREkwTGpVMk1qTWdOVFF1TVRjM0lESTBMamd5TURGRE5UUXVORE0xTVNBeU5TNHdOelk0SURVMExqWTBJREkxTGpNNE1qRWdOVFF1TnpjNU9DQXlOUzQzTVRnelF6VTBMamt4T1RVZ01qWXVNRFUwTlNBMU5DNDVPVEUxSURJMkxqUXhOU0ExTkM0NU9URTFJREkyTGpjM09URkROVFF1T1RreE5TQXlOeTR4TkRNeElEVTBMamt4T1RVZ01qY3VOVEF6TnlBMU5DNDNOems0SURJM0xqZ3pPVGhETlRRdU5qUWdNamd1TVRjMklEVTBMalF6TlRFZ01qZ3VORGd4TXlBMU5DNHhOemNnTWpndU56TTRRelV6TGpreE9Ua2dNamd1T1RrMk1TQTFNeTQyTVRRMUlESTVMakl3TURrZ05UTXVNamM0TVNBeU9TNHpOREEyUXpVeUxqazBNVGdnTWprdU5EZ3dNeUExTWk0MU9ERXlJREk1TGpVMU1pQTFNaTR5TVRjZ01qa3VOVFV5U0RVeExqSkROVEV1TXpZNElETXdMamt3TVRZZ05URXVNakUyTlNBek1pNHlOekUzSURVd0xqYzFPQ0F6TXk0MU5USkROVEF1TVRnM0lETTBMamt6TXlBME9TNHdPVFVnTXpZdU1ETTBJRFEzTGpFek1pQXpOeTR6TWpSRE5EWXVPQ0F6Tnk0MU5EUWdORFl1TlRReUlETTNMamN3TkRrZ05EWXVNamd4SURNM0xqZzJPRGxETkRRdU9ERTBJRE00TGpjNU16a2dORE11TWpVeUlETTVMamM0SURRekxqSTFNaUEwTUM0M05qbERORE11TWpVeUlEUXhMamMxT0NBME5DNDRNVFVnTkRJdU56TTVPU0EwTmk0eU9EUWdORE11TmpZNE9VTTBOaTQyTVRnZ05ETXVPRGM0T1NBME5pNDVOVFFnTkRRdU1Ea3lJRFEzTGpFek15QTBOQzR5TVVNME9TNHdNallnTkRVdU5EVTFJRFV3TGpFd09TQTBOaTQwTkRRZ05UQXVOamszSURRM0xqY3hPRU0xTVM0eE56WTRJRFE0TGprd01qVWdOVEV1TXpRNE9DQTFNQzR4T0RreElEVXhMakU1TnlBMU1TNDBOVGhJTlRJdU1qSXlRelV5TGprMU56UWdOVEV1TkRVNE55QTFNeTQyTmpJMElEVXhMamMxTVRVZ05UUXVNVGd5SURVeUxqSTNNa00xTkM0ME5EQXhJRFV5TGpVeU9EWWdOVFF1TmpRMUlEVXlMamd6TXpjZ05UUXVOemcxSURVekxqRTJPVGRETlRRdU9USTFNU0ExTXk0MU1EVTNJRFUwTGprNU56UWdOVE11T0RZMklEVTBMams1T0NBMU5DNHlNME0xTkM0NU9UWTJJRFUwTGprMk5UTWdOVFF1TnpBMElEVTFMalkzSURVMExqRTROQ0ExTmk0eE9EazVRelV6TGpZMk5ERWdOVFl1TnpBNU9TQTFNaTQ1TlRreklEVTNMakF3TWpZZ05USXVNakkwSURVM0xqQXdNemxNTXpBdU56YzBJRFUzV2swek1DNDNOelFnTlRVdU1ESXhTRFV5TGpJeU4wTTFNaTQwTXpneklEVTFMakF5TVNBMU1pNDJOREVnTlRRdU9UTTNOU0ExTWk0M09UQTVJRFUwTGpjNE9EWkROVEl1T1RRd09DQTFOQzQyTXprMklEVXpMakF5TlRjZ05UUXVORE0zTkNBMU15NHdNamNnTlRRdU1qSTJNVU0xTXk0d01qYzBJRFUwTGpFeU1pQTFNeTR3TURjeUlEVTBMakF4T0RrZ05USXVPVFkzT0NBMU15NDVNakkyUXpVeUxqa3lPRE1nTlRNdU9ESTJNeUExTWk0NE56QXpJRFV6TGpjek9Ea2dOVEl1TnprM0lEVXpMalkyTlVNMU1pNDNNak0wSURVekxqVTVNRGdnTlRJdU5qTTFPQ0ExTXk0MU16RTRJRFV5TGpVek9UUWdOVE11TkRreE5VTTFNaTQwTkRNZ05UTXVORFV4TVNBMU1pNHpNemsxSURVekxqUXpNRElnTlRJdU1qTTFJRFV6TGpReU9UbElNekF1TnpjMFF6TXdMalUyTXlBMU15NDBNekV4SURNd0xqTTJNU0ExTXk0MU1UVTNJRE13TGpJeE1pQTFNeTQyTmpWRE16QXVNVE00TkNBMU15NDNNemczSURNd0xqQTRNREVnTlRNdU9ESTJNU0F6TUM0d05EQTBJRFV6TGpreU1qUkRNekF1TURBd09DQTFOQzR3TVRnMklESTVMams0TURVZ05UUXVNVEl4T1NBeU9TNDVPREVnTlRRdU1qSTJNVU15T1M0NU9ERXpJRFUwTGpRek56RWdNekF1TURZMU1TQTFOQzQyTXprMUlETXdMakl4TkNBMU5DNDNPRGt4UXpNd0xqTTJNallnTlRRdU9UTTNOQ0F6TUM0MU5qUWdOVFV1TURJd09DQXpNQzQzTnpRZ05UVXVNREl4V2swek55NDNOamtnTkRVdU16STFPVU16Tnk0ME5qRWdORFV1TlRFNU9TQXpOeTR4TlRnZ05EVXVOekV4TVNBek5pNDVORGdnTkRVdU9EUTVNVU16TlM0M05qZ3lJRFEyTGpRM016TWdNelF1Tnpnek55QTBOeTQwTVRFeElETTBMakV3TXlBME9DNDFOVGt4UXpNekxqYzJNRE1nTkRrdU5EZ3lOU0F6TXk0Mk5EYzNJRFV3TGpRM05USWdNek11TnpjMUlEVXhMalExTVRsSU5Ea3VNak5ETkRrdU16WXpOQ0ExTUM0ME5qZzJJRFE1TGpJMU1UZ2dORGt1TkRZM09DQTBPQzQ1TURVZ05EZ3VOVE00TVVNME9DNHlNVGMzSURRM0xqTTVPU0EwTnk0eU16RTNJRFEyTGpRMk9UZ2dORFl1TURVMElEUTFMamcxTVRGRE5EVXVOamszSURRMUxqWXhOakVnTkRVdU5EWTVJRFExTGpRM015QTBOUzR5TXpZZ05EVXVNekkxUXpRekxqWTVPQ0EwTkM0ek5UWWdOREl1TURneklEUXpMak16T0NBME1TNDFNRElnTkRFdU9UQTJRelF3TGpreE9TQTBNeTR6TXprZ016a3VNeUEwTkM0ek5UYzVJRE0zTGpjMk9TQTBOUzR6TWpVNVdrMHpOQzR3TmprZ016SXVOems1TVVNek5DNDNNakV5SURNMExqQXlORFVnTXpVdU56STFOeUF6TlM0d01qWXpJRE0yTGprMU15QXpOUzQyTnpWRE16Y3VNVFl6SURNMUxqZ3hNaUF6Tnk0ME5qWWdNell1TURBMElETTNMamMzTkNBek5pNHhPVGRETXprdU16RWdNemN1TVRZMklEUXdMamt5TlNBek9DNHhPRFFnTkRFdU5UQTFJRE01TGpZeE5VTTBNaTR3T0RZZ016Z3VNVGcwSURRekxqY3dOU0F6Tnk0eE5qWWdORFV1TWpNM0lETTJMakU1TjBNME5TNDFORFFnTXpZdU1EQTBJRFExTGpnMU1pQXpOUzQ0TVNBME5pNHdOVGNnTXpVdU5qYzFRelEzTGpJNE5EVWdNelV1TURJMk55QTBPQzR5T0RreUlETTBMakF5TkRnZ05EZ3VPVFF4SURNeUxqYzVPVEZETkRrdU1qZ3hNU0F6TVM0M05qZzNJRFE1TGpNNE1UUWdNekF1TmpjME1pQTBPUzR5TXpRZ01qa3VOVGs1TVVnek15NDNOekZETXpNdU5qSXpJRE13TGpZM05EVWdNek11TnpJek1pQXpNUzQzTmprMElETTBMakEyTkNBek1pNDRURE0wTGpBMk9TQXpNaTQzT1RreFdrMHpNQzR5TVRZZ01qWXVNakE0UXpNd0xqQTJPRFVnTWpZdU16VTNOeUF5T1M0NU9EVTRJREkyTGpVMU9UUWdNamt1T1RnMU9DQXlOaTQzTmprMVF6STVMams0TlRnZ01qWXVPVGM1TnlBek1DNHdOamcxSURJM0xqRTRNVFFnTXpBdU1qRTJJREkzTGpNek1URkRNekF1TXpZMU5DQXlOeTQwT0RBeklETXdMalUyTnpnZ01qY3VOVFkwTXlBek1DNDNOemtnTWpjdU5UWTBPVWcxTWk0eU16SkROVEl1TXpNMk5DQXlOeTQxTmpRNUlEVXlMalF6T1RrZ01qY3VOVFEwTXlBMU1pNDFNell6SURJM0xqVXdOREpETlRJdU5qTXlPQ0F5Tnk0ME5qUWdOVEl1TnpJd015QXlOeTQwTURVeUlEVXlMamM1TkNBeU55NHpNekV4UXpVeUxqZzJOemNnTWpjdU1qVTNNeUExTWk0NU1qWXlJREkzTGpFMk9UZ2dOVEl1T1RZMk1TQXlOeTR3TnpNMVF6VXpMakF3TmlBeU5pNDVOemN4SURVekxqQXlOallnTWpZdU9EY3pPQ0ExTXk0d01qWTJJREkyTGpjMk9UVkROVE11TURJMk5pQXlOaTQyTmpVeUlEVXpMakF3TmlBeU5pNDFOakU1SURVeUxqazJOakVnTWpZdU5EWTFOa00xTWk0NU1qWXlJREkyTGpNMk9USWdOVEl1T0RZM055QXlOaTR5T0RFM0lEVXlMamM1TkNBeU5pNHlNRGhETlRJdU5qUTBOQ0F5Tmk0d05Ua3hJRFV5TGpRME1pQXlOUzQ1TnpVMUlEVXlMakl6TVNBeU5TNDVOelV4U0RNd0xqYzNORU16TUM0MU5qSTVJREkxTGprM05UVWdNekF1TXpZd05pQXlOaTR3TlRreElETXdMakl4TVNBeU5pNHlNRGhJTXpBdU1qRTJXaUlnWm1sc2JEMGlJMFkxTlRjMk55SXZQZ284TDNOMlp6NEtcIjtcbmV4cG9ydCB7IFN2Z1NtYXJ0IGFzIFJlYWN0Q29tcG9uZW50IH07IiwidmFyIF9wYXRoLCBfcGF0aDI7XG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduID8gT2JqZWN0LmFzc2lnbi5iaW5kKCkgOiBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZnVuY3Rpb24gU3ZnV2lubmVyKHByb3BzKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCBfZXh0ZW5kcyh7XG4gICAgd2lkdGg6IDgyLFxuICAgIGhlaWdodDogODIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICB9LCBwcm9wcyksIF9wYXRoIHx8IChfcGF0aCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNNTQgMEgyOEMxMi41MzYgMCAwIDEyLjUzNiAwIDI4djI2YzAgMTUuNDY0IDEyLjUzNiAyOCAyOCAyOGgyNmMxNS40NjQgMCAyOC0xMi41MzYgMjgtMjhWMjhDODIgMTIuNTM2IDY5LjQ2NCAwIDU0IDB6XCIsXG4gICAgZmlsbDogXCIjRUFGOUZGXCJcbiAgfSkpLCBfcGF0aDIgfHwgKF9wYXRoMiA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNMzAuNjUzIDYxYS45MjMuOTIzIDAgMDEtLjkxOS0uOTI2di0yLjE5YTIuNzcgMi43NyAwIDAxMi43NTctMi43NzhIMzQuMnYtNC4yNDdhLjkyMy45MjMgMCAwMS43LS45aC4wMTJhNC4yMjYgNC4yMjYgMCAwMDMuMjQxLTQuNTI0IDExLjYwNiAxMS42MDYgMCAwMS01LjMyMi01LjA1OSAxOS42ODggMTkuNjg4IDAgMDEtMS4yNC0yLjUwNiAxNC45NzUgMTQuOTc1IDAgMDEtNy41NTUtMTAuNjk0IDIuODggMi44OCAwIDAxMi44MzUtMy4zMzVoMi43NzV2LS44NzRhMS45NTYgMS45NTYgMCAwMTEuOTQ3LTEuOTYyaDE4LjgxNGExLjk1NyAxLjk1NyAwIDAxMS45NDggMS45NjJ2Ljg3NGgyLjc3NGEyLjg3OCAyLjg3OCAwIDAxMi44MzUgMy4zMzUgMTQuOTc1IDE0Ljk3NSAwIDAxLTcuNTUzIDEwLjY5NGMtLjM1NC44NjQtLjc3IDEuNzAxLTEuMjQyIDIuNTA2YTExLjY4IDExLjY4IDAgMDEtNS4yMzMgNS4wMjEgNC4yMjMgNC4yMjMgMCAwMDMuMjM4IDQuNTYyaC4wMTFhLjkyMy45MjMgMCAwMS43MDcuOXY0LjI0N2gxLjdhMi43NyAyLjc3IDAgMDEyLjc1OCAyLjc3N3YyLjE5MWEuOTIzLjkyMyAwIDAxLS45Mi45MjZIMzAuNjUzem0uOTItMy4xMTh2MS4yNjZoMTguOTQzdi0xLjI2NmEuOTIzLjkyMyAwIDAwLS45MTktLjkyNUgzMi40OTFhLjkyMy45MjMgMCAwMC0uOTE5LjkyNHYuMDAxem00LjQ2MS0yLjc3N2gxMC4wMjF2LTMuMzIxSDM2LjAzNHYzLjMyMXptMy4wMy01Ljk5YTYuMTgxIDYuMTgxIDAgMDEtLjYyLjgxN2g1LjIwOWE2LjExOCA2LjExOCAwIDAxLTEuNTc5LTQuMDA4QTcuMDk2IDcuMDk2IDAgMDE0MSA0NmMtLjMzIDAtLjY2LS4wMjMtLjk4OC0uMDY4YTYuMDUzIDYuMDUzIDAgMDEtLjk0OCAzLjE4MnYuMDAxem0tNy41OC0yNi4xNTN2NC40M2EyNC4wNjcgMjQuMDY3IDAgMDAyLjkyNyAxMi4wMzRjMS44IDMuMDUgNC4xMzkgNC43MjkgNi41ODkgNC43MjlzNC43OS0xLjY3OCA2LjU4OS00LjcyOWEyNC4wNjUgMjQuMDY1IDAgMDAyLjkyNy0xMi4wMzV2LTQuNDNhLjEwOS4xMDkgMCAwMC0uMDY4LS4xMDIuMTEuMTEgMCAwMC0uMDQyLS4wMDhIMzEuNTkzYS4xMS4xMSAwIDAwLS4xMDkuMTF6bTIwLjg3IDQuNDNhMjkuMjggMjkuMjggMCAwMS0uOTggNy42MjMgMTMuMTMgMTMuMTMgMCAwMDQuNzc0LTguMTQxIDEgMSAwIDAwLS4yMjktLjgxNyAxLjAzNSAxLjAzNSAwIDAwLS43OTItLjM3aC0yLjc3NGwuMDAxIDEuNzA0em0tMjYuMjc1LTEuMzM2YTEgMSAwIDAwLS4yMjkuODE4IDEzLjEzIDEzLjEzIDAgMDA0Ljc3NSA4LjE0IDI5LjI4IDI5LjI4IDAgMDEtLjk3OS03LjYyM3YtMS43aC0yLjc3NWExLjAzNSAxLjAzNSAwIDAwLS43OTEuMzY0aC0uMDAxem0xMS40NzIgMTEuMDU2YS45MjcuOTI3IDAgMDEtLjM2NS0uOTA1bC40NzMtMi43ODMtMi4wMDctMS45N2EuOTMuOTMgMCAwMS41MS0xLjU4bDIuNzczLS40MDYgMS4yNC0yLjUzMWEuOTE1LjkxNSAwIDAxMS42NDkgMGwxLjIzOSAyLjUzMSAyLjc3My40MDZhLjkyNy45MjcgMCAwMS41MDkgMS41OGwtMi4wMDYgMS45Ny40NzMgMi43ODNhLjkyOC45MjggMCAwMS0uMzY1LjkwNS45MTcuOTE3IDAgMDEtLjk2Ny4wNzFMNDEgMzUuODdsLTIuNDggMS4zMTRhLjkxNC45MTQgMCAwMS0uOTY3LS4wN2gtLjAwMnptMy44NzUtMy4xMWwxLjI2LjY2OC0uMjQxLTEuNDEzYS45My45MyAwIDAxLjI2NS0uODE5bDEuMDItMS0xLjQwOC0uMjA2YS45MTcuOTE3IDAgMDEtLjY5Mi0uNTA2TDQxIDI5LjQ0bC0uNjMgMS4yODZhLjkxNy45MTcgMCAwMS0uNjkyLjUwNmwtMS40MDkuMjA2IDEuMDIgMWEuOTMuOTMgMCAwMS4yNjQuODJsLS4yNCAxLjQxMiAxLjI2LS42NjdhLjkxMy45MTMgMCAwMS44NTUgMGgtLjAwMnpcIixcbiAgICBmaWxsOiBcIiMzREFCRERcIlxuICB9KSkpO1xufVxuZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlPRElpSUdobGFXZG9kRDBpT0RJaUlIWnBaWGRDYjNnOUlqQWdNQ0E0TWlBNE1pSWdabWxzYkQwaWJtOXVaU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajRLUEhCaGRHZ2daRDBpVFRVMElEQklNamhETVRJdU5UTTJJREFnTUNBeE1pNDFNellnTUNBeU9GWTFORU13SURZNUxqUTJOQ0F4TWk0MU16WWdPRElnTWpnZ09ESklOVFJETmprdU5EWTBJRGd5SURneUlEWTVMalEyTkNBNE1pQTFORll5T0VNNE1pQXhNaTQxTXpZZ05qa3VORFkwSURBZ05UUWdNRm9pSUdacGJHdzlJaU5GUVVZNVJrWWlMejRLUEhCaGRHZ2daRDBpVFRNd0xqWTFNeUEyTVVNek1DNDFNekU1SURZd0xqazVPVFlnTXpBdU5ERXlJRFl3TGprM05USWdNekF1TXpBd01pQTJNQzQ1TWpnMVF6TXdMakU0T0RRZ05qQXVPRGd4TnlBek1DNHdPRGNnTmpBdU9ERXpOU0F6TUM0d01ERTJJRFl3TGpjeU56VkRNamt1T1RFMk15QTJNQzQyTkRFMUlESTVMamcwT0RjZ05qQXVOVE01TmlBeU9TNDRNREk0SURZd0xqUXlOelZETWprdU56VTJPU0EyTUM0ek1UVTBJREk1TGpjek16VWdOakF1TVRrMU1TQXlPUzQzTXpRZ05qQXVNRGMwVmpVM0xqZzRNekZETWprdU56TXlNaUExTnk0eE5EazBJRE13TGpBeU1UUWdOVFl1TkRRME9TQXpNQzQxTXpneklEVTFMamt5TkRORE16RXVNRFUxTWlBMU5TNDBNRE0zSURNeExqYzFOelFnTlRVdU1UQTVOQ0F6TWk0ME9URXhJRFUxTGpFd05rZ3pOQzR5VmpVd0xqZzFPRGxETXpRdU1UazVNU0ExTUM0Mk5USXhJRE0wTGpJMk56VWdOVEF1TkRVeE15QXpOQzR6T1RRMElEVXdMakk0T0RGRE16UXVOVEl4TkNBMU1DNHhNalE1SURNMExqWTVPVFFnTlRBdU1EQTRPU0F6TkM0NU1EQXhJRFE1TGprMU9VZ3pOQzQ1TVRKRE16VXVPVEE0TlNBME9TNDNNalV5SURNMkxqYzROak1nTkRrdU1UTTNPU0F6Tnk0ek9ESTBJRFE0TGpNd05UbERNemN1T1RjNE5DQTBOeTQwTnpNNUlETTRMakkxTWpNZ05EWXVORFV6TnlBek9DNHhOVE1nTkRVdU5ETTFNVU16TlM0NE56Z3lJRFEwTGpNMk9USWdNelF1TURFd055QTBNaTQxT1RNNUlETXlMamd6TVNBME1DNHpOelpETXpJdU16VTROU0F6T1M0MU56RXhJRE14TGprME16Z2dNemd1TnpNek9DQXpNUzQxT1RBeElETTNMamczTURGRE1qa3VOakF6TXlBek5pNDNOellnTWpjdU9Ea3hJRE0xTGpJME5Ea2dNall1TlRneU5DQXpNeTR6T1RJelF6STFMakkzTXpnZ016RXVOVE01T0NBeU5DNDBNRE14SURJNUxqUXhORElnTWpRdU1ETTJJREkzTGpFM05rTXlNeTQ1TnpBeElESTJMamMyTlRNZ01qTXVPVGswTVNBeU5pNHpORFV5SURJMExqRXdOakVnTWpVdU9UUTBOa015TkM0eU1UZ3lJREkxTGpVME5DQXlOQzQwTVRVM0lESTFMakUzTWpJZ01qUXVOamcxTVNBeU5DNDROVFV5UXpJMExqazFORFlnTWpRdU5UTTRNeUF5TlM0eU9EazFJREkwTGpJNE16VWdNalV1TmpZMk9DQXlOQzR4TURnMFF6STJMakEwTkRJZ01qTXVPVE16TXlBeU5pNDBOVFVnTWpNdU9EUXlNaUF5Tmk0NE56RWdNak11T0RReE1VZ3lPUzQyTkRaV01qSXVPVFkzUXpJNUxqWTBORFFnTWpJdU5EUTRPQ0F5T1M0NE5EZzJJREl4TGprMU1URWdNekF1TWpFek55QXlNUzQxT0RNelF6TXdMalUzT0RjZ01qRXVNakUxTkNBek1TNHdOelE0SURJeExqQXdOek1nTXpFdU5Ua3pJREl4TGpBd05EbElOVEF1TkRBM1F6VXdMamt5TlRNZ01qRXVNREEzTXlBMU1TNDBNakUySURJeExqSXhOVFFnTlRFdU56ZzJPQ0F5TVM0MU9ETXpRelV5TGpFMU1pQXlNUzQ1TlRFeElEVXlMak0xTmpNZ01qSXVORFE0TnlBMU1pNHpOVFVnTWpJdU9UWTNWakl6TGpnME1URklOVFV1TVRJNU1VTTFOUzQxTkRVZ01qTXVPRFF5TXlBMU5TNDVOVFUzSURJekxqa3pNemNnTlRZdU16TXpJREkwTGpFd09EbEROVFl1TnpFd01pQXlOQzR5T0RRZ05UY3VNRFExTVNBeU5DNDFNemc0SURVM0xqTXhORFVnTWpRdU9EVTFOME0xTnk0MU9ETTVJREkxTGpFM01qWWdOVGN1TnpneE5TQXlOUzQxTkRRZ05UY3VPRGt6TmlBeU5TNDVORFEyUXpVNExqQXdOVGNnTWpZdU16UTFNU0ExT0M0d01qazNJREkyTGpjMk5UTWdOVGN1T1RZMElESTNMakUzTmtNMU55NDFPVGNnTWprdU5ERTBNU0ExTmk0M01qWTFJRE14TGpVek9UWWdOVFV1TkRFNE1TQXpNeTR6T1RJeFF6VTBMakV3T1RjZ016VXVNalEwTmlBMU1pNHpPVGMySURNMkxqYzNOVGtnTlRBdU5ERXhJRE0zTGpnM01ERkROVEF1TURVMk5pQXpPQzQzTXpNM0lEUTVMalkwTVRZZ016a3VOVGN4SURRNUxqRTJPU0EwTUM0ek56WkRORGd1TURBeE5pQTBNaTQxTmpJMUlEUTJMakUyT0RrZ05EUXVNekl3T1NBME15NDVNellnTkRVdU16azNRelF6TGpneU5qTWdORFl1TkRJeE5TQTBOQzR3T1RRNUlEUTNMalExTURnZ05EUXVOamt4TXlBME9DNHlPVEZETkRVdU1qZzNOaUEwT1M0eE16RXpJRFEyTGpFM01EY2dORGt1TnpJME5TQTBOeTR4TnpRZ05Ea3VPVFU1U0RRM0xqRTROVU0wTnk0ek9EWTVJRFV3TGpBd056WWdORGN1TlRZMk5pQTFNQzR4TWpJNElEUTNMalk1TkRrZ05UQXVNamcyTVVNME55NDRNak14SURVd0xqUTBPVFFnTkRjdU9Ea3lOaUExTUM0Mk5URXlJRFEzTGpnNU1qRWdOVEF1T0RVNE9WWTFOUzR4TURaSU5Ea3VOVGt5UXpVd0xqTXlOVGNnTlRVdU1UQTVOQ0ExTVM0d01qZ3hJRFUxTGpRd016Y2dOVEV1TlRRMU1TQTFOUzQ1TWpRelF6VXlMakEyTWpJZ05UWXVORFEwT1NBMU1pNHpOVEUySURVM0xqRTBPVE1nTlRJdU16VWdOVGN1T0Rnek1WWTJNQzR3TnpSRE5USXVNelV3TkNBMk1DNHhPVFV5SURVeUxqTXlOamtnTmpBdU16RTFOQ0ExTWk0eU9EQTVJRFl3TGpReU56VkROVEl1TWpNME9TQTJNQzQxTXprMklEVXlMakUyTnpJZ05qQXVOalF4TmlBMU1pNHdPREU0SURZd0xqY3lOelZETlRFdU9UazJOQ0EyTUM0NE1UTTFJRFV4TGpnNU5EZ2dOakF1T0RneUlEVXhMamM0TXlBMk1DNDVNamczUXpVeExqWTNNVElnTmpBdU9UYzFOU0ExTVM0MU5URXlJRFl3TGprNU9UWWdOVEV1TkRNZ05qRklNekF1TmpVeldrMHpNUzQxTnpJeElEVTNMamc0TWpGV05Ua3VNVFEzT1VnMU1DNDFNVFpXTlRjdU9EZ3lNVU0xTUM0MU1UWTJJRFUzTGpZek56WWdOVEF1TkRJd01TQTFOeTQwTURJNUlEVXdMakkwTnpnZ05UY3VNakk1TlVNMU1DNHdOelUxSURVM0xqQTFOakVnTkRrdU9EUXhOU0ExTmk0NU5UZ3hJRFE1TGpVNU55QTFOaTQ1TlRkSU16SXVORGt4TVVNek1pNHlORFk0SURVMkxqazFPREVnTXpJdU1ERXlPU0ExTnk0d05UVTRJRE14TGpnME1EWWdOVGN1TWpJNVF6TXhMalkyT0RNZ05UY3VOREF5TWlBek1TNDFOekU0SURVM0xqWXpOamdnTXpFdU5UY3lNU0ExTnk0NE9ERXhWalUzTGpnNE1qRmFUVE0yTGpBek5DQTFOUzR4TURWSU5EWXVNRFUxVmpVeExqYzRNemxJTXpZdU1ETTBWalUxTGpFd05WcE5Nemt1TURZME1TQTBPUzR4TVRWRE16Z3VPRGd3TkNBME9TNDBNRFFnTXpndU5qY3pJRFE1TGpZM056SWdNemd1TkRRMElEUTVMamt6TVRsSU5ETXVOalV6UXpReUxqWTFPRElnTkRndU9ETXhOU0EwTWk0d09UY2dORGN1TkRBM015QTBNaTR3TnpRZ05EVXVPVEkwTVVNME1TNDNNVGcwSURRMUxqazNOallnTkRFdU16VTVOQ0EwTmk0d01ERTVJRFF4SURRMlF6UXdMalkyT1RVZ05EWWdOREF1TXpNNU5DQTBOUzQ1TnpjeElEUXdMakF4TWpFZ05EVXVPVE14T1VNek9TNDVPVGc1SURRM0xqQTJNRElnTXprdU5qY3dOU0EwT0M0eE5qSTFJRE01TGpBMk5ERWdORGt1TVRFMFZqUTVMakV4TlZwTk16RXVORGcwSURJeUxqazJNVGxXTWpjdU16a3hNVU16TVM0ek9UTWdNekV1TlRnNU5DQXpNaTQwTURJeElETTFMamN6T0RRZ016UXVOREV4SURNNUxqUXlOa016Tmk0eU1URWdOREl1TkRjMklETTRMalUxSURRMExqRTFOU0EwTVNBME5DNHhOVFZETkRNdU5EVWdORFF1TVRVMUlEUTFMamM1SURReUxqUTNOeUEwTnk0MU9Ea2dNemt1TkRJMlF6UTVMalU1T0NBek5TNDNNemcwSURVd0xqWXdOekVnTXpFdU5UZzVOQ0ExTUM0MU1UWWdNamN1TXpreE1WWXlNaTQ1TmpFNVF6VXdMalV4TmpJZ01qSXVPVFEzTkNBMU1DNDFNVE0wSURJeUxqa3pNekVnTlRBdU5UQTRJREl5TGpreE9UZEROVEF1TlRBeU5TQXlNaTQ1TURZeUlEVXdMalE1TkRRZ01qSXVPRGt6T1NBMU1DNDBPRFF5SURJeUxqZzRNelZETlRBdU5EY3pPU0F5TWk0NE56TXlJRFV3TGpRMk1UY2dNakl1T0RZMUlEVXdMalEwT0RNZ01qSXVPRFU1TkVNMU1DNDBNelE1SURJeUxqZzFNemdnTlRBdU5ESXdOaUF5TWk0NE5URXhJRFV3TGpRd05pQXlNaTQ0TlRFeFNETXhMalU1TTBNek1TNDFOalFnTWpJdU9EVXhNeUF6TVM0MU16WXpJREl5TGpnMk1qa2dNekV1TlRFMU9TQXlNaTQ0T0RNMVF6TXhMalE1TlRVZ01qSXVPVEEwTVNBek1TNDBPRFFnTWpJdU9UTXhPU0F6TVM0ME9EUWdNakl1T1RZd09WWXlNaTQ1TmpFNVdrMDFNaTR6TlRRZ01qY3VNemt4TVVNMU1pNHpOak00SURJNUxqazJORFVnTlRJdU1ETTBNeUF6TWk0MU1qYzNJRFV4TGpNM05ERWdNelV1TURFME9VTTFNeTQ1TVRrMElETXlMams0TmpjZ05UVXVOakl3TnlBek1DNHdPRFUySURVMkxqRTBPQ0F5Tmk0NE56UkROVFl1TVRjeU1TQXlOaTQzTWprMElEVTJMakUyTkRFZ01qWXVOVGd4TVNBMU5pNHhNalExSURJMkxqUXpPVGxETlRZdU1EZzBPU0F5Tmk0eU9UZzRJRFUyTGpBeE5EZ2dNall1TVRZM09TQTFOUzQ1TVRrZ01qWXVNRFUyT1VNMU5TNDRNaklnTWpVdU9UUXhNaUExTlM0M01EQTRJREkxTGpnME9ERWdOVFV1TlRZMElESTFMamM0TkRKRE5UVXVOREkzTWlBeU5TNDNNakF6SURVMUxqSTNPREVnTWpVdU5qZzNNaUExTlM0eE1qY2dNalV1TmpnM1NEVXlMak0xTXpGTU5USXVNelUwSURJM0xqTTVNVEZhVFRJMkxqQTNPU0F5Tmk0d05UVTVRekkxTGprNE16RWdNall1TVRZM01TQXlOUzQ1TVRNZ01qWXVNams0TVNBeU5TNDROek0wSURJMkxqUXpPVFZETWpVdU9ETXpPQ0F5Tmk0MU9EQTRJREkxTGpneU5UZ2dNall1TnpJNU1pQXlOUzQ0TlNBeU5pNDROelJETWpZdU16YzNOeUF6TUM0d09EVTNJREk0TGpBM09UUWdNekl1T1RnMk9DQXpNQzQyTWpVZ016VXVNREUwT1VNeU9TNDVOalV4SURNeUxqVXlOellnTWprdU5qTTFPU0F5T1M0NU5qUTBJREk1TGpZME5pQXlOeTR6T1RFeFZqSTFMalk1TURsSU1qWXVPRGN4UXpJMkxqY3lNRFlnTWpVdU5qa3dOQ0F5Tmk0MU56RTVJREkxTGpjeU1qZ2dNall1TkRNMU15QXlOUzQzT0RVMlF6STJMakk1T0RjZ01qVXVPRFE0TlNBeU5pNHhOemMxSURJMUxqazBNRFFnTWpZdU1EZ2dNall1TURVME9Vd3lOaTR3TnprZ01qWXVNRFUxT1ZwTk16Y3VOVFV4TVNBek55NHhNVEl4UXpNM0xqUXhNakVnTXpjdU1ERXdNU0F6Tnk0ek1EUXpJRE0yTGpnM01UTWdNemN1TWpNNU9DQXpOaTQzTVRFMFF6TTNMakUzTlRRZ016WXVOVFV4TmlBek55NHhOVFkzSURNMkxqTTNOamtnTXpjdU1UZzJJRE0yTGpJd04wd3pOeTQyTlRrZ016TXVOREkwTVV3ek5TNDJOVElnTXpFdU5EVTBNVU16TlM0MU1qa3lJRE14TGpNek1qa2dNelV1TkRReU5TQXpNUzR4T0NBek5TNDBNREUySURNeExqQXhNalZETXpVdU16WXdOaUF6TUM0NE5EUTVJRE0xTGpNMk55QXpNQzQyTmprZ016VXVORElnTXpBdU5UQTBPVU16TlM0ME56STBJRE13TGpNME1Ea2dNelV1TlRZNU5pQXpNQzR4T1RVZ016VXVOekF3T0NBek1DNHdPRE0xUXpNMUxqZ3pNVGtnTWprdU9UY3lJRE0xTGprNU1UY2dNamt1T0RrNU15QXpOaTR4TmpJZ01qa3VPRGMwVERNNExqa3pOU0F5T1M0ME5qaE1OREF1TVRjMUlESTJMamt6TjBNME1DNHlOU0F5Tmk0M09ESXhJRFF3TGpNMk56RWdNall1TmpVeE5TQTBNQzQxTVRNZ01qWXVOVFl3TVVNME1DNDJOVGc0SURJMkxqUTJPRFlnTkRBdU9ESTNOQ0F5Tmk0ME1qQXlJRFF3TGprNU9UVWdNall1TkRJd01rTTBNUzR4TnpFM0lESTJMalF5TURJZ05ERXVNelF3TXlBeU5pNDBOamcySURReExqUTROakVnTWpZdU5UWXdNVU0wTVM0Mk16RTVJREkyTGpZMU1UVWdOREV1TnpRNUlESTJMamM0TWpFZ05ERXVPREkwSURJMkxqa3pOMHcwTXk0d05qTWdNamt1TkRZNFREUTFMamd6TmlBeU9TNDROelJETkRZdU1EQTJOaUF5T1M0NE9UazRJRFEyTGpFMk5qVWdNamt1T1RjeU5TQTBOaTR5T1RjNUlETXdMakE0TkRKRE5EWXVOREk1TkNBek1DNHhPVFU1SURRMkxqVXlOeUF6TUM0ek5ESXlJRFEyTGpVM09Ua2dNekF1TlRBMk0wTTBOaTQyTXpJNElETXdMalkzTURVZ05EWXVOak00T0NBek1DNDRORFl6SURRMkxqVTVOek1nTXpFdU1ERXpOME0wTmk0MU5UVTRJRE14TGpFNE1URWdORFl1TkRZNE5DQXpNUzR6TXpNMklEUTJMak0wTlNBek1TNDBOVFF4VERRMExqTXpPU0F6TXk0ME1qUXhURFEwTGpneE1pQXpOaTR5TURkRE5EUXVPRFF4TVNBek5pNHpOelk1SURRMExqZ3lNalFnTXpZdU5UVXhOQ0EwTkM0M05UYzVJRE0yTGpjeE1USkRORFF1Tmprek5DQXpOaTQ0TnpFZ05EUXVOVGcxT0NBek55NHdNRGs1SURRMExqUTBOekVnTXpjdU1URXlNVU0wTkM0eU9UQTBJRE0zTGpJeU5qZ2dORFF1TVRBeE1pQXpOeTR5T0RnNElEUXpMamt3TnlBek55NHlPRGt4UXpRekxqYzFPREVnTXpjdU1qZzVOaUEwTXk0Mk1URTBJRE0zTGpJMU16SWdORE11TkRnZ016Y3VNVGd6TVV3ME1TQXpOUzQ0TmpnNVRETTRMalV5SURNM0xqRTRNekZETXpndU16WTROU0F6Tnk0eU5qTXpJRE00TGpFNU56VWdNemN1TWprNU1pQXpPQzR3TWpZMUlETTNMakk0TmpsRE16Y3VPRFUxTlNBek55NHlOelExSURNM0xqWTVNVFFnTXpjdU1qRTBNaUF6Tnk0MU5UTWdNemN1TVRFelRETTNMalUxTVRFZ016Y3VNVEV5TVZwTk5ERXVOREkyTVNBek5DNHdNREk1VERReUxqWTROaUF6TkM0Mk5qazVURFF5TGpRME5TQXpNeTR5TlRjeFF6UXlMalF4T1RrZ016TXVNVEE1TXlBME1pNDBNekE1SURNeUxqazFOelVnTkRJdU5EYzNNU0F6TWk0NE1UUTVRelF5TGpVeU16SWdNekl1TmpjeU15QTBNaTQyTURNeUlETXlMalUwTXlBME1pNDNNVEF4SURNeUxqUXpPRXcwTXk0M015QXpNUzQwTXpoTU5ESXVNekl5TVNBek1TNHlNekU1UXpReUxqRTNORElnTXpFdU1qRXdNeUEwTWk0d016UWdNekV1TVRVeU9TQTBNUzQ1TVRNMElETXhMakEyTkRkRE5ERXVOemt5T0NBek1DNDVOelkxSURReExqWTVOVFVnTXpBdU9EWXdOQ0EwTVM0Mk15QXpNQzQzTWpZeFREUXhJREk1TGpRek9UbE1OREF1TXpjZ016QXVOekkyTVVNME1DNHpNRFEySURNd0xqZzJNRFFnTkRBdU1qQTNNeUF6TUM0NU56WTFJRFF3TGpBNE5qY2dNekV1TURZME4wTXpPUzQ1TmpZeElETXhMakUxTWprZ016a3VPREkxT0NBek1TNHlNVEF6SURNNUxqWTNPQ0F6TVM0eU16RTVURE00TGpJMk9TQXpNUzQwTXpoTU16a3VNamc1SURNeUxqUXpPRU16T1M0ek9UVTRJRE15TGpVME16RWdNemt1TkRjMU5TQXpNaTQyTnpJMklETTVMalV5TVRVZ016SXVPREUxTWtNek9TNDFOamMwSURNeUxqazFOemdnTXprdU5UYzRNaUF6TXk0eE1EazBJRE01TGpVMU15QXpNeTR5TlRjeFRETTVMak14TXlBek5DNDJOams1VERRd0xqVTNNeUF6TkM0d01ESTVRelF3TGpjd05EY2dNek11T1RNek1TQTBNQzQ0TlRFMUlETXpMamc1TmpjZ05ERXVNREF3TlNBek15NDRPVFkzUXpReExqRTBPVFlnTXpNdU9EazJOeUEwTVM0eU9UWXpJRE16TGprek16RWdOREV1TkRJNElETTBMakF3TWpsSU5ERXVOREkyTVZvaUlHWnBiR3c5SWlNelJFRkNSRVFpTHo0S1BDOXpkbWMrQ2c9PVwiO1xuZXhwb3J0IHsgU3ZnV2lubmVyIGFzIFJlYWN0Q29tcG9uZW50IH07IiwiLyoqIEBqc3gganN4ICovXG5cbmltcG9ydCB7IGpzeCwgSW1hZ2UsIEJveCwgSGVhZGluZywgVGV4dCB9IGZyb20gJ3RoZW1lLXVpJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGZWF0dXJlQ2FyZCh7XG4gIHNyYyxcbiAgYWx0VGV4dCA9ICdkZWZhdWx0IGFsdCB0ZXh0JyxcbiAgdGl0bGUsXG4gIHRleHQsXG59KSB7XG4gIHJldHVybiAoXG4gICAgPEJveCBzeD17c3R5bGVzLmNhcmR9PlxuICAgICAgPEltYWdlIHNyYz17c3JjfSBhbHQ9e2FsdFRleHR9IHN4PXtzdHlsZXMuaW1nfSB3aWR0aD1cIjgwXCIgaGVpZ2h0PVwiODBcIiAvPlxuICAgICAgPEJveCBzeD17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgICA8SGVhZGluZyBzeD17c3R5bGVzLndyYXBwZXIudGl0bGV9Pnt0aXRsZX08L0hlYWRpbmc+XG4gICAgICAgIDxUZXh0IHN4PXtzdHlsZXMud3JhcHBlci5zdWJUaXRsZX0+e3RleHR9PC9UZXh0PlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBjYXJkOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcbiAgfSxcblxuICBpbWc6IHtcbiAgICB3aWR0aDogWyc2MHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzU1cHgnLCAnNzBweCcsIG51bGwsICc4MHB4J10sXG4gICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgZmxleFNocmluazogMCxcbiAgICBtcjogWzMsIDQsIG51bGwsIG51bGwsIDMsIDQsIG51bGwsIDVdLFxuICB9LFxuICB3cmFwcGVyOiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgbXQ6ICctNXB4JyxcbiAgICB0aXRsZToge1xuICAgICAgZm9udFNpemU6IFszLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCA0XSxcbiAgICAgIGNvbG9yOiAnaGVhZGluZ19zZWNvbmRhcnknLFxuICAgICAgbGluZUhlaWdodDogMS40LFxuICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgbWI6IFsyLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAzXSxcbiAgICAgIG10OiAnMnB4JyxcbiAgICB9LFxuICAgIHN1YlRpdGxlOiB7XG4gICAgICBmb250U2l6ZTogMSxcbiAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjg1LCBudWxsLCAyXSxcbiAgICB9LFxuICB9LFxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQm94LCBUZXh0LCBIZWFkaW5nIH0gZnJvbSAndGhlbWUtdWknXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlY3Rpb25IZWFkZXIoeyB0aXRsZSwgc2xvZ2FuLCBpc1doaXRlIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8Qm94IHN4PXt7IHZhcmlhbnQ6ICdzZWN0aW9uSGVhZGVyJyB9fT5cbiAgICAgIDxUZXh0XG4gICAgICAgIGFzPVwicFwiXG4gICAgICAgIHN4PXt7XG4gICAgICAgICAgdmFyaWFudDogJ3NlY3Rpb25IZWFkZXIuc3ViVGl0bGUnLFxuICAgICAgICAgIGNvbG9yOiBpc1doaXRlID8gJ3doaXRlJyA6ICdoZWFkaW5nJyxcbiAgICAgICAgICBvcGFjaXR5OiBpc1doaXRlID8gMC43IDogMSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge3Nsb2dhbn1cbiAgICAgIDwvVGV4dD5cbiAgICAgIDxIZWFkaW5nXG4gICAgICAgIGFzPVwiaDJcIlxuICAgICAgICBzeD17e1xuICAgICAgICAgIHZhcmlhbnQ6ICdzZWN0aW9uSGVhZGVyLnRpdGxlJyxcbiAgICAgICAgICBjb2xvcjogaXNXaGl0ZSA/ICd3aGl0ZScgOiAnaGVhZGluZ19zZWNvbmRhcnknLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7dGl0bGV9XG4gICAgICA8L0hlYWRpbmc+XG4gICAgPC9Cb3g+XG4gIClcbn1cbiIsIi8qKiBAanN4IGpzeCAqL1xuXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSdcbmltcG9ydCB7IENvbnRhaW5lciwgR3JpZCB9IGZyb20gJ3RoZW1lLXVpJ1xuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSAnQC9jb21wb25lbnRzL3NlY3Rpb24taGVhZGVyJ1xuaW1wb3J0IEZlYXR1cmVDYXJkIGZyb20gJ0AvY29tcG9uZW50cy9mZWF0dXJlLWNhcmQuanMnXG5pbXBvcnQgU21hcnQgZnJvbSAnQC9hc3NldHMvZmVhdHVyZS9zbWFydC5zdmcnXG5pbXBvcnQgV2lubmVyIGZyb20gJ0AvYXNzZXRzL2ZlYXR1cmUvd2lubmVyLnN2ZydcbmltcG9ydCBDbG91ZCBmcm9tICdAL2Fzc2V0cy9mZWF0dXJlL2Nsb3VkLnN2ZydcbmltcG9ydCBTZXR0aW5nIGZyb20gJ0AvYXNzZXRzL2ZlYXR1cmUvc2V0dGluZy5zdmcnXG5pbXBvcnQgRGVzaWduIGZyb20gJ0AvYXNzZXRzL2ZlYXR1cmUvZGVzaWduLnN2ZydcbmltcG9ydCBDaGF0IGZyb20gJ0AvYXNzZXRzL2ZlYXR1cmUvY2hhdC5zdmcnXG5cbmNvbnN0IGRhdGEgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICBpbWdTcmM6IFNtYXJ0LFxuICAgIGFsdFRleHQ6ICdTbWFydCcsXG4gICAgdGl0bGU6ICdTbWFydCBGZWF0dXJlcycsXG4gICAgdGV4dDpcbiAgICAgICdHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgbGV0IGhvbWUgY29sbGVjdCBzYW1wbGUgZnJvbSB0aGUgdmljdG9yeSBvZiB0aGUgbWFuYWdlbWVudHMuJyxcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIGltZ1NyYzogV2lubmVyLFxuICAgIGFsdFRleHQ6ICdQZXJmb3JtYW5jZScsXG4gICAgdGl0bGU6ICdGYXN0IFBlcmZvcm1hbmNlJyxcbiAgICB0ZXh0OlxuICAgICAgJ0dldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdCBsZXQgaG9tZSBjb2xsZWN0IHNhbXBsZSBmcm9tIHRoZSB2aWN0b3J5IG9mIHRoZSBtYW5hZ2VtZW50cy4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgaW1nU3JjOiBDbG91ZCxcbiAgICBhbHRUZXh0OiAnQ29udGVudCcsXG4gICAgdGl0bGU6ICdVbmxpbWl0ZWQgQ29udGVudCcsXG4gICAgdGV4dDpcbiAgICAgICdHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgbGV0IGhvbWUgY29sbGVjdCBzYW1wbGUgZnJvbSB0aGUgdmljdG9yeSBvZiB0aGUgbWFuYWdlbWVudHMuJyxcbiAgfSxcbiAge1xuICAgIGlkOiA0LFxuICAgIGltZ1NyYzogU2V0dGluZyxcbiAgICBhbHRUZXh0OiAnQ3VzdG9taXphdGlvbicsXG4gICAgdGl0bGU6ICdVbmxpbWl0ZWQgQ3VzdG9taXphdGlvbicsXG4gICAgdGV4dDpcbiAgICAgICdHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgbGV0IGhvbWUgY29sbGVjdCBzYW1wbGUgZnJvbSB0aGUgdmljdG9yeSBvZiB0aGUgbWFuYWdlbWVudHMuJyxcbiAgfSxcbiAge1xuICAgIGlkOiA1LFxuICAgIGltZ1NyYzogRGVzaWduLFxuICAgIGFsdFRleHQ6ICdQcm9kdWN0aXZpdHknLFxuICAgIHRpdGxlOiAnQm9vc3QgUHJvZHVjdGl2aXR5JyxcbiAgICB0ZXh0OlxuICAgICAgJ0dldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdCBsZXQgaG9tZSBjb2xsZWN0IHNhbXBsZSBmcm9tIHRoZSB2aWN0b3J5IG9mIHRoZSBtYW5hZ2VtZW50cy4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDYsXG4gICAgaW1nU3JjOiBDaGF0LFxuICAgIGFsdFRleHQ6ICdTdXBwb3J0JyxcbiAgICB0aXRsZTogJ0N1c3RvbWVyIFN1cHBvcnQnLFxuICAgIHRleHQ6XG4gICAgICAnR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0IGxldCBob21lIGNvbGxlY3Qgc2FtcGxlIGZyb20gdGhlIHZpY3Rvcnkgb2YgdGhlIG1hbmFnZW1lbnRzLicsXG4gIH0sXG5dXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZlYXR1cmUoKSB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gc3g9e3sgdmFyaWFudDogJ3NlY3Rpb24uZmVhdHVyZScgfX0+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U2VjdGlvbkhlYWRlclxuICAgICAgICAgIHNsb2dhbj1cIlF1YWxpdHkgZmVhdHVyZXNcIlxuICAgICAgICAgIHRpdGxlPVwiTWVldCBleGNpdGluZyBmZWF0dXJlIG9mIGFwcFwiXG4gICAgICAgIC8+XG5cbiAgICAgICAgPEdyaWQgc3g9e3N0eWxlcy5ncmlkfT5cbiAgICAgICAgICB7ZGF0YS5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICA8RmVhdHVyZUNhcmRcbiAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICBzcmM9e2l0ZW0uaW1nU3JjfVxuICAgICAgICAgICAgICBhbHQ9e2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICB0ZXh0PXtpdGVtLnRleHR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBncmlkOiB7XG4gICAgcHQ6IFswLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAzXSxcbiAgICBncmlkR2FwOiBbXG4gICAgICAnMzdweCAwJyxcbiAgICAgIG51bGwsXG4gICAgICAnNDVweCAzMHB4JyxcbiAgICAgIG51bGwsXG4gICAgICAnNTBweCAzMHB4JyxcbiAgICAgIG51bGwsXG4gICAgICBudWxsLFxuICAgICAgJzkwcHggNzBweCcsXG4gICAgXSxcbiAgICB3aWR0aDogWycxMDAlJywgJzgwJScsICcxMDAlJ10sXG4gICAgbXg6ICdhdXRvJyxcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbXG4gICAgICAncmVwZWF0KDEsMWZyKScsXG4gICAgICBudWxsLFxuICAgICAgJ3JlcGVhdCgyLDFmciknLFxuICAgICAgbnVsbCxcbiAgICAgICdyZXBlYXQoMywxZnIpJyxcbiAgICBdLFxuICB9LFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==