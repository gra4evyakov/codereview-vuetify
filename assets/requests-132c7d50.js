import{q as b,u as x,P as C,_ as h,o as i,e as u,w as t,f as d,B as k,g as n,t as l,n as w,T as y,i as f}from"./index-7ade655a.js";import{V as _,B as z,s as B}from"./group-1730f92a.js";import{V as H,a as g}from"./VChip-0d5bbd1b.js";import{a as D,b as P}from"./VBtn-30fd0f1c.js";import{a as S}from"./axios-4a70c6fc.js";const G=b({disabled:Boolean,modelValue:{type:Boolean,default:void 0},...D()},"VHover"),J=x()({name:"VHover",props:G(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:a}=o;const s=C(e,"modelValue"),{runOpenDelay:c,runCloseDelay:m}=P(e,r=>!e.disabled&&(s.value=r));return()=>{var r;return(r=a.default)==null?void 0:r.call(a,{isHovering:s.value,props:{onMouseenter:c,onMouseleave:m}})}}}),M={__name:"uiCard",props:{item:Object,size:{type:String,default:"md"}},setup(e){return(o,a)=>(i(),u(J,null,{default:t(({isHovering:s,props:c})=>[d(_,k(c,{class:["py-4 mx-auto mb-4",`card-${e.size}`],elevation:s&&e.size==="md"?10:3,rounded:"xl"}),{default:t(()=>[d(z,{class:"font-weight-bold"},{default:t(()=>[n(l(e.item.employer),1)]),_:1}),d(B,{class:w(["font-weight-bold",e.size==="lg"?"text-h5":""])},{default:t(()=>[n(l(e.item.name),1)]),_:1},8,["class"]),d(H,{class:"custom-chips"},{default:t(()=>[e.item.employment?(i(),u(g,{key:0,class:"chip text-grey-darken-2","prepend-icon":"mdi-briefcase",label:""},{default:t(()=>[n(l(e.item.employment),1)]),_:1})):y("",!0),e.item.area?(i(),u(g,{key:1,class:"chip text-grey-darken-2","prepend-icon":"mdi-map-marker",label:""},{default:t(()=>[n(l(e.item.area),1)]),_:1})):y("",!0),e.item.salary_from&&e.size!=="lg"?(i(),u(g,{key:2,class:"chip chip-salary text-grey-darken-2",label:""},{default:t(()=>[n("от "+l(e.item.salary_from)+" "+l(e.item.salary_currency),1)]),_:1})):y("",!0)]),_:1})]),_:2},1040,["class","elevation"])]),_:1}))}},I=h(M,[["__scopeId","data-v-07d246c1"]]),p=S.create({baseURL:"http://68.183.220.246:8000/api/jobs/"}),V={async getCurrentVacancy(e){return(await p.get(`${e}`)).data},async getJobs(){return(await p.get("")).data}},v=e=>{const o=f(null),a=f(!1),s=f(!1);return{data:o,isLoading:a,isError:s,execute:async m=>{a.value=!0;try{o.value=await e(m)}catch(r){s.value=!0,console.log(r)}finally{a.value=!1}}}},L=()=>v(V.getCurrentVacancy),O=()=>v(V.getJobs);export{I as U,J as V,L as a,O as u};
