(self["webpackChunkweb_client"]=self["webpackChunkweb_client"]||[]).push([[575],{5989:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return _}});var l=function(){var e=this,t=e._self._c;return t("data-selection-list")},i=[],n=function(){var e=this,t=e._self._c;return t("div",[t("b-overlay",{attrs:{show:e.showOverlay,rounded:"sm"}},[t("b-table",{ref:"dataSelectionTable",attrs:{items:e.dataSelectionList,fields:e.dataSelectionTableFields,"primary-key":"id","select-mode":"single",caption:e.dataSelectionTableCaption,responsive:"",small:"",hover:"",selectable:""},on:{"row-selected":e.showDataSelectionDetailModal},scopedSlots:e._u([{key:"cell(ftp_button)",fn:function(e){return[t("b-button",{attrs:{href:e.item.ftp_download_url,target:"_blank",size:"sm",variant:"primary",title:"Download selection via ftp"}},[t("b-icon",{attrs:{icon:"folder-symlink"}})],1)]}},{key:"cell(zip_button)",fn:function(e){return[t("b-button",{attrs:{href:e.item.zip_download_url,target:"_blank",size:"sm",variant:"primary",title:"Download selection as zip file"}},[t("b-icon",{attrs:{icon:"file-earmark-zip"}})],1)]}},{key:"cell(delete_button)",fn:function(a){return[t("b-button",{attrs:{size:"sm",variant:"danger",title:"Delete data selection"},on:{click:function(t){return e.deleteDataSelection(a.item)}}},[t("b-icon",{attrs:{icon:"trash"}})],1)]}}])})],1),t("b-modal",{ref:"dataSelectionDetailModal",attrs:{size:"full",title:e.dataSelectionDetailModalTitle,"hide-footer":"",static:"",lazy:""}},[e.dataSelectionDetailModalDataSelection?t("data-selection-detail",{attrs:{"data-selection":e.dataSelectionDetailModalDataSelection}}):e._e()],1)],1)},o=[],r=function(){var e=this,t=e._self._c;return t("div",[e.dataSelection.description?t("b-card",{staticClass:"mb-2"},[t("b-card-text",{domProps:{textContent:e._s(e.dataSelection.description)}})],1):e._e(),t(e.metadataComponent,{tag:"component",staticClass:"mt-3",attrs:{dataset:e.dataset,"initial-search-filter":e.searchFilter}})],1)},s=[],c=a(5152),d={name:"DataSelectionDetail",props:{dataSelection:{type:Object,required:!0}},data(){return{dataset:{...this.dataSelection.dataset,metadata:this.dataSelection.metadata},searchFilter:null}},computed:{metadataComponent(){const e=c["default"][this.dataset.name]||c["default"]["default"];return()=>a(3273)("./"+e)}}},u=d,v=a(1001),m=(0,v.Z)(u,r,s,!1,null,null,null),f=m.exports,S={name:"DataSelectionList",components:{DataSelectionDetail:f},data(){return{dataSelectionList:[],dataSelectionDetailModalDataSelection:null,dataSelectionDetailModalTitle:"",showOverlay:!0}},computed:{dataSelectionTableFields(){return[{key:"ftp_button",label:"FTP"},{key:"zip_button",label:"ZIP"},{key:"dataset",label:"Dataset",formatter:e=>e.name},{key:"description",label:"Description",tdClass:"preformatted"},{key:"metadata",label:"Count",formatter:e=>e.count},{key:"creation_time",label:"Date of creation",formatter:this.$utils.formatDate},{key:"delete_button",label:"Delete"}]},dataSelectionTableCaption(){return this.dataSelectionList.length>0?"Click on any row to see data selection details":"You have not saved any data selection yet"}},activated(){this.updateDataSelectionList()},methods:{async updateDataSelectionList(){this.showOverlay=!0;try{this.dataSelectionList=await this.$SVO.data_selection.getAll()}catch(e){this.$displayErrorMessage(this.$SVO.parseError(e))}this.showOverlay=!1},showDataSelectionDetailModal(e){e.length>0&&(this.dataSelectionDetailModalDataSelection=e[0],this.dataSelectionDetailModalTitle=this.dataSelectionDetailModalDataSelection.dataset.name,this.$refs.dataSelectionTable.clearSelected(),this.$nextTick((function(){this.$refs.dataSelectionDetailModal.show()})))},deleteDataSelection(e){try{this.$SVO.data_selection.delete(e.resource_uri),this.dataSelectionList=this.dataSelectionList.filter((t=>t.resource_uri!=e.resource_uri))}catch(t){this.$displayErrorMessage(this.$SVO.parseError(t))}}}},h=S,p=(0,v.Z)(h,n,o,!1,null,null,null),D=p.exports,b={name:"DataSelection",components:{DataSelectionList:D}},y=b,L=(0,v.Z)(y,l,i,!1,null,null,null),_=L.exports},5152:function(e,t,a){"use strict";a.r(t),t["default"]={default:"Default","AIA level 1":"AiaLevel1",CRISP:"Crisp",CHROMIS:"Chromis","EIT level 0":"EitLevel0","EIT synoptic":"EitSynoptic","EUI level 1":"EuiLevel2","EUI level 2":"EuiLevel2","EUVI level 0":"EuviLevel0","GAIA DEM":"GaiaDem","HMI magnetogram":"HmiMagnetogram","SWAP level 1":"SwapLevel1","LYRA level 2":"LyraLevel2","LYRA level 3":"LyraLevel2","XRT level 1":"XrtLevel1"}},3273:function(e,t,a){var l={"./":[5152],"./AiaLevel1":[5772,496,822,367],"./AiaLevel1.vue":[5772,496,822,367],"./Chromis":[7956,496,822,845],"./Chromis.vue":[7956,496,822,845],"./Crisp":[7813,496,822,468],"./Crisp.vue":[7813,496,822,468],"./Default":[2838,496,822,19],"./Default.vue":[2838,496,822,19],"./EitLevel0":[9186,496,822,550],"./EitLevel0.vue":[9186,496,822,550],"./EitSynoptic":[8444,496,822,233],"./EitSynoptic.vue":[8444,496,822,233],"./EuiLevel2":[7614,496,822,781],"./EuiLevel2.vue":[7614,496,822,781],"./EuviLevel0":[3367,496,822,431],"./EuviLevel0.vue":[3367,496,822,431],"./GaiaDem":[9248,496,822,990],"./GaiaDem.vue":[9248,496,822,990],"./HmiMagnetogram":[6685,496,822,112],"./HmiMagnetogram.vue":[6685,496,822,112],"./KeywordFilter":[5305,355],"./KeywordFilter.vue":[5305,355],"./LyraLevel2":[6953,496,822,329],"./LyraLevel2.vue":[6953,496,822,329],"./Metadata":[9041,496,822,404],"./Metadata.vue":[9041,496,822,404],"./MetadataDetail":[6422,219],"./MetadataDetail.vue":[6422,219],"./MetadataList":[8513,496,822,269],"./MetadataList.vue":[8513,496,822,269],"./MetadataMixin":[3210,496,822,993],"./MetadataMixin.js":[3210,496,822,993],"./SwapLevel1":[6147,496,822,494],"./SwapLevel1.vue":[6147,496,822,494],"./TagFilter":[2723,63],"./TagFilter.vue":[2723,63],"./XrtLevel1":[495,496,822,212],"./XrtLevel1.vue":[495,496,822,212],"./index":[5152],"./index.js":[5152]};function i(e){if(!a.o(l,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=l[e],i=t[0];return Promise.all(t.slice(1).map(a.e)).then((function(){return a(i)}))}i.keys=function(){return Object.keys(l)},i.id=3273,e.exports=i}}]);
//# sourceMappingURL=DataSelection.7222a2f3.js.map