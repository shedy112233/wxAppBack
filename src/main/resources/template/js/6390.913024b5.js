"use strict";(self["webpackChunkta404_ui_cli"]=self["webpackChunkta404_ui_cli"]||[]).push([[6390],{86390:function(t,a,e){e.r(a),e.d(a,{default:function(){return h}});for(var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticStyle:{padding:"20px"}},[e("div",{staticStyle:{"margin-bottom":"20px","border-bottom":"1px solid #eee"}},[e("ta-row",[e("span",{staticStyle:{"font-size":"16px","font-weight":"600"}},[t._v("同步测试")])]),e("ta-row",[e("ta-label-con",{attrs:{label:"设置数据量"}},[t._v(" 第一级数据量："),e("ta-input-number",{attrs:{precision:0,min:1},model:{value:t.dataFirstLenth,callback:function(a){t.dataFirstLenth=a},expression:"dataFirstLenth"}}),t._v(" 第二级数据量："),e("ta-input-number",{attrs:{precision:0,min:1},model:{value:t.dataSecondLenth,callback:function(a){t.dataSecondLenth=a},expression:"dataSecondLenth"}}),t._v(" 第三级数据量："),e("ta-input-number",{attrs:{precision:0,min:1},model:{value:t.dataThirdLenth,callback:function(a){t.dataThirdLenth=a},expression:"dataThirdLenth"}}),e("ta-button",{attrs:{type:"primary"},on:{click:function(a){return t.setData()}}},[t._v(" 确认 ")])],1)],1),e("ta-row",[e("ta-label-con",{attrs:{label:"是否开启虚拟滚动(用于大数据渲染)"}},[e("ta-radio-group",{attrs:{value:t.virtual},on:{change:t.handleVirtualChange}},[e("ta-radio-button",{attrs:{value:!0}},[t._v(" 是 ")]),e("ta-radio-button",{attrs:{value:!1}},[t._v(" 否 ")])],1)],1)],1),e("ta-row",[e("div",{staticStyle:{height:"240px"}},[e("ta-label-con",{staticStyle:{height:"100%"},attrs:{label:"联级组件示例"}},[e("ta-tree",{attrs:{checkable:"","tree-data":t.treeData,virtual:t.virtual},on:{select:this.onSelect,check:this.onCheck}})],1)],1)])],1),e("div",[e("ta-row",[e("span",{staticStyle:{"font-size":"16px","font-weight":"600","margin-right":"120px"}},[t._v("异步测试")]),t._v(" 子节点数据量："),e("ta-input-number",{attrs:{precision:0,min:1},model:{value:t.dataAsynChildLenth,callback:function(a){t.dataAsynChildLenth=a},expression:"dataAsynChildLenth"}}),e("ta-label-con",{attrs:{label:"是否开启虚拟滚动"}},[e("ta-radio-group",{attrs:{value:t.asynVirtual},on:{change:t.handleVirtualChangeAsyn}},[e("ta-radio-button",{attrs:{value:!0}},[t._v(" 是 ")]),e("ta-radio-button",{attrs:{value:!1}},[t._v(" 否 ")])],1)],1)],1),e("ta-row",[e("div",[e("ta-tree",{attrs:{"load-data":t.fnLoad,"tree-data":t.treeList,virtual:t.asynVirtual}})],1)])],1)])},i=[],c=[],r=0;r<10;r++)c.push({title:"".concat(r),key:r,children:[]});c.forEach((function(t,a){for(var e=0;e<10;e++)t.children.push({title:"节点".concat(a,"的第").concat(e,"个子节点"),key:"".concat(a,"-").concat(e),children:[]});t.children.forEach((function(t,e){for(var n=0;n<10;n++)t.children.push({title:"节点".concat(a," - ").concat(e,"的第").concat(n,"个子节点"),key:"".concat(a,"-").concat(e,"-").concat(n)})}))}));var o={name:"treeTest",data:function(){return{expandedKeys:["0-0-0","0-0-1"],autoExpandParent:!0,checkedKeys:["0-0-0"],selectedKeys:[],treeData:c,dataFirstLenth:10,dataSecondLenth:10,dataThirdLenth:10,virtual:!0,treeList:[{title:"节点1",key:"1",childNum:1},{title:"节点2",key:"2",childNum:1},{title:"节点3",key:"3",childNum:0}],asynVirtual:!0,dataAsynChildLenth:10}},watch:{checkedKeys:function(t){}},methods:{onExpand:function(t){this.expandedKeys=t,this.autoExpandParent=!1},onCheck:function(t){this.checkedKeys=t},onSelect:function(t,a){this.selectedKeys=t},setData:function(){for(var t=this,a=[],e=0;e<this.dataFirstLenth;e++)a.push({title:"".concat(e),key:e,children:[]});a.forEach((function(a,e){for(var n=0;n<t.dataSecondLenth;n++)a.children.push({title:"节点".concat(e,"的第").concat(n,"个子节点"),key:"".concat(e,"-").concat(n),children:[]});a.children.forEach((function(a,n){for(var i=0;i<t.dataThirdLenth;i++)a.children.push({title:"节点".concat(e," - ").concat(n,"的第").concat(i,"个子节点"),key:"".concat(e,"-").concat(n,"-").concat(i)})}))})),this.treeData=a},fnLoad:function(t){var a="http/mock/projectDemo/bigdataTest/treeTest";return Base.submit(null,{url:a,data:{orgId:t?t.eventKey:null,dataLength:this.dataAsynChildLenth}}).then((function(t){return t.data}))},handleVirtualChange:function(t){this.virtual=t.target.value},handleVirtualChangeAsyn:function(t){this.asynVirtual=t.target.value}}},l=o,s=e(1001),d=(0,s.Z)(l,n,i,!1,null,"4123e844",null),h=d.exports}}]);