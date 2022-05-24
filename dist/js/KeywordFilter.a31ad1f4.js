(self["webpackChunksvo"]=self["webpackChunksvo"]||[]).push([[355],{2181:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-form-row",[n("b-col",[n("b-form-group",{attrs:{label:"Add a filter for the keyword","label-for":e.uniqueId("select-keyword")}},[n("b-form-select",{attrs:{id:e.uniqueId("select-keyword"),options:e.keywordOptions},model:{value:e.selectedKeyword,callback:function(t){e.selectedKeyword=t},expression:"selectedKeyword"}})],1)],1),n("b-col",{staticClass:"mb-3",attrs:{cols:"auto","align-self":"end"}},[n("b-button",{attrs:{variant:"light",title:e.selectedKeyword?"Add filter for keyword "+e.selectedKeyword.verbose_name:"Select a keyword to add a filter"},on:{click:e.addKeywordFilter}},[n("b-icon",{attrs:{icon:"plus"}})],1)],1)],1),e._l(e.keywordFilters,(function(t){return n("b-form-row",{key:t.name},[n("b-col",["text"==t.type?n("b-form-group",{attrs:{label:t.verbose_name+" contains","label-for":e.uniqueId(t.name)}},[n("b-form-input",{attrs:{id:e.uniqueId(t.name),type:"text"},model:{value:e.filterValues[t.name],callback:function(n){e.$set(e.filterValues,t.name,n)},expression:"filterValues[keyword.name]"}})],1):"time (ISO 8601)"==t.type?n("datetime-range",{attrs:{label:t.verbose_name+" is between"},model:{value:e.filterValues[t.name],callback:function(n){e.$set(e.filterValues,t.name,n)},expression:"filterValues[keyword.name]"}}):"integer"==t.type?n("number-range",{attrs:{label:t.verbose_name+" is between",unit:t.unit,step:"1"},model:{value:e.filterValues[t.name],callback:function(n){e.$set(e.filterValues,t.name,n)},expression:"filterValues[keyword.name]"}}):"real"==t.type?n("number-range",{attrs:{label:t.verbose_name+" is between",unit:t.unit},model:{value:e.filterValues[t.name],callback:function(n){e.$set(e.filterValues,t.name,n)},expression:"filterValues[keyword.name]"}}):"boolean"==t.type?n("b-form-group",{attrs:{label:t.verbose_name+" is"},scopedSlots:e._u([{key:"default",fn:function(r){var i=r.ariaDescribedby;return[n("b-form-radio-group",{attrs:{options:[!0,!1],"aria-describedby":i,buttons:"","button-variant":"outline-dark"},model:{value:e.filterValues[t.name],callback:function(n){e.$set(e.filterValues,t.name,n)},expression:"filterValues[keyword.name]"}})]}}],null,!0)}):e._e()],1),n("b-col",{staticClass:"mb-3",attrs:{cols:"auto","align-self":"end"}},[n("b-button",{attrs:{variant:"light",title:"Remove filter for keyword "+t.verbose_name},on:{click:function(n){return e.removeKeywordFilter(t)}}},[n("b-icon",{attrs:{icon:"x"}})],1)],1)],1)}))],2)},i=[],a=n(2032),s=(n(1532),n(1539),n(8783),n(3948),n(8559),n(1249),n(8309),n(7327),n(9600),n(2222),{name:"KeywordFilter",props:{value:{type:String,required:!0},keywords:{type:Array,required:!0}},data:function(){return{uniqueIdMap:new Map,selectedKeyword:null,selectedKeywords:Object.fromEntries(this.keywords.map((function(e){return[e.name,!1]}))),filterValues:Object.fromEntries(this.keywords.map((function(e){return"integer"==e.type||"real"==e.type||"time (ISO 8601)"==e.type?[e.name,{min:null,max:null}]:[e.name,null]})))}},computed:{keywordOptions:function(){var e=this;return this.keywords.filter((function(t){return!e.selectedKeywords[t.name]})).map((function(e){return{text:e.verbose_name,value:e}}))},keywordFilters:function(){var e=this;return this.keywords.filter((function(t){return e.selectedKeywords[t.name]}))}},watch:{filterValues:{handler:"updateModelValue",immediate:!0,deep:!0}},methods:{uniqueId:function(e){return this.uniqueIdMap.has(e)||this.uniqueIdMap.set(e,this.$utils.getUniqueId()),this.uniqueIdMap.get(e)},addKeywordFilter:function(){this.selectedKeyword&&(this.selectedKeywords[this.selectedKeyword.name]=!0,this.selectedKeyword=null)},removeKeywordFilter:function(e){this.selectedKeywords[e.name]=!1,this.selectedKeyword=e,this.updateModelValue()},updateModelValue:function(){var e,t=[],n=(0,a.Z)(this.keywordFilters);try{for(n.s();!(e=n.n()).done;){var r=e.value;if("text"==r.type)this.filterValues[r.name]&&t.push("(".concat(r.name,"__icontains=").concat(this.filterValues[r.name],")"));else if("integer"==r.type||"real"==r.type){var i,s;null!==(i=this.filterValues[r.name])&&void 0!==i&&i.min&&t.push("(".concat(r.name,"__gte=").concat(this.filterValues[r.name].min,")")),null!==(s=this.filterValues[r.name])&&void 0!==s&&s.max&&t.push("(".concat(r.name,"__lte=").concat(this.filterValues[r.name].max,")"))}else if("time (ISO 8601)"==r.type){var l,o;null!==(l=this.filterValues[r.name])&&void 0!==l&&l.min&&t.push("(".concat(r.name,"__gte=").concat(this.filterValues[r.name].min.toISOString(),")")),null!==(o=this.filterValues[r.name])&&void 0!==o&&o.max&&t.push("(".concat(r.name,"__lte=").concat(this.filterValues[r.name].max.toISOString(),")"))}else"boolean"==r.type&&this.filterValues[r.name]&&t.push("(".concat(r.name,"=").concat(this.filterValues[r.name],")"))}}catch(u){n.e(u)}finally{n.f()}this.$emit("input",t.join("and"))}}}),l=s,o=n(1001),u=(0,o.Z)(l,r,i,!1,null,null,null),d=u.exports},5631:function(e,t,n){"use strict";var r=n(3070).f,i=n(30),a=n(9190),s=n(9974),l=n(5787),o=n(408),u=n(654),d=n(6340),c=n(9781),f=n(2423).fastKey,m=n(9909),v=m.set,p=m.getterFor;e.exports={getConstructor:function(e,t,n,u){var d=e((function(e,r){l(e,m),v(e,{type:t,index:i(null),first:void 0,last:void 0,size:0}),c||(e.size=0),void 0!=r&&o(r,e[u],{that:e,AS_ENTRIES:n})})),m=d.prototype,y=p(t),h=function(e,t,n){var r,i,a=y(e),s=b(e,t);return s?s.value=n:(a.last=s={index:i=f(t,!0),key:t,value:n,previous:r=a.last,next:void 0,removed:!1},a.first||(a.first=s),r&&(r.next=s),c?a.size++:e.size++,"F"!==i&&(a.index[i]=s)),e},b=function(e,t){var n,r=y(e),i=f(t);if("F"!==i)return r.index[i];for(n=r.first;n;n=n.next)if(n.key==t)return n};return a(m,{clear:function(){var e=this,t=y(e),n=t.index,r=t.first;while(r)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete n[r.index],r=r.next;t.first=t.last=void 0,c?t.size=0:e.size=0},delete:function(e){var t=this,n=y(t),r=b(t,e);if(r){var i=r.next,a=r.previous;delete n.index[r.index],r.removed=!0,a&&(a.next=i),i&&(i.previous=a),n.first==r&&(n.first=i),n.last==r&&(n.last=a),c?n.size--:t.size--}return!!r},forEach:function(e){var t,n=y(this),r=s(e,arguments.length>1?arguments[1]:void 0);while(t=t?t.next:n.first){r(t.value,t.key,this);while(t&&t.removed)t=t.previous}},has:function(e){return!!b(this,e)}}),a(m,n?{get:function(e){var t=b(this,e);return t&&t.value},set:function(e,t){return h(this,0===e?0:e,t)}}:{add:function(e){return h(this,e=0===e?0:e,e)}}),c&&r(m,"size",{get:function(){return y(this).size}}),d},setStrong:function(e,t,n){var r=t+" Iterator",i=p(t),a=p(r);u(e,t,(function(e,t){v(this,{type:r,target:e,state:i(e),kind:t,last:void 0})}),(function(){var e=a(this),t=e.kind,n=e.last;while(n&&n.removed)n=n.previous;return e.target&&(e.last=n=n?n.next:e.state.first)?"keys"==t?{value:n.key,done:!1}:"values"==t?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(e.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),d(t)}}},9098:function(e,t,n){"use strict";var r=n(7710),i=n(5631);r("Map",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),i)},1532:function(e,t,n){n(9098)},8559:function(e,t,n){var r=n(2109),i=n(408),a=n(6135);r({target:"Object",stat:!0},{fromEntries:function(e){var t={};return i(e,(function(e,n){a(t,e,n)}),{AS_ENTRIES:!0}),t}})}}]);
//# sourceMappingURL=KeywordFilter.a31ad1f4.js.map