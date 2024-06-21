import{x as r,y as o,bg as g,z as m,k as l,t as d,v as u,C as c}from"./index-B7QNv2P_.js";import{a as y}from"./BitmapContainer-lpWKuAUQ.js";import{m as f,u as x}from"./LayerView-DY2RU1-w.js";import{$ as w}from"./GraphicsView2D-DmlTsPhf.js";import{h as v}from"./HighlightGraphicContainer-B-2A-yKs.js";import{v as _}from"./ExportStrategy-BXy8R-VG.js";import{m as H}from"./ExportImageParameters-1NTDXjm6.js";import{i as I}from"./RefreshableLayerView-CzeezKEc.js";import{U,r as V}from"./drapedUtils-J1XucXDQ.js";import"./WGLContainer-p1sqiFHw.js";import"./definitions-C14Q9bsB.js";import"./LabelMetric-BkU_pFC9.js";import"./enums-CYMvjYBC.js";import"./enums-BRqP_wXA.js";import"./Texture-DgSfWjih.js";import"./Program-C7abV0em.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./ProgramTemplate-DrVBkiDk.js";import"./Container-CiLLbMfu.js";import"./highlightReasons-B5hDpyZP.js";import"./StyleDefinition-pu9RBNlY.js";import"./config-MDUrh2eL.js";import"./earcut-LyzpxF7a.js";import"./featureConversionUtils-DyzQOy8j.js";import"./OptimizedGeometry-CQuTPb9g.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./scaleUtils-Ci6S-9Ed.js";import"./UpdateTracking2D-v_J2FEIK.js";import"./TurboLine-hJaP5WXy.js";import"./GeometryUtils-BT6DOFpw.js";import"./Rect-CUzevAry.js";import"./BindType-BmZEZMMh.js";import"./Util-B9aVYlCG.js";import"./constants-D5zmR9t2.js";import"./AttributeStore-17mu3DUo.js";import"./TimeOnly-B4hj6eWV.js";import"./timeSupport-9L3BqAco.js";import"./json-Wa8cmqdu.js";import"./FeatureCommandQueue-CvsQfqbO.js";import"./normalizeUtilsSync-BtgxMcNg.js";import"./AGraphicContainer-DZmca_qa.js";import"./TechniqueInstance-CLOV4QWm.js";import"./TileContainer-BNS-Ydfx.js";import"./vec3f32-nZdmKIgz.js";import"./Bitmap-BAyVREiR.js";import"./floorFilterUtils-DZ5C6FQv.js";import"./sublayerUtils-CleYkf0w.js";import"./popupUtils-CyS2Vw66.js";const P=t=>{let e=class extends t{initialize(){this.exportImageParameters=new H({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get floors(){var i;return((i=this.view)==null?void 0:i.floors)??null}get exportImageVersion(){var i;return(i=this.exportImageParameters)==null||i.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}canResume(){var i;return!!super.canResume()&&!((i=this.timeExtent)!=null&&i.isEmpty)}};return r([o()],e.prototype,"exportImageParameters",void 0),r([o({readOnly:!0})],e.prototype,"floors",null),r([o({readOnly:!0})],e.prototype,"exportImageVersion",null),r([o()],e.prototype,"layer",void 0),r([o()],e.prototype,"suspended",void 0),r([o(g)],e.prototype,"timeExtent",void 0),e=r([m("esri.views.layers.MapImageLayerView")],e),e};let s=class extends P(I(f(x))){constructor(){super(...arguments),this._highlightGraphics=new l,this._updateHash=""}fetchPopupFeaturesAtLocation(t,e){return this._popupHighlightHelper.fetchPopupFeaturesAtLocation(t,e)}update(t){const e=`${this.exportImageVersion}/${t.state.id}/${t.pixelRatio}/${t.stationary}`;this._updateHash!==e&&(this._updateHash=e,this.strategy.update(t).catch(i=>{d(i)||u.getLogger(this).error(i)}),t.stationary&&this._popupHighlightHelper.updateHighlightedFeatures(t.state.resolution)),this._highlightView.processUpdate(t)}attach(){const{imageMaxWidth:t,imageMaxHeight:e,version:i}=this.layer,a=i>=10.3,n=i>=10;this._bitmapContainer=new y,this.container.addChild(this._bitmapContainer),this._highlightView=new w({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new v(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1}),this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new U({createFetchPopupFeaturesQueryGeometry:(p,h)=>V(p,h,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(p,h)=>{this._highlightView.graphicUpdateHandler({graphic:p,property:h})},layerView:this,updatingHandles:this._updatingHandles}),this.strategy=new _({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:t,imageMaxHeight:e,imageRotationSupported:a,imageNormalizationSupported:n,hidpi:!0}),this.addAttachHandles(c(()=>this.exportImageVersion,()=>this.requestUpdate())),this.requestUpdate()}detach(){this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy(),this._popupHighlightHelper.destroy()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}async doRefresh(){this._updateHash="",this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,e,i,a){return this.layer.fetchImage(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...a})}fetchImageBitmap(t,e,i,a){return this.layer.fetchImageBitmap(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...a})}highlight(t){return this._popupHighlightHelper.highlight(t)}};r([o()],s.prototype,"strategy",void 0),r([o()],s.prototype,"updating",void 0),s=r([m("esri.views.2d.layers.MapImageLayerView2D")],s);const _t=s;export{_t as default};