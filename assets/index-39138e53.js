var sm=Object.defineProperty;var im=(n,e,t)=>e in n?sm(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var dt=(n,e,t)=>(im(n,typeof e!="symbol"?e+"":e,t),t);import{r as om,a as k,R as am,j as p,D as xi,b as Ci,B as K,T as H,c as Pi,A as nr,G as Wl,C as Mh,F as cm,I as lm,S as um,M as Tn,d as oi,e as ki,f as ze,g as kn,h as La,i as hm,k as dm,l as fm,Q as pm,m as mm,u as jh,n as oa,o as bt,p as gm,L as ym,q as _m,s as vm,t as js,v as Fs,w as en,x as Im,y as Hl,z as Em,E as wm,H as Tm,J as Sm,K as Am,N as bm,P as Rm,O as Or,U as Fh,V as xm,W as Cm,X as Gl,Y as Ls,Z as Kl,_ as Mr,$ as Us,a0 as yn,a1 as Bs,a2 as Pm,a3 as km,a4 as Dm,a5 as Ql,a6 as rr,a7 as Vm,a8 as Nm,a9 as Di,aa as Lh,ab as Om,ac as Mm,ad as jm,ae as Fm,af as Uh,ag as Bh,ah as Lm,ai as Um,aj as Bm,ak as $m,al as zm,am as qm,an as Wm,ao as Hm,ap as Gm,aq as Km,ar as Qm,as as qn,at as Wn,au as Jm,av as Ym,aw as Xm,ax as Ge}from"./mui-2bb62da7.js";import{d as W}from"./dayjs-9d6a636c.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var aa={},Jl=om;aa.createRoot=Jl.createRoot,aa.hydrateRoot=Jl.hydrateRoot;const Zm="modulepreload",eg=function(n){return"/my-penguin/"+n},Yl={},Te=function(e,t,r){if(!t||t.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(t.map(i=>{if(i=eg(i),i in Yl)return;Yl[i]=!0;const a=i.endsWith(".css"),c=a?'[rel="stylesheet"]':"";if(!!r)for(let f=s.length-1;f>=0;f--){const m=s[f];if(m.href===i&&(!a||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${c}`))return;const h=document.createElement("link");if(h.rel=a?"stylesheet":Zm,a||(h.as="script",h.crossOrigin=""),h.href=i,document.head.appendChild(h),a)return new Promise((f,m)=>{h.addEventListener("load",f),h.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i})};/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qr(){return Qr=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Qr.apply(this,arguments)}var Ht;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(Ht||(Ht={}));const Xl="popstate";function tg(n){n===void 0&&(n={});function e(s,i){let{pathname:a="/",search:c="",hash:u=""}=jn(s.location.hash.substr(1));return!a.startsWith("/")&&!a.startsWith(".")&&(a="/"+a),ca("",{pathname:a,search:c,hash:u},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(s,i){let a=s.document.querySelector("base"),c="";if(a&&a.getAttribute("href")){let u=s.location.href,h=u.indexOf("#");c=h===-1?u:u.slice(0,h)}return c+"#"+(typeof i=="string"?i:$h(i))}function r(s,i){Ua(s.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return rg(e,t,r,n)}function Re(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Ua(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ng(){return Math.random().toString(36).substr(2,8)}function Zl(n,e){return{usr:n.state,key:n.key,idx:e}}function ca(n,e,t,r){return t===void 0&&(t=null),Qr({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?jn(e):e,{state:t,key:e&&e.key||r||ng()})}function $h(n){let{pathname:e="/",search:t="",hash:r=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function jn(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let r=n.indexOf("?");r>=0&&(e.search=n.substr(r),n=n.substr(0,r)),n&&(e.pathname=n)}return e}function rg(n,e,t,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:i=!1}=r,a=s.history,c=Ht.Pop,u=null,h=f();h==null&&(h=0,a.replaceState(Qr({},a.state,{idx:h}),""));function f(){return(a.state||{idx:null}).idx}function m(){c=Ht.Pop;let w=f(),M=w==null?null:w-h;h=w,u&&u({action:c,location:x.location,delta:M})}function y(w,M){c=Ht.Push;let U=ca(x.location,w,M);t&&t(U,w),h=f()+1;let z=Zl(U,h),G=x.createHref(U);try{a.pushState(z,"",G)}catch(ae){if(ae instanceof DOMException&&ae.name==="DataCloneError")throw ae;s.location.assign(G)}i&&u&&u({action:c,location:x.location,delta:1})}function E(w,M){c=Ht.Replace;let U=ca(x.location,w,M);t&&t(U,w),h=f();let z=Zl(U,h),G=x.createHref(U);a.replaceState(z,"",G),i&&u&&u({action:c,location:x.location,delta:0})}function P(w){let M=s.location.origin!=="null"?s.location.origin:s.location.href,U=typeof w=="string"?w:$h(w);return U=U.replace(/ $/,"%20"),Re(M,"No window.location.(origin|href) available to create URL for href: "+U),new URL(U,M)}let x={get action(){return c},get location(){return n(s,a)},listen(w){if(u)throw new Error("A history only accepts one active listener");return s.addEventListener(Xl,m),u=w,()=>{s.removeEventListener(Xl,m),u=null}},createHref(w){return e(s,w)},createURL:P,encodeLocation(w){let M=P(w);return{pathname:M.pathname,search:M.search,hash:M.hash}},push:y,replace:E,go(w){return a.go(w)}};return x}var eu;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(eu||(eu={}));function sg(n,e,t){return t===void 0&&(t="/"),ig(n,e,t,!1)}function ig(n,e,t,r){let s=typeof e=="string"?jn(e):e,i=Wh(s.pathname||"/",t);if(i==null)return null;let a=zh(n);og(a);let c=null;for(let u=0;c==null&&u<a.length;++u){let h=yg(i);c=mg(a[u],h,r)}return c}function zh(n,e,t,r){e===void 0&&(e=[]),t===void 0&&(t=[]),r===void 0&&(r="");let s=(i,a,c)=>{let u={relativePath:c===void 0?i.path||"":c,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};u.relativePath.startsWith("/")&&(Re(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let h=Rn([r,u.relativePath]),f=t.concat(u);i.children&&i.children.length>0&&(Re(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),zh(i.children,e,f,h)),!(i.path==null&&!i.index)&&e.push({path:h,score:fg(h,i.index),routesMeta:f})};return n.forEach((i,a)=>{var c;if(i.path===""||!((c=i.path)!=null&&c.includes("?")))s(i,a);else for(let u of qh(i.path))s(i,a,u)}),e}function qh(n){let e=n.split("/");if(e.length===0)return[];let[t,...r]=e,s=t.endsWith("?"),i=t.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let a=qh(r.join("/")),c=[];return c.push(...a.map(u=>u===""?i:[i,u].join("/"))),s&&c.push(...a),c.map(u=>n.startsWith("/")&&u===""?"/":u)}function og(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:pg(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const ag=/^:[\w-]+$/,cg=3,lg=2,ug=1,hg=10,dg=-2,tu=n=>n==="*";function fg(n,e){let t=n.split("/"),r=t.length;return t.some(tu)&&(r+=dg),e&&(r+=lg),t.filter(s=>!tu(s)).reduce((s,i)=>s+(ag.test(i)?cg:i===""?ug:hg),r)}function pg(n,e){return n.length===e.length&&n.slice(0,-1).every((r,s)=>r===e[s])?n[n.length-1]-e[e.length-1]:0}function mg(n,e,t){t===void 0&&(t=!1);let{routesMeta:r}=n,s={},i="/",a=[];for(let c=0;c<r.length;++c){let u=r[c],h=c===r.length-1,f=i==="/"?e:e.slice(i.length)||"/",m=nu({path:u.relativePath,caseSensitive:u.caseSensitive,end:h},f),y=u.route;if(!m&&h&&t&&!r[r.length-1].route.index&&(m=nu({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},f)),!m)return null;Object.assign(s,m.params),a.push({params:s,pathname:Rn([i,m.pathname]),pathnameBase:Tg(Rn([i,m.pathnameBase])),route:y}),m.pathnameBase!=="/"&&(i=Rn([i,m.pathnameBase]))}return a}function nu(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,r]=gg(n.path,n.caseSensitive,n.end),s=e.match(t);if(!s)return null;let i=s[0],a=i.replace(/(.)\/+$/,"$1"),c=s.slice(1);return{params:r.reduce((h,f,m)=>{let{paramName:y,isOptional:E}=f;if(y==="*"){let x=c[m]||"";a=i.slice(0,i.length-x.length).replace(/(.)\/+$/,"$1")}const P=c[m];return E&&!P?h[y]=void 0:h[y]=(P||"").replace(/%2F/g,"/"),h},{}),pathname:i,pathnameBase:a,pattern:n}}function gg(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),Ua(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let r=[],s="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,c,u)=>(r.push({paramName:c,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(r.push({paramName:"*"}),s+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?s+="\\/*$":n!==""&&n!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function yg(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ua(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function Wh(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=n.charAt(t);return r&&r!=="/"?null:n.slice(t)||"/"}function _g(n,e){e===void 0&&(e="/");let{pathname:t,search:r="",hash:s=""}=typeof n=="string"?jn(n):n;return{pathname:t?t.startsWith("/")?t:vg(t,e):e,search:Sg(r),hash:Ag(s)}}function vg(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(s=>{s===".."?t.length>1&&t.pop():s!=="."&&t.push(s)}),t.length>1?t.join("/"):"/"}function Bo(n,e,t,r){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ig(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Eg(n,e){let t=Ig(n);return e?t.map((r,s)=>s===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function wg(n,e,t,r){r===void 0&&(r=!1);let s;typeof n=="string"?s=jn(n):(s=Qr({},n),Re(!s.pathname||!s.pathname.includes("?"),Bo("?","pathname","search",s)),Re(!s.pathname||!s.pathname.includes("#"),Bo("#","pathname","hash",s)),Re(!s.search||!s.search.includes("#"),Bo("#","search","hash",s)));let i=n===""||s.pathname==="",a=i?"/":s.pathname,c;if(a==null)c=t;else{let m=e.length-1;if(!r&&a.startsWith("..")){let y=a.split("/");for(;y[0]==="..";)y.shift(),m-=1;s.pathname=y.join("/")}c=m>=0?e[m]:"/"}let u=_g(s,c),h=a&&a!=="/"&&a.endsWith("/"),f=(i||a===".")&&t.endsWith("/");return!u.pathname.endsWith("/")&&(h||f)&&(u.pathname+="/"),u}const Rn=n=>n.join("/").replace(/\/\/+/g,"/"),Tg=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),Sg=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,Ag=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function bg(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const Hh=["post","put","patch","delete"];new Set(Hh);const Rg=["get",...Hh];new Set(Rg);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jr(){return Jr=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Jr.apply(this,arguments)}const Ba=k.createContext(null),xg=k.createContext(null),Vi=k.createContext(null),Ni=k.createContext(null),fr=k.createContext({outlet:null,matches:[],isDataRoute:!1}),Gh=k.createContext(null);function Oi(){return k.useContext(Ni)!=null}function Mi(){return Oi()||Re(!1),k.useContext(Ni).location}function Kh(n){k.useContext(Vi).static||k.useLayoutEffect(n)}function Qh(){let{isDataRoute:n}=k.useContext(fr);return n?Bg():Cg()}function Cg(){Oi()||Re(!1);let n=k.useContext(Ba),{basename:e,future:t,navigator:r}=k.useContext(Vi),{matches:s}=k.useContext(fr),{pathname:i}=Mi(),a=JSON.stringify(Eg(s,t.v7_relativeSplatPath)),c=k.useRef(!1);return Kh(()=>{c.current=!0}),k.useCallback(function(h,f){if(f===void 0&&(f={}),!c.current)return;if(typeof h=="number"){r.go(h);return}let m=wg(h,JSON.parse(a),i,f.relative==="path");n==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:Rn([e,m.pathname])),(f.replace?r.replace:r.push)(m,f.state,f)},[e,r,a,i,n])}function Pg(n,e){return kg(n,e)}function kg(n,e,t,r){Oi()||Re(!1);let{navigator:s}=k.useContext(Vi),{matches:i}=k.useContext(fr),a=i[i.length-1],c=a?a.params:{};a&&a.pathname;let u=a?a.pathnameBase:"/";a&&a.route;let h=Mi(),f;if(e){var m;let w=typeof e=="string"?jn(e):e;u==="/"||(m=w.pathname)!=null&&m.startsWith(u)||Re(!1),f=w}else f=h;let y=f.pathname||"/",E=y;if(u!=="/"){let w=u.replace(/^\//,"").split("/");E="/"+y.replace(/^\//,"").split("/").slice(w.length).join("/")}let P=sg(n,{pathname:E}),x=Mg(P&&P.map(w=>Object.assign({},w,{params:Object.assign({},c,w.params),pathname:Rn([u,s.encodeLocation?s.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?u:Rn([u,s.encodeLocation?s.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,t,r);return e&&x?k.createElement(Ni.Provider,{value:{location:Jr({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Ht.Pop}},x):x}function Dg(){let n=Ug(),e=bg(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},e),t?k.createElement("pre",{style:s},t):null,i)}const Vg=k.createElement(Dg,null);class Ng extends k.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?k.createElement(fr.Provider,{value:this.props.routeContext},k.createElement(Gh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Og(n){let{routeContext:e,match:t,children:r}=n,s=k.useContext(Ba);return s&&s.static&&s.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=t.route.id),k.createElement(fr.Provider,{value:e},r)}function Mg(n,e,t,r){var s;if(e===void 0&&(e=[]),t===void 0&&(t=null),r===void 0&&(r=null),n==null){var i;if(!t)return null;if(t.errors)n=t.matches;else if((i=r)!=null&&i.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let a=n,c=(s=t)==null?void 0:s.errors;if(c!=null){let f=a.findIndex(m=>m.route.id&&(c==null?void 0:c[m.route.id])!==void 0);f>=0||Re(!1),a=a.slice(0,Math.min(a.length,f+1))}let u=!1,h=-1;if(t&&r&&r.v7_partialHydration)for(let f=0;f<a.length;f++){let m=a[f];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(h=f),m.route.id){let{loaderData:y,errors:E}=t,P=m.route.loader&&y[m.route.id]===void 0&&(!E||E[m.route.id]===void 0);if(m.route.lazy||P){u=!0,h>=0?a=a.slice(0,h+1):a=[a[0]];break}}}return a.reduceRight((f,m,y)=>{let E,P=!1,x=null,w=null;t&&(E=c&&m.route.id?c[m.route.id]:void 0,x=m.route.errorElement||Vg,u&&(h<0&&y===0?($g("route-fallback",!1),P=!0,w=null):h===y&&(P=!0,w=m.route.hydrateFallbackElement||null)));let M=e.concat(a.slice(0,y+1)),U=()=>{let z;return E?z=x:P?z=w:m.route.Component?z=k.createElement(m.route.Component,null):m.route.element?z=m.route.element:z=f,k.createElement(Og,{match:m,routeContext:{outlet:f,matches:M,isDataRoute:t!=null},children:z})};return t&&(m.route.ErrorBoundary||m.route.errorElement||y===0)?k.createElement(Ng,{location:t.location,revalidation:t.revalidation,component:x,error:E,children:U(),routeContext:{outlet:null,matches:M,isDataRoute:!0}}):U()},null)}var Jh=function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n}(Jh||{}),ai=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(ai||{});function jg(n){let e=k.useContext(Ba);return e||Re(!1),e}function Fg(n){let e=k.useContext(xg);return e||Re(!1),e}function Lg(n){let e=k.useContext(fr);return e||Re(!1),e}function Yh(n){let e=Lg(),t=e.matches[e.matches.length-1];return t.route.id||Re(!1),t.route.id}function Ug(){var n;let e=k.useContext(Gh),t=Fg(ai.UseRouteError),r=Yh(ai.UseRouteError);return e!==void 0?e:(n=t.errors)==null?void 0:n[r]}function Bg(){let{router:n}=jg(Jh.UseNavigateStable),e=Yh(ai.UseNavigateStable),t=k.useRef(!1);return Kh(()=>{t.current=!0}),k.useCallback(function(s,i){i===void 0&&(i={}),t.current&&(typeof s=="number"?n.navigate(s):n.navigate(s,Jr({fromRouteId:e},i)))},[n,e])}const ru={};function $g(n,e,t){!e&&!ru[n]&&(ru[n]=!0)}function zg(n,e){n==null||n.v7_startTransition,(n==null?void 0:n.v7_relativeSplatPath)===void 0&&(!e||e.v7_relativeSplatPath),e&&(e.v7_fetcherPersist,e.v7_normalizeFormMethod,e.v7_partialHydration,e.v7_skipActionErrorRevalidation)}function ot(n){Re(!1)}function qg(n){let{basename:e="/",children:t=null,location:r,navigationType:s=Ht.Pop,navigator:i,static:a=!1,future:c}=n;Oi()&&Re(!1);let u=e.replace(/^\/*/,"/"),h=k.useMemo(()=>({basename:u,navigator:i,static:a,future:Jr({v7_relativeSplatPath:!1},c)}),[u,c,i,a]);typeof r=="string"&&(r=jn(r));let{pathname:f="/",search:m="",hash:y="",state:E=null,key:P="default"}=r,x=k.useMemo(()=>{let w=Wh(f,u);return w==null?null:{location:{pathname:w,search:m,hash:y,state:E,key:P},navigationType:s}},[u,f,m,y,E,P,s]);return x==null?null:k.createElement(Vi.Provider,{value:h},k.createElement(Ni.Provider,{children:t,value:x}))}function Wg(n){let{children:e,location:t}=n;return Pg(la(e),t)}new Promise(()=>{});function la(n,e){e===void 0&&(e=[]);let t=[];return k.Children.forEach(n,(r,s)=>{if(!k.isValidElement(r))return;let i=[...e,s];if(r.type===k.Fragment){t.push.apply(t,la(r.props.children,i));return}r.type!==ot&&Re(!1),!r.props.index||!r.props.children||Re(!1);let a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=la(r.props.children,i)),t.push(a)}),t}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Hg="6";try{window.__reactRouterVersion=Hg}catch{}const Gg="startTransition",su=am[Gg];function Kg(n){let{basename:e,children:t,future:r,window:s}=n,i=k.useRef();i.current==null&&(i.current=tg({window:s,v5Compat:!0}));let a=i.current,[c,u]=k.useState({action:a.action,location:a.location}),{v7_startTransition:h}=r||{},f=k.useCallback(m=>{h&&su?su(()=>u(m)):u(m)},[u,h]);return k.useLayoutEffect(()=>a.listen(f),[a,f]),k.useEffect(()=>zg(r),[r]),k.createElement(qg,{basename:e,children:t,location:c.location,navigationType:c.action,navigator:a,future:r})}var iu;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(iu||(iu={}));var ou;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(ou||(ou={}));const Qg=()=>{};/**
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
 */const Xh=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Jg=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Zh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,u=s+2<n.length,h=u?n[s+2]:0,f=i>>2,m=(i&3)<<4|c>>4;let y=(c&15)<<2|h>>6,E=h&63;u||(E=64,a||(y=64)),r.push(t[f],t[m],t[y],t[E])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Xh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Jg(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const m=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||h==null||m==null)throw new Yg;const y=i<<2|c>>4;if(r.push(y),h!==64){const E=c<<4&240|h>>2;if(r.push(E),m!==64){const P=h<<6&192|m;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Yg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Xg=function(n){const e=Xh(n);return Zh.encodeByteArray(e,!0)},ci=function(n){return Xg(n).replace(/\./g,"")},ed=function(n){try{return Zh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Zg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ey=()=>Zg().__FIREBASE_DEFAULTS__,ty=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ny=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ed(n[1]);return e&&JSON.parse(e)},ji=()=>{try{return Qg()||ey()||ty()||ny()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},td=n=>{var e,t;return(t=(e=ji())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},ry=n=>{const e=td(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},nd=()=>{var n;return(n=ji())==null?void 0:n.config},rd=n=>{var e;return(e=ji())==null?void 0:e[`_${n}`]};/**
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
 */class sy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function pr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function sd(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function iy(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n},c="";return[ci(JSON.stringify(t)),ci(JSON.stringify(a)),c].join(".")}const Br={};function oy(){const n={prod:[],emulator:[]};for(const e of Object.keys(Br))Br[e]?n.emulator.push(e):n.prod.push(e);return n}function ay(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let au=!1;function id(n,e){if(typeof window>"u"||typeof document>"u"||!pr(window.location.host)||Br[n]===e||Br[n]||au)return;Br[n]=e;function t(y){return`__firebase__banner__${y}`}const r="__firebase__banner",i=oy().prod.length>0;function a(){const y=document.getElementById(r);y&&y.remove()}function c(y){y.style.display="flex",y.style.background="#7faaf0",y.style.position="fixed",y.style.bottom="5px",y.style.left="5px",y.style.padding=".5em",y.style.borderRadius="5px",y.style.alignItems="center"}function u(y,E){y.setAttribute("width","24"),y.setAttribute("id",E),y.setAttribute("height","24"),y.setAttribute("viewBox","0 0 24 24"),y.setAttribute("fill","none"),y.style.marginLeft="-6px"}function h(){const y=document.createElement("span");return y.style.cursor="pointer",y.style.marginLeft="16px",y.style.fontSize="24px",y.innerHTML=" &times;",y.onclick=()=>{au=!0,a()},y}function f(y,E){y.setAttribute("id",E),y.innerText="Learn more",y.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",y.setAttribute("target","__blank"),y.style.paddingLeft="5px",y.style.textDecoration="underline"}function m(){const y=ay(r),E=t("text"),P=document.getElementById(E)||document.createElement("span"),x=t("learnmore"),w=document.getElementById(x)||document.createElement("a"),M=t("preprendIcon"),U=document.getElementById(M)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(y.created){const z=y.element;c(z),f(w,x);const G=h();u(U,M),z.append(U,P,w,G),document.body.appendChild(z)}i?(P.innerText="Preview backend disconnected.",U.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",E)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
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
 */function qe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qe())}function ly(){var e;const n=(e=ji())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function uy(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function hy(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function dy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fy(){const n=qe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function py(){return!ly()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function my(){try{return typeof indexedDB=="object"}catch{return!1}}function gy(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const yy="FirebaseError";class jt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=yy,Object.setPrototypeOf(this,jt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ls.prototype.create)}}class ls{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?_y(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new jt(s,c,r)}}function _y(n,e){return n.replace(vy,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const vy=/\{\$([^}]+)}/g;function Iy(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Dn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(cu(i)&&cu(a)){if(!Dn(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function cu(n){return n!==null&&typeof n=="object"}/**
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
 */function us(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ey(n,e){const t=new wy(n,e);return t.subscribe.bind(t)}class wy{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Ty(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=$o),s.error===void 0&&(s.error=$o),s.complete===void 0&&(s.complete=$o);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ty(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function $o(){}/**
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
 */function Pe(n){return n&&n._delegate?n._delegate:n}class Vn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class Sy{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new sy;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(by(e))try{this.getOrInitializeService({instanceIdentifier:vn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=vn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vn){return this.instances.has(e)}getOptions(e=vn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ay(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=vn){return this.component?this.component.multipleInstances?e:vn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ay(n){return n===vn?void 0:n}function by(n){return n.instantiationMode==="EAGER"}/**
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
 */class Ry{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Sy(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(se||(se={}));const xy={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},Cy=se.INFO,Py={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},ky=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Py[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $a{constructor(e){this.name=e,this._logLevel=Cy,this._logHandler=ky,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const Dy=(n,e)=>e.some(t=>n instanceof t);let lu,uu;function Vy(){return lu||(lu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ny(){return uu||(uu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const od=new WeakMap,ua=new WeakMap,ad=new WeakMap,zo=new WeakMap,za=new WeakMap;function Oy(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Kt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&od.set(t,n)}).catch(()=>{}),za.set(e,n),e}function My(n){if(ua.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});ua.set(n,e)}let ha={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ua.get(n);if(e==="objectStoreNames")return n.objectStoreNames||ad.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Kt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function jy(n){ha=n(ha)}function Fy(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(qo(this),e,...t);return ad.set(r,e.sort?e.sort():[e]),Kt(r)}:Ny().includes(n)?function(...e){return n.apply(qo(this),e),Kt(od.get(this))}:function(...e){return Kt(n.apply(qo(this),e))}}function Ly(n){return typeof n=="function"?Fy(n):(n instanceof IDBTransaction&&My(n),Dy(n,Vy())?new Proxy(n,ha):n)}function Kt(n){if(n instanceof IDBRequest)return Oy(n);if(zo.has(n))return zo.get(n);const e=Ly(n);return e!==n&&(zo.set(n,e),za.set(e,n)),e}const qo=n=>za.get(n);function Uy(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=Kt(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Kt(a.result),u.oldVersion,u.newVersion,Kt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const By=["get","getKey","getAll","getAllKeys","count"],$y=["put","add","delete","clear"],Wo=new Map;function hu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Wo.get(e))return Wo.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=$y.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||By.includes(t)))return;const i=async function(a,...c){const u=this.transaction(a,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),s&&u.done]))[0]};return Wo.set(e,i),i}jy(n=>({...n,get:(e,t,r)=>hu(e,t)||n.get(e,t,r),has:(e,t)=>!!hu(e,t)||n.has(e,t)}));/**
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
 */class zy{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(qy(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function qy(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const da="@firebase/app",du="0.14.0";/**
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
 */const kt=new $a("@firebase/app"),Wy="@firebase/app-compat",Hy="@firebase/analytics-compat",Gy="@firebase/analytics",Ky="@firebase/app-check-compat",Qy="@firebase/app-check",Jy="@firebase/auth",Yy="@firebase/auth-compat",Xy="@firebase/database",Zy="@firebase/data-connect",e_="@firebase/database-compat",t_="@firebase/functions",n_="@firebase/functions-compat",r_="@firebase/installations",s_="@firebase/installations-compat",i_="@firebase/messaging",o_="@firebase/messaging-compat",a_="@firebase/performance",c_="@firebase/performance-compat",l_="@firebase/remote-config",u_="@firebase/remote-config-compat",h_="@firebase/storage",d_="@firebase/storage-compat",f_="@firebase/firestore",p_="@firebase/ai",m_="@firebase/firestore-compat",g_="firebase",y_="12.0.0";/**
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
 */const fa="[DEFAULT]",__={[da]:"fire-core",[Wy]:"fire-core-compat",[Gy]:"fire-analytics",[Hy]:"fire-analytics-compat",[Qy]:"fire-app-check",[Ky]:"fire-app-check-compat",[Jy]:"fire-auth",[Yy]:"fire-auth-compat",[Xy]:"fire-rtdb",[Zy]:"fire-data-connect",[e_]:"fire-rtdb-compat",[t_]:"fire-fn",[n_]:"fire-fn-compat",[r_]:"fire-iid",[s_]:"fire-iid-compat",[i_]:"fire-fcm",[o_]:"fire-fcm-compat",[a_]:"fire-perf",[c_]:"fire-perf-compat",[l_]:"fire-rc",[u_]:"fire-rc-compat",[h_]:"fire-gcs",[d_]:"fire-gcs-compat",[f_]:"fire-fst",[m_]:"fire-fst-compat",[p_]:"fire-vertex","fire-js":"fire-js",[g_]:"fire-js-all"};/**
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
 */const Yr=new Map,v_=new Map,pa=new Map;function fu(n,e){try{n.container.addComponent(e)}catch(t){kt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function sr(n){const e=n.name;if(pa.has(e))return kt.debug(`There were multiple attempts to register component ${e}.`),!1;pa.set(e,n);for(const t of Yr.values())fu(t,n);for(const t of v_.values())fu(t,n);return!0}function qa(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function at(n){return n==null?!1:n.settings!==void 0}/**
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
 */const I_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Qt=new ls("app","Firebase",I_);/**
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
 */class E_{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Vn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qt.create("app-deleted",{appName:this._name})}}/**
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
 */const mr=y_;function Qs(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:fa,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Qt.create("bad-app-name",{appName:String(s)});if(t||(t=nd()),!t)throw Qt.create("no-options");const i=Yr.get(s);if(i){if(Dn(t,i.options)&&Dn(r,i.config))return i;throw Qt.create("duplicate-app",{appName:s})}const a=new Ry(s);for(const u of pa.values())a.addComponent(u);const c=new E_(t,r,a);return Yr.set(s,c),c}function $r(n=fa){const e=Yr.get(n);if(!e&&n===fa&&nd())return Qs();if(!e)throw Qt.create("no-app",{appName:n});return e}function Ho(){return Array.from(Yr.values())}function Jt(n,e,t){let r=__[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),kt.warn(a.join(" "));return}sr(new Vn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const w_="firebase-heartbeat-database",T_=1,Xr="firebase-heartbeat-store";let Go=null;function cd(){return Go||(Go=Uy(w_,T_,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Xr)}catch(t){console.warn(t)}}}}).catch(n=>{throw Qt.create("idb-open",{originalErrorMessage:n.message})})),Go}async function S_(n){try{const t=(await cd()).transaction(Xr),r=await t.objectStore(Xr).get(ld(n));return await t.done,r}catch(e){if(e instanceof jt)kt.warn(e.message);else{const t=Qt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});kt.warn(t.message)}}}async function pu(n,e){try{const r=(await cd()).transaction(Xr,"readwrite");await r.objectStore(Xr).put(e,ld(n)),await r.done}catch(t){if(t instanceof jt)kt.warn(t.message);else{const r=Qt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});kt.warn(r.message)}}}function ld(n){return`${n.name}!${n.options.appId}`}/**
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
 */const A_=1024,b_=30;class R_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new C_(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=mu();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>b_){const a=P_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){kt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=mu(),{heartbeatsToSend:r,unsentEntries:s}=x_(this._heartbeatsCache.heartbeats),i=ci(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return kt.warn(t),""}}}function mu(){return new Date().toISOString().substring(0,10)}function x_(n,e=A_){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),gu(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),gu(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class C_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return my()?gy().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await S_(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return pu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return pu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function gu(n){return ci(JSON.stringify({version:2,heartbeats:n})).length}function P_(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function k_(n){sr(new Vn("platform-logger",e=>new zy(e),"PRIVATE")),sr(new Vn("heartbeat",e=>new R_(e),"PRIVATE")),Jt(da,du,n),Jt(da,du,"esm2020"),Jt("fire-js","")}k_("");var D_="firebase",V_="12.0.0";/**
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
 */Jt(D_,V_,"app");var yu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yt,ud;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,_){function I(){}I.prototype=_.prototype,S.D=_.prototype,S.prototype=new I,S.prototype.constructor=S,S.C=function(T,A,b){for(var v=Array(arguments.length-2),re=2;re<arguments.length;re++)v[re-2]=arguments[re];return _.prototype[A].apply(T,v)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(S,_,I){I||(I=0);var T=Array(16);if(typeof _=="string")for(var A=0;16>A;++A)T[A]=_.charCodeAt(I++)|_.charCodeAt(I++)<<8|_.charCodeAt(I++)<<16|_.charCodeAt(I++)<<24;else for(A=0;16>A;++A)T[A]=_[I++]|_[I++]<<8|_[I++]<<16|_[I++]<<24;_=S.g[0],I=S.g[1],A=S.g[2];var b=S.g[3],v=_+(b^I&(A^b))+T[0]+3614090360&4294967295;_=I+(v<<7&4294967295|v>>>25),v=b+(A^_&(I^A))+T[1]+3905402710&4294967295,b=_+(v<<12&4294967295|v>>>20),v=A+(I^b&(_^I))+T[2]+606105819&4294967295,A=b+(v<<17&4294967295|v>>>15),v=I+(_^A&(b^_))+T[3]+3250441966&4294967295,I=A+(v<<22&4294967295|v>>>10),v=_+(b^I&(A^b))+T[4]+4118548399&4294967295,_=I+(v<<7&4294967295|v>>>25),v=b+(A^_&(I^A))+T[5]+1200080426&4294967295,b=_+(v<<12&4294967295|v>>>20),v=A+(I^b&(_^I))+T[6]+2821735955&4294967295,A=b+(v<<17&4294967295|v>>>15),v=I+(_^A&(b^_))+T[7]+4249261313&4294967295,I=A+(v<<22&4294967295|v>>>10),v=_+(b^I&(A^b))+T[8]+1770035416&4294967295,_=I+(v<<7&4294967295|v>>>25),v=b+(A^_&(I^A))+T[9]+2336552879&4294967295,b=_+(v<<12&4294967295|v>>>20),v=A+(I^b&(_^I))+T[10]+4294925233&4294967295,A=b+(v<<17&4294967295|v>>>15),v=I+(_^A&(b^_))+T[11]+2304563134&4294967295,I=A+(v<<22&4294967295|v>>>10),v=_+(b^I&(A^b))+T[12]+1804603682&4294967295,_=I+(v<<7&4294967295|v>>>25),v=b+(A^_&(I^A))+T[13]+4254626195&4294967295,b=_+(v<<12&4294967295|v>>>20),v=A+(I^b&(_^I))+T[14]+2792965006&4294967295,A=b+(v<<17&4294967295|v>>>15),v=I+(_^A&(b^_))+T[15]+1236535329&4294967295,I=A+(v<<22&4294967295|v>>>10),v=_+(A^b&(I^A))+T[1]+4129170786&4294967295,_=I+(v<<5&4294967295|v>>>27),v=b+(I^A&(_^I))+T[6]+3225465664&4294967295,b=_+(v<<9&4294967295|v>>>23),v=A+(_^I&(b^_))+T[11]+643717713&4294967295,A=b+(v<<14&4294967295|v>>>18),v=I+(b^_&(A^b))+T[0]+3921069994&4294967295,I=A+(v<<20&4294967295|v>>>12),v=_+(A^b&(I^A))+T[5]+3593408605&4294967295,_=I+(v<<5&4294967295|v>>>27),v=b+(I^A&(_^I))+T[10]+38016083&4294967295,b=_+(v<<9&4294967295|v>>>23),v=A+(_^I&(b^_))+T[15]+3634488961&4294967295,A=b+(v<<14&4294967295|v>>>18),v=I+(b^_&(A^b))+T[4]+3889429448&4294967295,I=A+(v<<20&4294967295|v>>>12),v=_+(A^b&(I^A))+T[9]+568446438&4294967295,_=I+(v<<5&4294967295|v>>>27),v=b+(I^A&(_^I))+T[14]+3275163606&4294967295,b=_+(v<<9&4294967295|v>>>23),v=A+(_^I&(b^_))+T[3]+4107603335&4294967295,A=b+(v<<14&4294967295|v>>>18),v=I+(b^_&(A^b))+T[8]+1163531501&4294967295,I=A+(v<<20&4294967295|v>>>12),v=_+(A^b&(I^A))+T[13]+2850285829&4294967295,_=I+(v<<5&4294967295|v>>>27),v=b+(I^A&(_^I))+T[2]+4243563512&4294967295,b=_+(v<<9&4294967295|v>>>23),v=A+(_^I&(b^_))+T[7]+1735328473&4294967295,A=b+(v<<14&4294967295|v>>>18),v=I+(b^_&(A^b))+T[12]+2368359562&4294967295,I=A+(v<<20&4294967295|v>>>12),v=_+(I^A^b)+T[5]+4294588738&4294967295,_=I+(v<<4&4294967295|v>>>28),v=b+(_^I^A)+T[8]+2272392833&4294967295,b=_+(v<<11&4294967295|v>>>21),v=A+(b^_^I)+T[11]+1839030562&4294967295,A=b+(v<<16&4294967295|v>>>16),v=I+(A^b^_)+T[14]+4259657740&4294967295,I=A+(v<<23&4294967295|v>>>9),v=_+(I^A^b)+T[1]+2763975236&4294967295,_=I+(v<<4&4294967295|v>>>28),v=b+(_^I^A)+T[4]+1272893353&4294967295,b=_+(v<<11&4294967295|v>>>21),v=A+(b^_^I)+T[7]+4139469664&4294967295,A=b+(v<<16&4294967295|v>>>16),v=I+(A^b^_)+T[10]+3200236656&4294967295,I=A+(v<<23&4294967295|v>>>9),v=_+(I^A^b)+T[13]+681279174&4294967295,_=I+(v<<4&4294967295|v>>>28),v=b+(_^I^A)+T[0]+3936430074&4294967295,b=_+(v<<11&4294967295|v>>>21),v=A+(b^_^I)+T[3]+3572445317&4294967295,A=b+(v<<16&4294967295|v>>>16),v=I+(A^b^_)+T[6]+76029189&4294967295,I=A+(v<<23&4294967295|v>>>9),v=_+(I^A^b)+T[9]+3654602809&4294967295,_=I+(v<<4&4294967295|v>>>28),v=b+(_^I^A)+T[12]+3873151461&4294967295,b=_+(v<<11&4294967295|v>>>21),v=A+(b^_^I)+T[15]+530742520&4294967295,A=b+(v<<16&4294967295|v>>>16),v=I+(A^b^_)+T[2]+3299628645&4294967295,I=A+(v<<23&4294967295|v>>>9),v=_+(A^(I|~b))+T[0]+4096336452&4294967295,_=I+(v<<6&4294967295|v>>>26),v=b+(I^(_|~A))+T[7]+1126891415&4294967295,b=_+(v<<10&4294967295|v>>>22),v=A+(_^(b|~I))+T[14]+2878612391&4294967295,A=b+(v<<15&4294967295|v>>>17),v=I+(b^(A|~_))+T[5]+4237533241&4294967295,I=A+(v<<21&4294967295|v>>>11),v=_+(A^(I|~b))+T[12]+1700485571&4294967295,_=I+(v<<6&4294967295|v>>>26),v=b+(I^(_|~A))+T[3]+2399980690&4294967295,b=_+(v<<10&4294967295|v>>>22),v=A+(_^(b|~I))+T[10]+4293915773&4294967295,A=b+(v<<15&4294967295|v>>>17),v=I+(b^(A|~_))+T[1]+2240044497&4294967295,I=A+(v<<21&4294967295|v>>>11),v=_+(A^(I|~b))+T[8]+1873313359&4294967295,_=I+(v<<6&4294967295|v>>>26),v=b+(I^(_|~A))+T[15]+4264355552&4294967295,b=_+(v<<10&4294967295|v>>>22),v=A+(_^(b|~I))+T[6]+2734768916&4294967295,A=b+(v<<15&4294967295|v>>>17),v=I+(b^(A|~_))+T[13]+1309151649&4294967295,I=A+(v<<21&4294967295|v>>>11),v=_+(A^(I|~b))+T[4]+4149444226&4294967295,_=I+(v<<6&4294967295|v>>>26),v=b+(I^(_|~A))+T[11]+3174756917&4294967295,b=_+(v<<10&4294967295|v>>>22),v=A+(_^(b|~I))+T[2]+718787259&4294967295,A=b+(v<<15&4294967295|v>>>17),v=I+(b^(A|~_))+T[9]+3951481745&4294967295,S.g[0]=S.g[0]+_&4294967295,S.g[1]=S.g[1]+(A+(v<<21&4294967295|v>>>11))&4294967295,S.g[2]=S.g[2]+A&4294967295,S.g[3]=S.g[3]+b&4294967295}r.prototype.u=function(S,_){_===void 0&&(_=S.length);for(var I=_-this.blockSize,T=this.B,A=this.h,b=0;b<_;){if(A==0)for(;b<=I;)s(this,S,b),b+=this.blockSize;if(typeof S=="string"){for(;b<_;)if(T[A++]=S.charCodeAt(b++),A==this.blockSize){s(this,T),A=0;break}}else for(;b<_;)if(T[A++]=S[b++],A==this.blockSize){s(this,T),A=0;break}}this.h=A,this.o+=_},r.prototype.v=function(){var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);S[0]=128;for(var _=1;_<S.length-8;++_)S[_]=0;var I=8*this.o;for(_=S.length-8;_<S.length;++_)S[_]=I&255,I/=256;for(this.u(S),S=Array(16),_=I=0;4>_;++_)for(var T=0;32>T;T+=8)S[I++]=this.g[_]>>>T&255;return S};function i(S,_){var I=c;return Object.prototype.hasOwnProperty.call(I,S)?I[S]:I[S]=_(S)}function a(S,_){this.h=_;for(var I=[],T=!0,A=S.length-1;0<=A;A--){var b=S[A]|0;T&&b==_||(I[A]=b,T=!1)}this.g=I}var c={};function u(S){return-128<=S&&128>S?i(S,function(_){return new a([_|0],0>_?-1:0)}):new a([S|0],0>S?-1:0)}function h(S){if(isNaN(S)||!isFinite(S))return m;if(0>S)return w(h(-S));for(var _=[],I=1,T=0;S>=I;T++)_[T]=S/I|0,I*=4294967296;return new a(_,0)}function f(S,_){if(S.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(S.charAt(0)=="-")return w(f(S.substring(1),_));if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=h(Math.pow(_,8)),T=m,A=0;A<S.length;A+=8){var b=Math.min(8,S.length-A),v=parseInt(S.substring(A,A+b),_);8>b?(b=h(Math.pow(_,b)),T=T.j(b).add(h(v))):(T=T.j(I),T=T.add(h(v)))}return T}var m=u(0),y=u(1),E=u(16777216);n=a.prototype,n.m=function(){if(x(this))return-w(this).m();for(var S=0,_=1,I=0;I<this.g.length;I++){var T=this.i(I);S+=(0<=T?T:4294967296+T)*_,_*=4294967296}return S},n.toString=function(S){if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(P(this))return"0";if(x(this))return"-"+w(this).toString(S);for(var _=h(Math.pow(S,6)),I=this,T="";;){var A=G(I,_).g;I=M(I,A.j(_));var b=((0<I.g.length?I.g[0]:I.h)>>>0).toString(S);if(I=A,P(I))return b+T;for(;6>b.length;)b="0"+b;T=b+T}},n.i=function(S){return 0>S?0:S<this.g.length?this.g[S]:this.h};function P(S){if(S.h!=0)return!1;for(var _=0;_<S.g.length;_++)if(S.g[_]!=0)return!1;return!0}function x(S){return S.h==-1}n.l=function(S){return S=M(this,S),x(S)?-1:P(S)?0:1};function w(S){for(var _=S.g.length,I=[],T=0;T<_;T++)I[T]=~S.g[T];return new a(I,~S.h).add(y)}n.abs=function(){return x(this)?w(this):this},n.add=function(S){for(var _=Math.max(this.g.length,S.g.length),I=[],T=0,A=0;A<=_;A++){var b=T+(this.i(A)&65535)+(S.i(A)&65535),v=(b>>>16)+(this.i(A)>>>16)+(S.i(A)>>>16);T=v>>>16,b&=65535,v&=65535,I[A]=v<<16|b}return new a(I,I[I.length-1]&-2147483648?-1:0)};function M(S,_){return S.add(w(_))}n.j=function(S){if(P(this)||P(S))return m;if(x(this))return x(S)?w(this).j(w(S)):w(w(this).j(S));if(x(S))return w(this.j(w(S)));if(0>this.l(E)&&0>S.l(E))return h(this.m()*S.m());for(var _=this.g.length+S.g.length,I=[],T=0;T<2*_;T++)I[T]=0;for(T=0;T<this.g.length;T++)for(var A=0;A<S.g.length;A++){var b=this.i(T)>>>16,v=this.i(T)&65535,re=S.i(A)>>>16,J=S.i(A)&65535;I[2*T+2*A]+=v*J,U(I,2*T+2*A),I[2*T+2*A+1]+=b*J,U(I,2*T+2*A+1),I[2*T+2*A+1]+=v*re,U(I,2*T+2*A+1),I[2*T+2*A+2]+=b*re,U(I,2*T+2*A+2)}for(T=0;T<_;T++)I[T]=I[2*T+1]<<16|I[2*T];for(T=_;T<2*_;T++)I[T]=0;return new a(I,0)};function U(S,_){for(;(S[_]&65535)!=S[_];)S[_+1]+=S[_]>>>16,S[_]&=65535,_++}function z(S,_){this.g=S,this.h=_}function G(S,_){if(P(_))throw Error("division by zero");if(P(S))return new z(m,m);if(x(S))return _=G(w(S),_),new z(w(_.g),w(_.h));if(x(_))return _=G(S,w(_)),new z(w(_.g),_.h);if(30<S.g.length){if(x(S)||x(_))throw Error("slowDivide_ only works with positive integers.");for(var I=y,T=_;0>=T.l(S);)I=ae(I),T=ae(T);var A=ue(I,1),b=ue(T,1);for(T=ue(T,2),I=ue(I,2);!P(T);){var v=b.add(T);0>=v.l(S)&&(A=A.add(I),b=v),T=ue(T,1),I=ue(I,1)}return _=M(S,A.j(_)),new z(A,_)}for(A=m;0<=S.l(_);){for(I=Math.max(1,Math.floor(S.m()/_.m())),T=Math.ceil(Math.log(I)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),b=h(I),v=b.j(_);x(v)||0<v.l(S);)I-=T,b=h(I),v=b.j(_);P(b)&&(b=y),A=A.add(b),S=M(S,v)}return new z(A,S)}n.A=function(S){return G(this,S).h},n.and=function(S){for(var _=Math.max(this.g.length,S.g.length),I=[],T=0;T<_;T++)I[T]=this.i(T)&S.i(T);return new a(I,this.h&S.h)},n.or=function(S){for(var _=Math.max(this.g.length,S.g.length),I=[],T=0;T<_;T++)I[T]=this.i(T)|S.i(T);return new a(I,this.h|S.h)},n.xor=function(S){for(var _=Math.max(this.g.length,S.g.length),I=[],T=0;T<_;T++)I[T]=this.i(T)^S.i(T);return new a(I,this.h^S.h)};function ae(S){for(var _=S.g.length+1,I=[],T=0;T<_;T++)I[T]=S.i(T)<<1|S.i(T-1)>>>31;return new a(I,S.h)}function ue(S,_){var I=_>>5;_%=32;for(var T=S.g.length-I,A=[],b=0;b<T;b++)A[b]=0<_?S.i(b+I)>>>_|S.i(b+I+1)<<32-_:S.i(b+I);return new a(A,S.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,ud=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,Yt=a}).apply(typeof yu<"u"?yu:typeof self<"u"?self:typeof window<"u"?window:{});var $s=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hd,jr,dd,Js,ma,fd,pd,md;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,d){return o==Array.prototype||o==Object.prototype||(o[l]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof $s=="object"&&$s];for(var l=0;l<o.length;++l){var d=o[l];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(o,l){if(l)e:{var d=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var R=o[g];if(!(R in d))break e;d=d[R]}o=o[o.length-1],g=d[o],l=l(g),l!=g&&l!=null&&e(d,o,{configurable:!0,writable:!0,value:l})}}function i(o,l){o instanceof String&&(o+="");var d=0,g=!1,R={next:function(){if(!g&&d<o.length){var C=d++;return{value:l(C,o[C]),done:!1}}return g=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}s("Array.prototype.values",function(o){return o||function(){return i(this,function(l,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function u(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function h(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function f(o,l,d){return o.call.apply(o.bind,arguments)}function m(o,l,d){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,g),o.apply(l,R)}}return function(){return o.apply(l,arguments)}}function y(o,l,d){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,y.apply(null,arguments)}function E(o,l){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function P(o,l){function d(){}d.prototype=l.prototype,o.aa=l.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(g,R,C){for(var B=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)B[pe-2]=arguments[pe];return l.prototype[R].apply(g,B)}}function x(o){const l=o.length;if(0<l){const d=Array(l);for(let g=0;g<l;g++)d[g]=o[g];return d}return[]}function w(o,l){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(u(g)){const R=o.length||0,C=g.length||0;o.length=R+C;for(let B=0;B<C;B++)o[R+B]=g[B]}else o.push(g)}}class M{constructor(l,d){this.i=l,this.j=d,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function U(o){return/^[\s\xa0]*$/.test(o)}function z(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function G(o){return G[" "](o),o}G[" "]=function(){};var ae=z().indexOf("Gecko")!=-1&&!(z().toLowerCase().indexOf("webkit")!=-1&&z().indexOf("Edge")==-1)&&!(z().indexOf("Trident")!=-1||z().indexOf("MSIE")!=-1)&&z().indexOf("Edge")==-1;function ue(o,l,d){for(const g in o)l.call(d,o[g],g,o)}function S(o,l){for(const d in o)l.call(void 0,o[d],d,o)}function _(o){const l={};for(const d in o)l[d]=o[d];return l}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,l){let d,g;for(let R=1;R<arguments.length;R++){g=arguments[R];for(d in g)o[d]=g[d];for(let C=0;C<I.length;C++)d=I[C],Object.prototype.hasOwnProperty.call(g,d)&&(o[d]=g[d])}}function A(o){var l=1;o=o.split(":");const d=[];for(;0<l&&o.length;)d.push(o.shift()),l--;return o.length&&d.push(o.join(":")),d}function b(o){c.setTimeout(()=>{throw o},0)}function v(){var o=hn;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class re{constructor(){this.h=this.g=null}add(l,d){const g=J.get();g.set(l,d),this.h?this.h.next=g:this.g=g,this.h=g}}var J=new M(()=>new ke,o=>o.reset());class ke{constructor(){this.next=this.g=this.h=null}set(l,d){this.h=l,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let fe,rt=!1,hn=new re,j=()=>{const o=c.Promise.resolve(void 0);fe=()=>{o.then(D)}};var D=()=>{for(var o;o=v();){try{o.h.call(o.g)}catch(d){b(d)}var l=J;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}rt=!1};function F(){this.s=this.s,this.C=this.C}F.prototype.s=!1,F.prototype.ma=function(){this.s||(this.s=!0,this.N())},F.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function L(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}L.prototype.h=function(){this.defaultPrevented=!0};var V=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};c.addEventListener("test",d,l),c.removeEventListener("test",d,l)}catch{}return o}();function ne(o,l){if(L.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(ae){e:{try{G(l.nodeName);var R=!0;break e}catch{}R=!1}R||(l=null)}}else d=="mouseover"?l=o.fromElement:d=="mouseout"&&(l=o.toElement);this.relatedTarget=l,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:mo[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&ne.aa.h.call(this)}}P(ne,L);var mo={2:"touch",3:"pen",4:"mouse"};ne.prototype.h=function(){ne.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var dn="closure_listenable_"+(1e6*Math.random()|0),st=0;function go(o,l,d,g,R){this.listener=o,this.proxy=null,this.src=l,this.type=d,this.capture=!!g,this.ha=R,this.key=++st,this.da=this.fa=!1}function Et(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Is(o){this.src=o,this.g={},this.h=0}Is.prototype.add=function(o,l,d,g,R){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var B=_o(o,l,g,R);return-1<B?(l=o[B],d||(l.fa=!1)):(l=new go(l,this.src,C,!!g,R),l.fa=d,o.push(l)),l};function yo(o,l){var d=l.type;if(d in o.g){var g=o.g[d],R=Array.prototype.indexOf.call(g,l,void 0),C;(C=0<=R)&&Array.prototype.splice.call(g,R,1),C&&(Et(l),o.g[d].length==0&&(delete o.g[d],o.h--))}}function _o(o,l,d,g){for(var R=0;R<o.length;++R){var C=o[R];if(!C.da&&C.listener==l&&C.capture==!!d&&C.ha==g)return R}return-1}var vo="closure_lm_"+(1e6*Math.random()|0),Io={};function Wc(o,l,d,g,R){if(g&&g.once)return Gc(o,l,d,g,R);if(Array.isArray(l)){for(var C=0;C<l.length;C++)Wc(o,l[C],d,g,R);return null}return d=So(d),o&&o[dn]?o.K(l,d,h(g)?!!g.capture:!!g,R):Hc(o,l,d,!1,g,R)}function Hc(o,l,d,g,R,C){if(!l)throw Error("Invalid event type");var B=h(R)?!!R.capture:!!R,pe=wo(o);if(pe||(o[vo]=pe=new Is(o)),d=pe.add(l,d,g,B,C),d.proxy)return d;if(g=Pp(),d.proxy=g,g.src=o,g.listener=d,o.addEventListener)V||(R=B),R===void 0&&(R=!1),o.addEventListener(l.toString(),g,R);else if(o.attachEvent)o.attachEvent(Qc(l.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Pp(){function o(d){return l.call(o.src,o.listener,d)}const l=kp;return o}function Gc(o,l,d,g,R){if(Array.isArray(l)){for(var C=0;C<l.length;C++)Gc(o,l[C],d,g,R);return null}return d=So(d),o&&o[dn]?o.L(l,d,h(g)?!!g.capture:!!g,R):Hc(o,l,d,!0,g,R)}function Kc(o,l,d,g,R){if(Array.isArray(l))for(var C=0;C<l.length;C++)Kc(o,l[C],d,g,R);else g=h(g)?!!g.capture:!!g,d=So(d),o&&o[dn]?(o=o.i,l=String(l).toString(),l in o.g&&(C=o.g[l],d=_o(C,d,g,R),-1<d&&(Et(C[d]),Array.prototype.splice.call(C,d,1),C.length==0&&(delete o.g[l],o.h--)))):o&&(o=wo(o))&&(l=o.g[l.toString()],o=-1,l&&(o=_o(l,d,g,R)),(d=-1<o?l[o]:null)&&Eo(d))}function Eo(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[dn])yo(l.i,o);else{var d=o.type,g=o.proxy;l.removeEventListener?l.removeEventListener(d,g,o.capture):l.detachEvent?l.detachEvent(Qc(d),g):l.addListener&&l.removeListener&&l.removeListener(g),(d=wo(l))?(yo(d,o),d.h==0&&(d.src=null,l[vo]=null)):Et(o)}}}function Qc(o){return o in Io?Io[o]:Io[o]="on"+o}function kp(o,l){if(o.da)o=!0;else{l=new ne(l,this);var d=o.listener,g=o.ha||o.src;o.fa&&Eo(o),o=d.call(g,l)}return o}function wo(o){return o=o[vo],o instanceof Is?o:null}var To="__closure_events_fn_"+(1e9*Math.random()>>>0);function So(o){return typeof o=="function"?o:(o[To]||(o[To]=function(l){return o.handleEvent(l)}),o[To])}function Me(){F.call(this),this.i=new Is(this),this.M=this,this.F=null}P(Me,F),Me.prototype[dn]=!0,Me.prototype.removeEventListener=function(o,l,d,g){Kc(this,o,l,d,g)};function We(o,l){var d,g=o.F;if(g)for(d=[];g;g=g.F)d.push(g);if(o=o.M,g=l.type||l,typeof l=="string")l=new L(l,o);else if(l instanceof L)l.target=l.target||o;else{var R=l;l=new L(g,o),T(l,R)}if(R=!0,d)for(var C=d.length-1;0<=C;C--){var B=l.g=d[C];R=Es(B,g,!0,l)&&R}if(B=l.g=o,R=Es(B,g,!0,l)&&R,R=Es(B,g,!1,l)&&R,d)for(C=0;C<d.length;C++)B=l.g=d[C],R=Es(B,g,!1,l)&&R}Me.prototype.N=function(){if(Me.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var d=o.g[l],g=0;g<d.length;g++)Et(d[g]);delete o.g[l],o.h--}}this.F=null},Me.prototype.K=function(o,l,d,g){return this.i.add(String(o),l,!1,d,g)},Me.prototype.L=function(o,l,d,g){return this.i.add(String(o),l,!0,d,g)};function Es(o,l,d,g){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var R=!0,C=0;C<l.length;++C){var B=l[C];if(B&&!B.da&&B.capture==d){var pe=B.listener,De=B.ha||B.src;B.fa&&yo(o.i,B),R=pe.call(De,g)!==!1&&R}}return R&&!g.defaultPrevented}function Jc(o,l,d){if(typeof o=="function")d&&(o=y(o,d));else if(o&&typeof o.handleEvent=="function")o=y(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(o,l||0)}function Yc(o){o.g=Jc(()=>{o.g=null,o.i&&(o.i=!1,Yc(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class Dp extends F{constructor(l,d){super(),this.m=l,this.l=d,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Yc(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function wr(o){F.call(this),this.h=o,this.g={}}P(wr,F);var Xc=[];function Zc(o){ue(o.g,function(l,d){this.g.hasOwnProperty(d)&&Eo(l)},o),o.g={}}wr.prototype.N=function(){wr.aa.N.call(this),Zc(this)},wr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ao=c.JSON.stringify,Vp=c.JSON.parse,Np=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function bo(){}bo.prototype.h=null;function el(o){return o.h||(o.h=o.i())}function tl(){}var Tr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ro(){L.call(this,"d")}P(Ro,L);function xo(){L.call(this,"c")}P(xo,L);var fn={},nl=null;function ws(){return nl=nl||new Me}fn.La="serverreachability";function rl(o){L.call(this,fn.La,o)}P(rl,L);function Sr(o){const l=ws();We(l,new rl(l))}fn.STAT_EVENT="statevent";function sl(o,l){L.call(this,fn.STAT_EVENT,o),this.stat=l}P(sl,L);function He(o){const l=ws();We(l,new sl(l,o))}fn.Ma="timingevent";function il(o,l){L.call(this,fn.Ma,o),this.size=l}P(il,L);function Ar(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},l)}function br(){this.g=!0}br.prototype.xa=function(){this.g=!1};function Op(o,l,d,g,R,C){o.info(function(){if(o.g)if(C)for(var B="",pe=C.split("&"),De=0;De<pe.length;De++){var le=pe[De].split("=");if(1<le.length){var je=le[0];le=le[1];var Fe=je.split("_");B=2<=Fe.length&&Fe[1]=="type"?B+(je+"="+le+"&"):B+(je+"=redacted&")}}else B=null;else B=C;return"XMLHTTP REQ ("+g+") [attempt "+R+"]: "+l+`
`+d+`
`+B})}function Mp(o,l,d,g,R,C,B){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+R+"]: "+l+`
`+d+`
`+C+" "+B})}function Un(o,l,d,g){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+Fp(o,d)+(g?" "+g:"")})}function jp(o,l){o.info(function(){return"TIMEOUT: "+l})}br.prototype.info=function(){};function Fp(o,l){if(!o.g)return l;if(!l)return null;try{var d=JSON.parse(l);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var g=d[o];if(!(2>g.length)){var R=g[1];if(Array.isArray(R)&&!(1>R.length)){var C=R[0];if(C!="noop"&&C!="stop"&&C!="close")for(var B=1;B<R.length;B++)R[B]=""}}}}return Ao(d)}catch{return l}}var Ts={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ol={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Co;function Ss(){}P(Ss,bo),Ss.prototype.g=function(){return new XMLHttpRequest},Ss.prototype.i=function(){return{}},Co=new Ss;function Lt(o,l,d,g){this.j=o,this.i=l,this.l=d,this.R=g||1,this.U=new wr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new al}function al(){this.i=null,this.g="",this.h=!1}var cl={},Po={};function ko(o,l,d){o.L=1,o.v=xs(wt(l)),o.m=d,o.P=!0,ll(o,null)}function ll(o,l){o.F=Date.now(),As(o),o.A=wt(o.v);var d=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),Tl(d.i,"t",g),o.C=0,d=o.j.J,o.h=new al,o.g=Bl(o.j,d?l:null,!o.m),0<o.O&&(o.M=new Dp(y(o.Y,o,o.g),o.O)),l=o.U,d=o.g,g=o.ca;var R="readystatechange";Array.isArray(R)||(R&&(Xc[0]=R.toString()),R=Xc);for(var C=0;C<R.length;C++){var B=Wc(d,R[C],g||l.handleEvent,!1,l.h||l);if(!B)break;l.g[B.key]=B}l=o.H?_(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),Sr(),Op(o.i,o.u,o.A,o.l,o.R,o.m)}Lt.prototype.ca=function(o){o=o.target;const l=this.M;l&&Tt(o)==3?l.j():this.Y(o)},Lt.prototype.Y=function(o){try{if(o==this.g)e:{const Fe=Tt(this.g);var l=this.g.Ba();const zn=this.g.Z();if(!(3>Fe)&&(Fe!=3||this.g&&(this.h.h||this.g.oa()||Pl(this.g)))){this.J||Fe!=4||l==7||(l==8||0>=zn?Sr(3):Sr(2)),Do(this);var d=this.g.Z();this.X=d;t:if(ul(this)){var g=Pl(this.g);o="";var R=g.length,C=Tt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){pn(this),Rr(this);var B="";break t}this.h.i=new c.TextDecoder}for(l=0;l<R;l++)this.h.h=!0,o+=this.h.i.decode(g[l],{stream:!(C&&l==R-1)});g.length=0,this.h.g+=o,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=d==200,Mp(this.i,this.u,this.A,this.l,this.R,Fe,d),this.o){if(this.T&&!this.K){t:{if(this.g){var pe,De=this.g;if((pe=De.g?De.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(pe)){var le=pe;break t}}le=null}if(d=le)Un(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Vo(this,d);else{this.o=!1,this.s=3,He(12),pn(this),Rr(this);break e}}if(this.P){d=!0;let it;for(;!this.J&&this.C<B.length;)if(it=Lp(this,B),it==Po){Fe==4&&(this.s=4,He(14),d=!1),Un(this.i,this.l,null,"[Incomplete Response]");break}else if(it==cl){this.s=4,He(15),Un(this.i,this.l,B,"[Invalid Chunk]"),d=!1;break}else Un(this.i,this.l,it,null),Vo(this,it);if(ul(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Fe!=4||B.length!=0||this.h.h||(this.s=1,He(16),d=!1),this.o=this.o&&d,!d)Un(this.i,this.l,B,"[Invalid Chunked Response]"),pn(this),Rr(this);else if(0<B.length&&!this.W){this.W=!0;var je=this.j;je.g==this&&je.ba&&!je.M&&(je.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),Lo(je),je.M=!0,He(11))}}else Un(this.i,this.l,B,null),Vo(this,B);Fe==4&&pn(this),this.o&&!this.J&&(Fe==4?jl(this.j,this):(this.o=!1,As(this)))}else nm(this.g),d==400&&0<B.indexOf("Unknown SID")?(this.s=3,He(12)):(this.s=0,He(13)),pn(this),Rr(this)}}}catch{}finally{}};function ul(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Lp(o,l){var d=o.C,g=l.indexOf(`
`,d);return g==-1?Po:(d=Number(l.substring(d,g)),isNaN(d)?cl:(g+=1,g+d>l.length?Po:(l=l.slice(g,g+d),o.C=g+d,l)))}Lt.prototype.cancel=function(){this.J=!0,pn(this)};function As(o){o.S=Date.now()+o.I,hl(o,o.I)}function hl(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Ar(y(o.ba,o),l)}function Do(o){o.B&&(c.clearTimeout(o.B),o.B=null)}Lt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(jp(this.i,this.A),this.L!=2&&(Sr(),He(17)),pn(this),this.s=2,Rr(this)):hl(this,this.S-o)};function Rr(o){o.j.G==0||o.J||jl(o.j,o)}function pn(o){Do(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,Zc(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function Vo(o,l){try{var d=o.j;if(d.G!=0&&(d.g==o||No(d.h,o))){if(!o.K&&No(d.h,o)&&d.G==3){try{var g=d.Da.g.parse(l)}catch{g=null}if(Array.isArray(g)&&g.length==3){var R=g;if(R[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Ns(d),Ds(d);else break e;Fo(d),He(18)}}else d.za=R[1],0<d.za-d.T&&37500>R[2]&&d.F&&d.v==0&&!d.C&&(d.C=Ar(y(d.Za,d),6e3));if(1>=pl(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else gn(d,11)}else if((o.K||d.g==o)&&Ns(d),!U(l))for(R=d.Da.g.parse(l),l=0;l<R.length;l++){let le=R[l];if(d.T=le[0],le=le[1],d.G==2)if(le[0]=="c"){d.K=le[1],d.ia=le[2];const je=le[3];je!=null&&(d.la=je,d.j.info("VER="+d.la));const Fe=le[4];Fe!=null&&(d.Aa=Fe,d.j.info("SVER="+d.Aa));const zn=le[5];zn!=null&&typeof zn=="number"&&0<zn&&(g=1.5*zn,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const it=o.g;if(it){const Ms=it.g?it.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ms){var C=g.h;C.g||Ms.indexOf("spdy")==-1&&Ms.indexOf("quic")==-1&&Ms.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Oo(C,C.h),C.h=null))}if(g.D){const Uo=it.g?it.g.getResponseHeader("X-HTTP-Session-Id"):null;Uo&&(g.ya=Uo,ye(g.I,g.D,Uo))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var B=o;if(g.qa=Ul(g,g.J?g.ia:null,g.W),B.K){ml(g.h,B);var pe=B,De=g.L;De&&(pe.I=De),pe.B&&(Do(pe),As(pe)),g.g=B}else Ol(g);0<d.i.length&&Vs(d)}else le[0]!="stop"&&le[0]!="close"||gn(d,7);else d.G==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?gn(d,7):jo(d):le[0]!="noop"&&d.l&&d.l.ta(le),d.v=0)}}Sr(4)}catch{}}var Up=class{constructor(o,l){this.g=o,this.map=l}};function dl(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function fl(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function pl(o){return o.h?1:o.g?o.g.size:0}function No(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function Oo(o,l){o.g?o.g.add(l):o.h=l}function ml(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}dl.prototype.cancel=function(){if(this.i=gl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function gl(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const d of o.g.values())l=l.concat(d.D);return l}return x(o.i)}function Bp(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var l=[],d=o.length,g=0;g<d;g++)l.push(o[g]);return l}l=[],d=0;for(g in o)l[d++]=o[g];return l}function $p(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var l=[];o=o.length;for(var d=0;d<o;d++)l.push(d);return l}l=[],d=0;for(const g in o)l[d++]=g;return l}}}function yl(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var d=$p(o),g=Bp(o),R=g.length,C=0;C<R;C++)l.call(void 0,g[C],d&&d[C],o)}var _l=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function zp(o,l){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var g=o[d].indexOf("="),R=null;if(0<=g){var C=o[d].substring(0,g);R=o[d].substring(g+1)}else C=o[d];l(C,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function mn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof mn){this.h=o.h,bs(this,o.j),this.o=o.o,this.g=o.g,Rs(this,o.s),this.l=o.l;var l=o.i,d=new Pr;d.i=l.i,l.g&&(d.g=new Map(l.g),d.h=l.h),vl(this,d),this.m=o.m}else o&&(l=String(o).match(_l))?(this.h=!1,bs(this,l[1]||"",!0),this.o=xr(l[2]||""),this.g=xr(l[3]||"",!0),Rs(this,l[4]),this.l=xr(l[5]||"",!0),vl(this,l[6]||"",!0),this.m=xr(l[7]||"")):(this.h=!1,this.i=new Pr(null,this.h))}mn.prototype.toString=function(){var o=[],l=this.j;l&&o.push(Cr(l,Il,!0),":");var d=this.g;return(d||l=="file")&&(o.push("//"),(l=this.o)&&o.push(Cr(l,Il,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Cr(d,d.charAt(0)=="/"?Hp:Wp,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Cr(d,Kp)),o.join("")};function wt(o){return new mn(o)}function bs(o,l,d){o.j=d?xr(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function Rs(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function vl(o,l,d){l instanceof Pr?(o.i=l,Qp(o.i,o.h)):(d||(l=Cr(l,Gp)),o.i=new Pr(l,o.h))}function ye(o,l,d){o.i.set(l,d)}function xs(o){return ye(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function xr(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Cr(o,l,d){return typeof o=="string"?(o=encodeURI(o).replace(l,qp),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function qp(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Il=/[#\/\?@]/g,Wp=/[#\?:]/g,Hp=/[#\?]/g,Gp=/[#\?@]/g,Kp=/#/g;function Pr(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function Ut(o){o.g||(o.g=new Map,o.h=0,o.i&&zp(o.i,function(l,d){o.add(decodeURIComponent(l.replace(/\+/g," ")),d)}))}n=Pr.prototype,n.add=function(o,l){Ut(this),this.i=null,o=Bn(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(l),this.h+=1,this};function El(o,l){Ut(o),l=Bn(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function wl(o,l){return Ut(o),l=Bn(o,l),o.g.has(l)}n.forEach=function(o,l){Ut(this),this.g.forEach(function(d,g){d.forEach(function(R){o.call(l,R,g,this)},this)},this)},n.na=function(){Ut(this);const o=Array.from(this.g.values()),l=Array.from(this.g.keys()),d=[];for(let g=0;g<l.length;g++){const R=o[g];for(let C=0;C<R.length;C++)d.push(l[g])}return d},n.V=function(o){Ut(this);let l=[];if(typeof o=="string")wl(this,o)&&(l=l.concat(this.g.get(Bn(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)l=l.concat(o[d])}return l},n.set=function(o,l){return Ut(this),this.i=null,o=Bn(this,o),wl(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function Tl(o,l,d){El(o,l),0<d.length&&(o.i=null,o.g.set(Bn(o,l),x(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(var d=0;d<l.length;d++){var g=l[d];const C=encodeURIComponent(String(g)),B=this.V(g);for(g=0;g<B.length;g++){var R=C;B[g]!==""&&(R+="="+encodeURIComponent(String(B[g]))),o.push(R)}}return this.i=o.join("&")};function Bn(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function Qp(o,l){l&&!o.j&&(Ut(o),o.i=null,o.g.forEach(function(d,g){var R=g.toLowerCase();g!=R&&(El(this,g),Tl(this,R,d))},o)),o.j=l}function Jp(o,l){const d=new br;if(c.Image){const g=new Image;g.onload=E(Bt,d,"TestLoadImage: loaded",!0,l,g),g.onerror=E(Bt,d,"TestLoadImage: error",!1,l,g),g.onabort=E(Bt,d,"TestLoadImage: abort",!1,l,g),g.ontimeout=E(Bt,d,"TestLoadImage: timeout",!1,l,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else l(!1)}function Yp(o,l){const d=new br,g=new AbortController,R=setTimeout(()=>{g.abort(),Bt(d,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:g.signal}).then(C=>{clearTimeout(R),C.ok?Bt(d,"TestPingServer: ok",!0,l):Bt(d,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(R),Bt(d,"TestPingServer: error",!1,l)})}function Bt(o,l,d,g,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),g(d)}catch{}}function Xp(){this.g=new Np}function Zp(o,l,d){const g=d||"";try{yl(o,function(R,C){let B=R;h(R)&&(B=Ao(R)),l.push(g+C+"="+encodeURIComponent(B))})}catch(R){throw l.push(g+"type="+encodeURIComponent("_badmap")),R}}function Cs(o){this.l=o.Ub||null,this.j=o.eb||!1}P(Cs,bo),Cs.prototype.g=function(){return new Ps(this.l,this.j)},Cs.prototype.i=function(o){return function(){return o}}({});function Ps(o,l){Me.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Ps,Me),n=Ps.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,Dr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,kr(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Dr(this)),this.g&&(this.readyState=3,Dr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Sl(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Sl(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?kr(this):Dr(this),this.readyState==3&&Sl(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,kr(this))},n.Qa=function(o){this.g&&(this.response=o,kr(this))},n.ga=function(){this.g&&kr(this)};function kr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Dr(o)}n.setRequestHeader=function(o,l){this.u.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var d=l.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=l.next();return o.join(`\r
`)};function Dr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Ps.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Al(o){let l="";return ue(o,function(d,g){l+=g,l+=":",l+=d,l+=`\r
`}),l}function Mo(o,l,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Al(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):ye(o,l,d))}function ve(o){Me.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(ve,Me);var em=/^https?$/i,tm=["POST","PUT"];n=ve.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,l,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Co.g(),this.v=this.o?el(this.o):el(Co),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(C){bl(this,C);return}if(o=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var R in g)d.set(R,g[R]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const C of g.keys())d.set(C,g.get(C));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(C=>C.toLowerCase()=="content-type"),R=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(tm,l,void 0))||g||R||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,B]of d)this.g.setRequestHeader(C,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Cl(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){bl(this,C)}};function bl(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,Rl(o),ks(o)}function Rl(o){o.A||(o.A=!0,We(o,"complete"),We(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,We(this,"complete"),We(this,"abort"),ks(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ks(this,!0)),ve.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?xl(this):this.bb())},n.bb=function(){xl(this)};function xl(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Tt(o)!=4||o.Z()!=2)){if(o.u&&Tt(o)==4)Jc(o.Ea,0,o);else if(We(o,"readystatechange"),Tt(o)==4){o.h=!1;try{const B=o.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var d;if(!(d=l)){var g;if(g=B===0){var R=String(o.D).match(_l)[1]||null;!R&&c.self&&c.self.location&&(R=c.self.location.protocol.slice(0,-1)),g=!em.test(R?R.toLowerCase():"")}d=g}if(d)We(o,"complete"),We(o,"success");else{o.m=6;try{var C=2<Tt(o)?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.Z()+"]",Rl(o)}}finally{ks(o)}}}}function ks(o,l){if(o.g){Cl(o);const d=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||We(o,"ready");try{d.onreadystatechange=g}catch{}}}function Cl(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Tt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Tt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),Vp(l)}};function Pl(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function nm(o){const l={};o=(o.g&&2<=Tt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(U(o[g]))continue;var d=A(o[g]);const R=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const C=l[R]||[];l[R]=C,C.push(d)}S(l,function(g){return g.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Vr(o,l,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||l}function kl(o){this.Aa=0,this.i=[],this.j=new br,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Vr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Vr("baseRetryDelayMs",5e3,o),this.cb=Vr("retryDelaySeedMs",1e4,o),this.Wa=Vr("forwardChannelMaxRetries",2,o),this.wa=Vr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new dl(o&&o.concurrentRequestLimit),this.Da=new Xp,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=kl.prototype,n.la=8,n.G=1,n.connect=function(o,l,d,g){He(0),this.W=o,this.H=l||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=Ul(this,null,this.W),Vs(this)};function jo(o){if(Dl(o),o.G==3){var l=o.U++,d=wt(o.I);if(ye(d,"SID",o.K),ye(d,"RID",l),ye(d,"TYPE","terminate"),Nr(o,d),l=new Lt(o,o.j,l),l.L=2,l.v=xs(wt(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=l.v,d=!0),d||(l.g=Bl(l.j,null),l.g.ea(l.v)),l.F=Date.now(),As(l)}Ll(o)}function Ds(o){o.g&&(Lo(o),o.g.cancel(),o.g=null)}function Dl(o){Ds(o),o.u&&(c.clearTimeout(o.u),o.u=null),Ns(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function Vs(o){if(!fl(o.h)&&!o.s){o.s=!0;var l=o.Ga;fe||j(),rt||(fe(),rt=!0),hn.add(l,o),o.B=0}}function rm(o,l){return pl(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Ar(y(o.Ga,o,l),Fl(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const R=new Lt(this,this.j,o);let C=this.o;if(this.S&&(C?(C=_(C),T(C,this.S)):C=this.S),this.m!==null||this.O||(R.H=C,C=null),this.P)e:{for(var l=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(l+=g,4096<l){l=d;break e}if(l===4096||d===this.i.length-1){l=d+1;break e}}l=1e3}else l=1e3;l=Nl(this,R,l),d=wt(this.I),ye(d,"RID",o),ye(d,"CVER",22),this.D&&ye(d,"X-HTTP-Session-Id",this.D),Nr(this,d),C&&(this.O?l="headers="+encodeURIComponent(String(Al(C)))+"&"+l:this.m&&Mo(d,this.m,C)),Oo(this.h,R),this.Ua&&ye(d,"TYPE","init"),this.P?(ye(d,"$req",l),ye(d,"SID","null"),R.T=!0,ko(R,d,null)):ko(R,d,l),this.G=2}}else this.G==3&&(o?Vl(this,o):this.i.length==0||fl(this.h)||Vl(this))};function Vl(o,l){var d;l?d=l.l:d=o.U++;const g=wt(o.I);ye(g,"SID",o.K),ye(g,"RID",d),ye(g,"AID",o.T),Nr(o,g),o.m&&o.o&&Mo(g,o.m,o.o),d=new Lt(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),l&&(o.i=l.D.concat(o.i)),l=Nl(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Oo(o.h,d),ko(d,g,l)}function Nr(o,l){o.H&&ue(o.H,function(d,g){ye(l,g,d)}),o.l&&yl({},function(d,g){ye(l,g,d)})}function Nl(o,l,d){d=Math.min(o.i.length,d);var g=o.l?y(o.l.Na,o.l,o):null;e:{var R=o.i;let C=-1;for(;;){const B=["count="+d];C==-1?0<d?(C=R[0].g,B.push("ofs="+C)):C=0:B.push("ofs="+C);let pe=!0;for(let De=0;De<d;De++){let le=R[De].g;const je=R[De].map;if(le-=C,0>le)C=Math.max(0,R[De].g-100),pe=!1;else try{Zp(je,B,"req"+le+"_")}catch{g&&g(je)}}if(pe){g=B.join("&");break e}}}return o=o.i.splice(0,d),l.D=o,g}function Ol(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;fe||j(),rt||(fe(),rt=!0),hn.add(l,o),o.v=0}}function Fo(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Ar(y(o.Fa,o),Fl(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Ml(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Ar(y(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,He(10),Ds(this),Ml(this))};function Lo(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function Ml(o){o.g=new Lt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=wt(o.qa);ye(l,"RID","rpc"),ye(l,"SID",o.K),ye(l,"AID",o.T),ye(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&ye(l,"TO",o.ja),ye(l,"TYPE","xmlhttp"),Nr(o,l),o.m&&o.o&&Mo(l,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=xs(wt(l)),d.m=null,d.P=!0,ll(d,o)}n.Za=function(){this.C!=null&&(this.C=null,Ds(this),Fo(this),He(19))};function Ns(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function jl(o,l){var d=null;if(o.g==l){Ns(o),Lo(o),o.g=null;var g=2}else if(No(o.h,l))d=l.D,ml(o.h,l),g=1;else return;if(o.G!=0){if(l.o)if(g==1){d=l.m?l.m.length:0,l=Date.now()-l.F;var R=o.B;g=ws(),We(g,new il(g,d)),Vs(o)}else Ol(o);else if(R=l.s,R==3||R==0&&0<l.X||!(g==1&&rm(o,l)||g==2&&Fo(o)))switch(d&&0<d.length&&(l=o.h,l.i=l.i.concat(d)),R){case 1:gn(o,5);break;case 4:gn(o,10);break;case 3:gn(o,6);break;default:gn(o,2)}}}function Fl(o,l){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*l}function gn(o,l){if(o.j.info("Error code "+l),l==2){var d=y(o.fb,o),g=o.Xa;const R=!g;g=new mn(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||bs(g,"https"),xs(g),R?Jp(g.toString(),d):Yp(g.toString(),d)}else He(2);o.G=0,o.l&&o.l.sa(l),Ll(o),Dl(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),He(2)):(this.j.info("Failed to ping google.com"),He(1))};function Ll(o){if(o.G=0,o.ka=[],o.l){const l=gl(o.h);(l.length!=0||o.i.length!=0)&&(w(o.ka,l),w(o.ka,o.i),o.h.i.length=0,x(o.i),o.i.length=0),o.l.ra()}}function Ul(o,l,d){var g=d instanceof mn?wt(d):new mn(d);if(g.g!="")l&&(g.g=l+"."+g.g),Rs(g,g.s);else{var R=c.location;g=R.protocol,l=l?l+"."+R.hostname:R.hostname,R=+R.port;var C=new mn(null);g&&bs(C,g),l&&(C.g=l),R&&Rs(C,R),d&&(C.l=d),g=C}return d=o.D,l=o.ya,d&&l&&ye(g,d,l),ye(g,"VER",o.la),Nr(o,g),g}function Bl(o,l,d){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new ve(new Cs({eb:d})):new ve(o.pa),l.Ha(o.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function $l(){}n=$l.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Os(){}Os.prototype.g=function(o,l){return new Xe(o,l)};function Xe(o,l){Me.call(this),this.g=new kl(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!U(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!U(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new $n(this)}P(Xe,Me),Xe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Xe.prototype.close=function(){jo(this.g)},Xe.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=Ao(o),o=d);l.i.push(new Up(l.Ya++,o)),l.G==3&&Vs(l)},Xe.prototype.N=function(){this.g.l=null,delete this.j,jo(this.g),delete this.g,Xe.aa.N.call(this)};function zl(o){Ro.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const d in l){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}P(zl,Ro);function ql(){xo.call(this),this.status=1}P(ql,xo);function $n(o){this.g=o}P($n,$l),$n.prototype.ua=function(){We(this.g,"a")},$n.prototype.ta=function(o){We(this.g,new zl(o))},$n.prototype.sa=function(o){We(this.g,new ql)},$n.prototype.ra=function(){We(this.g,"b")},Os.prototype.createWebChannel=Os.prototype.g,Xe.prototype.send=Xe.prototype.o,Xe.prototype.open=Xe.prototype.m,Xe.prototype.close=Xe.prototype.close,md=function(){return new Os},pd=function(){return ws()},fd=fn,ma={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ts.NO_ERROR=0,Ts.TIMEOUT=8,Ts.HTTP_ERROR=6,Js=Ts,ol.COMPLETE="complete",dd=ol,tl.EventType=Tr,Tr.OPEN="a",Tr.CLOSE="b",Tr.ERROR="c",Tr.MESSAGE="d",Me.prototype.listen=Me.prototype.K,jr=tl,ve.prototype.listenOnce=ve.prototype.L,ve.prototype.getLastError=ve.prototype.Ka,ve.prototype.getLastErrorCode=ve.prototype.Ba,ve.prototype.getStatus=ve.prototype.Z,ve.prototype.getResponseJson=ve.prototype.Oa,ve.prototype.getResponseText=ve.prototype.oa,ve.prototype.send=ve.prototype.ea,ve.prototype.setWithCredentials=ve.prototype.Ha,hd=ve}).apply(typeof $s<"u"?$s:typeof self<"u"?self:typeof window<"u"?window:{});const _u="@firebase/firestore",vu="4.9.0";/**
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
 */class Be{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Be.UNAUTHENTICATED=new Be(null),Be.GOOGLE_CREDENTIALS=new Be("google-credentials-uid"),Be.FIRST_PARTY=new Be("first-party-uid"),Be.MOCK_USER=new Be("mock-user");/**
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
 */const Nn=new $a("@firebase/firestore");function Kn(){return Nn.logLevel}function q(n,...e){if(Nn.logLevel<=se.DEBUG){const t=e.map(Wa);Nn.debug(`Firestore (${gr}): ${n}`,...t)}}function Dt(n,...e){if(Nn.logLevel<=se.ERROR){const t=e.map(Wa);Nn.error(`Firestore (${gr}): ${n}`,...t)}}function ir(n,...e){if(Nn.logLevel<=se.WARN){const t=e.map(Wa);Nn.warn(`Firestore (${gr}): ${n}`,...t)}}function Wa(n){if(typeof n=="string")return n;try{/**
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
 */function Y(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,gd(n,r,t)}function gd(n,e,t){let r=`FIRESTORE (${gr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Dt(r),new Error(r)}function de(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||gd(e,s,r)}function te(n,e){return n}/**
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
 */class yd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class N_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Be.UNAUTHENTICATED))}shutdown(){}}class O_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class M_{constructor(e){this.t=e,this.currentUser=Be.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){de(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new Pt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Pt,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},c=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Pt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(de(typeof r.accessToken=="string",31837,{l:r}),new yd(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return de(e===null||typeof e=="string",2055,{h:e}),new Be(e)}}class j_{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Be.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class F_{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new j_(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Be.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Iu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class L_{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,at(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){de(this.o===void 0,3512);const r=i=>{i.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,q("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Iu(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(de(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Iu(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function U_(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Ha{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=U_(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function ie(n,e){return n<e?-1:n>e?1:0}function ga(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return Ko(s)===Ko(i)?ie(s,i):Ko(s)?1:-1}return ie(n.length,e.length)}const B_=55296,$_=57343;function Ko(n){const e=n.charCodeAt(0);return e>=B_&&e<=$_}function or(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */const Eu="__name__";class ft{constructor(e,t,r){t===void 0?t=0:t>e.length&&Y(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&Y(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return ft.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ft?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=ft.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return ie(e.length,t.length)}static compareSegments(e,t){const r=ft.isNumericId(e),s=ft.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?ft.extractNumericId(e).compare(ft.extractNumericId(t)):ga(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Yt.fromString(e.substring(4,e.length-2))}}class ge extends ft{construct(e,t,r){return new ge(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(N.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new ge(t)}static emptyPath(){return new ge([])}}const z_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ne extends ft{construct(e,t,r){return new Ne(e,t,r)}static isValidIdentifier(e){return z_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ne.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Eu}static keyField(){return new Ne([Eu])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new $(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new $(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new $(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new $(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ne(t)}static emptyPath(){return new Ne([])}}/**
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
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(ge.fromString(e))}static fromName(e){return new Q(ge.fromString(e).popFirst(5))}static empty(){return new Q(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ge.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new ge(e.slice()))}}/**
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
 */function _d(n,e,t){if(!t)throw new $(N.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function q_(n,e,t,r){if(e===!0&&r===!0)throw new $(N.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function wu(n){if(!Q.isDocumentKey(n))throw new $(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Tu(n){if(Q.isDocumentKey(n))throw new $(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function vd(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Fi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Y(12329,{type:typeof n})}function Je(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new $(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Fi(n);throw new $(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function W_(n,e){if(e<=0)throw new $(N.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */function Ae(n,e){const t={typeString:n};return e&&(t.value=e),t}function hs(n,e){if(!vd(n))throw new $(N.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new $(N.INVALID_ARGUMENT,t);return!0}/**
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
 */const Su=-62135596800,Au=1e6;class he{static now(){return he.fromMillis(Date.now())}static fromDate(e){return he.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Au);return new he(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new $(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new $(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Su)throw new $(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Au}_compareTo(e){return this.seconds===e.seconds?ie(this.nanoseconds,e.nanoseconds):ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:he._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(hs(e,he._jsonSchema))return new he(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Su;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}he._jsonSchemaVersion="firestore/timestamp/1.0",he._jsonSchema={type:Ae("string",he._jsonSchemaVersion),seconds:Ae("number"),nanoseconds:Ae("number")};/**
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
 */class ee{static fromTimestamp(e){return new ee(e)}static min(){return new ee(new he(0,0))}static max(){return new ee(new he(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Zr=-1;function H_(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=ee.fromTimestamp(r===1e9?new he(t+1,0):new he(t,r));return new tn(s,Q.empty(),e)}function G_(n){return new tn(n.readTime,n.key,Zr)}class tn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new tn(ee.min(),Q.empty(),Zr)}static max(){return new tn(ee.max(),Q.empty(),Zr)}}function K_(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Q.comparator(n.documentKey,e.documentKey),t!==0?t:ie(n.largestBatchId,e.largestBatchId))}/**
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
 */const Q_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class J_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function yr(n){if(n.code!==N.FAILED_PRECONDITION||n.message!==Q_)throw n;q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Y(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new O((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof O?t:O.resolve(t)}catch(t){return O.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):O.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):O.reject(t)}static resolve(e){return new O((t,r)=>{t(e)})}static reject(e){return new O((t,r)=>{r(e)})}static waitFor(e){return new O((t,r)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&t()},u=>r(u))}),a=!0,i===s&&t()})}static or(e){let t=O.resolve(!1);for(const r of e)t=t.next(s=>s?O.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new O((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let u=0;u<i;u++){const h=u;t(e[h]).next(f=>{a[h]=f,++c,c===i&&r(a)},f=>s(f))}})}static doWhile(e,t){return new O((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function Y_(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function _r(n){return n.name==="IndexedDbTransactionError"}/**
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
 */const Ga=-1;function Ui(n){return n==null}function li(n){return n===0&&1/n==-1/0}function X_(n){return typeof n=="number"&&Number.isInteger(n)&&!li(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Id="";function Z_(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=bu(e)),e=ev(n.get(t),e);return bu(e)}function ev(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case Id:t+="";break;default:t+=i}}return t}function bu(n){return n+Id+""}/**
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
 */function Ru(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function cn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Ed(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class _e{constructor(e,t){this.comparator=e,this.root=t||Ve.EMPTY}insert(e,t){return new _e(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ve.BLACK,null,null))}remove(e){return new _e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ve.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new zs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new zs(this.root,e,this.comparator,!1)}getReverseIterator(){return new zs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new zs(this.root,e,this.comparator,!0)}}class zs{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ve{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Ve.RED,this.left=s??Ve.EMPTY,this.right=i??Ve.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Ve(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ve.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ve.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Y(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Y(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Y(27949);return e+(this.isRed()?0:1)}}Ve.EMPTY=null,Ve.RED=!0,Ve.BLACK=!1;Ve.EMPTY=new class{constructor(){this.size=0}get key(){throw Y(57766)}get value(){throw Y(16141)}get color(){throw Y(16727)}get left(){throw Y(29726)}get right(){throw Y(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Ve(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class xe{constructor(e){this.comparator=e,this.data=new _e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new xu(this.data.getIterator())}getIteratorFrom(e){return new xu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof xe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new xe(this.comparator);return t.data=e,t}}class xu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class et{constructor(e){this.fields=e,e.sort(Ne.comparator)}static empty(){return new et([])}unionWith(e){let t=new xe(Ne.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new et(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return or(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class wd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Oe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new wd("Invalid base64 string: "+i):i}}(e);return new Oe(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new Oe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Oe.EMPTY_BYTE_STRING=new Oe("");const tv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function nn(n){if(de(!!n,39018),typeof n=="string"){let e=0;const t=tv.exec(n);if(de(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ee(n.seconds),nanos:Ee(n.nanos)}}function Ee(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function rn(n){return typeof n=="string"?Oe.fromBase64String(n):Oe.fromUint8Array(n)}/**
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
 */const Td="server_timestamp",Sd="__type__",Ad="__previous_value__",bd="__local_write_time__";function Ka(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Sd])==null?void 0:r.stringValue)===Td}function Bi(n){const e=n.mapValue.fields[Ad];return Ka(e)?Bi(e):e}function es(n){const e=nn(n.mapValue.fields[bd].timestampValue);return new he(e.seconds,e.nanos)}/**
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
 */class nv{constructor(e,t,r,s,i,a,c,u,h,f){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f}}const ui="(default)";class ts{constructor(e,t){this.projectId=e,this.database=t||ui}static empty(){return new ts("","")}get isDefaultDatabase(){return this.database===ui}isEqual(e){return e instanceof ts&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Rd="__type__",xd="__max__",qs={mapValue:{fields:{__type__:{stringValue:xd}}}},Cd="__vector__",hi="value";function sn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ka(n)?4:sv(n)?9007199254740991:rv(n)?10:11:Y(28295,{value:n})}function vt(n,e){if(n===e)return!0;const t=sn(n);if(t!==sn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return es(n).isEqual(es(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=nn(s.timestampValue),c=nn(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return rn(s.bytesValue).isEqual(rn(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return Ee(s.geoPointValue.latitude)===Ee(i.geoPointValue.latitude)&&Ee(s.geoPointValue.longitude)===Ee(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ee(s.integerValue)===Ee(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Ee(s.doubleValue),c=Ee(i.doubleValue);return a===c?li(a)===li(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return or(n.arrayValue.values||[],e.arrayValue.values||[],vt);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Ru(a)!==Ru(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!vt(a[u],c[u])))return!1;return!0}(n,e);default:return Y(52216,{left:n})}}function ns(n,e){return(n.values||[]).find(t=>vt(t,e))!==void 0}function ar(n,e){if(n===e)return 0;const t=sn(n),r=sn(e);if(t!==r)return ie(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ie(n.booleanValue,e.booleanValue);case 2:return function(i,a){const c=Ee(i.integerValue||i.doubleValue),u=Ee(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(n,e);case 3:return Cu(n.timestampValue,e.timestampValue);case 4:return Cu(es(n),es(e));case 5:return ga(n.stringValue,e.stringValue);case 6:return function(i,a){const c=rn(i),u=rn(a);return c.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),u=a.split("/");for(let h=0;h<c.length&&h<u.length;h++){const f=ie(c[h],u[h]);if(f!==0)return f}return ie(c.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const c=ie(Ee(i.latitude),Ee(a.latitude));return c!==0?c:ie(Ee(i.longitude),Ee(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Pu(n.arrayValue,e.arrayValue);case 10:return function(i,a){var y,E,P,x;const c=i.fields||{},u=a.fields||{},h=(y=c[hi])==null?void 0:y.arrayValue,f=(E=u[hi])==null?void 0:E.arrayValue,m=ie(((P=h==null?void 0:h.values)==null?void 0:P.length)||0,((x=f==null?void 0:f.values)==null?void 0:x.length)||0);return m!==0?m:Pu(h,f)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===qs.mapValue&&a===qs.mapValue)return 0;if(i===qs.mapValue)return 1;if(a===qs.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),h=a.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const y=ga(u[m],f[m]);if(y!==0)return y;const E=ar(c[u[m]],h[f[m]]);if(E!==0)return E}return ie(u.length,f.length)}(n.mapValue,e.mapValue);default:throw Y(23264,{he:t})}}function Cu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ie(n,e);const t=nn(n),r=nn(e),s=ie(t.seconds,r.seconds);return s!==0?s:ie(t.nanos,r.nanos)}function Pu(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=ar(t[s],r[s]);if(i)return i}return ie(t.length,r.length)}function cr(n){return ya(n)}function ya(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=nn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return rn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return Q.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=ya(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${ya(t.fields[a])}`;return s+"}"}(n.mapValue):Y(61005,{value:n})}function Ys(n){switch(sn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Bi(n);return e?16+Ys(e):16;case 5:return 2*n.stringValue.length;case 6:return rn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ys(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return cn(r.fields,(i,a)=>{s+=i.length+Ys(a)}),s}(n.mapValue);default:throw Y(13486,{value:n})}}function ku(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function _a(n){return!!n&&"integerValue"in n}function Qa(n){return!!n&&"arrayValue"in n}function Du(n){return!!n&&"nullValue"in n}function Vu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Xs(n){return!!n&&"mapValue"in n}function rv(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Rd])==null?void 0:r.stringValue)===Cd}function zr(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return cn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=zr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=zr(n.arrayValue.values[t]);return e}return{...n}}function sv(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===xd}/**
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
 */class Qe{constructor(e){this.value=e}static empty(){return new Qe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Xs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=zr(t)}setAll(e){let t=Ne.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=zr(a):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Xs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return vt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Xs(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){cn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Qe(zr(this.value))}}function Pd(n){const e=[];return cn(n.fields,(t,r)=>{const s=new Ne([t]);if(Xs(r)){const i=Pd(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new et(e)}/**
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
 */class $e{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new $e(e,0,ee.min(),ee.min(),ee.min(),Qe.empty(),0)}static newFoundDocument(e,t,r,s){return new $e(e,1,t,ee.min(),r,s,0)}static newNoDocument(e,t){return new $e(e,2,t,ee.min(),ee.min(),Qe.empty(),0)}static newUnknownDocument(e,t){return new $e(e,3,t,ee.min(),ee.min(),Qe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Qe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Qe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof $e&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new $e(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class di{constructor(e,t){this.position=e,this.inclusive=t}}function Nu(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=Q.comparator(Q.fromName(a.referenceValue),t.key):r=ar(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ou(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!vt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class rs{constructor(e,t="asc"){this.field=e,this.dir=t}}function iv(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class kd{}class Se extends kd{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new av(e,t,r):t==="array-contains"?new uv(e,r):t==="in"?new hv(e,r):t==="not-in"?new dv(e,r):t==="array-contains-any"?new fv(e,r):new Se(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new cv(e,r):new lv(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(ar(t,this.value)):t!==null&&sn(this.value)===sn(t)&&this.matchesComparison(ar(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ht extends kd{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new ht(e,t)}matches(e){return Dd(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Dd(n){return n.op==="and"}function Vd(n){return ov(n)&&Dd(n)}function ov(n){for(const e of n.filters)if(e instanceof ht)return!1;return!0}function va(n){if(n instanceof Se)return n.field.canonicalString()+n.op.toString()+cr(n.value);if(Vd(n))return n.filters.map(e=>va(e)).join(",");{const e=n.filters.map(t=>va(t)).join(",");return`${n.op}(${e})`}}function Nd(n,e){return n instanceof Se?function(r,s){return s instanceof Se&&r.op===s.op&&r.field.isEqual(s.field)&&vt(r.value,s.value)}(n,e):n instanceof ht?function(r,s){return s instanceof ht&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&Nd(a,s.filters[c]),!0):!1}(n,e):void Y(19439)}function Od(n){return n instanceof Se?function(t){return`${t.field.canonicalString()} ${t.op} ${cr(t.value)}`}(n):n instanceof ht?function(t){return t.op.toString()+" {"+t.getFilters().map(Od).join(" ,")+"}"}(n):"Filter"}class av extends Se{constructor(e,t,r){super(e,t,r),this.key=Q.fromName(r.referenceValue)}matches(e){const t=Q.comparator(e.key,this.key);return this.matchesComparison(t)}}class cv extends Se{constructor(e,t){super(e,"in",t),this.keys=Md("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class lv extends Se{constructor(e,t){super(e,"not-in",t),this.keys=Md("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Md(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(r=>Q.fromName(r.referenceValue))}class uv extends Se{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Qa(t)&&ns(t.arrayValue,this.value)}}class hv extends Se{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ns(this.value.arrayValue,t)}}class dv extends Se{constructor(e,t){super(e,"not-in",t)}matches(e){if(ns(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ns(this.value.arrayValue,t)}}class fv extends Se{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Qa(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>ns(this.value.arrayValue,r))}}/**
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
 */class pv{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Te=null}}function Mu(n,e=null,t=[],r=[],s=null,i=null,a=null){return new pv(n,e,t,r,s,i,a)}function Ja(n){const e=te(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>va(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ui(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>cr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>cr(r)).join(",")),e.Te=t}return e.Te}function Ya(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!iv(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Nd(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Ou(n.startAt,e.startAt)&&Ou(n.endAt,e.endAt)}function Ia(n){return Q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class vr{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function mv(n,e,t,r,s,i,a,c){return new vr(n,e,t,r,s,i,a,c)}function $i(n){return new vr(n)}function ju(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function jd(n){return n.collectionGroup!==null}function qr(n){const e=te(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new xe(Ne.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new rs(i,r))}),t.has(Ne.keyField().canonicalString())||e.Ie.push(new rs(Ne.keyField(),r))}return e.Ie}function pt(n){const e=te(n);return e.Ee||(e.Ee=gv(e,qr(n))),e.Ee}function gv(n,e){if(n.limitType==="F")return Mu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new rs(s.field,i)});const t=n.endAt?new di(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new di(n.startAt.position,n.startAt.inclusive):null;return Mu(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Ea(n,e){const t=n.filters.concat([e]);return new vr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function fi(n,e,t){return new vr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function zi(n,e){return Ya(pt(n),pt(e))&&n.limitType===e.limitType}function Fd(n){return`${Ja(pt(n))}|lt:${n.limitType}`}function Qn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Od(s)).join(", ")}]`),Ui(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>cr(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>cr(s)).join(",")),`Target(${r})`}(pt(n))}; limitType=${n.limitType})`}function qi(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Q.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of qr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,c,u){const h=Nu(a,c,u);return a.inclusive?h<=0:h<0}(r.startAt,qr(r),s)||r.endAt&&!function(a,c,u){const h=Nu(a,c,u);return a.inclusive?h>=0:h>0}(r.endAt,qr(r),s))}(n,e)}function yv(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Ld(n){return(e,t)=>{let r=!1;for(const s of qr(n)){const i=_v(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function _v(n,e,t){const r=n.field.isKeyField()?Q.comparator(e.key,t.key):function(i,a,c){const u=a.data.field(i),h=c.data.field(i);return u!==null&&h!==null?ar(u,h):Y(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return Y(19790,{direction:n.dir})}}/**
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
 */class Fn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){cn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Ed(this.inner)}size(){return this.innerSize}}/**
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
 */const vv=new _e(Q.comparator);function Vt(){return vv}const Ud=new _e(Q.comparator);function Fr(...n){let e=Ud;for(const t of n)e=e.insert(t.key,t);return e}function Bd(n){let e=Ud;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Sn(){return Wr()}function $d(){return Wr()}function Wr(){return new Fn(n=>n.toString(),(n,e)=>n.isEqual(e))}const Iv=new _e(Q.comparator),Ev=new xe(Q.comparator);function oe(...n){let e=Ev;for(const t of n)e=e.add(t);return e}const wv=new xe(ie);function Tv(){return wv}/**
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
 */function Xa(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:li(e)?"-0":e}}function zd(n){return{integerValue:""+n}}function Sv(n,e){return X_(e)?zd(e):Xa(n,e)}/**
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
 */class Wi{constructor(){this._=void 0}}function Av(n,e,t){return n instanceof ss?function(s,i){const a={fields:{[Sd]:{stringValue:Td},[bd]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ka(i)&&(i=Bi(i)),i&&(a.fields[Ad]=i),{mapValue:a}}(t,e):n instanceof is?Wd(n,e):n instanceof os?Hd(n,e):function(s,i){const a=qd(s,i),c=Fu(a)+Fu(s.Ae);return _a(a)&&_a(s.Ae)?zd(c):Xa(s.serializer,c)}(n,e)}function bv(n,e,t){return n instanceof is?Wd(n,e):n instanceof os?Hd(n,e):t}function qd(n,e){return n instanceof pi?function(r){return _a(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ss extends Wi{}class is extends Wi{constructor(e){super(),this.elements=e}}function Wd(n,e){const t=Gd(e);for(const r of n.elements)t.some(s=>vt(s,r))||t.push(r);return{arrayValue:{values:t}}}class os extends Wi{constructor(e){super(),this.elements=e}}function Hd(n,e){let t=Gd(e);for(const r of n.elements)t=t.filter(s=>!vt(s,r));return{arrayValue:{values:t}}}class pi extends Wi{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Fu(n){return Ee(n.integerValue||n.doubleValue)}function Gd(n){return Qa(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Rv{constructor(e,t){this.field=e,this.transform=t}}function xv(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof is&&s instanceof is||r instanceof os&&s instanceof os?or(r.elements,s.elements,vt):r instanceof pi&&s instanceof pi?vt(r.Ae,s.Ae):r instanceof ss&&s instanceof ss}(n.transform,e.transform)}class Cv{constructor(e,t){this.version=e,this.transformResults=t}}class nt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new nt}static exists(e){return new nt(void 0,e)}static updateTime(e){return new nt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Zs(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Hi{}function Kd(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Za(n.key,nt.none()):new ds(n.key,n.data,nt.none());{const t=n.data,r=Qe.empty();let s=new xe(Ne.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new ln(n.key,r,new et(s.toArray()),nt.none())}}function Pv(n,e,t){n instanceof ds?function(s,i,a){const c=s.value.clone(),u=Uu(s.fieldTransforms,i,a.transformResults);c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof ln?function(s,i,a){if(!Zs(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=Uu(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(Qd(s)),u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Hr(n,e,t,r){return n instanceof ds?function(i,a,c,u){if(!Zs(i.precondition,a))return c;const h=i.value.clone(),f=Bu(i.fieldTransforms,u,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof ln?function(i,a,c,u){if(!Zs(i.precondition,a))return c;const h=Bu(i.fieldTransforms,u,a),f=a.data;return f.setAll(Qd(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(n,e,t,r):function(i,a,c){return Zs(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function kv(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=qd(r.transform,s||null);i!=null&&(t===null&&(t=Qe.empty()),t.set(r.field,i))}return t||null}function Lu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&or(r,s,(i,a)=>xv(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ds extends Hi{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ln extends Hi{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Qd(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Uu(n,e,t){const r=new Map;de(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,bv(a,c,t[s]))}return r}function Bu(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,Av(i,a,e))}return r}class Za extends Hi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Dv extends Hi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Vv{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Pv(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Hr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Hr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=$d();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const u=Kd(a,c);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),oe())}isEqual(e){return this.batchId===e.batchId&&or(this.mutations,e.mutations,(t,r)=>Lu(t,r))&&or(this.baseMutations,e.baseMutations,(t,r)=>Lu(t,r))}}class ec{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){de(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return Iv}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new ec(e,t,r,s)}}/**
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
 */class Nv{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Ov{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var we,ce;function Mv(n){switch(n){case N.OK:return Y(64938);case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0;default:return Y(15467,{code:n})}}function Jd(n){if(n===void 0)return Dt("GRPC error has no .code"),N.UNKNOWN;switch(n){case we.OK:return N.OK;case we.CANCELLED:return N.CANCELLED;case we.UNKNOWN:return N.UNKNOWN;case we.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case we.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case we.INTERNAL:return N.INTERNAL;case we.UNAVAILABLE:return N.UNAVAILABLE;case we.UNAUTHENTICATED:return N.UNAUTHENTICATED;case we.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case we.NOT_FOUND:return N.NOT_FOUND;case we.ALREADY_EXISTS:return N.ALREADY_EXISTS;case we.PERMISSION_DENIED:return N.PERMISSION_DENIED;case we.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case we.ABORTED:return N.ABORTED;case we.OUT_OF_RANGE:return N.OUT_OF_RANGE;case we.UNIMPLEMENTED:return N.UNIMPLEMENTED;case we.DATA_LOSS:return N.DATA_LOSS;default:return Y(39323,{code:n})}}(ce=we||(we={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function jv(){return new TextEncoder}/**
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
 */const Fv=new Yt([4294967295,4294967295],0);function $u(n){const e=jv().encode(n),t=new ud;return t.update(e),new Uint8Array(t.digest())}function zu(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Yt([t,r],0),new Yt([s,i],0)]}class tc{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Lr(`Invalid padding: ${t}`);if(r<0)throw new Lr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Lr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Lr(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Yt.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(Yt.fromNumber(r)));return s.compare(Fv)===1&&(s=new Yt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=$u(e),[r,s]=zu(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new tc(i,s,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.ge===0)return;const t=$u(e),[r,s]=zu(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Lr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Gi{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,fs.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Gi(ee.min(),s,new _e(ie),Vt(),oe())}}class fs{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new fs(r,t,oe(),oe(),oe())}}/**
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
 */class ei{constructor(e,t,r,s){this.be=e,this.removedTargetIds=t,this.key=r,this.De=s}}class Yd{constructor(e,t){this.targetId=e,this.Ce=t}}class Xd{constructor(e,t,r=Oe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class qu{constructor(){this.ve=0,this.Fe=Wu(),this.Me=Oe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=oe(),t=oe(),r=oe();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:Y(38017,{changeType:i})}}),new fs(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=Wu()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,de(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Lv{constructor(e){this.Ge=e,this.ze=new Map,this.je=Vt(),this.Je=Ws(),this.He=Ws(),this.Ye=new _e(ie)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:Y(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((r,s)=>{this.rt(s)&&t(s)})}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(Ia(i))if(r===0){const a=new Q(i.path);this.et(t,a,$e.newNoDocument(a,ee.min()))}else de(r===1,20013,{expectedCount:r});else{const a=this._t(t);if(a!==r){const c=this.ut(e),u=c?this.ct(c,e,a):1;if(u!==0){this.it(t);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,h)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=rn(r).toUint8Array()}catch(u){if(u instanceof wd)return ir("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new tc(a,s,i)}catch(u){return ir(u instanceof Lr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.ge===0?null:c}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Ge.ht(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(t,i,null),s++)}),s}Tt(e){const t=new Map;this.ze.forEach((i,a)=>{const c=this.ot(a);if(c){if(i.current&&Ia(c.target)){const u=new Q(c.target.path);this.It(u).has(a)||this.Et(a,u)||this.et(a,u,$e.newNoDocument(u,e))}i.Be&&(t.set(a,i.ke()),i.qe())}});let r=oe();this.He.forEach((i,a)=>{let c=!0;a.forEachWhile(u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.je.forEach((i,a)=>a.setReadTime(e));const s=new Gi(e,t,this.Ye,this.je,r);return this.je=Vt(),this.Je=Ws(),this.He=Ws(),this.Ye=new _e(ie),s}Xe(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.Qe(t,1):s.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new qu,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new xe(ie),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new xe(ie),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||q("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new qu),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Ws(){return new _e(Q.comparator)}function Wu(){return new _e(Q.comparator)}const Uv=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Bv=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),$v=(()=>({and:"AND",or:"OR"}))();class zv{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function wa(n,e){return n.useProto3Json||Ui(e)?e:{value:e}}function mi(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Zd(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function qv(n,e){return mi(n,e.toTimestamp())}function mt(n){return de(!!n,49232),ee.fromTimestamp(function(t){const r=nn(t);return new he(r.seconds,r.nanos)}(n))}function nc(n,e){return Ta(n,e).canonicalString()}function Ta(n,e){const t=function(s){return new ge(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function ef(n){const e=ge.fromString(n);return de(of(e),10190,{key:e.toString()}),e}function Sa(n,e){return nc(n.databaseId,e.path)}function Qo(n,e){const t=ef(e);if(t.get(1)!==n.databaseId.projectId)throw new $(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new $(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Q(nf(t))}function tf(n,e){return nc(n.databaseId,e)}function Wv(n){const e=ef(n);return e.length===4?ge.emptyPath():nf(e)}function Aa(n){return new ge(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function nf(n){return de(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Hu(n,e,t){return{name:Sa(n,e),fields:t.value.mapValue.fields}}function Hv(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:Y(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(de(f===void 0||typeof f=="string",58123),Oe.fromBase64String(f||"")):(de(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Oe.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(h){const f=h.code===void 0?N.UNKNOWN:Jd(h.code);return new $(f,h.message||"")}(a);t=new Xd(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Qo(n,r.document.name),i=mt(r.document.updateTime),a=r.document.createTime?mt(r.document.createTime):ee.min(),c=new Qe({mapValue:{fields:r.document.fields}}),u=$e.newFoundDocument(s,i,a,c),h=r.targetIds||[],f=r.removedTargetIds||[];t=new ei(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Qo(n,r.document),i=r.readTime?mt(r.readTime):ee.min(),a=$e.newNoDocument(s,i),c=r.removedTargetIds||[];t=new ei([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Qo(n,r.document),i=r.removedTargetIds||[];t=new ei([],i,s,null)}else{if(!("filter"in e))return Y(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new Ov(s,i),c=r.targetId;t=new Yd(c,a)}}return t}function Gv(n,e){let t;if(e instanceof ds)t={update:Hu(n,e.key,e.value)};else if(e instanceof Za)t={delete:Sa(n,e.key)};else if(e instanceof ln)t={update:Hu(n,e.key,e.data),updateMask:nI(e.fieldMask)};else{if(!(e instanceof Dv))return Y(16599,{Vt:e.type});t={verify:Sa(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const c=a.transform;if(c instanceof ss)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof is)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof os)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof pi)return{fieldPath:a.field.canonicalString(),increment:c.Ae};throw Y(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:qv(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Y(27497)}(n,e.precondition)),t}function Kv(n,e){return n&&n.length>0?(de(e!==void 0,14353),n.map(t=>function(s,i){let a=s.updateTime?mt(s.updateTime):mt(i);return a.isEqual(ee.min())&&(a=mt(i)),new Cv(a,s.transformResults||[])}(t,e))):[]}function Qv(n,e){return{documents:[tf(n,e.path)]}}function Jv(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=tf(n,s);const i=function(h){if(h.length!==0)return sf(ht.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(f=>function(y){return{field:Jn(y.field),direction:Zv(y.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=wa(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:t,parent:s}}function Yv(n){let e=Wv(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){de(r===1,65062);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(m){const y=rf(m);return y instanceof ht&&Vd(y)?y.getFilters():[y]}(t.where));let a=[];t.orderBy&&(a=function(m){return m.map(y=>function(P){return new rs(Yn(P.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(y))}(t.orderBy));let c=null;t.limit&&(c=function(m){let y;return y=typeof m=="object"?m.value:m,Ui(y)?null:y}(t.limit));let u=null;t.startAt&&(u=function(m){const y=!!m.before,E=m.values||[];return new di(E,y)}(t.startAt));let h=null;return t.endAt&&(h=function(m){const y=!m.before,E=m.values||[];return new di(E,y)}(t.endAt)),mv(e,s,a,i,c,"F",u,h)}function Xv(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function rf(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Yn(t.unaryFilter.field);return Se.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Yn(t.unaryFilter.field);return Se.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Yn(t.unaryFilter.field);return Se.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Yn(t.unaryFilter.field);return Se.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Y(61313);default:return Y(60726)}}(n):n.fieldFilter!==void 0?function(t){return Se.create(Yn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Y(58110);default:return Y(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ht.create(t.compositeFilter.filters.map(r=>rf(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Y(1026)}}(t.compositeFilter.op))}(n):Y(30097,{filter:n})}function Zv(n){return Uv[n]}function eI(n){return Bv[n]}function tI(n){return $v[n]}function Jn(n){return{fieldPath:n.canonicalString()}}function Yn(n){return Ne.fromServerFormat(n.fieldPath)}function sf(n){return n instanceof Se?function(t){if(t.op==="=="){if(Vu(t.value))return{unaryFilter:{field:Jn(t.field),op:"IS_NAN"}};if(Du(t.value))return{unaryFilter:{field:Jn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Vu(t.value))return{unaryFilter:{field:Jn(t.field),op:"IS_NOT_NAN"}};if(Du(t.value))return{unaryFilter:{field:Jn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Jn(t.field),op:eI(t.op),value:t.value}}}(n):n instanceof ht?function(t){const r=t.getFilters().map(s=>sf(s));return r.length===1?r[0]:{compositeFilter:{op:tI(t.op),filters:r}}}(n):Y(54877,{filter:n})}function nI(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function of(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Gt{constructor(e,t,r,s,i=ee.min(),a=ee.min(),c=Oe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new Gt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Gt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Gt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Gt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class rI{constructor(e){this.yt=e}}function sI(n){const e=Yv({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?fi(e,e.limit,"L"):e}/**
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
 */class iI{constructor(){this.Cn=new oI}addToCollectionParentIndex(e,t){return this.Cn.add(t),O.resolve()}getCollectionParents(e,t){return O.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return O.resolve()}deleteFieldIndex(e,t){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,t){return O.resolve()}getDocumentsMatchingTarget(e,t){return O.resolve(null)}getIndexType(e,t){return O.resolve(0)}getFieldIndexes(e,t){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,t){return O.resolve(tn.min())}getMinOffsetFromCollectionGroup(e,t){return O.resolve(tn.min())}updateCollectionGroup(e,t,r){return O.resolve()}updateIndexEntries(e,t){return O.resolve()}}class oI{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new xe(ge.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new xe(ge.comparator)).toArray()}}/**
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
 */const Gu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},af=41943040;class Ke{static withCacheSize(e){return new Ke(e,Ke.DEFAULT_COLLECTION_PERCENTILE,Ke.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Ke.DEFAULT_COLLECTION_PERCENTILE=10,Ke.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ke.DEFAULT=new Ke(af,Ke.DEFAULT_COLLECTION_PERCENTILE,Ke.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ke.DISABLED=new Ke(-1,0,0);/**
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
 */const Ku="LruGarbageCollector",aI=1048576;function Qu([n,e],[t,r]){const s=ie(n,t);return s===0?ie(e,r):s}class cI{constructor(e){this.Ir=e,this.buffer=new xe(Qu),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Qu(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class lI{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){q(Ku,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){_r(t)?q(Ku,"Ignoring IndexedDB error during garbage collection: ",t):await yr(t)}await this.Vr(3e5)})}}class uI{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return O.resolve(Li.ce);const r=new cI(t);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(q("LruGarbageCollector","Garbage collection skipped; disabled"),O.resolve(Gu)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(q("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Gu):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,s,i,a,c,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,a=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(r=m,c=Date.now(),this.removeTargets(e,r,t))).next(m=>(i=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(h=Date.now(),Kn()<=se.DEBUG&&q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(u-c)+`ms
	Removed ${m} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),O.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m})))}}function hI(n,e){return new uI(n,e)}/**
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
 */class dI{constructor(){this.changes=new Fn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,$e.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?O.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class fI{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class pI{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Hr(r.mutation,s,et.empty(),he.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,oe()).next(()=>r))}getLocalViewOfDocuments(e,t,r=oe()){const s=Sn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=Fr();return i.forEach((c,u)=>{a=a.insert(c,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Sn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,oe()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,s){let i=Vt();const a=Wr(),c=function(){return Wr()}();return t.forEach((u,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof ln)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),Hr(f.mutation,h,f.mutation.getFieldMask(),he.now())):a.set(h.key,et.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((h,f)=>a.set(h,f)),t.forEach((h,f)=>c.set(h,new fI(f,a.get(h)??null))),c))}recalculateAndSaveOverlays(e,t){const r=Wr();let s=new _e((a,c)=>a-c),i=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(u=>{const h=t.get(u);if(h===null)return;let f=r.get(u)||et.empty();f=c.applyToLocalView(h,f),r.set(u,f);const m=(s.get(c.batchId)||oe()).add(u);s=s.insert(c.batchId,m)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),h=u.key,f=u.value,m=$d();f.forEach(y=>{if(!i.has(y)){const E=Kd(t.get(y),r.get(y));E!==null&&m.set(y,E),i=i.add(y)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,m))}return O.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return Q.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):jd(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):O.resolve(Sn());let c=Zr,u=i;return a.next(h=>O.forEach(h,(f,m)=>(c<m.largestBatchId&&(c=m.largestBatchId),i.get(f)?O.resolve():this.remoteDocumentCache.getEntry(e,f).next(y=>{u=u.insert(f,y)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,u,h,oe())).next(f=>({batchId:c,changes:Bd(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Q(t)).next(r=>{let s=Fr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Fr();return this.indexManager.getCollectionParents(e,i).next(c=>O.forEach(c,u=>{const h=function(m,y){return new vr(y,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((m,y)=>{a=a.insert(m,y)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((u,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,$e.newInvalidDocument(f)))});let c=Fr();return a.forEach((u,h)=>{const f=i.get(u);f!==void 0&&Hr(f.mutation,h,et.empty(),he.now()),qi(t,h)&&(c=c.insert(u,h))}),c})}}/**
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
 */class mI{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return O.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:mt(s.createTime)}}(t)),O.resolve()}getNamedQuery(e,t){return O.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(s){return{name:s.name,query:sI(s.bundledQuery),readTime:mt(s.readTime)}}(t)),O.resolve()}}/**
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
 */class gI{constructor(){this.overlays=new _e(Q.comparator),this.qr=new Map}getOverlay(e,t){return O.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Sn();return O.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.St(e,t,i)}),O.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),O.resolve()}getOverlaysForCollection(e,t,r){const s=Sn(),i=t.length+1,a=new Q(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return O.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new _e((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=Sn(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=Sn(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=s)););return O.resolve(c)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Nv(t,r));let i=this.qr.get(t);i===void 0&&(i=oe(),this.qr.set(t,i)),this.qr.set(t,i.add(r.key))}}/**
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
 */class yI{constructor(){this.sessionToken=Oe.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,O.resolve()}}/**
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
 */class rc{constructor(){this.Qr=new xe(Ce.$r),this.Ur=new xe(Ce.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new Ce(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Gr(new Ce(e,t))}zr(e,t){e.forEach(r=>this.removeReference(r,t))}jr(e){const t=new Q(new ge([])),r=new Ce(t,e),s=new Ce(t,e+1),i=[];return this.Ur.forEachInRange([r,s],a=>{this.Gr(a),i.push(a.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new Q(new ge([])),r=new Ce(t,e),s=new Ce(t,e+1);let i=oe();return this.Ur.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new Ce(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ce{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return Q.comparator(e.key,t.key)||ie(e.Yr,t.Yr)}static Kr(e,t){return ie(e.Yr,t.Yr)||Q.comparator(e.key,t.key)}}/**
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
 */class _I{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new xe(Ce.$r)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Vv(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.Zr=this.Zr.add(new Ce(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return O.resolve(a)}lookupMutationBatch(e,t){return O.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.ei(r),i=s<0?0:s;return O.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?Ga:this.tr-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ce(t,0),s=new Ce(t,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],a=>{const c=this.Xr(a.Yr);i.push(c)}),O.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new xe(ie);return t.forEach(s=>{const i=new Ce(s,0),a=new Ce(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],c=>{r=r.add(c.Yr)})}),O.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;Q.isDocumentKey(i)||(i=i.child(""));const a=new Ce(new Q(i),0);let c=new xe(ie);return this.Zr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(u.Yr)),!0)},a),O.resolve(this.ti(c))}ti(e){const t=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){de(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return O.forEach(t.mutations,s=>{const i=new Ce(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,t){const r=new Ce(t,0),s=this.Zr.firstAfterOrEqual(r);return O.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class vI{constructor(e){this.ri=e,this.docs=function(){return new _e(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return O.resolve(r?r.document.mutableCopy():$e.newInvalidDocument(t))}getEntries(e,t){let r=Vt();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():$e.newInvalidDocument(s))}),O.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Vt();const a=t.path,c=new Q(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||K_(G_(f),r)<=0||(s.has(f.key)||qi(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return O.resolve(i)}getAllFromCollectionGroup(e,t,r,s){Y(9500)}ii(e,t){return O.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new II(this)}getSize(e){return O.resolve(this.size)}}class II extends dI{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),O.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class EI{constructor(e){this.persistence=e,this.si=new Fn(t=>Ja(t),Ya),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.oi=0,this._i=new rc,this.targetCount=0,this.ai=lr.ur()}forEachTarget(e,t){return this.si.forEach((r,s)=>t(s)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),O.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new lr(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,O.resolve()}updateTargetData(e,t){return this.Pr(t),O.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.si.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),O.waitFor(i).next(()=>s)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return O.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),O.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),O.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),O.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return O.resolve(r)}containsKey(e,t){return O.resolve(this._i.containsKey(t))}}/**
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
 */class cf{constructor(e,t){this.ui={},this.overlays={},this.ci=new Li(0),this.li=!1,this.li=!0,this.hi=new yI,this.referenceDelegate=e(this),this.Pi=new EI(this),this.indexManager=new iI,this.remoteDocumentCache=function(s){return new vI(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new rI(t),this.Ii=new mI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new gI,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new _I(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){q("MemoryPersistence","Starting transaction:",e);const s=new wI(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,t){return O.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,t)))}}class wI extends J_{constructor(e){super(),this.currentSequenceNumber=e}}class sc{constructor(e){this.persistence=e,this.Ri=new rc,this.Vi=null}static mi(e){return new sc(e)}get fi(){if(this.Vi)return this.Vi;throw Y(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),O.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),O.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.fi,r=>{const s=Q.fromPath(r);return this.gi(e,s).next(i=>{i||t.removeEntry(s,ee.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return O.or([()=>O.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class gi{constructor(e,t){this.persistence=e,this.pi=new Fn(r=>Z_(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=hI(this,t)}static mi(e,t){return new gi(e,t)}Ei(){}di(e){return O.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}wr(e){let t=0;return this.pr(e,r=>{t++}).next(()=>t)}pr(e,t){return O.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?O.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,a=>this.br(e,a,t).next(c=>{c||(r++,i.removeEntry(a,ee.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),O.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),O.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),O.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),O.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ys(e.data.value)),t}br(e,t,r){return O.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.pi.get(t);return O.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class ic{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=s}static As(e,t){let r=oe(),s=oe();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ic(e,t.fromCache,r,s)}}/**
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
 */class TI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class SI{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return py()?8:Y_(qe())>0?6:4}()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ys(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ws(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new TI;return this.Ss(e,t,a).next(c=>{if(i.result=c,this.Vs)return this.bs(e,t,a,c.size)})}).next(()=>i.result)}bs(e,t,r,s){return r.documentReadCount<this.fs?(Kn()<=se.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",Qn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),O.resolve()):(Kn()<=se.DEBUG&&q("QueryEngine","Query:",Qn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(Kn()<=se.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",Qn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,pt(t))):O.resolve())}ys(e,t){if(ju(t))return O.resolve(null);let r=pt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=fi(t,null,"F"),r=pt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=oe(...i);return this.ps.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.Ds(t,c);return this.Cs(t,h,a,u.readTime)?this.ys(e,fi(t,null,"F")):this.vs(e,h,t,u)}))})))}ws(e,t,r,s){return ju(t)||s.isEqual(ee.min())?O.resolve(null):this.ps.getDocuments(e,r).next(i=>{const a=this.Ds(t,i);return this.Cs(t,a,r,s)?O.resolve(null):(Kn()<=se.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Qn(t)),this.vs(e,a,t,H_(s,Zr)).next(c=>c))})}Ds(e,t){let r=new xe(Ld(e));return t.forEach((s,i)=>{qi(e,i)&&(r=r.add(i))}),r}Cs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,t,r){return Kn()<=se.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",Qn(t)),this.ps.getDocumentsMatchingQuery(e,t,tn.min(),r)}vs(e,t,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const oc="LocalStore",AI=3e8;class bI{constructor(e,t,r,s){this.persistence=e,this.Fs=t,this.serializer=s,this.Ms=new _e(ie),this.xs=new Fn(i=>Ja(i),Ya),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new pI(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function RI(n,e,t,r){return new bI(n,e,t,r)}async function lf(n,e){const t=te(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Bs(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let u=oe();for(const h of s){a.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(r,u).next(h=>({Ls:h,removedBatchIds:a,addedBatchIds:c}))})})}function xI(n,e){const t=te(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.Ns.newChangeBuffer({trackRemovals:!0});return function(c,u,h,f){const m=h.batch,y=m.keys();let E=O.resolve();return y.forEach(P=>{E=E.next(()=>f.getEntry(u,P)).next(x=>{const w=h.docVersions.get(P);de(w!==null,48541),x.version.compareTo(w)<0&&(m.applyToRemoteDocument(x,h),x.isValidDocument()&&(x.setReadTime(h.commitVersion),f.addEntry(x)))})}),E.next(()=>c.mutationQueue.removeMutationBatch(u,m))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=oe();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(u=u.add(c.batch.mutations[h].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function uf(n){const e=te(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Pi.getLastRemoteSnapshotVersion(t))}function CI(n,e){const t=te(n),r=e.snapshotVersion;let s=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.Ns.newChangeBuffer({trackRemovals:!0});s=t.Ms;const c=[];e.targetChanges.forEach((f,m)=>{const y=s.get(m);if(!y)return;c.push(t.Pi.removeMatchingKeys(i,f.removedDocuments,m).next(()=>t.Pi.addMatchingKeys(i,f.addedDocuments,m)));let E=y.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?E=E.withResumeToken(Oe.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):f.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(f.resumeToken,r)),s=s.insert(m,E),function(x,w,M){return x.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=AI?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0}(y,E,f)&&c.push(t.Pi.updateTargetData(i,E))});let u=Vt(),h=oe();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(PI(i,a,e.documentUpdates).next(f=>{u=f.ks,h=f.qs})),!r.isEqual(ee.min())){const f=t.Pi.getLastRemoteSnapshotVersion(i).next(m=>t.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return O.waitFor(c).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(t.Ms=s,i))}function PI(n,e,t){let r=oe(),s=oe();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=Vt();return t.forEach((c,u)=>{const h=i.get(c);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual(ee.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):q(oc,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",u.version)}),{ks:a,qs:s}})}function kI(n,e){const t=te(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Ga),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function DI(n,e){const t=te(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Pi.getTargetData(r,e).next(i=>i?(s=i,O.resolve(s)):t.Pi.allocateTargetId(r).next(a=>(s=new Gt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.xs.set(e,r.targetId)),r})}async function ba(n,e,t){const r=te(n),s=r.Ms.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!_r(a))throw a;q(oc,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function Ju(n,e,t){const r=te(n);let s=ee.min(),i=oe();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,h,f){const m=te(u),y=m.xs.get(f);return y!==void 0?O.resolve(m.Ms.get(y)):m.Pi.getTargetData(h,f)}(r,a,pt(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,c.targetId).next(u=>{i=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(a,e,t?s:ee.min(),t?i:oe())).next(c=>(VI(r,yv(e),c),{documents:c,Qs:i})))}function VI(n,e,t){let r=n.Os.get(e)||ee.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Os.set(e,r)}class Yu{constructor(){this.activeTargetIds=Tv()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class NI{constructor(){this.Mo=new Yu,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Yu,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class OI{Oo(e){}shutdown(){}}/**
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
 */const Xu="ConnectivityMonitor";class Zu{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){q(Xu,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){q(Xu,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Hs=null;function Ra(){return Hs===null?Hs=function(){return 268435456+Math.round(2147483648*Math.random())}():Hs++,"0x"+Hs.toString(16)}/**
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
 */const Jo="RestConnection",MI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class jI{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===ui?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,t,r,s,i){const a=Ra(),c=this.zo(e,t.toUriEncodedString());q(Jo,`Sending RPC '${e}' ${a}:`,c,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,s,i);const{host:h}=new URL(c),f=pr(h);return this.Jo(e,c,u,r,f).then(m=>(q(Jo,`Received RPC '${e}' ${a}: `,m),m),m=>{throw ir(Jo,`RPC '${e}' ${a} failed with error: `,m,"url: ",c,"request:",r),m})}Ho(e,t,r,s,i,a){return this.Go(e,t,r,s,i)}jo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+gr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,t){const r=MI[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
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
 */class FI{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const Le="WebChannelConnection";class LI extends jI{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,s,i){const a=Ra();return new Promise((c,u)=>{const h=new hd;h.setWithCredentials(!0),h.listenOnce(dd.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Js.NO_ERROR:const m=h.getResponseJson();q(Le,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(m)),c(m);break;case Js.TIMEOUT:q(Le,`RPC '${e}' ${a} timed out`),u(new $(N.DEADLINE_EXCEEDED,"Request time out"));break;case Js.HTTP_ERROR:const y=h.getStatus();if(q(Le,`RPC '${e}' ${a} failed with status:`,y,"response text:",h.getResponseText()),y>0){let E=h.getResponseJson();Array.isArray(E)&&(E=E[0]);const P=E==null?void 0:E.error;if(P&&P.status&&P.message){const x=function(M){const U=M.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(U)>=0?U:N.UNKNOWN}(P.status);u(new $(x,P.message))}else u(new $(N.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new $(N.UNAVAILABLE,"Connection failed."));break;default:Y(9055,{l_:e,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{q(Le,`RPC '${e}' ${a} completed.`)}});const f=JSON.stringify(s);q(Le,`RPC '${e}' ${a} sending request:`,s),h.send(t,"POST",f,r,15)})}T_(e,t,r){const s=Ra(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=md(),c=pd(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const f=i.join("");q(Le,`Creating RPC '${e}' stream ${s}: ${f}`,u);const m=a.createWebChannel(f,u);this.I_(m);let y=!1,E=!1;const P=new FI({Yo:w=>{E?q(Le,`Not sending because RPC '${e}' stream ${s} is closed:`,w):(y||(q(Le,`Opening RPC '${e}' stream ${s} transport.`),m.open(),y=!0),q(Le,`RPC '${e}' stream ${s} sending:`,w),m.send(w))},Zo:()=>m.close()}),x=(w,M,U)=>{w.listen(M,z=>{try{U(z)}catch(G){setTimeout(()=>{throw G},0)}})};return x(m,jr.EventType.OPEN,()=>{E||(q(Le,`RPC '${e}' stream ${s} transport opened.`),P.o_())}),x(m,jr.EventType.CLOSE,()=>{E||(E=!0,q(Le,`RPC '${e}' stream ${s} transport closed`),P.a_(),this.E_(m))}),x(m,jr.EventType.ERROR,w=>{E||(E=!0,ir(Le,`RPC '${e}' stream ${s} transport errored. Name:`,w.name,"Message:",w.message),P.a_(new $(N.UNAVAILABLE,"The operation could not be completed")))}),x(m,jr.EventType.MESSAGE,w=>{var M;if(!E){const U=w.data[0];de(!!U,16349);const z=U,G=(z==null?void 0:z.error)||((M=z[0])==null?void 0:M.error);if(G){q(Le,`RPC '${e}' stream ${s} received error:`,G);const ae=G.status;let ue=function(I){const T=we[I];if(T!==void 0)return Jd(T)}(ae),S=G.message;ue===void 0&&(ue=N.INTERNAL,S="Unknown error status: "+ae+" with message "+G.message),E=!0,P.a_(new $(ue,S)),m.close()}else q(Le,`RPC '${e}' stream ${s} received:`,U),P.u_(U)}}),x(c,fd.STAT_EVENT,w=>{w.stat===ma.PROXY?q(Le,`RPC '${e}' stream ${s} detected buffering proxy`):w.stat===ma.NOPROXY&&q(Le,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.__()},0),P}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}function Yo(){return typeof document<"u"?document:null}/**
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
 */function Ki(n){return new zv(n,!0)}/**
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
 */class hf{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const eh="PersistentStream";class df{constructor(e,t,r,s,i,a,c,u){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new hf(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===N.RESOURCE_EXHAUSTED?(Dt(t.toString()),Dt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===t&&this.G_(r,s)},r=>{e(()=>{const s=new $(N.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return q(eh,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(q(eh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class UI extends df{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Hv(this.serializer,e),r=function(i){if(!("targetChange"in i))return ee.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?ee.min():a.readTime?mt(a.readTime):ee.min()}(e);return this.listener.H_(t,r)}Y_(e){const t={};t.database=Aa(this.serializer),t.addTarget=function(i,a){let c;const u=a.target;if(c=Ia(u)?{documents:Qv(i,u)}:{query:Jv(i,u).ft},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Zd(i,a.resumeToken);const h=wa(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(ee.min())>0){c.readTime=mi(i,a.snapshotVersion.toTimestamp());const h=wa(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=Xv(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){const t={};t.database=Aa(this.serializer),t.removeTarget=e,this.q_(t)}}class BI extends df{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return de(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,de(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){de(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=Kv(e.writeResults,e.commitTime),r=mt(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=Aa(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Gv(this.serializer,r))};this.q_(t)}}/**
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
 */class $I{}class zI extends $I{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new $(N.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Go(e,Ta(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new $(N.UNKNOWN,i.toString())})}Ho(e,t,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Ho(e,Ta(t,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new $(N.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class qI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
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
 */const On="RemoteStore";class WI{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(a=>{r.enqueueAndForget(async()=>{Ln(this)&&(q(On,"Restarting streams for network reachability change."),await async function(u){const h=te(u);h.Ea.add(4),await ps(h),h.Ra.set("Unknown"),h.Ea.delete(4),await Qi(h)}(this))})}),this.Ra=new qI(r,s)}}async function Qi(n){if(Ln(n))for(const e of n.da)await e(!0)}async function ps(n){for(const e of n.da)await e(!1)}function ff(n,e){const t=te(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),uc(t)?lc(t):Ir(t).O_()&&cc(t,e))}function ac(n,e){const t=te(n),r=Ir(t);t.Ia.delete(e),r.O_()&&pf(t,e),t.Ia.size===0&&(r.O_()?r.L_():Ln(t)&&t.Ra.set("Unknown"))}function cc(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ir(n).Y_(e)}function pf(n,e){n.Va.Ue(e),Ir(n).Z_(e)}function lc(n){n.Va=new Lv({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Ir(n).start(),n.Ra.ua()}function uc(n){return Ln(n)&&!Ir(n).x_()&&n.Ia.size>0}function Ln(n){return te(n).Ea.size===0}function mf(n){n.Va=void 0}async function HI(n){n.Ra.set("Online")}async function GI(n){n.Ia.forEach((e,t)=>{cc(n,e)})}async function KI(n,e){mf(n),uc(n)?(n.Ra.ha(e),lc(n)):n.Ra.set("Unknown")}async function QI(n,e,t){if(n.Ra.set("Online"),e instanceof Xd&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ia.delete(c),s.Va.removeTarget(c))}(n,e)}catch(r){q(On,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await yi(n,r)}else if(e instanceof ei?n.Va.Ze(e):e instanceof Yd?n.Va.st(e):n.Va.tt(e),!t.isEqual(ee.min()))try{const r=await uf(n.localStore);t.compareTo(r)>=0&&await function(i,a){const c=i.Va.Tt(a);return c.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.Ia.get(h);f&&i.Ia.set(h,f.withResumeToken(u.resumeToken,a))}}),c.targetMismatches.forEach((u,h)=>{const f=i.Ia.get(u);if(!f)return;i.Ia.set(u,f.withResumeToken(Oe.EMPTY_BYTE_STRING,f.snapshotVersion)),pf(i,u);const m=new Gt(f.target,u,h,f.sequenceNumber);cc(i,m)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){q(On,"Failed to raise snapshot:",r),await yi(n,r)}}async function yi(n,e,t){if(!_r(e))throw e;n.Ea.add(1),await ps(n),n.Ra.set("Offline"),t||(t=()=>uf(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{q(On,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Qi(n)})}function gf(n,e){return e().catch(t=>yi(n,t,e))}async function Ji(n){const e=te(n),t=on(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Ga;for(;JI(e);)try{const s=await kI(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,YI(e,s)}catch(s){await yi(e,s)}yf(e)&&_f(e)}function JI(n){return Ln(n)&&n.Ta.length<10}function YI(n,e){n.Ta.push(e);const t=on(n);t.O_()&&t.X_&&t.ea(e.mutations)}function yf(n){return Ln(n)&&!on(n).x_()&&n.Ta.length>0}function _f(n){on(n).start()}async function XI(n){on(n).ra()}async function ZI(n){const e=on(n);for(const t of n.Ta)e.ea(t.mutations)}async function eE(n,e,t){const r=n.Ta.shift(),s=ec.from(r,e,t);await gf(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Ji(n)}async function tE(n,e){e&&on(n).X_&&await async function(r,s){if(function(a){return Mv(a)&&a!==N.ABORTED}(s.code)){const i=r.Ta.shift();on(r).B_(),await gf(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ji(r)}}(n,e),yf(n)&&_f(n)}async function th(n,e){const t=te(n);t.asyncQueue.verifyOperationInProgress(),q(On,"RemoteStore received new credentials");const r=Ln(t);t.Ea.add(3),await ps(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Qi(t)}async function nE(n,e){const t=te(n);e?(t.Ea.delete(2),await Qi(t)):e||(t.Ea.add(2),await ps(t),t.Ra.set("Unknown"))}function Ir(n){return n.ma||(n.ma=function(t,r,s){const i=te(t);return i.sa(),new UI(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Xo:HI.bind(null,n),t_:GI.bind(null,n),r_:KI.bind(null,n),H_:QI.bind(null,n)}),n.da.push(async e=>{e?(n.ma.B_(),uc(n)?lc(n):n.Ra.set("Unknown")):(await n.ma.stop(),mf(n))})),n.ma}function on(n){return n.fa||(n.fa=function(t,r,s){const i=te(t);return i.sa(),new BI(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:XI.bind(null,n),r_:tE.bind(null,n),ta:ZI.bind(null,n),na:eE.bind(null,n)}),n.da.push(async e=>{e?(n.fa.B_(),await Ji(n)):(await n.fa.stop(),n.Ta.length>0&&(q(On,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
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
 */class hc{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Pt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new hc(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function dc(n,e){if(Dt("AsyncQueue",`${e}: ${n}`),_r(n))return new $(N.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Xn{static emptySet(e){return new Xn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||Q.comparator(t.key,r.key):(t,r)=>Q.comparator(t.key,r.key),this.keyedMap=Fr(),this.sortedSet=new _e(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Xn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Xn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class nh{constructor(){this.ga=new _e(Q.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):Y(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,r)=>{e.push(r)}),e}}class ur{constructor(e,t,r,s,i,a,c,u,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new ur(e,t,Xn.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&zi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class rE{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class sE{constructor(){this.queries=rh(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const s=te(t),i=s.queries;s.queries=rh(),i.forEach((a,c)=>{for(const u of c.Sa)u.onError(r)})})(this,new $(N.ABORTED,"Firestore shutting down"))}}function rh(){return new Fn(n=>Fd(n),zi)}async function fc(n,e){const t=te(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new rE,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await t.onListen(s,!0);break;case 1:i.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=dc(a,`Initialization of query '${Qn(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&mc(t)}async function pc(n,e){const t=te(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.Sa.indexOf(e);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function iE(n,e){const t=te(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.Sa)c.Fa(s)&&(r=!0);a.wa=s}}r&&mc(t)}function oE(n,e,t){const r=te(n),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(t);r.queries.delete(e)}function mc(n){n.Ca.forEach(e=>{e.next()})}var xa,sh;(sh=xa||(xa={})).Ma="default",sh.Cache="cache";class gc{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ur(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=ur.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==xa.Cache}}/**
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
 */class vf{constructor(e){this.key=e}}class If{constructor(e){this.key=e}}class aE{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=oe(),this.mutatedKeys=oe(),this.eu=Ld(e),this.tu=new Xn(this.eu)}get nu(){return this.Ya}ru(e,t){const r=t?t.iu:new nh,s=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,m)=>{const y=s.get(f),E=qi(this.query,m)?m:null,P=!!y&&this.mutatedKeys.has(y.key),x=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let w=!1;y&&E?y.data.isEqual(E.data)?P!==x&&(r.track({type:3,doc:E}),w=!0):this.su(y,E)||(r.track({type:2,doc:E}),w=!0,(u&&this.eu(E,u)>0||h&&this.eu(E,h)<0)&&(c=!0)):!y&&E?(r.track({type:0,doc:E}),w=!0):y&&!E&&(r.track({type:1,doc:y}),w=!0,(u||h)&&(c=!0)),w&&(E?(a=a.add(E),i=x?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:a,iu:r,Cs:c,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort((f,m)=>function(E,P){const x=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y(20277,{Rt:w})}};return x(E)-x(P)}(f.type,m.type)||this.eu(f.doc,m.doc)),this.ou(r),s=s??!1;const c=t&&!s?this._u():[],u=this.Xa.size===0&&this.current&&!s?1:0,h=u!==this.Za;return this.Za=u,a.length!==0||h?{snapshot:new ur(this.query,e.tu,i,a,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new nh,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Ya=this.Ya.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ya=this.Ya.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=oe(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const t=[];return e.forEach(r=>{this.Xa.has(r)||t.push(new If(r))}),this.Xa.forEach(r=>{e.has(r)||t.push(new vf(r))}),t}cu(e){this.Ya=e.Qs,this.Xa=oe();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return ur.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const yc="SyncEngine";class cE{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class lE{constructor(e){this.key=e,this.hu=!1}}class uE{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Fn(c=>Fd(c),zi),this.Iu=new Map,this.Eu=new Set,this.du=new _e(Q.comparator),this.Au=new Map,this.Ru=new rc,this.Vu={},this.mu=new Map,this.fu=lr.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function hE(n,e,t=!0){const r=bf(n);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Ef(r,e,t,!0),s}async function dE(n,e){const t=bf(n);await Ef(t,e,!0,!1)}async function Ef(n,e,t,r){const s=await DI(n.localStore,pt(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await fE(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&ff(n.remoteStore,s),c}async function fE(n,e,t,r,s){n.pu=(m,y,E)=>async function(x,w,M,U){let z=w.view.ru(M);z.Cs&&(z=await Ju(x.localStore,w.query,!1).then(({documents:S})=>w.view.ru(S,z)));const G=U&&U.targetChanges.get(w.targetId),ae=U&&U.targetMismatches.get(w.targetId)!=null,ue=w.view.applyChanges(z,x.isPrimaryClient,G,ae);return oh(x,w.targetId,ue.au),ue.snapshot}(n,m,y,E);const i=await Ju(n.localStore,e,!0),a=new aE(e,i.Qs),c=a.ru(i.documents),u=fs.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(c,n.isPrimaryClient,u);oh(n,t,h.au);const f=new cE(e,t,a);return n.Tu.set(e,f),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),h.snapshot}async function pE(n,e,t){const r=te(n),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(a=>!zi(a,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ba(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&ac(r.remoteStore,s.targetId),Ca(r,s.targetId)}).catch(yr)):(Ca(r,s.targetId),await ba(r.localStore,s.targetId,!0))}async function mE(n,e){const t=te(n),r=t.Tu.get(e),s=t.Iu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),ac(t.remoteStore,r.targetId))}async function gE(n,e,t){const r=TE(n);try{const s=await function(a,c){const u=te(a),h=he.now(),f=c.reduce((E,P)=>E.add(P.key),oe());let m,y;return u.persistence.runTransaction("Locally write mutations","readwrite",E=>{let P=Vt(),x=oe();return u.Ns.getEntries(E,f).next(w=>{P=w,P.forEach((M,U)=>{U.isValidDocument()||(x=x.add(M))})}).next(()=>u.localDocuments.getOverlayedDocuments(E,P)).next(w=>{m=w;const M=[];for(const U of c){const z=kv(U,m.get(U.key).overlayedDocument);z!=null&&M.push(new ln(U.key,z,Pd(z.value.mapValue),nt.exists(!0)))}return u.mutationQueue.addMutationBatch(E,h,M,c)}).next(w=>{y=w;const M=w.applyToLocalDocumentSet(m,x);return u.documentOverlayCache.saveOverlays(E,w.batchId,M)})}).then(()=>({batchId:y.batchId,changes:Bd(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,u){let h=a.Vu[a.currentUser.toKey()];h||(h=new _e(ie)),h=h.insert(c,u),a.Vu[a.currentUser.toKey()]=h}(r,s.batchId,t),await ms(r,s.changes),await Ji(r.remoteStore)}catch(s){const i=dc(s,"Failed to persist write");t.reject(i)}}async function wf(n,e){const t=te(n);try{const r=await CI(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Au.get(i);a&&(de(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?de(a.hu,14607):s.removedDocuments.size>0&&(de(a.hu,42227),a.hu=!1))}),await ms(t,r,e)}catch(r){await yr(r)}}function ih(n,e,t){const r=te(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tu.forEach((i,a)=>{const c=a.view.va(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const u=te(a);u.onlineState=c;let h=!1;u.queries.forEach((f,m)=>{for(const y of m.Sa)y.va(c)&&(h=!0)}),h&&mc(u)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function yE(n,e,t){const r=te(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Au.get(e),i=s&&s.key;if(i){let a=new _e(Q.comparator);a=a.insert(i,$e.newNoDocument(i,ee.min()));const c=oe().add(i),u=new Gi(ee.min(),new Map,new _e(ie),a,c);await wf(r,u),r.du=r.du.remove(i),r.Au.delete(e),_c(r)}else await ba(r.localStore,e,!1).then(()=>Ca(r,e,t)).catch(yr)}async function _E(n,e){const t=te(n),r=e.batch.batchId;try{const s=await xI(t.localStore,e);Sf(t,r,null),Tf(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ms(t,s)}catch(s){await yr(s)}}async function vE(n,e,t){const r=te(n);try{const s=await function(a,c){const u=te(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,c).next(m=>(de(m!==null,37113),f=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);Sf(r,e,t),Tf(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ms(r,s)}catch(s){await yr(s)}}function Tf(n,e){(n.mu.get(e)||[]).forEach(t=>{t.resolve()}),n.mu.delete(e)}function Sf(n,e,t){const r=te(n);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function Ca(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach(r=>{n.Ru.containsKey(r)||Af(n,r)})}function Af(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(ac(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),_c(n))}function oh(n,e,t){for(const r of t)r instanceof vf?(n.Ru.addReference(r.key,e),IE(n,r)):r instanceof If?(q(yc,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||Af(n,r.key)):Y(19791,{wu:r})}function IE(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Eu.has(r)||(q(yc,"New document in limbo: "+t),n.Eu.add(r),_c(n))}function _c(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new Q(ge.fromString(e)),r=n.fu.next();n.Au.set(r,new lE(t)),n.du=n.du.insert(t,r),ff(n.remoteStore,new Gt(pt($i(t.path)),r,"TargetPurposeLimboResolution",Li.ce))}}async function ms(n,e,t){const r=te(n),s=[],i=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach((c,u)=>{a.push(r.pu(u,e,t).then(h=>{var f;if((h||t)&&r.isPrimaryClient){const m=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){s.push(h);const m=ic.As(u.targetId,h);i.push(m)}}))}),await Promise.all(a),r.Pu.H_(s),await async function(u,h){const f=te(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>O.forEach(h,y=>O.forEach(y.Es,E=>f.persistence.referenceDelegate.addReference(m,y.targetId,E)).next(()=>O.forEach(y.ds,E=>f.persistence.referenceDelegate.removeReference(m,y.targetId,E)))))}catch(m){if(!_r(m))throw m;q(oc,"Failed to update sequence numbers: "+m)}for(const m of h){const y=m.targetId;if(!m.fromCache){const E=f.Ms.get(y),P=E.snapshotVersion,x=E.withLastLimboFreeSnapshotVersion(P);f.Ms=f.Ms.insert(y,x)}}}(r.localStore,i))}async function EE(n,e){const t=te(n);if(!t.currentUser.isEqual(e)){q(yc,"User change. New user:",e.toKey());const r=await lf(t.localStore,e);t.currentUser=e,function(i,a){i.mu.forEach(c=>{c.forEach(u=>{u.reject(new $(N.CANCELLED,a))})}),i.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ms(t,r.Ls)}}function wE(n,e){const t=te(n),r=t.Au.get(e);if(r&&r.hu)return oe().add(r.key);{let s=oe();const i=t.Iu.get(e);if(!i)return s;for(const a of i){const c=t.Tu.get(a);s=s.unionWith(c.view.nu)}return s}}function bf(n){const e=te(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=wf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=wE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=yE.bind(null,e),e.Pu.H_=iE.bind(null,e.eventManager),e.Pu.yu=oE.bind(null,e.eventManager),e}function TE(n){const e=te(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=_E.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=vE.bind(null,e),e}class _i{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ki(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return RI(this.persistence,new SI,e.initialUser,this.serializer)}Cu(e){return new cf(sc.mi,this.serializer)}Du(e){return new NI}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}_i.provider={build:()=>new _i};class SE extends _i{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){de(this.persistence.referenceDelegate instanceof gi,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new lI(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Ke.withCacheSize(this.cacheSizeBytes):Ke.DEFAULT;return new cf(r=>gi.mi(r,t),this.serializer)}}class Pa{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ih(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=EE.bind(null,this.syncEngine),await nE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new sE}()}createDatastore(e){const t=Ki(e.databaseInfo.databaseId),r=function(i){return new LI(i)}(e.databaseInfo);return function(i,a,c,u){return new zI(i,a,c,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,c){return new WI(r,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>ih(this.syncEngine,t,0),function(){return Zu.v()?new Zu:new OI}())}createSyncEngine(e,t){return function(s,i,a,c,u,h,f){const m=new uE(s,i,a,c,u,h);return f&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=te(s);q(On,"RemoteStore shutting down."),i.Ea.add(5),await ps(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Pa.provider={build:()=>new Pa};/**
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
 */class vc{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Dt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const an="FirestoreClient";class AE{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Be.UNAUTHENTICATED,this.clientId=Ha.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{q(an,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(q(an,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Pt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=dc(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Xo(n,e){n.asyncQueue.verifyOperationInProgress(),q(an,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await lf(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function ah(n,e){n.asyncQueue.verifyOperationInProgress();const t=await bE(n);q(an,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>th(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>th(e.remoteStore,s)),n._onlineComponents=e}async function bE(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){q(an,"Using user provided OfflineComponentProvider");try{await Xo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===N.FAILED_PRECONDITION||s.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;ir("Error using user provided cache. Falling back to memory cache: "+t),await Xo(n,new _i)}}else q(an,"Using default OfflineComponentProvider"),await Xo(n,new SE(void 0));return n._offlineComponents}async function Rf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(q(an,"Using user provided OnlineComponentProvider"),await ah(n,n._uninitializedComponentsProvider._online)):(q(an,"Using default OnlineComponentProvider"),await ah(n,new Pa))),n._onlineComponents}function RE(n){return Rf(n).then(e=>e.syncEngine)}async function vi(n){const e=await Rf(n),t=e.eventManager;return t.onListen=hE.bind(null,e.syncEngine),t.onUnlisten=pE.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=dE.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=mE.bind(null,e.syncEngine),t}function xE(n,e,t={}){const r=new Pt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,u,h){const f=new vc({next:y=>{f.Nu(),a.enqueueAndForget(()=>pc(i,m));const E=y.docs.has(c);!E&&y.fromCache?h.reject(new $(N.UNAVAILABLE,"Failed to get document because the client is offline.")):E&&y.fromCache&&u&&u.source==="server"?h.reject(new $(N.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(y)},error:y=>h.reject(y)}),m=new gc($i(c.path),f,{includeMetadataChanges:!0,qa:!0});return fc(i,m)}(await vi(n),n.asyncQueue,e,t,r)),r.promise}function CE(n,e,t={}){const r=new Pt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,u,h){const f=new vc({next:y=>{f.Nu(),a.enqueueAndForget(()=>pc(i,m)),y.fromCache&&u.source==="server"?h.reject(new $(N.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(y)},error:y=>h.reject(y)}),m=new gc(c,f,{includeMetadataChanges:!0,qa:!0});return fc(i,m)}(await vi(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function xf(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const ch=new Map;/**
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
 */const Cf="firestore.googleapis.com",lh=!0;class uh{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new $(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Cf,this.ssl=lh}else this.host=e.host,this.ssl=e.ssl??lh;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=af;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<aI)throw new $(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}q_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=xf(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new $(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new $(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new $(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Yi{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new uh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new uh(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new N_;switch(r.type){case"firstParty":return new F_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=ch.get(t);r&&(q("ComponentProvider","Removing Datastore"),ch.delete(t),r.terminate())}(this),Promise.resolve()}}function PE(n,e,t,r={}){var h;n=Je(n,Yi);const s=pr(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;s&&(sd(`https://${c}`),id("Firestore",!0)),i.host!==Cf&&i.host!==c&&ir("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:c,ssl:s,emulatorOptions:r};if(!Dn(u,a)&&(n._setSettings(u),r.mockUserToken)){let f,m;if(typeof r.mockUserToken=="string")f=r.mockUserToken,m=Be.MOCK_USER;else{f=iy(r.mockUserToken,(h=n._app)==null?void 0:h.options.projectId);const y=r.mockUserToken.sub||r.mockUserToken.user_id;if(!y)throw new $(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Be(y)}n._authCredentials=new O_(new yd(f,m))}}/**
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
 */class Ft{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ft(this.firestore,e,this._query)}}class Ie{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ie(this.firestore,e,this._key)}toJSON(){return{type:Ie._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(hs(t,Ie._jsonSchema))return new Ie(e,r||null,new Q(ge.fromString(t.referencePath)))}}Ie._jsonSchemaVersion="firestore/documentReference/1.0",Ie._jsonSchema={type:Ae("string",Ie._jsonSchemaVersion),referencePath:Ae("string")};class Xt extends Ft{constructor(e,t,r){super(e,t,$i(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ie(this.firestore,null,new Q(e))}withConverter(e){return new Xt(this.firestore,e,this._path)}}function Nt(n,e,...t){if(n=Pe(n),_d("collection","path",e),n instanceof Yi){const r=ge.fromString(e,...t);return Tu(r),new Xt(n,null,r)}{if(!(n instanceof Ie||n instanceof Xt))throw new $(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ge.fromString(e,...t));return Tu(r),new Xt(n.firestore,null,r)}}function Ye(n,e,...t){if(n=Pe(n),arguments.length===1&&(e=Ha.newId()),_d("doc","path",e),n instanceof Yi){const r=ge.fromString(e,...t);return wu(r),new Ie(n,null,new Q(r))}{if(!(n instanceof Ie||n instanceof Xt))throw new $(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ge.fromString(e,...t));return wu(r),new Ie(n.firestore,n instanceof Xt?n.converter:null,new Q(r))}}/**
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
 */const hh="AsyncQueue";class dh{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new hf(this,"async_queue_retry"),this._c=()=>{const r=Yo();r&&q(hh,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=Yo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Yo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new Pt;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!_r(e))throw e;q(hh,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Dt("INTERNAL UNHANDLED ERROR: ",fh(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=hc.createAndSchedule(this,e,t,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&Y(47125,{Pc:fh(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function fh(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function ph(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class Ot extends Yi{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new dh,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new dh(e),this._firestoreClient=void 0,await e}}}function kE(n,e){const t=typeof n=="object"?n:$r(),r=typeof n=="string"?n:e||ui,s=qa(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=ry("firestore");i&&PE(s,...i)}return s}function Xi(n){if(n._terminated)throw new $(N.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||DE(n),n._firestoreClient}function DE(n){var r,s,i;const e=n._freezeSettings(),t=function(c,u,h,f){return new nv(c,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,xf(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,e);n._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new AE(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}}(n._componentsProvider))}/**
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
 */class tt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new tt(Oe.fromBase64String(e))}catch(t){throw new $(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new tt(Oe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:tt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(hs(e,tt._jsonSchema))return tt.fromBase64String(e.bytes)}}tt._jsonSchemaVersion="firestore/bytes/1.0",tt._jsonSchema={type:Ae("string",tt._jsonSchemaVersion),bytes:Ae("string")};/**
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
 */class Zi{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new $(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ne(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class eo{constructor(e){this._methodName=e}}/**
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
 */class gt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new $(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new $(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ie(this._lat,e._lat)||ie(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:gt._jsonSchemaVersion}}static fromJSON(e){if(hs(e,gt._jsonSchema))return new gt(e.latitude,e.longitude)}}gt._jsonSchemaVersion="firestore/geoPoint/1.0",gt._jsonSchema={type:Ae("string",gt._jsonSchemaVersion),latitude:Ae("number"),longitude:Ae("number")};/**
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
 */class yt{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:yt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(hs(e,yt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new yt(e.vectorValues);throw new $(N.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}yt._jsonSchemaVersion="firestore/vectorValue/1.0",yt._jsonSchema={type:Ae("string",yt._jsonSchemaVersion),vectorValues:Ae("object")};/**
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
 */const VE=/^__.*__$/;class NE{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new ln(e,this.data,this.fieldMask,t,this.fieldTransforms):new ds(e,this.data,t,this.fieldTransforms)}}class Pf{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new ln(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function kf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y(40011,{Ac:n})}}class Ic{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Ic({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Ii(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(kf(this.Ac)&&VE.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class OE{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ki(e)}Cc(e,t,r,s=!1){return new Ic({Ac:e,methodName:t,Dc:r,path:Ne.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function to(n){const e=n._freezeSettings(),t=Ki(n._databaseId);return new OE(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Df(n,e,t,r,s,i={}){const a=n.Cc(i.merge||i.mergeFields?2:0,e,t,s);wc("Data must be an object, but it was:",a,r);const c=Vf(r,a);let u,h;if(i.merge)u=new et(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const y=ka(e,m,t);if(!a.contains(y))throw new $(N.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);Of(f,y)||f.push(y)}u=new et(f),h=a.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=a.fieldTransforms;return new NE(new Qe(c),u,h)}class no extends eo{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof no}}class Ec extends eo{_toFieldTransform(e){return new Rv(e.path,new ss)}isEqual(e){return e instanceof Ec}}function ME(n,e,t,r){const s=n.Cc(1,e,t);wc("Data must be an object, but it was:",s,r);const i=[],a=Qe.empty();cn(r,(u,h)=>{const f=Tc(e,u,t);h=Pe(h);const m=s.yc(f);if(h instanceof no)i.push(f);else{const y=gs(h,m);y!=null&&(i.push(f),a.set(f,y))}});const c=new et(i);return new Pf(a,c,s.fieldTransforms)}function jE(n,e,t,r,s,i){const a=n.Cc(1,e,t),c=[ka(e,r,t)],u=[s];if(i.length%2!=0)throw new $(N.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<i.length;y+=2)c.push(ka(e,i[y])),u.push(i[y+1]);const h=[],f=Qe.empty();for(let y=c.length-1;y>=0;--y)if(!Of(h,c[y])){const E=c[y];let P=u[y];P=Pe(P);const x=a.yc(E);if(P instanceof no)h.push(E);else{const w=gs(P,x);w!=null&&(h.push(E),f.set(E,w))}}const m=new et(h);return new Pf(f,m,a.fieldTransforms)}function FE(n,e,t,r=!1){return gs(t,n.Cc(r?4:3,e))}function gs(n,e){if(Nf(n=Pe(n)))return wc("Unsupported field value:",e,n),Vf(n,e);if(n instanceof eo)return function(r,s){if(!kf(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const c of r){let u=gs(c,s.wc(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=Pe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Sv(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=he.fromDate(r);return{timestampValue:mi(s.serializer,i)}}if(r instanceof he){const i=new he(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:mi(s.serializer,i)}}if(r instanceof gt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof tt)return{bytesValue:Zd(s.serializer,r._byteString)};if(r instanceof Ie){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:nc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof yt)return function(a,c){return{mapValue:{fields:{[Rd]:{stringValue:Cd},[hi]:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw c.Sc("VectorValues must only contain numeric values.");return Xa(c.serializer,h)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${Fi(r)}`)}(n,e)}function Vf(n,e){const t={};return Ed(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):cn(n,(r,s)=>{const i=gs(s,e.mc(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Nf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof he||n instanceof gt||n instanceof tt||n instanceof Ie||n instanceof eo||n instanceof yt)}function wc(n,e,t){if(!Nf(t)||!vd(t)){const r=Fi(t);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function ka(n,e,t){if((e=Pe(e))instanceof Zi)return e._internalPath;if(typeof e=="string")return Tc(n,e);throw Ii("Field path arguments must be of type string or ",n,!1,void 0,t)}const LE=new RegExp("[~\\*/\\[\\]]");function Tc(n,e,t){if(e.search(LE)>=0)throw Ii(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Zi(...e.split("."))._internalPath}catch{throw Ii(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ii(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new $(N.INVALID_ARGUMENT,c+n+u)}function Of(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Mf{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ie(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new UE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ro("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class UE extends Mf{data(){return super.data()}}function ro(n,e){return typeof e=="string"?Tc(n,e):e instanceof Zi?e._internalPath:e._delegate._internalPath}/**
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
 */function jf(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new $(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Sc{}class Ac extends Sc{}function Zt(n,e,...t){let r=[];e instanceof Sc&&r.push(e),r=r.concat(t),function(i){const a=i.filter(u=>u instanceof bc).length,c=i.filter(u=>u instanceof so).length;if(a>1||a>0&&c>0)throw new $(N.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class so extends Ac{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new so(e,t,r)}_apply(e){const t=this._parse(e);return Lf(e._query,t),new Ft(e.firestore,e.converter,Ea(e._query,t))}_parse(e){const t=to(e.firestore);return function(i,a,c,u,h,f,m){let y;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new $(N.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){gh(m,f);const P=[];for(const x of m)P.push(mh(u,i,x));y={arrayValue:{values:P}}}else y=mh(u,i,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||gh(m,f),y=FE(c,a,m,f==="in"||f==="not-in");return Se.create(h,f,y)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Rt(n,e,t){const r=e,s=ro("where",n);return so._create(s,r,t)}class bc extends Sc{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new bc(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:ht.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const c=i.getFlattenedFilters();for(const u of c)Lf(a,u),a=Ea(a,u)}(e._query,t),new Ft(e.firestore,e.converter,Ea(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Rc extends Ac{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Rc(e,t)}_apply(e){const t=function(s,i,a){if(s.startAt!==null)throw new $(N.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new $(N.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new rs(i,a)}(e._query,this._field,this._direction);return new Ft(e.firestore,e.converter,function(s,i){const a=s.explicitOrderBy.concat([i]);return new vr(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function Ff(n,e="asc"){const t=e,r=ro("orderBy",n);return Rc._create(r,t)}class xc extends Ac{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new xc(e,t,r)}_apply(e){return new Ft(e.firestore,e.converter,fi(e._query,this._limit,this._limitType))}}function hS(n){return W_("limit",n),xc._create("limit",n,"F")}function mh(n,e,t){if(typeof(t=Pe(t))=="string"){if(t==="")throw new $(N.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!jd(e)&&t.indexOf("/")!==-1)throw new $(N.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ge.fromString(t));if(!Q.isDocumentKey(r))throw new $(N.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ku(n,new Q(r))}if(t instanceof Ie)return ku(n,t._key);throw new $(N.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Fi(t)}.`)}function gh(n,e){if(!Array.isArray(n)||n.length===0)throw new $(N.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Lf(n,e){const t=function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new $(N.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(N.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class BE{convertValue(e,t="none"){switch(sn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ee(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(rn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Y(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return cn(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var r,s,i;const t=(i=(s=(r=e.fields)==null?void 0:r[hi].arrayValue)==null?void 0:s.values)==null?void 0:i.map(a=>Ee(a.doubleValue));return new yt(t)}convertGeoPoint(e){return new gt(Ee(e.latitude),Ee(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Bi(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(es(e));default:return null}}convertTimestamp(e){const t=nn(e);return new he(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ge.fromString(e);de(of(r),9688,{name:e});const s=new ts(r.get(1),r.get(3)),i=new Q(r.popFirst(5));return s.isEqual(t)||Dt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function Uf(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class Ur{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class xn extends Mf{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ti(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(ro("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new $(N.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=xn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}xn._jsonSchemaVersion="firestore/documentSnapshot/1.0",xn._jsonSchema={type:Ae("string",xn._jsonSchemaVersion),bundleSource:Ae("string","DocumentSnapshot"),bundleName:Ae("string"),bundle:Ae("string")};class ti extends xn{data(e={}){return super.data(e)}}class Cn{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Ur(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new ti(this._firestore,this._userDataWriter,r.key,r,new Ur(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new $(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const u=new ti(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ur(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const u=new ti(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ur(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),f=a.indexOf(c.doc.key)),{type:$E(c.type),doc:u,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new $(N.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Cn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ha.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function $E(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y(61501,{type:n})}}/**
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
 */function io(n){n=Je(n,Ie);const e=Je(n.firestore,Ot);return xE(Xi(e),n._key).then(t=>$f(e,n,t))}Cn._jsonSchemaVersion="firestore/querySnapshot/1.0",Cn._jsonSchema={type:Ae("string",Cn._jsonSchemaVersion),bundleSource:Ae("string","QuerySnapshot"),bundleName:Ae("string"),bundle:Ae("string")};class Cc extends BE{constructor(e){super(),this.firestore=e}convertBytes(e){return new tt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ie(this.firestore,null,t)}}function hr(n){n=Je(n,Ft);const e=Je(n.firestore,Ot),t=Xi(e),r=new Cc(e);return jf(n._query),CE(t,n._query).then(s=>new Cn(e,r,n,s))}function Pc(n,e,t){n=Je(n,Ie);const r=Je(n.firestore,Ot),s=Uf(n.converter,e,t);return ao(r,[Df(to(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,nt.none())])}function oo(n,e,t,...r){n=Je(n,Ie);const s=Je(n.firestore,Ot),i=to(s);let a;return a=typeof(e=Pe(e))=="string"||e instanceof Zi?jE(i,"updateDoc",n._key,e,t,r):ME(i,"updateDoc",n._key,e),ao(s,[a.toMutation(n._key,nt.exists(!0))])}function Bf(n){return ao(Je(n.firestore,Ot),[new Za(n._key,nt.none())])}function kc(n,e){const t=Je(n.firestore,Ot),r=Ye(n),s=Uf(n.converter,e);return ao(t,[Df(to(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,nt.exists(!1))]).then(()=>r)}function zE(n,...e){var u,h,f;n=Pe(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||ph(e[r])||(t=e[r++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(ph(e[r])){const m=e[r];e[r]=(u=m.next)==null?void 0:u.bind(m),e[r+1]=(h=m.error)==null?void 0:h.bind(m),e[r+2]=(f=m.complete)==null?void 0:f.bind(m)}let i,a,c;if(n instanceof Ie)a=Je(n.firestore,Ot),c=$i(n._key.path),i={next:m=>{e[r]&&e[r]($f(a,n,m))},error:e[r+1],complete:e[r+2]};else{const m=Je(n,Ft);a=Je(m.firestore,Ot),c=m._query;const y=new Cc(a);i={next:E=>{e[r]&&e[r](new Cn(a,y,m,E))},error:e[r+1],complete:e[r+2]},jf(n._query)}return function(y,E,P,x){const w=new vc(x),M=new gc(E,w,P);return y.asyncQueue.enqueueAndForget(async()=>fc(await vi(y),M)),()=>{w.Nu(),y.asyncQueue.enqueueAndForget(async()=>pc(await vi(y),M))}}(Xi(a),c,s,i)}function ao(n,e){return function(r,s){const i=new Pt;return r.asyncQueue.enqueueAndForget(async()=>gE(await RE(r),s,i)),i.promise}(Xi(n),e)}function $f(n,e,t){const r=t.docs.get(e._key),s=new Cc(n);return new xn(n,s,e._key,r,new Ur(t.hasPendingWrites,t.fromCache),e.converter)}function Dc(){return new Ec("serverTimestamp")}(function(e,t=!0){(function(s){gr=s})(mr),sr(new Vn("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new Ot(new M_(r.getProvider("auth-internal")),new L_(a,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new $(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ts(h.options.projectId,f)}(a,s),a);return i={useFetchStreams:t,...i},c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Jt(_u,vu,e),Jt(_u,vu,"esm2020")})();function zf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qE=zf,qf=new ls("auth","Firebase",zf());/**
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
 */const Ei=new $a("@firebase/auth");function WE(n,...e){Ei.logLevel<=se.WARN&&Ei.warn(`Auth (${mr}): ${n}`,...e)}function ni(n,...e){Ei.logLevel<=se.ERROR&&Ei.error(`Auth (${mr}): ${n}`,...e)}/**
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
 */function It(n,...e){throw Nc(n,...e)}function ut(n,...e){return Nc(n,...e)}function Vc(n,e,t){const r={...qE(),[e]:t};return new ls("auth","Firebase",r).create(e,{appName:n.name})}function Pn(n){return Vc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function HE(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&It(n,"argument-error"),Vc(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Nc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return qf.create(n,...e)}function Z(n,e,...t){if(!n)throw Nc(e,...t)}function xt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ni(e),new Error(e)}function Mt(n,e){n||xt(e)}/**
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
 */function Da(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function GE(){return yh()==="http:"||yh()==="https:"}function yh(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function KE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(GE()||hy()||"connection"in navigator)?navigator.onLine:!0}function QE(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class ys{constructor(e,t){this.shortDelay=e,this.longDelay=t,Mt(t>e,"Short delay should be less than long delay!"),this.isMobile=cy()||dy()}get(){return KE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Oc(n,e){Mt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Wf{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;xt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;xt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;xt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const JE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const YE=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],XE=new ys(3e4,6e4);function Mc(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Er(n,e,t,r,s={}){return Hf(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=us({key:n.config.apiKey,...a}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const h={method:e,headers:u,...i};return uy()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&pr(n.emulatorConfig.host)&&(h.credentials="include"),Wf.fetch()(await Gf(n,n.config.apiHost,t,c),h)})}async function Hf(n,e,t){n._canInitEmulator=!1;const r={...JE,...e};try{const s=new ew(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Gs(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[u,h]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gs(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Gs(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw Gs(n,"user-disabled",a);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Vc(n,f,h);It(n,f)}}catch(s){if(s instanceof jt)throw s;It(n,"network-request-failed",{message:String(s)})}}async function ZE(n,e,t,r,s={}){const i=await Er(n,e,t,r,s);return"mfaPendingCredential"in i&&It(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Gf(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?Oc(n.config,s):`${n.config.apiScheme}://${s}`;return YE.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class ew{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(ut(this.auth,"network-request-failed")),XE.get())})}}function Gs(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=ut(n,e,r);return s.customData._tokenResponse=t,s}/**
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
 */async function tw(n,e){return Er(n,"POST","/v1/accounts:delete",e)}async function wi(n,e){return Er(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Gr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function nw(n,e=!1){const t=Pe(n),r=await t.getIdToken(e),s=jc(r);Z(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Gr(Zo(s.auth_time)),issuedAtTime:Gr(Zo(s.iat)),expirationTime:Gr(Zo(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Zo(n){return Number(n)*1e3}function jc(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ni("JWT malformed, contained fewer than 3 sections"),null;try{const s=ed(t);return s?JSON.parse(s):(ni("Failed to decode base64 JWT payload"),null)}catch(s){return ni("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function _h(n){const e=jc(n);return Z(e,"internal-error"),Z(typeof e.exp<"u","internal-error"),Z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function as(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof jt&&rw(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function rw({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class sw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Va{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gr(this.lastLoginAt),this.creationTime=Gr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ti(n){var m;const e=n.auth,t=await n.getIdToken(),r=await as(n,wi(e,{idToken:t}));Z(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(m=s.providerUserInfo)!=null&&m.length?Kf(s.providerUserInfo):[],a=ow(n.providerData,i),c=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),h=c?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Va(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,f)}async function iw(n){const e=Pe(n);await Ti(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ow(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Kf(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function aw(n,e){const t=await Hf(n,{},async()=>{const r=us({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await Gf(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:r};return n.emulatorConfig&&pr(n.emulatorConfig.host)&&(u.credentials="include"),Wf.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function cw(n,e){return Er(n,"POST","/v2/accounts:revokeToken",Mc(n,e))}/**
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
 */class Zn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken<"u","internal-error"),Z(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):_h(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Z(e.length!==0,"internal-error");const t=_h(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await aw(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Zn;return r&&(Z(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(Z(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(Z(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Zn,this.toJSON())}_performRefresh(){return xt("not implemented")}}/**
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
 */function $t(n,e){Z(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ct{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new sw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Va(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await as(this,this.stsTokenManager.getToken(this.auth,e));return Z(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return nw(this,e)}reload(){return iw(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ct({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ti(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(at(this.auth.app))return Promise.reject(Pn(this.auth));const e=await this.getIdToken();return await as(this,tw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,c=t.tenantId??void 0,u=t._redirectEventId??void 0,h=t.createdAt??void 0,f=t.lastLoginAt??void 0,{uid:m,emailVerified:y,isAnonymous:E,providerData:P,stsTokenManager:x}=t;Z(m&&x,e,"internal-error");const w=Zn.fromJSON(this.name,x);Z(typeof m=="string",e,"internal-error"),$t(r,e.name),$t(s,e.name),Z(typeof y=="boolean",e,"internal-error"),Z(typeof E=="boolean",e,"internal-error"),$t(i,e.name),$t(a,e.name),$t(c,e.name),$t(u,e.name),$t(h,e.name),$t(f,e.name);const M=new ct({uid:m,auth:e,email:s,emailVerified:y,displayName:r,isAnonymous:E,photoURL:a,phoneNumber:i,tenantId:c,stsTokenManager:w,createdAt:h,lastLoginAt:f});return P&&Array.isArray(P)&&(M.providerData=P.map(U=>({...U}))),u&&(M._redirectEventId=u),M}static async _fromIdTokenResponse(e,t,r=!1){const s=new Zn;s.updateFromServerResponse(t);const i=new ct({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ti(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];Z(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Kf(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Zn;c.updateFromIdToken(r);const u=new ct({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Va(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,h),u}}/**
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
 */const vh=new Map;function Ct(n){Mt(n instanceof Function,"Expected a class definition");let e=vh.get(n);return e?(Mt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,vh.set(n,e),e)}/**
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
 */class Qf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Qf.type="NONE";const Ih=Qf;/**
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
 */function ri(n,e,t){return`firebase:${n}:${e}:${t}`}class er{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ri(this.userKey,s.apiKey,i),this.fullPersistenceKey=ri("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await wi(this.auth,{idToken:e}).catch(()=>{});return t?ct._fromGetAccountInfoResponse(this.auth,t,e):null}return ct._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new er(Ct(Ih),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Ct(Ih);const a=ri(r,e.config.apiKey,e.name);let c=null;for(const h of t)try{const f=await h._get(a);if(f){let m;if(typeof f=="string"){const y=await wi(e,{idToken:f}).catch(()=>{});if(!y)break;m=await ct._fromGetAccountInfoResponse(e,y,f)}else m=ct._fromJSON(e,f);h!==i&&(c=m),i=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new er(i,e,r):(i=u[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new er(i,e,r))}}/**
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
 */function Eh(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Zf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Jf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(tp(e))return"Blackberry";if(np(e))return"Webos";if(Yf(e))return"Safari";if((e.includes("chrome/")||Xf(e))&&!e.includes("edge/"))return"Chrome";if(ep(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Jf(n=qe()){return/firefox\//i.test(n)}function Yf(n=qe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Xf(n=qe()){return/crios\//i.test(n)}function Zf(n=qe()){return/iemobile/i.test(n)}function ep(n=qe()){return/android/i.test(n)}function tp(n=qe()){return/blackberry/i.test(n)}function np(n=qe()){return/webos/i.test(n)}function Fc(n=qe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function lw(n=qe()){var e;return Fc(n)&&!!((e=window.navigator)!=null&&e.standalone)}function uw(){return fy()&&document.documentMode===10}function rp(n=qe()){return Fc(n)||ep(n)||np(n)||tp(n)||/windows phone/i.test(n)||Zf(n)}/**
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
 */function sp(n,e=[]){let t;switch(n){case"Browser":t=Eh(qe());break;case"Worker":t=`${Eh(qe())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${mr}/${r}`}/**
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
 */class hw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const u=e(i);a(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function dw(n,e={}){return Er(n,"GET","/v2/passwordPolicy",Mc(n,e))}/**
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
 */const fw=6;class pw{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??fw,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class mw{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wh(this),this.idTokenSubscription=new wh(this),this.beforeStateQueue=new hw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ct(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await er.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await wi(this,{idToken:e}),r=await ct._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(at(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ti(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=QE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(at(this.app))return Promise.reject(Pn(this));const t=e?Pe(e):null;return t&&Z(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return at(this.app)?Promise.reject(Pn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return at(this.app)?Promise.reject(Pn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ct(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await dw(this),t=new pw(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ls("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await cw(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ct(e)||this._popupRedirectResolver;Z(t,this,"argument-error"),this.redirectPersistenceManager=await er.create(this,[Ct(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(Z(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=sp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(at(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&WE(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function co(n){return Pe(n)}class wh{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ey(t=>this.observer=t)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Lc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function gw(n){Lc=n}function yw(n){return Lc.loadJS(n)}function _w(){return Lc.gapiScript}function vw(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Iw(n,e){const t=qa(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Dn(i,e??{}))return s;It(s,"already-initialized")}return t.initialize({options:e})}function Ew(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Ct);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ww(n,e,t){const r=co(n);Z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),i=ip(e),{host:a,port:c}=Tw(e),u=c===null?"":`:${c}`,h={url:`${i}//${a}${u}/`},f=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){Z(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Z(Dn(h,r.config.emulator)&&Dn(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,pr(a)?(sd(`${i}//${a}${u}`),id("Auth",!0)):s||Sw()}function ip(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Tw(n){const e=ip(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Th(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Th(a)}}}function Th(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Sw(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class op{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return xt("not implemented")}_getIdTokenResponse(e){return xt("not implemented")}_linkToIdToken(e,t){return xt("not implemented")}_getReauthenticationResolver(e){return xt("not implemented")}}/**
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
 */async function tr(n,e){return ZE(n,"POST","/v1/accounts:signInWithIdp",Mc(n,e))}/**
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
 */const Aw="http://localhost";class Mn extends op{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Mn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):It("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const a=new Mn(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return tr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,tr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,tr(e,t)}buildRequest(){const e={requestUri:Aw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=us(t)}return e}}/**
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
 */class Uc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class _s extends Uc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class zt extends _s{constructor(){super("facebook.com")}static credential(e){return Mn._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zt.credentialFromTaggedObject(e)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zt.credential(e.oauthAccessToken)}catch{return null}}}zt.FACEBOOK_SIGN_IN_METHOD="facebook.com";zt.PROVIDER_ID="facebook.com";/**
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
 */class At extends _s{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Mn._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return At.credentialFromTaggedObject(e)}static credentialFromError(e){return At.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return At.credential(t,r)}catch{return null}}}At.GOOGLE_SIGN_IN_METHOD="google.com";At.PROVIDER_ID="google.com";/**
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
 */class qt extends _s{constructor(){super("github.com")}static credential(e){return Mn._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qt.credential(e.oauthAccessToken)}catch{return null}}}qt.GITHUB_SIGN_IN_METHOD="github.com";qt.PROVIDER_ID="github.com";/**
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
 */class Wt extends _s{constructor(){super("twitter.com")}static credential(e,t){return Mn._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Wt.credentialFromTaggedObject(e)}static credentialFromError(e){return Wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Wt.credential(t,r)}catch{return null}}}Wt.TWITTER_SIGN_IN_METHOD="twitter.com";Wt.PROVIDER_ID="twitter.com";/**
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
 */class dr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await ct._fromIdTokenResponse(e,r,s),a=Sh(r);return new dr({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Sh(r);return new dr({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Sh(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Si extends jt{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Si.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Si(e,t,r,s)}}function ap(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Si._fromErrorAndOperation(n,i,e,r):i})}async function bw(n,e,t=!1){const r=await as(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return dr._forOperation(n,"link",r)}/**
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
 */async function Rw(n,e,t=!1){const{auth:r}=n;if(at(r.app))return Promise.reject(Pn(r));const s="reauthenticate";try{const i=await as(n,ap(r,s,e,n),t);Z(i.idToken,r,"internal-error");const a=jc(i.idToken);Z(a,r,"internal-error");const{sub:c}=a;return Z(n.uid===c,r,"user-mismatch"),dr._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&It(r,"user-mismatch"),i}}/**
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
 */async function xw(n,e,t=!1){if(at(n.app))return Promise.reject(Pn(n));const r="signIn",s=await ap(n,r,e),i=await dr._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}function Cw(n,e,t,r){return Pe(n).onIdTokenChanged(e,t,r)}function Pw(n,e,t){return Pe(n).beforeAuthStateChanged(e,t)}function kw(n,e,t,r){return Pe(n).onAuthStateChanged(e,t,r)}function Dw(n){return Pe(n).signOut()}const Ai="__sak";/**
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
 */class cp{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ai,"1"),this.storage.removeItem(Ai),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Vw=1e3,Nw=10;class lp extends cp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=rp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);uw()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Nw):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Vw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}lp.type="LOCAL";const Ow=lp;/**
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
 */class up extends cp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}up.type="SESSION";const hp=up;/**
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
 */function Mw(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class lo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new lo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async h=>h(t.origin,i)),u=await Mw(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}lo.receivers=[];/**
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
 */function Bc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class jw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,u)=>{const h=Bc("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(m){const y=m;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(y.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function _t(){return window}function Fw(n){_t().location.href=n}/**
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
 */function dp(){return typeof _t().WorkerGlobalScope<"u"&&typeof _t().importScripts=="function"}async function Lw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Uw(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function Bw(){return dp()?self:null}/**
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
 */const fp="firebaseLocalStorageDb",$w=1,bi="firebaseLocalStorage",pp="fbase_key";class vs{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function uo(n,e){return n.transaction([bi],e?"readwrite":"readonly").objectStore(bi)}function zw(){const n=indexedDB.deleteDatabase(fp);return new vs(n).toPromise()}function Na(){const n=indexedDB.open(fp,$w);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(bi,{keyPath:pp})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(bi)?e(r):(r.close(),await zw(),e(await Na()))})})}async function Ah(n,e,t){const r=uo(n,!0).put({[pp]:e,value:t});return new vs(r).toPromise()}async function qw(n,e){const t=uo(n,!1).get(e),r=await new vs(t).toPromise();return r===void 0?null:r.value}function bh(n,e){const t=uo(n,!0).delete(e);return new vs(t).toPromise()}const Ww=800,Hw=3;class mp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Na(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Hw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return dp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=lo._getInstance(Bw()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await Lw(),!this.activeServiceWorker)return;this.sender=new jw(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Uw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Na();return await Ah(e,Ai,"1"),await bh(e,Ai),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ah(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>qw(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>bh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=uo(s,!1).getAll();return new vs(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ww)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}mp.type="LOCAL";const Gw=mp;new ys(3e4,6e4);/**
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
 */function gp(n,e){return e?Ct(e):(Z(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class $c extends op{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return tr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return tr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return tr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Kw(n){return xw(n.auth,new $c(n),n.bypassAuthState)}function Qw(n){const{auth:e,user:t}=n;return Z(t,e,"internal-error"),Rw(t,new $c(n),n.bypassAuthState)}async function Jw(n){const{auth:e,user:t}=n;return Z(t,e,"internal-error"),bw(t,new $c(n),n.bypassAuthState)}/**
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
 */class yp{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Kw;case"linkViaPopup":case"linkViaRedirect":return Jw;case"reauthViaPopup":case"reauthViaRedirect":return Qw;default:It(this.auth,"internal-error")}}resolve(e){Mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Yw=new ys(2e3,1e4);async function Xw(n,e,t){if(at(n.app))return Promise.reject(ut(n,"operation-not-supported-in-this-environment"));const r=co(n);HE(n,e,Uc);const s=gp(r,t);return new An(r,"signInViaPopup",e,s).executeNotNull()}class An extends yp{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,An.currentPopupAction&&An.currentPopupAction.cancel(),An.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Z(e,this.auth,"internal-error"),e}async onExecution(){Mt(this.filter.length===1,"Popup operations only handle one event");const e=Bc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ut(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(ut(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,An.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ut(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Yw.get())};e()}}An.currentPopupAction=null;/**
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
 */const Zw="pendingRedirect",si=new Map;class e0 extends yp{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=si.get(this.auth._key());if(!e){try{const r=await t0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}si.set(this.auth._key(),e)}return this.bypassAuthState||si.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function t0(n,e){const t=s0(e),r=r0(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function n0(n,e){si.set(n._key(),e)}function r0(n){return Ct(n._redirectPersistence)}function s0(n){return ri(Zw,n.config.apiKey,n.name)}async function i0(n,e,t=!1){if(at(n.app))return Promise.reject(Pn(n));const r=co(n),s=gp(r,e),a=await new e0(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const o0=10*60*1e3;class a0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!c0(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!_p(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(ut(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=o0&&this.cachedEventUids.clear(),this.cachedEventUids.has(Rh(e))}saveEventToCache(e){this.cachedEventUids.add(Rh(e)),this.lastProcessedEventTime=Date.now()}}function Rh(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function _p({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function c0(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _p(n);default:return!1}}/**
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
 */async function l0(n,e={}){return Er(n,"GET","/v1/projects",e)}/**
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
 */const u0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,h0=/^https?/;async function d0(n){if(n.config.emulator)return;const{authorizedDomains:e}=await l0(n);for(const t of e)try{if(f0(t))return}catch{}It(n,"unauthorized-domain")}function f0(n){const e=Da(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!h0.test(t))return!1;if(u0.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const p0=new ys(3e4,6e4);function xh(){const n=_t().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function m0(n){return new Promise((e,t)=>{var s,i,a;function r(){xh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{xh(),t(ut(n,"network-request-failed"))},timeout:p0.get()})}if((i=(s=_t().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((a=_t().gapi)!=null&&a.load)r();else{const c=vw("iframefcb");return _t()[c]=()=>{gapi.load?r():t(ut(n,"network-request-failed"))},yw(`${_w()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw ii=null,e})}let ii=null;function g0(n){return ii=ii||m0(n),ii}/**
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
 */const y0=new ys(5e3,15e3),_0="__/auth/iframe",v0="emulator/auth/iframe",I0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},E0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function w0(n){const e=n.config;Z(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Oc(e,v0):`https://${n.config.authDomain}/${_0}`,r={apiKey:e.apiKey,appName:n.name,v:mr},s=E0.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${us(r).slice(1)}`}async function T0(n){const e=await g0(n),t=_t().gapi;return Z(t,n,"internal-error"),e.open({where:document.body,url:w0(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:I0,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=ut(n,"network-request-failed"),c=_t().setTimeout(()=>{i(a)},y0.get());function u(){_t().clearTimeout(c),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
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
 */const S0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},A0=500,b0=600,R0="_blank",x0="http://localhost";class Ch{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function C0(n,e,t,r=A0,s=b0){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u={...S0,width:r.toString(),height:s.toString(),top:i,left:a},h=qe().toLowerCase();t&&(c=Xf(h)?R0:t),Jf(h)&&(e=e||x0,u.scrollbars="yes");const f=Object.entries(u).reduce((y,[E,P])=>`${y}${E}=${P},`,"");if(lw(h)&&c!=="_self")return P0(e||"",c),new Ch(null);const m=window.open(e||"",c,f);Z(m,n,"popup-blocked");try{m.focus()}catch{}return new Ch(m)}function P0(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const k0="__/auth/handler",D0="emulator/auth/handler",V0=encodeURIComponent("fac");async function Ph(n,e,t,r,s,i){Z(n.config.authDomain,n,"auth-domain-config-required"),Z(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:mr,eventId:s};if(e instanceof Uc){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Iy(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries(i||{}))a[f]=m}if(e instanceof _s){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const u=await n._getAppCheckToken(),h=u?`#${V0}=${encodeURIComponent(u)}`:"";return`${N0(n)}?${us(c).slice(1)}${h}`}function N0({config:n}){return n.emulator?Oc(n,D0):`https://${n.authDomain}/${k0}`}/**
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
 */const ea="webStorageSupport";class O0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hp,this._completeRedirectFn=i0,this._overrideRedirectResult=n0}async _openPopup(e,t,r,s){var a;Mt((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await Ph(e,t,r,Da(),s);return C0(e,i,Bc())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Ph(e,t,r,Da(),s);return Fw(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Mt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await T0(e),r=new a0(e);return t.register("authEvent",s=>(Z(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ea,{type:ea},s=>{var a;const i=(a=s==null?void 0:s[0])==null?void 0:a[ea];i!==void 0&&t(!!i),It(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=d0(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return rp()||Yf()||Fc()}}const M0=O0;var kh="@firebase/auth",Dh="1.11.0";/**
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
 */class j0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function F0(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function L0(n){sr(new Vn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;Z(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sp(n)},h=new mw(r,s,i,u);return Ew(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),sr(new Vn("auth-internal",e=>{const t=co(e.getProvider("auth").getImmediate());return(r=>new j0(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Jt(kh,Dh,F0(n)),Jt(kh,Dh,"esm2020")}/**
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
 */const U0=5*60,B0=rd("authIdTokenMaxAge")||U0;let Vh=null;const $0=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>B0)return;const s=t==null?void 0:t.token;Vh!==s&&(Vh=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function z0(n=$r()){const e=qa(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Iw(n,{popupRedirectResolver:M0,persistence:[Gw,Ow,hp]}),r=rd("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=$0(i.toString());Pw(t,a,()=>a(t.currentUser)),Cw(t,c=>a(c))}}const s=td("auth");return s&&ww(t,`http://${s}`),t}function q0(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}gw({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=ut("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",q0().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});L0("Browser");const En=class En{constructor(){dt(this,"events",[]);dt(this,"rateLimitMap",new Map);dt(this,"blockedIPs",new Set);dt(this,"suspiciousActivities",new Map)}static getInstance(){return En.instance||(En.instance=new En),En.instance}checkRateLimit(e,t=100,r=6e4){const s=Date.now(),a=(this.rateLimitMap.get(e)||[]).filter(c=>s-c<r);return a.length>=t?(this.logSecurityEvent({type:"rate_limit",timestamp:s,details:{identifier:e,requestCount:a.length},severity:"high"}),this.suspiciousActivities.set(e,(this.suspiciousActivities.get(e)||0)+1),!1):(a.push(s),this.rateLimitMap.set(e,a),!0)}validateInput(e,t="text"){if(!e||typeof e!="string")return{isValid:!1,sanitized:""};const r=[/('|(\\')|(;)|(\\)|(\-\-)|(\/\*)|(\*\/)|(\bor\b)|(\band\b)|(\bunion\b)|(\bselect\b)|(\binsert\b)|(\bupdate\b)|(\bdelete\b)|(\bdrop\b)|(\bcreate\b)|(\balter\b)|(\bexec\b)|(\bexecute\b))/gi],s=[/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi,/javascript:/gi,/on\w+\s*=/gi,/<.*?>/g];let i=e,a=!0;for(const c of r)if(c.test(e)){this.logSecurityEvent({type:"injection_attempt",timestamp:Date.now(),details:{input:e.substring(0,100),pattern:c.source},severity:"critical"}),a=!1;break}for(const c of s)c.test(i)&&(this.logSecurityEvent({type:"xss_attempt",timestamp:Date.now(),details:{input:e.substring(0,100),pattern:c.source},severity:"critical"}),i=i.replace(c,""),a=!1);switch(t){case"email":/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i)||(a=!1);break;case"url":try{new URL(i)}catch{a=!1}break;case"json":try{JSON.parse(i)}catch{a=!1}break}return i=i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),{isValid:a,sanitized:i}}generateCSRFToken(){const e=new Uint8Array(32);crypto.getRandomValues(e);const t=Array.from(e,r=>r.toString(16).padStart(2,"0")).join("");return localStorage.setItem("csrf_token",t),t}validateCSRFToken(e){const t=localStorage.getItem("csrf_token");return!t||e!==t?(this.logSecurityEvent({type:"csrf_attempt",timestamp:Date.now(),details:{providedToken:e==null?void 0:e.substring(0,10)},severity:"high"}),!1):!0}detectSuspiciousActivity(e,t){const r=Date.now(),s=`${e}_${t}`,i=this.suspiciousActivities.get(s)||0;return r-i<1e3?(this.logSecurityEvent({type:"suspicious_activity",timestamp:r,details:{userId:e,action:t,timeDiff:r-i},severity:"medium"}),!0):(this.suspiciousActivities.set(s,r),!1)}logSecurityEvent(e){console.warn("🚨 보안 이벤트 탐지:",e),this.events.push(e),this.events.length>1e3&&(this.events=this.events.slice(-1e3)),e.severity==="critical"&&this.handleCriticalEvent(e)}handleCriticalEvent(e){"Notification"in window&&Notification.permission==="granted"&&new Notification("🚨 보안 경고",{body:`심각한 보안 이벤트가 탐지되었습니다: ${e.type}`,icon:"/favicon.ico"}),console.error("🔥 CRITICAL SECURITY EVENT:",e);const t=JSON.parse(localStorage.getItem("critical_security_events")||"[]");t.push(e),localStorage.setItem("critical_security_events",JSON.stringify(t.slice(-50)))}getSecurityStats(){const e={};let t=0;return this.events.forEach(r=>{e[r.type]=(e[r.type]||0)+1,r.severity==="critical"&&t++}),{totalEvents:this.events.length,eventsByType:e,recentEvents:this.events.slice(-10),criticalEvents:t}}clearSecurityEvents(){this.events=[],this.rateLimitMap.clear(),this.suspiciousActivities.clear(),localStorage.removeItem("critical_security_events"),console.log("🧹 보안 이벤트 기록이 정리되었습니다.")}};dt(En,"instance");let bn=En;const Oa={safeLocalStorage:{getItem:n=>{try{const e=bn.getInstance(),{isValid:t,sanitized:r}=e.validateInput(n);return t?localStorage.getItem(r):null}catch{return null}},setItem:(n,e)=>{try{const t=bn.getInstance(),r=t.validateInput(n),s=t.validateInput(e);return!r.isValid||!s.isValid?!1:(localStorage.setItem(r.sanitized,s.sanitized),!0)}catch{return!1}}},safeDOMUpdate:(n,e)=>{const t=bn.getInstance(),{isValid:r,sanitized:s}=t.validateInput(e);r&&(n.textContent=s)},checkSecurityHeaders:()=>(console.log("🔍 보안 헤더 체크가 필요합니다."),!0),createSafeURL:(n,e)=>{try{const t=new URL(n),r=bn.getInstance();return Object.entries(e).forEach(([s,i])=>{const a=r.validateInput(s),c=r.validateInput(i);a.isValid&&c.isValid&&t.searchParams.append(a.sanitized,c.sanitized)}),t.toString()}catch{return n}}},X=bn.getInstance();if(typeof window<"u"){window.addEventListener("securitypolicyviolation",t=>{X.logSecurityEvent({type:"xss_attempt",timestamp:Date.now(),details:{violatedDirective:t.violatedDirective,blockedURI:t.blockedURI,originalPolicy:t.originalPolicy},severity:"critical"})});let n={open:!1,orientation:null};const e=160;setInterval(()=>{window.outerHeight-window.innerHeight>e||window.outerWidth-window.innerWidth>e?n.open||(n.open=!0,console.warn("🔍 개발자 도구가 열렸습니다.")):n.open=!1},500),"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()}const _n={algorithm:"AES-GCM",keyLength:256,ivLength:12,tagLength:16},wn=class wn{constructor(){dt(this,"masterKey",null);dt(this,"userPassphrase",null)}static getInstance(){return wn.instance||(wn.instance=new wn),wn.instance}async initializeMasterKey(e,t){try{const r=t||"default_secure_passphrase_2025";this.userPassphrase=`${e}:${r}:${Date.now().toString().slice(0,8)}`;const s=new TextEncoder,i=await crypto.subtle.importKey("raw",s.encode(this.userPassphrase),"PBKDF2",!1,["deriveBits","deriveKey"]),a=s.encode(`${e}_salt_2025`);return this.masterKey=await crypto.subtle.deriveKey({name:"PBKDF2",salt:a,iterations:1e5,hash:"SHA-256"},i,{name:_n.algorithm,length:_n.keyLength},!1,["encrypt","decrypt"]),console.log("🔐 클라이언트 사이드 암호화 초기화 완료"),!0}catch(r){return console.error("❌ 마스터 키 초기화 실패:",r),!1}}async encryptData(e){try{if(!this.masterKey)throw new Error("Master key not initialized");if(!X.checkRateLimit("client_encrypt",50,6e4))throw new Error("Encryption rate limit exceeded");const t=JSON.stringify(e),s=new TextEncoder().encode(t),i=crypto.getRandomValues(new Uint8Array(_n.ivLength)),a=crypto.getRandomValues(new Uint8Array(16)),c=await crypto.subtle.encrypt({name:_n.algorithm,iv:i},this.masterKey,s),u={data:this.bufferToBase64(c),iv:this.bufferToBase64(i),salt:this.bufferToBase64(a),keyDerivation:{algorithm:"PBKDF2",iterations:1e5},timestamp:Date.now(),version:"1.0.0"};return console.log("🔒 데이터 암호화 완료 (클라이언트 사이드)"),u}catch(t){return console.error("❌ 클라이언트 사이드 암호화 실패:",t),null}}async decryptData(e){try{if(!this.masterKey)return{success:!1,error:"Master key not initialized"};if(!X.checkRateLimit("client_decrypt",100,6e4))return{success:!1,error:"Decryption rate limit exceeded"};const t=this.base64ToBuffer(e.data),r=this.base64ToBuffer(e.iv),s=await crypto.subtle.decrypt({name:_n.algorithm,iv:r},this.masterKey,t),a=new TextDecoder().decode(s),c=JSON.parse(a);return console.log("🔓 데이터 복호화 완료 (클라이언트 사이드)"),{success:!0,data:c}}catch(t){return console.error("❌ 클라이언트 사이드 복호화 실패:",t),{success:!1,error:(t==null?void 0:t.message)||"Decryption failed"}}}async secureStore(e,t){try{const r=await this.encryptData(t);return r?(localStorage.setItem(`encrypted_${e}`,JSON.stringify(r)),console.log(`🛡️ 안전한 데이터 저장 완료: ${e}`),!0):!1}catch(r){return console.error("❌ 안전한 데이터 저장 실패:",r),!1}}async secureLoad(e){try{const t=localStorage.getItem(`encrypted_${e}`);if(!t)return null;const r=JSON.parse(t),s=await this.decryptData(r);return s.success?(console.log(`🔍 안전한 데이터 로드 완료: ${e}`),s.data):null}catch(t){return console.error("❌ 안전한 데이터 로드 실패:",t),null}}clearEncryptionSession(){this.masterKey=null,this.userPassphrase=null;const e=[];for(let t=0;t<localStorage.length;t++){const r=localStorage.key(t);r!=null&&r.startsWith("encrypted_")&&e.push(r)}e.forEach(t=>localStorage.removeItem(t)),console.log("🧹 암호화 세션 정리 완료")}isEncryptionReady(){return this.masterKey!==null}bufferToBase64(e){const t=new Uint8Array(e);let r="";for(let s=0;s<t.byteLength;s++)r+=String.fromCharCode(t[s]);return btoa(r)}base64ToBuffer(e){const t=atob(e),r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r.buffer}getEncryptionStats(){return{isReady:this.isEncryptionReady(),algorithm:_n.algorithm,keyLength:_n.keyLength,version:"1.0.0"}}};dt(wn,"instance");let Ma=wn;const Hn=Ma.getInstance(),lt={async saveEncrypted(n,e){return await Hn.secureStore(n,e)},async loadEncrypted(n){return await Hn.secureLoad(n)},async initForUser(n,e){return await Hn.initializeMasterKey(n,e)},cleanup(){Hn.clearEncryptionSession()},isReady(){return Hn.isEncryptionReady()},getStats(){return Hn.getEncryptionStats()}},ta={apiKey:"AIzaSyD0T3knqD57-69U4rKsZ1f-Nb1Kd6Rf5a0",authDomain:"my-personnal-penguin.firebaseapp.com",projectId:"my-personnal-penguin",storageBucket:"my-personnal-penguin.firebasestorage.app",messagingSenderId:"278702130293",appId:"1:278702130293:web:cd7dad08ee5cd6b183243c"};let St,Gn=!1;if(typeof window<"u"&&!window.__FIREBASE_INITIALIZED__)try{const n=Ho();n.length>0?(St=n[0],console.log("🔄 기존 Firebase 앱 재사용")):(St=Qs(ta),console.log("🆕 새 Firebase 앱 초기화")),window.__FIREBASE_INITIALIZED__=!0,Gn=!0}catch(n){console.warn("⚠️ Firebase 초기화 중 에러:",n.message);try{St=$r(),console.log("🔄 기존 Firebase 앱으로 대체"),Gn=!0}catch(e){console.error("❌ Firebase 앱 초기화 완전 실패:",e);try{St=Qs(ta,"secondary-"+Date.now()),console.log("🚨 보조 Firebase 앱 생성"),Gn=!0}catch{throw console.error("💥 모든 Firebase 초기화 시도 실패"),new Error("Firebase 초기화에 완전히 실패했습니다.")}}}else if(typeof window<"u"&&window.__FIREBASE_INITIALIZED__){const n=Ho();St=n.length>0?n[0]:$r(),console.log("♻️ 이미 초기화된 Firebase 앱 사용"),Gn=!0}else try{St=Qs(ta),Gn=!0}catch{const e=Ho();St=e.length>0?e[0]:$r(),Gn=!0}const be=kE(St),ho=z0(St),W0=new At,me=async(n,e,t)=>{try{if(!X.checkRateLimit(`saveUserData_${n}`,50,6e4))throw new Error("Rate limit exceeded. Please try again later.");X.detectSuspiciousActivity(n,`save_${e}`)&&console.warn("🚨 의심스러운 저장 활동 탐지:",n,e);const r=X.validateInput(n),s=X.validateInput(e);if(!r.isValid||!s.isValid)throw new Error("Invalid input parameters");if(JSON.stringify(t).length>10*1024*1024)throw new Error("Data size exceeds limit (10MB)");let a=t;lt.isReady()?await lt.saveEncrypted(`${n}_${e}`,t)&&(a={encrypted:!0,data:await lt.loadEncrypted(`${n}_${e}`),encryptedAt:new Date().toISOString(),encryptionVersion:"1.0.0"},console.log("🔐 데이터 암호화 적용됨 (관리자도 볼 수 없음)")):(typeof t=="object"&&t!==null&&(a=ja(t)),console.log("⚠️ 암호화되지 않은 데이터 저장 (관리자가 볼 수 있음)"));const c=Ye(be,"users",r.sanitized,"data",s.sanitized);return await Pc(c,{data:a,lastUpdated:he.now(),version:1,checksum:vp(a),encrypted:lt.isReady()}),console.log(`✅ 보안 검증 완료 - 데이터 저장 성공: ${e}`),{success:!0}}catch(r){return console.error(`❌ 보안 검증 실패 - 데이터 저장 실패: ${e}`,r),r.message.includes("Rate limit")||r.message.includes("Invalid input")||console.error("🚨 예상치 못한 저장 오류:",r),{success:!1,error:r}}},In=async(n,e)=>{try{if(!X.checkRateLimit(`loadUserData_${n}`,100,6e4))throw new Error("Rate limit exceeded. Please try again later.");const t=X.validateInput(n),r=X.validateInput(e);if(!t.isValid||!r.isValid)throw new Error("Invalid input parameters");const s=Ye(be,"users",t.sanitized,"data",r.sanitized),i=await io(s);if(i.exists()){const a=i.data();let c=a.data;if(a.encrypted&&lt.isReady()){const u=await lt.loadEncrypted(`${n}_${e}`);if(u)c=u,console.log("🔓 데이터 복호화 완료 (클라이언트 사이드)");else return console.warn("⚠️ 복호화 실패 - 암호화 키가 없거나 손상됨"),{success:!1,error:"Decryption failed - encryption key not available"}}else{if(a.encrypted&&!lt.isReady())return console.warn("⚠️ 암호화된 데이터이지만 복호화 키가 초기화되지 않음"),{success:!1,error:"Encryption key not initialized"};console.log("📄 암호화되지 않은 데이터 로드")}if(a.checksum&&a.data){const u=vp(a.data);a.checksum!==u&&console.warn("🚨 데이터 무결성 검증 실패:",e)}return{success:!0,data:c}}else return{success:!0,data:null}}catch(t){return console.error(`❌ 보안 검증 실패 - 데이터 로드 실패: ${e}`,t),{success:!1,error:t}}},dS=async(n,e)=>{try{if(!X.checkRateLimit(`savePomodoroSession_${n}`,30,6e4))throw new Error("Rate limit exceeded. Please try again later.");X.detectSuspiciousActivity(n,"save_pomodoro_session")&&console.warn("🚨 의심스러운 세션 저장 활동 탐지:",n);const t=X.validateInput(n);if(!t.isValid)throw new Error("Invalid user ID");const r={...e,projectTitle:X.validateInput(e.projectTitle||"").sanitized,taskTitle:X.validateInput(e.taskTitle||"").sanitized,sessionType:X.validateInput(e.sessionType||"").sanitized,timestamp:he.now(),userAgent:navigator.userAgent.substring(0,200)},s=Nt(be,"users",t.sanitized,"pomodoroSessions");return await kc(s,r),console.log("✅ 보안 검증 완료 - 뽀모도로 세션 저장 성공"),{success:!0}}catch(t){return console.error("❌ 보안 검증 실패 - 뽀모도로 세션 저장 실패",t),{success:!1,error:t}}},fS=async(n,e,t)=>{try{if(!X.checkRateLimit("updateAccessRequest",20,6e4))throw new Error("Rate limit exceeded. Please try again later.");const r=X.validateInput(n),s=X.validateInput(e);if(!r.isValid||!s.isValid)throw new Error("Invalid input parameters");if(!["approved","rejected"].includes(s.sanitized))throw new Error("Invalid status value");const i={status:s.sanitized,updatedAt:he.now(),adminUserAgent:navigator.userAgent.substring(0,200)};if(t){const c=X.validateInput(t);c.isValid&&(i.adminResponse=c.sanitized)}const a=Ye(be,"accessRequests",r.sanitized);return await oo(a,i),console.log("✅ 보안 검증 완료 - 접근 요청 업데이트 성공"),{success:!0}}catch(r){return console.error("❌ 보안 검증 실패 - 접근 요청 업데이트 실패",r),{success:!1,error:r}}};function ja(n){if(n==null)return n;if(Array.isArray(n))return n.map(e=>ja(e));if(typeof n=="object"){const e={};for(const[t,r]of Object.entries(n)){const s=X.validateInput(t);if(s.isValid)if(typeof r=="string"){const i=X.validateInput(r);e[s.sanitized]=i.sanitized}else e[s.sanitized]=ja(r)}return e}return typeof n=="string"?X.validateInput(n).sanitized:n}function vp(n){const e=JSON.stringify(n);let t=0;for(let r=0;r<e.length;r++){const s=e.charCodeAt(r);t=(t<<5)-t+s,t=t&t}return t.toString(16)}const H0=async()=>{try{if(!X.checkRateLimit("signInWithGoogle",5,3e5))throw new Error("Too many login attempts. Please try again later.");const e=(await Xw(ho,W0)).user;return console.log("✅ 보안 검증 완료 - Google 로그인 성공:",e.email),{success:!0,user:e}}catch(n){return console.error("❌ Google 로그인 실패:",n),{success:!1,error:n}}},G0=async()=>{try{return await Dw(ho),X.clearSecurityEvents(),localStorage.removeItem("csrf_token"),console.log("✅ 보안 정리 완료 - 로그아웃 성공"),{success:!0}}catch(n){return console.error("❌ 로그아웃 실패:",n),{success:!1,error:n}}},Ue=()=>{const n=ho.currentUser;if(n){const e=Oa.safeLocalStorage.getItem("last_activity"),t=Date.now().toString();e&&parseInt(t)-parseInt(e)>24*60*60*1e3&&console.warn("🚨 장시간 미사용 세션 감지"),Oa.safeLocalStorage.setItem("last_activity",t)}return n},K0=n=>kw(ho,async e=>{if(e){if(X.generateCSRFToken(),await lt.initForUser(e.email||e.uid)){console.log("🔐 End-to-End 암호화 활성화 - 관리자도 데이터를 볼 수 없습니다");try{const r=await X0(e.uid);r.success&&r.migrated>0&&console.log(`🎉 기존 데이터 ${r.migrated}개 타입 암호화 완료!`)}catch(r){console.warn("⚠️ 기존 데이터 마이그레이션 건너뛰기:",r)}}else console.warn("⚠️ 암호화 초기화 실패 - 데이터가 암호화되지 않을 수 있습니다");console.log("🛡️ 보안 시스템 활성화:",e.email)}else X.clearSecurityEvents(),localStorage.removeItem("csrf_token"),localStorage.removeItem("last_activity"),lt.cleanup(),console.log("🧹 암호화 세션 정리 완료");n(e)}),pS=()=>({stats:X.getSecurityStats(),criticalEvents:JSON.parse(localStorage.getItem("critical_security_events")||"[]"),lastActivity:Oa.safeLocalStorage.getItem("last_activity"),csrfToken:localStorage.getItem("csrf_token")?"토큰 활성화":"토큰 없음"});typeof window<"u"&&(console.log("🛡️ Firebase 보안 시스템 초기화 완료"),window.addEventListener("load",()=>{const n=X.getSecurityStats();n.criticalEvents>0&&console.warn(`🚨 ${n.criticalEvents}개의 심각한 보안 이벤트가 기록되어 있습니다.`)}));const Ri=n=>n==="sbseok12@gmail.com",Ip=async n=>{try{if(!X.checkRateLimit("saveAccessRequest",5,3e5))throw new Error("Too many access requests. Please try again later.");const e=X.validateInput(n.email,"email"),t=X.validateInput(n.displayName);if(!e.isValid||!t.isValid)throw new Error("Invalid input parameters");const r={email:e.sanitized,displayName:t.sanitized,photoURL:n.photoURL?X.validateInput(n.photoURL,"url").sanitized:void 0,reason:n.reason?X.validateInput(n.reason).sanitized:void 0},s=Ye(be,"accessRequests",r.email.replace(".","_"));return await Pc(s,{...r,status:"pending",requestedAt:he.now(),userAgent:navigator.userAgent.substring(0,200)}),console.log("✅ 보안 검증 완료 - 접근 신청 저장 성공"),{success:!0}}catch(e){return console.error("❌ 보안 검증 실패 - 접근 신청 저장 실패:",e),{success:!1,error:e}}},mS=async()=>{try{if(!X.checkRateLimit("getAccessRequests",20,6e4))throw new Error("Rate limit exceeded. Please try again later.");const n=Nt(be,"accessRequests"),t=(await hr(n)).docs.map(r=>({id:r.id,...r.data()}));return console.log("✅ 보안 검증 완료 - 접근 신청 목록 조회 성공"),{success:!0,data:t}}catch(n){return console.error("❌ 보안 검증 실패 - 접근 신청 조회 실패:",n),{success:!1,error:n}}},Q0=async n=>{if(!n)return{status:"not_found"};if(n==="sbseok12@gmail.com")return{status:"approved"};try{if(!X.checkRateLimit(`getUserAccessStatus_${n}`,30,6e4))throw new Error("Rate limit exceeded. Please try again later.");const e=X.validateInput(n,"email");if(!e.isValid)return{status:"not_found"};const t=Ye(be,"accessRequests",e.sanitized.replace(".","_")),r=await io(t);if(r.exists()){const s=r.data();return{status:s.status,data:s}}return{status:"not_found"}}catch(e){return console.error("❌ 사용자 접근 상태 확인 실패:",e),{status:"not_found"}}},J0=G0,Y0=async(n,e,t)=>{try{if(!X.checkRateLimit(`loadPomodoroSessions_${n}`,50,6e4))throw new Error("Rate limit exceeded. Please try again later.");const r=X.validateInput(n);if(!r.isValid)throw new Error("Invalid user ID");const s=Nt(be,"users",r.sanitized,"pomodoroSessions");let i=Zt(s,Ff("startTime","desc"));if(e){const u=X.validateInput(e);u.isValid&&(i=Zt(s,Rt("startTime",">=",u.sanitized+"T00:00:00.000Z")))}if(t){const u=X.validateInput(t);u.isValid&&(i=Zt(s,Rt("startTime","<=",u.sanitized+"T23:59:59.999Z")))}const a=await hr(i),c=[];return a.forEach(u=>{const h=u.data();c.push({...h,id:u.id})}),console.log(`✅ 보안 검증 완료 - 뽀모도로 세션 조회 성공: ${c.length}개`),{success:!0,data:c}}catch(r){return console.error("❌ 보안 검증 실패 - 뽀모도로 세션 조회 실패:",r),{success:!1,error:r}}},gS=async(n,e,t)=>{try{if(!X.checkRateLimit(`updatePomodoroSession_${n}`,20,6e4))throw new Error("Rate limit exceeded. Please try again later.");const r=X.validateInput(n),s=X.validateInput(e);if(!r.isValid||!s.isValid)throw new Error("Invalid parameters");const i=Ye(be,"users",r.sanitized,"pomodoroSessions",s.sanitized),a={...t,updatedAt:he.now()};return await oo(i,a),console.log("✅ 보안 검증 완료 - 뽀모도로 세션 업데이트 성공"),{success:!0}}catch(r){return console.error("❌ 보안 검증 실패 - 뽀모도로 세션 업데이트 실패:",r),{success:!1,error:r}}},yS=async(n,e)=>{try{if(!X.checkRateLimit(`getWeeklyPomodoroStats_${n}`,30,6e4))throw new Error("Rate limit exceeded. Please try again later.");const t=new Date(e),r=new Date(t);r.setDate(r.getDate()+6);const s=e,i=r.toISOString().split("T")[0],a=await Y0(n,s,i);if(!a.success||!a.data)return{success:!1,error:a.error};const c=a.data.filter(m=>m.completed),u={weekStart:s,weekEnd:i,totalSessions:c.length,workSessions:c.filter(m=>m.sessionType==="work").length,breakSessions:c.filter(m=>m.sessionType==="break").length,totalMinutes:c.reduce((m,y)=>m+(y.duration||0),0),projectBreakdown:[],dailyBreakdown:[]},h={};c.forEach(m=>{h[m.projectId]||(h[m.projectId]=[]),h[m.projectId].push(m)}),u.projectBreakdown=Object.entries(h).map(([m,y])=>{var E;return{projectId:m,projectTitle:((E=y[0])==null?void 0:E.projectTitle)||"Unknown",sessions:y.length,minutes:y.reduce((P,x)=>P+(x.duration||0),0)}});const f={};return c.forEach(m=>{var E;const y=((E=m.startTime)==null?void 0:E.split("T")[0])||new Date().toISOString().split("T")[0];f[y]||(f[y]=[]),f[y].push(m)}),u.dailyBreakdown=Object.entries(f).map(([m,y])=>({date:m,sessions:y.length,minutes:y.reduce((E,P)=>E+(P.duration||0),0)})).sort((m,y)=>m.date.localeCompare(y.date)),console.log("✅ 보안 검증 완료 - 주차별 뽀모도로 통계 생성 성공"),{success:!0,data:u}}catch(t){return console.error("❌ 보안 검증 실패 - 주차별 뽀모도로 통계 생성 실패:",t),{success:!1,error:t}}},_S=async(n,e)=>{try{if(!X.checkRateLimit(`deletePomodoroSession_${n}`,10,6e4))throw new Error("Rate limit exceeded. Please try again later.");const t=X.validateInput(n),r=X.validateInput(e);if(!t.isValid||!r.isValid)throw new Error("Invalid parameters");const s=Ye(be,"users",t.sanitized,"pomodoroSessions",r.sanitized);return await Bf(s),console.log("✅ 보안 검증 완료 - 뽀모도로 세션 삭제 성공"),{success:!0}}catch(t){return console.error("❌ 보안 검증 실패 - 뽀모도로 세션 삭제 실패:",t),{success:!1,error:t}}},X0=async n=>{try{if(!lt.isReady())throw new Error("Encryption not initialized");console.log("🔄 기존 데이터 암호화 마이그레이션 시작...");let e=0;const t=["todos","projects","epics","pomodoroSessions","settings"];for(const r of t)try{const s=Ye(be,"users",n,"data",r),i=await io(s);if(i.exists()){const a=i.data();if(a.encrypted){console.log(`✅ ${r} 이미 암호화됨 - 건너뛰기`);continue}(await me(n,r,a.data)).success&&(e++,console.log(`🔐 ${r} 암호화 마이그레이션 완료`))}}catch(s){console.warn(`⚠️ ${r} 마이그레이션 실패:`,s)}return console.log(`🎉 마이그레이션 완료! ${e}개 데이터 타입 암호화됨`),{success:!0,migrated:e}}catch(e){return console.error("❌ 데이터 마이그레이션 실패:",e),{success:!1,migrated:0,error:e}}},vS=async(n,e="json")=>{try{if(!lt.isReady())throw new Error("Encryption not initialized - cannot decrypt data for export");console.log("📊 사용자 데이터 내보내기 시작...");const t={exportedAt:new Date().toISOString(),userId:n,data:{}},r=["todos","projects","epics","pomodoroSessions","settings"];for(const a of r)try{const c=await In(n,a);c.success&&c.data&&(t.data[a]=c.data,console.log(`✅ ${a} 데이터 수집 완료`))}catch(c){console.warn(`⚠️ ${a} 수집 실패:`,c)}const i=`penguin_data_${new Date().toISOString().split("T")[0]}.${e}`;return e==="json"?{success:!0,data:JSON.stringify(t,null,2),filename:i}:{success:!0,data:Z0(t),filename:i.replace(".csv",".csv")}}catch(t){return console.error("❌ 데이터 내보내기 실패:",t),{success:!1,error:t}}};function Z0(n){const e=[];return e.push("Type,ID,Title,Description,CreatedAt,Status"),Object.entries(n.data).forEach(([t,r])=>{Array.isArray(r)&&r.forEach((s,i)=>{const a=[t,s.id||i.toString(),s.title||s.name||"",s.description||"",s.createdAt||s.timestamp||"",s.status||s.completed||""].map(c=>`"${String(c).replace(/"/g,'""')}"`);e.push(a.join(","))})}),e.join(`
`)}const eT=async()=>{try{const n=Ye(be,"system","maintenance"),e=await io(n);if(e.exists()){const t=e.data();return{isMaintenanceMode:t.enabled||!1,message:t.message||"시스템 점검 중입니다. 잠시 후 다시 이용해주세요."}}return{isMaintenanceMode:!1}}catch(n){return console.error("❌ 점검 상태 확인 실패:",n),{isMaintenanceMode:!1,error:n}}},IS=async(n,e)=>{try{const t=Ue();if(!t||!Ri(t.email))throw new Error("Unauthorized: Admin access required");const r=Ye(be,"system","maintenance");return await Pc(r,{enabled:n,message:e||"시스템 점검 중입니다. 잠시 후 다시 이용해주세요.",updatedAt:he.now(),updatedBy:t.email}),console.log(`🚧 점검 모드 ${n?"활성화":"비활성화"} 완료`),{success:!0}}catch(t){return console.error("❌ 점검 모드 설정 실패:",t),{success:!1,error:t}}},cs={_origin:"https://api.emailjs.com"},tT=(n,e="https://api.emailjs.com")=>{cs._userID=n,cs._origin=e},Ep=(n,e,t)=>{if(!n)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!t)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class Nh{constructor(e){this.status=e.status,this.text=e.responseText}}const wp=(n,e,t={})=>new Promise((r,s)=>{const i=new XMLHttpRequest;i.addEventListener("load",({target:a})=>{const c=new Nh(a);c.status===200||c.text==="OK"?r(c):s(c)}),i.addEventListener("error",({target:a})=>{s(new Nh(a))}),i.open("POST",cs._origin+n,!0),Object.keys(t).forEach(a=>{i.setRequestHeader(a,t[a])}),i.send(e)}),nT=(n,e,t,r)=>{const s=r||cs._userID;return Ep(s,n,e),wp("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:s,service_id:n,template_id:e,template_params:t}),{"Content-type":"application/json"})},rT=n=>{let e;if(typeof n=="string"?e=document.querySelector(n):e=n,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},sT=(n,e,t,r)=>{const s=r||cs._userID,i=rT(t);Ep(s,n,e);const a=new FormData(i);return a.append("lib_version","3.2.0"),a.append("service_id",n),a.append("template_id",e),a.append("user_id",s),wp("/api/v1.0/email/send-form",a)},Tp={init:tT,send:nT,sendForm:sT},fo=Nt(be,"feedback"),Kr={serviceId:"service_feedback",templateId:"template_feedback",publicKey:"your_public_key"},iT=async(n,e)=>{var t;try{const r={...e,userEmail:n.email??"",userDisplayName:n.displayName??((t=n.email)==null?void 0:t.split("@")[0])??"Anonymous",createdAt:Dc(),status:"pending"},s=await kc(fo,r);try{await Tp.send(Kr.serviceId,Kr.templateId,{to_email:"sbseok12@gmail.com",from_name:r.userDisplayName,from_email:r.userEmail,feedback_type:e.type,feedback_title:e.title,feedback_description:e.description,feedback_priority:e.priority,feedback_id:s.id,created_at:new Date().toLocaleString("ko-KR")},Kr.publicKey),console.log("✅ 피드백 이메일 발송 성공")}catch(i){console.warn("⚠️ 이메일 발송 실패 (피드백은 저장됨):",i)}return{success:!0,id:s.id,message:"피드백이 성공적으로 제출되었습니다! 관리자가 검토 후 답변드릴게요 😊"}}catch(r){return console.error("피드백 제출 실패:",r),{success:!1,message:"피드백 제출 중 오류가 발생했습니다. 다시 시도해주세요."}}},ES=n=>{const e=Zt(fo,Ff("createdAt","desc"));return zE(e,t=>{const r=[];t.forEach(s=>{r.push({id:s.id,...s.data()})}),n(r)},t=>{console.error("피드백 구독 실패:",t),n([])})},wS=n=>{const e={total:n.length,pending:0,inProgress:0,completed:0,rejected:0,byType:{},byPriority:{}};return n.forEach(t=>{switch(t.status){case"pending":e.pending++;break;case"in-progress":e.inProgress++;break;case"completed":e.completed++;break;case"rejected":e.rejected++;break}e.byType[t.type]=(e.byType[t.type]??0)+1,e.byPriority[t.priority]=(e.byPriority[t.priority]??0)+1}),e},TS=async(n,e,t)=>{try{const r=Ye(fo,n),s={status:e,updatedAt:Dc()};return t&&(s.adminResponse=t),await oo(r,s),{success:!0,message:"피드백 상태가 업데이트되었습니다."}}catch(r){return console.error("피드백 상태 업데이트 실패:",r),{success:!1,message:"상태 업데이트 중 오류가 발생했습니다."}}},SS=async n=>{try{return await Bf(Ye(fo,n)),{success:!0,message:"피드백이 삭제되었습니다."}}catch(e){return console.error("피드백 삭제 실패:",e),{success:!1,message:"삭제 중 오류가 발생했습니다."}}},AS=async(n,e)=>{try{return await Tp.send(Kr.serviceId,"template_admin_response",{to_email:n.userEmail,to_name:n.userDisplayName,feedback_title:n.title,admin_response:e,feedback_status:n.status,response_date:new Date().toLocaleString("ko-KR")},Kr.publicKey),{success:!0,message:"응답 이메일이 발송되었습니다."}}catch(t){return console.error("관리자 응답 이메일 발송 실패:",t),{success:!1,message:"이메일 발송 중 오류가 발생했습니다."}}},oT=n=>({bug:"🐛",feature:"✨",improvement:"🔧",question:"❓",other:"💬"})[n],Ks=n=>({low:"#4caf50",medium:"#ff9800",high:"#f44336",urgent:"#9c27b0"})[n],bS=n=>({pending:"#757575","in-progress":"#2196f3",completed:"#4caf50",rejected:"#f44336"})[n],aT=({open:n,onClose:e,user:t})=>{const[r,s]=k.useState({type:"feature",title:"",description:"",priority:"medium"}),[i,a]=k.useState(!1),[c,u]=k.useState(!1),[h,f]=k.useState(""),m=()=>{s({type:"feature",title:"",description:"",priority:"medium"}),u(!1),f("")},y=()=>{i||(m(),e())},E=async()=>{if(!r.title.trim()){f("제목을 입력해주세요.");return}if(!r.description.trim()){f("내용을 입력해주세요.");return}a(!0),f("");try{const w=await iT(t,r);w.success?(u(!0),setTimeout(()=>{y()},2e3)):f(w.message)}catch{f("피드백 제출 중 오류가 발생했습니다.")}finally{a(!1)}},P=w=>({bug:p.jsx(hm,{}),feature:p.jsx(dm,{}),improvement:p.jsx(fm,{}),question:p.jsx(pm,{}),other:p.jsx(mm,{})})[w],x=w=>({bug:"버그나 오류를 신고해주세요",feature:"새로운 기능을 제안해주세요",improvement:"기존 기능의 개선사항을 알려주세요",question:"궁금한 점이나 사용법을 문의해주세요",other:"기타 의견이나 제안사항을 남겨주세요"})[w];return p.jsxs(xi,{open:n,onClose:y,maxWidth:"md",fullWidth:!0,PaperProps:{sx:{borderRadius:3,maxHeight:"90vh"}},children:[p.jsxs(Ci,{sx:{pb:1},children:[p.jsx(K,{sx:{display:"flex",alignItems:"center",gap:1},children:p.jsx(H,{variant:"h5",component:"div",sx:{fontWeight:"bold"},children:"💬 피드백 보내기"})}),p.jsx(H,{variant:"body2",color:"text.secondary",sx:{mt:1},children:"관리자에게 의견을 전달하고 더 나은 서비스를 만들어가요! ✨"})]}),p.jsx(Pi,{sx:{pt:2},children:c?p.jsxs(K,{sx:{textAlign:"center",py:4},children:[p.jsx(H,{variant:"h4",sx:{mb:2},children:"🎉"}),p.jsx(H,{variant:"h6",gutterBottom:!0,children:"피드백이 성공적으로 전송되었습니다!"}),p.jsx(H,{color:"text.secondary",children:"관리자가 검토 후 답변드릴게요. 감사합니다! 😊"})]}):p.jsxs(K,{sx:{display:"flex",flexDirection:"column",gap:3},children:[h&&p.jsx(nr,{severity:"error",sx:{borderRadius:2},children:h}),p.jsxs(K,{children:[p.jsx(H,{variant:"subtitle1",gutterBottom:!0,sx:{fontWeight:"bold"},children:"📝 피드백 유형"}),p.jsx(Wl,{container:!0,spacing:1,children:["bug","feature","improvement","question","other"].map(w=>p.jsx(Wl,{item:!0,children:p.jsx(Mh,{icon:P(w),label:`${oT(w)} ${w==="bug"?"버그":w==="feature"?"기능":w==="improvement"?"개선":w==="question"?"질문":"기타"}`,onClick:()=>s({...r,type:w}),color:r.type===w?"primary":"default",variant:r.type===w?"filled":"outlined",sx:{cursor:"pointer","&:hover":{backgroundColor:r.type===w?void 0:"rgba(25, 118, 210, 0.04)"}}})},w))}),p.jsx(H,{variant:"caption",color:"text.secondary",sx:{mt:1,display:"block"},children:x(r.type)})]}),p.jsxs(cm,{fullWidth:!0,children:[p.jsx(lm,{children:"🚨 우선순위"}),p.jsxs(um,{value:r.priority,label:"🚨 우선순위",onChange:w=>s({...r,priority:w.target.value}),children:[p.jsx(Tn,{value:"low",children:p.jsxs(K,{sx:{display:"flex",alignItems:"center",gap:1},children:[p.jsx(K,{sx:{width:12,height:12,borderRadius:"50%",backgroundColor:Ks("low")}}),"낮음 - 여유가 있을 때 확인해주세요"]})}),p.jsx(Tn,{value:"medium",children:p.jsxs(K,{sx:{display:"flex",alignItems:"center",gap:1},children:[p.jsx(K,{sx:{width:12,height:12,borderRadius:"50%",backgroundColor:Ks("medium")}}),"보통 - 일반적인 우선순위"]})}),p.jsx(Tn,{value:"high",children:p.jsxs(K,{sx:{display:"flex",alignItems:"center",gap:1},children:[p.jsx(K,{sx:{width:12,height:12,borderRadius:"50%",backgroundColor:Ks("high")}}),"높음 - 빠른 확인이 필요해요"]})}),p.jsx(Tn,{value:"urgent",children:p.jsxs(K,{sx:{display:"flex",alignItems:"center",gap:1},children:[p.jsx(K,{sx:{width:12,height:12,borderRadius:"50%",backgroundColor:Ks("urgent")}}),"긴급 - 즉시 확인이 필요해요!"]})})]})]}),p.jsx(oi,{fullWidth:!0,label:"📋 제목",placeholder:"피드백의 제목을 간단히 입력해주세요",value:r.title,onChange:w=>s({...r,title:w.target.value}),variant:"outlined",inputProps:{maxLength:100},helperText:`${r.title.length}/100`}),p.jsx(oi,{fullWidth:!0,multiline:!0,rows:6,label:"📝 상세 내용",placeholder:r.type==="bug"?`어떤 상황에서 버그가 발생했나요?
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
관리자가 확인 후 답변드릴게요 😊`,value:r.description,onChange:w=>s({...r,description:w.target.value}),variant:"outlined",inputProps:{maxLength:1e3},helperText:`${r.description.length}/1000`}),p.jsx(nr,{severity:"info",sx:{borderRadius:2},children:p.jsxs(H,{variant:"body2",children:[p.jsx("strong",{children:"💡 알아두세요!"}),p.jsx("br",{}),"• 피드백은 관리자 이메일(sbseok12@gmail.com)로도 자동 발송됩니다",p.jsx("br",{}),"• 관리자 페이지에서도 실시간으로 확인할 수 있어요",p.jsx("br",{}),"• 답변이 필요한 경우 이메일로 회신해드릴게요"]})})]})}),p.jsx(ki,{sx:{p:3,pt:1},children:c?p.jsx(ze,{onClick:y,variant:"contained",fullWidth:!0,children:"닫기"}):p.jsxs(p.Fragment,{children:[p.jsx(ze,{onClick:y,disabled:i,sx:{minWidth:100},children:"취소"}),p.jsx(ze,{onClick:E,variant:"contained",disabled:i||!r.title.trim()||!r.description.trim(),startIcon:i?p.jsx(kn,{size:16}):p.jsx(La,{}),sx:{minWidth:120},children:i?"전송 중...":"피드백 보내기"})]})})]})},cT={background:{primary:"#f5f5f5",secondary:"#ffffff",pattern:`url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='20' height='20' fill='%23f5f5f5'/%3E%3C/svg%3E")`,gradient:"linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)"},border:{color:"#cccccc",shadow:"0 2px 8px rgba(0,0,0,0.1)"},path:{color:"rgba(128,128,128,0.3)",opacity:.5}},lT={blocks:{emoji:"⬜",type:"블록",collectName:"아이템"},building:{name:"구조물",description:"기본 구조물",completionMessage:"완성되었습니다!"},collectInterval:30,maxBlocks:25,progressPerBlock:4},uT={animal:{speed:.5,radius:35,bounceHeight:.1},blocks:{popDuration:"0.3s",arrangement:"tower",spacing:{horizontal:20,vertical:15}}},Sp={id:"penguin",name:"뒤뚱",emoji:"🐧",description:"차가운 빙하와 남극의 평온함",colors:{light:{primary:"#2196F3",primaryLight:"#64B5F6",primaryDark:"#1976D2",secondary:"#03DAC6",secondaryLight:"#66FFF9",secondaryDark:"#00BCD4",background:"#FAFAFA",paper:"#FFFFFF",info:"#2196F3",success:"#4CAF50",warning:"#FF9800",error:"#F44336"},dark:{primary:"#90CAF9",primaryLight:"#BBDEFB",primaryDark:"#42A5F5",secondary:"#80DEEA",secondaryLight:"#B2EBF2",secondaryDark:"#4DD0E1",background:"#121212",paper:"#1E1E1E",info:"#2196F3",success:"#4CAF50",warning:"#FF9800",error:"#F44336"}},concepts:{loading:"펭귄이 빙하를 준비하는 중이에요...",welcome:"남극 빙하 기지에 온 것을 환영해요!",appName:"펭귄 비서",appDescription:"차가운 빙하에서 따뜻한 도움을 드리는 펭귄 비서입니다",environment:"남극의 차가운 빙하 🧊",animal:"펭귄",greeting:"안녕하세요! 오늘도 빙하에서 멋진 하루 보내세요!",farewell:"빙하에서 따뜻한 하루 되세요!",baseTitle:"🏔️ 빙하 기지",baseWelcome:"펭귄 비서의 빙하 기지에 오신 것을 환영해요!",liveView:"🐧 빙하 라이브 뷰",liveViewDescription:"우리 펭귄이 빙하에서 무엇을 하고 있는지 확인해보세요! ❄️",quickActions:"빙하 퀵 액션",activeProjects:"진행 중인 탐험",projectStats:"탐험 통계",animalSaying:"펭귄이 말하길",temperatureMoods:{cold:"❄️ 완벽한 빙하 날씨에요!",cool:"🧊 시원한 빙하가 좋아요",mild:"🌨️ 따뜻해져서 조금 이상해요",warm:"☀️ 너무 따뜻해서 걱정이에요",hot:"🔥 빙하가 녹고 있어요!"},projectType:"탐험",projectCreate:"새로운 탐험 시작하기",projectManage:"탐험 관리하기"},ui:{background:{primary:"#E3F2FD",secondary:"#D7ECFF",pattern:`url("data:image/svg+xml,%3Csvg width='28' height='28' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='iceflakes' patternUnits='userSpaceOnUse' width='28' height='28'%3E%3Crect width='28' height='28' fill='%23E3F2FD'/%3E%3Cpath d='M4 14 l6 0 M7 11 l0 6 M7 7 l2 2 M7 21 l2 -2 M3 14 l2 -2 M3 14 l2 2' stroke='%23BBDEFB' stroke-width='1' stroke-linecap='round'/%3E%3Ccircle cx='20' cy='8' r='3' fill='%23D7ECFF'/%3E%3Cpolygon points='18,20 22,20 20,24' fill='%23CFE8FF'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23iceflakes)'/%3E%3C/svg%3E")`,gradient:"radial-gradient(circle at 20% 20%, #E3F2FD 0%, #CFE8FF 50%, #90CAF9 100%)"},border:{color:"#2196F3",shadow:"inset 0 0 20px rgba(33, 150, 243, 0.3)"},path:{color:"rgba(33, 150, 243, 0.3)",opacity:.5}},game:{blocks:{emoji:"🧊",type:"얼음 블록",collectName:"얼음 블록 수집"},building:{name:"얼음 성",description:"웅장한 얼음 성",completionMessage:"멋진 얼음 성이 완성되었어요! ❄️🏰"},collectInterval:30,maxBlocks:25,progressPerBlock:4},animation:{animal:{speed:.5,radius:35,bounceHeight:.15},blocks:{popDuration:"0.3s",arrangement:"tower",spacing:{horizontal:20,vertical:15}}}},hT={id:"desert-fox",name:"휘리릭",emoji:"🦊",description:"따뜻한 사막과 오아시스의 활기",colors:{light:{primary:"#FF8C00",primaryLight:"#FFB74D",primaryDark:"#F57C00",secondary:"#FFC107",secondaryLight:"#FFEB3B",secondaryDark:"#FF9800",background:"#FFF8E1",paper:"#FFFFFF",info:"#2196F3",success:"#8BC34A",warning:"#FF9800",error:"#F44336"},dark:{primary:"#FFB74D",primaryLight:"#FFCC02",primaryDark:"#FF8F00",secondary:"#FFCC02",secondaryLight:"#FFEB3B",secondaryDark:"#FFC107",background:"#1A1A1A",paper:"#2A2A2A",info:"#2196F3",success:"#8BC34A",warning:"#FF9800",error:"#F44336"}},concepts:{loading:"사막여우가 오아시스를 준비하는 중이에요...",welcome:"따뜻한 사막 오아시스에 온 것을 환영해요!",appName:"사막여우 비서",appDescription:"뜨거운 사막에서 시원한 도움을 드리는 사막여우 비서입니다",environment:"따뜻한 사막과 오아시스 🏜️",animal:"사막여우",greeting:"안녕하세요! 오늘도 사막에서 활기찬 하루 보내세요!",farewell:"사막에서 멋진 하루 되세요!",baseTitle:"🏜️ 사막 오아시스",baseWelcome:"사막여우 비서의 오아시스에 오신 것을 환영해요!",liveView:"🦊 사막 라이브 뷰",liveViewDescription:"우리 사막여우가 오아시스에서 무엇을 하고 있는지 확인해보세요! 🌵",quickActions:"사막 퀵 액션",activeProjects:"진행 중인 모험",projectStats:"모험 통계",animalSaying:"사막여우가 말하길",temperatureMoods:{cold:"🧊 사막에 너무 춥네요",cool:"🌤️ 시원한 사막이 좋아요",mild:"☀️ 완벽한 사막 날씨에요!",warm:"🌵 따뜻한 사막이 최고에요",hot:"🔥 뜨거운 사막도 문제없어요!"},projectType:"모험",projectCreate:"새로운 모험 시작하기",projectManage:"모험 관리하기"},ui:{background:{primary:"#FFF3E0",secondary:"#FFE0B2",pattern:`url("data:image/svg+xml,%3Csvg width='32' height='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='dunes' patternUnits='userSpaceOnUse' width='32' height='32'%3E%3Crect width='32' height='32' fill='%23FFF3E0'/%3E%3Cpath d='M0,24 C8,20 24,28 32,24 L32,32 L0,32 Z' fill='%23FFE0B2'/%3E%3Cpath d='M0,18 C6,14 26,22 32,18' stroke='%23FFCC80' stroke-width='1' fill='none'/%3E%3Ccircle cx='26' cy='6' r='3' fill='%23FFCC02'/%3E%3Cpolygon points='18,20 22,20 20,24' fill='%23CFE8FF'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23dunes)'/%3E%3C/svg%3E")`,gradient:"radial-gradient(circle at 30% 70%, #FFF3E0 0%, #FFE0B2 45%, #FFB74D 100%)"},border:{color:"#FF8F00",shadow:"inset 0 0 20px rgba(255, 143, 0, 0.3)"},path:{color:"rgba(255, 143, 0, 0.3)",opacity:.5}},game:{blocks:{emoji:"🔺",type:"피라미드 블록",collectName:"피라미드 블록 수집"},building:{name:"피라미드",description:"웅장한 사막 피라미드",completionMessage:"멋진 피라미드가 완성되었어요! 🏜️🔺"},collectInterval:30,maxBlocks:25,progressPerBlock:4},animation:{animal:{speed:.5,radius:35,bounceHeight:.1},blocks:{popDuration:"0.3s",arrangement:"pyramid",spacing:{horizontal:20,vertical:15}}}},dT={id:"sheep",name:"메에",emoji:"🐑",description:"평화로운 목초지와 푸른 언덕",colors:{light:{primary:"#4CAF50",primaryLight:"#81C784",primaryDark:"#388E3C",secondary:"#8BC34A",secondaryLight:"#AED581",secondaryDark:"#689F38",background:"#F1F8E9",paper:"#FFFFFF",info:"#2196F3",success:"#4CAF50",warning:"#FF9800",error:"#F44336"},dark:{primary:"#81C784",primaryLight:"#AED581",primaryDark:"#4CAF50",secondary:"#AED581",secondaryLight:"#C5E1A5",secondaryDark:"#8BC34A",background:"#0D1B0F",paper:"#1B2E1D",info:"#2196F3",success:"#4CAF50",warning:"#FF9800",error:"#F44336"}},concepts:{loading:"양이 목초지를 준비하는 중이에요...",welcome:"평화로운 목초지에 온 것을 환영해요!",appName:"양 비서",appDescription:"푸른 목초지에서 평온한 도움을 드리는 양 비서입니다",environment:"평화로운 푸른 목초지 🌱",animal:"양",greeting:"안녕하세요! 오늘도 목초지에서 평온한 하루 보내세요!",farewell:"목초지에서 평화로운 하루 되세요!",baseTitle:"🌱 목초지 농장",baseWelcome:"양 비서의 목초지에 오신 것을 환영해요!",liveView:"🐑 목초지 라이브 뷰",liveViewDescription:"우리 양이 목초지에서 무엇을 하고 있는지 확인해보세요! 🌱",quickActions:"목초지 퀵 액션",activeProjects:"진행 중인 목장일",projectStats:"목장일 통계",animalSaying:"양이 말하길",temperatureMoods:{cold:"❄️ 목초지가 시원하고 좋아요",cool:"🍃 시원한 바람이 상쾌해요",mild:"🌿 완벽한 목초지 날씨에요!",warm:"☀️ 따뜻한 햇살이 좋아요",hot:"🌞 그늘에서 쉬어가야겠어요!"},projectType:"목장일",projectCreate:"새로운 목장일 시작하기",projectManage:"목장일 관리하기"},ui:{background:{primary:"#F1F8E9",secondary:"#C8E6C9",pattern:`url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grass' patternUnits='userSpaceOnUse' width='20' height='20'%3E%3Crect width='20' height='20' fill='%23F1F8E9'/%3E%3Cpath d='M0,20 Q5,10 10,20 Q15,10 20,20' stroke='%23C8E6C9' stroke-width='1' fill='none'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grass)'/%3E%3C/svg%3E")`,gradient:"radial-gradient(circle at 30% 70%, #F1F8E9 0%, #C8E6C9 40%, #4CAF50 100%)"},border:{color:"#4CAF50",shadow:"inset 0 0 20px rgba(76, 175, 80, 0.3)"},path:{color:"rgba(76, 175, 80, 0.4)",opacity:.6}},game:{blocks:{emoji:"🌾",type:"건초 더미",collectName:"건초 더미 수집"},building:{name:"목장 헛간",description:"아늑한 목장 헛간",completionMessage:"멋진 목장 헛간이 완성되었어요! 🌾🏠"},collectInterval:35,maxBlocks:25,progressPerBlock:4},animation:{animal:{speed:.3,radius:30,bounceHeight:.05},blocks:{popDuration:"0.4s",arrangement:"tower",spacing:{horizontal:18,vertical:12}}}},fT={id:"cat",name:"그르릉",emoji:"🐱",description:"아늑한 집과 도시 생활의 편안함",colors:{light:{primary:"#FF7043",primaryLight:"#FF8A65",primaryDark:"#F4511E",secondary:"#FFC107",secondaryLight:"#FFEB3B",secondaryDark:"#FFA000",background:"#FFF8E1",paper:"#FFFFFF",info:"#2196F3",success:"#4CAF50",warning:"#FF9800",error:"#F44336"},dark:{primary:"#FF8A65",primaryLight:"#FFAB91",primaryDark:"#FF5722",secondary:"#FFCC02",secondaryLight:"#FFEB3B",secondaryDark:"#FFC107",background:"#1F1611",paper:"#2D2419",info:"#2196F3",success:"#4CAF50",warning:"#FF9800",error:"#F44336"}},concepts:{loading:"고양이가 집을 준비하는 중이에요...",welcome:"아늑한 집에 온 것을 환영해요!",appName:"고양이 비서",appDescription:"따뜻한 집에서 편안한 도움을 드리는 고양이 비서입니다",environment:"아늑한 따뜻한 집 🏠",animal:"고양이",greeting:"안녕하세요! 오늘도 집에서 편안한 하루 보내세요!",farewell:"집에서 포근한 하루 되세요!",baseTitle:"🏠 아늑한 집",baseWelcome:"고양이 비서의 집에 오신 것을 환영해요!",liveView:"🐱 고양이 집 라이브",liveViewDescription:"우리 고양이가 집에서 무엇을 하고 있는지 확인해보세요! 🐾",quickActions:"집 퀵 액션",activeProjects:"진행 중인 집안일",projectStats:"집안일 통계",animalSaying:"고양이가 말하길",temperatureMoods:{cold:"🐾 집이 따뜻해서 좋아요",cool:"🐟 시원한 집이 편안해요",mild:"🧶 완벽한 실내 온도에요!",warm:"☀️ 햇볕 드는 창가가 좋아요",hot:"🌞 시원한 곳을 찾아야겠어요!"},projectType:"집안일",projectCreate:"새로운 집안일 시작하기",projectManage:"집안일 관리하기"},ui:{background:{primary:"#FFF8E1",secondary:"#FFE7B3",pattern:`url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='bigpaws' patternUnits='userSpaceOnUse' width='60' height='60'%3E%3Crect width='60' height='60' fill='%23FFF8E1'/%3E%3Ccircle cx='18' cy='18' r='6' fill='%23FFE7B3' fill-opacity='0.45'/%3E%3Ccircle cx='14' cy='14' r='2' fill='%23FFE7B3' fill-opacity='0.35'/%3E%3Ccircle cx='22' cy='14' r='2' fill='%23FFE7B3' fill-opacity='0.35'/%3E%3Ccircle cx='14' cy='22' r='2' fill='%23FFE7B3' fill-opacity='0.35'/%3E%3Ccircle cx='22' cy='22' r='2' fill='%23FFE7B3' fill-opacity='0.35'/%3E%3Crect x='38' y='8' width='14' height='14' rx='2' ry='2' fill='%23FFF1CF' fill-opacity='0.55'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23bigpaws)'/%3E%3C/svg%3E")`,gradient:"radial-gradient(circle at 50% 30%, #FFF8E1 0%, #FFE7B3 45%, #FF8A65 100%)"},border:{color:"#FF7043",shadow:"inset 0 0 20px rgba(255, 112, 67, 0.3)"},path:{color:"rgba(255, 112, 67, 0.4)",opacity:.5}},game:{blocks:{emoji:"🧶",type:"실뭉치",collectName:"실뭉치 수집"},building:{name:"캣타워",description:"높고 멋진 캣타워",completionMessage:"멋진 캣타워가 완성되었어요! 🐱🗼"},collectInterval:25,maxBlocks:25,progressPerBlock:4},animation:{animal:{speed:.7,radius:40,bounceHeight:.2},blocks:{popDuration:"0.2s",arrangement:"tower",spacing:{horizontal:15,vertical:18}}}},pT={penguin:Sp,"desert-fox":hT,sheep:dT,cat:fT},zc=n=>pT[n]||Sp,mT=(n,e)=>{const t=zc(n),r=e==="auto"?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;return t.colors[r]},RS=n=>(n==null?void 0:n.ui)||cT,xS=n=>(n==null?void 0:n.game)||lT,gT=n=>(n==null?void 0:n.animation)||uT,yT={penguin:"🐧","desert-fox":"🦊",sheep:"🐑",cat:"🐱"},_T=(n,e,t)=>Math.min(Math.max(n,e),t),vT=({themeConfig:n})=>{const e=jh(),t=oa(e.breakpoints.down("md")),r=oa("(prefers-reduced-motion: reduce)"),s=yT[(n==null?void 0:n.id)??"penguin"]??"🐧",i=gT(n),[a,c]=k.useState({xPct:10,direction:1}),[u,h]=k.useState(0),f=k.useRef(null),m=k.useRef(null),y=k.useRef({xPct:10,direction:1});if(k.useEffect(()=>{if(r)return;m.current=null,y.current={xPct:10,direction:1},c(y.current);const x=w=>{if(m.current==null){m.current=w,f.current=requestAnimationFrame(x);return}const M=w-m.current;m.current=w;const G=(t?20:30)*(i.animal.speed??.5)*M/1e3,ae=window.innerWidth||1,ue=G/ae*100*y.current.direction;let S=y.current.xPct+ue,_=y.current.direction;S>92?(S=92,_=-1):S<2&&(S=2,_=1);const I=w/1e3,T=Math.sin(I*6)*(i.animal.bounceHeight??.1)*(t?8:12);y.current={xPct:S,direction:_},h(T),c(A=>({...A,...y.current})),f.current=requestAnimationFrame(x)};return f.current=requestAnimationFrame(x),()=>{f.current!=null&&cancelAnimationFrame(f.current),f.current=null,m.current=null}},[t,r,n==null?void 0:n.id]),r)return null;const E=_T(t?28:40,24,48),P=t?6:10;return p.jsx(K,{"aria-hidden":!0,sx:{position:"fixed",left:`${a.xPct}%`,bottom:`${P+u}px`,transform:`translateX(-50%) scaleX(${a.direction})`,transition:"transform 0.1s linear",fontSize:`${E}px`,zIndex:1,pointerEvents:"none",filter:e.palette.mode==="light"?"drop-shadow(0 2px 4px rgba(0,0,0,0.2))":"drop-shadow(0 2px 4px rgba(0,0,0,0.5))",opacity:.9},children:p.jsx("span",{role:"img","aria-label":"theme-animal",children:s})})},na=n=>{switch(n){case"/":Te(()=>import("./Dashboard-e667933b.js").then(e=>e.D),["assets/Dashboard-e667933b.js","assets/mui-2bb62da7.js","assets/dayjs-9d6a636c.js"]);break;case"/condition":Te(()=>import("./ConditionTracker-ca4a4f8a.js"),["assets/ConditionTracker-ca4a4f8a.js","assets/mui-2bb62da7.js","assets/dayjs-9d6a636c.js"]);break;case"/analytics":Te(()=>import("./Analytics-aa7ca702.js"),["assets/Analytics-aa7ca702.js","assets/mui-2bb62da7.js","assets/dayjs-9d6a636c.js"]);break;case"/projects":Te(()=>import("./ProjectManager-8fd050ad.js"),["assets/ProjectManager-8fd050ad.js","assets/mui-2bb62da7.js","assets/dayjs-9d6a636c.js"]);break;case"/todos":Te(()=>import("./TodoManager-dcb4920d.js"),["assets/TodoManager-dcb4920d.js","assets/mui-2bb62da7.js","assets/dayjs-9d6a636c.js"]);break;case"/pomodoro":Te(()=>import("./Pomodoro-825f67c3.js"),["assets/Pomodoro-825f67c3.js","assets/mui-2bb62da7.js","assets/dayjs-9d6a636c.js"]);break;case"/chat":Te(()=>import("./Chat-aced7d81.js"),["assets/Chat-aced7d81.js","assets/mui-2bb62da7.js","assets/dayjs-9d6a636c.js","assets/presence-8e8f8271.js"]);break;case"/profile":Te(()=>import("./Profile-824ac50f.js"),["assets/Profile-824ac50f.js","assets/mui-2bb62da7.js","assets/dayjs-9d6a636c.js"]);break;case"/settings":Te(()=>import("./Settings-970d8adc.js"),["assets/Settings-970d8adc.js","assets/mui-2bb62da7.js","assets/dayjs-9d6a636c.js"]);break;case"/admin":Te(()=>import("./AdminPanel-8274022f.js"),["assets/AdminPanel-8274022f.js","assets/mui-2bb62da7.js","assets/dayjs-9d6a636c.js","assets/presence-8e8f8271.js"]);break}},IT=180,Oh=280,ET=({children:n,user:e,themeConfig:t})=>{var A,b,v,re;const r=jh(),s=Mi(),i=Qh(),[a,c]=k.useState(null),[u,h]=k.useState(!1),f=oa(r.breakpoints.down("md")),[m,y]=k.useState(!1),[E,P]=k.useState(!1),x=Ri(e.email),w=()=>{y(!m)},M=()=>{P(!E)},U=J=>{i(J),f&&y(!1)},G=(()=>{var L,V;const J={penguin:{name:"펭귄",environment:"빙하",homeIcon:p.jsx(Gl,{}),healthIcon:p.jsx(Gl,{}),analyticsIcon:p.jsx(Ls,{}),projectIcon:p.jsx(Kl,{}),timerIcon:p.jsx(Mr,{}),chatIcon:p.jsx(Us,{}),profileIcon:p.jsx(yn,{}),adminIcon:p.jsx(Bs,{}),settingsIcon:p.jsx(Or,{})},"desert-fox":{name:"사막여우",environment:"사막",homeIcon:p.jsx(Pm,{}),healthIcon:p.jsx(yn,{}),analyticsIcon:p.jsx(Ls,{}),projectIcon:p.jsx(Kl,{}),timerIcon:p.jsx(Mr,{}),chatIcon:p.jsx(Us,{}),profileIcon:p.jsx(yn,{}),adminIcon:p.jsx(Bs,{}),settingsIcon:p.jsx(Or,{})},sheep:{name:"양",environment:"목초지",homeIcon:p.jsx(km,{}),healthIcon:p.jsx(yn,{}),analyticsIcon:p.jsx(Ls,{}),projectIcon:p.jsx(Dm,{}),timerIcon:p.jsx(Mr,{}),chatIcon:p.jsx(Us,{}),profileIcon:p.jsx(yn,{}),adminIcon:p.jsx(Bs,{}),settingsIcon:p.jsx(Or,{})},cat:{name:"고양이",environment:"집",homeIcon:p.jsx(Ql,{}),healthIcon:p.jsx(yn,{}),analyticsIcon:p.jsx(Ls,{}),projectIcon:p.jsx(Ql,{}),timerIcon:p.jsx(Mr,{}),chatIcon:p.jsx(Us,{}),profileIcon:p.jsx(yn,{}),adminIcon:p.jsx(Bs,{}),settingsIcon:p.jsx(Or,{})}},ke=(t==null?void 0:t.id)||"penguin",fe=J[ke]||J.penguin,rt=[{text:"홈",icon:fe.homeIcon,path:"/",emoji:(t==null?void 0:t.emoji)||"🐧",color:r.palette.primary.main,description:`${fe.name}와 함께하는 홈`},{text:"컨디션 체크",icon:fe.healthIcon,path:"/condition",emoji:"💚",color:r.palette.success.main,description:"몸과 마음의 상태 기록"},{text:"활동 분석",icon:fe.analyticsIcon,path:"/analytics",emoji:"📊",color:r.palette.info.main,description:"데이터로 보는 나의 변화"},{text:(L=t==null?void 0:t.concepts)!=null&&L.projectType?`${fe.name} ${t.concepts.projectType}`:`${fe.name} 프로젝트`,icon:fe.projectIcon,path:"/projects",emoji:hn(ke),color:r.palette.warning.main,description:((V=t==null?void 0:t.concepts)==null?void 0:V.projectManage)||"프로젝트 관리"},{text:"계획 관리",icon:p.jsx(Cm,{}),path:"/todos",emoji:"📝",color:r.palette.primary.main,description:"할일과 대주제(에픽) 관리"},{text:"집중 여행",icon:fe.timerIcon,path:"/pomodoro",emoji:j(ke),color:r.palette.secondary.main,description:`${fe.name}과 함께하는 집중 시간`},{text:"프로필",icon:fe.profileIcon,path:"/profile",emoji:"👤",color:r.palette.secondary.main,description:"개인 정보 및 설정"}];function hn(ne){switch(ne){case"penguin":return"🗺️";case"desert-fox":return"🐪";case"sheep":return"🚜";case"cat":return"🏠";default:return"📁"}}function j(ne){switch(ne){case"penguin":return"⏰";case"desert-fox":return"🕒";case"sheep":return"⏲️";case"cat":return"🕐";default:return"⏰"}}x&&rt.push({text:`${fe.environment} 관리소`,icon:fe.adminIcon,path:"/admin",emoji:D(ke),color:r.palette.error.main,description:"관리자 전용 패널"});function D(ne){switch(ne){case"penguin":return"🏛️";case"desert-fox":return"🏢";case"sheep":return"🏪";case"cat":return"🏬";default:return"🏛️"}}rt.push({text:`${fe.environment} 설정`,icon:fe.settingsIcon,path:"/settings",emoji:F(ke),color:r.palette.grey[600],description:"앱 설정 및 환경설정"});function F(ne){switch(ne){case"penguin":return"❄️";case"desert-fox":return"⚙️";case"sheep":return"🔧";case"cat":return"🔩";default:return"⚙️"}}return rt})(),ae=()=>{var ke,fe;return{"/":`${(t==null?void 0:t.emoji)||"🏠"} ${((ke=t==null?void 0:t.concepts)==null?void 0:ke.environment)||"홈"}`,"/condition":`💚 ${((fe=t==null?void 0:t.concepts)==null?void 0:fe.animal)||"🐧"} 컨디션 트래커`,"/analytics":"📊 분석 리포트","/projects":"🚀 프로젝트 관리","/todos":"✅ 할 일 관리","/pomodoro":"🍅 뽀모도로 타이머","/profile":"👤 프로필","/settings":"⚙️ 설정","/admin":"🛠️ 관리자 패널"}[s.pathname]||"개인 비서"},ue=J=>{c(J.currentTarget)},S=()=>{c(null)},_=async()=>{try{await J0(),S()}catch(J){console.error("로그아웃 실패:",J)}},I=p.jsxs(p.Fragment,{children:[p.jsxs(K,{sx:{p:2,display:"flex",alignItems:"center",justifyContent:E&&!f?"center":"space-between",borderBottom:`1px solid ${r.palette.divider}`,minHeight:64},children:[(!E||f)&&p.jsxs(H,{variant:"h6",fontWeight:"bold",color:"primary",children:[t==null?void 0:t.emoji," ",(t==null?void 0:t.name)||"개인 비서"]}),!f&&p.jsx(bt,{onClick:M,size:"small",sx:{color:r.palette.text.secondary,transform:E?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.3s"},children:p.jsx(gm,{})})]}),p.jsx(ym,{sx:{flexGrow:1,px:1},children:G.map(J=>p.jsx(_m,{disablePadding:!0,sx:{mb:.5},children:p.jsxs(vm,{selected:s.pathname===J.path,onClick:()=>U(J.path),onMouseEnter:()=>na(J.path),onFocus:()=>na(J.path),onTouchStart:()=>na(J.path),sx:{borderRadius:2,justifyContent:E&&!f?"center":"flex-start",px:E&&!f?1:2,"&.Mui-selected":{backgroundColor:J.color+"15","&:hover":{backgroundColor:J.color+"25"}},"&:hover":{backgroundColor:J.color+"10"}},children:[p.jsx(js,{sx:{color:J.color,minWidth:E&&!f?"auto":35,justifyContent:"center"},children:J.icon}),(!E||f)&&p.jsx(Fs,{primary:J.text,primaryTypographyProps:{fontSize:"0.875rem",fontWeight:s.pathname===J.path?600:400}})]})},J.text))}),p.jsx(K,{sx:{p:2,borderTop:`1px solid ${r.palette.divider}`},children:p.jsxs(K,{sx:{display:"flex",alignItems:"center",gap:1,justifyContent:E&&!f?"center":"flex-start"},children:[p.jsx(en,{src:e.photoURL||void 0,sx:{width:32,height:32},children:((A=e.displayName)==null?void 0:A[0])||((b=e.email)==null?void 0:b[0])||"U"}),(!E||f)&&p.jsxs(p.Fragment,{children:[p.jsx(K,{sx:{flex:1,minWidth:0},children:p.jsx(H,{variant:"caption",noWrap:!0,children:e.displayName||e.email})}),p.jsx(bt,{size:"small",onClick:ue,children:p.jsx(Im,{fontSize:"small"})})]})]})})]}),T=f?Oh:E?72:IT;return p.jsxs(K,{sx:{display:"flex",width:"100%"},children:[!f&&p.jsx(Hl,{variant:"permanent",sx:{width:T,flexShrink:0,transition:r.transitions.create("width",{easing:r.transitions.easing.sharp,duration:r.transitions.duration.enteringScreen}),"& .MuiDrawer-paper":{width:T,boxSizing:"border-box",bgcolor:r.palette.background.paper,borderRight:`1px solid ${r.palette.divider}`,transition:r.transitions.create("width",{easing:r.transitions.easing.sharp,duration:r.transitions.duration.enteringScreen}),overflowX:"hidden"}},children:I}),f&&p.jsx(Hl,{variant:"temporary",open:m,onClose:w,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:Oh,boxSizing:"border-box",bgcolor:r.palette.background.paper}},children:I}),p.jsxs(K,{component:"main",sx:{flexGrow:1,overflow:"hidden",width:f?"100%":`calc(100% - ${T}px)`,transition:r.transitions.create("width",{easing:r.transitions.easing.sharp,duration:r.transitions.duration.enteringScreen})},children:[p.jsx(Em,{position:"static",elevation:0,sx:{bgcolor:r.palette.background.paper,borderBottom:`1px solid ${r.palette.divider}`},children:p.jsxs(wm,{children:[f&&p.jsx(bt,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:w,sx:{mr:2,color:r.palette.text.primary},children:p.jsx(Tm,{})}),p.jsx(H,{variant:"h6",component:"div",sx:{flexGrow:1,color:r.palette.text.primary,fontSize:f?"1rem":"1.25rem"},children:ae()}),p.jsx(Sm,{title:"피드백 보내기",children:p.jsx(bt,{onClick:()=>h(!0),sx:{color:r.palette.text.primary,mr:1,"&:hover":{backgroundColor:r.palette.action.hover}},children:p.jsx(Am,{})})}),p.jsx(en,{src:e.photoURL||void 0,sx:{width:32,height:32},children:((v=e.displayName)==null?void 0:v[0])||((re=e.email)==null?void 0:re[0])||"U"})]})}),p.jsxs(K,{sx:{height:"calc(100vh - 64px)",overflow:"auto",p:0,"& > *":{px:f?1:3,py:f?1:3}},children:[n,p.jsx(vT,{themeConfig:t})]})]}),p.jsxs(bm,{anchorEl:a,open:!!a,onClose:S,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"bottom",horizontal:"right"},children:[p.jsxs(Tn,{onClick:()=>{i("/profile"),S()},children:[p.jsx(js,{children:p.jsx(Rm,{fontSize:"small"})}),p.jsx(Fs,{children:"프로필"})]}),p.jsxs(Tn,{onClick:()=>{i("/settings"),S()},children:[p.jsx(js,{children:p.jsx(Or,{fontSize:"small"})}),p.jsx(Fs,{children:"설정"})]}),p.jsx(Fh,{}),p.jsxs(Tn,{onClick:_,children:[p.jsx(js,{children:p.jsx(xm,{fontSize:"small"})}),p.jsx(Fs,{children:"로그아웃"})]})]}),p.jsx(aT,{open:u,onClose:()=>h(!1),user:e})]})},wT=()=>{var P,x;const[n,e]=k.useState(!1),[t,r]=k.useState(null),[s,i]=k.useState(null),[a,c]=k.useState(!1),[u,h]=k.useState(null),[f,m]=k.useState(""),y=async()=>{e(!0),r("");try{const w=await H0();console.log(w?"로그인 성공! App.tsx에서 권한 상태를 확인합니다. 🐧":"로그인이 취소되었습니다.")}catch(w){console.error("로그인 실패:",w),r(w.message||"로그인에 실패했습니다. 다시 시도해주세요. 🐧")}finally{e(!1)}},E=async()=>{if(u){e(!0);try{await Ip({email:u.email,displayName:u.displayName||"",photoURL:u.photoURL||void 0,reason:f}),i("접근 권한 신청이 완료되었습니다! 관리자의 승인을 기다려주세요."),c(!1),h(null),m("")}catch{r("신청 중 오류가 발생했습니다.")}finally{e(!1)}}};return p.jsxs(K,{sx:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",p:2},children:[p.jsx(rr,{sx:{maxWidth:400,width:"100%",textAlign:"center"},children:p.jsxs(Vm,{sx:{p:4},children:[p.jsx(en,{sx:{width:80,height:80,mx:"auto",mb:3,bgcolor:"primary.main",fontSize:"2rem"},children:"🐧"}),p.jsx(H,{variant:"h4",fontWeight:"bold",gutterBottom:!0,children:"펭귄 비서"}),p.jsx(H,{variant:"body1",color:"textSecondary",sx:{mb:4},children:"나만의 똑똑한 펭귄과 함께하세요 🐟"}),s&&p.jsx(nr,{severity:"success",sx:{mb:3},children:s}),t&&p.jsx(nr,{severity:"error",sx:{mb:3},children:t}),p.jsx(ze,{variant:"contained",size:"large",fullWidth:!0,onClick:y,disabled:n,startIcon:n?p.jsx(kn,{size:20}):p.jsx(Nm,{}),sx:{py:1.5,fontSize:"1.1rem",textTransform:"none",borderRadius:2},children:n?"로그인 중...":"Google로 로그인"}),p.jsxs(H,{variant:"caption",color:"textSecondary",sx:{mt:3,display:"block"},children:["승인된 사용자만 접근할 수 있습니다 🔒",p.jsx("br",{}),"처음 사용하시는 경우 접근 권한을 신청해주세요"]})]})}),p.jsxs(xi,{open:a,onClose:()=>c(!1),maxWidth:"sm",fullWidth:!0,children:[p.jsx(Ci,{children:"접근 권한 신청"}),p.jsxs(Pi,{children:[u&&p.jsxs(K,{sx:{mb:3,textAlign:"center"},children:[p.jsx(en,{src:u.photoURL||void 0,sx:{width:60,height:60,mx:"auto",mb:2},children:((P=u.displayName)==null?void 0:P[0])||((x=u.email)==null?void 0:x[0])}),p.jsx(H,{variant:"h6",children:u.displayName}),p.jsx(H,{variant:"body2",color:"textSecondary",children:u.email})]}),p.jsx(H,{variant:"body2",color:"textSecondary",sx:{mb:2},children:"개인 비서 앱 사용을 위한 접근 권한을 신청합니다. 관리자가 검토 후 승인해드릴게요! 🚀"}),p.jsx(oi,{fullWidth:!0,multiline:!0,rows:3,label:"신청 사유 (선택사항)",placeholder:"개인 비서 앱을 사용하고 싶은 이유를 간단히 적어주세요...",value:f,onChange:w=>m(w.target.value),sx:{mt:2}})]}),p.jsxs(ki,{children:[p.jsx(ze,{onClick:()=>c(!1),children:"취소"}),p.jsx(ze,{onClick:E,variant:"contained",startIcon:p.jsx(La,{}),disabled:n,children:"신청하기"})]})]})]})},Ap=k.createContext(void 0),TT=({children:n})=>{const[e,t]=k.useState(!1),[r,s]=k.useState(25*60),[i,a]=k.useState(25*60),[c,u]=k.useState(null),[h,f]=k.useState(null),[m,y]=k.useState(!1),[E,P]=k.useState(0),[x,w]=k.useState(null),[M,U]=k.useState(null),z=k.useRef(null),G=k.useRef(null);k.useEffect(()=>(e&&r>0?G.current=setInterval(()=>{s(re=>re<=1?(t(!1),b(),0):re-1)},1e3):G.current&&(clearInterval(G.current),G.current=null),()=>{G.current&&clearInterval(G.current)}),[e,r]),k.useEffect(()=>{const re={isActive:e,time:r,totalTime:i,selectedProject:c,selectedTask:h,isBreak:m,completedSessions:E,sessionStartTime:x,currentSessionId:M};localStorage.setItem("pomodoroState",JSON.stringify(re))},[e,r,i,c,h,m,E,x,M]),k.useEffect(()=>{const re=localStorage.getItem("pomodoroState");if(re)try{const J=JSON.parse(re);t(J.isActive||!1),s(J.time||25*60),a(J.totalTime||25*60),u(J.selectedProject||null),f(J.selectedTask||null),y(J.isBreak||!1),P(J.completedSessions||0),w(J.sessionStartTime||null),U(J.currentSessionId||null)}catch(J){console.error("뽀모도로 상태 복원 실패:",J)}},[]);const ae=()=>c?h?(x||(w(new Date().toISOString()),U(Date.now().toString())),z.current=Date.now(),t(!0),!0):(console.warn("⚠️ 작업을 선택해주세요!"),!1):(console.warn("⚠️ 프로젝트를 선택해주세요!"),!1),ue=()=>{t(!1),A()},S=()=>{t(!1),s(i),w(null),U(null),z.current=null},_=re=>{const J=re*60;s(J),a(J)},I=re=>{u(re)},T=re=>{f(re)},A=()=>{if(!x||!M)return;const re=Math.floor((i-r)/60);if(re<1)return;const J={id:M,projectId:c==null?void 0:c.id,projectTitle:(c==null?void 0:c.title)||"프로젝트 없음",taskId:h==null?void 0:h.id,taskTitle:(h==null?void 0:h.title)||"작업 없음",sessionType:m?"break":"focus",duration:i/60,actualDuration:re,startTime:x,endTime:new Date().toISOString(),completed:!1,pausedAt:new Date().toISOString()},fe=[...JSON.parse(localStorage.getItem("pomodoroSessions")||"[]"),J];localStorage.setItem("pomodoroSessions",JSON.stringify(fe)),console.log("세션 중간 저장:",J)},b=()=>{if(x&&M){const re={id:M,projectId:c==null?void 0:c.id,projectTitle:(c==null?void 0:c.title)||"프로젝트 없음",taskId:h==null?void 0:h.id,taskTitle:(h==null?void 0:h.title)||"작업 없음",sessionType:m?"break":"focus",duration:i/60,actualDuration:i/60,startTime:x,endTime:new Date().toISOString(),completed:!0},ke=[...JSON.parse(localStorage.getItem("pomodoroSessions")||"[]"),re];localStorage.setItem("pomodoroSessions",JSON.stringify(ke)),console.log("세션 완료 저장:",re)}P(re=>re+1),w(null),U(null),m?(y(!1),_(25)):(y(!0),_(5)),"Notification"in window&&Notification.permission==="granted"&&new Notification(m?"브레이크 완료! 🎉":"뽀모도로 완료! 🍅",{body:m?"작업을 시작하세요!":"잠시 휴식하세요!",icon:m?"🎉":"🍅"})},v={isActive:e,time:r,totalTime:i,selectedProject:c,selectedTask:h,isBreak:m,completedSessions:E,sessionStartTime:x,currentSessionId:M,startTimer:ae,pauseTimer:ue,resetTimer:S,setTime:_,setProject:I,setTask:T,setIsBreak:y,completeSession:b,saveCurrentSession:A};return p.jsx(Ap.Provider,{value:v,children:n})},ST=()=>{const n=k.useContext(Ap);if(n===void 0)throw new Error("usePomodoro must be used within a PomodoroProvider");return n},AT=n=>{const e=Math.floor(n/60),t=n%60;return`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`},bT=({onClose:n})=>{const{isActive:e,time:t,totalTime:r,selectedProject:s,selectedTask:i,isBreak:a,startTimer:c,pauseTimer:u,resetTimer:h,sessionStartTime:f}=ST(),m=Qh(),y=Mi(),[E,P]=k.useState(!1),[x,w]=k.useState({x:20,y:20}),[M,U]=k.useState(!1),[z,G]=k.useState({x:0,y:0}),ae=b=>{b.target.closest(".drag-handle")&&(b.preventDefault(),U(!0),G({x:b.clientX-x.x,y:b.clientY-x.y}))},ue=b=>{if(M){const v=b.clientX-z.x,re=b.clientY-z.y,J=window.innerWidth-300,ke=window.innerHeight-200;w({x:Math.max(0,Math.min(v,J)),y:Math.max(0,Math.min(re,ke))})}},S=()=>{U(!1)};Di.useEffect(()=>{if(M)return document.addEventListener("mousemove",ue),document.addEventListener("mouseup",S),()=>{document.removeEventListener("mousemove",ue),document.removeEventListener("mouseup",S)}},[M,z,x]);const _=y.pathname!=="/pomodoro";if(!_)return null;const I=(r-t)/r*100,T=()=>{M||m("/pomodoro")},A=E||!s||!i;return p.jsx(Lh,{direction:"up",in:_,mountOnEnter:!0,unmountOnExit:!0,children:p.jsx(K,{sx:{position:"fixed",bottom:`${x.y}px`,right:`${x.x}px`,zIndex:1e3,maxWidth:E?180:280,minWidth:E?160:260,cursor:M?"grabbing":"default"},children:p.jsx(Om,{in:_,children:p.jsx(rr,{sx:{borderRadius:2,boxShadow:M?"0 20px 60px rgba(0, 0, 0, 0.4)":"0 8px 32px rgba(0, 0, 0, 0.2)",background:a?"linear-gradient(135deg, #4CAF50 0%, #81C784 100%)":"linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%)",color:"white",cursor:A?"pointer":"default",transition:M?"none":"all 0.3s ease",border:"2px solid rgba(255, 255, 255, 0.3)","&:hover":{transform:M?"none":"translateY(-4px)",boxShadow:M?"0 20px 60px rgba(0, 0, 0, 0.4)":"0 12px 40px rgba(0, 0, 0, 0.3)",border:"2px solid rgba(255, 255, 255, 0.5)"}},onClick:A?T:void 0,onMouseDown:ae,children:p.jsxs(K,{sx:{p:E?1:2},children:[p.jsxs(K,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",mb:E?.5:1,borderBottom:E?"none":"1px solid rgba(255, 255, 255, 0.2)",pb:E?0:1},children:[p.jsxs(K,{sx:{display:"flex",alignItems:"center",gap:1},children:[p.jsx(Mm,{className:"drag-handle",sx:{fontSize:E?"0.8rem":"1rem",cursor:"grab",opacity:.7,"&:hover":{opacity:1},"&:active":{cursor:"grabbing"}}}),p.jsx(Mr,{sx:{fontSize:E?"0.9rem":"1.1rem"}}),!E&&p.jsx(H,{variant:"body2",fontWeight:"bold",sx:{fontSize:"0.85rem"},children:a?"🌱 BREAK":"🍅 FOCUS"})]}),p.jsxs(K,{sx:{display:"flex",gap:.5},children:[p.jsx(bt,{size:"small",onClick:b=>{b.stopPropagation(),P(!E)},sx:{color:"white",opacity:.7,"&:hover":{opacity:1},width:24,height:24},children:E?p.jsx(jm,{fontSize:"small"}):p.jsx(Fm,{fontSize:"small"})}),n&&p.jsx(bt,{size:"small",onClick:b=>{b.stopPropagation(),n()},sx:{color:"white",opacity:.7,"&:hover":{opacity:1},width:24,height:24},children:p.jsx(Uh,{fontSize:"small"})})]})]}),p.jsxs(K,{sx:{textAlign:"center",mb:E?.5:2,py:E?.5:1,backgroundColor:"rgba(0, 0, 0, 0.2)",borderRadius:2,border:"1px solid rgba(255, 255, 255, 0.2)"},children:[p.jsx(H,{variant:E?"h5":"h3",fontWeight:"bold",sx:{fontFamily:"'Roboto Mono', 'Courier New', monospace",fontSize:E?"1.5rem":"2.2rem",letterSpacing:"0.05em",textShadow:"0 2px 4px rgba(0,0,0,0.3)"},children:AT(t)}),!E&&p.jsxs(H,{variant:"caption",sx:{opacity:.8,fontSize:"0.7rem",display:"block",mt:.5},children:[Math.floor(I),"% COMPLETE"]})]}),!E&&p.jsxs(p.Fragment,{children:[p.jsx(Bh,{variant:"determinate",value:I,sx:{height:8,borderRadius:2,mb:2,backgroundColor:"rgba(0, 0, 0, 0.3)",border:"1px solid rgba(255, 255, 255, 0.2)","& .MuiLinearProgress-bar":{borderRadius:2,backgroundColor:"rgba(255, 255, 255, 0.9)",boxShadow:"0 0 10px rgba(255, 255, 255, 0.5)"}}}),s||i?p.jsxs(K,{sx:{mb:2,p:1,backgroundColor:"rgba(0, 0, 0, 0.2)",borderRadius:2,border:"1px solid rgba(255, 255, 255, 0.2)"},children:[s&&p.jsxs(H,{variant:"caption",sx:{display:"block",opacity:.9,fontSize:"0.7rem",fontWeight:"bold"},children:["📁 ",s.title]}),i&&p.jsxs(H,{variant:"caption",sx:{display:"block",opacity:.8,fontSize:"0.7rem",mt:.5},children:["📝 ",i.title]})]}):p.jsxs(K,{sx:{mb:2,p:1,backgroundColor:"rgba(255, 255, 255, 0.1)",borderRadius:2,border:"1px dashed rgba(255, 255, 255, 0.3)"},children:[p.jsx(H,{variant:"caption",sx:{display:"block",opacity:.7,fontSize:"0.65rem",textAlign:"center",fontStyle:"italic"},children:"⚠️ No project/task selected"}),p.jsx(H,{variant:"caption",sx:{display:"block",opacity:.6,fontSize:"0.6rem",textAlign:"center",mt:.5},children:"Click to set up"})]}),p.jsxs(K,{sx:{display:"flex",justifyContent:"center",gap:1,mb:1},children:[p.jsx(bt,{size:"small",onClick:b=>{b.stopPropagation(),e?u():c()||alert(`프로젝트와 작업을 먼저 선택해주세요! 🎯

뽀모도로 페이지에서 설정할 수 있습니다.`)},disabled:!s||!i,sx:{backgroundColor:"rgba(255, 255, 255, 0.2)",color:"white",width:36,height:36,border:"1px solid rgba(255, 255, 255, 0.3)","&:hover":{backgroundColor:"rgba(255, 255, 255, 0.3)",transform:"scale(1.05)"},"&:disabled":{backgroundColor:"rgba(255, 255, 255, 0.1)",color:"rgba(255, 255, 255, 0.5)"},transition:"all 0.2s ease"},children:e?p.jsx(Lm,{fontSize:"small"}):p.jsx(Um,{fontSize:"small"})}),p.jsx(bt,{size:"small",onClick:b=>{b.stopPropagation(),h()},sx:{backgroundColor:"rgba(255, 255, 255, 0.2)",color:"white",width:36,height:36,border:"1px solid rgba(255, 255, 255, 0.3)","&:hover":{backgroundColor:"rgba(255, 255, 255, 0.3)",transform:"scale(1.05)"},transition:"all 0.2s ease"},children:p.jsx(Bm,{fontSize:"small"})})]}),p.jsx(H,{variant:"caption",sx:{display:"block",textAlign:"center",opacity:.6,fontSize:"0.65rem"},children:"📱 Click to expand"})]}),E&&p.jsx(H,{variant:"caption",sx:{display:"block",textAlign:"center",mt:.5,opacity:.7,fontSize:"0.6rem"},children:"↗️ Click to expand"})]})})})})})},qc="emergency_alerts",RT=()=>`alert-${Date.now()}-${Math.random().toString(36).substr(2,9)}`,xT=n=>{const e={id:RT(),title:n.title,message:n.message,type:n.type||"info",severity:n.severity||"medium",dismissible:n.dismissible!==!1,persistent:n.persistent||!1,showOnce:n.showOnce||!1,dismissed:!1,createdAt:W().toISOString(),expiresAt:n.expiresIn?W().add(n.expiresIn,"minute").toISOString():void 0},t=un();return t.push(e),po(t),e},un=()=>{try{const n=localStorage.getItem(qc);return n?JSON.parse(n):[]}catch(n){return console.error("긴급알림 로드 실패:",n),[]}},po=n=>{try{localStorage.setItem(qc,JSON.stringify(n))}catch(e){console.error("긴급알림 저장 실패:",e)}},bp=()=>{const n=un(),e=W();return n.filter(t=>!(t.dismissed||t.expiresAt&&e.isAfter(W(t.expiresAt))))},CT=()=>un().sort((e,t)=>W(t.createdAt).valueOf()-W(e.createdAt).valueOf()),PT=()=>{const n=un(),e=W();return n.filter(t=>!(t.read||t.expiresAt&&e.isAfter(W(t.expiresAt))))},kT=n=>{const e=un(),t=e.findIndex(r=>r.id===n);t!==-1&&(e[t].read=!0,e[t].readAt=W().toISOString(),po(e))},Fa=n=>{const e=un(),t=e.findIndex(r=>r.id===n);t!==-1&&(e[t].dismissed=!0,e[t].dismissedAt=W().toISOString(),po(e))},DT=()=>{localStorage.removeItem(qc)},VT=()=>{const n=un(),e=W(),t=n.filter(r=>!(r.expiresAt&&e.isAfter(W(r.expiresAt))&&!r.persistent));t.length!==n.length&&po(t)},Rp={create:n=>{const e=xT(n);return console.log("🚨 긴급알림이 생성되었습니다:",e),e},list:()=>{const n=un();return console.table(n),n},active:()=>{const n=bp();return console.table(n),n},history:()=>{const n=CT();return console.table(n),n},unread:()=>{const n=PT();return console.table(n),n},markRead:n=>{kT(n),console.log(`📖 알림 ${n}를 읽음으로 표시했습니다.`)},dismiss:n=>{Fa(n),console.log(`✅ 알림 ${n}가 닫혔습니다.`)},clear:()=>{DT(),console.log("🗑️ 모든 긴급알림이 삭제되었습니다.")},createSamples:()=>{[{title:"🎉 새로운 기능 업데이트",message:"데이터 백업 및 복구 기능이 추가되었습니다! 이제 언제든지 안전하게 데이터를 관리할 수 있어요.",type:"success",severity:"medium",expiresIn:1440},{title:"⚠️ 시스템 점검 안내",message:"내일 오전 2시-4시 시스템 점검이 예정되어 있습니다. 이 시간 동안 서비스 이용이 제한될 수 있습니다.",type:"warning",severity:"high",expiresIn:2880},{title:"🚨 중요 보안 업데이트",message:"보안 강화를 위한 업데이트가 적용되었습니다. 모든 사용자는 비밀번호 변경을 권장합니다.",type:"error",severity:"critical",persistent:!0,dismissible:!0}].forEach(e=>Rp.create(e)),console.log("📋 샘플 긴급알림들이 생성되었습니다.")}};typeof window<"u"&&(window.adminAlert=Rp);const NT=Di.forwardRef(function(e,t){return p.jsx(Lh,{direction:"down",ref:t,...e})}),OT=({onAlertDismissed:n})=>{const[e,t]=k.useState([]),[r,s]=k.useState(0),[i,a]=k.useState(!1);k.useEffect(()=>{const x=()=>{VT();const M=bp();M.length>0?(t(M),s(0),a(!0)):a(!1)};x();const w=setInterval(x,3e4);return()=>clearInterval(w)},[]);const c=e[r],u=(x,w)=>{const M={fontSize:"large",sx:{mr:1,color:w==="critical"?"error.main":w==="high"?"warning.main":w==="medium"?"info.main":"success.main"}};switch(x){case"error":return p.jsx(Hm,{...M});case"warning":return p.jsx(Wm,{...M});case"success":return p.jsx(qm,{...M});default:return w==="critical"?p.jsx($m,{...M}):p.jsx(zm,{...M})}},h=x=>{switch(x){case"critical":return"error";case"high":return"warning";case"medium":return"info";case"low":return"success";default:return"info"}},f=x=>{switch(x){case"critical":return"🚨 긴급";case"high":return"⚠️ 높음";case"medium":return"📢 보통";case"low":return"💡 낮음";default:return"📢 보통"}},m=()=>{if(c){Fa(c.id),n==null||n(c.id);const x=e.filter(w=>w.id!==c.id);x.length>0?(t(x),s(Math.min(r,x.length-1))):(a(!1),t([]),s(0))}},y=()=>{r<e.length-1&&s(r+1)},E=()=>{r>0&&s(r-1)},P=()=>{e.forEach(x=>{x.dismissible&&(Fa(x.id),n==null||n(x.id))}),a(!1),t([]),s(0)};return!c||!i?null:p.jsxs(xi,{open:i,TransitionComponent:NT,keepMounted:!0,onClose:c.dismissible?m:void 0,maxWidth:"md",fullWidth:!0,PaperProps:{sx:{borderRadius:3,border:"2px solid",borderColor:`${h(c.severity)}.main`,boxShadow:`0 8px 32px rgba(${c.severity==="critical"?"244, 67, 54":c.severity==="high"?"255, 152, 0":c.severity==="medium"?"33, 150, 243":"76, 175, 80"}, 0.3)`}},children:[p.jsxs(Ci,{sx:{backgroundColor:`${h(c.severity)}.main`,color:"white",display:"flex",alignItems:"center",justifyContent:"space-between",pr:1},children:[p.jsxs(K,{display:"flex",alignItems:"center",flex:1,children:[u(c.type,c.severity),p.jsx(H,{variant:"h6",fontWeight:"bold",sx:{mr:2},children:c.title}),p.jsx(Mh,{label:f(c.severity),size:"small",sx:{backgroundColor:"rgba(255, 255, 255, 0.2)",color:"white",fontWeight:"bold"}})]}),c.dismissible&&p.jsx(bt,{size:"small",onClick:m,sx:{color:"white",ml:1},children:p.jsx(Uh,{})})]}),p.jsxs(Pi,{sx:{pt:3},children:[p.jsx(nr,{severity:c.type,sx:{mb:2,borderRadius:2},icon:!1,children:p.jsx(H,{variant:"body1",sx:{whiteSpace:"pre-line"},children:c.message})}),p.jsxs(K,{sx:{mt:2,p:2,backgroundColor:"grey.50",borderRadius:2},children:[p.jsxs(H,{variant:"caption",color:"text.secondary",display:"block",children:["📅 생성: ",W(c.createdAt).format("YYYY-MM-DD HH:mm")]}),c.expiresAt&&p.jsxs(H,{variant:"caption",color:"text.secondary",display:"block",children:["⏰ 만료: ",W(c.expiresAt).format("YYYY-MM-DD HH:mm")]}),c.persistent&&p.jsx(H,{variant:"caption",color:"warning.main",display:"block",children:"📌 지속적 알림 (새로고침해도 계속 표시)"})]}),e.length>1&&p.jsxs(p.Fragment,{children:[p.jsx(Fh,{sx:{my:2}}),p.jsxs(K,{display:"flex",justifyContent:"center",alignItems:"center",gap:2,children:[p.jsx(ze,{size:"small",onClick:E,disabled:r===0,variant:"outlined",children:"이전"}),p.jsxs(H,{variant:"body2",color:"text.secondary",children:[r+1," / ",e.length]}),p.jsx(ze,{size:"small",onClick:y,disabled:r===e.length-1,variant:"outlined",children:"다음"})]})]})]}),p.jsxs(ki,{sx:{p:3,gap:1},children:[e.length>1&&p.jsx(ze,{onClick:P,variant:"outlined",color:"secondary",sx:{mr:"auto"},children:"모든 알림 닫기"}),c.dismissible&&p.jsx(ze,{onClick:m,variant:"contained",color:"primary",children:e.length>1?"이 알림 닫기":"확인"}),!c.dismissible&&p.jsx(H,{variant:"caption",color:"text.secondary",sx:{fontStyle:"italic"},children:"이 알림은 자동으로 닫을 수 없습니다"})]})]})},MT=({message:n="시스템 점검 중입니다. 잠시 후 다시 이용해주세요."})=>p.jsxs(K,{sx:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",p:3},children:[p.jsxs(Gm,{elevation:8,sx:{p:6,textAlign:"center",maxWidth:500,borderRadius:3,background:"rgba(255, 255, 255, 0.95)",backdropFilter:"blur(10px)"},children:[p.jsx(K,{sx:{mb:3},children:p.jsx(Km,{sx:{fontSize:80,color:"#ff9800",mb:2,animation:"pulse 2s infinite"}})}),p.jsx(H,{variant:"h4",fontWeight:"bold",sx:{mb:2,background:"linear-gradient(45deg, #ff9800 30%, #f57c00 90%)",backgroundClip:"text",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"🚧 시스템 점검 중"}),p.jsx(H,{variant:"body1",sx:{mb:4,color:"text.secondary",lineHeight:1.6},children:n}),p.jsx(K,{sx:{mb:3},children:p.jsx(kn,{size:40,sx:{color:"#ff9800",animation:"spin 2s linear infinite"}})}),p.jsxs(K,{sx:{display:"flex",alignItems:"center",justifyContent:"center",gap:1,color:"text.secondary"},children:[p.jsx(Qm,{fontSize:"small"}),p.jsxs(H,{variant:"body2",children:["점검 시작: ",new Date().toLocaleString("ko-KR")]})]}),p.jsx(H,{variant:"caption",sx:{mt:3,display:"block",color:"text.disabled"},children:"문의사항이 있으시면 관리자에게 연락해주세요."})]}),p.jsx("style",{children:`
          @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.5; }
            100% { opacity: 1; }
          }
          
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `})]});class jT extends Di.Component{constructor(t){super(t);dt(this,"handleRetry",()=>{this.setState({hasError:!1,error:void 0})});this.state={hasError:!1}}static getDerivedStateFromError(t){return{hasError:!0,error:t}}componentDidCatch(t){}render(){if(this.state.hasError){const t=(()=>{const r=this.state.error,s=(r==null?void 0:r.message)??"";return/Loading chunk|ChunkLoadError|dynamic import/i.test(s)?"리소스 로딩 중 문제가 발생했어요. 잠시 후 다시 시도하거나 새로고침 해주세요.":"일시적인 오류가 발생했어요. 다시 시도해주세요."})();return p.jsxs(K,{sx:{p:4,display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[p.jsx(kn,{}),p.jsx(H,{variant:"body2",color:"text.secondary",sx:{textAlign:"center"},children:t}),p.jsxs(K,{sx:{display:"flex",gap:1},children:[p.jsx(ze,{variant:"contained",onClick:this.handleRetry,children:"다시 시도"}),p.jsx(ze,{variant:"outlined",onClick:()=>window.location.reload(),children:"새로고침"})]})]})}return this.props.children}}const FT=async n=>{try{const e={title:"📦 임시 보관함 (Legacy Projects)",description:"에픽이 지정되지 않은 기존 프로젝트들이 임시로 보관되는 곳입니다. 새로운 에픽을 생성해서 프로젝트들을 정리해보세요!",status:"planning",priority:"low",startDate:new Date().toISOString().split("T")[0],dueDate:new Date(Date.now()+31536e6).toISOString().split("T")[0],progress:0,projects:[],color:"#9e9e9e",emoji:"📦",tags:["legacy","temporary"],createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),userEmail:n,isTemporary:!0},t=await kc(Nt(be,"epics"),e);return console.log("✅ 임시 에픽 생성 완료:",t.id),t.id}catch(e){throw console.error("❌ 임시 에픽 생성 실패:",e),e}},LT=async n=>{try{console.log("🔄 레거시 프로젝트 마이그레이션 시작...");const e=Zt(Nt(be,"projects"),Rt("userEmail","==",n)),t=await hr(e),r=[];if(t.forEach(u=>{const h={id:u.id,...u.data()};(!h.epicId||h.epicId==="")&&r.push(h)}),r.length===0)return console.log("✅ 마이그레이션할 레거시 프로젝트가 없습니다."),{success:!0,migratedCount:0};const s=Zt(Nt(be,"epics"),Rt("userEmail","==",n),Rt("isTemporary","==",!0)),i=await hr(s);let a;i.empty?a=await FT(n):(a=i.docs[0].id,console.log("📦 기존 임시 에픽 사용:",a));const c=r.map(async u=>{const h=Ye(be,"projects",u.id);await oo(h,{epicId:a,updatedAt:Dc()}),console.log(`📎 프로젝트 "${u.title}" → 임시 에픽으로 이동`)});return await Promise.all(c),console.log(`✅ ${r.length}개의 레거시 프로젝트 마이그레이션 완료!`),{success:!0,migratedCount:r.length,tempEpicId:a}}catch(e){return console.error("❌ 레거시 프로젝트 마이그레이션 실패:",e),{success:!1,error:e}}},CS=async n=>{try{const e=Zt(Nt(be,"epics"),Rt("userEmail","==",n),Rt("isTemporary","==",!0)),t=await hr(e);if(t.empty)return{hasTempEpic:!1,projectCount:0};const r=t.docs[0].id,s=Zt(Nt(be,"projects"),Rt("userEmail","==",n),Rt("epicId","==",r)),i=await hr(s);return{hasTempEpic:!0,tempEpicId:r,projectCount:i.size,tempEpic:{id:r,...t.docs[0].data()}}}catch(e){return console.error("❌ 임시 에픽 상태 확인 실패:",e),{hasTempEpic:!1,projectCount:0,error:e}}},PS=n=>[`📦 임시 보관함에 ${n}개의 프로젝트가 있어요!`,"🎯 관련 프로젝트들을 묶어서 새로운 에픽을 만들어보세요.",'✨ 예시: "웹사이트 리뉴얼", "모바일 앱 개발", "마케팅 캠페인" 등',"🚀 에픽으로 정리하면 프로젝트 관리가 훨씬 쉬워져요!"].join(`
`),UT=async n=>{try{const e=await LT(n);return e.success&&e.migratedCount&&e.migratedCount>0?{shouldShowNotification:!0,message:`📦 ${e.migratedCount}개의 기존 프로젝트를 임시 보관함으로 이동했어요!
새로운 에픽을 만들어서 프로젝트들을 정리해보세요! 🎯`,tempEpicId:e.tempEpicId}:{shouldShowNotification:!1}}catch(e){return console.error("❌ 자동 마이그레이션 체크 실패:",e),{shouldShowNotification:!1,error:e}}},Ze=()=>`${Date.now()}-${Math.random().toString(36).substr(2,9)}`,ra=()=>[{id:Ze(),title:"📝 할일 만들기 기능 테스트",description:"새로운 할일을 추가하고 관리하는 기능을 테스트해보세요!",completed:!1,priority:"high",dueDate:W().add(2,"day").toISOString(),tags:["기능","테스트"],epicId:"epic-1",projectId:"project-1",createdAt:W().subtract(1,"day").toISOString(),updatedAt:W().subtract(1,"day").toISOString()},{id:Ze(),title:"✅ 완료된 할일 확인하기",description:"할일 완료 기능이 잘 동작하는지 확인해보세요!",completed:!0,priority:"medium",dueDate:W().subtract(1,"day").toISOString(),tags:["완료","확인"],epicId:"epic-1",projectId:"project-1",createdAt:W().subtract(3,"day").toISOString(),updatedAt:W().subtract(1,"day").toISOString(),completedAt:W().subtract(1,"day").toISOString()},{id:Ze(),title:"🚨 긴급 할일 처리하기",description:"우선순위 기능을 테스트하기 위한 긴급 할일입니다!",completed:!1,priority:"urgent",dueDate:W().add(1,"day").toISOString(),tags:["긴급","우선순위"],epicId:"epic-2",projectId:"project-2",createdAt:W().subtract(2,"day").toISOString(),updatedAt:W().subtract(2,"day").toISOString()},{id:Ze(),title:"🐑 목장일 현황 확인하기",description:"대시보드에서 할일 현황을 확인하는 기능을 테스트해보세요!",completed:!1,priority:"low",dueDate:W().add(3,"day").toISOString(),tags:["대시보드","현황"],epicId:"epic-1",projectId:"project-1",createdAt:W().subtract(1,"hour").toISOString(),updatedAt:W().subtract(1,"hour").toISOString()}],sa=()=>[{id:"epic-1",title:"🎯 에픽 만들기 프로젝트",description:"에픽을 생성하고 관리하는 전체적인 기능을 구현해보세요!",status:"active",priority:"high",startDate:W().subtract(1,"week").toISOString(),dueDate:W().add(2,"month").toISOString(),progress:35,projects:[],color:"#FF6B6B",emoji:"🎯",tags:["에픽","기획"],createdAt:W().subtract(1,"week").toISOString(),updatedAt:W().toISOString()},{id:"epic-2",title:"🔧 시스템 개선하기",description:"전체적인 시스템 성능과 사용성을 개선하는 에픽입니다!",status:"planning",priority:"medium",startDate:W().add(1,"week").toISOString(),dueDate:W().add(3,"month").toISOString(),progress:10,projects:[],color:"#4ECDC4",emoji:"🔧",tags:["개선","시스템"],createdAt:W().subtract(3,"day").toISOString(),updatedAt:W().toISOString()}],ia=()=>[{id:"project-1",title:"📋 프로젝트 만들기 기능",description:"새로운 프로젝트를 생성하고 관리하는 기능을 구현해보세요!",status:"active",priority:"high",startDate:W().subtract(5,"day").toISOString(),dueDate:W().add(1,"month").toISOString(),progress:45,tasks:[],tags:["프로젝트","기능"],epicId:"epic-1",createdAt:W().subtract(5,"day").toISOString(),updatedAt:W().toISOString()},{id:"project-2",title:"⚡ 성능 최적화하기",description:"애플리케이션의 전반적인 성능을 개선하는 프로젝트입니다!",status:"active",priority:"high",startDate:W().subtract(3,"day").toISOString(),dueDate:W().add(6,"week").toISOString(),progress:25,tasks:[],tags:["성능","최적화"],epicId:"epic-2",createdAt:W().subtract(3,"day").toISOString(),updatedAt:W().toISOString()}],xp=k.createContext(void 0),BT=({children:n})=>{const[e,t]=k.useState([]),[r,s]=k.useState([]),[i,a]=k.useState([]),[c,u]=k.useState([]),[h,f]=k.useState([]),[m,y]=k.useState([]),E={todos:"todos",epics:"epics",projects:"projects"},P=async()=>{try{const j=Ue();if(j){const D=await In(j.uid,"epics");D.success&&D.data&&(console.log("🔥 TodoContext: Firebase 에픽 로드 성공:",D.data),y(D.data));const F=await In(j.uid,"projects");F.success&&F.data&&(console.log("🔥 TodoContext: Firebase 프로젝트 로드 성공:",F.data),u(F.data));const L=await In(j.uid,"projectTodos");L.success&&L.data&&(console.log("🔥 TodoContext: Firebase 할일 로드 성공:",L.data),f(L.data))}}catch(j){console.error("❌ TodoContext: Firebase 데이터 로드 실패:",j)}},x=()=>{const j=[];return Array.isArray(m)&&m.forEach(D=>{j.push({id:D.id||Ze(),title:D.title,description:D.description||"",status:D.status||"active",priority:D.priority||"medium",startDate:D.startDate,dueDate:D.dueDate,progress:D.progress||0,projects:D.projects||[],color:D.color||"#3b82f6",emoji:D.emoji,tags:D.tags||[],createdAt:D.createdAt||W().toISOString(),updatedAt:D.updatedAt||W().toISOString()})}),r.forEach(D=>{j.find(F=>F.title===D.title)||j.push(D)}),j},w=()=>{const j=[];return Array.isArray(c)&&c.forEach(D=>{j.push({id:D.id||Ze(),title:D.title,description:D.description||"",status:D.status||"active",priority:D.priority||"medium",startDate:D.startDate,dueDate:D.dueDate,progress:D.progress||0,tasks:D.tasks||[],tags:D.tags||[],createdAt:D.createdAt||W().toISOString(),updatedAt:D.updatedAt||W().toISOString()})}),i.forEach(D=>{j.find(F=>F.title===D.title)||j.push(D)}),j},M=()=>{const j=[];return Array.isArray(h)&&h.forEach(D=>{j.push({id:D.id||Ze(),title:D.title,description:D.description||"",completed:D.completed||!1,priority:D.priority||"medium",dueDate:D.dueDate,tags:D.tags||[],projectId:D.projectId,createdAt:D.createdAt||W().toISOString(),updatedAt:D.updatedAt||W().toISOString()})}),e.forEach(D=>{j.find(F=>F.title===D.title)||j.push(D)}),j},U=async()=>{try{const j=Ue();if(!j)return{success:!1,message:"로그인이 필요합니다"};console.log("🚀 로컬 데이터 → 파이어베이스 마이그레이션 시작");const D=JSON.parse(localStorage.getItem(E.epics)||"[]"),F=JSON.parse(localStorage.getItem(E.projects)||"[]"),L=JSON.parse(localStorage.getItem(E.todos)||"[]");await P();const V={epics:Array.isArray(m)&&m.length>0,projects:Array.isArray(c)&&c.length>0,todos:Array.isArray(h)&&h.length>0};if(V.epics||V.projects||V.todos){const st={epics:(m==null?void 0:m.length)||0,projects:(c==null?void 0:c.length)||0,todos:(h==null?void 0:h.length)||0},go=`⚠️ 주의: Firebase에 기존 데이터가 있습니다!

Firebase 기존 데이터:
- 에픽: ${st.epics}개
- 프로젝트: ${st.projects}개
- 할일: ${st.todos}개

로컬 데이터:
- 에픽: ${D.length}개
- 프로젝트: ${F.length}개
- 할일: ${L.length}개

계속하면 Firebase 데이터가 로컬 데이터로 덮어쓰여집니다.
정말 진행하시겠습니까?`;if(!confirm(go))return{success:!1,message:"❌ 사용자가 마이그레이션을 취소했습니다."};const Et=new Date().toISOString().replace(/[:.]/g,"-");console.log(`📦 Firebase 데이터 백업 생성 중... (${Et})`),V.epics&&await me(j.uid,`epics_backup_${Et}`,m),V.projects&&await me(j.uid,`projects_backup_${Et}`,c),V.todos&&await me(j.uid,`projectTodos_backup_${Et}`,h),console.log("✅ Firebase 데이터 백업 완료")}console.log("📊 마이그레이션할 데이터:",{epics:D.length,projects:F.length,todos:L.length});const ne={epics:{success:!1,count:0},projects:{success:!1,count:0},todos:{success:!1,count:0}};if(D.length>0){const st=await me(j.uid,"epics",D);ne.epics={success:st.success,count:D.length},console.log("✅ 에픽 마이그레이션:",ne.epics)}if(F.length>0){const st=await me(j.uid,"projects",F);ne.projects={success:st.success,count:F.length},console.log("✅ 프로젝트 마이그레이션:",ne.projects)}if(L.length>0){const st=await me(j.uid,"projectTodos",L);ne.todos={success:st.success,count:L.length},console.log("✅ 할일 마이그레이션:",ne.todos)}await P();const mo=ne.epics.count+ne.projects.count+ne.todos.count,dn=V.epics||V.projects||V.todos?" 기존 Firebase 데이터는 백업되었습니다.":"";return{success:!0,message:`🎉 마이그레이션 완료! 총 ${mo}개 항목이 파이어베이스로 이동되었습니다.${dn}`,details:ne}}catch(j){return console.error("❌ 마이그레이션 실패:",j),{success:!1,message:`마이그레이션 중 오류가 발생했습니다: ${j}`}}},z=async j=>{try{const D=Ue();if(!D)return{success:!1,message:"로그인이 필요합니다"};console.log(`🔄 Firebase 백업 데이터 복구 시작: ${j}`);const F={epics:{success:!1,count:0},projects:{success:!1,count:0},todos:{success:!1,count:0}};try{const V=await In(D.uid,`epics_backup_${j}`);if(V.success&&V.data){const ne=await me(D.uid,"epics",V.data);F.epics={success:ne.success,count:V.data.length}}}catch(V){console.log("에픽 백업 데이터 없음 또는 복구 실패:",V)}try{const V=await In(D.uid,`projects_backup_${j}`);if(V.success&&V.data){const ne=await me(D.uid,"projects",V.data);F.projects={success:ne.success,count:V.data.length}}}catch(V){console.log("프로젝트 백업 데이터 없음 또는 복구 실패:",V)}try{const V=await In(D.uid,`projectTodos_backup_${j}`);if(V.success&&V.data){const ne=await me(D.uid,"projectTodos",V.data);F.todos={success:ne.success,count:V.data.length}}}catch(V){console.log("할일 백업 데이터 없음 또는 복구 실패:",V)}await P();const L=F.epics.count+F.projects.count+F.todos.count;return L>0?{success:!0,message:`🔄 백업 복구 완료! 총 ${L}개 항목이 복구되었습니다.`,details:F}:{success:!1,message:`❌ 백업 데이터를 찾을 수 없습니다: ${j}`}}catch(D){return console.error("❌ 백업 복구 실패:",D),{success:!1,message:`백업 복구 중 오류가 발생했습니다: ${D}`}}},G=()=>{const j=W("2025-08-08");return W().isBefore(j)},ae=()=>{const j=JSON.parse(localStorage.getItem(E.epics)||"[]"),D=JSON.parse(localStorage.getItem(E.projects)||"[]"),F=JSON.parse(localStorage.getItem(E.todos)||"[]");return{hasData:j.length>0||D.length>0||F.length>0,epicsCount:j.length,projectsCount:D.length,todosCount:F.length}},ue=async()=>{try{if(!Ue())return{success:!1,message:"로그인이 필요합니다"};console.log("🔄 파이어베이스 → 로컬 동기화 시작"),await P();const D={epics:{success:!1,count:0},projects:{success:!1,count:0},todos:{success:!1,count:0}};if(Array.isArray(m)&&m.length>0){const L=m.map(V=>({id:V.id||Ze(),title:V.title,description:V.description||"",status:V.status||"active",priority:V.priority||"medium",startDate:V.startDate,dueDate:V.dueDate,progress:V.progress||0,projects:V.projects||[],color:V.color||"#3b82f6",emoji:V.emoji,tags:V.tags||[],createdAt:V.createdAt||W().toISOString(),updatedAt:V.updatedAt||W().toISOString()}));s(L),D.epics={success:!0,count:L.length},console.log("✅ 에픽 동기화:",D.epics)}if(Array.isArray(c)&&c.length>0){const L=c.map(V=>({id:V.id||Ze(),title:V.title,description:V.description||"",status:V.status||"active",priority:V.priority||"medium",startDate:V.startDate,dueDate:V.dueDate,progress:V.progress||0,tasks:V.tasks||[],tags:V.tags||[],createdAt:V.createdAt||W().toISOString(),updatedAt:V.updatedAt||W().toISOString()}));a(L),D.projects={success:!0,count:L.length},console.log("✅ 프로젝트 동기화:",D.projects)}if(Array.isArray(h)&&h.length>0){const L=h.map(V=>({id:V.id||Ze(),title:V.title,description:V.description||"",completed:V.completed||!1,priority:V.priority||"medium",dueDate:V.dueDate,tags:V.tags||[],projectId:V.projectId,createdAt:V.createdAt||W().toISOString(),updatedAt:V.updatedAt||W().toISOString()}));t(L),D.todos={success:!0,count:L.length},console.log("✅ 할일 동기화:",D.todos)}const F=D.epics.count+D.projects.count+D.todos.count;return{success:!0,message:F>0?`🔄 동기화 완료! 파이어베이스에서 총 ${F}개 항목을 가져왔습니다.`:"📭 파이어베이스에 동기화할 데이터가 없습니다.",details:D}}catch(j){return console.error("❌ 동기화 실패:",j),{success:!1,message:`동기화 중 오류가 발생했습니다: ${j}`}}};k.useEffect(()=>{try{const j=localStorage.getItem(E.todos),D=localStorage.getItem(E.epics),F=localStorage.getItem(E.projects);if(j){const L=JSON.parse(j);if(Array.isArray(L)&&L.length>0)t(L);else{const V=ra();t(V),localStorage.setItem(E.todos,JSON.stringify(V))}}else{const L=ra();t(L),localStorage.setItem(E.todos,JSON.stringify(L))}if(D){const L=JSON.parse(D);if(Array.isArray(L)&&L.length>0)s(L);else{const V=sa();s(V),localStorage.setItem(E.epics,JSON.stringify(V))}}else{const L=sa();s(L),localStorage.setItem(E.epics,JSON.stringify(L))}if(F){const L=JSON.parse(F);if(Array.isArray(L)&&L.length>0)a(L);else{const V=ia();a(V),localStorage.setItem(E.projects,JSON.stringify(V))}}else{const L=ia();a(L),localStorage.setItem(E.projects,JSON.stringify(L))}}catch(j){console.error("데이터 로드 실패:",j),t(ra()),s(sa()),a(ia())}},[]),k.useEffect(()=>{P()},[]),k.useEffect(()=>{localStorage.setItem(E.todos,JSON.stringify(e))},[e]),k.useEffect(()=>{localStorage.setItem(E.epics,JSON.stringify(r))},[r]),k.useEffect(()=>{localStorage.setItem(E.projects,JSON.stringify(i))},[i]);const S=async j=>{const D={...j,id:Ze(),createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},F=[...e,D];t(F);try{const L=Ue();L&&(await me(L.uid,"projectTodos",F),console.log("✅ Todo Firebase 저장 완료:",D.title))}catch(L){console.error("❌ Todo Firebase 저장 실패:",L)}},_=async j=>{const D=e.map(F=>F.id===j.id?{...j,updatedAt:new Date().toISOString()}:F);t(D);try{const F=Ue();F&&(await me(F.uid,"projectTodos",D),console.log("✅ Todo 업데이트 Firebase 저장 완료:",j.title))}catch(F){console.error("❌ Todo 업데이트 Firebase 저장 실패:",F)}},I=async j=>{const D=e.filter(F=>F.id!==j);t(D);try{const F=Ue();F&&(await me(F.uid,"projectTodos",D),console.log("✅ Todo 삭제 Firebase 저장 완료"))}catch(F){console.error("❌ Todo 삭제 Firebase 저장 실패:",F)}},T=async j=>{const D=e.map(F=>F.id===j?{...F,completed:!F.completed,completedAt:F.completed?void 0:new Date().toISOString(),updatedAt:new Date().toISOString()}:F);t(D);try{const F=Ue();F&&(await me(F.uid,"projectTodos",D),console.log("✅ Todo 완료 토글 Firebase 저장 완료"))}catch(F){console.error("❌ Todo 완료 토글 Firebase 저장 실패:",F)}},A=async j=>{const D={...j,id:Ze(),projects:[],progress:0,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},F=[...r,D];s(F);try{const L=Ue();L&&(await me(L.uid,"epics",F),console.log("✅ Epic Firebase 저장 완료:",D.title))}catch(L){console.error("❌ Epic Firebase 저장 실패:",L)}},b=async j=>{const D=r.map(F=>F.id===j.id?{...j,updatedAt:new Date().toISOString()}:F);s(D);try{const F=Ue();F&&(await me(F.uid,"epics",D),console.log("✅ Epic 업데이트 Firebase 저장 완료:",j.title))}catch(F){console.error("❌ Epic 업데이트 Firebase 저장 실패:",F)}},v=async j=>{const D=r.filter(V=>V.id!==j);s(D);const F=e.map(V=>V.epicId===j?{...V,epicId:void 0,updatedAt:new Date().toISOString()}:V);t(F);const L=i.map(V=>V.epicId===j?{...V,epicId:void 0,updatedAt:new Date().toISOString()}:V);a(L);try{const V=Ue();V&&(await Promise.all([me(V.uid,"epics",D),me(V.uid,"projectTodos",F),me(V.uid,"projects",L)]),console.log("✅ Epic 삭제 Firebase 저장 완료"))}catch(V){console.error("❌ Epic 삭제 Firebase 저장 실패:",V)}},re=async(j,D)=>{const F={...j,id:Ze(),tasks:[],epicId:D||j.epicId,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},L=[...i,F];if(a(L),F.epicId){const V=r.map(ne=>ne.id===F.epicId?{...ne,projects:[...ne.projects,F],updatedAt:new Date().toISOString()}:ne);s(V);try{const ne=Ue();ne&&(await Promise.all([me(ne.uid,"projects",L),me(ne.uid,"epics",V)]),console.log("✅ Project + Epic Firebase 저장 완료:",F.title))}catch(ne){console.error("❌ Project + Epic Firebase 저장 실패:",ne)}}else try{const V=Ue();V&&(await me(V.uid,"projects",L),console.log("✅ Project Firebase 저장 완료:",F.title))}catch(V){console.error("❌ Project Firebase 저장 실패:",V)}},J=async j=>{const D=i.map(L=>L.id===j.id?{...j,updatedAt:new Date().toISOString()}:L);a(D);const F=r.map(L=>({...L,projects:L.projects.map(V=>V.id===j.id?j:V),updatedAt:new Date().toISOString()}));s(F);try{const L=Ue();L&&(await Promise.all([me(L.uid,"projects",D),me(L.uid,"epics",F)]),console.log("✅ Project 업데이트 Firebase 저장 완료:",j.title))}catch(L){console.error("❌ Project 업데이트 Firebase 저장 실패:",L)}},ke=async j=>{const D=i.filter(V=>V.id!==j);a(D);const F=r.map(V=>({...V,projects:V.projects.filter(ne=>ne.id!==j),updatedAt:new Date().toISOString()}));s(F);const L=e.map(V=>V.projectId===j?{...V,projectId:void 0,updatedAt:new Date().toISOString()}:V);t(L);try{const V=Ue();V&&(await Promise.all([me(V.uid,"projects",D),me(V.uid,"epics",F),me(V.uid,"projectTodos",L)]),console.log("✅ Project 삭제 Firebase 저장 완료"))}catch(V){console.error("❌ Project 삭제 Firebase 저장 실패:",V)}},fe=j=>x().find(D=>D.id===j),rt=j=>w().find(D=>D.id===j),hn={todos:M(),epics:x(),projects:w(),addTodo:S,updateTodo:_,deleteTodo:I,toggleTodoComplete:T,addEpic:A,updateEpic:b,deleteEpic:v,addProject:re,updateProject:J,deleteProject:ke,getEpicById:fe,getProjectById:rt,getTodosByProjectId:j=>M().filter(D=>D.projectId===j),getTodosByEpicId:j=>M().filter(D=>D.epicId===j),getProjectsByEpicId:j=>w().filter(D=>D.epicId===j),refreshFirebaseData:P,syncFirebaseToLocal:ue,migrateLocalDataToFirebase:U,isMigrationButtonActive:G,checkLocalDataForMigration:ae,restoreFirebaseBackup:z};return p.jsx(xp.Provider,{value:hn,children:n})},kS=()=>{const n=k.useContext(xp);if(n===void 0)throw new Error("useTodo must be used within a TodoProvider");return n},$T=()=>{const n=localStorage.getItem("todos"),e=localStorage.getItem("epics"),t=localStorage.getItem("projects"),r={todos:n?JSON.parse(n):[],epics:e?JSON.parse(e):[],projects:t?JSON.parse(t):[],timestamp:new Date().toISOString()};return localStorage.setItem("data_backup",JSON.stringify(r)),console.log("데이터 백업 완료:",r),r},zT=()=>{const n=localStorage.getItem("data_backup");if(n){const e=JSON.parse(n);return localStorage.setItem("todos",JSON.stringify(e.todos)),localStorage.setItem("epics",JSON.stringify(e.epics)),localStorage.setItem("projects",JSON.stringify(e.projects)),console.log("데이터 복구 완료:",e),e}return null},Cp=()=>{const n=localStorage.getItem("todos"),e=localStorage.getItem("epics"),t=localStorage.getItem("projects");return{todos:n?JSON.parse(n):[],epics:e?JSON.parse(e):[],projects:t?JSON.parse(t):[]}},qT=()=>{localStorage.removeItem("todos"),localStorage.removeItem("epics"),localStorage.removeItem("projects"),console.log("모든 데이터 삭제 완료")},WT=()=>{const n={id:"basic-epic-1",title:"🎯 개인 프로젝트",description:"개인적인 목표와 프로젝트를 관리하는 에픽입니다",status:"active",priority:"high",startDate:W().toISOString(),dueDate:W().add(3,"month").toISOString(),progress:10,projects:[],color:"#FF6B6B",emoji:"🎯",tags:["개인","목표"],createdAt:W().toISOString(),updatedAt:W().toISOString()},e={id:"basic-project-1",title:"📋 일상 관리",description:"일상적인 할일들을 관리하는 프로젝트입니다",status:"active",priority:"medium",startDate:W().toISOString(),dueDate:W().add(1,"month").toISOString(),progress:0,tasks:[],tags:["일상","관리"],epicId:"basic-epic-1",createdAt:W().toISOString(),updatedAt:W().toISOString()},t={id:"basic-todo-1",title:"📝 할일 관리 시스템 설정하기",description:"개인 할일 관리 시스템을 제대로 설정해보세요",completed:!1,priority:"medium",dueDate:W().add(1,"week").toISOString(),tags:["설정","시작"],epicId:"basic-epic-1",projectId:"basic-project-1",createdAt:W().toISOString(),updatedAt:W().toISOString()};return{epics:[n],projects:[e],todos:[t]}},HT=()=>{const n=Cp(),e=n.todos.some(t=>t.title.includes("테스트")||t.title.includes("샘플"));if(n.todos.length===0||e){const t=WT();return localStorage.setItem("todos",JSON.stringify(t.todos)),localStorage.setItem("epics",JSON.stringify(t.epics)),localStorage.setItem("projects",JSON.stringify(t.projects)),console.log("기본 사용자 데이터로 복구 완료"),t}return n};typeof window<"u"&&(window.dataRecovery={backup:$T,restore:zT,current:Cp,clear:qT,recover:HT});const GT=k.lazy(()=>Te(()=>import("./Dashboard-e667933b.js").then(n=>n.D),["assets/Dashboard-e667933b.js","assets/mui-2bb62da7.js","assets/dayjs-9d6a636c.js"])),KT=k.lazy(()=>Te(()=>import("./ConditionTracker-ca4a4f8a.js"),["assets/ConditionTracker-ca4a4f8a.js","assets/mui-2bb62da7.js","assets/dayjs-9d6a636c.js"])),QT=k.lazy(()=>Te(()=>import("./ProjectManager-8fd050ad.js"),["assets/ProjectManager-8fd050ad.js","assets/mui-2bb62da7.js","assets/dayjs-9d6a636c.js"])),JT=k.lazy(()=>Te(()=>import("./TodoManager-dcb4920d.js"),["assets/TodoManager-dcb4920d.js","assets/mui-2bb62da7.js","assets/dayjs-9d6a636c.js"])),YT=k.lazy(()=>Te(()=>import("./Chat-aced7d81.js"),["assets/Chat-aced7d81.js","assets/mui-2bb62da7.js","assets/dayjs-9d6a636c.js","assets/presence-8e8f8271.js"])),XT=k.lazy(()=>Te(()=>import("./Analytics-aa7ca702.js"),["assets/Analytics-aa7ca702.js","assets/mui-2bb62da7.js","assets/dayjs-9d6a636c.js"])),ZT=k.lazy(()=>Te(()=>import("./Profile-824ac50f.js"),["assets/Profile-824ac50f.js","assets/mui-2bb62da7.js","assets/dayjs-9d6a636c.js"])),eS=k.lazy(()=>Te(()=>import("./Settings-970d8adc.js"),["assets/Settings-970d8adc.js","assets/mui-2bb62da7.js","assets/dayjs-9d6a636c.js"])),tS=k.lazy(()=>Te(()=>import("./AdminPanel-8274022f.js"),["assets/AdminPanel-8274022f.js","assets/mui-2bb62da7.js","assets/dayjs-9d6a636c.js","assets/presence-8e8f8271.js"])),nS=k.lazy(()=>Te(()=>import("./Pomodoro-825f67c3.js"),["assets/Pomodoro-825f67c3.js","assets/mui-2bb62da7.js","assets/dayjs-9d6a636c.js"])),rS=n=>{var m,y,E,P,x,w,M,U,z,G,ae,ue;const{type:e,mode:t}=n,r=zc(e),s=mT(e,t),i=t==="auto"?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":t,a=((y=(m=r.ui)==null?void 0:m.background)==null?void 0:y.primary)??s.background,c=((P=(E=r.ui)==null?void 0:E.background)==null?void 0:P.secondary)??s.paper,u=((w=(x=r.ui)==null?void 0:x.background)==null?void 0:w.pattern)??"",h=((U=(M=r.ui)==null?void 0:M.background)==null?void 0:U.gradient)??"",f=((G=(z=r.ui)==null?void 0:z.border)==null?void 0:G.color)??s.primary;return(ue=(ae=r.ui)==null?void 0:ae.border)==null||ue.shadow,Xm({palette:{mode:i,primary:{main:s.primary,light:s.primaryLight,dark:s.primaryDark},secondary:{main:s.secondary,light:s.secondaryLight,dark:s.secondaryDark},background:{default:s.background,paper:s.paper},info:{main:s.info},success:{main:s.success},warning:{main:s.warning},error:{main:s.error}},typography:{fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif"].join(","),h1:{fontWeight:700},h2:{fontWeight:600},h3:{fontWeight:600},button:{fontWeight:600},subtitle1:{fontWeight:600}},shape:{borderRadius:8},components:{MuiCssBaseline:{styleOverrides:{"html, body, #root":{height:"100%"},body:{backgroundColor:a,backgroundImage:u&&h?`${u}, ${h}`:u||h||void 0,backgroundAttachment:"fixed",backgroundSize:"cover"},"*":{scrollbarColor:`${Ge(s.primary,.5)} transparent`,scrollbarWidth:"thin"},"*::-webkit-scrollbar":{width:10,height:10},"*::-webkit-scrollbar-thumb":{backgroundColor:Ge(s.primary,.35),borderRadius:999,border:`2px solid ${Ge(s.background,.6)}`},"*::-webkit-scrollbar-track":{backgroundColor:Ge(s.background,.4)}}},MuiButton:{defaultProps:{disableElevation:!0},styleOverrides:{root:{textTransform:"none",borderRadius:8,fontWeight:600},contained:{boxShadow:"none"},sizeSmall:{borderRadius:6},sizeLarge:{borderRadius:10}}},MuiCard:{styleOverrides:{root:{borderRadius:8,boxShadow:i==="light"?"0 6px 18px rgba(0,0,0,0.08)":"0 6px 18px rgba(0,0,0,0.32)",border:`1px solid ${Ge(f,.15)}`}}},MuiPaper:{styleOverrides:{root:{borderRadius:8,backgroundImage:"none"},outlined:{borderColor:Ge(f,.2)}}},MuiTextField:{defaultProps:{variant:"outlined",size:"small"}},MuiInputBase:{styleOverrides:{root:{borderRadius:8,backgroundColor:i==="light"?Ge(c,.5):Ge("#000",.1)}}},MuiAppBar:{defaultProps:{color:"default",elevation:0},styleOverrides:{root:{backgroundColor:Ge(c,.9),backdropFilter:"saturate(180%) blur(8px)",borderBottom:`1px solid ${Ge(f,.18)}`}}},MuiToolbar:{styleOverrides:{regular:{minHeight:64}}},MuiDrawer:{styleOverrides:{paper:{borderRight:`1px solid ${Ge(f,.18)}`,backgroundColor:Ge(c,.92),backgroundImage:"none"}}},MuiListItemButton:{styleOverrides:{root:{borderRadius:8,margin:2,"&.Mui-selected":{backgroundColor:Ge(s.primary,.12),"&:hover":{backgroundColor:Ge(s.primary,.18)}}}}},MuiDialog:{styleOverrides:{paper:{borderRadius:12,border:`1px solid ${Ge(f,.12)}`}}},MuiTooltip:{defaultProps:{arrow:!0}},MuiChip:{styleOverrides:{root:{borderRadius:8}}},MuiIconButton:{styleOverrides:{root:{borderRadius:8}}},MuiTabs:{styleOverrides:{indicator:{height:3,borderRadius:3}}},MuiTab:{styleOverrides:{root:{textTransform:"none",fontWeight:600,minHeight:44}}},MuiLinearProgress:{styleOverrides:{root:{borderRadius:999,overflow:"hidden"}}},MuiCircularProgress:{defaultProps:{thickness:5}}}})};function sS(){const[n,e]=k.useState(null),[t,r]=k.useState(!0),[s,i]=k.useState(null),[a,c]=k.useState(null),[u,h]=k.useState({type:"penguin",mode:"light"}),[f,m]=k.useState({show:!1,message:""}),[y,E]=k.useState({isActive:!1,message:"",loading:!0}),P=M=>{const U={...u,...M};h(U),window.electronAPI?window.electronAPI.saveData("theme",U):localStorage.setItem("theme",JSON.stringify(U))};k.useEffect(()=>{(async()=>{try{if(window.electronAPI){const ae=await window.electronAPI.loadData("theme");if(ae.success&&ae.data){h(ae.data),console.log("Electron에서 테마 로드:",ae.data);return}}const G=localStorage.getItem("theme");if(G){const ae=JSON.parse(G);h(ae),console.log("localStorage에서 테마 로드:",ae)}else console.log("저장된 테마가 없어서 기본값 사용")}catch(G){console.error("테마 로드 실패:",G)}})();const U=window.matchMedia("(prefers-color-scheme: dark)"),z=async()=>{try{u.mode==="auto"&&h(G=>({...G}))}catch(G){console.error("시스템 테마 변경 감지 실패:",G)}};return U.addEventListener("change",z),()=>U.removeEventListener("change",z)},[u.mode]),k.useEffect(()=>{const M=async()=>{try{const z=await eT();E({isActive:z.isMaintenanceMode,message:z.message||"시스템 점검 중입니다.",loading:!1})}catch(z){console.error("점검 모드 확인 실패:",z),E({isActive:!1,message:"",loading:!1})}};M();const U=setInterval(M,3e4);return()=>clearInterval(U)},[]),k.useEffect(()=>{const M=K0(async U=>{try{if(e(U),i(null),U){const z=await Q0(U.email);if(c(z.status),z.status==="approved")try{const G=await UT(U.email);G.shouldShowNotification&&m({show:!0,message:G.message})}catch(G){console.error("마이그레이션 체크 실패:",G)}}else c(null)}catch(z){console.error("❌ 인증 상태 처리 중 에러:",z),i("인증 처리 중 문제가 발생했습니다. 페이지를 새로고침해주세요.")}finally{r(!1)}});return()=>{M()}},[]);const x=rS(u),w=zc(u.type);return s?p.jsxs(qn,{theme:x,children:[p.jsx(Wn,{}),p.jsxs(K,{sx:{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg, #f44336 0%, #e91e63 100%)",p:3},children:[p.jsx(H,{variant:"h4",color:"white",sx:{mb:2,textAlign:"center"},children:"⚠️ 오류가 발생했습니다"}),p.jsx(H,{variant:"body1",color:"white",sx:{mb:3,textAlign:"center",maxWidth:600},children:s}),p.jsx(ze,{variant:"contained",color:"secondary",onClick:()=>{i(null),window.location.reload()},sx:{minWidth:200},children:"🔄 페이지 새로고침"})]})]}):t||y.loading?p.jsxs(qn,{theme:x,children:[p.jsx(Wn,{}),p.jsxs(K,{sx:{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"},children:[p.jsx(kn,{size:60,sx:{mb:2}}),p.jsx(H,{variant:"h6",color:"white",children:y.loading?"점검 상태 확인 중...":w.concepts.loading})]})]}):y.isActive&&(!n||!Ri(n.email))?p.jsxs(qn,{theme:x,children:[p.jsx(Wn,{}),p.jsx(MT,{message:y.message})]}):n?a==="approved"?p.jsx(Jm,{dateAdapter:Ym,adapterLocale:"ko",children:p.jsxs(qn,{theme:x,children:[p.jsx(Wn,{}),p.jsx(BT,{children:p.jsx(TT,{children:p.jsxs(Kg,{future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:[p.jsx(K,{sx:{height:"100vh",display:"flex"},children:p.jsxs(ET,{user:n,themeConfig:w,children:[p.jsx(k.Suspense,{fallback:p.jsx(K,{sx:{p:4,display:"flex",alignItems:"center",justifyContent:"center"},children:p.jsx(kn,{})}),children:p.jsx(jT,{children:p.jsxs(Wg,{children:[p.jsx(ot,{path:"/",element:p.jsx(GT,{themeConfig:w})}),p.jsx(ot,{path:"/condition",element:p.jsx(KT,{themeConfig:w})}),p.jsx(ot,{path:"/analytics",element:p.jsx(XT,{themeConfig:w})}),p.jsx(ot,{path:"/projects",element:p.jsx(QT,{themeConfig:w})}),p.jsx(ot,{path:"/todos",element:p.jsx(JT,{})}),p.jsx(ot,{path:"/pomodoro",element:p.jsx(nS,{themeConfig:w})}),p.jsx(ot,{path:"/chat",element:p.jsx(YT,{})}),p.jsx(ot,{path:"/profile",element:p.jsx(ZT,{themeConfig:w})}),p.jsx(ot,{path:"/settings",element:p.jsx(eS,{onThemeChange:P,themeSettings:u})}),Ri(n.email)&&p.jsx(ot,{path:"/admin",element:p.jsx(tS,{themeConfig:w})})]})})}),p.jsx(bT,{}),p.jsx(OT,{})]})}),p.jsxs(xi,{open:f.show,onClose:()=>m({show:!1,message:""}),maxWidth:"sm",fullWidth:!0,children:[p.jsx(Ci,{children:"📦 프로젝트 정리 알림"}),p.jsxs(Pi,{children:[p.jsx(nr,{severity:"info",sx:{mb:2},children:p.jsx(H,{variant:"body2",sx:{whiteSpace:"pre-line"},children:f.message})}),p.jsx(H,{variant:"body2",color:"text.secondary",children:"프로젝트 관리 페이지에서 임시 보관함을 확인하고 새로운 에픽을 만들어보세요!"})]}),p.jsxs(ki,{children:[p.jsx(ze,{onClick:()=>m({show:!1,message:""}),children:"확인"}),p.jsx(ze,{variant:"contained",onClick:()=>{m({show:!1,message:""})},children:"프로젝트 관리로 이동"})]})]})]})})})]})}):p.jsxs(qn,{theme:x,children:[p.jsx(Wn,{}),p.jsx(iS,{user:n,status:a})]}):p.jsxs(qn,{theme:x,children:[p.jsx(Wn,{}),p.jsx(wT,{})]})}const iS=({user:n,status:e})=>{const t=()=>{var r,s,i,a;switch(e){case"pending":return p.jsxs(rr,{sx:{maxWidth:600,width:"100%",p:4,textAlign:"center",boxShadow:"0 8px 32px rgba(0,0,0,0.12)",borderRadius:3,background:"linear-gradient(135deg, rgba(255,193,7,0.1) 0%, rgba(255,152,0,0.1) 100%)",border:"1px solid rgba(255,193,7,0.2)"},children:[p.jsxs(K,{sx:{mb:3},children:[p.jsx(en,{src:n.photoURL||void 0,sx:{width:80,height:80,mx:"auto",mb:2,boxShadow:"0 4px 20px rgba(0,0,0,0.15)"},children:((r=n.displayName)==null?void 0:r[0])||((s=n.email)==null?void 0:s[0])}),p.jsx(H,{variant:"h4",gutterBottom:!0,sx:{fontWeight:"bold",color:"warning.main"},children:"⏳ 승인 대기 중"})]}),p.jsxs(H,{variant:"h6",sx:{mb:2,color:"text.primary"},children:["안녕하세요, ",p.jsx("strong",{children:n.displayName}),"님! 🐧"]}),p.jsxs(H,{variant:"body1",sx:{mb:3,lineHeight:1.8,color:"text.secondary"},children:["개인 비서 접근 권한 요청이 검토 중입니다.",p.jsx("br",{}),"관리자의 승인을 기다려주세요."]}),p.jsx(K,{sx:{p:2,bgcolor:"rgba(255,193,7,0.1)",borderRadius:2,border:"1px solid rgba(255,193,7,0.2)",mb:2},children:p.jsx(H,{variant:"body2",color:"warning.dark",sx:{fontWeight:"medium"},children:"💡 승인이 완료되면 자동으로 서비스를 이용하실 수 있습니다."})}),p.jsx(Bh,{sx:{mt:3,height:6,borderRadius:3,backgroundColor:"rgba(255,193,7,0.2)","& .MuiLinearProgress-bar":{backgroundColor:"warning.main"}}})]});case"rejected":return p.jsxs(rr,{sx:{maxWidth:600,width:"100%",p:4,textAlign:"center",boxShadow:"0 8px 32px rgba(0,0,0,0.12)",borderRadius:3,background:"linear-gradient(135deg, rgba(244,67,54,0.1) 0%, rgba(233,30,99,0.1) 100%)",border:"1px solid rgba(244,67,54,0.2)"},children:[p.jsxs(K,{sx:{mb:3},children:[p.jsx(en,{src:n.photoURL||void 0,sx:{width:80,height:80,mx:"auto",mb:2,boxShadow:"0 4px 20px rgba(0,0,0,0.15)"},children:((i=n.displayName)==null?void 0:i[0])||((a=n.email)==null?void 0:a[0])}),p.jsx(H,{variant:"h4",gutterBottom:!0,sx:{fontWeight:"bold",color:"error.main"},children:"❌ 접근 권한 거부됨"})]}),p.jsxs(H,{variant:"h6",sx:{mb:2,color:"text.primary"},children:["죄송합니다, ",p.jsx("strong",{children:n.displayName}),"님."]}),p.jsxs(H,{variant:"body1",sx:{mb:3,lineHeight:1.8,color:"text.secondary"},children:["개인 비서 접근 권한이 거부되었습니다.",p.jsx("br",{}),"자세한 사항은 관리자에게 문의해주세요."]}),p.jsx(K,{sx:{p:2,bgcolor:"rgba(244,67,54,0.1)",borderRadius:2,border:"1px solid rgba(244,67,54,0.2)"},children:p.jsx(H,{variant:"body2",color:"error.dark",sx:{fontWeight:"medium"},children:"📧 문의사항이 있으시면 관리자에게 연락해주세요."})})]});case"not_found":default:return p.jsx(oS,{user:n})}};return p.jsx(K,{sx:{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",p:2},children:p.jsx(K,{sx:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%",maxWidth:700},children:t()})})},oS=({user:n})=>{var u,h,f,m;const[e,t]=k.useState(""),[r,s]=k.useState(!1),[i,a]=k.useState(!1),c=async y=>{if(y.preventDefault(),!!n.email){s(!0);try{if((await Ip({email:n.email,displayName:n.displayName||"이름 없음",photoURL:n.photoURL||void 0,reason:e.trim()||void 0})).success)a(!0);else throw new Error("요청 저장 실패")}catch(E){console.error("접근 권한 요청 실패:",E),alert("요청 처리 중 오류가 발생했습니다. 다시 시도해주세요.")}finally{s(!1)}}};return i?p.jsxs(rr,{sx:{maxWidth:600,width:"100%",p:4,textAlign:"center",boxShadow:"0 8px 32px rgba(0,0,0,0.12)",borderRadius:3,background:"linear-gradient(135deg, rgba(76,175,80,0.1) 0%, rgba(139,195,74,0.1) 100%)",border:"1px solid rgba(76,175,80,0.2)"},children:[p.jsxs(K,{sx:{mb:3},children:[p.jsx(en,{src:n.photoURL||void 0,sx:{width:80,height:80,mx:"auto",mb:2,boxShadow:"0 4px 20px rgba(0,0,0,0.15)"},children:((u=n.displayName)==null?void 0:u[0])||((h=n.email)==null?void 0:h[0])}),p.jsx(H,{variant:"h4",gutterBottom:!0,sx:{fontWeight:"bold",color:"success.main"},children:"✅ 접근 권한 요청 완료!"})]}),p.jsxs(H,{variant:"h6",sx:{mb:2,color:"text.primary"},children:["안녕하세요, ",p.jsx("strong",{children:n.displayName}),"님! 🎉"]}),p.jsxs(H,{variant:"body1",sx:{mb:3,lineHeight:1.8,color:"text.secondary"},children:["개인 비서 접근 권한 요청이 성공적으로 전송되었습니다.",p.jsx("br",{}),"관리자의 승인을 기다려주세요."]}),p.jsx(K,{sx:{p:2,bgcolor:"rgba(76,175,80,0.1)",borderRadius:2,border:"1px solid rgba(76,175,80,0.2)"},children:p.jsx(H,{variant:"body2",color:"success.dark",sx:{fontWeight:"medium"},children:"🔄 승인이 완료되면 이 화면에서 자동으로 서비스로 이동됩니다."})})]}):p.jsxs(rr,{sx:{maxWidth:600,width:"100%",p:4,boxShadow:"0 8px 32px rgba(0,0,0,0.12)",borderRadius:3,background:"rgba(255,255,255,0.95)",backdropFilter:"blur(10px)"},children:[p.jsxs(K,{sx:{textAlign:"center",mb:4},children:[p.jsx(H,{variant:"h4",gutterBottom:!0,sx:{fontWeight:"bold",color:"primary.main"},children:"🤖 개인 비서 접근 권한 요청"}),p.jsxs(H,{variant:"body1",color:"textSecondary",sx:{lineHeight:1.6},children:["안녕하세요, ",p.jsx("strong",{children:n.displayName}),"님!",p.jsx("br",{}),"개인 비서를 이용하기 위해 접근 권한을 요청해주세요."]})]}),p.jsxs(K,{sx:{display:"flex",alignItems:"center",gap:2,mb:4,p:3,bgcolor:"rgba(25,118,210,0.05)",borderRadius:2,border:"1px solid rgba(25,118,210,0.1)"},children:[p.jsx(en,{src:n.photoURL||void 0,sx:{width:60,height:60},children:((f=n.displayName)==null?void 0:f[0])||((m=n.email)==null?void 0:m[0])}),p.jsxs(K,{sx:{flex:1},children:[p.jsx(H,{variant:"h6",sx:{fontWeight:"bold"},children:n.displayName}),p.jsx(H,{variant:"body2",color:"textSecondary",children:n.email})]})]}),p.jsxs("form",{onSubmit:c,children:[p.jsx(oi,{fullWidth:!0,multiline:!0,rows:4,label:"사용 목적 (선택사항)",placeholder:"개인 비서를 어떤 용도로 사용하고 싶으신지 간단히 설명해주세요...",value:e,onChange:y=>t(y.target.value),sx:{mb:4},variant:"outlined"}),p.jsx(K,{sx:{display:"flex",gap:2,justifyContent:"center"},children:p.jsx(ze,{type:"submit",variant:"contained",size:"large",disabled:r,startIcon:r?p.jsx(kn,{size:20,color:"inherit"}):p.jsx(La,{}),sx:{minWidth:200,py:1.5,borderRadius:2,fontWeight:"bold",boxShadow:"0 4px 15px rgba(25,118,210,0.3)","&:hover":{boxShadow:"0 6px 20px rgba(25,118,210,0.4)"}},children:r?"요청 중...":"접근 권한 요청하기"})})]})]})};aa.createRoot(document.getElementById("root")).render(p.jsx(Di.StrictMode,{children:p.jsx(sS,{})}));export{CT as $,Ks as A,bS as B,wS as C,SS as D,Nt as E,be as F,Zt as G,hS as H,Ff as I,zE as J,Dc as K,kc as L,Rt as M,hr as N,Bf as O,Ye as P,Pc as Q,RS as R,xS as S,gT as T,ST as U,Cp as V,$T as W,zT as X,HT as Y,qT as Z,Te as _,kS as a,bp as a0,PT as a1,kT as a2,PS as b,CS as c,yS as d,Y0 as e,gS as f,Ue as g,_S as h,dS as i,vS as j,pS as k,In as l,X as m,lt as n,K0 as o,zc as p,ES as q,mS as r,me as s,oT as t,Qh as u,eT as v,IS as w,TS as x,AS as y,fS as z};
