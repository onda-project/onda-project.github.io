(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{"60Bi":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=i(n("FdF9")),r=i(n("Si88"));function i(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isOpen:!1},n.closeModal=n.closeModal.bind(n),n.updateFocus=n.updateFocus.bind(n),n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"openModal",value:function(){this.setState({isOpen:!0})}},{key:"closeModal",value:function(){this.setState({isOpen:!1}),"function"===typeof this.props.onClose&&this.props.onClose()}},{key:"keydownHandler",value:function(e){27===e.keyCode&&this.closeModal()}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.keydownHandler.bind(this))}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.keydownHandler.bind(this))}},{key:"componentDidUpdate",value:function(){this.state.isOpen&&this.modal&&this.modal.focus()}},{key:"updateFocus",value:function(e){9===e.keyCode&&(e.preventDefault(),e.stopPropagation(),this.modal===document.activeElement?this.modalbtn.focus():this.modal.focus())}},{key:"getQueryString",value:function(e){var t="";for(var n in e)e.hasOwnProperty(n)&&null!==e[n]&&(t+=n+"="+e[n]+"&");return t.substr(0,t.length-1)}},{key:"getYoutubeUrl",value:function(e,t){return"//www.youtube.com/embed/"+t+"?"+this.getQueryString(e)}},{key:"getVimeoUrl",value:function(e,t){return"//player.vimeo.com/video/"+t+"?"+this.getQueryString(e)}},{key:"getYoukuUrl",value:function(e,t){return"//player.youku.com/embed/"+t+"?"+this.getQueryString(e)}},{key:"getVideoUrl",value:function(e,t){return"youtube"===e.channel?this.getYoutubeUrl(e.youtube,t):"vimeo"===e.channel?this.getVimeoUrl(e.vimeo,t):"youku"===e.channel?this.getYoukuUrl(e.youku,t):"custom"===e.channel?e.url:void 0}},{key:"getPadding",value:function(e){var t=e.split(":"),n=Number(t[0]);return 100*Number(t[1])/n+"%"}},{key:"render",value:function(){var e=this,t={paddingBottom:this.getPadding(this.props.ratio)};return a.default.createElement(r.default,{classNames:this.props.classNames.modalVideoEffect,timeout:this.props.animationSpeed},(function(){return e.state.isOpen?a.default.createElement("div",{className:e.props.classNames.modalVideo,tabIndex:"-1",role:"dialog","aria-label":e.props.aria.openMessage,onClick:e.closeModal,ref:function(t){e.modal=t},onKeyDown:e.updateFocus},a.default.createElement("div",{className:e.props.classNames.modalVideoBody},a.default.createElement("div",{className:e.props.classNames.modalVideoInner},a.default.createElement("div",{className:e.props.classNames.modalVideoIframeWrap,style:t},a.default.createElement("button",{className:e.props.classNames.modalVideoCloseBtn,"aria-label":e.props.aria.dismissBtnMessage,ref:function(t){e.modalbtn=t},onKeyDown:e.updateFocus}),e.props.children||a.default.createElement("iframe",{width:"460",height:"230",src:e.getVideoUrl(e.props,e.props.videoId),frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:e.props.allowFullScreen,tabIndex:"-1"}))))):null}))}}],[{key:"getDerivedStateFromProps",value:function(e){return{isOpen:e.isOpen}}}]),t}(a.default.Component);t.default=s,s.defaultProps={channel:"youtube",isOpen:!1,youtube:{autoplay:1,cc_load_policy:1,color:null,controls:1,disablekb:0,enablejsapi:0,end:null,fs:1,h1:null,iv_load_policy:1,list:null,listType:null,loop:0,modestbranding:null,origin:null,playlist:null,playsinline:null,rel:0,showinfo:1,start:0,wmode:"transparent",theme:"dark",mute:0},ratio:"16:9",vimeo:{api:!1,autopause:!0,autoplay:!0,byline:!0,callback:null,color:null,height:null,loop:!1,maxheight:null,maxwidth:null,player_id:null,portrait:!0,title:!0,width:null,xhtml:!1},youku:{autoplay:1,show_related:0},allowFullScreen:!0,animationSpeed:300,classNames:{modalVideoEffect:"modal-video-effect",modalVideo:"modal-video",modalVideoClose:"modal-video-close",modalVideoBody:"modal-video-body",modalVideoInner:"modal-video-inner",modalVideoIframeWrap:"modal-video-movie-wrap",modalVideoCloseBtn:"modal-video-close-btn"},aria:{openMessage:"You just openned the modal video",dismissBtnMessage:"Close the modal by clicking here"}}},Aw06:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var o=n("wx14"),a=n("Ff2n"),r=n("FdF9"),i=n("2A+t"),s=n("izhR"),l=(n("YFqc"),["path","label","children"]);r.default.createElement;function u(e){var t=e.path,n=e.label,r=e.children,u=Object(a.a)(e,l);return Object(i.c)(s.j,Object(o.a)({},u,{href:t}),r||n)}},S3Uj:function(e,t,n){"use strict";t.__esModule=!0,t.default=t.EXITING=t.ENTERED=t.ENTERING=t.EXITED=t.UNMOUNTED=void 0;var o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};o.get||o.set?Object.defineProperty(t,n,o):t[n]=e[n]}return t.default=e,t}(n("17x9")),a=s(n("FdF9")),r=s(n("FdF9")),i=n("VCL8");n("xfxO");function s(e){return e&&e.__esModule?e:{default:e}}t.UNMOUNTED="unmounted";t.EXITED="exited";t.ENTERING="entering";t.ENTERED="entered";t.EXITING="exiting";var l=function(e){var t,n;function o(t,n){var o;o=e.call(this,t,n)||this;var a,r=n.transitionGroup,i=r&&!r.isMounting?t.enter:t.appear;return o.appearStatus=null,t.in?i?(a="exited",o.appearStatus="entering"):a="entered":a=t.unmountOnExit||t.mountOnEnter?"unmounted":"exited",o.state={status:a},o.nextCallback=null,o}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=o.prototype;return i.getChildContext=function(){return{transitionGroup:null}},o.getDerivedStateFromProps=function(e,t){return e.in&&"unmounted"===t.status?{status:"exited"}:null},i.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},i.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?"entering"!==n&&"entered"!==n&&(t="entering"):"entering"!==n&&"entered"!==n||(t="exiting")}this.updateStatus(!1,t)},i.componentWillUnmount=function(){this.cancelNextCallback()},i.getTimeouts=function(){var e,t,n,o=this.props.timeout;return e=t=n=o,null!=o&&"number"!==typeof o&&(e=o.exit,t=o.enter,n=void 0!==o.appear?o.appear:t),{exit:e,enter:t,appear:n}},i.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){this.cancelNextCallback();var n=r.default.findDOMNode(this);"entering"===t?this.performEnter(n,e):this.performExit(n)}else this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},i.performEnter=function(e,t){var n=this,o=this.props.enter,a=this.context.transitionGroup?this.context.transitionGroup.isMounting:t,r=this.getTimeouts(),i=a?r.appear:r.enter;t||o?(this.props.onEnter(e,a),this.safeSetState({status:"entering"},(function(){n.props.onEntering(e,a),n.onTransitionEnd(e,i,(function(){n.safeSetState({status:"entered"},(function(){n.props.onEntered(e,a)}))}))}))):this.safeSetState({status:"entered"},(function(){n.props.onEntered(e)}))},i.performExit=function(e){var t=this,n=this.props.exit,o=this.getTimeouts();n?(this.props.onExit(e),this.safeSetState({status:"exiting"},(function(){t.props.onExiting(e),t.onTransitionEnd(e,o.exit,(function(){t.safeSetState({status:"exited"},(function(){t.props.onExited(e)}))}))}))):this.safeSetState({status:"exited"},(function(){t.props.onExited(e)}))},i.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},i.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},i.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(o){n&&(n=!1,t.nextCallback=null,e(o))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},i.onTransitionEnd=function(e,t,n){this.setNextCallback(n);var o=null==t&&!this.props.addEndListener;e&&!o?(this.props.addEndListener&&this.props.addEndListener(e,this.nextCallback),null!=t&&setTimeout(this.nextCallback,t)):setTimeout(this.nextCallback,0)},i.render=function(){var e=this.state.status;if("unmounted"===e)return null;var t=this.props,n=t.children,o=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(t,["children"]);if(delete o.in,delete o.mountOnEnter,delete o.unmountOnExit,delete o.appear,delete o.enter,delete o.exit,delete o.timeout,delete o.addEndListener,delete o.onEnter,delete o.onEntering,delete o.onEntered,delete o.onExit,delete o.onExiting,delete o.onExited,"function"===typeof n)return n(e,o);var r=a.default.Children.only(n);return a.default.cloneElement(r,o)},o}(a.default.Component);function u(){}l.contextTypes={transitionGroup:o.object},l.childContextTypes={transitionGroup:function(){}},l.propTypes={},l.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:u,onEntering:u,onEntered:u,onExit:u,onExiting:u,onExited:u},l.UNMOUNTED=0,l.EXITED=1,l.ENTERING=2,l.ENTERED=3,l.EXITING=4;var c=(0,i.polyfill)(l);t.default=c},SGt8:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var o=n("2A+t"),a=n("izhR"),r=n("FdF9"),i=n("60Bi"),s=n.n(i),l=n("Aw06"),u=n("ma3e"),c=(r.default.createElement,[{id:1,path:"https://www.uergs.edu.br",image:"/_next/static/media/uergs.a6844651082346346175e0784737add8.png",title:"uergs"},{id:2,path:"https://www.rs.gov.br",image:"/_next/static/media/govrs.7e296b37cb90d8c14ad253c33137f150.png",title:"govrs"},{id:3,path:"https://www.cnpq.br",image:"/_next/static/media/cnpq.923957429ee1e372e24ff550bd122938.png",title:"cnpq"}]);function p(){var e=Object(r.useState)(!1),t=e[0],n=e[1];return Object(o.c)("section",{id:"home",sx:d.banner},Object(o.c)(a.d,{sx:d.banner.container},Object(o.c)(a.a,{sx:d.banner.contentBox},Object(o.c)(a.g,{as:"h1",variant:"heroPrimary"},"Olimp\xedada Nacional de Aplicativos"),Object(o.c)(a.l,{as:"p",variant:"heroSecondary"},"A Olimp\xedada Nacional de Aplicativos (ONDA) desafia o estudante a desenvolver tecnologias capazes de amenizar os problemas sociais e ambientais que permeiam a sociedade moderna."),Object(o.c)(a.e,null,Object(o.c)(a.b,{variant:"whiteButton","aria-label":"Edital"},"Edital"),Object(o.c)(r.default.Fragment,null,Object(o.c)(s.a,{channel:"youtube",isOpen:t,videoId:"HjqLcpVC39U",onClose:function(){return n(!1)}}),Object(o.c)(a.b,{variant:"textButton","aria-label":"Assistir demo",onClick:function(e){e.preventDefault(),n(!0)}},Object(o.c)(u.d,null)," Assistir demo"))),Object(o.c)(a.e,{sx:d.sponsorBox},Object(o.c)(a.l,{sx:d.sponsorTitle},"Apoio:"),Object(o.c)(a.a,{sx:d.sponsorBox.sponsor},c.map((function(e,t){return Object(o.c)(l.a,{key:"client-key".concat(t),rel:"noopener noreferrer",path:e.path,target:"_blank"},Object(o.c)(a.i,{src:e.image,alt:e.title,width:"100",height:"28"}))}))))),Object(o.c)(a.a,{sx:d.banner.imageBox},Object(o.c)(a.i,{src:"/_next/static/media/banner-thumb.72e48c1640c22543208d40edf19530e7.png",alt:"banner",width:"1126",height:"796"}))))}var d={banner:{overflow:["hidden","initial",null,"hidden"],backgroundImage:"url(".concat("/_next/static/media/bannerBg.9f7778a187048f0fd6969be89cf4a7f7.png",")"),backgroundRepeat:"no-repeat",backgroundPosition:"top left",backgroundSize:"cover",borderBottomRightRadius:[100,150,null,null,null,250],pt:["150px",null,null,null,null,null,"140px","130px"],pb:["100px",null,null,"110px",null,10,"150px"],backgroundColor:"primary",container:{display:"flex"},contentBox:{width:["100%",null,"85%","55%","50%","55%"],display:"flex",flexDirection:"column",alignItems:"flex-start",flexShrink:0,pt:[0,null,null,null,null,null,5,7]},imageBox:{display:["none",null,null,"block"],justifyContent:"center",ml:[0,null,null,"-110px","-115px","-150px","-210px","-270px"],mr:[0,null,null,"-145px","-160px","-180px","-220px","-290px"],mt:[0,null,null,"40px",4,7,0],mb:[0,null,null,null,"-45px","-70px",null,"-115px"],overflow:"hidden",textAlign:"right",width:"100%"}},sponsorTitle:{color:"white",fontSize:[1,2],opacity:.6,pr:20,flexShrink:0,pb:[2,null,0]},sponsorBox:{pt:["35px",null,null,null,null,"45px"],flexDirection:["column",null,"row"],alignItems:"center",sponsor:{display:"flex",alignItems:"center","> a":{mr:[5,null,null,4,6],display:"flex","&:last-of-type":{mr:0}}}}}},Si88:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;!function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};o.get||o.set?Object.defineProperty(t,n,o):t[n]=e[n]}t.default=e}(n("17x9"));var o=s(n("ycFn")),a=s(n("VOcB")),r=s(n("FdF9")),i=s(n("S3Uj"));n("xfxO");function s(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var u=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return(0,o.default)(e,t)}))},c=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return(0,a.default)(e,t)}))},p=function(e){var t,n;function o(){for(var t,n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))||this).onEnter=function(e,n){var o=t.getClassNames(n?"appear":"enter").className;t.removeClasses(e,"exit"),u(e,o),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var o=t.getClassNames(n?"appear":"enter").activeClassName;t.reflowAndAddClass(e,o),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var o=t.getClassNames("appear").doneClassName,a=t.getClassNames("enter").doneClassName,r=n?o+" "+a:a;t.removeClasses(e,n?"appear":"enter"),u(e,r),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){var n=t.getClassNames("exit").className;t.removeClasses(e,"appear"),t.removeClasses(e,"enter"),u(e,n),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var n=t.getClassNames("exit").activeClassName;t.reflowAndAddClass(e,n),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var n=t.getClassNames("exit").doneClassName;t.removeClasses(e,"exit"),u(e,n),t.props.onExited&&t.props.onExited(e)},t.getClassNames=function(e){var n=t.props.classNames,o="string"===typeof n,a=o?(o&&n?n+"-":"")+e:n[e];return{className:a,activeClassName:o?a+"-active":n[e+"Active"],doneClassName:o?a+"-done":n[e+"Done"]}},t}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a=o.prototype;return a.removeClasses=function(e,t){var n=this.getClassNames(t),o=n.className,a=n.activeClassName,r=n.doneClassName;o&&c(e,o),a&&c(e,a),r&&c(e,r)},a.reflowAndAddClass=function(e,t){t&&(e&&e.scrollTop,u(e,t))},a.render=function(){var e=l({},this.props);return delete e.classNames,r.default.createElement(i.default,l({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},o}(r.default.Component);p.defaultProps={classNames:""},p.propTypes={};var d=p;t.default=d,e.exports=t.default},TqRt:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},VCL8:function(e,t,n){"use strict";function o(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function a(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!==n&&void 0!==n?n:null}.bind(this))}function r(e,t){try{var n=this.props,o=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,o)}finally{this.props=n,this.state=o}}function i(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!==typeof e.getDerivedStateFromProps&&"function"!==typeof t.getSnapshotBeforeUpdate)return e;var n=null,i=null,s=null;if("function"===typeof t.componentWillMount?n="componentWillMount":"function"===typeof t.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"===typeof t.componentWillReceiveProps?i="componentWillReceiveProps":"function"===typeof t.UNSAFE_componentWillReceiveProps&&(i="UNSAFE_componentWillReceiveProps"),"function"===typeof t.componentWillUpdate?s="componentWillUpdate":"function"===typeof t.UNSAFE_componentWillUpdate&&(s="UNSAFE_componentWillUpdate"),null!==n||null!==i||null!==s){var l=e.displayName||e.name,u="function"===typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+l+" uses "+u+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==i?"\n  "+i:"")+(null!==s?"\n  "+s:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"===typeof e.getDerivedStateFromProps&&(t.componentWillMount=o,t.componentWillReceiveProps=a),"function"===typeof t.getSnapshotBeforeUpdate){if("function"!==typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=r;var c=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var o=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;c.call(this,e,t,o)}}return e}n.r(t),n.d(t,"polyfill",(function(){return i})),o.__suppressDeprecationWarning=!0,a.__suppressDeprecationWarning=!0,r.__suppressDeprecationWarning=!0},VOcB:function(e,t,n){"use strict";function o(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}e.exports=function(e,t){e.classList?e.classList.remove(t):"string"===typeof e.className?e.className=o(e.className,t):e.setAttribute("class",o(e.className&&e.className.baseVal||"",t))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var o=n("zoAU"),a=n("7KCV");t.__esModule=!0,t.default=void 0;var r,i=a(n("FdF9")),s=n("elyg"),l=n("nOHt"),u=new Map,c=window.IntersectionObserver,p={};var d=function(e,t){var n=r||(c?r=new c((function(e){e.forEach((function(e){if(u.has(e.target)){var t=u.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),u.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),u.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}u.delete(e)}):function(){}};function f(e,t,n,o){(0,s.isLocalURL)(t)&&(e.prefetch(t,n,o).catch((function(e){0})),p[t+"%"+n]=!0)}var m=function(e){var t=!1!==e.prefetch,n=i.default.useState(),a=o(n,2),r=a[0],u=a[1],m=(0,l.useRouter)(),h=m&&m.pathname||"/",v=i.default.useMemo((function(){var t=(0,s.resolveHref)(h,e.href);return{href:t,as:e.as?(0,s.resolveHref)(h,e.as):t}}),[h,e.href,e.as]),y=v.href,g=v.as;i.default.useEffect((function(){if(t&&c&&r&&r.tagName&&(0,s.isLocalURL)(y)&&!p[y+"%"+g])return d(r,(function(){f(m,y,g)}))}),[t,r,y,g,m]);var b=e.children,x=e.replace,E=e.shallow,N=e.scroll;"string"===typeof b&&(b=i.default.createElement("a",null,b));var O=i.Children.only(b),w={ref:function(e){e&&u(e),O&&"object"===typeof O&&O.ref&&("function"===typeof O.ref?O.ref(e):"object"===typeof O.ref&&(O.ref.current=e))},onClick:function(e){O.props&&"function"===typeof O.props.onClick&&O.props.onClick(e),e.defaultPrevented||function(e,t,n,o,a,r,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=o.indexOf("#")<0),t[a?"replace":"push"](n,o,{shallow:r}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,m,y,g,x,E,N)}};return t&&(w.onMouseEnter=function(e){(0,s.isLocalURL)(y)&&(O.props&&"function"===typeof O.props.onMouseEnter&&O.props.onMouseEnter(e),f(m,y,g,{priority:!0}))}),(e.passHref||"a"===O.type&&!("href"in O.props))&&(w.href=(0,s.addBasePath)(g)),i.default.cloneElement(O,w)};t.default=m},xfxO:function(e,t,n){"use strict";t.__esModule=!0,t.classNamesShape=t.timeoutsShape=void 0;var o;(o=n("17x9"))&&o.__esModule;t.timeoutsShape=null;t.classNamesShape=null},yD6e:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")},e.exports=t.default},ycFn:function(e,t,n){"use strict";var o=n("TqRt");t.__esModule=!0,t.default=function(e,t){e.classList?e.classList.add(t):(0,a.default)(e,t)||("string"===typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))};var a=o(n("yD6e"));e.exports=t.default}}]);