"use strict";(self["webpackChunksvo"]=self["webpackChunksvo"]||[]).push([[745,196,496,601,189,419],{557:function(t,e,r){r.r(e),r.d(e,{default:function(){return R}});var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-row",[r("b-col",{attrs:{cols:"4"}},[r("b-form",{on:{submit:function(e){return e.preventDefault(),t.updateSearchParams.apply(null,arguments)}}},[r("base-datetime-range",{attrs:{label:"Observation date","min-label":"Start","max-label":"End"},model:{value:t.searchFilter.dateRange,callback:function(e){t.$set(t.searchFilter,"dateRange",e)},expression:"searchFilter.dateRange"}}),r("b-form-group",{attrs:{label:"Map type","label-for":"mapTypes"}},[r("b-form-select",{attrs:{id:"mapTypes",options:t.searchFilter.mapTypeOptions,multiple:""},model:{value:t.searchFilter.mapTypes,callback:function(e){t.$set(t.searchFilter,"mapTypes",e)},expression:"searchFilter.mapTypes"}})],1),r("b-overlay",{attrs:{show:t.showOverlay,rounded:"sm"}},[r("b-form-group",{attrs:{label:"Tags","label-for":"tags"}},[r("b-form-select",{attrs:{id:"tags",options:t.tagOptions,multiple:""},model:{value:t.searchFilter.tags,callback:function(e){t.$set(t.searchFilter,"tags",e)},expression:"searchFilter.tags"}})],1)],1),r("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Search")])],1)],1),r("b-col",{attrs:{cols:"8"}},[r("metadata-list",{attrs:{dataset:t.dataset,"search-params":t.searchParams,"default-columns":t.defaultColumns}})],1)],1)},n=[],i=r(2032),o=r(8932),s=r(6133),u=r(2751),c=r(3263),l=r(460),f=r(7349),p=r(796),h=r(6777),m=r(3796),d=(r(9826),r(1539),r(2156)),y=r(9761),g=[{value:"em",text:"Emission measure"},{value:"temp",text:"Temperature"},{value:"width",text:"Thermal width"},{value:"chi2",text:"Chi2"}],b=function(t){(0,p.Z)(r,t);var e=(0,h.Z)(r);function r(t){var a;return(0,s.Z)(this,r),a=e.call(this,t),(0,m.Z)((0,c.Z)(a),"mapTypeOptions",g),(0,m.Z)((0,c.Z)(a),"mapTypes",[]),t&&Array.isArray(t.mapTypes)&&(a.mapTypes=(0,o.Z)(t.mapTypes)),a}return(0,u.Z)(r,[{key:"getSearchParams",value:function(){var t,e=(0,l.Z)((0,f.Z)(r.prototype),"getSearchParams",this).call(this),a=(0,i.Z)(this.mapTypes);try{for(a.s();!(t=a.n()).done;){var n=t.value;e.append("granule_gid__in",n)}}catch(o){a.e(o)}finally{a.f()}return e}}]),r}(y.Z),v={name:"GaiaDem",mixins:[d["default"]],data:function(){return{searchFilter:new b(this.initialSearchFilter),defaultColumns:[{label:"Observation date",key:"date_beg",formatter:this.$utils.formatDate},{label:"Map Type",key:"granule_gid",formatter:this.mapTypeFullName}]}},methods:{mapTypeFullName:function(t){var e=g.find((function(e){return e.value==t}));return e?e.text:t}}},O=v,Z=r(1001),w=(0,Z.Z)(O,a,n,!1,null,null,null),R=w.exports},9826:function(t,e,r){var a=r(2109),n=r(2092).find,i=r(1223),o="find",s=!0;o in[]&&Array(1)[o]((function(){s=!1})),a({target:"Array",proto:!0,forced:s},{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),i(o)},2156:function(t,e,r){r.r(e);var a=r(6198),n=(r(5666),r(1539),r(8783),r(3948),r(1637),r(8309),r(1249),r(3920)),i=r(9761);e["default"]={components:{MetadataList:n["default"]},props:{dataset:{type:Object,required:!0},initialSearchFilter:{type:Object,required:!1,default:null}},data:function(){return{searchFilter:new i.Z(this.initialSearchFilter),searchParams:new URLSearchParams,tagOptions:[],defaultColumns:[{label:"Observation date",key:"date_beg",formatter:this.$utils.formatDate},{label:"Wavelength",key:"wavemin"}],showOverlay:!1}},created:function(){var t=(0,a.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.showOverlay=!0,t.next=3,this.loadTagOptions();case 3:this.showOverlay=!1;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{updateSearchParams:function(){this.searchParams=this.searchFilter.getSearchParams()},loadTagOptions:function(){var t=(0,a.Z)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$SVO.tag.getAll({dataset:this.dataset.name});case 3:e=t.sent,this.tagOptions=e.map((function(t){return{value:t.name,text:t.name}})),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),this.$displayErrorMessage(this.$SVO.parseError(t.t0));case 10:case"end":return t.stop()}}),t,this,[[0,7]])})));function e(){return t.apply(this,arguments)}return e}()}}},9761:function(t,e,r){r.d(e,{Z:function(){return u}});var a=r(2032),n=r(8932),i=r(6133),o=r(2751),s=r(3796),u=(r(4916),r(4765),r(1539),r(8783),r(3948),r(1637),function(){function t(e){(0,i.Z)(this,t),(0,s.Z)(this,"tags",[]),(0,s.Z)(this,"dateRange",{min:null,max:null}),e&&(Array.isArray(e.tags)&&(this.tags=(0,n.Z)(e.tags)),e.dateRange&&(this.dateRange={min:e.dateRange.min,max:e.dateRange.max}),this.search=e.search)}return(0,o.Z)(t,[{key:"getSearchParams",value:function(){var t,e=new URLSearchParams,r=(0,a.Z)(this.tags);try{for(r.s();!(t=r.n()).done;){var n=t.value;e.append("tags__in",n)}}catch(i){r.e(i)}finally{r.f()}return this.dateRange.min&&e.set("date_end__gte",this.dateRange.min.toISOString()),this.dateRange.max&&e.set("date_beg__lte",this.dateRange.max.toISOString()),this.search&&e.set("search",this.search),e}}]),t}())},3263:function(t,e,r){function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}r.d(e,{Z:function(){return a}})},6777:function(t,e,r){r.d(e,{Z:function(){return u}});var a=r(7349);function n(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}var o=r(3263);function s(t,e){if(e&&("object"===i(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return(0,o.Z)(t)}function u(t){var e=n();return function(){var r,n=(0,a.Z)(t);if(e){var i=(0,a.Z)(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return s(this,r)}}},460:function(t,e,r){r.d(e,{Z:function(){return i}});var a=r(7349);function n(t,e){while(!Object.prototype.hasOwnProperty.call(t,e))if(t=(0,a.Z)(t),null===t)break;return t}function i(){return i="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(t,e,r){var a=n(t,e);if(a){var i=Object.getOwnPropertyDescriptor(a,e);return i.get?i.get.call(arguments.length<3?t:r):i.value}},i.apply(this,arguments)}},7349:function(t,e,r){function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},a(t)}r.d(e,{Z:function(){return a}})},796:function(t,e,r){function a(t,e){return a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},a(t,e)}function n(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&a(t,e)}r.d(e,{Z:function(){return n}})}}]);
//# sourceMappingURL=745.fea57119.js.map