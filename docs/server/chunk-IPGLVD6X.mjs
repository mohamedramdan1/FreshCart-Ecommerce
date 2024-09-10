import './polyfills.server.mjs';
import{a as R,b as _,c as D,d as k,f as j,g as G,h as M,i as $,k as B}from"./chunk-ATA55DUS.mjs";import{a as b}from"./chunk-HCOGX7OE.mjs";import{A as v,D as I,Da as N,Ea as S,Hb as w,La as s,Sa as x,Tb as A,Va as E,ba as a,ma as c,oa as F,sa as g,ub as L,w as T,wa as o,xa as i,ya as y,z as q}from"./chunk-H272EWA6.mjs";import"./chunk-VVCT4QZE.mjs";var H=(()=>{let n=class n{constructor(r){this._HttpClient=r}checkOut(r,p){return this._HttpClient.post(`${b.baseUrl}/api/v1/orders/checkout-session/${r}?url=${b.serverUrl}`,{shippingAddress:p})}};n.\u0275fac=function(p){return new(p||n)(q(w))},n.\u0275prov=T({token:n,factory:n.\u0275fac,providedIn:"root"});let e=n;return e})();var O=(e,n)=>({"is-valid":e,"is-invalid":n});function P(e,n){e&1&&(o(0,"p",12),s(1,"details Is Required "),i())}function U(e,n){e&1&&(o(0,"p",12),s(1,'Details Should be more than or equal 3 chars" '),i())}function z(e,n){if(e&1&&(o(0,"div",6),c(1,P,2,0,"p",12)(2,U,2,0),i()),e&2){let l,r=S();a(),g(1,(l=r.orderForm.get("details"))!=null&&l.getError("required")?1:(l=r.orderForm.get("details"))!=null&&l.getError("minlength")?2:-1)}}function J(e,n){e&1&&(o(0,"p",12),s(1,"Phone Is Required "),i())}function K(e,n){e&1&&(o(0,"p",12),s(1,"Accept Only Egypt Phone Numbers"),i())}function Q(e,n){if(e&1&&(o(0,"div",6),c(1,J,2,0,"p",12)(2,K,2,0),i()),e&2){let l,r=S();a(),g(1,(l=r.orderForm.get("phone"))!=null&&l.getError("required")?1:(l=r.orderForm.get("phone"))!=null&&l.getError("pattern")?2:-1)}}function W(e,n){e&1&&(o(0,"p",12),s(1,"city Is Required "),i())}function X(e,n){e&1&&(o(0,"p",12),s(1,'City Should be more than or equal 3 chars" '),i())}function Y(e,n){if(e&1&&(o(0,"div",6),c(1,W,2,0,"p",12)(2,X,2,0),i()),e&2){let l,r=S();a(),g(1,(l=r.orderForm.get("city"))!=null&&l.getError("required")?1:(l=r.orderForm.get("city"))!=null&&l.getError("minlength")?2:-1)}}function Z(e,n){e&1&&(o(0,"span"),y(1,"i",13),i())}var ue=(()=>{let n=class n{constructor(){this._FormBuilder=v($),this._ActivatedRoute=v(A),this._OrdersService=v(H),this.cartId="",this.isLoading=!1,this.orderForm=this._FormBuilder.group({details:[null,[_.required,_.minLength(3)]],phone:[null,[_.required,_.pattern(/^01[0125][0-9]{8}$/)]],city:[null,[_.required,_.minLength(3)]]})}orderpayment(){this.isLoading=!0,console.log(this.orderForm.value),this._OrdersService.checkOut(this.cartId,this.orderForm.value).subscribe({next:r=>{console.log(r),r.status=="success"&&(this.isLoading=!1,window.open(r.session.url,"_self"))},error:r=>{console.log(r),this.isLoading=!1}})}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:r=>{this.cartId=r.get("id")},error:r=>{console.log(r)}})}};n.\u0275fac=function(p){return new(p||n)},n.\u0275cmp=I({type:n,selectors:[["app-order"]],standalone:!0,features:[x],decls:22,vars:18,consts:[[1,"bg-main-light","shadow","p-2","rounded-4","w-75","mx-auto","my-2"],[1,"text-center","text-main"],[3,"ngSubmit","formGroup"],[1,"my-2"],["for","details"],["formControlName","details","type","text","id","details",1,"form-control",3,"ngClass"],[1,"alert","alert-danger","w-50"],["for","phone"],["formControlName","phone","type","tel","id","phone",1,"form-control",3,"ngClass"],["for","city"],["formControlName","city","type","text","id","city",1,"form-control",3,"ngClass"],["type","submit",1,"btn-main","my-2",3,"disabled"],[1,"m-0"],[1,"fas","fa-spin","fa-spinner"]],template:function(p,t){if(p&1&&(o(0,"section",0)(1,"h1",1),s(2,"ShippingAddress:"),i(),o(3,"form",2),N("ngSubmit",function(){return t.orderpayment()}),o(4,"div",3)(5,"label",4),s(6,"Details"),i(),y(7,"textarea",5),c(8,z,3,1,"div",6),i(),o(9,"div",3)(10,"label",7),s(11,"phone"),i(),y(12,"input",8),c(13,Q,3,1,"div",6),i(),o(14,"div",3)(15,"label",9),s(16,"city"),i(),y(17,"input",10),c(18,Y,3,1,"div",6),i(),o(19,"button",11),s(20,"Check Out "),c(21,Z,2,0,"span"),i()()()),p&2){let d,h,m,f,u,C;a(3),F("formGroup",t.orderForm),a(4),F("ngClass",E(9,O,!((d=t.orderForm.get("details"))!=null&&d.errors)&&(((d=t.orderForm.get("details"))==null?null:d.touched)||((d=t.orderForm.get("details"))==null?null:d.dirty)),((d=t.orderForm.get("details"))==null?null:d.errors)&&(((d=t.orderForm.get("details"))==null?null:d.touched)||((d=t.orderForm.get("details"))==null?null:d.dirty)))),a(),g(8,(h=t.orderForm.get("details"))!=null&&h.errors&&((h=t.orderForm.get("details"))!=null&&h.touched||(h=t.orderForm.get("details"))!=null&&h.dirty)?8:-1),a(4),F("ngClass",E(12,O,!((m=t.orderForm.get("phone"))!=null&&m.errors)&&(((m=t.orderForm.get("phone"))==null?null:m.touched)||((m=t.orderForm.get("phone"))==null?null:m.dirty)),((m=t.orderForm.get("phone"))==null?null:m.errors)&&(((m=t.orderForm.get("phone"))==null?null:m.touched)||((m=t.orderForm.get("phone"))==null?null:m.dirty)))),a(),g(13,(f=t.orderForm.get("phone"))!=null&&f.errors&&((f=t.orderForm.get("phone"))!=null&&f.touched||(f=t.orderForm.get("phone"))!=null&&f.dirty)?13:-1),a(4),F("ngClass",E(15,O,!((u=t.orderForm.get("city"))!=null&&u.errors)&&(((u=t.orderForm.get("city"))==null?null:u.touched)||((u=t.orderForm.get("city"))==null?null:u.dirty)),((u=t.orderForm.get("city"))==null?null:u.errors)&&(((u=t.orderForm.get("city"))==null?null:u.touched)||((u=t.orderForm.get("city"))==null?null:u.dirty)))),a(),g(18,(C=t.orderForm.get("city"))!=null&&C.errors&&((C=t.orderForm.get("city"))!=null&&C.touched||(C=t.orderForm.get("city"))!=null&&C.dirty)?18:-1),a(),F("disabled",t.orderForm.invalid||t.isLoading),a(2),g(21,t.isLoading?21:-1)}},dependencies:[B,j,R,D,k,G,M,L]});let e=n;return e})();export{ue as OrderComponent};