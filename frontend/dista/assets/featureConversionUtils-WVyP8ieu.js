import{a9 as or,aa as er,ab as tr,ac as sr,s as x,v as ur,ad as lr,ae as cr,af as ir,ag as ar}from"./index-DbrLk5dB.js";import{e as T,t as P}from"./OptimizedGeometry-CQuTPb9g.js";import{e as fr}from"./OptimizedFeatureSet-Blu9Ckm7.js";function p(r,n){return r?n?4:3:n?3:2}const v=()=>ur.getLogger("esri.layers.graphics.featureConversionUtils"),D={esriGeometryPoint:0,esriGeometryPolyline:2,esriGeometryPolygon:3,esriGeometryMultipoint:0,esriGeometryEnvelope:0},hr=(r,n,o,e,s,t)=>{r[o]=s,r[o+1]=t},C=(r,n,o,e,s,t)=>{r[o]=s,r[o+1]=t,r[o+2]=n[e+2]},dr=(r,n,o,e,s,t)=>{r[o]=s,r[o+1]=t,r[o+2]=n[e+3]},mr=(r,n,o,e,s,t)=>{r[o]=s,r[o+1]=t,r[o+2]=n[e+2],r[o+3]=n[e+3]};function U(r,n,o,e){if(r){if(o)return n&&e?mr:C;if(n&&e)return dr}else if(n&&e)return C;return hr}function z({scale:r,translate:n},o){return Math.round((o-n[0])/r[0])}function E({scale:r,translate:n},o){return Math.round((n[1]-o)/r[1])}function q({scale:r,translate:n},o,e){return o*r[e]+n[e]}function Ur(r,n,o){return r?n?o?V(r):R(r):o?S(r):j(r):null}function j(r){const n=r.coords;return{x:n[0],y:n[1]}}function H(r,n){return r.coords[0]=n.x,r.coords[1]=n.y,r}function R(r){const n=r.coords;return{x:n[0],y:n[1],z:n[2]}}function gr(r,n){return r.coords[0]=n.x,r.coords[1]=n.y,r.coords[2]=n.z,r}function S(r){const n=r.coords;return{x:n[0],y:n[1],m:n[2]}}function yr(r,n){return r.coords[0]=n.x,r.coords[1]=n.y,r.coords[2]=n.m,r}function V(r){const n=r.coords;return{x:n[0],y:n[1],z:n[2],m:n[3]}}function pr(r,n){return r.coords[0]=n.x,r.coords[1]=n.y,r.coords[2]=n.z,r.coords[3]=n.m,r}function br(r,n,o,e){let s=j;o&&e?s=V:o?s=R:e&&(s=S);for(const t of n){const{geometry:u,attributes:l}=t,i=u!=null?s(u):null;r.push({attributes:l,geometry:i})}return r}function Y(r,n){return r&&n?pr:r?gr:n?yr:H}function wr(r,n,o,e,s){const t=Y(o,e);for(const{geometry:u,attributes:l}of n){const i=u!=null?t(new T,u):null;r.push(new P(i,l,null,s?l[s]:void 0))}return r}function Ir(r,n,o=Y(n.z!=null,n.m!=null)){return o(r,n)}function Mr(r,n,o,e){for(const{geometry:s,attributes:t}of n)r.push({attributes:t,geometry:s!=null?J(s,o,e):null});return r}function J(r,n,o){if(r==null)return null;const e=p(n,o),s=[];for(let t=0;t<r.coords.length;t+=e){const u=[];for(let l=0;l<e;l++)u.push(r.coords[t+l]);s.push(u)}return n?o?{points:s,hasZ:n,hasM:o}:{points:s,hasZ:n}:o?{points:s,hasM:o}:{points:s}}function Gr(r,n,o,e,s){const t=p(o,e);for(const{geometry:u,attributes:l}of n){const i=u!=null?K(new T,u,t):null;r.push(new P(i,l,null,s?l[s]:void 0))}return r}function K(r,n,o=p(n.hasZ,n.hasM)){r.lengths[0]=n.points.length;const e=r.coords;let s=0;for(const t of n.points)for(let u=0;u<o;u++)e[s++]=t[u];return r}function Nr(r,n,o,e){for(const{geometry:s,attributes:t}of n)r.push({attributes:t,geometry:s!=null?Q(s,o,e):null});return r}function Q(r,n,o){if(!r)return null;const e=p(n,o),{coords:s,lengths:t}=r,u=[];let l=0;for(const i of t){const c=[];for(let a=0;a<i;a++){const f=[];for(let h=0;h<e;h++)f.push(s[l++]);c.push(f)}u.push(c)}return n?o?{paths:u,hasZ:n,hasM:o}:{paths:u,hasZ:n}:o?{paths:u,hasM:o}:{paths:u}}function Tr(r,n,o,e,s){const t=p(o,e);for(const{geometry:u,attributes:l,centroid:i}of n){const c=u!=null?W(new T,u,t):null,a=i!=null?Ir(new T,i):null;r.push(new P(c,l,a,s?l[s]:void 0))}return r}function W(r,n,o=p(n.hasZ,n.hasM)){const{lengths:e,coords:s}=r;let t=0;for(const u of n.paths){for(const l of u)for(let i=0;i<o;i++)s[t++]=l[i];e.push(u.length)}return r}function Fr(r,n,o,e){for(const{geometry:s,attributes:t,centroid:u}of n){const l=s!=null?X(s,o,e):null;if(u!=null){const i=j(u);r.push({attributes:t,centroid:i,geometry:l})}else r.push({attributes:t,geometry:l})}return r}function X(r,n,o){if(!r)return null;const e=p(n,o),{coords:s,lengths:t}=r,u=[];let l=0;for(const i of t){const c=[];for(let a=0;a<i;a++){const f=[];for(let h=0;h<e;h++)f.push(s[l++]);c.push(f)}u.push(c)}return n?o?{rings:u,hasZ:n,hasM:o}:{rings:u,hasZ:n}:o?{rings:u,hasM:o}:{rings:u}}function Pr(r,n,o,e,s){for(const{geometry:t,centroid:u,attributes:l}of n){const i=t!=null?$(new T,t,o,e):null,c=s?l[s]:void 0;u!=null?r.push(new P(i,l,H(new T,u),c)):r.push(new P(i,l,null,c))}return r}function $(r,n,o=n.hasZ,e=n.hasM){return Zr(r,n.rings,o,e)}function Zr(r,n,o,e){const s=p(o,e),{lengths:t,coords:u}=r;let l=0;N(r);for(const i of n){for(const c of i)for(let a=0;a<s;a++)u[l++]=c[a];t.push(i.length)}return r}const F=[],Z=[];function Rr(r,n,o,e,s){F[0]=r;const[t]=rr(Z,F,n,o,e,s);return G(F),G(Z),t}function rr(r,n,o,e,s,t){if(G(r),!o){for(const u of n){const l=t?u.attributes[t]:void 0;r.push(new P(null,u.attributes,null,l))}return r}switch(o){case"esriGeometryPoint":return wr(r,n,e,s,t);case"esriGeometryMultipoint":return Gr(r,n,e,s,t);case"esriGeometryPolyline":return Tr(r,n,e,s,t);case"esriGeometryPolygon":return Pr(r,n,e,s,t);default:v().error("convertToFeatureSet:unknown-geometry",new x(`Unable to parse unknown geometry type '${o}'`)),G(r)}return r}function Sr(r,n,o,e){Z[0]=r,nr(F,Z,n,o,e);const s=F[0];return G(F),G(Z),s}function Vr(r,n,o){if(r==null)return null;const e=new T;return"hasZ"in r&&n==null&&(n=r.hasZ),"hasM"in r&&o==null&&(o=r.hasM),or(r)?Y(n??r.z!=null,o??r.m!=null)(e,r):er(r)?$(e,r,n,o):tr(r)?W(e,r,p(n,o)):sr(r)?K(e,r,p(n,o)):void v().error("convertFromGeometry:unknown-geometry",new x(`Unable to parse unknown geometry type '${r}'`))}function xr(r,n,o,e){const s=r&&("coords"in r?r:r.geometry);if(s==null)return null;switch(n){case"esriGeometryPoint":{let t=j;return o&&e?t=V:o?t=R:e&&(t=S),t(s)}case"esriGeometryMultipoint":return J(s,o,e);case"esriGeometryPolyline":return Q(s,o,e);case"esriGeometryPolygon":return X(s,o,e);default:return v().error("convertToGeometry:unknown-geometry",new x(`Unable to parse unknown geometry type '${n}'`)),null}}function vr(r,n){for(const o of n)r.push({attributes:o.attributes});return r}function nr(r,n,o,e,s){if(G(r),o==null)return vr(r,n);switch(o){case"esriGeometryPoint":return br(r,n,e,s);case"esriGeometryMultipoint":return Mr(r,n,e,s);case"esriGeometryPolyline":return Nr(r,n,e,s);case"esriGeometryPolygon":return Fr(r,n,e,s);default:v().error("convertToFeatureSet:unknown-geometry",new x(`Unable to parse unknown geometry type '${o}'`))}return r}function Yr(r){const{objectIdFieldName:n,spatialReference:o,transform:e,fields:s,hasM:t,hasZ:u,features:l,geometryType:i,exceededTransferLimit:c,uniqueIdField:a,queryGeometry:f,queryGeometryType:h}=r,d={features:nr([],l,i,u,t),fields:s,geometryType:i,objectIdFieldName:n,spatialReference:o,uniqueIdField:a,queryGeometry:xr(f,h,!1,!1)};return e&&(d.transform=e),c&&(d.exceededTransferLimit=c),t&&(d.hasM=t),u&&(d.hasZ=u),d}function _r(r,n){const o=new fr,{hasM:e,hasZ:s,features:t,objectIdFieldName:u,spatialReference:l,geometryType:i,exceededTransferLimit:c,transform:a,fields:f}=r;return f&&(o.fields=f),o.geometryType=i??null,o.objectIdFieldName=u??n??null,o.spatialReference=l??null,o.objectIdFieldName?(t&&rr(o.features,t,i,s,e,o.objectIdFieldName),c&&(o.exceededTransferLimit=c),e&&(o.hasM=e),s&&(o.hasZ=s),a&&(o.transform=a),o):(v().error(new x("optimized-features:invalid-objectIdFieldName","objectIdFieldName is missing")),o)}function Ar(r){const{transform:n,features:o,hasM:e,hasZ:s}=r;if(!n)return r;for(const t of o)t.geometry!=null&&B(t.geometry,t.geometry,e,s,n),t.centroid!=null&&B(t.centroid,t.centroid,e,s,n);return r.transform=null,r}function Cr(r,n){const{geometryType:o,features:e,hasM:s,hasZ:t}=n;if(!r)return n;for(let u=0;u<e.length;u++){const l=e[u],i=l.weakClone();i.geometry=new T,O(i.geometry,l.geometry,s,t,o,r),l.centroid&&(i.centroid=new T,O(i.centroid,l.centroid,s,t,"esriGeometryPoint",r)),e[u]=i}return n.transform=r,n}function O(r,n,o,e,s,t,u=o,l=e){if(N(r),!(n!=null&&n.coords.length))return null;const i=D[s],{coords:c,lengths:a}=n,f=p(o,e),h=p(o&&u,e&&l),d=U(o,e,u,l);if(!a.length)return d(r.coords,c,0,0,z(t,c[0]),E(t,c[1])),N(r,f,0),r;let m,y,w,I,b=0,g=0,M=g;for(const _ of a){if(_<i)continue;let k=0;g=M,w=m=z(t,c[b]),I=y=E(t,c[b+1]),d(r.coords,c,g,b,w,I),k++,b+=f,g+=h;for(let A=1;A<_;A++,b+=f)w=z(t,c[b]),I=E(t,c[b+1]),w===m&&I===y||(d(r.coords,c,g,b,w-m,I-y),g+=h,k++,m=w,y=I);k>=i&&(r.lengths.push(k),M=g)}return G(r.coords,M),r.coords.length?r:null}function Or(r,n,o,e,s,t,u=o,l=e){if(N(r),!(n!=null&&n.coords.length))return null;const i=D[s],{coords:c,lengths:a}=n,f=p(o,e),h=p(o&&u,e&&l),d=U(o,e,u,l);if(!a.length)return d(r.coords,c,0,0,c[0],c[1]),N(r,f,0),r;let m=0;const y=t*t;for(const w of a){if(w<i){m+=w*f;continue}const I=r.coords.length/h,b=m,g=m+(w-1)*f;d(r.coords,c,r.coords.length,b,c[b],c[b+1]),L(r.coords,c,f,y,d,b,g),d(r.coords,c,r.coords.length,g,c[g],c[g+1]);const M=r.coords.length/h-I;M>=i?r.lengths.push(M):G(r.coords,I*h),m+=w*f}return r.coords.length?r:null}function kr(r,n,o,e){const s=r[n],t=r[n+1],u=r[o],l=r[o+1],i=r[e],c=r[e+1];let a=u,f=l,h=i-a,d=c-f;if(h!==0||d!==0){const m=((s-a)*h+(t-f)*d)/(h*h+d*d);m>1?(a=i,f=c):m>0&&(a+=h*m,f+=d*m)}return h=s-a,d=t-f,h*h+d*d}function L(r,n,o,e,s,t,u){let l,i=e,c=0;for(let a=t+o;a<u;a+=o)l=kr(n,a,t,u),l>i&&(c=a,i=l);i>e&&(c-t>o&&L(r,n,o,e,s,t,c),s(r,n,r.length,c,n[c],n[c+1]),u-c>o&&L(r,n,o,e,s,c,u))}function Br(r,n,o,e){var c;if(!((c=n==null?void 0:n.coords)!=null&&c.length))return null;const s=p(o,e);let t=Number.POSITIVE_INFINITY,u=Number.POSITIVE_INFINITY,l=Number.NEGATIVE_INFINITY,i=Number.NEGATIVE_INFINITY;if(n&&n.coords){const a=n.coords;for(let f=0;f<a.length;f+=s){const h=a[f],d=a[f+1];t=Math.min(t,h),l=Math.max(l,h),u=Math.min(u,d),i=Math.max(i,d)}}return lr(r)?cr(r,t,u,l,i):ir(t,u,l,i,r),r}function B(r,n,o,e,s){const{coords:t,lengths:u}=n,l=p(o,e);if(!t.length)return r!==n&&N(r),r;ar(s);const{originPosition:i,scale:c,translate:a}=s,f=zr;f.originPosition=i;const h=f.scale;h[0]=c[0]??1,h[1]=-(c[1]??1),h[2]=c[2]??1,h[3]=c[3]??1;const d=f.translate;if(d[0]=a[0]??0,d[1]=a[1]??0,d[2]=a[2]??0,d[3]=a[3]??0,!u.length){for(let y=0;y<l;++y)r.coords[y]=q(f,t[y],y);return r!==n&&N(r,l,0),r}let m=0;for(let y=0;y<u.length;y++){const w=u[y];r.lengths[y]=w;for(let g=0;g<l;++g)r.coords[m+g]=q(f,t[m+g],g);let I=r.coords[m],b=r.coords[m+1];m+=l;for(let g=1;g<w;g++,m+=l){I+=t[m]*h[0],b+=t[m+1]*h[1],r.coords[m]=I,r.coords[m+1]=b;for(let M=2;M<l;++M)r.coords[m+M]=q(f,t[m+M],M)}}return r!==n&&N(r,t.length,u.length),r}function Dr(r,n,o,e,s,t){if(N(r),r.lengths.push(...n.lengths),o===s&&e===t)for(let u=0;u<n.coords.length;u++)r.coords.push(n.coords[u]);else{const u=p(o,e),l=U(o,e,s,t),i=n.coords;for(let c=0;c<i.length;c+=u)l(r.coords,i,r.coords.length,c,i[c],i[c+1])}return r}function jr(r,n,o,e){let s=0,t=r[e*n],u=r[e*(n+1)];for(let l=1;l<o;l++){const i=t+r[e*(n+l)],c=u+r[e*(n+l)+1],a=(i-t)*(c+u);t=i,u=c,s+=a}return .5*s}function Hr(r,n){const{coords:o,lengths:e}=r;let s=0,t=0;for(let u=0;u<e.length;u++){const l=e[u];t+=jr(o,s,l,n),s+=l}return Math.abs(t)}function N(r,n=0,o=0){G(r.lengths,o),G(r.coords,n)}function G(r,n=0){r.length!==n&&(r.length=n)}const zr={originPosition:"lowerLeft",scale:[1,1,1,1],translate:[0,0,0,0]};export{Q as $,X as H,Dr as I,$ as K,Hr as N,Ir as O,Zr as Q,J as U,O as a,z as b,_r as c,rr as e,Cr as f,Br as g,Or as h,Ar as i,Yr as l,Sr as n,Vr as o,B as p,xr as r,Rr as t,E as w,Ur as x};
