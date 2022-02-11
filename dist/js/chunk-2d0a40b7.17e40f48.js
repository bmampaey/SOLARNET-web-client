(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a40b7"],{"0584":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-row",[a("b-col",{attrs:{cols:"4"}},[a("b-form",{on:{submit:function(t){return t.preventDefault(),e.updateSearchParams.apply(null,arguments)}}},[a("base-datetime-range",{attrs:{label:"Observation date","min-label":"Start","max-label":"End"},model:{value:e.searchFilter.dateRange,callback:function(t){e.$set(e.searchFilter,"dateRange",t)},expression:"searchFilter.dateRange"}}),a("b-form-group",{attrs:{label:"Wavelength","label-for":"wavelengths"}},[a("b-form-select",{attrs:{id:"wavelengths",options:e.searchFilter.wavelengthOptions,multiple:""},model:{value:e.searchFilter.wavelengths,callback:function(t){e.$set(e.searchFilter,"wavelengths",t)},expression:"searchFilter.wavelengths"}})],1),a("b-form-group",{attrs:{description:"Only display data with a quality of 0"}},[a("b-form-checkbox",{model:{value:e.searchFilter.bestQuality,callback:function(t){e.$set(e.searchFilter,"bestQuality",t)},expression:"searchFilter.bestQuality"}},[e._v("Best quality only")])],1),a("b-overlay",{attrs:{show:e.showOverlay,rounded:"sm"}},[a("b-form-group",{attrs:{label:"Tags","label-for":"tags"}},[a("b-form-select",{attrs:{id:"tags",options:e.tagOptions,multiple:""},model:{value:e.searchFilter.tags,callback:function(t){e.$set(e.searchFilter,"tags",t)},expression:"searchFilter.tags"}})],1)],1),a("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Search")])],1)],1),a("b-col",{attrs:{cols:"8"}},[a("metadata-list",{attrs:{dataset:e.dataset,"search-params":e.searchParams,columns:e.columns}})],1)],1)},r=[],s=a("b85c"),n=a("2909"),i=a("d4ec"),c=a("bee2"),o=a("257e"),u=a("45eb"),b=a("7e84"),h=a("262e"),v=a("2caf"),g=a("ade3"),d=(a("d81d"),a("4de4"),a("d3b7"),a("1814")),m=a("79d4"),f=[94,131,171,193,211,304,335,1600,1700,4500],p=function(e){Object(h["a"])(a,e);var t=Object(v["a"])(a);function a(e){var l;if(Object(i["a"])(this,a),l=t.call(this,e),Object(g["a"])(Object(o["a"])(l),"wavelengthOptions",f.map((function(e){return{value:e,text:"".concat(e," Å")}}))),Object(g["a"])(Object(o["a"])(l),"wavelengths",[]),Object(g["a"])(Object(o["a"])(l),"bestQuality",void 0),e){if(Array.isArray(e.wavelengths))l.wavelengths=Object(n["a"])(e.wavelengths);else if(e.wavelengthRange){var r=null!=e.wavelengthRange.min?10*e.wavelengthRange.min:-1/0,s=null!=e.wavelengthRange.max?10*e.wavelengthRange.max:1/0;(isFinite(r)||isFinite(s))&&(l.wavelengths=f.filter((function(e){return r<=e&&e<=s})))}l.bestQuality=e.bestQuality}return l}return Object(c["a"])(a,[{key:"getSearchParams",value:function(){var e,t=Object(u["a"])(Object(b["a"])(a.prototype),"getSearchParams",this).call(this),l=Object(s["a"])(this.wavelengths);try{for(l.s();!(e=l.n()).done;){var r=e.value;t.append("wavelnth__in",r)}}catch(n){l.e(n)}finally{l.f()}return this.bestQuality&&t.set("quality",0),t}}]),a}(m["a"]),w={name:"AiaLevel1",mixins:[d["default"]],data:function(){return{searchFilter:new p(this.initialSearchFilter),columns:[{label:"Observation date",key:"date_obs",formatter:this.$utils.formatDate},{label:"Wavelength (Å)",key:"wavelnth"},{label:"Quality",key:"quality"}]}}},y=w,O=a("2877"),F=Object(O["a"])(y,l,r,!1,null,null,null);t["default"]=F.exports}}]);
//# sourceMappingURL=chunk-2d0a40b7.17e40f48.js.map