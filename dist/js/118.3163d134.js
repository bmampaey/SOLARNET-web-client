"use strict";(self["webpackChunksvo"]=self["webpackChunksvo"]||[]).push([[118,171,113,670,496,189,807,161],{8747:function(t,e,a){a.r(e),a.d(e,{default:function(){return v}});var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-row",[a("b-col",{attrs:{cols:"4"}},[a("b-form",{on:{submit:function(e){return e.preventDefault(),t.updateSearchParams.apply(null,arguments)}}},[a("base-datetime-range",{attrs:{label:"Observation date","min-label":"Start","max-label":"End"},model:{value:t.searchFilter.dateRange,callback:function(e){t.$set(t.searchFilter,"dateRange",e)},expression:"searchFilter.dateRange"}}),a("b-form-group",{attrs:{description:"Only display data with a quality of 0"}},[a("b-form-checkbox",{model:{value:t.searchFilter.bestQuality,callback:function(e){t.$set(t.searchFilter,"bestQuality",e)},expression:"searchFilter.bestQuality"}},[t._v("Best quality only")])],1),t.tags.length?a("tag-selector",{attrs:{tags:t.tags},model:{value:t.searchFilter.tags,callback:function(e){t.$set(t.searchFilter,"tags",e)},expression:"searchFilter.tags"}}):t._e(),t.keywords.length?a("keyword-filter",{attrs:{keywords:t.keywords},model:{value:t.searchFilter.keywordFilter,callback:function(e){t.$set(t.searchFilter,"keywordFilter",e)},expression:"searchFilter.keywordFilter"}}):t._e(),a("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Search")])],1)],1),a("b-col",{attrs:{cols:"8"}},[a("metadata-list",{attrs:{dataset:t.dataset,"search-params":t.searchParams,tags:t.tags,keywords:t.keywords,"default-columns":t.defaultColumns}})],1)],1)},s=[],l=a(6133),i=a(2751),n=a(3263),o=a(460),u=a(7349),c=a(796),d=a(6777),h=a(3796),b=a(2156),y=a(9761),m=function(t){(0,c.Z)(a,t);var e=(0,d.Z)(a);function a(t){var r;return(0,l.Z)(this,a),r=e.call(this,t),(0,h.Z)((0,n.Z)(r),"bestQuality",void 0),t&&(r.bestQuality=t.bestQuality),r}return(0,i.Z)(a,[{key:"getSearchParams",value:function(){var t=(0,o.Z)((0,u.Z)(a.prototype),"getSearchParams",this).call(this);return this.bestQuality&&t.set("quality",0),t}}]),a}(y.Z),f={name:"HmiMagnetogram",mixins:[b["default"]],data:function(){return{searchFilter:new m(this.initialSearchFilter),defaultColumns:[{label:"Observation date",key:"date_obs",formatter:this.$utils.formatDate},{label:"Quality",key:"quality"}]}}},k=f,g=a(1001),p=(0,g.Z)(k,r,s,!1,null,null,null),v=p.exports}}]);
//# sourceMappingURL=118.3163d134.js.map