(function(e){function t(t){for(var n,u,s=t[0],o=t[1],c=t[2],l=0,p=[];l<s.length;l++)u=s[l],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&p.push(r[u][0]),r[u]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);h&&h(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,u=1;u<a.length;u++){var o=a[u];0!==r[o]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},r={app:0},i=[];function u(e){return s.p+"js/"+({AiaLevel1:"AiaLevel1",AiaLevel1SearchFilter:"AiaLevel1SearchFilter",Metadata:"Metadata",MetadataDetail:"MetadataDetail",MetadataList:"MetadataList"}[e]||e)+"."+{"chunk-2d0aeced":"6abbf4b8","chunk-2d0deee4":"6fb93ce4","chunk-2d0e5e97":"c1d8dafb","chunk-2d229218":"b67c333e","chunk-2d22d605":"3f840dd7","chunk-5ef4b622":"b7d89918","chunk-2d0d059a":"36d4cccf","chunk-30f18ee2":"00e09246",AiaLevel1:"0a965f8f",AiaLevel1SearchFilter:"4e08bd57",Metadata:"ff343c88",MetadataDetail:"56674f3d",MetadataList:"b4548a62"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var t=[],a=r[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=n);var i,o=document.createElement("script");o.charset="utf-8",o.timeout=120,s.nc&&o.setAttribute("nonce",s.nc),o.src=u(e);var c=new Error;i=function(t){o.onerror=o.onload=null,clearTimeout(l);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+n+": "+i+")",c.name="ChunkLoadError",c.type=n,c.request=i,a[1](c)}r[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:o})}),12e4);o.onerror=o.onload=i,document.head.appendChild(o)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/web-client/",s.oe=function(e){throw console.error(e),e};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var h=c;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"14e6":function(e,t,a){e.exports=a.p+"img/no_preview_available.4288b341.jpg"},"4cc5":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("0cdd");var n=a("2b0e"),r=a("5f5b"),i=a("b1e0");a("4cc5");n["default"].use(r["a"]),n["default"].use(i["a"]),n["default"].use((function(e){e.prototype.$displayErrorMessage=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Error";this.$bvModal.msgBoxOk(e,{title:t,headerTextVariant:"danger"})}}));a("99af");function u(e){if(/^\d{4}-\d{2}-\d{2}$/.test(e))e=new Date("".concat(e,"T00:00:00Z"));else{if(!/^\d{4}-\d{2}-\d{2}[T ]\d{2}:\d{2}:\d{2}$/.test(e))return null;e=new Date("".concat(e.substring(0,10),"T").concat(e.substring(11,19),"Z"))}return isNaN(e.getTime())?null:e}function s(e){if(e){var t=new Date(e);isNaN(t.getTime())||(e=t.toISOString(),e="".concat(e.substring(0,10)," ").concat(e.substring(11,19)))}return e}n["default"].prototype.$utils={parseDate:u,formatDate:s};var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-navbar",{attrs:{toggleable:"md",type:"light",variant:"light"}},[n("b-navbar-brand",{attrs:{href:"https://solarnet2.oma.be/"}},[n("img",{staticStyle:{"max-width":"100px","vertical-align":"baseline"},attrs:{src:a("9190"),alt:"SolarNet logo"}})]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[n("b-nav-item",{attrs:{to:{name:"Datasets"},"active-class":"active"}},[e._v("Datasets")]),n("b-nav-item",{attrs:{to:{name:"DataSelections"},"active-class":"active"}},[e._v("Data selections")]),n("b-nav-item",{attrs:{to:{name:"HekEvents"},"active-class":"active"}},[e._v("HEK Events")])],1),n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-item-dropdown",{attrs:{id:"app-menu-user",text:e.accountName,right:""}},[n("b-dropdown-item",{on:{click:e.logOutUser}},[e._v("Logout")]),n("b-dropdown-item",{attrs:{to:{name:"UpdateAccount"}}},[e._v("Update account")]),n("b-dropdown-item",{attrs:{to:{name:"DeleteAccount"}}},[e._v("Delete account")])],1)],1)],1)],1)},c=[],l={name:"AppMenu",data:function(){return{user:this.$SVO.user}},computed:{accountName:function(){return this.user.fullName||"Account"}},methods:{logOutUser:function(){this.$SVO.user.logOut(),this.$router.push({name:"Authentication"})}}},h=l,p=a("2877"),m=Object(p["a"])(h,o,c,!1,null,null,null),d=m.exports,b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-form-group",{attrs:{label:e.label}},[a("b-form-row",[a("b-col",[a("b-form-group",{attrs:{label:e.minLabel,"label-for":e.minInputId,"label-size":"sm",state:e.minInputState,"invalid-feedback":e.minInputFeedback}},[a("b-input-group",[a("b-form-input",{attrs:{id:e.minInputId,state:e.minInputState,lazy:"",type:"text",placeholder:"YYYY-MM-DD",autocomplete:"off"},on:{change:e.checkInput},model:{value:e.minValue,callback:function(t){e.minValue=t},expression:"minValue"}}),a("b-input-group-append",[a("b-form-datepicker",{attrs:{"button-only":"",min:e.minDate,"hide-header":e.hideHeader,"start-weekday":e.startWeekday,"show-decade-nav":e.showDecadeNav,locale:e.locale,"aria-controls":e.minInputId},on:{input:e.checkInput},model:{value:e.minValue,callback:function(t){e.minValue=t},expression:"minValue"}})],1)],1)],1)],1),a("b-col",[a("b-form-group",{attrs:{label:e.maxLabel,"label-for":e.maxInputId,"label-size":"sm",state:e.maxInputState,"invalid-feedback":e.maxInputFeedback}},[a("b-input-group",[a("b-form-input",{attrs:{id:e.maxInputId,state:e.maxInputState,lazy:"",type:"text",placeholder:"YYYY-MM-DD",autocomplete:"off"},on:{change:e.checkInput},model:{value:e.maxValue,callback:function(t){e.maxValue=t},expression:"maxValue"}}),a("b-input-group-append",[a("b-form-datepicker",{attrs:{"button-only":"",max:e.maxDate,"hide-header":e.hideHeader,"start-weekday":e.startWeekday,"show-decade-nav":e.showDecadeNav,locale:e.locale,"aria-controls":e.maxInputId},on:{input:e.checkInput},model:{value:e.maxValue,callback:function(t){e.maxValue=t},expression:"maxValue"}})],1)],1)],1)],1)],1)],1)},f=[],v=(a("d3b7"),a("25f0"),0),g={props:{value:{type:Object,required:!0},inputId:{type:String,default:null},label:{type:String,required:!0},minLabel:{type:String,default:"Min"},maxLabel:{type:String,default:"Max"},minDate:{type:[String,Date],default:null},maxDate:{type:[String,Date],default:null}},data:function(){var e=this.inputId;return null==e&&(e="base-datetime-range-"+v.toString(),v+=1),{minValue:this.value.min instanceof Date?this.value.min.toISOString().substring(0,10):"",maxValue:this.value.max instanceof Date?this.value.max.toISOString().substring(0,10):"",minInputId:e+"-min",maxInputId:e+"-max",minInputFeedback:"",maxInputFeedback:"",minInputState:null,maxInputState:null,hideHeader:!0,startWeekday:1,showDecadeNav:!0,locale:"en"}},methods:{checkInput:function(){var e=this.$utils.parseDate(this.minValue);this.minValue&&null==e?(this.minInputState=!1,this.minInputFeedback="Invalid date, format is YYYY-MM-DD"):this.minInputState=null;var t=this.$utils.parseDate(this.maxValue);this.maxValue&&null==t?(this.maxInputState=!1,this.maxInputFeedback="Invalid date, format is YYYY-MM-DD"):this.maxInputState=null,0!=this.minInputState&&0!=this.maxInputState&&null!=e&&null!=t&&e>t&&(this.maxInputState=!1,this.maxInputFeedback="".concat(this.maxLabel," must be larger than ").concat(this.minLabel)),this.$emit("input",{min:e,max:t})}}},w=g,O=Object(p["a"])(w,b,f,!1,null,null,null),k=O.exports,j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-form-group",{attrs:{label:e.label}},[a("b-form-row",[a("b-col",[a("b-form-group",{attrs:{label:e.minLabel,"label-for":e.minInputId,"label-size":"sm",state:e.minInputState,"invalid-feedback":e.minInputFeedback}},[a("b-input-group",{attrs:{append:e.unit}},[a("b-form-input",{attrs:{id:e.minInputId,state:e.minInputState,"no-wheel":"",type:"number",number:"",autocomplete:"off"},on:{change:e.checkInput},model:{value:e.minValue,callback:function(t){e.minValue=t},expression:"minValue"}})],1)],1)],1),a("b-col",[a("b-form-group",{attrs:{label:e.maxLabel,"label-for":e.maxInputId,"label-size":"sm",state:e.maxInputState,"invalid-feedback":e.maxInputFeedback}},[a("b-input-group",{attrs:{append:e.unit}},[a("b-form-input",{attrs:{id:e.maxInputId,state:e.maxInputState,"no-wheel":"",type:"number",number:"",autocomplete:"off"},on:{change:e.checkInput},model:{value:e.maxValue,callback:function(t){e.maxValue=t},expression:"maxValue"}})],1)],1)],1)],1)],1)},y=[],x=0,S={props:{value:{type:Object,required:!0},inputId:{type:String,default:null},label:{type:String,required:!0},minLabel:{type:String,default:"Min"},maxLabel:{type:String,default:"Max"},unit:{type:String,default:null}},data:function(){var e=this.inputId;return null==e&&(e="base-number-range-"+x.toString(),x+=1),{minValue:null,maxValue:null,minInputId:e+"-min",maxInputId:e+"-max",minInputFeedback:"",maxInputFeedback:"",minInputState:null,maxInputState:null}},methods:{checkInput:function(){"number"==typeof this.minValue&&"number"==typeof this.maxValue&&this.minValue>this.maxValue?(this.maxInputState=!1,this.maxInputFeedback="".concat(this.maxLabel," must be larger than ").concat(this.minLabel)):this.maxInputState=null,this.$emit("input",{min:this.minValue,max:this.maxValue})}}},I=S,_=Object(p["a"])(I,j,y,!1,null,null,null),R=_.exports;n["default"].component("app-menu",d),n["default"].component("base-datetime-range",k),n["default"].component("base-number-range",R);a("96cf");var D=a("1da1"),M=a("d4ec"),A=a("bee2"),V=a("34a9"),L=a.n(V),N=(a("d81d"),a("ac1f"),a("3ca3"),a("841c"),a("10d1"),a("ddb0"),a("2b3d"),a("ade3")),F=a("5364"),E=a("2ecb"),P=a("f9c7"),U=a("9bd1"),C=(a("1276"),a("5530")),W=a("5fb0"),$=function(){function e(t){Object(M["a"])(this,e),Object.assign(this,t)}return Object(A["a"])(e,[{key:"type",get:function(){return W["f"][this.event_type]||this.event_type}},{key:"startTime",get:function(){return this.event_starttime&&new Date(this.event_starttime+"Z")}},{key:"endTime",get:function(){return this.event_endtime&&new Date(this.event_endtime+"Z")}},{key:"thumbnailUrl",get:function(){return this.gs_thumburl||a("14e6")}},{key:"id",get:function(){return this.kb_archivid&&this.kb_archivid.split("/").pop()}},{key:"detailUrl",get:function(){if(this.kb_archivid){var e=new URL(W["b"]);return e.search=new URLSearchParams(Object(C["a"])(Object(C["a"])({},W["d"]),{},{ivorn:this.kb_archivid})),e.href}return null}}]),e}(),z=new WeakMap,T=new WeakMap,Y=new WeakMap,K=new WeakMap,H=function(){function e(t,a){Object(M["a"])(this,e),z.set(this,{writable:!0,value:void 0}),T.set(this,{writable:!0,value:null}),Y.set(this,{writable:!0,value:null}),K.set(this,{writable:!0,value:1}),Object(N["a"])(this,"pageSize",W["c"]),Object(N["a"])(this,"totalRows",0),Object(N["a"])(this,"items",[]),Object(N["a"])(this,"loading",!1),Object(N["a"])(this,"ariaControl",null),Object(U["a"])(this,z,t),Object(U["a"])(this,T,a),this.ariaControl="__hek_paginator__".concat(Object(E["a"])(e,e,q,+Object(P["a"])(e,e,q)+1))}return Object(A["a"])(e,[{key:"loadPage",value:function(){var e=Object(D["a"])(regeneratorRuntime.mark((function e(t){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,Object(F["a"])(this,Y).set("result_limit",this.pageSize),Object(F["a"])(this,Y).set("page",t),a=new URL(Object(F["a"])(this,T)),a.search=Object(F["a"])(this,Y).toString(),e.next=7,Object(F["a"])(this,z).get(a.href);case 7:n=e.sent,this.items=n.result.map((function(e){return new $(e)})),this.items.length<this.pageSize?this.totalRows=t*this.pageSize-1:this.totalRows=t*this.pageSize+1,Object(U["a"])(this,K,t),this.loading=!1;case 12:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"searchParams",get:function(){return Object(F["a"])(this,Y)},set:function(e){Object(U["a"])(this,Y,new URLSearchParams(e))}},{key:"pageNumber",get:function(){return Object(F["a"])(this,K)},set:function(e){this.loadPage(e)}}]),e}(),q={writable:!0,value:0},J=function(){function e(t,a){Object(M["a"])(this,e),this.apiUrl=t,this.timeout=a}return Object(A["a"])(e,[{key:"getPaginator",value:function(){return new H(this,this.apiUrl)}},{key:"get",value:function(){var e=Object(D["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L()(t,{timeout:this.timeout}).promise;case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e["catch"](0),new Error("Unknown error in request");case 9:case"end":return e.stop()}}),e,this,[[0,6]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"parseError",value:function(e){return"An error happened, please retry or contact the site administrator"}}]),e}();n["default"].prototype.$HEK=new J(W["b"],W["a"]);a("4fad");var Z=a("3835"),G=a("bc3a"),B=a.n(G),Q=new WeakMap,X=new WeakMap,ee=function(){function e(t,a){Object(M["a"])(this,e),Q.set(this,{writable:!0,value:null}),X.set(this,{writable:!0,value:null}),Object(U["a"])(this,Q,t),Object(U["a"])(this,X,a)}return Object(A["a"])(e,[{key:"getAll",value:function(){var e=Object(D["a"])(regeneratorRuntime.mark((function e(){var t,a,n=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:null,t=new URLSearchParams(t),t.set("limit",0),e.next=5,Object(F["a"])(this,Q).get(Object(F["a"])(this,X),{params:t});case 5:return a=e.sent,e.abrupt("return",a.data.objects);case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"create",value:function(){var e=Object(D["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(F["a"])(this,Q).post(Object(F["a"])(this,X),t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"update",value:function(){var e=Object(D["a"])(regeneratorRuntime.mark((function e(t,a){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(F["a"])(this,Q).patch(t,a);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e,this)})));function t(t,a){return e.apply(this,arguments)}return t}()},{key:"delete",value:function(){var e=Object(D["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(F["a"])(this,Q).delete(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}]),e}(),te=(a("498a"),new WeakMap),ae=new WeakMap,ne=new WeakMap,re=new WeakMap,ie=new WeakMap,ue=new WeakMap,se=function(){function e(t,a){Object(M["a"])(this,e),te.set(this,{writable:!0,value:null}),ae.set(this,{writable:!0,value:null}),ne.set(this,{writable:!0,value:null}),re.set(this,{writable:!0,value:null}),ie.set(this,{writable:!0,value:null}),ue.set(this,{writable:!0,value:null}),Object(N["a"])(this,"fullName",null),Object(U["a"])(this,te,t),Object(U["a"])(this,ae,a),this.updateFullName()}return Object(A["a"])(e,[{key:"logIn",value:function(){var e=Object(D["a"])(regeneratorRuntime.mark((function e(t,a){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={username:t,password:a},e.next=3,Object(F["a"])(this,te).get(Object(F["a"])(this,ae),{auth:n});case 3:r=e.sent,this.parseResponseData(r.data),this.email=t;case 6:case"end":return e.stop()}}),e,this)})));function t(t,a){return e.apply(this,arguments)}return t}()},{key:"logOut",value:function(){this.firstName=null,this.lastName=null,this.email=null,this.apiKey=null}},{key:"register",value:function(){var e=Object(D["a"])(regeneratorRuntime.mark((function e(t,a,n,r){var i,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i={email:n,first_name:t,last_name:a,password:r},e.next=3,Object(F["a"])(this,te).post(Object(F["a"])(this,ae),i);case 3:u=e.sent,this.parseResponseData(u.data),this.email=n;case 6:case"end":return e.stop()}}),e,this)})));function t(t,a,n,r){return e.apply(this,arguments)}return t}()},{key:"update",value:function(){var e=Object(D["a"])(regeneratorRuntime.mark((function e(t,a,n,r){var i,u,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i={first_name:t||"",last_name:a||"",password:n||void 0},u={username:this.email,password:r},e.next=4,Object(F["a"])(this,te).patch(Object(F["a"])(this,ae),i,{auth:u});case 4:s=e.sent,this.parseResponseData(s.data);case 6:case"end":return e.stop()}}),e,this)})));function t(t,a,n,r){return e.apply(this,arguments)}return t}()},{key:"delete",value:function(){var e=Object(D["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a={username:this.email,password:t},e.next=3,Object(F["a"])(this,te).delete(Object(F["a"])(this,ae),{auth:a});case 3:this.logOut();case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"parseResponseData",value:function(e){this.firstName=e.first_name,this.lastName=e.last_name,this.apiKey=e.api_key}},{key:"updateFullName",value:function(){this.fullName="".concat(this.firstName," ").concat(this.lastName).trim()}},{key:"firstName",get:function(){return Object(F["a"])(this,ne)||Object(U["a"])(this,ne,window.localStorage.getItem("userFirstName")),Object(F["a"])(this,ne)},set:function(e){Object(U["a"])(this,ne,e),window.localStorage.setItem("userFirstName",e),this.updateFullName()}},{key:"lastName",get:function(){return Object(F["a"])(this,re)||Object(U["a"])(this,re,window.localStorage.getItem("userLastName")),Object(F["a"])(this,re)},set:function(e){Object(U["a"])(this,re,e),window.localStorage.setItem("userLastName",e),this.updateFullName()}},{key:"email",get:function(){return Object(F["a"])(this,ie)||Object(U["a"])(this,ie,window.localStorage.getItem("userEmail")),Object(F["a"])(this,ie)},set:function(e){Object(U["a"])(this,ie,e),window.localStorage.setItem("userEmail",e)}},{key:"apiKey",get:function(){return Object(F["a"])(this,ue)||Object(U["a"])(this,ue,window.localStorage.getItem("userApiKey")),Object(F["a"])(this,ue)},set:function(e){Object(U["a"])(this,ue,e),window.localStorage.setItem("userApiKey",e)}},{key:"isAuthenticated",get:function(){return!(!this.email||!this.apiKey)}}]),e}(),oe=new WeakMap,ce=new WeakMap,le=new WeakMap,he=new WeakMap,pe=function(){function e(t,a){Object(M["a"])(this,e),oe.set(this,{writable:!0,value:null}),ce.set(this,{writable:!0,value:null}),le.set(this,{writable:!0,value:null}),he.set(this,{writable:!0,value:1}),Object(N["a"])(this,"pageSize",W["j"]),Object(N["a"])(this,"totalRows",0),Object(N["a"])(this,"items",[]),Object(N["a"])(this,"loading",!1),Object(N["a"])(this,"ariaControl",null),Object(U["a"])(this,oe,t),Object(U["a"])(this,ce,a),this.ariaControl="__svo_paginator__".concat(Object(E["a"])(e,e,me,+Object(P["a"])(e,e,me)+1))}return Object(A["a"])(e,[{key:"loadPage",value:function(){var e=Object(D["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,Object(F["a"])(this,le).set("limit",this.pageSize),Object(F["a"])(this,le).set("offset",(t-1)*this.pageSize),e.next=5,Object(F["a"])(this,oe).get(Object(F["a"])(this,ce),{params:Object(F["a"])(this,le)});case 5:a=e.sent,this.items=a.data.objects,this.pageSize=a.data.meta.limit,this.totalRows=a.data.meta.total_count,Object(U["a"])(this,he,this.pageSize>0?Math.floor(a.data.meta.offset/this.pageSize)+1:1),this.loading=!1;case 11:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"searchParams",get:function(){return Object(F["a"])(this,le)},set:function(e){Object(U["a"])(this,le,new URLSearchParams(e))}},{key:"pageNumber",get:function(){return Object(F["a"])(this,he)},set:function(e){this.loadPage(e)}}]),e}(),me={writable:!0,value:0},de=new WeakMap,be=function(){function e(t,a,n){var r=this;Object(M["a"])(this,e),de.set(this,{writable:!0,value:!1}),this.apiSchemaUrl=n,this.resourceUris={},this.axios=B.a.create({baseURL:t,timeout:a}),this.authenticatedAxios=B.a.create({baseURL:t,timeout:a}),this.authenticatedAxios.interceptors.request.use((function(e){return r.setAuthentication(e)}),null,{synchronous:!0})}return Object(A["a"])(e,[{key:"setup",value:function(){var e=Object(D["a"])(regeneratorRuntime.mark((function e(){var t,a,n,r,i,u,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(Object(F["a"])(this,de)){e.next=7;break}return e.next=3,this.axios.get(this.apiSchemaUrl);case 3:for(t=e.sent,a=0,n=Object.entries(t.data);a<n.length;a++)r=Object(Z["a"])(n[a],2),i=r[0],u=r[1],s=u["list_endpoint"],this.resourceUris[i]=s,this[i]=this.getResource(s);this.user=new se(this.axios,this.resourceUris.user),Object(U["a"])(this,de,!0);case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getResource",value:function(e){return new ee(this.authenticatedAxios,e)}},{key:"getPaginator",value:function(e){return new pe(this.authenticatedAxios,e)}},{key:"setAuthentication",value:function(e){if(this.user.isAuthenticated)return e.headers.common["Authorization"]="ApiKey ".concat(this.user.email,":").concat(this.user.apiKey),e;throw window.vm.$router.push({name:"Authentication"}),new Error("User is not authenticated")}},{key:"parseError",value:function(e){return e.response?e.response.data.error?e.response.data.error:e.response.data:"An error happened, please retry or contact the site administrator"}}]),e}();n["default"].prototype.$SVO=new be(W["i"],W["h"],W["g"]);a("b0c0");var fe=a("8c4f");n["default"].use(fe["a"]);var ve=[{path:"/",name:"Root",redirect:{name:"Datasets"}},{path:"/datasets",name:"Datasets",component:function(){return Promise.all([a.e("chunk-5ef4b622"),a.e("chunk-2d0d059a")]).then(a.bind(null,"6835"))}},{path:"/data_selections",name:"DataSelections",component:function(){return a.e("chunk-2d22d605").then(a.bind(null,"f6dc"))}},{path:"/hek_events",name:"HekEvents",component:function(){return Promise.all([a.e("chunk-5ef4b622"),a.e("chunk-30f18ee2")]).then(a.bind(null,"9308"))}},{path:"/authentication",name:"Authentication",component:function(){return a.e("chunk-2d0deee4").then(a.bind(null,"886d"))}},{path:"/update_account",name:"UpdateAccount",component:function(){return a.e("chunk-2d229218").then(a.bind(null,"dbae"))}},{path:"/delete_account",name:"DeleteAccount",component:function(){return a.e("chunk-2d0aeced").then(a.bind(null,"0c48"))}},{path:"*",name:"NotFound",component:function(){return a.e("chunk-2d0e5e97").then(a.bind(null,"9703"))}}],ge=new fe["a"]({mode:"history",base:"/web-client/",routes:ve});ge.beforeEach((function(e,t,a){ge.app.$SVO.setup().then((function(){"Authentication"==e.name||ge.app.$SVO.user.isAuthenticated?a():a({name:"Authentication"})})).catch((function(){alert("Error contacting the server, please refresh the page or contact the administrator of the website")}))}));var we=ge,Oe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("keep-alive",[a("router-view")],1)},ke=[],je={name:"App"},ye=je,xe=Object(p["a"])(ye,Oe,ke,!1,null,null,null),Se=xe.exports;n["default"].config.productionTip=!1,window.vm=new n["default"]({router:we,render:function(e){return e(Se)}}).$mount("#app")},"5fb0":function(e,t,a){"use strict";a.d(t,"i",(function(){return r})),a.d(t,"g",(function(){return i})),a.d(t,"h",(function(){return u})),a.d(t,"j",(function(){return s})),a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return c})),a.d(t,"c",(function(){return l})),a.d(t,"e",(function(){return h})),a.d(t,"d",(function(){return p})),a.d(t,"f",(function(){return m}));a("dca8");var n=!1,r=n?"http://localhost:8800/":"https://solarnet2.oma.be/",i="/service/api/svo",u=15e3,s=10,o=n?"http://www.lmsal.com/hek/her/":"https://www.lmsal.com/hek/her/",c=15e3,l=10,h=Object.freeze({cosec:2,cmd:"search",type:"column",event_coordsys:"helioprojective",x1:"-5000",x2:"5000",y1:"-5000",y2:"5000",return:"event_type,event_starttime,event_endtime,kb_archivid,gs_thumburl,frm_name,frm_identifier",event_type:"**",event_starttime:new Date(Date.UTC(1975,9,1)).toISOString(),event_endtime:(new Date).toISOString()}),p=Object.freeze({cmd:"view-voevent",ivorn:""}),m=Object.freeze({AR:"Active Region",CE:"CME",CD:"Coronal Dimming",CH:"Coronal Hole",CW:"Coronal Wave",FI:"Filament",FE:"Filament Eruption",FA:"Filament Activation",FL:"Flare",LP:"Loop",OS:"Oscillation",SS:"Sunspot",EF:"Emerging Flux",CJ:"Coronal Jet",PG:"Plage",OT:"Other",NR:"Nothing Reported",SG:"Sigmoid",SP:"Spray Surge",CR:"Coronal Rain",CC:"Coronal Cavity",ER:"Eruption",TO:"Topological Object"})},9190:function(e,t,a){e.exports=a.p+"img/solarnet_logo.42511a01.png"}});
//# sourceMappingURL=app.2e9acf0e.js.map