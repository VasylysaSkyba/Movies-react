(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[674],{398:function(){},674:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return h}});var r=n(861),a=n(439),u=n(757),c=n.n(u),s="HomePage_title__UFLA3",i=n(791),o=n(623),p=n(673),f=n(398),v=n.n(f),d=n(184),h=function(){var t=(0,i.useState)([]),e=(0,a.Z)(t,2),n=e[0],u=e[1],f=(0,i.useState)(null),h=(0,a.Z)(f,2),m=h[0],l=h[1],g=(0,i.useState)(!1),w=(0,a.Z)(g,2),x=w[0],_=w[1];return(0,i.useEffect)((function(){var t=function(){var t=(0,r.Z)(c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return _(!0),t.prev=1,t.next=4,(0,o.wr)();case 4:e=t.sent,n=e.results,u(n),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),l(t.t0.message);case 12:return t.prev=12,_(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,d.jsxs)("main",{children:[x&&(0,d.jsx)(p.Z,{}),(0,d.jsx)("h1",{className:s,children:"Tranding today"}),n&&(0,d.jsx)(v(),{movies:n}),m&&(0,d.jsx)("p",{children:"Something goes wrong"})]})}},623:function(t,e,n){"use strict";n.d(e,{PQ:function(){return f},Y5:function(){return p},wr:function(){return i},yA:function(){return s},z1:function(){return o}});var r=n(861),a=n(757),u=n.n(a),c=n(243).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"2a69168ab09e504b4afd9410c733dd67",language:"en-Us"}}),s="https://image.tmdb.org/t/p/w500",i=function(){var t=(0,r.Z)(u().mark((function t(){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/trending/movie/day");case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("search/movie",{params:{page:1,include_adult:!1,query:e}});case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("movie/".concat(e));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("movie/".concat(e,"/credits"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=674.e2449699.chunk.js.map