(this.webpackJsonpreact_app_2020=this.webpackJsonpreact_app_2020||[]).push([[0],{19:function(e,a,t){e.exports=t(45)},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(12),c=t.n(s),i=t(2),m=t.n(i),l=t(13),o=t(14),u=t(15),v=t(18),p=t(17),_=t(16),d=t.n(_);t(42);var E=function(e){var a=e.year,t=e.genres,n=e.title,s=e.summary,c=e.poster;return r.a.createElement("div",{className:"movie"},r.a.createElement("img",{src:c,alt:n,title:n}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},n,r.a.createElement("span",{className:"movie__year"},a)),r.a.createElement("ul",{className:"movie__genres"},t.map((function(e,a){return r.a.createElement("li",{key:a,className:"genres__genre"},e)}))),r.a.createElement("div",{className:"movie__summary"},r.a.createElement("p",{className:"ell"},s.slice(0,100),"...")),r.a.createElement("div",{className:"movie__user"},r.a.createElement("h4",{className:"user__image"}," "),r.a.createElement("span",{className:"user__name"},"Uploaded by User__Name"))))},g=(t(43),t(44),function(e){Object(v.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovie=Object(l.a)(m.a.mark((function a(){var t,n;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,d.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:t=a.sent,n=t.data.data.movies,console.log(n),e.setState({movies:n,isLoading:!1});case 6:case"end":return a.stop()}}),a)}))),e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getMovie()}},{key:"render",value:function(){var e=this.state,a=e.isLoading,t=e.movies;return r.a.createElement("section",{className:"container"},a?r.a.createElement("div",{className:"loading__spinner"}):r.a.createElement("div",{className:"wrapper"},r.a.createElement("h1",{className:"title"},"React Movies"),r.a.createElement("div",{className:"movies"},t.map((function(e){return r.a.createElement(E,{key:e.id,id:e.id,year:e.year,genres:e.genres,title:e.title,summary:e.summary,poster:e.medium_cover_image})})))))}}]),t}(r.a.Component));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.9d03ddd4.chunk.js.map