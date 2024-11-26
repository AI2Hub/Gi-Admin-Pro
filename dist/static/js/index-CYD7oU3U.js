import{H as e,b as t,ai as n,aj as a,g as l,ak as i,al as r,am as u,$ as o,a0 as s,R as c,O as v,Z as d,k as f,y as m,X as p}from"./index-CbrqfhuK.js";function g(e){return!!n()&&(a(e),!0)}function h(e){return"function"==typeof e?e():l(e)}const w="undefined"!=typeof window&&"undefined"!=typeof document,y=Object.prototype.toString,b=e=>"[object Object]"===y.call(e),S=()=>{};const x=e=>e();function E(e,t,n={}){const{eventFilter:a=x,...l}=n;return v(e,(i=a,r=t,function(...e){return new Promise(((t,n)=>{Promise.resolve(i((()=>r.apply(this,e)),{fn:r,thisArg:this,args:e})).then(t).catch(n)}))}),l);var i,r}function F(e,n,a={}){const{eventFilter:l,...i}=a,{eventFilter:u,pause:o,resume:s,isActive:c}=function(e=x){const n=t(!0);return{isActive:r(n),pause:function(){n.value=!1},resume:function(){n.value=!0},eventFilter:(...t)=>{n.value&&e(...t)}}}(l);return{stop:E(e,n,{...i,eventFilter:u}),pause:o,resume:s,isActive:c}}function k(t,n={}){if(!e(t))return d(t);const a=Array.isArray(t.value)?Array.from({length:t.value.length}):{};for(const e in t.value)a[e]=u((()=>({get:()=>t.value[e],set(a){var l;if(null==(l=h(n.replaceRef))||l)if(Array.isArray(t.value)){const n=[...t.value];n[e]=a,t.value=n}else{const n={...t.value,[e]:a};Object.setPrototypeOf(n,Object.getPrototypeOf(t.value)),t.value=n}else t.value[e]=a}})));return a}function O(e,t=!0){o()?s(e):t?e():c(e)}function A(n=!1,a={}){const{truthyValue:l=!0,falsyValue:i=!1}=a,r=e(n),u=t(n);function o(e){if(arguments.length)return u.value=e,u.value;{const e=h(l);return u.value=u.value===e?h(i):e,u.value}}return r?o:[u,o]}function N(e){var t;const n=h(e);return null!=(t=null==n?void 0:n.$el)?t:n}const C=w?window:void 0,I=w?window.document:void 0,T=w?window.navigator:void 0;function j(...e){let t,n,a,l;if("string"==typeof e[0]||Array.isArray(e[0])?([n,a,l]=e,t=C):[t,n,a,l]=e,!t)return S;Array.isArray(n)||(n=[n]),Array.isArray(a)||(a=[a]);const i=[],r=()=>{i.forEach((e=>e())),i.length=0},u=v((()=>[N(t),h(l)]),(([e,t])=>{if(r(),!e)return;const l=b(t)?{...t}:t;i.push(...n.flatMap((t=>a.map((n=>((e,t,n,a)=>(e.addEventListener(t,n,a),()=>e.removeEventListener(t,n,a)))(e,t,n,l))))))}),{immediate:!0,flush:"post"}),o=()=>{u(),r()};return g(o),o}function $(e){const n=function(){const e=t(!1);return o()&&s((()=>{e.value=!0})),e}();return f((()=>(n.value,Boolean(e()))))}function z(e,n={}){const{window:a=C}=n,l=$((()=>a&&"matchMedia"in a&&"function"==typeof a.matchMedia));let i;const r=t(!1),u=e=>{r.value=e.matches},o=()=>{i&&("removeEventListener"in i?i.removeEventListener("change",u):i.removeListener(u))},s=m((()=>{l.value&&(o(),i=a.matchMedia(h(e)),"addEventListener"in i?i.addEventListener("change",u):i.addListener(u),r.value=i.matches)}));return g((()=>{s(),o(),i=void 0})),r}function R(e,t={}){function n(t,n){let a=e[t];return null!=n&&(a=function(e,t){var n;if("number"==typeof e)return e+t;const a=(null==(n=e.match(/^-?[0-9]+\.?[0-9]*/))?void 0:n[0])||"",l=e.slice(a.length),i=Number.parseFloat(a)+t;return Number.isNaN(i)?e:i+l}(a,n)),"number"==typeof a&&(a=`${a}px`),a}const{window:a=C}=t;function l(e){return!!a&&a.matchMedia(e).matches}const i=e=>z(`(min-width: ${n(e)})`,t),r=Object.keys(e).reduce(((e,t)=>(Object.defineProperty(e,t,{get:()=>i(t),enumerable:!0,configurable:!0}),e)),{});return Object.assign(r,{greater:e=>z(`(min-width: ${n(e,.1)})`,t),greaterOrEqual:i,smaller:e=>z(`(max-width: ${n(e,-.1)})`,t),smallerOrEqual:e=>z(`(max-width: ${n(e)})`,t),between:(e,a)=>z(`(min-width: ${n(e)}) and (max-width: ${n(a,-.1)})`,t),isGreater:e=>l(`(min-width: ${n(e,.1)})`),isGreaterOrEqual:e=>l(`(min-width: ${n(e)})`),isSmaller:e=>l(`(max-width: ${n(e,-.1)})`),isSmallerOrEqual:e=>l(`(max-width: ${n(e)})`),isInBetween:(e,t)=>l(`(min-width: ${n(e)}) and (max-width: ${n(t,-.1)})`),current(){const t=Object.keys(e).map((e=>[e,i(e)]));return f((()=>t.filter((([,e])=>e.value)).map((([e])=>e))))}})}function L(e={}){const{navigator:n=T,read:a=!1,source:l,copiedDuring:i=1500,legacy:u=!1}=e,o=$((()=>n&&"clipboard"in n)),s=f((()=>o.value||u)),c=t(""),v=t(!1),d=function(e,n,a={}){const{immediate:l=!0}=a,i=t(!1);let u=null;function o(){u&&(clearTimeout(u),u=null)}function s(){i.value=!1,o()}function c(...t){o(),i.value=!0,u=setTimeout((()=>{i.value=!1,u=null,e(...t)}),h(n))}return l&&(i.value=!0,w&&c()),g(s),{isPending:r(i),start:c,stop:s}}((()=>v.value=!1),i);return s.value&&a&&j(["copy","cut"],(function(){var e,t,a;o.value?n.clipboard.readText().then((e=>{c.value=e})):c.value=null!=(a=null==(t=null==(e=null==document?void 0:document.getSelection)?void 0:e.call(document))?void 0:t.toString())?a:""})),{isSupported:s,text:c,copied:v,copy:async function(e=h(l)){s.value&&null!=e&&(o.value?await n.clipboard.writeText(e):function(e){const t=document.createElement("textarea");t.value=null!=e?e:"",t.style.position="absolute",t.style.opacity="0",document.body.appendChild(t),t.select(),document.execCommand("copy"),t.remove()}(e),c.value=e,v.value=!0,d.start())}}}const q="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},D="__vueuse_ssr_handlers__",M=P();function P(){return D in q||(q[D]=q[D]||{}),q[D]}function V(e,t){return M[e]||t}const B={boolean:{read:e=>"true"===e,write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},_="vueuse-storage";function J(e,n,a,l={}){var i;const{flush:r="pre",deep:u=!0,listenToStorageChanges:o=!0,writeDefaults:s=!0,mergeDefaults:v=!1,shallow:d,window:f=C,eventFilter:m,onError:g=(e=>{})}=l,w=(d?p:t)(n);if(!a)try{a=V("getDefaultStorage",(()=>{var e;return null==(e=C)?void 0:e.localStorage}))()}catch(O){g(O)}if(!a)return w;const y=h(n),b=function(e){return null==e?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":"boolean"==typeof e?"boolean":"string"==typeof e?"string":"object"==typeof e?"object":Number.isNaN(e)?"any":"number"}(y),S=null!=(i=l.serializer)?i:B[b],{pause:x,resume:E}=F(w,(()=>function(t){try{if(null==t)a.removeItem(e);else{const n=S.write(t),l=a.getItem(e);l!==n&&(a.setItem(e,n),f&&f.dispatchEvent(new CustomEvent(_,{detail:{key:e,oldValue:l,newValue:n,storageArea:a}})))}}catch(O){g(O)}}(w.value)),{flush:r,deep:u,eventFilter:m});return f&&o&&(j(f,"storage",k),j(f,_,(function(e){k(e.detail)}))),k(),w;function k(t){if(!t||t.storageArea===a)if(t&&null==t.key)w.value=y;else if(!t||t.key===e){x();try{(null==t?void 0:t.newValue)!==S.write(w.value)&&(w.value=function(t){const n=t?t.newValue:a.getItem(e);if(null==n)return s&&null!==y&&a.setItem(e,S.write(y)),y;if(!t&&v){const e=S.read(n);return"function"==typeof v?v(e,y):"object"!==b||Array.isArray(e)?e:{...y,...e}}return"string"!=typeof n?n:S.read(n)}(t))}catch(O){g(O)}finally{t?c(E):E()}}}}function H(e={}){const{selector:n="html",attribute:a="class",initialValue:l="auto",window:o=C,storage:s,storageKey:c="vueuse-color-scheme",listenToStorageChanges:d=!0,storageRef:m,emitAuto:p,disableTransition:g=!0}=e,h={auto:"",light:"light",dark:"dark",...e.modes||{}},w=function(e){return z("(prefers-color-scheme: dark)",e)}({window:o}),y=f((()=>w.value?"dark":"light")),b=m||(null==c?function(...e){if(1!==e.length)return i(...e);const n=e[0];return"function"==typeof n?r(u((()=>({get:n,set:S})))):t(n)}(l):J(c,l,s,{window:o,listenToStorageChanges:d})),x=f((()=>"auto"===b.value?y.value:b.value)),E=V("updateHTMLAttrs",((e,t,n)=>{const a="string"==typeof e?null==o?void 0:o.document.querySelector(e):N(e);if(!a)return;let l;if(g){l=o.document.createElement("style");const e="*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";l.appendChild(document.createTextNode(e)),o.document.head.appendChild(l)}if("class"===t){const e=n.split(/\s/g);Object.values(h).flatMap((e=>(e||"").split(/\s/g))).filter(Boolean).forEach((t=>{e.includes(t)?a.classList.add(t):a.classList.remove(t)}))}else a.setAttribute(t,n);g&&(o.getComputedStyle(l).opacity,document.head.removeChild(l))}));function F(e){var t;E(n,a,null!=(t=h[e])?t:e)}function k(t){e.onChanged?e.onChanged(t,F):F(t)}v(x,k,{flush:"post",immediate:!0}),O((()=>k(x.value)));const A=f({get:()=>p?b.value:x.value,set(e){b.value=e}});try{return Object.assign(A,{store:b,system:y,state:x})}catch(I){return A}}function Y(e={}){const{valueDark:t="dark",valueLight:n=""}=e,a=H({...e,onChanged:(t,n)=>{var a;e.onChanged?null==(a=e.onChanged)||a.call(e,"dark"===t,n,t):n(t)},modes:{dark:t,light:n}});return f({get:()=>"dark"===a.value,set(e){const t=e?"dark":"light";a.system.value===t?a.value="auto":a.value=t}})}function W(e,n={}){var a,l;const{pointerTypes:i,preventDefault:r,stopPropagation:u,exact:o,onMove:s,onEnd:c,onStart:v,initialValue:d,axis:m="both",draggingElement:p=C,containerElement:g,handle:y=e}=n,b=t(null!=(a=h(d))?a:{x:0,y:0}),S=t(),x=e=>!i||i.includes(e.pointerType),E=e=>{h(r)&&e.preventDefault(),h(u)&&e.stopPropagation()},F=t=>{var n;if(!x(t))return;if(h(o)&&t.target!==h(e))return;const a=(null!=(n=h(g))?n:h(e)).getBoundingClientRect(),l={x:t.clientX-a.left,y:t.clientY-a.top};!1!==(null==v?void 0:v(l,t))&&(S.value=l,E(t))},O=e=>{if(!x(e))return;if(!S.value)return;let{x:t,y:n}=b.value;"x"!==m&&"both"!==m||(t=e.clientX-S.value.x),"y"!==m&&"both"!==m||(n=e.clientY-S.value.y),b.value={x:t,y:n},null==s||s(b.value,e),E(e)},A=e=>{x(e)&&S.value&&(S.value=void 0,null==c||c(b.value,e),E(e))};if(w){const e={capture:null==(l=n.capture)||l};j(y,"pointerdown",F,e),j(p,"pointermove",O,e),j(p,"pointerup",A,e)}return{...k(b),position:b,isDragging:f((()=>!!S.value)),style:f((()=>`left:${b.value.x}px;top:${b.value.y}px;`))}}function X(e,n={width:0,height:0},a={}){const{window:l=C,box:i="content-box"}=a,r=f((()=>{var t,n;return null==(n=null==(t=N(e))?void 0:t.namespaceURI)?void 0:n.includes("svg")})),u=t(n.width),o=t(n.height);return function(e,t,n={}){const{window:a=C,...l}=n;let i;const r=$((()=>a&&"ResizeObserver"in a)),u=()=>{i&&(i.disconnect(),i=void 0)},o=f((()=>Array.isArray(e)?e.map((e=>N(e))):[N(e)])),s=v(o,(e=>{if(u(),r.value&&a){i=new ResizeObserver(t);for(const t of e)t&&i.observe(t,l)}}),{immediate:!0,flush:"post",deep:!0}),c=()=>{u(),s()};g(c)}(e,(([t])=>{const n="border-box"===i?t.borderBoxSize:"content-box"===i?t.contentBoxSize:t.devicePixelContentBoxSize;if(l&&r.value){const t=N(e);if(t){const e=l.getComputedStyle(t);u.value=Number.parseFloat(e.width),o.value=Number.parseFloat(e.height)}}else if(n){const e=Array.isArray(n)?n:[n];u.value=e.reduce(((e,{inlineSize:t})=>e+t),0),o.value=e.reduce(((e,{blockSize:t})=>e+t),0)}else u.value=t.contentRect.width,o.value=t.contentRect.height}),a),v((()=>N(e)),(e=>{u.value=e?n.width:0,o.value=e?n.height:0})),{width:u,height:o}}const G=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function K(e,n={}){const{document:a=I,autoExit:l=!1}=n,i=f((()=>{var t;return null!=(t=N(e))?t:null==a?void 0:a.querySelector("html")})),r=t(!1),u=f((()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find((e=>a&&e in a||i.value&&e in i.value)))),o=f((()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find((e=>a&&e in a||i.value&&e in i.value)))),s=f((()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find((e=>a&&e in a||i.value&&e in i.value)))),c=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find((e=>a&&e in a)),v=$((()=>i.value&&a&&void 0!==u.value&&void 0!==o.value&&void 0!==s.value)),d=()=>{if(s.value){if(a&&null!=a[s.value])return a[s.value];{const e=i.value;if(null!=(null==e?void 0:e[s.value]))return Boolean(e[s.value])}}return!1};async function m(){if(v.value&&r.value){if(o.value)if(null!=(null==a?void 0:a[o.value]))await a[o.value]();else{const e=i.value;null!=(null==e?void 0:e[o.value])&&await e[o.value]()}r.value=!1}}async function p(){if(!v.value||r.value)return;d()&&await m();const e=i.value;u.value&&null!=(null==e?void 0:e[u.value])&&(await e[u.value](),r.value=!0)}const h=()=>{const e=d();(!e||e&&c&&(null==a?void 0:a[c])===i.value)&&(r.value=e)};return j(a,G,h,!1),j((()=>N(i)),G,h,!1),l&&g(m),{isSupported:v,isFullscreen:r,enter:p,exit:m,toggle:async function(){await(r.value?m():p())}}}function U(e={}){const{window:n=C,initialWidth:a=Number.POSITIVE_INFINITY,initialHeight:l=Number.POSITIVE_INFINITY,listenOrientation:i=!0,includeScrollbar:r=!0}=e,u=t(a),o=t(l),s=()=>{n&&(r?(u.value=n.innerWidth,o.value=n.innerHeight):(u.value=n.document.documentElement.clientWidth,o.value=n.document.documentElement.clientHeight))};if(s(),O(s),j("resize",s,{passive:!0}),i){const e=z("(orientation: portrait)");v(e,(()=>s()))}return{width:u,height:o}}export{K as a,Y as b,A as c,R as d,L as e,X as f,W as g,U as u};
