(this["webpackJsonpc-portfolio-client"]=this["webpackJsonpc-portfolio-client"]||[]).push([[0],{141:function(e,t,a){e.exports=a(280)},277:function(e,t,a){},278:function(e,t,a){},279:function(e,t,a){},280:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(27),l=a.n(c),o=a(10);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=a(22),i=a(65),s=a(139),m=a(24),d=a.n(m),f=a(18),E=a(32),p=a(23),b=a(9),j=a.n(b),h=a(16);d.a.defaults.baseURL="https://cportfolio.herokuapp.com";var v,O=function(){return localStorage.getItem("token")},g=function(e){return localStorage.setItem("token",e)},k=function(){return localStorage.removeItem("token")},w=function(){var e=Object(h.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.post("/users/authenticate",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(h.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("/users/current");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(h.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("/content/");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(h.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.post("/content/create",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(h.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.put("".concat("/content/").concat(t.get("id")),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(h.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.delete("".concat("/content/").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(h.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.post("/profile/create",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(h.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.put("".concat("/profile/").concat(t.id),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(h.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.delete("".concat("/profile/").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(h.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("".concat("/profile/").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(h.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.put("/users/update",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=Object(p.a)("content/getContent",x),G=Object(p.a)("content/createContent",C),P=Object(p.a)("content/editContent",N),T=Object(p.a)("content/deleteContent",S),B=Object(p.b)({name:"content",initialState:[],reducers:{},extraReducers:Object(f.a)({"user/logout":function(){return[]}},A.fulfilled,(function(e,t){return Object(E.a)(t.payload.data)}))}).reducer,R=a(7),U=Object(p.a)("user/login",w),V=Object(p.a)("user/authenticate",y),K=Object(p.a)("user/update",H),M=Object(p.b)({name:"user",initialState:{isAuthenticated:null!==O()},reducers:{setUser:function(e,t){return Object(R.a)(Object(R.a)(Object(R.a)({},e),t.payload.data),{},{token:O(),isAuthenticated:!0})},logout:function(){return k(),{isAuthenticated:!1}}},extraReducers:(v={},Object(f.a)(v,U.fulfilled,(function(e,t){return g(t.payload.data.token),Object(R.a)(Object(R.a)(Object(R.a)({},e),t.payload.data),{},{isAuthenticated:!0})})),Object(f.a)(v,V.fulfilled,(function(e,t){return Object(R.a)(Object(R.a)(Object(R.a)({},e),t.payload.data),{},{isAuthenticated:!0})})),Object(f.a)(v,V.rejected,(function(){return k(),{isAuthenticated:!1}})),v)}),_=M.actions,z=_.logout,W=(_.setUser,M.reducer),Y=Object(p.a)("profile/createProfile",I),q=Object(p.a)("profile/getProfile",F),J=Object(p.a)("profile/updateProfile",L),$=Object(p.a)("profile/deleteProfile",D),Q=Object(p.b)({name:"profile",initialState:{education:[],experience:[],projects:[]},reducers:{},extraReducers:Object(f.a)({"user/logout":function(){return{}}},q.fulfilled,(function(e,t){return Object(R.a)({},t.payload.data)}))}).reducer,X=Object(u.combineReducers)({profile:Q,content:B,user:W}),Z=[i.a,function(){return function(e){return function(t){return d.a.defaults.headers.common.Authorization="Bearer ".concat(localStorage.getItem("token")),e(t)}}}],ee=[u.applyMiddleware.apply(void 0,Z)],te=s.composeWithDevTools.apply(void 0,ee),ae=Object(u.createStore)(X,{},te),ne=a(36),re=a(17),ce=a(42),le=a(15),oe=a(25),ue=a(11),ie=a(6),se=a(8);function me(e){var t=e.onLogin,a=Object(n.useState)({email:"",password:""}),c=Object(ue.a)(a,2),l=c[0],u=c[1],i=Object(o.b)(),s=function(e){return u(Object(R.a)(Object(R.a)({},l),{},Object(f.a)({},e.target.id,e.target.value)))};return r.a.createElement("div",{className:"form-box"},r.a.createElement(ie.a,{className:"login-form",onSubmit:function(e){e.preventDefault(),i(U(l)).then((function(){return t()}))}},r.a.createElement("h2",null,"Login"),r.a.createElement("hr",null),r.a.createElement(ie.a.Group,null,r.a.createElement(ie.a.Control,{type:"email",id:"email",placeholder:"Email Address",value:l.email,onChange:s,className:"form-control"})),r.a.createElement(ie.a.Group,null,r.a.createElement(ie.a.Control,{type:"password",id:"password",placeholder:"Password",value:l.password,onChange:s,className:"form-control"})),r.a.createElement(se.a,{type:"submit",variant:"primary"},"Login")))}function de(){var e=Object(re.g)();return r.a.createElement(ce.a,{fluid:!0},r.a.createElement(le.a,{className:"no-gutter"},r.a.createElement(oe.a,{className:"bg-info d-flex justify-content-center"},r.a.createElement("div",{className:"splash-container"},r.a.createElement("h1",{className:"display-3 text-white"},"cPortfolio"))),r.a.createElement(oe.a,null,r.a.createElement("div",{className:"splash-container"},r.a.createElement(me,{onLogin:function(){return e.push("/dashboard")}})))))}var fe=a(140),Ee=a(21);function pe(){var e=Object(o.b)();return r.a.createElement(fe.a,{variant:"dark",className:"fixed-top bg-dark flex-md-nowrap p-0 shadow"},r.a.createElement(Ee.a.Link,{as:ne.b,to:"/dashboard",className:"navbar-brand col-sm-3 col-md-2 mr-0"},"Dashboard"),r.a.createElement(Ee.a,{className:"px-3"},r.a.createElement(Ee.a.Item,{className:"text-nowrap"},r.a.createElement(Ee.a.Link,{as:ne.b,to:"/",onClick:function(){return e(z())}},"Sign out"))))}function be(e){var t=e.setView,a=Object(n.useState)("dashboard"),c=Object(ue.a)(a,2),l=c[0],o=c[1];return r.a.createElement(Ee.a,{className:"col-md-2 d-none d-md-block bg-light sidebar"},r.a.createElement("div",{className:"sidebar-sticky"},r.a.createElement(Ee.a,{className:"flex-column",activeKey:l,onSelect:function(e){o(e),t(e)}},r.a.createElement(Ee.a.Item,null,r.a.createElement(Ee.a.Link,{eventKey:"dashboard"},"Dashboard")),r.a.createElement(Ee.a.Item,null,r.a.createElement(Ee.a.Link,{eventKey:"profile"},"Profile")),r.a.createElement(Ee.a.Item,null,r.a.createElement(Ee.a.Link,{eventKey:"add-content"},"Add Content")),r.a.createElement(Ee.a.Item,null,r.a.createElement(Ee.a.Link,{eventKey:"add-profile"},"Add Profile")),r.a.createElement(Ee.a.Item,null,r.a.createElement(Ee.a.Link,{as:ne.b,to:"/share",eventKey:"share"},"Share View")))))}var je=a(59),he=a(57),ve=a(48),Oe=a(49);function ge(e){var t=e.tags;return r.a.createElement(r.a.Fragment,null,"tags\xa0\xa0\xa0\u203a",t.map((function(e){return r.a.createElement(r.a.Fragment,null,"\xa0\xa0\xa0",r.a.createElement(se.a,{variant:"link",className:"contentitem-tag",key:e,onClick:function(){return function(e){return console.log("'".concat(e,"' tag clicked."))}(e)}},e))})))}function ke(e){var t=e.id;return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"contentitem-visibility-dot",onMouseOver:function(){return console.log("'".concat(t,"' visibility mouse over"))}}))}var we=a(89),ye=a.n(we),xe=(a(135),a(12));function Ce(e){var t=e.content,a=e.show,c=e.closeHandler,l=Object(n.useState)(t),u=Object(ue.a)(l,2),i=u[0],s=u[1],m=Object(n.useState)(!t.content||t.content.includes("res.cloudinary.com")?"":t.content),d=Object(ue.a)(m,2),E=d[0],p=d[1],b=Object(n.useState)(),j=Object(ue.a)(b,2),h=j[0],v=j[1],O=Object(n.useState)(!1),g=Object(ue.a)(O,2),k=g[0],w=g[1],y=Object(o.b)(),x=function(e){return s(Object(R.a)(Object(R.a)({},i),{},Object(f.a)({},e.target.id,e.target.value)))};return r.a.createElement(xe.a,{size:"lg",show:a,onHide:c},r.a.createElement(xe.a.Header,null,r.a.createElement(xe.a.Title,null,"Edit Content")),r.a.createElement(xe.a.Body,null,r.a.createElement(ie.a,null,r.a.createElement(ie.a.Group,{controlId:"title"},r.a.createElement(ie.a.Label,null,"Title"),r.a.createElement(ie.a.Control,{type:"text",value:i.title,onChange:x})),r.a.createElement(ie.a.Group,{controlId:"username"},r.a.createElement(ie.a.Label,null,"Description"),r.a.createElement(ie.a.Control,{type:"text",value:i.description,onChange:x})),r.a.createElement(se.a,{variant:"primary",onClick:function(){w(!1),v("undefined")}}," Text "),r.a.createElement(se.a,{variant:"primary",onClick:function(){w(!0)}}," File "),k?r.a.createElement(ie.a.Group,{controlId:"file"},r.a.createElement(ie.a.Label,null,"File"),r.a.createElement("br",null),r.a.createElement("input",{type:"file",name:"file",onChange:function(e){return v(e.target.files[0])}})):r.a.createElement(ie.a.Group,{controlId:"content"},r.a.createElement(ie.a.Label,null,"Content"),r.a.createElement(ye.a,{modules:{toolbar:[[{header:[1,2,!1]}],["bold","italic","underline","strike","blockquote"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["link"],["clean"]]},theme:"snow",value:E,onChange:function(e){return p(e)}})))),r.a.createElement(xe.a.Footer,null,r.a.createElement(se.a,{variant:"primary",onClick:function(e){v("undefined"),c()}},"Cancel"),r.a.createElement(se.a,{variant:"warning",onClick:function(){console.log(i);var e=new FormData;for(var t in i)e.set(t,i[t]);k&&h?(e.set("file",h),e.delete("content")):k||e.set("content",E),y(P(e)).then((function(){return y(A())})).then((function(){return c()}))}},"Save changes")))}function Ne(e){var t=e.content,a=e.show,n=e.closeHandler,c=Object(o.b)();return r.a.createElement(xe.a,{show:a,onHide:n},r.a.createElement(xe.a.Header,null,r.a.createElement(xe.a.Title,null,"Delete Content")),r.a.createElement(xe.a.Body,null,"Are you sure you want to delete ",r.a.createElement("b",null,t.title),"?"),r.a.createElement(xe.a.Footer,null,r.a.createElement(se.a,{variant:"primary",onClick:n},"No, cancel"),r.a.createElement(se.a,{variant:"danger",onClick:function(){c(T(t.id)).then((function(){return c(A())})).then((function(){return n()}))}},"Yes, delete")))}var Se=a(136),Ie=a(137);function Le(e){var t=e.content,a=Object(n.useState)(!1),c=Object(ue.a)(a,2),l=c[0],o=c[1],u=Object(n.useState)(!1),i=Object(ue.a)(u,2),s=i[0],m=i[1],d=function(){return console.log("".concat(t.id," clicked."))},f=t.id,E=t.title,p=t.description,b=t.tags,j=t.displayDate,h=b.length>0,v=!1;t.content&&Se(t.content)&&Ie(t.content.split("?")[0])&&(v=!0);var O=Intl.DateTimeFormat("en-AU",{day:"2-digit",month:"long",year:"numeric"}).format(Date.parse(j));return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ce,{content:t,show:l,closeHandler:function(){return o(!1)}}),r.a.createElement(Ne,{content:t,show:s,closeHandler:function(){return m(!1)}}),r.a.createElement(le.a,null,r.a.createElement(je.a,null,v?r.a.createElement(r.a.Fragment,null,r.a.createElement(je.a.Img,{src:t.content,alt:E}),r.a.createElement(je.a.ImgOverlay,{className:"contentitem-header",onClick:d},r.a.createElement("div",{className:"contentitem-title-visibility"},r.a.createElement(ke,{id:f}),r.a.createElement("div",{className:"contentitem-title"},E)),r.a.createElement("div",{className:"contentitem-date"},O))):r.a.createElement(je.a.Header,{className:"contentitem-header",onClick:d},r.a.createElement("div",{className:"contentitem-title-visibility"},r.a.createElement(ke,{id:f}),r.a.createElement("div",{className:"contentitem-title"},E)),r.a.createElement("div",{className:"contentitem-date"},O)),r.a.createElement(je.a.Body,null,r.a.createElement("div",{className:"contentitem-container"},r.a.createElement("div",{className:"contentitem-tags"},h&&r.a.createElement(ge,{tags:b})),r.a.createElement(he.a,{alignRight:!0},r.a.createElement(he.a.Toggle,{as:ve.a,icon:Oe.c,size:"lg"}),r.a.createElement(he.a.Menu,{alignRight:!0},r.a.createElement(he.a.Item,{onClick:function(){return o(!0)}},"Edit"),r.a.createElement(he.a.Item,{onClick:function(){return m(!0)}},"Delete")))),r.a.createElement("h3",null,"Description"),r.a.createElement("p",{className:"card-text"},p)))))}function De(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.content})),a=Object(o.c)((function(e){return e.user}));return Object(n.useEffect)((function(){function t(){return(t=Object(h.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e(A());case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),r.a.createElement("div",{className:"flex-wrap pt-3 pb-2 mb-3"},r.a.createElement(le.a,null,r.a.createElement("h1",{className:"h2 ml-5 mt-5"},a.username,"'s Content")),t.map((function(e){return r.a.createElement(Le,{content:e,key:e.id})})))}function Fe(e){var t=e.setView,a=Object(n.useState)({}),c=Object(ue.a)(a,2),l=c[0],u=c[1],i=Object(n.useState)(""),s=Object(ue.a)(i,2),m=s[0],d=s[1],E=Object(n.useState)(),p=Object(ue.a)(E,2),b=p[0],j=p[1],h=Object(n.useState)(!1),v=Object(ue.a)(h,2),O=v[0],g=v[1],k=Object(o.b)(),w=function(e){return u(Object(R.a)(Object(R.a)({},l),{},Object(f.a)({},e.target.id,e.target.value)))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"h2 ml-5 mt-5"},"Add Content"),r.a.createElement(ie.a,{className:"mt-5",onSubmit:function(e){e.preventDefault();var a=new FormData;for(var n in l)a.set(n,l[n]);O&&b?a.set("file",b):O||a.set("content",m),k(G(a)).then((function(){return k(A())})).then((function(){return t("dashboard")}))}},r.a.createElement(ie.a.Group,{controlId:"title"},r.a.createElement(ie.a.Label,null,"Title"),r.a.createElement(ie.a.Control,{type:"text",value:l.title,onChange:w})),r.a.createElement(ie.a.Group,{controlId:"description"},r.a.createElement(ie.a.Label,null,"Description"),r.a.createElement(ie.a.Control,{as:"textarea",rows:"5",value:l.description,onChange:w})),r.a.createElement(se.a,{variant:"primary",onClick:function(){return g(!1)}}," Text "),r.a.createElement(se.a,{variant:"primary",onClick:function(){return g(!0)}}," File "),O?r.a.createElement(ie.a.Group,{controlId:"file"},r.a.createElement(ie.a.Label,null,"File"),r.a.createElement("br",null),r.a.createElement("input",{type:"file",name:"file",onChange:function(e){return j(e.target.files[0])}})):r.a.createElement(ie.a.Group,{controlId:"content"},r.a.createElement(ie.a.Label,null,"Content"),r.a.createElement(ye.a,{modules:{toolbar:[[{header:[1,2,!1]}],["bold","italic","underline","strike","blockquote"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["link"],["clean"]]},theme:"snow",value:m,onChange:function(e){return d(e)}})),r.a.createElement(se.a,{type:"submit",variant:"info"},"Create")))}var He=a(47),Ae=a(58),Ge=a(50);function Pe(e){var t=e.profile,a=e.show,c=e.closeHandler,l=Object(n.useState)(t),u=Object(ue.a)(l,2),i=u[0],s=u[1],m=Object(n.useState)(t.education),d=Object(ue.a)(m,2),f=d[0],p=d[1],b=Object(n.useState)(t.experience),j=Object(ue.a)(b,2),h=j[0],v=j[1],O=Object(n.useState)(t.projects),g=Object(ue.a)(O,2),k=g[0],w=g[1],y=Object(o.b)();console.log(k),console.log(t);var x=function(e){var t=Object(E.a)(f);t[e.target.id]=e.target.value,p(t),s(Object(R.a)(Object(R.a)({},i),{},{education:t}))},C=function(e){var t=Object(E.a)(h);t[e.target.id]=e.target.value,v(t),s(Object(R.a)(Object(R.a)({},i),{},{experience:t}))},N=function(e){var t=Object(E.a)(k);t[e.target.id]=e.target.value,w(t),s(Object(R.a)(Object(R.a)({},k),{},{projects:t}))};return r.a.createElement(xe.a,{size:"lg",show:a,onHide:c},r.a.createElement(xe.a.Header,null,r.a.createElement(xe.a.Title,null,"Edit Profile")),r.a.createElement(xe.a.Body,null,r.a.createElement(ie.a,null,r.a.createElement(ie.a.Group,{controlId:"education"},r.a.createElement(ie.a.Label,null,"Education")),f.map((function(e,t){return r.a.createElement(ie.a.Group,{controlId:t},r.a.createElement(Ge.a,{className:"mb-3"},r.a.createElement(ie.a.Control,{as:"textarea",rows:"1",value:e,onChange:x}),r.a.createElement(Ge.a.Append,null,r.a.createElement(se.a,{variant:"outline-secondary",id:t,onClick:function(e){return function(e){var t=Object(E.a)(f);t.splice(e,1),p(t),s(Object(R.a)(Object(R.a)({},i),{},{education:t}))}(t)}},"Delete"))))})),r.a.createElement(se.a,{onClick:function(){var e=[].concat(Object(E.a)(f),[""]);p(e),s(Object(R.a)(Object(R.a)({},i),{},{education:e}))}},"Add Education"),r.a.createElement(ie.a.Group,{className:"mt-3",controlId:"experience"},r.a.createElement(ie.a.Label,null,"Experience")),h.map((function(e,t){return r.a.createElement(ie.a.Group,{controlId:t},r.a.createElement(Ge.a,{className:"mb-3"},r.a.createElement(ie.a.Control,{as:"textarea",rows:"1",value:e,onChange:C}),r.a.createElement(Ge.a.Append,null,r.a.createElement(se.a,{variant:"outline-secondary",id:t,onClick:function(e){return function(e){var t=Object(E.a)(h);t.splice(e,1),v(t),s(Object(R.a)(Object(R.a)({},i),{},{experience:t}))}(t)}},"Delete"))))})),r.a.createElement(se.a,{onClick:function(){var e=[].concat(Object(E.a)(h),[""]);v(e),s(Object(R.a)(Object(R.a)({},i),{},{experience:e}))}},"Add Experience"),r.a.createElement(ie.a.Group,{className:"mt-3",controlId:"projects"},r.a.createElement(ie.a.Label,null,"Projects")),k.map((function(e,t){return r.a.createElement(ie.a.Group,{controlId:t},r.a.createElement(Ge.a,{className:"mb-3"},r.a.createElement(ie.a.Control,{as:"textarea",rows:"1",value:"McWorking on it",onChange:N}),r.a.createElement(Ge.a.Append,null,r.a.createElement(se.a,{variant:"outline-secondary",id:t,onClick:function(e){return function(e){var t=Object(E.a)(k);t.splice(e,1),w(t),s(Object(R.a)(Object(R.a)({},i),{},{projects:t}))}(t)}},"Delete"))))})),r.a.createElement(se.a,{onClick:function(){var e=[].concat(Object(E.a)(k),[""]);console.log(e),w(e),s(Object(R.a)(Object(R.a)({},i),{},{projects:e}))}},"Add Project"))),r.a.createElement(xe.a.Footer,null,r.a.createElement(se.a,{variant:"primary",onClick:c},"Cancel"),r.a.createElement(se.a,{variant:"warning",onClick:function(){y(J(i)).then((function(){return y(q(i.id))})).then((function(){return c()}))}},"Save changes")))}function Te(e){var t=e.profile,a=e.show,n=e.closeHandler,c=Object(o.b)();return r.a.createElement(xe.a,{show:a,onHide:n},r.a.createElement(xe.a.Header,null,r.a.createElement(xe.a.Title,null,"Delete Profile")),r.a.createElement(xe.a.Body,null,"Are you sure you want to delete your profile ",r.a.createElement("b",null,t.email),"?"),r.a.createElement(xe.a.Footer,null,r.a.createElement(se.a,{variant:"primary",onClick:n},"No, cancel"),r.a.createElement(se.a,{variant:"danger",onClick:function(){c($(t.id)).then((function(){return c(q())})).then((function(){return n()}))}},"Yes, delete")))}function Be(e){var t=e.profile,a=e.projects,c=Object(n.useState)(!1),l=Object(ue.a)(c,2),o=l[0],u=l[1],i=Object(n.useState)(!1),s=Object(ue.a)(i,2),m=s[0],d=s[1],f=t.logo,E=t.education,p=t.experience;return r.a.createElement(r.a.Fragment,null,r.a.createElement(se.a,{variant:"link",className:"float-right",onClick:function(){return u(!0)}},"Edit"),r.a.createElement(se.a,{variant:"link",className:"float-right text-danger",onClick:function(){return d(!0)}},"Delete"),r.a.createElement(Pe,{profile:t,show:o,closeHandler:function(){return u(!1)}}),r.a.createElement(Te,{profile:t,show:m,closeHandler:function(){return d(!1)}}),r.a.createElement(ce.a,null,r.a.createElement(le.a,null,r.a.createElement(oe.a,{className:"mt-3 ml-5 mr-5"},r.a.createElement(He.a,{src:f,roundedCircle:!0,fluid:!0})))),r.a.createElement(le.a,null,r.a.createElement(Ae.a,{className:"mt-3 ml-5 mr-5"},r.a.createElement("h4",{className:"mt-3 mb-5"},"Education"),r.a.createElement("div",{className:"card-education"},E.map((function(e){return r.a.createElement(Ae.a.Item,{className:"flex-fill ml-4 mr-5",key:e},e)}))))),r.a.createElement(le.a,null,r.a.createElement(Ae.a,{className:"mt-3 ml-5 mr-5"},r.a.createElement("h4",{className:"mt-3 mb-5"},"Experience"),r.a.createElement("div",{className:"card-experience"},p.map((function(e){return r.a.createElement(Ae.a.Item,{className:"flex-fill ml-4 mr-5",key:e},e)}))))),r.a.createElement(le.a,null,r.a.createElement(Ae.a,{className:"mt-5 ml-5 mr-5"},r.a.createElement("h4",null,"Projects"),r.a.createElement("div",{className:"card-projects"},a.map((function(e){return r.a.createElement(Le,{content:e})}))))))}function Re(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.user})),a=Object(o.c)((function(e){return e.profile})),c=Object(o.c)((function(e){return e.content}));return Object(n.useEffect)((function(){function a(){return(a=Object(h.a)(j.a.mark((function a(){return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:e(q(t.profile));case 1:case"end":return a.stop()}}),a)})))).apply(this,arguments)}!function(){a.apply(this,arguments)}()})),r.a.createElement("div",{className:"flex-wrap pt-3 pb-2 mb-3"},r.a.createElement(le.a,null,r.a.createElement("h1",{className:"h2 ml-5 mt-5"},"Your Profile")),r.a.createElement(Be,{profile:a,projects:c}))}function Ue(e){var t=e.setView,a=Object(n.useState)({}),c=Object(ue.a)(a,2),l=c[0],u=c[1],i=Object(o.b)(),s=function(e){return u(Object(R.a)(Object(R.a)({},l),{},Object(f.a)({},e.target.id,e.target.value)))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"h2 ml-5 mt-5"},"Add Profile"),r.a.createElement(ie.a,{className:"mt-5",onSubmit:function(e){e.preventDefault(),i(Y(l)).then((function(){return i(q())})).then((function(){return t("dashboard")}))}},r.a.createElement(ie.a.Group,{controlId:"education"},r.a.createElement(ie.a.Label,null,"Education"),r.a.createElement(ie.a.Control,{type:"textarea",rows:"5",value:l.education,onChange:s})),r.a.createElement(ie.a.Group,{controlId:"experience"},r.a.createElement(ie.a.Label,null,"Experience"),r.a.createElement(ie.a.Control,{as:"textarea",rows:"5",value:l.experience,onChange:s})),r.a.createElement(ie.a.Group,{controlId:"projects"},r.a.createElement(ie.a.Label,null,"Projects"),r.a.createElement(ie.a.Control,{as:"textarea",rows:"5",value:l.projects,onChange:s})),r.a.createElement(se.a,{type:"submit",variant:"info"},"Create")))}function Ve(e){var t=e.show,a=e.closeHandler,c=e.user,l=Object(o.c)((function(e){return e.user})),u=Object(n.useState)(c),i=Object(ue.a)(u,2),s=i[0],m=i[1],d=Object(o.b)(),E=function(e){return m(Object(R.a)(Object(R.a)({},s),{},Object(f.a)({},e.target.id,e.target.value)))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(xe.a,{show:t,onHide:a},r.a.createElement(xe.a.Header,null,r.a.createElement(xe.a.Title,null,"Edit User Details")),r.a.createElement(xe.a.Body,null,r.a.createElement(He.a,{src:l.avatar,alt:"Hello Darkness",roundedCircle:!0,className:"rounded mx-auto d-block"}),r.a.createElement(ie.a,null,r.a.createElement(ie.a.Group,{controlId:"username"},r.a.createElement(ie.a.Label,null,"Username"),r.a.createElement(ie.a.Control,{as:"textarea",rows:"1",value:s.username,onChange:E})),r.a.createElement(ie.a.Group,{controlId:"firstName"},r.a.createElement(ie.a.Label,null,"First Name"),r.a.createElement(ie.a.Control,{as:"textarea",rows:"1",value:s.firstName,onChange:E})),r.a.createElement(ie.a.Group,{controlId:"lastName"},r.a.createElement(ie.a.Label,null,"Last Name"),r.a.createElement(ie.a.Control,{as:"textarea",rows:"1",value:s.lastName,onChange:E})))),r.a.createElement(xe.a.Footer,null,r.a.createElement(se.a,{variant:"link",onClick:function(){m(l),console.log(s),console.log(l)}},"Reset Changes"),r.a.createElement(se.a,{variant:"warning",onClick:function(){d(K(s)).then(a)}},"Save changes"),r.a.createElement(se.a,{variant:"link",onClick:a},"Cancel"))))}function Ke(){var e=Object(o.b)(),t=Object(n.useState)("dashboard"),a=Object(ue.a)(t,2),c=a[0],l=a[1],u=Object(n.useState)(!1),i=Object(ue.a)(u,2),s=i[0],m=i[1],d=Object(o.c)((function(e){return e.user}));Object(n.useEffect)((function(){function t(){return(t=Object(h.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e(q(d.profile));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}));var f=function(e){return l(e)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(pe,null),r.a.createElement(ce.a,{fluid:!0},r.a.createElement(le.a,null,r.a.createElement(be,{setView:f}),r.a.createElement("main",{role:"main",className:"col-md-9 ml-sm-auto col-lg-10 px-4"},r.a.createElement(se.a,{variant:"link",className:"float-right",onClick:function(){return m(!0)}},"User Details"),"dashboard"===c&&r.a.createElement(De,null),"add-content"===c&&r.a.createElement(Fe,{setView:f}),"profile"===c&&r.a.createElement(Re,null),"add-profile"===c&&r.a.createElement(Ue,{setView:f}))),r.a.createElement(Ve,{show:s,closeHandler:function(){return m(!1)},user:d})))}var Me=a(83),_e=(a(277),a(136)),ze=a(137);function We(){var e=Object(o.c)((function(e){return e})),t=e.user,a=e.profile,c=e.content,l=Object(n.useState)(c.map((function(e){return Object(R.a)(Object(R.a)({},e),{},{expand:!1})}))),u=Object(ue.a)(l,2),i=u[0],s=u[1],m=function(e){return e?_e(e)?ze(e.split("?")[0])?"image":"url":"text":null};return r.a.createElement(r.a.Fragment,null,r.a.createElement(se.a,{as:ne.b,to:"/dashboard",variant:"link",className:"return"},"Back to dashboard"),r.a.createElement(ce.a,{className:"share"},r.a.createElement(le.a,null,r.a.createElement(oe.a,{xs:"auto"},r.a.createElement(He.a,{roundedCircle:!0,className:"logo",src:a.logo})),r.a.createElement(oe.a,null,r.a.createElement(le.a,{className:"name"},t.firstName," ",t.lastName),r.a.createElement(le.a,{className:"bio"},r.a.createElement(oe.a,null,r.a.createElement("h6",null,"Experience"),a.experience.map((function(e){return r.a.createElement("p",{className:"bio-item"},e)}))),r.a.createElement(oe.a,null,r.a.createElement("h6",null,"Education"),a.education.map((function(e){return r.a.createElement("p",{className:"bio-item"},e)})))),r.a.createElement(le.a,{className:"links"},r.a.createElement(se.a,{as:"a",href:a.resume,target:"_blank",variant:"link"},r.a.createElement(ve.a,{icon:Oe.e})," Resume"),r.a.createElement(se.a,{as:"a",href:"mailto:".concat(t.email),variant:"link"},r.a.createElement(ve.a,{icon:Oe.d})," ",t.email)))),r.a.createElement(le.a,null,i.map((function(e){return r.a.createElement(le.a,{key:e.id,className:"project"},r.a.createElement(le.a,null,r.a.createElement(oe.a,{xs:"auto",className:"date"},(t=e.displayDate,Intl.DateTimeFormat("en-AU",{day:"2-digit",month:"long",year:"numeric"}).format(Date.parse(t)))),r.a.createElement(oe.a,null,r.a.createElement(le.a,{className:"title"},e.title),r.a.createElement(le.a,{className:"description"},e.description),r.a.createElement(se.a,{variant:"link",onClick:function(){return t=e.id,s(i.map((function(e){return e.id===t?Object(R.a)(Object(R.a)({},e),{},{expand:!e.expand}):e})));var t}},e.expand&&r.a.createElement(r.a.Fragment,null,"Hide project ",r.a.createElement(ve.a,{icon:Oe.b})),!e.expand&&r.a.createElement(r.a.Fragment,null,"Show project ",r.a.createElement(ve.a,{icon:Oe.a}))))),r.a.createElement(Me.a,{in:e.expand},r.a.createElement(le.a,null,"text"===m(e.content)&&r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.content}}),"image"===m(e.content)&&r.a.createElement("a",{href:e.content,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(He.a,{src:e.content})),"url"===m(e.content)&&r.a.createElement("a",{href:e.content,target:"_blank",rel:"noopener noreferrer"},"External link"))),r.a.createElement("hr",null));var t})))))}a(278);function Ye(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.user.isAuthenticated}));return Object(n.useEffect)((function(){function a(){return(a=Object(h.a)(j.a.mark((function a(){return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:console.log(t),console.log(O()),null!==O()&&e(V());case 3:case"end":return a.stop()}}),a)})))).apply(this,arguments)}!function(){a.apply(this,arguments)}()})),r.a.createElement(ne.a,null,r.a.createElement(re.d,null,r.a.createElement(re.b,{exact:!0,path:"/"},r.a.createElement(de,null)),r.a.createElement(qe,{exact:!0,path:"/dashboard",test:t,fallback:"/"},r.a.createElement(Ke,null)),r.a.createElement(re.b,{path:"/share"},r.a.createElement(We,null))))}var qe=function(e){var t=e._props,a=e.children,n=e.test,c=e.fallback;return r.a.createElement(re.b,Object.assign({},t,{render:function(){return n?a:r.a.createElement(re.a,{to:{pathname:c}})}}))};a(279);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{store:ae},r.a.createElement(Ye,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[141,1,2]]]);
//# sourceMappingURL=main.82bfdb1f.chunk.js.map