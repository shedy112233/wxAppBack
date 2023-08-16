"use strict";(self["webpackChunkta404_ui_cli"]=self["webpackChunkta404_ui_cli"]||[]).push([[8487],{38894:function(t,a,e){e.r(a),e.d(a,{default:function(){return ot}});for(var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticStyle:{"background-color":"rgba(240,242,245,1)",padding:"20px",height:"100vh"}},[e("ta-row",{attrs:{gutter:24}},[e("ta-col",{style:{marginBottom:"14px"},attrs:{sm:24,md:12,xl:6}},[e("chart-card",{attrs:{loading:t.loading,title:"总工资",total:"￥126,560"}},[e("ta-tooltip",{attrs:{slot:"action",title:"这是总薪资"},slot:"action"},[e("ta-icon",{attrs:{type:"info-circle-o"}})],1),e("div",[e("trend",{staticStyle:{"margin-right":"16px"},attrs:{term:"周同比",percentage:12,flag:"up"}},[e("span",{attrs:{slot:"term"},slot:"term"},[t._v("周")]),t._v(" 12% ")]),e("trend",{attrs:{term:"日同比",percentage:11,flag:"down"}},[e("span",{attrs:{slot:"term"},slot:"term"},[t._v("天")]),t._v(" 11% ")])],1),e("template",{slot:"footer"},[t._v(" 每天的钱"),e("span",[t._v("￥ 234.56")])])],2)],1),e("ta-col",{style:{marginBottom:"14px"},attrs:{sm:24,md:12,xl:6}},[e("chart-card",{attrs:{loading:t.loading,title:"访问量",total:"8846"}},[e("ta-tooltip",{attrs:{slot:"action",title:"介绍"},slot:"action"},[e("ta-icon",{attrs:{type:"info-circle-o"}})],1),e("div",[e("mini-area")],1),e("template",{slot:"footer"},[t._v(" 月访问量"),e("span",[t._v(" 1234")])])],2)],1),e("ta-col",{style:{marginBottom:"14px"},attrs:{sm:24,md:12,xl:6}},[e("chart-card",{attrs:{loading:t.loading,title:"付款",total:"6560"}},[e("ta-tooltip",{attrs:{slot:"action",title:"介绍"},slot:"action"},[e("ta-icon",{attrs:{type:"info-circle-o"}})],1),e("div",[e("mini-bar")],1),e("template",{slot:"footer"},[t._v(" 日付款 "),e("span",[t._v("60%")])])],2)],1),e("ta-col",{style:{marginBottom:"14px"},attrs:{sm:24,md:12,xl:6}},[e("chart-card",{attrs:{loading:t.loading,title:"影响力",total:"78%"}},[e("ta-tooltip",{attrs:{slot:"action",title:"影响力"},slot:"action"},[e("ta-icon",{attrs:{type:"info-circle-o"}})],1),e("div",[e("mini-progress",{attrs:{color:"rgb(19, 194, 194)",target:80,percentage:78,height:"8px"}})],1),e("template",{slot:"footer"},[e("trend",{staticStyle:{"margin-right":"16px"},attrs:{flag:"down",type:!0,term:"周同比",percentage:12}},[e("span",{attrs:{slot:"term"},slot:"term"},[t._v("周一")]),t._v(" 12% ")]),e("trend",{attrs:{flag:"up",term:"周同比",percentage:80}},[e("span",{attrs:{slot:"term"},slot:"term"},[t._v("5号")]),t._v(" 80% ")])],1)],2)],1)],1),e("ta-card",{staticStyle:{height:"calc(100vh - 234px)"},attrs:{loading:t.loading,bordered:!1,"body-style":{padding:"0"}}},[e("div",{staticClass:"salesCard"},[e("ta-tabs",{attrs:{"default-active-key":"1",size:"large","tab-bar-style":{marginBottom:"24px",paddingLeft:"16px"}}},[e("div",{staticClass:"extra-wrapper",attrs:{slot:"tabBarExtraContent"},slot:"tabBarExtraContent"},[e("div",{staticClass:"extra-item"},[e("a",[t._v("日")]),e("a",[t._v("周")]),e("a",[t._v("月")]),e("a",[t._v("年")])]),e("ta-range-picker",{style:{width:"256px"}})],1),e("ta-tab-pane",{key:"1",attrs:{loading:"true",tab:"薪资"}},[e("ta-row",[e("ta-col",{attrs:{xl:16,lg:12,md:12,sm:24,xs:24}},[e("bar",{attrs:{data:t.barData,title:"销售趋势"}})],1),e("ta-col",{attrs:{xl:8,lg:12,md:12,sm:24,xs:24}},[e("rank-list",{attrs:{title:"排行榜",list:t.rankList}})],1)],1)],1),e("ta-tab-pane",{key:"2",attrs:{tab:"访问量"}},[e("ta-row",[e("ta-col",{attrs:{xl:16,lg:12,md:12,sm:24,xs:24}},[e("bar",{attrs:{data:t.barData2,title:"访问量排行"}})],1),e("ta-col",{attrs:{xl:8,lg:12,md:12,sm:24,xs:24}},[e("rank-list",{attrs:{title:"访问量排行",list:t.rankList}})],1)],1)],1)],1)],1)])],1)},r=[],i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ta-card",{attrs:{loading:t.loading,"body-style":{padding:"20px 14px 8px"},bordered:!1}},[e("div",{staticClass:"chart-card-header"},[e("div",{staticClass:"meta"},[e("span",{staticClass:"chart-card-title"},[t._t("title",(function(){return[t._v(" "+t._s(t.title)+" ")]}))],2),e("span",{staticClass:"chart-card-action"},[t._t("action")],2)]),e("div",{staticClass:"total"},[t._t("total",(function(){return[e("span",[t._v(t._s("function"===typeof t.total&&t.total()||t.total))])]}))],2)]),e("div",{staticClass:"chart-card-content"},[e("div",{staticClass:"content-fix"},[t._t("default")],2)]),e("div",{staticClass:"chart-card-footer"},[e("div",{staticClass:"field"},[t._t("footer")],2)])])},s=[],o={name:"ChartCard",props:{title:{type:String,default:""},total:{type:[Function,Number,String],required:!1,default:null},loading:{type:Boolean,default:!1}}},l=o,c=e(1001),d=(0,c.Z)(l,i,s,!1,null,"388a4f54",null),u=d.exports,m=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"antv-chart-mini"},[e("div",{staticClass:"chart-wrapper",style:{height:46}},[e("div",{staticStyle:{height:"100px"}},[e("ta-echarts",{staticStyle:{height:"100px"},attrs:{option:t.option}})],1)])])},p=[],h=e(36797),y=e.n(h),f=[],g=(new Date).getTime(),x=0;x<10;x++)f.push({x:y()(new Date(g+864e5*x)).format("YYYY-MM-DD"),y:Math.round(10*Math.random())});for(var v=["x*y",function(t,a){return{name:t,value:a}}],_=[{dataKey:"x",min:2},{dataKey:"y",title:"时间",min:1,max:22}],b={name:"MiniArea",data:function(){return{data:f,tooltip:v,scale:_,height:100,option:{xAxis:{show:!1,type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value",show:!1},series:[{data:[120,200,150,80,70,110,130],type:"bar",itemStyle:{normal:{color:"#63B8FF"}}}]}}}},C=b,w=(0,c.Z)(C,m,p,!1,null,"a73396a4",null),S=w.exports,k=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"antv-chart-mini"},[e("div",{staticClass:"chart-wrapper",style:{height:46}},[e("div",{staticStyle:{height:"100px"}},[e("ta-echarts",{staticStyle:{height:"100px"},attrs:{option:t.option}})],1)])])},L=[],D=[],E=(new Date).getTime(),M=0;M<10;M++)D.push({x:y()(new Date(E+864e5*M)).format("YYYY-MM-DD"),y:Math.round(10*Math.random())});for(var B=["x*y",function(t,a){return{name:t,value:a}}],A=[{dataKey:"x",min:2},{dataKey:"y",title:"时间",min:1,max:30}],$={name:"MiniBar",data:function(){return{data:D,tooltip:B,scale:A,height:100,option:{xAxis:{show:!1,type:"category",boundaryGap:!1,data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{show:!1,type:"value"},series:[{data:[820,732,301,634,190,670,320],type:"line",smooth:!0,areaStyle:{}}]}}}},Z=$,z=(0,c.Z)(Z,k,L,!1,null,"0be71fec",null),F=z.exports,T=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"chart-trend"},[t._v(" "+t._s(t.term)+" "),e("span",[t._v(t._s(t.rate)+"%")]),e("span",{class:["trend-icon",t.trend]},[e("ta-icon",{attrs:{type:"caret-"+t.trend}})],1)])},Y=[],q={name:"Trend",props:{term:{type:String,default:"",required:!0},percentage:{type:Number,default:null},type:{type:Boolean,default:null},target:{type:Number,default:0},value:{type:Number,default:0},fixed:{type:Number,default:2}},data:function(){return{trend:"down",rate:this.percentage}},created:function(){var t=null===this.type?this.value>=this.target:this.type;this.trend=t?"up":"down",this.rate=(null===this.percentage?100*Math.abs(this.value-this.target)/this.target:this.percentage).toFixed(this.fixed)}},N=q,K=(0,c.Z)(N,T,Y,!1,null,"94298d70",null),I=K.exports,P=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"chart-mini-progress"},[e("div",{staticClass:"target",style:{left:t.target+"%"}},[e("span",{style:{backgroundColor:t.color}}),e("span",{style:{backgroundColor:t.color}})]),e("div",{staticClass:"progress-wrapper"},[e("div",{staticClass:"progress",style:{backgroundColor:t.color,width:t.percentage+"%",height:t.height}})])])},j=[],X={name:"MiniProgress",props:{target:{type:Number,default:0},height:{type:String,default:"10px"},color:{type:String,default:"#13C2C2"},percentage:{type:Number,default:0}}},G=X,H=(0,c.Z)(G,P,j,!1,null,"6ca312d3",null),R=H.exports,O=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{style:{padding:"0 0 32px 32px"}},[e("h4",{style:{marginBottom:"20px"}},[t._v(" "+t._s(t.title)+" ")]),e("div",{staticStyle:{height:"264px"}},[e("ta-echarts",{staticStyle:{height:"274px",width:"100%"},attrs:{option:t.option}})],1)])},V=[],W={name:"Bar",props:{title:{type:String,default:""},data:{type:Array,default:function(){return[]}},scale:{type:Array,default:function(){return[{dataKey:"x",min:2},{dataKey:"y",title:"时间",min:1,max:22}]}},tooltip:{type:Array,default:function(){return["x*y",function(t,a){return{name:t,value:a}}]}}},created:function(){var t=this;this.data.forEach((function(a){t.xData.push(a.x),t.yData.push(a.y)})),this.option={xAxis:{type:"category",data:this.xData,splitLine:{show:!1}},yAxis:{type:"value",splitLine:{show:!1}},series:[{data:this.yData,type:"bar",itemStyle:{normal:{color:"#63B8FF"}}}]}},data:function(){return{xData:[],yData:[],option:{}}}},U=W,J=(0,c.Z)(U,O,V,!1,null,null,null),Q=J.exports,tt=e(1500),at=[],et=[],nt=0;nt<12;nt+=1)at.push({x:"".concat(nt+1,"月"),y:Math.floor(1e3*Math.random())+200}),et.push({x:"".concat(nt+1,"月"),y:Math.floor(1e3*Math.random())+200});var rt={name:"analysisPage",components:{ChartCard:u,MiniArea:S,MiniBar:F,MiniProgress:R,Trend:I,RankList:tt.Z,Bar:Q},data:function(){return{loading:!1,barData:at,barData2:et,rankList:[{name:"银海研发部前端组",total:1234.2},{name:"银海技术部",total:134.2},{name:"银海研发部",total:2034.2},{name:"银海研发部前端组",total:1234.2},{name:"银海技术部",total:134.2},{name:"银海研发部",total:2034.2},{name:"银海研发部前端组",total:1234.2},{name:"银海技术部",total:134.2},{name:"银海研发部",total:2034.2}]}}},it=rt,st=(0,c.Z)(it,n,r,!1,null,"1999aa08",null),ot=st.exports},1500:function(t,a,e){e.d(a,{Z:function(){return c}});var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"rank"},[e("h4",{staticClass:"title"},[t._v(" "+t._s(t.title)+" ")]),e("div",{staticStyle:{height:"calc(100vh - 370px)","overflow-y":"scroll"}},[e("ta-list",{attrs:{"item-layout":"horizontal","data-source":t.list},scopedSlots:t._u([{key:"renderItem",fn:function(a,n){return e("ta-list-item",{},[e("ta-list-item-meta",[e("span",{attrs:{slot:"description"},slot:"description"},[t._v("薪资为 "+t._s(a.total))]),e("a",{attrs:{slot:"title",href:"/#/docs/components/list-cn"},slot:"title"},[t._v(t._s(a.name))]),e("ta-avatar",{attrs:{slot:"avatar",src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"},slot:"avatar"})],1)],1)}}])})],1)])},r=[],i={name:"RankList",props:{title:{type:String,default:""},list:{type:Array,default:null}}},s=i,o=e(1001),l=(0,o.Z)(s,n,r,!1,null,"325d1479",null),c=l.exports},56507:function(t,a,e){e.r(a),e.d(a,{default:function(){return c}});var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"dashboardPage"}},[t._v(" dashboardPage ")])},r=[],i={name:"dashboardPage"},s=i,o=e(1001),l=(0,o.Z)(s,n,r,!1,null,null,null),c=l.exports},41447:function(t,a,e){e.r(a),e.d(a,{default:function(){return tt}});for(var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticStyle:{"background-color":"rgba(240,242,245,1)"}},[e("div",{staticStyle:{height:"50px","line-height":"50px",padding:"0 10px"}},[e("ta-avatar",{attrs:{slot:"avatar",src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"},slot:"avatar"}),e("span",{staticStyle:{"font-size":"16px","font-weight":"bold","margin-left":"16px"}},[t._v("你好，打工人")]),e("div",{staticStyle:{float:"right"}},[e("ta-button",{on:{click:t.resetLayout}},[t._v(" 恢复 ")]),t.setting?t._e():e("ta-button",{on:{click:t.settingComponents}},[t._v(" 删除 ")]),t.setting?e("ta-button",{on:{click:t.cancelSetting}},[t._v(" 确认 ")]):t._e(),e("ta-dropdown",[e("ta-menu",{attrs:{slot:"overlay"},on:{click:t.addNewMoudule},slot:"overlay"},t._l(t.cloneLayoutDate,(function(a){return e("ta-menu-item",{key:a.i},[t._v(" "+t._s(a.name)+" ")])})),1),e("ta-button",[t._v(" 新增模块 "),e("ta-icon",{attrs:{type:"down"}})],1)],1)],1)],1),e("div",{staticStyle:{height:"100%",width:"100%"}},[e("grid-layout",{staticClass:"vue-grid-layout",staticStyle:{width:"100%"},attrs:{layout:t.layout,"auto-size":!0,"col-num":30,"row-height":20,"max-rows":40,"is-draggable":!0,"is-resizable":!0,"vertical-compact":!0,margin:[10,10],"use-css-transforms":!0}},t._l(t.layout,(function(a){return e("grid-item",{key:a.i,staticStyle:{"touch-action":"none"},attrs:{x:a.x,y:a.y,w:a.w,h:a.h,i:a.i,"min-w":10},on:{resize:t.resizeEvent,move:t.moveEvent,resized:t.resizedEvent,moved:t.movedEvent}},[e(a.component,{tag:"component",attrs:{id:a.i,setting:t.setting},on:{deleteCom:t.deleteCom}})],1)})),1)],1),e("div",{staticStyle:{height:"60px","text-align":"center","line-height":"60px",color:"#999"}},[t._v(" 到底啦... ")])])},r=[],i=e(23533),s=e.n(i),o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("card-frame",{attrs:{setting:t.setting,id:t.id},on:{deleteCom:t.deleteCom}},[e("span",{attrs:{slot:"header"},slot:"header"},[t._v("公司动态")]),e("ta-list",{attrs:{"item-layout":"horizontal","data-source":t.data},scopedSlots:t._u([{key:"renderItem",fn:function(a,n){return e("ta-list-item",{},[e("ta-list-item-meta",{attrs:{description:a.describe}},[e("a",{attrs:{slot:"title",href:"/#/docs/components/list-cn"},slot:"title"},[t._v(t._s(a.title))]),e("ta-avatar",{attrs:{slot:"avatar",src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"},slot:"avatar"})],1)],1)}}])})],1)},l=[],c={props:{setting:{type:Boolean,required:!0},id:{type:String,required:!0}}},d=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticStyle:{height:"100%",position:"relative"}},[e("div",{staticClass:"card-header"},[t._t("header"),t.setting?e("ta-icon",{staticStyle:{float:"right","margin-top":"16px","margin-right":"12px"},attrs:{type:"delete"},on:{click:t.deleteItem}}):t._e()],2),e("div",{staticClass:"scrollbar",staticStyle:{height:"calc(100% - 50px)","overflow-y":"auto",padding:"10px"}},[t._t("default")],2)])},u=[],m={name:"cardFrame",props:{setting:{type:Boolean,required:!0},id:{type:String,required:!0}},methods:{deleteItem:function(){this.$emit("deleteCom",this.id)}}},p=m,h=e(1001),y=(0,h.Z)(p,d,u,!1,null,"70cb2b84",null),f=y.exports,g=[{title:"李太白",describe:"每日7:30到公司，刷新纪录!"},{title:"姜太虚",describe:"实现xxxxx，好厉害!"},{title:"李xx",describe:"xxx项目变更申请表（用户模板，案例用于部级项目）"},{title:"江流儿",describe:"xxxx项目需求调研方案（用户模板，范例用于省部级项目）!"},{title:"李太白",describe:"每日7:30到公司，刷新纪录!"},{title:"李太白",describe:"每日7:30到公司，刷新纪录!"}],x={name:"rankList",mixins:[c],components:{cardFrame:f},data:function(){return{data:g}},methods:{deleteCom:function(t){this.$emit("deleteCom",t)}}},v=x,_=(0,h.Z)(v,o,l,!1,null,"58c12dbe",null),b=_.exports,C=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("card-frame",{attrs:{setting:t.setting,id:t.id},on:{deleteCom:t.deleteCom}},[e("span",{attrs:{slot:"header"},slot:"header"},[t._v("平台更新")]),e("div",{domProps:{innerHTML:t._s(t.updateContext)}})])},w=[],S={name:"updatLog",mixins:[c],components:{cardFrame:f},data:function(){return{updateContext:"1、新增xxx功能<br>\n            2、修复了xxxbug<br>\n            3、修复了xxxbug<br><br>\n            1、新增xxx功能<br>\n            2、更新了啥啥啥<br>\n            3、更新了啥啥啥<br>\n            1、更新了啥啥啥<br>\n            2、更新了啥啥啥<br>\n            3、更新了啥啥啥<br>"}},methods:{deleteCom:function(t){this.$emit("deleteCom",t)}}},k=S,L=(0,h.Z)(k,C,w,!1,null,"fdb7f916",null),D=L.exports,E=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("card-frame",{attrs:{setting:t.setting,id:t.id},on:{deleteCom:t.deleteCom}},[e("span",{attrs:{slot:"header"},slot:"header"},[t._v("我的团队")]),e("ta-list",{attrs:{grid:{gutter:16,xs:1,sm:1,md:1,lg:2,xl:4,xxl:4},"data-source":t.data},scopedSlots:t._u([{key:"renderItem",fn:function(a,n){return e("ta-list-item",{},[e("ta-card",{attrs:{title:a.title}},[t._v(" 成员: "),e("span",{staticStyle:{color:"#999"}},[t._v(t._s(a.user))])])],1)}}])})],1)},M=[],B=[{title:"ta404 前端组",user:"星星的猫、弯桥儿"},{title:"ta+3组",user:"星星的猫、弯桥儿"},{title:"技术研发组",user:"星星的猫、弯桥儿"},{title:"UE组",user:"星星的猫、弯桥儿"},{title:"Title 2动次打次多吃点",user:"星星的猫、弯桥儿"}],A={name:"teamList",mixins:[c],components:{cardFrame:f},data:function(){return{data:B}},methods:{deleteCom:function(t){this.$emit("deleteCom",t)}}},$=A,Z=(0,h.Z)($,E,M,!1,null,"603f3274",null),z=Z.exports,F=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("card-frame",{attrs:{id:t.id,setting:t.setting},on:{deleteCom:t.deleteCom}},[e("span",{attrs:{slot:"header"},slot:"header"},[t._v("工作总览")]),e("ta-card",{attrs:{loading:t.loading,bordered:!1,"body-style":{padding:"0"}}},[e("div",{staticClass:"salesCard"},[e("ta-tabs",{attrs:{"default-active-key":"1",size:"large","tab-bar-style":{marginBottom:"24px",paddingLeft:"16px"}}},[e("div",{staticClass:"extra-wrapper",attrs:{slot:"tabBarExtraContent"},slot:"tabBarExtraContent"},[e("ta-range-picker",{style:{width:"250px"}})],1),e("ta-tab-pane",{key:"1",attrs:{tab:" 工作量 ",forceRender:!0}},[e("ta-row",[e("ta-col",{attrs:{xl:16,lg:12,md:12,sm:24,xs:24}},[t.showB?e("bar",{attrs:{data:t.barData,title:"工作曲线"}}):t._e()],1),e("ta-col",{attrs:{xl:8,lg:12,md:12,sm:24,xs:24}},[e("rank-list",{attrs:{title:"排行榜",list:t.rankList}})],1)],1)],1),e("ta-tab-pane",{key:"2",attrs:{tab:" 摸鱼量 ",forceRender:!0}},[e("ta-row",[e("ta-col",{attrs:{xl:16,lg:12,md:12,sm:24,xs:24}},[t.showA?e("bar",{attrs:{data:t.barData2,title:"摸鱼王排行"}}):t._e()],1),e("ta-col",{attrs:{xl:8,lg:12,md:12,sm:24,xs:24}},[e("rank-list",{attrs:{title:"摸鱼排行",list:t.rankList}})],1)],1)],1)],1)],1)])],1)},T=[],Y=(e(32564),e(1500)),q=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{style:{padding:"0 0 32px 32px"}},[e("h4",{style:{marginBottom:"20px"}},[t._v(" "+t._s(t.title)+" ")]),e("div",{staticStyle:{height:"264px",width:"100%"}},[e("ta-echarts",{staticStyle:{height:"274px",width:"100%"},attrs:{option:t.option}})],1)])},N=[],K={name:"Bar",props:{title:{type:String,default:""},data:{type:Array,default:function(){return[]}},scale:{type:Array,default:function(){return[{dataKey:"x",min:2},{dataKey:"y",title:"时间",min:1,max:22}]}},tooltip:{type:Array,default:function(){return["x*y",function(t,a){return{name:t,value:a}}]}}},created:function(){var t=this;this.data.forEach((function(a){t.xData.push(a.x),t.yData.push(a.y)})),this.option={xAxis:{type:"category",data:this.xData,splitLine:{show:!1}},yAxis:{type:"value",splitLine:{show:!1}},series:[{data:this.yData,type:"bar",itemStyle:{normal:{color:"#63B8FF"}}}]}},mounted:function(){},data:function(){return{xData:[],yData:[],option:{}}}},I=K,P=(0,h.Z)(I,q,N,!1,null,null,null),j=P.exports,X=[],G=[],H=0;H<12;H+=1)X.push({x:"".concat(H+1,"月"),y:Math.floor(1e3*Math.random())+200}),G.push({x:"".concat(H+1,"月"),y:Math.floor(1e3*Math.random())+200});var R={name:"MySituation",components:{cardFrame:f,rankList:Y.Z,Bar:j},mixins:[c],data:function(){return{barData:X,barData2:G,loading:!1,showB:!1,showA:!1,rankList:[{name:"银海研发部前端组",total:1234.2},{name:"银海技术部",total:134.2},{name:"银海研发部",total:2034.2}]}},mounted:function(){var t=this;setTimeout((function(){t.showB=!0,t.showA=!0}),100)},methods:{deleteCom:function(t){this.$emit("deleteCom",t)}}},O=R,V=(0,h.Z)(O,F,T,!1,null,"ca57173e",null),W=V.exports,U={name:"Worktable",components:{GridLayout:s().GridLayout,GridItem:s().GridItem,rankList:b,updatLog:D,teamList:z,mySituation:W},data:function(){return{setting:!1,layout:[{x:0,y:0,w:10,h:10,i:"0",component:"updatLog",name:"更新日志"},{x:0,y:10,w:10,h:10,i:"1",component:"teamList",name:"我的团队"},{x:0,y:20,w:30,h:20,i:"2",component:"mySituation",name:"工作总览"},{x:10,y:0,w:20,h:20,i:"4",component:"rankList",name:"公司动态"}],cloneLayoutDate:[{x:0,y:0,w:10,h:10,i:"0",component:"updatLog",name:"更新日志"},{x:0,y:10,w:10,h:10,i:"1",component:"teamList",name:"我的团队"},{x:0,y:20,w:30,h:20,i:"2",component:"mySituation",name:"工作总览"},{x:10,y:0,w:20,h:20,i:"4",component:"rankList",name:"公司动态"}]}},methods:{addNewMoudule:function(t){var a=!0,e={x:0,y:10,w:10,h:10};"2"===t.key&&(e.w=30,e.h=20),this.layout.forEach((function(e){e.i===t.key&&(a=!1)})),a?(this.cloneLayoutDate.forEach((function(a){a.i===t.key&&(e.i=a.i,e.component=a.component,e.name=a.name)})),this.layout.push(e)):this.$message.error("已展现此模块。"),this.setting=!1},deleteCom:function(t){this.layout=this.layout.filter((function(a){return a.i!==t}))},cancelSetting:function(){this.setting=!1},settingComponents:function(){this.setting=!0},resetLayout:function(){this.layout=[{x:0,y:0,w:10,h:10,i:"0",component:"updatLog",name:"更新日志"},{x:0,y:10,w:10,h:10,i:"1",component:"teamList",name:"我的团队"},{x:0,y:20,w:30,h:20,i:"2",component:"mySituation",name:"工作总览"},{x:10,y:0,w:20,h:20,i:"4",component:"rankList",name:"公司动态"}],this.setting=!1},moveEvent:function(t,a,e,n){},resizeEvent:function(t,a,e){},movedEvent:function(t,a,e,n){},resizedEvent:function(t,a,e,n,r){}}},J=U,Q=(0,h.Z)(J,n,r,!1,null,"ea58e58c",null),tt=Q.exports}}]);