"use strict";(self["webpackChunksvo"]=self["webpackChunksvo"]||[]).push([[344,496,601,873,673,339],{1869:function(t,e,r){r.r(e),r.d(e,{default:function(){return w}});var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("metadata",{attrs:{dataset:t.dataset,"search-filter":t.searchFilter,"default-columns":t.defaultColumns}},[r("base-datetime-range",{attrs:{label:"Observation date","min-label":"Start","max-label":"End"},model:{value:t.searchFilter.dateRange,callback:function(e){t.$set(t.searchFilter,"dateRange",e)},expression:"searchFilter.dateRange"}}),r("b-form-group",{attrs:{label:"Observation target","label-for":"observationTargets"}},[r("b-form-select",{attrs:{id:"observationTargets",options:t.searchFilter.observationTargetOptions,multiple:""},model:{value:t.searchFilter.observationTargets,callback:function(e){t.$set(t.searchFilter,"observationTargets",e)},expression:"searchFilter.observationTargets"}})],1)],1)},o=[],a=r(2032),i=r(8932),u=r(6133),l=r(2751),c=r(3263),s=r(460),f=r(7349),b=r(796),p=r(6777),v=r(3796),y=r(2156),h=r(9761),d=[{value:"AR",text:"Active Region"},{value:"CH",text:"Coronal Hole"},{value:"FS",text:"Flare"},{value:"QR",text:"Quiet Region"}],g=function(t){(0,b.Z)(r,t);var e=(0,p.Z)(r);function r(t){var n;return(0,u.Z)(this,r),n=e.call(this,t),(0,v.Z)((0,c.Z)(n),"observationTargetOptions",d),(0,v.Z)((0,c.Z)(n),"observationTargets",[]),t&&Array.isArray(t.observationTargets)&&(n.observationTargets=(0,i.Z)(t.observationTargets)),n}return(0,l.Z)(r,[{key:"getSearchParams",value:function(){var t,e=(0,s.Z)((0,f.Z)(r.prototype),"getSearchParams",this).call(this),n=(0,a.Z)(this.observationTargets);try{for(n.s();!(t=n.n()).done;){var o=t.value;e.append("target__in",o)}}catch(i){n.e(i)}finally{n.f()}return e}}]),r}(h.Z),m={name:"Xrt",mixins:[y["default"]],data:function(){return{searchFilter:new g(this.initialSearchFilter),defaultColumns:[{label:"Observation date",key:"date_obs",formatter:this.$utils.formatDate},{label:"NOAA A.R. number",key:"noaa_num"},{label:"Observation target",key:"target"}]}}},Z=m,O=r(1001),R=(0,O.Z)(Z,n,o,!1,null,null,null),w=R.exports},3263:function(t,e,r){function n(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}r.d(e,{Z:function(){return n}})},6777:function(t,e,r){r.d(e,{Z:function(){return l}});var n=r(7349);function o(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}var i=r(3263);function u(t,e){if(e&&("object"===a(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return(0,i.Z)(t)}function l(t){var e=o();return function(){var r,o=(0,n.Z)(t);if(e){var a=(0,n.Z)(this).constructor;r=Reflect.construct(o,arguments,a)}else r=o.apply(this,arguments);return u(this,r)}}},460:function(t,e,r){r.d(e,{Z:function(){return a}});var n=r(7349);function o(t,e){while(!Object.prototype.hasOwnProperty.call(t,e))if(t=(0,n.Z)(t),null===t)break;return t}function a(){return a="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(t,e,r){var n=o(t,e);if(n){var a=Object.getOwnPropertyDescriptor(n,e);return a.get?a.get.call(arguments.length<3?t:r):a.value}},a.apply(this,arguments)}},7349:function(t,e,r){function n(t){return n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(t)}r.d(e,{Z:function(){return n}})},796:function(t,e,r){function n(t,e){return n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(t,e)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&n(t,e)}r.d(e,{Z:function(){return o}})}}]);
//# sourceMappingURL=344.8fef1a98.js.map