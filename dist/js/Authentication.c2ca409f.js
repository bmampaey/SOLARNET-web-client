"use strict";(self["webpackChunksvo"]=self["webpackChunksvo"]||[]).push([[415],{6803:function(r,t,e){e.r(t),e.d(t,{default:function(){return _}});var a=function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("b-container",{attrs:{fluid:""}},[e("b-card",{staticClass:"w-50 mx-auto mt-5",attrs:{"no-body":""}},[e("b-tabs",{attrs:{card:"",justified:""}},[e("b-tab",{attrs:{title:"Login",active:""}},[e("login-form")],1),e("b-tab",{attrs:{title:"Register"}},[e("register-form")],1)],1),e("b-card-footer",[r._v(" The following documents and statements apply to this website and the services it provides. By logging in you signify that you agree with all of them. "),e("b-link",{attrs:{href:"http://www.astro.oma.be/common/internet/en/terms-of-use.pdf",target:"_blank"}},[r._v("Terms of use")]),r._v(", "),e("b-link",{attrs:{href:"http://www.astro.oma.be/common/internet/en/cookie-declaration.pdf",target:"_blank"}},[r._v("Cookie usage")]),r._v(", "),e("b-link",{attrs:{href:"http://www.astro.oma.be/common/internet/en/data-policy-en.pdf",target:"_blank"}},[r._v("Data policy")]),r._v(", "),e("b-link",{attrs:{href:"http://www.astro.oma.be/common/internet/en/privacy-policy-en.pdf",target:"_blank"}},[r._v("Privacy policy")]),r._v(", "),e("b-link",{attrs:{href:"http://www.astro.oma.be/common/internet/en/disclaimer-en.pdf",target:"_blank"}},[r._v("Disclaimer")])],1)],1)],1)},o=[],n=function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("b-form",{on:{submit:function(t){return t.preventDefault(),r.logInUser.apply(null,arguments)}}},[e("b-alert",{attrs:{show:!!r.formError,variant:"danger"},domProps:{textContent:r._s(r.formError)}}),e("b-form-group",{attrs:{label:"Email","label-for":"email"}},[e("b-form-input",{attrs:{id:"email",type:"email",autocomplete:"email",required:"",trim:""},model:{value:r.email,callback:function(t){r.email=t},expression:"email"}})],1),e("b-form-group",{attrs:{label:"Password","label-for":"password"}},[e("b-form-input",{attrs:{id:"password",type:"password",autocomplete:"current-password",required:""},model:{value:r.password,callback:function(t){r.password=t},expression:"password"}})],1),e("b-button-toolbar",{attrs:{"key-nav":""}},[e("b-button",{attrs:{type:"submit",variant:"primary"}},[r._v("Login")]),e("span",{staticClass:"button-toolbar-spacer"}),e("b-button",{attrs:{href:"https://solarnet.oma.be/service/account/password_reset/",variant:"light"}},[r._v("Forgotten your password?")])],1)],1)},s=[],l=e(6198),i=(e(5666),{name:"LoginForm",data:function(){return{email:null,password:null,formError:null}},methods:{logInUser:function(){var r=this;return(0,l.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r.formError=null,t.prev=1,t.next=4,r.$SVO.user.logIn(r.email,r.password);case 4:r.$router.push({name:"Root"}),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](1),401==t.t0.response.status?r.formError="The email or password is invalid. If you have forgotten your password, please contact the website administrator":r.formError=r.$SVO.parseError(t.t0);case 10:case"end":return t.stop()}}),t,null,[[1,7]])})))()}}}),m=i,u=e(1001),p=(0,u.Z)(m,n,s,!1,null,null,null),c=p.exports,f=function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("b-form",{on:{submit:function(t){return t.preventDefault(),r.registerUser.apply(null,arguments)}}},[e("b-alert",{attrs:{show:!!r.formError,variant:"danger"},domProps:{textContent:r._s(r.formError)}}),e("b-form-group",{attrs:{label:"First Name","label-for":"first-name",description:"Optional"}},[e("b-form-input",{attrs:{id:"first-name",autocomplete:"given-name",trim:""},model:{value:r.firstName,callback:function(t){r.firstName=t},expression:"firstName"}})],1),e("b-form-group",{attrs:{label:"Last Name","label-for":"last-name",description:"Optional"}},[e("b-form-input",{attrs:{id:"last-name",autocomplete:"family-name",trim:""},model:{value:r.lastName,callback:function(t){r.lastName=t},expression:"lastName"}})],1),e("b-form-group",{attrs:{label:"Email","label-for":"email"}},[e("b-form-input",{attrs:{id:"email",type:"email",autocomplete:"email",required:"",trim:""},model:{value:r.email,callback:function(t){r.email=t},expression:"email"}})],1),e("b-form-group",{attrs:{label:"Password","label-for":"password"}},[e("b-form-input",{attrs:{id:"password",type:"password",autocomplete:"new-password",required:""},model:{value:r.password,callback:function(t){r.password=t},expression:"password"}})],1),e("b-button",{attrs:{type:"submit",variant:"primary"}},[r._v("Register")])],1)},b=[],d={name:"RegisterForm",data:function(){return{firstName:null,lastName:null,email:null,password:null,formError:null}},methods:{registerUser:function(){var r=this;return(0,l.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r.formError=null,t.prev=1,t.next=4,r.$SVO.user.register(r.firstName,r.lastName,r.email,r.password);case 4:r.$router.push({name:"Root"}),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](1),r.formError=r.$SVO.parseError(t.t0);case 10:case"end":return t.stop()}}),t,null,[[1,7]])})))()}}},w=d,v=(0,u.Z)(w,f,b,!1,null,null,null),g=v.exports,h={name:"Login",components:{LoginForm:c,RegisterForm:g}},k=h,y=(0,u.Z)(k,a,o,!1,null,null,null),_=y.exports}}]);
//# sourceMappingURL=Authentication.c2ca409f.js.map