import{a as e}from"./chunk-SZXLN6HP.js";import{C as c,ga as o,mb as p,z as n}from"./chunk-DQIRLPDC.js";var f=(()=>{let r=class r{constructor(t){this._HttpClient=t,this.cartNumber=o(0)}addProductCart(t){return this._HttpClient.post(`${e.baseUrl}/api/v1/cart`,{productId:t})}getProductCart(){return this._HttpClient.get(`${e.baseUrl}/api/v1/cart`)}deleteSpecficCart(t){return this._HttpClient.delete(`${e.baseUrl}/api/v1/cart/${t}`)}updateCartQunatity(t,a){return this._HttpClient.put(`${e.baseUrl}/api/v1/cart/${t}`,{count:a})}clearCart(){return this._HttpClient.delete(`${e.baseUrl}/api/v1/cart`)}};r.\u0275fac=function(a){return new(a||r)(c(p))},r.\u0275prov=n({token:r,factory:r.\u0275fac,providedIn:"root"});let i=r;return i})();export{f as a};
