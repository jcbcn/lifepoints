import{n as t,s as a,J as e}from"./index-b0b55f0d.js";const r=[];function o(e,o=t){let s;const n=[];function i(t){if(a(e,t)&&(e=t,s)){const t=!r.length;for(let a=0;a<n.length;a+=1){const t=n[a];t[1](),r.push(t,e)}if(t){for(let t=0;t<r.length;t+=2)r[t][0](r[t+1]);r.length=0}}}return{set:i,update:function(t){i(t(e))},subscribe:function(a,r=t){const l=[a,r];return n.push(l),1===n.length&&(s=o(i)||t),a(e),()=>{const t=n.indexOf(l);-1!==t&&n.splice(t,1),0===n.length&&(s(),s=null)}}}}const s=o(0),n=o(""),i=o(null),l="https://api.todoist.com/rest/v1",c={2156538858:1,2156538859:2,2156538862:3,2156538864:5,2156538865:8},h=async()=>{let t={headers:{Authorization:`Bearer ${e(n)}`}};const a=await fetch(`${l}/tasks?filter=(today%20%7C%20overdue)%20%26%20(%401P%20%7C%20%402P%20%7C%20%403P%20%7C%20%405P%20%7C%20%408P)`,t);return await a.json()},d=async t=>{let a={method:"POST",headers:{Authorization:`Bearer ${e(n)}`}};const r=await fetch(`${l}/tasks/${t.id}/close`,a);if(!(await r.ok))throw new Error("Failed to complete task");await f($(t))},f=async t=>{let a=await u();a+=t;var r=await w();let o={method:"POST",headers:{Authorization:`Bearer ${e(n)}`,"Content-Type":"application/json"},body:JSON.stringify({content:a.toString()})};if(!(await fetch(`${l}/tasks/${r.id}`,o)).ok)throw new Error("Failed to update lifepoints")},u=async()=>{var t=await p();let a={headers:{Authorization:`Bearer ${e(n)}`}};const r=await fetch(`${l}/tasks?project_id=${t.id}`,a);let o=await r.json();return parseInt(o[0].content)},w=async()=>{var t=await p();let a={headers:{Authorization:`Bearer ${e(n)}`}};return(await m(`${l}/tasks?project_id=${t.id}`,a))[0]},p=async()=>{let t={headers:{Authorization:`Bearer ${e(n)}`}};return(await m(`${l}/projects`,t)).filter((t=>"_points"==t.name))[0]},$=t=>c[g(t)],g=t=>t.label_ids.length>0?t.label_ids[0]:null,y=()=>{localStorage.clear()},m=async(t,a)=>{var e="_req_cache_"+t,r=localStorage.getItem(e);if(r)return Promise.resolve(JSON.parse(r));var o=await fetch(t,a);if(o.ok){var s=await o.json();localStorage.setItem(e,JSON.stringify(s))}throw new Error};export{n as a,d as b,y as c,h as f,u as g,c as l,i as m,s as p,o as w};
