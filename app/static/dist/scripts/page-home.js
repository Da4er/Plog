!function(n){function o(e){if(t[e])return t[e].exports;var r=t[e]={exports:{},id:e,loaded:!1};return n[e].call(r.exports,r,r.exports,o),r.loaded=!0,r.exports}var t={};return o.m=n,o.c=t,o.p="",o(0)}([function(n,o,t){"use strict";t(1),t(2),window.location.protocol+"//"+window.location.host},function(n,o){n.exports=jQuery},function(n,o,t){"use strict";var e=t(1);e(function(){e("a.login-link").on("click",function(n){n.preventDefault();var o=e(this).attr("href");o=o+"?redirect="+encodeURIComponent(window.location.pathname),window.location.href=o})}),o.getUrlPara=function(n,o){o||(o=window.location.href),n=n.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t="[\\?&]"+n+"=([^&#]*)",e=new RegExp(t),r=e.exec(o);return null==r?null:r[1]}}]);