(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["DeleteAccount"],{"0e6f":function(e,r,t){"use strict";t.r(r);var a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("b-card",{staticClass:"w-50 mx-auto mt-5",attrs:{header:"Delete Account","border-variant":"danger","header-bg-variant":"danger","header-text-variant":"white"}},[t("b-card-text",[e._v("Deleting your account will also delete all your data selections. This action cannot be undone.")]),t("b-form",{on:{submit:function(r){return r.preventDefault(),e.deleteUser.apply(null,arguments)}}},[t("b-alert",{attrs:{show:!!e.formError,variant:"danger"},domProps:{textContent:e._s(e.formError)}}),t("b-form-group",{attrs:{label:"Password","label-for":"password",description:"Your password is required to delete your account"}},[t("b-form-input",{attrs:{id:"password",type:"password",autocomplete:"current-password",required:""},model:{value:e.password,callback:function(r){e.password=r},expression:"password"}})],1),t("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Delete")])],1)],1)},o=[],s=t("1da1"),n=(t("96cf"),{name:"DeleteAccount",data:function(){return{password:null,formError:null}},methods:{deleteUser:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.formError=null,e.prev=1,e.next=4,this.$SVO.user.delete(this.password);case 4:this.$router.push({name:"Authentication"}),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](1),401==e.t0.response.status?this.formError="The password is invalid. If you have forgotten your password, please contact the website administrator":this.formError=this.$SVO.parseError(e.t0);case 10:case"end":return e.stop()}}),e,this,[[1,7]])})));function r(){return e.apply(this,arguments)}return r}()}}),u=n,i=t("2877"),l=Object(i["a"])(u,a,o,!1,null,null,null);r["default"]=l.exports}}]);
//# sourceMappingURL=DeleteAccount.d357408c.js.map