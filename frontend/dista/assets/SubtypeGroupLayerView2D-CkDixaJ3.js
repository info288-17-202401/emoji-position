import{x as a,z as n,C as d,P as u,a0 as l}from"./index-DvnWfNy3.js";import{X as g}from"./FeatureLayerView2D-ztgxx8yN.js";import"./Container-B7hlJ7fP.js";import"./highlightReasons-CRgQ1iv3.js";import"./definitions-C14Q9bsB.js";import"./enums-CYMvjYBC.js";import"./Texture-w4kHrehJ.js";import"./LayerView-CphjXkl2.js";import"./scaleUtils-BxnVmcRV.js";import"./TechniqueInstance-B-CpnSlw.js";import"./UpdateTracking2D-B-uef4-6.js";import"./TurboLine-DXeO1QQ_.js";import"./enums-BRqP_wXA.js";import"./earcut-DMOsbgXR.js";import"./GeometryUtils-BlfT1pZ2.js";import"./OptimizedGeometry-CQuTPb9g.js";import"./Rect-CUzevAry.js";import"./LabelMetric-DkixzOHV.js";import"./Program-DS2vJNrr.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BindType-BmZEZMMh.js";import"./Util-D9TrzMUJ.js";import"./constants-D5zmR9t2.js";import"./TileContainer-Cu9XlZEH.js";import"./WGLContainer-Dq7FEuAL.js";import"./ProgramTemplate-C1MbFOzl.js";import"./StyleDefinition-pu9RBNlY.js";import"./config-MDUrh2eL.js";import"./featureConversionUtils-DZybO6H4.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./tileUtils-B7X19rIS.js";import"./SDFHelper-B8hOWR7G.js";import"./floatRGBA-Dleevj5z.js";import"./FeatureCommandQueue-hb4VRMsK.js";import"./HighlightCounter-B6JXwhCE.js";import"./floorFilterUtils-DZ5C6FQv.js";import"./popupUtils-Bu1qsK7d.js";import"./RefreshableLayerView-BlJ5apn7.js";let i=class extends g{initialize(){this.addHandles([d(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(s=>s.renderer!=null),r=this._commandsQueue.updateTracking.updating,o=this._updatingRequiredFieldsPromise!=null,p=!this._worker,m=this.dataUpdating,e=t&&(r||o||p||m);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${e}
  -> hasRenderer ${t}
  -> hasPendingCommand ${r}
  -> updatingRequiredFields ${o}
  -> updatingProxy ${p}
  -> updatingPipeline ${m}
`),e}};i=a([n("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const Y=i;export{Y as default};
