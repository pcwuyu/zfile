(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28547ac9"],{"28f8":function(e,t,a){},7901:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("aplayer",{directives:[{name:"show",rawName:"v-show",value:e.fileList.length>0&&-1!==e.audioIndex,expression:"fileList.length > 0 && audioIndex !== -1"}],ref:"aplayer",attrs:{id:"aplyer",fixed:"",audio:e.fileList},on:{listSwitch:e.updateCover}})},i=[],n=(a("ac4d"),a("8a81"),a("ac6a"),a("c5f6"),{name:"AudioPlayer",data:function(){return{audioInfo:{}}},props:{fileList:Array,audioIndex:Number},methods:{updateCover:function(){var e=this,t=this.$refs.aplayer.currentMusic;this.$http.get("common/audio-info",{params:{url:t.url}}).then((function(t){var a=t.data.data,r=e.$refs.aplayer.$el;r.getElementsByClassName("aplayer-pic")[0].style.backgroundImage="url("+a.cover+")",r.getElementsByClassName("aplayer-list-light")[0].getElementsByClassName("aplayer-list-author")[0].innerHTML=a.artist}))}},watch:{audioIndex:function(){this.fileList.length>0&&-1!==this.audioIndex?(this.$refs.aplayer.play(),this.$refs.aplayer.switch(this.audioIndex)):this.$refs.aplayer.pause()},fileList:function(e){if(0===e.length)this.$refs.aplayer.pause();else{var t=!0,a=!1,r=void 0;try{for(var i,n=this.fileList[Symbol.iterator]();!(t=(i=n.next()).done);t=!0){var s=i.value;s.artist="",s.cover=""}}catch(l){a=!0,r=l}finally{try{t||null==n.return||n.return()}finally{if(a)throw r}}}}},mounted:function(){var e=this.$refs.aplayer.$el;e.getElementsByClassName("aplayer-miniswitcher")[0].click(),e.getElementsByClassName("aplayer-icon-order")[0].setAttribute("title","播放顺序"),e.getElementsByClassName("aplayer-icon-loop")[0].setAttribute("title","循环模式"),e.getElementsByClassName("aplayer-icon-menu")[0].setAttribute("title","播放列表")}}),s=n,l=(a("a710"),a("2877")),o=Object(l["a"])(s,r,i,!1,null,"0d5a77b5",null);t["default"]=o.exports},a710:function(e,t,a){"use strict";var r=a("28f8"),i=a.n(r);i.a},aa77:function(e,t,a){var r=a("5ca1"),i=a("be13"),n=a("79e5"),s=a("fdef"),l="["+s+"]",o="​",u=RegExp("^"+l+l+"*"),c=RegExp(l+l+"*$"),f=function(e,t,a){var i={},l=n((function(){return!!s[e]()||o[e]()!=o})),u=i[e]=l?t(p):s[e];a&&(i[a]=u),r(r.P+r.F*l,"String",i)},p=f.trim=function(e,t){return e=String(i(e)),1&t&&(e=e.replace(u,"")),2&t&&(e=e.replace(c,"")),e};e.exports=f},c5f6:function(e,t,a){"use strict";var r=a("7726"),i=a("69a8"),n=a("2d95"),s=a("5dbc"),l=a("6a99"),o=a("79e5"),u=a("9093").f,c=a("11e9").f,f=a("86cc").f,p=a("aa77").trim,d="Number",h=r[d],y=h,m=h.prototype,g=n(a("2aeb")(m))==d,v="trim"in String.prototype,N=function(e){var t=l(e,!1);if("string"==typeof t&&t.length>2){t=v?t.trim():p(t,3);var a,r,i,n=t.charCodeAt(0);if(43===n||45===n){if(a=t.charCodeAt(2),88===a||120===a)return NaN}else if(48===n){switch(t.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+t}for(var s,o=t.slice(2),u=0,c=o.length;u<c;u++)if(s=o.charCodeAt(u),s<48||s>i)return NaN;return parseInt(o,r)}}return+t};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof h&&(g?o((function(){m.valueOf.call(a)})):n(a)!=d)?s(new y(N(t)),a,h):N(t)};for(var I,E=a("9e1e")?u(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),b=0;E.length>b;b++)i(y,I=E[b])&&!i(h,I)&&f(h,I,c(y,I));h.prototype=m,m.constructor=h,a("2aba")(r,d,h)}},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);