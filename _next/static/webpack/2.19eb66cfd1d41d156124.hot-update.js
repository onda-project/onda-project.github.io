webpackHotUpdate_N_E(2,{

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
/* harmony import */ var _assets_sponsor_uergs_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/assets/sponsor/uergs.png */ "./src/assets/sponsor/uergs.png");
/* harmony import */ var _assets_sponsor_govrs_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/assets/sponsor/govrs.png */ "./src/assets/sponsor/govrs.png");
/* harmony import */ var _assets_sponsor_cnpq_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/assets/sponsor/cnpq.png */ "./src/assets/sponsor/cnpq.png");
var _jsxFileName = "/home/nick/workspace/onda-project/onda-website/src/sections/banner.js",
  _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
/** @jsx jsx */












var data = [{
  id: 1,
  path: 'https://www.uergs.edu.br',
  image: _assets_sponsor_uergs_png__WEBPACK_IMPORTED_MODULE_7__["default"],
  title: 'uergs'
}, {
  id: 2,
  path: 'https://www.rs.gov.br',
  image: _assets_sponsor_govrs_png__WEBPACK_IMPORTED_MODULE_8__["default"],
  title: 'govrs'
}, {
  id: 3,
  path: 'https://www.cnpq.br',
  image: _assets_sponsor_cnpq_png__WEBPACK_IMPORTED_MODULE_9__["default"],
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
      key: "client-key".concat(index),
      path: item.path,
      targe: "_blank",
      rel: "noopener noreferrer",
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
        lineNumber: 85,
        columnNumber: 19
      }
    }));
  })))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    sx: styles.banner.imageBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
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
      lineNumber: 98,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2Jhbm5lci5qcyJdLCJuYW1lcyI6WyJkYXRhIiwiaWQiLCJwYXRoIiwiaW1hZ2UiLCJjbGllbnQxIiwidGl0bGUiLCJjbGllbnQyIiwiY2xpZW50MyIsIkJhbm5lciIsIl9zIiwiX3RoaXMiLCJfdXNlU3RhdGUiLCJ1c2VTdGF0ZSIsInZpZGVvT3BlbiIsInNldFZpZGVvT3BlbiIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwianN4Iiwic3giLCJzdHlsZXMiLCJiYW5uZXIiLCJfX3NlbGYiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIkNvbnRhaW5lciIsImNvbnRhaW5lciIsIkJveCIsImNvbnRlbnRCb3giLCJIZWFkaW5nIiwiYXMiLCJ2YXJpYW50IiwiVGV4dCIsIkZsZXgiLCJCdXR0b24iLCJSZWFjdCIsIkZyYWdtZW50IiwiTW9kYWxWaWRlbyIsImNoYW5uZWwiLCJpc09wZW4iLCJ2aWRlb0lkIiwib25DbG9zZSIsIm9uQ2xpY2siLCJGYVBsYXlDaXJjbGUiLCJzcG9uc29yQm94Iiwic3BvbnNvclRpdGxlIiwic3BvbnNvciIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIkxpbmsiLCJrZXkiLCJjb25jYXQiLCJ0YXJnZSIsInJlbCIsIkltYWdlIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJpbWFnZUJveCIsIkJhbm5lclRodW1iIiwiX2MiLCJvdmVyZmxvdyIsImJhY2tncm91bmRJbWFnZSIsIkJhbm5lckJHIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRTaXplIiwiYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMiLCJwdCIsInBiIiwiYmFja2dyb3VuZENvbG9yIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwiZmxleFNocmluayIsImp1c3RpZnlDb250ZW50IiwibWwiLCJtciIsIm10IiwibWIiLCJ0ZXh0QWxpZ24iLCJjb2xvciIsImZvbnRTaXplIiwib3BhY2l0eSIsInByIiwiJFJlZnJlc2hSZWckIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFOEI7QUFDK0M7QUFDdEM7QUFDRztBQUNGO0FBQ0s7QUFDRDtBQUNPO0FBRUg7QUFDQTtBQUNEO0FBRS9DLElBQU1BLElBQUksR0FBRyxDQUNYO0VBQ0VDLEVBQUUsRUFBRSxDQUFDO0VBQ0xDLElBQUksRUFBRSwwQkFBMEI7RUFDaENDLEtBQUssRUFBRUMsaUVBQU87RUFDZEMsS0FBSyxFQUFFO0FBQ1QsQ0FBQyxFQUNEO0VBQ0VKLEVBQUUsRUFBRSxDQUFDO0VBQ0xDLElBQUksRUFBRSx1QkFBdUI7RUFDN0JDLEtBQUssRUFBRUcsaUVBQU87RUFDZEQsS0FBSyxFQUFFO0FBQ1QsQ0FBQyxFQUNEO0VBQ0VKLEVBQUUsRUFBRSxDQUFDO0VBQ0xDLElBQUksRUFBRSxxQkFBcUI7RUFDM0JDLEtBQUssRUFBRUksZ0VBQU87RUFDZEYsS0FBSyxFQUFFO0FBQ1QsQ0FBQyxDQUNGO0FBRWMsU0FBU0csTUFBTUEsQ0FBQSxFQUFHO0VBQUFDLEVBQUE7RUFBQSxJQUFBQyxLQUFBO0VBQy9CLElBQUFDLFNBQUEsR0FBa0NDLHNEQUFRLENBQUMsS0FBSyxDQUFDO0lBQTFDQyxTQUFTLEdBQUFGLFNBQUE7SUFBRUcsWUFBWSxHQUFBSCxTQUFBO0VBQzlCLElBQU1JLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFHQyxDQUFDLEVBQUk7SUFDdkJBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFO0lBQ2xCSCxZQUFZLENBQUMsSUFBSSxDQUFDO0VBQ3BCLENBQUM7RUFDRCxPQUNFSSxvREFBQTtJQUFTQyxFQUFFLEVBQUVDLE1BQU0sQ0FBQ0MsTUFBTztJQUFDcEIsRUFBRSxFQUFDLE1BQU07SUFBQXFCLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFD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QUFDO0VBQ0QzQixVQUFVLEVBQUU7SUFDVjBCLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDO0lBQzVDSSxhQUFhLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQztJQUN0QzVCLE9BQU8sRUFBRTtNQUNQLFNBQVMsRUFBRSxNQUFNO01BQ2pCLFlBQVksRUFBRSxRQUFRO01BQ3RCLEtBQUssRUFBRTtRQUNMLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDM0IsU0FBUyxFQUFFLE1BQU07UUFDakIsZ0JBQWdCLEVBQUU7VUFDaEJpQyxFQUFFLEVBQUU7UUFDTjtNQUNGO0lBQ0Y7RUFDRjtBQUNGLENBQUM7QUFBQSxJQUFBakIsRUFBQTtBQUFBeUIsWUFBQSxDQUFBekIsRUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay8yLjE5ZWI2NmNmZDFkNDFkMTU2MTI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cblxuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknXG5pbXBvcnQgeyBDb250YWluZXIsIEZsZXgsIEJveCwgSGVhZGluZywgVGV4dCwgSW1hZ2UsIEJ1dHRvbiB9IGZyb20gJ3RoZW1lLXVpJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTW9kYWxWaWRlbyBmcm9tICdyZWFjdC1tb2RhbC12aWRlbydcbmltcG9ydCB7IExpbmsgfSBmcm9tICdAL2NvbXBvbmVudHMvbGluaydcbmltcG9ydCB7IEZhUGxheUNpcmNsZSB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJ1xuaW1wb3J0IEJhbm5lckJHIGZyb20gJ0AvYXNzZXRzL2Jhbm5lckJnLnBuZydcbmltcG9ydCBCYW5uZXJUaHVtYiBmcm9tICdAL2Fzc2V0cy9iYW5uZXItdGh1bWIucG5nJ1xuXG5pbXBvcnQgY2xpZW50MSBmcm9tICdAL2Fzc2V0cy9zcG9uc29yL3VlcmdzLnBuZydcbmltcG9ydCBjbGllbnQyIGZyb20gJ0AvYXNzZXRzL3Nwb25zb3IvZ292cnMucG5nJ1xuaW1wb3J0IGNsaWVudDMgZnJvbSAnQC9hc3NldHMvc3BvbnNvci9jbnBxLnBuZydcblxuY29uc3QgZGF0YSA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIHBhdGg6ICdodHRwczovL3d3dy51ZXJncy5lZHUuYnInLFxuICAgIGltYWdlOiBjbGllbnQxLFxuICAgIHRpdGxlOiAndWVyZ3MnLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgcGF0aDogJ2h0dHBzOi8vd3d3LnJzLmdvdi5icicsXG4gICAgaW1hZ2U6IGNsaWVudDIsXG4gICAgdGl0bGU6ICdnb3ZycycsXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICBwYXRoOiAnaHR0cHM6Ly93d3cuY25wcS5icicsXG4gICAgaW1hZ2U6IGNsaWVudDMsXG4gICAgdGl0bGU6ICdjbnBxJyxcbiAgfSxcbl1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmFubmVyKCkge1xuICBjb25zdCBbdmlkZW9PcGVuLCBzZXRWaWRlb09wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgc2V0VmlkZW9PcGVuKHRydWUpXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBzeD17c3R5bGVzLmJhbm5lcn0gaWQ9XCJob21lXCI+XG4gICAgICA8Q29udGFpbmVyIHN4PXtzdHlsZXMuYmFubmVyLmNvbnRhaW5lcn0+XG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5iYW5uZXIuY29udGVudEJveH0+XG4gICAgICAgICAgPEhlYWRpbmcgYXM9XCJoMVwiIHZhcmlhbnQ9XCJoZXJvUHJpbWFyeVwiPlxuICAgICAgICAgICAgRXhwZXJpZW5jZSB5b3VyIHVsdGltYXRlIG1vYmlsZSBhcHBsaWNhdGlvblxuICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICA8VGV4dCBhcz1cInBcIiB2YXJpYW50PVwiaGVyb1NlY29uZGFyeVwiPlxuICAgICAgICAgICAgR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0IGxldCBob21lIGNvbGxlY3Qgc2FtcGxlIGZyb20gdGhlXG4gICAgICAgICAgICB2aWN0b3J5IG9mIHRoZSBtYW5hZ2VtZW50cyB0aGF0IHN1cHBsaWVzIGJlc3QgZGVzaWduIHN5c3RlbVxuICAgICAgICAgICAgZ3VpZGVsaW5lcyBldmVyLlxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8RmxleD5cbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIndoaXRlQnV0dG9uXCIgYXJpYS1sYWJlbD1cIkdldCBTdGFydGVkXCI+XG4gICAgICAgICAgICAgIEdldCBTdGFydGVkXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxNb2RhbFZpZGVvXG4gICAgICAgICAgICAgICAgY2hhbm5lbD1cInlvdXR1YmVcIlxuICAgICAgICAgICAgICAgIGlzT3Blbj17dmlkZW9PcGVufVxuICAgICAgICAgICAgICAgIHZpZGVvSWQ9XCJaTkE5cm1Ec1lWRVwiXG4gICAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0VmlkZW9PcGVuKGZhbHNlKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXh0QnV0dG9uXCJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiV2F0Y2ggVmlkZW9cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEZhUGxheUNpcmNsZSAvPiBXYXRjaCBWaWRlb1xuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICA8RmxleCBzeD17c3R5bGVzLnNwb25zb3JCb3h9PlxuICAgICAgICAgICAgPFRleHQgc3g9e3N0eWxlcy5zcG9uc29yVGl0bGV9PkFwb2lvOjwvVGV4dD5cbiAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5zcG9uc29yQm94LnNwb25zb3J9PlxuICAgICAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgIGtleT17YGNsaWVudC1rZXkke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgICBwYXRoPXtpdGVtLnBhdGh9XG4gICAgICAgICAgICAgICAgICB0YXJnZT1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtpdGVtLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9e2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjhcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8L0JveD5cblxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuYmFubmVyLmltYWdlQm94fT5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtCYW5uZXJUaHVtYn0gYWx0PVwiYmFubmVyXCIgd2lkdGg9XCIxMTI2XCIgaGVpZ2h0PVwiNzk2XCIgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBiYW5uZXI6IHtcbiAgICBvdmVyZmxvdzogWydoaWRkZW4nLCAnaW5pdGlhbCcsIG51bGwsICdoaWRkZW4nXSxcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtCYW5uZXJCR30pYCxcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiBgbm8tcmVwZWF0YCxcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICd0b3AgbGVmdCcsXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXG4gICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6IFsxMDAsIDE1MCwgbnVsbCwgbnVsbCwgbnVsbCwgMjUwXSxcbiAgICBwdDogWycxNTBweCcsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICcxNDBweCcsICcxMzBweCddLFxuICAgIHBiOiBbJzEwMHB4JywgbnVsbCwgbnVsbCwgJzExMHB4JywgbnVsbCwgMTAsICcxNTBweCddLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3ByaW1hcnknLFxuICAgIGNvbnRhaW5lcjoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIH0sXG4gICAgY29udGVudEJveDoge1xuICAgICAgd2lkdGg6IFsnMTAwJScsIG51bGwsICc4NSUnLCAnNTUlJywgJzUwJScsICc1NSUnXSxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxuICAgICAgZmxleFNocmluazogMCxcbiAgICAgIHB0OiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNSwgN10sXG4gICAgfSxcbiAgICBpbWFnZUJveDoge1xuICAgICAgZGlzcGxheTogWydub25lJywgbnVsbCwgbnVsbCwgJ2Jsb2NrJ10sXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBtbDogWzAsIG51bGwsIG51bGwsICctMTEwcHgnLCAnLTExNXB4JywgJy0xNTBweCcsICctMjEwcHgnLCAnLTI3MHB4J10sXG4gICAgICBtcjogWzAsIG51bGwsIG51bGwsICctMTQ1cHgnLCAnLTE2MHB4JywgJy0xODBweCcsICctMjIwcHgnLCAnLTI5MHB4J10sXG4gICAgICBtdDogWzAsIG51bGwsIG51bGwsICc0MHB4JywgNCwgNywgMF0sXG4gICAgICBtYjogWzAsIG51bGwsIG51bGwsIG51bGwsICctNDVweCcsICctNzBweCcsIG51bGwsICctMTE1cHgnXSxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIHRleHRBbGlnbjogJ3JpZ2h0JyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgfSxcbiAgfSxcbiAgc3BvbnNvclRpdGxlOiB7XG4gICAgY29sb3I6ICd3aGl0ZScsXG4gICAgZm9udFNpemU6IFsxLCAyXSxcbiAgICBvcGFjaXR5OiAwLjYsXG4gICAgcHI6IDIwLFxuICAgIGZsZXhTaHJpbms6IDAsXG4gICAgcGI6IFsyLCBudWxsLCAwXSxcbiAgfSxcbiAgc3BvbnNvckJveDoge1xuICAgIHB0OiBbJzM1cHgnLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnNDVweCddLFxuICAgIGZsZXhEaXJlY3Rpb246IFsnY29sdW1uJywgbnVsbCwgJ3JvdyddLFxuICAgIHNwb25zb3I6IHtcbiAgICAgICdkaXNwbGF5JzogJ2ZsZXgnLFxuICAgICAgJ2FsaWduSXRlbXMnOiAnY2VudGVyJyxcbiAgICAgICc+IGEnOiB7XG4gICAgICAgICdtcic6IFs1LCBudWxsLCBudWxsLCA0LCA2XSxcbiAgICAgICAgJ2Rpc3BsYXknOiAnZmxleCcsXG4gICAgICAgICcmOmxhc3Qtb2YtdHlwZSc6IHtcbiAgICAgICAgICBtcjogMCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=