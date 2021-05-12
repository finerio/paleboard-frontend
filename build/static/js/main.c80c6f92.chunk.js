(this["webpackJsonpreact-redux-bootstrap-jwt-template"]=this["webpackJsonpreact-redux-bootstrap-jwt-template"]||[]).push([[0],{143:function(e,t,n){},146:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(22),c=n.n(a),r=(n(82),n(83),n(7)),o=n(10),i=n(3),l=function(e){return e.user.token},u=function(e){return e.user},j=function(e){return e.user.socket},d=n(8),p=n.n(d),b=n(15),O=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_URL||"http://localhost:4000",h="http://localhost:4000",f=n(12),g=n.n(f),m=n(45),x="APP_LOADING",v="APP_DONE_LOADING",S="SET_MESSAGE",y="CLEAR_MESSAGE",k=function(){return{type:x}},w=function(){return{type:v}},C=function(){return{type:y}},E=function(e,t,n){return{type:S,payload:{variant:e,dismissable:t,text:n}}},I=function(e,t,n,s){return function(a){a(E(e,t,n)),setTimeout((function(){return a(C())}),s||3e3)}},_="LOGIN_SUCCESS",P="TOKEN_STILL_VALID",T="LOG_OUT",N=function(e){return{type:_,payload:e}},A=function(){return{type:T}},D=n(1);function B(){var e=Object(i.b)(),t=Object(i.c)(l),n=Object(i.c)(u);return Object(D.jsxs)("div",{children:[Object(D.jsx)(o.c,{to:"/",exact:!0,children:"paleboard"})," | ",Object(D.jsx)("span",{children:t?n.email:" "})," "," | "," ",t?Object(D.jsx)("button",{onClick:function(){return e(A())},children:"Logout"}):" "]})}var L=n(73);n(143);function R(){return Object(D.jsx)("div",{className:"loading_spinner",children:Object(D.jsx)(L.a,{animation:"border",role:"status",children:Object(D.jsx)("span",{className:"sr-only",children:"Loading..."})})})}var F=function(e){return e.appState.loading},U=function(e){return e.appState.message},H=n(149);function q(){var e=Object(i.c)(U),t=Object(i.b)(),n=null!==e;return n?Object(D.jsx)(H.a,{show:n,variant:e.variant,dismissible:e.dismissable,onClose:e.dismissable?function(){return t(C())}:null,children:e.text}):null}var W=n(6),G="FETCH_THERAPISTS_SUCCESS",X=function(e){return e.therapists.allTherapists};function V(){var e=Object(i.c)(X),t=Object(s.useState)(""),n=Object(W.a)(t,2),a=n[0],c=n[1],j=Object(s.useState)(""),d=Object(W.a)(j,2),f=d[0],x=d[1],v=Object(s.useState)(""),S=Object(W.a)(v,2),y=S[0],C=S[1],_=Object(s.useState)("patient"),P=Object(W.a)(_,2),T=P[0],A=P[1],B=Object(s.useState)(""),L=Object(W.a)(B,2),R=L[0],F=L[1],U=Object(s.useState)(!1),H=Object(W.a)(U,2),q=H[0],V=H[1],Y=Object(i.b)(),z=Object(i.c)(l),K=Object(i.c)(u),M=Object(r.f)();return e&&e.length>0&&!q&&(F(e[0].id),V(!0)),Object(s.useEffect)((function(){null!==z&&(K.therapistId?M.push("/wait-for-session"):M.push("/create-session")),Y(function(){var e=Object(b.a)(p.a.mark((function e(t,n){var s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(k()),e.prev=1,e.next=4,g.a.get("".concat(O,"/therapists"));case 4:s=e.sent,console.log("response.data",s.data),t((n=s.data,{type:G,payload:n})),t(w()),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),e.t0.response?(console.log(e.t0.response.data.message),t(E("danger",!0,e.t0.response.data.message))):(console.log(e.t0.message),t(E("danger",!0,e.t0.message))),t(w());case 14:case"end":return e.stop()}var n}),e,null,[[1,10]])})));return function(t,n){return e.apply(this,arguments)}}())}),[z,M,K.therapistId,Y]),Object(D.jsx)("div",{children:Object(D.jsxs)("form",{className:"mt-5",children:[Object(D.jsx)("h1",{className:"mt-5 mb-5",children:"Signup"}),Object(D.jsx)("label",{children:"Role: "}),Object(D.jsx)("p",{}),Object(D.jsxs)("div",{type:"radio",name:"role",defaultValue:"patient",onChange:function(e){return A(e.target.value)},children:[Object(D.jsx)("input",{type:"radio",value:"patient",name:"role",defaultChecked:!0}),Object(D.jsx)("label",{children:"Patient"})," ",Object(D.jsx)("input",{type:"radio",value:"therapist",name:"role"}),Object(D.jsx)("label",{children:"Therapist"})]})," ",Object(D.jsx)("p",{}),Object(D.jsxs)("fieldset",{controlid:"formBasicName",children:[Object(D.jsx)("label",{children:"Name"}),Object(D.jsx)("input",{value:a,onChange:function(e){return c(e.target.value)},type:"text",placeholder:"Enter name",required:!0})]}),Object(D.jsxs)("fieldset",{controlid:"formBasicEmail",children:[Object(D.jsx)("label",{children:"Email address"}),Object(D.jsx)("input",{value:f,onChange:function(e){return x(e.target.value)},type:"email",placeholder:"Enter email",required:!0}),Object(D.jsx)("p",{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(D.jsxs)("fieldset",{controlid:"formBasicPassword",children:[Object(D.jsx)("label",{children:"Password"}),Object(D.jsx)("input",{value:y,onChange:function(e){return C(e.target.value)},type:"password",placeholder:"Password",required:!0})]}),"patient"===T&&Object(D.jsxs)("div",{children:[Object(D.jsx)("label",{children:"Select therapist:"}),Object(D.jsx)("select",{onChange:function(e){F(e.target.value)},value:R,children:e.map((function(e){return Object(D.jsx)("option",{value:e.id,children:e.name},e.id)}))}),Object(D.jsx)("p",{})]}),Object(D.jsx)("fieldset",{className:"mt-5",children:Object(D.jsx)("button",{variant:"primary",type:"submit",onClick:function(t){t.preventDefault(),Y(function(e,t,n,s,a){return function(){var c=Object(b.a)(p.a.mark((function c(r,o){var i,l;return p.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(r(k()),c.prev=1,i=null,"patient"!==s){c.next=9;break}return c.next=6,g.a.post("".concat(O,"/signup-patient"),{name:e,email:t,password:n,therapistId:a});case 6:i=c.sent,c.next=12;break;case 9:return c.next=11,g.a.post("".concat(O,"/signup-therapist"),{name:e,email:t,password:n});case 11:i=c.sent;case 12:l=Object(m.io)(h,{transports:["websocket"]}),i.data.socket=l,r(N(i.data)),r(I("success",!0,"account created")),r(w()),c.next=23;break;case 19:c.prev=19,c.t0=c.catch(1),c.t0.response?(console.log(c.t0.response.data.message),r(E("danger",!0,c.t0.response.data.message))):(console.log(c.t0.message),r(E("danger",!0,c.t0.message))),r(w());case 23:case"end":return c.stop()}}),c,null,[[1,19]])})));return function(e,t){return c.apply(this,arguments)}}()}(a,f,y,T,R)),x(""),C(""),c(""),A("patient"),F(e[0].id)},children:"Sign up"})}),Object(D.jsx)(o.b,{to:"/login",children:"Click here to log in"})]})})}function Y(){var e=Object(s.useState)(""),t=Object(W.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)(""),j=Object(W.a)(c,2),d=j[0],f=j[1],x=Object(s.useState)("patient"),v=Object(W.a)(x,2),S=v[0],y=v[1],C=Object(i.b)(),_=Object(i.c)(l),P=Object(i.c)(u),T=Object(r.f)();return Object(s.useEffect)((function(){null!==_&&(P.therapistId?T.push("/wait-for-session"):T.push("/create-session"))}),[_,T,P.therapistId]),Object(D.jsx)("div",{children:Object(D.jsxs)("form",{children:[Object(D.jsx)("h1",{className:"mt-5 mb-5",children:"Login"}),Object(D.jsxs)("fieldset",{controlid:"formBasicEmail",children:[Object(D.jsx)("label",{children:"Role: "}),Object(D.jsx)("p",{}),Object(D.jsxs)("div",{type:"radio",name:"role",defaultValue:"patient",onChange:function(e){return y(e.target.value)},children:[Object(D.jsx)("input",{type:"radio",value:"patient",name:"role",defaultChecked:!0}),Object(D.jsx)("label",{children:"Patient"})," ",Object(D.jsx)("input",{type:"radio",value:"therapist",name:"role"}),Object(D.jsx)("label",{children:"Therapist"})]})," ",Object(D.jsx)("p",{}),Object(D.jsx)("label",{children:"Email address"}),Object(D.jsx)("input",{value:n,onChange:function(e){return a(e.target.value)},type:"email",placeholder:"Enter email",required:!0})]}),Object(D.jsxs)("fieldset",{controlid:"formBasicPassword",children:[Object(D.jsx)("label",{children:"Password"}),Object(D.jsx)("input",{value:d,onChange:function(e){return f(e.target.value)},type:"password",placeholder:"Password",required:!0})]}),Object(D.jsx)("fieldset",{className:"mt-5",children:Object(D.jsx)("button",{variant:"primary",type:"submit",onClick:function(e){e.preventDefault(),C(function(e,t,n){return function(){var s=Object(b.a)(p.a.mark((function s(a,c){var r,o;return p.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return a(k()),s.prev=1,s.next=4,g.a.post("".concat(O,"/login-").concat(n),{email:e,password:t});case 4:r=s.sent,o=Object(m.io)(h,{transports:["websocket"]}),console.log("socket",o),r.data.socket=o,a(N(r.data)),a(I("success",!1,"welcome back!",1500)),a(w()),s.next=17;break;case 13:s.prev=13,s.t0=s.catch(1),s.t0.response?(console.log(s.t0.response.data.message),a(E("danger",!0,s.t0.response.data.message))):(console.log(s.t0.message),a(E("danger",!0,s.t0.message))),a(w());case 17:case"end":return s.stop()}}),s,null,[[1,13]])})));return function(e,t){return s.apply(this,arguments)}}()}(n,d,S)),a(""),f(""),y("patient")},children:"Log in"})}),Object(D.jsx)(o.b,{to:"/signup",style:{textAlign:"center"},children:"Click here to sign up"})]})})}function z(){return Object(D.jsxs)("div",{children:[Object(D.jsx)("h1",{children:"Home"}),Object(D.jsx)("span",{children:"Please "}),Object(D.jsx)(o.b,{to:"/login",children:"log in"}),Object(D.jsx)("span",{children:" or "}),Object(D.jsx)(o.b,{to:"/signup",children:"sign up"}),Object(D.jsx)("span",{children:" to begin"})]})}var K=n(36),M=n.n(K),J=function(e){return e.session.id},$=function(e){return e.session};function Q(){var e=Object(r.f)(),t=Object(i.c)(j),n=Object(i.c)($),a=Object(i.c)(u),c=n.id,o=n.patientId,l=Object(s.useState)(!1),d=Object(W.a)(l,2),p=d[0],b=d[1],O=Object(s.useState)(!1),h=Object(W.a)(O,2),f=h[0],g=h[1];return f||(t&&(console.log("sending session message, sessionId = ",c),t.emit("session",c)),g(!0)),Object(s.useEffect)((function(){a.token||e.push("/"),c||e.push("/create-session")}),[c,e,a]),t&&t.on("sessionRequest",(function(e){console.log("sessionRequestHandler( patientId = ",e),console.log("sessionPatientId",o),console.log("sessionRequestAnswered",p),console.log("sessionId",c),!1===p&&(o===e&&(console.log("sessionPatientId === patientId"),console.log("sending session message, sessionId = ",c),t.emit("session",c)),b(!0))})),Object(D.jsxs)("div",{children:[Object(D.jsx)("h1",{children:"Therapist view"}),Object(D.jsx)(M.a,{sketch:function(e){e.setup=function(){e.createCanvas(1030,730),e.background(n.backgroundColor)},e.mouseDragged=function(){var s={x:e.mouseX,y:e.mouseY};t&&t.emit("mouse",s),e.noStroke(),e.fill(n.therapistBrushColor),e.ellipse(e.mouseX,e.mouseY,20,20)},e.newDrawing=function(t){e.fill(n.patientBrushColor),e.ellipse(t.x,t.y,20,20)},t&&t.on("mouse",e.newDrawing)}})]})}function Z(){var e=Object(r.f)(),t=Object(i.c)($),n=t.id,a=Object(i.c)(j),c=Object(i.c)(u);return Object(s.useEffect)((function(){c.token?n||(console.log("sending to wait-for-session"),e.push("/wait-for-session")):(console.log("sending to homepage"),e.push("/"))}),[n,e,c.token]),Object(D.jsxs)("div",{children:[Object(D.jsx)("h1",{children:"Patient view"}),Object(D.jsx)(M.a,{sketch:function(e){e.setup=function(){e.createCanvas(1030,730),e.background(t.backgroundColor)},e.mouseDragged=function(){var n={x:e.mouseX,y:e.mouseY};a&&a.emit("mouse",n),e.noStroke(),e.fill(t.patientBrushColor),e.ellipse(e.mouseX,e.mouseY,20,20)},e.newDrawing=function(n){e.noStroke(),e.fill(t.therapistBrushColor),e.ellipse(n.x,n.y,20,20)},a&&a.on("mouse",e.newDrawing)}})]})}var ee=function(e){return e.patients.myPatients},te="FETCH_MY_PATIENTS_SUCCESS",ne="CREATE_SESSION_SUCCESS",se="FETCH_SESSION_SUCCESS",ae="DELETE_SESSION_SUCCESS";function ce(){var e=Object(i.b)(),t=Object(r.f)(),n=Object(i.c)(ee),a=Object(i.c)(J),c=Object(i.c)(u),o=Object(s.useState)(""),l=Object(W.a)(o,2),j=l[0],d=l[1],h=Object(s.useState)(!1),f=Object(W.a)(h,2),m=f[0],x=f[1],v=Object(s.useState)("#F0E6DF"),S=Object(W.a)(v,2),y=S[0],C=S[1],I=Object(s.useState)("#FFFFFF"),_=Object(W.a)(I,2),P=_[0],T=_[1],N=Object(s.useState)("#000000"),A=Object(W.a)(N,2),B=A[0],L=A[1];return n&&n.length>0&&!m&&(d(n[0].id),x(!0)),Object(s.useEffect)((function(){c.token?a?t.push("/session-therapist"):e(function(){var e=Object(b.a)(p.a.mark((function e(t,n){var s,a,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(k()),s=u(n()),a=s.token,e.prev=2,e.next=5,g.a.get("".concat(O,"/patients/all-my"),{headers:{Authorization:"Bearer ".concat(a)}});case 5:c=e.sent,console.log("response.data",c.data),t((r=c.data,{type:te,payload:r})),t(w()),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),e.t0.response?(console.log(e.t0.response.data.message),t(E("danger",!0,e.t0.response.data.message))):(console.log(e.t0.message),t(E("danger",!0,e.t0.message))),t(w());case 15:case"end":return e.stop()}var r}),e,null,[[2,11]])})));return function(t,n){return e.apply(this,arguments)}}()):t.push("/")}),[e,a,t,c.token]),console.log("myPatients",n),Object(D.jsxs)("div",{children:[Object(D.jsx)("h1",{children:"Create Session"}),Object(D.jsx)("label",{children:"Select patient:"})," ",Object(D.jsx)("select",{onChange:function(e){d(e.target.value)},value:j,children:n.map((function(e){return Object(D.jsx)("option",{value:e.id,children:e.name},e.id)}))}),Object(D.jsx)("p",{}),Object(D.jsx)("label",{children:"Background color: "})," ",Object(D.jsx)("input",{type:"color",value:y,onChange:function(e){C(e.target.value)}}),Object(D.jsx)("p",{}),Object(D.jsx)("label",{children:"Therapist brush color: "})," ",Object(D.jsx)("input",{type:"color",value:P,onChange:function(e){T(e.target.value)}}),Object(D.jsx)("p",{}),Object(D.jsx)("label",{children:"Patient brush color: "})," ",Object(D.jsx)("input",{type:"color",value:B,onChange:function(e){L(e.target.value)}}),Object(D.jsx)("p",{}),Object(D.jsx)("button",{onClick:function(t){t.preventDefault(),console.log("selectedPatient",j),e(function(e,t,n,s){return function(){var a=Object(b.a)(p.a.mark((function a(c,r){var o,i,l;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c(k()),o=u(r()),i=o.token,a.prev=2,a.next=5,g.a.post("".concat(O,"/session"),{patientId:e,backgroundColor:t,therapistBrushColor:n,patientBrushColor:s},{headers:{Authorization:"Bearer ".concat(i)}});case 5:l=a.sent,console.log("response.data",l.data),c((j=l.data.session,{type:ne,payload:j})),c(w()),a.next=15;break;case 11:a.prev=11,a.t0=a.catch(2),a.t0.response?(console.log(a.t0.response.data.message),c(E("danger",!0,a.t0.response.data.message))):(console.log(a.t0.message),c(E("danger",!0,a.t0.message))),c(w());case 15:case"end":return a.stop()}var j}),a,null,[[2,11]])})));return function(e,t){return a.apply(this,arguments)}}()}(j,y,P,B))},children:"Begin Session"})]})}function re(){var e=Object(i.b)(),t=Object(r.f)(),n=Object(i.c)($).id,a=Object(i.c)(u),c=Object(i.c)(j),o=Object(s.useState)(!1),l=Object(W.a)(o,2),d=l[0],h=l[1];return Object(s.useEffect)((function(){console.log("fetchedSessionId",n),a.token?n&&t.push("/session-patient"):t.push("/")}),[e,n,t,a.token]),c&&(c.on("session",(function(t){console.log("sessionStartedHandler(sessionId = ",t),console.log("fetchedSessionId",n),null===n&&(console.log("fetchedSessionId is null, fetchedSessionId = fetchedSessionId"),t&&e(function(e){return function(){var t=Object(b.a)(p.a.mark((function t(n,s){var a,c,r,o;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=J(s()),console.log("existingSessionId",a),a){t.next=18;break}return n(k()),c=u(s()),r=c.token,t.prev=5,t.next=8,g.a.get("".concat(O,"/session?sessionId=").concat(e),{headers:{Authorization:"Bearer ".concat(r)}});case 8:o=t.sent,console.log("response.data",o.data),n((i=o.data.session,{type:se,payload:i})),n(w()),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(5),t.t0.response?console.log(t.t0.response.data.message):(console.log(t.t0.message),n(E("danger",!0,t.t0.message))),n(w());case 18:case"end":return t.stop()}var i}),t,null,[[5,14]])})));return function(e,n){return t.apply(this,arguments)}}()}(t)))})),d||(c.emit("sessionRequest",a.id),h(!0))),Object(D.jsxs)("div",{children:[Object(D.jsx)("h1",{children:"Wait For Session"}),Object(D.jsx)("p",{children:"Please wait for your session to begin"})]})}var oe=function(){var e=Object(i.b)(),t=Object(i.c)(F);return Object(s.useEffect)((function(){e(function(){var e=Object(b.a)(p.a.mark((function e(t,n){var s,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==(s=l(n()))){e.next=3;break}return e.abrupt("return");case 3:return t(k()),e.prev=4,e.next=7,g.a.get("".concat(O,"/me"),{headers:{Authorization:"Bearer ".concat(s)}});case 7:a=e.sent,t((c=a.data,{type:P,payload:c})),t(w()),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(4),e.t0.response?console.log(e.t0.response.message):console.log(e.t0),t(A()),t(w());case 17:case"end":return e.stop()}var c}),e,null,[[4,12]])})));return function(t,n){return e.apply(this,arguments)}}())}),[e]),Object(D.jsxs)("div",{className:"App",children:[Object(D.jsx)(B,{}),Object(D.jsx)(q,{}),t?Object(D.jsx)(R,{}):null,Object(D.jsxs)(r.c,{children:[Object(D.jsx)(r.a,{exact:!0,path:"/",component:z}),Object(D.jsx)(r.a,{path:"/signup",component:V}),Object(D.jsx)(r.a,{path:"/login",component:Y}),Object(D.jsx)(r.a,{path:"/session-therapist",component:Q}),Object(D.jsx)(r.a,{path:"/session-patient",component:Z}),Object(D.jsx)(r.a,{path:"/wait-for-session",component:re}),Object(D.jsx)(r.a,{path:"/create-session",component:ce})]})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ie=n(25),le=n(76),ue=n(5),je={loading:!1,message:null};var de={token:localStorage.getItem("token"),name:null,email:null,therapistId:null,socket:null};var pe=n(37),be={myPatients:[]};var Oe={id:null,therapistId:null,patientId:null};var he={allTherapists:[]};var fe=Object(ie.b)({appState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(ue.a)(Object(ue.a)({},e),{},{loading:!0});case v:return Object(ue.a)(Object(ue.a)({},e),{},{loading:!1});case S:return Object(ue.a)(Object(ue.a)({},e),{},{message:t.payload});case y:return Object(ue.a)(Object(ue.a)({},e),{},{message:null});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return localStorage.setItem("token",t.payload.token),Object(ue.a)(Object(ue.a)({},e),t.payload);case T:return localStorage.removeItem("token"),Object(ue.a)(Object(ue.a)({},de),{},{token:null});case P:return Object(ue.a)(Object(ue.a)({},e),t.payload);default:return e}},patients:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case te:return Object(ue.a)(Object(ue.a)({},e),{},{myPatients:Object(pe.a)(t.payload)});default:return e}},session:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ne:case se:return Object(ue.a)(Object(ue.a)({},e),t.payload);case ae:return Oe;default:return e}},therapists:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:return Object(ue.a)(Object(ue.a)({},e),{},{allTherapists:Object(pe.a)(t.payload)});default:return e}}}),ge=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ie.c)(Object(ie.a)(le.a)),me=Object(ie.d)(fe,ge);n(145);c.a.render(Object(D.jsx)(o.a,{children:Object(D.jsx)(i.a,{store:me,children:Object(D.jsx)(oe,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},82:function(e,t,n){},83:function(e,t,n){}},[[146,1,2]]]);
//# sourceMappingURL=main.c80c6f92.chunk.js.map