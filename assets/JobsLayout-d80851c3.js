import ze from"./DefaultLayout-44b6446e.js";import{a as Ye,u as Fe}from"./scopeId-116dc358.js";import{s as Ue}from"./svgLogo-4744705a.js";import{V as T}from"./VBtn-6edaa655.js";import{o as k,c as A,F as P,r as Z,e as N,w as h,g as L,t as G,b as J,q as z,s as X,u as Y,x as F,f as o,y as ne,C as D,z as se,A as Ce,V,d as m,W as Be,G as O,i as ee,X as We,D as H,j as re,Y as ue,Z as ie,L as Ee,$ as Oe,a0 as ce,H as K,a1 as qe,a2 as Xe,a3 as je,a4 as Ze,a5 as Ge,P as Je,a6 as Ke,a7 as Qe,k as et,a8 as j,a9 as tt,U,aa as at,_ as lt}from"./index-760afe0f.js";import{j as ot,k as ve,l as de,c as me,e as Q,n as fe,o as ge,d as he,p as Ie,q as le,r as nt,s as st,t as rt}from"./group-b12a5b73.js";import{u as Le}from"./ssrBoot-88349edd.js";import{m as te}from"./tag-0385c92d.js";import{V as oe,a as q}from"./VRow-1c7ac8dc.js";const ut=ot("v-spacer","div","VSpacer"),it=J("div",{id:"navigation-button",class:"d-flex flex-column"},null,-1),Se={__name:"TheNavigation",props:{links:Array},setup(e){const s=e;return(a,r)=>(k(),A(P,null,[it,(k(!0),A(P,null,Z(s.links,l=>(k(),N(T,{class:"px-1 mx-1 mx-lg-2",variant:"text",key:l.title,href:l.url,block:a.$vuetify.display.mdAndDown},{default:h(()=>[L(G(l.title),1)]),_:2},1032,["href","block"]))),128))],64))}};const Me=z({text:String,...X(),...te()},"VToolbarTitle"),$e=Y()({name:"VToolbarTitle",props:Me(),setup(e,s){let{slots:a}=s;return F(()=>{const r=!!(a.default||a.text||e.text);return o(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var l;return[r&&o("div",{class:"v-toolbar-title__placeholder"},[a.text?a.text():e.text,(l=a.default)==null?void 0:l.call(a)])]}})}),{}}}),ct=[null,"prominent","default","comfortable","compact"],Ne=z({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>ct.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...ve(),...X(),...de(),...me(),...te({tag:"header"}),...ne()},"VToolbar"),pe=Y()({name:"VToolbar",props:Ne(),setup(e,s){var i;let{slots:a}=s;const{backgroundColorClasses:r,backgroundColorStyles:l}=Q(D(e,"color")),{borderClasses:t}=fe(e),{elevationClasses:n}=ge(e),{roundedClasses:d}=he(e),{themeClasses:g}=se(e),{rtlClasses:y}=Ce(),u=V(!!(e.extended||(i=a.extension)!=null&&i.call(a))),f=m(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),c=m(()=>u.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return Be({VBtn:{variant:"text"}}),F(()=>{var x;const b=!!(e.title||a.title),C=!!(a.image||e.image),M=(x=a.extension)==null?void 0:x.call(a);return u.value=!!(e.extended||M),o(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},r.value,t.value,n.value,d.value,g.value,y.value,e.class],style:[l.value,e.style]},{default:()=>[C&&o("div",{key:"image",class:"v-toolbar__image"},[a.image?o(le,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):o(Ie,{key:"image-img",cover:!0,src:e.image},null)]),o(le,{defaults:{VTabs:{height:O(f.value)}}},{default:()=>{var S,B,E;return[o("div",{class:"v-toolbar__content",style:{height:O(f.value)}},[a.prepend&&o("div",{class:"v-toolbar__prepend"},[(S=a.prepend)==null?void 0:S.call(a)]),b&&o($e,{key:"title",text:e.title},{text:a.title}),(B=a.default)==null?void 0:B.call(a),a.append&&o("div",{class:"v-toolbar__append"},[(E=a.append)==null?void 0:E.call(a)])])]}}),o(le,{defaults:{VTabs:{height:O(c.value)}}},{default:()=>[o(nt,null,{default:()=>[u.value&&o("div",{class:"v-toolbar__extension",style:{height:O(c.value)}},[M])]})]})]})}),{contentHeight:f,extensionHeight:c}}}),vt=z({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function dt(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:a}=s;let r=0;const l=ee(null),t=V(0),n=V(0),d=V(0),g=V(!1),y=V(!1),u=m(()=>Number(e.scrollThreshold)),f=m(()=>We((u.value-t.value)/u.value||0)),c=()=>{const i=l.value;!i||a&&!a.value||(r=t.value,t.value="window"in i?i.pageYOffset:i.scrollTop,y.value=t.value<r,d.value=Math.abs(t.value-u.value))};return H(y,()=>{n.value=n.value||t.value}),H(g,()=>{n.value=0}),re(()=>{H(()=>e.scrollTarget,i=>{var C;const b=i?document.querySelector(i):window;b&&b!==l.value&&((C=l.value)==null||C.removeEventListener("scroll",c),l.value=b,l.value.addEventListener("scroll",c,{passive:!0}))},{immediate:!0})}),ue(()=>{var i;(i=l.value)==null||i.removeEventListener("scroll",c)}),a&&H(a,c,{immediate:!0}),{scrollThreshold:u,currentScroll:t,currentThreshold:d,isScrollActive:g,scrollRatio:f,isScrollingUp:y,savedScroll:n}}const mt=z({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...Ne(),...ie(),...vt(),height:{type:[Number,String],default:64}},"VAppBar"),ft=Y()({name:"VAppBar",props:mt(),emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:a}=s;const r=ee(),l=Ee(e,"modelValue"),t=m(()=>{var S;const x=new Set(((S=e.scrollBehavior)==null?void 0:S.split(" "))??[]);return{hide:x.has("hide"),inverted:x.has("inverted"),collapse:x.has("collapse"),elevate:x.has("elevate"),fadeImage:x.has("fade-image")}}),n=m(()=>{const x=t.value;return x.hide||x.inverted||x.collapse||x.elevate||x.fadeImage||!l.value}),{currentScroll:d,scrollThreshold:g,isScrollingUp:y,scrollRatio:u}=dt(e,{canScroll:n}),f=m(()=>e.collapse||t.value.collapse&&(t.value.inverted?u.value>0:u.value===0)),c=m(()=>e.flat||t.value.elevate&&(t.value.inverted?d.value>0:d.value===0)),i=m(()=>t.value.fadeImage?t.value.inverted?1-u.value:u.value:void 0),b=m(()=>{var B,E;if(t.value.hide&&t.value.inverted)return 0;const x=((B=r.value)==null?void 0:B.contentHeight)??0,S=((E=r.value)==null?void 0:E.extensionHeight)??0;return x+S});Oe(m(()=>!!e.scrollBehavior),()=>{qe(()=>{t.value.hide?t.value.inverted?l.value=d.value>g.value:l.value=y.value||d.value<g.value:l.value=!0})});const{ssrBootStyles:C}=Le(),{layoutItemStyles:M}=ce({id:e.name,order:m(()=>parseInt(e.order,10)),position:D(e,"location"),layoutSize:b,elementSize:V(void 0),active:l,absolute:D(e,"absolute")});return F(()=>{const[x]=pe.filterProps(e);return o(pe,K({ref:r,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...M.value,"--v-toolbar-image-opacity":i.value,height:void 0,...C.value},e.style]},x,{collapse:f.value,flat:c.value}),a)}),{}}}),gt=Y()({name:"VAppBarTitle",props:Me(),setup(e,s){let{slots:a}=s;return F(()=>o($e,K(e,{class:"v-app-bar-title"}),a)),{}}});const ht=z({...X(),...Xe()},"VLayout"),yt=Y()({name:"VLayout",props:ht(),setup(e,s){let{slots:a}=s;const{layoutClasses:r,layoutStyles:l,getLayoutItem:t,items:n,layoutRef:d}=je(e);return F(()=>{var g;return o("div",{ref:d,class:[r.value,e.class],style:[l.value,e.style]},[(g=a.default)==null?void 0:g.call(a)])}),{getLayoutItem:t,items:n}}});function bt(e){let{rootEl:s,isSticky:a,layoutItemStyles:r}=e;const l=V(!1),t=V(0),n=m(()=>{const y=typeof l.value=="boolean"?"top":l.value;return[a.value?{top:"auto",bottom:"auto",height:void 0}:void 0,l.value?{[y]:O(t.value)}:{top:r.value.top}]});re(()=>{H(a,y=>{y?window.addEventListener("scroll",g,{passive:!0}):window.removeEventListener("scroll",g)},{immediate:!0})}),ue(()=>{window.removeEventListener("scroll",g)});let d=0;function g(){const y=d>window.scrollY?"up":"down",u=s.value.getBoundingClientRect(),f=parseFloat(r.value.top??0),c=window.scrollY-Math.max(0,t.value-f),i=u.height+Math.max(t.value,f)-window.scrollY-window.innerHeight,b=parseFloat(getComputedStyle(s.value).getPropertyValue("--v-body-scroll-y"))||0;u.height<window.innerHeight-f?(l.value="top",t.value=f):y==="up"&&l.value==="bottom"||y==="down"&&l.value==="top"?(t.value=window.scrollY+u.top-b,l.value=!0):y==="down"&&i<=0?(t.value=0,l.value="bottom"):y==="up"&&c<=0&&(b?l.value!=="top"&&(t.value=-c+b+f,l.value="top"):(t.value=u.top+c,l.value="top")),d=window.scrollY}return{isStuck:l,stickyStyles:n}}const wt=100,xt=20;function Ve(e){const s=1.41421356237;return(e<0?-1:1)*Math.sqrt(Math.abs(e))*s}function Te(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let s=0;for(let a=e.length-1;a>0;a--){if(e[a].t===e[a-1].t)continue;const r=Ve(s),l=(e[a].d-e[a-1].d)/(e[a].t-e[a-1].t);s+=(l-r)*Math.abs(l),a===e.length-1&&(s*=.5)}return Ve(s)*1e3}function _t(){const e={};function s(l){Array.from(l.changedTouches).forEach(t=>{(e[t.identifier]??(e[t.identifier]=new Ze(xt))).push([l.timeStamp,t])})}function a(l){Array.from(l.changedTouches).forEach(t=>{delete e[t.identifier]})}function r(l){var y;const t=(y=e[l])==null?void 0:y.values().reverse();if(!t)throw new Error(`No samples for touch id ${l}`);const n=t[0],d=[],g=[];for(const u of t){if(n[0]-u[0]>wt)break;d.push({t:u[0],d:u[1].clientX}),g.push({t:u[0],d:u[1].clientY})}return{x:Te(d),y:Te(g),get direction(){const{x:u,y:f}=this,[c,i]=[Math.abs(u),Math.abs(f)];return c>i&&u>=0?"right":c>i&&u<=0?"left":i>c&&f>=0?"down":i>c&&f<=0?"up":kt()}}}return{addMovement:s,endTouch:a,getVelocity:r}}function kt(){throw new Error}function St(e){let{isActive:s,isTemporary:a,width:r,touchless:l,position:t}=e;re(()=>{window.addEventListener("touchstart",x,{passive:!0}),window.addEventListener("touchmove",S,{passive:!1}),window.addEventListener("touchend",B,{passive:!0})}),ue(()=>{window.removeEventListener("touchstart",x),window.removeEventListener("touchmove",S),window.removeEventListener("touchend",B)});const n=m(()=>["left","right"].includes(t.value)),{addMovement:d,endTouch:g,getVelocity:y}=_t();let u=!1;const f=V(!1),c=V(0),i=V(0);let b;function C(v,_){return(t.value==="left"?v:t.value==="right"?document.documentElement.clientWidth-v:t.value==="top"?v:t.value==="bottom"?document.documentElement.clientHeight-v:W())-(_?r.value:0)}function M(v){let _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const w=t.value==="left"?(v-i.value)/r.value:t.value==="right"?(document.documentElement.clientWidth-v-i.value)/r.value:t.value==="top"?(v-i.value)/r.value:t.value==="bottom"?(document.documentElement.clientHeight-v-i.value)/r.value:W();return _?Math.max(0,Math.min(1,w)):w}function x(v){if(l.value)return;const _=v.changedTouches[0].clientX,w=v.changedTouches[0].clientY,p=25,$=t.value==="left"?_<p:t.value==="right"?_>document.documentElement.clientWidth-p:t.value==="top"?w<p:t.value==="bottom"?w>document.documentElement.clientHeight-p:W(),R=s.value&&(t.value==="left"?_<r.value:t.value==="right"?_>document.documentElement.clientWidth-r.value:t.value==="top"?w<r.value:t.value==="bottom"?w>document.documentElement.clientHeight-r.value:W());($||R||s.value&&a.value)&&(u=!0,b=[_,w],i.value=C(n.value?_:w,s.value),c.value=M(n.value?_:w),g(v),d(v))}function S(v){const _=v.changedTouches[0].clientX,w=v.changedTouches[0].clientY;if(u){if(!v.cancelable){u=!1;return}const $=Math.abs(_-b[0]),R=Math.abs(w-b[1]);(n.value?$>R&&$>3:R>$&&R>3)?(f.value=!0,u=!1):(n.value?R:$)>3&&(u=!1)}if(!f.value)return;v.preventDefault(),d(v);const p=M(n.value?_:w,!1);c.value=Math.max(0,Math.min(1,p)),p>1?i.value=C(n.value?_:w,!0):p<0&&(i.value=C(n.value?_:w,!1))}function B(v){if(u=!1,!f.value)return;d(v),f.value=!1;const _=y(v.changedTouches[0].identifier),w=Math.abs(_.x),p=Math.abs(_.y);(n.value?w>p&&w>400:p>w&&p>3)?s.value=_.direction===({left:"right",right:"left",top:"down",bottom:"up"}[t.value]||W()):s.value=c.value>.5}const E=m(()=>f.value?{transform:t.value==="left"?`translateX(calc(-100% + ${c.value*r.value}px))`:t.value==="right"?`translateX(calc(100% - ${c.value*r.value}px))`:t.value==="top"?`translateY(calc(-100% + ${c.value*r.value}px))`:t.value==="bottom"?`translateY(calc(100% - ${c.value*r.value}px))`:W(),transition:"none"}:void 0);return{isDragging:f,dragProgress:c,dragStyles:E}}function W(){throw new Error}const pt=["start","end","left","right","top","bottom"],Vt=z({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>pt.includes(e)},sticky:Boolean,...ve(),...X(),...de(),...ie(),...me(),...te({tag:"nav"}),...ne()},"VNavigationDrawer"),Tt=Y()({name:"VNavigationDrawer",props:Vt(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,s){let{attrs:a,emit:r,slots:l}=s;const{isRtl:t}=Ce(),{themeClasses:n}=se(e),{borderClasses:d}=fe(e),{backgroundColorClasses:g,backgroundColorStyles:y}=Q(D(e,"color")),{elevationClasses:u}=ge(e),{mobile:f}=Ge(),{roundedClasses:c}=he(e),i=st(),b=Ee(e,"modelValue",null,I=>!!I),{ssrBootStyles:C}=Le(),{scopeId:M}=Ye(),x=ee(),S=V(!1),B=m(()=>e.rail&&e.expandOnHover&&S.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),E=m(()=>rt(e.location,t.value)),v=m(()=>!e.permanent&&(f.value||e.temporary)),_=m(()=>e.sticky&&!v.value&&E.value!=="bottom");e.expandOnHover&&e.rail!=null&&H(S,I=>r("update:rail",!I)),e.disableResizeWatcher||H(v,I=>!e.permanent&&Je(()=>b.value=!I)),!e.disableRouteWatcher&&i&&H(i.currentRoute,()=>v.value&&(b.value=!1)),H(()=>e.permanent,I=>{I&&(b.value=!0)}),Ke(()=>{e.modelValue!=null||v.value||(b.value=e.permanent||!f.value)});const{isDragging:w,dragProgress:p,dragStyles:$}=St({isActive:b,isTemporary:v,width:B,touchless:D(e,"touchless"),position:E}),R=m(()=>{const I=v.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):B.value;return w.value?I*p.value:I}),{layoutItemStyles:ae,layoutItemScrimStyles:He}=ce({id:e.name,order:m(()=>parseInt(e.order,10)),position:E,layoutSize:R,elementSize:B,active:m(()=>b.value||w.value),disableTransitions:m(()=>w.value),absolute:m(()=>e.absolute||_.value&&typeof ye.value!="string")}),{isStuck:ye,stickyStyles:Pe}=bt({rootEl:x,isSticky:_,layoutItemStyles:ae}),be=Q(m(()=>typeof e.scrim=="string"?e.scrim:null)),Re=m(()=>({...w.value?{opacity:p.value*.2,transition:"none"}:void 0,...He.value}));Be({VList:{bgColor:"transparent"}});function Ae(){S.value=!0}function De(){S.value=!1}return F(()=>{const I=l.image||e.image;return o(P,null,[o(e.tag,K({ref:x,onMouseenter:Ae,onMouseleave:De,class:["v-navigation-drawer",`v-navigation-drawer--${E.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":S.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":v.value,"v-navigation-drawer--active":b.value,"v-navigation-drawer--sticky":_.value},n.value,g.value,d.value,u.value,c.value,e.class],style:[y.value,ae.value,$.value,C.value,Pe.value,e.style]},M,a),{default:()=>{var we,xe,_e,ke;return[I&&o("div",{key:"image",class:"v-navigation-drawer__img"},[l.image?(we=l.image)==null?void 0:we.call(l,{image:e.image}):o("img",{src:e.image,alt:""},null)]),l.prepend&&o("div",{class:"v-navigation-drawer__prepend"},[(xe=l.prepend)==null?void 0:xe.call(l)]),o("div",{class:"v-navigation-drawer__content"},[(_e=l.default)==null?void 0:_e.call(l)]),l.append&&o("div",{class:"v-navigation-drawer__append"},[(ke=l.append)==null?void 0:ke.call(l)])]}}),o(Qe,{name:"fade-transition"},{default:()=>[v.value&&(w.value||b.value)&&!!e.scrim&&o("div",K({class:["v-navigation-drawer__scrim",be.backgroundColorClasses.value],style:[Re.value,be.backgroundColorStyles.value],onClick:()=>b.value=!1},M),null)]})])}),{isStuck:ye}}}),Ct={class:"container"},Bt={__name:"TheHeader",setup(e){const s=Fe(),a=ee(!1),r=[{title:"Комьюнити",url:"https://t.me/YourCodeReview"},{title:"Полезные материалы",url:"https://blog.yourcodereview.com/category/career/"},{title:"Блог",url:"https://blog.yourcodereview.com/"}],l=()=>{a.value=!a.value};return(t,n)=>{const d=et("router-link");return k(),A(P,null,[t.$vuetify.display.mdAndDown?(k(),N(Tt,{key:0,modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=g=>a.value=g),location:"right",class:"rounded"},{default:h(()=>[o(yt,{class:"pb-1 pt-3 pr-3 justify-end"},{default:h(()=>[o(T,{icon:"mdi-close",onClick:l})]),_:1}),o(Se,{links:r})]),_:1},8,["modelValue"])):j("",!0),o(ft,{class:"text-white",elevation:8,height:"70"},{image:h(()=>[o(Ie,{gradient:"to top right, rgba(32 147 254 / 80%), rgba(220 23 254 / 80%) 90%"})]),default:h(()=>[J("div",Ct,[o(oe,null,{default:h(()=>[o(q,{cols:"11",sm:"4",md:"4",lg:"3",class:"d-flex justify-start align-center"},{default:h(()=>[o(gt,null,{default:h(()=>[o(d,{to:"/",class:"d-flex"},{default:h(()=>[o(Ue)]),_:1})]),_:1})]),_:1}),o(q,{cols:"1",sm:"8",md:"8",lg:"9",class:"d-flex justify-end align-center"},{default:h(()=>[t.$vuetify.display.lgAndUp?(k(),N(Se,{key:0,links:r})):j("",!0),t.$vuetify.display.mdAndDown?(k(),N(tt,{key:1,to:"#navigation-button"},[o(T,{class:"px-4 mx-1 mx-lg-2 mb-2",onClick:n[1]||(n[1]=g=>U(s).logoutUser())},{default:h(()=>[L(" Карьерная поддержка ")]),_:1}),U(s).isLoggedIn.value?(k(),N(T,{key:1,class:"px-4 mx-1 mx-lg-2",variant:"elevated",onClick:n[2]||(n[2]=g=>U(s).logoutUser())},{default:h(()=>[L(" Выйти ")]),_:1})):(k(),N(T,{key:0,class:"px-4 mx-1 mx-lg-2",to:{path:"/login",query:{type:"register"}}},{default:h(()=>[L(" Регистрация ")]),_:1}))])):j("",!0),t.$vuetify.display.mdAndUp?(k(),A(P,{key:2},[o(T,{color:"lime",class:"px-4 mx-1 mx-lg-2",variant:"elevated",onClick:n[3]||(n[3]=g=>U(s).logoutUser())},{default:h(()=>[L(" Карьерная поддержка ")]),_:1}),U(s).isLoggedIn.value?(k(),N(T,{key:1,class:"px-2 mx-1 mx-lg-2",variant:"elevated",onClick:n[4]||(n[4]=g=>U(s).logoutUser())},{default:h(()=>[L(" Выйти ")]),_:1})):(k(),N(T,{key:0,class:"px-4 mx-1 mx-lg-2",variant:"elevated",to:{path:"/login",query:{type:"register"}}},{default:h(()=>[L(" Регистрация ")]),_:1}))],64)):j("",!0),o(T,{class:"d-lg-none",size:"x-large",icon:"mdi-menu",onClick:l})]),_:1})]),_:1})])]),_:1})],64)}}};const Et=z({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...ve(),...X(),...de(),...ie(),...me(),...te({tag:"footer"}),...ne()},"VFooter"),It=Y()({name:"VFooter",props:Et(),setup(e,s){let{slots:a}=s;const{themeClasses:r}=se(e),{backgroundColorClasses:l,backgroundColorStyles:t}=Q(D(e,"color")),{borderClasses:n}=fe(e),{elevationClasses:d}=ge(e),{roundedClasses:g}=he(e),y=V(32),{resizeRef:u}=at(i=>{i.length&&(y.value=i[0].target.clientHeight)}),f=m(()=>e.height==="auto"?y.value:parseInt(e.height,10)),{layoutItemStyles:c}=ce({id:e.name,order:m(()=>parseInt(e.order,10)),position:m(()=>"bottom"),layoutSize:f,elementSize:m(()=>e.height==="auto"?void 0:f.value),active:m(()=>e.app),absolute:D(e,"absolute")});return F(()=>o(e.tag,{ref:u,class:["v-footer",r.value,l.value,n.value,d.value,g.value,e.class],style:[t.value,e.app?c.value:{height:O(e.height)},e.style]},a)),{}}}),Lt={class:"container"},Mt={class:"mt-auto"},$t={__name:"TheFooter",setup(e){const s=[{name:"+7 (499) 110-82-76",href:"tel:7499108276"},{name:"yourcodereview@gmail.com",href:"mailto:yourcodereview@gmail.com"}],a=[{name:"Программа и тестирование",anchor:"programma"},{name:"Вакансии",anchor:"vakansii"},{name:"Тарифы",anchor:"tarifi"},{name:"Запись",anchor:"zapis"},{name:"Команда",anchor:"komanda"},{name:"Отзывы",anchor:"otzivi"},{name:"О нас",anchor:"onas"},{name:"Вопросы и ответы",anchor:"faq"}],r=[{name:"Блог",href:"https://blog.yourcodereview.com"},{name:'Тест "Возьмут ли меня в IT"',href:"https://mrqz.me/6400c6ab9c4e9c004d2fecfa"}];return(l,t)=>(k(),N(It,{class:"footer px-0 py-6"},{default:h(()=>[J("div",Lt,[o(oe,null,{default:h(()=>[o(q,{cols:"12",md:"4",sm:"12",class:"d-flex flex-column py-1"},{default:h(()=>[o(T,{class:"justify-start",variant:"text",href:"https://yourcodereview.com"},{default:h(()=>[L("< codereview />")]),_:1}),J("div",Mt,[(k(),A(P,null,Z(s,n=>o(T,{key:n.name,class:"justify-start",variant:"text",href:n.href,block:""},{default:h(()=>[L(G(n.name),1)]),_:2},1032,["href"])),64))])]),_:1}),o(ut),o(q,{cols:"12",md:"8",sm:"12"},{default:h(()=>[o(oe,null,{default:h(()=>[(k(),A(P,null,Z(a,(n,d)=>o(q,{class:"py-1",cols:"12",md:"6",sm:"6",key:d},{default:h(()=>[o(T,{variant:"text",href:`https://yourcodereview.com/#${n.anchor}`},{default:h(()=>[L(G(n.name),1)]),_:2},1032,["href"])]),_:2},1024)),64)),(k(),A(P,null,Z(r,(n,d)=>o(q,{key:d,class:"py-1",cols:"12",md:"6",sm:"6"},{default:h(()=>[o(T,{variant:"text",href:n.href},{default:h(()=>[L(G(n.name),1)]),_:2},1032,["href"])]),_:2},1024)),64))]),_:1})]),_:1})]),_:1})])]),_:1}))}},Nt=lt($t,[["__scopeId","data-v-61af2241"]]),Wt={__name:"JobsLayout",setup(e){return(s,a)=>(k(),A(P,null,[o(Bt),o(ze),o(Nt)],64))}};export{Wt as default};
