import{b as Re,n as Ce,r as ne,f as Ye,w as we,g as Ue,h as Ie,j as Je,s as oe,k as _,t as X,u as Ge,l as Ae,m as Qe,q as $e,x as qe,y as Xe,z as Ke,A as et,B as tt,d as Se,C as pe,D as it,E as Ne,F as nt,G as ot,_ as De,o as ce,c as je,H as st,T as rt,I as lt,S as at,J as ut,K as ht,L as ct,M as dt,N as ft,O as mt,P as vt,Q as wt,R as gt,V as xe,U as q,W as bt,X as pt,Y as xt,Z as yt,$ as Mt,a0 as ye,a1 as zt,a2 as Ct,a3 as It,a as At,e as St,i as Nt,p as Dt,v as jt}from"./vuetify-C7nYpWW0.js";import"./advanced-chat-DgPTNdN8.js";function kt(t){return Ue()?(Ie(t),!0):!1}const Et=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Lt=Object.prototype.toString,Tt=t=>Lt.call(t)==="[object Object]";function Bt(t,l){function o(...s){return new Promise((a,n)=>{Promise.resolve(t(()=>l.apply(this,s),{fn:l,thisArg:this,args:s})).then(a).catch(n)})}return o}const ke=t=>t();function _t(t=ke){const l=ne(!0);function o(){l.value=!1}function s(){l.value=!0}const a=(...n)=>{l.value&&t(...n)};return{isActive:Ye(l),pause:o,resume:s,eventFilter:a}}function Vt(t){return Je()}function me(t){return Array.isArray(t)?t:[t]}function Wt(t,l,o={}){const{eventFilter:s=ke,...a}=o;return we(t,Bt(s,l),a)}function Ot(t,l,o={}){const{eventFilter:s,...a}=o,{eventFilter:n,pause:w,resume:u,isActive:h}=_t(s);return{stop:Wt(t,l,{...a,eventFilter:n}),pause:w,resume:u,isActive:h}}function Pt(t,l=!0,o){Vt()?Re(t,o):l?t():Ce(t)}function Ft(t,l,o){return we(t,l,{...o,immediate:!0})}const ve=Et?window:void 0;function Zt(t){var l;const o=X(t);return(l=o==null?void 0:o.$el)!=null?l:o}function Me(...t){const l=[],o=()=>{l.forEach(u=>u()),l.length=0},s=(u,h,d,x)=>(u.addEventListener(h,d,x),()=>u.removeEventListener(h,d,x)),a=_(()=>{const u=me(X(t[0])).filter(h=>h!=null);return u.every(h=>typeof h!="string")?u:void 0}),n=Ft(()=>{var u,h;return[(h=(u=a.value)==null?void 0:u.map(d=>Zt(d)))!=null?h:[ve].filter(d=>d!=null),me(X(a.value?t[1]:t[0])),me(Ge(a.value?t[2]:t[1])),X(a.value?t[3]:t[2])]},([u,h,d,x])=>{if(o(),!(u!=null&&u.length)||!(h!=null&&h.length)||!(d!=null&&d.length))return;const f=Tt(x)?{...x}:x;l.push(...u.flatMap(W=>h.flatMap(k=>d.map(A=>s(W,k,A,f)))))},{flush:"post"}),w=()=>{n(),o()};return kt(o),w}const ue=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},he="__vueuse_ssr_handlers__",Ht=Rt();function Rt(){return he in ue||(ue[he]=ue[he]||{}),ue[he]}function Yt(t,l){return Ht[t]||l}function Ut(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}const Jt={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}},ze="vueuse-storage";function Gt(t,l,o,s={}){var a;const{flush:n="pre",deep:w=!0,listenToStorageChanges:u=!0,writeDefaults:h=!0,mergeDefaults:d=!1,shallow:x,window:f=ve,eventFilter:W,onError:k=m=>{console.error(m)},initOnMounted:A}=s,p=(x?oe:ne)(typeof l=="function"?l():l),S=_(()=>X(t));if(!o)try{o=Yt("getDefaultStorage",()=>{var m;return(m=ve)==null?void 0:m.localStorage})()}catch(m){k(m)}if(!o)return p;const v=X(l),z=Ut(v),C=(a=s.serializer)!=null?a:Jt[z],{pause:b,resume:Z}=Ot(p,()=>V(p.value),{flush:n,deep:w,eventFilter:W});we(S,()=>M(),{flush:n}),f&&u&&Pt(()=>{o instanceof Storage?Me(f,"storage",M,{passive:!0}):Me(f,ze,se),A&&M()}),A||M();function H(m,e){if(f){const i={key:S.value,oldValue:m,newValue:e,storageArea:o};f.dispatchEvent(o instanceof Storage?new StorageEvent("storage",i):new CustomEvent(ze,{detail:i}))}}function V(m){try{const e=o.getItem(S.value);if(m==null)H(e,null),o.removeItem(S.value);else{const i=C.write(m);e!==i&&(o.setItem(S.value,i),H(e,i))}}catch(e){k(e)}}function O(m){const e=m?m.newValue:o.getItem(S.value);if(e==null)return h&&v!=null&&o.setItem(S.value,C.write(v)),v;if(!m&&d){const i=C.read(e);return typeof d=="function"?d(i,v):z==="object"&&!Array.isArray(i)?{...v,...i}:i}else return typeof e!="string"?e:C.read(e)}function M(m){if(!(m&&m.storageArea!==o)){if(m&&m.key==null){p.value=v;return}if(!(m&&m.key!==S.value)){b();try{(m==null?void 0:m.newValue)!==C.write(p.value)&&(p.value=O(m))}catch(e){k(e)}finally{m?Ce(Z):Z()}}}}function se(m){M(m.detail)}return p}let Qt=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((l,o)=>(o&=63,o<36?l+=o.toString(36):o<62?l+=(o-26).toString(36).toUpperCase():o>62?l+="-":l+="_",l),"");function $t(t){const l=Gt("support-chat",new Map,t,{listenToStorageChanges:!0,serializer:{read:a=>new Map(JSON.parse(a).map(n=>[n.id,oe({...n,index:1e3})])),write:a=>JSON.stringify([...a.values()].sort((n,w)=>n.value.index-w.value.index).map(n=>{const{index:w,...u}=n.value;return u}))}});function o(){const a="winbox-"+Qt(7);l.value.set(a,oe({id:a,title:"My Window",index:1e3,x:100,y:100,width:500,height:300,min:!1,max:!1,full:!1,hidden:!1,focused:!0}))}function s(a){l.value.delete(a)}return{windows:l,createWindow:o,closeWindow:s}}const qt=Symbol.for("vuetify:layout"),Xt=Symbol.for("vuetify:layout-item"),Kt=Ae({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function ei(t){const l=Qe(qt);if(!l)throw new Error("[Vuetify] Could not find injected layout");const o=t.id??`layout-item-${$e()}`,s=qe("useLayoutItem");Xe(Xt,{id:o});const a=oe(!1);Ke(()=>a.value=!0),et(()=>a.value=!1);const{layoutItemStyles:n,layoutItemScrimStyles:w}=l.register(s,{...t,active:_(()=>a.value?!1:t.active.value),id:o});return tt(()=>l.unregister(o)),{layoutItemStyles:n,layoutRect:l.layoutRect,layoutItemScrimStyles:w}}(function(){var t,l=document.createElement("style");l.innerHTML="@keyframes wb-fade-in{0%{opacity:0}to{opacity:.85}}.winbox{position:fixed;left:0;top:0;background:#0050ff;box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);transition:width .3s,height .3s,left .3s,top .3s;transition-timing-function:cubic-bezier(.3,1,.3,1);contain:layout size;text-align:left;touch-action:none}.wb-body,.wb-header{position:absolute;left:0}.wb-header{top:0;width:100%;height:35px;line-height:35px;color:#fff;overflow:hidden;z-index:1}.wb-body{top:35px;right:0;bottom:0;overflow:auto;-webkit-overflow-scrolling:touch;overflow-scrolling:touch;will-change:contents;background:#fff;margin-top:0!important;contain:strict;z-index:0}.wb-control *,.wb-icon{background-repeat:no-repeat}body>.wb-body{position:relative;display:inline-block;visibility:hidden;contain:none}.wb-drag{height:100%;padding-left:10px;cursor:move}.wb-title{font-family:Arial,sans-serif;font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wb-icon{display:none;width:20px;height:100%;margin:-1px 8px 0-3px;float:left;background-size:100%;background-position:center}.wb-e,.wb-w{width:10px;top:0}.wb-n,.wb-s{left:0;height:10px;position:absolute}.wb-n{top:-5px;right:0;cursor:n-resize;z-index:2}.wb-e{position:absolute;right:-5px;bottom:0;cursor:w-resize;z-index:2}.wb-s{bottom:-5px;right:0;cursor:n-resize;z-index:2}.wb-nw,.wb-sw,.wb-w{left:-5px}.wb-w{position:absolute;bottom:0;cursor:w-resize;z-index:2}.wb-ne,.wb-nw,.wb-sw{width:15px;height:15px;z-index:2;position:absolute}.wb-nw{top:-5px;cursor:nw-resize}.wb-ne,.wb-sw{cursor:ne-resize}.wb-ne{top:-5px;right:-5px}.wb-se,.wb-sw{bottom:-5px}.wb-se{position:absolute;right:-5px;width:15px;height:15px;cursor:nw-resize;z-index:2}.wb-control{float:right;height:100%;max-width:100%;text-align:center}.wb-control *{display:inline-block;width:30px;height:100%;max-width:100%;background-position:center;cursor:pointer}.no-close .wb-close,.no-full .wb-full,.no-header .wb-header,.no-max .wb-max,.no-min .wb-min,.no-resize .wb-body~div,.wb-body .wb-hide,.wb-show,.winbox.hide,.winbox.min .wb-body>*,.winbox.min .wb-full,.winbox.min .wb-min,.winbox.modal .wb-full,.winbox.modal .wb-max,.winbox.modal .wb-min{display:none}.winbox.max .wb-drag,.winbox.min .wb-drag{cursor:default}.wb-min{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAyIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNOCAwaDdhMSAxIDAgMCAxIDAgMkgxYTEgMSAwIDAgMSAwLTJoN3oiLz48L3N2Zz4=);background-size:14px auto;background-position:center calc(50% + 6px)}.wb-max{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNmZmYiIHZpZXdCb3g9IjAgMCA5NiA5NiI+PHBhdGggZD0iTTIwIDcxLjMxMUMxNS4zNCA2OS42NyAxMiA2NS4yMyAxMiA2MFYyMGMwLTYuNjMgNS4zNy0xMiAxMi0xMmg0MGM1LjIzIDAgOS42NyAzLjM0IDExLjMxMSA4SDI0Yy0yLjIxIDAtNCAxLjc5LTQgNHY1MS4zMTF6Ii8+PHBhdGggZD0iTTkyIDc2VjM2YzAtNi42My01LjM3LTEyLTEyLTEySDQwYy02LjYzIDAtMTIgNS4zNy0xMiAxMnY0MGMwIDYuNjMgNS4zNyAxMiAxMiAxMmg0MGM2LjYzIDAgMTItNS4zNyAxMi0xMnptLTUyIDRjLTIuMjEgMC00LTEuNzktNC00VjM2YzAtMi4yMSAxLjc5LTQgNC00aDQwYzIuMjEgMCA0IDEuNzkgNCA0djQwYzAgMi4yMS0xLjc5IDQtNCA0SDQweiIvPjwvc3ZnPg==);background-size:17px auto}.wb-close{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xIC0xIDE4IDE4Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJtMS42MTMuMjEuMDk0LjA4M0w4IDYuNTg1IDE0LjI5My4yOTNsLjA5NC0uMDgzYTEgMSAwIDAgMSAxLjQwMyAxLjQwM2wtLjA4My4wOTRMOS40MTUgOGw2LjI5MiA2LjI5M2ExIDEgMCAwIDEtMS4zMiAxLjQ5N2wtLjA5NC0uMDgzTDggOS40MTVsLTYuMjkzIDYuMjkyLS4wOTQuMDgzQTEgMSAwIDAgMSAuMjEgMTQuMzg3bC4wODMtLjA5NEw2LjU4NSA4IC4yOTMgMS43MDdBMSAxIDAgMCAxIDEuNjEzLjIxeiIvPjwvc3ZnPg==);background-size:15px auto;background-position:5px center}.wb-full{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjIuNSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOCAzSDVhMiAyIDAgMCAwLTIgMnYzbTE4IDBWNWEyIDIgMCAwIDAtMi0yaC0zbTAgMThoM2EyIDIgMCAwIDAgMi0ydi0zTTMgMTZ2M2EyIDIgMCAwIDAgMiAyaDMiLz48L3N2Zz4=);background-size:16px auto}.winbox.max .wb-body~div,.winbox.min .wb-body~div,.winbox.modal .wb-body~div,.winbox.modal .wb-drag,body.wb-lock iframe{pointer-events:none}.winbox.max{box-shadow:none}.winbox.max .wb-body{margin:0!important}.winbox iframe{position:absolute;width:100%;height:100%;border:0}body.wb-lock .winbox{will-change:left,top,width,height;transition:none}.winbox.modal:before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;background:inherit;border-radius:inherit}.winbox.modal:after{content:'';position:absolute;top:-50vh;left:-50vw;right:-50vw;bottom:-50vh;background:#0d1117;animation:wb-fade-in .2s ease-out forwards;z-index:-1}.no-animation{transition:none}.no-shadow{box-shadow:none}.no-header .wb-body{top:0}.no-move:not(.min) .wb-title{pointer-events:none}.wb-body .wb-show{display:revert}";var o=document.getElementsByTagName("head")[0];o.firstChild?o.insertBefore(l,o.firstChild):o.appendChild(l);var s=document.createElement("div");s.innerHTML="<div class=wb-header><div class=wb-control><span class=wb-min></span><span class=wb-max></span><span class=wb-full></span><span class=wb-close></span></div><div class=wb-drag><div class=wb-icon></div><div class=wb-title></div></div></div><div class=wb-body></div><div class=wb-n></div><div class=wb-s></div><div class=wb-w></div><div class=wb-e></div><div class=wb-nw></div><div class=wb-ne></div><div class=wb-se></div><div class=wb-sw></div>";function a(e,i,r,g){e&&e.addEventListener(i,r,g||!1)}function n(e,i,r){var g=window;g&&g.removeEventListener(e,i,r||!1)}function w(e,i){e.stopPropagation(),i&&e.preventDefault()}function u(e,i,r){r=""+r,e["_s_"+i]!==r&&(e.style.setProperty(i,r),e["_s_"+i]=r)}var h=[],d=[],x={capture:!0,passive:!0},f,W=0,k=10,A,p,S,v,z;function C(e,i){if(!(this instanceof C))return new C(e);if(f||Z(),e){if(i){var r=e;e=i}if(typeof e=="string")r=e;else{var g=e.id,c=e.index,N=e.root,I=e.template;r=r||e.title;var E=e.icon,J=e.mount,K=e.html,y=e.url,D=e.width,j=e.height,L=e.minwidth,P=e.minheight,T=e.maxwidth,B=e.maxheight,de=e.autosize,F=e.overflow,R=e.min,Y=e.max,U=e.hidden,fe=e.modal,re=e.x||(fe?"center":0),le=e.y||(fe?"center":0),G=e.top,Q=e.left,ee=e.bottom,te=e.right,ge=e.background,$=e.border,ie=e.header,ae=e.class,be=e.oncreate,Ee=e.onclose,Le=e.onfocus,Te=e.onblur,Be=e.onmove,_e=e.onresize,Ve=e.onfullscreen,We=e.onmaximize,Oe=e.onminimize,Pe=e.onrestore,Fe=e.onhide,Ze=e.onshow,He=e.onload}}this.g=(I||s).cloneNode(!0),this.g.id=this.id=g||"winbox-"+ ++W,this.g.className="winbox"+(ae?" "+(typeof ae=="string"?ae:ae.join(" ")):"")+(fe?" modal":""),this.g.winbox=this,this.window=this.g,this.body=this.g.getElementsByClassName("wb-body")[0],this.h=ie||35,d.push(this),ge&&this.setBackground(ge),$?u(this.body,"margin",$+(isNaN($)?"":"px")):$=0,ie&&(i=this.g.getElementsByClassName("wb-header")[0],u(i,"height",ie+"px"),u(i,"line-height",ie+"px"),u(this.body,"top",ie+"px")),r&&this.setTitle(r),E&&this.setIcon(E),J?this.mount(J):K?this.body.innerHTML=K:y&&this.setUrl(y,He),G=G?b(G,z):0,ee=ee?b(ee,z):0,Q=Q?b(Q,v):0,te=te?b(te,v):0,r=v-Q-te,E=z-G-ee,T=T?b(T,r):r,B=B?b(B,E):E,L=L?b(L,T):150,P=P?b(P,B):this.h,de?((N||f).appendChild(this.body),D=Math.max(Math.min(this.body.clientWidth+2*$+1,T),L),j=Math.max(Math.min(this.body.clientHeight+this.h+$+1,B),P),this.g.appendChild(this.body)):(D=D?b(D,T):Math.max(T/2,L)|0,j=j?b(j,B):Math.max(B/2,P)|0),re=re?b(re,r,D):Q,le=le?b(le,E,j):G,this.x=re,this.y=le,this.width=D,this.height=j,this.s=L,this.o=P,this.m=T,this.l=B,this.top=G,this.right=te,this.bottom=ee,this.left=Q,this.index=c,this.j=F,this.focused=this.hidden=this.full=this.max=this.min=!1,this.onclose=Ee,this.onfocus=Le,this.onblur=Te,this.onmove=Be,this.onresize=_e,this.onfullscreen=Ve,this.onmaximize=We,this.onminimize=Oe,this.onrestore=Pe,this.onhide=Fe,this.onshow=Ze,Y?this.maximize():R?this.minimize():this.resize().move(),U?this.hide():(this.focus(),(c||c===0)&&(this.index=c,u(this.g,"z-index",c),c>k&&(k=c))),H(this),(N||f).appendChild(this.g),be&&be.call(this,e)}C.new=function(e){return new C(e)},C.stack=function(){return d};function b(e,i,r){return typeof e=="string"&&(e==="center"?e=(i-r)/2|0:e==="right"||e==="bottom"?e=i-r:(r=parseFloat(e),e=(""+r!==e&&e.substring((""+r).length))==="%"?i/100*r|0:r)),e}function Z(){f=document.body,f[p="requestFullscreen"]||f[p="msRequestFullscreen"]||f[p="webkitRequestFullscreen"]||f[p="mozRequestFullscreen"]||(p=""),S=p&&p.replace("request","exit").replace("mozRequest","mozCancel").replace("Request","Exit"),a(window,"resize",function(){se(),O()}),se()}function H(e){M(e,"drag"),M(e,"n"),M(e,"s"),M(e,"w"),M(e,"e"),M(e,"nw"),M(e,"ne"),M(e,"se"),M(e,"sw"),a(e.g.getElementsByClassName("wb-min")[0],"click",function(i){w(i),e.min?e.restore().focus():e.minimize()}),a(e.g.getElementsByClassName("wb-max")[0],"click",function(){e.max?e.restore().focus():e.maximize().focus()}),p?a(e.g.getElementsByClassName("wb-full")[0],"click",function(){e.fullscreen()}):e.addClass("no-full"),a(e.g.getElementsByClassName("wb-close")[0],"click",function(i){w(i),e.close()||(e=null)}),a(e.g,"click",function(){e.focus()})}function V(e){h.splice(h.indexOf(e),1),O(),e.removeClass("min"),e.min=!1,e.g.title=""}function O(){for(var e=h.length,i={},r={},g=0,c;g<e;g++)c=h[g],c=(c.left||c.right)+":"+(c.top||c.bottom),r[c]?r[c]++:(i[c]=0,r[c]=1);g=0;for(var N,I;g<e;g++)c=h[g],N=(c.left||c.right)+":"+(c.top||c.bottom),I=Math.min((v-c.left-c.right)/r[N],250),c.resize(I+1|0,c.h,!0).move(c.left+i[N]*I|0,z-c.bottom-c.h,!0),i[N]++}function M(e,i){function r(y){if(w(y),e.focus(),i==="drag"){if(e.min){e.restore();return}var D=Date.now(),j=D-K;if(K=D,300>j){e.max?e.restore():e.maximize();return}}e.min||(f.classList.add("wb-lock"),(I=y.touches)&&(I=I[0])?(y=I,a(window,"touchmove",g,x),a(window,"touchend",c,x)):(a(window,"mousemove",g),a(window,"mouseup",c)),E=y.pageX,J=y.pageY)}function g(y){w(y,!I),I&&(y=y.touches[0]);var D=y.pageX;y=y.pageY;var j=D-E,L=y-J,P=e.width,T=e.height,B=e.x,de=e.y,F;if(i==="drag"){e.x+=j,e.y+=L;var R=F=1}else{if(i==="e"||i==="se"||i==="ne"){e.width+=j;var Y=1}else(i==="w"||i==="sw"||i==="nw")&&(e.x+=j,e.width-=j,R=Y=1);if(i==="s"||i==="se"||i==="sw"){e.height+=L;var U=1}else(i==="n"||i==="ne"||i==="nw")&&(e.y+=L,e.height-=L,F=U=1)}Y&&(e.width=Math.max(Math.min(e.width,e.m,v-e.x-e.right),e.s),Y=e.width!==P),U&&(e.height=Math.max(Math.min(e.height,e.l,z-e.y-e.bottom),e.o),U=e.height!==T),(Y||U)&&e.resize(),R&&(e.max&&(e.x=(D<v/3?e.left:D>v/3*2?v-e.width-e.right:v/2-e.width/2)+j),e.x=Math.max(Math.min(e.x,e.j?v-30:v-e.width-e.right),e.j?30-e.width:e.left),R=e.x!==B),F&&(e.max&&(e.y=e.top+L),e.y=Math.max(Math.min(e.y,e.j?z-e.h:z-e.height-e.bottom),e.top),F=e.y!==de),(R||F)&&(e.max&&e.restore(),e.move()),(Y||R)&&(E=D),(U||F)&&(J=y)}function c(y){w(y),f.classList.remove("wb-lock"),I?(n("touchmove",g,x),n("touchend",c,x)):(n("mousemove",g),n("mouseup",c))}var N=e.g.getElementsByClassName("wb-"+i)[0];if(N){var I,E,J,K=0;a(N,"mousedown",r),a(N,"touchstart",r,x)}}function se(){var e=document.documentElement;v=e.clientWidth,z=e.clientHeight}t=C.prototype,t.mount=function(e){return this.unmount(),e.i||(e.i=e.parentNode),this.body.textContent="",this.body.appendChild(e),this},t.unmount=function(e){var i=this.body.firstChild;if(i){var r=e||i.i;r&&r.appendChild(i),i.i=e}return this},t.setTitle=function(e){var i=this.g.getElementsByClassName("wb-title")[0];e=this.title=e;var r=i.firstChild;return r?r.nodeValue=e:i.textContent=e,this},t.setIcon=function(e){var i=this.g.getElementsByClassName("wb-icon")[0];return u(i,"background-image","url("+e+")"),u(i,"display","inline-block"),this},t.setBackground=function(e){return u(this.g,"background",e),this},t.setUrl=function(e,i){var r=this.body.firstChild;return r&&r.tagName.toLowerCase()==="iframe"?r.src=e:(this.body.innerHTML='<iframe src="'+e+'"></iframe>',i&&(this.body.firstChild.onload=i)),this},t.focus=function(e){if(e===!1)return this.blur();if(!this.focused){if(e=d.length,1<e)for(var i=1;i<=e;i++){var r=d[e-i];if(r.focused){r.blur(),d.push(d.splice(d.indexOf(this),1)[0]);break}}u(this.g,"z-index",++k),this.index=k,this.addClass("focus"),this.focused=!0,this.onfocus&&this.onfocus()}return this},t.blur=function(e){return e===!1?this.focus():(this.focused&&(this.removeClass("focus"),this.focused=!1,this.onblur&&this.onblur()),this)},t.hide=function(e){if(e===!1)return this.show();if(!this.hidden)return this.onhide&&this.onhide(),this.hidden=!0,this.addClass("hide")},t.show=function(e){if(e===!1)return this.hide();if(this.hidden)return this.onshow&&this.onshow(),this.hidden=!1,this.removeClass("hide")},t.minimize=function(e){if(e===!1)return this.restore();if(A&&m(),this.max&&(this.removeClass("max"),this.max=!1),!this.min){if(h.push(this),O(),this.g.title=this.title,this.addClass("min"),this.blur(),this.min=!0,e=d.length,1<e)for(var i=1;i<=e;i++){var r=d[e-i];if(!r.min){r.focus();break}}this.onminimize&&this.onminimize()}return this},t.restore=function(){return A&&m(),this.min&&(V(this),this.resize().move(),this.onrestore&&this.onrestore()),this.max&&(this.max=!1,this.removeClass("max").resize().move(),this.onrestore&&this.onrestore()),this},t.maximize=function(e){return e===!1?this.restore():(A&&m(),this.min&&V(this),this.max||(this.addClass("max").resize(v-this.left-this.right,z-this.top-this.bottom,!0).move(this.left,this.top,!0),this.max=!0,this.onmaximize&&this.onmaximize()),this)},t.fullscreen=function(e){if(this.min&&(V(this),this.resize().move()),!A||!m())this.body[p](),A=this,this.full=!0,this.onfullscreen&&this.onfullscreen();else if(e===!1)return this.restore();return this};function m(){if(A.full=!1,document.fullscreen||document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)return document[S](),!0}t.close=function(e){if(this.onclose&&this.onclose(e))return!0;this.min&&V(this),d.splice(d.indexOf(this),1),this.unmount(),this.g.remove(),this.g.textContent="",this.g=this.body=this.g.winbox=null},t.move=function(e,i,r){return e||e===0?r||(this.x=e?e=b(e,v-this.left-this.right,this.width):0,this.y=i?i=b(i,z-this.top-this.bottom,this.height):0):(e=this.x,i=this.y),u(this.g,"left",e+"px"),u(this.g,"top",i+"px"),this.onmove&&this.onmove(e,i),this},t.resize=function(e,i,r){return e||e===0?r||(this.width=e?e=b(e,this.m):0,this.height=i?i=b(i,this.l):0,e=Math.max(e,this.s),i=Math.max(i,this.o)):(e=this.width,i=this.height),u(this.g,"width",e+"px"),u(this.g,"height",i+"px"),this.onresize&&this.onresize(e,i),this},t.addControl=function(e){var i=e.class,r=e.image,g=e.click;e=e.index;var c=document.createElement("span"),N=this.g.getElementsByClassName("wb-control")[0],I=this;return i&&(c.className=i),r&&u(c,"background-image","url("+r+")"),g&&(c.onclick=function(E){g.call(this,E,I)}),N.insertBefore(c,N.childNodes[e||0]),this},t.removeControl=function(e){return(e=this.g.getElementsByClassName(e)[0])&&e.remove(),this},t.addClass=function(e){return this.g.classList.add(e),this},t.removeClass=function(e){return this.g.classList.remove(e),this},t.toggleClass=function(e){return this.g.classList.contains(e)?this.removeClass(e):this.addClass(e)},window.WinBox=C}).call(void 0);const ti=Se({__name:"VueWinBox",props:pe({icon:{default:void 0},class:{default:"modern"},minheight:{default:400},minwidth:{default:250},overflow:{type:Boolean,default:!0}},{modelValue:{required:!0,default:{title:"My Window",index:1e3,x:100,y:100,width:500,height:400,focused:!0}},modelModifiers:{}}),emits:pe(["close"],["update:modelValue"]),setup(t,{expose:l,emit:o}){l();const s=ne(null),a=t,n=it(t,"modelValue"),w=o;Ne(()=>{var h,d,x,f,W,k,A,p,S,v,z,C,b,Z,H,V,O,M;((h=s.value)==null?void 0:h.title)!==n.value.title&&((d=s.value)==null||d.setTitle(n.value.title)),(((x=s.value)==null?void 0:x.x)!==n.value.x||((f=s.value)==null?void 0:f.y)!==n.value.y)&&((W=s.value)==null||W.move(n.value.x,n.value.y)),(((k=s.value)==null?void 0:k.width)!==n.value.width||((A=s.value)==null?void 0:A.height)!==n.value.height)&&((p=s.value)==null||p.resize(n.value.width,n.value.height)),((S=s.value)==null?void 0:S.min)!==n.value.min&&((v=s.value)==null||v.minimize(n.value.min)),((z=s.value)==null?void 0:z.max)!==n.value.max&&((C=s.value)==null||C.maximize(n.value.max)),((b=s.value)==null?void 0:b.full)!==n.value.full&&((Z=s.value)==null||Z.fullscreen(n.value.full)),((H=s.value)==null?void 0:H.hidden)!==n.value.hidden&&((V=s.value)==null||V.hide(n.value.hidden)),((O=s.value)==null?void 0:O.focused)!==n.value.focused&&((M=s.value)==null||M.focus(n.value.focused))}),nt(()=>{s.value=new WinBox({...a,...n.value,oncreate(){n.value.id=this.id},onmove(h,d){n.value.x=h,n.value.y=d},onresize(h,d){n.value.width=h,n.value.height=d},onclose(){return w("close",this.id),s.value=null,!1},onminimize(){n.value.min=!0},onmaximize(){n.value.max=!0},onfullscreen(){n.value.full=!0},onrestore(){n.value.min=!1,n.value.max=!1,n.value.full=!1},onhide(){n.value.hidden=!0},onshow(){n.value.hidden=!1},onfocus(){n.value.focused=!0,n.value.index=this.index},onblur(){n.value.focused=!1,n.value.index=this.index}})}),Ie(()=>{var h;(h=ot(s.value))==null||h.close()});const u={winbox:s,props:a,model:n,emit:w};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}});function ii(t,l,o,s,a,n){return s.winbox?(ce(),je(rt,{key:0,to:`#${s.winbox.id} .wb-body`},[st(t.$slots,"default")],8,["to"])):lt("",!0)}const ni=De(ti,[["render",ii],["__file","VueWinBox.vue"]]),oi="/vendor/support-chat/build/assets/favicon-DXKRda58.svg",si=Se({__name:"Win",setup(t,{expose:l}){l();const{windows:o,createWindow:s,closeWindow:a}=$t(),n={windows:o,createWindow:s,closeWindow:a,VueWinBox:ni,SupportChat:at,get icon(){return oi}};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}}),ri=Ae({app:Boolean,appear:Boolean,extended:Boolean,layout:Boolean,offset:Boolean,modelValue:{type:Boolean,default:!0},...ut(ht({active:!0}),["location"]),...Kt(),...ct(),...dt({transition:"fab-transition"})},"VFab"),li=ft()({name:"VFab",props:ri(),emits:{"update:modelValue":t=>!0},setup(t,l){let{slots:o}=l;const s=mt(t,"modelValue"),a=oe(56),n=ne(),{resizeRef:w}=vt(f=>{f.length&&(a.value=f[0].target.clientHeight)}),u=_(()=>t.app||t.absolute),h=_(()=>{var f;return u.value?((f=t.location)==null?void 0:f.split(" ").shift())??"bottom":!1}),d=_(()=>{var f;return u.value?((f=t.location)==null?void 0:f.split(" ")[1])??"end":!1});wt(()=>t.app,()=>{const f=ei({id:t.name,order:_(()=>parseInt(t.order,10)),position:h,layoutSize:_(()=>t.layout?a.value+24:0),elementSize:_(()=>a.value+24),active:_(()=>t.app&&s.value),absolute:Mt(t,"absolute")});Ne(()=>{n.value=f.layoutItemStyles.value})});const x=ne();return gt(()=>{const f=xe.filterProps(t);return q("div",{ref:x,class:["v-fab",{"v-fab--absolute":t.absolute,"v-fab--app":!!t.app,"v-fab--extended":t.extended,"v-fab--offset":t.offset,[`v-fab--${h.value}`]:u.value,[`v-fab--${d.value}`]:u.value},t.class],style:[t.app?{...n.value}:{height:"inherit",width:void 0},t.style]},[q("div",{class:"v-fab__container"},[q(bt,{appear:t.appear,transition:t.transition},{default:()=>[pt(q(xe,yt({ref:w},f,{active:void 0,location:void 0}),o),[[xt,t.active]])]})])])}),{}}});function ai(t,l,o,s,a,n){return ce(),ye("div",null,[(ce(!0),ye(zt,null,Ct(s.windows,([w,u])=>(ce(),je(s.VueWinBox,{key:w,modelValue:u.value,"onUpdate:modelValue":h=>u.value=h,icon:s.icon,class:"modern",minwidth:"300",minheight:"450",onClose:s.closeWindow},{default:It(()=>[q(s.SupportChat,{modelValue:u.value.title,"onUpdate:modelValue":h=>u.value.title=h,height:u.value.height},null,8,["modelValue","onUpdate:modelValue","height"])]),_:2},1032,["modelValue","onUpdate:modelValue","icon","onClose"]))),128)),q(li,{class:"fixed",icon:"$vuetify",color:"primary",onClick:s.createWindow},null,8,["onClick"])])}const ui=De(si,[["render",ai],["__scopeId","data-v-cf637c01"],["__file","Win.vue"]]);At(ui).use(St).use(Nt).use(Dt).use(jt).mount("#windowed-chat");
//# sourceMappingURL=win-DPv-Zb6d.js.map
