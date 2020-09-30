module.exports=function(e){var a={};function r(c){if(a[c])return a[c].exports;var t=a[c]={i:c,l:!1,exports:{}};return e[c].call(t.exports,t,t.exports,r),t.l=!0,t.exports}return r.m=e,r.c=a,r.d=function(e,a,c){r.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:c})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,a){if(1&a&&(e=r(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(r.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var t in e)r.d(c,t,function(a){return e[a]}.bind(null,t));return c},r.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(a,"a",a),a},r.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},r.p="",r(r.s=5)}([function(e,a){e.exports=flarum.core.compat.app},function(e,a){e.exports=flarum.core.compat.extend},function(e,a){e.exports=flarum.core.compat["components/CommentPost"]},,,function(e,a,r){"use strict";r.r(a);var c=r(1),t=r(0),s=r.n(t),f=r(2),b=r.n(f);var o=1;s.a.initializers.add("therealsujitk/flarum-ext-hljs",(function(){Object(c.extend)(b.a.prototype,"headerItems",(function(e){e.add("therealsujitk-hljs",m("null",{id:"therealsujitk-hljs",config:function(){var e=s.a.forum.attribute("therealsujitk-hljs.theme_name");null!==e&&""!==e||(e="default");var a=setInterval((function(){o&&(void 0!==document.querySelectorAll("link[href*='cdnjs.cloudflare.com/ajax/libs/highlight.js/']")[0]?(document.querySelectorAll("link[href*='cdnjs.cloudflare.com/ajax/libs/highlight.js/']")[0].href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.2/styles/"+e+".min.css",o=0,clearInterval(a)):void 0!==document.querySelectorAll("link[href*='cdn.jsdelivr.net/gh/highlightjs/']")[0]&&(document.querySelectorAll("link[href*='cdn.jsdelivr.net/gh/highlightjs/']")[0].href="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.1.2/build/styles/"+e+".min.css",o=0,clearInterval(a)))}),500),r=s.a.forum.attribute("baseUrl");!function(e,a){var r,c;switch(e){case"a11y-dark":r="#2b2b2b",c="#f8f8f2";break;case"a11y-light":r="#fefefe",c="#545454";break;case"agate":r="#333",c="#fff";break;case"an-old-hope":r="#1c1d21",c="#c0c5ce";break;case"androidstudio":r="#282b2e",c="#a9b7c6";break;case"arduino-light":r="#fff",c="#434f54";break;case"arta":r="#222",c="#aaa";break;case"ascetic":r="#fff",c="#000";break;case"atelier-cave-dark":r="#19171c",c="#8b8792";break;case"atelier-cave-light":r="#efecf4",c="#585260";break;case"atelier-dune-dark":r="#20201d",c="#a6a28c";break;case"atelier-dune-light":r="#fefbec",c="#6e6b5e";break;case"atelier-estuary-dark":r="#22221b",c="#929181";break;case"atelier-estuary-light":r="#f4f3ec",c="#5f5e4e";break;case"atelier-forest-dark":r="#1b1918",c="#a8a19f";break;case"atelier-forest-light":r="#f1efee",c="#68615e";break;case"atelier-heath-dark":r="#1b181b",c="#ab9bab";break;case"atelier-heath-light":r="#f7f3f7",c="#695d69";break;case"atelier-lakeside-dark":r="#161b1d",c="#7ea2b4";break;case"atelier-lakeside-light":r="#ebf8ff",c="#516d7b";break;case"atelier-plateau-dark":r="#1b1818",c="#8a8585";break;case"atelier-plateau-light":r="#f4ecec",c="#585050";break;case"atelier-savanna-dark":r="#171c19",c="#87928a";break;case"atelier-savanna-light":r="#ecf4ee",c="#526057";break;case"atelier-seaside-dark":r="#131513",c="#8ca68c";break;case"atelier-seaside-light":r="#f4fbf4",c="#5e6e5e";break;case"atelier-sulphurpool-dark":r="#202746",c="#979db4";break;case"atelier-sulphurpool-light":r="#f5f7ff",c="#5e6687";break;case"atom-one-dark-reasonable":case"atom-one-dark":r="#282c34",c="#abb2bf";break;case"atom-one-light":r="#fafafa",c="#383a42";break;case"brown-paper":r="url("+a+"/assets/extensions/therealsujitk-hljs/brown-papersq.png)",c="#363c69";break;case"codepen-embed":r="#222",c="#fff";break;case"color-brewer":r="#fff",c="#000";break;case"darcula":r="#2b2b2b",c="#bababa";break;case"dark":r="#444",c="#ddd";break;case"docco":r="#f8f8ff",c="#000";break;case"dracula":r="#282a36",c="#f8f8f2";break;case"far":r="#000080",c="#0ff";break;case"foundation":r="#eee",c="#000";break;case"github-gist":r="#fff",c="#333333";break;case"github":r="#f8f8f8",c="#333";break;case"gml":r="#222222",c="#c0c0c0";break;case"googlecode":r="#fff",c="#000";break;case"gradient-dark":r="rgb(80,31,122); background: linear-gradient(166deg, rgba(80,31,122,1) 0%, rgba(40,32,179,1) 80%)",c="#e7e4eb";break;case"gradient-light":r="rgb(255,253,141); background: linear-gradient(142deg, rgba(255,253,141,1) 0%, rgba(252,183,255,1) 35%, rgba(144,236,255,1) 100%)",c="#250482";break;case"grayscale":r="#fff",c="#333";break;case"gruvbox-dark":r="#282828",c="#ebdbb2";break;case"gruvbox-light":r="#fbf1c7",c="#3c3836";break;case"hopscotch":r="#322931",c="#b9b5b8";break;case"hybrid":r="#1d1f21",c="#c5c8c6";break;case"idea":r="#fff",c="#000";break;case"ir-black":r="#000",c="#f8f8f8";break;case"isbl-editor-dark":r="#404040",c="#f0f0f0";break;case"isbl-editor-light":r="#fff",c="#000";break;case"kimbie.dark":r="#221a0f",c="#d3af86";break;case"kimbie.light":r="#fbebd4",c="#84613d";break;case"lightfair":r="#fff",c="#444";break;case"lioshi":r="#303030",c="#c5c8c6";break;case"magula":r="#f4f4f4",c="#000";break;case"mono-blue":r="#eaeef3",c="#00193a";break;case"monokai-sublime":r="#23241f",c="#f8f8f2";break;case"monokai":r="#272822",c="#ddd";break;case"night-owl":r="#011627",c="#d6deeb";break;case"nnfx-dark":r="#333",c="#fff";break;case"nnfx":r="#fff",c="#000";break;case"nord":r="#2e3440",c="#d8dee9";break;case"obsidian":r="#282b2e",c="#ffcd22";break;case"ocean":r="#2b303b",c="#c0c5ce";break;case"paraiso-dark":r="#2f1e2e",c="#a39e9b";break;case"paraiso-light":r="#e7e9db",c="#4f424c";break;case"pojoaque":r="url("+a+"/assets/extensions/therealsujitk-hljs/pojoaque.jpg) repeat scroll left top #181914",c="#dccf8f";break;case"purebasic":r="#ffffdf",c="#000";break;case"qtcreator_dark":r="#000",c="#aaa";break;case"qtcreator_light":r="#fff",c="#000";break;case"railscasts":r="#232323",c="#e6e1dc";break;case"rainbow":r="#474949",c="#d1d9e1";break;case"routeros":r="#f0f0f0",c="#444";break;case"school-book":r="#f6f6ae url("+a+"/assets/extensions/therealsujitk-hljs/school-book.png)",c="#3e5915";break;case"shades-of-purple":r="#2d2b57",c="#fad000";break;case"solarized-dark":r="#002b36",c="#839496";break;case"solarized-light":r="#fdf6e3",c="#657b83";break;case"srcery":r="#1c1b19",c="#fce8c3";break;case"sunburst":r="#000",c="#f8f8f8";break;case"tomorrow-night-blue":r="#002451",c="#fff";break;case"tomorrow-night-bright":r="#000",c="#eaeaea";break;case"tomorrow-night-eighties":r="#2d2d2d",c="#cccccc";break;case"tomorrow-night":r="#1d1f21",c="#c5c8c6";break;case"tomorrow":r="#fff",c="#4d4d4c";break;case"vs":r="#fff",c="#000";break;case"vs2015":r="#1e1e1e",c="#dcdcdc";break;case"xcode":r="#fff",c="#000";break;case"xt256":r="#000",c="#eaeaea";break;case"zenburn":r="#3f3f3f",c="#dcdcdc";break;default:r="#f0f0f0",c="#444"}for(var t=document.getElementsByTagName("pre"),s=0;s<t.length;++s)t[s].style="background: "+r+";";for(t=document.getElementsByTagName("code"),s=0;s<t.length;++s)t[s].style="background: "+r+"; color: "+c+";"}(e,r)}}))}))}))}]);
//# sourceMappingURL=forum.js.map