function t(){}const n=t=>t;function e(t,n){for(const e in n)t[e]=n[e];return t}function o(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(o)}function c(t){return"function"==typeof t}function u(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}function a(t){let n;return i(t,(t=>n=t))(),n}function l(t,n,e){t.$$.on_destroy.push(i(n,e))}function f(t,n,e,o){if(t){const r=d(t,n,e,o);return t[0](r)}}function d(t,n,o,r){return t[1]&&r?e(o.ctx.slice(),t[1](r(n))):o.ctx}function h(t,n,e,o,r,s,c){const u=function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(n,o,r,s);if(u){const r=d(n,e,o,c);t.p(r,u)}}function p(t,n,e=n){return t.set(e),n}const $="undefined"!=typeof window;let m=$?()=>window.performance.now():()=>Date.now(),b=$?t=>requestAnimationFrame(t):t;const g=new Set;function y(t){g.forEach((n=>{n.c(t)||(g.delete(n),n.f())})),0!==g.size&&b(y)}function _(t,n){t.appendChild(n)}function v(t,n,e){t.insertBefore(n,e||null)}function w(t){t.parentNode.removeChild(t)}function x(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function k(t){return document.createElement(t)}function E(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function A(t){return document.createTextNode(t)}function j(){return A(" ")}function C(){return A("")}function S(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function N(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function O(t){return Array.from(t.childNodes)}function T(t,n,e,o){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===n){let n=0;const s=[];for(;n<o.attributes.length;){const t=o.attributes[n++];e[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return o?E(n):k(n)}function R(t,n){for(let e=0;e<t.length;e+=1){const o=t[e];if(3===o.nodeType)return o.data=""+n,t.splice(e,1)[0]}return A(n)}function q(t){return R(t," ")}function z(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function M(t,n){t.value=null==n?"":n}function P(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}function D(t,n=document.body){return Array.from(n.querySelectorAll(t))}const F=new Set;let L,B=0;function G(t,n,e,o,r,s,c,u=0){const i=16.666/o;let a="{\n";for(let m=0;m<=1;m+=i){const t=n+(e-n)*s(m);a+=100*m+`%{${c(t,1-t)}}\n`}const l=a+`100% {${c(e,1-e)}}\n}`,f=`__svelte_${function(t){let n=5381,e=t.length;for(;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}(l)}_${u}`,d=t.ownerDocument;F.add(d);const h=d.__svelte_stylesheet||(d.__svelte_stylesheet=d.head.appendChild(k("style")).sheet),p=d.__svelte_rules||(d.__svelte_rules={});p[f]||(p[f]=!0,h.insertRule(`@keyframes ${f} ${l}`,h.cssRules.length));const $=t.style.animation||"";return t.style.animation=`${$?`${$}, `:""}${f} ${o}ms linear ${r}ms 1 both`,B+=1,f}function H(t,n){const e=(t.style.animation||"").split(", "),o=e.filter(n?t=>t.indexOf(n)<0:t=>-1===t.indexOf("__svelte")),r=e.length-o.length;r&&(t.style.animation=o.join(", "),B-=r,B||b((()=>{B||(F.forEach((t=>{const n=t.__svelte_stylesheet;let e=n.cssRules.length;for(;e--;)n.deleteRule(e);t.__svelte_rules={}})),F.clear())})))}function I(t){L=t}function J(){if(!L)throw new Error("Function called outside component initialization");return L}function K(t){J().$$.on_mount.push(t)}function Q(t){J().$$.after_update.push(t)}function U(t){J().$$.on_destroy.push(t)}function V(){const t=J();return(n,e)=>{const o=t.$$.callbacks[n];if(o){const r=P(n,e);o.slice().forEach((n=>{n.call(t,r)}))}}}function W(t,n){J().$$.context.set(t,n)}function X(t){return J().$$.context.get(t)}const Y=[],Z=[],tt=[],nt=[],et=Promise.resolve();let ot=!1;function rt(t){tt.push(t)}let st=!1;const ct=new Set;function ut(){if(!st){st=!0;do{for(let t=0;t<Y.length;t+=1){const n=Y[t];I(n),it(n.$$)}for(I(null),Y.length=0;Z.length;)Z.pop()();for(let t=0;t<tt.length;t+=1){const n=tt[t];ct.has(n)||(ct.add(n),n())}tt.length=0}while(Y.length);for(;nt.length;)nt.pop()();ot=!1,st=!1,ct.clear()}}function it(t){if(null!==t.fragment){t.update(),s(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(rt)}}let at;function lt(t,n,e){t.dispatchEvent(P(`${n?"intro":"outro"}${e}`))}const ft=new Set;let dt;function ht(){dt={r:0,c:[],p:dt}}function pt(){dt.r||s(dt.c),dt=dt.p}function $t(t,n){t&&t.i&&(ft.delete(t),t.i(n))}function mt(t,n,e,o){if(t&&t.o){if(ft.has(t))return;ft.add(t),dt.c.push((()=>{ft.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}const bt={duration:0};function gt(e,o,r,u){let i=o(e,r),a=u?0:1,l=null,f=null,d=null;function h(){d&&H(e,d)}function p(t,n){const e=t.b-a;return n*=Math.abs(e),{a:a,b:t.b,d:e,duration:n,start:t.start,end:t.start+n,group:t.group}}function $(o){const{delay:r=0,duration:c=300,easing:u=n,tick:$=t,css:_}=i||bt,v={start:m()+r,b:o};o||(v.group=dt,dt.r+=1),l||f?f=v:(_&&(h(),d=G(e,a,o,c,r,u,_)),o&&$(0,1),l=p(v,c),rt((()=>lt(e,o,"start"))),function(t){let n;0===g.size&&b(y),new Promise((e=>{g.add(n={c:t,f:e})}))}((t=>{if(f&&t>f.start&&(l=p(f,c),f=null,lt(e,l.b,"start"),_&&(h(),d=G(e,a,l.b,l.duration,0,u,i.css))),l)if(t>=l.end)$(a=l.b,1-a),lt(e,l.b,"end"),f||(l.b?h():--l.group.r||s(l.group.c)),l=null;else if(t>=l.start){const n=t-l.start;a=l.a+l.d*u(n/l.duration),$(a,1-a)}return!(!l&&!f)})))}return{run(t){c(i)?(at||(at=Promise.resolve(),at.then((()=>{at=null}))),at).then((()=>{i=i(),$(t)})):$(t)},end(){h(),l=f=null}}}function yt(t,n){const e=n.token={};function o(t,o,r,s){if(n.token!==e)return;n.resolved=s;let c=n.ctx;void 0!==r&&(c=c.slice(),c[r]=s);const u=t&&(n.current=t)(c);let i=!1;n.block&&(n.blocks?n.blocks.forEach(((t,e)=>{e!==o&&t&&(ht(),mt(t,1,1,(()=>{n.blocks[e]===t&&(n.blocks[e]=null)})),pt())})):n.block.d(1),u.c(),$t(u,1),u.m(n.mount(),n.anchor),i=!0),n.block=u,n.blocks&&(n.blocks[o]=u),i&&ut()}if((r=t)&&"object"==typeof r&&"function"==typeof r.then){const e=J();if(t.then((t=>{I(e),o(n.then,1,n.value,t),I(null)}),(t=>{if(I(e),o(n.catch,2,n.error,t),I(null),!n.hasCatch)throw t})),n.current!==n.pending)return o(n.pending,0),!0}else{if(n.current!==n.then)return o(n.then,1,n.value,t),!0;n.resolved=t}var r}const _t="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function vt(t,n){const e={},o={},r={$$scope:1};let s=t.length;for(;s--;){const c=t[s],u=n[s];if(u){for(const t in c)t in u||(o[t]=1);for(const t in u)r[t]||(e[t]=u[t],r[t]=1);t[s]=u}else for(const t in c)r[t]=1}for(const c in o)c in e||(e[c]=void 0);return e}function wt(t){return"object"==typeof t&&null!==t?t:{}}function xt(t){t&&t.c()}function kt(t,n){t&&t.l(n)}function Et(t,n,e,r){const{fragment:u,on_mount:i,on_destroy:a,after_update:l}=t.$$;u&&u.m(n,e),r||rt((()=>{const n=i.map(o).filter(c);a?a.push(...n):s(n),t.$$.on_mount=[]})),l.forEach(rt)}function At(t,n){const e=t.$$;null!==e.fragment&&(s(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function jt(t,n){-1===t.$$.dirty[0]&&(Y.push(t),ot||(ot=!0,et.then(ut)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Ct(n,e,o,c,u,i,a=[-1]){const l=L;I(n);const f=n.$$={fragment:null,ctx:null,props:i,update:t,not_equal:u,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:e.context||[]),callbacks:r(),dirty:a,skip_bound:!1};let d=!1;if(f.ctx=o?o(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return f.ctx&&u(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),d&&jt(n,t)),e})):[],f.update(),d=!0,s(f.before_update),f.fragment=!!c&&c(f.ctx),e.target){if(e.hydrate){const t=O(e.target);f.fragment&&f.fragment.l(t),t.forEach(w)}else f.fragment&&f.fragment.c();e.intro&&$t(n.$$.fragment),Et(n,e.target,e.anchor,e.customElement),ut()}I(l)}class St{$destroy(){At(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}export{Q as A,K as B,ht as C,pt as D,f as E,h as F,n as G,S as H,c as I,rt as J,gt as K,s as L,V as M,U as N,_t as O,Z as P,E as Q,M as R,St as S,l as T,X as U,a as V,yt as W,D as X,p as Y,x as Z,O as a,R as b,T as c,w as d,k as e,v as f,_ as g,z as h,Ct as i,j,C as k,q as l,e as m,t as n,N as o,xt as p,kt as q,Et as r,u as s,A as t,vt as u,wt as v,$t as w,mt as x,At as y,W as z};
