(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["HekEvent","Dataset"],{"40dd":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-row",[a("b-col",{attrs:{cols:"4"}},[a("hek-event-form",{model:{value:e.searchFilter,callback:function(t){e.searchFilter=t},expression:"searchFilter"}})],1),a("b-col",{attrs:{cols:"8"}},[a("hek-event-list",{attrs:{"search-filter":e.searchFilter}})],1)],1)},i=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-form",{on:{submit:function(t){return t.preventDefault(),e.updateSearchFilter.apply(null,arguments)}}},[a("b-form-group",{attrs:{label:"Event types","label-for":"event-type"}},[a("b-form-select",{attrs:{id:"event-type",options:e.searchFilter.eventTypeOptions,multiple:""},model:{value:e.searchFilter.eventType,callback:function(t){e.$set(e.searchFilter,"eventType",t)},expression:"searchFilter.eventType"}})],1),a("base-datetime-range",{attrs:{label:"Event time","min-label":"Start","max-label":"End"},model:{value:e.searchFilter.dateRange,callback:function(t){e.$set(e.searchFilter,"dateRange",t)},expression:"searchFilter.dateRange"}}),a("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Search")])],1)},l=[],s=a("2909"),o=a("3835"),c=a("d4ec"),u=a("bee2"),d=a("ade3"),h=(a("d81d"),a("4fad"),a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("a15b"),a("5fb0")),v=function(){function e(t){Object(c["a"])(this,e),Object(d["a"])(this,"eventType",[]),Object(d["a"])(this,"dateRange",{min:null,max:null}),Object(d["a"])(this,"eventTypeOptions",Object.entries(h["f"]).map((function(e){var t=Object(o["a"])(e,2),a=t[0],n=t[1];return{value:a,text:n}}))),t&&(Array.isArray(t.eventType)&&(this.eventType=Object(s["a"])(t.eventType)),t.dateRange&&(this.dateRange={min:t.dateRange.min,max:t.dateRange.max}))}return Object(u["a"])(e,[{key:"getSearchParams",value:function(){var e=new URLSearchParams(h["e"]);return this.eventType&&this.eventType.length>0&&e.set("event_type",this.eventType.join(",")),this.dateRange.min&&e.set("event_starttime",this.dateRange.min.toISOString()),this.dateRange.max&&e.set("event_endtime",this.dateRange.max.toISOString()),e}}]),e}(),f={name:"HekEventForm",props:{value:{type:v,required:!0}},data:function(){return{searchFilter:new v(this.value)}},methods:{updateSearchFilter:function(){this.$emit("input",new v(this.searchFilter))}}},p=f,m=a("2877"),b=Object(m["a"])(p,r,l,!1,null,null,null),k=b.exports,g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-overlay",{attrs:{show:e.paginator.loading,rounded:"sm"}},[a("b-table",{ref:"eventTable",attrs:{id:e.paginator.ariaControl,items:e.paginator.items,fields:e.eventTableFields,caption:e.eventTableCaption,"primary-key":"id","select-mode":"single",small:"",hover:"",selectable:""},on:{"row-selected":e.showEventDetailModal},scopedSlots:e._u([{key:"cell(checkbox)",fn:function(t){return[a("b-form-checkbox",{attrs:{value:t.item,size:"lg"},model:{value:e.selection,callback:function(t){e.selection=t},expression:"selection"}})]}}])}),a("b-button-toolbar",{attrs:{"key-nav":""}},[a("b-button",{attrs:{disabled:e.selectionEmpty,variant:"primary",title:"Select one or more event to search for overlapping data"},on:{click:e.showOverlappingDatasetModal}},[e._v("Search overlapping ("+e._s(e.selection.length)+")")]),a("span",{staticClass:"button-toolbar-spacer"}),a("b-pagination",{staticClass:"mb-0",attrs:{"total-rows":e.paginator.totalRows,"per-page":e.paginator.pageSize,"aria-controls":e.paginator.ariaControl,limit:"3","hide-goto-end-buttons":""},model:{value:e.paginator.pageNumber,callback:function(t){e.$set(e.paginator,"pageNumber",t)},expression:"paginator.pageNumber"}})],1)],1),a("b-modal",{ref:"eventDetailModal",attrs:{size:"md",title:e.eventDetailModalTitle,"hide-footer":"",static:"",lazy:""}},[e.eventDetailModalEvent?a("hek-event-detail",{attrs:{event:e.eventDetailModalEvent}}):e._e()],1),a("b-modal",{ref:"overlappingDatasetsModal",attrs:{size:"xl",title:e.overlappingDatasetsModalTitle,"hide-footer":"",static:"",lazy:""}},[a("dataset",{attrs:{"initial-search-filter":e.overlappingDatasetsModalSearchFilter}})],1)],1)},y=[],x=(a("6062"),a("a630"),a("99af"),a("1fdb")),M=a("72f4"),E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-img",{attrs:{center:"",fluid:"",src:e.event.thumbnailUrl,alt:"Event thumbnail"}}),a("dl",{staticClass:"dl-horizontal"},[a("dt",[e._v("Start time")]),a("dd",[e._v(e._s(e.$utils.formatDate(e.event.startTime)))]),a("dt",[e._v("End time")]),a("dd",[e._v(e._s(e.$utils.formatDate(e.event.endTime)))]),a("dt",[e._v("Recognition method")]),a("dd",[e._v(e._s(e.event.frm_name))]),a("dt",[e._v("Identifier name")]),a("dd",[e._v(e._s(e.event.frm_identifier))])]),a("a",{attrs:{href:e.event.detailUrl,target:"_blank"}},[e._v("See more details")])],1)},_=[],D={name:"HekEventDetail",props:{event:{type:Object,required:!0}}},S=D,T=Object(m["a"])(S,E,_,!1,null,null,null),w=T.exports,F={name:"HekEventList",components:{HekEventDetail:w,Dataset:M["default"]},props:{searchFilter:{type:v,required:!0}},data:function(){return{paginator:this.$HEK.getPaginator(),selection:[],eventDetailModalEvent:null,eventDetailModalTitle:"",overlappingDatasetsModalSearchFilter:new x["a"],overlappingDatasetsModalTitle:"Datasets"}},computed:{eventTableFields:function(){return[{key:"checkbox",label:""},{key:"type",label:"Type"},{key:"startTime",label:"Start time",formatter:this.$utils.formatDate},{key:"endTime",label:"End time",formatter:this.$utils.formatDate}]},eventTableCaption:function(){return this.paginator.items.length>0?"Click on any row to see the event details":"No event correspond to your search criteria"},selectionEmpty:function(){return 0==this.selection.length}},watch:{searchFilter:{handler:"updatePaginator",immediate:!0}},methods:{updatePaginator:function(e){this.paginator.searchParams=e.getSearchParams();try{this.paginator.loadPage(1),this.selection=[]}catch(t){this.$displayErrorMessage(t)}},showEventDetailModal:function(e){e.length>0&&(this.eventDetailModalEvent=e[0],this.eventDetailModalTitle=this.eventDetailModalEvent.type,this.$refs.eventTable.clearSelected(),this.$nextTick((function(){this.$refs.eventDetailModal.show()})))},showOverlappingDatasetModal:function(){var e=new Set(this.selection.map((function(e){return e.type})));this.overlappingDatasetsModalTitle="Datasets overlapping selected ".concat(Array.from(e).join(", ")," events"),this.overlappingDatasetsModalSearchFilter=new x["a"]({dateRange:{min:new Date(Math.min.apply(Math,Object(s["a"])(this.selection.map((function(e){return e.startTime}))))),max:new Date(Math.max.apply(Math,Object(s["a"])(this.selection.map((function(e){return e.endTime})))))},search:this.selection.map((function(e){return"(date_beg__lt = ".concat(e.endTime.toISOString()," and date_end__gt = ").concat(e.startTime.toISOString(),")")})).join(" or ")}),this.$refs.overlappingDatasetsModal.show()}}},L=F,O=Object(m["a"])(L,g,y,!1,null,null,null),R=O.exports,j={name:"HekEvent",components:{HekEventForm:k,HekEventList:R},props:{initialSearchFilter:{type:v,required:!1,default:null}},data:function(){return{searchFilter:new v(this.initialSearchFilter)}}},C=j,$=Object(m["a"])(C,n,i,!1,null,null,null);t["default"]=$.exports},6062:function(e,t,a){"use strict";var n=a("6d61"),i=a("6566");e.exports=n("Set",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),i)},6566:function(e,t,a){"use strict";var n=a("9bf2").f,i=a("7c73"),r=a("e2cc"),l=a("0366"),s=a("19aa"),o=a("2266"),c=a("7dd0"),u=a("2626"),d=a("83ab"),h=a("f183").fastKey,v=a("69f3"),f=v.set,p=v.getterFor;e.exports={getConstructor:function(e,t,a,c){var u=e((function(e,n){s(e,u,t),f(e,{type:t,index:i(null),first:void 0,last:void 0,size:0}),d||(e.size=0),void 0!=n&&o(n,e[c],{that:e,AS_ENTRIES:a})})),v=p(t),m=function(e,t,a){var n,i,r=v(e),l=b(e,t);return l?l.value=a:(r.last=l={index:i=h(t,!0),key:t,value:a,previous:n=r.last,next:void 0,removed:!1},r.first||(r.first=l),n&&(n.next=l),d?r.size++:e.size++,"F"!==i&&(r.index[i]=l)),e},b=function(e,t){var a,n=v(e),i=h(t);if("F"!==i)return n.index[i];for(a=n.first;a;a=a.next)if(a.key==t)return a};return r(u.prototype,{clear:function(){var e=this,t=v(e),a=t.index,n=t.first;while(n)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete a[n.index],n=n.next;t.first=t.last=void 0,d?t.size=0:e.size=0},delete:function(e){var t=this,a=v(t),n=b(t,e);if(n){var i=n.next,r=n.previous;delete a.index[n.index],n.removed=!0,r&&(r.next=i),i&&(i.previous=r),a.first==n&&(a.first=i),a.last==n&&(a.last=r),d?a.size--:t.size--}return!!n},forEach:function(e){var t,a=v(this),n=l(e,arguments.length>1?arguments[1]:void 0,3);while(t=t?t.next:a.first){n(t.value,t.key,this);while(t&&t.removed)t=t.previous}},has:function(e){return!!b(this,e)}}),r(u.prototype,a?{get:function(e){var t=b(this,e);return t&&t.value},set:function(e,t){return m(this,0===e?0:e,t)}}:{add:function(e){return m(this,e=0===e?0:e,e)}}),d&&n(u.prototype,"size",{get:function(){return v(this).size}}),u},setStrong:function(e,t,a){var n=t+" Iterator",i=p(t),r=p(n);c(e,t,(function(e,t){f(this,{type:n,target:e,state:i(e),kind:t,last:void 0})}),(function(){var e=r(this),t=e.kind,a=e.last;while(a&&a.removed)a=a.previous;return e.target&&(e.last=a=a?a.next:e.state.first)?"keys"==t?{value:a.key,done:!1}:"values"==t?{value:a.value,done:!1}:{value:[a.key,a.value],done:!1}:(e.target=void 0,{value:void 0,done:!0})}),a?"entries":"values",!a,!0),u(t)}}},f4cd:function(e,t,a){var n={"./":["feb8"],"./AiaLevel1":["0584","chunk-34c90180","chunk-2f77b32e","chunk-2d0a40b7"],"./AiaLevel1.vue":["0584","chunk-34c90180","chunk-2f77b32e","chunk-2d0a40b7"],"./Chromis":["d5d7","chunk-34c90180","chunk-2f77b32e","chunk-2d21e95a"],"./Chromis.vue":["d5d7","chunk-34c90180","chunk-2f77b32e","chunk-2d21e95a"],"./Crisp":["d54f","chunk-34c90180","chunk-2f77b32e","chunk-2d21e3b9"],"./Crisp.vue":["d54f","chunk-34c90180","chunk-2f77b32e","chunk-2d21e3b9"],"./EitLevel0":["fff9","chunk-34c90180","chunk-2f77b32e","chunk-2d238a49"],"./EitLevel0.vue":["fff9","chunk-34c90180","chunk-2f77b32e","chunk-2d238a49"],"./EuiLevel2":["1de0","chunk-34c90180","chunk-2f77b32e","chunk-2d0b6af4"],"./EuiLevel2.vue":["1de0","chunk-34c90180","chunk-2f77b32e","chunk-2d0b6af4"],"./HmiMagnetogram":["a220","chunk-34c90180","chunk-2f77b32e","chunk-2d207ae5"],"./HmiMagnetogram.vue":["a220","chunk-34c90180","chunk-2f77b32e","chunk-2d207ae5"],"./LyraLevel2":["d66f","chunk-34c90180","chunk-864b762c"],"./LyraLevel2.vue":["d66f","chunk-34c90180","chunk-864b762c"],"./Metadata":["cf02","chunk-34c90180","chunk-b078d6e6"],"./Metadata.vue":["cf02","chunk-34c90180","chunk-b078d6e6"],"./MetadataDetail":["da68","chunk-0d2598bc"],"./MetadataDetail.vue":["da68","chunk-0d2598bc"],"./MetadataList":["1344","chunk-34c90180","chunk-1f35214d"],"./MetadataList.vue":["1344","chunk-34c90180","chunk-1f35214d"],"./MetadataMixin":["1814","chunk-34c90180","chunk-3d9ecad2"],"./MetadataMixin.js":["1814","chunk-34c90180","chunk-3d9ecad2"],"./SwapLevel1":["a991","chunk-34c90180","chunk-2f77b32e","chunk-2d209606"],"./SwapLevel1.vue":["a991","chunk-34c90180","chunk-2f77b32e","chunk-2d209606"],"./Xrt":["f513","chunk-34c90180","chunk-2f77b32e","chunk-2d22cbe7"],"./Xrt.vue":["f513","chunk-34c90180","chunk-2f77b32e","chunk-2d22cbe7"],"./index":["feb8"],"./index.js":["feb8"]};function i(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],i=t[0];return Promise.all(t.slice(1).map(a.e)).then((function(){return a(i)}))}i.keys=function(){return Object.keys(n)},i.id="f4cd",e.exports=i},feb8:function(e,t,a){"use strict";a.r(t),t["default"]={default:"Metadata","AIA level 1":"AiaLevel1",CRISP:"Crisp",CHROMIS:"Chromis","EIT level 0":"EitLevel0","EUI level 2":"EuiLevel2","HMI magnetogram":"HmiMagnetogram","SWAP level 1":"SwapLevel1","LYRA level 2":"LyraLevel2","LYRA level 3":"LyraLevel2",XRT:"Xrt"}}}]);
//# sourceMappingURL=HekEvent.cbe226fa.js.map