(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-81eb682a"],{"02c6":function(t,e,n){"use strict";var r=n("c7a1"),o=n.n(r);o.a},"1dde":function(t,e,n){var r=n("d039"),o=n("b622"),i=n("2d00"),a=o("species");t.exports=function(t){return i>=51||!r((function(){var e=[],n=e.constructor={};return n[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"65f0":function(t,e,n){var r=n("861d"),o=n("e8b5"),i=n("b622"),a=i("species");t.exports=function(t,e){var n;return o(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?r(n)&&(n=n[a],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},8418:function(t,e,n){"use strict";var r=n("c04e"),o=n("9bf2"),i=n("5c6c");t.exports=function(t,e,n){var a=r(e);a in t?o.f(t,a,i(0,n)):t[a]=n}},"91cb":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("table",{staticClass:"table table-striped"},[t._m(0),n("tbody",t._l(t.Loggs,(function(e){return n("tr",{key:e._id},[n("td",[t._v(t._s(e.date))]),n("td",[t._v(t._s(e.name))]),n("td",[t._v(t._s(e.type))]),n("td",[t._v(t._s(e.warm))]),n("td",[t._v(t._s(e.interv))]),n("td",[t._v(t._s(e.time))]),n("td",[t._v(t._s(e.notes))]),n("td",[n("router-link",{staticClass:"btn btn-success",attrs:{to:{name:"edit",params:{id:e._id}}}},[t._v("Uppdatera ")]),n("button",{staticClass:"btn btn-danger",on:{click:function(n){return n.preventDefault(),t.deleteLogg(e._id)}}},[t._v("Radera")])],1)])})),0)])])])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",{staticClass:"thead-dark"},[n("tr",[n("th",[t._v("Datum")]),n("th",[t._v("Häst")]),n("th",[t._v("Träningstyp")]),n("th",[t._v("Värmning")]),n("th",[t._v("Intervaller")]),n("th",[t._v("Tider")]),n("th",[t._v("Noteringar")])])])}],i=(n("c740"),n("a434"),n("bc3a")),a=n.n(i),c={data:function(){return{Loggs:[]}},created:function(){var t=this,e="http://localhost:4000/api";a.a.get(e).then((function(e){t.Loggs=e.data})).catch((function(t){console.log(t)}))},methods:{deleteLogg:function(t){var e=this,n="http://localhost:4000/api/delete-logg/".concat(t),r=this.Loggs.findIndex((function(e){return e._id===t}));window.confirm("Do you really want to delete?")&&a.a.delete(n).then((function(){e.Loggs.splice(r,1)})).catch((function(t){console.log(t)}))}}},s=c,u=(n("02c6"),n("2877")),f=Object(u["a"])(s,r,o,!1,null,null,null);e["default"]=f.exports},a434:function(t,e,n){"use strict";var r=n("23e7"),o=n("23cb"),i=n("a691"),a=n("50c4"),c=n("7b0b"),s=n("65f0"),u=n("8418"),f=n("1dde"),d=n("ae40"),l=f("splice"),v=d("splice",{ACCESSORS:!0,0:0,1:2}),h=Math.max,p=Math.min,g=9007199254740991,_="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!l||!v},{splice:function(t,e){var n,r,f,d,l,v,b=c(this),m=a(b.length),y=o(t,m),w=arguments.length;if(0===w?n=r=0:1===w?(n=0,r=m-y):(n=w-2,r=p(h(i(e),0),m-y)),m+n-r>g)throw TypeError(_);for(f=s(b,r),d=0;d<r;d++)l=y+d,l in b&&u(f,d,b[l]);if(f.length=r,n<r){for(d=y;d<m-r;d++)l=d+r,v=d+n,l in b?b[v]=b[l]:delete b[v];for(d=m;d>m-r+n;d--)delete b[d-1]}else if(n>r)for(d=m-r;d>y;d--)l=d+r-1,v=d+n-1,l in b?b[v]=b[l]:delete b[v];for(d=0;d<n;d++)b[d+y]=arguments[d+2];return b.length=m-r+n,f}})},ae40:function(t,e,n){var r=n("83ab"),o=n("d039"),i=n("5135"),a=Object.defineProperty,c={},s=function(t){throw t};t.exports=function(t,e){if(i(c,t))return c[t];e||(e={});var n=[][t],u=!!i(e,"ACCESSORS")&&e.ACCESSORS,f=i(e,0)?e[0]:s,d=i(e,1)?e[1]:void 0;return c[t]=!!n&&!o((function(){if(u&&!r)return!0;var t={length:-1};u?a(t,1,{enumerable:!0,get:s}):t[1]=1,n.call(t,f,d)}))}},b727:function(t,e,n){var r=n("0366"),o=n("44ad"),i=n("7b0b"),a=n("50c4"),c=n("65f0"),s=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,f=4==t,d=6==t,l=5==t||d;return function(v,h,p,g){for(var _,b,m=i(v),y=o(m),w=r(h,p,3),x=a(y.length),C=0,A=g||c,S=e?A(v,x):n?A(v,0):void 0;x>C;C++)if((l||C in y)&&(_=y[C],b=w(_,C,m),t))if(e)S[C]=b;else if(b)switch(t){case 3:return!0;case 5:return _;case 6:return C;case 2:s.call(S,_)}else if(f)return!1;return d?-1:u||f?f:S}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},c740:function(t,e,n){"use strict";var r=n("23e7"),o=n("b727").findIndex,i=n("44d2"),a=n("ae40"),c="findIndex",s=!0,u=a(c);c in[]&&Array(1)[c]((function(){s=!1})),r({target:"Array",proto:!0,forced:s||!u},{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i(c)},c7a1:function(t,e,n){},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}}}]);
//# sourceMappingURL=chunk-81eb682a.1c9903d8.js.map