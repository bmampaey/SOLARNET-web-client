"use strict";(self["webpackChunksvo"]=self["webpackChunksvo"]||[]).push([[63],{6702:function(t,e,n){n.r(e),n.d(e,{default:function(){return o}});var u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-form-group",{attrs:{label:"Tags","label-for":t.inputId}},[n("b-form-select",{attrs:{id:t.inputId,value:t.value,options:t.tagOptions,multiple:""},on:{input:t.onInput}})],1)},r=[],a=(n(1249),n(8309),{name:"TagFilter",props:{value:{type:Array,required:!0},tags:{type:Array,required:!0}},data:function(){return{inputId:this.$utils.getUniqueId()}},computed:{tagOptions:function(){return this.tags.map((function(t){return{value:t.name,text:t.name}}))}},methods:{onInput:function(t){this.$emit("input",t)}}}),i=a,s=n(1001),l=(0,s.Z)(i,u,r,!1,null,null,null),o=l.exports}}]);
//# sourceMappingURL=TagFilter.9cbfae1c.js.map