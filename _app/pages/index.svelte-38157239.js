var s=Object.defineProperty,t=Object.prototype.hasOwnProperty,e=Object.getOwnPropertySymbols,a=Object.prototype.propertyIsEnumerable,o=(t,e,a)=>e in t?s(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,r=(s,r)=>{for(var n in r||(r={}))t.call(r,n)&&o(s,n,r[n]);if(e)for(var n of e(r))a.call(r,n)&&o(s,n,r[n]);return s};import{G as n,S as l,i,s as c,e as d,j as f,c as u,a as h,l as m,d as p,o as g,f as v,g as y,H as x,I as w,w as b,k as E,C as k,x as $,D as B,y as I,p as D,r as O,J as V,K as W,L as C,E as P,F as j,M as A,N as T,O as S,q as M,n as N,P as H,z as L,Q as z,t as R,b as U,R as q,T as Y,U as J,V as Q,h as G}from"../chunks/index-9c1c4138.js";import{w as K}from"../chunks/index-94e861a6.js";const _=K(0);function Z(s,{delay:t=0,duration:e=400,easing:a=n}={}){const o=+getComputedStyle(s).opacity;return{delay:t,duration:e,easing:a,css:s=>"opacity: "+s*o}}const{window:F}=S;function X(s){let t,e,a,o,r,n,l,i,c,E,P,j=s[0].closeButton&&ss(s);var A=s[1];return A&&(n=new A({})),{c(){t=d("div"),e=d("div"),a=d("div"),j&&j.c(),o=f(),r=d("div"),n&&D(n.$$.fragment),this.h()},l(s){t=u(s,"DIV",{class:!0,style:!0});var l=h(t);e=u(l,"DIV",{class:!0,style:!0});var i=h(e);a=u(i,"DIV",{class:!0,role:!0,"aria-modal":!0,style:!0});var c=h(a);j&&j.l(c),o=m(c),r=u(c,"DIV",{class:!0,style:!0});var d=h(r);n&&M(n.$$.fragment,d),d.forEach(p),c.forEach(p),i.forEach(p),l.forEach(p),this.h()},h(){g(r,"class","content svelte-13z1tgh"),g(r,"style",s[8]),g(a,"class","window svelte-13z1tgh"),g(a,"role","dialog"),g(a,"aria-modal","true"),g(a,"style",s[7]),g(e,"class","window-wrap svelte-13z1tgh"),g(e,"style",s[6]),g(t,"class","bg svelte-13z1tgh"),g(t,"style",s[5])},m(l,i){v(l,t,i),y(t,e),y(e,a),j&&j.m(a,null),y(a,o),y(a,r),n&&O(n,r,null),s[37](a),s[38](e),s[39](t),c=!0,E||(P=[x(a,"introstart",(function(){w(s[12])&&s[12].apply(this,arguments)})),x(a,"outrostart",(function(){w(s[13])&&s[13].apply(this,arguments)})),x(a,"introend",(function(){w(s[14])&&s[14].apply(this,arguments)})),x(a,"outroend",(function(){w(s[15])&&s[15].apply(this,arguments)})),x(t,"click",s[19])],E=!0)},p(l,i){if((s=l)[0].closeButton?j?(j.p(s,i),1&i[0]&&b(j,1)):(j=ss(s),j.c(),b(j,1),j.m(a,o)):j&&(k(),$(j,1,1,(()=>{j=null})),B()),A!==(A=s[1])){if(n){k();const s=n;$(s.$$.fragment,1,0,(()=>{I(s,1)})),B()}A?(n=new A({}),D(n.$$.fragment),b(n.$$.fragment,1),O(n,r,null)):n=null}(!c||256&i[0])&&g(r,"style",s[8]),(!c||128&i[0])&&g(a,"style",s[7]),(!c||64&i[0])&&g(e,"style",s[6]),(!c||32&i[0])&&g(t,"style",s[5])},i(e){c||(b(j),n&&b(n.$$.fragment,e),V((()=>{l||(l=W(a,s[11],s[0].transitionWindowProps,!0)),l.run(1)})),V((()=>{i||(i=W(t,s[10],s[0].transitionBgProps,!0)),i.run(1)})),c=!0)},o(e){$(j),n&&$(n.$$.fragment,e),l||(l=W(a,s[11],s[0].transitionWindowProps,!1)),l.run(0),i||(i=W(t,s[10],s[0].transitionBgProps,!1)),i.run(0),c=!1},d(e){e&&p(t),j&&j.d(),n&&I(n),s[37](null),e&&l&&l.end(),s[38](null),s[39](null),e&&i&&i.end(),E=!1,C(P)}}}function ss(s){let t,e,a,o,r;const n=[es,ts],l=[];function i(s,e){return 1&e[0]&&(t=!!s[16](s[0].closeButton)),t?0:1}return e=i(s,[-1]),a=l[e]=n[e](s),{c(){a.c(),o=E()},l(s){a.l(s),o=E()},m(s,t){l[e].m(s,t),v(s,o,t),r=!0},p(s,t){let r=e;e=i(s,t),e===r?l[e].p(s,t):(k(),$(l[r],1,1,(()=>{l[r]=null})),B(),a=l[e],a?a.p(s,t):(a=l[e]=n[e](s),a.c()),b(a,1),a.m(o.parentNode,o))},i(s){r||(b(a),r=!0)},o(s){$(a),r=!1},d(s){l[e].d(s),s&&p(o)}}}function ts(s){let t,e,a;return{c(){t=d("button"),this.h()},l(s){t=u(s,"BUTTON",{class:!0,style:!0}),h(t).forEach(p),this.h()},h(){g(t,"class","close svelte-13z1tgh"),g(t,"style",s[9])},m(o,r){v(o,t,r),e||(a=x(t,"click",s[17]),e=!0)},p(s,e){512&e[0]&&g(t,"style",s[9])},i:N,o:N,d(s){s&&p(t),e=!1,a()}}}function es(s){let t,e,a;var o=s[0].closeButton;function r(s){return{props:{onClose:s[17]}}}return o&&(t=new o(r(s))),{c(){t&&D(t.$$.fragment),e=E()},l(s){t&&M(t.$$.fragment,s),e=E()},m(s,o){t&&O(t,s,o),v(s,e,o),a=!0},p(s,a){if(o!==(o=s[0].closeButton)){if(t){k();const s=t;$(s.$$.fragment,1,0,(()=>{I(s,1)})),B()}o?(t=new o(r(s)),D(t.$$.fragment),b(t.$$.fragment,1),O(t,e.parentNode,e)):t=null}},i(s){a||(t&&b(t.$$.fragment,s),a=!0)},o(s){t&&$(t.$$.fragment,s),a=!1},d(s){s&&p(e),t&&I(t,s)}}}function as(s){let t,e,a,o,r=s[1]&&X(s);const n=s[36].default,l=P(n,s,s[35],null);return{c(){r&&r.c(),t=f(),l&&l.c()},l(s){r&&r.l(s),t=m(s),l&&l.l(s)},m(n,i){r&&r.m(n,i),v(n,t,i),l&&l.m(n,i),e=!0,a||(o=x(F,"keydown",s[18]),a=!0)},p(s,e){s[1]?r?(r.p(s,e),2&e[0]&&b(r,1)):(r=X(s),r.c(),b(r,1),r.m(t.parentNode,t)):r&&(k(),$(r,1,1,(()=>{r=null})),B()),l&&l.p&&16&e[1]&&j(l,n,s,s[35],e,null,null)},i(s){e||(b(r),b(l,s),e=!0)},o(s){$(r),$(l,s),e=!1},d(s){r&&r.d(s),s&&p(t),l&&l.d(s),a=!1,o()}}}function os(s,t,e){let{$$slots:a={},$$scope:o}=t;const n=A(),l=L;let{show:i=null}=t,{key:c="simple-modal"}=t,{closeButton:d=!1}=t,{closeOnEsc:f=!1}=t,{closeOnOuterClick:u=!1}=t,{styleBg:h={}}=t,{styleWindowWrap:m={}}=t,{styleWindow:p={}}=t,{styleContent:g={}}=t,{styleCloseButton:v={}}=t,{setContext:y=l}=t,{transitionBg:x=Z}=t,{transitionBgProps:w={duration:250}}=t,{transitionWindow:b=x}=t,{transitionWindowProps:E=w}=t;const k={closeButton:d,closeOnEsc:f,closeOnOuterClick:u,styleBg:h,styleWindowWrap:m,styleWindow:p,styleContent:g,styleCloseButton:v,transitionBg:x,transitionBgProps:w,transitionWindow:b,transitionWindowProps:E};let $,B,I,D,O,V,W,C,P,j,S,M,N,z=r({},k),R=null;const U=s=>Object.keys(s).reduce(((t,e)=>`${t}; ${(s=>s.replace(/([a-zA-Z])(?=[A-Z])/g,"$1-").toLowerCase())(e)}: ${s[e]}`),""),q=s=>!!(s&&s.constructor&&s.call&&s.apply),Y=()=>{};let J=Y,Q=Y,G=Y,K=Y;const _=(s,t={},a={},o={})=>{e(1,R=function(s,t={}){return function(e){return new s(r(r({},e),{props:r(r({},t),e.props)}))}}(s,t)),e(0,z=r(r({},k),a)),e(5,O=U(z.styleBg)),e(6,V=U(z.styleWindowWrap)),e(7,W=U(z.styleWindow)),e(8,C=U(z.styleContent)),e(9,P=U(z.styleCloseButton)),e(10,j=z.transitionBg),e(11,S=z.transitionWindow),X(),e(12,J=s=>{o.onOpen&&o.onOpen(s),n("opening")}),e(13,Q=s=>{o.onClose&&o.onClose(s),n("closing")}),e(14,G=s=>{o.onOpened&&o.onOpened(s),n("opened")}),e(15,K=s=>{o.onClosed&&o.onClosed(s),n("closed")})},F=(s={})=>{e(13,Q=s.onClose||Q),e(15,K=s.onClosed||K),e(1,R=null),ss()},X=()=>{D=window.scrollY,M=document.body.style.position,N=document.body.style.overflow,document.body.style.position="fixed",document.body.style.top=`-${D}px`,document.body.style.overflow="hidden"},ss=()=>{document.body.style.position=M||"",document.body.style.top="",document.body.style.overflow=N||"",window.scrollTo(0,D)};return y(c,{open:_,close:F}),T((()=>{F()})),s.$$set=s=>{"show"in s&&e(20,i=s.show),"key"in s&&e(21,c=s.key),"closeButton"in s&&e(22,d=s.closeButton),"closeOnEsc"in s&&e(23,f=s.closeOnEsc),"closeOnOuterClick"in s&&e(24,u=s.closeOnOuterClick),"styleBg"in s&&e(25,h=s.styleBg),"styleWindowWrap"in s&&e(26,m=s.styleWindowWrap),"styleWindow"in s&&e(27,p=s.styleWindow),"styleContent"in s&&e(28,g=s.styleContent),"styleCloseButton"in s&&e(29,v=s.styleCloseButton),"setContext"in s&&e(30,y=s.setContext),"transitionBg"in s&&e(31,x=s.transitionBg),"transitionBgProps"in s&&e(32,w=s.transitionBgProps),"transitionWindow"in s&&e(33,b=s.transitionWindow),"transitionWindowProps"in s&&e(34,E=s.transitionWindowProps),"$$scope"in s&&e(35,o=s.$$scope)},s.$$.update=()=>{1048576&s.$$.dirty[0]&&(q(i)?_(i):F())},[z,R,$,B,I,O,V,W,C,P,j,S,J,Q,G,K,q,F,s=>{if(z.closeOnEsc&&R&&"Escape"===s.key&&(s.preventDefault(),F()),R&&"Tab"===s.key){const t=I.querySelectorAll("*"),e=Array.from(t).filter((s=>s.tabIndex>=0));let a=e.indexOf(document.activeElement);-1===a&&s.shiftKey&&(a=0),a+=e.length+(s.shiftKey?-1:1),a%=e.length,e[a].focus(),s.preventDefault()}},s=>{!z.closeOnOuterClick||s.target!==$&&s.target!==B||(s.preventDefault(),F())},i,c,d,f,u,h,m,p,g,v,y,x,w,b,E,o,a,function(s){H[s?"unshift":"push"]((()=>{I=s,e(4,I)}))},function(s){H[s?"unshift":"push"]((()=>{B=s,e(3,B)}))},function(s){H[s?"unshift":"push"]((()=>{$=s,e(2,$)}))}]}class rs extends l{constructor(s){super(),i(this,s,os,as,c,{show:20,key:21,closeButton:22,closeOnEsc:23,closeOnOuterClick:24,styleBg:25,styleWindowWrap:26,styleWindow:27,styleContent:28,styleCloseButton:29,setContext:30,transitionBg:31,transitionBgProps:32,transitionWindow:33,transitionWindowProps:34},[-1,-1])}}const ns=K(""),ls=K(null);function is(s){let t,e,a,o,r,n,l,i,c,w,b,E,k,$,B,I,D,O,V,W,P,j,A,T,S,M,H,L,Y,J,Q,G,K,_;return{c(){t=d("div"),e=d("div"),a=d("div"),o=z("svg"),r=z("path"),n=f(),l=d("div"),i=d("h3"),c=R("Please enter your Todoist API token"),w=f(),b=d("div"),E=d("p"),k=R("Lifepoints cannot function without it. You can edit or remove it later from the settings\n\t\t\t\t\tmenu."),$=f(),B=d("div"),I=d("input"),D=f(),O=d("div"),V=d("p"),W=d("span"),P=R("Read our "),j=d("a"),A=R("privacy statement"),T=f(),S=d("p"),M=d("a"),H=R("Where can I find it?"),L=f(),Y=d("div"),J=d("button"),Q=R("Save"),this.h()},l(s){t=u(s,"DIV",{class:!0});var d=h(t);e=u(d,"DIV",{class:!0});var f=h(e);a=u(f,"DIV",{class:!0});var g=h(a);o=u(g,"svg",{class:!0,xmlns:!0,fill:!0,viewBox:!0,stroke:!0,"aria-hidden":!0},1);var v=h(o);r=u(v,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0},1),h(r).forEach(p),v.forEach(p),g.forEach(p),n=m(f),l=u(f,"DIV",{class:!0});var y=h(l);i=u(y,"H3",{class:!0,id:!0});var x=h(i);c=U(x,"Please enter your Todoist API token"),x.forEach(p),w=m(y),b=u(y,"DIV",{class:!0});var C=h(b);E=u(C,"P",{class:!0});var N=h(E);k=U(N,"Lifepoints cannot function without it. You can edit or remove it later from the settings\n\t\t\t\t\tmenu."),N.forEach(p),$=m(C),B=u(C,"DIV",{class:!0});var z=h(B);I=u(z,"INPUT",{type:!0,name:!0,id:!0,autocomplete:!0,class:!0}),z.forEach(p),D=m(C),O=u(C,"DIV",{class:!0});var R=h(O);V=u(R,"P",{class:!0});var q=h(V);W=u(q,"SPAN",{class:!0});var G=h(W);P=U(G,"Read our "),G.forEach(p),j=u(q,"A",{target:!0,href:!0});var K=h(j);A=U(K,"privacy statement"),K.forEach(p),q.forEach(p),T=m(R),S=u(R,"P",{class:!0});var _=h(S);M=u(_,"A",{href:!0});var Z=h(M);H=U(Z,"Where can I find it?"),Z.forEach(p),_.forEach(p),R.forEach(p),C.forEach(p),y.forEach(p),f.forEach(p),d.forEach(p),L=m(s),Y=u(s,"DIV",{class:!0});var F=h(Y);J=u(F,"BUTTON",{disabled:!0,type:!0,class:!0});var X=h(J);Q=U(X,"Save"),X.forEach(p),F.forEach(p),this.h()},h(){g(r,"stroke-linecap","round"),g(r,"stroke-linejoin","round"),g(r,"stroke-width","2"),g(r,"d","M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"),g(o,"class","h-6 w-6 text-yellow-600"),g(o,"xmlns","http://www.w3.org/2000/svg"),g(o,"fill","none"),g(o,"viewBox","0 0 24 24"),g(o,"stroke","currentColor"),g(o,"aria-hidden","true"),g(a,"class","mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 sm:mx-0 sm:h-10 sm:w-10"),g(i,"class","text-lg leading-6 font-medium text-gray-900"),g(i,"id","modal-title"),g(E,"class","mb-2"),g(I,"type","text"),g(I,"name","first_name"),g(I,"id","first_name"),g(I,"autocomplete","given-name"),g(I,"class","mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"),g(B,"class","col-span-6 sm:col-span-3"),g(W,"class","text-gray-500"),g(j,"target","_blank"),g(j,"href","https://raw.githubusercontent.com/jcbcn/lifepoints/main/PRIVACY"),g(V,"class","text-sm float-right"),g(M,"href",""),g(S,"class","text-sm float-left"),g(O,"class","mt-1"),g(b,"class","mt-2"),g(l,"class","mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full"),g(e,"class","sm:flex sm:items-start"),g(t,"class","bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"),J.disabled=G=""==s[0],g(J,"type","button"),g(J,"class","w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"),g(Y,"class","bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse")},m(d,f){v(d,t,f),y(t,e),y(e,a),y(a,o),y(o,r),y(e,n),y(e,l),y(l,i),y(i,c),y(l,w),y(l,b),y(b,E),y(E,k),y(b,$),y(b,B),y(B,I),q(I,s[0]),y(b,D),y(b,O),y(O,V),y(V,W),y(W,P),y(V,j),y(j,A),y(O,T),y(O,S),y(S,M),y(M,H),v(d,L,f),v(d,Y,f),y(Y,J),y(J,Q),K||(_=[x(I,"input",s[2]),x(J,"click",s[1])],K=!0)},p(s,[t]){1&t&&I.value!==s[0]&&q(I,s[0]),1&t&&G!==(G=""==s[0])&&(J.disabled=G)},i:N,o:N,d(s){s&&p(t),s&&p(L),s&&p(Y),K=!1,C(_)}}}function cs(s,t,e){let a;Y(s,ns,(s=>e(0,a=s)));const{close:o}=J("simple-modal");return[a,function(){o()},function(){a=this.value,ns.set(a)}]}class ds extends l{constructor(s){super(),i(this,s,cs,is,c,{})}}function fs(s){let t,e,a,o,r,n,l,i,c;return{c(){t=d("div"),e=d("a"),a=R("Your Todoist"),o=f(),r=d("a"),n=R("Settings"),l=f(),i=d("a"),c=R("Sign out"),this.h()},l(s){t=u(s,"DIV",{class:!0,role:!0,"aria-orientation":!0,"aria-labelledby":!0});var d=h(t);e=u(d,"A",{href:!0,class:!0,role:!0});var f=h(e);a=U(f,"Your Todoist"),f.forEach(p),o=m(d),r=u(d,"A",{href:!0,class:!0,role:!0});var g=h(r);n=U(g,"Settings"),g.forEach(p),l=m(d),i=u(d,"A",{href:!0,class:!0,role:!0});var v=h(i);c=U(v,"Sign out"),v.forEach(p),d.forEach(p),this.h()},h(){g(e,"href","#"),g(e,"class","block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"),g(e,"role","menuitem"),g(r,"href","#"),g(r,"class","block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"),g(r,"role","menuitem"),g(i,"href","#"),g(i,"class","block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"),g(i,"role","menuitem"),g(t,"class","origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"),g(t,"role","menu"),g(t,"aria-orientation","vertical"),g(t,"aria-labelledby","user-menu")},m(s,d){v(s,t,d),y(t,e),y(e,a),y(t,o),y(t,r),y(r,n),y(t,l),y(t,i),y(i,c)},d(s){s&&p(t)}}}function us(s){let t,e,a,o,r,n,l,i,c,x,w,b,E,k,$,B,I,D,O,V;return{c(){t=d("div"),e=d("div"),a=d("div"),o=d("div"),r=d("img"),l=f(),i=d("div"),c=d("div"),x=R("Bob Smith"),w=f(),b=d("div"),E=R("bob@example.com"),k=f(),$=d("div"),B=d("a"),I=R("Settings"),D=f(),O=d("a"),V=R("Sign out"),this.h()},l(s){t=u(s,"DIV",{class:!0,id:!0});var n=h(t);e=u(n,"DIV",{class:!0});var d=h(e);a=u(d,"DIV",{class:!0});var f=h(a);o=u(f,"DIV",{class:!0});var g=h(o);r=u(g,"IMG",{class:!0,src:!0,alt:!0}),g.forEach(p),l=m(f),i=u(f,"DIV",{class:!0});var v=h(i);c=u(v,"DIV",{class:!0});var y=h(c);x=U(y,"Bob Smith"),y.forEach(p),w=m(v),b=u(v,"DIV",{class:!0});var W=h(b);E=U(W,"bob@example.com"),W.forEach(p),v.forEach(p),f.forEach(p),k=m(d),$=u(d,"DIV",{class:!0});var C=h($);B=u(C,"A",{href:!0,class:!0});var P=h(B);I=U(P,"Settings"),P.forEach(p),D=m(C),O=u(C,"A",{href:!0,class:!0});var j=h(O);V=U(j,"Sign out"),j.forEach(p),C.forEach(p),d.forEach(p),n.forEach(p),this.h()},h(){g(r,"class","h-10 w-10 rounded-full"),r.src!==(n="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80")&&g(r,"src","https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"),g(r,"alt",""),g(o,"class","flex-shrink-0"),g(c,"class","text-base font-medium leading-none text-white"),g(b,"class","text-sm font-medium leading-none text-gray-400"),g(i,"class","ml-3"),g(a,"class","flex items-center px-5"),g(B,"href","#"),g(B,"class","block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"),g(O,"href","#"),g(O,"class","block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"),g($,"class","mt-3 px-2 space-y-1"),g(e,"class","pt-4 pb-3 border-t border-gray-700"),g(t,"class","md:hidden"),g(t,"id","mobile-menu")},m(s,n){v(s,t,n),y(t,e),y(e,a),y(a,o),y(o,r),y(a,l),y(a,i),y(i,c),y(c,x),y(i,w),y(i,b),y(b,E),y(e,k),y(e,$),y($,B),y(B,I),y($,D),y($,O),y(O,V)},d(s){s&&p(t)}}}function hs(s){let t,e,a,o,r,n,l,i,c,w,E,k,B,V,W,P,j,A,T,S,N,H,L,q,Y,J,K,_,Z,F,X,ss,ts,es,as,os,ns,ls,is,cs,ds,hs,ms,ps,gs,vs,ys,xs,ws,bs,Es,ks,$s,Bs,Is,Ds,Os,Vs,Ws,Cs,Ps,js,As,Ts,Ss,Ms,Ns,Hs,Ls,zs,Rs,Us,qs,Ys,Js,Qs,Gs;document.title=t=s[2]+" Lifepoints",a=new rs({props:{show:s[3]}});let Ks=s[0]&&fs(),_s=s[0]&&us();return{c(){e=f(),D(a.$$.fragment),o=f(),r=R(s[1]),n=f(),l=d("main"),i=d("div"),c=d("div"),w=d("nav"),E=d("div"),k=d("div"),B=d("div"),V=d("div"),W=d("img"),j=f(),A=d("div"),T=d("div"),S=d("a"),N=R("Tasks"),H=f(),L=d("a"),q=R("Rewards"),Y=f(),J=d("div"),K=d("div"),_=d("div"),Z=d("div"),F=d("button"),X=d("span"),ss=R("Open user menu"),ts=f(),es=d("img"),os=f(),Ks&&Ks.c(),ns=f(),ls=d("div"),is=d("button"),cs=d("span"),ds=R("Open main menu"),hs=f(),ms=z("svg"),ps=z("path"),gs=f(),vs=z("svg"),ys=z("path"),xs=f(),ws=d("button"),bs=d("span"),Es=R("Open main menu"),ks=f(),$s=z("svg"),Bs=z("path"),Is=f(),_s&&_s.c(),Ds=f(),Os=d("header"),Vs=d("div"),Ws=d("h1"),Cs=R("Tasks"),Ps=f(),js=d("main"),As=d("div"),Ts=d("h1"),Ss=R("Today"),Ms=f(),Ns=d("div"),Hs=d("div"),Ls=f(),zs=d("h1"),Rs=R("Overdue"),Us=f(),qs=d("div"),Ys=d("div"),this.h()},l(t){Q('[data-svelte="svelte-10uxs8a"]',document.head).forEach(p),e=m(t),M(a.$$.fragment,t),o=m(t),r=U(t,s[1]),n=m(t),l=u(t,"MAIN",{});var d=h(l);i=u(d,"DIV",{});var f=h(i);c=u(f,"DIV",{class:!0});var g=h(c);w=u(g,"NAV",{class:!0});var v=h(w);E=u(v,"DIV",{class:!0});var y=h(E);k=u(y,"DIV",{class:!0});var x=h(k);B=u(x,"DIV",{class:!0});var b=h(B);V=u(b,"DIV",{class:!0});var $=h(V);W=u($,"IMG",{class:!0,src:!0,alt:!0}),$.forEach(p),j=m(b),A=u(b,"DIV",{class:!0});var I=h(A);T=u(I,"DIV",{class:!0});var D=h(T);S=u(D,"A",{href:!0,class:!0});var O=h(S);N=U(O,"Tasks"),O.forEach(p),H=m(D),L=u(D,"A",{href:!0,class:!0});var C=h(L);q=U(C,"Rewards"),C.forEach(p),D.forEach(p),I.forEach(p),b.forEach(p),Y=m(x),J=u(x,"DIV",{class:!0});var P=h(J);K=u(P,"DIV",{class:!0});var z=h(K);_=u(z,"DIV",{class:!0});var R=h(_);Z=u(R,"DIV",{});var G=h(Z);F=u(G,"BUTTON",{type:!0,class:!0,id:!0,"aria-expanded":!0,"aria-haspopup":!0});var as=h(F);X=u(as,"SPAN",{class:!0});var rs=h(X);ss=U(rs,"Open user menu"),rs.forEach(p),ts=m(as),es=u(as,"IMG",{class:!0,src:!0,alt:!0}),as.forEach(p),G.forEach(p),os=m(R),Ks&&Ks.l(R),R.forEach(p),z.forEach(p),P.forEach(p),ns=m(x),ls=u(x,"DIV",{class:!0});var fs=h(ls);is=u(fs,"BUTTON",{type:!0,class:!0,"aria-controls":!0,"aria-expanded":!0});var us=h(is);cs=u(us,"SPAN",{class:!0});var Js=h(cs);ds=U(Js,"Open main menu"),Js.forEach(p),hs=m(us),ms=u(us,"svg",{class:!0,xmlns:!0,fill:!0,viewBox:!0,stroke:!0,"aria-hidden":!0},1);var Qs=h(ms);ps=u(Qs,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0},1),h(ps).forEach(p),Qs.forEach(p),gs=m(us),vs=u(us,"svg",{class:!0,xmlns:!0,fill:!0,viewBox:!0,stroke:!0,"aria-hidden":!0},1);var Gs=h(vs);ys=u(Gs,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0},1),h(ys).forEach(p),Gs.forEach(p),us.forEach(p),xs=m(fs),ws=u(fs,"BUTTON",{type:!0,class:!0,"aria-controls":!0,"aria-expanded":!0});var Zs=h(ws);bs=u(Zs,"SPAN",{class:!0});var Fs=h(bs);Es=U(Fs,"Open main menu"),Fs.forEach(p),ks=m(Zs),$s=u(Zs,"svg",{xmlns:!0,class:!0,fill:!0,viewBox:!0,stroke:!0},1);var Xs=h($s);Bs=u(Xs,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0},1),h(Bs).forEach(p),Xs.forEach(p),Zs.forEach(p),fs.forEach(p),x.forEach(p),y.forEach(p),Is=m(v),_s&&_s.l(v),v.forEach(p),Ds=m(g),Os=u(g,"HEADER",{class:!0});var st=h(Os);Vs=u(st,"DIV",{class:!0});var tt=h(Vs);Ws=u(tt,"H1",{class:!0});var et=h(Ws);Cs=U(et,"Tasks"),et.forEach(p),tt.forEach(p),st.forEach(p),g.forEach(p),Ps=m(f),js=u(f,"MAIN",{});var at=h(js);As=u(at,"DIV",{class:!0});var ot=h(As);Ts=u(ot,"H1",{class:!0});var rt=h(Ts);Ss=U(rt,"Today"),rt.forEach(p),Ms=m(ot),Ns=u(ot,"DIV",{class:!0});var nt=h(Ns);Hs=u(nt,"DIV",{class:!0}),h(Hs).forEach(p),nt.forEach(p),Ls=m(ot),zs=u(ot,"H1",{class:!0});var lt=h(zs);Rs=U(lt,"Overdue"),lt.forEach(p),Us=m(ot),qs=u(ot,"DIV",{class:!0});var it=h(qs);Ys=u(it,"DIV",{class:!0}),h(Ys).forEach(p),it.forEach(p),ot.forEach(p),at.forEach(p),f.forEach(p),d.forEach(p),this.h()},h(){g(W,"class","h-8 w-8"),W.src!==(P="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg")&&g(W,"src","https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"),g(W,"alt","Workflow"),g(V,"class","flex-shrink-0"),g(S,"href","#"),g(S,"class","bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"),g(L,"href","#"),g(L,"class","text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"),g(T,"class","ml-10 flex items-baseline space-x-4"),g(A,"class","hidden md:block"),g(B,"class","flex items-center"),g(X,"class","sr-only"),g(es,"class","h-8 w-8 rounded-full"),es.src!==(as="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80")&&g(es,"src","https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"),g(es,"alt",""),g(F,"type","button"),g(F,"class","max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"),g(F,"id","user-menu"),g(F,"aria-expanded","false"),g(F,"aria-haspopup","true"),g(_,"class","ml-3 relative"),g(K,"class","ml-4 flex items-center md:ml-6"),g(J,"class","hidden md:block"),g(cs,"class","sr-only"),g(ps,"stroke-linecap","round"),g(ps,"stroke-linejoin","round"),g(ps,"stroke-width","2"),g(ps,"d","M4 6h16M4 12h16M4 18h16"),g(ms,"class","block h-6 w-6"),g(ms,"xmlns","http://www.w3.org/2000/svg"),g(ms,"fill","none"),g(ms,"viewBox","0 0 24 24"),g(ms,"stroke","currentColor"),g(ms,"aria-hidden","true"),g(ys,"stroke-linecap","round"),g(ys,"stroke-linejoin","round"),g(ys,"stroke-width","2"),g(ys,"d","M6 18L18 6M6 6l12 12"),g(vs,"class","hidden h-6 w-6"),g(vs,"xmlns","http://www.w3.org/2000/svg"),g(vs,"fill","none"),g(vs,"viewBox","0 0 24 24"),g(vs,"stroke","currentColor"),g(vs,"aria-hidden","true"),g(is,"type","button"),g(is,"class","bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"),g(is,"aria-controls","mobile-menu"),g(is,"aria-expanded","false"),g(bs,"class","sr-only"),g(Bs,"stroke-linecap","round"),g(Bs,"stroke-linejoin","round"),g(Bs,"stroke-width","2"),g(Bs,"d","M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"),g($s,"xmlns","http://www.w3.org/2000/svg"),g($s,"class","h-6 w-6 block"),g($s,"fill","none"),g($s,"viewBox","0 0 24 24"),g($s,"stroke","currentColor"),g(ws,"type","button"),g(ws,"class","bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"),g(ws,"aria-controls","mobile-menu"),g(ws,"aria-expanded","false"),g(ls,"class","-mr-2 flex md:hidden"),g(k,"class","flex items-center justify-between h-16"),g(E,"class","max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"),g(w,"class","bg-gray-800"),g(Ws,"class","text-3xl font-bold text-gray-900"),g(Vs,"class","max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"),g(Os,"class","bg-white shadow"),g(c,"class","sticky top-0"),g(Ts,"class","text-2xl font-bold text-gray-900"),g(Hs,"class","border-4 border-dashed border-gray-200 rounded-lg h-24"),g(Ns,"class","px-4 py-6 sm:px-0"),g(zs,"class","text-2xl font-bold text-gray-900"),g(Ys,"class","border-4 border-dashed border-gray-200 rounded-lg h-48"),g(qs,"class","px-4 py-6 sm:px-0"),g(As,"class","max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8")},m(t,d){v(t,e,d),O(a,t,d),v(t,o,d),v(t,r,d),v(t,n,d),v(t,l,d),y(l,i),y(i,c),y(c,w),y(w,E),y(E,k),y(k,B),y(B,V),y(V,W),y(B,j),y(B,A),y(A,T),y(T,S),y(S,N),y(T,H),y(T,L),y(L,q),y(k,Y),y(k,J),y(J,K),y(K,_),y(_,Z),y(Z,F),y(F,X),y(X,ss),y(F,ts),y(F,es),y(_,os),Ks&&Ks.m(_,null),y(k,ns),y(k,ls),y(ls,is),y(is,cs),y(cs,ds),y(is,hs),y(is,ms),y(ms,ps),y(is,gs),y(is,vs),y(vs,ys),y(ls,xs),y(ls,ws),y(ws,bs),y(bs,Es),y(ws,ks),y(ws,$s),y($s,Bs),y(w,Is),_s&&_s.m(w,null),y(c,Ds),y(c,Os),y(Os,Vs),y(Vs,Ws),y(Ws,Cs),y(i,Ps),y(i,js),y(js,As),y(As,Ts),y(Ts,Ss),y(As,Ms),y(As,Ns),y(Ns,Hs),y(As,Ls),y(As,zs),y(zs,Rs),y(As,Us),y(As,qs),y(qs,Ys),Js=!0,Qs||(Gs=[x(is,"click",s[4]),x(ws,"click",s[4])],Qs=!0)},p(s,[e]){(!Js||4&e)&&t!==(t=s[2]+" Lifepoints")&&(document.title=t);const o={};8&e&&(o.show=s[3]),a.$set(o),(!Js||2&e)&&G(r,s[1]),s[0]?Ks||(Ks=fs(),Ks.c(),Ks.m(_,null)):Ks&&(Ks.d(1),Ks=null),s[0]?_s||(_s=us(),_s.c(),_s.m(w,null)):_s&&(_s.d(1),_s=null)},i(s){Js||(b(a.$$.fragment,s),Js=!0)},o(s){$(a.$$.fragment,s),Js=!1},d(s){s&&p(e),I(a,s),s&&p(o),s&&p(r),s&&p(n),s&&p(l),Ks&&Ks.d(),_s&&_s.d(),Qs=!1,C(Gs)}}}function ms(s,t,e){let a,o,r;Y(s,ns,(s=>e(1,a=s))),Y(s,_,(s=>e(2,o=s))),Y(s,ls,(s=>e(3,r=s)));let n;return""==a&&ls.set(ds),[n,a,o,r,function(){e(0,n=!n)}]}export default class extends l{constructor(s){super(),i(this,s,ms,hs,c,{})}}
