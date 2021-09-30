(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-577690ac"],{"616d":function(e,a,t){},"73cf":function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"register"}},[t("form",{staticClass:"w-100",on:{submit:function(a){return a.preventDefault(),a.stopPropagation(),e.handleSubmit.apply(null,arguments)}}},[e._m(0),t("div",{staticClass:"form-label-group"},[t("label",{attrs:{for:"account"}},[e._v("帳號")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.account,expression:"account"}],staticClass:"form-control",attrs:{id:"account",name:"account",type:"text",autocomplete:"username",placeholder:"帳號",required:"",autofocus:""},domProps:{value:e.account},on:{input:function(a){a.target.composing||(e.account=a.target.value)}}})]),t("div",{staticClass:"form-label-group"},[t("label",{attrs:{for:"name"}},[e._v("名稱")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-control",attrs:{id:"name",name:"name",type:"text",autocomplete:"username",placeholder:"名稱",required:"",autofocus:""},domProps:{value:e.name},on:{input:function(a){a.target.composing||(e.name=a.target.value)}}})]),t("div",{staticClass:"form-label-group"},[t("label",{attrs:{for:"email"}},[e._v("Email")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{id:"email",name:"email",type:"email",autocomplete:"email",placeholder:"email",required:""},domProps:{value:e.email},on:{input:function(a){a.target.composing||(e.email=a.target.value)}}})]),t("div",{staticClass:"form-label-group"},[t("label",{attrs:{for:"password"}},[e._v("密碼")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{id:"password",name:"password",type:"password",placeholder:"密碼",autocomplete:"new-password",required:""},domProps:{value:e.password},on:{input:function(a){a.target.composing||(e.password=a.target.value)}}})]),t("div",{staticClass:"form-label-group"},[t("label",{attrs:{for:"password-check"}},[e._v("密碼確認")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.checkPassword,expression:"checkPassword"}],staticClass:"form-control",attrs:{id:"password-check",name:"checkPassword",type:"password",placeholder:"密碼確認",autocomplete:"new-password",required:""},domProps:{value:e.checkPassword},on:{input:function(a){a.target.composing||(e.checkPassword=a.target.value)}}})]),t("button",{staticClass:"btn",attrs:{type:"submit",disabled:e.isProcessing}},[e._v("註冊")]),t("div",{staticClass:"text-center"},[t("p",[t("router-link",{attrs:{to:"/login"}},[e._v("取消")])],1)])])])},s=[function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{staticClass:"register-top d-flex flex-column align-items-center"},[r("img",{staticClass:"register-logo",attrs:{src:t("a5f7")}}),r("h1",[e._v("建立你的帳號")])])}],o=t("1da1"),n=(t("96cf"),t("b0c0"),t("09aa")),i=t("2fa3"),c={data:function(){return{account:"",name:"",email:"",password:"",checkPassword:"",isProcessing:!1}},methods:{handleSubmit:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var t,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(a.prev=0,e.isProcessing=!0,e.account&&e.name&&e.email&&e.password&&e.checkPassword){a.next=6;break}return i["a"].fire({icon:"warning",title:"請確認已填寫所有欄位"}),e.isProcessing=!1,a.abrupt("return");case 6:if(e.password===e.checkPassword){a.next=12;break}return i["a"].fire({icon:"warning",title:"兩次輸入的密碼不同"}),e.password="",e.checkPassword="",e.isProcessing=!1,a.abrupt("return");case 12:return a.next=14,n["a"].signUp({account:e.account,name:e.name,email:e.email,password:e.password,checkPassword:e.checkPassword});case 14:if(t=a.sent,"error"!==t.status){a.next=17;break}throw new Error(t.message);case 17:i["a"].fire({icon:"success",title:"註冊成功"}),e.$router.push("/login"),a.next=44;break;case 21:if(a.prev=21,a.t0=a["catch"](0),r=a.t0.response.data,1!==r.message.length){a.next=37;break}if("Account is exists."!==r.message[0].error){a.next=31;break}return i["a"].fire({icon:"warning",title:"帳號已重覆註冊"}),e.isProcessing=!1,a.abrupt("return");case 31:if("Email is exists."!==r.message[0].error){a.next=35;break}return i["a"].fire({icon:"warning",title:"Email 已重覆註冊"}),e.isProcessing=!1,a.abrupt("return");case 35:a.next=44;break;case 37:if(2!==r.message.length){a.next=43;break}return i["a"].fire({icon:"warning",title:"帳號及 Email 皆已重覆註冊"}),e.isProcessing=!1,a.abrupt("return");case 43:i["a"].fire({icon:"warning",title:"無法註冊 - ".concat(a.t0.message)});case 44:case"end":return a.stop()}}),a,null,[[0,21]])})))()}}},l=c,u=(t("b00b"),t("2877")),m=Object(u["a"])(l,r,s,!1,null,"8bd7aabe",null);a["default"]=m.exports},b00b:function(e,a,t){"use strict";t("616d")}}]);
//# sourceMappingURL=chunk-577690ac.327a1736.js.map