import{q as V,u as v,L as C,_ as g,o as s,e as l,w as a,f as r,H as p,g as t,t as o,n as h,a8 as c}from"./index-5b767a07.js";import{V as x,e as k,c as b,a as z}from"./VCard-edce0adb.js";import{V as H,a as m}from"./VChip-493d2358.js";import{a as _,b as D}from"./lazy-8d68583f.js";const B=V({disabled:Boolean,modelValue:{type:Boolean,default:void 0},..._()},"VHover"),P=v()({name:"VHover",props:B(),emits:{"update:modelValue":e=>!0},setup(e,f){let{slots:i}=f;const n=C(e,"modelValue"),{runOpenDelay:d,runCloseDelay:y}=D(e,u=>!e.disabled&&(n.value=u));return()=>{var u;return(u=i.default)==null?void 0:u.call(i,{isHovering:n.value,props:{onMouseenter:d,onMouseleave:y}})}}}),w={__name:"uiCard",props:{item:Object,size:{type:String,default:"md"}},setup(e){return(f,i)=>(s(),l(P,null,{default:a(({isHovering:n,props:d})=>[r(x,p({class:["py-2 mx-auto",`card-${e.size}`]},d,{elevation:n&&e.size==="md"?10:1}),{default:a(()=>[r(k,null,{default:a(()=>[t(o(e.item.company_name),1)]),_:1}),r(b,{class:h(e.size==="lg"?"font-weight-bold text-h5":"")},{default:a(()=>[t(o(e.item.vacancy_name),1)]),_:1},8,["class"]),e.size!=="lg"?(s(),l(z,{key:0,class:"pb-0"},{default:a(()=>[t(o(e.item.specialty),1)]),_:1})):c("",!0),r(H,{class:"custom-chips"},{default:a(()=>[e.item.remote?(s(),l(m,{key:0,class:"chip"},{default:a(()=>[t("Удаленно")]),_:1})):c("",!0),e.item.location?(s(),l(m,{key:1,class:"chip"},{default:a(()=>[t(o(e.item.location),1)]),_:1})):c("",!0),e.item.salary&&e.size!=="lg"?(s(),l(m,{key:2,class:"chip"},{default:a(()=>[t(o(e.item.salary)+"р",1)]),_:1})):c("",!0)]),_:1})]),_:2},1040,["class","elevation"])]),_:1}))}},O=g(w,[["__scopeId","data-v-a3571aaa"]]);export{O as U};