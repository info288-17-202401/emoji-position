import{K as o,M as g,V as m,N as n,q as a,x as p,y as l,z as c}from"./index-B7QNv2P_.js";import{t as d}from"./highlightReasons-B5hDpyZP.js";import{m as u,u as w}from"./LayerView-DY2RU1-w.js";import{t as y}from"./GraphicContainer-CE-0b_ac.js";import{$ as V}from"./GraphicsView2D-DmlTsPhf.js";import{t as f}from"./HighlightCounter-De7Vccv4.js";import"./scaleUtils-Ci6S-9Ed.js";import"./Container-CiLLbMfu.js";import"./definitions-C14Q9bsB.js";import"./enums-CYMvjYBC.js";import"./Texture-DgSfWjih.js";import"./AGraphicContainer-DZmca_qa.js";import"./TechniqueInstance-CLOV4QWm.js";import"./UpdateTracking2D-v_J2FEIK.js";import"./TurboLine-hJaP5WXy.js";import"./enums-BRqP_wXA.js";import"./earcut-LyzpxF7a.js";import"./GeometryUtils-BT6DOFpw.js";import"./OptimizedGeometry-CQuTPb9g.js";import"./Rect-CUzevAry.js";import"./LabelMetric-BkU_pFC9.js";import"./Program-C7abV0em.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BindType-BmZEZMMh.js";import"./Util-B9aVYlCG.js";import"./constants-D5zmR9t2.js";import"./TileContainer-BNS-Ydfx.js";import"./WGLContainer-p1sqiFHw.js";import"./ProgramTemplate-DrVBkiDk.js";import"./StyleDefinition-pu9RBNlY.js";import"./config-MDUrh2eL.js";import"./featureConversionUtils-DyzQOy8j.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./FeatureCommandQueue-CvsQfqbO.js";import"./vec3f32-nZdmKIgz.js";import"./AttributeStore-17mu3DUo.js";import"./TimeOnly-B4hj6eWV.js";import"./timeSupport-9L3BqAco.js";import"./json-Wa8cmqdu.js";import"./normalizeUtilsSync-BtgxMcNg.js";let s=class extends u(w){constructor(){super(...arguments),this._highlightCounter=new f}attach(){this.graphicsView=new V({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new y(this.view.featuresTilingScheme),layerId:this.layer.id}),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler)),this._updateHighlight()}detach(){this.container.removeAllChildren(),this.graphicsView=o(this.graphicsView)}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map(t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer})):null}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(i,t="highlight"){let r;typeof i=="number"?r=[i]:i instanceof g?r=[i.uid]:Array.isArray(i)&&i.length>0?r=typeof i[0]=="number"?i:i.map(h=>h&&h.uid):m.isCollection(i)&&i.length>0&&(r=i.map(h=>h&&h.uid).toArray());const e=r==null?void 0:r.filter(n);return e!=null&&e.length?(this._addHighlight(e,t),a(()=>this._removeHighlight(e,t))):a()}_addHighlight(i,t){this._highlightCounter.addReason(i,t),this._updateHighlight()}_removeHighlight(i,t){this._highlightCounter.deleteReason(i,t),this._updateHighlight()}_updateHighlight(){var t;const i=[];for(const r of this._highlightCounter.ids()){const e=this._highlightCounter.getHighestReason(r),h=d(e);i.push({objectId:r,highlightFlags:h})}(t=this.graphicsView)==null||t.setHighlight(i)}};p([l()],s.prototype,"graphicsView",void 0),s=p([c("esri.views.2d.layers.GraphicsLayerView2D")],s);const ai=s;export{ai as default};