import{bm as y,dF as p,dG as d,dH as u,bn as h,dI as c,dp as m,bB as S,a6 as g,bZ as v,aw as f,x as o,y as s,bt as b,aE as C,dJ as G,dK as P,dL as w,z as x,dM as n,dN as _,dO as R,dP as k,dQ as F,bq as $}from"./index-DbrLk5dB.js";const j=["atom","xml"],E={base:n,key:"type",typeMap:{"simple-line":_},errorContext:"symbol"},M={base:n,key:"type",typeMap:{"picture-marker":R,"simple-marker":k},errorContext:"symbol"},L={base:n,key:"type",typeMap:{"simple-fill":F},errorContext:"symbol"};let t=class extends y(p(d(u(h(c($)))))){constructor(...e){super(...e),this.description=null,this.fullExtent=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.url=null,this.type="geo-rss"}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}readFeatureCollections(e,r){return r.featureCollection.layers.forEach(i=>{var a;const l=i.layerDefinition.drawingInfo.renderer.symbol;l&&l.type==="esriSFS"&&((a=l.outline)!=null&&a.style.includes("esriSFS"))&&(l.outline.style="esriSLSSolid")}),r.featureCollection.layers}get hasPoints(){return this._hasGeometry("esriGeometryPoint")}get hasPolylines(){return this._hasGeometry("esriGeometryPolyline")}get hasPolygons(){return this._hasGeometry("esriGeometryPolygon")}get title(){const e=this._get("title");return e&&this.originOf("title")!=="defaults"?e:this.url?m(this.url,j)||"GeoRSS":e||""}set title(e){this._set("title",e)}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).catch(S).then(()=>this._fetchService(r)).then(i=>{this.read(i,{origin:"service"})})),Promise.resolve(this)}async hasDataChanged(){const e=await this._fetchService();return this.read(e,{origin:"service",ignoreDefaults:!0}),!0}async _fetchService(e){const r=this.spatialReference,{data:i}=await g(f.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:v(r)?void 0:r.wkid??JSON.stringify(r)},signal:e});return i}_hasGeometry(e){var r;return((r=this.featureCollections)==null?void 0:r.some(i=>{var l,a;return((l=i.featureSet)==null?void 0:l.geometryType)===e&&((a=i.featureSet.features)==null?void 0:a.length)>0}))??!1}};o([s()],t.prototype,"description",void 0),o([s()],t.prototype,"featureCollections",void 0),o([b("service","featureCollections",["featureCollection.layers"])],t.prototype,"readFeatureCollections",null),o([s({type:C,json:{name:"lookAtExtent"}})],t.prototype,"fullExtent",void 0),o([s(G)],t.prototype,"id",void 0),o([s(P)],t.prototype,"legendEnabled",void 0),o([s({types:E,json:{write:!0}})],t.prototype,"lineSymbol",void 0),o([s({type:["show","hide"]})],t.prototype,"listMode",void 0),o([s({types:M,json:{write:!0}})],t.prototype,"pointSymbol",void 0),o([s({types:L,json:{write:!0}})],t.prototype,"polygonSymbol",void 0),o([s({type:["GeoRSS"]})],t.prototype,"operationalLayerType",void 0),o([s(w)],t.prototype,"url",void 0),o([s({json:{origins:{service:{read:{source:"name",reader:e=>e||void 0}}}}})],t.prototype,"title",null),o([s({readOnly:!0,json:{read:!1},value:"geo-rss"})],t.prototype,"type",void 0),t=o([x("esri.layers.GeoRSSLayer")],t);const T=t;export{T as default};
