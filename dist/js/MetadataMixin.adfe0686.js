(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["MetadataMixin","MetadataDetail","MetadataList"],{1344:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-overlay",{attrs:{show:t.paginator.loading,rounded:"sm"}},[a("b-table",{ref:"metadataTable",attrs:{id:t.paginator.ariaControl,items:t.paginator.items,fields:t.metadataTableFields,caption:t.metadataTableCaption,"primary-key":"oid","select-mode":"single",small:"",hover:"",selectable:""},on:{"row-selected":t.showMetadataDetailModal},scopedSlots:t._u([{key:"cell(checkbox)",fn:function(e){return[a("b-form-checkbox",{attrs:{value:e.item,size:"lg"},model:{value:t.selection,callback:function(e){t.selection=e},expression:"selection"}})]}},{key:"cell(download_button)",fn:function(t){return[a("b-button",{attrs:{href:t.value,target:"_blank",title:"Download file",size:"sm",variant:"primary",disabled:t.item.data_location.offline}},[a("b-icon",{attrs:{icon:"download"}})],1)]}}])}),a("b-button-toolbar",{attrs:{"key-nav":""}},[a("b-button",{attrs:{disabled:t.selectionEmpty,variant:"primary",title:"Select one or more metadata to create or update a data selection"},on:{click:t.saveSelection}},[t._v("Save selection ("+t._s(t.selection.length)+")")]),a("b-button",{attrs:{variant:"primary",title:"Create or update a data selection with all metadata"},on:{click:t.saveAll}},[t._v("Save all")]),a("b-button",{attrs:{disabled:t.selectionEmpty,title:"Select one or more metadata to search for overlapping data"},on:{click:t.searchOverlappingDatasets}},[t._v("Search overlapping")]),a("span",{staticClass:"button-toolbar-spacer"}),a("b-pagination",{staticClass:"mb-0",attrs:{"total-rows":t.paginator.totalRows,"per-page":t.paginator.pageSize,"aria-controls":t.paginator.ariaControl,limit:"5"},model:{value:t.paginator.pageNumber,callback:function(e){t.$set(t.paginator,"pageNumber",e)},expression:"paginator.pageNumber"}})],1)],1),a("b-modal",{ref:"metadataDetailModal",attrs:{size:"md",title:t.metadataDetailModalTitle,"hide-footer":"",static:"",lazy:""}},[t.metadataDetailModalMetadata?a("metadata-detail",{attrs:{metadata:t.metadataDetailModalMetadata}}):t._e()],1),a("b-modal",{ref:"overlappingDatasetsModal",attrs:{size:"xl",title:t.overlappingDatasetsModalTitle,"hide-footer":"",static:"",lazy:""}},[a("dataset",{attrs:{"initial-search-filter":t.overlappingDatasetsModalSearchFilter}})],1),a("data-selection-save",{ref:"dataSelectionSave"})],1)},i=[],n=a("2909"),s=(a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("b0c0"),a("99af"),a("a15b"),a("d81d"),a("159b"),a("25f0"),a("1fdb")),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-modal",{ref:"dataSelectionSaveModal",attrs:{size:"md",title:"Save data selection","ok-only":"","ok-variant":"success","hide-footer":!t.dataSelection},on:{hidden:t.resetModal}},[t.dataSelection?[t._v(" Your selection was saved successfully, and is available under the menu "),a("b-link",{attrs:{to:{name:"DataSelections"}}},[t._v('"Data selections"')])]:[a("b-overlay",{attrs:{show:t.showOverlay,rounded:"sm"}},[a("b-form",{on:{submit:function(e){return e.preventDefault(),t.saveDataSelection.apply(null,arguments)}}},[a("b-form-group",{attrs:{label:"Description","label-for":"data-selection-description",description:"Optional description of the data selection"}},[a("b-form-textarea",{attrs:{id:"data-selection-description",lazy:""},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1),a("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Save")])],1)],1),a("p",{staticClass:"text-muted mt-3"},[t._v(" Note: data selections are dynamic, if metadata corresponding to your selection is added, updated or deleted, the selection will be affected ")])]],2)],1)},l=[],c=a("1da1"),d=(a("96cf"),a("a4d3"),a("e01a"),{name:"DataSelectionSave",data:function(){return{showOverlay:!1,description:null,dataSelection:null}},methods:{save:function(t,e){this.dataset=t,this.query_string=e,this.$refs.dataSelectionSaveModal.show()},saveDataSelection:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.showOverlay=!0,t.prev=1,t.next=4,this.$SVO.data_selection.create({description:this.description,dataset:this.dataset.resource_uri,query_string:this.query_string});case 4:this.dataSelection=t.sent,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](1),this.$displayErrorMessage(this.$SVO.parseError(t.t0));case 10:this.showOverlay=!1;case 11:case"end":return t.stop()}}),t,this,[[1,7]])})));function e(){return t.apply(this,arguments)}return e}(),resetModal:function(){this.showOverlay=!1,this.description=null,this.dataSelection=null}}}),u=d,h=a("2877"),p=Object(h["a"])(u,o,l,!1,null,null,null),m=p.exports,f=a("72f4"),b=a("da68"),g={name:"MetadataList",components:{MetadataDetail:b["default"],Dataset:f["default"],DataSelectionSave:m},props:{dataset:{type:Object,required:!0},searchParams:{type:URLSearchParams,required:!0},columns:{type:Array,required:!0}},data:function(){return{paginator:this.$SVO.getPaginator(this.dataset.metadata.resource_uri),selection:[],metadataDetailModalTitle:this.dataset.name,metadataDetailModalMetadata:null,overlappingDatasetsModalSearchFilter:new s["a"],overlappingDatasetsModalTitle:"Datasets"}},computed:{metadataTableFields:function(){return[{key:"checkbox",label:""},{key:"download_button",label:"Download",formatter:function(t,e,a){return a.data_location.offline?null:a.data_location.file_url}}].concat(Object(n["a"])(this.columns),[{key:"tags",label:"Tags",formatter:function(t){return t.map((function(t){return t.name})).join(", ")}}])},metadataTableCaption:function(){return this.paginator.items.length>0?"Click on any row to see data details":"No metadata correspond to your search criteria"},selectionEmpty:function(){return 0==this.selection.length}},watch:{searchParams:{handler:"updatePaginator",immediate:!0}},methods:{updatePaginator:function(t){this.selection=[];try{this.paginator.searchParams=t,this.paginator.loadPage(1)}catch(e){this.$displayErrorMessage(this.$SVO.parseError(e))}},showMetadataDetailModal:function(t){t.length>0&&(this.metadataDetailModalMetadata=t[0],this.$refs.metadataTable.clearSelected(),this.$nextTick((function(){this.$refs.metadataDetailModal.show()})))},saveSelection:function(){var t=new URLSearchParams;this.selection.forEach((function(e){return t.append("oid__in",e.oid)})),this.$refs.dataSelectionSave.save(this.dataset,t.toString())},saveAll:function(){this.$refs.dataSelectionSave.save(this.dataset,this.searchParams.toString())},searchOverlappingDatasets:function(){this.overlappingDatasetsModalTitle="Datasets overlapping selected ".concat(this.dataset.name," data"),this.overlappingDatasetsModalSearchFilter=new s["a"]({dateRange:{min:new Date(Math.min.apply(Math,Object(n["a"])(this.selection.map((function(t){return new Date(t.date_beg)}))))),max:new Date(Math.max.apply(Math,Object(n["a"])(this.selection.map((function(t){return new Date(t.date_end)})))))},search:this.selection.map((function(t){return"(date_beg__lt = ".concat(t.date_end," and date_end__gt = ").concat(t.date_beg,")")})).join(" or ")}),this.$refs.overlappingDatasetsModal.show()}}},v=g,y=Object(h["a"])(v,r,i,!1,null,null,null);e["default"]=y.exports},1814:function(t,e,a){"use strict";a.r(e);var r=a("1da1"),i=(a("96cf"),a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("b0c0"),a("d81d"),a("1344")),n=a("79d4");e["default"]={components:{MetadataList:i["default"]},props:{dataset:{type:Object,required:!0},initialSearchFilter:{type:Object,required:!1,default:null}},data:function(){return{searchFilter:new n["a"](this.initialSearchFilter),searchParams:new URLSearchParams,tagOptions:[],columns:[{label:"Observation date",key:"date_beg",formatter:this.$utils.formatDate},{label:"Wavelength",key:"wavemin"}]}},created:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.showOverlay=!0,this.loadTagOptions(),this.showOverlay=!1;case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{updateSearchParams:function(){this.searchParams=this.searchFilter.getSearchParams()},loadTagOptions:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$SVO.tag.getAll({dataset:this.dataset.name});case 3:e=t.sent,this.tagOptions=e.map((function(t){return{value:t.name,text:t.name}})),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),this.$displayErrorMessage(this.$SVO.parseError(t.t0));case 10:case"end":return t.stop()}}),t,this,[[0,7]])})));function e(){return t.apply(this,arguments)}return e}()}}},"1e25":function(t,e,a){"use strict";var r=a("23e7"),i=a("58a8").end,n=a("c8d2"),s=n("trimEnd"),o=s?function(){return i(this)}:"".trimEnd;r({target:"String",proto:!0,forced:s},{trimEnd:o,trimRight:o})},"466d":function(t,e,a){"use strict";var r=a("d784"),i=a("825a"),n=a("50c4"),s=a("1d80"),o=a("8aa5"),l=a("14c3");r("match",(function(t,e,a){return[function(e){var a=s(this),r=void 0==e?void 0:e[t];return void 0!==r?r.call(e,a):new RegExp(e)[t](String(a))},function(t){var r=a(e,this,t);if(r.done)return r.value;var s=i(this),c=String(t);if(!s.global)return l(s,c);var d=s.unicode;s.lastIndex=0;var u,h=[],p=0;while(null!==(u=l(s,c))){var m=String(u[0]);h[p]=m,""===m&&(s.lastIndex=o(c,n(s.lastIndex),d)),p++}return 0===p?null:h}]}))},"79d4":function(t,e,a){"use strict";a.d(e,"a",(function(){return l}));var r=a("b85c"),i=a("2909"),n=a("d4ec"),s=a("bee2"),o=a("ade3"),l=(a("ac1f"),a("841c"),a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),function(){function t(e){Object(n["a"])(this,t),Object(o["a"])(this,"tags",[]),Object(o["a"])(this,"dateRange",{min:null,max:null}),e&&(Array.isArray(e.tags)&&(this.tags=Object(i["a"])(e.tags)),e.dateRange&&(this.dateRange={min:e.dateRange.min,max:e.dateRange.max}),this.search=e.search)}return Object(s["a"])(t,[{key:"getSearchParams",value:function(){var t,e=new URLSearchParams,a=Object(r["a"])(this.tags);try{for(a.s();!(t=a.n()).done;){var i=t.value;e.append("tags__in",i)}}catch(n){a.e(n)}finally{a.f()}return this.dateRange.min&&e.set("date_end__gte",this.dateRange.min.toISOString()),this.dateRange.max&&e.set("date_beg__lte",this.dateRange.max.toISOString()),this.search&&e.set("search",this.search),e}}]),t}())},da68:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-img",{attrs:{src:t.imageURL,center:"","fluid-grow":"",alt:"Data thumbnail"}}),a("b-form-group",{staticClass:"my-2"},[a("b-input-group",[a("b-form-input",{attrs:{type:"search",placeholder:"Filter metadata",debounce:"250"},model:{value:t.searchFilter,callback:function(e){t.searchFilter=e},expression:"searchFilter"}}),a("b-input-group-append",[a("b-button",{attrs:{disabled:!t.searchFilter},on:{click:t.clearSearchFilter}},[t._v("Clear")])],1)],1)],1),a("b-table",{attrs:{items:t.cards,fields:t.fields,filter:t.searchFilter,"filter-included-fields":t.filterIncludedFields,"primary-key":"id","sticky-header":"","show-empty":"",small:""}})],1)},i=[],n=a("3835"),s=(a("1e25"),a("d81d"),a("ac1f"),a("466d"),a("4de4"),a("4fad"),a("99af"),{name:"MetadataDetail",props:{metadata:{type:Object,required:!0}},data:function(){return{searchFilter:""}},computed:{imageURL:function(){return this.metadata.data_location.thumbnail_url?this.metadata.data_location.thumbnail_url:a("14e6")},fitsHeader:function(){return this.metadata.fits_header?this.metadata.fits_header.trimEnd():""},fields:function(){return[{key:"text",label:this.fitsHeader.length>0?"FITS header":"Metadata"}]},filterIncludedFields:function(){return["text"]},cards:function(){return this.fitsHeader.length>0?this.fitsHeader.match(/[^]{1,80}/g).map((function(t,e){return{id:e,text:t}})):Object.entries(this.metadata).filter((function(t){var e=Object(n["a"])(t,2),a=e[1];return!(a instanceof Object)})).map((function(t,e){var a=Object(n["a"])(t,2),r=a[0],i=a[1];return{id:e,text:"".concat(r," = ").concat(i)}}))}},methods:{clearSearchFilter:function(){this.searchFilter=""}}}),o=s,l=a("2877"),c=Object(l["a"])(o,r,i,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=MetadataMixin.adfe0686.js.map