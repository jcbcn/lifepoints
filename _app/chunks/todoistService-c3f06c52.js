import{C as c,N as r}from"./vendor-d8741df1.js";const k=c(0),n=c(""),v=c(null),i="https://api.todoist.com/rest/v1",d="_points",f={2156538858:1,2156538859:2,2156538862:3,2156538864:5,2156538865:8},y=async()=>{let t={headers:{Authorization:`Bearer ${r(n)}`}};return await(await fetch(`${i}/tasks?filter=(today%20%7C%20overdue)%20%26%20(%401P%20%7C%20%402P%20%7C%20%403P%20%7C%20%405P%20%7C%20%408P)`,t)).json()},P=async e=>{let t={Authorization:`Bearer ${r(n)}`},s={method:"POST",headers:t};if(await(await fetch(`${i}/tasks/${e.id}/close`,s)).ok)await w(g(e));else throw new Error("Failed to complete task")},w=async e=>{let t=await u();t+=e;var s=await $();let o={Authorization:`Bearer ${r(n)}`,"Content-Type":"application/json"},a={method:"POST",headers:o,body:JSON.stringify({content:t.toString()})};if(!(await fetch(`${i}/tasks/${s.id}`,a)).ok)throw new Error("Failed to update lifepoints")},u=async()=>{var e=await p();let s={headers:{Authorization:`Bearer ${r(n)}`}},a=await(await fetch(`${i}/tasks?project_id=${e.id}`,s)).json();return parseInt(a[0].content)},$=async()=>{var e=await p();let s={headers:{Authorization:`Bearer ${r(n)}`}};return(await h(`${i}/tasks?project_id=${e.id}`,s))[0]},p=async()=>{let t={headers:{Authorization:`Bearer ${r(n)}`}};var o=(await h(`${i}/projects`,t)).filter(a=>a.name==d)[0];return o},g=e=>f[m(e)],m=e=>e.label_ids.length>0?e.label_ids[0]:null,S=()=>{localStorage.clear()},h=async(e,t)=>{var s="_req_cache_"+e,o=localStorage.getItem(s);if(o)return Promise.resolve(JSON.parse(o));var a=await fetch(e,t);if(a.ok){var l=await a.json();localStorage.setItem(s,JSON.stringify(l))}throw new Error};export{n as a,P as b,S as c,y as f,u as g,f as l,v as m,k as p};
