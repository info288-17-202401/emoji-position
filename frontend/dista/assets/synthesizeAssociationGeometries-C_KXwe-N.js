import{x as a,y as r,z as u,bv as y,aS as d,by as h,bx as x,a6 as l}from"./index-DbrLk5dB.js";import{d as G}from"./Association-Cz-S7ECZ.js";let n=class extends y{constructor(o){super(o),this.maxGeometryCountExceeded=!1,this.associations=[]}};a([r({type:Boolean,json:{write:!0}})],n.prototype,"maxGeometryCountExceeded",void 0),a([r({type:[G],json:{write:!0}})],n.prototype,"associations",void 0),n=a([u("esri.rest.networks.support.AssociationGeometriesResult")],n);const $=n;async function v(o,s,e){const t=d(o),i={...s.toJSON(),f:"json"},c=h({...t.query,...i});e?e.method="post":e={method:"post"};const p=x(c,e),m=`${t.path}/synthesizeAssociationGeometries`;return l(m,p).then(f=>S(f,s.outSpatialReference))}function S(o,s){const{data:e}=o,t=$.fromJSON(e);if(s)for(const i of t.associations)i.geometry.spatialReference=s.clone();return t}export{v as synthesizeAssociationGeometries};
