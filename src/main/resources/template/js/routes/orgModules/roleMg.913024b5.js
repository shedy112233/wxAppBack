"use strict";(self["webpackChunkta404_ui_cli"]=self["webpackChunkta404_ui_cli"]||[]).push([[6102],{87984:function(e,t,s){s.r(t),s.d(t,{default:function(){return d}});var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"fit",attrs:{id:"roleMg"}},[s("ta-border-layout",{attrs:{layout:{header:"70px",footer:"70px"},"footer-cfg":{showBorder:!1}}},[s("div",{staticClass:"center-box",attrs:{slot:"header"},slot:"header"},[s("ta-breadcrumb",{staticStyle:{"line-height":"42px",float:"left"},attrs:{separator:">"}},[s("ta-breadcrumb-item",[s("a",{on:{click:e.fnBack}},[e._v("人员维度")])]),s("ta-breadcrumb-item",[e._v("角色管理")])],1),s("div",{staticClass:"divider"}),s("ta-alert",{staticClass:"notice-box",attrs:{message:"当前人员为："+e.currentUser.name,type:"info","show-icon":""}})],1),s("ta-tabs",{staticClass:"fit content-box"},[s("ta-tab-pane",{attrs:{tab:"人员下角色"}},[s("ta-table",{attrs:{columns:e.roleColumns,"data-source":e.roleData,pagination:!1,"row-selection":{selectedRowKeys:e.selectedRolesKeys,onChange:e.onSelectRoleChange}},scopedSlots:e._u([{key:"roleSign",fn:function(t){return s("span",{},[e._v(e._s(e.CollectionLabel("ROLESIGN",t)))])}},{key:"effective",fn:function(t){return s("span",{},[e._v(e._s(e.CollectionLabel("STATE",t)))])}}])})],1),s("template",{slot:"tabBarExtraContent"},[s("ta-button",{on:{click:e.fnBack}},[s("ta-icon",{attrs:{type:"rollback"}}),e._v(" 返回 ")],1),s("ta-button",{attrs:{type:"primary"},on:{click:e.fnAssociateRole}},[e._v(" 分配角色 ")]),s("ta-popconfirm",{attrs:{title:"确认删除选择的角色？","ok-text":"确定","cancel-text":"取消"},on:{confirm:e.fnDelete}},[s("ta-button",[e._v("批量移除")])],1)],1)],2),s("div",{attrs:{slot:"footer"},slot:"footer"},[s("ta-pagination",{ref:"gridPager",staticStyle:{float:"right","margin-top":"10px"},attrs:{"show-size-changer":"","show-quick-jumper":"","data-source":e.roleData,"default-page-size":10,params:e.rolePageParams,url:"org/authority/roleAuthorityManagementRestService/queryRolesByUserId"},on:{"update:dataSource":function(t){e.roleData=t},"update:data-source":function(t){e.roleData=t}}})],1)],1),s("ta-modal",{attrs:{title:"分配角色",width:"1000px",height:500,"body-style":{padding:"10px"},"destroy-on-close":!0,"mask-closable":!1,"get-container":e.setContainer},on:{ok:e.fnSave,cancel:e.fnCancel},model:{value:e.associateVisible,callback:function(t){e.associateVisible=t},expression:"associateVisible"}},[s("ta-border-layout",{attrs:{layout:{footer:"70px"},"show-border":!1,"footer-cfg":{showBorder:!1}}},[s("ta-table",{attrs:{columns:e.roleColumns,"data-source":e.roleReData,pagination:!1,"row-selection":{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange}},scopedSlots:e._u([{key:"roleSign",fn:function(t){return s("span",{},[e._v(e._s(e.CollectionLabel("ROLESIGN",t)))])}},{key:"effective",fn:function(t){return s("span",{},[e._v(e._s(e.CollectionLabel("STATE",t)))])}}])}),s("div",{attrs:{slot:"footer"},slot:"footer"},[s("ta-pagination",{ref:"modalGridPager",staticStyle:{float:"right","margin-top":"20px"},attrs:{"show-size-changer":"","show-quick-jumper":"","data-source":e.roleReData,"default-page-size":10,params:e.rolePageParams,url:"org/authority/roleAuthorityManagementRestService/queryNoWrapperRolesByUserId"},on:{"update:dataSource":function(t){e.roleReData=t},"update:data-source":function(t){e.roleReData=t}}})],1)],1)],1)],1)},n=[],o=s(46981),r=[{title:"角色名称",dataIndex:"roleName",width:"20%",overflowTooltip:!0},{title:"组织路径",dataIndex:"namePath",width:"20%",overflowTooltip:"namePath",customRender:function(e){return e.slice(e.lastIndexOf("/")+1)}},{title:"有效期",dataIndex:"effectiveTime",width:"15%",customRender:function(e){return e?e.split(" ")[0]:"永久"}},{title:"角色标识",dataIndex:"roleSign",width:"10%",scopedSlots:{customRender:"roleSign"}},{title:"角色描述",dataIndex:"roleDesc",width:"10%",overflowTooltip:!0},{title:"该角色是否对子组织管理员可见",dataIndex:"subordinate",width:"15%",customRender:function(e){return"1"===e||1===e?"是":"否"},align:"center"},{title:"状态",dataIndex:"effective",width:"10%",yesOrNoTag:!0,scopedSlots:{customRender:"effective"}}],u={name:"roleMg",data:function(){return{currentUser:{},roleColumns:r,roleData:[],roleReData:[],associateVisible:!1,selectedRowKeys:[],selectedRoles:[],selectedRolesKeys:[],selectedCurrentRoles:[]}},activated:function(){this.$route.params.user instanceof Object?(this.currentUser=this.$route.params.user,this.$refs.gridPager.loadData()):this.$router.push({name:"publicRoleManager"})},methods:{setContainer:function(){return document.getElementById("roleMg")},fnBack:function(){this.$router.push({name:"userRole"})},fnAssociateRole:function(){var e=this;this.associateVisible=!0,this.$nextTick((function(){e.$refs.modalGridPager.loadData()}))},rolePageParams:function(){return{userId:this.currentUser.userId}},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectedRoles=t},onSelectRoleChange:function(e,t){this.selectedRolesKeys=e,this.selectedCurrentRoles=t},fnSave:function(){var e=this,t=[];this.selectedRoles.forEach((function(e,s){t.push(e.roleId)})),o.Z.addBatchUserRole({userId:this.currentUser.userId,roleIds:t.join(",")},(function(t){e.$message.success("分配权限成功"),e.$refs.gridPager.loadData(),e.associateVisible=!1})),this.selectedRowKeys=[],this.selectedRoles=[]},fnCancel:function(){this.selectedRowKeys=[],this.selectedRoles=[]},fnDelete:function(){var e=this;if(this.selectedCurrentRoles.length<1)this.$message.warn("请先勾选要删除的角色");else{var t=[];this.selectedCurrentRoles.forEach((function(e,s){t.push(e.roleId)})),o.Z.deleteBatchUserRole({userId:this.currentUser.userId,roleIds:t.join(",")},(function(t){e.$message.success("删除人员下角色成功"),e.$refs.gridPager.loadData((function(t){e.selectedRolesKeys=[]}))}))}}}},l=u,c=s(1001),i=(0,c.Z)(l,a,n,!1,null,"429889f0",null),d=i.exports},46981:function(e,t){var s="org/authority/roleAuthorityManagementRestService/";t.Z={queryCurrentAdminRoleWrapeOrgTree:function(e,t){Base.submit(null,{url:s+"queryCurrentAdminRoleWrapeOrgTree",data:e,showPageLoading:!1},{successCallback:function(e){return t(e)}})},queryRolesByOrgId:function(e,t){Base.submit(null,{url:s+"queryRolesByOrgId",data:e},{successCallback:function(e){return t(e)}})},queryAuthRole:function(e,t){Base.submit(null,{url:s+"queryAuthRole",data:e},{successCallback:function(e){return t(e)}})},copyResource:function(e,t,a){Base.submit(e,{url:s+"copyResource",data:t,autoValid:!0},{successCallback:function(e){return a(e)}}).then((function(e){})).catch((function(e){}))},queryUsePermissionByRoleId:function(e,t){Base.submit(null,{url:s+"queryUsePermissionByRoleId",data:e},{successCallback:function(e){return t(e)}})},queryCustomUsePermissionByRoleId:function(e,t){Base.submit(null,{url:s+"queryCustomUsePermissionByRoleId",data:e},{successCallback:function(e){return t(e)}})},copyRole:function(e,t,a){Base.submit(e,{url:s+"copyRole",data:t,autoValid:!0},{successCallback:function(e){return a(e)}}).then((function(e){})).catch((function(e){}))},queryRePermission:function(e,t){Base.submit(null,{url:s+"queryRePermission",data:e},{successCallback:function(e){return t(e)}})},queryCustomRePermission:function(e,t){Base.submit(null,{url:s+"queryCustomRePermission",data:e},{successCallback:function(e){return t(e)}})},addBatchUsePermissionByMoreRole:function(e,t){Base.submit(null,{url:s+"addBatchUsePermissionByMoreRole",data:e},{successCallback:function(e){return t(e)}})},deleteBatchUsePermissionByMoreRole:function(e,t){Base.submit(null,{url:s+"deleteBatchUsePermissionByMoreRole",data:e},{successCallback:function(e){return t(e)}})},addRole:function(e,t,a){Base.submit(e,{url:s+"addRole",data:t,autoValid:!0},{successCallback:function(e){return a(e)}}).then((function(e){})).catch((function(e){}))},updateRoleByRoleId:function(e,t,a){Base.submit(null,{url:s+"updateRoleByRoleId",data:t,autoValid:!0},{successCallback:function(e){return a(e)}}).then((function(e){})).catch((function(e){}))},updateBatchUsePermissionEffectiveTime:function(e,t){Base.submit(null,{url:s+"updateBatchUsePermissionEffectiveTime",data:e},{successCallback:function(e){return t(e)}})},updateUsePermissionEffectiveTime:function(e,t){Base.submit(null,{url:s+"updateUsePermissionEffectiveTime",data:e},{successCallback:function(e){return t(e)}})},addUsePermission:function(e,t){Base.submit(null,{url:s+"addUsePermission",data:e},{successCallback:function(e){return t(e)}})},changeRestAuthority:function(e,t){Base.submit(null,{url:s+"changeRestAuthority",data:e},{successCallback:function(e){return t(e)}})},queryRePermissionByRoleId:function(e,t){Base.submit(null,{url:s+"queryRePermissionByRoleId",data:e},{successCallback:function(e){return t(e)}})},updateBatchCustomResourceUsePermissionEffectiveTime:function(e,t){Base.submit(null,{url:s+"updateBatchCustomResourceUsePermissionEffectiveTime",data:e},{successCallback:function(e){return t(e)}})},updateCustomResourceUsePermissionEffectiveTime:function(e,t){Base.submit(null,{url:s+"updateCustomResourceUsePermissionEffectiveTime",data:e},{successCallback:function(e){return t(e)}})},queryCustomRePermissionByRoleId:function(e,t){Base.submit(null,{url:s+"queryCustomRePermissionByRoleId",data:e},{successCallback:function(e){return t(e)}})},addCustomResourceUsePermission:function(e,t){Base.submit(null,{url:s+"addCustomResourceUsePermission",data:e},{successCallback:function(e){return t(e)}})},updateRoleEffectiveByRoleId:function(e,t){Base.submit(null,{url:s+"updateRoleEffectiveByRoleId",data:e},{successCallback:function(e){return t(e)}})},deleteBatchRole:function(e,t){Base.submit(null,{url:s+"deleteBatchRole",data:e},{successCallback:function(e){return t(e)}})},deleteRoleUserByKey:function(e,t){Base.submit(null,{url:s+"deleteRoleUserByKey",data:e},{successCallback:function(e){return t(e)}})},deleteBatchRoleUsers:function(e,t){Base.submit(null,{url:s+"deleteBatchRoleUser",data:e},{successCallback:function(e){return t(e)}})},queryUsersByRoleId:function(e,t){Base.submit(null,{url:s+"queryUsersByRoleId",data:e},{successCallback:function(e){return t(e)}})},queryUsersByRoleIdNoPage:function(e,t){Base.submit(null,{url:s+"queryUsersByRoleIdNoPage",data:e},{successCallback:function(e){return t(e)}})},queryUsersNoWraperByRoleId:function(e,t){Base.submit(null,{url:s+"queryUsersNoWraperByRoleId",data:e},{successCallback:function(e){return t(e)}})},queryUsersNoWraperByRoleIdNoPage:function(e,t){Base.submit(null,{url:s+"queryUsersNoWraperByRoleIdNoPage",data:e},{successCallback:function(e){return t(e)}})},addBatchRoleUsers:function(e,t,a){Base.submit(null,{url:s+"addBatchRoleUsers",data:e,showPageLoading:!1},{successCallback:function(e){return t(e)},failCallback:function(e){return a(e)}})},deleteBatchRoleUser:function(e,t,a){Base.submit(null,{url:s+"deleteBatchRoleUser",data:e,showPageLoading:!1},{successCallback:function(e){return t(e)},failCallback:function(e){return a(e)}})},addBatchUserRole:function(e,t){Base.submit(null,{url:s+"addBatchUserRole",data:e},{successCallback:function(e){return t(e)}})},deleteBatchUserRole:function(e,t){Base.submit(null,{url:s+"deleteBatchUserRole",data:e},{successCallback:function(e){return t(e)}})},queryCustomRePermissionAsync:function(e,t){Base.submit(null,{url:s+"queryCustomRePermissionAsync",data:e},{successCallback:function(e){return t(e)}})},addAllRoleUsersByOrgId:function(e,t){Base.submit(null,{url:s+"addAllRoleUsersByOrgId",data:e},{successCallback:function(e){return t(e)}})}}}}]);