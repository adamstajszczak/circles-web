(this["webpackJsonpcircles-web"]=this["webpackJsonpcircles-web"]||[]).push([[0],{48:function(e,t,n){e.exports=n.p+"static/media/circles-logo.b212bb26.svg"},51:function(e,t,n){e.exports=n.p+"static/media/intro00.563800af.svg"},52:function(e,t,n){e.exports=n.p+"static/media/intro01.37601bb1.svg"},53:function(e,t,n){e.exports=n.p+"static/media/intro02.1847156e.svg"},58:function(e,t,n){e.exports=n(70)},63:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(21),i=n.n(c),o=(n(63),n(7)),l=n(89),u=n(17),s=n.n(u),f=n(20),m=n(3),d=n(83),p=Object(d.a)((function(e){return{root:{color:e.palette.primary.main}}})),v=function(e){return{title:{en_US:"Home",pl_PL:"Strona g\u0142\xf3wna",de_DE:"Startseite"},yes:e.yes}},h=n(90),b=Object.freeze({currentAccount:void 0}),g=a.a.createContext([b,function(){}]),E=n(24),j=function(e){return e(Object(r.useContext)(g)[0])},O=function(){var e=Object(r.useContext)(g);return function(t){console.log("\ud83d\udcc1",t.type,"=>",t.payload),function(e,t){e((function(e){var n={};switch(t.type){case"SET_CURRENT_ACCOUNT":n.currentAccount=Object(E.a)({},t.payload)}return Object(E.a)({},e,{},n)}))}(e[1],t)}},y=function(){var e=Object(m.f)(),t=Object(u.useLittera)(v),n=Object(o.a)(t,1)[0],r=p(),c=j((function(e){return e.currentAccount}));return a.a.createElement("div",{className:r.root},n.title,c&&a.a.createElement(h.a,{onClick:function(){return e.push("/profile")}},c.label," Profile"))},w=n(48),x=n.n(w),P=Object(d.a)((function(e){return{root:{color:e.palette.primary.main},logo:{width:"300px",height:"300px"}}})),_=function(e){var t=function(e){for(var t=Object(E.a)({},e),n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];for(var c in t)r.includes(c)&&delete t[c];return t}(e,"children","className"),n=Object.freeze(Object(E.a)({display:"flex"},t));return a.a.createElement("div",{style:n,className:e.className},e.children)},C=0,S=function(){var e=Object(r.useState)(0),t=Object(o.a)(e,2)[1];return function(){t(C++)}},k=function(e){return e(localStorage)},N=n(18),A=n(19),T=n(37),I=n(36),L=function(){function e(t){Object(N.a)(this,e),this.url=void 0,this.url=t}return Object(A.a)(e,[{key:"makeArguments",value:function(e){return Object.entries(e).map((function(e){return"".concat(e[0],"=").concat("object"===typeof e[1]?JSON.stringify(e[1]):e[1])})).join("&")}},{key:"execute",value:function(e){var t=this;return new Promise((function(n,r){var a=!1,c=e.exec[0],i=t.makeArguments(e.exec[1]),o="".concat(t.url).concat(c,"?").concat(i),l=new Headers({"Access-Control-Allow-Origin":"*","Content-Type":"multipart/form-data"});fetch(o,{mode:"cors",headers:l}).then((function(e){return e.json()})).then((function(e){if(!a){a=!0;var t=e;console.log("\ud83d\udcf6",c,"=>",t),n(t)}})).catch(r)}))}}]),e}(),U=function(){function e(t){Object(N.a)(this,e),this.exec=void 0,this.status=void 0,this.exec=t,this.status=0}return Object(A.a)(e,[{key:"parse",value:function(e,t){return t}}]),e}(),D=function(e){Object(I.a)(n,e);var t=Object(T.a)(n);function n(e){return Object(N.a)(this,n),t.call(this,["accountInfo",{account_id:e}])}return Object(A.a)(n,[{key:"parse",value:function(e,t){return t}}]),n}(U),W=n(40),R=n.n(W),z=n(49),J=n(55),V=n(50),q=new L("https://us-central1-ping-82fee.cloudfunctions.net/"),B=function(){var e=Object(m.f)(),t=P(),n=O(),c=Object(r.useRef)(),i=j((function(e){return e.currentAccount})),l=k((function(e){return e.currentAccountId})),u=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var c=Object(r.useRef)(null),i=S();if(null===c.current){var o=e.apply(void 0,n),l=function(e){c.current[0]=e,i()};c.current=[o,l]}return Object(r.useEffect)((function(){var t=e.apply(void 0,n);c.current[0]!==t&&c.current[1](t)}),[e,n]),c.current}((function(e){return null!==(t=e)&&102!==t.status?e.data:null;var t}),function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var c=Object(r.useRef)(null),i=S();if(null===c.current){c.current={status:102};var o=function(){var t=Object(V.a)(R.a.mark((function t(){var r,a;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n||[],t.next=3,q.execute(Object(z.a)(e,Object(J.a)(r)));case 3:a=t.sent,c.current=a,i();case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();o()}return c.current}(D,l)),s=Object(o.a)(u,1)[0];return console.log("Current Account =>",i),console.log("Current Account Id =>",l),console.log(e.location.pathname),Object(r.useEffect)((function(){return c.current=setTimeout((function(){e.push("/intro")}),5e3),function(){return clearTimeout(c.current)}}),[]),Object(r.useEffect)((function(){s&&!i&&(n({type:"SET_CURRENT_ACCOUNT",payload:s}),clearTimeout(c.current),e.push("/home"))}),[s,n,i,e]),a.a.createElement(_,{alignItems:"center",justifyContent:"center",width:"100%",height:"100vh"},a.a.createElement("img",{src:x.a,alt:"logo",className:t.logo}))},H=Object(d.a)((function(e){return{root:{},introViewRoot:{maxWidth:"1200px",margin:"0 auto"},introViewContentWrapper:{maxWidth:"60%",marginTop:"5%"}}})),M=function(e){return{title:{en_US:"Intro",pl_PL:"Intro",de_DE:"Intro"},firstTitle:{en_US:"Welcome to safe chat!",pl_PL:"Pierwszy Part",de_DE:"Erstes Part"},secondTitle:{en_US:"Available everywhere",pl_PL:"Drugi Part",de_DE:"Zweiten Part"},thirdTitle:{en_US:"Reliable and Stable",pl_PL:"Trzeci Part",de_DE:"Dreien Part"},yes:e.yes}},Y=n(85),Z=n(86),$=n(87),F=function(e){var t=e.activePart;return a.a.createElement(_,{justifyContent:"center",alignItems:"center"},a.a.createElement(G,{active:t>=0}),a.a.createElement(G,{active:t>=1}),a.a.createElement(G,{active:t>=2}))},G=function(e){var t=e.active,n=Object(Z.a)();return a.a.createElement($.a,{style:{opacity:t?1:.15,fontSize:"14px",color:t?n.palette.primary.main:"#000"}},"lens")},K=function(e){var t=H();if(e.activePart!==e.partId)return null;var n=0===e.partId?"Skip":"Back",r=2===e.partId?"Continue":"Next";return a.a.createElement("div",{className:t.introViewRoot,style:{height:"100vh"}},a.a.createElement(_,{flexDirection:"column",alignItems:"center",justifyContent:"space-between"},a.a.createElement(_,{flexDirection:"column",height:"90vh",alignItems:"center",justifyContent:"center"},a.a.createElement(_,{alignItems:"center",justifyContent:"center"},a.a.createElement("img",{src:e.image,alt:e.title,style:{maxWidth:"300px",height:"auto"}})),a.a.createElement(_,{className:t.introViewContentWrapper,alignItems:"center",justifyContent:"center",flexDirection:"column"},a.a.createElement(Y.a,{variant:"h2"},e.title),a.a.createElement(Y.a,{align:"center",paragraph:!0},e.description))),a.a.createElement(_,{justifyContent:"space-evenly",height:"10vh",alignItems:"center",width:"60%"},a.a.createElement(h.a,{onClick:e.onPrev},n),a.a.createElement(F,{activePart:e.activePart}),a.a.createElement(h.a,{variant:"contained",color:"primary",onClick:e.onNext},r))))},Q=n(51),X=n.n(Q),ee=n(52),te=n.n(ee),ne=n(53),re=n.n(ne),ae=function(){var e=Object(m.f)(),t=Object(u.useLittera)(M),n=Object(o.a)(t,1)[0],c=H(),i=Object(r.useState)(0),l=Object(o.a)(i,2),s=l[0],f=l[1],d=Object(r.useCallback)((function(){f((function(t){return 2===t?(e.push("/login"),t):t+1}))}),[f,e]),p=Object(r.useCallback)((function(){f((function(t){return 0===t?(e.push("/login"),t):t-1}))}),[f,e]);return a.a.createElement("div",{className:c.root},a.a.createElement(K,{activePart:s,partId:0,onNext:d,onPrev:p,image:X.a,title:n.firstTitle,description:"Sunt labore do deserunt consectetur fugiat. Eu dolor laborum elit non id amet Lorem aliqua velit. Elit in cillum elit magna incididunt esse."}),a.a.createElement(K,{activePart:s,partId:1,onNext:d,onPrev:p,image:te.a,title:n.secondTitle,description:"Sunt labore do deserunt consectetur fugiat. Eu dolor laborum elit non id amet Lorem aliqua velit. Elit in cillum elit magna incididunt esse."}),a.a.createElement(K,{activePart:s,partId:2,onNext:d,onPrev:p,image:re.a,title:n.thirdTitle,description:"Sunt labore do deserunt consectetur fugiat. Eu dolor laborum elit non id amet Lorem aliqua velit. Elit in cillum elit magna incididunt esse."}))},ce=Object(d.a)((function(e){return{root:{}}})),ie=function(e){return{title:{en_US:"Profile",pl_PL:"Profil",de_DE:"Profil"},yes:e.yes}},oe=n(88),le=function(){var e=Object(u.useLittera)(ie),t=Object(o.a)(e,1)[0],n=ce(),r=j((function(e){return e.currentAccount}));return r?a.a.createElement("div",{className:n.root},t.title,a.a.createElement(Y.a,null,r.label)):a.a.createElement(oe.a,null)};var ue=function(){return a.a.createElement(m.c,null,a.a.createElement(m.a,{exact:!0,path:"/",component:B}),a.a.createElement(m.a,{exact:!0,path:"/intro",component:ae}),a.a.createElement(m.a,{exact:!0,path:"/home",component:y}),a.a.createElement(m.a,{exact:!0,path:"/profile",component:le}),a.a.createElement(m.a,{exact:!0,component:function(){return a.a.createElement("div",null,"Error page")}}))},se=n(54),fe=Object(se.a)({palette:{primary:{main:"#99d8ff"}}}),me=Object.freeze(["en_US","pl_PL","de_DE"]),de=Object.freeze({yes:{en_US:"Yes",pl_PL:"Tak",de_DE:"Ja"},no:{en_US:"No",pl_PL:"Nie",de_DE:"Nein"}}),pe=function(e){var t=e.children,n=e.initialState,c=Object(r.useState)(null!==n&&void 0!==n?n:b),i=Object(o.a)(c,2),l=i[0],u=i[1];return a.a.createElement(g.Provider,{value:[l,u]},t)};var ve=function(){var e=function(){var e=Object(r.useState)(me[0]),t=Object(o.a)(e,2);return[t[0],t[1],de]}(),t=Object(o.a)(e,3),n=t[0],c=t[1],i=t[2];return a.a.createElement(pe,null,a.a.createElement(l.a,{theme:fe},a.a.createElement(s.a,{language:n,setLanguage:c,preset:i},a.a.createElement(f.a,{basename:"/circles-web"},a.a.createElement(ue,null)))))},he=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function be(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(ve,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/circles-web",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/circles-web","/service-worker.js");he?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):be(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):be(t,e)}))}}()}},[[58,1,2]]]);
//# sourceMappingURL=main.61b53f3f.chunk.js.map