(this.webpackJsonpspa=this.webpackJsonpspa||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(8),r=c.n(n),i=c(6),l=c(2),o=Object(a.createContext)(),j=(c(14),c(0)),d=function(){var e=s.a.useContext(o).onReset;return Object(j.jsx)("div",{className:"reset-button",onClick:e,children:Object(j.jsx)("p",{children:"Reset"})})},u=(c(16),s.a.memo((function(){var e=s.a.useContext(o),t=e.sort,c=e.setSort,a=function(e){c(e.target.value)};return Object(j.jsxs)("div",{className:"sort",children:[Object(j.jsxs)("h4",{children:["SortBy: ",t]}),Object(j.jsxs)("ul",{className:"sort-box",children:[Object(j.jsxs)("div",{className:"sort-subbox",children:[Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{className:"sort-subbox__item",type:"radio",name:"sort",value:"category",onChange:a,defaultChecked:!0}),"category"]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{className:"sort-subbox__item",type:"radio",name:"sort",value:"date",onChange:a}),"date"]})]}),Object(j.jsxs)("div",{className:"sort-subbox",children:[Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{className:"sort-subbox__item",type:"radio",name:"sort",value:"name",onChange:a}),"name"]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{className:"sort-subbox__item",type:"radio",name:"sort",value:"filesize",onChange:a}),"filesize"]})]})]})]})}))),b=(c(17),s.a.memo((function(){var e=s.a.useContext(o),t=e.cardView,c=e.setCardView,a=function(e){c(e.target.value)};return Object(j.jsx)("div",{className:"view-control",children:Object(j.jsxs)("ul",{className:"view-control-box",children:[Object(j.jsxs)("h4",{children:["View: ",t]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{className:"view-control-box__item",type:"radio",name:"card",value:"card",onChange:a,defaultChecked:!0}),"Card"]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{className:"view-control-box__item",type:"radio",name:"card",value:"tree",onChange:a}),"Tree"]})]})})}))),m=(c(18),function(){var e=s.a.useContext(o).cardView;return Object(j.jsxs)("header",{className:"header",children:[Object(j.jsx)(b,{}),"card"===e?Object(j.jsxs)(s.a.Fragment,{children:[Object(j.jsx)(u,{}),Object(j.jsx)(d,{})]}):null]})}),h=(c(19),s.a.memo((function(){for(var e=s.a.useContext(o),t=e.cardsPerPage,c=e.totalCards,a=e.paginate,n=e.currentPage,r=[],i=1;i<=Math.ceil(c/t);i++)r.push(i);return Object(j.jsx)("nav",{children:Object(j.jsx)("ul",{className:"pager",children:r.map((function(e){return Object(j.jsx)("li",{className:"pager__item",children:Object(j.jsx)("a",{onClick:function(){return a(e)},className:n===e?"pager__link pager__link-active":"pager__link",href:"!#",children:e})},e)}))})})}))),O=(c(20),function(){return Object(j.jsx)("footer",{className:"footer",children:Object(j.jsx)(h,{})})}),x=c(4),f=(c(21),function(e){var t=s.a.useContext(o).removeItem,c=s.a.useRef();var a,n;return Object(j.jsxs)("div",{className:"main-card",ref:c,children:[Object(j.jsx)("img",{src:"http://contest.elecard.ru/frontend_data/".concat(e.image),alt:"pic1",className:"main-card__img"}),Object(j.jsxs)("div",{className:"main-card-description",children:[Object(j.jsxs)("span",{children:["Name: ",e.image.match(/(?<=\/).*/)]}),Object(j.jsxs)("p",{children:["Date: ",(n=e.timestamp,new Date(n).toLocaleDateString())]}),Object(j.jsxs)("p",{children:["Category: ",e.category]}),Object(j.jsxs)("p",{children:["Size: ",(a=e.filesize,Math.round(a/1024))," \u041a\u0411"]})]}),Object(j.jsx)("div",{className:"main-card-remove",onClick:function(){return t(e,c)},children:Object(j.jsx)("button",{className:"button--circle",children:Object(j.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(j.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#000"}),Object(j.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#000"})]})})})]})}),g=(c(22),c(23),function(){return Object(j.jsx)("div",{className:"loadingio-spinner-double-ring-qclwkbflt29",children:Object(j.jsxs)("div",{className:"ldio-bymgqkz2wxd",children:[Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{children:Object(j.jsx)("div",{})}),Object(j.jsx)("div",{children:Object(j.jsx)("div",{})})]})})});var p=function(e){var t=e.items,c=e.loading;return Object(j.jsx)("section",{className:"main",children:c?Object(j.jsx)(g,{}):t.map((function(e){return Object(j.jsx)(f,Object(x.a)({},e),e.filesize+e.category)}))})},v=c(9),N=c.n(v),C=(c(25),function(e){var t,c,a=e.image,s=e.category,n=e.filesize,r=e.timestamp;return Object(j.jsxs)("div",{className:"main-card-tree",children:[Object(j.jsx)("a",{className:"simpleLightBox",href:"http://contest.elecard.ru/frontend_data/".concat(a),children:Object(j.jsx)("img",{src:"http://contest.elecard.ru/frontend_data/".concat(a),alt:"pic1",className:"main-card__img-tree"})}),Object(j.jsxs)("div",{className:"main-card-description-tree",children:[Object(j.jsxs)("p",{children:["Date: ",(c=r,new Date(c).toLocaleDateString())]}),Object(j.jsxs)("p",{children:["Category: ",s]}),Object(j.jsxs)("p",{children:["Size: ",(t=n,Math.round(t/1024))," \u041a\u0411"]})]})]})}),_=(c(26),c(27),s.a.memo((function(){var e=s.a.useContext(o).cards,t=e.map((function(e){return e.category})),c=t.filter((function(e,c){return t.indexOf(e)===c}));console.log(c),s.a.useEffect((function(){new N.a(".simpleLightBox",{history:!1})}));return Object(j.jsx)("section",{className:"main",children:Object(j.jsx)("ul",{onClick:function(e){if("SPAN"===e.target.tagName){var t=e.target.parentNode.querySelector("ul");t&&(t.hidden=!t.hidden,t.hidden?(e.target.classList.add("hide"),e.target.classList.remove("show")):(e.target.classList.add("show"),e.target.classList.remove("hide")))}},className:"main-category",children:Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{className:"show",children:"Category"}),Object(j.jsx)("ul",{children:c.map((function(t){return Object(j.jsxs)("li",{className:"main-category__category",children:[Object(j.jsx)("span",{className:"main-category__category-item show",children:t}),Object(j.jsx)("ul",{className:"main-category__card",children:e.map((function(e,c){return e.category===t?Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{className:"main-category__card-item show",children:"Card".concat(c)}),Object(j.jsx)("ul",{children:Object(j.jsx)("li",{children:Object(j.jsx)(C,Object(x.a)(Object(x.a)({},e),{},{tree:"tree"}))})})]},"card".concat(c)):null}))})]},t)}))})]})})})}))),y=(c(28),function(){var e=localStorage.getItem("cards"),t=JSON.parse(e),c=Object(a.useState)([]),n=Object(l.a)(c,2),r=n[0],d=n[1];s.a.useEffect((function(){x(!0),null!==t?d(t):fetch("http://contest.elecard.ru/frontend_data/catalog.json").then((function(e){return e.json()})).then((function(e){d(e),localStorage.setItem("cardsCopy",JSON.stringify(e))})),x(!1)}),[]);var u=Object(a.useState)(!0),b=Object(l.a)(u,2),h=b[0],x=b[1],f=Object(a.useState)(1),g=Object(l.a)(f,2),v=g[0],N=g[1],C=Object(a.useState)(66),y=Object(l.a)(C,1)[0],w=Object(a.useState)("card"),S=Object(l.a)(w,2),L=S[0],k=S[1],z=Object(a.useState)("category"),V=Object(l.a)(z,2),I=V[0],J=V[1],P=v*y,D=P-y,B=r.slice(D,P),M=r.length;switch(I){case"date":var R=Object(i.a)(r).sort((function(e,t){return e.timestamp-t.timestamp}));B=R.slice(D,P);break;case"filesize":var q=Object(i.a)(r).sort((function(e,t){return e.filesize-t.filesize}));B=q.slice(D,P);break;case"name":var E=/(?<=\/).*-/,Z=Object(i.a)(r).sort((function(e,t){return e.image.match(E)>t.image.match(E)?1:-1}));B=Z.slice(D,P);break;case"category":var A=r.slice();B=A.slice(D,P);break;default:B=r.slice(D,P)}return Object(j.jsx)(o.Provider,{value:{cardsPerPage:y,totalCards:M,paginate:function(e){return N(e)},currentPage:v,cardView:L,setCardView:k,cards:r,loading:h,sort:I,setSort:J,removeItem:function(e,t){console.log(t.current),t.current.classList.add("fade-out");var c=r.filter((function(t){return t.filesize!==e.filesize}));d(c),localStorage.setItem("cards",JSON.stringify(c));var a=localStorage.getItem("cards");return B=JSON.parse(a).slice(D,P)},setLoading:x,onReset:function(){var e=localStorage.getItem("cardsCopy"),t=JSON.parse(e);d(t),localStorage.setItem("cards",JSON.stringify(t))}},children:Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(m,{}),"card"===L?Object(j.jsx)(p,{items:B,loading:h}):Object(j.jsx)(_,{}),"card"===L?Object(j.jsx)(O,{}):null]})})});c(29);r.a.render(Object(j.jsx)(y,{}),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.55576e0e.chunk.js.map