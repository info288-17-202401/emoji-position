import{x as r,y as o,bg as g,z as m,k as l,t as d,v as u,C as c}from"./index-Bg4CXF-w.js";import{a as y}from"./BitmapContainer-CYzEV5UU.js";import{m as f,u as x}from"./LayerView-DK1dgT1_.js";import{$ as w}from"./GraphicsView2D-BiFxiZJU.js";import{h as v}from"./HighlightGraphicContainer-ixtAWnuP.js";import{v as _}from"./ExportStrategy-X7OwN88d.js";import{m as H}from"./ExportImageParameters-Bzb8VOvr.js";import{i as I}from"./RefreshableLayerView-DqYQrpB-.js";import{U,r as V}from"./drapedUtils-CqIwK-4h.js";import"./WGLContainer-BwDoid_T.js";import"./definitions-C14Q9bsB.js";import"./LabelMetric-DwV1oeQi.js";import"./enums-CYMvjYBC.js";import"./enums-BRqP_wXA.js";import"./Texture-DI_pIYXi.js";import"./Program-BEb5dTNA.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./ProgramTemplate-D8ONHiaq.js";import"./Container-Wbg-9jJ-.js";import"./highlightReasons-C4cu8YUi.js";import"./StyleDefinition-pu9RBNlY.js";import"./config-MDUrh2eL.js";import"./earcut-DjsdzJsV.js";import"./featureConversionUtils-BbE733Cx.js";import"./OptimizedGeometry-CQuTPb9g.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./scaleUtils-CvqwNE08.js";import"./UpdateTracking2D-DMGkh3o-.js";import"./TurboLine-CvEUNW_z.js";import"./GeometryUtils-IbN7kzuY.js";import"./Rect-CUzevAry.js";import"./BindType-BmZEZMMh.js";import"./Util-BMcd3yjD.js";import"./constants-D5zmR9t2.js";import"./AttributeStore-iDuEe_jS.js";import"./TimeOnly-DkWZWG6K.js";import"./timeSupport-CyVkVnHf.js";import"./json-Wa8cmqdu.js";import"./FeatureCommandQueue-iGewi7jF.js";import"./normalizeUtilsSync-C4vt70tH.js";import"./AGraphicContainer-yAIzOT3A.js";import"./TechniqueInstance-BjMLvhu1.js";import"./TileContainer-NVcPSWUm.js";import"./vec3f32-nZdmKIgz.js";import"./Bitmap-CpeVsZ-n.js";import"./floorFilterUtils-DZ5C6FQv.js";import"./sublayerUtils-B1UpKAPc.js";import"./popupUtils-BE85Bggm.js";const P=t=>{let e=class extends t{initialize(){this.exportImageParameters=new H({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get floors(){var i;return((i=this.view)==null?void 0:i.floors)??null}get exportImageVersion(){var i;return(i=this.exportImageParameters)==null||i.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}canResume(){var i;return!!super.canResume()&&!((i=this.timeExtent)!=null&&i.isEmpty)}};return r([o()],e.prototype,"exportImageParameters",void 0),r([o({readOnly:!0})],e.prototype,"floors",null),r([o({readOnly:!0})],e.prototype,"exportImageVersion",null),r([o()],e.prototype,"layer",void 0),r([o()],e.prototype,"suspended",void 0),r([o(g)],e.prototype,"timeExtent",void 0),e=r([m("esri.views.layers.MapImageLayerView")],e),e};let s=class extends P(I(f(x))){constructor(){super(...arguments),this._highlightGraphics=new l,this._updateHash=""}fetchPopupFeaturesAtLocation(t,e){return this._popupHighlightHelper.fetchPopupFeaturesAtLocation(t,e)}update(t){const e=`${this.exportImageVersion}/${t.state.id}/${t.pixelRatio}/${t.stationary}`;this._updateHash!==e&&(this._updateHash=e,this.strategy.update(t).catch(i=>{d(i)||u.getLogger(this).error(i)}),t.stationary&&this._popupHighlightHelper.updateHighlightedFeatures(t.state.resolution)),this._highlightView.processUpdate(t)}attach(){const{imageMaxWidth:t,imageMaxHeight:e,version:i}=this.layer,a=i>=10.3,n=i>=10;this._bitmapContainer=new y,this.container.addChild(this._bitmapContainer),this._highlightView=new w({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new v(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1}),this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new U({createFetchPopupFeaturesQueryGeometry:(p,h)=>V(p,h,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(p,h)=>{this._highlightView.graphicUpdateHandler({graphic:p,property:h})},layerView:this,updatingHandles:this._updatingHandles}),this.strategy=new _({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:t,imageMaxHeight:e,imageRotationSupported:a,imageNormalizationSupported:n,hidpi:!0}),this.addAttachHandles(c(()=>this.exportImageVersion,()=>this.requestUpdate())),this.requestUpdate()}detach(){this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy(),this._popupHighlightHelper.destroy()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}async doRefresh(){this._updateHash="",this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,e,i,a){return this.layer.fetchImage(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...a})}fetchImageBitmap(t,e,i,a){return this.layer.fetchImageBitmap(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...a})}highlight(t){return this._popupHighlightHelper.highlight(t)}};r([o()],s.prototype,"strategy",void 0),r([o()],s.prototype,"updating",void 0),s=r([m("esri.views.2d.layers.MapImageLayerView2D")],s);const _t=s;export{_t as default};