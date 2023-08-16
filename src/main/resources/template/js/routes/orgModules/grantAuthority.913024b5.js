"use strict";(self["webpackChunkta404_ui_cli"]=self["webpackChunkta404_ui_cli"]||[]).push([[4730],{81341:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"fit",attrs:{id:"publicRoleCustomAuthority"}},[e.role.length?r("ta-border-layout",{attrs:{layout:{header:"70px"}},scopedSlots:e._u([{key:"header",fn:function(){return[r("ta-breadcrumb",{staticStyle:{"line-height":"42px",float:"left"},attrs:{separator:">"}},[r("ta-breadcrumb-item",[r("a",{on:{click:function(t){return e.$router.push({name:"similarAuthority"})}}},[e._v("相似权限管理")])]),r("ta-breadcrumb-item",[e._v("相似权限授权")])],1),r("div",{staticClass:"divider-header"}),r("ta-alert",{staticStyle:{float:"left","margin-top":"2px"},attrs:{message:"当前角色为："+e.getNames(),type:"info","show-icon":""}}),r("ta-button",{staticStyle:{float:"right","margin-top":"8px"},on:{click:function(t){return e.$router.push({name:"similarAuthority"})}}},[r("ta-icon",{attrs:{type:"rollback"}}),e._v("返回 ")],1)]},proxy:!0}],null,!1,2432239185)},[r("ta-tabs",{staticClass:"fit content-box",attrs:{"tab-bar-style":{marginBottom:"0px"}}},[r("ta-tab-pane",{attrs:{tab:"相似权限"}},[r("ta-row",{staticClass:"fit"},[r("ta-col",{staticClass:"fit",staticStyle:{"border-right":"1px solid #eee",overflow:"auto"},attrs:{span:4}},[r("div",{staticClass:"menu-title"},[r("ta-icon",{attrs:{type:"menu-fold"}}),r("span",{staticStyle:{"margin-left":"5px"}},[e._v("相似权限一级菜单")])],1),r("ta-divider",{staticStyle:{margin:"0"}}),r("ta-menu",{attrs:{mode:"inline","selected-keys":e.menuSelectedKeys},on:{click:e.onSelectMenu}},e._l(e.menuData,(function(t){return r("ta-menu-item",{key:t.resourceId},[r("ta-icon",{attrs:{type:"appstore"}}),e._v(" "+e._s(t.name)+" ")],1)})),1)],1),r("ta-col",{staticClass:"right-box",attrs:{span:20}},[r("ta-big-table",{ref:"xTable",attrs:{height:"100%",resizable:"",border:"","row-id":"resourceId","cell-class-name":e.cellClassName,"tree-config":{children:"children",expandAll:!0},"expand-config":{lazy:!0},data:e.treeData,"checkbox-config":{labelField:"name",checkField:"checked",showHeader:!1,checkMethod:e.checkMethod}},on:{"checkbox-change":e.checkedChange}},[r("ta-big-table-column",{attrs:{type:"checkbox",field:"name",title:"可授权的功能菜单","tree-node":"","filter-method":e.filterAgeMethod,filters:[{data:""}]},scopedSlots:e._u([{key:"header",fn:function(t){t.row;return[r("span",[e._v("可授权的功能菜单")]),r("ta-input",{staticStyle:{width:"250px","margin-left":"10px"},attrs:{placeholder:"输入关键字进行过滤"},on:{click:function(e){e.stopPropagation(),e.preventDefault()}},model:{value:e.filterText,callback:function(t){e.filterText=t},expression:"filterText"}}),r("ta-button",{attrs:{type:"primary"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.saveAuthority()}}},[e._v(" 权限保存 ")])]}},{key:"default",fn:function(t){var n=t.row;return[n.loginAccess?r("span",{staticStyle:{color:"#67c23a",padding:"0 8px"}},[e._v(e._s(n.name)+" (登录即可访问)")]):r("span",{staticStyle:{padding:"0 8px"}},[e._v(e._s(n.name))]),n.restUrlAuthorityPoList?r("span",{on:{click:function(e){e.stopPropagation()}}},e._l(n.restUrlAuthorityPoList,(function(t,a){return r("ta-checkbox",{key:a,attrs:{checked:"1"===t.checked,"default-checked":"1"==t.checked},on:{click:function(e){e.stopPropagation()},change:function(r){return e.changeTempCheckedValue(r,t,n)}}},[r("span",{staticClass:"iterface-font",on:{click:function(e){e.stopPropagation()}}},[e._v(e._s(t.urlName)+"(url)")])])})),1):e._e()]}}],null,!1,2586559710)})],1)],1)],1)],1)],1)],1):e._e()],1)},a=[],i=r(89584),o=r(67090),s=r(27510),c=r(61785),u=r(96671),l={name:"",data:function(){return{menuSelectedKeys:[],menuData:[],treeData:[],storeTreeData:[],roleIds:[],defaultProps:{children:"children",label:"name",isLeaf:"isLeaf",id:"resourceId"},filterText:"",grantCheckbox:[],resourceId:"",batchPop:!1,indexClick:null,effectiveTime:""}},computed:{role:function(){return this.$route.params.roles||[]},grantCheckUrlIDs:function(){var e=[];return this.grantCheckbox.forEach((function(t){e.push(t.urlId)})),e}},watch:{filterText:function(e){this.filterAgeMethod(e)}},mounted:function(){this.role.length||this.$router.push({name:"similarAuthority"}),this.queryOne()},methods:{checkedChange:function(e){e.records;var t=e.row;if(t.restUrlAuthorityPoList&&t.restUrlAuthorityPoList.length>0){var r=t.restUrlAuthorityPoList;r.forEach((function(e){t.checked||(e.checked="0")}))}this.setRestUrlAuthorityPoLis(t.children)},setRestUrlAuthorityPoLis:function(e){e&&0!==e.length&&(0,c.Z)(e,(function(e){if(e.restUrlAuthorityPoList&&e.restUrlAuthorityPoList.length>0){var t=e.restUrlAuthorityPoList;t.forEach((function(t){t.checked=e.checked?"1":"0"}))}}))},cellClassName:function(e){var t=e.row,r=(e.rowIndex,e.column);e.columnIndex;return"name"!==r.property||t.children?"":"no-children-tree-node"},checkMethod:function(e){var t=e.row;return!t.loginAccess},changeTempCheckedValue:function(e,t,r){e&&(r.checked=!0),t.checked=e.target.checked?"1":"0"},filterAgeMethod:function(e){var t=this;this.treeData=this.deepFilter(this.storeTreeData,e),this.$nextTick((function(){t.$refs.xTable.setAllTreeExpand(!0)}))},deepFilter:function(e,t){var r=this,n=e.filter((function(e){var r;return(null!==(r=e.name)&&void 0!==r?r:e.urlName).indexOf(t)>-1})),a=e.filter((function(e){var r;return(null!==(r=e.name)&&void 0!==r?r:e.urlName).indexOf(t)<0})),o=[];return a.forEach((function(e){if(e.children){var n=r.deepFilter(e.children,t);o.push.apply(o,(0,i.Z)(n))}})),o.push.apply(o,(0,i.Z)(n)),o},getNames:function(){var e=[],t=[];return this.role.forEach((function(r){e.push(r.roleName),t.push(r.roleId)})),this.roleIds=t,e.join("、")},queryOne:function(){var e=this;o.Z.queryRePermissionResource(null,(function(t){e.menuData=t.customRePermissions,e.menuSelectedKeys=[e.menuData[0].resourceId],e.queryTwo(e.menuData[0].resourceId)}))},queryTwo:function(e){var t=this;o.Z.queryRePermissionResource({resourceId:e},(function(e){t.storeTreeData=(0,s.Z)(e.customRePermissions),t.treeData=e.customRePermissions,t.$nextTick((function(){t.$refs.xTable.setAllTreeExpand(!0)}))}))},onSelectMenu:function(e){var t=this,r=e.key,n=e.keyPath,a=this.$refs.xTable.getCheckboxRecords()||[];this.resourceId=r,a.length?this.$confirm({title:"提示",content:"当前相似权限修改未保存，是否保存?",cancelText:"取消",okText:"确认",onOk:function(){t.saveAuthority({key:r,keyPath:n})},onCancel:function(){t.changeLeftMenu(r,n)}}):this.changeLeftMenu(r,n)},changeLeftMenu:function(e,t){this.grantCheckbox=[],this.filterText="",this.menuSelectedKeys=t,this.queryTwo(e)},getCheckedsRestUrl:function(){var e=this.$refs.xTable,t=(0,u.Z)(e.getData()),r=[];return t.forEach((function(e){var t=e.restUrlAuthorityPoList;t&&t.length>0&&t.forEach((function(e){"1"===e.checked&&r.push({resourceId:e.resourceId,urlId:e.urlId})}))})),r},saveAuthority:function(e){var t=this,r=[],n=this.$refs.xTable;r=[].concat((0,i.Z)(n.getCheckboxRecords()),(0,i.Z)(n.getCheckboxIndeterminateRecords(!0)));var a=[];r.forEach((function(e){a.push(e.resourceId)}));var s=this.getCheckedsRestUrl(),c={roleIds:this.roleIds.join(","),resourceIds:a.join(","),resourceId:this.resourceId,jsonArray:JSON.stringify(s)};o.Z.addBatchSimilarAuthority(c,(function(){t.$message.success("授权成功"),e&&t.changeLeftMenu(e.key,e.keyPath)}))}}},h=l,d=r(1001),f=(0,d.Z)(h,n,a,!1,null,"03ab9d21",null),m=f.exports},67090:function(e,t){var r="/org/authority/similarAuthorityManagementRestService/";t.Z={querySimilarAuthority:function(e,t){Base.submit(null,{url:r+"queryCurrentUserRePermission",data:e},{successCallback:function(e){return t(e.data)}})},queryRoleByMenuIds:function(e,t){Base.submit(null,{url:r+"queryUsePermissionRoleByResourceId",data:e},{successCallback:function(e){return t(e.data)}})},queryRePermissionResource:function(e,t){Base.submit(null,{url:r+"queryRePermissionResource",data:e},{successCallback:function(e){return t(e.data)}})},addBatchSimilarAuthority:function(e,t){Base.submit(null,{url:r+"addBatchSimilarAuthority",data:e},{successCallback:function(e){return t(e.data)}})}}}}]);