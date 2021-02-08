(this.webpackJsonppmorgan3=this.webpackJsonppmorgan3||[]).push([[0],{237:function(e,t,a){e.exports=a(386)},241:function(e,t,a){},386:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(24),l=a.n(o),c=(a(241),a(16)),i=function(e){var t=e.children;return r.a.createElement("div",{className:"Section"},r.a.createElement("div",{className:"SectionWrapper"},t))},s=function(e){return r.a.createElement("img",{src:"Avatar.svg",alt:"",style:{width:"210px"}})},m=(a(421),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"HeaderContainer"},r.a.createElement("div",{className:"columns is-centered"},r.a.createElement("div",{className:"column"},r.a.createElement("h1",{className:"title"},"Developer, student, and hobbyist"),r.a.createElement("h2",{className:"subheader"},"I program solutions to problems, and I love what I do."),r.a.createElement(s,null),r.a.createElement("br",null),r.a.createElement("br",null)))))}),u=(a(418),a(419),a(114)),d=a(2),f=a(76),p=a(416),h=a(413);function E(){var e=Object(u.a)(["\n  list-style: none;\n  display: flex;\n  margin-right: 5%;\n  z-index: 19;\n  text-decoration: none;\n  flex-flow: row nowrap;\n  div {\n    color: black;\n    padding: 18px 20px;\n    a {\n      text-decoration: none;\n      color: black;\n    }\n  }\n  @media (max-width: 768px) {\n    margin-right: 0%;\n    flex-flow: column nowrap;\n    background-color: #0d2538;\n    position: fixed;\n    transform: ",";\n    top: 0;\n    right: 0;\n    height: 100vh;\n    width: 300px;\n    padding-top: 3.5rem;\n    transition: transform 0.3s ease-in-out;\n    div {\n      padding: 18px 10px;\n      color: #fff;\n      a {\n        color: white;\n      }\n    }\n  }\n"]);return E=function(){return e},e}function g(){var e=Object(u.a)(["\n  width: 2rem;\n  height: 2rem;\n  position: fixed;\n  top: 15px;\n  right: 20px;\n  z-index: 20;\n  display: none;\n  @media (max-width: 768px) {\n    display: flex;\n    justify-content: space-around;\n    flex-flow: column nowrap;\n  }\n  div {\n    width: 2rem;\n    height: 0.25rem;\n    background-color: ",";\n    border-radius: 10px;\n    transform-origin: 1px;\n    transition: all 0.3s linear;\n    &:nth-child(1) {\n      transform: ",";\n    }\n    &:nth-child(2) {\n      transform: ",";\n      opacity: ",";\n    }\n    &:nth-child(3) {\n      transform: ",";\n    }\n  }\n"]);return g=function(){return e},e}function b(){var e=Object(u.a)(["\n  width: 100%;\n  height: 55px;\n\n  padding: 0 20px;\n  display: flex;\n  justify-content: space-between;\n  .logo {\n    padding: 15px 0;\n  }\n"]);return b=function(){return e},e}var v=d.default.nav(b()),w=d.default.div(g(),(function(e){return e.open?"#ccc":"#333"}),(function(e){return e.open?"rotate(45deg)":"rotate(0)"}),(function(e){return e.open?"translateX(100%)":"translateX(0)"}),(function(e){return e.open?0:1}),(function(e){return e.open?"rotate(-45deg)":"rotate(0)"})),x=d.default.ul(E(),(function(e){return e.open?"translateX(0)":"translateX(100%)"})),y=function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{open:t},r.a.createElement("div",null,r.a.createElement(f.b,{className:"menu-link",to:"/"},"Home")),r.a.createElement("div",null,r.a.createElement(f.b,{className:"menu-link",to:"/Projects"},"Projects")),r.a.createElement("div",null,r.a.createElement(f.b,{className:"menu-link",to:"/Art"},"Art"))))},j=function(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=t[0],o=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{open:a,onClick:function(){return o(!a)}},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement(y,{open:a}))};function k(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}var N=function(e){var t=e.onClick,a=Object(n.useState)(!1),o=Object(c.a)(a,2),l=o[0],i=o[1],s=function(){var e=Object(n.useState)(k()),t=Object(c.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){function e(){r(k())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),a}().width<=1e3?"right":"bottom",m=Object(n.useState)("off"),u=Object(c.a)(m,2),d=u[0],f=u[1];Object(n.useEffect)((function(){var e=setTimeout((function(){i(!l)}),3e3);return function(){return clearTimeout(e)}}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,null,r.a.createElement(p.a,{TransitionComponent:h.a,title:"Click here to turn ".concat(d," animations!"),arrow:!0,placement:s},r.a.createElement("div",{className:"logo",onClick:function(){f("off"===d?"on":"off"),t()}},r.a.createElement("img",{src:"MyLogo.png",alt:"Paul Morgan III | Web Dev",height:"48"}))),r.a.createElement(j,null)))},S=a(145),F=a.n(S),O=a(414),C=a(415),I=function(e){var t=e.boxes,a=F.a.shuffle(["#CA64F9","#417DFF","#007669","#FF7093","#FFCE58","#7DFBE2"]),n=function(e){for(var t=[],a=0;a<e.length-1;a+=2)t.push({first:e[a],second:e[a+1]});return t}(t);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"grid"},n.map((function(e){return a=F.a.shuffle(a),r.a.createElement(O.a,{xs:1,md:2,lg:2},r.a.createElement(C.a,null,r.a.createElement("div",{className:"box-container",style:{background:a[0],opacity:.8}},e.first)),r.a.createElement(C.a,null,r.a.createElement("div",{className:"box-container",style:{background:a[1],opacity:.8}},e.second)))}))))},M=a(66),H=a(88),R=a(20),A=a(115),D=["#CA64F9","#417DFF","#007669","#FF7093","#FFCE58","#7DFBE2","#00DEEC"],z=function(e){var t=Math.random();return{position:[100-200*Math.random(),100-200*Math.random(),1.5*e],color:D[Math.round(Math.random()*(D.length-1))],scale:[10+14*t,1+14*t,10],rotation:[0,0,R.MathUtils.degToRad(45*Math.round(Math.random()))]}},P=new Array(35).fill(0).map((function(){return{color:D[Math.round(Math.random()*(D.length-1))],args:[.1+9*Math.random(),.1+9*Math.random(),10]}})),B=function(){var e=Object(A.b)(35,(function(e){return Object(H.a)(Object(H.a)({from:z(e)},z(e)),{},{config:{mass:20,tension:200,friction:50}})})),t=Object(c.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){setInterval((function(){return o((function(e){return Object(H.a)(Object(H.a)({},z(e)),{},{delay:40*e})}))}),15e3)}),[o]),r.a.createElement(r.a.Fragment,null,P.map((function(e,t){return r.a.createElement(A.a.mesh,Object.assign({key:t},a[t],{castShadow:!0,receiveShadow:!0}),r.a.createElement("planeBufferGeometry",{attach:"geometry",args:e.args}),r.a.createElement(A.a.meshStandardMaterial,{attach:"material",color:a[t].color,roughness:.75,metalness:.5}))})))},L=function(){return r.a.createElement("group",null,r.a.createElement("pointLight",{intensity:.3}),r.a.createElement("ambientLight",{intensity:2}),r.a.createElement("spotLight",{castShadow:!0,intensity:.2,angle:Math.PI/7,position:[150,-150,-2500],penumbra:1,shadowMapWidth:2048,shadowMapHeight:2048}))},T=function(){var e=window.innerWidth,t=function(){return e<=768?"350":"400"};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"SectionHeader-Blue"},"Some art I made. I draw inspiration from surrealism artists. I am enjoy creative coding because it allows me to express ideas I would otherwise be unable to convey."),r.a.createElement("div",{className:"grid-art"},r.a.createElement(O.a,{xs:1,md:2,lg:2},r.a.createElement(C.a,null,r.a.createElement("div",{className:"art-container"},r.a.createElement("iframe",{title:"stacks",src:"https://editor.p5js.org/pmorgan3/embed/9pA5ic5xH",width:t(),height:"400"}))),r.a.createElement(C.a,null,r.a.createElement("div",{className:"box-separator"}))),r.a.createElement(O.a,{xs:1,md:2,lg:2},r.a.createElement(C.a,null,r.a.createElement("div",{className:"box-separator"})),r.a.createElement(C.a,null,r.a.createElement("div",{className:"art-container"},r.a.createElement("iframe",{title:"Tuesday",src:"https://editor.p5js.org/pmorgan3/embed/pJFhSp6Ln",width:t(),height:"400"})))),r.a.createElement(O.a,{xs:1,md:2,lg:2},r.a.createElement(C.a,null,r.a.createElement("div",{className:"art-container"},r.a.createElement("iframe",{title:"colorStack",src:"https://editor.p5js.org/pmorgan3/embed/ebxVBoS1r",width:t(),height:"400"}))),r.a.createElement(C.a,null,r.a.createElement("div",{className:"box-separator"}))),r.a.createElement(O.a,{xs:1,md:2,lg:2},r.a.createElement(C.a,null,r.a.createElement("div",{className:"box-separator"})),r.a.createElement(C.a,null,r.a.createElement("div",{className:"art-container"},r.a.createElement("iframe",{src:"https://editor.p5js.org/pmorgan3/embed/V1Ynqr1G-",title:"morecolor",width:t(),height:"400"})))),r.a.createElement(O.a,{xs:1,md:2,lg:2},r.a.createElement(C.a,null,r.a.createElement("div",{className:"art-container"},r.a.createElement("iframe",{src:"https://editor.p5js.org/pmorgan3/embed/EUS0zyYMF",title:"white",width:t(),height:"400"}))),r.a.createElement(C.a,null,r.a.createElement("div",{className:"box-separator"}))),r.a.createElement("div",{className:"SectionHeader-Blue"},"My Final Project"),r.a.createElement("iframe",{title:"final",src:"https://editor.p5js.org/pmorgan3/embed/nGvsdG3zf",width:"800",height:"600",scrolling:"no"})))},W=(a(147),a(420),a(417),a(422)),q=function(e){var t=e.title,a=e.body,n=e.status,o=e.url;return r.a.createElement("div",null,r.a.createElement(W.a,{size:"large",className:"box-title"},r.a.createElement("a",{href:o,style:{textDecoration:"none",color:"black"}},t)),r.a.createElement("br",null),r.a.createElement(W.a,{size:"medium",className:"box-body"},a),r.a.createElement("br",null),r.a.createElement(W.a,{size:"small",className:"box-footer"},n))},J=a(150),_=a.n(J),G=a(224),U=a(225),X=a.n(U),K=function(){var e=Object(G.a)(_.a.mark((function e(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.a.get("https://api.github.com/users/pmorgan3/repos",{headers:{Authorization:"token ".concat("9284c4753bce3125c7fd415f7967e3a19010ca6a")}}).then((function(e){return console.warn(e.data),e.data})).catch((function(e){return console.error("AHHHHHH: ".concat(e)),[]})).catch((function(e){throw e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(e){var t=e.repo;return r.a.createElement(r.a.Fragment,null,r.a.createElement(q,{url:t.html_url,title:t.full_name.slice(9),body:t.description,status:"Stars: ".concat(t.stargazers_count)}))},Y=function(){var e=Object(n.useState)([]),t=Object(c.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)(!0),i=Object(c.a)(l,2),s=i[0],m=i[1];return Object(n.useEffect)((function(){K().then((function(e){return o(e)})),m(!1),console.log("repos fetched: ".concat(JSON.stringify(a)))}),[]),s||0===a.length?r.a.createElement(r.a.Fragment,null,"Loading...."):r.a.createElement(r.a.Fragment,null,r.a.createElement(I,{boxes:a.filter((function(e){return""!==e.description})).filter((function(e){return!0!==e.fork})).sort((function(e,t){return t.stargazers_count-e.stargazers_count})).map((function(e){return r.a.createElement(V,{repo:e})}))}))},Q=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null),r.a.createElement("div",{className:"SectionHeader-Blue"},"Some of my projects on github."),r.a.createElement(Y,null))},$=a(22),Z=function(e){var t=e.header;return r.a.createElement("div",{className:"ResumeHeader"},t)},ee=function(e){var t=e.subHeader;return r.a.createElement("div",{className:"ResumeSubHeader"},t)},te=function(e){var t=e.dateRange;return r.a.createElement("div",{className:"ResumeDate"},t)},ae=function(e){var t=e.description;return r.a.createElement("div",{className:"ResumeDescription"},t)},ne=function(e){var t=e.skills;return r.a.createElement(r.a.Fragment,null,t.map((function(e){return r.a.createElement("div",{className:"Skills"}," - ",e)})))},re=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,{header:"Experience"}),r.a.createElement(ee,{subHeader:"Webitects: Software Developer Intern"}),r.a.createElement(te,{dateRange:"May 2019 - August 2020"}),r.a.createElement(ae,{description:"As a Software Development Intern, I created multiple client-facing features using C#, the .NET framework, and React. I also managed deployments and development environments using Docker, AWS ECS, and Bitbucket Pipelines\n"}),r.a.createElement("br",null),r.a.createElement(Z,{header:"Projects"}),r.a.createElement(ee,{subHeader:"Keyv-mssql"}),r.a.createElement(te,{dateRange:"Available via npm"}),r.a.createElement(ae,{description:"Created an adapter for the popular node package Keyv. The adapter allows for mapping of key-value pairs to a Microsoft SQL Server Database instance. It currently has over 200 downloads on NPM"}),r.a.createElement(ee,{subHeader:"LegalDocket.org"}),r.a.createElement(te,{dateRange:"Offline. Code available upon request"}),r.a.createElement(ae,{description:"Lead a team consisting of 2 other people and myself in the ongoing development of a website to assist members of The Justice Center to store and access clients legal information with ease. The website was made using Ruby on Rails and Postgresql for the backend and Bootstrap for the front end. It was hosted using DigitalOcean."}),r.a.createElement(ee,{subHeader:"UICSchoolPage.com"}),r.a.createElement(te,{dateRange:"Offline. Code available upon request"}),r.a.createElement(ae,{description:"Created a forum website for UIC students to chat and discuss school related topics. I made this in response to learning that the Facebook page students used to discuss topics was going to be taken down. This website uses Ruby on Rails and Postgresql for the backend and a front end framework called Materialize CSS. It was hosted using heroku."}),r.a.createElement(ee,{subHeader:"Android practice notepad"}),r.a.createElement(te,{dateRange:"Code available on github"}),r.a.createElement(ae,{description:"A toy notepad app I made for Android in order to teach myself the basics of android development. I used it as my go-to note taking app for about a year before switching to google keep."}),r.a.createElement("br",null),r.a.createElement(Z,{header:"Skills and Abilities"}),r.a.createElement(ee,{subHeader:"Proficient in:"}),r.a.createElement(ne,{skills:["C# and the .Net platform","Ruby","JavaScript/TypeScript","Reactjs and Redux.js","C/C++","Docker"]}))},oe=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"SectionHeader-Blue"},"About me"),r.a.createElement("div",{className:"ResumeContainer"},r.a.createElement(re,null)))};function le(){var e=Object(n.useState)(!0),t=Object(c.a)(e,2),a=t[0],o=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,null,r.a.createElement(i,null,r.a.createElement("div",{hidden:!a},r.a.createElement(M.a,{style:{position:"fixed",zIndex:-1,height:"100%"},shadowMap:!0,camera:{position:[0,0,100],fov:100,near:.1,far:2e5}},r.a.createElement(L,null),r.a.createElement(B,null))),r.a.createElement(N,{onClick:function(){return o(!a)}}),r.a.createElement(m,null),r.a.createElement($.a,{exact:!0,path:"/",component:oe}),r.a.createElement($.a,{path:"/Projects",component:Q}),r.a.createElement($.a,{path:"/Art",component:T}))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(le,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[237,1,2]]]);
//# sourceMappingURL=main.268e7943.chunk.js.map