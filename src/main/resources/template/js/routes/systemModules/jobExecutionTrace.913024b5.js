"use strict";(self["webpackChunkta404_ui_cli"]=self["webpackChunkta404_ui_cli"]||[]).push([[7614],{10372:function(t,e,a){a.r(e),a.d(e,{default:function(){return l}});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"fit",attrs:{id:"jobExecutionTrace"}},[a("ta-border-layout",{attrs:{layout:{header:"70px",footer:"70px"},centerCfg:{showBar:!0},"footer-cfg":{showBorder:!1}}},[a("div",{staticClass:"center-box",attrs:{slot:"header"},slot:"header"},[a("ta-input-search",{staticClass:"search-box",attrs:{placeholder:"请输入作业名称",enterButton:"搜索"},on:{search:t.loadData},model:{value:t.searchInfo,callback:function(e){t.searchInfo=e},expression:"searchInfo"}})],1),a("div",{attrs:{slot:"centerExtraContent"},slot:"centerExtraContent"},[a("span",[t._v("当前数据源名称：")]),a("ta-tag",{staticClass:"no-cursor",attrs:{color:"#00a65a"}},[t._v(t._s(this.dsData.datasourceName))]),a("ta-range-picker",{staticClass:"distance",attrs:{placeholder:["开始时间","结束时间"],"get-calendar-container":t.getContainer},on:{change:t.onChange}}),a("ta-tag-select",{staticClass:"filter-name",attrs:{title:"操作权限",data:t.CollectionData("ISSUCCESS")},on:{change:t.filterClick},model:{value:t.isSuccess,callback:function(e){t.isSuccess=e},expression:"isSuccess"}}),a("div",{staticStyle:{float:"right"}},[a("ta-button",{on:{click:t.fnBackToHome}},[a("ta-icon",{attrs:{type:"rollback"}}),t._v("返回")],1)],1)],1),a("ta-table",{attrs:{columns:t.executionColumns,dataSource:t.executionGridData,pagination:!1},scopedSlots:t._u([{key:"is_success",fn:function(e,s){return a("span",{},[1==s.is_success?a("ta-tag",{staticClass:"no-cursor",attrs:{color:"#00a65a"}},[t._v("成功")]):a("ta-tag",{staticClass:"no-cursor",attrs:{color:"#dd4b39"}},[t._v("失败")])],1)}},{key:"operate",fn:function(e,s){return a("span",{},[a("ta-table-operate",{attrs:{operateMenu:t.operateMenu}})],1)}}])}),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("ta-pagination",{ref:"gridPager",staticStyle:{float:"right","margin-top":"10px"},attrs:{showSizeChanger:"",showQuickJumper:"",dataSource:t.executionGridData,defaultPageSize:10,params:t.pageParams,url:"jobmg/elasticjob/jobDatasourceManagementRestService/getJobExecutionTrace"},on:{"update:dataSource":function(e){t.executionGridData=e},"update:data-source":function(e){t.executionGridData=e}}})],1)],1),a("ta-modal",{attrs:{centered:"",footer:null,width:"800px",destroyOnClose:!0},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[a("ta-label-con",{staticStyle:{"margin-bottom":"0px"},attrs:{label:"失败原因",labelCol:2,wrapperCol:22}},[a("ta-textarea",{attrs:{autosize:{minRows:15,maxRows:20},readonly:"readonly"},model:{value:t.failure_cause,callback:function(e){t.failure_cause=e},expression:"failure_cause"}})],1)],1)],1)},o=[],r=(a(95439),[{title:"作业名称",dataIndex:"job_name",width:"14%"},{title:"服务器IP",dataIndex:"ip",width:"14%"},{title:"分片项",dataIndex:"sharding_item",width:"14%"},{title:"执行结果",dataIndex:"is_success",width:"14%",scopedSlots:{customRender:"is_success"}},{title:"开始时间",dataIndex:"start_time",width:"14%"},{title:"完成时间",dataIndex:"complete_time",width:"14%"},{title:"操作选项",dataIndex:"operate",width:"10%",scopedSlots:{customRender:"operate"},align:"center"}]),i={name:"jobExecutionTrace",components:{},data:function(){var t=this;return{executionGridData:[],executionColumns:r,operateMenu:[{name:"失败原因",isShow:function(t){return t.failure_cause},disabled:function(t){return!t.failure_cause},onClick:function(e){t.showModel(e.failure_cause)}}],searchInfo:"",start_time_str:"",complete_time_str:"",failure_cause:"",isSuccess:[],visible:!1,dsData:{}}},mounted:function(){this.$route.params.dsData instanceof Object?(this.dsData=this.$route.params.dsData||{},this.loadData()):this.$router.push({name:"jobDatasourceConfig"})},methods:{loadData:function(){this.$refs.gridPager.loadData((function(t){}))},pageParams:function(){return{driver:this.dsData.driver,url:this.dsData.url,userName:this.dsData.userName,password:this.dsData.password,job_name:this.searchInfo,ip:this.ip,is_success:this.isSuccess[0],start_time_str:this.start_time_str,complete_time_str:this.complete_time_str}},onChange:function(t,e){this.start_time_str=e[0],this.complete_time_str=e[1],this.loadData()},showModel:function(t){this.visible=!0,this.failure_cause=t},fnBackToHome:function(){this.$router.push({name:"jobDatasourceConfig"})},filterClick:function(){this.loadData()},getContainer:function(){return document.getElementById("jobExecutionTrace")}}},n=i,c=a(1001),u=(0,c.Z)(n,s,o,!1,null,"0a91ece0",null),l=u.exports},95439:function(t,e){var a="/jobmg/elasticjob/jobDatasourceManagementRestService/";e.Z={addJobDatasource:function(t,e){Base.submit(null,{url:a+"addJobDatasource",data:t},{successCallback:function(t){return e(t)}})},deleteJobDatasource:function(t,e){Base.submit(null,{url:a+"deleteJobDatasource",data:t},{successCallback:function(t){return e(t)}})},getJobExecutionTrace:function(t,e){Base.submit(null,{url:a+"getJobExecutionTrace",data:t},{successCallback:function(t){return e(t)}})},getJobStatusTrace:function(t,e){Base.submit(null,{url:a+"getJobStatusTrace",data:t},{successCallback:function(t){return e(t)}})}}}}]);