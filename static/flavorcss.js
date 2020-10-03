!function(o){"function"==typeof define&&define.amd?define(o):o()}(function(){"use strict";var r="",a=["screen-xs","screen-sm","screen-md","screen-lg","screen-xl","vw","vh"],l=["auto","0","px","xs","sm","md","lg","xl","2xl","3xl","4xl","5xl","6xl"],c=["primary","white","black","gray","red","orange","yellow","green","teal","blue","indigo","purple","pink","light","dark"];r+='\n:root {\nfont-size: 16px;\n--media: 640px;\n--none: none;\n--auto: auto;\n--px: 0.5px;\n--vw: 100vw;\n--vh: 100vh;\n--screen-xs: 480px;\n--screen-sm: 640px;\n--screen-md: 720px;\n--screen-lg: 1024px;\n--screen-xl: 1280px;\n--fs-0: 0rem;\n--fs-auto: auto;\n--fs-px: 0.3em;\n--fs-xs: .75em;\n--fs-sm: .875em;\n--fs-md: 1em;\n--fs-lg: 1.125em;\n--fs-xl: 1.25em;\n--fs-2xl: 1.5em;\n--fs-3xl: 1.875em;\n--fs-4xl: 2.25em;\n--fs-5xl: 3em;\n--fs-6xl: 4em;\n--pt-0: 0px;\n--pt-auto: auto;\n--pt-px: 1px;\n--pt-xs: 4px;\n--pt-sm: 8px;\n--pt-md: 16px;\n--pt-lg: 24px;\n--pt-xl: 34px;\n--pt-2xl: 48px;\n--pt-3xl: 64px;\n--pt-4xl: 170px;\n--pt-5xl: 260px;\n--pt-6xl: 340px;\n--li-0: 0px;\n--li-auto: auto;\n--li-px: 1px;\n--li-xs: 2px;\n--li-sm: 4px;\n--li-md: 6px;\n--li-lg: 8px;\n--li-xl: 12px;\n--li-2xl: 18px;\n--li-3xl: 24px;\n--li-4xl: 32px;\n--li-5xl: 42px;\n--li-6xl: 999px;\n--white: 255,255,255;\n--black: 0,0,0;\n--primary-100: 235,248,255;\n--primary-200: 190,227,248;\n--primary-300: 144,205,244;\n--primary-400: 98,179,237;\n--primary-500: 66,153,225;\n--primary-600: 49,130,206;\n--primary-700: 43,109,176;\n--primary-800: 44,82,130;\n--primary-900: 43,67,101;\n--gray-100: 247,250,252;\n--gray-200: 237,242,246;\n--gray-300: 226,232,240;\n--gray-400: 204,213,224;\n--gray-500: 160,174,192;\n--gray-600: 113,128,150;\n--gray-700: 73,85,104;\n--gray-800: 44,55,72;\n--gray-900: 26,32,44;\n--red-100: 254,245,245;\n--red-200: 255,215,215;\n--red-300: 254,178,178;\n--red-400: 246,173,84;\n--red-500: 236,137,54;\n--red-600: 221,106,31;\n--red-700: 192,85,33;\n--red-800: 155,66,33;\n--red-900: 123,52,30;\n--orange-100: 255,250,240;\n--orange-200: 255,235,200;\n--orange-300: 251,211,141;\n--orange-400: 246,173,84;\n--orange-500: 236,137,54;\n--orange-600: 221,106,31;\n--orange-700: 192,85,33;\n--orange-800: 155,66,33;\n--orange-900: 123,52,30;\n--yellow-100: 255,255,240;\n--yellow-200: 255,252,191;\n--yellow-300: 250,240,136;\n--yellow-400: 245,224,94;\n--yellow-500: 235,200,75;\n--yellow-600: 215,158,46;\n--yellow-700: 182,121,31;\n--yellow-800: 151,90,23;\n--yellow-900: 116,65,16;\n--green-100: 240,255,244;\n--green-200: 198,246,213;\n--green-300: 155,230,180;\n--green-400: 104,211,145;\n--green-500: 72,187,129;\n--green-600: 56,161,105;\n--green-700: 47,132,90;\n--green-800: 39,104,73;\n--green-900: 33,84,61;\n--teal-100: 230,255,250;\n--teal-200: 177,245,234;\n--teal-300: 129,231,217;\n--teal-400: 78,209,197;\n--teal-500: 55,179,172;\n--teal-600: 49,151,149;\n--teal-700: 46,122,123;\n--teal-800: 39,94,97;\n--teal-900: 35,78,82;\n--blue-100: 235,248,255;\n--blue-200: 190,227,248;\n--blue-300: 144,205,244;\n--blue-400: 98,179,237;\n--blue-500: 66,153,225;\n--blue-600: 49,130,206;\n--blue-700: 43,109,176;\n--blue-800: 44,82,130;\n--blue-900: 43,67,101;\n--indigo-100: 236,244,255;\n--indigo-200: 195,218,254;\n--indigo-300: 162,191,250;\n--indigo-400: 127,156,244;\n--indigo-500: 102,126,234;\n--indigo-600: 89,104,216;\n--indigo-700: 76,82,191;\n--indigo-800: 67,64,144;\n--indigo-900: 60,54,107;\n--purple-100: 250,245,255;\n--purple-200: 233,217,253;\n--purple-300: 215,188,250;\n--purple-400: 182,147,244;\n--purple-500: 159,121,234;\n--purple-600: 128,90,213;\n--purple-700: 108,71,193;\n--purple-800: 85,60,154;\n--purple-900: 67,51,122;\n--pink-100: 255,245,247;\n--pink-200: 255,214,226;\n--pink-300: 251,182,206;\n--pink-400: 245,136,179;\n--pink-500: 237,99,166;\n--pink-600: 214,63,140;\n--pink-700: 184,50,128;\n--pink-800: 151,39,109;\n--pink-900: 112,35,89;\n--light-100: 255,255,255;\n--light-200: 250,250,250;\n--light-300: 245,245,245;\n--light-400: 240,240,240;\n--light-500: 233,233,233;\n--light-600: 227,227,227;\n--light-700: 220,220,220;\n--light-800: 215,215,215;\n--light-900: 209,209,209;\n--dark-100: 0,0,0;\n--dark-200: 23,23,23;\n--dark-300: 30,30,30;\n--dark-400: 36,36,36;\n--dark-500: 45,45,45;\n--dark-600: 53,53,53;\n--dark-700: 63,63,63;\n--dark-800: 72,72,72;\n--dark-900: 76,76,76;\n--shadow-color: 0,0,0;\n--shadow-opacity: 0.13;\n--ease: cubic-bezier(0.23, 1, 0.32, 1);\n--ease-in: cubic-bezier(0.4, 0, 1, 1);\n--ease-out: cubic-bezier(0, 0, 0.2, 1);\n--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);\n--sans: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n--serif: Georgia, Cambria, "Times New Roman", Times, serif;\n--mono: Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;\n}\n';var s="--move-x: 0; --move-y: 0; --rotate: 0; --skew-x: 0; --skew-y: 0; --scale-x: 1; --scale-y: 1; transform: translateX(var(--move-x)) translateY(var(--move-y)) rotate(var(--rotate)) skewX(var(--skew-x)) skewY(var(--skew-y)) scaleX(var(--scale-x)) scaleY(var(--scale-y));";r+="\n.sans\t{font-family: var(--sans)}\n.serif {font-family: var(--serif)}\n.mono\t{font-family: var(--mono)}\n.transform {"+s+"}\n.smoothing { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }\n.smoothing-auto { -webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto; }\n.outline-none {outline:none}\n@keyframes flavorcss-spin { 0% {transform: rotate(0deg);} 100% {transform: rotate(359deg);}}\n\n:root {\n  --mini-scrollbar-color: 150,151,155;\n  --mini-scrollbar-bg: 100,101,105;\n  --mini-scrollbar-bg-opacity: 0;\n  --mini-scrollbar-color-opacity:.45;\n  --mini-scrollbar-hover: 150,151,155;\n  --mini-scrollbar-hover-opacity:.65;\n  --mini-scrollbar-size: 6px;\n}\n.mini-scrollbar {\n  -webkit-overflow-scrolling: touch;\n}\n.mini-scrollbar::-webkit-scrollbar {\n  width: var(--mini-scrollbar-size);\n  height: var(--mini-scrollbar-size);\n}\n.mini-scrollbar::-webkit-scrollbar-track {\n  background: rgba(var(--mini-scrollbar-bg), var(--mini-scrollbar-bg-opacity));\n}\n.mini-scrollbar::-webkit-scrollbar-thumb {\n  border-radius: 0px;\n  background: rgba(var(--mini-scrollbar-color), var(--mini-scrollbar-color-opacity));\n}\n.mini-scrollbar::-webkit-scrollbar-thumb:hover {\n  background: rgba(var(--mini-scrollbar-hover), var(--mini-scrollbar-hover-opacity));\n}\n.mini-scrollbar-hidden::-webkit-scrollbar-thumb {\n  background: rgba(100, 100, 100, 0) !important;\n}\n\n",r+="\nhtml{-webkit-text-size-adjust:100%} main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}\n.full { width:100%; height:100%; }\n.def {\n  margin: 0;\n  font-size: 1em;\n  border-width: 0;\n  border-style: solid;\n  border-color: currentColor;\n  -webkit-tap-highlight-color: transparent;\n  box-sizing: border-box; \n  outline:0;\n  -webkit-font-smoothing: antialiased; \n  -moz-osx-font-smoothing: grayscale;\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  font-family: var(--sans);\n}\nselect.def {\n  border: none;\n  outline: none;\n  background: none;\n  appearance: none;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  text-align: right;\n  text-align-last: right;\n}\na.def {\n  text-decoration:none;\n}\nol.def,ul.def {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\nimg.def, image.def {\n  object-fit: cover;\n  object-position: 50% 50%;\n}\nimg.def,svg.def,video.def,canvas.def,audio.def,iframe.def,embed.def,object.def {\n  display: block;\n  vertical-align: middle;\n}\ntable.def {border-collapse: collapse}\nbody.def {line-height:1.15;padding:0px;margin:0px;}\n\n.layout-col {\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  position: relative;\n}\n\n.layout-row {\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  position: relative;\n}\n";var p={center:"center",start:"flex-start",end:"flex-end",between:"flex-between",around:"flex-around",auto:"auto",baseline:"baseline",stretch:"stretch"},o="";o+="--rate-0: 0%";for(var n=1;n<=12;n++)o+="--rate-"+n+": "+(100*n/12).toFixed(6)+"%; ";r+=":root{"+o+"}";var t="";function e(o){var n=document.createElement("style");return n.type="text/css",n.innerHTML=o,document.head.appendChild(n),n}r+='.clearfix {\n  &::after {\n    content: "";\n    display: table;\n    clear: both;\n  }\n  }';var i=[function(o,n){r+="."+o+"{"+n+"} ",t+=".pc\\:"+o+"{"+n+"} "},function(o,n){t+=".hover\\:"+o+":hover{"+n+"} ",t+=".group:hover .group\\:hover\\:"+o+"{"+n+"} "},function(o,n){r+=".focus\\:"+o+":focus{"+n+"} "},function(n,e){[["last","last-child"],["first","first-child"],["even","nth-child(even)"]].forEach(function(o){r+="."+o[0]+"\\:"+n+":"+o[1]+"{"+e+"} ",t+=".pc\\:"+o[0]+"\\:"+n+":"+o[1]+"{"+e+"} "})},function(o,n){r+=".group:focus .group\\:focus\\:"+o+"{"+n+"} ",t+=".pc\\:focus\\:"+o+":focus{"+n+"} "},function(o,n){r+=".active\\:"+o+":active{"+n+"} "},function(o,n){r+=".group:active .group\\:active\\:"+o+"{"+n+"} ",t+=".pc\\:active\\:"+o+":active{"+n+"} "}],f=i.length,d=0;!function o(){!function(i){for(var o=0;o<=10;o++)0<o&&i("anime-"+100*o,"transition: all "+100*o+"ms var(--ease);will-change:transform; "+s),i("spin-"+500*o,"animation: flavorcss-spin "+500*o+"ms linear infinite"),i("delay-"+500*o,"transition-delay: "+500*o+"ms");for(i("anime-0",s),a.forEach(function(o){i("move-x-"+o,"--move-x:var(--"+o+")"),i("move-y-"+o,"--move-y:var(--"+o+")"),i("move-x--"+o,"--move-x:calc(0px - var(--"+o+"))"),i("move-y--"+o,"--move-y:calc(0px - var(--"+o+"))")}),l.forEach(function(o){i("move-x-"+o,"--move-x:var(--pt-"+o+")"),i("move-y-"+o,"--move-y:var(--pt-"+o+")"),i("move-x--"+o,"--move-x:calc(0px - var(--pt-"+o+"))"),i("move-y--"+o,"--move-y:calc(0px - var(--pt-"+o+"))")}),o=0;o<=12;o++)i("move-x-"+o+"\\/12","--move-x:var(--rate-"+o+");"),i("move-y-"+o+"\\/12","--move-y:var(--rate-"+o+")"),i("move-x--"+o+"\\/12","--move-x:calc(0px - var(--rate-"+o+"));"),i("move-y--"+o+"\\/12","--move-y:calc(0px - var(--rate-"+o+"))");for(o=-100;o<=201;o+=10)i("scale-"+o,"--scale-x:"+(r=o?o/100:0)+";--scale-y:"+r),i("scale-x-"+o,"--scale-x: "+r),i("scale-y-"+o,"--scale-y: "+r);for(o=0;o<=36;o++)i("rotate-"+10*o,"--rotate:"+10*o+"deg"),i("rotate--"+10*o,"--rotate:-"+10*o+"deg");for(o=0;o<=101;o+=5)i("skew-x-"+o,"--skew-x:"+o+"deg"),i("skew-y-"+o,"--skew-y:"+o+"deg");i("border-box","box-sizing: border-box"),i("content-box","box-sizing: content-box"),["right","left","none","both"].forEach(function(o){i("float-"+o,"float: "+o),i("clear-"+o,"clear: "+o)}),["contain","cover","fill","none","scale-down"].forEach(function(o){i("object-"+o,"object-fit: "+o)}),["auto","default","pointer","wait","text","move","not-allowed"].forEach(function(o){i("cursor-"+o,"cursor: "+o)});for(var n=0;n<=4;n++)for(var e=0;e<=4;e++)i("bg-"+(n*=25)+"-"+(e*=25),"background-position:"+n+"% "+e+"%"),i("object-"+n+"-"+e,"object-position:"+n+"% "+e+"%"),i("orign-"+25*n+"-"+25*e,"transform-orign:"+25*n+"% "+25*e+"%");["repeat","no-repeat","repeat-x","repeat-y","round","space"].forEach(function(o){i("bg-"+o,"background-repeat:"+o)}),["auto","cover","contain"].forEach(function(o){i("bg-"+o,"background-size:"+o)}),["none","auto"].forEach(function(o){i("events-"+o,"pointer-events:"+o)}),["none","auto","text","all"].forEach(function(o){i("select-"+o,"user-select:"+o)}),i("fill-current","fill: currentColor"),i("stroke-current","stroke: currentColor"),[["none","none"],["both","both"],["x","vertical"],["y","horizontal"]].forEach(function(o){i("resize-"+o[0],"resize:"+o[1])}),["hidden","visible"].forEach(function(o){i("overflow-"+o,"overflow:"+o)}),["scroll","auto"].forEach(function(o){i("overflow-"+o,"-webkit-overflow-scrolling:touch; overflow:"+o)}),[["x","hidden"],["y","hidden"],["x","visible"],["y","visible"]].forEach(function(o){i("overflow-"+o[0]+"-"+o[1],"overflow-"+o[0]+":"+o[1])}),[["x","auto"],["y","auto"],["x","scroll"],["y","scroll"]].forEach(function(o){i("overflow-"+o[0]+"-"+o[1],"-webkit-overflow-scrolling:touch; overflow-"+o[0]+":"+o[1])}),i("scrolling-touch","-webkit-overflow-scrolling:touch"),i("scrolling-auto","-webkit-overflow-scrolling:auto"),["static","fixed","absolute","relative","sticky"].forEach(function(o){i(""+o,"position: "+o)}),i("visible","visibility:visible"),i("hidden","visibility:hidden"),i("appearance-none","appearance:none; -moz-appearance:none;-webkit-appearance:none;"),[["row","row"],["row-r","row-reverse"],["col","column"],["col-r","column-reverse"]].forEach(function(o){var n=o[0],e=o[1];i(n,"display:flex; flex-direction:"+e)}),["nowrap","wrap","wrap-r"].forEach(function(o){i("flex-"+o,"flex-wrap:"+o)}),i("flex-1","flex:1 1 0%"),i("flex-0","flex:0 1 auto");for(var r=0;r<=12;r++)for(var t=0;t<=1;t++)i("flex-"+r+"-"+t,"flex:"+r+" "+t+" 0%"),i("flex-"+r+"-"+t+"-auto","flex:"+r+" "+t+" auto");for(i("flex-none","flex: none"),[0,1].forEach(function(o){i("flex-grow-"+o,"flex-grow:"+o),i("flex-shrink-"+o,"flex-shrink:"+o)}),o=-2;o<=12;o++)i("order-"+o,"order: "+o),i("grid-cols-"+o,"\tgrid-template-columns: repeat("+o+", minmax(0,"+o+"fr));"),i("grid-rows-"+o,"\tgrid-template-rows: repeat("+o+",minmax(0, "+o+"fr));");for(i("order-first","order: -9999"),i("order-last","order: 9999"),n=0;n<=13;n++)for(e=0;e<=13;e++)13===n&&(n="auto"),13===e&&(e="auto"),i("row-"+n+"-"+e,"grid-row-start: "+n+"; grid-row-end: "+e),i("col-"+n+"-"+e,"grid-column-start: "+n+";grid-column-end: "+e);for(i("grid-cols-none","\tgrid-template-columns:none"),i("grid-rows-none","\tgrid-template-rows:none"),[["row","row"],["col","column"],["row-d","row dense"],["col-d","column dense"]].forEach(function(o){i("grid-flow-"+o[0],"grid-auto-flow:"+o[1])}),["auto","start","center","end","stretch"].forEach(function(o){i("self-"+o,"align-self:"+p[o])}),["start","center","end","between","around"].forEach(function(n){i("content-"+n,"align-content:"+p[n]),["start","center","end","baseline","auto"].forEach(function(o){i(n+"-"+o,"justify-content: "+p[n]+"; align-items:"+p[o])})}),[["ease","var(--ease)"],["ease-linear","linear"],["ease-in","var(--ease-in)"],["ease-out","var(--ease-out)"],["ease-in-out","var(--ease-in-out)"]].forEach(function(o){i(o[0],"--ease:"+o[1]+";")}),o=0;o<=12;o++)i("f-"+o,"flex:"+o);for([["auto","auto"],["scroll","scroll-position"],["contents","contents"],["transform","transform"],["left-top","left, top"]].forEach(function(o){i("will-change-"+o[0],"will-change:"+o[1]+";")}),o=0;o<=100;o++)i("z-"+10*o,"z-index:"+10*o);for(o=0;o<=100;o++)i("z-"+100*o,"z-index:"+100*o);for(i("z-auto","z-index:zuto"),[["fs","font-size"]].forEach(function(n){l.forEach(function(o){return i(n[0]+"-"+o,n[1]+":var(--fs-"+o+")")})}),[["italic","italic"],["not-italic","normal"]].forEach(function(o){i(o[0],"font-style: "+o[1])}),["left","center","right","justify"].forEach(function(o){i("text-"+o,"text-align:"+o)}),i("text-transform-none","text-transform: none"),["uppercase","lowercase","capitalize"].forEach(function(o){i(o,"text-transform: "+o)}),["normal","nowrap","pre","pre-line","pre-wrap"].forEach(function(o){i("writespace-"+o,"white-space:"+o)}),["fixed","local","scroll"].forEach(function(o){i("bg-"+o,"background-attachment:"+o)}),i("break-normal","work-break:normal;overflow-wrap:normal;"),i("break-word","overflow-wrap:break-word;"),i("break-all","work-break:break-all;"),i("wrap-hidden","overflow:hidden;text-overflow:ellipsis;white-space:nowrap"),i("wrap","overflow:hidden;overflow-wra:break-word; word-break:break-all;"),["baseline","top","middle","bottom","text-top","text-bottom"].forEach(function(o){i("align-"+o,"vertical-align:"+o)}),o=-5;o<=10;o++)i("letter-"+o,"letter-spacing:"+(.025*o).toFixed(3)+"em");for(i("line-none","line-height:1"),l.forEach(function(o){i("line-"+o,"line-height:var(--fs-"+o+")")}),o=1;o<=9;o++)i("fw-"+o+"00","font-weight:"+o+"00");for(["none","disc","decimal"].forEach(function(o){i("list-"+o,"list-style-type:"+o)}),["inside","outside"].forEach(function(o){i("list-"+o,"list-style-position:"+o)}),[["underline","underline"],["none-underline","none"]].forEach(function(o){i(o[0],"text-decoration:"+o[1])}),["collapse","separate"].forEach(function(o){i("border-"+o,"border-collapse:"+o)}),[["left","left"],["top","top"],["right","right"],["bottom","bottom"]].forEach(function(n){a.forEach(function(o){i(n[0]+"-"+o,n[1]+":var(--"+o+")"),i(n[0]+"--"+o,n[1]+":calc(0px - var(--"+o+"))")}),l.forEach(function(o){i(n[0]+"-"+o,n[1]+":var(--pt-"+o+")"),i(n[0]+"--"+o,n[1]+":calc(0px - var(--pt-"+o+"))")});for(var o=0;o<=12;o++)i(n[0]+"-"+o+"\\/12",n[1]+":var(--rate-"+o+")"),i(n[0]+"--"+o+"\\/12",n[1]+":calc(0px - var(--rate-"+o+"))")}),[["w","width"],["min-w","min-width"],["max-w","max-width"],["h","height"],["min-h","min-height"],["max-h","max-height"],["p","padding"],["m","margin"]].forEach(function(n){a.forEach(function(o){return i(n[0]+"-"+o,n[1]+":var(--"+o+")")}),l.forEach(function(o){i(n[0]+"-"+o,n[1]+":var(--pt-"+o+")")});for(var o=0;o<=12;o++)i(n[0]+"-"+o+"\\/12",n[1]+":var(--rate-"+o+")")}),o=0;o<=4;o++)i("stroke-"+o,"stroke-width: "+o);for([["radius","border-radius"],["radius-q","border-top-left-radius"],["radius-w","border-top-right-radius"],["radius-a","border-bottom-left-radius"],["radius-s","border-bottom-right-radius"]].forEach(function(n){l.forEach(function(o){i(n[0]+"-"+o,n[1]+":var(--li-"+o+")")})}),[["px","padding-left","padding-right"],["py","padding-top","padding-bottom"],["mx","margin-left","margin-right"],["my","margin-top","margin-bottom"],["gap","gap"],["row-gap","row-gap"],["col-gap","column-gap"]].forEach(function(n){l.forEach(function(o){return i(n[0]+"-"+o,n[1]+":var(--pt-"+o+"); "+n[2]+":var(--pt-"+o+")")})}),[["pt","padding-top"],["pb","padding-bottom"],["pl","padding-left"],["pr","padding-right"],["mt","margin-top"],["mb","margin-bottom"],["ml","margin-left"],["mr","margin-right"]].forEach(function(n){l.forEach(function(o){i(n[0]+"-"+o,n[1]+": var(--pt-"+o+")"),i(n[0]+"--"+o,n[1]+": calc(0px - var(--pt-"+o+"))")})}),[["b","border"],["bt","border-top"],["bb","border-bottom"],["bl","border-left"],["br","border-right"],["outline","outline"]].forEach(function(n){l.forEach(function(o){i(n[0]+"-"+o,n[1]+"-width: var(--li-"+o+"); "+n[1]+"-style: solid;")}),["solid","dotted","dashed","double","none"].forEach(function(o){i(n[0]+"-"+o,n[1]+"-style: "+o)})}),i("shadow"," box-shadow: 0 1px 3px 0 rgba(var(--shadow-color), var(--shadow-opacity)), 0 1px 2px 0 rgba(var(--shadow-color), calc(var(--shadow-opacity) / 2));"),[["0px","0 0 0 0","0 0 0 0"],["3px","0 0 0 3px","0 0 0 0"],["2px","0 0 0 2px","0 0 0 0"],["1px","0 0 0 1px","0 0 0 0"],["xs","0 1px 2px 0","0 0 0 0"],["sm","0 2px 4px 0","0 0 0 0"],["md","0 4px 6px -1px","0 2px 4px -1px"],["lg","0 10px 15px -3px","0 4px 6px -2px"],["xl","0 20px 25px -5px","0 10px 10px -5px"],["2xl","0 25px 50px -12px","0 0 0 0"],["inner","inset 0 2px 4px 0","0 0 0 0"],["outline","0 0 0 3px","0 0 0 0"]].forEach(function(o){var n=o[0],e=o[1],r=o[2];i("shadow-"+n,"box-shadow: "+e+" rgba(var(--shadow-color), var(--shadow-opacity)), "+r+" rgba(var(--shadow-color), calc(var(--shadow-opacity) / 2));")}),[["bg","background-color"],["b","border-color"],["c","color"],["placeholder","color"],["shadow","shadow-color"],["outline","outline-color"]].forEach(function(o){var t=o[0],a=o[1];c.forEach(function(o){var n="white"===o||"black"===o;if("shadow"===t)if(n)i(t+"-"+o,"--"+t+"-color:var(--"+o+");");else for(var e=1;e<=9;e++)i(t+"-"+o+"-"+e+"00","--"+t+"-color:var(--"+o+"-"+e+"00);");else{var r="";if("placeholder"===t&&(r="::-webkit-input-placeholder"),n)i(t+"-"+o+r,"--"+t+"-opacity: 1; "+a+":rgba(var(--"+o+"), var(--"+t+"-opacity));");else for(e=1;e<=9;e++)i(t+"-"+o+"-"+e+"00"+r,"--"+t+"-opacity: 1; "+a+":rgba(var(--"+o+"-"+e+"00), var(--"+t+"-opacity));")}});for(var n=0;n<=100;n+=5)i(t+"-opacity-"+n,"--"+t+"-opacity: "+(0==n?0:n/100))}),[["bg","background-color"],["b","border-color"],["c","color"],["placeholder","color"],["shadow","shadow-color"],["outline","outline-color"]].forEach(function(o){i(o[0]+"-current",o[1]+":currentColor")}),o=0;o<=100;o+=5)i("opacity-"+o,"opacity: "+(0===o?0:o/100));i("sr-only","position: absolute;width: 1px;height: 1px;padding: 0;margin: -1px;overflow: hidden;clip: rect(0, 0, 0, 0);white-space: nowrap;border-width: 0;"),i("not-sr-only","position: static;width: auto;height: auto;padding: 0;margin: 0;overflow: visible;clip: auto;white-space: normal;"),i("table-fixed","table-layout: fixed"),i("table-auto","table-layout: auto"),i("flex","display:-webkit-box;display:-moz-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display: flex;"),i("flex","display:-webkit-box;display:-moz-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display: flex;"),["none","block","flow-root","inline-block","grid","inline-grid","table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row"].forEach(function(o){i(o,"display: "+o)})}(i[d]),e(r),e("@media (min-width: 640px){"+t+"}"),t=r="",++d<f&&setTimeout(o,20)}()});
//# sourceMappingURL=index.js.map
