"use strict";(self["webpackChunksvo"]=self["webpackChunksvo"]||[]).push([[857,836,882,670,496,601,930,189,807,161,419],{1729:function(t,e,a){a.r(e),a.d(e,{default:function(){return o}});var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-row",[a("b-col",{attrs:{cols:"4"}},[a("b-form",{on:{submit:function(e){return e.preventDefault(),t.updateSearchParams.apply(null,arguments)}}},[a("base-datetime-range",{attrs:{label:"Observation date","min-label":"Start","max-label":"End"},model:{value:t.searchFilter.dateRange,callback:function(e){t.$set(t.searchFilter,"dateRange",e)},expression:"searchFilter.dateRange"}}),t.tags.length?a("tag-selector",{attrs:{tags:t.tags},model:{value:t.searchFilter.tags,callback:function(e){t.$set(t.searchFilter,"tags",e)},expression:"searchFilter.tags"}}):t._e(),a("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Search")])],1)],1),a("b-col",{attrs:{cols:"8"}},[a("metadata-list",{attrs:{dataset:t.dataset,"search-params":t.searchParams,tags:t.tags,keywords:t.keywords,"default-columns":t.defaultColumns}})],1)],1)},n=[],s=a(2156),i={name:"Metadata",mixins:[s["default"]]},l=i,u=a(1001),c=(0,u.Z)(l,r,n,!1,null,null,null),o=c.exports},4945:function(t,e,a){a.r(e),a.d(e,{default:function(){return c}});var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-form-group",{attrs:{label:"Tags","label-for":t.inputId}},[a("b-form-select",{attrs:{id:t.inputId,value:t.value,options:t.tagOptions,multiple:""},on:{input:function(e){return t.$emit("input",e.target.value)}}})],1)},n=[],s=(a(1249),a(8309),{name:"TagSelector",props:{value:{type:Array,required:!0},tags:{type:Array,required:!0}},data:function(){return{inputId:this.$utils.getUniqueId()}},computed:{tagOptions:function(){return this.tags.map((function(t){return{value:t.name,text:t.name}}))}}}),i=s,l=a(1001),u=(0,l.Z)(i,r,n,!1,null,null,null),c=u.exports},2156:function(t,e,a){a.r(e);var r=a(6198),n=(a(5666),a(1539),a(8783),a(3948),a(1637),a(8309),a(9252)),s=a(4945),i=a(9761);e["default"]={components:{MetadataList:n["default"],TagSelector:s["default"]},props:{dataset:{type:Object,required:!0},initialSearchFilter:{type:Object,required:!1,default:null}},data:function(){return{searchFilter:new i.Z(this.initialSearchFilter),searchParams:new URLSearchParams,tags:[],keywords:[],defaultColumns:[{label:"Observation date",key:"date_beg",formatter:this.$utils.formatDate},{label:"Wavelength",key:"wavemin"}]}},created:function(){this.loadTags(),this.loadKeywords()},methods:{updateSearchParams:function(){this.searchParams=this.searchFilter.getSearchParams()},loadTags:function(){var t=(0,r.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$SVO.tag.getAll({dataset:this.dataset.name});case 3:this.tags=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),this.$displayErrorMessage(this.$SVO.parseError(t.t0));case 9:case"end":return t.stop()}}),t,this,[[0,6]])})));function e(){return t.apply(this,arguments)}return e}(),loadKeywords:function(){var t=(0,r.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$SVO.keyword.getAll({dataset__name:this.dataset.name});case 3:this.keywords=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),this.$displayErrorMessage(this.$SVO.parseError(t.t0));case 9:case"end":return t.stop()}}),t,this,[[0,6]])})));function e(){return t.apply(this,arguments)}return e}()}}},9761:function(t,e,a){a.d(e,{Z:function(){return u}});var r=a(2032),n=a(8932),s=a(6133),i=a(2751),l=a(3796),u=(a(4916),a(4765),a(1539),a(8783),a(3948),a(1637),function(){function t(e){(0,s.Z)(this,t),(0,l.Z)(this,"tags",[]),(0,l.Z)(this,"dateRange",{min:null,max:null}),e&&(Array.isArray(e.tags)&&(this.tags=(0,n.Z)(e.tags)),e.dateRange&&(this.dateRange={min:e.dateRange.min,max:e.dateRange.max}),this.search=e.search)}return(0,i.Z)(t,[{key:"getSearchParams",value:function(){var t,e=new URLSearchParams,a=(0,r.Z)(this.tags);try{for(a.s();!(t=a.n()).done;){var n=t.value;e.append("tags__in",n)}}catch(s){a.e(s)}finally{a.f()}return this.dateRange.min&&e.set("date_end__gte",this.dateRange.min.toISOString()),this.dateRange.max&&e.set("date_beg__lte",this.dateRange.max.toISOString()),this.search&&e.set("search",this.search),e}}]),t}())}}]);
//# sourceMappingURL=857.b0734acf.js.map