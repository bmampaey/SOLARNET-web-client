(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30f18ee2"],{6062:function(e,t,a){"use strict";var n=a("6d61"),i=a("6566");e.exports=n("Set",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),i)},6566:function(e,t,a){"use strict";var n=a("9bf2").f,i=a("7c73"),r=a("e2cc"),s=a("0366"),l=a("19aa"),o=a("2266"),c=a("7dd0"),u=a("2626"),d=a("83ab"),v=a("f183").fastKey,p=a("69f3"),h=p.set,f=p.getterFor;e.exports={getConstructor:function(e,t,a,c){var u=e((function(e,n){l(e,u,t),h(e,{type:t,index:i(null),first:void 0,last:void 0,size:0}),d||(e.size=0),void 0!=n&&o(n,e[c],{that:e,AS_ENTRIES:a})})),p=f(t),m=function(e,t,a){var n,i,r=p(e),s=b(e,t);return s?s.value=a:(r.last=s={index:i=v(t,!0),key:t,value:a,previous:n=r.last,next:void 0,removed:!1},r.first||(r.first=s),n&&(n.next=s),d?r.size++:e.size++,"F"!==i&&(r.index[i]=s)),e},b=function(e,t){var a,n=p(e),i=v(t);if("F"!==i)return n.index[i];for(a=n.first;a;a=a.next)if(a.key==t)return a};return r(u.prototype,{clear:function(){var e=this,t=p(e),a=t.index,n=t.first;while(n)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete a[n.index],n=n.next;t.first=t.last=void 0,d?t.size=0:e.size=0},delete:function(e){var t=this,a=p(t),n=b(t,e);if(n){var i=n.next,r=n.previous;delete a.index[n.index],n.removed=!0,r&&(r.next=i),i&&(i.previous=r),a.first==n&&(a.first=i),a.last==n&&(a.last=r),d?a.size--:t.size--}return!!n},forEach:function(e){var t,a=p(this),n=s(e,arguments.length>1?arguments[1]:void 0,3);while(t=t?t.next:a.first){n(t.value,t.key,this);while(t&&t.removed)t=t.previous}},has:function(e){return!!b(this,e)}}),r(u.prototype,a?{get:function(e){var t=b(this,e);return t&&t.value},set:function(e,t){return m(this,0===e?0:e,t)}}:{add:function(e){return m(this,e=0===e?0:e,e)}}),d&&n(u.prototype,"size",{get:function(){return p(this).size}}),u},setStrong:function(e,t,a){var n=t+" Iterator",i=f(t),r=f(n);c(e,t,(function(e,t){h(this,{type:n,target:e,state:i(e),kind:t,last:void 0})}),(function(){var e=r(this),t=e.kind,a=e.last;while(a&&a.removed)a=a.previous;return e.target&&(e.last=a=a?a.next:e.state.first)?"keys"==t?{value:a.key,done:!1}:"values"==t?{value:a.value,done:!1}:{value:[a.key,a.value],done:!1}:(e.target=void 0,{value:void 0,done:!0})}),a?"entries":"values",!a,!0),u(t)}}},9308:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",{attrs:{fluid:""}},[a("app-menu"),a("hek-event",{staticClass:"mt-3"})],1)},i=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-row",[a("b-col",{attrs:{cols:"4"}},[a("hek-event-form",{model:{value:e.searchFilter,callback:function(t){e.searchFilter=t},expression:"searchFilter"}})],1),a("b-col",{attrs:{cols:"8"}},[a("hek-event-list",{attrs:{"search-filter":e.searchFilter}})],1)],1)},s=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-form",{on:{submit:function(t){return t.preventDefault(),e.updateSearchFilter.apply(null,arguments)}}},[a("b-form-group",{attrs:{label:"Event types","label-for":"event-type"}},[a("b-form-select",{attrs:{id:"event-type",options:e.searchFilter.eventTypeOptions,multiple:""},model:{value:e.searchFilter.eventType,callback:function(t){e.$set(e.searchFilter,"eventType",t)},expression:"searchFilter.eventType"}})],1),a("base-datetime-range",{attrs:{label:"Event time","min-label":"Start","max-label":"End"},model:{value:e.searchFilter.dateRange,callback:function(t){e.$set(e.searchFilter,"dateRange",t)},expression:"searchFilter.dateRange"}}),a("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Search")])],1)},o=[],c=(a("a15b"),a("d81d"),a("4fad"),a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("2909")),u=a("3835"),d=a("d4ec"),v=a("bee2"),p=a("ade3"),h=a("5fb0"),f=function(){function e(t){Object(d["a"])(this,e),Object(p["a"])(this,"eventType",[]),Object(p["a"])(this,"dateRange",{min:null,max:null}),Object(p["a"])(this,"eventTypeOptions",Object.entries(h["f"]).map((function(e){var t=Object(u["a"])(e,2),a=t[0],n=t[1];return{value:a,text:n}}))),t&&(Array.isArray(t.eventType)&&(this.eventType=Object(c["a"])(t.eventType)),t.dateRange&&(this.dateRange={min:t.dateRange.min,max:t.dateRange.max}))}return Object(v["a"])(e,[{key:"getSearchParams",value:function(){var e=new URLSearchParams(h["e"]);return this.eventType&&this.eventType.length>0&&e.set("event_type",this.eventType.join(",")),this.dateRange.min&&e.set("event_starttime",this.dateRange.min.toISOString()),this.dateRange.max&&e.set("event_endtime",this.dateRange.max.toISOString()),e}}]),e}(),m={name:"HekEventForm",props:{value:{type:f,required:!0}},data:function(){return{searchFilter:new f(this.value)}},methods:{updateSearchFilter:function(){this.$emit("input",new f(this.searchFilter))}}},b=m,g=a("2877"),y=Object(g["a"])(b,l,o,!1,null,null,null),k=y.exports,x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-overlay",{attrs:{show:e.paginator.loading,rounded:"sm"}},[a("b-table",{ref:"eventTable",attrs:{id:e.paginator.ariaControl,items:e.paginator.items,fields:e.eventTableFields,caption:e.eventTableCaption,"primary-key":"id","select-mode":"single",small:"",hover:"",selectable:""},on:{"row-selected":e.showEventDetailModal},scopedSlots:e._u([{key:"cell(checkbox)",fn:function(t){return[a("b-form-checkbox",{attrs:{value:t.item,size:"lg"},model:{value:e.selection,callback:function(t){e.selection=t},expression:"selection"}})]}}])}),a("b-button-toolbar",{attrs:{"key-nav":""}},[a("b-button",{attrs:{disabled:e.selectionEmpty,variant:"primary",title:"Select one or more event to search for overlapping data"},on:{click:e.showOverlappingDatasetModal}},[e._v("Search overlapping ("+e._s(e.selection.length)+")")]),a("span",{staticClass:"button-toolbar-spacer"}),a("b-pagination",{staticClass:"mb-0",attrs:{"total-rows":e.paginator.totalRows,"per-page":e.paginator.pageSize,"aria-controls":e.paginator.ariaControl,limit:"3","hide-goto-end-buttons":""},model:{value:e.paginator.pageNumber,callback:function(t){e.$set(e.paginator,"pageNumber",t)},expression:"paginator.pageNumber"}})],1)],1),a("b-modal",{ref:"eventDetailModal",attrs:{size:"md",title:e.eventDetailModalTitle,"hide-footer":"",static:"",lazy:""}},[e.eventDetailModalEvent?a("hek-event-detail",{attrs:{event:e.eventDetailModalEvent}}):e._e()],1),a("b-modal",{ref:"overlappingDatasetsModal",attrs:{size:"xl",title:e.overlappingDatasetsModalTitle,"hide-footer":"",static:"",lazy:""}},[a("dataset",{attrs:{"initial-search-filter":e.overlappingDatasetsModalSearchFilter}})],1)],1)},_=[],T=(a("99af"),a("a630"),a("6062"),a("1fdb")),D=a("72f4"),E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-img",{attrs:{center:"",fluid:"",src:e.event.thumbnailUrl,alt:"Event thumbnail"}}),a("dl",{staticClass:"dl-horizontal"},[a("dt",[e._v("Start time")]),a("dd",[e._v(e._s(e.$utils.formatDate(e.event.startTime)))]),a("dt",[e._v("End time")]),a("dd",[e._v(e._s(e.$utils.formatDate(e.event.endTime)))]),a("dt",[e._v("Recognition method")]),a("dd",[e._v(e._s(e.event.frm_name))]),a("dt",[e._v("Identifier name")]),a("dd",[e._v(e._s(e.event.frm_identifier))])]),a("a",{attrs:{href:e.event.detailUrl,target:"_blank"}},[e._v("See more details")])],1)},S=[],w={name:"HekEventDetail",props:{event:{type:Object,required:!0}}},F=w,M=Object(g["a"])(F,E,S,!1,null,null,null),O=M.exports,j={name:"HekEventList",components:{HekEventDetail:O,Dataset:D["a"]},props:{searchFilter:{type:f,required:!0}},data:function(){return{paginator:this.$HEK.getPaginator(),selection:[],eventDetailModalEvent:null,eventDetailModalTitle:"",overlappingDatasetsModalSearchFilter:new T["a"],overlappingDatasetsModalTitle:"Datasets"}},computed:{eventTableFields:function(){return[{key:"checkbox",label:""},{key:"type",label:"Type"},{key:"startTime",label:"Start time",formatter:this.$utils.formatDate},{key:"endTime",label:"End time",formatter:this.$utils.formatDate}]},eventTableCaption:function(){return this.paginator.items.length>0?"Click on any row to see the event details":"No event correspond to your search criteria"},selectionEmpty:function(){return 0==this.selection.length}},watch:{searchFilter:{handler:"updatePaginator",immediate:!0}},methods:{updatePaginator:function(e){this.paginator.searchParams=e.getSearchParams();try{this.paginator.loadPage(1),this.selection=[]}catch(t){this.$displayErrorMessage(t)}},showEventDetailModal:function(e){e.length>0&&(this.eventDetailModalEvent=e[0],this.eventDetailModalTitle=this.eventDetailModalEvent.type,this.$refs.eventTable.clearSelected(),this.$nextTick((function(){this.$refs.eventDetailModal.show()})))},showOverlappingDatasetModal:function(){var e=new Set(this.selection.map((function(e){return e.type})));this.overlappingDatasetsModalTitle="Datasets overlapping selected ".concat(Array.from(e).join(", ")," events"),this.overlappingDatasetsModalSearchFilter=new T["a"]({dateRange:{min:new Date(Math.min.apply(Math,Object(c["a"])(this.selection.map((function(e){return e.startTime}))))),max:new Date(Math.max.apply(Math,Object(c["a"])(this.selection.map((function(e){return e.endTime})))))},search:this.selection.map((function(e){return"(date_beg__lt = ".concat(e.endTime.toISOString()," and date_end__gt = ").concat(e.startTime.toISOString(),")")})).join(" or ")}),this.$refs.overlappingDatasetsModal.show()}}},$=j,z=Object(g["a"])($,x,_,!1,null,null,null),R=z.exports,C={name:"HekEvent",components:{HekEventForm:k,HekEventList:R},props:{initialSearchFilter:{type:f,required:!1,default:null}},data:function(){return{searchFilter:new f(this.initialSearchFilter)}}},H=C,P=Object(g["a"])(H,r,s,!1,null,null,null),I=P.exports,N={name:"HekEvents",components:{HekEvent:I}},q=N,A=Object(g["a"])(q,n,i,!1,null,null,null);t["default"]=A.exports}}]);
//# sourceMappingURL=chunk-30f18ee2.00e09246.js.map