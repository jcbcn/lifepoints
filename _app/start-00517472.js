var t=Object.defineProperty,e=Object.prototype.hasOwnProperty,r=Object.getOwnPropertySymbols,s=Object.prototype.propertyIsEnumerable,a=(e,r,s)=>r in e?t(e,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[r]=s,o=(t,o)=>{for(var n in o||(o={}))e.call(o,n)&&a(t,n,o[n]);if(r)for(var n of r(o))s.call(o,n)&&a(t,n,o[n]);return t};import{S as n,i,s as l,e as c,t as u,c as h,a as d,b as p,d as f,f as m,g,h as v,j as y,k as b,l as w,n as x,m as $,o as E,p as k,q as _,r as q,u as S,v as R,w as I,x as T,y as V,z as A,A as D,B as L,C as O,D as P,E as N,F as j,G as U,H as C}from"./chunks/index-eaf194d4.js";import{c as M,w as B}from"./chunks/todoistService-2d839b69.js";function K(t){let e,r,s=t[1].stack+"";return{c(){e=c("pre"),r=u(s)},l(t){e=h(t,"PRE",{});var a=d(e);r=p(a,s),a.forEach(f)},m(t,s){m(t,e,s),g(e,r)},p(t,e){2&e&&s!==(s=t[1].stack+"")&&v(r,s)},d(t){t&&f(e)}}}function W(t){let e,r,s,a,o,n,i,l=t[1].message+"",$=t[1].stack&&K(t);return{c(){e=c("h1"),r=u(t[0]),s=y(),a=c("p"),o=u(l),n=y(),$&&$.c(),i=b()},l(c){e=h(c,"H1",{});var u=d(e);r=p(u,t[0]),u.forEach(f),s=w(c),a=h(c,"P",{});var m=d(a);o=p(m,l),m.forEach(f),n=w(c),$&&$.l(c),i=b()},m(t,l){m(t,e,l),g(e,r),m(t,s,l),m(t,a,l),g(a,o),m(t,n,l),$&&$.m(t,l),m(t,i,l)},p(t,[e]){1&e&&v(r,t[0]),2&e&&l!==(l=t[1].message+"")&&v(o,l),t[1].stack?$?$.p(t,e):($=K(t),$.c(),$.m(i.parentNode,i)):$&&($.d(1),$=null)},i:x,o:x,d(t){t&&f(e),t&&f(s),t&&f(a),t&&f(n),$&&$.d(t),t&&f(i)}}}function Y(t,e,r){let{status:s}=e,{error:a}=e;return t.$$set=t=>{"status"in t&&r(0,s=t.status),"error"in t&&r(1,a=t.error)},[s,a]}class z extends n{constructor(t){super(),i(this,t,Y,W,l,{status:0,error:1})}}function G(t){let e,r,s;const a=[t[4]||{}];var o=t[2][1];function n(t){let e={};for(let r=0;r<a.length;r+=1)e=$(e,a[r]);return{props:e}}return o&&(e=new o(n())),{c(){e&&k(e.$$.fragment),r=b()},l(t){e&&_(e.$$.fragment,t),r=b()},m(t,a){e&&q(e,t,a),m(t,r,a),s=!0},p(t,s){const i=16&s?S(a,[R(t[4]||{})]):{};if(o!==(o=t[2][1])){if(e){O();const t=e;T(t.$$.fragment,1,0,(()=>{V(t,1)})),P()}o?(e=new o(n()),k(e.$$.fragment),I(e.$$.fragment,1),q(e,r.parentNode,r)):e=null}else o&&e.$set(i)},i(t){s||(e&&I(e.$$.fragment,t),s=!0)},o(t){e&&T(e.$$.fragment,t),s=!1},d(t){t&&f(r),e&&V(e,t)}}}function H(t){let e,r;return e=new z({props:{status:t[0],error:t[1]}}),{c(){k(e.$$.fragment)},l(t){_(e.$$.fragment,t)},m(t,s){q(e,t,s),r=!0},p(t,r){const s={};1&r&&(s.status=t[0]),2&r&&(s.error=t[1]),e.$set(s)},i(t){r||(I(e.$$.fragment,t),r=!0)},o(t){T(e.$$.fragment,t),r=!1},d(t){V(e,t)}}}function F(t){let e,r,s,a;const o=[H,G],n=[];function i(t,e){return t[1]?0:1}return e=i(t),r=n[e]=o[e](t),{c(){r.c(),s=b()},l(t){r.l(t),s=b()},m(t,r){n[e].m(t,r),m(t,s,r),a=!0},p(t,a){let l=e;e=i(t),e===l?n[e].p(t,a):(O(),T(n[l],1,1,(()=>{n[l]=null})),P(),r=n[e],r?r.p(t,a):(r=n[e]=o[e](t),r.c()),I(r,1),r.m(s.parentNode,s))},i(t){a||(I(r),a=!0)},o(t){T(r),a=!1},d(t){n[e].d(t),t&&f(s)}}}function J(t){let e,r=t[6]&&X(t);return{c(){e=c("div"),r&&r.c(),this.h()},l(t){e=h(t,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,class:!0});var s=d(e);r&&r.l(s),s.forEach(f),this.h()},h(){E(e,"id","svelte-announcer"),E(e,"aria-live","assertive"),E(e,"aria-atomic","true"),E(e,"class","svelte-9z6sc")},m(t,s){m(t,e,s),r&&r.m(e,null)},p(t,s){t[6]?r?r.p(t,s):(r=X(t),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},d(t){t&&f(e),r&&r.d()}}}function X(t){let e,r;return{c(){e=u("Navigated to "),r=u(t[7])},l(s){e=p(s,"Navigated to "),r=p(s,t[7])},m(t,s){m(t,e,s),m(t,r,s)},p(t,e){128&e&&v(r,t[7])},d(t){t&&f(e),t&&f(r)}}}function Q(t){let e,r,s,a;const o=[t[3]||{}];let n={$$slots:{default:[F]},$$scope:{ctx:t}};for(let l=0;l<o.length;l+=1)n=$(n,o[l]);e=new t[8]({props:n});let i=t[5]&&J(t);return{c(){k(e.$$.fragment),r=y(),i&&i.c(),s=b()},l(t){_(e.$$.fragment,t),r=w(t),i&&i.l(t),s=b()},m(t,o){q(e,t,o),m(t,r,o),i&&i.m(t,o),m(t,s,o),a=!0},p(t,[r]){const a=8&r?S(o,[R(t[3]||{})]):{};2071&r&&(a.$$scope={dirty:r,ctx:t}),e.$set(a),t[5]?i?i.p(t,r):(i=J(t),i.c(),i.m(s.parentNode,s)):i&&(i.d(1),i=null)},i(t){a||(I(e.$$.fragment,t),a=!0)},o(t){T(e.$$.fragment,t),a=!1},d(t){V(e,t),t&&f(r),i&&i.d(t),t&&f(s)}}}function Z(t,e,r){let{status:s}=e,{error:a}=e,{stores:o}=e,{page:n}=e,{components:i}=e,{props_0:l=null}=e,{props_1:c=null}=e;const u=i[0];A("__svelte__",o),D(o.page.notify);let h=!1,d=!1,p=null;return L((()=>{const t=o.page.subscribe((()=>{h&&(r(6,d=!0),r(7,p=document.title))}));return r(5,h=!0),t})),t.$$set=t=>{"status"in t&&r(0,s=t.status),"error"in t&&r(1,a=t.error),"stores"in t&&r(9,o=t.stores),"page"in t&&r(10,n=t.page),"components"in t&&r(2,i=t.components),"props_0"in t&&r(3,l=t.props_0),"props_1"in t&&r(4,c=t.props_1)},t.$$.update=()=>{1536&t.$$.dirty&&o.page.set(n)},[s,a,i,l,c,h,d,p,u,o,n]}class tt extends n{constructor(t){super(),i(this,t,Z,Q,l,{status:0,error:1,stores:9,page:10,components:2,props_0:3,props_1:4})}}let et;const rt={},st=function(t,e){if(!e)return t();if(void 0===et){const t=document.createElement("link").relList;et=t&&t.supports&&t.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(e.map((t=>{if(t in rt)return;rt[t]=!0;const e=t.endsWith(".css"),r=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${r}`))return;const s=document.createElement("link");return s.rel=e?"stylesheet":et,e||(s.as="script",s.crossOrigin=""),s.href=t,document.head.appendChild(s),e?new Promise(((t,e)=>{s.addEventListener("load",t),s.addEventListener("error",e)})):void 0}))).then((()=>t()))};class at extends n{constructor(t){super(),i(this,t,null,null,l,{})}}function ot(t){let e,r,s,a,o,n,i,l,v;return{c(){e=c("div"),r=c("a"),s=u("Your Todoist"),a=y(),o=c("a"),n=u("Settings"),i=y(),l=c("a"),v=u("Sign out"),this.h()},l(t){e=h(t,"DIV",{class:!0,role:!0,"aria-orientation":!0,"aria-labelledby":!0});var c=d(e);r=h(c,"A",{href:!0,class:!0,role:!0});var u=d(r);s=p(u,"Your Todoist"),u.forEach(f),a=w(c),o=h(c,"A",{href:!0,class:!0,role:!0});var m=d(o);n=p(m,"Settings"),m.forEach(f),i=w(c),l=h(c,"A",{href:!0,class:!0,role:!0});var g=d(l);v=p(g,"Sign out"),g.forEach(f),c.forEach(f),this.h()},h(){E(r,"href","#"),E(r,"class","block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"),E(r,"role","menuitem"),E(o,"href","#"),E(o,"class","block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"),E(o,"role","menuitem"),E(l,"href","#"),E(l,"class","block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"),E(l,"role","menuitem"),E(e,"class","origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"),E(e,"role","menu"),E(e,"aria-orientation","vertical"),E(e,"aria-labelledby","user-menu")},m(t,c){m(t,e,c),g(e,r),g(r,s),g(e,a),g(e,o),g(o,n),g(e,i),g(e,l),g(l,v)},d(t){t&&f(e)}}}function nt(t){let e,r,s,a,o,n,i;return{c(){e=c("div"),r=c("div"),s=c("div"),a=c("a"),o=u("Clear Auth Token"),this.h()},l(t){e=h(t,"DIV",{class:!0,id:!0});var n=d(e);r=h(n,"DIV",{class:!0});var i=d(r);s=h(i,"DIV",{class:!0});var l=d(s);a=h(l,"A",{href:!0,class:!0});var c=d(a);o=p(c,"Clear Auth Token"),c.forEach(f),l.forEach(f),i.forEach(f),n.forEach(f),this.h()},h(){E(a,"href","#"),E(a,"class","block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"),E(s,"class","mt-3 px-2 space-y-1"),E(r,"class","pt-3 pb-3 border-t border-gray-700"),E(e,"class","md:hidden"),E(e,"id","mobile-menu")},m(t,l){m(t,e,l),g(e,r),g(r,s),g(s,a),g(a,o),n||(i=N(a,"click",M),n=!0)},p:x,d(t){t&&f(e),n=!1,i()}}}function it(t){let e,r,s,a,o,n,i,l,v,b,x,$,S,R,A,D,L,O,P,M,B,K,W,Y,z,G,H,F,J,X,Q,Z,tt,et,rt,st,it,lt,ct,ut,ht,dt,pt,ft,mt,gt;e=new at({});let vt=t[0]&&ot(),yt=t[0]&&nt();const bt=t[3].default,wt=j(bt,t,t[2],null);return{c(){k(e.$$.fragment),r=y(),s=c("main"),a=c("div"),o=c("div"),n=c("nav"),i=c("div"),l=c("div"),v=c("div"),b=c("div"),x=c("img"),S=y(),R=c("div"),A=c("div"),D=c("div"),vt&&vt.c(),L=y(),O=c("div"),P=c("button"),M=c("span"),B=u("Open main menu"),K=y(),W=U("svg"),Y=U("path"),z=y(),G=U("svg"),H=U("path"),F=y(),yt&&yt.c(),J=y(),X=c("header"),Q=c("div"),Z=c("nav"),tt=c("button"),et=u("Tasks"),rt=y(),st=c("button"),it=u("Rewards"),lt=y(),ct=c("div"),ut=c("span"),ht=u("100P"),dt=y(),pt=c("main"),wt&&wt.c(),this.h()},l(t){_(e.$$.fragment,t),r=w(t),s=h(t,"MAIN",{});var c=d(s);a=h(c,"DIV",{});var u=d(a);o=h(u,"DIV",{class:!0});var m=d(o);n=h(m,"NAV",{class:!0});var g=d(n);i=h(g,"DIV",{class:!0});var y=d(i);l=h(y,"DIV",{class:!0});var $=d(l);v=h($,"DIV",{class:!0});var E=d(v);b=h(E,"DIV",{class:!0});var k=d(b);x=h(k,"IMG",{class:!0,src:!0,alt:!0}),k.forEach(f),E.forEach(f),S=w($),R=h($,"DIV",{class:!0});var q=d(R);A=h(q,"DIV",{class:!0});var I=d(A);D=h(I,"DIV",{class:!0});var T=d(D);vt&&vt.l(T),T.forEach(f),I.forEach(f),q.forEach(f),L=w($),O=h($,"DIV",{class:!0});var V=d(O);P=h(V,"BUTTON",{type:!0,class:!0,"aria-controls":!0,"aria-expanded":!0});var N=d(P);M=h(N,"SPAN",{class:!0});var j=d(M);B=p(j,"Open main menu"),j.forEach(f),K=w(N),W=h(N,"svg",{class:!0,xmlns:!0,fill:!0,viewBox:!0,stroke:!0,"aria-hidden":!0},1);var U=d(W);Y=h(U,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0},1),d(Y).forEach(f),U.forEach(f),z=w(N),G=h(N,"svg",{class:!0,xmlns:!0,fill:!0,viewBox:!0,stroke:!0,"aria-hidden":!0},1);var C=d(G);H=h(C,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0},1),d(H).forEach(f),C.forEach(f),N.forEach(f),V.forEach(f),$.forEach(f),y.forEach(f),F=w(g),yt&&yt.l(g),g.forEach(f),J=w(m),X=h(m,"HEADER",{class:!0});var at=d(X);Q=h(at,"DIV",{class:!0});var ot=d(Q);Z=h(ot,"NAV",{class:!0});var nt=d(Z);tt=h(nt,"BUTTON",{class:!0});var ft=d(tt);et=p(ft,"Tasks"),ft.forEach(f),rt=w(nt),st=h(nt,"BUTTON",{class:!0});var mt=d(st);it=p(mt,"Rewards"),mt.forEach(f),lt=w(nt),ct=h(nt,"DIV",{class:!0});var gt=d(ct);ut=h(gt,"SPAN",{class:!0});var bt=d(ut);ht=p(bt,"100P"),bt.forEach(f),gt.forEach(f),nt.forEach(f),ot.forEach(f),at.forEach(f),m.forEach(f),u.forEach(f),dt=w(c),pt=h(c,"MAIN",{});var xt=d(pt);wt&&wt.l(xt),xt.forEach(f),c.forEach(f),this.h()},h(){E(x,"class","h-8 w-8"),x.src!==($="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg")&&E(x,"src","https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"),E(x,"alt","Workflow"),E(b,"class","flex-shrink-0"),E(v,"class","flex items-center"),E(D,"class","ml-3 relative"),E(A,"class","ml-4 flex items-center md:ml-6"),E(R,"class","hidden md:block"),E(M,"class","sr-only"),E(Y,"stroke-linecap","round"),E(Y,"stroke-linejoin","round"),E(Y,"stroke-width","2"),E(Y,"d","M4 6h16M4 12h16M4 18h16"),E(W,"class","block h-6 w-6"),E(W,"xmlns","http://www.w3.org/2000/svg"),E(W,"fill","none"),E(W,"viewBox","0 0 24 24"),E(W,"stroke","currentColor"),E(W,"aria-hidden","true"),E(H,"stroke-linecap","round"),E(H,"stroke-linejoin","round"),E(H,"stroke-width","2"),E(H,"d","M6 18L18 6M6 6l12 12"),E(G,"class","hidden h-6 w-6"),E(G,"xmlns","http://www.w3.org/2000/svg"),E(G,"fill","none"),E(G,"viewBox","0 0 24 24"),E(G,"stroke","currentColor"),E(G,"aria-hidden","true"),E(P,"type","button"),E(P,"class","bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"),E(P,"aria-controls","mobile-menu"),E(P,"aria-expanded","false"),E(O,"class","-mr-2 flex md:hidden"),E(l,"class","flex items-center justify-between h-16"),E(i,"class","max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"),E(n,"class","bg-gray-800"),E(tt,"class","flex-none text-2xl text-gray-900 py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500"),E(st,"class","flex-none text-2xl text-gray-900 py-4 px-6 block hover:text-blue-500 focus:outline-none"),E(ut,"class","inline-block bg-purple-600 rounded-full px-3 py-1 font-semibold text-gray-50"),E(ct,"class","flex-grow text-2xl text-center py-4 px-6"),E(Z,"class","flex flex-row"),E(Q,"class","max-w-7xl mx-auto"),E(X,"class","bg-white shadow"),E(o,"class","sticky top-0")},m(c,u){q(e,c,u),m(c,r,u),m(c,s,u),g(s,a),g(a,o),g(o,n),g(n,i),g(i,l),g(l,v),g(v,b),g(b,x),g(l,S),g(l,R),g(R,A),g(A,D),vt&&vt.m(D,null),g(l,L),g(l,O),g(O,P),g(P,M),g(M,B),g(P,K),g(P,W),g(W,Y),g(P,z),g(P,G),g(G,H),g(n,F),yt&&yt.m(n,null),g(o,J),g(o,X),g(X,Q),g(Q,Z),g(Z,tt),g(tt,et),g(Z,rt),g(Z,st),g(st,it),g(Z,lt),g(Z,ct),g(ct,ut),g(ut,ht),g(s,dt),g(s,pt),wt&&wt.m(pt,null),ft=!0,mt||(gt=N(P,"click",t[1]),mt=!0)},p(t,[e]){t[0]?vt||(vt=ot(),vt.c(),vt.m(D,null)):vt&&(vt.d(1),vt=null),t[0]?yt?yt.p(t,e):(yt=nt(),yt.c(),yt.m(n,null)):yt&&(yt.d(1),yt=null),wt&&wt.p&&4&e&&C(wt,bt,t,t[2],e,null,null)},i(t){ft||(I(e.$$.fragment,t),I(wt,t),ft=!0)},o(t){T(e.$$.fragment,t),T(wt,t),ft=!1},d(t){V(e,t),t&&f(r),t&&f(s),vt&&vt.d(),yt&&yt.d(),wt&&wt.d(t),mt=!1,gt()}}}function lt(t,e,r){let s,{$$slots:a={},$$scope:o}=e;return t.$$set=t=>{"$$scope"in t&&r(2,o=t.$$scope)},[s,function(){r(0,s=!s)},o,a]}var ct=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:class extends n{constructor(t){super(),i(this,t,lt,it,l,{})}}});const ut=[()=>st((()=>import("./pages/index.svelte-1a80333d.js")),["/_app/pages/index.svelte-1a80333d.js","/_app/assets/pages/index.svelte-7479ef34.css","/_app/chunks/index-eaf194d4.js","/_app/chunks/todoistService-2d839b69.js"]),()=>st((()=>import("./pages/callback.svelte-3c985b82.js")),["/_app/pages/callback.svelte-3c985b82.js","/_app/chunks/index-eaf194d4.js"])],ht=[[/^\/$/,[ut[0]]],[/^\/callback\/?$/,[ut[1]]]];function dt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function pt(){return{x:pageXOffset,y:pageYOffset}}class ft{constructor({base:t,routes:e}){this.base=t,this.routes=e}init(t){let e;this.renderer=t,t.router=this,this.enabled=!0,"scrollRestoration"in history&&(history.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{history.scrollRestoration="auto"})),addEventListener("load",(()=>{history.scrollRestoration="manual"})),addEventListener("scroll",(()=>{clearTimeout(e),e=setTimeout((()=>{const t=o(o({},history.state||{}),{"sveltekit:scroll":pt()});history.replaceState(t,document.title,window.location.href)}),50)})),addEventListener("click",(t=>{if(!this.enabled)return;if(t.button||1!==t.which)return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=dt(t.target);if(!e)return;if(!e.href)return;const r="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,s=String(r?e.href.baseVal:e.href);if(s===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(r?e.target.baseVal:e.target)return;const a=new URL(s);if(a.pathname===location.pathname&&a.search===location.search)return;const o=this.parse(a);if(o){const r=e.hasAttribute("sveltekit:noscroll");history.pushState({},"",a.href),this._navigate(o,r?pt():null,[],a.hash),t.preventDefault()}})),addEventListener("popstate",(t=>{if(t.state&&this.enabled){const e=new URL(location.href),r=this.parse(e);r?this._navigate(r,t.state["sveltekit:scroll"],[]):location.href=location.href}})),document.body.setAttribute("tabindex","-1"),history.replaceState(history.state||{},"",location.href)}parse(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(this.base))return null;const e=t.pathname.slice(this.base.length)||"/",r=this.routes.filter((([t])=>t.test(e)));if(r.length>0){const s=new URLSearchParams(t.search);return{id:`${e}?${s}`,routes:r,path:e,query:s}}}async goto(t,{noscroll:e=!1,replaceState:r=!1}={},s){if(this.enabled){const a=new URL(t,function(t){let e=t.baseURI;if(!e){const r=t.getElementsByTagName("base");e=r.length?r[0].href:t.URL}return e}(document)),o=this.parse(a);if(o)return history[r?"replaceState":"pushState"]({},"",t),this._navigate(o,e?pt():null,s,a.hash)}return location.href=t,new Promise((()=>{}))}async _navigate(t,e,r,s){this.renderer.notify({path:t.path,query:t.query}),location.pathname.endsWith("/")&&"/"!==location.pathname&&history.replaceState({},"",`${location.pathname.slice(0,-1)}${location.search}`),await this.renderer.update(t,r),document.body.focus();const a=s&&document.getElementById(s.slice(1));e?scrollTo(e.x,e.y):a?scrollTo(0,a.getBoundingClientRect().top+scrollY):scrollTo(0,0)}enable(){this.enabled=!0}disable(){this.enabled=!1}}function mt(t){if(t.error){const e="string"==typeof t.error?new Error(t.error):t.error,r=t.status;return e instanceof Error?!r||r<400||r>599?(console.warn('"error" returned from load() without a valid status code — defaulting to 500'),{status:500,error:e}):{status:r,error:e}:{status:500,error:new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof e}"`)}}if(t.redirect){if(!t.status||3!==Math.floor(t.status/100))return{status:500,error:new Error('"redirect" property returned from load() must be accompanied by a 3xx status code')};if("string"!=typeof t.redirect)return{status:500,error:new Error('"redirect" property returned from load() must be a string')}}return t}function gt(t){const e=B(t);let r=!0;return{notify:function(){r=!0,e.update((t=>t))},set:function(t){r=!1,e.set(t)},subscribe:function(t){let s;return e.subscribe((e=>{(void 0===s||r&&e!==s)&&t(s=e)}))}}}function vt(t,a){const o="string"==typeof t?t:t.url,n=document.querySelector(`script[type="svelte-data"][url="${o}"]`);if(n){const t=JSON.parse(n.textContent),{body:a}=t,o=((t,a)=>{var o={};for(var n in t)e.call(t,n)&&a.indexOf(n)<0&&(o[n]=t[n]);if(null!=t&&r)for(var n of r(t))a.indexOf(n)<0&&s.call(t,n)&&(o[n]=t[n]);return o})(t,["body"]);return Promise.resolve(new Response(a,o))}return fetch(t,a)}class yt{constructor({Root:t,layout:e,target:r,session:s,host:a}){this.Root=t,this.layout=e,this.host=a,this.router=null,this.target=r,this.started=!1,this.current={page:null,query:null,session_changed:!1,nodes:[],contexts:[]},this.caches=new Map,this.prefetching={id:null,promise:null},this.stores={page:gt({}),navigating:B(null),session:B(s)},this.$session=null,this.root=null;const o=t=>{const e=dt(t.target);e&&e.hasAttribute("sveltekit:prefetch")&&this.prefetch(new URL(e.href))};let n;addEventListener("touchstart",o),addEventListener("mousemove",(t=>{clearTimeout(n),n=setTimeout((()=>{o(t)}),20)}));let i=!1;this.stores.session.subscribe((async t=>{if(this.$session=t,!i)return;this.current.session_changed=!0;const e=this.router.parse(new URL(location.href));this.update(e,[])})),i=!0}async start(t){const e=await this._load(t);e.redirect?location.href=new URL(e.redirect,location.href).href:this._init(e)}notify({path:t,query:e}){dispatchEvent(new CustomEvent("sveltekit:navigation-start")),this.started&&this.stores.navigating.set({from:{path:this.current.page.path,query:this.current.page.query},to:{path:t,query:e}})}async update(t,e){const r=this.token={},s=await this._get_navigation_result(t);if(r!==this.token)return;if(s.reload)location.reload();else if(s.redirect){if(!(e.length>10||e.includes(this.current.page.path)))return void(this.router?this.router.goto(s.redirect,{replaceState:!0},[...e,this.current.page.path]):location.href=new URL(s.redirect,location.href).href);this.root.$set({status:500,error:new Error("Redirect loop")})}else this.started?(this.current=s.state,this.root.$set(s.props),this.stores.navigating.set(null),await 0):this._init(s);dispatchEvent(new CustomEvent("sveltekit:navigation-end")),this.prefetching.promise=null,this.prefetching.id=null;!1===s.state.nodes[s.state.nodes.length-1].module.router?this.router.disable():this.router.enable()}prefetch(t){return Promise.resolve().then((async()=>{if(this.router){const e=this.router.parse(t);if(e)return this.prefetching.promise=this._get_navigation_result(e),this.prefetching.id=e.id,await this.prefetching.promise;throw new Error(`Could not prefetch ${t.href}`)}throw new Error("Router is disabled")}))}async _get_navigation_result(t){if(this.prefetching.id===t.id)return this.prefetching.promise;for(let e=0;e<t.routes.length;e+=1){const r=t.routes[e],[s,a,o]=r;if(1===r.length)return{reload:!0};let n=e+1;for(;n<t.routes.length;){const e=t.routes[n];if(e[0].toString()!==s.toString())break;1!==e.length&&e[1].forEach((t=>t())),n+=1}const i=a.map((t=>t())),l={host:this.host,path:t.path,params:o?o(r[0].exec(t.path)):{},query:t.query},c=await this._load({status:200,error:null,nodes:i,page:l});if(c)return c}return await this._load({status:404,error:new Error(`Not found: ${t.path}`),nodes:[],page:{host:this.host,path:t.path,query:t.query,params:{}}})}_init(t){this.current=t.state,this.root=new this.Root({target:this.target,props:o({stores:this.stores},t.props),hydrate:!0}),this.started=!0}async _load({status:t,error:e,nodes:r,page:s}){const a=s.query.toString(),n={state:{page:s,query:a,session_changed:!1,nodes:[],contexts:[]},props:{status:t,error:e,components:[]}},i={params:Object.keys(s.params).filter((t=>!this.current.page||this.current.page.params[t]!==s.params[t])),query:a!==this.current.query,session:this.current.session_changed,context:!1};try{const t=[this.layout,...r],l=[];let c;for(let r=0;r<t.length;r+=1){const u=this.current.nodes[r],h=this.current.contexts[r],d=await t[r];if(n.props.components[r]=d.default,d.preload)throw new Error("preload has been deprecated in favour of load. Please consult the documentation: https://kit.svelte.dev/docs#loading");if(!u||d!==u.module||i.params.some((t=>u.uses.params.has(t)))||i.query&&u.uses.query||i.session&&u.uses.session||i.context&&u.uses.context){const u=s.path+a,h=this.caches.get(d),p=h&&h.get(u);let f,m;if(!p||i.context&&p.node.uses.context){f={module:d,uses:{params:new Set,query:!1,session:!1,context:!1}};const a={};for(const t in s.params)Object.defineProperty(a,t,{get:()=>(f.uses.params.add(t),s.params[t]),enumerable:!0});const n=this.$session;if(d.load){m=await d.load.call(null,{page:{host:s.host,path:s.path,params:a,get query(){return f.uses.query=!0,s.query}},get session(){return f.uses.session=!0,n},get context(){return f.uses.context=!0,o({},c)},fetch:this.started?fetch:vt});const i=r===t.length-1&&!e;if(!m&&i)return}}else({node:f,loaded:m}=p);if(m){if(m=mt(m),m.error){if(e)throw e;return await this._load({status:m.status||500,error:m.error,nodes:[],page:{host:s.host,path:s.path,query:s.query,params:{}}})}if(m.redirect)return{redirect:m.redirect};if(m.context&&(i.context=!0,c=o(o({},c),m.context)),m.maxage){this.caches.has(d)||this.caches.set(d,new Map);const t=this.caches.get(d),e={node:f,loaded:m};t.set(u,e);let r=!1;const s=setTimeout((()=>{a()}),1e3*m.maxage),a=()=>{t.get(u)===e&&t.delete(u),o(),clearTimeout(s)},o=this.stores.session.subscribe((()=>{r&&a()}));r=!0}l[r]=m.props}n.state.nodes[r]=f,n.state.contexts[r]=c}else n.state.nodes[r]=u,n.state.contexts[r]=c=h}return(await Promise.all(l)).forEach(((t,e)=>{t&&(n.props[`props_${e}`]=t)})),this.current.page&&s.path===this.current.page.path&&!i.query||(n.props.page=s),n}catch(l){if(e)throw e;return await this._load({status:500,error:l,nodes:[],page:{host:s.host,path:s.path,query:s.query,params:{}}})}}}async function bt({paths:t,target:e,session:r,host:s,route:a,hydrate:o}){const n=a&&new ft({base:t.base,routes:ht}),i=new yt({Root:tt,layout:ct,target:e,session:r,host:s});o&&await i.start(o),a&&n.init(i),dispatchEvent(new CustomEvent("sveltekit:start"))}export{bt as start};
