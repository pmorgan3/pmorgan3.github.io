(this.webpackJsonppmorgan3=this.webpackJsonppmorgan3||[]).push([[0],{143:function(e,t,a){e.exports=a(338)},148:function(e,t,a){},338:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(13),o=a.n(l),c=(a(148),a(339)),i=a(376),m=a(375),d=a(379),s=a(373),u=a(10),f=a(381),g=a(372),E=a(383),p=a(374),b=a(380),v=a(135),h=a(382),z=a(130),x=a.n(z),y=function(e){var t=e.text,a=e.fontSize,l=Object(u.e)((function(e){return{selected:e.events.selected,dragged:e.events.dragged}})),o=l.connectors,c=o.connect,i=o.drag,m=l.selected,d=(l.dragged,l.setProp),s=Object(n.useState)(!1),E=Object(v.a)(s,2),p=E[0],b=E[1];return Object(n.useEffect)((function(){!m&&b(!1)}),[m]),r.a.createElement("div",{ref:function(e){return c(i(e))},onClick:function(e){return b(!0)}},r.a.createElement(x.a,{disabled:!p,html:t,onChange:function(e){return d((function(t){return t.text=e.target.value.replace(/<\/?[^>]+(>|$)/g,"")}))},tagName:"p",style:{fontSize:"".concat(a,"px")}}),m&&r.a.createElement(f.a,{className:"text-additional-settings",size:"small"},r.a.createElement(g.a,{component:"legend"},"Font size"),r.a.createElement(h.a,{defaultValue:a,step:1,min:7,max:50,valueLabelDisplay:"auto",onChange:function(e,t){d((function(e){return e.fontSize=t}))}})))};y.craft={rules:{canDrag:function(e){return"Drag"!==e.data.props.text}}};var k=function(e){var t=e.size,a=e.variant,n=e.color,l=e.text,o=Object(u.e)().connectors,c=o.connect,i=o.drag;return r.a.createElement(s.a,{ref:function(e){return c(i(e))},size:t,variant:a,color:n,className:"button-gradient"},r.a.createElement(y,{text:l}))};k.craft={defaultProps:{size:"small",variant:"contained",color:"primary"},related:{settings:function(){var e=Object(u.e)((function(e){return{variant:e.data.props.variant,color:e.data.props.color,text:e.data.props.text,size:e.data.props.size}})),t=e.setProp,a=e.variant,n=e.color,l=(e.text,e.size);return r.a.createElement("div",null,r.a.createElement(f.a,{size:"small",component:"fieldset"},r.a.createElement(g.a,{component:"legend"},"Size"),r.a.createElement(E.a,{defaultValue:l,onChange:function(e){return t((function(t){return t.size=e.target.value}))}},r.a.createElement(p.a,{label:"Small",value:"small",control:r.a.createElement(b.a,{size:"small",color:"primary"})}),r.a.createElement(p.a,{label:"Medium",value:"medium",control:r.a.createElement(b.a,{size:"small",color:"primary"})}),r.a.createElement(p.a,{label:"Large",value:"large",control:r.a.createElement(b.a,{size:"small",color:"primary"})}))),r.a.createElement(f.a,{component:"fieldset"},r.a.createElement(g.a,{component:"legend"},"Variant"),r.a.createElement(E.a,{defaultValue:a,onChange:function(e){return t((function(t){return t.variant=e.target.value}))}},r.a.createElement(p.a,{label:"Text",value:"text",control:r.a.createElement(b.a,{size:"small",color:"primary"})}),r.a.createElement(p.a,{label:"Outlined",value:"outlined",control:r.a.createElement(b.a,{size:"small",color:"primary"})}),r.a.createElement(p.a,{label:"Contained",value:"contained",control:r.a.createElement(b.a,{size:"small",color:"primary"})}))),r.a.createElement(f.a,{component:"fieldset"},r.a.createElement(g.a,{component:"legend"},"Color"),r.a.createElement(E.a,{defaultValue:n,onChange:function(e){return t((function(t){return t.color=e.target.value}))}},r.a.createElement(p.a,{label:"Default",value:"default",control:r.a.createElement(b.a,{size:"small",color:"default"})}),r.a.createElement(p.a,{label:"Primary",value:"primary",control:r.a.createElement(b.a,{size:"small",color:"primary"})}),r.a.createElement(p.a,{label:"Seconday",value:"secondary",control:r.a.createElement(b.a,{size:"small",color:"primary"})}))))}}};var w=a(134),C=a.n(w),S=function(e){var t=e.background,a=e.padding,n=void 0===a?0:a,l=e.children,o=e.width,c=e.margin,i=Object(u.e)().connectors,d=i.connect,s=i.drag;return r.a.createElement(m.a,{ref:function(e){return d(s(e))},style:{background:"".concat(t),padding:"".concat(n,"px"),width:"".concat(o,"%"),margin:"".concat(c,"%")}},l)},I=function(){var e=Object(u.e)((function(e){return{background:e.data.props.background,padding:e.data.props.padding,width:e.data.props.width,margin:e.data.props.margin}})),t=e.background,a=e.padding,n=e.setProp,l=e.width,o=e.margin;return r.a.createElement("div",null,r.a.createElement(f.a,{fullWidth:!0,margin:"normal",component:"fieldset"},r.a.createElement(g.a,{component:"legend"},"Background"),r.a.createElement(C.a,{defaultValue:t||"#000",onChange:function(e){n((function(t){return t.background=e}))}})),r.a.createElement(f.a,{fullWidth:!0,margin:"normal",component:"fieldset"},r.a.createElement(g.a,{component:"legend"},"Padding"),r.a.createElement(h.a,{defaultValue:a,onChange:function(e,t){return n((function(e){return e.padding=t}))}}),r.a.createElement(g.a,{component:"legend"},"Width"),r.a.createElement(h.a,{defaultValue:l,onChange:function(e,t){return n((function(e){return e.width=t}))}}),r.a.createElement(g.a,{component:"legend"},"Margin"),r.a.createElement(h.a,{defaultValue:o,onChange:function(e,t){return n((function(e){return e.margin=t}))}})))};S.craft={related:{settings:I}};var O=function(e){var t=Object(u.e)().connectors.connect;return r.a.createElement("div",{ref:t,className:"text-only"},e)};O.craft={rules:{canMoveIn:function(e){return e.data.type===y}}};var j=function(e){var t=Object(u.e)().connectors.connect;return r.a.createElement("div",{ref:t},e)};j.craft={rules:{canMoveIn:function(e){return e.data.type===k}}};var D=function(e){var t=e.background,a=e.padding,n=void 0===a?20:a;return r.a.createElement(S,{background:t,padding:n},r.a.createElement(u.a,{id:"text"},r.a.createElement(y,{text:"Title",fontSize:20}),r.a.createElement(y,{text:"Subtitle",fontSize:15})),r.a.createElement(u.a,{id:"buttons"},r.a.createElement(k,{size:"small",text:"Learn More"})))};D.craft={defaultProps:{background:"#ffffff",padding:3},related:{settings:I}};var P=function(){var e=Object(u.d)(),t=e.connectors;e.query;return r.a.createElement(d.a,{px:2,py:2},r.a.createElement(i.a,{container:!0,direction:"column",alignItems:"center",justify:"center",spacing:1},r.a.createElement(d.a,{pb:2},r.a.createElement(c.a,null,"Drag to add")),r.a.createElement(i.a,{container:!0,direction:"column",item:!0},r.a.createElement(s.a,{ref:function(e){return t.create(e,r.a.createElement(k,{text:"Click me",size:"small"}))},variant:"contained"},"Button")),r.a.createElement(i.a,{container:!0,direction:"column",item:!0},r.a.createElement(s.a,{ref:function(e){return t.create(e,r.a.createElement(y,{text:"Hi world"}))},variant:"contained"},"Text")),r.a.createElement(i.a,{container:!0,direction:"column",item:!0},r.a.createElement(s.a,{ref:function(e){return t.create(e,r.a.createElement(u.a,{is:S,padding:20}))},variant:"contained"},"Container")),r.a.createElement(i.a,{container:!0,direction:"column",item:!0},r.a.createElement(s.a,{ref:function(e){return t.create(e,r.a.createElement(D,null))},variant:"contained"},"Card"))))},M=a(384),T=function(){var e=Object(u.d)((function(e,t){var a,n=e.events.selected;return n&&(a={id:n,name:e.nodes[n].data.name,settings:e.nodes[n].related&&e.nodes[n].related.settings,isDeletable:t.node(n).isDeletable()}),{selected:a}})),t=e.actions,a=e.selected;return a?r.a.createElement(d.a,{bgcolor:"rgba(0, 0, 0, 0.06)",mt:2,px:2,py:2},r.a.createElement(i.a,{container:!0,direction:"column",spacing:0},r.a.createElement(i.a,{item:!0},r.a.createElement(d.a,{pb:2},r.a.createElement(i.a,{container:!0,alignItems:"center"},r.a.createElement(i.a,{item:!0,xs:!0},r.a.createElement(c.a,{variant:"subtitle1"},"Selected")),r.a.createElement(i.a,{item:!0},r.a.createElement(M.a,{size:"small",color:"primary",label:a.name}))))),a.settings&&r.a.createElement(a.settings),a.isDeletable?r.a.createElement(s.a,{variant:"contained",color:"default",onClick:function(){t.delete(a.id)}},"Delete"):null)):null},V=a(377),B=function(){var e=Object(u.d)((function(e){return{enabled:e.options.enabled}})),t=e.actions,a=e.query,n=e.enabled;return r.a.createElement(d.a,{px:1,py:1,mt:3,mb:1,bgcolor:"#ffd374"},r.a.createElement(i.a,{container:!0,alignItems:"center"},r.a.createElement(i.a,{item:!0,xs:!0},r.a.createElement(p.a,{control:r.a.createElement(V.a,{checked:n,onChange:function(e,a){return t.setOptions((function(e){return e.enabled=a}))}}),label:"Enable"})),r.a.createElement(i.a,{item:!0},r.a.createElement(s.a,{size:"small",variant:"outlined",color:"secondary",onClick:function(){console.log(a.serialize())}},"Serialize JSON to console"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement((function(){return r.a.createElement("div",null,r.a.createElement(c.a,{variant:"h5",align:"center"},"Paul Morgan III: Web Developer"),r.a.createElement(u.b,{resolver:{Card:D,Button:k,Text:y,CardTop:O,CardBottom:j}},r.a.createElement(B,null),r.a.createElement(i.a,{container:!0,spacing:3},r.a.createElement(i.a,{item:!0,xs:!0},r.a.createElement(u.c,null,r.a.createElement(u.a,{is:S,padding:5,background:"#eee"},r.a.createElement(D,null),r.a.createElement(k,{size:"small",variant:"outlined",text:"CLick"}),r.a.createElement(u.a,{is:S,padding:6,background:"#eb9cd3"},r.a.createElement(y,{fontSize:"36",text:"Keyv-mssql"}),r.a.createElement(y,{fontSize:"small",text:"Created an adapter for the popular node package Keyv. The adapter allows for mapping of key-value pairs to a Microsoft SQL Server Database instance. It currently has over 150 downloads on NPM"})),r.a.createElement(u.a,{is:S,padding:6,background:"#ffb393"},r.a.createElement(y,{fontSize:"36",text:"LegalDocket.org"}),r.a.createElement(y,{fontSize:"small",text:"Lead a team consisting of 2 other people and myself in the ongoing development of a website to assist members of The Justice Center to store and access clients legal information with ease. The website was made using Ruby on Rails and Postgresql for the backend and Bootstrap for the front end. It was hosted using DigitalOcean."})),r.a.createElement(u.a,{is:S,padding:6,background:"#ffd374"},r.a.createElement(y,{fontSize:"36",text:"UICSchoolPage.com"}),r.a.createElement(y,{fontSize:"small",text:"Created a forum website for UIC students to chat and discuss school related topics. I made this in response to learning that the Facebook page students used to discuss topics was going to be taken down. This website uses Ruby on Rails and Postgresql for the backend and a front end framework called Materialize CSS. It was hosted using heroku."})),r.a.createElement(u.a,{is:S,padding:6,background:"#b19cd9"},r.a.createElement(y,{fontSize:"36",text:"Android practice notepad"}),r.a.createElement(y,{fontSize:"small",text:"A toy notepad app I made for Android in order to teach myself the basics of android development. I used it as my go-to note taking app for about a year before switching to google keep."}))))),r.a.createElement(i.a,{item:!0,xs:3},r.a.createElement(m.a,null,r.a.createElement(P,null),r.a.createElement(T,null))))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[143,1,2]]]);
//# sourceMappingURL=main.fda34de7.chunk.js.map