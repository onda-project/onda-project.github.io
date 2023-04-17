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
      rel: "noopener noreferrer",
      path: item.path,
      target: "_blank",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2Jhbm5lci5qcyJdLCJuYW1lcyI6WyJkYXRhIiwiaWQiLCJwYXRoIiwiaW1hZ2UiLCJjbGllbnQxIiwidGl0bGUiLCJjbGllbnQyIiwiY2xpZW50MyIsIkJhbm5lciIsIl9zIiwiX3RoaXMiLCJfdXNlU3RhdGUiLCJ1c2VTdGF0ZSIsInZpZGVvT3BlbiIsInNldFZpZGVvT3BlbiIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwianN4Iiwic3giLCJzdHlsZXMiLCJiYW5uZXIiLCJfX3NlbGYiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIkNvbnRhaW5lciIsImNvbnRhaW5lciIsIkJveCIsImNvbnRlbnRCb3giLCJIZWFkaW5nIiwiYXMiLCJ2YXJpYW50IiwiVGV4dCIsIkZsZXgiLCJCdXR0b24iLCJSZWFjdCIsIkZyYWdtZW50IiwiTW9kYWxWaWRlbyIsImNoYW5uZWwiLCJpc09wZW4iLCJ2aWRlb0lkIiwib25DbG9zZSIsIm9uQ2xpY2siLCJGYVBsYXlDaXJjbGUiLCJzcG9uc29yQm94Iiwic3BvbnNvclRpdGxlIiwic3BvbnNvciIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIkxpbmsiLCJrZXkiLCJjb25jYXQiLCJyZWwiLCJ0YXJnZXQiLCJJbWFnZSIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiaW1hZ2VCb3giLCJCYW5uZXJUaHVtYiIsIl9jIiwib3ZlcmZsb3ciLCJiYWNrZ3JvdW5kSW1hZ2UiLCJCYW5uZXJCRyIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kU2l6ZSIsImJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzIiwicHQiLCJwYiIsImJhY2tncm91bmRDb2xvciIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImZsZXhTaHJpbmsiLCJqdXN0aWZ5Q29udGVudCIsIm1sIiwibXIiLCJtdCIsIm1iIiwidGV4dEFsaWduIiwiY29sb3IiLCJmb250U2l6ZSIsIm9wYWNpdHkiLCJwciIsIiRSZWZyZXNoUmVnJCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRThCO0FBQytDO0FBQ3RDO0FBQ0c7QUFDRjtBQUNLO0FBQ0Q7QUFDTztBQUVIO0FBQ0E7QUFDRDtBQUUvQyxJQUFNQSxJQUFJLEdBQUcsQ0FDWDtFQUNFQyxFQUFFLEVBQUUsQ0FBQztFQUNMQyxJQUFJLEVBQUUsMEJBQTBCO0VBQ2hDQyxLQUFLLEVBQUVDLGlFQUFPO0VBQ2RDLEtBQUssRUFBRTtBQUNULENBQUMsRUFDRDtFQUNFSixFQUFFLEVBQUUsQ0FBQztFQUNMQyxJQUFJLEVBQUUsdUJBQXVCO0VBQzdCQyxLQUFLLEVBQUVHLGlFQUFPO0VBQ2RELEtBQUssRUFBRTtBQUNULENBQUMsRUFDRDtFQUNFSixFQUFFLEVBQUUsQ0FBQztFQUNMQyxJQUFJLEVBQUUscUJBQXFCO0VBQzNCQyxLQUFLLEVBQUVJLGdFQUFPO0VBQ2RGLEtBQUssRUFBRTtBQUNULENBQUMsQ0FDRjtBQUVjLFNBQVNHLE1BQU1BLENBQUEsRUFBRztFQUFBQyxFQUFBO0VBQUEsSUFBQUMsS0FBQTtFQUMvQixJQUFBQyxTQUFBLEdBQWtDQyxzREFBUSxDQUFDLEtBQUssQ0FBQztJQUExQ0MsU0FBUyxHQUFBRixTQUFBO0lBQUVHLFlBQVksR0FBQUgsU0FBQTtFQUM5QixJQUFNSSxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBR0MsQ0FBQyxFQUFJO0lBQ3ZCQSxDQUFDLENBQUNDLGNBQWMsRUFBRTtJQUNsQkgsWUFBWSxDQUFDLElBQUksQ0FBQztFQUNwQixDQUFDO0VBQ0QsT0FDRUksb0RBQUE7SUFBU0MsRUFBRSxFQUFFQyxNQUFNLENBQUNDLE1BQU87SUFBQ3BCLEVBQUUsRUFBQyxNQUFNO0lBQUFxQixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFB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Q0FBQztFQUNEM0IsVUFBVSxFQUFFO0lBQ1YwQixFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQztJQUM1Q0ksYUFBYSxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUM7SUFDdEM1QixPQUFPLEVBQUU7TUFDUCxTQUFTLEVBQUUsTUFBTTtNQUNqQixZQUFZLEVBQUUsUUFBUTtNQUN0QixLQUFLLEVBQUU7UUFDTCxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzNCLFNBQVMsRUFBRSxNQUFNO1FBQ2pCLGdCQUFnQixFQUFFO1VBQ2hCaUMsRUFBRSxFQUFFO1FBQ047TUFDRjtJQUNGO0VBQ0Y7QUFDRixDQUFDO0FBQUEsSUFBQWpCLEVBQUE7QUFBQXlCLFlBQUEsQ0FBQXpCLEVBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svMi4wMGQxYjdkZjM1ZDY0OGIzODVmZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5cbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJ1xuaW1wb3J0IHsgQ29udGFpbmVyLCBGbGV4LCBCb3gsIEhlYWRpbmcsIFRleHQsIEltYWdlLCBCdXR0b24gfSBmcm9tICd0aGVtZS11aSdcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE1vZGFsVmlkZW8gZnJvbSAncmVhY3QtbW9kYWwtdmlkZW8nXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnQC9jb21wb25lbnRzL2xpbmsnXG5pbXBvcnQgeyBGYVBsYXlDaXJjbGUgfSBmcm9tICdyZWFjdC1pY29ucy9mYSdcbmltcG9ydCBCYW5uZXJCRyBmcm9tICdAL2Fzc2V0cy9iYW5uZXJCZy5wbmcnXG5pbXBvcnQgQmFubmVyVGh1bWIgZnJvbSAnQC9hc3NldHMvYmFubmVyLXRodW1iLnBuZydcblxuaW1wb3J0IGNsaWVudDEgZnJvbSAnQC9hc3NldHMvc3BvbnNvci91ZXJncy5wbmcnXG5pbXBvcnQgY2xpZW50MiBmcm9tICdAL2Fzc2V0cy9zcG9uc29yL2dvdnJzLnBuZydcbmltcG9ydCBjbGllbnQzIGZyb20gJ0AvYXNzZXRzL3Nwb25zb3IvY25wcS5wbmcnXG5cbmNvbnN0IGRhdGEgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICBwYXRoOiAnaHR0cHM6Ly93d3cudWVyZ3MuZWR1LmJyJyxcbiAgICBpbWFnZTogY2xpZW50MSxcbiAgICB0aXRsZTogJ3VlcmdzJyxcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIHBhdGg6ICdodHRwczovL3d3dy5ycy5nb3YuYnInLFxuICAgIGltYWdlOiBjbGllbnQyLFxuICAgIHRpdGxlOiAnZ292cnMnLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgcGF0aDogJ2h0dHBzOi8vd3d3LmNucHEuYnInLFxuICAgIGltYWdlOiBjbGllbnQzLFxuICAgIHRpdGxlOiAnY25wcScsXG4gIH0sXG5dXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJhbm5lcigpIHtcbiAgY29uc3QgW3ZpZGVvT3Blbiwgc2V0VmlkZW9PcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBoYW5kbGVDbGljayA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHNldFZpZGVvT3Blbih0cnVlKVxuICB9XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gc3g9e3N0eWxlcy5iYW5uZXJ9IGlkPVwiaG9tZVwiPlxuICAgICAgPENvbnRhaW5lciBzeD17c3R5bGVzLmJhbm5lci5jb250YWluZXJ9PlxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuYmFubmVyLmNvbnRlbnRCb3h9PlxuICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDFcIiB2YXJpYW50PVwiaGVyb1ByaW1hcnlcIj5cbiAgICAgICAgICAgIEV4cGVyaWVuY2UgeW91ciB1bHRpbWF0ZSBtb2JpbGUgYXBwbGljYXRpb25cbiAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgPFRleHQgYXM9XCJwXCIgdmFyaWFudD1cImhlcm9TZWNvbmRhcnlcIj5cbiAgICAgICAgICAgIEdldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdCBsZXQgaG9tZSBjb2xsZWN0IHNhbXBsZSBmcm9tIHRoZVxuICAgICAgICAgICAgdmljdG9yeSBvZiB0aGUgbWFuYWdlbWVudHMgdGhhdCBzdXBwbGllcyBiZXN0IGRlc2lnbiBzeXN0ZW1cbiAgICAgICAgICAgIGd1aWRlbGluZXMgZXZlci5cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPEZsZXg+XG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJ3aGl0ZUJ1dHRvblwiIGFyaWEtbGFiZWw9XCJHZXQgU3RhcnRlZFwiPlxuICAgICAgICAgICAgICBHZXQgU3RhcnRlZFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8TW9kYWxWaWRlb1xuICAgICAgICAgICAgICAgIGNoYW5uZWw9XCJ5b3V0dWJlXCJcbiAgICAgICAgICAgICAgICBpc09wZW49e3ZpZGVvT3Blbn1cbiAgICAgICAgICAgICAgICB2aWRlb0lkPVwiWk5BOXJtRHNZVkVcIlxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFZpZGVvT3BlbihmYWxzZSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwidGV4dEJ1dHRvblwiXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIldhdGNoIFZpZGVvXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxGYVBsYXlDaXJjbGUgLz4gV2F0Y2ggVmlkZW9cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgPEZsZXggc3g9e3N0eWxlcy5zcG9uc29yQm94fT5cbiAgICAgICAgICAgIDxUZXh0IHN4PXtzdHlsZXMuc3BvbnNvclRpdGxlfT5BcG9pbzo8L1RleHQ+XG4gICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuc3BvbnNvckJveC5zcG9uc29yfT5cbiAgICAgICAgICAgICAge2RhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICBrZXk9e2BjbGllbnQta2V5JHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICBwYXRoPXtpdGVtLnBhdGh9XG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICBzcmM9e2l0ZW0uaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgIGFsdD17aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDBcIlxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyOFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDwvQm94PlxuXG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5iYW5uZXIuaW1hZ2VCb3h9PlxuICAgICAgICAgIDxJbWFnZSBzcmM9e0Jhbm5lclRodW1ifSBhbHQ9XCJiYW5uZXJcIiB3aWR0aD1cIjExMjZcIiBoZWlnaHQ9XCI3OTZcIiAvPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGJhbm5lcjoge1xuICAgIG92ZXJmbG93OiBbJ2hpZGRlbicsICdpbml0aWFsJywgbnVsbCwgJ2hpZGRlbiddLFxuICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke0Jhbm5lckJHfSlgLFxuICAgIGJhY2tncm91bmRSZXBlYXQ6IGBuby1yZXBlYXRgLFxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ3RvcCBsZWZ0JyxcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcbiAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1czogWzEwMCwgMTUwLCBudWxsLCBudWxsLCBudWxsLCAyNTBdLFxuICAgIHB0OiBbJzE1MHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJzE0MHB4JywgJzEzMHB4J10sXG4gICAgcGI6IFsnMTAwcHgnLCBudWxsLCBudWxsLCAnMTEwcHgnLCBudWxsLCAxMCwgJzE1MHB4J10sXG4gICAgYmFja2dyb3VuZENvbG9yOiAncHJpbWFyeScsXG4gICAgY29udGFpbmVyOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgfSxcbiAgICBjb250ZW50Qm94OiB7XG4gICAgICB3aWR0aDogWycxMDAlJywgbnVsbCwgJzg1JScsICc1NSUnLCAnNTAlJywgJzU1JSddLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXG4gICAgICBmbGV4U2hyaW5rOiAwLFxuICAgICAgcHQ6IFswLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCA1LCA3XSxcbiAgICB9LFxuICAgIGltYWdlQm94OiB7XG4gICAgICBkaXNwbGF5OiBbJ25vbmUnLCBudWxsLCBudWxsLCAnYmxvY2snXSxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIG1sOiBbMCwgbnVsbCwgbnVsbCwgJy0xMTBweCcsICctMTE1cHgnLCAnLTE1MHB4JywgJy0yMTBweCcsICctMjcwcHgnXSxcbiAgICAgIG1yOiBbMCwgbnVsbCwgbnVsbCwgJy0xNDVweCcsICctMTYwcHgnLCAnLTE4MHB4JywgJy0yMjBweCcsICctMjkwcHgnXSxcbiAgICAgIG10OiBbMCwgbnVsbCwgbnVsbCwgJzQwcHgnLCA0LCA3LCAwXSxcbiAgICAgIG1iOiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgJy00NXB4JywgJy03MHB4JywgbnVsbCwgJy0xMTVweCddLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgdGV4dEFsaWduOiAncmlnaHQnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICB9LFxuICB9LFxuICBzcG9uc29yVGl0bGU6IHtcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBmb250U2l6ZTogWzEsIDJdLFxuICAgIG9wYWNpdHk6IDAuNixcbiAgICBwcjogMjAsXG4gICAgZmxleFNocmluazogMCxcbiAgICBwYjogWzIsIG51bGwsIDBdLFxuICB9LFxuICBzcG9uc29yQm94OiB7XG4gICAgcHQ6IFsnMzVweCcsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICc0NXB4J10sXG4gICAgZmxleERpcmVjdGlvbjogWydjb2x1bW4nLCBudWxsLCAncm93J10sXG4gICAgc3BvbnNvcjoge1xuICAgICAgJ2Rpc3BsYXknOiAnZmxleCcsXG4gICAgICAnYWxpZ25JdGVtcyc6ICdjZW50ZXInLFxuICAgICAgJz4gYSc6IHtcbiAgICAgICAgJ21yJzogWzUsIG51bGwsIG51bGwsIDQsIDZdLFxuICAgICAgICAnZGlzcGxheSc6ICdmbGV4JyxcbiAgICAgICAgJyY6bGFzdC1vZi10eXBlJzoge1xuICAgICAgICAgIG1yOiAwLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==