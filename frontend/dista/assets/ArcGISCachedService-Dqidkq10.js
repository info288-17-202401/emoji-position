import{x as l,y as a,bt as m,f as x,c0 as y,z as S}from"./index-DbrLk5dB.js";import{e as I}from"./TileInfoTilemapCache-xn4fdPgL.js";import{T as O}from"./TilemapCache-jXycIjD3.js";const T=f=>{let t=class extends f{constructor(){super(...arguments),this.copyright=null,this.minScale=0,this.maxScale=0,this.spatialReference=null,this.tileInfo=null,this.tilemapCache=null}destroy(){var i,e;(e=(i=this.tilemapCache)==null?void 0:i.destroy)==null||e.call(i)}readMinScale(i,e){return e.minLOD!=null&&e.maxLOD!=null?i:0}readMaxScale(i,e){return e.minLOD!=null&&e.maxLOD!=null?i:0}get supportsBlankTile(){return this.version>=10.2}readTilemapCache(i,e,h){var u;const v=(u=e.capabilities)==null?void 0:u.includes("Tilemap");let{minLOD:n,maxLOD:o,minScale:p,maxScale:c}=e;if(n==null&&o==null&&p!==0&&c!==0){const r=s=>Math.round(1e4*s)/1e4;p=r(p||e.tileInfo.lods[0].scale),c=r(c||e.tileInfo.lods[e.tileInfo.lods.length-1].scale);for(const s of e.tileInfo.lods){const d=r(s.scale);n=d>=p?s.level:n,o=d>=c?s.level:o}}if(v)return new O({layer:this,minLOD:n,maxLOD:o});if(e.tileInfo){const r=new y;return r.read(e.tileInfo,h),new I(r,n,o)}return null}};return l([a({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),l([a()],t.prototype,"minScale",void 0),l([m("service","minScale")],t.prototype,"readMinScale",null),l([a()],t.prototype,"maxScale",void 0),l([m("service","maxScale")],t.prototype,"readMaxScale",null),l([a({type:x})],t.prototype,"spatialReference",void 0),l([a({readOnly:!0})],t.prototype,"supportsBlankTile",null),l([a({type:y})],t.prototype,"tileInfo",void 0),l([a()],t.prototype,"tilemapCache",void 0),l([m("service","tilemapCache",["capabilities","tileInfo"])],t.prototype,"readTilemapCache",null),l([a()],t.prototype,"version",void 0),t=l([S("esri.layers.mixins.ArcGISCachedService")],t),t};export{T as p};
