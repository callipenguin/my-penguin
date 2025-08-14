var rm=Object.defineProperty;var sm=(n,e,t)=>e in n?rm(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var ct=(n,e,t)=>(sm(n,typeof e!="symbol"?e+"":e,t),t);import{r as im,a as k,R as om,j as p,D as Ci,b as Pi,B as z,T as B,c as ki,A as Yn,G as Ul,C as kh,F as am,I as cm,S as lm,M as _n,d as ai,e as Di,f as Be,g as Sn,h as Na,i as um,k as hm,l as dm,Q as fm,m as pm,u as Dh,n as ta,o as ht,p as mm,L as gm,q as ym,s as _m,t as Ls,v as Fs,w as Yt,x as vm,y as Bl,z as Em,E as wm,H as Im,J as Tm,K as Am,N as bm,P as Sm,O as Dr,U as Vh,V as Rm,W as xm,X as $l,Y as js,Z as zl,_ as Nr,$ as Us,a0 as fn,a1 as Bs,a2 as Cm,a3 as Pm,a4 as km,a5 as ql,a6 as Xn,a7 as Dm,a8 as Vm,a9 as Gr,aa as Nh,ab as Nm,ac as Om,ad as Mm,ae as Lm,af as Oh,ag as Mh,ah as Fm,ai as jm,aj as Um,ak as Bm,al as $m,am as zm,an as qm,ao as Wm,ap as Hm,aq as Gm,ar as Km,as as jn,at as Un,au as Qm,av as Jm,aw as Se,ax as Ym}from"./mui-754dcb1a.js";import{d as ie}from"./dayjs-9d6a636c.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var na={},Wl=im;na.createRoot=Wl.createRoot,na.hydrateRoot=Wl.hydrateRoot;const Xm="modulepreload",Zm=function(n){return"/my-penguin/"+n},Hl={},we=function(e,t,r){if(!t||t.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(t.map(i=>{if(i=Zm(i),i in Hl)return;Hl[i]=!0;const a=i.endsWith(".css"),c=a?'[rel="stylesheet"]':"";if(!!r)for(let f=s.length-1;f>=0;f--){const m=s[f];if(m.href===i&&(!a||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${c}`))return;const h=document.createElement("link");if(h.rel=a?"stylesheet":Xm,a||(h.as="script",h.crossOrigin=""),h.href=i,document.head.appendChild(h),a)return new Promise((f,m)=>{h.addEventListener("load",f),h.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i})};/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Kr(){return Kr=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Kr.apply(this,arguments)}var zt;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(zt||(zt={}));const Gl="popstate";function eg(n){n===void 0&&(n={});function e(s,i){let{pathname:a="/",search:c="",hash:u=""}=Dn(s.location.hash.substr(1));return!a.startsWith("/")&&!a.startsWith(".")&&(a="/"+a),ra("",{pathname:a,search:c,hash:u},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(s,i){let a=s.document.querySelector("base"),c="";if(a&&a.getAttribute("href")){let u=s.location.href,h=u.indexOf("#");c=h===-1?u:u.slice(0,h)}return c+"#"+(typeof i=="string"?i:Lh(i))}function r(s,i){Oa(s.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return ng(e,t,r,n)}function Re(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Oa(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function tg(){return Math.random().toString(36).substr(2,8)}function Kl(n,e){return{usr:n.state,key:n.key,idx:e}}function ra(n,e,t,r){return t===void 0&&(t=null),Kr({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?Dn(e):e,{state:t,key:e&&e.key||r||tg()})}function Lh(n){let{pathname:e="/",search:t="",hash:r=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Dn(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let r=n.indexOf("?");r>=0&&(e.search=n.substr(r),n=n.substr(0,r)),n&&(e.pathname=n)}return e}function ng(n,e,t,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:i=!1}=r,a=s.history,c=zt.Pop,u=null,h=f();h==null&&(h=0,a.replaceState(Kr({},a.state,{idx:h}),""));function f(){return(a.state||{idx:null}).idx}function m(){c=zt.Pop;let A=f(),N=A==null?null:A-h;h=A,u&&u({action:c,location:x.location,delta:N})}function _(A,N){c=zt.Push;let M=ra(x.location,A,N);t&&t(M,A),h=f()+1;let j=Kl(M,h),$=x.createHref(M);try{a.pushState(j,"",$)}catch(re){if(re instanceof DOMException&&re.name==="DataCloneError")throw re;s.location.assign($)}i&&u&&u({action:c,location:x.location,delta:1})}function b(A,N){c=zt.Replace;let M=ra(x.location,A,N);t&&t(M,A),h=f();let j=Kl(M,h),$=x.createHref(M);a.replaceState(j,"",$),i&&u&&u({action:c,location:x.location,delta:0})}function P(A){let N=s.location.origin!=="null"?s.location.origin:s.location.href,M=typeof A=="string"?A:Lh(A);return M=M.replace(/ $/,"%20"),Re(N,"No window.location.(origin|href) available to create URL for href: "+M),new URL(M,N)}let x={get action(){return c},get location(){return n(s,a)},listen(A){if(u)throw new Error("A history only accepts one active listener");return s.addEventListener(Gl,m),u=A,()=>{s.removeEventListener(Gl,m),u=null}},createHref(A){return e(s,A)},createURL:P,encodeLocation(A){let N=P(A);return{pathname:N.pathname,search:N.search,hash:N.hash}},push:_,replace:b,go(A){return a.go(A)}};return x}var Ql;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(Ql||(Ql={}));function rg(n,e,t){return t===void 0&&(t="/"),sg(n,e,t,!1)}function sg(n,e,t,r){let s=typeof e=="string"?Dn(e):e,i=Uh(s.pathname||"/",t);if(i==null)return null;let a=Fh(n);ig(a);let c=null;for(let u=0;c==null&&u<a.length;++u){let h=gg(i);c=pg(a[u],h,r)}return c}function Fh(n,e,t,r){e===void 0&&(e=[]),t===void 0&&(t=[]),r===void 0&&(r="");let s=(i,a,c)=>{let u={relativePath:c===void 0?i.path||"":c,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};u.relativePath.startsWith("/")&&(Re(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let h=In([r,u.relativePath]),f=t.concat(u);i.children&&i.children.length>0&&(Re(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),Fh(i.children,e,f,h)),!(i.path==null&&!i.index)&&e.push({path:h,score:dg(h,i.index),routesMeta:f})};return n.forEach((i,a)=>{var c;if(i.path===""||!((c=i.path)!=null&&c.includes("?")))s(i,a);else for(let u of jh(i.path))s(i,a,u)}),e}function jh(n){let e=n.split("/");if(e.length===0)return[];let[t,...r]=e,s=t.endsWith("?"),i=t.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let a=jh(r.join("/")),c=[];return c.push(...a.map(u=>u===""?i:[i,u].join("/"))),s&&c.push(...a),c.map(u=>n.startsWith("/")&&u===""?"/":u)}function ig(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:fg(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const og=/^:[\w-]+$/,ag=3,cg=2,lg=1,ug=10,hg=-2,Jl=n=>n==="*";function dg(n,e){let t=n.split("/"),r=t.length;return t.some(Jl)&&(r+=hg),e&&(r+=cg),t.filter(s=>!Jl(s)).reduce((s,i)=>s+(og.test(i)?ag:i===""?lg:ug),r)}function fg(n,e){return n.length===e.length&&n.slice(0,-1).every((r,s)=>r===e[s])?n[n.length-1]-e[e.length-1]:0}function pg(n,e,t){t===void 0&&(t=!1);let{routesMeta:r}=n,s={},i="/",a=[];for(let c=0;c<r.length;++c){let u=r[c],h=c===r.length-1,f=i==="/"?e:e.slice(i.length)||"/",m=Yl({path:u.relativePath,caseSensitive:u.caseSensitive,end:h},f),_=u.route;if(!m&&h&&t&&!r[r.length-1].route.index&&(m=Yl({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},f)),!m)return null;Object.assign(s,m.params),a.push({params:s,pathname:In([i,m.pathname]),pathnameBase:Ig(In([i,m.pathnameBase])),route:_}),m.pathnameBase!=="/"&&(i=In([i,m.pathnameBase]))}return a}function Yl(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,r]=mg(n.path,n.caseSensitive,n.end),s=e.match(t);if(!s)return null;let i=s[0],a=i.replace(/(.)\/+$/,"$1"),c=s.slice(1);return{params:r.reduce((h,f,m)=>{let{paramName:_,isOptional:b}=f;if(_==="*"){let x=c[m]||"";a=i.slice(0,i.length-x.length).replace(/(.)\/+$/,"$1")}const P=c[m];return b&&!P?h[_]=void 0:h[_]=(P||"").replace(/%2F/g,"/"),h},{}),pathname:i,pathnameBase:a,pattern:n}}function mg(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),Oa(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let r=[],s="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,c,u)=>(r.push({paramName:c,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(r.push({paramName:"*"}),s+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?s+="\\/*$":n!==""&&n!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function gg(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Oa(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function Uh(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=n.charAt(t);return r&&r!=="/"?null:n.slice(t)||"/"}function yg(n,e){e===void 0&&(e="/");let{pathname:t,search:r="",hash:s=""}=typeof n=="string"?Dn(n):n;return{pathname:t?t.startsWith("/")?t:_g(t,e):e,search:Tg(r),hash:Ag(s)}}function _g(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(s=>{s===".."?t.length>1&&t.pop():s!=="."&&t.push(s)}),t.length>1?t.join("/"):"/"}function jo(n,e,t,r){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function vg(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Eg(n,e){let t=vg(n);return e?t.map((r,s)=>s===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function wg(n,e,t,r){r===void 0&&(r=!1);let s;typeof n=="string"?s=Dn(n):(s=Kr({},n),Re(!s.pathname||!s.pathname.includes("?"),jo("?","pathname","search",s)),Re(!s.pathname||!s.pathname.includes("#"),jo("#","pathname","hash",s)),Re(!s.search||!s.search.includes("#"),jo("#","search","hash",s)));let i=n===""||s.pathname==="",a=i?"/":s.pathname,c;if(a==null)c=t;else{let m=e.length-1;if(!r&&a.startsWith("..")){let _=a.split("/");for(;_[0]==="..";)_.shift(),m-=1;s.pathname=_.join("/")}c=m>=0?e[m]:"/"}let u=yg(s,c),h=a&&a!=="/"&&a.endsWith("/"),f=(i||a===".")&&t.endsWith("/");return!u.pathname.endsWith("/")&&(h||f)&&(u.pathname+="/"),u}const In=n=>n.join("/").replace(/\/\/+/g,"/"),Ig=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),Tg=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,Ag=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function bg(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const Bh=["post","put","patch","delete"];new Set(Bh);const Sg=["get",...Bh];new Set(Sg);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qr(){return Qr=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Qr.apply(this,arguments)}const Ma=k.createContext(null),Rg=k.createContext(null),Vi=k.createContext(null),Ni=k.createContext(null),cr=k.createContext({outlet:null,matches:[],isDataRoute:!1}),$h=k.createContext(null);function Oi(){return k.useContext(Ni)!=null}function Mi(){return Oi()||Re(!1),k.useContext(Ni).location}function zh(n){k.useContext(Vi).static||k.useLayoutEffect(n)}function qh(){let{isDataRoute:n}=k.useContext(cr);return n?Ug():xg()}function xg(){Oi()||Re(!1);let n=k.useContext(Ma),{basename:e,future:t,navigator:r}=k.useContext(Vi),{matches:s}=k.useContext(cr),{pathname:i}=Mi(),a=JSON.stringify(Eg(s,t.v7_relativeSplatPath)),c=k.useRef(!1);return zh(()=>{c.current=!0}),k.useCallback(function(h,f){if(f===void 0&&(f={}),!c.current)return;if(typeof h=="number"){r.go(h);return}let m=wg(h,JSON.parse(a),i,f.relative==="path");n==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:In([e,m.pathname])),(f.replace?r.replace:r.push)(m,f.state,f)},[e,r,a,i,n])}function Cg(n,e){return Pg(n,e)}function Pg(n,e,t,r){Oi()||Re(!1);let{navigator:s}=k.useContext(Vi),{matches:i}=k.useContext(cr),a=i[i.length-1],c=a?a.params:{};a&&a.pathname;let u=a?a.pathnameBase:"/";a&&a.route;let h=Mi(),f;if(e){var m;let A=typeof e=="string"?Dn(e):e;u==="/"||(m=A.pathname)!=null&&m.startsWith(u)||Re(!1),f=A}else f=h;let _=f.pathname||"/",b=_;if(u!=="/"){let A=u.replace(/^\//,"").split("/");b="/"+_.replace(/^\//,"").split("/").slice(A.length).join("/")}let P=rg(n,{pathname:b}),x=Og(P&&P.map(A=>Object.assign({},A,{params:Object.assign({},c,A.params),pathname:In([u,s.encodeLocation?s.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?u:In([u,s.encodeLocation?s.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),i,t,r);return e&&x?k.createElement(Ni.Provider,{value:{location:Qr({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:zt.Pop}},x):x}function kg(){let n=jg(),e=bg(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},e),t?k.createElement("pre",{style:s},t):null,i)}const Dg=k.createElement(kg,null);class Vg extends k.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?k.createElement(cr.Provider,{value:this.props.routeContext},k.createElement($h.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ng(n){let{routeContext:e,match:t,children:r}=n,s=k.useContext(Ma);return s&&s.static&&s.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=t.route.id),k.createElement(cr.Provider,{value:e},r)}function Og(n,e,t,r){var s;if(e===void 0&&(e=[]),t===void 0&&(t=null),r===void 0&&(r=null),n==null){var i;if(!t)return null;if(t.errors)n=t.matches;else if((i=r)!=null&&i.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let a=n,c=(s=t)==null?void 0:s.errors;if(c!=null){let f=a.findIndex(m=>m.route.id&&(c==null?void 0:c[m.route.id])!==void 0);f>=0||Re(!1),a=a.slice(0,Math.min(a.length,f+1))}let u=!1,h=-1;if(t&&r&&r.v7_partialHydration)for(let f=0;f<a.length;f++){let m=a[f];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(h=f),m.route.id){let{loaderData:_,errors:b}=t,P=m.route.loader&&_[m.route.id]===void 0&&(!b||b[m.route.id]===void 0);if(m.route.lazy||P){u=!0,h>=0?a=a.slice(0,h+1):a=[a[0]];break}}}return a.reduceRight((f,m,_)=>{let b,P=!1,x=null,A=null;t&&(b=c&&m.route.id?c[m.route.id]:void 0,x=m.route.errorElement||Dg,u&&(h<0&&_===0?(Bg("route-fallback",!1),P=!0,A=null):h===_&&(P=!0,A=m.route.hydrateFallbackElement||null)));let N=e.concat(a.slice(0,_+1)),M=()=>{let j;return b?j=x:P?j=A:m.route.Component?j=k.createElement(m.route.Component,null):m.route.element?j=m.route.element:j=f,k.createElement(Ng,{match:m,routeContext:{outlet:f,matches:N,isDataRoute:t!=null},children:j})};return t&&(m.route.ErrorBoundary||m.route.errorElement||_===0)?k.createElement(Vg,{location:t.location,revalidation:t.revalidation,component:x,error:b,children:M(),routeContext:{outlet:null,matches:N,isDataRoute:!0}}):M()},null)}var Wh=function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n}(Wh||{}),ci=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(ci||{});function Mg(n){let e=k.useContext(Ma);return e||Re(!1),e}function Lg(n){let e=k.useContext(Rg);return e||Re(!1),e}function Fg(n){let e=k.useContext(cr);return e||Re(!1),e}function Hh(n){let e=Fg(),t=e.matches[e.matches.length-1];return t.route.id||Re(!1),t.route.id}function jg(){var n;let e=k.useContext($h),t=Lg(ci.UseRouteError),r=Hh(ci.UseRouteError);return e!==void 0?e:(n=t.errors)==null?void 0:n[r]}function Ug(){let{router:n}=Mg(Wh.UseNavigateStable),e=Hh(ci.UseNavigateStable),t=k.useRef(!1);return zh(()=>{t.current=!0}),k.useCallback(function(s,i){i===void 0&&(i={}),t.current&&(typeof s=="number"?n.navigate(s):n.navigate(s,Qr({fromRouteId:e},i)))},[n,e])}const Xl={};function Bg(n,e,t){!e&&!Xl[n]&&(Xl[n]=!0)}function $g(n,e){n==null||n.v7_startTransition,(n==null?void 0:n.v7_relativeSplatPath)===void 0&&(!e||e.v7_relativeSplatPath),e&&(e.v7_fetcherPersist,e.v7_normalizeFormMethod,e.v7_partialHydration,e.v7_skipActionErrorRevalidation)}function rt(n){Re(!1)}function zg(n){let{basename:e="/",children:t=null,location:r,navigationType:s=zt.Pop,navigator:i,static:a=!1,future:c}=n;Oi()&&Re(!1);let u=e.replace(/^\/*/,"/"),h=k.useMemo(()=>({basename:u,navigator:i,static:a,future:Qr({v7_relativeSplatPath:!1},c)}),[u,c,i,a]);typeof r=="string"&&(r=Dn(r));let{pathname:f="/",search:m="",hash:_="",state:b=null,key:P="default"}=r,x=k.useMemo(()=>{let A=Uh(f,u);return A==null?null:{location:{pathname:A,search:m,hash:_,state:b,key:P},navigationType:s}},[u,f,m,_,b,P,s]);return x==null?null:k.createElement(Vi.Provider,{value:h},k.createElement(Ni.Provider,{children:t,value:x}))}function qg(n){let{children:e,location:t}=n;return Cg(sa(e),t)}new Promise(()=>{});function sa(n,e){e===void 0&&(e=[]);let t=[];return k.Children.forEach(n,(r,s)=>{if(!k.isValidElement(r))return;let i=[...e,s];if(r.type===k.Fragment){t.push.apply(t,sa(r.props.children,i));return}r.type!==rt&&Re(!1),!r.props.index||!r.props.children||Re(!1);let a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=sa(r.props.children,i)),t.push(a)}),t}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Wg="6";try{window.__reactRouterVersion=Wg}catch{}const Hg="startTransition",Zl=om[Hg];function Gg(n){let{basename:e,children:t,future:r,window:s}=n,i=k.useRef();i.current==null&&(i.current=eg({window:s,v5Compat:!0}));let a=i.current,[c,u]=k.useState({action:a.action,location:a.location}),{v7_startTransition:h}=r||{},f=k.useCallback(m=>{h&&Zl?Zl(()=>u(m)):u(m)},[u,h]);return k.useLayoutEffect(()=>a.listen(f),[a,f]),k.useEffect(()=>$g(r),[r]),k.createElement(zg,{basename:e,children:t,location:c.location,navigationType:c.action,navigator:a,future:r})}var eu;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(eu||(eu={}));var tu;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(tu||(tu={}));const Kg=()=>{};/**
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
 */const Gh=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Qg=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Kh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,u=s+2<n.length,h=u?n[s+2]:0,f=i>>2,m=(i&3)<<4|c>>4;let _=(c&15)<<2|h>>6,b=h&63;u||(b=64,a||(_=64)),r.push(t[f],t[m],t[_],t[b])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Gh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Qg(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const m=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||h==null||m==null)throw new Jg;const _=i<<2|c>>4;if(r.push(_),h!==64){const b=c<<4&240|h>>2;if(r.push(b),m!==64){const P=h<<6&192|m;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Jg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Yg=function(n){const e=Gh(n);return Kh.encodeByteArray(e,!0)},li=function(n){return Yg(n).replace(/\./g,"")},Qh=function(n){try{return Kh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const Zg=()=>Xg().__FIREBASE_DEFAULTS__,ey=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ty=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Qh(n[1]);return e&&JSON.parse(e)},Li=()=>{try{return Kg()||Zg()||ey()||ty()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Jh=n=>{var e,t;return(t=(e=Li())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},ny=n=>{const e=Jh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Yh=()=>{var n;return(n=Li())==null?void 0:n.config},Xh=n=>{var e;return(e=Li())==null?void 0:e[`_${n}`]};/**
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
 */function lr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Zh(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function sy(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n},c="";return[li(JSON.stringify(t)),li(JSON.stringify(a)),c].join(".")}const jr={};function iy(){const n={prod:[],emulator:[]};for(const e of Object.keys(jr))jr[e]?n.emulator.push(e):n.prod.push(e);return n}function oy(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let nu=!1;function ed(n,e){if(typeof window>"u"||typeof document>"u"||!lr(window.location.host)||jr[n]===e||jr[n]||nu)return;jr[n]=e;function t(_){return`__firebase__banner__${_}`}const r="__firebase__banner",i=iy().prod.length>0;function a(){const _=document.getElementById(r);_&&_.remove()}function c(_){_.style.display="flex",_.style.background="#7faaf0",_.style.position="fixed",_.style.bottom="5px",_.style.left="5px",_.style.padding=".5em",_.style.borderRadius="5px",_.style.alignItems="center"}function u(_,b){_.setAttribute("width","24"),_.setAttribute("id",b),_.setAttribute("height","24"),_.setAttribute("viewBox","0 0 24 24"),_.setAttribute("fill","none"),_.style.marginLeft="-6px"}function h(){const _=document.createElement("span");return _.style.cursor="pointer",_.style.marginLeft="16px",_.style.fontSize="24px",_.innerHTML=" &times;",_.onclick=()=>{nu=!0,a()},_}function f(_,b){_.setAttribute("id",b),_.innerText="Learn more",_.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",_.setAttribute("target","__blank"),_.style.paddingLeft="5px",_.style.textDecoration="underline"}function m(){const _=oy(r),b=t("text"),P=document.getElementById(b)||document.createElement("span"),x=t("learnmore"),A=document.getElementById(x)||document.createElement("a"),N=t("preprendIcon"),M=document.getElementById(N)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(_.created){const j=_.element;c(j),f(A,x);const $=h();u(M,N),j.append(M,P,A,$),document.body.appendChild(j)}i?(P.innerText="Preview backend disconnected.",M.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(M.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
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
 */function $e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ay(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($e())}function cy(){var e;const n=(e=Li())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ly(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function uy(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function hy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dy(){const n=$e();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function fy(){return!cy()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function py(){try{return typeof indexedDB=="object"}catch{return!1}}function my(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const gy="FirebaseError";class Nt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=gy,Object.setPrototypeOf(this,Nt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,cs.prototype.create)}}class cs{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?yy(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new Nt(s,c,r)}}function yy(n,e){return n.replace(_y,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const _y=/\{\$([^}]+)}/g;function vy(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Rn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(ru(i)&&ru(a)){if(!Rn(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function ru(n){return n!==null&&typeof n=="object"}/**
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
 */function ls(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ey(n,e){const t=new wy(n,e);return t.subscribe.bind(t)}class wy{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Iy(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Uo),s.error===void 0&&(s.error=Uo),s.complete===void 0&&(s.complete=Uo);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Iy(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Uo(){}/**
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
 */function Pe(n){return n&&n._delegate?n._delegate:n}class xn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const mn="[DEFAULT]";/**
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
 */class Ty{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new ry;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(by(e))try{this.getOrInitializeService({instanceIdentifier:mn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=mn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=mn){return this.instances.has(e)}getOptions(e=mn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ay(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=mn){return this.component?this.component.multipleInstances?e:mn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ay(n){return n===mn?void 0:n}function by(n){return n.instantiationMode==="EAGER"}/**
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
 */class Sy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ty(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ee;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ee||(ee={}));const Ry={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},xy=ee.INFO,Cy={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},Py=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Cy[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class La{constructor(e){this.name=e,this._logLevel=xy,this._logHandler=Py,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ry[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const ky=(n,e)=>e.some(t=>n instanceof t);let su,iu;function Dy(){return su||(su=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Vy(){return iu||(iu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const td=new WeakMap,ia=new WeakMap,nd=new WeakMap,Bo=new WeakMap,Fa=new WeakMap;function Ny(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Wt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&td.set(t,n)}).catch(()=>{}),Fa.set(e,n),e}function Oy(n){if(ia.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});ia.set(n,e)}let oa={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ia.get(n);if(e==="objectStoreNames")return n.objectStoreNames||nd.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Wt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function My(n){oa=n(oa)}function Ly(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call($o(this),e,...t);return nd.set(r,e.sort?e.sort():[e]),Wt(r)}:Vy().includes(n)?function(...e){return n.apply($o(this),e),Wt(td.get(this))}:function(...e){return Wt(n.apply($o(this),e))}}function Fy(n){return typeof n=="function"?Ly(n):(n instanceof IDBTransaction&&Oy(n),ky(n,Dy())?new Proxy(n,oa):n)}function Wt(n){if(n instanceof IDBRequest)return Ny(n);if(Bo.has(n))return Bo.get(n);const e=Fy(n);return e!==n&&(Bo.set(n,e),Fa.set(e,n)),e}const $o=n=>Fa.get(n);function jy(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=Wt(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Wt(a.result),u.oldVersion,u.newVersion,Wt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const Uy=["get","getKey","getAll","getAllKeys","count"],By=["put","add","delete","clear"],zo=new Map;function ou(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(zo.get(e))return zo.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=By.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Uy.includes(t)))return;const i=async function(a,...c){const u=this.transaction(a,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),s&&u.done]))[0]};return zo.set(e,i),i}My(n=>({...n,get:(e,t,r)=>ou(e,t)||n.get(e,t,r),has:(e,t)=>!!ou(e,t)||n.has(e,t)}));/**
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
 */class $y{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(zy(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function zy(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const aa="@firebase/app",au="0.14.0";/**
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
 */const xt=new La("@firebase/app"),qy="@firebase/app-compat",Wy="@firebase/analytics-compat",Hy="@firebase/analytics",Gy="@firebase/app-check-compat",Ky="@firebase/app-check",Qy="@firebase/auth",Jy="@firebase/auth-compat",Yy="@firebase/database",Xy="@firebase/data-connect",Zy="@firebase/database-compat",e_="@firebase/functions",t_="@firebase/functions-compat",n_="@firebase/installations",r_="@firebase/installations-compat",s_="@firebase/messaging",i_="@firebase/messaging-compat",o_="@firebase/performance",a_="@firebase/performance-compat",c_="@firebase/remote-config",l_="@firebase/remote-config-compat",u_="@firebase/storage",h_="@firebase/storage-compat",d_="@firebase/firestore",f_="@firebase/ai",p_="@firebase/firestore-compat",m_="firebase",g_="12.0.0";/**
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
 */const ca="[DEFAULT]",y_={[aa]:"fire-core",[qy]:"fire-core-compat",[Hy]:"fire-analytics",[Wy]:"fire-analytics-compat",[Ky]:"fire-app-check",[Gy]:"fire-app-check-compat",[Qy]:"fire-auth",[Jy]:"fire-auth-compat",[Yy]:"fire-rtdb",[Xy]:"fire-data-connect",[Zy]:"fire-rtdb-compat",[e_]:"fire-fn",[t_]:"fire-fn-compat",[n_]:"fire-iid",[r_]:"fire-iid-compat",[s_]:"fire-fcm",[i_]:"fire-fcm-compat",[o_]:"fire-perf",[a_]:"fire-perf-compat",[c_]:"fire-rc",[l_]:"fire-rc-compat",[u_]:"fire-gcs",[h_]:"fire-gcs-compat",[d_]:"fire-fst",[p_]:"fire-fst-compat",[f_]:"fire-vertex","fire-js":"fire-js",[m_]:"fire-js-all"};/**
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
 */const Jr=new Map,__=new Map,la=new Map;function cu(n,e){try{n.container.addComponent(e)}catch(t){xt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Zn(n){const e=n.name;if(la.has(e))return xt.debug(`There were multiple attempts to register component ${e}.`),!1;la.set(e,n);for(const t of Jr.values())cu(t,n);for(const t of __.values())cu(t,n);return!0}function ja(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function st(n){return n==null?!1:n.settings!==void 0}/**
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
 */const v_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ht=new cs("app","Firebase",v_);/**
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
 */class E_{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ht.create("app-deleted",{appName:this._name})}}/**
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
 */const ur=g_;function Qs(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:ca,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Ht.create("bad-app-name",{appName:String(s)});if(t||(t=Yh()),!t)throw Ht.create("no-options");const i=Jr.get(s);if(i){if(Rn(t,i.options)&&Rn(r,i.config))return i;throw Ht.create("duplicate-app",{appName:s})}const a=new Sy(s);for(const u of la.values())a.addComponent(u);const c=new E_(t,r,a);return Jr.set(s,c),c}function Ur(n=ca){const e=Jr.get(n);if(!e&&n===ca&&Yh())return Qs();if(!e)throw Ht.create("no-app",{appName:n});return e}function qo(){return Array.from(Jr.values())}function Gt(n,e,t){let r=y_[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xt.warn(a.join(" "));return}Zn(new xn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const w_="firebase-heartbeat-database",I_=1,Yr="firebase-heartbeat-store";let Wo=null;function rd(){return Wo||(Wo=jy(w_,I_,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Yr)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ht.create("idb-open",{originalErrorMessage:n.message})})),Wo}async function T_(n){try{const t=(await rd()).transaction(Yr),r=await t.objectStore(Yr).get(sd(n));return await t.done,r}catch(e){if(e instanceof Nt)xt.warn(e.message);else{const t=Ht.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xt.warn(t.message)}}}async function lu(n,e){try{const r=(await rd()).transaction(Yr,"readwrite");await r.objectStore(Yr).put(e,sd(n)),await r.done}catch(t){if(t instanceof Nt)xt.warn(t.message);else{const r=Ht.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});xt.warn(r.message)}}}function sd(n){return`${n.name}!${n.options.appId}`}/**
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
 */const A_=1024,b_=30;class S_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new x_(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=uu();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>b_){const a=C_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){xt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=uu(),{heartbeatsToSend:r,unsentEntries:s}=R_(this._heartbeatsCache.heartbeats),i=li(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return xt.warn(t),""}}}function uu(){return new Date().toISOString().substring(0,10)}function R_(n,e=A_){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),hu(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),hu(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class x_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return py()?my().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await T_(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return lu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return lu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function hu(n){return li(JSON.stringify({version:2,heartbeats:n})).length}function C_(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function P_(n){Zn(new xn("platform-logger",e=>new $y(e),"PRIVATE")),Zn(new xn("heartbeat",e=>new S_(e),"PRIVATE")),Gt(aa,au,n),Gt(aa,au,"esm2020"),Gt("fire-js","")}P_("");var k_="firebase",D_="12.0.0";/**
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
 */Gt(k_,D_,"app");var du=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Kt,id;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,g){function E(){}E.prototype=g.prototype,S.D=g.prototype,S.prototype=new E,S.prototype.constructor=S,S.C=function(T,I,w){for(var v=Array(arguments.length-2),W=2;W<arguments.length;W++)v[W-2]=arguments[W];return g.prototype[I].apply(T,v)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(S,g,E){E||(E=0);var T=Array(16);if(typeof g=="string")for(var I=0;16>I;++I)T[I]=g.charCodeAt(E++)|g.charCodeAt(E++)<<8|g.charCodeAt(E++)<<16|g.charCodeAt(E++)<<24;else for(I=0;16>I;++I)T[I]=g[E++]|g[E++]<<8|g[E++]<<16|g[E++]<<24;g=S.g[0],E=S.g[1],I=S.g[2];var w=S.g[3],v=g+(w^E&(I^w))+T[0]+3614090360&4294967295;g=E+(v<<7&4294967295|v>>>25),v=w+(I^g&(E^I))+T[1]+3905402710&4294967295,w=g+(v<<12&4294967295|v>>>20),v=I+(E^w&(g^E))+T[2]+606105819&4294967295,I=w+(v<<17&4294967295|v>>>15),v=E+(g^I&(w^g))+T[3]+3250441966&4294967295,E=I+(v<<22&4294967295|v>>>10),v=g+(w^E&(I^w))+T[4]+4118548399&4294967295,g=E+(v<<7&4294967295|v>>>25),v=w+(I^g&(E^I))+T[5]+1200080426&4294967295,w=g+(v<<12&4294967295|v>>>20),v=I+(E^w&(g^E))+T[6]+2821735955&4294967295,I=w+(v<<17&4294967295|v>>>15),v=E+(g^I&(w^g))+T[7]+4249261313&4294967295,E=I+(v<<22&4294967295|v>>>10),v=g+(w^E&(I^w))+T[8]+1770035416&4294967295,g=E+(v<<7&4294967295|v>>>25),v=w+(I^g&(E^I))+T[9]+2336552879&4294967295,w=g+(v<<12&4294967295|v>>>20),v=I+(E^w&(g^E))+T[10]+4294925233&4294967295,I=w+(v<<17&4294967295|v>>>15),v=E+(g^I&(w^g))+T[11]+2304563134&4294967295,E=I+(v<<22&4294967295|v>>>10),v=g+(w^E&(I^w))+T[12]+1804603682&4294967295,g=E+(v<<7&4294967295|v>>>25),v=w+(I^g&(E^I))+T[13]+4254626195&4294967295,w=g+(v<<12&4294967295|v>>>20),v=I+(E^w&(g^E))+T[14]+2792965006&4294967295,I=w+(v<<17&4294967295|v>>>15),v=E+(g^I&(w^g))+T[15]+1236535329&4294967295,E=I+(v<<22&4294967295|v>>>10),v=g+(I^w&(E^I))+T[1]+4129170786&4294967295,g=E+(v<<5&4294967295|v>>>27),v=w+(E^I&(g^E))+T[6]+3225465664&4294967295,w=g+(v<<9&4294967295|v>>>23),v=I+(g^E&(w^g))+T[11]+643717713&4294967295,I=w+(v<<14&4294967295|v>>>18),v=E+(w^g&(I^w))+T[0]+3921069994&4294967295,E=I+(v<<20&4294967295|v>>>12),v=g+(I^w&(E^I))+T[5]+3593408605&4294967295,g=E+(v<<5&4294967295|v>>>27),v=w+(E^I&(g^E))+T[10]+38016083&4294967295,w=g+(v<<9&4294967295|v>>>23),v=I+(g^E&(w^g))+T[15]+3634488961&4294967295,I=w+(v<<14&4294967295|v>>>18),v=E+(w^g&(I^w))+T[4]+3889429448&4294967295,E=I+(v<<20&4294967295|v>>>12),v=g+(I^w&(E^I))+T[9]+568446438&4294967295,g=E+(v<<5&4294967295|v>>>27),v=w+(E^I&(g^E))+T[14]+3275163606&4294967295,w=g+(v<<9&4294967295|v>>>23),v=I+(g^E&(w^g))+T[3]+4107603335&4294967295,I=w+(v<<14&4294967295|v>>>18),v=E+(w^g&(I^w))+T[8]+1163531501&4294967295,E=I+(v<<20&4294967295|v>>>12),v=g+(I^w&(E^I))+T[13]+2850285829&4294967295,g=E+(v<<5&4294967295|v>>>27),v=w+(E^I&(g^E))+T[2]+4243563512&4294967295,w=g+(v<<9&4294967295|v>>>23),v=I+(g^E&(w^g))+T[7]+1735328473&4294967295,I=w+(v<<14&4294967295|v>>>18),v=E+(w^g&(I^w))+T[12]+2368359562&4294967295,E=I+(v<<20&4294967295|v>>>12),v=g+(E^I^w)+T[5]+4294588738&4294967295,g=E+(v<<4&4294967295|v>>>28),v=w+(g^E^I)+T[8]+2272392833&4294967295,w=g+(v<<11&4294967295|v>>>21),v=I+(w^g^E)+T[11]+1839030562&4294967295,I=w+(v<<16&4294967295|v>>>16),v=E+(I^w^g)+T[14]+4259657740&4294967295,E=I+(v<<23&4294967295|v>>>9),v=g+(E^I^w)+T[1]+2763975236&4294967295,g=E+(v<<4&4294967295|v>>>28),v=w+(g^E^I)+T[4]+1272893353&4294967295,w=g+(v<<11&4294967295|v>>>21),v=I+(w^g^E)+T[7]+4139469664&4294967295,I=w+(v<<16&4294967295|v>>>16),v=E+(I^w^g)+T[10]+3200236656&4294967295,E=I+(v<<23&4294967295|v>>>9),v=g+(E^I^w)+T[13]+681279174&4294967295,g=E+(v<<4&4294967295|v>>>28),v=w+(g^E^I)+T[0]+3936430074&4294967295,w=g+(v<<11&4294967295|v>>>21),v=I+(w^g^E)+T[3]+3572445317&4294967295,I=w+(v<<16&4294967295|v>>>16),v=E+(I^w^g)+T[6]+76029189&4294967295,E=I+(v<<23&4294967295|v>>>9),v=g+(E^I^w)+T[9]+3654602809&4294967295,g=E+(v<<4&4294967295|v>>>28),v=w+(g^E^I)+T[12]+3873151461&4294967295,w=g+(v<<11&4294967295|v>>>21),v=I+(w^g^E)+T[15]+530742520&4294967295,I=w+(v<<16&4294967295|v>>>16),v=E+(I^w^g)+T[2]+3299628645&4294967295,E=I+(v<<23&4294967295|v>>>9),v=g+(I^(E|~w))+T[0]+4096336452&4294967295,g=E+(v<<6&4294967295|v>>>26),v=w+(E^(g|~I))+T[7]+1126891415&4294967295,w=g+(v<<10&4294967295|v>>>22),v=I+(g^(w|~E))+T[14]+2878612391&4294967295,I=w+(v<<15&4294967295|v>>>17),v=E+(w^(I|~g))+T[5]+4237533241&4294967295,E=I+(v<<21&4294967295|v>>>11),v=g+(I^(E|~w))+T[12]+1700485571&4294967295,g=E+(v<<6&4294967295|v>>>26),v=w+(E^(g|~I))+T[3]+2399980690&4294967295,w=g+(v<<10&4294967295|v>>>22),v=I+(g^(w|~E))+T[10]+4293915773&4294967295,I=w+(v<<15&4294967295|v>>>17),v=E+(w^(I|~g))+T[1]+2240044497&4294967295,E=I+(v<<21&4294967295|v>>>11),v=g+(I^(E|~w))+T[8]+1873313359&4294967295,g=E+(v<<6&4294967295|v>>>26),v=w+(E^(g|~I))+T[15]+4264355552&4294967295,w=g+(v<<10&4294967295|v>>>22),v=I+(g^(w|~E))+T[6]+2734768916&4294967295,I=w+(v<<15&4294967295|v>>>17),v=E+(w^(I|~g))+T[13]+1309151649&4294967295,E=I+(v<<21&4294967295|v>>>11),v=g+(I^(E|~w))+T[4]+4149444226&4294967295,g=E+(v<<6&4294967295|v>>>26),v=w+(E^(g|~I))+T[11]+3174756917&4294967295,w=g+(v<<10&4294967295|v>>>22),v=I+(g^(w|~E))+T[2]+718787259&4294967295,I=w+(v<<15&4294967295|v>>>17),v=E+(w^(I|~g))+T[9]+3951481745&4294967295,S.g[0]=S.g[0]+g&4294967295,S.g[1]=S.g[1]+(I+(v<<21&4294967295|v>>>11))&4294967295,S.g[2]=S.g[2]+I&4294967295,S.g[3]=S.g[3]+w&4294967295}r.prototype.u=function(S,g){g===void 0&&(g=S.length);for(var E=g-this.blockSize,T=this.B,I=this.h,w=0;w<g;){if(I==0)for(;w<=E;)s(this,S,w),w+=this.blockSize;if(typeof S=="string"){for(;w<g;)if(T[I++]=S.charCodeAt(w++),I==this.blockSize){s(this,T),I=0;break}}else for(;w<g;)if(T[I++]=S[w++],I==this.blockSize){s(this,T),I=0;break}}this.h=I,this.o+=g},r.prototype.v=function(){var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);S[0]=128;for(var g=1;g<S.length-8;++g)S[g]=0;var E=8*this.o;for(g=S.length-8;g<S.length;++g)S[g]=E&255,E/=256;for(this.u(S),S=Array(16),g=E=0;4>g;++g)for(var T=0;32>T;T+=8)S[E++]=this.g[g]>>>T&255;return S};function i(S,g){var E=c;return Object.prototype.hasOwnProperty.call(E,S)?E[S]:E[S]=g(S)}function a(S,g){this.h=g;for(var E=[],T=!0,I=S.length-1;0<=I;I--){var w=S[I]|0;T&&w==g||(E[I]=w,T=!1)}this.g=E}var c={};function u(S){return-128<=S&&128>S?i(S,function(g){return new a([g|0],0>g?-1:0)}):new a([S|0],0>S?-1:0)}function h(S){if(isNaN(S)||!isFinite(S))return m;if(0>S)return A(h(-S));for(var g=[],E=1,T=0;S>=E;T++)g[T]=S/E|0,E*=4294967296;return new a(g,0)}function f(S,g){if(S.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(S.charAt(0)=="-")return A(f(S.substring(1),g));if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=h(Math.pow(g,8)),T=m,I=0;I<S.length;I+=8){var w=Math.min(8,S.length-I),v=parseInt(S.substring(I,I+w),g);8>w?(w=h(Math.pow(g,w)),T=T.j(w).add(h(v))):(T=T.j(E),T=T.add(h(v)))}return T}var m=u(0),_=u(1),b=u(16777216);n=a.prototype,n.m=function(){if(x(this))return-A(this).m();for(var S=0,g=1,E=0;E<this.g.length;E++){var T=this.i(E);S+=(0<=T?T:4294967296+T)*g,g*=4294967296}return S},n.toString=function(S){if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(P(this))return"0";if(x(this))return"-"+A(this).toString(S);for(var g=h(Math.pow(S,6)),E=this,T="";;){var I=$(E,g).g;E=N(E,I.j(g));var w=((0<E.g.length?E.g[0]:E.h)>>>0).toString(S);if(E=I,P(E))return w+T;for(;6>w.length;)w="0"+w;T=w+T}},n.i=function(S){return 0>S?0:S<this.g.length?this.g[S]:this.h};function P(S){if(S.h!=0)return!1;for(var g=0;g<S.g.length;g++)if(S.g[g]!=0)return!1;return!0}function x(S){return S.h==-1}n.l=function(S){return S=N(this,S),x(S)?-1:P(S)?0:1};function A(S){for(var g=S.g.length,E=[],T=0;T<g;T++)E[T]=~S.g[T];return new a(E,~S.h).add(_)}n.abs=function(){return x(this)?A(this):this},n.add=function(S){for(var g=Math.max(this.g.length,S.g.length),E=[],T=0,I=0;I<=g;I++){var w=T+(this.i(I)&65535)+(S.i(I)&65535),v=(w>>>16)+(this.i(I)>>>16)+(S.i(I)>>>16);T=v>>>16,w&=65535,v&=65535,E[I]=v<<16|w}return new a(E,E[E.length-1]&-2147483648?-1:0)};function N(S,g){return S.add(A(g))}n.j=function(S){if(P(this)||P(S))return m;if(x(this))return x(S)?A(this).j(A(S)):A(A(this).j(S));if(x(S))return A(this.j(A(S)));if(0>this.l(b)&&0>S.l(b))return h(this.m()*S.m());for(var g=this.g.length+S.g.length,E=[],T=0;T<2*g;T++)E[T]=0;for(T=0;T<this.g.length;T++)for(var I=0;I<S.g.length;I++){var w=this.i(T)>>>16,v=this.i(T)&65535,W=S.i(I)>>>16,O=S.i(I)&65535;E[2*T+2*I]+=v*O,M(E,2*T+2*I),E[2*T+2*I+1]+=w*O,M(E,2*T+2*I+1),E[2*T+2*I+1]+=v*W,M(E,2*T+2*I+1),E[2*T+2*I+2]+=w*W,M(E,2*T+2*I+2)}for(T=0;T<g;T++)E[T]=E[2*T+1]<<16|E[2*T];for(T=g;T<2*g;T++)E[T]=0;return new a(E,0)};function M(S,g){for(;(S[g]&65535)!=S[g];)S[g+1]+=S[g]>>>16,S[g]&=65535,g++}function j(S,g){this.g=S,this.h=g}function $(S,g){if(P(g))throw Error("division by zero");if(P(S))return new j(m,m);if(x(S))return g=$(A(S),g),new j(A(g.g),A(g.h));if(x(g))return g=$(S,A(g)),new j(A(g.g),g.h);if(30<S.g.length){if(x(S)||x(g))throw Error("slowDivide_ only works with positive integers.");for(var E=_,T=g;0>=T.l(S);)E=re(E),T=re(T);var I=ae(E,1),w=ae(T,1);for(T=ae(T,2),E=ae(E,2);!P(T);){var v=w.add(T);0>=v.l(S)&&(I=I.add(E),w=v),T=ae(T,1),E=ae(E,1)}return g=N(S,I.j(g)),new j(I,g)}for(I=m;0<=S.l(g);){for(E=Math.max(1,Math.floor(S.m()/g.m())),T=Math.ceil(Math.log(E)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),w=h(E),v=w.j(g);x(v)||0<v.l(S);)E-=T,w=h(E),v=w.j(g);P(w)&&(w=_),I=I.add(w),S=N(S,v)}return new j(I,S)}n.A=function(S){return $(this,S).h},n.and=function(S){for(var g=Math.max(this.g.length,S.g.length),E=[],T=0;T<g;T++)E[T]=this.i(T)&S.i(T);return new a(E,this.h&S.h)},n.or=function(S){for(var g=Math.max(this.g.length,S.g.length),E=[],T=0;T<g;T++)E[T]=this.i(T)|S.i(T);return new a(E,this.h|S.h)},n.xor=function(S){for(var g=Math.max(this.g.length,S.g.length),E=[],T=0;T<g;T++)E[T]=this.i(T)^S.i(T);return new a(E,this.h^S.h)};function re(S){for(var g=S.g.length+1,E=[],T=0;T<g;T++)E[T]=S.i(T)<<1|S.i(T-1)>>>31;return new a(E,S.h)}function ae(S,g){var E=g>>5;g%=32;for(var T=S.g.length-E,I=[],w=0;w<T;w++)I[w]=0<g?S.i(w+E)>>>g|S.i(w+E+1)<<32-g:S.i(w+E);return new a(I,S.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,id=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,Kt=a}).apply(typeof du<"u"?du:typeof self<"u"?self:typeof window<"u"?window:{});var $s=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var od,Or,ad,Js,ua,cd,ld,ud;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,d){return o==Array.prototype||o==Object.prototype||(o[l]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof $s=="object"&&$s];for(var l=0;l<o.length;++l){var d=o[l];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(o,l){if(l)e:{var d=r;o=o.split(".");for(var y=0;y<o.length-1;y++){var R=o[y];if(!(R in d))break e;d=d[R]}o=o[o.length-1],y=d[o],l=l(y),l!=y&&l!=null&&e(d,o,{configurable:!0,writable:!0,value:l})}}function i(o,l){o instanceof String&&(o+="");var d=0,y=!1,R={next:function(){if(!y&&d<o.length){var C=d++;return{value:l(C,o[C]),done:!1}}return y=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}s("Array.prototype.values",function(o){return o||function(){return i(this,function(l,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function u(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function h(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function f(o,l,d){return o.call.apply(o.bind,arguments)}function m(o,l,d){if(!o)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,y),o.apply(l,R)}}return function(){return o.apply(l,arguments)}}function _(o,l,d){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,_.apply(null,arguments)}function b(o,l){var d=Array.prototype.slice.call(arguments,1);return function(){var y=d.slice();return y.push.apply(y,arguments),o.apply(this,y)}}function P(o,l){function d(){}d.prototype=l.prototype,o.aa=l.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(y,R,C){for(var L=Array(arguments.length-2),he=2;he<arguments.length;he++)L[he-2]=arguments[he];return l.prototype[R].apply(y,L)}}function x(o){const l=o.length;if(0<l){const d=Array(l);for(let y=0;y<l;y++)d[y]=o[y];return d}return[]}function A(o,l){for(let d=1;d<arguments.length;d++){const y=arguments[d];if(u(y)){const R=o.length||0,C=y.length||0;o.length=R+C;for(let L=0;L<C;L++)o[R+L]=y[L]}else o.push(y)}}class N{constructor(l,d){this.i=l,this.j=d,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function M(o){return/^[\s\xa0]*$/.test(o)}function j(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function $(o){return $[" "](o),o}$[" "]=function(){};var re=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function ae(o,l,d){for(const y in o)l.call(d,o[y],y,o)}function S(o,l){for(const d in o)l.call(void 0,o[d],d,o)}function g(o){const l={};for(const d in o)l[d]=o[d];return l}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,l){let d,y;for(let R=1;R<arguments.length;R++){y=arguments[R];for(d in y)o[d]=y[d];for(let C=0;C<E.length;C++)d=E[C],Object.prototype.hasOwnProperty.call(y,d)&&(o[d]=y[d])}}function I(o){var l=1;o=o.split(":");const d=[];for(;0<l&&o.length;)d.push(o.shift()),l--;return o.length&&d.push(o.join(":")),d}function w(o){c.setTimeout(()=>{throw o},0)}function v(){var o=et;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class W{constructor(){this.h=this.g=null}add(l,d){const y=O.get();y.set(l,d),this.h?this.h.next=y:this.g=y,this.h=y}}var O=new N(()=>new fe,o=>o.reset());class fe{constructor(){this.next=this.g=this.h=null}set(l,d){this.h=l,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let le,X=!1,et=new W,tt=()=>{const o=c.Promise.resolve(void 0);le=()=>{o.then(cn)}};var cn=()=>{for(var o;o=v();){try{o.h.call(o.g)}catch(d){w(d)}var l=O;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}X=!1};function be(){this.s=this.s,this.C=this.C}be.prototype.s=!1,be.prototype.ma=function(){this.s||(this.s=!0,this.N())},be.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Z(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}Z.prototype.h=function(){this.defaultPrevented=!0};var yr=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};c.addEventListener("test",d,l),c.removeEventListener("test",d,l)}catch{}return o}();function K(o,l){if(Z.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,y=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(re){e:{try{$(l.nodeName);var R=!0;break e}catch{}R=!1}R||(l=null)}}else d=="mouseover"?l=o.fromElement:d=="mouseout"&&(l=o.toElement);this.relatedTarget=l,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Sp[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&K.aa.h.call(this)}}P(K,Z);var Sp={2:"touch",3:"pen",4:"mouse"};K.prototype.h=function(){K.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var _r="closure_listenable_"+(1e6*Math.random()|0),Rp=0;function xp(o,l,d,y,R){this.listener=o,this.proxy=null,this.src=l,this.type=d,this.capture=!!y,this.ha=R,this.key=++Rp,this.da=this.fa=!1}function vs(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Es(o){this.src=o,this.g={},this.h=0}Es.prototype.add=function(o,l,d,y,R){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var L=go(o,l,y,R);return-1<L?(l=o[L],d||(l.fa=!1)):(l=new xp(l,this.src,C,!!y,R),l.fa=d,o.push(l)),l};function mo(o,l){var d=l.type;if(d in o.g){var y=o.g[d],R=Array.prototype.indexOf.call(y,l,void 0),C;(C=0<=R)&&Array.prototype.splice.call(y,R,1),C&&(vs(l),o.g[d].length==0&&(delete o.g[d],o.h--))}}function go(o,l,d,y){for(var R=0;R<o.length;++R){var C=o[R];if(!C.da&&C.listener==l&&C.capture==!!d&&C.ha==y)return R}return-1}var yo="closure_lm_"+(1e6*Math.random()|0),_o={};function Uc(o,l,d,y,R){if(y&&y.once)return $c(o,l,d,y,R);if(Array.isArray(l)){for(var C=0;C<l.length;C++)Uc(o,l[C],d,y,R);return null}return d=Io(d),o&&o[_r]?o.K(l,d,h(y)?!!y.capture:!!y,R):Bc(o,l,d,!1,y,R)}function Bc(o,l,d,y,R,C){if(!l)throw Error("Invalid event type");var L=h(R)?!!R.capture:!!R,he=Eo(o);if(he||(o[yo]=he=new Es(o)),d=he.add(l,d,y,L,C),d.proxy)return d;if(y=Cp(),d.proxy=y,y.src=o,y.listener=d,o.addEventListener)yr||(R=L),R===void 0&&(R=!1),o.addEventListener(l.toString(),y,R);else if(o.attachEvent)o.attachEvent(qc(l.toString()),y);else if(o.addListener&&o.removeListener)o.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Cp(){function o(d){return l.call(o.src,o.listener,d)}const l=Pp;return o}function $c(o,l,d,y,R){if(Array.isArray(l)){for(var C=0;C<l.length;C++)$c(o,l[C],d,y,R);return null}return d=Io(d),o&&o[_r]?o.L(l,d,h(y)?!!y.capture:!!y,R):Bc(o,l,d,!0,y,R)}function zc(o,l,d,y,R){if(Array.isArray(l))for(var C=0;C<l.length;C++)zc(o,l[C],d,y,R);else y=h(y)?!!y.capture:!!y,d=Io(d),o&&o[_r]?(o=o.i,l=String(l).toString(),l in o.g&&(C=o.g[l],d=go(C,d,y,R),-1<d&&(vs(C[d]),Array.prototype.splice.call(C,d,1),C.length==0&&(delete o.g[l],o.h--)))):o&&(o=Eo(o))&&(l=o.g[l.toString()],o=-1,l&&(o=go(l,d,y,R)),(d=-1<o?l[o]:null)&&vo(d))}function vo(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[_r])mo(l.i,o);else{var d=o.type,y=o.proxy;l.removeEventListener?l.removeEventListener(d,y,o.capture):l.detachEvent?l.detachEvent(qc(d),y):l.addListener&&l.removeListener&&l.removeListener(y),(d=Eo(l))?(mo(d,o),d.h==0&&(d.src=null,l[yo]=null)):vs(o)}}}function qc(o){return o in _o?_o[o]:_o[o]="on"+o}function Pp(o,l){if(o.da)o=!0;else{l=new K(l,this);var d=o.listener,y=o.ha||o.src;o.fa&&vo(o),o=d.call(y,l)}return o}function Eo(o){return o=o[yo],o instanceof Es?o:null}var wo="__closure_events_fn_"+(1e9*Math.random()>>>0);function Io(o){return typeof o=="function"?o:(o[wo]||(o[wo]=function(l){return o.handleEvent(l)}),o[wo])}function Oe(){be.call(this),this.i=new Es(this),this.M=this,this.F=null}P(Oe,be),Oe.prototype[_r]=!0,Oe.prototype.removeEventListener=function(o,l,d,y){zc(this,o,l,d,y)};function ze(o,l){var d,y=o.F;if(y)for(d=[];y;y=y.F)d.push(y);if(o=o.M,y=l.type||l,typeof l=="string")l=new Z(l,o);else if(l instanceof Z)l.target=l.target||o;else{var R=l;l=new Z(y,o),T(l,R)}if(R=!0,d)for(var C=d.length-1;0<=C;C--){var L=l.g=d[C];R=ws(L,y,!0,l)&&R}if(L=l.g=o,R=ws(L,y,!0,l)&&R,R=ws(L,y,!1,l)&&R,d)for(C=0;C<d.length;C++)L=l.g=d[C],R=ws(L,y,!1,l)&&R}Oe.prototype.N=function(){if(Oe.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var d=o.g[l],y=0;y<d.length;y++)vs(d[y]);delete o.g[l],o.h--}}this.F=null},Oe.prototype.K=function(o,l,d,y){return this.i.add(String(o),l,!1,d,y)},Oe.prototype.L=function(o,l,d,y){return this.i.add(String(o),l,!0,d,y)};function ws(o,l,d,y){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var R=!0,C=0;C<l.length;++C){var L=l[C];if(L&&!L.da&&L.capture==d){var he=L.listener,ke=L.ha||L.src;L.fa&&mo(o.i,L),R=he.call(ke,y)!==!1&&R}}return R&&!y.defaultPrevented}function Wc(o,l,d){if(typeof o=="function")d&&(o=_(o,d));else if(o&&typeof o.handleEvent=="function")o=_(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(o,l||0)}function Hc(o){o.g=Wc(()=>{o.g=null,o.i&&(o.i=!1,Hc(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class kp extends be{constructor(l,d){super(),this.m=l,this.l=d,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Hc(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vr(o){be.call(this),this.h=o,this.g={}}P(vr,be);var Gc=[];function Kc(o){ae(o.g,function(l,d){this.g.hasOwnProperty(d)&&vo(l)},o),o.g={}}vr.prototype.N=function(){vr.aa.N.call(this),Kc(this)},vr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var To=c.JSON.stringify,Dp=c.JSON.parse,Vp=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function Ao(){}Ao.prototype.h=null;function Qc(o){return o.h||(o.h=o.i())}function Jc(){}var Er={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function bo(){Z.call(this,"d")}P(bo,Z);function So(){Z.call(this,"c")}P(So,Z);var ln={},Yc=null;function Is(){return Yc=Yc||new Oe}ln.La="serverreachability";function Xc(o){Z.call(this,ln.La,o)}P(Xc,Z);function wr(o){const l=Is();ze(l,new Xc(l))}ln.STAT_EVENT="statevent";function Zc(o,l){Z.call(this,ln.STAT_EVENT,o),this.stat=l}P(Zc,Z);function qe(o){const l=Is();ze(l,new Zc(l,o))}ln.Ma="timingevent";function el(o,l){Z.call(this,ln.Ma,o),this.size=l}P(el,Z);function Ir(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},l)}function Tr(){this.g=!0}Tr.prototype.xa=function(){this.g=!1};function Np(o,l,d,y,R,C){o.info(function(){if(o.g)if(C)for(var L="",he=C.split("&"),ke=0;ke<he.length;ke++){var oe=he[ke].split("=");if(1<oe.length){var Me=oe[0];oe=oe[1];var Le=Me.split("_");L=2<=Le.length&&Le[1]=="type"?L+(Me+"="+oe+"&"):L+(Me+"=redacted&")}}else L=null;else L=C;return"XMLHTTP REQ ("+y+") [attempt "+R+"]: "+l+`
`+d+`
`+L})}function Op(o,l,d,y,R,C,L){o.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+R+"]: "+l+`
`+d+`
`+C+" "+L})}function On(o,l,d,y){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+Lp(o,d)+(y?" "+y:"")})}function Mp(o,l){o.info(function(){return"TIMEOUT: "+l})}Tr.prototype.info=function(){};function Lp(o,l){if(!o.g)return l;if(!l)return null;try{var d=JSON.parse(l);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var y=d[o];if(!(2>y.length)){var R=y[1];if(Array.isArray(R)&&!(1>R.length)){var C=R[0];if(C!="noop"&&C!="stop"&&C!="close")for(var L=1;L<R.length;L++)R[L]=""}}}}return To(d)}catch{return l}}var Ts={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},tl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ro;function As(){}P(As,Ao),As.prototype.g=function(){return new XMLHttpRequest},As.prototype.i=function(){return{}},Ro=new As;function Mt(o,l,d,y){this.j=o,this.i=l,this.l=d,this.R=y||1,this.U=new vr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new nl}function nl(){this.i=null,this.g="",this.h=!1}var rl={},xo={};function Co(o,l,d){o.L=1,o.v=xs(vt(l)),o.m=d,o.P=!0,sl(o,null)}function sl(o,l){o.F=Date.now(),bs(o),o.A=vt(o.v);var d=o.A,y=o.R;Array.isArray(y)||(y=[String(y)]),_l(d.i,"t",y),o.C=0,d=o.j.J,o.h=new nl,o.g=Ml(o.j,d?l:null,!o.m),0<o.O&&(o.M=new kp(_(o.Y,o,o.g),o.O)),l=o.U,d=o.g,y=o.ca;var R="readystatechange";Array.isArray(R)||(R&&(Gc[0]=R.toString()),R=Gc);for(var C=0;C<R.length;C++){var L=Uc(d,R[C],y||l.handleEvent,!1,l.h||l);if(!L)break;l.g[L.key]=L}l=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),wr(),Np(o.i,o.u,o.A,o.l,o.R,o.m)}Mt.prototype.ca=function(o){o=o.target;const l=this.M;l&&Et(o)==3?l.j():this.Y(o)},Mt.prototype.Y=function(o){try{if(o==this.g)e:{const Le=Et(this.g);var l=this.g.Ba();const Fn=this.g.Z();if(!(3>Le)&&(Le!=3||this.g&&(this.h.h||this.g.oa()||bl(this.g)))){this.J||Le!=4||l==7||(l==8||0>=Fn?wr(3):wr(2)),Po(this);var d=this.g.Z();this.X=d;t:if(il(this)){var y=bl(this.g);o="";var R=y.length,C=Et(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){un(this),Ar(this);var L="";break t}this.h.i=new c.TextDecoder}for(l=0;l<R;l++)this.h.h=!0,o+=this.h.i.decode(y[l],{stream:!(C&&l==R-1)});y.length=0,this.h.g+=o,this.C=0,L=this.h.g}else L=this.g.oa();if(this.o=d==200,Op(this.i,this.u,this.A,this.l,this.R,Le,d),this.o){if(this.T&&!this.K){t:{if(this.g){var he,ke=this.g;if((he=ke.g?ke.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!M(he)){var oe=he;break t}}oe=null}if(d=oe)On(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ko(this,d);else{this.o=!1,this.s=3,qe(12),un(this),Ar(this);break e}}if(this.P){d=!0;let nt;for(;!this.J&&this.C<L.length;)if(nt=Fp(this,L),nt==xo){Le==4&&(this.s=4,qe(14),d=!1),On(this.i,this.l,null,"[Incomplete Response]");break}else if(nt==rl){this.s=4,qe(15),On(this.i,this.l,L,"[Invalid Chunk]"),d=!1;break}else On(this.i,this.l,nt,null),ko(this,nt);if(il(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Le!=4||L.length!=0||this.h.h||(this.s=1,qe(16),d=!1),this.o=this.o&&d,!d)On(this.i,this.l,L,"[Invalid Chunked Response]"),un(this),Ar(this);else if(0<L.length&&!this.W){this.W=!0;var Me=this.j;Me.g==this&&Me.ba&&!Me.M&&(Me.j.info("Great, no buffering proxy detected. Bytes received: "+L.length),Lo(Me),Me.M=!0,qe(11))}}else On(this.i,this.l,L,null),ko(this,L);Le==4&&un(this),this.o&&!this.J&&(Le==4?Dl(this.j,this):(this.o=!1,bs(this)))}else tm(this.g),d==400&&0<L.indexOf("Unknown SID")?(this.s=3,qe(12)):(this.s=0,qe(13)),un(this),Ar(this)}}}catch{}finally{}};function il(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Fp(o,l){var d=o.C,y=l.indexOf(`
`,d);return y==-1?xo:(d=Number(l.substring(d,y)),isNaN(d)?rl:(y+=1,y+d>l.length?xo:(l=l.slice(y,y+d),o.C=y+d,l)))}Mt.prototype.cancel=function(){this.J=!0,un(this)};function bs(o){o.S=Date.now()+o.I,ol(o,o.I)}function ol(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Ir(_(o.ba,o),l)}function Po(o){o.B&&(c.clearTimeout(o.B),o.B=null)}Mt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Mp(this.i,this.A),this.L!=2&&(wr(),qe(17)),un(this),this.s=2,Ar(this)):ol(this,this.S-o)};function Ar(o){o.j.G==0||o.J||Dl(o.j,o)}function un(o){Po(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,Kc(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function ko(o,l){try{var d=o.j;if(d.G!=0&&(d.g==o||Do(d.h,o))){if(!o.K&&Do(d.h,o)&&d.G==3){try{var y=d.Da.g.parse(l)}catch{y=null}if(Array.isArray(y)&&y.length==3){var R=y;if(R[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Ns(d),Ds(d);else break e;Mo(d),qe(18)}}else d.za=R[1],0<d.za-d.T&&37500>R[2]&&d.F&&d.v==0&&!d.C&&(d.C=Ir(_(d.Za,d),6e3));if(1>=ll(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else dn(d,11)}else if((o.K||d.g==o)&&Ns(d),!M(l))for(R=d.Da.g.parse(l),l=0;l<R.length;l++){let oe=R[l];if(d.T=oe[0],oe=oe[1],d.G==2)if(oe[0]=="c"){d.K=oe[1],d.ia=oe[2];const Me=oe[3];Me!=null&&(d.la=Me,d.j.info("VER="+d.la));const Le=oe[4];Le!=null&&(d.Aa=Le,d.j.info("SVER="+d.Aa));const Fn=oe[5];Fn!=null&&typeof Fn=="number"&&0<Fn&&(y=1.5*Fn,d.L=y,d.j.info("backChannelRequestTimeoutMs_="+y)),y=d;const nt=o.g;if(nt){const Ms=nt.g?nt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ms){var C=y.h;C.g||Ms.indexOf("spdy")==-1&&Ms.indexOf("quic")==-1&&Ms.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Vo(C,C.h),C.h=null))}if(y.D){const Fo=nt.g?nt.g.getResponseHeader("X-HTTP-Session-Id"):null;Fo&&(y.ya=Fo,pe(y.I,y.D,Fo))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),y=d;var L=o;if(y.qa=Ol(y,y.J?y.ia:null,y.W),L.K){ul(y.h,L);var he=L,ke=y.L;ke&&(he.I=ke),he.B&&(Po(he),bs(he)),y.g=L}else Pl(y);0<d.i.length&&Vs(d)}else oe[0]!="stop"&&oe[0]!="close"||dn(d,7);else d.G==3&&(oe[0]=="stop"||oe[0]=="close"?oe[0]=="stop"?dn(d,7):Oo(d):oe[0]!="noop"&&d.l&&d.l.ta(oe),d.v=0)}}wr(4)}catch{}}var jp=class{constructor(o,l){this.g=o,this.map=l}};function al(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function cl(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function ll(o){return o.h?1:o.g?o.g.size:0}function Do(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function Vo(o,l){o.g?o.g.add(l):o.h=l}function ul(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}al.prototype.cancel=function(){if(this.i=hl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function hl(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const d of o.g.values())l=l.concat(d.D);return l}return x(o.i)}function Up(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var l=[],d=o.length,y=0;y<d;y++)l.push(o[y]);return l}l=[],d=0;for(y in o)l[d++]=o[y];return l}function Bp(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var l=[];o=o.length;for(var d=0;d<o;d++)l.push(d);return l}l=[],d=0;for(const y in o)l[d++]=y;return l}}}function dl(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var d=Bp(o),y=Up(o),R=y.length,C=0;C<R;C++)l.call(void 0,y[C],d&&d[C],o)}var fl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $p(o,l){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var y=o[d].indexOf("="),R=null;if(0<=y){var C=o[d].substring(0,y);R=o[d].substring(y+1)}else C=o[d];l(C,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function hn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof hn){this.h=o.h,Ss(this,o.j),this.o=o.o,this.g=o.g,Rs(this,o.s),this.l=o.l;var l=o.i,d=new Rr;d.i=l.i,l.g&&(d.g=new Map(l.g),d.h=l.h),pl(this,d),this.m=o.m}else o&&(l=String(o).match(fl))?(this.h=!1,Ss(this,l[1]||"",!0),this.o=br(l[2]||""),this.g=br(l[3]||"",!0),Rs(this,l[4]),this.l=br(l[5]||"",!0),pl(this,l[6]||"",!0),this.m=br(l[7]||"")):(this.h=!1,this.i=new Rr(null,this.h))}hn.prototype.toString=function(){var o=[],l=this.j;l&&o.push(Sr(l,ml,!0),":");var d=this.g;return(d||l=="file")&&(o.push("//"),(l=this.o)&&o.push(Sr(l,ml,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Sr(d,d.charAt(0)=="/"?Wp:qp,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Sr(d,Gp)),o.join("")};function vt(o){return new hn(o)}function Ss(o,l,d){o.j=d?br(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function Rs(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function pl(o,l,d){l instanceof Rr?(o.i=l,Kp(o.i,o.h)):(d||(l=Sr(l,Hp)),o.i=new Rr(l,o.h))}function pe(o,l,d){o.i.set(l,d)}function xs(o){return pe(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function br(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Sr(o,l,d){return typeof o=="string"?(o=encodeURI(o).replace(l,zp),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function zp(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var ml=/[#\/\?@]/g,qp=/[#\?:]/g,Wp=/[#\?]/g,Hp=/[#\?@]/g,Gp=/#/g;function Rr(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function Lt(o){o.g||(o.g=new Map,o.h=0,o.i&&$p(o.i,function(l,d){o.add(decodeURIComponent(l.replace(/\+/g," ")),d)}))}n=Rr.prototype,n.add=function(o,l){Lt(this),this.i=null,o=Mn(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(l),this.h+=1,this};function gl(o,l){Lt(o),l=Mn(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function yl(o,l){return Lt(o),l=Mn(o,l),o.g.has(l)}n.forEach=function(o,l){Lt(this),this.g.forEach(function(d,y){d.forEach(function(R){o.call(l,R,y,this)},this)},this)},n.na=function(){Lt(this);const o=Array.from(this.g.values()),l=Array.from(this.g.keys()),d=[];for(let y=0;y<l.length;y++){const R=o[y];for(let C=0;C<R.length;C++)d.push(l[y])}return d},n.V=function(o){Lt(this);let l=[];if(typeof o=="string")yl(this,o)&&(l=l.concat(this.g.get(Mn(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)l=l.concat(o[d])}return l},n.set=function(o,l){return Lt(this),this.i=null,o=Mn(this,o),yl(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function _l(o,l,d){gl(o,l),0<d.length&&(o.i=null,o.g.set(Mn(o,l),x(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(var d=0;d<l.length;d++){var y=l[d];const C=encodeURIComponent(String(y)),L=this.V(y);for(y=0;y<L.length;y++){var R=C;L[y]!==""&&(R+="="+encodeURIComponent(String(L[y]))),o.push(R)}}return this.i=o.join("&")};function Mn(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function Kp(o,l){l&&!o.j&&(Lt(o),o.i=null,o.g.forEach(function(d,y){var R=y.toLowerCase();y!=R&&(gl(this,y),_l(this,R,d))},o)),o.j=l}function Qp(o,l){const d=new Tr;if(c.Image){const y=new Image;y.onload=b(Ft,d,"TestLoadImage: loaded",!0,l,y),y.onerror=b(Ft,d,"TestLoadImage: error",!1,l,y),y.onabort=b(Ft,d,"TestLoadImage: abort",!1,l,y),y.ontimeout=b(Ft,d,"TestLoadImage: timeout",!1,l,y),c.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=o}else l(!1)}function Jp(o,l){const d=new Tr,y=new AbortController,R=setTimeout(()=>{y.abort(),Ft(d,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:y.signal}).then(C=>{clearTimeout(R),C.ok?Ft(d,"TestPingServer: ok",!0,l):Ft(d,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(R),Ft(d,"TestPingServer: error",!1,l)})}function Ft(o,l,d,y,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),y(d)}catch{}}function Yp(){this.g=new Vp}function Xp(o,l,d){const y=d||"";try{dl(o,function(R,C){let L=R;h(R)&&(L=To(R)),l.push(y+C+"="+encodeURIComponent(L))})}catch(R){throw l.push(y+"type="+encodeURIComponent("_badmap")),R}}function Cs(o){this.l=o.Ub||null,this.j=o.eb||!1}P(Cs,Ao),Cs.prototype.g=function(){return new Ps(this.l,this.j)},Cs.prototype.i=function(o){return function(){return o}}({});function Ps(o,l){Oe.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Ps,Oe),n=Ps.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,Cr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xr(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Cr(this)),this.g&&(this.readyState=3,Cr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;vl(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function vl(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?xr(this):Cr(this),this.readyState==3&&vl(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,xr(this))},n.Qa=function(o){this.g&&(this.response=o,xr(this))},n.ga=function(){this.g&&xr(this)};function xr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Cr(o)}n.setRequestHeader=function(o,l){this.u.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var d=l.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=l.next();return o.join(`\r
`)};function Cr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Ps.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function El(o){let l="";return ae(o,function(d,y){l+=y,l+=":",l+=d,l+=`\r
`}),l}function No(o,l,d){e:{for(y in d){var y=!1;break e}y=!0}y||(d=El(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):pe(o,l,d))}function ge(o){Oe.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(ge,Oe);var Zp=/^https?$/i,em=["POST","PUT"];n=ge.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,l,d,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ro.g(),this.v=this.o?Qc(this.o):Qc(Ro),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(C){wl(this,C);return}if(o=d||"",d=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var R in y)d.set(R,y[R]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const C of y.keys())d.set(C,y.get(C));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(d.keys()).find(C=>C.toLowerCase()=="content-type"),R=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(em,l,void 0))||y||R||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,L]of d)this.g.setRequestHeader(C,L);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Al(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){wl(this,C)}};function wl(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,Il(o),ks(o)}function Il(o){o.A||(o.A=!0,ze(o,"complete"),ze(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,ze(this,"complete"),ze(this,"abort"),ks(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ks(this,!0)),ge.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Tl(this):this.bb())},n.bb=function(){Tl(this)};function Tl(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Et(o)!=4||o.Z()!=2)){if(o.u&&Et(o)==4)Wc(o.Ea,0,o);else if(ze(o,"readystatechange"),Et(o)==4){o.h=!1;try{const L=o.Z();e:switch(L){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var d;if(!(d=l)){var y;if(y=L===0){var R=String(o.D).match(fl)[1]||null;!R&&c.self&&c.self.location&&(R=c.self.location.protocol.slice(0,-1)),y=!Zp.test(R?R.toLowerCase():"")}d=y}if(d)ze(o,"complete"),ze(o,"success");else{o.m=6;try{var C=2<Et(o)?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.Z()+"]",Il(o)}}finally{ks(o)}}}}function ks(o,l){if(o.g){Al(o);const d=o.g,y=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||ze(o,"ready");try{d.onreadystatechange=y}catch{}}}function Al(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Et(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Et(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),Dp(l)}};function bl(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function tm(o){const l={};o=(o.g&&2<=Et(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<o.length;y++){if(M(o[y]))continue;var d=I(o[y]);const R=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const C=l[R]||[];l[R]=C,C.push(d)}S(l,function(y){return y.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Pr(o,l,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||l}function Sl(o){this.Aa=0,this.i=[],this.j=new Tr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Pr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Pr("baseRetryDelayMs",5e3,o),this.cb=Pr("retryDelaySeedMs",1e4,o),this.Wa=Pr("forwardChannelMaxRetries",2,o),this.wa=Pr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new al(o&&o.concurrentRequestLimit),this.Da=new Yp,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Sl.prototype,n.la=8,n.G=1,n.connect=function(o,l,d,y){qe(0),this.W=o,this.H=l||{},d&&y!==void 0&&(this.H.OSID=d,this.H.OAID=y),this.F=this.X,this.I=Ol(this,null,this.W),Vs(this)};function Oo(o){if(Rl(o),o.G==3){var l=o.U++,d=vt(o.I);if(pe(d,"SID",o.K),pe(d,"RID",l),pe(d,"TYPE","terminate"),kr(o,d),l=new Mt(o,o.j,l),l.L=2,l.v=xs(vt(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=l.v,d=!0),d||(l.g=Ml(l.j,null),l.g.ea(l.v)),l.F=Date.now(),bs(l)}Nl(o)}function Ds(o){o.g&&(Lo(o),o.g.cancel(),o.g=null)}function Rl(o){Ds(o),o.u&&(c.clearTimeout(o.u),o.u=null),Ns(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function Vs(o){if(!cl(o.h)&&!o.s){o.s=!0;var l=o.Ga;le||tt(),X||(le(),X=!0),et.add(l,o),o.B=0}}function nm(o,l){return ll(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Ir(_(o.Ga,o,l),Vl(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const R=new Mt(this,this.j,o);let C=this.o;if(this.S&&(C?(C=g(C),T(C,this.S)):C=this.S),this.m!==null||this.O||(R.H=C,C=null),this.P)e:{for(var l=0,d=0;d<this.i.length;d++){t:{var y=this.i[d];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(l+=y,4096<l){l=d;break e}if(l===4096||d===this.i.length-1){l=d+1;break e}}l=1e3}else l=1e3;l=Cl(this,R,l),d=vt(this.I),pe(d,"RID",o),pe(d,"CVER",22),this.D&&pe(d,"X-HTTP-Session-Id",this.D),kr(this,d),C&&(this.O?l="headers="+encodeURIComponent(String(El(C)))+"&"+l:this.m&&No(d,this.m,C)),Vo(this.h,R),this.Ua&&pe(d,"TYPE","init"),this.P?(pe(d,"$req",l),pe(d,"SID","null"),R.T=!0,Co(R,d,null)):Co(R,d,l),this.G=2}}else this.G==3&&(o?xl(this,o):this.i.length==0||cl(this.h)||xl(this))};function xl(o,l){var d;l?d=l.l:d=o.U++;const y=vt(o.I);pe(y,"SID",o.K),pe(y,"RID",d),pe(y,"AID",o.T),kr(o,y),o.m&&o.o&&No(y,o.m,o.o),d=new Mt(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),l&&(o.i=l.D.concat(o.i)),l=Cl(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Vo(o.h,d),Co(d,y,l)}function kr(o,l){o.H&&ae(o.H,function(d,y){pe(l,y,d)}),o.l&&dl({},function(d,y){pe(l,y,d)})}function Cl(o,l,d){d=Math.min(o.i.length,d);var y=o.l?_(o.l.Na,o.l,o):null;e:{var R=o.i;let C=-1;for(;;){const L=["count="+d];C==-1?0<d?(C=R[0].g,L.push("ofs="+C)):C=0:L.push("ofs="+C);let he=!0;for(let ke=0;ke<d;ke++){let oe=R[ke].g;const Me=R[ke].map;if(oe-=C,0>oe)C=Math.max(0,R[ke].g-100),he=!1;else try{Xp(Me,L,"req"+oe+"_")}catch{y&&y(Me)}}if(he){y=L.join("&");break e}}}return o=o.i.splice(0,d),l.D=o,y}function Pl(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;le||tt(),X||(le(),X=!0),et.add(l,o),o.v=0}}function Mo(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Ir(_(o.Fa,o),Vl(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,kl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Ir(_(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,qe(10),Ds(this),kl(this))};function Lo(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function kl(o){o.g=new Mt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=vt(o.qa);pe(l,"RID","rpc"),pe(l,"SID",o.K),pe(l,"AID",o.T),pe(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&pe(l,"TO",o.ja),pe(l,"TYPE","xmlhttp"),kr(o,l),o.m&&o.o&&No(l,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=xs(vt(l)),d.m=null,d.P=!0,sl(d,o)}n.Za=function(){this.C!=null&&(this.C=null,Ds(this),Mo(this),qe(19))};function Ns(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function Dl(o,l){var d=null;if(o.g==l){Ns(o),Lo(o),o.g=null;var y=2}else if(Do(o.h,l))d=l.D,ul(o.h,l),y=1;else return;if(o.G!=0){if(l.o)if(y==1){d=l.m?l.m.length:0,l=Date.now()-l.F;var R=o.B;y=Is(),ze(y,new el(y,d)),Vs(o)}else Pl(o);else if(R=l.s,R==3||R==0&&0<l.X||!(y==1&&nm(o,l)||y==2&&Mo(o)))switch(d&&0<d.length&&(l=o.h,l.i=l.i.concat(d)),R){case 1:dn(o,5);break;case 4:dn(o,10);break;case 3:dn(o,6);break;default:dn(o,2)}}}function Vl(o,l){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*l}function dn(o,l){if(o.j.info("Error code "+l),l==2){var d=_(o.fb,o),y=o.Xa;const R=!y;y=new hn(y||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Ss(y,"https"),xs(y),R?Qp(y.toString(),d):Jp(y.toString(),d)}else qe(2);o.G=0,o.l&&o.l.sa(l),Nl(o),Rl(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),qe(2)):(this.j.info("Failed to ping google.com"),qe(1))};function Nl(o){if(o.G=0,o.ka=[],o.l){const l=hl(o.h);(l.length!=0||o.i.length!=0)&&(A(o.ka,l),A(o.ka,o.i),o.h.i.length=0,x(o.i),o.i.length=0),o.l.ra()}}function Ol(o,l,d){var y=d instanceof hn?vt(d):new hn(d);if(y.g!="")l&&(y.g=l+"."+y.g),Rs(y,y.s);else{var R=c.location;y=R.protocol,l=l?l+"."+R.hostname:R.hostname,R=+R.port;var C=new hn(null);y&&Ss(C,y),l&&(C.g=l),R&&Rs(C,R),d&&(C.l=d),y=C}return d=o.D,l=o.ya,d&&l&&pe(y,d,l),pe(y,"VER",o.la),kr(o,y),y}function Ml(o,l,d){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new ge(new Cs({eb:d})):new ge(o.pa),l.Ha(o.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ll(){}n=Ll.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Os(){}Os.prototype.g=function(o,l){return new Qe(o,l)};function Qe(o,l){Oe.call(this),this.g=new Sl(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!M(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!M(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new Ln(this)}P(Qe,Oe),Qe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Qe.prototype.close=function(){Oo(this.g)},Qe.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=To(o),o=d);l.i.push(new jp(l.Ya++,o)),l.G==3&&Vs(l)},Qe.prototype.N=function(){this.g.l=null,delete this.j,Oo(this.g),delete this.g,Qe.aa.N.call(this)};function Fl(o){bo.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const d in l){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}P(Fl,bo);function jl(){So.call(this),this.status=1}P(jl,So);function Ln(o){this.g=o}P(Ln,Ll),Ln.prototype.ua=function(){ze(this.g,"a")},Ln.prototype.ta=function(o){ze(this.g,new Fl(o))},Ln.prototype.sa=function(o){ze(this.g,new jl)},Ln.prototype.ra=function(){ze(this.g,"b")},Os.prototype.createWebChannel=Os.prototype.g,Qe.prototype.send=Qe.prototype.o,Qe.prototype.open=Qe.prototype.m,Qe.prototype.close=Qe.prototype.close,ud=function(){return new Os},ld=function(){return Is()},cd=ln,ua={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ts.NO_ERROR=0,Ts.TIMEOUT=8,Ts.HTTP_ERROR=6,Js=Ts,tl.COMPLETE="complete",ad=tl,Jc.EventType=Er,Er.OPEN="a",Er.CLOSE="b",Er.ERROR="c",Er.MESSAGE="d",Oe.prototype.listen=Oe.prototype.K,Or=Jc,ge.prototype.listenOnce=ge.prototype.L,ge.prototype.getLastError=ge.prototype.Ka,ge.prototype.getLastErrorCode=ge.prototype.Ba,ge.prototype.getStatus=ge.prototype.Z,ge.prototype.getResponseJson=ge.prototype.Oa,ge.prototype.getResponseText=ge.prototype.oa,ge.prototype.send=ge.prototype.ea,ge.prototype.setWithCredentials=ge.prototype.Ha,od=ge}).apply(typeof $s<"u"?$s:typeof self<"u"?self:typeof window<"u"?window:{});const fu="@firebase/firestore",pu="4.9.0";/**
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
 */class je{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}je.UNAUTHENTICATED=new je(null),je.GOOGLE_CREDENTIALS=new je("google-credentials-uid"),je.FIRST_PARTY=new je("first-party-uid"),je.MOCK_USER=new je("mock-user");/**
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
 */let hr="12.0.0";/**
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
 */const Cn=new La("@firebase/firestore");function zn(){return Cn.logLevel}function U(n,...e){if(Cn.logLevel<=ee.DEBUG){const t=e.map(Ua);Cn.debug(`Firestore (${hr}): ${n}`,...t)}}function Ct(n,...e){if(Cn.logLevel<=ee.ERROR){const t=e.map(Ua);Cn.error(`Firestore (${hr}): ${n}`,...t)}}function er(n,...e){if(Cn.logLevel<=ee.WARN){const t=e.map(Ua);Cn.warn(`Firestore (${hr}): ${n}`,...t)}}function Ua(n){if(typeof n=="string")return n;try{/**
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
 */function H(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,hd(n,r,t)}function hd(n,e,t){let r=`FIRESTORE (${hr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Ct(r),new Error(r)}function ue(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||hd(e,s,r)}function Y(n,e){return n}/**
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
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends Nt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class St{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class dd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class V_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(je.UNAUTHENTICATED))}shutdown(){}}class N_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class O_{constructor(e){this.t=e,this.currentUser=je.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ue(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new St;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new St,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},c=u=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new St)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ue(typeof r.accessToken=="string",31837,{l:r}),new dd(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ue(e===null||typeof e=="string",2055,{h:e}),new je(e)}}class M_{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=je.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class L_{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new M_(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(je.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class mu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class F_{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,st(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ue(this.o===void 0,3512);const r=i=>{i.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,U("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new mu(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ue(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new mu(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function j_(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Ba{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=j_(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function te(n,e){return n<e?-1:n>e?1:0}function ha(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return Ho(s)===Ho(i)?te(s,i):Ho(s)?1:-1}return te(n.length,e.length)}const U_=55296,B_=57343;function Ho(n){const e=n.charCodeAt(0);return e>=U_&&e<=B_}function tr(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */const gu="__name__";class ut{constructor(e,t,r){t===void 0?t=0:t>e.length&&H(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&H(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return ut.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ut?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=ut.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return te(e.length,t.length)}static compareSegments(e,t){const r=ut.isNumericId(e),s=ut.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?ut.extractNumericId(e).compare(ut.extractNumericId(t)):ha(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Kt.fromString(e.substring(4,e.length-2))}}class de extends ut{construct(e,t,r){return new de(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new F(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new de(t)}static emptyPath(){return new de([])}}const $_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ve extends ut{construct(e,t,r){return new Ve(e,t,r)}static isValidIdentifier(e){return $_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ve.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===gu}static keyField(){return new Ve([gu])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new F(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new F(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new F(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new F(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ve(t)}static emptyPath(){return new Ve([])}}/**
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
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(de.fromString(e))}static fromName(e){return new q(de.fromString(e).popFirst(5))}static empty(){return new q(de.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&de.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return de.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new de(e.slice()))}}/**
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
 */function fd(n,e,t){if(!t)throw new F(D.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function z_(n,e,t,r){if(e===!0&&r===!0)throw new F(D.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function yu(n){if(!q.isDocumentKey(n))throw new F(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function _u(n){if(q.isDocumentKey(n))throw new F(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function pd(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Fi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":H(12329,{type:typeof n})}function Ge(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new F(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Fi(n);throw new F(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function q_(n,e){if(e<=0)throw new F(D.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */function Te(n,e){const t={typeString:n};return e&&(t.value=e),t}function us(n,e){if(!pd(n))throw new F(D.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new F(D.INVALID_ARGUMENT,t);return!0}/**
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
 */const vu=-62135596800,Eu=1e6;class ce{static now(){return ce.fromMillis(Date.now())}static fromDate(e){return ce.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Eu);return new ce(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new F(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new F(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<vu)throw new F(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Eu}_compareTo(e){return this.seconds===e.seconds?te(this.nanoseconds,e.nanoseconds):te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ce._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(us(e,ce._jsonSchema))return new ce(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-vu;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ce._jsonSchemaVersion="firestore/timestamp/1.0",ce._jsonSchema={type:Te("string",ce._jsonSchemaVersion),seconds:Te("number"),nanoseconds:Te("number")};/**
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
 */class J{static fromTimestamp(e){return new J(e)}static min(){return new J(new ce(0,0))}static max(){return new J(new ce(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Xr=-1;function W_(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=J.fromTimestamp(r===1e9?new ce(t+1,0):new ce(t,r));return new Xt(s,q.empty(),e)}function H_(n){return new Xt(n.readTime,n.key,Xr)}class Xt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Xt(J.min(),q.empty(),Xr)}static max(){return new Xt(J.max(),q.empty(),Xr)}}function G_(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=q.comparator(n.documentKey,e.documentKey),t!==0?t:te(n.largestBatchId,e.largestBatchId))}/**
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
 */async function dr(n){if(n.code!==D.FAILED_PRECONDITION||n.message!==K_)throw n;U("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&H(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new V((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof V?t:V.resolve(t)}catch(t){return V.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):V.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):V.reject(t)}static resolve(e){return new V((t,r)=>{t(e)})}static reject(e){return new V((t,r)=>{r(e)})}static waitFor(e){return new V((t,r)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&t()},u=>r(u))}),a=!0,i===s&&t()})}static or(e){let t=V.resolve(!1);for(const r of e)t=t.next(s=>s?V.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new V((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let u=0;u<i;u++){const h=u;t(e[h]).next(f=>{a[h]=f,++c,c===i&&r(a)},f=>s(f))}})}static doWhile(e,t){return new V((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function J_(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function fr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class ji{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}ji.ce=-1;/**
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
 */const $a=-1;function Ui(n){return n==null}function ui(n){return n===0&&1/n==-1/0}function Y_(n){return typeof n=="number"&&Number.isInteger(n)&&!ui(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const md="";function X_(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=wu(e)),e=Z_(n.get(t),e);return wu(e)}function Z_(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case md:t+="";break;default:t+=i}}return t}function wu(n){return n+md+""}/**
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
 */function Iu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function sn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function gd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class me{constructor(e,t){this.comparator=e,this.root=t||De.EMPTY}insert(e,t){return new me(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,De.BLACK,null,null))}remove(e){return new me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,De.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new zs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new zs(this.root,e,this.comparator,!1)}getReverseIterator(){return new zs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new zs(this.root,e,this.comparator,!0)}}class zs{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class De{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??De.RED,this.left=s??De.EMPTY,this.right=i??De.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new De(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return De.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return De.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,De.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,De.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw H(43730,{key:this.key,value:this.value});if(this.right.isRed())throw H(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw H(27949);return e+(this.isRed()?0:1)}}De.EMPTY=null,De.RED=!0,De.BLACK=!1;De.EMPTY=new class{constructor(){this.size=0}get key(){throw H(57766)}get value(){throw H(16141)}get color(){throw H(16727)}get left(){throw H(29726)}get right(){throw H(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new De(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class xe{constructor(e){this.comparator=e,this.data=new me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Tu(this.data.getIterator())}getIteratorFrom(e){return new Tu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof xe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new xe(this.comparator);return t.data=e,t}}class Tu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Je{constructor(e){this.fields=e,e.sort(Ve.comparator)}static empty(){return new Je([])}unionWith(e){let t=new xe(Ve.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Je(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return tr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class yd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ne{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new yd("Invalid base64 string: "+i):i}}(e);return new Ne(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new Ne(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ne.EMPTY_BYTE_STRING=new Ne("");const ev=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Zt(n){if(ue(!!n,39018),typeof n=="string"){let e=0;const t=ev.exec(n);if(ue(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ve(n.seconds),nanos:ve(n.nanos)}}function ve(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function en(n){return typeof n=="string"?Ne.fromBase64String(n):Ne.fromUint8Array(n)}/**
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
 */const _d="server_timestamp",vd="__type__",Ed="__previous_value__",wd="__local_write_time__";function za(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[vd])==null?void 0:r.stringValue)===_d}function Bi(n){const e=n.mapValue.fields[Ed];return za(e)?Bi(e):e}function Zr(n){const e=Zt(n.mapValue.fields[wd].timestampValue);return new ce(e.seconds,e.nanos)}/**
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
 */class tv{constructor(e,t,r,s,i,a,c,u,h,f){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f}}const hi="(default)";class es{constructor(e,t){this.projectId=e,this.database=t||hi}static empty(){return new es("","")}get isDefaultDatabase(){return this.database===hi}isEqual(e){return e instanceof es&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Id="__type__",Td="__max__",qs={mapValue:{fields:{__type__:{stringValue:Td}}}},Ad="__vector__",di="value";function tn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?za(n)?4:rv(n)?9007199254740991:nv(n)?10:11:H(28295,{value:n})}function yt(n,e){if(n===e)return!0;const t=tn(n);if(t!==tn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Zr(n).isEqual(Zr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Zt(s.timestampValue),c=Zt(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return en(s.bytesValue).isEqual(en(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return ve(s.geoPointValue.latitude)===ve(i.geoPointValue.latitude)&&ve(s.geoPointValue.longitude)===ve(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ve(s.integerValue)===ve(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=ve(s.doubleValue),c=ve(i.doubleValue);return a===c?ui(a)===ui(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return tr(n.arrayValue.values||[],e.arrayValue.values||[],yt);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Iu(a)!==Iu(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!yt(a[u],c[u])))return!1;return!0}(n,e);default:return H(52216,{left:n})}}function ts(n,e){return(n.values||[]).find(t=>yt(t,e))!==void 0}function nr(n,e){if(n===e)return 0;const t=tn(n),r=tn(e);if(t!==r)return te(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return te(n.booleanValue,e.booleanValue);case 2:return function(i,a){const c=ve(i.integerValue||i.doubleValue),u=ve(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(n,e);case 3:return Au(n.timestampValue,e.timestampValue);case 4:return Au(Zr(n),Zr(e));case 5:return ha(n.stringValue,e.stringValue);case 6:return function(i,a){const c=en(i),u=en(a);return c.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),u=a.split("/");for(let h=0;h<c.length&&h<u.length;h++){const f=te(c[h],u[h]);if(f!==0)return f}return te(c.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const c=te(ve(i.latitude),ve(a.latitude));return c!==0?c:te(ve(i.longitude),ve(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return bu(n.arrayValue,e.arrayValue);case 10:return function(i,a){var _,b,P,x;const c=i.fields||{},u=a.fields||{},h=(_=c[di])==null?void 0:_.arrayValue,f=(b=u[di])==null?void 0:b.arrayValue,m=te(((P=h==null?void 0:h.values)==null?void 0:P.length)||0,((x=f==null?void 0:f.values)==null?void 0:x.length)||0);return m!==0?m:bu(h,f)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===qs.mapValue&&a===qs.mapValue)return 0;if(i===qs.mapValue)return 1;if(a===qs.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),h=a.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const _=ha(u[m],f[m]);if(_!==0)return _;const b=nr(c[u[m]],h[f[m]]);if(b!==0)return b}return te(u.length,f.length)}(n.mapValue,e.mapValue);default:throw H(23264,{he:t})}}function Au(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return te(n,e);const t=Zt(n),r=Zt(e),s=te(t.seconds,r.seconds);return s!==0?s:te(t.nanos,r.nanos)}function bu(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=nr(t[s],r[s]);if(i)return i}return te(t.length,r.length)}function rr(n){return da(n)}function da(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Zt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return en(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return q.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=da(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${da(t.fields[a])}`;return s+"}"}(n.mapValue):H(61005,{value:n})}function Ys(n){switch(tn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Bi(n);return e?16+Ys(e):16;case 5:return 2*n.stringValue.length;case 6:return en(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ys(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return sn(r.fields,(i,a)=>{s+=i.length+Ys(a)}),s}(n.mapValue);default:throw H(13486,{value:n})}}function Su(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function fa(n){return!!n&&"integerValue"in n}function qa(n){return!!n&&"arrayValue"in n}function Ru(n){return!!n&&"nullValue"in n}function xu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Xs(n){return!!n&&"mapValue"in n}function nv(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Id])==null?void 0:r.stringValue)===Ad}function Br(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return sn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Br(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Br(n.arrayValue.values[t]);return e}return{...n}}function rv(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Td}/**
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
 */class He{constructor(e){this.value=e}static empty(){return new He({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Xs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Br(t)}setAll(e){let t=Ve.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=Br(a):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Xs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return yt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Xs(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){sn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new He(Br(this.value))}}function bd(n){const e=[];return sn(n.fields,(t,r)=>{const s=new Ve([t]);if(Xs(r)){const i=bd(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Je(e)}/**
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
 */class Ue{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Ue(e,0,J.min(),J.min(),J.min(),He.empty(),0)}static newFoundDocument(e,t,r,s){return new Ue(e,1,t,J.min(),r,s,0)}static newNoDocument(e,t){return new Ue(e,2,t,J.min(),J.min(),He.empty(),0)}static newUnknownDocument(e,t){return new Ue(e,3,t,J.min(),J.min(),He.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=He.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=He.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ue&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ue(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class fi{constructor(e,t){this.position=e,this.inclusive=t}}function Cu(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=q.comparator(q.fromName(a.referenceValue),t.key):r=nr(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Pu(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!yt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class ns{constructor(e,t="asc"){this.field=e,this.dir=t}}function sv(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Sd{}class Ie extends Sd{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new ov(e,t,r):t==="array-contains"?new lv(e,r):t==="in"?new uv(e,r):t==="not-in"?new hv(e,r):t==="array-contains-any"?new dv(e,r):new Ie(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new av(e,r):new cv(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(nr(t,this.value)):t!==null&&tn(this.value)===tn(t)&&this.matchesComparison(nr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return H(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class at extends Sd{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new at(e,t)}matches(e){return Rd(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Rd(n){return n.op==="and"}function xd(n){return iv(n)&&Rd(n)}function iv(n){for(const e of n.filters)if(e instanceof at)return!1;return!0}function pa(n){if(n instanceof Ie)return n.field.canonicalString()+n.op.toString()+rr(n.value);if(xd(n))return n.filters.map(e=>pa(e)).join(",");{const e=n.filters.map(t=>pa(t)).join(",");return`${n.op}(${e})`}}function Cd(n,e){return n instanceof Ie?function(r,s){return s instanceof Ie&&r.op===s.op&&r.field.isEqual(s.field)&&yt(r.value,s.value)}(n,e):n instanceof at?function(r,s){return s instanceof at&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&Cd(a,s.filters[c]),!0):!1}(n,e):void H(19439)}function Pd(n){return n instanceof Ie?function(t){return`${t.field.canonicalString()} ${t.op} ${rr(t.value)}`}(n):n instanceof at?function(t){return t.op.toString()+" {"+t.getFilters().map(Pd).join(" ,")+"}"}(n):"Filter"}class ov extends Ie{constructor(e,t,r){super(e,t,r),this.key=q.fromName(r.referenceValue)}matches(e){const t=q.comparator(e.key,this.key);return this.matchesComparison(t)}}class av extends Ie{constructor(e,t){super(e,"in",t),this.keys=kd("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class cv extends Ie{constructor(e,t){super(e,"not-in",t),this.keys=kd("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function kd(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(r=>q.fromName(r.referenceValue))}class lv extends Ie{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return qa(t)&&ts(t.arrayValue,this.value)}}class uv extends Ie{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ts(this.value.arrayValue,t)}}class hv extends Ie{constructor(e,t){super(e,"not-in",t)}matches(e){if(ts(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ts(this.value.arrayValue,t)}}class dv extends Ie{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!qa(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>ts(this.value.arrayValue,r))}}/**
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
 */class fv{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Te=null}}function ku(n,e=null,t=[],r=[],s=null,i=null,a=null){return new fv(n,e,t,r,s,i,a)}function Wa(n){const e=Y(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>pa(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ui(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>rr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>rr(r)).join(",")),e.Te=t}return e.Te}function Ha(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!sv(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Cd(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Pu(n.startAt,e.startAt)&&Pu(n.endAt,e.endAt)}function ma(n){return q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class pr{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function pv(n,e,t,r,s,i,a,c){return new pr(n,e,t,r,s,i,a,c)}function $i(n){return new pr(n)}function Du(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Dd(n){return n.collectionGroup!==null}function $r(n){const e=Y(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new xe(Ve.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new ns(i,r))}),t.has(Ve.keyField().canonicalString())||e.Ie.push(new ns(Ve.keyField(),r))}return e.Ie}function dt(n){const e=Y(n);return e.Ee||(e.Ee=mv(e,$r(n))),e.Ee}function mv(n,e){if(n.limitType==="F")return ku(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ns(s.field,i)});const t=n.endAt?new fi(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new fi(n.startAt.position,n.startAt.inclusive):null;return ku(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function ga(n,e){const t=n.filters.concat([e]);return new pr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function pi(n,e,t){return new pr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function zi(n,e){return Ha(dt(n),dt(e))&&n.limitType===e.limitType}function Vd(n){return`${Wa(dt(n))}|lt:${n.limitType}`}function qn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Pd(s)).join(", ")}]`),Ui(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>rr(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>rr(s)).join(",")),`Target(${r})`}(dt(n))}; limitType=${n.limitType})`}function qi(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):q.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of $r(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,c,u){const h=Cu(a,c,u);return a.inclusive?h<=0:h<0}(r.startAt,$r(r),s)||r.endAt&&!function(a,c,u){const h=Cu(a,c,u);return a.inclusive?h>=0:h>0}(r.endAt,$r(r),s))}(n,e)}function gv(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Nd(n){return(e,t)=>{let r=!1;for(const s of $r(n)){const i=yv(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function yv(n,e,t){const r=n.field.isKeyField()?q.comparator(e.key,t.key):function(i,a,c){const u=a.data.field(i),h=c.data.field(i);return u!==null&&h!==null?nr(u,h):H(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return H(19790,{direction:n.dir})}}/**
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
 */class Vn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){sn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return gd(this.inner)}size(){return this.innerSize}}/**
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
 */const _v=new me(q.comparator);function Pt(){return _v}const Od=new me(q.comparator);function Mr(...n){let e=Od;for(const t of n)e=e.insert(t.key,t);return e}function Md(n){let e=Od;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function vn(){return zr()}function Ld(){return zr()}function zr(){return new Vn(n=>n.toString(),(n,e)=>n.isEqual(e))}const vv=new me(q.comparator),Ev=new xe(q.comparator);function ne(...n){let e=Ev;for(const t of n)e=e.add(t);return e}const wv=new xe(te);function Iv(){return wv}/**
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
 */function Ga(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ui(e)?"-0":e}}function Fd(n){return{integerValue:""+n}}function Tv(n,e){return Y_(e)?Fd(e):Ga(n,e)}/**
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
 */class Wi{constructor(){this._=void 0}}function Av(n,e,t){return n instanceof rs?function(s,i){const a={fields:{[vd]:{stringValue:_d},[wd]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&za(i)&&(i=Bi(i)),i&&(a.fields[Ed]=i),{mapValue:a}}(t,e):n instanceof ss?Ud(n,e):n instanceof is?Bd(n,e):function(s,i){const a=jd(s,i),c=Vu(a)+Vu(s.Ae);return fa(a)&&fa(s.Ae)?Fd(c):Ga(s.serializer,c)}(n,e)}function bv(n,e,t){return n instanceof ss?Ud(n,e):n instanceof is?Bd(n,e):t}function jd(n,e){return n instanceof mi?function(r){return fa(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class rs extends Wi{}class ss extends Wi{constructor(e){super(),this.elements=e}}function Ud(n,e){const t=$d(e);for(const r of n.elements)t.some(s=>yt(s,r))||t.push(r);return{arrayValue:{values:t}}}class is extends Wi{constructor(e){super(),this.elements=e}}function Bd(n,e){let t=$d(e);for(const r of n.elements)t=t.filter(s=>!yt(s,r));return{arrayValue:{values:t}}}class mi extends Wi{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Vu(n){return ve(n.integerValue||n.doubleValue)}function $d(n){return qa(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Sv{constructor(e,t){this.field=e,this.transform=t}}function Rv(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof ss&&s instanceof ss||r instanceof is&&s instanceof is?tr(r.elements,s.elements,yt):r instanceof mi&&s instanceof mi?yt(r.Ae,s.Ae):r instanceof rs&&s instanceof rs}(n.transform,e.transform)}class xv{constructor(e,t){this.version=e,this.transformResults=t}}class Ze{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ze}static exists(e){return new Ze(void 0,e)}static updateTime(e){return new Ze(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Zs(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Hi{}function zd(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ka(n.key,Ze.none()):new hs(n.key,n.data,Ze.none());{const t=n.data,r=He.empty();let s=new xe(Ve.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new on(n.key,r,new Je(s.toArray()),Ze.none())}}function Cv(n,e,t){n instanceof hs?function(s,i,a){const c=s.value.clone(),u=Ou(s.fieldTransforms,i,a.transformResults);c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof on?function(s,i,a){if(!Zs(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=Ou(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(qd(s)),u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function qr(n,e,t,r){return n instanceof hs?function(i,a,c,u){if(!Zs(i.precondition,a))return c;const h=i.value.clone(),f=Mu(i.fieldTransforms,u,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof on?function(i,a,c,u){if(!Zs(i.precondition,a))return c;const h=Mu(i.fieldTransforms,u,a),f=a.data;return f.setAll(qd(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(n,e,t,r):function(i,a,c){return Zs(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function Pv(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=jd(r.transform,s||null);i!=null&&(t===null&&(t=He.empty()),t.set(r.field,i))}return t||null}function Nu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&tr(r,s,(i,a)=>Rv(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class hs extends Hi{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class on extends Hi{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function qd(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Ou(n,e,t){const r=new Map;ue(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,bv(a,c,t[s]))}return r}function Mu(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,Av(i,a,e))}return r}class Ka extends Hi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class kv extends Hi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Dv{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Cv(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=qr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=qr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Ld();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const u=zd(a,c);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ne())}isEqual(e){return this.batchId===e.batchId&&tr(this.mutations,e.mutations,(t,r)=>Nu(t,r))&&tr(this.baseMutations,e.baseMutations,(t,r)=>Nu(t,r))}}class Qa{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){ue(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return vv}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Qa(e,t,r,s)}}/**
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
 */var Ee,se;function Ov(n){switch(n){case D.OK:return H(64938);case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0;default:return H(15467,{code:n})}}function Wd(n){if(n===void 0)return Ct("GRPC error has no .code"),D.UNKNOWN;switch(n){case Ee.OK:return D.OK;case Ee.CANCELLED:return D.CANCELLED;case Ee.UNKNOWN:return D.UNKNOWN;case Ee.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case Ee.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case Ee.INTERNAL:return D.INTERNAL;case Ee.UNAVAILABLE:return D.UNAVAILABLE;case Ee.UNAUTHENTICATED:return D.UNAUTHENTICATED;case Ee.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case Ee.NOT_FOUND:return D.NOT_FOUND;case Ee.ALREADY_EXISTS:return D.ALREADY_EXISTS;case Ee.PERMISSION_DENIED:return D.PERMISSION_DENIED;case Ee.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case Ee.ABORTED:return D.ABORTED;case Ee.OUT_OF_RANGE:return D.OUT_OF_RANGE;case Ee.UNIMPLEMENTED:return D.UNIMPLEMENTED;case Ee.DATA_LOSS:return D.DATA_LOSS;default:return H(39323,{code:n})}}(se=Ee||(Ee={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const Lv=new Kt([4294967295,4294967295],0);function Lu(n){const e=Mv().encode(n),t=new id;return t.update(e),new Uint8Array(t.digest())}function Fu(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Kt([t,r],0),new Kt([s,i],0)]}class Ja{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Lr(`Invalid padding: ${t}`);if(r<0)throw new Lr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Lr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Lr(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Kt.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(Kt.fromNumber(r)));return s.compare(Lv)===1&&(s=new Kt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Lu(e),[r,s]=Fu(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Ja(i,s,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.ge===0)return;const t=Lu(e),[r,s]=Fu(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Lr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Gi{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,ds.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Gi(J.min(),s,new me(te),Pt(),ne())}}class ds{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new ds(r,t,ne(),ne(),ne())}}/**
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
 */class ei{constructor(e,t,r,s){this.be=e,this.removedTargetIds=t,this.key=r,this.De=s}}class Hd{constructor(e,t){this.targetId=e,this.Ce=t}}class Gd{constructor(e,t,r=Ne.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class ju{constructor(){this.ve=0,this.Fe=Uu(),this.Me=Ne.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ne(),t=ne(),r=ne();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:H(38017,{changeType:i})}}),new ds(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=Uu()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,ue(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Fv{constructor(e){this.Ge=e,this.ze=new Map,this.je=Pt(),this.Je=Ws(),this.He=Ws(),this.Ye=new me(te)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:H(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((r,s)=>{this.rt(s)&&t(s)})}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(ma(i))if(r===0){const a=new q(i.path);this.et(t,a,Ue.newNoDocument(a,J.min()))}else ue(r===1,20013,{expectedCount:r});else{const a=this._t(t);if(a!==r){const c=this.ut(e),u=c?this.ct(c,e,a):1;if(u!==0){this.it(t);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,h)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=en(r).toUint8Array()}catch(u){if(u instanceof yd)return er("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new Ja(a,s,i)}catch(u){return er(u instanceof Lr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.ge===0?null:c}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Ge.ht(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(t,i,null),s++)}),s}Tt(e){const t=new Map;this.ze.forEach((i,a)=>{const c=this.ot(a);if(c){if(i.current&&ma(c.target)){const u=new q(c.target.path);this.It(u).has(a)||this.Et(a,u)||this.et(a,u,Ue.newNoDocument(u,e))}i.Be&&(t.set(a,i.ke()),i.qe())}});let r=ne();this.He.forEach((i,a)=>{let c=!0;a.forEachWhile(u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.je.forEach((i,a)=>a.setReadTime(e));const s=new Gi(e,t,this.Ye,this.je,r);return this.je=Pt(),this.Je=Ws(),this.He=Ws(),this.Ye=new me(te),s}Xe(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.Qe(t,1):s.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new ju,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new xe(te),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new xe(te),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||U("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new ju),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Ws(){return new me(q.comparator)}function Uu(){return new me(q.comparator)}const jv=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Uv=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Bv=(()=>({and:"AND",or:"OR"}))();class $v{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ya(n,e){return n.useProto3Json||Ui(e)?e:{value:e}}function gi(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Kd(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function zv(n,e){return gi(n,e.toTimestamp())}function ft(n){return ue(!!n,49232),J.fromTimestamp(function(t){const r=Zt(t);return new ce(r.seconds,r.nanos)}(n))}function Ya(n,e){return _a(n,e).canonicalString()}function _a(n,e){const t=function(s){return new de(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Qd(n){const e=de.fromString(n);return ue(ef(e),10190,{key:e.toString()}),e}function va(n,e){return Ya(n.databaseId,e.path)}function Go(n,e){const t=Qd(e);if(t.get(1)!==n.databaseId.projectId)throw new F(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new F(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new q(Yd(t))}function Jd(n,e){return Ya(n.databaseId,e)}function qv(n){const e=Qd(n);return e.length===4?de.emptyPath():Yd(e)}function Ea(n){return new de(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Yd(n){return ue(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Bu(n,e,t){return{name:va(n,e),fields:t.value.mapValue.fields}}function Wv(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:H(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(ue(f===void 0||typeof f=="string",58123),Ne.fromBase64String(f||"")):(ue(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Ne.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(h){const f=h.code===void 0?D.UNKNOWN:Wd(h.code);return new F(f,h.message||"")}(a);t=new Gd(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Go(n,r.document.name),i=ft(r.document.updateTime),a=r.document.createTime?ft(r.document.createTime):J.min(),c=new He({mapValue:{fields:r.document.fields}}),u=Ue.newFoundDocument(s,i,a,c),h=r.targetIds||[],f=r.removedTargetIds||[];t=new ei(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Go(n,r.document),i=r.readTime?ft(r.readTime):J.min(),a=Ue.newNoDocument(s,i),c=r.removedTargetIds||[];t=new ei([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Go(n,r.document),i=r.removedTargetIds||[];t=new ei([],i,s,null)}else{if(!("filter"in e))return H(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new Nv(s,i),c=r.targetId;t=new Hd(c,a)}}return t}function Hv(n,e){let t;if(e instanceof hs)t={update:Bu(n,e.key,e.value)};else if(e instanceof Ka)t={delete:va(n,e.key)};else if(e instanceof on)t={update:Bu(n,e.key,e.data),updateMask:tE(e.fieldMask)};else{if(!(e instanceof kv))return H(16599,{Vt:e.type});t={verify:va(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const c=a.transform;if(c instanceof rs)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof ss)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof is)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof mi)return{fieldPath:a.field.canonicalString(),increment:c.Ae};throw H(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:zv(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:H(27497)}(n,e.precondition)),t}function Gv(n,e){return n&&n.length>0?(ue(e!==void 0,14353),n.map(t=>function(s,i){let a=s.updateTime?ft(s.updateTime):ft(i);return a.isEqual(J.min())&&(a=ft(i)),new xv(a,s.transformResults||[])}(t,e))):[]}function Kv(n,e){return{documents:[Jd(n,e.path)]}}function Qv(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Jd(n,s);const i=function(h){if(h.length!==0)return Zd(at.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(f=>function(_){return{field:Wn(_.field),direction:Xv(_.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=ya(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:t,parent:s}}function Jv(n){let e=qv(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){ue(r===1,65062);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(m){const _=Xd(m);return _ instanceof at&&xd(_)?_.getFilters():[_]}(t.where));let a=[];t.orderBy&&(a=function(m){return m.map(_=>function(P){return new ns(Hn(P.field),function(A){switch(A){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(_))}(t.orderBy));let c=null;t.limit&&(c=function(m){let _;return _=typeof m=="object"?m.value:m,Ui(_)?null:_}(t.limit));let u=null;t.startAt&&(u=function(m){const _=!!m.before,b=m.values||[];return new fi(b,_)}(t.startAt));let h=null;return t.endAt&&(h=function(m){const _=!m.before,b=m.values||[];return new fi(b,_)}(t.endAt)),pv(e,s,a,i,c,"F",u,h)}function Yv(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return H(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Xd(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Hn(t.unaryFilter.field);return Ie.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Hn(t.unaryFilter.field);return Ie.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Hn(t.unaryFilter.field);return Ie.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Hn(t.unaryFilter.field);return Ie.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return H(61313);default:return H(60726)}}(n):n.fieldFilter!==void 0?function(t){return Ie.create(Hn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return H(58110);default:return H(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return at.create(t.compositeFilter.filters.map(r=>Xd(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return H(1026)}}(t.compositeFilter.op))}(n):H(30097,{filter:n})}function Xv(n){return jv[n]}function Zv(n){return Uv[n]}function eE(n){return Bv[n]}function Wn(n){return{fieldPath:n.canonicalString()}}function Hn(n){return Ve.fromServerFormat(n.fieldPath)}function Zd(n){return n instanceof Ie?function(t){if(t.op==="=="){if(xu(t.value))return{unaryFilter:{field:Wn(t.field),op:"IS_NAN"}};if(Ru(t.value))return{unaryFilter:{field:Wn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(xu(t.value))return{unaryFilter:{field:Wn(t.field),op:"IS_NOT_NAN"}};if(Ru(t.value))return{unaryFilter:{field:Wn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Wn(t.field),op:Zv(t.op),value:t.value}}}(n):n instanceof at?function(t){const r=t.getFilters().map(s=>Zd(s));return r.length===1?r[0]:{compositeFilter:{op:eE(t.op),filters:r}}}(n):H(54877,{filter:n})}function tE(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function ef(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class qt{constructor(e,t,r,s,i=J.min(),a=J.min(),c=Ne.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new qt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new qt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class nE{constructor(e){this.yt=e}}function rE(n){const e=Jv({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?pi(e,e.limit,"L"):e}/**
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
 */class sE{constructor(){this.Cn=new iE}addToCollectionParentIndex(e,t){return this.Cn.add(t),V.resolve()}getCollectionParents(e,t){return V.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return V.resolve()}deleteFieldIndex(e,t){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,t){return V.resolve()}getDocumentsMatchingTarget(e,t){return V.resolve(null)}getIndexType(e,t){return V.resolve(0)}getFieldIndexes(e,t){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,t){return V.resolve(Xt.min())}getMinOffsetFromCollectionGroup(e,t){return V.resolve(Xt.min())}updateCollectionGroup(e,t,r){return V.resolve()}updateIndexEntries(e,t){return V.resolve()}}class iE{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new xe(de.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new xe(de.comparator)).toArray()}}/**
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
 */const $u={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},tf=41943040;class We{static withCacheSize(e){return new We(e,We.DEFAULT_COLLECTION_PERCENTILE,We.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */We.DEFAULT_COLLECTION_PERCENTILE=10,We.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,We.DEFAULT=new We(tf,We.DEFAULT_COLLECTION_PERCENTILE,We.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),We.DISABLED=new We(-1,0,0);/**
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
 */class sr{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new sr(0)}static cr(){return new sr(-1)}}/**
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
 */const zu="LruGarbageCollector",oE=1048576;function qu([n,e],[t,r]){const s=te(n,t);return s===0?te(e,r):s}class aE{constructor(e){this.Ir=e,this.buffer=new xe(qu),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();qu(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class cE{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){U(zu,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){fr(t)?U(zu,"Ignoring IndexedDB error during garbage collection: ",t):await dr(t)}await this.Vr(3e5)})}}class lE{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return V.resolve(ji.ce);const r=new aE(t);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(U("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve($u)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(U("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),$u):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,s,i,a,c,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(U("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,a=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(r=m,c=Date.now(),this.removeTargets(e,r,t))).next(m=>(i=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(h=Date.now(),zn()<=ee.DEBUG&&U("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(u-c)+`ms
	Removed ${m} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m})))}}function uE(n,e){return new lE(n,e)}/**
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
 */class hE{constructor(){this.changes=new Vn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ue.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?V.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class dE{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class fE{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&qr(r.mutation,s,Je.empty(),ce.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,t,r=ne()){const s=vn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=Mr();return i.forEach((c,u)=>{a=a.insert(c,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=vn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ne()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,s){let i=Pt();const a=zr(),c=function(){return zr()}();return t.forEach((u,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof on)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),qr(f.mutation,h,f.mutation.getFieldMask(),ce.now())):a.set(h.key,Je.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((h,f)=>a.set(h,f)),t.forEach((h,f)=>c.set(h,new dE(f,a.get(h)??null))),c))}recalculateAndSaveOverlays(e,t){const r=zr();let s=new me((a,c)=>a-c),i=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(u=>{const h=t.get(u);if(h===null)return;let f=r.get(u)||Je.empty();f=c.applyToLocalView(h,f),r.set(u,f);const m=(s.get(c.batchId)||ne()).add(u);s=s.insert(c.batchId,m)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),h=u.key,f=u.value,m=Ld();f.forEach(_=>{if(!i.has(_)){const b=zd(t.get(_),r.get(_));b!==null&&m.set(_,b),i=i.add(_)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,m))}return V.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return q.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Dd(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):V.resolve(vn());let c=Xr,u=i;return a.next(h=>V.forEach(h,(f,m)=>(c<m.largestBatchId&&(c=m.largestBatchId),i.get(f)?V.resolve():this.remoteDocumentCache.getEntry(e,f).next(_=>{u=u.insert(f,_)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,u,h,ne())).next(f=>({batchId:c,changes:Md(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new q(t)).next(r=>{let s=Mr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Mr();return this.indexManager.getCollectionParents(e,i).next(c=>V.forEach(c,u=>{const h=function(m,_){return new pr(_,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((m,_)=>{a=a.insert(m,_)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((u,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,Ue.newInvalidDocument(f)))});let c=Mr();return a.forEach((u,h)=>{const f=i.get(u);f!==void 0&&qr(f.mutation,h,Je.empty(),ce.now()),qi(t,h)&&(c=c.insert(u,h))}),c})}}/**
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
 */class pE{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return V.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:ft(s.createTime)}}(t)),V.resolve()}getNamedQuery(e,t){return V.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(s){return{name:s.name,query:rE(s.bundledQuery),readTime:ft(s.readTime)}}(t)),V.resolve()}}/**
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
 */class mE{constructor(){this.overlays=new me(q.comparator),this.qr=new Map}getOverlay(e,t){return V.resolve(this.overlays.get(t))}getOverlays(e,t){const r=vn();return V.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.St(e,t,i)}),V.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),V.resolve()}getOverlaysForCollection(e,t,r){const s=vn(),i=t.length+1,a=new q(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return V.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new me((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=vn(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=vn(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=s)););return V.resolve(c)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Vv(t,r));let i=this.qr.get(t);i===void 0&&(i=ne(),this.qr.set(t,i)),this.qr.set(t,i.add(r.key))}}/**
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
 */class gE{constructor(){this.sessionToken=Ne.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,V.resolve()}}/**
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
 */class Xa{constructor(){this.Qr=new xe(Ce.$r),this.Ur=new xe(Ce.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new Ce(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Gr(new Ce(e,t))}zr(e,t){e.forEach(r=>this.removeReference(r,t))}jr(e){const t=new q(new de([])),r=new Ce(t,e),s=new Ce(t,e+1),i=[];return this.Ur.forEachInRange([r,s],a=>{this.Gr(a),i.push(a.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new q(new de([])),r=new Ce(t,e),s=new Ce(t,e+1);let i=ne();return this.Ur.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new Ce(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ce{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return q.comparator(e.key,t.key)||te(e.Yr,t.Yr)}static Kr(e,t){return te(e.Yr,t.Yr)||q.comparator(e.key,t.key)}}/**
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
 */class yE{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new xe(Ce.$r)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Dv(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.Zr=this.Zr.add(new Ce(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return V.resolve(a)}lookupMutationBatch(e,t){return V.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.ei(r),i=s<0?0:s;return V.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?$a:this.tr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ce(t,0),s=new Ce(t,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],a=>{const c=this.Xr(a.Yr);i.push(c)}),V.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new xe(te);return t.forEach(s=>{const i=new Ce(s,0),a=new Ce(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],c=>{r=r.add(c.Yr)})}),V.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;q.isDocumentKey(i)||(i=i.child(""));const a=new Ce(new q(i),0);let c=new xe(te);return this.Zr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(u.Yr)),!0)},a),V.resolve(this.ti(c))}ti(e){const t=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){ue(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return V.forEach(t.mutations,s=>{const i=new Ce(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,t){const r=new Ce(t,0),s=this.Zr.firstAfterOrEqual(r);return V.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class _E{constructor(e){this.ri=e,this.docs=function(){return new me(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return V.resolve(r?r.document.mutableCopy():Ue.newInvalidDocument(t))}getEntries(e,t){let r=Pt();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ue.newInvalidDocument(s))}),V.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Pt();const a=t.path,c=new q(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||G_(H_(f),r)<=0||(s.has(f.key)||qi(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return V.resolve(i)}getAllFromCollectionGroup(e,t,r,s){H(9500)}ii(e,t){return V.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new vE(this)}getSize(e){return V.resolve(this.size)}}class vE extends hE{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),V.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class EE{constructor(e){this.persistence=e,this.si=new Vn(t=>Wa(t),Ha),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.oi=0,this._i=new Xa,this.targetCount=0,this.ai=sr.ur()}forEachTarget(e,t){return this.si.forEach((r,s)=>t(s)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),V.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new sr(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,V.resolve()}updateTargetData(e,t){return this.Pr(t),V.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.si.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),V.waitFor(i).next(()=>s)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return V.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),V.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),V.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),V.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return V.resolve(r)}containsKey(e,t){return V.resolve(this._i.containsKey(t))}}/**
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
 */class nf{constructor(e,t){this.ui={},this.overlays={},this.ci=new ji(0),this.li=!1,this.li=!0,this.hi=new gE,this.referenceDelegate=e(this),this.Pi=new EE(this),this.indexManager=new sE,this.remoteDocumentCache=function(s){return new _E(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new nE(t),this.Ii=new pE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new mE,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new yE(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){U("MemoryPersistence","Starting transaction:",e);const s=new wE(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,t){return V.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,t)))}}class wE extends Q_{constructor(e){super(),this.currentSequenceNumber=e}}class Za{constructor(e){this.persistence=e,this.Ri=new Xa,this.Vi=null}static mi(e){return new Za(e)}get fi(){if(this.Vi)return this.Vi;throw H(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),V.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),V.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.fi,r=>{const s=q.fromPath(r);return this.gi(e,s).next(i=>{i||t.removeEntry(s,J.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return V.or([()=>V.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class yi{constructor(e,t){this.persistence=e,this.pi=new Vn(r=>X_(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=uE(this,t)}static mi(e,t){return new yi(e,t)}Ei(){}di(e){return V.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}wr(e){let t=0;return this.pr(e,r=>{t++}).next(()=>t)}pr(e,t){return V.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?V.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,a=>this.br(e,a,t).next(c=>{c||(r++,i.removeEntry(a,J.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),V.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),V.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),V.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),V.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ys(e.data.value)),t}br(e,t,r){return V.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.pi.get(t);return V.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class ec{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=s}static As(e,t){let r=ne(),s=ne();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ec(e,t.fromCache,r,s)}}/**
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
 */class IE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class TE{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return fy()?8:J_($e())>0?6:4}()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ys(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ws(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new IE;return this.Ss(e,t,a).next(c=>{if(i.result=c,this.Vs)return this.bs(e,t,a,c.size)})}).next(()=>i.result)}bs(e,t,r,s){return r.documentReadCount<this.fs?(zn()<=ee.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",qn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),V.resolve()):(zn()<=ee.DEBUG&&U("QueryEngine","Query:",qn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(zn()<=ee.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",qn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,dt(t))):V.resolve())}ys(e,t){if(Du(t))return V.resolve(null);let r=dt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=pi(t,null,"F"),r=dt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=ne(...i);return this.ps.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.Ds(t,c);return this.Cs(t,h,a,u.readTime)?this.ys(e,pi(t,null,"F")):this.vs(e,h,t,u)}))})))}ws(e,t,r,s){return Du(t)||s.isEqual(J.min())?V.resolve(null):this.ps.getDocuments(e,r).next(i=>{const a=this.Ds(t,i);return this.Cs(t,a,r,s)?V.resolve(null):(zn()<=ee.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),qn(t)),this.vs(e,a,t,W_(s,Xr)).next(c=>c))})}Ds(e,t){let r=new xe(Nd(e));return t.forEach((s,i)=>{qi(e,i)&&(r=r.add(i))}),r}Cs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,t,r){return zn()<=ee.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",qn(t)),this.ps.getDocumentsMatchingQuery(e,t,Xt.min(),r)}vs(e,t,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const tc="LocalStore",AE=3e8;class bE{constructor(e,t,r,s){this.persistence=e,this.Fs=t,this.serializer=s,this.Ms=new me(te),this.xs=new Vn(i=>Wa(i),Ha),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new fE(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function SE(n,e,t,r){return new bE(n,e,t,r)}async function rf(n,e){const t=Y(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Bs(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let u=ne();for(const h of s){a.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(r,u).next(h=>({Ls:h,removedBatchIds:a,addedBatchIds:c}))})})}function RE(n,e){const t=Y(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.Ns.newChangeBuffer({trackRemovals:!0});return function(c,u,h,f){const m=h.batch,_=m.keys();let b=V.resolve();return _.forEach(P=>{b=b.next(()=>f.getEntry(u,P)).next(x=>{const A=h.docVersions.get(P);ue(A!==null,48541),x.version.compareTo(A)<0&&(m.applyToRemoteDocument(x,h),x.isValidDocument()&&(x.setReadTime(h.commitVersion),f.addEntry(x)))})}),b.next(()=>c.mutationQueue.removeMutationBatch(u,m))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=ne();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(u=u.add(c.batch.mutations[h].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function sf(n){const e=Y(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Pi.getLastRemoteSnapshotVersion(t))}function xE(n,e){const t=Y(n),r=e.snapshotVersion;let s=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.Ns.newChangeBuffer({trackRemovals:!0});s=t.Ms;const c=[];e.targetChanges.forEach((f,m)=>{const _=s.get(m);if(!_)return;c.push(t.Pi.removeMatchingKeys(i,f.removedDocuments,m).next(()=>t.Pi.addMatchingKeys(i,f.addedDocuments,m)));let b=_.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?b=b.withResumeToken(Ne.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):f.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(f.resumeToken,r)),s=s.insert(m,b),function(x,A,N){return x.resumeToken.approximateByteSize()===0||A.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=AE?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(_,b,f)&&c.push(t.Pi.updateTargetData(i,b))});let u=Pt(),h=ne();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(CE(i,a,e.documentUpdates).next(f=>{u=f.ks,h=f.qs})),!r.isEqual(J.min())){const f=t.Pi.getLastRemoteSnapshotVersion(i).next(m=>t.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return V.waitFor(c).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(t.Ms=s,i))}function CE(n,e,t){let r=ne(),s=ne();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=Pt();return t.forEach((c,u)=>{const h=i.get(c);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual(J.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):U(tc,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",u.version)}),{ks:a,qs:s}})}function PE(n,e){const t=Y(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=$a),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function kE(n,e){const t=Y(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Pi.getTargetData(r,e).next(i=>i?(s=i,V.resolve(s)):t.Pi.allocateTargetId(r).next(a=>(s=new qt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.xs.set(e,r.targetId)),r})}async function wa(n,e,t){const r=Y(n),s=r.Ms.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!fr(a))throw a;U(tc,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function Wu(n,e,t){const r=Y(n);let s=J.min(),i=ne();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,h,f){const m=Y(u),_=m.xs.get(f);return _!==void 0?V.resolve(m.Ms.get(_)):m.Pi.getTargetData(h,f)}(r,a,dt(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,c.targetId).next(u=>{i=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(a,e,t?s:J.min(),t?i:ne())).next(c=>(DE(r,gv(e),c),{documents:c,Qs:i})))}function DE(n,e,t){let r=n.Os.get(e)||J.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Os.set(e,r)}class Hu{constructor(){this.activeTargetIds=Iv()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class VE{constructor(){this.Mo=new Hu,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Hu,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class NE{Oo(e){}shutdown(){}}/**
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
 */const Gu="ConnectivityMonitor";class Ku{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){U(Gu,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){U(Gu,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Hs=null;function Ia(){return Hs===null?Hs=function(){return 268435456+Math.round(2147483648*Math.random())}():Hs++,"0x"+Hs.toString(16)}/**
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
 */const Ko="RestConnection",OE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class ME{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===hi?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,t,r,s,i){const a=Ia(),c=this.zo(e,t.toUriEncodedString());U(Ko,`Sending RPC '${e}' ${a}:`,c,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,s,i);const{host:h}=new URL(c),f=lr(h);return this.Jo(e,c,u,r,f).then(m=>(U(Ko,`Received RPC '${e}' ${a}: `,m),m),m=>{throw er(Ko,`RPC '${e}' ${a} failed with error: `,m,"url: ",c,"request:",r),m})}Ho(e,t,r,s,i,a){return this.Go(e,t,r,s,i)}jo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+hr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,t){const r=OE[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
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
 */class LE{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const Fe="WebChannelConnection";class FE extends ME{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,s,i){const a=Ia();return new Promise((c,u)=>{const h=new od;h.setWithCredentials(!0),h.listenOnce(ad.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Js.NO_ERROR:const m=h.getResponseJson();U(Fe,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(m)),c(m);break;case Js.TIMEOUT:U(Fe,`RPC '${e}' ${a} timed out`),u(new F(D.DEADLINE_EXCEEDED,"Request time out"));break;case Js.HTTP_ERROR:const _=h.getStatus();if(U(Fe,`RPC '${e}' ${a} failed with status:`,_,"response text:",h.getResponseText()),_>0){let b=h.getResponseJson();Array.isArray(b)&&(b=b[0]);const P=b==null?void 0:b.error;if(P&&P.status&&P.message){const x=function(N){const M=N.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(M)>=0?M:D.UNKNOWN}(P.status);u(new F(x,P.message))}else u(new F(D.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new F(D.UNAVAILABLE,"Connection failed."));break;default:H(9055,{l_:e,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{U(Fe,`RPC '${e}' ${a} completed.`)}});const f=JSON.stringify(s);U(Fe,`RPC '${e}' ${a} sending request:`,s),h.send(t,"POST",f,r,15)})}T_(e,t,r){const s=Ia(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=ud(),c=ld(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const f=i.join("");U(Fe,`Creating RPC '${e}' stream ${s}: ${f}`,u);const m=a.createWebChannel(f,u);this.I_(m);let _=!1,b=!1;const P=new LE({Yo:A=>{b?U(Fe,`Not sending because RPC '${e}' stream ${s} is closed:`,A):(_||(U(Fe,`Opening RPC '${e}' stream ${s} transport.`),m.open(),_=!0),U(Fe,`RPC '${e}' stream ${s} sending:`,A),m.send(A))},Zo:()=>m.close()}),x=(A,N,M)=>{A.listen(N,j=>{try{M(j)}catch($){setTimeout(()=>{throw $},0)}})};return x(m,Or.EventType.OPEN,()=>{b||(U(Fe,`RPC '${e}' stream ${s} transport opened.`),P.o_())}),x(m,Or.EventType.CLOSE,()=>{b||(b=!0,U(Fe,`RPC '${e}' stream ${s} transport closed`),P.a_(),this.E_(m))}),x(m,Or.EventType.ERROR,A=>{b||(b=!0,er(Fe,`RPC '${e}' stream ${s} transport errored. Name:`,A.name,"Message:",A.message),P.a_(new F(D.UNAVAILABLE,"The operation could not be completed")))}),x(m,Or.EventType.MESSAGE,A=>{var N;if(!b){const M=A.data[0];ue(!!M,16349);const j=M,$=(j==null?void 0:j.error)||((N=j[0])==null?void 0:N.error);if($){U(Fe,`RPC '${e}' stream ${s} received error:`,$);const re=$.status;let ae=function(E){const T=Ee[E];if(T!==void 0)return Wd(T)}(re),S=$.message;ae===void 0&&(ae=D.INTERNAL,S="Unknown error status: "+re+" with message "+$.message),b=!0,P.a_(new F(ae,S)),m.close()}else U(Fe,`RPC '${e}' stream ${s} received:`,M),P.u_(M)}}),x(c,cd.STAT_EVENT,A=>{A.stat===ua.PROXY?U(Fe,`RPC '${e}' stream ${s} detected buffering proxy`):A.stat===ua.NOPROXY&&U(Fe,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.__()},0),P}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}function Qo(){return typeof document<"u"?document:null}/**
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
 */function Ki(n){return new $v(n,!0)}/**
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
 */class of{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&U("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Qu="PersistentStream";class af{constructor(e,t,r,s,i,a,c,u){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new of(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===D.RESOURCE_EXHAUSTED?(Ct(t.toString()),Ct("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===t&&this.G_(r,s)},r=>{e(()=>{const s=new F(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return U(Qu,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(U(Qu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class jE extends af{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Wv(this.serializer,e),r=function(i){if(!("targetChange"in i))return J.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?J.min():a.readTime?ft(a.readTime):J.min()}(e);return this.listener.H_(t,r)}Y_(e){const t={};t.database=Ea(this.serializer),t.addTarget=function(i,a){let c;const u=a.target;if(c=ma(u)?{documents:Kv(i,u)}:{query:Qv(i,u).ft},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Kd(i,a.resumeToken);const h=ya(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(J.min())>0){c.readTime=gi(i,a.snapshotVersion.toTimestamp());const h=ya(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=Yv(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){const t={};t.database=Ea(this.serializer),t.removeTarget=e,this.q_(t)}}class UE extends af{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return ue(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ue(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ue(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=Gv(e.writeResults,e.commitTime),r=ft(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=Ea(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Hv(this.serializer,r))};this.q_(t)}}/**
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
 */class BE{}class $E extends BE{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new F(D.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Go(e,_a(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new F(D.UNKNOWN,i.toString())})}Ho(e,t,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Ho(e,_a(t,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new F(D.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class zE{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Ct(t),this.aa=!1):U("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Pn="RemoteStore";class qE{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(a=>{r.enqueueAndForget(async()=>{Nn(this)&&(U(Pn,"Restarting streams for network reachability change."),await async function(u){const h=Y(u);h.Ea.add(4),await fs(h),h.Ra.set("Unknown"),h.Ea.delete(4),await Qi(h)}(this))})}),this.Ra=new zE(r,s)}}async function Qi(n){if(Nn(n))for(const e of n.da)await e(!0)}async function fs(n){for(const e of n.da)await e(!1)}function cf(n,e){const t=Y(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),ic(t)?sc(t):mr(t).O_()&&rc(t,e))}function nc(n,e){const t=Y(n),r=mr(t);t.Ia.delete(e),r.O_()&&lf(t,e),t.Ia.size===0&&(r.O_()?r.L_():Nn(t)&&t.Ra.set("Unknown"))}function rc(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}mr(n).Y_(e)}function lf(n,e){n.Va.Ue(e),mr(n).Z_(e)}function sc(n){n.Va=new Fv({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),mr(n).start(),n.Ra.ua()}function ic(n){return Nn(n)&&!mr(n).x_()&&n.Ia.size>0}function Nn(n){return Y(n).Ea.size===0}function uf(n){n.Va=void 0}async function WE(n){n.Ra.set("Online")}async function HE(n){n.Ia.forEach((e,t)=>{rc(n,e)})}async function GE(n,e){uf(n),ic(n)?(n.Ra.ha(e),sc(n)):n.Ra.set("Unknown")}async function KE(n,e,t){if(n.Ra.set("Online"),e instanceof Gd&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ia.delete(c),s.Va.removeTarget(c))}(n,e)}catch(r){U(Pn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await _i(n,r)}else if(e instanceof ei?n.Va.Ze(e):e instanceof Hd?n.Va.st(e):n.Va.tt(e),!t.isEqual(J.min()))try{const r=await sf(n.localStore);t.compareTo(r)>=0&&await function(i,a){const c=i.Va.Tt(a);return c.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.Ia.get(h);f&&i.Ia.set(h,f.withResumeToken(u.resumeToken,a))}}),c.targetMismatches.forEach((u,h)=>{const f=i.Ia.get(u);if(!f)return;i.Ia.set(u,f.withResumeToken(Ne.EMPTY_BYTE_STRING,f.snapshotVersion)),lf(i,u);const m=new qt(f.target,u,h,f.sequenceNumber);rc(i,m)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){U(Pn,"Failed to raise snapshot:",r),await _i(n,r)}}async function _i(n,e,t){if(!fr(e))throw e;n.Ea.add(1),await fs(n),n.Ra.set("Offline"),t||(t=()=>sf(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{U(Pn,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Qi(n)})}function hf(n,e){return e().catch(t=>_i(n,t,e))}async function Ji(n){const e=Y(n),t=nn(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:$a;for(;QE(e);)try{const s=await PE(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,JE(e,s)}catch(s){await _i(e,s)}df(e)&&ff(e)}function QE(n){return Nn(n)&&n.Ta.length<10}function JE(n,e){n.Ta.push(e);const t=nn(n);t.O_()&&t.X_&&t.ea(e.mutations)}function df(n){return Nn(n)&&!nn(n).x_()&&n.Ta.length>0}function ff(n){nn(n).start()}async function YE(n){nn(n).ra()}async function XE(n){const e=nn(n);for(const t of n.Ta)e.ea(t.mutations)}async function ZE(n,e,t){const r=n.Ta.shift(),s=Qa.from(r,e,t);await hf(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Ji(n)}async function ew(n,e){e&&nn(n).X_&&await async function(r,s){if(function(a){return Ov(a)&&a!==D.ABORTED}(s.code)){const i=r.Ta.shift();nn(r).B_(),await hf(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ji(r)}}(n,e),df(n)&&ff(n)}async function Ju(n,e){const t=Y(n);t.asyncQueue.verifyOperationInProgress(),U(Pn,"RemoteStore received new credentials");const r=Nn(t);t.Ea.add(3),await fs(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Qi(t)}async function tw(n,e){const t=Y(n);e?(t.Ea.delete(2),await Qi(t)):e||(t.Ea.add(2),await fs(t),t.Ra.set("Unknown"))}function mr(n){return n.ma||(n.ma=function(t,r,s){const i=Y(t);return i.sa(),new jE(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Xo:WE.bind(null,n),t_:HE.bind(null,n),r_:GE.bind(null,n),H_:KE.bind(null,n)}),n.da.push(async e=>{e?(n.ma.B_(),ic(n)?sc(n):n.Ra.set("Unknown")):(await n.ma.stop(),uf(n))})),n.ma}function nn(n){return n.fa||(n.fa=function(t,r,s){const i=Y(t);return i.sa(),new UE(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:YE.bind(null,n),r_:ew.bind(null,n),ta:XE.bind(null,n),na:ZE.bind(null,n)}),n.da.push(async e=>{e?(n.fa.B_(),await Ji(n)):(await n.fa.stop(),n.Ta.length>0&&(U(Pn,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
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
 */class oc{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new St,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new oc(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ac(n,e){if(Ct("AsyncQueue",`${e}: ${n}`),fr(n))return new F(D.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Gn{static emptySet(e){return new Gn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||q.comparator(t.key,r.key):(t,r)=>q.comparator(t.key,r.key),this.keyedMap=Mr(),this.sortedSet=new me(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Gn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Gn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Yu{constructor(){this.ga=new me(q.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):H(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,r)=>{e.push(r)}),e}}class ir{constructor(e,t,r,s,i,a,c,u,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new ir(e,t,Gn.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&zi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class nw{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class rw{constructor(){this.queries=Xu(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const s=Y(t),i=s.queries;s.queries=Xu(),i.forEach((a,c)=>{for(const u of c.Sa)u.onError(r)})})(this,new F(D.ABORTED,"Firestore shutting down"))}}function Xu(){return new Vn(n=>Vd(n),zi)}async function cc(n,e){const t=Y(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new nw,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await t.onListen(s,!0);break;case 1:i.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=ac(a,`Initialization of query '${qn(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&uc(t)}async function lc(n,e){const t=Y(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.Sa.indexOf(e);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function sw(n,e){const t=Y(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.Sa)c.Fa(s)&&(r=!0);a.wa=s}}r&&uc(t)}function iw(n,e,t){const r=Y(n),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(t);r.queries.delete(e)}function uc(n){n.Ca.forEach(e=>{e.next()})}var Ta,Zu;(Zu=Ta||(Ta={})).Ma="default",Zu.Cache="cache";class hc{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ir(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=ir.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Ta.Cache}}/**
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
 */class pf{constructor(e){this.key=e}}class mf{constructor(e){this.key=e}}class ow{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=ne(),this.mutatedKeys=ne(),this.eu=Nd(e),this.tu=new Gn(this.eu)}get nu(){return this.Ya}ru(e,t){const r=t?t.iu:new Yu,s=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,m)=>{const _=s.get(f),b=qi(this.query,m)?m:null,P=!!_&&this.mutatedKeys.has(_.key),x=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let A=!1;_&&b?_.data.isEqual(b.data)?P!==x&&(r.track({type:3,doc:b}),A=!0):this.su(_,b)||(r.track({type:2,doc:b}),A=!0,(u&&this.eu(b,u)>0||h&&this.eu(b,h)<0)&&(c=!0)):!_&&b?(r.track({type:0,doc:b}),A=!0):_&&!b&&(r.track({type:1,doc:_}),A=!0,(u||h)&&(c=!0)),A&&(b?(a=a.add(b),i=x?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:a,iu:r,Cs:c,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort((f,m)=>function(b,P){const x=A=>{switch(A){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return H(20277,{Rt:A})}};return x(b)-x(P)}(f.type,m.type)||this.eu(f.doc,m.doc)),this.ou(r),s=s??!1;const c=t&&!s?this._u():[],u=this.Xa.size===0&&this.current&&!s?1:0,h=u!==this.Za;return this.Za=u,a.length!==0||h?{snapshot:new ir(this.query,e.tu,i,a,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Yu,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Ya=this.Ya.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ya=this.Ya.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=ne(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const t=[];return e.forEach(r=>{this.Xa.has(r)||t.push(new mf(r))}),this.Xa.forEach(r=>{e.has(r)||t.push(new pf(r))}),t}cu(e){this.Ya=e.Qs,this.Xa=ne();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return ir.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const dc="SyncEngine";class aw{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class cw{constructor(e){this.key=e,this.hu=!1}}class lw{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Vn(c=>Vd(c),zi),this.Iu=new Map,this.Eu=new Set,this.du=new me(q.comparator),this.Au=new Map,this.Ru=new Xa,this.Vu={},this.mu=new Map,this.fu=sr.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function uw(n,e,t=!0){const r=wf(n);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await gf(r,e,t,!0),s}async function hw(n,e){const t=wf(n);await gf(t,e,!0,!1)}async function gf(n,e,t,r){const s=await kE(n.localStore,dt(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await dw(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&cf(n.remoteStore,s),c}async function dw(n,e,t,r,s){n.pu=(m,_,b)=>async function(x,A,N,M){let j=A.view.ru(N);j.Cs&&(j=await Wu(x.localStore,A.query,!1).then(({documents:S})=>A.view.ru(S,j)));const $=M&&M.targetChanges.get(A.targetId),re=M&&M.targetMismatches.get(A.targetId)!=null,ae=A.view.applyChanges(j,x.isPrimaryClient,$,re);return th(x,A.targetId,ae.au),ae.snapshot}(n,m,_,b);const i=await Wu(n.localStore,e,!0),a=new ow(e,i.Qs),c=a.ru(i.documents),u=ds.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(c,n.isPrimaryClient,u);th(n,t,h.au);const f=new aw(e,t,a);return n.Tu.set(e,f),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),h.snapshot}async function fw(n,e,t){const r=Y(n),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(a=>!zi(a,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await wa(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&nc(r.remoteStore,s.targetId),Aa(r,s.targetId)}).catch(dr)):(Aa(r,s.targetId),await wa(r.localStore,s.targetId,!0))}async function pw(n,e){const t=Y(n),r=t.Tu.get(e),s=t.Iu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),nc(t.remoteStore,r.targetId))}async function mw(n,e,t){const r=Iw(n);try{const s=await function(a,c){const u=Y(a),h=ce.now(),f=c.reduce((b,P)=>b.add(P.key),ne());let m,_;return u.persistence.runTransaction("Locally write mutations","readwrite",b=>{let P=Pt(),x=ne();return u.Ns.getEntries(b,f).next(A=>{P=A,P.forEach((N,M)=>{M.isValidDocument()||(x=x.add(N))})}).next(()=>u.localDocuments.getOverlayedDocuments(b,P)).next(A=>{m=A;const N=[];for(const M of c){const j=Pv(M,m.get(M.key).overlayedDocument);j!=null&&N.push(new on(M.key,j,bd(j.value.mapValue),Ze.exists(!0)))}return u.mutationQueue.addMutationBatch(b,h,N,c)}).next(A=>{_=A;const N=A.applyToLocalDocumentSet(m,x);return u.documentOverlayCache.saveOverlays(b,A.batchId,N)})}).then(()=>({batchId:_.batchId,changes:Md(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,u){let h=a.Vu[a.currentUser.toKey()];h||(h=new me(te)),h=h.insert(c,u),a.Vu[a.currentUser.toKey()]=h}(r,s.batchId,t),await ps(r,s.changes),await Ji(r.remoteStore)}catch(s){const i=ac(s,"Failed to persist write");t.reject(i)}}async function yf(n,e){const t=Y(n);try{const r=await xE(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Au.get(i);a&&(ue(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?ue(a.hu,14607):s.removedDocuments.size>0&&(ue(a.hu,42227),a.hu=!1))}),await ps(t,r,e)}catch(r){await dr(r)}}function eh(n,e,t){const r=Y(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tu.forEach((i,a)=>{const c=a.view.va(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const u=Y(a);u.onlineState=c;let h=!1;u.queries.forEach((f,m)=>{for(const _ of m.Sa)_.va(c)&&(h=!0)}),h&&uc(u)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function gw(n,e,t){const r=Y(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Au.get(e),i=s&&s.key;if(i){let a=new me(q.comparator);a=a.insert(i,Ue.newNoDocument(i,J.min()));const c=ne().add(i),u=new Gi(J.min(),new Map,new me(te),a,c);await yf(r,u),r.du=r.du.remove(i),r.Au.delete(e),fc(r)}else await wa(r.localStore,e,!1).then(()=>Aa(r,e,t)).catch(dr)}async function yw(n,e){const t=Y(n),r=e.batch.batchId;try{const s=await RE(t.localStore,e);vf(t,r,null),_f(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ps(t,s)}catch(s){await dr(s)}}async function _w(n,e,t){const r=Y(n);try{const s=await function(a,c){const u=Y(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,c).next(m=>(ue(m!==null,37113),f=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);vf(r,e,t),_f(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ps(r,s)}catch(s){await dr(s)}}function _f(n,e){(n.mu.get(e)||[]).forEach(t=>{t.resolve()}),n.mu.delete(e)}function vf(n,e,t){const r=Y(n);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function Aa(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach(r=>{n.Ru.containsKey(r)||Ef(n,r)})}function Ef(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(nc(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),fc(n))}function th(n,e,t){for(const r of t)r instanceof pf?(n.Ru.addReference(r.key,e),vw(n,r)):r instanceof mf?(U(dc,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||Ef(n,r.key)):H(19791,{wu:r})}function vw(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Eu.has(r)||(U(dc,"New document in limbo: "+t),n.Eu.add(r),fc(n))}function fc(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new q(de.fromString(e)),r=n.fu.next();n.Au.set(r,new cw(t)),n.du=n.du.insert(t,r),cf(n.remoteStore,new qt(dt($i(t.path)),r,"TargetPurposeLimboResolution",ji.ce))}}async function ps(n,e,t){const r=Y(n),s=[],i=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach((c,u)=>{a.push(r.pu(u,e,t).then(h=>{var f;if((h||t)&&r.isPrimaryClient){const m=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){s.push(h);const m=ec.As(u.targetId,h);i.push(m)}}))}),await Promise.all(a),r.Pu.H_(s),await async function(u,h){const f=Y(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>V.forEach(h,_=>V.forEach(_.Es,b=>f.persistence.referenceDelegate.addReference(m,_.targetId,b)).next(()=>V.forEach(_.ds,b=>f.persistence.referenceDelegate.removeReference(m,_.targetId,b)))))}catch(m){if(!fr(m))throw m;U(tc,"Failed to update sequence numbers: "+m)}for(const m of h){const _=m.targetId;if(!m.fromCache){const b=f.Ms.get(_),P=b.snapshotVersion,x=b.withLastLimboFreeSnapshotVersion(P);f.Ms=f.Ms.insert(_,x)}}}(r.localStore,i))}async function Ew(n,e){const t=Y(n);if(!t.currentUser.isEqual(e)){U(dc,"User change. New user:",e.toKey());const r=await rf(t.localStore,e);t.currentUser=e,function(i,a){i.mu.forEach(c=>{c.forEach(u=>{u.reject(new F(D.CANCELLED,a))})}),i.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ps(t,r.Ls)}}function ww(n,e){const t=Y(n),r=t.Au.get(e);if(r&&r.hu)return ne().add(r.key);{let s=ne();const i=t.Iu.get(e);if(!i)return s;for(const a of i){const c=t.Tu.get(a);s=s.unionWith(c.view.nu)}return s}}function wf(n){const e=Y(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=yf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ww.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=gw.bind(null,e),e.Pu.H_=sw.bind(null,e.eventManager),e.Pu.yu=iw.bind(null,e.eventManager),e}function Iw(n){const e=Y(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=yw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=_w.bind(null,e),e}class vi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ki(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return SE(this.persistence,new TE,e.initialUser,this.serializer)}Cu(e){return new nf(Za.mi,this.serializer)}Du(e){return new VE}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}vi.provider={build:()=>new vi};class Tw extends vi{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){ue(this.persistence.referenceDelegate instanceof yi,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new cE(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?We.withCacheSize(this.cacheSizeBytes):We.DEFAULT;return new nf(r=>yi.mi(r,t),this.serializer)}}class ba{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>eh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ew.bind(null,this.syncEngine),await tw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new rw}()}createDatastore(e){const t=Ki(e.databaseInfo.databaseId),r=function(i){return new FE(i)}(e.databaseInfo);return function(i,a,c,u){return new $E(i,a,c,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,c){return new qE(r,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>eh(this.syncEngine,t,0),function(){return Ku.v()?new Ku:new NE}())}createSyncEngine(e,t){return function(s,i,a,c,u,h,f){const m=new lw(s,i,a,c,u,h);return f&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=Y(s);U(Pn,"RemoteStore shutting down."),i.Ea.add(5),await fs(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}ba.provider={build:()=>new ba};/**
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
 */class pc{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Ct("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const rn="FirestoreClient";class Aw{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=je.UNAUTHENTICATED,this.clientId=Ba.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{U(rn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(U(rn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new St;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=ac(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Jo(n,e){n.asyncQueue.verifyOperationInProgress(),U(rn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await rf(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function nh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await bw(n);U(rn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Ju(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Ju(e.remoteStore,s)),n._onlineComponents=e}async function bw(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){U(rn,"Using user provided OfflineComponentProvider");try{await Jo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===D.FAILED_PRECONDITION||s.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;er("Error using user provided cache. Falling back to memory cache: "+t),await Jo(n,new vi)}}else U(rn,"Using default OfflineComponentProvider"),await Jo(n,new Tw(void 0));return n._offlineComponents}async function If(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(U(rn,"Using user provided OnlineComponentProvider"),await nh(n,n._uninitializedComponentsProvider._online)):(U(rn,"Using default OnlineComponentProvider"),await nh(n,new ba))),n._onlineComponents}function Sw(n){return If(n).then(e=>e.syncEngine)}async function Ei(n){const e=await If(n),t=e.eventManager;return t.onListen=uw.bind(null,e.syncEngine),t.onUnlisten=fw.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=hw.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=pw.bind(null,e.syncEngine),t}function Rw(n,e,t={}){const r=new St;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,u,h){const f=new pc({next:_=>{f.Nu(),a.enqueueAndForget(()=>lc(i,m));const b=_.docs.has(c);!b&&_.fromCache?h.reject(new F(D.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&_.fromCache&&u&&u.source==="server"?h.reject(new F(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(_)},error:_=>h.reject(_)}),m=new hc($i(c.path),f,{includeMetadataChanges:!0,qa:!0});return cc(i,m)}(await Ei(n),n.asyncQueue,e,t,r)),r.promise}function xw(n,e,t={}){const r=new St;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,u,h){const f=new pc({next:_=>{f.Nu(),a.enqueueAndForget(()=>lc(i,m)),_.fromCache&&u.source==="server"?h.reject(new F(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(_)},error:_=>h.reject(_)}),m=new hc(c,f,{includeMetadataChanges:!0,qa:!0});return cc(i,m)}(await Ei(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function Tf(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const rh=new Map;/**
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
 */const Af="firestore.googleapis.com",sh=!0;class ih{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new F(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Af,this.ssl=sh}else this.host=e.host,this.ssl=e.ssl??sh;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=tf;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<oE)throw new F(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}z_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Tf(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new F(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new F(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new F(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Yi{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ih({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new F(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new F(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ih(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new V_;switch(r.type){case"firstParty":return new L_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new F(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=rh.get(t);r&&(U("ComponentProvider","Removing Datastore"),rh.delete(t),r.terminate())}(this),Promise.resolve()}}function Cw(n,e,t,r={}){var h;n=Ge(n,Yi);const s=lr(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;s&&(Zh(`https://${c}`),ed("Firestore",!0)),i.host!==Af&&i.host!==c&&er("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:c,ssl:s,emulatorOptions:r};if(!Rn(u,a)&&(n._setSettings(u),r.mockUserToken)){let f,m;if(typeof r.mockUserToken=="string")f=r.mockUserToken,m=je.MOCK_USER;else{f=sy(r.mockUserToken,(h=n._app)==null?void 0:h.options.projectId);const _=r.mockUserToken.sub||r.mockUserToken.user_id;if(!_)throw new F(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new je(_)}n._authCredentials=new N_(new dd(f,m))}}/**
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
 */class Ot{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ot(this.firestore,e,this._query)}}class ye{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ye(this.firestore,e,this._key)}toJSON(){return{type:ye._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(us(t,ye._jsonSchema))return new ye(e,r||null,new q(de.fromString(t.referencePath)))}}ye._jsonSchemaVersion="firestore/documentReference/1.0",ye._jsonSchema={type:Te("string",ye._jsonSchemaVersion),referencePath:Te("string")};class Qt extends Ot{constructor(e,t,r){super(e,t,$i(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ye(this.firestore,null,new q(e))}withConverter(e){return new Qt(this.firestore,e,this._path)}}function kt(n,e,...t){if(n=Pe(n),fd("collection","path",e),n instanceof Yi){const r=de.fromString(e,...t);return _u(r),new Qt(n,null,r)}{if(!(n instanceof ye||n instanceof Qt))throw new F(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(de.fromString(e,...t));return _u(r),new Qt(n.firestore,null,r)}}function Ke(n,e,...t){if(n=Pe(n),arguments.length===1&&(e=Ba.newId()),fd("doc","path",e),n instanceof Yi){const r=de.fromString(e,...t);return yu(r),new ye(n,null,new q(r))}{if(!(n instanceof ye||n instanceof Qt))throw new F(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(de.fromString(e,...t));return yu(r),new ye(n.firestore,n instanceof Qt?n.converter:null,new q(r))}}/**
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
 */const oh="AsyncQueue";class ah{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new of(this,"async_queue_retry"),this._c=()=>{const r=Qo();r&&U(oh,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=Qo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Qo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new St;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!fr(e))throw e;U(oh,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Ct("INTERNAL UNHANDLED ERROR: ",ch(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=oc.createAndSchedule(this,e,t,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&H(47125,{Pc:ch(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function ch(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function lh(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class Dt extends Yi{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new ah,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ah(e),this._firestoreClient=void 0,await e}}}function Pw(n,e){const t=typeof n=="object"?n:Ur(),r=typeof n=="string"?n:e||hi,s=ja(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=ny("firestore");i&&Cw(s,...i)}return s}function Xi(n){if(n._terminated)throw new F(D.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||kw(n),n._firestoreClient}function kw(n){var r,s,i;const e=n._freezeSettings(),t=function(c,u,h,f){return new tv(c,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Tf(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,e);n._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new Aw(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}}(n._componentsProvider))}/**
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
 */class Xe{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xe(Ne.fromBase64String(e))}catch(t){throw new F(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Xe(Ne.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Xe._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(us(e,Xe._jsonSchema))return Xe.fromBase64String(e.bytes)}}Xe._jsonSchemaVersion="firestore/bytes/1.0",Xe._jsonSchema={type:Te("string",Xe._jsonSchemaVersion),bytes:Te("string")};/**
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
 */class Zi{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new F(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ve(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class pt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new F(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new F(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return te(this._lat,e._lat)||te(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:pt._jsonSchemaVersion}}static fromJSON(e){if(us(e,pt._jsonSchema))return new pt(e.latitude,e.longitude)}}pt._jsonSchemaVersion="firestore/geoPoint/1.0",pt._jsonSchema={type:Te("string",pt._jsonSchemaVersion),latitude:Te("number"),longitude:Te("number")};/**
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
 */class mt{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:mt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(us(e,mt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new mt(e.vectorValues);throw new F(D.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}mt._jsonSchemaVersion="firestore/vectorValue/1.0",mt._jsonSchema={type:Te("string",mt._jsonSchemaVersion),vectorValues:Te("object")};/**
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
 */const Dw=/^__.*__$/;class Vw{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new on(e,this.data,this.fieldMask,t,this.fieldTransforms):new hs(e,this.data,t,this.fieldTransforms)}}class bf{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new on(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Sf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw H(40011,{Ac:n})}}class mc{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new mc({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return wi(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Sf(this.Ac)&&Dw.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class Nw{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ki(e)}Cc(e,t,r,s=!1){return new mc({Ac:e,methodName:t,Dc:r,path:Ve.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function to(n){const e=n._freezeSettings(),t=Ki(n._databaseId);return new Nw(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Rf(n,e,t,r,s,i={}){const a=n.Cc(i.merge||i.mergeFields?2:0,e,t,s);yc("Data must be an object, but it was:",a,r);const c=xf(r,a);let u,h;if(i.merge)u=new Je(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const _=Sa(e,m,t);if(!a.contains(_))throw new F(D.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);Pf(f,_)||f.push(_)}u=new Je(f),h=a.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=a.fieldTransforms;return new Vw(new He(c),u,h)}class no extends eo{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof no}}class gc extends eo{_toFieldTransform(e){return new Sv(e.path,new rs)}isEqual(e){return e instanceof gc}}function Ow(n,e,t,r){const s=n.Cc(1,e,t);yc("Data must be an object, but it was:",s,r);const i=[],a=He.empty();sn(r,(u,h)=>{const f=_c(e,u,t);h=Pe(h);const m=s.yc(f);if(h instanceof no)i.push(f);else{const _=ms(h,m);_!=null&&(i.push(f),a.set(f,_))}});const c=new Je(i);return new bf(a,c,s.fieldTransforms)}function Mw(n,e,t,r,s,i){const a=n.Cc(1,e,t),c=[Sa(e,r,t)],u=[s];if(i.length%2!=0)throw new F(D.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<i.length;_+=2)c.push(Sa(e,i[_])),u.push(i[_+1]);const h=[],f=He.empty();for(let _=c.length-1;_>=0;--_)if(!Pf(h,c[_])){const b=c[_];let P=u[_];P=Pe(P);const x=a.yc(b);if(P instanceof no)h.push(b);else{const A=ms(P,x);A!=null&&(h.push(b),f.set(b,A))}}const m=new Je(h);return new bf(f,m,a.fieldTransforms)}function Lw(n,e,t,r=!1){return ms(t,n.Cc(r?4:3,e))}function ms(n,e){if(Cf(n=Pe(n)))return yc("Unsupported field value:",e,n),xf(n,e);if(n instanceof eo)return function(r,s){if(!Sf(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const c of r){let u=ms(c,s.wc(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=Pe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Tv(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ce.fromDate(r);return{timestampValue:gi(s.serializer,i)}}if(r instanceof ce){const i=new ce(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:gi(s.serializer,i)}}if(r instanceof pt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Xe)return{bytesValue:Kd(s.serializer,r._byteString)};if(r instanceof ye){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ya(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof mt)return function(a,c){return{mapValue:{fields:{[Id]:{stringValue:Ad},[di]:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw c.Sc("VectorValues must only contain numeric values.");return Ga(c.serializer,h)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${Fi(r)}`)}(n,e)}function xf(n,e){const t={};return gd(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):sn(n,(r,s)=>{const i=ms(s,e.mc(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Cf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ce||n instanceof pt||n instanceof Xe||n instanceof ye||n instanceof eo||n instanceof mt)}function yc(n,e,t){if(!Cf(t)||!pd(t)){const r=Fi(t);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function Sa(n,e,t){if((e=Pe(e))instanceof Zi)return e._internalPath;if(typeof e=="string")return _c(n,e);throw wi("Field path arguments must be of type string or ",n,!1,void 0,t)}const Fw=new RegExp("[~\\*/\\[\\]]");function _c(n,e,t){if(e.search(Fw)>=0)throw wi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Zi(...e.split("."))._internalPath}catch{throw wi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function wi(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new F(D.INVALID_ARGUMENT,c+n+u)}function Pf(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class kf{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ye(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new jw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ro("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class jw extends kf{data(){return super.data()}}function ro(n,e){return typeof e=="string"?_c(n,e):e instanceof Zi?e._internalPath:e._delegate._internalPath}/**
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
 */function Df(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new F(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class vc{}class Ec extends vc{}function Jt(n,e,...t){let r=[];e instanceof vc&&r.push(e),r=r.concat(t),function(i){const a=i.filter(u=>u instanceof wc).length,c=i.filter(u=>u instanceof so).length;if(a>1||a>0&&c>0)throw new F(D.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class so extends Ec{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new so(e,t,r)}_apply(e){const t=this._parse(e);return Nf(e._query,t),new Ot(e.firestore,e.converter,ga(e._query,t))}_parse(e){const t=to(e.firestore);return function(i,a,c,u,h,f,m){let _;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new F(D.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){hh(m,f);const P=[];for(const x of m)P.push(uh(u,i,x));_={arrayValue:{values:P}}}else _=uh(u,i,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||hh(m,f),_=Lw(c,a,m,f==="in"||f==="not-in");return Ie.create(h,f,_)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Tt(n,e,t){const r=e,s=ro("where",n);return so._create(s,r,t)}class wc extends vc{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new wc(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:at.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const c=i.getFlattenedFilters();for(const u of c)Nf(a,u),a=ga(a,u)}(e._query,t),new Ot(e.firestore,e.converter,ga(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ic extends Ec{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Ic(e,t)}_apply(e){const t=function(s,i,a){if(s.startAt!==null)throw new F(D.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new F(D.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ns(i,a)}(e._query,this._field,this._direction);return new Ot(e.firestore,e.converter,function(s,i){const a=s.explicitOrderBy.concat([i]);return new pr(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function Vf(n,e="asc"){const t=e,r=ro("orderBy",n);return Ic._create(r,t)}class Tc extends Ec{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Tc(e,t,r)}_apply(e){return new Ot(e.firestore,e.converter,pi(e._query,this._limit,this._limitType))}}function uA(n){return q_("limit",n),Tc._create("limit",n,"F")}function uh(n,e,t){if(typeof(t=Pe(t))=="string"){if(t==="")throw new F(D.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Dd(e)&&t.indexOf("/")!==-1)throw new F(D.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(de.fromString(t));if(!q.isDocumentKey(r))throw new F(D.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Su(n,new q(r))}if(t instanceof ye)return Su(n,t._key);throw new F(D.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Fi(t)}.`)}function hh(n,e){if(!Array.isArray(n)||n.length===0)throw new F(D.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Nf(n,e){const t=function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new F(D.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new F(D.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Uw{convertValue(e,t="none"){switch(tn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(en(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw H(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return sn(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var r,s,i;const t=(i=(s=(r=e.fields)==null?void 0:r[di].arrayValue)==null?void 0:s.values)==null?void 0:i.map(a=>ve(a.doubleValue));return new mt(t)}convertGeoPoint(e){return new pt(ve(e.latitude),ve(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Bi(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Zr(e));default:return null}}convertTimestamp(e){const t=Zt(e);return new ce(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=de.fromString(e);ue(ef(r),9688,{name:e});const s=new es(r.get(1),r.get(3)),i=new q(r.popFirst(5));return s.isEqual(t)||Ct(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function Of(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class Fr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Tn extends kf{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ti(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(ro("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new F(D.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Tn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Tn._jsonSchemaVersion="firestore/documentSnapshot/1.0",Tn._jsonSchema={type:Te("string",Tn._jsonSchemaVersion),bundleSource:Te("string","DocumentSnapshot"),bundleName:Te("string"),bundle:Te("string")};class ti extends Tn{data(e={}){return super.data(e)}}class An{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Fr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new ti(this._firestore,this._userDataWriter,r.key,r,new Fr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new F(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const u=new ti(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Fr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const u=new ti(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Fr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),f=a.indexOf(c.doc.key)),{type:Bw(c.type),doc:u,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new F(D.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=An._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ba.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Bw(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return H(61501,{type:n})}}/**
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
 */function io(n){n=Ge(n,ye);const e=Ge(n.firestore,Dt);return Rw(Xi(e),n._key).then(t=>Lf(e,n,t))}An._jsonSchemaVersion="firestore/querySnapshot/1.0",An._jsonSchema={type:Te("string",An._jsonSchemaVersion),bundleSource:Te("string","QuerySnapshot"),bundleName:Te("string"),bundle:Te("string")};class Ac extends Uw{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xe(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ye(this.firestore,null,t)}}function or(n){n=Ge(n,Ot);const e=Ge(n.firestore,Dt),t=Xi(e),r=new Ac(e);return Df(n._query),xw(t,n._query).then(s=>new An(e,r,n,s))}function bc(n,e,t){n=Ge(n,ye);const r=Ge(n.firestore,Dt),s=Of(n.converter,e,t);return ao(r,[Rf(to(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Ze.none())])}function oo(n,e,t,...r){n=Ge(n,ye);const s=Ge(n.firestore,Dt),i=to(s);let a;return a=typeof(e=Pe(e))=="string"||e instanceof Zi?Mw(i,"updateDoc",n._key,e,t,r):Ow(i,"updateDoc",n._key,e),ao(s,[a.toMutation(n._key,Ze.exists(!0))])}function Mf(n){return ao(Ge(n.firestore,Dt),[new Ka(n._key,Ze.none())])}function Sc(n,e){const t=Ge(n.firestore,Dt),r=Ke(n),s=Of(n.converter,e);return ao(t,[Rf(to(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Ze.exists(!1))]).then(()=>r)}function $w(n,...e){var u,h,f;n=Pe(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||lh(e[r])||(t=e[r++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(lh(e[r])){const m=e[r];e[r]=(u=m.next)==null?void 0:u.bind(m),e[r+1]=(h=m.error)==null?void 0:h.bind(m),e[r+2]=(f=m.complete)==null?void 0:f.bind(m)}let i,a,c;if(n instanceof ye)a=Ge(n.firestore,Dt),c=$i(n._key.path),i={next:m=>{e[r]&&e[r](Lf(a,n,m))},error:e[r+1],complete:e[r+2]};else{const m=Ge(n,Ot);a=Ge(m.firestore,Dt),c=m._query;const _=new Ac(a);i={next:b=>{e[r]&&e[r](new An(a,_,m,b))},error:e[r+1],complete:e[r+2]},Df(n._query)}return function(_,b,P,x){const A=new pc(x),N=new hc(b,A,P);return _.asyncQueue.enqueueAndForget(async()=>cc(await Ei(_),N)),()=>{A.Nu(),_.asyncQueue.enqueueAndForget(async()=>lc(await Ei(_),N))}}(Xi(a),c,s,i)}function ao(n,e){return function(r,s){const i=new St;return r.asyncQueue.enqueueAndForget(async()=>mw(await Sw(r),s,i)),i.promise}(Xi(n),e)}function Lf(n,e,t){const r=t.docs.get(e._key),s=new Ac(n);return new Tn(n,s,e._key,r,new Fr(t.hasPendingWrites,t.fromCache),e.converter)}function Rc(){return new gc("serverTimestamp")}(function(e,t=!0){(function(s){hr=s})(ur),Zn(new xn("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new Dt(new O_(r.getProvider("auth-internal")),new F_(a,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new F(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new es(h.options.projectId,f)}(a,s),a);return i={useFetchStreams:t,...i},c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Gt(fu,pu,e),Gt(fu,pu,"esm2020")})();function Ff(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zw=Ff,jf=new cs("auth","Firebase",Ff());/**
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
 */const Ii=new La("@firebase/auth");function qw(n,...e){Ii.logLevel<=ee.WARN&&Ii.warn(`Auth (${ur}): ${n}`,...e)}function ni(n,...e){Ii.logLevel<=ee.ERROR&&Ii.error(`Auth (${ur}): ${n}`,...e)}/**
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
 */function _t(n,...e){throw Cc(n,...e)}function ot(n,...e){return Cc(n,...e)}function xc(n,e,t){const r={...zw(),[e]:t};return new cs("auth","Firebase",r).create(e,{appName:n.name})}function bn(n){return xc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ww(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&_t(n,"argument-error"),xc(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Cc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return jf.create(n,...e)}function Q(n,e,...t){if(!n)throw Cc(e,...t)}function At(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ni(e),new Error(e)}function Vt(n,e){n||At(e)}/**
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
 */function Ra(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function Hw(){return dh()==="http:"||dh()==="https:"}function dh(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */class gs{constructor(e,t){this.shortDelay=e,this.longDelay=t,Vt(t>e,"Short delay should be less than long delay!"),this.isMobile=ay()||hy()}get(){return Gw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Pc(n,e){Vt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Uf{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;At("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;At("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;At("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Jw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Yw=new gs(3e4,6e4);function kc(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function gr(n,e,t,r,s={}){return Bf(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=ls({key:n.config.apiKey,...a}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const h={method:e,headers:u,...i};return ly()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&lr(n.emulatorConfig.host)&&(h.credentials="include"),Uf.fetch()(await $f(n,n.config.apiHost,t,c),h)})}async function Bf(n,e,t){n._canInitEmulator=!1;const r={...Qw,...e};try{const s=new Zw(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Gs(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[u,h]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gs(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Gs(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw Gs(n,"user-disabled",a);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw xc(n,f,h);_t(n,f)}}catch(s){if(s instanceof Nt)throw s;_t(n,"network-request-failed",{message:String(s)})}}async function Xw(n,e,t,r,s={}){const i=await gr(n,e,t,r,s);return"mfaPendingCredential"in i&&_t(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function $f(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?Pc(n.config,s):`${n.config.apiScheme}://${s}`;return Jw.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class Zw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(ot(this.auth,"network-request-failed")),Yw.get())})}}function Gs(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=ot(n,e,r);return s.customData._tokenResponse=t,s}/**
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
 */async function eI(n,e){return gr(n,"POST","/v1/accounts:delete",e)}async function Ti(n,e){return gr(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Wr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function tI(n,e=!1){const t=Pe(n),r=await t.getIdToken(e),s=Dc(r);Q(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Wr(Yo(s.auth_time)),issuedAtTime:Wr(Yo(s.iat)),expirationTime:Wr(Yo(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Yo(n){return Number(n)*1e3}function Dc(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ni("JWT malformed, contained fewer than 3 sections"),null;try{const s=Qh(t);return s?JSON.parse(s):(ni("Failed to decode base64 JWT payload"),null)}catch(s){return ni("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function fh(n){const e=Dc(n);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function os(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Nt&&nI(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function nI({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class rI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class xa{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wr(this.lastLoginAt),this.creationTime=Wr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ai(n){var m;const e=n.auth,t=await n.getIdToken(),r=await os(n,Ti(e,{idToken:t}));Q(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(m=s.providerUserInfo)!=null&&m.length?zf(s.providerUserInfo):[],a=iI(n.providerData,i),c=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),h=c?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new xa(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,f)}async function sI(n){const e=Pe(n);await Ai(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function iI(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function zf(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function oI(n,e){const t=await Bf(n,{},async()=>{const r=ls({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await $f(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:r};return n.emulatorConfig&&lr(n.emulatorConfig.host)&&(u.credentials="include"),Uf.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function aI(n,e){return gr(n,"POST","/v2/accounts:revokeToken",kc(n,e))}/**
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
 */class Kn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):fh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const t=fh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await oI(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Kn;return r&&(Q(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(Q(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(Q(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Kn,this.toJSON())}_performRefresh(){return At("not implemented")}}/**
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
 */function jt(n,e){Q(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class it{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new rI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new xa(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await os(this,this.stsTokenManager.getToken(this.auth,e));return Q(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return tI(this,e)}reload(){return sI(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new it({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ai(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(st(this.auth.app))return Promise.reject(bn(this.auth));const e=await this.getIdToken();return await os(this,eI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,c=t.tenantId??void 0,u=t._redirectEventId??void 0,h=t.createdAt??void 0,f=t.lastLoginAt??void 0,{uid:m,emailVerified:_,isAnonymous:b,providerData:P,stsTokenManager:x}=t;Q(m&&x,e,"internal-error");const A=Kn.fromJSON(this.name,x);Q(typeof m=="string",e,"internal-error"),jt(r,e.name),jt(s,e.name),Q(typeof _=="boolean",e,"internal-error"),Q(typeof b=="boolean",e,"internal-error"),jt(i,e.name),jt(a,e.name),jt(c,e.name),jt(u,e.name),jt(h,e.name),jt(f,e.name);const N=new it({uid:m,auth:e,email:s,emailVerified:_,displayName:r,isAnonymous:b,photoURL:a,phoneNumber:i,tenantId:c,stsTokenManager:A,createdAt:h,lastLoginAt:f});return P&&Array.isArray(P)&&(N.providerData=P.map(M=>({...M}))),u&&(N._redirectEventId=u),N}static async _fromIdTokenResponse(e,t,r=!1){const s=new Kn;s.updateFromServerResponse(t);const i=new it({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ai(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];Q(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?zf(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Kn;c.updateFromIdToken(r);const u=new it({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new xa(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,h),u}}/**
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
 */const ph=new Map;function bt(n){Vt(n instanceof Function,"Expected a class definition");let e=ph.get(n);return e?(Vt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ph.set(n,e),e)}/**
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
 */class qf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}qf.type="NONE";const mh=qf;/**
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
 */function ri(n,e,t){return`firebase:${n}:${e}:${t}`}class Qn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ri(this.userKey,s.apiKey,i),this.fullPersistenceKey=ri("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ti(this.auth,{idToken:e}).catch(()=>{});return t?it._fromGetAccountInfoResponse(this.auth,t,e):null}return it._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Qn(bt(mh),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||bt(mh);const a=ri(r,e.config.apiKey,e.name);let c=null;for(const h of t)try{const f=await h._get(a);if(f){let m;if(typeof f=="string"){const _=await Ti(e,{idToken:f}).catch(()=>{});if(!_)break;m=await it._fromGetAccountInfoResponse(e,_,f)}else m=it._fromJSON(e,f);h!==i&&(c=m),i=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Qn(i,e,r):(i=u[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Qn(i,e,r))}}/**
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
 */function gh(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Kf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Wf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Jf(e))return"Blackberry";if(Yf(e))return"Webos";if(Hf(e))return"Safari";if((e.includes("chrome/")||Gf(e))&&!e.includes("edge/"))return"Chrome";if(Qf(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Wf(n=$e()){return/firefox\//i.test(n)}function Hf(n=$e()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Gf(n=$e()){return/crios\//i.test(n)}function Kf(n=$e()){return/iemobile/i.test(n)}function Qf(n=$e()){return/android/i.test(n)}function Jf(n=$e()){return/blackberry/i.test(n)}function Yf(n=$e()){return/webos/i.test(n)}function Vc(n=$e()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function cI(n=$e()){var e;return Vc(n)&&!!((e=window.navigator)!=null&&e.standalone)}function lI(){return dy()&&document.documentMode===10}function Xf(n=$e()){return Vc(n)||Qf(n)||Yf(n)||Jf(n)||/windows phone/i.test(n)||Kf(n)}/**
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
 */function Zf(n,e=[]){let t;switch(n){case"Browser":t=gh($e());break;case"Worker":t=`${gh($e())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ur}/${r}`}/**
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
 */class uI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const u=e(i);a(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function hI(n,e={}){return gr(n,"GET","/v2/passwordPolicy",kc(n,e))}/**
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
 */const dI=6;class fI{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??dI,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class pI{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yh(this),this.idTokenSubscription=new yh(this),this.beforeStateQueue=new uI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=jf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=bt(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Qn.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ti(this,{idToken:e}),r=await it._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(st(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ai(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Kw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(st(this.app))return Promise.reject(bn(this));const t=e?Pe(e):null;return t&&Q(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return st(this.app)?Promise.reject(bn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return st(this.app)?Promise.reject(bn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(bt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await hI(this),t=new fI(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new cs("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await aI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&bt(e)||this._popupRedirectResolver;Q(t,this,"argument-error"),this.redirectPersistenceManager=await Qn.create(this,[bt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Zf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(st(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&qw(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function co(n){return Pe(n)}class yh{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ey(t=>this.observer=t)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Nc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function mI(n){Nc=n}function gI(n){return Nc.loadJS(n)}function yI(){return Nc.gapiScript}function _I(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function vI(n,e){const t=ja(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Rn(i,e??{}))return s;_t(s,"already-initialized")}return t.initialize({options:e})}function EI(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(bt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function wI(n,e,t){const r=co(n);Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),i=ep(e),{host:a,port:c}=II(e),u=c===null?"":`:${c}`,h={url:`${i}//${a}${u}/`},f=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){Q(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Q(Rn(h,r.config.emulator)&&Rn(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,lr(a)?(Zh(`${i}//${a}${u}`),ed("Auth",!0)):s||TI()}function ep(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function II(n){const e=ep(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:_h(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:_h(a)}}}function _h(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function TI(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class tp{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return At("not implemented")}_getIdTokenResponse(e){return At("not implemented")}_linkToIdToken(e,t){return At("not implemented")}_getReauthenticationResolver(e){return At("not implemented")}}/**
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
 */async function Jn(n,e){return Xw(n,"POST","/v1/accounts:signInWithIdp",kc(n,e))}/**
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
 */const AI="http://localhost";class kn extends tp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new kn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):_t("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const a=new kn(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Jn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Jn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Jn(e,t)}buildRequest(){const e={requestUri:AI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ls(t)}return e}}/**
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
 */class Oc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ys extends Oc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ut extends ys{constructor(){super("facebook.com")}static credential(e){return kn._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ut.credentialFromTaggedObject(e)}static credentialFromError(e){return Ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ut.credential(e.oauthAccessToken)}catch{return null}}}Ut.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ut.PROVIDER_ID="facebook.com";/**
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
 */class It extends ys{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return kn._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return It.credential(t,r)}catch{return null}}}It.GOOGLE_SIGN_IN_METHOD="google.com";It.PROVIDER_ID="google.com";/**
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
 */class Bt extends ys{constructor(){super("github.com")}static credential(e){return kn._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bt.credentialFromTaggedObject(e)}static credentialFromError(e){return Bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bt.credential(e.oauthAccessToken)}catch{return null}}}Bt.GITHUB_SIGN_IN_METHOD="github.com";Bt.PROVIDER_ID="github.com";/**
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
 */class $t extends ys{constructor(){super("twitter.com")}static credential(e,t){return kn._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return $t.credentialFromTaggedObject(e)}static credentialFromError(e){return $t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return $t.credential(t,r)}catch{return null}}}$t.TWITTER_SIGN_IN_METHOD="twitter.com";$t.PROVIDER_ID="twitter.com";/**
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
 */class ar{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await it._fromIdTokenResponse(e,r,s),a=vh(r);return new ar({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=vh(r);return new ar({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function vh(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class bi extends Nt{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,bi.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new bi(e,t,r,s)}}function np(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?bi._fromErrorAndOperation(n,i,e,r):i})}async function bI(n,e,t=!1){const r=await os(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ar._forOperation(n,"link",r)}/**
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
 */async function SI(n,e,t=!1){const{auth:r}=n;if(st(r.app))return Promise.reject(bn(r));const s="reauthenticate";try{const i=await os(n,np(r,s,e,n),t);Q(i.idToken,r,"internal-error");const a=Dc(i.idToken);Q(a,r,"internal-error");const{sub:c}=a;return Q(n.uid===c,r,"user-mismatch"),ar._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&_t(r,"user-mismatch"),i}}/**
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
 */async function RI(n,e,t=!1){if(st(n.app))return Promise.reject(bn(n));const r="signIn",s=await np(n,r,e),i=await ar._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}function xI(n,e,t,r){return Pe(n).onIdTokenChanged(e,t,r)}function CI(n,e,t){return Pe(n).beforeAuthStateChanged(e,t)}function PI(n,e,t,r){return Pe(n).onAuthStateChanged(e,t,r)}function kI(n){return Pe(n).signOut()}const Si="__sak";/**
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
 */class rp{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Si,"1"),this.storage.removeItem(Si),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const DI=1e3,VI=10;class sp extends rp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Xf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);lI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,VI):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},DI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}sp.type="LOCAL";const NI=sp;/**
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
 */class ip extends rp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ip.type="SESSION";const op=ip;/**
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
 */function OI(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class lo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new lo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async h=>h(t.origin,i)),u=await OI(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}lo.receivers=[];/**
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
 */function Mc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class MI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,u)=>{const h=Mc("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(m){const _=m;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(_.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function gt(){return window}function LI(n){gt().location.href=n}/**
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
 */function ap(){return typeof gt().WorkerGlobalScope<"u"&&typeof gt().importScripts=="function"}async function FI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jI(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function UI(){return ap()?self:null}/**
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
 */const cp="firebaseLocalStorageDb",BI=1,Ri="firebaseLocalStorage",lp="fbase_key";class _s{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function uo(n,e){return n.transaction([Ri],e?"readwrite":"readonly").objectStore(Ri)}function $I(){const n=indexedDB.deleteDatabase(cp);return new _s(n).toPromise()}function Ca(){const n=indexedDB.open(cp,BI);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ri,{keyPath:lp})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ri)?e(r):(r.close(),await $I(),e(await Ca()))})})}async function Eh(n,e,t){const r=uo(n,!0).put({[lp]:e,value:t});return new _s(r).toPromise()}async function zI(n,e){const t=uo(n,!1).get(e),r=await new _s(t).toPromise();return r===void 0?null:r.value}function wh(n,e){const t=uo(n,!0).delete(e);return new _s(t).toPromise()}const qI=800,WI=3;class up{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ca(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>WI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ap()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=lo._getInstance(UI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await FI(),!this.activeServiceWorker)return;this.sender=new MI(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||jI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ca();return await Eh(e,Si,"1"),await wh(e,Si),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Eh(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>zI(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>wh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=uo(s,!1).getAll();return new _s(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}up.type="LOCAL";const HI=up;new gs(3e4,6e4);/**
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
 */function hp(n,e){return e?bt(e):(Q(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Lc extends tp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Jn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Jn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Jn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function GI(n){return RI(n.auth,new Lc(n),n.bypassAuthState)}function KI(n){const{auth:e,user:t}=n;return Q(t,e,"internal-error"),SI(t,new Lc(n),n.bypassAuthState)}async function QI(n){const{auth:e,user:t}=n;return Q(t,e,"internal-error"),bI(t,new Lc(n),n.bypassAuthState)}/**
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
 */class dp{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return GI;case"linkViaPopup":case"linkViaRedirect":return QI;case"reauthViaPopup":case"reauthViaRedirect":return KI;default:_t(this.auth,"internal-error")}}resolve(e){Vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const JI=new gs(2e3,1e4);async function YI(n,e,t){if(st(n.app))return Promise.reject(ot(n,"operation-not-supported-in-this-environment"));const r=co(n);Ww(n,e,Oc);const s=hp(r,t);return new En(r,"signInViaPopup",e,s).executeNotNull()}class En extends dp{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,En.currentPopupAction&&En.currentPopupAction.cancel(),En.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){Vt(this.filter.length===1,"Popup operations only handle one event");const e=Mc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ot(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(ot(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,En.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ot(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,JI.get())};e()}}En.currentPopupAction=null;/**
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
 */const XI="pendingRedirect",si=new Map;class ZI extends dp{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=si.get(this.auth._key());if(!e){try{const r=await e0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}si.set(this.auth._key(),e)}return this.bypassAuthState||si.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function e0(n,e){const t=r0(e),r=n0(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function t0(n,e){si.set(n._key(),e)}function n0(n){return bt(n._redirectPersistence)}function r0(n){return ri(XI,n.config.apiKey,n.name)}async function s0(n,e,t=!1){if(st(n.app))return Promise.reject(bn(n));const r=co(n),s=hp(r,e),a=await new ZI(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const i0=10*60*1e3;class o0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!a0(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!fp(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(ot(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=i0&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ih(e))}saveEventToCache(e){this.cachedEventUids.add(Ih(e)),this.lastProcessedEventTime=Date.now()}}function Ih(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function fp({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function a0(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fp(n);default:return!1}}/**
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
 */async function c0(n,e={}){return gr(n,"GET","/v1/projects",e)}/**
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
 */const l0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,u0=/^https?/;async function h0(n){if(n.config.emulator)return;const{authorizedDomains:e}=await c0(n);for(const t of e)try{if(d0(t))return}catch{}_t(n,"unauthorized-domain")}function d0(n){const e=Ra(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!u0.test(t))return!1;if(l0.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const f0=new gs(3e4,6e4);function Th(){const n=gt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function p0(n){return new Promise((e,t)=>{var s,i,a;function r(){Th(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Th(),t(ot(n,"network-request-failed"))},timeout:f0.get()})}if((i=(s=gt().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((a=gt().gapi)!=null&&a.load)r();else{const c=_I("iframefcb");return gt()[c]=()=>{gapi.load?r():t(ot(n,"network-request-failed"))},gI(`${yI()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw ii=null,e})}let ii=null;function m0(n){return ii=ii||p0(n),ii}/**
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
 */const g0=new gs(5e3,15e3),y0="__/auth/iframe",_0="emulator/auth/iframe",v0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},E0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function w0(n){const e=n.config;Q(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Pc(e,_0):`https://${n.config.authDomain}/${y0}`,r={apiKey:e.apiKey,appName:n.name,v:ur},s=E0.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${ls(r).slice(1)}`}async function I0(n){const e=await m0(n),t=gt().gapi;return Q(t,n,"internal-error"),e.open({where:document.body,url:w0(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:v0,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=ot(n,"network-request-failed"),c=gt().setTimeout(()=>{i(a)},g0.get());function u(){gt().clearTimeout(c),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
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
 */const T0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},A0=500,b0=600,S0="_blank",R0="http://localhost";class Ah{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function x0(n,e,t,r=A0,s=b0){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u={...T0,width:r.toString(),height:s.toString(),top:i,left:a},h=$e().toLowerCase();t&&(c=Gf(h)?S0:t),Wf(h)&&(e=e||R0,u.scrollbars="yes");const f=Object.entries(u).reduce((_,[b,P])=>`${_}${b}=${P},`,"");if(cI(h)&&c!=="_self")return C0(e||"",c),new Ah(null);const m=window.open(e||"",c,f);Q(m,n,"popup-blocked");try{m.focus()}catch{}return new Ah(m)}function C0(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const P0="__/auth/handler",k0="emulator/auth/handler",D0=encodeURIComponent("fac");async function bh(n,e,t,r,s,i){Q(n.config.authDomain,n,"auth-domain-config-required"),Q(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:ur,eventId:s};if(e instanceof Oc){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",vy(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries(i||{}))a[f]=m}if(e instanceof ys){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const u=await n._getAppCheckToken(),h=u?`#${D0}=${encodeURIComponent(u)}`:"";return`${V0(n)}?${ls(c).slice(1)}${h}`}function V0({config:n}){return n.emulator?Pc(n,k0):`https://${n.authDomain}/${P0}`}/**
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
 */const Xo="webStorageSupport";class N0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=op,this._completeRedirectFn=s0,this._overrideRedirectResult=t0}async _openPopup(e,t,r,s){var a;Vt((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await bh(e,t,r,Ra(),s);return x0(e,i,Mc())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await bh(e,t,r,Ra(),s);return LI(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Vt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await I0(e),r=new o0(e);return t.register("authEvent",s=>(Q(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Xo,{type:Xo},s=>{var a;const i=(a=s==null?void 0:s[0])==null?void 0:a[Xo];i!==void 0&&t(!!i),_t(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=h0(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Xf()||Hf()||Vc()}}const O0=N0;var Sh="@firebase/auth",Rh="1.11.0";/**
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
 */class M0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function L0(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function F0(n){Zn(new xn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;Q(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Zf(n)},h=new pI(r,s,i,u);return EI(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Zn(new xn("auth-internal",e=>{const t=co(e.getProvider("auth").getImmediate());return(r=>new M0(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gt(Sh,Rh,L0(n)),Gt(Sh,Rh,"esm2020")}/**
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
 */const j0=5*60,U0=Xh("authIdTokenMaxAge")||j0;let xh=null;const B0=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>U0)return;const s=t==null?void 0:t.token;xh!==s&&(xh=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function $0(n=Ur()){const e=ja(n,"auth");if(e.isInitialized())return e.getImmediate();const t=vI(n,{popupRedirectResolver:O0,persistence:[HI,NI,op]}),r=Xh("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=B0(i.toString());CI(t,a,()=>a(t.currentUser)),xI(t,c=>a(c))}}const s=Jh("auth");return s&&wI(t,`http://${s}`),t}function z0(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}mI({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=ot("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",z0().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});F0("Browser");const gn=class gn{constructor(){ct(this,"events",[]);ct(this,"rateLimitMap",new Map);ct(this,"blockedIPs",new Set);ct(this,"suspiciousActivities",new Map)}static getInstance(){return gn.instance||(gn.instance=new gn),gn.instance}checkRateLimit(e,t=100,r=6e4){const s=Date.now(),a=(this.rateLimitMap.get(e)||[]).filter(c=>s-c<r);return a.length>=t?(this.logSecurityEvent({type:"rate_limit",timestamp:s,details:{identifier:e,requestCount:a.length},severity:"high"}),this.suspiciousActivities.set(e,(this.suspiciousActivities.get(e)||0)+1),!1):(a.push(s),this.rateLimitMap.set(e,a),!0)}validateInput(e,t="text"){if(!e||typeof e!="string")return{isValid:!1,sanitized:""};const r=[/('|(\\')|(;)|(\\)|(\-\-)|(\/\*)|(\*\/)|(\bor\b)|(\band\b)|(\bunion\b)|(\bselect\b)|(\binsert\b)|(\bupdate\b)|(\bdelete\b)|(\bdrop\b)|(\bcreate\b)|(\balter\b)|(\bexec\b)|(\bexecute\b))/gi],s=[/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi,/javascript:/gi,/on\w+\s*=/gi,/<.*?>/g];let i=e,a=!0;for(const c of r)if(c.test(e)){this.logSecurityEvent({type:"injection_attempt",timestamp:Date.now(),details:{input:e.substring(0,100),pattern:c.source},severity:"critical"}),a=!1;break}for(const c of s)c.test(i)&&(this.logSecurityEvent({type:"xss_attempt",timestamp:Date.now(),details:{input:e.substring(0,100),pattern:c.source},severity:"critical"}),i=i.replace(c,""),a=!1);switch(t){case"email":/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i)||(a=!1);break;case"url":try{new URL(i)}catch{a=!1}break;case"json":try{JSON.parse(i)}catch{a=!1}break}return i=i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),{isValid:a,sanitized:i}}generateCSRFToken(){const e=new Uint8Array(32);crypto.getRandomValues(e);const t=Array.from(e,r=>r.toString(16).padStart(2,"0")).join("");return localStorage.setItem("csrf_token",t),t}validateCSRFToken(e){const t=localStorage.getItem("csrf_token");return!t||e!==t?(this.logSecurityEvent({type:"csrf_attempt",timestamp:Date.now(),details:{providedToken:e==null?void 0:e.substring(0,10)},severity:"high"}),!1):!0}detectSuspiciousActivity(e,t){const r=Date.now(),s=`${e}_${t}`,i=this.suspiciousActivities.get(s)||0;return r-i<1e3?(this.logSecurityEvent({type:"suspicious_activity",timestamp:r,details:{userId:e,action:t,timeDiff:r-i},severity:"medium"}),!0):(this.suspiciousActivities.set(s,r),!1)}logSecurityEvent(e){console.warn("🚨 보안 이벤트 탐지:",e),this.events.push(e),this.events.length>1e3&&(this.events=this.events.slice(-1e3)),e.severity==="critical"&&this.handleCriticalEvent(e)}handleCriticalEvent(e){"Notification"in window&&Notification.permission==="granted"&&new Notification("🚨 보안 경고",{body:`심각한 보안 이벤트가 탐지되었습니다: ${e.type}`,icon:"/favicon.ico"}),console.error("🔥 CRITICAL SECURITY EVENT:",e);const t=JSON.parse(localStorage.getItem("critical_security_events")||"[]");t.push(e),localStorage.setItem("critical_security_events",JSON.stringify(t.slice(-50)))}getSecurityStats(){const e={};let t=0;return this.events.forEach(r=>{e[r.type]=(e[r.type]||0)+1,r.severity==="critical"&&t++}),{totalEvents:this.events.length,eventsByType:e,recentEvents:this.events.slice(-10),criticalEvents:t}}clearSecurityEvents(){this.events=[],this.rateLimitMap.clear(),this.suspiciousActivities.clear(),localStorage.removeItem("critical_security_events"),console.log("🧹 보안 이벤트 기록이 정리되었습니다.")}};ct(gn,"instance");let wn=gn;const Pa={safeLocalStorage:{getItem:n=>{try{const e=wn.getInstance(),{isValid:t,sanitized:r}=e.validateInput(n);return t?localStorage.getItem(r):null}catch{return null}},setItem:(n,e)=>{try{const t=wn.getInstance(),r=t.validateInput(n),s=t.validateInput(e);return!r.isValid||!s.isValid?!1:(localStorage.setItem(r.sanitized,s.sanitized),!0)}catch{return!1}}},safeDOMUpdate:(n,e)=>{const t=wn.getInstance(),{isValid:r,sanitized:s}=t.validateInput(e);r&&(n.textContent=s)},checkSecurityHeaders:()=>(console.log("🔍 보안 헤더 체크가 필요합니다."),!0),createSafeURL:(n,e)=>{try{const t=new URL(n),r=wn.getInstance();return Object.entries(e).forEach(([s,i])=>{const a=r.validateInput(s),c=r.validateInput(i);a.isValid&&c.isValid&&t.searchParams.append(a.sanitized,c.sanitized)}),t.toString()}catch{return n}}},G=wn.getInstance();if(typeof window<"u"){window.addEventListener("securitypolicyviolation",t=>{G.logSecurityEvent({type:"xss_attempt",timestamp:Date.now(),details:{violatedDirective:t.violatedDirective,blockedURI:t.blockedURI,originalPolicy:t.originalPolicy},severity:"critical"})});let n={open:!1,orientation:null};const e=160;setInterval(()=>{window.outerHeight-window.innerHeight>e||window.outerWidth-window.innerWidth>e?n.open||(n.open=!0,console.warn("🔍 개발자 도구가 열렸습니다.")):n.open=!1},500),"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()}const pn={algorithm:"AES-GCM",keyLength:256,ivLength:12,tagLength:16},yn=class yn{constructor(){ct(this,"masterKey",null);ct(this,"userPassphrase",null)}static getInstance(){return yn.instance||(yn.instance=new yn),yn.instance}async initializeMasterKey(e,t){try{const r=t||"default_secure_passphrase_2025";this.userPassphrase=`${e}:${r}:${Date.now().toString().slice(0,8)}`;const s=new TextEncoder,i=await crypto.subtle.importKey("raw",s.encode(this.userPassphrase),"PBKDF2",!1,["deriveBits","deriveKey"]),a=s.encode(`${e}_salt_2025`);return this.masterKey=await crypto.subtle.deriveKey({name:"PBKDF2",salt:a,iterations:1e5,hash:"SHA-256"},i,{name:pn.algorithm,length:pn.keyLength},!1,["encrypt","decrypt"]),console.log("🔐 클라이언트 사이드 암호화 초기화 완료"),!0}catch(r){return console.error("❌ 마스터 키 초기화 실패:",r),!1}}async encryptData(e){try{if(!this.masterKey)throw new Error("Master key not initialized");if(!G.checkRateLimit("client_encrypt",50,6e4))throw new Error("Encryption rate limit exceeded");const t=JSON.stringify(e),s=new TextEncoder().encode(t),i=crypto.getRandomValues(new Uint8Array(pn.ivLength)),a=crypto.getRandomValues(new Uint8Array(16)),c=await crypto.subtle.encrypt({name:pn.algorithm,iv:i},this.masterKey,s),u={data:this.bufferToBase64(c),iv:this.bufferToBase64(i),salt:this.bufferToBase64(a),keyDerivation:{algorithm:"PBKDF2",iterations:1e5},timestamp:Date.now(),version:"1.0.0"};return console.log("🔒 데이터 암호화 완료 (클라이언트 사이드)"),u}catch(t){return console.error("❌ 클라이언트 사이드 암호화 실패:",t),null}}async decryptData(e){try{if(!this.masterKey)return{success:!1,error:"Master key not initialized"};if(!G.checkRateLimit("client_decrypt",100,6e4))return{success:!1,error:"Decryption rate limit exceeded"};const t=this.base64ToBuffer(e.data),r=this.base64ToBuffer(e.iv),s=await crypto.subtle.decrypt({name:pn.algorithm,iv:r},this.masterKey,t),a=new TextDecoder().decode(s),c=JSON.parse(a);return console.log("🔓 데이터 복호화 완료 (클라이언트 사이드)"),{success:!0,data:c}}catch(t){return console.error("❌ 클라이언트 사이드 복호화 실패:",t),{success:!1,error:(t==null?void 0:t.message)||"Decryption failed"}}}async secureStore(e,t){try{const r=await this.encryptData(t);return r?(localStorage.setItem(`encrypted_${e}`,JSON.stringify(r)),console.log(`🛡️ 안전한 데이터 저장 완료: ${e}`),!0):!1}catch(r){return console.error("❌ 안전한 데이터 저장 실패:",r),!1}}async secureLoad(e){try{const t=localStorage.getItem(`encrypted_${e}`);if(!t)return null;const r=JSON.parse(t),s=await this.decryptData(r);return s.success?(console.log(`🔍 안전한 데이터 로드 완료: ${e}`),s.data):null}catch(t){return console.error("❌ 안전한 데이터 로드 실패:",t),null}}clearEncryptionSession(){this.masterKey=null,this.userPassphrase=null;const e=[];for(let t=0;t<localStorage.length;t++){const r=localStorage.key(t);r!=null&&r.startsWith("encrypted_")&&e.push(r)}e.forEach(t=>localStorage.removeItem(t)),console.log("🧹 암호화 세션 정리 완료")}isEncryptionReady(){return this.masterKey!==null}bufferToBase64(e){const t=new Uint8Array(e);let r="";for(let s=0;s<t.byteLength;s++)r+=String.fromCharCode(t[s]);return btoa(r)}base64ToBuffer(e){const t=atob(e),r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r.buffer}getEncryptionStats(){return{isReady:this.isEncryptionReady(),algorithm:pn.algorithm,keyLength:pn.keyLength,version:"1.0.0"}}};ct(yn,"instance");let ka=yn;const Bn=ka.getInstance(),Rt={async saveEncrypted(n,e){return await Bn.secureStore(n,e)},async loadEncrypted(n){return await Bn.secureLoad(n)},async initForUser(n,e){return await Bn.initializeMasterKey(n,e)},cleanup(){Bn.clearEncryptionSession()},isReady(){return Bn.isEncryptionReady()},getStats(){return Bn.getEncryptionStats()}},Zo={apiKey:"AIzaSyD0T3knqD57-69U4rKsZ1f-Nb1Kd6Rf5a0",authDomain:"my-personnal-penguin.firebaseapp.com",projectId:"my-personnal-penguin",storageBucket:"my-personnal-penguin.firebasestorage.app",messagingSenderId:"278702130293",appId:"1:278702130293:web:cd7dad08ee5cd6b183243c"};let wt,$n=!1;if(typeof window<"u"&&!window.__FIREBASE_INITIALIZED__)try{const n=qo();n.length>0?(wt=n[0],console.log("🔄 기존 Firebase 앱 재사용")):(wt=Qs(Zo),console.log("🆕 새 Firebase 앱 초기화")),window.__FIREBASE_INITIALIZED__=!0,$n=!0}catch(n){console.warn("⚠️ Firebase 초기화 중 에러:",n.message);try{wt=Ur(),console.log("🔄 기존 Firebase 앱으로 대체"),$n=!0}catch(e){console.error("❌ Firebase 앱 초기화 완전 실패:",e);try{wt=Qs(Zo,"secondary-"+Date.now()),console.log("🚨 보조 Firebase 앱 생성"),$n=!0}catch{throw console.error("💥 모든 Firebase 초기화 시도 실패"),new Error("Firebase 초기화에 완전히 실패했습니다.")}}}else if(typeof window<"u"&&window.__FIREBASE_INITIALIZED__){const n=qo();wt=n.length>0?n[0]:Ur(),console.log("♻️ 이미 초기화된 Firebase 앱 사용"),$n=!0}else try{wt=Qs(Zo),$n=!0}catch{const e=qo();wt=e.length>0?e[0]:Ur(),$n=!0}const Ae=Pw(wt),ho=$0(wt),q0=new It,_e=async(n,e,t)=>{try{if(!G.checkRateLimit(`saveUserData_${n}`,50,6e4))throw new Error("Rate limit exceeded. Please try again later.");G.detectSuspiciousActivity(n,`save_${e}`)&&console.warn("🚨 의심스러운 저장 활동 탐지:",n,e);const r=G.validateInput(n),s=G.validateInput(e);if(!r.isValid||!s.isValid)throw new Error("Invalid input parameters");if(JSON.stringify(t).length>10*1024*1024)throw new Error("Data size exceeds limit (10MB)");const a=new Set(["epics","projects","projectTodos"]);let c=t,u=Rt.isReady()&&!a.has(s.sanitized);u?await Rt.saveEncrypted(`${n}_${e}`,t)&&(c={encrypted:!0,data:await Rt.loadEncrypted(`${n}_${e}`),encryptedAt:new Date().toISOString(),encryptionVersion:"1.0.0"},console.log("🔐 데이터 암호화 적용됨 (관리자도 볼 수 없음)")):(typeof t=="object"&&t!==null&&(c=Da(t)),console.log("📄 암호화 없이 저장 (기기간 동기화용)"));const h=Ke(Ae,"users",r.sanitized,"data",s.sanitized);return await bc(h,{data:c,lastUpdated:ce.now(),version:1,checksum:pp(c),encrypted:u}),console.log(`✅ 보안 검증 완료 - 데이터 저장 성공: ${e}`),{success:!0}}catch(r){return console.error(`❌ 보안 검증 실패 - 데이터 저장 실패: ${e}`,r),r.message.includes("Rate limit")||r.message.includes("Invalid input")||console.error("🚨 예상치 못한 저장 오류:",r),{success:!1,error:r}}},oi=async(n,e)=>{try{if(!G.checkRateLimit(`loadUserData_${n}`,100,6e4))throw new Error("Rate limit exceeded. Please try again later.");const t=G.validateInput(n),r=G.validateInput(e);if(!t.isValid||!r.isValid)throw new Error("Invalid input parameters");const s=Ke(Ae,"users",t.sanitized,"data",r.sanitized),i=await io(s);if(i.exists()){const a=i.data();let c=a.data;if(a.encrypted&&Rt.isReady()){const u=await Rt.loadEncrypted(`${n}_${e}`);if(u)c=u,console.log("🔓 데이터 복호화 완료 (클라이언트 사이드)");else return console.warn("⚠️ 복호화 실패 - 암호화 키가 없거나 손상됨"),{success:!1,error:"Decryption failed - encryption key not available"}}else console.log("📄 암호화되지 않은 데이터 로드");if(a.checksum&&a.data){const u=pp(a.data);a.checksum!==u&&console.warn("🚨 데이터 무결성 검증 실패:",e)}return{success:!0,data:c}}else return{success:!0,data:null}}catch(t){return console.error(`❌ 보안 검증 실패 - 데이터 로드 실패: ${e}`,t),{success:!1,error:t}}},hA=async(n,e)=>{try{if(!G.checkRateLimit(`savePomodoroSession_${n}`,30,6e4))throw new Error("Rate limit exceeded. Please try again later.");G.detectSuspiciousActivity(n,"save_pomodoro_session")&&console.warn("🚨 의심스러운 세션 저장 활동 탐지:",n);const t=G.validateInput(n);if(!t.isValid)throw new Error("Invalid user ID");const r={...e,projectTitle:G.validateInput(e.projectTitle||"").sanitized,taskTitle:G.validateInput(e.taskTitle||"").sanitized,sessionType:G.validateInput(e.sessionType||"").sanitized,timestamp:ce.now(),userAgent:navigator.userAgent.substring(0,200)},s=kt(Ae,"users",t.sanitized,"pomodoroSessions");return await Sc(s,r),console.log("✅ 보안 검증 완료 - 뽀모도로 세션 저장 성공"),{success:!0}}catch(t){return console.error("❌ 보안 검증 실패 - 뽀모도로 세션 저장 실패",t),{success:!1,error:t}}},dA=async(n,e,t)=>{try{if(!G.checkRateLimit("updateAccessRequest",20,6e4))throw new Error("Rate limit exceeded. Please try again later.");const r=G.validateInput(n),s=G.validateInput(e);if(!r.isValid||!s.isValid)throw new Error("Invalid input parameters");if(!["approved","rejected"].includes(s.sanitized))throw new Error("Invalid status value");const i={status:s.sanitized,updatedAt:ce.now(),adminUserAgent:navigator.userAgent.substring(0,200)};if(t){const c=G.validateInput(t);c.isValid&&(i.adminResponse=c.sanitized)}const a=Ke(Ae,"accessRequests",r.sanitized);return await oo(a,i),console.log("✅ 보안 검증 완료 - 접근 요청 업데이트 성공"),{success:!0}}catch(r){return console.error("❌ 보안 검증 실패 - 접근 요청 업데이트 실패",r),{success:!1,error:r}}};function Da(n){if(n==null)return n;if(Array.isArray(n))return n.map(e=>Da(e)).filter(e=>e!==void 0);if(typeof n=="object"){const e={};for(const[t,r]of Object.entries(n)){if(r===void 0)continue;const s=G.validateInput(t);if(s.isValid)if(typeof r=="string"){const i=G.validateInput(r);e[s.sanitized]=i.sanitized}else{const i=Da(r);i!==void 0&&(e[s.sanitized]=i)}}return e}return typeof n=="string"?G.validateInput(n).sanitized:n}function pp(n){const e=JSON.stringify(n);let t=0;for(let r=0;r<e.length;r++){const s=e.charCodeAt(r);t=(t<<5)-t+s,t=t&t}return t.toString(16)}const W0=async()=>{try{if(!G.checkRateLimit("signInWithGoogle",5,3e5))throw new Error("Too many login attempts. Please try again later.");const e=(await YI(ho,q0)).user;return console.log("✅ 보안 검증 완료 - Google 로그인 성공:",e.email),{success:!0,user:e}}catch(n){return console.error("❌ Google 로그인 실패:",n),{success:!1,error:n}}},H0=async()=>{try{return await kI(ho),G.clearSecurityEvents(),localStorage.removeItem("csrf_token"),console.log("✅ 보안 정리 완료 - 로그아웃 성공"),{success:!0}}catch(n){return console.error("❌ 로그아웃 실패:",n),{success:!1,error:n}}},Ye=()=>{const n=ho.currentUser;if(n){const e=Pa.safeLocalStorage.getItem("last_activity"),t=Date.now().toString();e&&parseInt(t)-parseInt(e)>24*60*60*1e3&&console.warn("🚨 장시간 미사용 세션 감지"),Pa.safeLocalStorage.setItem("last_activity",t)}return n},mp=n=>PI(ho,async e=>{if(e){if(G.generateCSRFToken(),await Rt.initForUser(e.email||e.uid)){console.log("🔐 End-to-End 암호화 활성화 - 관리자도 데이터를 볼 수 없습니다");try{const r=await J0(e.uid);r.success&&r.migrated>0&&console.log(`🎉 기존 데이터 ${r.migrated}개 타입 암호화 완료!`)}catch(r){console.warn("⚠️ 기존 데이터 마이그레이션 건너뛰기:",r)}}else console.warn("⚠️ 암호화 초기화 실패 - 데이터가 암호화되지 않을 수 있습니다");console.log("🛡️ 보안 시스템 활성화:",e.email)}else G.clearSecurityEvents(),localStorage.removeItem("csrf_token"),localStorage.removeItem("last_activity"),Rt.cleanup(),console.log("🧹 암호화 세션 정리 완료");n(e)}),fA=()=>({stats:G.getSecurityStats(),criticalEvents:JSON.parse(localStorage.getItem("critical_security_events")||"[]"),lastActivity:Pa.safeLocalStorage.getItem("last_activity"),csrfToken:localStorage.getItem("csrf_token")?"토큰 활성화":"토큰 없음"});typeof window<"u"&&(console.log("🛡️ Firebase 보안 시스템 초기화 완료"),window.addEventListener("load",()=>{const n=G.getSecurityStats();n.criticalEvents>0&&console.warn(`🚨 ${n.criticalEvents}개의 심각한 보안 이벤트가 기록되어 있습니다.`)}));const xi=n=>n==="sbseok12@gmail.com",gp=async n=>{try{if(!G.checkRateLimit("saveAccessRequest",5,3e5))throw new Error("Too many access requests. Please try again later.");const e=G.validateInput(n.email,"email"),t=G.validateInput(n.displayName);if(!e.isValid||!t.isValid)throw new Error("Invalid input parameters");const r={email:e.sanitized,displayName:t.sanitized,photoURL:n.photoURL?G.validateInput(n.photoURL,"url").sanitized:void 0,reason:n.reason?G.validateInput(n.reason).sanitized:void 0},s=Ke(Ae,"accessRequests",r.email.replace(".","_"));return await bc(s,{...r,status:"pending",requestedAt:ce.now(),userAgent:navigator.userAgent.substring(0,200)}),console.log("✅ 보안 검증 완료 - 접근 신청 저장 성공"),{success:!0}}catch(e){return console.error("❌ 보안 검증 실패 - 접근 신청 저장 실패:",e),{success:!1,error:e}}},pA=async()=>{try{if(!G.checkRateLimit("getAccessRequests",20,6e4))throw new Error("Rate limit exceeded. Please try again later.");const n=kt(Ae,"accessRequests"),t=(await or(n)).docs.map(r=>({id:r.id,...r.data()}));return console.log("✅ 보안 검증 완료 - 접근 신청 목록 조회 성공"),{success:!0,data:t}}catch(n){return console.error("❌ 보안 검증 실패 - 접근 신청 조회 실패:",n),{success:!1,error:n}}},G0=async n=>{if(!n)return{status:"not_found"};if(n==="sbseok12@gmail.com")return{status:"approved"};try{if(!G.checkRateLimit(`getUserAccessStatus_${n}`,30,6e4))throw new Error("Rate limit exceeded. Please try again later.");const e=G.validateInput(n,"email");if(!e.isValid)return{status:"not_found"};const t=Ke(Ae,"accessRequests",e.sanitized.replace(".","_")),r=await io(t);if(r.exists()){const s=r.data();return{status:s.status,data:s}}return{status:"not_found"}}catch(e){return console.error("❌ 사용자 접근 상태 확인 실패:",e),{status:"not_found"}}},K0=H0,Q0=async(n,e,t)=>{try{if(!G.checkRateLimit(`loadPomodoroSessions_${n}`,50,6e4))throw new Error("Rate limit exceeded. Please try again later.");const r=G.validateInput(n);if(!r.isValid)throw new Error("Invalid user ID");const s=kt(Ae,"users",r.sanitized,"pomodoroSessions");let i=Jt(s,Vf("startTime","desc"));if(e){const u=G.validateInput(e);u.isValid&&(i=Jt(s,Tt("startTime",">=",u.sanitized+"T00:00:00.000Z")))}if(t){const u=G.validateInput(t);u.isValid&&(i=Jt(s,Tt("startTime","<=",u.sanitized+"T23:59:59.999Z")))}const a=await or(i),c=[];return a.forEach(u=>{const h=u.data();c.push({...h,id:u.id})}),console.log(`✅ 보안 검증 완료 - 뽀모도로 세션 조회 성공: ${c.length}개`),{success:!0,data:c}}catch(r){return console.error("❌ 보안 검증 실패 - 뽀모도로 세션 조회 실패:",r),{success:!1,error:r}}},mA=async(n,e,t)=>{try{if(!G.checkRateLimit(`updatePomodoroSession_${n}`,20,6e4))throw new Error("Rate limit exceeded. Please try again later.");const r=G.validateInput(n),s=G.validateInput(e);if(!r.isValid||!s.isValid)throw new Error("Invalid parameters");const i=Ke(Ae,"users",r.sanitized,"pomodoroSessions",s.sanitized),a={...t,updatedAt:ce.now()};return await oo(i,a),console.log("✅ 보안 검증 완료 - 뽀모도로 세션 업데이트 성공"),{success:!0}}catch(r){return console.error("❌ 보안 검증 실패 - 뽀모도로 세션 업데이트 실패:",r),{success:!1,error:r}}},gA=async(n,e)=>{try{if(!G.checkRateLimit(`getWeeklyPomodoroStats_${n}`,30,6e4))throw new Error("Rate limit exceeded. Please try again later.");const t=new Date(e),r=new Date(t);r.setDate(r.getDate()+6);const s=e,i=r.toISOString().split("T")[0],a=await Q0(n,s,i);if(!a.success||!a.data)return{success:!1,error:a.error};const c=a.data.filter(m=>m.completed),u={weekStart:s,weekEnd:i,totalSessions:c.length,workSessions:c.filter(m=>m.sessionType==="work").length,breakSessions:c.filter(m=>m.sessionType==="break").length,totalMinutes:c.reduce((m,_)=>m+(_.duration||0),0),projectBreakdown:[],dailyBreakdown:[]},h={};c.forEach(m=>{h[m.projectId]||(h[m.projectId]=[]),h[m.projectId].push(m)}),u.projectBreakdown=Object.entries(h).map(([m,_])=>{var b;return{projectId:m,projectTitle:((b=_[0])==null?void 0:b.projectTitle)||"Unknown",sessions:_.length,minutes:_.reduce((P,x)=>P+(x.duration||0),0)}});const f={};return c.forEach(m=>{var b;const _=((b=m.startTime)==null?void 0:b.split("T")[0])||new Date().toISOString().split("T")[0];f[_]||(f[_]=[]),f[_].push(m)}),u.dailyBreakdown=Object.entries(f).map(([m,_])=>({date:m,sessions:_.length,minutes:_.reduce((b,P)=>b+(P.duration||0),0)})).sort((m,_)=>m.date.localeCompare(_.date)),console.log("✅ 보안 검증 완료 - 주차별 뽀모도로 통계 생성 성공"),{success:!0,data:u}}catch(t){return console.error("❌ 보안 검증 실패 - 주차별 뽀모도로 통계 생성 실패:",t),{success:!1,error:t}}},yA=async(n,e)=>{try{if(!G.checkRateLimit(`deletePomodoroSession_${n}`,10,6e4))throw new Error("Rate limit exceeded. Please try again later.");const t=G.validateInput(n),r=G.validateInput(e);if(!t.isValid||!r.isValid)throw new Error("Invalid parameters");const s=Ke(Ae,"users",t.sanitized,"pomodoroSessions",r.sanitized);return await Mf(s),console.log("✅ 보안 검증 완료 - 뽀모도로 세션 삭제 성공"),{success:!0}}catch(t){return console.error("❌ 보안 검증 실패 - 뽀모도로 세션 삭제 실패:",t),{success:!1,error:t}}},J0=async n=>{try{if(!Rt.isReady())throw new Error("Encryption not initialized");console.log("🔄 기존 데이터 암호화 마이그레이션 시작...");let e=0;const t=["todos","projects","epics","pomodoroSessions","settings"];for(const r of t)try{const s=Ke(Ae,"users",n,"data",r),i=await io(s);if(i.exists()){const a=i.data();if(a.encrypted){console.log(`✅ ${r} 이미 암호화됨 - 건너뛰기`);continue}(await _e(n,r,a.data)).success&&(e++,console.log(`🔐 ${r} 암호화 마이그레이션 완료`))}}catch(s){console.warn(`⚠️ ${r} 마이그레이션 실패:`,s)}return console.log(`🎉 마이그레이션 완료! ${e}개 데이터 타입 암호화됨`),{success:!0,migrated:e}}catch(e){return console.error("❌ 데이터 마이그레이션 실패:",e),{success:!1,migrated:0,error:e}}},_A=async(n,e="json")=>{try{if(!Rt.isReady())throw new Error("Encryption not initialized - cannot decrypt data for export");console.log("📊 사용자 데이터 내보내기 시작...");const t={exportedAt:new Date().toISOString(),userId:n,data:{}},r=["todos","projects","epics","pomodoroSessions","settings"];for(const a of r)try{const c=await oi(n,a);c.success&&c.data&&(t.data[a]=c.data,console.log(`✅ ${a} 데이터 수집 완료`))}catch(c){console.warn(`⚠️ ${a} 수집 실패:`,c)}const i=`penguin_data_${new Date().toISOString().split("T")[0]}.${e}`;return e==="json"?{success:!0,data:JSON.stringify(t,null,2),filename:i}:{success:!0,data:Y0(t),filename:i.replace(".csv",".csv")}}catch(t){return console.error("❌ 데이터 내보내기 실패:",t),{success:!1,error:t}}};function Y0(n){const e=[];return e.push("Type,ID,Title,Description,CreatedAt,Status"),Object.entries(n.data).forEach(([t,r])=>{Array.isArray(r)&&r.forEach((s,i)=>{const a=[t,s.id||i.toString(),s.title||s.name||"",s.description||"",s.createdAt||s.timestamp||"",s.status||s.completed||""].map(c=>`"${String(c).replace(/"/g,'""')}"`);e.push(a.join(","))})}),e.join(`
`)}const X0=async()=>{try{const n=Ke(Ae,"system","maintenance"),e=await io(n);if(e.exists()){const t=e.data();return{isMaintenanceMode:t.enabled||!1,message:t.message||"시스템 점검 중입니다. 잠시 후 다시 이용해주세요."}}return{isMaintenanceMode:!1}}catch(n){return console.error("❌ 점검 상태 확인 실패:",n),{isMaintenanceMode:!1,error:n}}},vA=async(n,e)=>{try{const t=Ye();if(!t||!xi(t.email))throw new Error("Unauthorized: Admin access required");const r=Ke(Ae,"system","maintenance");return await bc(r,{enabled:n,message:e||"시스템 점검 중입니다. 잠시 후 다시 이용해주세요.",updatedAt:ce.now(),updatedBy:t.email}),console.log(`🚧 점검 모드 ${n?"활성화":"비활성화"} 완료`),{success:!0}}catch(t){return console.error("❌ 점검 모드 설정 실패:",t),{success:!1,error:t}}},as={_origin:"https://api.emailjs.com"},Z0=(n,e="https://api.emailjs.com")=>{as._userID=n,as._origin=e},yp=(n,e,t)=>{if(!n)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!t)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class Ch{constructor(e){this.status=e.status,this.text=e.responseText}}const _p=(n,e,t={})=>new Promise((r,s)=>{const i=new XMLHttpRequest;i.addEventListener("load",({target:a})=>{const c=new Ch(a);c.status===200||c.text==="OK"?r(c):s(c)}),i.addEventListener("error",({target:a})=>{s(new Ch(a))}),i.open("POST",as._origin+n,!0),Object.keys(t).forEach(a=>{i.setRequestHeader(a,t[a])}),i.send(e)}),eT=(n,e,t,r)=>{const s=r||as._userID;return yp(s,n,e),_p("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:s,service_id:n,template_id:e,template_params:t}),{"Content-type":"application/json"})},tT=n=>{let e;if(typeof n=="string"?e=document.querySelector(n):e=n,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},nT=(n,e,t,r)=>{const s=r||as._userID,i=tT(t);yp(s,n,e);const a=new FormData(i);return a.append("lib_version","3.2.0"),a.append("service_id",n),a.append("template_id",e),a.append("user_id",s),_p("/api/v1.0/email/send-form",a)},vp={init:Z0,send:eT,sendForm:nT},fo=kt(Ae,"feedback"),Hr={serviceId:"service_feedback",templateId:"template_feedback",publicKey:"your_public_key"},rT=async(n,e)=>{var t;try{const r={...e,userEmail:n.email??"",userDisplayName:n.displayName??((t=n.email)==null?void 0:t.split("@")[0])??"Anonymous",createdAt:Rc(),status:"pending"},s=await Sc(fo,r);try{await vp.send(Hr.serviceId,Hr.templateId,{to_email:"sbseok12@gmail.com",from_name:r.userDisplayName,from_email:r.userEmail,feedback_type:e.type,feedback_title:e.title,feedback_description:e.description,feedback_priority:e.priority,feedback_id:s.id,created_at:new Date().toLocaleString("ko-KR")},Hr.publicKey),console.log("✅ 피드백 이메일 발송 성공")}catch(i){console.warn("⚠️ 이메일 발송 실패 (피드백은 저장됨):",i)}return{success:!0,id:s.id,message:"피드백이 성공적으로 제출되었습니다! 관리자가 검토 후 답변드릴게요 😊"}}catch(r){return console.error("피드백 제출 실패:",r),{success:!1,message:"피드백 제출 중 오류가 발생했습니다. 다시 시도해주세요."}}},EA=n=>{const e=Jt(fo,Vf("createdAt","desc"));return $w(e,t=>{const r=[];t.forEach(s=>{r.push({id:s.id,...s.data()})}),n(r)},t=>{console.error("피드백 구독 실패:",t),n([])})},wA=n=>{const e={total:n.length,pending:0,inProgress:0,completed:0,rejected:0,byType:{},byPriority:{}};return n.forEach(t=>{switch(t.status){case"pending":e.pending++;break;case"in-progress":e.inProgress++;break;case"completed":e.completed++;break;case"rejected":e.rejected++;break}e.byType[t.type]=(e.byType[t.type]??0)+1,e.byPriority[t.priority]=(e.byPriority[t.priority]??0)+1}),e},IA=async(n,e,t)=>{try{const r=Ke(fo,n),s={status:e,updatedAt:Rc()};return t&&(s.adminResponse=t),await oo(r,s),{success:!0,message:"피드백 상태가 업데이트되었습니다."}}catch(r){return console.error("피드백 상태 업데이트 실패:",r),{success:!1,message:"상태 업데이트 중 오류가 발생했습니다."}}},TA=async n=>{try{return await Mf(Ke(fo,n)),{success:!0,message:"피드백이 삭제되었습니다."}}catch(e){return console.error("피드백 삭제 실패:",e),{success:!1,message:"삭제 중 오류가 발생했습니다."}}},AA=async(n,e)=>{try{return await vp.send(Hr.serviceId,"template_admin_response",{to_email:n.userEmail,to_name:n.userDisplayName,feedback_title:n.title,admin_response:e,feedback_status:n.status,response_date:new Date().toLocaleString("ko-KR")},Hr.publicKey),{success:!0,message:"응답 이메일이 발송되었습니다."}}catch(t){return console.error("관리자 응답 이메일 발송 실패:",t),{success:!1,message:"이메일 발송 중 오류가 발생했습니다."}}},sT=n=>({bug:"🐛",feature:"✨",improvement:"🔧",question:"❓",other:"💬"})[n],Ks=n=>({low:"#4caf50",medium:"#ff9800",high:"#f44336",urgent:"#9c27b0"})[n],bA=n=>({pending:"#757575","in-progress":"#2196f3",completed:"#4caf50",rejected:"#f44336"})[n],iT=({open:n,onClose:e,user:t})=>{const[r,s]=k.useState({type:"feature",title:"",description:"",priority:"medium"}),[i,a]=k.useState(!1),[c,u]=k.useState(!1),[h,f]=k.useState(""),m=()=>{s({type:"feature",title:"",description:"",priority:"medium"}),u(!1),f("")},_=()=>{i||(m(),e())},b=async()=>{if(!r.title.trim()){f("제목을 입력해주세요.");return}if(!r.description.trim()){f("내용을 입력해주세요.");return}a(!0),f("");try{const A=await rT(t,r);A.success?(u(!0),setTimeout(()=>{_()},2e3)):f(A.message)}catch{f("피드백 제출 중 오류가 발생했습니다.")}finally{a(!1)}},P=A=>({bug:p.jsx(um,{}),feature:p.jsx(hm,{}),improvement:p.jsx(dm,{}),question:p.jsx(fm,{}),other:p.jsx(pm,{})})[A],x=A=>({bug:"버그나 오류를 신고해주세요",feature:"새로운 기능을 제안해주세요",improvement:"기존 기능의 개선사항을 알려주세요",question:"궁금한 점이나 사용법을 문의해주세요",other:"기타 의견이나 제안사항을 남겨주세요"})[A];return p.jsxs(Ci,{open:n,onClose:_,maxWidth:"md",fullWidth:!0,PaperProps:{sx:{borderRadius:3,maxHeight:"90vh"}},children:[p.jsxs(Pi,{sx:{pb:1},children:[p.jsx(z,{sx:{display:"flex",alignItems:"center",gap:1},children:p.jsx(B,{variant:"h5",component:"div",sx:{fontWeight:"bold"},children:"💬 피드백 보내기"})}),p.jsx(B,{variant:"body2",color:"text.secondary",sx:{mt:1},children:"관리자에게 의견을 전달하고 더 나은 서비스를 만들어가요! ✨"})]}),p.jsx(ki,{sx:{pt:2},children:c?p.jsxs(z,{sx:{textAlign:"center",py:4},children:[p.jsx(B,{variant:"h4",sx:{mb:2},children:"🎉"}),p.jsx(B,{variant:"h6",gutterBottom:!0,children:"피드백이 성공적으로 전송되었습니다!"}),p.jsx(B,{color:"text.secondary",children:"관리자가 검토 후 답변드릴게요. 감사합니다! 😊"})]}):p.jsxs(z,{sx:{display:"flex",flexDirection:"column",gap:3},children:[h&&p.jsx(Yn,{severity:"error",sx:{borderRadius:2},children:h}),p.jsxs(z,{children:[p.jsx(B,{variant:"subtitle1",gutterBottom:!0,sx:{fontWeight:"bold"},children:"📝 피드백 유형"}),p.jsx(Ul,{container:!0,spacing:1,children:["bug","feature","improvement","question","other"].map(A=>p.jsx(Ul,{item:!0,children:p.jsx(kh,{icon:P(A),label:`${sT(A)} ${A==="bug"?"버그":A==="feature"?"기능":A==="improvement"?"개선":A==="question"?"질문":"기타"}`,onClick:()=>s({...r,type:A}),color:r.type===A?"primary":"default",variant:r.type===A?"filled":"outlined",sx:{cursor:"pointer","&:hover":{backgroundColor:r.type===A?void 0:"rgba(25, 118, 210, 0.04)"}}})},A))}),p.jsx(B,{variant:"caption",color:"text.secondary",sx:{mt:1,display:"block"},children:x(r.type)})]}),p.jsxs(am,{fullWidth:!0,children:[p.jsx(cm,{children:"🚨 우선순위"}),p.jsxs(lm,{value:r.priority,label:"🚨 우선순위",onChange:A=>s({...r,priority:A.target.value}),children:[p.jsx(_n,{value:"low",children:p.jsxs(z,{sx:{display:"flex",alignItems:"center",gap:1},children:[p.jsx(z,{sx:{width:12,height:12,borderRadius:"50%",backgroundColor:Ks("low")}}),"낮음 - 여유가 있을 때 확인해주세요"]})}),p.jsx(_n,{value:"medium",children:p.jsxs(z,{sx:{display:"flex",alignItems:"center",gap:1},children:[p.jsx(z,{sx:{width:12,height:12,borderRadius:"50%",backgroundColor:Ks("medium")}}),"보통 - 일반적인 우선순위"]})}),p.jsx(_n,{value:"high",children:p.jsxs(z,{sx:{display:"flex",alignItems:"center",gap:1},children:[p.jsx(z,{sx:{width:12,height:12,borderRadius:"50%",backgroundColor:Ks("high")}}),"높음 - 빠른 확인이 필요해요"]})}),p.jsx(_n,{value:"urgent",children:p.jsxs(z,{sx:{display:"flex",alignItems:"center",gap:1},children:[p.jsx(z,{sx:{width:12,height:12,borderRadius:"50%",backgroundColor:Ks("urgent")}}),"긴급 - 즉시 확인이 필요해요!"]})})]})]}),p.jsx(ai,{fullWidth:!0,label:"📋 제목",placeholder:"피드백의 제목을 간단히 입력해주세요",value:r.title,onChange:A=>s({...r,title:A.target.value}),variant:"outlined",inputProps:{maxLength:100},helperText:`${r.title.length}/100`}),p.jsx(ai,{fullWidth:!0,multiline:!0,rows:6,label:"📝 상세 내용",placeholder:r.type==="bug"?`어떤 상황에서 버그가 발생했나요?
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
관리자가 확인 후 답변드릴게요 😊`,value:r.description,onChange:A=>s({...r,description:A.target.value}),variant:"outlined",inputProps:{maxLength:1e3},helperText:`${r.description.length}/1000`}),p.jsx(Yn,{severity:"info",sx:{borderRadius:2},children:p.jsxs(B,{variant:"body2",children:[p.jsx("strong",{children:"💡 알아두세요!"}),p.jsx("br",{}),"• 피드백은 관리자 이메일(sbseok12@gmail.com)로도 자동 발송됩니다",p.jsx("br",{}),"• 관리자 페이지에서도 실시간으로 확인할 수 있어요",p.jsx("br",{}),"• 답변이 필요한 경우 이메일로 회신해드릴게요"]})})]})}),p.jsx(Di,{sx:{p:3,pt:1},children:c?p.jsx(Be,{onClick:_,variant:"contained",fullWidth:!0,children:"닫기"}):p.jsxs(p.Fragment,{children:[p.jsx(Be,{onClick:_,disabled:i,sx:{minWidth:100},children:"취소"}),p.jsx(Be,{onClick:b,variant:"contained",disabled:i||!r.title.trim()||!r.description.trim(),startIcon:i?p.jsx(Sn,{size:16}):p.jsx(Na,{}),sx:{minWidth:120},children:i?"전송 중...":"피드백 보내기"})]})})]})},oT={background:{primary:"#f5f5f5",secondary:"#ffffff",pattern:`url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='20' height='20' fill='%23f5f5f5'/%3E%3C/svg%3E")`,gradient:"linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)"},border:{color:"#cccccc",shadow:"0 2px 8px rgba(0,0,0,0.1)"},path:{color:"rgba(128,128,128,0.3)",opacity:.5}},aT={blocks:{emoji:"⬜",type:"블록",collectName:"아이템"},building:{name:"구조물",description:"기본 구조물",completionMessage:"완성되었습니다!"},collectInterval:30,maxBlocks:25,progressPerBlock:4},cT={animal:{speed:.5,radius:35,bounceHeight:.1},blocks:{popDuration:"0.3s",arrangement:"tower",spacing:{horizontal:20,vertical:15}}},Ep={id:"penguin",name:"뒤뚱",emoji:"🐧",description:"차가운 빙하와 남극의 평온함",colors:{light:{primary:"#2196F3",primaryLight:"#64B5F6",primaryDark:"#1976D2",secondary:"#03DAC6",secondaryLight:"#66FFF9",secondaryDark:"#00BCD4",background:"#E9F5FF",paper:"#FFFFFF",info:"#2196F3",success:"#4CAF50",warning:"#FF9800",error:"#F44336"},dark:{primary:"#90CAF9",primaryLight:"#BBDEFB",primaryDark:"#42A5F5",secondary:"#80DEEA",secondaryLight:"#B2EBF2",secondaryDark:"#4DD0E1",background:"#0B1116",paper:"#121A22",info:"#2196F3",success:"#4CAF50",warning:"#FF9800",error:"#F44336"}},concepts:{loading:"펭귄이 빙하를 준비하는 중이에요...",welcome:"남극 빙하 기지에 온 것을 환영해요!",appName:"펭귄 비서",appDescription:"차가운 빙하에서 따뜻한 도움을 드리는 펭귄 비서입니다",environment:"남극의 차가운 빙하 🧊",animal:"펭귄",greeting:"안녕하세요! 오늘도 빙하에서 멋진 하루 보내세요!",farewell:"빙하에서 따뜻한 하루 되세요!",baseTitle:"🏔️ 빙하 기지",baseWelcome:"펭귄 비서의 빙하 기지에 오신 것을 환영해요!",liveView:"🐧 빙하 라이브 뷰",liveViewDescription:"우리 펭귄이 빙하에서 무엇을 하고 있는지 확인해보세요! ❄️",quickActions:"빙하 퀵 액션",activeProjects:"진행 중인 탐험",projectStats:"탐험 통계",animalSaying:"펭귄이 말하길",temperatureMoods:{cold:"❄️ 완벽한 빙하 날씨에요!",cool:"🧊 시원한 빙하가 좋아요",mild:"🌨️ 따뜻해져서 조금 이상해요",warm:"☀️ 너무 따뜻해서 걱정이에요",hot:"🔥 빙하가 녹고 있어요!"},projectType:"탐험",projectCreate:"새로운 탐험 시작하기",projectManage:"탐험 관리하기"},ui:{background:{primary:"#E1F0FF",secondary:"#D7ECFF",pattern:`url("data:image/svg+xml,%3Csvg width='64' height='64' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='sea' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0%' stop-color='%23CFE8FF'/%3E%3Cstop offset='100%' stop-color='%2390CAF9'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='64' height='64' fill='url(%23sea)'/%3E%3Cpath d='M0,40 C10,36 22,42 32,38 C42,34 54,38 64,34 L64,64 L0,64 Z' fill='%23E1F5FE'/%3E%3Cpath d='M12,28 L20,16 L28,28 Z' fill='%23FFFFFF' fill-opacity='0.9'/%3E%3Ccircle cx='50' cy='12' r='3' fill='%23E3F2FD'/%3E%3C/svg%3E")`,gradient:"radial-gradient(circle at 20% 20%, #E1F0FF 0%, #CFE8FF 40%, #90CAF9 100%)"},border:{color:"#2196F3",shadow:"inset 0 0 20px rgba(33, 150, 243, 0.25)"},path:{color:"rgba(33, 150, 243, 0.28)",opacity:.5}},game:{blocks:{emoji:"🧊",type:"얼음 블록",collectName:"얼음 블록 수집"},building:{name:"얼음 성",description:"웅장한 얼음 성",completionMessage:"멋진 얼음 성이 완성되었어요! ❄️🏰"},collectInterval:30,maxBlocks:25,progressPerBlock:4},animation:{animal:{speed:.5,radius:35,bounceHeight:.15},blocks:{popDuration:"0.3s",arrangement:"tower",spacing:{horizontal:20,vertical:15}}}},lT={id:"desert-fox",name:"휘리릭",emoji:"🦊",description:"따뜻한 사막과 오아시스의 활기",colors:{light:{primary:"#FF8C00",primaryLight:"#FFB74D",primaryDark:"#F57C00",secondary:"#FFC107",secondaryLight:"#FFEB3B",secondaryDark:"#FF9800",background:"#FFF8E1",paper:"#FFFFFF",info:"#2196F3",success:"#8BC34A",warning:"#FF9800",error:"#F44336"},dark:{primary:"#FFB74D",primaryLight:"#FFCC02",primaryDark:"#FF8F00",secondary:"#FFCC02",secondaryLight:"#FFEB3B",secondaryDark:"#FFC107",background:"#1A1A1A",paper:"#2A2A2A",info:"#2196F3",success:"#8BC34A",warning:"#FF9800",error:"#F44336"}},concepts:{loading:"사막여우가 오아시스를 준비하는 중이에요...",welcome:"따뜻한 사막 오아시스에 온 것을 환영해요!",appName:"사막여우 비서",appDescription:"뜨거운 사막에서 시원한 도움을 드리는 사막여우 비서입니다",environment:"따뜻한 사막과 오아시스 🏜️",animal:"사막여우",greeting:"안녕하세요! 오늘도 사막에서 활기찬 하루 보내세요!",farewell:"사막에서 멋진 하루 되세요!",baseTitle:"🏜️ 사막 오아시스",baseWelcome:"사막여우 비서의 오아시스에 오신 것을 환영해요!",liveView:"🦊 사막 라이브 뷰",liveViewDescription:"우리 사막여우가 오아시스에서 무엇을 하고 있는지 확인해보세요! 🌵",quickActions:"사막 퀵 액션",activeProjects:"진행 중인 모험",projectStats:"모험 통계",animalSaying:"사막여우가 말하길",temperatureMoods:{cold:"🧊 사막에 너무 춥네요",cool:"🌤️ 시원한 사막이 좋아요",mild:"☀️ 완벽한 사막 날씨에요!",warm:"🌵 따뜻한 사막이 최고에요",hot:"🔥 뜨거운 사막도 문제없어요!"},projectType:"모험",projectCreate:"새로운 모험 시작하기",projectManage:"모험 관리하기"},ui:{background:{primary:"#FFF3E0",secondary:"#FFE0B2",pattern:`url("data:image/svg+xml,%3Csvg width='32' height='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='dunes' patternUnits='userSpaceOnUse' width='32' height='32'%3E%3Crect width='32' height='32' fill='%23FFF3E0'/%3E%3Cpath d='M0,24 C8,20 24,28 32,24 L32,32 L0,32 Z' fill='%23FFE0B2'/%3E%3Cpath d='M0,18 C6,14 26,22 32,18' stroke='%23FFCC80' stroke-width='1' fill='none'/%3E%3Ccircle cx='26' cy='6' r='3' fill='%23FFCC02'/%3E%3Cpolygon points='18,20 22,20 20,24' fill='%23CFE8FF'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23dunes)'/%3E%3C/svg%3E")`,gradient:"radial-gradient(circle at 30% 70%, #FFF3E0 0%, #FFE0B2 45%, #FFB74D 100%)"},border:{color:"#FF8F00",shadow:"inset 0 0 20px rgba(255, 143, 0, 0.3)"},path:{color:"rgba(255, 143, 0, 0.3)",opacity:.5}},game:{blocks:{emoji:"🔺",type:"피라미드 블록",collectName:"피라미드 블록 수집"},building:{name:"피라미드",description:"웅장한 사막 피라미드",completionMessage:"멋진 피라미드가 완성되었어요! 🏜️🔺"},collectInterval:30,maxBlocks:25,progressPerBlock:4},animation:{animal:{speed:.5,radius:35,bounceHeight:.1},blocks:{popDuration:"0.3s",arrangement:"pyramid",spacing:{horizontal:20,vertical:15}}}},uT={id:"sheep",name:"메에",emoji:"🐑",description:"평화로운 목초지와 푸른 언덕",colors:{light:{primary:"#4CAF50",primaryLight:"#81C784",primaryDark:"#388E3C",secondary:"#8BC34A",secondaryLight:"#AED581",secondaryDark:"#689F38",background:"#F1F8E9",paper:"#FFFFFF",info:"#2196F3",success:"#4CAF50",warning:"#FF9800",error:"#F44336"},dark:{primary:"#81C784",primaryLight:"#AED581",primaryDark:"#4CAF50",secondary:"#AED581",secondaryLight:"#C5E1A5",secondaryDark:"#8BC34A",background:"#0D1B0F",paper:"#1B2E1D",info:"#2196F3",success:"#4CAF50",warning:"#FF9800",error:"#F44336"}},concepts:{loading:"양이 목초지를 준비하는 중이에요...",welcome:"평화로운 목초지에 온 것을 환영해요!",appName:"양 비서",appDescription:"푸른 목초지에서 평온한 도움을 드리는 양 비서입니다",environment:"평화로운 푸른 목초지 🌱",animal:"양",greeting:"안녕하세요! 오늘도 목초지에서 평온한 하루 보내세요!",farewell:"목초지에서 평화로운 하루 되세요!",baseTitle:"🌱 목초지 농장",baseWelcome:"양 비서의 목초지에 오신 것을 환영해요!",liveView:"🐑 목초지 라이브 뷰",liveViewDescription:"우리 양이 목초지에서 무엇을 하고 있는지 확인해보세요! 🌱",quickActions:"목초지 퀵 액션",activeProjects:"진행 중인 목장일",projectStats:"목장일 통계",animalSaying:"양이 말하길",temperatureMoods:{cold:"❄️ 목초지가 시원하고 좋아요",cool:"🍃 시원한 바람이 상쾌해요",mild:"🌿 완벽한 목초지 날씨에요!",warm:"☀️ 따뜻한 햇살이 좋아요",hot:"🌞 그늘에서 쉬어가야겠어요!"},projectType:"목장일",projectCreate:"새로운 목장일 시작하기",projectManage:"목장일 관리하기"},ui:{background:{primary:"#F1F8E9",secondary:"#C8E6C9",pattern:`url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grass' patternUnits='userSpaceOnUse' width='20' height='20'%3E%3Crect width='20' height='20' fill='%23F1F8E9'/%3E%3Cpath d='M0,20 Q5,10 10,20 Q15,10 20,20' stroke='%23C8E6C9' stroke-width='1' fill='none'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grass)'/%3E%3C/svg%3E")`,gradient:"radial-gradient(circle at 30% 70%, #F1F8E9 0%, #C8E6C9 40%, #4CAF50 100%)"},border:{color:"#4CAF50",shadow:"inset 0 0 20px rgba(76, 175, 80, 0.3)"},path:{color:"rgba(76, 175, 80, 0.4)",opacity:.6}},game:{blocks:{emoji:"🌾",type:"건초 더미",collectName:"건초 더미 수집"},building:{name:"목장 헛간",description:"아늑한 목장 헛간",completionMessage:"멋진 목장 헛간이 완성되었어요! 🌾🏠"},collectInterval:35,maxBlocks:25,progressPerBlock:4},animation:{animal:{speed:.3,radius:30,bounceHeight:.05},blocks:{popDuration:"0.4s",arrangement:"tower",spacing:{horizontal:18,vertical:12}}}},hT={id:"cat",name:"그르릉",emoji:"🐱",description:"아늑한 집과 도시 생활의 편안함",colors:{light:{primary:"#FF7043",primaryLight:"#FF8A65",primaryDark:"#F4511E",secondary:"#FFC107",secondaryLight:"#FFEB3B",secondaryDark:"#FFA000",background:"#FFF8E1",paper:"#FFFFFF",info:"#2196F3",success:"#4CAF50",warning:"#FF9800",error:"#F44336"},dark:{primary:"#FF8A65",primaryLight:"#FFAB91",primaryDark:"#FF5722",secondary:"#FFCC02",secondaryLight:"#FFEB3B",secondaryDark:"#FFC107",background:"#1F1611",paper:"#2D2419",info:"#2196F3",success:"#4CAF50",warning:"#FF9800",error:"#F44336"}},concepts:{loading:"고양이가 집을 준비하는 중이에요...",welcome:"아늑한 집에 온 것을 환영해요!",appName:"고양이 비서",appDescription:"따뜻한 집에서 편안한 도움을 드리는 고양이 비서입니다",environment:"아늑한 따뜻한 집 🏠",animal:"고양이",greeting:"안녕하세요! 오늘도 집에서 편안한 하루 보내세요!",farewell:"집에서 포근한 하루 되세요!",baseTitle:"🏠 아늑한 집",baseWelcome:"고양이 비서의 집에 오신 것을 환영해요!",liveView:"🐱 고양이 집 라이브",liveViewDescription:"우리 고양이가 집에서 무엇을 하고 있는지 확인해보세요! 🐾",quickActions:"집 퀵 액션",activeProjects:"진행 중인 집안일",projectStats:"집안일 통계",animalSaying:"고양이가 말하길",temperatureMoods:{cold:"🐾 집이 따뜻해서 좋아요",cool:"🐟 시원한 집이 편안해요",mild:"🧶 완벽한 실내 온도에요!",warm:"☀️ 햇볕 드는 창가가 좋아요",hot:"🌞 시원한 곳을 찾아야겠어요!"},projectType:"집안일",projectCreate:"새로운 집안일 시작하기",projectManage:"집안일 관리하기"},ui:{background:{primary:"#FFF8E1",secondary:"#FFE7B3",pattern:`url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='bigpaws' patternUnits='userSpaceOnUse' width='60' height='60'%3E%3Crect width='60' height='60' fill='%23FFF8E1'/%3E%3Ccircle cx='18' cy='18' r='6' fill='%23FFE7B3' fill-opacity='0.45'/%3E%3Ccircle cx='14' cy='14' r='2' fill='%23FFE7B3' fill-opacity='0.35'/%3E%3Ccircle cx='22' cy='14' r='2' fill='%23FFE7B3' fill-opacity='0.35'/%3E%3Ccircle cx='14' cy='22' r='2' fill='%23FFE7B3' fill-opacity='0.35'/%3E%3Ccircle cx='22' cy='22' r='2' fill='%23FFE7B3' fill-opacity='0.35'/%3E%3Crect x='38' y='8' width='14' height='14' rx='2' ry='2' fill='%23FFF1CF' fill-opacity='0.55'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23bigpaws)'/%3E%3C/svg%3E")`,gradient:"radial-gradient(circle at 50% 30%, #FFF8E1 0%, #FFE7B3 45%, #FF8A65 100%)"},border:{color:"#FF7043",shadow:"inset 0 0 20px rgba(255, 112, 67, 0.3)"},path:{color:"rgba(255, 112, 67, 0.4)",opacity:.5}},game:{blocks:{emoji:"🧶",type:"실뭉치",collectName:"실뭉치 수집"},building:{name:"캣타워",description:"높고 멋진 캣타워",completionMessage:"멋진 캣타워가 완성되었어요! 🐱🗼"},collectInterval:25,maxBlocks:25,progressPerBlock:4},animation:{animal:{speed:.7,radius:40,bounceHeight:.2},blocks:{popDuration:"0.2s",arrangement:"tower",spacing:{horizontal:15,vertical:18}}}},dT={penguin:Ep,"desert-fox":lT,sheep:uT,cat:hT},Fc=n=>dT[n]||Ep,fT=(n,e)=>{const t=Fc(n),r=e==="auto"?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;return t.colors[r]},SA=n=>(n==null?void 0:n.ui)||oT,RA=n=>(n==null?void 0:n.game)||aT,pT=n=>(n==null?void 0:n.animation)||cT,mT={penguin:"🐧","desert-fox":"🦊",sheep:"🐑",cat:"🐱"},gT=(n,e,t)=>Math.min(Math.max(n,e),t),yT=({themeConfig:n})=>{const e=Dh(),t=ta(e.breakpoints.down("md")),r=ta("(prefers-reduced-motion: reduce)"),s=mT[(n==null?void 0:n.id)??"penguin"]??"🐧",i=pT(n),[a,c]=k.useState({xPct:10,direction:1}),[u,h]=k.useState(0),f=k.useRef(null),m=k.useRef(null),_=k.useRef({xPct:10,direction:1});if(k.useEffect(()=>{if(r)return;m.current=null,_.current={xPct:10,direction:1},c(_.current);const x=A=>{if(m.current==null){m.current=A,f.current=requestAnimationFrame(x);return}const N=A-m.current;m.current=A;const $=(t?20:30)*(i.animal.speed??.5)*N/1e3,re=window.innerWidth||1,ae=$/re*100*_.current.direction;let S=_.current.xPct+ae,g=_.current.direction;S>92?(S=92,g=-1):S<2&&(S=2,g=1);const E=A/1e3,T=Math.sin(E*6)*(i.animal.bounceHeight??.1)*(t?8:12);_.current={xPct:S,direction:g},h(T),c(I=>({...I,..._.current})),f.current=requestAnimationFrame(x)};return f.current=requestAnimationFrame(x),()=>{f.current!=null&&cancelAnimationFrame(f.current),f.current=null,m.current=null}},[t,r,n==null?void 0:n.id]),r)return null;const b=gT(t?28:40,24,48),P=t?6:10;return p.jsx(z,{"aria-hidden":!0,sx:{position:"fixed",left:`${a.xPct}%`,bottom:`${P+u}px`,transform:`translateX(-50%) scaleX(${a.direction})`,transition:"transform 0.1s linear",fontSize:`${b}px`,zIndex:1,pointerEvents:"none",filter:e.palette.mode==="light"?"drop-shadow(0 2px 4px rgba(0,0,0,0.2))":"drop-shadow(0 2px 4px rgba(0,0,0,0.5))",opacity:.9},children:p.jsx("span",{role:"img","aria-label":"theme-animal",children:s})})},ea=n=>{switch(n){case"/":we(()=>import("./Dashboard-7c91c5aa.js").then(e=>e.D),["assets/Dashboard-7c91c5aa.js","assets/mui-754dcb1a.js","assets/dayjs-9d6a636c.js"]);break;case"/condition":we(()=>import("./ConditionTracker-b9119230.js"),["assets/ConditionTracker-b9119230.js","assets/mui-754dcb1a.js","assets/dayjs-9d6a636c.js"]);break;case"/analytics":we(()=>import("./Analytics-c72cdfe2.js"),["assets/Analytics-c72cdfe2.js","assets/mui-754dcb1a.js","assets/dayjs-9d6a636c.js"]);break;case"/projects":we(()=>import("./ProjectManager-b29519a1.js"),["assets/ProjectManager-b29519a1.js","assets/mui-754dcb1a.js","assets/dayjs-9d6a636c.js"]);break;case"/todos":we(()=>import("./TodoManager-89098051.js"),["assets/TodoManager-89098051.js","assets/mui-754dcb1a.js","assets/dayjs-9d6a636c.js"]);break;case"/pomodoro":we(()=>import("./Pomodoro-49e9f95d.js"),["assets/Pomodoro-49e9f95d.js","assets/mui-754dcb1a.js","assets/dayjs-9d6a636c.js"]);break;case"/chat":we(()=>import("./Chat-4194cc70.js"),["assets/Chat-4194cc70.js","assets/mui-754dcb1a.js","assets/dayjs-9d6a636c.js","assets/presence-2cb48a1f.js"]);break;case"/profile":we(()=>import("./Profile-cfa318f2.js"),["assets/Profile-cfa318f2.js","assets/mui-754dcb1a.js","assets/dayjs-9d6a636c.js"]);break;case"/settings":we(()=>import("./Settings-31bdb7d6.js"),["assets/Settings-31bdb7d6.js","assets/mui-754dcb1a.js","assets/dayjs-9d6a636c.js"]);break;case"/admin":we(()=>import("./AdminPanel-ee2a256d.js"),["assets/AdminPanel-ee2a256d.js","assets/mui-754dcb1a.js","assets/dayjs-9d6a636c.js","assets/presence-2cb48a1f.js"]);break}},_T=180,Ph=280,vT=({children:n,user:e,themeConfig:t})=>{var I,w,v,W;const r=Dh(),s=Mi(),i=qh(),[a,c]=k.useState(null),[u,h]=k.useState(!1),f=ta(r.breakpoints.down("md")),[m,_]=k.useState(!1),[b,P]=k.useState(!1),x=xi(e.email),A=()=>{_(!m)},N=()=>{P(!b)},M=O=>{i(O),f&&_(!1)},$=(()=>{var Z,yr;const O={penguin:{name:"펭귄",environment:"빙하",homeIcon:p.jsx($l,{}),healthIcon:p.jsx($l,{}),analyticsIcon:p.jsx(js,{}),projectIcon:p.jsx(zl,{}),timerIcon:p.jsx(Nr,{}),chatIcon:p.jsx(Us,{}),profileIcon:p.jsx(fn,{}),adminIcon:p.jsx(Bs,{}),settingsIcon:p.jsx(Dr,{})},"desert-fox":{name:"사막여우",environment:"사막",homeIcon:p.jsx(Cm,{}),healthIcon:p.jsx(fn,{}),analyticsIcon:p.jsx(js,{}),projectIcon:p.jsx(zl,{}),timerIcon:p.jsx(Nr,{}),chatIcon:p.jsx(Us,{}),profileIcon:p.jsx(fn,{}),adminIcon:p.jsx(Bs,{}),settingsIcon:p.jsx(Dr,{})},sheep:{name:"양",environment:"목초지",homeIcon:p.jsx(Pm,{}),healthIcon:p.jsx(fn,{}),analyticsIcon:p.jsx(js,{}),projectIcon:p.jsx(km,{}),timerIcon:p.jsx(Nr,{}),chatIcon:p.jsx(Us,{}),profileIcon:p.jsx(fn,{}),adminIcon:p.jsx(Bs,{}),settingsIcon:p.jsx(Dr,{})},cat:{name:"고양이",environment:"집",homeIcon:p.jsx(ql,{}),healthIcon:p.jsx(fn,{}),analyticsIcon:p.jsx(js,{}),projectIcon:p.jsx(ql,{}),timerIcon:p.jsx(Nr,{}),chatIcon:p.jsx(Us,{}),profileIcon:p.jsx(fn,{}),adminIcon:p.jsx(Bs,{}),settingsIcon:p.jsx(Dr,{})}},fe=(t==null?void 0:t.id)||"penguin",le=O[fe]||O.penguin,X=[{text:"홈",icon:le.homeIcon,path:"/",emoji:(t==null?void 0:t.emoji)||"🐧",color:r.palette.primary.main,description:`${le.name}와 함께하는 홈`},{text:"컨디션 체크",icon:le.healthIcon,path:"/condition",emoji:"💚",color:r.palette.success.main,description:"몸과 마음의 상태 기록"},{text:"활동 분석",icon:le.analyticsIcon,path:"/analytics",emoji:"📊",color:r.palette.info.main,description:"데이터로 보는 나의 변화"},{text:(Z=t==null?void 0:t.concepts)!=null&&Z.projectType?`${le.name} ${t.concepts.projectType}`:`${le.name} 프로젝트`,icon:le.projectIcon,path:"/projects",emoji:et(fe),color:r.palette.warning.main,description:((yr=t==null?void 0:t.concepts)==null?void 0:yr.projectManage)||"프로젝트 관리"},{text:"계획 관리",icon:p.jsx(xm,{}),path:"/todos",emoji:"📝",color:r.palette.primary.main,description:"할일과 대주제(에픽) 관리"},{text:"집중 여행",icon:le.timerIcon,path:"/pomodoro",emoji:tt(fe),color:r.palette.secondary.main,description:`${le.name}과 함께하는 집중 시간`},{text:"프로필",icon:le.profileIcon,path:"/profile",emoji:"👤",color:r.palette.secondary.main,description:"개인 정보 및 설정"}];function et(K){switch(K){case"penguin":return"🗺️";case"desert-fox":return"🐪";case"sheep":return"🚜";case"cat":return"🏠";default:return"📁"}}function tt(K){switch(K){case"penguin":return"⏰";case"desert-fox":return"🕒";case"sheep":return"⏲️";case"cat":return"🕐";default:return"⏰"}}x&&X.push({text:`${le.environment} 관리소`,icon:le.adminIcon,path:"/admin",emoji:cn(fe),color:r.palette.error.main,description:"관리자 전용 패널"});function cn(K){switch(K){case"penguin":return"🏛️";case"desert-fox":return"🏢";case"sheep":return"🏪";case"cat":return"🏬";default:return"🏛️"}}X.push({text:`${le.environment} 설정`,icon:le.settingsIcon,path:"/settings",emoji:be(fe),color:r.palette.grey[600],description:"앱 설정 및 환경설정"});function be(K){switch(K){case"penguin":return"❄️";case"desert-fox":return"⚙️";case"sheep":return"🔧";case"cat":return"🔩";default:return"⚙️"}}return X})(),re=()=>{var fe,le;return{"/":`${(t==null?void 0:t.emoji)||"🏠"} ${((fe=t==null?void 0:t.concepts)==null?void 0:fe.environment)||"홈"}`,"/condition":`💚 ${((le=t==null?void 0:t.concepts)==null?void 0:le.animal)||"🐧"} 컨디션 트래커`,"/analytics":"📊 분석 리포트","/projects":"🚀 프로젝트 관리","/todos":"✅ 할 일 관리","/pomodoro":"🍅 뽀모도로 타이머","/profile":"👤 프로필","/settings":"⚙️ 설정","/admin":"🛠️ 관리자 패널"}[s.pathname]||"개인 비서"},ae=O=>{c(O.currentTarget)},S=()=>{c(null)},g=async()=>{try{await K0(),S()}catch(O){console.error("로그아웃 실패:",O)}},E=p.jsxs(p.Fragment,{children:[p.jsxs(z,{sx:{p:2,display:"flex",alignItems:"center",justifyContent:b&&!f?"center":"space-between",borderBottom:`1px solid ${r.palette.divider}`,minHeight:64},children:[(!b||f)&&p.jsxs(B,{variant:"h6",fontWeight:"bold",color:"primary",children:[t==null?void 0:t.emoji," ",(t==null?void 0:t.name)||"개인 비서"]}),!f&&p.jsx(ht,{onClick:N,size:"small",sx:{color:r.palette.text.secondary,transform:b?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.3s"},children:p.jsx(mm,{})})]}),p.jsx(gm,{sx:{flexGrow:1,px:1},children:$.map(O=>p.jsx(ym,{disablePadding:!0,sx:{mb:.5},children:p.jsxs(_m,{selected:s.pathname===O.path,onClick:()=>M(O.path),onMouseEnter:()=>ea(O.path),onFocus:()=>ea(O.path),onTouchStart:()=>ea(O.path),sx:{borderRadius:2,justifyContent:b&&!f?"center":"flex-start",px:b&&!f?1:2,"&.Mui-selected":{backgroundColor:O.color+"15","&:hover":{backgroundColor:O.color+"25"}},"&:hover":{backgroundColor:O.color+"10"}},children:[p.jsx(Ls,{sx:{color:O.color,minWidth:b&&!f?"auto":35,justifyContent:"center"},children:O.icon}),(!b||f)&&p.jsx(Fs,{primary:O.text,primaryTypographyProps:{fontSize:"0.875rem",fontWeight:s.pathname===O.path?600:400}})]})},O.text))}),p.jsx(z,{sx:{p:2,borderTop:`1px solid ${r.palette.divider}`},children:p.jsxs(z,{sx:{display:"flex",alignItems:"center",gap:1,justifyContent:b&&!f?"center":"flex-start"},children:[p.jsx(Yt,{src:e.photoURL||void 0,sx:{width:32,height:32},children:((I=e.displayName)==null?void 0:I[0])||((w=e.email)==null?void 0:w[0])||"U"}),(!b||f)&&p.jsxs(p.Fragment,{children:[p.jsx(z,{sx:{flex:1,minWidth:0},children:p.jsx(B,{variant:"caption",noWrap:!0,children:e.displayName||e.email})}),p.jsx(ht,{size:"small",onClick:ae,children:p.jsx(vm,{fontSize:"small"})})]})]})})]}),T=f?Ph:b?72:_T;return p.jsxs(z,{sx:{display:"flex",width:"100%"},children:[!f&&p.jsx(Bl,{variant:"permanent",sx:{width:T,flexShrink:0,transition:r.transitions.create("width",{easing:r.transitions.easing.sharp,duration:r.transitions.duration.enteringScreen}),"& .MuiDrawer-paper":{width:T,boxSizing:"border-box",bgcolor:r.palette.background.paper,borderRight:`1px solid ${r.palette.divider}`,transition:r.transitions.create("width",{easing:r.transitions.easing.sharp,duration:r.transitions.duration.enteringScreen}),overflowX:"hidden"}},children:E}),f&&p.jsx(Bl,{variant:"temporary",open:m,onClose:A,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:Ph,boxSizing:"border-box",bgcolor:r.palette.background.paper}},children:E}),p.jsxs(z,{component:"main",sx:{flexGrow:1,overflow:"hidden",width:f?"100%":`calc(100% - ${T}px)`,transition:r.transitions.create("width",{easing:r.transitions.easing.sharp,duration:r.transitions.duration.enteringScreen})},children:[p.jsx(Em,{position:"static",elevation:0,sx:{bgcolor:r.palette.background.paper,borderBottom:`1px solid ${r.palette.divider}`},children:p.jsxs(wm,{children:[f&&p.jsx(ht,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:A,sx:{mr:2,color:r.palette.text.primary},children:p.jsx(Im,{})}),p.jsx(B,{variant:"h6",component:"div",sx:{flexGrow:1,color:r.palette.text.primary,fontSize:f?"1rem":"1.25rem"},children:re()}),p.jsx(Tm,{title:"피드백 보내기",children:p.jsx(ht,{onClick:()=>h(!0),sx:{color:r.palette.text.primary,mr:1,"&:hover":{backgroundColor:r.palette.action.hover}},children:p.jsx(Am,{})})}),p.jsx(Yt,{src:e.photoURL||void 0,sx:{width:32,height:32},children:((v=e.displayName)==null?void 0:v[0])||((W=e.email)==null?void 0:W[0])||"U"})]})}),p.jsxs(z,{sx:{height:"calc(100vh - 64px)",overflow:"auto",p:0,"& > *":{px:f?1:3,py:f?1:3}},children:[n,p.jsx(yT,{themeConfig:t})]})]}),p.jsxs(bm,{anchorEl:a,open:!!a,onClose:S,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"bottom",horizontal:"right"},children:[p.jsxs(_n,{onClick:()=>{i("/profile"),S()},children:[p.jsx(Ls,{children:p.jsx(Sm,{fontSize:"small"})}),p.jsx(Fs,{children:"프로필"})]}),p.jsxs(_n,{onClick:()=>{i("/settings"),S()},children:[p.jsx(Ls,{children:p.jsx(Dr,{fontSize:"small"})}),p.jsx(Fs,{children:"설정"})]}),p.jsx(Vh,{}),p.jsxs(_n,{onClick:g,children:[p.jsx(Ls,{children:p.jsx(Rm,{fontSize:"small"})}),p.jsx(Fs,{children:"로그아웃"})]})]}),p.jsx(iT,{open:u,onClose:()=>h(!1),user:e})]})},ET=()=>{var P,x;const[n,e]=k.useState(!1),[t,r]=k.useState(null),[s,i]=k.useState(null),[a,c]=k.useState(!1),[u,h]=k.useState(null),[f,m]=k.useState(""),_=async()=>{e(!0),r("");try{const A=await W0();console.log(A?"로그인 성공! App.tsx에서 권한 상태를 확인합니다. 🐧":"로그인이 취소되었습니다.")}catch(A){console.error("로그인 실패:",A),r(A.message||"로그인에 실패했습니다. 다시 시도해주세요. 🐧")}finally{e(!1)}},b=async()=>{if(u){e(!0);try{await gp({email:u.email,displayName:u.displayName||"",photoURL:u.photoURL||void 0,reason:f}),i("접근 권한 신청이 완료되었습니다! 관리자의 승인을 기다려주세요."),c(!1),h(null),m("")}catch{r("신청 중 오류가 발생했습니다.")}finally{e(!1)}}};return p.jsxs(z,{sx:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",p:2},children:[p.jsx(Xn,{sx:{maxWidth:400,width:"100%",textAlign:"center"},children:p.jsxs(Dm,{sx:{p:4},children:[p.jsx(Yt,{sx:{width:80,height:80,mx:"auto",mb:3,bgcolor:"primary.main",fontSize:"2rem"},children:"🐧"}),p.jsx(B,{variant:"h4",fontWeight:"bold",gutterBottom:!0,children:"펭귄 비서"}),p.jsx(B,{variant:"body1",color:"textSecondary",sx:{mb:4},children:"나만의 똑똑한 펭귄과 함께하세요 🐟"}),s&&p.jsx(Yn,{severity:"success",sx:{mb:3},children:s}),t&&p.jsx(Yn,{severity:"error",sx:{mb:3},children:t}),p.jsx(Be,{variant:"contained",size:"large",fullWidth:!0,onClick:_,disabled:n,startIcon:n?p.jsx(Sn,{size:20}):p.jsx(Vm,{}),sx:{py:1.5,fontSize:"1.1rem",textTransform:"none",borderRadius:2},children:n?"로그인 중...":"Google로 로그인"}),p.jsxs(B,{variant:"caption",color:"textSecondary",sx:{mt:3,display:"block"},children:["승인된 사용자만 접근할 수 있습니다 🔒",p.jsx("br",{}),"처음 사용하시는 경우 접근 권한을 신청해주세요"]})]})}),p.jsxs(Ci,{open:a,onClose:()=>c(!1),maxWidth:"sm",fullWidth:!0,children:[p.jsx(Pi,{children:"접근 권한 신청"}),p.jsxs(ki,{children:[u&&p.jsxs(z,{sx:{mb:3,textAlign:"center"},children:[p.jsx(Yt,{src:u.photoURL||void 0,sx:{width:60,height:60,mx:"auto",mb:2},children:((P=u.displayName)==null?void 0:P[0])||((x=u.email)==null?void 0:x[0])}),p.jsx(B,{variant:"h6",children:u.displayName}),p.jsx(B,{variant:"body2",color:"textSecondary",children:u.email})]}),p.jsx(B,{variant:"body2",color:"textSecondary",sx:{mb:2},children:"개인 비서 앱 사용을 위한 접근 권한을 신청합니다. 관리자가 검토 후 승인해드릴게요! 🚀"}),p.jsx(ai,{fullWidth:!0,multiline:!0,rows:3,label:"신청 사유 (선택사항)",placeholder:"개인 비서 앱을 사용하고 싶은 이유를 간단히 적어주세요...",value:f,onChange:A=>m(A.target.value),sx:{mt:2}})]}),p.jsxs(Di,{children:[p.jsx(Be,{onClick:()=>c(!1),children:"취소"}),p.jsx(Be,{onClick:b,variant:"contained",startIcon:p.jsx(Na,{}),disabled:n,children:"신청하기"})]})]})]})},wp=k.createContext(void 0),wT=({children:n})=>{const[e,t]=k.useState(!1),[r,s]=k.useState(25*60),[i,a]=k.useState(25*60),[c,u]=k.useState(null),[h,f]=k.useState(null),[m,_]=k.useState(!1),[b,P]=k.useState(0),[x,A]=k.useState(null),[N,M]=k.useState(null),j=k.useRef(null),$=k.useRef(null);k.useEffect(()=>(e&&r>0?$.current=setInterval(()=>{s(W=>W<=1?(t(!1),w(),0):W-1)},1e3):$.current&&(clearInterval($.current),$.current=null),()=>{$.current&&clearInterval($.current)}),[e,r]),k.useEffect(()=>{},[e,r,i,c,h,m,b,x,N]),k.useEffect(()=>{},[]);const re=()=>c?h?(x||(A(new Date().toISOString()),M(Date.now().toString())),j.current=Date.now(),t(!0),!0):(console.warn("⚠️ 작업을 선택해주세요!"),!1):(console.warn("⚠️ 프로젝트를 선택해주세요!"),!1),ae=()=>{t(!1),I()},S=()=>{t(!1),s(i),A(null),M(null),j.current=null},g=W=>{const O=W*60;s(O),a(O)},E=W=>{u(W)},T=W=>{f(W)},I=()=>{if(!x||!N)return;const W=Math.floor((i-r)/60);if(W<1)return;const O={id:N,projectId:c==null?void 0:c.id,projectTitle:(c==null?void 0:c.title)||"프로젝트 없음",taskId:h==null?void 0:h.id,taskTitle:(h==null?void 0:h.title)||"작업 없음",sessionType:m?"break":"focus",duration:i/60,actualDuration:W,startTime:x,endTime:new Date().toISOString(),completed:!1,pausedAt:new Date().toISOString()};console.log("세션 중간 데이터(저장 위임):",O)},w=()=>{if(x&&N){const W={id:N,projectId:c==null?void 0:c.id,projectTitle:(c==null?void 0:c.title)||"프로젝트 없음",taskId:h==null?void 0:h.id,taskTitle:(h==null?void 0:h.title)||"작업 없음",sessionType:m?"break":"focus",duration:i/60,actualDuration:i/60,startTime:x,endTime:new Date().toISOString(),completed:!0};console.log("세션 완료 데이터(저장 위임):",W)}P(W=>W+1),A(null),M(null),m?(_(!1),g(25)):(_(!0),g(5)),"Notification"in window&&Notification.permission==="granted"&&new Notification(m?"브레이크 완료! 🎉":"뽀모도로 완료! 🍅",{body:m?"작업을 시작하세요!":"잠시 휴식하세요!",icon:m?"🎉":"🍅"})},v={isActive:e,time:r,totalTime:i,selectedProject:c,selectedTask:h,isBreak:m,completedSessions:b,sessionStartTime:x,currentSessionId:N,startTimer:re,pauseTimer:ae,resetTimer:S,setTime:g,setProject:E,setTask:T,setIsBreak:_,completeSession:w,saveCurrentSession:I};return p.jsx(wp.Provider,{value:v,children:n})},IT=()=>{const n=k.useContext(wp);if(n===void 0)throw new Error("usePomodoro must be used within a PomodoroProvider");return n},TT=n=>{const e=Math.floor(n/60),t=n%60;return`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`},AT=({onClose:n})=>{const{isActive:e,time:t,totalTime:r,selectedProject:s,selectedTask:i,isBreak:a,startTimer:c,pauseTimer:u,resetTimer:h,sessionStartTime:f}=IT(),m=qh(),_=Mi(),[b,P]=k.useState(!1),[x,A]=k.useState({x:20,y:20}),[N,M]=k.useState(!1),[j,$]=k.useState({x:0,y:0});Gr.useEffect(()=>{const w=()=>({width:b?56:280,height:b?56:200}),W=()=>{const{width:le,height:X}=w(),et=Math.max(0,window.innerWidth-le-20),tt=Math.max(0,window.innerHeight-X-20);A(cn=>({x:Math.min(cn.x,et),y:Math.min(cn.y,tt)}))},{width:O,height:fe}=w();return A({x:Math.max(20,window.innerWidth-O-20),y:Math.max(20,window.innerHeight-fe-20)}),window.addEventListener("resize",W),()=>window.removeEventListener("resize",W)},[b]);const re=w=>{(w.target.closest(".drag-handle")||b)&&(w.preventDefault(),M(!0),$({x:w.clientX-x.x,y:w.clientY-x.y}))},ae=w=>{if(N){const v=w.clientX-j.x,W=w.clientY-j.y,O=b?56:280,fe=b?56:200,le=window.innerWidth-O,X=window.innerHeight-fe;A({x:Math.max(0,Math.min(v,le)),y:Math.max(0,Math.min(W,X))})}},S=()=>{M(!1)};Gr.useEffect(()=>{if(N)return document.addEventListener("mousemove",ae),document.addEventListener("mouseup",S),()=>{document.removeEventListener("mousemove",ae),document.removeEventListener("mouseup",S)}},[N,j,x,b]);const g=_.pathname!=="/pomodoro";if(!g)return null;const E=(r-t)/r*100,T=()=>{if(!N){if(b){P(!1);return}m("/pomodoro")}},I=b||!s||!i;return p.jsx(Nh,{direction:"up",in:g,mountOnEnter:!0,unmountOnExit:!0,children:p.jsx(z,{sx:{position:"fixed",top:`${x.y}px`,left:`${x.x}px`,zIndex:1e3,maxWidth:b?64:280,minWidth:b?56:260,cursor:N?"grabbing":"default"},children:p.jsx(Nm,{in:g,children:p.jsx(Xn,{sx:{borderRadius:b?999:2,boxShadow:N?"0 20px 60px rgba(0, 0, 0, 0.4)":"0 8px 32px rgba(0, 0, 0, 0.2)",background:b?"linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%)":a?"linear-gradient(135deg, #4CAF50 0%, #81C784 100%)":"linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%)",color:"white",cursor:I?"pointer":"default",transition:N?"none":"all 0.3s ease",border:"2px solid rgba(255, 255, 255, 0.3)",width:b?56:"auto",height:b?56:"auto",display:"flex",alignItems:"center",justifyContent:"center","&:hover":{transform:N?"none":b?"translateY(-2px)":"translateY(-4px)",boxShadow:N?"0 20px 60px rgba(0, 0, 0, 0.4)":"0 12px 40px rgba(0, 0, 0, 0.3)",border:"2px solid rgba(255, 255, 255, 0.5)"}},onClick:I?T:void 0,onMouseDown:re,children:b?p.jsx(z,{sx:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%"},children:p.jsx(B,{component:"span",sx:{fontSize:28,lineHeight:1},children:"🍅"})}):p.jsxs(z,{sx:{p:2,width:"100%"},children:[p.jsxs(z,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",mb:1,borderBottom:"1px solid rgba(255, 255, 255, 0.2)",pb:1},children:[p.jsxs(z,{sx:{display:"flex",alignItems:"center",gap:1},children:[p.jsx(Om,{className:"drag-handle",sx:{fontSize:"1rem",cursor:"grab",opacity:.7,"&:hover":{opacity:1},"&:active":{cursor:"grabbing"}}}),p.jsx(Nr,{sx:{fontSize:"1.1rem"}}),p.jsx(B,{variant:"body2",fontWeight:"bold",sx:{fontSize:"0.85rem"},children:a?"🌱 BREAK":"🍅 FOCUS"})]}),p.jsxs(z,{sx:{display:"flex",gap:.5},children:[b?p.jsx(ht,{size:"small",onClick:w=>{w.stopPropagation(),P(!1)},sx:{color:"white",opacity:.7,"&:hover":{opacity:1},width:24,height:24},children:p.jsx(Mm,{fontSize:"small"})}):p.jsx(ht,{size:"small",onClick:w=>{w.stopPropagation(),P(!0)},sx:{color:"white",opacity:.7,"&:hover":{opacity:1},width:24,height:24},children:p.jsx(Lm,{fontSize:"small"})}),n&&p.jsx(ht,{size:"small",onClick:w=>{w.stopPropagation(),n()},sx:{color:"white",opacity:.7,"&:hover":{opacity:1},width:24,height:24},children:p.jsx(Oh,{fontSize:"small"})})]})]}),p.jsxs(z,{sx:{textAlign:"center",mb:2,py:1,backgroundColor:"rgba(0, 0, 0, 0.2)",borderRadius:2,border:"1px solid rgba(255, 255, 255, 0.2)"},children:[p.jsx(B,{variant:"h3",fontWeight:"bold",sx:{fontFamily:"'Roboto Mono', 'Courier New', monospace",fontSize:"2.2rem",letterSpacing:"0.05em",textShadow:"0 2px 4px rgba(0,0,0,0.3)"},children:TT(t)}),p.jsxs(B,{variant:"caption",sx:{opacity:.8,fontSize:"0.7rem",display:"block",mt:.5},children:[Math.floor(E),"% COMPLETE"]})]}),p.jsx(Mh,{variant:"determinate",value:E,sx:{height:8,borderRadius:2,mb:2,backgroundColor:"rgba(0, 0, 0, 0.3)",border:"1px solid rgba(255, 255, 255, 0.2)","& .MuiLinearProgress-bar":{borderRadius:2,backgroundColor:"rgba(255, 255, 255, 0.9)",boxShadow:"0 0 10px rgba(255, 255, 255, 0.5)"}}}),s||i?p.jsxs(z,{sx:{mb:2,p:1,backgroundColor:"rgba(0, 0, 0, 0.2)",borderRadius:2,border:"1px solid rgba(255, 255, 255, 0.2)"},children:[s&&p.jsxs(B,{variant:"caption",sx:{display:"block",opacity:.9,fontSize:"0.7rem",fontWeight:"bold"},children:["📁 ",s.title]}),i&&p.jsxs(B,{variant:"caption",sx:{display:"block",opacity:.8,fontSize:"0.7rem",mt:.5},children:["📝 ",i.title]})]}):p.jsxs(z,{sx:{mb:2,p:1,backgroundColor:"rgba(255, 255, 255, 0.1)",borderRadius:2,border:"1px dashed rgba(255, 255, 255, 0.3)"},children:[p.jsx(B,{variant:"caption",sx:{display:"block",opacity:.7,fontSize:"0.65rem",textAlign:"center",fontStyle:"italic"},children:"⚠️ No project/task selected"}),p.jsx(B,{variant:"caption",sx:{display:"block",opacity:.6,fontSize:"0.6rem",textAlign:"center",mt:.5},children:"Click to set up"})]}),p.jsxs(z,{sx:{display:"flex",justifyContent:"center",gap:1,mb:1},children:[p.jsx(ht,{size:"small",onClick:w=>{w.stopPropagation(),e?u():c()||alert(`프로젝트와 작업을 먼저 선택해주세요! 🎯

뽀모도로 페이지에서 설정할 수 있습니다.`)},disabled:!s||!i,sx:{backgroundColor:"rgba(255, 255, 255, 0.2)",color:"white",width:36,height:36,border:"1px solid rgba(255, 255, 255, 0.3)","&:hover":{backgroundColor:"rgba(255, 255, 255, 0.3)",transform:"scale(1.05)"},"&:disabled":{backgroundColor:"rgba(255, 255, 255, 0.1)",color:"rgba(255, 255, 255, 0.5)"},transition:"all 0.2s ease"},children:e?p.jsx(Fm,{fontSize:"small"}):p.jsx(jm,{fontSize:"small"})}),p.jsx(ht,{size:"small",onClick:w=>{w.stopPropagation(),h()},sx:{backgroundColor:"rgba(255, 255, 255, 0.2)",color:"white",width:36,height:36,border:"1px solid rgba(255, 255, 255, 0.3)","&:hover":{backgroundColor:"rgba(255, 255, 255, 0.3)",transform:"scale(1.05)"},transition:"all 0.2s ease"},children:p.jsx(Um,{fontSize:"small"})})]}),p.jsx(B,{variant:"caption",sx:{display:"block",textAlign:"center",opacity:.8},children:"전체 보기를 보려면 클릭하세요"})]})})})})})},jc="emergency_alerts",bT=()=>`alert-${Date.now()}-${Math.random().toString(36).substr(2,9)}`,ST=n=>{const e={id:bT(),title:n.title,message:n.message,type:n.type||"info",severity:n.severity||"medium",dismissible:n.dismissible!==!1,persistent:n.persistent||!1,showOnce:n.showOnce||!1,dismissed:!1,createdAt:ie().toISOString(),expiresAt:n.expiresIn?ie().add(n.expiresIn,"minute").toISOString():void 0},t=an();return t.push(e),po(t),e},an=()=>{try{const n=localStorage.getItem(jc);return n?JSON.parse(n):[]}catch(n){return console.error("긴급알림 로드 실패:",n),[]}},po=n=>{try{localStorage.setItem(jc,JSON.stringify(n))}catch(e){console.error("긴급알림 저장 실패:",e)}},Ip=()=>{const n=an(),e=ie();return n.filter(t=>!(t.dismissed||t.expiresAt&&e.isAfter(ie(t.expiresAt))))},RT=()=>an().sort((e,t)=>ie(t.createdAt).valueOf()-ie(e.createdAt).valueOf()),xT=()=>{const n=an(),e=ie();return n.filter(t=>!(t.read||t.expiresAt&&e.isAfter(ie(t.expiresAt))))},CT=n=>{const e=an(),t=e.findIndex(r=>r.id===n);t!==-1&&(e[t].read=!0,e[t].readAt=ie().toISOString(),po(e))},Va=n=>{const e=an(),t=e.findIndex(r=>r.id===n);t!==-1&&(e[t].dismissed=!0,e[t].dismissedAt=ie().toISOString(),po(e))},PT=()=>{localStorage.removeItem(jc)},kT=()=>{const n=an(),e=ie(),t=n.filter(r=>!(r.expiresAt&&e.isAfter(ie(r.expiresAt))&&!r.persistent));t.length!==n.length&&po(t)},Tp={create:n=>{const e=ST(n);return console.log("🚨 긴급알림이 생성되었습니다:",e),e},list:()=>{const n=an();return console.table(n),n},active:()=>{const n=Ip();return console.table(n),n},history:()=>{const n=RT();return console.table(n),n},unread:()=>{const n=xT();return console.table(n),n},markRead:n=>{CT(n),console.log(`📖 알림 ${n}를 읽음으로 표시했습니다.`)},dismiss:n=>{Va(n),console.log(`✅ 알림 ${n}가 닫혔습니다.`)},clear:()=>{PT(),console.log("🗑️ 모든 긴급알림이 삭제되었습니다.")},createSamples:()=>{[{title:"🎉 새로운 기능 업데이트",message:"데이터 백업 및 복구 기능이 추가되었습니다! 이제 언제든지 안전하게 데이터를 관리할 수 있어요.",type:"success",severity:"medium",expiresIn:1440},{title:"⚠️ 시스템 점검 안내",message:"내일 오전 2시-4시 시스템 점검이 예정되어 있습니다. 이 시간 동안 서비스 이용이 제한될 수 있습니다.",type:"warning",severity:"high",expiresIn:2880},{title:"🚨 중요 보안 업데이트",message:"보안 강화를 위한 업데이트가 적용되었습니다. 모든 사용자는 비밀번호 변경을 권장합니다.",type:"error",severity:"critical",persistent:!0,dismissible:!0}].forEach(e=>Tp.create(e)),console.log("📋 샘플 긴급알림들이 생성되었습니다.")}};typeof window<"u"&&(window.adminAlert=Tp);const DT=Gr.forwardRef(function(e,t){return p.jsx(Nh,{direction:"down",ref:t,...e})}),VT=({onAlertDismissed:n})=>{const[e,t]=k.useState([]),[r,s]=k.useState(0),[i,a]=k.useState(!1);k.useEffect(()=>{const x=()=>{kT();const N=Ip();N.length>0?(t(N),s(0),a(!0)):a(!1)};x();const A=setInterval(x,3e4);return()=>clearInterval(A)},[]);const c=e[r],u=(x,A)=>{const N={fontSize:"large",sx:{mr:1,color:A==="critical"?"error.main":A==="high"?"warning.main":A==="medium"?"info.main":"success.main"}};switch(x){case"error":return p.jsx(Wm,{...N});case"warning":return p.jsx(qm,{...N});case"success":return p.jsx(zm,{...N});default:return A==="critical"?p.jsx(Bm,{...N}):p.jsx($m,{...N})}},h=x=>{switch(x){case"critical":return"error";case"high":return"warning";case"medium":return"info";case"low":return"success";default:return"info"}},f=x=>{switch(x){case"critical":return"🚨 긴급";case"high":return"⚠️ 높음";case"medium":return"📢 보통";case"low":return"💡 낮음";default:return"📢 보통"}},m=()=>{if(c){Va(c.id),n==null||n(c.id);const x=e.filter(A=>A.id!==c.id);x.length>0?(t(x),s(Math.min(r,x.length-1))):(a(!1),t([]),s(0))}},_=()=>{r<e.length-1&&s(r+1)},b=()=>{r>0&&s(r-1)},P=()=>{e.forEach(x=>{x.dismissible&&(Va(x.id),n==null||n(x.id))}),a(!1),t([]),s(0)};return!c||!i?null:p.jsxs(Ci,{open:i,TransitionComponent:DT,keepMounted:!0,onClose:c.dismissible?m:void 0,maxWidth:"md",fullWidth:!0,PaperProps:{sx:{borderRadius:3,border:"2px solid",borderColor:`${h(c.severity)}.main`,boxShadow:`0 8px 32px rgba(${c.severity==="critical"?"244, 67, 54":c.severity==="high"?"255, 152, 0":c.severity==="medium"?"33, 150, 243":"76, 175, 80"}, 0.3)`}},children:[p.jsxs(Pi,{sx:{backgroundColor:`${h(c.severity)}.main`,color:"white",display:"flex",alignItems:"center",justifyContent:"space-between",pr:1},children:[p.jsxs(z,{display:"flex",alignItems:"center",flex:1,children:[u(c.type,c.severity),p.jsx(B,{variant:"h6",fontWeight:"bold",sx:{mr:2},children:c.title}),p.jsx(kh,{label:f(c.severity),size:"small",sx:{backgroundColor:"rgba(255, 255, 255, 0.2)",color:"white",fontWeight:"bold"}})]}),c.dismissible&&p.jsx(ht,{size:"small",onClick:m,sx:{color:"white",ml:1},children:p.jsx(Oh,{})})]}),p.jsxs(ki,{sx:{pt:3},children:[p.jsx(Yn,{severity:c.type,sx:{mb:2,borderRadius:2},icon:!1,children:p.jsx(B,{variant:"body1",sx:{whiteSpace:"pre-line"},children:c.message})}),p.jsxs(z,{sx:{mt:2,p:2,backgroundColor:"grey.50",borderRadius:2},children:[p.jsxs(B,{variant:"caption",color:"text.secondary",display:"block",children:["📅 생성: ",ie(c.createdAt).format("YYYY-MM-DD HH:mm")]}),c.expiresAt&&p.jsxs(B,{variant:"caption",color:"text.secondary",display:"block",children:["⏰ 만료: ",ie(c.expiresAt).format("YYYY-MM-DD HH:mm")]}),c.persistent&&p.jsx(B,{variant:"caption",color:"warning.main",display:"block",children:"📌 지속적 알림 (새로고침해도 계속 표시)"})]}),e.length>1&&p.jsxs(p.Fragment,{children:[p.jsx(Vh,{sx:{my:2}}),p.jsxs(z,{display:"flex",justifyContent:"center",alignItems:"center",gap:2,children:[p.jsx(Be,{size:"small",onClick:b,disabled:r===0,variant:"outlined",children:"이전"}),p.jsxs(B,{variant:"body2",color:"text.secondary",children:[r+1," / ",e.length]}),p.jsx(Be,{size:"small",onClick:_,disabled:r===e.length-1,variant:"outlined",children:"다음"})]})]})]}),p.jsxs(Di,{sx:{p:3,gap:1},children:[e.length>1&&p.jsx(Be,{onClick:P,variant:"outlined",color:"secondary",sx:{mr:"auto"},children:"모든 알림 닫기"}),c.dismissible&&p.jsx(Be,{onClick:m,variant:"contained",color:"primary",children:e.length>1?"이 알림 닫기":"확인"}),!c.dismissible&&p.jsx(B,{variant:"caption",color:"text.secondary",sx:{fontStyle:"italic"},children:"이 알림은 자동으로 닫을 수 없습니다"})]})]})},NT=({message:n="시스템 점검 중입니다. 잠시 후 다시 이용해주세요."})=>p.jsxs(z,{sx:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",p:3},children:[p.jsxs(Hm,{elevation:8,sx:{p:6,textAlign:"center",maxWidth:500,borderRadius:3,background:"rgba(255, 255, 255, 0.95)",backdropFilter:"blur(10px)"},children:[p.jsx(z,{sx:{mb:3},children:p.jsx(Gm,{sx:{fontSize:80,color:"#ff9800",mb:2,animation:"pulse 2s infinite"}})}),p.jsx(B,{variant:"h4",fontWeight:"bold",sx:{mb:2,background:"linear-gradient(45deg, #ff9800 30%, #f57c00 90%)",backgroundClip:"text",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"🚧 시스템 점검 중"}),p.jsx(B,{variant:"body1",sx:{mb:4,color:"text.secondary",lineHeight:1.6},children:n}),p.jsx(z,{sx:{mb:3},children:p.jsx(Sn,{size:40,sx:{color:"#ff9800",animation:"spin 2s linear infinite"}})}),p.jsxs(z,{sx:{display:"flex",alignItems:"center",justifyContent:"center",gap:1,color:"text.secondary"},children:[p.jsx(Km,{fontSize:"small"}),p.jsxs(B,{variant:"body2",children:["점검 시작: ",new Date().toLocaleString("ko-KR")]})]}),p.jsx(B,{variant:"caption",sx:{mt:3,display:"block",color:"text.disabled"},children:"문의사항이 있으시면 관리자에게 연락해주세요."})]}),p.jsx("style",{children:`
          @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.5; }
            100% { opacity: 1; }
          }
          
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `})]});class OT extends Gr.Component{constructor(t){super(t);ct(this,"handleRetry",()=>{this.setState({hasError:!1,error:void 0})});this.state={hasError:!1}}static getDerivedStateFromError(t){return{hasError:!0,error:t}}componentDidCatch(t){}render(){if(this.state.hasError){const t=(()=>{const r=this.state.error,s=(r==null?void 0:r.message)??"";return/Loading chunk|ChunkLoadError|dynamic import/i.test(s)?"리소스 로딩 중 문제가 발생했어요. 잠시 후 다시 시도하거나 새로고침 해주세요.":"일시적인 오류가 발생했어요. 다시 시도해주세요."})();return p.jsxs(z,{sx:{p:4,display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[p.jsx(Sn,{}),p.jsx(B,{variant:"body2",color:"text.secondary",sx:{textAlign:"center"},children:t}),p.jsxs(z,{sx:{display:"flex",gap:1},children:[p.jsx(Be,{variant:"contained",onClick:this.handleRetry,children:"다시 시도"}),p.jsx(Be,{variant:"outlined",onClick:()=>window.location.reload(),children:"새로고침"})]})]})}return this.props.children}}const MT=async n=>{try{const e={title:"📦 임시 보관함 (Legacy Projects)",description:"에픽이 지정되지 않은 기존 프로젝트들이 임시로 보관되는 곳입니다. 새로운 에픽을 생성해서 프로젝트들을 정리해보세요!",status:"planning",priority:"low",startDate:new Date().toISOString().split("T")[0],dueDate:new Date(Date.now()+31536e6).toISOString().split("T")[0],progress:0,projects:[],color:"#9e9e9e",emoji:"📦",tags:["legacy","temporary"],createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),userEmail:n,isTemporary:!0},t=await Sc(kt(Ae,"epics"),e);return console.log("✅ 임시 에픽 생성 완료:",t.id),t.id}catch(e){throw console.error("❌ 임시 에픽 생성 실패:",e),e}},LT=async n=>{try{console.log("🔄 레거시 프로젝트 마이그레이션 시작...");const e=Jt(kt(Ae,"projects"),Tt("userEmail","==",n)),t=await or(e),r=[];if(t.forEach(u=>{const h={id:u.id,...u.data()};(!h.epicId||h.epicId==="")&&r.push(h)}),r.length===0)return console.log("✅ 마이그레이션할 레거시 프로젝트가 없습니다."),{success:!0,migratedCount:0};const s=Jt(kt(Ae,"epics"),Tt("userEmail","==",n),Tt("isTemporary","==",!0)),i=await or(s);let a;i.empty?a=await MT(n):(a=i.docs[0].id,console.log("📦 기존 임시 에픽 사용:",a));const c=r.map(async u=>{const h=Ke(Ae,"projects",u.id);await oo(h,{epicId:a,updatedAt:Rc()}),console.log(`📎 프로젝트 "${u.title}" → 임시 에픽으로 이동`)});return await Promise.all(c),console.log(`✅ ${r.length}개의 레거시 프로젝트 마이그레이션 완료!`),{success:!0,migratedCount:r.length,tempEpicId:a}}catch(e){return console.error("❌ 레거시 프로젝트 마이그레이션 실패:",e),{success:!1,error:e}}},xA=async n=>{try{const e=Jt(kt(Ae,"epics"),Tt("userEmail","==",n),Tt("isTemporary","==",!0)),t=await or(e);if(t.empty)return{hasTempEpic:!1,projectCount:0};const r=t.docs[0].id,s=Jt(kt(Ae,"projects"),Tt("userEmail","==",n),Tt("epicId","==",r)),i=await or(s);return{hasTempEpic:!0,tempEpicId:r,projectCount:i.size,tempEpic:{id:r,...t.docs[0].data()}}}catch(e){return console.error("❌ 임시 에픽 상태 확인 실패:",e),{hasTempEpic:!1,projectCount:0,error:e}}},CA=n=>[`📦 임시 보관함에 ${n}개의 프로젝트가 있어요!`,"🎯 관련 프로젝트들을 묶어서 새로운 에픽을 만들어보세요.",'✨ 예시: "웹사이트 리뉴얼", "모바일 앱 개발", "마케팅 캠페인" 등',"🚀 에픽으로 정리하면 프로젝트 관리가 훨씬 쉬워져요!"].join(`
`),FT=async n=>{try{const e=await LT(n);return e.success&&e.migratedCount&&e.migratedCount>0?{shouldShowNotification:!0,message:`📦 ${e.migratedCount}개의 기존 프로젝트를 임시 보관함으로 이동했어요!
새로운 에픽을 만들어서 프로젝트들을 정리해보세요! 🎯`,tempEpicId:e.tempEpicId}:{shouldShowNotification:!1}}catch(e){return console.error("❌ 자동 마이그레이션 체크 실패:",e),{shouldShowNotification:!1,error:e}}},jT=n=>{const e={};return Object.keys(n).forEach(t=>{const r=n[t];r!==void 0&&(e[t]=r)}),e},Vr=n=>n.map(e=>jT(e)),lt=()=>`${Date.now()}-${Math.random().toString(36).substr(2,9)}`,Ap=k.createContext(void 0),UT=({children:n})=>{k.useState([]),k.useState([]),k.useState([]);const[e,t]=k.useState([]),[r,s]=k.useState([]),[i,a]=k.useState([]),c=async()=>{try{const g=Ye();if(g){console.log(`[Todo] Firebase 로드 시작: uid=${g.uid}`);const E=await oi(g.uid,"epics");let T=Array.isArray(E.data)?E.data:[],I=!1;if(T=T.map(X=>X.id?X:(I=!0,{...X,id:lt()})),a(T),I)try{await _e(g.uid,"epics",T)}catch(X){console.warn("에픽 ID 백필 저장 경고:",X)}const w=await oi(g.uid,"projects");let v=Array.isArray(w.data)?w.data:[],W=!1;if(v=v.map(X=>X.id?X:(W=!0,{...X,id:lt()})),t(v),W)try{await _e(g.uid,"projects",v)}catch(X){console.warn("프로젝트 ID 백필 저장 경고:",X)}const O=await oi(g.uid,"projectTodos");let fe=Array.isArray(O.data)?O.data:[],le=!1;if(fe=fe.map(X=>(X.id||(le=!0,X={...X,id:lt()}),X)),s(fe),le)try{await _e(g.uid,"projectTodos",fe)}catch(X){console.warn("할일 ID 백필 저장 경고:",X)}console.log(`[Todo] Firebase 로드 완료: epics=${T.length}, projects=${v.length}, todos=${fe.length}`);try{const X=(Array.isArray(v)?v:[]).reduce((be,Z)=>((Array.isArray(Z==null?void 0:Z.tasks)?Z.tasks:[]).forEach(K=>{be.push({id:(K==null?void 0:K.id)??lt(),title:K==null?void 0:K.title,description:(K==null?void 0:K.description)??"",completed:((K==null?void 0:K.status)??"todo")==="completed",priority:(K==null?void 0:K.priority)??"medium",dueDate:K==null?void 0:K.dueDate,tags:(K==null?void 0:K.tags)??[],projectId:Z==null?void 0:Z.id,epicId:Z==null?void 0:Z.epicId,createdAt:(K==null?void 0:K.createdAt)??(Z==null?void 0:Z.createdAt)??ie().toISOString(),updatedAt:(K==null?void 0:K.updatedAt)??(Z==null?void 0:Z.updatedAt)??ie().toISOString(),completedAt:((K==null?void 0:K.status)??"todo")==="completed"?(K==null?void 0:K.updatedAt)??void 0:void 0})}),be),[]),et=new Map;[...Array.isArray(X)?X:[],...Array.isArray(fe)?fe:[]].forEach(be=>{!be||!be.id||et.has(be.id)||et.set(be.id,be)});const tt=Array.from(et.values());tt.length>fe.length&&(s(tt),await _e(g.uid,"projectTodos",Vr(tt)),console.log(`[Todo] 레거시 병합으로 projectTodos 저장: ${tt.length}개`))}catch(X){console.warn("레거시 tasks 병합 중 경고:",X)}}else a([]),t([]),s([]),console.log("[Todo] 비로그인 상태 - Firebase 데이터 비활성화")}catch(g){console.error("❌ TodoContext: Firebase 데이터 로드 실패:",g)}},u=()=>Array.isArray(i)?i.map(g=>({id:g.id||lt(),title:g.title,description:g.description||"",status:g.status||"active",priority:g.priority||"medium",startDate:g.startDate,dueDate:g.dueDate,progress:g.progress||0,projects:g.projects||[],color:g.color||"#3b82f6",emoji:g.emoji,tags:g.tags||[],createdAt:g.createdAt||ie().toISOString(),updatedAt:g.updatedAt||ie().toISOString()})):[],h=()=>Array.isArray(e)?e.map(g=>({id:g.id||lt(),title:g.title,description:g.description||"",status:g.status||"active",priority:g.priority||"medium",startDate:g.startDate,dueDate:g.dueDate,progress:g.progress||0,tasks:g.tasks||[],tags:g.tags||[],epicId:g.epicId,createdAt:g.createdAt||ie().toISOString(),updatedAt:g.updatedAt||ie().toISOString()})):[],f=()=>{const g=Array.isArray(r)?r:[],T=(Array.isArray(e)?e:[]).flatMap(w=>Array.isArray(w.tasks)?w.tasks.map(v=>({id:v.id??lt(),title:v.title,description:v.description??"",completed:(v.status??"todo")==="completed",priority:v.priority??"medium",dueDate:v.dueDate,tags:v.tags??[],projectId:w.id,epicId:w.epicId,createdAt:v.createdAt??w.createdAt??ie().toISOString(),updatedAt:v.updatedAt??w.updatedAt??ie().toISOString(),completedAt:(v.status??"todo")==="completed"?v.updatedAt??void 0:void 0})):[]),I=new Map;return[...T,...g].forEach(w=>{!w||!w.id||I.has(w.id)||I.set(w.id,w)}),Array.from(I.values())};k.useEffect(()=>{c()},[]),k.useEffect(()=>{const g=mp(()=>{c()});return()=>g()},[]);const m=async g=>{const E=Ye();if(!E){console.warn("[Todo] 로그인 후에만 태스크를 생성할 수 있습니다.");return}const T=f(),I={...g,id:lt(),createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},w=[...T,I];s(w);try{await _e(E.uid,"projectTodos",Vr(w)),console.log(`[Todo] 저장 완료: todos=${w.length}`),await c()}catch(v){console.error("❌ Todo Firebase 저장 실패:",v)}},_=async g=>{const E=Ye();if(!E){console.warn("[Todo] 로그인 후에만 태스크를 수정할 수 있습니다.");return}const I=f().map(w=>w.id===g.id?{...g,updatedAt:new Date().toISOString()}:w);s(I);try{await _e(E.uid,"projectTodos",Vr(I))}catch(w){console.error("❌ Todo 업데이트 Firebase 저장 실패:",w)}},b=async g=>{const E=Ye();if(!E){console.warn("[Todo] 로그인 후에만 태스크를 삭제할 수 있습니다.");return}const I=f().filter(w=>w.id!==g);s(I);try{await _e(E.uid,"projectTodos",Vr(I))}catch(w){console.error("❌ Todo 삭제 Firebase 저장 실패:",w)}},P=async g=>{const E=Ye();if(!E){console.warn("[Todo] 로그인 후에만 완료 상태를 변경할 수 있습니다.");return}const I=f().map(w=>w.id===g?{...w,completed:!w.completed,completedAt:w.completed?void 0:new Date().toISOString(),updatedAt:new Date().toISOString()}:w);s(I);try{await _e(E.uid,"projectTodos",Vr(I))}catch(w){console.error("❌ Todo 완료 토글 Firebase 저장 실패:",w)}},x=async g=>{const E=u(),T={...g,id:lt(),projects:[],progress:0,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},I=[...E,T];a(I);try{const w=Ye();w&&await _e(w.uid,"epics",I)}catch(w){console.error("❌ Epic Firebase 저장 실패:",w)}},A=async g=>{const T=u().map(I=>I.id===g.id?{...g,updatedAt:new Date().toISOString()}:I);a(T);try{const I=Ye();I&&await _e(I.uid,"epics",T)}catch(I){console.error("❌ Epic 업데이트 Firebase 저장 실패:",I)}},N=async g=>{const E=u(),T=f(),I=h(),w=E.filter(O=>O.id!==g),v=T.map(O=>O.epicId===g?{...O,epicId:void 0,updatedAt:new Date().toISOString()}:O),W=I.map(O=>O.epicId===g?{...O,epicId:void 0,updatedAt:new Date().toISOString()}:O);a(w),s(v),t(W);try{const O=Ye();O&&await Promise.all([_e(O.uid,"epics",w),_e(O.uid,"projectTodos",v),_e(O.uid,"projects",W)])}catch(O){console.error("❌ Epic 삭제 Firebase 저장 실패:",O)}},M=async(g,E)=>{const T=h(),I=u(),w={...g,id:lt(),tasks:[],epicId:E||g.epicId,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},v=[...T,w];let W=I;w.epicId&&(W=I.map(O=>O.id===w.epicId?{...O,projects:[...O.projects||[],w],updatedAt:new Date().toISOString()}:O)),t(v),a(W);try{const O=Ye();O&&await Promise.all([_e(O.uid,"projects",v),_e(O.uid,"epics",W)])}catch(O){console.error("❌ Project 저장 Firebase 실패:",O)}},j=async g=>{const E=h(),T=u(),I=E.map(v=>v.id===g.id?{...g,updatedAt:new Date().toISOString()}:v),w=T.map(v=>({...v,projects:(v.projects||[]).map(W=>W.id===g.id?g:W),updatedAt:new Date().toISOString()}));t(I),a(w);try{const v=Ye();v&&await Promise.all([_e(v.uid,"projects",I),_e(v.uid,"epics",w)])}catch(v){console.error("❌ Project 업데이트 Firebase 실패:",v)}},$=async g=>{const E=h(),T=u(),I=f(),w=E.filter(O=>O.id!==g),v=T.map(O=>({...O,projects:(O.projects||[]).filter(fe=>fe.id!==g),updatedAt:new Date().toISOString()})),W=I.map(O=>O.projectId===g?{...O,projectId:void 0,updatedAt:new Date().toISOString()}:O);t(w),a(v),s(W);try{const O=Ye();O&&await Promise.all([_e(O.uid,"projects",w),_e(O.uid,"epics",v),_e(O.uid,"projectTodos",W)])}catch(O){console.error("❌ Project 삭제 Firebase 실패:",O)}},re=g=>u().find(E=>E.id===g),ae=g=>h().find(E=>E.id===g),S={todos:f(),epics:u(),projects:h(),addTodo:m,updateTodo:_,deleteTodo:b,toggleTodoComplete:P,addEpic:x,updateEpic:A,deleteEpic:N,addProject:M,updateProject:j,deleteProject:$,getEpicById:re,getProjectById:ae,getTodosByProjectId:g=>f().filter(E=>E.projectId===g),getTodosByEpicId:g=>f().filter(E=>E.epicId===g),getProjectsByEpicId:g=>h().filter(E=>E.epicId===g),refreshFirebaseData:c,syncFirebaseToLocal:async()=>({success:!0,message:"Firebase 단일 소스 사용 중"}),migrateLocalDataToFirebase:async()=>({success:!1,message:"로컬 데이터 사용 안 함"}),isMigrationButtonActive:()=>!1,checkLocalDataForMigration:()=>({hasData:!1,epicsCount:0,projectsCount:0,todosCount:0}),restoreFirebaseBackup:async()=>({success:!1,message:"백업 복구 비활성화"})};return p.jsx(Ap.Provider,{value:S,children:n})},PA=()=>{const n=k.useContext(Ap);if(n===void 0)throw new Error("useTodo must be used within a TodoProvider");return n},BT=()=>{const n=localStorage.getItem("todos"),e=localStorage.getItem("epics"),t=localStorage.getItem("projects"),r={todos:n?JSON.parse(n):[],epics:e?JSON.parse(e):[],projects:t?JSON.parse(t):[],timestamp:new Date().toISOString()};return localStorage.setItem("data_backup",JSON.stringify(r)),console.log("데이터 백업 완료:",r),r},$T=()=>{const n=localStorage.getItem("data_backup");if(n){const e=JSON.parse(n);return localStorage.setItem("todos",JSON.stringify(e.todos)),localStorage.setItem("epics",JSON.stringify(e.epics)),localStorage.setItem("projects",JSON.stringify(e.projects)),console.log("데이터 복구 완료:",e),e}return null},bp=()=>{const n=localStorage.getItem("todos"),e=localStorage.getItem("epics"),t=localStorage.getItem("projects");return{todos:n?JSON.parse(n):[],epics:e?JSON.parse(e):[],projects:t?JSON.parse(t):[]}},zT=()=>{localStorage.removeItem("todos"),localStorage.removeItem("epics"),localStorage.removeItem("projects"),console.log("모든 데이터 삭제 완료")},qT=()=>{const n={id:"basic-epic-1",title:"🎯 개인 프로젝트",description:"개인적인 목표와 프로젝트를 관리하는 에픽입니다",status:"active",priority:"high",startDate:ie().toISOString(),dueDate:ie().add(3,"month").toISOString(),progress:10,projects:[],color:"#FF6B6B",emoji:"🎯",tags:["개인","목표"],createdAt:ie().toISOString(),updatedAt:ie().toISOString()},e={id:"basic-project-1",title:"📋 일상 관리",description:"일상적인 할일들을 관리하는 프로젝트입니다",status:"active",priority:"medium",startDate:ie().toISOString(),dueDate:ie().add(1,"month").toISOString(),progress:0,tasks:[],tags:["일상","관리"],epicId:"basic-epic-1",createdAt:ie().toISOString(),updatedAt:ie().toISOString()},t={id:"basic-todo-1",title:"📝 할일 관리 시스템 설정하기",description:"개인 할일 관리 시스템을 제대로 설정해보세요",completed:!1,priority:"medium",dueDate:ie().add(1,"week").toISOString(),tags:["설정","시작"],epicId:"basic-epic-1",projectId:"basic-project-1",createdAt:ie().toISOString(),updatedAt:ie().toISOString()};return{epics:[n],projects:[e],todos:[t]}},WT=()=>{const n=bp(),e=n.todos.some(t=>t.title.includes("테스트")||t.title.includes("샘플"));if(n.todos.length===0||e){const t=qT();return localStorage.setItem("todos",JSON.stringify(t.todos)),localStorage.setItem("epics",JSON.stringify(t.epics)),localStorage.setItem("projects",JSON.stringify(t.projects)),console.log("기본 사용자 데이터로 복구 완료"),t}return n};typeof window<"u"&&(window.dataRecovery={backup:BT,restore:$T,current:bp,clear:zT,recover:WT});const HT=k.lazy(()=>we(()=>import("./Dashboard-7c91c5aa.js").then(n=>n.D),["assets/Dashboard-7c91c5aa.js","assets/mui-754dcb1a.js","assets/dayjs-9d6a636c.js"])),GT=k.lazy(()=>we(()=>import("./ConditionTracker-b9119230.js"),["assets/ConditionTracker-b9119230.js","assets/mui-754dcb1a.js","assets/dayjs-9d6a636c.js"])),KT=k.lazy(()=>we(()=>import("./ProjectManager-b29519a1.js"),["assets/ProjectManager-b29519a1.js","assets/mui-754dcb1a.js","assets/dayjs-9d6a636c.js"])),QT=k.lazy(()=>we(()=>import("./TodoManager-89098051.js"),["assets/TodoManager-89098051.js","assets/mui-754dcb1a.js","assets/dayjs-9d6a636c.js"])),JT=k.lazy(()=>we(()=>import("./Chat-4194cc70.js"),["assets/Chat-4194cc70.js","assets/mui-754dcb1a.js","assets/dayjs-9d6a636c.js","assets/presence-2cb48a1f.js"])),YT=k.lazy(()=>we(()=>import("./Analytics-c72cdfe2.js"),["assets/Analytics-c72cdfe2.js","assets/mui-754dcb1a.js","assets/dayjs-9d6a636c.js"])),XT=k.lazy(()=>we(()=>import("./Profile-cfa318f2.js"),["assets/Profile-cfa318f2.js","assets/mui-754dcb1a.js","assets/dayjs-9d6a636c.js"])),ZT=k.lazy(()=>we(()=>import("./Settings-31bdb7d6.js"),["assets/Settings-31bdb7d6.js","assets/mui-754dcb1a.js","assets/dayjs-9d6a636c.js"])),eA=k.lazy(()=>we(()=>import("./AdminPanel-ee2a256d.js"),["assets/AdminPanel-ee2a256d.js","assets/mui-754dcb1a.js","assets/dayjs-9d6a636c.js","assets/presence-2cb48a1f.js"])),tA=k.lazy(()=>we(()=>import("./Pomodoro-49e9f95d.js"),["assets/Pomodoro-49e9f95d.js","assets/mui-754dcb1a.js","assets/dayjs-9d6a636c.js"])),nA=n=>{var $,re,ae,S,g,E,T,I,w,v,W,O;const{type:e,mode:t}=n,r=Fc(e),s=fT(e,t),i=t==="auto"?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":t,a=i==="dark",c=((re=($=r.ui)==null?void 0:$.background)==null?void 0:re.primary)??s.background,u=((S=(ae=r.ui)==null?void 0:ae.background)==null?void 0:S.secondary)??s.paper,h=((E=(g=r.ui)==null?void 0:g.background)==null?void 0:E.pattern)??"",f=((I=(T=r.ui)==null?void 0:T.background)==null?void 0:I.gradient)??"",m=((v=(w=r.ui)==null?void 0:w.border)==null?void 0:v.color)??s.primary;(O=(W=r.ui)==null?void 0:W.border)==null||O.shadow;const _=a?s.background:c,b=a?s.paper:u,P=a?"":h,x=a?`radial-gradient(800px circle at 20% 20%, ${Se("#fff",.04)} 0%, transparent 40%), radial-gradient(800px circle at 80% 80%, ${Se("#fff",.03)} 0%, transparent 40%)`:f,A=s.background,N=s.paper,M=A,j=N;return Ym({palette:{mode:i,primary:{main:s.primary,light:s.primaryLight,dark:s.primaryDark},secondary:{main:s.secondary,light:s.secondaryLight,dark:s.secondaryDark},background:{default:M,paper:j},info:{main:s.info},success:{main:s.success},warning:{main:s.warning},error:{main:s.error}},typography:{fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif"].join(","),h1:{fontWeight:700},h2:{fontWeight:600},h3:{fontWeight:600},button:{fontWeight:600},subtitle1:{fontWeight:600}},shape:{borderRadius:8},components:{MuiCssBaseline:{styleOverrides:{"html, body, #root":{height:"100%"},body:{backgroundColor:_,backgroundImage:P&&x?`${P}, ${x}`:P||x||void 0,backgroundAttachment:"fixed",backgroundSize:"cover"},"*":{scrollbarColor:`${Se(s.primary,.5)} transparent`,scrollbarWidth:"thin"},"*::-webkit-scrollbar":{width:10,height:10},"*::-webkit-scrollbar-thumb":{backgroundColor:Se(s.primary,.35),borderRadius:999,border:`2px solid ${Se(s.background,.6)}`},"*::-webkit-scrollbar-track":{backgroundColor:Se(s.background,.4)}}},MuiButton:{defaultProps:{disableElevation:!0},styleOverrides:{root:{textTransform:"none",borderRadius:8,fontWeight:600},contained:{boxShadow:"none"},sizeSmall:{borderRadius:6},sizeLarge:{borderRadius:10}}},MuiCard:{styleOverrides:{root:{borderRadius:8,boxShadow:i==="light"?"0 6px 18px rgba(0,0,0,0.08)":"0 6px 18px rgba(0,0,0,0.32)",border:`1px solid ${Se(m,.15)}`}}},MuiPaper:{styleOverrides:{root:{borderRadius:8,backgroundImage:"none"},outlined:{borderColor:Se(m,.2)}}},MuiTextField:{defaultProps:{variant:"outlined",size:"small"}},MuiInputBase:{styleOverrides:{root:{borderRadius:8,backgroundColor:a?Se(s.paper,.06):Se(b,.5)}}},MuiAppBar:{defaultProps:{color:"default",elevation:0},styleOverrides:{root:{backgroundColor:a?Se(s.paper,.94):Se(b,.9),backdropFilter:"saturate(180%) blur(8px)",borderBottom:`1px solid ${Se(m,.18)}`}}},MuiToolbar:{styleOverrides:{regular:{minHeight:64}}},MuiDrawer:{styleOverrides:{paper:{borderRight:`1px solid ${Se(m,.18)}`,backgroundColor:a?Se(s.background,.94):Se(b,.92),backgroundImage:"none"}}},MuiListItemButton:{styleOverrides:{root:{borderRadius:8,margin:2,"&.Mui-selected":{backgroundColor:Se(s.primary,.12),"&:hover":{backgroundColor:Se(s.primary,.18)}}}}},MuiDialog:{styleOverrides:{paper:{borderRadius:12,border:`1px solid ${Se(m,.12)}`}}},MuiTooltip:{defaultProps:{arrow:!0}},MuiChip:{styleOverrides:{root:{borderRadius:8}}},MuiIconButton:{styleOverrides:{root:{borderRadius:8}}},MuiTabs:{styleOverrides:{indicator:{height:3,borderRadius:3}}},MuiTab:{styleOverrides:{root:{textTransform:"none",fontWeight:600,minHeight:44}}},MuiLinearProgress:{styleOverrides:{root:{borderRadius:999,overflow:"hidden"}}},MuiCircularProgress:{defaultProps:{thickness:5}}}})};function rA(){const[n,e]=k.useState(null),[t,r]=k.useState(!0),[s,i]=k.useState(null),[a,c]=k.useState(null),[u,h]=k.useState({type:"penguin",mode:"light"}),[f,m]=k.useState({show:!1,message:""}),[_,b]=k.useState({isActive:!1,message:"",loading:!0}),P=N=>{const M={...u,...N};h(M),window.electronAPI?window.electronAPI.saveData("theme",M):localStorage.setItem("theme",JSON.stringify(M))};k.useEffect(()=>{(async()=>{try{if(window.electronAPI){const re=await window.electronAPI.loadData("theme");if(re.success&&re.data){h(re.data),console.log("Electron에서 테마 로드:",re.data);return}}const $=localStorage.getItem("theme");if($){const re=JSON.parse($);h(re),console.log("localStorage에서 테마 로드:",re)}else console.log("저장된 테마가 없어서 기본값 사용")}catch($){console.error("테마 로드 실패:",$)}})();const M=window.matchMedia("(prefers-color-scheme: dark)"),j=async()=>{try{u.mode==="auto"&&h($=>({...$}))}catch($){console.error("시스템 테마 변경 감지 실패:",$)}};return M.addEventListener("change",j),()=>M.removeEventListener("change",j)},[u.mode]),k.useEffect(()=>{const N=async()=>{try{const j=await X0();b({isActive:j.isMaintenanceMode,message:j.message||"시스템 점검 중입니다.",loading:!1})}catch(j){console.error("점검 모드 확인 실패:",j),b({isActive:!1,message:"",loading:!1})}};N();const M=setInterval(N,3e4);return()=>clearInterval(M)},[]),k.useEffect(()=>{const N=mp(async M=>{try{if(e(M),i(null),M){const j=await G0(M.email);if(c(j.status),j.status==="approved")try{const $=await FT(M.email);$.shouldShowNotification&&m({show:!0,message:$.message})}catch($){console.error("마이그레이션 체크 실패:",$)}}else c(null)}catch(j){console.error("❌ 인증 상태 처리 중 에러:",j),i("인증 처리 중 문제가 발생했습니다. 페이지를 새로고침해주세요.")}finally{r(!1)}});return()=>{N()}},[]);const x=nA(u),A=Fc(u.type);return s?p.jsxs(jn,{theme:x,children:[p.jsx(Un,{}),p.jsxs(z,{sx:{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg, #f44336 0%, #e91e63 100%)",p:3},children:[p.jsx(B,{variant:"h4",color:"white",sx:{mb:2,textAlign:"center"},children:"⚠️ 오류가 발생했습니다"}),p.jsx(B,{variant:"body1",color:"white",sx:{mb:3,textAlign:"center",maxWidth:600},children:s}),p.jsx(Be,{variant:"contained",color:"secondary",onClick:()=>{i(null),window.location.reload()},sx:{minWidth:200},children:"🔄 페이지 새로고침"})]})]}):t||_.loading?p.jsxs(jn,{theme:x,children:[p.jsx(Un,{}),p.jsxs(z,{sx:{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"},children:[p.jsx(Sn,{size:60,sx:{mb:2}}),p.jsx(B,{variant:"h6",color:"white",children:_.loading?"점검 상태 확인 중...":A.concepts.loading})]})]}):_.isActive&&(!n||!xi(n.email))?p.jsxs(jn,{theme:x,children:[p.jsx(Un,{}),p.jsx(NT,{message:_.message})]}):n?a==="approved"?p.jsx(Qm,{dateAdapter:Jm,adapterLocale:"ko",children:p.jsxs(jn,{theme:x,children:[p.jsx(Un,{}),p.jsx(UT,{children:p.jsx(wT,{children:p.jsxs(Gg,{future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:[p.jsx(z,{sx:{height:"100vh",display:"flex"},children:p.jsxs(vT,{user:n,themeConfig:A,children:[p.jsx(k.Suspense,{fallback:p.jsx(z,{sx:{p:4,display:"flex",alignItems:"center",justifyContent:"center"},children:p.jsx(Sn,{})}),children:p.jsx(OT,{children:p.jsxs(qg,{children:[p.jsx(rt,{path:"/",element:p.jsx(HT,{themeConfig:A})}),p.jsx(rt,{path:"/condition",element:p.jsx(GT,{themeConfig:A})}),p.jsx(rt,{path:"/analytics",element:p.jsx(YT,{themeConfig:A})}),p.jsx(rt,{path:"/projects",element:p.jsx(KT,{themeConfig:A})}),p.jsx(rt,{path:"/todos",element:p.jsx(QT,{})}),p.jsx(rt,{path:"/pomodoro",element:p.jsx(tA,{themeConfig:A})}),p.jsx(rt,{path:"/chat",element:p.jsx(JT,{})}),p.jsx(rt,{path:"/profile",element:p.jsx(XT,{themeConfig:A})}),p.jsx(rt,{path:"/settings",element:p.jsx(ZT,{onThemeChange:P,themeSettings:u})}),xi(n.email)&&p.jsx(rt,{path:"/admin",element:p.jsx(eA,{themeConfig:A})})]})})}),p.jsx(AT,{}),p.jsx(VT,{})]})}),p.jsxs(Ci,{open:f.show,onClose:()=>m({show:!1,message:""}),maxWidth:"sm",fullWidth:!0,children:[p.jsx(Pi,{children:"📦 프로젝트 정리 알림"}),p.jsxs(ki,{children:[p.jsx(Yn,{severity:"info",sx:{mb:2},children:p.jsx(B,{variant:"body2",sx:{whiteSpace:"pre-line"},children:f.message})}),p.jsx(B,{variant:"body2",color:"text.secondary",children:"프로젝트 관리 페이지에서 임시 보관함을 확인하고 새로운 에픽을 만들어보세요!"})]}),p.jsxs(Di,{children:[p.jsx(Be,{onClick:()=>m({show:!1,message:""}),children:"확인"}),p.jsx(Be,{variant:"contained",onClick:()=>{m({show:!1,message:""})},children:"프로젝트 관리로 이동"})]})]})]})})})]})}):p.jsxs(jn,{theme:x,children:[p.jsx(Un,{}),p.jsx(sA,{user:n,status:a})]}):p.jsxs(jn,{theme:x,children:[p.jsx(Un,{}),p.jsx(ET,{})]})}const sA=({user:n,status:e})=>{const t=()=>{var r,s,i,a;switch(e){case"pending":return p.jsxs(Xn,{sx:{maxWidth:600,width:"100%",p:4,textAlign:"center",boxShadow:"0 8px 32px rgba(0,0,0,0.12)",borderRadius:3,background:"linear-gradient(135deg, rgba(255,193,7,0.1) 0%, rgba(255,152,0,0.1) 100%)",border:"1px solid rgba(255,193,7,0.2)"},children:[p.jsxs(z,{sx:{mb:3},children:[p.jsx(Yt,{src:n.photoURL||void 0,sx:{width:80,height:80,mx:"auto",mb:2,boxShadow:"0 4px 20px rgba(0,0,0,0.15)"},children:((r=n.displayName)==null?void 0:r[0])||((s=n.email)==null?void 0:s[0])}),p.jsx(B,{variant:"h4",gutterBottom:!0,sx:{fontWeight:"bold",color:"warning.main"},children:"⏳ 승인 대기 중"})]}),p.jsxs(B,{variant:"h6",sx:{mb:2,color:"text.primary"},children:["안녕하세요, ",p.jsx("strong",{children:n.displayName}),"님! 🐧"]}),p.jsxs(B,{variant:"body1",sx:{mb:3,lineHeight:1.8,color:"text.secondary"},children:["개인 비서 접근 권한 요청이 검토 중입니다.",p.jsx("br",{}),"관리자의 승인을 기다려주세요."]}),p.jsx(z,{sx:{p:2,bgcolor:"rgba(255,193,7,0.1)",borderRadius:2,border:"1px solid rgba(255,193,7,0.2)",mb:2},children:p.jsx(B,{variant:"body2",color:"warning.dark",sx:{fontWeight:"medium"},children:"💡 승인이 완료되면 자동으로 서비스를 이용하실 수 있습니다."})}),p.jsx(Mh,{sx:{mt:3,height:6,borderRadius:3,backgroundColor:"rgba(255,193,7,0.2)","& .MuiLinearProgress-bar":{backgroundColor:"warning.main"}}})]});case"rejected":return p.jsxs(Xn,{sx:{maxWidth:600,width:"100%",p:4,textAlign:"center",boxShadow:"0 8px 32px rgba(0,0,0,0.12)",borderRadius:3,background:"linear-gradient(135deg, rgba(244,67,54,0.1) 0%, rgba(233,30,99,0.1) 100%)",border:"1px solid rgba(244,67,54,0.2)"},children:[p.jsxs(z,{sx:{mb:3},children:[p.jsx(Yt,{src:n.photoURL||void 0,sx:{width:80,height:80,mx:"auto",mb:2,boxShadow:"0 4px 20px rgba(0,0,0,0.15)"},children:((i=n.displayName)==null?void 0:i[0])||((a=n.email)==null?void 0:a[0])}),p.jsx(B,{variant:"h4",gutterBottom:!0,sx:{fontWeight:"bold",color:"error.main"},children:"❌ 접근 권한 거부됨"})]}),p.jsxs(B,{variant:"h6",sx:{mb:2,color:"text.primary"},children:["죄송합니다, ",p.jsx("strong",{children:n.displayName}),"님."]}),p.jsxs(B,{variant:"body1",sx:{mb:3,lineHeight:1.8,color:"text.secondary"},children:["개인 비서 접근 권한이 거부되었습니다.",p.jsx("br",{}),"자세한 사항은 관리자에게 문의해주세요."]}),p.jsx(z,{sx:{p:2,bgcolor:"rgba(244,67,54,0.1)",borderRadius:2,border:"1px solid rgba(244,67,54,0.2)"},children:p.jsx(B,{variant:"body2",color:"error.dark",sx:{fontWeight:"medium"},children:"📧 문의사항이 있으시면 관리자에게 연락해주세요."})})]});case"not_found":default:return p.jsx(iA,{user:n})}};return p.jsx(z,{sx:{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",p:2},children:p.jsx(z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%",maxWidth:700},children:t()})})},iA=({user:n})=>{var u,h,f,m;const[e,t]=k.useState(""),[r,s]=k.useState(!1),[i,a]=k.useState(!1),c=async _=>{if(_.preventDefault(),!!n.email){s(!0);try{if((await gp({email:n.email,displayName:n.displayName||"이름 없음",photoURL:n.photoURL||void 0,reason:e.trim()||void 0})).success)a(!0);else throw new Error("요청 저장 실패")}catch(b){console.error("접근 권한 요청 실패:",b),alert("요청 처리 중 오류가 발생했습니다. 다시 시도해주세요.")}finally{s(!1)}}};return i?p.jsxs(Xn,{sx:{maxWidth:600,width:"100%",p:4,textAlign:"center",boxShadow:"0 8px 32px rgba(0,0,0,0.12)",borderRadius:3,background:"linear-gradient(135deg, rgba(76,175,80,0.1) 0%, rgba(139,195,74,0.1) 100%)",border:"1px solid rgba(76,175,80,0.2)"},children:[p.jsxs(z,{sx:{mb:3},children:[p.jsx(Yt,{src:n.photoURL||void 0,sx:{width:80,height:80,mx:"auto",mb:2,boxShadow:"0 4px 20px rgba(0,0,0,0.15)"},children:((u=n.displayName)==null?void 0:u[0])||((h=n.email)==null?void 0:h[0])}),p.jsx(B,{variant:"h4",gutterBottom:!0,sx:{fontWeight:"bold",color:"success.main"},children:"✅ 접근 권한 요청 완료!"})]}),p.jsxs(B,{variant:"h6",sx:{mb:2,color:"text.primary"},children:["안녕하세요, ",p.jsx("strong",{children:n.displayName}),"님! 🎉"]}),p.jsxs(B,{variant:"body1",sx:{mb:3,lineHeight:1.8,color:"text.secondary"},children:["개인 비서 접근 권한 요청이 성공적으로 전송되었습니다.",p.jsx("br",{}),"관리자의 승인을 기다려주세요."]}),p.jsx(z,{sx:{p:2,bgcolor:"rgba(76,175,80,0.1)",borderRadius:2,border:"1px solid rgba(76,175,80,0.2)"},children:p.jsx(B,{variant:"body2",color:"success.dark",sx:{fontWeight:"medium"},children:"🔄 승인이 완료되면 이 화면에서 자동으로 서비스로 이동됩니다."})})]}):p.jsxs(Xn,{sx:{maxWidth:600,width:"100%",p:4,boxShadow:"0 8px 32px rgba(0,0,0,0.12)",borderRadius:3,background:"rgba(255,255,255,0.95)",backdropFilter:"blur(10px)"},children:[p.jsxs(z,{sx:{textAlign:"center",mb:4},children:[p.jsx(B,{variant:"h4",gutterBottom:!0,sx:{fontWeight:"bold",color:"primary.main"},children:"🤖 개인 비서 접근 권한 요청"}),p.jsxs(B,{variant:"body1",color:"textSecondary",sx:{lineHeight:1.6},children:["안녕하세요, ",p.jsx("strong",{children:n.displayName}),"님!",p.jsx("br",{}),"개인 비서를 이용하기 위해 접근 권한을 요청해주세요."]})]}),p.jsxs(z,{sx:{display:"flex",alignItems:"center",gap:2,mb:4,p:3,bgcolor:"rgba(25,118,210,0.05)",borderRadius:2,border:"1px solid rgba(25,118,210,0.1)"},children:[p.jsx(Yt,{src:n.photoURL||void 0,sx:{width:60,height:60},children:((f=n.displayName)==null?void 0:f[0])||((m=n.email)==null?void 0:m[0])}),p.jsxs(z,{sx:{flex:1},children:[p.jsx(B,{variant:"h6",sx:{fontWeight:"bold"},children:n.displayName}),p.jsx(B,{variant:"body2",color:"textSecondary",children:n.email})]})]}),p.jsxs("form",{onSubmit:c,children:[p.jsx(ai,{fullWidth:!0,multiline:!0,rows:4,label:"사용 목적 (선택사항)",placeholder:"개인 비서를 어떤 용도로 사용하고 싶으신지 간단히 설명해주세요...",value:e,onChange:_=>t(_.target.value),sx:{mb:4},variant:"outlined"}),p.jsx(z,{sx:{display:"flex",gap:2,justifyContent:"center"},children:p.jsx(Be,{type:"submit",variant:"contained",size:"large",disabled:r,startIcon:r?p.jsx(Sn,{size:20,color:"inherit"}):p.jsx(Na,{}),sx:{minWidth:200,py:1.5,borderRadius:2,fontWeight:"bold",boxShadow:"0 4px 15px rgba(25,118,210,0.3)","&:hover":{boxShadow:"0 6px 20px rgba(25,118,210,0.4)"}},children:r?"요청 중...":"접근 권한 요청하기"})})]})]})};na.createRoot(document.getElementById("root")).render(p.jsx(Gr.StrictMode,{children:p.jsx(rA,{})}));export{RT as $,Ks as A,bA as B,wA as C,TA as D,kt as E,Ae as F,Jt as G,uA as H,Vf as I,$w as J,Rc as K,Sc as L,Tt as M,or as N,Mf as O,Ke as P,bc as Q,SA as R,RA as S,pT as T,IT as U,bp as V,BT as W,$T as X,WT as Y,zT as Z,we as _,PA as a,Ip as a0,xT as a1,CT as a2,CA as b,xA as c,gA as d,Q0 as e,mA as f,Ye as g,yA as h,hA as i,_A as j,fA as k,oi as l,G as m,Rt as n,mp as o,Fc as p,EA as q,pA as r,_e as s,sT as t,qh as u,X0 as v,vA as w,IA as x,AA as y,dA as z};
