"use strict";(self["webpackChunkweb_client"]=self["webpackChunkweb_client"]||[]).push([[219],{6422:function(t,e,a){a.r(e),a.d(e,{default:function(){return m}});var i=function(){var t=this,e=t._self._c;return e("div",[e("b-img",{attrs:{src:t.imageURL,center:"","fluid-grow":"",alt:"Data thumbnail"}}),e("b-form-group",{staticClass:"my-2",attrs:{label:"Filter metadata","label-for":t.metadataFilterId,"label-sr-only":""}},[e("b-input-group",[e("b-form-input",{attrs:{id:t.metadataFilterId,type:"search",placeholder:"Filter metadata",title:"Type anything to filter the metadata on keyword or value",debounce:"250"},model:{value:t.metadataFilter,callback:function(e){t.metadataFilter=e},expression:"metadataFilter"}}),e("b-input-group-append",[e("b-button",{attrs:{disabled:!t.metadataFilter,title:"Clear the metadata filter"},on:{click:t.clearMetadataFilter}},[t._v("Clear")])],1)],1)],1),e("b-tabs",{attrs:{"content-class":"mt-3"}},[e("b-tab",{attrs:{title:"Metadata",active:""}},[e("b-table",{attrs:{items:t.metadataItems,fields:t.fields,filter:t.metadataFilter,"filter-included-fields":t.filterIncludedFields,"primary-key":"id","thead-class":"d-none",responsive:"","show-empty":"",small:""}})],1),t.fitsHeader?e("b-tab",{attrs:{title:"FITS header"}},[e("b-table",{attrs:{items:t.fitsHeaderItems,fields:t.fields,filter:t.metadataFilter,"filter-included-fields":t.filterIncludedFields,"primary-key":"id","thead-class":"d-none",responsive:"","show-empty":"",small:""}})],1):t._e()],1)],1)},l=[],r={name:"MetadataDetail",props:{metadata:{type:Object,required:!0}},data(){return{metadataFilter:"",metadataFilterId:this.$utils.getUniqueId(),fields:["text"],filterIncludedFields:["text"],forbiddenMetadataKeys:["fits_header","resource_uri","data_location","tags"]}},computed:{imageURL(){return this.metadata.data_location.thumbnail_url?this.metadata.data_location.thumbnail_url:a(1170)},fitsHeader(){return this.metadata.fits_header?this.metadata.fits_header.trimEnd():""},metadataItems(){return Object.entries(this.metadata).filter((([t])=>!this.forbiddenMetadataKeys.includes(t))).map((([t,e],a)=>({id:a,text:`${t} = ${e}`})))},fitsHeaderItems(){return this.fitsHeader.match(/[^]{1,80}/g).map(((t,e)=>({id:e,text:t})))}},methods:{clearMetadataFilter(){this.metadataFilter=""}}},d=r,s=a(1001),n=(0,s.Z)(d,i,l,!1,null,null,null),m=n.exports}}]);
//# sourceMappingURL=MetadataDetail.59737904.js.map