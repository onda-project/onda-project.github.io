webpackHotUpdate_N_E(1,{

/***/ "./src/assets/logo-dark.svg":
false,

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/_next/static/media/logo.d2c1bdd20e3a3c72fc9993c670d94a48.png");

/***/ }),

/***/ "./src/assets/logo.svg":
false,

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
    "aria-label": "Get Started",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, "Get Started"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_mobile_drawer__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2Fzc2V0cy9sb2dvLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJfcmVmIiwiX3RoaXMiLCJjbGFzc05hbWUiLCJqc3giLCJEcmF3ZXJQcm92aWRlciIsIl9fc2VsZiIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwic3giLCJzdHlsZXMiLCJoZWFkZXIiLCJpZCIsIkNvbnRhaW5lciIsImNvbnRhaW5lciIsIkxvZ28iLCJzcmMiLCJMb2dvV2hpdGUiLCJGbGV4IiwiYXMiLCJuYXYiLCJtZW51SXRlbXMiLCJtYXAiLCJfcmVmMiIsImkiLCJwYXRoIiwibGFiZWwiLCJMaW5rIiwiYWN0aXZlQ2xhc3MiLCJ0byIsInNweSIsInNtb290aCIsIm9mZnNldCIsImR1cmF0aW9uIiwia2V5IiwiQnV0dG9uIiwidmFyaWFudCIsIk1vYmlsZURyYXdlciIsIl9jIiwicG9zaXRpb25BbmltIiwia2V5ZnJhbWVzIiwiX3RlbXBsYXRlT2JqZWN0IiwiX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbCIsImNvbmNhdCIsImZsZXhTaHJpbmsiLCJtciIsIm1sIiwiY29sb3IiLCJib3hTaGFkb3ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFBZSw4SEFBK0QsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E5RTs7QUFFdUQ7QUFDZDtBQUNOO0FBQ0M7QUFDSztBQUN5QjtBQUN4QjtBQUNMO0FBRXRCLFNBQVNBLE1BQU1BLENBQUFDLElBQUEsRUFBZ0I7RUFBQSxJQUFBQyxLQUFBO0VBQUEsSUFBYkMsU0FBUyxHQUFBRixJ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O0FBQUFlLFlBQUEsQ0FBQWYsRUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay8xLmQyMzgzODE5ZmRjNDBhZDE2NjU4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIi9fbmV4dC9zdGF0aWMvbWVkaWEvbG9nby5kMmMxYmRkMjBlM2EzYzcyZmM5OTkzYzY3MGQ5NGE0OC5wbmdcIjsiLCIvKiogQGpzeCBqc3ggKi9cblxuaW1wb3J0IHsganN4LCBDb250YWluZXIsIEZsZXgsIEJ1dHRvbiB9IGZyb20gJ3RoZW1lLXVpJ1xuaW1wb3J0IHsga2V5ZnJhbWVzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1zY3JvbGwnXG5pbXBvcnQgTG9nbyBmcm9tICdAL2NvbXBvbmVudHMvbG9nbydcbmltcG9ydCBMb2dvV2hpdGUgZnJvbSAnQC9hc3NldHMvbG9nby5wbmcnXG5pbXBvcnQgeyBEcmF3ZXJQcm92aWRlciB9IGZyb20gJ0AvY29udGV4dHMvZHJhd2VyL2RyYXdlci5wcm92aWRlcidcbmltcG9ydCBNb2JpbGVEcmF3ZXIgZnJvbSAnLi9tb2JpbGUtZHJhd2VyJ1xuaW1wb3J0IG1lbnVJdGVtcyBmcm9tICcuL2hlYWRlci5kYXRhJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoeyBjbGFzc05hbWUgfSkge1xuICByZXR1cm4gKFxuICAgIDxEcmF3ZXJQcm92aWRlcj5cbiAgICAgIDxoZWFkZXIgc3g9e3N0eWxlcy5oZWFkZXJ9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBpZD1cImhlYWRlclwiPlxuICAgICAgICA8Q29udGFpbmVyIHN4PXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgICA8TG9nbyBzcmM9e0xvZ29XaGl0ZX0gLz5cblxuICAgICAgICAgIDxGbGV4IGFzPVwibmF2XCIgc3g9e3N0eWxlcy5uYXZ9PlxuICAgICAgICAgICAge21lbnVJdGVtcy5tYXAoKHsgcGF0aCwgbGFiZWwgfSwgaSkgPT4gKFxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzPVwiYWN0aXZlXCJcbiAgICAgICAgICAgICAgICB0bz17cGF0aH1cbiAgICAgICAgICAgICAgICBzcHk9e3RydWV9XG4gICAgICAgICAgICAgICAgc21vb3RoPXt0cnVlfVxuICAgICAgICAgICAgICAgIG9mZnNldD17LTcwfVxuICAgICAgICAgICAgICAgIGR1cmF0aW9uPXs1MDB9XG4gICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0ZsZXg+XG5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkb25hdGVfX2J0blwiXG4gICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJHZXQgU3RhcnRlZFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgR2V0IFN0YXJ0ZWRcbiAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgIDxNb2JpbGVEcmF3ZXIgLz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L2hlYWRlcj5cbiAgICA8L0RyYXdlclByb3ZpZGVyPlxuICApXG59XG5cbmNvbnN0IHBvc2l0aW9uQW5pbSA9IGtleWZyYW1lc2BcbiAgZnJvbSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgdG8ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XG4gIH1cbmBcblxuY29uc3Qgc3R5bGVzID0ge1xuICBoZWFkZXI6IHtcbiAgICAnY29sb3InOiAnd2hpdGUnLFxuICAgICdmb250V2VpZ2h0JzogJ25vcm1hbCcsXG4gICAgJ3B5JzogNCxcbiAgICAnd2lkdGgnOiAnMTAwJScsXG4gICAgJ3Bvc2l0aW9uJzogJ2Fic29sdXRlJyxcbiAgICAndG9wJzogMCxcbiAgICAnbGVmdCc6IDAsXG4gICAgJ2JhY2tncm91bmRDb2xvcic6ICd0cmFuc3BhcmVudCcsXG4gICAgJ3RyYW5zaXRpb24nOiAnYWxsIDAuNXMgZWFzZScsXG4gICAgJ2FuaW1hdGlvbic6IGAke3Bvc2l0aW9uQW5pbX0gMC40cyBlYXNlYCxcbiAgICAnLmRvbmF0ZV9fYnRuJzoge1xuICAgICAgZmxleFNocmluazogMCxcbiAgICAgIG1yOiBbMTUsIDIwLCBudWxsLCBudWxsLCAwXSxcbiAgICAgIG1sOiBbJ2F1dG8nLCBudWxsLCBudWxsLCBudWxsLCAwXSxcbiAgICB9LFxuICAgICcmLnN0aWNreSc6IHtcbiAgICAgICdwb3NpdGlvbic6ICdmaXhlZCcsXG4gICAgICAnYmFja2dyb3VuZENvbG9yJzogJ2JhY2tncm91bmQnLFxuICAgICAgJ2NvbG9yJzogJyMwMDAwMDAnLFxuICAgICAgJ2JveFNoYWRvdyc6ICcwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjA2KScsXG4gICAgICAncHknOiAzLFxuICAgICAgJ25ldiA+IGEnOiB7XG4gICAgICAgIGNvbG9yOiAndGV4dCcsXG4gICAgICB9LFxuICAgICAgJy5kb25hdGVfX2J0bic6IHtcbiAgICAgICAgJ2JvcmRlckNvbG9yJzogJ3ByaW1hcnknLFxuICAgICAgICAnY29sb3InOiAncHJpbWFyeScsXG4gICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgIGJveFNoYWRvdzogJ3JnYmEoMzEsIDYyLCAxMTgsIDAuNTcpIDBweCA5cHggMjBweCAtNXB4JyxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdwcmltYXJ5JyxcbiAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgY29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gIH0sXG4gIG5hdjoge1xuICAgICdteCc6ICdhdXRvJyxcbiAgICAnZGlzcGxheSc6ICdub25lJyxcbiAgICAnQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSc6IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgfSxcbiAgICAnYSc6IHtcbiAgICAgICdmb250U2l6ZSc6ICcxNnB4JyxcbiAgICAgICdmb250V2VpZ2h0JzogJzQwMCcsXG4gICAgICAncHgnOiAyNSxcbiAgICAgICdjdXJzb3InOiAncG9pbnRlcicsXG4gICAgICAnbGluZUhlaWdodCc6ICcxLjInLFxuICAgICAgJyYuYWN0aXZlJzoge1xuICAgICAgICBjb2xvcjogJ3NlY29uZGFyeScsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59XG4iXSwic291cmNlUm9vdCI6IiJ9