import{_ as i,o as s,c as m,w as c,a as o,b as u,t as h,r as f,d as v,e as g,f as _,g as a,F as y,h as x,i as w,v as b,p as k,j as C}from"./index-aeb0c13a.js";import{V as S,a as V}from"./VCard-8282c4f2.js";import{s as F}from"./svgLogo-e3ff21d1.js";import{V as T}from"./index-0090429c.js";import"./tag-214631e7.js";const I={__name:"uiStackCard",props:{item:Object},setup(e){const t=e;return(r,p)=>(s(),m(V,{class:"card pa-4 text-white",height:"150",image:`/images/${t.item.color}.webp`,rounded:"lg"},{default:c(()=>[o(S,{class:"font-weight-bold text-h5"},{default:c(()=>[u(h(t.item.name),1)]),_:1})]),_:1},8,["image"]))}},j=i(I,[["__scopeId","data-v-285174eb"]]);const d=e=>(k("data-v-dffef93f"),e=e(),C(),e),B={class:"welcome"},$={class:"background pa-8"},J={class:"container"},N=d(()=>a("h1",{class:"text-sm-h2 text-center mt-auto mb-2 font-weight-bold"}," Поиск любимой работы ",-1)),P=d(()=>a("h3",{class:"text-sm-h5 text-center"}," Лёгкий способ найти хорошую работу в России и за границей ",-1)),W={class:"container"},D={class:"grid-cards"},H={__name:"TheWelcomeForm",setup(e){const t=f(!1),r=[{id:1,name:"Python",color:"blue",type:"python"},{id:2,name:"Java",color:"orange",type:"java"},{id:3,name:"C++",color:"green",type:"cpp"},{id:4,name:"C#",color:"red",type:"c#"},{id:5,name:"JavaScript",color:"purple",type:"javascript"},{id:6,name:"PHP",color:"lime",type:"php"},{id:7,name:"Go",color:"blue",type:"go"},{id:8,name:"C",color:"orange",type:"c"},{id:9,name:"Swift",color:"purple",type:"swift"}];return v(()=>{t.value=!0}),(p,E)=>{const l=g("router-link");return s(),_("div",B,[a("header",$,[a("div",J,[o(F),N,P])]),a("div",W,[a("div",D,[(s(),_(y,null,x(r,n=>o(T,{key:n.id},{default:c(()=>[w(o(l,{to:{name:"Jobs",query:{stack:n.type}}},{default:c(()=>[o(j,{item:n},null,8,["item"])]),_:2},1032,["to"]),[[b,t.value]])]),_:2},1024)),64))])])])}}},L=i(H,[["__scopeId","data-v-dffef93f"]]),q={class:"text-white"},A={__name:"HomeView",setup(e){return(t,r)=>(s(),_("div",q,[o(L)]))}};export{A as default};