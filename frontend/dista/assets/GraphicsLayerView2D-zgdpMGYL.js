import{K as o,M as g,V as m,N as n,q as a,x as p,y as l,z as c}from"./index-DbrLk5dB.js";import{t as d}from"./highlightReasons-D1PxHdrd.js";import{m as u,u as w}from"./LayerView-BWF4ZTnq.js";import{t as y}from"./GraphicContainer-BPrHzNfx.js";import{$ as V}from"./GraphicsView2D-s2J3d_mz.js";import{t as f}from"./HighlightCounter-D_a9Ls6a.js";import"./scaleUtils-C1TMyqOG.js";import"./Container-CPo8XOHP.js";import"./definitions-C14Q9bsB.js";import"./enums-CYMvjYBC.js";import"./Texture-DzYKAY_6.js";import"./AGraphicContainer-CfCPHVAh.js";import"./TechniqueInstance-FncTHjXM.js";import"./UpdateTracking2D-C3nhUaYr.js";import"./TurboLine-scmsFOQe.js";import"./enums-BRqP_wXA.js";import"./earcut-BA_JCivH.js";import"./GeometryUtils-RcuGNKCM.js";import"./OptimizedGeometry-CQuTPb9g.js";import"./Rect-CUzevAry.js";import"./LabelMetric-BYvPqXeX.js";import"./Program-Bx1E0NvQ.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BindType-BmZEZMMh.js";import"./Util-BcReeN9O.js";import"./constants-D5zmR9t2.js";import"./TileContainer-CLVQ-B0o.js";import"./WGLContainer-ClMvVR4S.js";import"./ProgramTemplate-CvAwIkwF.js";import"./StyleDefinition-pu9RBNlY.js";import"./config-MDUrh2eL.js";import"./featureConversionUtils-WVyP8ieu.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./FeatureCommandQueue-Bfar9qom.js";import"./vec3f32-nZdmKIgz.js";import"./AttributeStore-CdLD1l-O.js";import"./TimeOnly-DjEIKp90.js";import"./timeSupport-2S_5NbEG.js";import"./json-Wa8cmqdu.js";import"./normalizeUtilsSync-DHZs_Ra2.js";let s=class extends u(w){constructor(){super(...arguments),this._highlightCounter=new f}attach(){this.graphicsView=new V({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new y(this.view.featuresTilingScheme),layerId:this.layer.id}),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler)),this._updateHighlight()}detach(){this.container.removeAllChildren(),this.graphicsView=o(this.graphicsView)}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map(t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer})):null}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(i,t="highlight"){let r;typeof i=="number"?r=[i]:i instanceof g?r=[i.uid]:Array.isArray(i)&&i.length>0?r=typeof i[0]=="number"?i:i.map(h=>h&&h.uid):m.isCollection(i)&&i.length>0&&(r=i.map(h=>h&&h.uid).toArray());const e=r==null?void 0:r.filter(n);return e!=null&&e.length?(this._addHighlight(e,t),a(()=>this._removeHighlight(e,t))):a()}_addHighlight(i,t){this._highlightCounter.addReason(i,t),this._updateHighlight()}_removeHighlight(i,t){this._highlightCounter.deleteReason(i,t),this._updateHighlight()}_updateHighlight(){var t;const i=[];for(const r of this._highlightCounter.ids()){const e=this._highlightCounter.getHighestReason(r),h=d(e);i.push({objectId:r,highlightFlags:h})}(t=this.graphicsView)==null||t.setHighlight(i)}};p([l()],s.prototype,"graphicsView",void 0),s=p([c("esri.views.2d.layers.GraphicsLayerView2D")],s);const ai=s;export{ai as default};