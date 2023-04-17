webpackHotUpdate_N_E(1,{

/***/ "./src/components/header/header.js":
/*!*****************************************!*\
  !*** ./src/components/header/header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/logo */ "./src/components/logo.js");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/assets/logo.png */ "./src/assets/logo.png");
/* harmony import */ var _contexts_drawer_drawer_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/contexts/drawer/drawer.provider */ "./src/contexts/drawer/drawer.provider.js");
/* harmony import */ var _mobile_drawer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mobile-drawer */ "./src/components/header/mobile-drawer.js");
/* harmony import */ var _header_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header.data */ "./src/components/header/header.data.js");

var _jsxFileName = "/home/nick/workspace/onda-project/onda-website/src/components/header/header.js",
  _templateObject;

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
/** @jsx jsx */









function Header(_ref) {
  var _this = this;
  var className = _ref.className;
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_contexts_drawer_drawer_provider__WEBPACK_IMPORTED_MODULE_7__["DrawerProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("header", {
    sx: styles.header,
    className: className,
    id: "header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    sx: styles.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_logo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    src: _assets_logo_png__WEBPACK_IMPORTED_MODULE_6__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    as: "nav",
    sx: styles.nav,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, _header_data__WEBPACK_IMPORTED_MODULE_9__["default"].map(function (_ref2, i) {
    var path = _ref2.path,
      label = _ref2.label;
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_scroll__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      activeClass: "active",
      to: path,
      spy: true,
      smooth: true,
      offset: -70,
      duration: 500,
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 15
      }
    }, label);
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "donate__btn",
    variant: "secondary",
    "aria-label": "Edital",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, "Edital"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_mobile_drawer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }))));
}
_c = Header;
var positionAnim = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["keyframes"])(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  from {\n    position: fixed;\n    opacity: 1;\n  }\n  to {\n    position: absolute;\n    opacity: 1;\n    transition: all 0.4s ease;\n  }\n"])));
var styles = {
  header: {
    'color': 'white',
    'fontWeight': 'normal',
    'py': 4,
    'width': '100%',
    'position': 'absolute',
    'top': 0,
    'left': 0,
    'backgroundColor': 'transparent',
    'transition': 'all 0.5s ease',
    'animation': "".concat(positionAnim, " 0.4s ease"),
    '.donate__btn': {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ['auto', null, null, null, 0]
    },
    '&.sticky': {
      'position': 'fixed',
      'backgroundColor': 'background',
      'color': '#000000',
      'boxShadow': '0 1px 2px rgba(0, 0, 0, 0.06)',
      'py': 3,
      'nev > a': {
        color: 'text'
      },
      '.donate__btn': {
        'borderColor': 'primary',
        'color': 'primary',
        '&:hover': {
          boxShadow: 'rgba(31, 62, 118, 0.57) 0px 9px 20px -5px',
          backgroundColor: 'primary',
          color: 'white'
        }
      }
    }
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  nav: {
    'mx': 'auto',
    'display': 'none',
    '@media screen and (min-width: 1024px)': {
      display: 'block'
    },
    'a': {
      'fontSize': '16px',
      'fontWeight': '400',
      'px': 25,
      'cursor': 'pointer',
      'lineHeight': '1.2',
      '&.active': {
        color: 'secondary'
      }
    }
  }
};
var _c;
$RefreshReg$(_c, "Header");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJfcmVmIiwiX3RoaXMiLCJjbGFzc05hbWUiLCJqc3giLCJEcmF3ZXJQcm92aWRlciIsIl9fc2VsZiIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwic3giLCJzdHlsZXMiLCJoZWFkZXIiLCJpZCIsIkNvbnRhaW5lciIsImNvbnRhaW5lciIsIkxvZ28iLCJzcmMiLCJMb2dvV2hpdGUiLCJGbGV4IiwiYXMiLCJuYXYiLCJtZW51SXRlbXMiLCJtYXAiLCJfcmVmMiIsImkiLCJwYXRoIiwibGFiZWwiLCJMaW5rIiwiYWN0aXZlQ2xhc3MiLCJ0byIsInNweSIsInNtb290aCIsIm9mZnNldCIsImR1cmF0aW9uIiwia2V5IiwiQnV0dG9uIiwidmFyaWFudCIsIk1vYmlsZURyYXdlciIsIl9jIiwicG9zaXRpb25BbmltIiwia2V5ZnJhbWVzIiwiX3RlbXBsYXRlT2JqZWN0IiwiX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbCIsImNvbmNhdCIsImZsZXhTaHJpbmsiLCJtciIsIm1sIiwiY29sb3IiLCJib3hTaGFkb3ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUV1RDtBQUNkO0FBQ047QUFDQztBQUNLO0FBQ3lCO0FBQ3hCO0FBQ0w7QUFFdEIsU0FBU0EsTUFBTUEsQ0FBQUMsSUFBQSxFQUFnQjtFQUFBLElBQUFDLEtBQUE7RUFBQSxJQUFiQyxTQUFTLEdBQUFGLElBQUEsQ0FBVEUsU0FBUztFQUN4QyxPQUNFQyxvREFBQSxDQUFDQywrRUFBYztJQUFBQyxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFB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ZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuXG5pbXBvcnQgeyBqc3gsIENvbnRhaW5lciwgRmxleCwgQnV0dG9uIH0gZnJvbSAndGhlbWUtdWknXG5pbXBvcnQgeyBrZXlmcmFtZXMgfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXNjcm9sbCdcbmltcG9ydCBMb2dvIGZyb20gJ0AvY29tcG9uZW50cy9sb2dvJ1xuaW1wb3J0IExvZ29XaGl0ZSBmcm9tICdAL2Fzc2V0cy9sb2dvLnBuZydcbmltcG9ydCB7IERyYXdlclByb3ZpZGVyIH0gZnJvbSAnQC9jb250ZXh0cy9kcmF3ZXIvZHJhd2VyLnByb3ZpZGVyJ1xuaW1wb3J0IE1vYmlsZURyYXdlciBmcm9tICcuL21vYmlsZS1kcmF3ZXInXG5pbXBvcnQgbWVudUl0ZW1zIGZyb20gJy4vaGVhZGVyLmRhdGEnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcih7IGNsYXNzTmFtZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPERyYXdlclByb3ZpZGVyPlxuICAgICAgPGhlYWRlciBzeD17c3R5bGVzLmhlYWRlcn0gY2xhc3NOYW1lPXtjbGFzc05hbWV9IGlkPVwiaGVhZGVyXCI+XG4gICAgICAgIDxDb250YWluZXIgc3g9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICAgIDxMb2dvIHNyYz17TG9nb1doaXRlfSAvPlxuXG4gICAgICAgICAgPEZsZXggYXM9XCJuYXZcIiBzeD17c3R5bGVzLm5hdn0+XG4gICAgICAgICAgICB7bWVudUl0ZW1zLm1hcCgoeyBwYXRoLCBsYWJlbCB9LCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxuICAgICAgICAgICAgICAgIHRvPXtwYXRofVxuICAgICAgICAgICAgICAgIHNweT17dHJ1ZX1cbiAgICAgICAgICAgICAgICBzbW9vdGg9e3RydWV9XG4gICAgICAgICAgICAgICAgb2Zmc2V0PXstNzB9XG4gICAgICAgICAgICAgICAgZHVyYXRpb249ezUwMH1cbiAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvRmxleD5cblxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImRvbmF0ZV9fYnRuXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkVkaXRhbFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgRWRpdGFsXG4gICAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICAgICA8TW9iaWxlRHJhd2VyIC8+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9oZWFkZXI+XG4gICAgPC9EcmF3ZXJQcm92aWRlcj5cbiAgKVxufVxuXG5jb25zdCBwb3NpdGlvbkFuaW0gPSBrZXlmcmFtZXNgXG4gIGZyb20ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIHRvIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xuICB9XG5gXG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgaGVhZGVyOiB7XG4gICAgJ2NvbG9yJzogJ3doaXRlJyxcbiAgICAnZm9udFdlaWdodCc6ICdub3JtYWwnLFxuICAgICdweSc6IDQsXG4gICAgJ3dpZHRoJzogJzEwMCUnLFxuICAgICdwb3NpdGlvbic6ICdhYnNvbHV0ZScsXG4gICAgJ3RvcCc6IDAsXG4gICAgJ2xlZnQnOiAwLFxuICAgICdiYWNrZ3JvdW5kQ29sb3InOiAndHJhbnNwYXJlbnQnLFxuICAgICd0cmFuc2l0aW9uJzogJ2FsbCAwLjVzIGVhc2UnLFxuICAgICdhbmltYXRpb24nOiBgJHtwb3NpdGlvbkFuaW19IDAuNHMgZWFzZWAsXG4gICAgJy5kb25hdGVfX2J0bic6IHtcbiAgICAgIGZsZXhTaHJpbms6IDAsXG4gICAgICBtcjogWzE1LCAyMCwgbnVsbCwgbnVsbCwgMF0sXG4gICAgICBtbDogWydhdXRvJywgbnVsbCwgbnVsbCwgbnVsbCwgMF0sXG4gICAgfSxcbiAgICAnJi5zdGlja3knOiB7XG4gICAgICAncG9zaXRpb24nOiAnZml4ZWQnLFxuICAgICAgJ2JhY2tncm91bmRDb2xvcic6ICdiYWNrZ3JvdW5kJyxcbiAgICAgICdjb2xvcic6ICcjMDAwMDAwJyxcbiAgICAgICdib3hTaGFkb3cnOiAnMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNiknLFxuICAgICAgJ3B5JzogMyxcbiAgICAgICduZXYgPiBhJzoge1xuICAgICAgICBjb2xvcjogJ3RleHQnLFxuICAgICAgfSxcbiAgICAgICcuZG9uYXRlX19idG4nOiB7XG4gICAgICAgICdib3JkZXJDb2xvcic6ICdwcmltYXJ5JyxcbiAgICAgICAgJ2NvbG9yJzogJ3ByaW1hcnknLFxuICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICBib3hTaGFkb3c6ICdyZ2JhKDMxLCA2MiwgMTE4LCAwLjU3KSAwcHggOXB4IDIwcHggLTVweCcsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncHJpbWFyeScsXG4gICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGNvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICB9LFxuICBuYXY6IHtcbiAgICAnbXgnOiAnYXV0bycsXG4gICAgJ2Rpc3BsYXknOiAnbm9uZScsXG4gICAgJ0BtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCknOiB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIH0sXG4gICAgJ2EnOiB7XG4gICAgICAnZm9udFNpemUnOiAnMTZweCcsXG4gICAgICAnZm9udFdlaWdodCc6ICc0MDAnLFxuICAgICAgJ3B4JzogMjUsXG4gICAgICAnY3Vyc29yJzogJ3BvaW50ZXInLFxuICAgICAgJ2xpbmVIZWlnaHQnOiAnMS4yJyxcbiAgICAgICcmLmFjdGl2ZSc6IHtcbiAgICAgICAgY29sb3I6ICdzZWNvbmRhcnknLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==