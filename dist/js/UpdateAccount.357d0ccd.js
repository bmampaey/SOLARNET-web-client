"use strict";(self["webpackChunksvo"]=self["webpackChunksvo"]||[]).push([[531],{7406:function(r,e,t){t.r(e),t.d(e,{default:function(){return c}});var s=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("b-card",{staticClass:"w-50 mx-auto mt-5",attrs:{header:"Update Account"}},[t("b-form",{on:{submit:function(e){return e.preventDefault(),r.updateUser.apply(null,arguments)}}},[t("b-alert",{attrs:{show:!!r.formError,variant:"danger"},domProps:{textContent:r._s(r.formError)}}),t("b-alert",{attrs:{show:!!r.formSuccess,variant:"success"},domProps:{textContent:r._s(r.formSuccess)}}),t("b-form-group",{attrs:{label:"First Name","label-for":"first-name"}},[t("b-form-input",{attrs:{id:"first-name",autocomplete:"given-name",trim:""},model:{value:r.firstName,callback:function(e){r.firstName=e},expression:"firstName"}})],1),t("b-form-group",{attrs:{label:"Last Name","label-for":"last-name"}},[t("b-form-input",{attrs:{id:"last-name",autocomplete:"family-name",trim:""},model:{value:r.lastName,callback:function(e){r.lastName=e},expression:"lastName"}})],1),t("b-form-group",{attrs:{label:"New Password","label-for":"new-password",description:"Optional, fill in only if you want to change your password"}},[t("b-form-input",{attrs:{id:"new-password",type:"password",autocomplete:"new-password"},model:{value:r.newPassword,callback:function(e){r.newPassword=e},expression:"newPassword"}})],1),t("b-form-group",{attrs:{label:"Current password","label-for":"current-password",description:"Your current password is required to update your account"}},[t("b-form-input",{attrs:{id:"current-password",type:"password",autocomplete:"current-password",required:""},model:{value:r.currentPassword,callback:function(e){r.currentPassword=e},expression:"currentPassword"}})],1),t("b-button",{attrs:{type:"submit",variant:"primary"}},[r._v("Update")])],1)],1)},a=[],o=t(6198),n=(t(5666),{name:"UpdateAccount",data:function(){return{firstName:this.$SVO.user.firstName,lastName:this.$SVO.user.lastName,newPassword:null,currentPassword:null,formError:null,formSuccess:null}},activated:function(){this.firstName=this.$SVO.user.firstName,this.lastName=this.$SVO.user.lastName},methods:{updateUser:function(){var r=this;return(0,o.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r.formError=null,e.prev=1,e.next=4,r.$SVO.user.update(r.firstName,r.lastName,r.newPassword,r.currentPassword);case 4:r.newPassword=null,r.currentPassword=null,r.formSuccess="Your account was updated successfully",e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](1),401==e.t0.response.status?r.formError="The current password is invalid. If you have forgotten your password, please contact the website administrator":r.formError=r.$SVO.parseError(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))()}}}),u=n,l=t(1001),i=(0,l.Z)(u,s,a,!1,null,null,null),c=i.exports}}]);
//# sourceMappingURL=UpdateAccount.357d0ccd.js.map