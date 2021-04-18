var f={compMap:{"":{}},classNameCache:{}};var b,x=()=>{if(b)return b;let e=navigator.userAgent.toLocaleLowerCase(),t=/(?:android)/.test(e),a=/(?:firefox)/.test(e),m=/(?:chrome|crios)/.test(e),o=/(safari)/.test(e),n=/(?:ipad|playbook)/.test(e)||t&&!/(?:mobile)/.test(e)||a&&/(?:tablet)/.test(e),c=/(?:iphone)/.test(e)&&!n,s=!c&&!t,r=!s,i=r&&/(micromessenger|wechat)/.test(e),l=c&&window.screen.height>=812,p=window.location.href.indexOf("native")>-1;return b={isNeedSafeBottom:l,isNeedSafeTop:p,android:t,firefox:a,chrome:m,tablet:n,ios:c,wechat:i,pc:s,phone:r,safari:o},b};function O(e,t,a){e.comp=t[a],e.comp?e.compName=a:e.name=a}function B(e,t){$[t]?(e.media=$[t],e.mediaName=t):x()[t]!==void 0&&(e.media=`@media screen and (min-width: ${x()[t]?"0px":"9999px"})`,e.mediaName=t)}var $={all:"",print:"@media print",speech:"@media speech",fine:"@media (pointer: fine)",dark:"@media (prefers-color-scheme: dark)",xs:"@media screen and (min-width: 480px)",sm:"@media screen and (min-width: 640px)",md:"@media screen and (min-width: 768px)",lg:"@media screen and (min-width: 1024px)",xl:"@media screen and (min-width: 1280px)",xxl:"@media screen and (min-width: 1536px)","in-xs":"@media screen (max-width:479px) and (min-width: 0px)","in-sm":"@media screen (max-width:767px) and (min-width: 479px)","in-md":"@media screen (max-width:1023px) and (min-width: 767px)","in-lg":"@media screen (max-width:1279px) and (min-width: 1023px)","in-xl":"@media screen (max-width:1535px) and (min-width: 1279px)","in-xxl":"@media screen (max-width:9999px) and (min-width: 1535px)"},A={};function H(e,t){!t||(e.comp&&(t=t.replace(/\((.*?)\)/g,a=>a.replace(/\,/g,"^^^"))),e.value=t)}function g(e,t){let a=e+"_$$_"+t,m=A[a];if(m)return m;let o={comp:void 0,compName:"",pesudo:"",pesudoName:"",media:"",mediaName:"",name:"",value:"",query:""};if(!t||t[0]==="/"&&t[1]==="/")return A[a]=o,o;let n=f.compMap[e]||{},c=t.split(":");B(o,c[0]),o.mediaName&&c.shift();let s=c.length,r=c[s-1],i=s>=2?c[s-2]:"",l=[...c];return n[r]?(o.comp=n[r],o.compName=r,l.pop()):i?(O(o,n,i),H(o,r),l.pop(),l.pop()):(o.name=r,l.pop()),o.pesudo=l.join(":"),o.pesudoName=o.pesudo,A[a]=o,o}var j={"(":1,";":1,":":1,"=":1},w=({css:e,name:t="",media:a="",mediaName:m="",pesudo:o="",group:n=""})=>{if(!e)return;let c=`^sty_${e}_${t}_${a}_${o}_${n}`;if(f.classNameCache[c])return;f.classNameCache[c]=!0;let s=g(n,e),r=s.value;if(!r)return;let i=r[r.length-1];if(j[i])return;if(i==="!"&&(r=r.replace(/(!$)/," !important")),s.media&&(a=s.media),s.mediaName&&(m=s.mediaName),s.pesudo&&(o=s.pesudo),/\~/.test(r)){let h=r.split("~").map(G=>G?`"${G}"`:"").join(" ");r=" "+h,r+=";"}r=r.replace(/calc\((.*?)\)/g,u=>(u=u.replace(/(-|\+|\*|\/)/g,h=>" "+h+" "),u)),r=r.replace(/\|/g," "),r=r.replace(/var\((.*?)\)/g,u=>u.replace(/(var\(|\))/g,"")),r=r.replace(/--([a-zA-Z0-9_-]*)/g,u=>`var(${u})`),r=r.replace(/\^\^\^/g,",");let l=(t||e).replace(/(\:|#|\*|!|,|\.|>|<|@|~|%|\||\$|\{|\}|\[|\]|\(|\)|\+|\*|\/)/g,u=>"\\"+u),p=n?`.\\*${n}`:"";/^(\w|\*)/.test(o)&&(o=" "+o),o=o.replace(/\|/g," ");let d=document.createElement("style");if(a?d.textContent=`${a} {.${l}${p}${o}{${s.name}:${r}}}`:d.textContent=`.${l}${p}${o}{${s.name}:${r}}`,d.setAttribute("flavor-css",""),document.head.append(d),m){let u=document.createElement("style");u.textContent=`.media-${m} .${l}${p}${o}{${s.name}:${r}}`,u.setAttribute("flavor-css",""),document.head.append(u)}};var S={},C=e=>{let t=S[e];if(t)return t;let a=[];e=e.replace(/\n/g," ");let m=[],o=e.match(/\*(.\w?)\s/g),n={};if(o)o.forEach(r=>{if(r){let i=r.replace(/(\*|\s)/g,"");i&&(m.push(i),n[i]=!0)}});else return a.push({group:"",cssItem:e}),S[e]=a,a;let c=/\*(.*?)\s/g,s=e.split(c);return s.forEach((r,i)=>{if(r=r.trim(),!r)return;let l=s[i+1];i===0&&!n[r]&&a.push({cssItem:r,group:""}),n[r]&&l&&!n[l]&&a.push({cssItem:l.trim(),group:r})}),S[e]=a,a};var y=(e,t="",a="",m="",o="",n="")=>{let c=`^parser_${e}_${t}_${a}_${m}_${o}`;return f.classNameCache[c]||(f.classNameCache[c]=!0,C(e).forEach(({cssItem:s,group:r})=>{s.split(" ").filter(Boolean).forEach(i=>{let l=r,p=g(r,i);if(p.comp||(p=g("",i),l=""),p.comp){let d=p.comp(p.value.split(","));y(d,i,p.media,p.mediaName,p.pesudo,l)}else w({css:i,name:t,media:a,mediaName:m,pesudo:o,group:n})})})),e};var k={},L=(e,t,a)=>{let m=`^group_${e}_${t}_${a}`;k[m]||(k[m]=!0,f.compMap[e]||(f.compMap[e]={}),f.compMap[e][t]=o=>{let n=a;o.forEach((i,l)=>{n=n.replace(new RegExp(`(\\$${l+1})`,"g"),i)});let c=o[o.length],s=i=>{n.indexOf("$"+i)>-1&&(n=n.replace(new RegExp(`(\\$${i+1})`,"g"),c),s(i+1))};s(a.length+1);let r="";return C(n).forEach(({cssItem:i,group:l})=>{i.split(" ").forEach(p=>{let d=g(l,p);d.comp||(d=g(e,p),!d.comp&&e!==""&&l!==""&&(d=g("",p))),d.comp&&d.compName!==t?d.comp(d.value.split(",")).split(" ").forEach(h=>{r+=[d.query,d.mediaName,d.pesudoName,h].filter(Boolean).join(":")+" "}):r+=p+" "})}),r})};var _=(e,t)=>{!t||(t=t.replace(`
`,""),t=t.replace(/(\/\/\s)/g,"//"),t.trim().split(";").forEach(a=>{let[m,...o]=a.split(":");m=m.trim(),m&&L(e,m,o.join(":").trim())}))},q=(e,t)=>{t?_(e,t):_("",e)};var M="[class]",T=()=>{document.head.querySelectorAll("style[flavor-css]").forEach(e=>{e.remove()}),f.compMap={},f.classNameCache={},document.querySelectorAll("[flavor]").forEach(E),document.body.querySelectorAll(M).forEach(N)};function E(e){let t=e.getAttribute("flavor");if(t==null)return;let a="";if(e.tagName==="TEMPLATE"){let m=e.content.cloneNode(!0);m&&(a=m.textContent)}else a=e.textContent;_(t,a)}function N(e){!e||e.className&&typeof e.className=="string"&&y(e.className)}var D=()=>{let e=(a,...m)=>{let o=a.length;for(let n=0;n<o;n++){let c=a[n];if(c.type==="childList"){let s=c.target;if(s.__flavorIgnore&&s.closest("[flavor-ignore]")&&!s.getAttribute("flavor-ignore")){s.__flavorIgnore=!0;return}E(s),N(s),c.addedNodes.length&&(s.querySelectorAll("[flavor]").forEach(E),s.querySelectorAll(M).forEach(N))}else c.type==="attributes"&&N(c.target)}};new MutationObserver(e).observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["class"],characterData:!1,attributeOldValue:!1,characterDataOldValue:!1})},F=!1;var v=()=>{if(!(typeof window=="undefined"||typeof document=="undefined"||!window.location)&&!F){if(!window.MutationObserver){console.error("[flavorcss] Your Browser not supported MutationObserver");return}if(!document.body){requestAnimationFrame(v);return}document.querySelectorAll("[flavor]").forEach(E),document.body.querySelectorAll(M).forEach(e=>{N(e)}),D(),F=!0}};v();var I={addStyle:w,device:x,parser:y,observeClass:v,addGroup:q,mediaList:$,cache:f,reset:T};window.flavorcss=I;export{I as flavorcss};
