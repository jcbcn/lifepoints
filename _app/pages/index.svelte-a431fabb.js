import{S as Te,i as Le,s as qe,T as U,e as u,t as x,c as _,a as p,h as w,d as f,b as m,g as D,G as h,k as P,w as Ne,U as je,m as S,x as ze,y as Ae,V as ae,q as Fe,o as Ce,B as Ye,Q as ne,v as He,W as te,I as Q,H as ie,j as R,X as W,l as B}from"../chunks/vendor-a3aef2e9.js";import{a as Oe,p as oe,g as _e,b as re,l as G,m as ce,f as Me}from"../chunks/todoistService-0fe8c541.js";import{M as Ue,T as Be}from"../chunks/TokenCheck-c932f2e1.js";function pe(o,e,s){const t=o.slice();return t[18]=e[s],t}function ve(o,e,s){const t=o.slice();return t[21]=e[s],t}function me(o,e,s){const t=o.slice();return t[18]=e[s],t}function ge(o,e,s){const t=o.slice();return t[21]=e[s],t}function ke(o,e,s){const t=o.slice();return t[18]=e[s],t}function be(o,e,s){const t=o.slice();return t[21]=e[s],t}function Ge(o){let e,s;return{c(){e=u("p"),s=x("Failed to retrieve tasks!")},l(t){e=_(t,"P",{});var l=p(e);s=w(l,"Failed to retrieve tasks!"),l.forEach(f)},m(t,l){D(t,e,l),h(e,s)},p:Q,d(t){t&&f(e)}}}function Qe(o){let e,s=o[3],t=[];for(let l=0;l<s.length;l+=1)t[l]=Ee(ke(o,s,l));return{c(){for(let l=0;l<t.length;l+=1)t[l].c();e=B()},l(l){for(let a=0;a<t.length;a+=1)t[a].l(l);e=B()},m(l,a){for(let n=0;n<t.length;n+=1)t[n].m(l,a);D(l,e,a)},p(l,a){if(a[0]&72){s=l[3];let n;for(n=0;n<s.length;n+=1){const g=ke(l,s,n);t[n]?t[n].p(g,a):(t[n]=Ee(g),t[n].c(),t[n].m(e.parentNode,e))}for(;n<t.length;n+=1)t[n].d(1);t.length=s.length}},d(l){W(t,l),l&&f(e)}}}function ye(o){let e,s=G[o[21]]+"",t,l;return{c(){e=u("span"),t=x(s),l=x(" LP"),this.h()},l(a){e=_(a,"SPAN",{class:!0});var n=p(e);t=w(n,s),l=w(n," LP"),n.forEach(f),this.h()},h(){m(e,"class","float-right inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2")},m(a,n){D(a,e,n),h(e,t),h(e,l)},p(a,n){n[0]&8&&s!==(s=G[a[21]]+"")&&R(t,s)},d(a){a&&f(e)}}}function Ee(o){let e,s,t,l,a=o[18].content+"",n,g,y,I,E,b=o[18].label_ids,i=[];for(let r=0;r<b.length;r+=1)i[r]=ye(be(o,b,r));function z(){return o[8](o[18])}return{c(){e=u("div"),s=u("div"),t=u("div"),l=P(),n=x(a),g=P();for(let r=0;r<i.length;r+=1)i[r].c();y=P(),this.h()},l(r){e=_(r,"DIV",{class:!0});var d=p(e);s=_(d,"DIV",{class:!0});var c=p(s);t=_(c,"DIV",{class:!0}),p(t).forEach(f),c.forEach(f),l=S(d),n=w(d,a),g=S(d);for(let v=0;v<i.length;v+=1)i[v].l(d);y=S(d),d.forEach(f),this.h()},h(){m(t,"class","radio-button svelte-7jqz9"),m(s,"class","radio-button-container mr-2 svelte-7jqz9"),m(e,"class","task-list-item w-full border-b-2 border-gray-200 px-2 py-3 hover:bg-gray-50 svelte-7jqz9")},m(r,d){D(r,e,d),h(e,s),h(s,t),h(e,l),h(e,n),h(e,g);for(let c=0;c<i.length;c+=1)i[c].m(e,null);h(e,y),I||(E=ie(e,"click",z),I=!0)},p(r,d){if(o=r,d[0]&8&&a!==(a=o[18].content+"")&&R(n,a),d[0]&8){b=o[18].label_ids;let c;for(c=0;c<b.length;c+=1){const v=be(o,b,c);i[c]?i[c].p(v,d):(i[c]=ye(v),i[c].c(),i[c].m(e,y))}for(;c<i.length;c+=1)i[c].d(1);i.length=b.length}},d(r){r&&f(e),W(i,r),I=!1,E()}}}function Re(o){let e,s,t;return{c(){e=u("div"),s=u("span"),t=x("Loading tasks..."),this.h()},l(l){e=_(l,"DIV",{class:!0});var a=p(e);s=_(a,"SPAN",{class:!0});var n=p(s);t=w(n,"Loading tasks..."),n.forEach(f),a.forEach(f),this.h()},h(){m(s,"class","text-sm text-gray-300"),m(e,"class","w-full p-2 text-center")},m(l,a){D(l,e,a),h(e,s),h(s,t)},p:Q,d(l){l&&f(e)}}}function xe(o){let e,s,t;return{c(){e=u("div"),s=u("span"),t=x("You don't have any tasks"),this.h()},l(l){e=_(l,"DIV",{class:!0});var a=p(e);s=_(a,"SPAN",{class:!0});var n=p(s);t=w(n,"You don't have any tasks"),n.forEach(f),a.forEach(f),this.h()},h(){m(s,"class","text-sm text-gray-300"),m(e,"class","w-full p-2 text-center")},m(l,a){D(l,e,a),h(e,s),h(s,t)},d(l){l&&f(e)}}}function We(o){let e,s;return{c(){e=u("p"),s=x("Failed to retrieve tasks!")},l(t){e=_(t,"P",{});var l=p(e);s=w(l,"Failed to retrieve tasks!"),l.forEach(f)},m(t,l){D(t,e,l),h(e,s)},p:Q,d(t){t&&f(e)}}}function Xe(o){let e,s=o[2],t=[];for(let l=0;l<s.length;l+=1)t[l]=De(me(o,s,l));return{c(){for(let l=0;l<t.length;l+=1)t[l].c();e=B()},l(l){for(let a=0;a<t.length;a+=1)t[a].l(l);e=B()},m(l,a){for(let n=0;n<t.length;n+=1)t[n].m(l,a);D(l,e,a)},p(l,a){if(a[0]&68){s=l[2];let n;for(n=0;n<s.length;n+=1){const g=me(l,s,n);t[n]?t[n].p(g,a):(t[n]=De(g),t[n].c(),t[n].m(e.parentNode,e))}for(;n<t.length;n+=1)t[n].d(1);t.length=s.length}},d(l){W(t,l),l&&f(e)}}}function we(o){let e,s=G[o[21]]+"",t,l;return{c(){e=u("span"),t=x(s),l=x(" LP"),this.h()},l(a){e=_(a,"SPAN",{class:!0});var n=p(e);t=w(n,s),l=w(n," LP"),n.forEach(f),this.h()},h(){m(e,"class","float-right inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2")},m(a,n){D(a,e,n),h(e,t),h(e,l)},p(a,n){n[0]&4&&s!==(s=G[a[21]]+"")&&R(t,s)},d(a){a&&f(e)}}}function De(o){let e,s,t,l,a=o[18].content+"",n,g,y,I,E,b=o[18].label_ids,i=[];for(let r=0;r<b.length;r+=1)i[r]=we(ge(o,b,r));function z(){return o[9](o[18])}return{c(){e=u("div"),s=u("div"),t=u("div"),l=P(),n=x(a),g=P();for(let r=0;r<i.length;r+=1)i[r].c();y=P(),this.h()},l(r){e=_(r,"DIV",{class:!0});var d=p(e);s=_(d,"DIV",{class:!0});var c=p(s);t=_(c,"DIV",{class:!0}),p(t).forEach(f),c.forEach(f),l=S(d),n=w(d,a),g=S(d);for(let v=0;v<i.length;v+=1)i[v].l(d);y=S(d),d.forEach(f),this.h()},h(){m(t,"class","radio-button svelte-7jqz9"),m(s,"class","radio-button-container mr-2 svelte-7jqz9"),m(e,"class","task-list-item w-full border-b-2 border-gray-200 px-2 py-3 hover:bg-gray-50 svelte-7jqz9")},m(r,d){D(r,e,d),h(e,s),h(s,t),h(e,l),h(e,n),h(e,g);for(let c=0;c<i.length;c+=1)i[c].m(e,null);h(e,y),I||(E=ie(e,"click",z),I=!0)},p(r,d){if(o=r,d[0]&4&&a!==(a=o[18].content+"")&&R(n,a),d[0]&4){b=o[18].label_ids;let c;for(c=0;c<b.length;c+=1){const v=ge(o,b,c);i[c]?i[c].p(v,d):(i[c]=we(v),i[c].c(),i[c].m(e,y))}for(;c<i.length;c+=1)i[c].d(1);i.length=b.length}},d(r){r&&f(e),W(i,r),I=!1,E()}}}function Je(o){let e,s,t;return{c(){e=u("div"),s=u("span"),t=x("Loading tasks..."),this.h()},l(l){e=_(l,"DIV",{class:!0});var a=p(e);s=_(a,"SPAN",{class:!0});var n=p(s);t=w(n,"Loading tasks..."),n.forEach(f),a.forEach(f),this.h()},h(){m(s,"class","text-sm text-gray-300"),m(e,"class","w-full p-2 text-center")},m(l,a){D(l,e,a),h(e,s),h(s,t)},p:Q,d(l){l&&f(e)}}}function Ie(o){let e,s,t;return{c(){e=u("div"),s=u("span"),t=x("You don't have any upcoming tasks"),this.h()},l(l){e=_(l,"DIV",{class:!0});var a=p(e);s=_(a,"SPAN",{class:!0});var n=p(s);t=w(n,"You don't have any upcoming tasks"),n.forEach(f),a.forEach(f),this.h()},h(){m(s,"class","text-sm text-gray-300"),m(e,"class","w-full p-2 text-center")},m(l,a){D(l,e,a),h(e,s),h(s,t)},d(l){l&&f(e)}}}function Ke(o){let e,s;return{c(){e=u("p"),s=x("Failed to retrieve tasks!")},l(t){e=_(t,"P",{});var l=p(e);s=w(l,"Failed to retrieve tasks!"),l.forEach(f)},m(t,l){D(t,e,l),h(e,s)},p:Q,d(t){t&&f(e)}}}function Ze(o){let e,s=o[1],t=[];for(let l=0;l<s.length;l+=1)t[l]=Pe(pe(o,s,l));return{c(){for(let l=0;l<t.length;l+=1)t[l].c();e=B()},l(l){for(let a=0;a<t.length;a+=1)t[a].l(l);e=B()},m(l,a){for(let n=0;n<t.length;n+=1)t[n].m(l,a);D(l,e,a)},p(l,a){if(a[0]&66){s=l[1];let n;for(n=0;n<s.length;n+=1){const g=pe(l,s,n);t[n]?t[n].p(g,a):(t[n]=Pe(g),t[n].c(),t[n].m(e.parentNode,e))}for(;n<t.length;n+=1)t[n].d(1);t.length=s.length}},d(l){W(t,l),l&&f(e)}}}function Ve(o){let e,s=G[o[21]]+"",t,l;return{c(){e=u("span"),t=x(s),l=x(" LP"),this.h()},l(a){e=_(a,"SPAN",{class:!0});var n=p(e);t=w(n,s),l=w(n," LP"),n.forEach(f),this.h()},h(){m(e,"class","float-right inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2")},m(a,n){D(a,e,n),h(e,t),h(e,l)},p(a,n){n[0]&2&&s!==(s=G[a[21]]+"")&&R(t,s)},d(a){a&&f(e)}}}function Pe(o){let e,s,t,l,a=o[18].content+"",n,g,y,I,E,b=o[18].label_ids,i=[];for(let r=0;r<b.length;r+=1)i[r]=Ve(ve(o,b,r));function z(){return o[10](o[18])}return{c(){e=u("div"),s=u("div"),t=u("div"),l=P(),n=x(a),g=P();for(let r=0;r<i.length;r+=1)i[r].c();y=P(),this.h()},l(r){e=_(r,"DIV",{class:!0});var d=p(e);s=_(d,"DIV",{class:!0});var c=p(s);t=_(c,"DIV",{class:!0}),p(t).forEach(f),c.forEach(f),l=S(d),n=w(d,a),g=S(d);for(let v=0;v<i.length;v+=1)i[v].l(d);y=S(d),d.forEach(f),this.h()},h(){m(t,"class","radio-button svelte-7jqz9"),m(s,"class","radio-button-container mr-2 svelte-7jqz9"),m(e,"class","task-list-item w-full border-b-2 border-gray-200 px-2 py-3 hover:bg-gray-50 svelte-7jqz9")},m(r,d){D(r,e,d),h(e,s),h(s,t),h(e,l),h(e,n),h(e,g);for(let c=0;c<i.length;c+=1)i[c].m(e,null);h(e,y),I||(E=ie(e,"click",z),I=!0)},p(r,d){if(o=r,d[0]&2&&a!==(a=o[18].content+"")&&R(n,a),d[0]&2){b=o[18].label_ids;let c;for(c=0;c<b.length;c+=1){const v=ve(o,b,c);i[c]?i[c].p(v,d):(i[c]=Ve(v),i[c].c(),i[c].m(e,y))}for(;c<i.length;c+=1)i[c].d(1);i.length=b.length}},d(r){r&&f(e),W(i,r),I=!1,E()}}}function $e(o){let e,s,t;return{c(){e=u("div"),s=u("span"),t=x("Loading tasks..."),this.h()},l(l){e=_(l,"DIV",{class:!0});var a=p(e);s=_(a,"SPAN",{class:!0});var n=p(s);t=w(n,"Loading tasks..."),n.forEach(f),a.forEach(f),this.h()},h(){m(s,"class","text-sm text-gray-300"),m(e,"class","w-full p-2 text-center")},m(l,a){D(l,e,a),h(e,s),h(s,t)},p:Q,d(l){l&&f(e)}}}function Se(o){let e,s,t;return{c(){e=u("div"),s=u("span"),t=x("You don't have any upcoming tasks"),this.h()},l(l){e=_(l,"DIV",{class:!0});var a=p(e);s=_(a,"SPAN",{class:!0});var n=p(s);t=w(n,"You don't have any upcoming tasks"),n.forEach(f),a.forEach(f),this.h()},h(){m(s,"class","text-sm text-gray-300"),m(e,"class","w-full p-2 text-center")},m(l,a){D(l,e,a),h(e,s),h(s,t)},d(l){l&&f(e)}}}function et(o){let e,s,t,l,a,n,g,y,I,E,b,i,z,r,d,c,v,O,M,k,H,le,se,Y,J,K,X;document.title=e=o[4]+" Lifepoints",t=new Ue({props:{show:o[5]}});let A={ctx:o,current:null,token:null,hasCatch:!0,pending:Re,then:Qe,catch:Ge,value:17,error:24};U(b=o[0],A);let T=o[3].length==0&&xe(),F={ctx:o,current:null,token:null,hasCatch:!0,pending:Je,then:Xe,catch:We,value:17,error:24};U(O=o[0],F);let L=o[2].length==0&&Ie(),C={ctx:o,current:null,token:null,hasCatch:!0,pending:$e,then:Ze,catch:Ke,value:17,error:24};U(J=o[0],C);let q=o[1].length==0&&Se();return{c(){s=P(),Ne(t.$$.fragment),l=P(),a=u("div"),n=u("h1"),g=x("Today"),y=P(),I=u("div"),E=u("div"),A.block.c(),i=P(),T&&T.c(),z=P(),r=u("h1"),d=x("Overdue"),c=P(),v=u("div"),F.block.c(),M=P(),L&&L.c(),k=P(),H=u("h1"),le=x("Upcoming"),se=P(),Y=u("div"),C.block.c(),K=P(),q&&q.c(),this.h()},l(V){je('[data-svelte="svelte-1a238no"]',document.head).forEach(f),s=S(V),ze(t.$$.fragment,V),l=S(V),a=_(V,"DIV",{class:!0});var N=p(a);n=_(N,"H1",{class:!0});var he=p(n);g=w(he,"Today"),he.forEach(f),y=S(N),I=_(N,"DIV",{class:!0});var fe=p(I);E=_(fe,"DIV",{class:!0});var Z=p(E);A.block.l(Z),i=S(Z),T&&T.l(Z),Z.forEach(f),fe.forEach(f),z=S(N),r=_(N,"H1",{class:!0});var de=p(r);d=w(de,"Overdue"),de.forEach(f),c=S(N),v=_(N,"DIV",{class:!0});var $=p(v);F.block.l($),M=S($),L&&L.l($),$.forEach(f),k=S(N),H=_(N,"H1",{class:!0});var ue=p(H);le=w(ue,"Upcoming"),ue.forEach(f),se=S(N),Y=_(N,"DIV",{class:!0});var ee=p(Y);C.block.l(ee),K=S(ee),q&&q.l(ee),ee.forEach(f),N.forEach(f),this.h()},h(){m(n,"class","text-2xl font-bold text-gray-900"),m(E,"class","rounded-lg"),m(I,"class","py-6 mb-6"),m(r,"class","text-2xl font-bold text-gray-900"),m(v,"class","py-6 mb-6"),m(H,"class","text-2xl font-bold text-gray-900"),m(Y,"class","px-4 py-6 sm:px-0"),m(a,"class","max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8")},m(V,j){D(V,s,j),Ae(t,V,j),D(V,l,j),D(V,a,j),h(a,n),h(n,g),h(a,y),h(a,I),h(I,E),A.block.m(E,A.anchor=null),A.mount=()=>E,A.anchor=i,h(E,i),T&&T.m(E,null),h(a,z),h(a,r),h(r,d),h(a,c),h(a,v),F.block.m(v,F.anchor=null),F.mount=()=>v,F.anchor=M,h(v,M),L&&L.m(v,null),h(a,k),h(a,H),h(H,le),h(a,se),h(a,Y),C.block.m(Y,C.anchor=null),C.mount=()=>Y,C.anchor=K,h(Y,K),q&&q.m(Y,null),X=!0},p(V,j){o=V,(!X||j[0]&16)&&e!==(e=o[4]+" Lifepoints")&&(document.title=e);const N={};j[0]&32&&(N.show=o[5]),t.$set(N),A.ctx=o,j[0]&1&&b!==(b=o[0])&&U(b,A)||ae(A,o,j),o[3].length==0?T||(T=xe(),T.c(),T.m(E,null)):T&&(T.d(1),T=null),F.ctx=o,j[0]&1&&O!==(O=o[0])&&U(O,F)||ae(F,o,j),o[2].length==0?L||(L=Ie(),L.c(),L.m(v,null)):L&&(L.d(1),L=null),C.ctx=o,j[0]&1&&J!==(J=o[0])&&U(J,C)||ae(C,o,j),o[1].length==0?q||(q=Se(),q.c(),q.m(Y,null)):q&&(q.d(1),q=null)},i(V){X||(Fe(t.$$.fragment,V),X=!0)},o(V){Ce(t.$$.fragment,V),X=!1},d(V){V&&f(s),Ye(t,V),V&&f(l),V&&f(a),A.block.d(),A.token=null,A=null,T&&T.d(),F.block.d(),F.token=null,F=null,L&&L.d(),C.block.d(),C.token=null,C=null,q&&q.d()}}}function tt(o,e,s){let t,l,a,n,g,y;ne(o,re,k=>s(11,n=k)),ne(o,oe,k=>s(4,g=k)),ne(o,ce,k=>s(5,y=k));const I=()=>{(!n||n=="")&&ce.set(Be)},E=new Date().toISOString().split("T")[0],b=new Date;b.setDate(b.getDate()+1);const i=b.toISOString().split("T")[0];let z=Promise.resolve([]),r=[];async function d(k){try{await Oe(k),k.done=!0,s(7,r=r.filter(H=>!H.done)),te(oe,g=await _e(),g)}catch{alert("failed to complete task")}}async function c(){if(te(ce,y=null,y),!n){I();return}s(0,z=Me()),z.then(k=>{s(7,r=k)}),te(oe,g=await _e(),g)}He(async()=>{let k=localStorage.getItem("authToken");k&&te(re,n=k,n),await c(),re.subscribe(async()=>{await c()})});const v=k=>d(k),O=k=>d(k),M=k=>d(k);return o.$$.update=()=>{o.$$.dirty[0]&128&&s(3,t=r.filter(k=>k.due.date==E)),o.$$.dirty[0]&128&&s(2,l=r.filter(k=>k.due.date!=E&&k.due.date!=i)),o.$$.dirty[0]&128&&s(1,a=r.filter(k=>k.due.date==i))},[z,a,l,t,g,y,d,r,v,O,M]}class nt extends Te{constructor(e){super();Le(this,e,tt,et,qe,{},null,[-1,-1])}}export{nt as default};
