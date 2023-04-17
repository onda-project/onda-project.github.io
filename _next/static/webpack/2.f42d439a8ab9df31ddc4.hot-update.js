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
    id: "home",
    sx: styles.banner,
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
  }, "Olimp\xEDada Nacional de Aplicativos"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Text"], {
    as: "p",
    variant: "heroSecondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, "A Olimp\xEDada Nacional de Aplicativos (ONDA) desafia o estudante a desenvolver tecnologias capazes de amenizar os problemas sociais e ambientais que permeiam a sociedade moderna."), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Flex"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    variant: "whiteButton",
    "aria-label": "Edital",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, "Edital"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_modal_video__WEBPACK_IMPORTED_MODULE_2___default.a, {
    channel: "youtube",
    isOpen: videoOpen,
    videoId: "HjqLcpVC39U",
    onClose: function onClose() {
      return setVideoOpen(false);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    variant: "textButton",
    "aria-label": "Assistir demo",
    onClick: handleClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaPlayCircle"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }), " Assistir demo"))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Flex"], {
    sx: styles.sponsorBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Text"], {
    sx: styles.sponsorTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, "Apoio:"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    sx: styles.sponsorBox.sponsor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
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
        lineNumber: 77,
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
        lineNumber: 83,
        columnNumber: 19
      }
    }));
  })))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    sx: styles.banner.imageBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
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
      lineNumber: 96,
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
    alignItems: 'center',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2Jhbm5lci5qcyJdLCJuYW1lcyI6WyJkYXRhIiwiaWQiLCJwYXRoIiwiaW1hZ2UiLCJjbGllbnQxIiwidGl0bGUiLCJjbGllbnQyIiwiY2xpZW50MyIsIkJhbm5lciIsIl9zIiwiX3RoaXMiLCJfdXNlU3RhdGUiLCJ1c2VTdGF0ZSIsInZpZGVvT3BlbiIsInNldFZpZGVvT3BlbiIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwianN4Iiwic3giLCJzdHlsZXMiLCJiYW5uZXIiLCJfX3NlbGYiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIkNvbnRhaW5lciIsImNvbnRhaW5lciIsIkJveCIsImNvbnRlbnRCb3giLCJIZWFkaW5nIiwiYXMiLCJ2YXJpYW50IiwiVGV4dCIsIkZsZXgiLCJCdXR0b24iLCJSZWFjdCIsIkZyYWdtZW50IiwiTW9kYWxWaWRlbyIsImNoYW5uZWwiLCJpc09wZW4iLCJ2aWRlb0lkIiwib25DbG9zZSIsIm9uQ2xpY2siLCJGYVBsYXlDaXJjbGUiLCJzcG9uc29yQm94Iiwic3BvbnNvclRpdGxlIiwic3BvbnNvciIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIkxpbmsiLCJrZXkiLCJjb25jYXQiLCJyZWwiLCJ0YXJnZXQiLCJJbWFnZSIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiaW1hZ2VCb3giLCJCYW5uZXJUaHVtYiIsIl9jIiwib3ZlcmZsb3ciLCJiYWNrZ3JvdW5kSW1hZ2UiLCJCYW5uZXJCRyIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kU2l6ZSIsImJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzIiwicHQiLCJwYiIsImJhY2tncm91bmRDb2xvciIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImZsZXhTaHJpbmsiLCJqdXN0aWZ5Q29udGVudCIsIm1sIiwibXIiLCJtdCIsIm1iIiwidGV4dEFsaWduIiwiY29sb3IiLCJmb250U2l6ZSIsIm9wYWNpdHkiLCJwciIsIiRSZWZyZXNoUmVnJCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRThCO0FBQytDO0FBQ3RDO0FBQ0c7QUFDRjtBQUNLO0FBQ0Q7QUFDTztBQUVIO0FBQ0E7QUFDRDtBQUUvQyxJQUFNQSxJQUFJLEdBQUcsQ0FDWDtFQUNFQyxFQUFFLEVBQUUsQ0FBQztFQUNMQyxJQUFJLEVBQUUsMEJBQTBCO0VBQ2hDQyxLQUFLLEVBQUVDLGlFQUFPO0VBQ2RDLEtBQUssRUFBRTtBQUNULENBQUMsRUFDRDtFQUNFSixFQUFFLEVBQUUsQ0FBQztFQUNMQyxJQUFJLEVBQUUsdUJBQXVCO0VBQzdCQyxLQUFLLEVBQUVHLGlFQUFPO0VBQ2RELEtBQUssRUFBRTtBQUNULENBQUMsRUFDRDtFQUNFSixFQUFFLEVBQUUsQ0FBQztFQUNMQyxJQUFJLEVBQUUscUJBQXFCO0VBQzNCQyxLQUFLLEVBQUVJLGdFQUFPO0VBQ2RGLEtBQUssRUFBRTtBQUNULENBQUMsQ0FDRjtBQUVjLFNBQVNHLE1BQU1BLENBQUEsRUFBRztFQUFBQyxFQUFBO0VBQUEsSUFBQUMsS0FBQTtFQUMvQixJQUFBQyxTQUFBLEdBQWtDQyxzREFBUSxDQUFDLEtBQUssQ0FBQztJQUExQ0MsU0FBUyxHQUFBRixTQUFBO0lBQUVHLFlBQVksR0FBQUgsU0FBQTtFQUM5QixJQUFNSSxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBR0MsQ0FBQyxFQUFJO0lBQ3ZCQSxDQUFDLENBQUNDLGNBQWMsRUFBRTtJQUNsQkgsWUFBWSxDQUFDLElBQUksQ0FBQztFQUNwQixDQUFDO0VBQ0QsT0FDRUksb0RBQUE7SUFBU2pCLEVBQUUsRUFBQyxNQUFNO0lBQUNrQixFQUFFLEVBQUVDLE1BQU0sQ0FBQ0MsTUFBTztJQUFBQyxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFB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Q0FBQztFQUNEM0IsVUFBVSxFQUFFO0lBQ1YwQixFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQztJQUM1Q0ksYUFBYSxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUM7SUFDdENDLFVBQVUsRUFBRSxRQUFRO0lBQ3BCN0IsT0FBTyxFQUFFO01BQ1AsU0FBUyxFQUFFLE1BQU07TUFDakIsWUFBWSxFQUFFLFFBQVE7TUFDdEIsS0FBSyxFQUFFO1FBQ0wsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMzQixTQUFTLEVBQUUsTUFBTTtRQUNqQixnQkFBZ0IsRUFBRTtVQUNoQmlDLEVBQUUsRUFBRTtRQUNOO01BQ0Y7SUFDRjtFQUNGO0FBQ0YsQ0FBQztBQUFBLElBQUFqQixFQUFBO0FBQUF5QixZQUFBLENBQUF6QixFQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrLzIuZjQyZDQzOWE4YWI5ZGYzMWRkYzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSdcbmltcG9ydCB7IENvbnRhaW5lciwgRmxleCwgQm94LCBIZWFkaW5nLCBUZXh0LCBJbWFnZSwgQnV0dG9uIH0gZnJvbSAndGhlbWUtdWknXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBNb2RhbFZpZGVvIGZyb20gJ3JlYWN0LW1vZGFsLXZpZGVvJ1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ0AvY29tcG9uZW50cy9saW5rJ1xuaW1wb3J0IHsgRmFQbGF5Q2lyY2xlIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnXG5pbXBvcnQgQmFubmVyQkcgZnJvbSAnQC9hc3NldHMvYmFubmVyQmcucG5nJ1xuaW1wb3J0IEJhbm5lclRodW1iIGZyb20gJ0AvYXNzZXRzL2Jhbm5lci10aHVtYi5wbmcnXG5cbmltcG9ydCBjbGllbnQxIGZyb20gJ0AvYXNzZXRzL3Nwb25zb3IvdWVyZ3MucG5nJ1xuaW1wb3J0IGNsaWVudDIgZnJvbSAnQC9hc3NldHMvc3BvbnNvci9nb3Zycy5wbmcnXG5pbXBvcnQgY2xpZW50MyBmcm9tICdAL2Fzc2V0cy9zcG9uc29yL2NucHEucG5nJ1xuXG5jb25zdCBkYXRhID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgcGF0aDogJ2h0dHBzOi8vd3d3LnVlcmdzLmVkdS5icicsXG4gICAgaW1hZ2U6IGNsaWVudDEsXG4gICAgdGl0bGU6ICd1ZXJncycsXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICBwYXRoOiAnaHR0cHM6Ly93d3cucnMuZ292LmJyJyxcbiAgICBpbWFnZTogY2xpZW50MixcbiAgICB0aXRsZTogJ2dvdnJzJyxcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIHBhdGg6ICdodHRwczovL3d3dy5jbnBxLmJyJyxcbiAgICBpbWFnZTogY2xpZW50MyxcbiAgICB0aXRsZTogJ2NucHEnLFxuICB9LFxuXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYW5uZXIoKSB7XG4gIGNvbnN0IFt2aWRlb09wZW4sIHNldFZpZGVvT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBzZXRWaWRlb09wZW4odHJ1ZSlcbiAgfVxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGlkPVwiaG9tZVwiIHN4PXtzdHlsZXMuYmFubmVyfT5cbiAgICAgIDxDb250YWluZXIgc3g9e3N0eWxlcy5iYW5uZXIuY29udGFpbmVyfT5cbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmJhbm5lci5jb250ZW50Qm94fT5cbiAgICAgICAgICA8SGVhZGluZyBhcz1cImgxXCIgdmFyaWFudD1cImhlcm9QcmltYXJ5XCI+XG4gICAgICAgICAgICBPbGltcMOtYWRhIE5hY2lvbmFsIGRlIEFwbGljYXRpdm9zXG4gICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgIDxUZXh0IGFzPVwicFwiIHZhcmlhbnQ9XCJoZXJvU2Vjb25kYXJ5XCI+XG4gICAgICAgICAgQSBPbGltcMOtYWRhIE5hY2lvbmFsIGRlIEFwbGljYXRpdm9zIChPTkRBKSBkZXNhZmlhIG8gZXN0dWRhbnRlIGEgZGVzZW52b2x2ZXIgdGVjbm9sb2dpYXMgY2FwYXplcyBkZSBhbWVuaXphciBvcyBwcm9ibGVtYXMgc29jaWFpcyBlIGFtYmllbnRhaXMgcXVlIHBlcm1laWFtIGEgc29jaWVkYWRlIG1vZGVybmEuXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxGbGV4PlxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwid2hpdGVCdXR0b25cIiBhcmlhLWxhYmVsPVwiRWRpdGFsXCI+XG4gICAgICAgICAgICAgIEVkaXRhbFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8TW9kYWxWaWRlb1xuICAgICAgICAgICAgICAgIGNoYW5uZWw9XCJ5b3V0dWJlXCJcbiAgICAgICAgICAgICAgICBpc09wZW49e3ZpZGVvT3Blbn1cbiAgICAgICAgICAgICAgICB2aWRlb0lkPVwiSGpxTGNwVkMzOVVcIlxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFZpZGVvT3BlbihmYWxzZSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwidGV4dEJ1dHRvblwiXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkFzc2lzdGlyIGRlbW9cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEZhUGxheUNpcmNsZSAvPiBBc3Npc3RpciBkZW1vXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgIDxGbGV4IHN4PXtzdHlsZXMuc3BvbnNvckJveH0+XG4gICAgICAgICAgICA8VGV4dCBzeD17c3R5bGVzLnNwb25zb3JUaXRsZX0+QXBvaW86PC9UZXh0PlxuICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLnNwb25zb3JCb3guc3BvbnNvcn0+XG4gICAgICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAga2V5PXtgY2xpZW50LWtleSR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgcGF0aD17aXRlbS5wYXRofVxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtpdGVtLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9e2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjhcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8L0JveD5cblxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuYmFubmVyLmltYWdlQm94fT5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtCYW5uZXJUaHVtYn0gYWx0PVwiYmFubmVyXCIgd2lkdGg9XCIxMTI2XCIgaGVpZ2h0PVwiNzk2XCIgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBiYW5uZXI6IHtcbiAgICBvdmVyZmxvdzogWydoaWRkZW4nLCAnaW5pdGlhbCcsIG51bGwsICdoaWRkZW4nXSxcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtCYW5uZXJCR30pYCxcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiBgbm8tcmVwZWF0YCxcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICd0b3AgbGVmdCcsXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXG4gICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6IFsxMDAsIDE1MCwgbnVsbCwgbnVsbCwgbnVsbCwgMjUwXSxcbiAgICBwdDogWycxNTBweCcsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICcxNDBweCcsICcxMzBweCddLFxuICAgIHBiOiBbJzEwMHB4JywgbnVsbCwgbnVsbCwgJzExMHB4JywgbnVsbCwgMTAsICcxNTBweCddLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3ByaW1hcnknLFxuICAgIGNvbnRhaW5lcjoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIH0sXG4gICAgY29udGVudEJveDoge1xuICAgICAgd2lkdGg6IFsnMTAwJScsIG51bGwsICc4NSUnLCAnNTUlJywgJzUwJScsICc1NSUnXSxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxuICAgICAgZmxleFNocmluazogMCxcbiAgICAgIHB0OiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNSwgN10sXG4gICAgfSxcbiAgICBpbWFnZUJveDoge1xuICAgICAgZGlzcGxheTogWydub25lJywgbnVsbCwgbnVsbCwgJ2Jsb2NrJ10sXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBtbDogWzAsIG51bGwsIG51bGwsICctMTEwcHgnLCAnLTExNXB4JywgJy0xNTBweCcsICctMjEwcHgnLCAnLTI3MHB4J10sXG4gICAgICBtcjogWzAsIG51bGwsIG51bGwsICctMTQ1cHgnLCAnLTE2MHB4JywgJy0xODBweCcsICctMjIwcHgnLCAnLTI5MHB4J10sXG4gICAgICBtdDogWzAsIG51bGwsIG51bGwsICc0MHB4JywgNCwgNywgMF0sXG4gICAgICBtYjogWzAsIG51bGwsIG51bGwsIG51bGwsICctNDVweCcsICctNzBweCcsIG51bGwsICctMTE1cHgnXSxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIHRleHRBbGlnbjogJ3JpZ2h0JyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgfSxcbiAgfSxcbiAgc3BvbnNvclRpdGxlOiB7XG4gICAgY29sb3I6ICd3aGl0ZScsXG4gICAgZm9udFNpemU6IFsxLCAyXSxcbiAgICBvcGFjaXR5OiAwLjYsXG4gICAgcHI6IDIwLFxuICAgIGZsZXhTaHJpbms6IDAsXG4gICAgcGI6IFsyLCBudWxsLCAwXSxcbiAgfSxcbiAgc3BvbnNvckJveDoge1xuICAgIHB0OiBbJzM1cHgnLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnNDVweCddLFxuICAgIGZsZXhEaXJlY3Rpb246IFsnY29sdW1uJywgbnVsbCwgJ3JvdyddLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIHNwb25zb3I6IHtcbiAgICAgICdkaXNwbGF5JzogJ2ZsZXgnLFxuICAgICAgJ2FsaWduSXRlbXMnOiAnY2VudGVyJyxcbiAgICAgICc+IGEnOiB7XG4gICAgICAgICdtcic6IFs1LCBudWxsLCBudWxsLCA0LCA2XSxcbiAgICAgICAgJ2Rpc3BsYXknOiAnZmxleCcsXG4gICAgICAgICcmOmxhc3Qtb2YtdHlwZSc6IHtcbiAgICAgICAgICBtcjogMCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=