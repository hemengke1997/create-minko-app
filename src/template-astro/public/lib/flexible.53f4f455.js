(()=>{function m(n,t,e){var d=e||{},o=d.noTrailing,l=o===void 0?!1:o,c=d.noLeading,i=c===void 0?!1:c,f=d.debounceMode,r=f===void 0?void 0:f,a,b=!1,w=0;function O(){a&&clearTimeout(a)}function x(v){var p=v||{},u=p.upcomingOnly,h=u===void 0?!1:u;O(),b=!h}function D(){for(var v=arguments.length,p=new Array(v),u=0;u<v;u++)p[u]=arguments[u];var h=this,y=Date.now()-w;if(b)return;function g(){w=Date.now(),t.apply(h,p)}function E(){a=void 0}!i&&r&&!a&&g(),O(),r===void 0&&y>n?i?(w=Date.now(),l||(a=setTimeout(r?E:g,n))):g():l!==!0&&(a=setTimeout(r?E:g,r===void 0?n-y:n))}return D.cancel=x,D}function I(n,t,e){var d=e||{},o=d.atBegin,l=o===void 0?!1:o;return m(n,t,{debounceMode:l!==!1})}var L=Object.defineProperty,$=Object.defineProperties,j=Object.getOwnPropertyDescriptors,T=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,z=(n,t,e)=>t in n?L(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,_=(n,t)=>{for(var e in t||(t={}))N.call(t,e)&&z(n,e,t[e]);if(T)for(var e of T(t))S.call(t,e)&&z(n,e,t[e]);return n},U=(n,t)=>$(n,j(t));function s(n){return`[modern-flexible]: ${n}`}var V="px",M={rootValue:16,resizeOption:{type:"debounce",delay:60},distinctDevice:[{deviceWidthRange:[0,Number.POSITIVE_INFINITY],isDevice:!0,UIWidth:375}]};function R(n={}){if(typeof window=="undefined"||typeof document=="undefined")throw new TypeError(s("current environment is not browser"));n=_(_({},M),n);let{rootValue:t,resizeOption:e,distinctDevice:d}=n;if(!t||t<=0)throw new Error(s("rootValue must be greater than 0"));if(!d||!d.length)throw new Error(s("distinctDevice needed"));function o(){let i=window.document.documentElement.clientWidth,f=d[d.length-1],r=d.find(a=>typeof a.isDevice=="boolean"?a.isDevice:a.isDevice(i))||f;if(r!=null&&r.isDevice){if(r.deviceWidthRange.length!==2)throw new Error(s("deviceWidthRange length must be 2"));i>=r.deviceWidthRange[1]?i=r.deviceWidthRange[1]:i<=r.deviceWidthRange[0]&&(i=r.deviceWidthRange[0]),document.documentElement&&(document.documentElement.style.fontSize=`${i/r.UIWidth*t}${V}`)}else throw new Error(s("no device matched"))}o();function l(){var i,f;if(e===!1||!e)return o;if(typeof e!="object")throw new TypeError(s("resizeOption must be object"));return(e==null?void 0:e.type)==="debounce"?I(e.delay,o,e.options):(e==null?void 0:e.type)==="throttle"?m(e.delay,o,U(_({},e.options),{noLeading:(f=(i=e.options)==null?void 0:i.noLeading)!=null?f:!0})):o}let c=l();return window.addEventListener("resize",c),window.addEventListener("pageshow",i=>{i.persisted&&c()}),window.addEventListener("pushState",c),{resize:o,enhancedResize:c}}var{resize:B}=R({rootValue:16,distinctDevice:[{deviceWidthRange:[375,650],UIWidth:375,isDevice:n=>n<=767},{deviceWidthRange:[1535,1920],UIWidth:1920,isDevice:n=>n>767}]});window.resize=B;})();
