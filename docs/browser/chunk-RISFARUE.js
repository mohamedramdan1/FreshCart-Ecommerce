import{a as $}from"./chunk-2UIPOQHZ.js";import{l as j}from"./chunk-CZ4CVQ5N.js";import{a as A}from"./chunk-KZFKCVWI.js";import{a as V}from"./chunk-LUSIAVDM.js";import"./chunk-SZXLN6HP.js";import{Aa as h,D as p,F as w,Ha as c,Ja as d,M as _,N as u,Oa as y,Pa as E,Qa as F,Ua as g,Wa as T,X as L,Z as o,ia as f,jb as I,ka as v,oa as x,pa as b,qa as C,ra as S,sa as r,ta as s,ua as m,xa as k,xb as P,za as W}from"./chunk-DQIRLPDC.js";var B=(t,i)=>i.id,N=t=>["/details",t],D=()=>[1,2,3,4,5];function M(t,i){t&1&&(r(0,"span"),m(1,"i",14),s())}function O(t,i){t&1&&m(0,"i",11)}function z(t,i){if(t&1){let n=k();r(0,"div")(1,"div",3)(2,"span",4),W("click",function(){let e=_(n).$implicit,l=h(2);return u(l.removeProductWishlist(e.id))}),m(3,"i",5),s(),r(4,"div",6),m(5,"img",7),r(6,"h3",8),c(7),s(),r(8,"h4",9),c(9),g(10,"termtext"),s(),r(11,"div",10)(12,"span"),c(13),g(14,"currency"),s(),r(15,"div"),C(16,M,2,0,"span",null,b),f(18,O,1,0,"i",11),r(19,"span",12),c(20),s()()()(),r(21,"button",13),W("click",function(){let e=_(n).$implicit,l=h(2);return u(l.addToCart(e.id))}),c(22,"+Add To Cart"),s()()()}if(t&2){let n=i.$implicit;o(4),v("routerLink",F(14,N,n.id)),o(),v("src",n.imageCover,L)("alt",n.title),o(2),d(" ",n.category.name," "),o(2),d(" ",T(10,8,n.title,2)," "),o(4),d(" ",T(14,11,n.price,"EGP")," "),o(3),S(E(16,D).slice(0,n.ratingsAverage)),o(2),x(18,n.ratingsAverage%1!==0?18:-1),o(2),d(" ",n.ratingsAverage," ")}}function G(t,i){if(t&1&&(r(0,"section",0)(1,"h1",1),c(2,"Wish List:"),s(),r(3,"div",2),C(4,z,23,17,"div",null,B),s()()),t&2){let n=h();o(4),S(n.WishList)}}function R(t,i){t&1&&(r(0,"h1",15),c(1,"Your WhishList Is Empty......"),s())}var tt=(()=>{let i=class i{constructor(){this._WishlistService=p(A),this._CartsService=p(V),this._ToastrService=p(j),this.WishList=[]}ngOnInit(){this._WishlistService.getProductTowishList().subscribe({next:a=>{this.WishList=a.data,this._WishlistService.ToWishNumber.set(this.WishList.length)}})}removeProductWishlist(a){this._WishlistService.deleteSpecficTowishList(a).subscribe({next:e=>{e.status==="success"&&(this.WishList=this.WishList.filter(l=>e.data.includes(l._id)),this._WishlistService.ToWishNumber.set(this.WishList.length))}})}addToCart(a){this._CartsService.addProductCart(a).subscribe({next:e=>{console.log(e),this._ToastrService.success(e.message,"FreshCart",{positionClass:"toast-bottom-right"}),this._CartsService.cartNumber.set(e.numOfCartItems)}})}};i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=w({type:i,selectors:[["app-wishlist"]],standalone:!0,features:[y],decls:2,vars:1,consts:[[1,"m-2"],[1,"text-main"],[1,"row","justify-content-center","row-cols-1","row-cols-sm-2","row-cols-md-3","row-cols-lg-4","row-cols-xl-5","g-3"],[1,"product","p-2","position-relative"],[3,"click"],[1,"fas","fa-heart","p-2","heart",2,"color","red"],[3,"routerLink"],[1,"w-100",3,"src","alt"],[1,"small","text-main"],[1,"h6"],[1,"d-flex","justify-content-between","align-items-center"],[1,"fa-solid","fa-star-half-stroke","rating-color"],[1,"text-muted"],[1,"btn-main","w-100",3,"click"],[1,"fas","fa-star","rating-color"],[1,"text-center","text-danger"]],template:function(e,l){e&1&&f(0,G,6,0,"section",0)(1,R,2,0),e&2&&x(0,l.WishList.length?0:1)},dependencies:[P,I,$]});let t=i;return t})();export{tt as WishlistComponent};