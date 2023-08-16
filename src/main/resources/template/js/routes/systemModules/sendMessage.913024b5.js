"use strict";(self["webpackChunkta404_ui_cli"]=self["webpackChunkta404_ui_cli"]||[]).push([[6904],{5807:function(t,e,a){a.r(e),a.d(e,{default:function(){return f}});var i=function(){var t=this,e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"fit"},[i("ta-border-layout",{attrs:{layout:{header:"200px"}}},[i("div",{attrs:{slot:"header"},slot:"header"},[i("ta-tabs",{staticClass:"fit"},[i("ta-tab-pane",{key:"1",staticClass:"fit",attrs:{tab:"筛选查询"}},[i("ta-form",{staticClass:"fit",staticStyle:{"margin-top":"10px"},attrs:{"label-width":"100px",autoFormCreate:function(e){t.form=e}}},[i("ta-row",[i("ta-col",{attrs:{span:8}},[i("ta-form-item",{attrs:{label:"关键词"}},[i("ta-input")],1)],1),i("ta-col",{attrs:{span:8}},[i("ta-form-item",{attrs:{label:"节点",span:8}},[i("ta-select")],1)],1),i("ta-col",{attrs:{span:8}},[i("ta-form-item",{attrs:{label:"发送时间",span:8}},[i("ta-date-picker",{staticStyle:{width:"100%"}})],1)],1)],1),i("ta-row",[i("ta-col",{attrs:{span:8}},[i("ta-form-item",{attrs:{label:"发送人",span:8}},[i("ta-input")],1)],1),i("ta-col",{staticStyle:{"text-align":"center"},attrs:{span:8}},[i("ta-button",{on:{click:e.fnQuery}},[e._v("查询")]),i("ta-button",{attrs:{type:"primary"},on:{click:function(t){e.sendVisible=!0}}},[e._v("发邮件")])],1)],1)],1)],1)],1)],1),i("ta-tabs",{staticClass:"fit"},[i("ta-tab-pane",{key:"1",staticClass:"fit",attrs:{tab:"数据列表"}},e._l(e.listData,(function(t,a){return i("div",{key:a,staticClass:"messageList"},[i("ta-checkbox",{staticStyle:{position:"absolute",left:"5px"}}),i("div",{staticStyle:{"font-size":"12px","margin-bottom":"15px"}},[i("div",{staticClass:"messageHeader"},[e._v("发布人员："),i("span",{staticClass:"info-text"},[e._v(e._s(t.senderName))])]),i("div",{staticClass:"messageHeader"},[e._v("发送时间："),i("span",{staticClass:"info-text"},[e._v(e._s(t.sendDate))])]),i("div",{staticClass:"messageHeader"},[e._v("接收对象："),i("span",{staticClass:"info-text"},[e._v(e._s(t.receiverEmail))])]),1==t.type?i("span",{staticStyle:{float:"right",color:"#52c41a"}},[e._v("发送成功")]):e._e(),2==t.type?i("span",{staticStyle:{float:"right",color:"#f5222d"}},[e._v("发送失败")]):e._e()]),i("ta-divider",{staticStyle:{margin:"0 0 14px"}}),i("div",{staticStyle:{height:"100px"},domProps:{innerHTML:e._s(t.content)}}),i("ta-divider",{staticStyle:{margin:"0"}}),i("div",{staticStyle:{"font-size":"12px","margin-top":"15px"}},[i("span",[e._v("发布附件：")]),e._l(t.annexList,(function(t,a){return i("ta-tag",{key:a,attrs:{color:"blue"},on:{click:function(a){return e.fnDownLoad(t.annexId)}}},[e._v(e._s(t.annexName))])}))],2)],1)})),0)],1)],1),i("ta-modal",{attrs:{title:"发邮件",width:"1000px",height:"500px","destroy-on-close":!0,closable:!1},model:{value:e.sendVisible,callback:function(t){e.sendVisible=t},expression:"sendVisible"}},[i("div",{staticStyle:{"text-align":"center"},attrs:{slot:"footer"},slot:"footer"},[i("ta-button",{on:{click:e.fnCloseSendMessage}},[e._v("取消")]),i("ta-button",{attrs:{type:"primary"},on:{click:e.fnSendMessage}},[e._v("确定")])],1),i("ta-form",{attrs:{autoFormCreate:function(e){t.messageForm=e}}},[i("ta-form-item",{attrs:{label:"收件人",fieldDecoratorId:"receiverEmail",require:{message:"请输入邮箱!"}}},[i("ta-input",{attrs:{placeholder:"输入用户邮箱号，多个邮箱请用逗号分隔"}})],1),i("ta-form-item",{attrs:{label:"主题",fieldDecoratorId:"title",require:{message:"请输入主题"}}},[i("ta-input")],1),i("ta-form-item",{attrs:{label:"内容",fieldDecoratorId:"content",required:"",fieldDecoratorOptions:{rules:[{validator:e.contentValidator}]}}},[i("ta-rich-editor",{ref:"richEditor",staticStyle:{height:"200px"}})],1),i("ta-form-item",{attrs:{label:"附件",fieldDecoratorId:"file",required:!0,fieldDecoratorOptions:{rules:[{validator:e.fileValidator}]}}},[i("ta-upload",{attrs:{name:"file",multiple:!0,action:e.backUrl+"/email/uploadEmailFile",withCredentials:!0,beforeUpload:e.beforeUploadNoticeFile,fileList:e.uploadFileList},on:{change:e.handleUploadChange}},[i("ta-button",[i("ta-icon",{attrs:{type:"upload"}}),e._v(" 上传附件 ")],1)],1)],1)],1)],1)],1)},s=[],l=a(95082),r=[],n={name:"recordMg",data:function(){return{backUrl:"",listData:r,sendVisible:!1,uploadFileList:[]}},mounted:function(){this.backUrl=faceConfig.basePath,this.fnQuery()},methods:{fnQuery:function(){var t=this;this.Base.submit(null,{url:"email/getUserSendEmail",data:(0,l.Z)({},this.form.getFieldsValue())}).then((function(e){t.listData=e.data.emailList}))},fnDownLoad:function(t){location.href=this.backUrl+"/email/downloadEmailFile?annexId="+t},fnSendMessage:function(){var t=this;this.messageForm.validateFields((function(e,a){if(!e){var i=t.messageForm.getFieldsValue(),s=t.uploadFileList.filter((function(t){return t.fileId})).map((function(t){return t.fileId})).join(",");Object.assign(i,{content:t.$refs.richEditor.getHtml()}),t.Base.submit(null,{url:"email/sendEmail",data:{voStr:JSON.stringify(i),annexIds:s}}).then((function(e){"1"==e.data.type?t.$message.success("消息发送成功"):t.$message.error("消息发送失败"),t.uploadFileList=[],t.sendVisible=!1,t.fnQuery()}))}}))},fnCloseSendMessage:function(){this.uploadFileList=[],this.sendVisible=!1},handleUploadChange:function(t){var e=t.fileList;"done"==t.file.status&&t.file.response&&(200==t.file.response.code&&t.file.response.data.fileId?(e.forEach((function(e){e.uid==t.file.uid&&(e.status="success",e.fileId=t.file.response.data.fileId)})),this.$message.success("上传成功")):(e.forEach((function(e){e.uid==t.file.uid&&(e.status="error")})),this.$message.error(t.file.response.errors[0].msg))),this.uploadFileList=e},beforeUploadNoticeFile:function(t,e){return!(t.size>20971520)||(this.$message.error("上传失败，文件超过20M,暂不支持"),t.status="error",!1)},fileValidator:function(t,e,a){this.uploadFileList.length<1?a("请先选择文件"):a()},contentValidator:function(t,e,a){this.$refs.richEditor.getText().length<1?a("请先选择文件"):a()}}},o=n,c=a(1001),d=(0,c.Z)(o,i,s,!1,null,null,null),f=d.exports}}]);