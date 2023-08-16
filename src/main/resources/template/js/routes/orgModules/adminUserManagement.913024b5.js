"use strict";(self["webpackChunkta404_ui_cli"]=self["webpackChunkta404_ui_cli"]||[]).push([[9233],{23725:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"fit",attrs:{id:"adminUserManagement"}},[a("ta-border-layout",{attrs:{layout:{header:"70px",footer:"70px"},"center-cfg":{showBar:!0,toolBarStyle:{height:"50px",lineHeight:"48px"}},"header-cfg":{showBorder:!1},"show-border":!1,"footer-cfg":{showBorder:!1}}},[a("div",{staticClass:"center-box",attrs:{slot:"header"},slot:"header"},[a("ta-input-search",{staticClass:"search-box",attrs:{placeholder:"请输入人员姓名、帐号、证件号"},on:{search:e.onSearchUser},model:{value:e.searchInfo,callback:function(t){e.searchInfo=t},expression:"searchInfo"}},[a("ta-button",{attrs:{slot:"enterButton",type:"primary"},slot:"enterButton"},[e._v(" 搜索 ")])],1)],1),a("div",{attrs:{slot:"centerExtraContent"},slot:"centerExtraContent"},[a("ta-tree-select",{staticStyle:{width:"250px","min-width":"150px","margin-right":"10px"},attrs:{"dropdown-style":{maxHeight:"300px",overflow:"auto"},placeholder:"请选择组织机构",url:e.orgCascaderUrl,"tree-data":e.orgOptions,"tree-id":"orgVos","tree-node-id":"orgId","tree-data-label":"orgName","tree-node-label-prop":"namePath","tree-data-value":"orgId","allow-clear":"","search-placeholder":"请输入组织机构名称","show-search":"","filter-tree-node":e.filter,"loaded-data-call-back":e.fnLoadedOrgCallBack},on:{"update:treeData":function(t){e.orgOptions=t},"update:tree-data":function(t){e.orgOptions=t},change:e.fnQueryUserListByOrgId},model:{value:e.casValue,callback:function(t){e.casValue=t},expression:"casValue"}}),a("ta-checkbox",{attrs:{checked:e.isSub},on:{change:e.onChangeIsSub}},[e._v(" 包含子组织 ")]),a("ta-tag-select",{attrs:{title:"锁定",data:e.CollectionData("YESORNO")},on:{change:e.filterClick},model:{value:e.selectFilter,callback:function(t){e.selectFilter=t},expression:"selectFilter"}})],1),a("ta-table",{attrs:{columns:e.userColumns,"data-source":e.userList,"row-key":"userId",pagination:!1},scopedSlots:e._u([{key:"name",fn:function(t,r){return[a("span",{class:{invalidStyle:"0"==r.effective}},[e._v(e._s(t))])]}},{key:"sex",fn:function(t){return a("span",{},[e._v(e._s(e.CollectionLabel("SEX",t)))])}},{key:"namePath",fn:function(t){return a("span",{},[e._v(e._s(e.getLastName(t)))])}},{key:"isLock",fn:function(t){return a("span",{},[a("ta-tag",{staticClass:"no-cursor",attrs:{color:"0"==t?"green":"red"}},[e._v(" "+e._s(e.CollectionLabel("YESORNO",t))+" ")])],1)}},{key:"operation",fn:function(t,r){return a("span",{},[a("ta-table-operate",{attrs:{"operate-menu":e.operateMenu}})],1)}}])}),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("ta-pagination",{ref:"userGridPager",staticStyle:{float:"right","margin-top":"10px"},attrs:{"show-size-changer":"","show-quick-jumper":"","data-source":e.userList,"default-page-size":10,params:e.userPageParams,url:e.adminUserUrl},on:{"update:dataSource":function(t){e.userList=t},"update:data-source":function(t){e.userList=t}}})],1)],1)],1)},o=[],n=a(51097),s=[{title:"姓名",dataIndex:"name",width:"15%",scopedSlots:{customRender:"name"}},{title:"账号",dataIndex:"loginId",width:"15%"},{title:"性别",dataIndex:"sex",width:80,scopedSlots:{customRender:"sex"}},{title:"所属组织",dataIndex:"namePath",width:"15%",overflowTooltip:!0,scopedSlots:{customRender:"namePath"}},{title:"手机号",dataIndex:"mobile",width:"15%",overflowTooltip:!0},{title:"锁定",dataIndex:"isLock",width:80,scopedSlots:{customRender:"isLock"}},{title:"操作",dataIndex:"operation",width:240,scopedSlots:{customRender:"operation"},align:"center"}],i={name:"adminUserManagement",data:function(){var e=this;return{orgCascaderUrl:"org/authority/adminAuthorityManagementRestService/queryCurrentAdminRoleWrapOrgTree",adminUserUrl:"org/authority/adminAuthorityManagementRestService/queryUserByCondition",casValue:void 0,orgOptions:[],isSub:!0,searchInfo:"",userColumns:s,operateMenu:[{name:"角色管理",title:"该角色已关联普通角色，无法再关联管理员角色",isShow:function(e){return"1"===e.pubRole},style:{color:"rgb(204, 204, 204)",cursor:"not-allowed"}},{name:"角色管理",isShow:function(e){return"1"!==e.pubRole},onClick:function(t){return e.fnRouteToRoleMg(t)}}],userList:[],arrayData:{},isDetailShow:!1,selectFilter:[]}},methods:{filter:function(e,t){var a=e.toLowerCase(),r=null;return r=(0,n.Z)([t],(function(e){return e.label.toLowerCase().indexOf(a)>-1})),r&&r.length>0},filterClick:function(){this.fnQueryUserByOrgId()},showRecordDetail:function(e){this.isDetailShow=!0,this.arrayData=[{label:"姓名",value:e.name},{label:"账号",value:e.loginId},{label:"性别",type:"codeTable",dictType:"SEX",value:e.sex},{label:"组织路径",type:"desc",value:e.namePath}]},getLastName:function(e){return e&&-1!==e.indexOf("/")?e.slice(e.lastIndexOf("/")+1):null==e||""===e||void 0===e?"--":e},fnRouteToRoleMg:function(e){this.$router.push({path:"adminUserRoleMg",query:{name:e.name,userId:e.userId}})},userPageParams:function(){var e,t={},a=this.orgOptions[0]&&this.orgOptions[0].orgId?this.orgOptions[0].orgId:"";return t.orgId=null!==(e=this.casValue)&&void 0!==e?e:a,t.showChildUser=this.isSub?"1":"0",this.searchInfo&&(t.name=this.searchInfo,t.loginId=this.searchInfo,t.idCardNo=this.searchInfo,t.searchType="normal"),this.selectFilter&&(t.islock=this.selectFilter.join(",")),t},fnQueryUserListByOrgId:function(e){this.casValue=e,this.fnQueryUserByOrgId()},onChangeIsSub:function(e){var t=this;this.isSub=e.target.checked,this.$nextTick((function(){t.fnQueryUserByOrgId()}))},fnLoadedOrgCallBack:function(e){this.orgOptions=e,this.fnQueryUserByOrgId()},fnQueryUserByOrgId:function(){this.$refs.userGridPager.loadData()},onSearchUser:function(){this.fnQueryUserByOrgId()}}},l=i,c=a(1001),u=(0,c.Z)(l,r,o,!1,null,"480e451e",null),d=u.exports}}]);