(this["webpackJsonpc-portfolio-client"]=this["webpackJsonpc-portfolio-client"]||[]).push([[0],{121:function(e,t,a){e.exports=a(258)},256:function(e,t,a){},257:function(e,t,a){},258:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),l=a.n(c),o=a(9);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(12),u=a(47),s=a(118),m=a(25),d=a.n(m),f=a(33),b=a(120),p=a(32),E=a(13),h=a.n(E),v=a(30);d.a.defaults.baseURL="https://cportfolio.herokuapp.com";var g={authenticateUser:function(){var e=Object(v.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.post("/users/authenticate",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getUser:function(){var e=Object(v.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("/users/current",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getAllContent:function(){var e=Object(v.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("/content/");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),createContent:function(){var e=Object(v.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.post("/content/create",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),editContent:function(){var e=Object(v.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.put("".concat("/content/").concat(t.id),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),deleteContent:function(){var e=Object(v.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.delete("".concat("/content/").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},O=Object(p.a)("content/getContent",g.getAllContent),j=Object(p.a)("content/createContent",g.createContent),k=Object(p.a)("content/editContent",g.editContent),y=Object(p.a)("content/deleteContent",g.deleteContent),w=Object(p.b)({name:"content",initialState:[],reducers:{},extraReducers:Object(f.a)({"user/logout":function(){return[]}},O.fulfilled,(function(e,t){return Object(b.a)(t.payload.data)}))}).reducer,C=a(7),N=Object(p.a)("user/authenticate",g.authenticateUser),x=Object(p.b)({name:"user",initialState:{isAuthenticated:null!==localStorage.getItem("token"),authType:"Bearer"},reducers:{setUser:function(e,t){return Object(C.a)(Object(C.a)(Object(C.a)({},e),t.payload.data),{},{token:localStorage.getItem("token"),isAuthenticated:!0})},logout:function(){return localStorage.removeItem("token"),{isAuthenticated:!1}}},extraReducers:Object(f.a)({},N.fulfilled,(function(e,t){return localStorage.setItem("token",t.payload.data.token),Object(C.a)(Object(C.a)(Object(C.a)({},e),t.payload.data),{},{isAuthenticated:!0})}))}),S=x.actions,I=S.logout,A=S.setUser,D=x.reducer,L=Object(i.combineReducers)({content:w,user:D}),F=[u.a,function(){return function(e){return function(t){return d.a.defaults.headers.common.Authorization="Bearer ".concat(localStorage.getItem("token")),e(t)}}}],H=[i.applyMiddleware.apply(void 0,F)],G=s.composeWithDevTools.apply(void 0,H),U=Object(i.createStore)(L,{},G),B=a(38),T=a(8),R=a(17),V=a(6),K=a(14);function M(){var e=Object(o.c)((function(e){return e.user.isAuthenticated})),t=Object(n.useState)({email:"",password:""}),a=Object(R.a)(t,2),c=a[0],l=a[1],i=Object(o.b)(),u=Object(T.f)();Object(n.useEffect)((function(){e&&u.push("/dashboard")}));var s=function(e){return l(Object(C.a)(Object(C.a)({},c),{},Object(f.a)({},e.target.id,e.target.value)))};return r.a.createElement("div",{className:"form-box"},r.a.createElement(V.a,{className:"login-form",onSubmit:function(e){e.preventDefault(),i(N(c))}},r.a.createElement("h2",null,"Login"),r.a.createElement("hr",null),r.a.createElement(V.a.Group,null,r.a.createElement(V.a.Control,{type:"email",id:"email",placeholder:"Email Address",value:c.email,onChange:s,className:"form-control"})),r.a.createElement(V.a.Group,null,r.a.createElement(V.a.Control,{type:"password",id:"password",placeholder:"Password",value:c.password,onChange:s,className:"form-control"})),r.a.createElement(K.a,{type:"submit",variant:"primary"},"Login")))}var W=a(68),q=a(34),z=a(49),J=function(){return r.a.createElement(W.a,{fluid:!0},r.a.createElement(q.a,{className:"no-gutter"},r.a.createElement(z.a,{className:"bg-info d-flex justify-content-center"},r.a.createElement("div",{className:"splash-container"},r.a.createElement("h1",{className:"display-3 text-white"},"cPortfolio"))),r.a.createElement(z.a,null,r.a.createElement("div",{className:"splash-container"},r.a.createElement(M,null)))))},P=a(119),Y=a(21);function $(){var e=Object(o.b)();return r.a.createElement(P.a,{variant:"dark",className:"fixed-top bg-dark flex-md-nowrap p-0 shadow"},r.a.createElement(Y.a.Link,{as:B.b,to:"/dashboard",className:"navbar-brand col-sm-3 col-md-2 mr-0"},"Dashboard"),r.a.createElement(Y.a,{className:"px-3"},r.a.createElement(Y.a.Item,{className:"text-nowrap"},r.a.createElement(Y.a.Link,{as:B.b,to:"/",onClick:function(){return e(I())}},"Sign out"))))}function Q(e){var t=e.setView,a=Object(n.useState)("dashboard"),c=Object(R.a)(a,2),l=c[0],o=c[1];return r.a.createElement(Y.a,{className:"col-md-2 d-none d-md-block bg-light sidebar"},r.a.createElement("div",{className:"sidebar-sticky"},r.a.createElement(Y.a,{className:"flex-column",activeKey:l,onSelect:function(e){o(e),t(e)}},r.a.createElement(Y.a.Item,null,r.a.createElement(Y.a.Link,{eventKey:"dashboard"},"Dashboard")),r.a.createElement(Y.a.Item,null,r.a.createElement(Y.a.Link,{eventKey:"add-content"},"Add Content")))))}var X=a(42);function Z(e){var t=e.tags;return r.a.createElement(r.a.Fragment,null,"tags\xa0\xa0\xa0\u203a",t.map((function(e){return r.a.createElement(r.a.Fragment,null,"\xa0\xa0\xa0",r.a.createElement(K.a,{variant:"link",className:"contentitem-tag",key:e,onClick:function(){return function(e){return console.log("'".concat(e,"' tag clicked."))}(e)}},e))})))}function _(e){var t=e.id;return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"contentitem-visibility-dot",onMouseOver:function(){return console.log("'".concat(t,"' visibility mouse over"))}}))}var ee=a(72),te=a.n(ee),ae=(a(116),a(20));function ne(e){var t=e.content,a=e.show,c=e.closeHandler,l=Object(n.useState)(t),i=Object(R.a)(l,2),u=i[0],s=i[1],m=Object(o.b)();return r.a.createElement(ae.a,{size:"lg",show:a,onHide:c},r.a.createElement(ae.a.Header,null,r.a.createElement(ae.a.Title,null,"Edit Content")),r.a.createElement(ae.a.Body,null,r.a.createElement(V.a,null,r.a.createElement(V.a.Group,{controlId:"title"},r.a.createElement(V.a.Label,null,"Title"),r.a.createElement(V.a.Control,{type:"text",value:u.title,onChange:function(e){return s(Object(C.a)(Object(C.a)({},u),{},{title:e.target.value}))}})),r.a.createElement(V.a.Group,{controlId:"description"},r.a.createElement(V.a.Label,null,"Description"),r.a.createElement(V.a.Control,{type:"text",value:u.description,onChange:function(e){return s(Object(C.a)(Object(C.a)({},u),{},{description:e.target.value}))}})),r.a.createElement(V.a.Group,{controlId:"content"},r.a.createElement(V.a.Label,null,"Content"),r.a.createElement(te.a,{modules:{toolbar:[[{header:[1,2,!1]}],["bold","italic","underline","strike","blockquote"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["link"],["clean"]]},theme:"snow",value:u.content,onChange:function(e){return s(Object(C.a)(Object(C.a)({},u),{},{content:e}))}})))),r.a.createElement(ae.a.Footer,null,r.a.createElement(K.a,{variant:"primary",onClick:c},"Cancel"),r.a.createElement(K.a,{variant:"warning",onClick:function(){m(k(u)).then((function(){return m(O())})).then((function(){return c()}))}},"Save changes")))}function re(e){var t=e.content,a=e.show,n=e.closeHandler,c=Object(o.b)();return r.a.createElement(ae.a,{show:a,onHide:n},r.a.createElement(ae.a.Header,null,r.a.createElement(ae.a.Title,null,"Delete Content")),r.a.createElement(ae.a.Body,null,"Are you sure you want to delete ",r.a.createElement("b",null,t.title),"?"),r.a.createElement(ae.a.Footer,null,r.a.createElement(K.a,{variant:"primary",onClick:n},"No, cancel"),r.a.createElement(K.a,{variant:"danger",onClick:function(){c(y(t.id)).then((function(){return c(O())})).then((function(){return n()}))}},"Yes, delete")))}var ce=a(252),le=a(253);function oe(e){var t=e.content,a=Object(n.useState)(!1),c=Object(R.a)(a,2),l=c[0],o=c[1],i=Object(n.useState)(!1),u=Object(R.a)(i,2),s=u[0],m=u[1],d=function(){return console.log("".concat(t.id," clicked."))},f=t.id,b=t.title,p=t.description,E=t.tags,h=t.displayDate,v=E.length>0,g=!1;t.content&&ce(t.content)&&le(t.content.split("?")[0])&&(g=!0);var O=Intl.DateTimeFormat("en-AU",{day:"2-digit",month:"long",year:"numeric"}).format(Date.parse(h));return r.a.createElement(r.a.Fragment,null,r.a.createElement(ne,{content:t,show:l,closeHandler:function(){return o(!1)}}),r.a.createElement(re,{content:t,show:s,closeHandler:function(){return m(!1)}}),r.a.createElement(q.a,null,r.a.createElement(X.a,null,g?r.a.createElement(r.a.Fragment,null,r.a.createElement(X.a.Img,{src:t.content,alt:b}),r.a.createElement(X.a.ImgOverlay,{className:"contentitem-header",onClick:d},r.a.createElement("div",{className:"contentitem-title-visibility"},r.a.createElement(_,{id:f}),r.a.createElement("div",{className:"contentitem-title"},b)),r.a.createElement("div",{className:"contentitem-date"},O))):r.a.createElement(X.a.Header,{className:"contentitem-header",onClick:d},r.a.createElement("div",{className:"contentitem-title-visibility"},r.a.createElement(_,{id:f}),r.a.createElement("div",{className:"contentitem-title"},b)),r.a.createElement("div",{className:"contentitem-date"},O)),r.a.createElement(X.a.Body,null,r.a.createElement("div",{className:"contentitem-container"},r.a.createElement("div",null,r.a.createElement("div",{className:"contentitem-tags"},v&&r.a.createElement(Z,{tags:E})),r.a.createElement("h3",null,"Description"))),r.a.createElement("p",{className:"card-text"},p),r.a.createElement(K.a,{variant:"link",className:"float-right",onClick:function(){return o(!0)}},"Edit"),r.a.createElement(K.a,{variant:"link",className:"float-right text-danger",onClick:function(){return m(!0)}},"Delete")))))}function ie(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.content}));return Object(n.useEffect)((function(){function t(){return(t=Object(v.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e(O());case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),r.a.createElement("div",{className:"flex-wrap pt-3 pb-2 mb-3"},r.a.createElement(q.a,null,r.a.createElement("h1",{className:"h2 ml-5 mt-5"},"Your Content")),t.map((function(e){return r.a.createElement(oe,{content:e,key:e.id})})))}function ue(e){var t=e.setView,a=Object(n.useState)({title:"",description:"",content:""}),c=Object(R.a)(a,2),l=c[0],i=c[1],u=Object(o.b)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"h2 ml-5 mt-5"},"Add Content"),r.a.createElement(V.a,{className:"mt-5",onSubmit:function(e){e.preventDefault(),u(j(l)).then((function(){return u(O())})).then((function(){return t("dashboard")}))}},r.a.createElement(V.a.Group,{controlId:"title"},r.a.createElement(V.a.Label,null,"Title"),r.a.createElement(V.a.Control,{type:"text",value:l.title,onChange:function(e){return i(Object(C.a)(Object(C.a)({},l),{},{title:e.target.value}))}})),r.a.createElement(V.a.Group,{controlId:"description"},r.a.createElement(V.a.Label,null,"Description"),r.a.createElement(V.a.Control,{type:"text",value:l.description,onChange:function(e){return i(Object(C.a)(Object(C.a)({},l),{},{description:e.target.value}))}})),r.a.createElement(V.a.Group,{controlId:"content"},r.a.createElement(V.a.Label,null,"Content"),r.a.createElement(te.a,{modules:{toolbar:[[{header:[1,2,!1]}],["bold","italic","underline","strike","blockquote"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["link"],["clean"]]},theme:"snow",value:l.content,onChange:function(e){return i(Object(C.a)(Object(C.a)({},l),{},{content:e}))}})),r.a.createElement(K.a,{type:"submit",variant:"info"},"Create")))}function se(){var e=Object(T.f)(),t=Object(n.useState)("dashboard"),a=Object(R.a)(t,2),c=a[0],l=a[1],i=Object(o.c)((function(e){return e.user.isAuthenticated}));Object(n.useEffect)((function(){i||e.push("/")}));var u=function(e){return l(e)};return r.a.createElement(r.a.Fragment,null,r.a.createElement($,null),r.a.createElement(W.a,{fluid:!0},r.a.createElement(q.a,null,r.a.createElement(Q,{setView:u}),r.a.createElement("main",{role:"main",className:"col-md-9 ml-sm-auto col-lg-10 px-4"},"dashboard"===c&&r.a.createElement(ie,null),"add-content"===c&&r.a.createElement(ue,{setView:u})))))}a(256);function me(){var e=Object(o.b)();return Object(n.useEffect)((function(){localStorage.getItem("token")&&g.getUser().then((function(t){return e(A(t))}))})),r.a.createElement(B.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(T.c,null,r.a.createElement(T.a,{exact:!0,path:"/",component:J}),r.a.createElement(T.a,{exact:!0,path:"/dashboard",component:se}))))}a(257);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{store:U},r.a.createElement(me,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[121,1,2]]]);
//# sourceMappingURL=main.7ec1d6fc.chunk.js.map