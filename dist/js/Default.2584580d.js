"use strict";(self["webpackChunkweb_client"]=self["webpackChunkweb_client"]||[]).push([[850,355,670,601,63],{2838:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var r=function(){var e=this,t=e._self._c;return t("metadata",{attrs:{dataset:e.dataset,"search-filter":e.searchFilter,"default-columns":e.defaultColumns}},[t("datetime-range",{attrs:{label:"Observation date","min-label":"Start","max-label":"End"},model:{value:e.searchFilter.dateRange,callback:function(t){e.$set(e.searchFilter,"dateRange",t)},expression:"searchFilter.dateRange"}})],1)},s=[],i=a(3210),l={name:"Default",mixins:[i["default"]]},n=l,o=a(1001),d=(0,o.Z)(n,r,s,!1,null,null,null),u=d.exports},5305:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var r=function(){var e=this,t=e._self._c;return t("div",[t("b-form-row",{staticClass:"align-items-end"},[t("b-col",[t("b-form-group",{attrs:{label:"Add a filter for the keyword","label-for":e.uniqueId("select-keyword")}},[t("v-select",{attrs:{id:e.uniqueId("select-keyword"),options:e.keywordOptions,label:"verbose_name"},model:{value:e.selectedKeyword,callback:function(t){e.selectedKeyword=t},expression:"selectedKeyword"}})],1)],1),t("b-col",{staticClass:"mb-3",attrs:{cols:"auto"}},[t("b-button",{attrs:{variant:"light",disabled:!e.selectedKeyword,title:e.selectedKeyword?`Add filter for keyword ${e.selectedKeyword.verbose_name}`:"Select a keyword to add a filter",size:"sm"},on:{click:e.addKeywordFilter}},[t("b-icon",{attrs:{icon:"plus"}})],1)],1)],1),e._l(e.keywordFilters,(function(a){return t("b-form-row",{key:a.name,staticClass:"align-items-top"},[t("b-col",["text"==a.type?t("b-form-group",{attrs:{label:`${a.verbose_name} contains`,"label-for":e.uniqueId(a.name),description:a.description}},[t("b-form-input",{attrs:{id:e.uniqueId(a.name),type:"text"},model:{value:e.filterValues[a.name],callback:function(t){e.$set(e.filterValues,a.name,t)},expression:"filterValues[keyword.name]"}})],1):"time (ISO 8601)"==a.type?t("datetime-range",{attrs:{label:`${a.verbose_name} is between`,description:a.description},model:{value:e.filterValues[a.name],callback:function(t){e.$set(e.filterValues,a.name,t)},expression:"filterValues[keyword.name]"}}):"integer"==a.type?t("number-range",{attrs:{label:`${a.verbose_name} is between`,unit:a.unit,step:"1",description:a.description},model:{value:e.filterValues[a.name],callback:function(t){e.$set(e.filterValues,a.name,t)},expression:"filterValues[keyword.name]"}}):"real"==a.type?t("number-range",{attrs:{label:`${a.verbose_name} is between`,unit:a.unit,description:a.description},model:{value:e.filterValues[a.name],callback:function(t){e.$set(e.filterValues,a.name,t)},expression:"filterValues[keyword.name]"}}):"boolean"==a.type?t("b-form-group",{attrs:{label:`${a.verbose_name} is`,description:a.description},scopedSlots:e._u([{key:"default",fn:function({ariaDescribedby:r}){return[t("b-form-radio-group",{attrs:{options:[!0,!1],"aria-describedby":r,buttons:"","button-variant":"outline-dark"},model:{value:e.filterValues[a.name],callback:function(t){e.$set(e.filterValues,a.name,t)},expression:"filterValues[keyword.name]"}})]}}],null,!0)}):e._e()],1),t("b-col",{staticClass:"mb-3",attrs:{cols:"auto"}},[t("b-button",{attrs:{variant:"light",title:`Remove filter for keyword ${a.verbose_name}`,size:"sm"},on:{click:function(t){return e.removeKeywordFilter(a)}}},[t("b-icon",{attrs:{icon:"x"}})],1)],1)],1)}))],2)},s=[],i=(a(7658),{name:"KeywordFilter",props:{value:{type:String,required:!0},keywords:{type:Array,required:!0}},data(){return{uniqueIdMap:new Map,selectedKeyword:null,selectedKeywords:Object.fromEntries(this.keywords.map((e=>[e.name,!1]))),filterValues:Object.fromEntries(this.keywords.map((e=>"integer"==e.type||"real"==e.type||"time (ISO 8601)"==e.type?[e.name,{min:null,max:null}]:[e.name,null])))}},computed:{keywordOptions(){return this.keywords.filter((e=>!this.selectedKeywords[e.name]))},keywordFilters(){return this.keywords.filter((e=>this.selectedKeywords[e.name]))}},watch:{filterValues:{handler:"updateModelValue",immediate:!0,deep:!0}},methods:{uniqueId(e){return this.uniqueIdMap.has(e)||this.uniqueIdMap.set(e,this.$utils.getUniqueId()),this.uniqueIdMap.get(e)},addKeywordFilter(){this.selectedKeyword&&(this.selectedKeywords[this.selectedKeyword.name]=!0,this.selectedKeyword=null)},removeKeywordFilter(e){this.selectedKeywords[e.name]=!1,this.selectedKeyword=e,this.updateModelValue()},updateModelValue(){let e=[];for(const t of this.keywordFilters)"text"==t.type?this.filterValues[t.name]&&e.push(`(${t.name}__icontains=${this.filterValues[t.name]})`):"integer"==t.type||"real"==t.type?(this.filterValues[t.name]?.min&&e.push(`(${t.name}__gte=${this.filterValues[t.name].min})`),this.filterValues[t.name]?.max&&e.push(`(${t.name}__lte=${this.filterValues[t.name].max})`)):"time (ISO 8601)"==t.type?(this.filterValues[t.name]?.min&&e.push(`(${t.name}__gte=${this.filterValues[t.name].min.toISOString()})`),this.filterValues[t.name]?.max&&e.push(`(${t.name}__lte=${this.filterValues[t.name].max.toISOString()})`)):"boolean"==t.type&&this.filterValues[t.name]&&e.push(`(${t.name}=${this.filterValues[t.name]})`);this.$emit("input",e.join("and"))}}}),l=i,n=a(1001),o=(0,n.Z)(l,r,s,!1,null,null,null),d=o.exports},9041:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var r=function(){var e=this,t=e._self._c;return t("div",[t("b-row",[t("b-col",{attrs:{cols:"12",lg:"4"}},[t("b-card",{staticClass:"mb-3",attrs:{"no-body":""}},[t("b-card-header",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:e.metadataFilterId,expression:"metadataFilterId"}],attrs:{"header-tag":"header",title:"Click to show/hide the metadata filters"}},[e._v(" Filter metadata "),t("b-button",{staticClass:"hide-btn",attrs:{size:"sm","aria-controls":e.metadataFilterId}},[e._v("Hide")]),t("b-button",{staticClass:"show-btn",attrs:{size:"sm","aria-controls":e.metadataFilterId}},[e._v("Show")])],1),t("b-collapse",{attrs:{id:e.metadataFilterId,visible:""}},[t("b-card-body",[t("b-form",{on:{submit:function(t){return t.preventDefault(),e.updateSearchParams.apply(null,arguments)}}},[e._t("default",(function(){return[t("datetime-range",{attrs:{label:"Observation date","min-label":"Start","max-label":"End"},model:{value:e.searchFilter.dateRange,callback:function(t){e.$set(e.searchFilter,"dateRange",t)},expression:"searchFilter.dateRange"}})]})),e.tags.length?t("tag-filter",{attrs:{tags:e.tags},model:{value:e.searchFilter.tags,callback:function(t){e.$set(e.searchFilter,"tags",t)},expression:"searchFilter.tags"}}):e._e(),e.keywords.length?t("keyword-filter",{attrs:{keywords:e.keywords},model:{value:e.searchFilter.keywordFilter,callback:function(t){e.$set(e.searchFilter,"keywordFilter",t)},expression:"searchFilter.keywordFilter"}}):e._e(),t("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Search")])],2)],1)],1)],1)],1),t("b-col",{attrs:{cols:"12",lg:"8"}},[t("metadata-list",{attrs:{dataset:e.dataset,"search-params":e.searchParams,tags:e.tags,keywords:e.keywords,"default-columns":e.defaultColumns}})],1)],1)],1)},s=[],i=a(2723),l=a(5305),n=a(8513),o={name:"Metadata",components:{TagFilter:i["default"],KeywordFilter:l["default"],MetadataList:n["default"]},props:{dataset:{type:Object,required:!0},searchFilter:{type:Object,required:!0},defaultColumns:{type:Array,required:!0}},data(){return{searchParams:new URLSearchParams,tags:[],keywords:[],metadataFilterId:this.$utils.getUniqueId()}},created(){this.loadTags(),this.loadKeywords()},methods:{updateSearchParams(){this.searchParams=this.searchFilter.getSearchParams()},async loadTags(){try{this.tags=await this.$SVO.tag.getAll({dataset:this.dataset.name})}catch(e){this.$displayErrorMessage(this.$SVO.parseError(e))}},async loadKeywords(){try{this.keywords=await this.$SVO.keyword.getAll({dataset__name:this.dataset.name})}catch(e){this.$displayErrorMessage(this.$SVO.parseError(e))}}}},d=o,u=a(1001),c=(0,u.Z)(d,r,s,!1,null,null,null),m=c.exports},2723:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var r=function(){var e=this,t=e._self._c;return t("b-form-group",{attrs:{label:"Tags","label-for":e.inputId}},[t("b-form-select",{attrs:{id:e.inputId,value:e.value,options:e.tagOptions,multiple:""},on:{input:e.onInput}})],1)},s=[],i={name:"TagFilter",props:{value:{type:Array,required:!0},tags:{type:Array,required:!0}},data(){return{inputId:this.$utils.getUniqueId()}},computed:{tagOptions(){return this.tags.map((e=>({value:e.name,text:e.name})))}},methods:{onInput(e){this.$emit("input",e)}}},l=i,n=a(1001),o=(0,n.Z)(l,r,s,!1,null,null,null),d=o.exports},3210:function(e,t,a){a.r(t);var r=a(9041),s=a(4578);t["default"]={components:{Metadata:r["default"]},props:{dataset:{type:Object,required:!0},initialSearchFilter:{type:Object,required:!1,default:null}},data(){return{searchFilter:new s.Z(this.initialSearchFilter),defaultColumns:[{label:"Observation date",key:"date_beg",formatter:this.$utils.formatDate},{label:"Wavelength",key:"wavemin"}]}}}},4578:function(e,t,a){a.d(t,{Z:function(){return s}});var r=a(6318);class s{constructor(e){(0,r.Z)(this,"tags",[]),(0,r.Z)(this,"keywordFilter",""),(0,r.Z)(this,"dateRange",{min:null,max:null}),e&&(Array.isArray(e.tags)&&(this.tags=[...e.tags]),e.dateRange&&(this.dateRange={min:e.dateRange.min,max:e.dateRange.max}),e.keywordFilter&&(this.keywordFilter=e.keywordFilter),this.search=e.search)}getSearchParams(){let e=new URLSearchParams;for(const t of this.tags)e.append("tags__in",t);return this.keywordFilter&&e.set("search",this.keywordFilter),this.dateRange.min&&e.set("date_end__gte",this.dateRange.min.toISOString()),this.dateRange.max&&e.set("date_beg__lte",this.dateRange.max.toISOString()),this.search&&e.set("search",this.search),e}}}}]);
//# sourceMappingURL=Default.2584580d.js.map