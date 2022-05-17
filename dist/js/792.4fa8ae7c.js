"use strict";(self["webpackChunksvo"]=self["webpackChunksvo"]||[]).push([[792,836,882,496,601,94,930,189,807,161,419],{3160:function(t,e,r){r.r(e),r.d(e,{default:function(){return S}});var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-row",[r("b-col",{attrs:{cols:"4"}},[r("b-form",{on:{submit:function(e){return e.preventDefault(),t.updateSearchParams.apply(null,arguments)}}},[r("base-datetime-range",{attrs:{label:"Observation date","min-label":"Start","max-label":"End"},model:{value:t.searchFilter.dateRange,callback:function(e){t.$set(t.searchFilter,"dateRange",e)},expression:"searchFilter.dateRange"}}),r("b-form-group",{attrs:{label:"Observation mode","label-for":"observationModes"}},[r("b-form-select",{attrs:{id:"observationModes",options:t.searchFilter.observationModeOptions,multiple:""},model:{value:t.searchFilter.observationModes,callback:function(e){t.$set(t.searchFilter,"observationModes",e)},expression:"searchFilter.observationModes"}})],1),t.tags.length?r("tag-selector",{attrs:{tags:t.tags},model:{value:t.searchFilter.tags,callback:function(e){t.$set(t.searchFilter,"tags",e)},expression:"searchFilter.tags"}}):t._e(),r("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Search")])],1)],1),r("b-col",{attrs:{cols:"8"}},[r("metadata-list",{attrs:{dataset:t.dataset,"search-params":t.searchParams,tags:t.tags,keywords:t.keywords,"default-columns":t.defaultColumns}})],1)],1)},a=[],o=r(2032),s=r(8932),i=r(6133),u=r(2751),c=r(3263),l=r(460),f=r(7349),d=r(796),p=r(6777),h=r(3796),m=r(2156),b=r(9761),g=["Fixed off-pointing","Variable off-pointing","Sun centered"],y=function(t){(0,d.Z)(r,t);var e=(0,p.Z)(r);function r(t){var n;return(0,i.Z)(this,r),n=e.call(this,t),(0,h.Z)((0,c.Z)(n),"observationModeOptions",g),(0,h.Z)((0,c.Z)(n),"observationModes",[]),t&&Array.isArray(t.observationModes)&&(n.observationModes=(0,s.Z)(t.observationModes)),n}return(0,u.Z)(r,[{key:"getSearchParams",value:function(){var t,e=(0,l.Z)((0,f.Z)(r.prototype),"getSearchParams",this).call(this),n=(0,o.Z)(this.observationModes);try{for(n.s();!(t=n.n()).done;){var a=t.value;e.append("obs_mode__in",a)}}catch(s){n.e(s)}finally{n.f()}return e}}]),r}(b.Z),v={name:"SwapLevel1",mixins:[m["default"]],data:function(){return{searchFilter:new y(this.initialSearchFilter),defaultColumns:[{label:"Observation date",key:"date_obs",formatter:this.$utils.formatDate},{label:"Observation mode",key:"obs_mode"}]}}},Z=v,w=r(1001),O=(0,w.Z)(Z,n,a,!1,null,null,null),S=O.exports},4945:function(t,e,r){r.r(e),r.d(e,{default:function(){return c}});var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-form-group",{attrs:{label:"Tags","label-for":t.inputId}},[r("b-form-select",{attrs:{id:t.inputId,value:t.value,options:t.tagOptions,multiple:""},on:{input:function(e){return t.$emit("input",e.target.value)}}})],1)},a=[],o=(r(1249),r(8309),{name:"TagSelector",props:{value:{type:Array,required:!0},tags:{type:Array,required:!0}},data:function(){return{inputId:this.$utils.getUniqueId()}},computed:{tagOptions:function(){return this.tags.map((function(t){return{value:t.name,text:t.name}}))}}}),s=o,i=r(1001),u=(0,i.Z)(s,n,a,!1,null,null,null),c=u.exports},2156:function(t,e,r){r.r(e);var n=r(6198),a=(r(5666),r(1539),r(8783),r(3948),r(1637),r(8309),r(9252)),o=r(4945),s=r(9761);e["default"]={components:{MetadataList:a["default"],TagSelector:o["default"]},props:{dataset:{type:Object,required:!0},initialSearchFilter:{type:Object,required:!1,default:null}},data:function(){return{searchFilter:new s.Z(this.initialSearchFilter),searchParams:new URLSearchParams,tags:[],keywords:[],defaultColumns:[{label:"Observation date",key:"date_beg",formatter:this.$utils.formatDate},{label:"Wavelength",key:"wavemin"}]}},created:function(){this.loadTags(),this.loadKeywords()},methods:{updateSearchParams:function(){this.searchParams=this.searchFilter.getSearchParams()},loadTags:function(){var t=(0,n.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$SVO.tag.getAll({dataset:this.dataset.name});case 3:this.tags=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),this.$displayErrorMessage(this.$SVO.parseError(t.t0));case 9:case"end":return t.stop()}}),t,this,[[0,6]])})));function e(){return t.apply(this,arguments)}return e}(),loadKeywords:function(){var t=(0,n.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$SVO.keyword.getAll({dataset__name:this.dataset.name});case 3:this.keywords=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),this.$displayErrorMessage(this.$SVO.parseError(t.t0));case 9:case"end":return t.stop()}}),t,this,[[0,6]])})));function e(){return t.apply(this,arguments)}return e}()}}},9761:function(t,e,r){r.d(e,{Z:function(){return u}});var n=r(2032),a=r(8932),o=r(6133),s=r(2751),i=r(3796),u=(r(4916),r(4765),r(1539),r(8783),r(3948),r(1637),function(){function t(e){(0,o.Z)(this,t),(0,i.Z)(this,"tags",[]),(0,i.Z)(this,"dateRange",{min:null,max:null}),e&&(Array.isArray(e.tags)&&(this.tags=(0,a.Z)(e.tags)),e.dateRange&&(this.dateRange={min:e.dateRange.min,max:e.dateRange.max}),this.search=e.search)}return(0,s.Z)(t,[{key:"getSearchParams",value:function(){var t,e=new URLSearchParams,r=(0,n.Z)(this.tags);try{for(r.s();!(t=r.n()).done;){var a=t.value;e.append("tags__in",a)}}catch(o){r.e(o)}finally{r.f()}return this.dateRange.min&&e.set("date_end__gte",this.dateRange.min.toISOString()),this.dateRange.max&&e.set("date_beg__lte",this.dateRange.max.toISOString()),this.search&&e.set("search",this.search),e}}]),t}())},3263:function(t,e,r){function n(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}r.d(e,{Z:function(){return n}})},6777:function(t,e,r){r.d(e,{Z:function(){return u}});var n=r(7349);function a(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}var s=r(3263);function i(t,e){if(e&&("object"===o(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return(0,s.Z)(t)}function u(t){var e=a();return function(){var r,a=(0,n.Z)(t);if(e){var o=(0,n.Z)(this).constructor;r=Reflect.construct(a,arguments,o)}else r=a.apply(this,arguments);return i(this,r)}}},460:function(t,e,r){r.d(e,{Z:function(){return o}});var n=r(7349);function a(t,e){while(!Object.prototype.hasOwnProperty.call(t,e))if(t=(0,n.Z)(t),null===t)break;return t}function o(){return o="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(t,e,r){var n=a(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},o.apply(this,arguments)}},7349:function(t,e,r){function n(t){return n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(t)}r.d(e,{Z:function(){return n}})},796:function(t,e,r){function n(t,e){return n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(t,e)}function a(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&n(t,e)}r.d(e,{Z:function(){return a}})}}]);
//# sourceMappingURL=792.4fa8ae7c.js.map