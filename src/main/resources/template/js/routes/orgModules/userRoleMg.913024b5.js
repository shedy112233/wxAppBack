"use strict";(self["webpackChunkta404_ui_cli"]=self["webpackChunkta404_ui_cli"]||[]).push([[8013],{45450:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"fit",attrs:{id:"adminUserRoleMg"}},[a("ta-border-layout",{attrs:{layout:{header:"55px"},"center-cfg":{showBar:!0},"header-cfg":{showBorder:!1},showBorder:!1,"footer-cfg":{showBorder:!1}}},[a("template",{slot:"header"},[a("ta-breadcrumb",{staticStyle:{"line-height":"29px"},attrs:{separator:">"}},[a("ta-breadcrumb-item",[a("a",{on:{click:e.fnBack}},[e._v("人员维度")])]),a("ta-breadcrumb-item",[e._v("角色管理")])],1)],1),a("div",{attrs:{slot:"centerExtraContent"},slot:"centerExtraContent"},[a("ta-alert",{attrs:{message:"当前人员："+this.$route.query.name,type:"info",showIcon:""}})],1),a("ta-tabs",{staticClass:"fit"},[a("ta-tab-pane",{attrs:{tab:"人员下角色列表"}},[a("ta-table",{staticStyle:{"padding-top":"10px"},attrs:{columns:e.userRoleColumns,dataSource:e.roleData,size:"small",pagination:!1,rowSelection:{selectedRowKeys:e.selectedRolesKeys,onChange:e.onSelectRoleChange}},scopedSlots:e._u([{key:"roleSign",fn:function(t){return a("span",{},[e._v(e._s(e.CollectionLabel("ROLESIGN",t)))])}},{key:"namePath",fn:function(t){return a("span",{},[e._v(e._s(e.getLastName(t)))])}},{key:"action",fn:function(t,r){return a("span",{},[a("ta-table-operate",{attrs:{operateMenu:e.operateMenu}})],1)}}])}),a("ta-pagination",{ref:"gridPager",staticStyle:{float:"right","padding-top":"10px"},attrs:{showSizeChanger:"",showQuickJumper:"",dataSource:e.roleData,defaultPageSize:10,params:e.rolePageParams,url:e.adminUserRoleUrl},on:{"update:dataSource":function(t){e.roleData=t},"update:data-source":function(t){e.roleData=t}}})],1),a("template",{slot:"tabBarExtraContent"},[a("ta-button",{on:{click:e.fnBack}},[a("ta-icon",{attrs:{type:"rollback"}}),e._v("返回")],1),a("ta-button",{attrs:{type:"primary"},on:{click:e.fnAssociateRole}},[e._v("分配角色")]),a("ta-button",{on:{click:e.fnBatchDeleteUserRoles}},[e._v("批量移除")])],1)],2),a("ta-modal",{attrs:{centered:"",width:"1000px",bodyStyle:{height:"500px",padding:"0"},destroyOnClose:"",maskClosable:!1},model:{value:e.associateVisible,callback:function(t){e.associateVisible=t},expression:"associateVisible"}},[a("div",{staticStyle:{"text-align":"center"},attrs:{slot:"title"},slot:"title"},[e._v(" 给人员 ["+e._s(this.$route.query.name)+"] 分配审核角色 ")]),a("div",{staticStyle:{"text-align":"center"},attrs:{slot:"footer"},slot:"footer"},[a("ta-button",{on:{click:function(t){e.associateVisible=!1}}},[a("ta-icon",{attrs:{type:"rollback"}}),e._v("返回")],1),a("ta-button",{attrs:{type:"primary"},on:{click:e.fnSave}},[e._v("保存")])],1),a("ta-tabs",{staticClass:"fit"},[a("ta-tab-pane",{attrs:{tab:"可分配审核角色列表"}},[a("ta-table",{staticStyle:{width:"100%","padding-top":"10px"},attrs:{columns:e.roleColumns,dataSource:e.roleReData,size:"small",pagination:!1,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange}},scopedSlots:e._u([{key:"roleSign",fn:function(t){return a("span",{},[e._v(e._s(e.CollectionLabel("ROLESIGN",t)))])}}])}),a("ta-pagination",{ref:"modalGridPager",staticStyle:{float:"right","margin-top":"10px","padding-right":"10px"},attrs:{showSizeChanger:"",showQuickJumper:"",dataSource:e.roleReData,defaultPageSize:10,params:e.rolePageParams,url:e.adminUserModalRoleUrl},on:{"update:dataSource":function(t){e.roleReData=t},"update:data-source":function(t){e.roleReData=t}}})],1)],1)],1)],2)],1)},n=[],s=a(61109),o=[{title:"角色名称",dataIndex:"roleName",overflowTooltip:!0,width:"20%"},{title:"组织路径",overflowTooltip:!0,dataIndex:"namePath",scopedSlots:{customRender:"namePath"},width:"30%"},{title:"角色标识",dataIndex:"roleSign",width:"20%",scopedSlots:{customRender:"roleSign"}},{title:"角色描述",dataIndex:"roleDesc",width:"20%",overflowTooltip:!0},{title:"操作",dataIndex:"operation",width:"10%",scopedSlots:{customRender:"action"},align:"center"}],l=[{title:"角色名称",dataIndex:"roleName",overflowTooltip:!0,width:"20%"},{title:"组织路径",overflowTooltip:!0,dataIndex:"namePath",width:"30%"},{title:"角色标识",dataIndex:"roleSign",width:"20%",scopedSlots:{customRender:"roleSign"}},{title:"角色描述",dataIndex:"roleDesc",width:"30%",overflowTooltip:!0}],i={name:"adminUserRoleMg",data:function(){var e=this;return{adminUserRoleUrl:"org/authority/examinerAuthorityRestService/queryRoleByUserId",adminUserModalRoleUrl:"org/authority/examinerAuthorityRestService/queryNoWrapperRoleByUserId",userRoleColumns:o,operateMenu:[{name:"移除",type:"confirm",confirmTitle:"确认移除该审核角色吗?",onOk:function(t){e.fnAdminRecordDelete(t)}}],roleColumns:l,roleData:[],roleReData:[],associateVisible:!1,selectedRowKeys:[],selectedRoles:[],selectedRolesKeys:[],selectedCurrentRoles:[]}},methods:{getLastName:function(e){return e&&-1!=e.indexOf("/")?e.slice(e.lastIndexOf("/")+1):e},fnLoadDefaultAdminUserRoles:function(){this.$refs.gridPager.loadData()},fnAdminRecordDelete:function(e){var t=this,a={userId:this.$route.query.userId,roleIds:e.roleId};s.Z.deleteBatchUserRole(a,(function(e){t.$message.success("移除成功"),t.fnLoadDefaultAdminUserRoles()}))},fnBack:function(){this.$router.push({name:"userManagement"})},fnAssociateRole:function(){var e=this;this.associateVisible=!0,this.$nextTick((function(){e.$refs.modalGridPager.loadData()}))},rolePageParams:function(){return{userId:this.$route.query.userId}},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectedRoles=t},onSelectRoleChange:function(e,t){this.selectedRolesKeys=e,this.selectedCurrentRoles=t},fnSave:function(){var e=this;if(0!==this.selectedRoles.length){var t=this.selectedRoles.map((function(e){return e.roleId})),a={userId:this.$route.query.userId,roleIds:t.join(",")};s.Z.addBatchUserRole(a,(function(t){e.$message.success("分配角色成功"),e.fnLoadDefaultAdminUserRoles(),e.associateVisible=!1}))}else this.$message.warn("请先勾选要分配的角色")},fnBatchDeleteUserRoles:function(){var e=this;0!==this.selectedCurrentRoles.length?this.$confirm({title:"批量移除审核角色",content:"确认移除这些审核角色吗?",cancelText:"取消",okText:"确认",onOk:function(){var t=e.selectedCurrentRoles.map((function(e){return e.roleId})),a={userId:e.$route.query.userId,roleIds:t.join(",")};s.Z.deleteBatchUserRole(a,(function(t){e.$message.success("移除人员下角色成功"),e.fnLoadDefaultAdminUserRoles()}))}}):this.$message.warn("请先勾选要移除的角色")}},activated:function(){var e=this.$route.query;e.userId&&e.name?this.fnLoadDefaultAdminUserRoles():this.fnBack()}},u=i,c=a(1001),d=(0,c.Z)(u,r,n,!1,null,null,null),f=d.exports},61109:function(e,t){var a="/org/authority/examinerAuthorityRestService/";t.Z={queryUserNoWrapperByRoleId:function(e,t){var r=a+"queryUserNoWrapperByRoleId";Base.submit(null,{url:r,data:e},{successCallback:function(e){return t(e)}})},addExaminer:function(e,t){var r=a+"addExaminer";Base.submit(null,{url:r,data:e},{successCallback:function(e){return t(e)}})},updateExaminer:function(e,t){var r=a+"updateExaminer";Base.submit(null,{url:r,data:e},{successCallback:function(e){return t(e)}})},unableExaminer:function(e,t){var r=a+"unableExaminer";Base.submit(null,{url:r,data:e},{successCallback:function(e){return t(e)}})},enableExaminer:function(e,t){var r=a+"enableExaminer";Base.submit(null,{url:r,data:e},{successCallback:function(e){return t(e)}})},deleteBatchExaminer:function(e,t){var r=a+"deleteBatchExaminer";Base.submit(null,{url:r,data:e},{successCallback:function(e){return t(e)}})},queryOrgAuth:function(e,t){var r=a+"queryOrgAuth";Base.submit(null,{url:r,data:e},{successCallback:function(e){return t(e)}})},queryOrgAuthTreeByAsync:function(e,t){var r=a+"queryOrgAuthTreeByAsync";Base.submit(null,{url:r,data:e},{successCallback:function(e){return t(e)}})},queryOrgTreeByAsync:function(e,t){var r=a+"queryOrgTreeByAsync";Base.submit(null,{url:r,data:e},{successCallback:function(e){return t(e)}})},removeOrgAuth:function(e,t){var r=a+"removeOrgAuth";Base.submit(null,{url:r,data:e},{successCallback:function(e){return t(e)}})},addOrgAuth:function(e,t){var r=a+"addOrgAuth";Base.submit(null,{url:r,data:e},{successCallback:function(e){return t(e)}})},addBatchExaminerUser:function(e,t){var r=a+"addBatchRoleUser";Base.submit(null,{url:r,data:e},{successCallback:function(e){return t(e)}})},deleteBatchRoleUser:function(e,t){var r=a+"deleteBatchRoleUser";Base.submit(null,{url:r,data:e},{successCallback:function(e){return t(e)}})},deleteBatchUserRole:function(e,t){var r=a+"deleteBatchUserRole";Base.submit(null,{url:r,data:e},{successCallback:function(e){return t(e)}})},addBatchUserRole:function(e,t){var r=a+"addBatchUserRole";Base.submit(null,{url:r,data:e},{successCallback:function(e){return t(e)}})}}}}]);