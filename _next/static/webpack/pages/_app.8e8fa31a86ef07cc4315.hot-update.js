webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/theme/index.js":
/*!****************************!*\
  !*** ./src/theme/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony default export */ __webpack_exports__["default"] = ({
  // example colors with dark mode
  colors: {
    text: '#343D48',
    // body color and primary color
    text_secondary: '#02073E',
    // secondary body color
    heading: '#244886',
    // primary heading color
    heading_secondary: '#0F2137',
    // heading color
    background: '#FFFFFF',
    // body background color
    background_secondary: '#F9FBFD',
    // secondary background color
    border_color: '#E5ECF4',
    // border color
    primary: '#1F3E76',
    // primary button and link color
    secondary: '#25CB9E',
    // secondary color - can be used for hover states
    muted: '#7B8188',
    // muted color
    accent: '#609',
    // a contrast color for emphasizing UI
    yellow: '#F6C416',
    // highlight	a background color for highlighting text
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#0cf',
        secondary: '#09c',
        muted: '#111'
      }
    }
  },
  breakpoints: ['480px', '640px', '768px', '1024px', '1220px', '1366px', '1620px'],
  fonts: {
    body: "'DM Sans', sans-serif",
    heading: "'DM Sans', sans-serif"
  },
  fontSizes: [12, 15, 16, 18, 20, 22, 24, 28, 32, 36, 42, 48, 52, 64],
  fontWeights: {
    body: 'normal',
    heading: 500,
    bold: 700
  },
  lineHeights: {
    body: 1.8,
    heading: 1.5
  },
  letterSpacings: {
    body: 'normal',
    caps: '0.2em',
    heading: '-0.5px'
  },
  space: [0, 5, 10, 15, 20, 25, 30, 50, 80, 100, 120, 150],
  // variants can use custom, user-defined names
  layout: {
    container: {
      maxWidth: ['100%', null, null, '780px', '1020px', '1200px', null, '1310px'],
      px: [4, 6]
    },
    header: {
      color: '#02073E',
      fontWeight: 'normal',
      py: 3,
      position: 'absolute',
      width: '100%'
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    main: {}
  },
  section: {
    keyFeature: {
      py: [8, null, 9, null, null, 10]
    },
    feature: {
      py: [8, null, 9, null, null, 10]
    },
    partner: {
      pt: [2, null, null, 5],
      pb: [8, null, 9, null, null, 10]
    },
    testimonial: {
      py: [8, null, 9, null, null, 10],
      overflow: 'hidden'
    },
    securePayment: {
      overflow: 'hidden',
      position: 'relative',
      pt: 9
    },
    faq: {
      py: [8, null, 9, null, null, 10]
    }
  },
  sectionHeader: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: -1,
    marginBottom: ['50px', null, '60px', null, '65px', '75px'],
    title: {
      fontSize: ['24px', null, '28px', null, null, '32px', null, '36px'],
      color: 'heading_secondary',
      lineHeight: [1.3, null, null, 1.2],
      textAlign: 'center',
      fontWeight: '700',
      letterSpacing: '-.5px'
    },
    subTitle: {
      fontSize: [0, null, '14px'],
      color: 'heading',
      textAlign: 'center',
      letterSpacing: ['1.5px', null, '2px'],
      textTransform: 'uppercase',
      fontWeight: '700',
      mb: '8px',
      lineHeight: 1.5
    }
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 4,
      letterSpacing: 'heading',
      color: 'heading'
    },
    heroPrimary: {
      color: 'white',
      fontSize: ['40px', '52px', '60px', '48px', '52px', '60px', '66px', '78px'],
      lineHeight: 1.2,
      fontWeight: 700,
      mb: [5, null, null, null, '30px']
    },
    heroSecondary: {
      color: 'white',
      fontSize: [2, 3, 4, '17px', null, 3, '19px', 4],
      lineHeight: [2, null, null, null, 2.2],
      fontWeight: 'body',
      pr: [0, null, null, null, null, '100px', null, '125px'],
      mb: ['35px', null, null, null, '40px', null, null, 7]
    },
    title: {
      // extends the text.heading styles
      variant: 'text.heading',
      fontWeight: 'bold',
      fontSize: 18,
      lineHeight: '30px',
      color: '#0F2137'
    },
    lead: {
      fontSize: 40,
      fontFamily: 'DM Sans',
      fontWeight: '500',
      lineHeight: '60px',
      letterSpacing: '-1.5px',
      color: '#0F2137'
    },
    muted: {
      lineHeight: '26px',
      color: 'muted'
    },
    secondary: {
      fontWeight: 500,
      color: '#00A99D',
      lineHeight: '40px'
    }
  },
  links: {
    "default": {
      cursor: 'pointer'
    },
    bold: {
      fontWeight: 'bold'
    },
    nav: {
      display: ['none', null, 'inline-block'],
      px: 25,
      fontWeight: 'normal'
    },
    footer: {
      display: 'block',
      px: 0,
      color: 'inherit',
      textDecoration: 'none'
    },
    logo: {
      pr: 30,
      mb: '5px',
      display: 'flex',
      '& > img': {
        filter: 'drop-shadow(1px 2px 2px #cdcdcd)'
      }
    }
  },
  images: {
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 99999
    }
  },
  // variants for buttons
  buttons: {
    menu: {
      display: [null, null, 'none']
    },
    // default variant for MenuButton
    // you can reference other values defined in the theme
    defaultBtn: {
      'borderRadius': '45px',
      'fontSize': ['14px', 1, null, null, 2],
      'letterSpacings': ['-0.5px', null, null, null, '-0.15px'],
      'padding': ['11px 20px 10px', null, null, null, '13px 30px'],
      'fontFamily': 'body',
      'cursor': 'pointer',
      'lineHeight': 1.2,
      'transition': 'all 0.25s',
      'fontWeight': 500,
      '&:focus': {
        outline: 0
      }
    },
    primary: {
      'variant': 'buttons.defaultBtn',
      'color': 'white',
      'bg': 'primary',
      '&:hover': {
        boxShadow: 'rgba(31, 62, 118, 0.57) 0px 9px 20px -5px'
      }
    },
    whiteButton: {
      'variant': 'buttons.defaultBtn',
      'color': 'heading_secondary',
      'bg': 'white',
      '&:hover': {
        boxShadow: 'rgba(0, 0, 0, 0.5) 0px 12px 24px -10px'
      }
    },
    secondary: {
      'variant': 'buttons.defaultBtn',
      'border': '1.5px solid white',
      'backgroundColor': 'transparent',
      'color': 'white',
      '&:hover': {
        bg: 'white',
        color: 'heading_secondary'
      }
    },
    textButton: {
      variant: 'buttons.defaultBtn',
      backgroundColor: 'transparent',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      svg: {
        fontSize: [4, 6],
        mr: 2
      }
    }
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4
    },
    offer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      flex: ['1 1 calc(50% - 16px)', '1 1 20%'],
      minHeight: 130,
      m: 2,
      background: '#FFFFFF',
      border: '1px solid #EDEFF6',
      borderRadius: 5
    },
    featureCard: {
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'row',
      p: 3
    }
  },
  forms: {
    label: {
      fontSize: 1,
      fontWeight: 'bold'
    },
    input: {
      'borderRadius': 8,
      'borderColor': 'border_color',
      'height': 60,
      '&:focus': {
        borderColor: 'primary',
        boxShadow: function boxShadow(t) {
          return "0 0 0 2px ".concat(t.colors.primary);
        },
        outline: 'none'
      }
    }
  },
  badges: {
    primary: {
      color: 'background',
      bg: '#28A5FF',
      borderRadius: 30,
      p: '3px 11px',
      fontSize: 1,
      letterSpacing: '-0.5px'
    },
    outline: {
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 0 1px'
    }
  },
  styles: {
    // To add base, top-level styles to the <body> element, use theme.styles.root.
    root: {
      'fontFamily': 'body',
      'lineHeight': 'body',
      'fontWeight': 'body',
      'WebkitFontSmoothing': 'antialiased',
      '.modal-video-close-btn': {
        cursor: 'pointer',
        top: '-25px',
        right: '-25px',
        width: ' 25px',
        height: '25px'
      },
      '.modal-video-movie-wrap': {
        margin: 6,
        width: 'auto'
      }
    },
    // Divider styles
    hr: {
      border: 0,
      borderBottom: '1px solid',
      borderColor: '#D9E0E7'
    },
    // also you can use other HTML elements style here
    ul: {
      listStyle: 'none'
    },
    srOnly: {
      border: '0 !important',
      clip: 'rect(1px, 1px, 1px, 1px) !important',
      clipPath: 'inset(50%) !important',
      height: '1px !important',
      margin: '-1px !important',
      overflow: 'hidden !important',
      padding: '0 !important',
      position: 'absolute !important',
      width: '1px !important',
      whiteSpace: 'nowrap !important'
    }
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3RoZW1lL2luZGV4LmpzIl0sIm5hbWVzIjpbImNvbG9ycyIsInRleHQiLCJ0ZXh0X3NlY29uZGFyeSIsImhlYWRpbmciLCJoZWFkaW5nX3NlY29uZGFyeSIsImJhY2tncm91bmQiLCJiYWNrZ3JvdW5kX3NlY29uZGFyeSIsImJvcmRlcl9jb2xvciIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJtdXRlZCIsImFjY2VudCIsInllbGxvdyIsIm1vZGVzIiwiZGFyayIsImJyZWFrcG9pbnRzIiwiZm9udHMiLCJib2R5IiwiZm9udFNpemVzIiwiZm9udFdlaWdodHMiLCJib2xkIiwibGluZUhlaWdodHMiLCJsZXR0ZXJTcGFjaW5ncyIsImNhcHMiLCJzcGFjZSIsImxheW91dCIsImNvbnRhaW5lciIsIm1heFdpZHRoIiwicHgiLCJoZWFkZXIiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJweSIsInBvc2l0aW9uIiwid2lkdGgiLCJ0b29sYmFyIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIm1haW4iLCJzZWN0aW9uIiwia2V5RmVhdHVyZSIsImZlYXR1cmUiLCJwYXJ0bmVyIiwicHQiLCJwYiIsInRlc3RpbW9uaWFsIiwib3ZlcmZsb3ciLCJzZWN1cmVQYXltZW50IiwiZmFxIiwic2VjdGlvbkhlYWRlciIsImZsZXhEaXJlY3Rpb24iLCJtdCIsIm1hcmdpbkJvdHRvbSIsInRpdGxlIiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwidGV4dEFsaWduIiwibGV0dGVyU3BhY2luZyIsInN1YlRpdGxlIiwidGV4dFRyYW5zZm9ybSIsIm1iIiwiZm9udEZhbWlseSIsImhlcm9QcmltYXJ5IiwiaGVyb1NlY29uZGFyeSIsInByIiwidmFyaWFudCIsImxlYWQiLCJsaW5rcyIsImN1cnNvciIsIm5hdiIsImZvb3RlciIsInRleHREZWNvcmF0aW9uIiwibG9nbyIsImZpbHRlciIsImltYWdlcyIsImF2YXRhciIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsImJ1dHRvbnMiLCJtZW51IiwiZGVmYXVsdEJ0biIsIm91dGxpbmUiLCJib3hTaGFkb3ciLCJ3aGl0ZUJ1dHRvbiIsImJnIiwidGV4dEJ1dHRvbiIsImJhY2tncm91bmRDb2xvciIsInN2ZyIsIm1yIiwiY2FyZHMiLCJwYWRkaW5nIiwib2ZmZXIiLCJmbGV4IiwibWluSGVpZ2h0IiwibSIsImJvcmRlciIsImZlYXR1cmVDYXJkIiwicCIsImZvcm1zIiwibGFiZWwiLCJpbnB1dCIsImJvcmRlckNvbG9yIiwidCIsImNvbmNhdCIsImJhZGdlcyIsInN0eWxlcyIsInJvb3QiLCJ0b3AiLCJyaWdodCIsIm1hcmdpbiIsImhyIiwiYm9yZGVyQm90dG9tIiwidWwiLCJsaXN0U3R5bGUiLCJzck9ubHkiLCJjbGlwIiwiY2xpcFBhdGgiLCJ3aGl0ZVNwYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQSw4Q0FBZTtFQUNiO0VBQ0FBLE1BQU0sRUFBRTtJQUNOQyxJQUFJLEVBQUUsU0FBUztJQUFFO0lBQ2pCQyxjQUFjLEVBQUUsU0FBUztJQUFFO0lBQzNCQyxPQUFPLEVBQUUsU0FBUztJQUFFO0lBQ3BCQyxpQkFBaUIsRUFBRSxTQUFTO0lBQUU7SUFDOUJDLFVBQVUsRUFBRSxTQUFTO0lBQUU7SUFDdkJDLG9CQUFvQixFQUFFLFNBQVM7SUFBRTtJQUNqQ0MsWUFBWSxFQUFFLFNBQVM7SUFBRTtJQUN6QkMsT0FBTyxFQUFFLFNBQVM7SUFBRTtJQUNwQkMsU0FBUyxFQUFFLFNBQVM7SUFBRTtJQUN0QkMsS0FBSyxFQUFFLFNBQVM7SUFBRTtJQUNsQkMsTUFBTSxFQUFFLE1BQU07SUFBRTtJQUNoQkMsTUFBTSxFQUFFLFNBQVM7SUFFakI7SUFDQUMsS0FBSyxFQUFFO01BQ0xDLElBQUksRUFBRTtRQUNKYixJQUFJLEVBQUUsTUFBTTtRQUNaSSxVQUFVLEVBQUUsTUFBTTtRQUNsQkcsT0FBTyxFQUFFLE1BQU07UUFDZkMsU0FBUyxFQUFFLE1BQU07UUFDakJDLEtB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SUFDYixDQUFDO0lBQ0RDLE1BQU0sRUFBRTtNQUNObkIsTUFBTSxFQUFFLGNBQWM7TUFDdEJvQixJQUFJLEVBQUUscUNBQXFDO01BQzNDQyxRQUFRLEVBQUUsdUJBQXVCO01BQ2pDeEMsTUFBTSxFQUFFLGdCQUFnQjtNQUN4QmlDLE1BQU0sRUFBRSxpQkFBaUI7TUFDekIvRCxRQUFRLEVBQUUsbUJBQW1CO01BQzdCNEMsT0FBTyxFQUFFLGNBQWM7TUFDdkIxRCxRQUFRLEVBQUUscUJBQXFCO01BQy9CQyxLQUFLLEVBQUUsZ0JBQWdCO01BQ3ZCb0YsVUFBVSxFQUFFO0lBQ2Q7RUFDRjtBQUNGLENBQUMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC44ZThmYTMxYTg2ZWYwN2NjNDMxNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAvLyBleGFtcGxlIGNvbG9ycyB3aXRoIGRhcmsgbW9kZVxuICBjb2xvcnM6IHtcbiAgICB0ZXh0OiAnIzM0M0Q0OCcsIC8vIGJvZHkgY29sb3IgYW5kIHByaW1hcnkgY29sb3JcbiAgICB0ZXh0X3NlY29uZGFyeTogJyMwMjA3M0UnLCAvLyBzZWNvbmRhcnkgYm9keSBjb2xvclxuICAgIGhlYWRpbmc6ICcjMjQ0ODg2JywgLy8gcHJpbWFyeSBoZWFkaW5nIGNvbG9yXG4gICAgaGVhZGluZ19zZWNvbmRhcnk6ICcjMEYyMTM3JywgLy8gaGVhZGluZyBjb2xvclxuICAgIGJhY2tncm91bmQ6ICcjRkZGRkZGJywgLy8gYm9keSBiYWNrZ3JvdW5kIGNvbG9yXG4gICAgYmFja2dyb3VuZF9zZWNvbmRhcnk6ICcjRjlGQkZEJywgLy8gc2Vjb25kYXJ5IGJhY2tncm91bmQgY29sb3JcbiAgICBib3JkZXJfY29sb3I6ICcjRTVFQ0Y0JywgLy8gYm9yZGVyIGNvbG9yXG4gICAgcHJpbWFyeTogJyMxRjNFNzYnLCAvLyBwcmltYXJ5IGJ1dHRvbiBhbmQgbGluayBjb2xvclxuICAgIHNlY29uZGFyeTogJyMyNUNCOUUnLCAvLyBzZWNvbmRhcnkgY29sb3IgLSBjYW4gYmUgdXNlZCBmb3IgaG92ZXIgc3RhdGVzXG4gICAgbXV0ZWQ6ICcjN0I4MTg4JywgLy8gbXV0ZWQgY29sb3JcbiAgICBhY2NlbnQ6ICcjNjA5JywgLy8gYSBjb250cmFzdCBjb2xvciBmb3IgZW1waGFzaXppbmcgVUlcbiAgICB5ZWxsb3c6ICcjRjZDNDE2JyxcblxuICAgIC8vIGhpZ2hsaWdodFx0YSBiYWNrZ3JvdW5kIGNvbG9yIGZvciBoaWdobGlnaHRpbmcgdGV4dFxuICAgIG1vZGVzOiB7XG4gICAgICBkYXJrOiB7XG4gICAgICAgIHRleHQ6ICcjZmZmJyxcbiAgICAgICAgYmFja2dyb3VuZDogJyMwMDAnLFxuICAgICAgICBwcmltYXJ5OiAnIzBjZicsXG4gICAgICAgIHNlY29uZGFyeTogJyMwOWMnLFxuICAgICAgICBtdXRlZDogJyMxMTEnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBicmVha3BvaW50czogW1xuICAgICc0ODBweCcsXG4gICAgJzY0MHB4JyxcbiAgICAnNzY4cHgnLFxuICAgICcxMDI0cHgnLFxuICAgICcxMjIwcHgnLFxuICAgICcxMzY2cHgnLFxuICAgICcxNjIwcHgnLFxuICBdLFxuICBmb250czoge1xuICAgIGJvZHk6IFwiJ0RNIFNhbnMnLCBzYW5zLXNlcmlmXCIsXG4gICAgaGVhZGluZzogXCInRE0gU2FucycsIHNhbnMtc2VyaWZcIixcbiAgfSxcbiAgZm9udFNpemVzOiBbMTIsIDE1LCAxNiwgMTgsIDIwLCAyMiwgMjQsIDI4LCAzMiwgMzYsIDQyLCA0OCwgNTIsIDY0XSxcbiAgZm9udFdlaWdodHM6IHtcbiAgICBib2R5OiAnbm9ybWFsJyxcbiAgICBoZWFkaW5nOiA1MDAsXG4gICAgYm9sZDogNzAwLFxuICB9LFxuICBsaW5lSGVpZ2h0czoge1xuICAgIGJvZHk6IDEuOCxcbiAgICBoZWFkaW5nOiAxLjUsXG4gIH0sXG4gIGxldHRlclNwYWNpbmdzOiB7XG4gICAgYm9keTogJ25vcm1hbCcsXG4gICAgY2FwczogJzAuMmVtJyxcbiAgICBoZWFkaW5nOiAnLTAuNXB4JyxcbiAgfSxcbiAgc3BhY2U6IFswLCA1LCAxMCwgMTUsIDIwLCAyNSwgMzAsIDUwLCA4MCwgMTAwLCAxMjAsIDE1MF0sXG4gIC8vIHZhcmlhbnRzIGNhbiB1c2UgY3VzdG9tLCB1c2VyLWRlZmluZWQgbmFtZXNcbiAgbGF5b3V0OiB7XG4gICAgY29udGFpbmVyOiB7XG4gICAgICBtYXhXaWR0aDogW1xuICAgICAgICAnMTAwJScsXG4gICAgICAgIG51bGwsXG4gICAgICAgIG51bGwsXG4gICAgICAgICc3ODBweCcsXG4gICAgICAgICcxMDIwcHgnLFxuICAgICAgICAnMTIwMHB4JyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgJzEzMTBweCcsXG4gICAgICBdLFxuICAgICAgcHg6IFs0LCA2XSxcbiAgICB9LFxuICAgIGhlYWRlcjoge1xuICAgICAgY29sb3I6ICcjMDIwNzNFJyxcbiAgICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuICAgICAgcHk6IDMsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgfSxcbiAgICB0b29sYmFyOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgfSxcbiAgICBtYWluOiB7fSxcbiAgfSxcbiAgc2VjdGlvbjoge1xuICAgIGtleUZlYXR1cmU6IHtcbiAgICAgIHB5OiBbOCwgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTBdLFxuICAgIH0sXG4gICAgZmVhdHVyZToge1xuICAgICAgcHk6IFs4LCBudWxsLCA5LCBudWxsLCBudWxsLCAxMF0sXG4gICAgfSxcbiAgICBwYXJ0bmVyOiB7XG4gICAgICBwdDogWzIsIG51bGwsIG51bGwsIDVdLFxuICAgICAgcGI6IFs4LCBudWxsLCA5LCBudWxsLCBudWxsLCAxMF0sXG4gICAgfSxcbiAgICB0ZXN0aW1vbmlhbDoge1xuICAgICAgcHk6IFs4LCBudWxsLCA5LCBudWxsLCBudWxsLCAxMF0sXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgfSxcbiAgICBzZWN1cmVQYXltZW50OiB7XG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHB0OiA5LFxuICAgIH0sXG4gICAgZmFxOiB7XG4gICAgICBweTogWzgsIG51bGwsIDksIG51bGwsIG51bGwsIDEwXSxcbiAgICB9LFxuICB9LFxuICBzZWN0aW9uSGVhZGVyOiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgbXQ6IC0xLFxuICAgIG1hcmdpbkJvdHRvbTogWyc1MHB4JywgbnVsbCwgJzYwcHgnLCBudWxsLCAnNjVweCcsICc3NXB4J10sXG4gICAgdGl0bGU6IHtcbiAgICAgIGZvbnRTaXplOiBbJzI0cHgnLCBudWxsLCAnMjhweCcsIG51bGwsIG51bGwsICczMnB4JywgbnVsbCwgJzM2cHgnXSxcbiAgICAgIGNvbG9yOiAnaGVhZGluZ19zZWNvbmRhcnknLFxuICAgICAgbGluZUhlaWdodDogWzEuMywgbnVsbCwgbnVsbCwgMS4yXSxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICBmb250V2VpZ2h0OiAnNzAwJyxcbiAgICAgIGxldHRlclNwYWNpbmc6ICctLjVweCcsXG4gICAgfSxcblxuICAgIHN1YlRpdGxlOiB7XG4gICAgICBmb250U2l6ZTogWzAsIG51bGwsICcxNHB4J10sXG4gICAgICBjb2xvcjogJ2hlYWRpbmcnLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIGxldHRlclNwYWNpbmc6IFsnMS41cHgnLCBudWxsLCAnMnB4J10sXG4gICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgICAgIGZvbnRXZWlnaHQ6ICc3MDAnLFxuICAgICAgbWI6ICc4cHgnLFxuICAgICAgbGluZUhlaWdodDogMS41LFxuICAgIH0sXG4gIH0sXG4gIHRleHQ6IHtcbiAgICBoZWFkaW5nOiB7XG4gICAgICBmb250RmFtaWx5OiAnaGVhZGluZycsXG4gICAgICBsaW5lSGVpZ2h0OiAnaGVhZGluZycsXG4gICAgICBmb250V2VpZ2h0OiAnaGVhZGluZycsXG4gICAgICBmb250U2l6ZTogNCxcbiAgICAgIGxldHRlclNwYWNpbmc6ICdoZWFkaW5nJyxcbiAgICAgIGNvbG9yOiAnaGVhZGluZycsXG4gICAgfSxcbiAgICBoZXJvUHJpbWFyeToge1xuICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICBmb250U2l6ZTogW1xuICAgICAgICAnNDBweCcsXG4gICAgICAgICc1MnB4JyxcbiAgICAgICAgJzYwcHgnLFxuICAgICAgICAnNDhweCcsXG4gICAgICAgICc1MnB4JyxcbiAgICAgICAgJzYwcHgnLFxuICAgICAgICAnNjZweCcsXG4gICAgICAgICc3OHB4JyxcbiAgICAgIF0sXG4gICAgICBsaW5lSGVpZ2h0OiAxLjIsXG4gICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICBtYjogWzUsIG51bGwsIG51bGwsIG51bGwsICczMHB4J10sXG4gICAgfSxcbiAgICBoZXJvU2Vjb25kYXJ5OiB7XG4gICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgIGZvbnRTaXplOiBbMiwgMywgNCwgJzE3cHgnLCBudWxsLCAzLCAnMTlweCcsIDRdLFxuICAgICAgbGluZUhlaWdodDogWzIsIG51bGwsIG51bGwsIG51bGwsIDIuMl0sXG4gICAgICBmb250V2VpZ2h0OiAnYm9keScsXG4gICAgICBwcjogWzAsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICcxMDBweCcsIG51bGwsICcxMjVweCddLFxuICAgICAgbWI6IFsnMzVweCcsIG51bGwsIG51bGwsIG51bGwsICc0MHB4JywgbnVsbCwgbnVsbCwgN10sXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgLy8gZXh0ZW5kcyB0aGUgdGV4dC5oZWFkaW5nIHN0eWxlc1xuICAgICAgdmFyaWFudDogJ3RleHQuaGVhZGluZycsXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgICBmb250U2l6ZTogMTgsXG4gICAgICBsaW5lSGVpZ2h0OiAnMzBweCcsXG4gICAgICBjb2xvcjogJyMwRjIxMzcnLFxuICAgIH0sXG4gICAgbGVhZDoge1xuICAgICAgZm9udFNpemU6IDQwLFxuICAgICAgZm9udEZhbWlseTogJ0RNIFNhbnMnLFxuICAgICAgZm9udFdlaWdodDogJzUwMCcsXG4gICAgICBsaW5lSGVpZ2h0OiAnNjBweCcsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnLTEuNXB4JyxcbiAgICAgIGNvbG9yOiAnIzBGMjEzNycsXG4gICAgfSxcbiAgICBtdXRlZDoge1xuICAgICAgbGluZUhlaWdodDogJzI2cHgnLFxuICAgICAgY29sb3I6ICdtdXRlZCcsXG4gICAgfSxcbiAgICBzZWNvbmRhcnk6IHtcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgIGNvbG9yOiAnIzAwQTk5RCcsXG4gICAgICBsaW5lSGVpZ2h0OiAnNDBweCcsXG4gICAgfSxcbiAgfSxcbiAgbGlua3M6IHtcbiAgICBkZWZhdWx0OiB7XG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICB9LFxuICAgIGJvbGQ6IHtcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICB9LFxuICAgIG5hdjoge1xuICAgICAgZGlzcGxheTogWydub25lJywgbnVsbCwgJ2lubGluZS1ibG9jayddLFxuICAgICAgcHg6IDI1LFxuICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXG4gICAgfSxcbiAgICBmb290ZXI6IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBweDogMCxcbiAgICAgIGNvbG9yOiAnaW5oZXJpdCcsXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgIH0sXG4gICAgbG9nbzoge1xuICAgICAgcHI6IDMwLFxuICAgICAgbWI6ICc1cHgnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuXG4gICAgICAnJiA+IGltZyc6IHtcbiAgICAgICAgZmlsdGVyOiAnZHJvcC1zaGFkb3coMXB4IDJweCAycHggI2NkY2RjZCknLFxuICAgICAgfVxuICAgIH0sXG4gIH0sXG4gIGltYWdlczoge1xuICAgIGF2YXRhcjoge1xuICAgICAgd2lkdGg6IDQ4LFxuICAgICAgaGVpZ2h0OiA0OCxcbiAgICAgIGJvcmRlclJhZGl1czogOTk5OTksXG4gICAgfSxcbiAgfSxcbiAgLy8gdmFyaWFudHMgZm9yIGJ1dHRvbnNcbiAgYnV0dG9uczoge1xuICAgIG1lbnU6IHtcbiAgICAgIGRpc3BsYXk6IFtudWxsLCBudWxsLCAnbm9uZSddLFxuICAgIH0sIC8vIGRlZmF1bHQgdmFyaWFudCBmb3IgTWVudUJ1dHRvblxuICAgIC8vIHlvdSBjYW4gcmVmZXJlbmNlIG90aGVyIHZhbHVlcyBkZWZpbmVkIGluIHRoZSB0aGVtZVxuICAgIGRlZmF1bHRCdG46IHtcbiAgICAgICdib3JkZXJSYWRpdXMnOiAnNDVweCcsXG4gICAgICAnZm9udFNpemUnOiBbJzE0cHgnLCAxLCBudWxsLCBudWxsLCAyXSxcbiAgICAgICdsZXR0ZXJTcGFjaW5ncyc6IFsnLTAuNXB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJy0wLjE1cHgnXSxcbiAgICAgICdwYWRkaW5nJzogWycxMXB4IDIwcHggMTBweCcsIG51bGwsIG51bGwsIG51bGwsICcxM3B4IDMwcHgnXSxcbiAgICAgICdmb250RmFtaWx5JzogJ2JvZHknLFxuICAgICAgJ2N1cnNvcic6ICdwb2ludGVyJyxcbiAgICAgICdsaW5lSGVpZ2h0JzogMS4yLFxuICAgICAgJ3RyYW5zaXRpb24nOiAnYWxsIDAuMjVzJyxcbiAgICAgICdmb250V2VpZ2h0JzogNTAwLFxuICAgICAgJyY6Zm9jdXMnOiB7XG4gICAgICAgIG91dGxpbmU6IDAsXG4gICAgICB9LFxuICAgIH0sXG4gICAgcHJpbWFyeToge1xuICAgICAgJ3ZhcmlhbnQnOiAnYnV0dG9ucy5kZWZhdWx0QnRuJyxcbiAgICAgICdjb2xvcic6ICd3aGl0ZScsXG4gICAgICAnYmcnOiAncHJpbWFyeScsXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgYm94U2hhZG93OiAncmdiYSgzMSwgNjIsIDExOCwgMC41NykgMHB4IDlweCAyMHB4IC01cHgnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHdoaXRlQnV0dG9uOiB7XG4gICAgICAndmFyaWFudCc6ICdidXR0b25zLmRlZmF1bHRCdG4nLFxuICAgICAgJ2NvbG9yJzogJ2hlYWRpbmdfc2Vjb25kYXJ5JyxcbiAgICAgICdiZyc6ICd3aGl0ZScsXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgYm94U2hhZG93OiAncmdiYSgwLCAwLCAwLCAwLjUpIDBweCAxMnB4IDI0cHggLTEwcHgnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHNlY29uZGFyeToge1xuICAgICAgJ3ZhcmlhbnQnOiAnYnV0dG9ucy5kZWZhdWx0QnRuJyxcbiAgICAgICdib3JkZXInOiAnMS41cHggc29saWQgd2hpdGUnLFxuICAgICAgJ2JhY2tncm91bmRDb2xvcic6ICd0cmFuc3BhcmVudCcsXG4gICAgICAnY29sb3InOiAnd2hpdGUnLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGJnOiAnd2hpdGUnLFxuICAgICAgICBjb2xvcjogJ2hlYWRpbmdfc2Vjb25kYXJ5JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB0ZXh0QnV0dG9uOiB7XG4gICAgICB2YXJpYW50OiAnYnV0dG9ucy5kZWZhdWx0QnRuJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBzdmc6IHtcbiAgICAgICAgZm9udFNpemU6IFs0LCA2XSxcbiAgICAgICAgbXI6IDIsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGNhcmRzOiB7XG4gICAgcHJpbWFyeToge1xuICAgICAgcGFkZGluZzogMixcbiAgICAgIGJvcmRlclJhZGl1czogNCxcbiAgICB9LFxuICAgIG9mZmVyOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgZmxleDogWycxIDEgY2FsYyg1MCUgLSAxNnB4KScsICcxIDEgMjAlJ10sXG4gICAgICBtaW5IZWlnaHQ6IDEzMCxcbiAgICAgIG06IDIsXG4gICAgICBiYWNrZ3JvdW5kOiAnI0ZGRkZGRicsXG4gICAgICBib3JkZXI6ICcxcHggc29saWQgI0VERUZGNicsXG4gICAgICBib3JkZXJSYWRpdXM6IDUsXG4gICAgfSxcbiAgICBmZWF0dXJlQ2FyZDoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgICBwOiAzLFxuICAgIH0sXG4gIH0sXG4gIGZvcm1zOiB7XG4gICAgbGFiZWw6IHtcbiAgICAgIGZvbnRTaXplOiAxLFxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIH0sXG4gICAgaW5wdXQ6IHtcbiAgICAgICdib3JkZXJSYWRpdXMnOiA4LFxuICAgICAgJ2JvcmRlckNvbG9yJzogJ2JvcmRlcl9jb2xvcicsXG4gICAgICAnaGVpZ2h0JzogNjAsXG4gICAgICAnJjpmb2N1cyc6IHtcbiAgICAgICAgYm9yZGVyQ29sb3I6ICdwcmltYXJ5JyxcbiAgICAgICAgYm94U2hhZG93OiB0ID0+IGAwIDAgMCAycHggJHt0LmNvbG9ycy5wcmltYXJ5fWAsXG4gICAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcblxuICBiYWRnZXM6IHtcbiAgICBwcmltYXJ5OiB7XG4gICAgICBjb2xvcjogJ2JhY2tncm91bmQnLFxuICAgICAgYmc6ICcjMjhBNUZGJyxcbiAgICAgIGJvcmRlclJhZGl1czogMzAsXG4gICAgICBwOiAnM3B4IDExcHgnLFxuICAgICAgZm9udFNpemU6IDEsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuNXB4JyxcbiAgICB9LFxuICAgIG91dGxpbmU6IHtcbiAgICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgICBiZzogJ3RyYW5zcGFyZW50JyxcbiAgICAgIGJveFNoYWRvdzogJ2luc2V0IDAgMCAwIDFweCcsXG4gICAgfSxcbiAgfSxcblxuICBzdHlsZXM6IHtcbiAgICAvLyBUbyBhZGQgYmFzZSwgdG9wLWxldmVsIHN0eWxlcyB0byB0aGUgPGJvZHk+IGVsZW1lbnQsIHVzZSB0aGVtZS5zdHlsZXMucm9vdC5cbiAgICByb290OiB7XG4gICAgICAnZm9udEZhbWlseSc6ICdib2R5JyxcbiAgICAgICdsaW5lSGVpZ2h0JzogJ2JvZHknLFxuICAgICAgJ2ZvbnRXZWlnaHQnOiAnYm9keScsXG4gICAgICAnV2Via2l0Rm9udFNtb290aGluZyc6ICdhbnRpYWxpYXNlZCcsXG4gICAgICAnLm1vZGFsLXZpZGVvLWNsb3NlLWJ0bic6IHtcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgIHRvcDogJy0yNXB4JyxcbiAgICAgICAgcmlnaHQ6ICctMjVweCcsXG4gICAgICAgIHdpZHRoOiAnIDI1cHgnLFxuICAgICAgICBoZWlnaHQ6ICcyNXB4JyxcbiAgICAgIH0sXG4gICAgICAnLm1vZGFsLXZpZGVvLW1vdmllLXdyYXAnOiB7XG4gICAgICAgIG1hcmdpbjogNixcbiAgICAgICAgd2lkdGg6ICdhdXRvJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAvLyBEaXZpZGVyIHN0eWxlc1xuICAgIGhyOiB7XG4gICAgICBib3JkZXI6IDAsXG4gICAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQnLFxuICAgICAgYm9yZGVyQ29sb3I6ICcjRDlFMEU3JyxcbiAgICB9LFxuICAgIC8vIGFsc28geW91IGNhbiB1c2Ugb3RoZXIgSFRNTCBlbGVtZW50cyBzdHlsZSBoZXJlXG4gICAgdWw6IHtcbiAgICAgIGxpc3RTdHlsZTogJ25vbmUnLFxuICAgIH0sXG4gICAgc3JPbmx5OiB7XG4gICAgICBib3JkZXI6ICcwICFpbXBvcnRhbnQnLFxuICAgICAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KSAhaW1wb3J0YW50JyxcbiAgICAgIGNsaXBQYXRoOiAnaW5zZXQoNTAlKSAhaW1wb3J0YW50JyxcbiAgICAgIGhlaWdodDogJzFweCAhaW1wb3J0YW50JyxcbiAgICAgIG1hcmdpbjogJy0xcHggIWltcG9ydGFudCcsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbiAhaW1wb3J0YW50JyxcbiAgICAgIHBhZGRpbmc6ICcwICFpbXBvcnRhbnQnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSAhaW1wb3J0YW50JyxcbiAgICAgIHdpZHRoOiAnMXB4ICFpbXBvcnRhbnQnLFxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCAhaW1wb3J0YW50JyxcbiAgICB9LFxuICB9LFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==