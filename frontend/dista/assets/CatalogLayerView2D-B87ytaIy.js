import{V as o,x as r,y as a,z as n}from"./index-DvnWfNy3.js";import{m as s,u as l}from"./LayerView-CphjXkl2.js";import"./scaleUtils-BxnVmcRV.js";import"./Container-B7hlJ7fP.js";import"./highlightReasons-CRgQ1iv3.js";import"./definitions-C14Q9bsB.js";import"./enums-CYMvjYBC.js";import"./Texture-w4kHrehJ.js";let i=class extends s(l){constructor(){super(...arguments),this.layerViews=new o}get dynamicGroupLayerView(){return this.layerViews.find(e=>{var t;return e.layer===((t=this.layer)==null?void 0:t.dynamicGroupLayer)})}get footprintLayerView(){return this.layerViews.find(e=>{var t;return e.layer===((t=this.layer)==null?void 0:t.footprintLayer)})}update(e){}moveStart(){}viewChange(){}moveEnd(){}attach(){this.addAttachHandles([this._updatingHandles.addOnCollectionChange(()=>this.layerViews,()=>this._updateStageChildren(),{initial:!0})])}detach(){this.container.removeAllChildren()}isUpdating(){return this.layerViews.some(e=>e.updating)}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((e,t)=>this.container.addChildAt(e.container,t))}};r([a()],i.prototype,"dynamicGroupLayerView",null),r([a()],i.prototype,"footprintLayerView",null),r([a()],i.prototype,"layerViews",void 0),i=r([n("esri.views.2d.layers.CatalogLayerView2D")],i);const V=i;export{V as default};