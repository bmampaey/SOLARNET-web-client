(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["HekEvent","Dataset"],{"40dd":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-row",[a("b-col",{attrs:{cols:"4"}},[a("hek-event-form",{model:{value:e.searchFilter,callback:function(t){e.searchFilter=t},expression:"searchFilter"}})],1),a("b-col",{attrs:{cols:"8"}},[a("hek-event-list",{attrs:{"search-filter":e.searchFilter}})],1)],1)},n=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-form",{on:{submit:function(t){return t.preventDefault(),e.updateSearchFilter.apply(null,arguments)}}},[a("b-form-group",{attrs:{label:"Event types","label-for":"event-type"}},[a("b-form-select",{attrs:{id:"event-type",options:e.searchFilter.eventTypeOptions,multiple:""},model:{value:e.searchFilter.eventType,callback:function(t){e.$set(e.searchFilter,"eventType",t)},expression:"searchFilter.eventType"}})],1),a("base-datetime-range",{attrs:{label:"Event time","min-label":"Start","max-label":"End"},model:{value:e.searchFilter.dateRange,callback:function(t){e.$set(e.searchFilter,"dateRange",t)},expression:"searchFilter.dateRange"}}),a("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Search")])],1)},l=[],s=a("2909"),o=a("3835"),v=a("d4ec"),d=a("bee2"),c=a("ade3"),u=(a("d81d"),a("4fad"),a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("a15b"),a("5fb0")),m=function(){function e(t){Object(v["a"])(this,e),Object(c["a"])(this,"eventType",[]),Object(c["a"])(this,"dateRange",{min:null,max:null}),Object(c["a"])(this,"eventTypeOptions",Object.entries(u["f"]).map((function(e){var t=Object(o["a"])(e,2),a=t[0],i=t[1];return{value:a,text:i}}))),t&&(Array.isArray(t.eventType)&&(this.eventType=Object(s["a"])(t.eventType)),t.dateRange&&(this.dateRange={min:t.dateRange.min,max:t.dateRange.max}))}return Object(d["a"])(e,[{key:"getSearchParams",value:function(){var e=new URLSearchParams(u["e"]);return this.eventType&&this.eventType.length>0&&e.set("event_type",this.eventType.join(",")),this.dateRange.min&&e.set("event_starttime",this.dateRange.min.toISOString()),this.dateRange.max&&e.set("event_endtime",this.dateRange.max.toISOString()),e}}]),e}(),p={name:"HekEventForm",props:{value:{type:m,required:!0}},data:function(){return{searchFilter:new m(this.value)}},methods:{updateSearchFilter:function(){this.$emit("input",new m(this.searchFilter))}}},g=p,M=a("2877"),f=Object(M["a"])(g,r,l,!1,null,null,null),h=f.exports,L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-overlay",{attrs:{show:e.paginator.loading,rounded:"sm"}},[a("b-table",{ref:"eventTable",attrs:{id:e.paginator.ariaControl,items:e.paginator.items,fields:e.eventTableFields,caption:e.eventTableCaption,"primary-key":"id","select-mode":"single",small:"",hover:"",selectable:""},on:{"row-selected":e.showEventDetailModal},scopedSlots:e._u([{key:"cell(checkbox)",fn:function(t){return[a("b-form-checkbox",{attrs:{value:t.item,size:"lg"},model:{value:e.selection,callback:function(t){e.selection=t},expression:"selection"}})]}}])}),a("b-button-toolbar",{attrs:{"key-nav":""}},[a("b-button",{attrs:{disabled:e.selectionEmpty,variant:"primary",title:"Select one or more event to search for overlapping data"},on:{click:e.showOverlappingDatasetModal}},[e._v("Search overlapping ("+e._s(e.selection.length)+")")]),a("span",{staticClass:"button-toolbar-spacer"}),a("b-pagination",{staticClass:"mb-0",attrs:{"total-rows":e.paginator.totalRows,"per-page":e.paginator.pageSize,"aria-controls":e.paginator.ariaControl,limit:"3","hide-goto-end-buttons":""},model:{value:e.paginator.pageNumber,callback:function(t){e.$set(e.paginator,"pageNumber",t)},expression:"paginator.pageNumber"}})],1)],1),a("b-modal",{ref:"eventDetailModal",attrs:{size:"md",title:e.eventDetailModalTitle,"hide-footer":"",static:"",lazy:""}},[e.eventDetailModalEvent?a("hek-event-detail",{attrs:{event:e.eventDetailModalEvent}}):e._e()],1),a("b-modal",{ref:"overlappingDatasetsModal",attrs:{size:"xl",title:e.overlappingDatasetsModalTitle,"hide-footer":"",static:"",lazy:""}},[a("dataset",{attrs:{"initial-search-filter":e.overlappingDatasetsModalSearchFilter}})],1)],1)},b=[],E=(a("6062"),a("a630"),a("99af"),a("1fdb")),w=a("72f4"),x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-img",{attrs:{center:"",fluid:"",src:e.event.thumbnailUrl,alt:"Event thumbnail"}}),a("dl",{staticClass:"dl-horizontal"},[a("dt",[e._v("Start time")]),a("dd",[e._v(e._s(e.$utils.formatDate(e.event.startTime)))]),a("dt",[e._v("End time")]),a("dd",[e._v(e._s(e.$utils.formatDate(e.event.endTime)))]),a("dt",[e._v("Recognition method")]),a("dd",[e._v(e._s(e.event.frm_name))]),a("dt",[e._v("Identifier name")]),a("dd",[e._v(e._s(e.event.frm_identifier))])]),a("a",{attrs:{href:e.event.detailUrl,target:"_blank"}},[e._v("See more details")])],1)},y=[],S={name:"HekEventDetail",props:{event:{type:Object,required:!0}}},k=S,D=Object(M["a"])(k,x,y,!1,null,null,null),H=D.exports,_={name:"HekEventList",components:{HekEventDetail:H,Dataset:w["default"]},props:{searchFilter:{type:m,required:!0}},data:function(){return{paginator:this.$HEK.getPaginator(),selection:[],eventDetailModalEvent:null,eventDetailModalTitle:"",overlappingDatasetsModalSearchFilter:new E["a"],overlappingDatasetsModalTitle:"Datasets"}},computed:{eventTableFields:function(){return[{key:"checkbox",label:""},{key:"type",label:"Type"},{key:"startTime",label:"Start time",formatter:this.$utils.formatDate},{key:"endTime",label:"End time",formatter:this.$utils.formatDate}]},eventTableCaption:function(){return this.paginator.items.length>0?"Click on any row to see the event details":"No event correspond to your search criteria"},selectionEmpty:function(){return 0==this.selection.length}},watch:{searchFilter:{handler:"updatePaginator",immediate:!0}},methods:{updatePaginator:function(e){this.paginator.searchParams=e.getSearchParams();try{this.paginator.loadPage(1),this.selection=[]}catch(t){this.$displayErrorMessage(t)}},showEventDetailModal:function(e){e.length>0&&(this.eventDetailModalEvent=e[0],this.eventDetailModalTitle=this.eventDetailModalEvent.type,this.$refs.eventTable.clearSelected(),this.$nextTick((function(){this.$refs.eventDetailModal.show()})))},showOverlappingDatasetModal:function(){var e=new Set(this.selection.map((function(e){return e.type})));this.overlappingDatasetsModalTitle="Datasets overlapping selected ".concat(Array.from(e).join(", ")," events"),this.overlappingDatasetsModalSearchFilter=new E["a"]({dateRange:{min:new Date(Math.min.apply(Math,Object(s["a"])(this.selection.map((function(e){return e.startTime}))))),max:new Date(Math.max.apply(Math,Object(s["a"])(this.selection.map((function(e){return e.endTime})))))},search:this.selection.map((function(e){return"(date_beg__lt = ".concat(e.endTime.toISOString()," and date_end__gt = ").concat(e.startTime.toISOString(),")")})).join(" or ")}),this.$refs.overlappingDatasetsModal.show()}}},A=_,T=Object(M["a"])(A,L,b,!1,null,null,null),X=T.exports,F={name:"HekEvent",components:{HekEventForm:h,HekEventList:X},props:{initialSearchFilter:{type:m,required:!1,default:null}},data:function(){return{searchFilter:new m(this.initialSearchFilter)}}},O=F,j=Object(M["a"])(O,i,n,!1,null,null,null);t["default"]=j.exports},6062:function(e,t,a){"use strict";var i=a("6d61"),n=a("6566");e.exports=i("Set",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),n)},6566:function(e,t,a){"use strict";var i=a("9bf2").f,n=a("7c73"),r=a("e2cc"),l=a("0366"),s=a("19aa"),o=a("2266"),v=a("7dd0"),d=a("2626"),c=a("83ab"),u=a("f183").fastKey,m=a("69f3"),p=m.set,g=m.getterFor;e.exports={getConstructor:function(e,t,a,v){var d=e((function(e,i){s(e,d,t),p(e,{type:t,index:n(null),first:void 0,last:void 0,size:0}),c||(e.size=0),void 0!=i&&o(i,e[v],{that:e,AS_ENTRIES:a})})),m=g(t),M=function(e,t,a){var i,n,r=m(e),l=f(e,t);return l?l.value=a:(r.last=l={index:n=u(t,!0),key:t,value:a,previous:i=r.last,next:void 0,removed:!1},r.first||(r.first=l),i&&(i.next=l),c?r.size++:e.size++,"F"!==n&&(r.index[n]=l)),e},f=function(e,t){var a,i=m(e),n=u(t);if("F"!==n)return i.index[n];for(a=i.first;a;a=a.next)if(a.key==t)return a};return r(d.prototype,{clear:function(){var e=this,t=m(e),a=t.index,i=t.first;while(i)i.removed=!0,i.previous&&(i.previous=i.previous.next=void 0),delete a[i.index],i=i.next;t.first=t.last=void 0,c?t.size=0:e.size=0},delete:function(e){var t=this,a=m(t),i=f(t,e);if(i){var n=i.next,r=i.previous;delete a.index[i.index],i.removed=!0,r&&(r.next=n),n&&(n.previous=r),a.first==i&&(a.first=n),a.last==i&&(a.last=r),c?a.size--:t.size--}return!!i},forEach:function(e){var t,a=m(this),i=l(e,arguments.length>1?arguments[1]:void 0,3);while(t=t?t.next:a.first){i(t.value,t.key,this);while(t&&t.removed)t=t.previous}},has:function(e){return!!f(this,e)}}),r(d.prototype,a?{get:function(e){var t=f(this,e);return t&&t.value},set:function(e,t){return M(this,0===e?0:e,t)}}:{add:function(e){return M(this,e=0===e?0:e,e)}}),c&&i(d.prototype,"size",{get:function(){return m(this).size}}),d},setStrong:function(e,t,a){var i=t+" Iterator",n=g(t),r=g(i);v(e,t,(function(e,t){p(this,{type:i,target:e,state:n(e),kind:t,last:void 0})}),(function(){var e=r(this),t=e.kind,a=e.last;while(a&&a.removed)a=a.previous;return e.target&&(e.last=a=a?a.next:e.state.first)?"keys"==t?{value:a.key,done:!1}:"values"==t?{value:a.value,done:!1}:{value:[a.key,a.value],done:!1}:(e.target=void 0,{value:void 0,done:!0})}),a?"entries":"values",!a,!0),d(t)}}},f4cd:function(e,t,a){var i={"./":["feb8"],"./AiaLevel1":["0584","AiaLevel1~Dataset~EitLevel0~HekEvent~HmiMagnetogram~Metadata~MetadataList~MetadataMixin~SwapLevel1~Xrt","AiaLevel1~EitLevel0~HmiMagnetogram~SwapLevel1~Xrt","AiaLevel1"],"./AiaLevel1.vue":["0584","AiaLevel1~Dataset~EitLevel0~HekEvent~HmiMagnetogram~Metadata~MetadataList~MetadataMixin~SwapLevel1~Xrt","AiaLevel1~EitLevel0~HmiMagnetogram~SwapLevel1~Xrt","AiaLevel1"],"./EitLevel0":["fff9","AiaLevel1~Dataset~EitLevel0~HekEvent~HmiMagnetogram~Metadata~MetadataList~MetadataMixin~SwapLevel1~Xrt","AiaLevel1~EitLevel0~HmiMagnetogram~SwapLevel1~Xrt","EitLevel0"],"./EitLevel0.vue":["fff9","AiaLevel1~Dataset~EitLevel0~HekEvent~HmiMagnetogram~Metadata~MetadataList~MetadataMixin~SwapLevel1~Xrt","AiaLevel1~EitLevel0~HmiMagnetogram~SwapLevel1~Xrt","EitLevel0"],"./HmiMagnetogram":["a220","AiaLevel1~Dataset~EitLevel0~HekEvent~HmiMagnetogram~Metadata~MetadataList~MetadataMixin~SwapLevel1~Xrt","AiaLevel1~EitLevel0~HmiMagnetogram~SwapLevel1~Xrt","HmiMagnetogram"],"./HmiMagnetogram.vue":["a220","AiaLevel1~Dataset~EitLevel0~HekEvent~HmiMagnetogram~Metadata~MetadataList~MetadataMixin~SwapLevel1~Xrt","AiaLevel1~EitLevel0~HmiMagnetogram~SwapLevel1~Xrt","HmiMagnetogram"],"./Metadata":["cf02","AiaLevel1~Dataset~EitLevel0~HekEvent~HmiMagnetogram~Metadata~MetadataList~MetadataMixin~SwapLevel1~Xrt","Metadata"],"./Metadata.vue":["cf02","AiaLevel1~Dataset~EitLevel0~HekEvent~HmiMagnetogram~Metadata~MetadataList~MetadataMixin~SwapLevel1~Xrt","Metadata"],"./MetadataDetail":["da68","MetadataDetail"],"./MetadataDetail.vue":["da68","MetadataDetail"],"./MetadataList":["1344","AiaLevel1~Dataset~EitLevel0~HekEvent~HmiMagnetogram~Metadata~MetadataList~MetadataMixin~SwapLevel1~Xrt","MetadataList"],"./MetadataList.vue":["1344","AiaLevel1~Dataset~EitLevel0~HekEvent~HmiMagnetogram~Metadata~MetadataList~MetadataMixin~SwapLevel1~Xrt","MetadataList"],"./MetadataMixin":["1814","AiaLevel1~Dataset~EitLevel0~HekEvent~HmiMagnetogram~Metadata~MetadataList~MetadataMixin~SwapLevel1~Xrt","MetadataMixin"],"./MetadataMixin.js":["1814","AiaLevel1~Dataset~EitLevel0~HekEvent~HmiMagnetogram~Metadata~MetadataList~MetadataMixin~SwapLevel1~Xrt","MetadataMixin"],"./SwapLevel1":["a991","AiaLevel1~Dataset~EitLevel0~HekEvent~HmiMagnetogram~Metadata~MetadataList~MetadataMixin~SwapLevel1~Xrt","AiaLevel1~EitLevel0~HmiMagnetogram~SwapLevel1~Xrt","SwapLevel1"],"./SwapLevel1.vue":["a991","AiaLevel1~Dataset~EitLevel0~HekEvent~HmiMagnetogram~Metadata~MetadataList~MetadataMixin~SwapLevel1~Xrt","AiaLevel1~EitLevel0~HmiMagnetogram~SwapLevel1~Xrt","SwapLevel1"],"./Xrt":["f513","AiaLevel1~Dataset~EitLevel0~HekEvent~HmiMagnetogram~Metadata~MetadataList~MetadataMixin~SwapLevel1~Xrt","AiaLevel1~EitLevel0~HmiMagnetogram~SwapLevel1~Xrt","Xrt"],"./Xrt.vue":["f513","AiaLevel1~Dataset~EitLevel0~HekEvent~HmiMagnetogram~Metadata~MetadataList~MetadataMixin~SwapLevel1~Xrt","AiaLevel1~EitLevel0~HmiMagnetogram~SwapLevel1~Xrt","Xrt"],"./index":["feb8"],"./index.js":["feb8"]};function n(e){if(!a.o(i,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[e],n=t[0];return Promise.all(t.slice(1).map(a.e)).then((function(){return a(n)}))}n.keys=function(){return Object.keys(i)},n.id="f4cd",e.exports=n},feb8:function(e,t,a){"use strict";a.r(t),t["default"]={default:"Metadata","AIA level 1":"AiaLevel1","EIT level 0":"EitLevel0","HMI magnetogram":"HmiMagnetogram","SWAP level 1":"SwapLevel1",XRT:"Xrt"}}}]);
//# sourceMappingURL=HekEvent.4a336805.js.map