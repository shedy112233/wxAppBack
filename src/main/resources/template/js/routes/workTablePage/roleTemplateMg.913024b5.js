"use strict";(self["webpackChunkta404_ui_cli"]=self["webpackChunkta404_ui_cli"]||[]).push([[5059],{70465:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"fit"},[a("ta-border-layout",{attrs:{"show-border":!0,"header-cfg":{showBorder:!0},"footer-cfg":{showBorder:!1}}},[a("div",{staticClass:"center-box",attrs:{slot:"header"},slot:"header"},[a("ta-input-search",{staticClass:"search-box",attrs:{placeholder:"请输入角色名称"},on:{search:e.fnOnSearch},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}},[a("ta-button",{attrs:{slot:"enterButton",type:"primary"},slot:"enterButton"},[e._v(" 搜索 ")])],1)],1),a("ta-table",{attrs:{columns:e.roleColumns,"data-source":e.roleData,pagination:!1,"row-key":"roleId"},scopedSlots:e._u([{key:"operate",fn:function(t,o){return a("span",{},[a("ta-table-operate",{attrs:{"operate-menu":e.operateMenu}})],1)}}])}),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("ta-pagination",{ref:"gridPager",staticStyle:{float:"right","margin-top":"10px"},attrs:{"show-size-changer":"","show-quick-jumper":"","data-source":e.roleData,"default-page-size":10,params:e.pageParams,url:"org/sysmg/WorkbenchManageRestService/queryRole"},on:{"update:dataSource":function(t){e.roleData=t},"update:data-source":function(t){e.roleData=t}}})],1)],1)],1)},r=[],n=a(89541),s=(a(69191),{name:"RoleTemplateMg",components:{TaTable:n.Z},data:function(){var e=this,t=[{title:"角色名称",dataIndex:"roleName",width:"25%",overflowTooltip:!0,scopedSlots:{customRender:"rolename"}},{title:"组织名称",dataIndex:"namePath",width:"25%",overflowTooltip:"namePath",customRender:function(e){return e.slice(e.lastIndexOf("/")+1)}},{title:"角色描述",dataIndex:"roleDesc",width:"30%",overflowTooltip:!0},{title:"操作",align:"center",width:"20%",scopedSlots:{customRender:"operate"}}];return{roleColumns:t,operateMenu:[{name:"修改该角色默认模板",onClick:function(t){e.fnModifyRoleTemplate(t)}}],roleData:[],search:""}},mounted:function(){this.$refs.gridPager.loadData()},methods:{pageParams:function(){var e={};return e.search=this.search,e},fnOnSearch:function(){this.$refs.gridPager.loadData()},fnModifyRoleTemplate:function(e){Base.openTabMenu({id:"roleWorktableTemplateModify",name:"修改角色工作台模板",url:"workTablePage.html#/page?type=1&roleId=".concat(e.roleId)})}}}),l=s,i=a(1001),c=(0,i.Z)(l,o,r,!1,null,"2e6a8ced",null),u=c.exports}}]);