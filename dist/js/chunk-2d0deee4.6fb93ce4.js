(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0deee4"],{"886d":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{attrs:{fluid:""}},[r("b-card",{staticClass:"w-50 mx-auto mt-5",attrs:{"no-body":""}},[r("b-tabs",{attrs:{card:"",justified:""}},[r("b-tab",{attrs:{title:"Login",active:""}},[r("login-form")],1),r("b-tab",{attrs:{title:"Register"}},[r("register-form")],1)],1),r("b-card-footer",[t._v(" The following documents and statements apply to this website and the services it provides. By logging in you signify that you agree with all of them. "),r("b-link",{attrs:{href:"http://www.astro.oma.be/common/internet/en/terms-of-use.pdf",target:"_blank"}},[t._v("Terms of use")]),t._v(", "),r("b-link",{attrs:{href:"http://www.astro.oma.be/common/internet/en/cookie-declaration.pdf",target:"_blank"}},[t._v("Cookie usage")]),t._v(", "),r("b-link",{attrs:{href:"http://www.astro.oma.be/common/internet/en/data-policy-en.pdf",target:"_blank"}},[t._v("Data policy")]),t._v(", "),r("b-link",{attrs:{href:"http://www.astro.oma.be/common/internet/en/privacy-policy-en.pdf",target:"_blank"}},[t._v("Privacy policy")]),t._v(", "),r("b-link",{attrs:{href:"http://www.astro.oma.be/common/internet/en/disclaimer-en.pdf",target:"_blank"}},[t._v("Disclaimer")])],1)],1)],1)},o=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-form",{on:{submit:function(e){return e.preventDefault(),t.logInUser.apply(null,arguments)}}},[r("b-alert",{attrs:{show:!!t.formError,variant:"danger"},domProps:{textContent:t._s(t.formError)}}),r("b-form-group",{attrs:{label:"Email","label-for":"email"}},[r("b-form-input",{attrs:{id:"email",type:"email",autocomplete:"email",required:"",trim:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),r("b-form-group",{attrs:{label:"Password","label-for":"password"}},[r("b-form-input",{attrs:{id:"password",type:"password",autocomplete:"current-password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),r("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Login")])],1)},n=[],i=(r("96cf"),r("1da1")),l={name:"LoginForm",data:function(){return{email:null,password:null,formError:null}},methods:{logInUser:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.formError=null,t.prev=1,t.next=4,this.$SVO.user.logIn(this.email,this.password);case 4:this.$router.push({name:"Root"}),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](1),401==t.t0.response.status?this.formError="The email or password is invalid. If you have forgotten your password, please contact the website administrator":this.formError=this.$SVO.parseError(t.t0);case 10:case"end":return t.stop()}}),t,this,[[1,7]])})));function e(){return t.apply(this,arguments)}return e}()}},m=l,u=r("2877"),p=Object(u["a"])(m,s,n,!1,null,null,null),c=p.exports,f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-form",{on:{submit:function(e){return e.preventDefault(),t.registerUser.apply(null,arguments)}}},[r("b-alert",{attrs:{show:!!t.formError,variant:"danger"},domProps:{textContent:t._s(t.formError)}}),r("b-form-group",{attrs:{label:"First Name","label-for":"first-name",description:"Optional"}},[r("b-form-input",{attrs:{id:"first-name",autocomplete:"given-name",trim:""},model:{value:t.firstName,callback:function(e){t.firstName=e},expression:"firstName"}})],1),r("b-form-group",{attrs:{label:"Last Name","label-for":"last-name",description:"Optional"}},[r("b-form-input",{attrs:{id:"last-name",autocomplete:"family-name",trim:""},model:{value:t.lastName,callback:function(e){t.lastName=e},expression:"lastName"}})],1),r("b-form-group",{attrs:{label:"Email","label-for":"email"}},[r("b-form-input",{attrs:{id:"email",type:"email",autocomplete:"email",required:"",trim:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),r("b-form-group",{attrs:{label:"Password","label-for":"password"}},[r("b-form-input",{attrs:{id:"password",type:"password",autocomplete:"new-password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),r("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Register")])],1)},b=[],d={name:"RegisterForm",data:function(){return{firstName:null,lastName:null,email:null,password:null,formError:null}},methods:{registerUser:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.formError=null,t.prev=1,t.next=4,this.$SVO.user.register(this.firstName,this.lastName,this.email,this.password);case 4:this.$router.push({name:"Root"}),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](1),this.formError=this.$SVO.parseError(t.t0);case 10:case"end":return t.stop()}}),t,this,[[1,7]])})));function e(){return t.apply(this,arguments)}return e}()}},h=d,w=Object(u["a"])(h,f,b,!1,null,null,null),v=w.exports,g={name:"Login",components:{LoginForm:c,RegisterForm:v}},y=g,k=Object(u["a"])(y,a,o,!1,null,null,null);e["default"]=k.exports}}]);
//# sourceMappingURL=chunk-2d0deee4.6fb93ce4.js.map