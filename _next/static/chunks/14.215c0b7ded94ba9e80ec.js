(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{"1OyB":function(t,n,e){"use strict";function r(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}e.d(n,"a",(function(){return r}))},"65YR":function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return _}));var r=e("FdF9"),o=e("2A+t"),a=e("izhR"),i=e("JCYj"),u=e("wx14"),c=e("Ff2n"),f=e("KQm4"),s=e("1OyB"),d=e("vuIU"),l=e("JX7q"),p=e("Ji7U"),v=e("md7G"),h=e("foSv"),m=e("rePB");function b(t){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=Object(h.a)(t);if(n){var o=Object(h.a)(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return Object(v.a)(this,e)}}var y=function(t){Object(p.a)(e,t);var n=b(e);function e(){var t;Object(s.a)(this,e);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return t=n.call.apply(n,[this].concat(o)),Object(m.a)(Object(l.a)(t),"state",{openIndexes:[0]}),Object(m.a)(Object(l.a)(t),"handleItemClick",(function(n){t.internalSetState((function(t){var e=t.openIndexes.includes(n);return{type:e?"closing":"opening",openIndexes:e?t.openIndexes.filter((function(t){return t!==n})):[].concat(Object(f.a)(t.openIndexes),[n])}})),console.log("clicked")})),t}return Object(d.a)(e,[{key:"getState",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state;return{openIndexes:void 0===this.props.openIndexes?t.openIndexes:this.props.openIndexes}}},{key:"internalSetState",value:function(t){var n,e=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};this.setState((function(r){var o=e.getState(r),a="function"===typeof t?t(o):t;return n=e.props.stateReducer(o,a)}),(function(){e.props.onStateChange(n),r()}))}},{key:"render",value:function(){return this.props.children({openIndexes:this.getState().openIndexes,handleItemClick:this.handleItemClick})}}]),e}(r.default.Component);Object(m.a)(y,"defaultProps",{stateReducer:function(t,n){return n},onStateChange:function(){}});var g=e("ZMKu"),O=["children"],j=["isOpen"],x=["isOpen","children"];r.default.createElement;function w(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function M(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?w(Object(e),!0).forEach((function(n){Object(m.a)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):w(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var S=function(t){var n=t.children,e=Object(c.a)(t,O);return Object(o.c)("div",Object(u.a)({sx:A.buttonToggle},e),n)},A={buttonToggle:{display:"flex",color:"heading_secondary",cursor:"pointer",border:"none",fontSize:[2,null,3],fontWeight:500,letterSpacing:-.5,position:"relative",paddingLeft:["33px",null,"45px"],lineHeight:[1.5,null,1.8],"& > span":{position:"absolute",width:20,height:20,borderRadius:"50%",backgroundColor:"primary",top:["2px",null,"6px"],left:[0,null,"13px"],"&.open:after":{opacity:0},"&::before":{position:"absolute",content:'""',height:"2px",width:10,backgroundColor:"white",top:"50%",left:"50%",transform:"translate(-50% , -50%)"},"&::after":{position:"absolute",content:'""',height:10,width:"2px",backgroundColor:"white",top:"50%",left:"50%",transform:"translate(-50% , -50%)",transition:"all 0.25s"}}}},I={open:{height:"auto",marginTop:12},closed:{height:0,marginTop:0}};function q(t){var n=t.isOpen,e=Object(c.a)(t,j);return Object(o.c)(g.a.div,Object(u.a)({initial:"closed",animate:n?"open":"closed",variants:I,sx:{overflowY:"hidden",fontSize:[1,null,2],lineHeight:[1.85,null,null,1.9,2],color:"#343D48",paddingLeft:["33px",null,"45px"]," > div ":{paddingBottom:[1,2]}}},e))}var P=function(t){t.isOpen;var n=t.children,e=Object(c.a)(t,x);return Object(o.c)("div",Object(u.a)({css:{overflow:"hidden",padding:"17px 0",borderBottom:"1px solid #E5ECF4","&:last-child":{borderBottom:"0px solid"}}},e),n)},k=function(t,n){return"closing"===n.type&&t.openIndexes.length<2?M(M({},n),{},{openIndexes:t.openIndexes}):n},C=function(t,n){return"opening"===n.type?M(M({},n),{},{openIndexes:n.openIndexes.slice(-1)}):n},R=function(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return function(t,e){return n.reduce((function(n,e){return e(t,n)}),e)}},T=["items"],D=r.default.createElement;function E(t){var n=t.items,e=Object(c.a)(t,T);return D(y,Object(u.a)({stateReducer:R(C,k)},e),(function(t){var e=t.openIndexes,o=t.handleItemClick;return D(r.default.Fragment,null,n.map((function(t,n){return D(P,{key:t.title,isOpen:e.includes(n)},D(S,{onClick:function(){return o(n)}},D("span",{className:e.includes(n)?"open":"closed"}),t.title),D(q,{isOpen:e.includes(n)},t.contents))})))}))}r.default.createElement;var N=[{title:"O que \xe9 a ONDA?",contents:Object(o.c)("div",null,"A ",Object(o.c)("abbr",{title:"Olimp\xedada Nacional de Aplicativos"},"ONDA"),", \xe9 um projeto que desafia o estudante a desenvolver tecnologias capazes de amenizar os problemas sociais e ambientais que permeiam a sociedade moderna. .")},{title:"Quem pode participar?",contents:Object(o.c)("div",null,"A ONDA \xe9 aberta aos alunos do Ensino M\xe9dio, p\xfablico ou privado.")},{title:"Como participar?",contents:Object(o.c)("div",null,"Para participar, os estudantes precisam se organizar em equipes compostas por dois a quatro membros, juntamente com um professor orientador. As equipes devem ser mistas, incluindo meninos e meninas, que podem ser de s\xe9ries diferentes, desde que perten\xe7am \xe0 mesma escola.")},{title:"Como me inscrever?",contents:Object(o.c)("div",null,"Cabe ao professor orientador efetuar a inscri\xe7\xe3o da equipe, mediante ao preenchimento do formul\xe1rio de cadastro, cujo link encontra-se dispon\xedvel no edital da competi\xe7\xe3o.")},{title:"Onde encontro o link de homologa\xe7\xe3o das inscri\xe7\xf5es?",contents:Object(o.c)("div",null,"A planilha de homologa\xe7\xe3o das inscri\xe7\xf5es pode ser encontrada ",Object(o.c)("a",{href:"https://docs.google.com/spreadsheets/d/1j2LJ8ad8TZqElLq5gciwW9RzLXBeFIiz"},"aqui"),".")}];function _(){return Object(o.c)("section",{sx:{variant:"section.faq"},id:"faq"},Object(o.c)(a.c,null,Object(o.c)(i.a,{title:"Perguntas frequentes",slogan:"Obtenha a resposta da sua pergunta"}),Object(o.c)(a.a,{sx:{display:"flex",width:["100%",null,null,"650px","745px"],flexDirection:"column",mx:"auto",my:-4}},Object(o.c)(E,{items:N}))))}},"82gj":function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return r}));var r=function(){},o=function(){}},Ibe6:function(t,n,e){"use strict";e.d(n,"a",(function(){return s})),e.d(n,"b",(function(){return q})),e.d(n,"c",(function(){return k})),e.d(n,"d",(function(){return p})),e.d(n,"e",(function(){return I})),e.d(n,"f",(function(){return A})),e.d(n,"g",(function(){return f})),e.d(n,"h",(function(){return v})),e.d(n,"i",(function(){return y})),e.d(n,"j",(function(){return h})),e.d(n,"k",(function(){return S})),e.d(n,"l",(function(){return d})),e.d(n,"m",(function(){return m})),e.d(n,"n",(function(){return b}));var r=e("mrSG"),o=function(t,n){return function(e){return Math.max(Math.min(e,n),t)}},a=function(t){return t%1?Number(t.toFixed(5)):t},i=/(-)?(\d[\d\.]*)/g,u=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,c=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i,f={test:function(t){return"number"===typeof t},parse:parseFloat,transform:function(t){return t}},s=Object(r.a)(Object(r.a)({},f),{transform:o(0,1)}),d=Object(r.a)(Object(r.a)({},f),{default:1}),l=function(t){return{test:function(n){return"string"===typeof n&&n.endsWith(t)&&1===n.split(" ").length},parse:parseFloat,transform:function(n){return""+n+t}}},p=l("deg"),v=l("%"),h=l("px"),m=l("vh"),b=l("vw"),y=Object(r.a)(Object(r.a)({},v),{parse:function(t){return v.parse(t)/100},transform:function(t){return v.transform(100*t)}}),g=o(0,255),O=function(t){return void 0!==t.red},j=function(t){return void 0!==t.hue};var x=function(t){return function(n){if("string"!==typeof n)return n;for(var e={},r=function(t){return t.substring(t.indexOf("(")+1,t.lastIndexOf(")"))}(n).replace(/(,|\/)/g," ").split(/ \s*/),o=0;o<4;o++)e[t[o]]=void 0!==r[o]?parseFloat(r[o]):1;return e}},w=Object(r.a)(Object(r.a)({},f),{transform:function(t){return Math.round(g(t))}});function M(t,n){return t.startsWith(n)&&c.test(t)}var S={test:function(t){return"string"===typeof t?M(t,"rgb"):O(t)},parse:x(["red","green","blue","alpha"]),transform:function(t){var n=t.red,e=t.green,r=t.blue,o=t.alpha,i=void 0===o?1:o;return function(t){var n=t.red,e=t.green,r=t.blue,o=t.alpha;return"rgba("+n+", "+e+", "+r+", "+(void 0===o?1:o)+")"}({red:w.transform(n),green:w.transform(e),blue:w.transform(r),alpha:a(s.transform(i))})}},A={test:function(t){return"string"===typeof t?M(t,"hsl"):j(t)},parse:x(["hue","saturation","lightness","alpha"]),transform:function(t){var n=t.hue,e=t.saturation,r=t.lightness,o=t.alpha,i=void 0===o?1:o;return function(t){var n=t.hue,e=t.saturation,r=t.lightness,o=t.alpha;return"hsla("+n+", "+e+", "+r+", "+(void 0===o?1:o)+")"}({hue:Math.round(n),saturation:v.transform(a(e)),lightness:v.transform(a(r)),alpha:a(s.transform(i))})}},I=Object(r.a)(Object(r.a)({},S),{test:function(t){return"string"===typeof t&&M(t,"#")},parse:function(t){var n="",e="",r="";return t.length>4?(n=t.substr(1,2),e=t.substr(3,2),r=t.substr(5,2)):(n=t.substr(1,1),e=t.substr(2,1),r=t.substr(3,1),n+=n,e+=e,r+=r),{red:parseInt(n,16),green:parseInt(e,16),blue:parseInt(r,16),alpha:1}}}),q={test:function(t){return"string"===typeof t&&c.test(t)||O(t)||j(t)},parse:function(t){return S.test(t)?S.parse(t):A.test(t)?A.parse(t):I.test(t)?I.parse(t):t},transform:function(t){return O(t)?S.transform(t):j(t)?A.transform(t):t}},P=function(t){return"number"===typeof t?0:t},k={test:function(t){if("string"!==typeof t||!isNaN(t))return!1;var n=0,e=t.match(i),r=t.match(u);return e&&(n+=e.length),r&&(n+=r.length),n>0},parse:function(t){var n=t,e=[],r=n.match(u);r&&(n=n.replace(u,"${c}"),e.push.apply(e,r.map(q.parse)));var o=n.match(i);return o&&e.push.apply(e,o.map(f.parse)),e},createTransformer:function(t){var n=t,e=0,r=t.match(u),o=r?r.length:0;if(r)for(var c=0;c<o;c++)n=n.replace(r[c],"${c}"),e++;var f=n.match(i),s=f?f.length:0;if(f)for(c=0;c<s;c++)n=n.replace(f[c],"${n}"),e++;return function(t){for(var r=n,i=0;i<e;i++)r=r.replace(i<o?"${c}":"${n}",i<o?q.transform(t[i]):a(t[i]));return r}},getAnimatableNone:function(t){var n=k.parse(t);return k.createTransformer(t)(n.map(P))}}},JX7q:function(t,n,e){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}e.d(n,"a",(function(){return r}))},Ji7U:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e("s4An");function o(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&Object(r.a)(t,n)}},KQm4:function(t,n,e){"use strict";function r(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function o(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(t){if("string"===typeof t)return r(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(t,n):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e.d(n,"a",(function(){return o}))},Neuu:function(t,n,e){"use strict";e.d(n,"a",(function(){return V})),e.d(n,"b",(function(){return L})),e.d(n,"c",(function(){return z})),e.d(n,"d",(function(){return J})),e.d(n,"e",(function(){return G})),e.d(n,"f",(function(){return H})),e.d(n,"g",(function(){return W})),e.d(n,"h",(function(){return $})),e.d(n,"i",(function(){return U})),e.d(n,"j",(function(){return F})),e.d(n,"k",(function(){return B})),e.d(n,"l",(function(){return u})),e.d(n,"m",(function(){return vt})),e.d(n,"n",(function(){return ut})),e.d(n,"o",(function(){return E})),e.d(n,"p",(function(){return _})),e.d(n,"q",(function(){return N})),e.d(n,"r",(function(){return nt})),e.d(n,"s",(function(){return P})),e.d(n,"t",(function(){return D})),e.d(n,"u",(function(){return p})),e.d(n,"v",(function(){return j})),e.d(n,"w",(function(){return l})),e.d(n,"x",(function(){return tt})),e.d(n,"y",(function(){return ct}));var r=e("mrSG"),o=e("82gj"),a=e("Ibe6"),i=e("eUsl"),u=function(t,n,e){return Math.min(Math.max(e,t),n)};function c(t){var n,e,r=t.duration,a=void 0===r?800:r,i=t.bounce,c=void 0===i?.25:i,s=t.velocity,d=void 0===s?0:s,l=t.mass,p=void 0===l?1:l;Object(o.b)(a<=1e4,"Spring duration must be 10 seconds or less");var v=1-c;v=u(.05,1,v),a=u(.01,10,a/1e3),v<1?(n=function(t){var n=t*v,e=n*a;return.001-(n-d)/f(t,v)*Math.exp(-e)},e=function(t){var e=t*v*a,r=e*d+d,o=Math.pow(v,2)*Math.pow(t,2)*a,i=Math.exp(-e),u=f(Math.pow(t,2),v);return(.001-n(t)>0?-1:1)*((r-o)*i)/u}):(n=function(t){return Math.exp(-t*a)*((t-d)*a+1)-.001},e=function(t){return Math.exp(-t*a)*(a*a*(d-t))});var h=function(t,n,e){for(var r=e,o=1;o<12;o++)r-=t(r)/n(r);return r}(n,e,5/a);if(isNaN(h))return{stiffness:100,damping:10};var m=Math.pow(h,2)*p;return{stiffness:m,damping:2*v*Math.sqrt(p*m)}}function f(t,n){return t*Math.sqrt(1-n*n)}function s(t){var n=t.from,e=void 0===n?0:n,r=t.to,o=void 0===r?1:r,a=t.velocity,i=void 0===a?0:a,u=t.stiffness,s=void 0===u?100:u,l=t.damping,p=void 0===l?10:l,v=t.mass,h=void 0===v?1:v,m=t.restSpeed,b=void 0===m?2:m,y=t.restDelta,g=t.duration,O=t.bounce,j=!1,x={done:!1,value:e};if(void 0!==g||void 0!==O){j=!0;var w=c({duration:g,bounce:O});s=w.stiffness,p=w.damping,i=0,h=1}var M=d,S=d;function A(){var t=i?-i/1e3:0,n=o-e,r=p/(2*Math.sqrt(s*h)),a=Math.sqrt(s/h)/1e3;if(null!==y&&void 0!==y||(y=Math.abs(o-e)<=1?.01:.4),r<1){var u=f(a,r);M=function(e){var i=Math.exp(-r*a*e);return o-i*((t+r*a*n)/u*Math.sin(u*e)+n*Math.cos(u*e))},S=function(e){var o=Math.exp(-r*a*e);return r*a*o*(Math.sin(u*e)*(t+r*a*n)/u+n*Math.cos(u*e))-o*(Math.cos(u*e)*(t+r*a*n)-u*n*Math.sin(u*e))}}else if(1===r)M=function(e){return o-Math.exp(-a*e)*(n+(t+a*n)*e)};else{var c=a*Math.sqrt(r*r-1);M=function(e){var i=Math.exp(-r*a*e),u=Math.min(c*e,300);return o-i*((t+r*a*n)*Math.sinh(u)+c*n*Math.cosh(u))/c}}}return A(),{next:function(t){var n=M(t);if(j)x.done=t>=g;else{var e=1e3*S(t),r=Math.abs(e)<=b,a=Math.abs(o-n)<=y;x.done=r&&a}return x.value=x.done?o:n,x},flipTarget:function(){var t;i=-i,e=(t=[o,e])[0],o=t[1],A()}}}s.needsInterpolation=function(t,n){return"string"===typeof t||"string"===typeof n};var d=function(t){return 0},l=function(t,n,e){var r=n-t;return 0===r?1:(e-t)/r},p=function(t,n,e){return-e*t+e*n+t},v=function(t,n,e){var r=t*t,o=n*n;return Math.sqrt(Math.max(0,e*(o-r)+r))},h=[a.e,a.k,a.f],m=function(t){return h.find((function(n){return n.test(t)}))},b=function(t){return"'"+t+"' is not an animatable color. Use the equivalent color code instead."},y=function(t,n){var e=m(t),i=m(n);Object(o.a)(!!e,b(t)),Object(o.a)(!!i,b(n)),Object(o.a)(e.transform===i.transform,"Both colors must be hex/RGBA, OR both must be HSLA.");var u=e.parse(t),c=i.parse(n),f=Object(r.a)({},u),s=e===a.f?p:v;return function(t){for(var n in f)"alpha"!==n&&(f[n]=s(u[n],c[n],t));return f.alpha=p(u.alpha,c.alpha,t),e.transform(f)}},g=function(t){return"number"===typeof t},O=function(t,n){return function(e){return n(t(e))}},j=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return t.reduce(O)};function x(t,n){return g(t)?function(e){return p(t,n,e)}:a.b.test(t)?y(t,n):A(t,n)}var w=function(t,n){var e=Object(r.f)(t),o=e.length,a=t.map((function(t,e){return x(t,n[e])}));return function(t){for(var n=0;n<o;n++)e[n]=a[n](t);return e}},M=function(t,n){var e=Object(r.a)(Object(r.a)({},t),n),o={};for(var a in e)void 0!==t[a]&&void 0!==n[a]&&(o[a]=x(t[a],n[a]));return function(t){for(var n in o)e[n]=o[n](t);return e}};function S(t){for(var n=a.c.parse(t),e=n.length,r=0,o=0,i=0,u=0;u<e;u++)r||"number"===typeof n[u]?r++:void 0!==n[u].hue?i++:o++;return{parsed:n,numNumbers:r,numRGB:o,numHSL:i}}var A=function(t,n){var e=a.c.createTransformer(n),r=S(t),i=S(n);return Object(o.a)(r.numHSL===i.numHSL&&r.numRGB===i.numRGB&&r.numNumbers>=i.numNumbers,"Complex values '"+t+"' and '"+n+"' too different to mix. Ensure all colors are of the same type."),j(w(r.parsed,i.parsed),e)},I=function(t,n){return function(e){return p(t,n,e)}};function q(t,n,e){for(var r,o=[],i=e||("number"===typeof(r=t[0])?I:"string"===typeof r?a.b.test(r)?y:A:Array.isArray(r)?w:"object"===typeof r?M:void 0),u=t.length-1,c=0;c<u;c++){var f=i(t[c],t[c+1]);if(n){var s=Array.isArray(n)?n[c]:n;f=j(s,f)}o.push(f)}return o}function P(t,n,e){var r=void 0===e?{}:e,a=r.clamp,i=void 0===a||a,c=r.ease,f=r.mixer,s=t.length;Object(o.a)(s===n.length,"Both input and output ranges must be the same length"),Object(o.a)(!c||!Array.isArray(c)||c.length===s-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),t[0]>t[s-1]&&(t=[].concat(t),n=[].concat(n),t.reverse(),n.reverse());var d=q(n,c,f),p=2===s?function(t,n){var e=t[0],r=t[1],o=n[0];return function(t){return o(l(e,r,t))}}(t,d):function(t,n){var e=t.length,r=e-1;return function(o){var a=0,i=!1;if(o<=t[0]?i=!0:o>=t[r]&&(a=r-1,i=!0),!i){for(var u=1;u<e&&!(t[u]>o||u===r);u++);a=u-1}var c=l(t[a],t[a+1],o);return n[a](c)}}(t,d);return i?function(n){return p(u(t[0],t[s-1],n))}:p}var k=function(t){return function(n){return 1-t(1-n)}},C=function(t){return function(n){return n<=.5?t(2*n)/2:(2-t(2*(1-n)))/2}},R=function(t){return function(n){return n*n*((t+1)*n-t)}},T=function(t){var n=R(t);return function(t){return(t*=2)<1?.5*n(t):.5*(2-Math.pow(2,-10*(t-1)))}},D=function(t){return t},E=function(t){return function(n){return Math.pow(n,t)}}(2),N=k(E),_=C(E),U=function(t){return 1-Math.sin(Math.acos(t))},B=k(U),F=C(B),z=R(1.525),G=k(z),J=C(z),L=T(1.525),$=function(t){if(1===t||0===t)return t;var n=t*t;return t<.36363636363636365?7.5625*n:t<.7272727272727273?9.075*n-9.9*t+3.4:t<.9?12.066481994459833*n-19.63545706371191*t+8.898060941828255:10.8*t*t-20.52*t+10.72},H=k($),W=function(t){return t<.5?.5*(1-$(1-2*t)):.5*$(2*t-1)+.5};function X(t,n){return t.map((function(){return n||_})).splice(0,t.length-1)}function K(t){var n=t.from,e=void 0===n?0:n,r=t.to,o=void 0===r?1:r,a=t.ease,i=t.offset,u=t.duration,c=void 0===u?300:u,f={done:!1,value:e},s=Array.isArray(o)?o:[e,o],d=function(t,n){return t.map((function(t){return t*n}))}(null!==i&&void 0!==i?i:function(t){var n=t.length;return t.map((function(t,e){return 0!==e?e/(n-1):0}))}(s),c);function l(){return P(d,s,{ease:Array.isArray(a)?a:X(s,a)})}var p=l();return{next:function(t){return f.value=p(t),f.done=t>=c,f},flipTarget:function(){s.reverse(),p=l()}}}var Q={keyframes:K,spring:s,decay:function(t){var n=t.velocity,e=void 0===n?0:n,r=t.from,o=void 0===r?0:r,a=t.power,i=void 0===a?.8:a,u=t.timeConstant,c=void 0===u?350:u,f=t.restDelta,s=void 0===f?.5:f,d=t.modifyTarget,l={done:!1,value:o},p=i*e,v=o+p,h=void 0===d?v:d(v);return h!==v&&(p=h-o),{next:function(t){var n=-p*Math.exp(-t/c);return l.done=!(n>s||n<-s),l.value=l.done?h:h+n,l},flipTarget:function(){}}}};function Y(t,n,e){return void 0===e&&(e=0),t-n-e}var Z=function(t){var n=function(n){var e=n.delta;return t(e)};return{start:function(){return i.b.update(n,!0,!0)},stop:function(){return i.a.update(n)}}};function V(t){var n,e,o,a,i,u=t.from,c=t.autoplay,f=void 0===c||c,d=t.driver,l=void 0===d?Z:d,p=t.elapsed,v=void 0===p?0:p,h=t.repeat,m=void 0===h?0:h,b=t.repeatType,y=void 0===b?"loop":b,g=t.repeatDelay,O=void 0===g?0:g,j=t.onPlay,x=t.onStop,w=t.onComplete,M=t.onRepeat,S=t.onUpdate,A=Object(r.d)(t,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]),I=A.to,q=0,k=A.duration,C=!1,R=!0,T=function(t){if(Array.isArray(t.to))return K;if(Q[t.type])return Q[t.type];var n=new Set(Object.keys(t));return n.has("ease")||n.has("duration")&&!n.has("dampingRatio")?K:n.has("dampingRatio")||n.has("stiffness")||n.has("mass")||n.has("damping")||n.has("restSpeed")||n.has("restDelta")?s:K}(A);(null===(e=(n=T).needsInterpolation)||void 0===e?void 0:e.call(n,u,I))&&(i=P([0,100],[u,I],{clamp:!1}),u=0,I=100);var D=T(Object(r.a)(Object(r.a)({},A),{from:u,to:I}));function E(){q++,"reverse"===y?v=function(t,n,e,r){return void 0===e&&(e=0),void 0===r&&(r=!0),r?Y(n+-t,n,e):n-(t-n)+e}(v,k,O,R=q%2===0):(v=Y(v,k,O),"mirror"===y&&D.flipTarget()),C=!1,M&&M()}function N(t){if(R||(t=-t),v+=t,!C){var n=D.next(Math.max(0,v));a=n.value,i&&(a=i(a)),C=R?n.done:v<=0}null===S||void 0===S||S(a),C&&(0===q&&(null!==k&&void 0!==k||(k=v)),q<m?function(t,n,e,r){return r?t>=n+e:t<=-e}(v,k,O,R)&&E():(o.stop(),w&&w()))}return f&&(null===j||void 0===j||j(),(o=l(N)).start()),{stop:function(){null===x||void 0===x||x(),o.stop()}}}function tt(t,n){return n?t*(1e3/n):0}function nt(t){var n,e=t.from,o=void 0===e?0:e,a=t.velocity,u=void 0===a?0:a,c=t.min,f=t.max,s=t.power,d=void 0===s?.8:s,l=t.timeConstant,p=void 0===l?750:l,v=t.bounceStiffness,h=void 0===v?500:v,m=t.bounceDamping,b=void 0===m?10:m,y=t.restDelta,g=void 0===y?1:y,O=t.modifyTarget,j=t.driver,x=t.onUpdate,w=t.onComplete;function M(t){return void 0!==c&&t<c||void 0!==f&&t>f}function S(t){return void 0===c?f:void 0===f||Math.abs(c-t)<Math.abs(f-t)?c:f}function A(t){null===n||void 0===n||n.stop(),n=V(Object(r.a)(Object(r.a)({},t),{driver:j,onUpdate:function(n){var e;null===x||void 0===x||x(n),null===(e=t.onUpdate)||void 0===e||e.call(t,n)},onComplete:w}))}function I(t){A(Object(r.a)({type:"spring",stiffness:h,damping:b,restDelta:g},t))}if(M(o))I({from:o,velocity:u,to:S(o)});else{var q=d*u+o;"undefined"!==typeof O&&(q=O(q));var P,k,C=S(q),R=C===c?-1:1;A({type:"decay",from:o,velocity:u,timeConstant:p,power:d,restDelta:g,modifyTarget:O,onUpdate:M(q)?function(t){P=k,k=t,u=tt(t-P,Object(i.c)().delta),(1===R&&t>C||-1===R&&t<C)&&I({from:t,to:C,velocity:u})}:void 0})}return{stop:function(){return null===n||void 0===n?void 0:n.stop()}}}var et=function(t){return t},rt=function(t){return void 0===t&&(t=et),function(n,e,r){var o=e-r,a=-(0-n+1)*(0-t(Math.abs(o)));return o<=0?e+a:e-a}},ot=(Math.sqrt,function(t){return t.hasOwnProperty("x")&&t.hasOwnProperty("y")}),at=function(t){return ot(t)&&t.hasOwnProperty("z")},it=function(t,n){return Math.abs(t-n)};function ut(t,n){if(g(t)&&g(n))return it(t,n);if(ot(t)&&ot(n)){var e=it(t.x,n.x),r=it(t.y,n.y),o=at(t)&&at(n)?it(t.z,n.z):0;return Math.sqrt(Math.pow(e,2)+Math.pow(r,2)+Math.pow(o,2))}}var ct=function(t,n,e){var r=n-t;return((e-t)%r+r)%r+t},ft=function(t,n){return 1-3*n+3*t},st=function(t,n){return 3*n-6*t},dt=function(t){return 3*t},lt=function(t,n,e){return((ft(n,e)*t+st(n,e))*t+dt(n))*t},pt=function(t,n,e){return 3*ft(n,e)*t*t+2*st(n,e)*t+dt(n)};function vt(t,n,e,r){if(t===n&&e===r)return D;for(var o=new Float32Array(11),a=0;a<11;++a)o[a]=lt(.1*a,t,e);function i(n){for(var r=0,a=1;10!==a&&o[a]<=n;++a)r+=.1;--a;var i=r+.1*((n-o[a])/(o[a+1]-o[a])),u=pt(i,t,e);return u>=.001?function(t,n,e,r){for(var o=0;o<8;++o){var a=pt(n,e,r);if(0===a)return n;n-=(lt(n,e,r)-t)/a}return n}(n,i,t,e):0===u?i:function(t,n,e,r,o){var a,i,u=0;do{(a=lt(i=n+(e-n)/2,r,o)-t)>0?e=i:n=i}while(Math.abs(a)>1e-7&&++u<10);return i}(n,r,r+.1,t,e)}return function(t){return 0===t||1===t?t:lt(i(t),n,r)}}},eUsl:function(t,n,e){"use strict";e.d(n,"a",(function(){return h})),e.d(n,"c",(function(){return g}));var r=e("82gj"),o=0,a="undefined"!==typeof window&&void 0!==window.requestAnimationFrame?function(t){return window.requestAnimationFrame(t)}:function(t){var n=Date.now(),e=Math.max(0,16.7-(n-o));o=n+e,setTimeout((function(){return t(o)}),e)},i=1/60*1e3,u=!0,c=!1,f=!1,s={delta:0,timestamp:0},d=["read","update","preRender","render","postRender"],l=function(t){return c=t},p=d.reduce((function(t,n){return t[n]=function(t){var n=[],e=[],o=0,a=!1,i=0,u=new WeakSet,c=new WeakSet,f={cancel:function(t){var n=e.indexOf(t);u.add(t),-1!==n&&e.splice(n,1)},process:function(r){var s,d;if(a=!0,n=(s=[e,n])[0],(e=s[1]).length=0,o=n.length)for(i=0;i<o;i++)(d=n[i])(r),!0!==c.has(d)||u.has(d)||(f.schedule(d),t(!0));a=!1},schedule:function(t,i,f){void 0===i&&(i=!1),void 0===f&&(f=!1),Object(r.a)("function"===typeof t,"Argument must be a function");var s=f&&a,d=s?n:e;u.delete(t),i&&c.add(t),-1===d.indexOf(t)&&(d.push(t),s&&(o=n.length))}};return f}(l),t}),{}),v=d.reduce((function(t,n){var e=p[n];return t[n]=function(t,n,r){return void 0===n&&(n=!1),void 0===r&&(r=!1),c||y(),e.schedule(t,n,r),t},t}),{}),h=d.reduce((function(t,n){return t[n]=p[n].cancel,t}),{}),m=function(t){return p[t].process(s)},b=function(t){c=!1,s.delta=u?i:Math.max(Math.min(t-s.timestamp,40),1),u||(i=s.delta),s.timestamp=t,f=!0,d.forEach(m),f=!1,c&&(u=!1,a(b))},y=function(){c=!0,u=!0,f||a(b)},g=function(){return s};n.b=v},foSv:function(t,n,e){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}e.d(n,"a",(function(){return r}))},md7G:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var r=e("U8pU"),o=e("JX7q");function a(t,n){if(n&&("object"===Object(r.a)(n)||"function"===typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return Object(o.a)(t)}},mrSG:function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"a",(function(){return a})),e.d(n,"d",(function(){return i})),e.d(n,"g",(function(){return u})),e.d(n,"c",(function(){return c})),e.d(n,"e",(function(){return f})),e.d(n,"f",(function(){return s}));var r=function(t,n){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,n)};function o(t,n){function e(){this.constructor=t}r(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}var a=function(){return(a=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}).apply(this,arguments)};function i(t,n){var e={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(e[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(e[r[o]]=t[r[o]])}return e}function u(t){var n="function"===typeof Symbol&&Symbol.iterator,e=n&&t[n],r=0;if(e)return e.call(t);if(t&&"number"===typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function c(t,n){var e="function"===typeof Symbol&&t[Symbol.iterator];if(!e)return t;var r,o,a=e.call(t),i=[];try{for(;(void 0===n||n-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(u){o={error:u}}finally{try{r&&!r.done&&(e=a.return)&&e.call(a)}finally{if(o)throw o.error}}return i}function f(){for(var t=[],n=0;n<arguments.length;n++)t=t.concat(c(arguments[n]));return t}function s(){for(var t=0,n=0,e=arguments.length;n<e;n++)t+=arguments[n].length;var r=Array(t),o=0;for(n=0;n<e;n++)for(var a=arguments[n],i=0,u=a.length;i<u;i++,o++)r[o]=a[i];return r}},vuIU:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var r=e("o46R");function o(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,Object(r.a)(o.key),o)}}function a(t,n,e){return n&&o(t.prototype,n),e&&o(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}}}]);