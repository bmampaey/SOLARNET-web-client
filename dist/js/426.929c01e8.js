"use strict";(self["webpackChunksvo"]=self["webpackChunksvo"]||[]).push([[426,496,601,873,189,419],{5921:function(t,e,r){r.r(e),r.d(e,{default:function(){return w}});var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-row",[r("b-col",{attrs:{cols:"4"}},[r("b-form",{on:{submit:function(e){return e.preventDefault(),t.updateSearchParams.apply(null,arguments)}}},[r("base-datetime-range",{attrs:{label:"Observation date","min-label":"Start","max-label":"End"},model:{value:t.searchFilter.dateRange,callback:function(e){t.$set(t.searchFilter,"dateRange",e)},expression:"searchFilter.dateRange"}}),r("b-form-group",{attrs:{label:"Observation target","label-for":"observationTargets"}},[r("b-form-select",{attrs:{id:"observationTargets",options:t.searchFilter.observationTargetOptions,multiple:""},model:{value:t.searchFilter.observationTargets,callback:function(e){t.$set(t.searchFilter,"observationTargets",e)},expression:"searchFilter.observationTargets"}})],1),r("b-overlay",{attrs:{show:t.showOverlay,rounded:"sm"}},[r("b-form-group",{attrs:{label:"Tags","label-for":"tags"}},[r("b-form-select",{attrs:{id:"tags",options:t.tagOptions,multiple:""},model:{value:t.searchFilter.tags,callback:function(e){t.$set(t.searchFilter,"tags",e)},expression:"searchFilter.tags"}})],1)],1),r("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Search")])],1)],1),r("b-col",{attrs:{cols:"8"}},[r("metadata-list",{attrs:{dataset:t.dataset,"search-params":t.searchParams,"default-columns":t.defaultColumns}})],1)],1)},n=[],o=r(2032),i=r(8932),s=r(6133),u=r(2751),c=r(3263),l=r(460),f=r(7349),h=r(796),p=r(6777),d=r(3796),b=r(2156),g=r(9761),m=[{value:"AR",text:"Active Region"},{value:"CH",text:"Coronal Hole"},{value:"FS",text:"Flare"},{value:"QR",text:"Quiet Region"}],v=function(t){(0,h.Z)(r,t);var e=(0,p.Z)(r);function r(t){var a;return(0,s.Z)(this,r),a=e.call(this,t),(0,d.Z)((0,c.Z)(a),"observationTargetOptions",m),(0,d.Z)((0,c.Z)(a),"observationTargets",[]),t&&Array.isArray(t.observationTargets)&&(a.observationTargets=(0,i.Z)(t.observationTargets)),a}return(0,u.Z)(r,[{key:"getSearchParams",value:function(){var t,e=(0,l.Z)((0,f.Z)(r.prototype),"getSearchParams",this).call(this),a=(0,o.Z)(this.observationTargets);try{for(a.s();!(t=a.n()).done;){var n=t.value;e.append("target__in",n)}}catch(i){a.e(i)}finally{a.f()}return e}}]),r}(g.Z),y={name:"Xrt",mixins:[b["default"]],data:function(){return{searchFilter:new v(this.initialSearchFilter),defaultColumns:[{label:"Observation date",key:"date_obs",formatter:this.$utils.formatDate},{label:"NOAA A.R. number",key:"noaa_num"},{label:"Observation target",key:"target"}]}}},O=y,Z=r(1001),R=(0,Z.Z)(O,a,n,!1,null,null,null),w=R.exports},2156:function(t,e,r){r.r(e);var a=r(6198),n=(r(5666),r(1539),r(8783),r(3948),r(1637),r(8309),r(1249),r(3920)),o=r(9761);e["default"]={components:{MetadataList:n["default"]},props:{dataset:{type:Object,required:!0},initialSearchFilter:{type:Object,required:!1,default:null}},data:function(){return{searchFilter:new o.Z(this.initialSearchFilter),searchParams:new URLSearchParams,tagOptions:[],defaultColumns:[{label:"Observation date",key:"date_beg",formatter:this.$utils.formatDate},{label:"Wavelength",key:"wavemin"}],showOverlay:!1}},created:function(){var t=(0,a.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.showOverlay=!0,t.next=3,this.loadTagOptions();case 3:this.showOverlay=!1;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{updateSearchParams:function(){this.searchParams=this.searchFilter.getSearchParams()},loadTagOptions:function(){var t=(0,a.Z)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$SVO.tag.getAll({dataset:this.dataset.name});case 3:e=t.sent,this.tagOptions=e.map((function(t){return{value:t.name,text:t.name}})),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),this.$displayErrorMessage(this.$SVO.parseError(t.t0));case 10:case"end":return t.stop()}}),t,this,[[0,7]])})));function e(){return t.apply(this,arguments)}return e}()}}},9761:function(t,e,r){r.d(e,{Z:function(){return u}});var a=r(2032),n=r(8932),o=r(6133),i=r(2751),s=r(3796),u=(r(4916),r(4765),r(1539),r(8783),r(3948),r(1637),function(){function t(e){(0,o.Z)(this,t),(0,s.Z)(this,"tags",[]),(0,s.Z)(this,"dateRange",{min:null,max:null}),e&&(Array.isArray(e.tags)&&(this.tags=(0,n.Z)(e.tags)),e.dateRange&&(this.dateRange={min:e.dateRange.min,max:e.dateRange.max}),this.search=e.search)}return(0,i.Z)(t,[{key:"getSearchParams",value:function(){var t,e=new URLSearchParams,r=(0,a.Z)(this.tags);try{for(r.s();!(t=r.n()).done;){var n=t.value;e.append("tags__in",n)}}catch(o){r.e(o)}finally{r.f()}return this.dateRange.min&&e.set("date_end__gte",this.dateRange.min.toISOString()),this.dateRange.max&&e.set("date_beg__lte",this.dateRange.max.toISOString()),this.search&&e.set("search",this.search),e}}]),t}())},3263:function(t,e,r){function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}r.d(e,{Z:function(){return a}})},6777:function(t,e,r){r.d(e,{Z:function(){return u}});var a=r(7349);function n(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}var i=r(3263);function s(t,e){if(e&&("object"===o(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return(0,i.Z)(t)}function u(t){var e=n();return function(){var r,n=(0,a.Z)(t);if(e){var o=(0,a.Z)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return s(this,r)}}},460:function(t,e,r){r.d(e,{Z:function(){return o}});var a=r(7349);function n(t,e){while(!Object.prototype.hasOwnProperty.call(t,e))if(t=(0,a.Z)(t),null===t)break;return t}function o(){return o="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(t,e,r){var a=n(t,e);if(a){var o=Object.getOwnPropertyDescriptor(a,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},o.apply(this,arguments)}},7349:function(t,e,r){function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},a(t)}r.d(e,{Z:function(){return a}})},796:function(t,e,r){function a(t,e){return a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},a(t,e)}function n(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&a(t,e)}r.d(e,{Z:function(){return n}})}}]);
//# sourceMappingURL=426.929c01e8.js.map