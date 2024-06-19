import{s as g,au as p,cP as S,aQ as E,cT as P,v as y,dd as _,t as R,G as q}from"./index-DbrLk5dB.js";import{o as I,r as b}from"./featureConversionUtils-WVyP8ieu.js";import{m as $}from"./FeatureStore-DkBDIt_0.js";import{x as j,j as Q}from"./timeSupport-2S_5NbEG.js";import{$ as N}from"./QueryEngine-BgAYmcFe.js";import{E as O,N as M}from"./geojson-CETEjSZ2.js";import{p as k}from"./sourceUtils-DX-XHNF4.js";import{o as L,e as U,K as f}from"./wfsUtils-CWWrt0vS.js";import"./OptimizedGeometry-CQuTPb9g.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./BoundsStore-BtF7QoTE.js";import"./PooledRBush-DJsdDAPj.js";import"./json-Wa8cmqdu.js";import"./WhereClause-CBCkADKz.js";import"./TimeOnly-DjEIKp90.js";import"./QueryEngineCapabilities-CTDe3LlQ.js";import"./utils-DtrcaWCI.js";import"./utils-DnOak2-R.js";import"./utils-QZDsUBur.js";import"./ClassBreaksDefinition-GN7SCYdR.js";import"./RenderState-DaVlEYWY.js";import"./date-M6n_RqpC.js";import"./xmlUtils-CtUoQO7q.js";const x="esri.layers.WFSLayer";class ct{constructor(){this._customParameters=null,this._queryEngine=null,this._supportsPagination=!0}destroy(){var t;(t=this._queryEngine)==null||t.destroy(),this._queryEngine=null}async load(t,e={}){const{getFeatureUrl:a,getFeatureOutputFormat:s,fields:n,geometryType:u,featureType:o,maxRecordCount:i,maxTotalRecordCount:c,maxPageCount:C,objectIdField:d,customParameters:F}=t,{spatialReference:l,getFeatureSpatialReference:m}=L(a,o,t.spatialReference);try{await j(m,l)}catch{throw new g("unsupported-projection","Projection not supported",{inSpatialReference:m,outSpatialReference:l})}p(e),this._customParameters=F,this._featureType=o,this._fieldsIndex=S.fromLayerJSON({fields:n,dateFieldsTimeReference:n.some(T=>T.type==="esriFieldTypeDate")?{timeZoneIANA:E}:null}),this._geometryType=u,this._getFeatureUrl=a,this._getFeatureOutputFormat=s,this._getFeatureSpatialReference=m,this._maxRecordCount=i,this._maxTotalRecordCount=c,this._maxPageCount=C,this._objectIdField=d,this._spatialReference=l;let h=await this._snapshotFeatures(e);if(h.errors.length>0&&(this._supportsPagination=!1,h=await this._snapshotFeatures(e),h.errors.length>0))throw h.errors[0];return this._queryEngine=new N({fieldsIndex:this._fieldsIndex,geometryType:u,hasM:!1,hasZ:!1,objectIdField:d,spatialReference:l,timeInfo:null,featureStore:new $({geometryType:u,hasM:!1,hasZ:!1})}),this._queryEngine.featureStore.addMany(h.features),{warnings:w(h),extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async applyEdits(){throw new g("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(t,e.signal)}async queryFeatureCount(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(t,e.signal)}async queryObjectIds(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(t,e.signal)}async queryExtent(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(t,e.signal)}async querySnapping(t,e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(t,e.signal)}async refresh(t){var e;return this._customParameters=t.customParameters,this._maxRecordCount=t.maxRecordCount,this._maxTotalRecordCount=t.maxTotalRecordCount,this._maxPageCount=t.maxPageCount,(e=this._snapshotTask)==null||e.abort(),this._snapshotTask=P(a=>this._snapshotFeatures({signal:a})),this._snapshotTask.promise.then(a=>{var s;this._queryEngine.featureStore.clear(),this._queryEngine.featureStore.addMany(a.features);for(const n of w(a))y.getLogger(x).warn(new _("wfs-layer:refresh-warning",n.message,n.details));(s=a.errors)!=null&&s.length&&y.getLogger(x).warn(new _("wfs-layer:refresh-error","Refresh completed with errors",{errors:a.errors}))},()=>{this._queryEngine.featureStore.clear()}),await this._waitSnapshotComplete(),{extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _snapshotFeatures(t){const e=t==null?void 0:t.signal,a=this._maxTotalRecordCount,s=this._maxPageCount,n=this._supportsPagination?await U(this._getFeatureUrl,this._featureType.typeName,{customParameters:this._customParameters,signal:e}):void 0;let u=[];const o=[];if(n==null)try{u=await this._singleQuery(e)}catch(i){R(i)||o.push(i)}else{const i=Math.min(n,a),c=Z(this,Math.max(1,Math.min(Math.ceil(i/this._maxRecordCount),s)),e);await Promise.allSettled(Array.from({length:10}).map(()=>v(c,u,o)))}return p(e),{features:u,totalRecordCount:n,maxTotalRecordCount:a,maxPageCount:s,errors:o}}async _singleQuery(t){const e=await f(this._getFeatureUrl,this._featureType.typeName,this._getFeatureSpatialReference,this._getFeatureOutputFormat,{customParameters:this._customParameters,signal:t});return this._processGeoJSON(e,{signal:t})}async _pageQuery(t,e){const a=t*this._maxRecordCount,s=await f(this._getFeatureUrl,this._featureType.typeName,this._getFeatureSpatialReference,this._getFeatureOutputFormat,{customParameters:this._customParameters,startIndex:a,count:this._maxRecordCount,signal:e});return this._processGeoJSON(s,{startIndex:a,signal:e})}_processGeoJSON(t,e){O(t,this._getFeatureSpatialReference.wkid);const{startIndex:a,signal:s}=e;p(s);const n=M(t,{geometryType:this._geometryType,hasZ:!1,objectIdField:this._objectIdField});if(!q(this._spatialReference,this._getFeatureSpatialReference))for(const o of n)o.geometry!=null&&(o.geometry=I(Q(b(o.geometry,this._geometryType,!1,!1),this._getFeatureSpatialReference,this._spatialReference)));let u=a??1;for(const o of n){const i={};k(this._fieldsIndex,i,o.attributes,!0),o.attributes=i,i[this._objectIdField]==null&&(o.objectId=i[this._objectIdField]=u++)}return n}}function*Z(r,t,e){for(let a=0;a<t;a++)yield r._pageQuery(a,e)}async function v(r,t,e){let a=r.next();for(;!a.done;){try{const s=await a.value;t.push(...s)}catch(s){R(s)||e.push(s)}a=r.next()}}function w(r){const t=[];return r.totalRecordCount!=null&&(r.features.length<r.totalRecordCount&&t.push({name:"wfs-layer:maxRecordCount-too-low",message:`Could only fetch ${r.features.length} of ${r.totalRecordCount} in ${r.maxPageCount} queries. Try increasing the value of WFSLayer.maxRecordCount.`,details:{recordCount:r.features.length,totalRecordCount:r.totalRecordCount}}),r.totalRecordCount>r.maxTotalRecordCount&&t.push({name:"wfs-layer:large-dataset",message:`The number of ${r.totalRecordCount} features exceeds the maximum allowed of ${r.maxTotalRecordCount}.`,details:{recordCount:r.features.length,totalRecordCount:r.totalRecordCount,maxTotalRecordCount:r.maxTotalRecordCount}})),t}export{ct as default};
