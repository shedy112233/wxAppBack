"use strict";(self["webpackChunkta404_ui_cli"]=self["webpackChunkta404_ui_cli"]||[]).push([[9151],{75559:function(t,a,e){e.r(a),e.d(a,{default:function(){return f}});var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ta-list",{attrs:{"data-source":t.data,grid:{gutter:24,xl:4,lg:3,md:3,sm:2,xs:1}},scopedSlots:t._u([{key:"renderItem",fn:function(a){return e("ta-list-item",{},[e("ta-card",{attrs:{"body-style":{paddingBottom:20},hoverable:""}},[e("ta-skeleton",{attrs:{loading:t.loading,active:""}},[e("ta-card-meta",{attrs:{title:a.title}},[e("template",{slot:"avatar"},[e("ta-avatar",{attrs:{size:"small",src:a.avatar}})],1)],2),e("div",{},[e("card-info",{attrs:{"active-user":"100","new-user":"999"}})],1)],1),e("template",{slot:"actions"},[e("ta-tooltip",{attrs:{title:"下载"}},[e("ta-icon",{attrs:{type:"download"}})],1),e("ta-tooltip",{attrs:{title:"编辑"}},[e("ta-icon",{attrs:{type:"edit"}})],1),e("ta-tooltip",{attrs:{title:"分享"}},[e("ta-icon",{attrs:{type:"share-alt"}})],1),e("ta-dropdown",[e("a",{staticClass:"ant-dropdown-link"},[e("ta-icon",{attrs:{type:"ellipsis"}})],1),e("ta-menu",{attrs:{slot:"overlay"},slot:"overlay"},[e("ta-menu-item",[e("a",{attrs:{href:"javascript:;"}},[t._v("1st menu item")])]),e("ta-menu-item",[e("a",{attrs:{href:"javascript:;"}},[t._v("2nd menu item")])]),e("ta-menu-item",[e("a",{attrs:{href:"javascript:;"}},[t._v("3rd menu item")])])],1)],1)],1)],2)],1)}}])})},n=[],s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"cardInfo"},[e("div",[e("p",[t._v("活跃用户")]),e("p",[t._v(t._s(t.activeUser))])]),e("div",[e("p",[t._v("新增用户")]),e("p",[t._v(t._s(t.newUser))])])])},i=[],l={name:"cardInfo",props:{activeUser:{type:[String,Number],default:0},newUser:{type:[String,Number],default:0}}},o=l,u=e(1001),c=(0,u.Z)(o,s,i,!1,null,"0411eca2",null),d=c.exports,m={name:"appList",components:{cardInfo:d},data:function(){return{loading:!0,data:Array.from({length:6}).map((function(t,a){return{id:a}}))}},mounted:function(){this.getList()},methods:{getList:function(){var t=this;Base.submit(null,{url:"http/mock/projectDemo/list/article",data:{count:8},showPageLoading:!1}).then((function(a){t.data=a.data.list,t.loading=!1}))}}},p=m,v=(0,u.Z)(p,r,n,!1,null,null,null),f=v.exports}}]);