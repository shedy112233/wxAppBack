"use strict";(self["webpackChunkta404_ui_cli"]=self["webpackChunkta404_ui_cli"]||[]).push([[8135],{20243:function(e,t,s){s.r(t),s.d(t,{default:function(){return p}});var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"fit",attrs:{id:"customOrgUser"}},[s("ta-border-layout",{attrs:{layout:{header:"70px",footer:"70px"},"center-cfg":{showBar:!0},"footer-cfg":{showBorder:!1}}},[s("div",{staticClass:"center-box",attrs:{slot:"header"},slot:"header"},[s("ta-breadcrumb",{staticStyle:{"line-height":"42px",position:"absolute"},attrs:{separator:">"}},[s("ta-breadcrumb-item",[s("a",{on:{click:e.fnBack}},[e._v("自定义组织")])]),s("ta-breadcrumb-item",[e._v("人员管理")])],1),s("ta-input-search",{staticClass:"search-box",attrs:{placeholder:"请输入人员姓名、帐号、证件号"},on:{search:e.fnQueryUserByOrgId},model:{value:e.searchInfo,callback:function(t){e.searchInfo=t},expression:"searchInfo"}},[s("ta-button",{attrs:{slot:"enterButton",type:"primary"},slot:"enterButton"},[e._v(" 搜索 ")])],1)],1),s("ta-alert",{attrs:{slot:"centerExtraContent",message:"当前组织路径："+this.$route.query.customOrgPath,type:"info","show-icon":""},slot:"centerExtraContent"}),s("ta-tabs",{staticClass:"fit"},[s("template",{slot:"tabBarExtraContent"},[s("ta-button",{on:{click:e.fnBack}},[s("ta-icon",{attrs:{type:"rollback"}}),e._v("返回 ")],1),s("ta-button-group",[s("ta-button",{on:{click:e.fnBatchDeleteUser}},[e._v(" 批量移除 ")]),s("ta-button",{attrs:{type:"primary"},on:{click:e.fnShowUserSelectModal}},[e._v(" 分配人员 ")])],1)],1),s("ta-tab-pane",{attrs:{tab:"组织下人员列表"}},[s("ta-table",{staticStyle:{"padding-top":"10px"},attrs:{columns:e.userColumns,"data-source":e.userData,pagination:!1,"row-selection":{selectedRowKeys:e.selectedRowKeys,onChange:e.fnOnChange}},scopedSlots:e._u([{key:"name",fn:function(t,r){return s("span",{class:{invalidStyle:"0"==r.effective}},[e._v(e._s(t))])}},{key:"namePath",fn:function(t){return s("span",{},[e._v(e._s(e.getLastName(t)))])}},{key:"sex",fn:function(t){return s("span",{},[e._v(e._s(e.CollectionLabel("SEX",t)))])}},{key:"action",fn:function(t,r){return s("span",{},[s("ta-table-operate",{attrs:{"operate-menu":e.operateMenu}})],1)}}])})],1)],2),s("div",{attrs:{slot:"footer"},slot:"footer"},[s("ta-pagination",{ref:"userGridPager",staticStyle:{float:"right","padding-top":"10px"},attrs:{"show-size-changer":"","show-quick-jumper":"","data-source":e.userData,"default-page-size":10,params:e.userPageParams,url:e.customOrgUserUrl},on:{"update:dataSource":function(t){e.userData=t},"update:data-source":function(t){e.userData=t}}})],1)],1),s("custom-org-user-select",{attrs:{visible:e.visible},on:{close:e.fnCloseUserSelectModal}})],1)},a=[],n=s(1888),u=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ta-user-select",{attrs:{id:"relationUser",title:"新增组织人员","is-show":e.isShow,load:e.loadOrgTreeNode,"user-list-data":e.relationUserListData,"user-select-data":e.userSelectData,"default-user-list":e.userListResult,props:e.userDefaultProps,pagination:!0},on:{close:e.fnCloseUserModal,queryUserList:e.fnQueryUserList,getUserListResult:e.fnGetUserListResult,checkAllMembers:e.fnCheckAllMembers}})},o=[],i={name:"customOrgUserSelect",props:{visible:{type:Boolean}},data:function(){return{isShow:!1,userListResult:[],relationUserListData:[],userSelectData:[],includeChild:!1,userDefaultProps:{treeNodeKey:"orgId",treeLabel:"label",treeChildren:"children",treeIsLeaf:"isLeaf",listKey:"userId",listTitle:"name",listSubTitle:"mobile",listDescription:"namePath"},orgId:"",total:void 0}},watch:{visible:function(e){e&&(this.isShow=e)}},methods:{loadOrgTreeNode:function(e,t){if(0===e.level&&n.Z.queryAllTaOrg(null,(function(e){var s=e.data.orgTreeData;if(s[0]&&s[0].children&&s[0].children instanceof Array&&s[0].children.length>0){var r=s[0].children.map((function(e){var t=e;e.childNum>0&&(t.children=[])}));s[0].children=r}return t(s)})),e.level>=1){var s=e.data.orgId,r=e.data.isLeaf,a={orgId:s};n.Z.queryAllTaOrg(a,(function(e){var s=e.data.orgTreeData;return r&&(s=s.map((function(e){var t=e;t.children=[]}))),t(s)}))}},fnCloseUserModal:function(){this.isShow=!1;var e=this.userListResult.map((function(e){return e.userId}));this.userListResult=[],this.relationUserListData=[],this.userSelectData=[],this.$emit("close",e.join(","))},fnQueryUserList:function(e,t,s,r,a){var u=this,o={orgId:e,showChildUser:t?"1":"0",pageNumber:s,pageSize:10};r&&(o[r]=a),n.Z.queryBatchUserByOrgId(o,(function(e){u.relationUserListData=e.data.userList.list,void 0===u.total&&(u.total=e.data.userList.total)}))},fnGetUserListResult:function(e){this.userListResult=e},fnCheckAllMembers:function(e,t,s){n.Z.queryBatchUserByOrgId({orgId:e,includeChildren:t?"1":"0",pageSize:this.total,pageNumber:1},(function(e){s(e.data.userList.list)}))}}},c=i,l=s(1001),d=(0,l.Z)(c,u,o,!1,null,null,null),f=d.exports,m=[{title:"姓名",dataIndex:"name",scopedSlots:{customRender:"name"}},{title:"账号",dataIndex:"loginId"},{title:"性别",dataIndex:"sex",scopedSlots:{customRender:"sex"}},{title:"组织路径",dataIndex:"namePath",width:"30%",overflowTooltip:!0,scopedSlots:{customRender:"namePath"}},{title:"操作",dataIndex:"operation",scopedSlots:{customRender:"action"},align:"center"}],g={name:"customOrgUser",components:{CustomOrgUserSelect:f},data:function(){var e=this;return{customOrgId:"",orgOptions:[],casValue:[],isSub:!0,searchInfo:"",userColumns:m,operateMenu:[{name:"移除",type:"confirm",confirmTitle:"确认移除该人员吗?",onOk:function(t){e.fnUserRecordDelete(t)}}],userData:[],selectedRows:[],selectedRowKeys:[],customOrgUserUrl:"org/orguser/customOrgManagementRestService/queryBatchUserByCustomOrgId",visible:!1,arrayData:{},isDetailShow:!1}},methods:{fnOnChange:function(e,t){this.selectedRowKeys=e,this.selectedRows=t},getLastName:function(e){return e&&-1!=e.indexOf("/")?e.slice(e.lastIndexOf("/")+1):e},showRecordDetail:function(e){this.isDetailShow=!0,this.arrayData=[{label:"姓名",value:e.name},{label:"账号",value:e.loginId},{label:"性别",type:"codeTable",dictType:"SEX",value:e.sex},{label:"组织路径",type:"desc",value:e.namePath}]},fnShowUserSelectModal:function(){this.visible=!0},fnCloseUserSelectModal:function(e){var t=this;if(this.visible=!1,e){var s={cutomOrgUserIds:e,customOrgId:this.customOrgId};n.Z.addBatchCustomOrgUser(s,(function(e){t.$message.success("分配成功"),t.fnQueryUserByOrgId()}))}this.$nextTick((function(){t.fnQueryUserByOrgId()}))},onChangeIsSub:function(e){var t=this;this.isSub=e.target.checked,this.$nextTick((function(){t.fnQueryUserByOrgId()}))},fnLoadedOrgCallBack:function(e){this.fnQueryUserByOrgId()},fnQueryUserByOrgId:function(){this.$refs.userGridPager.loadData()},userPageParams:function(){var e={};return e.customOrgId=this.customOrgId,e.includeChildren=this.isSub?"1":"0",this.searchInfo&&(e.name=this.searchInfo,e.loginId=this.searchInfo,e.idCardNo=this.searchInfo),e},fnBack:function(){this.$router.push({name:"customOrgManagement"})},fnUserRecordDelete:function(e){var t=this,s={cutomOrgUserIds:e.userId,customOrgId:this.customOrgId};n.Z.deleteBatchCustomOrgUser(s,(function(e){t.$message.success("移除成功"),t.fnQueryUserByOrgId()}))},fnBatchDeleteUser:function(){var e=this;0!==this.selectedRows.length?this.$confirm({title:"移除人员",content:"确认移除这些人员吗?",cancelText:"取消",okText:"确认",onOk:function(){var t=e.selectedRows.map((function(e){return e.userId})),s={cutomOrgUserIds:t.join(","),customOrgId:e.customOrgId};n.Z.deleteBatchCustomOrgUser(s,(function(t){e.$message.success("移除成功"),e.fnQueryUserByOrgId()}))}}):this.$message.warning("请选择需要移除的人员")}},mounted:function(){var e=this.$route.query;this.customOrgId=e.customOrgId,this.fnQueryUserByOrgId()}},h=g,y=(0,l.Z)(h,r,a,!1,null,"70f68f51",null),p=y.exports},1888:function(e,t){var s="/org/orguser/customOrgManagementRestService/";t.Z={queryCustomOrgByParentId:function(e,t){Base.submit(null,{url:s+"queryCustomOrgByParentId",data:e},{successCallback:function(e){return t(e)}})},queryCustomOrgByCondition:function(e,t){Base.submit(null,{url:s+"queryCustomOrgByCondition",data:e},{successCallback:function(e){return t(e)}})},queryCustomOrgTypeName:function(e,t){Base.submit(null,{url:s+"queryCustomOrgTypeName",data:e},{successCallback:function(e){return t(e)}})},queryCustomOrgTypeNameByCondition:function(e,t){Base.submit(null,{url:s+"queryCustomOrgTypeNameByCondition",data:e},{successCallback:function(e){return t(e)}})},queryCustomOrgByValidId:function(e,t){Base.submit(null,{url:s+"queryCustomOrgByValidId",data:e},{successCallback:function(e){return t(e)}})},deleteBatchCustomOrg:function(e,t){Base.submit(null,{url:s+"deleteBatchCustomOrg",data:e},{successCallback:function(e){return t(e)}})},updateBatchCustomOrgStatus:function(e,t){Base.submit(null,{url:s+"updateBatchCustomOrgStatus",data:e},{successCallback:function(e){return t(e)}})},addBatchCustomOrgUser:function(e,t){Base.submit(null,{url:s+"addBatchCustomOrgUser",data:e},{successCallback:function(e){return t(e)}})},deleteBatchCustomOrgUser:function(e,t){Base.submit(null,{url:s+"deleteBatchCustomOrgUser",data:e},{successCallback:function(e){return t(e)}})},addCustomOrg:function(e,t){Base.submit(null,{url:s+"addCustomOrg",data:e},{successCallback:function(e){return t(e)}})},updateCustomOrg:function(e,t){Base.submit(null,{url:s+"updateCustomOrg",data:e},{successCallback:function(e){return t(e)}})},queryAllTaOrg:function(e,t){Base.submit(null,{url:"org/orguser/orgManagementRestService/getOrgByAsync",data:e},{successCallback:function(e){return t(e)}})},queryOrgUser:function(e,t){Base.submit(null,{url:"org/orguser/userManagementRestService/queryUserByConditon",data:e},{successCallback:function(e){return t(e)}})},queryBatchUserByCustomOrgId:function(e,t){Base.submit(null,{url:s+"queryBatchUserByCustomOrgId",data:e},{successCallback:function(e){return t(e)}})},queryBatchUserByOrgId:function(e,t){Base.submit(null,{url:"org/orguser/userManagementRestService/queryEffectiveUser",data:e},{successCallback:function(e){return t(e)}})},deleteBatchCustomOrgTypeName:function(e,t){Base.submit(null,{url:s+"deleteBatchCustomOrgTypeName",data:e},{successCallback:function(e){return t(e)}})},addCustomOrgTypeName:function(e,t){Base.submit(null,{url:s+"addCustomOrgTypeName",data:e},{successCallback:function(e){return t(e)}})},updateCustomOrgTypeName:function(e,t){Base.submit(null,{url:s+"updateCustomOrgTypeName",data:e},{successCallback:function(e){return t(e)}})}}}}]);