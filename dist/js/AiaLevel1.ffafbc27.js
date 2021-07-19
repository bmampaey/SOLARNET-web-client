(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["AiaLevel1","AiaLevel1SearchFilter","MetadataDetail","MetadataList"],{"0538":function(t,e,a){"use strict";var n=a("1c0b"),r=a("861d"),i=[].slice,o={},l=function(t,e,a){if(!(e in o)){for(var n=[],r=0;r<e;r++)n[r]="a["+r+"]";o[e]=Function("C,a","return new C("+n.join(",")+")")}return o[e](t,a)};t.exports=Function.bind||function(t){var e=n(this),a=i.call(arguments,1),o=function(){var n=a.concat(i.call(arguments));return this instanceof o?l(e,n.length,n):e.apply(t,n)};return r(e.prototype)&&(o.prototype=e.prototype),o}},"0584":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-row",[a("b-col",{attrs:{cols:"4"}},[a("b-form",{on:{submit:function(e){return e.preventDefault(),t.updateSearchParams.apply(null,arguments)}}},[a("base-datetime-range",{attrs:{label:"Observation date","min-label":"Start","max-label":"End"},model:{value:t.searchFilter.dateRange,callback:function(e){t.$set(t.searchFilter,"dateRange",e)},expression:"searchFilter.dateRange"}}),a("b-form-group",{attrs:{label:"Wavelength","label-for":"wavelengths"}},[a("b-form-select",{attrs:{id:"wavelengths",options:t.searchFilter.wavelengthOptions,multiple:""},model:{value:t.searchFilter.wavelengths,callback:function(e){t.$set(t.searchFilter,"wavelengths",e)},expression:"searchFilter.wavelengths"}})],1),a("b-form-group",{attrs:{description:"Only display data with a quality of 0"}},[a("b-form-checkbox",{model:{value:t.searchFilter.bestQuality,callback:function(e){t.$set(t.searchFilter,"bestQuality",e)},expression:"searchFilter.bestQuality"}},[t._v("Best quality only")])],1),a("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Search")])],1)],1),a("b-col",{attrs:{cols:"8"}},[a("metadata-list",{attrs:{dataset:t.dataset,"search-params":t.searchParams,columns:t.columns}})],1)],1)},r=[],i=(a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("1344")),o=a("1284"),l={name:"AiaLevel1",components:{MetadataList:i["default"]},props:{dataset:{type:Object,required:!0},initialSearchFilter:{type:Object,required:!1,default:null}},data:function(){return{searchFilter:new o["default"](this.initialSearchFilter),searchParams:new URLSearchParams,columns:[{label:"Observation date",key:"date_obs",formatter:this.$utils.formatDate},{label:"Wavelength (Å)",key:"wavelnth"},{label:"Quality",key:"quality"}]}},methods:{updateSearchParams:function(){this.searchParams=this.searchFilter.getSearchParams()}}},s=l,c=a("2877"),u=Object(c["a"])(s,n,r,!1,null,null,null);e["default"]=u.exports},1284:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return _}));var n=a("b85c"),r=a("2909"),i=a("d4ec"),o=a("bee2");function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}a("5d41"),a("e439"),a("3410");function s(t){return s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},s(t)}function c(t,e){while(!Object.prototype.hasOwnProperty.call(t,e))if(t=s(t),null===t)break;return t}function u(t,e,a){return u="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(t,e,a){var n=c(t,e);if(n){var r=Object.getOwnPropertyDescriptor(n,e);return r.get?r.get.call(a):r.value}},u(t,e,a||t)}function d(t,e){return d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},d(t,e)}function f(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}a("4ae1");function h(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}var p=a("7037"),b=a.n(p);function m(t,e){return!e||"object"!==b()(e)&&"function"!==typeof e?l(t):e}function g(t){var e=h();return function(){var a,n=s(t);if(e){var r=s(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return m(this,a)}}var v=a("ade3"),y=(a("d81d"),a("4de4"),a("79d4")),w=[94,131,171,193,211,304,335,1600,1700,4500],_=function(t){f(a,t);var e=g(a);function a(t){var n;if(Object(i["a"])(this,a),n=e.call(this,t),Object(v["a"])(l(n),"wavelengthOptions",w.map((function(t){return{value:t,text:"".concat(t," Å")}}))),Object(v["a"])(l(n),"wavelengths",[]),Object(v["a"])(l(n),"bestQuality",void 0),t){if(Array.isArray(t.wavelengths))n.wavelengths=Object(r["a"])(t.wavelengths);else if(t.wavelengthRange){var o=null!=t.wavelengthRange.min?10*t.wavelengthRange.min:-1/0,s=null!=t.wavelengthRange.max?10*t.wavelengthRange.max:1/0;(isFinite(o)||isFinite(s))&&(n.wavelengths=w.filter((function(t){return o<=t&&t<=s})))}n.bestQuality=t.bestQuality}return n}return Object(o["a"])(a,[{key:"getSearchParams",value:function(){var t,e=u(s(a.prototype),"getSearchParams",this).call(this),r=Object(n["a"])(this.wavelengths);try{for(r.s();!(t=r.n()).done;){var i=t.value;e.append("wavelnth__in",i)}}catch(o){r.e(o)}finally{r.f()}return this.bestQuality&&e.set("quality",0),e}}]),a}(y["a"])},1344:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-overlay",{attrs:{show:t.paginator.loading,rounded:"sm"}},[a("b-table",{ref:"metadataTable",attrs:{id:t.paginator.ariaControl,items:t.paginator.items,fields:t.metadataTableFields,caption:t.metadataTableCaption,"primary-key":"oid","select-mode":"single",small:"",hover:"",selectable:""},on:{"row-selected":t.showMetadataDetailModal},scopedSlots:t._u([{key:"cell(checkbox)",fn:function(e){return[a("b-form-checkbox",{attrs:{value:e.item,size:"lg"},model:{value:t.selection,callback:function(e){t.selection=e},expression:"selection"}})]}},{key:"cell(download_button)",fn:function(t){return[a("b-button",{attrs:{href:t.value,target:"_blank",title:"Download file",size:"sm",variant:"primary",disabled:t.item.data_location.offline}},[a("b-icon",{attrs:{icon:"download"}})],1)]}}])}),a("b-button-toolbar",{attrs:{"key-nav":""}},[a("b-button",{attrs:{disabled:t.selectionEmpty,variant:"primary",title:"Select one or more metadata to create or update a data selection"},on:{click:t.saveSelection}},[t._v("Save selection ("+t._s(t.selection.length)+")")]),a("b-button",{attrs:{variant:"primary",title:"Create or update a data selection with all metadata"},on:{click:t.saveAll}},[t._v("Save all")]),a("b-button",{attrs:{disabled:t.selectionEmpty,title:"Select one or more metadata to search for overlapping data"},on:{click:t.searchOverlappingDatasets}},[t._v("Search overlapping")]),a("span",{staticClass:"button-toolbar-spacer"}),a("b-pagination",{staticClass:"mb-0",attrs:{"total-rows":t.paginator.totalRows,"per-page":t.paginator.pageSize,"aria-controls":t.paginator.ariaControl,limit:"5"},model:{value:t.paginator.pageNumber,callback:function(e){t.$set(t.paginator,"pageNumber",e)},expression:"paginator.pageNumber"}})],1)],1),a("b-modal",{ref:"metadataDetailModal",attrs:{size:"md",title:t.metadataDetailModalTitle,"hide-footer":"",static:"",lazy:""}},[t.metadataDetailModalMetadata?a("metadata-detail",{attrs:{metadata:t.metadataDetailModalMetadata}}):t._e()],1),a("b-modal",{ref:"overlappingDatasetsModal",attrs:{size:"xl",title:t.overlappingDatasetsModalTitle,"hide-footer":"",static:"",lazy:""}},[a("dataset",{attrs:{"initial-search-filter":t.overlappingDatasetsModalSearchFilter}})],1),a("data-selection-save",{ref:"dataSelectionSave"})],1)},r=[],i=a("2909"),o=(a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("b0c0"),a("99af"),a("a15b"),a("d81d"),a("159b"),a("25f0"),a("1fdb")),l=a("eaef"),s=a("72f4"),c=a("da68"),u={name:"MetadataList",components:{MetadataDetail:c["default"],Dataset:s["a"],DataSelectionSave:l["a"]},props:{dataset:{type:Object,required:!0},searchParams:{type:URLSearchParams,required:!0},columns:{type:Array,required:!0}},data:function(){return{paginator:this.$SVO.getPaginator(this.dataset.metadata.resource_uri),selection:[],metadataDetailModalTitle:this.dataset.name,metadataDetailModalMetadata:null,overlappingDatasetsModalSearchFilter:new o["a"],overlappingDatasetsModalTitle:"Datasets"}},computed:{metadataTableFields:function(){return[{key:"checkbox",label:""},{key:"download_button",label:"Download",formatter:function(t,e,a){return a.data_location.offline?null:a.data_location.file_url}}].concat(Object(i["a"])(this.columns),[{key:"tags",label:"Tags",formatter:function(t){return t.map((function(t){return t.name})).join(", ")}}])},metadataTableCaption:function(){return this.paginator.items.length>0?"Click on any row to see data details":"No metadata correspond to your search criteria"},selectionEmpty:function(){return 0==this.selection.length}},watch:{searchParams:{handler:"updatePaginator",immediate:!0}},methods:{updatePaginator:function(t){this.selection=[];try{this.paginator.searchParams=t,this.paginator.loadPage(1)}catch(e){this.$displayErrorMessage(this.$SVO.parseError(e))}},showMetadataDetailModal:function(t){t.length>0&&(this.metadataDetailModalMetadata=t[0],this.$refs.metadataTable.clearSelected(),this.$nextTick((function(){this.$refs.metadataDetailModal.show()})))},saveSelection:function(){var t=new URLSearchParams;this.selection.forEach((function(e){return t.append("oid__in",e.oid)})),this.$refs.dataSelectionSave.save(this.dataset,t.toString())},saveAll:function(){this.$refs.dataSelectionSave.save(this.dataset,this.searchParams.toString())},searchOverlappingDatasets:function(){this.overlappingDatasetsModalTitle="Datasets overlapping selected ".concat(this.dataset.name," data"),this.overlappingDatasetsModalSearchFilter=new o["a"]({dateRange:{min:new Date(Math.min.apply(Math,Object(i["a"])(this.selection.map((function(t){return new Date(t.date_beg)}))))),max:new Date(Math.max.apply(Math,Object(i["a"])(this.selection.map((function(t){return new Date(t.date_end)})))))},search:this.selection.map((function(t){return"(date_beg__lt = ".concat(t.date_end," and date_end__gt = ").concat(t.date_beg,")")})).join(" or ")}),this.$refs.overlappingDatasetsModal.show()}}},d=u,f=a("2877"),h=Object(f["a"])(d,n,r,!1,null,null,null);e["default"]=h.exports},"1e25":function(t,e,a){"use strict";var n=a("23e7"),r=a("58a8").end,i=a("c8d2"),o=i("trimEnd"),l=o?function(){return r(this)}:"".trimEnd;n({target:"String",proto:!0,forced:o},{trimEnd:l,trimRight:l})},3410:function(t,e,a){var n=a("23e7"),r=a("d039"),i=a("7b0b"),o=a("e163"),l=a("e177"),s=r((function(){o(1)}));n({target:"Object",stat:!0,forced:s,sham:!l},{getPrototypeOf:function(t){return o(i(t))}})},"466d":function(t,e,a){"use strict";var n=a("d784"),r=a("825a"),i=a("50c4"),o=a("1d80"),l=a("8aa5"),s=a("14c3");n("match",(function(t,e,a){return[function(e){var a=o(this),n=void 0==e?void 0:e[t];return void 0!==n?n.call(e,a):new RegExp(e)[t](String(a))},function(t){var n=a(e,this,t);if(n.done)return n.value;var o=r(this),c=String(t);if(!o.global)return s(o,c);var u=o.unicode;o.lastIndex=0;var d,f=[],h=0;while(null!==(d=s(o,c))){var p=String(d[0]);f[h]=p,""===p&&(o.lastIndex=l(c,i(o.lastIndex),u)),h++}return 0===h?null:f}]}))},"4ae1":function(t,e,a){var n=a("23e7"),r=a("d066"),i=a("1c0b"),o=a("825a"),l=a("861d"),s=a("7c73"),c=a("0538"),u=a("d039"),d=r("Reflect","construct"),f=u((function(){function t(){}return!(d((function(){}),[],t)instanceof t)})),h=!u((function(){d((function(){}))})),p=f||h;n({target:"Reflect",stat:!0,forced:p,sham:p},{construct:function(t,e){i(t),o(e);var a=arguments.length<3?t:i(arguments[2]);if(h&&!f)return d(t,e,a);if(t==a){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var n=[null];return n.push.apply(n,e),new(c.apply(t,n))}var r=a.prototype,u=s(l(r)?r:Object.prototype),p=Function.apply.call(t,u,e);return l(p)?p:u}})},"5d41":function(t,e,a){var n=a("23e7"),r=a("861d"),i=a("825a"),o=a("5135"),l=a("06cf"),s=a("e163");function c(t,e){var a,n,u=arguments.length<3?t:arguments[2];return i(t)===u?t[e]:(a=l.f(t,e))?o(a,"value")?a.value:void 0===a.get?void 0:a.get.call(u):r(n=s(t))?c(n,e,u):void 0}n({target:"Reflect",stat:!0},{get:c})},7037:function(t,e,a){function n(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?(t.exports=n=function(t){return typeof t},t.exports["default"]=t.exports,t.exports.__esModule=!0):(t.exports=n=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports["default"]=t.exports,t.exports.__esModule=!0),n(e)}a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),t.exports=n,t.exports["default"]=t.exports,t.exports.__esModule=!0},"79d4":function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var n=a("b85c"),r=a("2909"),i=a("d4ec"),o=a("bee2"),l=a("ade3"),s=(a("ac1f"),a("841c"),a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),function(){function t(e){Object(i["a"])(this,t),Object(l["a"])(this,"tags",[]),Object(l["a"])(this,"dateRange",{min:null,max:null}),e&&(Array.isArray(e.tags)&&(this.tags=Object(r["a"])(e.tags)),e.dateRange&&(this.dateRange={min:e.dateRange.min,max:e.dateRange.max}),this.search=e.search)}return Object(o["a"])(t,[{key:"getSearchParams",value:function(){var t,e=new URLSearchParams,a=Object(n["a"])(this.tags);try{for(a.s();!(t=a.n()).done;){var r=t.value;e.append("tags__in",r)}}catch(i){a.e(i)}finally{a.f()}return this.dateRange.min&&e.set("date_end__gte",this.dateRange.min.toISOString()),this.dateRange.max&&e.set("date_beg__lte",this.dateRange.max.toISOString()),this.search&&e.set("search",this.search),e}}]),t}())},da68:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-img",{attrs:{src:t.imageURL,center:"","fluid-grow":"",alt:"Data thumbnail"}}),a("b-form-group",{staticClass:"my-2"},[a("b-input-group",[a("b-form-input",{attrs:{type:"search",placeholder:"Filter metadata",debounce:"250"},model:{value:t.searchFilter,callback:function(e){t.searchFilter=e},expression:"searchFilter"}}),a("b-input-group-append",[a("b-button",{attrs:{disabled:!t.searchFilter},on:{click:t.clearSearchFilter}},[t._v("Clear")])],1)],1)],1),a("b-table",{attrs:{items:t.cards,fields:t.fields,filter:t.searchFilter,"filter-included-fields":t.filterIncludedFields,"primary-key":"id","sticky-header":"","show-empty":"",small:""}})],1)},r=[],i=a("3835"),o=(a("1e25"),a("d81d"),a("ac1f"),a("466d"),a("4de4"),a("4fad"),a("99af"),{name:"MetadataDetail",props:{metadata:{type:Object,required:!0}},data:function(){return{searchFilter:""}},computed:{imageURL:function(){return this.metadata.data_location.thumbnail_url?this.metadata.data_location.thumbnail_url:a("14e6")},fitsHeader:function(){return this.metadata.fits_header?this.metadata.fits_header.trimEnd():""},fields:function(){return[{key:"text",label:this.fitsHeader.length>0?"FITS header":"Metadata"}]},filterIncludedFields:function(){return["text"]},cards:function(){return this.fitsHeader.length>0?this.fitsHeader.match(/[^]{1,80}/g).map((function(t,e){return{id:e,text:t}})):Object.entries(this.metadata).filter((function(t){var e=Object(i["a"])(t,2),a=e[1];return!(a instanceof Object)})).map((function(t,e){var a=Object(i["a"])(t,2),n=a[0],r=a[1];return{id:e,text:"".concat(n," = ").concat(r)}}))}},methods:{clearSearchFilter:function(){this.searchFilter=""}}}),l=o,s=a("2877"),c=Object(s["a"])(l,n,r,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=AiaLevel1.ffafbc27.js.map