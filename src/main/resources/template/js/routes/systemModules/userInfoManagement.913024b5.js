"use strict";(self["webpackChunkta404_ui_cli"]=self["webpackChunkta404_ui_cli"]||[]).push([[3725],{43164:function(e,t,a){a.r(t),a.d(t,{default:function(){return L}});var r=function(){var e=this,t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"fit",attrs:{id:"userInfoManagement"}},[r("ta-border-layout",{attrs:{layout:{header:"70px",overflow:"hidden"},"header-cfg":{showBorder:!1}}},[r("ta-tabs",{staticClass:"userInfo-tab",attrs:{slot:"header"},on:{change:t.changeData},slot:"header",model:{value:t.tabsKey,callback:function(e){t.tabsKey=e},expression:"tabsKey"}},[r("ta-tab-pane",{key:"1",attrs:{tab:"用户个人字段配置"}}),r("ta-tab-pane",{key:"2",attrs:{tab:"组织机构字段配置"}}),r("ta-tab-pane",{key:"3",attrs:{tab:"功能资源字段配置"}}),r("ta-button-group",{attrs:{slot:"tabBarExtraContent"},slot:"tabBarExtraContent"},[r("ta-button",{staticClass:"step1",on:{click:t.loadDefaultSetting}},[t._v(" 加载默认配置 ")]),r("ta-button",{on:{click:function(e){return t.loadTableData()}}},[t._v(" 刷新 ")]),r("ta-button",{attrs:{type:"primary"},on:{click:t.saveSubmitAll}},[t._v(" 保存 ")])],1)],1),r("ta-table",{attrs:{columns:t.columns,"data-source":t.tableData,"row-key":"fieldId"},scopedSlots:t._u([{key:"default",fn:function(e){return r("span",{attrs:{solt:"type"}},[t._v(t._s(e))])}},{key:"effectiveCheck",fn:function(e,a){return r("span",{},[r("ta-checkbox",{on:{change:function(e){return t.getRecord(a)}},model:{value:a.effectiveCheck,callback:function(e){t.$set(a,"effectiveCheck",e)},expression:"record.effectiveCheck"}},[t._v("有效")])],1)}},{key:"hideCheck",fn:function(e,a){return r("span",{},[r("ta-checkbox",{attrs:{disabled:a.requiredCheck},on:{change:function(e){return t.getRecord(a)}},model:{value:a.hideCheck,callback:function(e){t.$set(a,"hideCheck",e)},expression:"record.hideCheck"}},[t._v("隐藏")])],1)}},{key:"requiredCheck",fn:function(e,a){return r("span",{},[r("ta-checkbox",{attrs:{disabled:a.hideCheck||a.unchangeableCheck},on:{change:function(e){return t.getRecord(a)}},model:{value:a.requiredCheck,callback:function(e){t.$set(a,"requiredCheck",e)},expression:"record.requiredCheck"}},[t._v("必填")])],1)}},{key:"unchangeableCheck",fn:function(e,a){return r("span",{},[r("ta-checkbox",{attrs:{disabled:a.requiredCheck},on:{change:function(e){return t.getRecord(a)}},model:{value:a.unchangeableCheck,callback:function(e){t.$set(a,"unchangeableCheck",e)},expression:"record.unchangeableCheck"}},[t._v("不可编辑")])],1)}},{key:"moreCheck",fn:function(e,a){return r("span",{},[r("ta-checkbox",{on:{change:function(e){return t.getRecord(a)}},model:{value:a.moreCheck,callback:function(e){t.$set(a,"moreCheck",e)},expression:"record.moreCheck"}},[t._v("是")])],1)}},{key:"orderNo",fn:function(e,a){return r("span",{},[r("ta-input-number",{attrs:{min:1},on:{change:function(e){return t.getRecord(a)}},model:{value:a.orderNo,callback:function(e){t.$set(a,"orderNo",e)},expression:"record.orderNo"}})],1)}}])},[r("span",{attrs:{slot:"action"},slot:"action"},[r("ta-table-operate",{attrs:{"operate-menu":t.operateMenu}})],1)])],1),r("ta-drawer",{attrs:{"destroy-on-close":!0,title:t.defaultTitle,width:"500",placement:"right",closable:!0,visible:t.drawerVisible,getContainer:!1},on:{close:function(e){t.drawerVisible=!1}}},[r("ta-form",{attrs:{"auto-form-create":function(t){e.form=t}}},[r("ta-form-item",{attrs:{label:"类型","label-col":t.formItemLayout.labelCol,"wrapper-col":t.formItemLayout.wrapperCol,"field-decorator-id":"type"}},[r("ta-input",{attrs:{disabled:""}})],1),r("ta-form-item",{attrs:{label:"字段名称","label-col":t.formItemLayout.labelCol,"wrapper-col":t.formItemLayout.wrapperCol,"field-decorator-id":"fieldId"}},[r("ta-input",{attrs:{disabled:""}})],1),r("ta-form-item",{attrs:{label:"字段名称","label-col":t.formItemLayout.labelCol,"wrapper-col":t.formItemLayout.wrapperCol,"field-decorator-id":"formId"}},[r("ta-input",{attrs:{disabled:""}})],1),r("ta-form-item",{attrs:{label:"标题文字","label-col":t.formItemLayout.labelCol,"wrapper-col":t.formItemLayout.wrapperCol,"field-decorator-id":"displayText","field-decorator-options":{rules:[{required:!0,message:"请输入标题文字"}]}}},[r("ta-input",{attrs:{placeholder:"请输入标题文字"}})],1),r("ta-form-item",{attrs:{label:"是否有效","label-col":t.formItemLayout.labelCol,"wrapper-col":t.formItemLayout.wrapperCol,"field-decorator-id":"effective"}},[r("ta-radio-group",[r("ta-radio",{attrs:{value:"1"}},[t._v(" 是 ")]),r("ta-radio",{attrs:{value:"0"}},[t._v(" 否 ")])],1)],1),r("ta-form-item",{attrs:{label:"是否隐藏","label-col":t.formItemLayout.labelCol,"wrapper-col":t.formItemLayout.wrapperCol,"field-decorator-id":"hide"}},[r("ta-radio-group",{on:{change:function(e){return t.mutexChange(e,"hide")}}},[r("ta-radio",{attrs:{value:"1"}},[t._v(" 是 ")]),r("ta-radio",{attrs:{value:"0"}},[t._v(" 否 ")])],1)],1),r("ta-form-item",{attrs:{label:"是否必填","label-col":t.formItemLayout.labelCol,"wrapper-col":t.formItemLayout.wrapperCol,"field-decorator-id":"required"}},[r("ta-radio-group",{on:{change:function(e){return t.mutexChange(e,"required")}}},[r("ta-radio",{attrs:{value:"1"}},[t._v(" 是 ")]),r("ta-radio",{attrs:{value:"0"}},[t._v(" 否 ")])],1)],1),r("ta-form-item",{attrs:{label:"不可编辑","label-col":t.formItemLayout.labelCol,"wrapper-col":t.formItemLayout.wrapperCol,"field-decorator-id":"unchangeable"}},[r("ta-radio-group",{on:{change:function(e){return t.mutexChange(e,"unchangeable")}}},[r("ta-radio",{attrs:{value:"1"}},[t._v(" 是 ")]),r("ta-radio",{attrs:{value:"0"}},[t._v(" 否 ")])],1)],1),r("ta-form-item",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{label:"隐私保护","label-col":t.formItemLayout.labelCol,"wrapper-col":t.formItemLayout.wrapperCol,"field-decorator-id":"protectPrivacy"}},[r("ta-radio-group",[r("ta-radio",{attrs:{value:"1"}},[t._v(" 是 ")]),r("ta-radio",{attrs:{value:"0"}},[t._v(" 否 ")])],1)],1),r("ta-form-item",{attrs:{label:"属于更多内容","label-col":t.formItemLayout.labelCol,"wrapper-col":t.formItemLayout.wrapperCol,"field-decorator-id":"more"}},[r("ta-radio-group",[r("ta-radio",{attrs:{value:"1"}},[t._v(" 是 ")]),r("ta-radio",{attrs:{value:"0"}},[t._v(" 否 ")])],1)],1),r("ta-form-item",{attrs:{label:"显示顺序","label-col":t.formItemLayout.labelCol,"wrapper-col":t.formItemLayout.wrapperCol,"field-decorator-id":"orderNo","field-decorator-options":{rules:[{required:!0,message:"请输入显示顺序"}]}}},[r("ta-input-number",{staticStyle:{width:"100%"},attrs:{min:1,step:1,placeholder:"请输入显示顺序"}})],1),r("ta-form-item",{attrs:{label:"内容长度","label-col":t.formItemLayout.labelCol,"wrapper-col":t.formItemLayout.wrapperCol,"field-decorator-id":"contentSize"}},[r("ta-input-number",{staticStyle:{width:"100%"},attrs:{min:0,step:1,placeholder:"请输入内容长度",disabled:t.formDisable.contentSize}})],1),r("ta-form-item",{attrs:{label:"表单元素类型","label-col":t.formItemLayout.labelCol,"wrapper-col":t.formItemLayout.wrapperCol,"field-decorator-id":"formType"}},[r("ta-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择表单元素类型"},on:{change:t.handleChangeFormType}},[r("ta-select-option",{attrs:{value:"radio"}},[t._v(" 单选 ")]),r("ta-select-option",{attrs:{value:"radioButton"}},[t._v(" 单选按钮 ")]),r("ta-select-option",{attrs:{value:"input"}},[t._v(" 文本 ")]),r("ta-select-option",{attrs:{value:"sensitive-input"}},[t._v(" 脱敏文本 ")]),r("ta-select-option",{attrs:{value:"select"}},[t._v(" 下拉选 ")]),r("ta-select-option",{attrs:{value:"select-multiple"}},[t._v(" 多选下拉选 ")]),r("ta-select-option",{attrs:{value:"slot"}},[t._v(" 插槽 ")])],1)],1),"sensitive-input"===t.currentSelectFormType?r("ta-form-item",{attrs:{label:"脱敏规则","label-col":t.formItemLayout.labelCol,"wrapper-col":t.formItemLayout.wrapperCol}},[r("ta-row",[r("ta-col",{attrs:{span:"10"}},[r("ta-form-item",{staticStyle:{"margin-bottom":"0px"},attrs:{"field-decorator-id":"protectPrivacyRulePrefix"}},[r("ta-input-number",{staticStyle:{width:"100%"},attrs:{min:"0","default-value":"0"}})],1)],1),r("ta-col",{attrs:{span:"10"}},[r("ta-form-item",{staticStyle:{"margin-bottom":"0px"},attrs:{"field-decorator-id":"protectPrivacyRuleSuffix"}},[r("ta-input-number",{staticStyle:{width:"100%"},attrs:{min:"0","default-value":"0"}})],1)],1),r("ta-col",{attrs:{span:"2"}},[r("ta-popover",{attrs:{width:"300",trigger:"hover",content:"配置脱敏规则, 内容开头从多少位开始脱敏, 内容结尾剩下多少位不脱敏,  eq: 手机的脱敏规则 3,4"}},[r("ta-icon",{staticStyle:{cursor:"pointer"},attrs:{slot:"reference",type:"question-circle"},slot:"reference"})],1)],1)],1)],1):t._e(),r("ta-form-item",{attrs:{label:"关联码表","label-col":t.formItemLayout.labelCol,"wrapper-col":t.formItemLayout.wrapperCol,"field-decorator-id":"connectAA10"}},[r("ta-input",{attrs:{disabled:t.formDisable.connectAA10}})],1),r("ta-form-item",{attrs:{label:"信息提示文字","label-col":t.formItemLayout.labelCol,"wrapper-col":t.formItemLayout.wrapperCol,"field-decorator-id":"tiText"}},[r("ta-textarea",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入信息提示文字",rows:4}})],1),r("ta-form-item",{attrs:{label:"验证表达式","label-col":t.formItemLayout.labelCol,"wrapper-col":t.formItemLayout.wrapperCol,"field-decorator-id":"validReg"}},[r("ta-textarea",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入验证表达式",rows:4,disabled:t.formDisable.validReg}})],1)],1),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("ta-button-group",[r("ta-button",{on:{click:function(e){return t.setValue(t.currentData)}}},[t._v(" 重置 ")]),r("ta-button",{attrs:{type:"primary"},on:{click:t.saveSubmit}},[t._v(" 保存 ")])],1)],1)],1)],1)},o=[],l=a(95082),i=(a(32564),"/org/sysmg/manageableFieldsRestService/"),n={querySettingTable:function(e,t){Base.submit(null,{url:i+"queryManageableFields",data:e},{successCallback:function(e){return t(e.data)}})},saveDefaultSetting:function(e,t){Base.submit(null,{url:i+"saveDefaultManageableFields",data:e},{successCallback:function(e){return t(e.data)}})},saveSettingTable:function(e,t){Base.submit(null,{url:i+"updateManageableFieldsDetailByFieldId",data:e},{successCallback:function(e){return t(e.data)}})},saveAllSettingTable:function(e,t){Base.submit(null,{url:i+"updateManageableFieldsByFieldsId",data:e},{successCallback:function(e){return t(e.data)}})}},c=a(42358),d=[{fieldId:"areaValue",formId:"areaValue",displayText:"所属行政区",hide:"0",effective:"1",required:"0",unchangeable:"0",protectPrivacy:"0",orderNo:1,contentSize:null,tiText:null,validReg:null,connectAA10:null,formType:"slot",more:"0"},{fieldId:"customNo",formId:"customNo",displayText:"自定义编码",hide:"0",effective:"1",required:"0",unchangeable:"0",protectPrivacy:"0",orderNo:2,contentSize:30,tiText:"",validReg:"",connectAA10:null,formType:"input",more:"0"},{fieldId:"orderNo",formId:"orderNo",displayText:"排序号",hide:"1",effective:"1",required:"0",unchangeable:"1",protectPrivacy:"0",orderNo:3,contentSize:null,tiText:"",validReg:"",connectAA10:null,formType:"input",more:"0"},{fieldId:"orgCode",formId:"orgCode",displayText:"组织代码",hide:"0",effective:"1",required:"0",unchangeable:"0",protectPrivacy:"0",orderNo:4,contentSize:18,tiText:"",validReg:null,connectAA10:null,formType:"input",more:"0"},{fieldId:"orgManager",formId:"orgManager",displayText:"负责人",hide:"0",effective:"1",required:"0",unchangeable:"0",protectPrivacy:"0",orderNo:5,contentSize:null,tiText:"",validReg:null,connectAA10:null,formType:"slot",more:"0"},{fieldId:"contacts",formId:"contacts",displayText:"联系人",hide:"0",effective:"1",required:"0",unchangeable:"0",protectPrivacy:"0",orderNo:6,contentSize:null,tiText:"",validReg:null,connectAA10:null,formType:"slot",more:"0"},{fieldId:"tel",formId:"tel",displayText:"联系电话",hide:"0",effective:"1",required:"0",unchangeable:"0",protectPrivacy:"0",orderNo:7,contentSize:20,tiText:"",validReg:"/^((\\d{3,4})|\\d{3,4}-)?\\d{7,8}$/",connectAA10:null,formType:"input",more:"0"},{fieldId:"address",formId:"address",displayText:"联系地址",hide:"0",effective:"1",required:"0",unchangeable:"0",protectPrivacy:"0",orderNo:8,contentSize:450,tiText:"",validReg:null,connectAA10:null,formType:"input",more:"0"},{fieldId:"tags",formId:"tags",displayText:"组织标签",hide:"0",effective:"1",required:"0",unchangeable:"0",protectPrivacy:"0",orderNo:10,contentSize:null,tiText:"",validReg:null,connectAA10:null,formType:"slot",more:"0"}],u={fieldId:"field",formId:"field",displayText:"扩展信息",effective:"0",hide:"1",required:"0",unchangeable:"0",protectPrivacy:"0",orderNo:1,contentSize:null,tiText:null,validReg:null,connectAA10:null,formType:"input",more:"1"};function s(e,t){return(Array(t).join(0)+e).slice(-t)}for(var f=10,m=1;m<=f;m++){var p=Object.assign({},u),h=s(m,2);p.fieldId=p.fieldId+h,p.formId=p.formId+h,p.displayText=p.displayText+h,p.orderNo=d.length+1,d.push(p)}var v=d,b=[{fieldId:"sex",formId:"sex",displayText:"性别",hide:"0",effective:"1",required:"0",unchangeable:"0",protectPrivacy:"0",orderNo:1,contentSize:null,tiText:"请输入性别",validReg:null,connectAA10:"SEX",formType:"radio",more:"0"},{fieldId:"jobNumber",formId:"jobNumber",displayText:"工号",hide:"0",effective:"1",required:"0",unchangeable:"0",protectPrivacy:"0",orderNo:2,contentSize:null,tiText:"",validReg:"",connectAA10:null,formType:"input",more:"0"},{fieldId:"idCardType",formId:"idCardType",displayText:"证件类型",hide:"0",effective:"1",required:"0",unchangeable:"0",protectPrivacy:"0",orderNo:3,contentSize:null,tiText:"",validReg:"",connectAA10:"IDCARDTYPE",formType:"select",more:"0"},{fieldId:"idCardNo",formId:"idCardNo",displayText:"证件号",hide:"0",effective:"1",required:"0",unchangeable:"0",protectPrivacy:"0",orderNo:4,contentSize:null,tiText:"",validReg:"/(^\\d{15}$)|(^\\d{18}$)|(^\\d{17}(\\d|X|x)$)/",connectAA10:null,formType:"input",more:"0"},{fieldId:"mobile",formId:"mobile",displayText:"手机号",hide:"0",effective:"1",required:"0",unchangeable:"0",protectPrivacy:"0",orderNo:5,contentSize:null,tiText:"",validReg:"/^1[3|4|5|7|8|9][0-9]\\d{8}$/",connectAA10:null,formType:"input",more:"0"},{fieldId:"tags",formId:"tags",displayText:"用户标签",hide:"0",effective:"1",required:"0",unchangeable:"0",protectPrivacy:"0",orderNo:6,contentSize:null,tiText:"",validReg:null,connectAA10:null,formType:"slot",more:"0"},{fieldId:"education",formId:"education",displayText:"学历",hide:"0",effective:"1",required:"0",unchangeable:"0",protectPrivacy:"0",orderNo:7,contentSize:null,tiText:"",validReg:null,connectAA10:"EDUCATION",formType:"select",more:"1"},{fieldId:"email",formId:"email",displayText:"邮箱地址",hide:"0",effective:"1",required:"0",unchangeable:"0",protectPrivacy:"0",orderNo:8,contentSize:null,tiText:"",validReg:"/^([A-Za-z0-9_\\-\\.])+\\@([A-Za-z0-9_\\-\\.])+\\.([A-Za-z]{2,4})$/",connectAA10:null,formType:"input",more:"1"},{fieldId:"address",formId:"address",displayText:"联系地址",hide:"0",effective:"1",required:"0",unchangeable:"0",protectPrivacy:"0",orderNo:9,contentSize:null,tiText:"",validReg:null,connectAA10:null,formType:"input",more:"1"},{fieldId:"zipCode",formId:"zipCode",displayText:"邮政编码",hide:"0",effective:"1",required:"0",unchangeable:"0",protectPrivacy:"0",orderNo:10,contentSize:null,tiText:"",validReg:"/^[0-9]{6}$/",connectAA10:null,formType:"input",more:"1"},{fieldId:"workplace",formId:"workplace",displayText:"工作单位",hide:"0",effective:"1",required:"0",unchangeable:"0",protectPrivacy:"0",orderNo:11,contentSize:null,tiText:"",validReg:null,connectAA10:null,formType:"input",more:"1"}],y={fieldId:"field",formId:"field",displayText:"扩展信息",effective:"0",hide:"1",required:"0",unchangeable:"0",protectPrivacy:"0",orderNo:1,contentSize:null,tiText:null,validReg:null,connectAA10:null,formType:"input",more:"1"};function g(e,t){return(Array(t).join(0)+e).slice(-t)}for(var I=10,C=1;C<=I;C++){var T=Object.assign({},y),x=g(C,2);T.fieldId=T.fieldId+x,T.formId=T.formId+x,T.displayText=T.displayText+x,T.orderNo=b.length+1,b.push(T)}var k=b,S=a(80790);function A(e){return btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g,(function(e,t){return String.fromCharCode("0x"+t)})))}var w=[{title:"字段名称",align:"left",dataIndex:"displayText",scopedSlots:{customRender:"displayText"}},{title:"是否有效",align:"left",dataIndex:"effectiveCheck",scopedSlots:{customRender:"effectiveCheck"}},{title:"是否隐藏",align:"left",dataIndex:"hideCheck",scopedSlots:{customRender:"hideCheck"}},{title:"是否必填",align:"left",dataIndex:"requiredCheck",scopedSlots:{customRender:"requiredCheck"}},{title:"不可编辑",align:"left",dataIndex:"unchangeableCheck",scopedSlots:{customRender:"unchangeableCheck"}},{title:"是否更多菜单",align:"left",dataIndex:"moreCheck",scopedSlots:{customRender:"moreCheck"}},{title:"显示顺序",align:"left",dataIndex:"orderNo",scopedSlots:{customRender:"orderNo"}},{title:"操作",align:"center",dataIndex:"action",scopedSlots:{customRender:"action"}}],R={name:"userInfoManagement",mixins:[S.Z],data:function(){var e=this;return{tabsKey:"1",columns:w,operateMenu:[{name:"编辑",onClick:function(t){e.fnEdit(t)}}],tableData:[],formItemLayout:{labelCol:{span:6},wrapperCol:{span:18}},currentData:{},changeList:[],drawerVisible:!1,defaultTitle:"",formDisable:{contentSize:!1,connectAA10:!1,validReg:!1},currentSelectFormType:""}},mounted:function(){this.loadTableData();var e=[{element:".step1",popover:{title:"加载默认配置",description:"此功能可将配置还原成系统默认的配置",position:"left"}}];this.fnCommonGuide(e)},methods:{loadDefaultSetting:function(){var e=this,t="1"===this.tabsKey?"【用户】":"2"===this.tabsKey?"【组织】":"【功能】",a="该操作会直接重载"+t+"默认配置，请确认！";this.$confirm({title:"重载配置确认",content:a,getContainer:function(){return document.getElementById("userInfoManagement")},onOk:function(){var t=[];"1"===e.tabsKey&&(t=k),"2"===e.tabsKey&&(t=v),"3"===e.tabsKey&&(t=c.Z),e.tableData=t.map((function(e){var t=Object.assign(e);return t.effectiveCheck="1"===t.effective,t.hideCheck="1"===t.hide,t.requiredCheck="1"===t.required,t.unchangeableCheck="1"===t.unchangeable,t.protectPrivacyCheck="1"===t.protectPrivacy,t.moreCheck="1"===t.more,null!=t.validReg&&""!==t.validReg&&void 0!==t.validReg&&(t.validReg=A(t.validReg)),t})),n.saveDefaultSetting({type:e.tabsKey,settingListJson:JSON.stringify(e.tableData)},(function(t){e.changeList=[],e.loadTableData(),e.$message.success("配置已重载")}))}})},changeData:function(){var e=this;setTimeout((function(){e.loadTableData()}),650)},loadTableData:function(){var e=this;n.querySettingTable({type:this.tabsKey},(function(t){e.tableData=t.resultData})),this.changeList=[]},fnEdit:function(e){var t=this,a="1"===this.tabsKey?"用户":"2"===this.tabsKey?"组织":"功能";this.defaultTitle="编辑"+a+"详细信息",this.currentData=(0,l.Z)({},e),this.drawerVisible=!0,this.$nextTick((function(){t.$nextTick((function(){t.setValue(e)}))}))},setValue:function(e){this.form.resetFields();var t=TaUtils.assign(this.form.getFieldsValue(),e);this.form.setFieldsValue(t),this.handleChangeFormType(t.formType)},saveSubmit:function(){var e=this;this.form.validateFields((function(t,a){t||(a.type=e.tabsKey,a.validReg&&(a.validReg=a.validReg.replace(/\\\\/g,"\\")),"sensitive-input"===a.formType&&(a.protectPrivacyRule=(a.protectPrivacyRulePrefix||"0")+","+(a.protectPrivacyRuleSuffix||"0")),n.saveSettingTable(a,(function(t){e.drawerVisible=!1,e.loadTableData(),e.$message.success("编辑成功")})))}))},getRecord:function(e){this.changeList=this.changeList.filter((function(t){return t.fieldId!==e.fieldId})),this.changeList.push(e)},saveSubmitAll:function(){var e=this;n.saveAllSettingTable({type:this.tabsKey,changeListJson:JSON.stringify(this.changeList)},(function(t){e.loadTableData();var a="1"===e.tabsKey?"用户":"2"===e.tabsKey?"组织":"功能";e.$message.success(a+"信息简单项编辑成功")}))},handleChangeFormType:function(e){this.currentSelectFormType=e;var t="0",a={};switch(e){case"radio":case"radio-button":case"select":case"select-multiple":a={contentSize:!0,connectAA10:!1,validReg:!0};break;case"input":a={contentSize:!1,connectAA10:!0,validReg:!1};break;case"sensitive-input":a={contentSize:!0,connectAA10:!0,validReg:!0},t="1";break;default:a={contentSize:!1,connectAA10:!1,validReg:!1}}if(this.dealFormDisable(a),this.form.setFieldsValue({protectPrivacy:t}),"1"===t){var r=(this.currentData.protectPrivacyRule||"0,0").split(",");this.$nextTick((function(){this.form.setFieldsValue({protectPrivacyRulePrefix:r[0],protectPrivacyRuleSuffix:r[1]})}))}},dealFormDisable:function(e){var t={};Object.keys(e).forEach((function(a){e[a]&&(t[a]=null)})),this.form.setFieldsValue(t),this.formDisable=e},mutexChange:function(e,t){var a=e.target,r={};"1"===a.value&&("hide"===t?r.required="0":"required"===t?(r.hide="0",r.unchangeable="0"):"unchangeable"===t&&(r.required="0")),this.form.setFieldsValue(r)}}},q=R,N=a(1001),_=(0,N.Z)(q,r,o,!1,null,null,null),L=_.exports},42358:function(e,t){var a=[{fieldId:"icon",formId:"icon",displayText:"图标名称",hide:"0",effective:"1",required:"0",unchangeable:"0",protectPrivacy:"0",orderNo:1,contentSize:30,tiText:null,validReg:null,connectAA10:null,formType:"input",more:"0"}],r={fieldId:"field",formId:"field",displayText:"扩展信息",effective:"0",hide:"1",required:"0",unchangeable:"0",protectPrivacy:"0",orderNo:1,contentSize:null,tiText:null,validReg:null,connectAA10:null,formType:"input",more:"1"};function o(e,t){return(Array(t).join(0)+e).slice(-t)}for(var l=10,i=1;i<=l;i++){var n=Object.assign({},r),c=o(i,2);n.fieldId=n.fieldId+c,n.formId=n.formId+c,n.displayText=n.displayText+c,n.orderNo=a.length+1,a.push(n)}t.Z=a},80790:function(e,t,a){var r=a(76698);a(34530);t.Z={activated:function(){var e=window.pageVmObj,t=e["steps_"+e._route.name];this.methods?this.methods.fnCommonGuide(t):this.fnCommonGuide(t)},deactivated:function(){this.methods?this.methods.fnCommonGuide([],!0):this.fnCommonGuide([],!0)},methods:{fnCommonGuide:function(e,t){var a=window.pageVmObj;t?(a.driver.reset(),window.fnPageGuide=null):(a["steps_"+a._route.name]=e,a.driver=new r.Z({allowClose:!1}),window.fnPageGuide=function(){a.driver.defineSteps(e),a.driver.start()})}}}}}]);