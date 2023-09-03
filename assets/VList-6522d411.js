import{a3 as Un,am as xn,an as Vn,ao as Qi,ap as Zi,aq as Zt,ar as en,as as tn,at as er,au as De,av as ie,aw as At,ax as tr,ay as Fn,az as nr,aA as ir,aB as Wn,aC as B,aD as rr,aE as sr,aF as Rt,aG as Ue,aH as ar,aI as or,aJ as Ce,aK as Ae,aL as lr,r as A,a as Ot,p as H,I as me,N as Lt,n as W,ab as Q,aM as cr,j as I,q as ot,J as $,K as nn,P as Nt,aN as Bn,ae as Ee,aO as ur,aa as lt,m as K,ag as dr,G as J,U as hr,ai as Hn,ad as xe,aP as ge,aQ as fr,A as ke,B as Ve,i as ce,l as Xe,D as Fe,E as vr,C as F,s as pe,b as _,aR as mr,d as Mt,v as jn,a6 as $n,F as Et,T as gr,ah as pr,o as yr,c as _r,w as wr,g as Ir,t as Sr,L as qn,a2 as Er,aS as kr,a0 as we,a1 as rn,aT as Tr,H as br,aU as Pr,aV as be,a4 as Cr}from"./index-50ae25bd.js";import{B as vt,g as sn,n as Ar,a as Rr,s as Or,f as Lr}from"./forwardRefs-1da7e5d0.js";import{E as an,F as mt,G as gt,H as on,I as ln,v as Dt,l as Nr,u as Gn,w as Ut,k as Mr,M as Kn,J as Dr,K as Ur,N as xr,f as xt,O as Vt,P as Vr,Q as Fr,S as zn,i as Ft,T as Jn,d as Qe,j as Wr,m as Yn,x as Xn,e as Qn,U as Br,R as Hr,W as jr,g as Zn,z as ei,h as ti,y as cn,q as ni}from"./index-6b04602d.js";import{f as Ze,h as $r,m as qr,u as Gr,g as Kr,i as ii,b as un}from"./VCard-b4c3482d.js";import{u as zr}from"./ssrBoot-c3674593.js";import{m as ct}from"./tag-8bc6929d.js";const qe=new WeakMap;function Jr(t,e){Object.keys(e).forEach(n=>{if(Un(n)){const i=xn(n),r=qe.get(t);if(e[n]==null)r==null||r.forEach(s=>{const[a,o]=s;a===i&&(t.removeEventListener(i,o),r.delete(s))});else if(!r||![...r].some(s=>s[0]===i&&s[1]===e[n])){t.addEventListener(i,e[n]);const s=r||new Set;s.add([i,e[n]]),qe.has(t)||qe.set(t,s)}}else e[n]==null?t.removeAttribute(n):t.setAttribute(n,e[n])})}function Yr(t,e){Object.keys(e).forEach(n=>{if(Un(n)){const i=xn(n),r=qe.get(t);r==null||r.forEach(s=>{const[a,o]=s;a===i&&(t.removeEventListener(i,o),r.delete(s))})}else t.removeAttribute(n)})}function ri(t){if(typeof t.getRootNode!="function"){for(;t.parentNode;)t=t.parentNode;return t!==document?null:document}const e=t.getRootNode();return e!==document&&e.getRootNode({composed:!0})!==document?null:e}function Xr(t){for(;t;){if(window.getComputedStyle(t).position==="fixed")return!0;t=t.offsetParent}return!1}function Wt(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function dn(t){return t!==void 0&&t.enterprise!==void 0}class Qr{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function si(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Zr=si,ai=new At("auth","Firebase",si());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et=new sr("@firebase/auth");function es(t,...e){et.logLevel<=Wn.WARN&&et.warn(`Auth (${De}): ${t}`,...e)}function Ge(t,...e){et.logLevel<=Wn.ERROR&&et.error(`Auth (${De}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(t,...e){throw Bt(t,...e)}function Y(t,...e){return Bt(t,...e)}function oi(t,e,n){const i=Object.assign(Object.assign({},Zr()),{[e]:n});return new At("auth","Firebase",i).create(e,{appName:t.name})}function ts(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&q(t,"argument-error"),oi(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Bt(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return ai.create(t,...e)}function p(t,e,...n){if(!t)throw Bt(e,...n)}function ee(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ge(e),new Error(e)}function ne(t,e){t||ee(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ns(){return hn()==="http:"||hn()==="https:"}function hn(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function is(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ns()||er()||"connection"in navigator)?navigator.onLine:!0}function rs(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,n){this.shortDelay=e,this.longDelay=n,ne(n>e,"Short delay should be less than long delay!"),this.isMobile=Qi()||Zi()}get(){return is()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(t,e){ne(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ee("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ee("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ee("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as=new We(3e4,6e4);function ye(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function _e(t,e,n,i,r={}){return ci(t,r,async()=>{let s={},a={};i&&(e==="GET"?a=i:s={body:JSON.stringify(i)});const o=Ue(Object.assign({key:t.config.apiKey},a)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),li.fetch()(ui(t,t.config.apiHost,n,o),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function ci(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},ss),e);try{const r=new os(t),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw $e(t,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const o=s.ok?a.errorMessage:a.error.message,[l,u]=o.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw $e(t,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw $e(t,"email-already-in-use",a);if(l==="USER_DISABLED")throw $e(t,"user-disabled",a);const d=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw oi(t,d,u);q(t,d)}}catch(r){if(r instanceof Rt)throw r;q(t,"network-request-failed",{message:String(r)})}}async function Be(t,e,n,i,r={}){const s=await _e(t,e,n,i,r);return"mfaPendingCredential"in s&&q(t,"multi-factor-auth-required",{_serverResponse:s}),s}function ui(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?Ht(t.config,r):`${t.config.apiScheme}://${r}`}class os{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(Y(this.auth,"network-request-failed")),as.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function $e(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=Y(t,e,i);return r.customData._tokenResponse=n,r}async function ls(t,e){return _e(t,"GET","/v2/recaptchaConfig",ye(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cs(t,e){return _e(t,"POST","/v1/accounts:delete",e)}async function us(t,e){return _e(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ds(t,e=!1){const n=ie(t),i=await n.getIdToken(e),r=jt(i);p(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Re(pt(r.auth_time)),issuedAtTime:Re(pt(r.iat)),expirationTime:Re(pt(r.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function pt(t){return Number(t)*1e3}function jt(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Ge("JWT malformed, contained fewer than 3 sections"),null;try{const r=ar(n);return r?JSON.parse(r):(Ge("Failed to decode base64 JWT payload"),null)}catch(r){return Ge("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function hs(t){const e=jt(t);return p(e,"internal-error"),p(typeof e.exp<"u","internal-error"),p(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oe(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof Rt&&fs(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function fs({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Re(this.lastLoginAt),this.creationTime=Re(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tt(t){var e;const n=t.auth,i=await t.getIdToken(),r=await Oe(t,us(n,{idToken:i}));p(r==null?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?ps(s.providerUserInfo):[],o=gs(t.providerData,a),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),d=l?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new di(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,c)}async function ms(t){const e=ie(t);await tt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function gs(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function ps(t){return t.map(e=>{var{providerId:n}=e,i=Wt(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ys(t,e){const n=await ci(t,{},async()=>{const i=Ue({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,a=ui(t,r,"/v1/token",`key=${s}`),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",li.fetch()(a,{method:"POST",headers:o,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){p(e.idToken,"internal-error"),p(typeof e.idToken<"u","internal-error"),p(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):hs(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return p(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await ys(e,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,a=new Le;return i&&(p(typeof i=="string","internal-error",{appName:e}),a.refreshToken=i),r&&(p(typeof r=="string","internal-error",{appName:e}),a.accessToken=r),s&&(p(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Le,this.toJSON())}_performRefresh(){return ee("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(t,e){p(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class he{constructor(e){var{uid:n,auth:i,stsTokenManager:r}=e,s=Wt(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new vs(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new di(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Oe(this,this.stsTokenManager.getToken(this.auth,e));return p(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ds(this,e)}reload(){return ms(this)}_assign(e){this!==e&&(p(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new he(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){p(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await tt(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Oe(this,cs(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,r,s,a,o,l,u,d;const c=(i=n.displayName)!==null&&i!==void 0?i:void 0,h=(r=n.email)!==null&&r!==void 0?r:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,f=(a=n.photoURL)!==null&&a!==void 0?a:void 0,g=(o=n.tenantId)!==null&&o!==void 0?o:void 0,y=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,S=(u=n.createdAt)!==null&&u!==void 0?u:void 0,E=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:v,emailVerified:O,isAnonymous:M,providerData:D,stsTokenManager:x}=n;p(v&&x,e,"internal-error");const L=Le.fromJSON(this.name,x);p(typeof v=="string",e,"internal-error"),se(c,e.name),se(h,e.name),p(typeof O=="boolean",e,"internal-error"),p(typeof M=="boolean",e,"internal-error"),se(m,e.name),se(f,e.name),se(g,e.name),se(y,e.name),se(S,e.name),se(E,e.name);const P=new he({uid:v,auth:e,email:h,emailVerified:O,displayName:c,isAnonymous:M,photoURL:f,phoneNumber:m,tenantId:g,stsTokenManager:L,createdAt:S,lastLoginAt:E});return D&&Array.isArray(D)&&(P.providerData=D.map(N=>Object.assign({},N))),y&&(P._redirectEventId=y),P}static async _fromIdTokenResponse(e,n,i=!1){const r=new Le;r.updateFromServerResponse(n);const s=new he({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await tt(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn=new Map;function te(t){ne(t instanceof Function,"Expected a class definition");let e=fn.get(t);return e?(ne(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,fn.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}hi.type="NONE";const vn=hi;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(t,e,n){return`firebase:${t}:${e}:${n}`}class Ie{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=Ke(this.userKey,r.apiKey,s),this.fullPersistenceKey=Ke("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?he._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Ie(te(vn),e,i);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=r[0]||te(vn);const a=Ke(i,e.config.apiKey,e.name);let o=null;for(const u of n)try{const d=await u._get(a);if(d){const c=he._fromJSON(e,d);u!==s&&(o=c),s=u;break}}catch{}const l=r.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ie(s,e,i):(s=l[0],o&&await s._set(a,o.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(a)}catch{}})),new Ie(s,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(mi(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(fi(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(pi(e))return"Blackberry";if(yi(e))return"Webos";if($t(e))return"Safari";if((e.includes("chrome/")||vi(e))&&!e.includes("edge/"))return"Chrome";if(gi(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function fi(t=B()){return/firefox\//i.test(t)}function $t(t=B()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vi(t=B()){return/crios\//i.test(t)}function mi(t=B()){return/iemobile/i.test(t)}function gi(t=B()){return/android/i.test(t)}function pi(t=B()){return/blackberry/i.test(t)}function yi(t=B()){return/webos/i.test(t)}function ut(t=B()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function _s(t=B()){var e;return ut(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ws(){return or()&&document.documentMode===10}function _i(t=B()){return ut(t)||gi(t)||yi(t)||pi(t)||/windows phone/i.test(t)||mi(t)}function Is(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(t,e=[]){let n;switch(t){case"Browser":n=mn(B());break;case"Worker":n=`${mn(B())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${De}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=s=>new Promise((a,o)=>{try{const l=e(s);a(l)}catch(l){o(l)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Es(t,e={}){return _e(t,"GET","/v2/passwordPolicy",ye(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks=6;class Ts{constructor(e){var n,i,r,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:ks,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,i,r,s,a,o;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(i=l.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsLowercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(o=l.containsNonAlphanumericCharacter)!==null&&o!==void 0?o:!0),l}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let r=0;r<e.length;r++)i=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,r,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,n,i,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gn(this),this.idTokenSubscription=new gn(this),this.beforeStateQueue=new Ss(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ai,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=te(n)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await Ie.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,o=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===o)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return p(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await tt(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=rs()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ie(e):null;return n&&p(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&p(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(te(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Es(this),n=new Ts(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new At("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&te(e)||this._popupRedirectResolver;p(n,this,"argument-error"),this.redirectPersistenceManager=await Ie.create(this,[te(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let a=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(p(o,this,"internal-error"),o.then(()=>{a||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,i,r);return()=>{a=!0,l()}}else{const l=e.addObserver(n);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return p(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=wi(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&es(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ue(t){return ie(t)}class gn{constructor(e){this.auth=e,this.observer=null,this.addObserver=tr(n=>this.observer=n)}get next(){return p(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ps(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Ii(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const s=Y("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",Ps().appendChild(i)})}function Cs(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const As="https://www.google.com/recaptcha/enterprise.js?render=",Rs="recaptcha-enterprise",Os="NO_RECAPTCHA";class Ls{constructor(e){this.type=Rs,this.auth=ue(e)}async verify(e="verify",n=!1){async function i(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,o)=>{ls(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)o(new Error("recaptcha Enterprise site key undefined"));else{const u=new Qr(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,a(u.siteKey)}}).catch(l=>{o(l)})})}function r(s,a,o){const l=window.grecaptcha;dn(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{a(u)}).catch(()=>{a(Os)})}):o(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,a)=>{i(this.auth).then(o=>{if(!n&&dn(window.grecaptcha))r(o,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}Ii(As+o).then(()=>{r(o,s,a)}).catch(l=>{a(l)})}}).catch(o=>{a(o)})})}}async function nt(t,e,n,i=!1){const r=new Ls(t);let s;try{s=await r.verify(n)}catch{s=await r.verify(n,!0)}const a=Object.assign({},e);return i?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(t,e){const n=Fn(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),s=n.getOptions();if(rr(s,e??{}))return r;q(r,"already-initialized")}return n.initialize({options:e})}function Ms(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(te);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Ds(t,e,n){const i=ue(t);p(i._canInitEmulator,i,"emulator-config-failed"),p(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),s=Si(e),{host:a,port:o}=Us(e),l=o===null?"":`:${o}`;i.config.emulator={url:`${s}//${a}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:a,port:o,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||xs()}function Si(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Us(t){const e=Si(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:pn(i.substr(s.length+1))}}else{const[s,a]=i.split(":");return{host:s,port:pn(a)}}}function pn(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function xs(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ee("not implemented")}_getIdTokenResponse(e){return ee("not implemented")}_linkToIdToken(e,n){return ee("not implemented")}_getReauthenticationResolver(e){return ee("not implemented")}}async function Vs(t,e){return _e(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yt(t,e){return Be(t,"POST","/v1/accounts:signInWithPassword",ye(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fs(t,e){return Be(t,"POST","/v1/accounts:signInWithEmailLink",ye(t,e))}async function Ws(t,e){return Be(t,"POST","/v1/accounts:signInWithEmailLink",ye(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne extends qt{constructor(e,n,i,r=null){super("password",i),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Ne(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new Ne(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const r=await nt(e,i,"signInWithPassword");return yt(e,r)}else return yt(e,i).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await nt(e,i,"signInWithPassword");return yt(e,s)}else return Promise.reject(r)});case"emailLink":return Fs(e,{email:this._email,oobCode:this._password});default:q(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Vs(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ws(e,{idToken:n,email:this._email,oobCode:this._password});default:q(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Se(t,e){return Be(t,"POST","/v1/accounts:signInWithIdp",ye(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs="http://localhost";class fe extends qt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new fe(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):q("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=n,s=Wt(n,["providerId","signInMethod"]);if(!i||!r)return null;const a=new fe(i,r);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return Se(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,Se(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Se(e,n)}buildRequest(){const e={requestUri:Bs,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ue(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function js(t){const e=Ce(Ae(t)).link,n=e?Ce(Ae(e)).deep_link_id:null,i=Ce(Ae(t)).deep_link_id;return(i?Ce(Ae(i)).link:null)||i||n||e||t}class Gt{constructor(e){var n,i,r,s,a,o;const l=Ce(Ae(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(i=l.oobCode)!==null&&i!==void 0?i:null,c=Hs((r=l.mode)!==null&&r!==void 0?r:null);p(u&&d&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=d,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=l.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(o=l.tenantId)!==null&&o!==void 0?o:null}static parseLink(e){const n=js(e);try{return new Gt(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(){this.providerId=Te.PROVIDER_ID}static credential(e,n){return Ne._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=Gt.parseLink(n);return p(i,"argument-error"),Ne._fromEmailAndCode(e,i.code,i.tenantId)}}Te.PROVIDER_ID="password";Te.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Te.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He extends Kt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae extends He{constructor(){super("facebook.com")}static credential(e){return fe._fromParams({providerId:ae.PROVIDER_ID,signInMethod:ae.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ae.credentialFromTaggedObject(e)}static credentialFromError(e){return ae.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ae.credential(e.oauthAccessToken)}catch{return null}}}ae.FACEBOOK_SIGN_IN_METHOD="facebook.com";ae.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z extends He{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return fe._fromParams({providerId:Z.PROVIDER_ID,signInMethod:Z.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Z.credentialFromTaggedObject(e)}static credentialFromError(e){return Z.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Z.credential(n,i)}catch{return null}}}Z.GOOGLE_SIGN_IN_METHOD="google.com";Z.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe extends He{constructor(){super("github.com")}static credential(e){return fe._fromParams({providerId:oe.PROVIDER_ID,signInMethod:oe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return oe.credentialFromTaggedObject(e)}static credentialFromError(e){return oe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return oe.credential(e.oauthAccessToken)}catch{return null}}}oe.GITHUB_SIGN_IN_METHOD="github.com";oe.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le extends He{constructor(){super("twitter.com")}static credential(e,n){return fe._fromParams({providerId:le.PROVIDER_ID,signInMethod:le.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return le.credentialFromTaggedObject(e)}static credentialFromError(e){return le.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return le.credential(n,i)}catch{return null}}}le.TWITTER_SIGN_IN_METHOD="twitter.com";le.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _t(t,e){return Be(t,"POST","/v1/accounts:signUp",ye(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const s=await he._fromIdTokenResponse(e,i,r),a=yn(i);return new ve({user:s,providerId:a,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=yn(i);return new ve({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function yn(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it extends Rt{constructor(e,n,i,r){var s;super(n.code,n.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,it.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,r){return new it(e,n,i,r)}}function Ei(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?it._fromErrorAndOperation(t,s,e,i):s})}async function $s(t,e,n=!1){const i=await Oe(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ve._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qs(t,e,n=!1){const{auth:i}=t,r="reauthenticate";try{const s=await Oe(t,Ei(i,r,e,t),n);p(s.idToken,i,"internal-error");const a=jt(s.idToken);p(a,i,"internal-error");const{sub:o}=a;return p(t.uid===o,i,"user-mismatch"),ve._forOperation(t,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&q(i,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ki(t,e,n=!1){const i="signIn",r=await Ei(t,i,e),s=await ve._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}async function Gs(t,e){return ki(ue(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ti(t){const e=ue(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Ks(t,e,n){var i;const r=ue(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let a;if(!((i=r._getRecaptchaConfig())===null||i===void 0)&&i.emailPasswordEnabled){const u=await nt(r,s,"signUpPassword");a=_t(r,u)}else a=_t(r,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const d=await nt(r,s,"signUpPassword");return _t(r,d)}throw u});const o=await a.catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Ti(t),u}),l=await ve._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function zs(t,e,n){return Gs(ie(t),Te.credential(e,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Ti(t),i})}function Js(t,e,n,i){return ie(t).onIdTokenChanged(e,n,i)}function Ys(t,e,n){return ie(t).beforeAuthStateChanged(e,n)}function Xs(t,e,n,i){return ie(t).onAuthStateChanged(e,n,i)}function Qs(t){return ie(t).signOut()}const rt="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(rt,"1"),this.storage.removeItem(rt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zs(){const t=B();return $t(t)||ut(t)}const ea=1e3,ta=10;class Pi extends bi{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Zs()&&Is(),this.fallbackToPolling=_i(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,o,l)=>{this.notifyListeners(a,l)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(i);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const r=()=>{const a=this.storage.getItem(i);!n&&this.localCache[i]===a||this.notifyListeners(i,a)},s=this.storage.getItem(i);ws()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,ta):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},ea)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Pi.type="LOCAL";const na=Pi;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci extends bi{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ci.type="SESSION";const Ai=Ci;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ia(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new dt(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:s}=n.data,a=this.handlersMap[r];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const o=Array.from(a).map(async u=>u(n.origin,s)),l=await ia(o);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}dt.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,a;return new Promise((o,l)=>{const u=zt("",20);r.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},i);a={messageChannel:r,onMessage(c){const h=c;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),o(h.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(){return window}function sa(t){X().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(){return typeof X().WorkerGlobalScope<"u"&&typeof X().importScripts=="function"}async function aa(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function oa(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function la(){return Ri()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi="firebaseLocalStorageDb",ca=1,st="firebaseLocalStorage",Li="fbase_key";class je{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ht(t,e){return t.transaction([st],e?"readwrite":"readonly").objectStore(st)}function ua(){const t=indexedDB.deleteDatabase(Oi);return new je(t).toPromise()}function Tt(){const t=indexedDB.open(Oi,ca);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(st,{keyPath:Li})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(st)?e(i):(i.close(),await ua(),e(await Tt()))})})}async function _n(t,e,n){const i=ht(t,!0).put({[Li]:e,value:n});return new je(i).toPromise()}async function da(t,e){const n=ht(t,!1).get(e),i=await new je(n).toPromise();return i===void 0?null:i.value}function wn(t,e){const n=ht(t,!0).delete(e);return new je(n).toPromise()}const ha=800,fa=3;class Ni{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Tt(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>fa)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ri()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=dt._getInstance(la()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await aa(),!this.activeServiceWorker)return;this.sender=new ra(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||oa()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Tt();return await _n(e,rt,"1"),await wn(e,rt),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>_n(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>da(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>wn(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=ht(r,!1).getAll();return new je(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ha)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ni.type="LOCAL";const va=Ni;new We(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(t,e){return e?te(e):(p(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends qt{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Se(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Se(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Se(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ma(t){return ki(t.auth,new Jt(t),t.bypassAuthState)}function ga(t){const{auth:e,user:n}=t;return p(n,e,"internal-error"),qs(n,new Jt(t),t.bypassAuthState)}async function pa(t){const{auth:e,user:n}=t;return p(n,e,"internal-error"),$s(n,new Jt(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,n,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:a,type:o}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ma;case"linkViaPopup":case"linkViaRedirect":return pa;case"reauthViaPopup":case"reauthViaRedirect":return ga;default:q(this.auth,"internal-error")}}resolve(e){ne(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ne(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya=new We(2e3,1e4);async function _a(t,e,n){const i=ue(t);ts(t,e,Kt);const r=Mi(i,n);return new de(i,"signInViaPopup",e,r).executeNotNull()}class de extends Di{constructor(e,n,i,r,s){super(e,n,r,s),this.provider=i,this.authWindow=null,this.pollId=null,de.currentPopupAction&&de.currentPopupAction.cancel(),de.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return p(e,this.auth,"internal-error"),e}async onExecution(){ne(this.filter.length===1,"Popup operations only handle one event");const e=zt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Y(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Y(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,de.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Y(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ya.get())};e()}}de.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wa="pendingRedirect",ze=new Map;class Ia extends Di{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=ze.get(this.auth._key());if(!e){try{const i=await Sa(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}ze.set(this.auth._key(),e)}return this.bypassAuthState||ze.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Sa(t,e){const n=Ta(e),i=ka(t);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}function Ea(t,e){ze.set(t._key(),e)}function ka(t){return te(t._redirectPersistence)}function Ta(t){return Ke(wa,t.config.apiKey,t.name)}async function ba(t,e,n=!1){const i=ue(t),r=Mi(i,e),a=await new Ia(i,r,n).execute();return a&&!n&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa=10*60*1e3;class Ca{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Aa(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!Ui(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(Y(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Pa&&this.cachedEventUids.clear(),this.cachedEventUids.has(In(e))}saveEventToCache(e){this.cachedEventUids.add(In(e)),this.lastProcessedEventTime=Date.now()}}function In(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ui({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Aa(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ui(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ra(t,e={}){return _e(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,La=/^https?/;async function Na(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Ra(t);for(const n of e)try{if(Ma(n))return}catch{}q(t,"unauthorized-domain")}function Ma(t){const e=kt(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===i}if(!La.test(n))return!1;if(Oa.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Da=new We(3e4,6e4);function Sn(){const t=X().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Ua(t){return new Promise((e,n)=>{var i,r,s;function a(){Sn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Sn(),n(Y(t,"network-request-failed"))},timeout:Da.get()})}if(!((r=(i=X().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=X().gapi)===null||s===void 0)&&s.load)a();else{const o=Cs("iframefcb");return X()[o]=()=>{gapi.load?a():n(Y(t,"network-request-failed"))},Ii(`https://apis.google.com/js/api.js?onload=${o}`).catch(l=>n(l))}}).catch(e=>{throw Je=null,e})}let Je=null;function xa(t){return Je=Je||Ua(t),Je}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Va=new We(5e3,15e3),Fa="__/auth/iframe",Wa="emulator/auth/iframe",Ba={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ha=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ja(t){const e=t.config;p(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ht(e,Wa):`https://${t.config.authDomain}/${Fa}`,i={apiKey:e.apiKey,appName:t.name,v:De},r=Ha.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${Ue(i).slice(1)}`}async function $a(t){const e=await xa(t),n=X().gapi;return p(n,t,"internal-error"),e.open({where:document.body,url:ja(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ba,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const a=Y(t,"network-request-failed"),o=X().setTimeout(()=>{s(a)},Va.get());function l(){X().clearTimeout(o),r(i)}i.ping(l).then(l,()=>{s(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ga=500,Ka=600,za="_blank",Ja="http://localhost";class En{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ya(t,e,n,i=Ga,r=Ka){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let o="";const l=Object.assign(Object.assign({},qa),{width:i.toString(),height:r.toString(),top:s,left:a}),u=B().toLowerCase();n&&(o=vi(u)?za:n),fi(u)&&(e=e||Ja,l.scrollbars="yes");const d=Object.entries(l).reduce((h,[m,f])=>`${h}${m}=${f},`,"");if(_s(u)&&o!=="_self")return Xa(e||"",o),new En(null);const c=window.open(e||"",o,d);p(c,t,"popup-blocked");try{c.focus()}catch{}return new En(c)}function Xa(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa="__/auth/handler",Za="emulator/auth/handler",eo=encodeURIComponent("fac");async function kn(t,e,n,i,r,s){p(t.config.authDomain,t,"auth-domain-config-required"),p(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:De,eventId:r};if(e instanceof Kt){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",lr(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,c]of Object.entries(s||{}))a[d]=c}if(e instanceof He){const d=e.getScopes().filter(c=>c!=="");d.length>0&&(a.scopes=d.join(","))}t.tenantId&&(a.tid=t.tenantId);const o=a;for(const d of Object.keys(o))o[d]===void 0&&delete o[d];const l=await t._getAppCheckToken(),u=l?`#${eo}=${encodeURIComponent(l)}`:"";return`${to(t)}?${Ue(o).slice(1)}${u}`}function to({config:t}){return t.emulator?Ht(t,Za):`https://${t.authDomain}/${Qa}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt="webStorageSupport";class no{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ai,this._completeRedirectFn=ba,this._overrideRedirectResult=Ea}async _openPopup(e,n,i,r){var s;ne((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await kn(e,n,i,kt(),r);return Ya(e,a,zt())}async _openRedirect(e,n,i,r){await this._originValidation(e);const s=await kn(e,n,i,kt(),r);return sa(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(ne(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await $a(e),i=new Ca(e);return n.register("authEvent",r=>(p(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(wt,{type:wt},r=>{var s;const a=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[wt];a!==void 0&&n(!!a),q(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Na(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return _i()||$t()||ut()}}const io=no;var Tn="@firebase/auth",bn="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){p(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ao(t){Zt(new en("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:o}=i.options;p(a&&!a.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:a,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wi(t)},u=new bs(i,r,s,l);return Ms(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Zt(new en("auth-internal",e=>{const n=ue(e.getProvider("auth").getImmediate());return(i=>new ro(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tn(Tn,bn,so(t)),tn(Tn,bn,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oo=5*60,lo=Vn("authIdTokenMaxAge")||oo;let Pn=null;const co=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>lo)return;const r=n==null?void 0:n.token;Pn!==r&&(Pn=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function uo(t=ir()){const e=Fn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ns(t,{popupRedirectResolver:io,persistence:[va,na,Ai]}),i=Vn("authTokenSyncURL");if(i){const s=co(i);Ys(n,s,()=>s(n.currentUser)),Js(n,a=>s(a))}const r=nr("auth");return r&&Ds(n,`http://${r}`),n}ao("Browser");function vl(){const t=uo(),e=A({}),n=A(!1),i=A(!1),r=A(""),s=c=>{switch(c.code){case"auth/invalid-email":return"Некорректный email";case"auth/user-not-found":return"Пользователь не найден";case"auth/wrong-password":return"Неверный пароль";default:return"Неверный email или пароль"}},a=()=>{Xs(t,c=>{c?(n.value=!0,e.value=c):(n.value=!1,e.value={})})},o=async(c,h)=>{i.value=!0;try{const m=await Ks(t,c,h);e.value=m.user,n.value=!0}catch(m){r.value=s(m),console.log(r.value)}finally{i.value=!1}},l=async(c,h)=>{i.value=!0;try{const m=await zs(t,c,h);e.value=m.user,n.value=!0}catch(m){r.value=s(m),console.log(r.value)}finally{i.value=!1}},u=async()=>{i.value=!0;try{const c=await _a(t,new Z);e.value=c.user,n.value=!0}catch(c){console.log(c)}finally{i.value=!1}},d=async()=>{try{await Qs(t),n.value=!1,e.value={}}catch(c){console.log(c)}};return Ot(()=>{a()}),{currentUser:e,isLoggedIn:n,isLoading:i,errorMsg:r,registerUser:o,loginUser:l,loginWithGoogle:u,logoutUser:d}}function It(t,e){return{x:t.x+e.x,y:t.y+e.y}}function ho(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Cn(t,e){if(t.side==="top"||t.side==="bottom"){const{side:n,align:i}=t,r=i==="left"?0:i==="center"?e.width/2:i==="right"?e.width:i,s=n==="top"?0:n==="bottom"?e.height:n;return It({x:r,y:s},e)}else if(t.side==="left"||t.side==="right"){const{side:n,align:i}=t,r=n==="left"?0:n==="right"?e.width:n,s=i==="top"?0:i==="center"?e.height/2:i==="bottom"?e.height:i;return It({x:r,y:s},e)}return It({x:e.width/2,y:e.height/2},e)}const xi={static:mo,connected:po},fo=H({locationStrategy:{type:[String,Function],default:"static",validator:t=>typeof t=="function"||t in xi},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function vo(t,e){const n=A({}),i=A();me&&(Lt(()=>!!(e.isActive.value&&t.locationStrategy),s=>{var a,o;W(()=>t.locationStrategy,s),Q(()=>{i.value=void 0}),typeof t.locationStrategy=="function"?i.value=(a=t.locationStrategy(e,t,n))==null?void 0:a.updateLocation:i.value=(o=xi[t.locationStrategy](e,t,n))==null?void 0:o.updateLocation}),window.addEventListener("resize",r,{passive:!0}),Q(()=>{window.removeEventListener("resize",r),i.value=void 0}));function r(s){var a;(a=i.value)==null||a.call(i,s)}return{contentStyles:n,updateLocation:i}}function mo(){}function go(t,e){e?t.style.removeProperty("left"):t.style.removeProperty("right");const n=Ar(t);return e?n.x+=parseFloat(t.style.right||0):n.x-=parseFloat(t.style.left||0),n.y-=parseFloat(t.style.top||0),n}function po(t,e,n){Xr(t.activatorEl.value)&&Object.assign(n.value,{position:"fixed",top:0,[t.isRtl.value?"right":"left"]:0});const{preferredAnchor:r,preferredOrigin:s}=cr(()=>{const f=an(e.location,t.isRtl.value),g=e.origin==="overlap"?f:e.origin==="auto"?mt(f):an(e.origin,t.isRtl.value);return f.side===g.side&&f.align===gt(g).align?{preferredAnchor:on(f),preferredOrigin:on(g)}:{preferredAnchor:f,preferredOrigin:g}}),[a,o,l,u]=["minWidth","minHeight","maxWidth","maxHeight"].map(f=>I(()=>{const g=parseFloat(e[f]);return isNaN(g)?1/0:g})),d=I(()=>{if(Array.isArray(e.offset))return e.offset;if(typeof e.offset=="string"){const f=e.offset.split(" ").map(parseFloat);return f.length<2&&f.push(0),f}return typeof e.offset=="number"?[e.offset,0]:[0,0]});let c=!1;const h=new ResizeObserver(()=>{c&&m()});W([t.activatorEl,t.contentEl],(f,g)=>{let[y,S]=f,[E,v]=g;E&&h.unobserve(E),y&&h.observe(y),v&&h.unobserve(v),S&&h.observe(S)},{immediate:!0}),Q(()=>{h.disconnect()});function m(){if(c=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>c=!0)}),!t.activatorEl.value||!t.contentEl.value)return;const f=t.activatorEl.value.getBoundingClientRect(),g=go(t.contentEl.value,t.isRtl.value),y=Ze(t.contentEl.value),S=12;y.length||(y.push(document.documentElement),t.contentEl.value.style.top&&t.contentEl.value.style.left||(g.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),g.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const E=y.reduce((R,C)=>{const T=C.getBoundingClientRect(),b=new vt({x:C===document.documentElement?0:T.x,y:C===document.documentElement?0:T.y,width:C.clientWidth,height:C.clientHeight});return R?new vt({x:Math.max(R.left,b.left),y:Math.max(R.top,b.top),width:Math.min(R.right,b.right)-Math.max(R.left,b.left),height:Math.min(R.bottom,b.bottom)-Math.max(R.top,b.top)}):b},void 0);E.x+=S,E.y+=S,E.width-=S*2,E.height-=S*2;let v={anchor:r.value,origin:s.value};function O(R){const C=new vt(g),T=Cn(R.anchor,f),b=Cn(R.origin,C);let{x:U,y:j}=ho(T,b);switch(R.anchor.side){case"top":j-=d.value[0];break;case"bottom":j+=d.value[0];break;case"left":U-=d.value[0];break;case"right":U+=d.value[0];break}switch(R.anchor.align){case"top":j-=d.value[1];break;case"bottom":j+=d.value[1];break;case"left":U-=d.value[1];break;case"right":U+=d.value[1];break}return C.x+=U,C.y+=j,C.width=Math.min(C.width,l.value),C.height=Math.min(C.height,u.value),{overflows:sn(C,E),x:U,y:j}}let M=0,D=0;const x={x:0,y:0},L={x:!1,y:!1};let P=-1;for(;!(P++>10);){const{x:R,y:C,overflows:T}=O(v);M+=R,D+=C,g.x+=R,g.y+=C;{const b=ln(v.anchor),U=T.x.before||T.x.after,j=T.y.before||T.y.after;let re=!1;if(["x","y"].forEach(w=>{if(w==="x"&&U&&!L.x||w==="y"&&j&&!L.y){const k={anchor:{...v.anchor},origin:{...v.origin}},V=w==="x"?b==="y"?gt:mt:b==="y"?mt:gt;k.anchor=V(k.anchor),k.origin=V(k.origin);const{overflows:z}=O(k);(z[w].before<=T[w].before&&z[w].after<=T[w].after||z[w].before+z[w].after<(T[w].before+T[w].after)/2)&&(v=k,re=L[w]=!0)}}),re)continue}T.x.before&&(M+=T.x.before,g.x+=T.x.before),T.x.after&&(M-=T.x.after,g.x-=T.x.after),T.y.before&&(D+=T.y.before,g.y+=T.y.before),T.y.after&&(D-=T.y.after,g.y-=T.y.after);{const b=sn(g,E);x.x=E.width-b.x.before-b.x.after,x.y=E.height-b.y.before-b.y.after,M+=b.x.before,g.x+=b.x.before,D+=b.y.before,g.y+=b.y.before}break}const N=ln(v.anchor);return Object.assign(n.value,{"--v-overlay-anchor-origin":`${v.anchor.side} ${v.anchor.align}`,transformOrigin:`${v.origin.side} ${v.origin.align}`,top:$(St(D)),left:t.isRtl.value?void 0:$(St(M)),right:t.isRtl.value?$(St(-M)):void 0,minWidth:$(N==="y"?Math.min(a.value,f.width):a.value),maxWidth:$(An(nn(x.x,a.value===1/0?0:a.value,l.value))),maxHeight:$(An(nn(x.y,o.value===1/0?0:o.value,u.value)))}),{available:x,contentBox:g}}return W(()=>[r.value,s.value,e.offset,e.minWidth,e.minHeight,e.maxWidth,e.maxHeight],()=>m()),ot(()=>{const f=m();if(!f)return;const{available:g,contentBox:y}=f;y.height>g.y&&requestAnimationFrame(()=>{m(),requestAnimationFrame(()=>{m()})})}),{updateLocation:m}}function St(t){return Math.round(t*devicePixelRatio)/devicePixelRatio}function An(t){return Math.ceil(t*devicePixelRatio)/devicePixelRatio}let bt=!0;const at=[];function yo(t){!bt||at.length?(at.push(t),Pt()):(bt=!1,t(),Pt())}let Rn=-1;function Pt(){cancelAnimationFrame(Rn),Rn=requestAnimationFrame(()=>{const t=at.shift();t&&t(),at.length?Pt():bt=!0})}const Ye={none:null,close:Io,block:So,reposition:Eo},_o=H({scrollStrategy:{type:[String,Function],default:"block",validator:t=>typeof t=="function"||t in Ye}},"VOverlay-scroll-strategies");function wo(t,e){if(!me)return;let n;Nt(async()=>{n==null||n.stop(),e.isActive.value&&t.scrollStrategy&&(n=Bn(),await ot(),n.active&&n.run(()=>{var i;typeof t.scrollStrategy=="function"?t.scrollStrategy(e,t,n):(i=Ye[t.scrollStrategy])==null||i.call(Ye,e,t,n)}))}),Q(()=>{n==null||n.stop()})}function Io(t){function e(n){t.isActive.value=!1}Vi(t.activatorEl.value??t.contentEl.value,e)}function So(t,e){var a;const n=(a=t.root.value)==null?void 0:a.offsetParent,i=[...new Set([...Ze(t.activatorEl.value,e.contained?n:void 0),...Ze(t.contentEl.value,e.contained?n:void 0)])].filter(o=>!o.classList.contains("v-overlay-scroll-blocked")),r=window.innerWidth-document.documentElement.offsetWidth,s=(o=>$r(o)&&o)(n||document.documentElement);s&&t.root.value.classList.add("v-overlay--scroll-blocked"),i.forEach((o,l)=>{o.style.setProperty("--v-body-scroll-x",$(-o.scrollLeft)),o.style.setProperty("--v-body-scroll-y",$(-o.scrollTop)),o!==document.documentElement&&o.style.setProperty("--v-scrollbar-offset",$(r)),o.classList.add("v-overlay-scroll-blocked")}),Q(()=>{i.forEach((o,l)=>{const u=parseFloat(o.style.getPropertyValue("--v-body-scroll-x")),d=parseFloat(o.style.getPropertyValue("--v-body-scroll-y"));o.style.removeProperty("--v-body-scroll-x"),o.style.removeProperty("--v-body-scroll-y"),o.style.removeProperty("--v-scrollbar-offset"),o.classList.remove("v-overlay-scroll-blocked"),o.scrollLeft=-u,o.scrollTop=-d}),s&&t.root.value.classList.remove("v-overlay--scroll-blocked")})}function Eo(t,e,n){let i=!1,r=-1,s=-1;function a(o){yo(()=>{var d,c;const l=performance.now();(c=(d=t.updateLocation).value)==null||c.call(d,o),i=(performance.now()-l)/(1e3/60)>2})}s=(typeof requestIdleCallback>"u"?o=>o():requestIdleCallback)(()=>{n.run(()=>{Vi(t.activatorEl.value??t.contentEl.value,o=>{i?(cancelAnimationFrame(r),r=requestAnimationFrame(()=>{r=requestAnimationFrame(()=>{a(o)})})):a(o)})})}),Q(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(s),cancelAnimationFrame(r)})}function Vi(t,e){const n=[document,...Ze(t)];n.forEach(i=>{i.addEventListener("scroll",e,{passive:!0})}),Q(()=>{n.forEach(i=>{i.removeEventListener("scroll",e)})})}const ko=Symbol.for("vuetify:v-menu"),To=H({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function bo(t,e){const n={},i=r=>()=>{if(!me)return Promise.resolve(!0);const s=r==="openDelay";return n.closeDelay&&window.clearTimeout(n.closeDelay),delete n.closeDelay,n.openDelay&&window.clearTimeout(n.openDelay),delete n.openDelay,new Promise(a=>{const o=parseInt(t[r]??0,10);n[r]=window.setTimeout(()=>{e==null||e(s),a(s)},o)})};return{runCloseDelay:i("closeDelay"),runOpenDelay:i("openDelay")}}const Po=H({activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...To()},"VOverlay-activator");function Co(t,e){let{isActive:n,isTop:i}=e;const r=A();let s=!1,a=!1,o=!0;const l=I(()=>t.openOnFocus||t.openOnFocus==null&&t.openOnHover),u=I(()=>t.openOnClick||t.openOnClick==null&&!t.openOnHover&&!l.value),{runOpenDelay:d,runCloseDelay:c}=bo(t,v=>{v===(t.openOnHover&&s||l.value&&a)&&!(t.openOnHover&&n.value&&!i.value)&&(n.value!==v&&(o=!0),n.value=v)}),h={onClick:v=>{v.stopPropagation(),r.value=v.currentTarget||v.target,n.value=!n.value},onMouseenter:v=>{var O;(O=v.sourceCapabilities)!=null&&O.firesTouchEvents||(s=!0,r.value=v.currentTarget||v.target,d())},onMouseleave:v=>{s=!1,c()},onFocus:v=>{dr(v.target,":focus-visible")!==!1&&(a=!0,v.stopPropagation(),r.value=v.currentTarget||v.target,d())},onBlur:v=>{a=!1,v.stopPropagation(),c()}},m=I(()=>{const v={};return u.value&&(v.onClick=h.onClick),t.openOnHover&&(v.onMouseenter=h.onMouseenter,v.onMouseleave=h.onMouseleave),l.value&&(v.onFocus=h.onFocus,v.onBlur=h.onBlur),v}),f=I(()=>{const v={};if(t.openOnHover&&(v.onMouseenter=()=>{s=!0,d()},v.onMouseleave=()=>{s=!1,c()}),l.value&&(v.onFocusin=()=>{a=!0,d()},v.onFocusout=()=>{a=!1,c()}),t.closeOnContentClick){const O=Ee(ko,null);v.onClick=()=>{n.value=!1,O==null||O.closeParents()}}return v}),g=I(()=>{const v={};return t.openOnHover&&(v.onMouseenter=()=>{o&&(s=!0,o=!1,d())},v.onMouseleave=()=>{s=!1,c()}),v});W(i,v=>{v&&(t.openOnHover&&!s&&(!l.value||!a)||l.value&&!a&&(!t.openOnHover||!s))&&(n.value=!1)});const y=A();Nt(()=>{y.value&&ot(()=>{r.value=ur(y.value)})});const S=lt("useActivator");let E;return W(()=>!!t.activator,v=>{v&&me?(E=Bn(),E.run(()=>{Ao(t,S,{activatorEl:r,activatorEvents:m})})):E&&E.stop()},{flush:"post",immediate:!0}),Q(()=>{E==null||E.stop()}),{activatorEl:r,activatorRef:y,activatorEvents:m,contentEvents:f,scrimEvents:g}}function Ao(t,e,n){let{activatorEl:i,activatorEvents:r}=n;W(()=>t.activator,(l,u)=>{if(u&&l!==u){const d=o(u);d&&a(d)}l&&ot(()=>s())},{immediate:!0}),W(()=>t.activatorProps,()=>{s()}),Q(()=>{a()});function s(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:o(),u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t.activatorProps;l&&Jr(l,K(r.value,u))}function a(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:o(),u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t.activatorProps;l&&Yr(l,K(r.value,u))}function o(){var d,c;let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:t.activator,u;if(l)if(l==="parent"){let h=(c=(d=e==null?void 0:e.proxy)==null?void 0:d.$el)==null?void 0:c.parentNode;for(;h.hasAttribute("data-no-activator");)h=h.parentNode;u=h}else typeof l=="string"?u=document.querySelector(l):"$el"in l?u=l.$el:u=l;return i.value=(u==null?void 0:u.nodeType)===Node.ELEMENT_NODE?u:null,i.value}}function Ro(){if(!me)return J(!1);const{ssr:t}=hr();if(t){const e=J(!1);return Ot(()=>{e.value=!0}),e}else return J(!0)}function Fi(){const e=lt("useScopeId").vnode.scopeId;return{scopeId:e?{[e]:""}:void 0}}const On=Symbol.for("vuetify:stack"),Pe=Hn([]);function Oo(t,e,n){const i=lt("useStack"),r=!n,s=Ee(On,void 0),a=Hn({activeChildren:new Set});xe(On,a);const o=J(+e.value);Lt(t,()=>{var c;const d=(c=Pe.at(-1))==null?void 0:c[1];o.value=d?d+10:+e.value,r&&Pe.push([i.uid,o.value]),s==null||s.activeChildren.add(i.uid),Q(()=>{if(r){const h=ge(Pe).findIndex(m=>m[0]===i.uid);Pe.splice(h,1)}s==null||s.activeChildren.delete(i.uid)})});const l=J(!0);r&&Nt(()=>{var c;const d=((c=Pe.at(-1))==null?void 0:c[0])===i.uid;setTimeout(()=>l.value=d)});const u=I(()=>!a.activeChildren.size);return{globalTop:fr(l),localTop:u,stackStyles:I(()=>({zIndex:o.value}))}}function Lo(t){return{teleportTarget:I(()=>{const n=t.value;if(n===!0||!me)return;const i=n===!1?document.body:typeof n=="string"?document.querySelector(n):n;if(i==null)return;let r=i.querySelector(":scope > .v-overlay-container");return r||(r=document.createElement("div"),r.className="v-overlay-container",i.appendChild(r)),r})}}function No(){return!0}function Wi(t,e,n){if(!t||Bi(t,n)===!1)return!1;const i=ri(e);if(typeof ShadowRoot<"u"&&i instanceof ShadowRoot&&i.host===t.target)return!1;const r=(typeof n.value=="object"&&n.value.include||(()=>[]))();return r.push(e),!r.some(s=>s==null?void 0:s.contains(t.target))}function Bi(t,e){return(typeof e.value=="object"&&e.value.closeConditional||No)(t)}function Mo(t,e,n){const i=typeof n.value=="function"?n.value:n.value.handler;e._clickOutside.lastMousedownWasOutside&&Wi(t,e,n)&&setTimeout(()=>{Bi(t,n)&&i&&i(t)},0)}function Ln(t,e){const n=ri(t);e(document),typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&e(n)}const Do={mounted(t,e){const n=r=>Mo(r,t,e),i=r=>{t._clickOutside.lastMousedownWasOutside=Wi(r,t,e)};Ln(t,r=>{r.addEventListener("click",n,!0),r.addEventListener("mousedown",i,!0)}),t._clickOutside||(t._clickOutside={lastMousedownWasOutside:!1}),t._clickOutside[e.instance.$.uid]={onClick:n,onMousedown:i}},unmounted(t,e){t._clickOutside&&(Ln(t,n=>{var s;if(!n||!((s=t._clickOutside)!=null&&s[e.instance.$.uid]))return;const{onClick:i,onMousedown:r}=t._clickOutside[e.instance.$.uid];n.removeEventListener("click",i,!0),n.removeEventListener("mousedown",r,!0)}),delete t._clickOutside[e.instance.$.uid])}};function Uo(t){const{modelValue:e,color:n,...i}=t;return _(gr,{name:"fade-transition",appear:!0},{default:()=>[t.modelValue&&_("div",K({class:["v-overlay__scrim",t.color.backgroundColorClasses.value],style:t.color.backgroundColorStyles.value},i),null)]})}const Hi=H({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...Po(),...ke(),...Dt(),...qr(),...fo(),..._o(),...Ve(),...Nr()},"VOverlay"),Nn=ce()({name:"VOverlay",directives:{ClickOutside:Do},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...Hi()},emits:{"click:outside":t=>!0,"update:modelValue":t=>!0,afterLeave:()=>!0},setup(t,e){let{slots:n,attrs:i,emit:r}=e;const s=Xe(t,"modelValue"),a=I({get:()=>s.value,set:k=>{k&&t.disabled||(s.value=k)}}),{teleportTarget:o}=Lo(I(()=>t.attach||t.contained)),{themeClasses:l}=Fe(t),{rtlClasses:u,isRtl:d}=vr(),{hasContent:c,onAfterLeave:h}=Gr(t,a),m=Gn(I(()=>typeof t.scrim=="string"?t.scrim:null)),{globalTop:f,localTop:g,stackStyles:y}=Oo(a,F(t,"zIndex"),t._disableGlobalStack),{activatorEl:S,activatorRef:E,activatorEvents:v,contentEvents:O,scrimEvents:M}=Co(t,{isActive:a,isTop:g}),{dimensionStyles:D}=Ut(t),x=Ro(),{scopeId:L}=Fi();W(()=>t.disabled,k=>{k&&(a.value=!1)});const P=A(),N=A(),{contentStyles:R,updateLocation:C}=vo(t,{isRtl:d,contentEl:N,activatorEl:S,isActive:a});wo(t,{root:P,contentEl:N,activatorEl:S,isActive:a,updateLocation:C});function T(k){r("click:outside",k),t.persistent?w():a.value=!1}function b(){return a.value&&f.value}me&&W(a,k=>{k?window.addEventListener("keydown",U):window.removeEventListener("keydown",U)},{immediate:!0});function U(k){var V,z;k.key==="Escape"&&f.value&&(t.persistent?w():(a.value=!1,(V=N.value)!=null&&V.contains(document.activeElement)&&((z=S.value)==null||z.focus())))}const j=Mr();Lt(()=>t.closeOnBack,()=>{Dr(j,k=>{f.value&&a.value?(k(!1),t.persistent?w():a.value=!1):k()})});const re=A();W(()=>a.value&&(t.absolute||t.contained)&&o.value==null,k=>{if(k){const V=Kr(P.value);V&&V!==document.scrollingElement&&(re.value=V.scrollTop)}});function w(){t.noClickAnimation||N.value&&Rr(N.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:Or})}return pe(()=>{var k;return _(Et,null,[(k=n.activator)==null?void 0:k.call(n,{isActive:a.value,props:K({ref:E},v.value,t.activatorProps)}),x.value&&c.value&&_(mr,{disabled:!o.value,to:o.value},{default:()=>[_("div",K({class:["v-overlay",{"v-overlay--absolute":t.absolute||t.contained,"v-overlay--active":a.value,"v-overlay--contained":t.contained},l.value,u.value,t.class],style:[y.value,{top:$(re.value)},t.style],ref:P},L,i),[_(Uo,K({color:m,modelValue:a.value&&!!t.scrim},M.value),null),_(Kn,{appear:!0,persisted:!0,transition:t.transition,target:S.value,onAfterLeave:()=>{h(),r("afterLeave")}},{default:()=>{var V;return[Mt(_("div",K({ref:N,class:["v-overlay__content",t.contentClass],style:[D.value,R.value]},O.value,t.contentProps),[(V=n.default)==null?void 0:V.call(n,{isActive:a})]),[[jn,a.value],[$n("click-outside"),{handler:T,closeConditional:b,include:()=>[S.value]}]])]}})])]})])}),{activatorEl:S,animateClick:w,contentEl:N,globalTop:f,localTop:g,updateLocation:C}}}),xo=H({multiLine:Boolean,timeout:{type:[Number,String],default:5e3},vertical:Boolean,...Ur({location:"bottom"}),...xr(),...xt(),...Vt(),...Ve(),...pr(Hi({transition:"v-snackbar-transition"}),["persistent","noClickAnimation","scrim","scrollStrategy"])},"VSnackbar"),Vo=ce()({name:"VSnackbar",props:xo(),emits:{"update:modelValue":t=>!0},setup(t,e){let{slots:n}=e;const i=Xe(t,"modelValue"),{locationStyles:r}=Vr(t),{positionClasses:s}=Fr(t),{scopeId:a}=Fi(),{themeClasses:o}=Fe(t),{colorClasses:l,colorStyles:u,variantClasses:d}=zn(t),{roundedClasses:c}=Ft(t),h=A();W(i,f),W(()=>t.timeout,f),Ot(()=>{i.value&&f()});let m=-1;function f(){window.clearTimeout(m);const y=Number(t.timeout);!i.value||y===-1||(m=window.setTimeout(()=>{i.value=!1},y))}function g(){window.clearTimeout(m)}return pe(()=>{const[y]=Nn.filterProps(t);return _(Nn,K({ref:h,class:["v-snackbar",{"v-snackbar--active":i.value,"v-snackbar--multi-line":t.multiLine&&!t.vertical,"v-snackbar--vertical":t.vertical},s.value,t.class],style:t.style},y,{modelValue:i.value,"onUpdate:modelValue":S=>i.value=S,contentProps:K({class:["v-snackbar__wrapper",o.value,l.value,c.value,d.value],style:[r.value,u.value],onPointerenter:g,onPointerleave:f},y.contentProps),persistent:!0,noClickAnimation:!0,scrim:!1,scrollStrategy:"none",_disableGlobalStack:!0},a),{default:()=>[Jn(!1,"v-snackbar"),n.default&&_("div",{class:"v-snackbar__content",role:"status","aria-live":"polite"},[n.default()]),n.actions&&_(Qe,{defaults:{VBtn:{variant:"text",ripple:!1}}},{default:()=>[_("div",{class:"v-snackbar__actions"},[n.actions()])]})],activator:n.activator})}),Lr({},h)}}),ml={__name:"uiSnackbar",props:{isOpen:Boolean,message:String,activator:String,color:{type:String,default:"red-darken-1"}},setup(t){const e=t,n=A(!1);return W(()=>e.isOpen,i=>{n.value=i}),(i,r)=>(yr(),_r(Vo,{modelValue:n.value,"onUpdate:modelValue":r[0]||(r[0]=s=>n.value=s),activator:e.activator,location:"top",timeout:"2000",color:e.color},{default:wr(()=>[Ir(Sr(e.message),1)]),_:1},8,["modelValue","activator","color"]))}};const Ct=Symbol.for("vuetify:list");function ji(){const t=Ee(Ct,{hasPrepend:J(!1),updateHasPrepend:()=>null}),e={hasPrepend:J(!1),updateHasPrepend:n=>{n&&(e.hasPrepend.value=n)}};return xe(Ct,e),t}function $i(){return Ee(Ct,null)}const Fo={open:t=>{let{id:e,value:n,opened:i,parents:r}=t;if(n){const s=new Set;s.add(e);let a=r.get(e);for(;a!=null;)s.add(a),a=r.get(a);return s}else return i.delete(e),i},select:()=>null},qi={open:t=>{let{id:e,value:n,opened:i,parents:r}=t;if(n){let s=r.get(e);for(i.add(e);s!=null&&s!==e;)i.add(s),s=r.get(s);return i}else i.delete(e);return i},select:()=>null},Wo={open:qi.open,select:t=>{let{id:e,value:n,opened:i,parents:r}=t;if(!n)return i;const s=[];let a=r.get(e);for(;a!=null;)s.push(a),a=r.get(a);return new Set(s)}},Yt=t=>{const e={select:n=>{let{id:i,value:r,selected:s}=n;if(i=ge(i),t&&!r){const a=Array.from(s.entries()).reduce((o,l)=>{let[u,d]=l;return d==="on"?[...o,u]:o},[]);if(a.length===1&&a[0]===i)return s}return s.set(i,r?"on":"off"),s},in:(n,i,r)=>{let s=new Map;for(const a of n||[])s=e.select({id:a,value:!0,selected:new Map(s),children:i,parents:r});return s},out:n=>{const i=[];for(const[r,s]of n.entries())s==="on"&&i.push(r);return i}};return e},Gi=t=>{const e=Yt(t);return{select:i=>{let{selected:r,id:s,...a}=i;s=ge(s);const o=r.has(s)?new Map([[s,r.get(s)]]):new Map;return e.select({...a,id:s,selected:o})},in:(i,r,s)=>{let a=new Map;return i!=null&&i.length&&(a=e.in(i.slice(0,1),r,s)),a},out:(i,r,s)=>e.out(i,r,s)}},Bo=t=>{const e=Yt(t);return{select:i=>{let{id:r,selected:s,children:a,...o}=i;return r=ge(r),a.has(r)?s:e.select({id:r,selected:s,children:a,...o})},in:e.in,out:e.out}},Ho=t=>{const e=Gi(t);return{select:i=>{let{id:r,selected:s,children:a,...o}=i;return r=ge(r),a.has(r)?s:e.select({id:r,selected:s,children:a,...o})},in:e.in,out:e.out}},jo=t=>{const e={select:n=>{let{id:i,value:r,selected:s,children:a,parents:o}=n;i=ge(i);const l=new Map(s),u=[i];for(;u.length;){const c=u.shift();s.set(c,r?"on":"off"),a.has(c)&&u.push(...a.get(c))}let d=o.get(i);for(;d;){const c=a.get(d),h=c.every(f=>s.get(f)==="on"),m=c.every(f=>!s.has(f)||s.get(f)==="off");s.set(d,h?"on":m?"off":"indeterminate"),d=o.get(d)}return t&&!r&&Array.from(s.entries()).reduce((h,m)=>{let[f,g]=m;return g==="on"?[...h,f]:h},[]).length===0?l:s},in:(n,i,r)=>{let s=new Map;for(const a of n||[])s=e.select({id:a,value:!0,selected:new Map(s),children:i,parents:r});return s},out:(n,i)=>{const r=[];for(const[s,a]of n.entries())a==="on"&&!i.has(s)&&r.push(s);return r}};return e},Me=Symbol.for("vuetify:nested"),Ki={id:J(),root:{register:()=>null,unregister:()=>null,parents:A(new Map),children:A(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:A(new Set),selected:A(new Map),selectedValues:A([])}},$o=H({selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,selected:Array,mandatory:Boolean},"nested"),qo=t=>{let e=!1;const n=A(new Map),i=A(new Map),r=Xe(t,"opened",t.opened,c=>new Set(c),c=>[...c.values()]),s=I(()=>{if(typeof t.selectStrategy=="object")return t.selectStrategy;switch(t.selectStrategy){case"single-leaf":return Ho(t.mandatory);case"leaf":return Bo(t.mandatory);case"independent":return Yt(t.mandatory);case"single-independent":return Gi(t.mandatory);case"classic":default:return jo(t.mandatory)}}),a=I(()=>{if(typeof t.openStrategy=="object")return t.openStrategy;switch(t.openStrategy){case"list":return Wo;case"single":return Fo;case"multiple":default:return qi}}),o=Xe(t,"selected",t.selected,c=>s.value.in(c,n.value,i.value),c=>s.value.out(c,n.value,i.value));qn(()=>{e=!0});function l(c){const h=[];let m=c;for(;m!=null;)h.unshift(m),m=i.value.get(m);return h}const u=lt("nested"),d={id:J(),root:{opened:r,selected:o,selectedValues:I(()=>{const c=[];for(const[h,m]of o.value.entries())m==="on"&&c.push(h);return c}),register:(c,h,m)=>{h&&c!==h&&i.value.set(c,h),m&&n.value.set(c,[]),h!=null&&n.value.set(h,[...n.value.get(h)||[],c])},unregister:c=>{if(e)return;n.value.delete(c);const h=i.value.get(c);if(h){const m=n.value.get(h)??[];n.value.set(h,m.filter(f=>f!==c))}i.value.delete(c),r.value.delete(c)},open:(c,h,m)=>{u.emit("click:open",{id:c,value:h,path:l(c),event:m});const f=a.value.open({id:c,value:h,opened:new Set(r.value),children:n.value,parents:i.value,event:m});f&&(r.value=f)},openOnSelect:(c,h,m)=>{const f=a.value.select({id:c,value:h,selected:new Map(o.value),opened:new Set(r.value),children:n.value,parents:i.value,event:m});f&&(r.value=f)},select:(c,h,m)=>{u.emit("click:select",{id:c,value:h,path:l(c),event:m});const f=s.value.select({id:c,value:h,selected:new Map(o.value),children:n.value,parents:i.value,event:m});f&&(o.value=f),d.root.openOnSelect(c,h,m)},children:n,parents:i}};return xe(Me,d),d.root},zi=(t,e)=>{const n=Ee(Me,Ki),i=Symbol(Er()),r=I(()=>t.value!==void 0?t.value:i),s={...n,id:r,open:(a,o)=>n.root.open(r.value,a,o),openOnSelect:(a,o)=>n.root.openOnSelect(r.value,a,o),isOpen:I(()=>n.root.opened.value.has(r.value)),parent:I(()=>n.root.parents.value.get(r.value)),select:(a,o)=>n.root.select(r.value,a,o),isSelected:I(()=>n.root.selected.value.get(ge(r.value))==="on"),isIndeterminate:I(()=>n.root.selected.value.get(r.value)==="indeterminate"),isLeaf:I(()=>!n.root.children.value.get(r.value)),isGroupActivator:n.isGroupActivator};return!n.isGroupActivator&&n.root.register(r.value,n.id.value,e),qn(()=>{!n.isGroupActivator&&n.root.unregister(r.value)}),e&&xe(Me,s),s},Go=()=>{const t=Ee(Me,Ki);xe(Me,{...t,isGroupActivator:!0})},Ko=kr({name:"VListGroupActivator",setup(t,e){let{slots:n}=e;return Go(),()=>{var i;return(i=n.default)==null?void 0:i.call(n)}}}),zo=H({activeColor:String,baseColor:String,color:String,collapseIcon:{type:we,default:"$collapse"},expandIcon:{type:we,default:"$expand"},prependIcon:we,appendIcon:we,fluid:Boolean,subgroup:Boolean,title:String,value:null,...ke(),...ct()},"VListGroup"),Mn=ce()({name:"VListGroup",props:zo(),setup(t,e){let{slots:n}=e;const{isOpen:i,open:r,id:s}=zi(F(t,"value"),!0),a=I(()=>`v-list-group--id-${String(s.value)}`),o=$i(),{isBooted:l}=zr();function u(m){r(!i.value,m)}const d=I(()=>({onClick:u,class:"v-list-group__header",id:a.value})),c=I(()=>i.value?t.collapseIcon:t.expandIcon),h=I(()=>({VListItem:{active:i.value,activeColor:t.activeColor,baseColor:t.baseColor,color:t.color,prependIcon:t.prependIcon||t.subgroup&&c.value,appendIcon:t.appendIcon||!t.subgroup&&c.value,title:t.title,value:t.value}}));return pe(()=>_(t.tag,{class:["v-list-group",{"v-list-group--prepend":o==null?void 0:o.hasPrepend.value,"v-list-group--fluid":t.fluid,"v-list-group--subgroup":t.subgroup,"v-list-group--open":i.value},t.class],style:t.style},{default:()=>[n.activator&&_(Qe,{defaults:h.value},{default:()=>[_(Ko,null,{default:()=>[n.activator({props:d.value,isOpen:i.value})]})]}),_(Kn,{transition:{component:Wr},disabled:!l.value},{default:()=>{var m;return[Mt(_("div",{class:"v-list-group__items",role:"group","aria-labelledby":a.value},[(m=n.default)==null?void 0:m.call(n)]),[[jn,i.value]])]}})]})),{}}});const Jo=ii("v-list-item-subtitle"),Yo=ii("v-list-item-title"),Xo=H({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:we,baseColor:String,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:we,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number,Boolean],title:[String,Number,Boolean],value:null,onClick:rn(),onClickOnce:rn(),...Yn(),...ke(),...Xn(),...Dt(),...Qn(),...xt(),...Br(),...ct(),...Ve(),...Vt({variant:"text"})},"VListItem"),Dn=ce()({name:"VListItem",directives:{Ripple:Hr},props:Xo(),emits:{click:t=>!0},setup(t,e){let{attrs:n,slots:i,emit:r}=e;const s=jr(t,n),a=I(()=>t.value===void 0?s.href.value:t.value),{select:o,isSelected:l,isIndeterminate:u,isGroupActivator:d,root:c,parent:h,openOnSelect:m}=zi(a,!1),f=$i(),g=I(()=>{var w;return t.active!==!1&&(t.active||((w=s.isActive)==null?void 0:w.value)||l.value)}),y=I(()=>t.link!==!1&&s.isLink.value),S=I(()=>!t.disabled&&t.link!==!1&&(t.link||s.isClickable.value||t.value!=null&&!!f)),E=I(()=>t.rounded||t.nav),v=I(()=>t.color??t.activeColor),O=I(()=>({color:g.value?v.value??t.baseColor:t.baseColor,variant:t.variant}));W(()=>{var w;return(w=s.isActive)==null?void 0:w.value},w=>{w&&h.value!=null&&c.open(h.value,!0),w&&m(w)},{immediate:!0});const{themeClasses:M}=Fe(t),{borderClasses:D}=Zn(t),{colorClasses:x,colorStyles:L,variantClasses:P}=zn(O),{densityClasses:N}=ei(t),{dimensionStyles:R}=Ut(t),{elevationClasses:C}=ti(t),{roundedClasses:T}=Ft(E),b=I(()=>t.lines?`v-list-item--${t.lines}-line`:void 0),U=I(()=>({isActive:g.value,select:o,isSelected:l.value,isIndeterminate:u.value}));function j(w){var k;r("click",w),!(d||!S.value)&&((k=s.navigate)==null||k.call(s,w),t.value!=null&&o(!l.value,w))}function re(w){(w.key==="Enter"||w.key===" ")&&(w.preventDefault(),j(w))}return pe(()=>{const w=y.value?"a":t.tag,k=i.title||t.title,V=i.subtitle||t.subtitle,z=!!(t.appendAvatar||t.appendIcon),Xi=!!(z||i.append),Xt=!!(t.prependAvatar||t.prependIcon),ft=!!(Xt||i.prepend);return f==null||f.updateHasPrepend(ft),t.activeColor&&Tr("active-color",["color","base-color"]),Mt(_(w,{class:["v-list-item",{"v-list-item--active":g.value,"v-list-item--disabled":t.disabled,"v-list-item--link":S.value,"v-list-item--nav":t.nav,"v-list-item--prepend":!ft&&(f==null?void 0:f.hasPrepend.value),[`${t.activeClass}`]:t.activeClass&&g.value},M.value,D.value,x.value,N.value,C.value,b.value,T.value,P.value,t.class],style:[L.value,R.value,t.style],href:s.href.value,tabindex:S.value?f?-2:0:void 0,title:t.title,onClick:j,onKeydown:S.value&&!y.value&&re},{default:()=>{var Qt;return[Jn(S.value||g.value,"v-list-item"),ft&&_("div",{key:"prepend",class:"v-list-item__prepend"},[i.prepend?_(Qe,{key:"prepend-defaults",disabled:!Xt,defaults:{VAvatar:{density:t.density,image:t.prependAvatar},VIcon:{density:t.density,icon:t.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var G;return[(G=i.prepend)==null?void 0:G.call(i,U.value)]}}):_(Et,null,[t.prependAvatar&&_(un,{key:"prepend-avatar",density:t.density,image:t.prependAvatar},null),t.prependIcon&&_(cn,{key:"prepend-icon",density:t.density,icon:t.prependIcon},null)])]),_("div",{class:"v-list-item__content","data-no-activator":""},[k&&_(Yo,{key:"title"},{default:()=>{var G;return[((G=i.title)==null?void 0:G.call(i,{title:t.title}))??t.title]}}),V&&_(Jo,{key:"subtitle"},{default:()=>{var G;return[((G=i.subtitle)==null?void 0:G.call(i,{subtitle:t.subtitle}))??t.subtitle]}}),(Qt=i.default)==null?void 0:Qt.call(i,U.value)]),Xi&&_("div",{key:"append",class:"v-list-item__append"},[i.append?_(Qe,{key:"append-defaults",disabled:!z,defaults:{VAvatar:{density:t.density,image:t.appendAvatar},VIcon:{density:t.density,icon:t.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var G;return[(G=i.append)==null?void 0:G.call(i,U.value)]}}):_(Et,null,[t.appendIcon&&_(cn,{key:"append-icon",density:t.density,icon:t.appendIcon},null),t.appendAvatar&&_(un,{key:"append-avatar",density:t.density,image:t.appendAvatar},null)])])]}}),[[$n("ripple"),S.value&&t.ripple]])}),{}}}),Qo=H({color:String,inset:Boolean,sticky:Boolean,title:String,...ke(),...ct()},"VListSubheader"),Zo=ce()({name:"VListSubheader",props:Qo(),setup(t,e){let{slots:n}=e;const{textColorClasses:i,textColorStyles:r}=ni(F(t,"color"));return pe(()=>{const s=!!(n.default||t.title);return _(t.tag,{class:["v-list-subheader",{"v-list-subheader--inset":t.inset,"v-list-subheader--sticky":t.sticky},i.value,t.class],style:[{textColorStyles:r},t.style]},{default:()=>{var a;return[s&&_("div",{class:"v-list-subheader__text"},[((a=n.default)==null?void 0:a.call(n))??t.title])]}})}),{}}});const el=H({color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...ke(),...Ve()},"VDivider"),tl=ce()({name:"VDivider",props:el(),setup(t,e){let{attrs:n}=e;const{themeClasses:i}=Fe(t),{textColorClasses:r,textColorStyles:s}=ni(F(t,"color")),a=I(()=>{const o={};return t.length&&(o[t.vertical?"maxHeight":"maxWidth"]=$(t.length)),t.thickness&&(o[t.vertical?"borderRightWidth":"borderTopWidth"]=$(t.thickness)),o});return pe(()=>_("hr",{class:[{"v-divider":!0,"v-divider--inset":t.inset,"v-divider--vertical":t.vertical},i.value,r.value,t.class],style:[a.value,s.value,t.style],"aria-orientation":!n.role||n.role==="separator"?t.vertical?"vertical":"horizontal":void 0,role:`${n.role||"separator"}`},null)),{}}}),nl=H({items:Array},"VListChildren"),Ji=ce()({name:"VListChildren",props:nl(),setup(t,e){let{slots:n}=e;return ji(),()=>{var i,r;return((i=n.default)==null?void 0:i.call(n))??((r=t.items)==null?void 0:r.map(s=>{var m,f;let{children:a,props:o,type:l,raw:u}=s;if(l==="divider")return((m=n.divider)==null?void 0:m.call(n,{props:o}))??_(tl,o,null);if(l==="subheader")return((f=n.subheader)==null?void 0:f.call(n,{props:o}))??_(Zo,o,null);const d={subtitle:n.subtitle?g=>{var y;return(y=n.subtitle)==null?void 0:y.call(n,{...g,item:u})}:void 0,prepend:n.prepend?g=>{var y;return(y=n.prepend)==null?void 0:y.call(n,{...g,item:u})}:void 0,append:n.append?g=>{var y;return(y=n.append)==null?void 0:y.call(n,{...g,item:u})}:void 0,title:n.title?g=>{var y;return(y=n.title)==null?void 0:y.call(n,{...g,item:u})}:void 0},[c,h]=Mn.filterProps(o);return a?_(Mn,K({value:o==null?void 0:o.value},c),{activator:g=>{let{props:y}=g;return n.header?n.header({props:{...o,...y}}):_(Dn,K(o,y),d)},default:()=>_(Ji,{items:a},n)}):n.item?n.item({props:o}):_(Dn,o,d)}))}}}),il=H({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean},"list-items");function rl(t){return typeof t=="string"||typeof t=="number"||typeof t=="boolean"}function sl(t,e){const n=be(e,t.itemType,"item"),i=rl(e)?e:be(e,t.itemTitle),r=be(e,t.itemValue,void 0),s=be(e,t.itemChildren),a=t.itemProps===!0?Cr(e,["children"])[1]:be(e,t.itemProps),o={title:i,value:r,...a};return{type:n,title:o.title,value:o.value,props:o,children:n==="item"&&s?Yi(t,s):void 0,raw:e}}function Yi(t,e){const n=[];for(const i of e)n.push(sl(t,i));return n}function al(t){return{items:I(()=>Yi(t,t.items))}}const ol=H({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},nav:Boolean,...$o({selectStrategy:"single-leaf",openStrategy:"list"}),...Yn(),...ke(),...Xn(),...Dt(),...Qn(),itemType:{type:String,default:"type"},...il(),...xt(),...ct(),...Ve(),...Vt({variant:"text"})},"VList"),gl=ce()({name:"VList",props:ol(),emits:{"update:selected":t=>!0,"update:opened":t=>!0,"click:open":t=>!0,"click:select":t=>!0},setup(t,e){let{slots:n}=e;const{items:i}=al(t),{themeClasses:r}=Fe(t),{backgroundColorClasses:s,backgroundColorStyles:a}=Gn(F(t,"bgColor")),{borderClasses:o}=Zn(t),{densityClasses:l}=ei(t),{dimensionStyles:u}=Ut(t),{elevationClasses:d}=ti(t),{roundedClasses:c}=Ft(t),{open:h,select:m}=qo(t),f=I(()=>t.lines?`v-list--${t.lines}-line`:void 0),g=F(t,"activeColor"),y=F(t,"baseColor"),S=F(t,"color");ji(),br({VListGroup:{activeColor:g,baseColor:y,color:S},VListItem:{activeClass:F(t,"activeClass"),activeColor:g,baseColor:y,color:S,density:F(t,"density"),disabled:F(t,"disabled"),lines:F(t,"lines"),nav:F(t,"nav"),variant:F(t,"variant")}});const E=J(!1),v=A();function O(P){E.value=!0}function M(P){E.value=!1}function D(P){var N;!E.value&&!(P.relatedTarget&&((N=v.value)!=null&&N.contains(P.relatedTarget)))&&L()}function x(P){if(v.value){if(P.key==="ArrowDown")L("next");else if(P.key==="ArrowUp")L("prev");else if(P.key==="Home")L("first");else if(P.key==="End")L("last");else return;P.preventDefault()}}function L(P){if(v.value)return Pr(v.value,P)}return pe(()=>_(t.tag,{ref:v,class:["v-list",{"v-list--disabled":t.disabled,"v-list--nav":t.nav},r.value,s.value,o.value,l.value,d.value,f.value,c.value,t.class],style:[a.value,u.value,t.style],tabindex:t.disabled||E.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:O,onFocusout:M,onFocus:D,onKeydown:x},{default:()=>[_(Ji,{items:i.value},n)]})),{open:h,select:m,focus:L}}});export{Nn as V,ml as _,Fi as a,Zo as b,gl as c,Dn as d,Yo as e,Hi as m,vl as u};
