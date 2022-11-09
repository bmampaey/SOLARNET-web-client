(self["webpackChunksvo"]=self["webpackChunksvo"]||[]).push([[463,219],{4189:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return c}});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-img",{attrs:{src:t.imageURL,center:"","fluid-grow":"",alt:"Data thumbnail"}}),a("b-form-group",{staticClass:"my-2",attrs:{label:"Filter metadata","label-for":t.metadataFilterId,"label-sr-only":""}},[a("b-input-group",[a("b-form-input",{attrs:{id:t.metadataFilterId,type:"search",placeholder:"Filter metadata",title:"Type anything to filter the metadata on keyword or value",debounce:"250"},model:{value:t.metadataFilter,callback:function(e){t.metadataFilter=e},expression:"metadataFilter"}}),a("b-input-group-append",[a("b-button",{attrs:{disabled:!t.metadataFilter,title:"Clear the metadata filter"},on:{click:t.clearMetadataFilter}},[t._v("Clear")])],1)],1)],1),a("b-tabs",{attrs:{"content-class":"mt-3"}},[a("b-tab",{attrs:{title:"Metadata",active:""}},[a("b-table",{attrs:{items:t.metadataItems,fields:t.fields,filter:t.metadataFilter,"filter-included-fields":t.filterIncludedFields,"primary-key":"id","thead-class":"d-none",responsive:"","show-empty":"",small:""}})],1),t.fitsHeader?a("b-tab",{attrs:{title:"FITS header"}},[a("b-table",{attrs:{items:t.fitsHeaderItems,fields:t.fields,filter:t.metadataFilter,"filter-included-fields":t.filterIncludedFields,"primary-key":"id","thead-class":"d-none",responsive:"","show-empty":"",small:""}})],1):t._e()],1)],1)},n=[],r=a(5200),s=(a(8702),a(1249),a(7327),a(1539),a(9720),a(6699),a(2023),a(2222),a(4916),a(4723),{name:"MetadataDetail",props:{metadata:{type:Object,required:!0}},data:function(){return{metadataFilter:"",metadataFilterId:this.$utils.getUniqueId(),fields:["text"],filterIncludedFields:["text"],forbiddenMetadataKeys:["fits_header","resource_uri","data_location","tags"]}},computed:{imageURL:function(){return this.metadata.data_location.thumbnail_url?this.metadata.data_location.thumbnail_url:a(1170)},fitsHeader:function(){return this.metadata.fits_header?this.metadata.fits_header.trimEnd():""},metadataItems:function(){var t=this;return Object.entries(this.metadata).filter((function(e){var a=(0,r.Z)(e,1),i=a[0];return!t.forbiddenMetadataKeys.includes(i)})).map((function(t,e){var a=(0,r.Z)(t,2),i=a[0],n=a[1];return{id:e,text:"".concat(i," = ").concat(n)}}))},fitsHeaderItems:function(){return this.fitsHeader.match(/[^]{1,80}/g).map((function(t,e){return{id:e,text:t}}))}},methods:{clearMetadataFilter:function(){this.metadataFilter=""}}}),o=s,l=a(1001),d=(0,l.Z)(o,i,n,!1,null,null,null),c=d.exports},7463:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return D}});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-overlay",{attrs:{show:t.paginator.loading,rounded:"sm"}},[a("b-button-toolbar",{staticClass:"mb-3",attrs:{"key-nav":"","aria-label":"Control table displayed rows and columns"}},[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal",value:t.tableSettingsModalId,expression:"tableSettingsModalId"}],attrs:{size:"sm",variant:"outline-secondary",title:"Change table display settings"}},[t._v("Settings")]),a("span",{staticClass:"button-toolbar-spacer"}),a("pagination",{staticClass:"mb-0",attrs:{"page-number":t.paginator.pageNumber,"page-count":t.paginator.pageCount,"aria-controls":t.tableId,size:"sm"},on:{change:t.updatePageNumber}})],1),a("b-table",{ref:"metadataTable",attrs:{id:t.tableId,items:t.paginator.items,fields:t.metadataTableFields,caption:t.metadataTableCaption,"primary-key":"oid","select-mode":"single",responsive:"",small:"",hover:"",selectable:""},on:{"row-selected":t.showMetadataDetailModal},scopedSlots:t._u([{key:"cell(checkbox)",fn:function(e){return[a("b-form-checkbox",{attrs:{value:e.item,size:"lg"},model:{value:t.selection,callback:function(e){t.selection=e},expression:"selection"}})]}},{key:"cell(download_button)",fn:function(t){return[a("b-button",{attrs:{href:t.value,target:"_blank",title:"Download file",size:"sm",variant:"primary",disabled:t.item.data_location.offline}},[a("b-icon",{attrs:{icon:"download"}})],1)]}}])}),a("b-button-toolbar",{attrs:{"key-nav":"","aria-label":"Actions on displayed and selected rows"}},[a("b-button",{attrs:{disabled:t.selectionEmpty,variant:"primary",title:"Select one or more metadata to create or update a data selection"},on:{click:t.saveSelection}},[t._v("Save selection ("+t._s(t.selection.length)+")")]),a("b-button",{attrs:{variant:"primary",title:"Create or update a data selection with all metadata"},on:{click:t.saveAll}},[t._v("Save all")]),a("b-button",{attrs:{disabled:t.selectionEmpty,title:"Select one or more metadata to search for overlapping data"},on:{click:t.searchOverlappingDatasets}},[t._v("Search overlapping")])],1)],1),a("b-modal",{ref:"metadataDetailModal",attrs:{size:"md",title:t.metadataDetailModalTitle,"hide-footer":"",static:"",lazy:""}},[t.metadataDetailModalMetadata?a("metadata-detail",{attrs:{metadata:t.metadataDetailModalMetadata}}):t._e()],1),a("b-modal",{ref:"overlappingDatasetsModal",attrs:{size:"full",title:t.overlappingDatasetsModalTitle,"hide-footer":"",static:"",lazy:""}},[a("dataset",{attrs:{"initial-search-filter":t.overlappingDatasetsModalSearchFilter}})],1),a("data-selection-save",{ref:"dataSelectionSave"}),a("table-settings-modal",{attrs:{"default-settings":t.tableSettings,"modal-id":t.tableSettingsModalId,"aria-controls":t.tableId},on:{change:t.updateTableSettings}})],1)},n=[],r=a(2032),s=a(8932),o=(a(1539),a(8783),a(3948),a(1637),a(8309),a(2222),a(9600),a(1249),a(189),a(2526),a(1817),a(4747),a(9714),a(760)),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-modal",{ref:"dataSelectionSaveModal",attrs:{size:"md",title:"Save data selection","ok-only":"","ok-variant":"success","hide-footer":!t.dataSelection},on:{hidden:t.resetModal}},[t.dataSelection?[t._v(" Your selection was saved successfully, and is available under the menu "),a("b-link",{attrs:{to:{name:"DataSelections"}}},[t._v('"Data selections"')])]:[a("b-overlay",{attrs:{show:t.showOverlay,rounded:"sm"}},[a("b-form",{on:{submit:function(e){return e.preventDefault(),t.saveDataSelection.apply(null,arguments)}}},[a("b-form-group",{attrs:{label:"Description","label-for":"data-selection-description",description:"Optional description of the data selection"}},[a("b-form-textarea",{attrs:{id:"data-selection-description",lazy:""},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1),a("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Save")])],1)],1),a("p",{staticClass:"text-muted mt-3"},[t._v(" Note: data selections are dynamic, if metadata corresponding to your selection is added, updated or deleted, the selection will be affected ")])]],2)],1)},d=[],c=a(6198),u=(a(5666),{name:"DataSelectionSave",data:function(){return{showOverlay:!1,description:null,dataSelection:null}},methods:{save:function(t,e){this.dataset=t,this.query_string=e,this.$refs.dataSelectionSaveModal.show()},saveDataSelection:function(){var t=this;return(0,c.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.showOverlay=!0,e.prev=1,e.next=4,t.$SVO.data_selection.create({description:t.description,dataset:t.dataset.resource_uri,query_string:t.query_string});case 4:t.dataSelection=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](1),t.$displayErrorMessage(t.$SVO.parseError(e.t0));case 10:t.showOverlay=!1;case 11:case"end":return e.stop()}}),e,null,[[1,7]])})))()},resetModal:function(){this.showOverlay=!1,this.description=null,this.dataSelection=null}}}),m=u,p=a(1001),h=(0,p.Z)(m,l,d,!1,null,null,null),f=h.exports,g=a(1276),b=a(9750),v=a(1567),y=a(4189),S=a(9308),_={name:"MetadataList",components:{MetadataDetail:y["default"],Dataset:g["default"],DataSelectionSave:f,Pagination:b.Z,TableSettingsModal:v.Z},props:{dataset:{type:Object,required:!0},searchParams:{type:URLSearchParams,required:!0},tags:{type:Array,default:function(){return[]}},keywords:{type:Array,default:function(){return[]}},defaultColumns:{type:Array,required:!0}},data:function(){var t=this.$SVO.getPaginator(this.dataset.metadata.resource_uri),e=new v._({pageSize:t.pageSize,ordering:t.ordering,columns:this.defaultColumns});return{tableId:this.$utils.getUniqueId(),paginator:t,selection:[],metadataDetailModalTitle:this.dataset.name,metadataDetailModalMetadata:null,overlappingDatasetsModalSearchFilter:new o.Z,overlappingDatasetsModalTitle:"Datasets",tableSettings:e,tableSettingsModalId:this.$utils.getUniqueId()}},computed:{metadataTableFields:function(){var t=[{key:"checkbox",label:""},{key:"download_button",label:"Download",formatter:function(t,e,a){return a.data_location.offline?null:a.data_location.file_url}}].concat((0,s.Z)(this.tableSettings.columns));return this.tags.length&&t.push({key:"tags",label:"Tags",formatter:function(t){return t.map((function(t){return t.name})).join(", ")}}),t},metadataTableCaption:function(){return this.paginator.items.length>0?"Click on any row to see data details":"No metadata correspond to your search criteria"},selectionEmpty:function(){return 0==this.selection.length}},watch:{searchParams:{handler:"updatePaginator",immediate:!0},keywords:{handler:"loadTableSettingsOptions",immediate:!0}},methods:{updatePaginator:function(t){this.selection=[];try{this.paginator.searchParams=t,this.paginator.loadPage(1)}catch(e){this.$displayErrorMessage(this.$SVO.parseError(e))}},loadTableSettingsOptions:function(){this.tableSettings.pageSizeMinimum=S.By.MINIMUM_PAGESIZE,this.tableSettings.pageSizeMaximum=S.By.MAXIMUM_PAGESIZE,this.tableSettings.orderingOptions=this.defaultColumns.map((function(t){return{text:t["label"],value:t["key"]}})),this.tableSettings.columnOptions=this.defaultColumns.map((function(t){return{text:t["label"],value:t}}));var t,e=new Set(this.defaultColumns.map((function(t){return t["key"]}))),a=(0,r.Z)(this.keywords);try{for(a.s();!(t=a.n()).done;){var i=t.value;e.has(i["name"])||(e.add(i["name"]),this.tableSettings.columnOptions.push({text:i["verbose_name"],value:{label:i["verbose_name"],key:i["name"],headerTitle:i["description"],formatter:"time (ISO 8601)"==i["type"]?this.$utils.formatDate:void 0}}),this.tableSettings.orderingOptions.push({text:i["verbose_name"],value:i["name"]}))}}catch(n){a.e(n)}finally{a.f()}},updatePageNumber:function(t){this.paginator.loadPage(t)},updateTableSettings:function(t){this.paginator.pageSize==t.pageSize&&this.paginator.ordering==t.ordering||(this.paginator.pageSize=t.pageSize,this.paginator.ordering=t.ordering,this.paginator.loadPage(1)),this.tableSettings=t},showMetadataDetailModal:function(t){t.length>0&&(this.metadataDetailModalMetadata=t[0],this.$refs.metadataTable.clearSelected(),this.$nextTick((function(){this.$refs.metadataDetailModal.show()})))},saveSelection:function(){var t=new URLSearchParams;this.selection.forEach((function(e){return t.append("oid__in",e.oid)})),this.$refs.dataSelectionSave.save(this.dataset,t.toString())},saveAll:function(){this.$refs.dataSelectionSave.save(this.dataset,this.searchParams.toString())},searchOverlappingDatasets:function(){this.overlappingDatasetsModalTitle="Datasets overlapping selected ".concat(this.dataset.name," data"),this.overlappingDatasetsModalSearchFilter=new o.Z({dateRange:{min:new Date(Math.min.apply(Math,(0,s.Z)(this.selection.map((function(t){return new Date(t.date_beg)}))))),max:new Date(Math.max.apply(Math,(0,s.Z)(this.selection.map((function(t){return new Date(t.date_end)})))))},search:this.selection.map((function(t){return"(date_beg__lte = ".concat(t.date_end," and date_end__gte = ").concat(t.date_beg,")")})).join(" or ")}),this.$refs.overlappingDatasetsModal.show()}}},M=_,w=(0,p.Z)(M,i,n,!1,null,null,null),D=w.exports},8533:function(t,e,a){"use strict";var i=a(2092).forEach,n=a(9341),r=n("forEach");t.exports=r?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},4964:function(t,e,a){var i=a(5112),n=i("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(a){try{return e[n]=!1,"/./"[t](e)}catch(i){}}return!1}},3929:function(t,e,a){var i=a(7854),n=a(7850),r=i.TypeError;t.exports=function(t){if(n(t))throw r("The method doesn't accept regular expressions");return t}},365:function(t,e,a){"use strict";var i=a(3111).end,n=a(6091);t.exports=n("trimEnd")?function(){return i(this)}:"".trimEnd},6699:function(t,e,a){"use strict";var i=a(2109),n=a(1318).includes,r=a(7293),s=a(1223),o=r((function(){return!Array(1).includes()}));i({target:"Array",proto:!0,forced:o},{includes:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),s("includes")},2023:function(t,e,a){"use strict";var i=a(2109),n=a(1702),r=a(3929),s=a(4488),o=a(1340),l=a(4964),d=n("".indexOf);i({target:"String",proto:!0,forced:!l("includes")},{includes:function(t){return!!~d(o(s(this)),o(r(t)),arguments.length>1?arguments[1]:void 0)}})},4723:function(t,e,a){"use strict";var i=a(6916),n=a(7007),r=a(9670),s=a(7466),o=a(1340),l=a(4488),d=a(8173),c=a(1530),u=a(7651);n("match",(function(t,e,a){return[function(e){var a=l(this),n=void 0==e?void 0:d(e,t);return n?i(n,e,a):new RegExp(e)[t](o(a))},function(t){var i=r(this),n=o(t),l=a(e,i,n);if(l.done)return l.value;if(!i.global)return u(i,n);var d=i.unicode;i.lastIndex=0;var m,p=[],h=0;while(null!==(m=u(i,n))){var f=o(m[0]);p[h]=f,""===f&&(i.lastIndex=c(n,s(i.lastIndex),d)),h++}return 0===h?null:p}]}))},8702:function(t,e,a){a(3462);var i=a(2109),n=a(365);i({target:"String",proto:!0,name:"trimEnd",forced:"".trimEnd!==n},{trimEnd:n})},3462:function(t,e,a){var i=a(2109),n=a(365);i({target:"String",proto:!0,name:"trimEnd",forced:"".trimRight!==n},{trimRight:n})},4747:function(t,e,a){var i=a(7854),n=a(8324),r=a(8509),s=a(8533),o=a(8880),l=function(t){if(t&&t.forEach!==s)try{o(t,"forEach",s)}catch(e){t.forEach=s}};for(var d in n)n[d]&&l(i[d]&&i[d].prototype);l(r)}}]);
//# sourceMappingURL=463.e457a154.js.map