import{G as a,S as e,i as s,s as t,e as r,t as o,j as l,c,a as n,b as i,d as h,l as d,o as f,f as u,g as m,H as p,n as v,I as g,J as x,K as b,h as y,L as w,M as k,B as E,k as I,N as D}from"../chunks/index-9a90a729.js";import{w as V}from"../chunks/index-8b61b1c8.js";const S=V(0),T=V(""),j=V(""),O="todoist.com/oauth",A="fbd7ba2571b646b2acb80a310365a920",B="";function M(){window.location.href=`https://${O}/authorize?client_id=${A}&scope=data%3Aread_write&state=TODO`}const P=async()=>{const e={method:"POST",headers:{"content-type":"application/x-www-form-urlencoded;charset=UTF-8"},body:new URLSearchParams({client_id:A,client_secret:B,code:a(T),redirect_uri:"https://localhost:3000/callback"})},s=await fetch(`https://${O}/access_token`,e),t=await s.json();j.set(t.access_token)};function N(a,e,s){const t=a.slice();return t[10]=e[s],t}function _(a,e,s){const t=a.slice();return t[13]=e[s],t}function H(a){let e,s,t,p,v,g,x,b,y;return{c(){e=r("div"),s=r("a"),t=o("Your Todoist"),p=l(),v=r("a"),g=o("Settings"),x=l(),b=r("a"),y=o("Sign out"),this.h()},l(a){e=c(a,"DIV",{class:!0,role:!0,"aria-orientation":!0,"aria-labelledby":!0});var r=n(e);s=c(r,"A",{href:!0,class:!0,role:!0});var o=n(s);t=i(o,"Your Todoist"),o.forEach(h),p=d(r),v=c(r,"A",{href:!0,class:!0,role:!0});var l=n(v);g=i(l,"Settings"),l.forEach(h),x=d(r),b=c(r,"A",{href:!0,class:!0,role:!0});var f=n(b);y=i(f,"Sign out"),f.forEach(h),r.forEach(h),this.h()},h(){f(s,"href","#"),f(s,"class","block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"),f(s,"role","menuitem"),f(v,"href","#"),f(v,"class","block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"),f(v,"role","menuitem"),f(b,"href","#"),f(b,"class","block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"),f(b,"role","menuitem"),f(e,"class","origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"),f(e,"role","menu"),f(e,"aria-orientation","vertical"),f(e,"aria-labelledby","user-menu")},m(a,r){u(a,e,r),m(e,s),m(s,t),m(e,p),m(e,v),m(v,g),m(e,x),m(e,b),m(b,y)},d(a){a&&h(e)}}}function C(a){let e,s,t,g,x,b,y,w,k,E,I,D,V,S,T,j,O,A,B,M,P,N;return{c(){e=r("div"),s=r("div"),t=r("div"),g=r("div"),x=r("img"),y=l(),w=r("div"),k=r("div"),E=o("Bob Smith"),I=l(),D=r("div"),V=o("bob@example.com"),S=l(),T=r("div"),j=r("a"),O=o("Settings"),A=l(),B=r("a"),M=o("Sign out"),this.h()},l(a){e=c(a,"DIV",{class:!0,id:!0});var r=n(e);s=c(r,"DIV",{class:!0});var o=n(s);t=c(o,"DIV",{class:!0});var l=n(t);g=c(l,"DIV",{class:!0});var f=n(g);x=c(f,"IMG",{class:!0,src:!0,alt:!0}),f.forEach(h),y=d(l),w=c(l,"DIV",{class:!0});var u=n(w);k=c(u,"DIV",{class:!0});var m=n(k);E=i(m,"Bob Smith"),m.forEach(h),I=d(u),D=c(u,"DIV",{class:!0});var p=n(D);V=i(p,"bob@example.com"),p.forEach(h),u.forEach(h),l.forEach(h),S=d(o),T=c(o,"DIV",{class:!0});var v=n(T);j=c(v,"A",{href:!0,class:!0});var b=n(j);O=i(b,"Settings"),b.forEach(h),A=d(v),B=c(v,"A",{href:!0,class:!0});var P=n(B);M=i(P,"Sign out"),P.forEach(h),v.forEach(h),o.forEach(h),r.forEach(h),this.h()},h(){f(x,"class","h-10 w-10 rounded-full"),x.src!==(b="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80")&&f(x,"src","https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"),f(x,"alt",""),f(g,"class","flex-shrink-0"),f(k,"class","text-base font-medium leading-none text-white"),f(D,"class","text-sm font-medium leading-none text-gray-400"),f(w,"class","ml-3"),f(t,"class","flex items-center px-5"),f(j,"href","#"),f(j,"class","block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"),f(B,"href","#"),f(B,"class","block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"),f(T,"class","mt-3 px-2 space-y-1"),f(s,"class","pt-4 pb-3 border-t border-gray-700"),f(e,"class","md:hidden"),f(e,"id","mobile-menu")},m(r,o){u(r,e,o),m(e,s),m(s,t),m(t,g),m(g,x),m(t,y),m(t,w),m(w,k),m(k,E),m(w,I),m(w,D),m(D,V),m(s,S),m(s,T),m(T,j),m(j,O),m(T,A),m(T,B),m(B,M),P||(N=p(B,"click",a[7]),P=!0)},p:v,d(a){a&&h(e),P=!1,N()}}}function L(a){let e,s;return{c(){e=r("p"),s=o("Failed to retrieve tasks!")},l(a){e=c(a,"P",{});var t=n(e);s=i(t,"Failed to retrieve tasks!"),t.forEach(h)},m(a,t){u(a,e,t),m(e,s)},p:v,d(a){a&&h(e)}}}function J(a){let e,s=a[9],t=[];for(let r=0;r<s.length;r+=1)t[r]=W(N(a,s,r));return{c(){for(let a=0;a<t.length;a+=1)t[a].c();e=I()},l(a){for(let e=0;e<t.length;e+=1)t[e].l(a);e=I()},m(a,s){for(let e=0;e<t.length;e+=1)t[e].m(a,s);u(a,e,s)},p(a,r){if(34&r){let o;for(s=a[9],o=0;o<s.length;o+=1){const l=N(a,s,o);t[o]?t[o].p(l,r):(t[o]=W(l),t[o].c(),t[o].m(e.parentNode,e))}for(;o<t.length;o+=1)t[o].d(1);t.length=s.length}},d(a){D(t,a),a&&h(e)}}}function U(a){let e,s,t=a[5][a[13]]+"";return{c(){e=r("span"),s=o(t),this.h()},l(a){e=c(a,"SPAN",{class:!0});var r=n(e);s=i(r,t),r.forEach(h),this.h()},h(){f(e,"class","inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2")},m(a,t){u(a,e,t),m(e,s)},p(a,e){2&e&&t!==(t=a[5][a[13]]+"")&&y(s,t)},d(a){a&&h(e)}}}function W(a){let e,s,t,f,p=a[10].content+"",v=a[10].label_ids,g=[];for(let r=0;r<v.length;r+=1)g[r]=U(_(a,v,r));return{c(){e=r("p"),s=o(p),t=l();for(let a=0;a<g.length;a+=1)g[a].c();f=I()},l(a){e=c(a,"P",{});var r=n(e);s=i(r,p),r.forEach(h),t=d(a);for(let e=0;e<g.length;e+=1)g[e].l(a);f=I()},m(a,r){u(a,e,r),m(e,s),u(a,t,r);for(let e=0;e<g.length;e+=1)g[e].m(a,r);u(a,f,r)},p(a,e){if(2&e&&p!==(p=a[10].content+"")&&y(s,p),34&e){let s;for(v=a[10].label_ids,s=0;s<v.length;s+=1){const t=_(a,v,s);g[s]?g[s].p(t,e):(g[s]=U(t),g[s].c(),g[s].m(f.parentNode,f))}for(;s<g.length;s+=1)g[s].d(1);g.length=v.length}},d(a){a&&h(e),a&&h(t),D(g,a),a&&h(f)}}}function q(a){let e,s;return{c(){e=r("p"),s=o("Loading tasks...")},l(a){e=c(a,"P",{});var t=n(e);s=i(t,"Loading tasks..."),t.forEach(h)},m(a,t){u(a,e,t),m(e,s)},p:v,d(a){a&&h(e)}}}function G(a){let e,s,t,k,E,I,D,V,S,T,j,O,A,B,M,P,N,_,U,W,G,Q,R,$,z,F,Y,K,X,Z,aa,ea,sa,ta,ra,oa,la,ca,na,ia,ha,da,fa,ua,ma,pa,va,ga,xa,ba,ya,wa,ka,Ea,Ia,Da,Va,Sa,Ta,ja,Oa,Aa,Ba,Ma,Pa,Na,_a,Ha,Ca,La,Ja,Ua,Wa,qa,Ga,Qa,Ra;document.title=e=a[2]+" Lifepoints";let $a=a[0]&&H(),za=a[0]&&C(a),Fa={ctx:a,current:null,token:null,hasCatch:!0,pending:q,then:J,catch:L,value:9,error:16};return g(Ca=a[1],Fa),{c(){s=l(),t=r("main"),k=o(a[3]),E=l(),I=o(a[4]),D=l(),V=r("div"),S=r("div"),T=r("nav"),j=r("div"),O=r("div"),A=r("div"),B=r("div"),M=r("img"),N=l(),_=r("div"),U=r("div"),W=r("a"),G=o("Tasks"),Q=l(),R=r("a"),$=o("Rewards"),z=l(),F=r("div"),Y=r("div"),K=r("div"),X=r("div"),Z=r("button"),aa=r("span"),ea=o("Open user menu"),sa=l(),ta=r("img"),oa=l(),$a&&$a.c(),la=l(),ca=r("div"),na=r("button"),ia=r("span"),ha=o("Open main menu"),da=l(),fa=x("svg"),ua=x("path"),ma=l(),pa=x("svg"),va=x("path"),ga=l(),xa=r("button"),ba=r("span"),ya=o("Open main menu"),wa=l(),ka=x("svg"),Ea=x("path"),Ia=l(),za&&za.c(),Da=l(),Va=r("header"),Sa=r("div"),Ta=r("h1"),ja=o("Tasks"),Oa=l(),Aa=r("main"),Ba=r("div"),Ma=r("h1"),Pa=o("Today"),Na=l(),_a=r("div"),Ha=r("div"),Fa.block.c(),La=l(),Ja=r("h1"),Ua=o("Overdue"),Wa=l(),qa=r("div"),Ga=r("div"),this.h()},l(e){b('[data-svelte="svelte-10uxs8a"]',document.head).forEach(h),s=d(e),t=c(e,"MAIN",{});var r=n(t);k=i(r,a[3]),E=d(r),I=i(r,a[4]),D=d(r),V=c(r,"DIV",{});var o=n(V);S=c(o,"DIV",{class:!0});var l=n(S);T=c(l,"NAV",{class:!0});var f=n(T);j=c(f,"DIV",{class:!0});var u=n(j);O=c(u,"DIV",{class:!0});var m=n(O);A=c(m,"DIV",{class:!0});var p=n(A);B=c(p,"DIV",{class:!0});var v=n(B);M=c(v,"IMG",{class:!0,src:!0,alt:!0}),v.forEach(h),N=d(p),_=c(p,"DIV",{class:!0});var g=n(_);U=c(g,"DIV",{class:!0});var x=n(U);W=c(x,"A",{href:!0,class:!0});var y=n(W);G=i(y,"Tasks"),y.forEach(h),Q=d(x),R=c(x,"A",{href:!0,class:!0});var w=n(R);$=i(w,"Rewards"),w.forEach(h),x.forEach(h),g.forEach(h),p.forEach(h),z=d(m),F=c(m,"DIV",{class:!0});var P=n(F);Y=c(P,"DIV",{class:!0});var H=n(Y);K=c(H,"DIV",{class:!0});var C=n(K);X=c(C,"DIV",{});var L=n(X);Z=c(L,"BUTTON",{type:!0,class:!0,id:!0,"aria-expanded":!0,"aria-haspopup":!0});var J=n(Z);aa=c(J,"SPAN",{class:!0});var q=n(aa);ea=i(q,"Open user menu"),q.forEach(h),sa=d(J),ta=c(J,"IMG",{class:!0,src:!0,alt:!0}),J.forEach(h),L.forEach(h),oa=d(C),$a&&$a.l(C),C.forEach(h),H.forEach(h),P.forEach(h),la=d(m),ca=c(m,"DIV",{class:!0});var ra=n(ca);na=c(ra,"BUTTON",{type:!0,class:!0,"aria-controls":!0,"aria-expanded":!0});var Ca=n(na);ia=c(Ca,"SPAN",{class:!0});var Qa=n(ia);ha=i(Qa,"Open main menu"),Qa.forEach(h),da=d(Ca),fa=c(Ca,"svg",{class:!0,xmlns:!0,fill:!0,viewBox:!0,stroke:!0,"aria-hidden":!0},1);var Ra=n(fa);ua=c(Ra,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0},1),n(ua).forEach(h),Ra.forEach(h),ma=d(Ca),pa=c(Ca,"svg",{class:!0,xmlns:!0,fill:!0,viewBox:!0,stroke:!0,"aria-hidden":!0},1);var Ya=n(pa);va=c(Ya,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0},1),n(va).forEach(h),Ya.forEach(h),Ca.forEach(h),ga=d(ra),xa=c(ra,"BUTTON",{type:!0,class:!0,"aria-controls":!0,"aria-expanded":!0});var Ka=n(xa);ba=c(Ka,"SPAN",{class:!0});var Xa=n(ba);ya=i(Xa,"Open main menu"),Xa.forEach(h),wa=d(Ka),ka=c(Ka,"svg",{xmlns:!0,class:!0,fill:!0,viewBox:!0,stroke:!0},1);var Za=n(ka);Ea=c(Za,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0},1),n(Ea).forEach(h),Za.forEach(h),Ka.forEach(h),ra.forEach(h),m.forEach(h),u.forEach(h),Ia=d(f),za&&za.l(f),f.forEach(h),Da=d(l),Va=c(l,"HEADER",{class:!0});var ae=n(Va);Sa=c(ae,"DIV",{class:!0});var ee=n(Sa);Ta=c(ee,"H1",{class:!0});var se=n(Ta);ja=i(se,"Tasks"),se.forEach(h),ee.forEach(h),ae.forEach(h),l.forEach(h),Oa=d(o),Aa=c(o,"MAIN",{});var te=n(Aa);Ba=c(te,"DIV",{class:!0});var re=n(Ba);Ma=c(re,"H1",{class:!0});var oe=n(Ma);Pa=i(oe,"Today"),oe.forEach(h),Na=d(re),_a=c(re,"DIV",{class:!0});var le=n(_a);Ha=c(le,"DIV",{class:!0});var ce=n(Ha);Fa.block.l(ce),ce.forEach(h),le.forEach(h),La=d(re),Ja=c(re,"H1",{class:!0});var ne=n(Ja);Ua=i(ne,"Overdue"),ne.forEach(h),Wa=d(re),qa=c(re,"DIV",{class:!0});var ie=n(qa);Ga=c(ie,"DIV",{class:!0}),n(Ga).forEach(h),ie.forEach(h),re.forEach(h),te.forEach(h),o.forEach(h),r.forEach(h),this.h()},h(){f(M,"class","h-8 w-8"),M.src!==(P="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg")&&f(M,"src","https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"),f(M,"alt","Workflow"),f(B,"class","flex-shrink-0"),f(W,"href","#"),f(W,"class","bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"),f(R,"href","#"),f(R,"class","text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"),f(U,"class","ml-10 flex items-baseline space-x-4"),f(_,"class","hidden md:block"),f(A,"class","flex items-center"),f(aa,"class","sr-only"),f(ta,"class","h-8 w-8 rounded-full"),ta.src!==(ra="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80")&&f(ta,"src","https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"),f(ta,"alt",""),f(Z,"type","button"),f(Z,"class","max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"),f(Z,"id","user-menu"),f(Z,"aria-expanded","false"),f(Z,"aria-haspopup","true"),f(K,"class","ml-3 relative"),f(Y,"class","ml-4 flex items-center md:ml-6"),f(F,"class","hidden md:block"),f(ia,"class","sr-only"),f(ua,"stroke-linecap","round"),f(ua,"stroke-linejoin","round"),f(ua,"stroke-width","2"),f(ua,"d","M4 6h16M4 12h16M4 18h16"),f(fa,"class","block h-6 w-6"),f(fa,"xmlns","http://www.w3.org/2000/svg"),f(fa,"fill","none"),f(fa,"viewBox","0 0 24 24"),f(fa,"stroke","currentColor"),f(fa,"aria-hidden","true"),f(va,"stroke-linecap","round"),f(va,"stroke-linejoin","round"),f(va,"stroke-width","2"),f(va,"d","M6 18L18 6M6 6l12 12"),f(pa,"class","hidden h-6 w-6"),f(pa,"xmlns","http://www.w3.org/2000/svg"),f(pa,"fill","none"),f(pa,"viewBox","0 0 24 24"),f(pa,"stroke","currentColor"),f(pa,"aria-hidden","true"),f(na,"type","button"),f(na,"class","bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"),f(na,"aria-controls","mobile-menu"),f(na,"aria-expanded","false"),f(ba,"class","sr-only"),f(Ea,"stroke-linecap","round"),f(Ea,"stroke-linejoin","round"),f(Ea,"stroke-width","2"),f(Ea,"d","M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"),f(ka,"xmlns","http://www.w3.org/2000/svg"),f(ka,"class","h-6 w-6 block"),f(ka,"fill","none"),f(ka,"viewBox","0 0 24 24"),f(ka,"stroke","currentColor"),f(xa,"type","button"),f(xa,"class","bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"),f(xa,"aria-controls","mobile-menu"),f(xa,"aria-expanded","false"),f(ca,"class","-mr-2 flex md:hidden"),f(O,"class","flex items-center justify-between h-16"),f(j,"class","max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"),f(T,"class","bg-gray-800"),f(Ta,"class","text-3xl font-bold text-gray-900"),f(Sa,"class","max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"),f(Va,"class","bg-white shadow"),f(S,"class","sticky top-0"),f(Ma,"class","text-2xl font-bold text-gray-900"),f(Ha,"class","border-4 border-dashed border-gray-200 rounded-lg h-24"),f(_a,"class","px-4 py-6 sm:px-0"),f(Ja,"class","text-2xl font-bold text-gray-900"),f(Ga,"class","border-4 border-dashed border-gray-200 rounded-lg h-48"),f(qa,"class","px-4 py-6 sm:px-0"),f(Ba,"class","max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8")},m(e,r){u(e,s,r),u(e,t,r),m(t,k),m(t,E),m(t,I),m(t,D),m(t,V),m(V,S),m(S,T),m(T,j),m(j,O),m(O,A),m(A,B),m(B,M),m(A,N),m(A,_),m(_,U),m(U,W),m(W,G),m(U,Q),m(U,R),m(R,$),m(O,z),m(O,F),m(F,Y),m(Y,K),m(K,X),m(X,Z),m(Z,aa),m(aa,ea),m(Z,sa),m(Z,ta),m(K,oa),$a&&$a.m(K,null),m(O,la),m(O,ca),m(ca,na),m(na,ia),m(ia,ha),m(na,da),m(na,fa),m(fa,ua),m(na,ma),m(na,pa),m(pa,va),m(ca,ga),m(ca,xa),m(xa,ba),m(ba,ya),m(xa,wa),m(xa,ka),m(ka,Ea),m(T,Ia),za&&za.m(T,null),m(S,Da),m(S,Va),m(Va,Sa),m(Sa,Ta),m(Ta,ja),m(V,Oa),m(V,Aa),m(Aa,Ba),m(Ba,Ma),m(Ma,Pa),m(Ba,Na),m(Ba,_a),m(_a,Ha),Fa.block.m(Ha,Fa.anchor=null),Fa.mount=()=>Ha,Fa.anchor=null,m(Ba,La),m(Ba,Ja),m(Ja,Ua),m(Ba,Wa),m(Ba,qa),m(qa,Ga),Qa||(Ra=[p(Z,"click",a[7]),p(na,"click",a[6]),p(xa,"click",a[6])],Qa=!0)},p(s,[t]){if(a=s,4&t&&e!==(e=a[2]+" Lifepoints")&&(document.title=e),8&t&&y(k,a[3]),16&t&&y(I,a[4]),a[0]?$a||($a=H(),$a.c(),$a.m(K,null)):$a&&($a.d(1),$a=null),a[0]?za?za.p(a,t):(za=C(a),za.c(),za.m(T,null)):za&&(za.d(1),za=null),Fa.ctx=a,2&t&&Ca!==(Ca=a[1])&&g(Ca,Fa));else{const e=a.slice();e[9]=e[16]=Fa.resolved,Fa.block.p(e,t)}},i:v,o:v,d(a){a&&h(s),a&&h(t),$a&&$a.d(),za&&za.d(),Fa.block.d(),Fa.token=null,Fa=null,Qa=!1,w(Ra)}}}function Q(e,s,t){let r,o,l;k(e,S,(a=>t(2,r=a))),k(e,T,(a=>t(3,o=a))),k(e,j,(a=>t(4,l=a)));var c=this&&this.__awaiter||function(a,e,s,t){return new(s||(s=Promise))((function(r,o){function l(a){try{n(t.next(a))}catch(e){o(e)}}function c(a){try{n(t.throw(a))}catch(e){o(e)}}function n(a){var e;a.done?r(a.value):(e=a.value,e instanceof s?e:new s((function(a){a(e)}))).then(l,c)}n((t=t.apply(a,e||[])).next())}))};let n;let i=Promise.resolve([]);return E((()=>c(void 0,void 0,void 0,(function*(){yield async function(){var a=sessionStorage.getItem("authToken");sessionStorage.getItem("accessToken"),a&&(T.set(a),await P())}().then((()=>{t(1,i=(async()=>{let e={headers:{Authorization:`Bearer ${a(j)}`}};const s=await fetch("https://api.todoist.com/rest/v1//tasks?filter=(today%20%7C%20overdue)%20%26%20(%401P%20%7C%20%402P%20%7C%20%403P%20%7C%20%405P)",e);return await s.json()})())}))})))),[n,i,r,o,l,{2156538858:"1P"},function(){t(0,n=!n)},function(){M()}]}export default class extends e{constructor(a){super(),s(this,a,Q,G,t,{})}}
