"use strict";(self["webpackChunksvo"]=self["webpackChunksvo"]||[]).push([[972,882,113,670,496,189,807,161],{3790:function(e,t,r){r.r(t),r.d(t,{default:function(){return x}});var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-row",[r("b-col",{attrs:{cols:"4"}},[r("b-form",{on:{submit:function(t){return t.preventDefault(),e.updateSearchParams.apply(null,arguments)}}},[r("base-datetime-range",{attrs:{label:"Observation date","min-label":"Start","max-label":"End"},model:{value:e.searchFilter.dateRange,callback:function(t){e.$set(e.searchFilter,"dateRange",t)},expression:"searchFilter.dateRange"}}),r("b-form-group",{attrs:{label:"Wavelength","label-for":"wavelengths"}},[r("b-form-select",{attrs:{id:"wavelengths",options:e.searchFilter.wavelengthOptions,multiple:""},model:{value:e.searchFilter.wavelengths,callback:function(t){e.$set(e.searchFilter,"wavelengths",t)},expression:"searchFilter.wavelengths"}})],1),r("b-form-group",{attrs:{label:"Detector","label-for":"detectors"}},[r("b-form-select",{attrs:{id:"detectors",options:e.searchFilter.detectorOptions,multiple:""},model:{value:e.searchFilter.detectors,callback:function(t){e.$set(e.searchFilter,"detectors",t)},expression:"searchFilter.detectors"}})],1),r("b-form-group",{attrs:{label:"Compression","label-for":"compressions"}},[r("b-form-select",{attrs:{id:"compressions",options:e.searchFilter.compressionOptions,multiple:""},model:{value:e.searchFilter.compressions,callback:function(t){e.$set(e.searchFilter,"compressions",t)},expression:"searchFilter.compressions"}})],1),e.tags.length?r("tag-selector",{attrs:{tags:e.tags},model:{value:e.searchFilter.tags,callback:function(t){e.$set(e.searchFilter,"tags",t)},expression:"searchFilter.tags"}}):e._e(),e.keywords.length?r("keyword-filter",{attrs:{keywords:e.keywords},model:{value:e.searchFilter.keywordFilter,callback:function(t){e.$set(e.searchFilter,"keywordFilter",t)},expression:"searchFilter.keywordFilter"}}):e._e(),r("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Search")])],1)],1),r("b-col",{attrs:{cols:"8"}},[r("metadata-list",{attrs:{dataset:e.dataset,"search-params":e.searchParams,tags:e.tags,keywords:e.keywords,"default-columns":e.defaultColumns}})],1)],1)},a=[],l=r(2032),n=r(8932),o=r(6133),i=r(2751),c=r(3263),h=r(460),u=r(7349),d=r(796),m=r(6777),p=r(3796),v=(r(1249),r(7327),r(1539),r(2156)),f=r(9761),g=[174,304,1216],b=["FSI","HRI_EUV","HRI_LYA"],y=["Lossless","Lossy-extreme","Lossy-high quality","Lossy-strong"],w=function(e){(0,d.Z)(r,e);var t=(0,m.Z)(r);function r(e){var s;if((0,o.Z)(this,r),s=t.call(this,e),(0,p.Z)((0,c.Z)(s),"wavelengthOptions",g.map((function(e){return{value:e,text:"".concat(e," Å")}}))),(0,p.Z)((0,c.Z)(s),"detectorOptions",b),(0,p.Z)((0,c.Z)(s),"compressionOptions",y),(0,p.Z)((0,c.Z)(s),"wavelengths",[]),(0,p.Z)((0,c.Z)(s),"detectors",[]),(0,p.Z)((0,c.Z)(s),"compressions",[]),e){if(Array.isArray(e.wavelengths))s.wavelengths=(0,n.Z)(e.wavelengths);else if(e.wavelengthRange){var a=null!=e.wavelengthRange.min?10*e.wavelengthRange.min:-1/0,l=null!=e.wavelengthRange.max?10*e.wavelengthRange.max:1/0;(isFinite(a)||isFinite(l))&&(s.wavelengths=g.filter((function(e){return a<=e&&e<=l})))}Array.isArray(e.detectors)&&(s.detectors=(0,n.Z)(e.detectors)),Array.isArray(e.compressions)&&(s.detectors=(0,n.Z)(e.compressions))}return s}return(0,i.Z)(r,[{key:"getSearchParams",value:function(){var e,t=(0,h.Z)((0,u.Z)(r.prototype),"getSearchParams",this).call(this),s=(0,l.Z)(this.wavelengths);try{for(s.s();!(e=s.n()).done;){var a=e.value;t.append("wavelnth__in",a)}}catch(p){s.e(p)}finally{s.f()}var n,o=(0,l.Z)(this.detectors);try{for(o.s();!(n=o.n()).done;){var i=n.value;t.append("detector__in",i)}}catch(p){o.e(p)}finally{o.f()}var c,d=(0,l.Z)(this.compressions);try{for(d.s();!(c=d.n()).done;){var m=c.value;t.append("compress__in",m)}}catch(p){d.e(p)}finally{d.f()}return t}}]),r}(f.Z),F={name:"EuiLevel2",mixins:[v["default"]],data:function(){return{searchFilter:new w(this.initialSearchFilter),defaultColumns:[{label:"Observation date",key:"date_obs",formatter:this.$utils.formatDate},{label:"Wavelength (Å)",key:"wavelnth"},{label:"Detector",key:"detector"},{label:"Compression",key:"compress"}]}}},Z=F,k=r(1001),_=(0,k.Z)(Z,s,a,!1,null,null,null),x=_.exports}}]);
//# sourceMappingURL=972.0a271ba0.js.map