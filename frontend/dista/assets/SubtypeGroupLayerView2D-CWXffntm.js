import{x as a,z as n,C as d,P as u,a0 as l}from"./index-Bg4CXF-w.js";import{X as g}from"./FeatureLayerView2D-CFrMjVEY.js";import"./Container-Wbg-9jJ-.js";import"./highlightReasons-C4cu8YUi.js";import"./definitions-C14Q9bsB.js";import"./enums-CYMvjYBC.js";import"./Texture-DI_pIYXi.js";import"./LayerView-DK1dgT1_.js";import"./scaleUtils-CvqwNE08.js";import"./TechniqueInstance-BjMLvhu1.js";import"./UpdateTracking2D-DMGkh3o-.js";import"./TurboLine-CvEUNW_z.js";import"./enums-BRqP_wXA.js";import"./earcut-DjsdzJsV.js";import"./GeometryUtils-IbN7kzuY.js";import"./OptimizedGeometry-CQuTPb9g.js";import"./Rect-CUzevAry.js";import"./LabelMetric-DwV1oeQi.js";import"./Program-BEb5dTNA.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BindType-BmZEZMMh.js";import"./Util-BMcd3yjD.js";import"./constants-D5zmR9t2.js";import"./TileContainer-NVcPSWUm.js";import"./WGLContainer-BwDoid_T.js";import"./ProgramTemplate-D8ONHiaq.js";import"./StyleDefinition-pu9RBNlY.js";import"./config-MDUrh2eL.js";import"./featureConversionUtils-BbE733Cx.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./tileUtils-B7X19rIS.js";import"./SDFHelper-BWRuVe6A.js";import"./floatRGBA-Cj-djtFa.js";import"./FeatureCommandQueue-iGewi7jF.js";import"./HighlightCounter-Bxk2_mBf.js";import"./floorFilterUtils-DZ5C6FQv.js";import"./popupUtils-BE85Bggm.js";import"./RefreshableLayerView-DqYQrpB-.js";let i=class extends g{initialize(){this.addHandles([d(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(s=>s.renderer!=null),r=this._commandsQueue.updateTracking.updating,o=this._updatingRequiredFieldsPromise!=null,p=!this._worker,m=this.dataUpdating,e=t&&(r||o||p||m);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${e}
  -> hasRenderer ${t}
  -> hasPendingCommand ${r}
  -> updatingRequiredFields ${o}
  -> updatingProxy ${p}
  -> updatingPipeline ${m}
`),e}};i=a([n("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const Y=i;export{Y as default};
