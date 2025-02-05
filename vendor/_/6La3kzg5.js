import{Color as t}from"@kurkle/color";function noop(){}const e=(()=>{let t=0;return()=>t++})();
/**
 * Returns true if `value` is neither null nor undefined, else returns false.
 * @param value - The value to test.
 * @since 2.7.0
 */function isNullOrUndef(t){return t===null||typeof t==="undefined"}
/**
 * Returns true if `value` is an array (including typed arrays), else returns false.
 * @param value - The value to test.
 * @function
 */function isArray(t){if(Array.isArray&&Array.isArray(t))return true;const e=Object.prototype.toString.call(t);return e.slice(0,7)==="[object"&&e.slice(-6)==="Array]"}
/**
 * Returns true if `value` is an object (excluding null), else returns false.
 * @param value - The value to test.
 * @since 2.7.0
 */function isObject(t){return t!==null&&Object.prototype.toString.call(t)==="[object Object]"}
/**
 * Returns true if `value` is a finite number, else returns false
 * @param value  - The value to test.
 */function isNumberFinite(t){return(typeof t==="number"||t instanceof Number)&&isFinite(+t)}
/**
 * Returns `value` if finite, else returns `defaultValue`.
 * @param value - The value to return if defined.
 * @param defaultValue - The value to return if `value` is not finite.
 */function finiteOrDefault(t,e){return isNumberFinite(t)?t:e}
/**
 * Returns `value` if defined, else returns `defaultValue`.
 * @param value - The value to return if defined.
 * @param defaultValue - The value to return if `value` is undefined.
 */function valueOrDefault(t,e){return typeof t==="undefined"?e:t}const toPercentage=(t,e)=>typeof t==="string"&&t.endsWith("%")?parseFloat(t)/100:+t/e;const toDimension=(t,e)=>typeof t==="string"&&t.endsWith("%")?parseFloat(t)/100*e:+t
/**
 * Calls `fn` with the given `args` in the scope defined by `thisArg` and returns the
 * value returned by `fn`. If `fn` is not a function, this method returns undefined.
 * @param fn - The function to call.
 * @param args - The arguments with which `fn` should be called.
 * @param [thisArg] - The value of `this` provided for the call to `fn`.
 */;function callback(t,e,n){if(t&&typeof t.call==="function")return t.apply(n,e)}function each(t,e,n,o){let r,s,i;if(isArray(t)){s=t.length;if(o)for(r=s-1;r>=0;r--)e.call(n,t[r],r);else for(r=0;r<s;r++)e.call(n,t[r],r)}else if(isObject(t)){i=Object.keys(t);s=i.length;for(r=0;r<s;r++)e.call(n,t[i[r]],i[r])}}
/**
 * Returns true if the `a0` and `a1` arrays have the same content, else returns false.
 * @param a0 - The array to compare
 * @param a1 - The array to compare
 * @private
 */function _elementsEqual(t,e){let n,o,r,s;if(!t||!e||t.length!==e.length)return false;for(n=0,o=t.length;n<o;++n){r=t[n];s=e[n];if(r.datasetIndex!==s.datasetIndex||r.index!==s.index)return false}return true}
/**
 * Returns a deep copy of `source` without keeping references on objects and arrays.
 * @param source - The value to clone.
 */function clone(t){if(isArray(t))return t.map(clone);if(isObject(t)){const e=Object.create(null);const n=Object.keys(t);const o=n.length;let r=0;for(;r<o;++r)e[n[r]]=clone(t[n[r]]);return e}return t}function isValidKey(t){return["__proto__","prototype","constructor"].indexOf(t)===-1}function _merger(t,e,n,o){if(!isValidKey(t))return;const r=e[t];const s=n[t];isObject(r)&&isObject(s)?merge(r,s,o):e[t]=clone(s)}function merge(t,e,n){const o=isArray(e)?e:[e];const r=o.length;if(!isObject(t))return t;n=n||{};const s=n.merger||_merger;let i;for(let e=0;e<r;++e){i=o[e];if(!isObject(i))continue;const r=Object.keys(i);for(let e=0,o=r.length;e<o;++e)s(r[e],t,i,n)}return t}function mergeIf(t,e){return merge(t,e,{merger:_mergerIf})}function _mergerIf(t,e,n){if(!isValidKey(t))return;const o=e[t];const r=n[t];isObject(o)&&isObject(r)?mergeIf(o,r):Object.prototype.hasOwnProperty.call(e,t)||(e[t]=clone(r))}function _deprecated(t,e,n,o){e!==void 0&&console.warn(t+': "'+n+'" is deprecated. Please use "'+o+'" instead')}const n={"":t=>t,x:t=>t.x,y:t=>t.y};function _splitKey(t){const e=t.split(".");const n=[];let o="";for(const t of e){o+=t;if(o.endsWith("\\"))o=o.slice(0,-1)+".";else{n.push(o);o=""}}return n}function _getKeyResolver(t){const e=_splitKey(t);return t=>{for(const n of e){if(n==="")break;t=t&&t[n]}return t}}function resolveObjectKey(t,e){const o=n[e]||(n[e]=_getKeyResolver(e));return o(t)}function _capitalize(t){return t.charAt(0).toUpperCase()+t.slice(1)}const defined=t=>typeof t!=="undefined";const isFunction=t=>typeof t==="function";const setsEqual=(t,e)=>{if(t.size!==e.size)return false;for(const n of t)if(!e.has(n))return false;return true};
/**
 * @param e - The event
 * @private
 */function _isClickEvent(t){return t.type==="mouseup"||t.type==="click"||t.type==="contextmenu"}const o=Math.PI;const r=2*o;const s=r+o;const i=Number.POSITIVE_INFINITY;const a=o/180;const l=o/2;const c=o/4;const u=o*2/3;const f=Math.log10;const d=Math.sign;function almostEquals(t,e,n){return Math.abs(t-e)<n}function niceNum(t){const e=Math.round(t);t=almostEquals(t,e,t/1e3)?e:t;const n=Math.pow(10,Math.floor(f(t)));const o=t/n;const r=o<=1?1:o<=2?2:o<=5?5:10;return r*n}function _factorize(t){const e=[];const n=Math.sqrt(t);let o;for(o=1;o<n;o++)if(t%o===0){e.push(o);e.push(t/o)}n===(n|0)&&e.push(n);e.sort(((t,e)=>t-e)).pop();return e}function isNumber(t){return!isNaN(parseFloat(t))&&isFinite(t)}function almostWhole(t,e){const n=Math.round(t);return n-e<=t&&n+e>=t}function _setMinAndMaxByKey(t,e,n){let o,r,s;for(o=0,r=t.length;o<r;o++){s=t[o][n];if(!isNaN(s)){e.min=Math.min(e.min,s);e.max=Math.max(e.max,s)}}}function toRadians(t){return t*(o/180)}function toDegrees(t){return t*(180/o)}
/**
 * Returns the number of decimal places
 * i.e. the number of digits after the decimal point, of the value of this Number.
 * @param x - A number.
 * @returns The number of decimal places.
 * @private
 */function _decimalPlaces(t){if(!isNumberFinite(t))return;let e=1;let n=0;while(Math.round(t*e)/e!==t){e*=10;n++}return n}function getAngleFromPoint(t,e){const n=e.x-t.x;const s=e.y-t.y;const i=Math.sqrt(n*n+s*s);let a=Math.atan2(s,n);a<-.5*o&&(a+=r);return{angle:a,distance:i}}function distanceBetweenPoints(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function _angleDiff(t,e){return(t-e+s)%r-o}function _normalizeAngle(t){return(t%r+r)%r}function _angleBetween(t,e,n,o){const r=_normalizeAngle(t);const s=_normalizeAngle(e);const i=_normalizeAngle(n);const a=_normalizeAngle(s-r);const l=_normalizeAngle(i-r);const c=_normalizeAngle(r-s);const u=_normalizeAngle(r-i);return r===s||r===i||o&&s===i||a>l&&c<u}
/**
 * Limit `value` between `min` and `max`
 * @param value
 * @param min
 * @param max
 * @private
 */function _limitValue(t,e,n){return Math.max(e,Math.min(n,t))}
/**
 * @param {number} value
 * @private
 */function _int16Range(t){return _limitValue(t,-32768,32767)}
/**
 * @param value
 * @param start
 * @param end
 * @param [epsilon]
 * @private
 */function _isBetween(t,e,n,o=1e-6){return t>=Math.min(e,n)-o&&t<=Math.max(e,n)+o}function _lookup(t,e,n){n=n||(n=>t[n]<e);let o=t.length-1;let r=0;let s;while(o-r>1){s=r+o>>1;n(s)?r=s:o=s}return{lo:r,hi:o}}
/**
 * Binary search
 * @param table - the table search. must be sorted!
 * @param key - property name for the value in each entry
 * @param value - value to find
 * @param last - lookup last index
 * @private
 */const _lookupByKey=(t,e,n,o)=>_lookup(t,n,o?o=>{const r=t[o][e];return r<n||r===n&&t[o+1][e]===n}:o=>t[o][e]<n)
/**
 * Reverse binary search
 * @param table - the table search. must be sorted!
 * @param key - property name for the value in each entry
 * @param value - value to find
 * @private
 */;const _rlookupByKey=(t,e,n)=>_lookup(t,n,(o=>t[o][e]>=n))
/**
 * Return subset of `values` between `min` and `max` inclusive.
 * Values are assumed to be in sorted order.
 * @param values - sorted array of values
 * @param min - min value
 * @param max - max value
 */;function _filterBetween(t,e,n){let o=0;let r=t.length;while(o<r&&t[o]<e)o++;while(r>o&&t[r-1]>n)r--;return o>0||r<t.length?t.slice(o,r):t}const h=["push","pop","shift","splice","unshift"];function listenArrayEvents(t,e){if(t._chartjs)t._chartjs.listeners.push(e);else{Object.defineProperty(t,"_chartjs",{configurable:true,enumerable:false,value:{listeners:[e]}});h.forEach((e=>{const n="_onData"+_capitalize(e);const o=t[e];Object.defineProperty(t,e,{configurable:true,enumerable:false,value(...e){const r=o.apply(this,e);t._chartjs.listeners.forEach((t=>{typeof t[n]==="function"&&t[n](...e)}));return r}})}))}}function unlistenArrayEvents(t,e){const n=t._chartjs;if(!n)return;const o=n.listeners;const r=o.indexOf(e);r!==-1&&o.splice(r,1);if(!(o.length>0)){h.forEach((e=>{delete t[e]}));delete t._chartjs}}
/**
 * @param items
 */function _arrayUnique(t){const e=new Set(t);return e.size===t.length?t:Array.from(e)}function fontString(t,e,n){return e+" "+t+"px "+n}const p=function(){return typeof window==="undefined"?function(t){return t()}:window.requestAnimationFrame}();function throttled(t,e){let n=[];let o=false;return function(...r){n=r;if(!o){o=true;p.call(window,(()=>{o=false;t.apply(e,n)}))}}}function debounce(t,e){let n;return function(...o){if(e){clearTimeout(n);n=setTimeout(t,e,o)}else t.apply(this,o);return e}}const _toLeftRightCenter=t=>t==="start"?"left":t==="end"?"right":"center";const _alignStartEnd=(t,e,n)=>t==="start"?e:t==="end"?n:(e+n)/2;const _textX=(t,e,n,o)=>{const r=o?"left":"right";return t===r?n:t==="center"?(e+n)/2:e};function _getStartAndCountOfVisiblePoints(t,e,n){const o=e.length;let r=0;let s=o;if(t._sorted){const{iScale:i,_parsed:a}=t;const l=i.axis;const{min:c,max:u,minDefined:f,maxDefined:d}=i.getUserBounds();f&&(r=_limitValue(Math.min(_lookupByKey(a,l,c).lo,n?o:_lookupByKey(e,l,i.getPixelForValue(c)).lo),0,o-1));s=d?_limitValue(Math.max(_lookupByKey(a,i.axis,u,true).hi+1,n?0:_lookupByKey(e,l,i.getPixelForValue(u),true).hi+1),r,o)-r:o-r}return{start:r,count:s}}
/**
 * Checks if the scale ranges have changed.
 * @param {object} meta - dataset meta.
 * @returns {boolean}
 * @private
 */function _scaleRangesChanged(t){const{xScale:e,yScale:n,_scaleRanges:o}=t;const r={xmin:e.min,xmax:e.max,ymin:n.min,ymax:n.max};if(!o){t._scaleRanges=r;return true}const s=o.xmin!==e.min||o.xmax!==e.max||o.ymin!==n.min||o.ymax!==n.max;Object.assign(o,r);return s}const atEdge=t=>t===0||t===1;const elasticIn=(t,e,n)=>-Math.pow(2,10*(t-=1))*Math.sin((t-e)*r/n);const elasticOut=(t,e,n)=>Math.pow(2,-10*t)*Math.sin((t-e)*r/n)+1;const g={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>-t*(t-2),easeInOutQuad:t=>(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1),easeInCubic:t=>t*t*t,easeOutCubic:t=>(t-=1)*t*t+1,easeInOutCubic:t=>(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2),easeInQuart:t=>t*t*t*t,easeOutQuart:t=>-((t-=1)*t*t*t-1),easeInOutQuart:t=>(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2),easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>(t-=1)*t*t*t*t+1,easeInOutQuint:t=>(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2),easeInSine:t=>1-Math.cos(t*l),easeOutSine:t=>Math.sin(t*l),easeInOutSine:t=>-.5*(Math.cos(o*t)-1),easeInExpo:t=>t===0?0:Math.pow(2,10*(t-1)),easeOutExpo:t=>t===1?1:1-Math.pow(2,-10*t),easeInOutExpo:t=>atEdge(t)?t:t<.5?.5*Math.pow(2,10*(t*2-1)):.5*(2-Math.pow(2,-10*(t*2-1))),easeInCirc:t=>t>=1?t:-(Math.sqrt(1-t*t)-1),easeOutCirc:t=>Math.sqrt(1-(t-=1)*t),easeInOutCirc:t=>(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1),easeInElastic:t=>atEdge(t)?t:elasticIn(t,.075,.3),easeOutElastic:t=>atEdge(t)?t:elasticOut(t,.075,.3),easeInOutElastic(t){const e=.1125;const n=.45;return atEdge(t)?t:t<.5?.5*elasticIn(t*2,e,n):.5+.5*elasticOut(t*2-1,e,n)},easeInBack(t){const e=1.70158;return t*t*((e+1)*t-e)},easeOutBack(t){const e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},easeInOutBack(t){let e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},easeInBounce:t=>1-g.easeOutBounce(1-t),easeOutBounce(t){const e=7.5625;const n=2.75;return t<1/n?e*t*t:t<2/n?e*(t-=1.5/n)*t+.75:t<2.5/n?e*(t-=2.25/n)*t+.9375:e*(t-=2.625/n)*t+.984375},easeInOutBounce:t=>t<.5?g.easeInBounce(t*2)*.5:g.easeOutBounce(t*2-1)*.5+.5};function isPatternOrGradient(t){if(t&&typeof t==="object"){const e=t.toString();return e==="[object CanvasPattern]"||e==="[object CanvasGradient]"}return false}function color(e){return isPatternOrGradient(e)?e:new t(e)}function getHoverColor(e){return isPatternOrGradient(e)?e:new t(e).saturate(.5).darken(.1).hexString()}const y=["x","y","borderWidth","radius","tension"];const m=["color","borderColor","backgroundColor"];function applyAnimationsDefaults(t){t.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0});t.describe("animation",{_fallback:false,_indexable:false,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"});t.set("animations",{colors:{type:"color",properties:m},numbers:{type:"number",properties:y}});t.describe("animations",{_fallback:"animation"});t.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function applyLayoutsDefaults(t){t.set("layout",{autoPadding:true,padding:{top:0,right:0,bottom:0,left:0}})}const b=new Map;function getNumberFormat(t,e){e=e||{};const n=t+JSON.stringify(e);let o=b.get(n);if(!o){o=new Intl.NumberFormat(t,e);b.set(n,o)}return o}function formatNumber(t,e,n){return getNumberFormat(e,n).format(t)}const x={values(t){return isArray(t)?t:""+t},numeric(t,e,n){if(t===0)return"0";const o=this.chart.options.locale;let r;let s=t;if(n.length>1){const e=Math.max(Math.abs(n[0].value),Math.abs(n[n.length-1].value));(e<1e-4||e>1e15)&&(r="scientific");s=calculateDelta(t,n)}const i=f(Math.abs(s));const a=isNaN(i)?1:Math.max(Math.min(-1*Math.floor(i),20),0);const l={notation:r,minimumFractionDigits:a,maximumFractionDigits:a};Object.assign(l,this.options.ticks.format);return formatNumber(t,o,l)},logarithmic(t,e,n){if(t===0)return"0";const o=n[e].significand||t/Math.pow(10,Math.floor(f(t)));return[1,2,3,5,10,15].includes(o)||e>.8*n.length?x.numeric.call(this,t,e,n):""}};function calculateDelta(t,e){let n=e.length>3?e[2].value-e[1].value:e[1].value-e[0].value;Math.abs(n)>=1&&t!==Math.floor(t)&&(n=t-Math.floor(t));return n}var _={formatters:x};function applyScaleDefaults(t){t.set("scale",{display:true,offset:false,reverse:false,beginAtZero:false,bounds:"ticks",clip:true,grace:0,grid:{display:true,lineWidth:1,drawOnChartArea:true,drawTicks:true,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:false},border:{display:true,dash:[],dashOffset:0,width:1},title:{display:false,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:false,textStrokeWidth:0,textStrokeColor:"",padding:3,display:true,autoSkip:true,autoSkipPadding:3,labelOffset:0,callback:_.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:false,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}});t.route("scale.ticks","color","","color");t.route("scale.grid","color","","borderColor");t.route("scale.border","color","","borderColor");t.route("scale.title","color","","color");t.describe("scale",{_fallback:false,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"});t.describe("scales",{_fallback:"scale"});t.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const v=Object.create(null);const S=Object.create(null);function getScope$1(t,e){if(!e)return t;const n=e.split(".");for(let e=0,o=n.length;e<o;++e){const o=n[e];t=t[o]||(t[o]=Object.create(null))}return t}function set(t,e,n){return typeof e==="string"?merge(getScope$1(t,e),n):merge(getScope$1(t,""),e)}class Defaults{constructor(t,e){this.animation=void 0;this.backgroundColor="rgba(0,0,0,0.1)";this.borderColor="rgba(0,0,0,0.1)";this.color="#666";this.datasets={};this.devicePixelRatio=t=>t.chart.platform.getDevicePixelRatio();this.elements={};this.events=["mousemove","mouseout","click","touchstart","touchmove"];this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null};this.hover={};this.hoverBackgroundColor=(t,e)=>getHoverColor(e.backgroundColor);this.hoverBorderColor=(t,e)=>getHoverColor(e.borderColor);this.hoverColor=(t,e)=>getHoverColor(e.color);this.indexAxis="x";this.interaction={mode:"nearest",intersect:true,includeInvisible:false};this.maintainAspectRatio=true;this.onHover=null;this.onClick=null;this.parsing=true;this.plugins={};this.responsive=true;this.scale=void 0;this.scales={};this.showLine=true;this.drawActiveElementsOnTop=true;this.describe(t);this.apply(e)}set(t,e){return set(this,t,e)}get(t){return getScope$1(this,t)}describe(t,e){return set(S,t,e)}override(t,e){return set(v,t,e)}route(t,e,n,o){const r=getScope$1(this,t);const s=getScope$1(this,n);const i="_"+e;Object.defineProperties(r,{[i]:{value:r[e],writable:true},[e]:{enumerable:true,get(){const t=this[i];const e=s[o];return isObject(t)?Object.assign({},e,t):valueOrDefault(t,e)},set(t){this[i]=t}}})}apply(t){t.forEach((t=>t(this)))}}var w=new Defaults({_scriptable:t=>!t.startsWith("on"),_indexable:t=>t!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:false,_indexable:false}},[applyAnimationsDefaults,applyLayoutsDefaults,applyScaleDefaults]);
/**
 * Converts the given font object into a CSS font string.
 * @param font - A font object.
 * @return The CSS font string. See https://developer.mozilla.org/en-US/docs/Web/CSS/font
 * @private
 */function toFontString(t){return!t||isNullOrUndef(t.size)||isNullOrUndef(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}function _measureText(t,e,n,o,r){let s=e[r];if(!s){s=e[r]=t.measureText(r).width;n.push(r)}s>o&&(o=s);return o}function _longestText(t,e,n,o){o=o||{};let r=o.data=o.data||{};let s=o.garbageCollect=o.garbageCollect||[];if(o.font!==e){r=o.data={};s=o.garbageCollect=[];o.font=e}t.save();t.font=e;let i=0;const a=n.length;let l,c,u,f,d;for(l=0;l<a;l++){f=n[l];if(f===void 0||f===null||isArray(f)){if(isArray(f))for(c=0,u=f.length;c<u;c++){d=f[c];d===void 0||d===null||isArray(d)||(i=_measureText(t,r,s,i,d))}}else i=_measureText(t,r,s,i,f)}t.restore();const h=s.length/2;if(h>n.length){for(l=0;l<h;l++)delete r[s[l]];s.splice(0,h)}return i}
/**
 * Returns the aligned pixel value to avoid anti-aliasing blur
 * @param chart - The chart instance.
 * @param pixel - A pixel value.
 * @param width - The width of the element.
 * @returns The aligned pixel value.
 * @private
 */function _alignPixel(t,e,n){const o=t.currentDevicePixelRatio;const r=n!==0?Math.max(n/2,.5):0;return Math.round((e-r)*o)/o+r}function clearCanvas(t,e){if(e||t){e=e||t.getContext("2d");e.save();e.resetTransform();e.clearRect(0,0,t.width,t.height);e.restore()}}function drawPoint(t,e,n,o){drawPointLegend(t,e,n,o,null)}function drawPointLegend(t,e,n,s,i){let f,d,h,p,g,y,m,b;const x=e.pointStyle;const _=e.rotation;const v=e.radius;let S=(_||0)*a;if(x&&typeof x==="object"){f=x.toString();if(f==="[object HTMLImageElement]"||f==="[object HTMLCanvasElement]"){t.save();t.translate(n,s);t.rotate(S);t.drawImage(x,-x.width/2,-x.height/2,x.width,x.height);t.restore();return}}if(!(isNaN(v)||v<=0)){t.beginPath();switch(x){default:i?t.ellipse(n,s,i/2,v,0,0,r):t.arc(n,s,v,0,r);t.closePath();break;case"triangle":y=i?i/2:v;t.moveTo(n+Math.sin(S)*y,s-Math.cos(S)*v);S+=u;t.lineTo(n+Math.sin(S)*y,s-Math.cos(S)*v);S+=u;t.lineTo(n+Math.sin(S)*y,s-Math.cos(S)*v);t.closePath();break;case"rectRounded":g=v*.516;p=v-g;d=Math.cos(S+c)*p;m=Math.cos(S+c)*(i?i/2-g:p);h=Math.sin(S+c)*p;b=Math.sin(S+c)*(i?i/2-g:p);t.arc(n-m,s-h,g,S-o,S-l);t.arc(n+b,s-d,g,S-l,S);t.arc(n+m,s+h,g,S,S+l);t.arc(n-b,s+d,g,S+l,S+o);t.closePath();break;case"rect":if(!_){p=Math.SQRT1_2*v;y=i?i/2:p;t.rect(n-y,s-p,2*y,2*p);break}S+=c;case"rectRot":m=Math.cos(S)*(i?i/2:v);d=Math.cos(S)*v;h=Math.sin(S)*v;b=Math.sin(S)*(i?i/2:v);t.moveTo(n-m,s-h);t.lineTo(n+b,s-d);t.lineTo(n+m,s+h);t.lineTo(n-b,s+d);t.closePath();break;case"crossRot":S+=c;case"cross":m=Math.cos(S)*(i?i/2:v);d=Math.cos(S)*v;h=Math.sin(S)*v;b=Math.sin(S)*(i?i/2:v);t.moveTo(n-m,s-h);t.lineTo(n+m,s+h);t.moveTo(n+b,s-d);t.lineTo(n-b,s+d);break;case"star":m=Math.cos(S)*(i?i/2:v);d=Math.cos(S)*v;h=Math.sin(S)*v;b=Math.sin(S)*(i?i/2:v);t.moveTo(n-m,s-h);t.lineTo(n+m,s+h);t.moveTo(n+b,s-d);t.lineTo(n-b,s+d);S+=c;m=Math.cos(S)*(i?i/2:v);d=Math.cos(S)*v;h=Math.sin(S)*v;b=Math.sin(S)*(i?i/2:v);t.moveTo(n-m,s-h);t.lineTo(n+m,s+h);t.moveTo(n+b,s-d);t.lineTo(n-b,s+d);break;case"line":d=i?i/2:Math.cos(S)*v;h=Math.sin(S)*v;t.moveTo(n-d,s-h);t.lineTo(n+d,s+h);break;case"dash":t.moveTo(n,s);t.lineTo(n+Math.cos(S)*(i?i/2:v),s+Math.sin(S)*v);break;case false:t.closePath();break}t.fill();e.borderWidth>0&&t.stroke()}}
/**
 * Returns true if the point is inside the rectangle
 * @param point - The point to test
 * @param area - The rectangle
 * @param margin - allowed margin
 * @private
 */function _isPointInArea(t,e,n){n=n||.5;return!e||t&&t.x>e.left-n&&t.x<e.right+n&&t.y>e.top-n&&t.y<e.bottom+n}function clipArea(t,e){t.save();t.beginPath();t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top);t.clip()}function unclipArea(t){t.restore()}function _steppedLineTo(t,e,n,o,r){if(!e)return t.lineTo(n.x,n.y);if(r==="middle"){const o=(e.x+n.x)/2;t.lineTo(o,e.y);t.lineTo(o,n.y)}else r==="after"!==!!o?t.lineTo(e.x,n.y):t.lineTo(n.x,e.y);t.lineTo(n.x,n.y)}function _bezierCurveTo(t,e,n,o){if(!e)return t.lineTo(n.x,n.y);t.bezierCurveTo(o?e.cp1x:e.cp2x,o?e.cp1y:e.cp2y,o?n.cp2x:n.cp1x,o?n.cp2y:n.cp1y,n.x,n.y)}function setRenderOpts(t,e){e.translation&&t.translate(e.translation[0],e.translation[1]);isNullOrUndef(e.rotation)||t.rotate(e.rotation);e.color&&(t.fillStyle=e.color);e.textAlign&&(t.textAlign=e.textAlign);e.textBaseline&&(t.textBaseline=e.textBaseline)}function decorateText(t,e,n,o,r){if(r.strikethrough||r.underline){const s=t.measureText(o);const i=e-s.actualBoundingBoxLeft;const a=e+s.actualBoundingBoxRight;const l=n-s.actualBoundingBoxAscent;const c=n+s.actualBoundingBoxDescent;const u=r.strikethrough?(l+c)/2:c;t.strokeStyle=t.fillStyle;t.beginPath();t.lineWidth=r.decorationWidth||2;t.moveTo(i,u);t.lineTo(a,u);t.stroke()}}function drawBackdrop(t,e){const n=t.fillStyle;t.fillStyle=e.color;t.fillRect(e.left,e.top,e.width,e.height);t.fillStyle=n}function renderText(t,e,n,o,r,s={}){const i=isArray(e)?e:[e];const a=s.strokeWidth>0&&s.strokeColor!=="";let l,c;t.save();t.font=r.string;setRenderOpts(t,s);for(l=0;l<i.length;++l){c=i[l];s.backdrop&&drawBackdrop(t,s.backdrop);if(a){s.strokeColor&&(t.strokeStyle=s.strokeColor);isNullOrUndef(s.strokeWidth)||(t.lineWidth=s.strokeWidth);t.strokeText(c,n,o,s.maxWidth)}t.fillText(c,n,o,s.maxWidth);decorateText(t,n,o,c,s);o+=Number(r.lineHeight)}t.restore()}
/**
 * Add a path of a rectangle with rounded corners to the current sub-path
 * @param ctx - Context
 * @param rect - Bounding rect
 */function addRoundedRectPath(t,e){const{x:n,y:r,w:s,h:i,radius:a}=e;t.arc(n+a.topLeft,r+a.topLeft,a.topLeft,1.5*o,o,true);t.lineTo(n,r+i-a.bottomLeft);t.arc(n+a.bottomLeft,r+i-a.bottomLeft,a.bottomLeft,o,l,true);t.lineTo(n+s-a.bottomRight,r+i);t.arc(n+s-a.bottomRight,r+i-a.bottomRight,a.bottomRight,l,0,true);t.lineTo(n+s,r+a.topRight);t.arc(n+s-a.topRight,r+a.topRight,a.topRight,0,-l,true);t.lineTo(n+a.topLeft,r)}const O=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/;const M=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
/**
 * Converts the given line height `value` in pixels for a specific font `size`.
 * @param value - The lineHeight to parse (eg. 1.6, '14px', '75%', '1.6em').
 * @param size - The font size (in pixels) used to resolve relative `value`.
 * @returns The effective line height in pixels (size * 1.2 if value is invalid).
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
 * @since 2.7.0
 */function toLineHeight(t,e){const n=(""+t).match(O);if(!n||n[1]==="normal")return e*1.2;t=+n[2];switch(n[3]){case"px":return t;case"%":t/=100;break}return e*t}const numberOrZero=t=>+t||0;function _readValueToProps(t,e){const n={};const o=isObject(e);const r=o?Object.keys(e):e;const s=isObject(t)?o?n=>valueOrDefault(t[n],t[e[n]]):e=>t[e]:()=>t;for(const t of r)n[t]=numberOrZero(s(t));return n}
/**
 * Converts the given value into a TRBL object.
 * @param value - If a number, set the value to all TRBL component,
 *  else, if an object, use defined properties and sets undefined ones to 0.
 *  x / y are shorthands for same value for left/right and top/bottom.
 * @returns The padding values (top, right, bottom, left)
 * @since 3.0.0
 */function toTRBL(t){return _readValueToProps(t,{top:"y",right:"x",bottom:"y",left:"x"})}
/**
 * Converts the given value into a TRBL corners object (similar with css border-radius).
 * @param value - If a number, set the value to all TRBL corner components,
 *  else, if an object, use defined properties and sets undefined ones to 0.
 * @returns The TRBL corner values (topLeft, topRight, bottomLeft, bottomRight)
 * @since 3.0.0
 */function toTRBLCorners(t){return _readValueToProps(t,["topLeft","topRight","bottomLeft","bottomRight"])}
/**
 * Converts the given value into a padding object with pre-computed width/height.
 * @param value - If a number, set the value to all TRBL component,
 *  else, if an object, use defined properties and sets undefined ones to 0.
 *  x / y are shorthands for same value for left/right and top/bottom.
 * @returns The padding values (top, right, bottom, left, width, height)
 * @since 2.7.0
 */function toPadding(t){const e=toTRBL(t);e.width=e.left+e.right;e.height=e.top+e.bottom;return e}
/**
 * Parses font options and returns the font object.
 * @param options - A object that contains font options to be parsed.
 * @param fallback - A object that contains fallback font options.
 * @return The font object.
 * @private
 */function toFont(t,e){t=t||{};e=e||w.font;let n=valueOrDefault(t.size,e.size);typeof n==="string"&&(n=parseInt(n,10));let o=valueOrDefault(t.style,e.style);if(o&&!(""+o).match(M)){console.warn('Invalid font style specified: "'+o+'"');o=void 0}const r={family:valueOrDefault(t.family,e.family),lineHeight:toLineHeight(valueOrDefault(t.lineHeight,e.lineHeight),n),size:n,style:o,weight:valueOrDefault(t.weight,e.weight),string:""};r.string=toFontString(r);return r}
/**
 * Evaluates the given `inputs` sequentially and returns the first defined value.
 * @param inputs - An array of values, falling back to the last value.
 * @param context - If defined and the current value is a function, the value
 * is called with `context` as first argument and the result becomes the new input.
 * @param index - If defined and the current value is an array, the value
 * at `index` become the new input.
 * @param info - object to return information about resolution in
 * @param info.cacheable - Will be set to `false` if option is not cacheable.
 * @since 2.7.0
 */function resolve(t,e,n,o){let r=true;let s,i,a;for(s=0,i=t.length;s<i;++s){a=t[s];if(a!==void 0){if(e!==void 0&&typeof a==="function"){a=a(e);r=false}if(n!==void 0&&isArray(a)){a=a[n%a.length];r=false}if(a!==void 0){o&&!r&&(o.cacheable=false);return a}}}}
/**
 * @param minmax
 * @param grace
 * @param beginAtZero
 * @private
 */function _addGrace(t,e,n){const{min:o,max:r}=t;const s=toDimension(e,(r-o)/2);const keepZero=(t,e)=>n&&t===0?0:t+e;return{min:keepZero(o,-Math.abs(s)),max:keepZero(r,s)}}function createContext(t,e){return Object.assign(Object.create(t),e)}
/**
 * Creates a Proxy for resolving raw values for options.
 * @param scopes - The option scopes to look for values, in resolution order
 * @param prefixes - The prefixes for values, in resolution order.
 * @param rootScopes - The root option scopes
 * @param fallback - Parent scopes fallback
 * @param getTarget - callback for getting the target for changed values
 * @returns Proxy
 * @private
 */function _createResolver(t,e=[""],n,o,r=(()=>t[0])){const s=n||t;typeof o==="undefined"&&(o=_resolve("_fallback",t));const i={[Symbol.toStringTag]:"Object",_cacheable:true,_scopes:t,_rootScopes:s,_fallback:o,_getTarget:r,override:n=>_createResolver([n,...t],e,s,o)};return new Proxy(i,{deleteProperty(e,n){delete e[n];delete e._keys;delete t[0][n];return true},get(n,o){return _cached(n,o,(()=>_resolveWithPrefixes(o,e,t,n)))},getOwnPropertyDescriptor(t,e){return Reflect.getOwnPropertyDescriptor(t._scopes[0],e)},getPrototypeOf(){return Reflect.getPrototypeOf(t[0])},has(t,e){return getKeysFromAllScopes(t).includes(e)},ownKeys(t){return getKeysFromAllScopes(t)},set(t,e,n){const o=t._storage||(t._storage=r());t[e]=o[e]=n;delete t._keys;return true}})}
/**
 * Returns an Proxy for resolving option values with context.
 * @param proxy - The Proxy returned by `_createResolver`
 * @param context - Context object for scriptable/indexable options
 * @param subProxy - The proxy provided for scriptable options
 * @param descriptorDefaults - Defaults for descriptors
 * @private
 */function _attachContext(t,e,n,o){const r={_cacheable:false,_proxy:t,_context:e,_subProxy:n,_stack:new Set,_descriptors:_descriptors(t,o),setContext:e=>_attachContext(t,e,n,o),override:r=>_attachContext(t.override(r),e,n,o)};return new Proxy(r,{deleteProperty(e,n){delete e[n];delete t[n];return true},get(t,e,n){return _cached(t,e,(()=>_resolveWithContext(t,e,n)))},getOwnPropertyDescriptor(e,n){return e._descriptors.allKeys?Reflect.has(t,n)?{enumerable:true,configurable:true}:void 0:Reflect.getOwnPropertyDescriptor(t,n)},getPrototypeOf(){return Reflect.getPrototypeOf(t)},has(e,n){return Reflect.has(t,n)},ownKeys(){return Reflect.ownKeys(t)},set(e,n,o){t[n]=o;delete e[n];return true}})}function _descriptors(t,e={scriptable:true,indexable:true}){const{_scriptable:n=e.scriptable,_indexable:o=e.indexable,_allKeys:r=e.allKeys}=t;return{allKeys:r,scriptable:n,indexable:o,isScriptable:isFunction(n)?n:()=>n,isIndexable:isFunction(o)?o:()=>o}}const readKey=(t,e)=>t?t+_capitalize(e):e;const needsSubResolver=(t,e)=>isObject(e)&&t!=="adapters"&&(Object.getPrototypeOf(e)===null||e.constructor===Object);function _cached(t,e,n){if(Object.prototype.hasOwnProperty.call(t,e)||e==="constructor")return t[e];const o=n();t[e]=o;return o}function _resolveWithContext(t,e,n){const{_proxy:o,_context:r,_subProxy:s,_descriptors:i}=t;let a=o[e];isFunction(a)&&i.isScriptable(e)&&(a=_resolveScriptable(e,a,t,n));isArray(a)&&a.length&&(a=_resolveArray(e,a,t,i.isIndexable));needsSubResolver(e,a)&&(a=_attachContext(a,r,s&&s[e],i));return a}function _resolveScriptable(t,e,n,o){const{_proxy:r,_context:s,_subProxy:i,_stack:a}=n;if(a.has(t))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+t);a.add(t);let l=e(s,i||o);a.delete(t);needsSubResolver(t,l)&&(l=createSubResolver(r._scopes,r,t,l));return l}function _resolveArray(t,e,n,o){const{_proxy:r,_context:s,_subProxy:i,_descriptors:a}=n;if(typeof s.index!=="undefined"&&o(t))return e[s.index%e.length];if(isObject(e[0])){const n=e;const o=r._scopes.filter((t=>t!==n));e=[];for(const l of n){const n=createSubResolver(o,r,t,l);e.push(_attachContext(n,s,i&&i[t],a))}}return e}function resolveFallback(t,e,n){return isFunction(t)?t(e,n):t}const getScope=(t,e)=>t===true?e:typeof t==="string"?resolveObjectKey(e,t):void 0;function addScopes(t,e,n,o,r){for(const s of e){const e=getScope(n,s);if(e){t.add(e);const s=resolveFallback(e._fallback,n,r);if(typeof s!=="undefined"&&s!==n&&s!==o)return s}else if(e===false&&typeof o!=="undefined"&&n!==o)return null}return false}function createSubResolver(t,e,n,o){const r=e._rootScopes;const s=resolveFallback(e._fallback,n,o);const i=[...t,...r];const a=new Set;a.add(o);let l=addScopesFromKey(a,i,n,s||n,o);if(l===null)return false;if(typeof s!=="undefined"&&s!==n){l=addScopesFromKey(a,i,s,l,o);if(l===null)return false}return _createResolver(Array.from(a),[""],r,s,(()=>subGetTarget(e,n,o)))}function addScopesFromKey(t,e,n,o,r){while(n)n=addScopes(t,e,n,o,r);return n}function subGetTarget(t,e,n){const o=t._getTarget();e in o||(o[e]={});const r=o[e];return isArray(r)&&isObject(n)?n:r||{}}function _resolveWithPrefixes(t,e,n,o){let r;for(const s of e){r=_resolve(readKey(s,t),n);if(typeof r!=="undefined")return needsSubResolver(t,r)?createSubResolver(n,o,t,r):r}}function _resolve(t,e){for(const n of e){if(!n)continue;const e=n[t];if(typeof e!=="undefined")return e}}function getKeysFromAllScopes(t){let e=t._keys;e||(e=t._keys=resolveKeysFromAllScopes(t._scopes));return e}function resolveKeysFromAllScopes(t){const e=new Set;for(const n of t)for(const t of Object.keys(n).filter((t=>!t.startsWith("_"))))e.add(t);return Array.from(e)}function _parseObjectDataRadialScale(t,e,n,o){const{iScale:r}=t;const{key:s="r"}=this._parsing;const i=new Array(o);let a,l,c,u;for(a=0,l=o;a<l;++a){c=a+n;u=e[c];i[a]={r:r.parse(resolveObjectKey(u,s),c)}}return i}const P=Number.EPSILON||1e-14;const getPoint=(t,e)=>e<t.length&&!t[e].skip&&t[e];const getValueAxis=t=>t==="x"?"y":"x";function splineCurve(t,e,n,o){const r=t.skip?e:t;const s=e;const i=n.skip?e:n;const a=distanceBetweenPoints(s,r);const l=distanceBetweenPoints(i,s);let c=a/(a+l);let u=l/(a+l);c=isNaN(c)?0:c;u=isNaN(u)?0:u;const f=o*c;const d=o*u;return{previous:{x:s.x-f*(i.x-r.x),y:s.y-f*(i.y-r.y)},next:{x:s.x+d*(i.x-r.x),y:s.y+d*(i.y-r.y)}}}function monotoneAdjust(t,e,n){const o=t.length;let r,s,i,a,l;let c=getPoint(t,0);for(let u=0;u<o-1;++u){l=c;c=getPoint(t,u+1);if(l&&c)if(almostEquals(e[u],0,P))n[u]=n[u+1]=0;else{r=n[u]/e[u];s=n[u+1]/e[u];a=Math.pow(r,2)+Math.pow(s,2);if(!(a<=9)){i=3/Math.sqrt(a);n[u]=r*i*e[u];n[u+1]=s*i*e[u]}}}}function monotoneCompute(t,e,n="x"){const o=getValueAxis(n);const r=t.length;let s,i,a;let l=getPoint(t,0);for(let c=0;c<r;++c){i=a;a=l;l=getPoint(t,c+1);if(!a)continue;const r=a[n];const u=a[o];if(i){s=(r-i[n])/3;a[`cp1${n}`]=r-s;a[`cp1${o}`]=u-s*e[c]}if(l){s=(l[n]-r)/3;a[`cp2${n}`]=r+s;a[`cp2${o}`]=u+s*e[c]}}}function splineCurveMonotone(t,e="x"){const n=getValueAxis(e);const o=t.length;const r=Array(o).fill(0);const s=Array(o);let i,a,l;let c=getPoint(t,0);for(i=0;i<o;++i){a=l;l=c;c=getPoint(t,i+1);if(l){if(c){const t=c[e]-l[e];r[i]=t!==0?(c[n]-l[n])/t:0}s[i]=a?c?d(r[i-1])!==d(r[i])?0:(r[i-1]+r[i])/2:r[i-1]:r[i]}}monotoneAdjust(t,r,s);monotoneCompute(t,s,e)}function capControlPoint(t,e,n){return Math.max(Math.min(t,n),e)}function capBezierPoints(t,e){let n,o,r,s,i;let a=_isPointInArea(t[0],e);for(n=0,o=t.length;n<o;++n){i=s;s=a;a=n<o-1&&_isPointInArea(t[n+1],e);if(s){r=t[n];if(i){r.cp1x=capControlPoint(r.cp1x,e.left,e.right);r.cp1y=capControlPoint(r.cp1y,e.top,e.bottom)}if(a){r.cp2x=capControlPoint(r.cp2x,e.left,e.right);r.cp2y=capControlPoint(r.cp2y,e.top,e.bottom)}}}}function _updateBezierControlPoints(t,e,n,o,r){let s,i,a,l;e.spanGaps&&(t=t.filter((t=>!t.skip)));if(e.cubicInterpolationMode==="monotone")splineCurveMonotone(t,r);else{let n=o?t[t.length-1]:t[0];for(s=0,i=t.length;s<i;++s){a=t[s];l=splineCurve(n,a,t[Math.min(s+1,i-(o?0:1))%i],e.tension);a.cp1x=l.previous.x;a.cp1y=l.previous.y;a.cp2x=l.next.x;a.cp2y=l.next.y;n=a}}e.capBezierPoints&&capBezierPoints(t,n)}
/**
 * Note: typedefs are auto-exported, so use a made-up `dom` namespace where
 * necessary to avoid duplicates with `export * from './helpers`; see
 * https://github.com/microsoft/TypeScript/issues/46011
 * @typedef { import('../core/core.controller.js').default } dom.Chart
 * @typedef { import('../../types').ChartEvent } ChartEvent
 */function _isDomSupported(){return typeof window!=="undefined"&&typeof document!=="undefined"}function _getParentNode(t){let e=t.parentNode;e&&e.toString()==="[object ShadowRoot]"&&(e=e.host);return e}function parseMaxStyle(t,e,n){let o;if(typeof t==="string"){o=parseInt(t,10);t.indexOf("%")!==-1&&(o=o/100*e.parentNode[n])}else o=t;return o}const getComputedStyle=t=>t.ownerDocument.defaultView.getComputedStyle(t,null);function getStyle(t,e){return getComputedStyle(t).getPropertyValue(e)}const k=["top","right","bottom","left"];function getPositionedStyle(t,e,n){const o={};n=n?"-"+n:"";for(let r=0;r<4;r++){const s=k[r];o[s]=parseFloat(t[e+"-"+s+n])||0}o.width=o.left+o.right;o.height=o.top+o.bottom;return o}const useOffsetPos=(t,e,n)=>(t>0||e>0)&&(!n||!n.shadowRoot)
/**
 * @param e
 * @param canvas
 * @returns Canvas position
 */;function getCanvasPosition(t,e){const n=t.touches;const o=n&&n.length?n[0]:t;const{offsetX:r,offsetY:s}=o;let i=false;let a,l;if(useOffsetPos(r,s,t.target)){a=r;l=s}else{const t=e.getBoundingClientRect();a=o.clientX-t.left;l=o.clientY-t.top;i=true}return{x:a,y:l,box:i}}
/**
 * Gets an event's x, y coordinates, relative to the chart area
 * @param event
 * @param chart
 * @returns x and y coordinates of the event
 */function getRelativePosition(t,e){if("native"in t)return t;const{canvas:n,currentDevicePixelRatio:o}=e;const r=getComputedStyle(n);const s=r.boxSizing==="border-box";const i=getPositionedStyle(r,"padding");const a=getPositionedStyle(r,"border","width");const{x:l,y:c,box:u}=getCanvasPosition(t,n);const f=i.left+(u&&a.left);const d=i.top+(u&&a.top);let{width:h,height:p}=e;if(s){h-=i.width+a.width;p-=i.height+a.height}return{x:Math.round((l-f)/h*n.width/o),y:Math.round((c-d)/p*n.height/o)}}function getContainerSize(t,e,n){let o,r;if(e===void 0||n===void 0){const s=t&&_getParentNode(t);if(s){const t=s.getBoundingClientRect();const i=getComputedStyle(s);const a=getPositionedStyle(i,"border","width");const l=getPositionedStyle(i,"padding");e=t.width-l.width-a.width;n=t.height-l.height-a.height;o=parseMaxStyle(i.maxWidth,s,"clientWidth");r=parseMaxStyle(i.maxHeight,s,"clientHeight")}else{e=t.clientWidth;n=t.clientHeight}}return{width:e,height:n,maxWidth:o||i,maxHeight:r||i}}const round1=t=>Math.round(t*10)/10;function getMaximumSize(t,e,n,o){const r=getComputedStyle(t);const s=getPositionedStyle(r,"margin");const a=parseMaxStyle(r.maxWidth,t,"clientWidth")||i;const l=parseMaxStyle(r.maxHeight,t,"clientHeight")||i;const c=getContainerSize(t,e,n);let{width:u,height:f}=c;if(r.boxSizing==="content-box"){const t=getPositionedStyle(r,"border","width");const e=getPositionedStyle(r,"padding");u-=e.width+t.width;f-=e.height+t.height}u=Math.max(0,u-s.width);f=Math.max(0,o?u/o:f-s.height);u=round1(Math.min(u,a,c.maxWidth));f=round1(Math.min(f,l,c.maxHeight));u&&!f&&(f=round1(u/2));const d=e!==void 0||n!==void 0;if(d&&o&&c.height&&f>c.height){f=c.height;u=round1(Math.floor(f*o))}return{width:u,height:f}}
/**
 * @param chart
 * @param forceRatio
 * @param forceStyle
 * @returns True if the canvas context size or transformation has changed.
 */function retinaScale(t,e,n){const o=e||1;const r=Math.floor(t.height*o);const s=Math.floor(t.width*o);t.height=Math.floor(t.height);t.width=Math.floor(t.width);const i=t.canvas;if(i.style&&(n||!i.style.height&&!i.style.width)){i.style.height=`${t.height}px`;i.style.width=`${t.width}px`}if(t.currentDevicePixelRatio!==o||i.height!==r||i.width!==s){t.currentDevicePixelRatio=o;i.height=r;i.width=s;t.ctx.setTransform(o,0,0,o,0,0);return true}return false}const C=function(){let t=false;try{const e={get passive(){t=true;return false}};if(_isDomSupported()){window.addEventListener("test",null,e);window.removeEventListener("test",null,e)}}catch(t){}return t}();
/**
 * The "used" size is the final value of a dimension property after all calculations have
 * been performed. This method uses the computed style of `element` but returns undefined
 * if the computed style is not expressed in pixels. That can happen in some cases where
 * `element` has a size relative to its parent and this last one is not yet displayed,
 * for example because of `display: none` on a parent node.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/used_value
 * @returns Size in pixels or undefined if unknown.
 */function readUsedSize(t,e){const n=getStyle(t,e);const o=n&&n.match(/^(\d+)(\.\d+)?px$/);return o?+o[1]:void 0}function _pointInLine(t,e,n,o){return{x:t.x+n*(e.x-t.x),y:t.y+n*(e.y-t.y)}}function _steppedInterpolation(t,e,n,o){return{x:t.x+n*(e.x-t.x),y:o==="middle"?n<.5?t.y:e.y:o==="after"?n<1?t.y:e.y:n>0?e.y:t.y}}function _bezierInterpolation(t,e,n,o){const r={x:t.cp2x,y:t.cp2y};const s={x:e.cp1x,y:e.cp1y};const i=_pointInLine(t,r,n);const a=_pointInLine(r,s,n);const l=_pointInLine(s,e,n);const c=_pointInLine(i,a,n);const u=_pointInLine(a,l,n);return _pointInLine(c,u,n)}const getRightToLeftAdapter=function(t,e){return{x(n){return t+t+e-n},setWidth(t){e=t},textAlign(t){return t==="center"?t:t==="right"?"left":"right"},xPlus(t,e){return t-e},leftForLtr(t,e){return t-e}}};const getLeftToRightAdapter=function(){return{x(t){return t},setWidth(t){},textAlign(t){return t},xPlus(t,e){return t+e},leftForLtr(t,e){return t}}};function getRtlAdapter(t,e,n){return t?getRightToLeftAdapter(e,n):getLeftToRightAdapter()}function overrideTextDirection(t,e){let n,o;if(e==="ltr"||e==="rtl"){n=t.canvas.style;o=[n.getPropertyValue("direction"),n.getPropertyPriority("direction")];n.setProperty("direction",e,"important");t.prevTextDirection=o}}function restoreTextDirection(t,e){if(e!==void 0){delete t.prevTextDirection;t.canvas.style.setProperty("direction",e[0],e[1])}}function propertyFn(t){return t==="angle"?{between:_angleBetween,compare:_angleDiff,normalize:_normalizeAngle}:{between:_isBetween,compare:(t,e)=>t-e,normalize:t=>t}}function normalizeSegment({start:t,end:e,count:n,loop:o,style:r}){return{start:t%n,end:e%n,loop:o&&(e-t+1)%n===0,style:r}}function getSegment(t,e,n){const{property:o,start:r,end:s}=n;const{between:i,normalize:a}=propertyFn(o);const l=e.length;let{start:c,end:u,loop:f}=t;let d,h;if(f){c+=l;u+=l;for(d=0,h=l;d<h;++d){if(!i(a(e[c%l][o]),r,s))break;c--;u--}c%=l;u%=l}u<c&&(u+=l);return{start:c,end:u,loop:f,style:t.style}}function _boundSegment(t,e,n){if(!n)return[t];const{property:o,start:r,end:s}=n;const i=e.length;const{compare:a,between:l,normalize:c}=propertyFn(o);const{start:u,end:f,loop:d,style:h}=getSegment(t,e,n);const p=[];let g=false;let y=null;let m,b,x;const startIsBefore=()=>l(r,x,m)&&a(r,x)!==0;const endIsBefore=()=>a(s,m)===0||l(s,x,m);const shouldStart=()=>g||startIsBefore();const shouldStop=()=>!g||endIsBefore();for(let t=u,n=u;t<=f;++t){b=e[t%i];if(!b.skip){m=c(b[o]);if(m!==x){g=l(m,r,s);y===null&&shouldStart()&&(y=a(m,r)===0?t:n);if(y!==null&&shouldStop()){p.push(normalizeSegment({start:y,end:t,loop:d,count:i,style:h}));y=null}n=t;x=m}}}y!==null&&p.push(normalizeSegment({start:y,end:f,loop:d,count:i,style:h}));return p}function _boundSegments(t,e){const n=[];const o=t.segments;for(let r=0;r<o.length;r++){const s=_boundSegment(o[r],t.points,e);s.length&&n.push(...s)}return n}function findStartAndEnd(t,e,n,o){let r=0;let s=e-1;if(n&&!o)while(r<e&&!t[r].skip)r++;while(r<e&&t[r].skip)r++;r%=e;n&&(s+=r);while(s>r&&t[s%e].skip)s--;s%=e;return{start:r,end:s}}function solidSegments(t,e,n,o){const r=t.length;const s=[];let i=e;let a=t[e];let l;for(l=e+1;l<=n;++l){const n=t[l%r];if(n.skip||n.stop){if(!a.skip){o=false;s.push({start:e%r,end:(l-1)%r,loop:o});e=i=n.stop?l:null}}else{i=l;a.skip&&(e=l)}a=n}i!==null&&s.push({start:e%r,end:i%r,loop:o});return s}function _computeSegments(t,e){const n=t.points;const o=t.options.spanGaps;const r=n.length;if(!r)return[];const s=!!t._loop;const{start:i,end:a}=findStartAndEnd(n,r,s,o);if(o===true)return splitByStyles(t,[{start:i,end:a,loop:s}],n,e);const l=a<i?a+r:a;const c=!!t._fullLoop&&i===0&&a===r-1;return splitByStyles(t,solidSegments(n,i,l,c),n,e)}function splitByStyles(t,e,n,o){return o&&o.setContext&&n?doSplitByStyles(t,e,n,o):e}function doSplitByStyles(t,e,n,o){const r=t._chart.getContext();const s=readStyle(t.options);const{_datasetIndex:i,options:{spanGaps:a}}=t;const l=n.length;const c=[];let u=s;let f=e[0].start;let d=f;function addStyle(t,e,o,r){const s=a?-1:1;if(t!==e){t+=l;while(n[t%l].skip)t-=s;while(n[e%l].skip)e+=s;if(t%l!==e%l){c.push({start:t%l,end:e%l,loop:o,style:r});u=r;f=e%l}}}for(const t of e){f=a?f:t.start;let e=n[f%l];let s;for(d=f+1;d<=t.end;d++){const a=n[d%l];s=readStyle(o.setContext(createContext(r,{type:"segment",p0:e,p1:a,p0DataIndex:(d-1)%l,p1DataIndex:d%l,datasetIndex:i})));styleChanged(s,u)&&addStyle(f,d-1,t.loop,u);e=a;u=s}f<d-1&&addStyle(f,d-1,t.loop,u)}return c}function readStyle(t){return{backgroundColor:t.backgroundColor,borderCapStyle:t.borderCapStyle,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderJoinStyle:t.borderJoinStyle,borderWidth:t.borderWidth,borderColor:t.borderColor}}function styleChanged(t,e){if(!e)return false;const n=[];const replacer=function(t,e){if(!isPatternOrGradient(e))return e;n.includes(e)||n.push(e);return n.indexOf(e)};return JSON.stringify(t,replacer)!==JSON.stringify(e,replacer)}export{_alignPixel as $,_rlookupByKey as A,_lookupByKey as B,_isPointInArea as C,getAngleFromPoint as D,getRelativePosition as E,toPadding as F,each as G,l as H,readUsedSize as I,C as J,_getParentNode as K,throttled as L,getMaximumSize as M,_isDomSupported as N,_factorize as O,o as P,toFont as Q,_toLeftRightCenter as R,_alignStartEnd as S,_ as T,finiteOrDefault as U,callback as V,_addGrace as W,_limitValue as X,toDegrees as Y,_measureText as Z,_arrayUnique as _,resolve as a,fontString as a$,_int16Range as a0,clipArea as a1,renderText as a2,unclipArea as a3,v as a4,merge as a5,_capitalize as a6,mergeIf as a7,S as a8,isFunction as a9,getRtlAdapter as aA,drawPointLegend as aB,overrideTextDirection as aC,_textX as aD,restoreTextDirection as aE,distanceBetweenPoints as aF,noop as aG,niceNum as aH,almostWhole as aI,almostEquals as aJ,_decimalPlaces as aK,_setMinAndMaxByKey as aL,f as aM,_longestText as aN,_lookup as aO,_filterBetween as aP,i as aQ,s as aR,c as aS,a as aT,u as aU,_angleDiff as aV,_deprecated as aW,_merger as aX,_mergerIf as aY,_splitKey as aZ,clone as a_,_attachContext as aa,_createResolver as ab,_descriptors as ac,e as ad,debounce as ae,retinaScale as af,clearCanvas as ag,setsEqual as ah,_elementsEqual as ai,_isClickEvent as aj,_readValueToProps as ak,_isBetween as al,_steppedLineTo as am,_bezierCurveTo as an,_steppedInterpolation as ao,_bezierInterpolation as ap,_pointInLine as aq,_updateBezierControlPoints as ar,_computeSegments as as,_boundSegments as at,drawPoint as au,toTRBL as av,toTRBLCorners as aw,addRoundedRectPath as ax,_boundSegment as ay,_normalizeAngle as az,isArray as b,getHoverColor as b0,getStyle as b1,isPatternOrGradient as b2,splineCurve as b3,splineCurveMonotone as b4,toFontString as b5,toLineHeight as b6,color as c,w as d,g as e,isNumberFinite as f,createContext as g,resolveObjectKey as h,isObject as i,defined as j,isNullOrUndef as k,listenArrayEvents as l,r as m,_angleBetween as n,toPercentage as o,toDimension as p,formatNumber as q,p as r,d as s,toRadians as t,unlistenArrayEvents as u,valueOrDefault as v,_getStartAndCountOfVisiblePoints as w,_scaleRangesChanged as x,isNumber as y,_parseObjectDataRadialScale as z};
//# sourceMappingURL=6La3kzg5.js.map
