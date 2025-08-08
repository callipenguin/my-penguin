var tm=Object.defineProperty;var nm=(n,e,t)=>e in n?tm(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Tt=(n,e,t)=>(nm(n,typeof e!="symbol"?e+"":e,t),t);import{r as rm,a as V,R as sm,j as p,D as xi,b as Ci,B as Q,T as H,c as Pi,A as tr,G as zl,C as Nh,F as im,I as om,S as am,M as Tn,d as oi,e as ki,f as Ke,g as nr,h as Ma,i as cm,k as lm,l as um,Q as hm,m as dm,u as fm,n as pm,o as bt,p as mm,L as gm,q as ym,s as _m,t as js,v as Ls,w as en,x as vm,y as ql,z as Im,E as wm,H as Em,J as Tm,K as Sm,N as Am,P as bm,O as Or,U as Oh,V as Rm,W as xm,X as Wl,Y as Fs,Z as Hl,_ as Mr,$ as Us,a0 as yn,a1 as Bs,a2 as Cm,a3 as Pm,a4 as km,a5 as Gl,a6 as rr,a7 as Dm,a8 as Vm,a9 as ja,aa as Mh,ab as Nm,ac as Om,ad as Mm,ae as jm,af as jh,ag as Lh,ah as Lm,ai as Fm,aj as Um,ak as Bm,al as $m,am as zm,an as qm,ao as Wm,ap as Hm,aq as Gm,ar as Km,as as zn,at as qn,au as Qm,av as Jm,aw as Ym,ax as We}from"./mui-2bb62da7.js";import{d as W}from"./dayjs-9d6a636c.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var sa={},Kl=rm;sa.createRoot=Kl.createRoot,sa.hydrateRoot=Kl.hydrateRoot;const Xm="modulepreload",Zm=function(n){return"/my-penguin/"+n},Ql={},vt=function(e,t,r){if(!t||t.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(t.map(i=>{if(i=Zm(i),i in Ql)return;Ql[i]=!0;const a=i.endsWith(".css"),c=a?'[rel="stylesheet"]':"";if(!!r)for(let f=s.length-1;f>=0;f--){const m=s[f];if(m.href===i&&(!a||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${c}`))return;const h=document.createElement("link");if(h.rel=a?"stylesheet":Xm,a||(h.as="script",h.crossOrigin=""),h.href=i,document.head.appendChild(h),a)return new Promise((f,m)=>{h.addEventListener("load",f),h.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i})};/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qr(){return Qr=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Qr.apply(this,arguments)}var Ht;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(Ht||(Ht={}));const Jl="popstate";function eg(n){n===void 0&&(n={});function e(s,i){let{pathname:a="/",search:c="",hash:u=""}=Mn(s.location.hash.substr(1));return!a.startsWith("/")&&!a.startsWith(".")&&(a="/"+a),ia("",{pathname:a,search:c,hash:u},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(s,i){let a=s.document.querySelector("base"),c="";if(a&&a.getAttribute("href")){let u=s.location.href,h=u.indexOf("#");c=h===-1?u:u.slice(0,h)}return c+"#"+(typeof i=="string"?i:Fh(i))}function r(s,i){La(s.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return ng(e,t,r,n)}function be(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function La(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function tg(){return Math.random().toString(36).substr(2,8)}function Yl(n,e){return{usr:n.state,key:n.key,idx:e}}function ia(n,e,t,r){return t===void 0&&(t=null),Qr({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?Mn(e):e,{state:t,key:e&&e.key||r||tg()})}function Fh(n){let{pathname:e="/",search:t="",hash:r=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Mn(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let r=n.indexOf("?");r>=0&&(e.search=n.substr(r),n=n.substr(0,r)),n&&(e.pathname=n)}return e}function ng(n,e,t,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:i=!1}=r,a=s.history,c=Ht.Pop,u=null,h=f();h==null&&(h=0,a.replaceState(Qr({},a.state,{idx:h}),""));function f(){return(a.state||{idx:null}).idx}function m(){c=Ht.Pop;let T=f(),L=T==null?null:T-h;h=T,u&&u({action:c,location:x.location,delta:L})}function y(T,L){c=Ht.Push;let U=ia(x.location,T,L);t&&t(U,T),h=f()+1;let z=Yl(U,h),G=x.createHref(U);try{a.pushState(z,"",G)}catch(ce){if(ce instanceof DOMException&&ce.name==="DataCloneError")throw ce;s.location.assign(G)}i&&u&&u({action:c,location:x.location,delta:1})}function w(T,L){c=Ht.Replace;let U=ia(x.location,T,L);t&&t(U,T),h=f();let z=Yl(U,h),G=x.createHref(U);a.replaceState(z,"",G),i&&u&&u({action:c,location:x.location,delta:0})}function P(T){let L=s.location.origin!=="null"?s.location.origin:s.location.href,U=typeof T=="string"?T:Fh(T);return U=U.replace(/ $/,"%20"),be(L,"No window.location.(origin|href) available to create URL for href: "+U),new URL(U,L)}let x={get action(){return c},get location(){return n(s,a)},listen(T){if(u)throw new Error("A history only accepts one active listener");return s.addEventListener(Jl,m),u=T,()=>{s.removeEventListener(Jl,m),u=null}},createHref(T){return e(s,T)},createURL:P,encodeLocation(T){let L=P(T);return{pathname:L.pathname,search:L.search,hash:L.hash}},push:y,replace:w,go(T){return a.go(T)}};return x}var Xl;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(Xl||(Xl={}));function rg(n,e,t){return t===void 0&&(t="/"),sg(n,e,t,!1)}function sg(n,e,t,r){let s=typeof e=="string"?Mn(e):e,i=$h(s.pathname||"/",t);if(i==null)return null;let a=Uh(n);ig(a);let c=null;for(let u=0;c==null&&u<a.length;++u){let h=gg(i);c=pg(a[u],h,r)}return c}function Uh(n,e,t,r){e===void 0&&(e=[]),t===void 0&&(t=[]),r===void 0&&(r="");let s=(i,a,c)=>{let u={relativePath:c===void 0?i.path||"":c,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};u.relativePath.startsWith("/")&&(be(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let h=Rn([r,u.relativePath]),f=t.concat(u);i.children&&i.children.length>0&&(be(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),Uh(i.children,e,f,h)),!(i.path==null&&!i.index)&&e.push({path:h,score:dg(h,i.index),routesMeta:f})};return n.forEach((i,a)=>{var c;if(i.path===""||!((c=i.path)!=null&&c.includes("?")))s(i,a);else for(let u of Bh(i.path))s(i,a,u)}),e}function Bh(n){let e=n.split("/");if(e.length===0)return[];let[t,...r]=e,s=t.endsWith("?"),i=t.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let a=Bh(r.join("/")),c=[];return c.push(...a.map(u=>u===""?i:[i,u].join("/"))),s&&c.push(...a),c.map(u=>n.startsWith("/")&&u===""?"/":u)}function ig(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:fg(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const og=/^:[\w-]+$/,ag=3,cg=2,lg=1,ug=10,hg=-2,Zl=n=>n==="*";function dg(n,e){let t=n.split("/"),r=t.length;return t.some(Zl)&&(r+=hg),e&&(r+=cg),t.filter(s=>!Zl(s)).reduce((s,i)=>s+(og.test(i)?ag:i===""?lg:ug),r)}function fg(n,e){return n.length===e.length&&n.slice(0,-1).every((r,s)=>r===e[s])?n[n.length-1]-e[e.length-1]:0}function pg(n,e,t){t===void 0&&(t=!1);let{routesMeta:r}=n,s={},i="/",a=[];for(let c=0;c<r.length;++c){let u=r[c],h=c===r.length-1,f=i==="/"?e:e.slice(i.length)||"/",m=eu({path:u.relativePath,caseSensitive:u.caseSensitive,end:h},f),y=u.route;if(!m&&h&&t&&!r[r.length-1].route.index&&(m=eu({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},f)),!m)return null;Object.assign(s,m.params),a.push({params:s,pathname:Rn([i,m.pathname]),pathnameBase:Eg(Rn([i,m.pathnameBase])),route:y}),m.pathnameBase!=="/"&&(i=Rn([i,m.pathnameBase]))}return a}function eu(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,r]=mg(n.path,n.caseSensitive,n.end),s=e.match(t);if(!s)return null;let i=s[0],a=i.replace(/(.)\/+$/,"$1"),c=s.slice(1);return{params:r.reduce((h,f,m)=>{let{paramName:y,isOptional:w}=f;if(y==="*"){let x=c[m]||"";a=i.slice(0,i.length-x.length).replace(/(.)\/+$/,"$1")}const P=c[m];return w&&!P?h[y]=void 0:h[y]=(P||"").replace(/%2F/g,"/"),h},{}),pathname:i,pathnameBase:a,pattern:n}}function mg(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),La(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let r=[],s="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,c,u)=>(r.push({paramName:c,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(r.push({paramName:"*"}),s+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?s+="\\/*$":n!==""&&n!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function gg(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return La(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function $h(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=n.charAt(t);return r&&r!=="/"?null:n.slice(t)||"/"}function yg(n,e){e===void 0&&(e="/");let{pathname:t,search:r="",hash:s=""}=typeof n=="string"?Mn(n):n;return{pathname:t?t.startsWith("/")?t:_g(t,e):e,search:Tg(r),hash:Sg(s)}}function _g(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(s=>{s===".."?t.length>1&&t.pop():s!=="."&&t.push(s)}),t.length>1?t.join("/"):"/"}function Uo(n,e,t,r){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function vg(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Ig(n,e){let t=vg(n);return e?t.map((r,s)=>s===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function wg(n,e,t,r){r===void 0&&(r=!1);let s;typeof n=="string"?s=Mn(n):(s=Qr({},n),be(!s.pathname||!s.pathname.includes("?"),Uo("?","pathname","search",s)),be(!s.pathname||!s.pathname.includes("#"),Uo("#","pathname","hash",s)),be(!s.search||!s.search.includes("#"),Uo("#","search","hash",s)));let i=n===""||s.pathname==="",a=i?"/":s.pathname,c;if(a==null)c=t;else{let m=e.length-1;if(!r&&a.startsWith("..")){let y=a.split("/");for(;y[0]==="..";)y.shift(),m-=1;s.pathname=y.join("/")}c=m>=0?e[m]:"/"}let u=yg(s,c),h=a&&a!=="/"&&a.endsWith("/"),f=(i||a===".")&&t.endsWith("/");return!u.pathname.endsWith("/")&&(h||f)&&(u.pathname+="/"),u}const Rn=n=>n.join("/").replace(/\/\/+/g,"/"),Eg=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),Tg=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,Sg=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function Ag(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const zh=["post","put","patch","delete"];new Set(zh);const bg=["get",...zh];new Set(bg);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jr(){return Jr=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Jr.apply(this,arguments)}const Fa=V.createContext(null),Rg=V.createContext(null),Di=V.createContext(null),Vi=V.createContext(null),fr=V.createContext({outlet:null,matches:[],isDataRoute:!1}),qh=V.createContext(null);function Ni(){return V.useContext(Vi)!=null}function Oi(){return Ni()||be(!1),V.useContext(Vi).location}function Wh(n){V.useContext(Di).static||V.useLayoutEffect(n)}function Hh(){let{isDataRoute:n}=V.useContext(fr);return n?Ug():xg()}function xg(){Ni()||be(!1);let n=V.useContext(Fa),{basename:e,future:t,navigator:r}=V.useContext(Di),{matches:s}=V.useContext(fr),{pathname:i}=Oi(),a=JSON.stringify(Ig(s,t.v7_relativeSplatPath)),c=V.useRef(!1);return Wh(()=>{c.current=!0}),V.useCallback(function(h,f){if(f===void 0&&(f={}),!c.current)return;if(typeof h=="number"){r.go(h);return}let m=wg(h,JSON.parse(a),i,f.relative==="path");n==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:Rn([e,m.pathname])),(f.replace?r.replace:r.push)(m,f.state,f)},[e,r,a,i,n])}function Cg(n,e){return Pg(n,e)}function Pg(n,e,t,r){Ni()||be(!1);let{navigator:s}=V.useContext(Di),{matches:i}=V.useContext(fr),a=i[i.length-1],c=a?a.params:{};a&&a.pathname;let u=a?a.pathnameBase:"/";a&&a.route;let h=Oi(),f;if(e){var m;let T=typeof e=="string"?Mn(e):e;u==="/"||(m=T.pathname)!=null&&m.startsWith(u)||be(!1),f=T}else f=h;let y=f.pathname||"/",w=y;if(u!=="/"){let T=u.replace(/^\//,"").split("/");w="/"+y.replace(/^\//,"").split("/").slice(T.length).join("/")}let P=rg(n,{pathname:w}),x=Og(P&&P.map(T=>Object.assign({},T,{params:Object.assign({},c,T.params),pathname:Rn([u,s.encodeLocation?s.encodeLocation(T.pathname).pathname:T.pathname]),pathnameBase:T.pathnameBase==="/"?u:Rn([u,s.encodeLocation?s.encodeLocation(T.pathnameBase).pathname:T.pathnameBase])})),i,t,r);return e&&x?V.createElement(Vi.Provider,{value:{location:Jr({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Ht.Pop}},x):x}function kg(){let n=Fg(),e=Ag(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return V.createElement(V.Fragment,null,V.createElement("h2",null,"Unexpected Application Error!"),V.createElement("h3",{style:{fontStyle:"italic"}},e),t?V.createElement("pre",{style:s},t):null,i)}const Dg=V.createElement(kg,null);class Vg extends V.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?V.createElement(fr.Provider,{value:this.props.routeContext},V.createElement(qh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ng(n){let{routeContext:e,match:t,children:r}=n,s=V.useContext(Fa);return s&&s.static&&s.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=t.route.id),V.createElement(fr.Provider,{value:e},r)}function Og(n,e,t,r){var s;if(e===void 0&&(e=[]),t===void 0&&(t=null),r===void 0&&(r=null),n==null){var i;if(!t)return null;if(t.errors)n=t.matches;else if((i=r)!=null&&i.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let a=n,c=(s=t)==null?void 0:s.errors;if(c!=null){let f=a.findIndex(m=>m.route.id&&(c==null?void 0:c[m.route.id])!==void 0);f>=0||be(!1),a=a.slice(0,Math.min(a.length,f+1))}let u=!1,h=-1;if(t&&r&&r.v7_partialHydration)for(let f=0;f<a.length;f++){let m=a[f];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(h=f),m.route.id){let{loaderData:y,errors:w}=t,P=m.route.loader&&y[m.route.id]===void 0&&(!w||w[m.route.id]===void 0);if(m.route.lazy||P){u=!0,h>=0?a=a.slice(0,h+1):a=[a[0]];break}}}return a.reduceRight((f,m,y)=>{let w,P=!1,x=null,T=null;t&&(w=c&&m.route.id?c[m.route.id]:void 0,x=m.route.errorElement||Dg,u&&(h<0&&y===0?(Bg("route-fallback",!1),P=!0,T=null):h===y&&(P=!0,T=m.route.hydrateFallbackElement||null)));let L=e.concat(a.slice(0,y+1)),U=()=>{let z;return w?z=x:P?z=T:m.route.Component?z=V.createElement(m.route.Component,null):m.route.element?z=m.route.element:z=f,V.createElement(Ng,{match:m,routeContext:{outlet:f,matches:L,isDataRoute:t!=null},children:z})};return t&&(m.route.ErrorBoundary||m.route.errorElement||y===0)?V.createElement(Vg,{location:t.location,revalidation:t.revalidation,component:x,error:w,children:U(),routeContext:{outlet:null,matches:L,isDataRoute:!0}}):U()},null)}var Gh=function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n}(Gh||{}),ai=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(ai||{});function Mg(n){let e=V.useContext(Fa);return e||be(!1),e}function jg(n){let e=V.useContext(Rg);return e||be(!1),e}function Lg(n){let e=V.useContext(fr);return e||be(!1),e}function Kh(n){let e=Lg(),t=e.matches[e.matches.length-1];return t.route.id||be(!1),t.route.id}function Fg(){var n;let e=V.useContext(qh),t=jg(ai.UseRouteError),r=Kh(ai.UseRouteError);return e!==void 0?e:(n=t.errors)==null?void 0:n[r]}function Ug(){let{router:n}=Mg(Gh.UseNavigateStable),e=Kh(ai.UseNavigateStable),t=V.useRef(!1);return Wh(()=>{t.current=!0}),V.useCallback(function(s,i){i===void 0&&(i={}),t.current&&(typeof s=="number"?n.navigate(s):n.navigate(s,Jr({fromRouteId:e},i)))},[n,e])}const tu={};function Bg(n,e,t){!e&&!tu[n]&&(tu[n]=!0)}function $g(n,e){n==null||n.v7_startTransition,(n==null?void 0:n.v7_relativeSplatPath)===void 0&&(!e||e.v7_relativeSplatPath),e&&(e.v7_fetcherPersist,e.v7_normalizeFormMethod,e.v7_partialHydration,e.v7_skipActionErrorRevalidation)}function it(n){be(!1)}function zg(n){let{basename:e="/",children:t=null,location:r,navigationType:s=Ht.Pop,navigator:i,static:a=!1,future:c}=n;Ni()&&be(!1);let u=e.replace(/^\/*/,"/"),h=V.useMemo(()=>({basename:u,navigator:i,static:a,future:Jr({v7_relativeSplatPath:!1},c)}),[u,c,i,a]);typeof r=="string"&&(r=Mn(r));let{pathname:f="/",search:m="",hash:y="",state:w=null,key:P="default"}=r,x=V.useMemo(()=>{let T=$h(f,u);return T==null?null:{location:{pathname:T,search:m,hash:y,state:w,key:P},navigationType:s}},[u,f,m,y,w,P,s]);return x==null?null:V.createElement(Di.Provider,{value:h},V.createElement(Vi.Provider,{children:t,value:x}))}function qg(n){let{children:e,location:t}=n;return Cg(oa(e),t)}new Promise(()=>{});function oa(n,e){e===void 0&&(e=[]);let t=[];return V.Children.forEach(n,(r,s)=>{if(!V.isValidElement(r))return;let i=[...e,s];if(r.type===V.Fragment){t.push.apply(t,oa(r.props.children,i));return}r.type!==it&&be(!1),!r.props.index||!r.props.children||be(!1);let a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=oa(r.props.children,i)),t.push(a)}),t}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Wg="6";try{window.__reactRouterVersion=Wg}catch{}const Hg="startTransition",nu=sm[Hg];function Gg(n){let{basename:e,children:t,future:r,window:s}=n,i=V.useRef();i.current==null&&(i.current=eg({window:s,v5Compat:!0}));let a=i.current,[c,u]=V.useState({action:a.action,location:a.location}),{v7_startTransition:h}=r||{},f=V.useCallback(m=>{h&&nu?nu(()=>u(m)):u(m)},[u,h]);return V.useLayoutEffect(()=>a.listen(f),[a,f]),V.useEffect(()=>$g(r),[r]),V.createElement(zg,{basename:e,children:t,location:c.location,navigationType:c.action,navigator:a,future:r})}var ru;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(ru||(ru={}));var su;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(su||(su={}));const Kg=()=>{};/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Qh=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Qg=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Jh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,u=s+2<n.length,h=u?n[s+2]:0,f=i>>2,m=(i&3)<<4|c>>4;let y=(c&15)<<2|h>>6,w=h&63;u||(w=64,a||(y=64)),r.push(t[f],t[m],t[y],t[w])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Qh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Qg(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const m=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||h==null||m==null)throw new Jg;const y=i<<2|c>>4;if(r.push(y),h!==64){const w=c<<4&240|h>>2;if(r.push(w),m!==64){const P=h<<6&192|m;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Jg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Yg=function(n){const e=Qh(n);return Jh.encodeByteArray(e,!0)},ci=function(n){return Yg(n).replace(/\./g,"")},Yh=function(n){try{return Jh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Xg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Zg=()=>Xg().__FIREBASE_DEFAULTS__,ey=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ty=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Yh(n[1]);return e&&JSON.parse(e)},Mi=()=>{try{return Kg()||Zg()||ey()||ty()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Xh=n=>{var e,t;return(t=(e=Mi())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},ny=n=>{const e=Xh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Zh=()=>{var n;return(n=Mi())==null?void 0:n.config},ed=n=>{var e;return(e=Mi())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ry{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function pr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function td(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function sy(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n},c="";return[ci(JSON.stringify(t)),ci(JSON.stringify(a)),c].join(".")}const Br={};function iy(){const n={prod:[],emulator:[]};for(const e of Object.keys(Br))Br[e]?n.emulator.push(e):n.prod.push(e);return n}function oy(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let iu=!1;function nd(n,e){if(typeof window>"u"||typeof document>"u"||!pr(window.location.host)||Br[n]===e||Br[n]||iu)return;Br[n]=e;function t(y){return`__firebase__banner__${y}`}const r="__firebase__banner",i=iy().prod.length>0;function a(){const y=document.getElementById(r);y&&y.remove()}function c(y){y.style.display="flex",y.style.background="#7faaf0",y.style.position="fixed",y.style.bottom="5px",y.style.left="5px",y.style.padding=".5em",y.style.borderRadius="5px",y.style.alignItems="center"}function u(y,w){y.setAttribute("width","24"),y.setAttribute("id",w),y.setAttribute("height","24"),y.setAttribute("viewBox","0 0 24 24"),y.setAttribute("fill","none"),y.style.marginLeft="-6px"}function h(){const y=document.createElement("span");return y.style.cursor="pointer",y.style.marginLeft="16px",y.style.fontSize="24px",y.innerHTML=" &times;",y.onclick=()=>{iu=!0,a()},y}function f(y,w){y.setAttribute("id",w),y.innerText="Learn more",y.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",y.setAttribute("target","__blank"),y.style.paddingLeft="5px",y.style.textDecoration="underline"}function m(){const y=oy(r),w=t("text"),P=document.getElementById(w)||document.createElement("span"),x=t("learnmore"),T=document.getElementById(x)||document.createElement("a"),L=t("preprendIcon"),U=document.getElementById(L)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(y.created){const z=y.element;c(z),f(T,x);const G=h();u(U,L),z.append(U,P,T,G),document.body.appendChild(z)}i?(P.innerText="Preview backend disconnected.",U.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(U.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",w)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function $e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ay(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($e())}function cy(){var e;const n=(e=Mi())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ly(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function uy(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function hy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dy(){const n=$e();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function fy(){return!cy()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function py(){try{return typeof indexedDB=="object"}catch{return!1}}function my(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const gy="FirebaseError";class jt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=gy,Object.setPrototypeOf(this,jt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ls.prototype.create)}}class ls{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?yy(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new jt(s,c,r)}}function yy(n,e){return n.replace(_y,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const _y=/\{\$([^}]+)}/g;function vy(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function kn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(ou(i)&&ou(a)){if(!kn(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function ou(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function us(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Iy(n,e){const t=new wy(n,e);return t.subscribe.bind(t)}class wy{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Ey(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Bo),s.error===void 0&&(s.error=Bo),s.complete===void 0&&(s.complete=Bo);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ey(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Bo(){}/**
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
 */function Ce(n){return n&&n._delegate?n._delegate:n}class Dn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const vn="[DEFAULT]";/**
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
 */class Ty{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new ry;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ay(e))try{this.getOrInitializeService({instanceIdentifier:vn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=vn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vn){return this.instances.has(e)}getOptions(e=vn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Sy(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=vn){return this.component?this.component.multipleInstances?e:vn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Sy(n){return n===vn?void 0:n}function Ay(n){return n.instantiationMode==="EAGER"}/**
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
 */class by{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ty(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */var se;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(se||(se={}));const Ry={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},xy=se.INFO,Cy={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},Py=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Cy[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ua{constructor(e){this.name=e,this._logLevel=xy,this._logHandler=Py,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ry[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const ky=(n,e)=>e.some(t=>n instanceof t);let au,cu;function Dy(){return au||(au=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Vy(){return cu||(cu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rd=new WeakMap,aa=new WeakMap,sd=new WeakMap,$o=new WeakMap,Ba=new WeakMap;function Ny(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Kt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&rd.set(t,n)}).catch(()=>{}),Ba.set(e,n),e}function Oy(n){if(aa.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});aa.set(n,e)}let ca={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return aa.get(n);if(e==="objectStoreNames")return n.objectStoreNames||sd.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Kt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function My(n){ca=n(ca)}function jy(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(zo(this),e,...t);return sd.set(r,e.sort?e.sort():[e]),Kt(r)}:Vy().includes(n)?function(...e){return n.apply(zo(this),e),Kt(rd.get(this))}:function(...e){return Kt(n.apply(zo(this),e))}}function Ly(n){return typeof n=="function"?jy(n):(n instanceof IDBTransaction&&Oy(n),ky(n,Dy())?new Proxy(n,ca):n)}function Kt(n){if(n instanceof IDBRequest)return Ny(n);if($o.has(n))return $o.get(n);const e=Ly(n);return e!==n&&($o.set(n,e),Ba.set(e,n)),e}const zo=n=>Ba.get(n);function Fy(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=Kt(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Kt(a.result),u.oldVersion,u.newVersion,Kt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const Uy=["get","getKey","getAll","getAllKeys","count"],By=["put","add","delete","clear"],qo=new Map;function lu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(qo.get(e))return qo.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=By.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Uy.includes(t)))return;const i=async function(a,...c){const u=this.transaction(a,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),s&&u.done]))[0]};return qo.set(e,i),i}My(n=>({...n,get:(e,t,r)=>lu(e,t)||n.get(e,t,r),has:(e,t)=>!!lu(e,t)||n.has(e,t)}));/**
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
 */class $y{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(zy(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function zy(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const la="@firebase/app",uu="0.14.0";/**
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
 */const kt=new Ua("@firebase/app"),qy="@firebase/app-compat",Wy="@firebase/analytics-compat",Hy="@firebase/analytics",Gy="@firebase/app-check-compat",Ky="@firebase/app-check",Qy="@firebase/auth",Jy="@firebase/auth-compat",Yy="@firebase/database",Xy="@firebase/data-connect",Zy="@firebase/database-compat",e_="@firebase/functions",t_="@firebase/functions-compat",n_="@firebase/installations",r_="@firebase/installations-compat",s_="@firebase/messaging",i_="@firebase/messaging-compat",o_="@firebase/performance",a_="@firebase/performance-compat",c_="@firebase/remote-config",l_="@firebase/remote-config-compat",u_="@firebase/storage",h_="@firebase/storage-compat",d_="@firebase/firestore",f_="@firebase/ai",p_="@firebase/firestore-compat",m_="firebase",g_="12.0.0";/**
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
 */const ua="[DEFAULT]",y_={[la]:"fire-core",[qy]:"fire-core-compat",[Hy]:"fire-analytics",[Wy]:"fire-analytics-compat",[Ky]:"fire-app-check",[Gy]:"fire-app-check-compat",[Qy]:"fire-auth",[Jy]:"fire-auth-compat",[Yy]:"fire-rtdb",[Xy]:"fire-data-connect",[Zy]:"fire-rtdb-compat",[e_]:"fire-fn",[t_]:"fire-fn-compat",[n_]:"fire-iid",[r_]:"fire-iid-compat",[s_]:"fire-fcm",[i_]:"fire-fcm-compat",[o_]:"fire-perf",[a_]:"fire-perf-compat",[c_]:"fire-rc",[l_]:"fire-rc-compat",[u_]:"fire-gcs",[h_]:"fire-gcs-compat",[d_]:"fire-fst",[p_]:"fire-fst-compat",[f_]:"fire-vertex","fire-js":"fire-js",[m_]:"fire-js-all"};/**
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
 */const Yr=new Map,__=new Map,ha=new Map;function hu(n,e){try{n.container.addComponent(e)}catch(t){kt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function sr(n){const e=n.name;if(ha.has(e))return kt.debug(`There were multiple attempts to register component ${e}.`),!1;ha.set(e,n);for(const t of Yr.values())hu(t,n);for(const t of __.values())hu(t,n);return!0}function $a(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ot(n){return n==null?!1:n.settings!==void 0}/**
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
 */const v_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Qt=new ls("app","Firebase",v_);/**
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
 */class I_{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qt.create("app-deleted",{appName:this._name})}}/**
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
 */const mr=g_;function Qs(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:ua,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Qt.create("bad-app-name",{appName:String(s)});if(t||(t=Zh()),!t)throw Qt.create("no-options");const i=Yr.get(s);if(i){if(kn(t,i.options)&&kn(r,i.config))return i;throw Qt.create("duplicate-app",{appName:s})}const a=new by(s);for(const u of ha.values())a.addComponent(u);const c=new I_(t,r,a);return Yr.set(s,c),c}function $r(n=ua){const e=Yr.get(n);if(!e&&n===ua&&Zh())return Qs();if(!e)throw Qt.create("no-app",{appName:n});return e}function Wo(){return Array.from(Yr.values())}function Jt(n,e,t){let r=y_[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),kt.warn(a.join(" "));return}sr(new Dn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const w_="firebase-heartbeat-database",E_=1,Xr="firebase-heartbeat-store";let Ho=null;function id(){return Ho||(Ho=Fy(w_,E_,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Xr)}catch(t){console.warn(t)}}}}).catch(n=>{throw Qt.create("idb-open",{originalErrorMessage:n.message})})),Ho}async function T_(n){try{const t=(await id()).transaction(Xr),r=await t.objectStore(Xr).get(od(n));return await t.done,r}catch(e){if(e instanceof jt)kt.warn(e.message);else{const t=Qt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});kt.warn(t.message)}}}async function du(n,e){try{const r=(await id()).transaction(Xr,"readwrite");await r.objectStore(Xr).put(e,od(n)),await r.done}catch(t){if(t instanceof jt)kt.warn(t.message);else{const r=Qt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});kt.warn(r.message)}}}function od(n){return`${n.name}!${n.options.appId}`}/**
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
 */const S_=1024,A_=30;class b_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new x_(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=fu();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>A_){const a=C_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){kt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=fu(),{heartbeatsToSend:r,unsentEntries:s}=R_(this._heartbeatsCache.heartbeats),i=ci(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return kt.warn(t),""}}}function fu(){return new Date().toISOString().substring(0,10)}function R_(n,e=S_){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),pu(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),pu(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class x_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return py()?my().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await T_(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return du(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return du(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function pu(n){return ci(JSON.stringify({version:2,heartbeats:n})).length}function C_(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function P_(n){sr(new Dn("platform-logger",e=>new $y(e),"PRIVATE")),sr(new Dn("heartbeat",e=>new b_(e),"PRIVATE")),Jt(la,uu,n),Jt(la,uu,"esm2020"),Jt("fire-js","")}P_("");var k_="firebase",D_="12.0.0";/**
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
 */Jt(k_,D_,"app");var mu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yt,ad;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,_){function I(){}I.prototype=_.prototype,A.D=_.prototype,A.prototype=new I,A.prototype.constructor=A,A.C=function(E,S,b){for(var v=Array(arguments.length-2),re=2;re<arguments.length;re++)v[re-2]=arguments[re];return _.prototype[S].apply(E,v)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,_,I){I||(I=0);var E=Array(16);if(typeof _=="string")for(var S=0;16>S;++S)E[S]=_.charCodeAt(I++)|_.charCodeAt(I++)<<8|_.charCodeAt(I++)<<16|_.charCodeAt(I++)<<24;else for(S=0;16>S;++S)E[S]=_[I++]|_[I++]<<8|_[I++]<<16|_[I++]<<24;_=A.g[0],I=A.g[1],S=A.g[2];var b=A.g[3],v=_+(b^I&(S^b))+E[0]+3614090360&4294967295;_=I+(v<<7&4294967295|v>>>25),v=b+(S^_&(I^S))+E[1]+3905402710&4294967295,b=_+(v<<12&4294967295|v>>>20),v=S+(I^b&(_^I))+E[2]+606105819&4294967295,S=b+(v<<17&4294967295|v>>>15),v=I+(_^S&(b^_))+E[3]+3250441966&4294967295,I=S+(v<<22&4294967295|v>>>10),v=_+(b^I&(S^b))+E[4]+4118548399&4294967295,_=I+(v<<7&4294967295|v>>>25),v=b+(S^_&(I^S))+E[5]+1200080426&4294967295,b=_+(v<<12&4294967295|v>>>20),v=S+(I^b&(_^I))+E[6]+2821735955&4294967295,S=b+(v<<17&4294967295|v>>>15),v=I+(_^S&(b^_))+E[7]+4249261313&4294967295,I=S+(v<<22&4294967295|v>>>10),v=_+(b^I&(S^b))+E[8]+1770035416&4294967295,_=I+(v<<7&4294967295|v>>>25),v=b+(S^_&(I^S))+E[9]+2336552879&4294967295,b=_+(v<<12&4294967295|v>>>20),v=S+(I^b&(_^I))+E[10]+4294925233&4294967295,S=b+(v<<17&4294967295|v>>>15),v=I+(_^S&(b^_))+E[11]+2304563134&4294967295,I=S+(v<<22&4294967295|v>>>10),v=_+(b^I&(S^b))+E[12]+1804603682&4294967295,_=I+(v<<7&4294967295|v>>>25),v=b+(S^_&(I^S))+E[13]+4254626195&4294967295,b=_+(v<<12&4294967295|v>>>20),v=S+(I^b&(_^I))+E[14]+2792965006&4294967295,S=b+(v<<17&4294967295|v>>>15),v=I+(_^S&(b^_))+E[15]+1236535329&4294967295,I=S+(v<<22&4294967295|v>>>10),v=_+(S^b&(I^S))+E[1]+4129170786&4294967295,_=I+(v<<5&4294967295|v>>>27),v=b+(I^S&(_^I))+E[6]+3225465664&4294967295,b=_+(v<<9&4294967295|v>>>23),v=S+(_^I&(b^_))+E[11]+643717713&4294967295,S=b+(v<<14&4294967295|v>>>18),v=I+(b^_&(S^b))+E[0]+3921069994&4294967295,I=S+(v<<20&4294967295|v>>>12),v=_+(S^b&(I^S))+E[5]+3593408605&4294967295,_=I+(v<<5&4294967295|v>>>27),v=b+(I^S&(_^I))+E[10]+38016083&4294967295,b=_+(v<<9&4294967295|v>>>23),v=S+(_^I&(b^_))+E[15]+3634488961&4294967295,S=b+(v<<14&4294967295|v>>>18),v=I+(b^_&(S^b))+E[4]+3889429448&4294967295,I=S+(v<<20&4294967295|v>>>12),v=_+(S^b&(I^S))+E[9]+568446438&4294967295,_=I+(v<<5&4294967295|v>>>27),v=b+(I^S&(_^I))+E[14]+3275163606&4294967295,b=_+(v<<9&4294967295|v>>>23),v=S+(_^I&(b^_))+E[3]+4107603335&4294967295,S=b+(v<<14&4294967295|v>>>18),v=I+(b^_&(S^b))+E[8]+1163531501&4294967295,I=S+(v<<20&4294967295|v>>>12),v=_+(S^b&(I^S))+E[13]+2850285829&4294967295,_=I+(v<<5&4294967295|v>>>27),v=b+(I^S&(_^I))+E[2]+4243563512&4294967295,b=_+(v<<9&4294967295|v>>>23),v=S+(_^I&(b^_))+E[7]+1735328473&4294967295,S=b+(v<<14&4294967295|v>>>18),v=I+(b^_&(S^b))+E[12]+2368359562&4294967295,I=S+(v<<20&4294967295|v>>>12),v=_+(I^S^b)+E[5]+4294588738&4294967295,_=I+(v<<4&4294967295|v>>>28),v=b+(_^I^S)+E[8]+2272392833&4294967295,b=_+(v<<11&4294967295|v>>>21),v=S+(b^_^I)+E[11]+1839030562&4294967295,S=b+(v<<16&4294967295|v>>>16),v=I+(S^b^_)+E[14]+4259657740&4294967295,I=S+(v<<23&4294967295|v>>>9),v=_+(I^S^b)+E[1]+2763975236&4294967295,_=I+(v<<4&4294967295|v>>>28),v=b+(_^I^S)+E[4]+1272893353&4294967295,b=_+(v<<11&4294967295|v>>>21),v=S+(b^_^I)+E[7]+4139469664&4294967295,S=b+(v<<16&4294967295|v>>>16),v=I+(S^b^_)+E[10]+3200236656&4294967295,I=S+(v<<23&4294967295|v>>>9),v=_+(I^S^b)+E[13]+681279174&4294967295,_=I+(v<<4&4294967295|v>>>28),v=b+(_^I^S)+E[0]+3936430074&4294967295,b=_+(v<<11&4294967295|v>>>21),v=S+(b^_^I)+E[3]+3572445317&4294967295,S=b+(v<<16&4294967295|v>>>16),v=I+(S^b^_)+E[6]+76029189&4294967295,I=S+(v<<23&4294967295|v>>>9),v=_+(I^S^b)+E[9]+3654602809&4294967295,_=I+(v<<4&4294967295|v>>>28),v=b+(_^I^S)+E[12]+3873151461&4294967295,b=_+(v<<11&4294967295|v>>>21),v=S+(b^_^I)+E[15]+530742520&4294967295,S=b+(v<<16&4294967295|v>>>16),v=I+(S^b^_)+E[2]+3299628645&4294967295,I=S+(v<<23&4294967295|v>>>9),v=_+(S^(I|~b))+E[0]+4096336452&4294967295,_=I+(v<<6&4294967295|v>>>26),v=b+(I^(_|~S))+E[7]+1126891415&4294967295,b=_+(v<<10&4294967295|v>>>22),v=S+(_^(b|~I))+E[14]+2878612391&4294967295,S=b+(v<<15&4294967295|v>>>17),v=I+(b^(S|~_))+E[5]+4237533241&4294967295,I=S+(v<<21&4294967295|v>>>11),v=_+(S^(I|~b))+E[12]+1700485571&4294967295,_=I+(v<<6&4294967295|v>>>26),v=b+(I^(_|~S))+E[3]+2399980690&4294967295,b=_+(v<<10&4294967295|v>>>22),v=S+(_^(b|~I))+E[10]+4293915773&4294967295,S=b+(v<<15&4294967295|v>>>17),v=I+(b^(S|~_))+E[1]+2240044497&4294967295,I=S+(v<<21&4294967295|v>>>11),v=_+(S^(I|~b))+E[8]+1873313359&4294967295,_=I+(v<<6&4294967295|v>>>26),v=b+(I^(_|~S))+E[15]+4264355552&4294967295,b=_+(v<<10&4294967295|v>>>22),v=S+(_^(b|~I))+E[6]+2734768916&4294967295,S=b+(v<<15&4294967295|v>>>17),v=I+(b^(S|~_))+E[13]+1309151649&4294967295,I=S+(v<<21&4294967295|v>>>11),v=_+(S^(I|~b))+E[4]+4149444226&4294967295,_=I+(v<<6&4294967295|v>>>26),v=b+(I^(_|~S))+E[11]+3174756917&4294967295,b=_+(v<<10&4294967295|v>>>22),v=S+(_^(b|~I))+E[2]+718787259&4294967295,S=b+(v<<15&4294967295|v>>>17),v=I+(b^(S|~_))+E[9]+3951481745&4294967295,A.g[0]=A.g[0]+_&4294967295,A.g[1]=A.g[1]+(S+(v<<21&4294967295|v>>>11))&4294967295,A.g[2]=A.g[2]+S&4294967295,A.g[3]=A.g[3]+b&4294967295}r.prototype.u=function(A,_){_===void 0&&(_=A.length);for(var I=_-this.blockSize,E=this.B,S=this.h,b=0;b<_;){if(S==0)for(;b<=I;)s(this,A,b),b+=this.blockSize;if(typeof A=="string"){for(;b<_;)if(E[S++]=A.charCodeAt(b++),S==this.blockSize){s(this,E),S=0;break}}else for(;b<_;)if(E[S++]=A[b++],S==this.blockSize){s(this,E),S=0;break}}this.h=S,this.o+=_},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var _=1;_<A.length-8;++_)A[_]=0;var I=8*this.o;for(_=A.length-8;_<A.length;++_)A[_]=I&255,I/=256;for(this.u(A),A=Array(16),_=I=0;4>_;++_)for(var E=0;32>E;E+=8)A[I++]=this.g[_]>>>E&255;return A};function i(A,_){var I=c;return Object.prototype.hasOwnProperty.call(I,A)?I[A]:I[A]=_(A)}function a(A,_){this.h=_;for(var I=[],E=!0,S=A.length-1;0<=S;S--){var b=A[S]|0;E&&b==_||(I[S]=b,E=!1)}this.g=I}var c={};function u(A){return-128<=A&&128>A?i(A,function(_){return new a([_|0],0>_?-1:0)}):new a([A|0],0>A?-1:0)}function h(A){if(isNaN(A)||!isFinite(A))return m;if(0>A)return T(h(-A));for(var _=[],I=1,E=0;A>=I;E++)_[E]=A/I|0,I*=4294967296;return new a(_,0)}function f(A,_){if(A.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(A.charAt(0)=="-")return T(f(A.substring(1),_));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=h(Math.pow(_,8)),E=m,S=0;S<A.length;S+=8){var b=Math.min(8,A.length-S),v=parseInt(A.substring(S,S+b),_);8>b?(b=h(Math.pow(_,b)),E=E.j(b).add(h(v))):(E=E.j(I),E=E.add(h(v)))}return E}var m=u(0),y=u(1),w=u(16777216);n=a.prototype,n.m=function(){if(x(this))return-T(this).m();for(var A=0,_=1,I=0;I<this.g.length;I++){var E=this.i(I);A+=(0<=E?E:4294967296+E)*_,_*=4294967296}return A},n.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(P(this))return"0";if(x(this))return"-"+T(this).toString(A);for(var _=h(Math.pow(A,6)),I=this,E="";;){var S=G(I,_).g;I=L(I,S.j(_));var b=((0<I.g.length?I.g[0]:I.h)>>>0).toString(A);if(I=S,P(I))return b+E;for(;6>b.length;)b="0"+b;E=b+E}},n.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function P(A){if(A.h!=0)return!1;for(var _=0;_<A.g.length;_++)if(A.g[_]!=0)return!1;return!0}function x(A){return A.h==-1}n.l=function(A){return A=L(this,A),x(A)?-1:P(A)?0:1};function T(A){for(var _=A.g.length,I=[],E=0;E<_;E++)I[E]=~A.g[E];return new a(I,~A.h).add(y)}n.abs=function(){return x(this)?T(this):this},n.add=function(A){for(var _=Math.max(this.g.length,A.g.length),I=[],E=0,S=0;S<=_;S++){var b=E+(this.i(S)&65535)+(A.i(S)&65535),v=(b>>>16)+(this.i(S)>>>16)+(A.i(S)>>>16);E=v>>>16,b&=65535,v&=65535,I[S]=v<<16|b}return new a(I,I[I.length-1]&-2147483648?-1:0)};function L(A,_){return A.add(T(_))}n.j=function(A){if(P(this)||P(A))return m;if(x(this))return x(A)?T(this).j(T(A)):T(T(this).j(A));if(x(A))return T(this.j(T(A)));if(0>this.l(w)&&0>A.l(w))return h(this.m()*A.m());for(var _=this.g.length+A.g.length,I=[],E=0;E<2*_;E++)I[E]=0;for(E=0;E<this.g.length;E++)for(var S=0;S<A.g.length;S++){var b=this.i(E)>>>16,v=this.i(E)&65535,re=A.i(S)>>>16,J=A.i(S)&65535;I[2*E+2*S]+=v*J,U(I,2*E+2*S),I[2*E+2*S+1]+=b*J,U(I,2*E+2*S+1),I[2*E+2*S+1]+=v*re,U(I,2*E+2*S+1),I[2*E+2*S+2]+=b*re,U(I,2*E+2*S+2)}for(E=0;E<_;E++)I[E]=I[2*E+1]<<16|I[2*E];for(E=_;E<2*_;E++)I[E]=0;return new a(I,0)};function U(A,_){for(;(A[_]&65535)!=A[_];)A[_+1]+=A[_]>>>16,A[_]&=65535,_++}function z(A,_){this.g=A,this.h=_}function G(A,_){if(P(_))throw Error("division by zero");if(P(A))return new z(m,m);if(x(A))return _=G(T(A),_),new z(T(_.g),T(_.h));if(x(_))return _=G(A,T(_)),new z(T(_.g),_.h);if(30<A.g.length){if(x(A)||x(_))throw Error("slowDivide_ only works with positive integers.");for(var I=y,E=_;0>=E.l(A);)I=ce(I),E=ce(E);var S=de(I,1),b=de(E,1);for(E=de(E,2),I=de(I,2);!P(E);){var v=b.add(E);0>=v.l(A)&&(S=S.add(I),b=v),E=de(E,1),I=de(I,1)}return _=L(A,S.j(_)),new z(S,_)}for(S=m;0<=A.l(_);){for(I=Math.max(1,Math.floor(A.m()/_.m())),E=Math.ceil(Math.log(I)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),b=h(I),v=b.j(_);x(v)||0<v.l(A);)I-=E,b=h(I),v=b.j(_);P(b)&&(b=y),S=S.add(b),A=L(A,v)}return new z(S,A)}n.A=function(A){return G(this,A).h},n.and=function(A){for(var _=Math.max(this.g.length,A.g.length),I=[],E=0;E<_;E++)I[E]=this.i(E)&A.i(E);return new a(I,this.h&A.h)},n.or=function(A){for(var _=Math.max(this.g.length,A.g.length),I=[],E=0;E<_;E++)I[E]=this.i(E)|A.i(E);return new a(I,this.h|A.h)},n.xor=function(A){for(var _=Math.max(this.g.length,A.g.length),I=[],E=0;E<_;E++)I[E]=this.i(E)^A.i(E);return new a(I,this.h^A.h)};function ce(A){for(var _=A.g.length+1,I=[],E=0;E<_;E++)I[E]=A.i(E)<<1|A.i(E-1)>>>31;return new a(I,A.h)}function de(A,_){var I=_>>5;_%=32;for(var E=A.g.length-I,S=[],b=0;b<E;b++)S[b]=0<_?A.i(b+I)>>>_|A.i(b+I+1)<<32-_:A.i(b+I);return new a(S,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,ad=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,Yt=a}).apply(typeof mu<"u"?mu:typeof self<"u"?self:typeof window<"u"?window:{});var $s=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cd,jr,ld,Js,da,ud,hd,dd;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,d){return o==Array.prototype||o==Object.prototype||(o[l]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof $s=="object"&&$s];for(var l=0;l<o.length;++l){var d=o[l];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(o,l){if(l)e:{var d=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var R=o[g];if(!(R in d))break e;d=d[R]}o=o[o.length-1],g=d[o],l=l(g),l!=g&&l!=null&&e(d,o,{configurable:!0,writable:!0,value:l})}}function i(o,l){o instanceof String&&(o+="");var d=0,g=!1,R={next:function(){if(!g&&d<o.length){var C=d++;return{value:l(C,o[C]),done:!1}}return g=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}s("Array.prototype.values",function(o){return o||function(){return i(this,function(l,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function u(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function h(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function f(o,l,d){return o.call.apply(o.bind,arguments)}function m(o,l,d){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,g),o.apply(l,R)}}return function(){return o.apply(l,arguments)}}function y(o,l,d){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,y.apply(null,arguments)}function w(o,l){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function P(o,l){function d(){}d.prototype=l.prototype,o.aa=l.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(g,R,C){for(var B=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)B[pe-2]=arguments[pe];return l.prototype[R].apply(g,B)}}function x(o){const l=o.length;if(0<l){const d=Array(l);for(let g=0;g<l;g++)d[g]=o[g];return d}return[]}function T(o,l){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(u(g)){const R=o.length||0,C=g.length||0;o.length=R+C;for(let B=0;B<C;B++)o[R+B]=g[B]}else o.push(g)}}class L{constructor(l,d){this.i=l,this.j=d,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function U(o){return/^[\s\xa0]*$/.test(o)}function z(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function G(o){return G[" "](o),o}G[" "]=function(){};var ce=z().indexOf("Gecko")!=-1&&!(z().toLowerCase().indexOf("webkit")!=-1&&z().indexOf("Edge")==-1)&&!(z().indexOf("Trident")!=-1||z().indexOf("MSIE")!=-1)&&z().indexOf("Edge")==-1;function de(o,l,d){for(const g in o)l.call(d,o[g],g,o)}function A(o,l){for(const d in o)l.call(void 0,o[d],d,o)}function _(o){const l={};for(const d in o)l[d]=o[d];return l}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(o,l){let d,g;for(let R=1;R<arguments.length;R++){g=arguments[R];for(d in g)o[d]=g[d];for(let C=0;C<I.length;C++)d=I[C],Object.prototype.hasOwnProperty.call(g,d)&&(o[d]=g[d])}}function S(o){var l=1;o=o.split(":");const d=[];for(;0<l&&o.length;)d.push(o.shift()),l--;return o.length&&d.push(o.join(":")),d}function b(o){c.setTimeout(()=>{throw o},0)}function v(){var o=hn;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class re{constructor(){this.h=this.g=null}add(l,d){const g=J.get();g.set(l,d),this.h?this.h.next=g:this.g=g,this.h=g}}var J=new L(()=>new Pe,o=>o.reset());class Pe{constructor(){this.next=this.g=this.h=null}set(l,d){this.h=l,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let fe,nt=!1,hn=new re,M=()=>{const o=c.Promise.resolve(void 0);fe=()=>{o.then(k)}};var k=()=>{for(var o;o=v();){try{o.h.call(o.g)}catch(d){b(d)}var l=J;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}nt=!1};function j(){this.s=this.s,this.C=this.C}j.prototype.s=!1,j.prototype.ma=function(){this.s||(this.s=!0,this.N())},j.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function F(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}F.prototype.h=function(){this.defaultPrevented=!0};var D=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};c.addEventListener("test",d,l),c.removeEventListener("test",d,l)}catch{}return o}();function ne(o,l){if(F.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(ce){e:{try{G(l.nodeName);var R=!0;break e}catch{}R=!1}R||(l=null)}}else d=="mouseover"?l=o.fromElement:d=="mouseout"&&(l=o.toElement);this.relatedTarget=l,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:po[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&ne.aa.h.call(this)}}P(ne,F);var po={2:"touch",3:"pen",4:"mouse"};ne.prototype.h=function(){ne.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var dn="closure_listenable_"+(1e6*Math.random()|0),rt=0;function mo(o,l,d,g,R){this.listener=o,this.proxy=null,this.src=l,this.type=d,this.capture=!!g,this.ha=R,this.key=++rt,this.da=this.fa=!1}function It(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Is(o){this.src=o,this.g={},this.h=0}Is.prototype.add=function(o,l,d,g,R){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var B=yo(o,l,g,R);return-1<B?(l=o[B],d||(l.fa=!1)):(l=new mo(l,this.src,C,!!g,R),l.fa=d,o.push(l)),l};function go(o,l){var d=l.type;if(d in o.g){var g=o.g[d],R=Array.prototype.indexOf.call(g,l,void 0),C;(C=0<=R)&&Array.prototype.splice.call(g,R,1),C&&(It(l),o.g[d].length==0&&(delete o.g[d],o.h--))}}function yo(o,l,d,g){for(var R=0;R<o.length;++R){var C=o[R];if(!C.da&&C.listener==l&&C.capture==!!d&&C.ha==g)return R}return-1}var _o="closure_lm_"+(1e6*Math.random()|0),vo={};function zc(o,l,d,g,R){if(g&&g.once)return Wc(o,l,d,g,R);if(Array.isArray(l)){for(var C=0;C<l.length;C++)zc(o,l[C],d,g,R);return null}return d=To(d),o&&o[dn]?o.K(l,d,h(g)?!!g.capture:!!g,R):qc(o,l,d,!1,g,R)}function qc(o,l,d,g,R,C){if(!l)throw Error("Invalid event type");var B=h(R)?!!R.capture:!!R,pe=wo(o);if(pe||(o[_o]=pe=new Is(o)),d=pe.add(l,d,g,B,C),d.proxy)return d;if(g=Rp(),d.proxy=g,g.src=o,g.listener=d,o.addEventListener)D||(R=B),R===void 0&&(R=!1),o.addEventListener(l.toString(),g,R);else if(o.attachEvent)o.attachEvent(Gc(l.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Rp(){function o(d){return l.call(o.src,o.listener,d)}const l=xp;return o}function Wc(o,l,d,g,R){if(Array.isArray(l)){for(var C=0;C<l.length;C++)Wc(o,l[C],d,g,R);return null}return d=To(d),o&&o[dn]?o.L(l,d,h(g)?!!g.capture:!!g,R):qc(o,l,d,!0,g,R)}function Hc(o,l,d,g,R){if(Array.isArray(l))for(var C=0;C<l.length;C++)Hc(o,l[C],d,g,R);else g=h(g)?!!g.capture:!!g,d=To(d),o&&o[dn]?(o=o.i,l=String(l).toString(),l in o.g&&(C=o.g[l],d=yo(C,d,g,R),-1<d&&(It(C[d]),Array.prototype.splice.call(C,d,1),C.length==0&&(delete o.g[l],o.h--)))):o&&(o=wo(o))&&(l=o.g[l.toString()],o=-1,l&&(o=yo(l,d,g,R)),(d=-1<o?l[o]:null)&&Io(d))}function Io(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[dn])go(l.i,o);else{var d=o.type,g=o.proxy;l.removeEventListener?l.removeEventListener(d,g,o.capture):l.detachEvent?l.detachEvent(Gc(d),g):l.addListener&&l.removeListener&&l.removeListener(g),(d=wo(l))?(go(d,o),d.h==0&&(d.src=null,l[_o]=null)):It(o)}}}function Gc(o){return o in vo?vo[o]:vo[o]="on"+o}function xp(o,l){if(o.da)o=!0;else{l=new ne(l,this);var d=o.listener,g=o.ha||o.src;o.fa&&Io(o),o=d.call(g,l)}return o}function wo(o){return o=o[_o],o instanceof Is?o:null}var Eo="__closure_events_fn_"+(1e9*Math.random()>>>0);function To(o){return typeof o=="function"?o:(o[Eo]||(o[Eo]=function(l){return o.handleEvent(l)}),o[Eo])}function Oe(){j.call(this),this.i=new Is(this),this.M=this,this.F=null}P(Oe,j),Oe.prototype[dn]=!0,Oe.prototype.removeEventListener=function(o,l,d,g){Hc(this,o,l,d,g)};function ze(o,l){var d,g=o.F;if(g)for(d=[];g;g=g.F)d.push(g);if(o=o.M,g=l.type||l,typeof l=="string")l=new F(l,o);else if(l instanceof F)l.target=l.target||o;else{var R=l;l=new F(g,o),E(l,R)}if(R=!0,d)for(var C=d.length-1;0<=C;C--){var B=l.g=d[C];R=ws(B,g,!0,l)&&R}if(B=l.g=o,R=ws(B,g,!0,l)&&R,R=ws(B,g,!1,l)&&R,d)for(C=0;C<d.length;C++)B=l.g=d[C],R=ws(B,g,!1,l)&&R}Oe.prototype.N=function(){if(Oe.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var d=o.g[l],g=0;g<d.length;g++)It(d[g]);delete o.g[l],o.h--}}this.F=null},Oe.prototype.K=function(o,l,d,g){return this.i.add(String(o),l,!1,d,g)},Oe.prototype.L=function(o,l,d,g){return this.i.add(String(o),l,!0,d,g)};function ws(o,l,d,g){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var R=!0,C=0;C<l.length;++C){var B=l[C];if(B&&!B.da&&B.capture==d){var pe=B.listener,ke=B.ha||B.src;B.fa&&go(o.i,B),R=pe.call(ke,g)!==!1&&R}}return R&&!g.defaultPrevented}function Kc(o,l,d){if(typeof o=="function")d&&(o=y(o,d));else if(o&&typeof o.handleEvent=="function")o=y(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(o,l||0)}function Qc(o){o.g=Kc(()=>{o.g=null,o.i&&(o.i=!1,Qc(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class Cp extends j{constructor(l,d){super(),this.m=l,this.l=d,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Qc(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Er(o){j.call(this),this.h=o,this.g={}}P(Er,j);var Jc=[];function Yc(o){de(o.g,function(l,d){this.g.hasOwnProperty(d)&&Io(l)},o),o.g={}}Er.prototype.N=function(){Er.aa.N.call(this),Yc(this)},Er.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var So=c.JSON.stringify,Pp=c.JSON.parse,kp=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function Ao(){}Ao.prototype.h=null;function Xc(o){return o.h||(o.h=o.i())}function Zc(){}var Tr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function bo(){F.call(this,"d")}P(bo,F);function Ro(){F.call(this,"c")}P(Ro,F);var fn={},el=null;function Es(){return el=el||new Oe}fn.La="serverreachability";function tl(o){F.call(this,fn.La,o)}P(tl,F);function Sr(o){const l=Es();ze(l,new tl(l))}fn.STAT_EVENT="statevent";function nl(o,l){F.call(this,fn.STAT_EVENT,o),this.stat=l}P(nl,F);function qe(o){const l=Es();ze(l,new nl(l,o))}fn.Ma="timingevent";function rl(o,l){F.call(this,fn.Ma,o),this.size=l}P(rl,F);function Ar(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},l)}function br(){this.g=!0}br.prototype.xa=function(){this.g=!1};function Dp(o,l,d,g,R,C){o.info(function(){if(o.g)if(C)for(var B="",pe=C.split("&"),ke=0;ke<pe.length;ke++){var le=pe[ke].split("=");if(1<le.length){var Me=le[0];le=le[1];var je=Me.split("_");B=2<=je.length&&je[1]=="type"?B+(Me+"="+le+"&"):B+(Me+"=redacted&")}}else B=null;else B=C;return"XMLHTTP REQ ("+g+") [attempt "+R+"]: "+l+`
`+d+`
`+B})}function Vp(o,l,d,g,R,C,B){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+R+"]: "+l+`
`+d+`
`+C+" "+B})}function Fn(o,l,d,g){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+Op(o,d)+(g?" "+g:"")})}function Np(o,l){o.info(function(){return"TIMEOUT: "+l})}br.prototype.info=function(){};function Op(o,l){if(!o.g)return l;if(!l)return null;try{var d=JSON.parse(l);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var g=d[o];if(!(2>g.length)){var R=g[1];if(Array.isArray(R)&&!(1>R.length)){var C=R[0];if(C!="noop"&&C!="stop"&&C!="close")for(var B=1;B<R.length;B++)R[B]=""}}}}return So(d)}catch{return l}}var Ts={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},sl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},xo;function Ss(){}P(Ss,Ao),Ss.prototype.g=function(){return new XMLHttpRequest},Ss.prototype.i=function(){return{}},xo=new Ss;function Ft(o,l,d,g){this.j=o,this.i=l,this.l=d,this.R=g||1,this.U=new Er(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new il}function il(){this.i=null,this.g="",this.h=!1}var ol={},Co={};function Po(o,l,d){o.L=1,o.v=xs(wt(l)),o.m=d,o.P=!0,al(o,null)}function al(o,l){o.F=Date.now(),As(o),o.A=wt(o.v);var d=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),wl(d.i,"t",g),o.C=0,d=o.j.J,o.h=new il,o.g=Fl(o.j,d?l:null,!o.m),0<o.O&&(o.M=new Cp(y(o.Y,o,o.g),o.O)),l=o.U,d=o.g,g=o.ca;var R="readystatechange";Array.isArray(R)||(R&&(Jc[0]=R.toString()),R=Jc);for(var C=0;C<R.length;C++){var B=zc(d,R[C],g||l.handleEvent,!1,l.h||l);if(!B)break;l.g[B.key]=B}l=o.H?_(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),Sr(),Dp(o.i,o.u,o.A,o.l,o.R,o.m)}Ft.prototype.ca=function(o){o=o.target;const l=this.M;l&&Et(o)==3?l.j():this.Y(o)},Ft.prototype.Y=function(o){try{if(o==this.g)e:{const je=Et(this.g);var l=this.g.Ba();const $n=this.g.Z();if(!(3>je)&&(je!=3||this.g&&(this.h.h||this.g.oa()||xl(this.g)))){this.J||je!=4||l==7||(l==8||0>=$n?Sr(3):Sr(2)),ko(this);var d=this.g.Z();this.X=d;t:if(cl(this)){var g=xl(this.g);o="";var R=g.length,C=Et(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){pn(this),Rr(this);var B="";break t}this.h.i=new c.TextDecoder}for(l=0;l<R;l++)this.h.h=!0,o+=this.h.i.decode(g[l],{stream:!(C&&l==R-1)});g.length=0,this.h.g+=o,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=d==200,Vp(this.i,this.u,this.A,this.l,this.R,je,d),this.o){if(this.T&&!this.K){t:{if(this.g){var pe,ke=this.g;if((pe=ke.g?ke.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(pe)){var le=pe;break t}}le=null}if(d=le)Fn(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Do(this,d);else{this.o=!1,this.s=3,qe(12),pn(this),Rr(this);break e}}if(this.P){d=!0;let st;for(;!this.J&&this.C<B.length;)if(st=Mp(this,B),st==Co){je==4&&(this.s=4,qe(14),d=!1),Fn(this.i,this.l,null,"[Incomplete Response]");break}else if(st==ol){this.s=4,qe(15),Fn(this.i,this.l,B,"[Invalid Chunk]"),d=!1;break}else Fn(this.i,this.l,st,null),Do(this,st);if(cl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),je!=4||B.length!=0||this.h.h||(this.s=1,qe(16),d=!1),this.o=this.o&&d,!d)Fn(this.i,this.l,B,"[Invalid Chunked Response]"),pn(this),Rr(this);else if(0<B.length&&!this.W){this.W=!0;var Me=this.j;Me.g==this&&Me.ba&&!Me.M&&(Me.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),Lo(Me),Me.M=!0,qe(11))}}else Fn(this.i,this.l,B,null),Do(this,B);je==4&&pn(this),this.o&&!this.J&&(je==4?Ol(this.j,this):(this.o=!1,As(this)))}else Zp(this.g),d==400&&0<B.indexOf("Unknown SID")?(this.s=3,qe(12)):(this.s=0,qe(13)),pn(this),Rr(this)}}}catch{}finally{}};function cl(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Mp(o,l){var d=o.C,g=l.indexOf(`
`,d);return g==-1?Co:(d=Number(l.substring(d,g)),isNaN(d)?ol:(g+=1,g+d>l.length?Co:(l=l.slice(g,g+d),o.C=g+d,l)))}Ft.prototype.cancel=function(){this.J=!0,pn(this)};function As(o){o.S=Date.now()+o.I,ll(o,o.I)}function ll(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Ar(y(o.ba,o),l)}function ko(o){o.B&&(c.clearTimeout(o.B),o.B=null)}Ft.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Np(this.i,this.A),this.L!=2&&(Sr(),qe(17)),pn(this),this.s=2,Rr(this)):ll(this,this.S-o)};function Rr(o){o.j.G==0||o.J||Ol(o.j,o)}function pn(o){ko(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,Yc(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function Do(o,l){try{var d=o.j;if(d.G!=0&&(d.g==o||Vo(d.h,o))){if(!o.K&&Vo(d.h,o)&&d.G==3){try{var g=d.Da.g.parse(l)}catch{g=null}if(Array.isArray(g)&&g.length==3){var R=g;if(R[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Ns(d),Ds(d);else break e;jo(d),qe(18)}}else d.za=R[1],0<d.za-d.T&&37500>R[2]&&d.F&&d.v==0&&!d.C&&(d.C=Ar(y(d.Za,d),6e3));if(1>=dl(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else gn(d,11)}else if((o.K||d.g==o)&&Ns(d),!U(l))for(R=d.Da.g.parse(l),l=0;l<R.length;l++){let le=R[l];if(d.T=le[0],le=le[1],d.G==2)if(le[0]=="c"){d.K=le[1],d.ia=le[2];const Me=le[3];Me!=null&&(d.la=Me,d.j.info("VER="+d.la));const je=le[4];je!=null&&(d.Aa=je,d.j.info("SVER="+d.Aa));const $n=le[5];$n!=null&&typeof $n=="number"&&0<$n&&(g=1.5*$n,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const st=o.g;if(st){const Ms=st.g?st.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ms){var C=g.h;C.g||Ms.indexOf("spdy")==-1&&Ms.indexOf("quic")==-1&&Ms.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(No(C,C.h),C.h=null))}if(g.D){const Fo=st.g?st.g.getResponseHeader("X-HTTP-Session-Id"):null;Fo&&(g.ya=Fo,ye(g.I,g.D,Fo))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var B=o;if(g.qa=Ll(g,g.J?g.ia:null,g.W),B.K){fl(g.h,B);var pe=B,ke=g.L;ke&&(pe.I=ke),pe.B&&(ko(pe),As(pe)),g.g=B}else Vl(g);0<d.i.length&&Vs(d)}else le[0]!="stop"&&le[0]!="close"||gn(d,7);else d.G==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?gn(d,7):Mo(d):le[0]!="noop"&&d.l&&d.l.ta(le),d.v=0)}}Sr(4)}catch{}}var jp=class{constructor(o,l){this.g=o,this.map=l}};function ul(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function hl(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function dl(o){return o.h?1:o.g?o.g.size:0}function Vo(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function No(o,l){o.g?o.g.add(l):o.h=l}function fl(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}ul.prototype.cancel=function(){if(this.i=pl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function pl(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const d of o.g.values())l=l.concat(d.D);return l}return x(o.i)}function Lp(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var l=[],d=o.length,g=0;g<d;g++)l.push(o[g]);return l}l=[],d=0;for(g in o)l[d++]=o[g];return l}function Fp(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var l=[];o=o.length;for(var d=0;d<o;d++)l.push(d);return l}l=[],d=0;for(const g in o)l[d++]=g;return l}}}function ml(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var d=Fp(o),g=Lp(o),R=g.length,C=0;C<R;C++)l.call(void 0,g[C],d&&d[C],o)}var gl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Up(o,l){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var g=o[d].indexOf("="),R=null;if(0<=g){var C=o[d].substring(0,g);R=o[d].substring(g+1)}else C=o[d];l(C,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function mn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof mn){this.h=o.h,bs(this,o.j),this.o=o.o,this.g=o.g,Rs(this,o.s),this.l=o.l;var l=o.i,d=new Pr;d.i=l.i,l.g&&(d.g=new Map(l.g),d.h=l.h),yl(this,d),this.m=o.m}else o&&(l=String(o).match(gl))?(this.h=!1,bs(this,l[1]||"",!0),this.o=xr(l[2]||""),this.g=xr(l[3]||"",!0),Rs(this,l[4]),this.l=xr(l[5]||"",!0),yl(this,l[6]||"",!0),this.m=xr(l[7]||"")):(this.h=!1,this.i=new Pr(null,this.h))}mn.prototype.toString=function(){var o=[],l=this.j;l&&o.push(Cr(l,_l,!0),":");var d=this.g;return(d||l=="file")&&(o.push("//"),(l=this.o)&&o.push(Cr(l,_l,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Cr(d,d.charAt(0)=="/"?zp:$p,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Cr(d,Wp)),o.join("")};function wt(o){return new mn(o)}function bs(o,l,d){o.j=d?xr(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function Rs(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function yl(o,l,d){l instanceof Pr?(o.i=l,Hp(o.i,o.h)):(d||(l=Cr(l,qp)),o.i=new Pr(l,o.h))}function ye(o,l,d){o.i.set(l,d)}function xs(o){return ye(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function xr(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Cr(o,l,d){return typeof o=="string"?(o=encodeURI(o).replace(l,Bp),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Bp(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var _l=/[#\/\?@]/g,$p=/[#\?:]/g,zp=/[#\?]/g,qp=/[#\?@]/g,Wp=/#/g;function Pr(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function Ut(o){o.g||(o.g=new Map,o.h=0,o.i&&Up(o.i,function(l,d){o.add(decodeURIComponent(l.replace(/\+/g," ")),d)}))}n=Pr.prototype,n.add=function(o,l){Ut(this),this.i=null,o=Un(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(l),this.h+=1,this};function vl(o,l){Ut(o),l=Un(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function Il(o,l){return Ut(o),l=Un(o,l),o.g.has(l)}n.forEach=function(o,l){Ut(this),this.g.forEach(function(d,g){d.forEach(function(R){o.call(l,R,g,this)},this)},this)},n.na=function(){Ut(this);const o=Array.from(this.g.values()),l=Array.from(this.g.keys()),d=[];for(let g=0;g<l.length;g++){const R=o[g];for(let C=0;C<R.length;C++)d.push(l[g])}return d},n.V=function(o){Ut(this);let l=[];if(typeof o=="string")Il(this,o)&&(l=l.concat(this.g.get(Un(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)l=l.concat(o[d])}return l},n.set=function(o,l){return Ut(this),this.i=null,o=Un(this,o),Il(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function wl(o,l,d){vl(o,l),0<d.length&&(o.i=null,o.g.set(Un(o,l),x(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(var d=0;d<l.length;d++){var g=l[d];const C=encodeURIComponent(String(g)),B=this.V(g);for(g=0;g<B.length;g++){var R=C;B[g]!==""&&(R+="="+encodeURIComponent(String(B[g]))),o.push(R)}}return this.i=o.join("&")};function Un(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function Hp(o,l){l&&!o.j&&(Ut(o),o.i=null,o.g.forEach(function(d,g){var R=g.toLowerCase();g!=R&&(vl(this,g),wl(this,R,d))},o)),o.j=l}function Gp(o,l){const d=new br;if(c.Image){const g=new Image;g.onload=w(Bt,d,"TestLoadImage: loaded",!0,l,g),g.onerror=w(Bt,d,"TestLoadImage: error",!1,l,g),g.onabort=w(Bt,d,"TestLoadImage: abort",!1,l,g),g.ontimeout=w(Bt,d,"TestLoadImage: timeout",!1,l,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else l(!1)}function Kp(o,l){const d=new br,g=new AbortController,R=setTimeout(()=>{g.abort(),Bt(d,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:g.signal}).then(C=>{clearTimeout(R),C.ok?Bt(d,"TestPingServer: ok",!0,l):Bt(d,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(R),Bt(d,"TestPingServer: error",!1,l)})}function Bt(o,l,d,g,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),g(d)}catch{}}function Qp(){this.g=new kp}function Jp(o,l,d){const g=d||"";try{ml(o,function(R,C){let B=R;h(R)&&(B=So(R)),l.push(g+C+"="+encodeURIComponent(B))})}catch(R){throw l.push(g+"type="+encodeURIComponent("_badmap")),R}}function Cs(o){this.l=o.Ub||null,this.j=o.eb||!1}P(Cs,Ao),Cs.prototype.g=function(){return new Ps(this.l,this.j)},Cs.prototype.i=function(o){return function(){return o}}({});function Ps(o,l){Oe.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Ps,Oe),n=Ps.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,Dr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,kr(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Dr(this)),this.g&&(this.readyState=3,Dr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;El(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function El(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?kr(this):Dr(this),this.readyState==3&&El(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,kr(this))},n.Qa=function(o){this.g&&(this.response=o,kr(this))},n.ga=function(){this.g&&kr(this)};function kr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Dr(o)}n.setRequestHeader=function(o,l){this.u.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var d=l.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=l.next();return o.join(`\r
`)};function Dr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Ps.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Tl(o){let l="";return de(o,function(d,g){l+=g,l+=":",l+=d,l+=`\r
`}),l}function Oo(o,l,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Tl(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):ye(o,l,d))}function ve(o){Oe.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(ve,Oe);var Yp=/^https?$/i,Xp=["POST","PUT"];n=ve.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,l,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():xo.g(),this.v=this.o?Xc(this.o):Xc(xo),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(C){Sl(this,C);return}if(o=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var R in g)d.set(R,g[R]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const C of g.keys())d.set(C,g.get(C));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(C=>C.toLowerCase()=="content-type"),R=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Xp,l,void 0))||g||R||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,B]of d)this.g.setRequestHeader(C,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Rl(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){Sl(this,C)}};function Sl(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,Al(o),ks(o)}function Al(o){o.A||(o.A=!0,ze(o,"complete"),ze(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,ze(this,"complete"),ze(this,"abort"),ks(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ks(this,!0)),ve.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?bl(this):this.bb())},n.bb=function(){bl(this)};function bl(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Et(o)!=4||o.Z()!=2)){if(o.u&&Et(o)==4)Kc(o.Ea,0,o);else if(ze(o,"readystatechange"),Et(o)==4){o.h=!1;try{const B=o.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var d;if(!(d=l)){var g;if(g=B===0){var R=String(o.D).match(gl)[1]||null;!R&&c.self&&c.self.location&&(R=c.self.location.protocol.slice(0,-1)),g=!Yp.test(R?R.toLowerCase():"")}d=g}if(d)ze(o,"complete"),ze(o,"success");else{o.m=6;try{var C=2<Et(o)?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.Z()+"]",Al(o)}}finally{ks(o)}}}}function ks(o,l){if(o.g){Rl(o);const d=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||ze(o,"ready");try{d.onreadystatechange=g}catch{}}}function Rl(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Et(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Et(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),Pp(l)}};function xl(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Zp(o){const l={};o=(o.g&&2<=Et(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(U(o[g]))continue;var d=S(o[g]);const R=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const C=l[R]||[];l[R]=C,C.push(d)}A(l,function(g){return g.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Vr(o,l,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||l}function Cl(o){this.Aa=0,this.i=[],this.j=new br,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Vr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Vr("baseRetryDelayMs",5e3,o),this.cb=Vr("retryDelaySeedMs",1e4,o),this.Wa=Vr("forwardChannelMaxRetries",2,o),this.wa=Vr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new ul(o&&o.concurrentRequestLimit),this.Da=new Qp,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Cl.prototype,n.la=8,n.G=1,n.connect=function(o,l,d,g){qe(0),this.W=o,this.H=l||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=Ll(this,null,this.W),Vs(this)};function Mo(o){if(Pl(o),o.G==3){var l=o.U++,d=wt(o.I);if(ye(d,"SID",o.K),ye(d,"RID",l),ye(d,"TYPE","terminate"),Nr(o,d),l=new Ft(o,o.j,l),l.L=2,l.v=xs(wt(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=l.v,d=!0),d||(l.g=Fl(l.j,null),l.g.ea(l.v)),l.F=Date.now(),As(l)}jl(o)}function Ds(o){o.g&&(Lo(o),o.g.cancel(),o.g=null)}function Pl(o){Ds(o),o.u&&(c.clearTimeout(o.u),o.u=null),Ns(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function Vs(o){if(!hl(o.h)&&!o.s){o.s=!0;var l=o.Ga;fe||M(),nt||(fe(),nt=!0),hn.add(l,o),o.B=0}}function em(o,l){return dl(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Ar(y(o.Ga,o,l),Ml(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const R=new Ft(this,this.j,o);let C=this.o;if(this.S&&(C?(C=_(C),E(C,this.S)):C=this.S),this.m!==null||this.O||(R.H=C,C=null),this.P)e:{for(var l=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(l+=g,4096<l){l=d;break e}if(l===4096||d===this.i.length-1){l=d+1;break e}}l=1e3}else l=1e3;l=Dl(this,R,l),d=wt(this.I),ye(d,"RID",o),ye(d,"CVER",22),this.D&&ye(d,"X-HTTP-Session-Id",this.D),Nr(this,d),C&&(this.O?l="headers="+encodeURIComponent(String(Tl(C)))+"&"+l:this.m&&Oo(d,this.m,C)),No(this.h,R),this.Ua&&ye(d,"TYPE","init"),this.P?(ye(d,"$req",l),ye(d,"SID","null"),R.T=!0,Po(R,d,null)):Po(R,d,l),this.G=2}}else this.G==3&&(o?kl(this,o):this.i.length==0||hl(this.h)||kl(this))};function kl(o,l){var d;l?d=l.l:d=o.U++;const g=wt(o.I);ye(g,"SID",o.K),ye(g,"RID",d),ye(g,"AID",o.T),Nr(o,g),o.m&&o.o&&Oo(g,o.m,o.o),d=new Ft(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),l&&(o.i=l.D.concat(o.i)),l=Dl(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),No(o.h,d),Po(d,g,l)}function Nr(o,l){o.H&&de(o.H,function(d,g){ye(l,g,d)}),o.l&&ml({},function(d,g){ye(l,g,d)})}function Dl(o,l,d){d=Math.min(o.i.length,d);var g=o.l?y(o.l.Na,o.l,o):null;e:{var R=o.i;let C=-1;for(;;){const B=["count="+d];C==-1?0<d?(C=R[0].g,B.push("ofs="+C)):C=0:B.push("ofs="+C);let pe=!0;for(let ke=0;ke<d;ke++){let le=R[ke].g;const Me=R[ke].map;if(le-=C,0>le)C=Math.max(0,R[ke].g-100),pe=!1;else try{Jp(Me,B,"req"+le+"_")}catch{g&&g(Me)}}if(pe){g=B.join("&");break e}}}return o=o.i.splice(0,d),l.D=o,g}function Vl(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;fe||M(),nt||(fe(),nt=!0),hn.add(l,o),o.v=0}}function jo(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Ar(y(o.Fa,o),Ml(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Nl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Ar(y(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,qe(10),Ds(this),Nl(this))};function Lo(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function Nl(o){o.g=new Ft(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=wt(o.qa);ye(l,"RID","rpc"),ye(l,"SID",o.K),ye(l,"AID",o.T),ye(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&ye(l,"TO",o.ja),ye(l,"TYPE","xmlhttp"),Nr(o,l),o.m&&o.o&&Oo(l,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=xs(wt(l)),d.m=null,d.P=!0,al(d,o)}n.Za=function(){this.C!=null&&(this.C=null,Ds(this),jo(this),qe(19))};function Ns(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function Ol(o,l){var d=null;if(o.g==l){Ns(o),Lo(o),o.g=null;var g=2}else if(Vo(o.h,l))d=l.D,fl(o.h,l),g=1;else return;if(o.G!=0){if(l.o)if(g==1){d=l.m?l.m.length:0,l=Date.now()-l.F;var R=o.B;g=Es(),ze(g,new rl(g,d)),Vs(o)}else Vl(o);else if(R=l.s,R==3||R==0&&0<l.X||!(g==1&&em(o,l)||g==2&&jo(o)))switch(d&&0<d.length&&(l=o.h,l.i=l.i.concat(d)),R){case 1:gn(o,5);break;case 4:gn(o,10);break;case 3:gn(o,6);break;default:gn(o,2)}}}function Ml(o,l){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*l}function gn(o,l){if(o.j.info("Error code "+l),l==2){var d=y(o.fb,o),g=o.Xa;const R=!g;g=new mn(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||bs(g,"https"),xs(g),R?Gp(g.toString(),d):Kp(g.toString(),d)}else qe(2);o.G=0,o.l&&o.l.sa(l),jl(o),Pl(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),qe(2)):(this.j.info("Failed to ping google.com"),qe(1))};function jl(o){if(o.G=0,o.ka=[],o.l){const l=pl(o.h);(l.length!=0||o.i.length!=0)&&(T(o.ka,l),T(o.ka,o.i),o.h.i.length=0,x(o.i),o.i.length=0),o.l.ra()}}function Ll(o,l,d){var g=d instanceof mn?wt(d):new mn(d);if(g.g!="")l&&(g.g=l+"."+g.g),Rs(g,g.s);else{var R=c.location;g=R.protocol,l=l?l+"."+R.hostname:R.hostname,R=+R.port;var C=new mn(null);g&&bs(C,g),l&&(C.g=l),R&&Rs(C,R),d&&(C.l=d),g=C}return d=o.D,l=o.ya,d&&l&&ye(g,d,l),ye(g,"VER",o.la),Nr(o,g),g}function Fl(o,l,d){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new ve(new Cs({eb:d})):new ve(o.pa),l.Ha(o.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ul(){}n=Ul.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Os(){}Os.prototype.g=function(o,l){return new Ye(o,l)};function Ye(o,l){Oe.call(this),this.g=new Cl(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!U(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!U(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new Bn(this)}P(Ye,Oe),Ye.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ye.prototype.close=function(){Mo(this.g)},Ye.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=So(o),o=d);l.i.push(new jp(l.Ya++,o)),l.G==3&&Vs(l)},Ye.prototype.N=function(){this.g.l=null,delete this.j,Mo(this.g),delete this.g,Ye.aa.N.call(this)};function Bl(o){bo.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const d in l){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}P(Bl,bo);function $l(){Ro.call(this),this.status=1}P($l,Ro);function Bn(o){this.g=o}P(Bn,Ul),Bn.prototype.ua=function(){ze(this.g,"a")},Bn.prototype.ta=function(o){ze(this.g,new Bl(o))},Bn.prototype.sa=function(o){ze(this.g,new $l)},Bn.prototype.ra=function(){ze(this.g,"b")},Os.prototype.createWebChannel=Os.prototype.g,Ye.prototype.send=Ye.prototype.o,Ye.prototype.open=Ye.prototype.m,Ye.prototype.close=Ye.prototype.close,dd=function(){return new Os},hd=function(){return Es()},ud=fn,da={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ts.NO_ERROR=0,Ts.TIMEOUT=8,Ts.HTTP_ERROR=6,Js=Ts,sl.COMPLETE="complete",ld=sl,Zc.EventType=Tr,Tr.OPEN="a",Tr.CLOSE="b",Tr.ERROR="c",Tr.MESSAGE="d",Oe.prototype.listen=Oe.prototype.K,jr=Zc,ve.prototype.listenOnce=ve.prototype.L,ve.prototype.getLastError=ve.prototype.Ka,ve.prototype.getLastErrorCode=ve.prototype.Ba,ve.prototype.getStatus=ve.prototype.Z,ve.prototype.getResponseJson=ve.prototype.Oa,ve.prototype.getResponseText=ve.prototype.oa,ve.prototype.send=ve.prototype.ea,ve.prototype.setWithCredentials=ve.prototype.Ha,cd=ve}).apply(typeof $s<"u"?$s:typeof self<"u"?self:typeof window<"u"?window:{});const gu="@firebase/firestore",yu="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ue{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ue.UNAUTHENTICATED=new Ue(null),Ue.GOOGLE_CREDENTIALS=new Ue("google-credentials-uid"),Ue.FIRST_PARTY=new Ue("first-party-uid"),Ue.MOCK_USER=new Ue("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
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
 */let gr="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Vn=new Ua("@firebase/firestore");function Gn(){return Vn.logLevel}function q(n,...e){if(Vn.logLevel<=se.DEBUG){const t=e.map(za);Vn.debug(`Firestore (${gr}): ${n}`,...t)}}function Dt(n,...e){if(Vn.logLevel<=se.ERROR){const t=e.map(za);Vn.error(`Firestore (${gr}): ${n}`,...t)}}function ir(n,...e){if(Vn.logLevel<=se.WARN){const t=e.map(za);Vn.warn(`Firestore (${gr}): ${n}`,...t)}}function za(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Y(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,fd(n,r,t)}function fd(n,e,t){let r=`FIRESTORE (${gr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Dt(r),new Error(r)}function he(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||fd(e,s,r)}function te(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends jt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Pt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class pd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class V_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ue.UNAUTHENTICATED))}shutdown(){}}class N_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class O_{constructor(e){this.t=e,this.currentUser=Ue.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){he(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new Pt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Pt,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},c=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Pt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(he(typeof r.accessToken=="string",31837,{l:r}),new pd(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return he(e===null||typeof e=="string",2055,{h:e}),new Ue(e)}}class M_{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Ue.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class j_{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new M_(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Ue.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class _u{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class L_{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ot(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){he(this.o===void 0,3512);const r=i=>{i.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,q("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new _u(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(he(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new _u(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function F_(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class qa{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=F_(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function ie(n,e){return n<e?-1:n>e?1:0}function fa(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return Go(s)===Go(i)?ie(s,i):Go(s)?1:-1}return ie(n.length,e.length)}const U_=55296,B_=57343;function Go(n){const e=n.charCodeAt(0);return e>=U_&&e<=B_}function or(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const vu="__name__";class ht{constructor(e,t,r){t===void 0?t=0:t>e.length&&Y(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&Y(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return ht.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ht?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=ht.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return ie(e.length,t.length)}static compareSegments(e,t){const r=ht.isNumericId(e),s=ht.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?ht.extractNumericId(e).compare(ht.extractNumericId(t)):fa(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Yt.fromString(e.substring(4,e.length-2))}}class ge extends ht{construct(e,t,r){return new ge(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(N.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new ge(t)}static emptyPath(){return new ge([])}}const $_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ve extends ht{construct(e,t,r){return new Ve(e,t,r)}static isValidIdentifier(e){return $_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ve.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===vu}static keyField(){return new Ve([vu])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new $(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new $(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new $(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new $(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ve(t)}static emptyPath(){return new Ve([])}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(ge.fromString(e))}static fromName(e){return new K(ge.fromString(e).popFirst(5))}static empty(){return new K(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ge.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new ge(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function md(n,e,t){if(!t)throw new $(N.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function z_(n,e,t,r){if(e===!0&&r===!0)throw new $(N.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Iu(n){if(!K.isDocumentKey(n))throw new $(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function wu(n){if(K.isDocumentKey(n))throw new $(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function gd(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function ji(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Y(12329,{type:typeof n})}function Qe(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new $(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ji(n);throw new $(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function q_(n,e){if(e<=0)throw new $(N.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Se(n,e){const t={typeString:n};return e&&(t.value=e),t}function hs(n,e){if(!gd(n))throw new $(N.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new $(N.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Eu=-62135596800,Tu=1e6;class ue{static now(){return ue.fromMillis(Date.now())}static fromDate(e){return ue.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Tu);return new ue(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new $(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new $(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Eu)throw new $(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Tu}_compareTo(e){return this.seconds===e.seconds?ie(this.nanoseconds,e.nanoseconds):ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ue._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(hs(e,ue._jsonSchema))return new ue(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Eu;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ue._jsonSchemaVersion="firestore/timestamp/1.0",ue._jsonSchema={type:Se("string",ue._jsonSchemaVersion),seconds:Se("number"),nanoseconds:Se("number")};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ee{static fromTimestamp(e){return new ee(e)}static min(){return new ee(new ue(0,0))}static max(){return new ee(new ue(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Zr=-1;function W_(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=ee.fromTimestamp(r===1e9?new ue(t+1,0):new ue(t,r));return new tn(s,K.empty(),e)}function H_(n){return new tn(n.readTime,n.key,Zr)}class tn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new tn(ee.min(),K.empty(),Zr)}static max(){return new tn(ee.max(),K.empty(),Zr)}}function G_(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=K.comparator(n.documentKey,e.documentKey),t!==0?t:ie(n.largestBatchId,e.largestBatchId))}/**
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
 */const K_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Q_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */async function yr(n){if(n.code!==N.FAILED_PRECONDITION||n.message!==K_)throw n;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Y(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new O((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof O?t:O.resolve(t)}catch(t){return O.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):O.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):O.reject(t)}static resolve(e){return new O((t,r)=>{t(e)})}static reject(e){return new O((t,r)=>{r(e)})}static waitFor(e){return new O((t,r)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&t()},u=>r(u))}),a=!0,i===s&&t()})}static or(e){let t=O.resolve(!1);for(const r of e)t=t.next(s=>s?O.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new O((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let u=0;u<i;u++){const h=u;t(e[h]).next(f=>{a[h]=f,++c,c===i&&r(a)},f=>s(f))}})}static doWhile(e,t){return new O((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function J_(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function _r(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Li{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Li.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Wa=-1;function Fi(n){return n==null}function li(n){return n===0&&1/n==-1/0}function Y_(n){return typeof n=="number"&&Number.isInteger(n)&&!li(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const yd="";function X_(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Su(e)),e=Z_(n.get(t),e);return Su(e)}function Z_(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case yd:t+="";break;default:t+=i}}return t}function Su(n){return n+yd+""}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Au(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function cn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function _d(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class _e{constructor(e,t){this.comparator=e,this.root=t||De.EMPTY}insert(e,t){return new _e(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,De.BLACK,null,null))}remove(e){return new _e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,De.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new zs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new zs(this.root,e,this.comparator,!1)}getReverseIterator(){return new zs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new zs(this.root,e,this.comparator,!0)}}class zs{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class De{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??De.RED,this.left=s??De.EMPTY,this.right=i??De.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new De(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return De.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return De.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,De.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,De.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Y(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Y(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Y(27949);return e+(this.isRed()?0:1)}}De.EMPTY=null,De.RED=!0,De.BLACK=!1;De.EMPTY=new class{constructor(){this.size=0}get key(){throw Y(57766)}get value(){throw Y(16141)}get color(){throw Y(16727)}get left(){throw Y(29726)}get right(){throw Y(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new De(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Re{constructor(e){this.comparator=e,this.data=new _e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new bu(this.data.getIterator())}getIteratorFrom(e){return new bu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Re)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Re(this.comparator);return t.data=e,t}}class bu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ze{constructor(e){this.fields=e,e.sort(Ve.comparator)}static empty(){return new Ze([])}unionWith(e){let t=new Re(Ve.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ze(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return or(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class vd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ne{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new vd("Invalid base64 string: "+i):i}}(e);return new Ne(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new Ne(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ne.EMPTY_BYTE_STRING=new Ne("");const ev=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function nn(n){if(he(!!n,39018),typeof n=="string"){let e=0;const t=ev.exec(n);if(he(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:we(n.seconds),nanos:we(n.nanos)}}function we(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function rn(n){return typeof n=="string"?Ne.fromBase64String(n):Ne.fromUint8Array(n)}/**
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
 */const Id="server_timestamp",wd="__type__",Ed="__previous_value__",Td="__local_write_time__";function Ha(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[wd])==null?void 0:r.stringValue)===Id}function Ui(n){const e=n.mapValue.fields[Ed];return Ha(e)?Ui(e):e}function es(n){const e=nn(n.mapValue.fields[Td].timestampValue);return new ue(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class tv{constructor(e,t,r,s,i,a,c,u,h,f){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f}}const ui="(default)";class ts{constructor(e,t){this.projectId=e,this.database=t||ui}static empty(){return new ts("","")}get isDefaultDatabase(){return this.database===ui}isEqual(e){return e instanceof ts&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Sd="__type__",Ad="__max__",qs={mapValue:{fields:{__type__:{stringValue:Ad}}}},bd="__vector__",hi="value";function sn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ha(n)?4:rv(n)?9007199254740991:nv(n)?10:11:Y(28295,{value:n})}function yt(n,e){if(n===e)return!0;const t=sn(n);if(t!==sn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return es(n).isEqual(es(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=nn(s.timestampValue),c=nn(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return rn(s.bytesValue).isEqual(rn(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return we(s.geoPointValue.latitude)===we(i.geoPointValue.latitude)&&we(s.geoPointValue.longitude)===we(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return we(s.integerValue)===we(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=we(s.doubleValue),c=we(i.doubleValue);return a===c?li(a)===li(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return or(n.arrayValue.values||[],e.arrayValue.values||[],yt);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Au(a)!==Au(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!yt(a[u],c[u])))return!1;return!0}(n,e);default:return Y(52216,{left:n})}}function ns(n,e){return(n.values||[]).find(t=>yt(t,e))!==void 0}function ar(n,e){if(n===e)return 0;const t=sn(n),r=sn(e);if(t!==r)return ie(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ie(n.booleanValue,e.booleanValue);case 2:return function(i,a){const c=we(i.integerValue||i.doubleValue),u=we(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(n,e);case 3:return Ru(n.timestampValue,e.timestampValue);case 4:return Ru(es(n),es(e));case 5:return fa(n.stringValue,e.stringValue);case 6:return function(i,a){const c=rn(i),u=rn(a);return c.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),u=a.split("/");for(let h=0;h<c.length&&h<u.length;h++){const f=ie(c[h],u[h]);if(f!==0)return f}return ie(c.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const c=ie(we(i.latitude),we(a.latitude));return c!==0?c:ie(we(i.longitude),we(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return xu(n.arrayValue,e.arrayValue);case 10:return function(i,a){var y,w,P,x;const c=i.fields||{},u=a.fields||{},h=(y=c[hi])==null?void 0:y.arrayValue,f=(w=u[hi])==null?void 0:w.arrayValue,m=ie(((P=h==null?void 0:h.values)==null?void 0:P.length)||0,((x=f==null?void 0:f.values)==null?void 0:x.length)||0);return m!==0?m:xu(h,f)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===qs.mapValue&&a===qs.mapValue)return 0;if(i===qs.mapValue)return 1;if(a===qs.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),h=a.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const y=fa(u[m],f[m]);if(y!==0)return y;const w=ar(c[u[m]],h[f[m]]);if(w!==0)return w}return ie(u.length,f.length)}(n.mapValue,e.mapValue);default:throw Y(23264,{he:t})}}function Ru(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ie(n,e);const t=nn(n),r=nn(e),s=ie(t.seconds,r.seconds);return s!==0?s:ie(t.nanos,r.nanos)}function xu(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=ar(t[s],r[s]);if(i)return i}return ie(t.length,r.length)}function cr(n){return pa(n)}function pa(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=nn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return rn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return K.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=pa(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${pa(t.fields[a])}`;return s+"}"}(n.mapValue):Y(61005,{value:n})}function Ys(n){switch(sn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ui(n);return e?16+Ys(e):16;case 5:return 2*n.stringValue.length;case 6:return rn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ys(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return cn(r.fields,(i,a)=>{s+=i.length+Ys(a)}),s}(n.mapValue);default:throw Y(13486,{value:n})}}function Cu(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function ma(n){return!!n&&"integerValue"in n}function Ga(n){return!!n&&"arrayValue"in n}function Pu(n){return!!n&&"nullValue"in n}function ku(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Xs(n){return!!n&&"mapValue"in n}function nv(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Sd])==null?void 0:r.stringValue)===bd}function zr(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return cn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=zr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=zr(n.arrayValue.values[t]);return e}return{...n}}function rv(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Ad}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ge{constructor(e){this.value=e}static empty(){return new Ge({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Xs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=zr(t)}setAll(e){let t=Ve.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=zr(a):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Xs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return yt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Xs(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){cn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ge(zr(this.value))}}function Rd(n){const e=[];return cn(n.fields,(t,r)=>{const s=new Ve([t]);if(Xs(r)){const i=Rd(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Ze(e)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Be{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Be(e,0,ee.min(),ee.min(),ee.min(),Ge.empty(),0)}static newFoundDocument(e,t,r,s){return new Be(e,1,t,ee.min(),r,s,0)}static newNoDocument(e,t){return new Be(e,2,t,ee.min(),ee.min(),Ge.empty(),0)}static newUnknownDocument(e,t){return new Be(e,3,t,ee.min(),ee.min(),Ge.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ge.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ge.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Be&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Be(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class di{constructor(e,t){this.position=e,this.inclusive=t}}function Du(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=K.comparator(K.fromName(a.referenceValue),t.key):r=ar(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Vu(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!yt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class rs{constructor(e,t="asc"){this.field=e,this.dir=t}}function sv(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class xd{}class Te extends xd{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new ov(e,t,r):t==="array-contains"?new lv(e,r):t==="in"?new uv(e,r):t==="not-in"?new hv(e,r):t==="array-contains-any"?new dv(e,r):new Te(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new av(e,r):new cv(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(ar(t,this.value)):t!==null&&sn(this.value)===sn(t)&&this.matchesComparison(ar(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ut extends xd{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new ut(e,t)}matches(e){return Cd(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Cd(n){return n.op==="and"}function Pd(n){return iv(n)&&Cd(n)}function iv(n){for(const e of n.filters)if(e instanceof ut)return!1;return!0}function ga(n){if(n instanceof Te)return n.field.canonicalString()+n.op.toString()+cr(n.value);if(Pd(n))return n.filters.map(e=>ga(e)).join(",");{const e=n.filters.map(t=>ga(t)).join(",");return`${n.op}(${e})`}}function kd(n,e){return n instanceof Te?function(r,s){return s instanceof Te&&r.op===s.op&&r.field.isEqual(s.field)&&yt(r.value,s.value)}(n,e):n instanceof ut?function(r,s){return s instanceof ut&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&kd(a,s.filters[c]),!0):!1}(n,e):void Y(19439)}function Dd(n){return n instanceof Te?function(t){return`${t.field.canonicalString()} ${t.op} ${cr(t.value)}`}(n):n instanceof ut?function(t){return t.op.toString()+" {"+t.getFilters().map(Dd).join(" ,")+"}"}(n):"Filter"}class ov extends Te{constructor(e,t,r){super(e,t,r),this.key=K.fromName(r.referenceValue)}matches(e){const t=K.comparator(e.key,this.key);return this.matchesComparison(t)}}class av extends Te{constructor(e,t){super(e,"in",t),this.keys=Vd("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class cv extends Te{constructor(e,t){super(e,"not-in",t),this.keys=Vd("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Vd(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(r=>K.fromName(r.referenceValue))}class lv extends Te{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ga(t)&&ns(t.arrayValue,this.value)}}class uv extends Te{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ns(this.value.arrayValue,t)}}class hv extends Te{constructor(e,t){super(e,"not-in",t)}matches(e){if(ns(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ns(this.value.arrayValue,t)}}class dv extends Te{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ga(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>ns(this.value.arrayValue,r))}}/**
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
 */class fv{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Te=null}}function Nu(n,e=null,t=[],r=[],s=null,i=null,a=null){return new fv(n,e,t,r,s,i,a)}function Ka(n){const e=te(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>ga(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Fi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>cr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>cr(r)).join(",")),e.Te=t}return e.Te}function Qa(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!sv(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!kd(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Vu(n.startAt,e.startAt)&&Vu(n.endAt,e.endAt)}function ya(n){return K.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class vr{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function pv(n,e,t,r,s,i,a,c){return new vr(n,e,t,r,s,i,a,c)}function Bi(n){return new vr(n)}function Ou(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Nd(n){return n.collectionGroup!==null}function qr(n){const e=te(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Re(Ve.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new rs(i,r))}),t.has(Ve.keyField().canonicalString())||e.Ie.push(new rs(Ve.keyField(),r))}return e.Ie}function dt(n){const e=te(n);return e.Ee||(e.Ee=mv(e,qr(n))),e.Ee}function mv(n,e){if(n.limitType==="F")return Nu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new rs(s.field,i)});const t=n.endAt?new di(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new di(n.startAt.position,n.startAt.inclusive):null;return Nu(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function _a(n,e){const t=n.filters.concat([e]);return new vr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function fi(n,e,t){return new vr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function $i(n,e){return Qa(dt(n),dt(e))&&n.limitType===e.limitType}function Od(n){return`${Ka(dt(n))}|lt:${n.limitType}`}function Kn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Dd(s)).join(", ")}]`),Fi(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>cr(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>cr(s)).join(",")),`Target(${r})`}(dt(n))}; limitType=${n.limitType})`}function zi(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):K.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of qr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,c,u){const h=Du(a,c,u);return a.inclusive?h<=0:h<0}(r.startAt,qr(r),s)||r.endAt&&!function(a,c,u){const h=Du(a,c,u);return a.inclusive?h>=0:h>0}(r.endAt,qr(r),s))}(n,e)}function gv(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Md(n){return(e,t)=>{let r=!1;for(const s of qr(n)){const i=yv(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function yv(n,e,t){const r=n.field.isKeyField()?K.comparator(e.key,t.key):function(i,a,c){const u=a.data.field(i),h=c.data.field(i);return u!==null&&h!==null?ar(u,h):Y(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return Y(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class jn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){cn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return _d(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const _v=new _e(K.comparator);function Vt(){return _v}const jd=new _e(K.comparator);function Lr(...n){let e=jd;for(const t of n)e=e.insert(t.key,t);return e}function Ld(n){let e=jd;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Sn(){return Wr()}function Fd(){return Wr()}function Wr(){return new jn(n=>n.toString(),(n,e)=>n.isEqual(e))}const vv=new _e(K.comparator),Iv=new Re(K.comparator);function oe(...n){let e=Iv;for(const t of n)e=e.add(t);return e}const wv=new Re(ie);function Ev(){return wv}/**
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
 */function Ja(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:li(e)?"-0":e}}function Ud(n){return{integerValue:""+n}}function Tv(n,e){return Y_(e)?Ud(e):Ja(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class qi{constructor(){this._=void 0}}function Sv(n,e,t){return n instanceof ss?function(s,i){const a={fields:{[wd]:{stringValue:Id},[Td]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ha(i)&&(i=Ui(i)),i&&(a.fields[Ed]=i),{mapValue:a}}(t,e):n instanceof is?$d(n,e):n instanceof os?zd(n,e):function(s,i){const a=Bd(s,i),c=Mu(a)+Mu(s.Ae);return ma(a)&&ma(s.Ae)?Ud(c):Ja(s.serializer,c)}(n,e)}function Av(n,e,t){return n instanceof is?$d(n,e):n instanceof os?zd(n,e):t}function Bd(n,e){return n instanceof pi?function(r){return ma(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ss extends qi{}class is extends qi{constructor(e){super(),this.elements=e}}function $d(n,e){const t=qd(e);for(const r of n.elements)t.some(s=>yt(s,r))||t.push(r);return{arrayValue:{values:t}}}class os extends qi{constructor(e){super(),this.elements=e}}function zd(n,e){let t=qd(e);for(const r of n.elements)t=t.filter(s=>!yt(s,r));return{arrayValue:{values:t}}}class pi extends qi{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Mu(n){return we(n.integerValue||n.doubleValue)}function qd(n){return Ga(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class bv{constructor(e,t){this.field=e,this.transform=t}}function Rv(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof is&&s instanceof is||r instanceof os&&s instanceof os?or(r.elements,s.elements,yt):r instanceof pi&&s instanceof pi?yt(r.Ae,s.Ae):r instanceof ss&&s instanceof ss}(n.transform,e.transform)}class xv{constructor(e,t){this.version=e,this.transformResults=t}}class tt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new tt}static exists(e){return new tt(void 0,e)}static updateTime(e){return new tt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Zs(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Wi{}function Wd(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ya(n.key,tt.none()):new ds(n.key,n.data,tt.none());{const t=n.data,r=Ge.empty();let s=new Re(Ve.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new ln(n.key,r,new Ze(s.toArray()),tt.none())}}function Cv(n,e,t){n instanceof ds?function(s,i,a){const c=s.value.clone(),u=Lu(s.fieldTransforms,i,a.transformResults);c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof ln?function(s,i,a){if(!Zs(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=Lu(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(Hd(s)),u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Hr(n,e,t,r){return n instanceof ds?function(i,a,c,u){if(!Zs(i.precondition,a))return c;const h=i.value.clone(),f=Fu(i.fieldTransforms,u,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof ln?function(i,a,c,u){if(!Zs(i.precondition,a))return c;const h=Fu(i.fieldTransforms,u,a),f=a.data;return f.setAll(Hd(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(n,e,t,r):function(i,a,c){return Zs(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function Pv(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Bd(r.transform,s||null);i!=null&&(t===null&&(t=Ge.empty()),t.set(r.field,i))}return t||null}function ju(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&or(r,s,(i,a)=>Rv(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ds extends Wi{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ln extends Wi{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Hd(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Lu(n,e,t){const r=new Map;he(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,Av(a,c,t[s]))}return r}function Fu(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,Sv(i,a,e))}return r}class Ya extends Wi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class kv extends Wi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Dv{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Cv(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Hr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Hr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Fd();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const u=Wd(a,c);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),oe())}isEqual(e){return this.batchId===e.batchId&&or(this.mutations,e.mutations,(t,r)=>ju(t,r))&&or(this.baseMutations,e.baseMutations,(t,r)=>ju(t,r))}}class Xa{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){he(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return vv}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Xa(e,t,r,s)}}/**
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
 */class Vv{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Nv{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */var Ee,ae;function Ov(n){switch(n){case N.OK:return Y(64938);case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0;default:return Y(15467,{code:n})}}function Gd(n){if(n===void 0)return Dt("GRPC error has no .code"),N.UNKNOWN;switch(n){case Ee.OK:return N.OK;case Ee.CANCELLED:return N.CANCELLED;case Ee.UNKNOWN:return N.UNKNOWN;case Ee.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case Ee.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case Ee.INTERNAL:return N.INTERNAL;case Ee.UNAVAILABLE:return N.UNAVAILABLE;case Ee.UNAUTHENTICATED:return N.UNAUTHENTICATED;case Ee.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case Ee.NOT_FOUND:return N.NOT_FOUND;case Ee.ALREADY_EXISTS:return N.ALREADY_EXISTS;case Ee.PERMISSION_DENIED:return N.PERMISSION_DENIED;case Ee.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case Ee.ABORTED:return N.ABORTED;case Ee.OUT_OF_RANGE:return N.OUT_OF_RANGE;case Ee.UNIMPLEMENTED:return N.UNIMPLEMENTED;case Ee.DATA_LOSS:return N.DATA_LOSS;default:return Y(39323,{code:n})}}(ae=Ee||(Ee={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Mv(){return new TextEncoder}/**
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
 */const jv=new Yt([4294967295,4294967295],0);function Uu(n){const e=Mv().encode(n),t=new ad;return t.update(e),new Uint8Array(t.digest())}function Bu(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Yt([t,r],0),new Yt([s,i],0)]}class Za{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Fr(`Invalid padding: ${t}`);if(r<0)throw new Fr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Fr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Fr(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Yt.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(Yt.fromNumber(r)));return s.compare(jv)===1&&(s=new Yt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Uu(e),[r,s]=Bu(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Za(i,s,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.ge===0)return;const t=Uu(e),[r,s]=Bu(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Fr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Hi{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,fs.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Hi(ee.min(),s,new _e(ie),Vt(),oe())}}class fs{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new fs(r,t,oe(),oe(),oe())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ei{constructor(e,t,r,s){this.be=e,this.removedTargetIds=t,this.key=r,this.De=s}}class Kd{constructor(e,t){this.targetId=e,this.Ce=t}}class Qd{constructor(e,t,r=Ne.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class $u{constructor(){this.ve=0,this.Fe=zu(),this.Me=Ne.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=oe(),t=oe(),r=oe();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:Y(38017,{changeType:i})}}),new fs(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=zu()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,he(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Lv{constructor(e){this.Ge=e,this.ze=new Map,this.je=Vt(),this.Je=Ws(),this.He=Ws(),this.Ye=new _e(ie)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:Y(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((r,s)=>{this.rt(s)&&t(s)})}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(ya(i))if(r===0){const a=new K(i.path);this.et(t,a,Be.newNoDocument(a,ee.min()))}else he(r===1,20013,{expectedCount:r});else{const a=this._t(t);if(a!==r){const c=this.ut(e),u=c?this.ct(c,e,a):1;if(u!==0){this.it(t);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,h)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=rn(r).toUint8Array()}catch(u){if(u instanceof vd)return ir("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new Za(a,s,i)}catch(u){return ir(u instanceof Fr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.ge===0?null:c}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Ge.ht(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(t,i,null),s++)}),s}Tt(e){const t=new Map;this.ze.forEach((i,a)=>{const c=this.ot(a);if(c){if(i.current&&ya(c.target)){const u=new K(c.target.path);this.It(u).has(a)||this.Et(a,u)||this.et(a,u,Be.newNoDocument(u,e))}i.Be&&(t.set(a,i.ke()),i.qe())}});let r=oe();this.He.forEach((i,a)=>{let c=!0;a.forEachWhile(u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.je.forEach((i,a)=>a.setReadTime(e));const s=new Hi(e,t,this.Ye,this.je,r);return this.je=Vt(),this.Je=Ws(),this.He=Ws(),this.Ye=new _e(ie),s}Xe(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.Qe(t,1):s.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new $u,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Re(ie),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Re(ie),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||q("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new $u),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Ws(){return new _e(K.comparator)}function zu(){return new _e(K.comparator)}const Fv=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Uv=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Bv=(()=>({and:"AND",or:"OR"}))();class $v{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function va(n,e){return n.useProto3Json||Fi(e)?e:{value:e}}function mi(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Jd(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function zv(n,e){return mi(n,e.toTimestamp())}function ft(n){return he(!!n,49232),ee.fromTimestamp(function(t){const r=nn(t);return new ue(r.seconds,r.nanos)}(n))}function ec(n,e){return Ia(n,e).canonicalString()}function Ia(n,e){const t=function(s){return new ge(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Yd(n){const e=ge.fromString(n);return he(nf(e),10190,{key:e.toString()}),e}function wa(n,e){return ec(n.databaseId,e.path)}function Ko(n,e){const t=Yd(e);if(t.get(1)!==n.databaseId.projectId)throw new $(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new $(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new K(Zd(t))}function Xd(n,e){return ec(n.databaseId,e)}function qv(n){const e=Yd(n);return e.length===4?ge.emptyPath():Zd(e)}function Ea(n){return new ge(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Zd(n){return he(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function qu(n,e,t){return{name:wa(n,e),fields:t.value.mapValue.fields}}function Wv(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:Y(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(he(f===void 0||typeof f=="string",58123),Ne.fromBase64String(f||"")):(he(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Ne.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(h){const f=h.code===void 0?N.UNKNOWN:Gd(h.code);return new $(f,h.message||"")}(a);t=new Qd(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ko(n,r.document.name),i=ft(r.document.updateTime),a=r.document.createTime?ft(r.document.createTime):ee.min(),c=new Ge({mapValue:{fields:r.document.fields}}),u=Be.newFoundDocument(s,i,a,c),h=r.targetIds||[],f=r.removedTargetIds||[];t=new ei(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ko(n,r.document),i=r.readTime?ft(r.readTime):ee.min(),a=Be.newNoDocument(s,i),c=r.removedTargetIds||[];t=new ei([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ko(n,r.document),i=r.removedTargetIds||[];t=new ei([],i,s,null)}else{if(!("filter"in e))return Y(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new Nv(s,i),c=r.targetId;t=new Kd(c,a)}}return t}function Hv(n,e){let t;if(e instanceof ds)t={update:qu(n,e.key,e.value)};else if(e instanceof Ya)t={delete:wa(n,e.key)};else if(e instanceof ln)t={update:qu(n,e.key,e.data),updateMask:tI(e.fieldMask)};else{if(!(e instanceof kv))return Y(16599,{Vt:e.type});t={verify:wa(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const c=a.transform;if(c instanceof ss)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof is)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof os)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof pi)return{fieldPath:a.field.canonicalString(),increment:c.Ae};throw Y(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:zv(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Y(27497)}(n,e.precondition)),t}function Gv(n,e){return n&&n.length>0?(he(e!==void 0,14353),n.map(t=>function(s,i){let a=s.updateTime?ft(s.updateTime):ft(i);return a.isEqual(ee.min())&&(a=ft(i)),new xv(a,s.transformResults||[])}(t,e))):[]}function Kv(n,e){return{documents:[Xd(n,e.path)]}}function Qv(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Xd(n,s);const i=function(h){if(h.length!==0)return tf(ut.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(f=>function(y){return{field:Qn(y.field),direction:Xv(y.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=va(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:t,parent:s}}function Jv(n){let e=qv(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){he(r===1,65062);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(m){const y=ef(m);return y instanceof ut&&Pd(y)?y.getFilters():[y]}(t.where));let a=[];t.orderBy&&(a=function(m){return m.map(y=>function(P){return new rs(Jn(P.field),function(T){switch(T){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(y))}(t.orderBy));let c=null;t.limit&&(c=function(m){let y;return y=typeof m=="object"?m.value:m,Fi(y)?null:y}(t.limit));let u=null;t.startAt&&(u=function(m){const y=!!m.before,w=m.values||[];return new di(w,y)}(t.startAt));let h=null;return t.endAt&&(h=function(m){const y=!m.before,w=m.values||[];return new di(w,y)}(t.endAt)),pv(e,s,a,i,c,"F",u,h)}function Yv(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function ef(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Jn(t.unaryFilter.field);return Te.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Jn(t.unaryFilter.field);return Te.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Jn(t.unaryFilter.field);return Te.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Jn(t.unaryFilter.field);return Te.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Y(61313);default:return Y(60726)}}(n):n.fieldFilter!==void 0?function(t){return Te.create(Jn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Y(58110);default:return Y(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ut.create(t.compositeFilter.filters.map(r=>ef(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Y(1026)}}(t.compositeFilter.op))}(n):Y(30097,{filter:n})}function Xv(n){return Fv[n]}function Zv(n){return Uv[n]}function eI(n){return Bv[n]}function Qn(n){return{fieldPath:n.canonicalString()}}function Jn(n){return Ve.fromServerFormat(n.fieldPath)}function tf(n){return n instanceof Te?function(t){if(t.op==="=="){if(ku(t.value))return{unaryFilter:{field:Qn(t.field),op:"IS_NAN"}};if(Pu(t.value))return{unaryFilter:{field:Qn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ku(t.value))return{unaryFilter:{field:Qn(t.field),op:"IS_NOT_NAN"}};if(Pu(t.value))return{unaryFilter:{field:Qn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qn(t.field),op:Zv(t.op),value:t.value}}}(n):n instanceof ut?function(t){const r=t.getFilters().map(s=>tf(s));return r.length===1?r[0]:{compositeFilter:{op:eI(t.op),filters:r}}}(n):Y(54877,{filter:n})}function tI(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function nf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Gt{constructor(e,t,r,s,i=ee.min(),a=ee.min(),c=Ne.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new Gt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Gt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Gt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Gt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class nI{constructor(e){this.yt=e}}function rI(n){const e=Jv({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?fi(e,e.limit,"L"):e}/**
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
 */class sI{constructor(){this.Cn=new iI}addToCollectionParentIndex(e,t){return this.Cn.add(t),O.resolve()}getCollectionParents(e,t){return O.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return O.resolve()}deleteFieldIndex(e,t){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,t){return O.resolve()}getDocumentsMatchingTarget(e,t){return O.resolve(null)}getIndexType(e,t){return O.resolve(0)}getFieldIndexes(e,t){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,t){return O.resolve(tn.min())}getMinOffsetFromCollectionGroup(e,t){return O.resolve(tn.min())}updateCollectionGroup(e,t,r){return O.resolve()}updateIndexEntries(e,t){return O.resolve()}}class iI{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Re(ge.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Re(ge.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const Wu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},rf=41943040;class He{static withCacheSize(e){return new He(e,He.DEFAULT_COLLECTION_PERCENTILE,He.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */He.DEFAULT_COLLECTION_PERCENTILE=10,He.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,He.DEFAULT=new He(rf,He.DEFAULT_COLLECTION_PERCENTILE,He.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),He.DISABLED=new He(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
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
 */class lr{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new lr(0)}static cr(){return new lr(-1)}}/**
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
 */const Hu="LruGarbageCollector",oI=1048576;function Gu([n,e],[t,r]){const s=ie(n,t);return s===0?ie(e,r):s}class aI{constructor(e){this.Ir=e,this.buffer=new Re(Gu),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Gu(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class cI{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){q(Hu,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){_r(t)?q(Hu,"Ignoring IndexedDB error during garbage collection: ",t):await yr(t)}await this.Vr(3e5)})}}class lI{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return O.resolve(Li.ce);const r=new aI(t);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(q("LruGarbageCollector","Garbage collection skipped; disabled"),O.resolve(Wu)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(q("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Wu):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,s,i,a,c,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,a=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(r=m,c=Date.now(),this.removeTargets(e,r,t))).next(m=>(i=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(h=Date.now(),Gn()<=se.DEBUG&&q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(u-c)+`ms
	Removed ${m} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),O.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m})))}}function uI(n,e){return new lI(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class hI{constructor(){this.changes=new jn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Be.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?O.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
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
 *//**
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
 */class dI{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class fI{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Hr(r.mutation,s,Ze.empty(),ue.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,oe()).next(()=>r))}getLocalViewOfDocuments(e,t,r=oe()){const s=Sn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=Lr();return i.forEach((c,u)=>{a=a.insert(c,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Sn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,oe()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,s){let i=Vt();const a=Wr(),c=function(){return Wr()}();return t.forEach((u,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof ln)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),Hr(f.mutation,h,f.mutation.getFieldMask(),ue.now())):a.set(h.key,Ze.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((h,f)=>a.set(h,f)),t.forEach((h,f)=>c.set(h,new dI(f,a.get(h)??null))),c))}recalculateAndSaveOverlays(e,t){const r=Wr();let s=new _e((a,c)=>a-c),i=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(u=>{const h=t.get(u);if(h===null)return;let f=r.get(u)||Ze.empty();f=c.applyToLocalView(h,f),r.set(u,f);const m=(s.get(c.batchId)||oe()).add(u);s=s.insert(c.batchId,m)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),h=u.key,f=u.value,m=Fd();f.forEach(y=>{if(!i.has(y)){const w=Wd(t.get(y),r.get(y));w!==null&&m.set(y,w),i=i.add(y)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,m))}return O.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return K.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Nd(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):O.resolve(Sn());let c=Zr,u=i;return a.next(h=>O.forEach(h,(f,m)=>(c<m.largestBatchId&&(c=m.largestBatchId),i.get(f)?O.resolve():this.remoteDocumentCache.getEntry(e,f).next(y=>{u=u.insert(f,y)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,u,h,oe())).next(f=>({batchId:c,changes:Ld(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new K(t)).next(r=>{let s=Lr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Lr();return this.indexManager.getCollectionParents(e,i).next(c=>O.forEach(c,u=>{const h=function(m,y){return new vr(y,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((m,y)=>{a=a.insert(m,y)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((u,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,Be.newInvalidDocument(f)))});let c=Lr();return a.forEach((u,h)=>{const f=i.get(u);f!==void 0&&Hr(f.mutation,h,Ze.empty(),ue.now()),zi(t,h)&&(c=c.insert(u,h))}),c})}}/**
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
 */class pI{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return O.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:ft(s.createTime)}}(t)),O.resolve()}getNamedQuery(e,t){return O.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(s){return{name:s.name,query:rI(s.bundledQuery),readTime:ft(s.readTime)}}(t)),O.resolve()}}/**
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
 */class mI{constructor(){this.overlays=new _e(K.comparator),this.qr=new Map}getOverlay(e,t){return O.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Sn();return O.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.St(e,t,i)}),O.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),O.resolve()}getOverlaysForCollection(e,t,r){const s=Sn(),i=t.length+1,a=new K(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return O.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new _e((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=Sn(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=Sn(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=s)););return O.resolve(c)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Vv(t,r));let i=this.qr.get(t);i===void 0&&(i=oe(),this.qr.set(t,i)),this.qr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class gI{constructor(){this.sessionToken=Ne.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,O.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class tc{constructor(){this.Qr=new Re(xe.$r),this.Ur=new Re(xe.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new xe(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Gr(new xe(e,t))}zr(e,t){e.forEach(r=>this.removeReference(r,t))}jr(e){const t=new K(new ge([])),r=new xe(t,e),s=new xe(t,e+1),i=[];return this.Ur.forEachInRange([r,s],a=>{this.Gr(a),i.push(a.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new K(new ge([])),r=new xe(t,e),s=new xe(t,e+1);let i=oe();return this.Ur.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new xe(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class xe{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return K.comparator(e.key,t.key)||ie(e.Yr,t.Yr)}static Kr(e,t){return ie(e.Yr,t.Yr)||K.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class yI{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Re(xe.$r)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Dv(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.Zr=this.Zr.add(new xe(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return O.resolve(a)}lookupMutationBatch(e,t){return O.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.ei(r),i=s<0?0:s;return O.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?Wa:this.tr-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new xe(t,0),s=new xe(t,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],a=>{const c=this.Xr(a.Yr);i.push(c)}),O.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Re(ie);return t.forEach(s=>{const i=new xe(s,0),a=new xe(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],c=>{r=r.add(c.Yr)})}),O.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;K.isDocumentKey(i)||(i=i.child(""));const a=new xe(new K(i),0);let c=new Re(ie);return this.Zr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(u.Yr)),!0)},a),O.resolve(this.ti(c))}ti(e){const t=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){he(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return O.forEach(t.mutations,s=>{const i=new xe(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,t){const r=new xe(t,0),s=this.Zr.firstAfterOrEqual(r);return O.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class _I{constructor(e){this.ri=e,this.docs=function(){return new _e(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return O.resolve(r?r.document.mutableCopy():Be.newInvalidDocument(t))}getEntries(e,t){let r=Vt();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Be.newInvalidDocument(s))}),O.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Vt();const a=t.path,c=new K(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||G_(H_(f),r)<=0||(s.has(f.key)||zi(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return O.resolve(i)}getAllFromCollectionGroup(e,t,r,s){Y(9500)}ii(e,t){return O.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new vI(this)}getSize(e){return O.resolve(this.size)}}class vI extends hI{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),O.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class II{constructor(e){this.persistence=e,this.si=new jn(t=>Ka(t),Qa),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.oi=0,this._i=new tc,this.targetCount=0,this.ai=lr.ur()}forEachTarget(e,t){return this.si.forEach((r,s)=>t(s)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),O.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new lr(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,O.resolve()}updateTargetData(e,t){return this.Pr(t),O.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.si.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),O.waitFor(i).next(()=>s)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return O.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),O.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),O.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),O.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return O.resolve(r)}containsKey(e,t){return O.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class sf{constructor(e,t){this.ui={},this.overlays={},this.ci=new Li(0),this.li=!1,this.li=!0,this.hi=new gI,this.referenceDelegate=e(this),this.Pi=new II(this),this.indexManager=new sI,this.remoteDocumentCache=function(s){return new _I(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new nI(t),this.Ii=new pI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new mI,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new yI(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){q("MemoryPersistence","Starting transaction:",e);const s=new wI(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,t){return O.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,t)))}}class wI extends Q_{constructor(e){super(),this.currentSequenceNumber=e}}class nc{constructor(e){this.persistence=e,this.Ri=new tc,this.Vi=null}static mi(e){return new nc(e)}get fi(){if(this.Vi)return this.Vi;throw Y(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),O.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),O.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.fi,r=>{const s=K.fromPath(r);return this.gi(e,s).next(i=>{i||t.removeEntry(s,ee.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return O.or([()=>O.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class gi{constructor(e,t){this.persistence=e,this.pi=new jn(r=>X_(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=uI(this,t)}static mi(e,t){return new gi(e,t)}Ei(){}di(e){return O.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}wr(e){let t=0;return this.pr(e,r=>{t++}).next(()=>t)}pr(e,t){return O.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?O.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,a=>this.br(e,a,t).next(c=>{c||(r++,i.removeEntry(a,ee.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),O.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),O.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),O.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),O.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ys(e.data.value)),t}br(e,t,r){return O.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.pi.get(t);return O.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class rc{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=s}static As(e,t){let r=oe(),s=oe();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new rc(e,t.fromCache,r,s)}}/**
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
 */class EI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class TI{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return fy()?8:J_($e())>0?6:4}()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ys(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ws(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new EI;return this.Ss(e,t,a).next(c=>{if(i.result=c,this.Vs)return this.bs(e,t,a,c.size)})}).next(()=>i.result)}bs(e,t,r,s){return r.documentReadCount<this.fs?(Gn()<=se.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",Kn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),O.resolve()):(Gn()<=se.DEBUG&&q("QueryEngine","Query:",Kn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(Gn()<=se.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",Kn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,dt(t))):O.resolve())}ys(e,t){if(Ou(t))return O.resolve(null);let r=dt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=fi(t,null,"F"),r=dt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=oe(...i);return this.ps.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.Ds(t,c);return this.Cs(t,h,a,u.readTime)?this.ys(e,fi(t,null,"F")):this.vs(e,h,t,u)}))})))}ws(e,t,r,s){return Ou(t)||s.isEqual(ee.min())?O.resolve(null):this.ps.getDocuments(e,r).next(i=>{const a=this.Ds(t,i);return this.Cs(t,a,r,s)?O.resolve(null):(Gn()<=se.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Kn(t)),this.vs(e,a,t,W_(s,Zr)).next(c=>c))})}Ds(e,t){let r=new Re(Md(e));return t.forEach((s,i)=>{zi(e,i)&&(r=r.add(i))}),r}Cs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,t,r){return Gn()<=se.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",Kn(t)),this.ps.getDocumentsMatchingQuery(e,t,tn.min(),r)}vs(e,t,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const sc="LocalStore",SI=3e8;class AI{constructor(e,t,r,s){this.persistence=e,this.Fs=t,this.serializer=s,this.Ms=new _e(ie),this.xs=new jn(i=>Ka(i),Qa),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new fI(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function bI(n,e,t,r){return new AI(n,e,t,r)}async function of(n,e){const t=te(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Bs(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let u=oe();for(const h of s){a.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(r,u).next(h=>({Ls:h,removedBatchIds:a,addedBatchIds:c}))})})}function RI(n,e){const t=te(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.Ns.newChangeBuffer({trackRemovals:!0});return function(c,u,h,f){const m=h.batch,y=m.keys();let w=O.resolve();return y.forEach(P=>{w=w.next(()=>f.getEntry(u,P)).next(x=>{const T=h.docVersions.get(P);he(T!==null,48541),x.version.compareTo(T)<0&&(m.applyToRemoteDocument(x,h),x.isValidDocument()&&(x.setReadTime(h.commitVersion),f.addEntry(x)))})}),w.next(()=>c.mutationQueue.removeMutationBatch(u,m))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=oe();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(u=u.add(c.batch.mutations[h].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function af(n){const e=te(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Pi.getLastRemoteSnapshotVersion(t))}function xI(n,e){const t=te(n),r=e.snapshotVersion;let s=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.Ns.newChangeBuffer({trackRemovals:!0});s=t.Ms;const c=[];e.targetChanges.forEach((f,m)=>{const y=s.get(m);if(!y)return;c.push(t.Pi.removeMatchingKeys(i,f.removedDocuments,m).next(()=>t.Pi.addMatchingKeys(i,f.addedDocuments,m)));let w=y.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?w=w.withResumeToken(Ne.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):f.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(f.resumeToken,r)),s=s.insert(m,w),function(x,T,L){return x.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=SI?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(y,w,f)&&c.push(t.Pi.updateTargetData(i,w))});let u=Vt(),h=oe();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(CI(i,a,e.documentUpdates).next(f=>{u=f.ks,h=f.qs})),!r.isEqual(ee.min())){const f=t.Pi.getLastRemoteSnapshotVersion(i).next(m=>t.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return O.waitFor(c).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(t.Ms=s,i))}function CI(n,e,t){let r=oe(),s=oe();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=Vt();return t.forEach((c,u)=>{const h=i.get(c);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual(ee.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):q(sc,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",u.version)}),{ks:a,qs:s}})}function PI(n,e){const t=te(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Wa),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function kI(n,e){const t=te(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Pi.getTargetData(r,e).next(i=>i?(s=i,O.resolve(s)):t.Pi.allocateTargetId(r).next(a=>(s=new Gt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.xs.set(e,r.targetId)),r})}async function Ta(n,e,t){const r=te(n),s=r.Ms.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!_r(a))throw a;q(sc,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function Ku(n,e,t){const r=te(n);let s=ee.min(),i=oe();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,h,f){const m=te(u),y=m.xs.get(f);return y!==void 0?O.resolve(m.Ms.get(y)):m.Pi.getTargetData(h,f)}(r,a,dt(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,c.targetId).next(u=>{i=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(a,e,t?s:ee.min(),t?i:oe())).next(c=>(DI(r,gv(e),c),{documents:c,Qs:i})))}function DI(n,e,t){let r=n.Os.get(e)||ee.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Os.set(e,r)}class Qu{constructor(){this.activeTargetIds=Ev()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class VI{constructor(){this.Mo=new Qu,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Qu,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class NI{Oo(e){}shutdown(){}}/**
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
 */const Ju="ConnectivityMonitor";class Yu{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){q(Ju,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){q(Ju,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Hs=null;function Sa(){return Hs===null?Hs=function(){return 268435456+Math.round(2147483648*Math.random())}():Hs++,"0x"+Hs.toString(16)}/**
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
 */const Qo="RestConnection",OI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class MI{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===ui?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,t,r,s,i){const a=Sa(),c=this.zo(e,t.toUriEncodedString());q(Qo,`Sending RPC '${e}' ${a}:`,c,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,s,i);const{host:h}=new URL(c),f=pr(h);return this.Jo(e,c,u,r,f).then(m=>(q(Qo,`Received RPC '${e}' ${a}: `,m),m),m=>{throw ir(Qo,`RPC '${e}' ${a} failed with error: `,m,"url: ",c,"request:",r),m})}Ho(e,t,r,s,i,a){return this.Go(e,t,r,s,i)}jo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+gr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,t){const r=OI[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class jI{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Le="WebChannelConnection";class LI extends MI{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,s,i){const a=Sa();return new Promise((c,u)=>{const h=new cd;h.setWithCredentials(!0),h.listenOnce(ld.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Js.NO_ERROR:const m=h.getResponseJson();q(Le,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(m)),c(m);break;case Js.TIMEOUT:q(Le,`RPC '${e}' ${a} timed out`),u(new $(N.DEADLINE_EXCEEDED,"Request time out"));break;case Js.HTTP_ERROR:const y=h.getStatus();if(q(Le,`RPC '${e}' ${a} failed with status:`,y,"response text:",h.getResponseText()),y>0){let w=h.getResponseJson();Array.isArray(w)&&(w=w[0]);const P=w==null?void 0:w.error;if(P&&P.status&&P.message){const x=function(L){const U=L.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(U)>=0?U:N.UNKNOWN}(P.status);u(new $(x,P.message))}else u(new $(N.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new $(N.UNAVAILABLE,"Connection failed."));break;default:Y(9055,{l_:e,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{q(Le,`RPC '${e}' ${a} completed.`)}});const f=JSON.stringify(s);q(Le,`RPC '${e}' ${a} sending request:`,s),h.send(t,"POST",f,r,15)})}T_(e,t,r){const s=Sa(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=dd(),c=hd(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const f=i.join("");q(Le,`Creating RPC '${e}' stream ${s}: ${f}`,u);const m=a.createWebChannel(f,u);this.I_(m);let y=!1,w=!1;const P=new jI({Yo:T=>{w?q(Le,`Not sending because RPC '${e}' stream ${s} is closed:`,T):(y||(q(Le,`Opening RPC '${e}' stream ${s} transport.`),m.open(),y=!0),q(Le,`RPC '${e}' stream ${s} sending:`,T),m.send(T))},Zo:()=>m.close()}),x=(T,L,U)=>{T.listen(L,z=>{try{U(z)}catch(G){setTimeout(()=>{throw G},0)}})};return x(m,jr.EventType.OPEN,()=>{w||(q(Le,`RPC '${e}' stream ${s} transport opened.`),P.o_())}),x(m,jr.EventType.CLOSE,()=>{w||(w=!0,q(Le,`RPC '${e}' stream ${s} transport closed`),P.a_(),this.E_(m))}),x(m,jr.EventType.ERROR,T=>{w||(w=!0,ir(Le,`RPC '${e}' stream ${s} transport errored. Name:`,T.name,"Message:",T.message),P.a_(new $(N.UNAVAILABLE,"The operation could not be completed")))}),x(m,jr.EventType.MESSAGE,T=>{var L;if(!w){const U=T.data[0];he(!!U,16349);const z=U,G=(z==null?void 0:z.error)||((L=z[0])==null?void 0:L.error);if(G){q(Le,`RPC '${e}' stream ${s} received error:`,G);const ce=G.status;let de=function(I){const E=Ee[I];if(E!==void 0)return Gd(E)}(ce),A=G.message;de===void 0&&(de=N.INTERNAL,A="Unknown error status: "+ce+" with message "+G.message),w=!0,P.a_(new $(de,A)),m.close()}else q(Le,`RPC '${e}' stream ${s} received:`,U),P.u_(U)}}),x(c,ud.STAT_EVENT,T=>{T.stat===da.PROXY?q(Le,`RPC '${e}' stream ${s} detected buffering proxy`):T.stat===da.NOPROXY&&q(Le,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.__()},0),P}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}function Jo(){return typeof document<"u"?document:null}/**
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
 */function Gi(n){return new $v(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class cf{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Xu="PersistentStream";class lf{constructor(e,t,r,s,i,a,c,u){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new cf(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===N.RESOURCE_EXHAUSTED?(Dt(t.toString()),Dt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===t&&this.G_(r,s)},r=>{e(()=>{const s=new $(N.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return q(Xu,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(q(Xu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class FI extends lf{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Wv(this.serializer,e),r=function(i){if(!("targetChange"in i))return ee.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?ee.min():a.readTime?ft(a.readTime):ee.min()}(e);return this.listener.H_(t,r)}Y_(e){const t={};t.database=Ea(this.serializer),t.addTarget=function(i,a){let c;const u=a.target;if(c=ya(u)?{documents:Kv(i,u)}:{query:Qv(i,u).ft},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Jd(i,a.resumeToken);const h=va(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(ee.min())>0){c.readTime=mi(i,a.snapshotVersion.toTimestamp());const h=va(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=Yv(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){const t={};t.database=Ea(this.serializer),t.removeTarget=e,this.q_(t)}}class UI extends lf{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return he(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,he(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){he(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=Gv(e.writeResults,e.commitTime),r=ft(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=Ea(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Hv(this.serializer,r))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class BI{}class $I extends BI{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new $(N.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Go(e,Ia(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new $(N.UNKNOWN,i.toString())})}Ho(e,t,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Ho(e,Ia(t,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new $(N.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class zI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Dt(t),this.aa=!1):q("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Nn="RemoteStore";class qI{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(a=>{r.enqueueAndForget(async()=>{Ln(this)&&(q(Nn,"Restarting streams for network reachability change."),await async function(u){const h=te(u);h.Ea.add(4),await ps(h),h.Ra.set("Unknown"),h.Ea.delete(4),await Ki(h)}(this))})}),this.Ra=new zI(r,s)}}async function Ki(n){if(Ln(n))for(const e of n.da)await e(!0)}async function ps(n){for(const e of n.da)await e(!1)}function uf(n,e){const t=te(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),cc(t)?ac(t):Ir(t).O_()&&oc(t,e))}function ic(n,e){const t=te(n),r=Ir(t);t.Ia.delete(e),r.O_()&&hf(t,e),t.Ia.size===0&&(r.O_()?r.L_():Ln(t)&&t.Ra.set("Unknown"))}function oc(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ir(n).Y_(e)}function hf(n,e){n.Va.Ue(e),Ir(n).Z_(e)}function ac(n){n.Va=new Lv({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Ir(n).start(),n.Ra.ua()}function cc(n){return Ln(n)&&!Ir(n).x_()&&n.Ia.size>0}function Ln(n){return te(n).Ea.size===0}function df(n){n.Va=void 0}async function WI(n){n.Ra.set("Online")}async function HI(n){n.Ia.forEach((e,t)=>{oc(n,e)})}async function GI(n,e){df(n),cc(n)?(n.Ra.ha(e),ac(n)):n.Ra.set("Unknown")}async function KI(n,e,t){if(n.Ra.set("Online"),e instanceof Qd&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ia.delete(c),s.Va.removeTarget(c))}(n,e)}catch(r){q(Nn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await yi(n,r)}else if(e instanceof ei?n.Va.Ze(e):e instanceof Kd?n.Va.st(e):n.Va.tt(e),!t.isEqual(ee.min()))try{const r=await af(n.localStore);t.compareTo(r)>=0&&await function(i,a){const c=i.Va.Tt(a);return c.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.Ia.get(h);f&&i.Ia.set(h,f.withResumeToken(u.resumeToken,a))}}),c.targetMismatches.forEach((u,h)=>{const f=i.Ia.get(u);if(!f)return;i.Ia.set(u,f.withResumeToken(Ne.EMPTY_BYTE_STRING,f.snapshotVersion)),hf(i,u);const m=new Gt(f.target,u,h,f.sequenceNumber);oc(i,m)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){q(Nn,"Failed to raise snapshot:",r),await yi(n,r)}}async function yi(n,e,t){if(!_r(e))throw e;n.Ea.add(1),await ps(n),n.Ra.set("Offline"),t||(t=()=>af(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{q(Nn,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Ki(n)})}function ff(n,e){return e().catch(t=>yi(n,t,e))}async function Qi(n){const e=te(n),t=on(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Wa;for(;QI(e);)try{const s=await PI(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,JI(e,s)}catch(s){await yi(e,s)}pf(e)&&mf(e)}function QI(n){return Ln(n)&&n.Ta.length<10}function JI(n,e){n.Ta.push(e);const t=on(n);t.O_()&&t.X_&&t.ea(e.mutations)}function pf(n){return Ln(n)&&!on(n).x_()&&n.Ta.length>0}function mf(n){on(n).start()}async function YI(n){on(n).ra()}async function XI(n){const e=on(n);for(const t of n.Ta)e.ea(t.mutations)}async function ZI(n,e,t){const r=n.Ta.shift(),s=Xa.from(r,e,t);await ff(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Qi(n)}async function ew(n,e){e&&on(n).X_&&await async function(r,s){if(function(a){return Ov(a)&&a!==N.ABORTED}(s.code)){const i=r.Ta.shift();on(r).B_(),await ff(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Qi(r)}}(n,e),pf(n)&&mf(n)}async function Zu(n,e){const t=te(n);t.asyncQueue.verifyOperationInProgress(),q(Nn,"RemoteStore received new credentials");const r=Ln(t);t.Ea.add(3),await ps(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Ki(t)}async function tw(n,e){const t=te(n);e?(t.Ea.delete(2),await Ki(t)):e||(t.Ea.add(2),await ps(t),t.Ra.set("Unknown"))}function Ir(n){return n.ma||(n.ma=function(t,r,s){const i=te(t);return i.sa(),new FI(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Xo:WI.bind(null,n),t_:HI.bind(null,n),r_:GI.bind(null,n),H_:KI.bind(null,n)}),n.da.push(async e=>{e?(n.ma.B_(),cc(n)?ac(n):n.Ra.set("Unknown")):(await n.ma.stop(),df(n))})),n.ma}function on(n){return n.fa||(n.fa=function(t,r,s){const i=te(t);return i.sa(),new UI(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:YI.bind(null,n),r_:ew.bind(null,n),ta:XI.bind(null,n),na:ZI.bind(null,n)}),n.da.push(async e=>{e?(n.fa.B_(),await Qi(n)):(await n.fa.stop(),n.Ta.length>0&&(q(Nn,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class lc{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Pt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new lc(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function uc(n,e){if(Dt("AsyncQueue",`${e}: ${n}`),_r(n))return new $(N.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Yn{static emptySet(e){return new Yn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||K.comparator(t.key,r.key):(t,r)=>K.comparator(t.key,r.key),this.keyedMap=Lr(),this.sortedSet=new _e(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Yn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Yn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class eh{constructor(){this.ga=new _e(K.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):Y(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,r)=>{e.push(r)}),e}}class ur{constructor(e,t,r,s,i,a,c,u,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new ur(e,t,Yn.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$i(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class nw{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class rw{constructor(){this.queries=th(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const s=te(t),i=s.queries;s.queries=th(),i.forEach((a,c)=>{for(const u of c.Sa)u.onError(r)})})(this,new $(N.ABORTED,"Firestore shutting down"))}}function th(){return new jn(n=>Od(n),$i)}async function hc(n,e){const t=te(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new nw,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await t.onListen(s,!0);break;case 1:i.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=uc(a,`Initialization of query '${Kn(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&fc(t)}async function dc(n,e){const t=te(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.Sa.indexOf(e);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function sw(n,e){const t=te(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.Sa)c.Fa(s)&&(r=!0);a.wa=s}}r&&fc(t)}function iw(n,e,t){const r=te(n),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(t);r.queries.delete(e)}function fc(n){n.Ca.forEach(e=>{e.next()})}var Aa,nh;(nh=Aa||(Aa={})).Ma="default",nh.Cache="cache";class pc{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ur(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=ur.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Aa.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class gf{constructor(e){this.key=e}}class yf{constructor(e){this.key=e}}class ow{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=oe(),this.mutatedKeys=oe(),this.eu=Md(e),this.tu=new Yn(this.eu)}get nu(){return this.Ya}ru(e,t){const r=t?t.iu:new eh,s=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,m)=>{const y=s.get(f),w=zi(this.query,m)?m:null,P=!!y&&this.mutatedKeys.has(y.key),x=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let T=!1;y&&w?y.data.isEqual(w.data)?P!==x&&(r.track({type:3,doc:w}),T=!0):this.su(y,w)||(r.track({type:2,doc:w}),T=!0,(u&&this.eu(w,u)>0||h&&this.eu(w,h)<0)&&(c=!0)):!y&&w?(r.track({type:0,doc:w}),T=!0):y&&!w&&(r.track({type:1,doc:y}),T=!0,(u||h)&&(c=!0)),T&&(w?(a=a.add(w),i=x?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:a,iu:r,Cs:c,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort((f,m)=>function(w,P){const x=T=>{switch(T){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y(20277,{Rt:T})}};return x(w)-x(P)}(f.type,m.type)||this.eu(f.doc,m.doc)),this.ou(r),s=s??!1;const c=t&&!s?this._u():[],u=this.Xa.size===0&&this.current&&!s?1:0,h=u!==this.Za;return this.Za=u,a.length!==0||h?{snapshot:new ur(this.query,e.tu,i,a,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new eh,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Ya=this.Ya.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ya=this.Ya.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=oe(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const t=[];return e.forEach(r=>{this.Xa.has(r)||t.push(new yf(r))}),this.Xa.forEach(r=>{e.has(r)||t.push(new gf(r))}),t}cu(e){this.Ya=e.Qs,this.Xa=oe();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return ur.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const mc="SyncEngine";class aw{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class cw{constructor(e){this.key=e,this.hu=!1}}class lw{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new jn(c=>Od(c),$i),this.Iu=new Map,this.Eu=new Set,this.du=new _e(K.comparator),this.Au=new Map,this.Ru=new tc,this.Vu={},this.mu=new Map,this.fu=lr.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function uw(n,e,t=!0){const r=Tf(n);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await _f(r,e,t,!0),s}async function hw(n,e){const t=Tf(n);await _f(t,e,!0,!1)}async function _f(n,e,t,r){const s=await kI(n.localStore,dt(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await dw(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&uf(n.remoteStore,s),c}async function dw(n,e,t,r,s){n.pu=(m,y,w)=>async function(x,T,L,U){let z=T.view.ru(L);z.Cs&&(z=await Ku(x.localStore,T.query,!1).then(({documents:A})=>T.view.ru(A,z)));const G=U&&U.targetChanges.get(T.targetId),ce=U&&U.targetMismatches.get(T.targetId)!=null,de=T.view.applyChanges(z,x.isPrimaryClient,G,ce);return sh(x,T.targetId,de.au),de.snapshot}(n,m,y,w);const i=await Ku(n.localStore,e,!0),a=new ow(e,i.Qs),c=a.ru(i.documents),u=fs.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(c,n.isPrimaryClient,u);sh(n,t,h.au);const f=new aw(e,t,a);return n.Tu.set(e,f),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),h.snapshot}async function fw(n,e,t){const r=te(n),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(a=>!$i(a,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ta(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&ic(r.remoteStore,s.targetId),ba(r,s.targetId)}).catch(yr)):(ba(r,s.targetId),await Ta(r.localStore,s.targetId,!0))}async function pw(n,e){const t=te(n),r=t.Tu.get(e),s=t.Iu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),ic(t.remoteStore,r.targetId))}async function mw(n,e,t){const r=Ew(n);try{const s=await function(a,c){const u=te(a),h=ue.now(),f=c.reduce((w,P)=>w.add(P.key),oe());let m,y;return u.persistence.runTransaction("Locally write mutations","readwrite",w=>{let P=Vt(),x=oe();return u.Ns.getEntries(w,f).next(T=>{P=T,P.forEach((L,U)=>{U.isValidDocument()||(x=x.add(L))})}).next(()=>u.localDocuments.getOverlayedDocuments(w,P)).next(T=>{m=T;const L=[];for(const U of c){const z=Pv(U,m.get(U.key).overlayedDocument);z!=null&&L.push(new ln(U.key,z,Rd(z.value.mapValue),tt.exists(!0)))}return u.mutationQueue.addMutationBatch(w,h,L,c)}).next(T=>{y=T;const L=T.applyToLocalDocumentSet(m,x);return u.documentOverlayCache.saveOverlays(w,T.batchId,L)})}).then(()=>({batchId:y.batchId,changes:Ld(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,u){let h=a.Vu[a.currentUser.toKey()];h||(h=new _e(ie)),h=h.insert(c,u),a.Vu[a.currentUser.toKey()]=h}(r,s.batchId,t),await ms(r,s.changes),await Qi(r.remoteStore)}catch(s){const i=uc(s,"Failed to persist write");t.reject(i)}}async function vf(n,e){const t=te(n);try{const r=await xI(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Au.get(i);a&&(he(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?he(a.hu,14607):s.removedDocuments.size>0&&(he(a.hu,42227),a.hu=!1))}),await ms(t,r,e)}catch(r){await yr(r)}}function rh(n,e,t){const r=te(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tu.forEach((i,a)=>{const c=a.view.va(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const u=te(a);u.onlineState=c;let h=!1;u.queries.forEach((f,m)=>{for(const y of m.Sa)y.va(c)&&(h=!0)}),h&&fc(u)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function gw(n,e,t){const r=te(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Au.get(e),i=s&&s.key;if(i){let a=new _e(K.comparator);a=a.insert(i,Be.newNoDocument(i,ee.min()));const c=oe().add(i),u=new Hi(ee.min(),new Map,new _e(ie),a,c);await vf(r,u),r.du=r.du.remove(i),r.Au.delete(e),gc(r)}else await Ta(r.localStore,e,!1).then(()=>ba(r,e,t)).catch(yr)}async function yw(n,e){const t=te(n),r=e.batch.batchId;try{const s=await RI(t.localStore,e);wf(t,r,null),If(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ms(t,s)}catch(s){await yr(s)}}async function _w(n,e,t){const r=te(n);try{const s=await function(a,c){const u=te(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,c).next(m=>(he(m!==null,37113),f=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);wf(r,e,t),If(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ms(r,s)}catch(s){await yr(s)}}function If(n,e){(n.mu.get(e)||[]).forEach(t=>{t.resolve()}),n.mu.delete(e)}function wf(n,e,t){const r=te(n);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function ba(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach(r=>{n.Ru.containsKey(r)||Ef(n,r)})}function Ef(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(ic(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),gc(n))}function sh(n,e,t){for(const r of t)r instanceof gf?(n.Ru.addReference(r.key,e),vw(n,r)):r instanceof yf?(q(mc,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||Ef(n,r.key)):Y(19791,{wu:r})}function vw(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Eu.has(r)||(q(mc,"New document in limbo: "+t),n.Eu.add(r),gc(n))}function gc(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new K(ge.fromString(e)),r=n.fu.next();n.Au.set(r,new cw(t)),n.du=n.du.insert(t,r),uf(n.remoteStore,new Gt(dt(Bi(t.path)),r,"TargetPurposeLimboResolution",Li.ce))}}async function ms(n,e,t){const r=te(n),s=[],i=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach((c,u)=>{a.push(r.pu(u,e,t).then(h=>{var f;if((h||t)&&r.isPrimaryClient){const m=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){s.push(h);const m=rc.As(u.targetId,h);i.push(m)}}))}),await Promise.all(a),r.Pu.H_(s),await async function(u,h){const f=te(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>O.forEach(h,y=>O.forEach(y.Es,w=>f.persistence.referenceDelegate.addReference(m,y.targetId,w)).next(()=>O.forEach(y.ds,w=>f.persistence.referenceDelegate.removeReference(m,y.targetId,w)))))}catch(m){if(!_r(m))throw m;q(sc,"Failed to update sequence numbers: "+m)}for(const m of h){const y=m.targetId;if(!m.fromCache){const w=f.Ms.get(y),P=w.snapshotVersion,x=w.withLastLimboFreeSnapshotVersion(P);f.Ms=f.Ms.insert(y,x)}}}(r.localStore,i))}async function Iw(n,e){const t=te(n);if(!t.currentUser.isEqual(e)){q(mc,"User change. New user:",e.toKey());const r=await of(t.localStore,e);t.currentUser=e,function(i,a){i.mu.forEach(c=>{c.forEach(u=>{u.reject(new $(N.CANCELLED,a))})}),i.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ms(t,r.Ls)}}function ww(n,e){const t=te(n),r=t.Au.get(e);if(r&&r.hu)return oe().add(r.key);{let s=oe();const i=t.Iu.get(e);if(!i)return s;for(const a of i){const c=t.Tu.get(a);s=s.unionWith(c.view.nu)}return s}}function Tf(n){const e=te(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=vf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ww.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=gw.bind(null,e),e.Pu.H_=sw.bind(null,e.eventManager),e.Pu.yu=iw.bind(null,e.eventManager),e}function Ew(n){const e=te(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=yw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=_w.bind(null,e),e}class _i{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Gi(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return bI(this.persistence,new TI,e.initialUser,this.serializer)}Cu(e){return new sf(nc.mi,this.serializer)}Du(e){return new VI}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}_i.provider={build:()=>new _i};class Tw extends _i{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){he(this.persistence.referenceDelegate instanceof gi,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new cI(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?He.withCacheSize(this.cacheSizeBytes):He.DEFAULT;return new sf(r=>gi.mi(r,t),this.serializer)}}class Ra{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>rh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Iw.bind(null,this.syncEngine),await tw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new rw}()}createDatastore(e){const t=Gi(e.databaseInfo.databaseId),r=function(i){return new LI(i)}(e.databaseInfo);return function(i,a,c,u){return new $I(i,a,c,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,c){return new qI(r,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>rh(this.syncEngine,t,0),function(){return Yu.v()?new Yu:new NI}())}createSyncEngine(e,t){return function(s,i,a,c,u,h,f){const m=new lw(s,i,a,c,u,h);return f&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=te(s);q(Nn,"RemoteStore shutting down."),i.Ea.add(5),await ps(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Ra.provider={build:()=>new Ra};/**
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
 *//**
 * @license
 * Copyright 2017 Google LLC
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
 */class yc{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Dt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const an="FirestoreClient";class Sw{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Ue.UNAUTHENTICATED,this.clientId=qa.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{q(an,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(q(an,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Pt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=uc(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Yo(n,e){n.asyncQueue.verifyOperationInProgress(),q(an,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await of(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function ih(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Aw(n);q(an,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Zu(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Zu(e.remoteStore,s)),n._onlineComponents=e}async function Aw(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){q(an,"Using user provided OfflineComponentProvider");try{await Yo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===N.FAILED_PRECONDITION||s.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;ir("Error using user provided cache. Falling back to memory cache: "+t),await Yo(n,new _i)}}else q(an,"Using default OfflineComponentProvider"),await Yo(n,new Tw(void 0));return n._offlineComponents}async function Sf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(q(an,"Using user provided OnlineComponentProvider"),await ih(n,n._uninitializedComponentsProvider._online)):(q(an,"Using default OnlineComponentProvider"),await ih(n,new Ra))),n._onlineComponents}function bw(n){return Sf(n).then(e=>e.syncEngine)}async function vi(n){const e=await Sf(n),t=e.eventManager;return t.onListen=uw.bind(null,e.syncEngine),t.onUnlisten=fw.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=hw.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=pw.bind(null,e.syncEngine),t}function Rw(n,e,t={}){const r=new Pt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,u,h){const f=new yc({next:y=>{f.Nu(),a.enqueueAndForget(()=>dc(i,m));const w=y.docs.has(c);!w&&y.fromCache?h.reject(new $(N.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&y.fromCache&&u&&u.source==="server"?h.reject(new $(N.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(y)},error:y=>h.reject(y)}),m=new pc(Bi(c.path),f,{includeMetadataChanges:!0,qa:!0});return hc(i,m)}(await vi(n),n.asyncQueue,e,t,r)),r.promise}function xw(n,e,t={}){const r=new Pt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,u,h){const f=new yc({next:y=>{f.Nu(),a.enqueueAndForget(()=>dc(i,m)),y.fromCache&&u.source==="server"?h.reject(new $(N.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(y)},error:y=>h.reject(y)}),m=new pc(c,f,{includeMetadataChanges:!0,qa:!0});return hc(i,m)}(await vi(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function Af(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const oh=new Map;/**
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
 */const bf="firestore.googleapis.com",ah=!0;class ch{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new $(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=bf,this.ssl=ah}else this.host=e.host,this.ssl=e.ssl??ah;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=rf;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<oI)throw new $(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}z_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Af(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new $(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new $(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new $(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ji{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ch({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ch(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new V_;switch(r.type){case"firstParty":return new j_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=oh.get(t);r&&(q("ComponentProvider","Removing Datastore"),oh.delete(t),r.terminate())}(this),Promise.resolve()}}function Cw(n,e,t,r={}){var h;n=Qe(n,Ji);const s=pr(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;s&&(td(`https://${c}`),nd("Firestore",!0)),i.host!==bf&&i.host!==c&&ir("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:c,ssl:s,emulatorOptions:r};if(!kn(u,a)&&(n._setSettings(u),r.mockUserToken)){let f,m;if(typeof r.mockUserToken=="string")f=r.mockUserToken,m=Ue.MOCK_USER;else{f=sy(r.mockUserToken,(h=n._app)==null?void 0:h.options.projectId);const y=r.mockUserToken.sub||r.mockUserToken.user_id;if(!y)throw new $(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Ue(y)}n._authCredentials=new N_(new pd(f,m))}}/**
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
 */class Lt{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Lt(this.firestore,e,this._query)}}class Ie{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ie(this.firestore,e,this._key)}toJSON(){return{type:Ie._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(hs(t,Ie._jsonSchema))return new Ie(e,r||null,new K(ge.fromString(t.referencePath)))}}Ie._jsonSchemaVersion="firestore/documentReference/1.0",Ie._jsonSchema={type:Se("string",Ie._jsonSchemaVersion),referencePath:Se("string")};class Xt extends Lt{constructor(e,t,r){super(e,t,Bi(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ie(this.firestore,null,new K(e))}withConverter(e){return new Xt(this.firestore,e,this._path)}}function Nt(n,e,...t){if(n=Ce(n),md("collection","path",e),n instanceof Ji){const r=ge.fromString(e,...t);return wu(r),new Xt(n,null,r)}{if(!(n instanceof Ie||n instanceof Xt))throw new $(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ge.fromString(e,...t));return wu(r),new Xt(n.firestore,null,r)}}function Je(n,e,...t){if(n=Ce(n),arguments.length===1&&(e=qa.newId()),md("doc","path",e),n instanceof Ji){const r=ge.fromString(e,...t);return Iu(r),new Ie(n,null,new K(r))}{if(!(n instanceof Ie||n instanceof Xt))throw new $(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ge.fromString(e,...t));return Iu(r),new Ie(n.firestore,n instanceof Xt?n.converter:null,new K(r))}}/**
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
 */const lh="AsyncQueue";class uh{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new cf(this,"async_queue_retry"),this._c=()=>{const r=Jo();r&&q(lh,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=Jo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Jo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new Pt;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!_r(e))throw e;q(lh,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Dt("INTERNAL UNHANDLED ERROR: ",hh(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=lc.createAndSchedule(this,e,t,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&Y(47125,{Pc:hh(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function hh(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function dh(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class Ot extends Ji{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new uh,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new uh(e),this._firestoreClient=void 0,await e}}}function Pw(n,e){const t=typeof n=="object"?n:$r(),r=typeof n=="string"?n:e||ui,s=$a(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=ny("firestore");i&&Cw(s,...i)}return s}function Yi(n){if(n._terminated)throw new $(N.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||kw(n),n._firestoreClient}function kw(n){var r,s,i;const e=n._freezeSettings(),t=function(c,u,h,f){return new tv(c,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Af(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,e);n._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new Sw(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}}(n._componentsProvider))}/**
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
 */class et{constructor(e){this._byteString=e}static fromBase64String(e){try{return new et(Ne.fromBase64String(e))}catch(t){throw new $(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new et(Ne.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:et._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(hs(e,et._jsonSchema))return et.fromBase64String(e.bytes)}}et._jsonSchemaVersion="firestore/bytes/1.0",et._jsonSchema={type:Se("string",et._jsonSchemaVersion),bytes:Se("string")};/**
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
 */class Xi{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new $(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ve(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Zi{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class pt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new $(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new $(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ie(this._lat,e._lat)||ie(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:pt._jsonSchemaVersion}}static fromJSON(e){if(hs(e,pt._jsonSchema))return new pt(e.latitude,e.longitude)}}pt._jsonSchemaVersion="firestore/geoPoint/1.0",pt._jsonSchema={type:Se("string",pt._jsonSchemaVersion),latitude:Se("number"),longitude:Se("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class mt{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:mt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(hs(e,mt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new mt(e.vectorValues);throw new $(N.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}mt._jsonSchemaVersion="firestore/vectorValue/1.0",mt._jsonSchema={type:Se("string",mt._jsonSchemaVersion),vectorValues:Se("object")};/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Dw=/^__.*__$/;class Vw{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new ln(e,this.data,this.fieldMask,t,this.fieldTransforms):new ds(e,this.data,t,this.fieldTransforms)}}class Rf{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new ln(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function xf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y(40011,{Ac:n})}}class _c{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new _c({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Ii(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(xf(this.Ac)&&Dw.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class Nw{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Gi(e)}Cc(e,t,r,s=!1){return new _c({Ac:e,methodName:t,Dc:r,path:Ve.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function eo(n){const e=n._freezeSettings(),t=Gi(n._databaseId);return new Nw(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Cf(n,e,t,r,s,i={}){const a=n.Cc(i.merge||i.mergeFields?2:0,e,t,s);Ic("Data must be an object, but it was:",a,r);const c=Pf(r,a);let u,h;if(i.merge)u=new Ze(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const y=xa(e,m,t);if(!a.contains(y))throw new $(N.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);Df(f,y)||f.push(y)}u=new Ze(f),h=a.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=a.fieldTransforms;return new Vw(new Ge(c),u,h)}class to extends Zi{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof to}}class vc extends Zi{_toFieldTransform(e){return new bv(e.path,new ss)}isEqual(e){return e instanceof vc}}function Ow(n,e,t,r){const s=n.Cc(1,e,t);Ic("Data must be an object, but it was:",s,r);const i=[],a=Ge.empty();cn(r,(u,h)=>{const f=wc(e,u,t);h=Ce(h);const m=s.yc(f);if(h instanceof to)i.push(f);else{const y=gs(h,m);y!=null&&(i.push(f),a.set(f,y))}});const c=new Ze(i);return new Rf(a,c,s.fieldTransforms)}function Mw(n,e,t,r,s,i){const a=n.Cc(1,e,t),c=[xa(e,r,t)],u=[s];if(i.length%2!=0)throw new $(N.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<i.length;y+=2)c.push(xa(e,i[y])),u.push(i[y+1]);const h=[],f=Ge.empty();for(let y=c.length-1;y>=0;--y)if(!Df(h,c[y])){const w=c[y];let P=u[y];P=Ce(P);const x=a.yc(w);if(P instanceof to)h.push(w);else{const T=gs(P,x);T!=null&&(h.push(w),f.set(w,T))}}const m=new Ze(h);return new Rf(f,m,a.fieldTransforms)}function jw(n,e,t,r=!1){return gs(t,n.Cc(r?4:3,e))}function gs(n,e){if(kf(n=Ce(n)))return Ic("Unsupported field value:",e,n),Pf(n,e);if(n instanceof Zi)return function(r,s){if(!xf(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const c of r){let u=gs(c,s.wc(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=Ce(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Tv(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ue.fromDate(r);return{timestampValue:mi(s.serializer,i)}}if(r instanceof ue){const i=new ue(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:mi(s.serializer,i)}}if(r instanceof pt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof et)return{bytesValue:Jd(s.serializer,r._byteString)};if(r instanceof Ie){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ec(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof mt)return function(a,c){return{mapValue:{fields:{[Sd]:{stringValue:bd},[hi]:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw c.Sc("VectorValues must only contain numeric values.");return Ja(c.serializer,h)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${ji(r)}`)}(n,e)}function Pf(n,e){const t={};return _d(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):cn(n,(r,s)=>{const i=gs(s,e.mc(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function kf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ue||n instanceof pt||n instanceof et||n instanceof Ie||n instanceof Zi||n instanceof mt)}function Ic(n,e,t){if(!kf(t)||!gd(t)){const r=ji(t);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function xa(n,e,t){if((e=Ce(e))instanceof Xi)return e._internalPath;if(typeof e=="string")return wc(n,e);throw Ii("Field path arguments must be of type string or ",n,!1,void 0,t)}const Lw=new RegExp("[~\\*/\\[\\]]");function wc(n,e,t){if(e.search(Lw)>=0)throw Ii(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Xi(...e.split("."))._internalPath}catch{throw Ii(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ii(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new $(N.INVALID_ARGUMENT,c+n+u)}function Df(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Vf{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ie(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Fw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(no("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Fw extends Vf{data(){return super.data()}}function no(n,e){return typeof e=="string"?wc(n,e):e instanceof Xi?e._internalPath:e._delegate._internalPath}/**
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
 */function Nf(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new $(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ec{}class Tc extends Ec{}function Zt(n,e,...t){let r=[];e instanceof Ec&&r.push(e),r=r.concat(t),function(i){const a=i.filter(u=>u instanceof Sc).length,c=i.filter(u=>u instanceof ro).length;if(a>1||a>0&&c>0)throw new $(N.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class ro extends Tc{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new ro(e,t,r)}_apply(e){const t=this._parse(e);return Mf(e._query,t),new Lt(e.firestore,e.converter,_a(e._query,t))}_parse(e){const t=eo(e.firestore);return function(i,a,c,u,h,f,m){let y;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new $(N.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){ph(m,f);const P=[];for(const x of m)P.push(fh(u,i,x));y={arrayValue:{values:P}}}else y=fh(u,i,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||ph(m,f),y=jw(c,a,m,f==="in"||f==="not-in");return Te.create(h,f,y)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Rt(n,e,t){const r=e,s=no("where",n);return ro._create(s,r,t)}class Sc extends Ec{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Sc(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:ut.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const c=i.getFlattenedFilters();for(const u of c)Mf(a,u),a=_a(a,u)}(e._query,t),new Lt(e.firestore,e.converter,_a(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ac extends Tc{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Ac(e,t)}_apply(e){const t=function(s,i,a){if(s.startAt!==null)throw new $(N.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new $(N.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new rs(i,a)}(e._query,this._field,this._direction);return new Lt(e.firestore,e.converter,function(s,i){const a=s.explicitOrderBy.concat([i]);return new vr(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function Of(n,e="asc"){const t=e,r=no("orderBy",n);return Ac._create(r,t)}class bc extends Tc{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new bc(e,t,r)}_apply(e){return new Lt(e.firestore,e.converter,fi(e._query,this._limit,this._limitType))}}function iS(n){return q_("limit",n),bc._create("limit",n,"F")}function fh(n,e,t){if(typeof(t=Ce(t))=="string"){if(t==="")throw new $(N.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Nd(e)&&t.indexOf("/")!==-1)throw new $(N.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ge.fromString(t));if(!K.isDocumentKey(r))throw new $(N.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Cu(n,new K(r))}if(t instanceof Ie)return Cu(n,t._key);throw new $(N.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ji(t)}.`)}function ph(n,e){if(!Array.isArray(n)||n.length===0)throw new $(N.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Mf(n,e){const t=function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new $(N.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(N.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Uw{convertValue(e,t="none"){switch(sn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return we(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(rn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Y(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return cn(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var r,s,i;const t=(i=(s=(r=e.fields)==null?void 0:r[hi].arrayValue)==null?void 0:s.values)==null?void 0:i.map(a=>we(a.doubleValue));return new mt(t)}convertGeoPoint(e){return new pt(we(e.latitude),we(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Ui(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(es(e));default:return null}}convertTimestamp(e){const t=nn(e);return new ue(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ge.fromString(e);he(nf(r),9688,{name:e});const s=new ts(r.get(1),r.get(3)),i=new K(r.popFirst(5));return s.isEqual(t)||Dt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function jf(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class Ur{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class xn extends Vf{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ti(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(no("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new $(N.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=xn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}xn._jsonSchemaVersion="firestore/documentSnapshot/1.0",xn._jsonSchema={type:Se("string",xn._jsonSchemaVersion),bundleSource:Se("string","DocumentSnapshot"),bundleName:Se("string"),bundle:Se("string")};class ti extends xn{data(e={}){return super.data(e)}}class Cn{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Ur(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new ti(this._firestore,this._userDataWriter,r.key,r,new Ur(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new $(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const u=new ti(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ur(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const u=new ti(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ur(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),f=a.indexOf(c.doc.key)),{type:Bw(c.type),doc:u,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new $(N.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Cn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=qa.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Bw(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y(61501,{type:n})}}/**
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
 */function so(n){n=Qe(n,Ie);const e=Qe(n.firestore,Ot);return Rw(Yi(e),n._key).then(t=>Ff(e,n,t))}Cn._jsonSchemaVersion="firestore/querySnapshot/1.0",Cn._jsonSchema={type:Se("string",Cn._jsonSchemaVersion),bundleSource:Se("string","QuerySnapshot"),bundleName:Se("string"),bundle:Se("string")};class Rc extends Uw{constructor(e){super(),this.firestore=e}convertBytes(e){return new et(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ie(this.firestore,null,t)}}function hr(n){n=Qe(n,Lt);const e=Qe(n.firestore,Ot),t=Yi(e),r=new Rc(e);return Nf(n._query),xw(t,n._query).then(s=>new Cn(e,r,n,s))}function xc(n,e,t){n=Qe(n,Ie);const r=Qe(n.firestore,Ot),s=jf(n.converter,e,t);return oo(r,[Cf(eo(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,tt.none())])}function io(n,e,t,...r){n=Qe(n,Ie);const s=Qe(n.firestore,Ot),i=eo(s);let a;return a=typeof(e=Ce(e))=="string"||e instanceof Xi?Mw(i,"updateDoc",n._key,e,t,r):Ow(i,"updateDoc",n._key,e),oo(s,[a.toMutation(n._key,tt.exists(!0))])}function Lf(n){return oo(Qe(n.firestore,Ot),[new Ya(n._key,tt.none())])}function Cc(n,e){const t=Qe(n.firestore,Ot),r=Je(n),s=jf(n.converter,e);return oo(t,[Cf(eo(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,tt.exists(!1))]).then(()=>r)}function $w(n,...e){var u,h,f;n=Ce(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||dh(e[r])||(t=e[r++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(dh(e[r])){const m=e[r];e[r]=(u=m.next)==null?void 0:u.bind(m),e[r+1]=(h=m.error)==null?void 0:h.bind(m),e[r+2]=(f=m.complete)==null?void 0:f.bind(m)}let i,a,c;if(n instanceof Ie)a=Qe(n.firestore,Ot),c=Bi(n._key.path),i={next:m=>{e[r]&&e[r](Ff(a,n,m))},error:e[r+1],complete:e[r+2]};else{const m=Qe(n,Lt);a=Qe(m.firestore,Ot),c=m._query;const y=new Rc(a);i={next:w=>{e[r]&&e[r](new Cn(a,y,m,w))},error:e[r+1],complete:e[r+2]},Nf(n._query)}return function(y,w,P,x){const T=new yc(x),L=new pc(w,T,P);return y.asyncQueue.enqueueAndForget(async()=>hc(await vi(y),L)),()=>{T.Nu(),y.asyncQueue.enqueueAndForget(async()=>dc(await vi(y),L))}}(Yi(a),c,s,i)}function oo(n,e){return function(r,s){const i=new Pt;return r.asyncQueue.enqueueAndForget(async()=>mw(await bw(r),s,i)),i.promise}(Yi(n),e)}function Ff(n,e,t){const r=t.docs.get(e._key),s=new Rc(n);return new xn(n,s,e._key,r,new Ur(t.hasPendingWrites,t.fromCache),e.converter)}function Pc(){return new vc("serverTimestamp")}(function(e,t=!0){(function(s){gr=s})(mr),sr(new Dn("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new Ot(new O_(r.getProvider("auth-internal")),new L_(a,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new $(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ts(h.options.projectId,f)}(a,s),a);return i={useFetchStreams:t,...i},c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Jt(gu,yu,e),Jt(gu,yu,"esm2020")})();function Uf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zw=Uf,Bf=new ls("auth","Firebase",Uf());/**
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
 */const wi=new Ua("@firebase/auth");function qw(n,...e){wi.logLevel<=se.WARN&&wi.warn(`Auth (${mr}): ${n}`,...e)}function ni(n,...e){wi.logLevel<=se.ERROR&&wi.error(`Auth (${mr}): ${n}`,...e)}/**
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
 */function _t(n,...e){throw Dc(n,...e)}function lt(n,...e){return Dc(n,...e)}function kc(n,e,t){const r={...zw(),[e]:t};return new ls("auth","Firebase",r).create(e,{appName:n.name})}function Pn(n){return kc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ww(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&_t(n,"argument-error"),kc(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Dc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Bf.create(n,...e)}function Z(n,e,...t){if(!n)throw Dc(e,...t)}function xt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ni(e),new Error(e)}function Mt(n,e){n||xt(e)}/**
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
 */function Ca(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function Hw(){return mh()==="http:"||mh()==="https:"}function mh(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function Gw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Hw()||uy()||"connection"in navigator)?navigator.onLine:!0}function Kw(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class ys{constructor(e,t){this.shortDelay=e,this.longDelay=t,Mt(t>e,"Short delay should be less than long delay!"),this.isMobile=ay()||hy()}get(){return Gw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Vc(n,e){Mt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class $f{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;xt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;xt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;xt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Qw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Jw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Yw=new ys(3e4,6e4);function Nc(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function wr(n,e,t,r,s={}){return zf(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=us({key:n.config.apiKey,...a}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const h={method:e,headers:u,...i};return ly()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&pr(n.emulatorConfig.host)&&(h.credentials="include"),$f.fetch()(await qf(n,n.config.apiHost,t,c),h)})}async function zf(n,e,t){n._canInitEmulator=!1;const r={...Qw,...e};try{const s=new Zw(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Gs(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[u,h]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gs(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Gs(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw Gs(n,"user-disabled",a);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw kc(n,f,h);_t(n,f)}}catch(s){if(s instanceof jt)throw s;_t(n,"network-request-failed",{message:String(s)})}}async function Xw(n,e,t,r,s={}){const i=await wr(n,e,t,r,s);return"mfaPendingCredential"in i&&_t(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function qf(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?Vc(n.config,s):`${n.config.apiScheme}://${s}`;return Jw.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class Zw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(lt(this.auth,"network-request-failed")),Yw.get())})}}function Gs(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=lt(n,e,r);return s.customData._tokenResponse=t,s}/**
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
 */async function eE(n,e){return wr(n,"POST","/v1/accounts:delete",e)}async function Ei(n,e){return wr(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Gr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function tE(n,e=!1){const t=Ce(n),r=await t.getIdToken(e),s=Oc(r);Z(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Gr(Xo(s.auth_time)),issuedAtTime:Gr(Xo(s.iat)),expirationTime:Gr(Xo(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Xo(n){return Number(n)*1e3}function Oc(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ni("JWT malformed, contained fewer than 3 sections"),null;try{const s=Yh(t);return s?JSON.parse(s):(ni("Failed to decode base64 JWT payload"),null)}catch(s){return ni("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function gh(n){const e=Oc(n);return Z(e,"internal-error"),Z(typeof e.exp<"u","internal-error"),Z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function as(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof jt&&nE(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function nE({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class rE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Pa{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gr(this.lastLoginAt),this.creationTime=Gr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ti(n){var m;const e=n.auth,t=await n.getIdToken(),r=await as(n,Ei(e,{idToken:t}));Z(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(m=s.providerUserInfo)!=null&&m.length?Wf(s.providerUserInfo):[],a=iE(n.providerData,i),c=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),h=c?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Pa(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,f)}async function sE(n){const e=Ce(n);await Ti(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function iE(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Wf(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function oE(n,e){const t=await zf(n,{},async()=>{const r=us({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await qf(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:r};return n.emulatorConfig&&pr(n.emulatorConfig.host)&&(u.credentials="include"),$f.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function aE(n,e){return wr(n,"POST","/v2/accounts:revokeToken",Nc(n,e))}/**
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
 */class Xn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken<"u","internal-error"),Z(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):gh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Z(e.length!==0,"internal-error");const t=gh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await oE(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Xn;return r&&(Z(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(Z(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(Z(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Xn,this.toJSON())}_performRefresh(){return xt("not implemented")}}/**
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
 */function $t(n,e){Z(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class at{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new rE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Pa(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await as(this,this.stsTokenManager.getToken(this.auth,e));return Z(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return tE(this,e)}reload(){return sE(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new at({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ti(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ot(this.auth.app))return Promise.reject(Pn(this.auth));const e=await this.getIdToken();return await as(this,eE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,c=t.tenantId??void 0,u=t._redirectEventId??void 0,h=t.createdAt??void 0,f=t.lastLoginAt??void 0,{uid:m,emailVerified:y,isAnonymous:w,providerData:P,stsTokenManager:x}=t;Z(m&&x,e,"internal-error");const T=Xn.fromJSON(this.name,x);Z(typeof m=="string",e,"internal-error"),$t(r,e.name),$t(s,e.name),Z(typeof y=="boolean",e,"internal-error"),Z(typeof w=="boolean",e,"internal-error"),$t(i,e.name),$t(a,e.name),$t(c,e.name),$t(u,e.name),$t(h,e.name),$t(f,e.name);const L=new at({uid:m,auth:e,email:s,emailVerified:y,displayName:r,isAnonymous:w,photoURL:a,phoneNumber:i,tenantId:c,stsTokenManager:T,createdAt:h,lastLoginAt:f});return P&&Array.isArray(P)&&(L.providerData=P.map(U=>({...U}))),u&&(L._redirectEventId=u),L}static async _fromIdTokenResponse(e,t,r=!1){const s=new Xn;s.updateFromServerResponse(t);const i=new at({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ti(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];Z(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Wf(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Xn;c.updateFromIdToken(r);const u=new at({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Pa(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,h),u}}/**
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
 */const yh=new Map;function Ct(n){Mt(n instanceof Function,"Expected a class definition");let e=yh.get(n);return e?(Mt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,yh.set(n,e),e)}/**
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
 */class Hf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Hf.type="NONE";const _h=Hf;/**
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
 */function ri(n,e,t){return`firebase:${n}:${e}:${t}`}class Zn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ri(this.userKey,s.apiKey,i),this.fullPersistenceKey=ri("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ei(this.auth,{idToken:e}).catch(()=>{});return t?at._fromGetAccountInfoResponse(this.auth,t,e):null}return at._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Zn(Ct(_h),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Ct(_h);const a=ri(r,e.config.apiKey,e.name);let c=null;for(const h of t)try{const f=await h._get(a);if(f){let m;if(typeof f=="string"){const y=await Ei(e,{idToken:f}).catch(()=>{});if(!y)break;m=await at._fromGetAccountInfoResponse(e,y,f)}else m=at._fromJSON(e,f);h!==i&&(c=m),i=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Zn(i,e,r):(i=u[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Zn(i,e,r))}}/**
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
 */function vh(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Jf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Gf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Xf(e))return"Blackberry";if(Zf(e))return"Webos";if(Kf(e))return"Safari";if((e.includes("chrome/")||Qf(e))&&!e.includes("edge/"))return"Chrome";if(Yf(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Gf(n=$e()){return/firefox\//i.test(n)}function Kf(n=$e()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Qf(n=$e()){return/crios\//i.test(n)}function Jf(n=$e()){return/iemobile/i.test(n)}function Yf(n=$e()){return/android/i.test(n)}function Xf(n=$e()){return/blackberry/i.test(n)}function Zf(n=$e()){return/webos/i.test(n)}function Mc(n=$e()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function cE(n=$e()){var e;return Mc(n)&&!!((e=window.navigator)!=null&&e.standalone)}function lE(){return dy()&&document.documentMode===10}function ep(n=$e()){return Mc(n)||Yf(n)||Zf(n)||Xf(n)||/windows phone/i.test(n)||Jf(n)}/**
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
 */function tp(n,e=[]){let t;switch(n){case"Browser":t=vh($e());break;case"Worker":t=`${vh($e())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${mr}/${r}`}/**
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
 */class uE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const u=e(i);a(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function hE(n,e={}){return wr(n,"GET","/v2/passwordPolicy",Nc(n,e))}/**
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
 */const dE=6;class fE{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??dE,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class pE{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ih(this),this.idTokenSubscription=new Ih(this),this.beforeStateQueue=new uE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Bf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ct(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Zn.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ei(this,{idToken:e}),r=await at._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(ot(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ti(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Kw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ot(this.app))return Promise.reject(Pn(this));const t=e?Ce(e):null;return t&&Z(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ot(this.app)?Promise.reject(Pn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ot(this.app)?Promise.reject(Pn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ct(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await hE(this),t=new fE(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ls("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await aE(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ct(e)||this._popupRedirectResolver;Z(t,this,"argument-error"),this.redirectPersistenceManager=await Zn.create(this,[Ct(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(Z(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=tp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(ot(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&qw(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ao(n){return Ce(n)}class Ih{constructor(e){this.auth=e,this.observer=null,this.addObserver=Iy(t=>this.observer=t)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let jc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function mE(n){jc=n}function gE(n){return jc.loadJS(n)}function yE(){return jc.gapiScript}function _E(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function vE(n,e){const t=$a(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(kn(i,e??{}))return s;_t(s,"already-initialized")}return t.initialize({options:e})}function IE(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Ct);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function wE(n,e,t){const r=ao(n);Z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),i=np(e),{host:a,port:c}=EE(e),u=c===null?"":`:${c}`,h={url:`${i}//${a}${u}/`},f=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){Z(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Z(kn(h,r.config.emulator)&&kn(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,pr(a)?(td(`${i}//${a}${u}`),nd("Auth",!0)):s||TE()}function np(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function EE(n){const e=np(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:wh(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:wh(a)}}}function wh(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function TE(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class rp{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return xt("not implemented")}_getIdTokenResponse(e){return xt("not implemented")}_linkToIdToken(e,t){return xt("not implemented")}_getReauthenticationResolver(e){return xt("not implemented")}}/**
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
 */async function er(n,e){return Xw(n,"POST","/v1/accounts:signInWithIdp",Nc(n,e))}/**
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
 */const SE="http://localhost";class On extends rp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new On(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):_t("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const a=new On(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return er(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,er(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,er(e,t)}buildRequest(){const e={requestUri:SE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=us(t)}return e}}/**
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
 */class Lc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class _s extends Lc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class zt extends _s{constructor(){super("facebook.com")}static credential(e){return On._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zt.credentialFromTaggedObject(e)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zt.credential(e.oauthAccessToken)}catch{return null}}}zt.FACEBOOK_SIGN_IN_METHOD="facebook.com";zt.PROVIDER_ID="facebook.com";/**
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
 */class At extends _s{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return On._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return At.credentialFromTaggedObject(e)}static credentialFromError(e){return At.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return At.credential(t,r)}catch{return null}}}At.GOOGLE_SIGN_IN_METHOD="google.com";At.PROVIDER_ID="google.com";/**
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
 */class qt extends _s{constructor(){super("github.com")}static credential(e){return On._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qt.credential(e.oauthAccessToken)}catch{return null}}}qt.GITHUB_SIGN_IN_METHOD="github.com";qt.PROVIDER_ID="github.com";/**
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
 */class Wt extends _s{constructor(){super("twitter.com")}static credential(e,t){return On._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Wt.credentialFromTaggedObject(e)}static credentialFromError(e){return Wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Wt.credential(t,r)}catch{return null}}}Wt.TWITTER_SIGN_IN_METHOD="twitter.com";Wt.PROVIDER_ID="twitter.com";/**
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
 */class dr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await at._fromIdTokenResponse(e,r,s),a=Eh(r);return new dr({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Eh(r);return new dr({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Eh(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Si extends jt{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Si.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Si(e,t,r,s)}}function sp(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Si._fromErrorAndOperation(n,i,e,r):i})}async function AE(n,e,t=!1){const r=await as(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return dr._forOperation(n,"link",r)}/**
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
 */async function bE(n,e,t=!1){const{auth:r}=n;if(ot(r.app))return Promise.reject(Pn(r));const s="reauthenticate";try{const i=await as(n,sp(r,s,e,n),t);Z(i.idToken,r,"internal-error");const a=Oc(i.idToken);Z(a,r,"internal-error");const{sub:c}=a;return Z(n.uid===c,r,"user-mismatch"),dr._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&_t(r,"user-mismatch"),i}}/**
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
 */async function RE(n,e,t=!1){if(ot(n.app))return Promise.reject(Pn(n));const r="signIn",s=await sp(n,r,e),i=await dr._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}function xE(n,e,t,r){return Ce(n).onIdTokenChanged(e,t,r)}function CE(n,e,t){return Ce(n).beforeAuthStateChanged(e,t)}function PE(n,e,t,r){return Ce(n).onAuthStateChanged(e,t,r)}function kE(n){return Ce(n).signOut()}const Ai="__sak";/**
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
 */class ip{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ai,"1"),this.storage.removeItem(Ai),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const DE=1e3,VE=10;class op extends ip{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ep(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);lE()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,VE):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},DE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}op.type="LOCAL";const NE=op;/**
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
 */class ap extends ip{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ap.type="SESSION";const cp=ap;/**
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
 */function OE(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class co{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new co(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async h=>h(t.origin,i)),u=await OE(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}co.receivers=[];/**
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
 */function Fc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class ME{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,u)=>{const h=Fc("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(m){const y=m;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(y.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function gt(){return window}function jE(n){gt().location.href=n}/**
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
 */function lp(){return typeof gt().WorkerGlobalScope<"u"&&typeof gt().importScripts=="function"}async function LE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function FE(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function UE(){return lp()?self:null}/**
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
 */const up="firebaseLocalStorageDb",BE=1,bi="firebaseLocalStorage",hp="fbase_key";class vs{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function lo(n,e){return n.transaction([bi],e?"readwrite":"readonly").objectStore(bi)}function $E(){const n=indexedDB.deleteDatabase(up);return new vs(n).toPromise()}function ka(){const n=indexedDB.open(up,BE);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(bi,{keyPath:hp})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(bi)?e(r):(r.close(),await $E(),e(await ka()))})})}async function Th(n,e,t){const r=lo(n,!0).put({[hp]:e,value:t});return new vs(r).toPromise()}async function zE(n,e){const t=lo(n,!1).get(e),r=await new vs(t).toPromise();return r===void 0?null:r.value}function Sh(n,e){const t=lo(n,!0).delete(e);return new vs(t).toPromise()}const qE=800,WE=3;class dp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ka(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>WE)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=co._getInstance(UE()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await LE(),!this.activeServiceWorker)return;this.sender=new ME(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||FE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ka();return await Th(e,Ai,"1"),await Sh(e,Ai),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Th(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>zE(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Sh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=lo(s,!1).getAll();return new vs(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}dp.type="LOCAL";const HE=dp;new ys(3e4,6e4);/**
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
 */function fp(n,e){return e?Ct(e):(Z(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Uc extends rp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return er(e,this._buildIdpRequest())}_linkToIdToken(e,t){return er(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return er(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function GE(n){return RE(n.auth,new Uc(n),n.bypassAuthState)}function KE(n){const{auth:e,user:t}=n;return Z(t,e,"internal-error"),bE(t,new Uc(n),n.bypassAuthState)}async function QE(n){const{auth:e,user:t}=n;return Z(t,e,"internal-error"),AE(t,new Uc(n),n.bypassAuthState)}/**
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
 */class pp{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return GE;case"linkViaPopup":case"linkViaRedirect":return QE;case"reauthViaPopup":case"reauthViaRedirect":return KE;default:_t(this.auth,"internal-error")}}resolve(e){Mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const JE=new ys(2e3,1e4);async function YE(n,e,t){if(ot(n.app))return Promise.reject(lt(n,"operation-not-supported-in-this-environment"));const r=ao(n);Ww(n,e,Lc);const s=fp(r,t);return new An(r,"signInViaPopup",e,s).executeNotNull()}class An extends pp{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,An.currentPopupAction&&An.currentPopupAction.cancel(),An.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Z(e,this.auth,"internal-error"),e}async onExecution(){Mt(this.filter.length===1,"Popup operations only handle one event");const e=Fc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(lt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(lt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,An.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(lt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,JE.get())};e()}}An.currentPopupAction=null;/**
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
 */const XE="pendingRedirect",si=new Map;class ZE extends pp{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=si.get(this.auth._key());if(!e){try{const r=await e0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}si.set(this.auth._key(),e)}return this.bypassAuthState||si.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function e0(n,e){const t=r0(e),r=n0(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function t0(n,e){si.set(n._key(),e)}function n0(n){return Ct(n._redirectPersistence)}function r0(n){return ri(XE,n.config.apiKey,n.name)}async function s0(n,e,t=!1){if(ot(n.app))return Promise.reject(Pn(n));const r=ao(n),s=fp(r,e),a=await new ZE(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const i0=10*60*1e3;class o0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!a0(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!mp(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(lt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=i0&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ah(e))}saveEventToCache(e){this.cachedEventUids.add(Ah(e)),this.lastProcessedEventTime=Date.now()}}function Ah(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function mp({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function a0(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return mp(n);default:return!1}}/**
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
 */async function c0(n,e={}){return wr(n,"GET","/v1/projects",e)}/**
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
 */const l0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,u0=/^https?/;async function h0(n){if(n.config.emulator)return;const{authorizedDomains:e}=await c0(n);for(const t of e)try{if(d0(t))return}catch{}_t(n,"unauthorized-domain")}function d0(n){const e=Ca(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!u0.test(t))return!1;if(l0.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const f0=new ys(3e4,6e4);function bh(){const n=gt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function p0(n){return new Promise((e,t)=>{var s,i,a;function r(){bh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{bh(),t(lt(n,"network-request-failed"))},timeout:f0.get()})}if((i=(s=gt().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((a=gt().gapi)!=null&&a.load)r();else{const c=_E("iframefcb");return gt()[c]=()=>{gapi.load?r():t(lt(n,"network-request-failed"))},gE(`${yE()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw ii=null,e})}let ii=null;function m0(n){return ii=ii||p0(n),ii}/**
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
 */const g0=new ys(5e3,15e3),y0="__/auth/iframe",_0="emulator/auth/iframe",v0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},I0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function w0(n){const e=n.config;Z(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Vc(e,_0):`https://${n.config.authDomain}/${y0}`,r={apiKey:e.apiKey,appName:n.name,v:mr},s=I0.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${us(r).slice(1)}`}async function E0(n){const e=await m0(n),t=gt().gapi;return Z(t,n,"internal-error"),e.open({where:document.body,url:w0(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:v0,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=lt(n,"network-request-failed"),c=gt().setTimeout(()=>{i(a)},g0.get());function u(){gt().clearTimeout(c),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
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
 */const T0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},S0=500,A0=600,b0="_blank",R0="http://localhost";class Rh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function x0(n,e,t,r=S0,s=A0){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u={...T0,width:r.toString(),height:s.toString(),top:i,left:a},h=$e().toLowerCase();t&&(c=Qf(h)?b0:t),Gf(h)&&(e=e||R0,u.scrollbars="yes");const f=Object.entries(u).reduce((y,[w,P])=>`${y}${w}=${P},`,"");if(cE(h)&&c!=="_self")return C0(e||"",c),new Rh(null);const m=window.open(e||"",c,f);Z(m,n,"popup-blocked");try{m.focus()}catch{}return new Rh(m)}function C0(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const P0="__/auth/handler",k0="emulator/auth/handler",D0=encodeURIComponent("fac");async function xh(n,e,t,r,s,i){Z(n.config.authDomain,n,"auth-domain-config-required"),Z(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:mr,eventId:s};if(e instanceof Lc){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",vy(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries(i||{}))a[f]=m}if(e instanceof _s){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const u=await n._getAppCheckToken(),h=u?`#${D0}=${encodeURIComponent(u)}`:"";return`${V0(n)}?${us(c).slice(1)}${h}`}function V0({config:n}){return n.emulator?Vc(n,k0):`https://${n.authDomain}/${P0}`}/**
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
 */const Zo="webStorageSupport";class N0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cp,this._completeRedirectFn=s0,this._overrideRedirectResult=t0}async _openPopup(e,t,r,s){var a;Mt((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await xh(e,t,r,Ca(),s);return x0(e,i,Fc())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await xh(e,t,r,Ca(),s);return jE(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Mt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await E0(e),r=new o0(e);return t.register("authEvent",s=>(Z(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Zo,{type:Zo},s=>{var a;const i=(a=s==null?void 0:s[0])==null?void 0:a[Zo];i!==void 0&&t(!!i),_t(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=h0(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ep()||Kf()||Mc()}}const O0=N0;var Ch="@firebase/auth",Ph="1.11.0";/**
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
 */class M0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function j0(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function L0(n){sr(new Dn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;Z(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:tp(n)},h=new pE(r,s,i,u);return IE(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),sr(new Dn("auth-internal",e=>{const t=ao(e.getProvider("auth").getImmediate());return(r=>new M0(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Jt(Ch,Ph,j0(n)),Jt(Ch,Ph,"esm2020")}/**
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
 */const F0=5*60,U0=ed("authIdTokenMaxAge")||F0;let kh=null;const B0=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>U0)return;const s=t==null?void 0:t.token;kh!==s&&(kh=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function $0(n=$r()){const e=$a(n,"auth");if(e.isInitialized())return e.getImmediate();const t=vE(n,{popupRedirectResolver:O0,persistence:[HE,NE,cp]}),r=ed("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=B0(i.toString());CE(t,a,()=>a(t.currentUser)),xE(t,c=>a(c))}}const s=Xh("auth");return s&&wE(t,`http://${s}`),t}function z0(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}mE({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=lt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",z0().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});L0("Browser");const wn=class wn{constructor(){Tt(this,"events",[]);Tt(this,"rateLimitMap",new Map);Tt(this,"blockedIPs",new Set);Tt(this,"suspiciousActivities",new Map)}static getInstance(){return wn.instance||(wn.instance=new wn),wn.instance}checkRateLimit(e,t=100,r=6e4){const s=Date.now(),a=(this.rateLimitMap.get(e)||[]).filter(c=>s-c<r);return a.length>=t?(this.logSecurityEvent({type:"rate_limit",timestamp:s,details:{identifier:e,requestCount:a.length},severity:"high"}),this.suspiciousActivities.set(e,(this.suspiciousActivities.get(e)||0)+1),!1):(a.push(s),this.rateLimitMap.set(e,a),!0)}validateInput(e,t="text"){if(!e||typeof e!="string")return{isValid:!1,sanitized:""};const r=[/('|(\\')|(;)|(\\)|(\-\-)|(\/\*)|(\*\/)|(\bor\b)|(\band\b)|(\bunion\b)|(\bselect\b)|(\binsert\b)|(\bupdate\b)|(\bdelete\b)|(\bdrop\b)|(\bcreate\b)|(\balter\b)|(\bexec\b)|(\bexecute\b))/gi],s=[/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi,/javascript:/gi,/on\w+\s*=/gi,/<.*?>/g];let i=e,a=!0;for(const c of r)if(c.test(e)){this.logSecurityEvent({type:"injection_attempt",timestamp:Date.now(),details:{input:e.substring(0,100),pattern:c.source},severity:"critical"}),a=!1;break}for(const c of s)c.test(i)&&(this.logSecurityEvent({type:"xss_attempt",timestamp:Date.now(),details:{input:e.substring(0,100),pattern:c.source},severity:"critical"}),i=i.replace(c,""),a=!1);switch(t){case"email":/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i)||(a=!1);break;case"url":try{new URL(i)}catch{a=!1}break;case"json":try{JSON.parse(i)}catch{a=!1}break}return i=i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),{isValid:a,sanitized:i}}generateCSRFToken(){const e=new Uint8Array(32);crypto.getRandomValues(e);const t=Array.from(e,r=>r.toString(16).padStart(2,"0")).join("");return localStorage.setItem("csrf_token",t),t}validateCSRFToken(e){const t=localStorage.getItem("csrf_token");return!t||e!==t?(this.logSecurityEvent({type:"csrf_attempt",timestamp:Date.now(),details:{providedToken:e==null?void 0:e.substring(0,10)},severity:"high"}),!1):!0}detectSuspiciousActivity(e,t){const r=Date.now(),s=`${e}_${t}`,i=this.suspiciousActivities.get(s)||0;return r-i<1e3?(this.logSecurityEvent({type:"suspicious_activity",timestamp:r,details:{userId:e,action:t,timeDiff:r-i},severity:"medium"}),!0):(this.suspiciousActivities.set(s,r),!1)}logSecurityEvent(e){console.warn("🚨 보안 이벤트 탐지:",e),this.events.push(e),this.events.length>1e3&&(this.events=this.events.slice(-1e3)),e.severity==="critical"&&this.handleCriticalEvent(e)}handleCriticalEvent(e){"Notification"in window&&Notification.permission==="granted"&&new Notification("🚨 보안 경고",{body:`심각한 보안 이벤트가 탐지되었습니다: ${e.type}`,icon:"/favicon.ico"}),console.error("🔥 CRITICAL SECURITY EVENT:",e);const t=JSON.parse(localStorage.getItem("critical_security_events")||"[]");t.push(e),localStorage.setItem("critical_security_events",JSON.stringify(t.slice(-50)))}getSecurityStats(){const e={};let t=0;return this.events.forEach(r=>{e[r.type]=(e[r.type]||0)+1,r.severity==="critical"&&t++}),{totalEvents:this.events.length,eventsByType:e,recentEvents:this.events.slice(-10),criticalEvents:t}}clearSecurityEvents(){this.events=[],this.rateLimitMap.clear(),this.suspiciousActivities.clear(),localStorage.removeItem("critical_security_events"),console.log("🧹 보안 이벤트 기록이 정리되었습니다.")}};Tt(wn,"instance");let bn=wn;const Da={safeLocalStorage:{getItem:n=>{try{const e=bn.getInstance(),{isValid:t,sanitized:r}=e.validateInput(n);return t?localStorage.getItem(r):null}catch{return null}},setItem:(n,e)=>{try{const t=bn.getInstance(),r=t.validateInput(n),s=t.validateInput(e);return!r.isValid||!s.isValid?!1:(localStorage.setItem(r.sanitized,s.sanitized),!0)}catch{return!1}}},safeDOMUpdate:(n,e)=>{const t=bn.getInstance(),{isValid:r,sanitized:s}=t.validateInput(e);r&&(n.textContent=s)},checkSecurityHeaders:()=>(console.log("🔍 보안 헤더 체크가 필요합니다."),!0),createSafeURL:(n,e)=>{try{const t=new URL(n),r=bn.getInstance();return Object.entries(e).forEach(([s,i])=>{const a=r.validateInput(s),c=r.validateInput(i);a.isValid&&c.isValid&&t.searchParams.append(a.sanitized,c.sanitized)}),t.toString()}catch{return n}}},X=bn.getInstance();if(typeof window<"u"){window.addEventListener("securitypolicyviolation",t=>{X.logSecurityEvent({type:"xss_attempt",timestamp:Date.now(),details:{violatedDirective:t.violatedDirective,blockedURI:t.blockedURI,originalPolicy:t.originalPolicy},severity:"critical"})});let n={open:!1,orientation:null};const e=160;setInterval(()=>{window.outerHeight-window.innerHeight>e||window.outerWidth-window.innerWidth>e?n.open||(n.open=!0,console.warn("🔍 개발자 도구가 열렸습니다.")):n.open=!1},500),"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()}const _n={algorithm:"AES-GCM",keyLength:256,ivLength:12,tagLength:16},En=class En{constructor(){Tt(this,"masterKey",null);Tt(this,"userPassphrase",null)}static getInstance(){return En.instance||(En.instance=new En),En.instance}async initializeMasterKey(e,t){try{const r=t||"default_secure_passphrase_2025";this.userPassphrase=`${e}:${r}:${Date.now().toString().slice(0,8)}`;const s=new TextEncoder,i=await crypto.subtle.importKey("raw",s.encode(this.userPassphrase),"PBKDF2",!1,["deriveBits","deriveKey"]),a=s.encode(`${e}_salt_2025`);return this.masterKey=await crypto.subtle.deriveKey({name:"PBKDF2",salt:a,iterations:1e5,hash:"SHA-256"},i,{name:_n.algorithm,length:_n.keyLength},!1,["encrypt","decrypt"]),console.log("🔐 클라이언트 사이드 암호화 초기화 완료"),!0}catch(r){return console.error("❌ 마스터 키 초기화 실패:",r),!1}}async encryptData(e){try{if(!this.masterKey)throw new Error("Master key not initialized");if(!X.checkRateLimit("client_encrypt",50,6e4))throw new Error("Encryption rate limit exceeded");const t=JSON.stringify(e),s=new TextEncoder().encode(t),i=crypto.getRandomValues(new Uint8Array(_n.ivLength)),a=crypto.getRandomValues(new Uint8Array(16)),c=await crypto.subtle.encrypt({name:_n.algorithm,iv:i},this.masterKey,s),u={data:this.bufferToBase64(c),iv:this.bufferToBase64(i),salt:this.bufferToBase64(a),keyDerivation:{algorithm:"PBKDF2",iterations:1e5},timestamp:Date.now(),version:"1.0.0"};return console.log("🔒 데이터 암호화 완료 (클라이언트 사이드)"),u}catch(t){return console.error("❌ 클라이언트 사이드 암호화 실패:",t),null}}async decryptData(e){try{if(!this.masterKey)return{success:!1,error:"Master key not initialized"};if(!X.checkRateLimit("client_decrypt",100,6e4))return{success:!1,error:"Decryption rate limit exceeded"};const t=this.base64ToBuffer(e.data),r=this.base64ToBuffer(e.iv),s=await crypto.subtle.decrypt({name:_n.algorithm,iv:r},this.masterKey,t),a=new TextDecoder().decode(s),c=JSON.parse(a);return console.log("🔓 데이터 복호화 완료 (클라이언트 사이드)"),{success:!0,data:c}}catch(t){return console.error("❌ 클라이언트 사이드 복호화 실패:",t),{success:!1,error:(t==null?void 0:t.message)||"Decryption failed"}}}async secureStore(e,t){try{const r=await this.encryptData(t);return r?(localStorage.setItem(`encrypted_${e}`,JSON.stringify(r)),console.log(`🛡️ 안전한 데이터 저장 완료: ${e}`),!0):!1}catch(r){return console.error("❌ 안전한 데이터 저장 실패:",r),!1}}async secureLoad(e){try{const t=localStorage.getItem(`encrypted_${e}`);if(!t)return null;const r=JSON.parse(t),s=await this.decryptData(r);return s.success?(console.log(`🔍 안전한 데이터 로드 완료: ${e}`),s.data):null}catch(t){return console.error("❌ 안전한 데이터 로드 실패:",t),null}}clearEncryptionSession(){this.masterKey=null,this.userPassphrase=null;const e=[];for(let t=0;t<localStorage.length;t++){const r=localStorage.key(t);r!=null&&r.startsWith("encrypted_")&&e.push(r)}e.forEach(t=>localStorage.removeItem(t)),console.log("🧹 암호화 세션 정리 완료")}isEncryptionReady(){return this.masterKey!==null}bufferToBase64(e){const t=new Uint8Array(e);let r="";for(let s=0;s<t.byteLength;s++)r+=String.fromCharCode(t[s]);return btoa(r)}base64ToBuffer(e){const t=atob(e),r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r.buffer}getEncryptionStats(){return{isReady:this.isEncryptionReady(),algorithm:_n.algorithm,keyLength:_n.keyLength,version:"1.0.0"}}};Tt(En,"instance");let Va=En;const Wn=Va.getInstance(),ct={async saveEncrypted(n,e){return await Wn.secureStore(n,e)},async loadEncrypted(n){return await Wn.secureLoad(n)},async initForUser(n,e){return await Wn.initializeMasterKey(n,e)},cleanup(){Wn.clearEncryptionSession()},isReady(){return Wn.isEncryptionReady()},getStats(){return Wn.getEncryptionStats()}},ea={apiKey:"AIzaSyD0T3knqD57-69U4rKsZ1f-Nb1Kd6Rf5a0",authDomain:"my-personnal-penguin.firebaseapp.com",projectId:"my-personnal-penguin",storageBucket:"my-personnal-penguin.firebasestorage.app",messagingSenderId:"278702130293",appId:"1:278702130293:web:cd7dad08ee5cd6b183243c"};let St,Hn=!1;if(typeof window<"u"&&!window.__FIREBASE_INITIALIZED__)try{const n=Wo();n.length>0?(St=n[0],console.log("🔄 기존 Firebase 앱 재사용")):(St=Qs(ea),console.log("🆕 새 Firebase 앱 초기화")),window.__FIREBASE_INITIALIZED__=!0,Hn=!0}catch(n){console.warn("⚠️ Firebase 초기화 중 에러:",n.message);try{St=$r(),console.log("🔄 기존 Firebase 앱으로 대체"),Hn=!0}catch(e){console.error("❌ Firebase 앱 초기화 완전 실패:",e);try{St=Qs(ea,"secondary-"+Date.now()),console.log("🚨 보조 Firebase 앱 생성"),Hn=!0}catch{throw console.error("💥 모든 Firebase 초기화 시도 실패"),new Error("Firebase 초기화에 완전히 실패했습니다.")}}}else if(typeof window<"u"&&window.__FIREBASE_INITIALIZED__){const n=Wo();St=n.length>0?n[0]:$r(),console.log("♻️ 이미 초기화된 Firebase 앱 사용"),Hn=!0}else try{St=Qs(ea),Hn=!0}catch{const e=Wo();St=e.length>0?e[0]:$r(),Hn=!0}const Ae=Pw(St),uo=$0(St),q0=new At,me=async(n,e,t)=>{try{if(!X.checkRateLimit(`saveUserData_${n}`,50,6e4))throw new Error("Rate limit exceeded. Please try again later.");X.detectSuspiciousActivity(n,`save_${e}`)&&console.warn("🚨 의심스러운 저장 활동 탐지:",n,e);const r=X.validateInput(n),s=X.validateInput(e);if(!r.isValid||!s.isValid)throw new Error("Invalid input parameters");if(JSON.stringify(t).length>10*1024*1024)throw new Error("Data size exceeds limit (10MB)");let a=t;ct.isReady()?await ct.saveEncrypted(`${n}_${e}`,t)&&(a={encrypted:!0,data:await ct.loadEncrypted(`${n}_${e}`),encryptedAt:new Date().toISOString(),encryptionVersion:"1.0.0"},console.log("🔐 데이터 암호화 적용됨 (관리자도 볼 수 없음)")):(typeof t=="object"&&t!==null&&(a=Na(t)),console.log("⚠️ 암호화되지 않은 데이터 저장 (관리자가 볼 수 있음)"));const c=Je(Ae,"users",r.sanitized,"data",s.sanitized);return await xc(c,{data:a,lastUpdated:ue.now(),version:1,checksum:gp(a),encrypted:ct.isReady()}),console.log(`✅ 보안 검증 완료 - 데이터 저장 성공: ${e}`),{success:!0}}catch(r){return console.error(`❌ 보안 검증 실패 - 데이터 저장 실패: ${e}`,r),r.message.includes("Rate limit")||r.message.includes("Invalid input")||console.error("🚨 예상치 못한 저장 오류:",r),{success:!1,error:r}}},In=async(n,e)=>{try{if(!X.checkRateLimit(`loadUserData_${n}`,100,6e4))throw new Error("Rate limit exceeded. Please try again later.");const t=X.validateInput(n),r=X.validateInput(e);if(!t.isValid||!r.isValid)throw new Error("Invalid input parameters");const s=Je(Ae,"users",t.sanitized,"data",r.sanitized),i=await so(s);if(i.exists()){const a=i.data();let c=a.data;if(a.encrypted&&ct.isReady()){const u=await ct.loadEncrypted(`${n}_${e}`);if(u)c=u,console.log("🔓 데이터 복호화 완료 (클라이언트 사이드)");else return console.warn("⚠️ 복호화 실패 - 암호화 키가 없거나 손상됨"),{success:!1,error:"Decryption failed - encryption key not available"}}else{if(a.encrypted&&!ct.isReady())return console.warn("⚠️ 암호화된 데이터이지만 복호화 키가 초기화되지 않음"),{success:!1,error:"Encryption key not initialized"};console.log("📄 암호화되지 않은 데이터 로드")}if(a.checksum&&a.data){const u=gp(a.data);a.checksum!==u&&console.warn("🚨 데이터 무결성 검증 실패:",e)}return{success:!0,data:c}}else return{success:!0,data:null}}catch(t){return console.error(`❌ 보안 검증 실패 - 데이터 로드 실패: ${e}`,t),{success:!1,error:t}}},oS=async(n,e)=>{try{if(!X.checkRateLimit(`savePomodoroSession_${n}`,30,6e4))throw new Error("Rate limit exceeded. Please try again later.");X.detectSuspiciousActivity(n,"save_pomodoro_session")&&console.warn("🚨 의심스러운 세션 저장 활동 탐지:",n);const t=X.validateInput(n);if(!t.isValid)throw new Error("Invalid user ID");const r={...e,projectTitle:X.validateInput(e.projectTitle||"").sanitized,taskTitle:X.validateInput(e.taskTitle||"").sanitized,sessionType:X.validateInput(e.sessionType||"").sanitized,timestamp:ue.now(),userAgent:navigator.userAgent.substring(0,200)},s=Nt(Ae,"users",t.sanitized,"pomodoroSessions");return await Cc(s,r),console.log("✅ 보안 검증 완료 - 뽀모도로 세션 저장 성공"),{success:!0}}catch(t){return console.error("❌ 보안 검증 실패 - 뽀모도로 세션 저장 실패",t),{success:!1,error:t}}},aS=async(n,e,t)=>{try{if(!X.checkRateLimit("updateAccessRequest",20,6e4))throw new Error("Rate limit exceeded. Please try again later.");const r=X.validateInput(n),s=X.validateInput(e);if(!r.isValid||!s.isValid)throw new Error("Invalid input parameters");if(!["approved","rejected"].includes(s.sanitized))throw new Error("Invalid status value");const i={status:s.sanitized,updatedAt:ue.now(),adminUserAgent:navigator.userAgent.substring(0,200)};if(t){const c=X.validateInput(t);c.isValid&&(i.adminResponse=c.sanitized)}const a=Je(Ae,"accessRequests",r.sanitized);return await io(a,i),console.log("✅ 보안 검증 완료 - 접근 요청 업데이트 성공"),{success:!0}}catch(r){return console.error("❌ 보안 검증 실패 - 접근 요청 업데이트 실패",r),{success:!1,error:r}}};function Na(n){if(n==null)return n;if(Array.isArray(n))return n.map(e=>Na(e));if(typeof n=="object"){const e={};for(const[t,r]of Object.entries(n)){const s=X.validateInput(t);if(s.isValid)if(typeof r=="string"){const i=X.validateInput(r);e[s.sanitized]=i.sanitized}else e[s.sanitized]=Na(r)}return e}return typeof n=="string"?X.validateInput(n).sanitized:n}function gp(n){const e=JSON.stringify(n);let t=0;for(let r=0;r<e.length;r++){const s=e.charCodeAt(r);t=(t<<5)-t+s,t=t&t}return t.toString(16)}const W0=async()=>{try{if(!X.checkRateLimit("signInWithGoogle",5,3e5))throw new Error("Too many login attempts. Please try again later.");const e=(await YE(uo,q0)).user;return console.log("✅ 보안 검증 완료 - Google 로그인 성공:",e.email),{success:!0,user:e}}catch(n){return console.error("❌ Google 로그인 실패:",n),{success:!1,error:n}}},H0=async()=>{try{return await kE(uo),X.clearSecurityEvents(),localStorage.removeItem("csrf_token"),console.log("✅ 보안 정리 완료 - 로그아웃 성공"),{success:!0}}catch(n){return console.error("❌ 로그아웃 실패:",n),{success:!1,error:n}}},Fe=()=>{const n=uo.currentUser;if(n){const e=Da.safeLocalStorage.getItem("last_activity"),t=Date.now().toString();e&&parseInt(t)-parseInt(e)>24*60*60*1e3&&console.warn("🚨 장시간 미사용 세션 감지"),Da.safeLocalStorage.setItem("last_activity",t)}return n},G0=n=>PE(uo,async e=>{if(e){if(X.generateCSRFToken(),await ct.initForUser(e.email||e.uid)){console.log("🔐 End-to-End 암호화 활성화 - 관리자도 데이터를 볼 수 없습니다");try{const r=await Y0(e.uid);r.success&&r.migrated>0&&console.log(`🎉 기존 데이터 ${r.migrated}개 타입 암호화 완료!`)}catch(r){console.warn("⚠️ 기존 데이터 마이그레이션 건너뛰기:",r)}}else console.warn("⚠️ 암호화 초기화 실패 - 데이터가 암호화되지 않을 수 있습니다");console.log("🛡️ 보안 시스템 활성화:",e.email)}else X.clearSecurityEvents(),localStorage.removeItem("csrf_token"),localStorage.removeItem("last_activity"),ct.cleanup(),console.log("🧹 암호화 세션 정리 완료");n(e)}),cS=()=>({stats:X.getSecurityStats(),criticalEvents:JSON.parse(localStorage.getItem("critical_security_events")||"[]"),lastActivity:Da.safeLocalStorage.getItem("last_activity"),csrfToken:localStorage.getItem("csrf_token")?"토큰 활성화":"토큰 없음"});typeof window<"u"&&(console.log("🛡️ Firebase 보안 시스템 초기화 완료"),window.addEventListener("load",()=>{const n=X.getSecurityStats();n.criticalEvents>0&&console.warn(`🚨 ${n.criticalEvents}개의 심각한 보안 이벤트가 기록되어 있습니다.`)}));const Ri=n=>n==="sbseok12@gmail.com",yp=async n=>{try{if(!X.checkRateLimit("saveAccessRequest",5,3e5))throw new Error("Too many access requests. Please try again later.");const e=X.validateInput(n.email,"email"),t=X.validateInput(n.displayName);if(!e.isValid||!t.isValid)throw new Error("Invalid input parameters");const r={email:e.sanitized,displayName:t.sanitized,photoURL:n.photoURL?X.validateInput(n.photoURL,"url").sanitized:void 0,reason:n.reason?X.validateInput(n.reason).sanitized:void 0},s=Je(Ae,"accessRequests",r.email.replace(".","_"));return await xc(s,{...r,status:"pending",requestedAt:ue.now(),userAgent:navigator.userAgent.substring(0,200)}),console.log("✅ 보안 검증 완료 - 접근 신청 저장 성공"),{success:!0}}catch(e){return console.error("❌ 보안 검증 실패 - 접근 신청 저장 실패:",e),{success:!1,error:e}}},lS=async()=>{try{if(!X.checkRateLimit("getAccessRequests",20,6e4))throw new Error("Rate limit exceeded. Please try again later.");const n=Nt(Ae,"accessRequests"),t=(await hr(n)).docs.map(r=>({id:r.id,...r.data()}));return console.log("✅ 보안 검증 완료 - 접근 신청 목록 조회 성공"),{success:!0,data:t}}catch(n){return console.error("❌ 보안 검증 실패 - 접근 신청 조회 실패:",n),{success:!1,error:n}}},K0=async n=>{if(!n)return{status:"not_found"};if(n==="sbseok12@gmail.com")return{status:"approved"};try{if(!X.checkRateLimit(`getUserAccessStatus_${n}`,30,6e4))throw new Error("Rate limit exceeded. Please try again later.");const e=X.validateInput(n,"email");if(!e.isValid)return{status:"not_found"};const t=Je(Ae,"accessRequests",e.sanitized.replace(".","_")),r=await so(t);if(r.exists()){const s=r.data();return{status:s.status,data:s}}return{status:"not_found"}}catch(e){return console.error("❌ 사용자 접근 상태 확인 실패:",e),{status:"not_found"}}},Q0=H0,J0=async(n,e,t)=>{try{if(!X.checkRateLimit(`loadPomodoroSessions_${n}`,50,6e4))throw new Error("Rate limit exceeded. Please try again later.");const r=X.validateInput(n);if(!r.isValid)throw new Error("Invalid user ID");const s=Nt(Ae,"users",r.sanitized,"pomodoroSessions");let i=Zt(s,Of("startTime","desc"));if(e){const u=X.validateInput(e);u.isValid&&(i=Zt(s,Rt("startTime",">=",u.sanitized+"T00:00:00.000Z")))}if(t){const u=X.validateInput(t);u.isValid&&(i=Zt(s,Rt("startTime","<=",u.sanitized+"T23:59:59.999Z")))}const a=await hr(i),c=[];return a.forEach(u=>{const h=u.data();c.push({...h,id:u.id})}),console.log(`✅ 보안 검증 완료 - 뽀모도로 세션 조회 성공: ${c.length}개`),{success:!0,data:c}}catch(r){return console.error("❌ 보안 검증 실패 - 뽀모도로 세션 조회 실패:",r),{success:!1,error:r}}},uS=async(n,e,t)=>{try{if(!X.checkRateLimit(`updatePomodoroSession_${n}`,20,6e4))throw new Error("Rate limit exceeded. Please try again later.");const r=X.validateInput(n),s=X.validateInput(e);if(!r.isValid||!s.isValid)throw new Error("Invalid parameters");const i=Je(Ae,"users",r.sanitized,"pomodoroSessions",s.sanitized),a={...t,updatedAt:ue.now()};return await io(i,a),console.log("✅ 보안 검증 완료 - 뽀모도로 세션 업데이트 성공"),{success:!0}}catch(r){return console.error("❌ 보안 검증 실패 - 뽀모도로 세션 업데이트 실패:",r),{success:!1,error:r}}},hS=async(n,e)=>{try{if(!X.checkRateLimit(`getWeeklyPomodoroStats_${n}`,30,6e4))throw new Error("Rate limit exceeded. Please try again later.");const t=new Date(e),r=new Date(t);r.setDate(r.getDate()+6);const s=e,i=r.toISOString().split("T")[0],a=await J0(n,s,i);if(!a.success||!a.data)return{success:!1,error:a.error};const c=a.data.filter(m=>m.completed),u={weekStart:s,weekEnd:i,totalSessions:c.length,workSessions:c.filter(m=>m.sessionType==="work").length,breakSessions:c.filter(m=>m.sessionType==="break").length,totalMinutes:c.reduce((m,y)=>m+(y.duration||0),0),projectBreakdown:[],dailyBreakdown:[]},h={};c.forEach(m=>{h[m.projectId]||(h[m.projectId]=[]),h[m.projectId].push(m)}),u.projectBreakdown=Object.entries(h).map(([m,y])=>{var w;return{projectId:m,projectTitle:((w=y[0])==null?void 0:w.projectTitle)||"Unknown",sessions:y.length,minutes:y.reduce((P,x)=>P+(x.duration||0),0)}});const f={};return c.forEach(m=>{var w;const y=((w=m.startTime)==null?void 0:w.split("T")[0])||new Date().toISOString().split("T")[0];f[y]||(f[y]=[]),f[y].push(m)}),u.dailyBreakdown=Object.entries(f).map(([m,y])=>({date:m,sessions:y.length,minutes:y.reduce((w,P)=>w+(P.duration||0),0)})).sort((m,y)=>m.date.localeCompare(y.date)),console.log("✅ 보안 검증 완료 - 주차별 뽀모도로 통계 생성 성공"),{success:!0,data:u}}catch(t){return console.error("❌ 보안 검증 실패 - 주차별 뽀모도로 통계 생성 실패:",t),{success:!1,error:t}}},dS=async(n,e)=>{try{if(!X.checkRateLimit(`deletePomodoroSession_${n}`,10,6e4))throw new Error("Rate limit exceeded. Please try again later.");const t=X.validateInput(n),r=X.validateInput(e);if(!t.isValid||!r.isValid)throw new Error("Invalid parameters");const s=Je(Ae,"users",t.sanitized,"pomodoroSessions",r.sanitized);return await Lf(s),console.log("✅ 보안 검증 완료 - 뽀모도로 세션 삭제 성공"),{success:!0}}catch(t){return console.error("❌ 보안 검증 실패 - 뽀모도로 세션 삭제 실패:",t),{success:!1,error:t}}},Y0=async n=>{try{if(!ct.isReady())throw new Error("Encryption not initialized");console.log("🔄 기존 데이터 암호화 마이그레이션 시작...");let e=0;const t=["todos","projects","epics","pomodoroSessions","settings"];for(const r of t)try{const s=Je(Ae,"users",n,"data",r),i=await so(s);if(i.exists()){const a=i.data();if(a.encrypted){console.log(`✅ ${r} 이미 암호화됨 - 건너뛰기`);continue}(await me(n,r,a.data)).success&&(e++,console.log(`🔐 ${r} 암호화 마이그레이션 완료`))}}catch(s){console.warn(`⚠️ ${r} 마이그레이션 실패:`,s)}return console.log(`🎉 마이그레이션 완료! ${e}개 데이터 타입 암호화됨`),{success:!0,migrated:e}}catch(e){return console.error("❌ 데이터 마이그레이션 실패:",e),{success:!1,migrated:0,error:e}}},fS=async(n,e="json")=>{try{if(!ct.isReady())throw new Error("Encryption not initialized - cannot decrypt data for export");console.log("📊 사용자 데이터 내보내기 시작...");const t={exportedAt:new Date().toISOString(),userId:n,data:{}},r=["todos","projects","epics","pomodoroSessions","settings"];for(const a of r)try{const c=await In(n,a);c.success&&c.data&&(t.data[a]=c.data,console.log(`✅ ${a} 데이터 수집 완료`))}catch(c){console.warn(`⚠️ ${a} 수집 실패:`,c)}const i=`penguin_data_${new Date().toISOString().split("T")[0]}.${e}`;return e==="json"?{success:!0,data:JSON.stringify(t,null,2),filename:i}:{success:!0,data:X0(t),filename:i.replace(".csv",".csv")}}catch(t){return console.error("❌ 데이터 내보내기 실패:",t),{success:!1,error:t}}};function X0(n){const e=[];return e.push("Type,ID,Title,Description,CreatedAt,Status"),Object.entries(n.data).forEach(([t,r])=>{Array.isArray(r)&&r.forEach((s,i)=>{const a=[t,s.id||i.toString(),s.title||s.name||"",s.description||"",s.createdAt||s.timestamp||"",s.status||s.completed||""].map(c=>`"${String(c).replace(/"/g,'""')}"`);e.push(a.join(","))})}),e.join(`
`)}const Z0=async()=>{try{const n=Je(Ae,"system","maintenance"),e=await so(n);if(e.exists()){const t=e.data();return{isMaintenanceMode:t.enabled||!1,message:t.message||"시스템 점검 중입니다. 잠시 후 다시 이용해주세요."}}return{isMaintenanceMode:!1}}catch(n){return console.error("❌ 점검 상태 확인 실패:",n),{isMaintenanceMode:!1,error:n}}},pS=async(n,e)=>{try{const t=Fe();if(!t||!Ri(t.email))throw new Error("Unauthorized: Admin access required");const r=Je(Ae,"system","maintenance");return await xc(r,{enabled:n,message:e||"시스템 점검 중입니다. 잠시 후 다시 이용해주세요.",updatedAt:ue.now(),updatedBy:t.email}),console.log(`🚧 점검 모드 ${n?"활성화":"비활성화"} 완료`),{success:!0}}catch(t){return console.error("❌ 점검 모드 설정 실패:",t),{success:!1,error:t}}},cs={_origin:"https://api.emailjs.com"},eT=(n,e="https://api.emailjs.com")=>{cs._userID=n,cs._origin=e},_p=(n,e,t)=>{if(!n)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!t)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class Dh{constructor(e){this.status=e.status,this.text=e.responseText}}const vp=(n,e,t={})=>new Promise((r,s)=>{const i=new XMLHttpRequest;i.addEventListener("load",({target:a})=>{const c=new Dh(a);c.status===200||c.text==="OK"?r(c):s(c)}),i.addEventListener("error",({target:a})=>{s(new Dh(a))}),i.open("POST",cs._origin+n,!0),Object.keys(t).forEach(a=>{i.setRequestHeader(a,t[a])}),i.send(e)}),tT=(n,e,t,r)=>{const s=r||cs._userID;return _p(s,n,e),vp("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:s,service_id:n,template_id:e,template_params:t}),{"Content-type":"application/json"})},nT=n=>{let e;if(typeof n=="string"?e=document.querySelector(n):e=n,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},rT=(n,e,t,r)=>{const s=r||cs._userID,i=nT(t);_p(s,n,e);const a=new FormData(i);return a.append("lib_version","3.2.0"),a.append("service_id",n),a.append("template_id",e),a.append("user_id",s),vp("/api/v1.0/email/send-form",a)},Ip={init:eT,send:tT,sendForm:rT},ho=Nt(Ae,"feedback"),Kr={serviceId:"service_feedback",templateId:"template_feedback",publicKey:"your_public_key"},sT=async(n,e)=>{var t;try{const r={...e,userEmail:n.email??"",userDisplayName:n.displayName??((t=n.email)==null?void 0:t.split("@")[0])??"Anonymous",createdAt:Pc(),status:"pending"},s=await Cc(ho,r);try{await Ip.send(Kr.serviceId,Kr.templateId,{to_email:"sbseok12@gmail.com",from_name:r.userDisplayName,from_email:r.userEmail,feedback_type:e.type,feedback_title:e.title,feedback_description:e.description,feedback_priority:e.priority,feedback_id:s.id,created_at:new Date().toLocaleString("ko-KR")},Kr.publicKey),console.log("✅ 피드백 이메일 발송 성공")}catch(i){console.warn("⚠️ 이메일 발송 실패 (피드백은 저장됨):",i)}return{success:!0,id:s.id,message:"피드백이 성공적으로 제출되었습니다! 관리자가 검토 후 답변드릴게요 😊"}}catch(r){return console.error("피드백 제출 실패:",r),{success:!1,message:"피드백 제출 중 오류가 발생했습니다. 다시 시도해주세요."}}},mS=n=>{const e=Zt(ho,Of("createdAt","desc"));return $w(e,t=>{const r=[];t.forEach(s=>{r.push({id:s.id,...s.data()})}),n(r)},t=>{console.error("피드백 구독 실패:",t),n([])})},gS=n=>{const e={total:n.length,pending:0,inProgress:0,completed:0,rejected:0,byType:{},byPriority:{}};return n.forEach(t=>{switch(t.status){case"pending":e.pending++;break;case"in-progress":e.inProgress++;break;case"completed":e.completed++;break;case"rejected":e.rejected++;break}e.byType[t.type]=(e.byType[t.type]??0)+1,e.byPriority[t.priority]=(e.byPriority[t.priority]??0)+1}),e},yS=async(n,e,t)=>{try{const r=Je(ho,n),s={status:e,updatedAt:Pc()};return t&&(s.adminResponse=t),await io(r,s),{success:!0,message:"피드백 상태가 업데이트되었습니다."}}catch(r){return console.error("피드백 상태 업데이트 실패:",r),{success:!1,message:"상태 업데이트 중 오류가 발생했습니다."}}},_S=async n=>{try{return await Lf(Je(ho,n)),{success:!0,message:"피드백이 삭제되었습니다."}}catch(e){return console.error("피드백 삭제 실패:",e),{success:!1,message:"삭제 중 오류가 발생했습니다."}}},vS=async(n,e)=>{try{return await Ip.send(Kr.serviceId,"template_admin_response",{to_email:n.userEmail,to_name:n.userDisplayName,feedback_title:n.title,admin_response:e,feedback_status:n.status,response_date:new Date().toLocaleString("ko-KR")},Kr.publicKey),{success:!0,message:"응답 이메일이 발송되었습니다."}}catch(t){return console.error("관리자 응답 이메일 발송 실패:",t),{success:!1,message:"이메일 발송 중 오류가 발생했습니다."}}},iT=n=>({bug:"🐛",feature:"✨",improvement:"🔧",question:"❓",other:"💬"})[n],Ks=n=>({low:"#4caf50",medium:"#ff9800",high:"#f44336",urgent:"#9c27b0"})[n],IS=n=>({pending:"#757575","in-progress":"#2196f3",completed:"#4caf50",rejected:"#f44336"})[n],oT=({open:n,onClose:e,user:t})=>{const[r,s]=V.useState({type:"feature",title:"",description:"",priority:"medium"}),[i,a]=V.useState(!1),[c,u]=V.useState(!1),[h,f]=V.useState(""),m=()=>{s({type:"feature",title:"",description:"",priority:"medium"}),u(!1),f("")},y=()=>{i||(m(),e())},w=async()=>{if(!r.title.trim()){f("제목을 입력해주세요.");return}if(!r.description.trim()){f("내용을 입력해주세요.");return}a(!0),f("");try{const T=await sT(t,r);T.success?(u(!0),setTimeout(()=>{y()},2e3)):f(T.message)}catch{f("피드백 제출 중 오류가 발생했습니다.")}finally{a(!1)}},P=T=>({bug:p.jsx(cm,{}),feature:p.jsx(lm,{}),improvement:p.jsx(um,{}),question:p.jsx(hm,{}),other:p.jsx(dm,{})})[T],x=T=>({bug:"버그나 오류를 신고해주세요",feature:"새로운 기능을 제안해주세요",improvement:"기존 기능의 개선사항을 알려주세요",question:"궁금한 점이나 사용법을 문의해주세요",other:"기타 의견이나 제안사항을 남겨주세요"})[T];return p.jsxs(xi,{open:n,onClose:y,maxWidth:"md",fullWidth:!0,PaperProps:{sx:{borderRadius:3,maxHeight:"90vh"}},children:[p.jsxs(Ci,{sx:{pb:1},children:[p.jsx(Q,{sx:{display:"flex",alignItems:"center",gap:1},children:p.jsx(H,{variant:"h5",component:"div",sx:{fontWeight:"bold"},children:"💬 피드백 보내기"})}),p.jsx(H,{variant:"body2",color:"text.secondary",sx:{mt:1},children:"관리자에게 의견을 전달하고 더 나은 서비스를 만들어가요! ✨"})]}),p.jsx(Pi,{sx:{pt:2},children:c?p.jsxs(Q,{sx:{textAlign:"center",py:4},children:[p.jsx(H,{variant:"h4",sx:{mb:2},children:"🎉"}),p.jsx(H,{variant:"h6",gutterBottom:!0,children:"피드백이 성공적으로 전송되었습니다!"}),p.jsx(H,{color:"text.secondary",children:"관리자가 검토 후 답변드릴게요. 감사합니다! 😊"})]}):p.jsxs(Q,{sx:{display:"flex",flexDirection:"column",gap:3},children:[h&&p.jsx(tr,{severity:"error",sx:{borderRadius:2},children:h}),p.jsxs(Q,{children:[p.jsx(H,{variant:"subtitle1",gutterBottom:!0,sx:{fontWeight:"bold"},children:"📝 피드백 유형"}),p.jsx(zl,{container:!0,spacing:1,children:["bug","feature","improvement","question","other"].map(T=>p.jsx(zl,{item:!0,children:p.jsx(Nh,{icon:P(T),label:`${iT(T)} ${T==="bug"?"버그":T==="feature"?"기능":T==="improvement"?"개선":T==="question"?"질문":"기타"}`,onClick:()=>s({...r,type:T}),color:r.type===T?"primary":"default",variant:r.type===T?"filled":"outlined",sx:{cursor:"pointer","&:hover":{backgroundColor:r.type===T?void 0:"rgba(25, 118, 210, 0.04)"}}})},T))}),p.jsx(H,{variant:"caption",color:"text.secondary",sx:{mt:1,display:"block"},children:x(r.type)})]}),p.jsxs(im,{fullWidth:!0,children:[p.jsx(om,{children:"🚨 우선순위"}),p.jsxs(am,{value:r.priority,label:"🚨 우선순위",onChange:T=>s({...r,priority:T.target.value}),children:[p.jsx(Tn,{value:"low",children:p.jsxs(Q,{sx:{display:"flex",alignItems:"center",gap:1},children:[p.jsx(Q,{sx:{width:12,height:12,borderRadius:"50%",backgroundColor:Ks("low")}}),"낮음 - 여유가 있을 때 확인해주세요"]})}),p.jsx(Tn,{value:"medium",children:p.jsxs(Q,{sx:{display:"flex",alignItems:"center",gap:1},children:[p.jsx(Q,{sx:{width:12,height:12,borderRadius:"50%",backgroundColor:Ks("medium")}}),"보통 - 일반적인 우선순위"]})}),p.jsx(Tn,{value:"high",children:p.jsxs(Q,{sx:{display:"flex",alignItems:"center",gap:1},children:[p.jsx(Q,{sx:{width:12,height:12,borderRadius:"50%",backgroundColor:Ks("high")}}),"높음 - 빠른 확인이 필요해요"]})}),p.jsx(Tn,{value:"urgent",children:p.jsxs(Q,{sx:{display:"flex",alignItems:"center",gap:1},children:[p.jsx(Q,{sx:{width:12,height:12,borderRadius:"50%",backgroundColor:Ks("urgent")}}),"긴급 - 즉시 확인이 필요해요!"]})})]})]}),p.jsx(oi,{fullWidth:!0,label:"📋 제목",placeholder:"피드백의 제목을 간단히 입력해주세요",value:r.title,onChange:T=>s({...r,title:T.target.value}),variant:"outlined",inputProps:{maxLength:100},helperText:`${r.title.length}/100`}),p.jsx(oi,{fullWidth:!0,multiline:!0,rows:6,label:"📝 상세 내용",placeholder:r.type==="bug"?`어떤 상황에서 버그가 발생했나요?
1. 어떤 작업을 하고 있었는지
2. 어떤 오류가 발생했는지
3. 예상했던 결과는 무엇인지
자세히 알려주세요!`:r.type==="feature"?`어떤 기능이 있으면 좋을까요?
1. 왜 이 기능이 필요한지
2. 어떻게 동작했으면 좋은지
3. 어떤 상황에서 사용할지
자세히 설명해주세요!`:r.type==="improvement"?`어떤 부분을 개선하면 좋을까요?
1. 현재 어떤 불편함이 있는지
2. 어떻게 개선되면 좋은지
3. 개선되면 어떤 장점이 있는지
알려주세요!`:`궁금한 점이나 의견을 자유롭게 남겨주세요!
관리자가 확인 후 답변드릴게요 😊`,value:r.description,onChange:T=>s({...r,description:T.target.value}),variant:"outlined",inputProps:{maxLength:1e3},helperText:`${r.description.length}/1000`}),p.jsx(tr,{severity:"info",sx:{borderRadius:2},children:p.jsxs(H,{variant:"body2",children:[p.jsx("strong",{children:"💡 알아두세요!"}),p.jsx("br",{}),"• 피드백은 관리자 이메일(sbseok12@gmail.com)로도 자동 발송됩니다",p.jsx("br",{}),"• 관리자 페이지에서도 실시간으로 확인할 수 있어요",p.jsx("br",{}),"• 답변이 필요한 경우 이메일로 회신해드릴게요"]})})]})}),p.jsx(ki,{sx:{p:3,pt:1},children:c?p.jsx(Ke,{onClick:y,variant:"contained",fullWidth:!0,children:"닫기"}):p.jsxs(p.Fragment,{children:[p.jsx(Ke,{onClick:y,disabled:i,sx:{minWidth:100},children:"취소"}),p.jsx(Ke,{onClick:w,variant:"contained",disabled:i||!r.title.trim()||!r.description.trim(),startIcon:i?p.jsx(nr,{size:16}):p.jsx(Ma,{}),sx:{minWidth:120},children:i?"전송 중...":"피드백 보내기"})]})})]})},aT=180,Vh=280,cT=({children:n,user:e,themeConfig:t})=>{var S,b,v,re;const r=fm(),s=Oi(),i=Hh(),[a,c]=V.useState(null),[u,h]=V.useState(!1),f=pm(r.breakpoints.down("md")),[m,y]=V.useState(!1),[w,P]=V.useState(!1),x=Ri(e.email),T=()=>{y(!m)},L=()=>{P(!w)},U=J=>{i(J),f&&y(!1)},G=(()=>{var F,D;const J={penguin:{name:"펭귄",environment:"빙하",homeIcon:p.jsx(Wl,{}),healthIcon:p.jsx(Wl,{}),analyticsIcon:p.jsx(Fs,{}),projectIcon:p.jsx(Hl,{}),timerIcon:p.jsx(Mr,{}),chatIcon:p.jsx(Us,{}),profileIcon:p.jsx(yn,{}),adminIcon:p.jsx(Bs,{}),settingsIcon:p.jsx(Or,{})},"desert-fox":{name:"사막여우",environment:"사막",homeIcon:p.jsx(Cm,{}),healthIcon:p.jsx(yn,{}),analyticsIcon:p.jsx(Fs,{}),projectIcon:p.jsx(Hl,{}),timerIcon:p.jsx(Mr,{}),chatIcon:p.jsx(Us,{}),profileIcon:p.jsx(yn,{}),adminIcon:p.jsx(Bs,{}),settingsIcon:p.jsx(Or,{})},sheep:{name:"양",environment:"목초지",homeIcon:p.jsx(Pm,{}),healthIcon:p.jsx(yn,{}),analyticsIcon:p.jsx(Fs,{}),projectIcon:p.jsx(km,{}),timerIcon:p.jsx(Mr,{}),chatIcon:p.jsx(Us,{}),profileIcon:p.jsx(yn,{}),adminIcon:p.jsx(Bs,{}),settingsIcon:p.jsx(Or,{})},cat:{name:"고양이",environment:"집",homeIcon:p.jsx(Gl,{}),healthIcon:p.jsx(yn,{}),analyticsIcon:p.jsx(Fs,{}),projectIcon:p.jsx(Gl,{}),timerIcon:p.jsx(Mr,{}),chatIcon:p.jsx(Us,{}),profileIcon:p.jsx(yn,{}),adminIcon:p.jsx(Bs,{}),settingsIcon:p.jsx(Or,{})}},Pe=(t==null?void 0:t.id)||"penguin",fe=J[Pe]||J.penguin,nt=[{text:"홈",icon:fe.homeIcon,path:"/",emoji:(t==null?void 0:t.emoji)||"🐧",color:r.palette.primary.main,description:`${fe.name}와 함께하는 홈`},{text:"컨디션 체크",icon:fe.healthIcon,path:"/condition",emoji:"💚",color:r.palette.success.main,description:"몸과 마음의 상태 기록"},{text:"활동 분석",icon:fe.analyticsIcon,path:"/analytics",emoji:"📊",color:r.palette.info.main,description:"데이터로 보는 나의 변화"},{text:(F=t==null?void 0:t.concepts)!=null&&F.projectType?`${fe.name} ${t.concepts.projectType}`:`${fe.name} 프로젝트`,icon:fe.projectIcon,path:"/projects",emoji:hn(Pe),color:r.palette.warning.main,description:((D=t==null?void 0:t.concepts)==null?void 0:D.projectManage)||"프로젝트 관리"},{text:"계획 관리",icon:p.jsx(xm,{}),path:"/todos",emoji:"📝",color:r.palette.primary.main,description:"할일과 대주제(에픽) 관리"},{text:"집중 여행",icon:fe.timerIcon,path:"/pomodoro",emoji:M(Pe),color:r.palette.secondary.main,description:`${fe.name}과 함께하는 집중 시간`},{text:"프로필",icon:fe.profileIcon,path:"/profile",emoji:"👤",color:r.palette.secondary.main,description:"개인 정보 및 설정"}];function hn(ne){switch(ne){case"penguin":return"🗺️";case"desert-fox":return"🐪";case"sheep":return"🚜";case"cat":return"🏠";default:return"📁"}}function M(ne){switch(ne){case"penguin":return"⏰";case"desert-fox":return"🕒";case"sheep":return"⏲️";case"cat":return"🕐";default:return"⏰"}}x&&nt.push({text:`${fe.environment} 관리소`,icon:fe.adminIcon,path:"/admin",emoji:k(Pe),color:r.palette.error.main,description:"관리자 전용 패널"});function k(ne){switch(ne){case"penguin":return"🏛️";case"desert-fox":return"🏢";case"sheep":return"🏪";case"cat":return"🏬";default:return"🏛️"}}nt.push({text:`${fe.environment} 설정`,icon:fe.settingsIcon,path:"/settings",emoji:j(Pe),color:r.palette.grey[600],description:"앱 설정 및 환경설정"});function j(ne){switch(ne){case"penguin":return"❄️";case"desert-fox":return"⚙️";case"sheep":return"🔧";case"cat":return"🔩";default:return"⚙️"}}return nt})(),ce=()=>{var Pe,fe;return{"/":`${(t==null?void 0:t.emoji)||"🏠"} ${((Pe=t==null?void 0:t.concepts)==null?void 0:Pe.environment)||"홈"}`,"/condition":`💚 ${((fe=t==null?void 0:t.concepts)==null?void 0:fe.animal)||"🐧"} 컨디션 트래커`,"/analytics":"📊 분석 리포트","/projects":"🚀 프로젝트 관리","/todos":"✅ 할 일 관리","/pomodoro":"🍅 뽀모도로 타이머","/profile":"👤 프로필","/settings":"⚙️ 설정","/admin":"🛠️ 관리자 패널"}[s.pathname]||"개인 비서"},de=J=>{c(J.currentTarget)},A=()=>{c(null)},_=async()=>{try{await Q0(),A()}catch(J){console.error("로그아웃 실패:",J)}},I=p.jsxs(p.Fragment,{children:[p.jsxs(Q,{sx:{p:2,display:"flex",alignItems:"center",justifyContent:w&&!f?"center":"space-between",borderBottom:`1px solid ${r.palette.divider}`,minHeight:64},children:[(!w||f)&&p.jsxs(H,{variant:"h6",fontWeight:"bold",color:"primary",children:[t==null?void 0:t.emoji," ",(t==null?void 0:t.name)||"개인 비서"]}),!f&&p.jsx(bt,{onClick:L,size:"small",sx:{color:r.palette.text.secondary,transform:w?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.3s"},children:p.jsx(mm,{})})]}),p.jsx(gm,{sx:{flexGrow:1,px:1},children:G.map(J=>p.jsx(ym,{disablePadding:!0,sx:{mb:.5},children:p.jsxs(_m,{selected:s.pathname===J.path,onClick:()=>U(J.path),sx:{borderRadius:2,justifyContent:w&&!f?"center":"flex-start",px:w&&!f?1:2,"&.Mui-selected":{backgroundColor:J.color+"15","&:hover":{backgroundColor:J.color+"25"}},"&:hover":{backgroundColor:J.color+"10"}},children:[p.jsx(js,{sx:{color:J.color,minWidth:w&&!f?"auto":35,justifyContent:"center"},children:J.icon}),(!w||f)&&p.jsx(Ls,{primary:J.text,primaryTypographyProps:{fontSize:"0.875rem",fontWeight:s.pathname===J.path?600:400}})]})},J.text))}),p.jsx(Q,{sx:{p:2,borderTop:`1px solid ${r.palette.divider}`},children:p.jsxs(Q,{sx:{display:"flex",alignItems:"center",gap:1,justifyContent:w&&!f?"center":"flex-start"},children:[p.jsx(en,{src:e.photoURL||void 0,sx:{width:32,height:32},children:((S=e.displayName)==null?void 0:S[0])||((b=e.email)==null?void 0:b[0])||"U"}),(!w||f)&&p.jsxs(p.Fragment,{children:[p.jsx(Q,{sx:{flex:1,minWidth:0},children:p.jsx(H,{variant:"caption",noWrap:!0,children:e.displayName||e.email})}),p.jsx(bt,{size:"small",onClick:de,children:p.jsx(vm,{fontSize:"small"})})]})]})})]}),E=f?Vh:w?72:aT;return p.jsxs(Q,{sx:{display:"flex",width:"100%"},children:[!f&&p.jsx(ql,{variant:"permanent",sx:{width:E,flexShrink:0,transition:r.transitions.create("width",{easing:r.transitions.easing.sharp,duration:r.transitions.duration.enteringScreen}),"& .MuiDrawer-paper":{width:E,boxSizing:"border-box",bgcolor:r.palette.background.paper,borderRight:`1px solid ${r.palette.divider}`,transition:r.transitions.create("width",{easing:r.transitions.easing.sharp,duration:r.transitions.duration.enteringScreen}),overflowX:"hidden"}},children:I}),f&&p.jsx(ql,{variant:"temporary",open:m,onClose:T,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:Vh,boxSizing:"border-box",bgcolor:r.palette.background.paper}},children:I}),p.jsxs(Q,{component:"main",sx:{flexGrow:1,overflow:"hidden",width:f?"100%":`calc(100% - ${E}px)`,transition:r.transitions.create("width",{easing:r.transitions.easing.sharp,duration:r.transitions.duration.enteringScreen})},children:[p.jsx(Im,{position:"static",elevation:0,sx:{bgcolor:r.palette.background.paper,borderBottom:`1px solid ${r.palette.divider}`},children:p.jsxs(wm,{children:[f&&p.jsx(bt,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:T,sx:{mr:2,color:r.palette.text.primary},children:p.jsx(Em,{})}),p.jsx(H,{variant:"h6",component:"div",sx:{flexGrow:1,color:r.palette.text.primary,fontSize:f?"1rem":"1.25rem"},children:ce()}),p.jsx(Tm,{title:"피드백 보내기",children:p.jsx(bt,{onClick:()=>h(!0),sx:{color:r.palette.text.primary,mr:1,"&:hover":{backgroundColor:r.palette.action.hover}},children:p.jsx(Sm,{})})}),p.jsx(en,{src:e.photoURL||void 0,sx:{width:32,height:32},children:((v=e.displayName)==null?void 0:v[0])||((re=e.email)==null?void 0:re[0])||"U"})]})}),p.jsx(Q,{sx:{height:"calc(100vh - 64px)",overflow:"auto",p:0,"& > *":{px:f?1:3,py:f?1:3}},children:n})]}),p.jsxs(Am,{anchorEl:a,open:!!a,onClose:A,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"bottom",horizontal:"right"},children:[p.jsxs(Tn,{onClick:()=>{i("/profile"),A()},children:[p.jsx(js,{children:p.jsx(bm,{fontSize:"small"})}),p.jsx(Ls,{children:"프로필"})]}),p.jsxs(Tn,{onClick:()=>{i("/settings"),A()},children:[p.jsx(js,{children:p.jsx(Or,{fontSize:"small"})}),p.jsx(Ls,{children:"설정"})]}),p.jsx(Oh,{}),p.jsxs(Tn,{onClick:_,children:[p.jsx(js,{children:p.jsx(Rm,{fontSize:"small"})}),p.jsx(Ls,{children:"로그아웃"})]})]}),p.jsx(oT,{open:u,onClose:()=>h(!1),user:e})]})},lT=()=>{var P,x;const[n,e]=V.useState(!1),[t,r]=V.useState(null),[s,i]=V.useState(null),[a,c]=V.useState(!1),[u,h]=V.useState(null),[f,m]=V.useState(""),y=async()=>{e(!0),r("");try{const T=await W0();console.log(T?"로그인 성공! App.tsx에서 권한 상태를 확인합니다. 🐧":"로그인이 취소되었습니다.")}catch(T){console.error("로그인 실패:",T),r(T.message||"로그인에 실패했습니다. 다시 시도해주세요. 🐧")}finally{e(!1)}},w=async()=>{if(u){e(!0);try{await yp({email:u.email,displayName:u.displayName||"",photoURL:u.photoURL||void 0,reason:f}),i("접근 권한 신청이 완료되었습니다! 관리자의 승인을 기다려주세요."),c(!1),h(null),m("")}catch{r("신청 중 오류가 발생했습니다.")}finally{e(!1)}}};return p.jsxs(Q,{sx:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",p:2},children:[p.jsx(rr,{sx:{maxWidth:400,width:"100%",textAlign:"center"},children:p.jsxs(Dm,{sx:{p:4},children:[p.jsx(en,{sx:{width:80,height:80,mx:"auto",mb:3,bgcolor:"primary.main",fontSize:"2rem"},children:"🐧"}),p.jsx(H,{variant:"h4",fontWeight:"bold",gutterBottom:!0,children:"펭귄 비서"}),p.jsx(H,{variant:"body1",color:"textSecondary",sx:{mb:4},children:"나만의 똑똑한 펭귄과 함께하세요 🐟"}),s&&p.jsx(tr,{severity:"success",sx:{mb:3},children:s}),t&&p.jsx(tr,{severity:"error",sx:{mb:3},children:t}),p.jsx(Ke,{variant:"contained",size:"large",fullWidth:!0,onClick:y,disabled:n,startIcon:n?p.jsx(nr,{size:20}):p.jsx(Vm,{}),sx:{py:1.5,fontSize:"1.1rem",textTransform:"none",borderRadius:2},children:n?"로그인 중...":"Google로 로그인"}),p.jsxs(H,{variant:"caption",color:"textSecondary",sx:{mt:3,display:"block"},children:["승인된 사용자만 접근할 수 있습니다 🔒",p.jsx("br",{}),"처음 사용하시는 경우 접근 권한을 신청해주세요"]})]})}),p.jsxs(xi,{open:a,onClose:()=>c(!1),maxWidth:"sm",fullWidth:!0,children:[p.jsx(Ci,{children:"접근 권한 신청"}),p.jsxs(Pi,{children:[u&&p.jsxs(Q,{sx:{mb:3,textAlign:"center"},children:[p.jsx(en,{src:u.photoURL||void 0,sx:{width:60,height:60,mx:"auto",mb:2},children:((P=u.displayName)==null?void 0:P[0])||((x=u.email)==null?void 0:x[0])}),p.jsx(H,{variant:"h6",children:u.displayName}),p.jsx(H,{variant:"body2",color:"textSecondary",children:u.email})]}),p.jsx(H,{variant:"body2",color:"textSecondary",sx:{mb:2},children:"개인 비서 앱 사용을 위한 접근 권한을 신청합니다. 관리자가 검토 후 승인해드릴게요! 🚀"}),p.jsx(oi,{fullWidth:!0,multiline:!0,rows:3,label:"신청 사유 (선택사항)",placeholder:"개인 비서 앱을 사용하고 싶은 이유를 간단히 적어주세요...",value:f,onChange:T=>m(T.target.value),sx:{mt:2}})]}),p.jsxs(ki,{children:[p.jsx(Ke,{onClick:()=>c(!1),children:"취소"}),p.jsx(Ke,{onClick:w,variant:"contained",startIcon:p.jsx(Ma,{}),disabled:n,children:"신청하기"})]})]})]})},wp=V.createContext(void 0),uT=({children:n})=>{const[e,t]=V.useState(!1),[r,s]=V.useState(25*60),[i,a]=V.useState(25*60),[c,u]=V.useState(null),[h,f]=V.useState(null),[m,y]=V.useState(!1),[w,P]=V.useState(0),[x,T]=V.useState(null),[L,U]=V.useState(null),z=V.useRef(null),G=V.useRef(null);V.useEffect(()=>(e&&r>0?G.current=setInterval(()=>{s(re=>re<=1?(t(!1),b(),0):re-1)},1e3):G.current&&(clearInterval(G.current),G.current=null),()=>{G.current&&clearInterval(G.current)}),[e,r]),V.useEffect(()=>{const re={isActive:e,time:r,totalTime:i,selectedProject:c,selectedTask:h,isBreak:m,completedSessions:w,sessionStartTime:x,currentSessionId:L};localStorage.setItem("pomodoroState",JSON.stringify(re))},[e,r,i,c,h,m,w,x,L]),V.useEffect(()=>{const re=localStorage.getItem("pomodoroState");if(re)try{const J=JSON.parse(re);t(J.isActive||!1),s(J.time||25*60),a(J.totalTime||25*60),u(J.selectedProject||null),f(J.selectedTask||null),y(J.isBreak||!1),P(J.completedSessions||0),T(J.sessionStartTime||null),U(J.currentSessionId||null)}catch(J){console.error("뽀모도로 상태 복원 실패:",J)}},[]);const ce=()=>c?h?(x||(T(new Date().toISOString()),U(Date.now().toString())),z.current=Date.now(),t(!0),!0):(console.warn("⚠️ 작업을 선택해주세요!"),!1):(console.warn("⚠️ 프로젝트를 선택해주세요!"),!1),de=()=>{t(!1),S()},A=()=>{t(!1),s(i),T(null),U(null),z.current=null},_=re=>{const J=re*60;s(J),a(J)},I=re=>{u(re)},E=re=>{f(re)},S=()=>{if(!x||!L)return;const re=Math.floor((i-r)/60);if(re<1)return;const J={id:L,projectId:c==null?void 0:c.id,projectTitle:(c==null?void 0:c.title)||"프로젝트 없음",taskId:h==null?void 0:h.id,taskTitle:(h==null?void 0:h.title)||"작업 없음",sessionType:m?"break":"focus",duration:i/60,actualDuration:re,startTime:x,endTime:new Date().toISOString(),completed:!1,pausedAt:new Date().toISOString()},fe=[...JSON.parse(localStorage.getItem("pomodoroSessions")||"[]"),J];localStorage.setItem("pomodoroSessions",JSON.stringify(fe)),console.log("세션 중간 저장:",J)},b=()=>{if(x&&L){const re={id:L,projectId:c==null?void 0:c.id,projectTitle:(c==null?void 0:c.title)||"프로젝트 없음",taskId:h==null?void 0:h.id,taskTitle:(h==null?void 0:h.title)||"작업 없음",sessionType:m?"break":"focus",duration:i/60,actualDuration:i/60,startTime:x,endTime:new Date().toISOString(),completed:!0},Pe=[...JSON.parse(localStorage.getItem("pomodoroSessions")||"[]"),re];localStorage.setItem("pomodoroSessions",JSON.stringify(Pe)),console.log("세션 완료 저장:",re)}P(re=>re+1),T(null),U(null),m?(y(!1),_(25)):(y(!0),_(5)),"Notification"in window&&Notification.permission==="granted"&&new Notification(m?"브레이크 완료! 🎉":"뽀모도로 완료! 🍅",{body:m?"작업을 시작하세요!":"잠시 휴식하세요!",icon:m?"🎉":"🍅"})},v={isActive:e,time:r,totalTime:i,selectedProject:c,selectedTask:h,isBreak:m,completedSessions:w,sessionStartTime:x,currentSessionId:L,startTimer:ce,pauseTimer:de,resetTimer:A,setTime:_,setProject:I,setTask:E,setIsBreak:y,completeSession:b,saveCurrentSession:S};return p.jsx(wp.Provider,{value:v,children:n})},hT=()=>{const n=V.useContext(wp);if(n===void 0)throw new Error("usePomodoro must be used within a PomodoroProvider");return n},dT=n=>{const e=Math.floor(n/60),t=n%60;return`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`},fT=({onClose:n})=>{const{isActive:e,time:t,totalTime:r,selectedProject:s,selectedTask:i,isBreak:a,startTimer:c,pauseTimer:u,resetTimer:h,sessionStartTime:f}=hT(),m=Hh(),y=Oi(),[w,P]=V.useState(!1),[x,T]=V.useState({x:20,y:20}),[L,U]=V.useState(!1),[z,G]=V.useState({x:0,y:0}),ce=b=>{b.target.closest(".drag-handle")&&(b.preventDefault(),U(!0),G({x:b.clientX-x.x,y:b.clientY-x.y}))},de=b=>{if(L){const v=b.clientX-z.x,re=b.clientY-z.y,J=window.innerWidth-300,Pe=window.innerHeight-200;T({x:Math.max(0,Math.min(v,J)),y:Math.max(0,Math.min(re,Pe))})}},A=()=>{U(!1)};ja.useEffect(()=>{if(L)return document.addEventListener("mousemove",de),document.addEventListener("mouseup",A),()=>{document.removeEventListener("mousemove",de),document.removeEventListener("mouseup",A)}},[L,z,x]);const _=y.pathname!=="/pomodoro";if(!_)return null;const I=(r-t)/r*100,E=()=>{L||m("/pomodoro")},S=w||!s||!i;return p.jsx(Mh,{direction:"up",in:_,mountOnEnter:!0,unmountOnExit:!0,children:p.jsx(Q,{sx:{position:"fixed",bottom:`${x.y}px`,right:`${x.x}px`,zIndex:1e3,maxWidth:w?180:280,minWidth:w?160:260,cursor:L?"grabbing":"default"},children:p.jsx(Nm,{in:_,children:p.jsx(rr,{sx:{borderRadius:2,boxShadow:L?"0 20px 60px rgba(0, 0, 0, 0.4)":"0 8px 32px rgba(0, 0, 0, 0.2)",background:a?"linear-gradient(135deg, #4CAF50 0%, #81C784 100%)":"linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%)",color:"white",cursor:S?"pointer":"default",transition:L?"none":"all 0.3s ease",border:"2px solid rgba(255, 255, 255, 0.3)","&:hover":{transform:L?"none":"translateY(-4px)",boxShadow:L?"0 20px 60px rgba(0, 0, 0, 0.4)":"0 12px 40px rgba(0, 0, 0, 0.3)",border:"2px solid rgba(255, 255, 255, 0.5)"}},onClick:S?E:void 0,onMouseDown:ce,children:p.jsxs(Q,{sx:{p:w?1:2},children:[p.jsxs(Q,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",mb:w?.5:1,borderBottom:w?"none":"1px solid rgba(255, 255, 255, 0.2)",pb:w?0:1},children:[p.jsxs(Q,{sx:{display:"flex",alignItems:"center",gap:1},children:[p.jsx(Om,{className:"drag-handle",sx:{fontSize:w?"0.8rem":"1rem",cursor:"grab",opacity:.7,"&:hover":{opacity:1},"&:active":{cursor:"grabbing"}}}),p.jsx(Mr,{sx:{fontSize:w?"0.9rem":"1.1rem"}}),!w&&p.jsx(H,{variant:"body2",fontWeight:"bold",sx:{fontSize:"0.85rem"},children:a?"🌱 BREAK":"🍅 FOCUS"})]}),p.jsxs(Q,{sx:{display:"flex",gap:.5},children:[p.jsx(bt,{size:"small",onClick:b=>{b.stopPropagation(),P(!w)},sx:{color:"white",opacity:.7,"&:hover":{opacity:1},width:24,height:24},children:w?p.jsx(Mm,{fontSize:"small"}):p.jsx(jm,{fontSize:"small"})}),n&&p.jsx(bt,{size:"small",onClick:b=>{b.stopPropagation(),n()},sx:{color:"white",opacity:.7,"&:hover":{opacity:1},width:24,height:24},children:p.jsx(jh,{fontSize:"small"})})]})]}),p.jsxs(Q,{sx:{textAlign:"center",mb:w?.5:2,py:w?.5:1,backgroundColor:"rgba(0, 0, 0, 0.2)",borderRadius:2,border:"1px solid rgba(255, 255, 255, 0.2)"},children:[p.jsx(H,{variant:w?"h5":"h3",fontWeight:"bold",sx:{fontFamily:"'Roboto Mono', 'Courier New', monospace",fontSize:w?"1.5rem":"2.2rem",letterSpacing:"0.05em",textShadow:"0 2px 4px rgba(0,0,0,0.3)"},children:dT(t)}),!w&&p.jsxs(H,{variant:"caption",sx:{opacity:.8,fontSize:"0.7rem",display:"block",mt:.5},children:[Math.floor(I),"% COMPLETE"]})]}),!w&&p.jsxs(p.Fragment,{children:[p.jsx(Lh,{variant:"determinate",value:I,sx:{height:8,borderRadius:2,mb:2,backgroundColor:"rgba(0, 0, 0, 0.3)",border:"1px solid rgba(255, 255, 255, 0.2)","& .MuiLinearProgress-bar":{borderRadius:2,backgroundColor:"rgba(255, 255, 255, 0.9)",boxShadow:"0 0 10px rgba(255, 255, 255, 0.5)"}}}),s||i?p.jsxs(Q,{sx:{mb:2,p:1,backgroundColor:"rgba(0, 0, 0, 0.2)",borderRadius:2,border:"1px solid rgba(255, 255, 255, 0.2)"},children:[s&&p.jsxs(H,{variant:"caption",sx:{display:"block",opacity:.9,fontSize:"0.7rem",fontWeight:"bold"},children:["📁 ",s.title]}),i&&p.jsxs(H,{variant:"caption",sx:{display:"block",opacity:.8,fontSize:"0.7rem",mt:.5},children:["📝 ",i.title]})]}):p.jsxs(Q,{sx:{mb:2,p:1,backgroundColor:"rgba(255, 255, 255, 0.1)",borderRadius:2,border:"1px dashed rgba(255, 255, 255, 0.3)"},children:[p.jsx(H,{variant:"caption",sx:{display:"block",opacity:.7,fontSize:"0.65rem",textAlign:"center",fontStyle:"italic"},children:"⚠️ No project/task selected"}),p.jsx(H,{variant:"caption",sx:{display:"block",opacity:.6,fontSize:"0.6rem",textAlign:"center",mt:.5},children:"Click to set up"})]}),p.jsxs(Q,{sx:{display:"flex",justifyContent:"center",gap:1,mb:1},children:[p.jsx(bt,{size:"small",onClick:b=>{b.stopPropagation(),e?u():c()||alert(`프로젝트와 작업을 먼저 선택해주세요! 🎯

뽀모도로 페이지에서 설정할 수 있습니다.`)},disabled:!s||!i,sx:{backgroundColor:"rgba(255, 255, 255, 0.2)",color:"white",width:36,height:36,border:"1px solid rgba(255, 255, 255, 0.3)","&:hover":{backgroundColor:"rgba(255, 255, 255, 0.3)",transform:"scale(1.05)"},"&:disabled":{backgroundColor:"rgba(255, 255, 255, 0.1)",color:"rgba(255, 255, 255, 0.5)"},transition:"all 0.2s ease"},children:e?p.jsx(Lm,{fontSize:"small"}):p.jsx(Fm,{fontSize:"small"})}),p.jsx(bt,{size:"small",onClick:b=>{b.stopPropagation(),h()},sx:{backgroundColor:"rgba(255, 255, 255, 0.2)",color:"white",width:36,height:36,border:"1px solid rgba(255, 255, 255, 0.3)","&:hover":{backgroundColor:"rgba(255, 255, 255, 0.3)",transform:"scale(1.05)"},transition:"all 0.2s ease"},children:p.jsx(Um,{fontSize:"small"})})]}),p.jsx(H,{variant:"caption",sx:{display:"block",textAlign:"center",opacity:.6,fontSize:"0.65rem"},children:"📱 Click to expand"})]}),w&&p.jsx(H,{variant:"caption",sx:{display:"block",textAlign:"center",mt:.5,opacity:.7,fontSize:"0.6rem"},children:"↗️ Click to expand"})]})})})})})},Bc="emergency_alerts",pT=()=>`alert-${Date.now()}-${Math.random().toString(36).substr(2,9)}`,mT=n=>{const e={id:pT(),title:n.title,message:n.message,type:n.type||"info",severity:n.severity||"medium",dismissible:n.dismissible!==!1,persistent:n.persistent||!1,showOnce:n.showOnce||!1,dismissed:!1,createdAt:W().toISOString(),expiresAt:n.expiresIn?W().add(n.expiresIn,"minute").toISOString():void 0},t=un();return t.push(e),fo(t),e},un=()=>{try{const n=localStorage.getItem(Bc);return n?JSON.parse(n):[]}catch(n){return console.error("긴급알림 로드 실패:",n),[]}},fo=n=>{try{localStorage.setItem(Bc,JSON.stringify(n))}catch(e){console.error("긴급알림 저장 실패:",e)}},Ep=()=>{const n=un(),e=W();return n.filter(t=>!(t.dismissed||t.expiresAt&&e.isAfter(W(t.expiresAt))))},gT=()=>un().sort((e,t)=>W(t.createdAt).valueOf()-W(e.createdAt).valueOf()),yT=()=>{const n=un(),e=W();return n.filter(t=>!(t.read||t.expiresAt&&e.isAfter(W(t.expiresAt))))},_T=n=>{const e=un(),t=e.findIndex(r=>r.id===n);t!==-1&&(e[t].read=!0,e[t].readAt=W().toISOString(),fo(e))},Oa=n=>{const e=un(),t=e.findIndex(r=>r.id===n);t!==-1&&(e[t].dismissed=!0,e[t].dismissedAt=W().toISOString(),fo(e))},vT=()=>{localStorage.removeItem(Bc)},IT=()=>{const n=un(),e=W(),t=n.filter(r=>!(r.expiresAt&&e.isAfter(W(r.expiresAt))&&!r.persistent));t.length!==n.length&&fo(t)},Tp={create:n=>{const e=mT(n);return console.log("🚨 긴급알림이 생성되었습니다:",e),e},list:()=>{const n=un();return console.table(n),n},active:()=>{const n=Ep();return console.table(n),n},history:()=>{const n=gT();return console.table(n),n},unread:()=>{const n=yT();return console.table(n),n},markRead:n=>{_T(n),console.log(`📖 알림 ${n}를 읽음으로 표시했습니다.`)},dismiss:n=>{Oa(n),console.log(`✅ 알림 ${n}가 닫혔습니다.`)},clear:()=>{vT(),console.log("🗑️ 모든 긴급알림이 삭제되었습니다.")},createSamples:()=>{[{title:"🎉 새로운 기능 업데이트",message:"데이터 백업 및 복구 기능이 추가되었습니다! 이제 언제든지 안전하게 데이터를 관리할 수 있어요.",type:"success",severity:"medium",expiresIn:1440},{title:"⚠️ 시스템 점검 안내",message:"내일 오전 2시-4시 시스템 점검이 예정되어 있습니다. 이 시간 동안 서비스 이용이 제한될 수 있습니다.",type:"warning",severity:"high",expiresIn:2880},{title:"🚨 중요 보안 업데이트",message:"보안 강화를 위한 업데이트가 적용되었습니다. 모든 사용자는 비밀번호 변경을 권장합니다.",type:"error",severity:"critical",persistent:!0,dismissible:!0}].forEach(e=>Tp.create(e)),console.log("📋 샘플 긴급알림들이 생성되었습니다.")}};typeof window<"u"&&(window.adminAlert=Tp);const wT=ja.forwardRef(function(e,t){return p.jsx(Mh,{direction:"down",ref:t,...e})}),ET=({onAlertDismissed:n})=>{const[e,t]=V.useState([]),[r,s]=V.useState(0),[i,a]=V.useState(!1);V.useEffect(()=>{const x=()=>{IT();const L=Ep();L.length>0?(t(L),s(0),a(!0)):a(!1)};x();const T=setInterval(x,3e4);return()=>clearInterval(T)},[]);const c=e[r],u=(x,T)=>{const L={fontSize:"large",sx:{mr:1,color:T==="critical"?"error.main":T==="high"?"warning.main":T==="medium"?"info.main":"success.main"}};switch(x){case"error":return p.jsx(Wm,{...L});case"warning":return p.jsx(qm,{...L});case"success":return p.jsx(zm,{...L});default:return T==="critical"?p.jsx(Bm,{...L}):p.jsx($m,{...L})}},h=x=>{switch(x){case"critical":return"error";case"high":return"warning";case"medium":return"info";case"low":return"success";default:return"info"}},f=x=>{switch(x){case"critical":return"🚨 긴급";case"high":return"⚠️ 높음";case"medium":return"📢 보통";case"low":return"💡 낮음";default:return"📢 보통"}},m=()=>{if(c){Oa(c.id),n==null||n(c.id);const x=e.filter(T=>T.id!==c.id);x.length>0?(t(x),s(Math.min(r,x.length-1))):(a(!1),t([]),s(0))}},y=()=>{r<e.length-1&&s(r+1)},w=()=>{r>0&&s(r-1)},P=()=>{e.forEach(x=>{x.dismissible&&(Oa(x.id),n==null||n(x.id))}),a(!1),t([]),s(0)};return!c||!i?null:p.jsxs(xi,{open:i,TransitionComponent:wT,keepMounted:!0,onClose:c.dismissible?m:void 0,maxWidth:"md",fullWidth:!0,PaperProps:{sx:{borderRadius:3,border:"2px solid",borderColor:`${h(c.severity)}.main`,boxShadow:`0 8px 32px rgba(${c.severity==="critical"?"244, 67, 54":c.severity==="high"?"255, 152, 0":c.severity==="medium"?"33, 150, 243":"76, 175, 80"}, 0.3)`}},children:[p.jsxs(Ci,{sx:{backgroundColor:`${h(c.severity)}.main`,color:"white",display:"flex",alignItems:"center",justifyContent:"space-between",pr:1},children:[p.jsxs(Q,{display:"flex",alignItems:"center",flex:1,children:[u(c.type,c.severity),p.jsx(H,{variant:"h6",fontWeight:"bold",sx:{mr:2},children:c.title}),p.jsx(Nh,{label:f(c.severity),size:"small",sx:{backgroundColor:"rgba(255, 255, 255, 0.2)",color:"white",fontWeight:"bold"}})]}),c.dismissible&&p.jsx(bt,{size:"small",onClick:m,sx:{color:"white",ml:1},children:p.jsx(jh,{})})]}),p.jsxs(Pi,{sx:{pt:3},children:[p.jsx(tr,{severity:c.type,sx:{mb:2,borderRadius:2},icon:!1,children:p.jsx(H,{variant:"body1",sx:{whiteSpace:"pre-line"},children:c.message})}),p.jsxs(Q,{sx:{mt:2,p:2,backgroundColor:"grey.50",borderRadius:2},children:[p.jsxs(H,{variant:"caption",color:"text.secondary",display:"block",children:["📅 생성: ",W(c.createdAt).format("YYYY-MM-DD HH:mm")]}),c.expiresAt&&p.jsxs(H,{variant:"caption",color:"text.secondary",display:"block",children:["⏰ 만료: ",W(c.expiresAt).format("YYYY-MM-DD HH:mm")]}),c.persistent&&p.jsx(H,{variant:"caption",color:"warning.main",display:"block",children:"📌 지속적 알림 (새로고침해도 계속 표시)"})]}),e.length>1&&p.jsxs(p.Fragment,{children:[p.jsx(Oh,{sx:{my:2}}),p.jsxs(Q,{display:"flex",justifyContent:"center",alignItems:"center",gap:2,children:[p.jsx(Ke,{size:"small",onClick:w,disabled:r===0,variant:"outlined",children:"이전"}),p.jsxs(H,{variant:"body2",color:"text.secondary",children:[r+1," / ",e.length]}),p.jsx(Ke,{size:"small",onClick:y,disabled:r===e.length-1,variant:"outlined",children:"다음"})]})]})]}),p.jsxs(ki,{sx:{p:3,gap:1},children:[e.length>1&&p.jsx(Ke,{onClick:P,variant:"outlined",color:"secondary",sx:{mr:"auto"},children:"모든 알림 닫기"}),c.dismissible&&p.jsx(Ke,{onClick:m,variant:"contained",color:"primary",children:e.length>1?"이 알림 닫기":"확인"}),!c.dismissible&&p.jsx(H,{variant:"caption",color:"text.secondary",sx:{fontStyle:"italic"},children:"이 알림은 자동으로 닫을 수 없습니다"})]})]})},TT=({message:n="시스템 점검 중입니다. 잠시 후 다시 이용해주세요."})=>p.jsxs(Q,{sx:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",p:3},children:[p.jsxs(Hm,{elevation:8,sx:{p:6,textAlign:"center",maxWidth:500,borderRadius:3,background:"rgba(255, 255, 255, 0.95)",backdropFilter:"blur(10px)"},children:[p.jsx(Q,{sx:{mb:3},children:p.jsx(Gm,{sx:{fontSize:80,color:"#ff9800",mb:2,animation:"pulse 2s infinite"}})}),p.jsx(H,{variant:"h4",fontWeight:"bold",sx:{mb:2,background:"linear-gradient(45deg, #ff9800 30%, #f57c00 90%)",backgroundClip:"text",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"🚧 시스템 점검 중"}),p.jsx(H,{variant:"body1",sx:{mb:4,color:"text.secondary",lineHeight:1.6},children:n}),p.jsx(Q,{sx:{mb:3},children:p.jsx(nr,{size:40,sx:{color:"#ff9800",animation:"spin 2s linear infinite"}})}),p.jsxs(Q,{sx:{display:"flex",alignItems:"center",justifyContent:"center",gap:1,color:"text.secondary"},children:[p.jsx(Km,{fontSize:"small"}),p.jsxs(H,{variant:"body2",children:["점검 시작: ",new Date().toLocaleString("ko-KR")]})]}),p.jsx(H,{variant:"caption",sx:{mt:3,display:"block",color:"text.disabled"},children:"문의사항이 있으시면 관리자에게 연락해주세요."})]}),p.jsx("style",{children:`
          @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.5; }
            100% { opacity: 1; }
          }
          
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `})]}),ST=async n=>{try{const e={title:"📦 임시 보관함 (Legacy Projects)",description:"에픽이 지정되지 않은 기존 프로젝트들이 임시로 보관되는 곳입니다. 새로운 에픽을 생성해서 프로젝트들을 정리해보세요!",status:"planning",priority:"low",startDate:new Date().toISOString().split("T")[0],dueDate:new Date(Date.now()+31536e6).toISOString().split("T")[0],progress:0,projects:[],color:"#9e9e9e",emoji:"📦",tags:["legacy","temporary"],createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),userEmail:n,isTemporary:!0},t=await Cc(Nt(Ae,"epics"),e);return console.log("✅ 임시 에픽 생성 완료:",t.id),t.id}catch(e){throw console.error("❌ 임시 에픽 생성 실패:",e),e}},AT=async n=>{try{console.log("🔄 레거시 프로젝트 마이그레이션 시작...");const e=Zt(Nt(Ae,"projects"),Rt("userEmail","==",n)),t=await hr(e),r=[];if(t.forEach(u=>{const h={id:u.id,...u.data()};(!h.epicId||h.epicId==="")&&r.push(h)}),r.length===0)return console.log("✅ 마이그레이션할 레거시 프로젝트가 없습니다."),{success:!0,migratedCount:0};const s=Zt(Nt(Ae,"epics"),Rt("userEmail","==",n),Rt("isTemporary","==",!0)),i=await hr(s);let a;i.empty?a=await ST(n):(a=i.docs[0].id,console.log("📦 기존 임시 에픽 사용:",a));const c=r.map(async u=>{const h=Je(Ae,"projects",u.id);await io(h,{epicId:a,updatedAt:Pc()}),console.log(`📎 프로젝트 "${u.title}" → 임시 에픽으로 이동`)});return await Promise.all(c),console.log(`✅ ${r.length}개의 레거시 프로젝트 마이그레이션 완료!`),{success:!0,migratedCount:r.length,tempEpicId:a}}catch(e){return console.error("❌ 레거시 프로젝트 마이그레이션 실패:",e),{success:!1,error:e}}},wS=async n=>{try{const e=Zt(Nt(Ae,"epics"),Rt("userEmail","==",n),Rt("isTemporary","==",!0)),t=await hr(e);if(t.empty)return{hasTempEpic:!1,projectCount:0};const r=t.docs[0].id,s=Zt(Nt(Ae,"projects"),Rt("userEmail","==",n),Rt("epicId","==",r)),i=await hr(s);return{hasTempEpic:!0,tempEpicId:r,projectCount:i.size,tempEpic:{id:r,...t.docs[0].data()}}}catch(e){return console.error("❌ 임시 에픽 상태 확인 실패:",e),{hasTempEpic:!1,projectCount:0,error:e}}},ES=n=>[`📦 임시 보관함에 ${n}개의 프로젝트가 있어요!`,"🎯 관련 프로젝트들을 묶어서 새로운 에픽을 만들어보세요.",'✨ 예시: "웹사이트 리뉴얼", "모바일 앱 개발", "마케팅 캠페인" 등',"🚀 에픽으로 정리하면 프로젝트 관리가 훨씬 쉬워져요!"].join(`
`),bT=async n=>{try{const e=await AT(n);return e.success&&e.migratedCount&&e.migratedCount>0?{shouldShowNotification:!0,message:`📦 ${e.migratedCount}개의 기존 프로젝트를 임시 보관함으로 이동했어요!
새로운 에픽을 만들어서 프로젝트들을 정리해보세요! 🎯`,tempEpicId:e.tempEpicId}:{shouldShowNotification:!1}}catch(e){return console.error("❌ 자동 마이그레이션 체크 실패:",e),{shouldShowNotification:!1,error:e}}},RT={background:{primary:"#f5f5f5",secondary:"#ffffff",pattern:`url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='20' height='20' fill='%23f5f5f5'/%3E%3C/svg%3E")`,gradient:"linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)"},border:{color:"#cccccc",shadow:"0 2px 8px rgba(0,0,0,0.1)"},path:{color:"rgba(128,128,128,0.3)",opacity:.5}},xT={blocks:{emoji:"⬜",type:"블록",collectName:"아이템"},building:{name:"구조물",description:"기본 구조물",completionMessage:"완성되었습니다!"},collectInterval:30,maxBlocks:25,progressPerBlock:4},CT={animal:{speed:.5,radius:35,bounceHeight:.1},blocks:{popDuration:"0.3s",arrangement:"tower",spacing:{horizontal:20,vertical:15}}},Sp={id:"penguin",name:"뒤뚱",emoji:"🐧",description:"차가운 빙하와 남극의 평온함",colors:{light:{primary:"#2196F3",primaryLight:"#64B5F6",primaryDark:"#1976D2",secondary:"#03DAC6",secondaryLight:"#66FFF9",secondaryDark:"#00BCD4",background:"#FAFAFA",paper:"#FFFFFF",info:"#2196F3",success:"#4CAF50",warning:"#FF9800",error:"#F44336"},dark:{primary:"#90CAF9",primaryLight:"#BBDEFB",primaryDark:"#42A5F5",secondary:"#80DEEA",secondaryLight:"#B2EBF2",secondaryDark:"#4DD0E1",background:"#121212",paper:"#1E1E1E",info:"#2196F3",success:"#4CAF50",warning:"#FF9800",error:"#F44336"}},concepts:{loading:"펭귄이 빙하를 준비하는 중이에요...",welcome:"남극 빙하 기지에 온 것을 환영해요!",appName:"펭귄 비서",appDescription:"차가운 빙하에서 따뜻한 도움을 드리는 펭귄 비서입니다",environment:"남극의 차가운 빙하 🧊",animal:"펭귄",greeting:"안녕하세요! 오늘도 빙하에서 멋진 하루 보내세요!",farewell:"빙하에서 따뜻한 하루 되세요!",baseTitle:"🏔️ 빙하 기지",baseWelcome:"펭귄 비서의 빙하 기지에 오신 것을 환영해요!",liveView:"🐧 빙하 라이브 뷰",liveViewDescription:"우리 펭귄이 빙하에서 무엇을 하고 있는지 확인해보세요! ❄️",quickActions:"빙하 퀵 액션",activeProjects:"진행 중인 탐험",projectStats:"탐험 통계",animalSaying:"펭귄이 말하길",temperatureMoods:{cold:"❄️ 완벽한 빙하 날씨에요!",cool:"🧊 시원한 빙하가 좋아요",mild:"🌨️ 따뜻해져서 조금 이상해요",warm:"☀️ 너무 따뜻해서 걱정이에요",hot:"🔥 빙하가 녹고 있어요!"},projectType:"탐험",projectCreate:"새로운 탐험 시작하기",projectManage:"탐험 관리하기"},ui:{background:{primary:"#E3F2FD",secondary:"#BBDEFB",pattern:`url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='ice' patternUnits='userSpaceOnUse' width='20' height='20'%3E%3Crect width='20' height='20' fill='%23E3F2FD'/%3E%3Crect x='10' y='10' width='10' height='10' fill='%23BBDEFB'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23ice)'/%3E%3C/svg%3E")`,gradient:"radial-gradient(circle at 20% 20%, #E3F2FD 0%, #BBDEFB 40%, #90CAF9 100%)"},border:{color:"#2196F3",shadow:"inset 0 0 20px rgba(33, 150, 243, 0.3)"},path:{color:"rgba(33, 150, 243, 0.3)",opacity:.5}},game:{blocks:{emoji:"🧊",type:"얼음 블록",collectName:"얼음 블록 수집"},building:{name:"얼음 성",description:"웅장한 얼음 성",completionMessage:"멋진 얼음 성이 완성되었어요! ❄️🏰"},collectInterval:30,maxBlocks:25,progressPerBlock:4},animation:{animal:{speed:.5,radius:35,bounceHeight:.15},blocks:{popDuration:"0.3s",arrangement:"tower",spacing:{horizontal:20,vertical:15}}}},PT={id:"desert-fox",name:"휘리릭",emoji:"🦊",description:"따뜻한 사막과 오아시스의 활기",colors:{light:{primary:"#FF8C00",primaryLight:"#FFB74D",primaryDark:"#F57C00",secondary:"#FFC107",secondaryLight:"#FFEB3B",secondaryDark:"#FF9800",background:"#FFF8E1",paper:"#FFFFFF",info:"#2196F3",success:"#8BC34A",warning:"#FF9800",error:"#F44336"},dark:{primary:"#FFB74D",primaryLight:"#FFCC02",primaryDark:"#FF8F00",secondary:"#FFCC02",secondaryLight:"#FFEB3B",secondaryDark:"#FFC107",background:"#1A1A1A",paper:"#2A2A2A",info:"#2196F3",success:"#8BC34A",warning:"#FF9800",error:"#F44336"}},concepts:{loading:"사막여우가 오아시스를 준비하는 중이에요...",welcome:"따뜻한 사막 오아시스에 온 것을 환영해요!",appName:"사막여우 비서",appDescription:"뜨거운 사막에서 시원한 도움을 드리는 사막여우 비서입니다",environment:"따뜻한 사막과 오아시스 🏜️",animal:"사막여우",greeting:"안녕하세요! 오늘도 사막에서 활기찬 하루 보내세요!",farewell:"사막에서 멋진 하루 되세요!",baseTitle:"🏜️ 사막 오아시스",baseWelcome:"사막여우 비서의 오아시스에 오신 것을 환영해요!",liveView:"🦊 사막 라이브 뷰",liveViewDescription:"우리 사막여우가 오아시스에서 무엇을 하고 있는지 확인해보세요! 🌵",quickActions:"사막 퀵 액션",activeProjects:"진행 중인 모험",projectStats:"모험 통계",animalSaying:"사막여우가 말하길",temperatureMoods:{cold:"🧊 사막에 너무 춥네요",cool:"🌤️ 시원한 사막이 좋아요",mild:"☀️ 완벽한 사막 날씨에요!",warm:"🌵 따뜻한 사막이 최고에요",hot:"🔥 뜨거운 사막도 문제없어요!"},projectType:"모험",projectCreate:"새로운 모험 시작하기",projectManage:"모험 관리하기"},ui:{background:{primary:"#FFF3E0",secondary:"#FFCC02",pattern:`url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='sand' patternUnits='userSpaceOnUse' width='20' height='20'%3E%3Crect width='20' height='20' fill='%23FFF3E0'/%3E%3Crect x='10' y='10' width='10' height='10' fill='%23FFCC02'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23sand)'/%3E%3C/svg%3E")`,gradient:"radial-gradient(circle at 30% 70%, #FFF3E0 0%, #FFCC02 40%, #FF8F00 100%)"},border:{color:"#FF8F00",shadow:"inset 0 0 20px rgba(255, 143, 0, 0.3)"},path:{color:"rgba(255, 143, 0, 0.3)",opacity:.5}},game:{blocks:{emoji:"🔺",type:"피라미드 블록",collectName:"피라미드 블록 수집"},building:{name:"피라미드",description:"웅장한 사막 피라미드",completionMessage:"멋진 피라미드가 완성되었어요! 🏜️🔺"},collectInterval:30,maxBlocks:25,progressPerBlock:4},animation:{animal:{speed:.5,radius:35,bounceHeight:.1},blocks:{popDuration:"0.3s",arrangement:"pyramid",spacing:{horizontal:20,vertical:15}}}},kT={id:"sheep",name:"메에",emoji:"🐑",description:"평화로운 목초지와 푸른 언덕",colors:{light:{primary:"#4CAF50",primaryLight:"#81C784",primaryDark:"#388E3C",secondary:"#8BC34A",secondaryLight:"#AED581",secondaryDark:"#689F38",background:"#F1F8E9",paper:"#FFFFFF",info:"#2196F3",success:"#4CAF50",warning:"#FF9800",error:"#F44336"},dark:{primary:"#81C784",primaryLight:"#AED581",primaryDark:"#4CAF50",secondary:"#AED581",secondaryLight:"#C5E1A5",secondaryDark:"#8BC34A",background:"#0D1B0F",paper:"#1B2E1D",info:"#2196F3",success:"#4CAF50",warning:"#FF9800",error:"#F44336"}},concepts:{loading:"양이 목초지를 준비하는 중이에요...",welcome:"평화로운 목초지에 온 것을 환영해요!",appName:"양 비서",appDescription:"푸른 목초지에서 평온한 도움을 드리는 양 비서입니다",environment:"평화로운 푸른 목초지 🌱",animal:"양",greeting:"안녕하세요! 오늘도 목초지에서 평온한 하루 보내세요!",farewell:"목초지에서 평화로운 하루 되세요!",baseTitle:"🌱 목초지 농장",baseWelcome:"양 비서의 목초지에 오신 것을 환영해요!",liveView:"🐑 목초지 라이브 뷰",liveViewDescription:"우리 양이 목초지에서 무엇을 하고 있는지 확인해보세요! 🌱",quickActions:"목초지 퀵 액션",activeProjects:"진행 중인 목장일",projectStats:"목장일 통계",animalSaying:"양이 말하길",temperatureMoods:{cold:"❄️ 목초지가 시원하고 좋아요",cool:"🍃 시원한 바람이 상쾌해요",mild:"🌿 완벽한 목초지 날씨에요!",warm:"☀️ 따뜻한 햇살이 좋아요",hot:"🌞 그늘에서 쉬어가야겠어요!"},projectType:"목장일",projectCreate:"새로운 목장일 시작하기",projectManage:"목장일 관리하기"},ui:{background:{primary:"#F1F8E9",secondary:"#C8E6C9",pattern:`url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grass' patternUnits='userSpaceOnUse' width='20' height='20'%3E%3Crect width='20' height='20' fill='%23F1F8E9'/%3E%3Cpath d='M0,20 Q5,10 10,20 Q15,10 20,20' stroke='%23C8E6C9' stroke-width='1' fill='none'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grass)'/%3E%3C/svg%3E")`,gradient:"radial-gradient(circle at 30% 70%, #F1F8E9 0%, #C8E6C9 40%, #4CAF50 100%)"},border:{color:"#4CAF50",shadow:"inset 0 0 20px rgba(76, 175, 80, 0.3)"},path:{color:"rgba(76, 175, 80, 0.4)",opacity:.6}},game:{blocks:{emoji:"🌾",type:"건초 더미",collectName:"건초 더미 수집"},building:{name:"목장 헛간",description:"아늑한 목장 헛간",completionMessage:"멋진 목장 헛간이 완성되었어요! 🌾🏠"},collectInterval:35,maxBlocks:25,progressPerBlock:4},animation:{animal:{speed:.3,radius:30,bounceHeight:.05},blocks:{popDuration:"0.4s",arrangement:"tower",spacing:{horizontal:18,vertical:12}}}},DT={id:"cat",name:"그르릉",emoji:"🐱",description:"아늑한 집과 도시 생활의 편안함",colors:{light:{primary:"#FF7043",primaryLight:"#FF8A65",primaryDark:"#F4511E",secondary:"#FFC107",secondaryLight:"#FFEB3B",secondaryDark:"#FFA000",background:"#FFF8E1",paper:"#FFFFFF",info:"#2196F3",success:"#4CAF50",warning:"#FF9800",error:"#F44336"},dark:{primary:"#FF8A65",primaryLight:"#FFAB91",primaryDark:"#FF5722",secondary:"#FFCC02",secondaryLight:"#FFEB3B",secondaryDark:"#FFC107",background:"#1F1611",paper:"#2D2419",info:"#2196F3",success:"#4CAF50",warning:"#FF9800",error:"#F44336"}},concepts:{loading:"고양이가 집을 준비하는 중이에요...",welcome:"아늑한 집에 온 것을 환영해요!",appName:"고양이 비서",appDescription:"따뜻한 집에서 편안한 도움을 드리는 고양이 비서입니다",environment:"아늑한 따뜻한 집 🏠",animal:"고양이",greeting:"안녕하세요! 오늘도 집에서 편안한 하루 보내세요!",farewell:"집에서 포근한 하루 되세요!",baseTitle:"🏠 아늑한 집",baseWelcome:"고양이 비서의 집에 오신 것을 환영해요!",liveView:"🐱 고양이 집 라이브",liveViewDescription:"우리 고양이가 집에서 무엇을 하고 있는지 확인해보세요! 🐾",quickActions:"집 퀵 액션",activeProjects:"진행 중인 집안일",projectStats:"집안일 통계",animalSaying:"고양이가 말하길",temperatureMoods:{cold:"🐾 집이 따뜻해서 좋아요",cool:"🐟 시원한 집이 편안해요",mild:"🧶 완벽한 실내 온도에요!",warm:"☀️ 햇볕 드는 창가가 좋아요",hot:"🌞 시원한 곳을 찾아야겠어요!"},projectType:"집안일",projectCreate:"새로운 집안일 시작하기",projectManage:"집안일 관리하기"},ui:{background:{primary:"#FFF8E1",secondary:"#FFCC02",pattern:`url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='home' patternUnits='userSpaceOnUse' width='20' height='20'%3E%3Crect width='20' height='20' fill='%23FFF8E1'/%3E%3Ccircle cx='5' cy='5' r='2' fill='%23FFCC02'/%3E%3Ccircle cx='15' cy='15' r='2' fill='%23FFCC02'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23home)'/%3E%3C/svg%3E")`,gradient:"radial-gradient(circle at 50% 30%, #FFF8E1 0%, #FFCC02 40%, #FF7043 100%)"},border:{color:"#FF7043",shadow:"inset 0 0 20px rgba(255, 112, 67, 0.3)"},path:{color:"rgba(255, 112, 67, 0.4)",opacity:.5}},game:{blocks:{emoji:"🧶",type:"실뭉치",collectName:"실뭉치 수집"},building:{name:"캣타워",description:"높고 멋진 캣타워",completionMessage:"멋진 캣타워가 완성되었어요! 🐱🗼"},collectInterval:25,maxBlocks:25,progressPerBlock:4},animation:{animal:{speed:.7,radius:40,bounceHeight:.2},blocks:{popDuration:"0.2s",arrangement:"tower",spacing:{horizontal:15,vertical:18}}}},VT={penguin:Sp,"desert-fox":PT,sheep:kT,cat:DT},$c=n=>VT[n]||Sp,NT=(n,e)=>{const t=$c(n),r=e==="auto"?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;return t.colors[r]},TS=n=>(n==null?void 0:n.ui)||RT,SS=n=>(n==null?void 0:n.game)||xT,AS=n=>(n==null?void 0:n.animation)||CT,Xe=()=>`${Date.now()}-${Math.random().toString(36).substr(2,9)}`,ta=()=>[{id:Xe(),title:"📝 할일 만들기 기능 테스트",description:"새로운 할일을 추가하고 관리하는 기능을 테스트해보세요!",completed:!1,priority:"high",dueDate:W().add(2,"day").toISOString(),tags:["기능","테스트"],epicId:"epic-1",projectId:"project-1",createdAt:W().subtract(1,"day").toISOString(),updatedAt:W().subtract(1,"day").toISOString()},{id:Xe(),title:"✅ 완료된 할일 확인하기",description:"할일 완료 기능이 잘 동작하는지 확인해보세요!",completed:!0,priority:"medium",dueDate:W().subtract(1,"day").toISOString(),tags:["완료","확인"],epicId:"epic-1",projectId:"project-1",createdAt:W().subtract(3,"day").toISOString(),updatedAt:W().subtract(1,"day").toISOString(),completedAt:W().subtract(1,"day").toISOString()},{id:Xe(),title:"🚨 긴급 할일 처리하기",description:"우선순위 기능을 테스트하기 위한 긴급 할일입니다!",completed:!1,priority:"urgent",dueDate:W().add(1,"day").toISOString(),tags:["긴급","우선순위"],epicId:"epic-2",projectId:"project-2",createdAt:W().subtract(2,"day").toISOString(),updatedAt:W().subtract(2,"day").toISOString()},{id:Xe(),title:"🐑 목장일 현황 확인하기",description:"대시보드에서 할일 현황을 확인하는 기능을 테스트해보세요!",completed:!1,priority:"low",dueDate:W().add(3,"day").toISOString(),tags:["대시보드","현황"],epicId:"epic-1",projectId:"project-1",createdAt:W().subtract(1,"hour").toISOString(),updatedAt:W().subtract(1,"hour").toISOString()}],na=()=>[{id:"epic-1",title:"🎯 에픽 만들기 프로젝트",description:"에픽을 생성하고 관리하는 전체적인 기능을 구현해보세요!",status:"active",priority:"high",startDate:W().subtract(1,"week").toISOString(),dueDate:W().add(2,"month").toISOString(),progress:35,projects:[],color:"#FF6B6B",emoji:"🎯",tags:["에픽","기획"],createdAt:W().subtract(1,"week").toISOString(),updatedAt:W().toISOString()},{id:"epic-2",title:"🔧 시스템 개선하기",description:"전체적인 시스템 성능과 사용성을 개선하는 에픽입니다!",status:"planning",priority:"medium",startDate:W().add(1,"week").toISOString(),dueDate:W().add(3,"month").toISOString(),progress:10,projects:[],color:"#4ECDC4",emoji:"🔧",tags:["개선","시스템"],createdAt:W().subtract(3,"day").toISOString(),updatedAt:W().toISOString()}],ra=()=>[{id:"project-1",title:"📋 프로젝트 만들기 기능",description:"새로운 프로젝트를 생성하고 관리하는 기능을 구현해보세요!",status:"active",priority:"high",startDate:W().subtract(5,"day").toISOString(),dueDate:W().add(1,"month").toISOString(),progress:45,tasks:[],tags:["프로젝트","기능"],epicId:"epic-1",createdAt:W().subtract(5,"day").toISOString(),updatedAt:W().toISOString()},{id:"project-2",title:"⚡ 성능 최적화하기",description:"애플리케이션의 전반적인 성능을 개선하는 프로젝트입니다!",status:"active",priority:"high",startDate:W().subtract(3,"day").toISOString(),dueDate:W().add(6,"week").toISOString(),progress:25,tasks:[],tags:["성능","최적화"],epicId:"epic-2",createdAt:W().subtract(3,"day").toISOString(),updatedAt:W().toISOString()}],Ap=V.createContext(void 0),OT=({children:n})=>{const[e,t]=V.useState([]),[r,s]=V.useState([]),[i,a]=V.useState([]),[c,u]=V.useState([]),[h,f]=V.useState([]),[m,y]=V.useState([]),w={todos:"todos",epics:"epics",projects:"projects"},P=async()=>{try{const M=Fe();if(M){const k=await In(M.uid,"epics");k.success&&k.data&&(console.log("🔥 TodoContext: Firebase 에픽 로드 성공:",k.data),y(k.data));const j=await In(M.uid,"projects");j.success&&j.data&&(console.log("🔥 TodoContext: Firebase 프로젝트 로드 성공:",j.data),u(j.data));const F=await In(M.uid,"projectTodos");F.success&&F.data&&(console.log("🔥 TodoContext: Firebase 할일 로드 성공:",F.data),f(F.data))}}catch(M){console.error("❌ TodoContext: Firebase 데이터 로드 실패:",M)}},x=()=>{const M=[];return Array.isArray(m)&&m.forEach(k=>{M.push({id:k.id||Xe(),title:k.title,description:k.description||"",status:k.status||"active",priority:k.priority||"medium",startDate:k.startDate,dueDate:k.dueDate,progress:k.progress||0,projects:k.projects||[],color:k.color||"#3b82f6",emoji:k.emoji,tags:k.tags||[],createdAt:k.createdAt||W().toISOString(),updatedAt:k.updatedAt||W().toISOString()})}),r.forEach(k=>{M.find(j=>j.title===k.title)||M.push(k)}),M},T=()=>{const M=[];return Array.isArray(c)&&c.forEach(k=>{M.push({id:k.id||Xe(),title:k.title,description:k.description||"",status:k.status||"active",priority:k.priority||"medium",startDate:k.startDate,dueDate:k.dueDate,progress:k.progress||0,tasks:k.tasks||[],tags:k.tags||[],createdAt:k.createdAt||W().toISOString(),updatedAt:k.updatedAt||W().toISOString()})}),i.forEach(k=>{M.find(j=>j.title===k.title)||M.push(k)}),M},L=()=>{const M=[];return Array.isArray(h)&&h.forEach(k=>{M.push({id:k.id||Xe(),title:k.title,description:k.description||"",completed:k.completed||!1,priority:k.priority||"medium",dueDate:k.dueDate,tags:k.tags||[],projectId:k.projectId,createdAt:k.createdAt||W().toISOString(),updatedAt:k.updatedAt||W().toISOString()})}),e.forEach(k=>{M.find(j=>j.title===k.title)||M.push(k)}),M},U=async()=>{try{const M=Fe();if(!M)return{success:!1,message:"로그인이 필요합니다"};console.log("🚀 로컬 데이터 → 파이어베이스 마이그레이션 시작");const k=JSON.parse(localStorage.getItem(w.epics)||"[]"),j=JSON.parse(localStorage.getItem(w.projects)||"[]"),F=JSON.parse(localStorage.getItem(w.todos)||"[]");await P();const D={epics:Array.isArray(m)&&m.length>0,projects:Array.isArray(c)&&c.length>0,todos:Array.isArray(h)&&h.length>0};if(D.epics||D.projects||D.todos){const rt={epics:(m==null?void 0:m.length)||0,projects:(c==null?void 0:c.length)||0,todos:(h==null?void 0:h.length)||0},mo=`⚠️ 주의: Firebase에 기존 데이터가 있습니다!

Firebase 기존 데이터:
- 에픽: ${rt.epics}개
- 프로젝트: ${rt.projects}개
- 할일: ${rt.todos}개

로컬 데이터:
- 에픽: ${k.length}개
- 프로젝트: ${j.length}개
- 할일: ${F.length}개

계속하면 Firebase 데이터가 로컬 데이터로 덮어쓰여집니다.
정말 진행하시겠습니까?`;if(!confirm(mo))return{success:!1,message:"❌ 사용자가 마이그레이션을 취소했습니다."};const It=new Date().toISOString().replace(/[:.]/g,"-");console.log(`📦 Firebase 데이터 백업 생성 중... (${It})`),D.epics&&await me(M.uid,`epics_backup_${It}`,m),D.projects&&await me(M.uid,`projects_backup_${It}`,c),D.todos&&await me(M.uid,`projectTodos_backup_${It}`,h),console.log("✅ Firebase 데이터 백업 완료")}console.log("📊 마이그레이션할 데이터:",{epics:k.length,projects:j.length,todos:F.length});const ne={epics:{success:!1,count:0},projects:{success:!1,count:0},todos:{success:!1,count:0}};if(k.length>0){const rt=await me(M.uid,"epics",k);ne.epics={success:rt.success,count:k.length},console.log("✅ 에픽 마이그레이션:",ne.epics)}if(j.length>0){const rt=await me(M.uid,"projects",j);ne.projects={success:rt.success,count:j.length},console.log("✅ 프로젝트 마이그레이션:",ne.projects)}if(F.length>0){const rt=await me(M.uid,"projectTodos",F);ne.todos={success:rt.success,count:F.length},console.log("✅ 할일 마이그레이션:",ne.todos)}await P();const po=ne.epics.count+ne.projects.count+ne.todos.count,dn=D.epics||D.projects||D.todos?" 기존 Firebase 데이터는 백업되었습니다.":"";return{success:!0,message:`🎉 마이그레이션 완료! 총 ${po}개 항목이 파이어베이스로 이동되었습니다.${dn}`,details:ne}}catch(M){return console.error("❌ 마이그레이션 실패:",M),{success:!1,message:`마이그레이션 중 오류가 발생했습니다: ${M}`}}},z=async M=>{try{const k=Fe();if(!k)return{success:!1,message:"로그인이 필요합니다"};console.log(`🔄 Firebase 백업 데이터 복구 시작: ${M}`);const j={epics:{success:!1,count:0},projects:{success:!1,count:0},todos:{success:!1,count:0}};try{const D=await In(k.uid,`epics_backup_${M}`);if(D.success&&D.data){const ne=await me(k.uid,"epics",D.data);j.epics={success:ne.success,count:D.data.length}}}catch(D){console.log("에픽 백업 데이터 없음 또는 복구 실패:",D)}try{const D=await In(k.uid,`projects_backup_${M}`);if(D.success&&D.data){const ne=await me(k.uid,"projects",D.data);j.projects={success:ne.success,count:D.data.length}}}catch(D){console.log("프로젝트 백업 데이터 없음 또는 복구 실패:",D)}try{const D=await In(k.uid,`projectTodos_backup_${M}`);if(D.success&&D.data){const ne=await me(k.uid,"projectTodos",D.data);j.todos={success:ne.success,count:D.data.length}}}catch(D){console.log("할일 백업 데이터 없음 또는 복구 실패:",D)}await P();const F=j.epics.count+j.projects.count+j.todos.count;return F>0?{success:!0,message:`🔄 백업 복구 완료! 총 ${F}개 항목이 복구되었습니다.`,details:j}:{success:!1,message:`❌ 백업 데이터를 찾을 수 없습니다: ${M}`}}catch(k){return console.error("❌ 백업 복구 실패:",k),{success:!1,message:`백업 복구 중 오류가 발생했습니다: ${k}`}}},G=()=>{const M=W("2025-08-08");return W().isBefore(M)},ce=()=>{const M=JSON.parse(localStorage.getItem(w.epics)||"[]"),k=JSON.parse(localStorage.getItem(w.projects)||"[]"),j=JSON.parse(localStorage.getItem(w.todos)||"[]");return{hasData:M.length>0||k.length>0||j.length>0,epicsCount:M.length,projectsCount:k.length,todosCount:j.length}},de=async()=>{try{if(!Fe())return{success:!1,message:"로그인이 필요합니다"};console.log("🔄 파이어베이스 → 로컬 동기화 시작"),await P();const k={epics:{success:!1,count:0},projects:{success:!1,count:0},todos:{success:!1,count:0}};if(Array.isArray(m)&&m.length>0){const F=m.map(D=>({id:D.id||Xe(),title:D.title,description:D.description||"",status:D.status||"active",priority:D.priority||"medium",startDate:D.startDate,dueDate:D.dueDate,progress:D.progress||0,projects:D.projects||[],color:D.color||"#3b82f6",emoji:D.emoji,tags:D.tags||[],createdAt:D.createdAt||W().toISOString(),updatedAt:D.updatedAt||W().toISOString()}));s(F),k.epics={success:!0,count:F.length},console.log("✅ 에픽 동기화:",k.epics)}if(Array.isArray(c)&&c.length>0){const F=c.map(D=>({id:D.id||Xe(),title:D.title,description:D.description||"",status:D.status||"active",priority:D.priority||"medium",startDate:D.startDate,dueDate:D.dueDate,progress:D.progress||0,tasks:D.tasks||[],tags:D.tags||[],createdAt:D.createdAt||W().toISOString(),updatedAt:D.updatedAt||W().toISOString()}));a(F),k.projects={success:!0,count:F.length},console.log("✅ 프로젝트 동기화:",k.projects)}if(Array.isArray(h)&&h.length>0){const F=h.map(D=>({id:D.id||Xe(),title:D.title,description:D.description||"",completed:D.completed||!1,priority:D.priority||"medium",dueDate:D.dueDate,tags:D.tags||[],projectId:D.projectId,createdAt:D.createdAt||W().toISOString(),updatedAt:D.updatedAt||W().toISOString()}));t(F),k.todos={success:!0,count:F.length},console.log("✅ 할일 동기화:",k.todos)}const j=k.epics.count+k.projects.count+k.todos.count;return{success:!0,message:j>0?`🔄 동기화 완료! 파이어베이스에서 총 ${j}개 항목을 가져왔습니다.`:"📭 파이어베이스에 동기화할 데이터가 없습니다.",details:k}}catch(M){return console.error("❌ 동기화 실패:",M),{success:!1,message:`동기화 중 오류가 발생했습니다: ${M}`}}};V.useEffect(()=>{try{const M=localStorage.getItem(w.todos),k=localStorage.getItem(w.epics),j=localStorage.getItem(w.projects);if(M){const F=JSON.parse(M);if(Array.isArray(F)&&F.length>0)t(F);else{const D=ta();t(D),localStorage.setItem(w.todos,JSON.stringify(D))}}else{const F=ta();t(F),localStorage.setItem(w.todos,JSON.stringify(F))}if(k){const F=JSON.parse(k);if(Array.isArray(F)&&F.length>0)s(F);else{const D=na();s(D),localStorage.setItem(w.epics,JSON.stringify(D))}}else{const F=na();s(F),localStorage.setItem(w.epics,JSON.stringify(F))}if(j){const F=JSON.parse(j);if(Array.isArray(F)&&F.length>0)a(F);else{const D=ra();a(D),localStorage.setItem(w.projects,JSON.stringify(D))}}else{const F=ra();a(F),localStorage.setItem(w.projects,JSON.stringify(F))}}catch(M){console.error("데이터 로드 실패:",M),t(ta()),s(na()),a(ra())}},[]),V.useEffect(()=>{P()},[]),V.useEffect(()=>{localStorage.setItem(w.todos,JSON.stringify(e))},[e]),V.useEffect(()=>{localStorage.setItem(w.epics,JSON.stringify(r))},[r]),V.useEffect(()=>{localStorage.setItem(w.projects,JSON.stringify(i))},[i]);const A=async M=>{const k={...M,id:Xe(),createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},j=[...e,k];t(j);try{const F=Fe();F&&(await me(F.uid,"projectTodos",j),console.log("✅ Todo Firebase 저장 완료:",k.title))}catch(F){console.error("❌ Todo Firebase 저장 실패:",F)}},_=async M=>{const k=e.map(j=>j.id===M.id?{...M,updatedAt:new Date().toISOString()}:j);t(k);try{const j=Fe();j&&(await me(j.uid,"projectTodos",k),console.log("✅ Todo 업데이트 Firebase 저장 완료:",M.title))}catch(j){console.error("❌ Todo 업데이트 Firebase 저장 실패:",j)}},I=async M=>{const k=e.filter(j=>j.id!==M);t(k);try{const j=Fe();j&&(await me(j.uid,"projectTodos",k),console.log("✅ Todo 삭제 Firebase 저장 완료"))}catch(j){console.error("❌ Todo 삭제 Firebase 저장 실패:",j)}},E=async M=>{const k=e.map(j=>j.id===M?{...j,completed:!j.completed,completedAt:j.completed?void 0:new Date().toISOString(),updatedAt:new Date().toISOString()}:j);t(k);try{const j=Fe();j&&(await me(j.uid,"projectTodos",k),console.log("✅ Todo 완료 토글 Firebase 저장 완료"))}catch(j){console.error("❌ Todo 완료 토글 Firebase 저장 실패:",j)}},S=async M=>{const k={...M,id:Xe(),projects:[],progress:0,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},j=[...r,k];s(j);try{const F=Fe();F&&(await me(F.uid,"epics",j),console.log("✅ Epic Firebase 저장 완료:",k.title))}catch(F){console.error("❌ Epic Firebase 저장 실패:",F)}},b=async M=>{const k=r.map(j=>j.id===M.id?{...M,updatedAt:new Date().toISOString()}:j);s(k);try{const j=Fe();j&&(await me(j.uid,"epics",k),console.log("✅ Epic 업데이트 Firebase 저장 완료:",M.title))}catch(j){console.error("❌ Epic 업데이트 Firebase 저장 실패:",j)}},v=async M=>{const k=r.filter(D=>D.id!==M);s(k);const j=e.map(D=>D.epicId===M?{...D,epicId:void 0,updatedAt:new Date().toISOString()}:D);t(j);const F=i.map(D=>D.epicId===M?{...D,epicId:void 0,updatedAt:new Date().toISOString()}:D);a(F);try{const D=Fe();D&&(await Promise.all([me(D.uid,"epics",k),me(D.uid,"projectTodos",j),me(D.uid,"projects",F)]),console.log("✅ Epic 삭제 Firebase 저장 완료"))}catch(D){console.error("❌ Epic 삭제 Firebase 저장 실패:",D)}},re=async(M,k)=>{const j={...M,id:Xe(),tasks:[],epicId:k||M.epicId,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},F=[...i,j];if(a(F),j.epicId){const D=r.map(ne=>ne.id===j.epicId?{...ne,projects:[...ne.projects,j],updatedAt:new Date().toISOString()}:ne);s(D);try{const ne=Fe();ne&&(await Promise.all([me(ne.uid,"projects",F),me(ne.uid,"epics",D)]),console.log("✅ Project + Epic Firebase 저장 완료:",j.title))}catch(ne){console.error("❌ Project + Epic Firebase 저장 실패:",ne)}}else try{const D=Fe();D&&(await me(D.uid,"projects",F),console.log("✅ Project Firebase 저장 완료:",j.title))}catch(D){console.error("❌ Project Firebase 저장 실패:",D)}},J=async M=>{const k=i.map(F=>F.id===M.id?{...M,updatedAt:new Date().toISOString()}:F);a(k);const j=r.map(F=>({...F,projects:F.projects.map(D=>D.id===M.id?M:D),updatedAt:new Date().toISOString()}));s(j);try{const F=Fe();F&&(await Promise.all([me(F.uid,"projects",k),me(F.uid,"epics",j)]),console.log("✅ Project 업데이트 Firebase 저장 완료:",M.title))}catch(F){console.error("❌ Project 업데이트 Firebase 저장 실패:",F)}},Pe=async M=>{const k=i.filter(D=>D.id!==M);a(k);const j=r.map(D=>({...D,projects:D.projects.filter(ne=>ne.id!==M),updatedAt:new Date().toISOString()}));s(j);const F=e.map(D=>D.projectId===M?{...D,projectId:void 0,updatedAt:new Date().toISOString()}:D);t(F);try{const D=Fe();D&&(await Promise.all([me(D.uid,"projects",k),me(D.uid,"epics",j),me(D.uid,"projectTodos",F)]),console.log("✅ Project 삭제 Firebase 저장 완료"))}catch(D){console.error("❌ Project 삭제 Firebase 저장 실패:",D)}},fe=M=>x().find(k=>k.id===M),nt=M=>T().find(k=>k.id===M),hn={todos:L(),epics:x(),projects:T(),addTodo:A,updateTodo:_,deleteTodo:I,toggleTodoComplete:E,addEpic:S,updateEpic:b,deleteEpic:v,addProject:re,updateProject:J,deleteProject:Pe,getEpicById:fe,getProjectById:nt,getTodosByProjectId:M=>L().filter(k=>k.projectId===M),getTodosByEpicId:M=>L().filter(k=>k.epicId===M),getProjectsByEpicId:M=>T().filter(k=>k.epicId===M),refreshFirebaseData:P,syncFirebaseToLocal:de,migrateLocalDataToFirebase:U,isMigrationButtonActive:G,checkLocalDataForMigration:ce,restoreFirebaseBackup:z};return p.jsx(Ap.Provider,{value:hn,children:n})},bS=()=>{const n=V.useContext(Ap);if(n===void 0)throw new Error("useTodo must be used within a TodoProvider");return n},MT=()=>{const n=localStorage.getItem("todos"),e=localStorage.getItem("epics"),t=localStorage.getItem("projects"),r={todos:n?JSON.parse(n):[],epics:e?JSON.parse(e):[],projects:t?JSON.parse(t):[],timestamp:new Date().toISOString()};return localStorage.setItem("data_backup",JSON.stringify(r)),console.log("데이터 백업 완료:",r),r},jT=()=>{const n=localStorage.getItem("data_backup");if(n){const e=JSON.parse(n);return localStorage.setItem("todos",JSON.stringify(e.todos)),localStorage.setItem("epics",JSON.stringify(e.epics)),localStorage.setItem("projects",JSON.stringify(e.projects)),console.log("데이터 복구 완료:",e),e}return null},bp=()=>{const n=localStorage.getItem("todos"),e=localStorage.getItem("epics"),t=localStorage.getItem("projects");return{todos:n?JSON.parse(n):[],epics:e?JSON.parse(e):[],projects:t?JSON.parse(t):[]}},LT=()=>{localStorage.removeItem("todos"),localStorage.removeItem("epics"),localStorage.removeItem("projects"),console.log("모든 데이터 삭제 완료")},FT=()=>{const n={id:"basic-epic-1",title:"🎯 개인 프로젝트",description:"개인적인 목표와 프로젝트를 관리하는 에픽입니다",status:"active",priority:"high",startDate:W().toISOString(),dueDate:W().add(3,"month").toISOString(),progress:10,projects:[],color:"#FF6B6B",emoji:"🎯",tags:["개인","목표"],createdAt:W().toISOString(),updatedAt:W().toISOString()},e={id:"basic-project-1",title:"📋 일상 관리",description:"일상적인 할일들을 관리하는 프로젝트입니다",status:"active",priority:"medium",startDate:W().toISOString(),dueDate:W().add(1,"month").toISOString(),progress:0,tasks:[],tags:["일상","관리"],epicId:"basic-epic-1",createdAt:W().toISOString(),updatedAt:W().toISOString()},t={id:"basic-todo-1",title:"📝 할일 관리 시스템 설정하기",description:"개인 할일 관리 시스템을 제대로 설정해보세요",completed:!1,priority:"medium",dueDate:W().add(1,"week").toISOString(),tags:["설정","시작"],epicId:"basic-epic-1",projectId:"basic-project-1",createdAt:W().toISOString(),updatedAt:W().toISOString()};return{epics:[n],projects:[e],todos:[t]}},UT=()=>{const n=bp(),e=n.todos.some(t=>t.title.includes("테스트")||t.title.includes("샘플"));if(n.todos.length===0||e){const t=FT();return localStorage.setItem("todos",JSON.stringify(t.todos)),localStorage.setItem("epics",JSON.stringify(t.epics)),localStorage.setItem("projects",JSON.stringify(t.projects)),console.log("기본 사용자 데이터로 복구 완료"),t}return n};typeof window<"u"&&(window.dataRecovery={backup:MT,restore:jT,current:bp,clear:LT,recover:UT});const BT=V.lazy(()=>vt(()=>import("./Dashboard-8d0025bf.js").then(n=>n.D),["assets/Dashboard-8d0025bf.js","assets/mui-2bb62da7.js","assets/dayjs-9d6a636c.js"])),$T=V.lazy(()=>vt(()=>import("./ConditionTracker-989e28ef.js"),["assets/ConditionTracker-989e28ef.js","assets/mui-2bb62da7.js","assets/dayjs-9d6a636c.js"])),zT=V.lazy(()=>vt(()=>import("./ProjectManager-2f3939c6.js"),["assets/ProjectManager-2f3939c6.js","assets/mui-2bb62da7.js","assets/dayjs-9d6a636c.js"])),qT=V.lazy(()=>vt(()=>import("./TodoManager-69817c91.js"),["assets/TodoManager-69817c91.js","assets/mui-2bb62da7.js","assets/dayjs-9d6a636c.js"])),WT=V.lazy(()=>vt(()=>import("./Chat-9311e86a.js"),["assets/Chat-9311e86a.js","assets/mui-2bb62da7.js","assets/dayjs-9d6a636c.js","assets/presence-5edbe608.js"])),HT=V.lazy(()=>vt(()=>import("./Analytics-17f7e792.js"),["assets/Analytics-17f7e792.js","assets/mui-2bb62da7.js","assets/dayjs-9d6a636c.js"])),GT=V.lazy(()=>vt(()=>import("./Profile-6e8401bd.js"),["assets/Profile-6e8401bd.js","assets/mui-2bb62da7.js","assets/dayjs-9d6a636c.js"])),KT=V.lazy(()=>vt(()=>import("./Settings-4e5daa2c.js"),["assets/Settings-4e5daa2c.js","assets/mui-2bb62da7.js","assets/dayjs-9d6a636c.js"])),QT=V.lazy(()=>vt(()=>import("./AdminPanel-bfc62ef8.js"),["assets/AdminPanel-bfc62ef8.js","assets/mui-2bb62da7.js","assets/dayjs-9d6a636c.js","assets/presence-5edbe608.js"])),JT=V.lazy(()=>vt(()=>import("./Pomodoro-5d2eb701.js"),["assets/Pomodoro-5d2eb701.js","assets/mui-2bb62da7.js","assets/dayjs-9d6a636c.js"])),YT=n=>{var m,y,w,P,x,T,L,U,z,G,ce,de;const{type:e,mode:t}=n,r=$c(e),s=NT(e,t),i=t==="auto"?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":t,a=((y=(m=r.ui)==null?void 0:m.background)==null?void 0:y.primary)??s.background,c=((P=(w=r.ui)==null?void 0:w.background)==null?void 0:P.secondary)??s.paper,u=((T=(x=r.ui)==null?void 0:x.background)==null?void 0:T.pattern)??"",h=((U=(L=r.ui)==null?void 0:L.background)==null?void 0:U.gradient)??"",f=((G=(z=r.ui)==null?void 0:z.border)==null?void 0:G.color)??s.primary;return(de=(ce=r.ui)==null?void 0:ce.border)==null||de.shadow,Ym({palette:{mode:i,primary:{main:s.primary,light:s.primaryLight,dark:s.primaryDark},secondary:{main:s.secondary,light:s.secondaryLight,dark:s.secondaryDark},background:{default:s.background,paper:s.paper},info:{main:s.info},success:{main:s.success},warning:{main:s.warning},error:{main:s.error}},typography:{fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif"].join(","),h1:{fontWeight:700},h2:{fontWeight:600},h3:{fontWeight:600},button:{fontWeight:600},subtitle1:{fontWeight:600}},shape:{borderRadius:8},components:{MuiCssBaseline:{styleOverrides:{"html, body, #root":{height:"100%"},body:{backgroundColor:a,backgroundImage:u&&h?`${u}, ${h}`:u||h||void 0,backgroundAttachment:"fixed",backgroundSize:"cover"},"*":{scrollbarColor:`${We(s.primary,.5)} transparent`,scrollbarWidth:"thin"},"*::-webkit-scrollbar":{width:10,height:10},"*::-webkit-scrollbar-thumb":{backgroundColor:We(s.primary,.35),borderRadius:999,border:`2px solid ${We(s.background,.6)}`},"*::-webkit-scrollbar-track":{backgroundColor:We(s.background,.4)}}},MuiButton:{defaultProps:{disableElevation:!0},styleOverrides:{root:{textTransform:"none",borderRadius:8,fontWeight:600},contained:{boxShadow:"none"},sizeSmall:{borderRadius:6},sizeLarge:{borderRadius:10}}},MuiCard:{styleOverrides:{root:{borderRadius:8,boxShadow:i==="light"?"0 6px 18px rgba(0,0,0,0.08)":"0 6px 18px rgba(0,0,0,0.32)",border:`1px solid ${We(f,.15)}`}}},MuiPaper:{styleOverrides:{root:{borderRadius:8,backgroundImage:"none"},outlined:{borderColor:We(f,.2)}}},MuiTextField:{defaultProps:{variant:"outlined",size:"small"}},MuiInputBase:{styleOverrides:{root:{borderRadius:8,backgroundColor:i==="light"?We(c,.5):We("#000",.1)}}},MuiAppBar:{defaultProps:{color:"default",elevation:0},styleOverrides:{root:{backgroundColor:We(c,.9),backdropFilter:"saturate(180%) blur(8px)",borderBottom:`1px solid ${We(f,.18)}`}}},MuiToolbar:{styleOverrides:{regular:{minHeight:64}}},MuiDrawer:{styleOverrides:{paper:{borderRight:`1px solid ${We(f,.18)}`,backgroundColor:We(c,.92),backgroundImage:"none"}}},MuiListItemButton:{styleOverrides:{root:{borderRadius:8,margin:2,"&.Mui-selected":{backgroundColor:We(s.primary,.12),"&:hover":{backgroundColor:We(s.primary,.18)}}}}},MuiDialog:{styleOverrides:{paper:{borderRadius:12,border:`1px solid ${We(f,.12)}`}}},MuiTooltip:{defaultProps:{arrow:!0}},MuiChip:{styleOverrides:{root:{borderRadius:8}}},MuiIconButton:{styleOverrides:{root:{borderRadius:8}}},MuiTabs:{styleOverrides:{indicator:{height:3,borderRadius:3}}},MuiTab:{styleOverrides:{root:{textTransform:"none",fontWeight:600,minHeight:44}}},MuiLinearProgress:{styleOverrides:{root:{borderRadius:999,overflow:"hidden"}}},MuiCircularProgress:{defaultProps:{thickness:5}}}})};function XT(){const[n,e]=V.useState(null),[t,r]=V.useState(!0),[s,i]=V.useState(null),[a,c]=V.useState(null),[u,h]=V.useState({type:"penguin",mode:"light"}),[f,m]=V.useState({show:!1,message:""}),[y,w]=V.useState({isActive:!1,message:"",loading:!0}),P=L=>{const U={...u,...L};h(U),window.electronAPI?window.electronAPI.saveData("theme",U):localStorage.setItem("theme",JSON.stringify(U))};V.useEffect(()=>{(async()=>{try{if(window.electronAPI){const ce=await window.electronAPI.loadData("theme");if(ce.success&&ce.data){h(ce.data),console.log("Electron에서 테마 로드:",ce.data);return}}const G=localStorage.getItem("theme");if(G){const ce=JSON.parse(G);h(ce),console.log("localStorage에서 테마 로드:",ce)}else console.log("저장된 테마가 없어서 기본값 사용")}catch(G){console.error("테마 로드 실패:",G)}})();const U=window.matchMedia("(prefers-color-scheme: dark)"),z=async()=>{try{u.mode==="auto"&&h(G=>({...G}))}catch(G){console.error("시스템 테마 변경 감지 실패:",G)}};return U.addEventListener("change",z),()=>U.removeEventListener("change",z)},[u.mode]),V.useEffect(()=>{const L=async()=>{try{const z=await Z0();w({isActive:z.isMaintenanceMode,message:z.message||"시스템 점검 중입니다.",loading:!1})}catch(z){console.error("점검 모드 확인 실패:",z),w({isActive:!1,message:"",loading:!1})}};L();const U=setInterval(L,3e4);return()=>clearInterval(U)},[]),V.useEffect(()=>{const L=G0(async U=>{try{if(e(U),i(null),U){const z=await K0(U.email);if(c(z.status),z.status==="approved")try{const G=await bT(U.email);G.shouldShowNotification&&m({show:!0,message:G.message})}catch(G){console.error("마이그레이션 체크 실패:",G)}}else c(null)}catch(z){console.error("❌ 인증 상태 처리 중 에러:",z),i("인증 처리 중 문제가 발생했습니다. 페이지를 새로고침해주세요.")}finally{r(!1)}});return()=>{L()}},[]);const x=YT(u),T=$c(u.type);return s?p.jsxs(zn,{theme:x,children:[p.jsx(qn,{}),p.jsxs(Q,{sx:{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg, #f44336 0%, #e91e63 100%)",p:3},children:[p.jsx(H,{variant:"h4",color:"white",sx:{mb:2,textAlign:"center"},children:"⚠️ 오류가 발생했습니다"}),p.jsx(H,{variant:"body1",color:"white",sx:{mb:3,textAlign:"center",maxWidth:600},children:s}),p.jsx(Ke,{variant:"contained",color:"secondary",onClick:()=>{i(null),window.location.reload()},sx:{minWidth:200},children:"🔄 페이지 새로고침"})]})]}):t||y.loading?p.jsxs(zn,{theme:x,children:[p.jsx(qn,{}),p.jsxs(Q,{sx:{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"},children:[p.jsx(nr,{size:60,sx:{mb:2}}),p.jsx(H,{variant:"h6",color:"white",children:y.loading?"점검 상태 확인 중...":T.concepts.loading})]})]}):y.isActive&&(!n||!Ri(n.email))?p.jsxs(zn,{theme:x,children:[p.jsx(qn,{}),p.jsx(TT,{message:y.message})]}):n?a==="approved"?p.jsx(Qm,{dateAdapter:Jm,adapterLocale:"ko",children:p.jsxs(zn,{theme:x,children:[p.jsx(qn,{}),p.jsx(OT,{children:p.jsx(uT,{children:p.jsxs(Gg,{future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:[p.jsx(Q,{sx:{height:"100vh",display:"flex"},children:p.jsxs(cT,{user:n,themeConfig:T,children:[p.jsx(V.Suspense,{fallback:p.jsx(Q,{sx:{p:4,display:"flex",alignItems:"center",justifyContent:"center"},children:p.jsx(nr,{})}),children:p.jsxs(qg,{children:[p.jsx(it,{path:"/",element:p.jsx(BT,{themeConfig:T})}),p.jsx(it,{path:"/condition",element:p.jsx($T,{themeConfig:T})}),p.jsx(it,{path:"/analytics",element:p.jsx(HT,{themeConfig:T})}),p.jsx(it,{path:"/projects",element:p.jsx(zT,{themeConfig:T})}),p.jsx(it,{path:"/todos",element:p.jsx(qT,{})}),p.jsx(it,{path:"/pomodoro",element:p.jsx(JT,{themeConfig:T})}),p.jsx(it,{path:"/chat",element:p.jsx(WT,{})}),p.jsx(it,{path:"/profile",element:p.jsx(GT,{themeConfig:T})}),p.jsx(it,{path:"/settings",element:p.jsx(KT,{onThemeChange:P,themeSettings:u})}),Ri(n.email)&&p.jsx(it,{path:"/admin",element:p.jsx(QT,{themeConfig:T})})]})}),p.jsx(fT,{}),p.jsx(ET,{})]})}),p.jsxs(xi,{open:f.show,onClose:()=>m({show:!1,message:""}),maxWidth:"sm",fullWidth:!0,children:[p.jsx(Ci,{children:"📦 프로젝트 정리 알림"}),p.jsxs(Pi,{children:[p.jsx(tr,{severity:"info",sx:{mb:2},children:p.jsx(H,{variant:"body2",sx:{whiteSpace:"pre-line"},children:f.message})}),p.jsx(H,{variant:"body2",color:"text.secondary",children:"프로젝트 관리 페이지에서 임시 보관함을 확인하고 새로운 에픽을 만들어보세요!"})]}),p.jsxs(ki,{children:[p.jsx(Ke,{onClick:()=>m({show:!1,message:""}),children:"확인"}),p.jsx(Ke,{variant:"contained",onClick:()=>{m({show:!1,message:""})},children:"프로젝트 관리로 이동"})]})]})]})})})]})}):p.jsxs(zn,{theme:x,children:[p.jsx(qn,{}),p.jsx(ZT,{user:n,status:a})]}):p.jsxs(zn,{theme:x,children:[p.jsx(qn,{}),p.jsx(lT,{})]})}const ZT=({user:n,status:e})=>{const t=()=>{var r,s,i,a;switch(e){case"pending":return p.jsxs(rr,{sx:{maxWidth:600,width:"100%",p:4,textAlign:"center",boxShadow:"0 8px 32px rgba(0,0,0,0.12)",borderRadius:3,background:"linear-gradient(135deg, rgba(255,193,7,0.1) 0%, rgba(255,152,0,0.1) 100%)",border:"1px solid rgba(255,193,7,0.2)"},children:[p.jsxs(Q,{sx:{mb:3},children:[p.jsx(en,{src:n.photoURL||void 0,sx:{width:80,height:80,mx:"auto",mb:2,boxShadow:"0 4px 20px rgba(0,0,0,0.15)"},children:((r=n.displayName)==null?void 0:r[0])||((s=n.email)==null?void 0:s[0])}),p.jsx(H,{variant:"h4",gutterBottom:!0,sx:{fontWeight:"bold",color:"warning.main"},children:"⏳ 승인 대기 중"})]}),p.jsxs(H,{variant:"h6",sx:{mb:2,color:"text.primary"},children:["안녕하세요, ",p.jsx("strong",{children:n.displayName}),"님! 🐧"]}),p.jsxs(H,{variant:"body1",sx:{mb:3,lineHeight:1.8,color:"text.secondary"},children:["개인 비서 접근 권한 요청이 검토 중입니다.",p.jsx("br",{}),"관리자의 승인을 기다려주세요."]}),p.jsx(Q,{sx:{p:2,bgcolor:"rgba(255,193,7,0.1)",borderRadius:2,border:"1px solid rgba(255,193,7,0.2)",mb:2},children:p.jsx(H,{variant:"body2",color:"warning.dark",sx:{fontWeight:"medium"},children:"💡 승인이 완료되면 자동으로 서비스를 이용하실 수 있습니다."})}),p.jsx(Lh,{sx:{mt:3,height:6,borderRadius:3,backgroundColor:"rgba(255,193,7,0.2)","& .MuiLinearProgress-bar":{backgroundColor:"warning.main"}}})]});case"rejected":return p.jsxs(rr,{sx:{maxWidth:600,width:"100%",p:4,textAlign:"center",boxShadow:"0 8px 32px rgba(0,0,0,0.12)",borderRadius:3,background:"linear-gradient(135deg, rgba(244,67,54,0.1) 0%, rgba(233,30,99,0.1) 100%)",border:"1px solid rgba(244,67,54,0.2)"},children:[p.jsxs(Q,{sx:{mb:3},children:[p.jsx(en,{src:n.photoURL||void 0,sx:{width:80,height:80,mx:"auto",mb:2,boxShadow:"0 4px 20px rgba(0,0,0,0.15)"},children:((i=n.displayName)==null?void 0:i[0])||((a=n.email)==null?void 0:a[0])}),p.jsx(H,{variant:"h4",gutterBottom:!0,sx:{fontWeight:"bold",color:"error.main"},children:"❌ 접근 권한 거부됨"})]}),p.jsxs(H,{variant:"h6",sx:{mb:2,color:"text.primary"},children:["죄송합니다, ",p.jsx("strong",{children:n.displayName}),"님."]}),p.jsxs(H,{variant:"body1",sx:{mb:3,lineHeight:1.8,color:"text.secondary"},children:["개인 비서 접근 권한이 거부되었습니다.",p.jsx("br",{}),"자세한 사항은 관리자에게 문의해주세요."]}),p.jsx(Q,{sx:{p:2,bgcolor:"rgba(244,67,54,0.1)",borderRadius:2,border:"1px solid rgba(244,67,54,0.2)"},children:p.jsx(H,{variant:"body2",color:"error.dark",sx:{fontWeight:"medium"},children:"📧 문의사항이 있으시면 관리자에게 연락해주세요."})})]});case"not_found":default:return p.jsx(eS,{user:n})}};return p.jsx(Q,{sx:{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",p:2},children:p.jsx(Q,{sx:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%",maxWidth:700},children:t()})})},eS=({user:n})=>{var u,h,f,m;const[e,t]=V.useState(""),[r,s]=V.useState(!1),[i,a]=V.useState(!1),c=async y=>{if(y.preventDefault(),!!n.email){s(!0);try{if((await yp({email:n.email,displayName:n.displayName||"이름 없음",photoURL:n.photoURL||void 0,reason:e.trim()||void 0})).success)a(!0);else throw new Error("요청 저장 실패")}catch(w){console.error("접근 권한 요청 실패:",w),alert("요청 처리 중 오류가 발생했습니다. 다시 시도해주세요.")}finally{s(!1)}}};return i?p.jsxs(rr,{sx:{maxWidth:600,width:"100%",p:4,textAlign:"center",boxShadow:"0 8px 32px rgba(0,0,0,0.12)",borderRadius:3,background:"linear-gradient(135deg, rgba(76,175,80,0.1) 0%, rgba(139,195,74,0.1) 100%)",border:"1px solid rgba(76,175,80,0.2)"},children:[p.jsxs(Q,{sx:{mb:3},children:[p.jsx(en,{src:n.photoURL||void 0,sx:{width:80,height:80,mx:"auto",mb:2,boxShadow:"0 4px 20px rgba(0,0,0,0.15)"},children:((u=n.displayName)==null?void 0:u[0])||((h=n.email)==null?void 0:h[0])}),p.jsx(H,{variant:"h4",gutterBottom:!0,sx:{fontWeight:"bold",color:"success.main"},children:"✅ 접근 권한 요청 완료!"})]}),p.jsxs(H,{variant:"h6",sx:{mb:2,color:"text.primary"},children:["안녕하세요, ",p.jsx("strong",{children:n.displayName}),"님! 🎉"]}),p.jsxs(H,{variant:"body1",sx:{mb:3,lineHeight:1.8,color:"text.secondary"},children:["개인 비서 접근 권한 요청이 성공적으로 전송되었습니다.",p.jsx("br",{}),"관리자의 승인을 기다려주세요."]}),p.jsx(Q,{sx:{p:2,bgcolor:"rgba(76,175,80,0.1)",borderRadius:2,border:"1px solid rgba(76,175,80,0.2)"},children:p.jsx(H,{variant:"body2",color:"success.dark",sx:{fontWeight:"medium"},children:"🔄 승인이 완료되면 이 화면에서 자동으로 서비스로 이동됩니다."})})]}):p.jsxs(rr,{sx:{maxWidth:600,width:"100%",p:4,boxShadow:"0 8px 32px rgba(0,0,0,0.12)",borderRadius:3,background:"rgba(255,255,255,0.95)",backdropFilter:"blur(10px)"},children:[p.jsxs(Q,{sx:{textAlign:"center",mb:4},children:[p.jsx(H,{variant:"h4",gutterBottom:!0,sx:{fontWeight:"bold",color:"primary.main"},children:"🤖 개인 비서 접근 권한 요청"}),p.jsxs(H,{variant:"body1",color:"textSecondary",sx:{lineHeight:1.6},children:["안녕하세요, ",p.jsx("strong",{children:n.displayName}),"님!",p.jsx("br",{}),"개인 비서를 이용하기 위해 접근 권한을 요청해주세요."]})]}),p.jsxs(Q,{sx:{display:"flex",alignItems:"center",gap:2,mb:4,p:3,bgcolor:"rgba(25,118,210,0.05)",borderRadius:2,border:"1px solid rgba(25,118,210,0.1)"},children:[p.jsx(en,{src:n.photoURL||void 0,sx:{width:60,height:60},children:((f=n.displayName)==null?void 0:f[0])||((m=n.email)==null?void 0:m[0])}),p.jsxs(Q,{sx:{flex:1},children:[p.jsx(H,{variant:"h6",sx:{fontWeight:"bold"},children:n.displayName}),p.jsx(H,{variant:"body2",color:"textSecondary",children:n.email})]})]}),p.jsxs("form",{onSubmit:c,children:[p.jsx(oi,{fullWidth:!0,multiline:!0,rows:4,label:"사용 목적 (선택사항)",placeholder:"개인 비서를 어떤 용도로 사용하고 싶으신지 간단히 설명해주세요...",value:e,onChange:y=>t(y.target.value),sx:{mb:4},variant:"outlined"}),p.jsx(Q,{sx:{display:"flex",gap:2,justifyContent:"center"},children:p.jsx(Ke,{type:"submit",variant:"contained",size:"large",disabled:r,startIcon:r?p.jsx(nr,{size:20,color:"inherit"}):p.jsx(Ma,{}),sx:{minWidth:200,py:1.5,borderRadius:2,fontWeight:"bold",boxShadow:"0 4px 15px rgba(25,118,210,0.3)","&:hover":{boxShadow:"0 6px 20px rgba(25,118,210,0.4)"}},children:r?"요청 중...":"접근 권한 요청하기"})})]})]})};sa.createRoot(document.getElementById("root")).render(p.jsx(ja.StrictMode,{children:p.jsx(XT,{})}));export{gT as $,Ks as A,IS as B,gS as C,_S as D,Nt as E,Ae as F,Zt as G,iS as H,Of as I,$w as J,Pc as K,Cc as L,Rt as M,hr as N,Lf as O,Je as P,xc as Q,TS as R,SS as S,AS as T,hT as U,bp as V,MT as W,jT as X,UT as Y,LT as Z,vt as _,bS as a,Ep as a0,yT as a1,_T as a2,ES as b,wS as c,hS as d,J0 as e,uS as f,Fe as g,dS as h,oS as i,fS as j,cS as k,In as l,X as m,ct as n,G0 as o,$c as p,mS as q,lS as r,me as s,iT as t,Hh as u,Z0 as v,pS as w,yS as x,vS as y,aS as z};
