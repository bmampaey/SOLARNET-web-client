(self["webpackChunksvo"]=self["webpackChunksvo"]||[]).push([[183,930],{5770:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return c}});var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-form-row",[a("b-col",[a("b-form-group",{attrs:{label:"Add a filter for the keyword","label-for":e.uniqueId("select-keyword")}},[a("b-form-select",{attrs:{id:e.uniqueId("select-keyword"),options:e.keywordOptions},model:{value:e.selectedKeyword,callback:function(t){e.selectedKeyword=t},expression:"selectedKeyword"}})],1)],1),a("b-col",{staticClass:"mb-3",attrs:{cols:"auto","align-self":"end"}},[a("b-button",{attrs:{variant:"light",title:e.selectedKeyword?"Add filter for keyword "+e.selectedKeyword.verbose_name:"Select a keyword to add a filter"},on:{click:e.addKeywordFilter}},[a("b-icon",{attrs:{icon:"plus"}})],1)],1)],1),e._l(e.keywordFilters,(function(t){return a("b-form-row",{key:t.name},[a("b-col",["text"==t.type?a("b-form-group",{attrs:{label:t.verbose_name+" contains","label-for":e.uniqueId(t.name)}},[a("b-form-input",{attrs:{id:e.uniqueId(t.name),type:"text"},model:{value:e.filterValues[t.name],callback:function(a){e.$set(e.filterValues,t.name,a)},expression:"filterValues[keyword.name]"}})],1):"time (ISO 8601)"==t.type?a("base-datetime-range",{attrs:{label:t.verbose_name+" is between"},model:{value:e.filterValues[t.name],callback:function(a){e.$set(e.filterValues,t.name,a)},expression:"filterValues[keyword.name]"}}):"integer"==t.type?a("base-number-range",{attrs:{label:t.verbose_name+" is between",unit:t.unit,step:"1"},model:{value:e.filterValues[t.name],callback:function(a){e.$set(e.filterValues,t.name,a)},expression:"filterValues[keyword.name]"}}):"real"==t.type?a("base-number-range",{attrs:{label:t.verbose_name+" is between",unit:t.unit},model:{value:e.filterValues[t.name],callback:function(a){e.$set(e.filterValues,t.name,a)},expression:"filterValues[keyword.name]"}}):"boolean"==t.type?a("b-form-group",{attrs:{label:t.verbose_name+" is"},scopedSlots:e._u([{key:"default",fn:function(r){var n=r.ariaDescribedby;return[a("b-form-radio-group",{attrs:{options:[!0,!1],"aria-describedby":n,buttons:"","button-variant":"outline-dark"},model:{value:e.filterValues[t.name],callback:function(a){e.$set(e.filterValues,t.name,a)},expression:"filterValues[keyword.name]"}})]}}],null,!0)}):e._e()],1),a("b-col",{staticClass:"mb-3",attrs:{cols:"auto","align-self":"end"}},[a("b-button",{attrs:{variant:"light",title:"Remove filter for keyword "+t.verbose_name},on:{click:function(a){return e.removeKeywordFilter(t)}}},[a("b-icon",{attrs:{icon:"x"}})],1)],1)],1)}))],2)},n=[],s=a(2032),i=(a(1532),a(1539),a(8783),a(3948),a(8559),a(1249),a(8309),a(7327),a(9600),a(2222),{name:"KeywordFilter",props:{value:{type:String,required:!0},keywords:{type:Array,required:!0}},data:function(){return{uniqueIdMap:new Map,selectedKeyword:null,selectedKeywords:Object.fromEntries(this.keywords.map((function(e){return[e.name,!1]}))),filterValues:Object.fromEntries(this.keywords.map((function(e){return"integer"==e.type||"real"==e.type||"time (ISO 8601)"==e.type?[e.name,{min:null,max:null}]:[e.name,null]})))}},computed:{keywordOptions:function(){var e=this;return this.keywords.filter((function(t){return!e.selectedKeywords[t.name]})).map((function(e){return{text:e.verbose_name,value:e}}))},keywordFilters:function(){var e=this;return this.keywords.filter((function(t){return e.selectedKeywords[t.name]}))}},watch:{filterValues:{handler:"updateModelValue",immediate:!0,deep:!0}},methods:{uniqueId:function(e){return this.uniqueIdMap.has(e)||this.uniqueIdMap.set(e,this.$utils.getUniqueId()),this.uniqueIdMap.get(e)},addKeywordFilter:function(){this.selectedKeyword&&(this.selectedKeywords[this.selectedKeyword.name]=!0,this.selectedKeyword=null)},removeKeywordFilter:function(e){this.selectedKeywords[e.name]=!1,this.selectedKeyword=e},updateModelValue:function(){var e,t=[],a=(0,s.Z)(this.keywordFilters);try{for(a.s();!(e=a.n()).done;){var r=e.value;if("text"==r.type)this.filterValues[r.name]&&t.push("(".concat(r.name,"__icontains=").concat(this.filterValues[r.name],")"));else if("integer"==r.type||"real"==r.type){var n,i;null!==(n=this.filterValues[r.name])&&void 0!==n&&n.min&&t.push("(".concat(r.name,"__gte=").concat(this.filterValues[r.name].min,")")),null!==(i=this.filterValues[r.name])&&void 0!==i&&i.max&&t.push("(".concat(r.name,"__lte=").concat(this.filterValues[r.name].max,")"))}else if("time (ISO 8601)"==r.type){var l,o;null!==(l=this.filterValues[r.name])&&void 0!==l&&l.min&&t.push("(".concat(r.name,"__gte=").concat(this.filterValues[r.name].min.toISOString(),")")),null!==(o=this.filterValues[r.name])&&void 0!==o&&o.max&&t.push("(".concat(r.name,"__lte=").concat(this.filterValues[r.name].max.toISOString(),")"))}else"boolean"==r.type&&this.filterValues[r.name]&&t.push("(".concat(r.name,"=").concat(this.filterValues[r.name],")"))}}catch(u){a.e(u)}finally{a.f()}this.$emit("input",t.join("and"))}}}),l=i,o=a(1001),u=(0,o.Z)(l,r,n,!1,null,null,null),c=u.exports},1183:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return c}});var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-row",[a("b-col",{attrs:{cols:"12",lg:"4"}},[a("b-form",{on:{submit:function(t){return t.preventDefault(),e.updateSearchParams.apply(null,arguments)}}},[a("base-datetime-range",{attrs:{label:"Observation date","min-label":"Start","max-label":"End"},model:{value:e.searchFilter.dateRange,callback:function(t){e.$set(e.searchFilter,"dateRange",t)},expression:"searchFilter.dateRange"}}),e.tags.length?a("tag-selector",{attrs:{tags:e.tags},model:{value:e.searchFilter.tags,callback:function(t){e.$set(e.searchFilter,"tags",t)},expression:"searchFilter.tags"}}):e._e(),e.keywords.length?a("keyword-filter",{attrs:{keywords:e.keywords},model:{value:e.searchFilter.keywordFilter,callback:function(t){e.$set(e.searchFilter,"keywordFilter",t)},expression:"searchFilter.keywordFilter"}}):e._e(),a("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Search")])],1)],1),a("b-col",{attrs:{cols:"12",lg:"8"}},[a("metadata-list",{attrs:{dataset:e.dataset,"search-params":e.searchParams,tags:e.tags,keywords:e.keywords,"default-columns":e.defaultColumns}})],1)],1)},n=[],s=a(2156),i={name:"LyraLevel2",mixins:[s["default"]],data:function(){return{defaultColumns:[{label:"Observation start date",key:"date_beg",formatter:this.$utils.formatDate},{label:"Observation end date",key:"date_end",formatter:this.$utils.formatDate}]}}},l=i,o=a(1001),u=(0,o.Z)(l,r,n,!1,null,null,null),c=u.exports},4945:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return u}});var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-form-group",{attrs:{label:"Tags","label-for":e.inputId}},[a("b-form-select",{attrs:{id:e.inputId,value:e.value,options:e.tagOptions,multiple:""},on:{input:function(t){return e.$emit("input",t.target.value)}}})],1)},n=[],s=(a(1249),a(8309),{name:"TagSelector",props:{value:{type:Array,required:!0},tags:{type:Array,required:!0}},data:function(){return{inputId:this.$utils.getUniqueId()}},computed:{tagOptions:function(){return this.tags.map((function(e){return{value:e.name,text:e.name}}))}}}),i=s,l=a(1001),o=(0,l.Z)(i,r,n,!1,null,null,null),u=o.exports},9098:function(e,t,a){"use strict";var r=a(7710),n=a(5631);r("Map",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),n)},1532:function(e,t,a){a(9098)},8559:function(e,t,a){var r=a(2109),n=a(408),s=a(6135);r({target:"Object",stat:!0},{fromEntries:function(e){var t={};return n(e,(function(e,a){s(t,e,a)}),{AS_ENTRIES:!0}),t}})},2156:function(e,t,a){"use strict";a.r(t);var r=a(6198),n=(a(5666),a(1539),a(8783),a(3948),a(1637),a(8309),a(3763)),s=a(4945),i=a(9761),l=a(5770);t["default"]={components:{MetadataList:n["default"],TagSelector:s["default"],KeywordFilter:l["default"]},props:{dataset:{type:Object,required:!0},initialSearchFilter:{type:Object,required:!1,default:null}},data:function(){return{searchFilter:new i.Z(this.initialSearchFilter),searchParams:new URLSearchParams,tags:[],keywords:[],defaultColumns:[{label:"Observation date",key:"date_beg",formatter:this.$utils.formatDate},{label:"Wavelength",key:"wavemin"}],metadataFilterId:this.$utils.getUniqueId()}},created:function(){this.loadTags(),this.loadKeywords()},methods:{updateSearchParams:function(){this.searchParams=this.searchFilter.getSearchParams()},loadTags:function(){var e=(0,r.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$SVO.tag.getAll({dataset:this.dataset.name});case 3:this.tags=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),this.$displayErrorMessage(this.$SVO.parseError(e.t0));case 9:case"end":return e.stop()}}),e,this,[[0,6]])})));function t(){return e.apply(this,arguments)}return t}(),loadKeywords:function(){var e=(0,r.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$SVO.keyword.getAll({dataset__name:this.dataset.name});case 3:this.keywords=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),this.$displayErrorMessage(this.$SVO.parseError(e.t0));case 9:case"end":return e.stop()}}),e,this,[[0,6]])})));function t(){return e.apply(this,arguments)}return t}()}}},9761:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var r=a(2032),n=a(8932),s=a(6133),i=a(2751),l=a(3796),o=(a(4916),a(4765),a(1539),a(8783),a(3948),a(1637),function(){function e(t){(0,s.Z)(this,e),(0,l.Z)(this,"tags",[]),(0,l.Z)(this,"keywordFilter",""),(0,l.Z)(this,"dateRange",{min:null,max:null}),t&&(Array.isArray(t.tags)&&(this.tags=(0,n.Z)(t.tags)),t.dateRange&&(this.dateRange={min:t.dateRange.min,max:t.dateRange.max}),t.keywordFilter&&(this.keywordFilter=t.keywordFilter),this.search=t.search)}return(0,i.Z)(e,[{key:"getSearchParams",value:function(){var e,t=new URLSearchParams,a=(0,r.Z)(this.tags);try{for(a.s();!(e=a.n()).done;){var n=e.value;t.append("tags__in",n)}}catch(s){a.e(s)}finally{a.f()}return this.keywordFilter&&t.set("search",this.keywordFilter),this.dateRange.min&&t.set("date_end__gte",this.dateRange.min.toISOString()),this.dateRange.max&&t.set("date_beg__lte",this.dateRange.max.toISOString()),this.search&&t.set("search",this.search),t}}]),e}())}}]);
//# sourceMappingURL=183.78f5ab05.js.map