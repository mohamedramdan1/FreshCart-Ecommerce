import './polyfills.server.mjs';
import{a as y}from"./chunk-WJ3JY4E5.mjs";import"./chunk-HCOGX7OE.mjs";import{$ as m,A as d,D as l,La as v,Na as B,Sa as g,Ua as h,Xb as x,ba as i,oa as c,ua as p,va as u,wa as a,xa as s,ya as f}from"./chunk-H272EWA6.mjs";import"./chunk-VVCT4QZE.mjs";var w=(t,e)=>e._id,S=t=>["/BrandsDetails",t];function L(t,e){if(t&1&&(a(0,"div",2)(1,"div",3),f(2,"img",4),a(3,"div",5)(4,"h3",6),v(5),s()()()()),t&2){let n=e.$implicit;i(),c("routerLink",h(4,S,n._id)),i(),c("src",n.image,m)("alt",n.name),i(3),B(" ",n.name," ")}}var T=(()=>{let e=class e{constructor(){this._BrandsService=d(y),this.BrandList=[]}ngOnInit(){this._BrandsService.getAllBrands().subscribe({next:r=>{console.log(r),this.BrandList=r.data}})}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=l({type:e,selectors:[["app-brands"]],standalone:!0,features:[g],decls:4,vars:0,consts:[[1,"my-2"],[1,"row","row-cols-1","row-cols-sm-2","row-cols-md-3","row-cols-lg-4","row-cols-xl-5","g-4","justify-content-center"],[1,"col"],[1,"card","cr","product",3,"routerLink"],[3,"src","alt"],[1,"card-body"],[1,"h5","pt-2","text-center","text-main"]],template:function(o,_){o&1&&(a(0,"section",0)(1,"div",1),p(2,L,6,6,"div",2,w),s()()),o&2&&(i(2),u(_.BrandList))},dependencies:[x]});let t=e;return t})();export{T as BrandsComponent};