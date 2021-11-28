import{S as q,i as G,s as H,_ as V,e as m,t as x,c as v,a as b,g as w,d as f,b as g,f as y,E as u,k as E,n as I,a0 as M,G as P,O,A as z,a1 as B,h as T,a2 as C,l as A}from"../chunks/vendor-ab1573c3.js";import{b as S,l as L,d as J,m as K}from"../chunks/todoistService-139b3427.js";import{T as Q}from"../chunks/TokenCheck-1a09079c.js";function N(o,e,l){const t=o.slice();return t[6]=e[l],t}function R(o,e,l){const t=o.slice();return t[9]=e[l],t}function U(o){let e,l;return{c(){e=m("p"),l=x("Failed to retrieve rewards!")},l(t){e=v(t,"P",{});var a=b(e);l=w(a,"Failed to retrieve rewards!"),a.forEach(f)},m(t,a){y(t,e,a),u(e,l)},p:P,d(t){t&&f(e)}}}function W(o){let e,l=o[1],t=[];for(let a=0;a<l.length;a+=1)t[a]=F(N(o,l,a));return{c(){for(let a=0;a<t.length;a+=1)t[a].c();e=A()},l(a){for(let n=0;n<t.length;n+=1)t[n].l(a);e=A()},m(a,n){for(let s=0;s<t.length;s+=1)t[s].m(a,n);y(a,e,n)},p(a,n){if(n&2){l=a[1];let s;for(s=0;s<l.length;s+=1){const p=N(a,l,s);t[s]?t[s].p(p,n):(t[s]=F(p),t[s].c(),t[s].m(e.parentNode,e))}for(;s<t.length;s+=1)t[s].d(1);t.length=l.length}},d(a){C(t,a),a&&f(e)}}}function j(o){let e,l=L[o[9]]+"",t,a;return{c(){e=m("span"),t=x(l),a=x(" LP"),this.h()},l(n){e=v(n,"SPAN",{class:!0});var s=b(e);t=w(s,l),a=w(s," LP"),s.forEach(f),this.h()},h(){g(e,"class","float-right inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2")},m(n,s){y(n,e,s),u(e,t),u(e,a)},p(n,s){s&2&&l!==(l=L[n[9]]+"")&&T(t,l)},d(n){n&&f(e)}}}function F(o){let e,l,t,a,n=o[6].content+"",s,p,_,d=o[6].label_ids,r=[];for(let c=0;c<d.length;c+=1)r[c]=j(R(o,d,c));return{c(){e=m("div"),l=m("div"),t=m("div"),a=E(),s=x(n),p=E();for(let c=0;c<r.length;c+=1)r[c].c();_=E(),this.h()},l(c){e=v(c,"DIV",{class:!0});var i=b(e);l=v(i,"DIV",{class:!0});var h=b(l);t=v(h,"DIV",{class:!0}),b(t).forEach(f),h.forEach(f),a=I(i),s=w(i,n),p=I(i);for(let k=0;k<r.length;k+=1)r[k].l(i);_=I(i),i.forEach(f),this.h()},h(){g(t,"class","radio-button"),g(l,"class","radio-button-container mr-2"),g(e,"class","task-list-item w-full border-b-2 border-gray-200 px-2 py-3 hover:bg-gray-50")},m(c,i){y(c,e,i),u(e,l),u(l,t),u(e,a),u(e,s),u(e,p);for(let h=0;h<r.length;h+=1)r[h].m(e,null);u(e,_)},p(c,i){if(i&2&&n!==(n=c[6].content+"")&&T(s,n),i&2){d=c[6].label_ids;let h;for(h=0;h<d.length;h+=1){const k=R(c,d,h);r[h]?r[h].p(k,i):(r[h]=j(k),r[h].c(),r[h].m(e,_))}for(;h<r.length;h+=1)r[h].d(1);r.length=d.length}},d(c){c&&f(e),C(r,c)}}}function X(o){let e,l,t;return{c(){e=m("div"),l=m("span"),t=x("Loading tasks..."),this.h()},l(a){e=v(a,"DIV",{class:!0});var n=b(e);l=v(n,"SPAN",{class:!0});var s=b(l);t=w(s,"Loading tasks..."),s.forEach(f),n.forEach(f),this.h()},h(){g(l,"class","text-sm text-gray-300"),g(e,"class","w-full p-2 text-center")},m(a,n){y(a,e,n),u(e,l),u(l,t)},p:P,d(a){a&&f(e)}}}function Y(o){let e,l,t;return{c(){e=m("div"),l=m("span"),t=x("You don't have any rewards"),this.h()},l(a){e=v(a,"DIV",{class:!0});var n=b(e);l=v(n,"SPAN",{class:!0});var s=b(l);t=w(s,"You don't have any rewards"),s.forEach(f),n.forEach(f),this.h()},h(){g(l,"class","text-sm text-gray-300"),g(e,"class","w-full p-2 text-center")},m(a,n){y(a,e,n),u(e,l),u(l,t)},d(a){a&&f(e)}}}function Z(o){let e,l,t,a,n,s,p,_,d={ctx:o,current:null,token:null,hasCatch:!0,pending:X,then:W,catch:U,value:5,error:12};V(p=o[0],d);let r=o[1].length==0&&Y();return{c(){e=m("div"),l=m("h1"),t=x("Rewards"),a=E(),n=m("div"),s=m("div"),d.block.c(),_=E(),r&&r.c(),this.h()},l(c){e=v(c,"DIV",{class:!0});var i=b(e);l=v(i,"H1",{class:!0});var h=b(l);t=w(h,"Rewards"),h.forEach(f),a=I(i),n=v(i,"DIV",{class:!0});var k=b(n);s=v(k,"DIV",{class:!0});var D=b(s);d.block.l(D),_=I(D),r&&r.l(D),D.forEach(f),k.forEach(f),i.forEach(f),this.h()},h(){g(l,"class","text-2xl font-bold text-gray-900"),g(s,"class","rounded-lg"),g(n,"class","py-6 mb-6"),g(e,"class","max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8")},m(c,i){y(c,e,i),u(e,l),u(l,t),u(e,a),u(e,n),u(n,s),d.block.m(s,d.anchor=null),d.mount=()=>s,d.anchor=_,u(s,_),r&&r.m(s,null)},p(c,[i]){o=c,d.ctx=o,i&1&&p!==(p=o[0])&&V(p,d)||M(d,o,i),o[1].length==0?r||(r=Y(),r.c(),r.m(s,null)):r&&(r.d(1),r=null)},i:P,o:P,d(c){c&&f(e),d.block.d(),d.token=null,d=null,r&&r.d()}}}function $(o,e,l){let t;O(o,S,_=>l(2,t=_));let a=Promise.resolve([]),n=[];const s=()=>{(!t||t=="")&&K.set(Q)};async function p(){if(!t){s();return}l(0,a=J()),a.then(_=>{l(1,n=_)})}return z(async()=>{let _=localStorage.getItem("authToken");_&&B(S,t=_,t),await p(),S.subscribe(async()=>{await p()})}),[a,n]}class ae extends q{constructor(e){super();G(this,e,$,Z,H,{})}}export{ae as default};
