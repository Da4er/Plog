!function(e){function o(n){if(t[n])return t[n].exports;var r=t[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,o),r.loaded=!0,r.exports}var t={};return o.m=e,o.c=t,o.p="",o(0)}([function(e,o,t){"use strict";function n(e){var o=/^[A-Za-z][A-Za-z0-9_]{4,}$/;return o.test(e)}function r(e){var o=/^[\S]{6,}$/;return o.test(e)}function a(){return n(u.val())?r(d.val())?!0:(console.log("password invalid"),!1):(u.focus(),console.log("username invalid"),!1)}var i=t(1),c=t(2),s=window.location.protocol+"//"+window.location.host,l=s+"/api/v1.0/login",u=i("input#username"),d=i("input#password"),p=i("button#login-btn");i(function(){i.each([u,d],function(){i(this).keyup(function(){a()?p.prop("disabled",!1):p.prop("disabled",!0)})})}),i(document).ready(function(){setTimeout(function(){d.val("")},100)}),i(function(){p.on("click",function(){var e=u.val(),o=d.val();i.ajax({method:"POST",url:l,data:{username:e,password:o},dataType:"json",timeout:3e4,beforeSend:function(){p.prop("disabled",!0).text("登录中...")},error:function(){d.val(""),p.text("登录").prop("disabled",!0)},success:function(e){if(console.log(e),console.log(c.getUrlPara("redirect")),e.success&&1==e.success){p.text("登录成功");var o={plog_authenticator:"password_grant",access_token:e.access_token,expires_in:e.expires_in,expires_at:e.expires_at,refresh_token:e.refresh_token,token_type:e.token_type};localStorage.setItem("Plog:Token",JSON.stringify(o)),setTimeout(function(){var e=c.getUrlPara("redirect")?0==decodeURIComponent(c.getUrlPara("redirect")).indexOf("http")?decodeURIComponent(c.getUrlPara("redirect")):s+"/"+decodeURIComponent(c.getUrlPara("redirect")):s;window.location.href=e},1500)}else d.val(""),p.text("登录").prop("disabled",!0),alert(e.message)}}).done(function(){p.text("登录")})})})},function(e,o){e.exports=jQuery},function(e,o,t){"use strict";var n=t(1);n(function(){n(".bind-redirect").on("click",function(e){e.preventDefault();var o=n(this).attr("href");o=o+"?redirect="+encodeURIComponent(window.location.pathname),window.location.href=o}),n("[data-focus]").on("focus",function(){n(n(this).data("focus")).slideDown()}).on("blur",function(){n(n(this).data("focus")).slideUp()})}),n(function(){n("a[data-toggle='dropdown']").on("click",function(){var e=n(this).data("toggle");n(this).closest("."+e).toggleClass("open")})}),o.getUrlPara=function(e,o){o||(o=window.location.href),e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t="[\\?&]"+e+"=([^&#]*)",n=new RegExp(t),r=n.exec(o);return null==r?null:r[1]},o.getStoredAccessToken=function(){var e=localStorage.getItem("Plog:Token");return e=JSON.parse(e),e.access_token||""},o.getSiteUrl=function(){return window.location.protocol+"//"+window.location.host},o.getAPIUrl=function(){return window.location.protocol+"//"+window.location.host+"/api/v1.0"}}]);