(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[674],{398:function(){},674:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var r=n(861),a=n(439),u=n(757),s=n.n(u),c="HomePage_title__UFLA3",i=n(791),o=n(623),p=n(673),f=n(398),v=n.n(f),d=n(184),h=function(){var e=(0,i.useState)([]),t=(0,a.Z)(e,2),n=t[0],u=t[1],f=(0,i.useState)(null),h=(0,a.Z)(f,2),l=h[0],m=h[1],g=(0,i.useState)(!1),w=(0,a.Z)(g,2),x=w[0],_=w[1];return(0,i.useEffect)((function(){var e=function(){var e=(0,r.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _(!0),e.prev=1,e.next=4,(0,o.wr)();case 4:t=e.sent,n=t.results,u(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),m(e.t0.message);case 12:return e.prev=12,_(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,d.jsxs)("main",{children:[x&&(0,d.jsx)(p.Z,{}),(0,d.jsx)("h1",{className:c,children:"Tranding today"}),n&&(0,d.jsx)(v(),{movies:n}),l&&(0,d.jsx)("p",{children:"Something goes wrong"})]})}},623:function(e,t,n){"use strict";n.d(t,{Y5:function(){return p},wr:function(){return i},yA:function(){return c},z1:function(){return o}});var r=n(861),a=n(757),u=n.n(a),s=n(243).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"2a69168ab09e504b4afd9410c733dd67",language:"en-Us"}}),c="https://image.tmdb.org/t/p/w500",i=function(){var e=(0,r.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/trending/movie/day");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("search/movie",{params:{page:1,include_adult:!1,query:t}});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("movie/".concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=674.7fe15c73.chunk.js.map