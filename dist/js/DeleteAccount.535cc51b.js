"use strict";(self["webpackChunksvo"]=self["webpackChunksvo"]||[]).push([[598],{1801:function(r,e,t){t.r(e),t.d(e,{default:function(){return c}});var a=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("b-card",{staticClass:"w-50 mx-auto mt-5",attrs:{header:"Delete Account","border-variant":"danger","header-bg-variant":"danger","header-text-variant":"white"}},[t("b-card-text",[r._v("Deleting your account will also delete all your data selections. This action cannot be undone.")]),t("b-form",{on:{submit:function(e){return e.preventDefault(),r.deleteUser.apply(null,arguments)}}},[t("b-alert",{attrs:{show:!!r.formError,variant:"danger"},domProps:{textContent:r._s(r.formError)}}),t("b-form-group",{attrs:{label:"Password","label-for":"password",description:"Your password is required to delete your account"}},[t("b-form-input",{attrs:{id:"password",type:"password",autocomplete:"current-password",required:""},model:{value:r.password,callback:function(e){r.password=e},expression:"password"}})],1),t("b-button",{attrs:{type:"submit",variant:"primary"}},[r._v("Delete")])],1)],1)},s=[],n=t(6198),o=(t(5666),{name:"DeleteAccount",data:function(){return{password:null,formError:null}},methods:{deleteUser:function(){var r=(0,n.Z)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return this.formError=null,r.prev=1,r.next=4,this.$SVO.user.delete(this.password);case 4:this.$router.push({name:"Authentication"}),r.next=10;break;case 7:r.prev=7,r.t0=r["catch"](1),401==r.t0.response.status?this.formError="The password is invalid. If you have forgotten your password, please contact the website administrator":this.formError=this.$SVO.parseError(r.t0);case 10:case"end":return r.stop()}}),r,this,[[1,7]])})));function e(){return r.apply(this,arguments)}return e}()}}),u=o,i=t(1001),l=(0,i.Z)(u,a,s,!1,null,null,null),c=l.exports}}]);
//# sourceMappingURL=DeleteAccount.535cc51b.js.map