import{a as B,b as R,c as V}from"./chunk-KD27OJNI.js";import{a as M}from"./chunk-32YEKVGS.js";import{l as j}from"./chunk-CZ4CVQ5N.js";import{a as O}from"./chunk-LUSIAVDM.js";import"./chunk-SZXLN6HP.js";import{Aa as m,D as d,F as S,Ha as l,Ia as y,Ja as p,M as h,N as P,Oa as E,Pa as w,Ua as I,Wa as A,X as b,Z as a,ia as u,jb as F,ka as x,oa as f,pa as v,qa as C,ra as g,sa as r,ta as s,ua as _,ub as k,xa as D,za as T}from"./chunk-DQIRLPDC.js";var z=()=>[1,2,3,4,5];function G(t,n){if(t&1&&_(0,"img",12),t&2){let e=m().$implicit,o=m(2);x("src",e,b)("alt",o.detailsProduct.title)("title",o.detailsProduct.title)}}function N(t,n){t&1&&u(0,G,1,3,"ng-template",4)}function U(t,n){t&1&&(r(0,"span"),_(1,"i",13),s())}function $(t,n){t&1&&_(0,"i",10)}function q(t,n){if(t&1){let e=D();r(0,"section")(1,"h1",0),l(2," Details Products:"),s(),r(3,"div",1)(4,"div",2)(5,"owl-carousel-o",3),C(6,N,1,0,null,4,v),s()(),r(8,"div",5)(9,"h3",6),l(10),s(),r(11,"p",7),l(12),s(),r(13,"h3",8),l(14),s(),r(15,"div",9)(16,"span"),l(17),I(18,"currency"),s(),r(19,"div"),C(20,U,2,0,"span",null,v),u(22,$,1,0,"i",10),r(23,"span",7),l(24),s()()(),r(25,"button",11),T("click",function(){h(e);let i=m();return P(i.addToCart(i.detailsProduct.id))}),l(26,"+Add To Cart"),s()()()()}if(t&2){let e=m();a(5),x("options",e.customOptionsDetails),a(),g(e.detailsProduct.images),a(4),y(e.detailsProduct.title),a(2),p(" ",e.detailsProduct.description," "),a(2),p(" ",e.detailsProduct.category.name," "),a(3),p(" ",A(18,7,e.detailsProduct.price,"EGP")," "),a(3),g(w(10,z).slice(0,e.detailsProduct.ratingsAverage)),a(2),f(22,e.detailsProduct.ratingsAverage%1!==0?22:-1),a(2),p(" ",e.detailsProduct.ratingsAverage," ")}}var et=(()=>{let n=class n{constructor(){this._ActivatedRoute=d(k),this._ProductsService=d(M),this._CartsService=d(O),this._ToastrService=d(j),this.detailsProduct=null,this.customOptionsDetails={loop:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!1,dots:!1,navSpeed:700,navText:["",""],items:1,nav:!0}}ngOnInit(){this.detaileSub=this._ActivatedRoute.paramMap.subscribe({next:o=>{let i=o.get("id");this._ProductsService.getSpeceficProducts(i).subscribe({next:c=>{this.detailsProduct=c.data},error:c=>{console.log(c)}})},error:o=>{console.log(o)}})}ngOnDestroy(){this.detaileSub?.unsubscribe()}addToCart(o){this._CartsService.addProductCart(o).subscribe({next:i=>{console.log(i),this._ToastrService.success(i.message,"FreshCart",{positionClass:"toast-bottom-right"}),this._CartsService.cartNumber.set(i.numOfCartItems)}})}};n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=S({type:n,selectors:[["app-details"]],standalone:!0,features:[E],decls:1,vars:1,consts:[[1,"text-center","text-main"],[1,"row","g-4","align-items-center"],[1,"col-md-3"],[3,"options"],["carouselSlide",""],[1,"col-md-9"],[1,"h2"],[1,"text-muted"],[1,"text-main","h6"],[1,"d-flex","justify-content-between","align-items-center"],[1,"fa-solid","fa-star-half-stroke","rating-color"],[1,"btn-main","w-100",3,"click"],[1,"w-100",3,"src","alt","title"],[1,"fas","fa-star","rating-color"]],template:function(i,c){i&1&&u(0,q,27,11,"section"),i&2&&f(0,c.detailsProduct?0:-1)},dependencies:[V,R,B,F]});let t=n;return t})();export{et as DetailsComponent};