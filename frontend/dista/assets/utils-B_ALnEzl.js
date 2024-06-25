const __vite__fileDeps=["assets/symbolLayerUtils-BhCB43X4.js","assets/index-Bg4CXF-w.js","assets/index-C3wkAohK.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{gz as k,a8 as a,gA as g,gB as S,gC as C,gD as M,dz as z,c8 as y,gE as m,gF as I,gG as L,_,gH as j}from"./index-Bg4CXF-w.js";function x(t){const o=[];return b(k(t),o),o.length?new a(g(o[0])):null}function b(t,o){var e;if(!t)return;let n;n=t.type==="CIMTextSymbol"?t.symbol:t;const l=t.type==="CIMPolygonSymbol";if(n!=null&&n.symbolLayers){for(const r of n.symbolLayers)if(!(r.colorLocked||l&&(S(r)||C(r)&&r.markerPlacement&&M(r.markerPlacement))))switch(r.type){case"CIMPictureMarker":case"CIMPictureStroke":case"CIMPictureFill":r.tintColor&&p(o,r.tintColor);break;case"CIMVectorMarker":(e=r.markerGraphics)==null||e.forEach(c=>{b(c.symbol,o)});break;case"CIMSolidStroke":case"CIMSolidFill":p(o,r.color);break;case"CIMHatchFill":b(r.lineSymbol,o)}}}function p(t,o){for(const n of t)if(n.join(".")===o.join("."))return;t.push(o)}new z(1e3);new a([128,128,128]);const E=new a("white");function B(t,o){if(!t)return null;let n=null;return y(t)?n=P(t):m(t)&&(n=t.type==="cim"?x(t):t.color?new a(t.color):null),n?h(n,o):null}function P(t){const o=t.symbolLayers;if(!o)return null;let n=null;return o.forEach(l=>{var e;l.type==="object"&&((e=l.resource)!=null&&e.href)||(n=l.type==="water"?l.color:l.material?l.material.color:null)}),n?new a(n):null}function h(t,o){if(o==null||t==null)return t;const n=t.toRgba();return n[3]=n[3]*o,new a(n)}function $(t,o,n){const l=t.symbolLayers;if(!l)return;const e=r=>h(o=o??r??(n!=null?E:null),n);l.forEach(r=>{var c,s;if(r.type!=="object"||!((c=r.resource)!=null&&c.href)||o)if(r.type==="water")r.color=e(r.color);else{const i=r.material!=null?r.material.color:null,u=e(i);r.material==null?r.material=new j({color:u}):r.material.color=u,n!=null&&"outline"in r&&((s=r.outline)==null?void 0:s.color)!=null&&(r.outline.color=h(r.outline.color,n))}})}function v(t,o,n){var l;(o=o??t.color)&&(t.color=h(o,n)),n!=null&&"outline"in t&&((l=t.outline)!=null&&l.color)&&(t.outline.color=h(t.outline.color,n))}function N(t,o,n){t&&(o||n!=null)&&(o&&(o=new a(o)),y(t)?$(t,o,n):m(t)&&v(t,o,n))}async function F(t,o){const n=t.symbolLayers;n&&await I(n,async l=>R(l,o))}async function R(t,o){switch(t.type){case"extrude":O(t,o);break;case"icon":case"line":case"text":D(t,o);break;case"path":G(t,o);break;case"object":await A(t,o)}}function D(t,o){const n=w(o);n!=null&&(t.size=n)}function w(t){for(const o of t)if(typeof o=="number")return o;return null}function O(t,o){t.size=typeof o[2]=="number"?o[2]:0}async function A(t,o){const{resourceSize:n,symbolSize:l}=await H(t),e=d(o,n,l);t.width=f(o[0],l[0],n[0],e),t.depth=f(o[1],l[1],n[1],e),t.height=f(o[2],l[2],n[2],e)}function G(t,o){const n=d(o,L,[t.width,void 0,t.height]);t.width=f(o[0],t.width,1,n),t.height=f(o[2],t.height,1,n)}function d(t,o,n){for(let l=0;l<3;l++){const e=t[l];switch(e){case"symbol-value":{const r=n[l];return r!=null?r/o[l]:1}case"proportional":break;default:if(e&&o[l])return e/o[l]}}return 1}async function H(t){const{computeObjectLayerResourceSize:o}=await _(()=>import("./symbolLayerUtils-BhCB43X4.js"),__vite__mapDeps([0,1,2])),n=await o(t,10),{width:l,height:e,depth:r}=t,c=[l,r,e];let s=1;for(let i=0;i<3;i++){const u=c[i];if(u!=null){s=u/n[i];break}}for(let i=0;i<3;i++)c[i]==null&&(c[i]=n[i]*s);return{resourceSize:n,symbolSize:c}}function f(t,o,n,l){switch(t){case"proportional":return n*l;case"symbol-value":return o??n;default:return t}}function T(t,o){const n=w(o);if(n!=null)switch(t.type){case"simple-marker":t.size=n;break;case"picture-marker":{const l=t.width/t.height;l>1?(t.width=n,t.height=n*l):(t.width=n*l,t.height=n);break}case"simple-line":t.width=n;break;case"text":t.font.size=n}}async function U(t,o){if(t&&o)return y(t)?F(t,o):void(m(t)&&T(t,o))}function q(t,o,n){if(t&&o!=null)if(y(t)){const l=t.symbolLayers;l&&l.forEach(e=>{if(e&&e.type==="object")switch(n){case"tilt":e.tilt=(e.tilt??0)+o;break;case"roll":e.roll=(e.roll??0)+o;break;default:e.heading=(e.heading??0)+o}})}else m(t)&&(t.type!=="simple-marker"&&t.type!=="picture-marker"&&t.type!=="text"||(t.angle+=o))}async function J(t,o){return await t.fetchSymbol(o)||t.fetchCIMSymbol(o)}export{q as D,J as N,U as R,N as g,B as h};