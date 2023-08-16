"use strict";(self["webpackChunkta404_ui_cli"]=self["webpackChunkta404_ui_cli"]||[]).push([[5213],{35927:function(e,t,a){a.r(t),a.d(t,{default:function(){return J}});for(var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ta-border-layout",{staticClass:"fit",attrs:{"layout-type":"fixTop"}},[a("ta-row",{attrs:{slot:"header"},slot:"header"},[a("ta-label-con",{directives:[{name:"show",rawName:"v-show",value:"1"===e.page||"2"===e.page,expression:"page === '1' || page === '2'"}],attrs:{label:"数据量"}},[a("ta-input-number",{attrs:{precision:0,min:1},model:{value:e.bigDataLength,callback:function(t){e.bigDataLength=t},expression:"bigDataLength"}}),a("ta-button",{attrs:{type:"primary"},on:{click:e.setData}},[e._v("确认")])],1),a("ta-label-con",{directives:[{name:"show",rawName:"v-show",value:"3"===e.page||"4"===e.page,expression:"page === '3' || page === '4'"}],attrs:{label:"树表格每级数据量"}},[a("ta-input-number",{attrs:{precision:0,min:1},model:{value:e.bigDataTreeLength,callback:function(t){e.bigDataTreeLength=t},expression:"bigDataTreeLength"}}),a("ta-button",{attrs:{type:"primary"},on:{click:e.setData}},[e._v("确认")])],1)],1),a("ta-tabs",{staticClass:"fit",attrs:{"default-active-key":e.page},on:{change:e.callback}},[a("ta-tab-pane",{key:"1",attrs:{tab:"10列左右"}},[a("bigtable-ten-colunm-test",{ref:"tenColunm"})],1),a("ta-tab-pane",{key:"2",attrs:{tab:"20列左右"}},[a("bigtable-twenty-colunm-test",{ref:"twentyColunm"})],1),a("ta-tab-pane",{key:"3",attrs:{tab:"表格树10列左右"}},[a("table-tree-ten-colunm",{ref:"tenTreeTableColunm"})],1),a("ta-tab-pane",{key:"4",attrs:{tab:"表格树20列左右"}},[a("table-tree-twenty-colunm",{ref:"twentyTreeTableColunm"})],1)],1)],1)},r=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.show?a("ta-big-table",{ref:"xTable1",attrs:{height:"500",border:"",resizable:"","keep-source":"","show-overflow":"","edit-rules":e.validRules,"edit-config":{trigger:"click",mode:"row",showStatus:!0}}},[a("ta-big-table-column",{attrs:{type:"seq",width:"60"}}),a("ta-big-table-column",{attrs:{field:"name",title:"Name","edit-render":{name:"$input",props:{autoFocus:!0}}}}),a("ta-big-table-column",{attrs:{field:"role",title:"Role","edit-render":{name:"$input"}}}),a("ta-big-table-column",{attrs:{field:"sex",title:"Sex","edit-render":{name:"$select"},"collection-type":"SEX"}}),a("ta-big-table-column",{attrs:{field:"age",title:"Age","edit-render":{name:"$input-number"}}}),a("ta-big-table-column",{attrs:{field:"cascader",title:"Cascader","edit-render":{name:"$cascader",props:{options:e.addressList}}}}),a("ta-big-table-column",{attrs:{field:"quarter",title:"Quarter","edit-render":{name:"$quarter-picker",props:{format:"YYYY年Q季度"}}}}),a("ta-big-table-column",{attrs:{field:"hobby",title:"多选下拉","edit-render":{name:"$select",props:{maxTagCount:2,mode:"multiple",options:e.hobbyList}}}}),a("ta-big-table-column",{attrs:{field:"switch",title:"Switch","edit-render":{name:"$switch",trueText:"有效",falseText:"无效"}}}),a("ta-big-table-column",{attrs:{field:"checkbox",title:"Checkbox","edit-render":{name:"$checkbox"}}}),a("ta-big-table-column",{attrs:{field:"treeSelect",title:"TreeSelect","edit-render":{name:"$tree-select",showPath:!0,props:{treeData:e.addressList}}}})],1):e._e()},n=[],o=[{label:"足球",value:0},{label:"篮球",value:1},{label:"排球",value:2},{label:"乒乓球",value:3}],s=[{value:"zhejiang",label:"浙江",children:[{value:"hangzhou",label:"杭州",children:[{value:"xihu",label:"西湖"}]}]},{value:"jiangsu",label:"江苏",children:[{value:"nanjing",label:"南京",children:[{value:"zhonghuamen",label:"中华门"}]}]}],d=[],c=0;c<1e4;c++)d.push({id:c,name:"Test"+c,role:c%2?"前端":"后端",sex:"".concat(c%3),age:c,cascader:["jiangsu","nanjing","zhonghuamen"],quarter:"2019-05-10",hobby:[c%4],switch:Boolean(c%2),checkbox:Boolean(c%2),treeSelect:"nanjing"});for(var u={name:"bigtableTenColunmTest",customData:{tableData:d},data:function(){var e=function(e){var t=e.cellValue;if(t&&(t.length<3||t.length>50))return new Error("名称长度在 3 到 50 个字符之间")},t=function(e){var t=e.cellValue;if(t&&!["前端","后端","设计师","项目经理","测试"].includes(t))return new Error("角色输入不正确")};return{show:!0,tableData:d,hobbyList:o,addressList:s,validRules:{name:[{required:!0,message:"姓名必须填"},{validator:e}],role:[{validator:t}],sex:[{required:!0,message:"性别必须填写"}],age:[{pattern:"^[0-9]{0,3}$",message:"格式不正确"}]}}},mounted:function(){this.changeTableData(1e3)},methods:{changeTableData:function(e){for(var t=this,a=[],l=0;l<e;l++)a.push({id:l,name:"Test"+l,role:l%2?"前端":"后端",sex:"".concat(l%3),age:l,cascader:["jiangsu","nanjing","zhonghuamen"],quarter:"2019-05-10",hobby:[l%4],switch:Boolean(l%2),checkbox:Boolean(l%2),treeSelect:"nanjing"});this.$options.customData.tableData=a,this.$nextTick((function(){t.$refs.xTable1.loadData(a,!0)}))}}},b=u,h=a(1001),m=(0,h.Z)(b,i,n,!1,null,"2399af8f",null),g=m.exports,p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ta-big-table",{ref:"xTable",attrs:{height:"500",border:"",resizable:"","keep-source":"","show-overflow":"","edit-rules":e.validRules,"edit-config":{trigger:"click",mode:"row",showStatus:!0}}},[a("ta-big-table-column",{attrs:{type:"checkbox",width:"60",fixed:"left"}}),a("ta-big-table-column",{attrs:{type:"seq",width:"60",fixed:"left"}}),a("ta-big-table-column",{attrs:{field:"name",title:"Name",width:"150","edit-render":{name:"$input",props:{autoFocus:!0}}}}),a("ta-big-table-column",{attrs:{field:"age",title:"Age",width:"150","edit-render":{name:"$input-number",renderCell:e.renderDefaultAge,style:{color:"red",width:"100%"}}}}),a("ta-big-table-column",{attrs:{field:"sex",title:"Sex",width:"150","collection-type":"SEX","edit-render":{name:"$select"}}}),a("ta-big-table-column",{attrs:{field:"hobby",width:"220px",title:"多选下拉","edit-render":{name:"$select",props:{maxTagCount:2,mode:"multiple",options:e.hobbyList}}}}),a("ta-big-table-column",{attrs:{field:"date",title:"Date",width:"150","edit-render":{name:"$date-picker",props:{format:"YYYY-MM-DD"}}}}),a("ta-big-table-column",{attrs:{field:"time",title:"Time",width:"150","edit-render":{name:"$time-picker",props:{format:"HH:mm:ss"}}}}),a("ta-big-table-column",{attrs:{field:"month",title:"Month",width:"150","edit-render":{name:"$month-picker",props:{format:"YYYY-MM"}}}}),a("ta-big-table-column",{attrs:{field:"range",title:"Range",width:"250","edit-render":{name:"$range-picker",props:{format:"YYYY-MM-DD"}}}}),a("ta-big-table-column",{attrs:{field:"week",title:"Week",width:"150","edit-render":{name:"$week-picker",props:{format:"YYYY年第ww周"}}}}),a("ta-big-table-column",{attrs:{field:"quarter",title:"Quarter",width:"150","edit-render":{name:"$quarter-picker",props:{format:"YYYY年Q季度"}}}}),a("ta-big-table-column",{attrs:{field:"year",title:"Year",width:"150","edit-render":{name:"$year-picker",props:{format:"YYYY年"}}}}),a("ta-big-table-column",{attrs:{field:"rate",title:"Rate",width:"200","edit-render":{name:"$rate"}}}),a("ta-big-table-column",{attrs:{field:"switch",title:"Switch",width:"150","edit-render":{name:"$switch",trueText:"有效",falseText:"无效"}}}),a("ta-big-table-column",{attrs:{field:"checkbox",title:"Checkbox",width:"150","edit-render":{name:"$checkbox"}}}),a("ta-big-table-column",{attrs:{field:"radio",title:"Radio",width:"150","edit-render":{name:"$radio",props:{cancelChecked:!0}}}}),a("ta-big-table-column",{attrs:{field:"radioGroup",title:"RadioGroup",width:"320","edit-render":{name:"$radio-group",props:{options:e.hobbyList}}}}),a("ta-big-table-column",{attrs:{field:"checkboxGroup",title:"CheckboxGroup",width:"300","edit-render":{name:"$checkbox-group",props:{options:e.hobbyList}}}}),a("ta-big-table-column",{attrs:{field:"cascader",title:"Cascader",width:"300","edit-render":{name:"$cascader",props:{options:e.addressList}}}}),a("ta-big-table-column",{attrs:{field:"treeSelect",title:"TreeSelect",width:"300","edit-render":{name:"$tree-select",showPath:!0,props:{treeData:e.addressList}}}}),a("ta-big-table-column",{attrs:{field:"addresses",title:"TreeSelect多选",width:"300","edit-render":{name:"$tree-select",props:{multiple:!0,maxTagCount:2,treeData:e.addressList}}}})],1)},f=[],w=[{label:"足球",value:0},{label:"篮球",value:1},{label:"排球",value:2},{label:"乒乓球",value:3}],x=[{value:"zhejiang",label:"浙江",children:[{value:"hangzhou",label:"杭州",children:[{value:"xihu",label:"西湖"}]}]},{value:"jiangsu",label:"江苏",children:[{value:"nanjing",label:"南京",children:[{value:"zhonghuamen",label:"中华门"}]}]}],k=[],v=0;v<10;v++)k.push({key:v.toString(),name:"Name ".concat(v),age:v,sex:"".concat(v%3),hobby:[v%4],date:"2019-05-10",month:"2019-05-10",range:["2019-05-10","2019-05-19"],week:"2019-05-10",rate:v%6,switch:Boolean(v%2),checkbox:Boolean(v%2),radio:Boolean(v%2),address:["jiangsu","nanjing","zhonghuamen"],treeSelect:"nanjing",addresses:["jiangsu","nanjing","zhonghuamen"],cascader:["jiangsu","nanjing","zhonghuamen"],quarter:"2019-05-10",year:"2019-05-10",radioGroup:v%4,checkboxGroup:[v%4],time:"2019-05-10 09:50:50"});for(var $={name:"bigtableTwentyColunmTest",customData:{tableData:k},data:function(){var e=function(e){var t=e.cellValue;if(t&&(t.length<3||t.length>50))return new Error("名称长度在 3 到 50 个字符之间")},t=function(e){var t=e.cellValue;if(t&&!["前端","后端","设计师","项目经理","测试"].includes(t))return new Error("角色输入不正确")};return{tableData:k,hobbyList:w,addressList:x,validRules:{name:[{required:!0,message:"姓名必须填写"},{validator:e}],role:[{validator:t}],sex:[{required:!0,message:"性别必须填写"},{pattern:/^[1,2]{1}$/,message:"格式不正确"}],sex2:[{required:!0,message:"性别必须填写"}],num1:[{required:!0,message:"number必须填写"}],age:[{pattern:"^[0-9]{0,3}$",message:"格式不正确"}],date12:[{required:!0,message:"日期必须填写"}],date13:[{required:!0,message:"日期必须填写"}]}}},methods:{renderDefaultAge:function(e,t,a){var l=a.cellValue;return l+" 岁"},changeTableData:function(e){for(var t=this,a=[],l=0;l<e;l++)a.push({key:l.toString(),name:"Name ".concat(l),age:l,sex:"".concat(l%3),hobby:[l%4],date:"2019-05-10",month:"2019-05-10",range:["2019-05-10","2019-05-19"],week:"2019-05-10",rate:l%6,switch:Boolean(l%2),checkbox:Boolean(l%2),radio:Boolean(l%2),address:["jiangsu","nanjing","zhonghuamen"],treeSelect:"nanjing",addresses:["jiangsu","nanjing","zhonghuamen"],cascader:["jiangsu","nanjing","zhonghuamen"],quarter:"2019-05-10",year:"2019-05-10",radioGroup:l%4,checkboxGroup:[l%4],time:"2019-05-10 09:50:50"});this.$options.customData.tableData=a,this.$nextTick((function(){t.$refs.xTable.loadData(t.$options.customData.tableData,!0)}))}}},T=$,D=(0,h.Z)(T,p,f,!1,null,null,null),y=D.exports,Y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ta-big-table",{ref:"xTree",attrs:{resizable:"","show-overflow":"","tree-config":{children:"children",lazy:!0,hasChild:"hasChild",loadMethod:e.loadChildrenMethod,accordion:!0},"edit-config":{trigger:"click",mode:"row"},data:e.tableData,"checkbox-config":{labelField:"id"}}},[a("ta-big-table-column",{attrs:{type:"checkbox",title:"ID",width:"500","tree-node":""}}),a("ta-big-table-column",{attrs:{field:"name",title:"Name",width:"200","edit-render":{name:"$input",props:{autoFocus:!0}}}}),a("ta-big-table-column",{attrs:{field:"role",title:"Role",width:"200","edit-render":{name:"$input"}}}),a("ta-big-table-column",{attrs:{field:"sex",title:"Sex",width:"200","edit-render":{name:"$select"},"collection-type":"SEX"}}),a("ta-big-table-column",{attrs:{field:"age",title:"Age",width:"200","edit-render":{name:"$input-number"}}}),a("ta-big-table-column",{attrs:{field:"cascader",title:"Cascader",width:"200","edit-render":{name:"$cascader",props:{options:e.addressList}}}}),a("ta-big-table-column",{attrs:{field:"quarter",title:"Quarter",width:"200","edit-render":{name:"$quarter-picker",props:{format:"YYYY年Q季度"}}}}),a("ta-big-table-column",{attrs:{field:"hobby",title:"多选下拉",width:"200","edit-render":{name:"$select",props:{maxTagCount:2,mode:"multiple",options:e.hobbyList}}}}),a("ta-big-table-column",{attrs:{field:"switch",title:"Switch",width:"200","edit-render":{name:"$switch",trueText:"有效",falseText:"无效"}}}),a("ta-big-table-column",{attrs:{field:"checkbox",title:"Checkbox",width:"200","edit-render":{name:"$checkbox"}}}),a("ta-big-table-column",{attrs:{field:"treeSelect",title:"TreeSelect",width:"200","edit-render":{name:"$tree-select",showPath:!0,props:{treeData:e.addressList}}}})],1)},C=[],j=a(95082),L=[{label:"足球",value:0},{label:"篮球",value:1},{label:"排球",value:2},{label:"乒乓球",value:3}],S=[{value:"zhejiang",label:"浙江",children:[{value:"hangzhou",label:"杭州",children:[{value:"xihu",label:"西湖"}]}]},{value:"jiangsu",label:"江苏",children:[{value:"nanjing",label:"南京",children:[{value:"zhonghuamen",label:"中华门"}]}]}],z=[],q=0;q<200;q++)z.push({id:q.toString(),name:"前端入门到放弃"+q,role:q%2?"MP3":"XLSX",sex:"".concat(q%3),age:q,cascader:["jiangsu","nanjing","zhonghuamen"],quarter:"2019-05-10",hobby:[q%4],switch:Boolean(q%2),checkbox:Boolean(q%2),treeSelect:"nanjing",hasChild:!0});for(var M={name:"bigtableTreeTenColunmTest",data:function(){return{hobbyList:L,addressList:S,tableData:z,length:200}},methods:{loadChildrenMethod:function(e){for(var t=e.row,a=[],l=0;l<this.length;l++)a.push((0,j.Z)((0,j.Z)({},t),{},{id:t.id+"_"+l,name:"前端入门到放弃"+t.id+"_"+l,children:[],_XID:""}));return Promise.resolve(a)},changeTableData:function(e){this.length=e;for(var t=[],a=0;a<e;a++)t.push({id:a.toString(),name:"前端入门到放弃"+a,role:a%2?"MP3":"XLSX",sex:"".concat(a%3),age:a,cascader:["jiangsu","nanjing","zhonghuamen"],quarter:"2019-05-10",hobby:[a%4],switch:Boolean(a%2),checkbox:Boolean(a%2),treeSelect:"nanjing",hasChild:!0});this.tableData=t}}},_=M,B=(0,h.Z)(_,Y,C,!1,null,null,null),G=B.exports,R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ta-big-table",{ref:"xTree",attrs:{resizable:"","show-overflow":"","tree-config":{children:"children",lazy:!0,hasChild:"hasChild",loadMethod:e.loadChildrenMethod,accordion:!0},"edit-config":{trigger:"click",mode:"row"},data:e.tableData,"checkbox-config":{labelField:"id"}}},[a("ta-big-table-column",{attrs:{type:"checkbox",title:"ID",width:"500","tree-node":"",fixed:"left"}}),a("ta-big-table-column",{attrs:{field:"name",title:"Name",width:"150","edit-render":{name:"$input",props:{autoFocus:!0}}}}),a("ta-big-table-column",{attrs:{field:"age",title:"Age",width:"150","edit-render":{name:"$input-number",renderCell:e.renderDefaultAge,style:{color:"red",width:"100%"}}}}),a("ta-big-table-column",{attrs:{field:"sex",title:"Sex",width:"150","collection-type":"SEX","edit-render":{name:"$select"}}}),a("ta-big-table-column",{attrs:{field:"hobby",width:"220px",title:"多选下拉","edit-render":{name:"$select",props:{maxTagCount:2,mode:"multiple",options:e.hobbyList}}}}),a("ta-big-table-column",{attrs:{field:"date",title:"Date",width:"150","edit-render":{name:"$date-picker",props:{format:"YYYY-MM-DD"}}}}),a("ta-big-table-column",{attrs:{field:"time",title:"Time",width:"150","edit-render":{name:"$time-picker",props:{format:"HH:mm:ss"}}}}),a("ta-big-table-column",{attrs:{field:"month",title:"Month",width:"150","edit-render":{name:"$month-picker",props:{format:"YYYY-MM"}}}}),a("ta-big-table-column",{attrs:{field:"range",title:"Range",width:"250","edit-render":{name:"$range-picker",props:{format:"YYYY-MM-DD"}}}}),a("ta-big-table-column",{attrs:{field:"week",title:"Week",width:"150","edit-render":{name:"$week-picker",props:{format:"YYYY年第ww周"}}}}),a("ta-big-table-column",{attrs:{field:"quarter",title:"Quarter",width:"150","edit-render":{name:"$quarter-picker",props:{format:"YYYY年Q季度"}}}}),a("ta-big-table-column",{attrs:{field:"year",title:"Year",width:"150","edit-render":{name:"$year-picker",props:{format:"YYYY年"}}}}),a("ta-big-table-column",{attrs:{field:"rate",title:"Rate",width:"200","edit-render":{name:"$rate"}}}),a("ta-big-table-column",{attrs:{field:"switch",title:"Switch",width:"150","edit-render":{name:"$switch",trueText:"有效",falseText:"无效"}}}),a("ta-big-table-column",{attrs:{field:"checkbox",title:"Checkbox",width:"150","edit-render":{name:"$checkbox"}}}),a("ta-big-table-column",{attrs:{field:"radio",title:"Radio",width:"150","edit-render":{name:"$radio",props:{cancelChecked:!0}}}}),a("ta-big-table-column",{attrs:{field:"radioGroup",title:"RadioGroup",width:"320","edit-render":{name:"$radio-group",props:{options:e.hobbyList}}}}),a("ta-big-table-column",{attrs:{field:"checkboxGroup",title:"CheckboxGroup",width:"300","edit-render":{name:"$checkbox-group",props:{options:e.hobbyList}}}}),a("ta-big-table-column",{attrs:{field:"cascader",title:"Cascader",width:"300","edit-render":{name:"$cascader",props:{options:e.addressList}}}}),a("ta-big-table-column",{attrs:{field:"treeSelect",title:"TreeSelect",width:"300","edit-render":{name:"$tree-select",showPath:!0,props:{treeData:e.addressList}}}}),a("ta-big-table-column",{attrs:{field:"addresses",title:"TreeSelect多选",width:"300","edit-render":{name:"$tree-select",props:{multiple:!0,maxTagCount:2,treeData:e.addressList}}}})],1)},E=[],X=[{label:"足球",value:0},{label:"篮球",value:1},{label:"排球",value:2},{label:"乒乓球",value:3}],P=[{value:"zhejiang",label:"浙江",children:[{value:"hangzhou",label:"杭州",children:[{value:"xihu",label:"西湖"}]}]},{value:"jiangsu",label:"江苏",children:[{value:"nanjing",label:"南京",children:[{value:"zhonghuamen",label:"中华门"}]}]}],Z=[],A=0;A<100;A++)Z.push({id:A.toString(),name:"前端入门到放弃"+A,age:A,sex:"".concat(A%3),hobby:[A%4],date:"2019-05-10",month:"2019-05-10",range:["2019-05-10","2019-05-19"],week:"2019-05-10",rate:A%6,switch:Boolean(A%2),checkbox:Boolean(A%2),radio:Boolean(A%2),address:["jiangsu","nanjing","zhonghuamen"],treeSelect:"nanjing",addresses:["jiangsu","nanjing","zhonghuamen"],cascader:["jiangsu","nanjing","zhonghuamen"],quarter:"2019-05-10",year:"2019-05-10",radioGroup:A%4,checkboxGroup:[A%4],time:"2019-05-10 09:50:50",hasChild:!0});var N={name:"bigtableTreeTwentyColunmTest",data:function(){return{hobbyList:X,addressList:P,tableData:Z,length:200}},methods:{renderDefaultAge:function(e,t,a){var l=a.cellValue;return l+" 岁"},loadChildrenMethod:function(e){for(var t=e.row,a=[],l=0;l<this.length;l++)a.push((0,j.Z)((0,j.Z)({},t),{},{id:t.id+"_"+l,name:"前端入门到放弃"+t.id+"_"+l,children:[],_XID:""}));return Promise.resolve(a)},changeTableData:function(e){this.length=e;for(var t=[],a=0;a<e;a++)t.push({id:a.toString(),name:"前端入门到放弃"+a,role:a%2?"MP3":"XLSX",sex:"".concat(a%3),age:a,cascader:["jiangsu","nanjing","zhonghuamen"],quarter:"2019-05-10",hobby:[a%4],switch:Boolean(a%2),checkbox:Boolean(a%2),treeSelect:"nanjing",hasChild:!0});this.tableData=t}}},Q=N,F=(0,h.Z)(Q,R,E,!1,null,null,null),V=F.exports,H={name:"bigTableTest",components:{bigtableTenColunmTest:g,bigtableTwentyColunmTest:y,tableTreeTenColunm:G,tableTreeTwentyColunm:V},data:function(){return{bigDataLength:2e3,bigDataTreeLength:200,page:"1"}},methods:{callback:function(e){this.page=e,this.setData()},setData:function(){var e=this;"1"===this.page?this.$nextTick((function(){e.$refs.tenColunm.changeTableData(e.bigDataLength)})):"2"===this.page?this.$nextTick((function(){e.$refs.twentyColunm.changeTableData(e.bigDataLength)})):"3"===this.page?this.$nextTick((function(){e.$refs.tenTreeTableColunm.changeTableData(e.bigDataTreeLength)})):"4"===this.page&&this.$nextTick((function(){e.$refs.twentyTreeTableColunm.changeTableData(e.bigDataTreeLength)}))}}},I=H,W=(0,h.Z)(I,l,r,!1,null,"469160c0",null),J=W.exports}}]);