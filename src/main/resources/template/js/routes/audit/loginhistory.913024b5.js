"use strict";(self["webpackChunkta404_ui_cli"]=self["webpackChunkta404_ui_cli"]||[]).push([[378],{38833:function(t,e,n){n.r(e),n.d(e,{default:function(){return C}});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fit",attrs:{id:"loginHistory"}},[n("ta-border-layout",{attrs:{layout:{header:"70px",footer:"70px"},centerCfg:{showBar:!0,toolBarStyle:{height:"50px",lineHeight:"48px"}},showBorder:!1,"footer-cfg":{showBorder:!1}}},[n("div",{staticClass:"center-box",attrs:{slot:"header"},slot:"header"},[n("ta-input-search",{staticClass:"search-box",attrs:{placeholder:"登录人员搜索",enterButton:"搜索"},on:{search:t.searchQuery},model:{value:t.loginName,callback:function(e){t.loginName=e},expression:"loginName"}})],1),n("div",{attrs:{slot:"centerExtraContent"},slot:"centerExtraContent"},[n("ta-range-picker",{attrs:{placeholder:["开始时间","结束时间"],"get-calendar-container":t.getContainer},on:{change:t.onChange},model:{value:t.createTime,callback:function(e){t.createTime=e},expression:"createTime"}}),n("div",{staticStyle:{float:"right"}},[n("ta-button",{attrs:{icon:"area-chart"},on:{click:function(e){return t.showLoginHistoryChart()}}}),n("ta-button",{on:{click:function(e){return t.exportData()}}},[t._v("导出")])],1)],1),n("ta-table",{attrs:{columns:t.loginColumns,dataSource:t.loginGridData,pagination:!1}}),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("ta-pagination",{ref:"loginGridPager",staticStyle:{float:"right","margin-top":"10px"},attrs:{showSizeChanger:"",showQuickJumper:"",dataSource:t.loginGridData,params:t.loginPageParams,url:"logmg/loginLog/loginLogAnalysisRestService/login"},on:{"update:dataSource":function(e){t.loginGridData=e},"update:data-source":function(e){t.loginGridData=e}}})],1)],1),n("ta-modal",{attrs:{centered:"",width:"1000px",bodyStyle:{height:"600px",padding:"0"},footer:null,destroyOnClose:!0,maskClosable:!0,title:"数据分析",closable:!0},on:{close:function(e){return t.closeLoginHistoryChart(!1)}},model:{value:t.showChartVisible,callback:function(e){t.showChartVisible=e},expression:"showChartVisible"}},[n("login-history-chart",{ref:"loginHistoryChart",on:{closeModal:t.closeLoginHistoryChart}})],1)],1)},i=[],o=n(35121),l=n(55437),r=n(36797),s=n.n(r),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ta-e-charts",{attrs:{height:"255px",chartsType:"line",data:t.chartData,legend:t.chartSetting.legend,tooltip:t.chartSetting.tooltip,xAxis:t.chartSetting.xAxis,yAxis:t.chartSetting.yAxis,grid:t.chartSetting.grid,toolbox:t.chartSetting.toolbox}})],1)},c=[],u=n(99440),m={name:"loginHistoryChart",components:{TaECharts:u.Z},data:function(){return{loginDate:null,loginStartTime:null,loginEndTime:null,loginStartOpen:!1,loginEndOpen:!1,isClickLoginTab:!1,loginChartData:[],loginGridData:[],loginXInterval:4,loginXdata:[],loginSeriesData:[],chartSetting:{legend:{top:10,formatter:"时点在线人数"},tooltip:{formatter:function(t){return t.seriesName+"<br/>"+t.data[0]+" ("+t.data[1]+"人)"}},yAxis:{axisLabel:{formatter:"{value}人"}},grid:{bottom:10},toolbox:{feature:{magicType:{type:["line","bar"]},saveAsImage:{}}}},chartData:{columns:["日期","时点登录人数"],rows:[]},toolbox:{feature:{magicType:{type:["line","bar"]},saveAsImage:{}}}}},mounted:function(){this.loadData()},methods:{moment:s(),onlinePageParams:function(){return{}},loadData:function(){var t=this,e={};o.Z.getSysTime(e,(function(e){t.loginDate=s()(e.data.sysdate,"YYYY-MM-DD"),t.loginStartTime=s()(e.data.sysStartTime,"HH:mm"),t.loginEndTime=s()(e.data.sysEndTime,"HH:mm");var n=t.loginDate?t.loginDate.format("YYYY-MM-DD"):"",a=t.loginStartTime?t.loginStartTime.format("HH:mm"):"",i=t.loginEndTime?t.loginEndTime.format("HH:mm"):"",l={searchDate:n,startTime:a,endTime:i};o.Z.analysisLoginStatInfo(l,(function(e){t.loginChartData=e.data.loginChartData,t.loginXdata=o.Z.getStatLogInfoXdata(t,"login"),t.loginSeriesData=o.Z.sortStatLogDataByHours(t,"login");var n=[];t.loginXdata.map((function(e,a){n.push({"日期":e,"时点登录人数":t.loginSeriesData[a]})})),t.chartData.rows=n}))}))},getLoginInfo:function(){var t=this;if(this.loginDate)if(this.loginStartTime)if(this.loginEndTime)if(new Date(this.loginDate.format("YYYY-MM-DD")+" "+this.loginStartTime.format("HH:mm")).getTime()>new Date(this.loginDate.format("YYYY-MM-DD")+" "+this.loginEndTime.format("HH:mm")).getTime())this.$message.warning("开始时间不能大于结束时间");else{var e=this.loginDate.format("YYYY-MM-DD"),n=this.loginStartTime.format("HH:mm"),a=this.loginEndTime.format("HH:mm"),i={searchDate:e,startTime:n,endTime:a};o.Z.analysisLoginStatInfo(i,(function(e){t.loginChartData=e.data.loginChartData,t.loginXdata=o.Z.getStatLogInfoXdata(t,"login"),t.loginSeriesData=o.Z.sortStatLogDataByHours(t,"login");var n=[];t.loginXdata.map((function(e,a){n.push({"日期":e,"时点登录人数":t.loginSeriesData[a]})})),t.chartData.rows=n}))}else this.$message.warning("结束时间不能为空");else this.$message.warning("开始时间不能为空");else this.$message.warning("开始日期不能为空")},handleLoginClose:function(){this.loginStartOpen=!1,this.loginEndOpen=!1},loginReload:function(){this.loginDate=null,this.loginStartTime=null,this.loginEndTime=null}}},d=m,h=n(1001),f=(0,h.Z)(d,g,c,!1,null,null,null),p=f.exports,D=[{title:"登录ID",dataIndex:"loginId",key:"loginId",width:244,align:"center"},{title:"姓名",dataIndex:"name",key:"name",align:"center",width:244},{title:"登录时间",dataIndex:"loginTime",key:"loginTime",align:"center",width:244},{title:"注销时间",dataIndex:"logoutTime",key:"logoutTime",align:"center",width:244},{title:"客户端ip",dataIndex:"clientIp",key:"clientIp",align:"center",width:244},{title:"客户端系统",dataIndex:"clientSystem",key:"clientSystem",align:"center",width:244},{title:"客户端浏览器",key:"clientBrowser",dataIndex:"clientBrowser",align:"center",width:244},{title:"客户端分辨率",key:"clientScreenSize",dataIndex:"clientScreenSize",align:"center",width:244},{title:"数据是否被篡改",key:"isTampered",dataIndex:"isTampered",align:"center",width:244}],y={name:"loginHistory",components:{loginHistoryChart:p},data:function(){return{loginColumns:D,loginGridData:[],showChartVisible:!1,loginName:"",createTime:[]}},mounted:function(){this.loadData()},methods:{moment:s(),loginPageParams:function(){var t={};return this.loginName&&(t.name=this.loginName),this.startDate&&(t.startDate=this.startDate),this.endDate&&(t.endDate=this.endDate),t},loadData:function(){this.$refs.loginGridPager.loadData()},searchQuery:function(){this.loadData()},onChange:function(t,e){e&&e.length&&""!=e[0]&&""!=e[1]?(this.startDate=s()(e[0]).format("YYYY-MM-DD")+" 00:00:00",this.endDate=s()(e[1]).format("YYYY-MM-DD")+" 23:59:59"):(this.startDate="",this.endDate=""),this.loadData()},showLoginHistoryChart:function(){this.showChartVisible=!0},closeLoginHistoryChart:function(){this.showChartVisible=!1},exportData:function(){var t={loginName:this.loginName,startDate:this.startDate,endDate:this.endDate};l.Z.exportExcel(t,"audit/auditExportRestService/login")},getContainer:function(){return document.getElementById("loginHistory")}}},S=y,b=(0,h.Z)(S,a,i,!1,null,null,null),C=b.exports},55437:function(t,e){e.Z={exportExcel:function(t,e){Base.submit(null,{url:e,data:t,responseType:"blob"}).then((function(t){var e=new Blob([t.data],{type:"application/xlsx;charset=utf-8"}),n=new FileReader;n.readAsText(e,"utf-8"),n.onload=function(){try{var a=JSON.parse(n.result);null!=a.errors&&parent.window.message.error("下载失败!")}catch(l){if(window.navigator.msSaveBlob)window.navigator.msSaveBlob(e,unescape(t.headers.filename));else{var i=document.createElement("a"),o=window.URL.createObjectURL(e);i.href=o,i.download=unescape(t.headers.filename),document.body.appendChild(i),i.click(),document.body.removeChild(i),window.URL.revokeObjectURL(o)}}}}))}}},35121:function(t,e){var n="/logmg/loginLog/loginLogAnalysisRestService/";e.Z={getSysTime:function(t,e){Base.submit(null,{url:n+"getSysTime",data:t},{successCallback:function(t){return e(t)}})},analysisOnlineStatInfo:function(t,e){Base.submit(null,{url:n+"analysisOnlineStatInfo",data:t},{successCallback:function(t){return e(t)}})},getOnlineInfo:function(t,e){Base.submit(null,{url:n+"getOnlineInfo",data:t},{successCallback:function(t){return e(t)}})},analysisLoginStatInfo:function(t,e){Base.submit(null,{url:n+"analysisLoginStatInfo",data:t},{successCallback:function(t){return e(t)}})},getLoginInfo:function(t,e){Base.submit(null,{url:n+"getLoginInfo",data:t},{successCallback:function(t){return e(t)}})},getStatLogInfoXdata:function(t,e){var n=[],a=[];"online"===e?(n=t.onlineStartTime.format("HH:mm").split(":"),a=t.onlineEndTime.format("HH:mm").split(":")):"login"===e&&(n=t.loginStartTime.format("HH:mm").split(":"),a=t.loginEndTime.format("HH:mm").split(":"));var i=parseInt(n[0]),o=parseInt(n[1]),l=parseInt(a[0]),r=parseInt(a[1]),s=[];do{if(s.push(g(i,o)),i==l&&o==r)break;if(o<59&&o>=0)o++;else{if(59!=o){t.$message.error("在线时点分析图表构造出错！");break}i++,o=0}}while(1);function g(t,e){var n=""+t,a=""+e;return n.length<2&&(n="0"+n),a.length<2&&(a="0"+a),n+":"+a}return s.length<=60?"online"===e?t.onlineXInterval=4:"login"===e&&(t.loginXInterval=4):s.length>60&&("online"===e?t.onlineXInterval=parseInt(s.length/10-1):"login"===e&&(t.loginXInterval=parseInt(s.length/10-1))),s},sortStatLogDataByHours:function(t,e){var n=[],a=[],i=[];"online"===e?(n=t.onlineChartData,a=t.onlineStartTime.format("HH:mm").split(":"),i=t.onlineEndTime.format("HH:mm").split(":")):"login"===e&&(n=t.loginChartData,a=t.loginStartTime.format("HH:mm").split(":"),i=t.loginEndTime.format("HH:mm").split(":"));var o=parseInt(a[0]),l=parseInt(a[1]),r=parseInt(i[0]),s=parseInt(i[1]),g=[],c=0;do{var u=""+o,m=""+l;u.length<2&&(u="0"+u),m.length<2&&(m="0"+m);var d=u+":"+m;for(var h in n)d==n[h].type&&g.push(n[h].count);if(c++,g.length<c&&g.push(0),o===r&&l===s)break;if(l<59&&l>=0)l++;else{if(59!=l){t.$message.error("时点分析图表构造出错！");break}o++,l=0}}while(1);return g},analysisClientSystemInfo:function(t,e){Base.submit(null,{url:n+"analysisClientSystemInfo",data:t},{successCallback:function(t){return e(t)}})},analysisClientScreenInfo:function(t,e){Base.submit(null,{url:n+"analysisClientScreenInfo",data:t},{successCallback:function(t){return e(t)}})},analysisClientBrowserInfo:function(t,e){Base.submit(null,{url:n+"analysisClientBrowserInfo",data:t},{successCallback:function(t){return e(t)}})},queryLoginEnvironmentDetail:function(t,e){Base.submit(null,{url:n+"queryLoginEnvironmentDetail",data:t},{successCallback:function(t){return e(t)}})}}}}]);