import{q as N,s as X,u as O,d as u,x as U,f as l,l as Y,v as le,X as K,aF as W,D as re,G as ue,H as de,a0 as ce,i as S,E as fe,M as ve,K as me,F as T,B as M,aG as ge,aH as ye,P as xe,a1 as be,Y as Ce,aI as Ve,a5 as Z,aJ as he}from"./index-7ade655a.js";import{E as ke,F as _e,M as Ie,G as Pe,g as Fe,H as Se,j as Be,u as Te,I as we,L as Re,J as Le,K as $e}from"./group-1730f92a.js";import{b as Ae,d as Ee,e as te,f as pe,a as De,V as ee}from"./VInput-72224ab2.js";import{n as Me,a as Ne,s as Oe,f as Ue}from"./forwardRefs-0c9dccda.js";const je=N({active:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...X(),...ke({transition:{component:_e}})},"VCounter"),Ge=O()({name:"VCounter",functional:!0,props:je(),setup(e,y){let{slots:a}=y;const h=u(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return U(()=>l(Ie,{transition:e.transition},{default:()=>[Y(l("div",{class:["v-counter",e.class],style:e.style},[a.default?a.default({counter:h.value,max:e.max,value:e.value}):h.value]),[[le,e.active]])]})),{}}});const He=N({floating:Boolean,...X()},"VFieldLabel"),D=O()({name:"VFieldLabel",props:He(),setup(e,y){let{slots:a}=y;return U(()=>l(Ae,{class:["v-field-label",{"v-field-label--floating":e.floating},e.class],style:e.style,"aria-hidden":e.floating||void 0},a)),{}}}),qe=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],ne=N({appendInnerIcon:K,bgColor:String,clearable:Boolean,clearIcon:{type:K,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:K,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>qe.includes(e)},"onClick:clear":W(),"onClick:appendInner":W(),"onClick:prependInner":W(),...X(),...Pe(),...Fe(),...re()},"VField"),ae=O()({name:"VField",inheritAttrs:!1,props:{id:String,...Ee(),...ne()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,y){let{attrs:a,emit:h,slots:t}=y;const{themeClasses:x}=ue(e),{loaderClasses:b}=Se(e),{focusClasses:j,isFocused:w,focus:R,blur:L}=te(e),{InputIcon:B}=pe(e),{roundedClasses:G}=Be(e),{rtlClasses:$}=de(),C=u(()=>e.dirty||e.active),f=u(()=>!e.singleLine&&!!(e.label||t.label)),H=ce(),o=u(()=>e.id||`input-${H}`),q=u(()=>`${o.value}-messages`),A=S(),k=S(),E=S(),n=u(()=>["plain","underlined"].includes(e.variant)),{backgroundColorClasses:d,backgroundColorStyles:c}=Te(fe(e,"bgColor")),{textColorClasses:v,textColorStyles:z}=we(u(()=>e.error||e.disabled?void 0:C.value&&w.value?e.color:e.baseColor));ve(C,s=>{if(f.value){const i=A.value.$el,m=k.value.$el;requestAnimationFrame(()=>{const g=Me(i),r=m.getBoundingClientRect(),I=r.x-g.x,P=r.y-g.y-(g.height/2-r.height/2),V=r.width/.75,F=Math.abs(V-g.width)>1?{maxWidth:me(V)}:void 0,p=getComputedStyle(i),Q=getComputedStyle(m),ie=parseFloat(p.transitionDuration)*1e3||150,oe=parseFloat(Q.getPropertyValue("--v-field-label-scale")),se=Q.getPropertyValue("color");i.style.visibility="visible",m.style.visibility="hidden",Ne(i,{transform:`translate(${I}px, ${P}px) scale(${oe})`,color:se,...F},{duration:ie,easing:Oe,direction:s?"normal":"reverse"}).finished.then(()=>{i.style.removeProperty("visibility"),m.style.removeProperty("visibility")})})}},{flush:"post"});const _=u(()=>({isActive:C,isFocused:w,controlRef:E,blur:L,focus:R}));function J(s){s.target!==document.activeElement&&s.preventDefault()}return U(()=>{var I,P,V;const s=e.variant==="outlined",i=t["prepend-inner"]||e.prependInnerIcon,m=!!(e.clearable||t.clear),g=!!(t["append-inner"]||e.appendInnerIcon||m),r=t.label?t.label({..._.value,label:e.label,props:{for:o.value}}):e.label;return l("div",M({class:["v-field",{"v-field--active":C.value,"v-field--appended":g,"v-field--center-affix":e.centerAffix??!n.value,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":i,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!r,[`v-field--variant-${e.variant}`]:!0},x.value,d.value,j.value,b.value,G.value,$.value,e.class],style:[c.value,z.value,e.style],onClick:J},a),[l("div",{class:"v-field__overlay"},null),l(Re,{name:"v-field",active:!!e.loading,color:e.error?"error":typeof e.loading=="string"?e.loading:e.color},{default:t.loader}),i&&l("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&l(B,{key:"prepend-icon",name:"prependInner"},null),(I=t["prepend-inner"])==null?void 0:I.call(t,_.value)]),l("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&f.value&&l(D,{key:"floating-label",ref:k,class:[v.value],floating:!0,for:o.value},{default:()=>[r]}),l(D,{ref:A,for:o.value},{default:()=>[r]}),(P=t.default)==null?void 0:P.call(t,{..._.value,props:{id:o.value,class:"v-field__input","aria-describedby":q.value},focus:R,blur:L})]),m&&l(Le,{key:"clear"},{default:()=>[Y(l("div",{class:"v-field__clearable",onMousedown:F=>{F.preventDefault(),F.stopPropagation()}},[t.clear?t.clear():l(B,{name:"clear"},null)]),[[le,e.dirty]])]}),g&&l("div",{key:"append",class:"v-field__append-inner"},[(V=t["append-inner"])==null?void 0:V.call(t,_.value),e.appendInnerIcon&&l(B,{key:"append-icon",name:"appendInner"},null)]),l("div",{class:["v-field__outline",v.value]},[s&&l(T,null,[l("div",{class:"v-field__outline__start"},null),f.value&&l("div",{class:"v-field__outline__notch"},[l(D,{ref:k,floating:!0,for:o.value},{default:()=>[r]})]),l("div",{class:"v-field__outline__end"},null)]),n.value&&f.value&&l(D,{ref:k,floating:!0,for:o.value},{default:()=>[r]})])])}),{controlRef:E}}});function Je(e){const y=Object.keys(ae.props).filter(a=>!ge(a)&&a!=="class"&&a!=="style");return ye(e,y)}const Ke=["color","file","time","date","datetime-local","week","month"],We=N({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,type:{type:String,default:"text"},modelModifiers:Object,...De(),...ne()},"VTextField"),Ze=O()({name:"VTextField",directives:{Intersect:$e},inheritAttrs:!1,props:We(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,y){let{attrs:a,emit:h,slots:t}=y;const x=xe(e,"modelValue"),{isFocused:b,focus:j,blur:w}=te(e),R=u(()=>typeof e.counterValue=="function"?e.counterValue(x.value):(x.value??"").toString().length),L=u(()=>{if(a.maxlength)return a.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter}),B=u(()=>["plain","underlined"].includes(e.variant));function G(n,d){var c,v;!e.autofocus||!n||(v=(c=d[0].target)==null?void 0:c.focus)==null||v.call(c)}const $=S(),C=S(),f=S(),H=u(()=>Ke.includes(e.type)||e.persistentPlaceholder||b.value||e.active);function o(){var n;f.value!==document.activeElement&&((n=f.value)==null||n.focus()),b.value||j()}function q(n){h("mousedown:control",n),n.target!==f.value&&(o(),n.preventDefault())}function A(n){o(),h("click:control",n)}function k(n){n.stopPropagation(),o(),Z(()=>{x.value=null,he(e["onClick:clear"],n)})}function E(n){var c;const d=n.target;if(x.value=d.value,(c=e.modelModifiers)!=null&&c.trim&&["text","search","password","tel","url"].includes(e.type)){const v=[d.selectionStart,d.selectionEnd];Z(()=>{d.selectionStart=v[0],d.selectionEnd=v[1]})}}return U(()=>{const n=!!(t.counter||e.counter||e.counterValue),d=!!(n||t.details),[c,v]=be(a),[{modelValue:z,..._}]=ee.filterProps(e),[J]=Je(e);return l(ee,M({ref:$,modelValue:x.value,"onUpdate:modelValue":s=>x.value=s,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-text-field--plain-underlined":["plain","underlined"].includes(e.variant)},e.class],style:e.style},c,_,{centerAffix:!B.value,focused:b.value}),{...t,default:s=>{let{id:i,isDisabled:m,isDirty:g,isReadonly:r,isValid:I}=s;return l(ae,M({ref:C,onMousedown:q,onClick:A,"onClick:clear":k,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:"textbox"},J,{id:i.value,active:H.value||g.value,dirty:g.value||e.dirty,disabled:m.value,focused:b.value,error:I.value===!1}),{...t,default:P=>{let{props:{class:V,...F}}=P;const p=Y(l("input",M({ref:f,value:x.value,onInput:E,autofocus:e.autofocus,readonly:r.value,disabled:m.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:o,onBlur:w},F,v),null),[[Ce("intersect"),{handler:G},null,{once:!0}]]);return l(T,null,[e.prefix&&l("span",{class:"v-text-field__prefix"},[l("span",{class:"v-text-field__prefix__text"},[e.prefix])]),l("div",{class:V,"data-no-activator":""},[t.default?l(T,null,[t.default(),p]):Ve(p)]),e.suffix&&l("span",{class:"v-text-field__suffix"},[l("span",{class:"v-text-field__suffix__text"},[e.suffix])])])}})},details:d?s=>{var i;return l(T,null,[(i=t.details)==null?void 0:i.call(t,s),n&&l(T,null,[l("span",null,null),l(Ge,{active:e.persistentCounter||b.value,value:R.value,max:L.value},t.counter)])])}:void 0})}),Ue({},$,C,f)}});export{Ze as V,We as m};
