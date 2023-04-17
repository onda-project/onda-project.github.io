webpackHotUpdate_N_E(2,{

/***/ "./src/assets/sponsor/cnpq-logo.png":
/*!******************************************!*\
  !*** ./src/assets/sponsor/cnpq-logo.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/_next/static/media/cnpq-logo.923957429ee1e372e24ff550bd122938.png");

/***/ }),

/***/ "./src/assets/sponsor/dropbox.svg":
false,

/***/ "./src/assets/sponsor/google.svg":
false,

/***/ "./src/assets/sponsor/govrs-logo.png":
/*!*******************************************!*\
  !*** ./src/assets/sponsor/govrs-logo.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/_next/static/media/govrs-logo.7e296b37cb90d8c14ad253c33137f150.png");

/***/ }),

/***/ "./src/assets/sponsor/paypal.svg":
false,

/***/ "./src/assets/sponsor/uergs-logo.png":
/*!*******************************************!*\
  !*** ./src/assets/sponsor/uergs-logo.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/_next/static/media/uergs-logo.a6844651082346346175e0784737add8.png");

/***/ }),

/***/ "./src/sections/banner.js":
/*!********************************!*\
  !*** ./src/sections/banner.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Banner; });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal-video */ "./node_modules/react-modal-video/lib/index.js");
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal_video__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/link */ "./src/components/link.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _assets_bannerBg_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/assets/bannerBg.png */ "./src/assets/bannerBg.png");
/* harmony import */ var _assets_banner_thumb_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/assets/banner-thumb.png */ "./src/assets/banner-thumb.png");
/* harmony import */ var _assets_sponsor_uergs_logo_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/assets/sponsor/uergs-logo.png */ "./src/assets/sponsor/uergs-logo.png");
/* harmony import */ var _assets_sponsor_govrs_logo_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/assets/sponsor/govrs-logo.png */ "./src/assets/sponsor/govrs-logo.png");
/* harmony import */ var _assets_sponsor_cnpq_logo_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/assets/sponsor/cnpq-logo.png */ "./src/assets/sponsor/cnpq-logo.png");
var _jsxFileName = "/home/nick/workspace/onda-project/onda-website/src/sections/banner.js",
  _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
/** @jsx jsx */












var data = [{
  id: 1,
  path: 'https://www.uergs.edu.br',
  image: _assets_sponsor_uergs_logo_png__WEBPACK_IMPORTED_MODULE_9__["default"],
  title: 'uergs'
}, {
  id: 2,
  path: '#',
  image: _assets_sponsor_govrs_logo_png__WEBPACK_IMPORTED_MODULE_8__["default"],
  title: 'govrs'
}, {
  id: 3,
  path: '#',
  image: _assets_sponsor_cnpq_logo_png__WEBPACK_IMPORTED_MODULE_10__["default"],
  title: 'cnpq'
}];
function Banner() {
  _s();
  var _this = this;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
    videoOpen = _useState[0],
    setVideoOpen = _useState[1];
  var handleClick = function handleClick(e) {
    e.preventDefault();
    setVideoOpen(true);
  };
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("section", {
    sx: styles.banner,
    id: "home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Container"], {
    sx: styles.banner.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    sx: styles.banner.contentBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Heading"], {
    as: "h1",
    variant: "heroPrimary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, "Experience your ultimate mobile application"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Text"], {
    as: "p",
    variant: "heroSecondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, "Get your blood tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever."), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Flex"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    variant: "whiteButton",
    "aria-label": "Get Started",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, "Get Started"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_modal_video__WEBPACK_IMPORTED_MODULE_2___default.a, {
    channel: "youtube",
    isOpen: videoOpen,
    videoId: "ZNA9rmDsYVE",
    onClose: function onClose() {
      return setVideoOpen(false);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    variant: "textButton",
    "aria-label": "Watch Video",
    onClick: handleClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 15
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaPlayCircle"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }), " Watch Video"))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Flex"], {
    sx: styles.sponsorBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Text"], {
    sx: styles.sponsorTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, "Apoio:"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    sx: styles.sponsorBox.sponsor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, data.map(function (item, index) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      path: item.path,
      key: "client-key".concat(index),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Image"], {
      src: item.image,
      alt: item.title,
      width: "100",
      height: "28",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 19
      }
    }));
  })))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    sx: styles.banner.imageBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Image"], {
    src: _assets_banner_thumb_png__WEBPACK_IMPORTED_MODULE_6__["default"],
    alt: "banner",
    width: "1126",
    height: "796",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 11
    }
  }))));
}
_s(Banner, "fjrTXSMqqo5cVpzR03nEXJYpFAo=");
_c = Banner;
var styles = {
  banner: {
    overflow: ['hidden', 'initial', null, 'hidden'],
    backgroundImage: "url(".concat(_assets_bannerBg_png__WEBPACK_IMPORTED_MODULE_5__["default"], ")"),
    backgroundRepeat: "no-repeat",
    backgroundPosition: 'top left',
    backgroundSize: 'cover',
    borderBottomRightRadius: [100, 150, null, null, null, 250],
    pt: ['150px', null, null, null, null, null, '140px', '130px'],
    pb: ['100px', null, null, '110px', null, 10, '150px'],
    backgroundColor: 'primary',
    container: {
      display: 'flex'
    },
    contentBox: {
      width: ['100%', null, '85%', '55%', '50%', '55%'],
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      flexShrink: 0,
      pt: [0, null, null, null, null, null, 5, 7]
    },
    imageBox: {
      display: ['none', null, null, 'block'],
      justifyContent: 'center',
      ml: [0, null, null, '-110px', '-115px', '-150px', '-210px', '-270px'],
      mr: [0, null, null, '-145px', '-160px', '-180px', '-220px', '-290px'],
      mt: [0, null, null, '40px', 4, 7, 0],
      mb: [0, null, null, null, '-45px', '-70px', null, '-115px'],
      overflow: 'hidden',
      textAlign: 'right',
      width: '100%'
    }
  },
  sponsorTitle: {
    color: 'white',
    fontSize: [1, 2],
    opacity: 0.6,
    pr: 20,
    flexShrink: 0,
    pb: [2, null, 0]
  },
  sponsorBox: {
    pt: ['35px', null, null, null, null, '45px'],
    flexDirection: ['column', null, 'row'],
    sponsor: {
      'display': 'flex',
      'alignItems': 'center',
      '> a': {
        'mr': [5, null, null, 4, 6],
        'display': 'flex',
        '&:last-of-type': {
          mr: 0
        }
      }
    }
  }
};
var _c;
$RefreshReg$(_c, "Banner");

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

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2Fzc2V0cy9zcG9uc29yL2NucHEtbG9nby5wbmciLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hc3NldHMvc3BvbnNvci9nb3Zycy1sb2dvLnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2Fzc2V0cy9zcG9uc29yL3VlcmdzLWxvZ28ucG5nIiwid2VicGFjazovL19OX0UvLi9zcmMvc2VjdGlvbnMvYmFubmVyLmpzIl0sIm5hbWVzIjpbImRhdGEiLCJpZCIsInBhdGgiLCJpbWFnZSIsImNsaWVudDEiLCJ0aXRsZSIsImNsaWVudDIiLCJjbGllbnQzIiwiQmFubmVyIiwiX3MiLCJfdGhpcyIsIl91c2VTdGF0ZSIsInVzZVN0YXRlIiwidmlkZW9PcGVuIiwic2V0VmlkZW9PcGVuIiwiaGFuZGxlQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJqc3giLCJzeCIsInN0eWxlcyIsImJhbm5lciIsIl9fc2VsZiIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiQ29udGFpbmVyIiwiY29udGFpbmVyIiwiQm94IiwiY29udGVudEJveCIsIkhlYWRpbmciLCJhcyIsInZhcmlhbnQiLCJUZXh0IiwiRmxleCIsIkJ1dHRvbiIsIlJlYWN0IiwiRnJhZ21lbnQiLCJNb2RhbFZpZGVvIiwiY2hhbm5lbCIsImlzT3BlbiIsInZpZGVvSWQiLCJvbkNsb3NlIiwib25DbGljayIsIkZhUGxheUNpcmNsZSIsInNwb25zb3JCb3giLCJzcG9uc29yVGl0bGUiLCJzcG9uc29yIiwibWFwIiwiaXRlbSIsImluZGV4IiwiTGluayIsImtleSIsImNvbmNhdCIsIkltYWdlIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJpbWFnZUJveCIsIkJhbm5lclRodW1iIiwiX2MiLCJvdmVyZmxvdyIsImJhY2tncm91bmRJbWFnZSIsIkJhbm5lckJHIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRTaXplIiwiYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMiLCJwdCIsInBiIiwiYmFja2dyb3VuZENvbG9yIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwiZmxleFNocmluayIsImp1c3RpZnlDb250ZW50IiwibWwiLCJtciIsIm10IiwibWIiLCJ0ZXh0QWxpZ24iLCJjb2xvciIsImZvbnRTaXplIiwib3BhY2l0eSIsInByIiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBZSxtSUFBb0UsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQW5GO0FBQWUsb0lBQXFFLEU7Ozs7Ozs7Ozs7Ozs7OztBQ0FwRjtBQUFlLG9JQUFxRSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FwRjs7QUFFOEI7QUFDK0M7QUFDdEM7QUFDRztBQUNGO0FBQ0s7QUFDRDtBQUNPO0FBRUU7QUFDQTtBQUNEO0FBRXBELElBQU1BLElBQUksR0FBRyxDQUNYO0VBQ0VDLEVBQUUsRUFBRSxDQUFDO0VBQ0xDLElBQUksRUFBRSwwQkFBMEI7RUFDaENDLEtBQUssRUFBRUMsc0VBQU87RUFDZEMsS0FBSyxFQUFFO0FBQ1QsQ0FBQyxFQUNEO0VBQ0VKLEVBQUUsRUFBRSxDQUFDO0VBQ0xDLElBQUksRUFBRSxHQUFHO0VBQ1RDLEtBQUssRUFBRUcsc0VBQU87RUFDZEQsS0FBSyxFQUFFO0FBQ1QsQ0FBQyxFQUNEO0VBQ0VKLEVBQUUsRUFBRSxDQUFDO0VBQ0xDLElBQUksRUFBRSxHQUFHO0VBQ1RDLEtBQUssRUFBRUksc0VBQU87RUFDZEYsS0FBSyxFQUFFO0FBQ1QsQ0FBQyxDQUNGO0FBRWMsU0FBU0csTUFBTUEsQ0FBQSxFQUFHO0VBQUFDLEVBQUE7RUFBQSxJQUFBQyxLQUFBO0VBQy9CLElBQUFDLFNBQUEsR0FBa0NDLHNEQUFRLENBQUMsS0FBSyxDQUFDO0lBQTFDQyxTQUFTLEdBQUFGLFNBQUE7SUFBRUcsWUFB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Q0RYLFlBQVksRUFBRTtJQUNab0MsS0FBSyxFQUFFLE9BQU87SUFDZEMsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNoQkMsT0FBTyxFQUFFLEdBQUc7SUFDWkMsRUFBRSxFQUFFLEVBQUU7SUFDTlYsVUFBVSxFQUFFLENBQUM7SUFDYkwsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDO0VBQ2pCLENBQUM7RUFDRHpCLFVBQVUsRUFBRTtJQUNWd0IsRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUM7SUFDNUNJLGFBQWEsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDO0lBQ3RDMUIsT0FBTyxFQUFFO01BQ1AsU0FBUyxFQUFFLE1BQU07TUFDakIsWUFBWSxFQUFFLFFBQVE7TUFDdEIsS0FBSyxFQUFFO1FBQ0wsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMzQixTQUFTLEVBQUUsTUFBTTtRQUNqQixnQkFBZ0IsRUFBRTtVQUNoQitCLEVBQUUsRUFBRTtRQUNOO01BQ0Y7SUFDRjtFQUNGO0FBQ0YsQ0FBQztBQUFBLElBQUFqQixFQUFBO0FBQUF5QixZQUFBLENBQUF6QixFQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrLzIuYTEyMDcyYWYwMWI3OTczNDI5NGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiL19uZXh0L3N0YXRpYy9tZWRpYS9jbnBxLWxvZ28uOTIzOTU3NDI5ZWUxZTM3MmUyNGZmNTUwYmQxMjI5MzgucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvX25leHQvc3RhdGljL21lZGlhL2dvdnJzLWxvZ28uN2UyOTZiMzdjYjkwZDhjMTRhZDI1M2MzMzEzN2YxNTAucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvX25leHQvc3RhdGljL21lZGlhL3VlcmdzLWxvZ28uYTY4NDQ2NTEwODIzNDYzNDYxNzVlMDc4NDczN2FkZDgucG5nXCI7IiwiLyoqIEBqc3gganN4ICovXG5cbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJ1xuaW1wb3J0IHsgQ29udGFpbmVyLCBGbGV4LCBCb3gsIEhlYWRpbmcsIFRleHQsIEltYWdlLCBCdXR0b24gfSBmcm9tICd0aGVtZS11aSdcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE1vZGFsVmlkZW8gZnJvbSAncmVhY3QtbW9kYWwtdmlkZW8nXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnQC9jb21wb25lbnRzL2xpbmsnXG5pbXBvcnQgeyBGYVBsYXlDaXJjbGUgfSBmcm9tICdyZWFjdC1pY29ucy9mYSdcbmltcG9ydCBCYW5uZXJCRyBmcm9tICdAL2Fzc2V0cy9iYW5uZXJCZy5wbmcnXG5pbXBvcnQgQmFubmVyVGh1bWIgZnJvbSAnQC9hc3NldHMvYmFubmVyLXRodW1iLnBuZydcblxuaW1wb3J0IGNsaWVudDEgZnJvbSAnQC9hc3NldHMvc3BvbnNvci91ZXJncy1sb2dvLnBuZydcbmltcG9ydCBjbGllbnQyIGZyb20gJ0AvYXNzZXRzL3Nwb25zb3IvZ292cnMtbG9nby5wbmcnXG5pbXBvcnQgY2xpZW50MyBmcm9tICdAL2Fzc2V0cy9zcG9uc29yL2NucHEtbG9nby5wbmcnXG5cbmNvbnN0IGRhdGEgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICBwYXRoOiAnaHR0cHM6Ly93d3cudWVyZ3MuZWR1LmJyJyxcbiAgICBpbWFnZTogY2xpZW50MSxcbiAgICB0aXRsZTogJ3VlcmdzJyxcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIHBhdGg6ICcjJyxcbiAgICBpbWFnZTogY2xpZW50MixcbiAgICB0aXRsZTogJ2dvdnJzJyxcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIHBhdGg6ICcjJyxcbiAgICBpbWFnZTogY2xpZW50MyxcbiAgICB0aXRsZTogJ2NucHEnLFxuICB9LFxuXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYW5uZXIoKSB7XG4gIGNvbnN0IFt2aWRlb09wZW4sIHNldFZpZGVvT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBzZXRWaWRlb09wZW4odHJ1ZSlcbiAgfVxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIHN4PXtzdHlsZXMuYmFubmVyfSBpZD1cImhvbWVcIj5cbiAgICAgIDxDb250YWluZXIgc3g9e3N0eWxlcy5iYW5uZXIuY29udGFpbmVyfT5cbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmJhbm5lci5jb250ZW50Qm94fT5cbiAgICAgICAgICA8SGVhZGluZyBhcz1cImgxXCIgdmFyaWFudD1cImhlcm9QcmltYXJ5XCI+XG4gICAgICAgICAgICBFeHBlcmllbmNlIHlvdXIgdWx0aW1hdGUgbW9iaWxlIGFwcGxpY2F0aW9uXG4gICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgIDxUZXh0IGFzPVwicFwiIHZhcmlhbnQ9XCJoZXJvU2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICBHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgbGV0IGhvbWUgY29sbGVjdCBzYW1wbGUgZnJvbSB0aGVcbiAgICAgICAgICAgIHZpY3Rvcnkgb2YgdGhlIG1hbmFnZW1lbnRzIHRoYXQgc3VwcGxpZXMgYmVzdCBkZXNpZ24gc3lzdGVtXG4gICAgICAgICAgICBndWlkZWxpbmVzIGV2ZXIuXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxGbGV4PlxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwid2hpdGVCdXR0b25cIiBhcmlhLWxhYmVsPVwiR2V0IFN0YXJ0ZWRcIj5cbiAgICAgICAgICAgICAgR2V0IFN0YXJ0ZWRcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPE1vZGFsVmlkZW9cbiAgICAgICAgICAgICAgICBjaGFubmVsPVwieW91dHViZVwiXG4gICAgICAgICAgICAgICAgaXNPcGVuPXt2aWRlb09wZW59XG4gICAgICAgICAgICAgICAgdmlkZW9JZD1cIlpOQTlybURzWVZFXCJcbiAgICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRWaWRlb09wZW4oZmFsc2UpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInRleHRCdXR0b25cIlxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJXYXRjaCBWaWRlb1wiXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8RmFQbGF5Q2lyY2xlIC8+IFdhdGNoIFZpZGVvXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgIDxGbGV4IHN4PXtzdHlsZXMuc3BvbnNvckJveH0+XG4gICAgICAgICAgICA8VGV4dCBzeD17c3R5bGVzLnNwb25zb3JUaXRsZX0+QXBvaW86PC9UZXh0PlxuICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLnNwb25zb3JCb3guc3BvbnNvcn0+XG4gICAgICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8TGluayBwYXRoPXtpdGVtLnBhdGh9IGtleT17YGNsaWVudC1rZXkke2luZGV4fWB9PlxuICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgIHNyYz17aXRlbS5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgYWx0PXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMFwiXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjI4XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmJhbm5lci5pbWFnZUJveH0+XG4gICAgICAgICAgPEltYWdlIHNyYz17QmFubmVyVGh1bWJ9IGFsdD1cImJhbm5lclwiIHdpZHRoPVwiMTEyNlwiIGhlaWdodD1cIjc5NlwiIC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgYmFubmVyOiB7XG4gICAgb3ZlcmZsb3c6IFsnaGlkZGVuJywgJ2luaXRpYWwnLCBudWxsLCAnaGlkZGVuJ10sXG4gICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7QmFubmVyQkd9KWAsXG4gICAgYmFja2dyb3VuZFJlcGVhdDogYG5vLXJlcGVhdGAsXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAndG9wIGxlZnQnLFxuICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxuICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiBbMTAwLCAxNTAsIG51bGwsIG51bGwsIG51bGwsIDI1MF0sXG4gICAgcHQ6IFsnMTUwcHgnLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnMTQwcHgnLCAnMTMwcHgnXSxcbiAgICBwYjogWycxMDBweCcsIG51bGwsIG51bGwsICcxMTBweCcsIG51bGwsIDEwLCAnMTUwcHgnXSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdwcmltYXJ5JyxcbiAgICBjb250YWluZXI6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICB9LFxuICAgIGNvbnRlbnRCb3g6IHtcbiAgICAgIHdpZHRoOiBbJzEwMCUnLCBudWxsLCAnODUlJywgJzU1JScsICc1MCUnLCAnNTUlJ10sXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcbiAgICAgIGZsZXhTaHJpbms6IDAsXG4gICAgICBwdDogWzAsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDUsIDddLFxuICAgIH0sXG4gICAgaW1hZ2VCb3g6IHtcbiAgICAgIGRpc3BsYXk6IFsnbm9uZScsIG51bGwsIG51bGwsICdibG9jayddLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgbWw6IFswLCBudWxsLCBudWxsLCAnLTExMHB4JywgJy0xMTVweCcsICctMTUwcHgnLCAnLTIxMHB4JywgJy0yNzBweCddLFxuICAgICAgbXI6IFswLCBudWxsLCBudWxsLCAnLTE0NXB4JywgJy0xNjBweCcsICctMTgwcHgnLCAnLTIyMHB4JywgJy0yOTBweCddLFxuICAgICAgbXQ6IFswLCBudWxsLCBudWxsLCAnNDBweCcsIDQsIDcsIDBdLFxuICAgICAgbWI6IFswLCBudWxsLCBudWxsLCBudWxsLCAnLTQ1cHgnLCAnLTcwcHgnLCBudWxsLCAnLTExNXB4J10sXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICB0ZXh0QWxpZ246ICdyaWdodCcsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH0sXG4gIH0sXG4gIHNwb25zb3JUaXRsZToge1xuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIGZvbnRTaXplOiBbMSwgMl0sXG4gICAgb3BhY2l0eTogMC42LFxuICAgIHByOiAyMCxcbiAgICBmbGV4U2hyaW5rOiAwLFxuICAgIHBiOiBbMiwgbnVsbCwgMF0sXG4gIH0sXG4gIHNwb25zb3JCb3g6IHtcbiAgICBwdDogWyczNXB4JywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJzQ1cHgnXSxcbiAgICBmbGV4RGlyZWN0aW9uOiBbJ2NvbHVtbicsIG51bGwsICdyb3cnXSxcbiAgICBzcG9uc29yOiB7XG4gICAgICAnZGlzcGxheSc6ICdmbGV4JyxcbiAgICAgICdhbGlnbkl0ZW1zJzogJ2NlbnRlcicsXG4gICAgICAnPiBhJzoge1xuICAgICAgICAnbXInOiBbNSwgbnVsbCwgbnVsbCwgNCwgNl0sXG4gICAgICAgICdkaXNwbGF5JzogJ2ZsZXgnLFxuICAgICAgICAnJjpsYXN0LW9mLXR5cGUnOiB7XG4gICAgICAgICAgbXI6IDAsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59XG4iXSwic291cmNlUm9vdCI6IiJ9