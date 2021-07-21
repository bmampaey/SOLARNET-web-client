(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["SwapLevel1"],{a991:function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("b-row",[t("b-col",{attrs:{cols:"4"}},[t("b-form",{on:{submit:function(a){return a.preventDefault(),e.updateSearchParams.apply(null,arguments)}}},[t("base-datetime-range",{attrs:{label:"Observation date","min-label":"Start","max-label":"End"},model:{value:e.searchFilter.dateRange,callback:function(a){e.$set(e.searchFilter,"dateRange",a)},expression:"searchFilter.dateRange"}}),t("b-form-group",{attrs:{label:"Observation mode","label-for":"observationModes"}},[t("b-form-select",{attrs:{id:"observationModes",options:e.searchFilter.observationModeOptions,multiple:""},model:{value:e.searchFilter.observationModes,callback:function(a){e.$set(e.searchFilter,"observationModes",a)},expression:"searchFilter.observationModes"}})],1),t("b-overlay",{attrs:{show:e.showOverlay,rounded:"sm"}},[t("b-form-group",{attrs:{label:"Tags","label-for":"tags"}},[t("b-form-select",{attrs:{id:"tags",options:e.tagOptions,multiple:""},model:{value:e.searchFilter.tags,callback:function(a){e.$set(e.searchFilter,"tags",a)},expression:"searchFilter.tags"}})],1)],1),t("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Search")])],1)],1),t("b-col",{attrs:{cols:"8"}},[t("metadata-list",{attrs:{dataset:e.dataset,"search-params":e.searchParams,columns:e.columns}})],1)],1)},s=[],o=t("b85c"),n=t("2909"),l=t("d4ec"),i=t("bee2"),c=t("257e"),b=t("45eb"),d=t("7e84"),u=t("262e"),m=t("2caf"),v=t("ade3"),p=t("1814"),f=t("79d4"),h=["Fixed off-pointing","Variable off-pointing","Sun centered"],O=function(e){Object(u["a"])(t,e);var a=Object(m["a"])(t);function t(e){var r;return Object(l["a"])(this,t),r=a.call(this,e),Object(v["a"])(Object(c["a"])(r),"observationModeOptions",h),Object(v["a"])(Object(c["a"])(r),"observationModes",[]),e&&Array.isArray(e.observationModes)&&(r.observationModes=Object(n["a"])(e.observationModes)),r}return Object(i["a"])(t,[{key:"getSearchParams",value:function(){var e,a=Object(b["a"])(Object(d["a"])(t.prototype),"getSearchParams",this).call(this),r=Object(o["a"])(this.observationModes);try{for(r.s();!(e=r.n()).done;){var s=e.value;a.append("obs_mode__in",s)}}catch(n){r.e(n)}finally{r.f()}return a}}]),t}(f["a"]),g={name:"SwapLevel1",mixins:[p["default"]],data:function(){return{searchFilter:new O(this.initialSearchFilter),columns:[{label:"Observation date",key:"date_obs",formatter:this.$utils.formatDate},{label:"Observation mode",key:"obs_mode"}]}}},j=g,y=t("2877"),F=Object(y["a"])(j,r,s,!1,null,null,null);a["default"]=F.exports}}]);
//# sourceMappingURL=SwapLevel1.3908dfd5.js.map