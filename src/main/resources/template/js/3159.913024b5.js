"use strict";(self["webpackChunkta404_ui_cli"]=self["webpackChunkta404_ui_cli"]||[]).push([[3159],{80715:function(e,t,a){a.d(t,{Z:function(){return b}});var r,o,i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ta-select",{attrs:{mode:"multiple",placeholder:e.placeholder,options:e.CollectionData(e.collection),disabled:e.disabled,"allow-clear":e.allowClear},on:{change:e.handleChange},model:{value:e.selectValue,callback:function(t){e.selectValue=t},expression:"selectValue"}})},n=[],s=a(98754),l=a(41538),d={name:"SelectMultiple",props:["collection","value","disabled","placeholder","allowClear"],data:function(){return{selectValue:[]}},watch:{value:{immediate:!0,handler:function(e,t){(0,s.Z)(e)&&""!==e.trim()?this.selectValue=e.split(","):this.selectValue=[]}}},methods:{handleChange:function(e){(0,l.Z)(e)||(e=[]),this.$emit("input",e.join(",")),this.$emit("change",e.join(","))}}},c=d,u=a(1001),m=(0,u.Z)(c,i,n,!1,null,"5c5ae317",null),f=m.exports,g=a(91482),p=(a(26227),a(8145)),h={ADD:"ADD",EDIT:"EDIT",SHOW:"SHOW"},_={components:{selectMultiple:f,taSensitiveInput:g.Z},props:{renderType:{type:String,default:h.ADD},renderProp:{type:Object,default:function(){return{}}},showValues:{type:Object,default:function(){return{}}},simpleShowSlot:{type:Array,default:function(){return[]}},formSetting:{required:!0,type:Object,default:function(){return{}}},isShowParentItem:{type:Boolean,default:!0}},data:function(){return{}},methods:{buildItemShowContext:function(e){var t=this,a=this.$slots.default,r=this.formSetting.formItem,o=this.formSetting.formId||"",i=this.showValues[o];switch(e){case"slot":return-1===this.simpleShowSlot.indexOf(o)?a:i;case"select":case"radio":case"radioButton":return this.CollectionLabel(r.collection,i);case"select-multiple":return(0,s.Z)(i)?i.split(",").map((function(e){return t.CollectionLabel(r.collection,e)})).join(","):i;case"sensitive-input":var n=(0,s.Z)(i)?JSON.parse(i):i;return(0,p.Z)(n)?n.sensitiveField:i;default:return i}},buildItemContext:function(e){var t,a=this.$createElement,r=this.$slots.default,o=this.formSetting.disabled,i=this.formSetting.formItem,n=this.formSetting.formId,s=this.formSetting.label,l=this.formSetting.placeholder,d=this.renderType,c=this.renderProp;switch(e){case"slot":return r;case"select":return a("ta-select",{attrs:{placeholder:l,disabled:o,allowClear:!0,"collection-type":i.collection}});case"select-multiple":return a("select-multiple",{attrs:{placeholder:l,collection:i.collection,disabled:o,allowClear:!0}});case"radio":return a("ta-radio-group",{attrs:{disabled:o,"collection-type":i.collection}});case"radioButton":return a("ta-radio-group",{class:"lalal",attrs:{buttonStyle:"solid",disabled:o}},[null===(t=this.CollectionData(i.collection))||void 0===t?void 0:t.map((function(e){var t=e.label,r=e.value;return a("ta-radio-button",{key:r,attrs:{value:r}},[t])}))]);case"sensitive-input":return a("ta-sensitive-input",{attrs:{inputKey:n,placeholder:l,description:s,"auth-user":d===h.EDIT,authRequest:c.authRequest}});default:return a("ta-input",{attrs:{placeholder:l,disabled:o}})}}},render:function(){var e=arguments[0],t=this.renderType,a=this.formSetting.class||"",r=this.formSetting.formId||"",o=this.formSetting.label,i=this.formSetting.decoratorOptions;if(i&&i.rules){var n=i.rules;n.map((function(e){"number"===e.type&&(e.transform=function(e){return Number(e)},e.message="请输入数字")}))}var s=this.formSetting.formItemLayout,l=this.formSetting.formItem,d=!1!==this.formSetting.display;return d||(a+=" displayNone"),"pResourceName"!==this.formSetting.formId||this.isShowParentItem||(a+=" displayNone"),t===h.SHOW?e("ta-form-item",{attrs:{label:o,className:a,labelCol:s.labelCol,wrapperCol:s.wrapperCol}},[this.buildItemShowContext(l.type)]):e("ta-form-item",{attrs:{label:o,labelCol:s.labelCol,wrapperCol:s.wrapperCol,fieldDecoratorId:r,fieldDecoratorOptions:i},class:a},[this.buildItemContext(l.type)])}},y=_,I=(0,u.Z)(y,r,o,!1,null,"7322d522",null),b=I.exports},93159:function(e,t,a){a.r(t),a.d(t,{default:function(){return j}});var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"fit",attrs:{id:"orgManagement"}},[a("ta-border-layout",{attrs:{layout:{header:"70px"},"center-cfg":{showBar:!0,toolBarStyle:{height:"50px",lineHeight:"48px"}}}},[a("div",{staticClass:"center-box",attrs:{slot:"header"},slot:"header"},[a("div",{staticClass:"center-item"},[a("ta-input-search",{staticClass:"search-box",attrs:{placeholder:"根据名称、自定义编码、拼音简写查询","enter-button":"搜索"},on:{search:e.searchQuery},model:{value:e.param,callback:function(t){e.param=t},expression:"param"}})],1),a("div",{staticClass:"center-item"},[a("search-info",{on:{search:e.fnQuery}})],1)]),a("div",{attrs:{slot:"centerExtraContent"},slot:"centerExtraContent"},[a("ta-tag-select",{staticClass:"step1",attrs:{title:"组织类型",data:e.CollectionData("ORGTYPE"),"is-multi":!0},on:{change:e.searchQuery},model:{value:e.orgTypeParam,callback:function(t){e.orgTypeParam=t},expression:"orgTypeParam"}}),a("div",{staticStyle:{float:"right"}},[a("ta-dropdown",[a("ta-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("ta-menu-item",{attrs:{disabled:!e.selectedRowKeys.length}},[a("ta-popconfirm",{attrs:{title:"确认启用所选组织?","cancel-text":"取消","ok-text":"确认"},on:{confirm:function(t){return e.disableOrEnable("1")}}},[a("ta-icon",{attrs:{type:"check-circle"}}),a("span",{staticClass:"mg-l12"},[e._v("启用")])],1)],1),a("ta-menu-divider"),a("ta-menu-item",{attrs:{disabled:!e.selectedRowKeys.length}},[a("ta-popconfirm",{attrs:{title:"确认禁用所选组织?","cancel-text":"取消","ok-text":"确认"},on:{confirm:function(t){return e.disableOrEnable("0")}}},[a("ta-icon",{attrs:{type:"stop"}}),a("span",{staticClass:"mg-l12"},[e._v("禁用")])],1)],1),a("ta-menu-divider"),a("ta-menu-item",{attrs:{disabled:!e.selectedRowKeys.length},on:{click:e.confirmDeleteResource}},[a("ta-icon",{attrs:{type:"close-circle"}}),e._v(" 删除 ")],1)],1),a("ta-button",[e._v(" 批量操作 "),a("ta-icon",{attrs:{type:"down"}})],1)],1)],1)],1),a("ta-table",{staticStyle:{width:"100%"},attrs:{columns:e.columns,pagination:!1,"row-key":"orgId",scroll:{y:"100%"},"default-expanded-row-keys":e.defaultExpandedRowKeys,"expanded-row-keys":e.defaultExpandedRowKeys,"data-source":e.gridData,"row-selection":{selectedRowKeys:e.selectedRowKeys,onChange:e.handleSelectChange,getCheckboxProps:function(e){return{props:{disabled:"0"==e.isAuthority}}}}},on:{expand:e.loadChild},scopedSlots:e._u([{key:"orgName",fn:function(t,r){return a("a",{staticClass:"operate",class:{"disable-color":"0"==r.effective},on:{click:function(t){return e.operateClick(r,"3")}}},[e._v(e._s(t))])}},{key:"orgType",fn:function(t){return a("span",{},[e._v(e._s(e.CollectionLabel("orgType",t)))])}},{key:"area",fn:function(t){return a("span",{},[e._v(e._s(e.getLastName(t)))])}},{key:"action",fn:function(t,r){return a("span",{},[a("ta-table-operate",{attrs:{"operate-menu":e.operateMenu}})],1)}}])})],1),e.editVisible?a("edit-org",{attrs:{visible:e.editVisible,"edit-type":e.editType,"row-data":e.rowData,tags:e.tags},on:{close:function(t){e.editVisible=!1},search:e.fnQuery,addSuccess:e.addSuccess}}):e._e(),e.showVisible?a("show-org",{attrs:{visible:e.showVisible,"row-data":e.rowData,tags:e.tags},on:{close:function(t){e.showVisible=!1}}}):e._e(),a("ta-careful-delete",{attrs:{visible:e.deleteVisible,title:"组织机构删除",description:"该组织机构及其所有下级组织"},on:{close:function(t){e.deleteVisible=!1},delete:e.deleteBatch}})],1)},o=[],i=a(27416),n=function(){var e=this,t=this,a=t.$createElement,r=t._self._c||a;return r("ta-search-panel",{attrs:{id:"form1",form:t.form1,width:800},on:{search:t.advancedQuery}},[r("ta-button",{attrs:{slot:"target"},slot:"target"},[t._v(" 高级搜索 ")]),r("div",{attrs:{slot:"formPanel"},slot:"formPanel"},[r("ta-form",{attrs:{"auto-form-create":function(t){e.form1=t},"form-layout":!0,col:2}},[t.form1?[r("ta-row",[r("ta-form-item",{attrs:{label:"所属行政区","label-col":t.formItemLayout.labelCol,"wrapper-col":t.formItemLayout.wrapperCol,"field-decorator-id":"areaParam"}},[r("ta-cascader",{staticStyle:{width:"100%"},attrs:{url:"org/orguser/areaManagementRestService/queryAreaByAsync","tree-id":"areaList",options:t.areaOptions,"expand-trigger":"hover","change-on-select":"","field-names":{label:"areaName",value:"areaId",children:"children"},placeholder:"请选择行政区域"},on:{"update:options":function(e){t.areaOptions=e}}})],1),r("ta-form-item",{attrs:{label:"有效标识","label-col":t.formItemLayout.labelCol,"wrapper-col":t.formItemLayout.wrapperCol,"field-decorator-id":"effectiveParam"}},[r("ta-select",{staticStyle:{width:"100%"},attrs:{mode:"multiple",placeholder:"请选择有效标识"}},t._l(t.CollectionData("EFFECTIVE"),(function(e){return r("ta-select-option",{key:e.value,attrs:{value:e.value}},[t._v(" "+t._s(e.label)+" ")])})),1)],1),r("ta-form-item",{attrs:{label:"组织类型","label-col":t.formItemLayout.labelCol,"wrapper-col":t.formItemLayout.wrapperCol,"field-decorator-id":"orgTypeParam"}},[r("ta-select",{staticStyle:{width:"100%"},attrs:{mode:"multiple",placeholder:"请选择组织类型"}},t._l(t.CollectionData("ORGTYPE"),(function(e){return r("ta-select-option",{key:e.value,attrs:{value:e.value}},[t._v(" "+t._s(e.label)+" ")])})),1)],1),r("ta-form-item",{attrs:{label:"组织代码","label-col":t.formItemLayout.labelCol,"wrapper-col":t.formItemLayout.wrapperCol,"field-decorator-id":"orgCode"}},[r("ta-input")],1),r("ta-form-item",{attrs:{label:"负责人","label-col":t.formItemLayout.labelCol,"wrapper-col":t.formItemLayout.wrapperCol,"field-decorator-id":"orgManager"}},[r("ta-user-input",{attrs:{"select-title":"选择负责人","org-load-fn":t.handleLoadOrgNode,"user-load-fn":t.handleQueryUserList,"user-select-call":function(){}}})],1),r("ta-form-item",{attrs:{label:"联系人","label-col":t.formItemLayout.labelCol,"wrapper-col":t.formItemLayout.wrapperCol,"field-decorator-id":"contacts"}},[r("ta-user-input",{attrs:{"select-title":"选择联系人","org-load-fn":t.handleLoadOrgNode,"user-load-fn":t.handleQueryUserList,"user-select-call":function(){}}})],1),r("ta-form-item",{attrs:{label:"联系电话","label-col":t.formItemLayout.labelCol,"wrapper-col":t.formItemLayout.wrapperCol,"field-decorator-id":"tel"}},[r("ta-input")],1),r("ta-form-item",{attrs:{label:"联系地址","label-col":t.formItemLayout.labelCol,"wrapper-col":t.formItemLayout.wrapperCol,"field-decorator-id":"address"}},[r("ta-input")],1),r("ta-form-item",{attrs:{label:"创建时间","label-col":t.formItemLayout.labelCol,"wrapper-col":t.formItemLayout.wrapperCol,"field-decorator-id":"createTime"}},[r("ta-range-picker")],1)],1)]:t._e()],2)],1)],1)},s=[],l=a(36797),d=a.n(l),c=a(79754),u={name:"searchInfo",data:function(){return{form1:null,formItemLayout:{labelCol:{span:6},wrapperCol:{span:18}},areaOptions:[]}},methods:{moment:d(),advancedQuery:function(e){e.areaParam&&(e.areaParam=e.areaParam[e.areaParam.length-1]),e.orgTypeParam&&(e.orgTypeParam=e.orgTypeParam.toString()),e.effectiveParam&&(e.effectiveParam=e.effectiveParam.toString()),e.createTime&&e.createTime.length&&(e.createTimeMin=(0,c.Z)(e.createTime[0],"YYYY-MM-DD")+" 00:00:00",e.createTimeMax=(0,c.Z)(e.createTime[1],"YYYY-MM-DD")+" 23:59:59",delete e.createTime);var t=Object.keys(e).some((function(t){return e[t]}));e.needSearch=t?"1":"0",this.$emit("search",e)},handleLoadOrgNode:function(e,t){var a=e.data&&e.data.orgId||"";i.Z.loadOrgTree(a,(function(e){t(e.orgTreeData)}))},handleQueryUserList:function(e,t){var a=e.orgId,r=e.userId,o=e.includeChild,n=e.pageSize,s=e.pageNum,l=e.searchVal,d=e.searchType,c=e.searchParam;i.Z.queryUserList({orgId:a,userId:r,includeChild:o,pageSize:n,pageNum:s,searchVal:l,searchType:d,searchParam:c},(function(e){t(e.userList.list)}))}}},m=u,f=a(1001),g=(0,f.Z)(m,n,s,!1,null,null,null),p=g.exports,h=function(){var e=this,t=this,a=t.$createElement,r=t._self._c||a;return r("ta-drawer",{attrs:{getContainer:t.setContainer,title:"1"===t.editType?"添加组织机构":"编辑组织机构",width:"550",placement:"right",closable:!0,visible:t.visible,"destroy-on-close":""},on:{close:t.closeEdit}},[r("ta-form",{attrs:{"auto-form-create":function(t){e.form=t}}},[t.form?[r("taContainerMask",{attrs:{show:t.editLoading}}),t._l(t.formNormalSettings,(function(e){return[r("renderFormItem",{key:e.id,attrs:{"form-setting":e,"render-type":t.renderType,"render-prop":t.renderProp}},["areaValue"===e.id?r("ta-cascader",{staticStyle:{width:"100%"},attrs:{url:"org/orguser/areaManagementRestService/queryAreaByAsync","tree-id":"areaList",options:t.areaOptions,"expand-trigger":"hover","change-on-select":"","field-names":{label:"areaName",value:"areaId",children:"children"},placeholder:"请选择行政区域"},on:{"update:options":function(e){t.areaOptions=e}}}):"effective"===e.id?r("ta-switch",{attrs:{"checked-children":"有效","un-checked-children":"无效"}}):"orgManager"===e.id?r("ta-user-input",{attrs:{"select-title":"选择负责人","org-load-fn":t.handleLoadOrgNode,"user-load-fn":t.handleQueryUserList,"user-select-call":t.getOrgManagerName}}):"contacts"===e.id?r("ta-user-input",{attrs:{"select-title":"选择联系人","org-load-fn":t.handleLoadOrgNode,"user-load-fn":t.handleQueryUserList,"user-select-call":t.getContactsName}}):"tags"===e.id?t._l(t.clonTags,(function(e){return[r("ta-tag",{key:e.tagId,staticClass:"tag-select",class:{"tag-active":t.selectedTags.indexOf(e.tagId)>-1},on:{click:function(a){return t.tagClick(e.tagId)}}},[t._v(" "+t._s(e.tagName)),t.selectedTags.indexOf(e.tagId)>-1?r("ta-icon",{staticStyle:{"margin-left":"5px"},attrs:{type:"check"}}):t._e()],1)]})):t._e()],2)]})),t.formMoreSettings.length>0?r("ta-collapse",{attrs:{bordered:!1}},[r("ta-collapse-panel",{key:"1",staticStyle:{border:"none"},attrs:{header:"更多组织信息",forceRender:!0}},[t._l(t.formMoreSettings,(function(e){return[r("renderFormItem",{key:e.id,attrs:{"form-setting":e,"render-type":t.renderType,"render-prop":t.renderProp}},["areaValue"===e.id?r("ta-cascader",{staticStyle:{width:"100%"},attrs:{url:"org/orguser/areaManagementRestService/queryAreaByAsync","tree-id":"areaList",options:t.areaOptions,"expand-trigger":"hover","change-on-select":"","field-names":{label:"areaName",value:"areaId",children:"children"},placeholder:"请选择行政区域"},on:{"update:options":function(e){t.areaOptions=e}}}):"effective"===e.id?r("ta-switch",{attrs:{"checked-children":"有效","un-checked-children":"无效"}}):"orgManager"===e.id?r("ta-user-input",{attrs:{"select-title":"选择负责人","org-load-fn":t.handleLoadOrgNode,"user-load-fn":t.handleQueryUserList,"user-select-call":t.getOrgManagerName}}):"contacts"===e.id?r("ta-user-input",{attrs:{"select-title":"选择联系人","org-load-fn":t.handleLoadOrgNode,"user-load-fn":t.handleQueryUserList,"user-select-call":t.getContactsName}}):"tags"===e.id?t._l(t.clonTags,(function(e){return[r("ta-tag",{key:e.tagId,staticClass:"tag-select",class:{"tag-active":t.selectedTags.indexOf(e.tagId)>-1},on:{click:function(a){return t.tagClick(e.tagId)}}},[t._v(" "+t._s(e.tagName)),t.selectedTags.indexOf(e.tagId)>-1?r("ta-icon",{staticStyle:{"margin-left":"5px"},attrs:{type:"check"}}):t._e()],1)]})):t._e()],2)]}))],2)],1):t._e()]:t._e()],2),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("ta-button-group",[r("ta-button",{on:{click:function(e){return t.reset()}}},[t._v(" 重置 ")]),r("ta-button",{attrs:{type:"primary",loading:t.loading},on:{click:function(e){return t.saveOrg()}}},[t._v(" 保存 ")])],1)],1)],1)},_=[],y=a(89584),I=a(95082),b=(a(32564),a(80715)),v=a(39894),O=a(71307),w=(0,I.Z)({},O),C={name:"EditOrg",props:["visible","editType","rowData","tags"],components:{renderFormItem:b.Z},mixins:[v.Z],data:function(){return{form:null,formData:{},initTags:[],selectedTags:[],editLoading:!1,loading:!1,defaultProps:{listKey:"userId",listTitle:"name",listSubTitle:"mobile",listDescription:"namePath"},isShow:!1,userListData:[],areaOptions:[],defaultList:[],initForm:{},clonTags:null}},mounted:function(){this.setValue(),this.clonTags=w.clone(this.tags)},computed:{renderType:function(){return"2"===this.editType?"EDIT":"ADD"},renderProp:function(){var e=this;return{authRequest:function(t,a){var r=e.rowData.orgId;i.Z.authRequestForOrgInfo((0,I.Z)((0,I.Z)({},t),{},{orgId:r}),(function(e){a(e.orgInfo[t.inputKey])}))}}}},methods:{setValue:function(){var e=this;this.editLoading=!0,this.clearForm(),setTimeout((function(){e.queryOrg({orgId:e.rowData.orgId,type:"2"})}),300)},queryOrg:function(e){var t=this;i.Z.queryTaOrgByOrgId(e,(function(e){var a=e.data.taOrgInfoVo,r=a.orgTags,o=a.pOrgName,i=a.areaValue;t.formData={},t.clonTags=e.data.tags;var n=e.data.taOrgInfoVo.org,s=n.parentId,l=n.orgManager,d=n.effective,c=n.contacts,u=n.orgName,m=n.orgId,f=(n.orgType,n.customNo),g=n.orgCode,p=n.tel,h=n.address,_=n.orderNo,y=n.tagIds;if("1"===t.editType)t.formData={porgId:m,pOrgName:u,orgType:"02",effective:!0,orderNo:"0",areaValue:i};else if("2"===t.editType){t.initTags=r,t.selectedTags=r;var b=e.data.taOrgInfoVo.org;Object.keys(b).forEach((function(e){t.formData[e]=b[e]||""})),Object.assign(t.formData,{porgId:s,pOrgName:o,effective:"1"===d,areaValue:i,orderNo:_.toString(),tagIds:y||"",customNo:f||"",orgCode:g||"",orgManager:l||"",contacts:c||"",tel:p||"",address:h||""}),t.initForm=(0,I.Z)({},t.formData)}t.buildForm(t.formData),t.editLoading=!1}))},tagClick:function(e){var t=this.selectedTags,a=t.some((function(t){return t===e}));this.selectedTags=a?t.filter((function(t){return t!==e})):[].concat((0,y.Z)(t),[e])},reset:function(){this.form.resetFields(),this.selectedTags=this.initTags},saveOrg:function(){var e=this,t=this.form.getFieldsValue();t.tagIds=this.selectedTags.toString(),t.area=t.areaValue&&t.areaValue[t.areaValue.length-1]||"",t.spell=w.pinyin.getCamelChars(t.orgName||"").toUpperCase(),t.selectedTags=t.selectedTags||[];for(var a=(0,I.Z)({},t),r=Object.keys(a),o=this.initForm,n=!1,s=0;s<r.length;s++){if("areaValue"===r[s]&&a[r[s]].toString()!==o[r[s]].toString()){n=!0;break}if("area"!==r[s]&&"areaValue"!==r[s]&&a[r[s]]!==o[r[s]]){n=!0;break}}n?(t.editType=this.editType,t.parentId=t.porgId,t.effective=t.effective?"1":"0",i.Z.addOrUpdateTaOrg(this.form,t,(function(a){if(e.loading=!1,a.serviceSuccess)if("1"===e.editType){var r=a.data.addedOrg;r=Object.assign({},t,r),e.showConfirm(e.rowData,r)}else e.$message.success("修改成功"),e.$emit("addSuccess",e.rowData,t),e.closeEdit()}))):this.$message.warning("没有需要保存的修改")},showConfirm:function(e,t){var a=this;this.$confirm({title:"添加组织机构成功",content:"保存成功。是否继续新增组织?",onOk:function(){a.form.resetFields(),a.selectedTags=[],a.$emit("addSuccess",e,t),a.queryOrg({orgId:e.orgId,type:"2"})},onCancel:function(){a.closeEdit(),a.$emit("addSuccess",e,t)}})},closeEdit:function(){this.$emit("close"),this.editLoading=!1,this.loading=!1,this.form.resetFields(),this.formData={},this.selectedTags=[],this.initTags=[],this.contacts="",this.orgManager=""},handleLoadOrgNode:function(e,t){var a=e.data&&e.data.orgId||"";i.Z.loadOrgTree(a,(function(e){t(e.orgTreeData)}))},handleQueryUserList:function(e,t){var a=e.orgId,r=e.userId,o=e.includeChild,n=e.pageSize,s=e.pageNum,l=e.searchVal,d=e.searchType,c=e.searchParam;i.Z.queryUserList({orgId:a,userId:r,includeChild:o,pageSize:n,pageNum:s,searchVal:l,searchType:d,searchParam:c},(function(e){t(e.userList.list)}))},getOrgManagerName:function(e){var t=e.userId;e.name,e.address,e.mobile;this.form.setFieldsValue({orgManager:t})},getContactsName:function(e){var t=e.userId;e.name,e.address,e.mobile;this.form.setFieldsValue({contacts:t})}}},T=C,S=(0,f.Z)(T,h,_,!1,null,"2d8f71bf",null),x=S.exports,D=function(){var e=this,t=this,a=t.$createElement,r=t._self._c||a;return r("ta-drawer",{attrs:{getContainer:t.setContainer,title:"组织机构信息",width:"500",placement:"right",closable:!0,visible:t.visible,destroyOnClose:""},on:{close:t.closeEdit}},[r("ta-form",{attrs:{autoFormCreate:function(t){e.form=t}}},[r("taContainerMask",{attrs:{show:t.editLoading}}),t._l(t.formNormalShowSettings,(function(e){return[r("renderFormItem",{key:e.id,attrs:{formSetting:e,isShow:!0,showValues:t.formData,simpleShowSlot:t.simpleShowSlot,renderType:"SHOW"}},["effective"==e.id?[t._v(t._s(t.formData.effective?"有效":"无效"))]:"orgManager"==e.id?[t._v(t._s(t.formData.orgManagerName))]:"contacts"==e.id?[t._v(t._s(t.formData.contactsName))]:"tags"==e.id?t._l(t.tags,(function(e){return[t.selectedTags.indexOf(e.tagId)>-1?r("ta-tag",{key:e.tagId,staticClass:"tag-select"},[t._v(t._s(e.tagName))]):t._e()]})):t._e()],2)]})),t.formMoreShowSettings.length>0?r("ta-collapse",{attrs:{bordered:!1}},[r("ta-collapse-panel",{key:"1",staticStyle:{border:"none"},attrs:{header:"更多组织信息"}},[t._l(t.formMoreShowSettings,(function(e){return[r("renderFormItem",{key:e.id,attrs:{formSetting:e,isShow:!0,showValues:t.formData,simpleShowSlot:t.simpleShowSlot,renderType:"SHOW"}},["effective"==e.id?[t._v(t._s(t.formData.effective?"有效":"无效"))]:"orgManager"==e.id?[t._v(t._s(t.formData.orgManagerName))]:"contacts"==e.id?[t._v(t._s(t.formData.contactsName))]:"tags"==e.id?t._l(t.tags,(function(e){return[t.selectedTags.indexOf(e.tagId)>-1?r("ta-tag",{key:e.tagId,staticClass:"tag-select"},[t._v(t._s(e.tagName))]):t._e()]})):t._e()],2)]}))],2)],1):t._e()],2)],1)},E=[],L=["porgId","orgId"],M=["areaValue"],N={name:"showOrg",props:["visible","rowData","tags"],components:{renderFormItem:b.Z},mixins:[v.Z],data:function(){return{form:null,formData:{},simpleShowSlot:M,selectedTags:[],editLoading:!1}},computed:{formNormalShowSettings:function(){return this.formNormalSettings.filter((function(e){return-1==L.indexOf(e.id)}))||[]},formMoreShowSettings:function(){return this.formMoreSettings.filter((function(e){return-1==L.indexOf(e.id)}))||[]}},mounted:function(){this.editLoading=!0,this.queryForm()},methods:{queryForm:function(){var e=this;i.Z.queryTaOrgByOrgId({orgId:this.rowData.orgId,type:"2"},(function(t){var a=t.data.taOrgInfoVo,r=a.orgTags,o=a.pOrgName,i=a.orgManagerName,n=a.contactsName,s=t.data.taOrgInfoVo.org,l=s.parentId,d=s.effective,c=(s.orgName,s.orgId,s.orgType,s.customNo,s.orgCode,s.tel,s.address,s.orderNo);e.selectedTags=r;var u=t.data.taOrgInfoVo.org;Object.keys(u).forEach((function(t){e.formData[t]=u[t]})),Object.assign(e.formData,{orgManagerName:i,contactsName:n,porgId:l,pOrgName:o,areaValue:e.rowData.area,effective:"1"==d,orderNo:c.toString()}),e.buildForm(e.formData),e.editLoading=!1}))},closeEdit:function(){this.$emit("close"),this.editLoading=!1,this.formData={}}}},P=N,k=(0,f.Z)(P,D,E,!1,null,"3b537ed0",null),R=k.exports,A=[{title:"组织名称",dataIndex:"orgName",width:"40%",overflowTooltip:!0,scopedSlots:{customRender:"orgName"}},{title:"组织类型",dataIndex:"orgType",width:"15%",scopedSlots:{customRender:"orgType"}},{title:"所属行政区",dataIndex:"area",width:"15%",overflowTooltip:"area",scopedSlots:{customRender:"area"}},{title:"自定义编码",dataIndex:"customNo",width:"15%"},{title:"操作",align:"center",width:240,scopedSlots:{customRender:"action"}}],B=[{element:".step1",popover:{title:"组织类型",description:"组织类型预设三种类型, 支持扩展，可通过点击类型标签实现过滤",position:"bottom"}},{element:".ant-table-header",popover:{title:"组织信息",description:"组织信息按树形结构管理, 在组织基础信息之外，框架已经设置了业务场景常用的字段， 如行政区划、自定义编码、组织代码、组织标签等,  业务项目可自行评估信息字段的使用，部分字段也配备了独立的管理功能，比如【行政区划管理】、【标签管理】， 另框架还预留10个通用字符字段, 项目上可通过【用户可管理字段配置】进一步扩展使用，活用上述字段可将业务信息与框架功能灵活的关联起来",position:"bottom"}}],V={name:"orgManagement",components:{searchInfo:p,editOrg:x,showOrg:R},mixins:[v.Z],data:function(){var e=this;return{defaultExpandedRowKeys:[],columns:A,operateMenu:[{name:"添加下级",disabled:function(e){return"0"==e.effective||"0"==e.isAuthority},title:function(e){return"0"==e.effective||"0"==e.isAuthority?"禁用的组织不允许添加下级":""},onClick:function(t){e.operateClick(t,"1")}},{name:"编辑",disabled:function(e){return"0"==e.effective||"0"==e.isAuthority},title:function(e){return"0"==e.effective||"0"==e.isAuthority?"禁用的组织不允许编辑":""},onClick:function(t){e.operateClick(t,"2")}},{name:"更多",type:"more",moreMenuList:[{name:"启用",type:"confirm",confirmTitle:"确认启用该组织?",onOk:function(t){e.disableOrEnable("1",t)}},{name:"禁用",type:"confirm",confirmTitle:"确认禁用该组织?",onOk:function(t){e.disableOrEnable("0",t)}},{name:"删除",type:"confirm",confirmTitle:"确认删除该组织?",onOk:function(t){e.deleteConfirm(t)}}]}],gridData:[],tags:[],editVisible:!1,showVisible:!1,deleteVisible:!1,editType:"",rowData:{},dataList:[],selectedRowKeys:[],deleteOrgIds:"",param:"",orgTypeParam:[],steps:B}},mounted:function(){this.fnQuery(),this.fnCommonGuide(this.steps)},methods:{fnQuery:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.needSearch="1"==t.needSearch?"1":"0",i.Z.queryAllOrgByOrgId(t,(function(t){e.gridData=t.data.orgData;var a=e.gridData[0]&&e.gridData[0].orgId?e.gridData[0].orgId:"";e.defaultExpandedRowKeys=[a],e.tags=t.data.tags}))},searchQuery:function(){var e={};e.needSearch=this.param.length||this.orgTypeParam.length?"1":"0",this.orgTypeParam.length&&(e.orgTypeParam=this.orgTypeParam.join(",")),this.param.length&&(e.param=this.param),this.fnQuery(e)},operateClick:function(e,t){return"3"==t?(this.rowData=e,void(this.showVisible=!0)):"0"==e.isAuthority?(this.$message.destroy(),void this.$message.warning("你没有当前组织的管理权限")):void("1"!=t||"0"!=e.effective?"2"!=t||"0"!=e.effective?(this.editVisible=!0,this.editType=t,this.rowData=e):this.$message.warning("禁用的组织不允许编辑"):this.$message.warning("禁用的组织不允许添加下级"))},handleSelectChange:function(e,t){this.selectedRowKeys=e,this.dataList=t},confirmDeleteResource:function(){if(0==this.dataList.length)this.$message.warning("请选择需要删除的组织机构");else{for(var e=[],t=0;t<this.dataList.length;t++){if("0"==this.dataList[t].porgId)return void this.$message.warning("选中的组织包含顶级组织,请重新选择");e.push(this.dataList[t].orgId)}e.length&&(this.deleteOrgIds=e.join(","),this.deleteVisible=!0)}},deleteBatch:function(){var e=this;i.Z.deleteBatchOrgs({orgIds:this.deleteOrgIds},(function(t){e.$message.success("删除成功"),e.deleteVisible=!1,e.fnQuery(),e.selectedRowKeys=[],e.dataList=[]}))},disableOrEnable:function(e,t){var a=this,r="";if(t){if("1"==e&&"1"==t.effective&&0==t.childNum)return void this.$message.warning("该记录已经启用，请勿重复操作！");if("0"==e&&"0"==t.effective)return void this.$message.warning("该记录已经禁用，请勿重复操作！");r=t.orgId}else r=this.selectedRowKeys.join(",");i.Z.disableOrEnableOrgs({orgIds:r,type:e},(function(t){a.$message.success(("1"==e?"启用":"禁用")+"成功"),a.fnQuery()}))},loadChild:function(e,t){var a=this,r=t.orgId;if(e)t.children&&t.children.length?this.defaultExpandedRowKeys.push(r):i.Z.queryChildOrgByOrgId({orgId:r},(function(e){t.children=e.data.childOrg,a.defaultExpandedRowKeys.push(r)}));else{var o=this.defaultExpandedRowKeys.indexOf(r);this.defaultExpandedRowKeys.splice(o,1)}},deleteConfirm:function(e){var t=this;if(this.$message.destroy(),"0"==e.porgId)return this.$message.warning("组织机构顶级节点不允许删除"),!1;if("0"==e.isAuthority)return this.$message.warning("你没有当前组织的管理权限"),!1;this.getDeleteIds(e);i.Z.deleteOrgByOrgId({orgId:e.orgId},(function(e){t.fnQuery(),t.$message.success("删除成功")}))},getDeleteIds:function(e){var t=this,a=[];return a.push(e.orgId),e.children&&e.children.length&&e.children.forEach((function(e){a=a.concat(t.getDeleteIds(e))})),a},getLastName:function(e){return e&&-1!=e.indexOf("/")?e.slice(e.lastIndexOf("/")+1):e},addSuccess:function(e,t){this.fnQuery()},changeRowData:function(e,t,a){for(var r=0;r<e.length;r++){if(e[r][t]==a[t]){e[r]=Object.assign({},e[r],a);break}e[r].children&&this.changeRowData(e[r].children,"orgId",a)}}}},Z=V,q=(0,f.Z)(Z,r,o,!1,null,"5143f022",null),j=q.exports},35478:function(e,t){t.Z={data:{formTypeSettings:{}},watch:{formSettings:function(){var e={};this.formSettings.forEach((function(t){e[t.formId]=t.formItem.type})),this.formTypeSettings=e}},methods:{formatSensitiveValue:function(e,t){return"sensitive-input"==this.formTypeSettings[e]&&t?JSON.parse(t).sensitiveField:t}}}},9080:function(e,t){var a=[{fieldId:"areaValue",formId:"areaValue",displayText:"所属行政区",hide:"0",effective:"1",required:"0",unchangeable:"0",protectPrivacy:"0",orderNo:1,contentSize:null,tiText:null,validReg:null,connectAA10:null,formType:"slot",more:"0"},{fieldId:"customNo",formId:"customNo",displayText:"自定义编码",hide:"0",effective:"1",required:"0",unchangeable:"0",protectPrivacy:"0",orderNo:2,contentSize:30,tiText:"",validReg:"",connectAA10:null,formType:"input",more:"0"},{fieldId:"orderNo",formId:"orderNo",displayText:"排序号",hide:"1",effective:"1",required:"0",unchangeable:"1",protectPrivacy:"0",orderNo:3,contentSize:null,tiText:"",validReg:"",connectAA10:null,formType:"input",more:"0"},{fieldId:"orgCode",formId:"orgCode",displayText:"组织代码",hide:"0",effective:"1",required:"0",unchangeable:"0",protectPrivacy:"0",orderNo:4,contentSize:18,tiText:"",validReg:null,connectAA10:null,formType:"input",more:"0"},{fieldId:"orgManager",formId:"orgManager",displayText:"负责人",hide:"0",effective:"1",required:"0",unchangeable:"0",protectPrivacy:"0",orderNo:5,contentSize:null,tiText:"",validReg:null,connectAA10:null,formType:"slot",more:"0"},{fieldId:"contacts",formId:"contacts",displayText:"联系人",hide:"0",effective:"1",required:"0",unchangeable:"0",protectPrivacy:"0",orderNo:6,contentSize:null,tiText:"",validReg:null,connectAA10:null,formType:"slot",more:"0"},{fieldId:"tel",formId:"tel",displayText:"联系电话",hide:"0",effective:"1",required:"0",unchangeable:"0",protectPrivacy:"0",orderNo:7,contentSize:20,tiText:"",validReg:"/^((\\d{3,4})|\\d{3,4}-)?\\d{7,8}$/",connectAA10:null,formType:"input",more:"0"},{fieldId:"address",formId:"address",displayText:"联系地址",hide:"0",effective:"1",required:"0",unchangeable:"0",protectPrivacy:"0",orderNo:8,contentSize:450,tiText:"",validReg:null,connectAA10:null,formType:"input",more:"0"},{fieldId:"tags",formId:"tags",displayText:"组织标签",hide:"0",effective:"1",required:"0",unchangeable:"0",protectPrivacy:"0",orderNo:10,contentSize:null,tiText:"",validReg:null,connectAA10:null,formType:"slot",more:"0"}],r={fieldId:"field",formId:"field",displayText:"扩展信息",effective:"0",hide:"1",required:"0",unchangeable:"0",protectPrivacy:"0",orderNo:1,contentSize:null,tiText:null,validReg:null,connectAA10:null,formType:"input",more:"1"};function o(e,t){return(Array(t).join(0)+e).slice(-t)}for(var i=10,n=1;n<=i;n++){var s=Object.assign({},r),l=o(n,2);s.fieldId=s.fieldId+l,s.formId=s.formId+l,s.displayText=s.displayText+l,s.orderNo=a.length+1,a.push(s)}t.Z=a},80790:function(e,t,a){var r=a(76698);a(34530);t.Z={activated:function(){var e=window.pageVmObj,t=e["steps_"+e._route.name];this.methods?this.methods.fnCommonGuide(t):this.fnCommonGuide(t)},deactivated:function(){this.methods?this.methods.fnCommonGuide([],!0):this.fnCommonGuide([],!0)},methods:{fnCommonGuide:function(e,t){var a=window.pageVmObj;t?(a.driver.reset(),window.fnPageGuide=null):(a["steps_"+a._route.name]=e,a.driver=new r.Z({allowClose:!1}),window.fnPageGuide=function(){a.driver.defineSteps(e),a.driver.start()})}}}},27416:function(e,t){var a="/org/orguser/orgManagementRestService/";t.Z={queryAllOrgByOrgId:function(e,t){Base.submit(null,{url:a+"queryAllOrgByOrgId",data:e},{successCallback:function(e){return t(e)}})},queryTaOrgByOrgId:function(e,t){Base.submit(null,{url:a+"queryTaOrgByOrgId",data:e,showPageLoading:!1},{successCallback:function(e){return t(e)}})},queryAllTaOrg:function(e,t){Base.submit(null,{url:a+"queryAllTaOrg",data:e},{successCallback:function(e){return t(e)}})},queryBatchUserByOrgId:function(e,t){Base.submit(null,{url:"org/orguser/userManagementRestService/queryBatchUserByOrgId",data:e},{successCallback:function(e){return t(e)}})},addOrUpdateTaOrg:function(e,t,r){var o="";o="1"==t.editType?"addTaOrg":"updateTaOrgByOrgId",Base.submit(e,{url:a+o,data:t,autoValid:!0},{successCallback:function(e){return r(e)},failCallback:function(e){return r(e)}})},deleteBatchOrgs:function(e,t){Base.submit(null,{url:a+"deleteBatchOrgs",data:e,autoValid:!0},{successCallback:function(e){return t(e)}})},disableOrEnableOrgs:function(e,t){var r="";r="1"==e.type?"enableBatchOrgs":"disableBatchOrgs",Base.submit(null,{url:a+r,data:e},{successCallback:function(e){return t(e)}})},queryChildOrgByOrgId:function(e,t){Base.submit(null,{url:a+"queryChildOrgByOrgId",data:e},{successCallback:function(e){return t(e)}})},deleteOrgByOrgId:function(e,t){Base.submit(null,{url:a+"deleteOrgByOrgId",data:e},{successCallback:function(e){return t(e)}})},loadOrgTree:function(e,t){Base.submit(null,{url:a+"getOrgByAsync",data:{orgId:e}},{successCallback:function(e){return t(e.data)}})},queryUserList:function(e,t){var a=e.orgId,r=e.userId,o=e.includeChild,i=e.pageSize,n=e.pageNum,s=e.searchVal,l=e.searchType,d=e.searchParam,c={orgId:a,userId:r,showChildUser:o?1:0,pageSize:i,pageNumber:n,name:s};l&&(c[l]=d),Base.submit(null,{url:"org/orguser/userManagementRestService/queryEffectiveUser",data:c},{successCallback:function(e){return t(e.data)}})},queryOrgSettingTable:function(e){Base.submit(null,{url:"org/sysmg/manageableFieldsRestService/queryManageableFields",data:{type:"2"}},{successCallback:function(t){return e(t.data)}})},authRequestForOrgInfo:function(e,t){Base.submit(null,{url:a+"getOrgByOrgId",data:e},{successCallback:function(e){return t(e.data)}})}}},39894:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var D_yypt_lp_yypt_lp_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(95082),_api_index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(27416),_projectCommon_js_extendConfig_extendOrgSetting__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(9080),_yh_ta_utils_isArray__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(41538),_projectCommon_js_extendConfig_commonMixins__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(35478),_projectCommon_js_extendConfig_guideMixins__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(80790),formItemLayouts={default:{labelCol:{span:6},wrapperCol:{span:18}}},mixins={data:function(){return(0,D_yypt_lp_yypt_lp_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({formItemLayouts:formItemLayouts,extendSettings:_projectCommon_js_extendConfig_extendOrgSetting__WEBPACK_IMPORTED_MODULE_1__.Z,formSettings:[]},_projectCommon_js_extendConfig_commonMixins__WEBPACK_IMPORTED_MODULE_2__.Z.data)},created:function(){var e=this;window.mixinsOrg?(this.extendSettings=(0,_yh_ta_utils_isArray__WEBPACK_IMPORTED_MODULE_5__.Z)(window.mixinsOrg)&&window.mixinsOrg.length?window.mixinsOrg:this.extendSettings,this.buildForm({})):(window.mixinsOrg=!0,_api_index__WEBPACK_IMPORTED_MODULE_0__.Z.queryOrgSettingTable((function(t){(0,_yh_ta_utils_isArray__WEBPACK_IMPORTED_MODULE_5__.Z)(t.resultData)&&t.resultData.length>0&&(e.extendSettings=t.resultData),window.mixinsOrg=t.resultData,e.buildForm({})})))},activated:function(){_projectCommon_js_extendConfig_guideMixins__WEBPACK_IMPORTED_MODULE_3__.Z.activated()},deactivated:function(){_projectCommon_js_extendConfig_guideMixins__WEBPACK_IMPORTED_MODULE_3__.Z.deactivated()},computed:{formNormalSettings:function(){return this.formSettings.filter((function(e){return!e.isMore&&e.exist}))||[]},formMoreSettings:function(){return this.formSettings.filter((function(e){return e.isMore&&e.exist}))||[]}},watch:(0,D_yypt_lp_yypt_lp_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},_projectCommon_js_extendConfig_commonMixins__WEBPACK_IMPORTED_MODULE_2__.Z.watch),methods:(0,D_yypt_lp_yypt_lp_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,D_yypt_lp_yypt_lp_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,D_yypt_lp_yypt_lp_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},_projectCommon_js_extendConfig_commonMixins__WEBPACK_IMPORTED_MODULE_2__.Z.methods),_projectCommon_js_extendConfig_guideMixins__WEBPACK_IMPORTED_MODULE_3__.Z.methods),{},{setContainer:function(){return document.getElementById("orgManagement")},buildForm:function(e){this.formSettings=this.getFormSettings(e)},clearForm:function(){this.formSettings=[]},getFormNecessarySettings:function(e){return[{id:"porgId",formId:"porgId",formItem:{type:"input",collection:null},label:"上级组织机构ID",decoratorOptions:{rules:[{required:!0}],initialValue:e.porgId},display:!1,exist:!0,formItemLayout:formItemLayouts.default},{id:"pOrgName",formId:"pOrgName",formItem:{type:"input",collection:null},label:"上级组织机构",decoratorOptions:{initialValue:e.pOrgName},display:"0"!=e.porgId,exist:!0,disabled:!0,formItemLayout:formItemLayouts.default},{id:"orgId",formId:"orgId",formItem:{type:"input",collection:null},label:"组织机构ID",decoratorOptions:{initialValue:e.orgId},display:!1,exist:!0,formItemLayout:formItemLayouts.default},{id:"orgName",formId:"orgName",formItem:{type:"input",collection:null},label:"组织机构名称",decoratorOptions:{rules:[{pattern:/^[\u4E00-\u9FA5A-Za-z0-9_/\\-]+$/,message:"只能输入中文英文数字、下划线、横杠及斜杠"},{required:!0,message:"组织机构名称不能为空!"},{max:100,message:"组织机构名称超过限制长度!"}],initialValue:e.orgName},display:!0,exist:!0,formItemLayout:formItemLayouts.default},{id:"orgType",formId:"orgType",formItem:{type:"radioButton",collection:"ORGTYPE"},label:"组织类型",decoratorOptions:{rules:[{required:!0,message:"请选择对应组织类型"}],initialValue:e.orgType},display:!0,exist:!0,formItemLayout:formItemLayouts.default},{id:"effective",formId:"effective",formItem:{type:"slot",collection:null},label:"有效标识",decoratorOptions:{valuePropName:"checked",initialValue:e.effective},display:!0,exist:!0,formItemLayout:formItemLayouts.default}]},getFormSettings:function getFormSettings(){var initData=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},propSettings=this.extendSettings.sort((function(e,t){return e.orderNo-t.orderNo})).map((function(setting){var formId=setting.formId,label=setting.displayText||"",placeholder=setting.tiText||"",propSetting={id:setting.fieldId,formId:formId,class:null,formItem:{type:setting.formType,collection:setting.connectAA10},label:label,display:"0"===setting.hide,exist:"1"===setting.effective,disabled:"1"===setting.unchangeable,formItemLayout:formItemLayouts[formId]||formItemLayouts.default,decoratorOptions:{},placeholder:placeholder,isMore:"1"===setting.more},rules=[];if("1"===setting.required&&rules.push({required:!0,message:label+"是必须的"}),isNaN(parseInt(setting.contentSize))||rules.push({max:setting.contentSize,message:label+"内容长度不能超过"+setting.contentSize}),setting.validReg){var isreg;try{isreg=eval(setting.validReg)instanceof RegExp}catch(e){isreg=!1}isreg&&rules.push({pattern:eval(setting.validReg),message:"请输入正确的"+label+"内容"})}return propSetting.decoratorOptions.rules=rules,initData.hasOwnProperty(formId)&&(propSetting.decoratorOptions.initialValue=initData[formId]),propSetting}));return this.getFormNecessarySettings(initData).concat(propSettings)}})};__webpack_exports__.Z=mixins}}]);