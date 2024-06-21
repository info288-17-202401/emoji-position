import{dR as j,dS as N,dT as P,dU as v,dV as x,dW as S,dX as b,dY as R,dZ as U,d_ as A,s as O,d$ as F,as as z,ay as J,e0 as K,az as V,e1 as Y}from"./index-B7QNv2P_.js";import{i as Z}from"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import{p as y}from"./resourceExtension-C_mrNL-R.js";function D(e){const o=(e==null?void 0:e.origins)??[void 0];return(t,n)=>{const s=C(e,t,n);for(const a of o){const i=j(t,a,n);for(const r in s)i[r]=s[r]}}}function C(e,o,t){if((e==null?void 0:e.type)==="resource")return H(e,o,t);switch((e==null?void 0:e.type)??"other"){case"other":return{read:!0,write:!0};case"url":{const{read:n,write:s}=Y;return{read:n,write:s}}}}function H(e,o,t){const n=N(o,t);return{type:String,read:(s,a,i)=>{const r=P(s,a,i);return n.type===String?r:typeof n.type=="function"?new n.type({url:r}):void 0},write:{writer(s,a,i,r){if(!(r!=null&&r.resources))return typeof s=="string"?void(a[i]=v(s,r)):void(a[i]=s.write({},r));const c=X(s),p=v(c,{...r,verifyItemRelativeUrls:r!=null&&r.verifyItemRelativeUrls?{writtenUrls:r.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},x.NO),l=n.type!==String&&(!Z(this)||(r==null?void 0:r.origin)&&this.originIdOf(t)>S(r.origin)),d={object:this,propertyName:t,value:s,targetUrl:p,dest:a,targetPropertyName:i,context:r,params:e};r!=null&&r.portalItem&&p&&!b(p)?l&&(e!=null&&e.contentAddressed)?g(d):l?T(d):W(d):r!=null&&r.portalItem&&(p==null||R(p)!=null||U(p)||l)?g(d):a[i]=p}}}}function g(e){var h;const{targetUrl:o,params:t,value:n,context:s,dest:a,targetPropertyName:i}=e;if(!s.portalItem)return;const r=A(o),c=I(n,o,s);if(t!=null&&t.contentAddressed&&c.type!=="json")return void((h=s.messages)==null?void 0:h.push(new O("persistable:contentAddressingUnsupported",`Property "${i}" is trying to serializing a resource with content of type ${c.type} with content addressing. Content addressing is only supported for json resources.`,{content:c})));const p=t!=null&&t.contentAddressed&&c.type==="json"?F(c.jsonString):(r==null?void 0:r.filename)??z(),l=J((t==null?void 0:t.prefix)??(r==null?void 0:r.prefix),p),d=`${l}.${y(c)}`;if(t!=null&&t.contentAddressed&&s.resources&&c.type==="json"){const m=s.resources.toKeep.find(({resource:f})=>f.path===d)??s.resources.toAdd.find(({resource:f})=>f.path===d);if(m)return void(a[i]=m.resource.itemRelativeUrl)}const u=s.portalItem.resourceFromPath(d);U(o)&&s.resources&&s.resources.pendingOperations.push(K(o).then(m=>{u.path=`${l}.${y({type:"blob",blob:m})}`,a[i]=u.itemRelativeUrl}).catch(()=>{}));const $=(t==null?void 0:t.compress)??!1;s.resources&&w({...e,resource:u,content:c,compress:$,updates:s.resources.toAdd}),a[i]=u.itemRelativeUrl}function T(e){const{context:o,targetUrl:t,params:n,value:s,dest:a,targetPropertyName:i}=e;if(!o.portalItem)return;const r=o.portalItem.resourceFromPath(t),c=I(s,t,o),p=y(c),l=V(r.path),d=(n==null?void 0:n.compress)??!1;p===l?(o.resources&&w({...e,resource:r,content:c,compress:d,updates:o.resources.toUpdate}),a[i]=t):g(e)}function W({context:e,targetUrl:o,dest:t,targetPropertyName:n}){e.portalItem&&e.resources&&(e.resources.toKeep.push({resource:e.portalItem.resourceFromPath(o),compress:!1}),t[n]=o)}function w({object:e,propertyName:o,updates:t,resource:n,content:s,compress:a}){const i=r=>{_(e,o,r)};t.push({resource:n,content:s,compress:a,finish:i})}function I(e,o,t){return typeof e=="string"?{type:"url",url:o}:{type:"json",jsonString:JSON.stringify(e.toJSON(t))}}function X(e){return e==null?null:typeof e=="string"?e:e.url}function _(e,o,t){typeof e[o]=="string"?e[o]=t.url:e[o].url=t.url}export{D as j};