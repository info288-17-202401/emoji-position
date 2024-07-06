import{aB as A,aE as B,f as g,d1 as j,d2 as w}from"./index-D6O-z8he.js";import{K as R}from"./featureConversionUtils-DMiLVW8-.js";import{e as v}from"./OptimizedGeometry-CQuTPb9g.js";import{j as b}from"./timeSupport-Cs735SvU.js";const E=new Float64Array(2),F=new Float64Array(2),T="0123456789bcdefghjkmnpqrstuvwxyz",Y=64;function X(n,e,r,a){const t=[n.xmin,n.ymin,n.xmax,n.ymax],s=A.fromExtent(B.fromBounds(t,a)),f=b(s,a,g.WGS84,{densificationStep:e*Y});if(!f)return null;const o=R(new v,f,!1,!1),u=o.coords.filter((W,h)=>!(h%2)),i=o.coords.filter((W,h)=>h%2),p=Math.min(...u),M=Math.min(...i),l=Math.max(...u),m=Math.max(...i),c=G(p,M,r,g.WGS84),y=G(l,m,r,g.WGS84);return c&&y?{bounds:t,geohashBounds:{xLL:c[0],yLL:c[1],xTR:y[0],yTR:y[1]},level:r}:null}function G(n,e,r,a){if(a.isWebMercator){const f=j(n/w.radius),o=f-360*Math.floor((f+180)/360),u=[0,0];return $(u,0,j(Math.PI/2-2*Math.atan(Math.exp(-e/w.radius))),o,r),u}const t=b({x:n,y:e},a,g.WGS84);if(!t)return null;const s=[0,0];return $(s,0,t.y,t.x,r),s}function k(n){return T[n]}function z(n){return(n[0]+n[1])/2}function L(n,e,r){return n[0]=e,n[1]=r,n}function q(n,e){const r=z(n),a=e,t=!e;n[0]=t*n[0]+a*r,n[1]=t*r+a*n[1]}function x(n,e){const r=e>z(n);return q(n,r),r}function D(n,e){let r=-90,a=90,t=-180,s=180;for(let f=0;f<e;f++){const o=Math.ceil((f+1)/2),u=Math.floor((f+1)/2),i=1-f%2,p=30-(3*o+2*u),M=30-(2*o+3*u),l=3*i+2*(1-i),m=2*i+3*(1-i),c=3*i+7*(1-i)<<M,y=(7*i+3*(1-i)<<p&n.geohashX)>>p,W=(c&n.geohashY)>>M;for(let h=l-1;h>=0;h--){const S=(t+s)/2,d=y&1<<h?1:0;t=(1-d)*t+d*S,s=(1-d)*S+d*s}for(let h=m-1;h>=0;h--){const S=(r+a)/2,d=W&1<<h?1:0;r=(1-d)*r+d*S,a=(1-d)*S+d*a}}return[t,r,s,a]}function $(n,e,r,a,t){t%2&&(t+=1);let s=0,f=0,o=-90,u=90,i=-180,p=180;for(let M=0;M<t/2;M++){for(let l=0;l<5;l++){const m=(i+p)/2,c=a>m?1:0;s|=c<<29-(l+5*M),i=(1-c)*i+c*m,p=(1-c)*m+c*p}for(let l=0;l<5;l++){const m=(o+u)/2,c=r>m?1:0;f|=c<<29-(l+5*M),o=(1-c)*o+c*m,u=(1-c)*m+c*u}}n[2*e]=s,n[2*e+1]=f}function H(n,e,r){let a="";const t=L(E,-90,90),s=L(F,-180,180);for(let f=0;f<r;f++){let o=0;f%2?(o|=x(t,n)<<4,o|=x(s,e)<<3,o|=x(t,n)<<2,o|=x(s,e)<<1,o|=x(t,n)<<0):(o|=x(s,e)<<4,o|=x(t,n)<<3,o|=x(s,e)<<2,o|=x(t,n)<<1,o|=x(s,e)<<0),a+=k(o)}return a}export{G as A,D as R,X as S,H as z};