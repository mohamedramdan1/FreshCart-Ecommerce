import{a as w}from"./chunk-7DQVQM4W.js";import"./chunk-SZXLN6HP.js";import{D as d,F as l,Ha as f,Ja as v,Oa as C,Qa as h,X as m,Z as i,ka as s,qa as p,ra as g,sa as n,ta as c,ua as u,xb as x}from"./chunk-DQIRLPDC.js";var _=(t,e)=>e._id,S=t=>["/CategoriesDetails",t];function L(t,e){if(t&1&&(n(0,"div",2)(1,"div",3),u(2,"img",4),n(3,"div",5)(4,"h3",6),f(5),c()()()()),t&2){let r=e.$implicit;i(),s("routerLink",h(4,S,r._id)),i(),s("src",r.image,m)("alt",r.name),i(3),v(" ",r.name," ")}}var j=(()=>{let e=class e{constructor(){this._CategoriesService=d(w),this.CategoriesList=[]}ngOnInit(){this._CategoriesService.getAllCategories().subscribe({next:a=>{this.CategoriesList=a.data}})}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=l({type:e,selectors:[["app-categories"]],standalone:!0,features:[C],decls:4,vars:0,consts:[[1,"my-2"],[1,"row","row-cols-1","row-cols-sm-2","row-cols-md-3","row-cols-lg-4","row-cols-xl-5","g-4","justify-content-center"],[1,"col"],[1,"card","cr","product",3,"routerLink"],["height","300px",1,"w-100",3,"src","alt"],[1,"card-body"],[1,"h5","pt-2","text-center","text-main"]],template:function(o,y){o&1&&(n(0,"section",0)(1,"div",1),p(2,L,6,6,"div",2,_),c()()),o&2&&(i(2),g(y.CategoriesList))},dependencies:[x]});let t=e;return t})();export{j as CategoriesComponent};