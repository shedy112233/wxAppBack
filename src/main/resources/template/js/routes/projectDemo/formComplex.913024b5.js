"use strict";(self["webpackChunkta404_ui_cli"]=self["webpackChunkta404_ui_cli"]||[]).push([[5927],{50092:function(t,e,a){a.r(e),a.d(e,{default:function(){return S}});var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ta-border-layout",[a("ta-card",{staticClass:"mg-b20",attrs:{title:"切换型表单校验"}},[a("switch-check")],1),a("ta-card",{staticClass:"mg-b20",attrs:{title:"所有表单元素"}},[a("all-form")],1),a("ta-card",{attrs:{title:"所有表单元素对值的操作"}},[a("all-form-values")],1)],1)},i=[],o=function(){var t=this,e=this,a=e.$createElement,r=e._self._c||a;return r("ta-form",{attrs:{"auto-form-create":function(e){t.form=e},"form-layout":!0,col:2,"label-width":100,"self-update":!0}},[r("ta-form-item",{attrs:{label:"切换选项","field-decorator-id":"switch",span:24,"init-value":"1"}},[r("ta-radio-group",{attrs:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},on:{change:e.fnOnRadioChange}})],1),"1"==e.radioChecked?r("ta-form-item",{attrs:{label:"输入框1","field-decorator-id":"data1","field-decorator-options":{initialValue:"",rules:[{required:!0,message:"输入框1不能为空!"}]}}},[r("ta-input",{key:"input1"})],1):e._e(),"1"==e.radioChecked?r("ta-form-item",{attrs:{label:"数字框1","field-decorator-id":"number1"}},[r("ta-input-number",{staticStyle:{width:"100%"}})],1):e._e(),"2"==e.radioChecked?r("ta-form-item",{attrs:{label:"输入框2","field-decorator-id":"data2","field-decorator-options":{initialValue:"",rules:[{required:!0,message:"输入框2不能为空!"}]}}},[r("ta-input",{key:"input2"})],1):e._e(),r("ta-form-item",{attrs:{label:"",span:24}},[r("ta-button",{attrs:{type:"primary"},on:{click:e.handleSubmit}},[e._v(" 提交 ")])],1)],1)},l=[],n={name:"switchCheck",data:function(){return{radioChecked:"1"}},methods:{fnOnRadioChange:function(t){"1"===t.target.value?this.radioChecked="1":this.radioChecked="2"},handleSubmit:function(){var t=this,e=this.form.getFieldsValue();this.Base.submit(this.form,{url:"http/mock/projectDemo/formComplex/submitAll",data:e,autoValid:!0},{successCallback:function(a){t.$message.success("提交成功值为："+JSON.stringify(e))},failCallback:function(e){t.$message.error("提交失败")}})}}},s=n,c=a(1001),d=(0,c.Z)(s,o,l,!1,null,null,null),u=d.exports,m=function(){var t=this,e=this,a=e.$createElement,r=e._self._c||a;return r("ta-form",{attrs:{layout:"horizontal","form-layout":!0,"auto-form-create":function(e){t.form=e},"label-width":100,"self-update":!0}},[r("ta-form-item",{attrs:{label:"输入框","field-decorator-id":"input"}},[r("ta-input")],1),r("ta-form-item",{attrs:{label:"数字框","field-decorator-id":"inputNumber"}},[r("ta-input-number",{staticClass:"full-width"})],1),r("ta-form-item",{attrs:{label:"自动完成","field-decorator-id":"autoComplete"}},[r("ta-auto-complete",{attrs:{"data-source":e.dataSource1},on:{search:e.handleSearch1}})],1),r("ta-form-item",{attrs:{label:"颜色选择","field-decorator-id":"colorPicker"}},[r("ta-color-picker",{attrs:{"default-color":"#ffffff"}})],1),r("ta-form-item",{attrs:{label:"级联选择","field-decorator-id":"cascader"}},[r("ta-cascader",{attrs:{options:e.formInfo.options}})],1),r("ta-form-item",{attrs:{label:"选择器","field-decorator-id":"select"}},[r("ta-select",{attrs:{options:e.formInfo.plainOptions}})],1),r("ta-form-item",{attrs:{label:"树选择","field-decorator-id":"treeSelect"}},[r("ta-tree-select",{attrs:{"tree-node-filter-prop":"label","tree-data":e.treeData,"show-search":"","dropdown-style":{maxHeight:"400px",overflow:"auto"},"allow-clear":""}})],1),r("ta-form-item",{attrs:{label:"RPC","field-decorator-id":"suggest"}},[r("ta-suggest",{ref:"suggest",attrs:{"data-source":e.dataSource,"table-title-map":e.titleMap,"option-config":e.optionConfig,"get-popup-container":e.setPopupContainer},on:{search:e.handleSearch}})],1),r("ta-form-item",{attrs:{label:"日期选择","field-decorator-id":"datePicker"}},[r("ta-date-picker",{staticClass:"full-width"})],1),r("ta-form-item",{attrs:{label:"月份选择","field-decorator-id":"monthPicker"}},[r("ta-month-picker",{staticClass:"full-width"})],1),r("ta-form-item",{attrs:{label:"季度选择","field-decorator-id":"quarterPicker"}},[r("ta-quarter-picker",{staticClass:"full-width"})],1),r("ta-form-item",{attrs:{label:"年份选择","field-decorator-id":"yearPicker"}},[r("ta-year-picker",{staticClass:"full-width"})],1),r("ta-form-item",{attrs:{label:"时间选择","field-decorator-id":"timePicker"}},[r("ta-time-picker",{staticClass:"full-width"})],1),r("ta-form-item",{attrs:{label:"日期区间","field-decorator-id":"rangePicker"}},[r("ta-range-picker",{staticClass:"full-width"})],1),r("ta-form-item",{attrs:{label:"月份区间","field-decorator-id":"rangePicker1"}},[r("ta-range-picker",{ref:"rangePicker1",attrs:{format:"YYYY-MM",mode:e.mode1,"show-today":!1},on:{panelChange:e.handlePanelChange1}},[r("template",{slot:"renderExtraFooter"},[r("a",{attrs:{role:"button"},on:{click:e.returnThisMonth}},[e._v("返回本月")])])],2)],1),r("ta-form-item",{attrs:{label:"年份区间","field-decorator-id":"rangePicker2"}},[r("ta-range-picker",{ref:"rangePicker2",attrs:{format:"YYYY",mode:["year","year"],"show-today":!1},on:{panelChange:e.handlePanelChange2}})],1),r("ta-form-item",{attrs:{label:"日期预设","field-decorator-id":"pickerOptions1"}},[r("ta-date-picker",{staticClass:"full-width",attrs:{"picker-options":e.datePickerOptions}})],1),r("ta-form-item",{attrs:{label:"月份预设","field-decorator-id":"pickerOptions2"}},[r("ta-month-picker",{staticClass:"full-width",attrs:{"picker-options":e.monthPickerOptions,align:e.align1}})],1),r("ta-form-item",{attrs:{label:"季度预设","field-decorator-id":"pickerOptions3"}},[r("ta-quarter-picker",{staticClass:"full-width",attrs:{"picker-options":e.quarterPickerOptions}})],1),r("ta-form-item",{attrs:{label:"年份预设","field-decorator-id":"pickerOptions4"}},[r("ta-year-picker",{staticClass:"full-width",attrs:{"picker-options":e.yearPickerOptions}})],1),r("ta-form-item",{attrs:{label:"区间预设","field-decorator-id":"pickerOptions5"}},[r("ta-range-picker",{attrs:{format:"YYYY-MM","picker-options":e.rangePickerOptions,"show-today":!1,align:e.align2}})],1),r("ta-form-item",{attrs:{label:"用户录入","field-decorator-id":"userInput"}},[r("ta-user-input",{attrs:{"select-title":"XX人员选择","org-load-fn":e.handleLoadOrgNode,"user-load-fn":e.handleQueryUserList,"user-select-call":e.handleGetUserListResult}})],1),r("ta-form-item",{attrs:{label:"单选框","field-decorator-id":"radioGroup"}},[r("ta-radio-group",{attrs:{"collection-type":"sex"}})],1),r("ta-form-item",{attrs:{label:"多选框","field-decorator-id":"checkbox"}},[r("ta-checkbox-group",{attrs:{options:e.formInfo.plainOptions}})],1),r("ta-form-item",{attrs:{label:"评分","field-decorator-id":"rate"}},[r("ta-rate",{attrs:{"allow-half":""}})],1),r("ta-form-item",{attrs:{label:"开关","field-decorator-id":"switch","field-decorator-options":{valuePropName:"checked"}}},[r("ta-switch")],1),r("ta-form-item",{attrs:{label:"文本域","field-decorator-id":"textarea",span:{xs:24,sm:24,md:24,lg:24,xl:8,xxl:12}}},[r("ta-textarea",{attrs:{rows:4}})],1)],1)},f=[],h=(a(32564),a(96992)),p={data:function(){return{align1:{offset:[200,0]},align2:{offset:[110,0]},index:0,index1:0,dataSource:[],dataSource1:[],titleMap:null,optionConfig:{value:"id",label:"name"},treeData:[{value:"zhejiang",label:"浙江",children:[{value:"hangzhou",label:"杭州",children:[{value:"xihu",label:"西湖"}]}]},{value:"jiangsu",label:"江苏",children:[{value:"nanjing",label:"南京",children:[{value:"zhonghuamen",label:"中华门"}]}]}],formInfo:{},mode1:["month","month"],value1:[],datePickerOptions:{shortcuts:[{text:"今天",onClick:(0,h.ZP)()},{text:"跳转到去年的这个月",onClick:{time:(0,h.ZP)().subtract(1,"year")}},{text:"跳转到上个月",onClick:{time:(0,h.ZP)().subtract(1,"month")}}]},monthPickerOptions:{shortcuts:[{text:"这个月",onClick:(0,h.ZP)()},{text:"上个月",onClick:(0,h.ZP)().subtract(1,"month")},{text:"跳转到明年",onClick:{time:(0,h.ZP)().add(1,"year")}}]},yearPickerOptions:{shortcuts:[{text:"抗美援朝发生那一年",onClick:(0,h.ZP)("1950-10","YYYY-MM")},{text:"明年",onClick:(0,h.ZP)().add(1,"year")},{text:"跳转到19后前所在的年份",onClick:{time:(0,h.ZP)().add(19,"year")}}]},quarterPickerOptions:{shortcuts:[{text:"下个季度",onClick:(0,h.ZP)().add(1,"quarter")},{text:"这个季度",onClick:(0,h.ZP)()},{text:"跳转到明年",onClick:{time:(0,h.ZP)().add(1,"year"),before:function(t){},after:function(t){}}}]},rangePickerOptions:{shortcuts:[{text:"上个月到这个月",onClick:[(0,h.ZP)().subtract(1,"month"),(0,h.ZP)()]},{text:"今年的1月到12月",onClick:[(0,h.ZP)().startOf("year"),(0,h.ZP)().endOf("year")]},{text:"抗美援朝的时间段",onClick:[(0,h.ZP)("1950-10","YYYY-MM"),(0,h.ZP)("1953-7","YYYY-MM")]}]}}},created:function(){this.titleMap=new Map,this.titleMap.set("id","ID"),this.titleMap.set("name","姓名"),this.titleMap.set("sex","性别")},mounted:function(){this.queryFormData()},methods:{queryFormData:function(){var t=this;this.Base.submit(null,{url:"http/mock/projectDemo/formComplex/queryFormData"},{successCallback:function(e){t.formInfo=e.data}})},handleSearch:function(t){this.dataSource=this.formInfo.dataSource.filter((function(e){return e.name.indexOf(t)>=0}))},handleSearch1:function(t){var e;e=!t||t.indexOf("@")>=0?[]:["gmail.com","163.com","qq.com"].map((function(e){return"".concat(t,"@").concat(e)})),this.dataSource1=e},handlePanelChange1:function(t,e){this.index++,this.form.setFieldsValue({rangePicker1:t}),2===this.index&&(this.index=0,this.$refs.rangePicker1.$refs.picker.$children[0].$children[0].setPopupVisible(!1,new Event("popup")))},returnThisMonth:function(){this.form.setFieldsValue({rangePicker1:[Base.getMoment(),Base.getMoment()]}),this.$refs.rangePicker1.$refs.picker.$children[0].$children[0].setPopupVisible(!1,new Event("popup"))},handlePanelChange2:function(t,e){this.index1++,this.form.setFieldsValue({rangePicker2:t}),2===this.index1&&(this.index1=0,this.$refs.rangePicker2.$refs.picker.$children[0].$children[0].setPopupVisible(!1,new Event("popup")))},handleLoadOrgNode:function(t,e){return 0===t.level?e([{label:"久远银海",value:1}]):t.level>1?e([]):void setTimeout((function(){var t=[{label:"研发中心",value:2,leaf:!0},{label:"创新中心",value:3}];e(t)}),500)},handleQueryUserList:function(t,e){var a=t.orgId,r=t.userId,i=t.includeChild,o=t.pageSize,l=t.pageNum,n=t.searchVal,s=t.searchParam;if(l>1)return e([]),!1;this.Base.submit(null,{url:"http/mock/projectDemo/formComplex/getUserInfo",data:{orgId:a,userId:r,showChildUser:i?1:0,pageSize:o,pageNumber:l,name:n},showPageLoading:!0},{successCallback:function(t){var a=t.data.result;e(r?a.filter((function(t){return t.userId===r})):s?a.filter((function(t){return-1!==t.name.indexOf(s)})):a)}})},handleGetUserListResult:function(t){},setPopupContainer:function(t){return t.parentNode}}},k=p,g=(0,c.Z)(k,m,f,!1,null,"dbe46288",null),b=g.exports,P=function(){var t=this,e=this,a=e.$createElement,r=e._self._c||a;return r("ta-form",{attrs:{layout:"horizontal","form-layout":!0,"auto-form-create":function(e){t.form=e},"label-width":100,disabled:e.isDisabled,"self-update":!0}},[r("ta-form-item",{attrs:{label:"输入框","field-decorator-id":"input1","init-value":e.formData.input1}},[r("ta-input")],1),r("ta-form-item",{attrs:{label:"数字框","field-decorator-id":"inputNumber","init-value":e.formData.inputNumber}},[r("ta-input-number",{staticClass:"full-width"})],1),r("ta-form-item",{attrs:{label:"自动完成","field-decorator-id":"autoComplete","init-value":e.formData.autoComplete}},[r("ta-auto-complete",{attrs:{"data-source":e.dataSource1},on:{search:e.handleSearch1}})],1),r("ta-form-item",{attrs:{label:"颜色选择","field-decorator-id":"colorPicker","init-value":e.formData.colorPicker}},[r("ta-color-picker",{attrs:{"default-color":"#ffffff"}})],1),r("ta-form-item",{attrs:{label:"级联选择","field-decorator-id":"cascader1","init-value":e.formData.cascader1}},[r("ta-cascader",{attrs:{options:e.formInfo.options}})],1),r("ta-form-item",{attrs:{label:"选择器","field-decorator-id":"select","init-value":e.formData.select}},[r("ta-select",{attrs:{options:e.formInfo.plainOptions}})],1),r("ta-form-item",{attrs:{label:"树选择","field-decorator-id":"treeSelect","init-value":e.formData.treeSelect}},[r("ta-tree-select",{attrs:{"tree-data":e.treeData,"show-search":"","dropdown-style":{maxHeight:"400px",overflow:"auto"},"allow-clear":""}})],1),r("ta-form-item",{attrs:{label:"RPC","field-decorator-id":"suggest","init-value":e.formData.suggest}},[r("ta-suggest",{ref:"suggest",attrs:{"data-source":e.dataSource,"table-title-map":e.titleMap,"option-config":e.optionConfig},on:{search:e.handleSearch}})],1),r("ta-form-item",{attrs:{label:"日期选择","field-decorator-id":"datePicker","init-value":e.formData.datePicker}},[r("ta-date-picker",{staticClass:"full-width"})],1),r("ta-form-item",{attrs:{label:"月份选择","field-decorator-id":"monthPicker","init-value":e.formData.monthPicker}},[r("ta-month-picker",{staticClass:"full-width"})],1),r("ta-form-item",{attrs:{label:"季度选择","field-decorator-id":"quarterPicker","init-value":e.formData.quarterPicker}},[r("ta-quarter-picker",{staticClass:"full-width"})],1),r("ta-form-item",{attrs:{label:"年份选择","field-decorator-id":"yearPicker","init-value":e.formData.yearPicker}},[r("ta-year-picker",{staticClass:"full-width"})],1),r("ta-form-item",{attrs:{label:"时间选择","field-decorator-id":"timePicker","init-value":e.formData.timePicker}},[r("ta-time-picker",{staticClass:"full-width"})],1),r("ta-form-item",{attrs:{label:"日期区间","field-decorator-id":"rangePicker","init-value":e.formData.rangePicker}},[r("ta-range-picker",{staticClass:"full-width"})],1),r("ta-form-item",{attrs:{label:"月份区间","field-decorator-id":"rangePicker1","init-value":e.formData.rangePicker1}},[r("ta-range-picker",{attrs:{format:"YYYY-MM",mode:e.mode1},on:{panelChange:e.handlePanelChange1}})],1),r("ta-form-item",{attrs:{label:"年份区间","field-decorator-id":"rangePicker2","init-value":e.formData.rangePicker2}},[r("ta-range-picker",{attrs:{format:"YYYY",mode:["year","year"]},on:{panelChange:e.handlePanelChange2}})],1),r("ta-form-item",{attrs:{label:"日期预设","field-decorator-id":"pickerOptions1","init-value":e.formData.pickerOptions1}},[r("ta-date-picker",{staticClass:"full-width",attrs:{"picker-options":e.datePickerOptions}})],1),r("ta-form-item",{attrs:{label:"月份预设","field-decorator-id":"pickerOptions2","init-value":e.formData.pickerOptions2}},[r("ta-month-picker",{staticClass:"full-width",attrs:{"picker-options":e.monthPickerOptions}})],1),r("ta-form-item",{attrs:{label:"季度预设","field-decorator-id":"pickerOptions3","init-value":e.formData.pickerOptions3}},[r("ta-quarter-picker",{staticClass:"full-width",attrs:{"picker-options":e.quarterPickerOptions}})],1),r("ta-form-item",{attrs:{label:"年份预设","field-decorator-id":"pickerOptions4","init-value":e.formData.pickerOptions4}},[r("ta-year-picker",{staticClass:"full-width",attrs:{"picker-options":e.yearPickerOptions}})],1),r("ta-form-item",{attrs:{label:"区间预设","field-decorator-id":"pickerOptions5","init-value":e.formData.pickerOptions5}},[r("ta-range-picker",{attrs:{format:e.dateFormat,"picker-options":e.rangePickerOptions,align:e.align2}})],1),r("ta-form-item",{attrs:{label:"用户录入","field-decorator-id":"userInput","init-value":e.formData.userInput}},[r("ta-user-input",{attrs:{"select-title":"XX人员选择","org-load-fn":e.handleLoadOrgNode,"user-load-fn":e.handleQueryUserList,"user-select-call":e.handleGetUserListResult}})],1),r("ta-form-item",{attrs:{label:"单选框","field-decorator-id":"radioGroup","init-value":e.formData.radioGroup}},[r("ta-radio-group",{attrs:{"collection-type":"sex"}})],1),r("ta-form-item",{attrs:{label:"多选框","field-decorator-id":"checkbox","init-value":e.formData.checkbox}},[r("ta-checkbox-group",{attrs:{options:e.formInfo.plainOptions}})],1),r("ta-form-item",{attrs:{label:"评分","field-decorator-id":"rate","init-value":e.formData.rate}},[r("ta-rate",{attrs:{"allow-half":""}})],1),r("ta-form-item",{attrs:{label:"开关","field-decorator-id":"switch1","field-decorator-options":{valuePropName:"checked"},"init-value":e.formData.switch1}},[r("ta-switch")],1),r("ta-form-item",{attrs:{label:"文本域","field-decorator-id":"textarea1",span:{xs:24,sm:24,md:24,lg:24,xl:8,xxl:12},"init-value":e.formData.textarea1}},[r("ta-textarea",{attrs:{rows:4}})],1),r("ta-form-item",{attrs:{label:"",span:24}},[r("ta-button-group",[r("ta-button",{on:{click:e.fnSetValue}},[e._v(" 设置值 ")]),r("ta-button",{on:{click:e.fnGetValue}},[e._v(" 获取值 ")]),r("ta-button",{on:{click:e.fnSetDisabled}},[e._v(" 可用与否 ")]),r("ta-button",{on:{click:e.fnSubmit}},[e._v(" 提交 ")]),r("ta-button",{on:{click:e.fnClearValue}},[e._v(" 重置 ")])],1)],1)],1)},C=[],v={data:function(){return{dataSource:[],dataSource1:[],titleMap:null,optionConfig:{value:"id",label:"name"},formData:{},isDisabled:!1,formInfo:{},treeData:[{value:"zhejiang",label:"浙江",children:[{value:"hangzhou",label:"杭州",children:[{value:"xihu",label:"西湖"}]}]},{value:"jiangsu",label:"江苏",children:[{value:"nanjing",label:"南京",children:[{value:"zhonghuamen",label:"中华门"}]}]}],mode1:["month","month"],value1:[],dateFormat:"YYYY-MM-DD",datePickerOptions:{shortcuts:[{text:"今天",onClick:(0,h.ZP)()},{text:"跳转到去年的这个月",onClick:{time:(0,h.ZP)().subtract(1,"year")}},{text:"跳转到上个月",onClick:{time:(0,h.ZP)().subtract(1,"month")}}]},monthPickerOptions:{shortcuts:[{text:"这个月",onClick:(0,h.ZP)()},{text:"上个月",onClick:(0,h.ZP)().subtract(1,"month")},{text:"跳转到明年",onClick:{time:(0,h.ZP)().add(1,"year")}}]},yearPickerOptions:{shortcuts:[{text:"抗美援朝发生那一年",onClick:(0,h.ZP)("1950-10","YYYY-MM")},{text:"明年",onClick:(0,h.ZP)().add(1,"year")},{text:"跳转到19后前所在的年代",onClick:{time:(0,h.ZP)().add(19,"year")}}]},quarterPickerOptions:{shortcuts:[{text:"下个季度",onClick:(0,h.ZP)().add(1,"quarter")},{text:"这个季度",onClick:(0,h.ZP)()},{text:"跳转到明年",onClick:{time:(0,h.ZP)().add(1,"year"),before:function(t){},after:function(t){}}}]},rangePickerOptions:{shortcuts:[{text:"昨天到今天",onClick:[(0,h.ZP)().subtract(1,"days"),(0,h.ZP)()]},{text:"今年年初到今年年底",onClick:[(0,h.ZP)().startOf("year"),(0,h.ZP)().endOf("year")]}]},align2:{offset:[110,0]}}},created:function(){this.titleMap=new Map,this.titleMap.set("id","ID"),this.titleMap.set("name","姓名"),this.titleMap.set("sex","性别")},mounted:function(){this.queryFormData(),this.dataSource=[{id:"1",name:"张三1",sex:"男"},{id:"2",name:"张三2",sex:"男"}],this.formData={input1:"name",inputNumber:123,autoComplete:"13579@qq.com",colorPicker:"#ff9494",cascader1:["zhejiang","hangzhou","xihu"],select:"1",treeSelect:["zhejiang"],suggest:"1",datePicker:TaUtils.getMoment("2014-5-20",this.dateFormat),monthPicker:TaUtils.getMoment("2014-05",this.dateFormat),yearPicker:TaUtils.getMoment("2014",this.dateFormat),quarterPicker:TaUtils.getMoment("2014-5-20",this.dateFormat),rangePicker:[TaUtils.getMoment("2014-5-20",this.dateFormat),TaUtils.getMoment("2021-5-25",this.dateFormat)],rangePicker1:[TaUtils.getMoment("2014-5-20",this.dateFormat),TaUtils.getMoment("2021-7-20",this.dateFormat)],rangePicker2:[TaUtils.getMoment("2018",this.dateFormat),TaUtils.getMoment("2021",this.dateFormat)],timePicker:TaUtils.getMoment("12:34:56","HH:mm:ss"),pickerOptions1:TaUtils.getMoment("2014-5-20",this.dateFormat),pickerOptions2:TaUtils.getMoment("2014-5-20",this.dateFormat),pickerOptions3:TaUtils.getMoment("2014-5-20",this.dateFormat),pickerOptions4:TaUtils.getMoment("2014-5-20",this.dateFormat),pickerOptions5:[TaUtils.getMoment("2014-5-20",this.dateFormat),TaUtils.getMoment("2019-5-25",this.dateFormat)],radioGroup:"2",checkbox:["2"],rate:2,switch1:!0,textarea1:"文本域默认值",userInput:"1-1"}},methods:{queryFormData:function(){var t=this;this.Base.submit(null,{url:"http/mock/projectDemo/formComplex/queryFormData"},{successCallback:function(e){t.formInfo=e.data}})},handleSearch1:function(t){var e;e=!t||t.indexOf("@")>=0?[]:["gmail.com","163.com","qq.com"].map((function(e){return"".concat(t,"@").concat(e)})),this.dataSource1=e},handleSearch:function(t){this.dataSource=this.formInfo.dataSource},handlePanelChange1:function(t,e){this.form.setFieldsValue({rangePicker1:t}),this.mode1=["date"===e[0]?"month":e[0],"date"===e[1]?"month":e[1]]},handlePanelChange2:function(t,e){this.form.setFieldsValue({rangePicker2:t})},handleLoadOrgNode:function(t,e){return 0===t.level?e([{label:"久远银海",value:1}]):t.level>1?e([]):void setTimeout((function(){var t=[{label:"研发中心",value:2,leaf:!0},{label:"创新中心",value:3}];e(t)}),500)},handleQueryUserList:function(t,e){var a=t.orgId,r=t.userId,i=t.includeChild,o=t.pageSize,l=t.pageNum,n=t.searchVal,s=t.searchParam;if(l>1)return e([]),!1;this.Base.submit(null,{url:"http/mock/projectDemo/formComplex/getUserInfo",data:{orgId:a,userId:r,showChildUser:i?1:0,pageSize:o,pageNumber:l,name:n},showPageLoading:!0},{successCallback:function(t){var a=t.data.result;e(r?a.filter((function(t){return t.userId===r})):s?a.filter((function(t){return-1!==t.name.indexOf(s)})):a)}})},handleGetUserListResult:function(t){},fnClearValue:function(){this.form.resetFields(),this.isDisabled=!1},fnSetValue:function(){this.form.setFieldsValue({input1:"haha",inputNumber:345,autoComplete:"24680@qq.com",colorPicker:"#47acc5",cascader1:["jiangsu","nanjing","zhonghuamen"],select:"2",treeSelect:["jiangsu"],suggest:"2",radioGroup:"1",checkbox:["1"],rate:5,switch1:!1,textarea1:"文本域修改之后的值",userInput:"2-2"}),this.form.setFieldsMomentValue({datePicker:"2021-09-20",monthPicker:"2019-09",yearPicker:"2022",quarterPicker:"2021-09-20",rangePicker:["2021-06-20","2021-09-25"],rangePicker1:["2021-06","2022-07"],rangePicker2:["2012","2025"],timePicker:"2021-05-20 11:33:55",pickerOptions1:"2021-08-20",pickerOptions2:"2021-08-20",pickerOptions3:"2021-08-20",pickerOptions4:"2022-08-20",pickerOptions5:["2021-08-20","2021-12-25"]})},fnGetValue:function(){this.$message.info(JSON.stringify(this.form.getFieldsValue()))},fnSetDisabled:function(){this.isDisabled=!this.isDisabled},fnSubmit:function(){var t=this,e=this.form.getFieldsValue();this.Base.submit(this.form,{url:"http/mock/projectDemo/formComplex/submitAll",data:e,autoValid:!0},{successCallback:function(e){t.$message.success("提交成功")},failCallback:function(e){t.$message.error("提交失败")}})}}},x=v,O=(0,c.Z)(x,P,C,!1,null,"4adf4f0b",null),w=O.exports,y={name:"formComplex",data:function(){return{}},components:{switchCheck:u,allForm:b,allFormValues:w},mounted:function(){}},D=y,M=(0,c.Z)(D,r,i,!1,null,"467b5e85",null),S=M.exports}}]);