!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).flavorcss={})}(this,function(e){"use strict";function i(){if(s)return s;var e=navigator.userAgent.toLocaleLowerCase(),t=/(?:android)/.test(e),r=/(?:firefox)/.test(e),o=/(?:chrome|crios)/.test(e),a=/(safari)/.test(e),n=/(?:ipad|playbook)/.test(e)||t&&!/(?:mobile)/.test(e)||r&&/(?:tablet)/.test(e),i=/(?:iphone)/.test(e)&&!n,c=!i&&!t,l=!c,u=l&&/(micromessenger|wechat)/.test(e);return s={android:t,firefox:r,chrome:o,tablet:n,ios:i,wechat:u,pc:c,phone:l,safari:a}}var s,c={},b={},l={hover:":hover",focus:":focus",active:":active","first-child":":first-child","last-child":":last-child",blank:":blank",checked:":checked",current:":current",disabled:":disabled","focus-within":":focus-within","in-range":":in-range",visited:":visited",even:":nth-child(even)",odd:":nth-child(odd)","placeholder-shown":":placeholder-shown",after:"::after",before:"::before",placeholder:"::-webkit-input-placeholder"},u={xs:"480px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px",xxl:"1536px"},d={};function y(e,t){var r=e+"_$$_"+t,o=d[r];if(o)return o;var a={comp:void 0,compName:"",pesudo:"",pesudoName:"",media:"",mediaName:"",name:"",value:"",query:"",queryName:""};if(!t)return d[r]=a;var n=c[e];return t.split(":").forEach(function(e,t){0===t&&("dark"===e?(a.media="@media (prefers-color-scheme: dark)",a.mediaName=e):u[e]?(a.media="@media screen and (min-width: "+u[e]+")",a.mediaName=e):void 0!==i()[e]&&(a.media="@media screen and (min-width: "+(i()[e]?"0px":"9999px")+")",a.mediaName=e)),l[e]?a.pesudo=l[e]:n&&n[e]?(a.comp=n[e],a.compName=e):a.comp||a.name?a.value?a.query||(a.query=e):(a.comp&&(e=e.replaceAll(/\((.*?)\)/g,function(e){return e.replace(/\,/g,"^^^")})),a.value=e):a.name=e}),d[r]=a}var p=function(e,l,u,s,d){void 0===l&&(l=""),void 0===u&&(u=""),void 0===s&&(s=""),void 0===d&&(d="");var t="^parser_"+e+"_"+l+"_"+u+"_"+s;if(b[t])return e;b[t]=!0;var r=e.match(/\[(.*?)\]/g),f=[];r&&r.forEach(function(e){e&&f.push(e.replace(/(\[|\])/g,""))});var o=e.split(/\[(.*?)\]/g),a=[];return o.forEach(function(e){(e=e.trim())&&f.indexOf(e)<0&&a.push(e)}),a.forEach(function(e,c){(e=e.trim()).split(" ").filter(Boolean).forEach(function(e){var t=y(f[c],e),r=t.comp,o=t.value,a=t.media,n=t.pesudo;if(r){var i=r(o.split(","));p(i,e,a,n,f[c])}else!function(e){var t=e.css,r=e.name,o=void 0===r?"":r,a=e.media,n=void 0===a?"":a,i=e.pesudo,c=void 0===i?"":i,l=e.group,u=void 0===l?"":l;if(t){var s="^sty_"+t+"_"+o+"_"+n+"_"+c+"_"+u;if(!b[s]){b[s]=!0;var d=y(u,t);d.media&&(n=d.media),d.pesudo&&(c=d.pesudo);var f=d.value;if(f){var p=f.split("~");1<p.length&&(f=" "+p.map(function(e){return'"'+e+'"'}).join(" "),f+=";"),f=(f=(f=(f=(f=f.replaceAll(/calc\((.*?)\)/g,function(e){return e=e.replaceAll(/(-|\+|\*|\/)/g,function(e){return" "+e+" "})})).replace(/\|/g," ")).replaceAll(/var\((.*?)\)/g,function(e){return e.replace(/(var\(|\))/g,"")})).replaceAll(/--([a-zA-Z0-9_-]*)/g,function(e){return"var("+e+")"})).replace(/\^\^\^/g,",")}var m=(o||t).replaceAll(/(\:|#|!|,|\.|>|<|@|~|%|\||\$|\{|\}|\[|\]|\(|\)|\+|\*|\/)/g,function(e){return"\\"+e}),v=u?".\\["+u+"\\]":"";if(f){var h=document.createElement("style");if(h.textContent=n?n+" {."+m+v+c+" "+d.query+"{"+d.name+":"+f+"}}":"."+m+v+c+" "+d.query+"{"+d.name+":"+f+"}",document.head.append(h),/dark/.test(n)){var g=document.createElement("style");g.textContent=".dark ."+m+v+c+" "+d.query+"{"+d.name+":"+f+"}",document.head.append(g)}}}}}({css:e,name:l,media:u,pesudo:s,group:d})})}),e},a={},n=function(e,t,o){var r="^group_"+e+"_"+t+"_"+o;a[r]||(a[r]=!0,c[e]||(c[e]={}),c[e][t]=function(e){var r=o;e.forEach(function(e,t){r=r.replace("$"+(t+1),e)});var t="";return r.split(" ").forEach(function(e){t+=e+" "}),console.log(t),t})};function f(e){var a=e.getAttribute("flavor-group")||"",t="";if("TEMPLATE"===e.tagName){var r=e.content.cloneNode(!0);r&&(t=r.textContent)}else t=e.textContent;t&&t.trim().split("\n").forEach(function(e){var t=e.split(":"),r=t[0],o=t.slice(1);(r=r.trim())&&n(a,r,o.join(":").trim())})}function m(e){e&&p(e.className)}var t=!1,r=function(){"undefined"!=typeof window&&"undefined"!=typeof document&&window.location&&(t||(window.MutationObserver?document.body?(document.querySelectorAll("[flavor-group]").forEach(f),document.body.querySelectorAll("[class]").forEach(m),new MutationObserver(function(e){for(var t=0,r=e;t<r.length;t++){var o=r[t];"childList"===o.type?(f(o.target),m(o.target),o.target.querySelectorAll("[flavor-group]").forEach(f),o.target.querySelectorAll("[class]").forEach(m)):"attributes"===o.type&&m(o.target)}}).observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["class"]}),t=!0):requestAnimationFrame(r):console.error("[flavorcss] Your Browser not supported MutationObserver")))};r(),e.classGroup=n,e.device=i,e.groupList={},e.mediaList=u,e.observeClass=r,e.parser=p,e.pesudoList=l,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=index.js.map
