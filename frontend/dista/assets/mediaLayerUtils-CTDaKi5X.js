import{$ as c,j as l}from"./utils-B0hfgB3w.js";import{o as y,bK as f,a as d,e as v}from"./index-DbrLk5dB.js";import{p as s}from"./resourceUtils-0bZMl3aW.js";import"./originUtils-D69mHv66.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./saveAPIKeyUtils-D90bLqqq.js";import"./saveUtils-CQoxhBW5.js";import"./resourceUtils-BidkSzFJ.js";const o="Media Layer",x="media-layer-save",N="media-layer-save-as",n=["media-layer:unsupported-source"];function i(e){return{isValid:e.type==="media",errorMessage:"Layer.type should be 'media'"}}function m(e){return y(e,"portal-item",!0)}function p(e){return e.layerJSON}async function A(e,r){const{title:a,fullExtent:t}=e;r.title||(r.title=a),r.extent=t?await f(t):null,d(r,v.METADATA)}async function M(e,r){return c({layer:e,itemType:o,validateLayer:i,createJSONContext:a=>m(a),createItemData:p,errorNamePrefix:x,supplementalUnsupportedErrors:n,saveResources:(a,t)=>s(e.resourceReferences,t)},r)}async function O(e,r,a){return l({layer:e,itemType:o,validateLayer:i,createJSONContext:t=>m(t),createItemData:p,errorNamePrefix:N,supplementalUnsupportedErrors:n,newItem:r,setItemProperties:A,saveResources:(t,u)=>s(e.resourceReferences,u)},a)}export{M as save,O as saveAs};
