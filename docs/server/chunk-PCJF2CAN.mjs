import './polyfills.server.mjs';
import{a as U}from"./chunk-JKDJRG47.mjs";import{a as j}from"./chunk-TQ6W6CRF.mjs";import{a as G}from"./chunk-R4B6H4B5.mjs";import{a as R,b as q,c as J}from"./chunk-S4NOI5NZ.mjs";import{a as z}from"./chunk-LPNOIWUS.mjs";import{a as $}from"./chunk-F2CXJGOZ.mjs";import{a as K}from"./chunk-EUIEWTTP.mjs";import{a as Q}from"./chunk-FCMGOQKU.mjs";import"./chunk-GTSSCL6B.mjs";import{a as A,c as N,e as O,j as B}from"./chunk-ATA55DUS.mjs";import"./chunk-HCOGX7OE.mjs";import{$ as W,A as d,Ab as V,Ba as S,D as L,Da as T,Ea as p,K as h,L as f,La as c,Na as g,Oa as F,Pa as H,Qa as E,Sa as k,Ta as M,Ua as D,Xb as I,Ya as w,_a as y,ba as a,ma as _,oa as u,sa as v,ta as P,ua as C,va as x,wa as r,xa as s,ya as m}from"./chunk-H272EWA6.mjs";import"./chunk-VVCT4QZE.mjs";var X=(e,t)=>t._id,Y=(e,t)=>t.id,Z=e=>["/details",e],ee=()=>[1,2,3,4,5];function te(e,t){e&1&&m(0,"img",13)}function ie(e,t){e&1&&m(0,"img",14)}function ne(e,t){e&1&&m(0,"img",15)}function oe(e,t){e&1&&m(0,"img",16)}function re(e,t){e&1&&m(0,"img",17)}function ae(e,t){e&1&&m(0,"img",18)}function se(e,t){if(e&1&&(r(0,"div"),m(1,"img",19),r(2,"h3",20),c(3),s()()),e&2){let o=p().$implicit;a(),u("src",o.image,W)("alt",o.name),a(2),g(" ",o.name," ")}}function le(e,t){e&1&&_(0,se,4,3,"ng-template",3)}function me(e,t){if(e&1){let o=S();r(0,"span",30),T("click",function(){h(o);let n=p().$implicit,l=p();return f(l.addToWishlist(n.id))}),m(1,"i",31),s()}}function ce(e,t){if(e&1){let o=S();r(0,"span",30),T("click",function(){h(o);let n=p().$implicit,l=p();return f(l.removeProductWishlist(n.id))}),m(1,"i",32),s()}}function pe(e,t){e&1&&(r(0,"span"),m(1,"i",33),s())}function de(e,t){e&1&&m(0,"i",27)}function ue(e,t){if(e&1){let o=S();r(0,"div")(1,"div",21),_(2,me,2,0,"span")(3,ce,2,0,"span"),r(4,"div",22),m(5,"img",23),r(6,"h3",24),c(7),s(),r(8,"h4",25),c(9),w(10,"termtext"),s(),r(11,"div",26)(12,"span"),c(13),w(14,"currency"),s(),r(15,"div"),C(16,pe,2,0,"span",null,P),_(18,de,1,0,"i",27),r(19,"span",28),c(20),s()()()(),r(21,"button",29),T("click",function(){let n=h(o).$implicit,l=p();return f(l.addToCart(n.id))}),c(22,"Add To Cart"),s()()()}if(e&2){let o=t.$implicit,i=p();a(2),v(2,i.WishList.includes(o.id)?-1:2),a(),v(3,i.WishList.includes(o.id)?3:-1),a(),u("routerLink",D(16,Z,o.id)),a(),u("src",o.imageCover,W)("alt",o.title),a(2),g(" ",o.category.name," "),a(2),g(" ",y(10,10,o.title,2)," "),a(4),g(" ",y(14,13,o.price,"EGP")," "),a(3),x(M(18,ee).slice(0,o.ratingsAverage)),a(2),v(18,o.ratingsAverage%1!==0?18:-1),a(2),g(" ",o.ratingsAverage," ")}}var De=(()=>{let t=class t{constructor(){this._ProductsService=d(z),this._CategoriesService=d(G),this._CartsService=d($),this._WishlistService=d(j),this._ToastrService=d(Q),this.text="",this.productList=[],this.CategoriesList=[],this.WishList=[],this.customOptionsMain={loop:!0,mouseDrag:!0,touchDrag:!0,autoplay:!0,autoplayTimeout:2e3,autoplayHoverPause:!0,pullDrag:!1,dots:!1,navSpeed:700,navText:["",""],items:1,nav:!0},this.customOptionsCat={loop:!0,mouseDrag:!0,touchDrag:!0,autoplay:!0,autoplayTimeout:2e3,autoplayHoverPause:!0,pullDrag:!1,dots:!1,navSpeed:700,navText:["",""],responsive:{0:{items:1},400:{items:2},740:{items:3},940:{items:6}},nav:!0}}ngOnInit(){this._CategoriesService.getAllCategories().subscribe({next:i=>{this.CategoriesList=i.data}}),this._ProductsService.getAllProducts().subscribe({next:i=>{this.productList=i.data,console.log(i.data)}}),this._WishlistService.whishList.subscribe({next:i=>{i.length>0&&(this.WishList=i)}}),this._WishlistService.getProductTowishList().subscribe({next:i=>{let n=i.data.map(l=>l._id);this.WishList=n}})}addToCart(i){this._CartsService.addProductCart(i).subscribe({next:n=>{console.log(n),this._ToastrService.success(n.message,"FreshCart",{positionClass:"toast-bottom-right"}),this._CartsService.cartNumber.set(n.numOfCartItems)}})}addToWishlist(i){this._WishlistService.addProductTowishList(i).subscribe({next:n=>{console.log(n),this._ToastrService.success(n.message,"FreshCart",{positionClass:"toast-bottom-right"}),this.WishList=n.data,this._WishlistService.ToWishNumber.set(this.WishList.length)}})}removeProductWishlist(i){this._WishlistService.deleteSpecficTowishList(i).subscribe({next:n=>{this._ToastrService.success(n.message,"FreshCart",{positionClass:"toast-bottom-right"}),this.WishList=n.data,this._WishlistService.ToWishNumber.set(this.WishList.length)}})}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=L({type:t,selectors:[["app-home"]],standalone:!0,features:[k],decls:30,vars:6,consts:[[1,"row","g-0"],[1,"col-md-9"],[3,"options"],["carouselSlide",""],[1,"col-md-3","d-none","d-md-block"],["src","./assets/images/grocery-banner.png","height","200px","alt","grocery-banne",1,"w-100"],["src","./assets/images/grocery-banner-2.jpeg","height","200px","alt","grocery-banne2",1,"w-100"],[1,"my-2"],[1,"text-main"],[1,"mt-2"],[1,"d-flex","align-items-center"],["type","search","placeholder","search by Name...",1,"form-control","w-50","mx-auto","my-2",3,"ngModelChange","ngModel"],[1,"row","justify-content-center","row-cols-1","row-cols-sm-2","row-cols-md-3","row-cols-lg-4","row-cols-xl-5","g-3"],["src","./assets/images/img1.avif","height","400px","alt","img1",1,"w-100"],["src","./assets/images/img2.avif","height","400px","alt","img2",1,"w-100"],["src","./assets/images/img3.avif","height","400px","alt","img3",1,"w-100"],["src","./assets/images/img4.avif","height","400px","alt","img4",1,"w-100"],["src","./assets/images/img5.avif","height","400px","alt","img5",1,"w-100"],["src","./assets/images/img6.avif","height","400px","alt","img6",1,"w-100"],["height","250px",1,"w-100",3,"src","alt"],[1,"h5","pt-2","text-main"],[1,"product","p-2","position-relative"],[3,"routerLink"],[1,"w-100",3,"src","alt"],[1,"small","text-main"],[1,"h6"],[1,"d-flex","justify-content-between","align-items-center"],[1,"fa-solid","fa-star-half-stroke","rating-color"],[1,"text-muted"],[1,"btn-main","w-100",3,"click"],[3,"click"],[1,"fas","fa-heart","p-2","heart"],[1,"fas","fa-heart","p-2","heart",2,"color","red"],[1,"fas","fa-star","rating-color"]],template:function(n,l){n&1&&(r(0,"section")(1,"div",0)(2,"div",1)(3,"div")(4,"owl-carousel-o",2),_(5,te,1,0,"ng-template",3)(6,ie,1,0,"ng-template",3)(7,ne,1,0,"ng-template",3)(8,oe,1,0,"ng-template",3)(9,re,1,0,"ng-template",3)(10,ae,1,0,"ng-template",3),s()()(),r(11,"div",4)(12,"div"),m(13,"img",5)(14,"img",6),s()()()(),r(15,"section",7)(16,"h2",8),c(17,"Popular Categories:"),s(),r(18,"owl-carousel-o",2),C(19,le,1,0,null,3,X),s()(),r(21,"section",9)(22,"div",10)(23,"h2",8),c(24,"Popular product:"),s(),r(25,"input",11),E("ngModelChange",function(b){return H(l.text,b)||(l.text=b),b}),s()(),r(26,"div",12),C(27,ue,23,19,"div",null,Y),w(29,"search"),s()()),n&2&&(a(4),u("options",l.customOptionsMain),a(14),u("options",l.customOptionsCat),a(),x(l.CategoriesList),a(6),F("ngModel",l.text),a(2),x(y(29,3,l.productList.slice(0,12),l.text)))},dependencies:[J,q,R,B,A,N,O,I,V,K,U]});let e=t;return e})();export{De as HomeComponent};
