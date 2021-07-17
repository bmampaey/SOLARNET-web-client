(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22d605"],{f6dc:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{attrs:{fluid:""}},[a("app-menu"),a("data-selection",{staticClass:"mt-3"})],1)},i=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("data-selection-list")},o=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-overlay",{attrs:{show:t.showOverlay,rounded:"sm"}},[a("b-table",{ref:"dataSelectionTable",attrs:{items:t.dataSelectionList,fields:t.dataSelectionTableFields,"primary-key":"id","select-mode":"single",caption:t.dataSelectionTableCaption,small:"",hover:"",selectable:""},on:{"row-selected":t.showDataSelectionDetailModal},scopedSlots:t._u([{key:"cell(ftp_button)",fn:function(t){return[a("b-button",{attrs:{href:t.item.ftp_download_url,target:"_blank",size:"sm",variant:"primary",title:"Download selection via ftp"}},[a("b-icon",{attrs:{icon:"folder-symlink"}})],1)]}},{key:"cell(zip_button)",fn:function(t){return[a("b-button",{attrs:{href:t.item.zip_download_url,target:"_blank",size:"sm",variant:"primary",title:"Download selection as zip file"}},[a("b-icon",{attrs:{icon:"file-earmark-zip"}})],1)]}},{key:"cell(delete_button)",fn:function(e){return[a("b-button",{attrs:{size:"sm",variant:"danger",title:"Delete data selection"},on:{click:function(a){return t.deleteDataSelection(e.item)}}},[a("b-icon",{attrs:{icon:"trash"}})],1)]}}])})],1),a("b-modal",{ref:"dataSelectionDetailModal",attrs:{size:"xl",title:t.dataSelectionDetailModalTitle,"hide-footer":"",static:"",lazy:""}},[t.dataSelectionDetailModalDataSelection?a("data-selection-detail",{attrs:{"data-selection":t.dataSelectionDetailModalDataSelection}}):t._e()],1)],1)},s=[],c=(a("4de4"),a("b0c0"),a("96cf"),a("1da1")),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v(" TODO ")])},u=[],f={name:"DataSelectionDetail",props:{dataSelection:{type:Object,required:!0}}},p=f,h=a("2877"),m=Object(h["a"])(p,d,u,!1,null,null,null),b=m.exports,S={name:"DataSelectionList",components:{DataSelectionDetail:b},data:function(){return{dataSelectionList:[],dataSelectionDetailModalDataSelection:null,dataSelectionDetailModalTitle:"",showOverlay:!0}},computed:{dataSelectionTableFields:function(){return[{key:"ftp_button",label:"FTP"},{key:"zip_button",label:"ZIP"},{key:"dataset",label:"Dataset",formatter:function(t){return t.name}},{key:"description",label:"Description",tdClass:"preformatted"},{key:"metadata",label:"Estimated count",formatter:function(t){return t.estimated_count}},{key:"creation_time",label:"Date of creation",formatter:this.$utils.formatDate},{key:"delete_button",label:"Delete"}]},dataSelectionTableCaption:function(){return this.dataSelectionList.length>0?"Click on any row to see data selection details":"You have not saved any data selection yet"}},activated:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.updateDataSelectionList();case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{updateDataSelectionList:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.showOverlay=!0,t.prev=1,t.next=4,this.$SVO.data_selection.getAll();case 4:this.dataSelectionList=t.sent,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](1),this.$displayErrorMessage(this.$SVO.parseError(t.t0));case 10:this.showOverlay=!1;case 11:case"end":return t.stop()}}),t,this,[[1,7]])})));function e(){return t.apply(this,arguments)}return e}(),showDataSelectionDetailModal:function(t){t.length>0&&(this.dataSelectionDetailModalDataSelection=t[0],this.dataSelectionDetailModalTitle=this.dataSelectionDetailModalDataSelection.dataset.name,this.$refs.dataSelectionTable.clearSelected(),this.$nextTick((function(){this.$refs.dataSelectionDetailModal.show()})))},deleteDataSelection:function(t){try{this.$SVO.data_selection.delete(t.resource_uri),this.dataSelectionList=this.dataSelectionList.filter((function(e){return e.resource_uri!=t.resource_uri}))}catch(e){this.$displayErrorMessage(this.$SVO.parseError(e))}}}},D=S,y=Object(h["a"])(D,r,s,!1,null,null,null),_=y.exports,v={name:"DataSelection",components:{DataSelectionList:_}},w=v,k=Object(h["a"])(w,l,o,!1,null,null,null),O=k.exports,M={name:"DataSelections",components:{DataSelection:O}},$=M,g=Object(h["a"])($,n,i,!1,null,null,null);e["default"]=g.exports}}]);
//# sourceMappingURL=chunk-2d22d605.3f840dd7.js.map