// build time:Thu Sep 10 2020 13:31:29 GMT+0800 (GMT+08:00)
var e={hostname:"example.com",root:"/",statics:"/",favicon:{normal:"images/favicon.ico",hidden:"images/failure.ico"},js:{valine:"js/valine.js",chart:"npm/frappe-charts@1.5.0/dist/frappe-charts.min.iife.min.js",copy_tex:"npm/katex@0/dist/contrib/copy-tex.min.js",mediumzoom:"npm/medium-zoom@1.0.5/dist/medium-zoom.min.js"},css:{valine:"css/comment.css",katex:"npm/katex@0/dist/katex.min.css",mermaid:"css/mermaid.css"},search:null,valine:{appId:"JPTgFiKQRAL004V3s07lXfXx-gzGzoHsz",appKey:"gpxaUiSCGCnIqjmiKwRrjfkO",placeholder:"ヽ(○´∀`)ﾉ♪",avatar:"mp",pageSize:10,lang:"zh-CN",visitor:true,recordIP:true,serverURLs:null,requiredFields:[871144181,"871144181@qq.com"],enableQQ:true,masters:["871144181@qq.com","3072416199@qq.com"],masterTag:"主人",tips:"昵称框中填入QQ号，将自动获取QQ昵称&邮箱&头像；其他邮箱由Gavatar提供头像。"},quicklink:{timeout:3e3,priority:true},version:"0.1.3",audio:["https://music.163.com/#/playlist?id=2031842656","https://music.163.com/song?id=1387098940","https://music.163.com/#/playlist?id=2088001742","https://www.xiami.com/collect/250830668","https://y.qq.com/n/yqq/playsquare/3535982902.html"]};const t=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};const i=function(){return l("main > .inner").offsetHeight};const n=function(e,t,i){if(i){t()}else{var n=document.createElement("script");n.onload=n.onreadystatechange=function(e,i){if(i||!n.readyState||/loaded|complete/.test(n.readyState)){n.onload=n.onreadystatechange=null;n=undefined;if(!i&&t)setTimeout(t,0)}};n.src=e;document.head.appendChild(n)}};const a=function(t,i){return(e[t][i].indexOf("npm")>-1?"//cdn.jsdelivr.net/":f)+e[t][i]};const s=function(e,t,i){if(LOCAL[e]){n(a("js",e),t||function(){window[e]=true},i||window[e])}};const r=function(e,t){if(window["css"+e])return;if(LOCAL[e]){var i=document.createElement("link");i.attr("rel","stylesheet");i.href=a("css",e);document.head.appendChild(i);window["css"+e]=true}};const o=function(e){var t=e.text||e.textContent||e.innerHTML||"";var i=e.parentNode;i.removeChild(e);var n=document.createElement("script");if(e.id){n.id=e.id}if(e.className){n.className=e.className}if(e.type){n.type=e.type}if(e.src){n.src=e.src;n.async=false}if(e.dataset.pjax!==undefined){n.dataset.pjax=""}if(t!==""){n.appendChild(document.createTextNode(t))}i.appendChild(n)};const c=function(e,t,i){Velocity(e,"scroll",{duration:500,easing:"easeOutQuart",offset:t||-L,complete:i||function(){}})};const l=function(e,t){t=t||document;if(e.indexOf("#")===0){return t.getElementById(e.replace("#",""))}return t.querySelector(e)};l.all=function(e,t){t=t||document;return t.querySelectorAll(e)};l.each=function(e,t,i){return l.all(e,i).forEach(t)};Object.assign(HTMLElement.prototype,{wrap:function(e){this.parentNode.insertBefore(e,this);this.parentNode.removeChild(this);e.appendChild(this)},height:function(e){if(e){this.style.height=typeof e=="number"?e+"rem":e}return this.getBoundingClientRect().height},width:function(e){if(e){this.style.width=typeof e=="number"?e+"rem":e}return this.getBoundingClientRect().width},top:function(){return this.getBoundingClientRect().top},left:function(){return this.getBoundingClientRect().left},attr:function(e,t){if(t===null){return this.removeAttribute(e)}if(t){return this.setAttribute(e,t)}else{return this.getAttribute(e)}},insertAfter:function(e){var t=this.parentNode;if(t.lastChild==this){t.appendChild(e)}else{t.insertBefore(e,this.nextSibling)}},display:function(e){if(e==null){return this.style.display}else{this.style.display=e}},child:function(e){return l(e,this)},find:function(e){return l.all(e,this)},_class:function(e,t,i){var n=t.indexOf(" ")?t.split(" "):[t];var a=this;n.forEach(function(t){if(e=="toggle"){a.classList.toggle(t,i)}else{a.classList[e](t)}})},addClass:function(e){this._class("add",e);return this},removeClass:function(e){this._class("remove",e);return this},toggleClass:function(e,t){this._class("toggle",e,t);return this},hasClass:function(e){return this.classList.contains(e)}});const d={get:function(e){return localStorage.getItem(e)},set:function(e,t){localStorage.setItem(e,t);return t},del:function(e){localStorage.removeItem(e)}};const u=function(e){var t=this,i={type:"audio",mode:"random",btns:["play-pause","music"],events:{"play-pause":function(e){if(t.media.source.paused){t.media.play()}else{t.media.pause()}},music:function(e){if(t.media.list.hasClass("show")){t.media.hideList()}else{t.media.list.addClass("show");t.media.scroll();t.media.changeTitle()}}}};var n={random:function(e){return Math.floor(Math.random()*e)},parse:function(e){var t=[];[["music.163.com.*song.*id=(\\d+)","netease","song"],["music.163.com.*album.*id=(\\d+)","netease","album"],["music.163.com.*artist.*id=(\\d+)","netease","artist"],["music.163.com.*playlist.*id=(\\d+)","netease","playlist"],["music.163.com.*discover/toplist.*id=(\\d+)","netease","playlist"],["y.qq.com.*song/(\\w+).html","tencent","song"],["y.qq.com.*album/(\\w+).html","tencent","album"],["y.qq.com.*singer/(\\w+).html","tencent","artist"],["y.qq.com.*playsquare/(\\w+).html","tencent","playlist"],["y.qq.com.*playlist/(\\w+).html","tencent","playlist"],["xiami.com.*song/(\\w+)","xiami","song"],["xiami.com.*album/(\\w+)","xiami","album"],["xiami.com.*artist/(\\w+)","xiami","artist"],["xiami.com.*collect/(\\w+)","xiami","playlist"]].forEach(function(i){var n=new RegExp(i[0]);var a=n.exec(e);if(a!==null){t=[i[1],i[2],a[1]]}});return t},lrc:function(e){if(e){e=e.replace(/([^\]^\n])\[/g,function(e,t){return t+"\n["});const t=e.split("\n");var i=[];const n=t.length;for(var a=0;a<n;a++){const s=t[a].match(/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g);const r=t[a].replace(/.*\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g,"").replace(/<(\d{2}):(\d{2})(\.(\d{2,3}))?>/g,"").replace(/^\s+|\s+$/g,"");if(s){const o=s.length;for(var c=0;c<o;c++){const l=/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/.exec(s[c]);const d=l[1]*60;const u=parseInt(l[2]);const f=l[4]?parseInt(l[4])/((l[4]+"").length===2?100:1e3):0;const m=d+u+f;i.push([m,r])}}}i=i.filter(function(e){return e[1]});i.sort(function(e,t){return e[0]-t[0]});return i}else{return[]}}};t.media={pointer:-1,source:null,buttons:{},playlist:[],lrc:{},fetch:function(e,t){var i=this;var a=[];return new Promise(function(t,i){e.forEach(function(e){var i=n.parse(e);var s=JSON.stringify(i);var r=d.get(s);if(r){a.push.apply(a,JSON.parse(r));t(a)}else{fetch("https://api.i-meto.com/meting/api?server="+i[0]+"&type="+i[1]+"&id="+i[2]+"&r="+Math.random()).then(function(e){return e.json()}).then(function(e){d.set(s,JSON.stringify(e));a.push.apply(a,e);t(a)}).catch(function(e){})}})})},load:function(e){if(e){if(this.options.rawList!==e){var t=this;this.options.rawList=e;this.fetch(e).then(function(e){t.playlist=e;a.list();t.setMode(t.options.mode)})}}},setMode:function(e){var i=this.playlist.length;if(!i)return;var a=function(e){if(e+1==i){e=-1}t.media.pointer=++e};switch(e){case"random":var s=n.random(i);if(this.pointer!==s){this.pointer=s}else{a(this.pointer)}break;case"next":a(this.pointer);break}this.setSource()},setCurrent:function(e){if(typeof e=="number"&&e!=this.pointer&&this.playlist[e]&&!this.playlist[e]["error"]){this.pointer=e;this.setSource()}},setSource:function(){var e=this.playlist[this.pointer];if(e["error"]){return}var t=false;if(!this.source.paused){t=true;this.stop()}this.source.attr("src",e.url);this.source.attr("title",e.title+" - "+e.author);a.progress();a.preview();if(t==true){this.play()}},play:function(){if(this.playlist[this.pointer]["error"]){return}this.source.play();this.changeTitle()},pause:function(){this.source.pause();document.title=p},stop:function(){this.source.pause();this.source.currentTime=0;document.title=p},scroll:function(){var e=this.list.find("li")[this.pointer];Velocity(e,"scroll",{container:e.parentNode})},scrollLrc:function(e){var t=this;if(!this.lrc.data)return;if(this.lrc.index>this.lrc.data.length-1||e<this.lrc.data[this.lrc.index][0]||(!this.lrc.data[this.lrc.index+1]||e>=this.lrc.data[this.lrc.index+1][0])){for(var i=0;i<this.lrc.data.length;i++){if(e>=this.lrc.data[i][0]&&(!this.lrc.data[i+1]||e<this.lrc.data[i+1][0])){t.lrc.index=i;var n=-(t.lrc.index-1);t.lrc.el.style.transform="translateY("+n+"rem)";t.lrc.el.style.webkitTransform="translateY("+n+"rem)";t.lrc.el.getElementsByClassName("current")[0].removeClass("current");t.lrc.el.getElementsByTagName("p")[i].addClass("current")}}}},hideList:function(){var e=this.list;e.addClass("hide");window.setTimeout(function(){e.removeClass("show hide")},300)},changeTitle:function(){if(!this.source.paused)document.title="Now Playing..."+this.playlist[this.pointer]["title"]+" - "+this.playlist[this.pointer]["author"]+" | "+p}};var a={button:function(e){if(!t.media.buttons[e]){var i=document.createElement("div");i.addClass(e+" btn");i.addEventListener("click",t.media.options.events[e]||function(){});t.appendChild(i);t.media.buttons[e]=i}},audio:function(){if(!t.media.source){var e=document.createElement("audio");e.addEventListener("error",function(){t.media.list.find("li")[t.media.pointer].addClass("error");t.media.playlist[t.media.pointer]["error"]=true;t.media.setMode("next")});e.addEventListener("play",function(){t.addClass("playing");t.media.list.addClass("playing");Y(e.attr("title"))});e.addEventListener("pause",function(){t.removeClass("playing");t.media.list.removeClass("playing")});e.addEventListener("timeupdate",function(){var i=Math.floor(e.currentTime/e.duration*100);t.media.progress.width(i+"%");if(t.media.lrc){t.media.scrollLrc(e.currentTime)}if(i==100){t.media.setMode("next");t.media.play()}});t.appendChild(e);t.media.source=e}},info:function(){if(!t.media.list){var e=document.createElement("div");e.addClass("play-list");e.innerHTML='<div class="preview"></div><ol></ol>';t.media.list=e;t.insertAfter(e);l("#main").addEventListener("click",function(){t.media.hideList()})}},list:function(){var e=t.media.list.child("ol");e.innerHTML="";t.media.playlist.forEach(function(i,n){var a=document.createElement("li");a.innerHTML='<span class="info"><span>'+i.title+"</span><span>"+i.author+"</span></span>";a.title=i.title+" - "+i.author;a.addEventListener("click",function(e){var i=e.currentTarget;if(t.media.pointer===n&&t.media.progress){if(t.media.source.paused){t.media.play()}else{t.media.source.currentTime=t.media.source.duration*Math.floor(e.clientX-i.left())/i.width()}return}t.media.setCurrent(n);t.media.play()});e.appendChild(a)})},progress:function(){if(t.media.progress){t.media.progress.parentNode.removeClass("current");t.media.progress.remove()}var e=t.media.list.find("li")[t.media.pointer];if(e){var i=document.createElement("div");i.addClass("progress");e.appendChild(i);t.media.progress=i;e.addClass("current");t.media.scroll()}},preview:function(){var e=t.media.list.child(".preview");var i=t.media.playlist[t.media.pointer];e.innerHTML='<div class="cover"><div class="disc"><img src="'+i.pic+'" class="blur" /></div></div>'+'<div class="info"><h4 class="title">'+i.title+"</h4><span>"+i.author+'</span><div class="lrc"></div></div>';var a="";fetch(i.lrc).then(function(e){return e.text()}).then(function(s){if(i!==t.media.playlist[t.media.pointer])return;t.media.lrc.data=n.lrc(s);var r="";t.media.lrc.data.forEach(function(e,t){a+="<p"+(t===0?' class="current"':"")+">"+e[1]+"</p>"});var o=document.createElement("div");o.addClass("inner");o.innerHTML=a;e.child(".lrc").innerHTML="";e.child(".lrc").appendChild(o);t.media.lrc.el=o;t.media.lrc.index=0}).catch(function(e){});e.child(".cover").addEventListener("click",t.media.options.events["play-pause"])}},s=function(e){if(t.media.created)return;t.media.options=Object.assign(i,e);t.media.options.btns.forEach(a.button);a[t.media.options.type]();a.info();t.media.created=true};s(e)};Object.assign(HTMLElement.prototype,{player:u});var f=e.statics.indexOf("//")>0?e.statics:e.root;var m={x:"undefined",y:"undefined"};var h=0;var p,v;const g=document.getElementsByTagName("body")[0];const y=document.documentElement;const C=l("#container");const w=l("#loading");const b=l("#nav");const L=b.height();const x=l("#header");const E=b.child(".toggle");const k=l("#quick");const T=l("#tool");const N=T.child(".player");const O=T.child(".back-to-top");const q=T.child(".chat");const M=l("#sidebar");const I=l("#brand");const H=l("#search");const j=l("#waves").top();const A=j-L;const S={timer:null,lock:false,show:function(){clearTimeout(this.timer);document.body.removeClass("loaded");Velocity(w,"fadeIn",{complete:function(){S.lock=false}})},hide:function(e){this.timer=setTimeout(this.vanish,e||3e3)},vanish:function(){if(S.lock)return;Velocity(w,"fadeOut");document.body.addClass("loaded");S.lock=true}};const R=function(e){var t=l(".theme .ic");if(e){y.attr("data-theme",e);t.removeClass("i-sun");t.addClass("i-moon")}else{y.attr("data-theme",null);t.removeClass("i-moon");t.addClass("i-sun")}};const V=function(e){if(y.attr("data-theme")=="dark")e="#222";l('meta[name="theme-color"]').attr("content",e)};const z=function(){window.matchMedia("(prefers-color-scheme: dark)").addListener(function(e){if(e.matches){R("dark")}else{R()}});var e=d.get("theme");if(e){R(e)}l(".theme").addEventListener("click",function(e){var t=e.currentTarget.child(".ic");var i=document.createElement("div");i.id="neko";i.innerHTML='<div class="planet"><div class="sun"></div><div class="moon"></div></div><div class="body"><div class="face"><section class="eyes left"><span class="pupil"></span></section><section class="eyes right"><span class="pupil"></span></section><span class="nose"></span></div></div>';g.appendChild(i);var n=function(){setTimeout(function(){Velocity(i,"fadeOut",{complete:function(){g.removeChild(i)}})},2500)};if(t.hasClass("i-sun")){Velocity(i,"fadeIn",{complete:function(){i.addClass("dark");R("dark");d.set("theme","dark");n()}})}else{i.addClass("dark");Velocity(i,"fadeIn",{complete:function(){i.removeClass("dark");R();d.del("theme");n()}})}})};const B=function(){document.addEventListener("visibilitychange",function(){switch(document.visibilityState){case"hidden":l('[rel="icon"]').attr("href",f+e.favicon.hidden);document.title=LOCAL.favicon.hide;S.show();clearTimeout(v);break;case"visible":l('[rel="icon"]').attr("href",f+e.favicon.normal);document.title=LOCAL.favicon.show;S.hide(1e3);v=setTimeout(function(){document.title=p},2e3);break}})};const Y=function(e){if(!e)return;var t=document.createElement("div");t.innerHTML=e;t.addClass("tip");g.appendChild(t);setTimeout(function(){t.addClass("hide");setTimeout(function(){g.removeChild(t)},300)},3e3)};const _=function(e){var t=i();if(t>document.body.offsetHeight){k.display("flex");M.child(".panels").height("100vh")}else{k.display("none")}};const Q=function(e){var t=window.innerHeight;var n=i();var a=n>t?n-t:document.body.scrollHeight-t;var s=window.pageYOffset>j;var r=window.pageYOffset>0;if(s){V("#FFF")}else{V("#222")}b.toggleClass("show",s);T.toggleClass("affix",r);I.toggleClass("affix",r);M.toggleClass("affix",s&&document.body.offsetWidth>991);if(typeof m.y=="undefined"){m.y=window.pageYOffset}h=m.y-window.pageYOffset;if(h<0){b.removeClass("up");b.toggleClass("down",s)}else if(h>0){b.removeClass("down");b.toggleClass("up",s)}else{}m.y=window.pageYOffset;var o=Math.round(Math.min(100*window.pageYOffset/a,100))+"%";O.child("span").innerText=o;l(".percent").width(o)};const F=function(e){E.toggleClass("close");var t=M.hasClass("on")?"transition.slideRightOut":"transition.slideRightIn";Velocity(M,t,{duration:200,complete:function(){M.toggleClass("on")}})};const P=function(){var e=M.child(".inner");var t=M.find(".panel");if(M.child(".tab")){e.removeChild(M.child(".tab"))}var i=document.createElement("ul"),n="active";i.className="tab";["contents","related","overview"].forEach(function(e){var t=M.child(".panel."+e);if(t.innerHTML.replace(/(^\s*)|(\s*$)/g,"").length<1){return}var a=document.createElement("li");var s=document.createElement("span");var r=document.createTextNode(t.attr("data-title"));s.appendChild(r);a.appendChild(s);a.addClass(e+" item");if(n){t.addClass(n);a.addClass(n)}else{t.removeClass("active")}a.addEventListener("click",function(e){var t=event.currentTarget;if(t.hasClass("active"))return;M.find(".tab .item").forEach(function(e){e.removeClass("active")});M.find(".panel").forEach(function(e){e.removeClass("active")});M.child(".panel."+t.className.replace(" item","")).addClass("active");t.addClass("active")});i.appendChild(a);n=""});if(i.childNodes.length>1){e.insertBefore(i,e.childNodes[0]);M.child(".panels").style.paddingTop=""}else{M.child(".panels").style.paddingTop="10px"}};const U=function(){var e=l.all(".contents li");if(e.length<1){return}var t=Array.prototype.slice.call(e)||[];var i=null;t=t.map(function(e,t){var n=e.child("a.toc-link");var s=l(decodeURI(n.attr("href")));var r=s.child("a.anchor");var o=function(e){e.preventDefault();var n=l(decodeURI(e.currentTarget.attr("href")));i=t;c(n,-L,function(){a(t);i=null})};n.addEventListener("click",o);r&&r.addEventListener("click",o);return s});var n=M.child(".panels .inner");var a=function(i,a){var s=e[i];if(!s)return;if(s.hasClass("current")){return}l.each(".toc .active",function(e){e.removeClass("active current")});t.forEach(function(e){e.removeClass("active")});s.addClass("active current");t[i].addClass("active");var r=s.parentNode;while(!r.matches(".contents")){if(r.matches("li")){r.addClass("active");var o=l(r.child("a.toc-link").attr("href"));if(o){o.addClass("active")}}r=r.parentNode}Velocity(s,"scroll",{container:n,offset:-(n.offsetHeight/2)})};var s=function(e){var i=0;var n=e[i];if(n.boundingClientRect.top>0){i=t.indexOf(n.target);return i===0?0:i-1}for(;i<e.length;i++){if(e[i].boundingClientRect.top<=0){n=e[i]}else{return t.indexOf(n.target)}}return t.indexOf(n.target)};var r=function(){var e=new IntersectionObserver(function(e,t){var n=s(e)+(h<0?1:0);if(i===null){a(n)}},{rootMargin:"0px 0px -100% 0px",threshold:0});t.forEach(function(t){t&&e.observe(t)})};r()};const W=function(){c(g)};const $=function(){c(g,C.height())};const D=function(){c(l("#comments"))};const J=function(){l.each(".menu .item:not(.title)",function(t){var i=t.child("a[href]");if(!i)return;var n=i.pathname===location.pathname||i.pathname===location.pathname.replace("index.html","");var a=!e.root.startsWith(i.pathname)&&location.pathname.startsWith(i.pathname);var s=i.hostname===location.hostname&&(n||a);t.toggleClass("active",s);t.parentNode.parentNode.toggleClass("expand",t.parentNode.hasClass("submenu")&&t.parentNode.child(".active"))})};const K=function(){if(!l(".index.wrap"))return;var e=new IntersectionObserver(function(t){t.forEach(function(t){if(!window.IntersectionObserver){if(t.target.hasClass("show")===false){t.target.addClass("show")}}else{if(t.target.hasClass("show")){e.unobserve(t.target)}else{if(t.isIntersecting){t.target.addClass("show");e.unobserve(t.target)}}}})},{root:null,threshold:[.3]});l.each(".index.wrap article.item, .index.wrap section.item",function(t){e.observe(t)});l(".index.wrap .item:first-child").addClass("show");l.each(".cards .item",function(e,t){["mouseenter","touchstart"].forEach(function(t){e.addEventListener(t,function(t){if(l(".cards .item.active")){l(".cards .item.active").removeClass("active")}e.addClass("active")})});["mouseleave"].forEach(function(t){e.addEventListener(t,function(t){e.removeClass("active")})})})};const G=function(){l.each("span.exturl",function(e){var t=document.createElement("a");t.href=decodeURIComponent(atob(e.dataset.url).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""));t.rel="noopener external nofollow noreferrer";t.target="_blank";t.className=e.className;t.title=e.title||e.innerText;t.innerHTML=e.innerHTML;if(e.dataset.backgroundImage){t.dataset.backgroundImage=e.dataset.backgroundImage}e.parentNode.replaceChild(t,e)})};const X=function(){Z();if(!l(".md"))return;l.each(".md img",function(e){var t;if(t=e.attr("title")){var i=document.createElement("span");var n=document.createTextNode(t);i.appendChild(n);i.addClass("image-info");e.insertAfter(i)}});if(l(".md :not(a) > img, .md > img")){LOCAL["mediumzoom"]=true;s("mediumzoom",function(){window.mediumZoom(".md :not(a) > img, .md > img",{background:"rgba(0, 0, 0, 0.6)"})},window.mediumZoom)}l.each("li ruby",function(e){var t=e.parentNode;if(e.parentNode.tagName!="LI"){t=e.parentNode.parentNode}t.addClass("ruby")});l.each(".md > table",function(e){const t=document.createElement("div");t.className="table-container";e.wrap(t)});l.each(".highlight > table",function(e){const t=document.createElement("div");t.className="code-container";e.wrap(t)});l.each("figure.highlight",function(e){var t=e.child(".code-container");e.insertAdjacentHTML("beforeend",'<div class="operation"><span class="breakline-btn"><i class="ic i-align-left"></i></span><span class="copy-btn"><i class="ic i-clipboard"></i></span><span class="fullscreen-btn"><i class="ic i-expand"></i></span></div>');var i=e.child(".copy-btn");i.addEventListener("click",function(e){var i=e.currentTarget;var n=t.innerText.replace(/\n\n\t/g,"");var a=document.createElement("textarea");a.style.top=window.scrollY+"px";a.style.position="absolute";a.style.opacity="0";a.readOnly=true;a.value=n;document.body.append(a);const s=document.getSelection();const r=s.rangeCount>0?s.getRangeAt(0):false;a.select();a.setSelectionRange(0,n.length);a.readOnly=false;var o=document.execCommand("copy");i.child(".ic").className=o?"ic i-check":"ic i-times";a.blur();i.blur();if(r){s.removeAllRanges();s.addRange(r)}document.body.removeChild(a)});i.addEventListener("mouseleave",function(e){setTimeout(function(){e.target.child(".ic").className="ic i-clipboard"},300)});var n=e.child(".breakline-btn");n.addEventListener("click",function(t){var i=t.currentTarget;if(e.hasClass("breakline")){e.removeClass("breakline");i.child(".ic").className="ic i-align-left"}else{e.addClass("breakline");i.child(".ic").className="ic i-align-justify"}});var a=e.child(".fullscreen-btn");var s=function(){e.removeClass("fullscreen");l("html").removeClass("fullscreen");a.child(".ic").className="ic i-expand"};var r=function(t){var i=t.currentTarget;if(e.hasClass("fullscreen")){s();f&&f();c(e)}else{e.addClass("fullscreen");l("html").addClass("fullscreen");a.child(".ic").className="ic i-compress";u&&u()}};a.addEventListener("click",r);e.child("figcaption").addEventListener("click",r);if(t&&t.height()>300){t.style.maxHeight="300px";t.insertAdjacentHTML("beforeend",'<div class="show-btn"><i class="ic i-angle-down"></i></div>');var o=t.child(".show-btn");var d=o.child("i");var u=function(){t.style.maxHeight="";o.addClass("open")};var f=function(){t.style.maxHeight="300px";o.removeClass("open")};o.addEventListener("click",function(e){if(o.hasClass("open")){s();f();c(t.parentNode)}else{u()}})}});l.each("pre.mermaid > svg",function(e){e.style.maxWidth=""});l.each(".reward button",function(e){e.addEventListener("click",function(e){e.preventDefault();var t=l("#qr");if(t.display()==="inline-flex"){Velocity(t,"fadeOut")}else{Velocity(t,"transition.slideUpBigIn",{display:"inline-flex"})}})});l.each(".quiz > ul.options li",function(e){e.addEventListener("click",function(t){if(e.hasClass("correct")){e.toggleClass("right");e.parentNode.parentNode.addClass("show")}else{e.toggleClass("wrong")}})});l.each(".quiz > p",function(e){e.addEventListener("click",function(t){e.parentNode.toggleClass("show")})});l.each("div.tab",function(e,t){var i=e.attr("data-id");var n=e.attr("data-title");var a=l("#"+i);if(!a){a=document.createElement("div");a.className="tabs";a.id=i;e.parentNode.insertBefore(a,e);s=document.createElement("ul");s.addClass("nav");a.appendChild(s)}var s=a.child(".nav");if(!s){s=document.createElement("ul");s.addClass("nav");a.appendChild(s)}var r=document.createElement("li");r.innerHTML=n;if(t==0){r.addClass("active");e.addClass("active")}r.addEventListener("click",function(t){var i=t.currentTarget;a.find(".active").forEach(function(e){e.removeClass("active")});e.addClass("active");i.addClass("active")});s.appendChild(r);a.appendChild(e)})};const Z=function(){var t=l("#comments");if(!t){q.display("none");return}else{q.display("");s("valine",function(){var i=e.valine;i.el="#comments";i.path=t.attr("data-id");new Valine(i)},window.Valine)}var i=new IntersectionObserver(function(e,t){var i=e[0];r("valine");if(i.isIntersecting){Velocity(l("#comments"),"transition.bounceUpIn");t.disconnect()}});i.observe(t)};const ee=function(t){if(e.search===null)return;var i=instantsearch({indexName:e.search.indexName,searchClient:algoliasearch(e.search.appID,e.search.apiKey),searchFunction:function(e){var t=l(".search-input");if(t.value){e.search()}}});i.on("render",function(){t.refresh(l("#search-hits"))});i.addWidgets([instantsearch.widgets.configure({hitsPerPage:e.search.hits.per_page||10}),instantsearch.widgets.searchBox({container:".search-input-container",placeholder:LOCAL.search.placeholder,showReset:false,showSubmit:false,showLoadingIndicator:false,cssClasses:{input:"search-input"}}),instantsearch.widgets.stats({container:"#search-stats",templates:{text:function(e){var t=LOCAL.search.stats.replace(/\$\{hits}/,e.nbHits).replace(/\$\{time}/,e.processingTimeMS);return t+'<span class="algolia-powered"></span><hr>'}}}),instantsearch.widgets.hits({container:"#search-hits",templates:{item:function(t){var i=t.categories.join('<i class="ic i-angle-right"></i>');return'<a href="'+e.root+t.path+'"><span>'+i+"</span>"+t._highlightResult.title.value+"</a>"},empty:function(e){return'<div id="hits-empty">'+LOCAL.search.empty.replace(/\$\{query}/,e.query)+"</div>"}},cssClasses:{item:"item"}}),instantsearch.widgets.pagination({container:"#search-pagination",scrollTo:false,showFirst:false,showLast:false,templates:{first:'<i class="ic i-angle-double-left"></i>',last:'<i class="ic i-angle-double-right"></i>',previous:'<i class="ic i-angle-left"></i>',next:'<i class="ic i-angle-right"></i>'},cssClasses:{root:"pagination",item:"pagination-item",link:"page-number",selectedItem:"current",disabledItem:"disabled-item"}})]);i.start();l.each(".search",function(e){e.addEventListener("click",function(){document.body.style.overflow="hidden";Velocity(H,"transition.shrinkIn",{duration:200,complete:function(){l(".search-input").focus()}})})});const n=function(){document.body.style.overflow="";Velocity(H,"transition.shrinkOut")};H.addEventListener("click",function(e){if(e.target===H){n()}});l(".close-btn").addEventListener("click",n);window.addEventListener("pjax:success",n);window.addEventListener("keyup",function(e){if(e.key==="Escape"){n()}})};const te=function(e){d.set(e,m.y)};const ie=function(){te(window.location.href);if(M.hasClass("on")){Velocity(M,"transition.slideRightOut",{duration:200,complete:function(){M.removeClass("on");E.removeClass("close")}})}l("#content").innerHTML="";l("#content").appendChild(w.lastChild.cloneNode(true))};const ne=function(t){r("katex");s("copy_tex");r("mermaid");s("chart");if(!t){l.each("script[data-pjax]",o)}p=document.title;_();J();P();U();G();X();N.media.load(LOCAL.audio||e.audio||{});lozad(l.all("img, [data-background-image]"),{loaded:function(e){e.addClass("lozaded")}}).observe();S.hide();var i=d.get(window.location.href);if(i){c(g,i);d.del(window.location.href)}K()};const ae=function(){document.body.oncopy=function(){Y(LOCAL.copyright)};var t=new Pjax({selectors:["head title",".languages",".pjax","script[data-config]"],analytics:false,cacheBust:false});e.quicklink.ignores=LOCAL.ignores;quicklink.listen(e.quicklink);B();z();E.addEventListener("click",F);l(".dimmer").addEventListener("click",F);k.child(".down").addEventListener("click",$);k.child(".up").addEventListener("click",W);O.addEventListener("click",W);w.addEventListener("click",S.vanish);window.addEventListener("scroll",Q);q.addEventListener("click",D);N.player();window.addEventListener("resize",_);window.addEventListener("pjax:send",ie);window.addEventListener("pjax:success",ne);window.addEventListener("beforeunload",function(){te(window.location.href)});ee(t);ne(1)};window.addEventListener("DOMContentLoaded",ae);console.log("%c Theme.Shoka v"+e.version+" %c https://shoka.lostyu.me/ ","color: white; background: #e9546b; padding:5px 0;","padding:4px;border:1px solid #e9546b;");
//rebuild by hrmmi 