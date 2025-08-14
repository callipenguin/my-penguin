var tm=Object.defineProperty;var nm=(n,e,t)=>e in n?tm(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var ot=(n,e,t)=>(nm(n,typeof e!="symbol"?e+"":e,t),t);import{r as rm,a as k,R as sm,j as p,D as xi,b as Ci,B as q,T as $,c as Pi,A as Yn,G as jl,C as Ph,F as im,I as om,S as am,M as gn,d as oi,e as ki,f as je,g as An,h as Va,i as cm,k as lm,l as um,Q as hm,m as dm,u as kh,n as ea,o as ct,p as fm,L as pm,q as mm,s as gm,t as Ms,v as Ls,w as Kt,x as ym,y as Ul,z as _m,E as vm,H as Em,J as wm,K as Im,N as Tm,P as Am,O as kr,U as Dh,V as bm,W as Sm,X as Bl,Y as Fs,Z as $l,_ as Dr,$ as js,a0 as un,a1 as Us,a2 as Rm,a3 as xm,a4 as Cm,a5 as zl,a6 as Xn,a7 as Pm,a8 as km,a9 as Wr,aa as Vh,ab as Dm,ac as Vm,ad as Nm,ae as Om,af as Nh,ag as Oh,ah as Mm,ai as Lm,aj as Fm,ak as jm,al as Um,am as Bm,an as $m,ao as zm,ap as qm,aq as Wm,ar as Hm,as as jn,at as Un,au as Gm,av as Km,aw as Te,ax as Qm}from"./mui-754dcb1a.js";import{d as re}from"./dayjs-9d6a636c.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var ta={},ql=rm;ta.createRoot=ql.createRoot,ta.hydrateRoot=ql.hydrateRoot;const Jm="modulepreload",Ym=function(n){return"/my-penguin/"+n},Wl={},_e=function(e,t,r){if(!t||t.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(t.map(i=>{if(i=Ym(i),i in Wl)return;Wl[i]=!0;const a=i.endsWith(".css"),c=a?'[rel="stylesheet"]':"";if(!!r)for(let f=s.length-1;f>=0;f--){const m=s[f];if(m.href===i&&(!a||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${c}`))return;const h=document.createElement("link");if(h.rel=a?"stylesheet":Jm,a||(h.as="script",h.crossOrigin=""),h.href=i,document.head.appendChild(h),a)return new Promise((f,m)=>{h.addEventListener("load",f),h.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i})};/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hr(){return Hr=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Hr.apply(this,arguments)}var Ut;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(Ut||(Ut={}));const Hl="popstate";function Xm(n){n===void 0&&(n={});function e(s,i){let{pathname:a="/",search:c="",hash:u=""}=Pn(s.location.hash.substr(1));return!a.startsWith("/")&&!a.startsWith(".")&&(a="/"+a),na("",{pathname:a,search:c,hash:u},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(s,i){let a=s.document.querySelector("base"),c="";if(a&&a.getAttribute("href")){let u=s.location.href,h=u.indexOf("#");c=h===-1?u:u.slice(0,h)}return c+"#"+(typeof i=="string"?i:Mh(i))}function r(s,i){Na(s.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return eg(e,t,r,n)}function be(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Na(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Zm(){return Math.random().toString(36).substr(2,8)}function Gl(n,e){return{usr:n.state,key:n.key,idx:e}}function na(n,e,t,r){return t===void 0&&(t=null),Hr({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?Pn(e):e,{state:t,key:e&&e.key||r||Zm()})}function Mh(n){let{pathname:e="/",search:t="",hash:r=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Pn(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let r=n.indexOf("?");r>=0&&(e.search=n.substr(r),n=n.substr(0,r)),n&&(e.pathname=n)}return e}function eg(n,e,t,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:i=!1}=r,a=s.history,c=Ut.Pop,u=null,h=f();h==null&&(h=0,a.replaceState(Hr({},a.state,{idx:h}),""));function f(){return(a.state||{idx:null}).idx}function m(){c=Ut.Pop;let A=f(),O=A==null?null:A-h;h=A,u&&u({action:c,location:x.location,delta:O})}function _(A,O){c=Ut.Push;let M=na(x.location,A,O);t&&t(M,A),h=f()+1;let j=Gl(M,h),z=x.createHref(M);try{a.pushState(j,"",z)}catch(te){if(te instanceof DOMException&&te.name==="DataCloneError")throw te;s.location.assign(z)}i&&u&&u({action:c,location:x.location,delta:1})}function b(A,O){c=Ut.Replace;let M=na(x.location,A,O);t&&t(M,A),h=f();let j=Gl(M,h),z=x.createHref(M);a.replaceState(j,"",z),i&&u&&u({action:c,location:x.location,delta:0})}function P(A){let O=s.location.origin!=="null"?s.location.origin:s.location.href,M=typeof A=="string"?A:Mh(A);return M=M.replace(/ $/,"%20"),be(O,"No window.location.(origin|href) available to create URL for href: "+M),new URL(M,O)}let x={get action(){return c},get location(){return n(s,a)},listen(A){if(u)throw new Error("A history only accepts one active listener");return s.addEventListener(Hl,m),u=A,()=>{s.removeEventListener(Hl,m),u=null}},createHref(A){return e(s,A)},createURL:P,encodeLocation(A){let O=P(A);return{pathname:O.pathname,search:O.search,hash:O.hash}},push:_,replace:b,go(A){return a.go(A)}};return x}var Kl;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(Kl||(Kl={}));function tg(n,e,t){return t===void 0&&(t="/"),ng(n,e,t,!1)}function ng(n,e,t,r){let s=typeof e=="string"?Pn(e):e,i=jh(s.pathname||"/",t);if(i==null)return null;let a=Lh(n);rg(a);let c=null;for(let u=0;c==null&&u<a.length;++u){let h=pg(i);c=dg(a[u],h,r)}return c}function Lh(n,e,t,r){e===void 0&&(e=[]),t===void 0&&(t=[]),r===void 0&&(r="");let s=(i,a,c)=>{let u={relativePath:c===void 0?i.path||"":c,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};u.relativePath.startsWith("/")&&(be(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let h=En([r,u.relativePath]),f=t.concat(u);i.children&&i.children.length>0&&(be(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),Lh(i.children,e,f,h)),!(i.path==null&&!i.index)&&e.push({path:h,score:ug(h,i.index),routesMeta:f})};return n.forEach((i,a)=>{var c;if(i.path===""||!((c=i.path)!=null&&c.includes("?")))s(i,a);else for(let u of Fh(i.path))s(i,a,u)}),e}function Fh(n){let e=n.split("/");if(e.length===0)return[];let[t,...r]=e,s=t.endsWith("?"),i=t.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let a=Fh(r.join("/")),c=[];return c.push(...a.map(u=>u===""?i:[i,u].join("/"))),s&&c.push(...a),c.map(u=>n.startsWith("/")&&u===""?"/":u)}function rg(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:hg(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const sg=/^:[\w-]+$/,ig=3,og=2,ag=1,cg=10,lg=-2,Ql=n=>n==="*";function ug(n,e){let t=n.split("/"),r=t.length;return t.some(Ql)&&(r+=lg),e&&(r+=og),t.filter(s=>!Ql(s)).reduce((s,i)=>s+(sg.test(i)?ig:i===""?ag:cg),r)}function hg(n,e){return n.length===e.length&&n.slice(0,-1).every((r,s)=>r===e[s])?n[n.length-1]-e[e.length-1]:0}function dg(n,e,t){t===void 0&&(t=!1);let{routesMeta:r}=n,s={},i="/",a=[];for(let c=0;c<r.length;++c){let u=r[c],h=c===r.length-1,f=i==="/"?e:e.slice(i.length)||"/",m=Jl({path:u.relativePath,caseSensitive:u.caseSensitive,end:h},f),_=u.route;if(!m&&h&&t&&!r[r.length-1].route.index&&(m=Jl({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},f)),!m)return null;Object.assign(s,m.params),a.push({params:s,pathname:En([i,m.pathname]),pathnameBase:Eg(En([i,m.pathnameBase])),route:_}),m.pathnameBase!=="/"&&(i=En([i,m.pathnameBase]))}return a}function Jl(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,r]=fg(n.path,n.caseSensitive,n.end),s=e.match(t);if(!s)return null;let i=s[0],a=i.replace(/(.)\/+$/,"$1"),c=s.slice(1);return{params:r.reduce((h,f,m)=>{let{paramName:_,isOptional:b}=f;if(_==="*"){let x=c[m]||"";a=i.slice(0,i.length-x.length).replace(/(.)\/+$/,"$1")}const P=c[m];return b&&!P?h[_]=void 0:h[_]=(P||"").replace(/%2F/g,"/"),h},{}),pathname:i,pathnameBase:a,pattern:n}}function fg(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),Na(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let r=[],s="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,c,u)=>(r.push({paramName:c,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(r.push({paramName:"*"}),s+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?s+="\\/*$":n!==""&&n!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function pg(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Na(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function jh(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=n.charAt(t);return r&&r!=="/"?null:n.slice(t)||"/"}function mg(n,e){e===void 0&&(e="/");let{pathname:t,search:r="",hash:s=""}=typeof n=="string"?Pn(n):n;return{pathname:t?t.startsWith("/")?t:gg(t,e):e,search:wg(r),hash:Ig(s)}}function gg(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(s=>{s===".."?t.length>1&&t.pop():s!=="."&&t.push(s)}),t.length>1?t.join("/"):"/"}function Fo(n,e,t,r){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function yg(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function _g(n,e){let t=yg(n);return e?t.map((r,s)=>s===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function vg(n,e,t,r){r===void 0&&(r=!1);let s;typeof n=="string"?s=Pn(n):(s=Hr({},n),be(!s.pathname||!s.pathname.includes("?"),Fo("?","pathname","search",s)),be(!s.pathname||!s.pathname.includes("#"),Fo("#","pathname","hash",s)),be(!s.search||!s.search.includes("#"),Fo("#","search","hash",s)));let i=n===""||s.pathname==="",a=i?"/":s.pathname,c;if(a==null)c=t;else{let m=e.length-1;if(!r&&a.startsWith("..")){let _=a.split("/");for(;_[0]==="..";)_.shift(),m-=1;s.pathname=_.join("/")}c=m>=0?e[m]:"/"}let u=mg(s,c),h=a&&a!=="/"&&a.endsWith("/"),f=(i||a===".")&&t.endsWith("/");return!u.pathname.endsWith("/")&&(h||f)&&(u.pathname+="/"),u}const En=n=>n.join("/").replace(/\/\/+/g,"/"),Eg=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),wg=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,Ig=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function Tg(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const Uh=["post","put","patch","delete"];new Set(Uh);const Ag=["get",...Uh];new Set(Ag);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gr(){return Gr=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Gr.apply(this,arguments)}const Oa=k.createContext(null),bg=k.createContext(null),Di=k.createContext(null),Vi=k.createContext(null),cr=k.createContext({outlet:null,matches:[],isDataRoute:!1}),Bh=k.createContext(null);function Ni(){return k.useContext(Vi)!=null}function Oi(){return Ni()||be(!1),k.useContext(Vi).location}function $h(n){k.useContext(Di).static||k.useLayoutEffect(n)}function zh(){let{isDataRoute:n}=k.useContext(cr);return n?Fg():Sg()}function Sg(){Ni()||be(!1);let n=k.useContext(Oa),{basename:e,future:t,navigator:r}=k.useContext(Di),{matches:s}=k.useContext(cr),{pathname:i}=Oi(),a=JSON.stringify(_g(s,t.v7_relativeSplatPath)),c=k.useRef(!1);return $h(()=>{c.current=!0}),k.useCallback(function(h,f){if(f===void 0&&(f={}),!c.current)return;if(typeof h=="number"){r.go(h);return}let m=vg(h,JSON.parse(a),i,f.relative==="path");n==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:En([e,m.pathname])),(f.replace?r.replace:r.push)(m,f.state,f)},[e,r,a,i,n])}function Rg(n,e){return xg(n,e)}function xg(n,e,t,r){Ni()||be(!1);let{navigator:s}=k.useContext(Di),{matches:i}=k.useContext(cr),a=i[i.length-1],c=a?a.params:{};a&&a.pathname;let u=a?a.pathnameBase:"/";a&&a.route;let h=Oi(),f;if(e){var m;let A=typeof e=="string"?Pn(e):e;u==="/"||(m=A.pathname)!=null&&m.startsWith(u)||be(!1),f=A}else f=h;let _=f.pathname||"/",b=_;if(u!=="/"){let A=u.replace(/^\//,"").split("/");b="/"+_.replace(/^\//,"").split("/").slice(A.length).join("/")}let P=tg(n,{pathname:b}),x=Vg(P&&P.map(A=>Object.assign({},A,{params:Object.assign({},c,A.params),pathname:En([u,s.encodeLocation?s.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?u:En([u,s.encodeLocation?s.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),i,t,r);return e&&x?k.createElement(Vi.Provider,{value:{location:Gr({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Ut.Pop}},x):x}function Cg(){let n=Lg(),e=Tg(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},e),t?k.createElement("pre",{style:s},t):null,i)}const Pg=k.createElement(Cg,null);class kg extends k.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?k.createElement(cr.Provider,{value:this.props.routeContext},k.createElement(Bh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Dg(n){let{routeContext:e,match:t,children:r}=n,s=k.useContext(Oa);return s&&s.static&&s.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=t.route.id),k.createElement(cr.Provider,{value:e},r)}function Vg(n,e,t,r){var s;if(e===void 0&&(e=[]),t===void 0&&(t=null),r===void 0&&(r=null),n==null){var i;if(!t)return null;if(t.errors)n=t.matches;else if((i=r)!=null&&i.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let a=n,c=(s=t)==null?void 0:s.errors;if(c!=null){let f=a.findIndex(m=>m.route.id&&(c==null?void 0:c[m.route.id])!==void 0);f>=0||be(!1),a=a.slice(0,Math.min(a.length,f+1))}let u=!1,h=-1;if(t&&r&&r.v7_partialHydration)for(let f=0;f<a.length;f++){let m=a[f];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(h=f),m.route.id){let{loaderData:_,errors:b}=t,P=m.route.loader&&_[m.route.id]===void 0&&(!b||b[m.route.id]===void 0);if(m.route.lazy||P){u=!0,h>=0?a=a.slice(0,h+1):a=[a[0]];break}}}return a.reduceRight((f,m,_)=>{let b,P=!1,x=null,A=null;t&&(b=c&&m.route.id?c[m.route.id]:void 0,x=m.route.errorElement||Pg,u&&(h<0&&_===0?(jg("route-fallback",!1),P=!0,A=null):h===_&&(P=!0,A=m.route.hydrateFallbackElement||null)));let O=e.concat(a.slice(0,_+1)),M=()=>{let j;return b?j=x:P?j=A:m.route.Component?j=k.createElement(m.route.Component,null):m.route.element?j=m.route.element:j=f,k.createElement(Dg,{match:m,routeContext:{outlet:f,matches:O,isDataRoute:t!=null},children:j})};return t&&(m.route.ErrorBoundary||m.route.errorElement||_===0)?k.createElement(kg,{location:t.location,revalidation:t.revalidation,component:x,error:b,children:M(),routeContext:{outlet:null,matches:O,isDataRoute:!0}}):M()},null)}var qh=function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n}(qh||{}),ai=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(ai||{});function Ng(n){let e=k.useContext(Oa);return e||be(!1),e}function Og(n){let e=k.useContext(bg);return e||be(!1),e}function Mg(n){let e=k.useContext(cr);return e||be(!1),e}function Wh(n){let e=Mg(),t=e.matches[e.matches.length-1];return t.route.id||be(!1),t.route.id}function Lg(){var n;let e=k.useContext(Bh),t=Og(ai.UseRouteError),r=Wh(ai.UseRouteError);return e!==void 0?e:(n=t.errors)==null?void 0:n[r]}function Fg(){let{router:n}=Ng(qh.UseNavigateStable),e=Wh(ai.UseNavigateStable),t=k.useRef(!1);return $h(()=>{t.current=!0}),k.useCallback(function(s,i){i===void 0&&(i={}),t.current&&(typeof s=="number"?n.navigate(s):n.navigate(s,Gr({fromRouteId:e},i)))},[n,e])}const Yl={};function jg(n,e,t){!e&&!Yl[n]&&(Yl[n]=!0)}function Ug(n,e){n==null||n.v7_startTransition,(n==null?void 0:n.v7_relativeSplatPath)===void 0&&(!e||e.v7_relativeSplatPath),e&&(e.v7_fetcherPersist,e.v7_normalizeFormMethod,e.v7_partialHydration,e.v7_skipActionErrorRevalidation)}function et(n){be(!1)}function Bg(n){let{basename:e="/",children:t=null,location:r,navigationType:s=Ut.Pop,navigator:i,static:a=!1,future:c}=n;Ni()&&be(!1);let u=e.replace(/^\/*/,"/"),h=k.useMemo(()=>({basename:u,navigator:i,static:a,future:Gr({v7_relativeSplatPath:!1},c)}),[u,c,i,a]);typeof r=="string"&&(r=Pn(r));let{pathname:f="/",search:m="",hash:_="",state:b=null,key:P="default"}=r,x=k.useMemo(()=>{let A=jh(f,u);return A==null?null:{location:{pathname:A,search:m,hash:_,state:b,key:P},navigationType:s}},[u,f,m,_,b,P,s]);return x==null?null:k.createElement(Di.Provider,{value:h},k.createElement(Vi.Provider,{children:t,value:x}))}function $g(n){let{children:e,location:t}=n;return Rg(ra(e),t)}new Promise(()=>{});function ra(n,e){e===void 0&&(e=[]);let t=[];return k.Children.forEach(n,(r,s)=>{if(!k.isValidElement(r))return;let i=[...e,s];if(r.type===k.Fragment){t.push.apply(t,ra(r.props.children,i));return}r.type!==et&&be(!1),!r.props.index||!r.props.children||be(!1);let a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=ra(r.props.children,i)),t.push(a)}),t}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const zg="6";try{window.__reactRouterVersion=zg}catch{}const qg="startTransition",Xl=sm[qg];function Wg(n){let{basename:e,children:t,future:r,window:s}=n,i=k.useRef();i.current==null&&(i.current=Xm({window:s,v5Compat:!0}));let a=i.current,[c,u]=k.useState({action:a.action,location:a.location}),{v7_startTransition:h}=r||{},f=k.useCallback(m=>{h&&Xl?Xl(()=>u(m)):u(m)},[u,h]);return k.useLayoutEffect(()=>a.listen(f),[a,f]),k.useEffect(()=>Ug(r),[r]),k.createElement(Bg,{basename:e,children:t,location:c.location,navigationType:c.action,navigator:a,future:r})}var Zl;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(Zl||(Zl={}));var eu;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(eu||(eu={}));const Hg=()=>{};/**
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
 */const Hh=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Gg=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Gh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,u=s+2<n.length,h=u?n[s+2]:0,f=i>>2,m=(i&3)<<4|c>>4;let _=(c&15)<<2|h>>6,b=h&63;u||(b=64,a||(_=64)),r.push(t[f],t[m],t[_],t[b])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Hh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Gg(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const m=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||h==null||m==null)throw new Kg;const _=i<<2|c>>4;if(r.push(_),h!==64){const b=c<<4&240|h>>2;if(r.push(b),m!==64){const P=h<<6&192|m;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Kg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Qg=function(n){const e=Hh(n);return Gh.encodeByteArray(e,!0)},ci=function(n){return Qg(n).replace(/\./g,"")},Kh=function(n){try{return Gh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Jg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Yg=()=>Jg().__FIREBASE_DEFAULTS__,Xg=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Zg=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Kh(n[1]);return e&&JSON.parse(e)},Mi=()=>{try{return Hg()||Yg()||Xg()||Zg()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Qh=n=>{var e,t;return(t=(e=Mi())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},ey=n=>{const e=Qh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Jh=()=>{var n;return(n=Mi())==null?void 0:n.config},Yh=n=>{var e;return(e=Mi())==null?void 0:e[`_${n}`]};/**
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
 */class ty{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function lr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Xh(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function ny(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n},c="";return[ci(JSON.stringify(t)),ci(JSON.stringify(a)),c].join(".")}const Lr={};function ry(){const n={prod:[],emulator:[]};for(const e of Object.keys(Lr))Lr[e]?n.emulator.push(e):n.prod.push(e);return n}function sy(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let tu=!1;function Zh(n,e){if(typeof window>"u"||typeof document>"u"||!lr(window.location.host)||Lr[n]===e||Lr[n]||tu)return;Lr[n]=e;function t(_){return`__firebase__banner__${_}`}const r="__firebase__banner",i=ry().prod.length>0;function a(){const _=document.getElementById(r);_&&_.remove()}function c(_){_.style.display="flex",_.style.background="#7faaf0",_.style.position="fixed",_.style.bottom="5px",_.style.left="5px",_.style.padding=".5em",_.style.borderRadius="5px",_.style.alignItems="center"}function u(_,b){_.setAttribute("width","24"),_.setAttribute("id",b),_.setAttribute("height","24"),_.setAttribute("viewBox","0 0 24 24"),_.setAttribute("fill","none"),_.style.marginLeft="-6px"}function h(){const _=document.createElement("span");return _.style.cursor="pointer",_.style.marginLeft="16px",_.style.fontSize="24px",_.innerHTML=" &times;",_.onclick=()=>{tu=!0,a()},_}function f(_,b){_.setAttribute("id",b),_.innerText="Learn more",_.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",_.setAttribute("target","__blank"),_.style.paddingLeft="5px",_.style.textDecoration="underline"}function m(){const _=sy(r),b=t("text"),P=document.getElementById(b)||document.createElement("span"),x=t("learnmore"),A=document.getElementById(x)||document.createElement("a"),O=t("preprendIcon"),M=document.getElementById(O)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(_.created){const j=_.element;c(j),f(A,x);const z=h();u(M,O),j.append(M,P,A,z),document.body.appendChild(j)}i?(P.innerText="Preview backend disconnected.",M.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function Ue(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function iy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ue())}function oy(){var e;const n=(e=Mi())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ay(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function cy(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ly(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function uy(){const n=Ue();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function hy(){return!oy()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function dy(){try{return typeof indexedDB=="object"}catch{return!1}}function fy(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const py="FirebaseError";class kt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=py,Object.setPrototypeOf(this,kt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,os.prototype.create)}}class os{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?my(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new kt(s,c,r)}}function my(n,e){return n.replace(gy,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const gy=/\{\$([^}]+)}/g;function yy(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function bn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(nu(i)&&nu(a)){if(!bn(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function nu(n){return n!==null&&typeof n=="object"}/**
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
 */function as(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function _y(n,e){const t=new vy(n,e);return t.subscribe.bind(t)}class vy{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Ey(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=jo),s.error===void 0&&(s.error=jo),s.complete===void 0&&(s.complete=jo);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ey(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function jo(){}/**
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
 */function xe(n){return n&&n._delegate?n._delegate:n}class Sn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const fn="[DEFAULT]";/**
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
 */class wy{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new ty;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ty(e))try{this.getOrInitializeService({instanceIdentifier:fn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=fn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=fn){return this.instances.has(e)}getOptions(e=fn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Iy(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=fn){return this.component?this.component.multipleInstances?e:fn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Iy(n){return n===fn?void 0:n}function Ty(n){return n.instantiationMode==="EAGER"}/**
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
 */class Ay{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new wy(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var X;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(X||(X={}));const by={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},Sy=X.INFO,Ry={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},xy=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Ry[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ma{constructor(e){this.name=e,this._logLevel=Sy,this._logHandler=xy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?by[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const Cy=(n,e)=>e.some(t=>n instanceof t);let ru,su;function Py(){return ru||(ru=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ky(){return su||(su=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ed=new WeakMap,sa=new WeakMap,td=new WeakMap,Uo=new WeakMap,La=new WeakMap;function Dy(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t($t(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&ed.set(t,n)}).catch(()=>{}),La.set(e,n),e}function Vy(n){if(sa.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});sa.set(n,e)}let ia={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return sa.get(n);if(e==="objectStoreNames")return n.objectStoreNames||td.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return $t(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Ny(n){ia=n(ia)}function Oy(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Bo(this),e,...t);return td.set(r,e.sort?e.sort():[e]),$t(r)}:ky().includes(n)?function(...e){return n.apply(Bo(this),e),$t(ed.get(this))}:function(...e){return $t(n.apply(Bo(this),e))}}function My(n){return typeof n=="function"?Oy(n):(n instanceof IDBTransaction&&Vy(n),Cy(n,Py())?new Proxy(n,ia):n)}function $t(n){if(n instanceof IDBRequest)return Dy(n);if(Uo.has(n))return Uo.get(n);const e=My(n);return e!==n&&(Uo.set(n,e),La.set(e,n)),e}const Bo=n=>La.get(n);function Ly(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=$t(a);return r&&a.addEventListener("upgradeneeded",u=>{r($t(a.result),u.oldVersion,u.newVersion,$t(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const Fy=["get","getKey","getAll","getAllKeys","count"],jy=["put","add","delete","clear"],$o=new Map;function iu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if($o.get(e))return $o.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=jy.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Fy.includes(t)))return;const i=async function(a,...c){const u=this.transaction(a,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),s&&u.done]))[0]};return $o.set(e,i),i}Ny(n=>({...n,get:(e,t,r)=>iu(e,t)||n.get(e,t,r),has:(e,t)=>!!iu(e,t)||n.has(e,t)}));/**
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
 */class Uy{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(By(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function By(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const oa="@firebase/app",ou="0.14.0";/**
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
 */const bt=new Ma("@firebase/app"),$y="@firebase/app-compat",zy="@firebase/analytics-compat",qy="@firebase/analytics",Wy="@firebase/app-check-compat",Hy="@firebase/app-check",Gy="@firebase/auth",Ky="@firebase/auth-compat",Qy="@firebase/database",Jy="@firebase/data-connect",Yy="@firebase/database-compat",Xy="@firebase/functions",Zy="@firebase/functions-compat",e_="@firebase/installations",t_="@firebase/installations-compat",n_="@firebase/messaging",r_="@firebase/messaging-compat",s_="@firebase/performance",i_="@firebase/performance-compat",o_="@firebase/remote-config",a_="@firebase/remote-config-compat",c_="@firebase/storage",l_="@firebase/storage-compat",u_="@firebase/firestore",h_="@firebase/ai",d_="@firebase/firestore-compat",f_="firebase",p_="12.0.0";/**
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
 */const aa="[DEFAULT]",m_={[oa]:"fire-core",[$y]:"fire-core-compat",[qy]:"fire-analytics",[zy]:"fire-analytics-compat",[Hy]:"fire-app-check",[Wy]:"fire-app-check-compat",[Gy]:"fire-auth",[Ky]:"fire-auth-compat",[Qy]:"fire-rtdb",[Jy]:"fire-data-connect",[Yy]:"fire-rtdb-compat",[Xy]:"fire-fn",[Zy]:"fire-fn-compat",[e_]:"fire-iid",[t_]:"fire-iid-compat",[n_]:"fire-fcm",[r_]:"fire-fcm-compat",[s_]:"fire-perf",[i_]:"fire-perf-compat",[o_]:"fire-rc",[a_]:"fire-rc-compat",[c_]:"fire-gcs",[l_]:"fire-gcs-compat",[u_]:"fire-fst",[d_]:"fire-fst-compat",[h_]:"fire-vertex","fire-js":"fire-js",[f_]:"fire-js-all"};/**
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
 */const Kr=new Map,g_=new Map,ca=new Map;function au(n,e){try{n.container.addComponent(e)}catch(t){bt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Zn(n){const e=n.name;if(ca.has(e))return bt.debug(`There were multiple attempts to register component ${e}.`),!1;ca.set(e,n);for(const t of Kr.values())au(t,n);for(const t of g_.values())au(t,n);return!0}function Fa(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function tt(n){return n==null?!1:n.settings!==void 0}/**
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
 */const y_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},zt=new os("app","Firebase",y_);/**
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
 */class __{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Sn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zt.create("app-deleted",{appName:this._name})}}/**
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
 */const ur=p_;function Ks(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:aa,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw zt.create("bad-app-name",{appName:String(s)});if(t||(t=Jh()),!t)throw zt.create("no-options");const i=Kr.get(s);if(i){if(bn(t,i.options)&&bn(r,i.config))return i;throw zt.create("duplicate-app",{appName:s})}const a=new Ay(s);for(const u of ca.values())a.addComponent(u);const c=new __(t,r,a);return Kr.set(s,c),c}function Fr(n=aa){const e=Kr.get(n);if(!e&&n===aa&&Jh())return Ks();if(!e)throw zt.create("no-app",{appName:n});return e}function zo(){return Array.from(Kr.values())}function qt(n,e,t){let r=m_[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),bt.warn(a.join(" "));return}Zn(new Sn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const v_="firebase-heartbeat-database",E_=1,Qr="firebase-heartbeat-store";let qo=null;function nd(){return qo||(qo=Ly(v_,E_,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Qr)}catch(t){console.warn(t)}}}}).catch(n=>{throw zt.create("idb-open",{originalErrorMessage:n.message})})),qo}async function w_(n){try{const t=(await nd()).transaction(Qr),r=await t.objectStore(Qr).get(rd(n));return await t.done,r}catch(e){if(e instanceof kt)bt.warn(e.message);else{const t=zt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});bt.warn(t.message)}}}async function cu(n,e){try{const r=(await nd()).transaction(Qr,"readwrite");await r.objectStore(Qr).put(e,rd(n)),await r.done}catch(t){if(t instanceof kt)bt.warn(t.message);else{const r=zt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});bt.warn(r.message)}}}function rd(n){return`${n.name}!${n.options.appId}`}/**
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
 */const I_=1024,T_=30;class A_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new S_(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=lu();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>T_){const a=R_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){bt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=lu(),{heartbeatsToSend:r,unsentEntries:s}=b_(this._heartbeatsCache.heartbeats),i=ci(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return bt.warn(t),""}}}function lu(){return new Date().toISOString().substring(0,10)}function b_(n,e=I_){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),uu(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),uu(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class S_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dy()?fy().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await w_(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return cu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return cu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function uu(n){return ci(JSON.stringify({version:2,heartbeats:n})).length}function R_(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function x_(n){Zn(new Sn("platform-logger",e=>new Uy(e),"PRIVATE")),Zn(new Sn("heartbeat",e=>new A_(e),"PRIVATE")),qt(oa,ou,n),qt(oa,ou,"esm2020"),qt("fire-js","")}x_("");var C_="firebase",P_="12.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qt(C_,P_,"app");var hu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wt,sd;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,g){function E(){}E.prototype=g.prototype,S.D=g.prototype,S.prototype=new E,S.prototype.constructor=S,S.C=function(T,w,I){for(var v=Array(arguments.length-2),B=2;B<arguments.length;B++)v[B-2]=arguments[B];return g.prototype[w].apply(T,v)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(S,g,E){E||(E=0);var T=Array(16);if(typeof g=="string")for(var w=0;16>w;++w)T[w]=g.charCodeAt(E++)|g.charCodeAt(E++)<<8|g.charCodeAt(E++)<<16|g.charCodeAt(E++)<<24;else for(w=0;16>w;++w)T[w]=g[E++]|g[E++]<<8|g[E++]<<16|g[E++]<<24;g=S.g[0],E=S.g[1],w=S.g[2];var I=S.g[3],v=g+(I^E&(w^I))+T[0]+3614090360&4294967295;g=E+(v<<7&4294967295|v>>>25),v=I+(w^g&(E^w))+T[1]+3905402710&4294967295,I=g+(v<<12&4294967295|v>>>20),v=w+(E^I&(g^E))+T[2]+606105819&4294967295,w=I+(v<<17&4294967295|v>>>15),v=E+(g^w&(I^g))+T[3]+3250441966&4294967295,E=w+(v<<22&4294967295|v>>>10),v=g+(I^E&(w^I))+T[4]+4118548399&4294967295,g=E+(v<<7&4294967295|v>>>25),v=I+(w^g&(E^w))+T[5]+1200080426&4294967295,I=g+(v<<12&4294967295|v>>>20),v=w+(E^I&(g^E))+T[6]+2821735955&4294967295,w=I+(v<<17&4294967295|v>>>15),v=E+(g^w&(I^g))+T[7]+4249261313&4294967295,E=w+(v<<22&4294967295|v>>>10),v=g+(I^E&(w^I))+T[8]+1770035416&4294967295,g=E+(v<<7&4294967295|v>>>25),v=I+(w^g&(E^w))+T[9]+2336552879&4294967295,I=g+(v<<12&4294967295|v>>>20),v=w+(E^I&(g^E))+T[10]+4294925233&4294967295,w=I+(v<<17&4294967295|v>>>15),v=E+(g^w&(I^g))+T[11]+2304563134&4294967295,E=w+(v<<22&4294967295|v>>>10),v=g+(I^E&(w^I))+T[12]+1804603682&4294967295,g=E+(v<<7&4294967295|v>>>25),v=I+(w^g&(E^w))+T[13]+4254626195&4294967295,I=g+(v<<12&4294967295|v>>>20),v=w+(E^I&(g^E))+T[14]+2792965006&4294967295,w=I+(v<<17&4294967295|v>>>15),v=E+(g^w&(I^g))+T[15]+1236535329&4294967295,E=w+(v<<22&4294967295|v>>>10),v=g+(w^I&(E^w))+T[1]+4129170786&4294967295,g=E+(v<<5&4294967295|v>>>27),v=I+(E^w&(g^E))+T[6]+3225465664&4294967295,I=g+(v<<9&4294967295|v>>>23),v=w+(g^E&(I^g))+T[11]+643717713&4294967295,w=I+(v<<14&4294967295|v>>>18),v=E+(I^g&(w^I))+T[0]+3921069994&4294967295,E=w+(v<<20&4294967295|v>>>12),v=g+(w^I&(E^w))+T[5]+3593408605&4294967295,g=E+(v<<5&4294967295|v>>>27),v=I+(E^w&(g^E))+T[10]+38016083&4294967295,I=g+(v<<9&4294967295|v>>>23),v=w+(g^E&(I^g))+T[15]+3634488961&4294967295,w=I+(v<<14&4294967295|v>>>18),v=E+(I^g&(w^I))+T[4]+3889429448&4294967295,E=w+(v<<20&4294967295|v>>>12),v=g+(w^I&(E^w))+T[9]+568446438&4294967295,g=E+(v<<5&4294967295|v>>>27),v=I+(E^w&(g^E))+T[14]+3275163606&4294967295,I=g+(v<<9&4294967295|v>>>23),v=w+(g^E&(I^g))+T[3]+4107603335&4294967295,w=I+(v<<14&4294967295|v>>>18),v=E+(I^g&(w^I))+T[8]+1163531501&4294967295,E=w+(v<<20&4294967295|v>>>12),v=g+(w^I&(E^w))+T[13]+2850285829&4294967295,g=E+(v<<5&4294967295|v>>>27),v=I+(E^w&(g^E))+T[2]+4243563512&4294967295,I=g+(v<<9&4294967295|v>>>23),v=w+(g^E&(I^g))+T[7]+1735328473&4294967295,w=I+(v<<14&4294967295|v>>>18),v=E+(I^g&(w^I))+T[12]+2368359562&4294967295,E=w+(v<<20&4294967295|v>>>12),v=g+(E^w^I)+T[5]+4294588738&4294967295,g=E+(v<<4&4294967295|v>>>28),v=I+(g^E^w)+T[8]+2272392833&4294967295,I=g+(v<<11&4294967295|v>>>21),v=w+(I^g^E)+T[11]+1839030562&4294967295,w=I+(v<<16&4294967295|v>>>16),v=E+(w^I^g)+T[14]+4259657740&4294967295,E=w+(v<<23&4294967295|v>>>9),v=g+(E^w^I)+T[1]+2763975236&4294967295,g=E+(v<<4&4294967295|v>>>28),v=I+(g^E^w)+T[4]+1272893353&4294967295,I=g+(v<<11&4294967295|v>>>21),v=w+(I^g^E)+T[7]+4139469664&4294967295,w=I+(v<<16&4294967295|v>>>16),v=E+(w^I^g)+T[10]+3200236656&4294967295,E=w+(v<<23&4294967295|v>>>9),v=g+(E^w^I)+T[13]+681279174&4294967295,g=E+(v<<4&4294967295|v>>>28),v=I+(g^E^w)+T[0]+3936430074&4294967295,I=g+(v<<11&4294967295|v>>>21),v=w+(I^g^E)+T[3]+3572445317&4294967295,w=I+(v<<16&4294967295|v>>>16),v=E+(w^I^g)+T[6]+76029189&4294967295,E=w+(v<<23&4294967295|v>>>9),v=g+(E^w^I)+T[9]+3654602809&4294967295,g=E+(v<<4&4294967295|v>>>28),v=I+(g^E^w)+T[12]+3873151461&4294967295,I=g+(v<<11&4294967295|v>>>21),v=w+(I^g^E)+T[15]+530742520&4294967295,w=I+(v<<16&4294967295|v>>>16),v=E+(w^I^g)+T[2]+3299628645&4294967295,E=w+(v<<23&4294967295|v>>>9),v=g+(w^(E|~I))+T[0]+4096336452&4294967295,g=E+(v<<6&4294967295|v>>>26),v=I+(E^(g|~w))+T[7]+1126891415&4294967295,I=g+(v<<10&4294967295|v>>>22),v=w+(g^(I|~E))+T[14]+2878612391&4294967295,w=I+(v<<15&4294967295|v>>>17),v=E+(I^(w|~g))+T[5]+4237533241&4294967295,E=w+(v<<21&4294967295|v>>>11),v=g+(w^(E|~I))+T[12]+1700485571&4294967295,g=E+(v<<6&4294967295|v>>>26),v=I+(E^(g|~w))+T[3]+2399980690&4294967295,I=g+(v<<10&4294967295|v>>>22),v=w+(g^(I|~E))+T[10]+4293915773&4294967295,w=I+(v<<15&4294967295|v>>>17),v=E+(I^(w|~g))+T[1]+2240044497&4294967295,E=w+(v<<21&4294967295|v>>>11),v=g+(w^(E|~I))+T[8]+1873313359&4294967295,g=E+(v<<6&4294967295|v>>>26),v=I+(E^(g|~w))+T[15]+4264355552&4294967295,I=g+(v<<10&4294967295|v>>>22),v=w+(g^(I|~E))+T[6]+2734768916&4294967295,w=I+(v<<15&4294967295|v>>>17),v=E+(I^(w|~g))+T[13]+1309151649&4294967295,E=w+(v<<21&4294967295|v>>>11),v=g+(w^(E|~I))+T[4]+4149444226&4294967295,g=E+(v<<6&4294967295|v>>>26),v=I+(E^(g|~w))+T[11]+3174756917&4294967295,I=g+(v<<10&4294967295|v>>>22),v=w+(g^(I|~E))+T[2]+718787259&4294967295,w=I+(v<<15&4294967295|v>>>17),v=E+(I^(w|~g))+T[9]+3951481745&4294967295,S.g[0]=S.g[0]+g&4294967295,S.g[1]=S.g[1]+(w+(v<<21&4294967295|v>>>11))&4294967295,S.g[2]=S.g[2]+w&4294967295,S.g[3]=S.g[3]+I&4294967295}r.prototype.u=function(S,g){g===void 0&&(g=S.length);for(var E=g-this.blockSize,T=this.B,w=this.h,I=0;I<g;){if(w==0)for(;I<=E;)s(this,S,I),I+=this.blockSize;if(typeof S=="string"){for(;I<g;)if(T[w++]=S.charCodeAt(I++),w==this.blockSize){s(this,T),w=0;break}}else for(;I<g;)if(T[w++]=S[I++],w==this.blockSize){s(this,T),w=0;break}}this.h=w,this.o+=g},r.prototype.v=function(){var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);S[0]=128;for(var g=1;g<S.length-8;++g)S[g]=0;var E=8*this.o;for(g=S.length-8;g<S.length;++g)S[g]=E&255,E/=256;for(this.u(S),S=Array(16),g=E=0;4>g;++g)for(var T=0;32>T;T+=8)S[E++]=this.g[g]>>>T&255;return S};function i(S,g){var E=c;return Object.prototype.hasOwnProperty.call(E,S)?E[S]:E[S]=g(S)}function a(S,g){this.h=g;for(var E=[],T=!0,w=S.length-1;0<=w;w--){var I=S[w]|0;T&&I==g||(E[w]=I,T=!1)}this.g=E}var c={};function u(S){return-128<=S&&128>S?i(S,function(g){return new a([g|0],0>g?-1:0)}):new a([S|0],0>S?-1:0)}function h(S){if(isNaN(S)||!isFinite(S))return m;if(0>S)return A(h(-S));for(var g=[],E=1,T=0;S>=E;T++)g[T]=S/E|0,E*=4294967296;return new a(g,0)}function f(S,g){if(S.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(S.charAt(0)=="-")return A(f(S.substring(1),g));if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=h(Math.pow(g,8)),T=m,w=0;w<S.length;w+=8){var I=Math.min(8,S.length-w),v=parseInt(S.substring(w,w+I),g);8>I?(I=h(Math.pow(g,I)),T=T.j(I).add(h(v))):(T=T.j(E),T=T.add(h(v)))}return T}var m=u(0),_=u(1),b=u(16777216);n=a.prototype,n.m=function(){if(x(this))return-A(this).m();for(var S=0,g=1,E=0;E<this.g.length;E++){var T=this.i(E);S+=(0<=T?T:4294967296+T)*g,g*=4294967296}return S},n.toString=function(S){if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(P(this))return"0";if(x(this))return"-"+A(this).toString(S);for(var g=h(Math.pow(S,6)),E=this,T="";;){var w=z(E,g).g;E=O(E,w.j(g));var I=((0<E.g.length?E.g[0]:E.h)>>>0).toString(S);if(E=w,P(E))return I+T;for(;6>I.length;)I="0"+I;T=I+T}},n.i=function(S){return 0>S?0:S<this.g.length?this.g[S]:this.h};function P(S){if(S.h!=0)return!1;for(var g=0;g<S.g.length;g++)if(S.g[g]!=0)return!1;return!0}function x(S){return S.h==-1}n.l=function(S){return S=O(this,S),x(S)?-1:P(S)?0:1};function A(S){for(var g=S.g.length,E=[],T=0;T<g;T++)E[T]=~S.g[T];return new a(E,~S.h).add(_)}n.abs=function(){return x(this)?A(this):this},n.add=function(S){for(var g=Math.max(this.g.length,S.g.length),E=[],T=0,w=0;w<=g;w++){var I=T+(this.i(w)&65535)+(S.i(w)&65535),v=(I>>>16)+(this.i(w)>>>16)+(S.i(w)>>>16);T=v>>>16,I&=65535,v&=65535,E[w]=v<<16|I}return new a(E,E[E.length-1]&-2147483648?-1:0)};function O(S,g){return S.add(A(g))}n.j=function(S){if(P(this)||P(S))return m;if(x(this))return x(S)?A(this).j(A(S)):A(A(this).j(S));if(x(S))return A(this.j(A(S)));if(0>this.l(b)&&0>S.l(b))return h(this.m()*S.m());for(var g=this.g.length+S.g.length,E=[],T=0;T<2*g;T++)E[T]=0;for(T=0;T<this.g.length;T++)for(var w=0;w<S.g.length;w++){var I=this.i(T)>>>16,v=this.i(T)&65535,B=S.i(w)>>>16,N=S.i(w)&65535;E[2*T+2*w]+=v*N,M(E,2*T+2*w),E[2*T+2*w+1]+=I*N,M(E,2*T+2*w+1),E[2*T+2*w+1]+=v*B,M(E,2*T+2*w+1),E[2*T+2*w+2]+=I*B,M(E,2*T+2*w+2)}for(T=0;T<g;T++)E[T]=E[2*T+1]<<16|E[2*T];for(T=g;T<2*g;T++)E[T]=0;return new a(E,0)};function M(S,g){for(;(S[g]&65535)!=S[g];)S[g+1]+=S[g]>>>16,S[g]&=65535,g++}function j(S,g){this.g=S,this.h=g}function z(S,g){if(P(g))throw Error("division by zero");if(P(S))return new j(m,m);if(x(S))return g=z(A(S),g),new j(A(g.g),A(g.h));if(x(g))return g=z(S,A(g)),new j(A(g.g),g.h);if(30<S.g.length){if(x(S)||x(g))throw Error("slowDivide_ only works with positive integers.");for(var E=_,T=g;0>=T.l(S);)E=te(E),T=te(T);var w=ie(E,1),I=ie(T,1);for(T=ie(T,2),E=ie(E,2);!P(T);){var v=I.add(T);0>=v.l(S)&&(w=w.add(E),I=v),T=ie(T,1),E=ie(E,1)}return g=O(S,w.j(g)),new j(w,g)}for(w=m;0<=S.l(g);){for(E=Math.max(1,Math.floor(S.m()/g.m())),T=Math.ceil(Math.log(E)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),I=h(E),v=I.j(g);x(v)||0<v.l(S);)E-=T,I=h(E),v=I.j(g);P(I)&&(I=_),w=w.add(I),S=O(S,v)}return new j(w,S)}n.A=function(S){return z(this,S).h},n.and=function(S){for(var g=Math.max(this.g.length,S.g.length),E=[],T=0;T<g;T++)E[T]=this.i(T)&S.i(T);return new a(E,this.h&S.h)},n.or=function(S){for(var g=Math.max(this.g.length,S.g.length),E=[],T=0;T<g;T++)E[T]=this.i(T)|S.i(T);return new a(E,this.h|S.h)},n.xor=function(S){for(var g=Math.max(this.g.length,S.g.length),E=[],T=0;T<g;T++)E[T]=this.i(T)^S.i(T);return new a(E,this.h^S.h)};function te(S){for(var g=S.g.length+1,E=[],T=0;T<g;T++)E[T]=S.i(T)<<1|S.i(T-1)>>>31;return new a(E,S.h)}function ie(S,g){var E=g>>5;g%=32;for(var T=S.g.length-E,w=[],I=0;I<T;I++)w[I]=0<g?S.i(I+E)>>>g|S.i(I+E+1)<<32-g:S.i(I+E);return new a(w,S.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,sd=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,Wt=a}).apply(typeof hu<"u"?hu:typeof self<"u"?self:typeof window<"u"?window:{});var Bs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var id,Vr,od,Qs,la,ad,cd,ld;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,d){return o==Array.prototype||o==Object.prototype||(o[l]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Bs=="object"&&Bs];for(var l=0;l<o.length;++l){var d=o[l];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(o,l){if(l)e:{var d=r;o=o.split(".");for(var y=0;y<o.length-1;y++){var R=o[y];if(!(R in d))break e;d=d[R]}o=o[o.length-1],y=d[o],l=l(y),l!=y&&l!=null&&e(d,o,{configurable:!0,writable:!0,value:l})}}function i(o,l){o instanceof String&&(o+="");var d=0,y=!1,R={next:function(){if(!y&&d<o.length){var C=d++;return{value:l(C,o[C]),done:!1}}return y=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}s("Array.prototype.values",function(o){return o||function(){return i(this,function(l,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function u(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function h(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function f(o,l,d){return o.call.apply(o.bind,arguments)}function m(o,l,d){if(!o)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,y),o.apply(l,R)}}return function(){return o.apply(l,arguments)}}function _(o,l,d){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,_.apply(null,arguments)}function b(o,l){var d=Array.prototype.slice.call(arguments,1);return function(){var y=d.slice();return y.push.apply(y,arguments),o.apply(this,y)}}function P(o,l){function d(){}d.prototype=l.prototype,o.aa=l.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(y,R,C){for(var L=Array(arguments.length-2),ce=2;ce<arguments.length;ce++)L[ce-2]=arguments[ce];return l.prototype[R].apply(y,L)}}function x(o){const l=o.length;if(0<l){const d=Array(l);for(let y=0;y<l;y++)d[y]=o[y];return d}return[]}function A(o,l){for(let d=1;d<arguments.length;d++){const y=arguments[d];if(u(y)){const R=o.length||0,C=y.length||0;o.length=R+C;for(let L=0;L<C;L++)o[R+L]=y[L]}else o.push(y)}}class O{constructor(l,d){this.i=l,this.j=d,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function M(o){return/^[\s\xa0]*$/.test(o)}function j(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function z(o){return z[" "](o),o}z[" "]=function(){};var te=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function ie(o,l,d){for(const y in o)l.call(d,o[y],y,o)}function S(o,l){for(const d in o)l.call(void 0,o[d],d,o)}function g(o){const l={};for(const d in o)l[d]=o[d];return l}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,l){let d,y;for(let R=1;R<arguments.length;R++){y=arguments[R];for(d in y)o[d]=y[d];for(let C=0;C<E.length;C++)d=E[C],Object.prototype.hasOwnProperty.call(y,d)&&(o[d]=y[d])}}function w(o){var l=1;o=o.split(":");const d=[];for(;0<l&&o.length;)d.push(o.shift()),l--;return o.length&&d.push(o.join(":")),d}function I(o){c.setTimeout(()=>{throw o},0)}function v(){var o=sn;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class B{constructor(){this.h=this.g=null}add(l,d){const y=N.get();y.set(l,d),this.h?this.h.next=y:this.g=y,this.h=y}}var N=new O(()=>new ge,o=>o.reset());class ge{constructor(){this.next=this.g=this.h=null}set(l,d){this.h=l,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Y,ue=!1,sn=new B,Vn=()=>{const o=c.Promise.resolve(void 0);Y=()=>{o.then(Nn)}};var Nn=()=>{for(var o;o=v();){try{o.h.call(o.g)}catch(d){I(d)}var l=N;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}ue=!1};function it(){this.s=this.s,this.C=this.C}it.prototype.s=!1,it.prototype.ma=function(){this.s||(this.s=!0,this.N())},it.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ie(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}Ie.prototype.h=function(){this.defaultPrevented=!0};var ys=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};c.addEventListener("test",d,l),c.removeEventListener("test",d,l)}catch{}return o}();function Ge(o,l){if(Ie.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,y=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(te){e:{try{z(l.nodeName);var R=!0;break e}catch{}R=!1}R||(l=null)}}else d=="mouseover"?l=o.fromElement:d=="mouseout"&&(l=o.toElement);this.relatedTarget=l,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Ap[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Ge.aa.h.call(this)}}P(Ge,Ie);var Ap={2:"touch",3:"pen",4:"mouse"};Ge.prototype.h=function(){Ge.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var yr="closure_listenable_"+(1e6*Math.random()|0),bp=0;function Sp(o,l,d,y,R){this.listener=o,this.proxy=null,this.src=l,this.type=d,this.capture=!!y,this.ha=R,this.key=++bp,this.da=this.fa=!1}function _s(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function vs(o){this.src=o,this.g={},this.h=0}vs.prototype.add=function(o,l,d,y,R){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var L=mo(o,l,y,R);return-1<L?(l=o[L],d||(l.fa=!1)):(l=new Sp(l,this.src,C,!!y,R),l.fa=d,o.push(l)),l};function po(o,l){var d=l.type;if(d in o.g){var y=o.g[d],R=Array.prototype.indexOf.call(y,l,void 0),C;(C=0<=R)&&Array.prototype.splice.call(y,R,1),C&&(_s(l),o.g[d].length==0&&(delete o.g[d],o.h--))}}function mo(o,l,d,y){for(var R=0;R<o.length;++R){var C=o[R];if(!C.da&&C.listener==l&&C.capture==!!d&&C.ha==y)return R}return-1}var go="closure_lm_"+(1e6*Math.random()|0),yo={};function jc(o,l,d,y,R){if(y&&y.once)return Bc(o,l,d,y,R);if(Array.isArray(l)){for(var C=0;C<l.length;C++)jc(o,l[C],d,y,R);return null}return d=wo(d),o&&o[yr]?o.K(l,d,h(y)?!!y.capture:!!y,R):Uc(o,l,d,!1,y,R)}function Uc(o,l,d,y,R,C){if(!l)throw Error("Invalid event type");var L=h(R)?!!R.capture:!!R,ce=vo(o);if(ce||(o[go]=ce=new vs(o)),d=ce.add(l,d,y,L,C),d.proxy)return d;if(y=Rp(),d.proxy=y,y.src=o,y.listener=d,o.addEventListener)ys||(R=L),R===void 0&&(R=!1),o.addEventListener(l.toString(),y,R);else if(o.attachEvent)o.attachEvent(zc(l.toString()),y);else if(o.addListener&&o.removeListener)o.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Rp(){function o(d){return l.call(o.src,o.listener,d)}const l=xp;return o}function Bc(o,l,d,y,R){if(Array.isArray(l)){for(var C=0;C<l.length;C++)Bc(o,l[C],d,y,R);return null}return d=wo(d),o&&o[yr]?o.L(l,d,h(y)?!!y.capture:!!y,R):Uc(o,l,d,!0,y,R)}function $c(o,l,d,y,R){if(Array.isArray(l))for(var C=0;C<l.length;C++)$c(o,l[C],d,y,R);else y=h(y)?!!y.capture:!!y,d=wo(d),o&&o[yr]?(o=o.i,l=String(l).toString(),l in o.g&&(C=o.g[l],d=mo(C,d,y,R),-1<d&&(_s(C[d]),Array.prototype.splice.call(C,d,1),C.length==0&&(delete o.g[l],o.h--)))):o&&(o=vo(o))&&(l=o.g[l.toString()],o=-1,l&&(o=mo(l,d,y,R)),(d=-1<o?l[o]:null)&&_o(d))}function _o(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[yr])po(l.i,o);else{var d=o.type,y=o.proxy;l.removeEventListener?l.removeEventListener(d,y,o.capture):l.detachEvent?l.detachEvent(zc(d),y):l.addListener&&l.removeListener&&l.removeListener(y),(d=vo(l))?(po(d,o),d.h==0&&(d.src=null,l[go]=null)):_s(o)}}}function zc(o){return o in yo?yo[o]:yo[o]="on"+o}function xp(o,l){if(o.da)o=!0;else{l=new Ge(l,this);var d=o.listener,y=o.ha||o.src;o.fa&&_o(o),o=d.call(y,l)}return o}function vo(o){return o=o[go],o instanceof vs?o:null}var Eo="__closure_events_fn_"+(1e9*Math.random()>>>0);function wo(o){return typeof o=="function"?o:(o[Eo]||(o[Eo]=function(l){return o.handleEvent(l)}),o[Eo])}function Ve(){it.call(this),this.i=new vs(this),this.M=this,this.F=null}P(Ve,it),Ve.prototype[yr]=!0,Ve.prototype.removeEventListener=function(o,l,d,y){$c(this,o,l,d,y)};function Be(o,l){var d,y=o.F;if(y)for(d=[];y;y=y.F)d.push(y);if(o=o.M,y=l.type||l,typeof l=="string")l=new Ie(l,o);else if(l instanceof Ie)l.target=l.target||o;else{var R=l;l=new Ie(y,o),T(l,R)}if(R=!0,d)for(var C=d.length-1;0<=C;C--){var L=l.g=d[C];R=Es(L,y,!0,l)&&R}if(L=l.g=o,R=Es(L,y,!0,l)&&R,R=Es(L,y,!1,l)&&R,d)for(C=0;C<d.length;C++)L=l.g=d[C],R=Es(L,y,!1,l)&&R}Ve.prototype.N=function(){if(Ve.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var d=o.g[l],y=0;y<d.length;y++)_s(d[y]);delete o.g[l],o.h--}}this.F=null},Ve.prototype.K=function(o,l,d,y){return this.i.add(String(o),l,!1,d,y)},Ve.prototype.L=function(o,l,d,y){return this.i.add(String(o),l,!0,d,y)};function Es(o,l,d,y){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var R=!0,C=0;C<l.length;++C){var L=l[C];if(L&&!L.da&&L.capture==d){var ce=L.listener,Ce=L.ha||L.src;L.fa&&po(o.i,L),R=ce.call(Ce,y)!==!1&&R}}return R&&!y.defaultPrevented}function qc(o,l,d){if(typeof o=="function")d&&(o=_(o,d));else if(o&&typeof o.handleEvent=="function")o=_(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(o,l||0)}function Wc(o){o.g=qc(()=>{o.g=null,o.i&&(o.i=!1,Wc(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class Cp extends it{constructor(l,d){super(),this.m=l,this.l=d,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Wc(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _r(o){it.call(this),this.h=o,this.g={}}P(_r,it);var Hc=[];function Gc(o){ie(o.g,function(l,d){this.g.hasOwnProperty(d)&&_o(l)},o),o.g={}}_r.prototype.N=function(){_r.aa.N.call(this),Gc(this)},_r.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Io=c.JSON.stringify,Pp=c.JSON.parse,kp=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function To(){}To.prototype.h=null;function Kc(o){return o.h||(o.h=o.i())}function Qc(){}var vr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ao(){Ie.call(this,"d")}P(Ao,Ie);function bo(){Ie.call(this,"c")}P(bo,Ie);var on={},Jc=null;function ws(){return Jc=Jc||new Ve}on.La="serverreachability";function Yc(o){Ie.call(this,on.La,o)}P(Yc,Ie);function Er(o){const l=ws();Be(l,new Yc(l))}on.STAT_EVENT="statevent";function Xc(o,l){Ie.call(this,on.STAT_EVENT,o),this.stat=l}P(Xc,Ie);function $e(o){const l=ws();Be(l,new Xc(l,o))}on.Ma="timingevent";function Zc(o,l){Ie.call(this,on.Ma,o),this.size=l}P(Zc,Ie);function wr(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},l)}function Ir(){this.g=!0}Ir.prototype.xa=function(){this.g=!1};function Dp(o,l,d,y,R,C){o.info(function(){if(o.g)if(C)for(var L="",ce=C.split("&"),Ce=0;Ce<ce.length;Ce++){var se=ce[Ce].split("=");if(1<se.length){var Ne=se[0];se=se[1];var Oe=Ne.split("_");L=2<=Oe.length&&Oe[1]=="type"?L+(Ne+"="+se+"&"):L+(Ne+"=redacted&")}}else L=null;else L=C;return"XMLHTTP REQ ("+y+") [attempt "+R+"]: "+l+`
`+d+`
`+L})}function Vp(o,l,d,y,R,C,L){o.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+R+"]: "+l+`
`+d+`
`+C+" "+L})}function On(o,l,d,y){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+Op(o,d)+(y?" "+y:"")})}function Np(o,l){o.info(function(){return"TIMEOUT: "+l})}Ir.prototype.info=function(){};function Op(o,l){if(!o.g)return l;if(!l)return null;try{var d=JSON.parse(l);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var y=d[o];if(!(2>y.length)){var R=y[1];if(Array.isArray(R)&&!(1>R.length)){var C=R[0];if(C!="noop"&&C!="stop"&&C!="close")for(var L=1;L<R.length;L++)R[L]=""}}}}return Io(d)}catch{return l}}var Is={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},el={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},So;function Ts(){}P(Ts,To),Ts.prototype.g=function(){return new XMLHttpRequest},Ts.prototype.i=function(){return{}},So=new Ts;function Vt(o,l,d,y){this.j=o,this.i=l,this.l=d,this.R=y||1,this.U=new _r(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new tl}function tl(){this.i=null,this.g="",this.h=!1}var nl={},Ro={};function xo(o,l,d){o.L=1,o.v=Rs(gt(l)),o.m=d,o.P=!0,rl(o,null)}function rl(o,l){o.F=Date.now(),As(o),o.A=gt(o.v);var d=o.A,y=o.R;Array.isArray(y)||(y=[String(y)]),yl(d.i,"t",y),o.C=0,d=o.j.J,o.h=new tl,o.g=Ol(o.j,d?l:null,!o.m),0<o.O&&(o.M=new Cp(_(o.Y,o,o.g),o.O)),l=o.U,d=o.g,y=o.ca;var R="readystatechange";Array.isArray(R)||(R&&(Hc[0]=R.toString()),R=Hc);for(var C=0;C<R.length;C++){var L=jc(d,R[C],y||l.handleEvent,!1,l.h||l);if(!L)break;l.g[L.key]=L}l=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),Er(),Dp(o.i,o.u,o.A,o.l,o.R,o.m)}Vt.prototype.ca=function(o){o=o.target;const l=this.M;l&&yt(o)==3?l.j():this.Y(o)},Vt.prototype.Y=function(o){try{if(o==this.g)e:{const Oe=yt(this.g);var l=this.g.Ba();const Fn=this.g.Z();if(!(3>Oe)&&(Oe!=3||this.g&&(this.h.h||this.g.oa()||Al(this.g)))){this.J||Oe!=4||l==7||(l==8||0>=Fn?Er(3):Er(2)),Co(this);var d=this.g.Z();this.X=d;t:if(sl(this)){var y=Al(this.g);o="";var R=y.length,C=yt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){an(this),Tr(this);var L="";break t}this.h.i=new c.TextDecoder}for(l=0;l<R;l++)this.h.h=!0,o+=this.h.i.decode(y[l],{stream:!(C&&l==R-1)});y.length=0,this.h.g+=o,this.C=0,L=this.h.g}else L=this.g.oa();if(this.o=d==200,Vp(this.i,this.u,this.A,this.l,this.R,Oe,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ce,Ce=this.g;if((ce=Ce.g?Ce.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!M(ce)){var se=ce;break t}}se=null}if(d=se)On(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Po(this,d);else{this.o=!1,this.s=3,$e(12),an(this),Tr(this);break e}}if(this.P){d=!0;let Ze;for(;!this.J&&this.C<L.length;)if(Ze=Mp(this,L),Ze==Ro){Oe==4&&(this.s=4,$e(14),d=!1),On(this.i,this.l,null,"[Incomplete Response]");break}else if(Ze==nl){this.s=4,$e(15),On(this.i,this.l,L,"[Invalid Chunk]"),d=!1;break}else On(this.i,this.l,Ze,null),Po(this,Ze);if(sl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Oe!=4||L.length!=0||this.h.h||(this.s=1,$e(16),d=!1),this.o=this.o&&d,!d)On(this.i,this.l,L,"[Invalid Chunked Response]"),an(this),Tr(this);else if(0<L.length&&!this.W){this.W=!0;var Ne=this.j;Ne.g==this&&Ne.ba&&!Ne.M&&(Ne.j.info("Great, no buffering proxy detected. Bytes received: "+L.length),Mo(Ne),Ne.M=!0,$e(11))}}else On(this.i,this.l,L,null),Po(this,L);Oe==4&&an(this),this.o&&!this.J&&(Oe==4?kl(this.j,this):(this.o=!1,As(this)))}else Zp(this.g),d==400&&0<L.indexOf("Unknown SID")?(this.s=3,$e(12)):(this.s=0,$e(13)),an(this),Tr(this)}}}catch{}finally{}};function sl(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Mp(o,l){var d=o.C,y=l.indexOf(`
`,d);return y==-1?Ro:(d=Number(l.substring(d,y)),isNaN(d)?nl:(y+=1,y+d>l.length?Ro:(l=l.slice(y,y+d),o.C=y+d,l)))}Vt.prototype.cancel=function(){this.J=!0,an(this)};function As(o){o.S=Date.now()+o.I,il(o,o.I)}function il(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=wr(_(o.ba,o),l)}function Co(o){o.B&&(c.clearTimeout(o.B),o.B=null)}Vt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Np(this.i,this.A),this.L!=2&&(Er(),$e(17)),an(this),this.s=2,Tr(this)):il(this,this.S-o)};function Tr(o){o.j.G==0||o.J||kl(o.j,o)}function an(o){Co(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,Gc(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function Po(o,l){try{var d=o.j;if(d.G!=0&&(d.g==o||ko(d.h,o))){if(!o.K&&ko(d.h,o)&&d.G==3){try{var y=d.Da.g.parse(l)}catch{y=null}if(Array.isArray(y)&&y.length==3){var R=y;if(R[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Vs(d),ks(d);else break e;Oo(d),$e(18)}}else d.za=R[1],0<d.za-d.T&&37500>R[2]&&d.F&&d.v==0&&!d.C&&(d.C=wr(_(d.Za,d),6e3));if(1>=cl(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else ln(d,11)}else if((o.K||d.g==o)&&Vs(d),!M(l))for(R=d.Da.g.parse(l),l=0;l<R.length;l++){let se=R[l];if(d.T=se[0],se=se[1],d.G==2)if(se[0]=="c"){d.K=se[1],d.ia=se[2];const Ne=se[3];Ne!=null&&(d.la=Ne,d.j.info("VER="+d.la));const Oe=se[4];Oe!=null&&(d.Aa=Oe,d.j.info("SVER="+d.Aa));const Fn=se[5];Fn!=null&&typeof Fn=="number"&&0<Fn&&(y=1.5*Fn,d.L=y,d.j.info("backChannelRequestTimeoutMs_="+y)),y=d;const Ze=o.g;if(Ze){const Os=Ze.g?Ze.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Os){var C=y.h;C.g||Os.indexOf("spdy")==-1&&Os.indexOf("quic")==-1&&Os.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Do(C,C.h),C.h=null))}if(y.D){const Lo=Ze.g?Ze.g.getResponseHeader("X-HTTP-Session-Id"):null;Lo&&(y.ya=Lo,he(y.I,y.D,Lo))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),y=d;var L=o;if(y.qa=Nl(y,y.J?y.ia:null,y.W),L.K){ll(y.h,L);var ce=L,Ce=y.L;Ce&&(ce.I=Ce),ce.B&&(Co(ce),As(ce)),y.g=L}else Cl(y);0<d.i.length&&Ds(d)}else se[0]!="stop"&&se[0]!="close"||ln(d,7);else d.G==3&&(se[0]=="stop"||se[0]=="close"?se[0]=="stop"?ln(d,7):No(d):se[0]!="noop"&&d.l&&d.l.ta(se),d.v=0)}}Er(4)}catch{}}var Lp=class{constructor(o,l){this.g=o,this.map=l}};function ol(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function al(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function cl(o){return o.h?1:o.g?o.g.size:0}function ko(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function Do(o,l){o.g?o.g.add(l):o.h=l}function ll(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}ol.prototype.cancel=function(){if(this.i=ul(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function ul(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const d of o.g.values())l=l.concat(d.D);return l}return x(o.i)}function Fp(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var l=[],d=o.length,y=0;y<d;y++)l.push(o[y]);return l}l=[],d=0;for(y in o)l[d++]=o[y];return l}function jp(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var l=[];o=o.length;for(var d=0;d<o;d++)l.push(d);return l}l=[],d=0;for(const y in o)l[d++]=y;return l}}}function hl(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var d=jp(o),y=Fp(o),R=y.length,C=0;C<R;C++)l.call(void 0,y[C],d&&d[C],o)}var dl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Up(o,l){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var y=o[d].indexOf("="),R=null;if(0<=y){var C=o[d].substring(0,y);R=o[d].substring(y+1)}else C=o[d];l(C,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function cn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof cn){this.h=o.h,bs(this,o.j),this.o=o.o,this.g=o.g,Ss(this,o.s),this.l=o.l;var l=o.i,d=new Sr;d.i=l.i,l.g&&(d.g=new Map(l.g),d.h=l.h),fl(this,d),this.m=o.m}else o&&(l=String(o).match(dl))?(this.h=!1,bs(this,l[1]||"",!0),this.o=Ar(l[2]||""),this.g=Ar(l[3]||"",!0),Ss(this,l[4]),this.l=Ar(l[5]||"",!0),fl(this,l[6]||"",!0),this.m=Ar(l[7]||"")):(this.h=!1,this.i=new Sr(null,this.h))}cn.prototype.toString=function(){var o=[],l=this.j;l&&o.push(br(l,pl,!0),":");var d=this.g;return(d||l=="file")&&(o.push("//"),(l=this.o)&&o.push(br(l,pl,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(br(d,d.charAt(0)=="/"?zp:$p,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",br(d,Wp)),o.join("")};function gt(o){return new cn(o)}function bs(o,l,d){o.j=d?Ar(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function Ss(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function fl(o,l,d){l instanceof Sr?(o.i=l,Hp(o.i,o.h)):(d||(l=br(l,qp)),o.i=new Sr(l,o.h))}function he(o,l,d){o.i.set(l,d)}function Rs(o){return he(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Ar(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function br(o,l,d){return typeof o=="string"?(o=encodeURI(o).replace(l,Bp),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Bp(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var pl=/[#\/\?@]/g,$p=/[#\?:]/g,zp=/[#\?]/g,qp=/[#\?@]/g,Wp=/#/g;function Sr(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function Nt(o){o.g||(o.g=new Map,o.h=0,o.i&&Up(o.i,function(l,d){o.add(decodeURIComponent(l.replace(/\+/g," ")),d)}))}n=Sr.prototype,n.add=function(o,l){Nt(this),this.i=null,o=Mn(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(l),this.h+=1,this};function ml(o,l){Nt(o),l=Mn(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function gl(o,l){return Nt(o),l=Mn(o,l),o.g.has(l)}n.forEach=function(o,l){Nt(this),this.g.forEach(function(d,y){d.forEach(function(R){o.call(l,R,y,this)},this)},this)},n.na=function(){Nt(this);const o=Array.from(this.g.values()),l=Array.from(this.g.keys()),d=[];for(let y=0;y<l.length;y++){const R=o[y];for(let C=0;C<R.length;C++)d.push(l[y])}return d},n.V=function(o){Nt(this);let l=[];if(typeof o=="string")gl(this,o)&&(l=l.concat(this.g.get(Mn(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)l=l.concat(o[d])}return l},n.set=function(o,l){return Nt(this),this.i=null,o=Mn(this,o),gl(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function yl(o,l,d){ml(o,l),0<d.length&&(o.i=null,o.g.set(Mn(o,l),x(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(var d=0;d<l.length;d++){var y=l[d];const C=encodeURIComponent(String(y)),L=this.V(y);for(y=0;y<L.length;y++){var R=C;L[y]!==""&&(R+="="+encodeURIComponent(String(L[y]))),o.push(R)}}return this.i=o.join("&")};function Mn(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function Hp(o,l){l&&!o.j&&(Nt(o),o.i=null,o.g.forEach(function(d,y){var R=y.toLowerCase();y!=R&&(ml(this,y),yl(this,R,d))},o)),o.j=l}function Gp(o,l){const d=new Ir;if(c.Image){const y=new Image;y.onload=b(Ot,d,"TestLoadImage: loaded",!0,l,y),y.onerror=b(Ot,d,"TestLoadImage: error",!1,l,y),y.onabort=b(Ot,d,"TestLoadImage: abort",!1,l,y),y.ontimeout=b(Ot,d,"TestLoadImage: timeout",!1,l,y),c.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=o}else l(!1)}function Kp(o,l){const d=new Ir,y=new AbortController,R=setTimeout(()=>{y.abort(),Ot(d,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:y.signal}).then(C=>{clearTimeout(R),C.ok?Ot(d,"TestPingServer: ok",!0,l):Ot(d,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(R),Ot(d,"TestPingServer: error",!1,l)})}function Ot(o,l,d,y,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),y(d)}catch{}}function Qp(){this.g=new kp}function Jp(o,l,d){const y=d||"";try{hl(o,function(R,C){let L=R;h(R)&&(L=Io(R)),l.push(y+C+"="+encodeURIComponent(L))})}catch(R){throw l.push(y+"type="+encodeURIComponent("_badmap")),R}}function xs(o){this.l=o.Ub||null,this.j=o.eb||!1}P(xs,To),xs.prototype.g=function(){return new Cs(this.l,this.j)},xs.prototype.i=function(o){return function(){return o}}({});function Cs(o,l){Ve.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Cs,Ve),n=Cs.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,xr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Rr(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,xr(this)),this.g&&(this.readyState=3,xr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;_l(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function _l(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?Rr(this):xr(this),this.readyState==3&&_l(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Rr(this))},n.Qa=function(o){this.g&&(this.response=o,Rr(this))},n.ga=function(){this.g&&Rr(this)};function Rr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,xr(o)}n.setRequestHeader=function(o,l){this.u.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var d=l.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=l.next();return o.join(`\r
`)};function xr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Cs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function vl(o){let l="";return ie(o,function(d,y){l+=y,l+=":",l+=d,l+=`\r
`}),l}function Vo(o,l,d){e:{for(y in d){var y=!1;break e}y=!0}y||(d=vl(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):he(o,l,d))}function fe(o){Ve.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(fe,Ve);var Yp=/^https?$/i,Xp=["POST","PUT"];n=fe.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,l,d,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():So.g(),this.v=this.o?Kc(this.o):Kc(So),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(C){El(this,C);return}if(o=d||"",d=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var R in y)d.set(R,y[R]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const C of y.keys())d.set(C,y.get(C));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(d.keys()).find(C=>C.toLowerCase()=="content-type"),R=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Xp,l,void 0))||y||R||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,L]of d)this.g.setRequestHeader(C,L);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Tl(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){El(this,C)}};function El(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,wl(o),Ps(o)}function wl(o){o.A||(o.A=!0,Be(o,"complete"),Be(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Be(this,"complete"),Be(this,"abort"),Ps(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ps(this,!0)),fe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Il(this):this.bb())},n.bb=function(){Il(this)};function Il(o){if(o.h&&typeof a<"u"&&(!o.v[1]||yt(o)!=4||o.Z()!=2)){if(o.u&&yt(o)==4)qc(o.Ea,0,o);else if(Be(o,"readystatechange"),yt(o)==4){o.h=!1;try{const L=o.Z();e:switch(L){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var d;if(!(d=l)){var y;if(y=L===0){var R=String(o.D).match(dl)[1]||null;!R&&c.self&&c.self.location&&(R=c.self.location.protocol.slice(0,-1)),y=!Yp.test(R?R.toLowerCase():"")}d=y}if(d)Be(o,"complete"),Be(o,"success");else{o.m=6;try{var C=2<yt(o)?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.Z()+"]",wl(o)}}finally{Ps(o)}}}}function Ps(o,l){if(o.g){Tl(o);const d=o.g,y=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||Be(o,"ready");try{d.onreadystatechange=y}catch{}}}function Tl(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function yt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<yt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),Pp(l)}};function Al(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Zp(o){const l={};o=(o.g&&2<=yt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<o.length;y++){if(M(o[y]))continue;var d=w(o[y]);const R=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const C=l[R]||[];l[R]=C,C.push(d)}S(l,function(y){return y.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Cr(o,l,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||l}function bl(o){this.Aa=0,this.i=[],this.j=new Ir,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Cr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Cr("baseRetryDelayMs",5e3,o),this.cb=Cr("retryDelaySeedMs",1e4,o),this.Wa=Cr("forwardChannelMaxRetries",2,o),this.wa=Cr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new ol(o&&o.concurrentRequestLimit),this.Da=new Qp,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=bl.prototype,n.la=8,n.G=1,n.connect=function(o,l,d,y){$e(0),this.W=o,this.H=l||{},d&&y!==void 0&&(this.H.OSID=d,this.H.OAID=y),this.F=this.X,this.I=Nl(this,null,this.W),Ds(this)};function No(o){if(Sl(o),o.G==3){var l=o.U++,d=gt(o.I);if(he(d,"SID",o.K),he(d,"RID",l),he(d,"TYPE","terminate"),Pr(o,d),l=new Vt(o,o.j,l),l.L=2,l.v=Rs(gt(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=l.v,d=!0),d||(l.g=Ol(l.j,null),l.g.ea(l.v)),l.F=Date.now(),As(l)}Vl(o)}function ks(o){o.g&&(Mo(o),o.g.cancel(),o.g=null)}function Sl(o){ks(o),o.u&&(c.clearTimeout(o.u),o.u=null),Vs(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function Ds(o){if(!al(o.h)&&!o.s){o.s=!0;var l=o.Ga;Y||Vn(),ue||(Y(),ue=!0),sn.add(l,o),o.B=0}}function em(o,l){return cl(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=wr(_(o.Ga,o,l),Dl(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const R=new Vt(this,this.j,o);let C=this.o;if(this.S&&(C?(C=g(C),T(C,this.S)):C=this.S),this.m!==null||this.O||(R.H=C,C=null),this.P)e:{for(var l=0,d=0;d<this.i.length;d++){t:{var y=this.i[d];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(l+=y,4096<l){l=d;break e}if(l===4096||d===this.i.length-1){l=d+1;break e}}l=1e3}else l=1e3;l=xl(this,R,l),d=gt(this.I),he(d,"RID",o),he(d,"CVER",22),this.D&&he(d,"X-HTTP-Session-Id",this.D),Pr(this,d),C&&(this.O?l="headers="+encodeURIComponent(String(vl(C)))+"&"+l:this.m&&Vo(d,this.m,C)),Do(this.h,R),this.Ua&&he(d,"TYPE","init"),this.P?(he(d,"$req",l),he(d,"SID","null"),R.T=!0,xo(R,d,null)):xo(R,d,l),this.G=2}}else this.G==3&&(o?Rl(this,o):this.i.length==0||al(this.h)||Rl(this))};function Rl(o,l){var d;l?d=l.l:d=o.U++;const y=gt(o.I);he(y,"SID",o.K),he(y,"RID",d),he(y,"AID",o.T),Pr(o,y),o.m&&o.o&&Vo(y,o.m,o.o),d=new Vt(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),l&&(o.i=l.D.concat(o.i)),l=xl(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Do(o.h,d),xo(d,y,l)}function Pr(o,l){o.H&&ie(o.H,function(d,y){he(l,y,d)}),o.l&&hl({},function(d,y){he(l,y,d)})}function xl(o,l,d){d=Math.min(o.i.length,d);var y=o.l?_(o.l.Na,o.l,o):null;e:{var R=o.i;let C=-1;for(;;){const L=["count="+d];C==-1?0<d?(C=R[0].g,L.push("ofs="+C)):C=0:L.push("ofs="+C);let ce=!0;for(let Ce=0;Ce<d;Ce++){let se=R[Ce].g;const Ne=R[Ce].map;if(se-=C,0>se)C=Math.max(0,R[Ce].g-100),ce=!1;else try{Jp(Ne,L,"req"+se+"_")}catch{y&&y(Ne)}}if(ce){y=L.join("&");break e}}}return o=o.i.splice(0,d),l.D=o,y}function Cl(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;Y||Vn(),ue||(Y(),ue=!0),sn.add(l,o),o.v=0}}function Oo(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=wr(_(o.Fa,o),Dl(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Pl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=wr(_(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,$e(10),ks(this),Pl(this))};function Mo(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function Pl(o){o.g=new Vt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=gt(o.qa);he(l,"RID","rpc"),he(l,"SID",o.K),he(l,"AID",o.T),he(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&he(l,"TO",o.ja),he(l,"TYPE","xmlhttp"),Pr(o,l),o.m&&o.o&&Vo(l,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=Rs(gt(l)),d.m=null,d.P=!0,rl(d,o)}n.Za=function(){this.C!=null&&(this.C=null,ks(this),Oo(this),$e(19))};function Vs(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function kl(o,l){var d=null;if(o.g==l){Vs(o),Mo(o),o.g=null;var y=2}else if(ko(o.h,l))d=l.D,ll(o.h,l),y=1;else return;if(o.G!=0){if(l.o)if(y==1){d=l.m?l.m.length:0,l=Date.now()-l.F;var R=o.B;y=ws(),Be(y,new Zc(y,d)),Ds(o)}else Cl(o);else if(R=l.s,R==3||R==0&&0<l.X||!(y==1&&em(o,l)||y==2&&Oo(o)))switch(d&&0<d.length&&(l=o.h,l.i=l.i.concat(d)),R){case 1:ln(o,5);break;case 4:ln(o,10);break;case 3:ln(o,6);break;default:ln(o,2)}}}function Dl(o,l){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*l}function ln(o,l){if(o.j.info("Error code "+l),l==2){var d=_(o.fb,o),y=o.Xa;const R=!y;y=new cn(y||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||bs(y,"https"),Rs(y),R?Gp(y.toString(),d):Kp(y.toString(),d)}else $e(2);o.G=0,o.l&&o.l.sa(l),Vl(o),Sl(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),$e(2)):(this.j.info("Failed to ping google.com"),$e(1))};function Vl(o){if(o.G=0,o.ka=[],o.l){const l=ul(o.h);(l.length!=0||o.i.length!=0)&&(A(o.ka,l),A(o.ka,o.i),o.h.i.length=0,x(o.i),o.i.length=0),o.l.ra()}}function Nl(o,l,d){var y=d instanceof cn?gt(d):new cn(d);if(y.g!="")l&&(y.g=l+"."+y.g),Ss(y,y.s);else{var R=c.location;y=R.protocol,l=l?l+"."+R.hostname:R.hostname,R=+R.port;var C=new cn(null);y&&bs(C,y),l&&(C.g=l),R&&Ss(C,R),d&&(C.l=d),y=C}return d=o.D,l=o.ya,d&&l&&he(y,d,l),he(y,"VER",o.la),Pr(o,y),y}function Ol(o,l,d){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new fe(new xs({eb:d})):new fe(o.pa),l.Ha(o.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ml(){}n=Ml.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ns(){}Ns.prototype.g=function(o,l){return new Ke(o,l)};function Ke(o,l){Ve.call(this),this.g=new bl(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!M(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!M(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new Ln(this)}P(Ke,Ve),Ke.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ke.prototype.close=function(){No(this.g)},Ke.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=Io(o),o=d);l.i.push(new Lp(l.Ya++,o)),l.G==3&&Ds(l)},Ke.prototype.N=function(){this.g.l=null,delete this.j,No(this.g),delete this.g,Ke.aa.N.call(this)};function Ll(o){Ao.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const d in l){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}P(Ll,Ao);function Fl(){bo.call(this),this.status=1}P(Fl,bo);function Ln(o){this.g=o}P(Ln,Ml),Ln.prototype.ua=function(){Be(this.g,"a")},Ln.prototype.ta=function(o){Be(this.g,new Ll(o))},Ln.prototype.sa=function(o){Be(this.g,new Fl)},Ln.prototype.ra=function(){Be(this.g,"b")},Ns.prototype.createWebChannel=Ns.prototype.g,Ke.prototype.send=Ke.prototype.o,Ke.prototype.open=Ke.prototype.m,Ke.prototype.close=Ke.prototype.close,ld=function(){return new Ns},cd=function(){return ws()},ad=on,la={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Is.NO_ERROR=0,Is.TIMEOUT=8,Is.HTTP_ERROR=6,Qs=Is,el.COMPLETE="complete",od=el,Qc.EventType=vr,vr.OPEN="a",vr.CLOSE="b",vr.ERROR="c",vr.MESSAGE="d",Ve.prototype.listen=Ve.prototype.K,Vr=Qc,fe.prototype.listenOnce=fe.prototype.L,fe.prototype.getLastError=fe.prototype.Ka,fe.prototype.getLastErrorCode=fe.prototype.Ba,fe.prototype.getStatus=fe.prototype.Z,fe.prototype.getResponseJson=fe.prototype.Oa,fe.prototype.getResponseText=fe.prototype.oa,fe.prototype.send=fe.prototype.ea,fe.prototype.setWithCredentials=fe.prototype.Ha,id=fe}).apply(typeof Bs<"u"?Bs:typeof self<"u"?self:typeof window<"u"?window:{});const du="@firebase/firestore",fu="4.9.0";/**
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
 */class Le{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Le.UNAUTHENTICATED=new Le(null),Le.GOOGLE_CREDENTIALS=new Le("google-credentials-uid"),Le.FIRST_PARTY=new Le("first-party-uid"),Le.MOCK_USER=new Le("mock-user");/**
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
 */const Rn=new Ma("@firebase/firestore");function zn(){return Rn.logLevel}function U(n,...e){if(Rn.logLevel<=X.DEBUG){const t=e.map(ja);Rn.debug(`Firestore (${hr}): ${n}`,...t)}}function St(n,...e){if(Rn.logLevel<=X.ERROR){const t=e.map(ja);Rn.error(`Firestore (${hr}): ${n}`,...t)}}function er(n,...e){if(Rn.logLevel<=X.WARN){const t=e.map(ja);Rn.warn(`Firestore (${hr}): ${n}`,...t)}}function ja(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function H(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,ud(n,r,t)}function ud(n,e,t){let r=`FIRESTORE (${hr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw St(r),new Error(r)}function ae(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||ud(e,s,r)}function J(n,e){return n}/**
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
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends kt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Tt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class hd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class k_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Le.UNAUTHENTICATED))}shutdown(){}}class D_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class V_{constructor(e){this.t=e,this.currentUser=Le.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ae(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new Tt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Tt,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},c=u=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Tt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ae(typeof r.accessToken=="string",31837,{l:r}),new hd(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ae(e===null||typeof e=="string",2055,{h:e}),new Le(e)}}class N_{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Le.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class O_{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new N_(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Le.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class pu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class M_{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,tt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ae(this.o===void 0,3512);const r=i=>{i.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,U("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new pu(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ae(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new pu(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L_(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Ua{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=L_(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function Z(n,e){return n<e?-1:n>e?1:0}function ua(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return Wo(s)===Wo(i)?Z(s,i):Wo(s)?1:-1}return Z(n.length,e.length)}const F_=55296,j_=57343;function Wo(n){const e=n.charCodeAt(0);return e>=F_&&e<=j_}function tr(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */const mu="__name__";class at{constructor(e,t,r){t===void 0?t=0:t>e.length&&H(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&H(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return at.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof at?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=at.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return Z(e.length,t.length)}static compareSegments(e,t){const r=at.isNumericId(e),s=at.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?at.extractNumericId(e).compare(at.extractNumericId(t)):ua(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Wt.fromString(e.substring(4,e.length-2))}}class le extends at{construct(e,t,r){return new le(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new F(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new le(t)}static emptyPath(){return new le([])}}const U_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ke extends at{construct(e,t,r){return new ke(e,t,r)}static isValidIdentifier(e){return U_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ke.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===mu}static keyField(){return new ke([mu])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new F(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new F(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new F(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new F(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ke(t)}static emptyPath(){return new ke([])}}/**
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
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(le.fromString(e))}static fromName(e){return new W(le.fromString(e).popFirst(5))}static empty(){return new W(le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return le.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new le(e.slice()))}}/**
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
 */function dd(n,e,t){if(!t)throw new F(D.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function B_(n,e,t,r){if(e===!0&&r===!0)throw new F(D.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function gu(n){if(!W.isDocumentKey(n))throw new F(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function yu(n){if(W.isDocumentKey(n))throw new F(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function fd(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Li(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":H(12329,{type:typeof n})}function We(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new F(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Li(n);throw new F(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function $_(n,e){if(e<=0)throw new F(D.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */function Ee(n,e){const t={typeString:n};return e&&(t.value=e),t}function cs(n,e){if(!fd(n))throw new F(D.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new F(D.INVALID_ARGUMENT,t);return!0}/**
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
 */const _u=-62135596800,vu=1e6;class oe{static now(){return oe.fromMillis(Date.now())}static fromDate(e){return oe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*vu);return new oe(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new F(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new F(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<_u)throw new F(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/vu}_compareTo(e){return this.seconds===e.seconds?Z(this.nanoseconds,e.nanoseconds):Z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:oe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(cs(e,oe._jsonSchema))return new oe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-_u;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}oe._jsonSchemaVersion="firestore/timestamp/1.0",oe._jsonSchema={type:Ee("string",oe._jsonSchemaVersion),seconds:Ee("number"),nanoseconds:Ee("number")};/**
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
 */class Q{static fromTimestamp(e){return new Q(e)}static min(){return new Q(new oe(0,0))}static max(){return new Q(new oe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Jr=-1;function z_(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=Q.fromTimestamp(r===1e9?new oe(t+1,0):new oe(t,r));return new Qt(s,W.empty(),e)}function q_(n){return new Qt(n.readTime,n.key,Jr)}class Qt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Qt(Q.min(),W.empty(),Jr)}static max(){return new Qt(Q.max(),W.empty(),Jr)}}function W_(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=W.comparator(n.documentKey,e.documentKey),t!==0?t:Z(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class G_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function dr(n){if(n.code!==D.FAILED_PRECONDITION||n.message!==H_)throw n;U("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&H(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new V((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof V?t:V.resolve(t)}catch(t){return V.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):V.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):V.reject(t)}static resolve(e){return new V((t,r)=>{t(e)})}static reject(e){return new V((t,r)=>{r(e)})}static waitFor(e){return new V((t,r)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&t()},u=>r(u))}),a=!0,i===s&&t()})}static or(e){let t=V.resolve(!1);for(const r of e)t=t.next(s=>s?V.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new V((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let u=0;u<i;u++){const h=u;t(e[h]).next(f=>{a[h]=f,++c,c===i&&r(a)},f=>s(f))}})}static doWhile(e,t){return new V((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function K_(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function fr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Fi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Fi.ce=-1;/**
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
 */const Ba=-1;function ji(n){return n==null}function li(n){return n===0&&1/n==-1/0}function Q_(n){return typeof n=="number"&&Number.isInteger(n)&&!li(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const pd="";function J_(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Eu(e)),e=Y_(n.get(t),e);return Eu(e)}function Y_(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case pd:t+="";break;default:t+=i}}return t}function Eu(n){return n+pd+""}/**
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
 */function wu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function tn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function md(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class de{constructor(e,t){this.comparator=e,this.root=t||Pe.EMPTY}insert(e,t){return new de(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Pe.BLACK,null,null))}remove(e){return new de(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new $s(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new $s(this.root,e,this.comparator,!1)}getReverseIterator(){return new $s(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new $s(this.root,e,this.comparator,!0)}}class $s{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Pe{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Pe.RED,this.left=s??Pe.EMPTY,this.right=i??Pe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Pe(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Pe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Pe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Pe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Pe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw H(43730,{key:this.key,value:this.value});if(this.right.isRed())throw H(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw H(27949);return e+(this.isRed()?0:1)}}Pe.EMPTY=null,Pe.RED=!0,Pe.BLACK=!1;Pe.EMPTY=new class{constructor(){this.size=0}get key(){throw H(57766)}get value(){throw H(16141)}get color(){throw H(16727)}get left(){throw H(29726)}get right(){throw H(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Pe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Se{constructor(e){this.comparator=e,this.data=new de(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Iu(this.data.getIterator())}getIteratorFrom(e){return new Iu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Se)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Se(this.comparator);return t.data=e,t}}class Iu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.fields=e,e.sort(ke.comparator)}static empty(){return new Qe([])}unionWith(e){let t=new Se(ke.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Qe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return tr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class gd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new gd("Invalid base64 string: "+i):i}}(e);return new De(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new De(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}De.EMPTY_BYTE_STRING=new De("");const X_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jt(n){if(ae(!!n,39018),typeof n=="string"){let e=0;const t=X_.exec(n);if(ae(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:me(n.seconds),nanos:me(n.nanos)}}function me(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Yt(n){return typeof n=="string"?De.fromBase64String(n):De.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd="server_timestamp",_d="__type__",vd="__previous_value__",Ed="__local_write_time__";function $a(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[_d])==null?void 0:r.stringValue)===yd}function Ui(n){const e=n.mapValue.fields[vd];return $a(e)?Ui(e):e}function Yr(n){const e=Jt(n.mapValue.fields[Ed].timestampValue);return new oe(e.seconds,e.nanos)}/**
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
 */class Z_{constructor(e,t,r,s,i,a,c,u,h,f){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f}}const ui="(default)";class Xr{constructor(e,t){this.projectId=e,this.database=t||ui}static empty(){return new Xr("","")}get isDefaultDatabase(){return this.database===ui}isEqual(e){return e instanceof Xr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd="__type__",Id="__max__",zs={mapValue:{fields:{__type__:{stringValue:Id}}}},Td="__vector__",hi="value";function Xt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?$a(n)?4:tv(n)?9007199254740991:ev(n)?10:11:H(28295,{value:n})}function pt(n,e){if(n===e)return!0;const t=Xt(n);if(t!==Xt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Yr(n).isEqual(Yr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Jt(s.timestampValue),c=Jt(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Yt(s.bytesValue).isEqual(Yt(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return me(s.geoPointValue.latitude)===me(i.geoPointValue.latitude)&&me(s.geoPointValue.longitude)===me(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return me(s.integerValue)===me(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=me(s.doubleValue),c=me(i.doubleValue);return a===c?li(a)===li(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return tr(n.arrayValue.values||[],e.arrayValue.values||[],pt);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(wu(a)!==wu(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!pt(a[u],c[u])))return!1;return!0}(n,e);default:return H(52216,{left:n})}}function Zr(n,e){return(n.values||[]).find(t=>pt(t,e))!==void 0}function nr(n,e){if(n===e)return 0;const t=Xt(n),r=Xt(e);if(t!==r)return Z(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Z(n.booleanValue,e.booleanValue);case 2:return function(i,a){const c=me(i.integerValue||i.doubleValue),u=me(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(n,e);case 3:return Tu(n.timestampValue,e.timestampValue);case 4:return Tu(Yr(n),Yr(e));case 5:return ua(n.stringValue,e.stringValue);case 6:return function(i,a){const c=Yt(i),u=Yt(a);return c.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),u=a.split("/");for(let h=0;h<c.length&&h<u.length;h++){const f=Z(c[h],u[h]);if(f!==0)return f}return Z(c.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const c=Z(me(i.latitude),me(a.latitude));return c!==0?c:Z(me(i.longitude),me(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Au(n.arrayValue,e.arrayValue);case 10:return function(i,a){var _,b,P,x;const c=i.fields||{},u=a.fields||{},h=(_=c[hi])==null?void 0:_.arrayValue,f=(b=u[hi])==null?void 0:b.arrayValue,m=Z(((P=h==null?void 0:h.values)==null?void 0:P.length)||0,((x=f==null?void 0:f.values)==null?void 0:x.length)||0);return m!==0?m:Au(h,f)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===zs.mapValue&&a===zs.mapValue)return 0;if(i===zs.mapValue)return 1;if(a===zs.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),h=a.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const _=ua(u[m],f[m]);if(_!==0)return _;const b=nr(c[u[m]],h[f[m]]);if(b!==0)return b}return Z(u.length,f.length)}(n.mapValue,e.mapValue);default:throw H(23264,{he:t})}}function Tu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Z(n,e);const t=Jt(n),r=Jt(e),s=Z(t.seconds,r.seconds);return s!==0?s:Z(t.nanos,r.nanos)}function Au(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=nr(t[s],r[s]);if(i)return i}return Z(t.length,r.length)}function rr(n){return ha(n)}function ha(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Jt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Yt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return W.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=ha(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${ha(t.fields[a])}`;return s+"}"}(n.mapValue):H(61005,{value:n})}function Js(n){switch(Xt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ui(n);return e?16+Js(e):16;case 5:return 2*n.stringValue.length;case 6:return Yt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Js(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return tn(r.fields,(i,a)=>{s+=i.length+Js(a)}),s}(n.mapValue);default:throw H(13486,{value:n})}}function bu(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function da(n){return!!n&&"integerValue"in n}function za(n){return!!n&&"arrayValue"in n}function Su(n){return!!n&&"nullValue"in n}function Ru(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ys(n){return!!n&&"mapValue"in n}function ev(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[wd])==null?void 0:r.stringValue)===Td}function jr(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return tn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=jr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=jr(n.arrayValue.values[t]);return e}return{...n}}function tv(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Id}/**
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
 */class qe{constructor(e){this.value=e}static empty(){return new qe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Ys(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=jr(t)}setAll(e){let t=ke.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=jr(a):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Ys(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return pt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Ys(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){tn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new qe(jr(this.value))}}function Ad(n){const e=[];return tn(n.fields,(t,r)=>{const s=new ke([t]);if(Ys(r)){const i=Ad(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Qe(e)}/**
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
 */class Fe{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Fe(e,0,Q.min(),Q.min(),Q.min(),qe.empty(),0)}static newFoundDocument(e,t,r,s){return new Fe(e,1,t,Q.min(),r,s,0)}static newNoDocument(e,t){return new Fe(e,2,t,Q.min(),Q.min(),qe.empty(),0)}static newUnknownDocument(e,t){return new Fe(e,3,t,Q.min(),Q.min(),qe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=qe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=qe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Fe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Fe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class di{constructor(e,t){this.position=e,this.inclusive=t}}function xu(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=W.comparator(W.fromName(a.referenceValue),t.key):r=nr(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Cu(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!pt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class es{constructor(e,t="asc"){this.field=e,this.dir=t}}function nv(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class bd{}class ve extends bd{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new sv(e,t,r):t==="array-contains"?new av(e,r):t==="in"?new cv(e,r):t==="not-in"?new lv(e,r):t==="array-contains-any"?new uv(e,r):new ve(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new iv(e,r):new ov(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(nr(t,this.value)):t!==null&&Xt(this.value)===Xt(t)&&this.matchesComparison(nr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return H(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class st extends bd{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new st(e,t)}matches(e){return Sd(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Sd(n){return n.op==="and"}function Rd(n){return rv(n)&&Sd(n)}function rv(n){for(const e of n.filters)if(e instanceof st)return!1;return!0}function fa(n){if(n instanceof ve)return n.field.canonicalString()+n.op.toString()+rr(n.value);if(Rd(n))return n.filters.map(e=>fa(e)).join(",");{const e=n.filters.map(t=>fa(t)).join(",");return`${n.op}(${e})`}}function xd(n,e){return n instanceof ve?function(r,s){return s instanceof ve&&r.op===s.op&&r.field.isEqual(s.field)&&pt(r.value,s.value)}(n,e):n instanceof st?function(r,s){return s instanceof st&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&xd(a,s.filters[c]),!0):!1}(n,e):void H(19439)}function Cd(n){return n instanceof ve?function(t){return`${t.field.canonicalString()} ${t.op} ${rr(t.value)}`}(n):n instanceof st?function(t){return t.op.toString()+" {"+t.getFilters().map(Cd).join(" ,")+"}"}(n):"Filter"}class sv extends ve{constructor(e,t,r){super(e,t,r),this.key=W.fromName(r.referenceValue)}matches(e){const t=W.comparator(e.key,this.key);return this.matchesComparison(t)}}class iv extends ve{constructor(e,t){super(e,"in",t),this.keys=Pd("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class ov extends ve{constructor(e,t){super(e,"not-in",t),this.keys=Pd("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Pd(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(r=>W.fromName(r.referenceValue))}class av extends ve{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return za(t)&&Zr(t.arrayValue,this.value)}}class cv extends ve{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Zr(this.value.arrayValue,t)}}class lv extends ve{constructor(e,t){super(e,"not-in",t)}matches(e){if(Zr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Zr(this.value.arrayValue,t)}}class uv extends ve{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!za(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Zr(this.value.arrayValue,r))}}/**
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
 */class hv{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Te=null}}function Pu(n,e=null,t=[],r=[],s=null,i=null,a=null){return new hv(n,e,t,r,s,i,a)}function qa(n){const e=J(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>fa(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ji(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>rr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>rr(r)).join(",")),e.Te=t}return e.Te}function Wa(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!nv(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!xd(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Cu(n.startAt,e.startAt)&&Cu(n.endAt,e.endAt)}function pa(n){return W.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class pr{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function dv(n,e,t,r,s,i,a,c){return new pr(n,e,t,r,s,i,a,c)}function Bi(n){return new pr(n)}function ku(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function kd(n){return n.collectionGroup!==null}function Ur(n){const e=J(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Se(ke.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new es(i,r))}),t.has(ke.keyField().canonicalString())||e.Ie.push(new es(ke.keyField(),r))}return e.Ie}function lt(n){const e=J(n);return e.Ee||(e.Ee=fv(e,Ur(n))),e.Ee}function fv(n,e){if(n.limitType==="F")return Pu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new es(s.field,i)});const t=n.endAt?new di(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new di(n.startAt.position,n.startAt.inclusive):null;return Pu(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function ma(n,e){const t=n.filters.concat([e]);return new pr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function fi(n,e,t){return new pr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function $i(n,e){return Wa(lt(n),lt(e))&&n.limitType===e.limitType}function Dd(n){return`${qa(lt(n))}|lt:${n.limitType}`}function qn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Cd(s)).join(", ")}]`),ji(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>rr(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>rr(s)).join(",")),`Target(${r})`}(lt(n))}; limitType=${n.limitType})`}function zi(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):W.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Ur(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,c,u){const h=xu(a,c,u);return a.inclusive?h<=0:h<0}(r.startAt,Ur(r),s)||r.endAt&&!function(a,c,u){const h=xu(a,c,u);return a.inclusive?h>=0:h>0}(r.endAt,Ur(r),s))}(n,e)}function pv(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Vd(n){return(e,t)=>{let r=!1;for(const s of Ur(n)){const i=mv(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function mv(n,e,t){const r=n.field.isKeyField()?W.comparator(e.key,t.key):function(i,a,c){const u=a.data.field(i),h=c.data.field(i);return u!==null&&h!==null?nr(u,h):H(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return H(19790,{direction:n.dir})}}/**
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
 */class kn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){tn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return md(this.inner)}size(){return this.innerSize}}/**
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
 */const gv=new de(W.comparator);function Rt(){return gv}const Nd=new de(W.comparator);function Nr(...n){let e=Nd;for(const t of n)e=e.insert(t.key,t);return e}function Od(n){let e=Nd;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function yn(){return Br()}function Md(){return Br()}function Br(){return new kn(n=>n.toString(),(n,e)=>n.isEqual(e))}const yv=new de(W.comparator),_v=new Se(W.comparator);function ee(...n){let e=_v;for(const t of n)e=e.add(t);return e}const vv=new Se(Z);function Ev(){return vv}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:li(e)?"-0":e}}function Ld(n){return{integerValue:""+n}}function wv(n,e){return Q_(e)?Ld(e):Ha(n,e)}/**
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
 */class qi{constructor(){this._=void 0}}function Iv(n,e,t){return n instanceof ts?function(s,i){const a={fields:{[_d]:{stringValue:yd},[Ed]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&$a(i)&&(i=Ui(i)),i&&(a.fields[vd]=i),{mapValue:a}}(t,e):n instanceof ns?jd(n,e):n instanceof rs?Ud(n,e):function(s,i){const a=Fd(s,i),c=Du(a)+Du(s.Ae);return da(a)&&da(s.Ae)?Ld(c):Ha(s.serializer,c)}(n,e)}function Tv(n,e,t){return n instanceof ns?jd(n,e):n instanceof rs?Ud(n,e):t}function Fd(n,e){return n instanceof pi?function(r){return da(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ts extends qi{}class ns extends qi{constructor(e){super(),this.elements=e}}function jd(n,e){const t=Bd(e);for(const r of n.elements)t.some(s=>pt(s,r))||t.push(r);return{arrayValue:{values:t}}}class rs extends qi{constructor(e){super(),this.elements=e}}function Ud(n,e){let t=Bd(e);for(const r of n.elements)t=t.filter(s=>!pt(s,r));return{arrayValue:{values:t}}}class pi extends qi{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Du(n){return me(n.integerValue||n.doubleValue)}function Bd(n){return za(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Av{constructor(e,t){this.field=e,this.transform=t}}function bv(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof ns&&s instanceof ns||r instanceof rs&&s instanceof rs?tr(r.elements,s.elements,pt):r instanceof pi&&s instanceof pi?pt(r.Ae,s.Ae):r instanceof ts&&s instanceof ts}(n.transform,e.transform)}class Sv{constructor(e,t){this.version=e,this.transformResults=t}}class Xe{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Xe}static exists(e){return new Xe(void 0,e)}static updateTime(e){return new Xe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Xs(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Wi{}function $d(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ga(n.key,Xe.none()):new ls(n.key,n.data,Xe.none());{const t=n.data,r=qe.empty();let s=new Se(ke.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new nn(n.key,r,new Qe(s.toArray()),Xe.none())}}function Rv(n,e,t){n instanceof ls?function(s,i,a){const c=s.value.clone(),u=Nu(s.fieldTransforms,i,a.transformResults);c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof nn?function(s,i,a){if(!Xs(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=Nu(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(zd(s)),u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function $r(n,e,t,r){return n instanceof ls?function(i,a,c,u){if(!Xs(i.precondition,a))return c;const h=i.value.clone(),f=Ou(i.fieldTransforms,u,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof nn?function(i,a,c,u){if(!Xs(i.precondition,a))return c;const h=Ou(i.fieldTransforms,u,a),f=a.data;return f.setAll(zd(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(n,e,t,r):function(i,a,c){return Xs(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function xv(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Fd(r.transform,s||null);i!=null&&(t===null&&(t=qe.empty()),t.set(r.field,i))}return t||null}function Vu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&tr(r,s,(i,a)=>bv(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ls extends Wi{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class nn extends Wi{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function zd(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Nu(n,e,t){const r=new Map;ae(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,Tv(a,c,t[s]))}return r}function Ou(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,Iv(i,a,e))}return r}class Ga extends Wi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Cv extends Wi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Pv{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Rv(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=$r(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=$r(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Md();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const u=$d(a,c);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(Q.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ee())}isEqual(e){return this.batchId===e.batchId&&tr(this.mutations,e.mutations,(t,r)=>Vu(t,r))&&tr(this.baseMutations,e.baseMutations,(t,r)=>Vu(t,r))}}class Ka{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){ae(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return yv}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Ka(e,t,r,s)}}/**
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
 */class kv{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Dv{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ye,ne;function Vv(n){switch(n){case D.OK:return H(64938);case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0;default:return H(15467,{code:n})}}function qd(n){if(n===void 0)return St("GRPC error has no .code"),D.UNKNOWN;switch(n){case ye.OK:return D.OK;case ye.CANCELLED:return D.CANCELLED;case ye.UNKNOWN:return D.UNKNOWN;case ye.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case ye.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case ye.INTERNAL:return D.INTERNAL;case ye.UNAVAILABLE:return D.UNAVAILABLE;case ye.UNAUTHENTICATED:return D.UNAUTHENTICATED;case ye.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case ye.NOT_FOUND:return D.NOT_FOUND;case ye.ALREADY_EXISTS:return D.ALREADY_EXISTS;case ye.PERMISSION_DENIED:return D.PERMISSION_DENIED;case ye.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case ye.ABORTED:return D.ABORTED;case ye.OUT_OF_RANGE:return D.OUT_OF_RANGE;case ye.UNIMPLEMENTED:return D.UNIMPLEMENTED;case ye.DATA_LOSS:return D.DATA_LOSS;default:return H(39323,{code:n})}}(ne=ye||(ye={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Nv(){return new TextEncoder}/**
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
 */const Ov=new Wt([4294967295,4294967295],0);function Mu(n){const e=Nv().encode(n),t=new sd;return t.update(e),new Uint8Array(t.digest())}function Lu(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Wt([t,r],0),new Wt([s,i],0)]}class Qa{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Or(`Invalid padding: ${t}`);if(r<0)throw new Or(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Or(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Or(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Wt.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(Wt.fromNumber(r)));return s.compare(Ov)===1&&(s=new Wt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Mu(e),[r,s]=Lu(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Qa(i,s,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.ge===0)return;const t=Mu(e),[r,s]=Lu(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Or extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Hi{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,us.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Hi(Q.min(),s,new de(Z),Rt(),ee())}}class us{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new us(r,t,ee(),ee(),ee())}}/**
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
 */class Zs{constructor(e,t,r,s){this.be=e,this.removedTargetIds=t,this.key=r,this.De=s}}class Wd{constructor(e,t){this.targetId=e,this.Ce=t}}class Hd{constructor(e,t,r=De.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Fu{constructor(){this.ve=0,this.Fe=ju(),this.Me=De.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ee(),t=ee(),r=ee();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:H(38017,{changeType:i})}}),new us(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=ju()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,ae(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Mv{constructor(e){this.Ge=e,this.ze=new Map,this.je=Rt(),this.Je=qs(),this.He=qs(),this.Ye=new de(Z)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:H(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((r,s)=>{this.rt(s)&&t(s)})}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(pa(i))if(r===0){const a=new W(i.path);this.et(t,a,Fe.newNoDocument(a,Q.min()))}else ae(r===1,20013,{expectedCount:r});else{const a=this._t(t);if(a!==r){const c=this.ut(e),u=c?this.ct(c,e,a):1;if(u!==0){this.it(t);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,h)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=Yt(r).toUint8Array()}catch(u){if(u instanceof gd)return er("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new Qa(a,s,i)}catch(u){return er(u instanceof Or?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.ge===0?null:c}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Ge.ht(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(t,i,null),s++)}),s}Tt(e){const t=new Map;this.ze.forEach((i,a)=>{const c=this.ot(a);if(c){if(i.current&&pa(c.target)){const u=new W(c.target.path);this.It(u).has(a)||this.Et(a,u)||this.et(a,u,Fe.newNoDocument(u,e))}i.Be&&(t.set(a,i.ke()),i.qe())}});let r=ee();this.He.forEach((i,a)=>{let c=!0;a.forEachWhile(u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.je.forEach((i,a)=>a.setReadTime(e));const s=new Hi(e,t,this.Ye,this.je,r);return this.je=Rt(),this.Je=qs(),this.He=qs(),this.Ye=new de(Z),s}Xe(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.Qe(t,1):s.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Fu,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Se(Z),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Se(Z),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||U("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Fu),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function qs(){return new de(W.comparator)}function ju(){return new de(W.comparator)}const Lv=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Fv=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),jv=(()=>({and:"AND",or:"OR"}))();class Uv{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ga(n,e){return n.useProto3Json||ji(e)?e:{value:e}}function mi(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Gd(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Bv(n,e){return mi(n,e.toTimestamp())}function ut(n){return ae(!!n,49232),Q.fromTimestamp(function(t){const r=Jt(t);return new oe(r.seconds,r.nanos)}(n))}function Ja(n,e){return ya(n,e).canonicalString()}function ya(n,e){const t=function(s){return new le(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Kd(n){const e=le.fromString(n);return ae(Zd(e),10190,{key:e.toString()}),e}function _a(n,e){return Ja(n.databaseId,e.path)}function Ho(n,e){const t=Kd(e);if(t.get(1)!==n.databaseId.projectId)throw new F(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new F(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new W(Jd(t))}function Qd(n,e){return Ja(n.databaseId,e)}function $v(n){const e=Kd(n);return e.length===4?le.emptyPath():Jd(e)}function va(n){return new le(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Jd(n){return ae(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Uu(n,e,t){return{name:_a(n,e),fields:t.value.mapValue.fields}}function zv(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:H(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(ae(f===void 0||typeof f=="string",58123),De.fromBase64String(f||"")):(ae(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),De.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(h){const f=h.code===void 0?D.UNKNOWN:qd(h.code);return new F(f,h.message||"")}(a);t=new Hd(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ho(n,r.document.name),i=ut(r.document.updateTime),a=r.document.createTime?ut(r.document.createTime):Q.min(),c=new qe({mapValue:{fields:r.document.fields}}),u=Fe.newFoundDocument(s,i,a,c),h=r.targetIds||[],f=r.removedTargetIds||[];t=new Zs(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ho(n,r.document),i=r.readTime?ut(r.readTime):Q.min(),a=Fe.newNoDocument(s,i),c=r.removedTargetIds||[];t=new Zs([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ho(n,r.document),i=r.removedTargetIds||[];t=new Zs([],i,s,null)}else{if(!("filter"in e))return H(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new Dv(s,i),c=r.targetId;t=new Wd(c,a)}}return t}function qv(n,e){let t;if(e instanceof ls)t={update:Uu(n,e.key,e.value)};else if(e instanceof Ga)t={delete:_a(n,e.key)};else if(e instanceof nn)t={update:Uu(n,e.key,e.data),updateMask:Zv(e.fieldMask)};else{if(!(e instanceof Cv))return H(16599,{Vt:e.type});t={verify:_a(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const c=a.transform;if(c instanceof ts)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof ns)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof rs)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof pi)return{fieldPath:a.field.canonicalString(),increment:c.Ae};throw H(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Bv(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:H(27497)}(n,e.precondition)),t}function Wv(n,e){return n&&n.length>0?(ae(e!==void 0,14353),n.map(t=>function(s,i){let a=s.updateTime?ut(s.updateTime):ut(i);return a.isEqual(Q.min())&&(a=ut(i)),new Sv(a,s.transformResults||[])}(t,e))):[]}function Hv(n,e){return{documents:[Qd(n,e.path)]}}function Gv(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Qd(n,s);const i=function(h){if(h.length!==0)return Xd(st.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(f=>function(_){return{field:Wn(_.field),direction:Jv(_.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=ga(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:t,parent:s}}function Kv(n){let e=$v(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){ae(r===1,65062);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(m){const _=Yd(m);return _ instanceof st&&Rd(_)?_.getFilters():[_]}(t.where));let a=[];t.orderBy&&(a=function(m){return m.map(_=>function(P){return new es(Hn(P.field),function(A){switch(A){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(_))}(t.orderBy));let c=null;t.limit&&(c=function(m){let _;return _=typeof m=="object"?m.value:m,ji(_)?null:_}(t.limit));let u=null;t.startAt&&(u=function(m){const _=!!m.before,b=m.values||[];return new di(b,_)}(t.startAt));let h=null;return t.endAt&&(h=function(m){const _=!m.before,b=m.values||[];return new di(b,_)}(t.endAt)),dv(e,s,a,i,c,"F",u,h)}function Qv(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return H(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Yd(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Hn(t.unaryFilter.field);return ve.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Hn(t.unaryFilter.field);return ve.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Hn(t.unaryFilter.field);return ve.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Hn(t.unaryFilter.field);return ve.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return H(61313);default:return H(60726)}}(n):n.fieldFilter!==void 0?function(t){return ve.create(Hn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return H(58110);default:return H(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return st.create(t.compositeFilter.filters.map(r=>Yd(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return H(1026)}}(t.compositeFilter.op))}(n):H(30097,{filter:n})}function Jv(n){return Lv[n]}function Yv(n){return Fv[n]}function Xv(n){return jv[n]}function Wn(n){return{fieldPath:n.canonicalString()}}function Hn(n){return ke.fromServerFormat(n.fieldPath)}function Xd(n){return n instanceof ve?function(t){if(t.op==="=="){if(Ru(t.value))return{unaryFilter:{field:Wn(t.field),op:"IS_NAN"}};if(Su(t.value))return{unaryFilter:{field:Wn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ru(t.value))return{unaryFilter:{field:Wn(t.field),op:"IS_NOT_NAN"}};if(Su(t.value))return{unaryFilter:{field:Wn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Wn(t.field),op:Yv(t.op),value:t.value}}}(n):n instanceof st?function(t){const r=t.getFilters().map(s=>Xd(s));return r.length===1?r[0]:{compositeFilter:{op:Xv(t.op),filters:r}}}(n):H(54877,{filter:n})}function Zv(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Zd(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Bt{constructor(e,t,r,s,i=Q.min(),a=Q.min(),c=De.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new Bt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Bt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Bt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Bt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class eE{constructor(e){this.yt=e}}function tE(n){const e=Kv({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?fi(e,e.limit,"L"):e}/**
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
 */class nE{constructor(){this.Cn=new rE}addToCollectionParentIndex(e,t){return this.Cn.add(t),V.resolve()}getCollectionParents(e,t){return V.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return V.resolve()}deleteFieldIndex(e,t){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,t){return V.resolve()}getDocumentsMatchingTarget(e,t){return V.resolve(null)}getIndexType(e,t){return V.resolve(0)}getFieldIndexes(e,t){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,t){return V.resolve(Qt.min())}getMinOffsetFromCollectionGroup(e,t){return V.resolve(Qt.min())}updateCollectionGroup(e,t,r){return V.resolve()}updateIndexEntries(e,t){return V.resolve()}}class rE{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Se(le.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Se(le.comparator)).toArray()}}/**
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
 */const Bu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ef=41943040;class ze{static withCacheSize(e){return new ze(e,ze.DEFAULT_COLLECTION_PERCENTILE,ze.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */ze.DEFAULT_COLLECTION_PERCENTILE=10,ze.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ze.DEFAULT=new ze(ef,ze.DEFAULT_COLLECTION_PERCENTILE,ze.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ze.DISABLED=new ze(-1,0,0);/**
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
 */const $u="LruGarbageCollector",sE=1048576;function zu([n,e],[t,r]){const s=Z(n,t);return s===0?Z(e,r):s}class iE{constructor(e){this.Ir=e,this.buffer=new Se(zu),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();zu(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class oE{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){U($u,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){fr(t)?U($u,"Ignoring IndexedDB error during garbage collection: ",t):await dr(t)}await this.Vr(3e5)})}}class aE{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return V.resolve(Fi.ce);const r=new iE(t);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(U("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(Bu)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(U("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Bu):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,s,i,a,c,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(U("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,a=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(r=m,c=Date.now(),this.removeTargets(e,r,t))).next(m=>(i=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(h=Date.now(),zn()<=X.DEBUG&&U("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(u-c)+`ms
	Removed ${m} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m})))}}function cE(n,e){return new aE(n,e)}/**
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
 */class lE{constructor(){this.changes=new kn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Fe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?V.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class uE{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class hE{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&$r(r.mutation,s,Qe.empty(),oe.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,ee()).next(()=>r))}getLocalViewOfDocuments(e,t,r=ee()){const s=yn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=Nr();return i.forEach((c,u)=>{a=a.insert(c,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=yn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ee()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,s){let i=Rt();const a=Br(),c=function(){return Br()}();return t.forEach((u,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof nn)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),$r(f.mutation,h,f.mutation.getFieldMask(),oe.now())):a.set(h.key,Qe.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((h,f)=>a.set(h,f)),t.forEach((h,f)=>c.set(h,new uE(f,a.get(h)??null))),c))}recalculateAndSaveOverlays(e,t){const r=Br();let s=new de((a,c)=>a-c),i=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(u=>{const h=t.get(u);if(h===null)return;let f=r.get(u)||Qe.empty();f=c.applyToLocalView(h,f),r.set(u,f);const m=(s.get(c.batchId)||ee()).add(u);s=s.insert(c.batchId,m)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),h=u.key,f=u.value,m=Md();f.forEach(_=>{if(!i.has(_)){const b=$d(t.get(_),r.get(_));b!==null&&m.set(_,b),i=i.add(_)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,m))}return V.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return W.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):kd(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):V.resolve(yn());let c=Jr,u=i;return a.next(h=>V.forEach(h,(f,m)=>(c<m.largestBatchId&&(c=m.largestBatchId),i.get(f)?V.resolve():this.remoteDocumentCache.getEntry(e,f).next(_=>{u=u.insert(f,_)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,u,h,ee())).next(f=>({batchId:c,changes:Od(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new W(t)).next(r=>{let s=Nr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Nr();return this.indexManager.getCollectionParents(e,i).next(c=>V.forEach(c,u=>{const h=function(m,_){return new pr(_,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((m,_)=>{a=a.insert(m,_)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((u,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,Fe.newInvalidDocument(f)))});let c=Nr();return a.forEach((u,h)=>{const f=i.get(u);f!==void 0&&$r(f.mutation,h,Qe.empty(),oe.now()),zi(t,h)&&(c=c.insert(u,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return V.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:ut(s.createTime)}}(t)),V.resolve()}getNamedQuery(e,t){return V.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(s){return{name:s.name,query:tE(s.bundledQuery),readTime:ut(s.readTime)}}(t)),V.resolve()}}/**
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
 */class fE{constructor(){this.overlays=new de(W.comparator),this.qr=new Map}getOverlay(e,t){return V.resolve(this.overlays.get(t))}getOverlays(e,t){const r=yn();return V.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.St(e,t,i)}),V.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),V.resolve()}getOverlaysForCollection(e,t,r){const s=yn(),i=t.length+1,a=new W(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return V.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new de((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=yn(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=yn(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=s)););return V.resolve(c)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new kv(t,r));let i=this.qr.get(t);i===void 0&&(i=ee(),this.qr.set(t,i)),this.qr.set(t,i.add(r.key))}}/**
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
 */class pE{constructor(){this.sessionToken=De.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,V.resolve()}}/**
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
 */class Ya{constructor(){this.Qr=new Se(Re.$r),this.Ur=new Se(Re.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new Re(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Gr(new Re(e,t))}zr(e,t){e.forEach(r=>this.removeReference(r,t))}jr(e){const t=new W(new le([])),r=new Re(t,e),s=new Re(t,e+1),i=[];return this.Ur.forEachInRange([r,s],a=>{this.Gr(a),i.push(a.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new W(new le([])),r=new Re(t,e),s=new Re(t,e+1);let i=ee();return this.Ur.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new Re(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Re{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return W.comparator(e.key,t.key)||Z(e.Yr,t.Yr)}static Kr(e,t){return Z(e.Yr,t.Yr)||W.comparator(e.key,t.key)}}/**
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
 */class mE{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Se(Re.$r)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Pv(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.Zr=this.Zr.add(new Re(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return V.resolve(a)}lookupMutationBatch(e,t){return V.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.ei(r),i=s<0?0:s;return V.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?Ba:this.tr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Re(t,0),s=new Re(t,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],a=>{const c=this.Xr(a.Yr);i.push(c)}),V.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Se(Z);return t.forEach(s=>{const i=new Re(s,0),a=new Re(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],c=>{r=r.add(c.Yr)})}),V.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;W.isDocumentKey(i)||(i=i.child(""));const a=new Re(new W(i),0);let c=new Se(Z);return this.Zr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(u.Yr)),!0)},a),V.resolve(this.ti(c))}ti(e){const t=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){ae(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return V.forEach(t.mutations,s=>{const i=new Re(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,t){const r=new Re(t,0),s=this.Zr.firstAfterOrEqual(r);return V.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class gE{constructor(e){this.ri=e,this.docs=function(){return new de(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return V.resolve(r?r.document.mutableCopy():Fe.newInvalidDocument(t))}getEntries(e,t){let r=Rt();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Fe.newInvalidDocument(s))}),V.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Rt();const a=t.path,c=new W(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||W_(q_(f),r)<=0||(s.has(f.key)||zi(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return V.resolve(i)}getAllFromCollectionGroup(e,t,r,s){H(9500)}ii(e,t){return V.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new yE(this)}getSize(e){return V.resolve(this.size)}}class yE extends lE{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),V.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class _E{constructor(e){this.persistence=e,this.si=new kn(t=>qa(t),Wa),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.oi=0,this._i=new Ya,this.targetCount=0,this.ai=sr.ur()}forEachTarget(e,t){return this.si.forEach((r,s)=>t(s)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),V.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new sr(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,V.resolve()}updateTargetData(e,t){return this.Pr(t),V.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.si.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),V.waitFor(i).next(()=>s)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return V.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),V.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),V.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),V.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return V.resolve(r)}containsKey(e,t){return V.resolve(this._i.containsKey(t))}}/**
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
 */class tf{constructor(e,t){this.ui={},this.overlays={},this.ci=new Fi(0),this.li=!1,this.li=!0,this.hi=new pE,this.referenceDelegate=e(this),this.Pi=new _E(this),this.indexManager=new nE,this.remoteDocumentCache=function(s){return new gE(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new eE(t),this.Ii=new dE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new fE,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new mE(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){U("MemoryPersistence","Starting transaction:",e);const s=new vE(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,t){return V.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,t)))}}class vE extends G_{constructor(e){super(),this.currentSequenceNumber=e}}class Xa{constructor(e){this.persistence=e,this.Ri=new Ya,this.Vi=null}static mi(e){return new Xa(e)}get fi(){if(this.Vi)return this.Vi;throw H(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),V.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),V.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.fi,r=>{const s=W.fromPath(r);return this.gi(e,s).next(i=>{i||t.removeEntry(s,Q.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return V.or([()=>V.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class gi{constructor(e,t){this.persistence=e,this.pi=new kn(r=>J_(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=cE(this,t)}static mi(e,t){return new gi(e,t)}Ei(){}di(e){return V.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}wr(e){let t=0;return this.pr(e,r=>{t++}).next(()=>t)}pr(e,t){return V.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?V.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,a=>this.br(e,a,t).next(c=>{c||(r++,i.removeEntry(a,Q.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),V.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),V.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),V.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),V.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Js(e.data.value)),t}br(e,t,r){return V.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.pi.get(t);return V.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Za{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=s}static As(e,t){let r=ee(),s=ee();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Za(e,t.fromCache,r,s)}}/**
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
 */class EE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class wE{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return hy()?8:K_(Ue())>0?6:4}()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ys(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ws(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new EE;return this.Ss(e,t,a).next(c=>{if(i.result=c,this.Vs)return this.bs(e,t,a,c.size)})}).next(()=>i.result)}bs(e,t,r,s){return r.documentReadCount<this.fs?(zn()<=X.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",qn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),V.resolve()):(zn()<=X.DEBUG&&U("QueryEngine","Query:",qn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(zn()<=X.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",qn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,lt(t))):V.resolve())}ys(e,t){if(ku(t))return V.resolve(null);let r=lt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=fi(t,null,"F"),r=lt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=ee(...i);return this.ps.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.Ds(t,c);return this.Cs(t,h,a,u.readTime)?this.ys(e,fi(t,null,"F")):this.vs(e,h,t,u)}))})))}ws(e,t,r,s){return ku(t)||s.isEqual(Q.min())?V.resolve(null):this.ps.getDocuments(e,r).next(i=>{const a=this.Ds(t,i);return this.Cs(t,a,r,s)?V.resolve(null):(zn()<=X.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),qn(t)),this.vs(e,a,t,z_(s,Jr)).next(c=>c))})}Ds(e,t){let r=new Se(Vd(e));return t.forEach((s,i)=>{zi(e,i)&&(r=r.add(i))}),r}Cs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,t,r){return zn()<=X.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",qn(t)),this.ps.getDocumentsMatchingQuery(e,t,Qt.min(),r)}vs(e,t,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec="LocalStore",IE=3e8;class TE{constructor(e,t,r,s){this.persistence=e,this.Fs=t,this.serializer=s,this.Ms=new de(Z),this.xs=new kn(i=>qa(i),Wa),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new hE(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function AE(n,e,t,r){return new TE(n,e,t,r)}async function nf(n,e){const t=J(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Bs(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let u=ee();for(const h of s){a.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(r,u).next(h=>({Ls:h,removedBatchIds:a,addedBatchIds:c}))})})}function bE(n,e){const t=J(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.Ns.newChangeBuffer({trackRemovals:!0});return function(c,u,h,f){const m=h.batch,_=m.keys();let b=V.resolve();return _.forEach(P=>{b=b.next(()=>f.getEntry(u,P)).next(x=>{const A=h.docVersions.get(P);ae(A!==null,48541),x.version.compareTo(A)<0&&(m.applyToRemoteDocument(x,h),x.isValidDocument()&&(x.setReadTime(h.commitVersion),f.addEntry(x)))})}),b.next(()=>c.mutationQueue.removeMutationBatch(u,m))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=ee();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(u=u.add(c.batch.mutations[h].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function rf(n){const e=J(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Pi.getLastRemoteSnapshotVersion(t))}function SE(n,e){const t=J(n),r=e.snapshotVersion;let s=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.Ns.newChangeBuffer({trackRemovals:!0});s=t.Ms;const c=[];e.targetChanges.forEach((f,m)=>{const _=s.get(m);if(!_)return;c.push(t.Pi.removeMatchingKeys(i,f.removedDocuments,m).next(()=>t.Pi.addMatchingKeys(i,f.addedDocuments,m)));let b=_.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?b=b.withResumeToken(De.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):f.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(f.resumeToken,r)),s=s.insert(m,b),function(x,A,O){return x.resumeToken.approximateByteSize()===0||A.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=IE?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(_,b,f)&&c.push(t.Pi.updateTargetData(i,b))});let u=Rt(),h=ee();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(RE(i,a,e.documentUpdates).next(f=>{u=f.ks,h=f.qs})),!r.isEqual(Q.min())){const f=t.Pi.getLastRemoteSnapshotVersion(i).next(m=>t.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return V.waitFor(c).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(t.Ms=s,i))}function RE(n,e,t){let r=ee(),s=ee();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=Rt();return t.forEach((c,u)=>{const h=i.get(c);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual(Q.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):U(ec,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",u.version)}),{ks:a,qs:s}})}function xE(n,e){const t=J(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Ba),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function CE(n,e){const t=J(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Pi.getTargetData(r,e).next(i=>i?(s=i,V.resolve(s)):t.Pi.allocateTargetId(r).next(a=>(s=new Bt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.xs.set(e,r.targetId)),r})}async function Ea(n,e,t){const r=J(n),s=r.Ms.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!fr(a))throw a;U(ec,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function qu(n,e,t){const r=J(n);let s=Q.min(),i=ee();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,h,f){const m=J(u),_=m.xs.get(f);return _!==void 0?V.resolve(m.Ms.get(_)):m.Pi.getTargetData(h,f)}(r,a,lt(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,c.targetId).next(u=>{i=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(a,e,t?s:Q.min(),t?i:ee())).next(c=>(PE(r,pv(e),c),{documents:c,Qs:i})))}function PE(n,e,t){let r=n.Os.get(e)||Q.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Os.set(e,r)}class Wu{constructor(){this.activeTargetIds=Ev()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class kE{constructor(){this.Mo=new Wu,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Wu,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class DE{Oo(e){}shutdown(){}}/**
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
 */const Hu="ConnectivityMonitor";class Gu{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){U(Hu,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){U(Hu,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ws=null;function wa(){return Ws===null?Ws=function(){return 268435456+Math.round(2147483648*Math.random())}():Ws++,"0x"+Ws.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Go="RestConnection",VE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class NE{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===ui?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,t,r,s,i){const a=wa(),c=this.zo(e,t.toUriEncodedString());U(Go,`Sending RPC '${e}' ${a}:`,c,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,s,i);const{host:h}=new URL(c),f=lr(h);return this.Jo(e,c,u,r,f).then(m=>(U(Go,`Received RPC '${e}' ${a}: `,m),m),m=>{throw er(Go,`RPC '${e}' ${a} failed with error: `,m,"url: ",c,"request:",r),m})}Ho(e,t,r,s,i,a){return this.Go(e,t,r,s,i)}jo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+hr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,t){const r=VE[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
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
 */class OE{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const Me="WebChannelConnection";class ME extends NE{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,s,i){const a=wa();return new Promise((c,u)=>{const h=new id;h.setWithCredentials(!0),h.listenOnce(od.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Qs.NO_ERROR:const m=h.getResponseJson();U(Me,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(m)),c(m);break;case Qs.TIMEOUT:U(Me,`RPC '${e}' ${a} timed out`),u(new F(D.DEADLINE_EXCEEDED,"Request time out"));break;case Qs.HTTP_ERROR:const _=h.getStatus();if(U(Me,`RPC '${e}' ${a} failed with status:`,_,"response text:",h.getResponseText()),_>0){let b=h.getResponseJson();Array.isArray(b)&&(b=b[0]);const P=b==null?void 0:b.error;if(P&&P.status&&P.message){const x=function(O){const M=O.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(M)>=0?M:D.UNKNOWN}(P.status);u(new F(x,P.message))}else u(new F(D.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new F(D.UNAVAILABLE,"Connection failed."));break;default:H(9055,{l_:e,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{U(Me,`RPC '${e}' ${a} completed.`)}});const f=JSON.stringify(s);U(Me,`RPC '${e}' ${a} sending request:`,s),h.send(t,"POST",f,r,15)})}T_(e,t,r){const s=wa(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=ld(),c=cd(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const f=i.join("");U(Me,`Creating RPC '${e}' stream ${s}: ${f}`,u);const m=a.createWebChannel(f,u);this.I_(m);let _=!1,b=!1;const P=new OE({Yo:A=>{b?U(Me,`Not sending because RPC '${e}' stream ${s} is closed:`,A):(_||(U(Me,`Opening RPC '${e}' stream ${s} transport.`),m.open(),_=!0),U(Me,`RPC '${e}' stream ${s} sending:`,A),m.send(A))},Zo:()=>m.close()}),x=(A,O,M)=>{A.listen(O,j=>{try{M(j)}catch(z){setTimeout(()=>{throw z},0)}})};return x(m,Vr.EventType.OPEN,()=>{b||(U(Me,`RPC '${e}' stream ${s} transport opened.`),P.o_())}),x(m,Vr.EventType.CLOSE,()=>{b||(b=!0,U(Me,`RPC '${e}' stream ${s} transport closed`),P.a_(),this.E_(m))}),x(m,Vr.EventType.ERROR,A=>{b||(b=!0,er(Me,`RPC '${e}' stream ${s} transport errored. Name:`,A.name,"Message:",A.message),P.a_(new F(D.UNAVAILABLE,"The operation could not be completed")))}),x(m,Vr.EventType.MESSAGE,A=>{var O;if(!b){const M=A.data[0];ae(!!M,16349);const j=M,z=(j==null?void 0:j.error)||((O=j[0])==null?void 0:O.error);if(z){U(Me,`RPC '${e}' stream ${s} received error:`,z);const te=z.status;let ie=function(E){const T=ye[E];if(T!==void 0)return qd(T)}(te),S=z.message;ie===void 0&&(ie=D.INTERNAL,S="Unknown error status: "+te+" with message "+z.message),b=!0,P.a_(new F(ie,S)),m.close()}else U(Me,`RPC '${e}' stream ${s} received:`,M),P.u_(M)}}),x(c,ad.STAT_EVENT,A=>{A.stat===la.PROXY?U(Me,`RPC '${e}' stream ${s} detected buffering proxy`):A.stat===la.NOPROXY&&U(Me,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.__()},0),P}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}function Ko(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(n){return new Uv(n,!0)}/**
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
 */class sf{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&U("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Ku="PersistentStream";class of{constructor(e,t,r,s,i,a,c,u){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new sf(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===D.RESOURCE_EXHAUSTED?(St(t.toString()),St("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===t&&this.G_(r,s)},r=>{e(()=>{const s=new F(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return U(Ku,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(U(Ku,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class LE extends of{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=zv(this.serializer,e),r=function(i){if(!("targetChange"in i))return Q.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?Q.min():a.readTime?ut(a.readTime):Q.min()}(e);return this.listener.H_(t,r)}Y_(e){const t={};t.database=va(this.serializer),t.addTarget=function(i,a){let c;const u=a.target;if(c=pa(u)?{documents:Hv(i,u)}:{query:Gv(i,u).ft},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Gd(i,a.resumeToken);const h=ga(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(Q.min())>0){c.readTime=mi(i,a.snapshotVersion.toTimestamp());const h=ga(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=Qv(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){const t={};t.database=va(this.serializer),t.removeTarget=e,this.q_(t)}}class FE extends of{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return ae(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ae(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ae(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=Wv(e.writeResults,e.commitTime),r=ut(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=va(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>qv(this.serializer,r))};this.q_(t)}}/**
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
 */class jE{}class UE extends jE{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new F(D.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Go(e,ya(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new F(D.UNKNOWN,i.toString())})}Ho(e,t,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Ho(e,ya(t,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new F(D.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class BE{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(St(t),this.aa=!1):U("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const xn="RemoteStore";class $E{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(a=>{r.enqueueAndForget(async()=>{Dn(this)&&(U(xn,"Restarting streams for network reachability change."),await async function(u){const h=J(u);h.Ea.add(4),await hs(h),h.Ra.set("Unknown"),h.Ea.delete(4),await Ki(h)}(this))})}),this.Ra=new BE(r,s)}}async function Ki(n){if(Dn(n))for(const e of n.da)await e(!0)}async function hs(n){for(const e of n.da)await e(!1)}function af(n,e){const t=J(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),sc(t)?rc(t):mr(t).O_()&&nc(t,e))}function tc(n,e){const t=J(n),r=mr(t);t.Ia.delete(e),r.O_()&&cf(t,e),t.Ia.size===0&&(r.O_()?r.L_():Dn(t)&&t.Ra.set("Unknown"))}function nc(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}mr(n).Y_(e)}function cf(n,e){n.Va.Ue(e),mr(n).Z_(e)}function rc(n){n.Va=new Mv({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),mr(n).start(),n.Ra.ua()}function sc(n){return Dn(n)&&!mr(n).x_()&&n.Ia.size>0}function Dn(n){return J(n).Ea.size===0}function lf(n){n.Va=void 0}async function zE(n){n.Ra.set("Online")}async function qE(n){n.Ia.forEach((e,t)=>{nc(n,e)})}async function WE(n,e){lf(n),sc(n)?(n.Ra.ha(e),rc(n)):n.Ra.set("Unknown")}async function HE(n,e,t){if(n.Ra.set("Online"),e instanceof Hd&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ia.delete(c),s.Va.removeTarget(c))}(n,e)}catch(r){U(xn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await yi(n,r)}else if(e instanceof Zs?n.Va.Ze(e):e instanceof Wd?n.Va.st(e):n.Va.tt(e),!t.isEqual(Q.min()))try{const r=await rf(n.localStore);t.compareTo(r)>=0&&await function(i,a){const c=i.Va.Tt(a);return c.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.Ia.get(h);f&&i.Ia.set(h,f.withResumeToken(u.resumeToken,a))}}),c.targetMismatches.forEach((u,h)=>{const f=i.Ia.get(u);if(!f)return;i.Ia.set(u,f.withResumeToken(De.EMPTY_BYTE_STRING,f.snapshotVersion)),cf(i,u);const m=new Bt(f.target,u,h,f.sequenceNumber);nc(i,m)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){U(xn,"Failed to raise snapshot:",r),await yi(n,r)}}async function yi(n,e,t){if(!fr(e))throw e;n.Ea.add(1),await hs(n),n.Ra.set("Offline"),t||(t=()=>rf(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{U(xn,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Ki(n)})}function uf(n,e){return e().catch(t=>yi(n,t,e))}async function Qi(n){const e=J(n),t=Zt(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Ba;for(;GE(e);)try{const s=await xE(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,KE(e,s)}catch(s){await yi(e,s)}hf(e)&&df(e)}function GE(n){return Dn(n)&&n.Ta.length<10}function KE(n,e){n.Ta.push(e);const t=Zt(n);t.O_()&&t.X_&&t.ea(e.mutations)}function hf(n){return Dn(n)&&!Zt(n).x_()&&n.Ta.length>0}function df(n){Zt(n).start()}async function QE(n){Zt(n).ra()}async function JE(n){const e=Zt(n);for(const t of n.Ta)e.ea(t.mutations)}async function YE(n,e,t){const r=n.Ta.shift(),s=Ka.from(r,e,t);await uf(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Qi(n)}async function XE(n,e){e&&Zt(n).X_&&await async function(r,s){if(function(a){return Vv(a)&&a!==D.ABORTED}(s.code)){const i=r.Ta.shift();Zt(r).B_(),await uf(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Qi(r)}}(n,e),hf(n)&&df(n)}async function Qu(n,e){const t=J(n);t.asyncQueue.verifyOperationInProgress(),U(xn,"RemoteStore received new credentials");const r=Dn(t);t.Ea.add(3),await hs(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Ki(t)}async function ZE(n,e){const t=J(n);e?(t.Ea.delete(2),await Ki(t)):e||(t.Ea.add(2),await hs(t),t.Ra.set("Unknown"))}function mr(n){return n.ma||(n.ma=function(t,r,s){const i=J(t);return i.sa(),new LE(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Xo:zE.bind(null,n),t_:qE.bind(null,n),r_:WE.bind(null,n),H_:HE.bind(null,n)}),n.da.push(async e=>{e?(n.ma.B_(),sc(n)?rc(n):n.Ra.set("Unknown")):(await n.ma.stop(),lf(n))})),n.ma}function Zt(n){return n.fa||(n.fa=function(t,r,s){const i=J(t);return i.sa(),new FE(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:QE.bind(null,n),r_:XE.bind(null,n),ta:JE.bind(null,n),na:YE.bind(null,n)}),n.da.push(async e=>{e?(n.fa.B_(),await Qi(n)):(await n.fa.stop(),n.Ta.length>0&&(U(xn,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
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
 */class ic{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Tt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new ic(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function oc(n,e){if(St("AsyncQueue",`${e}: ${n}`),fr(n))return new F(D.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Gn{static emptySet(e){return new Gn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||W.comparator(t.key,r.key):(t,r)=>W.comparator(t.key,r.key),this.keyedMap=Nr(),this.sortedSet=new de(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Gn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Ju{constructor(){this.ga=new de(W.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):H(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,r)=>{e.push(r)}),e}}class ir{constructor(e,t,r,s,i,a,c,u,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new ir(e,t,Gn.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$i(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class ew{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class tw{constructor(){this.queries=Yu(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const s=J(t),i=s.queries;s.queries=Yu(),i.forEach((a,c)=>{for(const u of c.Sa)u.onError(r)})})(this,new F(D.ABORTED,"Firestore shutting down"))}}function Yu(){return new kn(n=>Dd(n),$i)}async function ac(n,e){const t=J(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new ew,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await t.onListen(s,!0);break;case 1:i.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=oc(a,`Initialization of query '${qn(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&lc(t)}async function cc(n,e){const t=J(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.Sa.indexOf(e);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function nw(n,e){const t=J(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.Sa)c.Fa(s)&&(r=!0);a.wa=s}}r&&lc(t)}function rw(n,e,t){const r=J(n),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(t);r.queries.delete(e)}function lc(n){n.Ca.forEach(e=>{e.next()})}var Ia,Xu;(Xu=Ia||(Ia={})).Ma="default",Xu.Cache="cache";class uc{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ir(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=ir.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Ia.Cache}}/**
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
 */class ff{constructor(e){this.key=e}}class pf{constructor(e){this.key=e}}class sw{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=ee(),this.mutatedKeys=ee(),this.eu=Vd(e),this.tu=new Gn(this.eu)}get nu(){return this.Ya}ru(e,t){const r=t?t.iu:new Ju,s=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,m)=>{const _=s.get(f),b=zi(this.query,m)?m:null,P=!!_&&this.mutatedKeys.has(_.key),x=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let A=!1;_&&b?_.data.isEqual(b.data)?P!==x&&(r.track({type:3,doc:b}),A=!0):this.su(_,b)||(r.track({type:2,doc:b}),A=!0,(u&&this.eu(b,u)>0||h&&this.eu(b,h)<0)&&(c=!0)):!_&&b?(r.track({type:0,doc:b}),A=!0):_&&!b&&(r.track({type:1,doc:_}),A=!0,(u||h)&&(c=!0)),A&&(b?(a=a.add(b),i=x?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:a,iu:r,Cs:c,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort((f,m)=>function(b,P){const x=A=>{switch(A){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return H(20277,{Rt:A})}};return x(b)-x(P)}(f.type,m.type)||this.eu(f.doc,m.doc)),this.ou(r),s=s??!1;const c=t&&!s?this._u():[],u=this.Xa.size===0&&this.current&&!s?1:0,h=u!==this.Za;return this.Za=u,a.length!==0||h?{snapshot:new ir(this.query,e.tu,i,a,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Ju,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Ya=this.Ya.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ya=this.Ya.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=ee(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const t=[];return e.forEach(r=>{this.Xa.has(r)||t.push(new pf(r))}),this.Xa.forEach(r=>{e.has(r)||t.push(new ff(r))}),t}cu(e){this.Ya=e.Qs,this.Xa=ee();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return ir.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const hc="SyncEngine";class iw{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class ow{constructor(e){this.key=e,this.hu=!1}}class aw{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new kn(c=>Dd(c),$i),this.Iu=new Map,this.Eu=new Set,this.du=new de(W.comparator),this.Au=new Map,this.Ru=new Ya,this.Vu={},this.mu=new Map,this.fu=sr.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function cw(n,e,t=!0){const r=Ef(n);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await mf(r,e,t,!0),s}async function lw(n,e){const t=Ef(n);await mf(t,e,!0,!1)}async function mf(n,e,t,r){const s=await CE(n.localStore,lt(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await uw(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&af(n.remoteStore,s),c}async function uw(n,e,t,r,s){n.pu=(m,_,b)=>async function(x,A,O,M){let j=A.view.ru(O);j.Cs&&(j=await qu(x.localStore,A.query,!1).then(({documents:S})=>A.view.ru(S,j)));const z=M&&M.targetChanges.get(A.targetId),te=M&&M.targetMismatches.get(A.targetId)!=null,ie=A.view.applyChanges(j,x.isPrimaryClient,z,te);return eh(x,A.targetId,ie.au),ie.snapshot}(n,m,_,b);const i=await qu(n.localStore,e,!0),a=new sw(e,i.Qs),c=a.ru(i.documents),u=us.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(c,n.isPrimaryClient,u);eh(n,t,h.au);const f=new iw(e,t,a);return n.Tu.set(e,f),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),h.snapshot}async function hw(n,e,t){const r=J(n),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(a=>!$i(a,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ea(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&tc(r.remoteStore,s.targetId),Ta(r,s.targetId)}).catch(dr)):(Ta(r,s.targetId),await Ea(r.localStore,s.targetId,!0))}async function dw(n,e){const t=J(n),r=t.Tu.get(e),s=t.Iu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),tc(t.remoteStore,r.targetId))}async function fw(n,e,t){const r=Ew(n);try{const s=await function(a,c){const u=J(a),h=oe.now(),f=c.reduce((b,P)=>b.add(P.key),ee());let m,_;return u.persistence.runTransaction("Locally write mutations","readwrite",b=>{let P=Rt(),x=ee();return u.Ns.getEntries(b,f).next(A=>{P=A,P.forEach((O,M)=>{M.isValidDocument()||(x=x.add(O))})}).next(()=>u.localDocuments.getOverlayedDocuments(b,P)).next(A=>{m=A;const O=[];for(const M of c){const j=xv(M,m.get(M.key).overlayedDocument);j!=null&&O.push(new nn(M.key,j,Ad(j.value.mapValue),Xe.exists(!0)))}return u.mutationQueue.addMutationBatch(b,h,O,c)}).next(A=>{_=A;const O=A.applyToLocalDocumentSet(m,x);return u.documentOverlayCache.saveOverlays(b,A.batchId,O)})}).then(()=>({batchId:_.batchId,changes:Od(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,u){let h=a.Vu[a.currentUser.toKey()];h||(h=new de(Z)),h=h.insert(c,u),a.Vu[a.currentUser.toKey()]=h}(r,s.batchId,t),await ds(r,s.changes),await Qi(r.remoteStore)}catch(s){const i=oc(s,"Failed to persist write");t.reject(i)}}async function gf(n,e){const t=J(n);try{const r=await SE(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Au.get(i);a&&(ae(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?ae(a.hu,14607):s.removedDocuments.size>0&&(ae(a.hu,42227),a.hu=!1))}),await ds(t,r,e)}catch(r){await dr(r)}}function Zu(n,e,t){const r=J(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tu.forEach((i,a)=>{const c=a.view.va(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const u=J(a);u.onlineState=c;let h=!1;u.queries.forEach((f,m)=>{for(const _ of m.Sa)_.va(c)&&(h=!0)}),h&&lc(u)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function pw(n,e,t){const r=J(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Au.get(e),i=s&&s.key;if(i){let a=new de(W.comparator);a=a.insert(i,Fe.newNoDocument(i,Q.min()));const c=ee().add(i),u=new Hi(Q.min(),new Map,new de(Z),a,c);await gf(r,u),r.du=r.du.remove(i),r.Au.delete(e),dc(r)}else await Ea(r.localStore,e,!1).then(()=>Ta(r,e,t)).catch(dr)}async function mw(n,e){const t=J(n),r=e.batch.batchId;try{const s=await bE(t.localStore,e);_f(t,r,null),yf(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ds(t,s)}catch(s){await dr(s)}}async function gw(n,e,t){const r=J(n);try{const s=await function(a,c){const u=J(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,c).next(m=>(ae(m!==null,37113),f=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);_f(r,e,t),yf(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ds(r,s)}catch(s){await dr(s)}}function yf(n,e){(n.mu.get(e)||[]).forEach(t=>{t.resolve()}),n.mu.delete(e)}function _f(n,e,t){const r=J(n);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function Ta(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach(r=>{n.Ru.containsKey(r)||vf(n,r)})}function vf(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(tc(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),dc(n))}function eh(n,e,t){for(const r of t)r instanceof ff?(n.Ru.addReference(r.key,e),yw(n,r)):r instanceof pf?(U(hc,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||vf(n,r.key)):H(19791,{wu:r})}function yw(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Eu.has(r)||(U(hc,"New document in limbo: "+t),n.Eu.add(r),dc(n))}function dc(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new W(le.fromString(e)),r=n.fu.next();n.Au.set(r,new ow(t)),n.du=n.du.insert(t,r),af(n.remoteStore,new Bt(lt(Bi(t.path)),r,"TargetPurposeLimboResolution",Fi.ce))}}async function ds(n,e,t){const r=J(n),s=[],i=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach((c,u)=>{a.push(r.pu(u,e,t).then(h=>{var f;if((h||t)&&r.isPrimaryClient){const m=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){s.push(h);const m=Za.As(u.targetId,h);i.push(m)}}))}),await Promise.all(a),r.Pu.H_(s),await async function(u,h){const f=J(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>V.forEach(h,_=>V.forEach(_.Es,b=>f.persistence.referenceDelegate.addReference(m,_.targetId,b)).next(()=>V.forEach(_.ds,b=>f.persistence.referenceDelegate.removeReference(m,_.targetId,b)))))}catch(m){if(!fr(m))throw m;U(ec,"Failed to update sequence numbers: "+m)}for(const m of h){const _=m.targetId;if(!m.fromCache){const b=f.Ms.get(_),P=b.snapshotVersion,x=b.withLastLimboFreeSnapshotVersion(P);f.Ms=f.Ms.insert(_,x)}}}(r.localStore,i))}async function _w(n,e){const t=J(n);if(!t.currentUser.isEqual(e)){U(hc,"User change. New user:",e.toKey());const r=await nf(t.localStore,e);t.currentUser=e,function(i,a){i.mu.forEach(c=>{c.forEach(u=>{u.reject(new F(D.CANCELLED,a))})}),i.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ds(t,r.Ls)}}function vw(n,e){const t=J(n),r=t.Au.get(e);if(r&&r.hu)return ee().add(r.key);{let s=ee();const i=t.Iu.get(e);if(!i)return s;for(const a of i){const c=t.Tu.get(a);s=s.unionWith(c.view.nu)}return s}}function Ef(n){const e=J(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=gf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=vw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=pw.bind(null,e),e.Pu.H_=nw.bind(null,e.eventManager),e.Pu.yu=rw.bind(null,e.eventManager),e}function Ew(n){const e=J(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=mw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=gw.bind(null,e),e}class _i{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Gi(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return AE(this.persistence,new wE,e.initialUser,this.serializer)}Cu(e){return new tf(Xa.mi,this.serializer)}Du(e){return new kE}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}_i.provider={build:()=>new _i};class ww extends _i{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){ae(this.persistence.referenceDelegate instanceof gi,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new oE(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?ze.withCacheSize(this.cacheSizeBytes):ze.DEFAULT;return new tf(r=>gi.mi(r,t),this.serializer)}}class Aa{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Zu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=_w.bind(null,this.syncEngine),await ZE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new tw}()}createDatastore(e){const t=Gi(e.databaseInfo.databaseId),r=function(i){return new ME(i)}(e.databaseInfo);return function(i,a,c,u){return new UE(i,a,c,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,c){return new $E(r,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Zu(this.syncEngine,t,0),function(){return Gu.v()?new Gu:new DE}())}createSyncEngine(e,t){return function(s,i,a,c,u,h,f){const m=new aw(s,i,a,c,u,h);return f&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=J(s);U(xn,"RemoteStore shutting down."),i.Ea.add(5),await hs(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Aa.provider={build:()=>new Aa};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class fc{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):St("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const en="FirestoreClient";class Iw{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Le.UNAUTHENTICATED,this.clientId=Ua.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{U(en,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(U(en,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Tt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=oc(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Qo(n,e){n.asyncQueue.verifyOperationInProgress(),U(en,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await nf(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function th(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Tw(n);U(en,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Qu(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Qu(e.remoteStore,s)),n._onlineComponents=e}async function Tw(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){U(en,"Using user provided OfflineComponentProvider");try{await Qo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===D.FAILED_PRECONDITION||s.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;er("Error using user provided cache. Falling back to memory cache: "+t),await Qo(n,new _i)}}else U(en,"Using default OfflineComponentProvider"),await Qo(n,new ww(void 0));return n._offlineComponents}async function wf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(U(en,"Using user provided OnlineComponentProvider"),await th(n,n._uninitializedComponentsProvider._online)):(U(en,"Using default OnlineComponentProvider"),await th(n,new Aa))),n._onlineComponents}function Aw(n){return wf(n).then(e=>e.syncEngine)}async function vi(n){const e=await wf(n),t=e.eventManager;return t.onListen=cw.bind(null,e.syncEngine),t.onUnlisten=hw.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=lw.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=dw.bind(null,e.syncEngine),t}function bw(n,e,t={}){const r=new Tt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,u,h){const f=new fc({next:_=>{f.Nu(),a.enqueueAndForget(()=>cc(i,m));const b=_.docs.has(c);!b&&_.fromCache?h.reject(new F(D.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&_.fromCache&&u&&u.source==="server"?h.reject(new F(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(_)},error:_=>h.reject(_)}),m=new uc(Bi(c.path),f,{includeMetadataChanges:!0,qa:!0});return ac(i,m)}(await vi(n),n.asyncQueue,e,t,r)),r.promise}function Sw(n,e,t={}){const r=new Tt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,u,h){const f=new fc({next:_=>{f.Nu(),a.enqueueAndForget(()=>cc(i,m)),_.fromCache&&u.source==="server"?h.reject(new F(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(_)},error:_=>h.reject(_)}),m=new uc(c,f,{includeMetadataChanges:!0,qa:!0});return ac(i,m)}(await vi(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function If(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tf="firestore.googleapis.com",rh=!0;class sh{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new F(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Tf,this.ssl=rh}else this.host=e.host,this.ssl=e.ssl??rh;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=ef;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<sE)throw new F(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}B_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=If(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new F(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new F(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new F(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ji{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new sh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new F(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new F(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new sh(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new k_;switch(r.type){case"firstParty":return new O_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new F(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=nh.get(t);r&&(U("ComponentProvider","Removing Datastore"),nh.delete(t),r.terminate())}(this),Promise.resolve()}}function Rw(n,e,t,r={}){var h;n=We(n,Ji);const s=lr(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;s&&(Xh(`https://${c}`),Zh("Firestore",!0)),i.host!==Tf&&i.host!==c&&er("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:c,ssl:s,emulatorOptions:r};if(!bn(u,a)&&(n._setSettings(u),r.mockUserToken)){let f,m;if(typeof r.mockUserToken=="string")f=r.mockUserToken,m=Le.MOCK_USER;else{f=ny(r.mockUserToken,(h=n._app)==null?void 0:h.options.projectId);const _=r.mockUserToken.sub||r.mockUserToken.user_id;if(!_)throw new F(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Le(_)}n._authCredentials=new D_(new hd(f,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Dt(this.firestore,e,this._query)}}class pe{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ht(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new pe(this.firestore,e,this._key)}toJSON(){return{type:pe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(cs(t,pe._jsonSchema))return new pe(e,r||null,new W(le.fromString(t.referencePath)))}}pe._jsonSchemaVersion="firestore/documentReference/1.0",pe._jsonSchema={type:Ee("string",pe._jsonSchemaVersion),referencePath:Ee("string")};class Ht extends Dt{constructor(e,t,r){super(e,t,Bi(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new pe(this.firestore,null,new W(e))}withConverter(e){return new Ht(this.firestore,e,this._path)}}function xt(n,e,...t){if(n=xe(n),dd("collection","path",e),n instanceof Ji){const r=le.fromString(e,...t);return yu(r),new Ht(n,null,r)}{if(!(n instanceof pe||n instanceof Ht))throw new F(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(le.fromString(e,...t));return yu(r),new Ht(n.firestore,null,r)}}function He(n,e,...t){if(n=xe(n),arguments.length===1&&(e=Ua.newId()),dd("doc","path",e),n instanceof Ji){const r=le.fromString(e,...t);return gu(r),new pe(n,null,new W(r))}{if(!(n instanceof pe||n instanceof Ht))throw new F(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(le.fromString(e,...t));return gu(r),new pe(n.firestore,n instanceof Ht?n.converter:null,new W(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih="AsyncQueue";class oh{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new sf(this,"async_queue_retry"),this._c=()=>{const r=Ko();r&&U(ih,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=Ko();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Ko();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new Tt;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!fr(e))throw e;U(ih,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,St("INTERNAL UNHANDLED ERROR: ",ah(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=ic.createAndSchedule(this,e,t,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&H(47125,{Pc:ah(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function ah(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function ch(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class Ct extends Ji{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new oh,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new oh(e),this._firestoreClient=void 0,await e}}}function xw(n,e){const t=typeof n=="object"?n:Fr(),r=typeof n=="string"?n:e||ui,s=Fa(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=ey("firestore");i&&Rw(s,...i)}return s}function Yi(n){if(n._terminated)throw new F(D.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Cw(n),n._firestoreClient}function Cw(n){var r,s,i;const e=n._freezeSettings(),t=function(c,u,h,f){return new Z_(c,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,If(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,e);n._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new Iw(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ye(De.fromBase64String(e))}catch(t){throw new F(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ye(De.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ye._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(cs(e,Ye._jsonSchema))return Ye.fromBase64String(e.bytes)}}Ye._jsonSchemaVersion="firestore/bytes/1.0",Ye._jsonSchema={type:Ee("string",Ye._jsonSchemaVersion),bytes:Ee("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new F(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ke(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ht{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new F(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new F(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Z(this._lat,e._lat)||Z(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ht._jsonSchemaVersion}}static fromJSON(e){if(cs(e,ht._jsonSchema))return new ht(e.latitude,e.longitude)}}ht._jsonSchemaVersion="firestore/geoPoint/1.0",ht._jsonSchema={type:Ee("string",ht._jsonSchemaVersion),latitude:Ee("number"),longitude:Ee("number")};/**
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
 */class dt{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:dt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(cs(e,dt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new dt(e.vectorValues);throw new F(D.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}dt._jsonSchemaVersion="firestore/vectorValue/1.0",dt._jsonSchema={type:Ee("string",dt._jsonSchemaVersion),vectorValues:Ee("object")};/**
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
 */const Pw=/^__.*__$/;class kw{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new nn(e,this.data,this.fieldMask,t,this.fieldTransforms):new ls(e,this.data,t,this.fieldTransforms)}}class Af{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new nn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function bf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw H(40011,{Ac:n})}}class pc{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new pc({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Ei(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(bf(this.Ac)&&Pw.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class Dw{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Gi(e)}Cc(e,t,r,s=!1){return new pc({Ac:e,methodName:t,Dc:r,path:ke.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function eo(n){const e=n._freezeSettings(),t=Gi(n._databaseId);return new Dw(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Sf(n,e,t,r,s,i={}){const a=n.Cc(i.merge||i.mergeFields?2:0,e,t,s);gc("Data must be an object, but it was:",a,r);const c=Rf(r,a);let u,h;if(i.merge)u=new Qe(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const _=ba(e,m,t);if(!a.contains(_))throw new F(D.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);Cf(f,_)||f.push(_)}u=new Qe(f),h=a.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=a.fieldTransforms;return new kw(new qe(c),u,h)}class to extends Zi{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof to}}class mc extends Zi{_toFieldTransform(e){return new Av(e.path,new ts)}isEqual(e){return e instanceof mc}}function Vw(n,e,t,r){const s=n.Cc(1,e,t);gc("Data must be an object, but it was:",s,r);const i=[],a=qe.empty();tn(r,(u,h)=>{const f=yc(e,u,t);h=xe(h);const m=s.yc(f);if(h instanceof to)i.push(f);else{const _=fs(h,m);_!=null&&(i.push(f),a.set(f,_))}});const c=new Qe(i);return new Af(a,c,s.fieldTransforms)}function Nw(n,e,t,r,s,i){const a=n.Cc(1,e,t),c=[ba(e,r,t)],u=[s];if(i.length%2!=0)throw new F(D.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<i.length;_+=2)c.push(ba(e,i[_])),u.push(i[_+1]);const h=[],f=qe.empty();for(let _=c.length-1;_>=0;--_)if(!Cf(h,c[_])){const b=c[_];let P=u[_];P=xe(P);const x=a.yc(b);if(P instanceof to)h.push(b);else{const A=fs(P,x);A!=null&&(h.push(b),f.set(b,A))}}const m=new Qe(h);return new Af(f,m,a.fieldTransforms)}function Ow(n,e,t,r=!1){return fs(t,n.Cc(r?4:3,e))}function fs(n,e){if(xf(n=xe(n)))return gc("Unsupported field value:",e,n),Rf(n,e);if(n instanceof Zi)return function(r,s){if(!bf(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const c of r){let u=fs(c,s.wc(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=xe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return wv(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=oe.fromDate(r);return{timestampValue:mi(s.serializer,i)}}if(r instanceof oe){const i=new oe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:mi(s.serializer,i)}}if(r instanceof ht)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ye)return{bytesValue:Gd(s.serializer,r._byteString)};if(r instanceof pe){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ja(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof dt)return function(a,c){return{mapValue:{fields:{[wd]:{stringValue:Td},[hi]:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw c.Sc("VectorValues must only contain numeric values.");return Ha(c.serializer,h)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${Li(r)}`)}(n,e)}function Rf(n,e){const t={};return md(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):tn(n,(r,s)=>{const i=fs(s,e.mc(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function xf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof oe||n instanceof ht||n instanceof Ye||n instanceof pe||n instanceof Zi||n instanceof dt)}function gc(n,e,t){if(!xf(t)||!fd(t)){const r=Li(t);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function ba(n,e,t){if((e=xe(e))instanceof Xi)return e._internalPath;if(typeof e=="string")return yc(n,e);throw Ei("Field path arguments must be of type string or ",n,!1,void 0,t)}const Mw=new RegExp("[~\\*/\\[\\]]");function yc(n,e,t){if(e.search(Mw)>=0)throw Ei(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Xi(...e.split("."))._internalPath}catch{throw Ei(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ei(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new F(D.INVALID_ARGUMENT,c+n+u)}function Cf(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new pe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Lw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(no("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Lw extends Pf{data(){return super.data()}}function no(n,e){return typeof e=="string"?yc(n,e):e instanceof Xi?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kf(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new F(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class _c{}class vc extends _c{}function Gt(n,e,...t){let r=[];e instanceof _c&&r.push(e),r=r.concat(t),function(i){const a=i.filter(u=>u instanceof Ec).length,c=i.filter(u=>u instanceof ro).length;if(a>1||a>0&&c>0)throw new F(D.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class ro extends vc{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new ro(e,t,r)}_apply(e){const t=this._parse(e);return Vf(e._query,t),new Dt(e.firestore,e.converter,ma(e._query,t))}_parse(e){const t=eo(e.firestore);return function(i,a,c,u,h,f,m){let _;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new F(D.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){uh(m,f);const P=[];for(const x of m)P.push(lh(u,i,x));_={arrayValue:{values:P}}}else _=lh(u,i,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||uh(m,f),_=Ow(c,a,m,f==="in"||f==="not-in");return ve.create(h,f,_)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Et(n,e,t){const r=e,s=no("where",n);return ro._create(s,r,t)}class Ec extends _c{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ec(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:st.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const c=i.getFlattenedFilters();for(const u of c)Vf(a,u),a=ma(a,u)}(e._query,t),new Dt(e.firestore,e.converter,ma(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class wc extends vc{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new wc(e,t)}_apply(e){const t=function(s,i,a){if(s.startAt!==null)throw new F(D.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new F(D.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new es(i,a)}(e._query,this._field,this._direction);return new Dt(e.firestore,e.converter,function(s,i){const a=s.explicitOrderBy.concat([i]);return new pr(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function Df(n,e="asc"){const t=e,r=no("orderBy",n);return wc._create(r,t)}class Ic extends vc{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Ic(e,t,r)}_apply(e){return new Dt(e.firestore,e.converter,fi(e._query,this._limit,this._limitType))}}function cA(n){return $_("limit",n),Ic._create("limit",n,"F")}function lh(n,e,t){if(typeof(t=xe(t))=="string"){if(t==="")throw new F(D.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!kd(e)&&t.indexOf("/")!==-1)throw new F(D.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(le.fromString(t));if(!W.isDocumentKey(r))throw new F(D.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return bu(n,new W(r))}if(t instanceof pe)return bu(n,t._key);throw new F(D.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Li(t)}.`)}function uh(n,e){if(!Array.isArray(n)||n.length===0)throw new F(D.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Vf(n,e){const t=function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new F(D.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new F(D.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Fw{convertValue(e,t="none"){switch(Xt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Yt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw H(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return tn(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var r,s,i;const t=(i=(s=(r=e.fields)==null?void 0:r[hi].arrayValue)==null?void 0:s.values)==null?void 0:i.map(a=>me(a.doubleValue));return new dt(t)}convertGeoPoint(e){return new ht(me(e.latitude),me(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Ui(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Yr(e));default:return null}}convertTimestamp(e){const t=Jt(e);return new oe(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=le.fromString(e);ae(Zd(r),9688,{name:e});const s=new Xr(r.get(1),r.get(3)),i=new W(r.popFirst(5));return s.isEqual(t)||St(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class Mr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class wn extends Pf{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ei(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(no("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new F(D.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=wn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}wn._jsonSchemaVersion="firestore/documentSnapshot/1.0",wn._jsonSchema={type:Ee("string",wn._jsonSchemaVersion),bundleSource:Ee("string","DocumentSnapshot"),bundleName:Ee("string"),bundle:Ee("string")};class ei extends wn{data(e={}){return super.data(e)}}class In{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Mr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new ei(this._firestore,this._userDataWriter,r.key,r,new Mr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new F(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const u=new ei(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Mr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const u=new ei(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Mr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),f=a.indexOf(c.doc.key)),{type:jw(c.type),doc:u,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new F(D.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=In._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ua.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function jw(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return H(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(n){n=We(n,pe);const e=We(n.firestore,Ct);return bw(Yi(e),n._key).then(t=>Mf(e,n,t))}In._jsonSchemaVersion="firestore/querySnapshot/1.0",In._jsonSchema={type:Ee("string",In._jsonSchemaVersion),bundleSource:Ee("string","QuerySnapshot"),bundleName:Ee("string"),bundle:Ee("string")};class Tc extends Fw{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ye(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new pe(this.firestore,null,t)}}function or(n){n=We(n,Dt);const e=We(n.firestore,Ct),t=Yi(e),r=new Tc(e);return kf(n._query),Sw(t,n._query).then(s=>new In(e,r,n,s))}function Ac(n,e,t){n=We(n,pe);const r=We(n.firestore,Ct),s=Nf(n.converter,e,t);return oo(r,[Sf(eo(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Xe.none())])}function io(n,e,t,...r){n=We(n,pe);const s=We(n.firestore,Ct),i=eo(s);let a;return a=typeof(e=xe(e))=="string"||e instanceof Xi?Nw(i,"updateDoc",n._key,e,t,r):Vw(i,"updateDoc",n._key,e),oo(s,[a.toMutation(n._key,Xe.exists(!0))])}function Of(n){return oo(We(n.firestore,Ct),[new Ga(n._key,Xe.none())])}function bc(n,e){const t=We(n.firestore,Ct),r=He(n),s=Nf(n.converter,e);return oo(t,[Sf(eo(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Xe.exists(!1))]).then(()=>r)}function Uw(n,...e){var u,h,f;n=xe(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||ch(e[r])||(t=e[r++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(ch(e[r])){const m=e[r];e[r]=(u=m.next)==null?void 0:u.bind(m),e[r+1]=(h=m.error)==null?void 0:h.bind(m),e[r+2]=(f=m.complete)==null?void 0:f.bind(m)}let i,a,c;if(n instanceof pe)a=We(n.firestore,Ct),c=Bi(n._key.path),i={next:m=>{e[r]&&e[r](Mf(a,n,m))},error:e[r+1],complete:e[r+2]};else{const m=We(n,Dt);a=We(m.firestore,Ct),c=m._query;const _=new Tc(a);i={next:b=>{e[r]&&e[r](new In(a,_,m,b))},error:e[r+1],complete:e[r+2]},kf(n._query)}return function(_,b,P,x){const A=new fc(x),O=new uc(b,A,P);return _.asyncQueue.enqueueAndForget(async()=>ac(await vi(_),O)),()=>{A.Nu(),_.asyncQueue.enqueueAndForget(async()=>cc(await vi(_),O))}}(Yi(a),c,s,i)}function oo(n,e){return function(r,s){const i=new Tt;return r.asyncQueue.enqueueAndForget(async()=>fw(await Aw(r),s,i)),i.promise}(Yi(n),e)}function Mf(n,e,t){const r=t.docs.get(e._key),s=new Tc(n);return new wn(n,s,e._key,r,new Mr(t.hasPendingWrites,t.fromCache),e.converter)}function Sc(){return new mc("serverTimestamp")}(function(e,t=!0){(function(s){hr=s})(ur),Zn(new Sn("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new Ct(new V_(r.getProvider("auth-internal")),new M_(a,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new F(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xr(h.options.projectId,f)}(a,s),a);return i={useFetchStreams:t,...i},c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),qt(du,fu,e),qt(du,fu,"esm2020")})();function Lf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Bw=Lf,Ff=new os("auth","Firebase",Lf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=new Ma("@firebase/auth");function $w(n,...e){wi.logLevel<=X.WARN&&wi.warn(`Auth (${ur}): ${n}`,...e)}function ti(n,...e){wi.logLevel<=X.ERROR&&wi.error(`Auth (${ur}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(n,...e){throw xc(n,...e)}function rt(n,...e){return xc(n,...e)}function Rc(n,e,t){const r={...Bw(),[e]:t};return new os("auth","Firebase",r).create(e,{appName:n.name})}function Tn(n){return Rc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function zw(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&mt(n,"argument-error"),Rc(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function xc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Ff.create(n,...e)}function K(n,e,...t){if(!n)throw xc(e,...t)}function wt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ti(e),new Error(e)}function Pt(n,e){n||wt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sa(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function qw(){return hh()==="http:"||hh()==="https:"}function hh(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ww(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qw()||cy()||"connection"in navigator)?navigator.onLine:!0}function Hw(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,t){this.shortDelay=e,this.longDelay=t,Pt(t>e,"Short delay should be less than long delay!"),this.isMobile=iy()||ly()}get(){return Ww()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cc(n,e){Pt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;wt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;wt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;wt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Qw=new ps(3e4,6e4);function Pc(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function gr(n,e,t,r,s={}){return Uf(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=as({key:n.config.apiKey,...a}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const h={method:e,headers:u,...i};return ay()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&lr(n.emulatorConfig.host)&&(h.credentials="include"),jf.fetch()(await Bf(n,n.config.apiHost,t,c),h)})}async function Uf(n,e,t){n._canInitEmulator=!1;const r={...Gw,...e};try{const s=new Yw(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Hs(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[u,h]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Hs(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Hs(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw Hs(n,"user-disabled",a);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Rc(n,f,h);mt(n,f)}}catch(s){if(s instanceof kt)throw s;mt(n,"network-request-failed",{message:String(s)})}}async function Jw(n,e,t,r,s={}){const i=await gr(n,e,t,r,s);return"mfaPendingCredential"in i&&mt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Bf(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?Cc(n.config,s):`${n.config.apiScheme}://${s}`;return Kw.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class Yw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(rt(this.auth,"network-request-failed")),Qw.get())})}}function Hs(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=rt(n,e,r);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xw(n,e){return gr(n,"POST","/v1/accounts:delete",e)}async function Ii(n,e){return gr(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Zw(n,e=!1){const t=xe(n),r=await t.getIdToken(e),s=kc(r);K(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:zr(Jo(s.auth_time)),issuedAtTime:zr(Jo(s.iat)),expirationTime:zr(Jo(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Jo(n){return Number(n)*1e3}function kc(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ti("JWT malformed, contained fewer than 3 sections"),null;try{const s=Kh(t);return s?JSON.parse(s):(ti("Failed to decode base64 JWT payload"),null)}catch(s){return ti("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function dh(n){const e=kc(n);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ss(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof kt&&eI(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function eI({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=zr(this.lastLoginAt),this.creationTime=zr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ti(n){var m;const e=n.auth,t=await n.getIdToken(),r=await ss(n,Ii(e,{idToken:t}));K(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(m=s.providerUserInfo)!=null&&m.length?$f(s.providerUserInfo):[],a=rI(n.providerData,i),c=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),h=c?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Ra(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,f)}async function nI(n){const e=xe(n);await Ti(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function rI(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function $f(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sI(n,e){const t=await Uf(n,{},async()=>{const r=as({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await Bf(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:r};return n.emulatorConfig&&lr(n.emulatorConfig.host)&&(u.credentials="include"),jf.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function iI(n,e){return gr(n,"POST","/v2/accounts:revokeToken",Pc(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):dh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){K(e.length!==0,"internal-error");const t=dh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await sI(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Kn;return r&&(K(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(K(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(K(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Kn,this.toJSON())}_performRefresh(){return wt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(n,e){K(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class nt{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new tI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ra(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await ss(this,this.stsTokenManager.getToken(this.auth,e));return K(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Zw(this,e)}reload(){return nI(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new nt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ti(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(tt(this.auth.app))return Promise.reject(Tn(this.auth));const e=await this.getIdToken();return await ss(this,Xw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,c=t.tenantId??void 0,u=t._redirectEventId??void 0,h=t.createdAt??void 0,f=t.lastLoginAt??void 0,{uid:m,emailVerified:_,isAnonymous:b,providerData:P,stsTokenManager:x}=t;K(m&&x,e,"internal-error");const A=Kn.fromJSON(this.name,x);K(typeof m=="string",e,"internal-error"),Mt(r,e.name),Mt(s,e.name),K(typeof _=="boolean",e,"internal-error"),K(typeof b=="boolean",e,"internal-error"),Mt(i,e.name),Mt(a,e.name),Mt(c,e.name),Mt(u,e.name),Mt(h,e.name),Mt(f,e.name);const O=new nt({uid:m,auth:e,email:s,emailVerified:_,displayName:r,isAnonymous:b,photoURL:a,phoneNumber:i,tenantId:c,stsTokenManager:A,createdAt:h,lastLoginAt:f});return P&&Array.isArray(P)&&(O.providerData=P.map(M=>({...M}))),u&&(O._redirectEventId=u),O}static async _fromIdTokenResponse(e,t,r=!1){const s=new Kn;s.updateFromServerResponse(t);const i=new nt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ti(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];K(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?$f(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Kn;c.updateFromIdToken(r);const u=new nt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ra(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh=new Map;function It(n){Pt(n instanceof Function,"Expected a class definition");let e=fh.get(n);return e?(Pt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,fh.set(n,e),e)}/**
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
 */class zf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}zf.type="NONE";const ph=zf;/**
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
 */function ni(n,e,t){return`firebase:${n}:${e}:${t}`}class Qn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ni(this.userKey,s.apiKey,i),this.fullPersistenceKey=ni("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ii(this.auth,{idToken:e}).catch(()=>{});return t?nt._fromGetAccountInfoResponse(this.auth,t,e):null}return nt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Qn(It(ph),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||It(ph);const a=ni(r,e.config.apiKey,e.name);let c=null;for(const h of t)try{const f=await h._get(a);if(f){let m;if(typeof f=="string"){const _=await Ii(e,{idToken:f}).catch(()=>{});if(!_)break;m=await nt._fromGetAccountInfoResponse(e,_,f)}else m=nt._fromJSON(e,f);h!==i&&(c=m),i=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Qn(i,e,r):(i=u[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Qn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mh(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Gf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Qf(e))return"Blackberry";if(Jf(e))return"Webos";if(Wf(e))return"Safari";if((e.includes("chrome/")||Hf(e))&&!e.includes("edge/"))return"Chrome";if(Kf(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function qf(n=Ue()){return/firefox\//i.test(n)}function Wf(n=Ue()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Hf(n=Ue()){return/crios\//i.test(n)}function Gf(n=Ue()){return/iemobile/i.test(n)}function Kf(n=Ue()){return/android/i.test(n)}function Qf(n=Ue()){return/blackberry/i.test(n)}function Jf(n=Ue()){return/webos/i.test(n)}function Dc(n=Ue()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function oI(n=Ue()){var e;return Dc(n)&&!!((e=window.navigator)!=null&&e.standalone)}function aI(){return uy()&&document.documentMode===10}function Yf(n=Ue()){return Dc(n)||Kf(n)||Jf(n)||Qf(n)||/windows phone/i.test(n)||Gf(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xf(n,e=[]){let t;switch(n){case"Browser":t=mh(Ue());break;case"Worker":t=`${mh(Ue())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ur}/${r}`}/**
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
 */class cI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const u=e(i);a(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function lI(n,e={}){return gr(n,"GET","/v2/passwordPolicy",Pc(n,e))}/**
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
 */const uI=6;class hI{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??uI,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gh(this),this.idTokenSubscription=new gh(this),this.beforeStateQueue=new cI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ff,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=It(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Qn.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ii(this,{idToken:e}),r=await nt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(tt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ti(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Hw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(tt(this.app))return Promise.reject(Tn(this));const t=e?xe(e):null;return t&&K(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return tt(this.app)?Promise.reject(Tn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return tt(this.app)?Promise.reject(Tn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(It(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await lI(this),t=new hI(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new os("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await iI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&It(e)||this._popupRedirectResolver;K(t,this,"argument-error"),this.redirectPersistenceManager=await Qn.create(this,[It(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Xf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(tt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&$w(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ao(n){return xe(n)}class gh{constructor(e){this.auth=e,this.observer=null,this.addObserver=_y(t=>this.observer=t)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function fI(n){Vc=n}function pI(n){return Vc.loadJS(n)}function mI(){return Vc.gapiScript}function gI(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yI(n,e){const t=Fa(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(bn(i,e??{}))return s;mt(s,"already-initialized")}return t.initialize({options:e})}function _I(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(It);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function vI(n,e,t){const r=ao(n);K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),i=Zf(e),{host:a,port:c}=EI(e),u=c===null?"":`:${c}`,h={url:`${i}//${a}${u}/`},f=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){K(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),K(bn(h,r.config.emulator)&&bn(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,lr(a)?(Xh(`${i}//${a}${u}`),Zh("Auth",!0)):s||wI()}function Zf(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function EI(n){const e=Zf(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:yh(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:yh(a)}}}function yh(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function wI(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return wt("not implemented")}_getIdTokenResponse(e){return wt("not implemented")}_linkToIdToken(e,t){return wt("not implemented")}_getReauthenticationResolver(e){return wt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jn(n,e){return Jw(n,"POST","/v1/accounts:signInWithIdp",Pc(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II="http://localhost";class Cn extends ep{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Cn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):mt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const a=new Cn(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Jn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Jn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Jn(e,t)}buildRequest(){const e={requestUri:II,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=as(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ms extends Nc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt extends ms{constructor(){super("facebook.com")}static credential(e){return Cn._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Lt.credentialFromTaggedObject(e)}static credentialFromError(e){return Lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Lt.credential(e.oauthAccessToken)}catch{return null}}}Lt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Lt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends ms{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Cn._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return vt.credential(t,r)}catch{return null}}}vt.GOOGLE_SIGN_IN_METHOD="google.com";vt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft extends ms{constructor(){super("github.com")}static credential(e){return Cn._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ft.credentialFromTaggedObject(e)}static credentialFromError(e){return Ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ft.credential(e.oauthAccessToken)}catch{return null}}}Ft.GITHUB_SIGN_IN_METHOD="github.com";Ft.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt extends ms{constructor(){super("twitter.com")}static credential(e,t){return Cn._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return jt.credentialFromTaggedObject(e)}static credentialFromError(e){return jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return jt.credential(t,r)}catch{return null}}}jt.TWITTER_SIGN_IN_METHOD="twitter.com";jt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await nt._fromIdTokenResponse(e,r,s),a=_h(r);return new ar({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=_h(r);return new ar({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function _h(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai extends kt{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ai.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Ai(e,t,r,s)}}function tp(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ai._fromErrorAndOperation(n,i,e,r):i})}async function TI(n,e,t=!1){const r=await ss(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ar._forOperation(n,"link",r)}/**
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
 */async function AI(n,e,t=!1){const{auth:r}=n;if(tt(r.app))return Promise.reject(Tn(r));const s="reauthenticate";try{const i=await ss(n,tp(r,s,e,n),t);K(i.idToken,r,"internal-error");const a=kc(i.idToken);K(a,r,"internal-error");const{sub:c}=a;return K(n.uid===c,r,"user-mismatch"),ar._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&mt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bI(n,e,t=!1){if(tt(n.app))return Promise.reject(Tn(n));const r="signIn",s=await tp(n,r,e),i=await ar._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}function SI(n,e,t,r){return xe(n).onIdTokenChanged(e,t,r)}function RI(n,e,t){return xe(n).beforeAuthStateChanged(e,t)}function xI(n,e,t,r){return xe(n).onAuthStateChanged(e,t,r)}function CI(n){return xe(n).signOut()}const bi="__sak";/**
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
 */class np{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(bi,"1"),this.storage.removeItem(bi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI=1e3,kI=10;class rp extends np{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Yf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);aI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,kI):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},PI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}rp.type="LOCAL";const DI=rp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp extends np{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}sp.type="SESSION";const ip=sp;/**
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
 */function VI(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class co{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new co(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async h=>h(t.origin,i)),u=await VI(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}co.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class NI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,u)=>{const h=Oc("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(m){const _=m;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(_.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(){return window}function OI(n){ft().location.href=n}/**
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
 */function op(){return typeof ft().WorkerGlobalScope<"u"&&typeof ft().importScripts=="function"}async function MI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function LI(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function FI(){return op()?self:null}/**
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
 */const ap="firebaseLocalStorageDb",jI=1,Si="firebaseLocalStorage",cp="fbase_key";class gs{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function lo(n,e){return n.transaction([Si],e?"readwrite":"readonly").objectStore(Si)}function UI(){const n=indexedDB.deleteDatabase(ap);return new gs(n).toPromise()}function xa(){const n=indexedDB.open(ap,jI);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Si,{keyPath:cp})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Si)?e(r):(r.close(),await UI(),e(await xa()))})})}async function vh(n,e,t){const r=lo(n,!0).put({[cp]:e,value:t});return new gs(r).toPromise()}async function BI(n,e){const t=lo(n,!1).get(e),r=await new gs(t).toPromise();return r===void 0?null:r.value}function Eh(n,e){const t=lo(n,!0).delete(e);return new gs(t).toPromise()}const $I=800,zI=3;class lp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xa(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>zI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return op()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=co._getInstance(FI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await MI(),!this.activeServiceWorker)return;this.sender=new NI(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||LI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xa();return await vh(e,bi,"1"),await Eh(e,bi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>vh(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>BI(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Eh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=lo(s,!1).getAll();return new gs(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$I)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}lp.type="LOCAL";const qI=lp;new ps(3e4,6e4);/**
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
 */function up(n,e){return e?It(e):(K(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Mc extends ep{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Jn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Jn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Jn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function WI(n){return bI(n.auth,new Mc(n),n.bypassAuthState)}function HI(n){const{auth:e,user:t}=n;return K(t,e,"internal-error"),AI(t,new Mc(n),n.bypassAuthState)}async function GI(n){const{auth:e,user:t}=n;return K(t,e,"internal-error"),TI(t,new Mc(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return WI;case"linkViaPopup":case"linkViaRedirect":return GI;case"reauthViaPopup":case"reauthViaRedirect":return HI;default:mt(this.auth,"internal-error")}}resolve(e){Pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI=new ps(2e3,1e4);async function QI(n,e,t){if(tt(n.app))return Promise.reject(rt(n,"operation-not-supported-in-this-environment"));const r=ao(n);zw(n,e,Nc);const s=up(r,t);return new _n(r,"signInViaPopup",e,s).executeNotNull()}class _n extends hp{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,_n.currentPopupAction&&_n.currentPopupAction.cancel(),_n.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){Pt(this.filter.length===1,"Popup operations only handle one event");const e=Oc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(rt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(rt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_n.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,KI.get())};e()}}_n.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI="pendingRedirect",ri=new Map;class YI extends hp{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=ri.get(this.auth._key());if(!e){try{const r=await XI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}ri.set(this.auth._key(),e)}return this.bypassAuthState||ri.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function XI(n,e){const t=t0(e),r=e0(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function ZI(n,e){ri.set(n._key(),e)}function e0(n){return It(n._redirectPersistence)}function t0(n){return ni(JI,n.config.apiKey,n.name)}async function n0(n,e,t=!1){if(tt(n.app))return Promise.reject(Tn(n));const r=ao(n),s=up(r,e),a=await new YI(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r0=10*60*1e3;class s0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!i0(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!dp(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(rt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=r0&&this.cachedEventUids.clear(),this.cachedEventUids.has(wh(e))}saveEventToCache(e){this.cachedEventUids.add(wh(e)),this.lastProcessedEventTime=Date.now()}}function wh(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function dp({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function i0(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dp(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o0(n,e={}){return gr(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,c0=/^https?/;async function l0(n){if(n.config.emulator)return;const{authorizedDomains:e}=await o0(n);for(const t of e)try{if(u0(t))return}catch{}mt(n,"unauthorized-domain")}function u0(n){const e=Sa(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!c0.test(t))return!1;if(a0.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const h0=new ps(3e4,6e4);function Ih(){const n=ft().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function d0(n){return new Promise((e,t)=>{var s,i,a;function r(){Ih(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ih(),t(rt(n,"network-request-failed"))},timeout:h0.get()})}if((i=(s=ft().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((a=ft().gapi)!=null&&a.load)r();else{const c=gI("iframefcb");return ft()[c]=()=>{gapi.load?r():t(rt(n,"network-request-failed"))},pI(`${mI()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw si=null,e})}let si=null;function f0(n){return si=si||d0(n),si}/**
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
 */const p0=new ps(5e3,15e3),m0="__/auth/iframe",g0="emulator/auth/iframe",y0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function v0(n){const e=n.config;K(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Cc(e,g0):`https://${n.config.authDomain}/${m0}`,r={apiKey:e.apiKey,appName:n.name,v:ur},s=_0.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${as(r).slice(1)}`}async function E0(n){const e=await f0(n),t=ft().gapi;return K(t,n,"internal-error"),e.open({where:document.body,url:v0(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:y0,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=rt(n,"network-request-failed"),c=ft().setTimeout(()=>{i(a)},p0.get());function u(){ft().clearTimeout(c),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
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
 */const w0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},I0=500,T0=600,A0="_blank",b0="http://localhost";class Th{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function S0(n,e,t,r=I0,s=T0){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u={...w0,width:r.toString(),height:s.toString(),top:i,left:a},h=Ue().toLowerCase();t&&(c=Hf(h)?A0:t),qf(h)&&(e=e||b0,u.scrollbars="yes");const f=Object.entries(u).reduce((_,[b,P])=>`${_}${b}=${P},`,"");if(oI(h)&&c!=="_self")return R0(e||"",c),new Th(null);const m=window.open(e||"",c,f);K(m,n,"popup-blocked");try{m.focus()}catch{}return new Th(m)}function R0(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const x0="__/auth/handler",C0="emulator/auth/handler",P0=encodeURIComponent("fac");async function Ah(n,e,t,r,s,i){K(n.config.authDomain,n,"auth-domain-config-required"),K(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:ur,eventId:s};if(e instanceof Nc){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",yy(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries(i||{}))a[f]=m}if(e instanceof ms){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const u=await n._getAppCheckToken(),h=u?`#${P0}=${encodeURIComponent(u)}`:"";return`${k0(n)}?${as(c).slice(1)}${h}`}function k0({config:n}){return n.emulator?Cc(n,C0):`https://${n.authDomain}/${x0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo="webStorageSupport";class D0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ip,this._completeRedirectFn=n0,this._overrideRedirectResult=ZI}async _openPopup(e,t,r,s){var a;Pt((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await Ah(e,t,r,Sa(),s);return S0(e,i,Oc())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Ah(e,t,r,Sa(),s);return OI(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Pt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await E0(e),r=new s0(e);return t.register("authEvent",s=>(K(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Yo,{type:Yo},s=>{var a;const i=(a=s==null?void 0:s[0])==null?void 0:a[Yo];i!==void 0&&t(!!i),mt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=l0(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Yf()||Wf()||Dc()}}const V0=D0;var bh="@firebase/auth",Sh="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O0(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function M0(n){Zn(new Sn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;K(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Xf(n)},h=new dI(r,s,i,u);return _I(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Zn(new Sn("auth-internal",e=>{const t=ao(e.getProvider("auth").getImmediate());return(r=>new N0(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),qt(bh,Sh,O0(n)),qt(bh,Sh,"esm2020")}/**
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
 */const L0=5*60,F0=Yh("authIdTokenMaxAge")||L0;let Rh=null;const j0=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>F0)return;const s=t==null?void 0:t.token;Rh!==s&&(Rh=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function U0(n=Fr()){const e=Fa(n,"auth");if(e.isInitialized())return e.getImmediate();const t=yI(n,{popupRedirectResolver:V0,persistence:[qI,DI,ip]}),r=Yh("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=j0(i.toString());RI(t,a,()=>a(t.currentUser)),SI(t,c=>a(c))}}const s=Qh("auth");return s&&vI(t,`http://${s}`),t}function B0(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}fI({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=rt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",B0().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});M0("Browser");const pn=class pn{constructor(){ot(this,"events",[]);ot(this,"rateLimitMap",new Map);ot(this,"blockedIPs",new Set);ot(this,"suspiciousActivities",new Map)}static getInstance(){return pn.instance||(pn.instance=new pn),pn.instance}checkRateLimit(e,t=100,r=6e4){const s=Date.now(),a=(this.rateLimitMap.get(e)||[]).filter(c=>s-c<r);return a.length>=t?(this.logSecurityEvent({type:"rate_limit",timestamp:s,details:{identifier:e,requestCount:a.length},severity:"high"}),this.suspiciousActivities.set(e,(this.suspiciousActivities.get(e)||0)+1),!1):(a.push(s),this.rateLimitMap.set(e,a),!0)}validateInput(e,t="text"){if(!e||typeof e!="string")return{isValid:!1,sanitized:""};const r=[/('|(\\')|(;)|(\\)|(\-\-)|(\/\*)|(\*\/)|(\bor\b)|(\band\b)|(\bunion\b)|(\bselect\b)|(\binsert\b)|(\bupdate\b)|(\bdelete\b)|(\bdrop\b)|(\bcreate\b)|(\balter\b)|(\bexec\b)|(\bexecute\b))/gi],s=[/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi,/javascript:/gi,/on\w+\s*=/gi,/<.*?>/g];let i=e,a=!0;for(const c of r)if(c.test(e)){this.logSecurityEvent({type:"injection_attempt",timestamp:Date.now(),details:{input:e.substring(0,100),pattern:c.source},severity:"critical"}),a=!1;break}for(const c of s)c.test(i)&&(this.logSecurityEvent({type:"xss_attempt",timestamp:Date.now(),details:{input:e.substring(0,100),pattern:c.source},severity:"critical"}),i=i.replace(c,""),a=!1);switch(t){case"email":/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i)||(a=!1);break;case"url":try{new URL(i)}catch{a=!1}break;case"json":try{JSON.parse(i)}catch{a=!1}break}return i=i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"),{isValid:a,sanitized:i}}generateCSRFToken(){const e=new Uint8Array(32);crypto.getRandomValues(e);const t=Array.from(e,r=>r.toString(16).padStart(2,"0")).join("");return localStorage.setItem("csrf_token",t),t}validateCSRFToken(e){const t=localStorage.getItem("csrf_token");return!t||e!==t?(this.logSecurityEvent({type:"csrf_attempt",timestamp:Date.now(),details:{providedToken:e==null?void 0:e.substring(0,10)},severity:"high"}),!1):!0}detectSuspiciousActivity(e,t){const r=Date.now(),s=`${e}_${t}`,i=this.suspiciousActivities.get(s)||0;return r-i<1e3?(this.logSecurityEvent({type:"suspicious_activity",timestamp:r,details:{userId:e,action:t,timeDiff:r-i},severity:"medium"}),!0):(this.suspiciousActivities.set(s,r),!1)}logSecurityEvent(e){console.warn("🚨 보안 이벤트 탐지:",e),this.events.push(e),this.events.length>1e3&&(this.events=this.events.slice(-1e3)),e.severity==="critical"&&this.handleCriticalEvent(e)}handleCriticalEvent(e){"Notification"in window&&Notification.permission==="granted"&&new Notification("🚨 보안 경고",{body:`심각한 보안 이벤트가 탐지되었습니다: ${e.type}`,icon:"/favicon.ico"}),console.error("🔥 CRITICAL SECURITY EVENT:",e);const t=JSON.parse(localStorage.getItem("critical_security_events")||"[]");t.push(e),localStorage.setItem("critical_security_events",JSON.stringify(t.slice(-50)))}getSecurityStats(){const e={};let t=0;return this.events.forEach(r=>{e[r.type]=(e[r.type]||0)+1,r.severity==="critical"&&t++}),{totalEvents:this.events.length,eventsByType:e,recentEvents:this.events.slice(-10),criticalEvents:t}}clearSecurityEvents(){this.events=[],this.rateLimitMap.clear(),this.suspiciousActivities.clear(),localStorage.removeItem("critical_security_events"),console.log("🧹 보안 이벤트 기록이 정리되었습니다.")}};ot(pn,"instance");let vn=pn;const Ca={safeLocalStorage:{getItem:n=>{try{const e=vn.getInstance(),{isValid:t,sanitized:r}=e.validateInput(n);return t?localStorage.getItem(r):null}catch{return null}},setItem:(n,e)=>{try{const t=vn.getInstance(),r=t.validateInput(n),s=t.validateInput(e);return!r.isValid||!s.isValid?!1:(localStorage.setItem(r.sanitized,s.sanitized),!0)}catch{return!1}}},safeDOMUpdate:(n,e)=>{const t=vn.getInstance(),{isValid:r,sanitized:s}=t.validateInput(e);r&&(n.textContent=s)},checkSecurityHeaders:()=>(console.log("🔍 보안 헤더 체크가 필요합니다."),!0),createSafeURL:(n,e)=>{try{const t=new URL(n),r=vn.getInstance();return Object.entries(e).forEach(([s,i])=>{const a=r.validateInput(s),c=r.validateInput(i);a.isValid&&c.isValid&&t.searchParams.append(a.sanitized,c.sanitized)}),t.toString()}catch{return n}}},G=vn.getInstance();if(typeof window<"u"){window.addEventListener("securitypolicyviolation",t=>{G.logSecurityEvent({type:"xss_attempt",timestamp:Date.now(),details:{violatedDirective:t.violatedDirective,blockedURI:t.blockedURI,originalPolicy:t.originalPolicy},severity:"critical"})});let n={open:!1,orientation:null};const e=160;setInterval(()=>{window.outerHeight-window.innerHeight>e||window.outerWidth-window.innerWidth>e?n.open||(n.open=!0,console.warn("🔍 개발자 도구가 열렸습니다.")):n.open=!1},500),"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()}const hn={algorithm:"AES-GCM",keyLength:256,ivLength:12,tagLength:16},mn=class mn{constructor(){ot(this,"masterKey",null);ot(this,"userPassphrase",null)}static getInstance(){return mn.instance||(mn.instance=new mn),mn.instance}async initializeMasterKey(e,t){try{const r=t||"default_secure_passphrase_2025";this.userPassphrase=`${e}:${r}:${Date.now().toString().slice(0,8)}`;const s=new TextEncoder,i=await crypto.subtle.importKey("raw",s.encode(this.userPassphrase),"PBKDF2",!1,["deriveBits","deriveKey"]),a=s.encode(`${e}_salt_2025`);return this.masterKey=await crypto.subtle.deriveKey({name:"PBKDF2",salt:a,iterations:1e5,hash:"SHA-256"},i,{name:hn.algorithm,length:hn.keyLength},!1,["encrypt","decrypt"]),console.log("🔐 클라이언트 사이드 암호화 초기화 완료"),!0}catch(r){return console.error("❌ 마스터 키 초기화 실패:",r),!1}}async encryptData(e){try{if(!this.masterKey)throw new Error("Master key not initialized");if(!G.checkRateLimit("client_encrypt",50,6e4))throw new Error("Encryption rate limit exceeded");const t=JSON.stringify(e),s=new TextEncoder().encode(t),i=crypto.getRandomValues(new Uint8Array(hn.ivLength)),a=crypto.getRandomValues(new Uint8Array(16)),c=await crypto.subtle.encrypt({name:hn.algorithm,iv:i},this.masterKey,s),u={data:this.bufferToBase64(c),iv:this.bufferToBase64(i),salt:this.bufferToBase64(a),keyDerivation:{algorithm:"PBKDF2",iterations:1e5},timestamp:Date.now(),version:"1.0.0"};return console.log("🔒 데이터 암호화 완료 (클라이언트 사이드)"),u}catch(t){return console.error("❌ 클라이언트 사이드 암호화 실패:",t),null}}async decryptData(e){try{if(!this.masterKey)return{success:!1,error:"Master key not initialized"};if(!G.checkRateLimit("client_decrypt",100,6e4))return{success:!1,error:"Decryption rate limit exceeded"};const t=this.base64ToBuffer(e.data),r=this.base64ToBuffer(e.iv),s=await crypto.subtle.decrypt({name:hn.algorithm,iv:r},this.masterKey,t),a=new TextDecoder().decode(s),c=JSON.parse(a);return console.log("🔓 데이터 복호화 완료 (클라이언트 사이드)"),{success:!0,data:c}}catch(t){return console.error("❌ 클라이언트 사이드 복호화 실패:",t),{success:!1,error:(t==null?void 0:t.message)||"Decryption failed"}}}async secureStore(e,t){try{const r=await this.encryptData(t);return r?(localStorage.setItem(`encrypted_${e}`,JSON.stringify(r)),console.log(`🛡️ 안전한 데이터 저장 완료: ${e}`),!0):!1}catch(r){return console.error("❌ 안전한 데이터 저장 실패:",r),!1}}async secureLoad(e){try{const t=localStorage.getItem(`encrypted_${e}`);if(!t)return null;const r=JSON.parse(t),s=await this.decryptData(r);return s.success?(console.log(`🔍 안전한 데이터 로드 완료: ${e}`),s.data):null}catch(t){return console.error("❌ 안전한 데이터 로드 실패:",t),null}}clearEncryptionSession(){this.masterKey=null,this.userPassphrase=null;const e=[];for(let t=0;t<localStorage.length;t++){const r=localStorage.key(t);r!=null&&r.startsWith("encrypted_")&&e.push(r)}e.forEach(t=>localStorage.removeItem(t)),console.log("🧹 암호화 세션 정리 완료")}isEncryptionReady(){return this.masterKey!==null}bufferToBase64(e){const t=new Uint8Array(e);let r="";for(let s=0;s<t.byteLength;s++)r+=String.fromCharCode(t[s]);return btoa(r)}base64ToBuffer(e){const t=atob(e),r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r.buffer}getEncryptionStats(){return{isReady:this.isEncryptionReady(),algorithm:hn.algorithm,keyLength:hn.keyLength,version:"1.0.0"}}};ot(mn,"instance");let Pa=mn;const Bn=Pa.getInstance(),At={async saveEncrypted(n,e){return await Bn.secureStore(n,e)},async loadEncrypted(n){return await Bn.secureLoad(n)},async initForUser(n,e){return await Bn.initializeMasterKey(n,e)},cleanup(){Bn.clearEncryptionSession()},isReady(){return Bn.isEncryptionReady()},getStats(){return Bn.getEncryptionStats()}},Xo={apiKey:"AIzaSyD0T3knqD57-69U4rKsZ1f-Nb1Kd6Rf5a0",authDomain:"my-personnal-penguin.firebaseapp.com",projectId:"my-personnal-penguin",storageBucket:"my-personnal-penguin.firebasestorage.app",messagingSenderId:"278702130293",appId:"1:278702130293:web:cd7dad08ee5cd6b183243c"};let _t,$n=!1;if(typeof window<"u"&&!window.__FIREBASE_INITIALIZED__)try{const n=zo();n.length>0?(_t=n[0],console.log("🔄 기존 Firebase 앱 재사용")):(_t=Ks(Xo),console.log("🆕 새 Firebase 앱 초기화")),window.__FIREBASE_INITIALIZED__=!0,$n=!0}catch(n){console.warn("⚠️ Firebase 초기화 중 에러:",n.message);try{_t=Fr(),console.log("🔄 기존 Firebase 앱으로 대체"),$n=!0}catch(e){console.error("❌ Firebase 앱 초기화 완전 실패:",e);try{_t=Ks(Xo,"secondary-"+Date.now()),console.log("🚨 보조 Firebase 앱 생성"),$n=!0}catch{throw console.error("💥 모든 Firebase 초기화 시도 실패"),new Error("Firebase 초기화에 완전히 실패했습니다.")}}}else if(typeof window<"u"&&window.__FIREBASE_INITIALIZED__){const n=zo();_t=n.length>0?n[0]:Fr(),console.log("♻️ 이미 초기화된 Firebase 앱 사용"),$n=!0}else try{_t=Ks(Xo),$n=!0}catch{const e=zo();_t=e.length>0?e[0]:Fr(),$n=!0}const we=xw(_t),uo=U0(_t),$0=new vt,Ae=async(n,e,t)=>{try{if(!G.checkRateLimit(`saveUserData_${n}`,50,6e4))throw new Error("Rate limit exceeded. Please try again later.");G.detectSuspiciousActivity(n,`save_${e}`)&&console.warn("🚨 의심스러운 저장 활동 탐지:",n,e);const r=G.validateInput(n),s=G.validateInput(e);if(!r.isValid||!s.isValid)throw new Error("Invalid input parameters");if(JSON.stringify(t).length>10*1024*1024)throw new Error("Data size exceeds limit (10MB)");const a=new Set(["epics","projects","projectTodos"]);let c=t,u=At.isReady()&&!a.has(s.sanitized);u?await At.saveEncrypted(`${n}_${e}`,t)&&(c={encrypted:!0,data:await At.loadEncrypted(`${n}_${e}`),encryptedAt:new Date().toISOString(),encryptionVersion:"1.0.0"},console.log("🔐 데이터 암호화 적용됨 (관리자도 볼 수 없음)")):(typeof t=="object"&&t!==null&&(c=ka(t)),console.log("📄 암호화 없이 저장 (기기간 동기화용)"));const h=He(we,"users",r.sanitized,"data",s.sanitized);return await Ac(h,{data:c,lastUpdated:oe.now(),version:1,checksum:fp(c),encrypted:u}),console.log(`✅ 보안 검증 완료 - 데이터 저장 성공: ${e}`),{success:!0}}catch(r){return console.error(`❌ 보안 검증 실패 - 데이터 저장 실패: ${e}`,r),r.message.includes("Rate limit")||r.message.includes("Invalid input")||console.error("🚨 예상치 못한 저장 오류:",r),{success:!1,error:r}}},ii=async(n,e)=>{try{if(!G.checkRateLimit(`loadUserData_${n}`,100,6e4))throw new Error("Rate limit exceeded. Please try again later.");const t=G.validateInput(n),r=G.validateInput(e);if(!t.isValid||!r.isValid)throw new Error("Invalid input parameters");const s=He(we,"users",t.sanitized,"data",r.sanitized),i=await so(s);if(i.exists()){const a=i.data();let c=a.data;if(a.encrypted&&At.isReady()){const u=await At.loadEncrypted(`${n}_${e}`);if(u)c=u,console.log("🔓 데이터 복호화 완료 (클라이언트 사이드)");else return console.warn("⚠️ 복호화 실패 - 암호화 키가 없거나 손상됨"),{success:!1,error:"Decryption failed - encryption key not available"}}else console.log("📄 암호화되지 않은 데이터 로드");if(a.checksum&&a.data){const u=fp(a.data);a.checksum!==u&&console.warn("🚨 데이터 무결성 검증 실패:",e)}return{success:!0,data:c}}else return{success:!0,data:null}}catch(t){return console.error(`❌ 보안 검증 실패 - 데이터 로드 실패: ${e}`,t),{success:!1,error:t}}},lA=async(n,e)=>{try{if(!G.checkRateLimit(`savePomodoroSession_${n}`,30,6e4))throw new Error("Rate limit exceeded. Please try again later.");G.detectSuspiciousActivity(n,"save_pomodoro_session")&&console.warn("🚨 의심스러운 세션 저장 활동 탐지:",n);const t=G.validateInput(n);if(!t.isValid)throw new Error("Invalid user ID");const r={...e,projectTitle:G.validateInput(e.projectTitle||"").sanitized,taskTitle:G.validateInput(e.taskTitle||"").sanitized,sessionType:G.validateInput(e.sessionType||"").sanitized,timestamp:oe.now(),userAgent:navigator.userAgent.substring(0,200)},s=xt(we,"users",t.sanitized,"pomodoroSessions");return await bc(s,r),console.log("✅ 보안 검증 완료 - 뽀모도로 세션 저장 성공"),{success:!0}}catch(t){return console.error("❌ 보안 검증 실패 - 뽀모도로 세션 저장 실패",t),{success:!1,error:t}}},uA=async(n,e,t)=>{try{if(!G.checkRateLimit("updateAccessRequest",20,6e4))throw new Error("Rate limit exceeded. Please try again later.");const r=G.validateInput(n),s=G.validateInput(e);if(!r.isValid||!s.isValid)throw new Error("Invalid input parameters");if(!["approved","rejected"].includes(s.sanitized))throw new Error("Invalid status value");const i={status:s.sanitized,updatedAt:oe.now(),adminUserAgent:navigator.userAgent.substring(0,200)};if(t){const c=G.validateInput(t);c.isValid&&(i.adminResponse=c.sanitized)}const a=He(we,"accessRequests",r.sanitized);return await io(a,i),console.log("✅ 보안 검증 완료 - 접근 요청 업데이트 성공"),{success:!0}}catch(r){return console.error("❌ 보안 검증 실패 - 접근 요청 업데이트 실패",r),{success:!1,error:r}}};function ka(n){if(n==null)return n;if(Array.isArray(n))return n.map(e=>ka(e));if(typeof n=="object"){const e={};for(const[t,r]of Object.entries(n)){const s=G.validateInput(t);if(s.isValid)if(typeof r=="string"){const i=G.validateInput(r);e[s.sanitized]=i.sanitized}else e[s.sanitized]=ka(r)}return e}return typeof n=="string"?G.validateInput(n).sanitized:n}function fp(n){const e=JSON.stringify(n);let t=0;for(let r=0;r<e.length;r++){const s=e.charCodeAt(r);t=(t<<5)-t+s,t=t&t}return t.toString(16)}const z0=async()=>{try{if(!G.checkRateLimit("signInWithGoogle",5,3e5))throw new Error("Too many login attempts. Please try again later.");const e=(await QI(uo,$0)).user;return console.log("✅ 보안 검증 완료 - Google 로그인 성공:",e.email),{success:!0,user:e}}catch(n){return console.error("❌ Google 로그인 실패:",n),{success:!1,error:n}}},q0=async()=>{try{return await CI(uo),G.clearSecurityEvents(),localStorage.removeItem("csrf_token"),console.log("✅ 보안 정리 완료 - 로그아웃 성공"),{success:!0}}catch(n){return console.error("❌ 로그아웃 실패:",n),{success:!1,error:n}}},Je=()=>{const n=uo.currentUser;if(n){const e=Ca.safeLocalStorage.getItem("last_activity"),t=Date.now().toString();e&&parseInt(t)-parseInt(e)>24*60*60*1e3&&console.warn("🚨 장시간 미사용 세션 감지"),Ca.safeLocalStorage.setItem("last_activity",t)}return n},W0=n=>xI(uo,async e=>{if(e){if(G.generateCSRFToken(),await At.initForUser(e.email||e.uid)){console.log("🔐 End-to-End 암호화 활성화 - 관리자도 데이터를 볼 수 없습니다");try{const r=await Q0(e.uid);r.success&&r.migrated>0&&console.log(`🎉 기존 데이터 ${r.migrated}개 타입 암호화 완료!`)}catch(r){console.warn("⚠️ 기존 데이터 마이그레이션 건너뛰기:",r)}}else console.warn("⚠️ 암호화 초기화 실패 - 데이터가 암호화되지 않을 수 있습니다");console.log("🛡️ 보안 시스템 활성화:",e.email)}else G.clearSecurityEvents(),localStorage.removeItem("csrf_token"),localStorage.removeItem("last_activity"),At.cleanup(),console.log("🧹 암호화 세션 정리 완료");n(e)}),hA=()=>({stats:G.getSecurityStats(),criticalEvents:JSON.parse(localStorage.getItem("critical_security_events")||"[]"),lastActivity:Ca.safeLocalStorage.getItem("last_activity"),csrfToken:localStorage.getItem("csrf_token")?"토큰 활성화":"토큰 없음"});typeof window<"u"&&(console.log("🛡️ Firebase 보안 시스템 초기화 완료"),window.addEventListener("load",()=>{const n=G.getSecurityStats();n.criticalEvents>0&&console.warn(`🚨 ${n.criticalEvents}개의 심각한 보안 이벤트가 기록되어 있습니다.`)}));const Ri=n=>n==="sbseok12@gmail.com",pp=async n=>{try{if(!G.checkRateLimit("saveAccessRequest",5,3e5))throw new Error("Too many access requests. Please try again later.");const e=G.validateInput(n.email,"email"),t=G.validateInput(n.displayName);if(!e.isValid||!t.isValid)throw new Error("Invalid input parameters");const r={email:e.sanitized,displayName:t.sanitized,photoURL:n.photoURL?G.validateInput(n.photoURL,"url").sanitized:void 0,reason:n.reason?G.validateInput(n.reason).sanitized:void 0},s=He(we,"accessRequests",r.email.replace(".","_"));return await Ac(s,{...r,status:"pending",requestedAt:oe.now(),userAgent:navigator.userAgent.substring(0,200)}),console.log("✅ 보안 검증 완료 - 접근 신청 저장 성공"),{success:!0}}catch(e){return console.error("❌ 보안 검증 실패 - 접근 신청 저장 실패:",e),{success:!1,error:e}}},dA=async()=>{try{if(!G.checkRateLimit("getAccessRequests",20,6e4))throw new Error("Rate limit exceeded. Please try again later.");const n=xt(we,"accessRequests"),t=(await or(n)).docs.map(r=>({id:r.id,...r.data()}));return console.log("✅ 보안 검증 완료 - 접근 신청 목록 조회 성공"),{success:!0,data:t}}catch(n){return console.error("❌ 보안 검증 실패 - 접근 신청 조회 실패:",n),{success:!1,error:n}}},H0=async n=>{if(!n)return{status:"not_found"};if(n==="sbseok12@gmail.com")return{status:"approved"};try{if(!G.checkRateLimit(`getUserAccessStatus_${n}`,30,6e4))throw new Error("Rate limit exceeded. Please try again later.");const e=G.validateInput(n,"email");if(!e.isValid)return{status:"not_found"};const t=He(we,"accessRequests",e.sanitized.replace(".","_")),r=await so(t);if(r.exists()){const s=r.data();return{status:s.status,data:s}}return{status:"not_found"}}catch(e){return console.error("❌ 사용자 접근 상태 확인 실패:",e),{status:"not_found"}}},G0=q0,K0=async(n,e,t)=>{try{if(!G.checkRateLimit(`loadPomodoroSessions_${n}`,50,6e4))throw new Error("Rate limit exceeded. Please try again later.");const r=G.validateInput(n);if(!r.isValid)throw new Error("Invalid user ID");const s=xt(we,"users",r.sanitized,"pomodoroSessions");let i=Gt(s,Df("startTime","desc"));if(e){const u=G.validateInput(e);u.isValid&&(i=Gt(s,Et("startTime",">=",u.sanitized+"T00:00:00.000Z")))}if(t){const u=G.validateInput(t);u.isValid&&(i=Gt(s,Et("startTime","<=",u.sanitized+"T23:59:59.999Z")))}const a=await or(i),c=[];return a.forEach(u=>{const h=u.data();c.push({...h,id:u.id})}),console.log(`✅ 보안 검증 완료 - 뽀모도로 세션 조회 성공: ${c.length}개`),{success:!0,data:c}}catch(r){return console.error("❌ 보안 검증 실패 - 뽀모도로 세션 조회 실패:",r),{success:!1,error:r}}},fA=async(n,e,t)=>{try{if(!G.checkRateLimit(`updatePomodoroSession_${n}`,20,6e4))throw new Error("Rate limit exceeded. Please try again later.");const r=G.validateInput(n),s=G.validateInput(e);if(!r.isValid||!s.isValid)throw new Error("Invalid parameters");const i=He(we,"users",r.sanitized,"pomodoroSessions",s.sanitized),a={...t,updatedAt:oe.now()};return await io(i,a),console.log("✅ 보안 검증 완료 - 뽀모도로 세션 업데이트 성공"),{success:!0}}catch(r){return console.error("❌ 보안 검증 실패 - 뽀모도로 세션 업데이트 실패:",r),{success:!1,error:r}}},pA=async(n,e)=>{try{if(!G.checkRateLimit(`getWeeklyPomodoroStats_${n}`,30,6e4))throw new Error("Rate limit exceeded. Please try again later.");const t=new Date(e),r=new Date(t);r.setDate(r.getDate()+6);const s=e,i=r.toISOString().split("T")[0],a=await K0(n,s,i);if(!a.success||!a.data)return{success:!1,error:a.error};const c=a.data.filter(m=>m.completed),u={weekStart:s,weekEnd:i,totalSessions:c.length,workSessions:c.filter(m=>m.sessionType==="work").length,breakSessions:c.filter(m=>m.sessionType==="break").length,totalMinutes:c.reduce((m,_)=>m+(_.duration||0),0),projectBreakdown:[],dailyBreakdown:[]},h={};c.forEach(m=>{h[m.projectId]||(h[m.projectId]=[]),h[m.projectId].push(m)}),u.projectBreakdown=Object.entries(h).map(([m,_])=>{var b;return{projectId:m,projectTitle:((b=_[0])==null?void 0:b.projectTitle)||"Unknown",sessions:_.length,minutes:_.reduce((P,x)=>P+(x.duration||0),0)}});const f={};return c.forEach(m=>{var b;const _=((b=m.startTime)==null?void 0:b.split("T")[0])||new Date().toISOString().split("T")[0];f[_]||(f[_]=[]),f[_].push(m)}),u.dailyBreakdown=Object.entries(f).map(([m,_])=>({date:m,sessions:_.length,minutes:_.reduce((b,P)=>b+(P.duration||0),0)})).sort((m,_)=>m.date.localeCompare(_.date)),console.log("✅ 보안 검증 완료 - 주차별 뽀모도로 통계 생성 성공"),{success:!0,data:u}}catch(t){return console.error("❌ 보안 검증 실패 - 주차별 뽀모도로 통계 생성 실패:",t),{success:!1,error:t}}},mA=async(n,e)=>{try{if(!G.checkRateLimit(`deletePomodoroSession_${n}`,10,6e4))throw new Error("Rate limit exceeded. Please try again later.");const t=G.validateInput(n),r=G.validateInput(e);if(!t.isValid||!r.isValid)throw new Error("Invalid parameters");const s=He(we,"users",t.sanitized,"pomodoroSessions",r.sanitized);return await Of(s),console.log("✅ 보안 검증 완료 - 뽀모도로 세션 삭제 성공"),{success:!0}}catch(t){return console.error("❌ 보안 검증 실패 - 뽀모도로 세션 삭제 실패:",t),{success:!1,error:t}}},Q0=async n=>{try{if(!At.isReady())throw new Error("Encryption not initialized");console.log("🔄 기존 데이터 암호화 마이그레이션 시작...");let e=0;const t=["todos","projects","epics","pomodoroSessions","settings"];for(const r of t)try{const s=He(we,"users",n,"data",r),i=await so(s);if(i.exists()){const a=i.data();if(a.encrypted){console.log(`✅ ${r} 이미 암호화됨 - 건너뛰기`);continue}(await Ae(n,r,a.data)).success&&(e++,console.log(`🔐 ${r} 암호화 마이그레이션 완료`))}}catch(s){console.warn(`⚠️ ${r} 마이그레이션 실패:`,s)}return console.log(`🎉 마이그레이션 완료! ${e}개 데이터 타입 암호화됨`),{success:!0,migrated:e}}catch(e){return console.error("❌ 데이터 마이그레이션 실패:",e),{success:!1,migrated:0,error:e}}},gA=async(n,e="json")=>{try{if(!At.isReady())throw new Error("Encryption not initialized - cannot decrypt data for export");console.log("📊 사용자 데이터 내보내기 시작...");const t={exportedAt:new Date().toISOString(),userId:n,data:{}},r=["todos","projects","epics","pomodoroSessions","settings"];for(const a of r)try{const c=await ii(n,a);c.success&&c.data&&(t.data[a]=c.data,console.log(`✅ ${a} 데이터 수집 완료`))}catch(c){console.warn(`⚠️ ${a} 수집 실패:`,c)}const i=`penguin_data_${new Date().toISOString().split("T")[0]}.${e}`;return e==="json"?{success:!0,data:JSON.stringify(t,null,2),filename:i}:{success:!0,data:J0(t),filename:i.replace(".csv",".csv")}}catch(t){return console.error("❌ 데이터 내보내기 실패:",t),{success:!1,error:t}}};function J0(n){const e=[];return e.push("Type,ID,Title,Description,CreatedAt,Status"),Object.entries(n.data).forEach(([t,r])=>{Array.isArray(r)&&r.forEach((s,i)=>{const a=[t,s.id||i.toString(),s.title||s.name||"",s.description||"",s.createdAt||s.timestamp||"",s.status||s.completed||""].map(c=>`"${String(c).replace(/"/g,'""')}"`);e.push(a.join(","))})}),e.join(`
`)}const Y0=async()=>{try{const n=He(we,"system","maintenance"),e=await so(n);if(e.exists()){const t=e.data();return{isMaintenanceMode:t.enabled||!1,message:t.message||"시스템 점검 중입니다. 잠시 후 다시 이용해주세요."}}return{isMaintenanceMode:!1}}catch(n){return console.error("❌ 점검 상태 확인 실패:",n),{isMaintenanceMode:!1,error:n}}},yA=async(n,e)=>{try{const t=Je();if(!t||!Ri(t.email))throw new Error("Unauthorized: Admin access required");const r=He(we,"system","maintenance");return await Ac(r,{enabled:n,message:e||"시스템 점검 중입니다. 잠시 후 다시 이용해주세요.",updatedAt:oe.now(),updatedBy:t.email}),console.log(`🚧 점검 모드 ${n?"활성화":"비활성화"} 완료`),{success:!0}}catch(t){return console.error("❌ 점검 모드 설정 실패:",t),{success:!1,error:t}}},is={_origin:"https://api.emailjs.com"},X0=(n,e="https://api.emailjs.com")=>{is._userID=n,is._origin=e},mp=(n,e,t)=>{if(!n)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!t)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class xh{constructor(e){this.status=e.status,this.text=e.responseText}}const gp=(n,e,t={})=>new Promise((r,s)=>{const i=new XMLHttpRequest;i.addEventListener("load",({target:a})=>{const c=new xh(a);c.status===200||c.text==="OK"?r(c):s(c)}),i.addEventListener("error",({target:a})=>{s(new xh(a))}),i.open("POST",is._origin+n,!0),Object.keys(t).forEach(a=>{i.setRequestHeader(a,t[a])}),i.send(e)}),Z0=(n,e,t,r)=>{const s=r||is._userID;return mp(s,n,e),gp("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:s,service_id:n,template_id:e,template_params:t}),{"Content-type":"application/json"})},eT=n=>{let e;if(typeof n=="string"?e=document.querySelector(n):e=n,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},tT=(n,e,t,r)=>{const s=r||is._userID,i=eT(t);mp(s,n,e);const a=new FormData(i);return a.append("lib_version","3.2.0"),a.append("service_id",n),a.append("template_id",e),a.append("user_id",s),gp("/api/v1.0/email/send-form",a)},yp={init:X0,send:Z0,sendForm:tT},ho=xt(we,"feedback"),qr={serviceId:"service_feedback",templateId:"template_feedback",publicKey:"your_public_key"},nT=async(n,e)=>{var t;try{const r={...e,userEmail:n.email??"",userDisplayName:n.displayName??((t=n.email)==null?void 0:t.split("@")[0])??"Anonymous",createdAt:Sc(),status:"pending"},s=await bc(ho,r);try{await yp.send(qr.serviceId,qr.templateId,{to_email:"sbseok12@gmail.com",from_name:r.userDisplayName,from_email:r.userEmail,feedback_type:e.type,feedback_title:e.title,feedback_description:e.description,feedback_priority:e.priority,feedback_id:s.id,created_at:new Date().toLocaleString("ko-KR")},qr.publicKey),console.log("✅ 피드백 이메일 발송 성공")}catch(i){console.warn("⚠️ 이메일 발송 실패 (피드백은 저장됨):",i)}return{success:!0,id:s.id,message:"피드백이 성공적으로 제출되었습니다! 관리자가 검토 후 답변드릴게요 😊"}}catch(r){return console.error("피드백 제출 실패:",r),{success:!1,message:"피드백 제출 중 오류가 발생했습니다. 다시 시도해주세요."}}},_A=n=>{const e=Gt(ho,Df("createdAt","desc"));return Uw(e,t=>{const r=[];t.forEach(s=>{r.push({id:s.id,...s.data()})}),n(r)},t=>{console.error("피드백 구독 실패:",t),n([])})},vA=n=>{const e={total:n.length,pending:0,inProgress:0,completed:0,rejected:0,byType:{},byPriority:{}};return n.forEach(t=>{switch(t.status){case"pending":e.pending++;break;case"in-progress":e.inProgress++;break;case"completed":e.completed++;break;case"rejected":e.rejected++;break}e.byType[t.type]=(e.byType[t.type]??0)+1,e.byPriority[t.priority]=(e.byPriority[t.priority]??0)+1}),e},EA=async(n,e,t)=>{try{const r=He(ho,n),s={status:e,updatedAt:Sc()};return t&&(s.adminResponse=t),await io(r,s),{success:!0,message:"피드백 상태가 업데이트되었습니다."}}catch(r){return console.error("피드백 상태 업데이트 실패:",r),{success:!1,message:"상태 업데이트 중 오류가 발생했습니다."}}},wA=async n=>{try{return await Of(He(ho,n)),{success:!0,message:"피드백이 삭제되었습니다."}}catch(e){return console.error("피드백 삭제 실패:",e),{success:!1,message:"삭제 중 오류가 발생했습니다."}}},IA=async(n,e)=>{try{return await yp.send(qr.serviceId,"template_admin_response",{to_email:n.userEmail,to_name:n.userDisplayName,feedback_title:n.title,admin_response:e,feedback_status:n.status,response_date:new Date().toLocaleString("ko-KR")},qr.publicKey),{success:!0,message:"응답 이메일이 발송되었습니다."}}catch(t){return console.error("관리자 응답 이메일 발송 실패:",t),{success:!1,message:"이메일 발송 중 오류가 발생했습니다."}}},rT=n=>({bug:"🐛",feature:"✨",improvement:"🔧",question:"❓",other:"💬"})[n],Gs=n=>({low:"#4caf50",medium:"#ff9800",high:"#f44336",urgent:"#9c27b0"})[n],TA=n=>({pending:"#757575","in-progress":"#2196f3",completed:"#4caf50",rejected:"#f44336"})[n],sT=({open:n,onClose:e,user:t})=>{const[r,s]=k.useState({type:"feature",title:"",description:"",priority:"medium"}),[i,a]=k.useState(!1),[c,u]=k.useState(!1),[h,f]=k.useState(""),m=()=>{s({type:"feature",title:"",description:"",priority:"medium"}),u(!1),f("")},_=()=>{i||(m(),e())},b=async()=>{if(!r.title.trim()){f("제목을 입력해주세요.");return}if(!r.description.trim()){f("내용을 입력해주세요.");return}a(!0),f("");try{const A=await nT(t,r);A.success?(u(!0),setTimeout(()=>{_()},2e3)):f(A.message)}catch{f("피드백 제출 중 오류가 발생했습니다.")}finally{a(!1)}},P=A=>({bug:p.jsx(cm,{}),feature:p.jsx(lm,{}),improvement:p.jsx(um,{}),question:p.jsx(hm,{}),other:p.jsx(dm,{})})[A],x=A=>({bug:"버그나 오류를 신고해주세요",feature:"새로운 기능을 제안해주세요",improvement:"기존 기능의 개선사항을 알려주세요",question:"궁금한 점이나 사용법을 문의해주세요",other:"기타 의견이나 제안사항을 남겨주세요"})[A];return p.jsxs(xi,{open:n,onClose:_,maxWidth:"md",fullWidth:!0,PaperProps:{sx:{borderRadius:3,maxHeight:"90vh"}},children:[p.jsxs(Ci,{sx:{pb:1},children:[p.jsx(q,{sx:{display:"flex",alignItems:"center",gap:1},children:p.jsx($,{variant:"h5",component:"div",sx:{fontWeight:"bold"},children:"💬 피드백 보내기"})}),p.jsx($,{variant:"body2",color:"text.secondary",sx:{mt:1},children:"관리자에게 의견을 전달하고 더 나은 서비스를 만들어가요! ✨"})]}),p.jsx(Pi,{sx:{pt:2},children:c?p.jsxs(q,{sx:{textAlign:"center",py:4},children:[p.jsx($,{variant:"h4",sx:{mb:2},children:"🎉"}),p.jsx($,{variant:"h6",gutterBottom:!0,children:"피드백이 성공적으로 전송되었습니다!"}),p.jsx($,{color:"text.secondary",children:"관리자가 검토 후 답변드릴게요. 감사합니다! 😊"})]}):p.jsxs(q,{sx:{display:"flex",flexDirection:"column",gap:3},children:[h&&p.jsx(Yn,{severity:"error",sx:{borderRadius:2},children:h}),p.jsxs(q,{children:[p.jsx($,{variant:"subtitle1",gutterBottom:!0,sx:{fontWeight:"bold"},children:"📝 피드백 유형"}),p.jsx(jl,{container:!0,spacing:1,children:["bug","feature","improvement","question","other"].map(A=>p.jsx(jl,{item:!0,children:p.jsx(Ph,{icon:P(A),label:`${rT(A)} ${A==="bug"?"버그":A==="feature"?"기능":A==="improvement"?"개선":A==="question"?"질문":"기타"}`,onClick:()=>s({...r,type:A}),color:r.type===A?"primary":"default",variant:r.type===A?"filled":"outlined",sx:{cursor:"pointer","&:hover":{backgroundColor:r.type===A?void 0:"rgba(25, 118, 210, 0.04)"}}})},A))}),p.jsx($,{variant:"caption",color:"text.secondary",sx:{mt:1,display:"block"},children:x(r.type)})]}),p.jsxs(im,{fullWidth:!0,children:[p.jsx(om,{children:"🚨 우선순위"}),p.jsxs(am,{value:r.priority,label:"🚨 우선순위",onChange:A=>s({...r,priority:A.target.value}),children:[p.jsx(gn,{value:"low",children:p.jsxs(q,{sx:{display:"flex",alignItems:"center",gap:1},children:[p.jsx(q,{sx:{width:12,height:12,borderRadius:"50%",backgroundColor:Gs("low")}}),"낮음 - 여유가 있을 때 확인해주세요"]})}),p.jsx(gn,{value:"medium",children:p.jsxs(q,{sx:{display:"flex",alignItems:"center",gap:1},children:[p.jsx(q,{sx:{width:12,height:12,borderRadius:"50%",backgroundColor:Gs("medium")}}),"보통 - 일반적인 우선순위"]})}),p.jsx(gn,{value:"high",children:p.jsxs(q,{sx:{display:"flex",alignItems:"center",gap:1},children:[p.jsx(q,{sx:{width:12,height:12,borderRadius:"50%",backgroundColor:Gs("high")}}),"높음 - 빠른 확인이 필요해요"]})}),p.jsx(gn,{value:"urgent",children:p.jsxs(q,{sx:{display:"flex",alignItems:"center",gap:1},children:[p.jsx(q,{sx:{width:12,height:12,borderRadius:"50%",backgroundColor:Gs("urgent")}}),"긴급 - 즉시 확인이 필요해요!"]})})]})]}),p.jsx(oi,{fullWidth:!0,label:"📋 제목",placeholder:"피드백의 제목을 간단히 입력해주세요",value:r.title,onChange:A=>s({...r,title:A.target.value}),variant:"outlined",inputProps:{maxLength:100},helperText:`${r.title.length}/100`}),p.jsx(oi,{fullWidth:!0,multiline:!0,rows:6,label:"📝 상세 내용",placeholder:r.type==="bug"?`어떤 상황에서 버그가 발생했나요?
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
관리자가 확인 후 답변드릴게요 😊`,value:r.description,onChange:A=>s({...r,description:A.target.value}),variant:"outlined",inputProps:{maxLength:1e3},helperText:`${r.description.length}/1000`}),p.jsx(Yn,{severity:"info",sx:{borderRadius:2},children:p.jsxs($,{variant:"body2",children:[p.jsx("strong",{children:"💡 알아두세요!"}),p.jsx("br",{}),"• 피드백은 관리자 이메일(sbseok12@gmail.com)로도 자동 발송됩니다",p.jsx("br",{}),"• 관리자 페이지에서도 실시간으로 확인할 수 있어요",p.jsx("br",{}),"• 답변이 필요한 경우 이메일로 회신해드릴게요"]})})]})}),p.jsx(ki,{sx:{p:3,pt:1},children:c?p.jsx(je,{onClick:_,variant:"contained",fullWidth:!0,children:"닫기"}):p.jsxs(p.Fragment,{children:[p.jsx(je,{onClick:_,disabled:i,sx:{minWidth:100},children:"취소"}),p.jsx(je,{onClick:b,variant:"contained",disabled:i||!r.title.trim()||!r.description.trim(),startIcon:i?p.jsx(An,{size:16}):p.jsx(Va,{}),sx:{minWidth:120},children:i?"전송 중...":"피드백 보내기"})]})})]})},iT={background:{primary:"#f5f5f5",secondary:"#ffffff",pattern:`url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='20' height='20' fill='%23f5f5f5'/%3E%3C/svg%3E")`,gradient:"linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)"},border:{color:"#cccccc",shadow:"0 2px 8px rgba(0,0,0,0.1)"},path:{color:"rgba(128,128,128,0.3)",opacity:.5}},oT={blocks:{emoji:"⬜",type:"블록",collectName:"아이템"},building:{name:"구조물",description:"기본 구조물",completionMessage:"완성되었습니다!"},collectInterval:30,maxBlocks:25,progressPerBlock:4},aT={animal:{speed:.5,radius:35,bounceHeight:.1},blocks:{popDuration:"0.3s",arrangement:"tower",spacing:{horizontal:20,vertical:15}}},_p={id:"penguin",name:"뒤뚱",emoji:"🐧",description:"차가운 빙하와 남극의 평온함",colors:{light:{primary:"#2196F3",primaryLight:"#64B5F6",primaryDark:"#1976D2",secondary:"#03DAC6",secondaryLight:"#66FFF9",secondaryDark:"#00BCD4",background:"#E9F5FF",paper:"#FFFFFF",info:"#2196F3",success:"#4CAF50",warning:"#FF9800",error:"#F44336"},dark:{primary:"#90CAF9",primaryLight:"#BBDEFB",primaryDark:"#42A5F5",secondary:"#80DEEA",secondaryLight:"#B2EBF2",secondaryDark:"#4DD0E1",background:"#0B1116",paper:"#121A22",info:"#2196F3",success:"#4CAF50",warning:"#FF9800",error:"#F44336"}},concepts:{loading:"펭귄이 빙하를 준비하는 중이에요...",welcome:"남극 빙하 기지에 온 것을 환영해요!",appName:"펭귄 비서",appDescription:"차가운 빙하에서 따뜻한 도움을 드리는 펭귄 비서입니다",environment:"남극의 차가운 빙하 🧊",animal:"펭귄",greeting:"안녕하세요! 오늘도 빙하에서 멋진 하루 보내세요!",farewell:"빙하에서 따뜻한 하루 되세요!",baseTitle:"🏔️ 빙하 기지",baseWelcome:"펭귄 비서의 빙하 기지에 오신 것을 환영해요!",liveView:"🐧 빙하 라이브 뷰",liveViewDescription:"우리 펭귄이 빙하에서 무엇을 하고 있는지 확인해보세요! ❄️",quickActions:"빙하 퀵 액션",activeProjects:"진행 중인 탐험",projectStats:"탐험 통계",animalSaying:"펭귄이 말하길",temperatureMoods:{cold:"❄️ 완벽한 빙하 날씨에요!",cool:"🧊 시원한 빙하가 좋아요",mild:"🌨️ 따뜻해져서 조금 이상해요",warm:"☀️ 너무 따뜻해서 걱정이에요",hot:"🔥 빙하가 녹고 있어요!"},projectType:"탐험",projectCreate:"새로운 탐험 시작하기",projectManage:"탐험 관리하기"},ui:{background:{primary:"#E1F0FF",secondary:"#D7ECFF",pattern:`url("data:image/svg+xml,%3Csvg width='64' height='64' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='sea' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0%' stop-color='%23CFE8FF'/%3E%3Cstop offset='100%' stop-color='%2390CAF9'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='64' height='64' fill='url(%23sea)'/%3E%3Cpath d='M0,40 C10,36 22,42 32,38 C42,34 54,38 64,34 L64,64 L0,64 Z' fill='%23E1F5FE'/%3E%3Cpath d='M12,28 L20,16 L28,28 Z' fill='%23FFFFFF' fill-opacity='0.9'/%3E%3Ccircle cx='50' cy='12' r='3' fill='%23E3F2FD'/%3E%3C/svg%3E")`,gradient:"radial-gradient(circle at 20% 20%, #E1F0FF 0%, #CFE8FF 40%, #90CAF9 100%)"},border:{color:"#2196F3",shadow:"inset 0 0 20px rgba(33, 150, 243, 0.25)"},path:{color:"rgba(33, 150, 243, 0.28)",opacity:.5}},game:{blocks:{emoji:"🧊",type:"얼음 블록",collectName:"얼음 블록 수집"},building:{name:"얼음 성",description:"웅장한 얼음 성",completionMessage:"멋진 얼음 성이 완성되었어요! ❄️🏰"},collectInterval:30,maxBlocks:25,progressPerBlock:4},animation:{animal:{speed:.5,radius:35,bounceHeight:.15},blocks:{popDuration:"0.3s",arrangement:"tower",spacing:{horizontal:20,vertical:15}}}},cT={id:"desert-fox",name:"휘리릭",emoji:"🦊",description:"따뜻한 사막과 오아시스의 활기",colors:{light:{primary:"#FF8C00",primaryLight:"#FFB74D",primaryDark:"#F57C00",secondary:"#FFC107",secondaryLight:"#FFEB3B",secondaryDark:"#FF9800",background:"#FFF8E1",paper:"#FFFFFF",info:"#2196F3",success:"#8BC34A",warning:"#FF9800",error:"#F44336"},dark:{primary:"#FFB74D",primaryLight:"#FFCC02",primaryDark:"#FF8F00",secondary:"#FFCC02",secondaryLight:"#FFEB3B",secondaryDark:"#FFC107",background:"#1A1A1A",paper:"#2A2A2A",info:"#2196F3",success:"#8BC34A",warning:"#FF9800",error:"#F44336"}},concepts:{loading:"사막여우가 오아시스를 준비하는 중이에요...",welcome:"따뜻한 사막 오아시스에 온 것을 환영해요!",appName:"사막여우 비서",appDescription:"뜨거운 사막에서 시원한 도움을 드리는 사막여우 비서입니다",environment:"따뜻한 사막과 오아시스 🏜️",animal:"사막여우",greeting:"안녕하세요! 오늘도 사막에서 활기찬 하루 보내세요!",farewell:"사막에서 멋진 하루 되세요!",baseTitle:"🏜️ 사막 오아시스",baseWelcome:"사막여우 비서의 오아시스에 오신 것을 환영해요!",liveView:"🦊 사막 라이브 뷰",liveViewDescription:"우리 사막여우가 오아시스에서 무엇을 하고 있는지 확인해보세요! 🌵",quickActions:"사막 퀵 액션",activeProjects:"진행 중인 모험",projectStats:"모험 통계",animalSaying:"사막여우가 말하길",temperatureMoods:{cold:"🧊 사막에 너무 춥네요",cool:"🌤️ 시원한 사막이 좋아요",mild:"☀️ 완벽한 사막 날씨에요!",warm:"🌵 따뜻한 사막이 최고에요",hot:"🔥 뜨거운 사막도 문제없어요!"},projectType:"모험",projectCreate:"새로운 모험 시작하기",projectManage:"모험 관리하기"},ui:{background:{primary:"#FFF3E0",secondary:"#FFE0B2",pattern:`url("data:image/svg+xml,%3Csvg width='32' height='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='dunes' patternUnits='userSpaceOnUse' width='32' height='32'%3E%3Crect width='32' height='32' fill='%23FFF3E0'/%3E%3Cpath d='M0,24 C8,20 24,28 32,24 L32,32 L0,32 Z' fill='%23FFE0B2'/%3E%3Cpath d='M0,18 C6,14 26,22 32,18' stroke='%23FFCC80' stroke-width='1' fill='none'/%3E%3Ccircle cx='26' cy='6' r='3' fill='%23FFCC02'/%3E%3Cpolygon points='18,20 22,20 20,24' fill='%23CFE8FF'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23dunes)'/%3E%3C/svg%3E")`,gradient:"radial-gradient(circle at 30% 70%, #FFF3E0 0%, #FFE0B2 45%, #FFB74D 100%)"},border:{color:"#FF8F00",shadow:"inset 0 0 20px rgba(255, 143, 0, 0.3)"},path:{color:"rgba(255, 143, 0, 0.3)",opacity:.5}},game:{blocks:{emoji:"🔺",type:"피라미드 블록",collectName:"피라미드 블록 수집"},building:{name:"피라미드",description:"웅장한 사막 피라미드",completionMessage:"멋진 피라미드가 완성되었어요! 🏜️🔺"},collectInterval:30,maxBlocks:25,progressPerBlock:4},animation:{animal:{speed:.5,radius:35,bounceHeight:.1},blocks:{popDuration:"0.3s",arrangement:"pyramid",spacing:{horizontal:20,vertical:15}}}},lT={id:"sheep",name:"메에",emoji:"🐑",description:"평화로운 목초지와 푸른 언덕",colors:{light:{primary:"#4CAF50",primaryLight:"#81C784",primaryDark:"#388E3C",secondary:"#8BC34A",secondaryLight:"#AED581",secondaryDark:"#689F38",background:"#F1F8E9",paper:"#FFFFFF",info:"#2196F3",success:"#4CAF50",warning:"#FF9800",error:"#F44336"},dark:{primary:"#81C784",primaryLight:"#AED581",primaryDark:"#4CAF50",secondary:"#AED581",secondaryLight:"#C5E1A5",secondaryDark:"#8BC34A",background:"#0D1B0F",paper:"#1B2E1D",info:"#2196F3",success:"#4CAF50",warning:"#FF9800",error:"#F44336"}},concepts:{loading:"양이 목초지를 준비하는 중이에요...",welcome:"평화로운 목초지에 온 것을 환영해요!",appName:"양 비서",appDescription:"푸른 목초지에서 평온한 도움을 드리는 양 비서입니다",environment:"평화로운 푸른 목초지 🌱",animal:"양",greeting:"안녕하세요! 오늘도 목초지에서 평온한 하루 보내세요!",farewell:"목초지에서 평화로운 하루 되세요!",baseTitle:"🌱 목초지 농장",baseWelcome:"양 비서의 목초지에 오신 것을 환영해요!",liveView:"🐑 목초지 라이브 뷰",liveViewDescription:"우리 양이 목초지에서 무엇을 하고 있는지 확인해보세요! 🌱",quickActions:"목초지 퀵 액션",activeProjects:"진행 중인 목장일",projectStats:"목장일 통계",animalSaying:"양이 말하길",temperatureMoods:{cold:"❄️ 목초지가 시원하고 좋아요",cool:"🍃 시원한 바람이 상쾌해요",mild:"🌿 완벽한 목초지 날씨에요!",warm:"☀️ 따뜻한 햇살이 좋아요",hot:"🌞 그늘에서 쉬어가야겠어요!"},projectType:"목장일",projectCreate:"새로운 목장일 시작하기",projectManage:"목장일 관리하기"},ui:{background:{primary:"#F1F8E9",secondary:"#C8E6C9",pattern:`url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grass' patternUnits='userSpaceOnUse' width='20' height='20'%3E%3Crect width='20' height='20' fill='%23F1F8E9'/%3E%3Cpath d='M0,20 Q5,10 10,20 Q15,10 20,20' stroke='%23C8E6C9' stroke-width='1' fill='none'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grass)'/%3E%3C/svg%3E")`,gradient:"radial-gradient(circle at 30% 70%, #F1F8E9 0%, #C8E6C9 40%, #4CAF50 100%)"},border:{color:"#4CAF50",shadow:"inset 0 0 20px rgba(76, 175, 80, 0.3)"},path:{color:"rgba(76, 175, 80, 0.4)",opacity:.6}},game:{blocks:{emoji:"🌾",type:"건초 더미",collectName:"건초 더미 수집"},building:{name:"목장 헛간",description:"아늑한 목장 헛간",completionMessage:"멋진 목장 헛간이 완성되었어요! 🌾🏠"},collectInterval:35,maxBlocks:25,progressPerBlock:4},animation:{animal:{speed:.3,radius:30,bounceHeight:.05},blocks:{popDuration:"0.4s",arrangement:"tower",spacing:{horizontal:18,vertical:12}}}},uT={id:"cat",name:"그르릉",emoji:"🐱",description:"아늑한 집과 도시 생활의 편안함",colors:{light:{primary:"#FF7043",primaryLight:"#FF8A65",primaryDark:"#F4511E",secondary:"#FFC107",secondaryLight:"#FFEB3B",secondaryDark:"#FFA000",background:"#FFF8E1",paper:"#FFFFFF",info:"#2196F3",success:"#4CAF50",warning:"#FF9800",error:"#F44336"},dark:{primary:"#FF8A65",primaryLight:"#FFAB91",primaryDark:"#FF5722",secondary:"#FFCC02",secondaryLight:"#FFEB3B",secondaryDark:"#FFC107",background:"#1F1611",paper:"#2D2419",info:"#2196F3",success:"#4CAF50",warning:"#FF9800",error:"#F44336"}},concepts:{loading:"고양이가 집을 준비하는 중이에요...",welcome:"아늑한 집에 온 것을 환영해요!",appName:"고양이 비서",appDescription:"따뜻한 집에서 편안한 도움을 드리는 고양이 비서입니다",environment:"아늑한 따뜻한 집 🏠",animal:"고양이",greeting:"안녕하세요! 오늘도 집에서 편안한 하루 보내세요!",farewell:"집에서 포근한 하루 되세요!",baseTitle:"🏠 아늑한 집",baseWelcome:"고양이 비서의 집에 오신 것을 환영해요!",liveView:"🐱 고양이 집 라이브",liveViewDescription:"우리 고양이가 집에서 무엇을 하고 있는지 확인해보세요! 🐾",quickActions:"집 퀵 액션",activeProjects:"진행 중인 집안일",projectStats:"집안일 통계",animalSaying:"고양이가 말하길",temperatureMoods:{cold:"🐾 집이 따뜻해서 좋아요",cool:"🐟 시원한 집이 편안해요",mild:"🧶 완벽한 실내 온도에요!",warm:"☀️ 햇볕 드는 창가가 좋아요",hot:"🌞 시원한 곳을 찾아야겠어요!"},projectType:"집안일",projectCreate:"새로운 집안일 시작하기",projectManage:"집안일 관리하기"},ui:{background:{primary:"#FFF8E1",secondary:"#FFE7B3",pattern:`url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='bigpaws' patternUnits='userSpaceOnUse' width='60' height='60'%3E%3Crect width='60' height='60' fill='%23FFF8E1'/%3E%3Ccircle cx='18' cy='18' r='6' fill='%23FFE7B3' fill-opacity='0.45'/%3E%3Ccircle cx='14' cy='14' r='2' fill='%23FFE7B3' fill-opacity='0.35'/%3E%3Ccircle cx='22' cy='14' r='2' fill='%23FFE7B3' fill-opacity='0.35'/%3E%3Ccircle cx='14' cy='22' r='2' fill='%23FFE7B3' fill-opacity='0.35'/%3E%3Ccircle cx='22' cy='22' r='2' fill='%23FFE7B3' fill-opacity='0.35'/%3E%3Crect x='38' y='8' width='14' height='14' rx='2' ry='2' fill='%23FFF1CF' fill-opacity='0.55'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23bigpaws)'/%3E%3C/svg%3E")`,gradient:"radial-gradient(circle at 50% 30%, #FFF8E1 0%, #FFE7B3 45%, #FF8A65 100%)"},border:{color:"#FF7043",shadow:"inset 0 0 20px rgba(255, 112, 67, 0.3)"},path:{color:"rgba(255, 112, 67, 0.4)",opacity:.5}},game:{blocks:{emoji:"🧶",type:"실뭉치",collectName:"실뭉치 수집"},building:{name:"캣타워",description:"높고 멋진 캣타워",completionMessage:"멋진 캣타워가 완성되었어요! 🐱🗼"},collectInterval:25,maxBlocks:25,progressPerBlock:4},animation:{animal:{speed:.7,radius:40,bounceHeight:.2},blocks:{popDuration:"0.2s",arrangement:"tower",spacing:{horizontal:15,vertical:18}}}},hT={penguin:_p,"desert-fox":cT,sheep:lT,cat:uT},Lc=n=>hT[n]||_p,dT=(n,e)=>{const t=Lc(n),r=e==="auto"?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;return t.colors[r]},AA=n=>(n==null?void 0:n.ui)||iT,bA=n=>(n==null?void 0:n.game)||oT,fT=n=>(n==null?void 0:n.animation)||aT,pT={penguin:"🐧","desert-fox":"🦊",sheep:"🐑",cat:"🐱"},mT=(n,e,t)=>Math.min(Math.max(n,e),t),gT=({themeConfig:n})=>{const e=kh(),t=ea(e.breakpoints.down("md")),r=ea("(prefers-reduced-motion: reduce)"),s=pT[(n==null?void 0:n.id)??"penguin"]??"🐧",i=fT(n),[a,c]=k.useState({xPct:10,direction:1}),[u,h]=k.useState(0),f=k.useRef(null),m=k.useRef(null),_=k.useRef({xPct:10,direction:1});if(k.useEffect(()=>{if(r)return;m.current=null,_.current={xPct:10,direction:1},c(_.current);const x=A=>{if(m.current==null){m.current=A,f.current=requestAnimationFrame(x);return}const O=A-m.current;m.current=A;const z=(t?20:30)*(i.animal.speed??.5)*O/1e3,te=window.innerWidth||1,ie=z/te*100*_.current.direction;let S=_.current.xPct+ie,g=_.current.direction;S>92?(S=92,g=-1):S<2&&(S=2,g=1);const E=A/1e3,T=Math.sin(E*6)*(i.animal.bounceHeight??.1)*(t?8:12);_.current={xPct:S,direction:g},h(T),c(w=>({...w,..._.current})),f.current=requestAnimationFrame(x)};return f.current=requestAnimationFrame(x),()=>{f.current!=null&&cancelAnimationFrame(f.current),f.current=null,m.current=null}},[t,r,n==null?void 0:n.id]),r)return null;const b=mT(t?28:40,24,48),P=t?6:10;return p.jsx(q,{"aria-hidden":!0,sx:{position:"fixed",left:`${a.xPct}%`,bottom:`${P+u}px`,transform:`translateX(-50%) scaleX(${a.direction})`,transition:"transform 0.1s linear",fontSize:`${b}px`,zIndex:1,pointerEvents:"none",filter:e.palette.mode==="light"?"drop-shadow(0 2px 4px rgba(0,0,0,0.2))":"drop-shadow(0 2px 4px rgba(0,0,0,0.5))",opacity:.9},children:p.jsx("span",{role:"img","aria-label":"theme-animal",children:s})})},Zo=n=>{switch(n){case"/":_e(()=>import("./Dashboard-3166291d.js").then(e=>e.D),["assets/Dashboard-3166291d.js","assets/mui-754dcb1a.js","assets/dayjs-9d6a636c.js"]);break;case"/condition":_e(()=>import("./ConditionTracker-805c17da.js"),["assets/ConditionTracker-805c17da.js","assets/mui-754dcb1a.js","assets/dayjs-9d6a636c.js"]);break;case"/analytics":_e(()=>import("./Analytics-56302a39.js"),["assets/Analytics-56302a39.js","assets/mui-754dcb1a.js","assets/dayjs-9d6a636c.js"]);break;case"/projects":_e(()=>import("./ProjectManager-561cf189.js"),["assets/ProjectManager-561cf189.js","assets/mui-754dcb1a.js","assets/dayjs-9d6a636c.js"]);break;case"/todos":_e(()=>import("./TodoManager-54968b5d.js"),["assets/TodoManager-54968b5d.js","assets/mui-754dcb1a.js","assets/dayjs-9d6a636c.js"]);break;case"/pomodoro":_e(()=>import("./Pomodoro-44b14170.js"),["assets/Pomodoro-44b14170.js","assets/mui-754dcb1a.js","assets/dayjs-9d6a636c.js"]);break;case"/chat":_e(()=>import("./Chat-aae5f6c6.js"),["assets/Chat-aae5f6c6.js","assets/mui-754dcb1a.js","assets/dayjs-9d6a636c.js","assets/presence-560ae922.js"]);break;case"/profile":_e(()=>import("./Profile-b50949a6.js"),["assets/Profile-b50949a6.js","assets/mui-754dcb1a.js","assets/dayjs-9d6a636c.js"]);break;case"/settings":_e(()=>import("./Settings-95897922.js"),["assets/Settings-95897922.js","assets/mui-754dcb1a.js","assets/dayjs-9d6a636c.js"]);break;case"/admin":_e(()=>import("./AdminPanel-a82c38d5.js"),["assets/AdminPanel-a82c38d5.js","assets/mui-754dcb1a.js","assets/dayjs-9d6a636c.js","assets/presence-560ae922.js"]);break}},yT=180,Ch=280,_T=({children:n,user:e,themeConfig:t})=>{var w,I,v,B;const r=kh(),s=Oi(),i=zh(),[a,c]=k.useState(null),[u,h]=k.useState(!1),f=ea(r.breakpoints.down("md")),[m,_]=k.useState(!1),[b,P]=k.useState(!1),x=Ri(e.email),A=()=>{_(!m)},O=()=>{P(!b)},M=N=>{i(N),f&&_(!1)},z=(()=>{var Ie,ys;const N={penguin:{name:"펭귄",environment:"빙하",homeIcon:p.jsx(Bl,{}),healthIcon:p.jsx(Bl,{}),analyticsIcon:p.jsx(Fs,{}),projectIcon:p.jsx($l,{}),timerIcon:p.jsx(Dr,{}),chatIcon:p.jsx(js,{}),profileIcon:p.jsx(un,{}),adminIcon:p.jsx(Us,{}),settingsIcon:p.jsx(kr,{})},"desert-fox":{name:"사막여우",environment:"사막",homeIcon:p.jsx(Rm,{}),healthIcon:p.jsx(un,{}),analyticsIcon:p.jsx(Fs,{}),projectIcon:p.jsx($l,{}),timerIcon:p.jsx(Dr,{}),chatIcon:p.jsx(js,{}),profileIcon:p.jsx(un,{}),adminIcon:p.jsx(Us,{}),settingsIcon:p.jsx(kr,{})},sheep:{name:"양",environment:"목초지",homeIcon:p.jsx(xm,{}),healthIcon:p.jsx(un,{}),analyticsIcon:p.jsx(Fs,{}),projectIcon:p.jsx(Cm,{}),timerIcon:p.jsx(Dr,{}),chatIcon:p.jsx(js,{}),profileIcon:p.jsx(un,{}),adminIcon:p.jsx(Us,{}),settingsIcon:p.jsx(kr,{})},cat:{name:"고양이",environment:"집",homeIcon:p.jsx(zl,{}),healthIcon:p.jsx(un,{}),analyticsIcon:p.jsx(Fs,{}),projectIcon:p.jsx(zl,{}),timerIcon:p.jsx(Dr,{}),chatIcon:p.jsx(js,{}),profileIcon:p.jsx(un,{}),adminIcon:p.jsx(Us,{}),settingsIcon:p.jsx(kr,{})}},ge=(t==null?void 0:t.id)||"penguin",Y=N[ge]||N.penguin,ue=[{text:"홈",icon:Y.homeIcon,path:"/",emoji:(t==null?void 0:t.emoji)||"🐧",color:r.palette.primary.main,description:`${Y.name}와 함께하는 홈`},{text:"컨디션 체크",icon:Y.healthIcon,path:"/condition",emoji:"💚",color:r.palette.success.main,description:"몸과 마음의 상태 기록"},{text:"활동 분석",icon:Y.analyticsIcon,path:"/analytics",emoji:"📊",color:r.palette.info.main,description:"데이터로 보는 나의 변화"},{text:(Ie=t==null?void 0:t.concepts)!=null&&Ie.projectType?`${Y.name} ${t.concepts.projectType}`:`${Y.name} 프로젝트`,icon:Y.projectIcon,path:"/projects",emoji:sn(ge),color:r.palette.warning.main,description:((ys=t==null?void 0:t.concepts)==null?void 0:ys.projectManage)||"프로젝트 관리"},{text:"계획 관리",icon:p.jsx(Sm,{}),path:"/todos",emoji:"📝",color:r.palette.primary.main,description:"할일과 대주제(에픽) 관리"},{text:"집중 여행",icon:Y.timerIcon,path:"/pomodoro",emoji:Vn(ge),color:r.palette.secondary.main,description:`${Y.name}과 함께하는 집중 시간`},{text:"프로필",icon:Y.profileIcon,path:"/profile",emoji:"👤",color:r.palette.secondary.main,description:"개인 정보 및 설정"}];function sn(Ge){switch(Ge){case"penguin":return"🗺️";case"desert-fox":return"🐪";case"sheep":return"🚜";case"cat":return"🏠";default:return"📁"}}function Vn(Ge){switch(Ge){case"penguin":return"⏰";case"desert-fox":return"🕒";case"sheep":return"⏲️";case"cat":return"🕐";default:return"⏰"}}x&&ue.push({text:`${Y.environment} 관리소`,icon:Y.adminIcon,path:"/admin",emoji:Nn(ge),color:r.palette.error.main,description:"관리자 전용 패널"});function Nn(Ge){switch(Ge){case"penguin":return"🏛️";case"desert-fox":return"🏢";case"sheep":return"🏪";case"cat":return"🏬";default:return"🏛️"}}ue.push({text:`${Y.environment} 설정`,icon:Y.settingsIcon,path:"/settings",emoji:it(ge),color:r.palette.grey[600],description:"앱 설정 및 환경설정"});function it(Ge){switch(Ge){case"penguin":return"❄️";case"desert-fox":return"⚙️";case"sheep":return"🔧";case"cat":return"🔩";default:return"⚙️"}}return ue})(),te=()=>{var ge,Y;return{"/":`${(t==null?void 0:t.emoji)||"🏠"} ${((ge=t==null?void 0:t.concepts)==null?void 0:ge.environment)||"홈"}`,"/condition":`💚 ${((Y=t==null?void 0:t.concepts)==null?void 0:Y.animal)||"🐧"} 컨디션 트래커`,"/analytics":"📊 분석 리포트","/projects":"🚀 프로젝트 관리","/todos":"✅ 할 일 관리","/pomodoro":"🍅 뽀모도로 타이머","/profile":"👤 프로필","/settings":"⚙️ 설정","/admin":"🛠️ 관리자 패널"}[s.pathname]||"개인 비서"},ie=N=>{c(N.currentTarget)},S=()=>{c(null)},g=async()=>{try{await G0(),S()}catch(N){console.error("로그아웃 실패:",N)}},E=p.jsxs(p.Fragment,{children:[p.jsxs(q,{sx:{p:2,display:"flex",alignItems:"center",justifyContent:b&&!f?"center":"space-between",borderBottom:`1px solid ${r.palette.divider}`,minHeight:64},children:[(!b||f)&&p.jsxs($,{variant:"h6",fontWeight:"bold",color:"primary",children:[t==null?void 0:t.emoji," ",(t==null?void 0:t.name)||"개인 비서"]}),!f&&p.jsx(ct,{onClick:O,size:"small",sx:{color:r.palette.text.secondary,transform:b?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.3s"},children:p.jsx(fm,{})})]}),p.jsx(pm,{sx:{flexGrow:1,px:1},children:z.map(N=>p.jsx(mm,{disablePadding:!0,sx:{mb:.5},children:p.jsxs(gm,{selected:s.pathname===N.path,onClick:()=>M(N.path),onMouseEnter:()=>Zo(N.path),onFocus:()=>Zo(N.path),onTouchStart:()=>Zo(N.path),sx:{borderRadius:2,justifyContent:b&&!f?"center":"flex-start",px:b&&!f?1:2,"&.Mui-selected":{backgroundColor:N.color+"15","&:hover":{backgroundColor:N.color+"25"}},"&:hover":{backgroundColor:N.color+"10"}},children:[p.jsx(Ms,{sx:{color:N.color,minWidth:b&&!f?"auto":35,justifyContent:"center"},children:N.icon}),(!b||f)&&p.jsx(Ls,{primary:N.text,primaryTypographyProps:{fontSize:"0.875rem",fontWeight:s.pathname===N.path?600:400}})]})},N.text))}),p.jsx(q,{sx:{p:2,borderTop:`1px solid ${r.palette.divider}`},children:p.jsxs(q,{sx:{display:"flex",alignItems:"center",gap:1,justifyContent:b&&!f?"center":"flex-start"},children:[p.jsx(Kt,{src:e.photoURL||void 0,sx:{width:32,height:32},children:((w=e.displayName)==null?void 0:w[0])||((I=e.email)==null?void 0:I[0])||"U"}),(!b||f)&&p.jsxs(p.Fragment,{children:[p.jsx(q,{sx:{flex:1,minWidth:0},children:p.jsx($,{variant:"caption",noWrap:!0,children:e.displayName||e.email})}),p.jsx(ct,{size:"small",onClick:ie,children:p.jsx(ym,{fontSize:"small"})})]})]})})]}),T=f?Ch:b?72:yT;return p.jsxs(q,{sx:{display:"flex",width:"100%"},children:[!f&&p.jsx(Ul,{variant:"permanent",sx:{width:T,flexShrink:0,transition:r.transitions.create("width",{easing:r.transitions.easing.sharp,duration:r.transitions.duration.enteringScreen}),"& .MuiDrawer-paper":{width:T,boxSizing:"border-box",bgcolor:r.palette.background.paper,borderRight:`1px solid ${r.palette.divider}`,transition:r.transitions.create("width",{easing:r.transitions.easing.sharp,duration:r.transitions.duration.enteringScreen}),overflowX:"hidden"}},children:E}),f&&p.jsx(Ul,{variant:"temporary",open:m,onClose:A,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:Ch,boxSizing:"border-box",bgcolor:r.palette.background.paper}},children:E}),p.jsxs(q,{component:"main",sx:{flexGrow:1,overflow:"hidden",width:f?"100%":`calc(100% - ${T}px)`,transition:r.transitions.create("width",{easing:r.transitions.easing.sharp,duration:r.transitions.duration.enteringScreen})},children:[p.jsx(_m,{position:"static",elevation:0,sx:{bgcolor:r.palette.background.paper,borderBottom:`1px solid ${r.palette.divider}`},children:p.jsxs(vm,{children:[f&&p.jsx(ct,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:A,sx:{mr:2,color:r.palette.text.primary},children:p.jsx(Em,{})}),p.jsx($,{variant:"h6",component:"div",sx:{flexGrow:1,color:r.palette.text.primary,fontSize:f?"1rem":"1.25rem"},children:te()}),p.jsx(wm,{title:"피드백 보내기",children:p.jsx(ct,{onClick:()=>h(!0),sx:{color:r.palette.text.primary,mr:1,"&:hover":{backgroundColor:r.palette.action.hover}},children:p.jsx(Im,{})})}),p.jsx(Kt,{src:e.photoURL||void 0,sx:{width:32,height:32},children:((v=e.displayName)==null?void 0:v[0])||((B=e.email)==null?void 0:B[0])||"U"})]})}),p.jsxs(q,{sx:{height:"calc(100vh - 64px)",overflow:"auto",p:0,"& > *":{px:f?1:3,py:f?1:3}},children:[n,p.jsx(gT,{themeConfig:t})]})]}),p.jsxs(Tm,{anchorEl:a,open:!!a,onClose:S,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"bottom",horizontal:"right"},children:[p.jsxs(gn,{onClick:()=>{i("/profile"),S()},children:[p.jsx(Ms,{children:p.jsx(Am,{fontSize:"small"})}),p.jsx(Ls,{children:"프로필"})]}),p.jsxs(gn,{onClick:()=>{i("/settings"),S()},children:[p.jsx(Ms,{children:p.jsx(kr,{fontSize:"small"})}),p.jsx(Ls,{children:"설정"})]}),p.jsx(Dh,{}),p.jsxs(gn,{onClick:g,children:[p.jsx(Ms,{children:p.jsx(bm,{fontSize:"small"})}),p.jsx(Ls,{children:"로그아웃"})]})]}),p.jsx(sT,{open:u,onClose:()=>h(!1),user:e})]})},vT=()=>{var P,x;const[n,e]=k.useState(!1),[t,r]=k.useState(null),[s,i]=k.useState(null),[a,c]=k.useState(!1),[u,h]=k.useState(null),[f,m]=k.useState(""),_=async()=>{e(!0),r("");try{const A=await z0();console.log(A?"로그인 성공! App.tsx에서 권한 상태를 확인합니다. 🐧":"로그인이 취소되었습니다.")}catch(A){console.error("로그인 실패:",A),r(A.message||"로그인에 실패했습니다. 다시 시도해주세요. 🐧")}finally{e(!1)}},b=async()=>{if(u){e(!0);try{await pp({email:u.email,displayName:u.displayName||"",photoURL:u.photoURL||void 0,reason:f}),i("접근 권한 신청이 완료되었습니다! 관리자의 승인을 기다려주세요."),c(!1),h(null),m("")}catch{r("신청 중 오류가 발생했습니다.")}finally{e(!1)}}};return p.jsxs(q,{sx:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",p:2},children:[p.jsx(Xn,{sx:{maxWidth:400,width:"100%",textAlign:"center"},children:p.jsxs(Pm,{sx:{p:4},children:[p.jsx(Kt,{sx:{width:80,height:80,mx:"auto",mb:3,bgcolor:"primary.main",fontSize:"2rem"},children:"🐧"}),p.jsx($,{variant:"h4",fontWeight:"bold",gutterBottom:!0,children:"펭귄 비서"}),p.jsx($,{variant:"body1",color:"textSecondary",sx:{mb:4},children:"나만의 똑똑한 펭귄과 함께하세요 🐟"}),s&&p.jsx(Yn,{severity:"success",sx:{mb:3},children:s}),t&&p.jsx(Yn,{severity:"error",sx:{mb:3},children:t}),p.jsx(je,{variant:"contained",size:"large",fullWidth:!0,onClick:_,disabled:n,startIcon:n?p.jsx(An,{size:20}):p.jsx(km,{}),sx:{py:1.5,fontSize:"1.1rem",textTransform:"none",borderRadius:2},children:n?"로그인 중...":"Google로 로그인"}),p.jsxs($,{variant:"caption",color:"textSecondary",sx:{mt:3,display:"block"},children:["승인된 사용자만 접근할 수 있습니다 🔒",p.jsx("br",{}),"처음 사용하시는 경우 접근 권한을 신청해주세요"]})]})}),p.jsxs(xi,{open:a,onClose:()=>c(!1),maxWidth:"sm",fullWidth:!0,children:[p.jsx(Ci,{children:"접근 권한 신청"}),p.jsxs(Pi,{children:[u&&p.jsxs(q,{sx:{mb:3,textAlign:"center"},children:[p.jsx(Kt,{src:u.photoURL||void 0,sx:{width:60,height:60,mx:"auto",mb:2},children:((P=u.displayName)==null?void 0:P[0])||((x=u.email)==null?void 0:x[0])}),p.jsx($,{variant:"h6",children:u.displayName}),p.jsx($,{variant:"body2",color:"textSecondary",children:u.email})]}),p.jsx($,{variant:"body2",color:"textSecondary",sx:{mb:2},children:"개인 비서 앱 사용을 위한 접근 권한을 신청합니다. 관리자가 검토 후 승인해드릴게요! 🚀"}),p.jsx(oi,{fullWidth:!0,multiline:!0,rows:3,label:"신청 사유 (선택사항)",placeholder:"개인 비서 앱을 사용하고 싶은 이유를 간단히 적어주세요...",value:f,onChange:A=>m(A.target.value),sx:{mt:2}})]}),p.jsxs(ki,{children:[p.jsx(je,{onClick:()=>c(!1),children:"취소"}),p.jsx(je,{onClick:b,variant:"contained",startIcon:p.jsx(Va,{}),disabled:n,children:"신청하기"})]})]})]})},vp=k.createContext(void 0),ET=({children:n})=>{const[e,t]=k.useState(!1),[r,s]=k.useState(25*60),[i,a]=k.useState(25*60),[c,u]=k.useState(null),[h,f]=k.useState(null),[m,_]=k.useState(!1),[b,P]=k.useState(0),[x,A]=k.useState(null),[O,M]=k.useState(null),j=k.useRef(null),z=k.useRef(null);k.useEffect(()=>(e&&r>0?z.current=setInterval(()=>{s(B=>B<=1?(t(!1),I(),0):B-1)},1e3):z.current&&(clearInterval(z.current),z.current=null),()=>{z.current&&clearInterval(z.current)}),[e,r]),k.useEffect(()=>{const B={isActive:e,time:r,totalTime:i,selectedProject:c,selectedTask:h,isBreak:m,completedSessions:b,sessionStartTime:x,currentSessionId:O};localStorage.setItem("pomodoroState",JSON.stringify(B))},[e,r,i,c,h,m,b,x,O]),k.useEffect(()=>{const B=localStorage.getItem("pomodoroState");if(B)try{const N=JSON.parse(B);t(N.isActive||!1),s(N.time||25*60),a(N.totalTime||25*60),u(N.selectedProject||null),f(N.selectedTask||null),_(N.isBreak||!1),P(N.completedSessions||0),A(N.sessionStartTime||null),M(N.currentSessionId||null)}catch(N){console.error("뽀모도로 상태 복원 실패:",N)}},[]);const te=()=>c?h?(x||(A(new Date().toISOString()),M(Date.now().toString())),j.current=Date.now(),t(!0),!0):(console.warn("⚠️ 작업을 선택해주세요!"),!1):(console.warn("⚠️ 프로젝트를 선택해주세요!"),!1),ie=()=>{t(!1),w()},S=()=>{t(!1),s(i),A(null),M(null),j.current=null},g=B=>{const N=B*60;s(N),a(N)},E=B=>{u(B)},T=B=>{f(B)},w=()=>{if(!x||!O)return;const B=Math.floor((i-r)/60);if(B<1)return;const N={id:O,projectId:c==null?void 0:c.id,projectTitle:(c==null?void 0:c.title)||"프로젝트 없음",taskId:h==null?void 0:h.id,taskTitle:(h==null?void 0:h.title)||"작업 없음",sessionType:m?"break":"focus",duration:i/60,actualDuration:B,startTime:x,endTime:new Date().toISOString(),completed:!1,pausedAt:new Date().toISOString()},Y=[...JSON.parse(localStorage.getItem("pomodoroSessions")||"[]"),N];localStorage.setItem("pomodoroSessions",JSON.stringify(Y)),console.log("세션 중간 저장:",N)},I=()=>{if(x&&O){const B={id:O,projectId:c==null?void 0:c.id,projectTitle:(c==null?void 0:c.title)||"프로젝트 없음",taskId:h==null?void 0:h.id,taskTitle:(h==null?void 0:h.title)||"작업 없음",sessionType:m?"break":"focus",duration:i/60,actualDuration:i/60,startTime:x,endTime:new Date().toISOString(),completed:!0},ge=[...JSON.parse(localStorage.getItem("pomodoroSessions")||"[]"),B];localStorage.setItem("pomodoroSessions",JSON.stringify(ge)),console.log("세션 완료 저장:",B)}P(B=>B+1),A(null),M(null),m?(_(!1),g(25)):(_(!0),g(5)),"Notification"in window&&Notification.permission==="granted"&&new Notification(m?"브레이크 완료! 🎉":"뽀모도로 완료! 🍅",{body:m?"작업을 시작하세요!":"잠시 휴식하세요!",icon:m?"🎉":"🍅"})},v={isActive:e,time:r,totalTime:i,selectedProject:c,selectedTask:h,isBreak:m,completedSessions:b,sessionStartTime:x,currentSessionId:O,startTimer:te,pauseTimer:ie,resetTimer:S,setTime:g,setProject:E,setTask:T,setIsBreak:_,completeSession:I,saveCurrentSession:w};return p.jsx(vp.Provider,{value:v,children:n})},wT=()=>{const n=k.useContext(vp);if(n===void 0)throw new Error("usePomodoro must be used within a PomodoroProvider");return n},IT=n=>{const e=Math.floor(n/60),t=n%60;return`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`},TT=({onClose:n})=>{const{isActive:e,time:t,totalTime:r,selectedProject:s,selectedTask:i,isBreak:a,startTimer:c,pauseTimer:u,resetTimer:h,sessionStartTime:f}=wT(),m=zh(),_=Oi(),[b,P]=k.useState(!1),[x,A]=k.useState({x:20,y:20}),[O,M]=k.useState(!1),[j,z]=k.useState({x:0,y:0});Wr.useEffect(()=>{const I=()=>({width:b?56:280,height:b?56:200}),B=()=>{const{width:Y,height:ue}=I(),sn=Math.max(0,window.innerWidth-Y-20),Vn=Math.max(0,window.innerHeight-ue-20);A(Nn=>({x:Math.min(Nn.x,sn),y:Math.min(Nn.y,Vn)}))},{width:N,height:ge}=I();return A({x:Math.max(20,window.innerWidth-N-20),y:Math.max(20,window.innerHeight-ge-20)}),window.addEventListener("resize",B),()=>window.removeEventListener("resize",B)},[b]);const te=I=>{(I.target.closest(".drag-handle")||b)&&(I.preventDefault(),M(!0),z({x:I.clientX-x.x,y:I.clientY-x.y}))},ie=I=>{if(O){const v=I.clientX-j.x,B=I.clientY-j.y,N=b?56:280,ge=b?56:200,Y=window.innerWidth-N,ue=window.innerHeight-ge;A({x:Math.max(0,Math.min(v,Y)),y:Math.max(0,Math.min(B,ue))})}},S=()=>{M(!1)};Wr.useEffect(()=>{if(O)return document.addEventListener("mousemove",ie),document.addEventListener("mouseup",S),()=>{document.removeEventListener("mousemove",ie),document.removeEventListener("mouseup",S)}},[O,j,x,b]);const g=_.pathname!=="/pomodoro";if(!g)return null;const E=(r-t)/r*100,T=()=>{if(!O){if(b){P(!1);return}m("/pomodoro")}},w=b||!s||!i;return p.jsx(Vh,{direction:"up",in:g,mountOnEnter:!0,unmountOnExit:!0,children:p.jsx(q,{sx:{position:"fixed",top:`${x.y}px`,left:`${x.x}px`,zIndex:1e3,maxWidth:b?64:280,minWidth:b?56:260,cursor:O?"grabbing":"default"},children:p.jsx(Dm,{in:g,children:p.jsx(Xn,{sx:{borderRadius:b?999:2,boxShadow:O?"0 20px 60px rgba(0, 0, 0, 0.4)":"0 8px 32px rgba(0, 0, 0, 0.2)",background:b?"linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%)":a?"linear-gradient(135deg, #4CAF50 0%, #81C784 100%)":"linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%)",color:"white",cursor:w?"pointer":"default",transition:O?"none":"all 0.3s ease",border:"2px solid rgba(255, 255, 255, 0.3)",width:b?56:"auto",height:b?56:"auto",display:"flex",alignItems:"center",justifyContent:"center","&:hover":{transform:O?"none":b?"translateY(-2px)":"translateY(-4px)",boxShadow:O?"0 20px 60px rgba(0, 0, 0, 0.4)":"0 12px 40px rgba(0, 0, 0, 0.3)",border:"2px solid rgba(255, 255, 255, 0.5)"}},onClick:w?T:void 0,onMouseDown:te,children:b?p.jsx(q,{sx:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%"},children:p.jsx($,{component:"span",sx:{fontSize:28,lineHeight:1},children:"🍅"})}):p.jsxs(q,{sx:{p:2,width:"100%"},children:[p.jsxs(q,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",mb:1,borderBottom:"1px solid rgba(255, 255, 255, 0.2)",pb:1},children:[p.jsxs(q,{sx:{display:"flex",alignItems:"center",gap:1},children:[p.jsx(Vm,{className:"drag-handle",sx:{fontSize:"1rem",cursor:"grab",opacity:.7,"&:hover":{opacity:1},"&:active":{cursor:"grabbing"}}}),p.jsx(Dr,{sx:{fontSize:"1.1rem"}}),p.jsx($,{variant:"body2",fontWeight:"bold",sx:{fontSize:"0.85rem"},children:a?"🌱 BREAK":"🍅 FOCUS"})]}),p.jsxs(q,{sx:{display:"flex",gap:.5},children:[b?p.jsx(ct,{size:"small",onClick:I=>{I.stopPropagation(),P(!1)},sx:{color:"white",opacity:.7,"&:hover":{opacity:1},width:24,height:24},children:p.jsx(Nm,{fontSize:"small"})}):p.jsx(ct,{size:"small",onClick:I=>{I.stopPropagation(),P(!0)},sx:{color:"white",opacity:.7,"&:hover":{opacity:1},width:24,height:24},children:p.jsx(Om,{fontSize:"small"})}),n&&p.jsx(ct,{size:"small",onClick:I=>{I.stopPropagation(),n()},sx:{color:"white",opacity:.7,"&:hover":{opacity:1},width:24,height:24},children:p.jsx(Nh,{fontSize:"small"})})]})]}),p.jsxs(q,{sx:{textAlign:"center",mb:2,py:1,backgroundColor:"rgba(0, 0, 0, 0.2)",borderRadius:2,border:"1px solid rgba(255, 255, 255, 0.2)"},children:[p.jsx($,{variant:"h3",fontWeight:"bold",sx:{fontFamily:"'Roboto Mono', 'Courier New', monospace",fontSize:"2.2rem",letterSpacing:"0.05em",textShadow:"0 2px 4px rgba(0,0,0,0.3)"},children:IT(t)}),p.jsxs($,{variant:"caption",sx:{opacity:.8,fontSize:"0.7rem",display:"block",mt:.5},children:[Math.floor(E),"% COMPLETE"]})]}),p.jsx(Oh,{variant:"determinate",value:E,sx:{height:8,borderRadius:2,mb:2,backgroundColor:"rgba(0, 0, 0, 0.3)",border:"1px solid rgba(255, 255, 255, 0.2)","& .MuiLinearProgress-bar":{borderRadius:2,backgroundColor:"rgba(255, 255, 255, 0.9)",boxShadow:"0 0 10px rgba(255, 255, 255, 0.5)"}}}),s||i?p.jsxs(q,{sx:{mb:2,p:1,backgroundColor:"rgba(0, 0, 0, 0.2)",borderRadius:2,border:"1px solid rgba(255, 255, 255, 0.2)"},children:[s&&p.jsxs($,{variant:"caption",sx:{display:"block",opacity:.9,fontSize:"0.7rem",fontWeight:"bold"},children:["📁 ",s.title]}),i&&p.jsxs($,{variant:"caption",sx:{display:"block",opacity:.8,fontSize:"0.7rem",mt:.5},children:["📝 ",i.title]})]}):p.jsxs(q,{sx:{mb:2,p:1,backgroundColor:"rgba(255, 255, 255, 0.1)",borderRadius:2,border:"1px dashed rgba(255, 255, 255, 0.3)"},children:[p.jsx($,{variant:"caption",sx:{display:"block",opacity:.7,fontSize:"0.65rem",textAlign:"center",fontStyle:"italic"},children:"⚠️ No project/task selected"}),p.jsx($,{variant:"caption",sx:{display:"block",opacity:.6,fontSize:"0.6rem",textAlign:"center",mt:.5},children:"Click to set up"})]}),p.jsxs(q,{sx:{display:"flex",justifyContent:"center",gap:1,mb:1},children:[p.jsx(ct,{size:"small",onClick:I=>{I.stopPropagation(),e?u():c()||alert(`프로젝트와 작업을 먼저 선택해주세요! 🎯

뽀모도로 페이지에서 설정할 수 있습니다.`)},disabled:!s||!i,sx:{backgroundColor:"rgba(255, 255, 255, 0.2)",color:"white",width:36,height:36,border:"1px solid rgba(255, 255, 255, 0.3)","&:hover":{backgroundColor:"rgba(255, 255, 255, 0.3)",transform:"scale(1.05)"},"&:disabled":{backgroundColor:"rgba(255, 255, 255, 0.1)",color:"rgba(255, 255, 255, 0.5)"},transition:"all 0.2s ease"},children:e?p.jsx(Mm,{fontSize:"small"}):p.jsx(Lm,{fontSize:"small"})}),p.jsx(ct,{size:"small",onClick:I=>{I.stopPropagation(),h()},sx:{backgroundColor:"rgba(255, 255, 255, 0.2)",color:"white",width:36,height:36,border:"1px solid rgba(255, 255, 255, 0.3)","&:hover":{backgroundColor:"rgba(255, 255, 255, 0.3)",transform:"scale(1.05)"},transition:"all 0.2s ease"},children:p.jsx(Fm,{fontSize:"small"})})]}),p.jsx($,{variant:"caption",sx:{display:"block",textAlign:"center",opacity:.8},children:"전체 보기를 보려면 클릭하세요"})]})})})})})},Fc="emergency_alerts",AT=()=>`alert-${Date.now()}-${Math.random().toString(36).substr(2,9)}`,bT=n=>{const e={id:AT(),title:n.title,message:n.message,type:n.type||"info",severity:n.severity||"medium",dismissible:n.dismissible!==!1,persistent:n.persistent||!1,showOnce:n.showOnce||!1,dismissed:!1,createdAt:re().toISOString(),expiresAt:n.expiresIn?re().add(n.expiresIn,"minute").toISOString():void 0},t=rn();return t.push(e),fo(t),e},rn=()=>{try{const n=localStorage.getItem(Fc);return n?JSON.parse(n):[]}catch(n){return console.error("긴급알림 로드 실패:",n),[]}},fo=n=>{try{localStorage.setItem(Fc,JSON.stringify(n))}catch(e){console.error("긴급알림 저장 실패:",e)}},Ep=()=>{const n=rn(),e=re();return n.filter(t=>!(t.dismissed||t.expiresAt&&e.isAfter(re(t.expiresAt))))},ST=()=>rn().sort((e,t)=>re(t.createdAt).valueOf()-re(e.createdAt).valueOf()),RT=()=>{const n=rn(),e=re();return n.filter(t=>!(t.read||t.expiresAt&&e.isAfter(re(t.expiresAt))))},xT=n=>{const e=rn(),t=e.findIndex(r=>r.id===n);t!==-1&&(e[t].read=!0,e[t].readAt=re().toISOString(),fo(e))},Da=n=>{const e=rn(),t=e.findIndex(r=>r.id===n);t!==-1&&(e[t].dismissed=!0,e[t].dismissedAt=re().toISOString(),fo(e))},CT=()=>{localStorage.removeItem(Fc)},PT=()=>{const n=rn(),e=re(),t=n.filter(r=>!(r.expiresAt&&e.isAfter(re(r.expiresAt))&&!r.persistent));t.length!==n.length&&fo(t)},wp={create:n=>{const e=bT(n);return console.log("🚨 긴급알림이 생성되었습니다:",e),e},list:()=>{const n=rn();return console.table(n),n},active:()=>{const n=Ep();return console.table(n),n},history:()=>{const n=ST();return console.table(n),n},unread:()=>{const n=RT();return console.table(n),n},markRead:n=>{xT(n),console.log(`📖 알림 ${n}를 읽음으로 표시했습니다.`)},dismiss:n=>{Da(n),console.log(`✅ 알림 ${n}가 닫혔습니다.`)},clear:()=>{CT(),console.log("🗑️ 모든 긴급알림이 삭제되었습니다.")},createSamples:()=>{[{title:"🎉 새로운 기능 업데이트",message:"데이터 백업 및 복구 기능이 추가되었습니다! 이제 언제든지 안전하게 데이터를 관리할 수 있어요.",type:"success",severity:"medium",expiresIn:1440},{title:"⚠️ 시스템 점검 안내",message:"내일 오전 2시-4시 시스템 점검이 예정되어 있습니다. 이 시간 동안 서비스 이용이 제한될 수 있습니다.",type:"warning",severity:"high",expiresIn:2880},{title:"🚨 중요 보안 업데이트",message:"보안 강화를 위한 업데이트가 적용되었습니다. 모든 사용자는 비밀번호 변경을 권장합니다.",type:"error",severity:"critical",persistent:!0,dismissible:!0}].forEach(e=>wp.create(e)),console.log("📋 샘플 긴급알림들이 생성되었습니다.")}};typeof window<"u"&&(window.adminAlert=wp);const kT=Wr.forwardRef(function(e,t){return p.jsx(Vh,{direction:"down",ref:t,...e})}),DT=({onAlertDismissed:n})=>{const[e,t]=k.useState([]),[r,s]=k.useState(0),[i,a]=k.useState(!1);k.useEffect(()=>{const x=()=>{PT();const O=Ep();O.length>0?(t(O),s(0),a(!0)):a(!1)};x();const A=setInterval(x,3e4);return()=>clearInterval(A)},[]);const c=e[r],u=(x,A)=>{const O={fontSize:"large",sx:{mr:1,color:A==="critical"?"error.main":A==="high"?"warning.main":A==="medium"?"info.main":"success.main"}};switch(x){case"error":return p.jsx(zm,{...O});case"warning":return p.jsx($m,{...O});case"success":return p.jsx(Bm,{...O});default:return A==="critical"?p.jsx(jm,{...O}):p.jsx(Um,{...O})}},h=x=>{switch(x){case"critical":return"error";case"high":return"warning";case"medium":return"info";case"low":return"success";default:return"info"}},f=x=>{switch(x){case"critical":return"🚨 긴급";case"high":return"⚠️ 높음";case"medium":return"📢 보통";case"low":return"💡 낮음";default:return"📢 보통"}},m=()=>{if(c){Da(c.id),n==null||n(c.id);const x=e.filter(A=>A.id!==c.id);x.length>0?(t(x),s(Math.min(r,x.length-1))):(a(!1),t([]),s(0))}},_=()=>{r<e.length-1&&s(r+1)},b=()=>{r>0&&s(r-1)},P=()=>{e.forEach(x=>{x.dismissible&&(Da(x.id),n==null||n(x.id))}),a(!1),t([]),s(0)};return!c||!i?null:p.jsxs(xi,{open:i,TransitionComponent:kT,keepMounted:!0,onClose:c.dismissible?m:void 0,maxWidth:"md",fullWidth:!0,PaperProps:{sx:{borderRadius:3,border:"2px solid",borderColor:`${h(c.severity)}.main`,boxShadow:`0 8px 32px rgba(${c.severity==="critical"?"244, 67, 54":c.severity==="high"?"255, 152, 0":c.severity==="medium"?"33, 150, 243":"76, 175, 80"}, 0.3)`}},children:[p.jsxs(Ci,{sx:{backgroundColor:`${h(c.severity)}.main`,color:"white",display:"flex",alignItems:"center",justifyContent:"space-between",pr:1},children:[p.jsxs(q,{display:"flex",alignItems:"center",flex:1,children:[u(c.type,c.severity),p.jsx($,{variant:"h6",fontWeight:"bold",sx:{mr:2},children:c.title}),p.jsx(Ph,{label:f(c.severity),size:"small",sx:{backgroundColor:"rgba(255, 255, 255, 0.2)",color:"white",fontWeight:"bold"}})]}),c.dismissible&&p.jsx(ct,{size:"small",onClick:m,sx:{color:"white",ml:1},children:p.jsx(Nh,{})})]}),p.jsxs(Pi,{sx:{pt:3},children:[p.jsx(Yn,{severity:c.type,sx:{mb:2,borderRadius:2},icon:!1,children:p.jsx($,{variant:"body1",sx:{whiteSpace:"pre-line"},children:c.message})}),p.jsxs(q,{sx:{mt:2,p:2,backgroundColor:"grey.50",borderRadius:2},children:[p.jsxs($,{variant:"caption",color:"text.secondary",display:"block",children:["📅 생성: ",re(c.createdAt).format("YYYY-MM-DD HH:mm")]}),c.expiresAt&&p.jsxs($,{variant:"caption",color:"text.secondary",display:"block",children:["⏰ 만료: ",re(c.expiresAt).format("YYYY-MM-DD HH:mm")]}),c.persistent&&p.jsx($,{variant:"caption",color:"warning.main",display:"block",children:"📌 지속적 알림 (새로고침해도 계속 표시)"})]}),e.length>1&&p.jsxs(p.Fragment,{children:[p.jsx(Dh,{sx:{my:2}}),p.jsxs(q,{display:"flex",justifyContent:"center",alignItems:"center",gap:2,children:[p.jsx(je,{size:"small",onClick:b,disabled:r===0,variant:"outlined",children:"이전"}),p.jsxs($,{variant:"body2",color:"text.secondary",children:[r+1," / ",e.length]}),p.jsx(je,{size:"small",onClick:_,disabled:r===e.length-1,variant:"outlined",children:"다음"})]})]})]}),p.jsxs(ki,{sx:{p:3,gap:1},children:[e.length>1&&p.jsx(je,{onClick:P,variant:"outlined",color:"secondary",sx:{mr:"auto"},children:"모든 알림 닫기"}),c.dismissible&&p.jsx(je,{onClick:m,variant:"contained",color:"primary",children:e.length>1?"이 알림 닫기":"확인"}),!c.dismissible&&p.jsx($,{variant:"caption",color:"text.secondary",sx:{fontStyle:"italic"},children:"이 알림은 자동으로 닫을 수 없습니다"})]})]})},VT=({message:n="시스템 점검 중입니다. 잠시 후 다시 이용해주세요."})=>p.jsxs(q,{sx:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",p:3},children:[p.jsxs(qm,{elevation:8,sx:{p:6,textAlign:"center",maxWidth:500,borderRadius:3,background:"rgba(255, 255, 255, 0.95)",backdropFilter:"blur(10px)"},children:[p.jsx(q,{sx:{mb:3},children:p.jsx(Wm,{sx:{fontSize:80,color:"#ff9800",mb:2,animation:"pulse 2s infinite"}})}),p.jsx($,{variant:"h4",fontWeight:"bold",sx:{mb:2,background:"linear-gradient(45deg, #ff9800 30%, #f57c00 90%)",backgroundClip:"text",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"🚧 시스템 점검 중"}),p.jsx($,{variant:"body1",sx:{mb:4,color:"text.secondary",lineHeight:1.6},children:n}),p.jsx(q,{sx:{mb:3},children:p.jsx(An,{size:40,sx:{color:"#ff9800",animation:"spin 2s linear infinite"}})}),p.jsxs(q,{sx:{display:"flex",alignItems:"center",justifyContent:"center",gap:1,color:"text.secondary"},children:[p.jsx(Hm,{fontSize:"small"}),p.jsxs($,{variant:"body2",children:["점검 시작: ",new Date().toLocaleString("ko-KR")]})]}),p.jsx($,{variant:"caption",sx:{mt:3,display:"block",color:"text.disabled"},children:"문의사항이 있으시면 관리자에게 연락해주세요."})]}),p.jsx("style",{children:`
          @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.5; }
            100% { opacity: 1; }
          }
          
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `})]});class NT extends Wr.Component{constructor(t){super(t);ot(this,"handleRetry",()=>{this.setState({hasError:!1,error:void 0})});this.state={hasError:!1}}static getDerivedStateFromError(t){return{hasError:!0,error:t}}componentDidCatch(t){}render(){if(this.state.hasError){const t=(()=>{const r=this.state.error,s=(r==null?void 0:r.message)??"";return/Loading chunk|ChunkLoadError|dynamic import/i.test(s)?"리소스 로딩 중 문제가 발생했어요. 잠시 후 다시 시도하거나 새로고침 해주세요.":"일시적인 오류가 발생했어요. 다시 시도해주세요."})();return p.jsxs(q,{sx:{p:4,display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[p.jsx(An,{}),p.jsx($,{variant:"body2",color:"text.secondary",sx:{textAlign:"center"},children:t}),p.jsxs(q,{sx:{display:"flex",gap:1},children:[p.jsx(je,{variant:"contained",onClick:this.handleRetry,children:"다시 시도"}),p.jsx(je,{variant:"outlined",onClick:()=>window.location.reload(),children:"새로고침"})]})]})}return this.props.children}}const OT=async n=>{try{const e={title:"📦 임시 보관함 (Legacy Projects)",description:"에픽이 지정되지 않은 기존 프로젝트들이 임시로 보관되는 곳입니다. 새로운 에픽을 생성해서 프로젝트들을 정리해보세요!",status:"planning",priority:"low",startDate:new Date().toISOString().split("T")[0],dueDate:new Date(Date.now()+31536e6).toISOString().split("T")[0],progress:0,projects:[],color:"#9e9e9e",emoji:"📦",tags:["legacy","temporary"],createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),userEmail:n,isTemporary:!0},t=await bc(xt(we,"epics"),e);return console.log("✅ 임시 에픽 생성 완료:",t.id),t.id}catch(e){throw console.error("❌ 임시 에픽 생성 실패:",e),e}},MT=async n=>{try{console.log("🔄 레거시 프로젝트 마이그레이션 시작...");const e=Gt(xt(we,"projects"),Et("userEmail","==",n)),t=await or(e),r=[];if(t.forEach(u=>{const h={id:u.id,...u.data()};(!h.epicId||h.epicId==="")&&r.push(h)}),r.length===0)return console.log("✅ 마이그레이션할 레거시 프로젝트가 없습니다."),{success:!0,migratedCount:0};const s=Gt(xt(we,"epics"),Et("userEmail","==",n),Et("isTemporary","==",!0)),i=await or(s);let a;i.empty?a=await OT(n):(a=i.docs[0].id,console.log("📦 기존 임시 에픽 사용:",a));const c=r.map(async u=>{const h=He(we,"projects",u.id);await io(h,{epicId:a,updatedAt:Sc()}),console.log(`📎 프로젝트 "${u.title}" → 임시 에픽으로 이동`)});return await Promise.all(c),console.log(`✅ ${r.length}개의 레거시 프로젝트 마이그레이션 완료!`),{success:!0,migratedCount:r.length,tempEpicId:a}}catch(e){return console.error("❌ 레거시 프로젝트 마이그레이션 실패:",e),{success:!1,error:e}}},SA=async n=>{try{const e=Gt(xt(we,"epics"),Et("userEmail","==",n),Et("isTemporary","==",!0)),t=await or(e);if(t.empty)return{hasTempEpic:!1,projectCount:0};const r=t.docs[0].id,s=Gt(xt(we,"projects"),Et("userEmail","==",n),Et("epicId","==",r)),i=await or(s);return{hasTempEpic:!0,tempEpicId:r,projectCount:i.size,tempEpic:{id:r,...t.docs[0].data()}}}catch(e){return console.error("❌ 임시 에픽 상태 확인 실패:",e),{hasTempEpic:!1,projectCount:0,error:e}}},RA=n=>[`📦 임시 보관함에 ${n}개의 프로젝트가 있어요!`,"🎯 관련 프로젝트들을 묶어서 새로운 에픽을 만들어보세요.",'✨ 예시: "웹사이트 리뉴얼", "모바일 앱 개발", "마케팅 캠페인" 등',"🚀 에픽으로 정리하면 프로젝트 관리가 훨씬 쉬워져요!"].join(`
`),LT=async n=>{try{const e=await MT(n);return e.success&&e.migratedCount&&e.migratedCount>0?{shouldShowNotification:!0,message:`📦 ${e.migratedCount}개의 기존 프로젝트를 임시 보관함으로 이동했어요!
새로운 에픽을 만들어서 프로젝트들을 정리해보세요! 🎯`,tempEpicId:e.tempEpicId}:{shouldShowNotification:!1}}catch(e){return console.error("❌ 자동 마이그레이션 체크 실패:",e),{shouldShowNotification:!1,error:e}}},dn=()=>`${Date.now()}-${Math.random().toString(36).substr(2,9)}`,Ip=k.createContext(void 0),FT=({children:n})=>{k.useState([]),k.useState([]),k.useState([]);const[e,t]=k.useState([]),[r,s]=k.useState([]),[i,a]=k.useState([]),c=async()=>{try{const g=Je();if(g){const E=await ii(g.uid,"epics");E.success&&E.data?a(E.data):a([]);const T=await ii(g.uid,"projects");T.success&&T.data?t(T.data):t([]);const w=await ii(g.uid,"projectTodos");if(w.success&&w.data)s(w.data);else{const I=localStorage.getItem("projectTodos");if(I)try{const v=JSON.parse(I);s(v),await Ae(g.uid,"projectTodos",v)}catch{s([])}else s([])}try{const I=Array.isArray(T.data)?T.data.flatMap(Y=>Array.isArray(Y.tasks)?Y.tasks.map(ue=>({id:ue.id??dn(),title:ue.title,description:ue.description??"",completed:(ue.status??"todo")==="completed",priority:ue.priority??"medium",dueDate:ue.dueDate,tags:ue.tags??[],projectId:Y.id,epicId:Y.epicId,createdAt:ue.createdAt??Y.createdAt??re().toISOString(),updatedAt:ue.updatedAt??Y.updatedAt??re().toISOString(),completedAt:(ue.status??"todo")==="completed"?ue.updatedAt??void 0:void 0})):[]):[],v=w.success&&w.data?w.data:[],B=new Map;[...I,...v].forEach(Y=>{!Y||!Y.id||B.has(Y.id)||B.set(Y.id,Y)});const N=Array.from(B.values());N.length>v.length&&(s(N),await Ae(g.uid,"projectTodos",N))}catch(I){console.warn("레거시 tasks 병합 중 경고:",I)}}else{a([]),t([]);const E=localStorage.getItem("projectTodos");s(E?JSON.parse(E):[])}}catch(g){console.error("❌ TodoContext: Firebase 데이터 로드 실패:",g)}},u=()=>Array.isArray(i)?i.map(g=>({id:g.id||dn(),title:g.title,description:g.description||"",status:g.status||"active",priority:g.priority||"medium",startDate:g.startDate,dueDate:g.dueDate,progress:g.progress||0,projects:g.projects||[],color:g.color||"#3b82f6",emoji:g.emoji,tags:g.tags||[],createdAt:g.createdAt||re().toISOString(),updatedAt:g.updatedAt||re().toISOString()})):[],h=()=>Array.isArray(e)?e.map(g=>({id:g.id||dn(),title:g.title,description:g.description||"",status:g.status||"active",priority:g.priority||"medium",startDate:g.startDate,dueDate:g.dueDate,progress:g.progress||0,tasks:g.tasks||[],tags:g.tags||[],epicId:g.epicId,createdAt:g.createdAt||re().toISOString(),updatedAt:g.updatedAt||re().toISOString()})):[],f=()=>{const g=Array.isArray(r)?r:[],T=(Array.isArray(e)?e:[]).flatMap(I=>Array.isArray(I.tasks)?I.tasks.map(v=>({id:v.id??dn(),title:v.title,description:v.description??"",completed:(v.status??"todo")==="completed",priority:v.priority??"medium",dueDate:v.dueDate,tags:v.tags??[],projectId:I.id,epicId:I.epicId,createdAt:v.createdAt??I.createdAt??re().toISOString(),updatedAt:v.updatedAt??I.updatedAt??re().toISOString(),completedAt:(v.status??"todo")==="completed"?v.updatedAt??void 0:void 0})):[]),w=new Map;return[...T,...g].forEach(I=>{!I||!I.id||w.has(I.id)||w.set(I.id,I)}),Array.from(w.values())};k.useEffect(()=>{c()},[]);const m=async g=>{const E=f(),T={...g,id:dn(),createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},w=[...E,T];s(w);try{const I=Je();I&&await Ae(I.uid,"projectTodos",w)}catch(I){console.error("❌ Todo Firebase 저장 실패:",I)}},_=async g=>{const T=f().map(w=>w.id===g.id?{...g,updatedAt:new Date().toISOString()}:w);s(T);try{const w=Je();w&&await Ae(w.uid,"projectTodos",T)}catch(w){console.error("❌ Todo 업데이트 Firebase 저장 실패:",w)}},b=async g=>{const T=f().filter(w=>w.id!==g);s(T);try{const w=Je();w&&await Ae(w.uid,"projectTodos",T)}catch(w){console.error("❌ Todo 삭제 Firebase 저장 실패:",w)}},P=async g=>{const T=f().map(w=>w.id===g?{...w,completed:!w.completed,completedAt:w.completed?void 0:new Date().toISOString(),updatedAt:new Date().toISOString()}:w);s(T);try{const w=Je();w&&await Ae(w.uid,"projectTodos",T)}catch(w){console.error("❌ Todo 완료 토글 Firebase 저장 실패:",w)}},x=async g=>{const E=u(),T={...g,id:dn(),projects:[],progress:0,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},w=[...E,T];a(w);try{const I=Je();I&&await Ae(I.uid,"epics",w)}catch(I){console.error("❌ Epic Firebase 저장 실패:",I)}},A=async g=>{const T=u().map(w=>w.id===g.id?{...g,updatedAt:new Date().toISOString()}:w);a(T);try{const w=Je();w&&await Ae(w.uid,"epics",T)}catch(w){console.error("❌ Epic 업데이트 Firebase 저장 실패:",w)}},O=async g=>{const E=u(),T=f(),w=h(),I=E.filter(N=>N.id!==g),v=T.map(N=>N.epicId===g?{...N,epicId:void 0,updatedAt:new Date().toISOString()}:N),B=w.map(N=>N.epicId===g?{...N,epicId:void 0,updatedAt:new Date().toISOString()}:N);a(I),s(v),t(B);try{const N=Je();N&&await Promise.all([Ae(N.uid,"epics",I),Ae(N.uid,"projectTodos",v),Ae(N.uid,"projects",B)])}catch(N){console.error("❌ Epic 삭제 Firebase 저장 실패:",N)}},M=async(g,E)=>{const T=h(),w=u(),I={...g,id:dn(),tasks:[],epicId:E||g.epicId,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},v=[...T,I];let B=w;I.epicId&&(B=w.map(N=>N.id===I.epicId?{...N,projects:[...N.projects||[],I],updatedAt:new Date().toISOString()}:N)),t(v),a(B);try{const N=Je();N&&await Promise.all([Ae(N.uid,"projects",v),Ae(N.uid,"epics",B)])}catch(N){console.error("❌ Project 저장 Firebase 실패:",N)}},j=async g=>{const E=h(),T=u(),w=E.map(v=>v.id===g.id?{...g,updatedAt:new Date().toISOString()}:v),I=T.map(v=>({...v,projects:(v.projects||[]).map(B=>B.id===g.id?g:B),updatedAt:new Date().toISOString()}));t(w),a(I);try{const v=Je();v&&await Promise.all([Ae(v.uid,"projects",w),Ae(v.uid,"epics",I)])}catch(v){console.error("❌ Project 업데이트 Firebase 실패:",v)}},z=async g=>{const E=h(),T=u(),w=f(),I=E.filter(N=>N.id!==g),v=T.map(N=>({...N,projects:(N.projects||[]).filter(ge=>ge.id!==g),updatedAt:new Date().toISOString()})),B=w.map(N=>N.projectId===g?{...N,projectId:void 0,updatedAt:new Date().toISOString()}:N);t(I),a(v),s(B);try{const N=Je();N&&await Promise.all([Ae(N.uid,"projects",I),Ae(N.uid,"epics",v),Ae(N.uid,"projectTodos",B)])}catch(N){console.error("❌ Project 삭제 Firebase 실패:",N)}},te=g=>u().find(E=>E.id===g),ie=g=>h().find(E=>E.id===g),S={todos:f(),epics:u(),projects:h(),addTodo:m,updateTodo:_,deleteTodo:b,toggleTodoComplete:P,addEpic:x,updateEpic:A,deleteEpic:O,addProject:M,updateProject:j,deleteProject:z,getEpicById:te,getProjectById:ie,getTodosByProjectId:g=>f().filter(E=>E.projectId===g),getTodosByEpicId:g=>f().filter(E=>E.epicId===g),getProjectsByEpicId:g=>h().filter(E=>E.epicId===g),refreshFirebaseData:c,syncFirebaseToLocal:async()=>({success:!0,message:"Firebase 단일 소스 사용 중"}),migrateLocalDataToFirebase:async()=>({success:!1,message:"로컬 데이터 사용 안 함"}),isMigrationButtonActive:()=>!1,checkLocalDataForMigration:()=>({hasData:!1,epicsCount:0,projectsCount:0,todosCount:0}),restoreFirebaseBackup:async()=>({success:!1,message:"백업 복구 비활성화"})};return p.jsx(Ip.Provider,{value:S,children:n})},xA=()=>{const n=k.useContext(Ip);if(n===void 0)throw new Error("useTodo must be used within a TodoProvider");return n},jT=()=>{const n=localStorage.getItem("todos"),e=localStorage.getItem("epics"),t=localStorage.getItem("projects"),r={todos:n?JSON.parse(n):[],epics:e?JSON.parse(e):[],projects:t?JSON.parse(t):[],timestamp:new Date().toISOString()};return localStorage.setItem("data_backup",JSON.stringify(r)),console.log("데이터 백업 완료:",r),r},UT=()=>{const n=localStorage.getItem("data_backup");if(n){const e=JSON.parse(n);return localStorage.setItem("todos",JSON.stringify(e.todos)),localStorage.setItem("epics",JSON.stringify(e.epics)),localStorage.setItem("projects",JSON.stringify(e.projects)),console.log("데이터 복구 완료:",e),e}return null},Tp=()=>{const n=localStorage.getItem("todos"),e=localStorage.getItem("epics"),t=localStorage.getItem("projects");return{todos:n?JSON.parse(n):[],epics:e?JSON.parse(e):[],projects:t?JSON.parse(t):[]}},BT=()=>{localStorage.removeItem("todos"),localStorage.removeItem("epics"),localStorage.removeItem("projects"),console.log("모든 데이터 삭제 완료")},$T=()=>{const n={id:"basic-epic-1",title:"🎯 개인 프로젝트",description:"개인적인 목표와 프로젝트를 관리하는 에픽입니다",status:"active",priority:"high",startDate:re().toISOString(),dueDate:re().add(3,"month").toISOString(),progress:10,projects:[],color:"#FF6B6B",emoji:"🎯",tags:["개인","목표"],createdAt:re().toISOString(),updatedAt:re().toISOString()},e={id:"basic-project-1",title:"📋 일상 관리",description:"일상적인 할일들을 관리하는 프로젝트입니다",status:"active",priority:"medium",startDate:re().toISOString(),dueDate:re().add(1,"month").toISOString(),progress:0,tasks:[],tags:["일상","관리"],epicId:"basic-epic-1",createdAt:re().toISOString(),updatedAt:re().toISOString()},t={id:"basic-todo-1",title:"📝 할일 관리 시스템 설정하기",description:"개인 할일 관리 시스템을 제대로 설정해보세요",completed:!1,priority:"medium",dueDate:re().add(1,"week").toISOString(),tags:["설정","시작"],epicId:"basic-epic-1",projectId:"basic-project-1",createdAt:re().toISOString(),updatedAt:re().toISOString()};return{epics:[n],projects:[e],todos:[t]}},zT=()=>{const n=Tp(),e=n.todos.some(t=>t.title.includes("테스트")||t.title.includes("샘플"));if(n.todos.length===0||e){const t=$T();return localStorage.setItem("todos",JSON.stringify(t.todos)),localStorage.setItem("epics",JSON.stringify(t.epics)),localStorage.setItem("projects",JSON.stringify(t.projects)),console.log("기본 사용자 데이터로 복구 완료"),t}return n};typeof window<"u"&&(window.dataRecovery={backup:jT,restore:UT,current:Tp,clear:BT,recover:zT});const qT=k.lazy(()=>_e(()=>import("./Dashboard-3166291d.js").then(n=>n.D),["assets/Dashboard-3166291d.js","assets/mui-754dcb1a.js","assets/dayjs-9d6a636c.js"])),WT=k.lazy(()=>_e(()=>import("./ConditionTracker-805c17da.js"),["assets/ConditionTracker-805c17da.js","assets/mui-754dcb1a.js","assets/dayjs-9d6a636c.js"])),HT=k.lazy(()=>_e(()=>import("./ProjectManager-561cf189.js"),["assets/ProjectManager-561cf189.js","assets/mui-754dcb1a.js","assets/dayjs-9d6a636c.js"])),GT=k.lazy(()=>_e(()=>import("./TodoManager-54968b5d.js"),["assets/TodoManager-54968b5d.js","assets/mui-754dcb1a.js","assets/dayjs-9d6a636c.js"])),KT=k.lazy(()=>_e(()=>import("./Chat-aae5f6c6.js"),["assets/Chat-aae5f6c6.js","assets/mui-754dcb1a.js","assets/dayjs-9d6a636c.js","assets/presence-560ae922.js"])),QT=k.lazy(()=>_e(()=>import("./Analytics-56302a39.js"),["assets/Analytics-56302a39.js","assets/mui-754dcb1a.js","assets/dayjs-9d6a636c.js"])),JT=k.lazy(()=>_e(()=>import("./Profile-b50949a6.js"),["assets/Profile-b50949a6.js","assets/mui-754dcb1a.js","assets/dayjs-9d6a636c.js"])),YT=k.lazy(()=>_e(()=>import("./Settings-95897922.js"),["assets/Settings-95897922.js","assets/mui-754dcb1a.js","assets/dayjs-9d6a636c.js"])),XT=k.lazy(()=>_e(()=>import("./AdminPanel-a82c38d5.js"),["assets/AdminPanel-a82c38d5.js","assets/mui-754dcb1a.js","assets/dayjs-9d6a636c.js","assets/presence-560ae922.js"])),ZT=k.lazy(()=>_e(()=>import("./Pomodoro-44b14170.js"),["assets/Pomodoro-44b14170.js","assets/mui-754dcb1a.js","assets/dayjs-9d6a636c.js"])),eA=n=>{var z,te,ie,S,g,E,T,w,I,v,B,N;const{type:e,mode:t}=n,r=Lc(e),s=dT(e,t),i=t==="auto"?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":t,a=i==="dark",c=((te=(z=r.ui)==null?void 0:z.background)==null?void 0:te.primary)??s.background,u=((S=(ie=r.ui)==null?void 0:ie.background)==null?void 0:S.secondary)??s.paper,h=((E=(g=r.ui)==null?void 0:g.background)==null?void 0:E.pattern)??"",f=((w=(T=r.ui)==null?void 0:T.background)==null?void 0:w.gradient)??"",m=((v=(I=r.ui)==null?void 0:I.border)==null?void 0:v.color)??s.primary;(N=(B=r.ui)==null?void 0:B.border)==null||N.shadow;const _=a?s.background:c,b=a?s.paper:u,P=a?"":h,x=a?`radial-gradient(800px circle at 20% 20%, ${Te("#fff",.04)} 0%, transparent 40%), radial-gradient(800px circle at 80% 80%, ${Te("#fff",.03)} 0%, transparent 40%)`:f,A=s.background,O=s.paper,M=A,j=O;return Qm({palette:{mode:i,primary:{main:s.primary,light:s.primaryLight,dark:s.primaryDark},secondary:{main:s.secondary,light:s.secondaryLight,dark:s.secondaryDark},background:{default:M,paper:j},info:{main:s.info},success:{main:s.success},warning:{main:s.warning},error:{main:s.error}},typography:{fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif"].join(","),h1:{fontWeight:700},h2:{fontWeight:600},h3:{fontWeight:600},button:{fontWeight:600},subtitle1:{fontWeight:600}},shape:{borderRadius:8},components:{MuiCssBaseline:{styleOverrides:{"html, body, #root":{height:"100%"},body:{backgroundColor:_,backgroundImage:P&&x?`${P}, ${x}`:P||x||void 0,backgroundAttachment:"fixed",backgroundSize:"cover"},"*":{scrollbarColor:`${Te(s.primary,.5)} transparent`,scrollbarWidth:"thin"},"*::-webkit-scrollbar":{width:10,height:10},"*::-webkit-scrollbar-thumb":{backgroundColor:Te(s.primary,.35),borderRadius:999,border:`2px solid ${Te(s.background,.6)}`},"*::-webkit-scrollbar-track":{backgroundColor:Te(s.background,.4)}}},MuiButton:{defaultProps:{disableElevation:!0},styleOverrides:{root:{textTransform:"none",borderRadius:8,fontWeight:600},contained:{boxShadow:"none"},sizeSmall:{borderRadius:6},sizeLarge:{borderRadius:10}}},MuiCard:{styleOverrides:{root:{borderRadius:8,boxShadow:i==="light"?"0 6px 18px rgba(0,0,0,0.08)":"0 6px 18px rgba(0,0,0,0.32)",border:`1px solid ${Te(m,.15)}`}}},MuiPaper:{styleOverrides:{root:{borderRadius:8,backgroundImage:"none"},outlined:{borderColor:Te(m,.2)}}},MuiTextField:{defaultProps:{variant:"outlined",size:"small"}},MuiInputBase:{styleOverrides:{root:{borderRadius:8,backgroundColor:a?Te(s.paper,.06):Te(b,.5)}}},MuiAppBar:{defaultProps:{color:"default",elevation:0},styleOverrides:{root:{backgroundColor:a?Te(s.paper,.94):Te(b,.9),backdropFilter:"saturate(180%) blur(8px)",borderBottom:`1px solid ${Te(m,.18)}`}}},MuiToolbar:{styleOverrides:{regular:{minHeight:64}}},MuiDrawer:{styleOverrides:{paper:{borderRight:`1px solid ${Te(m,.18)}`,backgroundColor:a?Te(s.background,.94):Te(b,.92),backgroundImage:"none"}}},MuiListItemButton:{styleOverrides:{root:{borderRadius:8,margin:2,"&.Mui-selected":{backgroundColor:Te(s.primary,.12),"&:hover":{backgroundColor:Te(s.primary,.18)}}}}},MuiDialog:{styleOverrides:{paper:{borderRadius:12,border:`1px solid ${Te(m,.12)}`}}},MuiTooltip:{defaultProps:{arrow:!0}},MuiChip:{styleOverrides:{root:{borderRadius:8}}},MuiIconButton:{styleOverrides:{root:{borderRadius:8}}},MuiTabs:{styleOverrides:{indicator:{height:3,borderRadius:3}}},MuiTab:{styleOverrides:{root:{textTransform:"none",fontWeight:600,minHeight:44}}},MuiLinearProgress:{styleOverrides:{root:{borderRadius:999,overflow:"hidden"}}},MuiCircularProgress:{defaultProps:{thickness:5}}}})};function tA(){const[n,e]=k.useState(null),[t,r]=k.useState(!0),[s,i]=k.useState(null),[a,c]=k.useState(null),[u,h]=k.useState({type:"penguin",mode:"light"}),[f,m]=k.useState({show:!1,message:""}),[_,b]=k.useState({isActive:!1,message:"",loading:!0}),P=O=>{const M={...u,...O};h(M),window.electronAPI?window.electronAPI.saveData("theme",M):localStorage.setItem("theme",JSON.stringify(M))};k.useEffect(()=>{(async()=>{try{if(window.electronAPI){const te=await window.electronAPI.loadData("theme");if(te.success&&te.data){h(te.data),console.log("Electron에서 테마 로드:",te.data);return}}const z=localStorage.getItem("theme");if(z){const te=JSON.parse(z);h(te),console.log("localStorage에서 테마 로드:",te)}else console.log("저장된 테마가 없어서 기본값 사용")}catch(z){console.error("테마 로드 실패:",z)}})();const M=window.matchMedia("(prefers-color-scheme: dark)"),j=async()=>{try{u.mode==="auto"&&h(z=>({...z}))}catch(z){console.error("시스템 테마 변경 감지 실패:",z)}};return M.addEventListener("change",j),()=>M.removeEventListener("change",j)},[u.mode]),k.useEffect(()=>{const O=async()=>{try{const j=await Y0();b({isActive:j.isMaintenanceMode,message:j.message||"시스템 점검 중입니다.",loading:!1})}catch(j){console.error("점검 모드 확인 실패:",j),b({isActive:!1,message:"",loading:!1})}};O();const M=setInterval(O,3e4);return()=>clearInterval(M)},[]),k.useEffect(()=>{const O=W0(async M=>{try{if(e(M),i(null),M){const j=await H0(M.email);if(c(j.status),j.status==="approved")try{const z=await LT(M.email);z.shouldShowNotification&&m({show:!0,message:z.message})}catch(z){console.error("마이그레이션 체크 실패:",z)}}else c(null)}catch(j){console.error("❌ 인증 상태 처리 중 에러:",j),i("인증 처리 중 문제가 발생했습니다. 페이지를 새로고침해주세요.")}finally{r(!1)}});return()=>{O()}},[]);const x=eA(u),A=Lc(u.type);return s?p.jsxs(jn,{theme:x,children:[p.jsx(Un,{}),p.jsxs(q,{sx:{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg, #f44336 0%, #e91e63 100%)",p:3},children:[p.jsx($,{variant:"h4",color:"white",sx:{mb:2,textAlign:"center"},children:"⚠️ 오류가 발생했습니다"}),p.jsx($,{variant:"body1",color:"white",sx:{mb:3,textAlign:"center",maxWidth:600},children:s}),p.jsx(je,{variant:"contained",color:"secondary",onClick:()=>{i(null),window.location.reload()},sx:{minWidth:200},children:"🔄 페이지 새로고침"})]})]}):t||_.loading?p.jsxs(jn,{theme:x,children:[p.jsx(Un,{}),p.jsxs(q,{sx:{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"},children:[p.jsx(An,{size:60,sx:{mb:2}}),p.jsx($,{variant:"h6",color:"white",children:_.loading?"점검 상태 확인 중...":A.concepts.loading})]})]}):_.isActive&&(!n||!Ri(n.email))?p.jsxs(jn,{theme:x,children:[p.jsx(Un,{}),p.jsx(VT,{message:_.message})]}):n?a==="approved"?p.jsx(Gm,{dateAdapter:Km,adapterLocale:"ko",children:p.jsxs(jn,{theme:x,children:[p.jsx(Un,{}),p.jsx(FT,{children:p.jsx(ET,{children:p.jsxs(Wg,{future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:[p.jsx(q,{sx:{height:"100vh",display:"flex"},children:p.jsxs(_T,{user:n,themeConfig:A,children:[p.jsx(k.Suspense,{fallback:p.jsx(q,{sx:{p:4,display:"flex",alignItems:"center",justifyContent:"center"},children:p.jsx(An,{})}),children:p.jsx(NT,{children:p.jsxs($g,{children:[p.jsx(et,{path:"/",element:p.jsx(qT,{themeConfig:A})}),p.jsx(et,{path:"/condition",element:p.jsx(WT,{themeConfig:A})}),p.jsx(et,{path:"/analytics",element:p.jsx(QT,{themeConfig:A})}),p.jsx(et,{path:"/projects",element:p.jsx(HT,{themeConfig:A})}),p.jsx(et,{path:"/todos",element:p.jsx(GT,{})}),p.jsx(et,{path:"/pomodoro",element:p.jsx(ZT,{themeConfig:A})}),p.jsx(et,{path:"/chat",element:p.jsx(KT,{})}),p.jsx(et,{path:"/profile",element:p.jsx(JT,{themeConfig:A})}),p.jsx(et,{path:"/settings",element:p.jsx(YT,{onThemeChange:P,themeSettings:u})}),Ri(n.email)&&p.jsx(et,{path:"/admin",element:p.jsx(XT,{themeConfig:A})})]})})}),p.jsx(TT,{}),p.jsx(DT,{})]})}),p.jsxs(xi,{open:f.show,onClose:()=>m({show:!1,message:""}),maxWidth:"sm",fullWidth:!0,children:[p.jsx(Ci,{children:"📦 프로젝트 정리 알림"}),p.jsxs(Pi,{children:[p.jsx(Yn,{severity:"info",sx:{mb:2},children:p.jsx($,{variant:"body2",sx:{whiteSpace:"pre-line"},children:f.message})}),p.jsx($,{variant:"body2",color:"text.secondary",children:"프로젝트 관리 페이지에서 임시 보관함을 확인하고 새로운 에픽을 만들어보세요!"})]}),p.jsxs(ki,{children:[p.jsx(je,{onClick:()=>m({show:!1,message:""}),children:"확인"}),p.jsx(je,{variant:"contained",onClick:()=>{m({show:!1,message:""})},children:"프로젝트 관리로 이동"})]})]})]})})})]})}):p.jsxs(jn,{theme:x,children:[p.jsx(Un,{}),p.jsx(nA,{user:n,status:a})]}):p.jsxs(jn,{theme:x,children:[p.jsx(Un,{}),p.jsx(vT,{})]})}const nA=({user:n,status:e})=>{const t=()=>{var r,s,i,a;switch(e){case"pending":return p.jsxs(Xn,{sx:{maxWidth:600,width:"100%",p:4,textAlign:"center",boxShadow:"0 8px 32px rgba(0,0,0,0.12)",borderRadius:3,background:"linear-gradient(135deg, rgba(255,193,7,0.1) 0%, rgba(255,152,0,0.1) 100%)",border:"1px solid rgba(255,193,7,0.2)"},children:[p.jsxs(q,{sx:{mb:3},children:[p.jsx(Kt,{src:n.photoURL||void 0,sx:{width:80,height:80,mx:"auto",mb:2,boxShadow:"0 4px 20px rgba(0,0,0,0.15)"},children:((r=n.displayName)==null?void 0:r[0])||((s=n.email)==null?void 0:s[0])}),p.jsx($,{variant:"h4",gutterBottom:!0,sx:{fontWeight:"bold",color:"warning.main"},children:"⏳ 승인 대기 중"})]}),p.jsxs($,{variant:"h6",sx:{mb:2,color:"text.primary"},children:["안녕하세요, ",p.jsx("strong",{children:n.displayName}),"님! 🐧"]}),p.jsxs($,{variant:"body1",sx:{mb:3,lineHeight:1.8,color:"text.secondary"},children:["개인 비서 접근 권한 요청이 검토 중입니다.",p.jsx("br",{}),"관리자의 승인을 기다려주세요."]}),p.jsx(q,{sx:{p:2,bgcolor:"rgba(255,193,7,0.1)",borderRadius:2,border:"1px solid rgba(255,193,7,0.2)",mb:2},children:p.jsx($,{variant:"body2",color:"warning.dark",sx:{fontWeight:"medium"},children:"💡 승인이 완료되면 자동으로 서비스를 이용하실 수 있습니다."})}),p.jsx(Oh,{sx:{mt:3,height:6,borderRadius:3,backgroundColor:"rgba(255,193,7,0.2)","& .MuiLinearProgress-bar":{backgroundColor:"warning.main"}}})]});case"rejected":return p.jsxs(Xn,{sx:{maxWidth:600,width:"100%",p:4,textAlign:"center",boxShadow:"0 8px 32px rgba(0,0,0,0.12)",borderRadius:3,background:"linear-gradient(135deg, rgba(244,67,54,0.1) 0%, rgba(233,30,99,0.1) 100%)",border:"1px solid rgba(244,67,54,0.2)"},children:[p.jsxs(q,{sx:{mb:3},children:[p.jsx(Kt,{src:n.photoURL||void 0,sx:{width:80,height:80,mx:"auto",mb:2,boxShadow:"0 4px 20px rgba(0,0,0,0.15)"},children:((i=n.displayName)==null?void 0:i[0])||((a=n.email)==null?void 0:a[0])}),p.jsx($,{variant:"h4",gutterBottom:!0,sx:{fontWeight:"bold",color:"error.main"},children:"❌ 접근 권한 거부됨"})]}),p.jsxs($,{variant:"h6",sx:{mb:2,color:"text.primary"},children:["죄송합니다, ",p.jsx("strong",{children:n.displayName}),"님."]}),p.jsxs($,{variant:"body1",sx:{mb:3,lineHeight:1.8,color:"text.secondary"},children:["개인 비서 접근 권한이 거부되었습니다.",p.jsx("br",{}),"자세한 사항은 관리자에게 문의해주세요."]}),p.jsx(q,{sx:{p:2,bgcolor:"rgba(244,67,54,0.1)",borderRadius:2,border:"1px solid rgba(244,67,54,0.2)"},children:p.jsx($,{variant:"body2",color:"error.dark",sx:{fontWeight:"medium"},children:"📧 문의사항이 있으시면 관리자에게 연락해주세요."})})]});case"not_found":default:return p.jsx(rA,{user:n})}};return p.jsx(q,{sx:{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",p:2},children:p.jsx(q,{sx:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%",maxWidth:700},children:t()})})},rA=({user:n})=>{var u,h,f,m;const[e,t]=k.useState(""),[r,s]=k.useState(!1),[i,a]=k.useState(!1),c=async _=>{if(_.preventDefault(),!!n.email){s(!0);try{if((await pp({email:n.email,displayName:n.displayName||"이름 없음",photoURL:n.photoURL||void 0,reason:e.trim()||void 0})).success)a(!0);else throw new Error("요청 저장 실패")}catch(b){console.error("접근 권한 요청 실패:",b),alert("요청 처리 중 오류가 발생했습니다. 다시 시도해주세요.")}finally{s(!1)}}};return i?p.jsxs(Xn,{sx:{maxWidth:600,width:"100%",p:4,textAlign:"center",boxShadow:"0 8px 32px rgba(0,0,0,0.12)",borderRadius:3,background:"linear-gradient(135deg, rgba(76,175,80,0.1) 0%, rgba(139,195,74,0.1) 100%)",border:"1px solid rgba(76,175,80,0.2)"},children:[p.jsxs(q,{sx:{mb:3},children:[p.jsx(Kt,{src:n.photoURL||void 0,sx:{width:80,height:80,mx:"auto",mb:2,boxShadow:"0 4px 20px rgba(0,0,0,0.15)"},children:((u=n.displayName)==null?void 0:u[0])||((h=n.email)==null?void 0:h[0])}),p.jsx($,{variant:"h4",gutterBottom:!0,sx:{fontWeight:"bold",color:"success.main"},children:"✅ 접근 권한 요청 완료!"})]}),p.jsxs($,{variant:"h6",sx:{mb:2,color:"text.primary"},children:["안녕하세요, ",p.jsx("strong",{children:n.displayName}),"님! 🎉"]}),p.jsxs($,{variant:"body1",sx:{mb:3,lineHeight:1.8,color:"text.secondary"},children:["개인 비서 접근 권한 요청이 성공적으로 전송되었습니다.",p.jsx("br",{}),"관리자의 승인을 기다려주세요."]}),p.jsx(q,{sx:{p:2,bgcolor:"rgba(76,175,80,0.1)",borderRadius:2,border:"1px solid rgba(76,175,80,0.2)"},children:p.jsx($,{variant:"body2",color:"success.dark",sx:{fontWeight:"medium"},children:"🔄 승인이 완료되면 이 화면에서 자동으로 서비스로 이동됩니다."})})]}):p.jsxs(Xn,{sx:{maxWidth:600,width:"100%",p:4,boxShadow:"0 8px 32px rgba(0,0,0,0.12)",borderRadius:3,background:"rgba(255,255,255,0.95)",backdropFilter:"blur(10px)"},children:[p.jsxs(q,{sx:{textAlign:"center",mb:4},children:[p.jsx($,{variant:"h4",gutterBottom:!0,sx:{fontWeight:"bold",color:"primary.main"},children:"🤖 개인 비서 접근 권한 요청"}),p.jsxs($,{variant:"body1",color:"textSecondary",sx:{lineHeight:1.6},children:["안녕하세요, ",p.jsx("strong",{children:n.displayName}),"님!",p.jsx("br",{}),"개인 비서를 이용하기 위해 접근 권한을 요청해주세요."]})]}),p.jsxs(q,{sx:{display:"flex",alignItems:"center",gap:2,mb:4,p:3,bgcolor:"rgba(25,118,210,0.05)",borderRadius:2,border:"1px solid rgba(25,118,210,0.1)"},children:[p.jsx(Kt,{src:n.photoURL||void 0,sx:{width:60,height:60},children:((f=n.displayName)==null?void 0:f[0])||((m=n.email)==null?void 0:m[0])}),p.jsxs(q,{sx:{flex:1},children:[p.jsx($,{variant:"h6",sx:{fontWeight:"bold"},children:n.displayName}),p.jsx($,{variant:"body2",color:"textSecondary",children:n.email})]})]}),p.jsxs("form",{onSubmit:c,children:[p.jsx(oi,{fullWidth:!0,multiline:!0,rows:4,label:"사용 목적 (선택사항)",placeholder:"개인 비서를 어떤 용도로 사용하고 싶으신지 간단히 설명해주세요...",value:e,onChange:_=>t(_.target.value),sx:{mb:4},variant:"outlined"}),p.jsx(q,{sx:{display:"flex",gap:2,justifyContent:"center"},children:p.jsx(je,{type:"submit",variant:"contained",size:"large",disabled:r,startIcon:r?p.jsx(An,{size:20,color:"inherit"}):p.jsx(Va,{}),sx:{minWidth:200,py:1.5,borderRadius:2,fontWeight:"bold",boxShadow:"0 4px 15px rgba(25,118,210,0.3)","&:hover":{boxShadow:"0 6px 20px rgba(25,118,210,0.4)"}},children:r?"요청 중...":"접근 권한 요청하기"})})]})]})};ta.createRoot(document.getElementById("root")).render(p.jsx(Wr.StrictMode,{children:p.jsx(tA,{})}));export{ST as $,Gs as A,TA as B,vA as C,wA as D,xt as E,we as F,Gt as G,cA as H,Df as I,Uw as J,Sc as K,bc as L,Et as M,or as N,Of as O,He as P,Ac as Q,AA as R,bA as S,fT as T,wT as U,Tp as V,jT as W,UT as X,zT as Y,BT as Z,_e as _,xA as a,Ep as a0,RT as a1,xT as a2,RA as b,SA as c,pA as d,K0 as e,fA as f,Je as g,mA as h,lA as i,gA as j,hA as k,ii as l,G as m,At as n,W0 as o,Lc as p,_A as q,dA as r,Ae as s,rT as t,zh as u,Y0 as v,yA as w,EA as x,IA as y,uA as z};
