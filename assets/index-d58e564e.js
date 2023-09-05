import{a_ as j,l as x,aX as Oe,a$ as fe,m as O,aY as X,n as d,b0 as H,as as ve,b1 as te,k as p,aj as k,B as h,I as He,q as me,r as Q,s as ge,b2 as Ae,z as he,u as q,b3 as De,b4 as We,a as u,C as ye,a4 as Y,b5 as Z,S as B,A as F,a3 as Fe,M as pe,i as ne,K as je,F as be,v as Me,R as se,b6 as Xe,T as qe,V as Ye,x as _e,H as Ke,b7 as Ue,b8 as ae,al as Ge,ar as Je,ac as Qe,b9 as Ze,ba as ie,bb as et}from"./index-6e7c6b1d.js";import{m as Se}from"./tag-6c591834.js";const Ce=["top","bottom"],tt=["start","end","left","right"];function nt(e,t){let[n,s]=e.split(" ");return s||(s=j(Ce,n)?"start":j(tt,n)?"top":"center"),{side:re(n,t),align:re(s,t)}}function re(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}function zt(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function It(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function Nt(e){return{side:e.align,align:e.side}}function Ot(e){return j(Ce,e.side)?"y":"x"}function Ht(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return x()({name:n??Oe(fe(e.replace(/__/g,"-"))),props:{tag:{type:String,default:t},...O()},setup(s,r){let{slots:a}=r;return()=>{var i;return X(s.tag,{class:[e,s.class],style:s.style},(i=a.default)==null?void 0:i.call(a))}}})}function ee(e){return ve(()=>{const t=[],n={};return e.value.background&&(te(e.value.background)?n.backgroundColor=e.value.background:t.push(`bg-${e.value.background}`)),e.value.text&&(te(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:n}})}function we(e,t){const n=d(()=>({text:H(e)?e.value:t?e[t]:null})),{colorClasses:s,colorStyles:r}=ee(n);return{textColorClasses:s,textColorStyles:r}}function oe(e,t){const n=d(()=>({background:H(e)?e.value:t?e[t]:null})),{colorClasses:s,colorStyles:r}=ee(n);return{backgroundColorClasses:s,backgroundColorStyles:r}}const st=["x-small","small","default","large","x-large"],at=p({size:{type:[String,Number],default:"default"}},"size");function it(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:k();return ve(()=>{let n,s;return j(st,e.size)?n=`${t}--size-${e.size}`:e.size&&(s={width:h(e.size),height:h(e.size)}),{sizeClasses:n,sizeStyles:s}})}const rt=p({color:String,start:Boolean,end:Boolean,icon:He,...O(),...at(),...Se({tag:"i"}),...me()},"VIcon"),At=x()({name:"VIcon",props:rt(),setup(e,t){let{attrs:n,slots:s}=t;const r=Q(),{themeClasses:a}=ge(e),{iconData:i}=Ae(d(()=>r.value||e.icon)),{sizeClasses:o}=it(e),{textColorClasses:l,textColorStyles:c}=we(he(e,"color"));return q(()=>{var m,y;const v=(m=s.default)==null?void 0:m.call(s);return v&&(r.value=(y=De(v).filter(b=>b.type===We&&b.children&&typeof b.children=="string")[0])==null?void 0:y.children),u(i.value.component,{tag:e.tag,icon:i.value.icon,class:["v-icon","notranslate",a.value,o.value,l.value,{"v-icon--clickable":!!n.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[o.value?void 0:{fontSize:h(e.size),height:h(e.size),width:h(e.size)},c.value,e.style],role:n.onClick?"button":void 0,"aria-hidden":!n.onClick},{default:()=>[v]})}),{}}});const ot=p({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function lt(e){return{dimensionStyles:d(()=>({height:h(e.height),maxHeight:h(e.maxHeight),maxWidth:h(e.maxWidth),minHeight:h(e.minHeight),minWidth:h(e.minWidth),width:h(e.width)}))}}function ut(e){return{aspectStyles:d(()=>{const t=Number(e.aspectRatio);return t?{paddingBottom:String(1/t*100)+"%"}:void 0})}}const xe=p({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...O(),...ot()},"VResponsive"),le=x()({name:"VResponsive",props:xe(),setup(e,t){let{slots:n}=t;const{aspectStyles:s}=ut(e),{dimensionStyles:r}=lt(e);return q(()=>{var a;return u("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[r.value,e.style]},[u("div",{class:"v-responsive__sizer",style:s.value},null),(a=n.additional)==null?void 0:a.call(n),n.default&&u("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])}),{}}}),ct=p({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),W=(e,t)=>{let{slots:n}=t;const{transition:s,disabled:r,...a}=e,{component:i=Y,...o}=typeof s=="object"?s:{};return X(i,ye(typeof s=="string"?{name:r?"":s}:o,a,{disabled:r}),n)};function dt(e,t){if(!Z)return;const n=t.modifiers||{},s=t.value,{handler:r,options:a}=typeof s=="object"?s:{handler:s,options:{}},i=new IntersectionObserver(function(){var m;let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],l=arguments.length>1?arguments[1]:void 0;const c=(m=e._observe)==null?void 0:m[t.instance.$.uid];if(!c)return;const v=o.some(y=>y.isIntersecting);r&&(!n.quiet||c.init)&&(!n.once||v||c.init)&&r(v,o,l),v&&n.once?ke(e,t):c.init=!0},a);e._observe=Object(e._observe),e._observe[t.instance.$.uid]={init:!1,observer:i},i.observe(e)}function ke(e,t){var s;const n=(s=e._observe)==null?void 0:s[t.instance.$.uid];n&&(n.observer.unobserve(e),delete e._observe[t.instance.$.uid])}const ft={mounted:dt,unmounted:ke},vt=ft,mt=p({alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,...xe(),...O(),...ct()},"VImg"),Dt=x()({name:"VImg",directives:{intersect:vt},props:mt(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,t){let{emit:n,slots:s}=t;const r=B(""),a=Q(),i=B(e.eager?"loading":"idle"),o=B(),l=B(),c=d(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),v=d(()=>c.value.aspect||o.value/l.value||0);F(()=>e.src,()=>{m(i.value!=="idle")}),F(v,(f,g)=>{!f&&g&&a.value&&L(a.value)}),Fe(()=>m());function m(f){if(!(e.eager&&f)&&!(Z&&!f&&!e.eager)){if(i.value="loading",c.value.lazySrc){const g=new Image;g.src=c.value.lazySrc,L(g,null)}c.value.src&&pe(()=>{var g,C;if(n("loadstart",((g=a.value)==null?void 0:g.currentSrc)||c.value.src),(C=a.value)!=null&&C.complete){if(a.value.naturalWidth||b(),i.value==="error")return;v.value||L(a.value,null),y()}else v.value||L(a.value),A()})}}function y(){var f;A(),i.value="loaded",n("load",((f=a.value)==null?void 0:f.currentSrc)||c.value.src)}function b(){var f;i.value="error",n("error",((f=a.value)==null?void 0:f.currentSrc)||c.value.src)}function A(){const f=a.value;f&&(r.value=f.currentSrc||f.src)}let T=-1;function L(f){let g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const C=()=>{clearTimeout(T);const{naturalHeight:D,naturalWidth:P}=f;D||P?(o.value=P,l.value=D):!f.complete&&i.value==="loading"&&g!=null?T=window.setTimeout(C,g):(f.currentSrc.endsWith(".svg")||f.currentSrc.startsWith("data:image/svg+xml"))&&(o.value=1,l.value=1)};C()}const $=d(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),w=()=>{var C;if(!c.value.src||i.value==="idle")return null;const f=u("img",{class:["v-img__img",$.value],src:c.value.src,srcset:c.value.srcset,alt:e.alt,sizes:e.sizes,ref:a,onLoad:y,onError:b},null),g=(C=s.sources)==null?void 0:C.call(s);return u(W,{transition:e.transition,appear:!0},{default:()=>[ne(g?u("picture",{class:"v-img__picture"},[g,f]):f,[[Me,i.value==="loaded"]])]})},V=()=>u(W,{transition:e.transition},{default:()=>[c.value.lazySrc&&i.value!=="loaded"&&u("img",{class:["v-img__img","v-img__img--preload",$.value],src:c.value.lazySrc,alt:e.alt},null)]}),R=()=>s.placeholder?u(W,{transition:e.transition,appear:!0},{default:()=>[(i.value==="loading"||i.value==="error"&&!s.error)&&u("div",{class:"v-img__placeholder"},[s.placeholder()])]}):null,E=()=>s.error?u(W,{transition:e.transition,appear:!0},{default:()=>[i.value==="error"&&u("div",{class:"v-img__error"},[s.error()])]}):null,K=()=>e.gradient?u("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,z=B(!1);{const f=F(v,g=>{g&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{z.value=!0})}),f())})}return q(()=>{const[f]=le.filterProps(e);return ne(u(le,ye({class:["v-img",{"v-img--booting":!z.value},e.class],style:[{width:h(e.width==="auto"?o.value:e.width)},e.style]},f,{aspectRatio:v.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>u(be,null,[u(w,null,null),u(V,null,null),u(K,null,null),u(R,null,null),u(E,null,null)]),default:s.default}),[[je("intersect"),{handler:m,options:e.options},null,{once:!0}]])}),{currentSrc:r,image:a,state:i,naturalWidth:o,naturalHeight:l}}}),gt=[null,"default","comfortable","compact"],Wt=p({density:{type:String,default:"default",validator:e=>gt.includes(e)}},"density");function Ft(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:k();return{densityClasses:d(()=>`${t}--density-${e.density}`)}}const ht=p({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function yt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:k();return{roundedClasses:d(()=>{const s=H(e)?e.value:e.rounded,r=[];if(s===!0||s==="")r.push(`${t}--rounded`);else if(typeof s=="string"||s===0)for(const a of String(s).split(" "))r.push(`rounded-${a}`);return r})}}const pt=["elevated","flat","tonal","outlined","text","plain"];function jt(e,t){return u(be,null,[e&&u("span",{key:"overlay",class:`${t}__overlay`},null),u("span",{key:"underlay",class:`${t}__underlay`},null)])}const Mt=p({color:String,variant:{type:String,default:"elevated",validator:e=>pt.includes(e)}},"variant");function Xt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:k();const n=d(()=>{const{variant:a}=se(e);return`${t}--variant-${a}`}),{colorClasses:s,colorStyles:r}=ee(d(()=>{const{variant:a,color:i}=se(e);return{[["elevated","flat"].includes(a)?"background":"text"]:i}}));return{colorClasses:s,colorStyles:r,variantClasses:n}}const bt=p({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),qt=x(!1)({name:"VDefaultsProvider",props:bt(),setup(e,t){let{slots:n}=t;const{defaults:s,disabled:r,reset:a,root:i,scoped:o}=Xe(e);return qe(s,{reset:a,root:i,scoped:o,disabled:r}),()=>{var l;return(l=n.default)==null?void 0:l.call(n)}}}),Yt=p({border:[Boolean,Number,String]},"border");function Kt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:k();return{borderClasses:d(()=>{const s=H(e)?e.value:e.border,r=[];if(s===!0||s==="")r.push(`${t}--border`);else if(typeof s=="string"||s===0)for(const a of String(s).split(" "))r.push(`border-${a}`);return r})}}const Ut=p({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function Gt(e){return{elevationClasses:d(()=>{const n=H(e)?e.value:e.elevation,s=[];return n==null||s.push(`elevation-${n}`),s})}}function _t(e,t){const n=Q(),s=B(!1);if(Z){const r=new IntersectionObserver(a=>{e==null||e(a,r),s.value=!!a.find(i=>i.isIntersecting)},t);Ye(()=>{r.disconnect()}),F(n,(a,i)=>{i&&(r.unobserve(i),s.value=!1),a&&r.observe(a)},{flush:"post"})}return{intersectionRef:n,isIntersecting:s}}const ue={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},St=p({location:String},"location");function Ct(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:s}=_e();return{locationStyles:d(()=>{if(!e.location)return{};const{side:a,align:i}=nt(e.location.split(" ").length>1?e.location:`${e.location} center`,s.value);function o(c){return n?n(c):0}const l={};return a!=="center"&&(t?l[ue[a]]=`calc(100% - ${o(a)}px)`:l[a]=0),i!=="center"?t?l[ue[i]]=`calc(100% - ${o(i)}px)`:l[i]=0:(a==="center"?l.top=l.left="50%":l[{top:"left",bottom:"left",left:"top",right:"top"}[a]]="50%",l.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[a]),l})}}const wt=p({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...O(),...St({location:"top"}),...ht(),...Se(),...me()},"VProgressLinear"),xt=x()({name:"VProgressLinear",props:wt(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const s=Ke(e,"modelValue"),{isRtl:r,rtlClasses:a}=_e(),{themeClasses:i}=ge(e),{locationStyles:o}=Ct(e),{textColorClasses:l,textColorStyles:c}=we(e,"color"),{backgroundColorClasses:v,backgroundColorStyles:m}=oe(d(()=>e.bgColor||e.color)),{backgroundColorClasses:y,backgroundColorStyles:b}=oe(e,"color"),{roundedClasses:A}=yt(e),{intersectionRef:T,isIntersecting:L}=_t(),$=d(()=>parseInt(e.max,10)),w=d(()=>parseInt(e.height,10)),V=d(()=>parseFloat(e.bufferValue)/$.value*100),R=d(()=>parseFloat(s.value)/$.value*100),E=d(()=>r.value!==e.reverse),K=d(()=>e.indeterminate?"fade-transition":"slide-x-transition"),z=d(()=>e.bgOpacity==null?e.bgOpacity:parseFloat(e.bgOpacity));function f(g){if(!T.value)return;const{left:C,right:D,width:P}=T.value.getBoundingClientRect(),Ne=E.value?P-g.clientX+(D-P):g.clientX-C;s.value=Math.round(Ne/P*$.value)}return q(()=>u(e.tag,{ref:T,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&L.value,"v-progress-linear--reverse":E.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},A.value,i.value,a.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?h(w.value):0,"--v-progress-linear-height":h(w.value),...o.value},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:R.value,onClick:e.clickable&&f},{default:()=>[e.stream&&u("div",{key:"stream",class:["v-progress-linear__stream",l.value],style:{...c.value,[E.value?"left":"right"]:h(-w.value),borderTop:`${h(w.value/2)} dotted`,opacity:z.value,top:`calc(50% - ${h(w.value/4)})`,width:h(100-V.value,"%"),"--v-progress-linear-stream-to":h(w.value*(E.value?1:-1))}},null),u("div",{class:["v-progress-linear__background",v.value],style:[m.value,{opacity:z.value,width:h(e.stream?V.value:100,"%")}]},null),u(Y,{name:K.value},{default:()=>[e.indeterminate?u("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(g=>u("div",{key:g,class:["v-progress-linear__indeterminate",g,y.value],style:b.value},null))]):u("div",{class:["v-progress-linear__determinate",y.value],style:[b.value,{width:h(R.value,"%")}]},null)]}),n.default&&u("div",{class:"v-progress-linear__content"},[n.default({value:R.value,buffer:V.value})])]})),{}}}),Jt=p({loading:[Boolean,String]},"loader");function Qt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:k();return{loaderClasses:d(()=>({[`${t}--loading`]:e.loading}))}}function Zt(e,t){var s;let{slots:n}=t;return u("div",{class:`${e.name}__loader`},[((s=n.default)==null?void 0:s.call(n,{color:e.color,isActive:e.active}))||u(xt,{active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const kt=["static","relative","fixed","absolute","sticky"],en=p({position:{type:String,validator:e=>kt.includes(e)}},"position");function tn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:k();return{positionClasses:d(()=>e.position?`${t}--${e.position}`:void 0)}}function nn(){var e,t;return(t=(e=Ge("useRouter"))==null?void 0:e.proxy)==null?void 0:t.$router}function sn(e,t){const n=Ue("RouterLink"),s=d(()=>!!(e.href||e.to)),r=d(()=>(s==null?void 0:s.value)||ae(t,"click")||ae(e,"click"));if(typeof n=="string")return{isLink:s,isClickable:r,href:he(e,"href")};const a=e.to?n.useLink(e):void 0;return{isLink:s,isClickable:r,route:a==null?void 0:a.route,navigate:a==null?void 0:a.navigate,isActive:a&&d(()=>{var i,o;return e.exact?(i=a.isExactActive)==null?void 0:i.value:(o=a.isActive)==null?void 0:o.value}),href:d(()=>e.to?a==null?void 0:a.route.value.href:e.href)}}const an=p({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let U=!1;function rn(e,t){let n=!1,s,r;Je&&(pe(()=>{window.addEventListener("popstate",a),s=e==null?void 0:e.beforeEach((i,o,l)=>{U?n?t(l):l():setTimeout(()=>n?t(l):l()),U=!0}),r=e==null?void 0:e.afterEach(()=>{U=!1})}),Qe(()=>{window.removeEventListener("popstate",a),s==null||s(),r==null||r()}));function a(i){var o;(o=i.state)!=null&&o.replaced||(n=!0,setTimeout(()=>n=!1))}}const G=Symbol("rippleStop"),Tt=80;function ce(e,t){e.style.transform=t,e.style.webkitTransform=t}function J(e){return e.constructor.name==="TouchEvent"}function Te(e){return e.constructor.name==="KeyboardEvent"}const Lt=function(e,t){var m;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=0,r=0;if(!Te(e)){const y=t.getBoundingClientRect(),b=J(e)?e.touches[e.touches.length-1]:e;s=b.clientX-y.left,r=b.clientY-y.top}let a=0,i=.3;(m=t._ripple)!=null&&m.circle?(i=.15,a=t.clientWidth/2,a=n.center?a:a+Math.sqrt((s-a)**2+(r-a)**2)/4):a=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const o=`${(t.clientWidth-a*2)/2}px`,l=`${(t.clientHeight-a*2)/2}px`,c=n.center?o:`${s-a}px`,v=n.center?l:`${r-a}px`;return{radius:a,scale:i,x:c,y:v,centerX:o,centerY:l}},M={show(e,t){var b;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((b=t==null?void 0:t._ripple)!=null&&b.enabled))return;const s=document.createElement("span"),r=document.createElement("span");s.appendChild(r),s.className="v-ripple__container",n.class&&(s.className+=` ${n.class}`);const{radius:a,scale:i,x:o,y:l,centerX:c,centerY:v}=Lt(e,t,n),m=`${a*2}px`;r.className="v-ripple__animation",r.style.width=m,r.style.height=m,t.appendChild(s);const y=window.getComputedStyle(t);y&&y.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),r.classList.add("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--visible"),ce(r,`translate(${o}, ${l}) scale3d(${i},${i},${i})`),r.dataset.activated=String(performance.now()),setTimeout(()=>{r.classList.remove("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--in"),ce(r,`translate(${c}, ${v}) scale3d(1,1,1)`)},0)},hide(e){var a;if(!((a=e==null?void 0:e._ripple)!=null&&a.enabled))return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const n=t[t.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const s=performance.now()-Number(n.dataset.activated),r=Math.max(250-s,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var o;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((o=n.parentNode)==null?void 0:o.parentNode)===e&&e.removeChild(n.parentNode)},300)},r)}};function Le(e){return typeof e>"u"||!!e}function I(e){const t={},n=e.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||e[G])){if(e[G]=!0,J(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(t.center=n._ripple.centered||Te(e),n._ripple.class&&(t.class=n._ripple.class),J(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{M.show(e,n,t)},n._ripple.showTimer=window.setTimeout(()=>{var s;(s=n==null?void 0:n._ripple)!=null&&s.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},Tt)}else M.show(e,n,t)}}function de(e){e[G]=!0}function _(e){const t=e.currentTarget;if(t!=null&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{_(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),M.hide(t)}}function $e(e){const t=e.currentTarget;t!=null&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let N=!1;function Ee(e){!N&&(e.keyCode===ie.enter||e.keyCode===ie.space)&&(N=!0,I(e))}function Pe(e){N=!1,_(e)}function Be(e){N&&(N=!1,_(e))}function Ve(e,t,n){const{value:s,modifiers:r}=t,a=Le(s);if(a||M.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=a,e._ripple.centered=r.center,e._ripple.circle=r.circle,Ze(s)&&s.class&&(e._ripple.class=s.class),a&&!n){if(r.stop){e.addEventListener("touchstart",de,{passive:!0}),e.addEventListener("mousedown",de);return}e.addEventListener("touchstart",I,{passive:!0}),e.addEventListener("touchend",_,{passive:!0}),e.addEventListener("touchmove",$e,{passive:!0}),e.addEventListener("touchcancel",_),e.addEventListener("mousedown",I),e.addEventListener("mouseup",_),e.addEventListener("mouseleave",_),e.addEventListener("keydown",Ee),e.addEventListener("keyup",Pe),e.addEventListener("blur",Be),e.addEventListener("dragstart",_,{passive:!0})}else!a&&n&&Re(e)}function Re(e){e.removeEventListener("mousedown",I),e.removeEventListener("touchstart",I),e.removeEventListener("touchend",_),e.removeEventListener("touchmove",$e),e.removeEventListener("touchcancel",_),e.removeEventListener("mouseup",_),e.removeEventListener("mouseleave",_),e.removeEventListener("keydown",Ee),e.removeEventListener("keyup",Pe),e.removeEventListener("dragstart",_),e.removeEventListener("blur",Be)}function $t(e,t){Ve(e,t,!1)}function Et(e){delete e._ripple,Re(e)}function Pt(e,t){if(t.value===t.oldValue)return;const n=Le(t.oldValue);Ve(e,t,n)}const on={mounted:$t,unmounted:Et,updated:Pt},Bt=p({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function S(e,t,n){return x()({name:e,props:Bt({mode:n,origin:t}),setup(s,r){let{slots:a}=r;const i={onBeforeEnter(o){s.origin&&(o.style.transformOrigin=s.origin)},onLeave(o){if(s.leaveAbsolute){const{offsetTop:l,offsetLeft:c,offsetWidth:v,offsetHeight:m}=o;o._transitionInitialStyles={position:o.style.position,top:o.style.top,left:o.style.left,width:o.style.width,height:o.style.height},o.style.position="absolute",o.style.top=`${l}px`,o.style.left=`${c}px`,o.style.width=`${v}px`,o.style.height=`${m}px`}s.hideOnLeave&&o.style.setProperty("display","none","important")},onAfterLeave(o){if(s.leaveAbsolute&&(o!=null&&o._transitionInitialStyles)){const{position:l,top:c,left:v,width:m,height:y}=o._transitionInitialStyles;delete o._transitionInitialStyles,o.style.position=l||"",o.style.top=c||"",o.style.left=v||"",o.style.width=m||"",o.style.height=y||""}}};return()=>{const o=s.group?et:Y;return X(o,{name:s.disabled?"":e,css:!s.disabled,...s.group?void 0:{mode:s.mode},...s.disabled?{}:i},a.default)}}})}function ze(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return x()({name:e,props:{mode:{type:String,default:n},disabled:Boolean},setup(s,r){let{slots:a}=r;return()=>X(Y,{name:s.disabled?"":e,css:!s.disabled,...s.disabled?{}:t},a.default)}})}function Ie(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const n=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",s=fe(`offset-${n}`);return{onBeforeEnter(i){i._parent=i.parentNode,i._initialStyle={transition:i.style.transition,overflow:i.style.overflow,[n]:i.style[n]}},onEnter(i){const o=i._initialStyle;i.style.setProperty("transition","none","important"),i.style.overflow="hidden";const l=`${i[s]}px`;i.style[n]="0",i.offsetHeight,i.style.transition=o.transition,e&&i._parent&&i._parent.classList.add(e),requestAnimationFrame(()=>{i.style[n]=l})},onAfterEnter:a,onEnterCancelled:a,onLeave(i){i._initialStyle={transition:"",overflow:i.style.overflow,[n]:i.style[n]},i.style.overflow="hidden",i.style[n]=`${i[s]}px`,i.offsetHeight,requestAnimationFrame(()=>i.style[n]="0")},onAfterLeave:r,onLeaveCancelled:r};function r(i){e&&i._parent&&i._parent.classList.remove(e),a(i)}function a(i){const o=i._initialStyle[n];i.style.overflow=i._initialStyle.overflow,o!=null&&(i.style[n]=o),delete i._initialStyle}}S("fab-transition","center center","out-in");S("dialog-bottom-transition");S("dialog-top-transition");const ln=S("fade-transition");S("scale-transition");const un=S("scroll-x-transition");S("scroll-x-reverse-transition");S("scroll-y-transition");S("scroll-y-reverse-transition");S("slide-x-transition");S("slide-x-reverse-transition");const cn=S("slide-y-transition");S("slide-y-reverse-transition");const dn=ze("expand-transition",Ie()),fn=ze("expand-x-transition",Ie("",!0));export{sn as A,Xt as B,lt as C,jt as D,nt as E,zt as F,It as G,Nt as H,vt as I,Ot as J,rn as K,Zt as L,W as M,St as N,en as O,Ct as P,tn as Q,on as R,at as S,it as T,_t as U,ln as V,cn as a,Jt as b,ht as c,yt as d,oe as e,we as f,fn as g,un as h,At as i,Yt as j,Ut as k,Kt as l,ct as m,Gt as n,Dt as o,qt as p,dn as q,Ht as r,nn as s,re as t,Qt as u,Wt as v,Ft as w,ot as x,an as y,Mt as z};
