(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["AiaLevel1~EitLevel0~HmiMagnetogram~SwapLevel1~Xrt","MetadataDetail","MetadataList","MetadataMixin"],{"0538":function(t,e,a){"use strict";var n=a("1c0b"),r=a("861d"),i=[].slice,o={},s=function(t,e,a){if(!(e in o)){for(var n=[],r=0;r<e;r++)n[r]="a["+r+"]";o[e]=Function("C,a","return new C("+n.join(",")+")")}return o[e](t,a)};t.exports=Function.bind||function(t){var e=n(this),a=i.call(arguments,1),o=function(){var n=a.concat(i.call(arguments));return this instanceof o?s(e,n.length,n):e.apply(t,n)};return r(e.prototype)&&(o.prototype=e.prototype),o}},1344:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-overlay",{attrs:{show:t.paginator.loading,rounded:"sm"}},[a("b-table",{ref:"metadataTable",attrs:{id:t.paginator.ariaControl,items:t.paginator.items,fields:t.metadataTableFields,caption:t.metadataTableCaption,"primary-key":"oid","select-mode":"single",small:"",hover:"",selectable:""},on:{"row-selected":t.showMetadataDetailModal},scopedSlots:t._u([{key:"cell(checkbox)",fn:function(e){return[a("b-form-checkbox",{attrs:{value:e.item,size:"lg"},model:{value:t.selection,callback:function(e){t.selection=e},expression:"selection"}})]}},{key:"cell(download_button)",fn:function(t){return[a("b-button",{attrs:{href:t.value,target:"_blank",title:"Download file",size:"sm",variant:"primary",disabled:t.item.data_location.offline}},[a("b-icon",{attrs:{icon:"download"}})],1)]}}])}),a("b-button-toolbar",{attrs:{"key-nav":""}},[a("b-button",{attrs:{disabled:t.selectionEmpty,variant:"primary",title:"Select one or more metadata to create or update a data selection"},on:{click:t.saveSelection}},[t._v("Save selection ("+t._s(t.selection.length)+")")]),a("b-button",{attrs:{variant:"primary",title:"Create or update a data selection with all metadata"},on:{click:t.saveAll}},[t._v("Save all")]),a("b-button",{attrs:{disabled:t.selectionEmpty,title:"Select one or more metadata to search for overlapping data"},on:{click:t.searchOverlappingDatasets}},[t._v("Search overlapping")]),a("span",{staticClass:"button-toolbar-spacer"}),a("b-pagination",{staticClass:"mb-0",attrs:{"total-rows":t.paginator.totalRows,"per-page":t.paginator.pageSize,"aria-controls":t.paginator.ariaControl,limit:"5"},model:{value:t.paginator.pageNumber,callback:function(e){t.$set(t.paginator,"pageNumber",e)},expression:"paginator.pageNumber"}})],1)],1),a("b-modal",{ref:"metadataDetailModal",attrs:{size:"md",title:t.metadataDetailModalTitle,"hide-footer":"",static:"",lazy:""}},[t.metadataDetailModalMetadata?a("metadata-detail",{attrs:{metadata:t.metadataDetailModalMetadata}}):t._e()],1),a("b-modal",{ref:"overlappingDatasetsModal",attrs:{size:"xl",title:t.overlappingDatasetsModalTitle,"hide-footer":"",static:"",lazy:""}},[a("dataset",{attrs:{"initial-search-filter":t.overlappingDatasetsModalSearchFilter}})],1),a("data-selection-save",{ref:"dataSelectionSave"})],1)},r=[],i=a("2909"),o=(a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("b0c0"),a("99af"),a("a15b"),a("d81d"),a("159b"),a("25f0"),a("1fdb")),s=a("eaef"),c=a("72f4"),l=a("da68"),u={name:"MetadataList",components:{MetadataDetail:l["default"],Dataset:c["default"],DataSelectionSave:s["a"]},props:{dataset:{type:Object,required:!0},searchParams:{type:URLSearchParams,required:!0},columns:{type:Array,required:!0}},data:function(){return{paginator:this.$SVO.getPaginator(this.dataset.metadata.resource_uri),selection:[],metadataDetailModalTitle:this.dataset.name,metadataDetailModalMetadata:null,overlappingDatasetsModalSearchFilter:new o["a"],overlappingDatasetsModalTitle:"Datasets"}},computed:{metadataTableFields:function(){return[{key:"checkbox",label:""},{key:"download_button",label:"Download",formatter:function(t,e,a){return a.data_location.offline?null:a.data_location.file_url}}].concat(Object(i["a"])(this.columns),[{key:"tags",label:"Tags",formatter:function(t){return t.map((function(t){return t.name})).join(", ")}}])},metadataTableCaption:function(){return this.paginator.items.length>0?"Click on any row to see data details":"No metadata correspond to your search criteria"},selectionEmpty:function(){return 0==this.selection.length}},watch:{searchParams:{handler:"updatePaginator",immediate:!0}},methods:{updatePaginator:function(t){this.selection=[];try{this.paginator.searchParams=t,this.paginator.loadPage(1)}catch(e){this.$displayErrorMessage(this.$SVO.parseError(e))}},showMetadataDetailModal:function(t){t.length>0&&(this.metadataDetailModalMetadata=t[0],this.$refs.metadataTable.clearSelected(),this.$nextTick((function(){this.$refs.metadataDetailModal.show()})))},saveSelection:function(){var t=new URLSearchParams;this.selection.forEach((function(e){return t.append("oid__in",e.oid)})),this.$refs.dataSelectionSave.save(this.dataset,t.toString())},saveAll:function(){this.$refs.dataSelectionSave.save(this.dataset,this.searchParams.toString())},searchOverlappingDatasets:function(){this.overlappingDatasetsModalTitle="Datasets overlapping selected ".concat(this.dataset.name," data"),this.overlappingDatasetsModalSearchFilter=new o["a"]({dateRange:{min:new Date(Math.min.apply(Math,Object(i["a"])(this.selection.map((function(t){return new Date(t.date_beg)}))))),max:new Date(Math.max.apply(Math,Object(i["a"])(this.selection.map((function(t){return new Date(t.date_end)})))))},search:this.selection.map((function(t){return"(date_beg__lt = ".concat(t.date_end," and date_end__gt = ").concat(t.date_beg,")")})).join(" or ")}),this.$refs.overlappingDatasetsModal.show()}}},d=u,f=a("2877"),p=Object(f["a"])(d,n,r,!1,null,null,null);e["default"]=p.exports},1814:function(t,e,a){"use strict";a.r(e);var n=a("1da1"),r=(a("96cf"),a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("b0c0"),a("d81d"),a("1344")),i=a("79d4");e["default"]={components:{MetadataList:r["default"]},props:{dataset:{type:Object,required:!0},initialSearchFilter:{type:Object,required:!1,default:null}},data:function(){return{searchFilter:new i["a"](this.initialSearchFilter),searchParams:new URLSearchParams,tagOptions:[],columns:[{label:"Observation date",key:"date_beg",formatter:this.$utils.formatDate},{label:"Wavelength",key:"wavemin"}]}},created:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.showOverlay=!0,this.loadTagOptions(),this.showOverlay=!1;case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{updateSearchParams:function(){this.searchParams=this.searchFilter.getSearchParams()},loadTagOptions:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$SVO.tag.getAll({dataset:this.dataset.name});case 3:e=t.sent,this.tagOptions=e.map((function(t){return{value:t.name,text:t.name}})),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),this.$displayErrorMessage(this.$SVO.parseError(t.t0));case 10:case"end":return t.stop()}}),t,this,[[0,7]])})));function e(){return t.apply(this,arguments)}return e}()}}},"1e25":function(t,e,a){"use strict";var n=a("23e7"),r=a("58a8").end,i=a("c8d2"),o=i("trimEnd"),s=o?function(){return r(this)}:"".trimEnd;n({target:"String",proto:!0,forced:o},{trimEnd:s,trimRight:s})},"257e":function(t,e,a){"use strict";function n(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}a.d(e,"a",(function(){return n}))},"262e":function(t,e,a){"use strict";function n(t,e){return n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(t,e)}function r(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}a.d(e,"a",(function(){return r}))},"2caf":function(t,e,a){"use strict";a.d(e,"a",(function(){return l}));a("4ae1");var n=a("7e84");function r(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}var i=a("7037"),o=a.n(i),s=a("257e");function c(t,e){return!e||"object"!==o()(e)&&"function"!==typeof e?Object(s["a"])(t):e}function l(t){var e=r();return function(){var a,r=Object(n["a"])(t);if(e){var i=Object(n["a"])(this).constructor;a=Reflect.construct(r,arguments,i)}else a=r.apply(this,arguments);return c(this,a)}}},3410:function(t,e,a){var n=a("23e7"),r=a("d039"),i=a("7b0b"),o=a("e163"),s=a("e177"),c=r((function(){o(1)}));n({target:"Object",stat:!0,forced:c,sham:!s},{getPrototypeOf:function(t){return o(i(t))}})},"45eb":function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));a("5d41"),a("e439");var n=a("7e84");function r(t,e){while(!Object.prototype.hasOwnProperty.call(t,e))if(t=Object(n["a"])(t),null===t)break;return t}function i(t,e,a){return i="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(t,e,a){var n=r(t,e);if(n){var i=Object.getOwnPropertyDescriptor(n,e);return i.get?i.get.call(a):i.value}},i(t,e,a||t)}},"466d":function(t,e,a){"use strict";var n=a("d784"),r=a("825a"),i=a("50c4"),o=a("1d80"),s=a("8aa5"),c=a("14c3");n("match",(function(t,e,a){return[function(e){var a=o(this),n=void 0==e?void 0:e[t];return void 0!==n?n.call(e,a):new RegExp(e)[t](String(a))},function(t){var n=a(e,this,t);if(n.done)return n.value;var o=r(this),l=String(t);if(!o.global)return c(o,l);var u=o.unicode;o.lastIndex=0;var d,f=[],p=0;while(null!==(d=c(o,l))){var h=String(d[0]);f[p]=h,""===h&&(o.lastIndex=s(l,i(o.lastIndex),u)),p++}return 0===p?null:f}]}))},"4ae1":function(t,e,a){var n=a("23e7"),r=a("d066"),i=a("1c0b"),o=a("825a"),s=a("861d"),c=a("7c73"),l=a("0538"),u=a("d039"),d=r("Reflect","construct"),f=u((function(){function t(){}return!(d((function(){}),[],t)instanceof t)})),p=!u((function(){d((function(){}))})),h=f||p;n({target:"Reflect",stat:!0,forced:h,sham:h},{construct:function(t,e){i(t),o(e);var a=arguments.length<3?t:i(arguments[2]);if(p&&!f)return d(t,e,a);if(t==a){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var n=[null];return n.push.apply(n,e),new(l.apply(t,n))}var r=a.prototype,u=c(s(r)?r:Object.prototype),h=Function.apply.call(t,u,e);return s(h)?h:u}})},"5d41":function(t,e,a){var n=a("23e7"),r=a("861d"),i=a("825a"),o=a("5135"),s=a("06cf"),c=a("e163");function l(t,e){var a,n,u=arguments.length<3?t:arguments[2];return i(t)===u?t[e]:(a=s.f(t,e))?o(a,"value")?a.value:void 0===a.get?void 0:a.get.call(u):r(n=c(t))?l(n,e,u):void 0}n({target:"Reflect",stat:!0},{get:l})},7037:function(t,e,a){function n(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?(t.exports=n=function(t){return typeof t},t.exports["default"]=t.exports,t.exports.__esModule=!0):(t.exports=n=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports["default"]=t.exports,t.exports.__esModule=!0),n(e)}a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),t.exports=n,t.exports["default"]=t.exports,t.exports.__esModule=!0},"79d4":function(t,e,a){"use strict";a.d(e,"a",(function(){return c}));var n=a("b85c"),r=a("2909"),i=a("d4ec"),o=a("bee2"),s=a("ade3"),c=(a("ac1f"),a("841c"),a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),function(){function t(e){Object(i["a"])(this,t),Object(s["a"])(this,"tags",[]),Object(s["a"])(this,"dateRange",{min:null,max:null}),e&&(Array.isArray(e.tags)&&(this.tags=Object(r["a"])(e.tags)),e.dateRange&&(this.dateRange={min:e.dateRange.min,max:e.dateRange.max}),this.search=e.search)}return Object(o["a"])(t,[{key:"getSearchParams",value:function(){var t,e=new URLSearchParams,a=Object(n["a"])(this.tags);try{for(a.s();!(t=a.n()).done;){var r=t.value;e.append("tags__in",r)}}catch(i){a.e(i)}finally{a.f()}return this.dateRange.min&&e.set("date_end__gte",this.dateRange.min.toISOString()),this.dateRange.max&&e.set("date_beg__lte",this.dateRange.max.toISOString()),this.search&&e.set("search",this.search),e}}]),t}())},"7e84":function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));a("3410");function n(t){return n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(t)}},da68:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-img",{attrs:{src:t.imageURL,center:"","fluid-grow":"",alt:"Data thumbnail"}}),a("b-form-group",{staticClass:"my-2"},[a("b-input-group",[a("b-form-input",{attrs:{type:"search",placeholder:"Filter metadata",debounce:"250"},model:{value:t.searchFilter,callback:function(e){t.searchFilter=e},expression:"searchFilter"}}),a("b-input-group-append",[a("b-button",{attrs:{disabled:!t.searchFilter},on:{click:t.clearSearchFilter}},[t._v("Clear")])],1)],1)],1),a("b-table",{attrs:{items:t.cards,fields:t.fields,filter:t.searchFilter,"filter-included-fields":t.filterIncludedFields,"primary-key":"id","sticky-header":"","show-empty":"",small:""}})],1)},r=[],i=a("3835"),o=(a("1e25"),a("d81d"),a("ac1f"),a("466d"),a("4de4"),a("4fad"),a("99af"),{name:"MetadataDetail",props:{metadata:{type:Object,required:!0}},data:function(){return{searchFilter:""}},computed:{imageURL:function(){return this.metadata.data_location.thumbnail_url?this.metadata.data_location.thumbnail_url:a("14e6")},fitsHeader:function(){return this.metadata.fits_header?this.metadata.fits_header.trimEnd():""},fields:function(){return[{key:"text",label:this.fitsHeader.length>0?"FITS header":"Metadata"}]},filterIncludedFields:function(){return["text"]},cards:function(){return this.fitsHeader.length>0?this.fitsHeader.match(/[^]{1,80}/g).map((function(t,e){return{id:e,text:t}})):Object.entries(this.metadata).filter((function(t){var e=Object(i["a"])(t,2),a=e[1];return!(a instanceof Object)})).map((function(t,e){var a=Object(i["a"])(t,2),n=a[0],r=a[1];return{id:e,text:"".concat(n," = ").concat(r)}}))}},methods:{clearSearchFilter:function(){this.searchFilter=""}}}),s=o,c=a("2877"),l=Object(c["a"])(s,n,r,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=AiaLevel1~EitLevel0~HmiMagnetogram~SwapLevel1~Xrt.6bab8a72.js.map