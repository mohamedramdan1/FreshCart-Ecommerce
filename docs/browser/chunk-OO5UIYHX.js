import{a as b}from"./chunk-Q243TH57.js";import"./chunk-SZXLN6HP.js";import{Aa as x,D as s,F as m,Ha as l,Ja as B,Oa as g,X as p,Z as c,ia as u,ka as f,oa as v,sa as n,ta as a,ua as h,ub as S}from"./chunk-DQIRLPDC.js";function _(e,t){if(e&1&&(n(0,"section",0)(1,"h1",1),l(2,"Detils Brands"),a(),n(3,"div",2)(4,"div",3),h(5,"img",4),a(),n(6,"div",5)(7,"div")(8,"h3",6),l(9),a()()()()()),e&2){let r=x();c(5),f("src",r.detailBrand.image,p)("alt",r.detailBrand.name),c(4),B(" ",r.detailBrand.name," ")}}var E=(()=>{let t=class t{constructor(){this._ActivatedRoute=s(S),this._BrandsService=s(b),this.detailBrand=null}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:d=>{let i=d.get("id");this._BrandsService.getSpeceficBrands(i).subscribe({next:o=>{this.detailBrand=o.data}})}})}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=m({type:t,selectors:[["app-brands-details"]],standalone:!0,features:[g],decls:1,vars:1,consts:[[1,"mx-auto","w-75","bg-main-light","rounded","shadow","p-4"],[1,"text-main","text-center"],[1,"row","align-items-center","justify-content-center"],[1,"col-md-4"],[1,"w-100","rounded",3,"src","alt"],[1,"col-md-8"],[1,"h1"]],template:function(i,o){i&1&&u(0,_,10,3,"section",0),i&2&&v(0,o.detailBrand?0:-1)}});let e=t;return e})();export{E as BrandsDetailsComponent};