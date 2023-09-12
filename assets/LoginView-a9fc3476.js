import{i as d,q as S,s as I,u as U,x as F,f as n,_ as C,y as R,j as q,o as j,c as z,w as v,l as E,v as B,z as D,g as y,t as x,A as M,p as P,m as T,b as k}from"./index-7ade655a.js";import{u as $}from"./useFirebase-9302a448.js";import{a as A}from"./axios-4a70c6fc.js";import{S as N}from"./svgLogo-bfea3935.js";import{_ as G}from"./uiSnackbar-ca88f90a.js";import{b as K,V as W,c as X,d as H}from"./group-1730f92a.js";import{m as J,c as O}from"./VInput-72224ab2.js";import{f as Q}from"./forwardRefs-0c9dccda.js";import{V as w}from"./VTextField-b50a7b3f.js";import{V as _}from"./VBtn-30fd0f1c.js";import"./tag-712c9b0e.js";const V="6eqs43hqtbgz9uo641wmnpsjb7sqihpgjntiiycy",Y="244",h=A.create({baseURL:"https://api.unisender.com/ru/api/"});function Z(){const s=d(null),m=d("");return{sendEmail:async(t,a)=>{await h.post("sendEmail",{api_key:V,email:t,message:a}).then(l=>{s.value=l.data}).catch(l=>{m.value=l})},subscribe:async t=>{await h.post("subscribe",{api_key:V,list_id:Y,fields:{EMAIL:t}}).then(a=>{s.value=a.data}).catch(a=>{m.value=a})},getList:async()=>{await h.get("getLists",{api_key:V}).then(t=>{s.value=t.data}).catch(t=>{m.value=t})}}}const ee=S({...I(),...J()},"VForm"),te=U()({name:"VForm",props:ee(),emits:{"update:modelValue":s=>!0,submit:s=>!0},setup(s,m){let{slots:o,emit:f}=m;const r=O(s),t=d();function a(i){i.preventDefault(),r.reset()}function l(i){const u=i,c=r.validate();u.then=c.then.bind(c),u.catch=c.catch.bind(c),u.finally=c.finally.bind(c),f("submit",u),u.defaultPrevented||c.then(b=>{var e;let{valid:g}=b;g&&((e=t.value)==null||e.submit())}),u.preventDefault()}return F(()=>{var i;return n("form",{ref:t,class:["v-form",s.class],style:s.style,novalidate:!0,onReset:a,onSubmit:l},[(i=o.default)==null?void 0:i.call(o,r)])}),Q(r,t)}}),L=s=>(P("data-v-03478fcc"),s=s(),T(),s),ae={class:"background pa-8 h-screen d-flex flex-column justify-center align-center"},se=L(()=>k("div",{class:"text-subtitle-1 text-medium-emphasis"}," Почта ",-1)),oe=L(()=>k("div",{class:"text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"}," Пароль ",-1)),ne={__name:"LoginView",setup(s){const m=R(),o=$(),{subscribe:f}=Z(),r=d(""),t=d(""),a=d("login"),l=d(!1),i=d(!1),u=d(!1),c=async(g,e)=>{a.value==="register"?await o.registerUser(g,e):a.value==="login"&&await o.loginUser(g,e),f(o.currentUser.value.email),o.isLoggedIn.value?m.back():i.value=!0},b=async()=>{await o.loginWithGoogle(),f(o.currentUser.value.email),o.isLoggedIn.value?m.back():i.value=!0};return q(()=>{o.logoutUser(),u.value=!0}),(g,e)=>(j(),z("div",ae,[n(N),n(K,null,{default:v(()=>[E(n(te,{onSubmit:e[5]||(e[5]=D(p=>c(r.value,t.value),["prevent"]))},{default:v(()=>[n(W,{class:"mx-auto pa-8 mt-8 w-100",elevation:"8","min-width":"323","max-width":"600",rounded:"lg"},{default:v(()=>[se,n(w,{modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=p=>r.value=p),density:"compact",placeholder:"Введите почту","prepend-inner-icon":"mdi-email-outline",variant:"outlined",required:""},null,8,["modelValue"]),oe,n(w,{modelValue:t.value,"onUpdate:modelValue":e[1]||(e[1]=p=>t.value=p),"append-inner-icon":l.value?"mdi-eye-off":"mdi-eye",type:l.value?"text":"password",density:"compact",placeholder:"Введите пароль","prepend-inner-icon":"mdi-lock-outline",variant:"outlined",required:"","onClick:appendInner":e[2]||(e[2]=p=>l.value=!l.value)},null,8,["modelValue","append-inner-icon","type"]),n(_,{block:"",type:"submit",class:"mb-2",size:"large",variant:"tonal"},{default:v(()=>[y(x(a.value==="register"?"Зарегистрироваться":"Войти"),1)]),_:1}),n(_,{class:"google-btn mb-2",onClick:b,size:"large",block:""},{default:v(()=>[y(" Войти через Google ")]),_:1}),n(X,{class:"text-center"},{default:v(()=>[n(_,{class:"text-decoration-none",variant:"text",size:"small",onClick:e[3]||(e[3]=p=>a.value==="login"?a.value="register":a.value="login")},{default:v(()=>[y(x(a.value!=="register"?"Зарегистрироваться":"Войти")+" ",1),n(H,{icon:"mdi-chevron-right"})]),_:1})]),_:1})]),_:1}),n(G,{color:"red",modelValue:i.value,"onUpdate:modelValue":e[4]||(e[4]=p=>i.value=p),message:M(o).errorMsg.value},null,8,["modelValue","message"])]),_:1},512),[[B,u.value]])]),_:1})]))}},be=C(ne,[["__scopeId","data-v-03478fcc"]]);export{be as default};
