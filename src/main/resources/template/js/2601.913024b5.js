(self["webpackChunkta404_ui_cli"]=self["webpackChunkta404_ui_cli"]||[]).push([[2601,6073],{18583:function(o,e,r){"use strict";r.d(e,{d:function(){return a}});var n=r(30228),t=r(95278),c=r(6442),a={methods:{changeTheme:function(o){if(t.Z.onlineTheme)return(0,n.changeTheme)(o)},updateColorWeak:function(o){return(0,c.MP)(o)}}}},30228:function(o,e,r){"use strict";r.r(e),r.d(e,{changeTheme:function(){return u},injectTheme:function(){return f},syncThemeWhenInit:function(){return d}});var n=r(17546),t=r(95278),c=r(6442),a=r(18583),i=r(97369),l=r.n(i);function u(o){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=[];if(0===o.indexOf("#"))r.push(o);else{var n=l()(o);Object.keys(n).forEach((function(o){o.indexOf("color")>0&&r.push(n[o])}))}(0,c.xz)(r,e)}function s(o){(0,c.MP)(o)}function d(){var o,e=n.Z.createWebStorage("index_theme",{isLocal:!0}),r=n.Z.getStorage("index_theme","index_theme",!0);u(null!==r&&void 0!==r?r:t.Z.defaultTheme,!1),(0,c.MP)(null!==(o=e.get("dark_mode"))&&void 0!==o?o:t.Z.defaultDarkMode)}function f(o){t.Z.onlineTheme&&(o.mixin(a.d),d())}window.addEventListener("storage",(function(o){if("index_theme"===o.key){var e=JSON.parse(o.newValue),r=e.index_theme,n="true"===e.dark_mode;r&&u(JSON.parse(r),!1),s(n)}}),!1)},6442:function(o,e,r){"use strict";r.d(e,{MP:function(){return d},xz:function(){return s}});var n=r(89584),t=r(98878),c=r.n(t),a=r(14193),i=r(3032),l=r(60011);r(7638);i["default"].use(l.Z);var u={getAntdSerials:function(o){var e=new Array(9).fill().map((function(e,r){return c().varyColor.lighten(o,r/10)})),r=(0,a.R_)(o),n=c().varyColor.toNum3(o.replace("#","")).join(",");return e.concat(r).concat(n)},changeColor:function(o){var e=this,r=[];o.forEach((function(o){r.push.apply(r,(0,n.Z)(e.getAntdSerials(o)))}));var t={newColors:r,changeUrl:function(o){var e="/";return e="/ta404/template/",e.concat(o)}};return c().changer.changeColor(t)}};function s(o,e){var r;e&&(r=l.Z.loading(window.pageVmObj.$t("theme.changing"),0)),u.changeColor(o).then((function(){r&&r()}))}function d(o){var e=document.body;o?e.classList.add("colorWeak"):e.classList.remove("colorWeak")}},89580:function(o){o.exports={"primary-color":"#13c2c2","link-color":"#13c2c2"}},42896:function(o){o.exports={"primary-color":"#1890FF"}},23379:function(o){o.exports={"primary-color":"#006dd9","link-color":"#1B65B9","success-color":"#52c41a","warning-color":"#faad14","error-color":"#fe5c65","text-color":"rgba(0, 0, 0, 0.7)","heading-color":"rgba(0, 0, 0, 0.9)","input-color":"rgba(0, 0, 0, 0.9)","shadow-color":"rgba(0, 0, 0, 0.3)","border-color-base":"#b2b2b2","disabled-bg":"#ebebeb","disabled-color":"rgba(0, 0, 0, 0.5)","modal-mask-bg":"rgba(0, 0, 0, 0.75)","input-addon-bg":"#ebebeb","border-color-split":"#b2b2b2","background-color-light":"#ebebeb","item-hover-bg":"#d6e7f9","item-active-bg":"#d6e7f9","tabs-card-head-background":"#fafafa","pagination-item-active-bg":"#006dd9","pagination-item-active-color":"#fff","table-row-hover-bg":"#d6e7f9","text-color-secondary":"#606266","background-color-base":"#F0F2F5"}},62977:function(o){o.exports={"primary-color":"#1DA57A","link-color":"#1DA57A"}},97369:function(o,e,r){var n=r(96643)["default"];o.exports=function(o){var e=r(83574)("./".concat(o,".js"));return n({},e)}},77745:function(o){o.exports={"primary-color":"#FA541C","link-color":"#FA541C"}},93344:function(o){o.exports={"primary-color":"#722ED1","link-color":"#722ED1"}},21301:function(o){o.exports={"primary-color":"#F5222D","link-color":"#F5222D","success-color":"#52c41a"}},73492:function(o){o.exports={"primary-color":"#1B65B9","link-color":"#1B65B9","success-color":"#67C23A","warning-color":"#E6A23C","error-color":"#F56C6C","text-color":"#303133","text-color-secondary":"#606266","border-color-base":"#DCDFE6","border-color-split":"#EBEEF5","background-color-base":"#F0F2F5","background-color-light":"#F5F7FA","font-family":"Microsoft YaHei,Hiragino Sans GB,Pingfang SC,Arial,Helvetica Neue,Helvetica","font-variant-base":"tabular-nums","font-size-base":"14px","font-size-lg":"16px","font-size-sm":"12px"}},83574:function(o,e,r){var n={"./dark.js":89580,"./default.js":42896,"./example.js":23379,"./green.js":62977,"./index.js":97369,"./orange.js":77745,"./purple.js":93344,"./red.js":21301,"./ybblue.js":73492};function t(o){var e=c(o);return r(e)}function c(o){if(!r.o(n,o)){var e=new Error("Cannot find module '"+o+"'");throw e.code="MODULE_NOT_FOUND",e}return n[o]}t.keys=function(){return Object.keys(n)},t.resolve=c,o.exports=t,t.id=83574}}]);