(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["MetadataList","MetadataDetail"],{1344:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("b-overlay",{attrs:{show:t.paginator.loading,rounded:"sm"}},[e("b-table",{ref:"metadataTable",attrs:{id:t.paginator.ariaControl,items:t.paginator.items,fields:t.metadataTableFields,caption:t.metadataTableCaption,"primary-key":"oid","select-mode":"single",small:"",hover:"",selectable:""},on:{"row-selected":t.showMetadataDetailModal},scopedSlots:t._u([{key:"cell(checkbox)",fn:function(a){return[e("b-form-checkbox",{attrs:{value:a.item,size:"lg"},model:{value:t.selection,callback:function(a){t.selection=a},expression:"selection"}})]}},{key:"cell(download_button)",fn:function(t){return[e("b-button",{attrs:{href:t.value,target:"_blank",title:"Download file",size:"sm",variant:"primary",disabled:t.item.data_location.offline}},[e("b-icon",{attrs:{icon:"download"}})],1)]}}])}),e("b-button-toolbar",{attrs:{"key-nav":""}},[e("b-button",{attrs:{disabled:t.selectionEmpty,variant:"primary",title:"Select one or more metadata to create or update a data selection"},on:{click:t.saveSelection}},[t._v("Save selection ("+t._s(t.selection.length)+")")]),e("b-button",{attrs:{variant:"primary",title:"Create or update a data selection with all metadata"},on:{click:t.saveAll}},[t._v("Save all")]),e("b-button",{attrs:{disabled:t.selectionEmpty,title:"Select one or more metadata to search for overlapping data"},on:{click:t.searchOverlappingDatasets}},[t._v("Search overlapping")]),e("span",{staticClass:"button-toolbar-spacer"}),e("b-pagination",{staticClass:"mb-0",attrs:{"total-rows":t.paginator.totalRows,"per-page":t.paginator.pageSize,"aria-controls":t.paginator.ariaControl,limit:"5"},model:{value:t.paginator.pageNumber,callback:function(a){t.$set(t.paginator,"pageNumber",a)},expression:"paginator.pageNumber"}})],1)],1),e("b-modal",{ref:"metadataDetailModal",attrs:{size:"md",title:t.metadataDetailModalTitle,"hide-footer":"",static:"",lazy:""}},[t.metadataDetailModalMetadata?e("metadata-detail",{attrs:{metadata:t.metadataDetailModalMetadata}}):t._e()],1),e("b-modal",{ref:"overlappingDatasetsModal",attrs:{size:"xl",title:t.overlappingDatasetsModalTitle,"hide-footer":"",static:"",lazy:""}},[e("dataset",{attrs:{"initial-search-filter":t.overlappingDatasetsModalSearchFilter}})],1),e("data-selection-save",{ref:"dataSelectionSave"})],1)},r=[],n=e("2909"),l=(e("d3b7"),e("3ca3"),e("ddb0"),e("2b3d"),e("b0c0"),e("99af"),e("a15b"),e("d81d"),e("159b"),e("25f0"),e("1fdb")),o=e("eaef"),s=e("72f4"),d=e("da68"),c={name:"MetadataList",components:{MetadataDetail:d["default"],Dataset:s["a"],DataSelectionSave:o["a"]},props:{dataset:{type:Object,required:!0},searchParams:{type:URLSearchParams,required:!0},columns:{type:Array,required:!0}},data:function(){return{paginator:this.$SVO.getPaginator(this.dataset.metadata.resource_uri),selection:[],metadataDetailModalTitle:this.dataset.name,metadataDetailModalMetadata:null,overlappingDatasetsModalSearchFilter:new l["a"],overlappingDatasetsModalTitle:"Datasets"}},computed:{metadataTableFields:function(){return[{key:"checkbox",label:""},{key:"download_button",label:"Download",formatter:function(t,a,e){return e.data_location.offline?null:e.data_location.file_url}}].concat(Object(n["a"])(this.columns),[{key:"tags",label:"Tags",formatter:function(t){return t.map((function(t){return t.name})).join(", ")}}])},metadataTableCaption:function(){return this.paginator.items.length>0?"Click on any row to see data details":"No metadata correspond to your search criteria"},selectionEmpty:function(){return 0==this.selection.length}},watch:{searchParams:{handler:"updatePaginator",immediate:!0}},methods:{updatePaginator:function(t){this.selection=[];try{this.paginator.searchParams=t,this.paginator.loadPage(1)}catch(a){this.$displayErrorMessage(this.$SVO.parseError(a))}},showMetadataDetailModal:function(t){t.length>0&&(this.metadataDetailModalMetadata=t[0],this.$refs.metadataTable.clearSelected(),this.$nextTick((function(){this.$refs.metadataDetailModal.show()})))},saveSelection:function(){var t=new URLSearchParams;this.selection.forEach((function(a){return t.append("oid__in",a.oid)})),this.$refs.dataSelectionSave.save(this.dataset,t.toString())},saveAll:function(){this.$refs.dataSelectionSave.save(this.dataset,this.searchParams.toString())},searchOverlappingDatasets:function(){this.overlappingDatasetsModalTitle="Datasets overlapping selected ".concat(this.dataset.name," data"),this.overlappingDatasetsModalSearchFilter=new l["a"]({dateRange:{min:new Date(Math.min.apply(Math,Object(n["a"])(this.selection.map((function(t){return new Date(t.date_beg)}))))),max:new Date(Math.max.apply(Math,Object(n["a"])(this.selection.map((function(t){return new Date(t.date_end)})))))},search:this.selection.map((function(t){return"(date_beg__lt = ".concat(t.date_end," and date_end__gt = ").concat(t.date_beg,")")})).join(" or ")}),this.$refs.overlappingDatasetsModal.show()}}},u=c,p=e("2877"),h=Object(p["a"])(u,i,r,!1,null,null,null);a["default"]=h.exports},"1e25":function(t,a,e){"use strict";var i=e("23e7"),r=e("58a8").end,n=e("c8d2"),l=n("trimEnd"),o=l?function(){return r(this)}:"".trimEnd;i({target:"String",proto:!0,forced:l},{trimEnd:o,trimRight:o})},"466d":function(t,a,e){"use strict";var i=e("d784"),r=e("825a"),n=e("50c4"),l=e("1d80"),o=e("8aa5"),s=e("14c3");i("match",(function(t,a,e){return[function(a){var e=l(this),i=void 0==a?void 0:a[t];return void 0!==i?i.call(a,e):new RegExp(a)[t](String(e))},function(t){var i=e(a,this,t);if(i.done)return i.value;var l=r(this),d=String(t);if(!l.global)return s(l,d);var c=l.unicode;l.lastIndex=0;var u,p=[],h=0;while(null!==(u=s(l,d))){var m=String(u[0]);p[h]=m,""===m&&(l.lastIndex=o(d,n(l.lastIndex),c)),h++}return 0===h?null:p}]}))},da68:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("b-img",{attrs:{src:t.imageURL,center:"","fluid-grow":"",alt:"Data thumbnail"}}),e("b-form-group",{staticClass:"my-2"},[e("b-input-group",[e("b-form-input",{attrs:{type:"search",placeholder:"Filter metadata",debounce:"250"},model:{value:t.searchFilter,callback:function(a){t.searchFilter=a},expression:"searchFilter"}}),e("b-input-group-append",[e("b-button",{attrs:{disabled:!t.searchFilter},on:{click:t.clearSearchFilter}},[t._v("Clear")])],1)],1)],1),e("b-table",{attrs:{items:t.cards,fields:t.fields,filter:t.searchFilter,"filter-included-fields":t.filterIncludedFields,"primary-key":"id","sticky-header":"","show-empty":"",small:""}})],1)},r=[],n=e("3835"),l=(e("1e25"),e("d81d"),e("ac1f"),e("466d"),e("4de4"),e("4fad"),e("99af"),{name:"MetadataDetail",props:{metadata:{type:Object,required:!0}},data:function(){return{searchFilter:""}},computed:{imageURL:function(){return this.metadata.data_location.thumbnail_url?this.metadata.data_location.thumbnail_url:e("14e6")},fitsHeader:function(){return this.metadata.fits_header?this.metadata.fits_header.trimEnd():""},fields:function(){return[{key:"text",label:this.fitsHeader.length>0?"FITS header":"Metadata"}]},filterIncludedFields:function(){return["text"]},cards:function(){return this.fitsHeader.length>0?this.fitsHeader.match(/[^]{1,80}/g).map((function(t,a){return{id:a,text:t}})):Object.entries(this.metadata).filter((function(t){var a=Object(n["a"])(t,2),e=a[1];return!(e instanceof Object)})).map((function(t,a){var e=Object(n["a"])(t,2),i=e[0],r=e[1];return{id:a,text:"".concat(i," = ").concat(r)}}))}},methods:{clearSearchFilter:function(){this.searchFilter=""}}}),o=l,s=e("2877"),d=Object(s["a"])(o,i,r,!1,null,null,null);a["default"]=d.exports}}]);
//# sourceMappingURL=MetadataList.a6244fb8.js.map