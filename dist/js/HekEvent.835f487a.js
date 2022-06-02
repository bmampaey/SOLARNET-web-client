(self["webpackChunksvo"]=self["webpackChunksvo"]||[]).push([[559,470,496,601,897,332],{3852:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return L}});var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-row",[a("b-col",{attrs:{cols:"12",lg:"4"}},[a("b-card",{staticClass:"mb-3",attrs:{"no-body":""}},[a("b-card-header",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:e.eventFilterId,expression:"eventFilterId"}],attrs:{"header-tag":"header",title:"Click to show/hide the event filters"}},[e._v(" Filter events "),a("b-button",{staticClass:"hide-btn",attrs:{size:"sm","aria-controls":e.eventFilterId}},[e._v("Hide")]),a("b-button",{staticClass:"show-btn",attrs:{size:"sm","aria-controls":e.eventFilterId}},[e._v("Show")])],1),a("b-collapse",{attrs:{id:e.eventFilterId,visible:""}},[a("b-card-body",[a("hek-event-form",{model:{value:e.searchFilter,callback:function(t){e.searchFilter=t},expression:"searchFilter"}})],1)],1)],1)],1),a("b-col",{attrs:{cols:"12",lg:"8"}},[a("hek-event-list",{attrs:{"search-filter":e.searchFilter}})],1)],1)},i=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-form",{on:{submit:function(t){return t.preventDefault(),e.updateSearchFilter.apply(null,arguments)}}},[a("b-form-group",{attrs:{label:"Event types","label-for":"event-type"}},[a("b-form-select",{attrs:{id:"event-type",options:e.searchFilter.eventTypeOptions,multiple:""},model:{value:e.searchFilter.eventType,callback:function(t){e.$set(e.searchFilter,"eventType",t)},expression:"searchFilter.eventType"}})],1),a("datetime-range",{attrs:{label:"Event time","min-label":"Start","max-label":"End"},model:{value:e.searchFilter.dateRange,callback:function(t){e.$set(e.searchFilter,"dateRange",t)},expression:"searchFilter.dateRange"}}),a("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Search")])],1)},r=[],s=a(8932),o=a(5200),d=a(6133),c=a(2751),v=a(3796),u=(a(1249),a(9720),a(1539),a(8783),a(3948),a(1637),a(9600),a(9308)),p=function(){function e(t){(0,d.Z)(this,e),(0,v.Z)(this,"eventType",[]),(0,v.Z)(this,"dateRange",{min:null,max:null}),(0,v.Z)(this,"eventTypeOptions",Object.entries(u.iq).map((function(e){var t=(0,o.Z)(e,2),a=t[0],n=t[1];return{value:a,text:n}}))),t&&(Array.isArray(t.eventType)&&(this.eventType=(0,s.Z)(t.eventType)),t.dateRange&&(this.dateRange={min:t.dateRange.min,max:t.dateRange.max}))}return(0,c.Z)(e,[{key:"getSearchParams",value:function(){var e=new URLSearchParams(u.vH);return this.eventType&&this.eventType.length>0&&e.set("event_type",this.eventType.join(",")),this.dateRange.min&&e.set("event_starttime",this.dateRange.min.toISOString()),this.dateRange.max&&e.set("event_endtime",this.dateRange.max.toISOString()),e}}]),e}(),h={name:"HekEventForm",props:{value:{type:p,required:!0}},data:function(){return{searchFilter:new p(this.value)}},methods:{updateSearchFilter:function(){this.$emit("input",new p(this.searchFilter))}}},m=h,g=a(1001),b=(0,g.Z)(m,l,r,!1,null,null,null),f=b.exports,y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-overlay",{attrs:{show:e.paginator.loading,rounded:"sm"}},[a("b-button-toolbar",{staticClass:"mb-3",attrs:{"key-nav":"","aria-label":"Control table displayed rows and columns"}},[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal",value:e.tableSettingsModalId,expression:"tableSettingsModalId"}],attrs:{size:"sm",variant:"outline-secondary",title:"Change table display settings"}},[e._v("Settings")]),a("span",{staticClass:"button-toolbar-spacer"}),a("pagination",{staticClass:"mb-0",attrs:{"page-number":e.paginator.pageNumber,"page-count":e.paginator.pageCount,"page-jump":1,"page-displayed":3,"aria-controls":e.tableId},on:{change:e.updatePageNumber}})],1),a("b-table",{ref:"eventTable",attrs:{id:e.tableId,items:e.paginator.items,fields:e.eventTableFields,caption:e.eventTableCaption,"primary-key":"id","select-mode":"single",responsive:"",small:"",hover:"",selectable:""},on:{"row-selected":e.showEventDetailModal},scopedSlots:e._u([{key:"cell(checkbox)",fn:function(t){return[a("b-form-checkbox",{attrs:{value:t.item,size:"lg"},model:{value:e.selection,callback:function(t){e.selection=t},expression:"selection"}})]}}])}),a("b-button-toolbar",{attrs:{"key-nav":"","aria-label":"Actions on displayed and selected rows"}},[a("b-button",{attrs:{disabled:e.selectionEmpty,variant:"primary",title:"Select one or more event to search for overlapping data"},on:{click:e.showOverlappingDatasetModal}},[e._v("Search overlapping ("+e._s(e.selection.length)+")")])],1)],1),a("b-modal",{ref:"eventDetailModal",attrs:{size:"md",title:e.eventDetailModalTitle,"hide-footer":"",static:"",lazy:""}},[e.eventDetailModalEvent?a("hek-event-detail",{attrs:{event:e.eventDetailModalEvent}}):e._e()],1),a("b-modal",{ref:"overlappingDatasetsModal",attrs:{size:"full",title:e.overlappingDatasetsModalTitle,"hide-footer":"",static:"",lazy:""}},[a("dataset",{attrs:{"initial-search-filter":e.overlappingDatasetsModalSearchFilter}})],1),a("table-settings-modal",{attrs:{"default-settings":e.tableSettings,"modal-id":e.tableSettingsModalId,"aria-controls":e.tableId},on:{change:e.updateTableSettings}})],1)},S=[],_=(a(189),a(1038),a(2222),a(760)),M=a(1276),E=a(9750),T=a(1567),D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-img",{attrs:{center:"",fluid:"",src:e.event.thumbnailUrl,alt:"Event thumbnail"}}),a("dl",{staticClass:"dl-horizontal"},[a("dt",[e._v("Start time")]),a("dd",[e._v(e._s(e.$utils.formatDate(e.event.startTime)))]),a("dt",[e._v("End time")]),a("dd",[e._v(e._s(e.$utils.formatDate(e.event.endTime)))]),a("dt",[e._v("Recognition method")]),a("dd",[e._v(e._s(e.event.frm_name))]),a("dt",[e._v("Identifier name")]),a("dd",[e._v(e._s(e.event.frm_identifier))])]),a("a",{attrs:{href:e.event.detailUrl,target:"_blank"}},[e._v("See more details")])],1)},I=[],k={name:"HekEventDetail",props:{event:{type:Object,required:!0}}},F=k,w=(0,g.Z)(F,D,I,!1,null,null,null),x=w.exports,Z={name:"HekEventList",components:{HekEventDetail:x,Dataset:M["default"],Pagination:E.Z,TableSettingsModal:T.Z},props:{searchFilter:{type:p,required:!0}},data:function(){var e=this.$HEK.getPaginator(),t=new T._({pageSize:e.pageSize,pageSizeMinimum:u.dZ.MINIMUM_PAGESIZE,pageSizeMaximum:u.dZ.MAXIMUM_PAGESIZE,ordering:e.ordering,orderingOptions:[{value:"event_type",text:"Event type"},{value:"startTime",text:"Start time"},{value:"endTime",text:"End time"},{value:"frm_name",text:"Method"}]});return{tableId:this.$utils.getUniqueId(),paginator:e,selection:[],eventDetailModalEvent:null,eventDetailModalTitle:"",overlappingDatasetsModalSearchFilter:new _.Z,overlappingDatasetsModalTitle:"Datasets",tableSettings:t,tableSettingsModalId:this.$utils.getUniqueId()}},computed:{eventTableFields:function(){return[{key:"checkbox",label:""},{key:"type",label:"Type"},{key:"startTime",label:"Start time",formatter:this.$utils.formatDate},{key:"endTime",label:"End time",formatter:this.$utils.formatDate},{key:"frm_name",label:"Method"}]},eventTableCaption:function(){return this.paginator.items.length>0?"Click on any row to see the event details":"No event correspond to your search criteria"},selectionEmpty:function(){return 0==this.selection.length}},watch:{searchFilter:{handler:"updatePaginator",immediate:!0}},methods:{updatePaginator:function(e){this.paginator.searchParams=e.getSearchParams();try{this.paginator.loadPage(1),this.selection=[]}catch(t){this.$displayErrorMessage(t)}},updatePageNumber:function(e){this.paginator.loadPage(e)},updateTableSettings:function(e){this.paginator.pageSize==e.pageSize&&this.paginator.ordering==e.ordering||(this.paginator.pageSize=e.pageSize,this.paginator.ordering=e.ordering,this.paginator.loadPage(1)),this.tableSettings=e},showEventDetailModal:function(e){e.length>0&&(this.eventDetailModalEvent=e[0],this.eventDetailModalTitle=this.eventDetailModalEvent.type,this.$refs.eventTable.clearSelected(),this.$nextTick((function(){this.$refs.eventDetailModal.show()})))},showOverlappingDatasetModal:function(){var e=new Set(this.selection.map((function(e){return e.type})));this.overlappingDatasetsModalTitle="Datasets overlapping selected ".concat(Array.from(e).join(", ")," events"),this.overlappingDatasetsModalSearchFilter=new _.Z({dateRange:{min:new Date(Math.min.apply(Math,(0,s.Z)(this.selection.map((function(e){return e.startTime}))))),max:new Date(Math.max.apply(Math,(0,s.Z)(this.selection.map((function(e){return e.endTime})))))},search:this.selection.map((function(e){return"(date_beg__lte = ".concat(e.endTime.toISOString()," and date_end__gte = ").concat(e.startTime.toISOString(),")")})).join(" or ")}),this.$refs.overlappingDatasetsModal.show()}}},C=Z,R=(0,g.Z)(C,y,S,!1,null,null,null),$=R.exports,A={name:"HekEvent",components:{HekEventForm:f,HekEventList:$},props:{initialSearchFilter:{type:p,required:!1,default:null}},data:function(){return{searchFilter:new p(this.initialSearchFilter),eventFilterId:this.$utils.getUniqueId()}}},z=A,P=(0,g.Z)(z,n,i,!1,null,null,null),L=P.exports},7327:function(e,t,a){"use strict";var n=a(2109),i=a(2092).filter,l=a(1194),r=l("filter");n({target:"Array",proto:!0,forced:!r},{filter:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},1038:function(e,t,a){var n=a(2109),i=a(8457),l=a(7072),r=!l((function(e){Array.from(e)}));n({target:"Array",stat:!0,forced:r},{from:i})},452:function(e,t,a){"use strict";a.r(t),t["default"]={default:"Default","AIA level 1":"AiaLevel1",CRISP:"Crisp",CHROMIS:"Chromis","EIT level 0":"EitLevel0","EIT synoptic":"EitSynoptic","EUI level 1":"EuiLevel2","EUI level 2":"EuiLevel2","EUVI level 0":"EuviLevel0","GAIA DEM":"GaiaDem","HMI magnetogram":"HmiMagnetogram","SWAP level 1":"SwapLevel1","LYRA level 2":"LyraLevel2","LYRA level 3":"LyraLevel2",XRT:"Xrt"}}}]);
//# sourceMappingURL=HekEvent.835f487a.js.map