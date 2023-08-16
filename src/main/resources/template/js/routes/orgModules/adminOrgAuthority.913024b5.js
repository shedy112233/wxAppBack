"use strict";(self["webpackChunkta404_ui_cli"]=self["webpackChunkta404_ui_cli"]||[]).push([[7502],{86203:function(e,t,a){a.r(t),a.d(t,{default:function(){return B}});var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"fit"},[a("ta-border-layout",{attrs:{layout:{header:"70px"}}},[a("div",{staticStyle:{"text-align":"center",overflow:"hidden"},attrs:{slot:"header"},slot:"header"},[a("ta-breadcrumb",{staticStyle:{"line-height":"42px",float:"left"},attrs:{separator:">"}},[a("ta-breadcrumb-item",[a("a",{on:{click:e.fnBackToHome}},[e._v("角色维度")])]),a("ta-breadcrumb-item",[e._v("组织范围权限")])],1),a("div",{staticClass:"divider-header"}),a("ta-alert",{staticStyle:{float:"left","margin-top":"2px"},attrs:{message:"当前角色为："+this.$route.query.roleName,type:"info","show-icon":""}})],1),a("ta-tabs",{staticClass:"fit"},[a("ta-tab-pane",{attrs:{tab:"组织范围权限"}},[a("ta-row",{staticStyle:{width:"100%","padding-top":"10px"}},[a("ta-col",{attrs:{span:e.row.col.span}},[a("ta-table",{attrs:{columns:e.orgColumns,"data-source":e.orgData,pagination:!1,"row-key":"orgId","default-expanded-row-keys":e.defaultExpandedRowKeys},scopedSlots:e._u([{key:"customOrgNameTitle",fn:function(t,s){return["1"!=s.effective?a("span",{staticStyle:{"text-decoration":"line-through red 3px",color:"gray"}},[a("span",[e._v(e._s(t))])]):a("span",[e._v(e._s(t))])]}},{key:"effecttime",fn:function(t,s){return[1==s.isAuthority?a("span",[e._v(" "+e._s(null==s.effectTime?"永久":e.moment(s.effectTime).format("YYYY-MM-DD"))+" ")]):a("span",[e._v("--")])]}},{key:"action",fn:function(t){return a("span",{},[a("ta-table-operate",{attrs:{"operate-menu":e.operateMenu}})],1)}}])})],1)],1)],1),a("template",{slot:"tabBarExtraContent"},[a("ta-button",{on:{click:e.fnBackToHome}},[a("ta-icon",{attrs:{type:"rollback"}}),e._v("返回 ")],1),a("ta-button",{attrs:{type:"primary"},on:{click:e.fnShowModal}},[e._v(" 组织权限管理 ")])],1)],2)],1),a("ta-modal",{attrs:{visible:e.authority.visible,centered:!0,"destroy-on-close":!0,width:e.authority.width,footer:null,"body-style":{height:"500px"}},on:{cancel:function(t){e.authority.visible=!1}}},[a("template",{slot:"title"},[a("div",{staticStyle:{"text-align":"center"}},[e._v(" 组织权限管理 ")])]),a("admin-authority-mg",{attrs:{item:e.item},on:{modalCancel:e.fnReLoadAuthority}})],2)],1)},n=[],r=a(16158),u=a(36797),i=a.n(u),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("ta-row",[a("ta-col",{attrs:{span:e.row.col.fullSpan}},[a("span",{staticClass:"title"},[e._v("组织权限")]),a("div",{staticClass:"modalTreeStyle"},[a("ta-e-tree",{ref:"tree",attrs:{data:e.treeData,load:e.loadData,"show-checkbox":"","highlight-current":"","check-strictly":"","node-key":"orgId",props:e.defaultProps,lazy:""},on:{"check-change":e.handleCheckNodeChange},scopedSlots:e._u([{key:"default",fn:function(t){t.node;var s=t.data;return a("span",{staticClass:"custom-tree-node"},[e._v(" "+e._s(s.orgName)+" "),"0"===s.isAuthority?a("span",[a("span",{staticStyle:{float:"right",color:"#ccc","font-size":"12px",cursor:"not-allowed"}},[e._v("无操作权限")])]):e._e(),s.disabled?a("span",[a("span",{staticStyle:{float:"right",color:"#ccc","font-size":"12px"}},[e._v("该组织已选择")])]):e._e()])}}])})],1)])],1),a("ta-row",[a("ta-col",[a("div",{staticClass:"ant-modal-footer",staticStyle:{"text-align":"center"}},[a("ta-button",{on:{click:function(t){return e.$emit("modalCancel")}}},[a("ta-icon",{attrs:{type:"rollback"}}),e._v("返回")],1),a("ta-button",{attrs:{type:"primary"},on:{click:e.fnSaveOrUpdate}},[e._v("保存")])],1)])],1)],1)},c=[],l={name:"adminAuthorityMg",props:["item"],data:function(){return{roleId:"",adminFilterText:"",treeData:[],defaultProps:{id:"orgId",label:"orgName",isLeaf:"isLeaf"},row:{col:{span:12,fullSpan:24}}}},watch:{adminFilterText:function(e){}},created:function(){this.roleId=this.item.roleId},methods:{handleCheckNodeChange:function(e,t,a){var s=this.$refs.tree.getCheckedKeys();if(t){if("0"===e.isAuthority)return this.$message.warning("您没有该组织的操作权限"),void this.$refs.tree.setChecked(e,!1);if(s.length>=2)for(var n=0;n<s.length;n++)s[n]!==e.orgId&&this.$refs.tree.setChecked(s[n],!1,!1)}},loadData:function(e,t){if(0==e.level){var a={roleId:this.roleId};r.Z.selectPermissionOrgScope(a,(function(e){return t(e.data.adminOrgScope)}))}if(e.level>=1){var s=e.data.orgId,n={orgId:s,roleId:this.roleId};r.Z.selectPermissionOrgScope(n,(function(a){var s=a.data.adminOrgScope;if(s[0].children&&s[0].children instanceof Array&&s[0].children.length>0){var n=s[0].children;if(e.data.disabled){var r=n.map((function(e){return e.disabled=!0,e}));return t(r)}return t(n)}}))}},fnSelectPermissionOrgScope:function(e){var t=this,a={roleId:e};r.Z.selectPermissionOrgScope(a,(function(e){t.treeData=e.data.adminOrgScope}))},fnSaveOrUpdate:function(){var e=this,t=this.$refs.tree.getCheckedNodes();if(t.length<1)this.$message.warning("请选择组织",2.5);else{var a=t[0],s={roleId:this.roleId,orgId:a.orgId,idPath:a.idPath};r.Z.addOrgPermission(s,(function(t){e.$message.success("保存数据成功"),e.$emit("modalCancel")}))}}}},d=l,f=a(1001),m=(0,f.Z)(d,o,c,!1,null,"19445dcc",null),h=m.exports,y=[{title:"组织名称",dataIndex:"orgName",scopedSlots:{customRender:"customOrgNameTitle"}},{title:"有效期",scopedSlots:{customRender:"effecttime"}},{title:"组织路径",dataIndex:"namePath"},{title:"操作",align:"center",scopedSlots:{customRender:"action"}}],b={name:"adminOrgAuthority",components:{adminAuthorityMg:h},data:function(){var e=this;return{row:{col:{span:24}},authority:{visible:!1,width:"500px"},item:{},orgColumns:y,operateMenu:[{name:"删除",type:"confirm",confirmTitle:"确定要移除该管理员的组织权限及其所有子权限吗?",onOk:function(t){e.fnAdminOrgDelete(t)}}],orgData:[],roleId:"",defaultExpandedRowKeys:[]}},activated:function(){this.item=this.$route.query,this.item.roleId?this.fnLoadDefault():this.fnBackToHome()},methods:{moment:i(),fnReLoadAuthority:function(){var e=this;e.authority.visible=!1,e.fnLoadDefault()},fnBackToHome:function(){this.$router.push({name:"adminRoleManagement"})},fnShowModal:function(){var e=this;e.authority.visible=!0},fnLoadDefault:function(){var e=this,t=e.item;e.roleId=t.roleId;var a={roleId:e.roleId};r.Z.queryOrgPermission(a,(function(t){e.orgData=t.data.orgScopeList}))},fnAdminOrgDelete:function(e){var t=this,a={roleId:t.roleId,orgId:e.orgId};r.Z.removeOrgPermission(a,(function(e){t.$message.success("删除成功"),t.fnLoadDefault()}))}}},p=b,g=(0,f.Z)(p,s,n,!1,null,"518cd6a6",null),B=g.exports},16158:function(e,t){var a="/org/authority/adminAuthorityManagementRestService/";t.Z={queryUsersByRoleId:function(e,t){Base.submit(null,{url:a+"queryUsersByRoleId",data:e},{successCallback:function(e){return t(e)}})},queryUsersByRoleIdNoPage:function(e,t){Base.submit(null,{url:a+"queryUsersByRoleIdNoPage",data:e},{successCallback:function(e){return t(e)}})},addBatchAdminUser:function(e,t){Base.submit(null,{url:a+"addBatchRoleUsers",data:e},{successCallback:function(e){return t(e)}})},deleteBatchAdmin:function(e,t){Base.submit(null,{url:a+"deleteBatchRole",data:e},{successCallback:function(e){return t(e)}})},queryAllTaOrg:function(e,t){Base.submit(null,{url:a+"queryCurrentAdminRoleWrapOrgTree",data:e},{successCallback:function(e){return t(e)}})},deleteRoleUserByKey:function(e,t){Base.submit(null,{url:a+"deleteRoleUserByKey",data:e},{successCallback:function(e){return t(e)}})},deleteBatchRoleUsers:function(e,t){Base.submit(null,{url:a+"deleteBatchRoleUsers",data:e},{successCallback:function(e){return t(e)}})},queryBatchUserByOrgId:function(e,t){Base.submit(null,{url:a+"queryUsersNoWraperByRoleId",data:e},{successCallback:function(e){return t(e)}})},queryBatchUserByOrgIdNoPage:function(e,t){Base.submit(null,{url:a+"queryUsersNoWraperByRoleIdNoPage",data:e},{successCallback:function(e){return t(e)}})},queryOrgPermission:function(e,t){Base.submit(null,{url:a+"selectOrgScope",data:e},{successCallback:function(e){return t(e)}})},removeOrgPermission:function(e,t){Base.submit(null,{url:a+"removeOrgScope",data:e},{successCallback:function(e){return t(e)}})},selectPermissionOrgScope:function(e,t){Base.submit(null,{url:a+"selectPermissionOrgScope",data:e},{successCallback:function(e){return t(e)}})},addOrgPermission:function(e,t){Base.submit(null,{url:a+"saveOrgScope",data:e},{successCallback:function(e){return t(e)}})},queryBatchPermissionTreeData:function(e,t){Base.submit(null,{url:a+"queryBatchPermissionTreeData",data:e},{successCallback:function(e){return t(e)}})},batchChangeAdminPermission:function(e,t){Base.submit(null,{url:a+"batchChangeAdminPermission",data:e},{successCallback:function(e){return t(e)}})},addAdminRole:function(e,t){Base.submit(null,{url:a+"addAdminRole",data:e},{successCallback:function(e){return t(e)}})},updateAdmin:function(e,t){Base.submit(null,{url:a+"updateAdmin",data:e},{successCallback:function(e){return t(e)}})},updateBatchAdminStatus:function(e,t){Base.submit(null,{url:a+"updateRoleEffectiveByRoleId",data:e},{successCallback:function(e){return t(e)}})},queryUseSysPermission:function(e,t){Base.submit(null,{url:a+"queryRootResource",data:e},{successCallback:function(e){return t(e)}})},queryUsePermissionByResourceId:function(e,t){Base.submit(null,{url:a+"queryChildResourceByRoleId",data:e},{successCallback:function(e){return t(e)}})},saveAdminUsePermission:function(e,t){Base.submit(null,{url:a+"changeResourceUsePermission",data:e},{successCallback:function(e){return t(e)}})},updateAdminUsePermissionEffectiveTime:function(e,t){Base.submit(null,{url:a+"updateUsePermissionEffectiveTime",data:e},{successCallback:function(e){return t(e)}})},saveBatchAdminUsePermissionEffectiveTime:function(e,t){Base.submit(null,{url:a+"updateBatchUsePermissionEffectiveTime",data:e},{successCallback:function(e){return t(e)}})},queryObjectUseSysPermission:function(e,t){Base.submit(null,{url:a+"queryRootCustomResource",data:e},{successCallback:function(e){return t(e)}})},queryObjectUsePermissionByResourceId:function(e,t){Base.submit(null,{url:a+"queryChildCustomResourceByRoleId",data:e},{successCallback:function(e){return t(e)}})},saveAdminObjectUsePermission:function(e,t){Base.submit(null,{url:a+"changeCustomResourceUsePermission",data:e},{successCallback:function(e){return t(e)}})},updateAdminObjectUsePermissionEffectiveTime:function(e,t){Base.submit(null,{url:a+"updateCustomResourceUsePermissionEffectiveTime",data:e},{successCallback:function(e){return t(e)}})},updateBatchAdminObjectUsePermissionEffectiveTime:function(e,t){Base.submit(null,{url:a+"updateBatchCustomResourceUsePermissionEffectiveTime",data:e},{successCallback:function(e){return t(e)}})},queryGrantSysPermission:function(e,t){Base.submit(null,{url:a+"queryRootResourceAuthority",data:e},{successCallback:function(e){return t(e)}})},queryGrantPermissionByResourceId:function(e,t){Base.submit(null,{url:a+"queryChildResourceAuthorityByRoleId",data:e},{successCallback:function(e){return t(e)}})},saveAdminGrantPermission:function(e,t){Base.submit(null,{url:a+"changeResourceAuthority",data:e},{successCallback:function(e){return t(e)}})},queryObjectGrantSysPermission:function(e,t){Base.submit(null,{url:a+"queryRootCustomResourceAuthority",data:e},{successCallback:function(e){return t(e)}})},queryObjectGrantPermissionByResourceId:function(e,t){Base.submit(null,{url:a+"queryChildCustomResourceAuthorityByRoleId",data:e},{successCallback:function(e){return t(e)}})},saveAdminObjectGrantPermission:function(e,t){Base.submit(null,{url:a+"changeCustomResourceAuthority",data:e},{successCallback:function(e){return t(e)}})},addBatchUserRole:function(e,t){Base.submit(null,{url:a+"addBatchUserRole",data:e},{successCallback:function(e){return t(e)}})},deleteBatchUserRole:function(e,t){Base.submit(null,{url:a+"deleteBatchUserRole",data:e},{successCallback:function(e){return t(e)}})},queryChildCustomResourceAsync:function(e,t){Base.submit(null,{url:a+"queryChildCustomResourceAsync",data:e},{successCallback:function(e){return t(e)}})},addAllRoleUsersByOrgId:function(e,t){Base.submit(null,{url:a+"addAllRoleUsersByOrgId",data:e},{successCallback:function(e){return t(e)}})}}}}]);