"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[93],{295:function(t,n,e){e.d(n,{G5:function(){return p},QV:function(){return f},fz:function(){return h},mE:function(){return o},nK:function(){return u}});var r=e(861),a=e(687),c=e.n(a),i=e(44),s="4c1081d23ec0123139ed5dd8633262bc",o=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.themoviedb.org/3/trending/movie/day",e={signal:n,params:{api_key:s}},t.next=4,i.ZP.get("https://api.themoviedb.org/3/trending/movie/day",e);case 4:return r=t.sent,t.next=7,r.data;case 7:return t.abrupt("return",t.sent);case 8:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),u=function(){var t=(0,r.Z)(c().mark((function t(n,e){var r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.themoviedb.org/3/search/movie",r={signal:e,params:{api_key:s,query:n}},t.next=4,i.ZP.get("https://api.themoviedb.org/3/search/movie",r);case 4:return a=t.sent,t.next=7,a.data;case 7:return t.abrupt("return",t.sent);case 8:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(n,e){var r,a,o;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(n),a={signal:e.signal,params:{api_key:s}},t.next=4,i.ZP.get(r,a);case 4:return o=t.sent,t.next=7,o.data;case 7:return t.abrupt("return",t.sent);case 8:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n,e){var r,a,o;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(n,"/credits?"),a={signal:e.signal,params:{api_key:s}},t.next=4,i.ZP.get(r,a);case 4:return o=t.sent,t.next=7,o.data;case 7:return t.abrupt("return",t.sent);case 8:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(n,e){var r,a,o;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(n,"/reviews"),a={signal:e.signal,params:{api_key:s}},t.next=4,i.ZP.get(r,a);case 4:return o=t.sent,t.next=7,o.data;case 7:return t.abrupt("return",t.sent);case 8:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}()},93:function(t,n,e){e.r(n),e.d(n,{default:function(){return y}});var r,a,c,i,s,o=e(861),u=e(885),p=e(687),f=e.n(p),h=e(791),l=e(470),d=e(295),m=e(168),v=e(842),x=v.Z.h2(r||(r=(0,m.Z)(["\n  margin-top: 30px;\n  color: grey;\n  text-transform: uppercase;\n  font-family: Roboto;\n  font-weight: 700;\n  font-size: 30px;\n  text-align: center;\n"]))),g=v.Z.ul(a||(a=(0,m.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 10px;\n"]))),w=v.Z.img(c||(c=(0,m.Z)(["\n  width: 200px;\n  height: 300px;\n"]))),Z=v.Z.h3(i||(i=(0,m.Z)(["\n  font-weight: 700;\n  font-size: 16px;\n  color: black;\n  text-align: center;\n  text-transform: uppercase;\n"]))),b=v.Z.p(s||(s=(0,m.Z)(["\n  font-weight: 500;\n  font-size: 16px;\n  color: grey;\n  text-align: center;\n"]))),k=e(184),y=function(){var t=(0,h.useState)(null),n=(0,u.Z)(t,2),e=n[0],r=n[1],a=(0,l.UO)().movieId;return(0,h.useEffect)((function(){var t=new AbortController,n=function(){var n=(0,o.Z)(f().mark((function n(){var e;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,d.QV)(a,t);case 3:e=n.sent,r(e.cast),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();return n(),function(){t.abort()}}),[a]),(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(x,{children:"ACTORS"}),e&&(0,k.jsx)(g,{children:e.map((function(t){var n=t.id,e=t.profile_path,r=t.original_name,a=t.character;return(0,k.jsxs)("li",{children:[e?(0,k.jsx)(w,{src:"".concat("https://image.tmdb.org/t/p/w500").concat(e),alt:r}):(0,k.jsx)(w,{src:"https://via.placeholder.com/250x200",alt:""}),(0,k.jsx)(Z,{children:r}),(0,k.jsx)(b,{children:a})]},n)}))})]})}}}]);
//# sourceMappingURL=93.3faee8a0.chunk.js.map