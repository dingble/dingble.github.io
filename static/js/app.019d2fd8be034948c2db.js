webpackJsonp([0],{"+P4W":function(t,$){},"06JP":function(t,$){},"2iC6":function(t,$){},"31op":function(t,$){},"4DFY":function(t,$){},"4Ii9":function(t,$){},"7Otq":function(t,$,a){t.exports=a.p+"static/img/logo.86b9c8e.png"},"9j5s":function(t,$){},E4A8:function(t,$){},IERa:function(t,$,a){t.exports=a.p+"static/img/sample.f8e82d4.jpg"},NHnr:function(t,$,a){"use strict";Object.defineProperty($,"__esModule",{value:!0});var s=a("7+uW"),e={render:function(){var t=this.$createElement,$=this._self._c||t;return $("div",{attrs:{id:"app"}},[$("router-view")],1)},staticRenderFns:[]};var n=a("VU/8")({name:"App"},e,!1,function(t){a("+P4W")},null,null).exports,i=a("/ocq"),r={render:function(){var t=this.$createElement,$=this._self._c||t;return $("div",{staticClass:"searchbar"},[$("input",{attrs:{type:"text"}}),this._v(" "),$("font-awesome-icon",{staticClass:"search-icon",attrs:{icon:"search"}})],1)},staticRenderFns:[]};var _={name:"Nav",components:{"app-searchbar":a("VU/8")({name:"Searchbar",data:function(){return{msg:"Welcome to Your Vue.js App"}}},r,!1,function(t){a("2iC6")},"data-v-05c1dfc0",null).exports},data:function(){return{menuList:["공지사항","서비스 설명","FAQ","광고 문의"],subMenuList:["파워 체험단","당일마감 체험단","최신 체험단","제품배송 체험단","이벤트"]}}},c={render:function(){var t=this,$=t.$createElement,a=t._self._c||$;return a("div",{staticClass:"nav-wrapper"},[a("div",{staticClass:"nav"},[t._m(0),t._v(" "),a("div",{staticClass:"nav__searchbar"},[a("app-searchbar")],1),t._v(" "),a("ul",{staticClass:"nav__menu"},[t._l(t.menuList,function($){return a("li",{key:$,staticClass:"item"},[t._v("\n        "+t._s($)+"\n      ")])}),t._v(" "),a("li",{staticClass:"item sp"},[t._v("로그인")]),t._v(" "),a("span",[t._v("|")]),t._v(" "),a("li",{staticClass:"item sp"},[t._v("회원가입")])],2)]),t._v(" "),a("ul",{staticClass:"sub-nav"},t._l(t.subMenuList,function($){return a("li",{key:$,staticClass:"item"},[t._v("\n      "+t._s($)+"\n    ")])}),0)])},staticRenderFns:[function(){var t=this.$createElement,$=this._self._c||t;return $("div",{staticClass:"nav__brand"},[$("img",{staticClass:"nav_brand--logo",attrs:{src:a("7Otq")}})])}]};var v=a("VU/8")(_,c,!1,function(t){a("U5+X")},"data-v-62eafe5b",null).exports,p={render:function(){var t=this,$=t.$createElement,a=t._self._c||$;return a("div",{staticClass:"PremiumCard"},[t._m(0),t._v(" "),a("div",{staticClass:"card--text-wrapper"},[a("div",{staticClass:"PremiumCard__title"},[t._v("\n      "+t._s(t.categori)+" "+t._s(t.title)+"\n    ")]),t._v(" "),a("div",{staticClass:"PremiumCard__contents"},[a("span",{staticClass:"PremiumCard__contents__type"},[t._v(t._s(t.type))]),t._v("\n      모집인원 "),a("span",{staticClass:"PremiumCard__contents__status"},[t._v("10/40")]),t._v(" "),a("span",{staticClass:"PremiumCard__contents__d-day"},[t._v("3일 남음")])])])])},staticRenderFns:[function(){var t=this.$createElement,$=this._self._c||t;return $("div",{staticClass:"PremiumCard__cover--wrapper"},[$("img",{staticClass:"PremiumCard__cover",attrs:{src:a("IERa")}})])}]};var l=a("VU/8")({name:"PremiumCard",data:function(){return{categori:"[대전/유성]",title:"토미야 우동",type:"인스타그램",contents:"대전 둔산동 우동 맛집!",cover:"../assets/sample.jpg"}}},p,!1,function(t){a("4DFY")},"data-v-663b3ef6",null).exports,o={name:"SampleSlide",components:{"app-card":l}},d={render:function(){var t=this.$createElement,$=this._self._c||t;return $("div",{staticClass:"slide"},[$("div",{staticClass:"slide__cards"},[$("app-card"),this._v(" "),$("app-card"),this._v(" "),$("app-card"),this._v(" "),$("app-card")],1)])},staticRenderFns:[]};var u=a("VU/8")(o,d,!1,function(t){a("E4A8"),a("Y3/C")},"data-v-c9e5ab74",null).exports,m={name:"Header",data:function(){return{title:"파워 체험단",data:[u,u,u]}}},C={render:function(){var t=this.$createElement,$=this._self._c||t;return $("div",{staticClass:"header"},[$("div",{staticClass:"header__title"},[this._v(this._s(this.title)),$("font-awesome-icon",{staticClass:"question-icon",attrs:{icon:"question-circle"}})],1),this._v(" "),$("carousel",{attrs:{data:this.data,"indicator-type":"disc"}})],1)},staticRenderFns:[]};var f=a("VU/8")(m,C,!1,function(t){a("06JP")},"data-v-243fb421",null).exports,h={name:"SampleSlide2",components:{"app-card":l}},g={render:function(){var t=this.$createElement,$=this._self._c||t;return $("div",{staticClass:"slide"},[$("div",{staticClass:"slide__cards"},[$("app-card"),this._v(" "),$("app-card"),this._v(" "),$("app-card"),this._v(" "),$("app-card")],1)])},staticRenderFns:[]};var b=a("VU/8")(h,g,!1,function(t){a("WRA9"),a("4Ii9")},"data-v-685f54c0",null).exports,y={name:"Header2",data:function(){return{title:"당일마감 체험단",data:[b,b,b]}}},x={render:function(){var t=this.$createElement,$=this._self._c||t;return $("div",{staticClass:"header"},[$("div",{staticClass:"header__title"},[this._v(this._s(this.title))]),this._v(" "),$("carousel",{attrs:{data:this.data,"indicator-type":"disc"}})],1)},staticRenderFns:[]};var E=a("VU/8")(y,x,!1,function(t){a("i6ku")},"data-v-6caa8fda",null).exports,w={render:function(){var t=this,$=t.$createElement,a=t._self._c||$;return a("div",{staticClass:"card"},[t._m(0),t._v(" "),a("div",{staticClass:"card__cover--text-wrapper"},[a("div",{staticClass:"card__cover--title"},[t._v(t._s(t.title))]),t._v(" "),a("div",{staticClass:"card__cover--contents"},[t._v(t._s(t.contents))])]),t._v(" "),a("div",{staticClass:"card--text-wrapper"},[a("div",{staticClass:"card__title"},[t._v("\n      "+t._s(t.categori)+" "+t._s(t.title)+"\n    ")]),t._v(" "),a("div",{staticClass:"card__contents"},[a("span",{staticClass:"card__contents__type"},[t._v(t._s(t.type))]),t._v("\n      모집인원 "),a("span",{staticClass:"card__contents__status"},[t._v("10/40")]),t._v(" "),a("span",{staticClass:"card__contents__d-day"},[t._v("3일 남음")])])])])},staticRenderFns:[function(){var t=this.$createElement,$=this._self._c||t;return $("div",{staticClass:"card__cover--wrapper"},[$("img",{staticClass:"card__cover",attrs:{src:a("IERa")}})])}]};var A=a("VU/8")({name:"Card",data:function(){return{categori:"[대전/유성]",title:"토미야 우동",type:"인스타그램",contents:"대전 둔산동 우동 맛집!",cover:"../assets/sample.jpg"}}},w,!1,function(t){a("9j5s")},"data-v-2581c776",null).exports,V={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,$=t.$createElement,a=t._self._c||$;return a("div",{staticClass:"footer"},[a("div",{staticClass:"footer__contents"},[a("div",{staticClass:"footer__contents__brand"},[t._v("\n          Dingble "),a("span",{staticClass:"sub_brand"},[t._v("with Arounding")])]),t._v(" "),a("div",{staticClass:"footer__contents__menu"},[a("ul",{staticClass:"footer__contents__menu__links info"},[a("li",{staticClass:"item active"},[t._v("Info")]),t._v(" "),a("hr"),t._v(" "),a("li",{staticClass:"item"},[a("strong",[t._v("대표자:")]),t._v(" 허준혁")]),t._v(" "),a("li",{staticClass:"item"},[a("strong",[t._v("사업자등록번호:")]),t._v(" 880-88-00724")]),t._v(" "),a("li",{staticClass:"item"},[a("strong",[t._v("대표번호:")]),t._v(" 042-822-5252")]),t._v(" "),a("li",{staticClass:"item"},[a("strong",[t._v("주소:")]),t._v(" 대전 유성구 동서대로 125, S9동 203호")])]),t._v(" "),a("ul",{staticClass:"footer__contents__menu__links menu"},[a("li",{staticClass:"item active"},[t._v("Menu")]),t._v(" "),a("hr"),t._v(" "),a("a",{staticClass:"reset",attrs:{href:"#",target:"_self"}},[a("li",{staticClass:"item"},[t._v("카테고리1")])]),t._v(" "),a("a",{staticClass:"reset",attrs:{href:"#",target:"_self"}},[a("li",{staticClass:"item"},[t._v("카테고리2")])]),t._v(" "),a("a",{staticClass:"reset",attrs:{href:"#",target:"_self"}},[a("li",{staticClass:"item"},[t._v("카테고리3")])]),t._v(" "),a("a",{staticClass:"reset",attrs:{href:"#",target:"_self"}},[a("li",{staticClass:"item"},[t._v("이용약관")])]),t._v(" "),a("a",{staticClass:"reset",attrs:{href:"#",target:"_self"}},[a("li",{staticClass:"item"},[t._v("개인정보취급방침")])])]),t._v(" "),a("ul",{staticClass:"footer__contents__menu__links links"},[a("li",{staticClass:"item active"},[t._v("Links")]),t._v(" "),a("hr"),t._v(" "),a("a",{staticClass:"reset",attrs:{href:"#",target:"_blank"}},[a("li",{staticClass:"item"},[t._v("Arounding")])]),t._v(" "),a("a",{staticClass:"reset",attrs:{href:"#",target:"_blank"}},[a("li",{staticClass:"item"},[t._v("Facebook")])]),t._v(" "),a("a",{staticClass:"reset",attrs:{href:"#",target:"_blank"}},[a("li",{staticClass:"item"},[t._v("Blog")])])])])]),t._v(" "),a("div",{staticClass:"footer__copy"},[a("div",{staticClass:"footer__copy__txt"},[t._v("\n          Copyright © dingble All rights reserved.\n      ")]),t._v(" "),a("div",{staticClass:"footer__copy__logos"},[a("img",{attrs:{src:"https://cdn.imweb.me/upload/S2019062684b1df9fcd6e2/97dcf83825288.png",alt:"arounding"}})])])])}]};var F=a("VU/8")({name:"footer",data:function(){return{msg:"Welcome to Your Vue.js App"}}},V,!1,function(t){a("fAxm")},"data-v-7353bc50",null).exports,R={name:"Home",components:{"app-nav":v,"app-header":f,"app-header2":E,"app-card":A,"app-footer":F},data:function(){return{msg:"Welcome to Your Vue.js App"}}},U={render:function(){var t=this,$=t.$createElement,a=t._self._c||$;return a("div",{staticClass:"home"},[a("app-nav"),t._v(" "),a("app-header"),t._v(" "),a("app-header2"),t._v(" "),a("div",{staticClass:"item--wrapper"},[a("div",{staticClass:"item__title"},[t._v("제품 배송 체험단")]),t._v(" "),a("app-card"),t._v(" "),a("app-card"),t._v(" "),a("app-card"),t._v(" "),a("app-card"),t._v(" "),a("app-card"),t._v(" "),a("app-card"),t._v(" "),a("app-card"),t._v(" "),a("app-card")],1),t._v(" "),a("div",{staticClass:"item--wrapper"},[a("div",{staticClass:"item__title"},[t._v("주변 체험단")]),t._v(" "),a("app-card"),t._v(" "),a("app-card"),t._v(" "),a("app-card"),t._v(" "),a("app-card"),t._v(" "),a("app-card"),t._v(" "),a("app-card"),t._v(" "),a("app-card"),t._v(" "),a("app-card")],1),t._v(" "),a("div",{staticClass:"item--wrapper"},[a("div",{staticClass:"item__title"},[t._v("최신 체험단")]),t._v(" "),a("app-card"),t._v(" "),a("app-card"),t._v(" "),a("app-card"),t._v(" "),a("app-card"),t._v(" "),a("app-card"),t._v(" "),a("app-card"),t._v(" "),a("app-card"),t._v(" "),a("app-card"),t._v(" "),a("app-card"),t._v(" "),a("app-card"),t._v(" "),a("app-card"),t._v(" "),a("app-card"),t._v(" "),a("app-card"),t._v(" "),a("app-card"),t._v(" "),a("app-card"),t._v(" "),a("app-card")],1),t._v(" "),a("app-footer")],1)},staticRenderFns:[]};var S=a("VU/8")(R,U,!1,function(t){a("31op")},"data-v-471aeb29",null).exports,k={name:"Product",components:{"app-nav":v,"app-card":A,"app-footer":F},data:function(){return{msg:"Welcome to Your Vue.js App"}}},P={render:function(){var t=this,$=t.$createElement,a=t._self._c||$;return a("div",{staticClass:"home"},[a("app-nav"),t._v(" "),a("div",{staticClass:"product--wrapper"},[a("div",{staticClass:"product--main"},[a("div",{staticClass:"product--img"}),t._v(" "),a("div",{staticClass:"product--info"},[a("div",{staticClass:"product__tag"},[t._v("대전 유성구")]),t._v(" "),a("div",{staticClass:"product__title"},[t._v("\n            [대전/유성] 일당 감자탕\n          ")]),t._v(" "),a("div",{staticClass:"product__contents"},[t._v("\n            대전을 대표하는 최고의 감자탕 맛집!\n          ")]),t._v(" "),a("hr"),t._v(" "),t._m(0),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"product__button--group"},[a("div",{staticClass:"product__button pick"},[a("font-awesome-icon",{staticClass:"heart-icon",attrs:{icon:"heart"}})],1),t._v(" "),a("div",{staticClass:"product__button link"},[t._v("둘러보기")]),t._v(" "),a("div",{staticClass:"product__button submit"},[t._v("신청하기")])])])]),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"product-contents--wrapper"},[a("h3",[t._v("상세 정보")]),t._v(" "),t._m(1),t._v(" "),a("div",{staticClass:"product-contents__addon"},[a("h4",[t._v("당일마감 체험단")]),t._v(" "),a("app-card"),t._v(" "),a("app-card"),t._v(" "),a("app-card"),t._v(" "),a("app-card")],1)])]),t._v(" "),a("app-footer")],1)},staticRenderFns:[function(){var t=this,$=t.$createElement,a=t._self._c||$;return a("ul",{staticClass:"product__contents__detail"},[a("li",{staticClass:"item"},[a("span",{staticClass:"sub-title"},[t._v("모집 기한")]),t._v(" $$$ $$$ $$$$ $$$$ $$$$ $$$$$")]),t._v(" "),a("li",{staticClass:"item"},[a("span",{staticClass:"sub-title"},[t._v("체험 발표")]),t._v(" $$$ $$$ $$$$ $$$$ $$$$ $$$$$")]),t._v(" "),a("li",{staticClass:"item"},[a("span",{staticClass:"sub-title"},[t._v("리뷰 기간")]),t._v(" $$$ $$$ $$$$ $$$$ $$$$ $$$$$")]),t._v(" "),a("li",{staticClass:"item"},[a("span",{staticClass:"sub-title"},[t._v("모집 인원")]),t._v(" $$$ $$$ $$$$ $$$$ $$$$ $$$$$")]),t._v(" "),a("li",{staticClass:"item"},[a("span",{staticClass:"sub-title"},[t._v("신청 인원")]),t._v(" $$$ $$$ $$$$ $$$$ $$$$ $$$$$")]),t._v(" "),a("li",{staticClass:"item"},[a("span",{staticClass:"sub-title"},[t._v("관심")]),t._v(" $$$ $$$ $$$$ $$$$ $$$$ $$$$$")])])},function(){var t=this,$=t.$createElement,a=t._self._c||$;return a("ul",{staticClass:"product-contents__contents"},[a("li",{staticClass:"item"},[t._v("\n          제공내역\n          "),a("p",[t._v(" - $$$$$$$$$$$$ $$$$$$$ $$$$$$$$$$$$ $$$$$$$$. ")]),t._v(" "),a("p",[t._v(" - $$$$$$$$ $$$$$$$$$$$$ $$$ $$$$$ $$$$$$$$$ $$.")]),t._v(" "),a("p",[t._v(" - $$$$$ $$$$$$$ $$$$$$$$$ $$$$$$$$.")]),t._v(" "),a("p",[t._v(" - $$$$$$$$$$ $$$$$$$ $$$$$$$$$$$$$$$$$ $$$$$$$$ $$$$$.")]),t._v(" "),a("p",[t._v(" - $$$$$$$$$$$ $$$$$$$$$$$ $$$$$$$$$$$$$$$$ $$$$$$$$$$$$$$$$$.")])]),t._v(" "),a("li",{staticClass:"item"},[t._v("\n          체험방법\n          "),a("p",[t._v(" - $$$$$$$$$$$$ $$$$$$$ $$$$$$$$$$$$ $$$$$$$$. ")]),t._v(" "),a("p",[t._v(" - $$$$$$$$ $$$$$$$$$$$$ $$$ $$$$$ $$$$$$$$$ $$.")]),t._v(" "),a("p",[t._v(" - $$$$$ $$$$$$$ $$$$$$$$$ $$$$$$$$.")]),t._v(" "),a("p",[t._v(" - $$$$$$$$$$ $$$$$$$ $$$$$$$$$$$$$$$$$ $$$$$$$$ $$$$$.")]),t._v(" "),a("p",[t._v(" - $$$$$$$$$$$ $$$$$$$$$$$ $$$$$$$$$$$$$$$$ $$$$$$$$$$$$$$$$$.")])]),t._v(" "),a("li",{staticClass:"item"},[t._v("\n          기입사항\n          "),a("p",[t._v(" - $$$$$$$$$$$$ $$$$$$$ $$$$$$$$$$$$ $$$$$$$$. ")]),t._v(" "),a("p",[t._v(" - $$$$$$$$ $$$$$$$$$$$$ $$$ $$$$$ $$$$$$$$$ $$.")]),t._v(" "),a("p",[t._v(" - $$$$$ $$$$$$$ $$$$$$$$$ $$$$$$$$.")]),t._v(" "),a("p",[t._v(" - $$$$$$$$$$ $$$$$$$ $$$$$$$$$$$$$$$$$ $$$$$$$$ $$$$$.")]),t._v(" "),a("p",[t._v(" - $$$$$$$$$$$ $$$$$$$$$$$ $$$$$$$$$$$$$$$$ $$$$$$$$$$$$$$$$$.")])]),t._v(" "),a("li",{staticClass:"item"},[t._v("\n          유의사항\n          "),a("p",[t._v(" - $$$$$$$$$$$$ $$$$$$$ $$$$$$$$$$$$ $$$$$$$$. ")]),t._v(" "),a("p",[t._v(" - $$$$$$$$ $$$$$$$$$$$$ $$$ $$$$$ $$$$$$$$$ $$.")]),t._v(" "),a("p",[t._v(" - $$$$$ $$$$$$$ $$$$$$$$$ $$$$$$$$.")]),t._v(" "),a("p",[t._v(" - $$$$$$$$$$ $$$$$$$ $$$$$$$$$$$$$$$$$ $$$$$$$$ $$$$$.")]),t._v(" "),a("p",[t._v(" - $$$$$$$$$$$ $$$$$$$$$$$ $$$$$$$$$$$$$$$$ $$$$$$$$$$$$$$$$$.")])]),t._v(" "),a("li",{staticClass:"item"},[t._v("\n          주의사항\n          "),a("p",[t._v(" - $$$$$$$$$$$$ $$$$$$$ $$$$$$$$$$$$ $$$$$$$$. ")]),t._v(" "),a("p",[t._v(" - $$$$$$$$ $$$$$$$$$$$$ $$$ $$$$$ $$$$$$$$$ $$.")]),t._v(" "),a("p",[t._v(" - $$$$$ $$$$$$$ $$$$$$$$$ $$$$$$$$.")]),t._v(" "),a("p",[t._v(" - $$$$$$$$$$ $$$$$$$ $$$$$$$$$$$$$$$$$ $$$$$$$$ $$$$$.")]),t._v(" "),a("p",[t._v(" - $$$$$$$$$$$ $$$$$$$$$$$ $$$$$$$$$$$$$$$$ $$$$$$$$$$$$$$$$$.")])])])}]};var j=a("VU/8")(k,P,!1,function(t){a("Nw7+")},"data-v-5632dca8",null).exports,W={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,$=t.$createElement,s=t._self._c||$;return s("div",{staticClass:"signin"},[s("img",{staticClass:"signin__brand",attrs:{src:a("7Otq")}}),t._v(" "),s("form",{staticClass:"signin__input--wrapper"},[s("input",{attrs:{type:"text",placeholder:"아이디 (이메일)"}}),t._v(" "),s("input",{attrs:{type:"password",placeholder:"비밀번호"}}),t._v(" "),s("label",{attrs:{for:"auto-login"}},[s("input",{attrs:{id:"auto-login",type:"checkbox"}}),t._v(" "),s("span",[t._v("자동 로그인")])]),t._v(" "),s("span",{attrs:{id:"find-info"}},[t._v("아이디(이메일)/비밀번호 찾기")]),t._v(" "),s("input",{attrs:{type:"submit",value:"로그인"}}),t._v(" "),s("hr"),t._v(" "),s("input",{attrs:{type:"button",value:"회원가입"}}),t._v(" "),s("p",{staticClass:"copy"},[t._v("Copyright © dingble All rights reserved.")])])])}]};var Y=a("VU/8")({name:"Home",data:function(){return{msg:"Welcome to Your Vue.js App"}}},W,!1,function(t){a("cywN")},"data-v-f400bc52",null).exports,O={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,$=t.$createElement,s=t._self._c||$;return s("div",{staticClass:"signup"},[s("img",{staticClass:"signup__brand",attrs:{src:a("7Otq")}}),t._v(" "),s("form",{staticClass:"signup__input--wrapper"},[s("span",{staticClass:"signup__title"},[t._v("딩블 회원 가입")]),t._v(" "),s("input",{attrs:{type:"text",placeholder:"아이디 (이메일)"}}),t._v(" "),s("input",{attrs:{type:"password",placeholder:"비밀번호"}}),t._v(" "),s("input",{attrs:{type:"password",placeholder:"비밀번호 확인"}}),t._v(" "),s("hr"),t._v(" "),s("span",{staticClass:"signup__title"},[t._v("기본정보")]),t._v(" "),s("input",{attrs:{type:"text",placeholder:"이름"}}),t._v(" "),s("input",{attrs:{type:"date",placeholder:"생년월일"}}),t._v(" "),s("input",{attrs:{type:"email",placeholder:"이메일"}}),t._v(" "),s("input",{attrs:{type:"text",placeholder:"010-1111-2222"}}),t._v(" "),s("input",{attrs:{type:"text",placeholder:"블로그 주소 (선택)"}}),t._v(" "),s("hr"),t._v(" "),s("span",{staticClass:"signup__title"},[t._v("이용약관")]),t._v(" "),s("textarea",{staticClass:"signup__agreetxt"},[t._v("제 1 장 환영합니다!\n제 1 조 (목적)\n주식회사 카카오(이하 ‘회사’)가 제공하는 서비스를 이용해 주셔서 감사합니다. 회사는 여러분이 다양한 인터넷과 모바일 서비스를 좀 더 편리하게 이용할 수 있도록 회사 또는 관계사의 개별 서비스에 모두 접속 가능한 통합로그인계정 체계를 만들고 그에 적용되는 '카카오계정 약관(이하 '본 약관')을 마련하였습니다. 본 약관은 여러분이 카카오계정 서비스를 이용하는 데 필요한 권리, 의무 및 책임사항, 이용조건 및 절차 등 기본적인 사항을 규정하고 있으므로 조금만 시간을 내서 주의 깊게 읽어주시기 바랍니다.\n\n제 2 조 (약관의 효력 및 변경)\n①본 약관의 내용은 카카오계정 웹사이트 또는 개별 서비스의 화면에 게시하거나 기타의 방법으로 공지하고, 본 약관에 동의한 여러분 모두에게 그 효력이 발생합니다.\n②회사는 필요한 경우 관련법령을 위배하지 않는 범위 내에서 본 약관을 변경할 수 있습니다. 본 약관이 변경되는 경우 회사는 변경사항을 시행일자 15일 전부터 여러분에게 서비스 공지사항에서 공지 또는 통지하는 것을 원칙으로 하며, 피치 못하게 여러분에게 불리한 내용으로 변경할 경우에는 그 시행일자 30일 전부터 카카오계정에 등록된 이메일 주소로 이메일(이메일주소가 없는 경우 서비스 내 전자쪽지 발송, 서비스 내 알림 메시지를 띄우는 등의 별도의 전자적 수단) 발송 또는 여러분이 등록한 휴대폰번호로 카카오톡 메시지 또는 문자메시지 발송하는 방법 등으로 개별적으로 알려 드리겠습니다.\n③회사가 전항에 따라 공지 또는 통지를 하면서 공지 또는 통지일로부터 개정약관 시행일 7일 후까지 거부의사를 표시하지 아니하면 승인한 것으로 본다는 뜻을 명확하게 고지하였음에도 여러분의 의사표시가 없는 경우에는 변경된 약관을 승인한 것으로 봅니다. 여러분이 개정약관에 동의하지 않을 경우 여러분은 이용계약을 해지할 수 있습니다.\n제 3 조 (약관 외 준칙)\n본 약관에 규정되지 않은 사항에 대해서는 관련법령 또는 회사가 정한 개별 서비스의 이용약관, 운영정책 및 규칙 등(이하 ‘세부지침’)의 규정에 따릅니다.\n\n제 4 조 (용어의 정의)\n①본 약관에서 사용하는 용어의 정의는 다음과 같습니다.\n1.카카오계정: 회사 또는 관계사가 제공하는 개별 서비스를 하나의 로그인계정과 비밀번호로 회원 인증, 회원정보 변경, 회원 가입 및 탈퇴 등을 관리할 수 있도록 회사가 정한 로그인계정 정책을 말합니다.\n2.회원: 카카오계정이 적용된 개별 서비스 또는 카카오계정 웹사이트에서 본 약관에 동의하고, 카카오계정을 이용하는 자를 말합니다.\n3.관계사: 회사와 제휴 관계를 맺고 카카오계정을 공동 제공하기로 합의한 법인을 말합니다. 개별 관계사는 카카오 기업사이트에서 확인할 수 있고 추후 추가/변동될 수 있으며 관계사가 추가/변동될 때에는 카카오 기업사이트에 변경 사항을 게시합니다.\n4.개별 서비스: 카카오계정을 이용하여 접속 가능한 회사 또는 관계사가 제공하는 서비스를 말합니다. 개별 서비스는 추후 추가/변동될 수 있으며 서비스가 추가/변동될 때에는 카카오 기업사이트에 변경 사항을 게시합니다.\n5.카카오계정 웹사이트: 회원이 온라인을 통해 카카오계정 정보를 조회 및 수정할 수 있는 인터넷 사이트를 말합니다.\n6.카카오계정 정보 : 카카오계정을 이용하기 위해 회사가 정한 필수 내지 선택 입력 정보로서 카카오계정 웹사이트 또는 개별 서비스 내 카카오계정 설정 화면을 통해 정보 확인, 변경 처리 등을 관리할 수 있는 회원정보 항목을 말합니다.\n7.카카오콘 : 회사가 회원의 개별 서비스 이용 과정에서 지급하는 혜택으로서 회원은 회사가 정한 방법에 따라서 카카오콘을 사용할 수 있습니다.\n제 2 장 카카오계정 이용계약\n제 5 조 (계약의 성립)\n①카카오계정 이용 신청은 개별 서비스 또는 카카오계정 웹사이트 회원가입 화면에서 여러분이 카카오계정 정보에 일정 정보를 입력하는 방식으로 이루어집니다.\n②카카오계정 이용계약은 여러분이 본 약관의 내용에 동의한 후 본 조 제1항에서 정한 이용신청을 하면 회사가 입력된 일정 정보를 인증한 후 가입을 승낙함으로써 체결됩니다.\n제 6 조 (카카오계정 이용의 제한)\n①제5조에 따른 가입 신청자에게 회사는 원칙적으로 카카오계정의 이용을 승낙합니다. 다만, 회사는 아래 각 호의 경우에는 그 사유가 해소될 때까지 승낙을 유보하거나 승낙하지 않을 수 있습니다. 특히, 여러분이 만 14세 미만인 경우에는 부모님 등 법정대리인의 동의가 있는 경우에만 카카오계정을 생성할 수 있습니다.\n1.회사가 본 약관 또는 세부지침에 의해 여러분의 카카오계정을 삭제하였던 경우\n2.여러분이 다른 사람의 명의나 이메일 주소 등 개인정보를 이용하여 카카오계정을 생성하려 한 경우\n3.카카오계정 생성 시 필요한 정보를 입력하지 않거나 허위의 정보를 입력한 경우\n4.제공 서비스 설비 용량에 현실적인 여유가 없는 경우\n5.서비스 제공을 위한 기술적인 부분에 문제가 있다고 판단되는 경우\n6.기타 회사가 재정적, 기술적으로 필요하다고 인정하는 경우\n7.회사로부터 회원자격정지 조치 등을 받은 회원이 그 조치기간에 이용계약을 임의로 해지하고 재이용을 신청하는 경우\n8.기타 관련법령에 위배되거나 세부지침 등 회사가 정한 기준에 반하는 경우\n②만약, 여러분이 위 조건에 위반하여 카카오계정을 생성한 것으로 판명된 때에는 회사는 즉시 여러분의 카카오계정 이용을 정지시키거나 카카오계정을 삭제하는 등 적절한 제한을 할 수 있습니다.\n제 3 장 카카오계정 이용\n제 7 조 (카카오계정 제공)\n①회사가 개별 서비스와 연동하여 카카오계정에서 제공하는 서비스(이하 “카카오계정 서비스” 또는 “서비스”) 내용은 아래와 같습니다.\n1.통합로그인 : 카카오계정이 적용된 개별 서비스에서 하나의 카카오계정과 비밀번호로 로그인할 수 있는 통합 회원 인증 서비스를 이용할 수 있습니다.\n2.SSO(Single Sign On): 웹브라우저나 특정 모바일 기기에서 카카오계정 1회 로그인으로 여러분이 이용 중인 개별 서비스간 추가 로그인 없이 자동 접속 서비스를 이용할 수 있습니다.\n3.카카오계정 정보 통합 관리 : 개별 서비스 이용을 위해 카카오계정 정보를 통합 관리합니다. 또한, 여러분이 이용하고자 하는 개별 서비스의 유형에 따라 전문기관을 통한 실명확인 및 본인인증을 요청할 수 있고, 이를 카카오계정 정보로 저장합니다.\n4.기타 회사가 제공하는 서비스\n②회사는 더 나은 카카오계정 서비스의 제공을 위하여 여러분에게 서비스의 이용과 관련된 각종 고지, 관리 메시지 및 기타 광고를 비롯한 다양한 정보를 서비스화면 내에 표시하거나 여러분의 이메일로 전송할 수 있습니다. 광고성 정보 전송의 경우에는 사전에 수신에 동의한 경우에만 전송합니다.\n제 8 조 (카카오계정 서비스의 변경 및 종료)\n①회사는 카카오계정 서비스를 365일, 24시간 쉬지 않고 제공하기 위하여 최선의 노력을 다합니다. 다만, 아래 각 호의 경우 카카오계정 서비스의 전부 또는 일부를 제한하거나 중지할 수 있습니다.\n1.카카오계정 서비스용 설비의 유지·보수 등을 위한 정기 또는 임시 점검의 경우\n2.정전, 제반 설비의 장애 또는 이용량의 폭주 등으로 정상적인 카카오계정 이용에 지장이 있는 경우\n3.관계사와의 계약 종료, 정부의 명령/규제 등 회사의 제반 사정으로 카카오계정 서비스를 유지할 수 없는 경우\n4.기타 천재지변, 국가비상사태 등 불가항력적 사유가 있는 경우\n②전항에 의한 카카오계정 서비스 중단의 경우에는 미리 제12조에서 정한 방법으로 여러분에게 통지 내지 공지하겠습니다. 다만, 회사로서도 예측할 수 없거나 통제할 수 없는 사유(회사의 과실이 없는 디스크 내지 서버 장애, 시스템 다운 등)로 인해 사전 통지 내지 공지가 불가능한 경우에는 그러하지 아니합니다. 이러한 경우에도 회사가 상황을 파악하는 즉시 최대한 빠른 시일 내에 서비스를 복구하도록 노력하겠습니다.\n③여러분에게 중대한 영향을 미치는 서비스의 변경 사항이나 종료는 카카오계정에 등록된 이메일 주소로 이메일(이메일주소가 없는 경우 서비스 내 전자쪽지 발송, 서비스 내 알림 메시지를 띄우는 등의 별도의 전자적 수단) 발송 또는 여러분이 등록한 휴대폰번호로 카카오톡 메시지 또는 문자메시지 발송하는 방법 등으로 개별적으로 알려 드리겠습니다.\n제 9 조 (카카오계정 관리)\n①카카오계정은 여러분 본인만 이용할 수 있으며, 다른 사람이 여러분의 카카오계정을 이용하도록 허락할 수 없습니다. 그리고 여러분은 다른 사람이 여러분의 카카오계정을 무단으로 사용할 수 없도록 직접 비밀번호를 관리하여야 합니다. 회사는 다른 사람이 여러분의 카카오계정을 무단으로 사용하는 것을 막기 위하여 비밀번호 입력 및 추가적인 본인 확인 절차를 거치도록 할 수 있습니다. 만약 무단 사용이 발견된다면, 고객센터를 통하여 회사에게 알려주시기 바라며, 회사는 무단 사용을 막기 위한 방법을 여러분에게 안내하도록 하겠습니다.\n②여러분은 카카오계정 웹사이트 또는 개별 서비스 내 카카오계정 설정 화면을 통하여 여러분의 카카오계정 정보를 열람하고 수정할 수 있습니다. 다만, 카카오계정 서비스의 제공 및 관리를 위해 필요한 카카오계정, 전화번호, 단말기 식별번호, 기타 본인확인정보 등 일부 정보는 수정이 불가능할 수 있으며, 수정하는 경우에는 추가적인 본인 확인 절차가 필요할 수 있습니다. 여러분이 이용 신청 시 알려주신 내용에 변동이 있을 때, 직접 수정하시거나 이메일, 고객센터를 통하여 회사에 알려 주시기 바랍니다.\n③여러분이 카카오계정 정보를 적시에 수정하지 않아 발생하는 문제에 대하여 회사는 책임을 부담하지 아니합니다.\n제 10 조 (카카오콘)\n①여러분이 카카오계정을 통해 개별 서비스를 이용하면서 회사가 제시한 조건을 충족하는 경우 회사는 정해진 정책에 따라 여러분의 카카오계정에 카카오콘을 부여할 수 있습니다.\n②여러분은 회사가 정하는 절차와 조건에 따라 카카오콘으로 회사가 제공하는 서비스 및 혜택 등을 이용할 수 있습니다. 단, 회사 이외의 제휴사 기타 제3자가 제공하는 서비스의 경우 그에 대한 안전성 및 적법성 등에 대해 보증하거나 책임지지 않으며, 관련된 일체의 위험의 부담에 대해 여러분이 해당 서비스를 사용하기 전에 동의함을 원칙으로 합니다.\n③카카오콘으로 이용할 수 있는 회사의 서비스 및 혜택 등은 회사의 정책과 제3자와의 제휴 관계에 따라 수시로 변경될 수 있으며, 회사는 카카오콘의 영속적인 사용성을 보장하지 않습니다.\n④카카오콘은 재산적 가치가 없으며, 회사는 카카오콘에 대해 현금으로의 환전 및 환불 등을 제공하지 않으며, 여러분도 카카오콘의 현금 환전 또는 유상거래 등의 행위를 할 수 없습니다.\n⑤회사는 개별 서비스 운영상의 목적과 카카오콘의 효율적 이용 지원을 위해 필요한 경우 부득이하게 정책에 정해진 바에 따라 카카오콘의 일부 또는 전부를 조정하거나 이용 제한 또는 소멸 등의 조치를 취할 수 있습니다.\n⑥본조에서 정하고 있는 내용 외에 카카오콘의 부여 및 이용에 관한 상세한 사항은 회사가 별도로 정한 운영정책을 따르며, 회사는 고객센터 도움말 페이지 등을 통하여 여러분에게 안내합니다.\n제 4 장 계약당사자의 의무\n제 11 조 (회원의 의무)\n①여러분이 카카오계정 서비스를 이용할 때 아래 각 호의 행위는 하여서는 안 됩니다.\n1.이용 신청 또는 변경 시 허위 사실을 기재하거나, 다른 회원의 카카오계정 및 비밀번호를 도용, 부정하게 사용하거나, 다른 사람의 명의를 사용하거나 명의자의 허락 없이 문자메시지(SMS) 인증 등을 수행하는 행위\n2.타인의 명예를 손상시키거나 불이익을 주는 행위\n3.게시판 등에 음란물을 게재하거나 음란사이트를 연결(링크)하는 행위\n4.회사 또는 제3자의 저작권 등 기타 권리를 침해하는 행위\n5.공공질서 및 미풍양속에 위반되는 내용의 정보, 문장, 도형, 음성 등을 타인에게 유포하는 행위\n6.카카오계정 서비스와 관련된 설비의 오동작이나 정보 등의 파괴 및 혼란을 유발시키는 컴퓨터 바이러스 감염 자료를 등록 또는 유포하는 행위\n7.카카오계정 서비스의 운영을 고의로 방해하거나 안정적 운영을 방해할 수 있는 정보 및 수신자의 명시적인 수신거부의사에 반하여 광고성 정보 또는 스팸메일(Spam Mail)을 전송하는 행위\n8.회사의 동의 없이 서비스 또는 이에 포함된 소프트웨어의 일부를 복사, 수정, 배포, 판매, 양도, 대여, 담보제공하거나 타인에게 그 이용을 허락하는 행위와 소프트웨어를 역설계하거나 소스 코드의 추출을 시도하는 등 서비스를 복제, 분해 또는 모방하거나 기타 변형하는 행위\n9.타인으로 가장하는 행위 및 타인과의 관계를 허위로 명시하는 행위\n10.다른 회원의 개인정보를 수집, 저장, 공개하는 행위\n11.자기 또는 타인에게 재산상의 이익을 주거나 타인에게 손해를 가할 목적으로 허위의 정보를 유통시키는 행위\n12.윤락행위를 알선하거나 음행을 매개하는 내용의 정보를 유통시키는 행위\n13.수치심이나 혐오감 또는 공포심을 일으키는 말이나 음향, 글이나 화상 또는 영상을 계속하여 상대방에게 도달하게 하여 상대방의 일상적 생활을 방해하는 행위\n14.관련 법령에 의하여 그 전송 또는 게시가 금지되는 정보(컴퓨터 프로그램 포함)의 전송 또는 게시 행위\n15.회사 또는 관계사의 직원이나 운영자를 가장하거나 사칭하여 또는 타인의 명의를 도용하여 글을 게시하거나 E-mail, 카카오톡 메시지 등을 발송하는 행위\n16.컴퓨터 소프트웨어, 하드웨어, 전기통신 장비의 정상적인 가동을 방해, 파괴할 목적으로 고안된 소프트웨어 바이러스, 기타 다른 컴퓨터 코드, 파일, 프로그램을 포함하고 있는 자료를 게시하거나 E-mail, 카카오톡 메시지 등으로 발송하는 행위\n17.기타 불법한 행위\n②여러분은 서비스의 이용권한, 기타 이용계약상 지위를 타인에게 양도·증여할 수 없으며, 담보로 제공할 수 없습니다.\n③혹시라도 여러분이 관련 법령, 회사의 모든 약관 또는 정책을 준수하지 않는다면, 회사는 여러분의 위반행위 등을 조사할 수 있고, 여러분의 서비스 이용을 잠시 또는 계속하여 중단하거나, 재가입에 제한을 둘 수도 있습니다.\n④본 조에서 정한 사항 및 그 밖에 카카오계정 서비스의 이용에 관한 자세한 사항은 카카오 운영정책 등을 참고해 주시기 바랍니다.\n제 12 조 (개인정보의 보호)\n여러분의 개인정보의 안전한 처리는 회사에게 있어 가장 중요한 일 중 하나입니다. 여러분의 개인정보는 서비스의 원활한 제공을 위하여 여러분이 동의한 목적과 범위 내에서만 이용됩니다. 법령에 의하거나 여러분이 별도로 동의하지 아니하는 한 회사가 여러분의 개인정보를 제3자에게 제공하는 일은 결코 없으므로, 안심하셔도 좋습니다. 회사가 여러분의 개인정보를 안전하게 처리하기 위하여 기울이는 노력이나 기타 자세한 사항은 카카오 개인정보처리방침을 참고하여 주십시오.\n\n제 13 조 (회원에 대한 통지 및 공지)\n회사는 여러분과의 의견 교환을 소중하게 생각합니다. 여러분은 언제든지 고객센터에 방문하여 의견을 개진할 수 있습니다. 서비스 이용자 전체에 대한 공지는 칠(7)일 이상 서비스 공지사항란에 게시함으로써 효력이 발생합니다. 여러분에게 중대한 영향을 미치는 사항의 경우에는 카카오계정에 등록된 이메일 주소로 이메일(이메일주소가 없는 경우 서비스 내 전자쪽지 발송, 서비스 내 알림 메시지를 띄우는 등의 별도의 전자적 수단) 발송 또는 여러분이 등록한 휴대폰번호로 카카오톡 메시지 또는 문자메시지 발송하는 방법 등으로 개별적으로 알려 드리겠습니다.\n\n제 5 장 이용계약 해지 등\n제 14 조 (이용계약 해지)\n①여러분이 카카오계정 이용을 더 이상 원치 않는 때에는 언제든지 서비스 내 제공되는 메뉴를 이용하여 이용계약의 해지 신청을 할 수 있으며, 회사는 법령이 정하는 바에 따라 신속히 처리하겠습니다.\n②회사는 법령에서 정하는 기간 동안 여러분이 카카오계정 서비스를 이용하기 위해 카카오계정 로그인 혹은 접속한 기록이 없는 경우 여러분이 등록한 이메일주소, 휴대폰번호로 이메일, 문자메시지 또는 카카오톡 메시지를 보내는 등 기타 유효한 수단으로 통지 후 여러분의 카카오계정 정보를 파기하거나 분리 보관할 수 있으며, 이로 인해 카카오계정 서비스 이용을 위한 필수적인 정보가 부족할 경우 이용계약이 해지될 수도 있습니다. 이와 관련된 보다 자세한 사항은 카카오 운영정책의 카카오 서비스 휴면 정책 부분을 꼭 확인하시기 바랍니다.\n③이용계약이 해지되면 법령 및 개인정보 처리방침에 따라 여러분의 정보를 보유하는 경우를 제외하고는 여러분의 카카오계정 정보 및 카카오계정으로 이용하였던 개별 서비스 데이터는 삭제됩니다. 다만, 여러분이 개별 서비스 내에서 작성한 게시물 등 모든 데이터의 삭제와 관련한 사항은 개별 서비스의 약관에 따릅니다.\n④이용계약이 해지된 경우라도 여러분은 다시 회사에 대하여 이용계약의 체결을 신청할 수 있습니다.\n제 15 조 (손해배상)\n①회사는 법령상 허용되는 한도 내에서 서비스와 관련하여 본 약관에 명시되지 않은 어떠한 구체적인 사항에 대한 약정이나 보증을 하지 않습니다. 또한, 회사는 CP(Contents Provider)가 제공하거나 회원이 작성하는 등의 방법으로 서비스에 게재된 정보, 자료, 사실의 신뢰도, 정확성 등에 대해서는 보증을 하지 않으며, 회사의 과실 없이 발생된 여러분의 손해에 대하여는 책임을 부담하지 아니합니다.\n②회사는 회사의 과실로 인하여 여러분이 손해를 입게 될 경우 본 약관 및 관련 법령에 따라 여러분의 손해를 배상하겠습니다. 다만 회사는 회사의 과실 없이 발생된 아래와 같은 손해에 대해서는 책임을 부담하지 않습니다. 또한 회사는 법률상 허용되는 한도 내에서 간접 손해, 특별 손해, 결과적 손해, 징계적 손해, 및 징벌적 손해에 대한 책임을 부담하지 않습니다.\n1.천재지변 또는 이에 준하는 불가항력의 상태에서 발생한 손해\n2.여러분의 귀책사유로 서비스 이용에 장애가 발생한 경우\n3.서비스에 접속 또는 이용과정에서 발생하는 개인적인 손해\n4.제3자가 불법적으로 회사의 서버에 접속하거나 서버를 이용함으로써 발생하는 손해\n5.제3자가 회사 서버에 대한 전송 또는 회사 서버로부터의 전송을 방해함으로써 발생하는 손해\n6.제3자가 악성 프로그램을 전송 또는 유포함으로써 발생하는 손해\n7.전송된 데이터의 생략, 누락, 파괴 등으로 발생한 손해, 명예훼손 등 제3자가 서비스를 이용하는 과정에서 발생된 손해\n8.기타 회사의 고의 또는 과실이 없는 사유로 인해 발생한 손해\n제 16 조 (분쟁의 해결)\n본 약관 또는 서비스는 대한민국법령에 의하여 규정되고 이행됩니다. 서비스 이용과 관련하여 회사와 여러분 간에 분쟁이 발생하면 이의 해결을 위해 성실히 협의할 것입니다. 그럼에도 불구하고 해결되지 않으면 민사소송법상의 관할법원에 소를 제기할 수 있습니다.\n\n공고일자 : 2019년 9월 6일\n시행일자 : 2019년 9월 24일\n      ")]),t._v(" "),s("label",{attrs:{for:"agreement"}},[s("input",{attrs:{id:"agreement",type:"checkbox"}}),t._v(" "),s("span",[t._v("동의합니다.")])]),t._v(" "),s("input",{attrs:{type:"submit",value:"체험단 회원가입 완료하기"}}),t._v(" "),s("input",{staticClass:"next",attrs:{type:"button",value:"광고주 회원가입 이어하기"}}),t._v(" "),s("hr"),t._v(" "),s("input",{attrs:{type:"button",value:"뒤로가기"}}),t._v(" "),s("p",{staticClass:"copy"},[t._v("Copyright © dingble All rights reserved.")])])])}]};var M=a("VU/8")({name:"SignUp",data:function(){return{msg:"Welcome to Your Vue.js App"}}},O,!1,function(t){a("egtE")},"data-v-36530f53",null).exports,N={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,$=t.$createElement,s=t._self._c||$;return s("div",{staticClass:"signup"},[s("img",{staticClass:"signup__brand",attrs:{src:a("7Otq")}}),t._v(" "),s("form",{staticClass:"signup__input--wrapper"},[s("span",{staticClass:"signup__title"},[t._v("딩블 광고주 회원 가입")]),t._v(" "),s("input",{attrs:{type:"text",placeholder:"회사/상호명"}}),t._v(" "),s("input",{attrs:{type:"password",placeholder:"대표자"}}),t._v(" "),s("input",{attrs:{type:"password",placeholder:"사업자 번호"}}),t._v(" "),s("hr"),t._v(" "),s("span",{staticClass:"signup__title"},[t._v("담당자 정보")]),t._v(" "),s("input",{attrs:{type:"text",placeholder:"담당자"}}),t._v(" "),s("input",{attrs:{type:"email",placeholder:"직책"}}),t._v(" "),s("input",{attrs:{type:"text",placeholder:"010-1111-2222"}}),t._v(" "),s("hr"),t._v(" "),s("input",{staticClass:"next",attrs:{type:"submit",value:"광고주 회원가입 완료하기"}}),t._v(" "),s("hr"),t._v(" "),s("input",{attrs:{type:"button",value:"뒤로가기"}}),t._v(" "),s("p",{staticClass:"copy"},[t._v("Copyright © dingble All rights reserved.")])])])}]};var q=a("VU/8")({name:"SignUpAdv",data:function(){return{msg:"Welcome to Your Vue.js App"}}},N,!1,function(t){a("shzr")},"data-v-74f5b74b",null).exports,I={render:function(){var t=this,$=t.$createElement,a=t._self._c||$;return a("div",{staticClass:"card"},[t._m(0),t._v(" "),a("div",{staticClass:"card--text-wrapper"},[a("div",{staticClass:"card__title"},[t._v("\n      "+t._s(t.categori)+" "+t._s(t.title)+"\n    ")]),t._v(" "),a("div",{staticClass:"card__contents"},[a("span",{staticClass:"card__contents__type"},[t._v(t._s(t.type))]),t._v(" "),a("span",{staticClass:"card__contents__d-day"},[t._v("3일 남음")])])])])},staticRenderFns:[function(){var t=this.$createElement,$=this._self._c||t;return $("div",{staticClass:"card__cover--wrapper"},[$("img",{staticClass:"card__cover",attrs:{src:a("IERa")}})])}]};var H={name:"Mypage",components:{"app-nav":v,"app-card":a("VU/8")({name:"MiniCard",data:function(){return{categori:"[대전/유성]",title:"토미야 우동",type:"인스타그램",contents:"대전 둔산동 우동 맛집!",cover:"../assets/sample.jpg"}}},I,!1,function(t){a("aevN")},"data-v-7be3987d",null).exports,"app-footer":F},data:function(){return{msg:"Welcome to Your Vue.js App"}}},L={render:function(){var t=this,$=t.$createElement,a=t._self._c||$;return a("div",{staticClass:"home"},[a("app-nav"),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"mypage--wrapper"},[a("span",{staticClass:"mypage__title"},[a("font-awesome-icon",{staticClass:"user-icon",attrs:{icon:"user"}}),t._v(" 마이페이지")],1),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("div",{staticClass:"mypage__recommand-item"},[a("span",{staticClass:"section__title"},[t._v("파워 체험단")]),t._v(" "),a("hr"),t._v(" "),a("app-card"),t._v(" "),a("app-card"),t._v(" "),a("app-card"),t._v(" "),a("app-card"),t._v(" "),a("app-card"),t._v(" "),a("app-card")],1)]),t._v(" "),a("app-footer")],1)},staticRenderFns:[function(){var t=this,$=t.$createElement,a=t._self._c||$;return a("ul",{staticClass:"side-menu"},[a("span",{staticClass:"side-menu__title"},[t._v("체험단 관리")]),t._v(" "),a("li",{staticClass:"item"},[t._v("체험중인 체험단")]),t._v(" "),a("li",{staticClass:"item"},[t._v("체험한 체험한")]),t._v(" "),a("li",{staticClass:"item"},[t._v("관심 체험단")]),t._v(" "),a("li",{staticClass:"item"},[t._v("패널티")]),t._v(" "),a("hr"),t._v(" "),a("span",{staticClass:"side-menu__title"},[t._v("계정 관리")]),t._v(" "),a("li",{staticClass:"item"},[t._v("블로그 주소 변경")]),t._v(" "),a("li",{staticClass:"item"},[t._v("비밀번호 변경")])])},function(){var t=this.$createElement,$=this._self._c||t;return $("div",{staticClass:"mypage__section"},[$("span",{staticClass:"section__title"},[this._v("참여중인 체험단")]),this._v(" "),$("hr"),this._v(" "),$("div",{staticClass:"section__no-contents"},[this._v("\n        진행중인 체험단이 없어요 :(\n      ")])])},function(){var t=this.$createElement,$=this._self._c||t;return $("div",{staticClass:"mypage__section"},[$("span",{staticClass:"section__title"},[this._v("참여한 체험단")]),this._v(" "),$("hr"),this._v(" "),$("div",{staticClass:"section__no-contents"},[this._v("\n        참여한 체험단이 없어요 :(\n      ")])])}]};var J=a("VU/8")(H,L,!1,function(t){a("O5/v")},"data-v-de2f4b70",null).exports;s.a.use(i.a);var D=new i.a({mode:"history",routes:[{path:"/product",name:"Product",component:j},{path:"/signin",name:"SignIn",component:Y},{path:"/signup",name:"SignUp",component:M},{path:"/signup/adv",name:"SignUpAdv",component:q},{path:"/mypage",name:"Mypage",component:J},{path:"/",name:"Home",component:S}]}),z=a("C/JF"),X=a("fhbW"),B=a("1e6/"),Q=a("ACsF"),T=a.n(Q);z.c.add(X.c),z.c.add(X.b),z.c.add(X.a),z.c.add(X.d),s.a.component("font-awesome-icon",B.a),s.a.component("carousel",T.a),s.a.config.productionTip=!1,new s.a({el:"#app",router:D,components:{App:n},template:"<App/>"})},"Nw7+":function(t,$){},"O5/v":function(t,$){},"U5+X":function(t,$){},WRA9:function(t,$){},"Y3/C":function(t,$){},aevN:function(t,$){},cywN:function(t,$){},egtE:function(t,$){},fAxm:function(t,$){},i6ku:function(t,$){},shzr:function(t,$){}},["NHnr"]);
//# sourceMappingURL=app.019d2fd8be034948c2db.js.map