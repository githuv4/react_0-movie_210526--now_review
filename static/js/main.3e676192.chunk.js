(this.webpackJsonpreact_0_movie_210526=this.webpackJsonpreact_0_movie_210526||[]).push([[0],{43:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var s=n(2),a=n.n(s),c=n(13),r=n.n(c),i=n(4),o=n.n(i),l=n(14),m=n(15),d=n(16),j=n(19),u=n(18),v=n(17),h=n.n(v),g=(n(43),n(0));var b=function(e){var t=e.year,n=e.title,s=e.summary,a=e.poster,c=e.genres;return Object(g.jsxs)("div",{className:"movie",children:[Object(g.jsx)("img",{src:a,alt:n,title:n}),Object(g.jsxs)("div",{className:"content",children:[Object(g.jsx)("h4",{className:"movie__title",children:n}),Object(g.jsx)("h5",{className:"movie__year",children:t}),Object(g.jsx)("ul",{className:"movie__genres genres",children:c.map((function(e,t){return Object(g.jsx)("li",{className:"genres__genre",children:t==c.length-1?e:"".concat(e,"/")},t)}))}),Object(g.jsx)("p",{className:"movie__summary",children:s.length>150?"".concat(s.slice(0,250),"..."):s})]})]})},p=(n(45),function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(m.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,movies:[]},e.getMovies=Object(l.a)(o.a.mark((function t(){var n,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("https://yts-proxy.now.sh/list_movies.json");case 2:n=t.sent,s=n.data.data.movies,e.setState({movies:s,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){console.log("redered-componentDidmount"),this.getMovies()}},{key:"render",value:function(){console.log("redering");var e=this.state,t=e.isLoading,n=e.movies;return Object(g.jsx)("section",{className:"container",children:t?Object(g.jsx)("div",{className:"loader",children:Object(g.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(g.jsx)("div",{className:"movies",children:n.map((function(e){return Object(g.jsx)(b,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),n}(a.a.Component));r.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(p,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.3e676192.chunk.js.map