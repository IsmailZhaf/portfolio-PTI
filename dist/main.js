(()=>{"use strict";function t(){return t=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},t.apply(this,arguments)}var e={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(t){},onComplete:function(t){},preStringTyped:function(t,e){},onStringTyped:function(t,e){},onLastStringBackspaced:function(t){},onTypingPaused:function(t,e){},onTypingResumed:function(t,e){},onReset:function(t){},onStop:function(t,e){},onStart:function(t,e){},onDestroy:function(t){}},n=new(function(){function n(){}var s=n.prototype;return s.load=function(n,s,i){if(n.el="string"==typeof i?document.querySelector(i):i,n.options=t({},e,s),n.isInput="input"===n.el.tagName.toLowerCase(),n.attr=n.options.attr,n.bindInputFocusEvents=n.options.bindInputFocusEvents,n.showCursor=!n.isInput&&n.options.showCursor,n.cursorChar=n.options.cursorChar,n.cursorBlinking=!0,n.elContent=n.attr?n.el.getAttribute(n.attr):n.el.textContent,n.contentType=n.options.contentType,n.typeSpeed=n.options.typeSpeed,n.startDelay=n.options.startDelay,n.backSpeed=n.options.backSpeed,n.smartBackspace=n.options.smartBackspace,n.backDelay=n.options.backDelay,n.fadeOut=n.options.fadeOut,n.fadeOutClass=n.options.fadeOutClass,n.fadeOutDelay=n.options.fadeOutDelay,n.isPaused=!1,n.strings=n.options.strings.map((function(t){return t.trim()})),n.stringsElement="string"==typeof n.options.stringsElement?document.querySelector(n.options.stringsElement):n.options.stringsElement,n.stringsElement){n.strings=[],n.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var r=Array.prototype.slice.apply(n.stringsElement.children),o=r.length;if(o)for(var a=0;a<o;a+=1)n.strings.push(r[a].innerHTML.trim())}for(var u in n.strPos=0,n.currentElContent=this.getCurrentElContent(n),n.currentElContent&&n.currentElContent.length>0&&(n.strPos=n.currentElContent.length-1,n.strings.unshift(n.currentElContent)),n.sequence=[],n.strings)n.sequence[u]=u;n.arrayPos=0,n.stopNum=0,n.loop=n.options.loop,n.loopCount=n.options.loopCount,n.curLoop=0,n.shuffle=n.options.shuffle,n.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},n.typingComplete=!1,n.autoInsertCss=n.options.autoInsertCss,n.autoInsertCss&&(this.appendCursorAnimationCss(n),this.appendFadeOutAnimationCss(n))},s.getCurrentElContent=function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:"html"===t.contentType?t.el.innerHTML:t.el.textContent},s.appendCursorAnimationCss=function(t){var e="data-typed-js-cursor-css";if(t.showCursor&&!document.querySelector("["+e+"]")){var n=document.createElement("style");n.setAttribute(e,"true"),n.innerHTML="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ",document.body.appendChild(n)}},s.appendFadeOutAnimationCss=function(t){var e="data-typed-fadeout-js-css";if(t.fadeOut&&!document.querySelector("["+e+"]")){var n=document.createElement("style");n.setAttribute(e,"true"),n.innerHTML="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ",document.body.appendChild(n)}},n}()),s=new(function(){function t(){}var e=t.prototype;return e.typeHtmlChars=function(t,e,n){if("html"!==n.contentType)return e;var s=t.substring(e).charAt(0);if("<"===s||"&"===s){var i;for(i="<"===s?">":";";t.substring(e+1).charAt(0)!==i&&!(1+ ++e>t.length););e++}return e},e.backSpaceHtmlChars=function(t,e,n){if("html"!==n.contentType)return e;var s=t.substring(e).charAt(0);if(">"===s||";"===s){var i;for(i=">"===s?"<":"&";t.substring(e-1).charAt(0)!==i&&!(--e<0););e--}return e},t}()),i=function(){function t(t,e){n.load(this,e,t),this.begin()}var e=t.prototype;return e.toggle=function(){this.pause.status?this.start():this.stop()},e.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},e.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},e.destroy=function(){this.reset(!1),this.options.onDestroy(this)},e.reset=function(t){void 0===t&&(t=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())},e.begin=function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout((function(){0===t.strPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos):t.backspace(t.strings[t.sequence[t.arrayPos]],t.strPos)}),this.startDelay)},e.typewrite=function(t,e){var n=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var i=this.humanizer(this.typeSpeed),r=1;!0!==this.pause.status?this.timeout=setTimeout((function(){e=s.typeHtmlChars(t,e,n);var i=0,o=t.substring(e);if("^"===o.charAt(0)&&/^\^\d+/.test(o)){var a=1;a+=(o=/\d+/.exec(o)[0]).length,i=parseInt(o),n.temporaryPause=!0,n.options.onTypingPaused(n.arrayPos,n),t=t.substring(0,e)+t.substring(e+a),n.toggleBlinking(!0)}if("`"===o.charAt(0)){for(;"`"!==t.substring(e+r).charAt(0)&&(r++,!(e+r>t.length)););var u=t.substring(0,e),c=t.substring(u.length+1,e+r),l=t.substring(e+r+1);t=u+c+l,r--}n.timeout=setTimeout((function(){n.toggleBlinking(!1),e>=t.length?n.doneTyping(t,e):n.keepTyping(t,e,r),n.temporaryPause&&(n.temporaryPause=!1,n.options.onTypingResumed(n.arrayPos,n))}),i)}),i):this.setPauseStatus(t,e,!0)},e.keepTyping=function(t,e,n){0===e&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var s=t.substring(0,e+=n);this.replaceText(s),this.typewrite(t,e)},e.doneTyping=function(t,e){var n=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout((function(){n.backspace(t,e)}),this.backDelay))},e.backspace=function(t,e){var n=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var i=this.humanizer(this.backSpeed);this.timeout=setTimeout((function(){e=s.backSpaceHtmlChars(t,e,n);var i=t.substring(0,e);if(n.replaceText(i),n.smartBackspace){var r=n.strings[n.arrayPos+1];n.stopNum=r&&i===r.substring(0,e)?e:0}e>n.stopNum?(e--,n.backspace(t,e)):e<=n.stopNum&&(n.arrayPos++,n.arrayPos===n.strings.length?(n.arrayPos=0,n.options.onLastStringBackspaced(),n.shuffleStringsIfNeeded(),n.begin()):n.typewrite(n.strings[n.sequence[n.arrayPos]],e))}),i)}else this.setPauseStatus(t,e,!1)},e.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},e.setPauseStatus=function(t,e,n){this.pause.typewrite=n,this.pause.curString=t,this.pause.curStrPos=e},e.toggleBlinking=function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},e.humanizer=function(t){return Math.round(Math.random()*t/2)+t},e.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort((function(){return Math.random()-.5})))},e.initFadeOut=function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout((function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)}),this.fadeOutDelay)},e.replaceText=function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t},e.bindFocusEvents=function(){var t=this;this.isInput&&(this.el.addEventListener("focus",(function(e){t.stop()})),this.el.addEventListener("blur",(function(e){t.el.value&&0!==t.el.value.length||t.start()})))},e.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},t}(),r={};!function t(e,n,s,i){var r=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),o="function"==typeof Path2D&&"function"==typeof DOMMatrix;function a(){}function u(t){var s=n.exports.Promise,i=void 0!==s?s:e.Promise;return"function"==typeof i?new i(t):(t(a,a),null)}var c,l,h,p,f,d,g,m,y,b=(h=Math.floor(1e3/60),p={},f=0,"function"==typeof requestAnimationFrame&&"function"==typeof cancelAnimationFrame?(c=function(t){var e=Math.random();return p[e]=requestAnimationFrame((function n(s){f===s||f+h-1<s?(f=s,delete p[e],t()):p[e]=requestAnimationFrame(n)})),e},l=function(t){p[t]&&cancelAnimationFrame(p[t])}):(c=function(t){return setTimeout(t,h)},l=function(t){return clearTimeout(t)}),{frame:c,cancel:l}),v=(m={},function(){if(d)return d;if(!s&&r){var e=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join("\n");try{d=new Worker(URL.createObjectURL(new Blob([e])))}catch(t){return void 0!==typeof console&&"function"==typeof console.warn&&console.warn("🎊 Could not load worker",t),null}!function(t){function e(e,n){t.postMessage({options:e||{},callback:n})}t.init=function(e){var n=e.transferControlToOffscreen();t.postMessage({canvas:n},[n])},t.fire=function(n,s,i){if(g)return e(n,null),g;var r=Math.random().toString(36).slice(2);return g=u((function(s){function o(e){e.data.callback===r&&(delete m[r],t.removeEventListener("message",o),g=null,i(),s())}t.addEventListener("message",o),e(n,r),m[r]=o.bind(null,{data:{callback:r}})}))},t.reset=function(){for(var e in t.postMessage({reset:!0}),m)m[e](),delete m[e]}}(d)}return d}),w={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function M(t,e,n){return function(t,e){return e?e(t):t}(t&&null!=t[e]?t[e]:w[e],n)}function C(t){return t<0?0:Math.floor(t)}function k(t){return parseInt(t,16)}function x(t){return t.map(S)}function S(t){var e=String(t).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:k(e.substring(0,2)),g:k(e.substring(2,4)),b:k(e.substring(4,6))}}function T(t){t.width=document.documentElement.clientWidth,t.height=document.documentElement.clientHeight}function P(t){var e=t.getBoundingClientRect();t.width=e.width,t.height=e.height}function E(t,n){var a,c=!t,l=!!M(n||{},"resize"),h=!1,p=M(n,"disableForReducedMotion",Boolean),f=r&&M(n||{},"useWorker")?v():null,d=c?T:P,g=!(!t||!f||!t.__confetti_initialized),m="function"==typeof matchMedia&&matchMedia("(prefers-reduced-motion)").matches;function y(e,n,r){for(var c,l,h,p,f=M(e,"particleCount",C),g=M(e,"angle",Number),m=M(e,"spread",Number),y=M(e,"startVelocity",Number),v=M(e,"decay",Number),w=M(e,"gravity",Number),k=M(e,"drift",Number),S=M(e,"colors",x),T=M(e,"ticks",Number),P=M(e,"shapes"),E=M(e,"scalar"),I=!!M(e,"flat"),O=function(t){var e=M(t,"origin",Object);return e.x=M(e,"x",Number),e.y=M(e,"y",Number),e}(e),B=f,A=[],L=t.width*O.x,N=t.height*O.y;B--;)A.push((void 0,void 0,l=(c={x:L,y:N,angle:g,spread:m,startVelocity:y,color:S[B%S.length],shape:P[(0,p=P.length,Math.floor(Math.random()*(p-0))+0)],ticks:T,decay:v,gravity:w,drift:k,scalar:E,flat:I}).angle*(Math.PI/180),h=c.spread*(Math.PI/180),{x:c.x,y:c.y,wobble:10*Math.random(),wobbleSpeed:Math.min(.11,.1*Math.random()+.05),velocity:.5*c.startVelocity+Math.random()*c.startVelocity,angle2D:-l+(.5*h-Math.random()*h),tiltAngle:(.5*Math.random()+.25)*Math.PI,color:c.color,shape:c.shape,tick:0,totalTicks:c.ticks,decay:c.decay,drift:c.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:3*c.gravity,ovalScalar:.6,scalar:c.scalar,flat:c.flat}));return a?a.addFettis(A):(a=function(t,e,n,r,a){var c,l,h=e.slice(),p=t.getContext("2d"),f=u((function(e){function u(){c=l=null,p.clearRect(0,0,r.width,r.height),a(),e()}c=b.frame((function e(){!s||r.width===i.width&&r.height===i.height||(r.width=t.width=i.width,r.height=t.height=i.height),r.width||r.height||(n(t),r.width=t.width,r.height=t.height),p.clearRect(0,0,r.width,r.height),(h=h.filter((function(t){return function(t,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.velocity*=e.decay,e.flat?(e.wobble=0,e.wobbleX=e.x+10*e.scalar,e.wobbleY=e.y+10*e.scalar,e.tiltSin=0,e.tiltCos=0,e.random=1):(e.wobble+=e.wobbleSpeed,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble),e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+2);var n=e.tick++/e.totalTicks,s=e.x+e.random*e.tiltCos,i=e.y+e.random*e.tiltSin,r=e.wobbleX+e.random*e.tiltCos,a=e.wobbleY+e.random*e.tiltSin;if(t.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-n)+")",t.beginPath(),o&&"path"===e.shape.type&&"string"==typeof e.shape.path&&Array.isArray(e.shape.matrix))t.fill(function(t,e,n,s,i,r,o){var a=new Path2D(t),u=new Path2D;u.addPath(a,new DOMMatrix(e));var c=new Path2D;return c.addPath(u,new DOMMatrix([Math.cos(o)*i,Math.sin(o)*i,-Math.sin(o)*r,Math.cos(o)*r,n,s])),c}(e.shape.path,e.shape.matrix,e.x,e.y,.1*Math.abs(r-s),.1*Math.abs(a-i),Math.PI/10*e.wobble));else if("bitmap"===e.shape.type){var u=Math.PI/10*e.wobble,c=.1*Math.abs(r-s),l=.1*Math.abs(a-i),h=e.shape.bitmap.width*e.scalar,p=e.shape.bitmap.height*e.scalar,f=new DOMMatrix([Math.cos(u)*c,Math.sin(u)*c,-Math.sin(u)*l,Math.cos(u)*l,e.x,e.y]);f.multiplySelf(new DOMMatrix(e.shape.matrix));var d=t.createPattern(e.shape.bitmap,"no-repeat");d.setTransform(f),t.globalAlpha=1-n,t.fillStyle=d,t.fillRect(e.x-h/2,e.y-p/2,h,p),t.globalAlpha=1}else if("circle"===e.shape)t.ellipse?t.ellipse(e.x,e.y,Math.abs(r-s)*e.ovalScalar,Math.abs(a-i)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):function(t,e,n,s,i,r,o,a,u){t.save(),t.translate(e,n),t.rotate(r),t.scale(s,i),t.arc(0,0,1,0,a,void 0),t.restore()}(t,e.x,e.y,Math.abs(r-s)*e.ovalScalar,Math.abs(a-i)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI);else if("star"===e.shape)for(var g=Math.PI/2*3,m=4*e.scalar,y=8*e.scalar,b=e.x,v=e.y,w=5,M=Math.PI/w;w--;)b=e.x+Math.cos(g)*y,v=e.y+Math.sin(g)*y,t.lineTo(b,v),g+=M,b=e.x+Math.cos(g)*m,v=e.y+Math.sin(g)*m,t.lineTo(b,v),g+=M;else t.moveTo(Math.floor(e.x),Math.floor(e.y)),t.lineTo(Math.floor(e.wobbleX),Math.floor(i)),t.lineTo(Math.floor(r),Math.floor(a)),t.lineTo(Math.floor(s),Math.floor(e.wobbleY));return t.closePath(),t.fill(),e.tick<e.totalTicks}(p,t)}))).length?c=b.frame(e):u()})),l=u}));return{addFettis:function(t){return h=h.concat(t),f},canvas:t,promise:f,reset:function(){c&&b.cancel(c),l&&l()}}}(t,A,d,n,r),a.promise)}function w(n){var s=p||M(n,"disableForReducedMotion",Boolean),i=M(n,"zIndex",Number);if(s&&m)return u((function(t){t()}));c&&a?t=a.canvas:c&&!t&&(t=function(t){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=t,e}(i),document.body.appendChild(t)),l&&!g&&d(t);var r={width:t.width,height:t.height};function o(){if(f){var e={getBoundingClientRect:function(){if(!c)return t.getBoundingClientRect()}};return d(e),void f.postMessage({resize:{width:e.width,height:e.height}})}r.width=r.height=null}function b(){a=null,l&&(h=!1,e.removeEventListener("resize",o)),c&&t&&(document.body.removeChild(t),t=null,g=!1)}return f&&!g&&f.init(t),g=!0,f&&(t.__confetti_initialized=!0),l&&!h&&(h=!0,e.addEventListener("resize",o,!1)),f?f.fire(n,r,b):y(n,r,b)}return w.reset=function(){f&&f.reset(),a&&a.reset()},w}function I(){return y||(y=E(null,{useWorker:!0,resize:!0})),y}n.exports=function(){return I().apply(this,arguments)},n.exports.reset=function(){I().reset()},n.exports.create=E,n.exports.shapeFromPath=function(t){if(!o)throw new Error("path confetti are not supported in this browser");var e,n;"string"==typeof t?e=t:(e=t.path,n=t.matrix);var s=new Path2D(e),i=document.createElement("canvas").getContext("2d");if(!n){for(var r,a,u=1e3,c=u,l=u,h=0,p=0,f=0;f<u;f+=2)for(var d=0;d<u;d+=2)i.isPointInPath(s,f,d,"nonzero")&&(c=Math.min(c,f),l=Math.min(l,d),h=Math.max(h,f),p=Math.max(p,d));r=h-c,a=p-l;var g=Math.min(10/r,10/a);n=[g,0,0,g,-Math.round(r/2+c)*g,-Math.round(a/2+l)*g]}return{type:"path",path:e,matrix:n}},n.exports.shapeFromText=function(t){var e,n=1,s="#000000",i='"Twemoji Mozilla", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "system emoji", sans-serif';"string"==typeof t?e=t:(e=t.text,n="scalar"in t?t.scalar:n,i="fontFamily"in t?t.fontFamily:i,s="color"in t?t.color:s);var r=10*n,o=r+"px "+i,a=new OffscreenCanvas(r,r),u=a.getContext("2d");u.font=o;var c=u.measureText(e),l=Math.floor(c.width),h=Math.floor(c.fontBoundingBoxAscent+c.fontBoundingBoxDescent);(u=(a=new OffscreenCanvas(l,h)).getContext("2d")).font=o,u.fillStyle=s,u.fillText(e,0,r);var p=1/n;return{type:"bitmap",bitmap:a.transferToImageBitmap(),matrix:[p,0,0,p,-l*p/2,-h*p/2]}}}(function(){return"undefined"!=typeof window?window:"undefined"!=typeof self?self:this||{}}(),r,!1);const o=r.exports;r.exports.create,new i("#heading",{strings:["Hey There!","I am a Product Designer","Future Software Engineer","An Indie Maker."],typeSpeed:78,backSpeed:98,cursorChar:"_",loop:!0});const a=document.getElementById("form");a.addEventListener("keydown",(t=>{if("Enter"===t.key){const t=document.createElement("canvas");document.body.appendChild(t),o.create(t,{resize:!0,useWorker:!0}),o({particleCount:400,spread:320}),t.remove(),a.value=""}}))})();