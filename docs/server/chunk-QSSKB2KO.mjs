import './polyfills.server.mjs';
import{a as L}from"./chunk-TQ6W6CRF.mjs";import{a as x}from"./chunk-F2CXJGOZ.mjs";import{a as h}from"./chunk-PUQE6DXQ.mjs";import{a as S}from"./chunk-DLNTFG3A.mjs";import"./chunk-HCOGX7OE.mjs";import{A as m,D as c,Da as f,La as a,Ma as d,Sa as v,Ub as b,Xb as k,Yb as g,ba as u,nb as p,wa as e,xa as t,ya as n}from"./chunk-H272EWA6.mjs";import"./chunk-VVCT4QZE.mjs";var C=(()=>{let i=class i{constructor(){this._AuthService=m(S),this._CartsService=m(x),this._WishlistService=m(L),this.countNumber=p(()=>this._CartsService.cartNumber()),this.countNumberTowish=p(()=>this._WishlistService.ToWishNumber())}ngOnInit(){this._CartsService.getProductCart().subscribe({next:o=>{this._CartsService.cartNumber.set(o.numOfCartItems)}}),this._WishlistService.getProductTowishList().subscribe({next:o=>{this._WishlistService.ToWishNumber.set(o.data.length)}})}};i.\u0275fac=function(r){return new(r||i)},i.\u0275cmp=c({type:i,selectors:[["app-nav-blank"]],standalone:!0,features:[v],decls:50,vars:2,consts:[[1,"navbar","navbar-expand-lg","bg-body-tertiary","fixed-top","bg-light"],[1,"container-fluid"],["routerLink","home",1,"navbar-brand"],["src","./assets/images/freshcart-logo.svg","alt","logo"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarNav","aria-controls","navbarNav","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarNav",1,"collapse","navbar-collapse"],[1,"navbar-nav"],[1,"nav-item"],["routerLinkActive","active-link","routerLink","home",1,"nav-link"],["routerLinkActive","active-link","routerLink","products",1,"nav-link"],["routerLinkActive","active-link","routerLink","categories",1,"nav-link"],["routerLinkActive","active-link","routerLink","brands",1,"nav-link"],["routerLinkActive","active-link","routerLink","allorders",1,"nav-link"],[1,"navbar-nav","ms-auto"],[1,"nav-item","pe-2"],["routerLinkActive","active-link","routerLink","wishlist",1,"nav-link","position-relative"],[1,"fas","fa-heart","fa-2xl"],[1,"badge","bg-info","position-absolute","top-0","start-0"],["routerLinkActive","active-link","routerLink","cart",1,"nav-link","position-relative"],[1,"fa-solid","fa-cart-shopping","fa-2xl"],[1,"d-flex","align-items-center","gap-sm-2","gap-lg-0"],[1,"nav-link"],[1,"fa-brands","fa-instagram","cr"],[1,"fa-brands","fa-facebook","cr"],[1,"fa-brands","fa-tiktok","cr"],[1,"fa-brands","fa-linkedin","cr"],[1,"nav-link","cr",3,"click"]],template:function(r,s){r&1&&(e(0,"nav",0)(1,"div",1)(2,"a",2),n(3,"img",3),t(),e(4,"button",4),n(5,"span",5),t(),e(6,"div",6)(7,"ul",7)(8,"li",8)(9,"a",9),a(10,"Home"),t()(),e(11,"li",8)(12,"a",10),a(13,"Products"),t()(),e(14,"li",8)(15,"a",11),a(16,"Categories"),t()(),e(17,"li",8)(18,"a",12),a(19,"Brands"),t()(),e(20,"li",8)(21,"a",13),a(22,"My Orders"),t()()(),e(23,"ul",14)(24,"li",15)(25,"a",16),n(26,"i",17),e(27,"span",18),a(28),t()()(),e(29,"li",8)(30,"a",19),n(31,"i",20),e(32,"span",18),a(33),t()()(),e(34,"div",21)(35,"li",8)(36,"a",22),n(37,"i",23),t()(),e(38,"li",8)(39,"a",22),n(40,"i",24),t()(),e(41,"li",8)(42,"a",22),n(43,"i",25),t()(),e(44,"li",8)(45,"a",22),n(46,"i",26),t()()(),e(47,"li",8)(48,"a",27),f("click",function(){return s._AuthService.logOut()}),a(49," SignOut "),t()()()()()()),r&2&&(u(28),d(s.countNumberTowish()),u(5),d(s.countNumber()))},dependencies:[k,g]});let l=i;return l})();var I=(()=>{let i=class i{};i.\u0275fac=function(r){return new(r||i)},i.\u0275cmp=c({type:i,selectors:[["app-blank-layout"]],standalone:!0,features:[v],decls:4,vars:0,consts:[[1,"container-fluid","mt-5","py-4"]],template:function(r,s){r&1&&(n(0,"app-nav-blank"),e(1,"div",0),n(2,"router-outlet"),t(),n(3,"app-footer"))},dependencies:[C,b,h],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;min-height:100vh}"]});let l=i;return l})();export{I as BlankLayoutComponent};