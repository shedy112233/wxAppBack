"use strict";(self["webpackChunkta404_ui_cli"]=self["webpackChunkta404_ui_cli"]||[]).push([[4563],{78427:function(t,e,n){n.r(e),n.d(e,{default:function(){return T}});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fit",attrs:{id:"environment"}},[n("ta-border-layout",{attrs:{layout:{header:"0px"},centerCfg:{showBar:!0,toolBarStyle:{height:"50px",lineHeight:"48px"}},showBorder:!1}},[n("div",{attrs:{slot:"centerExtraContent"},slot:"centerExtraContent"},[n("div",{staticStyle:{float:"right"}},[n("ta-button",{attrs:{icon:"area-chart"},on:{click:function(e){return t.showEnvironmentChart()}}}),n("ta-button",{on:{click:function(e){return t.exportData()}}},[t._v("导出")])],1)]),n("ta-table",{attrs:{columns:t.environmentColumns,dataSource:t.environmentGridData,pagination:!1},scopedSlots:t._u([{key:"numday",fn:function(e,a){return n("a",{on:{click:function(e){return t.clickNumber("day",a)}}},[t._v(t._s(e))])}},{key:"numweek",fn:function(e,a){return n("a",{on:{click:function(e){return t.clickNumber("week",a)}}},[t._v(t._s(e))])}},{key:"nummonth",fn:function(e,a){return n("a",{on:{click:function(e){return t.clickNumber("month",a)}}},[t._v(t._s(e))])}},{key:"numyear",fn:function(e,a){return n("a",{on:{click:function(e){return t.clickNumber("year",a)}}},[t._v(t._s(e))])}},{key:"numall",fn:function(e,a){return n("a",{on:{click:function(e){return t.clickNumber("all",a)}}},[t._v(t._s(e))])}}])})],1),n("ta-modal",{attrs:{centered:"",width:"1000px",bodyStyle:{height:"600px",padding:"0"},footer:null,destroyOnClose:!0,maskClosable:!0,title:"数据分析",closable:!0},on:{close:function(e){return t.closeEnvironmentChart(!1)}},model:{value:t.showChartVisible,callback:function(e){t.showChartVisible=e},expression:"showChartVisible"}},[n("environment-chart",{ref:"loginHistoryChart",on:{closeModal:t.closeEnvironmentChart}})],1),n("ta-modal",{attrs:{title:t.pieModelTitle,visible:t.pieModelVisible,destroyOnClose:!0,centered:!0,width:"1200px",bodyStyle:{height:"520px",padding:"0px 0px 0px 0px","overflow-y":"auto"},footer:null},on:{cancel:t.fnCloseModel}},[n("environment-detail",{ref:"environmentChart",attrs:{bindData:t.bindData}})],1)],1)},i=[],r=n(35121),s=n(55437),o=n(99440),l=function(){var t=this,e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"fit",attrs:{id:"environmentDetail"}},[a("ta-border-layout",{attrs:{layout:{header:"70px"},centerCfg:{showBar:!1}}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("ta-form",{attrs:{autoFormCreate:function(e){t.form4=e},layout:"horizontal"}},[a("ta-row",[a("ta-col",{attrs:{span:5}},[a("ta-form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"用户姓名",labelCol:{span:8},wrapperCol:{span:16}}},[a("ta-input",{model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1)],1),a("ta-col",{attrs:{span:5}},[a("ta-form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"操作系统",labelCol:{span:11},wrapperCol:{span:13}}},[a("ta-input",{attrs:{disabled:e.bindData.isTypecs},model:{value:e.bindData.typecs,callback:function(t){e.$set(e.bindData,"typecs",t)},expression:"bindData.typecs"}})],1)],1),a("ta-col",{attrs:{span:5}},[a("ta-form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"分辨率",labelCol:{span:10},wrapperCol:{span:14}}},[a("ta-input",{attrs:{disabled:e.bindData.isTypecss},model:{value:e.bindData.typecss,callback:function(t){e.$set(e.bindData,"typecss",t)},expression:"bindData.typecss"}})],1)],1),a("ta-col",{attrs:{span:5}},[a("ta-form-item",{staticStyle:{"margin-bottom":"0"},attrs:{label:"浏览器",labelCol:{span:10},wrapperCol:{span:14}}},[a("ta-input",{attrs:{disabled:e.bindData.isTypecb},model:{value:e.bindData.typecb,callback:function(t){e.$set(e.bindData,"typecb",t)},expression:"bindData.typecb"}})],1)],1),a("ta-col",{attrs:{offset:1,span:3}},[a("ta-form-item",{staticStyle:{"margin-bottom":"0"},attrs:{wrapperCol:{span:24}}},[a("ta-button-group",[a("ta-button",{attrs:{type:"primary",icon:"search"},on:{click:e.queryLoginEnvironmentDetail}},[e._v("查询")])],1)],1)],1)],1)],1)],1),a("ta-table",{attrs:{columns:e.environmentDetialColumns,dataSource:e.environmentDetialGridData,pagination:!1}}),a("ta-pagination",{ref:"detailGridPager",staticStyle:{float:"right","margin-top":"10px"},attrs:{showSizeChanger:"",showQuickJumper:"",dataSource:e.environmentDetialGridData,defaultPageSize:6,params:e.detailPageParams,url:"logmg/loginLog/loginLogAnalysisRestService/queryLoginEnvironmentDetail"},on:{"update:dataSource":function(t){e.environmentDetialGridData=t},"update:data-source":function(t){e.environmentDetialGridData=t}}})],1)],1)},c=[],d=[{title:"登录ID",dataIndex:"loginId",key:"loginId",width:167,align:"center"},{title:"姓名",dataIndex:"name",key:"name",width:167,align:"center"},{title:"登录时间",dataIndex:"loginTime",key:"loginTime",width:167,align:"center"},{title:"客户端ip",dataIndex:"clientIp",key:"clientIp",width:167,align:"center"},{title:"客户端系统",dataIndex:"clientSystem",key:"clientSystem",width:167,align:"center"},{title:"客户端浏览器",key:"clientBrowser",dataIndex:"clientBrowser",width:167,align:"center"},{title:"客户端分辨率",key:"clientScreenSize",dataIndex:"clientScreenSize",width:167,align:"center"}],u={name:"environmentDetail",props:["bindData"],data:function(){return{name:"",environmentDetialColumns:d,environmentDetialGridData:[]}},mounted:function(){this.queryLoginEnvironmentDetail()},methods:{detailPageParams:function(){return{startDate:this.bindData.startDate,endDate:this.bindData.endDate,gridColumnType:this.bindData.gridColumnType,name:this.name,typecs:this.bindData.typecs,typecss:this.bindData.typecss,typecb:this.bindData.typecb}},queryLoginEnvironmentDetail:function(){this.$refs.detailGridPager.loadData((function(t){}))}}},m=u,h=n(1001),p=(0,h.Z)(m,l,c,!1,null,null,null),f=p.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ta-row",{attrs:{gutter:10}},[n("ta-col",{attrs:{span:4}},[n("ta-date-picker",{staticStyle:{width:"100%"},attrs:{format:"YYYY-MM-DD",placeholder:"开始日期"},model:{value:t.startDate,callback:function(e){t.startDate=e},expression:"startDate"}})],1),n("ta-col",{attrs:{span:4}},[n("ta-date-picker",{staticStyle:{width:"100%"},attrs:{format:"YYYY-MM-DD",placeholder:"结束日期"},model:{value:t.endDate,callback:function(e){t.endDate=e},expression:"endDate"}})],1),n("ta-col",{attrs:{span:16}},[n("ta-button-group",[n("ta-button",{attrs:{type:"primary",icon:"search"},on:{click:t.getEnvironmentInfo}},[t._v("查询")]),n("ta-button",{attrs:{icon:"reload"},on:{click:t.environmentReload}},[t._v("重置")])],1)],1)],1),n("ta-divider",{staticStyle:{"padding-top":"5px","margin-top":"7px","margin-bottom":"0","background-color":"#F5F5F5"}}),n("div",{staticStyle:{position:"absolute",left:"30px",height:"80px","z-index":"99","margin-top":"10px"}},[n("ta-radio-group",{on:{change:t.getEnvironmentInfo},model:{value:t.radioValue,callback:function(e){t.radioValue=e},expression:"radioValue"}},[n("ta-radio",{style:t.radioStyle,attrs:{value:1}},[t._v("客户端系统版本分析")]),n("ta-radio",{style:t.radioStyle,attrs:{value:2}},[t._v("客户端分辨率分析")]),n("ta-radio",{style:t.radioStyle,attrs:{value:3}},[t._v("客户端浏览器版本分析")])],1)],1),n("ta-e-charts",{attrs:{height:"360px",chartsType:"pie",data:t.chartData,settings:t.chartSetting.settings,legend:t.chartSetting.legend,title:t.chartSetting.title,events:t.chartEvents}})],1)},g=[],y=n(36797),b=n.n(y),v=[{title:"客户端系统版本",dataIndex:"typecs",key:"typecs",align:"center",width:280},{title:"24小时内",dataIndex:"numday",key:"numday",align:"center",scopedSlots:{customRender:"numday"},width:280},{title:"1周内",dataIndex:"numweek",key:"numweek",align:"center",scopedSlots:{customRender:"numweek"},width:280},{title:"1月内",dataIndex:"nummonth",key:"nummonth",align:"center",scopedSlots:{customRender:"nummonth"},width:280},{title:"1年内",dataIndex:"numyear",key:"numyear",align:"center",scopedSlots:{customRender:"numyear"},width:280},{title:"总计",key:"numall",dataIndex:"numall",align:"center",scopedSlots:{customRender:"numall"},width:280}],w={name:"environmentChart",components:{TaECharts:o.Z},data:function(){var t=this;return this.chartEvents={click:function(e){t.getEnvironmentDetailInfo(e.name)}},{startDate:null,endDate:null,radioValue:1,radioStyle:{display:"block",height:"30px",lineHeight:"30px"},environmentColumns:v,environmentGridData:[],bindData:{},pieModelVisible:!1,pieModelTitle:"",chartSetting:{title:{text:"客户端系统版本统计",top:10,x:"center"},legend:{type:"scroll",orient:"vertical",top:40,right:10},settings:{selectedMode:"single",hoverAnimation:!1}},chartData:{columns:["name","value"],rows:[]}}},mounted:function(){this.getEnvironmentInfo()},methods:{moment:b(),getEnvironmentInfo:function(){var t=this,e=this.startDate?this.startDate.format("YYYY-MM-DD"):"",n=this.endDate?this.endDate.format("YYYY-MM-DD"):"";if(new Date(e).getTime()>new Date(n).getTime())this.$message.error("开始日期不能大于结束日期");else{var a={startDate:e,endDate:n};1===this.radioValue?r.Z.analysisClientSystemInfo(a,(function(e){t.chartSetting.title.text="客户端系统版本统计",t.chartData.rows=t.taGetSeriesData(e.data.csSeriesData),t.environmentColumns.shift(),t.environmentColumns.unshift({title:"客户端系统版本",dataIndex:"typecs",key:"typecs",width:280,align:"center"}),t.environmentGridData=e.data.csEnvironmentGridData,0===e.data.csSeriesData.length&&t.$message.error("未获取到图表数据")})):2===this.radioValue?r.Z.analysisClientScreenInfo(a,(function(e){t.chartSetting.title.text="客户端分辨率统计",t.chartData.rows=t.taGetSeriesData(e.data.cssSeriesData),t.environmentColumns.shift(),t.environmentColumns.unshift({title:"客户端分辨率",dataIndex:"typecss",key:"typecss",width:280,align:"center"}),t.environmentGridData=e.data.cssEnvironmentGridData,0===e.data.cssSeriesData.length&&t.$message.error("未获取到图表数据")})):3===this.radioValue&&r.Z.analysisClientBrowserInfo(a,(function(e){t.chartSetting.title.text="客户端浏览器版本统计",t.chartData.rows=t.taGetSeriesData(e.data.cbSeriesData),t.environmentColumns.shift(),t.environmentColumns.unshift({title:"客户端浏览器版本",dataIndex:"typecb",key:"typecb",width:280,align:"center"}),t.environmentGridData=e.data.cbEnvironmentGridData,0===e.data.cbSeriesData.length&&t.$message.error("未获取到图表数据")}))}},getEnvironmentDetailInfo:function(t){var e=this.startDate?this.startDate.format("YYYY-MM-DD"):"",n=this.endDate?this.endDate.format("YYYY-MM-DD"):"";new Date(e).getTime()>new Date(n).getTime()?this.$message.error("开始日期不能大于结束日期"):(this.bindData.startDate=e,this.bindData.endDate=n,this.pieModelTitle=t+"--用户登录环境查询",1===this.radioValue?(this.bindData.isTypecs=!0,this.bindData.typecs=t):2===this.radioValue?(this.bindData.isTypecss=!0,this.bindData.typecss=t):3===this.radioValue&&(this.bindData.isTypecb=!0,this.bindData.typecb=t),this.pieModelVisible=!0)},clickNumber:function(t,e){var n;this.bindData.gridColumnType=t,1===this.radioValue?n=e.typecs:2===this.radioValue?n=e.typecss:3===this.radioValue&&(n=e.typecb),this.getEnvironmentDetailInfo(n)},environmentReload:function(){this.startDate=null,this.endDate=null},taGetSeriesData:function(t){var e=[];for(var n in t)e.push({name:t[n].type,value:t[n].count});return e},fnCloseModel:function(){this.pieModelVisible=!1,this.bindData={}}}},S=w,k=(0,h.Z)(S,D,g,!1,null,null,null),C=k.exports,x=[{title:"客户端系统版本",dataIndex:"typecs",key:"typecs",align:"center",width:280},{title:"24小时内",dataIndex:"numday",key:"numday",align:"center",scopedSlots:{customRender:"numday"},width:280},{title:"1周内",dataIndex:"numweek",key:"numweek",align:"center",scopedSlots:{customRender:"numweek"},width:280},{title:"1月内",dataIndex:"nummonth",key:"nummonth",align:"center",scopedSlots:{customRender:"nummonth"},width:280},{title:"1年内",dataIndex:"numyear",key:"numyear",align:"center",scopedSlots:{customRender:"numyear"},width:280},{title:"总计",key:"numall",dataIndex:"numall",align:"center",scopedSlots:{customRender:"numall"},width:280}],I={name:"environment",components:{environmentDetail:f,TaECharts:o.Z,environmentChart:C},data:function(){var t=this;return this.chartEvents={click:function(e){t.getEnvironmentDetailInfo(e.name)}},{showChartVisible:!1,loginName:"",startDate:null,endDate:null,radioValue:1,radioStyle:{display:"block",height:"30px",lineHeight:"30px"},environmentColumns:x,environmentGridData:[],bindData:{},pieModelVisible:!1,pieModelTitle:"",chartSetting:{title:{text:"客户端系统版本统计",top:10,x:"center"},legend:{type:"scroll",orient:"vertical",top:40,right:10},settings:{selectedMode:"single",hoverAnimation:!1}},chartData:{columns:["name","value"],rows:[]}}},mounted:function(){this.getEnvironmentInfo()},methods:{getEnvironmentInfo:function(){var t=this,e=this.startDate?this.startDate.format("YYYY-MM-DD"):"",n=this.endDate?this.endDate.format("YYYY-MM-DD"):"";if(new Date(e).getTime()>new Date(n).getTime())this.$message.error("开始日期不能大于结束日期");else{var a={startDate:e,endDate:n};1===this.radioValue?r.Z.analysisClientSystemInfo(a,(function(e){t.chartSetting.title.text="客户端系统版本统计",t.chartData.rows=t.taGetSeriesData(e.data.csSeriesData),t.environmentColumns.shift(),t.environmentColumns.unshift({title:"客户端系统版本",dataIndex:"typecs",key:"typecs",width:280,align:"center"}),t.environmentGridData=e.data.csEnvironmentGridData,0===e.data.csSeriesData.length&&t.$message.error("未获取到图表数据")})):2===this.radioValue?r.Z.analysisClientScreenInfo(a,(function(e){t.chartSetting.title.text="客户端分辨率统计",t.chartData.rows=t.taGetSeriesData(e.data.cssSeriesData),t.environmentColumns.shift(),t.environmentColumns.unshift({title:"客户端分辨率",dataIndex:"typecss",key:"typecss",width:280,align:"center"}),t.environmentGridData=e.data.cssEnvironmentGridData,0===e.data.cssSeriesData.length&&t.$message.error("未获取到图表数据")})):3===this.radioValue&&r.Z.analysisClientBrowserInfo(a,(function(e){t.chartSetting.title.text="客户端浏览器版本统计",t.chartData.rows=t.taGetSeriesData(e.data.cbSeriesData),t.environmentColumns.shift(),t.environmentColumns.unshift({title:"客户端浏览器版本",dataIndex:"typecb",key:"typecb",width:280,align:"center"}),t.environmentGridData=e.data.cbEnvironmentGridData,0===e.data.cbSeriesData.length&&t.$message.error("未获取到图表数据")}))}},getEnvironmentDetailInfo:function(t){var e=this.startDate?this.startDate.format("YYYY-MM-DD"):"",n=this.endDate?this.endDate.format("YYYY-MM-DD"):"";new Date(e).getTime()>new Date(n).getTime()?this.$message.error("开始日期不能大于结束日期"):(this.bindData.startDate=e,this.bindData.endDate=n,this.pieModelTitle=t+"--用户登录环境查询",1===this.radioValue?(this.bindData.isTypecs=!0,this.bindData.typecs=t):2===this.radioValue?(this.bindData.isTypecss=!0,this.bindData.typecss=t):3===this.radioValue&&(this.bindData.isTypecb=!0,this.bindData.typecb=t),this.pieModelVisible=!0)},clickNumber:function(t,e){var n;this.bindData.gridColumnType=t,1===this.radioValue?n=e.typecs:2===this.radioValue?n=e.typecss:3===this.radioValue&&(n=e.typecb),this.getEnvironmentDetailInfo(n)},environmentReload:function(){this.startDate=null,this.endDate=null},taGetSeriesData:function(t){var e=[];for(var n in t)e.push({name:t[n].type,value:t[n].count});return e},fnCloseModel:function(){this.pieModelVisible=!1,this.bindData={}},closeEnvironmentChart:function(){this.showChartVisible=!1},showEnvironmentChart:function(){this.showChartVisible=!0},searchQuery:function(){this.getEnvironmentInfo()},exportData:function(){var t=this.startDate?this.startDate.format("YYYY-MM-DD"):"",e=this.endDate?this.endDate.format("YYYY-MM-DD"):"";if(new Date(t).getTime()>new Date(e).getTime())this.$message.error("开始日期不能大于结束日期");else{var n={startDate:t,endDate:e};s.Z.exportExcel(n,"audit/auditExportRestService/loginLogAnalysis")}}}},E=I,Y=(0,h.Z)(E,a,i,!1,null,null,null),T=Y.exports},55437:function(t,e){e.Z={exportExcel:function(t,e){Base.submit(null,{url:e,data:t,responseType:"blob"}).then((function(t){var e=new Blob([t.data],{type:"application/xlsx;charset=utf-8"}),n=new FileReader;n.readAsText(e,"utf-8"),n.onload=function(){try{var a=JSON.parse(n.result);null!=a.errors&&parent.window.message.error("下载失败!")}catch(s){if(window.navigator.msSaveBlob)window.navigator.msSaveBlob(e,unescape(t.headers.filename));else{var i=document.createElement("a"),r=window.URL.createObjectURL(e);i.href=r,i.download=unescape(t.headers.filename),document.body.appendChild(i),i.click(),document.body.removeChild(i),window.URL.revokeObjectURL(r)}}}}))}}},35121:function(t,e){var n="/logmg/loginLog/loginLogAnalysisRestService/";e.Z={getSysTime:function(t,e){Base.submit(null,{url:n+"getSysTime",data:t},{successCallback:function(t){return e(t)}})},analysisOnlineStatInfo:function(t,e){Base.submit(null,{url:n+"analysisOnlineStatInfo",data:t},{successCallback:function(t){return e(t)}})},getOnlineInfo:function(t,e){Base.submit(null,{url:n+"getOnlineInfo",data:t},{successCallback:function(t){return e(t)}})},analysisLoginStatInfo:function(t,e){Base.submit(null,{url:n+"analysisLoginStatInfo",data:t},{successCallback:function(t){return e(t)}})},getLoginInfo:function(t,e){Base.submit(null,{url:n+"getLoginInfo",data:t},{successCallback:function(t){return e(t)}})},getStatLogInfoXdata:function(t,e){var n=[],a=[];"online"===e?(n=t.onlineStartTime.format("HH:mm").split(":"),a=t.onlineEndTime.format("HH:mm").split(":")):"login"===e&&(n=t.loginStartTime.format("HH:mm").split(":"),a=t.loginEndTime.format("HH:mm").split(":"));var i=parseInt(n[0]),r=parseInt(n[1]),s=parseInt(a[0]),o=parseInt(a[1]),l=[];do{if(l.push(c(i,r)),i==s&&r==o)break;if(r<59&&r>=0)r++;else{if(59!=r){t.$message.error("在线时点分析图表构造出错！");break}i++,r=0}}while(1);function c(t,e){var n=""+t,a=""+e;return n.length<2&&(n="0"+n),a.length<2&&(a="0"+a),n+":"+a}return l.length<=60?"online"===e?t.onlineXInterval=4:"login"===e&&(t.loginXInterval=4):l.length>60&&("online"===e?t.onlineXInterval=parseInt(l.length/10-1):"login"===e&&(t.loginXInterval=parseInt(l.length/10-1))),l},sortStatLogDataByHours:function(t,e){var n=[],a=[],i=[];"online"===e?(n=t.onlineChartData,a=t.onlineStartTime.format("HH:mm").split(":"),i=t.onlineEndTime.format("HH:mm").split(":")):"login"===e&&(n=t.loginChartData,a=t.loginStartTime.format("HH:mm").split(":"),i=t.loginEndTime.format("HH:mm").split(":"));var r=parseInt(a[0]),s=parseInt(a[1]),o=parseInt(i[0]),l=parseInt(i[1]),c=[],d=0;do{var u=""+r,m=""+s;u.length<2&&(u="0"+u),m.length<2&&(m="0"+m);var h=u+":"+m;for(var p in n)h==n[p].type&&c.push(n[p].count);if(d++,c.length<d&&c.push(0),r===o&&s===l)break;if(s<59&&s>=0)s++;else{if(59!=s){t.$message.error("时点分析图表构造出错！");break}r++,s=0}}while(1);return c},analysisClientSystemInfo:function(t,e){Base.submit(null,{url:n+"analysisClientSystemInfo",data:t},{successCallback:function(t){return e(t)}})},analysisClientScreenInfo:function(t,e){Base.submit(null,{url:n+"analysisClientScreenInfo",data:t},{successCallback:function(t){return e(t)}})},analysisClientBrowserInfo:function(t,e){Base.submit(null,{url:n+"analysisClientBrowserInfo",data:t},{successCallback:function(t){return e(t)}})},queryLoginEnvironmentDetail:function(t,e){Base.submit(null,{url:n+"queryLoginEnvironmentDetail",data:t},{successCallback:function(t){return e(t)}})}}}}]);