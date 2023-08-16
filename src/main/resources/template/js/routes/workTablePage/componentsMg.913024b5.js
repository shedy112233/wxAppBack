(self["webpackChunkta404_ui_cli"]=self["webpackChunkta404_ui_cli"]||[]).push([[5817],{39444:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return u}});var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticStyle:{width:"50%",float:"left"}},[a("ta-e-charts",{staticStyle:{"text-align":"center"},attrs:{data:e.chartData1,"charts-type":"wordcloud"}})],1),a("div",{staticStyle:{width:"50%",float:"left"}},[a("ta-e-charts",{staticStyle:{"text-align":"center"},attrs:{data:e.chartData2,"charts-type":"ring"}})],1)])},n=[],o=a(99440),i={name:"Analysis",components:{TaECharts:o.Z},props:{moduleId:String},data:function(){return{chartData1:{columns:["word","count"],rows:[{word:"visualMap",count:22199},{word:"continuous",count:10288},{word:"controller",count:620},{word:"series",count:274470},{word:"gauge",count:12311},{word:"detail",count:1206},{word:"piecewise",count:4885},{word:"textStyle",count:32294},{word:"markPoint",count:18574},{word:"pie",count:38929},{word:"roseType",count:969},{word:"label",count:37517},{word:"emphasis",count:12053},{word:"yAxis",count:57299},{word:"name",count:15418},{word:"type",count:22905},{word:"gridIndex",count:5146},{word:"normal",count:49487},{word:"itemStyle",count:33837},{word:"min",count:4500},{word:"silent",count:5744},{word:"animation",count:4840},{word:"offsetCenter",count:232},{word:"inverse",count:3706},{word:"borderColor",count:4812},{word:"markLine",count:16578},{word:"line",count:76970},{word:"radiusAxis",count:6704},{word:"radar",count:15964},{word:"data",count:60679},{word:"dataZoom",count:24347},{word:"tooltip",count:43420},{word:"toolbox",count:25222},{word:"geo",count:16904},{word:"parallelAxis",count:4029}]},chartData2:{columns:["日期","访问用户"],rows:[{"日期":"1/1","访问用户":1935},{"日期":"1/3","访问用户":3533},{"日期":"1/2","访问用户":2608}]}}}},s=i,l=a(1001),c=(0,l.Z)(s,r,n,!1,null,"60c8d2fe",null),u=c.exports},17725:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return f}});var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{height:"255px",width:"95%",margin:"0 auto"}},[a("ta-e-charts",{attrs:{height:"255px","charts-type":"line",data:e.chartData,legend:e.chartSetting.legend,tooltip:e.chartSetting.tooltip,"x-axis":e.chartSetting.xAxis,"y-axis":e.chartSetting.yAxis,grid:e.chartSetting.grid,toolbox:e.chartSetting.toolbox}})],1)},n=[],o=(a(32564),a(99440)),i=a(36797),s=a.n(i),l={name:"Monitor",components:{TaECharts:o.Z},props:{moduleId:String},data:function(){return{BASE_URL:"/logmg/loginLog/loginLogAnalysisRestService/",chartSetting:{legend:{top:10,formatter:"时点在线人数"},tooltip:{formatter:function(e){return e.seriesName+"<br/>"+e.data[0]+" ("+e.data[1]+"人)"}},yAxis:{splitNumber:10,minInterval:1,axisLabel:{formatter:"{value}人"}},grid:{bottom:10},toolbox:{feature:{magicType:{type:["line","bar"]},saveAsImage:{}}}},chartData:{columns:["日期","时点在线人数"],rows:[]},timer:""}},created:function(){var e=this;this.timer=setInterval(this.loadData,6e4),this.$once("hook:beforeDestroy",(function(){clearInterval(e.timer)}))},mounted:function(){this.loadData()},methods:{loadData:function(){var e=this,t={};this.getSysTime(t,(function(t){e.onlineDate=s()(t.data.sysdate,"YYYY-MM-DD"),e.onlineEndTime=s()();var a=e.onlineEndTime.clone();e.onlineStartTime=a.subtract("1","hours");var r=e.onlineDate?e.onlineDate.format("YYYY-MM-DD"):"",n=e.onlineStartTime?e.onlineStartTime.format("HH:mm"):"",o=e.onlineEndTime?e.onlineEndTime.format("HH:mm"):"",i={searchDate:r,startTime:n,endTime:o};e.analysisOnlineStatInfo(i,(function(t){e.onlineChartData=t.data.onlineChartData,e.onlineXdata=e.getStatLogInfoXdata(e,"online"),e.onlineSeriesData=e.sortStatLogDataByHours(e,"online");var a=[];e.onlineXdata.map((function(t,r){a.push({"日期":t,"时点在线人数":e.onlineSeriesData[r]})})),e.chartData.rows=a}))}))},getSysTime:function(e,t){Base.submit(null,{url:this.BASE_URL+"getSysTime",data:e,_modulePartId_:this.moduleId,showPageLoading:!1},{successCallback:function(e){return t(e)}})},analysisOnlineStatInfo:function(e,t){Base.submit(null,{url:this.BASE_URL+"analysisOnlineStatInfo",data:e,_modulePartId_:this.moduleId,showPageLoading:!1},{successCallback:function(e){return t(e)}})},getStatLogInfoXdata:function(e,t){var a=[],r=[];"online"===t?(a=e.onlineStartTime.format("HH:mm").split(":"),r=e.onlineEndTime.format("HH:mm").split(":")):"login"===t&&(a=e.loginStartTime.format("HH:mm").split(":"),r=e.loginEndTime.format("HH:mm").split(":"));var n=parseInt(a[0]),o=parseInt(a[1]),i=parseInt(r[0]),s=parseInt(r[1]),l=[];do{if(l.push(c(n,o)),n===i&&o===s)break;if(o<59&&o>=0)o++;else{if(59!==o){e.$message.error("在线时点分析图表构造出错！");break}n++,o=0}}while(1);function c(e,t){var a=""+e,r=""+t;return a.length<2&&(a="0"+a),r.length<2&&(r="0"+r),a+":"+r}return l.length<=60?"online"===t?e.onlineXInterval=4:"login"===t&&(e.loginXInterval=4):l.length>60&&("online"===t?e.onlineXInterval=parseInt(l.length/10-1):"login"===t&&(e.loginXInterval=parseInt(l.length/10-1))),l},sortStatLogDataByHours:function(e,t){var a=[],r=[],n=[];"online"===t?(a=e.onlineChartData,r=e.onlineStartTime.format("HH:mm").split(":"),n=e.onlineEndTime.format("HH:mm").split(":")):"login"===t&&(a=e.loginChartData,r=e.loginStartTime.format("HH:mm").split(":"),n=e.loginEndTime.format("HH:mm").split(":"));var o=parseInt(r[0]),i=parseInt(r[1]),s=parseInt(n[0]),l=parseInt(n[1]),c=[],u=0;do{var d=""+o,f=""+i;d.length<2&&(d="0"+d),f.length<2&&(f="0"+f);var h=d+":"+f;for(var m in a)h===a[m].type&&c.push(a[m].count);if(u++,c.length<u&&c.push(0),o===s&&i===l)break;if(i<59&&i>=0)i++;else{if(59!==i){e.$message.error("时点分析图表构造出错！");break}o++,i=0}}while(1);return c}}},c=l,u=a(1001),d=(0,u.Z)(c,r,n,!1,null,"7c85dc2c",null),f=d.exports},13035:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return c}});var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"User"},[a("ta-border-layout",{attrs:{showBorder:!1,layout:{left:"130px",right:"400px"},leftCfg:Object.assign({},e.config,{layoutConStyle:Object.assign({},e.config.layoutConStyle,{display:"table"})}),rightCfg:e.config,centerCfg:Object.assign({},e.config,{layoutConStyle:Object.assign({},e.config.layoutConStyle,{display:"table","border-right":"1px solid rgb(218,218,218)"})})}},[a("div",{staticClass:"left",attrs:{slot:"left"},slot:"left"},[a("ta-avatar",{attrs:{size:72,icon:"user"}})],1),a("div",{staticClass:"main"},[a("div",{staticClass:"greeting"},[e._v(e._s(e.greeting)+"，"+e._s(e.userName)+"，祝你开心每一天！")]),a("div",{staticClass:"info"},[e._v("Tips: Today is also a day full of hope, come on!")])]),a("div",{staticClass:"right",attrs:{slot:"right"},slot:"right"},[a("div",{staticClass:"timeDiv"},[a("span",{staticClass:"time"},[e._v(e._s(e.time))])]),a("div",{staticClass:"dateDiv"},[a("span",{staticClass:"date"},[e._v(e._s(e.dayOfWeek)+" "),a("br"),e._v(" "+e._s(e.date))])])])])],1)},n=[],o=(a(32564),{name:"user",props:{moduleId:String},data:function(){var e=new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六");return{config:{showBorder:!1,layoutConStyle:{overflow:"hidden"}},arrWeek:e,greeting:"",userName:"",date:"",time:"",dayOfWeek:"",timer:""}},created:function(){var e=this;this.userName=top.indexTool.getUserInfo().userName,this.timer=setInterval(this.refresh,6e4),this.$once("hook:beforeDestroy",(function(){clearInterval(e.timer)}))},mounted:function(){this.refresh();var e=new Date,t=e.getHours(),a=e.getMinutes();t<12&&(this.greeting=a%2===0?"早上好":"早安"),t<19&&t>=12&&(this.greeting="下午好"),t<=23&&t>=19&&(this.greeting="晚上好")},methods:{refresh:function(){var e=new Date,t=e.getFullYear(),a=e.getMonth()+1,r=e.getDate(),n=e.getHours(),o=e.getMinutes();a<10&&(a="0"+a),e<10&&(e="0"+e),n<10&&(n="0"+n),o<10&&(o="0"+o),this.date=t+"年"+a+"月"+r+"日",this.time=n+" : "+o,this.dayOfWeek=this.arrWeek[e.getDay()]}}}),i=o,s=a(1001),l=(0,s.Z)(i,r,n,!1,null,"222a0f9a",null),c=l.exports},94708:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return x}});var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"fit"},[a("ta-border-layout",{attrs:{"show-border":!0,"header-cfg":{showBorder:!0},"footer-cfg":{showBorder:!1}}},[a("div",{staticClass:"center-box",attrs:{slot:"header"},slot:"header"},[a("ta-input-search",{staticClass:"search-box",attrs:{placeholder:"请输入组件名称"},on:{search:e.fnOnSearch},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}},[a("ta-button",{attrs:{slot:"enterButton",type:"primary"},slot:"enterButton"},[e._v(" 搜索 ")])],1)],1),a("div",{staticStyle:{"padding-left":"10px","padding-right":"10px","margin-bottom":"10px","margin-top":"5px"}},[a("ta-tag-select",{attrs:{title:"安全策略",data:e.securityPolicyTagSelect,"is-multi":!0},on:{change:e.fnOnTagSelectChange},model:{value:e.securityPolicyTagSelectData,callback:function(t){e.securityPolicyTagSelectData=t},expression:"securityPolicyTagSelectData"}}),a("ta-tag-select",{attrs:{title:"有效性",data:e.effectiveTagSelect,"is-multi":!0},on:{change:e.fnOnTagSelectChange},model:{value:e.effectiveTagSelectData,callback:function(t){e.effectiveTagSelectData=t},expression:"effectiveTagSelectData"}}),a("div",{staticStyle:{float:"right"}},[a("ta-button",{attrs:{type:"primary"},on:{click:e.fnOnAddClick}},[e._v(" 新增 ")]),a("ta-dropdown",[a("ta-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("ta-menu-item",{attrs:{disabled:!e.selectedKeys.length}},[a("ta-popconfirm",{attrs:{title:"确认启用所选工作台组件?","cancel-text":"取消","ok-text":"确认"},on:{confirm:function(t){return e.fnUpdateStatus(!1,"1")}}},[a("ta-icon",{attrs:{type:"check-circle"}}),a("span",{staticClass:"mg-l12"},[e._v("启用")])],1)],1),a("ta-menu-divider"),a("ta-menu-item",{attrs:{disabled:!e.selectedKeys.length}},[a("ta-popconfirm",{attrs:{title:"确认禁用所选工作台组件?","cancel-text":"取消","ok-text":"确认"},on:{confirm:function(t){return e.fnUpdateStatus(!1,"0")}}},[a("ta-icon",{attrs:{type:"stop"}}),a("span",{staticClass:"mg-l12"},[e._v("禁用")])],1)],1),a("ta-menu-divider"),a("ta-menu-item",{attrs:{disabled:!e.selectedKeys.length},on:{click:function(t){e.deleteVisible=!0}}},[a("ta-icon",{attrs:{type:"close-circle"}}),e._v(" 删除 ")],1)],1),a("ta-button",[e._v(" 批量操作 "),a("ta-icon",{attrs:{type:"down"}})],1)],1)],1)],1),a("ta-table",{ref:"componentTable",attrs:{columns:e.componentColumns,"data-source":e.componentData,"row-key":"resourceId",pagination:!1,"row-selection":{selectedRowKeys:e.selectedKeys,onChange:e.handleSelectChange}},on:{"update:columns":function(t){e.componentColumns=t}},scopedSlots:e._u([{key:"operate",fn:function(t,r){return a("span",{},[a("ta-table-operate",{attrs:{"operate-menu":e.operateMenu}})],1)}},{key:"restUrl",fn:function(t,r){return a("div",{},[t&&t.length>0?a("span",[e._l(e.getJsonArray(t),(function(t,r){return r<1?a("ta-tooltip",{key:t.urlId,attrs:{placement:"topLeft"}},[a("template",{slot:"title"},[a("p",[e._v("服务路径："+e._s(t.url))]),a("p",[e._v("独立授权："+e._s(e.CollectionLabel("YESORNO",t.authorityPolicy)))])]),a("ta-tag",[e._v(e._s(t.name))])],2):e._e()})),e.getJsonArray(t).length>1?a("ta-popover",{attrs:{placement:"right",title:"服务列表",width:"360",trigger:"click"}},[a("ta-divider"),a("div",{staticStyle:{"word-break":"break-all","max-height":"420px",overflow:"auto"}},e._l(e.getJsonArray(t),(function(t){return a("div",{key:t.urlId,staticStyle:{overflow:"hidden"}},[a("p",[a("span",[e._v(" 服务名称："+e._s(t.name)+" ")]),a("br"),a("span",[e._v(" 服务路径： "),a("br"),e._v(" "+e._s(t.url)+" ")]),a("br"),a("span",[e._v(" 独立授权："+e._s(e.CollectionLabel("YESORNO",t.authorityPolicy))+" ")]),a("br"),a("ta-divider")],1)])})),0),a("span",{staticStyle:{cursor:"pointer"},attrs:{slot:"reference"},slot:"reference"},[a("ta-icon",{attrs:{type:"share-alt"}}),e._v("查看")],1)],1):e._e()],2):e._e()])}},{key:"securityPolicy",fn:function(t){return a("span",{},[e._v(e._s(e.CollectionLabel("SECURITYPOLICY",t)))])}},{key:"resourceType",fn:function(t){return a("span",{},[e._v(e._s(e.CollectionLabel("WORKTABLECOMPONENTTYPE",t)))])}}])}),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("ta-pagination",{ref:"gridPager",staticStyle:{float:"right","margin-top":"10px"},attrs:{"show-size-changer":"","show-quick-jumper":"","data-source":e.componentData,"default-page-size":10,params:e.pageParams,url:"org/sysmg/WorkbenchManageRestService/queryResource"},on:{"update:dataSource":function(t){e.componentData=t},"update:data-source":function(t){e.componentData=t}}})],1)],1),a("componentEditDrawer",{attrs:{visible:e.visible,"operate-type":e.operateType,"form-init-value":e.formInitValue},on:{"update:visible":function(t){e.visible=t},onSaveClick:e.fnOnSave}}),a("ta-careful-delete",{attrs:{visible:e.deleteVisible,title:"工作台组件删除",description:"选中的工作台组件"},on:{close:function(t){e.deleteVisible=!1},delete:e.fnOnDeleteClick}})],1)},n=[],o="/org/sysmg/WorkbenchManageRestService/",i="/org/sysmg/resourceManagementRestService/",s={queryDefaultValue:function(e,t){Base.submit(null,{url:o+"queryDefaultValue",data:e},{successCallback:function(e){return t(e)}})},updateStatus:function(e,t){Base.submit(null,{url:o+"updateStatus",data:e},{successCallback:function(e){return t(e)}})},addResource:function(e,t){Base.submit(null,{url:i+"addResource",data:e},{successCallback:function(e){return t(e)}})},updateResourceByResourceId:function(e,t){Base.submit(null,{url:i+"updateResourceByResourceId",data:e},{successCallback:function(e){return t(e)}})},deleteResourceByResourceIds:function(e,t){Base.submit(null,{url:i+"deleteResourceByResourceIds",data:e},{successCallback:function(e){return t(e)}})}},l=function(){var e=this,t=this,a=t.$createElement,r=t._self._c||a;return r("div",[r("ta-drawer",{attrs:{title:t.operateType?"新增组件":"编辑组件",width:"540",placement:"right","destroy-on-close":!0,closable:!0,visible:t.visible},on:{close:function(e){return t.$emit("update:visible",!1)}}},[r("div",{attrs:{id:"restUrlSelectTagContainer"}},[r("ta-form",{attrs:{"auto-form-create":function(t){e.form=t}}},[r("ta-row",[r("ta-col",{attrs:{span:24}},[r("ta-form-item",{attrs:{label:"组件名称","field-decorator-id":"name","init-value":t.formInitValue.name,require:{message:"请输入组件名称!"}}},[r("ta-input",{attrs:{placeholder:"请输入组件名称"}})],1)],1)],1),r("ta-row",[r("ta-col",{attrs:{span:24}},[r("ta-form-item",{attrs:{label:"组件文件名称","field-decorator-id":"url","init-value":t.formInitValue.url,require:{message:"请选择组件文件名称!"}}},[r("ta-select",{attrs:{"show-search":"","allow-clear":"","option-filter-prop":"children","filter-option":t.filterOption,placeholder:"请输入组件名称"}},t._l(t.files,(function(e){return r("ta-select-option",{key:e.slice(2,e.length-4)},[t._v(" "+t._s(e.slice(2,e.length-4))+" ")])})),1)],1)],1)],1),r("ta-row",[r("ta-col",{attrs:{span:24}},[r("ta-form-item",{attrs:{label:"后台RestURL","init-value":t.formInitValue.restUrl,"field-decorator-id":"restUrl"}},[r("rest-url-select-tag",{attrs:{"new-label":"添加服务"}})],1)],1)],1),r("ta-row",[r("ta-col",{attrs:{span:24}},[r("ta-form-item",{attrs:{label:"组件类型","init-value":t.formInitValue.resourceType,"field-decorator-id":"resourceType",require:{message:"请选择组件类型!"}}},[r("ta-radio-group",{attrs:{"button-style":"solid"}},[r("ta-radio-button",{attrs:{value:"0"}},[t._v(" 普通组件 ")]),r("ta-radio-button",{attrs:{value:"3"}},[t._v(" 审核组件 ")]),r("ta-radio-button",{attrs:{value:"4"}},[t._v(" 审计组件 ")])],1)],1)],1)],1),r("ta-row",[r("ta-col",{attrs:{span:24}},[r("ta-form-item",{attrs:{label:"安全策略","init-value":t.formInitValue.securityPolicy,"field-decorator-id":"securityPolicy",require:{message:"请选择安全策略!"}}},[r("ta-radio-group",{attrs:{"button-style":"solid"}},[r("ta-radio-button",{attrs:{value:"0"}},[t._v(" 无需登录可访问 ")]),r("ta-radio-button",{attrs:{value:"1"}},[t._v(" 登录均可访问 ")]),r("ta-radio-button",{attrs:{value:"2"}},[t._v(" 授权可访问 ")])],1)],1)],1)],1),r("ta-row",[r("ta-col",{attrs:{span:24}},[r("ta-form-item",{attrs:{label:"安全认证级别","init-value":""+t.formInitValue.securityLevel,"field-decorator-id":"securityLevel",require:{message:"请选择安全认证级别!"}}},[r("ta-radio-group",{attrs:{"button-style":"solid"}},[r("ta-radio-button",{attrs:{value:"0"}},[t._v(" 无限制 ")]),r("ta-radio-button",{attrs:{value:"1"}},[t._v(" 一级 ")]),r("ta-radio-button",{attrs:{value:"2"}},[t._v(" 二级 ")]),r("ta-radio-button",{attrs:{value:"3"}},[t._v(" 三级 ")]),r("ta-radio-button",{attrs:{value:"4"}},[t._v(" 四级 ")])],1)],1)],1)],1),r("ta-row",[r("ta-col",{attrs:{span:24}},[r("ta-form-item",{attrs:{label:"有效性","field-decorator-options":{initialValue:t.formInitValue.effectiveFlag,valuePropName:"checked"},"field-decorator-id":"effectiveFlag"}},[r("ta-switch",{attrs:{"checked-children":"有效","un-checked-children":"无效"}})],1)],1)],1)],1)],1),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("ta-button",{style:{marginRight:8},on:{click:function(e){return t.form.resetFields()}}},[t._v(" 重置 ")]),r("ta-button",{attrs:{type:"primary"},on:{click:function(e){return t.$emit("onSaveClick",t.form)}}},[t._v(" 保存 ")])],1)])],1)},c=[],u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("ta-collapse",{attrs:{bordered:!1},model:{value:e.activeKey,callback:function(t){e.activeKey=t},expression:"activeKey"}},[e._l(e.tagArray,(function(t,r){return a("ta-collapse-panel",{key:e.generateKey(r),attrs:{"show-arrow":!1}},[a("template",{slot:"header"},[a("span",{class:{"disabled-text":"0"===t.effective}},[e._v(e._s(t.name))]),a("div",{staticClass:"rest-input-delete"},[[e.activeKey.indexOf(e.generateKey(r))<0?a("a",{on:{click:function(t){t.stopPropagation(),e.handleViewRest(e.generateKey(r))}}},[e._v("查看")]):a("a",{on:{click:function(t){t.stopPropagation(),e.handleHiddenRest(e.generateKey(r))}}},[e._v("隐藏")])],a("ta-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(a){a.stopPropagation(),e.handleRemoveRest(t,e.generateKey(r),r)}}},[e._v("删除")])],2)]),a("p",[e._v("状态："+e._s("0"===t.effective?"无效":"有效"))]),a("p",[e._v("服务路径："+e._s(t.url))]),a("p",[e._v("独立授权："+e._s(e.CollectionLabel("YESORNO",t.authorityPolicy)))])],2)})),a("ta-collapse-panel",{staticStyle:{display:"none"}})],2),a("a",{on:{click:function(t){return t.stopPropagation(),e.initRestUrlDrawer.apply(null,arguments)}}},[a("ta-icon",{attrs:{type:"plus"}}),e._v(" "+e._s(e.newLabel)+" ")],1),a("ta-modal",{attrs:{title:"服务列表",width:"50%",height:"500px",visible:e.restUrlDrawerVisible},on:{cancel:e.handleCloseRestUrlDrawer}},[a("ta-row",[a("ta-col",[a("ta-input-search",{attrs:{placeholder:"输入服务名称/路径回车检索"},on:{search:e.handleSearchRestUrl},model:{value:e.restSearch,callback:function(t){e.restSearch=t},expression:"restSearch"}})],1)],1),a("ta-table",{attrs:{columns:e.columns,pagination:!1,"row-key":"id","data-source":e.gridData,"row-selection":{selectedRowKeys:e.selectedRowKeys,onChange:e.handleSelectChange,getCheckboxProps:this.fnGetCheckboxProps}},on:{expand:e.handleLoadChild},scopedSlots:e._u([{key:"name",fn:function(t,r){return a("span",{class:{"disable-color":"0"===r.effective}},[e._v(e._s(t))])}},{key:"action",fn:function(t,r){return a("span",{},[a("ta-switch",{attrs:{disabled:"0"===r.effective,"checked-children":"是","un-checked-children":"否"},on:{change:function(t){return e.handleChangeDlAuth(r)}}})],1)}}])}),a("template",{slot:"footer"},[a("ta-button-group",[a("ta-button",{on:{click:function(t){return e.handleResetRestUrl()}}},[e._v(" 重置 ")]),a("ta-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleSaveRestUrl()}}},[e._v(" 确定 ")])],1)],1)],2)],1)},d=[],f=a(89541),h=(a(69191),"/org/sysmg/resourceManagementRestService/"),m={queryResourceUi:function(e,t){Base.submit(null,{url:h+"queryTaResourceUi",data:{resourceId:e}},{successCallback:function(e){t(e.data)}})},saveResourceUi:function(e,t){var a="",r="";"1"==e.elementDataAddOrEdit?(a=h+"addTaResourceUi",r="添加"):"2"==e.elementDataAddOrEdit&&(a=h+"updateTaResourceUi",r="修改");var n={url:a,data:{pageElementId:e.pageElementId,resourceId:e.resourceId,elementName:e.elementName,elementId:e.elementId,code:e.code,authorityPolicy:e.authorityPolicy}};Base.submit(null,n,{successCallback:function(e){message.success("表单元素"+r+"成功"),t(e.data)}})},deleteResourceUi:function(e,t){Base.submit(null,{url:h+"deleteTaResourceUi",data:{pageElementIds:e.pageElementId,elementId:e.elementId,resourceId:e.resourceId}},{successCallback:function(e){message.success("表单元素删除成功"),t(e.data)}})},queryUrlByParam:function(e,t){var a={url:"org/sysmg/url/queryByParam",data:e};Base.submit(null,a,{successCallback:function(e){return t(e.data)}})},queryNamespace:function(e,t){var a={url:"org/sysmg/url/queryNamespace",data:e};Base.submit(null,a,{successCallback:function(e){return t(e.data)}})},queryUrlByNamespace:function(e,t){var a={url:"org/sysmg/url/queryUrlByNamespace",data:e};Base.submit(null,a,{successCallback:function(e){return t(e.data)}})}},p=[{title:"服务名称",dataIndex:"name",width:"40%",overflowTooltip:!0,scopedSlots:{customRender:"name"}},{title:"服务路径",dataIndex:"url",width:"40%",overflowTooltip:!0},{title:"独立授权",key:"action",width:100,align:"center",scopedSlots:{customRender:"action"}}];function g(e){if("undefined"===typeof e||null===e)return"[]";try{JSON.parse(e)}catch(t){e="[]"}return e}var y={name:"restUrlSelectTag",components:{TaTable:f.Z},props:["value","newLabel"],data:function(){var e=this.$props.value;return{formLayout:"horizontal",formItemLayout:{labelCol:{span:8},wrapperCol:{span:16}},tags:g(e),activeKey:[],keySeparator:"_",keySuffix:"key",restSearch:"",columns:p,gridData:[],selectedRowKeys:[],selectedRows:[],isAsync:!0,restUrlDrawerVisible:!1}},computed:{tagArray:function(){return JSON.parse(this.tags)||[]}},watch:{value:function(e){this.tags=g(e),this.activeKey=[]}},methods:{generateKey:function(e){return e+this.keySeparator+this.keySuffix},handleViewRest:function(e){this.activeKey.indexOf(e)>-1||this.activeKey.push(e)},handleHiddenRest:function(e){this.activeKey=this.activeKey.filter((function(t){return t!==e}))},handleRemoveRest:function(e,t,a){var r=JSON.parse(this.tags)||[];r.splice(a,1),this.tags=JSON.stringify(r),this.triggerChange()},triggerChange:function(){var e=this.tags;this.$emit("change",e)},initRestUrlDrawer:function(){this.restSearch="",this.selectedRowKeys=[],this.selectedRows=[],this.handleSearchRestUrl()},initRestUrlData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.forEach((function(e){e.authorityPolicy="0"})),e},handleToSelectRestUrl:function(){var e=this;this.gridData=[],this.$nextTick((function(){m.queryNamespace(null,(function(t){e.gridData=e.initRestUrlData(t.urls),e.restUrlDrawerVisible=!0}))}))},handleSearchRestUrl:function(e){var t=this;if(null==e||""===e)return this.handleToSelectRestUrl(),void(this.isAsync=!0);this.isAsync=!1,m.queryUrlByParam({name:e,url:e},(function(e){t.gridData=t.initRestUrlData(e.urls)}))},handleLoadChild:function(e,t){var a=this;if(e&&this.isAsync){if(t.children&&t.children.length>0)return;m.queryUrlByNamespace({namespace:t.id},(function(e){t.children=a.initRestUrlData(e.urls)}))}},handleCloseRestUrlDrawer:function(){this.restUrlDrawerVisible=!1},handleResetRestUrl:function(){this.initRestUrlDrawer()},handleSaveRestUrl:function(){var e=this,t=JSON.parse(this.tags)||[];t=t.filter((function(t){return-1===e.selectedRowKeys.indexOf(t.id)})).concat(this.selectedRows),this.tags=JSON.stringify(t),this.triggerChange(),this.restUrlDrawerVisible=!1},handleChangeDlAuth:function(e){"1"===e.authorityPolicy?e.authorityPolicy="0":e.authorityPolicy="1",this.selectedRows.forEach((function(t){t.id===e.id&&(t.authorityPolicy=e.authorityPolicy)}))},handleSelectChange:function(e,t){this.selectedRowKeys=e;var a=JSON.parse(JSON.stringify(t));a.forEach((function(e){return e.authorityPolicy?void 0:e.authorityPolicy="0"})),this.selectedRows=a},fnGetCheckboxProps:function(e){var t={props:{disabled:"0"===e.effective,name:e.name}};return t}}},v=y,b=a(1001),w=(0,b.Z)(v,u,d,!1,null,"50a93f3c",null),S=w.exports,_={name:"ComponentEditDrawer",props:{visible:{type:Boolean,default:!1,require:!0},operateType:{type:Boolean,default:!0,require:!0},formInitValue:{type:Object,default:function(){},require:!0}},data:function(){return{form:{},files:[]}},components:{restUrlSelectTag:S},mounted:function(){this.files=a(28786).keys()},methods:{filterOption:function(e,t){return t.componentOptions.children[0].text.toLowerCase().indexOf(e.toLowerCase())>=0}}},k=_,C=(0,b.Z)(k,l,c,!1,null,"60ba8e00",null),D=C.exports,I={name:"ComponentsMg",components:{componentEditDrawer:D,TaTable:f.Z},data:function(){var e=this,t=[{title:"组件名称",dataIndex:"name",width:"15%",overflowTooltip:!0,scopedSlots:{customRender:"name"}},{title:"组件文件名",dataIndex:"url",width:"15%",overflowTooltip:!0,customRender:function(e){return null==e||""===e?"--":e.slice(e.lastIndexOf("/")+1)}},{title:"服务路径",dataIndex:"restUrl",width:"20%",overflowTooltip:!0,scopedSlots:{customRender:"restUrl"}},{title:"组件类型",dataIndex:"resourceType",width:"10%",scopedSlots:{customRender:"resourceType"}},{title:"安全策略",dataIndex:"securityPolicy",width:"12%",scopedSlots:{customRender:"securityPolicy"}},{title:"有效性",dataIndex:"effective",width:"8%",yesOrNoTag:!0,customRender:function(e){return"1"===e?"有效":"无效"}},{title:"操作",align:"center",width:"20%",scopedSlots:{customRender:"operate"}},{title:"排序",dataIndex:"orderNo",width:"0%",sorter:function(e,t){return t.orderNo-e.orderNo},sortOrder:"desc"}],a=[{value:"0",label:"无需登录可访问"},{value:"1",label:"登录均可访问"},{value:"2",label:"授权可访问"}],r=[{value:"0",label:"无效"},{value:"1",label:"有效"}];return{securityPolicyTagSelect:a,securityPolicyTagSelectData:[],effectiveTagSelect:r,effectiveTagSelectData:[],componentColumns:t,operateMenu:[{name:"编辑",disabled:function(e){return"0"==e.effective},title:function(e){return"0"==e.effective?"禁用的工作台组件不允许编辑":""},onClick:function(t){e.fnOnEditClick(t)}},{name:"更多",type:"more",moreMenuList:[{name:"启用",type:"confirm",confirmTitle:"确定启用该组件吗?",onOk:function(t){e.fnUpdateStatus(t,"1")}},{name:"禁用",type:"confirm",confirmTitle:"确定禁用该组件吗?",onOk:function(t){e.fnUpdateStatus(t,"0")}},{name:"删除",type:"confirm",confirmTitle:"确定删除该组件吗?",onOk:function(t){e.fnOnDeleteClick(t)}}]}],componentData:[],search:"",visible:!1,operateType:!0,formInitValue:{},componentDefaultValue:{},resourceId:"",selectedKeys:[],deleteVisible:!1}},mounted:function(){var e=this;s.queryDefaultValue({},(function(t){e.componentDefaultValue=Object.assign({},t.data)})),this.$refs.gridPager.loadData(),this.$refs.componentTable.hideColumns(["orderNo"])},methods:{getJsonArray:function(e){var t=[];try{t=JSON.parse(e)}catch(a){t=[]}return t},pageParams:function(){var e={};return e.search=this.search,e.securityPolicyTags=this.securityPolicyTagSelectData.join(","),e.effectiveTags=this.effectiveTagSelectData.join(","),e},fnOnSearch:function(){this.$refs.gridPager.loadData()},fnOnTagSelectChange:function(){this.$refs.gridPager.loadData()},handleSelectChange:function(e,t){this.selectedKeys=e},fnUpdateStatus:function(e,t){var a,r=this;if(e){if(e.effective==t)return void this.$message.warning("该记录已经"+("0"==t?"禁用":"启用")+"，请勿重复操作！");a={resourceIds:e.resourceId,effective:t}}else a={resourceIds:this.selectedKeys.join(","),effective:t};s.updateStatus(a,(function(e){r.selectedKeys=[],e.serviceSuccess?(r.$message.success(("0"==t?"禁用":"启用")+"成功"),r.$refs.gridPager.loadData()):r.$message.error(("0"==t?"禁用":"启用")+"失败")}))},fnOnAddClick:function(){this.formInitValue={resourceType:"0",securityPolicy:"2",securityLevel:"1",effectiveFlag:!0},this.operateType=!0,this.visible=!0},fnOnEditClick:function(e){this.formInitValue=Object.assign({},e,{effectiveFlag:"1"===e.effective}),this.resourceId=e.resourceId,this.operateType=!1,this.visible=!0},fnOnSave:function(e){var t=this;e.validateFieldsAndScroll((function(a){if(!a){t.visible=!1;var r=e.getFieldValue("effectiveFlag")?"1":"0",n=Object.assign({effective:r,workbench:"1"},e.getFieldsValue(),t.componentDefaultValue);if(n.restUrl){var o=JSON.parse(n.restUrl);o.forEach((function(e){e.authorityPolicy||(e.authorityPolicy=0)})),n.restUrl=JSON.stringify(o)}t.operateType?s.addResource(n,(function(){t.$message.success("新增成功"),t.$refs.gridPager.loadData()})):s.updateResourceByResourceId(Object.assign({},n,{resourceId:t.resourceId}),(function(){t.$message.success("修改成功"),t.resourceId="",t.$refs.gridPager.loadData()}))}}))},fnOnDeleteClick:function(e){var t,a=this;t=e?e.resourceId:this.selectedKeys.join(","),s.deleteResourceByResourceIds({resourceIds:t},(function(){a.$message.success("删除成功"),a.deleteVisible=!1,a.$refs.gridPager.loadData()}))}}},T=I,R=(0,b.Z)(T,r,n,!1,null,"63fe6a40",null),x=R.exports},28786:function(e,t,a){var r={"./analysis.vue":39444,"./monitor.vue":17725,"./user.vue":13035};function n(e){var t=o(e);return a(t)}function o(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=o,e.exports=n,n.id=28786}}]);