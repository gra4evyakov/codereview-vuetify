import{q as K,s as he,u as le,U as Ve,M as te,x as ae,f as o,F as U,B as z,I as Z,d as R,i as Y,S as Se,aw as xe,ax as Pe,L as ue,ay as _e,E as Ie,Q as Te,K as W,j as Re,az as Be,X as De,aA as Ue,$ as Ae,aB as Le,P as se,aC as re,g as G,aD as Fe,aE as ie,a3 as Ee,o as C,c as X,w as F,b as ge,z as Me,r as ce,e as D,T as de}from"./index-7ade655a.js";import{C as Oe,D as He,E as ze,d as me,l as Ke,V as ve,s as qe,c as $e}from"./group-1730f92a.js";import{V as je}from"./VBtn-30fd0f1c.js";import{m as Je,V as E}from"./VTextField-b50a7b3f.js";import{u as Qe}from"./VInput-72224ab2.js";import{g as We,f as Xe}from"./forwardRefs-0c9dccda.js";import{m as Ye,u as Ge,V as Ze,a as fe}from"./VList-18f79dfa.js";import{V as Ne}from"./dialog-transition-f19d7e60.js";import{V as el}from"./VMenu-4339ec3d.js";import{d as ll,c as tl}from"./VCheckbox-2aa550bb.js";import{a as al}from"./VChip-0d5bbd1b.js";import{V as nl,a as ol}from"./VRow-9ab378a1.js";import"./tag-712c9b0e.js";import"./ssrBoot-8a48ee03.js";const ul=K({renderless:Boolean,...he()},"VVirtualScrollItem"),sl=le()({name:"VVirtualScrollItem",inheritAttrs:!1,props:ul(),emits:{"update:height":e=>!0},setup(e,v){let{attrs:l,emit:h,slots:r}=v;const{resizeRef:i,contentRect:u}=Ve(void 0,"border");te(()=>{var t;return(t=u.value)==null?void 0:t.height},t=>{t!=null&&h("update:height",t)}),ae(()=>{var t,n;return e.renderless?o(U,null,[(t=r.default)==null?void 0:t.call(r,{itemRef:i})]):o("div",z({ref:i,class:["v-virtual-scroll__item",e.class],style:e.style},l),[(n=r.default)==null?void 0:n.call(r)])})}}),pe=-1,ye=1,rl=K({itemHeight:{type:[Number,String],default:48}},"virtual");function il(e,v,l){const h=Z(0),r=Z(e.itemHeight),i=R({get:()=>parseInt(r.value??0,10),set(p){r.value=p}}),u=Y(),{resizeRef:t,contentRect:n}=Ve();Se(()=>{t.value=u.value});const f=xe(),V=new Map;let c=Array.from({length:v.value.length});const d=R(()=>{const p=(!n.value||u.value===document.documentElement?f.height.value:n.value.height)-((l==null?void 0:l.value)??0);return Math.ceil(p/i.value*1.7+1)});function g(p,y){i.value=Math.max(i.value,y),c[p]=y,V.set(v.value[p],y)}function x(p){return c.slice(0,p).reduce((y,w)=>y+(w||i.value),0)}function P(p){const y=v.value.length;let w=0,_=0;for(;_<p&&w<y;)_+=c[w++]||i.value;return w-1}let M=0;function q(){if(!u.value||!n.value)return;const p=n.value.height-56,y=u.value.scrollTop,w=y<M?pe:ye,_=P(y+p/2),$=Math.round(d.value/3),j=_-$,J=h.value+$*2-1;w===pe&&_<=J?h.value=ue(j,0,v.value.length):w===ye&&_>=J&&(h.value=ue(j,0,v.value.length-d.value)),M=y}function O(p){if(!u.value)return;const y=x(p);u.value.scrollTop=y}const H=R(()=>Math.min(v.value.length,h.value+d.value)),A=R(()=>v.value.slice(h.value,H.value).map((p,y)=>({raw:p,index:y+h.value}))),N=R(()=>x(h.value)),ee=R(()=>x(v.value.length)-x(H.value));return te(()=>v.value.length,()=>{c=Pe(v.value.length).map(()=>i.value),V.forEach((p,y)=>{const w=v.value.indexOf(y);w===-1?V.delete(y):c[w]=p})}),{containerRef:u,computedItems:A,itemHeight:i,paddingTop:N,paddingBottom:ee,scrollToIndex:O,handleScroll:q,handleItemResize:g}}const cl=K({items:{type:Array,default:()=>[]},renderless:Boolean,...rl(),...he(),...Oe()},"VVirtualScroll"),dl=le()({name:"VVirtualScroll",props:cl(),setup(e,v){let{slots:l}=v;const h=_e("VVirtualScroll"),{dimensionStyles:r}=He(e),{containerRef:i,handleScroll:u,handleItemResize:t,scrollToIndex:n,paddingTop:f,paddingBottom:V,computedItems:c}=il(e,Ie(e,"items"));return Te(()=>e.renderless,()=>{Re(()=>{var d;i.value=We(h.vnode.el,!0),(d=i.value)==null||d.addEventListener("scroll",u)}),Be(()=>{var d;(d=i.value)==null||d.removeEventListener("scroll",u)})}),ae(()=>{const d=c.value.map(g=>o(sl,{key:g.index,renderless:e.renderless,"onUpdate:height":x=>t(g.index,x)},{default:x=>{var P;return(P=l.default)==null?void 0:P.call(l,{item:g.raw,index:g.index,...x})}}));return e.renderless?o(U,null,[o("div",{class:"v-virtual-scroll__spacer",style:{paddingTop:W(f.value)}},null),d,o("div",{class:"v-virtual-scroll__spacer",style:{paddingBottom:W(V.value)}},null)]):o("div",{ref:i,class:["v-virtual-scroll",e.class],onScroll:u,style:[r.value,e.style]},[o("div",{class:"v-virtual-scroll__container",style:{paddingTop:W(f.value),paddingBottom:W(V.value)}},[d])])}),{scrollToIndex:n}}});function ml(e,v){const l=Z(!1);let h;function r(t){cancelAnimationFrame(h),l.value=!0,h=requestAnimationFrame(()=>{h=requestAnimationFrame(()=>{l.value=!1})})}async function i(){await new Promise(t=>requestAnimationFrame(t)),await new Promise(t=>requestAnimationFrame(t)),await new Promise(t=>requestAnimationFrame(t)),await new Promise(t=>{if(l.value){const n=te(l,()=>{n(),t()})}else t()})}async function u(t){var V,c;if(t.key==="Tab"&&((V=v.value)==null||V.focus()),!["PageDown","PageUp","Home","End"].includes(t.key))return;const n=(c=e.value)==null?void 0:c.$el;if(!n)return;(t.key==="Home"||t.key==="End")&&n.scrollTo({top:t.key==="Home"?0:n.scrollHeight,behavior:"smooth"}),await i();const f=n.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");if(t.key==="PageDown"||t.key==="Home"){const d=n.getBoundingClientRect().top;for(const g of f)if(g.getBoundingClientRect().top>=d){g.focus();break}}else{const d=n.getBoundingClientRect().bottom;for(const g of[...f].reverse())if(g.getBoundingClientRect().bottom<=d){g.focus();break}}}return{onListScroll:r,onListKeydown:u}}const vl=K({chips:Boolean,closableChips:Boolean,eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,menu:Boolean,menuIcon:{type:De,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,valueComparator:{type:Function,default:Ue},itemColor:String,...Ye({itemChildren:!1})},"Select"),fl=K({...vl(),...Ae(Je({modelValue:null}),["validationValue","dirty","appendInnerIcon"]),...ze({transition:{component:Ne}})},"VSelect"),pl=le()({name:"VSelect",props:fl(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,v){let{slots:l}=v;const{t:h}=Le(),r=Y(),i=Y(),u=se(e,"menu"),t=R({get:()=>u.value,set:a=>{var m;u.value&&!a&&((m=i.value)!=null&&m.ΨopenChildren)||(u.value=a)}}),{items:n,transformIn:f,transformOut:V}=Ge(e),c=se(e,"modelValue",[],a=>f(a===null?[null]:Fe(a)),a=>{const m=V(a);return e.multiple?m:m[0]??null}),d=Qe(),g=R(()=>c.value.map(a=>n.value.find(m=>{const k=re(m.raw,e.itemValue),L=re(a.raw,e.itemValue);return k===void 0||L===void 0?!1:e.returnObject?e.valueComparator(k,L):e.valueComparator(m.value,a.value)})||a)),x=R(()=>g.value.map(a=>a.props.value)),P=Z(!1);let M="",q;const O=R(()=>e.hideSelected?n.value.filter(a=>!g.value.some(m=>m===a)):n.value),H=R(()=>e.hideNoData&&!n.value.length||e.readonly||(d==null?void 0:d.isReadonly.value)),A=Y(),{onListScroll:N,onListKeydown:ee}=ml(A,r);function p(a){e.openOnClear&&(t.value=!0)}function y(){H.value||(t.value=!t.value)}function w(a){var s,S;if(!a.key||e.readonly||d!=null&&d.isReadonly.value)return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(a.key)&&a.preventDefault(),["Enter","ArrowDown"," "].includes(a.key)&&(t.value=!0),["Escape","Tab"].includes(a.key)&&(t.value=!1),a.key==="Home"?(s=A.value)==null||s.focus("first"):a.key==="End"&&((S=A.value)==null||S.focus("last"));const m=1e3;function k(b){const B=b.key.length===1,I=!b.ctrlKey&&!b.metaKey&&!b.altKey;return B&&I}if(e.multiple||!k(a))return;const L=performance.now();L-q>m&&(M=""),M+=a.key.toLowerCase(),q=L;const Q=n.value.find(b=>b.title.toLowerCase().startsWith(M));Q!==void 0&&(c.value=[Q])}function _(a){if(e.multiple){const m=x.value.findIndex(k=>e.valueComparator(k,a.value));if(m===-1)c.value=[...c.value,a];else{const k=[...c.value];k.splice(m,1),c.value=k}}else c.value=[a],t.value=!1}function $(a){var m;(m=A.value)!=null&&m.$el.contains(a.relatedTarget)||(t.value=!1)}function j(){var a;P.value&&((a=r.value)==null||a.focus())}function J(a){P.value=!0}function be(a){if(a==null)c.value=[];else if(ie(r.value,":autofill")||ie(r.value,":-webkit-autofill")){const m=n.value.find(k=>k.title===a);m&&_(m)}else r.value&&(r.value.value="")}return ae(()=>{const a=!!(e.chips||l.chip),m=!!(!e.hideNoData||O.value.length||l["prepend-item"]||l["append-item"]||l["no-data"]),k=c.value.length>0,[L]=E.filterProps(e),Q=k||!P.value&&e.label&&!e.persistentPlaceholder?void 0:e.placeholder;return o(E,z({ref:r},L,{modelValue:c.value.map(s=>s.props.value).join(", "),"onUpdate:modelValue":be,focused:P.value,"onUpdate:focused":s=>P.value=s,validationValue:c.externalValue,dirty:k,class:["v-select",{"v-select--active-menu":t.value,"v-select--chips":!!e.chips,[`v-select--${e.multiple?"multiple":"single"}`]:!0,"v-select--selected":c.value.length,"v-select--selection-slot":!!l.selection},e.class],style:e.style,inputmode:"none",placeholder:Q,"onClick:clear":p,"onMousedown:control":y,onBlur:$,onKeydown:w}),{...l,default:()=>o(U,null,[o(el,z({ref:i,modelValue:t.value,"onUpdate:modelValue":s=>t.value=s,activator:"parent",contentClass:"v-select__content",disabled:H.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:j},e.menuProps),{default:()=>[m&&o(Ze,{ref:A,selected:x.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:s=>s.preventDefault(),onKeydown:ee,onFocusin:J,onScrollPassive:N,tabindex:"-1",color:e.itemColor??e.color},{default:()=>{var s,S,b;return[(s=l["prepend-item"])==null?void 0:s.call(l),!O.value.length&&!e.hideNoData&&(((S=l["no-data"])==null?void 0:S.call(l))??o(fe,{title:h(e.noDataText)},null)),o(dl,{renderless:!0,items:O.value},{default:B=>{var oe;let{item:I,index:T,itemRef:ke}=B;const ne=z(I.props,{ref:ke,key:T,onClick:()=>_(I)});return((oe=l.item)==null?void 0:oe.call(l,{item:I,index:T,props:ne}))??o(fe,ne,{prepend:we=>{let{isSelected:Ce}=we;return o(U,null,[e.multiple&&!e.hideSelected?o(ll,{key:I.value,modelValue:Ce,ripple:!1,tabindex:"-1"},null):void 0,I.props.prependIcon&&o(me,{icon:I.props.prependIcon},null)])}})}}),(b=l["append-item"])==null?void 0:b.call(l)]}})]}),g.value.map((s,S)=>{var I;function b(T){T.stopPropagation(),T.preventDefault(),_(s)}const B={"onClick:close":b,onMousedown(T){T.preventDefault(),T.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0};return o("div",{key:s.value,class:"v-select__selection"},[a?l.chip?o(Ke,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:s.title}}},{default:()=>{var T;return[(T=l.chip)==null?void 0:T.call(l,{item:s,index:S,props:B})]}}):o(al,z({key:"chip",closable:e.closableChips,size:"small",text:s.title},B),null):((I=l.selection)==null?void 0:I.call(l,{item:s,index:S}))??o("span",{class:"v-select__selection-text"},[s.title,e.multiple&&S<g.value.length-1&&o("span",{class:"v-select__selection-comma"},[G(",")])])])})]),"append-inner":function(){var B;for(var s=arguments.length,S=new Array(s),b=0;b<s;b++)S[b]=arguments[b];return o(U,null,[(B=l["append-inner"])==null?void 0:B.call(l,...S),e.menuIcon?o(me,{class:"v-select__menu-icon",icon:e.menuIcon},null):void 0])}})}),Xe({isFocused:P,menu:t,select:_},r)}}),yl={class:"container"},hl=ge("h1",{class:"mb-4 px-2"},"Разместить вакансию",-1),Vl=["onSubmit"],Ul={__name:"AddVacancyView",setup(e){const v={name:{type:"text",label:"Должность"},employer:{type:"text",label:"Компания"},area:{type:"text",label:"Город"},email:{type:"email",label:"Электронная почта"},salary:{from:null,to:null,currency:null,gross:!1},employment:{type:"select",label:"Занятость",items:["Полная занятость","Частичная занятость","Стажировка","Проектная работа"]},schedule:{type:"select",label:"Формат работы",items:["Удаленный","Офис","Гибрид"]},specialty:{type:"select",label:"Специализация",items:["Python","Java","JavaScript","Data Science","QA","C#"]}},l=Ee({name:"",employer:"",area:"",email:"",salary:{from:null,to:null,currency:null,gross:!1},specialty:"",employment:"Полная занятость",schedule:"Офис"}),h=()=>{console.log(l)};return(r,i)=>(C(),X("div",yl,[hl,o(ve,{class:"mb-4 pa-2",rounded:"xl"},{default:F(()=>[o(qe,{class:"font-weight-bold"},{default:F(()=>[G("Условия публикации вакансий")]),_:1}),o($e,null,{default:F(()=>[G(" Размещать вакансии здесь можно бесплатно. Просто заполните форму ниже. ")]),_:1})]),_:1}),ge("form",{onSubmit:Me(h,["prevent"])},[o(ve,{class:"pa-8 mb-4",rounded:"xl"},{default:F(()=>[(C(),X(U,null,ce(v,(u,t)=>(C(),X(U,{key:t},[u.type==="text"?(C(),D(E,{key:0,label:u.label,modelValue:l[t],"onUpdate:modelValue":n=>l[t]=n},null,8,["label","modelValue","onUpdate:modelValue"])):u.type==="email"?(C(),D(E,{key:1,label:u.label,modelValue:l[t],"onUpdate:modelValue":n=>l[t]=n,type:"email"},null,8,["label","modelValue","onUpdate:modelValue"])):u.type==="select"?(C(),D(pl,{key:2,modelValue:l[t],"onUpdate:modelValue":n=>l[t]=n,items:u.items,label:u.label},null,8,["modelValue","onUpdate:modelValue","items","label"])):t==="salary"?(C(),D(nl,{key:3},{default:F(()=>[(C(!0),X(U,null,ce(u,(n,f)=>(C(),D(ol,{cols:"12",sm:"3",key:f},{default:F(()=>[f==="gross"?(C(),D(tl,{key:0,modelValue:l.salary.gross,"onUpdate:modelValue":i[0]||(i[0]=V=>l.salary.gross=V),label:"До вычета налогов"},null,8,["modelValue"])):f==="currency"?(C(),D(E,{key:1,modelValue:l.salary[f],"onUpdate:modelValue":V=>l.salary[f]=V,label:"Валюта"},null,8,["modelValue","onUpdate:modelValue"])):f==="from"?(C(),D(E,{key:2,modelValue:l.salary[f],"onUpdate:modelValue":V=>l.salary[f]=V,label:"Зарплата от"},null,8,["modelValue","onUpdate:modelValue"])):f==="to"?(C(),D(E,{key:3,modelValue:l.salary[f],"onUpdate:modelValue":V=>l.salary[f]=V,label:"До"},null,8,["modelValue","onUpdate:modelValue"])):de("",!0)]),_:2},1024))),128))]),_:2},1024)):de("",!0)],64))),64)),o(je,{block:"",color:"purple",type:"submit"},{default:F(()=>[G("Отправить")]),_:1})]),_:1})],40,Vl)]))}};export{Ul as default};