"use strict";(self["webpackChunkweb_client"]=self["webpackChunkweb_client"]||[]).push([[63],{2723:function(t,e,n){n.r(e),n.d(e,{default:function(){return p}});var u=function(){var t=this,e=t._self._c;return e("b-form-group",{attrs:{label:"Tags","label-for":t.inputId}},[e("b-form-select",{attrs:{id:t.inputId,value:t.value,options:t.tagOptions,multiple:""},on:{input:t.onInput}})],1)},r=[],a={name:"TagFilter",props:{value:{type:Array,required:!0},tags:{type:Array,required:!0}},data(){return{inputId:this.$utils.getUniqueId()}},computed:{tagOptions(){return this.tags.map((t=>({value:t.name,text:t.name})))}},methods:{onInput(t){this.$emit("input",t)}}},i=a,l=n(1001),s=(0,l.Z)(i,u,r,!1,null,null,null),p=s.exports}}]);
//# sourceMappingURL=TagFilter.114068fe.js.map