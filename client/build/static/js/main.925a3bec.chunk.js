(this["webpackJsonpc-portfolio-client"]=this["webpackJsonpc-portfolio-client"]||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),o=a.n(c),l=a(8);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=a(11),i=a(40),s=a(72),m=a(26),d=a.n(m),f=a(19),p=a(74),b=a(31),E=a(13),h=a.n(E),v=a(29);d.a.defaults.baseURL="https://cportfolio.herokuapp.com";var j={authenticateUser:function(){var e=Object(v.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.post("/users/authenticate",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getUser:function(){var e=Object(v.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("/users/current",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getAllContent:function(){var e=Object(v.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("/content/");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),createContent:function(){var e=Object(v.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.post("/content/create",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),editContent:function(){var e=Object(v.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.put("".concat("/content/").concat(t.id),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),deleteContent:function(){var e=Object(v.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.delete("".concat("/content/").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},O=Object(b.a)("content/getContent",j.getAllContent),g=Object(b.a)("content/createContent",j.createContent),w=Object(b.a)("content/editContent",j.editContent),y=Object(b.a)("content/deleteContent",j.deleteContent),k=Object(b.b)({name:"content",initialState:[],reducers:{},extraReducers:Object(f.a)({"user/logout":function(){return[]}},O.fulfilled,(function(e,t){return Object(p.a)(t.payload.data)}))}).reducer,C=a(12),x=Object(b.a)("user/authenticate",j.authenticateUser),N=Object(b.b)({name:"user",initialState:{isAuthenticated:null!==localStorage.getItem("token"),authType:"Bearer"},reducers:{setUser:function(e,t){return Object(C.a)(Object(C.a)(Object(C.a)({},e),t.payload.data),{},{token:localStorage.getItem("token"),isAuthenticated:!0})},logout:function(){return localStorage.removeItem("token"),{isAuthenticated:!1}}},extraReducers:Object(f.a)({},x.fulfilled,(function(e,t){return localStorage.setItem("token",t.payload.data.token),Object(C.a)(Object(C.a)(Object(C.a)({},e),t.payload.data),{},{isAuthenticated:!0})}))}),S=N.actions,A=S.logout,I=S.setUser,L=N.reducer,D=Object(u.combineReducers)({content:k,user:L}),H=[i.a,function(){return function(e){return function(t){return d.a.defaults.headers.common.Authorization="Bearer ".concat(localStorage.getItem("token")),e(t)}}}],B=[u.applyMiddleware.apply(void 0,H)],U=s.composeWithDevTools.apply(void 0,B),G=Object(u.createStore)(D,{},U),T=a(36),F=a(7),R=a(16),V=a(6),K=a(17);function W(){var e=Object(l.c)((function(e){return e.user.isAuthenticated})),t=Object(n.useState)({email:"",password:""}),a=Object(R.a)(t,2),c=a[0],o=a[1],u=Object(l.b)(),i=Object(F.f)();Object(n.useEffect)((function(){e&&i.push("/dashboard")}));var s=function(e){return o(Object(C.a)(Object(C.a)({},c),{},Object(f.a)({},e.target.id,e.target.value)))};return r.a.createElement("div",{className:"form-box"},r.a.createElement(V.a,{className:"login-form",onSubmit:function(e){e.preventDefault(),u(x(c))}},r.a.createElement("h2",null,"Login"),r.a.createElement("hr",null),r.a.createElement(V.a.Group,null,r.a.createElement(V.a.Control,{type:"email",id:"email",placeholder:"Email Address",value:c.email,onChange:s,className:"form-control"})),r.a.createElement(V.a.Group,null,r.a.createElement(V.a.Control,{type:"password",id:"password",placeholder:"Password",value:c.password,onChange:s,className:"form-control"})),r.a.createElement(K.a,{type:"submit",variant:"primary"},"Login")))}var z=a(50),J=a(32),M=a(42),P=function(){return r.a.createElement(z.a,{fluid:!0},r.a.createElement(J.a,{className:"no-gutter"},r.a.createElement(M.a,{className:"bg-info d-flex justify-content-center"},r.a.createElement("div",{className:"splash-container"},r.a.createElement("h1",{className:"display-3 text-white"},"cPortfolio"))),r.a.createElement(M.a,null,r.a.createElement("div",{className:"splash-container"},r.a.createElement(W,null)))))},Y=a(73),$=a(22);function q(){var e=Object(l.b)();return r.a.createElement(Y.a,{variant:"dark",className:"fixed-top bg-dark flex-md-nowrap p-0 shadow"},r.a.createElement($.a.Link,{as:T.b,to:"/dashboard",className:"navbar-brand col-sm-3 col-md-2 mr-0"},"Dashboard"),r.a.createElement($.a,{className:"px-3"},r.a.createElement($.a.Item,{className:"text-nowrap"},r.a.createElement($.a.Link,{as:T.b,to:"/",onClick:function(){return e(A())}},"Sign out"))))}function Q(e){var t=e.setView,a=Object(n.useState)("dashboard"),c=Object(R.a)(a,2),o=c[0],l=c[1];return r.a.createElement($.a,{className:"col-md-2 d-none d-md-block bg-light sidebar"},r.a.createElement("div",{className:"sidebar-sticky"},r.a.createElement($.a,{className:"flex-column",activeKey:o,onSelect:function(e){l(e),t(e)}},r.a.createElement($.a.Item,null,r.a.createElement($.a.Link,{eventKey:"dashboard"},"Dashboard")),r.a.createElement($.a.Item,null,r.a.createElement($.a.Link,{eventKey:"add-content"},"Add Content")))))}var X=a(60),Z=a(21);function _(e){var t=e.content,a=e.show,c=e.closeHandler,o=Object(n.useState)(t),u=Object(R.a)(o,2),i=u[0],s=u[1],m=Object(l.b)(),d=function(e){return s(Object(C.a)(Object(C.a)({},i),{},Object(f.a)({},e.target.id,e.target.value)))};return r.a.createElement(Z.a,{size:"lg",show:a,onHide:c},r.a.createElement(Z.a.Header,null,r.a.createElement(Z.a.Title,null,"Edit Content")),r.a.createElement(Z.a.Body,null,r.a.createElement(V.a,null,r.a.createElement(V.a.Group,{controlId:"title"},r.a.createElement(V.a.Label,null,"Title"),r.a.createElement(V.a.Control,{type:"text",value:i.title,onChange:d})),r.a.createElement(V.a.Group,{controlId:"description"},r.a.createElement(V.a.Label,null,"Description"),r.a.createElement(V.a.Control,{as:"textarea",rows:"5",value:i.description,onChange:d})))),r.a.createElement(Z.a.Footer,null,r.a.createElement(K.a,{variant:"primary",onClick:c},"Cancel"),r.a.createElement(K.a,{variant:"warning",onClick:function(){m(w(i)).then((function(){return m(O())})).then((function(){return c()}))}},"Save changes")))}function ee(e){var t=e.content,a=e.show,n=e.closeHandler,c=Object(l.b)();return r.a.createElement(Z.a,{show:a,onHide:n},r.a.createElement(Z.a.Header,null,r.a.createElement(Z.a.Title,null,"Delete Content")),r.a.createElement(Z.a.Body,null,"Are you sure you want to delete ",r.a.createElement("b",null,t.title),"?"),r.a.createElement(Z.a.Footer,null,r.a.createElement(K.a,{variant:"primary",onClick:n},"No, cancel"),r.a.createElement(K.a,{variant:"danger",onClick:function(){c(y(t.id)).then((function(){return c(O())})).then((function(){return n()}))}},"Yes, delete")))}function te(e){var t=e.content,a=Object(n.useState)(!1),c=Object(R.a)(a,2),o=c[0],l=c[1],u=Object(n.useState)(!1),i=Object(R.a)(u,2),s=i[0],m=i[1],d=t.title,f=t.description;return r.a.createElement(r.a.Fragment,null,r.a.createElement(_,{content:t,show:o,closeHandler:function(){return l(!1)}}),r.a.createElement(ee,{content:t,show:s,closeHandler:function(){return m(!1)}}),r.a.createElement(J.a,null,r.a.createElement(X.a,{className:"flex-fill mt-5 ml-5 mr-5"},r.a.createElement(X.a.Body,null,r.a.createElement("h4",{className:"card-title"},d),r.a.createElement("p",{className:"card-text"},f),r.a.createElement(K.a,{variant:"link",className:"float-right",onClick:function(){return l(!0)}},"Edit"),r.a.createElement(K.a,{variant:"link",className:"float-right text-danger",onClick:function(){return m(!0)}},"Delete")))))}function ae(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.content}));return Object(n.useEffect)((function(){function t(){return(t=Object(v.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e(O());case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),r.a.createElement("div",{className:"flex-wrap pt-3 pb-2 mb-3"},r.a.createElement(J.a,null,r.a.createElement("h1",{className:"h2 ml-5 mt-5"},"Your Content")),t.map((function(e){return r.a.createElement(te,{content:e,key:e.id})})))}function ne(e){var t=e.setView,a=Object(n.useState)({}),c=Object(R.a)(a,2),o=c[0],u=c[1],i=Object(l.b)(),s=function(e){return u(Object(C.a)(Object(C.a)({},o),{},Object(f.a)({},e.target.id,e.target.value)))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"h2 ml-5 mt-5"},"Add Content"),r.a.createElement(V.a,{className:"mt-5",onSubmit:function(e){e.preventDefault(),i(g(o)).then((function(){return i(O())})).then((function(){return t("dashboard")}))}},r.a.createElement(V.a.Group,{controlId:"title"},r.a.createElement(V.a.Label,null,"Title"),r.a.createElement(V.a.Control,{type:"text",value:o.title,onChange:s})),r.a.createElement(V.a.Group,{controlId:"description"},r.a.createElement(V.a.Label,null,"Dscription"),r.a.createElement(V.a.Control,{as:"textarea",rows:"5",value:o.description,onChange:s})),r.a.createElement(K.a,{type:"submit",variant:"info"},"Create")))}function re(){var e=Object(F.f)(),t=Object(n.useState)("dashboard"),a=Object(R.a)(t,2),c=a[0],o=a[1],u=Object(l.c)((function(e){return e.user.isAuthenticated}));Object(n.useEffect)((function(){u||e.push("/")}));var i=function(e){return o(e)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(q,null),r.a.createElement(z.a,{fluid:!0},r.a.createElement(J.a,null,r.a.createElement(Q,{setView:i}),r.a.createElement("main",{role:"main",className:"col-md-9 ml-sm-auto col-lg-10 px-4"},"dashboard"===c&&r.a.createElement(ae,null),"add-content"===c&&r.a.createElement(ne,{setView:i})))))}a(104);function ce(){var e=Object(l.b)();return Object(n.useEffect)((function(){localStorage.getItem("token")&&j.getUser().then((function(t){return e(I(t))}))})),r.a.createElement(T.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(F.c,null,r.a.createElement(F.a,{exact:!0,path:"/",component:P}),r.a.createElement(F.a,{exact:!0,path:"/dashboard",component:re}))))}a(105);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,{store:G},r.a.createElement(ce,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},75:function(e,t,a){e.exports=a(106)}},[[75,1,2]]]);
//# sourceMappingURL=main.925a3bec.chunk.js.map