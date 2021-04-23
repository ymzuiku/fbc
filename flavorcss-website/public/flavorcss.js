var f={compMap:{"":{}},classNameCache:{}};var g=navigator.userAgent.toLocaleLowerCase(),v=/(?:android)/.test(g),L=/(?:firefox)/.test(g),R=/(?:chrome|crios)/.test(g),z=/(safari)/.test(g),q=/(?:ipad|playbook)/.test(g)||v&&!/(?:mobile)/.test(g)||L&&/(?:tablet)/.test(g),F=/(?:iphone)/.test(g)&&!q,I=!F&&!v,T=!I,K=T&&/(micromessenger|wechat)/.test(g),y={android:v,firefox:L,chrome:R,tablet:q,ios:F,wechat:K,desktop:I,phone:T,safari:z};function P(e,t,s){e.comp=t[s],e.comp?e.compName=s:e.name=s}function Y(e,t){w[t]?(e.media=w[t],e.mediaName=t):y[t]!==void 0&&(e.media=`@media screen and (min-width: ${y[t]?"0px":"9999px"})`,e.mediaName=t)}var w={all:"",print:"@media print",speech:"@media speech",fine:"@media (pointer: fine)",dark:"@media (prefers-color-scheme: dark)",xs:"@media screen and (min-width: 480px)",sm:"@media screen and (min-width: 640px)",md:"@media screen and (min-width: 768px)",lg:"@media screen and (min-width: 1024px)",xl:"@media screen and (min-width: 1280px)",xxl:"@media screen and (min-width: 1536px)","in-xs":"@media screen (max-width:479px) and (min-width: 0px)","in-sm":"@media screen (max-width:767px) and (min-width: 479px)","in-md":"@media screen (max-width:1023px) and (min-width: 767px)","in-lg":"@media screen (max-width:1279px) and (min-width: 1023px)","in-xl":"@media screen (max-width:1535px) and (min-width: 1279px)","in-xxl":"@media screen (max-width:9999px) and (min-width: 1535px)"},M={};function Z(e,t){!t||(e.comp&&(t=t.replace(/\((.*?)\)/g,s=>s.replace(/\,/g,"^^^"))),e.value=t)}function h(e,t){let s=e+"_$$_"+t,c=M[s];if(c)return c;let a={comp:void 0,compName:"",pesudo:"",pesudoName:"",media:"",mediaName:"",name:"",value:"",query:""};if(!t||t[0]==="/"&&t[1]==="/")return M[s]=a,a;let n=f.compMap[e]||{},m=t.split(":");Y(a,m[0]),a.mediaName&&m.shift();let o=m.length,r=m[o-1],i=o>=2?m[o-2]:"",p=[...m];return n[r]?(a.comp=n[r],a.compName=r,p.pop()):i?(P(a,n,i),Z(a,r),p.pop(),p.pop()):(a.name=r,p.pop()),a.pesudo=p.join(":"),a.pesudoName=a.pesudo,M[s]=a,a}var J={"(":1,";":1,":":1,"=":1},C=({css:e,name:t="",media:s="",mediaName:c="",pesudo:a="",group:n=""})=>{if(!e)return;let m=`^sty_${e}_${t}_${s}_${a}_${n}`;if(f.classNameCache[m])return;f.classNameCache[m]=!0;let o=h(n,e),r=o.value;if(!r)return;let i=r[r.length-1];if(J[i])return;if(i==="!"&&(r=r.replace(/(!$)/," !important")),o.media&&(s=o.media),o.mediaName&&(c=o.mediaName),o.pesudo&&(a=o.pesudo),/\~/.test(r)){let x=r.split("~").map(k=>k?`"${k}"`:"").join(" ");r=" "+x,r+=";"}r=r.replace(/calc\((.*?)\)/g,u=>(u=u.replace(/(-|\+|\*|\/)/g,x=>" "+x+" "),u)),r=r.replace(/\|/g," "),r=r.replace(/var\((.*?)\)/g,u=>u.replace(/(var\(|\))/g,"")),r=r.replace(/--([a-zA-Z0-9_-]*)/g,u=>`var(${u})`),r=r.replace(/\^\^\^/g,",");let p=(t||e).replace(/(\:|#|\*|!|,|\.|>|<|@|~|%|\||\$|\{|\}|\[|\]|\(|\)|\+|\*|\/)/g,u=>"\\"+u),d=n?`.\\*${n}`:"";/^(\w|\*)/.test(a)&&(a=" "+a),a=a.replace(/\|/g," ");let l=document.createElement("style");if(s?l.textContent=`${s} {.${p}${d}${a}{${o.name}:${r}}}`:l.textContent=`.${p}${d}${a}{${o.name}:${r}}`,l.setAttribute("flavor-css",""),document.head.append(l),c){let u=document.createElement("style");u.textContent=`.media-${c} .${p}${d}${a}{${o.name}:${r}}`,u.setAttribute("flavor-css",""),document.head.append(u)}};var G={},b=e=>{let t=G[e];if(t)return t;let s=[];e=e.replace(/\n/g," ");let c=[],a=e.match(/\*(.\w?)\s/g),n={};if(a)a.forEach(r=>{if(r){let i=r.replace(/(\*|\s)/g,"");i&&(c.push(i),n[i]=!0)}});else return s.push({group:"",cssItem:e}),G[e]=s,s;let m=/\*(.*?)\s/g,o=e.split(m);return o.forEach((r,i)=>{if(r=r.trim(),!r)return;let p=o[i+1];i===0&&!n[r]&&s.push({cssItem:r,group:""}),n[r]&&p&&!n[p]&&s.push({cssItem:p.trim(),group:r})}),G[e]=s,s};var N=(e,t="",s="",c="",a="",n="")=>{let m=`^parser_${e}_${t}_${s}_${c}_${a}`;return f.classNameCache[m]||(f.classNameCache[m]=!0,b(e).forEach(({cssItem:o,group:r})=>{o.split(" ").filter(Boolean).forEach(i=>{let p=r,d=h(r,i);if(d.comp||(d=h("",i),p=""),d.comp){let l=d.comp(d.value.split(","));N(l,i,d.media,d.mediaName,d.pesudo,p)}else C({css:i,name:t,media:s,mediaName:c,pesudo:a,group:n})})})),e};var O={},H=(e,t,s)=>{let c=`^group_${e}_${t}_${s}`;O[c]||(O[c]=!0,f.compMap[e]||(f.compMap[e]={}),f.compMap[e][t]=a=>{let n=s;a.forEach((i,p)=>{n=n.replace(new RegExp(`(\\$${p+1})`,"g"),i)});let m=a[a.length],o=i=>{n.indexOf("$"+i)>-1&&(n=n.replace(new RegExp(`(\\$${i+1})`,"g"),m),o(i+1))};o(s.length+1);let r="";return b(n).forEach(({cssItem:i,group:p})=>{i.split(" ").forEach(d=>{let l=h(p,d);l.comp||(l=h(e,d),!l.comp&&e!==""&&p!==""&&(l=h("",d))),l.comp&&l.compName!==t?l.comp(l.value.split(",")).split(" ").forEach(x=>{r+=[l.query,l.mediaName,l.pesudoName,x].filter(Boolean).join(":")+" "}):r+=d+" "})}),r})};var E=(e,t)=>{!t||(t=t.replace(`
`,""),t=t.replace(/(\/\/\s)/g,"//"),t.trim().split(";").forEach(s=>{let[c,...a]=s.split(":");c=c.trim(),c&&H(e,c,a.join(":").trim())}))},j=(e,t)=>{t?E(e,t):E("",e)};var S="[class]",V=()=>{document.head.querySelectorAll("style[flavor-css]").forEach(e=>{e.remove()}),f.compMap={},f.classNameCache={},document.querySelectorAll("[flavor]").forEach(_),document.body.querySelectorAll(S).forEach($)};function _(e){let t=e.getAttribute("flavor");if(t==null)return;let s="";if(e.tagName==="TEMPLATE"){let c=e.content.cloneNode(!0);c&&(s=c.textContent)}else s=e.textContent;E(t,s)}function $(e){!e||e.className&&typeof e.className=="string"&&N(e.className)}var Q=()=>{let e=(s,...c)=>{let a=s.length;for(let n=0;n<a;n++){let m=s[n];if(m.type==="childList"){let o=m.target;if(o.__flavorIgnore&&o.closest("[flavor-ignore]")&&!o.getAttribute("flavor-ignore")){o.__flavorIgnore=!0;return}_(o),$(o),m.addedNodes.length&&(o.querySelectorAll("[flavor]").forEach(_),o.querySelectorAll(S).forEach($))}else m.type==="attributes"&&$(m.target)}};new MutationObserver(e).observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["class"],characterData:!1,attributeOldValue:!1,characterDataOldValue:!1})},B=!1;var A=()=>{if(!(typeof window=="undefined"||typeof document=="undefined"||!window.location)&&!B){if(!window.MutationObserver){console.error("[flavorcss] Your Browser not supported MutationObserver");return}if(!document.body){requestAnimationFrame(A);return}document.querySelectorAll("[flavor]").forEach(_),document.body.querySelectorAll(S).forEach(e=>{$(e)}),Q(),B=!0}};A();var D={addStyle:C,os:y,parser:N,observeClass:A,addGroup:j,mediaList:w,cache:f,reset:V};window.flavorcss=D;export{D as flavorcss};