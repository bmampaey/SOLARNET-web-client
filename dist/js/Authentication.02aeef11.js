"use strict";(self["webpackChunksvo"]=self["webpackChunksvo"]||[]).push([[415],{562:function(r,e,t){t.r(e),t.d(e,{default:function(){return _}});var a=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("b-container",{attrs:{fluid:""}},[t("b-card",{staticClass:"w-50 mx-auto mt-5",attrs:{"no-body":""}},[t("b-tabs",{attrs:{card:"",justified:""}},[t("b-tab",{attrs:{title:"Login",active:""}},[t("login-form")],1),t("b-tab",{attrs:{title:"Register"}},[t("register-form")],1)],1),t("b-card-footer",[r._v(" The following documents and statements apply to this website and the services it provides. By logging in you signify that you agree with all of them. "),t("b-link",{attrs:{href:"http://www.astro.oma.be/common/internet/en/terms-of-use.pdf",target:"_blank"}},[r._v("Terms of use")]),r._v(", "),t("b-link",{attrs:{href:"http://www.astro.oma.be/common/internet/en/cookie-declaration.pdf",target:"_blank"}},[r._v("Cookie usage")]),r._v(", "),t("b-link",{attrs:{href:"http://www.astro.oma.be/common/internet/en/data-policy-en.pdf",target:"_blank"}},[r._v("Data policy")]),r._v(", "),t("b-link",{attrs:{href:"http://www.astro.oma.be/common/internet/en/privacy-policy-en.pdf",target:"_blank"}},[r._v("Privacy policy")]),r._v(", "),t("b-link",{attrs:{href:"http://www.astro.oma.be/common/internet/en/disclaimer-en.pdf",target:"_blank"}},[r._v("Disclaimer")])],1)],1)],1)},o=[],n=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("b-form",{on:{submit:function(e){return e.preventDefault(),r.logInUser.apply(null,arguments)}}},[t("b-alert",{attrs:{show:!!r.formError,variant:"danger"},domProps:{textContent:r._s(r.formError)}}),t("b-form-group",{attrs:{label:"Email","label-for":"email"}},[t("b-form-input",{attrs:{id:"email",type:"email",autocomplete:"email",required:"",trim:""},model:{value:r.email,callback:function(e){r.email=e},expression:"email"}})],1),t("b-form-group",{attrs:{label:"Password","label-for":"password"}},[t("b-form-input",{attrs:{id:"password",type:"password",autocomplete:"current-password",required:""},model:{value:r.password,callback:function(e){r.password=e},expression:"password"}})],1),t("b-button",{attrs:{type:"submit",variant:"primary"}},[r._v("Login")])],1)},s=[],l=t(6198),i=(t(5666),{name:"LoginForm",data:function(){return{email:null,password:null,formError:null}},methods:{logInUser:function(){var r=this;return(0,l.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r.formError=null,e.prev=1,e.next=4,r.$SVO.user.logIn(r.email,r.password);case 4:r.$router.push({name:"Root"}),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](1),401==e.t0.response.status?r.formError="The email or password is invalid. If you have forgotten your password, please contact the website administrator":r.formError=r.$SVO.parseError(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))()}}}),m=i,u=t(1001),p=(0,u.Z)(m,n,s,!1,null,null,null),c=p.exports,f=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("b-form",{on:{submit:function(e){return e.preventDefault(),r.registerUser.apply(null,arguments)}}},[t("b-alert",{attrs:{show:!!r.formError,variant:"danger"},domProps:{textContent:r._s(r.formError)}}),t("b-form-group",{attrs:{label:"First Name","label-for":"first-name",description:"Optional"}},[t("b-form-input",{attrs:{id:"first-name",autocomplete:"given-name",trim:""},model:{value:r.firstName,callback:function(e){r.firstName=e},expression:"firstName"}})],1),t("b-form-group",{attrs:{label:"Last Name","label-for":"last-name",description:"Optional"}},[t("b-form-input",{attrs:{id:"last-name",autocomplete:"family-name",trim:""},model:{value:r.lastName,callback:function(e){r.lastName=e},expression:"lastName"}})],1),t("b-form-group",{attrs:{label:"Email","label-for":"email"}},[t("b-form-input",{attrs:{id:"email",type:"email",autocomplete:"email",required:"",trim:""},model:{value:r.email,callback:function(e){r.email=e},expression:"email"}})],1),t("b-form-group",{attrs:{label:"Password","label-for":"password"}},[t("b-form-input",{attrs:{id:"password",type:"password",autocomplete:"new-password",required:""},model:{value:r.password,callback:function(e){r.password=e},expression:"password"}})],1),t("b-button",{attrs:{type:"submit",variant:"primary"}},[r._v("Register")])],1)},b=[],d={name:"RegisterForm",data:function(){return{firstName:null,lastName:null,email:null,password:null,formError:null}},methods:{registerUser:function(){var r=this;return(0,l.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r.formError=null,e.prev=1,e.next=4,r.$SVO.user.register(r.firstName,r.lastName,r.email,r.password);case 4:r.$router.push({name:"Root"}),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](1),r.formError=r.$SVO.parseError(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))()}}},w=d,v=(0,u.Z)(w,f,b,!1,null,null,null),g=v.exports,h={name:"Login",components:{LoginForm:c,RegisterForm:g}},k=h,y=(0,u.Z)(k,a,o,!1,null,null,null),_=y.exports}}]);
//# sourceMappingURL=Authentication.02aeef11.js.map