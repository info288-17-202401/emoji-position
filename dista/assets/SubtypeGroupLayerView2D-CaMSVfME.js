import{x as a,z as n,C as d,P as u,a0 as l}from"./index-CoWQzULr.js";import{X as g}from"./FeatureLayerView2D-CYtO3T2R.js";import"./Container-X8HE93GX.js";import"./highlightReasons-N5bI6t6r.js";import"./definitions-C14Q9bsB.js";import"./enums-CYMvjYBC.js";import"./Texture-BJRsL-uS.js";import"./LayerView-B1bvgenA.js";import"./scaleUtils-o4yF-PKT.js";import"./TechniqueInstance-BJ3MjLvZ.js";import"./UpdateTracking2D-DgP1ves0.js";import"./TurboLine-BdQ405Bu.js";import"./enums-BRqP_wXA.js";import"./earcut-DjZMESAO.js";import"./GeometryUtils-BVbSUE9S.js";import"./OptimizedGeometry-CQuTPb9g.js";import"./Rect-CUzevAry.js";import"./LabelMetric-MpHeimFV.js";import"./Program-cc6VIApN.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BindType-BmZEZMMh.js";import"./Util-BfaWIwkw.js";import"./constants-D5zmR9t2.js";import"./TileContainer-BzYK4iDn.js";import"./WGLContainer-C9r9eRaK.js";import"./ProgramTemplate-Cp6KsmF3.js";import"./StyleDefinition-pu9RBNlY.js";import"./config-MDUrh2eL.js";import"./featureConversionUtils-C1aXLx5P.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./tileUtils-B7X19rIS.js";import"./SDFHelper-Cq0f20HO.js";import"./floatRGBA-D0v1dZ6J.js";import"./FeatureCommandQueue-C8CG7jMG.js";import"./HighlightCounter-D9OUbfqP.js";import"./floorFilterUtils-DZ5C6FQv.js";import"./popupUtils-DeEA9UBo.js";import"./RefreshableLayerView-By6cfWrt.js";let i=class extends g{initialize(){this.addHandles([d(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(s=>s.renderer!=null),r=this._commandsQueue.updateTracking.updating,o=this._updatingRequiredFieldsPromise!=null,p=!this._worker,m=this.dataUpdating,e=t&&(r||o||p||m);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${e}
  -> hasRenderer ${t}
  -> hasPendingCommand ${r}
  -> updatingRequiredFields ${o}
  -> updatingProxy ${p}
  -> updatingPipeline ${m}
`),e}};i=a([n("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const Y=i;export{Y as default};