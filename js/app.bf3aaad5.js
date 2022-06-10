(function(t){function e(e){for(var n,i,s=e[0],c=e[1],u=e[2],v=0,d=[];v<s.length;v++)i=s[v],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],n=!0,s=1;s<o.length;s++){var c=o[s];0!==a[c]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},a={app:0},r=[];function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;r.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";o("85ec")},"0b86":function(t,e,o){"use strict";o("2cfe")},"12ff":function(t,e,o){"use strict";o("d817")},"1a31":function(t,e,o){"use strict";o("d307")},"2cfe":function(t,e,o){},"354a":function(t,e,o){},"545d":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),a=o("8c4f"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("Loader"),o("Notification"),o("PosterBg",{attrs:{poster:t.posterBg}}),o("Header"),o("MoviesList",{attrs:{list:t.moviesList},on:{changePoster:t.onChangePoster}}),o("MoviesPagination",{attrs:{"current-page":t.currentPage,"per-page":t.moviesPerPage,total:t.moviesLength},on:{pageChanged:t.onPageChanged}})],1)},i=[],s=o("5530"),c=(o("a9e3"),o("2f62")),u=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("BContainer",[o("h3",{staticClass:"list-title"},[t._v(t._s(t.listTitle))]),o("BRow",[t.isExist?t._l(t.list,(function(e,n){return o("BCol",{key:n,attrs:{cols:"3"}},[o("MovieItem",{attrs:{movie:e},on:{removeItem:t.onRemoveItem,showModal:t.onShowMovieInfo},nativeOn:{mouseover:function(o){return t.onMouseOver(e.Poster)}}})],1)})):[o("div",[t._v("Empty list")])]],2),o("BModal",{attrs:{"body-class":"movie-modal-body",id:t.movieInfoModalID,size:"xl","hide-footer":"","hide-header":""}},[o("MovieInfoModalContent",{attrs:{movie:t.selectedMovie},on:{closeModal:t.onCloseModal}})],1)],1)},l=[],v=o("c7eb"),d=o("1da1"),m=(o("b64b"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"movie-item mb-3"},[o("div",{staticClass:"movie-item-poster",style:t.posterBg}),o("div",{staticClass:"movie-info-wrap d-flex flex-column justify-content-between"},[o("div",{staticClass:"movie-item-info"},[o("h3",{staticClass:"movie-title"},[t._v(t._s(t.movie.Title))]),o("span",{staticClass:"movie-year"},[t._v(t._s(t.movie.Year))])]),o("div",{staticClass:"movie-item-controls row no-gutters"},[o("div",{staticClass:"col pr-2"},[o("BButton",{attrs:{size:"md",block:"",variant:"outline-light"},on:{click:t.showInfoModalEvent}},[t._v("Info")])],1),o("div",{staticClass:"col pl-2"},[o("BButton",{attrs:{size:"md",block:"",variant:"outline-light"},on:{click:t.emitRemoveEvent}},[t._v("Remove")])],1)])])])}),f=[],h={name:"MovieItem",props:{movie:{type:Object,required:!0}},computed:{posterBg:function(){return{"background-image":"url(".concat(this.movie.Poster,")")}}},methods:{emitRemoveEvent:function(){this.$emit("removeItem",{id:this.movie.imdbID,title:this.movie.Title})},showInfoModalEvent:function(){this.$emit("showModal",this.movie.imdbID)}}},p=h,g=(o("6ece"),o("2877")),b=Object(g["a"])(p,m,f,!1,null,"423871b7",null),O=b.exports,_=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"movie-info-wrap"},[o("header",{staticClass:"movie-info-header"},[o("h6",{staticClass:"movie-header-title"},[t._v("Movie view")]),o("BIconX",{staticClass:"close-icon",on:{click:t.closeModal}})],1),o("div",{staticClass:"movie-info-content"},[o("BRow",[o("BCol",{attrs:{sm:"4"}},[o("div",{staticClass:"movie-poster-wrap"},[o("div",{staticClass:"movie-poster",style:t.posterStyle})])]),o("BCol",{attrs:{sm:"8"}},[o("h3",{staticClass:"movie-title"},[t._v(t._s(t.movie.Title))]),o("BFormRating",{staticClass:"movie-rating",attrs:{readonly:"","show-value":"",precision:"1",stars:"10","show-value-max":"","no-border":""},model:{value:t.movie.imdbRating,callback:function(e){t.$set(t.movie,"imdbRating",e)},expression:"movie.imdbRating"}}),o("p",{staticClass:"movie-description"},[t._v(t._s(t.movie.Plot))]),o("div",{staticClass:"mt-3 mb-4"},[o("BBadge",{staticClass:"mr-2",attrs:{variant:"success"}},[t._v(t._s(t.movie.Year))]),o("BBadge",{staticClass:"mr-2",attrs:{variant:"success"}},[t._v(t._s(t.movie.Runtime))]),o("BBadge",{staticClass:"mr-2",attrs:{variant:"success"}},[t._v(t._s(t.movie.Genre))]),o("BBadge",{staticClass:"mr-2",attrs:{variant:"success"}},[t._v(t._s(t.movie.Language))])],1),o("table",{staticClass:"table small"},[o("tbody",[o("tr",[o("th",[t._v("Production")]),o("td",[t._v(t._s(t.movie.Production))])]),o("tr",[o("th",[t._v("Country")]),o("td",[t._v(t._s(t.movie.Country))])]),o("tr",[o("th",[t._v("Director")]),o("td",[t._v(t._s(t.movie.Director))])]),o("tr",[o("th",[t._v("Writer")]),o("td",[t._v(t._s(t.movie.Writer))])]),o("tr",[o("th",[t._v("Actors")]),o("td",[t._v(t._s(t.movie.Actors))])]),o("tr",[o("th",[t._v("Awards")]),o("td",[t._v(t._s(t.movie.Awards))])])])])],1)],1)],1)])},M=[],P={name:"MovieInfoModalContent",props:{movie:{type:Object,required:!0}},data:function(){return{defaultPosterBg:"linear-gradient(45deg,rgb(0, 3, 38) 0%,rgb(82, 15, 117) 100%)"}},computed:{posterStyle:function(){return{"background-image":this.posterBg}},posterBg:function(){return this.movie?"url(".concat(this.movie.Poster,")"):this.defaultPosterBg}},methods:{closeModal:function(){this.$emit("closeModal")}}},C=P,w=(o("d965"),Object(g["a"])(C,_,M,!1,null,"cdb3f1be",null)),j=w.exports,y={name:"MoviesList",props:{list:{type:Object,default:function(){return{}}}},data:function(){return{movieInfoModalID:"movie-info",selectedMovieID:""}},components:{MovieItem:O,MovieInfoModalContent:j},computed:Object(s["a"])(Object(s["a"])({},Object(c["c"])("movies",["isSearch"])),{},{isExist:function(){return Boolean(Object.keys(this.list).length)},listTitle:function(){return this.isSearch?"Search result":"IMDB Top 250"},selectedMovie:function(){return this.selectedMovieID?this.list[this.selectedMovieID]:null}}),methods:Object(s["a"])(Object(s["a"])(Object(s["a"])({},Object(c["b"])("movies",["removeMovie"])),Object(c["b"])(["showNotify"])),{},{onMouseOver:function(t){this.$emit("changePoster",t)},onRemoveItem:function(t){var e=this;return Object(d["a"])(Object(v["a"])().mark((function o(){var n,a,r;return Object(v["a"])().wrap((function(o){while(1)switch(o.prev=o.next){case 0:return n=t.id,a=t.title,o.next=3,e.$bvModal.msgBoxConfirm("Are you sure delete ".concat(a,"?"));case 3:r=o.sent,r&&(e.removeMovie(n),e.showNotify({msg:"Movie deleted successful",variant:"success",title:"Success"}));case 5:case"end":return o.stop()}}),o)})))()},onShowMovieInfo:function(t){this.selectedMovieID=t,this.$bvModal.show(this.movieInfoModalID)},onCloseModal:function(){this.selectedMovieID=null,this.$bvModal.hide(this.movieInfoModalID)}})},I=y,S=(o("12ff"),o("b44f"),Object(g["a"])(I,u,l,!1,null,"33fc84a8",null)),E=S.exports,B=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"poster-page-bg",style:t.posterStyle})},x=[],L={name:"PosterBg",props:{poster:{type:String,default:""}},data:function(){return{defaultPosterBg:"linear-gradient(45deg,rgb(0, 3, 38) 0%,rgb(82, 15, 117) 100%)"}},computed:{posterStyle:function(){return{"background-image":this.posterBg}},posterBg:function(){return this.poster?"url(".concat(this.poster,")"):this.defaultPosterBg}}},R=L,T=(o("9ae1"),Object(g["a"])(R,B,x,!1,null,"3971620e",null)),k=T.exports,D=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"movies-pagination d-flex justify-content-center"},[o("BPagination",{attrs:{"per-page":t.perPage,"total-rows":t.total,"prev-text":"Prev","next-text":"Next"},model:{value:t.currentPageModel,callback:function(e){t.currentPageModel=e},expression:"currentPageModel"}})],1)},N=[],$={name:"MoviesPagination",props:{currentPage:{type:Number,default:1},total:{type:Number,default:1},perPage:{type:Number,default:1}},computed:{currentPageModel:{get:function(){return this.currentPage},set:function(t){this.$emit("pageChanged",t)}}}},A=$,G=(o("1a31"),Object(g["a"])(A,D,N,!1,null,"2b214b0d",null)),V=G.exports,H=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.isShowLoader?o("div",{staticClass:"loader-wrap"},[o("b-spinner",{attrs:{type:"grow",variant:"light",label:"Loading..."}})],1):t._e()},F=[],q={name:"Loader",computed:Object(s["a"])({},Object(c["c"])(["isShowLoader"]))},W=q,Y=(o("0b86"),Object(g["a"])(W,H,F,!1,null,"60061038",null)),U=Y.exports,z=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{staticClass:"header"},[o("BNavbar",{staticClass:"navbar",attrs:{type:"dark",variant:"dark"}},[o("BContainer",[o("BNavbarBrand",{attrs:{href:"#"}},[t._v("MovieDB")]),o("BNavForm",[o("BFormInput",{staticClass:"mr-sm-2 search-input",attrs:{placeholder:"Search",debounce:"500"},model:{value:t.searchValue,callback:function(e){t.searchValue=e},expression:"searchValue"}})],1)],1)],1)],1)},J=[],Q={name:"Header",data:function(){return{searchValue:""}},watch:{searchValue:"onSearchValueChanged"},methods:Object(s["a"])(Object(s["a"])({},Object(c["b"])("movies",["searchMovies","fetchMovies","toggleSearchState"])),{},{onSearchValueChanged:function(t){t?(this.searchMovies(t),this.toggleSearchState(!0)):(this.fetchMovies(),this.toggleSearchState(!1))}})},X=Q,K=(o("74ca"),Object(g["a"])(X,z,J,!1,null,"0e960a9b",null)),Z=K.exports,tt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div")},et=[],ot={name:"Notification",computed:Object(s["a"])({},Object(c["c"])(["messagePool"])),watch:{messagePool:"showNotification"},methods:{showNotification:function(t){var e=t.variant,o=t.msg,n=t.title;this.$bvToast.toast(o,{title:n,variant:e,solid:!0})}}},nt=ot,at=Object(g["a"])(nt,tt,et,!1,null,null,null),rt=at.exports,it={name:"app",components:{MoviesList:E,PosterBg:k,MoviesPagination:V,Loader:U,Header:Z,Notification:rt},data:function(){return{posterBg:""}},computed:Object(s["a"])({},Object(c["c"])("movies",["moviesList","currentPage","moviesPerPage","moviesLength"])),watch:{"$route.query":{handler:"onPageQueryChange",immediate:!0,deep:!0}},methods:Object(s["a"])(Object(s["a"])({},Object(c["b"])("movies",["changeCurrentPage"])),{},{onPageQueryChange:function(t){var e=t.page,o=void 0===e?1:e;this.changeCurrentPage(Number(o))},onChangePoster:function(t){this.posterBg=t},onPageChanged:function(t){this.$router.push({query:{page:t}})}})},st=it,ct=(o("034f"),Object(g["a"])(st,r,i,!1,null,null,null)),ut=ct.exports,lt=o("ade3"),vt=(o("d3b7"),o("fb6a"),o("a434"),o("d81d"),o("3ca3"),o("ddb0"),o("c740"),o("d9e2"),["tt1853728","tt0910970","tt0119698","tt0051201","tt0364569","tt1345836","tt0169547","tt0090605","tt0087843","tt2380307","tt0082096","tt0033467","tt0112573","tt0052357","tt0053125","tt0105236","tt0167260","tt0110912","tt0060196","tt0137523","tt0120737","tt0109830","tt0111161","tt0068646","tt0071562","tt0468569","tt0050083","tt0108052","tt0080684","tt1375666","tt0167261","tt0073486","tt0099685","tt0133093","tt0047478","tt0114369","tt0317248","tt0076759","tt0102926","tt0038650","tt0118799","tt4633694","tt0114814","tt0245429","tt0120815","tt0110413","tt0120689","tt0816692","tt0054215","tt0120586","tt0021749","tt0064116","tt0034583","tt0027977","tt0253474","tt1675434","tt0407887","tt0088763","tt0103064","tt2582802","tt0047396","tt0082971","tt0110357","tt0172495","tt0482571","tt0078788","tt0209144","tt0078748","tt0095765","tt0032553","tt0095327","tt0043014","tt0405094","tt0057012","tt4154756","tt0050825","tt0081505","tt0086190","tt5311514","tt0022100","tt0086879","tt5074352","tt0180093","tt0986264","tt0056172","tt1187043","tt0338013","tt0062622","tt0066921","tt0114709","tt0211915","tt0036775","tt0045152","tt0075314","tt0361748","tt0093058","tt0040522","tt0056592","tt0012349","tt0070735","tt0119217","tt0435761","tt2106476","tt0208092","tt0086250","tt0071853","tt0059578","tt0053604","tt0017136","tt0119488","tt1832382","tt0097576","tt0042876","tt1049413","tt0042192","tt0372784","tt0055630","tt0053291","tt0105695","tt0363163","tt0095016","tt0040897","tt0113277","tt8108198","tt0044741","tt1255953","tt0081398","tt0057115","tt0118849","tt0457430","tt0476735","tt0071315","tt0041959","tt0096283","tt0347149","tt0089881","tt0055031","tt1305806","tt0015864","tt0050212","tt0268978","tt1727824","tt0120735","tt0112641","tt0047296","tt5027774","tt0050976","tt2096673","tt0080678","tt0993846","tt3170832","tt0434409","tt0031679","tt1291584","tt0083658","tt0046912","tt0050986","tt0017925","tt0477348","tt0117951","tt0469494","tt0167404","tt0031381","tt0084787","tt0116282","tt1205489","tt0077416","tt0266543","tt0091251","tt0015324","tt0118715","tt1130884","tt0266697","tt0061512","tt0032976","tt0046438","tt0978762","tt2119532","tt2267998","tt0892769","tt0018455","tt3011894","tt0107290","tt0758758","tt0120382","tt0107207","tt2278388","tt0025316","tt0079470","tt0092005","tt0091763","tt0079944","tt0116231","tt0074958","tt0353969","tt0060827","tt0052618","tt0395169","tt2024544","tt0405159","tt0060107","tt0019254","tt0046268","tt0112471","tt1979320","tt1392190","tt0053198","tt1392214","tt1028532","tt1895587","tt3315342","tt0245712","tt0405508","tt0093779","tt0264464","tt0087544","tt1201607","tt0064115","tt0075148","tt0072684","tt0198781","tt0032551","tt0033870","tt0097165","tt0088247","tt0246578","tt0083987","tt0046911","tt0113247","tt0107048","tt0050783","tt0032138","tt0118694","tt0073195","tt1454029","tt4016934","tt2991224","tt4430212","tt0056443","tt0381681","tt0070510","tt0087884","tt0092067","tt1954470","tt0036868","tt0083922","tt2338151","tt2015381","tt0169102","tt0056801"]),dt=o("bc3a"),mt=o.n(dt);function ft(t){var e=t.params||{};return t.params=Object.assign(e,{apikey:"922a4745",plot:"full"}),t}function ht(t){return t.data}var pt=function(t){t.interceptors.request.use(ft),t.interceptors.response.use(ht)},gt=mt.a.create({baseURL:"https://www.omdbapi.com"});pt(gt);var bt,Ot=gt,_t={MOVIES:"MOVIES",CURRENT_PAGE:"CURRENT_PAGE",TOGGLE_LOADER:"TOGGLE_LOADER",REMOVE_MOVIE:"REMOVE_MOVIE",TOGGLE_SEARCH:"TOGGLE_SEARCH",SHOW_TOAST_NOTIFY:"SHOW_TOAST_NOTIFY"};function Mt(t){return t.reduce((function(t,e){return t[e.imdbID]=e,t}),{})}var Pt=_t.MOVIES,Ct=_t.CURRENT_PAGE,wt=_t.REMOVE_MOVIE,jt=_t.TOGGLE_SEARCH,yt={namespaced:!0,state:{top250IDs:vt,moviesPerPage:12,currentPage:1,movies:{},isSearch:!1},getters:{moviesList:function(t){var e=t.movies;return e},slicedIDs:function(t){var e=t.top250IDs;return function(t,o){return e.slice(t,o)}},currentPage:function(t){var e=t.currentPage;return e},moviesPerPage:function(t){var e=t.moviesPerPage;return e},moviesLength:function(t){var e=t.top250IDs;return Object.keys(e).length},isSearch:function(t){var e=t.isSearch;return e}},mutations:(bt={},Object(lt["a"])(bt,Pt,(function(t,e){t.movies=e})),Object(lt["a"])(bt,Ct,(function(t,e){t.currentPage=e})),Object(lt["a"])(bt,wt,(function(t,e){t.top250IDs.splice(e,1)})),Object(lt["a"])(bt,jt,(function(t,e){t.isSearch=e})),bt),actions:{fetchMovies:function(t){return Object(d["a"])(Object(v["a"])().mark((function e(){var o,n,a,r,i,s,c,u,l,d,m,f;return Object(v["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=t.getters,n=t.commit,a=t.dispatch,e.prev=1,a("toggleLoader",!0,{root:!0}),r=o.currentPage,i=o.moviesPerPage,s=o.slicedIDs,c=r*i-i,u=r*i,l=s(c,u),d=l.map((function(t){return Ot.get("/?i=".concat(t))})),e.next=10,Promise.all(d);case 10:m=e.sent,f=Mt(m),n(Pt,f),e.next=18;break;case 15:e.prev=15,e.t0=e["catch"](1),console.log(e.t0);case 18:return e.prev=18,a("toggleLoader",!1,{root:!0}),e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[1,15,18,21]])})))()},changeCurrentPage:function(t,e){var o=t.commit,n=t.dispatch;o(Ct,e),n("fetchMovies")},removeMovie:function(t,e){var o=t.commit,n=t.dispatch,a=t.state,r=a.top250IDs.findIndex((function(t){return t===e}));-1!==r&&(o(wt,r),n("fetchMovies"))},searchMovies:function(t,e){return Object(d["a"])(Object(v["a"])().mark((function o(){var n,a,r,i;return Object(v["a"])().wrap((function(o){while(1)switch(o.prev=o.next){case 0:return n=t.commit,a=t.dispatch,o.prev=1,a("toggleLoader",!0,{root:!0}),o.next=5,Ot.get("/?s=".concat(e));case 5:if(r=o.sent,!r.Error){o.next=8;break}throw Error(r.Error);case 8:i=Mt(r.Search),n(Pt,i),o.next=15;break;case 12:o.prev=12,o.t0=o["catch"](1),a("showNotify",{msg:o.t0.message,title:"Error",variant:"danger"},{root:!0});case 15:return o.prev=15,a("toggleLoader",!1,{root:!0}),o.finish(15);case 18:case"end":return o.stop()}}),o,null,[[1,12,15,18]])})))()},toggleSearchState:function(t,e){var o=t.commit;o(jt,e)}}},It=yt,St=_t.TOGGLE_LOADER,Et={state:{isShowLoader:!1},getters:{isShowLoader:function(t){var e=t.isShowLoader;return e}},mutations:Object(lt["a"])({},St,(function(t,e){t.isShowLoader=e})),actions:{toggleLoader:function(t,e){var o=t.commit;o(St,e)}}},Bt=Et,xt=_t.SHOW_TOAST_NOTIFY,Lt={state:{messagePool:[]},getters:{messagePool:function(t){var e=t.messagePool;return e[e.length-1]}},mutations:Object(lt["a"])({},xt,(function(t,e){t.messagePool.push(e)})),actions:{showNotify:function(t,e){var o=t.commit;o(xt,e)}}},Rt=Lt;n["default"].use(c["a"]);var Tt=new c["a"].Store({state:{},mutations:{},actions:{},modules:{movies:It,loader:Bt,notification:Rt}}),kt=Tt,Dt=o("5f5b"),Nt=o("b1e0");o("f9e3"),o("2dd8");n["default"].use(Dt["a"]),n["default"].use(Nt["a"]),n["default"].config.productionTip=!1,n["default"].use(a["a"]);var $t=new a["a"]({mode:"history",base:"/",routes:[{path:"/",component:ut}]});new n["default"]({router:$t,store:kt,render:function(t){return t(ut)}}).$mount("#app")},"5daa":function(t,e,o){},6400:function(t,e,o){},"6ece":function(t,e,o){"use strict";o("5daa")},"74ca":function(t,e,o){"use strict";o("545d")},"85ec":function(t,e,o){},"9ae1":function(t,e,o){"use strict";o("d022")},b44f:function(t,e,o){"use strict";o("354a")},d022:function(t,e,o){},d307:function(t,e,o){},d817:function(t,e,o){},d965:function(t,e,o){"use strict";o("6400")}});
//# sourceMappingURL=app.bf3aaad5.js.map