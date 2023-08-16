"use strict";(self["webpackChunkta404_ui_cli"]=self["webpackChunkta404_ui_cli"]||[]).push([[1696],{91664:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"fit"},[a("ta-border-layout",{attrs:{layout:{header:"55px",footer:"70px"},"center-cfg":{showBar:!0},"header-cfg":{showBorder:!1},showBorder:!1,"footer-cfg":{showBorder:!1}}},[a("template",{slot:"header"},[a("ta-breadcrumb",{staticStyle:{"line-height":"29px"},attrs:{separator:">"}},[a("ta-breadcrumb-item",[a("a",{on:{click:e.fnBackToHome}},[e._v("角色维度")])]),a("ta-breadcrumb-item",[e._v("人员管理")])],1)],1),a("div",{attrs:{slot:"centerExtraContent"},slot:"centerExtraContent"},[a("ta-alert",{attrs:{message:"当前角色为："+this.$route.query.roleName,type:"info",showIcon:""}})],1),a("ta-tabs",{staticClass:"fit"},[a("div",{attrs:{slot:"tabBarExtraContent"},slot:"tabBarExtraContent"},[a("ta-button",{on:{click:e.fnBackToHome}},[a("ta-icon",{attrs:{type:"rollback"}}),e._v("返回")],1),a("ta-button",{attrs:{type:"primary"},on:{click:e.fnShowUserModal}},[e._v("分配人员")]),a("ta-button",{on:{click:e.fnBatchDeleteUser}},[e._v("批量移除")])],1),a("ta-tab-pane",{attrs:{tab:e.tabTitle}},[a("ta-table",{ref:"userRef",staticStyle:{"padding-top":"10px"},attrs:{columns:e.userColumns,dataSource:e.userData,pagination:!1,rowKey:"orgId",rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.fnOnChange}},scopedSlots:e._u([{key:"sex",fn:function(t){return[e._v(e._s(e.CollectionLabel("SEX",t)))]}},{key:"namePath",fn:function(t){return a("span",{},[e._v(e._s(e.getLastName(t)))])}},{key:"action",fn:function(t,r){return a("span",{},[a("ta-table-operate",{attrs:{operateMenu:e.operateMenu}})],1)}}])})],1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("ta-pagination",{ref:"adminUserPager",staticStyle:{float:"right","margin-top":"10px"},attrs:{showSizeChanger:"",showQuickJumper:"",dataSource:e.userData,defaultPageSize:10,params:e.adminUserParams,url:e.userPageUrl},on:{"update:dataSource":function(t){e.userData=t},"update:data-source":function(t){e.userData=t}}})],1)],2),a("ta-user-select",{attrs:{title:"新增审核角色",props:e.defaultProps,width:"800px","is-show":e.isShow,"user-tree-data":e.orgTreeData,id:"adminMg",load:e.loadOrgTreeNode,"user-list-data":e.userListData,"default-user-list":e.result,pagination:!0},on:{close:function(t){e.isShow=!1,e.userListData=[]},queryUserList:e.fnQueryUserList,getUserListResult:e.fnGetUserListResult}})],1)},n=[],s=a(89584),u=a(61109),o=[{title:"姓名",dataIndex:"name",width:"15%"},{title:"登录号",dataIndex:"loginId",width:"15%"},{title:"所属组织",dataIndex:"namePath",scopedSlots:{customRender:"namePath"},width:"20%"},{title:"证件号",dataIndex:"idCardNo",width:"20%"},{title:"性别",dataIndex:"sex",width:"10%",scopedSlots:{customRender:"sex"}},{title:"操作",align:"center",width:"20%",dataIndex:"action",scopedSlots:{customRender:"action"}}],i={name:"adminUserMg",data:function(){var e=this;return{item:{},tabTitle:"审核角色人员管理列表",userData:[],userColumns:o,operateMenu:[{name:"移除",type:"confirm",confirmTitle:"确定要移除该人员吗?",onOk:function(t){e.fnAdminUserDelete(t)}}],userPageUrl:"org/authority/adminAuthorityManagementRestService/queryUsersByRoleId",isShow:!1,orgTreeData:[],userListData:[],result:[],defaultProps:{treeNodeKey:"value",treeLabel:"label",treeChildren:"children",listKey:"userId",listTitle:"name",listSubTitle:"mobile",listDescription:"namePath"},roleId:"",selectedRows:[],selectedRowKeys:[]}},mounted:function(){this.item=this.$route.query,this.item.roleId?(this.roleId=this.item.roleId,this.fnLoadUserData(),this.initTableColumn(this.$refs.userRef,["sex","action"])):this.fnBackToHome()},computed:{rowSelection:function(){var e=this;return{onChange:function(t,a){e.selectedRows=a}}}},methods:{fnOnChange:function(e,t){this.selectedRowKeys=e,this.selectedRows=t},getLastName:function(e){return e&&-1!=e.indexOf("/")?e.slice(e.lastIndexOf("/")+1):e},fnAdminUserDelete:function(e){var t=this,a={roleId:this.roleId,userIds:e.userId};u.Z.deleteBatchRoleUser(a,(function(e){t.$message.success("移除人员成功"),t.fnLoadUserData()}))},initTableColumn:function(e,t){var a=(0,s.Z)(e.columns),r=a.map((function(e){if(t&&t.length>0)for(var a in t)if(e.dataIndex===t[a]||e.key===t[a])return e;return e.overflowTooltip=!0,e}));Object.assign(r,e.columns)},adminUserParams:function(){return{roleId:this.item.roleId}},fnLoadUserData:function(){this.$refs.adminUserPager.loadData()},fnBackToHome:function(){this.$router.push({name:"roleManagement"})},fnQueryUserList:function(e,t,a,r,n){var s=this,o={roleId:this.roleId,orgId:e,pageNumber:a,pageSize:10,includeChild:t?"1":"0"};r&&(o[r]=n),u.Z.queryUserNoWrapperByRoleId(o,(function(e){s.userListData=e.data.pageBean.list}))},fnGetUserListResult:function(e){var t=this,a=this.result.filter((function(t){var a=[];return e.forEach((function(e){a.push(e.userId)})),!a.includes(t.userId)})),r=e.filter((function(e){var a=[];return t.result.forEach((function(e){a.push(e.userId)})),!a.includes(e.userId)}));if(r.length>0){var n=[];r.forEach((function(e,t){n.push(e.userId)})),u.Z.addBatchExaminerUser({roleId:this.roleId,userIds:n.join(",")},(function(e){t.$message.success("关联人员成功"),t.isShow=!1,t.fnLoadUserData()}))}if(a.length>0){var s=[];a.forEach((function(e,t){s.push(e.userId)})),u.Z.deleteBatchRoleUser({roleId:this.roleId,userIds:s.join(",")},(function(e){t.$message.success("移除人员成功"),t.isShow=!1,t.fnLoadUserData()}))}},fnBatchDeleteUser:function(){var e=this;0!==this.selectedRows.length?this.$confirm({title:"移除人员",content:"确认移除这些人员吗?",cancelText:"取消",okText:"确认",onOk:function(){var t=e.selectedRows.map((function(e){return e.userId})),a={userIds:t.join(","),roleId:e.roleId};u.Z.deleteBatchRoleUser(a,(function(t){e.$message.success("移除成功"),e.fnLoadUserData()}))}}):this.$message.warning("请选择需要移除的人员")},fnShowUserModal:function(){this.isShow=!0},loadOrgTreeNode:function(e,t){if(0===e.level&&u.Z.queryOrgTreeByAsync(null,(function(e){var a=e.data.orgVos;if(a[0].children){var r=a[0].children.map((function(e){var t=e;e.childNum>0&&(t.children=[])}));a[0].children=r}return t(a)})),e.level>=1){var a=e.data.orgId,r=e.data.isLeaf,n={orgId:a};u.Z.queryOrgTreeByAsync(n,(function(e){var a=e.data.orgVos;return r&&(a=a.map((function(e){var t=e;t.children=[]}))),t(a)}))}}}},l=i,c=a(1001),d=(0,c.Z)(l,r,n,!1,null,null,null),f=d.exports},61109:function(e,t){var a="/org/authority/examinerAuthorityRestService/";t.Z={queryUserNoWrapperByRoleId:function(e,t){var r=a+"queryUserNoWrapperByRoleId";Base.submit(null,{url:r,data:e},{successCallback:function(e){return t(e)}})},addExaminer:function(e,t){var r=a+"addExaminer";Base.submit(null,{url:r,data:e},{successCallback:function(e){return t(e)}})},updateExaminer:function(e,t){var r=a+"updateExaminer";Base.submit(null,{url:r,data:e},{successCallback:function(e){return t(e)}})},unableExaminer:function(e,t){var r=a+"unableExaminer";Base.submit(null,{url:r,data:e},{successCallback:function(e){return t(e)}})},enableExaminer:function(e,t){var r=a+"enableExaminer";Base.submit(null,{url:r,data:e},{successCallback:function(e){return t(e)}})},deleteBatchExaminer:function(e,t){var r=a+"deleteBatchExaminer";Base.submit(null,{url:r,data:e},{successCallback:function(e){return t(e)}})},queryOrgAuth:function(e,t){var r=a+"queryOrgAuth";Base.submit(null,{url:r,data:e},{successCallback:function(e){return t(e)}})},queryOrgAuthTreeByAsync:function(e,t){var r=a+"queryOrgAuthTreeByAsync";Base.submit(null,{url:r,data:e},{successCallback:function(e){return t(e)}})},queryOrgTreeByAsync:function(e,t){var r=a+"queryOrgTreeByAsync";Base.submit(null,{url:r,data:e},{successCallback:function(e){return t(e)}})},removeOrgAuth:function(e,t){var r=a+"removeOrgAuth";Base.submit(null,{url:r,data:e},{successCallback:function(e){return t(e)}})},addOrgAuth:function(e,t){var r=a+"addOrgAuth";Base.submit(null,{url:r,data:e},{successCallback:function(e){return t(e)}})},addBatchExaminerUser:function(e,t){var r=a+"addBatchRoleUser";Base.submit(null,{url:r,data:e},{successCallback:function(e){return t(e)}})},deleteBatchRoleUser:function(e,t){var r=a+"deleteBatchRoleUser";Base.submit(null,{url:r,data:e},{successCallback:function(e){return t(e)}})},deleteBatchUserRole:function(e,t){var r=a+"deleteBatchUserRole";Base.submit(null,{url:r,data:e},{successCallback:function(e){return t(e)}})},addBatchUserRole:function(e,t){var r=a+"addBatchUserRole";Base.submit(null,{url:r,data:e},{successCallback:function(e){return t(e)}})}}}}]);