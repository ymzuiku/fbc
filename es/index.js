var u={compMap:{"":{}},classNameCache:{}};var $,x=()=>{if($)return $;let e=navigator.userAgent.toLocaleLowerCase(),t=/(?:android)/.test(e),a=/(?:firefox)/.test(e),c=/(?:chrome|crios)/.test(e),o=/(safari)/.test(e),n=/(?:ipad|playbook)/.test(e)||t&&!/(?:mobile)/.test(e)||a&&/(?:tablet)/.test(e),m=/(?:iphone)/.test(e)&&!n,s=!m&&!t,r=!s,i=r&&/(micromessenger|wechat)/.test(e);return $={android:t,firefox:a,chrome:c,tablet:n,ios:m,wechat:i,pc:s,phone:r,safari:o},$};function O(e,t,a){e.comp=t[a],e.comp?e.compName=a:e.name=a}function H(e,t){b[t]?(e.media=b[t],e.mediaName=t):x()[t]!==void 0&&(e.media=`@media screen and (min-width: ${x()[t]?"0px":"9999px"})`,e.mediaName=t)}var b={all:"",print:"@media print",speech:"@media speech",dark:"@media (prefers-color-scheme: dark)",xs:"@media screen and (min-width: 480px)",sm:"@media screen and (min-width: 640px)",md:"@media screen and (min-width: 768px)",lg:"@media screen and (min-width: 1024px)",xl:"@media screen and (min-width: 1280px)",xxl:"@media screen and (min-width: 1536px)","in-xs":"@media screen (max-width:479px) and (min-width: 0px)","in-sm":"@media screen (max-width:767px) and (min-width: 479px)","in-md":"@media screen (max-width:1023px) and (min-width: 767px)","in-lg":"@media screen (max-width:1279px) and (min-width: 1023px)","in-xl":"@media screen (max-width:1535px) and (min-width: 1279px)","in-xxl":"@media screen (max-width:9999px) and (min-width: 1535px)"},A={};function j(e,t){!t||(e.comp&&(t=t.replace(/\((.*?)\)/g,a=>a.replace(/\,/g,"^^^"))),e.value=t)}function g(e,t){let a=e+"_$$_"+t,c=A[a];if(c)return c;let o={comp:void 0,compName:"",pesudo:"",pesudoName:"",media:"",mediaName:"",name:"",value:"",query:""};if(!t||t[0]==="/"&&t[1]==="/")return A[a]=o,o;let n=u.compMap[e]||{},m=t.split(":");H(o,m[0]),o.mediaName&&m.shift();let s=m.length,r=m[s-1],i=s>=2?m[s-2]:"",p=[...m];return n[r]?(o.comp=n[r],o.compName=r,p.pop()):i?(O(o,n,i),j(o,r),p.pop(),p.pop()):(o.name=r,p.pop()),o.pesudo=p.join(":"),o.pesudoName=o.pesudo,A[a]=o,o}var D={"(":1,";":1,":":1,"=":1},w=({css:e,name:t="",media:a="",mediaName:c="",pesudo:o="",group:n=""})=>{if(!e)return;let m=`^sty_${e}_${t}_${a}_${o}_${n}`;if(u.classNameCache[m])return;u.classNameCache[m]=!0;let s=g(n,e),r=s.value;if(!r)return;let i=r[r.length-1];if(D[i])return;i==="!"&&(r=r.replace(/(!$)/," !important")),s.media&&(a=s.media),s.mediaName&&(c=s.mediaName),s.pesudo&&(o=s.pesudo);let p=r.split("~");p.length>1&&(r=" "+p.map(f=>`"${f}"`).join(" "),r+=";"),r=r.replace(/calc\((.*?)\)/g,f=>(f=f.replace(/(-|\+|\*|\/)/g,T=>" "+T+" "),f)),r=r.replace(/\|/g," "),r=r.replace(/var\((.*?)\)/g,f=>f.replace(/(var\(|\))/g,"")),r=r.replace(/--([a-zA-Z0-9_-]*)/g,f=>`var(${f})`),r=r.replace(/\^\^\^/g,",");let l=(t||e).replace(/(\:|#|\*|!|,|\.|>|<|@|~|%|\||\$|\{|\}|\[|\]|\(|\)|\+|\*|\/)/g,f=>"\\"+f),d=n?`.\\*${n}`:"";/^(\w|\*)/.test(o)&&(o=" "+o),o=o.replace(/\|/g," ");let h=document.createElement("style");if(a?h.textContent=`${a} {.${l}${d}${o}{${s.name}:${r}}}`:h.textContent=`.${l}${d}${o}{${s.name}:${r}}`,h.setAttribute("flavor-css",""),document.head.append(h),c){let f=document.createElement("style");f.textContent=`.media-${c} .${l}${d}${o}{${s.name}:${r}}`,f.setAttribute("flavor-css",""),document.head.append(f)}};var M={},C=e=>{let t=M[e];if(t)return t;let a=[];e=e.replace(/\n/g," ");let c=[],o=e.match(/\*(.\w?)\s/g),n={};if(o)o.forEach(r=>{if(r){let i=r.replace(/(\*|\s)/g,"");i&&(c.push(i),n[i]=!0)}});else return a.push({group:"",cssItem:e}),M[e]=a,a;let m=/\*(.*?)\s/g,s=e.split(m);return s.forEach((r,i)=>{if(r=r.trim(),!r)return;let p=s[i+1];i===0&&!n[r]&&a.push({cssItem:r,group:""}),n[r]&&p&&!n[p]&&a.push({cssItem:p.trim(),group:r})}),M[e]=a,a};var y=(e,t="",a="",c="",o="",n="")=>{let m=`^parser_${e}_${t}_${a}_${c}_${o}`;return u.classNameCache[m]||(u.classNameCache[m]=!0,C(e).forEach(({cssItem:s,group:r})=>{s.split(" ").filter(Boolean).forEach(i=>{let p=r,l=g(r,i);if(l.comp||(l=g("",i),p=""),l.comp){let d=l.comp(l.value.split(","));y(d,i,l.media,l.mediaName,l.pesudo,p)}else w({css:i,name:t,media:a,mediaName:c,pesudo:o,group:n})})})),e};var S={},k=(e,t,a)=>{let c=`^group_${e}_${t}_${a}`;S[c]||(S[c]=!0,u.compMap[e]||(u.compMap[e]={}),u.compMap[e][t]=o=>{let n=a;o.forEach((i,p)=>{n=n.replace(new RegExp(`(\\$${p+1})`,"g"),i)});let m=o[o.length],s=i=>{n.indexOf("$"+i)>-1&&(n=n.replace(new RegExp(`(\\$${i+1})`,"g"),m),s(i+1))};s(a.length+1);let r="";return C(n).forEach(({cssItem:i,group:p})=>{i.split(" ").forEach(l=>{let d=g(p,l);d.comp||(d=g(e,l),!d.comp&&e!==""&&p!==""&&(d=g("",l))),d.comp&&d.compName!==t?d.comp(d.value.split(",")).split(" ").forEach(f=>{r+=[d.query,d.mediaName,d.pesudoName,f].filter(Boolean).join(":")+" "}):r+=l+" "})}),r})};var E=(e,t)=>{!t||(t=t.replace(`
`,""),t=t.replace(/(\/\/\s)/g,"//"),t.trim().split(";").forEach(a=>{let[c,...o]=a.split(":");c=c.trim(),c&&k(e,c,o.join(":").trim())}))},L=(e,t)=>{t?E(e,t):E("",e)};var G="[class]",q=()=>{document.head.querySelectorAll("style[flavor-css]").forEach(e=>{e.remove()}),u.compMap={},u.classNameCache={},document.querySelectorAll("[flavor]").forEach(v),document.body.querySelectorAll(G).forEach(N)};function v(e){let t=e.getAttribute("flavor");if(t==null)return;let a="";if(e.tagName==="TEMPLATE"){let c=e.content.cloneNode(!0);c&&(a=c.textContent)}else a=e.textContent;E(t,a)}function N(e){!e||e.className&&typeof e.className=="string"&&y(e.className)}var V=()=>{let e=(a,...c)=>{let o=a.length;for(let n=0;n<o;n++){let m=a[n];if(m.type==="childList"){let s=m.target;if(s.__flavorIgnore&&s.closest("[flavor-ignore]")&&!s.getAttribute("flavor-ignore")){s.__flavorIgnore=!0;return}v(s),N(s),m.addedNodes.length&&(s.querySelectorAll("[flavor]").forEach(v),s.querySelectorAll(G).forEach(N))}else m.type==="attributes"&&N(m.target)}};new MutationObserver(e).observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["class"],characterData:!1,attributeOldValue:!1,characterDataOldValue:!1})},F=!1;var _=()=>{if(!(typeof window=="undefined"||typeof document=="undefined"||!window.location)&&!F){if(!window.MutationObserver){console.error("[flavorcss] Your Browser not supported MutationObserver");return}if(!document.body){requestAnimationFrame(_);return}document.querySelectorAll("[flavor]").forEach(v),document.body.querySelectorAll(G).forEach(e=>{N(e)}),V(),F=!0}};_();var I={addStyle:w,device:x,parser:y,observeClass:_,addGroup:L,mediaList:b,cache:u,reset:q};window.flavorcss=I;export{I as flavorcss};
