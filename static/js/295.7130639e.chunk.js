"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[295],{2134:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(2791);var o=function(e){var t=(0,r.useRef)(e);return(0,r.useEffect)((function(){t.current=e}),[e]),t};function i(e){var t=o(e);return(0,r.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},3201:function(e,t,n){var r=n(2791),o=function(e){return e&&"function"!==typeof e?function(t){e.current=t}:e};t.Z=function(e,t){return(0,r.useMemo)((function(){return function(e,t){var n=o(e),r=o(t);return function(e){n&&n(e),r&&r(e)}}(e,t)}),[e,t])}},1306:function(e,t,n){n.d(t,{$F:function(){return o},PB:function(){return r}});function r(e){return"".concat("data-rr-ui-").concat(e)}function o(e){return"".concat("rrUi").concat(e)}},3808:function(e,t,n){n.d(t,{Z:function(){return o}});var r=Function.prototype.bind.call(Function.prototype.call,[].slice);function o(e,t){return r(e.querySelectorAll(t))}},2176:function(e){e.exports=function(e,t,n,r,o,i,a,s){if(!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,o,i,a,s],l=0;(c=new Error(t.replace(/%s/g,(function(){return u[l++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}},23:function(e,t,n){n.d(t,{Z:function(){return H}});var r=n(1413),o=n(5987),i=n(1694),a=n.n(i),s=n(2791),c=(n(2391),n(7462)),u=n(3366);n(2176);function l(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function f(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}function d(e,t){return Object.keys(t).reduce((function(n,r){var o,i=n,a=i[l(r)],d=i[r],v=(0,u.Z)(i,[l(r),r].map(f)),p=t[r],h=function(e,t,n){var r=(0,s.useRef)(void 0!==e),o=(0,s.useState)(t),i=o[0],a=o[1],c=void 0!==e,u=r.current;return r.current=c,!c&&u&&i!==t&&a(t),[c?e:i,(0,s.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];n&&n.apply(void 0,[e].concat(r)),a(e)}),[n])]}(d,a,e[p]),m=h[0],y=h[1];return(0,c.Z)({},v,((o={})[r]=m,o[p]=y,o))}),e)}function v(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function p(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!==n&&void 0!==n?n:null}.bind(this))}function h(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}v.__suppressDeprecationWarning=!0,p.__suppressDeprecationWarning=!0,h.__suppressDeprecationWarning=!0;var m=n(3808);var y=n(3201),b=s.createContext(null);b.displayName="NavContext";var g=b,E=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return null!=e?String(e):t||null},x=s.createContext(null),w=s.createContext(null),k=n(1306),C=n(885),Z=n(2134),N=n(5341),O=n(184),S=["as","active","eventKey"];function R(e){var t=e.key,n=e.onClick,r=e.active,o=e.id,i=e.role,a=e.disabled,c=(0,s.useContext)(x),u=(0,s.useContext)(g),l=(0,s.useContext)(w),f=r,d={role:i};if(u){i||"tablist"!==u.role||(d.role="tab");var v=u.getControllerId(null!=t?t:null),p=u.getControlledId(null!=t?t:null);d[(0,k.PB)("event-key")]=t,d.id=v||o,!(f=null==r&&null!=t?u.activeKey===t:r)&&(null!=l&&l.unmountOnExit||null!=l&&l.mountOnEnter)||(d["aria-controls"]=p)}return"tab"===d.role&&(a&&(d.tabIndex=-1,d["aria-disabled"]=!0),f?d["aria-selected"]=f:d.tabIndex=-1),d.onClick=(0,Z.Z)((function(e){a||(null==n||n(e),null!=t&&c&&!e.isPropagationStopped()&&c(t,e))})),[d,{isActive:f}]}var j=s.forwardRef((function(e,t){var n=e.as,r=void 0===n?N.ZP:n,o=e.active,i=e.eventKey,a=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,S),s=R(Object.assign({key:E(i,a.href),active:o},a)),c=(0,C.Z)(s,2),u=c[0],l=c[1];return u[(0,k.PB)("active")]=l.isActive,(0,O.jsx)(r,Object.assign({},a,u,{ref:t}))}));j.displayName="NavItem";var P=j,T=["as","onSelect","activeKey","role","onKeyDown"];var D=function(){},L=(0,k.PB)("event-key"),F=s.forwardRef((function(e,t){var n,r,o=e.as,i=void 0===o?"div":o,a=e.onSelect,c=e.activeKey,u=e.role,l=e.onKeyDown,f=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,T),d=(0,s.useReducer)((function(e){return!e}),!1)[1],v=(0,s.useRef)(!1),p=(0,s.useContext)(x),h=(0,s.useContext)(w);h&&(u=u||"tablist",c=h.activeKey,n=h.getControlledId,r=h.getControllerId);var b=(0,s.useRef)(null),C=function(e){var t=b.current;if(!t)return null;var n=(0,m.Z)(t,"[".concat(L,"]:not([aria-disabled=true])")),r=t.querySelector("[aria-selected=true]");if(!r||r!==document.activeElement)return null;var o=n.indexOf(r);if(-1===o)return null;var i=o+e;return i>=n.length&&(i=0),i<0&&(i=n.length-1),n[i]},Z=function(e,t){null!=e&&(null==a||a(e,t),null==p||p(e,t))};(0,s.useEffect)((function(){if(b.current&&v.current){var e=b.current.querySelector("[".concat(L,"][aria-selected=true]"));null==e||e.focus()}v.current=!1}));var N=(0,y.Z)(t,b);return(0,O.jsx)(x.Provider,{value:Z,children:(0,O.jsx)(g.Provider,{value:{role:u,activeKey:E(c),getControlledId:n||D,getControllerId:r||D},children:(0,O.jsx)(i,Object.assign({},f,{onKeyDown:function(e){if(null==l||l(e),h){var t;switch(e.key){case"ArrowLeft":case"ArrowUp":t=C(-1);break;case"ArrowRight":case"ArrowDown":t=C(1);break;default:return}t&&(e.preventDefault(),Z(t.dataset[(0,k.$F)("EventKey")]||null,e),v.current=!0,d())}},ref:N,role:u}))})})}));F.displayName="Nav";var _=Object.assign(F,{Item:P}),A=n(162),I=["bsPrefix","active","disabled","eventKey","className","variant","action","as"],B=s.forwardRef((function(e,t){var n=e.bsPrefix,i=e.active,s=e.disabled,c=e.eventKey,u=e.className,l=e.variant,f=e.action,d=e.as,v=(0,o.Z)(e,I);n=(0,A.vE)(n,"list-group-item");var p=R((0,r.Z)({key:E(c,v.href),active:i},v)),h=(0,C.Z)(p,2),m=h[0],y=h[1],b=(0,Z.Z)((function(e){if(s)return e.preventDefault(),void e.stopPropagation();m.onClick(e)}));s&&void 0===v.tabIndex&&(v.tabIndex=-1,v["aria-disabled"]=!0);var g=d||(f?v.href?"a":"button":"div");return(0,O.jsx)(g,(0,r.Z)((0,r.Z)((0,r.Z)({ref:t},v),m),{},{onClick:b,className:a()(u,n,y.isActive&&"active",s&&"disabled",l&&"".concat(n,"-").concat(l),f&&"".concat(n,"-action"))}))}));B.displayName="ListGroupItem";var M=B,K=["className","bsPrefix","variant","horizontal","numbered","as"],W=s.forwardRef((function(e,t){var n,i=d(e,{activeKey:"onSelect"}),s=i.className,c=i.bsPrefix,u=i.variant,l=i.horizontal,f=i.numbered,v=i.as,p=void 0===v?"div":v,h=(0,o.Z)(i,K),m=(0,A.vE)(c,"list-group");return l&&(n=!0===l?"horizontal":"horizontal-".concat(l)),(0,O.jsx)(_,(0,r.Z)((0,r.Z)({ref:t},h),{},{as:p,className:a()(s,m,u&&"".concat(m,"-").concat(u),n&&"".concat(m,"-").concat(n),f&&"".concat(m,"-numbered"))}))}));W.displayName="ListGroup";var H=Object.assign(W,{Item:M})},1759:function(e,t,n){n.d(t,{Z:function(){return ot}});var r=n(885),o=n(5987),i=n(1413),a=n(1694),s=n.n(a),c=!("undefined"===typeof window||!window.document||!window.document.createElement),u=!1,l=!1;try{var f={get passive(){return u=!0},get once(){return l=u=!0}};c&&(window.addEventListener("test",f,f),window.removeEventListener("test",f,!0))}catch(it){}var d=function(e,t,n,r){if(r&&"boolean"!==typeof r&&!l){var o=r.once,i=r.capture,a=n;!l&&o&&(a=n.__once||function e(r){this.removeEventListener(t,e,i),n.call(this,r)},n.__once=a),e.addEventListener(t,a,u?r:i)}e.addEventListener(t,n,r)};function v(e){return e&&e.ownerDocument||document}var p,h=function(e,t,n,r){var o=r&&"boolean"!==typeof r?r.capture:r;e.removeEventListener(t,n,o),n.__once&&e.removeEventListener(t,n.__once,o)};function m(e){if((!p&&0!==p||e)&&c){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),p=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return p}var y=n(2791);var b=n(2134),g=n(3201);function E(e){var t=function(e){var t=(0,y.useRef)(e);return t.current=e,t}(e);(0,y.useEffect)((function(){return function(){return t.current()}}),[])}function x(e,t){return function(e){var t=v(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var w=/([A-Z])/g;var k=/^ms-/;function C(e){return function(e){return e.replace(w,"-$1").toLowerCase()}(e).replace(k,"-ms-")}var Z=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var N=function(e,t){var n="",r="";if("string"===typeof t)return e.style.getPropertyValue(C(t))||x(e).getPropertyValue(C(t));Object.keys(t).forEach((function(o){var i=t[o];i||0===i?!function(e){return!(!e||!Z.test(e))}(o)?n+=C(o)+": "+i+";":r+=o+"("+i+") ":e.style.removeProperty(C(o))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n};var O=function(e,t,n,r){return d(e,t,n,r),function(){h(e,t,n,r)}};function S(e,t,n){void 0===n&&(n=5);var r=!1,o=setTimeout((function(){r||function(e,t,n,r){if(void 0===n&&(n=!1),void 0===r&&(r=!0),e){var o=document.createEvent("HTMLEvents");o.initEvent(t,n,r),e.dispatchEvent(o)}}(e,"transitionend",!0)}),t+n),i=O(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(o),i()}}function R(e,t,n,r){null==n&&(n=function(e){var t=N(e,"transitionDuration")||"",n=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*n}(e)||0);var o=S(e,n,r),i=O(e,"transitionend",t);return function(){o(),i()}}function j(e){void 0===e&&(e=v());try{var t=e.activeElement;return t&&t.nodeName?t:null}catch(it){return e.body}}function P(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}var T=n(4164);var D=n(2982),L=n(4942);function F(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(e,t,n){return t&&_(e.prototype,t),n&&_(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var I=(0,n(1306).PB)("modal-open"),B=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.ownerDocument,r=t.handleContainerOverflow,o=void 0===r||r,i=t.isRTL,a=void 0!==i&&i;F(this,e),this.handleContainerOverflow=o,this.isRTL=a,this.modals=[],this.ownerDocument=n}return A(e,[{key:"getScrollbarWidth",value:function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=e.defaultView;return Math.abs(t.innerWidth-e.documentElement.clientWidth)}(this.ownerDocument)}},{key:"getElement",value:function(){return(this.ownerDocument||document).body}},{key:"setModalAttributes",value:function(e){}},{key:"removeModalAttributes",value:function(e){}},{key:"setContainerStyle",value:function(e){var t={overflow:"hidden"},n=this.isRTL?"paddingLeft":"paddingRight",r=this.getElement();e.style=(0,L.Z)({overflow:r.style.overflow},n,r.style[n]),e.scrollBarWidth&&(t[n]="".concat(parseInt(N(r,n)||"0",10)+e.scrollBarWidth,"px")),r.setAttribute(I,""),N(r,t)}},{key:"reset",value:function(){var e=this;(0,D.Z)(this.modals).forEach((function(t){return e.remove(t)}))}},{key:"removeContainerStyle",value:function(e){var t=this.getElement();t.removeAttribute(I),Object.assign(t.style,e.style)}},{key:"add",value:function(e){var t=this.modals.indexOf(e);return-1!==t?t:(t=this.modals.length,this.modals.push(e),this.setModalAttributes(e),0!==t||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),t)}},{key:"remove",value:function(e){var t=this.modals.indexOf(e);-1!==t&&(this.modals.splice(t,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}},{key:"isTopModal",value:function(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}}]),e}(),M=B,K=(0,y.createContext)(c?window:void 0);K.Provider;function W(){return(0,y.useContext)(K)}var H=function(e,t){var n;return c?null==e?(t||v()).body:("function"===typeof e&&(e=e()),e&&"current"in e&&(e=e.current),null!=(n=e)&&n.nodeType&&e||null):null};var U,V=n(184),z=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function $(e){var t=W(),n=e||function(e){return U||(U=new M({ownerDocument:null==e?void 0:e.document})),U}(t),r=(0,y.useRef)({dialog:null,backdrop:null});return Object.assign(r.current,{add:function(){return n.add(r.current)},remove:function(){return n.remove(r.current)},isTopModal:function(){return n.isTopModal(r.current)},setDialogRef:(0,y.useCallback)((function(e){r.current.dialog=e}),[]),setBackdropRef:(0,y.useCallback)((function(e){r.current.backdrop=e}),[])})}var G=(0,y.forwardRef)((function(e,t){var n=e.show,o=void 0!==n&&n,i=e.role,a=void 0===i?"dialog":i,s=e.className,u=e.style,l=e.children,f=e.backdrop,d=void 0===f||f,v=e.keyboard,p=void 0===v||v,h=e.onBackdropClick,m=e.onEscapeKeyDown,g=e.transition,x=e.backdropTransition,w=e.autoFocus,k=void 0===w||w,C=e.enforceFocus,Z=void 0===C||C,N=e.restoreFocus,S=void 0===N||N,R=e.restoreFocusOptions,D=e.renderDialog,L=e.renderBackdrop,F=void 0===L?function(e){return(0,V.jsx)("div",Object.assign({},e))}:L,_=e.manager,A=e.container,I=e.onShow,B=e.onHide,M=void 0===B?function(){}:B,K=e.onExit,U=e.onExited,G=e.onExiting,X=e.onEnter,q=e.onEntering,Y=e.onEntered,J=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,z),Q=function(e,t){var n=W(),o=(0,y.useState)((function(){return H(e,null==n?void 0:n.document)})),i=(0,r.Z)(o,2),a=i[0],s=i[1];if(!a){var c=H(e);c&&s(c)}return(0,y.useEffect)((function(){t&&a&&t(a)}),[t,a]),(0,y.useEffect)((function(){var t=H(e);t!==a&&s(t)}),[e,a]),a}(A),ee=$(_),te=function(){var e=(0,y.useRef)(!0),t=(0,y.useRef)((function(){return e.current}));return(0,y.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),t.current}(),ne=function(e){var t=(0,y.useRef)(null);return(0,y.useEffect)((function(){t.current=e})),t.current}(o),re=(0,y.useState)(!o),oe=(0,r.Z)(re,2),ie=oe[0],ae=oe[1],se=(0,y.useRef)(null);(0,y.useImperativeHandle)(t,(function(){return ee}),[ee]),c&&!ne&&o&&(se.current=j()),g||o||ie?o&&ie&&ae(!1):ae(!0);var ce=(0,b.Z)((function(){if(ee.add(),pe.current=O(document,"keydown",de),ve.current=O(document,"focus",(function(){return setTimeout(le)}),!0),I&&I(),k){var e=j(document);ee.dialog&&e&&!P(ee.dialog,e)&&(se.current=e,ee.dialog.focus())}})),ue=(0,b.Z)((function(){var e;(ee.remove(),null==pe.current||pe.current(),null==ve.current||ve.current(),S)&&(null==(e=se.current)||null==e.focus||e.focus(R),se.current=null)}));(0,y.useEffect)((function(){o&&Q&&ce()}),[o,Q,ce]),(0,y.useEffect)((function(){ie&&ue()}),[ie,ue]),E((function(){ue()}));var le=(0,b.Z)((function(){if(Z&&te()&&ee.isTopModal()){var e=j();ee.dialog&&e&&!P(ee.dialog,e)&&ee.dialog.focus()}})),fe=(0,b.Z)((function(e){e.target===e.currentTarget&&(null==h||h(e),!0===d&&M())})),de=(0,b.Z)((function(e){p&&27===e.keyCode&&ee.isTopModal()&&(null==m||m(e),e.defaultPrevented||M())})),ve=(0,y.useRef)(),pe=(0,y.useRef)(),he=g;if(!Q||!(o||he&&!ie))return null;var me=Object.assign({role:a,ref:ee.setDialogRef,"aria-modal":"dialog"===a||void 0},J,{style:u,className:s,tabIndex:-1}),ye=D?D(me):(0,V.jsx)("div",Object.assign({},me,{children:y.cloneElement(l,{role:"document"})}));he&&(ye=(0,V.jsx)(he,{appear:!0,unmountOnExit:!0,in:!!o,onExit:K,onExiting:G,onExited:function(){ae(!0),null==U||U.apply(void 0,arguments)},onEnter:X,onEntering:q,onEntered:Y,children:ye}));var be=null;if(d){var ge=x;be=F({ref:ee.setBackdropRef,onClick:fe}),ge&&(be=(0,V.jsx)(ge,{appear:!0,in:!!o,children:be}))}return(0,V.jsx)(V.Fragment,{children:T.createPortal((0,V.jsxs)(V.Fragment,{children:[be,ye]}),Q)})}));G.displayName="Modal";var X=Object.assign(G,{Manager:M});function q(e){return q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},q(e)}function Y(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=q(e)););return e}function J(){return J="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=Y(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},J.apply(this,arguments)}function Q(e,t){return Q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},Q(e,t)}function ee(e){return ee="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ee(e)}function te(e,t){if(t&&("object"===ee(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function ne(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(it){return!1}}();return function(){var n,r=q(e);if(t){var o=q(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return te(this,n)}}var re=n(3808);function oe(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var ie,ae=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",se=".sticky-top",ce=".navbar-toggler",ue=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Q(e,t)}(n,e);var t=ne(n);function n(){return F(this,n),t.apply(this,arguments)}return A(n,[{key:"adjustAndStore",value:function(e,t,n){var r=t.style[e];t.dataset[e]=r,N(t,(0,L.Z)({},e,"".concat(parseFloat(N(t,e))+n,"px")))}},{key:"restore",value:function(e,t){var n=t.dataset[e];void 0!==n&&(delete t.dataset[e],N(t,(0,L.Z)({},e,n)))}},{key:"setContainerStyle",value:function(e){var t=this;J(q(n.prototype),"setContainerStyle",this).call(this,e);var r,o,i=this.getElement();if(o="modal-open",(r=i).classList?r.classList.add(o):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(r,o)||("string"===typeof r.className?r.className=r.className+" "+o:r.setAttribute("class",(r.className&&r.className.baseVal||"")+" "+o)),e.scrollBarWidth){var a=this.isRTL?"paddingLeft":"paddingRight",s=this.isRTL?"marginLeft":"marginRight";(0,re.Z)(i,ae).forEach((function(n){return t.adjustAndStore(a,n,e.scrollBarWidth)})),(0,re.Z)(i,se).forEach((function(n){return t.adjustAndStore(s,n,-e.scrollBarWidth)})),(0,re.Z)(i,ce).forEach((function(n){return t.adjustAndStore(s,n,e.scrollBarWidth)}))}}},{key:"removeContainerStyle",value:function(e){var t=this;J(q(n.prototype),"removeContainerStyle",this).call(this,e);var r,o,i=this.getElement();o="modal-open",(r=i).classList?r.classList.remove(o):"string"===typeof r.className?r.className=oe(r.className,o):r.setAttribute("class",oe(r.className&&r.className.baseVal||"",o));var a=this.isRTL?"paddingLeft":"paddingRight",s=this.isRTL?"marginLeft":"marginRight";(0,re.Z)(i,ae).forEach((function(e){return t.restore(a,e)})),(0,re.Z)(i,se).forEach((function(e){return t.restore(s,e)})),(0,re.Z)(i,ce).forEach((function(e){return t.restore(s,e)}))}}]),n}(M);var le=n(3366);var fe=!1,de=y.createContext(null),ve="unmounted",pe="exited",he="entering",me="entered",ye="exiting",be=function(e){var t,n;function r(t,n){var r;r=e.call(this,t,n)||this;var o,i=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?i?(o=pe,r.appearStatus=he):o=me:o=t.unmountOnExit||t.mountOnEnter?ve:pe,r.state={status:o},r.nextCallback=null,r}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,Q(t,n),r.getDerivedStateFromProps=function(e,t){return e.in&&t.status===ve?{status:pe}:null};var o=r.prototype;return o.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},o.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==he&&n!==me&&(t=he):n!==he&&n!==me||(t=ye)}this.updateStatus(!1,t)},o.componentWillUnmount=function(){this.cancelNextCallback()},o.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!==typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},o.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),t===he?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&this.state.status===pe&&this.setState({status:ve})},o.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,o=this.props.nodeRef?[r]:[T.findDOMNode(this),r],i=o[0],a=o[1],s=this.getTimeouts(),c=r?s.appear:s.enter;!e&&!n||fe?this.safeSetState({status:me},(function(){t.props.onEntered(i)})):(this.props.onEnter(i,a),this.safeSetState({status:he},(function(){t.props.onEntering(i,a),t.onTransitionEnd(c,(function(){t.safeSetState({status:me},(function(){t.props.onEntered(i,a)}))}))})))},o.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:T.findDOMNode(this);t&&!fe?(this.props.onExit(r),this.safeSetState({status:ye},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:pe},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:pe},(function(){e.props.onExited(r)}))},o.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},o.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},o.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},o.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:T.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=o[0],a=o[1];this.props.addEndListener(i,a)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},o.render=function(){var e=this.state.status;if(e===ve)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,(0,le.Z)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return y.createElement(de.Provider,{value:null},"function"===typeof n?n(e,r):y.cloneElement(y.Children.only(n),r))},r}(y.Component);function ge(){}be.contextType=de,be.propTypes={},be.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:ge,onEntering:ge,onEntered:ge,onExit:ge,onExiting:ge,onExited:ge},be.UNMOUNTED=ve,be.EXITED=pe,be.ENTERING=he,be.ENTERED=me,be.EXITING=ye;var Ee=be;function xe(e,t){var n=N(e,t)||"",r=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*r}function we(e,t){var n=xe(e,"transitionDuration"),r=xe(e,"transitionDelay"),o=R(e,(function(n){n.target===e&&(o(),t(n))}),n+r)}var ke,Ce=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children","childRef"],Ze=y.forwardRef((function(e,t){var n=e.onEnter,r=e.onEntering,a=e.onEntered,s=e.onExit,c=e.onExiting,u=e.onExited,l=e.addEndListener,f=e.children,d=e.childRef,v=(0,o.Z)(e,Ce),p=(0,y.useRef)(null),h=(0,g.Z)(p,d),m=function(e){var t;h((t=e)&&"setState"in t?T.findDOMNode(t):null!=t?t:null)},b=function(e){return function(t){e&&p.current&&e(p.current,t)}},E=(0,y.useCallback)(b(n),[n]),x=(0,y.useCallback)(b(r),[r]),w=(0,y.useCallback)(b(a),[a]),k=(0,y.useCallback)(b(s),[s]),C=(0,y.useCallback)(b(c),[c]),Z=(0,y.useCallback)(b(u),[u]),N=(0,y.useCallback)(b(l),[l]);return(0,V.jsx)(Ee,(0,i.Z)((0,i.Z)({ref:t},v),{},{onEnter:E,onEntered:w,onEntering:x,onExit:k,onExited:Z,onExiting:C,addEndListener:N,nodeRef:p,children:"function"===typeof f?function(e,t){return f(e,(0,i.Z)((0,i.Z)({},t),{},{ref:m}))}:y.cloneElement(f,{ref:m})}))})),Ne=["className","children","transitionClasses"],Oe=(ke={},(0,L.Z)(ke,he,"show"),(0,L.Z)(ke,me,"show"),ke),Se=y.forwardRef((function(e,t){var n=e.className,r=e.children,a=e.transitionClasses,c=void 0===a?{}:a,u=(0,o.Z)(e,Ne),l=(0,y.useCallback)((function(e,t){!function(e){e.offsetHeight}(e),null==u.onEnter||u.onEnter(e,t)}),[u]);return(0,V.jsx)(Ze,(0,i.Z)((0,i.Z)({ref:t,addEndListener:we},u),{},{onEnter:l,childRef:r.ref,children:function(e,t){return y.cloneElement(r,(0,i.Z)((0,i.Z)({},t),{},{className:s()("fade",n,r.props.className,Oe[e],c[e])}))}}))}));Se.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},Se.displayName="Fade";var Re=Se,je=n(6543),Pe=(0,je.Z)("modal-body"),Te=y.createContext({onHide:function(){}}),De=n(162),Le=["bsPrefix","className","contentClassName","centered","size","fullscreen","children","scrollable"],Fe=y.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,a=e.contentClassName,c=e.centered,u=e.size,l=e.fullscreen,f=e.children,d=e.scrollable,v=(0,o.Z)(e,Le);n=(0,De.vE)(n,"modal");var p="".concat(n,"-dialog"),h="string"===typeof l?"".concat(n,"-fullscreen-").concat(l):"".concat(n,"-fullscreen");return(0,V.jsx)("div",(0,i.Z)((0,i.Z)({},v),{},{ref:t,className:s()(p,r,u&&"".concat(n,"-").concat(u),c&&"".concat(p,"-centered"),d&&"".concat(p,"-scrollable"),l&&h),children:(0,V.jsx)("div",{className:s()("".concat(n,"-content"),a),children:f})}))}));Fe.displayName="ModalDialog";var _e=Fe,Ae=(0,je.Z)("modal-footer"),Ie=n(2007),Be=n.n(Ie),Me=["className","variant"],Ke={"aria-label":Be().string,onClick:Be().func,variant:Be().oneOf(["white"])},We=y.forwardRef((function(e,t){var n=e.className,r=e.variant,a=(0,o.Z)(e,Me);return(0,V.jsx)("button",(0,i.Z)({ref:t,type:"button",className:s()("btn-close",r&&"btn-close-".concat(r),n)},a))}));We.displayName="CloseButton",We.propTypes=Ke,We.defaultProps={"aria-label":"Close"};var He=We,Ue=["closeLabel","closeVariant","closeButton","onHide","children"],Ve=y.forwardRef((function(e,t){var n=e.closeLabel,r=e.closeVariant,a=e.closeButton,s=e.onHide,c=e.children,u=(0,o.Z)(e,Ue),l=(0,y.useContext)(Te),f=(0,b.Z)((function(){null==l||l.onHide(),null==s||s()}));return(0,V.jsxs)("div",(0,i.Z)((0,i.Z)({ref:t},u),{},{children:[c,a&&(0,V.jsx)(He,{"aria-label":n,variant:r,onClick:f})]}))}));Ve.defaultProps={closeLabel:"Close",closeButton:!1};var ze=Ve,$e=["bsPrefix","className"],Ge=y.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,a=(0,o.Z)(e,$e);return n=(0,De.vE)(n,"modal-header"),(0,V.jsx)(ze,(0,i.Z)((0,i.Z)({ref:t},a),{},{className:s()(r,n)}))}));Ge.displayName="ModalHeader",Ge.defaultProps={closeLabel:"Close",closeButton:!1};var Xe,qe=Ge,Ye=(Xe="h4",y.forwardRef((function(e,t){return(0,V.jsx)("div",(0,i.Z)((0,i.Z)({},e),{},{ref:t,className:s()(e.className,Xe)}))}))),Je=(0,je.Z)("modal-title",{Component:Ye}),Qe=["bsPrefix","className","style","dialogClassName","contentClassName","children","dialogAs","aria-labelledby","aria-describedby","aria-label","show","animation","backdrop","keyboard","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onEnter","onEntering","onExited","backdropClassName","manager"],et={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:_e};function tt(e){return(0,V.jsx)(Re,(0,i.Z)((0,i.Z)({},e),{},{timeout:null}))}function nt(e){return(0,V.jsx)(Re,(0,i.Z)((0,i.Z)({},e),{},{timeout:null}))}var rt=y.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,u=e.style,l=e.dialogClassName,f=e.contentClassName,p=e.children,x=e.dialogAs,w=e["aria-labelledby"],k=e["aria-describedby"],C=e["aria-label"],Z=e.show,N=e.animation,O=e.backdrop,S=e.keyboard,j=e.onEscapeKeyDown,P=e.onShow,T=e.onHide,D=e.container,L=e.autoFocus,F=e.enforceFocus,_=e.restoreFocus,A=e.restoreFocusOptions,I=e.onEntered,B=e.onExit,M=e.onExiting,K=e.onEnter,W=e.onEntering,H=e.onExited,U=e.backdropClassName,z=e.manager,$=(0,o.Z)(e,Qe),G=(0,y.useState)({}),q=(0,r.Z)(G,2),Y=q[0],J=q[1],Q=(0,y.useState)(!1),ee=(0,r.Z)(Q,2),te=ee[0],ne=ee[1],re=(0,y.useRef)(!1),oe=(0,y.useRef)(!1),ae=(0,y.useRef)(null),se=(0,y.useState)(null),ce=(0,r.Z)(se,2),le=ce[0],fe=ce[1],de=(0,g.Z)(t,fe),ve=(0,b.Z)(T),pe=(0,De.SC)();n=(0,De.vE)(n,"modal");var he=(0,y.useMemo)((function(){return{onHide:ve}}),[ve]);function me(){return z||function(e){return ie||(ie=new ue(e)),ie}({isRTL:pe})}function ye(e){if(c){var t=me().getScrollbarWidth()>0,n=e.scrollHeight>v(e).documentElement.clientHeight;J({paddingRight:t&&!n?m():void 0,paddingLeft:!t&&n?m():void 0})}}var be=(0,b.Z)((function(){le&&ye(le.dialog)}));E((function(){h(window,"resize",be),null==ae.current||ae.current()}));var ge=function(){re.current=!0},Ee=function(e){re.current&&le&&e.target===le.dialog&&(oe.current=!0),re.current=!1},xe=function(){ne(!0),ae.current=R(le.dialog,(function(){ne(!1)}))},we=function(e){"static"!==O?oe.current||e.target!==e.currentTarget?oe.current=!1:null==T||T():function(e){e.target===e.currentTarget&&xe()}(e)},ke=(0,y.useCallback)((function(e){return(0,V.jsx)("div",(0,i.Z)((0,i.Z)({},e),{},{className:s()("".concat(n,"-backdrop"),U,!N&&"show")}))}),[N,U,n]),Ce=(0,i.Z)((0,i.Z)({},u),Y);Ce.display="block";return(0,V.jsx)(Te.Provider,{value:he,children:(0,V.jsx)(X,{show:Z,ref:de,backdrop:O,container:D,keyboard:!0,autoFocus:L,enforceFocus:F,restoreFocus:_,restoreFocusOptions:A,onEscapeKeyDown:function(e){S||"static"!==O?S&&j&&j(e):(e.preventDefault(),xe())},onShow:P,onHide:T,onEnter:function(e,t){e&&ye(e),null==K||K(e,t)},onEntering:function(e,t){null==W||W(e,t),d(window,"resize",be)},onEntered:I,onExit:function(e){null==ae.current||ae.current(),null==B||B(e)},onExiting:M,onExited:function(e){e&&(e.style.display=""),null==H||H(e),h(window,"resize",be)},manager:me(),transition:N?tt:void 0,backdropTransition:N?nt:void 0,renderBackdrop:ke,renderDialog:function(e){return(0,V.jsx)("div",(0,i.Z)((0,i.Z)({role:"dialog"},e),{},{style:Ce,className:s()(a,n,te&&"".concat(n,"-static")),onClick:O?we:void 0,onMouseUp:Ee,"aria-label":C,"aria-labelledby":w,"aria-describedby":k,children:(0,V.jsx)(x,(0,i.Z)((0,i.Z)({},$),{},{onMouseDown:ge,className:l,contentClassName:f,children:p}))}))}})})}));rt.displayName="Modal",rt.defaultProps=et;var ot=Object.assign(rt,{Body:Pe,Header:qe,Title:Je,Footer:Ae,Dialog:_e,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150})}}]);
//# sourceMappingURL=295.7130639e.chunk.js.map