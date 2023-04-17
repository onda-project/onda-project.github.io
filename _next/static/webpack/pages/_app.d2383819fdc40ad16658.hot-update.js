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
      display: 'flex'
      // width: '170px',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3RoZW1lL2luZGV4LmpzIl0sIm5hbWVzIjpbImNvbG9ycyIsInRleHQiLCJ0ZXh0X3NlY29uZGFyeSIsImhlYWRpbmciLCJoZWFkaW5nX3NlY29uZGFyeSIsImJhY2tncm91bmQiLCJiYWNrZ3JvdW5kX3NlY29uZGFyeSIsImJvcmRlcl9jb2xvciIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJtdXRlZCIsImFjY2VudCIsInllbGxvdyIsIm1vZGVzIiwiZGFyayIsImJyZWFrcG9pbnRzIiwiZm9udHMiLCJib2R5IiwiZm9udFNpemVzIiwiZm9udFdlaWdodHMiLCJib2xkIiwibGluZUhlaWdodHMiLCJsZXR0ZXJTcGFjaW5ncyIsImNhcHMiLCJzcGFjZSIsImxheW91dCIsImNvbnRhaW5lciIsIm1heFdpZHRoIiwicHgiLCJoZWFkZXIiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJweSIsInBvc2l0aW9uIiwid2lkdGgiLCJ0b29sYmFyIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIm1haW4iLCJzZWN0aW9uIiwia2V5RmVhdHVyZSIsImZlYXR1cmUiLCJwYXJ0bmVyIiwicHQiLCJwYiIsInRlc3RpbW9uaWFsIiwib3ZlcmZsb3ciLCJzZWN1cmVQYXltZW50IiwiZmFxIiwic2VjdGlvbkhlYWRlciIsImZsZXhEaXJlY3Rpb24iLCJtdCIsIm1hcmdpbkJvdHRvbSIsInRpdGxlIiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwidGV4dEFsaWduIiwibGV0dGVyU3BhY2luZyIsInN1YlRpdGxlIiwidGV4dFRyYW5zZm9ybSIsIm1iIiwiZm9udEZhbWlseSIsImhlcm9QcmltYXJ5IiwiaGVyb1NlY29uZGFyeSIsInByIiwidmFyaWFudCIsImxlYWQiLCJsaW5rcyIsImN1cnNvciIsIm5hdiIsImZvb3RlciIsInRleHREZWNvcmF0aW9uIiwibG9nbyIsImltYWdlcyIsImF2YXRhciIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsImJ1dHRvbnMiLCJtZW51IiwiZGVmYXVsdEJ0biIsIm91dGxpbmUiLCJib3hTaGFkb3ciLCJ3aGl0ZUJ1dHRvbiIsImJnIiwidGV4dEJ1dHRvbiIsImJhY2tncm91bmRDb2xvciIsInN2ZyIsIm1yIiwiY2FyZHMiLCJwYWRkaW5nIiwib2ZmZXIiLCJmbGV4IiwibWluSGVpZ2h0IiwibSIsImJvcmRlciIsImZlYXR1cmVDYXJkIiwicCIsImZvcm1zIiwibGFiZWwiLCJpbnB1dCIsImJvcmRlckNvbG9yIiwidCIsImNvbmNhdCIsImJhZGdlcyIsInN0eWxlcyIsInJvb3QiLCJ0b3AiLCJyaWdodCIsIm1hcmdpbiIsImhyIiwiYm9yZGVyQm90dG9tIiwidWwiLCJsaXN0U3R5bGUiLCJzck9ubHkiLCJjbGlwIiwiY2xpcFBhdGgiLCJ3aGl0ZVNwYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQSw4Q0FBZTtFQUNiO0VBQ0FBLE1BQU0sRUFBRTtJQUNOQyxJQUFJLEVBQUUsU0FBUztJQUFFO0lBQ2pCQyxjQUFjLEVBQUUsU0FBUztJQUFFO0lBQzNCQyxPQUFPLEVBQUUsU0FBUztJQUFFO0lBQ3BCQyxpQkFBaUIsRUFBRSxTQUFTO0lBQUU7SUFDOUJDLFVBQVUsRUFBRSxTQUFTO0lBQUU7SUFDdkJDLG9CQUFvQixFQUFFLFNBQVM7SUFBRTtJQUNqQ0MsWUFBWSxFQUFFLFNBQVM7SUFBRTtJQUN6QkMsT0FBTyxFQUFFLFNBQVM7SUFBRTtJQUNwQkMsU0FBUyxFQUFFLFNBQVM7SUFBRTtJQUN0QkMsS0FBSyxFQUFFLFNBQVM7SUFBRTtJQUNsQkMsTUFBTSxFQUFFLE1BQU07SUFBRTtJQUNoQkMsTUFBTSxFQUFFLFNBQVM7SUFFakI7SUFDQUMsS0FBSyxFQUFFO01BQ0xDLElBQUksRUFBRTtRQUNKYixJQUFJLEVBQUUsTUFBTTtRQUNaSSxVQUFVLEVBQUUsTUFBTTtRQUNsQkcsT0FBTyxFQUFFLE1BQU07UUFDZkMsU0FBUyxFQUFFLE1BQU07UUFDakJDLEtBQUssRUFBRTtN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QUFjO01BQ3RCb0IsSUFBSSxFQUFFLHFDQUFxQztNQUMzQ0MsUUFBUSxFQUFFLHVCQUF1QjtNQUNqQ3hDLE1BQU0sRUFBRSxnQkFBZ0I7TUFDeEJpQyxNQUFNLEVBQUUsaUJBQWlCO01BQ3pCOUQsUUFBUSxFQUFFLG1CQUFtQjtNQUM3QjJDLE9BQU8sRUFBRSxjQUFjO01BQ3ZCekQsUUFBUSxFQUFFLHFCQUFxQjtNQUMvQkMsS0FBSyxFQUFFLGdCQUFnQjtNQUN2Qm1GLFVBQVUsRUFBRTtJQUNkO0VBQ0Y7QUFDRixDQUFDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZDIzODM4MTlmZGM0MGFkMTY2NTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgLy8gZXhhbXBsZSBjb2xvcnMgd2l0aCBkYXJrIG1vZGVcbiAgY29sb3JzOiB7XG4gICAgdGV4dDogJyMzNDNENDgnLCAvLyBib2R5IGNvbG9yIGFuZCBwcmltYXJ5IGNvbG9yXG4gICAgdGV4dF9zZWNvbmRhcnk6ICcjMDIwNzNFJywgLy8gc2Vjb25kYXJ5IGJvZHkgY29sb3JcbiAgICBoZWFkaW5nOiAnIzI0NDg4NicsIC8vIHByaW1hcnkgaGVhZGluZyBjb2xvclxuICAgIGhlYWRpbmdfc2Vjb25kYXJ5OiAnIzBGMjEzNycsIC8vIGhlYWRpbmcgY29sb3JcbiAgICBiYWNrZ3JvdW5kOiAnI0ZGRkZGRicsIC8vIGJvZHkgYmFja2dyb3VuZCBjb2xvclxuICAgIGJhY2tncm91bmRfc2Vjb25kYXJ5OiAnI0Y5RkJGRCcsIC8vIHNlY29uZGFyeSBiYWNrZ3JvdW5kIGNvbG9yXG4gICAgYm9yZGVyX2NvbG9yOiAnI0U1RUNGNCcsIC8vIGJvcmRlciBjb2xvclxuICAgIHByaW1hcnk6ICcjMUYzRTc2JywgLy8gcHJpbWFyeSBidXR0b24gYW5kIGxpbmsgY29sb3JcbiAgICBzZWNvbmRhcnk6ICcjMjVDQjlFJywgLy8gc2Vjb25kYXJ5IGNvbG9yIC0gY2FuIGJlIHVzZWQgZm9yIGhvdmVyIHN0YXRlc1xuICAgIG11dGVkOiAnIzdCODE4OCcsIC8vIG11dGVkIGNvbG9yXG4gICAgYWNjZW50OiAnIzYwOScsIC8vIGEgY29udHJhc3QgY29sb3IgZm9yIGVtcGhhc2l6aW5nIFVJXG4gICAgeWVsbG93OiAnI0Y2QzQxNicsXG5cbiAgICAvLyBoaWdobGlnaHRcdGEgYmFja2dyb3VuZCBjb2xvciBmb3IgaGlnaGxpZ2h0aW5nIHRleHRcbiAgICBtb2Rlczoge1xuICAgICAgZGFyazoge1xuICAgICAgICB0ZXh0OiAnI2ZmZicsXG4gICAgICAgIGJhY2tncm91bmQ6ICcjMDAwJyxcbiAgICAgICAgcHJpbWFyeTogJyMwY2YnLFxuICAgICAgICBzZWNvbmRhcnk6ICcjMDljJyxcbiAgICAgICAgbXV0ZWQ6ICcjMTExJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgYnJlYWtwb2ludHM6IFtcbiAgICAnNDgwcHgnLFxuICAgICc2NDBweCcsXG4gICAgJzc2OHB4JyxcbiAgICAnMTAyNHB4JyxcbiAgICAnMTIyMHB4JyxcbiAgICAnMTM2NnB4JyxcbiAgICAnMTYyMHB4JyxcbiAgXSxcbiAgZm9udHM6IHtcbiAgICBib2R5OiBcIidETSBTYW5zJywgc2Fucy1zZXJpZlwiLFxuICAgIGhlYWRpbmc6IFwiJ0RNIFNhbnMnLCBzYW5zLXNlcmlmXCIsXG4gIH0sXG4gIGZvbnRTaXplczogWzEyLCAxNSwgMTYsIDE4LCAyMCwgMjIsIDI0LCAyOCwgMzIsIDM2LCA0MiwgNDgsIDUyLCA2NF0sXG4gIGZvbnRXZWlnaHRzOiB7XG4gICAgYm9keTogJ25vcm1hbCcsXG4gICAgaGVhZGluZzogNTAwLFxuICAgIGJvbGQ6IDcwMCxcbiAgfSxcbiAgbGluZUhlaWdodHM6IHtcbiAgICBib2R5OiAxLjgsXG4gICAgaGVhZGluZzogMS41LFxuICB9LFxuICBsZXR0ZXJTcGFjaW5nczoge1xuICAgIGJvZHk6ICdub3JtYWwnLFxuICAgIGNhcHM6ICcwLjJlbScsXG4gICAgaGVhZGluZzogJy0wLjVweCcsXG4gIH0sXG4gIHNwYWNlOiBbMCwgNSwgMTAsIDE1LCAyMCwgMjUsIDMwLCA1MCwgODAsIDEwMCwgMTIwLCAxNTBdLFxuICAvLyB2YXJpYW50cyBjYW4gdXNlIGN1c3RvbSwgdXNlci1kZWZpbmVkIG5hbWVzXG4gIGxheW91dDoge1xuICAgIGNvbnRhaW5lcjoge1xuICAgICAgbWF4V2lkdGg6IFtcbiAgICAgICAgJzEwMCUnLFxuICAgICAgICBudWxsLFxuICAgICAgICBudWxsLFxuICAgICAgICAnNzgwcHgnLFxuICAgICAgICAnMTAyMHB4JyxcbiAgICAgICAgJzEyMDBweCcsXG4gICAgICAgIG51bGwsXG4gICAgICAgICcxMzEwcHgnLFxuICAgICAgXSxcbiAgICAgIHB4OiBbNCwgNl0sXG4gICAgfSxcbiAgICBoZWFkZXI6IHtcbiAgICAgIGNvbG9yOiAnIzAyMDczRScsXG4gICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcbiAgICAgIHB5OiAzLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH0sXG4gICAgdG9vbGJhcjoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgIH0sXG4gICAgbWFpbjoge30sXG4gIH0sXG4gIHNlY3Rpb246IHtcbiAgICBrZXlGZWF0dXJlOiB7XG4gICAgICBweTogWzgsIG51bGwsIDksIG51bGwsIG51bGwsIDEwXSxcbiAgICB9LFxuICAgIGZlYXR1cmU6IHtcbiAgICAgIHB5OiBbOCwgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTBdLFxuICAgIH0sXG4gICAgcGFydG5lcjoge1xuICAgICAgcHQ6IFsyLCBudWxsLCBudWxsLCA1XSxcbiAgICAgIHBiOiBbOCwgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTBdLFxuICAgIH0sXG4gICAgdGVzdGltb25pYWw6IHtcbiAgICAgIHB5OiBbOCwgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTBdLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIH0sXG4gICAgc2VjdXJlUGF5bWVudDoge1xuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBwdDogOSxcbiAgICB9LFxuICAgIGZhcToge1xuICAgICAgcHk6IFs4LCBudWxsLCA5LCBudWxsLCBudWxsLCAxMF0sXG4gICAgfSxcbiAgfSxcbiAgc2VjdGlvbkhlYWRlcjoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIG10OiAtMSxcbiAgICBtYXJnaW5Cb3R0b206IFsnNTBweCcsIG51bGwsICc2MHB4JywgbnVsbCwgJzY1cHgnLCAnNzVweCddLFxuICAgIHRpdGxlOiB7XG4gICAgICBmb250U2l6ZTogWycyNHB4JywgbnVsbCwgJzI4cHgnLCBudWxsLCBudWxsLCAnMzJweCcsIG51bGwsICczNnB4J10sXG4gICAgICBjb2xvcjogJ2hlYWRpbmdfc2Vjb25kYXJ5JyxcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjMsIG51bGwsIG51bGwsIDEuMl0sXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgZm9udFdlaWdodDogJzcwMCcsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnLS41cHgnLFxuICAgIH0sXG5cbiAgICBzdWJUaXRsZToge1xuICAgICAgZm9udFNpemU6IFswLCBudWxsLCAnMTRweCddLFxuICAgICAgY29sb3I6ICdoZWFkaW5nJyxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiBbJzEuNXB4JywgbnVsbCwgJzJweCddLFxuICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gICAgICBmb250V2VpZ2h0OiAnNzAwJyxcbiAgICAgIG1iOiAnOHB4JyxcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNSxcbiAgICB9LFxuICB9LFxuICB0ZXh0OiB7XG4gICAgaGVhZGluZzoge1xuICAgICAgZm9udEZhbWlseTogJ2hlYWRpbmcnLFxuICAgICAgbGluZUhlaWdodDogJ2hlYWRpbmcnLFxuICAgICAgZm9udFdlaWdodDogJ2hlYWRpbmcnLFxuICAgICAgZm9udFNpemU6IDQsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnaGVhZGluZycsXG4gICAgICBjb2xvcjogJ2hlYWRpbmcnLFxuICAgIH0sXG4gICAgaGVyb1ByaW1hcnk6IHtcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgZm9udFNpemU6IFtcbiAgICAgICAgJzQwcHgnLFxuICAgICAgICAnNTJweCcsXG4gICAgICAgICc2MHB4JyxcbiAgICAgICAgJzQ4cHgnLFxuICAgICAgICAnNTJweCcsXG4gICAgICAgICc2MHB4JyxcbiAgICAgICAgJzY2cHgnLFxuICAgICAgICAnNzhweCcsXG4gICAgICBdLFxuICAgICAgbGluZUhlaWdodDogMS4yLFxuICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgbWI6IFs1LCBudWxsLCBudWxsLCBudWxsLCAnMzBweCddLFxuICAgIH0sXG4gICAgaGVyb1NlY29uZGFyeToge1xuICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICBmb250U2l6ZTogWzIsIDMsIDQsICcxN3B4JywgbnVsbCwgMywgJzE5cHgnLCA0XSxcbiAgICAgIGxpbmVIZWlnaHQ6IFsyLCBudWxsLCBudWxsLCBudWxsLCAyLjJdLFxuICAgICAgZm9udFdlaWdodDogJ2JvZHknLFxuICAgICAgcHI6IFswLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnMTAwcHgnLCBudWxsLCAnMTI1cHgnXSxcbiAgICAgIG1iOiBbJzM1cHgnLCBudWxsLCBudWxsLCBudWxsLCAnNDBweCcsIG51bGwsIG51bGwsIDddLFxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgIC8vIGV4dGVuZHMgdGhlIHRleHQuaGVhZGluZyBzdHlsZXNcbiAgICAgIHZhcmlhbnQ6ICd0ZXh0LmhlYWRpbmcnLFxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgICAgZm9udFNpemU6IDE4LFxuICAgICAgbGluZUhlaWdodDogJzMwcHgnLFxuICAgICAgY29sb3I6ICcjMEYyMTM3JyxcbiAgICB9LFxuICAgIGxlYWQ6IHtcbiAgICAgIGZvbnRTaXplOiA0MCxcbiAgICAgIGZvbnRGYW1pbHk6ICdETSBTYW5zJyxcbiAgICAgIGZvbnRXZWlnaHQ6ICc1MDAnLFxuICAgICAgbGluZUhlaWdodDogJzYwcHgnLFxuICAgICAgbGV0dGVyU3BhY2luZzogJy0xLjVweCcsXG4gICAgICBjb2xvcjogJyMwRjIxMzcnLFxuICAgIH0sXG4gICAgbXV0ZWQ6IHtcbiAgICAgIGxpbmVIZWlnaHQ6ICcyNnB4JyxcbiAgICAgIGNvbG9yOiAnbXV0ZWQnLFxuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiB7XG4gICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICBjb2xvcjogJyMwMEE5OUQnLFxuICAgICAgbGluZUhlaWdodDogJzQwcHgnLFxuICAgIH0sXG4gIH0sXG4gIGxpbmtzOiB7XG4gICAgZGVmYXVsdDoge1xuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgfSxcbiAgICBib2xkOiB7XG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgfSxcbiAgICBuYXY6IHtcbiAgICAgIGRpc3BsYXk6IFsnbm9uZScsIG51bGwsICdpbmxpbmUtYmxvY2snXSxcbiAgICAgIHB4OiAyNSxcbiAgICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuICAgIH0sXG4gICAgZm9vdGVyOiB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgcHg6IDAsXG4gICAgICBjb2xvcjogJ2luaGVyaXQnLFxuICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICB9LFxuICAgIGxvZ286IHtcbiAgICAgIHByOiAzMCxcbiAgICAgIG1iOiAnNXB4JyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIC8vIHdpZHRoOiAnMTcwcHgnLFxuICAgIH0sXG4gIH0sXG4gIGltYWdlczoge1xuICAgIGF2YXRhcjoge1xuICAgICAgd2lkdGg6IDQ4LFxuICAgICAgaGVpZ2h0OiA0OCxcbiAgICAgIGJvcmRlclJhZGl1czogOTk5OTksXG4gICAgfSxcbiAgfSxcbiAgLy8gdmFyaWFudHMgZm9yIGJ1dHRvbnNcbiAgYnV0dG9uczoge1xuICAgIG1lbnU6IHtcbiAgICAgIGRpc3BsYXk6IFtudWxsLCBudWxsLCAnbm9uZSddLFxuICAgIH0sIC8vIGRlZmF1bHQgdmFyaWFudCBmb3IgTWVudUJ1dHRvblxuICAgIC8vIHlvdSBjYW4gcmVmZXJlbmNlIG90aGVyIHZhbHVlcyBkZWZpbmVkIGluIHRoZSB0aGVtZVxuICAgIGRlZmF1bHRCdG46IHtcbiAgICAgICdib3JkZXJSYWRpdXMnOiAnNDVweCcsXG4gICAgICAnZm9udFNpemUnOiBbJzE0cHgnLCAxLCBudWxsLCBudWxsLCAyXSxcbiAgICAgICdsZXR0ZXJTcGFjaW5ncyc6IFsnLTAuNXB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJy0wLjE1cHgnXSxcbiAgICAgICdwYWRkaW5nJzogWycxMXB4IDIwcHggMTBweCcsIG51bGwsIG51bGwsIG51bGwsICcxM3B4IDMwcHgnXSxcbiAgICAgICdmb250RmFtaWx5JzogJ2JvZHknLFxuICAgICAgJ2N1cnNvcic6ICdwb2ludGVyJyxcbiAgICAgICdsaW5lSGVpZ2h0JzogMS4yLFxuICAgICAgJ3RyYW5zaXRpb24nOiAnYWxsIDAuMjVzJyxcbiAgICAgICdmb250V2VpZ2h0JzogNTAwLFxuICAgICAgJyY6Zm9jdXMnOiB7XG4gICAgICAgIG91dGxpbmU6IDAsXG4gICAgICB9LFxuICAgIH0sXG4gICAgcHJpbWFyeToge1xuICAgICAgJ3ZhcmlhbnQnOiAnYnV0dG9ucy5kZWZhdWx0QnRuJyxcbiAgICAgICdjb2xvcic6ICd3aGl0ZScsXG4gICAgICAnYmcnOiAncHJpbWFyeScsXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgYm94U2hhZG93OiAncmdiYSgzMSwgNjIsIDExOCwgMC41NykgMHB4IDlweCAyMHB4IC01cHgnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHdoaXRlQnV0dG9uOiB7XG4gICAgICAndmFyaWFudCc6ICdidXR0b25zLmRlZmF1bHRCdG4nLFxuICAgICAgJ2NvbG9yJzogJ2hlYWRpbmdfc2Vjb25kYXJ5JyxcbiAgICAgICdiZyc6ICd3aGl0ZScsXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgYm94U2hhZG93OiAncmdiYSgwLCAwLCAwLCAwLjUpIDBweCAxMnB4IDI0cHggLTEwcHgnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHNlY29uZGFyeToge1xuICAgICAgJ3ZhcmlhbnQnOiAnYnV0dG9ucy5kZWZhdWx0QnRuJyxcbiAgICAgICdib3JkZXInOiAnMS41cHggc29saWQgd2hpdGUnLFxuICAgICAgJ2JhY2tncm91bmRDb2xvcic6ICd0cmFuc3BhcmVudCcsXG4gICAgICAnY29sb3InOiAnd2hpdGUnLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGJnOiAnd2hpdGUnLFxuICAgICAgICBjb2xvcjogJ2hlYWRpbmdfc2Vjb25kYXJ5JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB0ZXh0QnV0dG9uOiB7XG4gICAgICB2YXJpYW50OiAnYnV0dG9ucy5kZWZhdWx0QnRuJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBzdmc6IHtcbiAgICAgICAgZm9udFNpemU6IFs0LCA2XSxcbiAgICAgICAgbXI6IDIsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGNhcmRzOiB7XG4gICAgcHJpbWFyeToge1xuICAgICAgcGFkZGluZzogMixcbiAgICAgIGJvcmRlclJhZGl1czogNCxcbiAgICB9LFxuICAgIG9mZmVyOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgZmxleDogWycxIDEgY2FsYyg1MCUgLSAxNnB4KScsICcxIDEgMjAlJ10sXG4gICAgICBtaW5IZWlnaHQ6IDEzMCxcbiAgICAgIG06IDIsXG4gICAgICBiYWNrZ3JvdW5kOiAnI0ZGRkZGRicsXG4gICAgICBib3JkZXI6ICcxcHggc29saWQgI0VERUZGNicsXG4gICAgICBib3JkZXJSYWRpdXM6IDUsXG4gICAgfSxcbiAgICBmZWF0dXJlQ2FyZDoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgICBwOiAzLFxuICAgIH0sXG4gIH0sXG4gIGZvcm1zOiB7XG4gICAgbGFiZWw6IHtcbiAgICAgIGZvbnRTaXplOiAxLFxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIH0sXG4gICAgaW5wdXQ6IHtcbiAgICAgICdib3JkZXJSYWRpdXMnOiA4LFxuICAgICAgJ2JvcmRlckNvbG9yJzogJ2JvcmRlcl9jb2xvcicsXG4gICAgICAnaGVpZ2h0JzogNjAsXG4gICAgICAnJjpmb2N1cyc6IHtcbiAgICAgICAgYm9yZGVyQ29sb3I6ICdwcmltYXJ5JyxcbiAgICAgICAgYm94U2hhZG93OiB0ID0+IGAwIDAgMCAycHggJHt0LmNvbG9ycy5wcmltYXJ5fWAsXG4gICAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcblxuICBiYWRnZXM6IHtcbiAgICBwcmltYXJ5OiB7XG4gICAgICBjb2xvcjogJ2JhY2tncm91bmQnLFxuICAgICAgYmc6ICcjMjhBNUZGJyxcbiAgICAgIGJvcmRlclJhZGl1czogMzAsXG4gICAgICBwOiAnM3B4IDExcHgnLFxuICAgICAgZm9udFNpemU6IDEsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuNXB4JyxcbiAgICB9LFxuICAgIG91dGxpbmU6IHtcbiAgICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgICBiZzogJ3RyYW5zcGFyZW50JyxcbiAgICAgIGJveFNoYWRvdzogJ2luc2V0IDAgMCAwIDFweCcsXG4gICAgfSxcbiAgfSxcblxuICBzdHlsZXM6IHtcbiAgICAvLyBUbyBhZGQgYmFzZSwgdG9wLWxldmVsIHN0eWxlcyB0byB0aGUgPGJvZHk+IGVsZW1lbnQsIHVzZSB0aGVtZS5zdHlsZXMucm9vdC5cbiAgICByb290OiB7XG4gICAgICAnZm9udEZhbWlseSc6ICdib2R5JyxcbiAgICAgICdsaW5lSGVpZ2h0JzogJ2JvZHknLFxuICAgICAgJ2ZvbnRXZWlnaHQnOiAnYm9keScsXG4gICAgICAnV2Via2l0Rm9udFNtb290aGluZyc6ICdhbnRpYWxpYXNlZCcsXG4gICAgICAnLm1vZGFsLXZpZGVvLWNsb3NlLWJ0bic6IHtcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgIHRvcDogJy0yNXB4JyxcbiAgICAgICAgcmlnaHQ6ICctMjVweCcsXG4gICAgICAgIHdpZHRoOiAnIDI1cHgnLFxuICAgICAgICBoZWlnaHQ6ICcyNXB4JyxcbiAgICAgIH0sXG4gICAgICAnLm1vZGFsLXZpZGVvLW1vdmllLXdyYXAnOiB7XG4gICAgICAgIG1hcmdpbjogNixcbiAgICAgICAgd2lkdGg6ICdhdXRvJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAvLyBEaXZpZGVyIHN0eWxlc1xuICAgIGhyOiB7XG4gICAgICBib3JkZXI6IDAsXG4gICAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQnLFxuICAgICAgYm9yZGVyQ29sb3I6ICcjRDlFMEU3JyxcbiAgICB9LFxuICAgIC8vIGFsc28geW91IGNhbiB1c2Ugb3RoZXIgSFRNTCBlbGVtZW50cyBzdHlsZSBoZXJlXG4gICAgdWw6IHtcbiAgICAgIGxpc3RTdHlsZTogJ25vbmUnLFxuICAgIH0sXG4gICAgc3JPbmx5OiB7XG4gICAgICBib3JkZXI6ICcwICFpbXBvcnRhbnQnLFxuICAgICAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KSAhaW1wb3J0YW50JyxcbiAgICAgIGNsaXBQYXRoOiAnaW5zZXQoNTAlKSAhaW1wb3J0YW50JyxcbiAgICAgIGhlaWdodDogJzFweCAhaW1wb3J0YW50JyxcbiAgICAgIG1hcmdpbjogJy0xcHggIWltcG9ydGFudCcsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbiAhaW1wb3J0YW50JyxcbiAgICAgIHBhZGRpbmc6ICcwICFpbXBvcnRhbnQnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSAhaW1wb3J0YW50JyxcbiAgICAgIHdpZHRoOiAnMXB4ICFpbXBvcnRhbnQnLFxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCAhaW1wb3J0YW50JyxcbiAgICB9LFxuICB9LFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==