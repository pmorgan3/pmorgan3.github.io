(function(t){function e(e){for(var i,o,r=e[0],c=e[1],l=e[2],v=0,d=[];v<r.length;v++)o=r[v],a[o]&&d.push(a[o][0]),a[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(i=!1)}i&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},a={1:0},s=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;s.push([7,0]),n()})({"/a7u":function(t,e,n){},"2xD+":function(t,e,n){"use strict";var i=n("/a7u"),a=n.n(i);a.a},7:function(t,e,n){t.exports=n("Vtdi")},"7cKP":function(t,e,n){"use strict";var i=n("zHXp"),a=n.n(i);a.a},BlIx:function(t,e,n){"use strict";var i=n("r8ji"),a=n.n(i);a.a},EDI0:function(t,e,n){},Vtdi:function(t,e,n){"use strict";n.r(e);n("VRzm");var i=n("Kw5r"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("header-component"),n("Objective"),n("Education"),n("personal-projects"),n("Skills")],1)},s=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.myName))]),n("h2",[t._v(" "+t._s(t.myTitle)+" ")]),n("h3",[t._v(t._s(t.myAddress))]),n("h3",{staticClass:"contactHead"},[t._v(" "+t._s(t.myEmail)+" ")]),n("h3",{staticClass:"contactHead"},[t._v(" "+t._s(t.myNumber)+" ")]),n("h3",{staticClass:"contactHead"},[t._v(" "+t._s(t.myGit)+" ")])])},r=[],c={name:"HeaderComponent",data:function(){return{myName:"Paul Morgan III",myTitle:"Developer Extraordinaire",myAddress:"1565 Steeplechase Ct, Libertyville, IL",myEmail:"pmorgan3@gmail.com",myNumber:"1-847-313-5894",myGit:"https://github.com/pmorgan3"}}},l=c,u=(n("BlIx"),n("KHd+")),v=Object(u["a"])(l,o,r,!1,null,"79282912",null),d=v.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Objective section"},[n("div",[n("button",{on:{click:function(e){t.toggleIsActive()}}},[t._v("\n        Objective        \n    ")])]),n("div",[n("transition",{attrs:{name:"alert-in"}},[t.isActive?n("p",{staticClass:"alert"},[t._v("\n            I'm a driven and self-motivated Computer Science student seeking to use my knowledge of web development in a professional setting.\n        ")]):t._e()])],1)])},g=[],m={name:"Objective",data:function(){return{isActive:!1}},methods:{toggleIsActive:function(){this.isActive=!this.isActive}}},p=m,h=(n("q0wA"),Object(u["a"])(p,f,g,!1,null,"86d20be8",null)),_=h.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Education section"},[n("button",{on:{click:function(e){t.toggleIsActive()}}},[t._v("\n        Education        \n    ")]),n("transition",{attrs:{name:"alert-in"}},[t.isActive?n("p",{staticClass:"alert"},[n("b",[t._v("University of Illinois Chicago (2016-present)")])]):t._e()]),n("transition",{attrs:{name:"alert-in"}},[t.isActive?n("p",{staticClass:"alert"},[t._v("\n            Computer Science major, "),n("i",[t._v("anticipated: 2020")])]):t._e()])],1)},A=[],y={name:"Education",data:function(){return{isActive:!1}},methods:{toggleIsActive:function(){this.isActive=!this.isActive}}},w=y,k=(n("eyFR"),Object(u["a"])(w,b,A,!1,null,"3488d208",null)),C=k.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"PersonalProjects section"},[n("button",{on:{click:function(e){t.toggleIsActive()}}},[t._v("\n        Personal Projects       \n    ")]),n("transition",{attrs:{name:"alert-in"}},[t.isActive?n("button",{on:{click:function(e){t.toggleLegalActive()}}},[t._v("\n            Legaldocket.org\n        ")]):t._e()]),n("transition",{attrs:{name:"alert-in"}},[t.isActive?n("button",{on:{click:function(e){t.toggleUICReddit()}}},[t._v("\n            Uicschoolpage.com\n        ")]):t._e()]),n("transition",{attrs:{name:"alert-in"}},[t.legalDocketActive&&t.isActive?n("div",{staticClass:"alert"},[n("p",[t._v("Currently leading a team consisting of 2 other people and myself in the ongoing development of a website to assist legal aid clinics in storing . This website allows the members of The Justice Center to store and access client information with ease. The website is made using Ruby on Rails and Postgresql for the backend and Bootstrap for the front end. It is hosted using DigitalOcean.")]),n("br"),n("p",[n("a",{attrs:{href:"http://www.legaldocket.org",target:"_blank"}},[t._v(" legaldocket.org ")])])]):t._e()]),n("transition",{attrs:{name:"alert-in"}},[t.uicRedditActive&&t.isActive?n("div",{staticClass:"alert"},[n("p",[t._v("Created a forum website for UIC students to chat and discuss school related topics. I made this in response to learning that the Facebook page students used to discuss topics was going to be taken down. This website uses Ruby on Rails and Postgresql for the backend and a front end framework called Materialize CSS. It is hosted using heroku.")]),n("br"),n("p",[n("a",{attrs:{href:"http://www.uicschoolpage.com",target:"_blank"}},[t._v(" uicschoolpage.com ")])])]):t._e()])],1)},I=[],O={name:"PersonalProjects",data:function(){return{isActive:!1,legalDocketActive:!1,uicRedditActive:!1}},methods:{toggleIsActive:function(){this.isActive=!this.isActive},toggleLegalActive:function(){this.legalDocketActive=!this.legalDocketActive},toggleUICReddit:function(){this.uicRedditActive=!this.uicRedditActive}}},P=O,S=(n("2xD+"),Object(u["a"])(P,j,I,!1,null,"afe51a4e",null)),x=S.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Skills section"},[n("button",{on:{click:function(e){t.toggleIsActive()}}},[t._v("\n        Skills       \n    ")]),n("transition",{attrs:{name:"alert-in"}},[t.isActive?n("div",{staticClass:"alert"},[n("h3",[t._v("Proficient in:")])]):t._e()]),n("transition",{attrs:{name:"alert-in"}},[t.isActive?n("div",{staticClass:"alert"},[n("ul",[n("li",[t._v("Ruby")]),n("li",[t._v("Java")]),n("li",[t._v("C/C++")]),n("li",[t._v("Web development (HTML, SASS, Javascript, Rails)")]),n("li",[t._v("Relational database technologies such as MySQL and Postgresql")]),n("li",[t._v("Team collaboration methods such as Agile and Scrum")])])]):t._e()]),n("transition",{attrs:{name:"alert-in"}},[t.isActive?n("div",{staticClass:"alert"},[n("h3",[t._v("Knowledgable in:")])]):t._e()]),n("transition",{attrs:{name:"alert-in"}},[t.isActive?n("div",{staticClass:"alert"},[n("ul",[n("li",[t._v("Python")]),n("li",[t._v("Other web technologies (Django, Angular, Vue)")]),n("li",[t._v("Developing in a Unix environment")]),n("li",[t._v("Excellent problem solving skills & high motivation to learn new technologies.")])])]):t._e()])],1)},R=[],L={name:"Skills",data:function(){return{isActive:!1}},methods:{toggleIsActive:function(){this.isActive=!this.isActive}}},D=L,T=(n("7cKP"),Object(u["a"])(D,E,R,!1,null,"5e4a0a92",null)),H=T.exports,M={name:"app",components:{HeaderComponent:d,Objective:_,Education:C,PersonalProjects:x,Skills:H}},$=M,U=(n("ZL7j"),Object(u["a"])($,a,s,!1,null,null,null)),q=U.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(q)}}).$mount("#app")},W1eg:function(t,e,n){},ZL7j:function(t,e,n){"use strict";var i=n("EDI0"),a=n.n(i);a.a},eyFR:function(t,e,n){"use strict";var i=n("kLfL"),a=n.n(i);a.a},kLfL:function(t,e,n){},q0wA:function(t,e,n){"use strict";var i=n("W1eg"),a=n.n(i);a.a},r8ji:function(t,e,n){},zHXp:function(t,e,n){}});
//# sourceMappingURL=app.6ac4c61c.js.map