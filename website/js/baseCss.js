!function(e){"function"==typeof define&&define.amd?define(e):e()}(function(){"use strict";var o="";["primary","gray","red","orange","yellow","green","teal","blue","indigo","purple","pink","light","dark"].forEach(function(e){for(var n=1;n<=9;n++){o+="--"+e+"-"+n+"00-0:rgba(var(--"+e+n+"-base), 0); ";for(var a=1;a<=9;a++)o+="--"+e+"-"+n+"00-"+a+":rgba(var(--"+e+n+"-base), 0."+a+"); ";o+="--"+e+"-"+n+"00:rgba(var(--"+e+n+"-base), 1); "}}),["white","black"].forEach(function(e){o+="--"+e+"-0:rgba(var(--"+e+"-base), 0); ";for(var n=1;n<=8;n++)o+="--"+e+"-"+n+":rgba(var(--"+e+"-base), 0."+n+"); ";o+="--"+e+":rgba(var(--"+e+"-base), 1); "});var e="\n--xs: 480px;\n--sm: 640px;\n--md: 720px;\n--lg: 1024px;\n--xl: 1280px;\n--t1: 0.12s;\n--t2: 0.2s;\n--t3: 0.3s;\n--t4: 0.5s;\n--t5: 0.7s;\n--t6: 1s;\n--t7: 1.3s;\n--t8: 1.5s;\n--t9: 2s;\n--h6: 1.25em;\n--h5: 1.5em;\n--h4: 1.875em;\n--h3: 2.25em;\n--h2: 3em;\n--h1: 4em;\n--fs1: 10px;\n--fs2: 12px;\n--fs3: 14px;\n--fs4: 16px;\n--fs5: 18px;\n--fs6: 20px;\n--fs7: 24px;\n--fs8: 28px;\n--fs9: 32px;\n--zero: 0px;\n--auto: auto;\n--px: 1px;\n--a1: 2px;\n--a2: 4px;\n--a3: 6px;\n--a4: 8px;\n--a5: 12px;\n--a6: 16px;\n--a7: 20px;\n--a8: 24px;\n--a9: 28px;\n--b1: 32px;\n--b2: 40px;\n--b3: 48px;\n--b4: 64px;\n--b5: 72px;\n--b6: 80px;\n--b7: 88px;\n--b8: 92px;\n--b9: 100px;\n--c1: 180px;\n--c2: 260px;\n--c3: 340px;\n--c4: 420px;\n--c5: 500px;\n--c6: 580px;\n--c7: 660px;\n--c8: 740px;\n--c9: 820px;\n--white-base: 255,255,255;\n--black-base: 0,0,0;\n--primary-100-base: 236,244,255;\n--primary-200-base: 195,218,254;\n--primary-300-base: 162,191,250;\n--primary-400-base: 127,156,244;\n--primary-500-base: 102,126,234;\n--primary-600-base: 89,104,216;\n--primary-700-base: 76,82,191;\n--primary-800-base: 67,64,144;\n--primary-900-base: 60,54,107;\n--gray-100-base: 247,250,252;\n--gray-200-base: 237,242,246;\n--gray-300-base: 226,232,240;\n--gray-400-base: 204,213,224;\n--gray-500-base: 160,174,192;\n--gray-600-base: 113,128,150;\n--gray-700-base: 73,85,104;\n--gray-800-base: 44,55,72;\n--gray-900-base: 26,32,44;\n--red-100-base: 254,245,245;\n--red-200-base: 255,215,215;\n--red-300-base: 254,178,178;\n--red-400-base: 246,173,84;\n--red-500-base: 236,137,54;\n--red-600-base: 221,106,31;\n--red-700-base: 192,85,33;\n--red-800-base: 155,66,33;\n--red-900-base: 123,52,30;\n--orange-100-base: 255,250,240;\n--orange-200-base: 255,235,200;\n--orange-300-base: 251,211,141;\n--orange-400-base: 246,173,84;\n--orange-500-base: 236,137,54;\n--orange-600-base: 221,106,31;\n--orange-700-base: 192,85,33;\n--orange-800-base: 155,66,33;\n--orange-900-base: 123,52,30;\n--yellow-100-base: 255,255,240;\n--yellow-200-base: 255,252,191;\n--yellow-300-base: 250,240,136;\n--yellow-400-base: 245,224,94;\n--yellow-500-base: 235,200,75;\n--yellow-600-base: 215,158,46;\n--yellow-700-base: 182,121,31;\n--yellow-800-base: 151,90,23;\n--yellow-900-base: 116,65,16;\n--green-100-base: 240,255,244;\n--green-200-base: 198,246,213;\n--green-300-base: 155,230,180;\n--green-400-base: 104,211,145;\n--green-500-base: 72,187,129;\n--green-600-base: 56,161,105;\n--green-700-base: 47,132,90;\n--green-800-base: 39,104,73;\n--green-900-base: 33,84,61;\n--teal-100-base: 230,255,250;\n--teal-200-base: 177,245,234;\n--teal-300-base: 129,231,217;\n--teal-400-base: 78,209,197;\n--teal-500-base: 55,179,172;\n--teal-600-base: 49,151,149;\n--teal-700-base: 46,122,123;\n--teal-800-base: 39,94,97;\n--teal-900-base: 35,78,82;\n--blue-100-base: 235,248,255;\n--blue-200-base: 190,227,248;\n--blue-300-base: 144,205,244;\n--blue-400-base: 98,179,237;\n--blue-500-base: 66,153,225;\n--blue-600-base: 49,130,206;\n--blue-700-base: 43,109,176;\n--blue-800-base: 44,82,130;\n--blue-900-base: 43,67,101;\n--indigo-100-base: 236,244,255;\n--indigo-200-base: 195,218,254;\n--indigo-300-base: 162,191,250;\n--indigo-400-base: 127,156,244;\n--indigo-500-base: 102,126,234;\n--indigo-600-base: 89,104,216;\n--indigo-700-base: 76,82,191;\n--indigo-800-base: 67,64,144;\n--indigo-900-base: 60,54,107;\n--purple-100-base: 250,245,255;\n--purple-200-base: 233,217,253;\n--purple-300-base: 215,188,250;\n--purple-400-base: 182,147,244;\n--purple-500-base: 159,121,234;\n--purple-600-base: 128,90,213;\n--purple-700-base: 108,71,193;\n--purple-800-base: 85,60,154;\n--purple-900-base: 67,51,122;\n--pink-100-base: 255,245,247;\n--pink-200-base: 255,214,226;\n--pink-300-base: 251,182,206;\n--pink-400-base: 245,136,179;\n--pink-500-base: 237,99,166;\n--pink-600-base: 214,63,140;\n--pink-700-base: 184,50,128;\n--pink-800-base: 151,39,109;\n--pink-900-base: 112,35,89;\n--light-100-base: 255,255,255;\n--light-200-base: 250,250,250;\n--light-300-base: 245,245,245;\n--light-400-base: 240,240,240;\n--light-500-base: 233,233,233;\n--light-600-base: 227,227,227;\n--light-700-base: 220,220,220;\n--light-800-base: 215,215,215;\n--light-900-base: 209,209,209;\n--dark-100-base: 0,0,0;\n--dark-200-base: 31,31,31;\n--dark-300-base: 48,48,48;\n--dark-400-base: 60,60,60;\n--dark-500-base: 75,75,75;\n--dark-600-base: 92,92,92;\n--dark-700-base: 108,108,108;\n--dark-800-base: 122,122,122;\n--dark-900-base: 133,133,133;\n"+o+'\n--shadow0: 0 0 0 0px;\n--shadow1: 0 1px 2px 0;\n--shadow2: 0 2px 4px 0;\n--shadow3: 0 4px 6px -1px;\n--shadow4: 0 6px 12px -1px;\n--shadow5: 0 10px 15px -3px;\n--shadow6: 0 25px 20px -12px;\n--shadow7: 0 30px 25px -14px;\n--shadow8: 0 35px 30px -16px;\n--shadow9: 0 40px 40px -18px;\n--ease: cubic-bezier(0.23, 1, 0.32, 1);\n--ease-in: cubic-bezier(0.4, 0, 1, 1);\n--ease-out: cubic-bezier(0, 0, 0.2, 1);\n--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);\n--sans: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n--serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;\n--mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n',n=document.createElement("style");n.textContent="\n:root {\n  "+e+'\n}\n\n*,::after,::before{box-sizing:border-box}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0;padding:0}body{font-family:system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"}hr{height:0;color:inherit}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Consolas,"Liberation Mono",Menlo,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}::-moz-focus-inner{border-style:none;padding:0}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}legend{padding:0}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}button{background-color:transparent;background-image:none}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}fieldset{margin:0;padding:0}ol,ul{list-style:none;margin:0;padding:0}html{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";line-height:1.5}body{font-family:inherit;line-height:inherit}*,::after,::before{box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--gray-200)}hr{border-top-width:1px}img{border-style:solid}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:var(--gray-400)}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:var(--gray-400)}input::placeholder,textarea::placeholder{color:var(--gray-400)}[role=button],button{cursor:pointer}table{border-collapse:collapse}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,optgroup,select,textarea{padding:0;line-height:inherit;color:inherit}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}button:focus:not(:focus-visible),input:focus:not(:focus-visible),textarea:focus:not(:focus-visible),video:focus:not(:focus-visible){outline:0}\n\n',console.log("aaa"),document.head.appendChild(n)});
//# sourceMappingURL=baseCss.js.map
