(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b085b076"],{"942f":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"user-reply-container d-flex justify-content-center"},[s("ul",{staticClass:"user-reply-list"},e._l(e.replies,(function(t){return s("li",{key:t.id,staticClass:"reply-item d-flex"},[s("div",{staticClass:"user-avatar"},[s("img",{staticClass:"avatar",attrs:{src:t.User.avatar}})]),s("div",{staticClass:"user-reply-main"},[s("div",{staticClass:"user-info"},[s("span",{staticClass:"user name"},[e._v(e._s(t.User.name))]),s("router-link",{staticClass:"user account",attrs:{to:"/users/"+t.UserId}},[e._v(e._s("@"+t.User.account))]),s("span",{staticClass:"seperater"},[e._v("•")]),s("span",{staticClass:"user created-at"},[e._v(e._s(e.isToday(t.createdAt)?e.fromNow(e.utcOffset(t.createdAt)):e.timeFormat(e.utcOffset(t.createdAt),"MM月DD日")))])],1),s("div",{staticClass:"replay-to d-flex align-items-center"},[s("span",{staticClass:"reply-title"},[e._v("回覆")]),s("router-link",{staticClass:"reply-account",attrs:{to:"/users/"+t.Tweet.User.id}},[e._v(e._s("@"+t.Tweet.User.account))])],1),s("p",{staticClass:"reply-content"},[e._v(e._s(t.comment))])])])})),0)])},r=[],i=s("1da1"),n=(s("96cf"),s("2708")),c=s("1602"),u=s("2fa3"),l={mixins:[n["b"]],data:function(){return{replies:[]}},created:function(){var e=this.$route.params.userid;this.fetchReplies(e)},beforeRouteUpdate:function(e,t,s){var a=e.params.userid;this.fetchReplies(a),s()},methods:{fetchReplies:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function s(){var a,r;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,c["a"].getUserReplies({userid:e});case 3:a=s.sent,r=a.data,t.replies=r,s.next=11;break;case 8:s.prev=8,s.t0=s["catch"](0),u["a"].fire({type:"error",title:"無法取得使用者資料，請稍後再試"});case 11:case"end":return s.stop()}}),s,null,[[0,8]])})))()}}},o=l,p=(s("a438"),s("2877")),f=Object(p["a"])(o,a,r,!1,null,"3a8da92a",null);t["default"]=f.exports},a438:function(e,t,s){"use strict";s("fd93")},fd93:function(e,t,s){}}]);
//# sourceMappingURL=chunk-b085b076.ad7174b0.js.map