"use strict";(self["webpackChunksvo"]=self["webpackChunksvo"]||[]).push([[495,496,601],{2093:function(e,t,n){n.r(t),n.d(t,{default:function(){return R}});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("metadata",{attrs:{dataset:e.dataset,"search-filter":e.searchFilter,"default-columns":e.defaultColumns}},[n("base-datetime-range",{attrs:{label:"Observation date","min-label":"Start","max-label":"End"},model:{value:e.searchFilter.dateRange,callback:function(t){e.$set(e.searchFilter,"dateRange",t)},expression:"searchFilter.dateRange"}}),n("b-form-group",{attrs:{label:"Wavelength","label-for":"wavelengths"}},[n("b-form-select",{attrs:{id:"wavelengths",options:e.searchFilter.wavelengthOptions,multiple:""},model:{value:e.searchFilter.wavelengths,callback:function(t){e.$set(e.searchFilter,"wavelengths",t)},expression:"searchFilter.wavelengths"}})],1),n("b-form-group",{attrs:{description:"Only display data with a quality of 0"}},[n("b-form-checkbox",{model:{value:e.searchFilter.bestQuality,callback:function(t){e.$set(e.searchFilter,"bestQuality",t)},expression:"searchFilter.bestQuality"}},[e._v("Best quality only")])],1)],1)},a=[],l=n(2032),o=n(8932),i=n(6133),u=n(2751),c=n(3263),s=n(460),f=n(7349),h=n(796),y=n(6777),p=n(3796),v=(n(1249),n(7327),n(1539),n(2156)),b=n(9761),d=[94,131,171,193,211,304,335,1600,1700,4500],g=function(e){(0,h.Z)(n,e);var t=(0,y.Z)(n);function n(e){var r;if((0,i.Z)(this,n),r=t.call(this,e),(0,p.Z)((0,c.Z)(r),"wavelengthOptions",d.map((function(e){return{value:e,text:"".concat(e," Å")}}))),(0,p.Z)((0,c.Z)(r),"wavelengths",[]),(0,p.Z)((0,c.Z)(r),"bestQuality",void 0),e){if(Array.isArray(e.wavelengths))r.wavelengths=(0,o.Z)(e.wavelengths);else if(e.wavelengthRange){var a=null!=e.wavelengthRange.min?10*e.wavelengthRange.min:-1/0,l=null!=e.wavelengthRange.max?10*e.wavelengthRange.max:1/0;(isFinite(a)||isFinite(l))&&(r.wavelengths=d.filter((function(e){return a<=e&&e<=l})))}r.bestQuality=e.bestQuality}return r}return(0,u.Z)(n,[{key:"getSearchParams",value:function(){var e,t=(0,s.Z)((0,f.Z)(n.prototype),"getSearchParams",this).call(this),r=(0,l.Z)(this.wavelengths);try{for(r.s();!(e=r.n()).done;){var a=e.value;t.append("wavelnth__in",a)}}catch(o){r.e(o)}finally{r.f()}return this.bestQuality&&t.set("quality",0),t}}]),n}(b.Z),m={name:"AiaLevel1",mixins:[v["default"]],data:function(){return{searchFilter:new g(this.initialSearchFilter),defaultColumns:[{label:"Observation date",key:"date_obs",formatter:this.$utils.formatDate},{label:"Wavelength (Å)",key:"wavelnth"},{label:"Quality",key:"quality"}]}}},w=m,Z=n(1001),O=(0,Z.Z)(w,r,a,!1,null,null,null),R=O.exports},3263:function(e,t,n){function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:function(){return r}})},6777:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(7349);function a(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}var o=n(3263);function i(e,t){if(t&&("object"===l(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return(0,o.Z)(e)}function u(e){var t=a();return function(){var n,a=(0,r.Z)(e);if(t){var l=(0,r.Z)(this).constructor;n=Reflect.construct(a,arguments,l)}else n=a.apply(this,arguments);return i(this,n)}}},460:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7349);function a(e,t){while(!Object.prototype.hasOwnProperty.call(e,t))if(e=(0,r.Z)(e),null===e)break;return e}function l(){return l="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=a(e,t);if(r){var l=Object.getOwnPropertyDescriptor(r,t);return l.get?l.get.call(arguments.length<3?e:n):l.value}},l.apply(this,arguments)}},7349:function(e,t,n){function r(e){return r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(e)}n.d(t,{Z:function(){return r}})},796:function(e,t,n){function r(e,t){return r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(e,t)}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&r(e,t)}n.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=AiaLevel1.f04346db.js.map