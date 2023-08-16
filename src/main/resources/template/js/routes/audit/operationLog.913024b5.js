"use strict";(self["webpackChunkta404_ui_cli"]=self["webpackChunkta404_ui_cli"]||[]).push([[4310],{41056:function(t,e,a){a.r(e),a.d(e,{default:function(){return S}});var o=function(){var t=this,e=this,a=e.$createElement,o=e._self._c||a;return o("div",{staticClass:"fit",attrs:{id:"operationLog"}},[o("ta-border-layout",{attrs:{layout:{header:"70px",footer:"70px"},centerCfg:{showBar:!0,toolBarStyle:{height:"50px",lineHeight:"48px"}},"footer-cfg":{showBorder:!1}}},[o("div",{staticClass:"center-box",attrs:{slot:"header"},slot:"header"},[o("ta-input-search",{staticClass:"search-box",attrs:{placeholder:"请输入经办人姓名",enterButton:"搜索"},on:{search:e.loadData},model:{value:e.opUser,callback:function(t){e.opUser=t},expression:"opUser"}})],1),o("div",{attrs:{slot:"centerExtraContent"},slot:"centerExtraContent"},[o("ta-range-picker",{attrs:{placeholder:["开始时间","结束时间"],"get-calendar-container":e.getContainer},on:{change:e.onChange},model:{value:e.opTime,callback:function(t){e.opTime=t},expression:"opTime"}}),o("div",{staticStyle:{float:"right"}},[o("ta-button",{attrs:{icon:"area-chart"},on:{click:function(t){return e.showChart()}}}),o("ta-button",{on:{click:function(t){return e.exportData()}}},[e._v("导出")])],1),o("ta-select",{staticClass:"filter-name",attrs:{allowClear:"",placeholder:"请选择操作类型"},on:{change:e.loadData},model:{value:e.opType,callback:function(t){e.opType=t},expression:"opType"}},e._l(e.CollectionData("OPTYPE"),(function(t){return o("ta-select-option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.label))])})),1),o("ta-select",{staticClass:"filter-name",attrs:{allowClear:"",placeholder:"请选择影响主体类型"},on:{change:e.loadData},model:{value:e.influenceBodyType,callback:function(t){e.influenceBodyType=t},expression:"influenceBodyType"}},e._l(e.CollectionData("OPOBJTYPE"),(function(t){return o("ta-select-option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.label))])})),1),o("ta-tag-select",{staticClass:"filter-name",attrs:{title:"操作权限",data:e.CollectionData("HAVAORNOT"),"is-multi":!0},on:{change:e.loadData},model:{value:e.isPermissions,callback:function(t){e.isPermissions=t},expression:"isPermissions"}})],1),o("ta-table",{ref:"table",attrs:{columns:e.columns,dataSource:e.gridData,rowKey:"logId",pagination:!1},scopedSlots:e._u([{key:"operate",fn:function(t,a){return o("span",{},[o("ta-table-operate",{attrs:{operateMenu:e.operateMenu}})],1)}},{key:"isPermission",fn:function(t){return o("span",{},[e._v(e._s(e.CollectionLabel("HAVAORNOT",t)))])}},{key:"opType",fn:function(t){return o("span",{},[e._v(e._s(e.CollectionLabel("OPTYPE",t)))])}},{key:"influenceBodyType",fn:function(t){return o("span",{},[e._v(e._s(e.CollectionLabel("OPOBJTYPE",t)))])}},{key:"opBodyType",fn:function(t){return o("span",{},[e._v(e._s(e.CollectionLabel("OPOBJTYPE",t)))])}},{key:"influenceBodyNameSlot",fn:function(t,a){return o("span",{},[a.influenceBody&&"@empty"!=a.influenceBody&&!a.influenceBodyName?o("ta-tag",{staticClass:"no-cursor",attrs:{type:"danger"}},[e._v("已删除")]):"@empty"==a.influenceBody?o("ta-tag",{staticClass:"no-cursor",attrs:{type:"danger"}},[e._v("无操作权限")]):o("span",[e._v(e._s(a.influenceBodyName))])],1)}},{key:"opSubjectNameSlot",fn:function(t,a){return o("span",{},[a.opSubject&&!a.opSubjectName?o("ta-tag",{staticClass:"no-cursor",attrs:{type:"danger"}},[e._v("已删除")]):a.opSubject||a.opSubjectName?o("span",[e._v(e._s(a.opSubjectName))]):o("span",[e._v("--")])],1)}}])}),o("div",{attrs:{slot:"footer"},slot:"footer"},[o("ta-pagination",{ref:"gridPager",staticStyle:{float:"right","margin-top":"10px"},attrs:{showSizeChanger:"",showQuickJumper:"",dataSource:e.gridData,defaultPageSize:10,params:e.pageParams,url:"org/sysmg/orgOpLogRestService/getOrgOpLog"},on:{"update:dataSource":function(t){e.gridData=t},"update:data-source":function(t){e.gridData=t}}})],1)],1),o("ta-modal",{attrs:{centered:"",footer:null,width:"800px",destroyOnClose:!0},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[o("ta-form",{attrs:{autoFormCreate:function(e){t.form=e},layout:e.formLayout}},[o("ta-form-item",{staticStyle:{"margin-bottom":"0px"},attrs:{label:"操作内容"}},[o("ta-textarea",{attrs:{autosize:{minRows:20,maxRows:20},readonly:"readonly"},model:{value:e.changeContent,callback:function(t){e.changeContent=t},expression:"changeContent"}})],1)],1)],1),o("ta-modal",{attrs:{centered:"",width:"1000px",bodyStyle:{height:"500px",padding:"0"},footer:null,destroyOnClose:!0,maskClosable:!0,title:"操作日志图(默认显示最近7天)",closable:!0},on:{close:function(t){return e.closeChart(!1)}},model:{value:e.showChartVisible,callback:function(t){e.showChartVisible=t},expression:"showChartVisible"}},[o("op-log-chart",{ref:"opLogChart",attrs:{queryData:e.queryData},on:{closeModal:e.closeChart}})],1)],1)},n=[],r="/org/sysmg/orgOpLogRestService/",s={getChangeContent:function(t,e){Base.submit(null,{url:r+"getChangeContent",data:t},{successCallback:function(t){return e(t)}})},opLogChart:function(t,e){Base.submit(null,{url:r+"opLogChart",data:t},{successCallback:function(t){return e(t)}})}},i=a(55437),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{height:"100%","overflow-x":"auto"}},[a("div",{staticStyle:{padding:"30px 30px 0 50px"}},[a("ta-radio-group",{attrs:{value:t.buttonValue},on:{change:t.handleChange}},[a("ta-radio-button",{attrs:{value:"opType"},on:{click:function(e){return t.changeType(1)}}},[t._v("操作类型")]),a("ta-radio-button",{attrs:{value:"bodyType"},on:{click:function(e){return t.changeType(0)}}},[t._v("影响主体类型")])],1),a("ta-e-charts",{attrs:{chartsType:"scatter",data:t.chartData,"data-empty":t.dataEmpty,grid:t.grid}})],1)])},c=[],u=a(66347),d=a(99440),p=(a(39551),{name:"opLogChart",props:["queryData"],data:function(){return{chartData:{columns:["日期"],rows:[]},grid:{top:90},buttonValue:"bodyType",dataEmpty:!1}},components:{TaECharts:d.Z},mounted:function(){this.setValue(0)},methods:{setValue:function(t){var e=this;this.dataEmpty=!1,this.chartData.rows=[],this.chartData.columns=["日期"];var a=new Set([]);this.queryData["typeForChart"]=t,s.opLogChart(this.queryData,(function(t){0==t.data.opLogChartData.length&&(e.dataEmpty=!0);for(var o=0;o<t.data.opLogChartData.length;o++){var n={};for(var r in t.data.opLogChartData[o])r.match("日期")?n["日期"]=t.data.opLogChartData[o][r]+"":(a.add(r),n[r]=t.data.opLogChartData[o][r]);e.chartData.rows.push(n)}var s,i=(0,u.Z)(a.keys());try{for(i.s();!(s=i.n()).done;){var l=s.value;e.chartData.columns.push(l)}}catch(c){i.e(c)}finally{i.f()}}))},changeType:function(t){this.setValue(t)},handleChange:function(t){this.buttonValue=t.target.value}}}),h=p,f=a(1001),m=(0,f.Z)(h,l,c,!1,null,null,null),y=m.exports,g=[{title:"经办人",dataIndex:"name",width:"10%"},{title:"经办时间",dataIndex:"opTime",overflowTooltip:!0,width:"10%"},{title:"操作权限",dataIndex:"isPermission",yesOrNoTag:!0,width:"10%",scopedSlots:{customRender:"isPermission"}},{title:"操作类型",dataIndex:"opType",width:"10%",scopedSlots:{customRender:"opType"}},{title:"影响主体类型",dataIndex:"influenceBodyType",overflowTooltip:!0,width:"10%",scopedSlots:{customRender:"influenceBodyType"}},{title:"影响主体名称",overflowTooltip:!0,dataIndex:"influenceBodyNameSlot",width:"10%",scopedSlots:{customRender:"influenceBodyNameSlot"}},{title:"操作主体类型",dataIndex:"opBodyType",width:"10%",scopedSlots:{customRender:"opBodyType"}},{title:"操作主体名称",dataIndex:"opSubjectNameSlot",width:"10%",scopedSlots:{customRender:"opSubjectNameSlot"}},{title:"数据是否被篡改",dataIndex:"isTampered",width:"10%",scopedSlots:{customRender:"isTampered"}},{title:"操作",dataIndex:"operate",align:"center",width:"120px",scopedSlots:{customRender:"operate"}}],v={name:"operationLog",components:{opLogChart:y},data:function(){var t=this;return{formLayout:"vertical",columns:g,operateMenu:[{name:"操作内容",onClick:function(e){t.showModel(e.logId)},isShow:function(t){return t.changeContent}}],gridData:[],startDateStr:"",endDateStr:"",opTime:[],opUser:"",opType:void 0,influenceBodyType:void 0,isPermissions:[],visible:!1,changeContent:"",showChartVisible:!1,queryData:[]}},mounted:function(){this.loadData()},methods:{pageParams:function(){if(!(""!==this.startDateStr&&""!==this.endDateStr&&new Date(this.startDateStr).getTime()>new Date(this.endDateStr).getTime()))return{startDateStr:this.startDateStr,endDateStr:this.endDateStr,opUser:this.opUser,opType:this.opType,influenceBodyType:this.influenceBodyType,isPermissions:this.isPermissions};this.$message.warn("开始日期不能大于结束日期")},loadData:function(){this.$refs.gridPager.loadData((function(t){}))},showModel:function(t){var e=this;this.visible=!0,s.getChangeContent({logId:t},(function(t){e.changeContent=t.data.changeContent}))},onChange:function(t,e){this.startDateStr=""===e[0]?"":e[0]+" 00:00:00",this.endDateStr=""===e[1]?"":e[1]+" 23:59:59",this.loadData()},showChart:function(){this.showChartVisible=!0,""!==this.startDateStr&&""!==this.endDateStr&&new Date(this.startDateStr).getTime()>new Date(this.endDateStr).getTime()?this.$message.warn("开始日期不能大于结束日期"):this.queryData={startDateStr:this.startDateStr,endDateStr:this.endDateStr,opUser:this.opUser,opType:this.opType,influenceBodyType:this.influenceBodyType,isPermissions:this.isPermissions}},closeChart:function(){this.showChartVisible=!1},exportData:function(){var t={startDateStr:this.startDateStr,endDateStr:this.endDateStr,opUser:this.opUser,opType:this.opType,influenceBodyType:this.influenceBodyType,isPermissions:this.isPermissions,startDate:this.startDateStr,endDate:this.endDateStr};i.Z.exportExcel(t,"audit/auditExportRestService/orgOp")},getContainer:function(){return document.getElementById("operationLog")}}},C=v,b=(0,f.Z)(C,o,n,!1,null,"75319ffe",null),S=b.exports},55437:function(t,e){e.Z={exportExcel:function(t,e){Base.submit(null,{url:e,data:t,responseType:"blob"}).then((function(t){var e=new Blob([t.data],{type:"application/xlsx;charset=utf-8"}),a=new FileReader;a.readAsText(e,"utf-8"),a.onload=function(){try{var o=JSON.parse(a.result);null!=o.errors&&parent.window.message.error("下载失败!")}catch(s){if(window.navigator.msSaveBlob)window.navigator.msSaveBlob(e,unescape(t.headers.filename));else{var n=document.createElement("a"),r=window.URL.createObjectURL(e);n.href=r,n.download=unescape(t.headers.filename),document.body.appendChild(n),n.click(),document.body.removeChild(n),window.URL.revokeObjectURL(r)}}}}))}}}}]);