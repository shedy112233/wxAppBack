"use strict";(self["webpackChunkta404_ui_cli"]=self["webpackChunkta404_ui_cli"]||[]).push([[8158],{88368:function(e,t,s){s.r(t),s.d(t,{default:function(){return f}});var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"fit"},[s("ta-border-layout",{attrs:{layout:{header:"70px"},"show-border":!0}},[s("div",{staticStyle:{"text-align":"center",overflow:"hidden"},attrs:{slot:"header"},slot:"header"},[s("ta-breadcrumb",{staticStyle:{"line-height":"42px",float:"left"},attrs:{separator:">"}},[s("ta-breadcrumb-item",[s("a",{on:{click:e.fnBackToHome}},[e._v("角色维度")])]),s("ta-breadcrumb-item",[e._v("授权权限")])],1),s("div",{staticClass:"divider-header"}),s("ta-alert",{staticStyle:{float:"left","margin-top":"2px"},attrs:{message:"当前角色为："+this.$route.query.roleName,type:"info","show-icon":""}})],1),s("ta-tabs",{staticClass:"fit content-box"},[s("ta-tab-pane",{attrs:{tab:"授权权限&&再授权权限"}},[s("ta-row",{staticClass:"fit"},[s("ta-col",{staticClass:"fit authority-box",staticStyle:{"border-right":"1px solid #eee"},attrs:{span:4}},[s("admin-left-menu",{attrs:{title:"授权权限一级菜单",data:e.menuData,"selected-keys":e.menuSelectedKeys},on:{click:e.onSelectMenu}})],1),s("ta-col",{staticClass:"fit authority-box",staticStyle:{padding:"5px","border-left":"1px solid #eee"},attrs:{span:20}},[s("ta-row",{staticClass:"fit",attrs:{gutter:10}},[s("ta-col",{attrs:{span:11}},[s("span",{staticStyle:{"font-weight":"bold"}},[e._v("授权权限:")]),s("div",{staticStyle:{padding:"10px 0"}},[s("ta-input",{staticStyle:{width:"250px"},attrs:{placeholder:"输入关键字进行过滤"},model:{value:e.leftFilterText,callback:function(t){e.leftFilterText=t},expression:"leftFilterText"}})],1),s("ta-e-tree",{ref:"tree",attrs:{data:e.adminGrantTree,"show-checkbox":"","node-key":"resourceId","highlight-current":"",props:e.defaultProps,"filter-node-method":e.filterNode,"default-checked-keys":e.leftDefaultKeys,"default-expand-all":""},on:{check:e.fnCheckLeftTree}})],1),s("ta-col",{attrs:{span:11}},[s("span",{staticStyle:{"font-weight":"bold"}},[e._v("再授权权限:")]),s("div",{staticStyle:{padding:"10px 0"}},[s("ta-input",{staticStyle:{width:"250px"},attrs:{placeholder:"输入关键字进行过滤"},model:{value:e.rightFilterText,callback:function(t){e.rightFilterText=t},expression:"rightFilterText"}})],1),s("ta-e-tree",{ref:"rtree",attrs:{data:e.adminReGrantTree,"show-checkbox":"","node-key":"resourceId","highlight-current":"",props:e.defaultProps,"filter-node-method":e.filterNode,"default-checked-keys":e.rightDefaultKeys,"default-expand-all":""},on:{"check-change":e.fnCheckRightTree}})],1)],1)],1)],1)],1),s("template",{slot:"tabBarExtraContent"},[s("ta-button",{on:{click:e.fnBackToHome}},[s("ta-icon",{attrs:{type:"rollback"}}),e._v("返回 ")],1),s("ta-button",{attrs:{type:"primary"},on:{click:function(t){return e.fnSaveAdminObjectUsePermission("refresh")}}},[e._v(" 保存 ")])],1)],2)],1)],1)},n=[],a=s(89584),u=s(16158),i=s(82947),c={name:"adminGrantAuthority",components:{AdminLeftMenu:i.Z},data:function(){return{menuData:[],adminGrantTree:[],leftFilterText:"",leftDefaultKeys:[],menuSelectedKeys:[],adminReGrantTree:[],rightDefaultKeys:[],rightFilterText:"",defaultProps:{children:"children",label:"name",id:"resourceId"},resourceItem:"",row:{col:{span:12}},item:{},roleId:""}},watch:{leftFilterText:function(e){this.$refs.tree.filter(e)},rightFilterText:function(e){this.$refs.rtree.filter(e)}},activated:function(){this.item=this.$route.query,this.item.roleId?(this.roleId=this.item.roleId,this.menuData=[],this.adminGrantTree=[],this.leftDefaultKeys=[],this.adminReGrantTree=[],this.rightDefaultKeys=[],this.fnLoadDefault()):this.fnBackToHome()},methods:{filterNode:function(e,t){return!e||-1!==t.name.indexOf(e)},onSelectMenu:function(e){var t=this,s=(e.item,e.key),r=e.keyPath;if(this.resourceItem.resouceId!==s){var n=[],u=this.$refs.tree;n=[].concat((0,a.Z)(n),(0,a.Z)(u.getCheckedKeys()),(0,a.Z)(u.getHalfCheckedKeys()));var i=(0,a.Z)(this.menuData),c=i.filter((function(e){return s===e.resourceId}))[0];this.leftDefaultKeys.sort().toString()!==n.sort().toString()?this.$confirm({title:"提示",content:"当前授权权限修改未保存，是否保存?",cancelText:"取消",okText:"确认",onOk:function(){t.fnSaveAdminObjectUsePermission(),t.menuSelectedKeys=r,t.$nextTick((function(){t.fnQueryGrantPermissionByResourceId(c)}))},onCancel:function(){t.menuSelectedKeys=r,t.fnQueryGrantPermissionByResourceId(c)}}):(this.menuSelectedKeys=r,this.fnQueryGrantPermissionByResourceId(c))}},fnCheckLeftTree:function(e,t){this.$refs.tree.getNode(e.resourceId)&&this.$refs.tree.getNode(e.resourceId).checked||this.$refs.rtree.setChecked(e.resourceId,!1,!0)},fnCheckRightTree:function(e,t){if(t&&!this.$refs.tree.getNode(e.resourceId).checked){var s=this.$refs.tree.getCheckedKeys();s.push(e.resourceId),this.$refs.tree.setCheckedKeys(s)}},fnSaveAdminObjectUsePermission:function(e){var t=this,s=this.$refs.tree.getCheckedNodes(!1,!0).map((function(e){return e.resourceId})),r=this.$refs.rtree.getCheckedNodes(!1,!0).map((function(e){return e.resourceId})),n={roleId:this.roleId,rePermissionIds:s.join(","),reAuthorityIds:r.join(","),parentResourceId:this.resourceItem.resourceId,resourceType:this.resourceItem.resourceType};u.Z.saveAdminGrantPermission(n,(function(s){t.$message.success("更新数据成功"),"refresh"===e&&t.fnQueryGrantPermissionByResourceId(t.resourceItem)}))},fnLoadDefault:function(){var e=this,t={roleId:this.roleId};u.Z.queryGrantSysPermission(t,(function(t){e.menuData=t.data.resourceList,e.$nextTick((function(){e.menuData&&(e.menuSelectedKeys=[e.menuData[0].resourceId],e.fnQueryGrantPermissionByResourceId(e.menuData[0]))}))}))},fnQueryGrantPermissionByResourceId:function(e){var t=this;this.resourceItem=e;var s={roleId:this.roleId,idPath:e.idPath};this.leftDefaultKeys=[],this.rightDefaultKeys=[],u.Z.queryGrantPermissionByResourceId(s,(function(e){t.adminGrantTree=e.data.resourceTree,t.adminReGrantTree=e.data.resourceTree;var s=e.data.rePermissionList.map((function(e){return e.resourceId}));t.$nextTick((function(){s.forEach((function(e){var s=t.$refs.tree.getNode(e);s&&s.isLeaf&&t.leftDefaultKeys.push(s.data.resourceId)})),t.$refs.tree.setCheckedKeys(t.leftDefaultKeys)}));var r=e.data.reAuthorityList.map((function(e){return e.resourceId}));t.$nextTick((function(){r.forEach((function(e){var s=t.$refs.rtree.getNode(e);s&&s.isLeaf&&t.rightDefaultKeys.push(s.data.resourceId)})),t.$refs.rtree.setCheckedKeys(t.rightDefaultKeys)}))}))},fnBackToHome:function(){this.$router.push({name:"adminRoleManagement"})}}},o=c,l=s(1001),d=(0,l.Z)(o,r,n,!1,null,"642a4e51",null),f=d.exports},82947:function(e,t,s){s.d(t,{Z:function(){return o}});var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"menu-title"},[s("ta-icon",{attrs:{type:"menu-fold"}}),s("span",{staticStyle:{"margin-left":"5px","font-weight":"bold"}},[e._v(e._s(e.title))])],1),s("ta-divider",{staticStyle:{margin:"0"}}),s("ta-menu",{attrs:{mode:"inline",selectedKeys:e.selectedKeys},on:{click:e.onClick}},e._l(e.data,(function(t){return s("ta-menu-item",{key:t.resourceId},[s("ta-icon",{attrs:{type:"appstore"}}),e._v(" "+e._s(t.name)+" ")],1)})),1)],1)},n=[],a={name:"adminLeftMenu",props:{title:{type:String,required:!0},data:{type:Array,required:!0},selectedKeys:{type:Array}},data:function(){return{}},methods:{onClick:function(e){var t=e.item,s=e.key,r=e.keyPath;this.$emit("click",{item:t,key:s,keyPath:r})}}},u=a,i=s(1001),c=(0,i.Z)(u,r,n,!1,null,"8bcd3b7a",null),o=c.exports},16158:function(e,t){var s="/org/authority/adminAuthorityManagementRestService/";t.Z={queryUsersByRoleId:function(e,t){Base.submit(null,{url:s+"queryUsersByRoleId",data:e},{successCallback:function(e){return t(e)}})},queryUsersByRoleIdNoPage:function(e,t){Base.submit(null,{url:s+"queryUsersByRoleIdNoPage",data:e},{successCallback:function(e){return t(e)}})},addBatchAdminUser:function(e,t){Base.submit(null,{url:s+"addBatchRoleUsers",data:e},{successCallback:function(e){return t(e)}})},deleteBatchAdmin:function(e,t){Base.submit(null,{url:s+"deleteBatchRole",data:e},{successCallback:function(e){return t(e)}})},queryAllTaOrg:function(e,t){Base.submit(null,{url:s+"queryCurrentAdminRoleWrapOrgTree",data:e},{successCallback:function(e){return t(e)}})},deleteRoleUserByKey:function(e,t){Base.submit(null,{url:s+"deleteRoleUserByKey",data:e},{successCallback:function(e){return t(e)}})},deleteBatchRoleUsers:function(e,t){Base.submit(null,{url:s+"deleteBatchRoleUsers",data:e},{successCallback:function(e){return t(e)}})},queryBatchUserByOrgId:function(e,t){Base.submit(null,{url:s+"queryUsersNoWraperByRoleId",data:e},{successCallback:function(e){return t(e)}})},queryBatchUserByOrgIdNoPage:function(e,t){Base.submit(null,{url:s+"queryUsersNoWraperByRoleIdNoPage",data:e},{successCallback:function(e){return t(e)}})},queryOrgPermission:function(e,t){Base.submit(null,{url:s+"selectOrgScope",data:e},{successCallback:function(e){return t(e)}})},removeOrgPermission:function(e,t){Base.submit(null,{url:s+"removeOrgScope",data:e},{successCallback:function(e){return t(e)}})},selectPermissionOrgScope:function(e,t){Base.submit(null,{url:s+"selectPermissionOrgScope",data:e},{successCallback:function(e){return t(e)}})},addOrgPermission:function(e,t){Base.submit(null,{url:s+"saveOrgScope",data:e},{successCallback:function(e){return t(e)}})},queryBatchPermissionTreeData:function(e,t){Base.submit(null,{url:s+"queryBatchPermissionTreeData",data:e},{successCallback:function(e){return t(e)}})},batchChangeAdminPermission:function(e,t){Base.submit(null,{url:s+"batchChangeAdminPermission",data:e},{successCallback:function(e){return t(e)}})},addAdminRole:function(e,t){Base.submit(null,{url:s+"addAdminRole",data:e},{successCallback:function(e){return t(e)}})},updateAdmin:function(e,t){Base.submit(null,{url:s+"updateAdmin",data:e},{successCallback:function(e){return t(e)}})},updateBatchAdminStatus:function(e,t){Base.submit(null,{url:s+"updateRoleEffectiveByRoleId",data:e},{successCallback:function(e){return t(e)}})},queryUseSysPermission:function(e,t){Base.submit(null,{url:s+"queryRootResource",data:e},{successCallback:function(e){return t(e)}})},queryUsePermissionByResourceId:function(e,t){Base.submit(null,{url:s+"queryChildResourceByRoleId",data:e},{successCallback:function(e){return t(e)}})},saveAdminUsePermission:function(e,t){Base.submit(null,{url:s+"changeResourceUsePermission",data:e},{successCallback:function(e){return t(e)}})},updateAdminUsePermissionEffectiveTime:function(e,t){Base.submit(null,{url:s+"updateUsePermissionEffectiveTime",data:e},{successCallback:function(e){return t(e)}})},saveBatchAdminUsePermissionEffectiveTime:function(e,t){Base.submit(null,{url:s+"updateBatchUsePermissionEffectiveTime",data:e},{successCallback:function(e){return t(e)}})},queryObjectUseSysPermission:function(e,t){Base.submit(null,{url:s+"queryRootCustomResource",data:e},{successCallback:function(e){return t(e)}})},queryObjectUsePermissionByResourceId:function(e,t){Base.submit(null,{url:s+"queryChildCustomResourceByRoleId",data:e},{successCallback:function(e){return t(e)}})},saveAdminObjectUsePermission:function(e,t){Base.submit(null,{url:s+"changeCustomResourceUsePermission",data:e},{successCallback:function(e){return t(e)}})},updateAdminObjectUsePermissionEffectiveTime:function(e,t){Base.submit(null,{url:s+"updateCustomResourceUsePermissionEffectiveTime",data:e},{successCallback:function(e){return t(e)}})},updateBatchAdminObjectUsePermissionEffectiveTime:function(e,t){Base.submit(null,{url:s+"updateBatchCustomResourceUsePermissionEffectiveTime",data:e},{successCallback:function(e){return t(e)}})},queryGrantSysPermission:function(e,t){Base.submit(null,{url:s+"queryRootResourceAuthority",data:e},{successCallback:function(e){return t(e)}})},queryGrantPermissionByResourceId:function(e,t){Base.submit(null,{url:s+"queryChildResourceAuthorityByRoleId",data:e},{successCallback:function(e){return t(e)}})},saveAdminGrantPermission:function(e,t){Base.submit(null,{url:s+"changeResourceAuthority",data:e},{successCallback:function(e){return t(e)}})},queryObjectGrantSysPermission:function(e,t){Base.submit(null,{url:s+"queryRootCustomResourceAuthority",data:e},{successCallback:function(e){return t(e)}})},queryObjectGrantPermissionByResourceId:function(e,t){Base.submit(null,{url:s+"queryChildCustomResourceAuthorityByRoleId",data:e},{successCallback:function(e){return t(e)}})},saveAdminObjectGrantPermission:function(e,t){Base.submit(null,{url:s+"changeCustomResourceAuthority",data:e},{successCallback:function(e){return t(e)}})},addBatchUserRole:function(e,t){Base.submit(null,{url:s+"addBatchUserRole",data:e},{successCallback:function(e){return t(e)}})},deleteBatchUserRole:function(e,t){Base.submit(null,{url:s+"deleteBatchUserRole",data:e},{successCallback:function(e){return t(e)}})},queryChildCustomResourceAsync:function(e,t){Base.submit(null,{url:s+"queryChildCustomResourceAsync",data:e},{successCallback:function(e){return t(e)}})},addAllRoleUsersByOrgId:function(e,t){Base.submit(null,{url:s+"addAllRoleUsersByOrgId",data:e},{successCallback:function(e){return t(e)}})}}}}]);