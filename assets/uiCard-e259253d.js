import{q as p,u as V,L as v,_ as g,o as i,e as r,w as a,f as n,H as x,g as t,t as d,n as C,a8 as u}from"./index-d2757bf8.js";import{V as h,_ as k,K as _}from"./group-fda8f8c5.js";import{V as b,a as m}from"./VChip-5107c891.js";import{a as H,b as z}from"./VBtn-7f1478f6.js";const w=p({disabled:Boolean,modelValue:{type:Boolean,default:void 0},...H()},"VHover"),D=V()({name:"VHover",props:w(),emits:{"update:modelValue":e=>!0},setup(e,f){let{slots:s}=f;const l=v(e,"modelValue"),{runOpenDelay:c,runCloseDelay:y}=z(e,o=>!e.disabled&&(l.value=o));return()=>{var o;return(o=s.default)==null?void 0:o.call(s,{isHovering:l.value,props:{onMouseenter:c,onMouseleave:y}})}}}),B={__name:"uiCard",props:{item:Object,size:{type:String,default:"md"}},setup(e){return(f,s)=>(i(),r(D,null,{default:a(({isHovering:l,props:c})=>[n(h,x(c,{class:["py-4 mx-auto",`card-${e.size}`],elevation:l&&e.size==="md"?10:3,rounded:"xl"}),{default:a(()=>[n(k,{class:"font-weight-bold"},{default:a(()=>[t(d(e.item.company_name),1)]),_:1}),n(_,{class:C(["font-weight-bold",e.size==="lg"?"text-h5":""])},{default:a(()=>[t(d(e.item.vacancy_name),1)]),_:1},8,["class"]),n(b,{class:"custom-chips"},{default:a(()=>[e.item.remote?(i(),r(m,{key:0,class:"chip text-grey-darken-2","prepend-icon":"mdi-wifi",label:""},{default:a(()=>[t("Удаленно")]),_:1})):u("",!0),e.item.location?(i(),r(m,{key:1,class:"chip text-grey-darken-2","prepend-icon":"mdi-map-marker",label:""},{default:a(()=>[t(d(e.item.location),1)]),_:1})):u("",!0),e.item.salary&&e.size!=="lg"?(i(),r(m,{key:2,class:"chip text-grey-darken-2",label:""},{default:a(()=>[t(d(e.item.salary)+"р",1)]),_:1})):u("",!0)]),_:1})]),_:2},1040,["class","elevation"])]),_:1}))}},O=g(B,[["__scopeId","data-v-311473e9"]]);export{O as U,D as V};
