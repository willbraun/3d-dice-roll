import{J as dQ,K as hI,L as rg,t as zC,M as cg,S as NI,i as KI,s as lI,C as og,D as eg,E as tg,F as ag,g as nA,d as cA,I as GI,y as XA,z as zA,A as $A,B as AI,k as pQ,l as fQ,m as HE,h as EI,n as YB,b as wI,N as LD,O as BC,v as UC,f as NC,P as uD,o as mE,Q as rE,w as $C,R as zB,T as LB,a as XI,c as zI,U as uB,V as HB,W as Oa,e as xg,X as ce,Y as we,Z as HD,H as AB,_ as mD,q as Za,r as Pa,G as Mo,$ as bD}from"../chunks/index.74c54b30.js";import{d as va,w as RI,r as TD}from"../chunks/index.98380496.js";/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yo="153",iB={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},oB={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},xD=0,Ge=1,OD=2,Wa=1,ja=2,CC=3,eC=0,ig=1,Hg=2,lC=0,qB=1,Se=2,ke=3,le=4,ZD=5,JB=100,PD=101,vD=102,Me=103,ye=104,WD=200,jD=201,VD=202,_D=203,Va=204,_a=205,XD=206,zD=207,$D=208,An=209,In=210,gn=0,Cn=1,Bn=2,Vi=3,Qn=4,En=5,on=6,en=7,Xa=0,tn=1,an=2,bg=0,sn=1,Dn=2,nn=3,za=4,hn=5,$a=300,mB=301,bB=302,_i=303,Xi=304,bE=306,TB=1e3,kg=1001,yE=1002,PI=1003,zi=1004,cE=1005,Eg=1006,As=1007,IB=1008,MC=1009,rn=1010,cn=1011,Uo=1012,Is=1013,kC=1014,QC=1015,xB=1016,gs=1017,Cs=1018,jC=1020,wn=1021,lg=1023,Gn=1024,Sn=1025,VC=1026,OB=1027,kn=1028,Bs=1029,ln=1030,Qs=1031,Es=1033,ii=33776,oi=33777,ei=33778,ti=33779,Ue=35840,Ne=35841,Ke=35842,Je=35843,Mn=36196,Fe=37492,Re=37496,qe=37808,de=37809,pe=37810,fe=37811,Ye=37812,Le=37813,ue=37814,He=37815,me=37816,be=37817,Te=37818,xe=37819,Oe=37820,Ze=37821,ai=36492,yn=36283,Pe=36284,ve=36285,We=36286,SQ=2300,ZB=2301,si=2302,je=2400,Ve=2401,_e=2402,Un=2500,Nn=0,is=1,$i=2,No=3e3,oC=3001,Kn=3200,Jn=3201,os=0,Fn=1,_C="",qA="srgb",pg="srgb-linear",es="display-p3",Di=7680,Rn=519,qn=512,dn=513,pn=514,fn=515,Yn=516,Ln=517,un=518,Hn=519,Ao=35044,Xe="300 es",Io=1035,EC=2e3,UE=2001;class EB{addEventListener(A,I){this._listeners===void 0&&(this._listeners={});const g=this._listeners;g[A]===void 0&&(g[A]=[]),g[A].indexOf(I)===-1&&g[A].push(I)}hasEventListener(A,I){if(this._listeners===void 0)return!1;const g=this._listeners;return g[A]!==void 0&&g[A].indexOf(I)!==-1}removeEventListener(A,I){if(this._listeners===void 0)return;const C=this._listeners[A];if(C!==void 0){const Q=C.indexOf(I);Q!==-1&&C.splice(Q,1)}}dispatchEvent(A){if(this._listeners===void 0)return;const g=this._listeners[A.type];if(g!==void 0){A.target=this;const C=g.slice(0);for(let Q=0,E=C.length;Q<E;Q++)C[Q].call(this,A);A.target=null}}}const jI=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ze=1234567;const rQ=Math.PI/180,PB=180/Math.PI;function qg(){const B=Math.random()*4294967295|0,A=Math.random()*4294967295|0,I=Math.random()*4294967295|0,g=Math.random()*4294967295|0;return(jI[B&255]+jI[B>>8&255]+jI[B>>16&255]+jI[B>>24&255]+"-"+jI[A&255]+jI[A>>8&255]+"-"+jI[A>>16&15|64]+jI[A>>24&255]+"-"+jI[I&63|128]+jI[I>>8&255]+"-"+jI[I>>16&255]+jI[I>>24&255]+jI[g&255]+jI[g>>8&255]+jI[g>>16&255]+jI[g>>24&255]).toLowerCase()}function vI(B,A,I){return Math.max(A,Math.min(I,B))}function Ko(B,A){return(B%A+A)%A}function mn(B,A,I,g,C){return g+(B-A)*(C-g)/(I-A)}function bn(B,A,I){return B!==A?(I-B)/(A-B):0}function cQ(B,A,I){return(1-I)*B+I*A}function Tn(B,A,I,g){return cQ(B,A,1-Math.exp(-I*g))}function xn(B,A=1){return A-Math.abs(Ko(B,A*2)-A)}function On(B,A,I){return B<=A?0:B>=I?1:(B=(B-A)/(I-A),B*B*(3-2*B))}function Zn(B,A,I){return B<=A?0:B>=I?1:(B=(B-A)/(I-A),B*B*B*(B*(B*6-15)+10))}function Pn(B,A){return B+Math.floor(Math.random()*(A-B+1))}function vn(B,A){return B+Math.random()*(A-B)}function Wn(B){return B*(.5-Math.random())}function jn(B){B!==void 0&&(ze=B);let A=ze+=1831565813;return A=Math.imul(A^A>>>15,A|1),A^=A+Math.imul(A^A>>>7,A|61),((A^A>>>14)>>>0)/4294967296}function Vn(B){return B*rQ}function _n(B){return B*PB}function go(B){return(B&B-1)===0&&B!==0}function ts(B){return Math.pow(2,Math.ceil(Math.log(B)/Math.LN2))}function NE(B){return Math.pow(2,Math.floor(Math.log(B)/Math.LN2))}function Xn(B,A,I,g,C){const Q=Math.cos,E=Math.sin,i=Q(I/2),o=E(I/2),e=Q((A+g)/2),t=E((A+g)/2),a=Q((A-g)/2),s=E((A-g)/2),n=Q((g-A)/2),r=E((g-A)/2);switch(C){case"XYX":B.set(i*t,o*a,o*s,i*e);break;case"YZY":B.set(o*s,i*t,o*a,i*e);break;case"ZXZ":B.set(o*a,o*s,i*t,i*e);break;case"XZX":B.set(i*t,o*r,o*n,i*e);break;case"YXY":B.set(o*n,i*t,o*r,i*e);break;case"ZYZ":B.set(o*r,o*n,i*t,i*e);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+C)}}function iC(B,A){switch(A.constructor){case Float32Array:return B;case Uint32Array:return B/4294967295;case Uint16Array:return B/65535;case Uint8Array:return B/255;case Int32Array:return Math.max(B/2147483647,-1);case Int16Array:return Math.max(B/32767,-1);case Int8Array:return Math.max(B/127,-1);default:throw new Error("Invalid component type.")}}function sI(B,A){switch(A.constructor){case Float32Array:return B;case Uint32Array:return Math.round(B*4294967295);case Uint16Array:return Math.round(B*65535);case Uint8Array:return Math.round(B*255);case Int32Array:return Math.round(B*2147483647);case Int16Array:return Math.round(B*32767);case Int8Array:return Math.round(B*127);default:throw new Error("Invalid component type.")}}const zn={DEG2RAD:rQ,RAD2DEG:PB,generateUUID:qg,clamp:vI,euclideanModulo:Ko,mapLinear:mn,inverseLerp:bn,lerp:cQ,damp:Tn,pingpong:xn,smoothstep:On,smootherstep:Zn,randInt:Pn,randFloat:vn,randFloatSpread:Wn,seededRandom:jn,degToRad:Vn,radToDeg:_n,isPowerOfTwo:go,ceilPowerOfTwo:ts,floorPowerOfTwo:NE,setQuaternionFromProperEuler:Xn,normalize:sI,denormalize:iC};class dA{constructor(A=0,I=0){dA.prototype.isVector2=!0,this.x=A,this.y=I}get width(){return this.x}set width(A){this.x=A}get height(){return this.y}set height(A){this.y=A}set(A,I){return this.x=A,this.y=I,this}setScalar(A){return this.x=A,this.y=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y)}copy(A){return this.x=A.x,this.y=A.y,this}add(A){return this.x+=A.x,this.y+=A.y,this}addScalar(A){return this.x+=A,this.y+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this}subScalar(A){return this.x-=A,this.y-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this}multiply(A){return this.x*=A.x,this.y*=A.y,this}multiplyScalar(A){return this.x*=A,this.y*=A,this}divide(A){return this.x/=A.x,this.y/=A.y,this}divideScalar(A){return this.multiplyScalar(1/A)}applyMatrix3(A){const I=this.x,g=this.y,C=A.elements;return this.x=C[0]*I+C[3]*g+C[6],this.y=C[1]*I+C[4]*g+C[7],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(A){return this.x*A.x+this.y*A.y}cross(A){return this.x*A.y-this.y*A.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const g=this.dot(A)/I;return Math.acos(vI(g,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y;return I*I+g*g}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this}equals(A){return A.x===this.x&&A.y===this.y}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this}rotateAround(A,I){const g=Math.cos(I),C=Math.sin(I),Q=this.x-A.x,E=this.y-A.y;return this.x=Q*g-E*C+A.x,this.y=Q*C+E*g+A.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class PA{constructor(A,I,g,C,Q,E,i,o,e){PA.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],A!==void 0&&this.set(A,I,g,C,Q,E,i,o,e)}set(A,I,g,C,Q,E,i,o,e){const t=this.elements;return t[0]=A,t[1]=C,t[2]=i,t[3]=I,t[4]=Q,t[5]=o,t[6]=g,t[7]=E,t[8]=e,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],this}extractBasis(A,I,g){return A.setFromMatrix3Column(this,0),I.setFromMatrix3Column(this,1),g.setFromMatrix3Column(this,2),this}setFromMatrix4(A){const I=A.elements;return this.set(I[0],I[4],I[8],I[1],I[5],I[9],I[2],I[6],I[10]),this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,C=I.elements,Q=this.elements,E=g[0],i=g[3],o=g[6],e=g[1],t=g[4],a=g[7],s=g[2],n=g[5],r=g[8],G=C[0],h=C[3],D=C[6],S=C[1],w=C[4],k=C[7],M=C[2],U=C[5],q=C[8];return Q[0]=E*G+i*S+o*M,Q[3]=E*h+i*w+o*U,Q[6]=E*D+i*k+o*q,Q[1]=e*G+t*S+a*M,Q[4]=e*h+t*w+a*U,Q[7]=e*D+t*k+a*q,Q[2]=s*G+n*S+r*M,Q[5]=s*h+n*w+r*U,Q[8]=s*D+n*k+r*q,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[3]*=A,I[6]*=A,I[1]*=A,I[4]*=A,I[7]*=A,I[2]*=A,I[5]*=A,I[8]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[1],C=A[2],Q=A[3],E=A[4],i=A[5],o=A[6],e=A[7],t=A[8];return I*E*t-I*i*e-g*Q*t+g*i*o+C*Q*e-C*E*o}invert(){const A=this.elements,I=A[0],g=A[1],C=A[2],Q=A[3],E=A[4],i=A[5],o=A[6],e=A[7],t=A[8],a=t*E-i*e,s=i*o-t*Q,n=e*Q-E*o,r=I*a+g*s+C*n;if(r===0)return this.set(0,0,0,0,0,0,0,0,0);const G=1/r;return A[0]=a*G,A[1]=(C*e-t*g)*G,A[2]=(i*g-C*E)*G,A[3]=s*G,A[4]=(t*I-C*o)*G,A[5]=(C*Q-i*I)*G,A[6]=n*G,A[7]=(g*o-e*I)*G,A[8]=(E*I-g*Q)*G,this}transpose(){let A;const I=this.elements;return A=I[1],I[1]=I[3],I[3]=A,A=I[2],I[2]=I[6],I[6]=A,A=I[5],I[5]=I[7],I[7]=A,this}getNormalMatrix(A){return this.setFromMatrix4(A).invert().transpose()}transposeIntoArray(A){const I=this.elements;return A[0]=I[0],A[1]=I[3],A[2]=I[6],A[3]=I[1],A[4]=I[4],A[5]=I[7],A[6]=I[2],A[7]=I[5],A[8]=I[8],this}setUvTransform(A,I,g,C,Q,E,i){const o=Math.cos(Q),e=Math.sin(Q);return this.set(g*o,g*e,-g*(o*E+e*i)+E+A,-C*e,C*o,-C*(-e*E+o*i)+i+I,0,0,1),this}scale(A,I){return this.premultiply(ni.makeScale(A,I)),this}rotate(A){return this.premultiply(ni.makeRotation(-A)),this}translate(A,I){return this.premultiply(ni.makeTranslation(A,I)),this}makeTranslation(A,I){return A.isVector2?this.set(1,0,A.x,0,1,A.y,0,0,1):this.set(1,0,A,0,1,I,0,0,1),this}makeRotation(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,g,I,0,0,0,1),this}makeScale(A,I){return this.set(A,0,0,0,I,0,0,0,1),this}equals(A){const I=this.elements,g=A.elements;for(let C=0;C<9;C++)if(I[C]!==g[C])return!1;return!0}fromArray(A,I=0){for(let g=0;g<9;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A}clone(){return new this.constructor().fromArray(this.elements)}}const ni=new PA;function as(B){for(let A=B.length-1;A>=0;--A)if(B[A]>=65535)return!0;return!1}function kQ(B){return document.createElementNS("http://www.w3.org/1999/xhtml",B)}const $e={};function wQ(B){B in $e||($e[B]=!0,console.warn(B))}function dB(B){return B<.04045?B*.0773993808:Math.pow(B*.9478672986+.0521327014,2.4)}function hi(B){return B<.0031308?B*12.92:1.055*Math.pow(B,.41666)-.055}const $n=new PA().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Ah=new PA().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Ih(B){return B.convertSRGBToLinear().applyMatrix3(Ah)}function gh(B){return B.applyMatrix3($n).convertLinearToSRGB()}const Ch={[pg]:B=>B,[qA]:B=>B.convertSRGBToLinear(),[es]:Ih},Bh={[pg]:B=>B,[qA]:B=>B.convertLinearToSRGB(),[es]:gh},Ng={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(B){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!B},get workingColorSpace(){return pg},set workingColorSpace(B){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(B,A,I){if(this.enabled===!1||A===I||!A||!I)return B;const g=Ch[A],C=Bh[I];if(g===void 0||C===void 0)throw new Error(`Unsupported color space conversion, "${A}" to "${I}".`);return C(g(B))},fromWorkingColorSpace:function(B,A){return this.convert(B,this.workingColorSpace,A)},toWorkingColorSpace:function(B,A){return this.convert(B,A,this.workingColorSpace)}};let eB;class ss{static getDataURL(A){if(/^data:/i.test(A.src)||typeof HTMLCanvasElement>"u")return A.src;let I;if(A instanceof HTMLCanvasElement)I=A;else{eB===void 0&&(eB=kQ("canvas")),eB.width=A.width,eB.height=A.height;const g=eB.getContext("2d");A instanceof ImageData?g.putImageData(A,0,0):g.drawImage(A,0,0,A.width,A.height),I=eB}return I.width>2048||I.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",A),I.toDataURL("image/jpeg",.6)):I.toDataURL("image/png")}static sRGBToLinear(A){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const I=kQ("canvas");I.width=A.width,I.height=A.height;const g=I.getContext("2d");g.drawImage(A,0,0,A.width,A.height);const C=g.getImageData(0,0,A.width,A.height),Q=C.data;for(let E=0;E<Q.length;E++)Q[E]=dB(Q[E]/255)*255;return g.putImageData(C,0,0),I}else if(A.data){const I=A.data.slice(0);for(let g=0;g<I.length;g++)I instanceof Uint8Array||I instanceof Uint8ClampedArray?I[g]=Math.floor(dB(I[g]/255)*255):I[g]=dB(I[g]);return{data:I,width:A.width,height:A.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),A}}let Qh=0;class Ds{constructor(A=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qh++}),this.uuid=qg(),this.data=A,this.version=0}set needsUpdate(A){A===!0&&this.version++}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.images[this.uuid]!==void 0)return A.images[this.uuid];const g={uuid:this.uuid,url:""},C=this.data;if(C!==null){let Q;if(Array.isArray(C)){Q=[];for(let E=0,i=C.length;E<i;E++)C[E].isDataTexture?Q.push(ri(C[E].image)):Q.push(ri(C[E]))}else Q=ri(C);g.url=Q}return I||(A.images[this.uuid]=g),g}}function ri(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap?ss.getDataURL(B):B.data?{data:Array.from(B.data),width:B.width,height:B.height,type:B.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Eh=0;class YI extends EB{constructor(A=YI.DEFAULT_IMAGE,I=YI.DEFAULT_MAPPING,g=kg,C=kg,Q=Eg,E=IB,i=lg,o=MC,e=YI.DEFAULT_ANISOTROPY,t=_C){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=qg(),this.name="",this.source=new Ds(A),this.mipmaps=[],this.mapping=I,this.channel=0,this.wrapS=g,this.wrapT=C,this.magFilter=Q,this.minFilter=E,this.anisotropy=e,this.format=i,this.internalFormat=null,this.type=o,this.offset=new dA(0,0),this.repeat=new dA(1,1),this.center=new dA(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new PA,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof t=="string"?this.colorSpace=t:(wQ("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===oC?qA:_C),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(A=null){this.source.data=A}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(A){return this.name=A.name,this.source=A.source,this.mipmaps=A.mipmaps.slice(0),this.mapping=A.mapping,this.channel=A.channel,this.wrapS=A.wrapS,this.wrapT=A.wrapT,this.magFilter=A.magFilter,this.minFilter=A.minFilter,this.anisotropy=A.anisotropy,this.format=A.format,this.internalFormat=A.internalFormat,this.type=A.type,this.offset.copy(A.offset),this.repeat.copy(A.repeat),this.center.copy(A.center),this.rotation=A.rotation,this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrix.copy(A.matrix),this.generateMipmaps=A.generateMipmaps,this.premultiplyAlpha=A.premultiplyAlpha,this.flipY=A.flipY,this.unpackAlignment=A.unpackAlignment,this.colorSpace=A.colorSpace,this.userData=JSON.parse(JSON.stringify(A.userData)),this.needsUpdate=!0,this}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.textures[this.uuid]!==void 0)return A.textures[this.uuid];const g={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(A).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(g.userData=this.userData),I||(A.textures[this.uuid]=g),g}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(A){if(this.mapping!==$a)return A;if(A.applyMatrix3(this.matrix),A.x<0||A.x>1)switch(this.wrapS){case TB:A.x=A.x-Math.floor(A.x);break;case kg:A.x=A.x<0?0:1;break;case yE:Math.abs(Math.floor(A.x)%2)===1?A.x=Math.ceil(A.x)-A.x:A.x=A.x-Math.floor(A.x);break}if(A.y<0||A.y>1)switch(this.wrapT){case TB:A.y=A.y-Math.floor(A.y);break;case kg:A.y=A.y<0?0:1;break;case yE:Math.abs(Math.floor(A.y)%2)===1?A.y=Math.ceil(A.y)-A.y:A.y=A.y-Math.floor(A.y);break}return this.flipY&&(A.y=1-A.y),A}set needsUpdate(A){A===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return wQ("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===qA?oC:No}set encoding(A){wQ("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=A===oC?qA:_C}}YI.DEFAULT_IMAGE=null;YI.DEFAULT_MAPPING=$a;YI.DEFAULT_ANISOTROPY=1;class DI{constructor(A=0,I=0,g=0,C=1){DI.prototype.isVector4=!0,this.x=A,this.y=I,this.z=g,this.w=C}get width(){return this.z}set width(A){this.z=A}get height(){return this.w}set height(A){this.w=A}set(A,I,g,C){return this.x=A,this.y=I,this.z=g,this.w=C,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this.w=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setW(A){return this.w=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;case 3:this.w=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=A.w!==void 0?A.w:1,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this.w+=A.w,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this.w+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this.w=A.w+I.w,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this.w+=A.w*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this.w-=A.w,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this.w-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this.w=A.w-I.w,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this.w*=A.w,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this.w*=A,this}applyMatrix4(A){const I=this.x,g=this.y,C=this.z,Q=this.w,E=A.elements;return this.x=E[0]*I+E[4]*g+E[8]*C+E[12]*Q,this.y=E[1]*I+E[5]*g+E[9]*C+E[13]*Q,this.z=E[2]*I+E[6]*g+E[10]*C+E[14]*Q,this.w=E[3]*I+E[7]*g+E[11]*C+E[15]*Q,this}divideScalar(A){return this.multiplyScalar(1/A)}setAxisAngleFromQuaternion(A){this.w=2*Math.acos(A.w);const I=Math.sqrt(1-A.w*A.w);return I<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=A.x/I,this.y=A.y/I,this.z=A.z/I),this}setAxisAngleFromRotationMatrix(A){let I,g,C,Q;const o=A.elements,e=o[0],t=o[4],a=o[8],s=o[1],n=o[5],r=o[9],G=o[2],h=o[6],D=o[10];if(Math.abs(t-s)<.01&&Math.abs(a-G)<.01&&Math.abs(r-h)<.01){if(Math.abs(t+s)<.1&&Math.abs(a+G)<.1&&Math.abs(r+h)<.1&&Math.abs(e+n+D-3)<.1)return this.set(1,0,0,0),this;I=Math.PI;const w=(e+1)/2,k=(n+1)/2,M=(D+1)/2,U=(t+s)/4,q=(a+G)/4,F=(r+h)/4;return w>k&&w>M?w<.01?(g=0,C=.707106781,Q=.707106781):(g=Math.sqrt(w),C=U/g,Q=q/g):k>M?k<.01?(g=.707106781,C=0,Q=.707106781):(C=Math.sqrt(k),g=U/C,Q=F/C):M<.01?(g=.707106781,C=.707106781,Q=0):(Q=Math.sqrt(M),g=q/Q,C=F/Q),this.set(g,C,Q,I),this}let S=Math.sqrt((h-r)*(h-r)+(a-G)*(a-G)+(s-t)*(s-t));return Math.abs(S)<.001&&(S=1),this.x=(h-r)/S,this.y=(a-G)/S,this.z=(s-t)/S,this.w=Math.acos((e+n+D-1)/2),this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this.w=Math.min(this.w,A.w),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this.w=Math.max(this.w,A.w),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this.w=Math.max(A.w,Math.min(I.w,this.w)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this.w=Math.max(A,Math.min(I,this.w)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z+this.w*A.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this.w+=(A.w-this.w)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this.w=A.w+(I.w-A.w)*g,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z&&A.w===this.w}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this.w=A[I+3],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A[I+3]=this.w,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this.w=A.getW(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class KC extends EB{constructor(A=1,I=1,g={}){super(),this.isWebGLRenderTarget=!0,this.width=A,this.height=I,this.depth=1,this.scissor=new DI(0,0,A,I),this.scissorTest=!1,this.viewport=new DI(0,0,A,I);const C={width:A,height:I,depth:1};g.encoding!==void 0&&(wQ("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),g.colorSpace=g.encoding===oC?qA:_C),this.texture=new YI(C,g.mapping,g.wrapS,g.wrapT,g.magFilter,g.minFilter,g.format,g.type,g.anisotropy,g.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=g.generateMipmaps!==void 0?g.generateMipmaps:!1,this.texture.internalFormat=g.internalFormat!==void 0?g.internalFormat:null,this.texture.minFilter=g.minFilter!==void 0?g.minFilter:Eg,this.depthBuffer=g.depthBuffer!==void 0?g.depthBuffer:!0,this.stencilBuffer=g.stencilBuffer!==void 0?g.stencilBuffer:!1,this.depthTexture=g.depthTexture!==void 0?g.depthTexture:null,this.samples=g.samples!==void 0?g.samples:0}setSize(A,I,g=1){(this.width!==A||this.height!==I||this.depth!==g)&&(this.width=A,this.height=I,this.depth=g,this.texture.image.width=A,this.texture.image.height=I,this.texture.image.depth=g,this.dispose()),this.viewport.set(0,0,A,I),this.scissor.set(0,0,A,I)}clone(){return new this.constructor().copy(this)}copy(A){this.width=A.width,this.height=A.height,this.depth=A.depth,this.scissor.copy(A.scissor),this.scissorTest=A.scissorTest,this.viewport.copy(A.viewport),this.texture=A.texture.clone(),this.texture.isRenderTargetTexture=!0;const I=Object.assign({},A.texture.image);return this.texture.source=new Ds(I),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.samples=A.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ns extends YI{constructor(A=null,I=1,g=1,C=1){super(null),this.isDataArrayTexture=!0,this.image={data:A,width:I,height:g,depth:C},this.magFilter=PI,this.minFilter=PI,this.wrapR=kg,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ih extends YI{constructor(A=null,I=1,g=1,C=1){super(null),this.isData3DTexture=!0,this.image={data:A,width:I,height:g,depth:C},this.magFilter=PI,this.minFilter=PI,this.wrapR=kg,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qg{constructor(A=0,I=0,g=0,C=1){this.isQuaternion=!0,this._x=A,this._y=I,this._z=g,this._w=C}static slerpFlat(A,I,g,C,Q,E,i){let o=g[C+0],e=g[C+1],t=g[C+2],a=g[C+3];const s=Q[E+0],n=Q[E+1],r=Q[E+2],G=Q[E+3];if(i===0){A[I+0]=o,A[I+1]=e,A[I+2]=t,A[I+3]=a;return}if(i===1){A[I+0]=s,A[I+1]=n,A[I+2]=r,A[I+3]=G;return}if(a!==G||o!==s||e!==n||t!==r){let h=1-i;const D=o*s+e*n+t*r+a*G,S=D>=0?1:-1,w=1-D*D;if(w>Number.EPSILON){const M=Math.sqrt(w),U=Math.atan2(M,D*S);h=Math.sin(h*U)/M,i=Math.sin(i*U)/M}const k=i*S;if(o=o*h+s*k,e=e*h+n*k,t=t*h+r*k,a=a*h+G*k,h===1-i){const M=1/Math.sqrt(o*o+e*e+t*t+a*a);o*=M,e*=M,t*=M,a*=M}}A[I]=o,A[I+1]=e,A[I+2]=t,A[I+3]=a}static multiplyQuaternionsFlat(A,I,g,C,Q,E){const i=g[C],o=g[C+1],e=g[C+2],t=g[C+3],a=Q[E],s=Q[E+1],n=Q[E+2],r=Q[E+3];return A[I]=i*r+t*a+o*n-e*s,A[I+1]=o*r+t*s+e*a-i*n,A[I+2]=e*r+t*n+i*s-o*a,A[I+3]=t*r-i*a-o*s-e*n,A}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get w(){return this._w}set w(A){this._w=A,this._onChangeCallback()}set(A,I,g,C){return this._x=A,this._y=I,this._z=g,this._w=C,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(A){return this._x=A.x,this._y=A.y,this._z=A.z,this._w=A.w,this._onChangeCallback(),this}setFromEuler(A,I){const g=A._x,C=A._y,Q=A._z,E=A._order,i=Math.cos,o=Math.sin,e=i(g/2),t=i(C/2),a=i(Q/2),s=o(g/2),n=o(C/2),r=o(Q/2);switch(E){case"XYZ":this._x=s*t*a+e*n*r,this._y=e*n*a-s*t*r,this._z=e*t*r+s*n*a,this._w=e*t*a-s*n*r;break;case"YXZ":this._x=s*t*a+e*n*r,this._y=e*n*a-s*t*r,this._z=e*t*r-s*n*a,this._w=e*t*a+s*n*r;break;case"ZXY":this._x=s*t*a-e*n*r,this._y=e*n*a+s*t*r,this._z=e*t*r+s*n*a,this._w=e*t*a-s*n*r;break;case"ZYX":this._x=s*t*a-e*n*r,this._y=e*n*a+s*t*r,this._z=e*t*r-s*n*a,this._w=e*t*a+s*n*r;break;case"YZX":this._x=s*t*a+e*n*r,this._y=e*n*a+s*t*r,this._z=e*t*r-s*n*a,this._w=e*t*a-s*n*r;break;case"XZY":this._x=s*t*a-e*n*r,this._y=e*n*a-s*t*r,this._z=e*t*r+s*n*a,this._w=e*t*a+s*n*r;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+E)}return I!==!1&&this._onChangeCallback(),this}setFromAxisAngle(A,I){const g=I/2,C=Math.sin(g);return this._x=A.x*C,this._y=A.y*C,this._z=A.z*C,this._w=Math.cos(g),this._onChangeCallback(),this}setFromRotationMatrix(A){const I=A.elements,g=I[0],C=I[4],Q=I[8],E=I[1],i=I[5],o=I[9],e=I[2],t=I[6],a=I[10],s=g+i+a;if(s>0){const n=.5/Math.sqrt(s+1);this._w=.25/n,this._x=(t-o)*n,this._y=(Q-e)*n,this._z=(E-C)*n}else if(g>i&&g>a){const n=2*Math.sqrt(1+g-i-a);this._w=(t-o)/n,this._x=.25*n,this._y=(C+E)/n,this._z=(Q+e)/n}else if(i>a){const n=2*Math.sqrt(1+i-g-a);this._w=(Q-e)/n,this._x=(C+E)/n,this._y=.25*n,this._z=(o+t)/n}else{const n=2*Math.sqrt(1+a-g-i);this._w=(E-C)/n,this._x=(Q+e)/n,this._y=(o+t)/n,this._z=.25*n}return this._onChangeCallback(),this}setFromUnitVectors(A,I){let g=A.dot(I)+1;return g<Number.EPSILON?(g=0,Math.abs(A.x)>Math.abs(A.z)?(this._x=-A.y,this._y=A.x,this._z=0,this._w=g):(this._x=0,this._y=-A.z,this._z=A.y,this._w=g)):(this._x=A.y*I.z-A.z*I.y,this._y=A.z*I.x-A.x*I.z,this._z=A.x*I.y-A.y*I.x,this._w=g),this.normalize()}angleTo(A){return 2*Math.acos(Math.abs(vI(this.dot(A),-1,1)))}rotateTowards(A,I){const g=this.angleTo(A);if(g===0)return this;const C=Math.min(1,I/g);return this.slerp(A,C),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(A){return this._x*A._x+this._y*A._y+this._z*A._z+this._w*A._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let A=this.length();return A===0?(this._x=0,this._y=0,this._z=0,this._w=1):(A=1/A,this._x=this._x*A,this._y=this._y*A,this._z=this._z*A,this._w=this._w*A),this._onChangeCallback(),this}multiply(A){return this.multiplyQuaternions(this,A)}premultiply(A){return this.multiplyQuaternions(A,this)}multiplyQuaternions(A,I){const g=A._x,C=A._y,Q=A._z,E=A._w,i=I._x,o=I._y,e=I._z,t=I._w;return this._x=g*t+E*i+C*e-Q*o,this._y=C*t+E*o+Q*i-g*e,this._z=Q*t+E*e+g*o-C*i,this._w=E*t-g*i-C*o-Q*e,this._onChangeCallback(),this}slerp(A,I){if(I===0)return this;if(I===1)return this.copy(A);const g=this._x,C=this._y,Q=this._z,E=this._w;let i=E*A._w+g*A._x+C*A._y+Q*A._z;if(i<0?(this._w=-A._w,this._x=-A._x,this._y=-A._y,this._z=-A._z,i=-i):this.copy(A),i>=1)return this._w=E,this._x=g,this._y=C,this._z=Q,this;const o=1-i*i;if(o<=Number.EPSILON){const n=1-I;return this._w=n*E+I*this._w,this._x=n*g+I*this._x,this._y=n*C+I*this._y,this._z=n*Q+I*this._z,this.normalize(),this._onChangeCallback(),this}const e=Math.sqrt(o),t=Math.atan2(e,i),a=Math.sin((1-I)*t)/e,s=Math.sin(I*t)/e;return this._w=E*a+this._w*s,this._x=g*a+this._x*s,this._y=C*a+this._y*s,this._z=Q*a+this._z*s,this._onChangeCallback(),this}slerpQuaternions(A,I,g){return this.copy(A).slerp(I,g)}random(){const A=Math.random(),I=Math.sqrt(1-A),g=Math.sqrt(A),C=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random();return this.set(I*Math.cos(C),g*Math.sin(Q),g*Math.cos(Q),I*Math.sin(C))}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._w===this._w}fromArray(A,I=0){return this._x=A[I],this._y=A[I+1],this._z=A[I+2],this._w=A[I+3],this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._w,A}fromBufferAttribute(A,I){return this._x=A.getX(I),this._y=A.getY(I),this._z=A.getZ(I),this._w=A.getW(I),this}toJSON(){return this.toArray()}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class f{constructor(A=0,I=0,g=0){f.prototype.isVector3=!0,this.x=A,this.y=I,this.z=g}set(A,I,g){return g===void 0&&(g=this.z),this.x=A,this.y=I,this.z=g,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this}multiplyVectors(A,I){return this.x=A.x*I.x,this.y=A.y*I.y,this.z=A.z*I.z,this}applyEuler(A){return this.applyQuaternion(At.setFromEuler(A))}applyAxisAngle(A,I){return this.applyQuaternion(At.setFromAxisAngle(A,I))}applyMatrix3(A){const I=this.x,g=this.y,C=this.z,Q=A.elements;return this.x=Q[0]*I+Q[3]*g+Q[6]*C,this.y=Q[1]*I+Q[4]*g+Q[7]*C,this.z=Q[2]*I+Q[5]*g+Q[8]*C,this}applyNormalMatrix(A){return this.applyMatrix3(A).normalize()}applyMatrix4(A){const I=this.x,g=this.y,C=this.z,Q=A.elements,E=1/(Q[3]*I+Q[7]*g+Q[11]*C+Q[15]);return this.x=(Q[0]*I+Q[4]*g+Q[8]*C+Q[12])*E,this.y=(Q[1]*I+Q[5]*g+Q[9]*C+Q[13])*E,this.z=(Q[2]*I+Q[6]*g+Q[10]*C+Q[14])*E,this}applyQuaternion(A){const I=this.x,g=this.y,C=this.z,Q=A.x,E=A.y,i=A.z,o=A.w,e=o*I+E*C-i*g,t=o*g+i*I-Q*C,a=o*C+Q*g-E*I,s=-Q*I-E*g-i*C;return this.x=e*o+s*-Q+t*-i-a*-E,this.y=t*o+s*-E+a*-Q-e*-i,this.z=a*o+s*-i+e*-E-t*-Q,this}project(A){return this.applyMatrix4(A.matrixWorldInverse).applyMatrix4(A.projectionMatrix)}unproject(A){return this.applyMatrix4(A.projectionMatrixInverse).applyMatrix4(A.matrixWorld)}transformDirection(A){const I=this.x,g=this.y,C=this.z,Q=A.elements;return this.x=Q[0]*I+Q[4]*g+Q[8]*C,this.y=Q[1]*I+Q[5]*g+Q[9]*C,this.z=Q[2]*I+Q[6]*g+Q[10]*C,this.normalize()}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this}divideScalar(A){return this.multiplyScalar(1/A)}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this}cross(A){return this.crossVectors(this,A)}crossVectors(A,I){const g=A.x,C=A.y,Q=A.z,E=I.x,i=I.y,o=I.z;return this.x=C*o-Q*i,this.y=Q*E-g*o,this.z=g*i-C*E,this}projectOnVector(A){const I=A.lengthSq();if(I===0)return this.set(0,0,0);const g=A.dot(this)/I;return this.copy(A).multiplyScalar(g)}projectOnPlane(A){return ci.copy(this).projectOnVector(A),this.sub(ci)}reflect(A){return this.sub(ci.copy(A).multiplyScalar(2*this.dot(A)))}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const g=this.dot(A)/I;return Math.acos(vI(g,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y,C=this.z-A.z;return I*I+g*g+C*C}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)+Math.abs(this.z-A.z)}setFromSpherical(A){return this.setFromSphericalCoords(A.radius,A.phi,A.theta)}setFromSphericalCoords(A,I,g){const C=Math.sin(I)*A;return this.x=C*Math.sin(g),this.y=Math.cos(I)*A,this.z=C*Math.cos(g),this}setFromCylindrical(A){return this.setFromCylindricalCoords(A.radius,A.theta,A.y)}setFromCylindricalCoords(A,I,g){return this.x=A*Math.sin(I),this.y=g,this.z=A*Math.cos(I),this}setFromMatrixPosition(A){const I=A.elements;return this.x=I[12],this.y=I[13],this.z=I[14],this}setFromMatrixScale(A){const I=this.setFromMatrixColumn(A,0).length(),g=this.setFromMatrixColumn(A,1).length(),C=this.setFromMatrixColumn(A,2).length();return this.x=I,this.y=g,this.z=C,this}setFromMatrixColumn(A,I){return this.fromArray(A.elements,I*4)}setFromMatrix3Column(A,I){return this.fromArray(A.elements,I*3)}setFromEuler(A){return this.x=A._x,this.y=A._y,this.z=A._z,this}setFromColor(A){return this.x=A.r,this.y=A.g,this.z=A.b,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const A=(Math.random()-.5)*2,I=Math.random()*Math.PI*2,g=Math.sqrt(1-A**2);return this.x=g*Math.cos(I),this.y=g*Math.sin(I),this.z=A,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ci=new f,At=new Qg;class sC{constructor(A=new f(1/0,1/0,1/0),I=new f(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=A,this.max=I}set(A,I){return this.min.copy(A),this.max.copy(I),this}setFromArray(A){this.makeEmpty();for(let I=0,g=A.length;I<g;I+=3)this.expandByPoint(Xg.fromArray(A,I));return this}setFromBufferAttribute(A){this.makeEmpty();for(let I=0,g=A.count;I<g;I++)this.expandByPoint(Xg.fromBufferAttribute(A,I));return this}setFromPoints(A){this.makeEmpty();for(let I=0,g=A.length;I<g;I++)this.expandByPoint(A[I]);return this}setFromCenterAndSize(A,I){const g=Xg.copy(I).multiplyScalar(.5);return this.min.copy(A).sub(g),this.max.copy(A).add(g),this}setFromObject(A,I=!1){return this.makeEmpty(),this.expandByObject(A,I)}clone(){return new this.constructor().copy(this)}copy(A){return this.min.copy(A.min),this.max.copy(A.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(A){return this.isEmpty()?A.set(0,0,0):A.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(A){return this.isEmpty()?A.set(0,0,0):A.subVectors(this.max,this.min)}expandByPoint(A){return this.min.min(A),this.max.max(A),this}expandByVector(A){return this.min.sub(A),this.max.add(A),this}expandByScalar(A){return this.min.addScalar(-A),this.max.addScalar(A),this}expandByObject(A,I=!1){if(A.updateWorldMatrix(!1,!1),A.boundingBox!==void 0)A.boundingBox===null&&A.computeBoundingBox(),tB.copy(A.boundingBox),tB.applyMatrix4(A.matrixWorld),this.union(tB);else{const C=A.geometry;if(C!==void 0)if(I&&C.attributes!==void 0&&C.attributes.position!==void 0){const Q=C.attributes.position;for(let E=0,i=Q.count;E<i;E++)Xg.fromBufferAttribute(Q,E).applyMatrix4(A.matrixWorld),this.expandByPoint(Xg)}else C.boundingBox===null&&C.computeBoundingBox(),tB.copy(C.boundingBox),tB.applyMatrix4(A.matrixWorld),this.union(tB)}const g=A.children;for(let C=0,Q=g.length;C<Q;C++)this.expandByObject(g[C],I);return this}containsPoint(A){return!(A.x<this.min.x||A.x>this.max.x||A.y<this.min.y||A.y>this.max.y||A.z<this.min.z||A.z>this.max.z)}containsBox(A){return this.min.x<=A.min.x&&A.max.x<=this.max.x&&this.min.y<=A.min.y&&A.max.y<=this.max.y&&this.min.z<=A.min.z&&A.max.z<=this.max.z}getParameter(A,I){return I.set((A.x-this.min.x)/(this.max.x-this.min.x),(A.y-this.min.y)/(this.max.y-this.min.y),(A.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(A){return!(A.max.x<this.min.x||A.min.x>this.max.x||A.max.y<this.min.y||A.min.y>this.max.y||A.max.z<this.min.z||A.min.z>this.max.z)}intersectsSphere(A){return this.clampPoint(A.center,Xg),Xg.distanceToSquared(A.center)<=A.radius*A.radius}intersectsPlane(A){let I,g;return A.normal.x>0?(I=A.normal.x*this.min.x,g=A.normal.x*this.max.x):(I=A.normal.x*this.max.x,g=A.normal.x*this.min.x),A.normal.y>0?(I+=A.normal.y*this.min.y,g+=A.normal.y*this.max.y):(I+=A.normal.y*this.max.y,g+=A.normal.y*this.min.y),A.normal.z>0?(I+=A.normal.z*this.min.z,g+=A.normal.z*this.max.z):(I+=A.normal.z*this.max.z,g+=A.normal.z*this.min.z),I<=-A.constant&&g>=-A.constant}intersectsTriangle(A){if(this.isEmpty())return!1;this.getCenter(iQ),OQ.subVectors(this.max,iQ),aB.subVectors(A.a,iQ),sB.subVectors(A.b,iQ),DB.subVectors(A.c,iQ),DC.subVectors(sB,aB),nC.subVectors(DB,sB),LC.subVectors(aB,DB);let I=[0,-DC.z,DC.y,0,-nC.z,nC.y,0,-LC.z,LC.y,DC.z,0,-DC.x,nC.z,0,-nC.x,LC.z,0,-LC.x,-DC.y,DC.x,0,-nC.y,nC.x,0,-LC.y,LC.x,0];return!wi(I,aB,sB,DB,OQ)||(I=[1,0,0,0,1,0,0,0,1],!wi(I,aB,sB,DB,OQ))?!1:(ZQ.crossVectors(DC,nC),I=[ZQ.x,ZQ.y,ZQ.z],wi(I,aB,sB,DB,OQ))}clampPoint(A,I){return I.copy(A).clamp(this.min,this.max)}distanceToPoint(A){return this.clampPoint(A,Xg).distanceTo(A)}getBoundingSphere(A){return this.isEmpty()?A.makeEmpty():(this.getCenter(A.center),A.radius=this.getSize(Xg).length()*.5),A}intersect(A){return this.min.max(A.min),this.max.min(A.max),this.isEmpty()&&this.makeEmpty(),this}union(A){return this.min.min(A.min),this.max.max(A.max),this}applyMatrix4(A){return this.isEmpty()?this:(_g[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(A),_g[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(A),_g[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(A),_g[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(A),_g[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(A),_g[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(A),_g[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(A),_g[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(A),this.setFromPoints(_g),this)}translate(A){return this.min.add(A),this.max.add(A),this}equals(A){return A.min.equals(this.min)&&A.max.equals(this.max)}}const _g=[new f,new f,new f,new f,new f,new f,new f,new f],Xg=new f,tB=new sC,aB=new f,sB=new f,DB=new f,DC=new f,nC=new f,LC=new f,iQ=new f,OQ=new f,ZQ=new f,uC=new f;function wi(B,A,I,g,C){for(let Q=0,E=B.length-3;Q<=E;Q+=3){uC.fromArray(B,Q);const i=C.x*Math.abs(uC.x)+C.y*Math.abs(uC.y)+C.z*Math.abs(uC.z),o=A.dot(uC),e=I.dot(uC),t=g.dot(uC);if(Math.max(-Math.max(o,e,t),Math.min(o,e,t))>i)return!1}return!0}const oh=new sC,oQ=new f,Gi=new f;class vg{constructor(A=new f,I=-1){this.center=A,this.radius=I}set(A,I){return this.center.copy(A),this.radius=I,this}setFromPoints(A,I){const g=this.center;I!==void 0?g.copy(I):oh.setFromPoints(A).getCenter(g);let C=0;for(let Q=0,E=A.length;Q<E;Q++)C=Math.max(C,g.distanceToSquared(A[Q]));return this.radius=Math.sqrt(C),this}copy(A){return this.center.copy(A.center),this.radius=A.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(A){return A.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(A){return A.distanceTo(this.center)-this.radius}intersectsSphere(A){const I=this.radius+A.radius;return A.center.distanceToSquared(this.center)<=I*I}intersectsBox(A){return A.intersectsSphere(this)}intersectsPlane(A){return Math.abs(A.distanceToPoint(this.center))<=this.radius}clampPoint(A,I){const g=this.center.distanceToSquared(A);return I.copy(A),g>this.radius*this.radius&&(I.sub(this.center).normalize(),I.multiplyScalar(this.radius).add(this.center)),I}getBoundingBox(A){return this.isEmpty()?(A.makeEmpty(),A):(A.set(this.center,this.center),A.expandByScalar(this.radius),A)}applyMatrix4(A){return this.center.applyMatrix4(A),this.radius=this.radius*A.getMaxScaleOnAxis(),this}translate(A){return this.center.add(A),this}expandByPoint(A){if(this.isEmpty())return this.center.copy(A),this.radius=0,this;oQ.subVectors(A,this.center);const I=oQ.lengthSq();if(I>this.radius*this.radius){const g=Math.sqrt(I),C=(g-this.radius)*.5;this.center.addScaledVector(oQ,C/g),this.radius+=C}return this}union(A){return A.isEmpty()?this:this.isEmpty()?(this.copy(A),this):(this.center.equals(A.center)===!0?this.radius=Math.max(this.radius,A.radius):(Gi.subVectors(A.center,this.center).setLength(A.radius),this.expandByPoint(oQ.copy(A.center).add(Gi)),this.expandByPoint(oQ.copy(A.center).sub(Gi))),this)}equals(A){return A.center.equals(this.center)&&A.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zg=new f,Si=new f,PQ=new f,hC=new f,ki=new f,vQ=new f,li=new f;class YQ{constructor(A=new f,I=new f(0,0,-1)){this.origin=A,this.direction=I}set(A,I){return this.origin.copy(A),this.direction.copy(I),this}copy(A){return this.origin.copy(A.origin),this.direction.copy(A.direction),this}at(A,I){return I.copy(this.origin).addScaledVector(this.direction,A)}lookAt(A){return this.direction.copy(A).sub(this.origin).normalize(),this}recast(A){return this.origin.copy(this.at(A,zg)),this}closestPointToPoint(A,I){I.subVectors(A,this.origin);const g=I.dot(this.direction);return g<0?I.copy(this.origin):I.copy(this.origin).addScaledVector(this.direction,g)}distanceToPoint(A){return Math.sqrt(this.distanceSqToPoint(A))}distanceSqToPoint(A){const I=zg.subVectors(A,this.origin).dot(this.direction);return I<0?this.origin.distanceToSquared(A):(zg.copy(this.origin).addScaledVector(this.direction,I),zg.distanceToSquared(A))}distanceSqToSegment(A,I,g,C){Si.copy(A).add(I).multiplyScalar(.5),PQ.copy(I).sub(A).normalize(),hC.copy(this.origin).sub(Si);const Q=A.distanceTo(I)*.5,E=-this.direction.dot(PQ),i=hC.dot(this.direction),o=-hC.dot(PQ),e=hC.lengthSq(),t=Math.abs(1-E*E);let a,s,n,r;if(t>0)if(a=E*o-i,s=E*i-o,r=Q*t,a>=0)if(s>=-r)if(s<=r){const G=1/t;a*=G,s*=G,n=a*(a+E*s+2*i)+s*(E*a+s+2*o)+e}else s=Q,a=Math.max(0,-(E*s+i)),n=-a*a+s*(s+2*o)+e;else s=-Q,a=Math.max(0,-(E*s+i)),n=-a*a+s*(s+2*o)+e;else s<=-r?(a=Math.max(0,-(-E*Q+i)),s=a>0?-Q:Math.min(Math.max(-Q,-o),Q),n=-a*a+s*(s+2*o)+e):s<=r?(a=0,s=Math.min(Math.max(-Q,-o),Q),n=s*(s+2*o)+e):(a=Math.max(0,-(E*Q+i)),s=a>0?Q:Math.min(Math.max(-Q,-o),Q),n=-a*a+s*(s+2*o)+e);else s=E>0?-Q:Q,a=Math.max(0,-(E*s+i)),n=-a*a+s*(s+2*o)+e;return g&&g.copy(this.origin).addScaledVector(this.direction,a),C&&C.copy(Si).addScaledVector(PQ,s),n}intersectSphere(A,I){zg.subVectors(A.center,this.origin);const g=zg.dot(this.direction),C=zg.dot(zg)-g*g,Q=A.radius*A.radius;if(C>Q)return null;const E=Math.sqrt(Q-C),i=g-E,o=g+E;return o<0?null:i<0?this.at(o,I):this.at(i,I)}intersectsSphere(A){return this.distanceSqToPoint(A.center)<=A.radius*A.radius}distanceToPlane(A){const I=A.normal.dot(this.direction);if(I===0)return A.distanceToPoint(this.origin)===0?0:null;const g=-(this.origin.dot(A.normal)+A.constant)/I;return g>=0?g:null}intersectPlane(A,I){const g=this.distanceToPlane(A);return g===null?null:this.at(g,I)}intersectsPlane(A){const I=A.distanceToPoint(this.origin);return I===0||A.normal.dot(this.direction)*I<0}intersectBox(A,I){let g,C,Q,E,i,o;const e=1/this.direction.x,t=1/this.direction.y,a=1/this.direction.z,s=this.origin;return e>=0?(g=(A.min.x-s.x)*e,C=(A.max.x-s.x)*e):(g=(A.max.x-s.x)*e,C=(A.min.x-s.x)*e),t>=0?(Q=(A.min.y-s.y)*t,E=(A.max.y-s.y)*t):(Q=(A.max.y-s.y)*t,E=(A.min.y-s.y)*t),g>E||Q>C||((Q>g||isNaN(g))&&(g=Q),(E<C||isNaN(C))&&(C=E),a>=0?(i=(A.min.z-s.z)*a,o=(A.max.z-s.z)*a):(i=(A.max.z-s.z)*a,o=(A.min.z-s.z)*a),g>o||i>C)||((i>g||g!==g)&&(g=i),(o<C||C!==C)&&(C=o),C<0)?null:this.at(g>=0?g:C,I)}intersectsBox(A){return this.intersectBox(A,zg)!==null}intersectTriangle(A,I,g,C,Q){ki.subVectors(I,A),vQ.subVectors(g,A),li.crossVectors(ki,vQ);let E=this.direction.dot(li),i;if(E>0){if(C)return null;i=1}else if(E<0)i=-1,E=-E;else return null;hC.subVectors(this.origin,A);const o=i*this.direction.dot(vQ.crossVectors(hC,vQ));if(o<0)return null;const e=i*this.direction.dot(ki.cross(hC));if(e<0||o+e>E)return null;const t=-i*hC.dot(li);return t<0?null:this.at(t/E,Q)}applyMatrix4(A){return this.origin.applyMatrix4(A),this.direction.transformDirection(A),this}equals(A){return A.origin.equals(this.origin)&&A.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class TA{constructor(A,I,g,C,Q,E,i,o,e,t,a,s,n,r,G,h){TA.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],A!==void 0&&this.set(A,I,g,C,Q,E,i,o,e,t,a,s,n,r,G,h)}set(A,I,g,C,Q,E,i,o,e,t,a,s,n,r,G,h){const D=this.elements;return D[0]=A,D[4]=I,D[8]=g,D[12]=C,D[1]=Q,D[5]=E,D[9]=i,D[13]=o,D[2]=e,D[6]=t,D[10]=a,D[14]=s,D[3]=n,D[7]=r,D[11]=G,D[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new TA().fromArray(this.elements)}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],I[9]=g[9],I[10]=g[10],I[11]=g[11],I[12]=g[12],I[13]=g[13],I[14]=g[14],I[15]=g[15],this}copyPosition(A){const I=this.elements,g=A.elements;return I[12]=g[12],I[13]=g[13],I[14]=g[14],this}setFromMatrix3(A){const I=A.elements;return this.set(I[0],I[3],I[6],0,I[1],I[4],I[7],0,I[2],I[5],I[8],0,0,0,0,1),this}extractBasis(A,I,g){return A.setFromMatrixColumn(this,0),I.setFromMatrixColumn(this,1),g.setFromMatrixColumn(this,2),this}makeBasis(A,I,g){return this.set(A.x,I.x,g.x,0,A.y,I.y,g.y,0,A.z,I.z,g.z,0,0,0,0,1),this}extractRotation(A){const I=this.elements,g=A.elements,C=1/nB.setFromMatrixColumn(A,0).length(),Q=1/nB.setFromMatrixColumn(A,1).length(),E=1/nB.setFromMatrixColumn(A,2).length();return I[0]=g[0]*C,I[1]=g[1]*C,I[2]=g[2]*C,I[3]=0,I[4]=g[4]*Q,I[5]=g[5]*Q,I[6]=g[6]*Q,I[7]=0,I[8]=g[8]*E,I[9]=g[9]*E,I[10]=g[10]*E,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromEuler(A){const I=this.elements,g=A.x,C=A.y,Q=A.z,E=Math.cos(g),i=Math.sin(g),o=Math.cos(C),e=Math.sin(C),t=Math.cos(Q),a=Math.sin(Q);if(A.order==="XYZ"){const s=E*t,n=E*a,r=i*t,G=i*a;I[0]=o*t,I[4]=-o*a,I[8]=e,I[1]=n+r*e,I[5]=s-G*e,I[9]=-i*o,I[2]=G-s*e,I[6]=r+n*e,I[10]=E*o}else if(A.order==="YXZ"){const s=o*t,n=o*a,r=e*t,G=e*a;I[0]=s+G*i,I[4]=r*i-n,I[8]=E*e,I[1]=E*a,I[5]=E*t,I[9]=-i,I[2]=n*i-r,I[6]=G+s*i,I[10]=E*o}else if(A.order==="ZXY"){const s=o*t,n=o*a,r=e*t,G=e*a;I[0]=s-G*i,I[4]=-E*a,I[8]=r+n*i,I[1]=n+r*i,I[5]=E*t,I[9]=G-s*i,I[2]=-E*e,I[6]=i,I[10]=E*o}else if(A.order==="ZYX"){const s=E*t,n=E*a,r=i*t,G=i*a;I[0]=o*t,I[4]=r*e-n,I[8]=s*e+G,I[1]=o*a,I[5]=G*e+s,I[9]=n*e-r,I[2]=-e,I[6]=i*o,I[10]=E*o}else if(A.order==="YZX"){const s=E*o,n=E*e,r=i*o,G=i*e;I[0]=o*t,I[4]=G-s*a,I[8]=r*a+n,I[1]=a,I[5]=E*t,I[9]=-i*t,I[2]=-e*t,I[6]=n*a+r,I[10]=s-G*a}else if(A.order==="XZY"){const s=E*o,n=E*e,r=i*o,G=i*e;I[0]=o*t,I[4]=-a,I[8]=e*t,I[1]=s*a+G,I[5]=E*t,I[9]=n*a-r,I[2]=r*a-n,I[6]=i*t,I[10]=G*a+s}return I[3]=0,I[7]=0,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromQuaternion(A){return this.compose(eh,A,th)}lookAt(A,I,g){const C=this.elements;return Dg.subVectors(A,I),Dg.lengthSq()===0&&(Dg.z=1),Dg.normalize(),rC.crossVectors(g,Dg),rC.lengthSq()===0&&(Math.abs(g.z)===1?Dg.x+=1e-4:Dg.z+=1e-4,Dg.normalize(),rC.crossVectors(g,Dg)),rC.normalize(),WQ.crossVectors(Dg,rC),C[0]=rC.x,C[4]=WQ.x,C[8]=Dg.x,C[1]=rC.y,C[5]=WQ.y,C[9]=Dg.y,C[2]=rC.z,C[6]=WQ.z,C[10]=Dg.z,this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,C=I.elements,Q=this.elements,E=g[0],i=g[4],o=g[8],e=g[12],t=g[1],a=g[5],s=g[9],n=g[13],r=g[2],G=g[6],h=g[10],D=g[14],S=g[3],w=g[7],k=g[11],M=g[15],U=C[0],q=C[4],F=C[8],l=C[12],y=C[1],O=C[5],u=C[9],d=C[13],P=C[2],H=C[6],CA=C[10],V=C[14],b=C[3],IA=C[7],BA=C[11],_=C[15];return Q[0]=E*U+i*y+o*P+e*b,Q[4]=E*q+i*O+o*H+e*IA,Q[8]=E*F+i*u+o*CA+e*BA,Q[12]=E*l+i*d+o*V+e*_,Q[1]=t*U+a*y+s*P+n*b,Q[5]=t*q+a*O+s*H+n*IA,Q[9]=t*F+a*u+s*CA+n*BA,Q[13]=t*l+a*d+s*V+n*_,Q[2]=r*U+G*y+h*P+D*b,Q[6]=r*q+G*O+h*H+D*IA,Q[10]=r*F+G*u+h*CA+D*BA,Q[14]=r*l+G*d+h*V+D*_,Q[3]=S*U+w*y+k*P+M*b,Q[7]=S*q+w*O+k*H+M*IA,Q[11]=S*F+w*u+k*CA+M*BA,Q[15]=S*l+w*d+k*V+M*_,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[4]*=A,I[8]*=A,I[12]*=A,I[1]*=A,I[5]*=A,I[9]*=A,I[13]*=A,I[2]*=A,I[6]*=A,I[10]*=A,I[14]*=A,I[3]*=A,I[7]*=A,I[11]*=A,I[15]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[4],C=A[8],Q=A[12],E=A[1],i=A[5],o=A[9],e=A[13],t=A[2],a=A[6],s=A[10],n=A[14],r=A[3],G=A[7],h=A[11],D=A[15];return r*(+Q*o*a-C*e*a-Q*i*s+g*e*s+C*i*n-g*o*n)+G*(+I*o*n-I*e*s+Q*E*s-C*E*n+C*e*t-Q*o*t)+h*(+I*e*a-I*i*n-Q*E*a+g*E*n+Q*i*t-g*e*t)+D*(-C*i*t-I*o*a+I*i*s+C*E*a-g*E*s+g*o*t)}transpose(){const A=this.elements;let I;return I=A[1],A[1]=A[4],A[4]=I,I=A[2],A[2]=A[8],A[8]=I,I=A[6],A[6]=A[9],A[9]=I,I=A[3],A[3]=A[12],A[12]=I,I=A[7],A[7]=A[13],A[13]=I,I=A[11],A[11]=A[14],A[14]=I,this}setPosition(A,I,g){const C=this.elements;return A.isVector3?(C[12]=A.x,C[13]=A.y,C[14]=A.z):(C[12]=A,C[13]=I,C[14]=g),this}invert(){const A=this.elements,I=A[0],g=A[1],C=A[2],Q=A[3],E=A[4],i=A[5],o=A[6],e=A[7],t=A[8],a=A[9],s=A[10],n=A[11],r=A[12],G=A[13],h=A[14],D=A[15],S=a*h*e-G*s*e+G*o*n-i*h*n-a*o*D+i*s*D,w=r*s*e-t*h*e-r*o*n+E*h*n+t*o*D-E*s*D,k=t*G*e-r*a*e+r*i*n-E*G*n-t*i*D+E*a*D,M=r*a*o-t*G*o-r*i*s+E*G*s+t*i*h-E*a*h,U=I*S+g*w+C*k+Q*M;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const q=1/U;return A[0]=S*q,A[1]=(G*s*Q-a*h*Q-G*C*n+g*h*n+a*C*D-g*s*D)*q,A[2]=(i*h*Q-G*o*Q+G*C*e-g*h*e-i*C*D+g*o*D)*q,A[3]=(a*o*Q-i*s*Q-a*C*e+g*s*e+i*C*n-g*o*n)*q,A[4]=w*q,A[5]=(t*h*Q-r*s*Q+r*C*n-I*h*n-t*C*D+I*s*D)*q,A[6]=(r*o*Q-E*h*Q-r*C*e+I*h*e+E*C*D-I*o*D)*q,A[7]=(E*s*Q-t*o*Q+t*C*e-I*s*e-E*C*n+I*o*n)*q,A[8]=k*q,A[9]=(r*a*Q-t*G*Q-r*g*n+I*G*n+t*g*D-I*a*D)*q,A[10]=(E*G*Q-r*i*Q+r*g*e-I*G*e-E*g*D+I*i*D)*q,A[11]=(t*i*Q-E*a*Q-t*g*e+I*a*e+E*g*n-I*i*n)*q,A[12]=M*q,A[13]=(t*G*C-r*a*C+r*g*s-I*G*s-t*g*h+I*a*h)*q,A[14]=(r*i*C-E*G*C-r*g*o+I*G*o+E*g*h-I*i*h)*q,A[15]=(E*a*C-t*i*C+t*g*o-I*a*o-E*g*s+I*i*s)*q,this}scale(A){const I=this.elements,g=A.x,C=A.y,Q=A.z;return I[0]*=g,I[4]*=C,I[8]*=Q,I[1]*=g,I[5]*=C,I[9]*=Q,I[2]*=g,I[6]*=C,I[10]*=Q,I[3]*=g,I[7]*=C,I[11]*=Q,this}getMaxScaleOnAxis(){const A=this.elements,I=A[0]*A[0]+A[1]*A[1]+A[2]*A[2],g=A[4]*A[4]+A[5]*A[5]+A[6]*A[6],C=A[8]*A[8]+A[9]*A[9]+A[10]*A[10];return Math.sqrt(Math.max(I,g,C))}makeTranslation(A,I,g){return A.isVector3?this.set(1,0,0,A.x,0,1,0,A.y,0,0,1,A.z,0,0,0,1):this.set(1,0,0,A,0,1,0,I,0,0,1,g,0,0,0,1),this}makeRotationX(A){const I=Math.cos(A),g=Math.sin(A);return this.set(1,0,0,0,0,I,-g,0,0,g,I,0,0,0,0,1),this}makeRotationY(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,0,g,0,0,1,0,0,-g,0,I,0,0,0,0,1),this}makeRotationZ(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,0,g,I,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(A,I){const g=Math.cos(I),C=Math.sin(I),Q=1-g,E=A.x,i=A.y,o=A.z,e=Q*E,t=Q*i;return this.set(e*E+g,e*i-C*o,e*o+C*i,0,e*i+C*o,t*i+g,t*o-C*E,0,e*o-C*i,t*o+C*E,Q*o*o+g,0,0,0,0,1),this}makeScale(A,I,g){return this.set(A,0,0,0,0,I,0,0,0,0,g,0,0,0,0,1),this}makeShear(A,I,g,C,Q,E){return this.set(1,g,Q,0,A,1,E,0,I,C,1,0,0,0,0,1),this}compose(A,I,g){const C=this.elements,Q=I._x,E=I._y,i=I._z,o=I._w,e=Q+Q,t=E+E,a=i+i,s=Q*e,n=Q*t,r=Q*a,G=E*t,h=E*a,D=i*a,S=o*e,w=o*t,k=o*a,M=g.x,U=g.y,q=g.z;return C[0]=(1-(G+D))*M,C[1]=(n+k)*M,C[2]=(r-w)*M,C[3]=0,C[4]=(n-k)*U,C[5]=(1-(s+D))*U,C[6]=(h+S)*U,C[7]=0,C[8]=(r+w)*q,C[9]=(h-S)*q,C[10]=(1-(s+G))*q,C[11]=0,C[12]=A.x,C[13]=A.y,C[14]=A.z,C[15]=1,this}decompose(A,I,g){const C=this.elements;let Q=nB.set(C[0],C[1],C[2]).length();const E=nB.set(C[4],C[5],C[6]).length(),i=nB.set(C[8],C[9],C[10]).length();this.determinant()<0&&(Q=-Q),A.x=C[12],A.y=C[13],A.z=C[14],Kg.copy(this);const e=1/Q,t=1/E,a=1/i;return Kg.elements[0]*=e,Kg.elements[1]*=e,Kg.elements[2]*=e,Kg.elements[4]*=t,Kg.elements[5]*=t,Kg.elements[6]*=t,Kg.elements[8]*=a,Kg.elements[9]*=a,Kg.elements[10]*=a,I.setFromRotationMatrix(Kg),g.x=Q,g.y=E,g.z=i,this}makePerspective(A,I,g,C,Q,E,i=EC){const o=this.elements,e=2*Q/(I-A),t=2*Q/(g-C),a=(I+A)/(I-A),s=(g+C)/(g-C);let n,r;if(i===EC)n=-(E+Q)/(E-Q),r=-2*E*Q/(E-Q);else if(i===UE)n=-E/(E-Q),r=-E*Q/(E-Q);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+i);return o[0]=e,o[4]=0,o[8]=a,o[12]=0,o[1]=0,o[5]=t,o[9]=s,o[13]=0,o[2]=0,o[6]=0,o[10]=n,o[14]=r,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(A,I,g,C,Q,E,i=EC){const o=this.elements,e=1/(I-A),t=1/(g-C),a=1/(E-Q),s=(I+A)*e,n=(g+C)*t;let r,G;if(i===EC)r=(E+Q)*a,G=-2*a;else if(i===UE)r=Q*a,G=-1*a;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+i);return o[0]=2*e,o[4]=0,o[8]=0,o[12]=-s,o[1]=0,o[5]=2*t,o[9]=0,o[13]=-n,o[2]=0,o[6]=0,o[10]=G,o[14]=-r,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(A){const I=this.elements,g=A.elements;for(let C=0;C<16;C++)if(I[C]!==g[C])return!1;return!0}fromArray(A,I=0){for(let g=0;g<16;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A[I+9]=g[9],A[I+10]=g[10],A[I+11]=g[11],A[I+12]=g[12],A[I+13]=g[13],A[I+14]=g[14],A[I+15]=g[15],A}}const nB=new f,Kg=new TA,eh=new f(0,0,0),th=new f(1,1,1),rC=new f,WQ=new f,Dg=new f,It=new TA,gt=new Qg;class $B{constructor(A=0,I=0,g=0,C=$B.DEFAULT_ORDER){this.isEuler=!0,this._x=A,this._y=I,this._z=g,this._order=C}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get order(){return this._order}set order(A){this._order=A,this._onChangeCallback()}set(A,I,g,C=this._order){return this._x=A,this._y=I,this._z=g,this._order=C,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(A){return this._x=A._x,this._y=A._y,this._z=A._z,this._order=A._order,this._onChangeCallback(),this}setFromRotationMatrix(A,I=this._order,g=!0){const C=A.elements,Q=C[0],E=C[4],i=C[8],o=C[1],e=C[5],t=C[9],a=C[2],s=C[6],n=C[10];switch(I){case"XYZ":this._y=Math.asin(vI(i,-1,1)),Math.abs(i)<.9999999?(this._x=Math.atan2(-t,n),this._z=Math.atan2(-E,Q)):(this._x=Math.atan2(s,e),this._z=0);break;case"YXZ":this._x=Math.asin(-vI(t,-1,1)),Math.abs(t)<.9999999?(this._y=Math.atan2(i,n),this._z=Math.atan2(o,e)):(this._y=Math.atan2(-a,Q),this._z=0);break;case"ZXY":this._x=Math.asin(vI(s,-1,1)),Math.abs(s)<.9999999?(this._y=Math.atan2(-a,n),this._z=Math.atan2(-E,e)):(this._y=0,this._z=Math.atan2(o,Q));break;case"ZYX":this._y=Math.asin(-vI(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(s,n),this._z=Math.atan2(o,Q)):(this._x=0,this._z=Math.atan2(-E,e));break;case"YZX":this._z=Math.asin(vI(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-t,e),this._y=Math.atan2(-a,Q)):(this._x=0,this._y=Math.atan2(i,n));break;case"XZY":this._z=Math.asin(-vI(E,-1,1)),Math.abs(E)<.9999999?(this._x=Math.atan2(s,e),this._y=Math.atan2(i,Q)):(this._x=Math.atan2(-t,n),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+I)}return this._order=I,g===!0&&this._onChangeCallback(),this}setFromQuaternion(A,I,g){return It.makeRotationFromQuaternion(A),this.setFromRotationMatrix(It,I,g)}setFromVector3(A,I=this._order){return this.set(A.x,A.y,A.z,I)}reorder(A){return gt.setFromEuler(this),this.setFromQuaternion(gt,A)}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._order===this._order}fromArray(A){return this._x=A[0],this._y=A[1],this._z=A[2],A[3]!==void 0&&(this._order=A[3]),this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._order,A}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$B.DEFAULT_ORDER="XYZ";class Jo{constructor(){this.mask=1}set(A){this.mask=(1<<A|0)>>>0}enable(A){this.mask|=1<<A|0}enableAll(){this.mask=-1}toggle(A){this.mask^=1<<A|0}disable(A){this.mask&=~(1<<A|0)}disableAll(){this.mask=0}test(A){return(this.mask&A.mask)!==0}isEnabled(A){return(this.mask&(1<<A|0))!==0}}let ah=0;const Ct=new f,hB=new Qg,$g=new TA,jQ=new f,eQ=new f,sh=new f,Dh=new Qg,Bt=new f(1,0,0),Qt=new f(0,1,0),Et=new f(0,0,1),nh={type:"added"},it={type:"removed"};class iI extends EB{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ah++}),this.uuid=qg(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=iI.DEFAULT_UP.clone();const A=new f,I=new $B,g=new Qg,C=new f(1,1,1);function Q(){g.setFromEuler(I,!1)}function E(){I.setFromQuaternion(g,void 0,!1)}I._onChange(Q),g._onChange(E),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:A},rotation:{configurable:!0,enumerable:!0,value:I},quaternion:{configurable:!0,enumerable:!0,value:g},scale:{configurable:!0,enumerable:!0,value:C},modelViewMatrix:{value:new TA},normalMatrix:{value:new PA}}),this.matrix=new TA,this.matrixWorld=new TA,this.matrixAutoUpdate=iI.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=iI.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Jo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(A){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(A),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(A){return this.quaternion.premultiply(A),this}setRotationFromAxisAngle(A,I){this.quaternion.setFromAxisAngle(A,I)}setRotationFromEuler(A){this.quaternion.setFromEuler(A,!0)}setRotationFromMatrix(A){this.quaternion.setFromRotationMatrix(A)}setRotationFromQuaternion(A){this.quaternion.copy(A)}rotateOnAxis(A,I){return hB.setFromAxisAngle(A,I),this.quaternion.multiply(hB),this}rotateOnWorldAxis(A,I){return hB.setFromAxisAngle(A,I),this.quaternion.premultiply(hB),this}rotateX(A){return this.rotateOnAxis(Bt,A)}rotateY(A){return this.rotateOnAxis(Qt,A)}rotateZ(A){return this.rotateOnAxis(Et,A)}translateOnAxis(A,I){return Ct.copy(A).applyQuaternion(this.quaternion),this.position.add(Ct.multiplyScalar(I)),this}translateX(A){return this.translateOnAxis(Bt,A)}translateY(A){return this.translateOnAxis(Qt,A)}translateZ(A){return this.translateOnAxis(Et,A)}localToWorld(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(this.matrixWorld)}worldToLocal(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4($g.copy(this.matrixWorld).invert())}lookAt(A,I,g){A.isVector3?jQ.copy(A):jQ.set(A,I,g);const C=this.parent;this.updateWorldMatrix(!0,!1),eQ.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$g.lookAt(eQ,jQ,this.up):$g.lookAt(jQ,eQ,this.up),this.quaternion.setFromRotationMatrix($g),C&&($g.extractRotation(C.matrixWorld),hB.setFromRotationMatrix($g),this.quaternion.premultiply(hB.invert()))}add(A){if(arguments.length>1){for(let I=0;I<arguments.length;I++)this.add(arguments[I]);return this}return A===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",A),this):(A&&A.isObject3D?(A.parent!==null&&A.parent.remove(A),A.parent=this,this.children.push(A),A.dispatchEvent(nh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",A),this)}remove(A){if(arguments.length>1){for(let g=0;g<arguments.length;g++)this.remove(arguments[g]);return this}const I=this.children.indexOf(A);return I!==-1&&(A.parent=null,this.children.splice(I,1),A.dispatchEvent(it)),this}removeFromParent(){const A=this.parent;return A!==null&&A.remove(this),this}clear(){for(let A=0;A<this.children.length;A++){const I=this.children[A];I.parent=null,I.dispatchEvent(it)}return this.children.length=0,this}attach(A){return this.updateWorldMatrix(!0,!1),$g.copy(this.matrixWorld).invert(),A.parent!==null&&(A.parent.updateWorldMatrix(!0,!1),$g.multiply(A.parent.matrixWorld)),A.applyMatrix4($g),this.add(A),A.updateWorldMatrix(!1,!0),this}getObjectById(A){return this.getObjectByProperty("id",A)}getObjectByName(A){return this.getObjectByProperty("name",A)}getObjectByProperty(A,I){if(this[A]===I)return this;for(let g=0,C=this.children.length;g<C;g++){const E=this.children[g].getObjectByProperty(A,I);if(E!==void 0)return E}}getObjectsByProperty(A,I){let g=[];this[A]===I&&g.push(this);for(let C=0,Q=this.children.length;C<Q;C++){const E=this.children[C].getObjectsByProperty(A,I);E.length>0&&(g=g.concat(E))}return g}getWorldPosition(A){return this.updateWorldMatrix(!0,!1),A.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eQ,A,sh),A}getWorldScale(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eQ,Dh,A),A}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const I=this.matrixWorld.elements;return A.set(I[8],I[9],I[10]).normalize()}raycast(){}traverse(A){A(this);const I=this.children;for(let g=0,C=I.length;g<C;g++)I[g].traverse(A)}traverseVisible(A){if(this.visible===!1)return;A(this);const I=this.children;for(let g=0,C=I.length;g<C;g++)I[g].traverseVisible(A)}traverseAncestors(A){const I=this.parent;I!==null&&(A(I),I.traverseAncestors(A))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(A){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||A)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,A=!0);const I=this.children;for(let g=0,C=I.length;g<C;g++){const Q=I[g];(Q.matrixWorldAutoUpdate===!0||A===!0)&&Q.updateMatrixWorld(A)}}updateWorldMatrix(A,I){const g=this.parent;if(A===!0&&g!==null&&g.matrixWorldAutoUpdate===!0&&g.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),I===!0){const C=this.children;for(let Q=0,E=C.length;Q<E;Q++){const i=C[Q];i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!1,!0)}}}toJSON(A){const I=A===void 0||typeof A=="string",g={};I&&(A={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},g.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const C={};C.uuid=this.uuid,C.type=this.type,this.name!==""&&(C.name=this.name),this.castShadow===!0&&(C.castShadow=!0),this.receiveShadow===!0&&(C.receiveShadow=!0),this.visible===!1&&(C.visible=!1),this.frustumCulled===!1&&(C.frustumCulled=!1),this.renderOrder!==0&&(C.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(C.userData=this.userData),C.layers=this.layers.mask,C.matrix=this.matrix.toArray(),C.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(C.matrixAutoUpdate=!1),this.isInstancedMesh&&(C.type="InstancedMesh",C.count=this.count,C.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(C.instanceColor=this.instanceColor.toJSON()));function Q(i,o){return i[o.uuid]===void 0&&(i[o.uuid]=o.toJSON(A)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?C.background=this.background.toJSON():this.background.isTexture&&(C.background=this.background.toJSON(A).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(C.environment=this.environment.toJSON(A).uuid);else if(this.isMesh||this.isLine||this.isPoints){C.geometry=Q(A.geometries,this.geometry);const i=this.geometry.parameters;if(i!==void 0&&i.shapes!==void 0){const o=i.shapes;if(Array.isArray(o))for(let e=0,t=o.length;e<t;e++){const a=o[e];Q(A.shapes,a)}else Q(A.shapes,o)}}if(this.isSkinnedMesh&&(C.bindMode=this.bindMode,C.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(Q(A.skeletons,this.skeleton),C.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const i=[];for(let o=0,e=this.material.length;o<e;o++)i.push(Q(A.materials,this.material[o]));C.material=i}else C.material=Q(A.materials,this.material);if(this.children.length>0){C.children=[];for(let i=0;i<this.children.length;i++)C.children.push(this.children[i].toJSON(A).object)}if(this.animations.length>0){C.animations=[];for(let i=0;i<this.animations.length;i++){const o=this.animations[i];C.animations.push(Q(A.animations,o))}}if(I){const i=E(A.geometries),o=E(A.materials),e=E(A.textures),t=E(A.images),a=E(A.shapes),s=E(A.skeletons),n=E(A.animations),r=E(A.nodes);i.length>0&&(g.geometries=i),o.length>0&&(g.materials=o),e.length>0&&(g.textures=e),t.length>0&&(g.images=t),a.length>0&&(g.shapes=a),s.length>0&&(g.skeletons=s),n.length>0&&(g.animations=n),r.length>0&&(g.nodes=r)}return g.object=C,g;function E(i){const o=[];for(const e in i){const t=i[e];delete t.metadata,o.push(t)}return o}}clone(A){return new this.constructor().copy(this,A)}copy(A,I=!0){if(this.name=A.name,this.up.copy(A.up),this.position.copy(A.position),this.rotation.order=A.rotation.order,this.quaternion.copy(A.quaternion),this.scale.copy(A.scale),this.matrix.copy(A.matrix),this.matrixWorld.copy(A.matrixWorld),this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrixWorldNeedsUpdate=A.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=A.matrixWorldAutoUpdate,this.layers.mask=A.layers.mask,this.visible=A.visible,this.castShadow=A.castShadow,this.receiveShadow=A.receiveShadow,this.frustumCulled=A.frustumCulled,this.renderOrder=A.renderOrder,this.animations=A.animations,this.userData=JSON.parse(JSON.stringify(A.userData)),I===!0)for(let g=0;g<A.children.length;g++){const C=A.children[g];this.add(C.clone())}return this}}iI.DEFAULT_UP=new f(0,1,0);iI.DEFAULT_MATRIX_AUTO_UPDATE=!0;iI.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Jg=new f,AC=new f,Mi=new f,IC=new f,rB=new f,cB=new f,ot=new f,yi=new f,Ui=new f,Ni=new f;let VQ=!1;class Rg{constructor(A=new f,I=new f,g=new f){this.a=A,this.b=I,this.c=g}static getNormal(A,I,g,C){C.subVectors(g,I),Jg.subVectors(A,I),C.cross(Jg);const Q=C.lengthSq();return Q>0?C.multiplyScalar(1/Math.sqrt(Q)):C.set(0,0,0)}static getBarycoord(A,I,g,C,Q){Jg.subVectors(C,I),AC.subVectors(g,I),Mi.subVectors(A,I);const E=Jg.dot(Jg),i=Jg.dot(AC),o=Jg.dot(Mi),e=AC.dot(AC),t=AC.dot(Mi),a=E*e-i*i;if(a===0)return Q.set(-2,-1,-1);const s=1/a,n=(e*o-i*t)*s,r=(E*t-i*o)*s;return Q.set(1-n-r,r,n)}static containsPoint(A,I,g,C){return this.getBarycoord(A,I,g,C,IC),IC.x>=0&&IC.y>=0&&IC.x+IC.y<=1}static getUV(A,I,g,C,Q,E,i,o){return VQ===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),VQ=!0),this.getInterpolation(A,I,g,C,Q,E,i,o)}static getInterpolation(A,I,g,C,Q,E,i,o){return this.getBarycoord(A,I,g,C,IC),o.setScalar(0),o.addScaledVector(Q,IC.x),o.addScaledVector(E,IC.y),o.addScaledVector(i,IC.z),o}static isFrontFacing(A,I,g,C){return Jg.subVectors(g,I),AC.subVectors(A,I),Jg.cross(AC).dot(C)<0}set(A,I,g){return this.a.copy(A),this.b.copy(I),this.c.copy(g),this}setFromPointsAndIndices(A,I,g,C){return this.a.copy(A[I]),this.b.copy(A[g]),this.c.copy(A[C]),this}setFromAttributeAndIndices(A,I,g,C){return this.a.fromBufferAttribute(A,I),this.b.fromBufferAttribute(A,g),this.c.fromBufferAttribute(A,C),this}clone(){return new this.constructor().copy(this)}copy(A){return this.a.copy(A.a),this.b.copy(A.b),this.c.copy(A.c),this}getArea(){return Jg.subVectors(this.c,this.b),AC.subVectors(this.a,this.b),Jg.cross(AC).length()*.5}getMidpoint(A){return A.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(A){return Rg.getNormal(this.a,this.b,this.c,A)}getPlane(A){return A.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(A,I){return Rg.getBarycoord(A,this.a,this.b,this.c,I)}getUV(A,I,g,C,Q){return VQ===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),VQ=!0),Rg.getInterpolation(A,this.a,this.b,this.c,I,g,C,Q)}getInterpolation(A,I,g,C,Q){return Rg.getInterpolation(A,this.a,this.b,this.c,I,g,C,Q)}containsPoint(A){return Rg.containsPoint(A,this.a,this.b,this.c)}isFrontFacing(A){return Rg.isFrontFacing(this.a,this.b,this.c,A)}intersectsBox(A){return A.intersectsTriangle(this)}closestPointToPoint(A,I){const g=this.a,C=this.b,Q=this.c;let E,i;rB.subVectors(C,g),cB.subVectors(Q,g),yi.subVectors(A,g);const o=rB.dot(yi),e=cB.dot(yi);if(o<=0&&e<=0)return I.copy(g);Ui.subVectors(A,C);const t=rB.dot(Ui),a=cB.dot(Ui);if(t>=0&&a<=t)return I.copy(C);const s=o*a-t*e;if(s<=0&&o>=0&&t<=0)return E=o/(o-t),I.copy(g).addScaledVector(rB,E);Ni.subVectors(A,Q);const n=rB.dot(Ni),r=cB.dot(Ni);if(r>=0&&n<=r)return I.copy(Q);const G=n*e-o*r;if(G<=0&&e>=0&&r<=0)return i=e/(e-r),I.copy(g).addScaledVector(cB,i);const h=t*r-n*a;if(h<=0&&a-t>=0&&n-r>=0)return ot.subVectors(Q,C),i=(a-t)/(a-t+(n-r)),I.copy(C).addScaledVector(ot,i);const D=1/(h+G+s);return E=G*D,i=s*D,I.copy(g).addScaledVector(rB,E).addScaledVector(cB,i)}equals(A){return A.a.equals(this.a)&&A.b.equals(this.b)&&A.c.equals(this.c)}}let hh=0;class Tg extends EB{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hh++}),this.uuid=qg(),this.name="",this.type="Material",this.blending=qB,this.side=eC,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Va,this.blendDst=_a,this.blendEquation=JB,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Vi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rn,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Di,this.stencilZFail=Di,this.stencilZPass=Di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(A){this._alphaTest>0!=A>0&&this.version++,this._alphaTest=A}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(A){if(A!==void 0)for(const I in A){const g=A[I];if(g===void 0){console.warn(`THREE.Material: parameter '${I}' has value of undefined.`);continue}const C=this[I];if(C===void 0){console.warn(`THREE.Material: '${I}' is not a property of THREE.${this.type}.`);continue}C&&C.isColor?C.set(g):C&&C.isVector3&&g&&g.isVector3?C.copy(g):this[I]=g}}toJSON(A){const I=A===void 0||typeof A=="string";I&&(A={textures:{},images:{}});const g={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};g.uuid=this.uuid,g.type=this.type,this.name!==""&&(g.name=this.name),this.color&&this.color.isColor&&(g.color=this.color.getHex()),this.roughness!==void 0&&(g.roughness=this.roughness),this.metalness!==void 0&&(g.metalness=this.metalness),this.sheen!==void 0&&(g.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(g.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(g.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(g.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(g.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(g.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(g.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(g.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(g.shininess=this.shininess),this.clearcoat!==void 0&&(g.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(g.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(g.clearcoatMap=this.clearcoatMap.toJSON(A).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(g.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(A).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(g.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(A).uuid,g.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(g.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(g.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(g.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(g.iridescenceMap=this.iridescenceMap.toJSON(A).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(g.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(A).uuid),this.anisotropy!==void 0&&(g.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(g.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(g.anisotropyMap=this.anisotropyMap.toJSON(A).uuid),this.map&&this.map.isTexture&&(g.map=this.map.toJSON(A).uuid),this.matcap&&this.matcap.isTexture&&(g.matcap=this.matcap.toJSON(A).uuid),this.alphaMap&&this.alphaMap.isTexture&&(g.alphaMap=this.alphaMap.toJSON(A).uuid),this.lightMap&&this.lightMap.isTexture&&(g.lightMap=this.lightMap.toJSON(A).uuid,g.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(g.aoMap=this.aoMap.toJSON(A).uuid,g.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(g.bumpMap=this.bumpMap.toJSON(A).uuid,g.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(g.normalMap=this.normalMap.toJSON(A).uuid,g.normalMapType=this.normalMapType,g.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(g.displacementMap=this.displacementMap.toJSON(A).uuid,g.displacementScale=this.displacementScale,g.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(g.roughnessMap=this.roughnessMap.toJSON(A).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(g.metalnessMap=this.metalnessMap.toJSON(A).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(g.emissiveMap=this.emissiveMap.toJSON(A).uuid),this.specularMap&&this.specularMap.isTexture&&(g.specularMap=this.specularMap.toJSON(A).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(g.specularIntensityMap=this.specularIntensityMap.toJSON(A).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(g.specularColorMap=this.specularColorMap.toJSON(A).uuid),this.envMap&&this.envMap.isTexture&&(g.envMap=this.envMap.toJSON(A).uuid,this.combine!==void 0&&(g.combine=this.combine)),this.envMapIntensity!==void 0&&(g.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(g.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(g.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(g.gradientMap=this.gradientMap.toJSON(A).uuid),this.transmission!==void 0&&(g.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(g.transmissionMap=this.transmissionMap.toJSON(A).uuid),this.thickness!==void 0&&(g.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(g.thicknessMap=this.thicknessMap.toJSON(A).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(g.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(g.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(g.size=this.size),this.shadowSide!==null&&(g.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(g.sizeAttenuation=this.sizeAttenuation),this.blending!==qB&&(g.blending=this.blending),this.side!==eC&&(g.side=this.side),this.vertexColors&&(g.vertexColors=!0),this.opacity<1&&(g.opacity=this.opacity),this.transparent===!0&&(g.transparent=this.transparent),g.depthFunc=this.depthFunc,g.depthTest=this.depthTest,g.depthWrite=this.depthWrite,g.colorWrite=this.colorWrite,g.stencilWrite=this.stencilWrite,g.stencilWriteMask=this.stencilWriteMask,g.stencilFunc=this.stencilFunc,g.stencilRef=this.stencilRef,g.stencilFuncMask=this.stencilFuncMask,g.stencilFail=this.stencilFail,g.stencilZFail=this.stencilZFail,g.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(g.rotation=this.rotation),this.polygonOffset===!0&&(g.polygonOffset=!0),this.polygonOffsetFactor!==0&&(g.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(g.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(g.linewidth=this.linewidth),this.dashSize!==void 0&&(g.dashSize=this.dashSize),this.gapSize!==void 0&&(g.gapSize=this.gapSize),this.scale!==void 0&&(g.scale=this.scale),this.dithering===!0&&(g.dithering=!0),this.alphaTest>0&&(g.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(g.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(g.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(g.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(g.wireframe=this.wireframe),this.wireframeLinewidth>1&&(g.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(g.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(g.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(g.flatShading=this.flatShading),this.visible===!1&&(g.visible=!1),this.toneMapped===!1&&(g.toneMapped=!1),this.fog===!1&&(g.fog=!1),Object.keys(this.userData).length>0&&(g.userData=this.userData);function C(Q){const E=[];for(const i in Q){const o=Q[i];delete o.metadata,E.push(o)}return E}if(I){const Q=C(A.textures),E=C(A.images);Q.length>0&&(g.textures=Q),E.length>0&&(g.images=E)}return g}clone(){return new this.constructor().copy(this)}copy(A){this.name=A.name,this.blending=A.blending,this.side=A.side,this.vertexColors=A.vertexColors,this.opacity=A.opacity,this.transparent=A.transparent,this.blendSrc=A.blendSrc,this.blendDst=A.blendDst,this.blendEquation=A.blendEquation,this.blendSrcAlpha=A.blendSrcAlpha,this.blendDstAlpha=A.blendDstAlpha,this.blendEquationAlpha=A.blendEquationAlpha,this.depthFunc=A.depthFunc,this.depthTest=A.depthTest,this.depthWrite=A.depthWrite,this.stencilWriteMask=A.stencilWriteMask,this.stencilFunc=A.stencilFunc,this.stencilRef=A.stencilRef,this.stencilFuncMask=A.stencilFuncMask,this.stencilFail=A.stencilFail,this.stencilZFail=A.stencilZFail,this.stencilZPass=A.stencilZPass,this.stencilWrite=A.stencilWrite;const I=A.clippingPlanes;let g=null;if(I!==null){const C=I.length;g=new Array(C);for(let Q=0;Q!==C;++Q)g[Q]=I[Q].clone()}return this.clippingPlanes=g,this.clipIntersection=A.clipIntersection,this.clipShadows=A.clipShadows,this.shadowSide=A.shadowSide,this.colorWrite=A.colorWrite,this.precision=A.precision,this.polygonOffset=A.polygonOffset,this.polygonOffsetFactor=A.polygonOffsetFactor,this.polygonOffsetUnits=A.polygonOffsetUnits,this.dithering=A.dithering,this.alphaTest=A.alphaTest,this.alphaToCoverage=A.alphaToCoverage,this.premultipliedAlpha=A.premultipliedAlpha,this.forceSinglePass=A.forceSinglePass,this.visible=A.visible,this.toneMapped=A.toneMapped,this.userData=JSON.parse(JSON.stringify(A.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(A){A===!0&&this.version++}}const hs={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fg={h:0,s:0,l:0},_Q={h:0,s:0,l:0};function Ki(B,A,I){return I<0&&(I+=1),I>1&&(I-=1),I<1/6?B+(A-B)*6*I:I<1/2?A:I<2/3?B+(A-B)*6*(2/3-I):B}class LA{constructor(A,I,g){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(A,I,g)}set(A,I,g){if(I===void 0&&g===void 0){const C=A;C&&C.isColor?this.copy(C):typeof C=="number"?this.setHex(C):typeof C=="string"&&this.setStyle(C)}else this.setRGB(A,I,g);return this}setScalar(A){return this.r=A,this.g=A,this.b=A,this}setHex(A,I=qA){return A=Math.floor(A),this.r=(A>>16&255)/255,this.g=(A>>8&255)/255,this.b=(A&255)/255,Ng.toWorkingColorSpace(this,I),this}setRGB(A,I,g,C=Ng.workingColorSpace){return this.r=A,this.g=I,this.b=g,Ng.toWorkingColorSpace(this,C),this}setHSL(A,I,g,C=Ng.workingColorSpace){if(A=Ko(A,1),I=vI(I,0,1),g=vI(g,0,1),I===0)this.r=this.g=this.b=g;else{const Q=g<=.5?g*(1+I):g+I-g*I,E=2*g-Q;this.r=Ki(E,Q,A+1/3),this.g=Ki(E,Q,A),this.b=Ki(E,Q,A-1/3)}return Ng.toWorkingColorSpace(this,C),this}setStyle(A,I=qA){function g(Q){Q!==void 0&&parseFloat(Q)<1&&console.warn("THREE.Color: Alpha component of "+A+" will be ignored.")}let C;if(C=/^(\w+)\(([^\)]*)\)/.exec(A)){let Q;const E=C[1],i=C[2];switch(E){case"rgb":case"rgba":if(Q=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return g(Q[4]),this.setRGB(Math.min(255,parseInt(Q[1],10))/255,Math.min(255,parseInt(Q[2],10))/255,Math.min(255,parseInt(Q[3],10))/255,I);if(Q=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return g(Q[4]),this.setRGB(Math.min(100,parseInt(Q[1],10))/100,Math.min(100,parseInt(Q[2],10))/100,Math.min(100,parseInt(Q[3],10))/100,I);break;case"hsl":case"hsla":if(Q=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return g(Q[4]),this.setHSL(parseFloat(Q[1])/360,parseFloat(Q[2])/100,parseFloat(Q[3])/100,I);break;default:console.warn("THREE.Color: Unknown color model "+A)}}else if(C=/^\#([A-Fa-f\d]+)$/.exec(A)){const Q=C[1],E=Q.length;if(E===3)return this.setRGB(parseInt(Q.charAt(0),16)/15,parseInt(Q.charAt(1),16)/15,parseInt(Q.charAt(2),16)/15,I);if(E===6)return this.setHex(parseInt(Q,16),I);console.warn("THREE.Color: Invalid hex color "+A)}else if(A&&A.length>0)return this.setColorName(A,I);return this}setColorName(A,I=qA){const g=hs[A.toLowerCase()];return g!==void 0?this.setHex(g,I):console.warn("THREE.Color: Unknown color "+A),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(A){return this.r=A.r,this.g=A.g,this.b=A.b,this}copySRGBToLinear(A){return this.r=dB(A.r),this.g=dB(A.g),this.b=dB(A.b),this}copyLinearToSRGB(A){return this.r=hi(A.r),this.g=hi(A.g),this.b=hi(A.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(A=qA){return Ng.fromWorkingColorSpace(VI.copy(this),A),Math.round(vI(VI.r*255,0,255))*65536+Math.round(vI(VI.g*255,0,255))*256+Math.round(vI(VI.b*255,0,255))}getHexString(A=qA){return("000000"+this.getHex(A).toString(16)).slice(-6)}getHSL(A,I=Ng.workingColorSpace){Ng.fromWorkingColorSpace(VI.copy(this),I);const g=VI.r,C=VI.g,Q=VI.b,E=Math.max(g,C,Q),i=Math.min(g,C,Q);let o,e;const t=(i+E)/2;if(i===E)o=0,e=0;else{const a=E-i;switch(e=t<=.5?a/(E+i):a/(2-E-i),E){case g:o=(C-Q)/a+(C<Q?6:0);break;case C:o=(Q-g)/a+2;break;case Q:o=(g-C)/a+4;break}o/=6}return A.h=o,A.s=e,A.l=t,A}getRGB(A,I=Ng.workingColorSpace){return Ng.fromWorkingColorSpace(VI.copy(this),I),A.r=VI.r,A.g=VI.g,A.b=VI.b,A}getStyle(A=qA){Ng.fromWorkingColorSpace(VI.copy(this),A);const I=VI.r,g=VI.g,C=VI.b;return A!==qA?`color(${A} ${I.toFixed(3)} ${g.toFixed(3)} ${C.toFixed(3)})`:`rgb(${Math.round(I*255)},${Math.round(g*255)},${Math.round(C*255)})`}offsetHSL(A,I,g){return this.getHSL(Fg),Fg.h+=A,Fg.s+=I,Fg.l+=g,this.setHSL(Fg.h,Fg.s,Fg.l),this}add(A){return this.r+=A.r,this.g+=A.g,this.b+=A.b,this}addColors(A,I){return this.r=A.r+I.r,this.g=A.g+I.g,this.b=A.b+I.b,this}addScalar(A){return this.r+=A,this.g+=A,this.b+=A,this}sub(A){return this.r=Math.max(0,this.r-A.r),this.g=Math.max(0,this.g-A.g),this.b=Math.max(0,this.b-A.b),this}multiply(A){return this.r*=A.r,this.g*=A.g,this.b*=A.b,this}multiplyScalar(A){return this.r*=A,this.g*=A,this.b*=A,this}lerp(A,I){return this.r+=(A.r-this.r)*I,this.g+=(A.g-this.g)*I,this.b+=(A.b-this.b)*I,this}lerpColors(A,I,g){return this.r=A.r+(I.r-A.r)*g,this.g=A.g+(I.g-A.g)*g,this.b=A.b+(I.b-A.b)*g,this}lerpHSL(A,I){this.getHSL(Fg),A.getHSL(_Q);const g=cQ(Fg.h,_Q.h,I),C=cQ(Fg.s,_Q.s,I),Q=cQ(Fg.l,_Q.l,I);return this.setHSL(g,C,Q),this}setFromVector3(A){return this.r=A.x,this.g=A.y,this.b=A.z,this}applyMatrix3(A){const I=this.r,g=this.g,C=this.b,Q=A.elements;return this.r=Q[0]*I+Q[3]*g+Q[6]*C,this.g=Q[1]*I+Q[4]*g+Q[7]*C,this.b=Q[2]*I+Q[5]*g+Q[8]*C,this}equals(A){return A.r===this.r&&A.g===this.g&&A.b===this.b}fromArray(A,I=0){return this.r=A[I],this.g=A[I+1],this.b=A[I+2],this}toArray(A=[],I=0){return A[I]=this.r,A[I+1]=this.g,A[I+2]=this.b,A}fromBufferAttribute(A,I){return this.r=A.getX(I),this.g=A.getY(I),this.b=A.getZ(I),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const VI=new LA;LA.NAMES=hs;class PC extends Tg{constructor(A){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new LA(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.fog=A.fog,this}}const pI=new f,XQ=new dA;class WI{constructor(A,I,g=!1){if(Array.isArray(A))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=A,this.itemSize=I,this.count=A!==void 0?A.length/I:0,this.normalized=g,this.usage=Ao,this.updateRange={offset:0,count:-1},this.gpuType=QC,this.version=0}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}setUsage(A){return this.usage=A,this}copy(A){return this.name=A.name,this.array=new A.array.constructor(A.array),this.itemSize=A.itemSize,this.count=A.count,this.normalized=A.normalized,this.usage=A.usage,this.gpuType=A.gpuType,this}copyAt(A,I,g){A*=this.itemSize,g*=I.itemSize;for(let C=0,Q=this.itemSize;C<Q;C++)this.array[A+C]=I.array[g+C];return this}copyArray(A){return this.array.set(A),this}applyMatrix3(A){if(this.itemSize===2)for(let I=0,g=this.count;I<g;I++)XQ.fromBufferAttribute(this,I),XQ.applyMatrix3(A),this.setXY(I,XQ.x,XQ.y);else if(this.itemSize===3)for(let I=0,g=this.count;I<g;I++)pI.fromBufferAttribute(this,I),pI.applyMatrix3(A),this.setXYZ(I,pI.x,pI.y,pI.z);return this}applyMatrix4(A){for(let I=0,g=this.count;I<g;I++)pI.fromBufferAttribute(this,I),pI.applyMatrix4(A),this.setXYZ(I,pI.x,pI.y,pI.z);return this}applyNormalMatrix(A){for(let I=0,g=this.count;I<g;I++)pI.fromBufferAttribute(this,I),pI.applyNormalMatrix(A),this.setXYZ(I,pI.x,pI.y,pI.z);return this}transformDirection(A){for(let I=0,g=this.count;I<g;I++)pI.fromBufferAttribute(this,I),pI.transformDirection(A),this.setXYZ(I,pI.x,pI.y,pI.z);return this}set(A,I=0){return this.array.set(A,I),this}getX(A){let I=this.array[A*this.itemSize];return this.normalized&&(I=iC(I,this.array)),I}setX(A,I){return this.normalized&&(I=sI(I,this.array)),this.array[A*this.itemSize]=I,this}getY(A){let I=this.array[A*this.itemSize+1];return this.normalized&&(I=iC(I,this.array)),I}setY(A,I){return this.normalized&&(I=sI(I,this.array)),this.array[A*this.itemSize+1]=I,this}getZ(A){let I=this.array[A*this.itemSize+2];return this.normalized&&(I=iC(I,this.array)),I}setZ(A,I){return this.normalized&&(I=sI(I,this.array)),this.array[A*this.itemSize+2]=I,this}getW(A){let I=this.array[A*this.itemSize+3];return this.normalized&&(I=iC(I,this.array)),I}setW(A,I){return this.normalized&&(I=sI(I,this.array)),this.array[A*this.itemSize+3]=I,this}setXY(A,I,g){return A*=this.itemSize,this.normalized&&(I=sI(I,this.array),g=sI(g,this.array)),this.array[A+0]=I,this.array[A+1]=g,this}setXYZ(A,I,g,C){return A*=this.itemSize,this.normalized&&(I=sI(I,this.array),g=sI(g,this.array),C=sI(C,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=C,this}setXYZW(A,I,g,C,Q){return A*=this.itemSize,this.normalized&&(I=sI(I,this.array),g=sI(g,this.array),C=sI(C,this.array),Q=sI(Q,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=C,this.array[A+3]=Q,this}onUpload(A){return this.onUploadCallback=A,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const A={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(A.name=this.name),this.usage!==Ao&&(A.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(A.updateRange=this.updateRange),A}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class rs extends WI{constructor(A,I,g){super(new Uint16Array(A),I,g)}}class cs extends WI{constructor(A,I,g){super(new Uint32Array(A),I,g)}}class dg extends WI{constructor(A,I,g){super(new Float32Array(A),I,g)}}let rh=0;const wg=new TA,Ji=new iI,wB=new f,ng=new sC,tQ=new sC,ZI=new f;class yg extends EB{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rh++}),this.uuid=qg(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(A){return Array.isArray(A)?this.index=new(as(A)?cs:rs)(A,1):this.index=A,this}getAttribute(A){return this.attributes[A]}setAttribute(A,I){return this.attributes[A]=I,this}deleteAttribute(A){return delete this.attributes[A],this}hasAttribute(A){return this.attributes[A]!==void 0}addGroup(A,I,g=0){this.groups.push({start:A,count:I,materialIndex:g})}clearGroups(){this.groups=[]}setDrawRange(A,I){this.drawRange.start=A,this.drawRange.count=I}applyMatrix4(A){const I=this.attributes.position;I!==void 0&&(I.applyMatrix4(A),I.needsUpdate=!0);const g=this.attributes.normal;if(g!==void 0){const Q=new PA().getNormalMatrix(A);g.applyNormalMatrix(Q),g.needsUpdate=!0}const C=this.attributes.tangent;return C!==void 0&&(C.transformDirection(A),C.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(A){return wg.makeRotationFromQuaternion(A),this.applyMatrix4(wg),this}rotateX(A){return wg.makeRotationX(A),this.applyMatrix4(wg),this}rotateY(A){return wg.makeRotationY(A),this.applyMatrix4(wg),this}rotateZ(A){return wg.makeRotationZ(A),this.applyMatrix4(wg),this}translate(A,I,g){return wg.makeTranslation(A,I,g),this.applyMatrix4(wg),this}scale(A,I,g){return wg.makeScale(A,I,g),this.applyMatrix4(wg),this}lookAt(A){return Ji.lookAt(A),Ji.updateMatrix(),this.applyMatrix4(Ji.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wB).negate(),this.translate(wB.x,wB.y,wB.z),this}setFromPoints(A){const I=[];for(let g=0,C=A.length;g<C;g++){const Q=A[g];I.push(Q.x,Q.y,Q.z||0)}return this.setAttribute("position",new dg(I,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sC);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new f(-1/0,-1/0,-1/0),new f(1/0,1/0,1/0));return}if(A!==void 0){if(this.boundingBox.setFromBufferAttribute(A),I)for(let g=0,C=I.length;g<C;g++){const Q=I[g];ng.setFromBufferAttribute(Q),this.morphTargetsRelative?(ZI.addVectors(this.boundingBox.min,ng.min),this.boundingBox.expandByPoint(ZI),ZI.addVectors(this.boundingBox.max,ng.max),this.boundingBox.expandByPoint(ZI)):(this.boundingBox.expandByPoint(ng.min),this.boundingBox.expandByPoint(ng.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vg);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new f,1/0);return}if(A){const g=this.boundingSphere.center;if(ng.setFromBufferAttribute(A),I)for(let Q=0,E=I.length;Q<E;Q++){const i=I[Q];tQ.setFromBufferAttribute(i),this.morphTargetsRelative?(ZI.addVectors(ng.min,tQ.min),ng.expandByPoint(ZI),ZI.addVectors(ng.max,tQ.max),ng.expandByPoint(ZI)):(ng.expandByPoint(tQ.min),ng.expandByPoint(tQ.max))}ng.getCenter(g);let C=0;for(let Q=0,E=A.count;Q<E;Q++)ZI.fromBufferAttribute(A,Q),C=Math.max(C,g.distanceToSquared(ZI));if(I)for(let Q=0,E=I.length;Q<E;Q++){const i=I[Q],o=this.morphTargetsRelative;for(let e=0,t=i.count;e<t;e++)ZI.fromBufferAttribute(i,e),o&&(wB.fromBufferAttribute(A,e),ZI.add(wB)),C=Math.max(C,g.distanceToSquared(ZI))}this.boundingSphere.radius=Math.sqrt(C),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const A=this.index,I=this.attributes;if(A===null||I.position===void 0||I.normal===void 0||I.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const g=A.array,C=I.position.array,Q=I.normal.array,E=I.uv.array,i=C.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new WI(new Float32Array(4*i),4));const o=this.getAttribute("tangent").array,e=[],t=[];for(let y=0;y<i;y++)e[y]=new f,t[y]=new f;const a=new f,s=new f,n=new f,r=new dA,G=new dA,h=new dA,D=new f,S=new f;function w(y,O,u){a.fromArray(C,y*3),s.fromArray(C,O*3),n.fromArray(C,u*3),r.fromArray(E,y*2),G.fromArray(E,O*2),h.fromArray(E,u*2),s.sub(a),n.sub(a),G.sub(r),h.sub(r);const d=1/(G.x*h.y-h.x*G.y);isFinite(d)&&(D.copy(s).multiplyScalar(h.y).addScaledVector(n,-G.y).multiplyScalar(d),S.copy(n).multiplyScalar(G.x).addScaledVector(s,-h.x).multiplyScalar(d),e[y].add(D),e[O].add(D),e[u].add(D),t[y].add(S),t[O].add(S),t[u].add(S))}let k=this.groups;k.length===0&&(k=[{start:0,count:g.length}]);for(let y=0,O=k.length;y<O;++y){const u=k[y],d=u.start,P=u.count;for(let H=d,CA=d+P;H<CA;H+=3)w(g[H+0],g[H+1],g[H+2])}const M=new f,U=new f,q=new f,F=new f;function l(y){q.fromArray(Q,y*3),F.copy(q);const O=e[y];M.copy(O),M.sub(q.multiplyScalar(q.dot(O))).normalize(),U.crossVectors(F,O);const d=U.dot(t[y])<0?-1:1;o[y*4]=M.x,o[y*4+1]=M.y,o[y*4+2]=M.z,o[y*4+3]=d}for(let y=0,O=k.length;y<O;++y){const u=k[y],d=u.start,P=u.count;for(let H=d,CA=d+P;H<CA;H+=3)l(g[H+0]),l(g[H+1]),l(g[H+2])}}computeVertexNormals(){const A=this.index,I=this.getAttribute("position");if(I!==void 0){let g=this.getAttribute("normal");if(g===void 0)g=new WI(new Float32Array(I.count*3),3),this.setAttribute("normal",g);else for(let s=0,n=g.count;s<n;s++)g.setXYZ(s,0,0,0);const C=new f,Q=new f,E=new f,i=new f,o=new f,e=new f,t=new f,a=new f;if(A)for(let s=0,n=A.count;s<n;s+=3){const r=A.getX(s+0),G=A.getX(s+1),h=A.getX(s+2);C.fromBufferAttribute(I,r),Q.fromBufferAttribute(I,G),E.fromBufferAttribute(I,h),t.subVectors(E,Q),a.subVectors(C,Q),t.cross(a),i.fromBufferAttribute(g,r),o.fromBufferAttribute(g,G),e.fromBufferAttribute(g,h),i.add(t),o.add(t),e.add(t),g.setXYZ(r,i.x,i.y,i.z),g.setXYZ(G,o.x,o.y,o.z),g.setXYZ(h,e.x,e.y,e.z)}else for(let s=0,n=I.count;s<n;s+=3)C.fromBufferAttribute(I,s+0),Q.fromBufferAttribute(I,s+1),E.fromBufferAttribute(I,s+2),t.subVectors(E,Q),a.subVectors(C,Q),t.cross(a),g.setXYZ(s+0,t.x,t.y,t.z),g.setXYZ(s+1,t.x,t.y,t.z),g.setXYZ(s+2,t.x,t.y,t.z);this.normalizeNormals(),g.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const A=this.attributes.normal;for(let I=0,g=A.count;I<g;I++)ZI.fromBufferAttribute(A,I),ZI.normalize(),A.setXYZ(I,ZI.x,ZI.y,ZI.z)}toNonIndexed(){function A(i,o){const e=i.array,t=i.itemSize,a=i.normalized,s=new e.constructor(o.length*t);let n=0,r=0;for(let G=0,h=o.length;G<h;G++){i.isInterleavedBufferAttribute?n=o[G]*i.data.stride+i.offset:n=o[G]*t;for(let D=0;D<t;D++)s[r++]=e[n++]}return new WI(s,t,a)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const I=new yg,g=this.index.array,C=this.attributes;for(const i in C){const o=C[i],e=A(o,g);I.setAttribute(i,e)}const Q=this.morphAttributes;for(const i in Q){const o=[],e=Q[i];for(let t=0,a=e.length;t<a;t++){const s=e[t],n=A(s,g);o.push(n)}I.morphAttributes[i]=o}I.morphTargetsRelative=this.morphTargetsRelative;const E=this.groups;for(let i=0,o=E.length;i<o;i++){const e=E[i];I.addGroup(e.start,e.count,e.materialIndex)}return I}toJSON(){const A={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),Object.keys(this.userData).length>0&&(A.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const e in o)o[e]!==void 0&&(A[e]=o[e]);return A}A.data={attributes:{}};const I=this.index;I!==null&&(A.data.index={type:I.array.constructor.name,array:Array.prototype.slice.call(I.array)});const g=this.attributes;for(const o in g){const e=g[o];A.data.attributes[o]=e.toJSON(A.data)}const C={};let Q=!1;for(const o in this.morphAttributes){const e=this.morphAttributes[o],t=[];for(let a=0,s=e.length;a<s;a++){const n=e[a];t.push(n.toJSON(A.data))}t.length>0&&(C[o]=t,Q=!0)}Q&&(A.data.morphAttributes=C,A.data.morphTargetsRelative=this.morphTargetsRelative);const E=this.groups;E.length>0&&(A.data.groups=JSON.parse(JSON.stringify(E)));const i=this.boundingSphere;return i!==null&&(A.data.boundingSphere={center:i.center.toArray(),radius:i.radius}),A}clone(){return new this.constructor().copy(this)}copy(A){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const I={};this.name=A.name;const g=A.index;g!==null&&this.setIndex(g.clone(I));const C=A.attributes;for(const e in C){const t=C[e];this.setAttribute(e,t.clone(I))}const Q=A.morphAttributes;for(const e in Q){const t=[],a=Q[e];for(let s=0,n=a.length;s<n;s++)t.push(a[s].clone(I));this.morphAttributes[e]=t}this.morphTargetsRelative=A.morphTargetsRelative;const E=A.groups;for(let e=0,t=E.length;e<t;e++){const a=E[e];this.addGroup(a.start,a.count,a.materialIndex)}const i=A.boundingBox;i!==null&&(this.boundingBox=i.clone());const o=A.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=A.drawRange.start,this.drawRange.count=A.drawRange.count,this.userData=A.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const et=new TA,HC=new YQ,zQ=new vg,tt=new f,GB=new f,SB=new f,kB=new f,Fi=new f,$Q=new f,AE=new dA,IE=new dA,gE=new dA,at=new f,st=new f,Dt=new f,CE=new f,BE=new f;class Bg extends iI{constructor(A=new yg,I=new PC){super(),this.isMesh=!0,this.type="Mesh",this.geometry=A,this.material=I,this.updateMorphTargets()}copy(A,I){return super.copy(A,I),A.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=A.morphTargetInfluences.slice()),A.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},A.morphTargetDictionary)),this.material=A.material,this.geometry=A.geometry,this}updateMorphTargets(){const I=this.geometry.morphAttributes,g=Object.keys(I);if(g.length>0){const C=I[g[0]];if(C!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Q=0,E=C.length;Q<E;Q++){const i=C[Q].name||String(Q);this.morphTargetInfluences.push(0),this.morphTargetDictionary[i]=Q}}}}getVertexPosition(A,I){const g=this.geometry,C=g.attributes.position,Q=g.morphAttributes.position,E=g.morphTargetsRelative;I.fromBufferAttribute(C,A);const i=this.morphTargetInfluences;if(Q&&i){$Q.set(0,0,0);for(let o=0,e=Q.length;o<e;o++){const t=i[o],a=Q[o];t!==0&&(Fi.fromBufferAttribute(a,A),E?$Q.addScaledVector(Fi,t):$Q.addScaledVector(Fi.sub(I),t))}I.add($Q)}return I}raycast(A,I){const g=this.geometry,C=this.material,Q=this.matrixWorld;C!==void 0&&(g.boundingSphere===null&&g.computeBoundingSphere(),zQ.copy(g.boundingSphere),zQ.applyMatrix4(Q),HC.copy(A.ray).recast(A.near),!(zQ.containsPoint(HC.origin)===!1&&(HC.intersectSphere(zQ,tt)===null||HC.origin.distanceToSquared(tt)>(A.far-A.near)**2))&&(et.copy(Q).invert(),HC.copy(A.ray).applyMatrix4(et),!(g.boundingBox!==null&&HC.intersectsBox(g.boundingBox)===!1)&&this._computeIntersections(A,I,HC)))}_computeIntersections(A,I,g){let C;const Q=this.geometry,E=this.material,i=Q.index,o=Q.attributes.position,e=Q.attributes.uv,t=Q.attributes.uv1,a=Q.attributes.normal,s=Q.groups,n=Q.drawRange;if(i!==null)if(Array.isArray(E))for(let r=0,G=s.length;r<G;r++){const h=s[r],D=E[h.materialIndex],S=Math.max(h.start,n.start),w=Math.min(i.count,Math.min(h.start+h.count,n.start+n.count));for(let k=S,M=w;k<M;k+=3){const U=i.getX(k),q=i.getX(k+1),F=i.getX(k+2);C=QE(this,D,A,g,e,t,a,U,q,F),C&&(C.faceIndex=Math.floor(k/3),C.face.materialIndex=h.materialIndex,I.push(C))}}else{const r=Math.max(0,n.start),G=Math.min(i.count,n.start+n.count);for(let h=r,D=G;h<D;h+=3){const S=i.getX(h),w=i.getX(h+1),k=i.getX(h+2);C=QE(this,E,A,g,e,t,a,S,w,k),C&&(C.faceIndex=Math.floor(h/3),I.push(C))}}else if(o!==void 0)if(Array.isArray(E))for(let r=0,G=s.length;r<G;r++){const h=s[r],D=E[h.materialIndex],S=Math.max(h.start,n.start),w=Math.min(o.count,Math.min(h.start+h.count,n.start+n.count));for(let k=S,M=w;k<M;k+=3){const U=k,q=k+1,F=k+2;C=QE(this,D,A,g,e,t,a,U,q,F),C&&(C.faceIndex=Math.floor(k/3),C.face.materialIndex=h.materialIndex,I.push(C))}}else{const r=Math.max(0,n.start),G=Math.min(o.count,n.start+n.count);for(let h=r,D=G;h<D;h+=3){const S=h,w=h+1,k=h+2;C=QE(this,E,A,g,e,t,a,S,w,k),C&&(C.faceIndex=Math.floor(h/3),I.push(C))}}}}function ch(B,A,I,g,C,Q,E,i){let o;if(A.side===ig?o=g.intersectTriangle(E,Q,C,!0,i):o=g.intersectTriangle(C,Q,E,A.side===eC,i),o===null)return null;BE.copy(i),BE.applyMatrix4(B.matrixWorld);const e=I.ray.origin.distanceTo(BE);return e<I.near||e>I.far?null:{distance:e,point:BE.clone(),object:B}}function QE(B,A,I,g,C,Q,E,i,o,e){B.getVertexPosition(i,GB),B.getVertexPosition(o,SB),B.getVertexPosition(e,kB);const t=ch(B,A,I,g,GB,SB,kB,CE);if(t){C&&(AE.fromBufferAttribute(C,i),IE.fromBufferAttribute(C,o),gE.fromBufferAttribute(C,e),t.uv=Rg.getInterpolation(CE,GB,SB,kB,AE,IE,gE,new dA)),Q&&(AE.fromBufferAttribute(Q,i),IE.fromBufferAttribute(Q,o),gE.fromBufferAttribute(Q,e),t.uv1=Rg.getInterpolation(CE,GB,SB,kB,AE,IE,gE,new dA),t.uv2=t.uv1),E&&(at.fromBufferAttribute(E,i),st.fromBufferAttribute(E,o),Dt.fromBufferAttribute(E,e),t.normal=Rg.getInterpolation(CE,GB,SB,kB,at,st,Dt,new f),t.normal.dot(g.direction)>0&&t.normal.multiplyScalar(-1));const a={a:i,b:o,c:e,normal:new f,materialIndex:0};Rg.getNormal(GB,SB,kB,a.normal),t.face=a}return t}class AQ extends yg{constructor(A=1,I=1,g=1,C=1,Q=1,E=1){super(),this.type="BoxGeometry",this.parameters={width:A,height:I,depth:g,widthSegments:C,heightSegments:Q,depthSegments:E};const i=this;C=Math.floor(C),Q=Math.floor(Q),E=Math.floor(E);const o=[],e=[],t=[],a=[];let s=0,n=0;r("z","y","x",-1,-1,g,I,A,E,Q,0),r("z","y","x",1,-1,g,I,-A,E,Q,1),r("x","z","y",1,1,A,g,I,C,E,2),r("x","z","y",1,-1,A,g,-I,C,E,3),r("x","y","z",1,-1,A,I,g,C,Q,4),r("x","y","z",-1,-1,A,I,-g,C,Q,5),this.setIndex(o),this.setAttribute("position",new dg(e,3)),this.setAttribute("normal",new dg(t,3)),this.setAttribute("uv",new dg(a,2));function r(G,h,D,S,w,k,M,U,q,F,l){const y=k/q,O=M/F,u=k/2,d=M/2,P=U/2,H=q+1,CA=F+1;let V=0,b=0;const IA=new f;for(let BA=0;BA<CA;BA++){const _=BA*O-d;for(let v=0;v<H;v++){const QA=v*y-u;IA[G]=QA*S,IA[h]=_*w,IA[D]=P,e.push(IA.x,IA.y,IA.z),IA[G]=0,IA[h]=0,IA[D]=U>0?1:-1,t.push(IA.x,IA.y,IA.z),a.push(v/q),a.push(1-BA/F),V+=1}}for(let BA=0;BA<F;BA++)for(let _=0;_<q;_++){const v=s+_+H*BA,QA=s+_+H*(BA+1),EA=s+(_+1)+H*(BA+1),rA=s+(_+1)+H*BA;o.push(v,QA,rA),o.push(QA,EA,rA),b+=6}i.addGroup(n,b,l),n+=b,s+=V}}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new AQ(A.width,A.height,A.depth,A.widthSegments,A.heightSegments,A.depthSegments)}}function vB(B){const A={};for(const I in B){A[I]={};for(const g in B[I]){const C=B[I][g];C&&(C.isColor||C.isMatrix3||C.isMatrix4||C.isVector2||C.isVector3||C.isVector4||C.isTexture||C.isQuaternion)?C.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),A[I][g]=null):A[I][g]=C.clone():Array.isArray(C)?A[I][g]=C.slice():A[I][g]=C}}return A}function gg(B){const A={};for(let I=0;I<B.length;I++){const g=vB(B[I]);for(const C in g)A[C]=g[C]}return A}function wh(B){const A=[];for(let I=0;I<B.length;I++)A.push(B[I].clone());return A}function ws(B){return B.getRenderTarget()===null?B.outputColorSpace:pg}const Gs={clone:vB,merge:gg};var Gh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class tC extends Tg{constructor(A){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gh,this.fragmentShader=Sh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,A!==void 0&&this.setValues(A)}copy(A){return super.copy(A),this.fragmentShader=A.fragmentShader,this.vertexShader=A.vertexShader,this.uniforms=vB(A.uniforms),this.uniformsGroups=wh(A.uniformsGroups),this.defines=Object.assign({},A.defines),this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.fog=A.fog,this.lights=A.lights,this.clipping=A.clipping,this.extensions=Object.assign({},A.extensions),this.glslVersion=A.glslVersion,this}toJSON(A){const I=super.toJSON(A);I.glslVersion=this.glslVersion,I.uniforms={};for(const C in this.uniforms){const E=this.uniforms[C].value;E&&E.isTexture?I.uniforms[C]={type:"t",value:E.toJSON(A).uuid}:E&&E.isColor?I.uniforms[C]={type:"c",value:E.getHex()}:E&&E.isVector2?I.uniforms[C]={type:"v2",value:E.toArray()}:E&&E.isVector3?I.uniforms[C]={type:"v3",value:E.toArray()}:E&&E.isVector4?I.uniforms[C]={type:"v4",value:E.toArray()}:E&&E.isMatrix3?I.uniforms[C]={type:"m3",value:E.toArray()}:E&&E.isMatrix4?I.uniforms[C]={type:"m4",value:E.toArray()}:I.uniforms[C]={value:E}}Object.keys(this.defines).length>0&&(I.defines=this.defines),I.vertexShader=this.vertexShader,I.fragmentShader=this.fragmentShader,I.lights=this.lights,I.clipping=this.clipping;const g={};for(const C in this.extensions)this.extensions[C]===!0&&(g[C]=!0);return Object.keys(g).length>0&&(I.extensions=g),I}}class Fo extends iI{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new TA,this.projectionMatrix=new TA,this.projectionMatrixInverse=new TA,this.coordinateSystem=EC}copy(A,I){return super.copy(A,I),this.matrixWorldInverse.copy(A.matrixWorldInverse),this.projectionMatrix.copy(A.projectionMatrix),this.projectionMatrixInverse.copy(A.projectionMatrixInverse),this.coordinateSystem=A.coordinateSystem,this}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const I=this.matrixWorld.elements;return A.set(-I[8],-I[9],-I[10]).normalize()}updateMatrixWorld(A){super.updateMatrixWorld(A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(A,I){super.updateWorldMatrix(A,I),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}let _I=class extends Fo{constructor(A=50,I=1,g=.1,C=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=A,this.zoom=1,this.near=g,this.far=C,this.focus=10,this.aspect=I,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.fov=A.fov,this.zoom=A.zoom,this.near=A.near,this.far=A.far,this.focus=A.focus,this.aspect=A.aspect,this.view=A.view===null?null:Object.assign({},A.view),this.filmGauge=A.filmGauge,this.filmOffset=A.filmOffset,this}setFocalLength(A){const I=.5*this.getFilmHeight()/A;this.fov=PB*2*Math.atan(I),this.updateProjectionMatrix()}getFocalLength(){const A=Math.tan(rQ*.5*this.fov);return .5*this.getFilmHeight()/A}getEffectiveFOV(){return PB*2*Math.atan(Math.tan(rQ*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(A,I,g,C,Q,E){this.aspect=A/I,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=C,this.view.width=Q,this.view.height=E,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=this.near;let I=A*Math.tan(rQ*.5*this.fov)/this.zoom,g=2*I,C=this.aspect*g,Q=-.5*C;const E=this.view;if(this.view!==null&&this.view.enabled){const o=E.fullWidth,e=E.fullHeight;Q+=E.offsetX*C/o,I-=E.offsetY*g/e,C*=E.width/o,g*=E.height/e}const i=this.filmOffset;i!==0&&(Q+=A*i/this.getFilmWidth()),this.projectionMatrix.makePerspective(Q,Q+C,I,I-g,A,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.fov=this.fov,I.object.zoom=this.zoom,I.object.near=this.near,I.object.far=this.far,I.object.focus=this.focus,I.object.aspect=this.aspect,this.view!==null&&(I.object.view=Object.assign({},this.view)),I.object.filmGauge=this.filmGauge,I.object.filmOffset=this.filmOffset,I}};const lB=-90,MB=1;class kh extends iI{constructor(A,I,g){super(),this.type="CubeCamera",this.renderTarget=g,this.coordinateSystem=null;const C=new _I(lB,MB,A,I);C.layers=this.layers,this.add(C);const Q=new _I(lB,MB,A,I);Q.layers=this.layers,this.add(Q);const E=new _I(lB,MB,A,I);E.layers=this.layers,this.add(E);const i=new _I(lB,MB,A,I);i.layers=this.layers,this.add(i);const o=new _I(lB,MB,A,I);o.layers=this.layers,this.add(o);const e=new _I(lB,MB,A,I);e.layers=this.layers,this.add(e)}updateCoordinateSystem(){const A=this.coordinateSystem,I=this.children.concat(),[g,C,Q,E,i,o]=I;for(const e of I)this.remove(e);if(A===EC)g.up.set(0,1,0),g.lookAt(1,0,0),C.up.set(0,1,0),C.lookAt(-1,0,0),Q.up.set(0,0,-1),Q.lookAt(0,1,0),E.up.set(0,0,1),E.lookAt(0,-1,0),i.up.set(0,1,0),i.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(A===UE)g.up.set(0,-1,0),g.lookAt(-1,0,0),C.up.set(0,-1,0),C.lookAt(1,0,0),Q.up.set(0,0,1),Q.lookAt(0,1,0),E.up.set(0,0,-1),E.lookAt(0,-1,0),i.up.set(0,-1,0),i.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+A);for(const e of I)this.add(e),e.updateMatrixWorld()}update(A,I){this.parent===null&&this.updateMatrixWorld();const g=this.renderTarget;this.coordinateSystem!==A.coordinateSystem&&(this.coordinateSystem=A.coordinateSystem,this.updateCoordinateSystem());const[C,Q,E,i,o,e]=this.children,t=A.getRenderTarget(),a=A.toneMapping,s=A.xr.enabled;A.toneMapping=bg,A.xr.enabled=!1;const n=g.texture.generateMipmaps;g.texture.generateMipmaps=!1,A.setRenderTarget(g,0),A.render(I,C),A.setRenderTarget(g,1),A.render(I,Q),A.setRenderTarget(g,2),A.render(I,E),A.setRenderTarget(g,3),A.render(I,i),A.setRenderTarget(g,4),A.render(I,o),g.texture.generateMipmaps=n,A.setRenderTarget(g,5),A.render(I,e),A.setRenderTarget(t),A.toneMapping=a,A.xr.enabled=s,g.texture.needsPMREMUpdate=!0}}class Ss extends YI{constructor(A,I,g,C,Q,E,i,o,e,t){A=A!==void 0?A:[],I=I!==void 0?I:mB,super(A,I,g,C,Q,E,i,o,e,t),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(A){this.image=A}}class lh extends KC{constructor(A=1,I={}){super(A,A,I),this.isWebGLCubeRenderTarget=!0;const g={width:A,height:A,depth:1},C=[g,g,g,g,g,g];I.encoding!==void 0&&(wQ("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),I.colorSpace=I.encoding===oC?qA:_C),this.texture=new Ss(C,I.mapping,I.wrapS,I.wrapT,I.magFilter,I.minFilter,I.format,I.type,I.anisotropy,I.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=I.generateMipmaps!==void 0?I.generateMipmaps:!1,this.texture.minFilter=I.minFilter!==void 0?I.minFilter:Eg}fromEquirectangularTexture(A,I){this.texture.type=I.type,this.texture.colorSpace=I.colorSpace,this.texture.generateMipmaps=I.generateMipmaps,this.texture.minFilter=I.minFilter,this.texture.magFilter=I.magFilter;const g={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},C=new AQ(5,5,5),Q=new tC({name:"CubemapFromEquirect",uniforms:vB(g.uniforms),vertexShader:g.vertexShader,fragmentShader:g.fragmentShader,side:ig,blending:lC});Q.uniforms.tEquirect.value=I;const E=new Bg(C,Q),i=I.minFilter;return I.minFilter===IB&&(I.minFilter=Eg),new kh(1,10,this).update(A,E),I.minFilter=i,E.geometry.dispose(),E.material.dispose(),this}clear(A,I,g,C){const Q=A.getRenderTarget();for(let E=0;E<6;E++)A.setRenderTarget(this,E),A.clear(I,g,C);A.setRenderTarget(Q)}}const Ri=new f,Mh=new f,yh=new PA;class xC{constructor(A=new f(1,0,0),I=0){this.isPlane=!0,this.normal=A,this.constant=I}set(A,I){return this.normal.copy(A),this.constant=I,this}setComponents(A,I,g,C){return this.normal.set(A,I,g),this.constant=C,this}setFromNormalAndCoplanarPoint(A,I){return this.normal.copy(A),this.constant=-I.dot(this.normal),this}setFromCoplanarPoints(A,I,g){const C=Ri.subVectors(g,I).cross(Mh.subVectors(A,I)).normalize();return this.setFromNormalAndCoplanarPoint(C,A),this}copy(A){return this.normal.copy(A.normal),this.constant=A.constant,this}normalize(){const A=1/this.normal.length();return this.normal.multiplyScalar(A),this.constant*=A,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(A){return this.normal.dot(A)+this.constant}distanceToSphere(A){return this.distanceToPoint(A.center)-A.radius}projectPoint(A,I){return I.copy(A).addScaledVector(this.normal,-this.distanceToPoint(A))}intersectLine(A,I){const g=A.delta(Ri),C=this.normal.dot(g);if(C===0)return this.distanceToPoint(A.start)===0?I.copy(A.start):null;const Q=-(A.start.dot(this.normal)+this.constant)/C;return Q<0||Q>1?null:I.copy(A.start).addScaledVector(g,Q)}intersectsLine(A){const I=this.distanceToPoint(A.start),g=this.distanceToPoint(A.end);return I<0&&g>0||g<0&&I>0}intersectsBox(A){return A.intersectsPlane(this)}intersectsSphere(A){return A.intersectsPlane(this)}coplanarPoint(A){return A.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(A,I){const g=I||yh.getNormalMatrix(A),C=this.coplanarPoint(Ri).applyMatrix4(A),Q=this.normal.applyMatrix3(g).normalize();return this.constant=-C.dot(Q),this}translate(A){return this.constant-=A.dot(this.normal),this}equals(A){return A.normal.equals(this.normal)&&A.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mC=new vg,EE=new f;class TE{constructor(A=new xC,I=new xC,g=new xC,C=new xC,Q=new xC,E=new xC){this.planes=[A,I,g,C,Q,E]}set(A,I,g,C,Q,E){const i=this.planes;return i[0].copy(A),i[1].copy(I),i[2].copy(g),i[3].copy(C),i[4].copy(Q),i[5].copy(E),this}copy(A){const I=this.planes;for(let g=0;g<6;g++)I[g].copy(A.planes[g]);return this}setFromProjectionMatrix(A,I=EC){const g=this.planes,C=A.elements,Q=C[0],E=C[1],i=C[2],o=C[3],e=C[4],t=C[5],a=C[6],s=C[7],n=C[8],r=C[9],G=C[10],h=C[11],D=C[12],S=C[13],w=C[14],k=C[15];if(g[0].setComponents(o-Q,s-e,h-n,k-D).normalize(),g[1].setComponents(o+Q,s+e,h+n,k+D).normalize(),g[2].setComponents(o+E,s+t,h+r,k+S).normalize(),g[3].setComponents(o-E,s-t,h-r,k-S).normalize(),g[4].setComponents(o-i,s-a,h-G,k-w).normalize(),I===EC)g[5].setComponents(o+i,s+a,h+G,k+w).normalize();else if(I===UE)g[5].setComponents(i,a,G,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+I);return this}intersectsObject(A){if(A.boundingSphere!==void 0)A.boundingSphere===null&&A.computeBoundingSphere(),mC.copy(A.boundingSphere).applyMatrix4(A.matrixWorld);else{const I=A.geometry;I.boundingSphere===null&&I.computeBoundingSphere(),mC.copy(I.boundingSphere).applyMatrix4(A.matrixWorld)}return this.intersectsSphere(mC)}intersectsSprite(A){return mC.center.set(0,0,0),mC.radius=.7071067811865476,mC.applyMatrix4(A.matrixWorld),this.intersectsSphere(mC)}intersectsSphere(A){const I=this.planes,g=A.center,C=-A.radius;for(let Q=0;Q<6;Q++)if(I[Q].distanceToPoint(g)<C)return!1;return!0}intersectsBox(A){const I=this.planes;for(let g=0;g<6;g++){const C=I[g];if(EE.x=C.normal.x>0?A.max.x:A.min.x,EE.y=C.normal.y>0?A.max.y:A.min.y,EE.z=C.normal.z>0?A.max.z:A.min.z,C.distanceToPoint(EE)<0)return!1}return!0}containsPoint(A){const I=this.planes;for(let g=0;g<6;g++)if(I[g].distanceToPoint(A)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ks(){let B=null,A=!1,I=null,g=null;function C(Q,E){I(Q,E),g=B.requestAnimationFrame(C)}return{start:function(){A!==!0&&I!==null&&(g=B.requestAnimationFrame(C),A=!0)},stop:function(){B.cancelAnimationFrame(g),A=!1},setAnimationLoop:function(Q){I=Q},setContext:function(Q){B=Q}}}function Uh(B,A){const I=A.isWebGL2,g=new WeakMap;function C(e,t){const a=e.array,s=e.usage,n=B.createBuffer();B.bindBuffer(t,n),B.bufferData(t,a,s),e.onUploadCallback();let r;if(a instanceof Float32Array)r=B.FLOAT;else if(a instanceof Uint16Array)if(e.isFloat16BufferAttribute)if(I)r=B.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else r=B.UNSIGNED_SHORT;else if(a instanceof Int16Array)r=B.SHORT;else if(a instanceof Uint32Array)r=B.UNSIGNED_INT;else if(a instanceof Int32Array)r=B.INT;else if(a instanceof Int8Array)r=B.BYTE;else if(a instanceof Uint8Array)r=B.UNSIGNED_BYTE;else if(a instanceof Uint8ClampedArray)r=B.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+a);return{buffer:n,type:r,bytesPerElement:a.BYTES_PER_ELEMENT,version:e.version}}function Q(e,t,a){const s=t.array,n=t.updateRange;B.bindBuffer(a,e),n.count===-1?B.bufferSubData(a,0,s):(I?B.bufferSubData(a,n.offset*s.BYTES_PER_ELEMENT,s,n.offset,n.count):B.bufferSubData(a,n.offset*s.BYTES_PER_ELEMENT,s.subarray(n.offset,n.offset+n.count)),n.count=-1),t.onUploadCallback()}function E(e){return e.isInterleavedBufferAttribute&&(e=e.data),g.get(e)}function i(e){e.isInterleavedBufferAttribute&&(e=e.data);const t=g.get(e);t&&(B.deleteBuffer(t.buffer),g.delete(e))}function o(e,t){if(e.isGLBufferAttribute){const s=g.get(e);(!s||s.version<e.version)&&g.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}e.isInterleavedBufferAttribute&&(e=e.data);const a=g.get(e);a===void 0?g.set(e,C(e,t)):a.version<e.version&&(Q(a.buffer,e,t),a.version=e.version)}return{get:E,remove:i,update:o}}class Ro extends yg{constructor(A=1,I=1,g=1,C=1){super(),this.type="PlaneGeometry",this.parameters={width:A,height:I,widthSegments:g,heightSegments:C};const Q=A/2,E=I/2,i=Math.floor(g),o=Math.floor(C),e=i+1,t=o+1,a=A/i,s=I/o,n=[],r=[],G=[],h=[];for(let D=0;D<t;D++){const S=D*s-E;for(let w=0;w<e;w++){const k=w*a-Q;r.push(k,-S,0),G.push(0,0,1),h.push(w/i),h.push(1-D/o)}}for(let D=0;D<o;D++)for(let S=0;S<i;S++){const w=S+e*D,k=S+e*(D+1),M=S+1+e*(D+1),U=S+1+e*D;n.push(w,k,U),n.push(k,M,U)}this.setIndex(n),this.setAttribute("position",new dg(r,3)),this.setAttribute("normal",new dg(G,3)),this.setAttribute("uv",new dg(h,2))}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new Ro(A.width,A.height,A.widthSegments,A.heightSegments)}}var Nh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Fh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dh="vec3 transformed = vec3( position );",ph=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Yh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Lh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,uh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Hh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Th=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Oh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Zh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ph=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,vh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Wh=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_h=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zh="gl_FragColor = linearToOutputTexel( gl_FragColor );",$h=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ar=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ir=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gr=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Cr=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Br=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Qr=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Er=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ir=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,or=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,er=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,tr=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ar=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sr=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dr=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nr=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,hr=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,rr=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cr=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wr=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gr=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sr=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,kr=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lr=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Mr=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yr=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Ur=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nr=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kr=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Jr=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Fr=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,Rr=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qr=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,dr=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pr=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fr=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yr=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lr=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ur=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Hr=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,mr=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,br=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Tr=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xr=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Or=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zr=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Pr=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,vr=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wr=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jr=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vr=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_r=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Xr=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zr=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$r=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ac=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ic=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gc=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cc=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Bc=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Qc=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ec=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ic=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oc=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,ec=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tc=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ac=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sc=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dc=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nc=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hc=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rc=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,cc=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wc=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gc=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Sc=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kc=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lc=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Mc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yc=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Uc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nc=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Kc=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Jc=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Fc=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Rc=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,qc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dc=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,pc=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fc=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yc=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Lc=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uc=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hc=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mc=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,bc=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tc=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xc=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Oc=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zc=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pc=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,vc=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wc=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jc=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vc=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_c=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xc=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zc=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,$c=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Aw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,OA={alphamap_fragment:Nh,alphamap_pars_fragment:Kh,alphatest_fragment:Jh,alphatest_pars_fragment:Fh,aomap_fragment:Rh,aomap_pars_fragment:qh,begin_vertex:dh,beginnormal_vertex:ph,bsdfs:fh,iridescence_fragment:Yh,bumpmap_pars_fragment:Lh,clipping_planes_fragment:uh,clipping_planes_pars_fragment:Hh,clipping_planes_pars_vertex:mh,clipping_planes_vertex:bh,color_fragment:Th,color_pars_fragment:xh,color_pars_vertex:Oh,color_vertex:Zh,common:Ph,cube_uv_reflection_fragment:vh,defaultnormal_vertex:Wh,displacementmap_pars_vertex:jh,displacementmap_vertex:Vh,emissivemap_fragment:_h,emissivemap_pars_fragment:Xh,encodings_fragment:zh,encodings_pars_fragment:$h,envmap_fragment:Ar,envmap_common_pars_fragment:Ir,envmap_pars_fragment:gr,envmap_pars_vertex:Cr,envmap_physical_pars_fragment:hr,envmap_vertex:Br,fog_vertex:Qr,fog_pars_vertex:Er,fog_fragment:ir,fog_pars_fragment:or,gradientmap_pars_fragment:er,lightmap_fragment:tr,lightmap_pars_fragment:ar,lights_lambert_fragment:sr,lights_lambert_pars_fragment:Dr,lights_pars_begin:nr,lights_toon_fragment:rr,lights_toon_pars_fragment:cr,lights_phong_fragment:wr,lights_phong_pars_fragment:Gr,lights_physical_fragment:Sr,lights_physical_pars_fragment:kr,lights_fragment_begin:lr,lights_fragment_maps:Mr,lights_fragment_end:yr,logdepthbuf_fragment:Ur,logdepthbuf_pars_fragment:Nr,logdepthbuf_pars_vertex:Kr,logdepthbuf_vertex:Jr,map_fragment:Fr,map_pars_fragment:Rr,map_particle_fragment:qr,map_particle_pars_fragment:dr,metalnessmap_fragment:pr,metalnessmap_pars_fragment:fr,morphcolor_vertex:Yr,morphnormal_vertex:Lr,morphtarget_pars_vertex:ur,morphtarget_vertex:Hr,normal_fragment_begin:mr,normal_fragment_maps:br,normal_pars_fragment:Tr,normal_pars_vertex:xr,normal_vertex:Or,normalmap_pars_fragment:Zr,clearcoat_normal_fragment_begin:Pr,clearcoat_normal_fragment_maps:vr,clearcoat_pars_fragment:Wr,iridescence_pars_fragment:jr,output_fragment:Vr,packing:_r,premultiplied_alpha_fragment:Xr,project_vertex:zr,dithering_fragment:$r,dithering_pars_fragment:Ac,roughnessmap_fragment:Ic,roughnessmap_pars_fragment:gc,shadowmap_pars_fragment:Cc,shadowmap_pars_vertex:Bc,shadowmap_vertex:Qc,shadowmask_pars_fragment:Ec,skinbase_vertex:ic,skinning_pars_vertex:oc,skinning_vertex:ec,skinnormal_vertex:tc,specularmap_fragment:ac,specularmap_pars_fragment:sc,tonemapping_fragment:Dc,tonemapping_pars_fragment:nc,transmission_fragment:hc,transmission_pars_fragment:rc,uv_pars_fragment:cc,uv_pars_vertex:wc,uv_vertex:Gc,worldpos_vertex:Sc,background_vert:kc,background_frag:lc,backgroundCube_vert:Mc,backgroundCube_frag:yc,cube_vert:Uc,cube_frag:Nc,depth_vert:Kc,depth_frag:Jc,distanceRGBA_vert:Fc,distanceRGBA_frag:Rc,equirect_vert:qc,equirect_frag:dc,linedashed_vert:pc,linedashed_frag:fc,meshbasic_vert:Yc,meshbasic_frag:Lc,meshlambert_vert:uc,meshlambert_frag:Hc,meshmatcap_vert:mc,meshmatcap_frag:bc,meshnormal_vert:Tc,meshnormal_frag:xc,meshphong_vert:Oc,meshphong_frag:Zc,meshphysical_vert:Pc,meshphysical_frag:vc,meshtoon_vert:Wc,meshtoon_frag:jc,points_vert:Vc,points_frag:_c,shadow_vert:Xc,shadow_frag:zc,sprite_vert:$c,sprite_frag:Aw},sA={common:{diffuse:{value:new LA(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new PA},alphaMap:{value:null},alphaMapTransform:{value:new PA},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new PA}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new PA}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new PA}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new PA},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new PA},normalScale:{value:new dA(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new PA},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new PA}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new PA}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new PA}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new LA(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new LA(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new PA},alphaTest:{value:0},uvTransform:{value:new PA}},sprite:{diffuse:{value:new LA(16777215)},opacity:{value:1},center:{value:new dA(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new PA},alphaMap:{value:null},alphaMapTransform:{value:new PA},alphaTest:{value:0}}},Lg={basic:{uniforms:gg([sA.common,sA.specularmap,sA.envmap,sA.aomap,sA.lightmap,sA.fog]),vertexShader:OA.meshbasic_vert,fragmentShader:OA.meshbasic_frag},lambert:{uniforms:gg([sA.common,sA.specularmap,sA.envmap,sA.aomap,sA.lightmap,sA.emissivemap,sA.bumpmap,sA.normalmap,sA.displacementmap,sA.fog,sA.lights,{emissive:{value:new LA(0)}}]),vertexShader:OA.meshlambert_vert,fragmentShader:OA.meshlambert_frag},phong:{uniforms:gg([sA.common,sA.specularmap,sA.envmap,sA.aomap,sA.lightmap,sA.emissivemap,sA.bumpmap,sA.normalmap,sA.displacementmap,sA.fog,sA.lights,{emissive:{value:new LA(0)},specular:{value:new LA(1118481)},shininess:{value:30}}]),vertexShader:OA.meshphong_vert,fragmentShader:OA.meshphong_frag},standard:{uniforms:gg([sA.common,sA.envmap,sA.aomap,sA.lightmap,sA.emissivemap,sA.bumpmap,sA.normalmap,sA.displacementmap,sA.roughnessmap,sA.metalnessmap,sA.fog,sA.lights,{emissive:{value:new LA(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:OA.meshphysical_vert,fragmentShader:OA.meshphysical_frag},toon:{uniforms:gg([sA.common,sA.aomap,sA.lightmap,sA.emissivemap,sA.bumpmap,sA.normalmap,sA.displacementmap,sA.gradientmap,sA.fog,sA.lights,{emissive:{value:new LA(0)}}]),vertexShader:OA.meshtoon_vert,fragmentShader:OA.meshtoon_frag},matcap:{uniforms:gg([sA.common,sA.bumpmap,sA.normalmap,sA.displacementmap,sA.fog,{matcap:{value:null}}]),vertexShader:OA.meshmatcap_vert,fragmentShader:OA.meshmatcap_frag},points:{uniforms:gg([sA.points,sA.fog]),vertexShader:OA.points_vert,fragmentShader:OA.points_frag},dashed:{uniforms:gg([sA.common,sA.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:OA.linedashed_vert,fragmentShader:OA.linedashed_frag},depth:{uniforms:gg([sA.common,sA.displacementmap]),vertexShader:OA.depth_vert,fragmentShader:OA.depth_frag},normal:{uniforms:gg([sA.common,sA.bumpmap,sA.normalmap,sA.displacementmap,{opacity:{value:1}}]),vertexShader:OA.meshnormal_vert,fragmentShader:OA.meshnormal_frag},sprite:{uniforms:gg([sA.sprite,sA.fog]),vertexShader:OA.sprite_vert,fragmentShader:OA.sprite_frag},background:{uniforms:{uvTransform:{value:new PA},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:OA.background_vert,fragmentShader:OA.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:OA.backgroundCube_vert,fragmentShader:OA.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:OA.cube_vert,fragmentShader:OA.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:OA.equirect_vert,fragmentShader:OA.equirect_frag},distanceRGBA:{uniforms:gg([sA.common,sA.displacementmap,{referencePosition:{value:new f},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:OA.distanceRGBA_vert,fragmentShader:OA.distanceRGBA_frag},shadow:{uniforms:gg([sA.lights,sA.fog,{color:{value:new LA(0)},opacity:{value:1}}]),vertexShader:OA.shadow_vert,fragmentShader:OA.shadow_frag}};Lg.physical={uniforms:gg([Lg.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new PA},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new PA},clearcoatNormalScale:{value:new dA(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new PA},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new PA},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new PA},sheen:{value:0},sheenColor:{value:new LA(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new PA},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new PA},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new PA},transmissionSamplerSize:{value:new dA},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new PA},attenuationDistance:{value:0},attenuationColor:{value:new LA(0)},specularColor:{value:new LA(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new PA},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new PA},anisotropyVector:{value:new dA},anisotropyMap:{value:null},anisotropyMapTransform:{value:new PA}}]),vertexShader:OA.meshphysical_vert,fragmentShader:OA.meshphysical_frag};const iE={r:0,b:0,g:0};function Iw(B,A,I,g,C,Q,E){const i=new LA(0);let o=Q===!0?0:1,e,t,a=null,s=0,n=null;function r(h,D){let S=!1,w=D.isScene===!0?D.background:null;switch(w&&w.isTexture&&(w=(D.backgroundBlurriness>0?I:A).get(w)),w===null?G(i,o):w&&w.isColor&&(G(w,1),S=!0),B.xr.getEnvironmentBlendMode()){case"opaque":S=!0;break;case"additive":g.buffers.color.setClear(0,0,0,1,E),S=!0;break;case"alpha-blend":g.buffers.color.setClear(0,0,0,0,E),S=!0;break}(B.autoClear||S)&&B.clear(B.autoClearColor,B.autoClearDepth,B.autoClearStencil),w&&(w.isCubeTexture||w.mapping===bE)?(t===void 0&&(t=new Bg(new AQ(1,1,1),new tC({name:"BackgroundCubeMaterial",uniforms:vB(Lg.backgroundCube.uniforms),vertexShader:Lg.backgroundCube.vertexShader,fragmentShader:Lg.backgroundCube.fragmentShader,side:ig,depthTest:!1,depthWrite:!1,fog:!1})),t.geometry.deleteAttribute("normal"),t.geometry.deleteAttribute("uv"),t.onBeforeRender=function(U,q,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(t.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),C.update(t)),t.material.uniforms.envMap.value=w,t.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,t.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,t.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,t.material.toneMapped=w.colorSpace!==qA,(a!==w||s!==w.version||n!==B.toneMapping)&&(t.material.needsUpdate=!0,a=w,s=w.version,n=B.toneMapping),t.layers.enableAll(),h.unshift(t,t.geometry,t.material,0,0,null)):w&&w.isTexture&&(e===void 0&&(e=new Bg(new Ro(2,2),new tC({name:"BackgroundMaterial",uniforms:vB(Lg.background.uniforms),vertexShader:Lg.background.vertexShader,fragmentShader:Lg.background.fragmentShader,side:eC,depthTest:!1,depthWrite:!1,fog:!1})),e.geometry.deleteAttribute("normal"),Object.defineProperty(e.material,"map",{get:function(){return this.uniforms.t2D.value}}),C.update(e)),e.material.uniforms.t2D.value=w,e.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,e.material.toneMapped=w.colorSpace!==qA,w.matrixAutoUpdate===!0&&w.updateMatrix(),e.material.uniforms.uvTransform.value.copy(w.matrix),(a!==w||s!==w.version||n!==B.toneMapping)&&(e.material.needsUpdate=!0,a=w,s=w.version,n=B.toneMapping),e.layers.enableAll(),h.unshift(e,e.geometry,e.material,0,0,null))}function G(h,D){h.getRGB(iE,ws(B)),g.buffers.color.setClear(iE.r,iE.g,iE.b,D,E)}return{getClearColor:function(){return i},setClearColor:function(h,D=1){i.set(h),o=D,G(i,o)},getClearAlpha:function(){return o},setClearAlpha:function(h){o=h,G(i,o)},render:r}}function gw(B,A,I,g){const C=B.getParameter(B.MAX_VERTEX_ATTRIBS),Q=g.isWebGL2?null:A.get("OES_vertex_array_object"),E=g.isWebGL2||Q!==null,i={},o=h(null);let e=o,t=!1;function a(P,H,CA,V,b){let IA=!1;if(E){const BA=G(V,CA,H);e!==BA&&(e=BA,n(e.object)),IA=D(P,V,CA,b),IA&&S(P,V,CA,b)}else{const BA=H.wireframe===!0;(e.geometry!==V.id||e.program!==CA.id||e.wireframe!==BA)&&(e.geometry=V.id,e.program=CA.id,e.wireframe=BA,IA=!0)}b!==null&&I.update(b,B.ELEMENT_ARRAY_BUFFER),(IA||t)&&(t=!1,F(P,H,CA,V),b!==null&&B.bindBuffer(B.ELEMENT_ARRAY_BUFFER,I.get(b).buffer))}function s(){return g.isWebGL2?B.createVertexArray():Q.createVertexArrayOES()}function n(P){return g.isWebGL2?B.bindVertexArray(P):Q.bindVertexArrayOES(P)}function r(P){return g.isWebGL2?B.deleteVertexArray(P):Q.deleteVertexArrayOES(P)}function G(P,H,CA){const V=CA.wireframe===!0;let b=i[P.id];b===void 0&&(b={},i[P.id]=b);let IA=b[H.id];IA===void 0&&(IA={},b[H.id]=IA);let BA=IA[V];return BA===void 0&&(BA=h(s()),IA[V]=BA),BA}function h(P){const H=[],CA=[],V=[];for(let b=0;b<C;b++)H[b]=0,CA[b]=0,V[b]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:CA,attributeDivisors:V,object:P,attributes:{},index:null}}function D(P,H,CA,V){const b=e.attributes,IA=H.attributes;let BA=0;const _=CA.getAttributes();for(const v in _)if(_[v].location>=0){const EA=b[v];let rA=IA[v];if(rA===void 0&&(v==="instanceMatrix"&&P.instanceMatrix&&(rA=P.instanceMatrix),v==="instanceColor"&&P.instanceColor&&(rA=P.instanceColor)),EA===void 0||EA.attribute!==rA||rA&&EA.data!==rA.data)return!0;BA++}return e.attributesNum!==BA||e.index!==V}function S(P,H,CA,V){const b={},IA=H.attributes;let BA=0;const _=CA.getAttributes();for(const v in _)if(_[v].location>=0){let EA=IA[v];EA===void 0&&(v==="instanceMatrix"&&P.instanceMatrix&&(EA=P.instanceMatrix),v==="instanceColor"&&P.instanceColor&&(EA=P.instanceColor));const rA={};rA.attribute=EA,EA&&EA.data&&(rA.data=EA.data),b[v]=rA,BA++}e.attributes=b,e.attributesNum=BA,e.index=V}function w(){const P=e.newAttributes;for(let H=0,CA=P.length;H<CA;H++)P[H]=0}function k(P){M(P,0)}function M(P,H){const CA=e.newAttributes,V=e.enabledAttributes,b=e.attributeDivisors;CA[P]=1,V[P]===0&&(B.enableVertexAttribArray(P),V[P]=1),b[P]!==H&&((g.isWebGL2?B:A.get("ANGLE_instanced_arrays"))[g.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,H),b[P]=H)}function U(){const P=e.newAttributes,H=e.enabledAttributes;for(let CA=0,V=H.length;CA<V;CA++)H[CA]!==P[CA]&&(B.disableVertexAttribArray(CA),H[CA]=0)}function q(P,H,CA,V,b,IA,BA){BA===!0?B.vertexAttribIPointer(P,H,CA,b,IA):B.vertexAttribPointer(P,H,CA,V,b,IA)}function F(P,H,CA,V){if(g.isWebGL2===!1&&(P.isInstancedMesh||V.isInstancedBufferGeometry)&&A.get("ANGLE_instanced_arrays")===null)return;w();const b=V.attributes,IA=CA.getAttributes(),BA=H.defaultAttributeValues;for(const _ in IA){const v=IA[_];if(v.location>=0){let QA=b[_];if(QA===void 0&&(_==="instanceMatrix"&&P.instanceMatrix&&(QA=P.instanceMatrix),_==="instanceColor"&&P.instanceColor&&(QA=P.instanceColor)),QA!==void 0){const EA=QA.normalized,rA=QA.itemSize,$=I.get(QA);if($===void 0)continue;const tA=$.buffer,xA=$.type,FA=$.bytesPerElement,JI=g.isWebGL2===!0&&(xA===B.INT||xA===B.UNSIGNED_INT||QA.gpuType===Is);if(QA.isInterleavedBufferAttribute){const WA=QA.data,x=WA.stride,LI=QA.offset;if(WA.isInstancedInterleavedBuffer){for(let NA=0;NA<v.locationSize;NA++)M(v.location+NA,WA.meshPerAttribute);P.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=WA.meshPerAttribute*WA.count)}else for(let NA=0;NA<v.locationSize;NA++)k(v.location+NA);B.bindBuffer(B.ARRAY_BUFFER,tA);for(let NA=0;NA<v.locationSize;NA++)q(v.location+NA,rA/v.locationSize,xA,EA,x*FA,(LI+rA/v.locationSize*NA)*FA,JI)}else{if(QA.isInstancedBufferAttribute){for(let WA=0;WA<v.locationSize;WA++)M(v.location+WA,QA.meshPerAttribute);P.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=QA.meshPerAttribute*QA.count)}else for(let WA=0;WA<v.locationSize;WA++)k(v.location+WA);B.bindBuffer(B.ARRAY_BUFFER,tA);for(let WA=0;WA<v.locationSize;WA++)q(v.location+WA,rA/v.locationSize,xA,EA,rA*FA,rA/v.locationSize*WA*FA,JI)}}else if(BA!==void 0){const EA=BA[_];if(EA!==void 0)switch(EA.length){case 2:B.vertexAttrib2fv(v.location,EA);break;case 3:B.vertexAttrib3fv(v.location,EA);break;case 4:B.vertexAttrib4fv(v.location,EA);break;default:B.vertexAttrib1fv(v.location,EA)}}}}U()}function l(){u();for(const P in i){const H=i[P];for(const CA in H){const V=H[CA];for(const b in V)r(V[b].object),delete V[b];delete H[CA]}delete i[P]}}function y(P){if(i[P.id]===void 0)return;const H=i[P.id];for(const CA in H){const V=H[CA];for(const b in V)r(V[b].object),delete V[b];delete H[CA]}delete i[P.id]}function O(P){for(const H in i){const CA=i[H];if(CA[P.id]===void 0)continue;const V=CA[P.id];for(const b in V)r(V[b].object),delete V[b];delete CA[P.id]}}function u(){d(),t=!0,e!==o&&(e=o,n(e.object))}function d(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:a,reset:u,resetDefaultState:d,dispose:l,releaseStatesOfGeometry:y,releaseStatesOfProgram:O,initAttributes:w,enableAttribute:k,disableUnusedAttributes:U}}function Cw(B,A,I,g){const C=g.isWebGL2;let Q;function E(e){Q=e}function i(e,t){B.drawArrays(Q,e,t),I.update(t,Q,1)}function o(e,t,a){if(a===0)return;let s,n;if(C)s=B,n="drawArraysInstanced";else if(s=A.get("ANGLE_instanced_arrays"),n="drawArraysInstancedANGLE",s===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}s[n](Q,e,t,a),I.update(t,Q,a)}this.setMode=E,this.render=i,this.renderInstances=o}function Bw(B,A,I){let g;function C(){if(g!==void 0)return g;if(A.has("EXT_texture_filter_anisotropic")===!0){const q=A.get("EXT_texture_filter_anisotropic");g=B.getParameter(q.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else g=0;return g}function Q(q){if(q==="highp"){if(B.getShaderPrecisionFormat(B.VERTEX_SHADER,B.HIGH_FLOAT).precision>0&&B.getShaderPrecisionFormat(B.FRAGMENT_SHADER,B.HIGH_FLOAT).precision>0)return"highp";q="mediump"}return q==="mediump"&&B.getShaderPrecisionFormat(B.VERTEX_SHADER,B.MEDIUM_FLOAT).precision>0&&B.getShaderPrecisionFormat(B.FRAGMENT_SHADER,B.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const E=typeof WebGL2RenderingContext<"u"&&B.constructor.name==="WebGL2RenderingContext";let i=I.precision!==void 0?I.precision:"highp";const o=Q(i);o!==i&&(console.warn("THREE.WebGLRenderer:",i,"not supported, using",o,"instead."),i=o);const e=E||A.has("WEBGL_draw_buffers"),t=I.logarithmicDepthBuffer===!0,a=B.getParameter(B.MAX_TEXTURE_IMAGE_UNITS),s=B.getParameter(B.MAX_VERTEX_TEXTURE_IMAGE_UNITS),n=B.getParameter(B.MAX_TEXTURE_SIZE),r=B.getParameter(B.MAX_CUBE_MAP_TEXTURE_SIZE),G=B.getParameter(B.MAX_VERTEX_ATTRIBS),h=B.getParameter(B.MAX_VERTEX_UNIFORM_VECTORS),D=B.getParameter(B.MAX_VARYING_VECTORS),S=B.getParameter(B.MAX_FRAGMENT_UNIFORM_VECTORS),w=s>0,k=E||A.has("OES_texture_float"),M=w&&k,U=E?B.getParameter(B.MAX_SAMPLES):0;return{isWebGL2:E,drawBuffers:e,getMaxAnisotropy:C,getMaxPrecision:Q,precision:i,logarithmicDepthBuffer:t,maxTextures:a,maxVertexTextures:s,maxTextureSize:n,maxCubemapSize:r,maxAttributes:G,maxVertexUniforms:h,maxVaryings:D,maxFragmentUniforms:S,vertexTextures:w,floatFragmentTextures:k,floatVertexTextures:M,maxSamples:U}}function Qw(B){const A=this;let I=null,g=0,C=!1,Q=!1;const E=new xC,i=new PA,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(a,s){const n=a.length!==0||s||g!==0||C;return C=s,g=a.length,n},this.beginShadows=function(){Q=!0,t(null)},this.endShadows=function(){Q=!1},this.setGlobalState=function(a,s){I=t(a,s,0)},this.setState=function(a,s,n){const r=a.clippingPlanes,G=a.clipIntersection,h=a.clipShadows,D=B.get(a);if(!C||r===null||r.length===0||Q&&!h)Q?t(null):e();else{const S=Q?0:g,w=S*4;let k=D.clippingState||null;o.value=k,k=t(r,s,w,n);for(let M=0;M!==w;++M)k[M]=I[M];D.clippingState=k,this.numIntersection=G?this.numPlanes:0,this.numPlanes+=S}};function e(){o.value!==I&&(o.value=I,o.needsUpdate=g>0),A.numPlanes=g,A.numIntersection=0}function t(a,s,n,r){const G=a!==null?a.length:0;let h=null;if(G!==0){if(h=o.value,r!==!0||h===null){const D=n+G*4,S=s.matrixWorldInverse;i.getNormalMatrix(S),(h===null||h.length<D)&&(h=new Float32Array(D));for(let w=0,k=n;w!==G;++w,k+=4)E.copy(a[w]).applyMatrix4(S,i),E.normal.toArray(h,k),h[k+3]=E.constant}o.value=h,o.needsUpdate=!0}return A.numPlanes=G,A.numIntersection=0,h}}function Ew(B){let A=new WeakMap;function I(E,i){return i===_i?E.mapping=mB:i===Xi&&(E.mapping=bB),E}function g(E){if(E&&E.isTexture&&E.isRenderTargetTexture===!1){const i=E.mapping;if(i===_i||i===Xi)if(A.has(E)){const o=A.get(E).texture;return I(o,E.mapping)}else{const o=E.image;if(o&&o.height>0){const e=new lh(o.height/2);return e.fromEquirectangularTexture(B,E),A.set(E,e),E.addEventListener("dispose",C),I(e.texture,E.mapping)}else return null}}return E}function C(E){const i=E.target;i.removeEventListener("dispose",C);const o=A.get(i);o!==void 0&&(A.delete(i),o.dispose())}function Q(){A=new WeakMap}return{get:g,dispose:Q}}class xE extends Fo{constructor(A=-1,I=1,g=1,C=-1,Q=.1,E=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=A,this.right=I,this.top=g,this.bottom=C,this.near=Q,this.far=E,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.left=A.left,this.right=A.right,this.top=A.top,this.bottom=A.bottom,this.near=A.near,this.far=A.far,this.zoom=A.zoom,this.view=A.view===null?null:Object.assign({},A.view),this}setViewOffset(A,I,g,C,Q,E){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=C,this.view.width=Q,this.view.height=E,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=(this.right-this.left)/(2*this.zoom),I=(this.top-this.bottom)/(2*this.zoom),g=(this.right+this.left)/2,C=(this.top+this.bottom)/2;let Q=g-A,E=g+A,i=C+I,o=C-I;if(this.view!==null&&this.view.enabled){const e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;Q+=e*this.view.offsetX,E=Q+e*this.view.width,i-=t*this.view.offsetY,o=i-t*this.view.height}this.projectionMatrix.makeOrthographic(Q,E,i,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.zoom=this.zoom,I.object.left=this.left,I.object.right=this.right,I.object.top=this.top,I.object.bottom=this.bottom,I.object.near=this.near,I.object.far=this.far,this.view!==null&&(I.object.view=Object.assign({},this.view)),I}}const FB=4,nt=[.125,.215,.35,.446,.526,.582],ZC=20,qi=new xE,ht=new LA;let di=null;const OC=(1+Math.sqrt(5))/2,yB=1/OC,rt=[new f(1,1,1),new f(-1,1,1),new f(1,1,-1),new f(-1,1,-1),new f(0,OC,yB),new f(0,OC,-yB),new f(yB,0,OC),new f(-yB,0,OC),new f(OC,yB,0),new f(-OC,yB,0)];class ct{constructor(A){this._renderer=A,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(A,I=0,g=.1,C=100){di=this._renderer.getRenderTarget(),this._setSize(256);const Q=this._allocateTargets();return Q.depthBuffer=!0,this._sceneToCubeUV(A,g,C,Q),I>0&&this._blur(Q,0,0,I),this._applyPMREM(Q),this._cleanup(Q),Q}fromEquirectangular(A,I=null){return this._fromTexture(A,I)}fromCubemap(A,I=null){return this._fromTexture(A,I)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=St(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gt(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(A){this._lodMax=Math.floor(Math.log2(A)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let A=0;A<this._lodPlanes.length;A++)this._lodPlanes[A].dispose()}_cleanup(A){this._renderer.setRenderTarget(di),A.scissorTest=!1,oE(A,0,0,A.width,A.height)}_fromTexture(A,I){A.mapping===mB||A.mapping===bB?this._setSize(A.image.length===0?16:A.image[0].width||A.image[0].image.width):this._setSize(A.image.width/4),di=this._renderer.getRenderTarget();const g=I||this._allocateTargets();return this._textureToCubeUV(A,g),this._applyPMREM(g),this._cleanup(g),g}_allocateTargets(){const A=3*Math.max(this._cubeSize,112),I=4*this._cubeSize,g={magFilter:Eg,minFilter:Eg,generateMipmaps:!1,type:xB,format:lg,colorSpace:pg,depthBuffer:!1},C=wt(A,I,g);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==A||this._pingPongRenderTarget.height!==I){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wt(A,I,g);const{_lodMax:Q}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=iw(Q)),this._blurMaterial=ow(Q,A,I)}return C}_compileMaterial(A){const I=new Bg(this._lodPlanes[0],A);this._renderer.compile(I,qi)}_sceneToCubeUV(A,I,g,C){const i=new _I(90,1,I,g),o=[1,-1,1,1,1,1],e=[1,1,1,-1,-1,-1],t=this._renderer,a=t.autoClear,s=t.toneMapping;t.getClearColor(ht),t.toneMapping=bg,t.autoClear=!1;const n=new PC({name:"PMREM.Background",side:ig,depthWrite:!1,depthTest:!1}),r=new Bg(new AQ,n);let G=!1;const h=A.background;h?h.isColor&&(n.color.copy(h),A.background=null,G=!0):(n.color.copy(ht),G=!0);for(let D=0;D<6;D++){const S=D%3;S===0?(i.up.set(0,o[D],0),i.lookAt(e[D],0,0)):S===1?(i.up.set(0,0,o[D]),i.lookAt(0,e[D],0)):(i.up.set(0,o[D],0),i.lookAt(0,0,e[D]));const w=this._cubeSize;oE(C,S*w,D>2?w:0,w,w),t.setRenderTarget(C),G&&t.render(r,i),t.render(A,i)}r.geometry.dispose(),r.material.dispose(),t.toneMapping=s,t.autoClear=a,A.background=h}_textureToCubeUV(A,I){const g=this._renderer,C=A.mapping===mB||A.mapping===bB;C?(this._cubemapMaterial===null&&(this._cubemapMaterial=St()),this._cubemapMaterial.uniforms.flipEnvMap.value=A.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gt());const Q=C?this._cubemapMaterial:this._equirectMaterial,E=new Bg(this._lodPlanes[0],Q),i=Q.uniforms;i.envMap.value=A;const o=this._cubeSize;oE(I,0,0,3*o,2*o),g.setRenderTarget(I),g.render(E,qi)}_applyPMREM(A){const I=this._renderer,g=I.autoClear;I.autoClear=!1;for(let C=1;C<this._lodPlanes.length;C++){const Q=Math.sqrt(this._sigmas[C]*this._sigmas[C]-this._sigmas[C-1]*this._sigmas[C-1]),E=rt[(C-1)%rt.length];this._blur(A,C-1,C,Q,E)}I.autoClear=g}_blur(A,I,g,C,Q){const E=this._pingPongRenderTarget;this._halfBlur(A,E,I,g,C,"latitudinal",Q),this._halfBlur(E,A,g,g,C,"longitudinal",Q)}_halfBlur(A,I,g,C,Q,E,i){const o=this._renderer,e=this._blurMaterial;E!=="latitudinal"&&E!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const t=3,a=new Bg(this._lodPlanes[C],e),s=e.uniforms,n=this._sizeLods[g]-1,r=isFinite(Q)?Math.PI/(2*n):2*Math.PI/(2*ZC-1),G=Q/r,h=isFinite(Q)?1+Math.floor(t*G):ZC;h>ZC&&console.warn(`sigmaRadians, ${Q}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${ZC}`);const D=[];let S=0;for(let q=0;q<ZC;++q){const F=q/G,l=Math.exp(-F*F/2);D.push(l),q===0?S+=l:q<h&&(S+=2*l)}for(let q=0;q<D.length;q++)D[q]=D[q]/S;s.envMap.value=A.texture,s.samples.value=h,s.weights.value=D,s.latitudinal.value=E==="latitudinal",i&&(s.poleAxis.value=i);const{_lodMax:w}=this;s.dTheta.value=r,s.mipInt.value=w-g;const k=this._sizeLods[C],M=3*k*(C>w-FB?C-w+FB:0),U=4*(this._cubeSize-k);oE(I,M,U,3*k,2*k),o.setRenderTarget(I),o.render(a,qi)}}function iw(B){const A=[],I=[],g=[];let C=B;const Q=B-FB+1+nt.length;for(let E=0;E<Q;E++){const i=Math.pow(2,C);I.push(i);let o=1/i;E>B-FB?o=nt[E-B+FB-1]:E===0&&(o=0),g.push(o);const e=1/(i-2),t=-e,a=1+e,s=[t,t,a,t,a,a,t,t,a,a,t,a],n=6,r=6,G=3,h=2,D=1,S=new Float32Array(G*r*n),w=new Float32Array(h*r*n),k=new Float32Array(D*r*n);for(let U=0;U<n;U++){const q=U%3*2/3-1,F=U>2?0:-1,l=[q,F,0,q+2/3,F,0,q+2/3,F+1,0,q,F,0,q+2/3,F+1,0,q,F+1,0];S.set(l,G*r*U),w.set(s,h*r*U);const y=[U,U,U,U,U,U];k.set(y,D*r*U)}const M=new yg;M.setAttribute("position",new WI(S,G)),M.setAttribute("uv",new WI(w,h)),M.setAttribute("faceIndex",new WI(k,D)),A.push(M),C>FB&&C--}return{lodPlanes:A,sizeLods:I,sigmas:g}}function wt(B,A,I){const g=new KC(B,A,I);return g.texture.mapping=bE,g.texture.name="PMREM.cubeUv",g.scissorTest=!0,g}function oE(B,A,I,g,C){B.viewport.set(A,I,g,C),B.scissor.set(A,I,g,C)}function ow(B,A,I){const g=new Float32Array(ZC),C=new f(0,1,0);return new tC({name:"SphericalGaussianBlur",defines:{n:ZC,CUBEUV_TEXEL_WIDTH:1/A,CUBEUV_TEXEL_HEIGHT:1/I,CUBEUV_MAX_MIP:`${B}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:g},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:C}},vertexShader:qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:lC,depthTest:!1,depthWrite:!1})}function Gt(){return new tC({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:lC,depthTest:!1,depthWrite:!1})}function St(){return new tC({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:lC,depthTest:!1,depthWrite:!1})}function qo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ew(B){let A=new WeakMap,I=null;function g(i){if(i&&i.isTexture){const o=i.mapping,e=o===_i||o===Xi,t=o===mB||o===bB;if(e||t)if(i.isRenderTargetTexture&&i.needsPMREMUpdate===!0){i.needsPMREMUpdate=!1;let a=A.get(i);return I===null&&(I=new ct(B)),a=e?I.fromEquirectangular(i,a):I.fromCubemap(i,a),A.set(i,a),a.texture}else{if(A.has(i))return A.get(i).texture;{const a=i.image;if(e&&a&&a.height>0||t&&a&&C(a)){I===null&&(I=new ct(B));const s=e?I.fromEquirectangular(i):I.fromCubemap(i);return A.set(i,s),i.addEventListener("dispose",Q),s.texture}else return null}}}return i}function C(i){let o=0;const e=6;for(let t=0;t<e;t++)i[t]!==void 0&&o++;return o===e}function Q(i){const o=i.target;o.removeEventListener("dispose",Q);const e=A.get(o);e!==void 0&&(A.delete(o),e.dispose())}function E(){A=new WeakMap,I!==null&&(I.dispose(),I=null)}return{get:g,dispose:E}}function tw(B){const A={};function I(g){if(A[g]!==void 0)return A[g];let C;switch(g){case"WEBGL_depth_texture":C=B.getExtension("WEBGL_depth_texture")||B.getExtension("MOZ_WEBGL_depth_texture")||B.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":C=B.getExtension("EXT_texture_filter_anisotropic")||B.getExtension("MOZ_EXT_texture_filter_anisotropic")||B.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":C=B.getExtension("WEBGL_compressed_texture_s3tc")||B.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||B.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":C=B.getExtension("WEBGL_compressed_texture_pvrtc")||B.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:C=B.getExtension(g)}return A[g]=C,C}return{has:function(g){return I(g)!==null},init:function(g){g.isWebGL2?I("EXT_color_buffer_float"):(I("WEBGL_depth_texture"),I("OES_texture_float"),I("OES_texture_half_float"),I("OES_texture_half_float_linear"),I("OES_standard_derivatives"),I("OES_element_index_uint"),I("OES_vertex_array_object"),I("ANGLE_instanced_arrays")),I("OES_texture_float_linear"),I("EXT_color_buffer_half_float"),I("WEBGL_multisampled_render_to_texture")},get:function(g){const C=I(g);return C===null&&console.warn("THREE.WebGLRenderer: "+g+" extension not supported."),C}}}function aw(B,A,I,g){const C={},Q=new WeakMap;function E(a){const s=a.target;s.index!==null&&A.remove(s.index);for(const r in s.attributes)A.remove(s.attributes[r]);for(const r in s.morphAttributes){const G=s.morphAttributes[r];for(let h=0,D=G.length;h<D;h++)A.remove(G[h])}s.removeEventListener("dispose",E),delete C[s.id];const n=Q.get(s);n&&(A.remove(n),Q.delete(s)),g.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,I.memory.geometries--}function i(a,s){return C[s.id]===!0||(s.addEventListener("dispose",E),C[s.id]=!0,I.memory.geometries++),s}function o(a){const s=a.attributes;for(const r in s)A.update(s[r],B.ARRAY_BUFFER);const n=a.morphAttributes;for(const r in n){const G=n[r];for(let h=0,D=G.length;h<D;h++)A.update(G[h],B.ARRAY_BUFFER)}}function e(a){const s=[],n=a.index,r=a.attributes.position;let G=0;if(n!==null){const S=n.array;G=n.version;for(let w=0,k=S.length;w<k;w+=3){const M=S[w+0],U=S[w+1],q=S[w+2];s.push(M,U,U,q,q,M)}}else{const S=r.array;G=r.version;for(let w=0,k=S.length/3-1;w<k;w+=3){const M=w+0,U=w+1,q=w+2;s.push(M,U,U,q,q,M)}}const h=new(as(s)?cs:rs)(s,1);h.version=G;const D=Q.get(a);D&&A.remove(D),Q.set(a,h)}function t(a){const s=Q.get(a);if(s){const n=a.index;n!==null&&s.version<n.version&&e(a)}else e(a);return Q.get(a)}return{get:i,update:o,getWireframeAttribute:t}}function sw(B,A,I,g){const C=g.isWebGL2;let Q;function E(s){Q=s}let i,o;function e(s){i=s.type,o=s.bytesPerElement}function t(s,n){B.drawElements(Q,n,i,s*o),I.update(n,Q,1)}function a(s,n,r){if(r===0)return;let G,h;if(C)G=B,h="drawElementsInstanced";else if(G=A.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",G===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}G[h](Q,n,i,s*o,r),I.update(n,Q,r)}this.setMode=E,this.setIndex=e,this.render=t,this.renderInstances=a}function Dw(B){const A={geometries:0,textures:0},I={frame:0,calls:0,triangles:0,points:0,lines:0};function g(Q,E,i){switch(I.calls++,E){case B.TRIANGLES:I.triangles+=i*(Q/3);break;case B.LINES:I.lines+=i*(Q/2);break;case B.LINE_STRIP:I.lines+=i*(Q-1);break;case B.LINE_LOOP:I.lines+=i*Q;break;case B.POINTS:I.points+=i*Q;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",E);break}}function C(){I.calls=0,I.triangles=0,I.points=0,I.lines=0}return{memory:A,render:I,programs:null,autoReset:!0,reset:C,update:g}}function nw(B,A){return B[0]-A[0]}function hw(B,A){return Math.abs(A[1])-Math.abs(B[1])}function rw(B,A,I){const g={},C=new Float32Array(8),Q=new WeakMap,E=new DI,i=[];for(let e=0;e<8;e++)i[e]=[e,0];function o(e,t,a){const s=e.morphTargetInfluences;if(A.isWebGL2===!0){const n=t.morphAttributes.position||t.morphAttributes.normal||t.morphAttributes.color,r=n!==void 0?n.length:0;let G=Q.get(t);if(G===void 0||G.count!==r){let P=function(){u.dispose(),Q.delete(t),t.removeEventListener("dispose",P)};G!==void 0&&G.texture.dispose();const S=t.morphAttributes.position!==void 0,w=t.morphAttributes.normal!==void 0,k=t.morphAttributes.color!==void 0,M=t.morphAttributes.position||[],U=t.morphAttributes.normal||[],q=t.morphAttributes.color||[];let F=0;S===!0&&(F=1),w===!0&&(F=2),k===!0&&(F=3);let l=t.attributes.position.count*F,y=1;l>A.maxTextureSize&&(y=Math.ceil(l/A.maxTextureSize),l=A.maxTextureSize);const O=new Float32Array(l*y*4*r),u=new ns(O,l,y,r);u.type=QC,u.needsUpdate=!0;const d=F*4;for(let H=0;H<r;H++){const CA=M[H],V=U[H],b=q[H],IA=l*y*4*H;for(let BA=0;BA<CA.count;BA++){const _=BA*d;S===!0&&(E.fromBufferAttribute(CA,BA),O[IA+_+0]=E.x,O[IA+_+1]=E.y,O[IA+_+2]=E.z,O[IA+_+3]=0),w===!0&&(E.fromBufferAttribute(V,BA),O[IA+_+4]=E.x,O[IA+_+5]=E.y,O[IA+_+6]=E.z,O[IA+_+7]=0),k===!0&&(E.fromBufferAttribute(b,BA),O[IA+_+8]=E.x,O[IA+_+9]=E.y,O[IA+_+10]=E.z,O[IA+_+11]=b.itemSize===4?E.w:1)}}G={count:r,texture:u,size:new dA(l,y)},Q.set(t,G),t.addEventListener("dispose",P)}let h=0;for(let S=0;S<s.length;S++)h+=s[S];const D=t.morphTargetsRelative?1:1-h;a.getUniforms().setValue(B,"morphTargetBaseInfluence",D),a.getUniforms().setValue(B,"morphTargetInfluences",s),a.getUniforms().setValue(B,"morphTargetsTexture",G.texture,I),a.getUniforms().setValue(B,"morphTargetsTextureSize",G.size)}else{const n=s===void 0?0:s.length;let r=g[t.id];if(r===void 0||r.length!==n){r=[];for(let w=0;w<n;w++)r[w]=[w,0];g[t.id]=r}for(let w=0;w<n;w++){const k=r[w];k[0]=w,k[1]=s[w]}r.sort(hw);for(let w=0;w<8;w++)w<n&&r[w][1]?(i[w][0]=r[w][0],i[w][1]=r[w][1]):(i[w][0]=Number.MAX_SAFE_INTEGER,i[w][1]=0);i.sort(nw);const G=t.morphAttributes.position,h=t.morphAttributes.normal;let D=0;for(let w=0;w<8;w++){const k=i[w],M=k[0],U=k[1];M!==Number.MAX_SAFE_INTEGER&&U?(G&&t.getAttribute("morphTarget"+w)!==G[M]&&t.setAttribute("morphTarget"+w,G[M]),h&&t.getAttribute("morphNormal"+w)!==h[M]&&t.setAttribute("morphNormal"+w,h[M]),C[w]=U,D+=U):(G&&t.hasAttribute("morphTarget"+w)===!0&&t.deleteAttribute("morphTarget"+w),h&&t.hasAttribute("morphNormal"+w)===!0&&t.deleteAttribute("morphNormal"+w),C[w]=0)}const S=t.morphTargetsRelative?1:1-D;a.getUniforms().setValue(B,"morphTargetBaseInfluence",S),a.getUniforms().setValue(B,"morphTargetInfluences",C)}}return{update:o}}function cw(B,A,I,g){let C=new WeakMap;function Q(o){const e=g.render.frame,t=o.geometry,a=A.get(o,t);return C.get(a)!==e&&(A.update(a),C.set(a,e)),o.isInstancedMesh&&(o.hasEventListener("dispose",i)===!1&&o.addEventListener("dispose",i),I.update(o.instanceMatrix,B.ARRAY_BUFFER),o.instanceColor!==null&&I.update(o.instanceColor,B.ARRAY_BUFFER)),a}function E(){C=new WeakMap}function i(o){const e=o.target;e.removeEventListener("dispose",i),I.remove(e.instanceMatrix),e.instanceColor!==null&&I.remove(e.instanceColor)}return{update:Q,dispose:E}}const ls=new YI,Ms=new ns,ys=new ih,Us=new Ss,kt=[],lt=[],Mt=new Float32Array(16),yt=new Float32Array(9),Ut=new Float32Array(4);function IQ(B,A,I){const g=B[0];if(g<=0||g>0)return B;const C=A*I;let Q=kt[C];if(Q===void 0&&(Q=new Float32Array(C),kt[C]=Q),A!==0){g.toArray(Q,0);for(let E=1,i=0;E!==A;++E)i+=I,B[E].toArray(Q,i)}return Q}function mI(B,A){if(B.length!==A.length)return!1;for(let I=0,g=B.length;I<g;I++)if(B[I]!==A[I])return!1;return!0}function bI(B,A){for(let I=0,g=A.length;I<g;I++)B[I]=A[I]}function OE(B,A){let I=lt[A];I===void 0&&(I=new Int32Array(A),lt[A]=I);for(let g=0;g!==A;++g)I[g]=B.allocateTextureUnit();return I}function ww(B,A){const I=this.cache;I[0]!==A&&(B.uniform1f(this.addr,A),I[0]=A)}function Gw(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(B.uniform2f(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(mI(I,A))return;B.uniform2fv(this.addr,A),bI(I,A)}}function Sw(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(B.uniform3f(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else if(A.r!==void 0)(I[0]!==A.r||I[1]!==A.g||I[2]!==A.b)&&(B.uniform3f(this.addr,A.r,A.g,A.b),I[0]=A.r,I[1]=A.g,I[2]=A.b);else{if(mI(I,A))return;B.uniform3fv(this.addr,A),bI(I,A)}}function kw(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(B.uniform4f(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(mI(I,A))return;B.uniform4fv(this.addr,A),bI(I,A)}}function lw(B,A){const I=this.cache,g=A.elements;if(g===void 0){if(mI(I,A))return;B.uniformMatrix2fv(this.addr,!1,A),bI(I,A)}else{if(mI(I,g))return;Ut.set(g),B.uniformMatrix2fv(this.addr,!1,Ut),bI(I,g)}}function Mw(B,A){const I=this.cache,g=A.elements;if(g===void 0){if(mI(I,A))return;B.uniformMatrix3fv(this.addr,!1,A),bI(I,A)}else{if(mI(I,g))return;yt.set(g),B.uniformMatrix3fv(this.addr,!1,yt),bI(I,g)}}function yw(B,A){const I=this.cache,g=A.elements;if(g===void 0){if(mI(I,A))return;B.uniformMatrix4fv(this.addr,!1,A),bI(I,A)}else{if(mI(I,g))return;Mt.set(g),B.uniformMatrix4fv(this.addr,!1,Mt),bI(I,g)}}function Uw(B,A){const I=this.cache;I[0]!==A&&(B.uniform1i(this.addr,A),I[0]=A)}function Nw(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(B.uniform2i(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(mI(I,A))return;B.uniform2iv(this.addr,A),bI(I,A)}}function Kw(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(B.uniform3i(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(mI(I,A))return;B.uniform3iv(this.addr,A),bI(I,A)}}function Jw(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(B.uniform4i(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(mI(I,A))return;B.uniform4iv(this.addr,A),bI(I,A)}}function Fw(B,A){const I=this.cache;I[0]!==A&&(B.uniform1ui(this.addr,A),I[0]=A)}function Rw(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(B.uniform2ui(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(mI(I,A))return;B.uniform2uiv(this.addr,A),bI(I,A)}}function qw(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(B.uniform3ui(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(mI(I,A))return;B.uniform3uiv(this.addr,A),bI(I,A)}}function dw(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(B.uniform4ui(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(mI(I,A))return;B.uniform4uiv(this.addr,A),bI(I,A)}}function pw(B,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(B.uniform1i(this.addr,C),g[0]=C),I.setTexture2D(A||ls,C)}function fw(B,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(B.uniform1i(this.addr,C),g[0]=C),I.setTexture3D(A||ys,C)}function Yw(B,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(B.uniform1i(this.addr,C),g[0]=C),I.setTextureCube(A||Us,C)}function Lw(B,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(B.uniform1i(this.addr,C),g[0]=C),I.setTexture2DArray(A||Ms,C)}function uw(B){switch(B){case 5126:return ww;case 35664:return Gw;case 35665:return Sw;case 35666:return kw;case 35674:return lw;case 35675:return Mw;case 35676:return yw;case 5124:case 35670:return Uw;case 35667:case 35671:return Nw;case 35668:case 35672:return Kw;case 35669:case 35673:return Jw;case 5125:return Fw;case 36294:return Rw;case 36295:return qw;case 36296:return dw;case 35678:case 36198:case 36298:case 36306:case 35682:return pw;case 35679:case 36299:case 36307:return fw;case 35680:case 36300:case 36308:case 36293:return Yw;case 36289:case 36303:case 36311:case 36292:return Lw}}function Hw(B,A){B.uniform1fv(this.addr,A)}function mw(B,A){const I=IQ(A,this.size,2);B.uniform2fv(this.addr,I)}function bw(B,A){const I=IQ(A,this.size,3);B.uniform3fv(this.addr,I)}function Tw(B,A){const I=IQ(A,this.size,4);B.uniform4fv(this.addr,I)}function xw(B,A){const I=IQ(A,this.size,4);B.uniformMatrix2fv(this.addr,!1,I)}function Ow(B,A){const I=IQ(A,this.size,9);B.uniformMatrix3fv(this.addr,!1,I)}function Zw(B,A){const I=IQ(A,this.size,16);B.uniformMatrix4fv(this.addr,!1,I)}function Pw(B,A){B.uniform1iv(this.addr,A)}function vw(B,A){B.uniform2iv(this.addr,A)}function Ww(B,A){B.uniform3iv(this.addr,A)}function jw(B,A){B.uniform4iv(this.addr,A)}function Vw(B,A){B.uniform1uiv(this.addr,A)}function _w(B,A){B.uniform2uiv(this.addr,A)}function Xw(B,A){B.uniform3uiv(this.addr,A)}function zw(B,A){B.uniform4uiv(this.addr,A)}function $w(B,A,I){const g=this.cache,C=A.length,Q=OE(I,C);mI(g,Q)||(B.uniform1iv(this.addr,Q),bI(g,Q));for(let E=0;E!==C;++E)I.setTexture2D(A[E]||ls,Q[E])}function AG(B,A,I){const g=this.cache,C=A.length,Q=OE(I,C);mI(g,Q)||(B.uniform1iv(this.addr,Q),bI(g,Q));for(let E=0;E!==C;++E)I.setTexture3D(A[E]||ys,Q[E])}function IG(B,A,I){const g=this.cache,C=A.length,Q=OE(I,C);mI(g,Q)||(B.uniform1iv(this.addr,Q),bI(g,Q));for(let E=0;E!==C;++E)I.setTextureCube(A[E]||Us,Q[E])}function gG(B,A,I){const g=this.cache,C=A.length,Q=OE(I,C);mI(g,Q)||(B.uniform1iv(this.addr,Q),bI(g,Q));for(let E=0;E!==C;++E)I.setTexture2DArray(A[E]||Ms,Q[E])}function CG(B){switch(B){case 5126:return Hw;case 35664:return mw;case 35665:return bw;case 35666:return Tw;case 35674:return xw;case 35675:return Ow;case 35676:return Zw;case 5124:case 35670:return Pw;case 35667:case 35671:return vw;case 35668:case 35672:return Ww;case 35669:case 35673:return jw;case 5125:return Vw;case 36294:return _w;case 36295:return Xw;case 36296:return zw;case 35678:case 36198:case 36298:case 36306:case 35682:return $w;case 35679:case 36299:case 36307:return AG;case 35680:case 36300:case 36308:case 36293:return IG;case 36289:case 36303:case 36311:case 36292:return gG}}class BG{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.setValue=uw(I.type)}}class QG{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.size=I.size,this.setValue=CG(I.type)}}class EG{constructor(A){this.id=A,this.seq=[],this.map={}}setValue(A,I,g){const C=this.seq;for(let Q=0,E=C.length;Q!==E;++Q){const i=C[Q];i.setValue(A,I[i.id],g)}}}const pi=/(\w+)(\])?(\[|\.)?/g;function Nt(B,A){B.seq.push(A),B.map[A.id]=A}function iG(B,A,I){const g=B.name,C=g.length;for(pi.lastIndex=0;;){const Q=pi.exec(g),E=pi.lastIndex;let i=Q[1];const o=Q[2]==="]",e=Q[3];if(o&&(i=i|0),e===void 0||e==="["&&E+2===C){Nt(I,e===void 0?new BG(i,B,A):new QG(i,B,A));break}else{let a=I.map[i];a===void 0&&(a=new EG(i),Nt(I,a)),I=a}}}class wE{constructor(A,I){this.seq=[],this.map={};const g=A.getProgramParameter(I,A.ACTIVE_UNIFORMS);for(let C=0;C<g;++C){const Q=A.getActiveUniform(I,C),E=A.getUniformLocation(I,Q.name);iG(Q,E,this)}}setValue(A,I,g,C){const Q=this.map[I];Q!==void 0&&Q.setValue(A,g,C)}setOptional(A,I,g){const C=I[g];C!==void 0&&this.setValue(A,g,C)}static upload(A,I,g,C){for(let Q=0,E=I.length;Q!==E;++Q){const i=I[Q],o=g[i.id];o.needsUpdate!==!1&&i.setValue(A,o.value,C)}}static seqWithValue(A,I){const g=[];for(let C=0,Q=A.length;C!==Q;++C){const E=A[C];E.id in I&&g.push(E)}return g}}function Kt(B,A,I){const g=B.createShader(A);return B.shaderSource(g,I),B.compileShader(g),g}let oG=0;function eG(B,A){const I=B.split(`
`),g=[],C=Math.max(A-6,0),Q=Math.min(A+6,I.length);for(let E=C;E<Q;E++){const i=E+1;g.push(`${i===A?">":" "} ${i}: ${I[E]}`)}return g.join(`
`)}function tG(B){switch(B){case pg:return["Linear","( value )"];case qA:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",B),["Linear","( value )"]}}function Jt(B,A,I){const g=B.getShaderParameter(A,B.COMPILE_STATUS),C=B.getShaderInfoLog(A).trim();if(g&&C==="")return"";const Q=/ERROR: 0:(\d+)/.exec(C);if(Q){const E=parseInt(Q[1]);return I.toUpperCase()+`

`+C+`

`+eG(B.getShaderSource(A),E)}else return C}function aG(B,A){const I=tG(A);return"vec4 "+B+"( vec4 value ) { return LinearTo"+I[0]+I[1]+"; }"}function sG(B,A){let I;switch(A){case sn:I="Linear";break;case Dn:I="Reinhard";break;case nn:I="OptimizedCineon";break;case za:I="ACESFilmic";break;case hn:I="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",A),I="Linear"}return"vec3 "+B+"( vec3 color ) { return "+I+"ToneMapping( color ); }"}function DG(B){return[B.extensionDerivatives||B.envMapCubeUVHeight||B.bumpMap||B.normalMapTangentSpace||B.clearcoatNormalMap||B.flatShading||B.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(B.extensionFragDepth||B.logarithmicDepthBuffer)&&B.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",B.extensionDrawBuffers&&B.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(B.extensionShaderTextureLOD||B.envMap||B.transmission)&&B.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(hQ).join(`
`)}function nG(B){const A=[];for(const I in B){const g=B[I];g!==!1&&A.push("#define "+I+" "+g)}return A.join(`
`)}function hG(B,A){const I={},g=B.getProgramParameter(A,B.ACTIVE_ATTRIBUTES);for(let C=0;C<g;C++){const Q=B.getActiveAttrib(A,C),E=Q.name;let i=1;Q.type===B.FLOAT_MAT2&&(i=2),Q.type===B.FLOAT_MAT3&&(i=3),Q.type===B.FLOAT_MAT4&&(i=4),I[E]={type:Q.type,location:B.getAttribLocation(A,E),locationSize:i}}return I}function hQ(B){return B!==""}function Ft(B,A){const I=A.numSpotLightShadows+A.numSpotLightMaps-A.numSpotLightShadowsWithMaps;return B.replace(/NUM_DIR_LIGHTS/g,A.numDirLights).replace(/NUM_SPOT_LIGHTS/g,A.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,A.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,I).replace(/NUM_RECT_AREA_LIGHTS/g,A.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,A.numPointLights).replace(/NUM_HEMI_LIGHTS/g,A.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,A.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,A.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,A.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,A.numPointLightShadows)}function Rt(B,A){return B.replace(/NUM_CLIPPING_PLANES/g,A.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,A.numClippingPlanes-A.numClipIntersection)}const rG=/^[ \t]*#include +<([\w\d./]+)>/gm;function Co(B){return B.replace(rG,cG)}function cG(B,A){const I=OA[A];if(I===void 0)throw new Error("Can not resolve #include <"+A+">");return Co(I)}const wG=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qt(B){return B.replace(wG,GG)}function GG(B,A,I,g){let C="";for(let Q=parseInt(A);Q<parseInt(I);Q++)C+=g.replace(/\[\s*i\s*\]/g,"[ "+Q+" ]").replace(/UNROLLED_LOOP_INDEX/g,Q);return C}function dt(B){let A="precision "+B.precision+` float;
precision `+B.precision+" int;";return B.precision==="highp"?A+=`
#define HIGH_PRECISION`:B.precision==="mediump"?A+=`
#define MEDIUM_PRECISION`:B.precision==="lowp"&&(A+=`
#define LOW_PRECISION`),A}function SG(B){let A="SHADOWMAP_TYPE_BASIC";return B.shadowMapType===Wa?A="SHADOWMAP_TYPE_PCF":B.shadowMapType===ja?A="SHADOWMAP_TYPE_PCF_SOFT":B.shadowMapType===CC&&(A="SHADOWMAP_TYPE_VSM"),A}function kG(B){let A="ENVMAP_TYPE_CUBE";if(B.envMap)switch(B.envMapMode){case mB:case bB:A="ENVMAP_TYPE_CUBE";break;case bE:A="ENVMAP_TYPE_CUBE_UV";break}return A}function lG(B){let A="ENVMAP_MODE_REFLECTION";if(B.envMap)switch(B.envMapMode){case bB:A="ENVMAP_MODE_REFRACTION";break}return A}function MG(B){let A="ENVMAP_BLENDING_NONE";if(B.envMap)switch(B.combine){case Xa:A="ENVMAP_BLENDING_MULTIPLY";break;case tn:A="ENVMAP_BLENDING_MIX";break;case an:A="ENVMAP_BLENDING_ADD";break}return A}function yG(B){const A=B.envMapCubeUVHeight;if(A===null)return null;const I=Math.log2(A)-2,g=1/A;return{texelWidth:1/(3*Math.max(Math.pow(2,I),7*16)),texelHeight:g,maxMip:I}}function UG(B,A,I,g){const C=B.getContext(),Q=I.defines;let E=I.vertexShader,i=I.fragmentShader;const o=SG(I),e=kG(I),t=lG(I),a=MG(I),s=yG(I),n=I.isWebGL2?"":DG(I),r=nG(Q),G=C.createProgram();let h,D,S=I.glslVersion?"#version "+I.glslVersion+`
`:"";I.isRawShaderMaterial?(h=["#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,r].filter(hQ).join(`
`),h.length>0&&(h+=`
`),D=[n,"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,r].filter(hQ).join(`
`),D.length>0&&(D+=`
`)):(h=[dt(I),"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,r,I.instancing?"#define USE_INSTANCING":"",I.instancingColor?"#define USE_INSTANCING_COLOR":"",I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.map?"#define USE_MAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+t:"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",I.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",I.displacementMap?"#define USE_DISPLACEMENTMAP":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.anisotropyMap?"#define USE_ANISOTROPYMAP":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",I.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",I.mapUv?"#define MAP_UV "+I.mapUv:"",I.alphaMapUv?"#define ALPHAMAP_UV "+I.alphaMapUv:"",I.lightMapUv?"#define LIGHTMAP_UV "+I.lightMapUv:"",I.aoMapUv?"#define AOMAP_UV "+I.aoMapUv:"",I.emissiveMapUv?"#define EMISSIVEMAP_UV "+I.emissiveMapUv:"",I.bumpMapUv?"#define BUMPMAP_UV "+I.bumpMapUv:"",I.normalMapUv?"#define NORMALMAP_UV "+I.normalMapUv:"",I.displacementMapUv?"#define DISPLACEMENTMAP_UV "+I.displacementMapUv:"",I.metalnessMapUv?"#define METALNESSMAP_UV "+I.metalnessMapUv:"",I.roughnessMapUv?"#define ROUGHNESSMAP_UV "+I.roughnessMapUv:"",I.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+I.anisotropyMapUv:"",I.clearcoatMapUv?"#define CLEARCOATMAP_UV "+I.clearcoatMapUv:"",I.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+I.clearcoatNormalMapUv:"",I.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+I.clearcoatRoughnessMapUv:"",I.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+I.iridescenceMapUv:"",I.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+I.iridescenceThicknessMapUv:"",I.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+I.sheenColorMapUv:"",I.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+I.sheenRoughnessMapUv:"",I.specularMapUv?"#define SPECULARMAP_UV "+I.specularMapUv:"",I.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+I.specularColorMapUv:"",I.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+I.specularIntensityMapUv:"",I.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+I.transmissionMapUv:"",I.thicknessMapUv?"#define THICKNESSMAP_UV "+I.thicknessMapUv:"",I.vertexTangents?"#define USE_TANGENT":"",I.vertexColors?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUv1s?"#define USE_UV1":"",I.vertexUv2s?"#define USE_UV2":"",I.vertexUv3s?"#define USE_UV3":"",I.pointsUvs?"#define USE_POINTS_UV":"",I.flatShading?"#define FLAT_SHADED":"",I.skinning?"#define USE_SKINNING":"",I.morphTargets?"#define USE_MORPHTARGETS":"",I.morphNormals&&I.flatShading===!1?"#define USE_MORPHNORMALS":"",I.morphColors&&I.isWebGL2?"#define USE_MORPHCOLORS":"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+I.morphTextureStride:"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_COUNT "+I.morphTargetsCount:"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+o:"",I.sizeAttenuation?"#define USE_SIZEATTENUATION":"",I.useLegacyLights?"#define LEGACY_LIGHTS":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",I.logarithmicDepthBuffer&&I.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hQ).join(`
`),D=[n,dt(I),"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,r,I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.map?"#define USE_MAP":"",I.matcap?"#define USE_MATCAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+e:"",I.envMap?"#define "+t:"",I.envMap?"#define "+a:"",s?"#define CUBEUV_TEXEL_WIDTH "+s.texelWidth:"",s?"#define CUBEUV_TEXEL_HEIGHT "+s.texelHeight:"",s?"#define CUBEUV_MAX_MIP "+s.maxMip+".0":"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",I.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.anisotropy?"#define USE_ANISOTROPY":"",I.anisotropyMap?"#define USE_ANISOTROPYMAP":"",I.clearcoat?"#define USE_CLEARCOAT":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.iridescence?"#define USE_IRIDESCENCE":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",I.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.alphaTest?"#define USE_ALPHATEST":"",I.sheen?"#define USE_SHEEN":"",I.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.vertexTangents?"#define USE_TANGENT":"",I.vertexColors||I.instancingColor?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUv1s?"#define USE_UV1":"",I.vertexUv2s?"#define USE_UV2":"",I.vertexUv3s?"#define USE_UV3":"",I.pointsUvs?"#define USE_POINTS_UV":"",I.gradientMap?"#define USE_GRADIENTMAP":"",I.flatShading?"#define FLAT_SHADED":"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+o:"",I.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",I.useLegacyLights?"#define LEGACY_LIGHTS":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",I.logarithmicDepthBuffer&&I.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",I.toneMapping!==bg?"#define TONE_MAPPING":"",I.toneMapping!==bg?OA.tonemapping_pars_fragment:"",I.toneMapping!==bg?sG("toneMapping",I.toneMapping):"",I.dithering?"#define DITHERING":"",I.opaque?"#define OPAQUE":"",OA.encodings_pars_fragment,aG("linearToOutputTexel",I.outputColorSpace),I.useDepthPacking?"#define DEPTH_PACKING "+I.depthPacking:"",`
`].filter(hQ).join(`
`)),E=Co(E),E=Ft(E,I),E=Rt(E,I),i=Co(i),i=Ft(i,I),i=Rt(i,I),E=qt(E),i=qt(i),I.isWebGL2&&I.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,h=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,D=["#define varying in",I.glslVersion===Xe?"":"layout(location = 0) out highp vec4 pc_fragColor;",I.glslVersion===Xe?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+D);const w=S+h+E,k=S+D+i,M=Kt(C,C.VERTEX_SHADER,w),U=Kt(C,C.FRAGMENT_SHADER,k);if(C.attachShader(G,M),C.attachShader(G,U),I.index0AttributeName!==void 0?C.bindAttribLocation(G,0,I.index0AttributeName):I.morphTargets===!0&&C.bindAttribLocation(G,0,"position"),C.linkProgram(G),B.debug.checkShaderErrors){const l=C.getProgramInfoLog(G).trim(),y=C.getShaderInfoLog(M).trim(),O=C.getShaderInfoLog(U).trim();let u=!0,d=!0;if(C.getProgramParameter(G,C.LINK_STATUS)===!1)if(u=!1,typeof B.debug.onShaderError=="function")B.debug.onShaderError(C,G,M,U);else{const P=Jt(C,M,"vertex"),H=Jt(C,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+C.getError()+" - VALIDATE_STATUS "+C.getProgramParameter(G,C.VALIDATE_STATUS)+`

Program Info Log: `+l+`
`+P+`
`+H)}else l!==""?console.warn("THREE.WebGLProgram: Program Info Log:",l):(y===""||O==="")&&(d=!1);d&&(this.diagnostics={runnable:u,programLog:l,vertexShader:{log:y,prefix:h},fragmentShader:{log:O,prefix:D}})}C.deleteShader(M),C.deleteShader(U);let q;this.getUniforms=function(){return q===void 0&&(q=new wE(C,G)),q};let F;return this.getAttributes=function(){return F===void 0&&(F=hG(C,G)),F},this.destroy=function(){g.releaseStatesOfProgram(this),C.deleteProgram(G),this.program=void 0},this.type=I.shaderType,this.name=I.shaderName,this.id=oG++,this.cacheKey=A,this.usedTimes=1,this.program=G,this.vertexShader=M,this.fragmentShader=U,this}let NG=0;class KG{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(A){const I=A.vertexShader,g=A.fragmentShader,C=this._getShaderStage(I),Q=this._getShaderStage(g),E=this._getShaderCacheForMaterial(A);return E.has(C)===!1&&(E.add(C),C.usedTimes++),E.has(Q)===!1&&(E.add(Q),Q.usedTimes++),this}remove(A){const I=this.materialCache.get(A);for(const g of I)g.usedTimes--,g.usedTimes===0&&this.shaderCache.delete(g.code);return this.materialCache.delete(A),this}getVertexShaderID(A){return this._getShaderStage(A.vertexShader).id}getFragmentShaderID(A){return this._getShaderStage(A.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(A){const I=this.materialCache;let g=I.get(A);return g===void 0&&(g=new Set,I.set(A,g)),g}_getShaderStage(A){const I=this.shaderCache;let g=I.get(A);return g===void 0&&(g=new JG(A),I.set(A,g)),g}}class JG{constructor(A){this.id=NG++,this.code=A,this.usedTimes=0}}function FG(B,A,I,g,C,Q,E){const i=new Jo,o=new KG,e=[],t=C.isWebGL2,a=C.logarithmicDepthBuffer,s=C.vertexTextures;let n=C.precision;const r={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function G(l){return l===0?"uv":`uv${l}`}function h(l,y,O,u,d){const P=u.fog,H=d.geometry,CA=l.isMeshStandardMaterial?u.environment:null,V=(l.isMeshStandardMaterial?I:A).get(l.envMap||CA),b=V&&V.mapping===bE?V.image.height:null,IA=r[l.type];l.precision!==null&&(n=C.getMaxPrecision(l.precision),n!==l.precision&&console.warn("THREE.WebGLProgram.getParameters:",l.precision,"not supported, using",n,"instead."));const BA=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,_=BA!==void 0?BA.length:0;let v=0;H.morphAttributes.position!==void 0&&(v=1),H.morphAttributes.normal!==void 0&&(v=2),H.morphAttributes.color!==void 0&&(v=3);let QA,EA,rA,$;if(IA){const qI=Lg[IA];QA=qI.vertexShader,EA=qI.fragmentShader}else QA=l.vertexShader,EA=l.fragmentShader,o.update(l),rA=o.getVertexShaderID(l),$=o.getFragmentShaderID(l);const tA=B.getRenderTarget(),xA=d.isInstancedMesh===!0,FA=!!l.map,JI=!!l.matcap,WA=!!V,x=!!l.aoMap,LI=!!l.lightMap,NA=!!l.bumpMap,HA=!!l.normalMap,KA=!!l.displacementMap,aI=!!l.emissiveMap,ZA=!!l.metalnessMap,YA=!!l.roughnessMap,QI=l.anisotropy>0,uI=l.clearcoat>0,xI=l.iridescence>0,J=l.sheen>0,N=l.transmission>0,X=QI&&!!l.anisotropyMap,eA=uI&&!!l.clearcoatMap,oA=uI&&!!l.clearcoatNormalMap,R=uI&&!!l.clearcoatRoughnessMap,gA=xI&&!!l.iridescenceMap,iA=xI&&!!l.iridescenceThicknessMap,j=J&&!!l.sheenColorMap,SA=J&&!!l.sheenRoughnessMap,yA=!!l.specularMap,MA=!!l.specularColorMap,kA=!!l.specularIntensityMap,wA=N&&!!l.transmissionMap,RA=N&&!!l.thicknessMap,_A=!!l.gradientMap,Y=!!l.alphaMap,DA=l.alphaTest>0,W=!!l.extensions,aA=!!H.attributes.uv1,hA=!!H.attributes.uv2,BI=!!H.attributes.uv3;return{isWebGL2:t,shaderID:IA,shaderType:l.type,shaderName:l.name,vertexShader:QA,fragmentShader:EA,defines:l.defines,customVertexShaderID:rA,customFragmentShaderID:$,isRawShaderMaterial:l.isRawShaderMaterial===!0,glslVersion:l.glslVersion,precision:n,instancing:xA,instancingColor:xA&&d.instanceColor!==null,supportsVertexTextures:s,outputColorSpace:tA===null?B.outputColorSpace:tA.isXRRenderTarget===!0?tA.texture.colorSpace:pg,map:FA,matcap:JI,envMap:WA,envMapMode:WA&&V.mapping,envMapCubeUVHeight:b,aoMap:x,lightMap:LI,bumpMap:NA,normalMap:HA,displacementMap:s&&KA,emissiveMap:aI,normalMapObjectSpace:HA&&l.normalMapType===Fn,normalMapTangentSpace:HA&&l.normalMapType===os,metalnessMap:ZA,roughnessMap:YA,anisotropy:QI,anisotropyMap:X,clearcoat:uI,clearcoatMap:eA,clearcoatNormalMap:oA,clearcoatRoughnessMap:R,iridescence:xI,iridescenceMap:gA,iridescenceThicknessMap:iA,sheen:J,sheenColorMap:j,sheenRoughnessMap:SA,specularMap:yA,specularColorMap:MA,specularIntensityMap:kA,transmission:N,transmissionMap:wA,thicknessMap:RA,gradientMap:_A,opaque:l.transparent===!1&&l.blending===qB,alphaMap:Y,alphaTest:DA,combine:l.combine,mapUv:FA&&G(l.map.channel),aoMapUv:x&&G(l.aoMap.channel),lightMapUv:LI&&G(l.lightMap.channel),bumpMapUv:NA&&G(l.bumpMap.channel),normalMapUv:HA&&G(l.normalMap.channel),displacementMapUv:KA&&G(l.displacementMap.channel),emissiveMapUv:aI&&G(l.emissiveMap.channel),metalnessMapUv:ZA&&G(l.metalnessMap.channel),roughnessMapUv:YA&&G(l.roughnessMap.channel),anisotropyMapUv:X&&G(l.anisotropyMap.channel),clearcoatMapUv:eA&&G(l.clearcoatMap.channel),clearcoatNormalMapUv:oA&&G(l.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:R&&G(l.clearcoatRoughnessMap.channel),iridescenceMapUv:gA&&G(l.iridescenceMap.channel),iridescenceThicknessMapUv:iA&&G(l.iridescenceThicknessMap.channel),sheenColorMapUv:j&&G(l.sheenColorMap.channel),sheenRoughnessMapUv:SA&&G(l.sheenRoughnessMap.channel),specularMapUv:yA&&G(l.specularMap.channel),specularColorMapUv:MA&&G(l.specularColorMap.channel),specularIntensityMapUv:kA&&G(l.specularIntensityMap.channel),transmissionMapUv:wA&&G(l.transmissionMap.channel),thicknessMapUv:RA&&G(l.thicknessMap.channel),alphaMapUv:Y&&G(l.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(HA||QI),vertexColors:l.vertexColors,vertexAlphas:l.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:aA,vertexUv2s:hA,vertexUv3s:BI,pointsUvs:d.isPoints===!0&&!!H.attributes.uv&&(FA||Y),fog:!!P,useFog:l.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:l.flatShading===!0,sizeAttenuation:l.sizeAttenuation===!0,logarithmicDepthBuffer:a,skinning:d.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:_,morphTextureStride:v,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numClippingPlanes:E.numPlanes,numClipIntersection:E.numIntersection,dithering:l.dithering,shadowMapEnabled:B.shadowMap.enabled&&O.length>0,shadowMapType:B.shadowMap.type,toneMapping:l.toneMapped?B.toneMapping:bg,useLegacyLights:B.useLegacyLights,premultipliedAlpha:l.premultipliedAlpha,doubleSided:l.side===Hg,flipSided:l.side===ig,useDepthPacking:l.depthPacking>=0,depthPacking:l.depthPacking||0,index0AttributeName:l.index0AttributeName,extensionDerivatives:W&&l.extensions.derivatives===!0,extensionFragDepth:W&&l.extensions.fragDepth===!0,extensionDrawBuffers:W&&l.extensions.drawBuffers===!0,extensionShaderTextureLOD:W&&l.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:t||g.has("EXT_frag_depth"),rendererExtensionDrawBuffers:t||g.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:t||g.has("EXT_shader_texture_lod"),customProgramCacheKey:l.customProgramCacheKey()}}function D(l){const y=[];if(l.shaderID?y.push(l.shaderID):(y.push(l.customVertexShaderID),y.push(l.customFragmentShaderID)),l.defines!==void 0)for(const O in l.defines)y.push(O),y.push(l.defines[O]);return l.isRawShaderMaterial===!1&&(S(y,l),w(y,l),y.push(B.outputColorSpace)),y.push(l.customProgramCacheKey),y.join()}function S(l,y){l.push(y.precision),l.push(y.outputColorSpace),l.push(y.envMapMode),l.push(y.envMapCubeUVHeight),l.push(y.mapUv),l.push(y.alphaMapUv),l.push(y.lightMapUv),l.push(y.aoMapUv),l.push(y.bumpMapUv),l.push(y.normalMapUv),l.push(y.displacementMapUv),l.push(y.emissiveMapUv),l.push(y.metalnessMapUv),l.push(y.roughnessMapUv),l.push(y.anisotropyMapUv),l.push(y.clearcoatMapUv),l.push(y.clearcoatNormalMapUv),l.push(y.clearcoatRoughnessMapUv),l.push(y.iridescenceMapUv),l.push(y.iridescenceThicknessMapUv),l.push(y.sheenColorMapUv),l.push(y.sheenRoughnessMapUv),l.push(y.specularMapUv),l.push(y.specularColorMapUv),l.push(y.specularIntensityMapUv),l.push(y.transmissionMapUv),l.push(y.thicknessMapUv),l.push(y.combine),l.push(y.fogExp2),l.push(y.sizeAttenuation),l.push(y.morphTargetsCount),l.push(y.morphAttributeCount),l.push(y.numDirLights),l.push(y.numPointLights),l.push(y.numSpotLights),l.push(y.numSpotLightMaps),l.push(y.numHemiLights),l.push(y.numRectAreaLights),l.push(y.numDirLightShadows),l.push(y.numPointLightShadows),l.push(y.numSpotLightShadows),l.push(y.numSpotLightShadowsWithMaps),l.push(y.shadowMapType),l.push(y.toneMapping),l.push(y.numClippingPlanes),l.push(y.numClipIntersection),l.push(y.depthPacking)}function w(l,y){i.disableAll(),y.isWebGL2&&i.enable(0),y.supportsVertexTextures&&i.enable(1),y.instancing&&i.enable(2),y.instancingColor&&i.enable(3),y.matcap&&i.enable(4),y.envMap&&i.enable(5),y.normalMapObjectSpace&&i.enable(6),y.normalMapTangentSpace&&i.enable(7),y.clearcoat&&i.enable(8),y.iridescence&&i.enable(9),y.alphaTest&&i.enable(10),y.vertexColors&&i.enable(11),y.vertexAlphas&&i.enable(12),y.vertexUv1s&&i.enable(13),y.vertexUv2s&&i.enable(14),y.vertexUv3s&&i.enable(15),y.vertexTangents&&i.enable(16),y.anisotropy&&i.enable(17),l.push(i.mask),i.disableAll(),y.fog&&i.enable(0),y.useFog&&i.enable(1),y.flatShading&&i.enable(2),y.logarithmicDepthBuffer&&i.enable(3),y.skinning&&i.enable(4),y.morphTargets&&i.enable(5),y.morphNormals&&i.enable(6),y.morphColors&&i.enable(7),y.premultipliedAlpha&&i.enable(8),y.shadowMapEnabled&&i.enable(9),y.useLegacyLights&&i.enable(10),y.doubleSided&&i.enable(11),y.flipSided&&i.enable(12),y.useDepthPacking&&i.enable(13),y.dithering&&i.enable(14),y.transmission&&i.enable(15),y.sheen&&i.enable(16),y.opaque&&i.enable(17),y.pointsUvs&&i.enable(18),l.push(i.mask)}function k(l){const y=r[l.type];let O;if(y){const u=Lg[y];O=Gs.clone(u.uniforms)}else O=l.uniforms;return O}function M(l,y){let O;for(let u=0,d=e.length;u<d;u++){const P=e[u];if(P.cacheKey===y){O=P,++O.usedTimes;break}}return O===void 0&&(O=new UG(B,y,l,Q),e.push(O)),O}function U(l){if(--l.usedTimes===0){const y=e.indexOf(l);e[y]=e[e.length-1],e.pop(),l.destroy()}}function q(l){o.remove(l)}function F(){o.dispose()}return{getParameters:h,getProgramCacheKey:D,getUniforms:k,acquireProgram:M,releaseProgram:U,releaseShaderCache:q,programs:e,dispose:F}}function RG(){let B=new WeakMap;function A(Q){let E=B.get(Q);return E===void 0&&(E={},B.set(Q,E)),E}function I(Q){B.delete(Q)}function g(Q,E,i){B.get(Q)[E]=i}function C(){B=new WeakMap}return{get:A,remove:I,update:g,dispose:C}}function qG(B,A){return B.groupOrder!==A.groupOrder?B.groupOrder-A.groupOrder:B.renderOrder!==A.renderOrder?B.renderOrder-A.renderOrder:B.material.id!==A.material.id?B.material.id-A.material.id:B.z!==A.z?B.z-A.z:B.id-A.id}function pt(B,A){return B.groupOrder!==A.groupOrder?B.groupOrder-A.groupOrder:B.renderOrder!==A.renderOrder?B.renderOrder-A.renderOrder:B.z!==A.z?A.z-B.z:B.id-A.id}function ft(){const B=[];let A=0;const I=[],g=[],C=[];function Q(){A=0,I.length=0,g.length=0,C.length=0}function E(a,s,n,r,G,h){let D=B[A];return D===void 0?(D={id:a.id,object:a,geometry:s,material:n,groupOrder:r,renderOrder:a.renderOrder,z:G,group:h},B[A]=D):(D.id=a.id,D.object=a,D.geometry=s,D.material=n,D.groupOrder=r,D.renderOrder=a.renderOrder,D.z=G,D.group=h),A++,D}function i(a,s,n,r,G,h){const D=E(a,s,n,r,G,h);n.transmission>0?g.push(D):n.transparent===!0?C.push(D):I.push(D)}function o(a,s,n,r,G,h){const D=E(a,s,n,r,G,h);n.transmission>0?g.unshift(D):n.transparent===!0?C.unshift(D):I.unshift(D)}function e(a,s){I.length>1&&I.sort(a||qG),g.length>1&&g.sort(s||pt),C.length>1&&C.sort(s||pt)}function t(){for(let a=A,s=B.length;a<s;a++){const n=B[a];if(n.id===null)break;n.id=null,n.object=null,n.geometry=null,n.material=null,n.group=null}}return{opaque:I,transmissive:g,transparent:C,init:Q,push:i,unshift:o,finish:t,sort:e}}function dG(){let B=new WeakMap;function A(g,C){const Q=B.get(g);let E;return Q===void 0?(E=new ft,B.set(g,[E])):C>=Q.length?(E=new ft,Q.push(E)):E=Q[C],E}function I(){B=new WeakMap}return{get:A,dispose:I}}function pG(){const B={};return{get:function(A){if(B[A.id]!==void 0)return B[A.id];let I;switch(A.type){case"DirectionalLight":I={direction:new f,color:new LA};break;case"SpotLight":I={position:new f,direction:new f,color:new LA,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":I={position:new f,color:new LA,distance:0,decay:0};break;case"HemisphereLight":I={direction:new f,skyColor:new LA,groundColor:new LA};break;case"RectAreaLight":I={color:new LA,position:new f,halfWidth:new f,halfHeight:new f};break}return B[A.id]=I,I}}}function fG(){const B={};return{get:function(A){if(B[A.id]!==void 0)return B[A.id];let I;switch(A.type){case"DirectionalLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dA};break;case"SpotLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dA};break;case"PointLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dA,shadowCameraNear:1,shadowCameraFar:1e3};break}return B[A.id]=I,I}}}let YG=0;function LG(B,A){return(A.castShadow?2:0)-(B.castShadow?2:0)+(A.map?1:0)-(B.map?1:0)}function uG(B,A){const I=new pG,g=fG(),C={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let t=0;t<9;t++)C.probe.push(new f);const Q=new f,E=new TA,i=new TA;function o(t,a){let s=0,n=0,r=0;for(let O=0;O<9;O++)C.probe[O].set(0,0,0);let G=0,h=0,D=0,S=0,w=0,k=0,M=0,U=0,q=0,F=0;t.sort(LG);const l=a===!0?Math.PI:1;for(let O=0,u=t.length;O<u;O++){const d=t[O],P=d.color,H=d.intensity,CA=d.distance,V=d.shadow&&d.shadow.map?d.shadow.map.texture:null;if(d.isAmbientLight)s+=P.r*H*l,n+=P.g*H*l,r+=P.b*H*l;else if(d.isLightProbe)for(let b=0;b<9;b++)C.probe[b].addScaledVector(d.sh.coefficients[b],H);else if(d.isDirectionalLight){const b=I.get(d);if(b.color.copy(d.color).multiplyScalar(d.intensity*l),d.castShadow){const IA=d.shadow,BA=g.get(d);BA.shadowBias=IA.bias,BA.shadowNormalBias=IA.normalBias,BA.shadowRadius=IA.radius,BA.shadowMapSize=IA.mapSize,C.directionalShadow[G]=BA,C.directionalShadowMap[G]=V,C.directionalShadowMatrix[G]=d.shadow.matrix,k++}C.directional[G]=b,G++}else if(d.isSpotLight){const b=I.get(d);b.position.setFromMatrixPosition(d.matrixWorld),b.color.copy(P).multiplyScalar(H*l),b.distance=CA,b.coneCos=Math.cos(d.angle),b.penumbraCos=Math.cos(d.angle*(1-d.penumbra)),b.decay=d.decay,C.spot[D]=b;const IA=d.shadow;if(d.map&&(C.spotLightMap[q]=d.map,q++,IA.updateMatrices(d),d.castShadow&&F++),C.spotLightMatrix[D]=IA.matrix,d.castShadow){const BA=g.get(d);BA.shadowBias=IA.bias,BA.shadowNormalBias=IA.normalBias,BA.shadowRadius=IA.radius,BA.shadowMapSize=IA.mapSize,C.spotShadow[D]=BA,C.spotShadowMap[D]=V,U++}D++}else if(d.isRectAreaLight){const b=I.get(d);b.color.copy(P).multiplyScalar(H),b.halfWidth.set(d.width*.5,0,0),b.halfHeight.set(0,d.height*.5,0),C.rectArea[S]=b,S++}else if(d.isPointLight){const b=I.get(d);if(b.color.copy(d.color).multiplyScalar(d.intensity*l),b.distance=d.distance,b.decay=d.decay,d.castShadow){const IA=d.shadow,BA=g.get(d);BA.shadowBias=IA.bias,BA.shadowNormalBias=IA.normalBias,BA.shadowRadius=IA.radius,BA.shadowMapSize=IA.mapSize,BA.shadowCameraNear=IA.camera.near,BA.shadowCameraFar=IA.camera.far,C.pointShadow[h]=BA,C.pointShadowMap[h]=V,C.pointShadowMatrix[h]=d.shadow.matrix,M++}C.point[h]=b,h++}else if(d.isHemisphereLight){const b=I.get(d);b.skyColor.copy(d.color).multiplyScalar(H*l),b.groundColor.copy(d.groundColor).multiplyScalar(H*l),C.hemi[w]=b,w++}}S>0&&(A.isWebGL2||B.has("OES_texture_float_linear")===!0?(C.rectAreaLTC1=sA.LTC_FLOAT_1,C.rectAreaLTC2=sA.LTC_FLOAT_2):B.has("OES_texture_half_float_linear")===!0?(C.rectAreaLTC1=sA.LTC_HALF_1,C.rectAreaLTC2=sA.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),C.ambient[0]=s,C.ambient[1]=n,C.ambient[2]=r;const y=C.hash;(y.directionalLength!==G||y.pointLength!==h||y.spotLength!==D||y.rectAreaLength!==S||y.hemiLength!==w||y.numDirectionalShadows!==k||y.numPointShadows!==M||y.numSpotShadows!==U||y.numSpotMaps!==q)&&(C.directional.length=G,C.spot.length=D,C.rectArea.length=S,C.point.length=h,C.hemi.length=w,C.directionalShadow.length=k,C.directionalShadowMap.length=k,C.pointShadow.length=M,C.pointShadowMap.length=M,C.spotShadow.length=U,C.spotShadowMap.length=U,C.directionalShadowMatrix.length=k,C.pointShadowMatrix.length=M,C.spotLightMatrix.length=U+q-F,C.spotLightMap.length=q,C.numSpotLightShadowsWithMaps=F,y.directionalLength=G,y.pointLength=h,y.spotLength=D,y.rectAreaLength=S,y.hemiLength=w,y.numDirectionalShadows=k,y.numPointShadows=M,y.numSpotShadows=U,y.numSpotMaps=q,C.version=YG++)}function e(t,a){let s=0,n=0,r=0,G=0,h=0;const D=a.matrixWorldInverse;for(let S=0,w=t.length;S<w;S++){const k=t[S];if(k.isDirectionalLight){const M=C.directional[s];M.direction.setFromMatrixPosition(k.matrixWorld),Q.setFromMatrixPosition(k.target.matrixWorld),M.direction.sub(Q),M.direction.transformDirection(D),s++}else if(k.isSpotLight){const M=C.spot[r];M.position.setFromMatrixPosition(k.matrixWorld),M.position.applyMatrix4(D),M.direction.setFromMatrixPosition(k.matrixWorld),Q.setFromMatrixPosition(k.target.matrixWorld),M.direction.sub(Q),M.direction.transformDirection(D),r++}else if(k.isRectAreaLight){const M=C.rectArea[G];M.position.setFromMatrixPosition(k.matrixWorld),M.position.applyMatrix4(D),i.identity(),E.copy(k.matrixWorld),E.premultiply(D),i.extractRotation(E),M.halfWidth.set(k.width*.5,0,0),M.halfHeight.set(0,k.height*.5,0),M.halfWidth.applyMatrix4(i),M.halfHeight.applyMatrix4(i),G++}else if(k.isPointLight){const M=C.point[n];M.position.setFromMatrixPosition(k.matrixWorld),M.position.applyMatrix4(D),n++}else if(k.isHemisphereLight){const M=C.hemi[h];M.direction.setFromMatrixPosition(k.matrixWorld),M.direction.transformDirection(D),h++}}}return{setup:o,setupView:e,state:C}}function Yt(B,A){const I=new uG(B,A),g=[],C=[];function Q(){g.length=0,C.length=0}function E(a){g.push(a)}function i(a){C.push(a)}function o(a){I.setup(g,a)}function e(a){I.setupView(g,a)}return{init:Q,state:{lightsArray:g,shadowsArray:C,lights:I},setupLights:o,setupLightsView:e,pushLight:E,pushShadow:i}}function HG(B,A){let I=new WeakMap;function g(Q,E=0){const i=I.get(Q);let o;return i===void 0?(o=new Yt(B,A),I.set(Q,[o])):E>=i.length?(o=new Yt(B,A),i.push(o)):o=i[E],o}function C(){I=new WeakMap}return{get:g,dispose:C}}class mG extends Tg{constructor(A){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kn,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(A)}copy(A){return super.copy(A),this.depthPacking=A.depthPacking,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this}}class bG extends Tg{constructor(A){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(A)}copy(A){return super.copy(A),this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this}}const TG=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xG=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function OG(B,A,I){let g=new TE;const C=new dA,Q=new dA,E=new DI,i=new mG({depthPacking:Jn}),o=new bG,e={},t=I.maxTextureSize,a={[eC]:ig,[ig]:eC,[Hg]:Hg},s=new tC({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dA},radius:{value:4}},vertexShader:TG,fragmentShader:xG}),n=s.clone();n.defines.HORIZONTAL_PASS=1;const r=new yg;r.setAttribute("position",new WI(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const G=new Bg(r,s),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wa;let D=this.type;this.render=function(M,U,q){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||M.length===0)return;const F=B.getRenderTarget(),l=B.getActiveCubeFace(),y=B.getActiveMipmapLevel(),O=B.state;O.setBlending(lC),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const u=D!==CC&&this.type===CC,d=D===CC&&this.type!==CC;for(let P=0,H=M.length;P<H;P++){const CA=M[P],V=CA.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",CA,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;C.copy(V.mapSize);const b=V.getFrameExtents();if(C.multiply(b),Q.copy(V.mapSize),(C.x>t||C.y>t)&&(C.x>t&&(Q.x=Math.floor(t/b.x),C.x=Q.x*b.x,V.mapSize.x=Q.x),C.y>t&&(Q.y=Math.floor(t/b.y),C.y=Q.y*b.y,V.mapSize.y=Q.y)),V.map===null||u===!0||d===!0){const BA=this.type!==CC?{minFilter:PI,magFilter:PI}:{};V.map!==null&&V.map.dispose(),V.map=new KC(C.x,C.y,BA),V.map.texture.name=CA.name+".shadowMap",V.camera.updateProjectionMatrix()}B.setRenderTarget(V.map),B.clear();const IA=V.getViewportCount();for(let BA=0;BA<IA;BA++){const _=V.getViewport(BA);E.set(Q.x*_.x,Q.y*_.y,Q.x*_.z,Q.y*_.w),O.viewport(E),V.updateMatrices(CA,BA),g=V.getFrustum(),k(U,q,V.camera,CA,this.type)}V.isPointLightShadow!==!0&&this.type===CC&&S(V,q),V.needsUpdate=!1}D=this.type,h.needsUpdate=!1,B.setRenderTarget(F,l,y)};function S(M,U){const q=A.update(G);s.defines.VSM_SAMPLES!==M.blurSamples&&(s.defines.VSM_SAMPLES=M.blurSamples,n.defines.VSM_SAMPLES=M.blurSamples,s.needsUpdate=!0,n.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new KC(C.x,C.y)),s.uniforms.shadow_pass.value=M.map.texture,s.uniforms.resolution.value=M.mapSize,s.uniforms.radius.value=M.radius,B.setRenderTarget(M.mapPass),B.clear(),B.renderBufferDirect(U,null,q,s,G,null),n.uniforms.shadow_pass.value=M.mapPass.texture,n.uniforms.resolution.value=M.mapSize,n.uniforms.radius.value=M.radius,B.setRenderTarget(M.map),B.clear(),B.renderBufferDirect(U,null,q,n,G,null)}function w(M,U,q,F){let l=null;const y=q.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(y!==void 0)l=y;else if(l=q.isPointLight===!0?o:i,B.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const O=l.uuid,u=U.uuid;let d=e[O];d===void 0&&(d={},e[O]=d);let P=d[u];P===void 0&&(P=l.clone(),d[u]=P),l=P}if(l.visible=U.visible,l.wireframe=U.wireframe,F===CC?l.side=U.shadowSide!==null?U.shadowSide:U.side:l.side=U.shadowSide!==null?U.shadowSide:a[U.side],l.alphaMap=U.alphaMap,l.alphaTest=U.alphaTest,l.map=U.map,l.clipShadows=U.clipShadows,l.clippingPlanes=U.clippingPlanes,l.clipIntersection=U.clipIntersection,l.displacementMap=U.displacementMap,l.displacementScale=U.displacementScale,l.displacementBias=U.displacementBias,l.wireframeLinewidth=U.wireframeLinewidth,l.linewidth=U.linewidth,q.isPointLight===!0&&l.isMeshDistanceMaterial===!0){const O=B.properties.get(l);O.light=q}return l}function k(M,U,q,F,l){if(M.visible===!1)return;if(M.layers.test(U.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&l===CC)&&(!M.frustumCulled||g.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,M.matrixWorld);const u=A.update(M),d=M.material;if(Array.isArray(d)){const P=u.groups;for(let H=0,CA=P.length;H<CA;H++){const V=P[H],b=d[V.materialIndex];if(b&&b.visible){const IA=w(M,b,F,l);B.renderBufferDirect(q,null,u,IA,M,V)}}}else if(d.visible){const P=w(M,d,F,l);B.renderBufferDirect(q,null,u,P,M,null)}}const O=M.children;for(let u=0,d=O.length;u<d;u++)k(O[u],U,q,F,l)}}function ZG(B,A,I){const g=I.isWebGL2;function C(){let Y=!1;const DA=new DI;let W=null;const aA=new DI(0,0,0,0);return{setMask:function(hA){W!==hA&&!Y&&(B.colorMask(hA,hA,hA,hA),W=hA)},setLocked:function(hA){Y=hA},setClear:function(hA,BI,MI,qI,pC){pC===!0&&(hA*=qI,BI*=qI,MI*=qI),DA.set(hA,BI,MI,qI),aA.equals(DA)===!1&&(B.clearColor(hA,BI,MI,qI),aA.copy(DA))},reset:function(){Y=!1,W=null,aA.set(-1,0,0,0)}}}function Q(){let Y=!1,DA=null,W=null,aA=null;return{setTest:function(hA){hA?tA(B.DEPTH_TEST):xA(B.DEPTH_TEST)},setMask:function(hA){DA!==hA&&!Y&&(B.depthMask(hA),DA=hA)},setFunc:function(hA){if(W!==hA){switch(hA){case gn:B.depthFunc(B.NEVER);break;case Cn:B.depthFunc(B.ALWAYS);break;case Bn:B.depthFunc(B.LESS);break;case Vi:B.depthFunc(B.LEQUAL);break;case Qn:B.depthFunc(B.EQUAL);break;case En:B.depthFunc(B.GEQUAL);break;case on:B.depthFunc(B.GREATER);break;case en:B.depthFunc(B.NOTEQUAL);break;default:B.depthFunc(B.LEQUAL)}W=hA}},setLocked:function(hA){Y=hA},setClear:function(hA){aA!==hA&&(B.clearDepth(hA),aA=hA)},reset:function(){Y=!1,DA=null,W=null,aA=null}}}function E(){let Y=!1,DA=null,W=null,aA=null,hA=null,BI=null,MI=null,qI=null,pC=null;return{setTest:function(yI){Y||(yI?tA(B.STENCIL_TEST):xA(B.STENCIL_TEST))},setMask:function(yI){DA!==yI&&!Y&&(B.stencilMask(yI),DA=yI)},setFunc:function(yI,fg,$I){(W!==yI||aA!==fg||hA!==$I)&&(B.stencilFunc(yI,fg,$I),W=yI,aA=fg,hA=$I)},setOp:function(yI,fg,$I){(BI!==yI||MI!==fg||qI!==$I)&&(B.stencilOp(yI,fg,$I),BI=yI,MI=fg,qI=$I)},setLocked:function(yI){Y=yI},setClear:function(yI){pC!==yI&&(B.clearStencil(yI),pC=yI)},reset:function(){Y=!1,DA=null,W=null,aA=null,hA=null,BI=null,MI=null,qI=null,pC=null}}}const i=new C,o=new Q,e=new E,t=new WeakMap,a=new WeakMap;let s={},n={},r=new WeakMap,G=[],h=null,D=!1,S=null,w=null,k=null,M=null,U=null,q=null,F=null,l=!1,y=null,O=null,u=null,d=null,P=null;const H=B.getParameter(B.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let CA=!1,V=0;const b=B.getParameter(B.VERSION);b.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(b)[1]),CA=V>=1):b.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(b)[1]),CA=V>=2);let IA=null,BA={};const _=B.getParameter(B.SCISSOR_BOX),v=B.getParameter(B.VIEWPORT),QA=new DI().fromArray(_),EA=new DI().fromArray(v);function rA(Y,DA,W,aA){const hA=new Uint8Array(4),BI=B.createTexture();B.bindTexture(Y,BI),B.texParameteri(Y,B.TEXTURE_MIN_FILTER,B.NEAREST),B.texParameteri(Y,B.TEXTURE_MAG_FILTER,B.NEAREST);for(let MI=0;MI<W;MI++)g&&(Y===B.TEXTURE_3D||Y===B.TEXTURE_2D_ARRAY)?B.texImage3D(DA,0,B.RGBA,1,1,aA,0,B.RGBA,B.UNSIGNED_BYTE,hA):B.texImage2D(DA+MI,0,B.RGBA,1,1,0,B.RGBA,B.UNSIGNED_BYTE,hA);return BI}const $={};$[B.TEXTURE_2D]=rA(B.TEXTURE_2D,B.TEXTURE_2D,1),$[B.TEXTURE_CUBE_MAP]=rA(B.TEXTURE_CUBE_MAP,B.TEXTURE_CUBE_MAP_POSITIVE_X,6),g&&($[B.TEXTURE_2D_ARRAY]=rA(B.TEXTURE_2D_ARRAY,B.TEXTURE_2D_ARRAY,1,1),$[B.TEXTURE_3D]=rA(B.TEXTURE_3D,B.TEXTURE_3D,1,1)),i.setClear(0,0,0,1),o.setClear(1),e.setClear(0),tA(B.DEPTH_TEST),o.setFunc(Vi),KA(!1),aI(Ge),tA(B.CULL_FACE),NA(lC);function tA(Y){s[Y]!==!0&&(B.enable(Y),s[Y]=!0)}function xA(Y){s[Y]!==!1&&(B.disable(Y),s[Y]=!1)}function FA(Y,DA){return n[Y]!==DA?(B.bindFramebuffer(Y,DA),n[Y]=DA,g&&(Y===B.DRAW_FRAMEBUFFER&&(n[B.FRAMEBUFFER]=DA),Y===B.FRAMEBUFFER&&(n[B.DRAW_FRAMEBUFFER]=DA)),!0):!1}function JI(Y,DA){let W=G,aA=!1;if(Y)if(W=r.get(DA),W===void 0&&(W=[],r.set(DA,W)),Y.isWebGLMultipleRenderTargets){const hA=Y.texture;if(W.length!==hA.length||W[0]!==B.COLOR_ATTACHMENT0){for(let BI=0,MI=hA.length;BI<MI;BI++)W[BI]=B.COLOR_ATTACHMENT0+BI;W.length=hA.length,aA=!0}}else W[0]!==B.COLOR_ATTACHMENT0&&(W[0]=B.COLOR_ATTACHMENT0,aA=!0);else W[0]!==B.BACK&&(W[0]=B.BACK,aA=!0);aA&&(I.isWebGL2?B.drawBuffers(W):A.get("WEBGL_draw_buffers").drawBuffersWEBGL(W))}function WA(Y){return h!==Y?(B.useProgram(Y),h=Y,!0):!1}const x={[JB]:B.FUNC_ADD,[PD]:B.FUNC_SUBTRACT,[vD]:B.FUNC_REVERSE_SUBTRACT};if(g)x[Me]=B.MIN,x[ye]=B.MAX;else{const Y=A.get("EXT_blend_minmax");Y!==null&&(x[Me]=Y.MIN_EXT,x[ye]=Y.MAX_EXT)}const LI={[WD]:B.ZERO,[jD]:B.ONE,[VD]:B.SRC_COLOR,[Va]:B.SRC_ALPHA,[In]:B.SRC_ALPHA_SATURATE,[$D]:B.DST_COLOR,[XD]:B.DST_ALPHA,[_D]:B.ONE_MINUS_SRC_COLOR,[_a]:B.ONE_MINUS_SRC_ALPHA,[An]:B.ONE_MINUS_DST_COLOR,[zD]:B.ONE_MINUS_DST_ALPHA};function NA(Y,DA,W,aA,hA,BI,MI,qI){if(Y===lC){D===!0&&(xA(B.BLEND),D=!1);return}if(D===!1&&(tA(B.BLEND),D=!0),Y!==ZD){if(Y!==S||qI!==l){if((w!==JB||U!==JB)&&(B.blendEquation(B.FUNC_ADD),w=JB,U=JB),qI)switch(Y){case qB:B.blendFuncSeparate(B.ONE,B.ONE_MINUS_SRC_ALPHA,B.ONE,B.ONE_MINUS_SRC_ALPHA);break;case Se:B.blendFunc(B.ONE,B.ONE);break;case ke:B.blendFuncSeparate(B.ZERO,B.ONE_MINUS_SRC_COLOR,B.ZERO,B.ONE);break;case le:B.blendFuncSeparate(B.ZERO,B.SRC_COLOR,B.ZERO,B.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case qB:B.blendFuncSeparate(B.SRC_ALPHA,B.ONE_MINUS_SRC_ALPHA,B.ONE,B.ONE_MINUS_SRC_ALPHA);break;case Se:B.blendFunc(B.SRC_ALPHA,B.ONE);break;case ke:B.blendFuncSeparate(B.ZERO,B.ONE_MINUS_SRC_COLOR,B.ZERO,B.ONE);break;case le:B.blendFunc(B.ZERO,B.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}k=null,M=null,q=null,F=null,S=Y,l=qI}return}hA=hA||DA,BI=BI||W,MI=MI||aA,(DA!==w||hA!==U)&&(B.blendEquationSeparate(x[DA],x[hA]),w=DA,U=hA),(W!==k||aA!==M||BI!==q||MI!==F)&&(B.blendFuncSeparate(LI[W],LI[aA],LI[BI],LI[MI]),k=W,M=aA,q=BI,F=MI),S=Y,l=!1}function HA(Y,DA){Y.side===Hg?xA(B.CULL_FACE):tA(B.CULL_FACE);let W=Y.side===ig;DA&&(W=!W),KA(W),Y.blending===qB&&Y.transparent===!1?NA(lC):NA(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.premultipliedAlpha),o.setFunc(Y.depthFunc),o.setTest(Y.depthTest),o.setMask(Y.depthWrite),i.setMask(Y.colorWrite);const aA=Y.stencilWrite;e.setTest(aA),aA&&(e.setMask(Y.stencilWriteMask),e.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),e.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),YA(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?tA(B.SAMPLE_ALPHA_TO_COVERAGE):xA(B.SAMPLE_ALPHA_TO_COVERAGE)}function KA(Y){y!==Y&&(Y?B.frontFace(B.CW):B.frontFace(B.CCW),y=Y)}function aI(Y){Y!==xD?(tA(B.CULL_FACE),Y!==O&&(Y===Ge?B.cullFace(B.BACK):Y===OD?B.cullFace(B.FRONT):B.cullFace(B.FRONT_AND_BACK))):xA(B.CULL_FACE),O=Y}function ZA(Y){Y!==u&&(CA&&B.lineWidth(Y),u=Y)}function YA(Y,DA,W){Y?(tA(B.POLYGON_OFFSET_FILL),(d!==DA||P!==W)&&(B.polygonOffset(DA,W),d=DA,P=W)):xA(B.POLYGON_OFFSET_FILL)}function QI(Y){Y?tA(B.SCISSOR_TEST):xA(B.SCISSOR_TEST)}function uI(Y){Y===void 0&&(Y=B.TEXTURE0+H-1),IA!==Y&&(B.activeTexture(Y),IA=Y)}function xI(Y,DA,W){W===void 0&&(IA===null?W=B.TEXTURE0+H-1:W=IA);let aA=BA[W];aA===void 0&&(aA={type:void 0,texture:void 0},BA[W]=aA),(aA.type!==Y||aA.texture!==DA)&&(IA!==W&&(B.activeTexture(W),IA=W),B.bindTexture(Y,DA||$[Y]),aA.type=Y,aA.texture=DA)}function J(){const Y=BA[IA];Y!==void 0&&Y.type!==void 0&&(B.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function N(){try{B.compressedTexImage2D.apply(B,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function X(){try{B.compressedTexImage3D.apply(B,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function eA(){try{B.texSubImage2D.apply(B,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function oA(){try{B.texSubImage3D.apply(B,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function R(){try{B.compressedTexSubImage2D.apply(B,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function gA(){try{B.compressedTexSubImage3D.apply(B,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function iA(){try{B.texStorage2D.apply(B,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function j(){try{B.texStorage3D.apply(B,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function SA(){try{B.texImage2D.apply(B,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function yA(){try{B.texImage3D.apply(B,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function MA(Y){QA.equals(Y)===!1&&(B.scissor(Y.x,Y.y,Y.z,Y.w),QA.copy(Y))}function kA(Y){EA.equals(Y)===!1&&(B.viewport(Y.x,Y.y,Y.z,Y.w),EA.copy(Y))}function wA(Y,DA){let W=a.get(DA);W===void 0&&(W=new WeakMap,a.set(DA,W));let aA=W.get(Y);aA===void 0&&(aA=B.getUniformBlockIndex(DA,Y.name),W.set(Y,aA))}function RA(Y,DA){const aA=a.get(DA).get(Y);t.get(DA)!==aA&&(B.uniformBlockBinding(DA,aA,Y.__bindingPointIndex),t.set(DA,aA))}function _A(){B.disable(B.BLEND),B.disable(B.CULL_FACE),B.disable(B.DEPTH_TEST),B.disable(B.POLYGON_OFFSET_FILL),B.disable(B.SCISSOR_TEST),B.disable(B.STENCIL_TEST),B.disable(B.SAMPLE_ALPHA_TO_COVERAGE),B.blendEquation(B.FUNC_ADD),B.blendFunc(B.ONE,B.ZERO),B.blendFuncSeparate(B.ONE,B.ZERO,B.ONE,B.ZERO),B.colorMask(!0,!0,!0,!0),B.clearColor(0,0,0,0),B.depthMask(!0),B.depthFunc(B.LESS),B.clearDepth(1),B.stencilMask(4294967295),B.stencilFunc(B.ALWAYS,0,4294967295),B.stencilOp(B.KEEP,B.KEEP,B.KEEP),B.clearStencil(0),B.cullFace(B.BACK),B.frontFace(B.CCW),B.polygonOffset(0,0),B.activeTexture(B.TEXTURE0),B.bindFramebuffer(B.FRAMEBUFFER,null),g===!0&&(B.bindFramebuffer(B.DRAW_FRAMEBUFFER,null),B.bindFramebuffer(B.READ_FRAMEBUFFER,null)),B.useProgram(null),B.lineWidth(1),B.scissor(0,0,B.canvas.width,B.canvas.height),B.viewport(0,0,B.canvas.width,B.canvas.height),s={},IA=null,BA={},n={},r=new WeakMap,G=[],h=null,D=!1,S=null,w=null,k=null,M=null,U=null,q=null,F=null,l=!1,y=null,O=null,u=null,d=null,P=null,QA.set(0,0,B.canvas.width,B.canvas.height),EA.set(0,0,B.canvas.width,B.canvas.height),i.reset(),o.reset(),e.reset()}return{buffers:{color:i,depth:o,stencil:e},enable:tA,disable:xA,bindFramebuffer:FA,drawBuffers:JI,useProgram:WA,setBlending:NA,setMaterial:HA,setFlipSided:KA,setCullFace:aI,setLineWidth:ZA,setPolygonOffset:YA,setScissorTest:QI,activeTexture:uI,bindTexture:xI,unbindTexture:J,compressedTexImage2D:N,compressedTexImage3D:X,texImage2D:SA,texImage3D:yA,updateUBOMapping:wA,uniformBlockBinding:RA,texStorage2D:iA,texStorage3D:j,texSubImage2D:eA,texSubImage3D:oA,compressedTexSubImage2D:R,compressedTexSubImage3D:gA,scissor:MA,viewport:kA,reset:_A}}function PG(B,A,I,g,C,Q,E){const i=C.isWebGL2,o=C.maxTextures,e=C.maxCubemapSize,t=C.maxTextureSize,a=C.maxSamples,s=A.has("WEBGL_multisampled_render_to_texture")?A.get("WEBGL_multisampled_render_to_texture"):null,n=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),r=new WeakMap;let G;const h=new WeakMap;let D=!1;try{D=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(J,N){return D?new OffscreenCanvas(J,N):kQ("canvas")}function w(J,N,X,eA){let oA=1;if((J.width>eA||J.height>eA)&&(oA=eA/Math.max(J.width,J.height)),oA<1||N===!0)if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){const R=N?NE:Math.floor,gA=R(oA*J.width),iA=R(oA*J.height);G===void 0&&(G=S(gA,iA));const j=X?S(gA,iA):G;return j.width=gA,j.height=iA,j.getContext("2d").drawImage(J,0,0,gA,iA),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+gA+"x"+iA+")."),j}else return"data"in J&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),J;return J}function k(J){return go(J.width)&&go(J.height)}function M(J){return i?!1:J.wrapS!==kg||J.wrapT!==kg||J.minFilter!==PI&&J.minFilter!==Eg}function U(J,N){return J.generateMipmaps&&N&&J.minFilter!==PI&&J.minFilter!==Eg}function q(J){B.generateMipmap(J)}function F(J,N,X,eA,oA=!1){if(i===!1)return N;if(J!==null){if(B[J]!==void 0)return B[J];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+J+"'")}let R=N;return N===B.RED&&(X===B.FLOAT&&(R=B.R32F),X===B.HALF_FLOAT&&(R=B.R16F),X===B.UNSIGNED_BYTE&&(R=B.R8)),N===B.RG&&(X===B.FLOAT&&(R=B.RG32F),X===B.HALF_FLOAT&&(R=B.RG16F),X===B.UNSIGNED_BYTE&&(R=B.RG8)),N===B.RGBA&&(X===B.FLOAT&&(R=B.RGBA32F),X===B.HALF_FLOAT&&(R=B.RGBA16F),X===B.UNSIGNED_BYTE&&(R=eA===qA&&oA===!1?B.SRGB8_ALPHA8:B.RGBA8),X===B.UNSIGNED_SHORT_4_4_4_4&&(R=B.RGBA4),X===B.UNSIGNED_SHORT_5_5_5_1&&(R=B.RGB5_A1)),(R===B.R16F||R===B.R32F||R===B.RG16F||R===B.RG32F||R===B.RGBA16F||R===B.RGBA32F)&&A.get("EXT_color_buffer_float"),R}function l(J,N,X){return U(J,X)===!0||J.isFramebufferTexture&&J.minFilter!==PI&&J.minFilter!==Eg?Math.log2(Math.max(N.width,N.height))+1:J.mipmaps!==void 0&&J.mipmaps.length>0?J.mipmaps.length:J.isCompressedTexture&&Array.isArray(J.image)?N.mipmaps.length:1}function y(J){return J===PI||J===zi||J===cE?B.NEAREST:B.LINEAR}function O(J){const N=J.target;N.removeEventListener("dispose",O),d(N),N.isVideoTexture&&r.delete(N)}function u(J){const N=J.target;N.removeEventListener("dispose",u),H(N)}function d(J){const N=g.get(J);if(N.__webglInit===void 0)return;const X=J.source,eA=h.get(X);if(eA){const oA=eA[N.__cacheKey];oA.usedTimes--,oA.usedTimes===0&&P(J),Object.keys(eA).length===0&&h.delete(X)}g.remove(J)}function P(J){const N=g.get(J);B.deleteTexture(N.__webglTexture);const X=J.source,eA=h.get(X);delete eA[N.__cacheKey],E.memory.textures--}function H(J){const N=J.texture,X=g.get(J),eA=g.get(N);if(eA.__webglTexture!==void 0&&(B.deleteTexture(eA.__webglTexture),E.memory.textures--),J.depthTexture&&J.depthTexture.dispose(),J.isWebGLCubeRenderTarget)for(let oA=0;oA<6;oA++)B.deleteFramebuffer(X.__webglFramebuffer[oA]),X.__webglDepthbuffer&&B.deleteRenderbuffer(X.__webglDepthbuffer[oA]);else{if(B.deleteFramebuffer(X.__webglFramebuffer),X.__webglDepthbuffer&&B.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&B.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let oA=0;oA<X.__webglColorRenderbuffer.length;oA++)X.__webglColorRenderbuffer[oA]&&B.deleteRenderbuffer(X.__webglColorRenderbuffer[oA]);X.__webglDepthRenderbuffer&&B.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(J.isWebGLMultipleRenderTargets)for(let oA=0,R=N.length;oA<R;oA++){const gA=g.get(N[oA]);gA.__webglTexture&&(B.deleteTexture(gA.__webglTexture),E.memory.textures--),g.remove(N[oA])}g.remove(N),g.remove(J)}let CA=0;function V(){CA=0}function b(){const J=CA;return J>=o&&console.warn("THREE.WebGLTextures: Trying to use "+J+" texture units while this GPU supports only "+o),CA+=1,J}function IA(J){const N=[];return N.push(J.wrapS),N.push(J.wrapT),N.push(J.wrapR||0),N.push(J.magFilter),N.push(J.minFilter),N.push(J.anisotropy),N.push(J.internalFormat),N.push(J.format),N.push(J.type),N.push(J.generateMipmaps),N.push(J.premultiplyAlpha),N.push(J.flipY),N.push(J.unpackAlignment),N.push(J.colorSpace),N.join()}function BA(J,N){const X=g.get(J);if(J.isVideoTexture&&uI(J),J.isRenderTargetTexture===!1&&J.version>0&&X.__version!==J.version){const eA=J.image;if(eA===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(eA.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{FA(X,J,N);return}}I.bindTexture(B.TEXTURE_2D,X.__webglTexture,B.TEXTURE0+N)}function _(J,N){const X=g.get(J);if(J.version>0&&X.__version!==J.version){FA(X,J,N);return}I.bindTexture(B.TEXTURE_2D_ARRAY,X.__webglTexture,B.TEXTURE0+N)}function v(J,N){const X=g.get(J);if(J.version>0&&X.__version!==J.version){FA(X,J,N);return}I.bindTexture(B.TEXTURE_3D,X.__webglTexture,B.TEXTURE0+N)}function QA(J,N){const X=g.get(J);if(J.version>0&&X.__version!==J.version){JI(X,J,N);return}I.bindTexture(B.TEXTURE_CUBE_MAP,X.__webglTexture,B.TEXTURE0+N)}const EA={[TB]:B.REPEAT,[kg]:B.CLAMP_TO_EDGE,[yE]:B.MIRRORED_REPEAT},rA={[PI]:B.NEAREST,[zi]:B.NEAREST_MIPMAP_NEAREST,[cE]:B.NEAREST_MIPMAP_LINEAR,[Eg]:B.LINEAR,[As]:B.LINEAR_MIPMAP_NEAREST,[IB]:B.LINEAR_MIPMAP_LINEAR},$={[qn]:B.NEVER,[Hn]:B.ALWAYS,[dn]:B.LESS,[fn]:B.LEQUAL,[pn]:B.EQUAL,[un]:B.GEQUAL,[Yn]:B.GREATER,[Ln]:B.NOTEQUAL};function tA(J,N,X){if(X?(B.texParameteri(J,B.TEXTURE_WRAP_S,EA[N.wrapS]),B.texParameteri(J,B.TEXTURE_WRAP_T,EA[N.wrapT]),(J===B.TEXTURE_3D||J===B.TEXTURE_2D_ARRAY)&&B.texParameteri(J,B.TEXTURE_WRAP_R,EA[N.wrapR]),B.texParameteri(J,B.TEXTURE_MAG_FILTER,rA[N.magFilter]),B.texParameteri(J,B.TEXTURE_MIN_FILTER,rA[N.minFilter])):(B.texParameteri(J,B.TEXTURE_WRAP_S,B.CLAMP_TO_EDGE),B.texParameteri(J,B.TEXTURE_WRAP_T,B.CLAMP_TO_EDGE),(J===B.TEXTURE_3D||J===B.TEXTURE_2D_ARRAY)&&B.texParameteri(J,B.TEXTURE_WRAP_R,B.CLAMP_TO_EDGE),(N.wrapS!==kg||N.wrapT!==kg)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),B.texParameteri(J,B.TEXTURE_MAG_FILTER,y(N.magFilter)),B.texParameteri(J,B.TEXTURE_MIN_FILTER,y(N.minFilter)),N.minFilter!==PI&&N.minFilter!==Eg&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),N.compareFunction&&(B.texParameteri(J,B.TEXTURE_COMPARE_MODE,B.COMPARE_REF_TO_TEXTURE),B.texParameteri(J,B.TEXTURE_COMPARE_FUNC,$[N.compareFunction])),A.has("EXT_texture_filter_anisotropic")===!0){const eA=A.get("EXT_texture_filter_anisotropic");if(N.magFilter===PI||N.minFilter!==cE&&N.minFilter!==IB||N.type===QC&&A.has("OES_texture_float_linear")===!1||i===!1&&N.type===xB&&A.has("OES_texture_half_float_linear")===!1)return;(N.anisotropy>1||g.get(N).__currentAnisotropy)&&(B.texParameterf(J,eA.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(N.anisotropy,C.getMaxAnisotropy())),g.get(N).__currentAnisotropy=N.anisotropy)}}function xA(J,N){let X=!1;J.__webglInit===void 0&&(J.__webglInit=!0,N.addEventListener("dispose",O));const eA=N.source;let oA=h.get(eA);oA===void 0&&(oA={},h.set(eA,oA));const R=IA(N);if(R!==J.__cacheKey){oA[R]===void 0&&(oA[R]={texture:B.createTexture(),usedTimes:0},E.memory.textures++,X=!0),oA[R].usedTimes++;const gA=oA[J.__cacheKey];gA!==void 0&&(oA[J.__cacheKey].usedTimes--,gA.usedTimes===0&&P(N)),J.__cacheKey=R,J.__webglTexture=oA[R].texture}return X}function FA(J,N,X){let eA=B.TEXTURE_2D;(N.isDataArrayTexture||N.isCompressedArrayTexture)&&(eA=B.TEXTURE_2D_ARRAY),N.isData3DTexture&&(eA=B.TEXTURE_3D);const oA=xA(J,N),R=N.source;I.bindTexture(eA,J.__webglTexture,B.TEXTURE0+X);const gA=g.get(R);if(R.version!==gA.__version||oA===!0){I.activeTexture(B.TEXTURE0+X),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,N.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,N.unpackAlignment),B.pixelStorei(B.UNPACK_COLORSPACE_CONVERSION_WEBGL,B.NONE);const iA=M(N)&&k(N.image)===!1;let j=w(N.image,iA,!1,t);j=xI(N,j);const SA=k(j)||i,yA=Q.convert(N.format,N.colorSpace);let MA=Q.convert(N.type),kA=F(N.internalFormat,yA,MA,N.colorSpace);tA(eA,N,SA);let wA;const RA=N.mipmaps,_A=i&&N.isVideoTexture!==!0,Y=gA.__version===void 0||oA===!0,DA=l(N,j,SA);if(N.isDepthTexture)kA=B.DEPTH_COMPONENT,i?N.type===QC?kA=B.DEPTH_COMPONENT32F:N.type===kC?kA=B.DEPTH_COMPONENT24:N.type===jC?kA=B.DEPTH24_STENCIL8:kA=B.DEPTH_COMPONENT16:N.type===QC&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),N.format===VC&&kA===B.DEPTH_COMPONENT&&N.type!==Uo&&N.type!==kC&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),N.type=kC,MA=Q.convert(N.type)),N.format===OB&&kA===B.DEPTH_COMPONENT&&(kA=B.DEPTH_STENCIL,N.type!==jC&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),N.type=jC,MA=Q.convert(N.type))),Y&&(_A?I.texStorage2D(B.TEXTURE_2D,1,kA,j.width,j.height):I.texImage2D(B.TEXTURE_2D,0,kA,j.width,j.height,0,yA,MA,null));else if(N.isDataTexture)if(RA.length>0&&SA){_A&&Y&&I.texStorage2D(B.TEXTURE_2D,DA,kA,RA[0].width,RA[0].height);for(let W=0,aA=RA.length;W<aA;W++)wA=RA[W],_A?I.texSubImage2D(B.TEXTURE_2D,W,0,0,wA.width,wA.height,yA,MA,wA.data):I.texImage2D(B.TEXTURE_2D,W,kA,wA.width,wA.height,0,yA,MA,wA.data);N.generateMipmaps=!1}else _A?(Y&&I.texStorage2D(B.TEXTURE_2D,DA,kA,j.width,j.height),I.texSubImage2D(B.TEXTURE_2D,0,0,0,j.width,j.height,yA,MA,j.data)):I.texImage2D(B.TEXTURE_2D,0,kA,j.width,j.height,0,yA,MA,j.data);else if(N.isCompressedTexture)if(N.isCompressedArrayTexture){_A&&Y&&I.texStorage3D(B.TEXTURE_2D_ARRAY,DA,kA,RA[0].width,RA[0].height,j.depth);for(let W=0,aA=RA.length;W<aA;W++)wA=RA[W],N.format!==lg?yA!==null?_A?I.compressedTexSubImage3D(B.TEXTURE_2D_ARRAY,W,0,0,0,wA.width,wA.height,j.depth,yA,wA.data,0,0):I.compressedTexImage3D(B.TEXTURE_2D_ARRAY,W,kA,wA.width,wA.height,j.depth,0,wA.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_A?I.texSubImage3D(B.TEXTURE_2D_ARRAY,W,0,0,0,wA.width,wA.height,j.depth,yA,MA,wA.data):I.texImage3D(B.TEXTURE_2D_ARRAY,W,kA,wA.width,wA.height,j.depth,0,yA,MA,wA.data)}else{_A&&Y&&I.texStorage2D(B.TEXTURE_2D,DA,kA,RA[0].width,RA[0].height);for(let W=0,aA=RA.length;W<aA;W++)wA=RA[W],N.format!==lg?yA!==null?_A?I.compressedTexSubImage2D(B.TEXTURE_2D,W,0,0,wA.width,wA.height,yA,wA.data):I.compressedTexImage2D(B.TEXTURE_2D,W,kA,wA.width,wA.height,0,wA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_A?I.texSubImage2D(B.TEXTURE_2D,W,0,0,wA.width,wA.height,yA,MA,wA.data):I.texImage2D(B.TEXTURE_2D,W,kA,wA.width,wA.height,0,yA,MA,wA.data)}else if(N.isDataArrayTexture)_A?(Y&&I.texStorage3D(B.TEXTURE_2D_ARRAY,DA,kA,j.width,j.height,j.depth),I.texSubImage3D(B.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,yA,MA,j.data)):I.texImage3D(B.TEXTURE_2D_ARRAY,0,kA,j.width,j.height,j.depth,0,yA,MA,j.data);else if(N.isData3DTexture)_A?(Y&&I.texStorage3D(B.TEXTURE_3D,DA,kA,j.width,j.height,j.depth),I.texSubImage3D(B.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,yA,MA,j.data)):I.texImage3D(B.TEXTURE_3D,0,kA,j.width,j.height,j.depth,0,yA,MA,j.data);else if(N.isFramebufferTexture){if(Y)if(_A)I.texStorage2D(B.TEXTURE_2D,DA,kA,j.width,j.height);else{let W=j.width,aA=j.height;for(let hA=0;hA<DA;hA++)I.texImage2D(B.TEXTURE_2D,hA,kA,W,aA,0,yA,MA,null),W>>=1,aA>>=1}}else if(RA.length>0&&SA){_A&&Y&&I.texStorage2D(B.TEXTURE_2D,DA,kA,RA[0].width,RA[0].height);for(let W=0,aA=RA.length;W<aA;W++)wA=RA[W],_A?I.texSubImage2D(B.TEXTURE_2D,W,0,0,yA,MA,wA):I.texImage2D(B.TEXTURE_2D,W,kA,yA,MA,wA);N.generateMipmaps=!1}else _A?(Y&&I.texStorage2D(B.TEXTURE_2D,DA,kA,j.width,j.height),I.texSubImage2D(B.TEXTURE_2D,0,0,0,yA,MA,j)):I.texImage2D(B.TEXTURE_2D,0,kA,yA,MA,j);U(N,SA)&&q(eA),gA.__version=R.version,N.onUpdate&&N.onUpdate(N)}J.__version=N.version}function JI(J,N,X){if(N.image.length!==6)return;const eA=xA(J,N),oA=N.source;I.bindTexture(B.TEXTURE_CUBE_MAP,J.__webglTexture,B.TEXTURE0+X);const R=g.get(oA);if(oA.version!==R.__version||eA===!0){I.activeTexture(B.TEXTURE0+X),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,N.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,N.unpackAlignment),B.pixelStorei(B.UNPACK_COLORSPACE_CONVERSION_WEBGL,B.NONE);const gA=N.isCompressedTexture||N.image[0].isCompressedTexture,iA=N.image[0]&&N.image[0].isDataTexture,j=[];for(let W=0;W<6;W++)!gA&&!iA?j[W]=w(N.image[W],!1,!0,e):j[W]=iA?N.image[W].image:N.image[W],j[W]=xI(N,j[W]);const SA=j[0],yA=k(SA)||i,MA=Q.convert(N.format,N.colorSpace),kA=Q.convert(N.type),wA=F(N.internalFormat,MA,kA,N.colorSpace),RA=i&&N.isVideoTexture!==!0,_A=R.__version===void 0||eA===!0;let Y=l(N,SA,yA);tA(B.TEXTURE_CUBE_MAP,N,yA);let DA;if(gA){RA&&_A&&I.texStorage2D(B.TEXTURE_CUBE_MAP,Y,wA,SA.width,SA.height);for(let W=0;W<6;W++){DA=j[W].mipmaps;for(let aA=0;aA<DA.length;aA++){const hA=DA[aA];N.format!==lg?MA!==null?RA?I.compressedTexSubImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+W,aA,0,0,hA.width,hA.height,MA,hA.data):I.compressedTexImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+W,aA,wA,hA.width,hA.height,0,hA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):RA?I.texSubImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+W,aA,0,0,hA.width,hA.height,MA,kA,hA.data):I.texImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+W,aA,wA,hA.width,hA.height,0,MA,kA,hA.data)}}}else{DA=N.mipmaps,RA&&_A&&(DA.length>0&&Y++,I.texStorage2D(B.TEXTURE_CUBE_MAP,Y,wA,j[0].width,j[0].height));for(let W=0;W<6;W++)if(iA){RA?I.texSubImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,j[W].width,j[W].height,MA,kA,j[W].data):I.texImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,wA,j[W].width,j[W].height,0,MA,kA,j[W].data);for(let aA=0;aA<DA.length;aA++){const BI=DA[aA].image[W].image;RA?I.texSubImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+W,aA+1,0,0,BI.width,BI.height,MA,kA,BI.data):I.texImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+W,aA+1,wA,BI.width,BI.height,0,MA,kA,BI.data)}}else{RA?I.texSubImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,MA,kA,j[W]):I.texImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,wA,MA,kA,j[W]);for(let aA=0;aA<DA.length;aA++){const hA=DA[aA];RA?I.texSubImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+W,aA+1,0,0,MA,kA,hA.image[W]):I.texImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+W,aA+1,wA,MA,kA,hA.image[W])}}}U(N,yA)&&q(B.TEXTURE_CUBE_MAP),R.__version=oA.version,N.onUpdate&&N.onUpdate(N)}J.__version=N.version}function WA(J,N,X,eA,oA){const R=Q.convert(X.format,X.colorSpace),gA=Q.convert(X.type),iA=F(X.internalFormat,R,gA,X.colorSpace);g.get(N).__hasExternalTextures||(oA===B.TEXTURE_3D||oA===B.TEXTURE_2D_ARRAY?I.texImage3D(oA,0,iA,N.width,N.height,N.depth,0,R,gA,null):I.texImage2D(oA,0,iA,N.width,N.height,0,R,gA,null)),I.bindFramebuffer(B.FRAMEBUFFER,J),QI(N)?s.framebufferTexture2DMultisampleEXT(B.FRAMEBUFFER,eA,oA,g.get(X).__webglTexture,0,YA(N)):(oA===B.TEXTURE_2D||oA>=B.TEXTURE_CUBE_MAP_POSITIVE_X&&oA<=B.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&B.framebufferTexture2D(B.FRAMEBUFFER,eA,oA,g.get(X).__webglTexture,0),I.bindFramebuffer(B.FRAMEBUFFER,null)}function x(J,N,X){if(B.bindRenderbuffer(B.RENDERBUFFER,J),N.depthBuffer&&!N.stencilBuffer){let eA=B.DEPTH_COMPONENT16;if(X||QI(N)){const oA=N.depthTexture;oA&&oA.isDepthTexture&&(oA.type===QC?eA=B.DEPTH_COMPONENT32F:oA.type===kC&&(eA=B.DEPTH_COMPONENT24));const R=YA(N);QI(N)?s.renderbufferStorageMultisampleEXT(B.RENDERBUFFER,R,eA,N.width,N.height):B.renderbufferStorageMultisample(B.RENDERBUFFER,R,eA,N.width,N.height)}else B.renderbufferStorage(B.RENDERBUFFER,eA,N.width,N.height);B.framebufferRenderbuffer(B.FRAMEBUFFER,B.DEPTH_ATTACHMENT,B.RENDERBUFFER,J)}else if(N.depthBuffer&&N.stencilBuffer){const eA=YA(N);X&&QI(N)===!1?B.renderbufferStorageMultisample(B.RENDERBUFFER,eA,B.DEPTH24_STENCIL8,N.width,N.height):QI(N)?s.renderbufferStorageMultisampleEXT(B.RENDERBUFFER,eA,B.DEPTH24_STENCIL8,N.width,N.height):B.renderbufferStorage(B.RENDERBUFFER,B.DEPTH_STENCIL,N.width,N.height),B.framebufferRenderbuffer(B.FRAMEBUFFER,B.DEPTH_STENCIL_ATTACHMENT,B.RENDERBUFFER,J)}else{const eA=N.isWebGLMultipleRenderTargets===!0?N.texture:[N.texture];for(let oA=0;oA<eA.length;oA++){const R=eA[oA],gA=Q.convert(R.format,R.colorSpace),iA=Q.convert(R.type),j=F(R.internalFormat,gA,iA,R.colorSpace),SA=YA(N);X&&QI(N)===!1?B.renderbufferStorageMultisample(B.RENDERBUFFER,SA,j,N.width,N.height):QI(N)?s.renderbufferStorageMultisampleEXT(B.RENDERBUFFER,SA,j,N.width,N.height):B.renderbufferStorage(B.RENDERBUFFER,j,N.width,N.height)}}B.bindRenderbuffer(B.RENDERBUFFER,null)}function LI(J,N){if(N&&N.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(I.bindFramebuffer(B.FRAMEBUFFER,J),!(N.depthTexture&&N.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!g.get(N.depthTexture).__webglTexture||N.depthTexture.image.width!==N.width||N.depthTexture.image.height!==N.height)&&(N.depthTexture.image.width=N.width,N.depthTexture.image.height=N.height,N.depthTexture.needsUpdate=!0),BA(N.depthTexture,0);const eA=g.get(N.depthTexture).__webglTexture,oA=YA(N);if(N.depthTexture.format===VC)QI(N)?s.framebufferTexture2DMultisampleEXT(B.FRAMEBUFFER,B.DEPTH_ATTACHMENT,B.TEXTURE_2D,eA,0,oA):B.framebufferTexture2D(B.FRAMEBUFFER,B.DEPTH_ATTACHMENT,B.TEXTURE_2D,eA,0);else if(N.depthTexture.format===OB)QI(N)?s.framebufferTexture2DMultisampleEXT(B.FRAMEBUFFER,B.DEPTH_STENCIL_ATTACHMENT,B.TEXTURE_2D,eA,0,oA):B.framebufferTexture2D(B.FRAMEBUFFER,B.DEPTH_STENCIL_ATTACHMENT,B.TEXTURE_2D,eA,0);else throw new Error("Unknown depthTexture format")}function NA(J){const N=g.get(J),X=J.isWebGLCubeRenderTarget===!0;if(J.depthTexture&&!N.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");LI(N.__webglFramebuffer,J)}else if(X){N.__webglDepthbuffer=[];for(let eA=0;eA<6;eA++)I.bindFramebuffer(B.FRAMEBUFFER,N.__webglFramebuffer[eA]),N.__webglDepthbuffer[eA]=B.createRenderbuffer(),x(N.__webglDepthbuffer[eA],J,!1)}else I.bindFramebuffer(B.FRAMEBUFFER,N.__webglFramebuffer),N.__webglDepthbuffer=B.createRenderbuffer(),x(N.__webglDepthbuffer,J,!1);I.bindFramebuffer(B.FRAMEBUFFER,null)}function HA(J,N,X){const eA=g.get(J);N!==void 0&&WA(eA.__webglFramebuffer,J,J.texture,B.COLOR_ATTACHMENT0,B.TEXTURE_2D),X!==void 0&&NA(J)}function KA(J){const N=J.texture,X=g.get(J),eA=g.get(N);J.addEventListener("dispose",u),J.isWebGLMultipleRenderTargets!==!0&&(eA.__webglTexture===void 0&&(eA.__webglTexture=B.createTexture()),eA.__version=N.version,E.memory.textures++);const oA=J.isWebGLCubeRenderTarget===!0,R=J.isWebGLMultipleRenderTargets===!0,gA=k(J)||i;if(oA){X.__webglFramebuffer=[];for(let iA=0;iA<6;iA++)X.__webglFramebuffer[iA]=B.createFramebuffer()}else{if(X.__webglFramebuffer=B.createFramebuffer(),R)if(C.drawBuffers){const iA=J.texture;for(let j=0,SA=iA.length;j<SA;j++){const yA=g.get(iA[j]);yA.__webglTexture===void 0&&(yA.__webglTexture=B.createTexture(),E.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(i&&J.samples>0&&QI(J)===!1){const iA=R?N:[N];X.__webglMultisampledFramebuffer=B.createFramebuffer(),X.__webglColorRenderbuffer=[],I.bindFramebuffer(B.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let j=0;j<iA.length;j++){const SA=iA[j];X.__webglColorRenderbuffer[j]=B.createRenderbuffer(),B.bindRenderbuffer(B.RENDERBUFFER,X.__webglColorRenderbuffer[j]);const yA=Q.convert(SA.format,SA.colorSpace),MA=Q.convert(SA.type),kA=F(SA.internalFormat,yA,MA,SA.colorSpace,J.isXRRenderTarget===!0),wA=YA(J);B.renderbufferStorageMultisample(B.RENDERBUFFER,wA,kA,J.width,J.height),B.framebufferRenderbuffer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+j,B.RENDERBUFFER,X.__webglColorRenderbuffer[j])}B.bindRenderbuffer(B.RENDERBUFFER,null),J.depthBuffer&&(X.__webglDepthRenderbuffer=B.createRenderbuffer(),x(X.__webglDepthRenderbuffer,J,!0)),I.bindFramebuffer(B.FRAMEBUFFER,null)}}if(oA){I.bindTexture(B.TEXTURE_CUBE_MAP,eA.__webglTexture),tA(B.TEXTURE_CUBE_MAP,N,gA);for(let iA=0;iA<6;iA++)WA(X.__webglFramebuffer[iA],J,N,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+iA);U(N,gA)&&q(B.TEXTURE_CUBE_MAP),I.unbindTexture()}else if(R){const iA=J.texture;for(let j=0,SA=iA.length;j<SA;j++){const yA=iA[j],MA=g.get(yA);I.bindTexture(B.TEXTURE_2D,MA.__webglTexture),tA(B.TEXTURE_2D,yA,gA),WA(X.__webglFramebuffer,J,yA,B.COLOR_ATTACHMENT0+j,B.TEXTURE_2D),U(yA,gA)&&q(B.TEXTURE_2D)}I.unbindTexture()}else{let iA=B.TEXTURE_2D;(J.isWebGL3DRenderTarget||J.isWebGLArrayRenderTarget)&&(i?iA=J.isWebGL3DRenderTarget?B.TEXTURE_3D:B.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),I.bindTexture(iA,eA.__webglTexture),tA(iA,N,gA),WA(X.__webglFramebuffer,J,N,B.COLOR_ATTACHMENT0,iA),U(N,gA)&&q(iA),I.unbindTexture()}J.depthBuffer&&NA(J)}function aI(J){const N=k(J)||i,X=J.isWebGLMultipleRenderTargets===!0?J.texture:[J.texture];for(let eA=0,oA=X.length;eA<oA;eA++){const R=X[eA];if(U(R,N)){const gA=J.isWebGLCubeRenderTarget?B.TEXTURE_CUBE_MAP:B.TEXTURE_2D,iA=g.get(R).__webglTexture;I.bindTexture(gA,iA),q(gA),I.unbindTexture()}}}function ZA(J){if(i&&J.samples>0&&QI(J)===!1){const N=J.isWebGLMultipleRenderTargets?J.texture:[J.texture],X=J.width,eA=J.height;let oA=B.COLOR_BUFFER_BIT;const R=[],gA=J.stencilBuffer?B.DEPTH_STENCIL_ATTACHMENT:B.DEPTH_ATTACHMENT,iA=g.get(J),j=J.isWebGLMultipleRenderTargets===!0;if(j)for(let SA=0;SA<N.length;SA++)I.bindFramebuffer(B.FRAMEBUFFER,iA.__webglMultisampledFramebuffer),B.framebufferRenderbuffer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+SA,B.RENDERBUFFER,null),I.bindFramebuffer(B.FRAMEBUFFER,iA.__webglFramebuffer),B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0+SA,B.TEXTURE_2D,null,0);I.bindFramebuffer(B.READ_FRAMEBUFFER,iA.__webglMultisampledFramebuffer),I.bindFramebuffer(B.DRAW_FRAMEBUFFER,iA.__webglFramebuffer);for(let SA=0;SA<N.length;SA++){R.push(B.COLOR_ATTACHMENT0+SA),J.depthBuffer&&R.push(gA);const yA=iA.__ignoreDepthValues!==void 0?iA.__ignoreDepthValues:!1;if(yA===!1&&(J.depthBuffer&&(oA|=B.DEPTH_BUFFER_BIT),J.stencilBuffer&&(oA|=B.STENCIL_BUFFER_BIT)),j&&B.framebufferRenderbuffer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.RENDERBUFFER,iA.__webglColorRenderbuffer[SA]),yA===!0&&(B.invalidateFramebuffer(B.READ_FRAMEBUFFER,[gA]),B.invalidateFramebuffer(B.DRAW_FRAMEBUFFER,[gA])),j){const MA=g.get(N[SA]).__webglTexture;B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,MA,0)}B.blitFramebuffer(0,0,X,eA,0,0,X,eA,oA,B.NEAREST),n&&B.invalidateFramebuffer(B.READ_FRAMEBUFFER,R)}if(I.bindFramebuffer(B.READ_FRAMEBUFFER,null),I.bindFramebuffer(B.DRAW_FRAMEBUFFER,null),j)for(let SA=0;SA<N.length;SA++){I.bindFramebuffer(B.FRAMEBUFFER,iA.__webglMultisampledFramebuffer),B.framebufferRenderbuffer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+SA,B.RENDERBUFFER,iA.__webglColorRenderbuffer[SA]);const yA=g.get(N[SA]).__webglTexture;I.bindFramebuffer(B.FRAMEBUFFER,iA.__webglFramebuffer),B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0+SA,B.TEXTURE_2D,yA,0)}I.bindFramebuffer(B.DRAW_FRAMEBUFFER,iA.__webglMultisampledFramebuffer)}}function YA(J){return Math.min(a,J.samples)}function QI(J){const N=g.get(J);return i&&J.samples>0&&A.has("WEBGL_multisampled_render_to_texture")===!0&&N.__useRenderToTexture!==!1}function uI(J){const N=E.render.frame;r.get(J)!==N&&(r.set(J,N),J.update())}function xI(J,N){const X=J.colorSpace,eA=J.format,oA=J.type;return J.isCompressedTexture===!0||J.format===Io||X!==pg&&X!==_C&&(X===qA?i===!1?A.has("EXT_sRGB")===!0&&eA===lg?(J.format=Io,J.minFilter=Eg,J.generateMipmaps=!1):N=ss.sRGBToLinear(N):(eA!==lg||oA!==MC)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),N}this.allocateTextureUnit=b,this.resetTextureUnits=V,this.setTexture2D=BA,this.setTexture2DArray=_,this.setTexture3D=v,this.setTextureCube=QA,this.rebindTextures=HA,this.setupRenderTarget=KA,this.updateRenderTargetMipmap=aI,this.updateMultisampleRenderTarget=ZA,this.setupDepthRenderbuffer=NA,this.setupFrameBufferTexture=WA,this.useMultisampledRTT=QI}function vG(B,A,I){const g=I.isWebGL2;function C(Q,E=_C){let i;if(Q===MC)return B.UNSIGNED_BYTE;if(Q===gs)return B.UNSIGNED_SHORT_4_4_4_4;if(Q===Cs)return B.UNSIGNED_SHORT_5_5_5_1;if(Q===rn)return B.BYTE;if(Q===cn)return B.SHORT;if(Q===Uo)return B.UNSIGNED_SHORT;if(Q===Is)return B.INT;if(Q===kC)return B.UNSIGNED_INT;if(Q===QC)return B.FLOAT;if(Q===xB)return g?B.HALF_FLOAT:(i=A.get("OES_texture_half_float"),i!==null?i.HALF_FLOAT_OES:null);if(Q===wn)return B.ALPHA;if(Q===lg)return B.RGBA;if(Q===Gn)return B.LUMINANCE;if(Q===Sn)return B.LUMINANCE_ALPHA;if(Q===VC)return B.DEPTH_COMPONENT;if(Q===OB)return B.DEPTH_STENCIL;if(Q===Io)return i=A.get("EXT_sRGB"),i!==null?i.SRGB_ALPHA_EXT:null;if(Q===kn)return B.RED;if(Q===Bs)return B.RED_INTEGER;if(Q===ln)return B.RG;if(Q===Qs)return B.RG_INTEGER;if(Q===Es)return B.RGBA_INTEGER;if(Q===ii||Q===oi||Q===ei||Q===ti)if(E===qA)if(i=A.get("WEBGL_compressed_texture_s3tc_srgb"),i!==null){if(Q===ii)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Q===oi)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Q===ei)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Q===ti)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=A.get("WEBGL_compressed_texture_s3tc"),i!==null){if(Q===ii)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Q===oi)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Q===ei)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Q===ti)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Q===Ue||Q===Ne||Q===Ke||Q===Je)if(i=A.get("WEBGL_compressed_texture_pvrtc"),i!==null){if(Q===Ue)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Q===Ne)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Q===Ke)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Q===Je)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Q===Mn)return i=A.get("WEBGL_compressed_texture_etc1"),i!==null?i.COMPRESSED_RGB_ETC1_WEBGL:null;if(Q===Fe||Q===Re)if(i=A.get("WEBGL_compressed_texture_etc"),i!==null){if(Q===Fe)return E===qA?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(Q===Re)return E===qA?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(Q===qe||Q===de||Q===pe||Q===fe||Q===Ye||Q===Le||Q===ue||Q===He||Q===me||Q===be||Q===Te||Q===xe||Q===Oe||Q===Ze)if(i=A.get("WEBGL_compressed_texture_astc"),i!==null){if(Q===qe)return E===qA?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Q===de)return E===qA?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Q===pe)return E===qA?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Q===fe)return E===qA?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Q===Ye)return E===qA?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Q===Le)return E===qA?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Q===ue)return E===qA?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Q===He)return E===qA?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Q===me)return E===qA?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Q===be)return E===qA?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Q===Te)return E===qA?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Q===xe)return E===qA?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Q===Oe)return E===qA?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Q===Ze)return E===qA?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Q===ai)if(i=A.get("EXT_texture_compression_bptc"),i!==null){if(Q===ai)return E===qA?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(Q===yn||Q===Pe||Q===ve||Q===We)if(i=A.get("EXT_texture_compression_rgtc"),i!==null){if(Q===ai)return i.COMPRESSED_RED_RGTC1_EXT;if(Q===Pe)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Q===ve)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Q===We)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return Q===jC?g?B.UNSIGNED_INT_24_8:(i=A.get("WEBGL_depth_texture"),i!==null?i.UNSIGNED_INT_24_8_WEBGL:null):B[Q]!==void 0?B[Q]:null}return{convert:C}}class WG extends _I{constructor(A=[]){super(),this.isArrayCamera=!0,this.cameras=A}}class vC extends iI{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jG={type:"move"};class fi{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vC,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vC,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new f,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new f),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vC,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new f,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new f),this._grip}dispatchEvent(A){return this._targetRay!==null&&this._targetRay.dispatchEvent(A),this._grip!==null&&this._grip.dispatchEvent(A),this._hand!==null&&this._hand.dispatchEvent(A),this}connect(A){if(A&&A.hand){const I=this._hand;if(I)for(const g of A.hand.values())this._getHandJoint(I,g)}return this.dispatchEvent({type:"connected",data:A}),this}disconnect(A){return this.dispatchEvent({type:"disconnected",data:A}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(A,I,g){let C=null,Q=null,E=null;const i=this._targetRay,o=this._grip,e=this._hand;if(A&&I.session.visibilityState!=="visible-blurred"){if(e&&A.hand){E=!0;for(const G of A.hand.values()){const h=I.getJointPose(G,g),D=this._getHandJoint(e,G);h!==null&&(D.matrix.fromArray(h.transform.matrix),D.matrix.decompose(D.position,D.rotation,D.scale),D.matrixWorldNeedsUpdate=!0,D.jointRadius=h.radius),D.visible=h!==null}const t=e.joints["index-finger-tip"],a=e.joints["thumb-tip"],s=t.position.distanceTo(a.position),n=.02,r=.005;e.inputState.pinching&&s>n+r?(e.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:A.handedness,target:this})):!e.inputState.pinching&&s<=n-r&&(e.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:A.handedness,target:this}))}else o!==null&&A.gripSpace&&(Q=I.getPose(A.gripSpace,g),Q!==null&&(o.matrix.fromArray(Q.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,Q.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(Q.linearVelocity)):o.hasLinearVelocity=!1,Q.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(Q.angularVelocity)):o.hasAngularVelocity=!1));i!==null&&(C=I.getPose(A.targetRaySpace,g),C===null&&Q!==null&&(C=Q),C!==null&&(i.matrix.fromArray(C.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,C.linearVelocity?(i.hasLinearVelocity=!0,i.linearVelocity.copy(C.linearVelocity)):i.hasLinearVelocity=!1,C.angularVelocity?(i.hasAngularVelocity=!0,i.angularVelocity.copy(C.angularVelocity)):i.hasAngularVelocity=!1,this.dispatchEvent(jG)))}return i!==null&&(i.visible=C!==null),o!==null&&(o.visible=Q!==null),e!==null&&(e.visible=E!==null),this}_getHandJoint(A,I){if(A.joints[I.jointName]===void 0){const g=new vC;g.matrixAutoUpdate=!1,g.visible=!1,A.joints[I.jointName]=g,A.add(g)}return A.joints[I.jointName]}}class VG extends YI{constructor(A,I,g,C,Q,E,i,o,e,t){if(t=t!==void 0?t:VC,t!==VC&&t!==OB)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");g===void 0&&t===VC&&(g=kC),g===void 0&&t===OB&&(g=jC),super(null,C,Q,E,i,o,t,g,e),this.isDepthTexture=!0,this.image={width:A,height:I},this.magFilter=i!==void 0?i:PI,this.minFilter=o!==void 0?o:PI,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(A){return super.copy(A),this.compareFunction=A.compareFunction,this}toJSON(A){const I=super.toJSON(A);return this.compareFunction!==null&&(I.compareFunction=this.compareFunction),I}}class _G extends EB{constructor(A,I){super();const g=this;let C=null,Q=1,E=null,i="local-floor",o=1,e=null,t=null,a=null,s=null,n=null,r=null;const G=I.getContextAttributes();let h=null,D=null;const S=[],w=[];let k=null;const M=new _I;M.layers.enable(1),M.viewport=new DI;const U=new _I;U.layers.enable(2),U.viewport=new DI;const q=[M,U],F=new WG;F.layers.enable(1),F.layers.enable(2);let l=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getCamera=function(){},this.setUserCamera=function(v){k=v},this.getController=function(v){let QA=S[v];return QA===void 0&&(QA=new fi,S[v]=QA),QA.getTargetRaySpace()},this.getControllerGrip=function(v){let QA=S[v];return QA===void 0&&(QA=new fi,S[v]=QA),QA.getGripSpace()},this.getHand=function(v){let QA=S[v];return QA===void 0&&(QA=new fi,S[v]=QA),QA.getHandSpace()};function O(v){const QA=w.indexOf(v.inputSource);if(QA===-1)return;const EA=S[QA];EA!==void 0&&(EA.update(v.inputSource,v.frame,e||E),EA.dispatchEvent({type:v.type,data:v.inputSource}))}function u(){C.removeEventListener("select",O),C.removeEventListener("selectstart",O),C.removeEventListener("selectend",O),C.removeEventListener("squeeze",O),C.removeEventListener("squeezestart",O),C.removeEventListener("squeezeend",O),C.removeEventListener("end",u),C.removeEventListener("inputsourceschange",d);for(let v=0;v<S.length;v++){const QA=w[v];QA!==null&&(w[v]=null,S[v].disconnect(QA))}l=null,y=null,A.setRenderTarget(h),n=null,s=null,a=null,C=null,D=null,_.stop(),g.isPresenting=!1,g.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(v){Q=v,g.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(v){i=v,g.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return e||E},this.setReferenceSpace=function(v){e=v},this.getBaseLayer=function(){return s!==null?s:n},this.getBinding=function(){return a},this.getFrame=function(){return r},this.getSession=function(){return C},this.setSession=async function(v){if(C=v,C!==null){if(h=A.getRenderTarget(),C.addEventListener("select",O),C.addEventListener("selectstart",O),C.addEventListener("selectend",O),C.addEventListener("squeeze",O),C.addEventListener("squeezestart",O),C.addEventListener("squeezeend",O),C.addEventListener("end",u),C.addEventListener("inputsourceschange",d),G.xrCompatible!==!0&&await I.makeXRCompatible(),C.renderState.layers===void 0||A.capabilities.isWebGL2===!1){const QA={antialias:C.renderState.layers===void 0?G.antialias:!0,alpha:!0,depth:G.depth,stencil:G.stencil,framebufferScaleFactor:Q};n=new XRWebGLLayer(C,I,QA),C.updateRenderState({baseLayer:n}),D=new KC(n.framebufferWidth,n.framebufferHeight,{format:lg,type:MC,colorSpace:A.outputColorSpace,stencilBuffer:G.stencil})}else{let QA=null,EA=null,rA=null;G.depth&&(rA=G.stencil?I.DEPTH24_STENCIL8:I.DEPTH_COMPONENT24,QA=G.stencil?OB:VC,EA=G.stencil?jC:kC);const $={colorFormat:I.RGBA8,depthFormat:rA,scaleFactor:Q};a=new XRWebGLBinding(C,I),s=a.createProjectionLayer($),C.updateRenderState({layers:[s]}),D=new KC(s.textureWidth,s.textureHeight,{format:lg,type:MC,depthTexture:new VG(s.textureWidth,s.textureHeight,EA,void 0,void 0,void 0,void 0,void 0,void 0,QA),stencilBuffer:G.stencil,colorSpace:A.outputColorSpace,samples:G.antialias?4:0});const tA=A.properties.get(D);tA.__ignoreDepthValues=s.ignoreDepthValues}D.isXRRenderTarget=!0,this.setFoveation(o),e=null,E=await C.requestReferenceSpace(i),_.setContext(C),_.start(),g.isPresenting=!0,g.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(C!==null)return C.environmentBlendMode};function d(v){for(let QA=0;QA<v.removed.length;QA++){const EA=v.removed[QA],rA=w.indexOf(EA);rA>=0&&(w[rA]=null,S[rA].disconnect(EA))}for(let QA=0;QA<v.added.length;QA++){const EA=v.added[QA];let rA=w.indexOf(EA);if(rA===-1){for(let tA=0;tA<S.length;tA++)if(tA>=w.length){w.push(EA),rA=tA;break}else if(w[tA]===null){w[tA]=EA,rA=tA;break}if(rA===-1)break}const $=S[rA];$&&$.connect(EA)}}const P=new f,H=new f;function CA(v,QA,EA){P.setFromMatrixPosition(QA.matrixWorld),H.setFromMatrixPosition(EA.matrixWorld);const rA=P.distanceTo(H),$=QA.projectionMatrix.elements,tA=EA.projectionMatrix.elements,xA=$[14]/($[10]-1),FA=$[14]/($[10]+1),JI=($[9]+1)/$[5],WA=($[9]-1)/$[5],x=($[8]-1)/$[0],LI=(tA[8]+1)/tA[0],NA=xA*x,HA=xA*LI,KA=rA/(-x+LI),aI=KA*-x;QA.matrixWorld.decompose(v.position,v.quaternion,v.scale),v.translateX(aI),v.translateZ(KA),v.matrixWorld.compose(v.position,v.quaternion,v.scale),v.matrixWorldInverse.copy(v.matrixWorld).invert();const ZA=xA+KA,YA=FA+KA,QI=NA-aI,uI=HA+(rA-aI),xI=JI*FA/YA*ZA,J=WA*FA/YA*ZA;v.projectionMatrix.makePerspective(QI,uI,xI,J,ZA,YA),v.projectionMatrixInverse.copy(v.projectionMatrix).invert()}function V(v,QA){QA===null?v.matrixWorld.copy(v.matrix):v.matrixWorld.multiplyMatrices(QA.matrixWorld,v.matrix),v.matrixWorldInverse.copy(v.matrixWorld).invert()}this.updateCameraXR=function(v){if(C===null)return v;k&&(v=k),F.near=U.near=M.near=v.near,F.far=U.far=M.far=v.far,(l!==F.near||y!==F.far)&&(C.updateRenderState({depthNear:F.near,depthFar:F.far}),l=F.near,y=F.far);const QA=v.parent,EA=F.cameras;V(F,QA);for(let rA=0;rA<EA.length;rA++)V(EA[rA],QA);return EA.length===2?CA(F,M,U):F.projectionMatrix.copy(M.projectionMatrix),k&&b(F,QA),F};function b(v,QA){const EA=k;QA===null?EA.matrix.copy(v.matrixWorld):(EA.matrix.copy(QA.matrixWorld),EA.matrix.invert(),EA.matrix.multiply(v.matrixWorld)),EA.matrix.decompose(EA.position,EA.quaternion,EA.scale),EA.updateMatrixWorld(!0);const rA=EA.children;for(let $=0,tA=rA.length;$<tA;$++)rA[$].updateMatrixWorld(!0);EA.projectionMatrix.copy(v.projectionMatrix),EA.projectionMatrixInverse.copy(v.projectionMatrixInverse),EA.isPerspectiveCamera&&(EA.fov=PB*2*Math.atan(1/EA.projectionMatrix.elements[5]),EA.zoom=1)}this.getFoveation=function(){if(!(s===null&&n===null))return o},this.setFoveation=function(v){o=v,s!==null&&(s.fixedFoveation=v),n!==null&&n.fixedFoveation!==void 0&&(n.fixedFoveation=v)};let IA=null;function BA(v,QA){if(t=QA.getViewerPose(e||E),r=QA,t!==null){const EA=t.views;n!==null&&(A.setRenderTargetFramebuffer(D,n.framebuffer),A.setRenderTarget(D));let rA=!1;EA.length!==F.cameras.length&&(F.cameras.length=0,rA=!0);for(let $=0;$<EA.length;$++){const tA=EA[$];let xA=null;if(n!==null)xA=n.getViewport(tA);else{const JI=a.getViewSubImage(s,tA);xA=JI.viewport,$===0&&(A.setRenderTargetTextures(D,JI.colorTexture,s.ignoreDepthValues?void 0:JI.depthStencilTexture),A.setRenderTarget(D))}let FA=q[$];FA===void 0&&(FA=new _I,FA.layers.enable($),FA.viewport=new DI,q[$]=FA),FA.matrix.fromArray(tA.transform.matrix),FA.matrix.decompose(FA.position,FA.quaternion,FA.scale),FA.projectionMatrix.fromArray(tA.projectionMatrix),FA.projectionMatrixInverse.copy(FA.projectionMatrix).invert(),FA.viewport.set(xA.x,xA.y,xA.width,xA.height),$===0&&(F.matrix.copy(FA.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),rA===!0&&F.cameras.push(FA)}}for(let EA=0;EA<S.length;EA++){const rA=w[EA],$=S[EA];rA!==null&&$!==void 0&&$.update(rA,QA,e||E)}IA&&IA(v,QA),QA.detectedPlanes&&g.dispatchEvent({type:"planesdetected",data:QA}),r=null}const _=new ks;_.setAnimationLoop(BA),this.setAnimationLoop=function(v){IA=v},this.dispose=function(){}}}function XG(B,A){function I(h,D){h.matrixAutoUpdate===!0&&h.updateMatrix(),D.value.copy(h.matrix)}function g(h,D){D.color.getRGB(h.fogColor.value,ws(B)),D.isFog?(h.fogNear.value=D.near,h.fogFar.value=D.far):D.isFogExp2&&(h.fogDensity.value=D.density)}function C(h,D,S,w,k){D.isMeshBasicMaterial||D.isMeshLambertMaterial?Q(h,D):D.isMeshToonMaterial?(Q(h,D),a(h,D)):D.isMeshPhongMaterial?(Q(h,D),t(h,D)):D.isMeshStandardMaterial?(Q(h,D),s(h,D),D.isMeshPhysicalMaterial&&n(h,D,k)):D.isMeshMatcapMaterial?(Q(h,D),r(h,D)):D.isMeshDepthMaterial?Q(h,D):D.isMeshDistanceMaterial?(Q(h,D),G(h,D)):D.isMeshNormalMaterial?Q(h,D):D.isLineBasicMaterial?(E(h,D),D.isLineDashedMaterial&&i(h,D)):D.isPointsMaterial?o(h,D,S,w):D.isSpriteMaterial?e(h,D):D.isShadowMaterial?(h.color.value.copy(D.color),h.opacity.value=D.opacity):D.isShaderMaterial&&(D.uniformsNeedUpdate=!1)}function Q(h,D){h.opacity.value=D.opacity,D.color&&h.diffuse.value.copy(D.color),D.emissive&&h.emissive.value.copy(D.emissive).multiplyScalar(D.emissiveIntensity),D.map&&(h.map.value=D.map,I(D.map,h.mapTransform)),D.alphaMap&&(h.alphaMap.value=D.alphaMap,I(D.alphaMap,h.alphaMapTransform)),D.bumpMap&&(h.bumpMap.value=D.bumpMap,I(D.bumpMap,h.bumpMapTransform),h.bumpScale.value=D.bumpScale,D.side===ig&&(h.bumpScale.value*=-1)),D.normalMap&&(h.normalMap.value=D.normalMap,I(D.normalMap,h.normalMapTransform),h.normalScale.value.copy(D.normalScale),D.side===ig&&h.normalScale.value.negate()),D.displacementMap&&(h.displacementMap.value=D.displacementMap,I(D.displacementMap,h.displacementMapTransform),h.displacementScale.value=D.displacementScale,h.displacementBias.value=D.displacementBias),D.emissiveMap&&(h.emissiveMap.value=D.emissiveMap,I(D.emissiveMap,h.emissiveMapTransform)),D.specularMap&&(h.specularMap.value=D.specularMap,I(D.specularMap,h.specularMapTransform)),D.alphaTest>0&&(h.alphaTest.value=D.alphaTest);const S=A.get(D).envMap;if(S&&(h.envMap.value=S,h.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=D.reflectivity,h.ior.value=D.ior,h.refractionRatio.value=D.refractionRatio),D.lightMap){h.lightMap.value=D.lightMap;const w=B.useLegacyLights===!0?Math.PI:1;h.lightMapIntensity.value=D.lightMapIntensity*w,I(D.lightMap,h.lightMapTransform)}D.aoMap&&(h.aoMap.value=D.aoMap,h.aoMapIntensity.value=D.aoMapIntensity,I(D.aoMap,h.aoMapTransform))}function E(h,D){h.diffuse.value.copy(D.color),h.opacity.value=D.opacity,D.map&&(h.map.value=D.map,I(D.map,h.mapTransform))}function i(h,D){h.dashSize.value=D.dashSize,h.totalSize.value=D.dashSize+D.gapSize,h.scale.value=D.scale}function o(h,D,S,w){h.diffuse.value.copy(D.color),h.opacity.value=D.opacity,h.size.value=D.size*S,h.scale.value=w*.5,D.map&&(h.map.value=D.map,I(D.map,h.uvTransform)),D.alphaMap&&(h.alphaMap.value=D.alphaMap,I(D.alphaMap,h.alphaMapTransform)),D.alphaTest>0&&(h.alphaTest.value=D.alphaTest)}function e(h,D){h.diffuse.value.copy(D.color),h.opacity.value=D.opacity,h.rotation.value=D.rotation,D.map&&(h.map.value=D.map,I(D.map,h.mapTransform)),D.alphaMap&&(h.alphaMap.value=D.alphaMap,I(D.alphaMap,h.alphaMapTransform)),D.alphaTest>0&&(h.alphaTest.value=D.alphaTest)}function t(h,D){h.specular.value.copy(D.specular),h.shininess.value=Math.max(D.shininess,1e-4)}function a(h,D){D.gradientMap&&(h.gradientMap.value=D.gradientMap)}function s(h,D){h.metalness.value=D.metalness,D.metalnessMap&&(h.metalnessMap.value=D.metalnessMap,I(D.metalnessMap,h.metalnessMapTransform)),h.roughness.value=D.roughness,D.roughnessMap&&(h.roughnessMap.value=D.roughnessMap,I(D.roughnessMap,h.roughnessMapTransform)),A.get(D).envMap&&(h.envMapIntensity.value=D.envMapIntensity)}function n(h,D,S){h.ior.value=D.ior,D.sheen>0&&(h.sheenColor.value.copy(D.sheenColor).multiplyScalar(D.sheen),h.sheenRoughness.value=D.sheenRoughness,D.sheenColorMap&&(h.sheenColorMap.value=D.sheenColorMap,I(D.sheenColorMap,h.sheenColorMapTransform)),D.sheenRoughnessMap&&(h.sheenRoughnessMap.value=D.sheenRoughnessMap,I(D.sheenRoughnessMap,h.sheenRoughnessMapTransform))),D.clearcoat>0&&(h.clearcoat.value=D.clearcoat,h.clearcoatRoughness.value=D.clearcoatRoughness,D.clearcoatMap&&(h.clearcoatMap.value=D.clearcoatMap,I(D.clearcoatMap,h.clearcoatMapTransform)),D.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=D.clearcoatRoughnessMap,I(D.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),D.clearcoatNormalMap&&(h.clearcoatNormalMap.value=D.clearcoatNormalMap,I(D.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(D.clearcoatNormalScale),D.side===ig&&h.clearcoatNormalScale.value.negate())),D.iridescence>0&&(h.iridescence.value=D.iridescence,h.iridescenceIOR.value=D.iridescenceIOR,h.iridescenceThicknessMinimum.value=D.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=D.iridescenceThicknessRange[1],D.iridescenceMap&&(h.iridescenceMap.value=D.iridescenceMap,I(D.iridescenceMap,h.iridescenceMapTransform)),D.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=D.iridescenceThicknessMap,I(D.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),D.transmission>0&&(h.transmission.value=D.transmission,h.transmissionSamplerMap.value=S.texture,h.transmissionSamplerSize.value.set(S.width,S.height),D.transmissionMap&&(h.transmissionMap.value=D.transmissionMap,I(D.transmissionMap,h.transmissionMapTransform)),h.thickness.value=D.thickness,D.thicknessMap&&(h.thicknessMap.value=D.thicknessMap,I(D.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=D.attenuationDistance,h.attenuationColor.value.copy(D.attenuationColor)),D.anisotropy>0&&(h.anisotropyVector.value.set(D.anisotropy*Math.cos(D.anisotropyRotation),D.anisotropy*Math.sin(D.anisotropyRotation)),D.anisotropyMap&&(h.anisotropyMap.value=D.anisotropyMap,I(D.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=D.specularIntensity,h.specularColor.value.copy(D.specularColor),D.specularColorMap&&(h.specularColorMap.value=D.specularColorMap,I(D.specularColorMap,h.specularColorMapTransform)),D.specularIntensityMap&&(h.specularIntensityMap.value=D.specularIntensityMap,I(D.specularIntensityMap,h.specularIntensityMapTransform))}function r(h,D){D.matcap&&(h.matcap.value=D.matcap)}function G(h,D){const S=A.get(D).light;h.referencePosition.value.setFromMatrixPosition(S.matrixWorld),h.nearDistance.value=S.shadow.camera.near,h.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:g,refreshMaterialUniforms:C}}function zG(B,A,I,g){let C={},Q={},E=[];const i=I.isWebGL2?B.getParameter(B.MAX_UNIFORM_BUFFER_BINDINGS):0;function o(S,w){const k=w.program;g.uniformBlockBinding(S,k)}function e(S,w){let k=C[S.id];k===void 0&&(r(S),k=t(S),C[S.id]=k,S.addEventListener("dispose",h));const M=w.program;g.updateUBOMapping(S,M);const U=A.render.frame;Q[S.id]!==U&&(s(S),Q[S.id]=U)}function t(S){const w=a();S.__bindingPointIndex=w;const k=B.createBuffer(),M=S.__size,U=S.usage;return B.bindBuffer(B.UNIFORM_BUFFER,k),B.bufferData(B.UNIFORM_BUFFER,M,U),B.bindBuffer(B.UNIFORM_BUFFER,null),B.bindBufferBase(B.UNIFORM_BUFFER,w,k),k}function a(){for(let S=0;S<i;S++)if(E.indexOf(S)===-1)return E.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function s(S){const w=C[S.id],k=S.uniforms,M=S.__cache;B.bindBuffer(B.UNIFORM_BUFFER,w);for(let U=0,q=k.length;U<q;U++){const F=k[U];if(n(F,U,M)===!0){const l=F.__offset,y=Array.isArray(F.value)?F.value:[F.value];let O=0;for(let u=0;u<y.length;u++){const d=y[u],P=G(d);typeof d=="number"?(F.__data[0]=d,B.bufferSubData(B.UNIFORM_BUFFER,l+O,F.__data)):d.isMatrix3?(F.__data[0]=d.elements[0],F.__data[1]=d.elements[1],F.__data[2]=d.elements[2],F.__data[3]=d.elements[0],F.__data[4]=d.elements[3],F.__data[5]=d.elements[4],F.__data[6]=d.elements[5],F.__data[7]=d.elements[0],F.__data[8]=d.elements[6],F.__data[9]=d.elements[7],F.__data[10]=d.elements[8],F.__data[11]=d.elements[0]):(d.toArray(F.__data,O),O+=P.storage/Float32Array.BYTES_PER_ELEMENT)}B.bufferSubData(B.UNIFORM_BUFFER,l,F.__data)}}B.bindBuffer(B.UNIFORM_BUFFER,null)}function n(S,w,k){const M=S.value;if(k[w]===void 0){if(typeof M=="number")k[w]=M;else{const U=Array.isArray(M)?M:[M],q=[];for(let F=0;F<U.length;F++)q.push(U[F].clone());k[w]=q}return!0}else if(typeof M=="number"){if(k[w]!==M)return k[w]=M,!0}else{const U=Array.isArray(k[w])?k[w]:[k[w]],q=Array.isArray(M)?M:[M];for(let F=0;F<U.length;F++){const l=U[F];if(l.equals(q[F])===!1)return l.copy(q[F]),!0}}return!1}function r(S){const w=S.uniforms;let k=0;const M=16;let U=0;for(let q=0,F=w.length;q<F;q++){const l=w[q],y={boundary:0,storage:0},O=Array.isArray(l.value)?l.value:[l.value];for(let u=0,d=O.length;u<d;u++){const P=O[u],H=G(P);y.boundary+=H.boundary,y.storage+=H.storage}if(l.__data=new Float32Array(y.storage/Float32Array.BYTES_PER_ELEMENT),l.__offset=k,q>0){U=k%M;const u=M-U;U!==0&&u-y.boundary<0&&(k+=M-U,l.__offset=k)}k+=y.storage}return U=k%M,U>0&&(k+=M-U),S.__size=k,S.__cache={},this}function G(S){const w={boundary:0,storage:0};return typeof S=="number"?(w.boundary=4,w.storage=4):S.isVector2?(w.boundary=8,w.storage=8):S.isVector3||S.isColor?(w.boundary=16,w.storage=12):S.isVector4?(w.boundary=16,w.storage=16):S.isMatrix3?(w.boundary=48,w.storage=48):S.isMatrix4?(w.boundary=64,w.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),w}function h(S){const w=S.target;w.removeEventListener("dispose",h);const k=E.indexOf(w.__bindingPointIndex);E.splice(k,1),B.deleteBuffer(C[w.id]),delete C[w.id],delete Q[w.id]}function D(){for(const S in C)B.deleteBuffer(C[S]);E=[],C={},Q={}}return{bind:o,update:e,dispose:D}}function $G(){const B=kQ("canvas");return B.style.display="block",B}class Ns{constructor(A={}){const{canvas:I=$G(),context:g=null,depth:C=!0,stencil:Q=!0,alpha:E=!1,antialias:i=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:e=!1,powerPreference:t="default",failIfMajorPerformanceCaveat:a=!1}=A;this.isWebGLRenderer=!0;let s;g!==null?s=g.getContextAttributes().alpha:s=E;const n=new Uint32Array(4),r=new Int32Array(4);let G=null,h=null;const D=[],S=[];this.domElement=I,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=qA,this.useLegacyLights=!0,this.toneMapping=bg,this.toneMappingExposure=1;const w=this;let k=!1,M=0,U=0,q=null,F=-1,l=null;const y=new DI,O=new DI;let u=null;const d=new LA(0);let P=0,H=I.width,CA=I.height,V=1,b=null,IA=null;const BA=new DI(0,0,H,CA),_=new DI(0,0,H,CA);let v=!1;const QA=new TE;let EA=!1,rA=!1,$=null;const tA=new TA,xA=new dA,FA=new f,JI={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function WA(){return q===null?V:1}let x=g;function LI(K,Z){for(let z=0;z<K.length;z++){const T=K[z],AA=I.getContext(T,Z);if(AA!==null)return AA}return null}try{const K={alpha:!0,depth:C,stencil:Q,antialias:i,premultipliedAlpha:o,preserveDrawingBuffer:e,powerPreference:t,failIfMajorPerformanceCaveat:a};if("setAttribute"in I&&I.setAttribute("data-engine",`three.js r${yo}`),I.addEventListener("webglcontextlost",DA,!1),I.addEventListener("webglcontextrestored",W,!1),I.addEventListener("webglcontextcreationerror",aA,!1),x===null){const Z=["webgl2","webgl","experimental-webgl"];if(w.isWebGL1Renderer===!0&&Z.shift(),x=LI(Z,K),x===null)throw LI(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}x instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),x.getShaderPrecisionFormat===void 0&&(x.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(K){throw console.error("THREE.WebGLRenderer: "+K.message),K}let NA,HA,KA,aI,ZA,YA,QI,uI,xI,J,N,X,eA,oA,R,gA,iA,j,SA,yA,MA,kA,wA,RA;function _A(){NA=new tw(x),HA=new Bw(x,NA,A),NA.init(HA),kA=new vG(x,NA,HA),KA=new ZG(x,NA,HA),aI=new Dw(x),ZA=new RG,YA=new PG(x,NA,KA,ZA,HA,kA,aI),QI=new Ew(w),uI=new ew(w),xI=new Uh(x,HA),wA=new gw(x,NA,xI,HA),J=new aw(x,xI,aI,wA),N=new cw(x,J,xI,aI),SA=new rw(x,HA,YA),gA=new Qw(ZA),X=new FG(w,QI,uI,NA,HA,wA,gA),eA=new XG(w,ZA),oA=new dG,R=new HG(NA,HA),j=new Iw(w,QI,uI,KA,N,s,o),iA=new OG(w,N,HA),RA=new zG(x,aI,HA,KA),yA=new Cw(x,NA,aI,HA),MA=new sw(x,NA,aI,HA),aI.programs=X.programs,w.capabilities=HA,w.extensions=NA,w.properties=ZA,w.renderLists=oA,w.shadowMap=iA,w.state=KA,w.info=aI}_A();const Y=new _G(w,x);this.xr=Y,this.getContext=function(){return x},this.getContextAttributes=function(){return x.getContextAttributes()},this.forceContextLoss=function(){const K=NA.get("WEBGL_lose_context");K&&K.loseContext()},this.forceContextRestore=function(){const K=NA.get("WEBGL_lose_context");K&&K.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(K){K!==void 0&&(V=K,this.setSize(H,CA,!1))},this.getSize=function(K){return K.set(H,CA)},this.setSize=function(K,Z,z=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=K,CA=Z,I.width=Math.floor(K*V),I.height=Math.floor(Z*V),z===!0&&(I.style.width=K+"px",I.style.height=Z+"px"),this.setViewport(0,0,K,Z)},this.getDrawingBufferSize=function(K){return K.set(H*V,CA*V).floor()},this.setDrawingBufferSize=function(K,Z,z){H=K,CA=Z,V=z,I.width=Math.floor(K*z),I.height=Math.floor(Z*z),this.setViewport(0,0,K,Z)},this.getCurrentViewport=function(K){return K.copy(y)},this.getViewport=function(K){return K.copy(BA)},this.setViewport=function(K,Z,z,T){K.isVector4?BA.set(K.x,K.y,K.z,K.w):BA.set(K,Z,z,T),KA.viewport(y.copy(BA).multiplyScalar(V).floor())},this.getScissor=function(K){return K.copy(_)},this.setScissor=function(K,Z,z,T){K.isVector4?_.set(K.x,K.y,K.z,K.w):_.set(K,Z,z,T),KA.scissor(O.copy(_).multiplyScalar(V).floor())},this.getScissorTest=function(){return v},this.setScissorTest=function(K){KA.setScissorTest(v=K)},this.setOpaqueSort=function(K){b=K},this.setTransparentSort=function(K){IA=K},this.getClearColor=function(K){return K.copy(j.getClearColor())},this.setClearColor=function(){j.setClearColor.apply(j,arguments)},this.getClearAlpha=function(){return j.getClearAlpha()},this.setClearAlpha=function(){j.setClearAlpha.apply(j,arguments)},this.clear=function(K=!0,Z=!0,z=!0){let T=0;if(K){let AA=!1;if(q!==null){const GA=q.texture.format;AA=GA===Es||GA===Qs||GA===Bs}if(AA){const GA=q.texture.type,JA=GA===MC||GA===kC||GA===Uo||GA===jC||GA===gs||GA===Cs,pA=j.getClearColor(),fA=j.getClearAlpha(),jA=pA.r,uA=pA.g,mA=pA.b,rI=ZA.get(q).__webglFramebuffer;JA?(n[0]=jA,n[1]=uA,n[2]=mA,n[3]=fA,x.clearBufferuiv(x.COLOR,rI,n)):(r[0]=jA,r[1]=uA,r[2]=mA,r[3]=fA,x.clearBufferiv(x.COLOR,rI,r))}else T|=x.COLOR_BUFFER_BIT}Z&&(T|=x.DEPTH_BUFFER_BIT),z&&(T|=x.STENCIL_BUFFER_BIT),x.clear(T)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){I.removeEventListener("webglcontextlost",DA,!1),I.removeEventListener("webglcontextrestored",W,!1),I.removeEventListener("webglcontextcreationerror",aA,!1),oA.dispose(),R.dispose(),ZA.dispose(),QI.dispose(),uI.dispose(),N.dispose(),wA.dispose(),RA.dispose(),X.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",yI),Y.removeEventListener("sessionend",fg),$&&($.dispose(),$=null),$I.stop()};function DA(K){K.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function W(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const K=aI.autoReset,Z=iA.enabled,z=iA.autoUpdate,T=iA.needsUpdate,AA=iA.type;_A(),aI.autoReset=K,iA.enabled=Z,iA.autoUpdate=z,iA.needsUpdate=T,iA.type=AA}function aA(K){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",K.statusMessage)}function hA(K){const Z=K.target;Z.removeEventListener("dispose",hA),BI(Z)}function BI(K){MI(K),ZA.remove(K)}function MI(K){const Z=ZA.get(K).programs;Z!==void 0&&(Z.forEach(function(z){X.releaseProgram(z)}),K.isShaderMaterial&&X.releaseShaderCache(K))}this.renderBufferDirect=function(K,Z,z,T,AA,GA){Z===null&&(Z=JI);const JA=AA.isMesh&&AA.matrixWorld.determinant()<0,pA=dD(K,Z,z,T,AA);KA.setMaterial(T,JA);let fA=z.index,jA=1;T.wireframe===!0&&(fA=J.getWireframeAttribute(z),jA=2);const uA=z.drawRange,mA=z.attributes.position;let rI=uA.start*jA,FI=(uA.start+uA.count)*jA;GA!==null&&(rI=Math.max(rI,GA.start*jA),FI=Math.min(FI,(GA.start+GA.count)*jA)),fA!==null?(rI=Math.max(rI,0),FI=Math.min(FI,fA.count)):mA!=null&&(rI=Math.max(rI,0),FI=Math.min(FI,mA.count));const Ug=FI-rI;if(Ug<0||Ug===1/0)return;wA.setup(AA,T,pA,z,fA);let Vg,dI=yA;if(fA!==null&&(Vg=xI.get(fA),dI=MA,dI.setIndex(Vg)),AA.isMesh)T.wireframe===!0?(KA.setLineWidth(T.wireframeLinewidth*WA()),dI.setMode(x.LINES)):dI.setMode(x.TRIANGLES);else if(AA.isLine){let gI=T.linewidth;gI===void 0&&(gI=1),KA.setLineWidth(gI*WA()),AA.isLineSegments?dI.setMode(x.LINES):AA.isLineLoop?dI.setMode(x.LINE_LOOP):dI.setMode(x.LINE_STRIP)}else AA.isPoints?dI.setMode(x.POINTS):AA.isSprite&&dI.setMode(x.TRIANGLES);if(AA.isInstancedMesh)dI.renderInstances(rI,Ug,AA.count);else if(z.isInstancedBufferGeometry){const gI=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Ci=Math.min(z.instanceCount,gI);dI.renderInstances(rI,Ug,Ci)}else dI.render(rI,Ug)},this.compile=function(K,Z){function z(T,AA,GA){T.transparent===!0&&T.side===Hg&&T.forceSinglePass===!1?(T.side=ig,T.needsUpdate=!0,xQ(T,AA,GA),T.side=eC,T.needsUpdate=!0,xQ(T,AA,GA),T.side=Hg):xQ(T,AA,GA)}h=R.get(K),h.init(),S.push(h),K.traverseVisible(function(T){T.isLight&&T.layers.test(Z.layers)&&(h.pushLight(T),T.castShadow&&h.pushShadow(T))}),h.setupLights(w.useLegacyLights),K.traverse(function(T){const AA=T.material;if(AA)if(Array.isArray(AA))for(let GA=0;GA<AA.length;GA++){const JA=AA[GA];z(JA,K,T)}else z(AA,K,T)}),S.pop(),h=null};let qI=null;function pC(K){qI&&qI(K)}function yI(){$I.stop()}function fg(){$I.start()}const $I=new ks;$I.setAnimationLoop(pC),typeof self<"u"&&$I.setContext(self),this.setAnimationLoop=function(K){qI=K,Y.setAnimationLoop(K),K===null?$I.stop():$I.start()},Y.addEventListener("sessionstart",yI),Y.addEventListener("sessionend",fg),this.render=function(K,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Z=Y.updateCameraXR(Z)),K.isScene===!0&&K.onBeforeRender(w,K,Z,q),h=R.get(K,S.length),h.init(),S.push(h),tA.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),QA.setFromProjectionMatrix(tA),rA=this.localClippingEnabled,EA=gA.init(this.clippingPlanes,rA),G=oA.get(K,D.length),G.init(),D.push(G),ae(K,Z,0,w.sortObjects),G.finish(),w.sortObjects===!0&&G.sort(b,IA),EA===!0&&gA.beginShadows();const z=h.state.shadowsArray;if(iA.render(z,K,Z),EA===!0&&gA.endShadows(),this.info.autoReset===!0&&this.info.reset(),this.info.render.frame++,j.render(G,K),h.setupLights(w.useLegacyLights),Z.isArrayCamera){const T=Z.cameras;for(let AA=0,GA=T.length;AA<GA;AA++){const JA=T[AA];se(G,K,JA,JA.viewport)}}else se(G,K,Z);q!==null&&(YA.updateMultisampleRenderTarget(q),YA.updateRenderTargetMipmap(q)),K.isScene===!0&&K.onAfterRender(w,K,Z),wA.resetDefaultState(),F=-1,l=null,S.pop(),S.length>0?h=S[S.length-1]:h=null,D.pop(),D.length>0?G=D[D.length-1]:G=null};function ae(K,Z,z,T){if(K.visible===!1)return;if(K.layers.test(Z.layers)){if(K.isGroup)z=K.renderOrder;else if(K.isLOD)K.autoUpdate===!0&&K.update(Z);else if(K.isLight)h.pushLight(K),K.castShadow&&h.pushShadow(K);else if(K.isSprite){if(!K.frustumCulled||QA.intersectsSprite(K)){T&&FA.setFromMatrixPosition(K.matrixWorld).applyMatrix4(tA);const JA=N.update(K),pA=K.material;pA.visible&&G.push(K,JA,pA,z,FA.z,null)}}else if((K.isMesh||K.isLine||K.isPoints)&&(!K.frustumCulled||QA.intersectsObject(K))){K.isSkinnedMesh&&K.skeleton.frame!==aI.render.frame&&(K.skeleton.update(),K.skeleton.frame=aI.render.frame);const JA=N.update(K),pA=K.material;if(T&&(K.boundingSphere!==void 0?(K.boundingSphere===null&&K.computeBoundingSphere(),FA.copy(K.boundingSphere.center)):(JA.boundingSphere===null&&JA.computeBoundingSphere(),FA.copy(JA.boundingSphere.center)),FA.applyMatrix4(K.matrixWorld).applyMatrix4(tA)),Array.isArray(pA)){const fA=JA.groups;for(let jA=0,uA=fA.length;jA<uA;jA++){const mA=fA[jA],rI=pA[mA.materialIndex];rI&&rI.visible&&G.push(K,JA,rI,z,FA.z,mA)}}else pA.visible&&G.push(K,JA,pA,z,FA.z,null)}}const GA=K.children;for(let JA=0,pA=GA.length;JA<pA;JA++)ae(GA[JA],Z,z,T)}function se(K,Z,z,T){const AA=K.opaque,GA=K.transmissive,JA=K.transparent;h.setupLightsView(z),EA===!0&&gA.setGlobalState(w.clippingPlanes,z),GA.length>0&&qD(AA,GA,Z,z),T&&KA.viewport(y.copy(T)),AA.length>0&&TQ(AA,Z,z),GA.length>0&&TQ(GA,Z,z),JA.length>0&&TQ(JA,Z,z),KA.buffers.depth.setTest(!0),KA.buffers.depth.setMask(!0),KA.buffers.color.setMask(!0),KA.setPolygonOffset(!1)}function qD(K,Z,z,T){const AA=HA.isWebGL2;$===null&&($=new KC(1,1,{generateMipmaps:!0,type:NA.has("EXT_color_buffer_half_float")?xB:MC,minFilter:IB,samples:AA&&i===!0?4:0})),w.getDrawingBufferSize(xA),AA?$.setSize(xA.x,xA.y):$.setSize(NE(xA.x),NE(xA.y));const GA=w.getRenderTarget();w.setRenderTarget($),w.getClearColor(d),P=w.getClearAlpha(),P<1&&w.setClearColor(16777215,.5),w.clear();const JA=w.toneMapping;w.toneMapping=bg,TQ(K,z,T),YA.updateMultisampleRenderTarget($),YA.updateRenderTargetMipmap($);let pA=!1;for(let fA=0,jA=Z.length;fA<jA;fA++){const uA=Z[fA],mA=uA.object,rI=uA.geometry,FI=uA.material,Ug=uA.group;if(FI.side===Hg&&mA.layers.test(T.layers)){const Vg=FI.side;FI.side=ig,FI.needsUpdate=!0,De(mA,z,T,rI,FI,Ug),FI.side=Vg,FI.needsUpdate=!0,pA=!0}}pA===!0&&(YA.updateMultisampleRenderTarget($),YA.updateRenderTargetMipmap($)),w.setRenderTarget(GA),w.setClearColor(d,P),w.toneMapping=JA}function TQ(K,Z,z){const T=Z.isScene===!0?Z.overrideMaterial:null;for(let AA=0,GA=K.length;AA<GA;AA++){const JA=K[AA],pA=JA.object,fA=JA.geometry,jA=T===null?JA.material:T,uA=JA.group;pA.layers.test(z.layers)&&De(pA,Z,z,fA,jA,uA)}}function De(K,Z,z,T,AA,GA){K.onBeforeRender(w,Z,z,T,AA,GA),K.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,K.matrixWorld),K.normalMatrix.getNormalMatrix(K.modelViewMatrix),AA.onBeforeRender(w,Z,z,T,K,GA),AA.transparent===!0&&AA.side===Hg&&AA.forceSinglePass===!1?(AA.side=ig,AA.needsUpdate=!0,w.renderBufferDirect(z,Z,T,AA,K,GA),AA.side=eC,AA.needsUpdate=!0,w.renderBufferDirect(z,Z,T,AA,K,GA),AA.side=Hg):w.renderBufferDirect(z,Z,T,AA,K,GA),K.onAfterRender(w,Z,z,T,AA,GA)}function xQ(K,Z,z){Z.isScene!==!0&&(Z=JI);const T=ZA.get(K),AA=h.state.lights,GA=h.state.shadowsArray,JA=AA.state.version,pA=X.getParameters(K,AA.state,GA,Z,z),fA=X.getProgramCacheKey(pA);let jA=T.programs;T.environment=K.isMeshStandardMaterial?Z.environment:null,T.fog=Z.fog,T.envMap=(K.isMeshStandardMaterial?uI:QI).get(K.envMap||T.environment),jA===void 0&&(K.addEventListener("dispose",hA),jA=new Map,T.programs=jA);let uA=jA.get(fA);if(uA!==void 0){if(T.currentProgram===uA&&T.lightsStateVersion===JA)return ne(K,pA),uA}else pA.uniforms=X.getUniforms(K),K.onBuild(z,pA,w),K.onBeforeCompile(pA,w),uA=X.acquireProgram(pA,fA),jA.set(fA,uA),T.uniforms=pA.uniforms;const mA=T.uniforms;(!K.isShaderMaterial&&!K.isRawShaderMaterial||K.clipping===!0)&&(mA.clippingPlanes=gA.uniform),ne(K,pA),T.needsLights=fD(K),T.lightsStateVersion=JA,T.needsLights&&(mA.ambientLightColor.value=AA.state.ambient,mA.lightProbe.value=AA.state.probe,mA.directionalLights.value=AA.state.directional,mA.directionalLightShadows.value=AA.state.directionalShadow,mA.spotLights.value=AA.state.spot,mA.spotLightShadows.value=AA.state.spotShadow,mA.rectAreaLights.value=AA.state.rectArea,mA.ltc_1.value=AA.state.rectAreaLTC1,mA.ltc_2.value=AA.state.rectAreaLTC2,mA.pointLights.value=AA.state.point,mA.pointLightShadows.value=AA.state.pointShadow,mA.hemisphereLights.value=AA.state.hemi,mA.directionalShadowMap.value=AA.state.directionalShadowMap,mA.directionalShadowMatrix.value=AA.state.directionalShadowMatrix,mA.spotShadowMap.value=AA.state.spotShadowMap,mA.spotLightMatrix.value=AA.state.spotLightMatrix,mA.spotLightMap.value=AA.state.spotLightMap,mA.pointShadowMap.value=AA.state.pointShadowMap,mA.pointShadowMatrix.value=AA.state.pointShadowMatrix);const rI=uA.getUniforms(),FI=wE.seqWithValue(rI.seq,mA);return T.currentProgram=uA,T.uniformsList=FI,uA}function ne(K,Z){const z=ZA.get(K);z.outputColorSpace=Z.outputColorSpace,z.instancing=Z.instancing,z.skinning=Z.skinning,z.morphTargets=Z.morphTargets,z.morphNormals=Z.morphNormals,z.morphColors=Z.morphColors,z.morphTargetsCount=Z.morphTargetsCount,z.numClippingPlanes=Z.numClippingPlanes,z.numIntersection=Z.numClipIntersection,z.vertexAlphas=Z.vertexAlphas,z.vertexTangents=Z.vertexTangents,z.toneMapping=Z.toneMapping}function dD(K,Z,z,T,AA){Z.isScene!==!0&&(Z=JI),YA.resetTextureUnits();const GA=Z.fog,JA=T.isMeshStandardMaterial?Z.environment:null,pA=q===null?w.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:pg,fA=(T.isMeshStandardMaterial?uI:QI).get(T.envMap||JA),jA=T.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,uA=!!z.attributes.tangent&&(!!T.normalMap||T.anisotropy>0),mA=!!z.morphAttributes.position,rI=!!z.morphAttributes.normal,FI=!!z.morphAttributes.color,Ug=T.toneMapped?w.toneMapping:bg,Vg=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,dI=Vg!==void 0?Vg.length:0,gI=ZA.get(T),Ci=h.state.lights;if(EA===!0&&(rA===!0||K!==l)){const sg=K===l&&T.id===F;gA.setState(T,K,sg)}let OI=!1;T.version===gI.__version?(gI.needsLights&&gI.lightsStateVersion!==Ci.state.version||gI.outputColorSpace!==pA||AA.isInstancedMesh&&gI.instancing===!1||!AA.isInstancedMesh&&gI.instancing===!0||AA.isSkinnedMesh&&gI.skinning===!1||!AA.isSkinnedMesh&&gI.skinning===!0||gI.envMap!==fA||T.fog===!0&&gI.fog!==GA||gI.numClippingPlanes!==void 0&&(gI.numClippingPlanes!==gA.numPlanes||gI.numIntersection!==gA.numIntersection)||gI.vertexAlphas!==jA||gI.vertexTangents!==uA||gI.morphTargets!==mA||gI.morphNormals!==rI||gI.morphColors!==FI||gI.toneMapping!==Ug||HA.isWebGL2===!0&&gI.morphTargetsCount!==dI)&&(OI=!0):(OI=!0,gI.__version=T.version);let fC=gI.currentProgram;OI===!0&&(fC=xQ(T,Z,AA));let he=!1,EQ=!1,Bi=!1;const Ag=fC.getUniforms(),YC=gI.uniforms;if(KA.useProgram(fC.program)&&(he=!0,EQ=!0,Bi=!0),T.id!==F&&(F=T.id,EQ=!0),he||l!==K){if(Ag.setValue(x,"projectionMatrix",K.projectionMatrix),HA.logarithmicDepthBuffer&&Ag.setValue(x,"logDepthBufFC",2/(Math.log(K.far+1)/Math.LN2)),l!==K&&(l=K,EQ=!0,Bi=!0),T.isShaderMaterial||T.isMeshPhongMaterial||T.isMeshToonMaterial||T.isMeshStandardMaterial||T.envMap){const sg=Ag.map.cameraPosition;sg!==void 0&&sg.setValue(x,FA.setFromMatrixPosition(K.matrixWorld))}(T.isMeshPhongMaterial||T.isMeshToonMaterial||T.isMeshLambertMaterial||T.isMeshBasicMaterial||T.isMeshStandardMaterial||T.isShaderMaterial)&&Ag.setValue(x,"isOrthographic",K.isOrthographicCamera===!0),(T.isMeshPhongMaterial||T.isMeshToonMaterial||T.isMeshLambertMaterial||T.isMeshBasicMaterial||T.isMeshStandardMaterial||T.isShaderMaterial||T.isShadowMaterial||AA.isSkinnedMesh)&&Ag.setValue(x,"viewMatrix",K.matrixWorldInverse)}if(AA.isSkinnedMesh){Ag.setOptional(x,AA,"bindMatrix"),Ag.setOptional(x,AA,"bindMatrixInverse");const sg=AA.skeleton;sg&&(HA.floatVertexTextures?(sg.boneTexture===null&&sg.computeBoneTexture(),Ag.setValue(x,"boneTexture",sg.boneTexture,YA),Ag.setValue(x,"boneTextureSize",sg.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Qi=z.morphAttributes;if((Qi.position!==void 0||Qi.normal!==void 0||Qi.color!==void 0&&HA.isWebGL2===!0)&&SA.update(AA,z,fC),(EQ||gI.receiveShadow!==AA.receiveShadow)&&(gI.receiveShadow=AA.receiveShadow,Ag.setValue(x,"receiveShadow",AA.receiveShadow)),T.isMeshGouraudMaterial&&T.envMap!==null&&(YC.envMap.value=fA,YC.flipEnvMap.value=fA.isCubeTexture&&fA.isRenderTargetTexture===!1?-1:1),EQ&&(Ag.setValue(x,"toneMappingExposure",w.toneMappingExposure),gI.needsLights&&pD(YC,Bi),GA&&T.fog===!0&&eA.refreshFogUniforms(YC,GA),eA.refreshMaterialUniforms(YC,T,V,CA,$),wE.upload(x,gI.uniformsList,YC,YA)),T.isShaderMaterial&&T.uniformsNeedUpdate===!0&&(wE.upload(x,gI.uniformsList,YC,YA),T.uniformsNeedUpdate=!1),T.isSpriteMaterial&&Ag.setValue(x,"center",AA.center),Ag.setValue(x,"modelViewMatrix",AA.modelViewMatrix),Ag.setValue(x,"normalMatrix",AA.normalMatrix),Ag.setValue(x,"modelMatrix",AA.matrixWorld),T.isShaderMaterial||T.isRawShaderMaterial){const sg=T.uniformsGroups;for(let Ei=0,YD=sg.length;Ei<YD;Ei++)if(HA.isWebGL2){const re=sg[Ei];RA.update(re,fC),RA.bind(re,fC)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return fC}function pD(K,Z){K.ambientLightColor.needsUpdate=Z,K.lightProbe.needsUpdate=Z,K.directionalLights.needsUpdate=Z,K.directionalLightShadows.needsUpdate=Z,K.pointLights.needsUpdate=Z,K.pointLightShadows.needsUpdate=Z,K.spotLights.needsUpdate=Z,K.spotLightShadows.needsUpdate=Z,K.rectAreaLights.needsUpdate=Z,K.hemisphereLights.needsUpdate=Z}function fD(K){return K.isMeshLambertMaterial||K.isMeshToonMaterial||K.isMeshPhongMaterial||K.isMeshStandardMaterial||K.isShadowMaterial||K.isShaderMaterial&&K.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(K,Z,z){ZA.get(K.texture).__webglTexture=Z,ZA.get(K.depthTexture).__webglTexture=z;const T=ZA.get(K);T.__hasExternalTextures=!0,T.__hasExternalTextures&&(T.__autoAllocateDepthBuffer=z===void 0,T.__autoAllocateDepthBuffer||NA.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),T.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(K,Z){const z=ZA.get(K);z.__webglFramebuffer=Z,z.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(K,Z=0,z=0){q=K,M=Z,U=z;let T=!0,AA=null,GA=!1,JA=!1;if(K){const fA=ZA.get(K);fA.__useDefaultFramebuffer!==void 0?(KA.bindFramebuffer(x.FRAMEBUFFER,null),T=!1):fA.__webglFramebuffer===void 0?YA.setupRenderTarget(K):fA.__hasExternalTextures&&YA.rebindTextures(K,ZA.get(K.texture).__webglTexture,ZA.get(K.depthTexture).__webglTexture);const jA=K.texture;(jA.isData3DTexture||jA.isDataArrayTexture||jA.isCompressedArrayTexture)&&(JA=!0);const uA=ZA.get(K).__webglFramebuffer;K.isWebGLCubeRenderTarget?(AA=uA[Z],GA=!0):HA.isWebGL2&&K.samples>0&&YA.useMultisampledRTT(K)===!1?AA=ZA.get(K).__webglMultisampledFramebuffer:AA=uA,y.copy(K.viewport),O.copy(K.scissor),u=K.scissorTest}else y.copy(BA).multiplyScalar(V).floor(),O.copy(_).multiplyScalar(V).floor(),u=v;if(KA.bindFramebuffer(x.FRAMEBUFFER,AA)&&HA.drawBuffers&&T&&KA.drawBuffers(K,AA),KA.viewport(y),KA.scissor(O),KA.setScissorTest(u),GA){const fA=ZA.get(K.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fA.__webglTexture,z)}else if(JA){const fA=ZA.get(K.texture),jA=Z||0;x.framebufferTextureLayer(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,fA.__webglTexture,z||0,jA)}F=-1},this.readRenderTargetPixels=function(K,Z,z,T,AA,GA,JA){if(!(K&&K.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pA=ZA.get(K).__webglFramebuffer;if(K.isWebGLCubeRenderTarget&&JA!==void 0&&(pA=pA[JA]),pA){KA.bindFramebuffer(x.FRAMEBUFFER,pA);try{const fA=K.texture,jA=fA.format,uA=fA.type;if(jA!==lg&&kA.convert(jA)!==x.getParameter(x.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const mA=uA===xB&&(NA.has("EXT_color_buffer_half_float")||HA.isWebGL2&&NA.has("EXT_color_buffer_float"));if(uA!==MC&&kA.convert(uA)!==x.getParameter(x.IMPLEMENTATION_COLOR_READ_TYPE)&&!(uA===QC&&(HA.isWebGL2||NA.has("OES_texture_float")||NA.has("WEBGL_color_buffer_float")))&&!mA){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=K.width-T&&z>=0&&z<=K.height-AA&&x.readPixels(Z,z,T,AA,kA.convert(jA),kA.convert(uA),GA)}finally{const fA=q!==null?ZA.get(q).__webglFramebuffer:null;KA.bindFramebuffer(x.FRAMEBUFFER,fA)}}},this.copyFramebufferToTexture=function(K,Z,z=0){const T=Math.pow(2,-z),AA=Math.floor(Z.image.width*T),GA=Math.floor(Z.image.height*T);YA.setTexture2D(Z,0),x.copyTexSubImage2D(x.TEXTURE_2D,z,0,0,K.x,K.y,AA,GA),KA.unbindTexture()},this.copyTextureToTexture=function(K,Z,z,T=0){const AA=Z.image.width,GA=Z.image.height,JA=kA.convert(z.format),pA=kA.convert(z.type);YA.setTexture2D(z,0),x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,z.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,z.unpackAlignment),Z.isDataTexture?x.texSubImage2D(x.TEXTURE_2D,T,K.x,K.y,AA,GA,JA,pA,Z.image.data):Z.isCompressedTexture?x.compressedTexSubImage2D(x.TEXTURE_2D,T,K.x,K.y,Z.mipmaps[0].width,Z.mipmaps[0].height,JA,Z.mipmaps[0].data):x.texSubImage2D(x.TEXTURE_2D,T,K.x,K.y,JA,pA,Z.image),T===0&&z.generateMipmaps&&x.generateMipmap(x.TEXTURE_2D),KA.unbindTexture()},this.copyTextureToTexture3D=function(K,Z,z,T,AA=0){if(w.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const GA=K.max.x-K.min.x+1,JA=K.max.y-K.min.y+1,pA=K.max.z-K.min.z+1,fA=kA.convert(T.format),jA=kA.convert(T.type);let uA;if(T.isData3DTexture)YA.setTexture3D(T,0),uA=x.TEXTURE_3D;else if(T.isDataArrayTexture)YA.setTexture2DArray(T,0),uA=x.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,T.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,T.unpackAlignment);const mA=x.getParameter(x.UNPACK_ROW_LENGTH),rI=x.getParameter(x.UNPACK_IMAGE_HEIGHT),FI=x.getParameter(x.UNPACK_SKIP_PIXELS),Ug=x.getParameter(x.UNPACK_SKIP_ROWS),Vg=x.getParameter(x.UNPACK_SKIP_IMAGES),dI=z.isCompressedTexture?z.mipmaps[0]:z.image;x.pixelStorei(x.UNPACK_ROW_LENGTH,dI.width),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,dI.height),x.pixelStorei(x.UNPACK_SKIP_PIXELS,K.min.x),x.pixelStorei(x.UNPACK_SKIP_ROWS,K.min.y),x.pixelStorei(x.UNPACK_SKIP_IMAGES,K.min.z),z.isDataTexture||z.isData3DTexture?x.texSubImage3D(uA,AA,Z.x,Z.y,Z.z,GA,JA,pA,fA,jA,dI.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),x.compressedTexSubImage3D(uA,AA,Z.x,Z.y,Z.z,GA,JA,pA,fA,dI.data)):x.texSubImage3D(uA,AA,Z.x,Z.y,Z.z,GA,JA,pA,fA,jA,dI),x.pixelStorei(x.UNPACK_ROW_LENGTH,mA),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,rI),x.pixelStorei(x.UNPACK_SKIP_PIXELS,FI),x.pixelStorei(x.UNPACK_SKIP_ROWS,Ug),x.pixelStorei(x.UNPACK_SKIP_IMAGES,Vg),AA===0&&T.generateMipmaps&&x.generateMipmap(uA),KA.unbindTexture()},this.initTexture=function(K){K.isCubeTexture?YA.setTextureCube(K,0):K.isData3DTexture?YA.setTexture3D(K,0):K.isDataArrayTexture||K.isCompressedArrayTexture?YA.setTexture2DArray(K,0):YA.setTexture2D(K,0),KA.unbindTexture()},this.resetState=function(){M=0,U=0,q=null,KA.reset(),wA.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return EC}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(A){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!A}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===qA?oC:No}set outputEncoding(A){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=A===oC?qA:pg}}class AS extends Ns{}AS.prototype.isWebGL1Renderer=!0;let IS=class extends iI{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(A,I){return super.copy(A,I),A.background!==null&&(this.background=A.background.clone()),A.environment!==null&&(this.environment=A.environment.clone()),A.fog!==null&&(this.fog=A.fog.clone()),this.backgroundBlurriness=A.backgroundBlurriness,this.backgroundIntensity=A.backgroundIntensity,A.overrideMaterial!==null&&(this.overrideMaterial=A.overrideMaterial.clone()),this.matrixAutoUpdate=A.matrixAutoUpdate,this}toJSON(A){const I=super.toJSON(A);return this.fog!==null&&(I.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(I.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(I.object.backgroundIntensity=this.backgroundIntensity),I}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(A){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=A}};class gS{constructor(A,I){this.isInterleavedBuffer=!0,this.array=A,this.stride=I,this.count=A!==void 0?A.length/I:0,this.usage=Ao,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=qg()}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}setUsage(A){return this.usage=A,this}copy(A){return this.array=new A.array.constructor(A.array),this.count=A.count,this.stride=A.stride,this.usage=A.usage,this}copyAt(A,I,g){A*=this.stride,g*=I.stride;for(let C=0,Q=this.stride;C<Q;C++)this.array[A+C]=I.array[g+C];return this}set(A,I=0){return this.array.set(A,I),this}clone(A){A.arrayBuffers===void 0&&(A.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qg()),A.arrayBuffers[this.array.buffer._uuid]===void 0&&(A.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const I=new this.array.constructor(A.arrayBuffers[this.array.buffer._uuid]),g=new this.constructor(I,this.stride);return g.setUsage(this.usage),g}onUpload(A){return this.onUploadCallback=A,this}toJSON(A){return A.arrayBuffers===void 0&&(A.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qg()),A.arrayBuffers[this.array.buffer._uuid]===void 0&&(A.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ig=new f;class po{constructor(A,I,g,C=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=A,this.itemSize=I,this.offset=g,this.normalized=C}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(A){this.data.needsUpdate=A}applyMatrix4(A){for(let I=0,g=this.data.count;I<g;I++)Ig.fromBufferAttribute(this,I),Ig.applyMatrix4(A),this.setXYZ(I,Ig.x,Ig.y,Ig.z);return this}applyNormalMatrix(A){for(let I=0,g=this.count;I<g;I++)Ig.fromBufferAttribute(this,I),Ig.applyNormalMatrix(A),this.setXYZ(I,Ig.x,Ig.y,Ig.z);return this}transformDirection(A){for(let I=0,g=this.count;I<g;I++)Ig.fromBufferAttribute(this,I),Ig.transformDirection(A),this.setXYZ(I,Ig.x,Ig.y,Ig.z);return this}setX(A,I){return this.normalized&&(I=sI(I,this.array)),this.data.array[A*this.data.stride+this.offset]=I,this}setY(A,I){return this.normalized&&(I=sI(I,this.array)),this.data.array[A*this.data.stride+this.offset+1]=I,this}setZ(A,I){return this.normalized&&(I=sI(I,this.array)),this.data.array[A*this.data.stride+this.offset+2]=I,this}setW(A,I){return this.normalized&&(I=sI(I,this.array)),this.data.array[A*this.data.stride+this.offset+3]=I,this}getX(A){let I=this.data.array[A*this.data.stride+this.offset];return this.normalized&&(I=iC(I,this.array)),I}getY(A){let I=this.data.array[A*this.data.stride+this.offset+1];return this.normalized&&(I=iC(I,this.array)),I}getZ(A){let I=this.data.array[A*this.data.stride+this.offset+2];return this.normalized&&(I=iC(I,this.array)),I}getW(A){let I=this.data.array[A*this.data.stride+this.offset+3];return this.normalized&&(I=iC(I,this.array)),I}setXY(A,I,g){return A=A*this.data.stride+this.offset,this.normalized&&(I=sI(I,this.array),g=sI(g,this.array)),this.data.array[A+0]=I,this.data.array[A+1]=g,this}setXYZ(A,I,g,C){return A=A*this.data.stride+this.offset,this.normalized&&(I=sI(I,this.array),g=sI(g,this.array),C=sI(C,this.array)),this.data.array[A+0]=I,this.data.array[A+1]=g,this.data.array[A+2]=C,this}setXYZW(A,I,g,C,Q){return A=A*this.data.stride+this.offset,this.normalized&&(I=sI(I,this.array),g=sI(g,this.array),C=sI(C,this.array),Q=sI(Q,this.array)),this.data.array[A+0]=I,this.data.array[A+1]=g,this.data.array[A+2]=C,this.data.array[A+3]=Q,this}clone(A){if(A===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const I=[];for(let g=0;g<this.count;g++){const C=g*this.data.stride+this.offset;for(let Q=0;Q<this.itemSize;Q++)I.push(this.data.array[C+Q])}return new WI(new this.array.constructor(I),this.itemSize,this.normalized)}else return A.interleavedBuffers===void 0&&(A.interleavedBuffers={}),A.interleavedBuffers[this.data.uuid]===void 0&&(A.interleavedBuffers[this.data.uuid]=this.data.clone(A)),new po(A.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(A){if(A===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const I=[];for(let g=0;g<this.count;g++){const C=g*this.data.stride+this.offset;for(let Q=0;Q<this.itemSize;Q++)I.push(this.data.array[C+Q])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:I,normalized:this.normalized}}else return A.interleavedBuffers===void 0&&(A.interleavedBuffers={}),A.interleavedBuffers[this.data.uuid]===void 0&&(A.interleavedBuffers[this.data.uuid]=this.data.toJSON(A)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Lt=new f,ut=new DI,Ht=new DI,CS=new f,mt=new TA,UB=new f,Yi=new vg,bt=new TA,Li=new YQ;class BS extends Bg{constructor(A,I){super(A,I),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new TA,this.bindMatrixInverse=new TA,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const A=this.geometry;this.boundingBox===null&&(this.boundingBox=new sC),this.boundingBox.makeEmpty();const I=A.getAttribute("position");for(let g=0;g<I.count;g++)UB.fromBufferAttribute(I,g),this.applyBoneTransform(g,UB),this.boundingBox.expandByPoint(UB)}computeBoundingSphere(){const A=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new vg),this.boundingSphere.makeEmpty();const I=A.getAttribute("position");for(let g=0;g<I.count;g++)UB.fromBufferAttribute(I,g),this.applyBoneTransform(g,UB),this.boundingSphere.expandByPoint(UB)}copy(A,I){return super.copy(A,I),this.bindMode=A.bindMode,this.bindMatrix.copy(A.bindMatrix),this.bindMatrixInverse.copy(A.bindMatrixInverse),this.skeleton=A.skeleton,A.boundingBox!==null&&(this.boundingBox=A.boundingBox.clone()),A.boundingSphere!==null&&(this.boundingSphere=A.boundingSphere.clone()),this}raycast(A,I){const g=this.material,C=this.matrixWorld;g!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yi.copy(this.boundingSphere),Yi.applyMatrix4(C),A.ray.intersectsSphere(Yi)!==!1&&(bt.copy(C).invert(),Li.copy(A.ray).applyMatrix4(bt),!(this.boundingBox!==null&&Li.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(A,I,Li)))}getVertexPosition(A,I){return super.getVertexPosition(A,I),this.applyBoneTransform(A,I),I}bind(A,I){this.skeleton=A,I===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),I=this.matrixWorld),this.bindMatrix.copy(I),this.bindMatrixInverse.copy(I).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const A=new DI,I=this.geometry.attributes.skinWeight;for(let g=0,C=I.count;g<C;g++){A.fromBufferAttribute(I,g);const Q=1/A.manhattanLength();Q!==1/0?A.multiplyScalar(Q):A.set(1,0,0,0),I.setXYZW(g,A.x,A.y,A.z,A.w)}}updateMatrixWorld(A){super.updateMatrixWorld(A),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(A,I){const g=this.skeleton,C=this.geometry;ut.fromBufferAttribute(C.attributes.skinIndex,A),Ht.fromBufferAttribute(C.attributes.skinWeight,A),Lt.copy(I).applyMatrix4(this.bindMatrix),I.set(0,0,0);for(let Q=0;Q<4;Q++){const E=Ht.getComponent(Q);if(E!==0){const i=ut.getComponent(Q);mt.multiplyMatrices(g.bones[i].matrixWorld,g.boneInverses[i]),I.addScaledVector(CS.copy(Lt).applyMatrix4(mt),E)}}return I.applyMatrix4(this.bindMatrixInverse)}boneTransform(A,I){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(A,I)}}class Ks extends iI{constructor(){super(),this.isBone=!0,this.type="Bone"}}class QS extends YI{constructor(A=null,I=1,g=1,C,Q,E,i,o,e=PI,t=PI,a,s){super(null,E,i,o,e,t,C,Q,a,s),this.isDataTexture=!0,this.image={data:A,width:I,height:g},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Tt=new TA,ES=new TA;class fo{constructor(A=[],I=[]){this.uuid=qg(),this.bones=A.slice(0),this.boneInverses=I,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const A=this.bones,I=this.boneInverses;if(this.boneMatrices=new Float32Array(A.length*16),I.length===0)this.calculateInverses();else if(A.length!==I.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let g=0,C=this.bones.length;g<C;g++)this.boneInverses.push(new TA)}}calculateInverses(){this.boneInverses.length=0;for(let A=0,I=this.bones.length;A<I;A++){const g=new TA;this.bones[A]&&g.copy(this.bones[A].matrixWorld).invert(),this.boneInverses.push(g)}}pose(){for(let A=0,I=this.bones.length;A<I;A++){const g=this.bones[A];g&&g.matrixWorld.copy(this.boneInverses[A]).invert()}for(let A=0,I=this.bones.length;A<I;A++){const g=this.bones[A];g&&(g.parent&&g.parent.isBone?(g.matrix.copy(g.parent.matrixWorld).invert(),g.matrix.multiply(g.matrixWorld)):g.matrix.copy(g.matrixWorld),g.matrix.decompose(g.position,g.quaternion,g.scale))}}update(){const A=this.bones,I=this.boneInverses,g=this.boneMatrices,C=this.boneTexture;for(let Q=0,E=A.length;Q<E;Q++){const i=A[Q]?A[Q].matrixWorld:ES;Tt.multiplyMatrices(i,I[Q]),Tt.toArray(g,Q*16)}C!==null&&(C.needsUpdate=!0)}clone(){return new fo(this.bones,this.boneInverses)}computeBoneTexture(){let A=Math.sqrt(this.bones.length*4);A=ts(A),A=Math.max(A,4);const I=new Float32Array(A*A*4);I.set(this.boneMatrices);const g=new QS(I,A,A,lg,QC);return g.needsUpdate=!0,this.boneMatrices=I,this.boneTexture=g,this.boneTextureSize=A,this}getBoneByName(A){for(let I=0,g=this.bones.length;I<g;I++){const C=this.bones[I];if(C.name===A)return C}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(A,I){this.uuid=A.uuid;for(let g=0,C=A.bones.length;g<C;g++){const Q=A.bones[g];let E=I[Q];E===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",Q),E=new Ks),this.bones.push(E),this.boneInverses.push(new TA().fromArray(A.boneInverses[g]))}return this.init(),this}toJSON(){const A={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};A.uuid=this.uuid;const I=this.bones,g=this.boneInverses;for(let C=0,Q=I.length;C<Q;C++){const E=I[C];A.bones.push(E.uuid);const i=g[C];A.boneInverses.push(i.toArray())}return A}}class xt extends WI{constructor(A,I,g,C=1){super(A,I,g),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=C}copy(A){return super.copy(A),this.meshPerAttribute=A.meshPerAttribute,this}toJSON(){const A=super.toJSON();return A.meshPerAttribute=this.meshPerAttribute,A.isInstancedBufferAttribute=!0,A}}const NB=new TA,Ot=new TA,eE=[],Zt=new sC,iS=new TA,aQ=new Bg,sQ=new vg;class oS extends Bg{constructor(A,I,g){super(A,I),this.isInstancedMesh=!0,this.instanceMatrix=new xt(new Float32Array(g*16),16),this.instanceColor=null,this.count=g,this.boundingBox=null,this.boundingSphere=null;for(let C=0;C<g;C++)this.setMatrixAt(C,iS)}computeBoundingBox(){const A=this.geometry,I=this.count;this.boundingBox===null&&(this.boundingBox=new sC),A.boundingBox===null&&A.computeBoundingBox(),this.boundingBox.makeEmpty();for(let g=0;g<I;g++)this.getMatrixAt(g,NB),Zt.copy(A.boundingBox).applyMatrix4(NB),this.boundingBox.union(Zt)}computeBoundingSphere(){const A=this.geometry,I=this.count;this.boundingSphere===null&&(this.boundingSphere=new vg),A.boundingSphere===null&&A.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let g=0;g<I;g++)this.getMatrixAt(g,NB),sQ.copy(A.boundingSphere).applyMatrix4(NB),this.boundingSphere.union(sQ)}copy(A,I){return super.copy(A,I),this.instanceMatrix.copy(A.instanceMatrix),A.instanceColor!==null&&(this.instanceColor=A.instanceColor.clone()),this.count=A.count,A.boundingBox!==null&&(this.boundingBox=A.boundingBox.clone()),A.boundingSphere!==null&&(this.boundingSphere=A.boundingSphere.clone()),this}getColorAt(A,I){I.fromArray(this.instanceColor.array,A*3)}getMatrixAt(A,I){I.fromArray(this.instanceMatrix.array,A*16)}raycast(A,I){const g=this.matrixWorld,C=this.count;if(aQ.geometry=this.geometry,aQ.material=this.material,aQ.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sQ.copy(this.boundingSphere),sQ.applyMatrix4(g),A.ray.intersectsSphere(sQ)!==!1))for(let Q=0;Q<C;Q++){this.getMatrixAt(Q,NB),Ot.multiplyMatrices(g,NB),aQ.matrixWorld=Ot,aQ.raycast(A,eE);for(let E=0,i=eE.length;E<i;E++){const o=eE[E];o.instanceId=Q,o.object=this,I.push(o)}eE.length=0}}setColorAt(A,I){this.instanceColor===null&&(this.instanceColor=new xt(new Float32Array(this.instanceMatrix.count*3),3)),I.toArray(this.instanceColor.array,A*3)}setMatrixAt(A,I){I.toArray(this.instanceMatrix.array,A*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Js extends Tg{constructor(A){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new LA(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.linewidth=A.linewidth,this.linecap=A.linecap,this.linejoin=A.linejoin,this.fog=A.fog,this}}const Pt=new f,vt=new f,Wt=new TA,ui=new YQ,tE=new vg;class Yo extends iI{constructor(A=new yg,I=new Js){super(),this.isLine=!0,this.type="Line",this.geometry=A,this.material=I,this.updateMorphTargets()}copy(A,I){return super.copy(A,I),this.material=A.material,this.geometry=A.geometry,this}computeLineDistances(){const A=this.geometry;if(A.index===null){const I=A.attributes.position,g=[0];for(let C=1,Q=I.count;C<Q;C++)Pt.fromBufferAttribute(I,C-1),vt.fromBufferAttribute(I,C),g[C]=g[C-1],g[C]+=Pt.distanceTo(vt);A.setAttribute("lineDistance",new dg(g,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(A,I){const g=this.geometry,C=this.matrixWorld,Q=A.params.Line.threshold,E=g.drawRange;if(g.boundingSphere===null&&g.computeBoundingSphere(),tE.copy(g.boundingSphere),tE.applyMatrix4(C),tE.radius+=Q,A.ray.intersectsSphere(tE)===!1)return;Wt.copy(C).invert(),ui.copy(A.ray).applyMatrix4(Wt);const i=Q/((this.scale.x+this.scale.y+this.scale.z)/3),o=i*i,e=new f,t=new f,a=new f,s=new f,n=this.isLineSegments?2:1,r=g.index,h=g.attributes.position;if(r!==null){const D=Math.max(0,E.start),S=Math.min(r.count,E.start+E.count);for(let w=D,k=S-1;w<k;w+=n){const M=r.getX(w),U=r.getX(w+1);if(e.fromBufferAttribute(h,M),t.fromBufferAttribute(h,U),ui.distanceSqToSegment(e,t,s,a)>o)continue;s.applyMatrix4(this.matrixWorld);const F=A.ray.origin.distanceTo(s);F<A.near||F>A.far||I.push({distance:F,point:a.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}else{const D=Math.max(0,E.start),S=Math.min(h.count,E.start+E.count);for(let w=D,k=S-1;w<k;w+=n){if(e.fromBufferAttribute(h,w),t.fromBufferAttribute(h,w+1),ui.distanceSqToSegment(e,t,s,a)>o)continue;s.applyMatrix4(this.matrixWorld);const U=A.ray.origin.distanceTo(s);U<A.near||U>A.far||I.push({distance:U,point:a.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const I=this.geometry.morphAttributes,g=Object.keys(I);if(g.length>0){const C=I[g[0]];if(C!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Q=0,E=C.length;Q<E;Q++){const i=C[Q].name||String(Q);this.morphTargetInfluences.push(0),this.morphTargetDictionary[i]=Q}}}}}const jt=new f,Vt=new f;class eS extends Yo{constructor(A,I){super(A,I),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const A=this.geometry;if(A.index===null){const I=A.attributes.position,g=[];for(let C=0,Q=I.count;C<Q;C+=2)jt.fromBufferAttribute(I,C),Vt.fromBufferAttribute(I,C+1),g[C]=C===0?0:g[C-1],g[C+1]=g[C]+jt.distanceTo(Vt);A.setAttribute("lineDistance",new dg(g,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class tS extends Yo{constructor(A,I){super(A,I),this.isLineLoop=!0,this.type="LineLoop"}}class Fs extends Tg{constructor(A){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new LA(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.alphaMap=A.alphaMap,this.size=A.size,this.sizeAttenuation=A.sizeAttenuation,this.fog=A.fog,this}}const _t=new TA,Bo=new YQ,aE=new vg,sE=new f;class aS extends iI{constructor(A=new yg,I=new Fs){super(),this.isPoints=!0,this.type="Points",this.geometry=A,this.material=I,this.updateMorphTargets()}copy(A,I){return super.copy(A,I),this.material=A.material,this.geometry=A.geometry,this}raycast(A,I){const g=this.geometry,C=this.matrixWorld,Q=A.params.Points.threshold,E=g.drawRange;if(g.boundingSphere===null&&g.computeBoundingSphere(),aE.copy(g.boundingSphere),aE.applyMatrix4(C),aE.radius+=Q,A.ray.intersectsSphere(aE)===!1)return;_t.copy(C).invert(),Bo.copy(A.ray).applyMatrix4(_t);const i=Q/((this.scale.x+this.scale.y+this.scale.z)/3),o=i*i,e=g.index,a=g.attributes.position;if(e!==null){const s=Math.max(0,E.start),n=Math.min(e.count,E.start+E.count);for(let r=s,G=n;r<G;r++){const h=e.getX(r);sE.fromBufferAttribute(a,h),Xt(sE,h,o,C,A,I,this)}}else{const s=Math.max(0,E.start),n=Math.min(a.count,E.start+E.count);for(let r=s,G=n;r<G;r++)sE.fromBufferAttribute(a,r),Xt(sE,r,o,C,A,I,this)}}updateMorphTargets(){const I=this.geometry.morphAttributes,g=Object.keys(I);if(g.length>0){const C=I[g[0]];if(C!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Q=0,E=C.length;Q<E;Q++){const i=C[Q].name||String(Q);this.morphTargetInfluences.push(0),this.morphTargetDictionary[i]=Q}}}}}function Xt(B,A,I,g,C,Q,E){const i=Bo.distanceSqToPoint(B);if(i<I){const o=new f;Bo.closestPointToPoint(B,o),o.applyMatrix4(g);const e=C.ray.origin.distanceTo(o);if(e<C.near||e>C.far)return;Q.push({distance:e,distanceToRay:Math.sqrt(i),point:o,index:A,face:null,object:E})}}class ZE extends Tg{constructor(A){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new LA(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new LA(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=os,this.normalScale=new dA(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.defines={STANDARD:""},this.color.copy(A.color),this.roughness=A.roughness,this.metalness=A.metalness,this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.emissive.copy(A.emissive),this.emissiveMap=A.emissiveMap,this.emissiveIntensity=A.emissiveIntensity,this.bumpMap=A.bumpMap,this.bumpScale=A.bumpScale,this.normalMap=A.normalMap,this.normalMapType=A.normalMapType,this.normalScale.copy(A.normalScale),this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.roughnessMap=A.roughnessMap,this.metalnessMap=A.metalnessMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.envMapIntensity=A.envMapIntensity,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.flatShading=A.flatShading,this.fog=A.fog,this}}class dC extends ZE{constructor(A){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new dA(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return vI(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(I){this.ior=(1+.4*I)/(1-.4*I)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new LA(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new LA(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new LA(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(A)}get anisotropy(){return this._anisotropy}set anisotropy(A){this._anisotropy>0!=A>0&&this.version++,this._anisotropy=A}get clearcoat(){return this._clearcoat}set clearcoat(A){this._clearcoat>0!=A>0&&this.version++,this._clearcoat=A}get iridescence(){return this._iridescence}set iridescence(A){this._iridescence>0!=A>0&&this.version++,this._iridescence=A}get sheen(){return this._sheen}set sheen(A){this._sheen>0!=A>0&&this.version++,this._sheen=A}get transmission(){return this._transmission}set transmission(A){this._transmission>0!=A>0&&this.version++,this._transmission=A}copy(A){return super.copy(A),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=A.anisotropy,this.anisotropyRotation=A.anisotropyRotation,this.anisotropyMap=A.anisotropyMap,this.clearcoat=A.clearcoat,this.clearcoatMap=A.clearcoatMap,this.clearcoatRoughness=A.clearcoatRoughness,this.clearcoatRoughnessMap=A.clearcoatRoughnessMap,this.clearcoatNormalMap=A.clearcoatNormalMap,this.clearcoatNormalScale.copy(A.clearcoatNormalScale),this.ior=A.ior,this.iridescence=A.iridescence,this.iridescenceMap=A.iridescenceMap,this.iridescenceIOR=A.iridescenceIOR,this.iridescenceThicknessRange=[...A.iridescenceThicknessRange],this.iridescenceThicknessMap=A.iridescenceThicknessMap,this.sheen=A.sheen,this.sheenColor.copy(A.sheenColor),this.sheenColorMap=A.sheenColorMap,this.sheenRoughness=A.sheenRoughness,this.sheenRoughnessMap=A.sheenRoughnessMap,this.transmission=A.transmission,this.transmissionMap=A.transmissionMap,this.thickness=A.thickness,this.thicknessMap=A.thicknessMap,this.attenuationDistance=A.attenuationDistance,this.attenuationColor.copy(A.attenuationColor),this.specularIntensity=A.specularIntensity,this.specularIntensityMap=A.specularIntensityMap,this.specularColor.copy(A.specularColor),this.specularColorMap=A.specularColorMap,this}}function cC(B,A,I){return Rs(B)?new B.constructor(B.subarray(A,I!==void 0?I:B.length)):B.slice(A,I)}function DE(B,A,I){return!B||!I&&B.constructor===A?B:typeof A.BYTES_PER_ELEMENT=="number"?new A(B):Array.prototype.slice.call(B)}function Rs(B){return ArrayBuffer.isView(B)&&!(B instanceof DataView)}function sS(B){function A(C,Q){return B[C]-B[Q]}const I=B.length,g=new Array(I);for(let C=0;C!==I;++C)g[C]=C;return g.sort(A),g}function zt(B,A,I){const g=B.length,C=new B.constructor(g);for(let Q=0,E=0;E!==g;++Q){const i=I[Q]*A;for(let o=0;o!==A;++o)C[E++]=B[i+o]}return C}function qs(B,A,I,g){let C=1,Q=B[0];for(;Q!==void 0&&Q[g]===void 0;)Q=B[C++];if(Q===void 0)return;let E=Q[g];if(E!==void 0)if(Array.isArray(E))do E=Q[g],E!==void 0&&(A.push(Q.time),I.push.apply(I,E)),Q=B[C++];while(Q!==void 0);else if(E.toArray!==void 0)do E=Q[g],E!==void 0&&(A.push(Q.time),E.toArray(I,I.length)),Q=B[C++];while(Q!==void 0);else do E=Q[g],E!==void 0&&(A.push(Q.time),I.push(E)),Q=B[C++];while(Q!==void 0)}class LQ{constructor(A,I,g,C){this.parameterPositions=A,this._cachedIndex=0,this.resultBuffer=C!==void 0?C:new I.constructor(g),this.sampleValues=I,this.valueSize=g,this.settings=null,this.DefaultSettings_={}}evaluate(A){const I=this.parameterPositions;let g=this._cachedIndex,C=I[g],Q=I[g-1];g:{A:{let E;I:{C:if(!(A<C)){for(let i=g+2;;){if(C===void 0){if(A<Q)break C;return g=I.length,this._cachedIndex=g,this.copySampleValue_(g-1)}if(g===i)break;if(Q=C,C=I[++g],A<C)break A}E=I.length;break I}if(!(A>=Q)){const i=I[1];A<i&&(g=2,Q=i);for(let o=g-2;;){if(Q===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(g===o)break;if(C=Q,Q=I[--g-1],A>=Q)break A}E=g,g=0;break I}break g}for(;g<E;){const i=g+E>>>1;A<I[i]?E=i:g=i+1}if(C=I[g],Q=I[g-1],Q===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(C===void 0)return g=I.length,this._cachedIndex=g,this.copySampleValue_(g-1)}this._cachedIndex=g,this.intervalChanged_(g,Q,C)}return this.interpolate_(g,Q,A,C)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(A){const I=this.resultBuffer,g=this.sampleValues,C=this.valueSize,Q=A*C;for(let E=0;E!==C;++E)I[E]=g[Q+E];return I}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class DS extends LQ{constructor(A,I,g,C){super(A,I,g,C),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:je,endingEnd:je}}intervalChanged_(A,I,g){const C=this.parameterPositions;let Q=A-2,E=A+1,i=C[Q],o=C[E];if(i===void 0)switch(this.getSettings_().endingStart){case Ve:Q=A,i=2*I-g;break;case _e:Q=C.length-2,i=I+C[Q]-C[Q+1];break;default:Q=A,i=g}if(o===void 0)switch(this.getSettings_().endingEnd){case Ve:E=A,o=2*g-I;break;case _e:E=1,o=g+C[1]-C[0];break;default:E=A-1,o=I}const e=(g-I)*.5,t=this.valueSize;this._weightPrev=e/(I-i),this._weightNext=e/(o-g),this._offsetPrev=Q*t,this._offsetNext=E*t}interpolate_(A,I,g,C){const Q=this.resultBuffer,E=this.sampleValues,i=this.valueSize,o=A*i,e=o-i,t=this._offsetPrev,a=this._offsetNext,s=this._weightPrev,n=this._weightNext,r=(g-I)/(C-I),G=r*r,h=G*r,D=-s*h+2*s*G-s*r,S=(1+s)*h+(-1.5-2*s)*G+(-.5+s)*r+1,w=(-1-n)*h+(1.5+n)*G+.5*r,k=n*h-n*G;for(let M=0;M!==i;++M)Q[M]=D*E[t+M]+S*E[e+M]+w*E[o+M]+k*E[a+M];return Q}}class nS extends LQ{constructor(A,I,g,C){super(A,I,g,C)}interpolate_(A,I,g,C){const Q=this.resultBuffer,E=this.sampleValues,i=this.valueSize,o=A*i,e=o-i,t=(g-I)/(C-I),a=1-t;for(let s=0;s!==i;++s)Q[s]=E[e+s]*a+E[o+s]*t;return Q}}class hS extends LQ{constructor(A,I,g,C){super(A,I,g,C)}interpolate_(A){return this.copySampleValue_(A-1)}}class Wg{constructor(A,I,g,C){if(A===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(I===void 0||I.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+A);this.name=A,this.times=DE(I,this.TimeBufferType),this.values=DE(g,this.ValueBufferType),this.setInterpolation(C||this.DefaultInterpolation)}static toJSON(A){const I=A.constructor;let g;if(I.toJSON!==this.toJSON)g=I.toJSON(A);else{g={name:A.name,times:DE(A.times,Array),values:DE(A.values,Array)};const C=A.getInterpolation();C!==A.DefaultInterpolation&&(g.interpolation=C)}return g.type=A.ValueTypeName,g}InterpolantFactoryMethodDiscrete(A){return new hS(this.times,this.values,this.getValueSize(),A)}InterpolantFactoryMethodLinear(A){return new nS(this.times,this.values,this.getValueSize(),A)}InterpolantFactoryMethodSmooth(A){return new DS(this.times,this.values,this.getValueSize(),A)}setInterpolation(A){let I;switch(A){case SQ:I=this.InterpolantFactoryMethodDiscrete;break;case ZB:I=this.InterpolantFactoryMethodLinear;break;case si:I=this.InterpolantFactoryMethodSmooth;break}if(I===void 0){const g="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(A!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(g);return console.warn("THREE.KeyframeTrack:",g),this}return this.createInterpolant=I,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return SQ;case this.InterpolantFactoryMethodLinear:return ZB;case this.InterpolantFactoryMethodSmooth:return si}}getValueSize(){return this.values.length/this.times.length}shift(A){if(A!==0){const I=this.times;for(let g=0,C=I.length;g!==C;++g)I[g]+=A}return this}scale(A){if(A!==1){const I=this.times;for(let g=0,C=I.length;g!==C;++g)I[g]*=A}return this}trim(A,I){const g=this.times,C=g.length;let Q=0,E=C-1;for(;Q!==C&&g[Q]<A;)++Q;for(;E!==-1&&g[E]>I;)--E;if(++E,Q!==0||E!==C){Q>=E&&(E=Math.max(E,1),Q=E-1);const i=this.getValueSize();this.times=cC(g,Q,E),this.values=cC(this.values,Q*i,E*i)}return this}validate(){let A=!0;const I=this.getValueSize();I-Math.floor(I)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),A=!1);const g=this.times,C=this.values,Q=g.length;Q===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),A=!1);let E=null;for(let i=0;i!==Q;i++){const o=g[i];if(typeof o=="number"&&isNaN(o)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,i,o),A=!1;break}if(E!==null&&E>o){console.error("THREE.KeyframeTrack: Out of order keys.",this,i,o,E),A=!1;break}E=o}if(C!==void 0&&Rs(C))for(let i=0,o=C.length;i!==o;++i){const e=C[i];if(isNaN(e)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,i,e),A=!1;break}}return A}optimize(){const A=cC(this.times),I=cC(this.values),g=this.getValueSize(),C=this.getInterpolation()===si,Q=A.length-1;let E=1;for(let i=1;i<Q;++i){let o=!1;const e=A[i],t=A[i+1];if(e!==t&&(i!==1||e!==A[0]))if(C)o=!0;else{const a=i*g,s=a-g,n=a+g;for(let r=0;r!==g;++r){const G=I[a+r];if(G!==I[s+r]||G!==I[n+r]){o=!0;break}}}if(o){if(i!==E){A[E]=A[i];const a=i*g,s=E*g;for(let n=0;n!==g;++n)I[s+n]=I[a+n]}++E}}if(Q>0){A[E]=A[Q];for(let i=Q*g,o=E*g,e=0;e!==g;++e)I[o+e]=I[i+e];++E}return E!==A.length?(this.times=cC(A,0,E),this.values=cC(I,0,E*g)):(this.times=A,this.values=I),this}clone(){const A=cC(this.times,0),I=cC(this.values,0),g=this.constructor,C=new g(this.name,A,I);return C.createInterpolant=this.createInterpolant,C}}Wg.prototype.TimeBufferType=Float32Array;Wg.prototype.ValueBufferType=Float32Array;Wg.prototype.DefaultInterpolation=ZB;class gQ extends Wg{}gQ.prototype.ValueTypeName="bool";gQ.prototype.ValueBufferType=Array;gQ.prototype.DefaultInterpolation=SQ;gQ.prototype.InterpolantFactoryMethodLinear=void 0;gQ.prototype.InterpolantFactoryMethodSmooth=void 0;class ds extends Wg{}ds.prototype.ValueTypeName="color";class lQ extends Wg{}lQ.prototype.ValueTypeName="number";class rS extends LQ{constructor(A,I,g,C){super(A,I,g,C)}interpolate_(A,I,g,C){const Q=this.resultBuffer,E=this.sampleValues,i=this.valueSize,o=(g-I)/(C-I);let e=A*i;for(let t=e+i;e!==t;e+=4)Qg.slerpFlat(Q,0,E,e-i,E,e,o);return Q}}class gB extends Wg{InterpolantFactoryMethodLinear(A){return new rS(this.times,this.values,this.getValueSize(),A)}}gB.prototype.ValueTypeName="quaternion";gB.prototype.DefaultInterpolation=ZB;gB.prototype.InterpolantFactoryMethodSmooth=void 0;class CQ extends Wg{}CQ.prototype.ValueTypeName="string";CQ.prototype.ValueBufferType=Array;CQ.prototype.DefaultInterpolation=SQ;CQ.prototype.InterpolantFactoryMethodLinear=void 0;CQ.prototype.InterpolantFactoryMethodSmooth=void 0;class MQ extends Wg{}MQ.prototype.ValueTypeName="vector";class cS{constructor(A,I=-1,g,C=Un){this.name=A,this.tracks=g,this.duration=I,this.blendMode=C,this.uuid=qg(),this.duration<0&&this.resetDuration()}static parse(A){const I=[],g=A.tracks,C=1/(A.fps||1);for(let E=0,i=g.length;E!==i;++E)I.push(GS(g[E]).scale(C));const Q=new this(A.name,A.duration,I,A.blendMode);return Q.uuid=A.uuid,Q}static toJSON(A){const I=[],g=A.tracks,C={name:A.name,duration:A.duration,tracks:I,uuid:A.uuid,blendMode:A.blendMode};for(let Q=0,E=g.length;Q!==E;++Q)I.push(Wg.toJSON(g[Q]));return C}static CreateFromMorphTargetSequence(A,I,g,C){const Q=I.length,E=[];for(let i=0;i<Q;i++){let o=[],e=[];o.push((i+Q-1)%Q,i,(i+1)%Q),e.push(0,1,0);const t=sS(o);o=zt(o,1,t),e=zt(e,1,t),!C&&o[0]===0&&(o.push(Q),e.push(e[0])),E.push(new lQ(".morphTargetInfluences["+I[i].name+"]",o,e).scale(1/g))}return new this(A,-1,E)}static findByName(A,I){let g=A;if(!Array.isArray(A)){const C=A;g=C.geometry&&C.geometry.animations||C.animations}for(let C=0;C<g.length;C++)if(g[C].name===I)return g[C];return null}static CreateClipsFromMorphTargetSequences(A,I,g){const C={},Q=/^([\w-]*?)([\d]+)$/;for(let i=0,o=A.length;i<o;i++){const e=A[i],t=e.name.match(Q);if(t&&t.length>1){const a=t[1];let s=C[a];s||(C[a]=s=[]),s.push(e)}}const E=[];for(const i in C)E.push(this.CreateFromMorphTargetSequence(i,C[i],I,g));return E}static parseAnimation(A,I){if(!A)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const g=function(a,s,n,r,G){if(n.length!==0){const h=[],D=[];qs(n,h,D,r),h.length!==0&&G.push(new a(s,h,D))}},C=[],Q=A.name||"default",E=A.fps||30,i=A.blendMode;let o=A.length||-1;const e=A.hierarchy||[];for(let a=0;a<e.length;a++){const s=e[a].keys;if(!(!s||s.length===0))if(s[0].morphTargets){const n={};let r;for(r=0;r<s.length;r++)if(s[r].morphTargets)for(let G=0;G<s[r].morphTargets.length;G++)n[s[r].morphTargets[G]]=-1;for(const G in n){const h=[],D=[];for(let S=0;S!==s[r].morphTargets.length;++S){const w=s[r];h.push(w.time),D.push(w.morphTarget===G?1:0)}C.push(new lQ(".morphTargetInfluence["+G+"]",h,D))}o=n.length*E}else{const n=".bones["+I[a].name+"]";g(MQ,n+".position",s,"pos",C),g(gB,n+".quaternion",s,"rot",C),g(MQ,n+".scale",s,"scl",C)}}return C.length===0?null:new this(Q,o,C,i)}resetDuration(){const A=this.tracks;let I=0;for(let g=0,C=A.length;g!==C;++g){const Q=this.tracks[g];I=Math.max(I,Q.times[Q.times.length-1])}return this.duration=I,this}trim(){for(let A=0;A<this.tracks.length;A++)this.tracks[A].trim(0,this.duration);return this}validate(){let A=!0;for(let I=0;I<this.tracks.length;I++)A=A&&this.tracks[I].validate();return A}optimize(){for(let A=0;A<this.tracks.length;A++)this.tracks[A].optimize();return this}clone(){const A=[];for(let I=0;I<this.tracks.length;I++)A.push(this.tracks[I].clone());return new this.constructor(this.name,this.duration,A,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function wS(B){switch(B.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return lQ;case"vector":case"vector2":case"vector3":case"vector4":return MQ;case"color":return ds;case"quaternion":return gB;case"bool":case"boolean":return gQ;case"string":return CQ}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+B)}function GS(B){if(B.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const A=wS(B.type);if(B.times===void 0){const I=[],g=[];qs(B.keys,I,g,"value"),B.times=I,B.values=g}return A.parse!==void 0?A.parse(B):new A(B.name,B.times,B.values,B.interpolation)}const WB={enabled:!1,files:{},add:function(B,A){this.enabled!==!1&&(this.files[B]=A)},get:function(B){if(this.enabled!==!1)return this.files[B]},remove:function(B){delete this.files[B]},clear:function(){this.files={}}};class SS{constructor(A,I,g){const C=this;let Q=!1,E=0,i=0,o;const e=[];this.onStart=void 0,this.onLoad=A,this.onProgress=I,this.onError=g,this.itemStart=function(t){i++,Q===!1&&C.onStart!==void 0&&C.onStart(t,E,i),Q=!0},this.itemEnd=function(t){E++,C.onProgress!==void 0&&C.onProgress(t,E,i),E===i&&(Q=!1,C.onLoad!==void 0&&C.onLoad())},this.itemError=function(t){C.onError!==void 0&&C.onError(t)},this.resolveURL=function(t){return o?o(t):t},this.setURLModifier=function(t){return o=t,this},this.addHandler=function(t,a){return e.push(t,a),this},this.removeHandler=function(t){const a=e.indexOf(t);return a!==-1&&e.splice(a,2),this},this.getHandler=function(t){for(let a=0,s=e.length;a<s;a+=2){const n=e[a],r=e[a+1];if(n.global&&(n.lastIndex=0),n.test(t))return r}return null}}}const KE=new SS;class BQ{constructor(A){this.manager=A!==void 0?A:KE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(A,I){const g=this;return new Promise(function(C,Q){g.load(A,C,I,Q)})}parse(){}setCrossOrigin(A){return this.crossOrigin=A,this}setWithCredentials(A){return this.withCredentials=A,this}setPath(A){return this.path=A,this}setResourcePath(A){return this.resourcePath=A,this}setRequestHeader(A){return this.requestHeader=A,this}}const gC={};class kS extends Error{constructor(A,I){super(A),this.response=I}}class JE extends BQ{constructor(A){super(A)}load(A,I,g,C){A===void 0&&(A=""),this.path!==void 0&&(A=this.path+A),A=this.manager.resolveURL(A);const Q=WB.get(A);if(Q!==void 0)return this.manager.itemStart(A),setTimeout(()=>{I&&I(Q),this.manager.itemEnd(A)},0),Q;if(gC[A]!==void 0){gC[A].push({onLoad:I,onProgress:g,onError:C});return}gC[A]=[],gC[A].push({onLoad:I,onProgress:g,onError:C});const E=new Request(A,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),i=this.mimeType,o=this.responseType;fetch(E).then(e=>{if(e.status===200||e.status===0){if(e.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||e.body===void 0||e.body.getReader===void 0)return e;const t=gC[A],a=e.body.getReader(),s=e.headers.get("Content-Length")||e.headers.get("X-File-Size"),n=s?parseInt(s):0,r=n!==0;let G=0;const h=new ReadableStream({start(D){S();function S(){a.read().then(({done:w,value:k})=>{if(w)D.close();else{G+=k.byteLength;const M=new ProgressEvent("progress",{lengthComputable:r,loaded:G,total:n});for(let U=0,q=t.length;U<q;U++){const F=t[U];F.onProgress&&F.onProgress(M)}D.enqueue(k),S()}})}}});return new Response(h)}else throw new kS(`fetch for "${e.url}" responded with ${e.status}: ${e.statusText}`,e)}).then(e=>{switch(o){case"arraybuffer":return e.arrayBuffer();case"blob":return e.blob();case"document":return e.text().then(t=>new DOMParser().parseFromString(t,i));case"json":return e.json();default:if(i===void 0)return e.text();{const a=/charset="?([^;"\s]*)"?/i.exec(i),s=a&&a[1]?a[1].toLowerCase():void 0,n=new TextDecoder(s);return e.arrayBuffer().then(r=>n.decode(r))}}}).then(e=>{WB.add(A,e);const t=gC[A];delete gC[A];for(let a=0,s=t.length;a<s;a++){const n=t[a];n.onLoad&&n.onLoad(e)}}).catch(e=>{const t=gC[A];if(t===void 0)throw this.manager.itemError(A),e;delete gC[A];for(let a=0,s=t.length;a<s;a++){const n=t[a];n.onError&&n.onError(e)}this.manager.itemError(A)}).finally(()=>{this.manager.itemEnd(A)}),this.manager.itemStart(A)}setResponseType(A){return this.responseType=A,this}setMimeType(A){return this.mimeType=A,this}}class lS extends BQ{constructor(A){super(A)}load(A,I,g,C){this.path!==void 0&&(A=this.path+A),A=this.manager.resolveURL(A);const Q=this,E=WB.get(A);if(E!==void 0)return Q.manager.itemStart(A),setTimeout(function(){I&&I(E),Q.manager.itemEnd(A)},0),E;const i=kQ("img");function o(){t(),WB.add(A,this),I&&I(this),Q.manager.itemEnd(A)}function e(a){t(),C&&C(a),Q.manager.itemError(A),Q.manager.itemEnd(A)}function t(){i.removeEventListener("load",o,!1),i.removeEventListener("error",e,!1)}return i.addEventListener("load",o,!1),i.addEventListener("error",e,!1),A.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(i.crossOrigin=this.crossOrigin),Q.manager.itemStart(A),i.src=A,i}}class Qo extends BQ{constructor(A){super(A)}load(A,I,g,C){const Q=new YI,E=new lS(this.manager);return E.setCrossOrigin(this.crossOrigin),E.setPath(this.path),E.load(A,function(i){Q.image=i,Q.needsUpdate=!0,I!==void 0&&I(Q)},g,C),Q}}class Lo extends iI{constructor(A,I=1){super(),this.isLight=!0,this.type="Light",this.color=new LA(A),this.intensity=I}dispose(){}copy(A,I){return super.copy(A,I),this.color.copy(A.color),this.intensity=A.intensity,this}toJSON(A){const I=super.toJSON(A);return I.object.color=this.color.getHex(),I.object.intensity=this.intensity,this.groundColor!==void 0&&(I.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(I.object.distance=this.distance),this.angle!==void 0&&(I.object.angle=this.angle),this.decay!==void 0&&(I.object.decay=this.decay),this.penumbra!==void 0&&(I.object.penumbra=this.penumbra),this.shadow!==void 0&&(I.object.shadow=this.shadow.toJSON()),I}}const Hi=new TA,$t=new f,Aa=new f;class uo{constructor(A){this.camera=A,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dA(512,512),this.map=null,this.mapPass=null,this.matrix=new TA,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new TE,this._frameExtents=new dA(1,1),this._viewportCount=1,this._viewports=[new DI(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(A){const I=this.camera,g=this.matrix;$t.setFromMatrixPosition(A.matrixWorld),I.position.copy($t),Aa.setFromMatrixPosition(A.target.matrixWorld),I.lookAt(Aa),I.updateMatrixWorld(),Hi.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hi),g.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),g.multiply(Hi)}getViewport(A){return this._viewports[A]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(A){return this.camera=A.camera.clone(),this.bias=A.bias,this.radius=A.radius,this.mapSize.copy(A.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const A={};return this.bias!==0&&(A.bias=this.bias),this.normalBias!==0&&(A.normalBias=this.normalBias),this.radius!==1&&(A.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(A.mapSize=this.mapSize.toArray()),A.camera=this.camera.toJSON(!1).object,delete A.camera.matrix,A}}class MS extends uo{constructor(){super(new _I(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(A){const I=this.camera,g=PB*2*A.angle*this.focus,C=this.mapSize.width/this.mapSize.height,Q=A.distance||I.far;(g!==I.fov||C!==I.aspect||Q!==I.far)&&(I.fov=g,I.aspect=C,I.far=Q,I.updateProjectionMatrix()),super.updateMatrices(A)}copy(A){return super.copy(A),this.focus=A.focus,this}}class yS extends Lo{constructor(A,I,g=0,C=Math.PI/3,Q=0,E=2){super(A,I),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(iI.DEFAULT_UP),this.updateMatrix(),this.target=new iI,this.distance=g,this.angle=C,this.penumbra=Q,this.decay=E,this.map=null,this.shadow=new MS}get power(){return this.intensity*Math.PI}set power(A){this.intensity=A/Math.PI}dispose(){this.shadow.dispose()}copy(A,I){return super.copy(A,I),this.distance=A.distance,this.angle=A.angle,this.penumbra=A.penumbra,this.decay=A.decay,this.target=A.target.clone(),this.shadow=A.shadow.clone(),this}}const Ia=new TA,DQ=new f,mi=new f;class US extends uo{constructor(){super(new _I(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new dA(4,2),this._viewportCount=6,this._viewports=[new DI(2,1,1,1),new DI(0,1,1,1),new DI(3,1,1,1),new DI(1,1,1,1),new DI(3,0,1,1),new DI(1,0,1,1)],this._cubeDirections=[new f(1,0,0),new f(-1,0,0),new f(0,0,1),new f(0,0,-1),new f(0,1,0),new f(0,-1,0)],this._cubeUps=[new f(0,1,0),new f(0,1,0),new f(0,1,0),new f(0,1,0),new f(0,0,1),new f(0,0,-1)]}updateMatrices(A,I=0){const g=this.camera,C=this.matrix,Q=A.distance||g.far;Q!==g.far&&(g.far=Q,g.updateProjectionMatrix()),DQ.setFromMatrixPosition(A.matrixWorld),g.position.copy(DQ),mi.copy(g.position),mi.add(this._cubeDirections[I]),g.up.copy(this._cubeUps[I]),g.lookAt(mi),g.updateMatrixWorld(),C.makeTranslation(-DQ.x,-DQ.y,-DQ.z),Ia.multiplyMatrices(g.projectionMatrix,g.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ia)}}class NS extends Lo{constructor(A,I,g=0,C=2){super(A,I),this.isPointLight=!0,this.type="PointLight",this.distance=g,this.decay=C,this.shadow=new US}get power(){return this.intensity*4*Math.PI}set power(A){this.intensity=A/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(A,I){return super.copy(A,I),this.distance=A.distance,this.decay=A.decay,this.shadow=A.shadow.clone(),this}}class KS extends uo{constructor(){super(new xE(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ps extends Lo{constructor(A,I){super(A,I),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(iI.DEFAULT_UP),this.updateMatrix(),this.target=new iI,this.shadow=new KS}dispose(){this.shadow.dispose()}copy(A){return super.copy(A),this.target=A.target.clone(),this.shadow=A.shadow.clone(),this}}class Eo{static decodeText(A){if(typeof TextDecoder<"u")return new TextDecoder().decode(A);let I="";for(let g=0,C=A.length;g<C;g++)I+=String.fromCharCode(A[g]);try{return decodeURIComponent(escape(I))}catch{return I}}static extractUrlBase(A){const I=A.lastIndexOf("/");return I===-1?"./":A.slice(0,I+1)}static resolveURL(A,I){return typeof A!="string"||A===""?"":(/^https?:\/\//i.test(I)&&/^\//.test(A)&&(I=I.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(A)||/^data:.*,.*$/i.test(A)||/^blob:.*$/i.test(A)?A:I+A)}}class JS extends BQ{constructor(A){super(A),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(A){return this.options=A,this}load(A,I,g,C){A===void 0&&(A=""),this.path!==void 0&&(A=this.path+A),A=this.manager.resolveURL(A);const Q=this,E=WB.get(A);if(E!==void 0)return Q.manager.itemStart(A),setTimeout(function(){I&&I(E),Q.manager.itemEnd(A)},0),E;const i={};i.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",i.headers=this.requestHeader,fetch(A,i).then(function(o){return o.blob()}).then(function(o){return createImageBitmap(o,Object.assign(Q.options,{colorSpaceConversion:"none"}))}).then(function(o){WB.add(A,o),I&&I(o),Q.manager.itemEnd(A)}).catch(function(o){C&&C(o),Q.manager.itemError(A),Q.manager.itemEnd(A)}),Q.manager.itemStart(A)}}class fs{constructor(A=!0){this.autoStart=A,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ga(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let A=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const I=ga();A=(I-this.oldTime)/1e3,this.oldTime=I,this.elapsedTime+=A}return A}}function ga(){return(typeof performance>"u"?Date:performance).now()}const Ho="\\[\\]\\.:\\/",FS=new RegExp("["+Ho+"]","g"),mo="[^"+Ho+"]",RS="[^"+Ho.replace("\\.","")+"]",qS=/((?:WC+[\/:])*)/.source.replace("WC",mo),dS=/(WCOD+)?/.source.replace("WCOD",RS),pS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",mo),fS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",mo),YS=new RegExp("^"+qS+dS+pS+fS+"$"),LS=["material","materials","bones","map"];class uS{constructor(A,I,g){const C=g||eI.parseTrackName(I);this._targetGroup=A,this._bindings=A.subscribe_(I,C)}getValue(A,I){this.bind();const g=this._targetGroup.nCachedObjects_,C=this._bindings[g];C!==void 0&&C.getValue(A,I)}setValue(A,I){const g=this._bindings;for(let C=this._targetGroup.nCachedObjects_,Q=g.length;C!==Q;++C)g[C].setValue(A,I)}bind(){const A=this._bindings;for(let I=this._targetGroup.nCachedObjects_,g=A.length;I!==g;++I)A[I].bind()}unbind(){const A=this._bindings;for(let I=this._targetGroup.nCachedObjects_,g=A.length;I!==g;++I)A[I].unbind()}}class eI{constructor(A,I,g){this.path=I,this.parsedPath=g||eI.parseTrackName(I),this.node=eI.findNode(A,this.parsedPath.nodeName),this.rootNode=A,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(A,I,g){return A&&A.isAnimationObjectGroup?new eI.Composite(A,I,g):new eI(A,I,g)}static sanitizeNodeName(A){return A.replace(/\s/g,"_").replace(FS,"")}static parseTrackName(A){const I=YS.exec(A);if(I===null)throw new Error("PropertyBinding: Cannot parse trackName: "+A);const g={nodeName:I[2],objectName:I[3],objectIndex:I[4],propertyName:I[5],propertyIndex:I[6]},C=g.nodeName&&g.nodeName.lastIndexOf(".");if(C!==void 0&&C!==-1){const Q=g.nodeName.substring(C+1);LS.indexOf(Q)!==-1&&(g.nodeName=g.nodeName.substring(0,C),g.objectName=Q)}if(g.propertyName===null||g.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+A);return g}static findNode(A,I){if(I===void 0||I===""||I==="."||I===-1||I===A.name||I===A.uuid)return A;if(A.skeleton){const g=A.skeleton.getBoneByName(I);if(g!==void 0)return g}if(A.children){const g=function(Q){for(let E=0;E<Q.length;E++){const i=Q[E];if(i.name===I||i.uuid===I)return i;const o=g(i.children);if(o)return o}return null},C=g(A.children);if(C)return C}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(A,I){A[I]=this.targetObject[this.propertyName]}_getValue_array(A,I){const g=this.resolvedProperty;for(let C=0,Q=g.length;C!==Q;++C)A[I++]=g[C]}_getValue_arrayElement(A,I){A[I]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(A,I){this.resolvedProperty.toArray(A,I)}_setValue_direct(A,I){this.targetObject[this.propertyName]=A[I]}_setValue_direct_setNeedsUpdate(A,I){this.targetObject[this.propertyName]=A[I],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(A,I){this.targetObject[this.propertyName]=A[I],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(A,I){const g=this.resolvedProperty;for(let C=0,Q=g.length;C!==Q;++C)g[C]=A[I++]}_setValue_array_setNeedsUpdate(A,I){const g=this.resolvedProperty;for(let C=0,Q=g.length;C!==Q;++C)g[C]=A[I++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(A,I){const g=this.resolvedProperty;for(let C=0,Q=g.length;C!==Q;++C)g[C]=A[I++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(A,I){this.resolvedProperty[this.propertyIndex]=A[I]}_setValue_arrayElement_setNeedsUpdate(A,I){this.resolvedProperty[this.propertyIndex]=A[I],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(A,I){this.resolvedProperty[this.propertyIndex]=A[I],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(A,I){this.resolvedProperty.fromArray(A,I)}_setValue_fromArray_setNeedsUpdate(A,I){this.resolvedProperty.fromArray(A,I),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(A,I){this.resolvedProperty.fromArray(A,I),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(A,I){this.bind(),this.getValue(A,I)}_setValue_unbound(A,I){this.bind(),this.setValue(A,I)}bind(){let A=this.node;const I=this.parsedPath,g=I.objectName,C=I.propertyName;let Q=I.propertyIndex;if(A||(A=eI.findNode(this.rootNode,I.nodeName),this.node=A),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!A){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(g){let e=I.objectIndex;switch(g){case"materials":if(!A.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!A.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}A=A.material.materials;break;case"bones":if(!A.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}A=A.skeleton.bones;for(let t=0;t<A.length;t++)if(A[t].name===e){e=t;break}break;case"map":if("map"in A){A=A.map;break}if(!A.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!A.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}A=A.material.map;break;default:if(A[g]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}A=A[g]}if(e!==void 0){if(A[e]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,A);return}A=A[e]}}const E=A[C];if(E===void 0){const e=I.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+e+"."+C+" but it wasn't found.",A);return}let i=this.Versioning.None;this.targetObject=A,A.needsUpdate!==void 0?i=this.Versioning.NeedsUpdate:A.matrixWorldNeedsUpdate!==void 0&&(i=this.Versioning.MatrixWorldNeedsUpdate);let o=this.BindingType.Direct;if(Q!==void 0){if(C==="morphTargetInfluences"){if(!A.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!A.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}A.morphTargetDictionary[Q]!==void 0&&(Q=A.morphTargetDictionary[Q])}o=this.BindingType.ArrayElement,this.resolvedProperty=E,this.propertyIndex=Q}else E.fromArray!==void 0&&E.toArray!==void 0?(o=this.BindingType.HasFromToArray,this.resolvedProperty=E):Array.isArray(E)?(o=this.BindingType.EntireArray,this.resolvedProperty=E):this.propertyName=C;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][i]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}eI.Composite=uS;eI.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};eI.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};eI.prototype.GetterByBindingType=[eI.prototype._getValue_direct,eI.prototype._getValue_array,eI.prototype._getValue_arrayElement,eI.prototype._getValue_toArray];eI.prototype.SetterByBindingTypeAndVersioning=[[eI.prototype._setValue_direct,eI.prototype._setValue_direct_setNeedsUpdate,eI.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[eI.prototype._setValue_array,eI.prototype._setValue_array_setNeedsUpdate,eI.prototype._setValue_array_setMatrixWorldNeedsUpdate],[eI.prototype._setValue_arrayElement,eI.prototype._setValue_arrayElement_setNeedsUpdate,eI.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[eI.prototype._setValue_fromArray,eI.prototype._setValue_fromArray_setNeedsUpdate,eI.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class HS{constructor(A,I,g=0,C=1/0){this.ray=new YQ(A,I),this.near=g,this.far=C,this.camera=null,this.layers=new Jo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(A,I){this.ray.set(A,I)}setFromCamera(A,I){I.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(I.matrixWorld),this.ray.direction.set(A.x,A.y,.5).unproject(I).sub(this.ray.origin).normalize(),this.camera=I):I.isOrthographicCamera?(this.ray.origin.set(A.x,A.y,(I.near+I.far)/(I.near-I.far)).unproject(I),this.ray.direction.set(0,0,-1).transformDirection(I.matrixWorld),this.camera=I):console.error("THREE.Raycaster: Unsupported camera type: "+I.type)}intersectObject(A,I=!0,g=[]){return io(A,this,g,I),g.sort(Ca),g}intersectObjects(A,I=!0,g=[]){for(let C=0,Q=A.length;C<Q;C++)io(A[C],this,g,I);return g.sort(Ca),g}}function Ca(B,A){return B.distance-A.distance}function io(B,A,I,g){if(B.layers.test(A.layers)&&B.raycast(A,I),g===!0){const C=B.children;for(let Q=0,E=C.length;Q<E;Q++)io(C[Q],A,I,!0)}}class Ba{constructor(A=1,I=0,g=0){return this.radius=A,this.phi=I,this.theta=g,this}set(A,I,g){return this.radius=A,this.phi=I,this.theta=g,this}copy(A){return this.radius=A.radius,this.phi=A.phi,this.theta=A.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(A){return this.setFromCartesianCoords(A.x,A.y,A.z)}setFromCartesianCoords(A,I,g){return this.radius=Math.sqrt(A*A+I*I+g*g),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(A,g),this.phi=Math.acos(vI(I/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yo);const mS={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


`);this.workerSourceURL=URL.createObjectURL(new Blob([E]))}),this.decoderPending}_getWorker(A,I){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const C=new Worker(this.workerSourceURL);C._callbacks={},C._taskCosts={},C._taskLoad=0,C.postMessage({type:"init",decoderConfig:this.decoderConfig}),C.onmessage=function(Q){const E=Q.data;switch(E.type){case"decode":C._callbacks[E.id].resolve(E);break;case"error":C._callbacks[E.id].reject(E);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+E.type+'"')}},this.workerPool.push(C)}else this.workerPool.sort(function(C,Q){return C._taskLoad>Q._taskLoad?-1:1});const g=this.workerPool[this.workerPool.length-1];return g._taskCosts[A]=I,g._taskLoad+=I,g})}_releaseTask(A,I){A._taskLoad-=A._taskCosts[I],delete A._callbacks[I],delete A._taskCosts[I]}debug(){console.log("Task load: ",this.workerPool.map(A=>A._taskLoad))}dispose(){for(let A=0;A<this.workerPool.length;++A)this.workerPool[A].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function zl(){let B,A;onmessage=function(E){const i=E.data;switch(i.type){case"init":B=i.decoderConfig,A=new Promise(function(t){B.onModuleLoaded=function(a){t({draco:a})},DracoDecoderModule(B)});break;case"decode":const o=i.buffer,e=i.taskConfig;A.then(t=>{const a=t.draco,s=new a.Decoder;try{const n=I(a,s,new Int8Array(o),e),r=n.attributes.map(G=>G.array.buffer);n.index&&r.push(n.index.array.buffer),self.postMessage({type:"decode",id:i.id,geometry:n},r)}catch(n){console.error(n),self.postMessage({type:"error",id:i.id,error:n.message})}finally{a.destroy(s)}});break}};function I(E,i,o,e){const t=e.attributeIDs,a=e.attributeTypes;let s,n;const r=i.GetEncodedGeometryType(o);if(r===E.TRIANGULAR_MESH)s=new E.Mesh,n=i.DecodeArrayToMesh(o,o.byteLength,s);else if(r===E.POINT_CLOUD)s=new E.PointCloud,n=i.DecodeArrayToPointCloud(o,o.byteLength,s);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!n.ok()||s.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+n.error_msg());const G={index:null,attributes:[]};for(const h in t){const D=self[a[h]];let S,w;if(e.useUniqueIDs)w=t[h],S=i.GetAttributeByUniqueId(s,w);else{if(w=i.GetAttributeId(s,E[t[h]]),w===-1)continue;S=i.GetAttribute(s,w)}const k=C(E,i,s,h,D,S);h==="color"&&(k.vertexColorSpace=e.vertexColorSpace),G.attributes.push(k)}return r===E.TRIANGULAR_MESH&&(G.index=g(E,i,s)),E.destroy(s),G}function g(E,i,o){const t=o.num_faces()*3,a=t*4,s=E._malloc(a);i.GetTrianglesUInt32Array(o,a,s);const n=new Uint32Array(E.HEAPF32.buffer,s,t).slice();return E._free(s),{array:n,itemSize:1}}function C(E,i,o,e,t,a){const s=a.num_components(),r=o.num_points()*s,G=r*t.BYTES_PER_ELEMENT,h=Q(E,t),D=E._malloc(G);i.GetAttributeDataArrayForAllPoints(o,a,h,G,D);const S=new t(E.HEAPF32.buffer,D,r).slice();return E._free(D),{name:e,array:S,itemSize:s}}function Q(E,i){switch(i){case Float32Array:return E.DT_FLOAT32;case Int8Array:return E.DT_INT8;case Int16Array:return E.DT_INT16;case Int32Array:return E.DT_INT32;case Uint8Array:return E.DT_UINT8;case Uint16Array:return E.DT_UINT16;case Uint32Array:return E.DT_UINT32}}}function da(B,A){if(A===Nn)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),B;if(A===$i||A===is){let I=B.getIndex();if(I===null){const E=[],i=B.getAttribute("position");if(i!==void 0){for(let o=0;o<i.count;o++)E.push(o);B.setIndex(E),I=B.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),B}const g=I.count-2,C=[];if(A===$i)for(let E=1;E<=g;E++)C.push(I.getX(0)),C.push(I.getX(E)),C.push(I.getX(E+1));else for(let E=0;E<g;E++)E%2===0?(C.push(I.getX(E)),C.push(I.getX(E+1)),C.push(I.getX(E+2))):(C.push(I.getX(E+2)),C.push(I.getX(E+1)),C.push(I.getX(E)));C.length/3!==g&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const Q=B.clone();return Q.setIndex(C),Q.clearGroups(),Q}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",A),B}class pa extends BQ{constructor(A){super(A),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(I){return new CM(I)}),this.register(function(I){return new aM(I)}),this.register(function(I){return new sM(I)}),this.register(function(I){return new DM(I)}),this.register(function(I){return new QM(I)}),this.register(function(I){return new EM(I)}),this.register(function(I){return new iM(I)}),this.register(function(I){return new oM(I)}),this.register(function(I){return new gM(I)}),this.register(function(I){return new eM(I)}),this.register(function(I){return new BM(I)}),this.register(function(I){return new tM(I)}),this.register(function(I){return new AM(I)}),this.register(function(I){return new nM(I)}),this.register(function(I){return new hM(I)})}load(A,I,g,C){const Q=this;let E;this.resourcePath!==""?E=this.resourcePath:this.path!==""?E=this.path:E=Eo.extractUrlBase(A),this.manager.itemStart(A);const i=function(e){C?C(e):console.error(e),Q.manager.itemError(A),Q.manager.itemEnd(A)},o=new JE(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(A,function(e){try{Q.parse(e,E,function(t){I(t),Q.manager.itemEnd(A)},i)}catch(t){i(t)}},g,i)}setDRACOLoader(A){return this.dracoLoader=A,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(A){return this.ktx2Loader=A,this}setMeshoptDecoder(A){return this.meshoptDecoder=A,this}register(A){return this.pluginCallbacks.indexOf(A)===-1&&this.pluginCallbacks.push(A),this}unregister(A){return this.pluginCallbacks.indexOf(A)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(A),1),this}parse(A,I,g,C){let Q;const E={},i={},o=new TextDecoder;if(typeof A=="string")Q=JSON.parse(A);else if(A instanceof ArrayBuffer)if(o.decode(new Uint8Array(A,0,4))===KD){try{E[II.KHR_BINARY_GLTF]=new rM(A)}catch(a){C&&C(a);return}Q=JSON.parse(E[II.KHR_BINARY_GLTF].content)}else Q=JSON.parse(o.decode(A));else Q=A;if(Q.asset===void 0||Q.asset.version[0]<2){C&&C(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const e=new FM(Q,{path:I||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});e.fileLoader.setRequestHeader(this.requestHeader);for(let t=0;t<this.pluginCallbacks.length;t++){const a=this.pluginCallbacks[t](e);i[a.name]=a,E[a.name]=!0}if(Q.extensionsUsed)for(let t=0;t<Q.extensionsUsed.length;++t){const a=Q.extensionsUsed[t],s=Q.extensionsRequired||[];switch(a){case II.KHR_MATERIALS_UNLIT:E[a]=new IM;break;case II.KHR_DRACO_MESH_COMPRESSION:E[a]=new cM(Q,this.dracoLoader);break;case II.KHR_TEXTURE_TRANSFORM:E[a]=new wM;break;case II.KHR_MESH_QUANTIZATION:E[a]=new GM;break;default:s.indexOf(a)>=0&&i[a]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+a+'".')}}e.setExtensions(E),e.setPlugins(i),e.parse(g,C)}parseAsync(A,I){const g=this;return new Promise(function(C,Q){g.parse(A,I,C,Q)})}}function $l(){let B={};return{get:function(A){return B[A]},add:function(A,I){B[A]=I},remove:function(A){delete B[A]},removeAll:function(){B={}}}}const II={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class AM{constructor(A){this.parser=A,this.name=II.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const A=this.parser,I=this.parser.json.nodes||[];for(let g=0,C=I.length;g<C;g++){const Q=I[g];Q.extensions&&Q.extensions[this.name]&&Q.extensions[this.name].light!==void 0&&A._addNodeRef(this.cache,Q.extensions[this.name].light)}}_loadLight(A){const I=this.parser,g="light:"+A;let C=I.cache.get(g);if(C)return C;const Q=I.json,o=((Q.extensions&&Q.extensions[this.name]||{}).lights||[])[A];let e;const t=new LA(16777215);o.color!==void 0&&t.fromArray(o.color);const a=o.range!==void 0?o.range:0;switch(o.type){case"directional":e=new ps(t),e.target.position.set(0,0,-1),e.add(e.target);break;case"point":e=new NS(t),e.distance=a;break;case"spot":e=new yS(t),e.distance=a,o.spot=o.spot||{},o.spot.innerConeAngle=o.spot.innerConeAngle!==void 0?o.spot.innerConeAngle:0,o.spot.outerConeAngle=o.spot.outerConeAngle!==void 0?o.spot.outerConeAngle:Math.PI/4,e.angle=o.spot.outerConeAngle,e.penumbra=1-o.spot.innerConeAngle/o.spot.outerConeAngle,e.target.position.set(0,0,-1),e.add(e.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+o.type)}return e.position.set(0,0,0),e.decay=2,SC(e,o),o.intensity!==void 0&&(e.intensity=o.intensity),e.name=I.createUniqueName(o.name||"light_"+A),C=Promise.resolve(e),I.cache.add(g,C),C}getDependency(A,I){if(A==="light")return this._loadLight(I)}createNodeAttachment(A){const I=this,g=this.parser,Q=g.json.nodes[A],i=(Q.extensions&&Q.extensions[this.name]||{}).light;return i===void 0?null:this._loadLight(i).then(function(o){return g._getNodeRef(I.cache,i,o)})}}class IM{constructor(){this.name=II.KHR_MATERIALS_UNLIT}getMaterialType(){return PC}extendParams(A,I,g){const C=[];A.color=new LA(1,1,1),A.opacity=1;const Q=I.pbrMetallicRoughness;if(Q){if(Array.isArray(Q.baseColorFactor)){const E=Q.baseColorFactor;A.color.fromArray(E),A.opacity=E[3]}Q.baseColorTexture!==void 0&&C.push(g.assignTexture(A,"map",Q.baseColorTexture,qA))}return Promise.all(C)}}class gM{constructor(A){this.parser=A,this.name=II.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(A,I){const C=this.parser.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const Q=C.extensions[this.name].emissiveStrength;return Q!==void 0&&(I.emissiveIntensity=Q),Promise.resolve()}}class CM{constructor(A){this.parser=A,this.name=II.KHR_MATERIALS_CLEARCOAT}getMaterialType(A){const g=this.parser.json.materials[A];return!g.extensions||!g.extensions[this.name]?null:dC}extendMaterialParams(A,I){const g=this.parser,C=g.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const Q=[],E=C.extensions[this.name];if(E.clearcoatFactor!==void 0&&(I.clearcoat=E.clearcoatFactor),E.clearcoatTexture!==void 0&&Q.push(g.assignTexture(I,"clearcoatMap",E.clearcoatTexture)),E.clearcoatRoughnessFactor!==void 0&&(I.clearcoatRoughness=E.clearcoatRoughnessFactor),E.clearcoatRoughnessTexture!==void 0&&Q.push(g.assignTexture(I,"clearcoatRoughnessMap",E.clearcoatRoughnessTexture)),E.clearcoatNormalTexture!==void 0&&(Q.push(g.assignTexture(I,"clearcoatNormalMap",E.clearcoatNormalTexture)),E.clearcoatNormalTexture.scale!==void 0)){const i=E.clearcoatNormalTexture.scale;I.clearcoatNormalScale=new dA(i,i)}return Promise.all(Q)}}class BM{constructor(A){this.parser=A,this.name=II.KHR_MATERIALS_IRIDESCENCE}getMaterialType(A){const g=this.parser.json.materials[A];return!g.extensions||!g.extensions[this.name]?null:dC}extendMaterialParams(A,I){const g=this.parser,C=g.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const Q=[],E=C.extensions[this.name];return E.iridescenceFactor!==void 0&&(I.iridescence=E.iridescenceFactor),E.iridescenceTexture!==void 0&&Q.push(g.assignTexture(I,"iridescenceMap",E.iridescenceTexture)),E.iridescenceIor!==void 0&&(I.iridescenceIOR=E.iridescenceIor),I.iridescenceThicknessRange===void 0&&(I.iridescenceThicknessRange=[100,400]),E.iridescenceThicknessMinimum!==void 0&&(I.iridescenceThicknessRange[0]=E.iridescenceThicknessMinimum),E.iridescenceThicknessMaximum!==void 0&&(I.iridescenceThicknessRange[1]=E.iridescenceThicknessMaximum),E.iridescenceThicknessTexture!==void 0&&Q.push(g.assignTexture(I,"iridescenceThicknessMap",E.iridescenceThicknessTexture)),Promise.all(Q)}}class QM{constructor(A){this.parser=A,this.name=II.KHR_MATERIALS_SHEEN}getMaterialType(A){const g=this.parser.json.materials[A];return!g.extensions||!g.extensions[this.name]?null:dC}extendMaterialParams(A,I){const g=this.parser,C=g.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const Q=[];I.sheenColor=new LA(0,0,0),I.sheenRoughness=0,I.sheen=1;const E=C.extensions[this.name];return E.sheenColorFactor!==void 0&&I.sheenColor.fromArray(E.sheenColorFactor),E.sheenRoughnessFactor!==void 0&&(I.sheenRoughness=E.sheenRoughnessFactor),E.sheenColorTexture!==void 0&&Q.push(g.assignTexture(I,"sheenColorMap",E.sheenColorTexture,qA)),E.sheenRoughnessTexture!==void 0&&Q.push(g.assignTexture(I,"sheenRoughnessMap",E.sheenRoughnessTexture)),Promise.all(Q)}}class EM{constructor(A){this.parser=A,this.name=II.KHR_MATERIALS_TRANSMISSION}getMaterialType(A){const g=this.parser.json.materials[A];return!g.extensions||!g.extensions[this.name]?null:dC}extendMaterialParams(A,I){const g=this.parser,C=g.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const Q=[],E=C.extensions[this.name];return E.transmissionFactor!==void 0&&(I.transmission=E.transmissionFactor),E.transmissionTexture!==void 0&&Q.push(g.assignTexture(I,"transmissionMap",E.transmissionTexture)),Promise.all(Q)}}class iM{constructor(A){this.parser=A,this.name=II.KHR_MATERIALS_VOLUME}getMaterialType(A){const g=this.parser.json.materials[A];return!g.extensions||!g.extensions[this.name]?null:dC}extendMaterialParams(A,I){const g=this.parser,C=g.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const Q=[],E=C.extensions[this.name];I.thickness=E.thicknessFactor!==void 0?E.thicknessFactor:0,E.thicknessTexture!==void 0&&Q.push(g.assignTexture(I,"thicknessMap",E.thicknessTexture)),I.attenuationDistance=E.attenuationDistance||1/0;const i=E.attenuationColor||[1,1,1];return I.attenuationColor=new LA(i[0],i[1],i[2]),Promise.all(Q)}}class oM{constructor(A){this.parser=A,this.name=II.KHR_MATERIALS_IOR}getMaterialType(A){const g=this.parser.json.materials[A];return!g.extensions||!g.extensions[this.name]?null:dC}extendMaterialParams(A,I){const C=this.parser.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const Q=C.extensions[this.name];return I.ior=Q.ior!==void 0?Q.ior:1.5,Promise.resolve()}}class eM{constructor(A){this.parser=A,this.name=II.KHR_MATERIALS_SPECULAR}getMaterialType(A){const g=this.parser.json.materials[A];return!g.extensions||!g.extensions[this.name]?null:dC}extendMaterialParams(A,I){const g=this.parser,C=g.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const Q=[],E=C.extensions[this.name];I.specularIntensity=E.specularFactor!==void 0?E.specularFactor:1,E.specularTexture!==void 0&&Q.push(g.assignTexture(I,"specularIntensityMap",E.specularTexture));const i=E.specularColorFactor||[1,1,1];return I.specularColor=new LA(i[0],i[1],i[2]),E.specularColorTexture!==void 0&&Q.push(g.assignTexture(I,"specularColorMap",E.specularColorTexture,qA)),Promise.all(Q)}}class tM{constructor(A){this.parser=A,this.name=II.KHR_MATERIALS_ANISOTROPY}getMaterialType(A){const g=this.parser.json.materials[A];return!g.extensions||!g.extensions[this.name]?null:dC}extendMaterialParams(A,I){const g=this.parser,C=g.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const Q=[],E=C.extensions[this.name];return E.anisotropyStrength!==void 0&&(I.anisotropy=E.anisotropyStrength),E.anisotropyRotation!==void 0&&(I.anisotropyRotation=E.anisotropyRotation),E.anisotropyTexture!==void 0&&Q.push(g.assignTexture(I,"anisotropyMap",E.anisotropyTexture)),Promise.all(Q)}}class aM{constructor(A){this.parser=A,this.name=II.KHR_TEXTURE_BASISU}loadTexture(A){const I=this.parser,g=I.json,C=g.textures[A];if(!C.extensions||!C.extensions[this.name])return null;const Q=C.extensions[this.name],E=I.options.ktx2Loader;if(!E){if(g.extensionsRequired&&g.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return I.loadTextureImage(A,Q.source,E)}}class sM{constructor(A){this.parser=A,this.name=II.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(A){const I=this.name,g=this.parser,C=g.json,Q=C.textures[A];if(!Q.extensions||!Q.extensions[I])return null;const E=Q.extensions[I],i=C.images[E.source];let o=g.textureLoader;if(i.uri){const e=g.options.manager.getHandler(i.uri);e!==null&&(o=e)}return this.detectSupport().then(function(e){if(e)return g.loadTextureImage(A,E.source,o);if(C.extensionsRequired&&C.extensionsRequired.indexOf(I)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return g.loadTexture(A)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(A){const I=new Image;I.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",I.onload=I.onerror=function(){A(I.height===1)}})),this.isSupported}}class DM{constructor(A){this.parser=A,this.name=II.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(A){const I=this.name,g=this.parser,C=g.json,Q=C.textures[A];if(!Q.extensions||!Q.extensions[I])return null;const E=Q.extensions[I],i=C.images[E.source];let o=g.textureLoader;if(i.uri){const e=g.options.manager.getHandler(i.uri);e!==null&&(o=e)}return this.detectSupport().then(function(e){if(e)return g.loadTextureImage(A,E.source,o);if(C.extensionsRequired&&C.extensionsRequired.indexOf(I)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return g.loadTexture(A)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(A){const I=new Image;I.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",I.onload=I.onerror=function(){A(I.height===1)}})),this.isSupported}}class nM{constructor(A){this.name=II.EXT_MESHOPT_COMPRESSION,this.parser=A}loadBufferView(A){const I=this.parser.json,g=I.bufferViews[A];if(g.extensions&&g.extensions[this.name]){const C=g.extensions[this.name],Q=this.parser.getDependency("buffer",C.buffer),E=this.parser.options.meshoptDecoder;if(!E||!E.supported){if(I.extensionsRequired&&I.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return Q.then(function(i){const o=C.byteOffset||0,e=C.byteLength||0,t=C.count,a=C.byteStride,s=new Uint8Array(i,o,e);return E.decodeGltfBufferAsync?E.decodeGltfBufferAsync(t,a,s,C.mode,C.filter).then(function(n){return n.buffer}):E.ready.then(function(){const n=new ArrayBuffer(t*a);return E.decodeGltfBuffer(new Uint8Array(n),t,a,s,C.mode,C.filter),n})})}else return null}}class hM{constructor(A){this.name=II.EXT_MESH_GPU_INSTANCING,this.parser=A}createNodeMesh(A){const I=this.parser.json,g=I.nodes[A];if(!g.extensions||!g.extensions[this.name]||g.mesh===void 0)return null;const C=I.meshes[g.mesh];for(const e of C.primitives)if(e.mode!==Sg.TRIANGLES&&e.mode!==Sg.TRIANGLE_STRIP&&e.mode!==Sg.TRIANGLE_FAN&&e.mode!==void 0)return null;const E=g.extensions[this.name].attributes,i=[],o={};for(const e in E)i.push(this.parser.getDependency("accessor",E[e]).then(t=>(o[e]=t,o[e])));return i.length<1?null:(i.push(this.parser.createNodeMesh(A)),Promise.all(i).then(e=>{const t=e.pop(),a=t.isGroup?t.children:[t],s=e[0].count,n=[];for(const r of a){const G=new TA,h=new f,D=new Qg,S=new f(1,1,1),w=new oS(r.geometry,r.material,s);for(let k=0;k<s;k++)o.TRANSLATION&&h.fromBufferAttribute(o.TRANSLATION,k),o.ROTATION&&D.fromBufferAttribute(o.ROTATION,k),o.SCALE&&S.fromBufferAttribute(o.SCALE,k),w.setMatrixAt(k,G.compose(h,D,S));for(const k in o)k!=="TRANSLATION"&&k!=="ROTATION"&&k!=="SCALE"&&r.geometry.setAttribute(k,o[k]);iI.prototype.copy.call(w,r),this.parser.assignFinalMaterial(w),n.push(w)}return t.isGroup?(t.clear(),t.add(...n),t):n[0]}))}}const KD="glTF",nQ=12,fa={JSON:1313821514,BIN:5130562};class rM{constructor(A){this.name=II.KHR_BINARY_GLTF,this.content=null,this.body=null;const I=new DataView(A,0,nQ),g=new TextDecoder;if(this.header={magic:g.decode(new Uint8Array(A.slice(0,4))),version:I.getUint32(4,!0),length:I.getUint32(8,!0)},this.header.magic!==KD)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const C=this.header.length-nQ,Q=new DataView(A,nQ);let E=0;for(;E<C;){const i=Q.getUint32(E,!0);E+=4;const o=Q.getUint32(E,!0);if(E+=4,o===fa.JSON){const e=new Uint8Array(A,nQ+E,i);this.content=g.decode(e)}else if(o===fa.BIN){const e=nQ+E;this.body=A.slice(e,e+i)}E+=i}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class cM{constructor(A,I){if(!I)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=II.KHR_DRACO_MESH_COMPRESSION,this.json=A,this.dracoLoader=I,this.dracoLoader.preload()}decodePrimitive(A,I){const g=this.json,C=this.dracoLoader,Q=A.extensions[this.name].bufferView,E=A.extensions[this.name].attributes,i={},o={},e={};for(const t in E){const a=ko[t]||t.toLowerCase();i[a]=E[t]}for(const t in A.attributes){const a=ko[t]||t.toLowerCase();if(E[t]!==void 0){const s=g.accessors[A.attributes[t]],n=pB[s.componentType];e[a]=n.name,o[a]=s.normalized===!0}}return I.getDependency("bufferView",Q).then(function(t){return new Promise(function(a){C.decodeDracoFile(t,function(s){for(const n in s.attributes){const r=s.attributes[n],G=o[n];G!==void 0&&(r.normalized=G)}a(s)},i,e)})})}}class wM{constructor(){this.name=II.KHR_TEXTURE_TRANSFORM}extendTexture(A,I){return(I.texCoord===void 0||I.texCoord===A.channel)&&I.offset===void 0&&I.rotation===void 0&&I.scale===void 0||(A=A.clone(),I.texCoord!==void 0&&(A.channel=I.texCoord),I.offset!==void 0&&A.offset.fromArray(I.offset),I.rotation!==void 0&&(A.rotation=I.rotation),I.scale!==void 0&&A.repeat.fromArray(I.scale),A.needsUpdate=!0),A}}class GM{constructor(){this.name=II.KHR_MESH_QUANTIZATION}}class JD extends LQ{constructor(A,I,g,C){super(A,I,g,C)}copySampleValue_(A){const I=this.resultBuffer,g=this.sampleValues,C=this.valueSize,Q=A*C*3+C;for(let E=0;E!==C;E++)I[E]=g[Q+E];return I}interpolate_(A,I,g,C){const Q=this.resultBuffer,E=this.sampleValues,i=this.valueSize,o=i*2,e=i*3,t=C-I,a=(g-I)/t,s=a*a,n=s*a,r=A*e,G=r-e,h=-2*n+3*s,D=n-s,S=1-h,w=D-s+a;for(let k=0;k!==i;k++){const M=E[G+k+i],U=E[G+k+o]*t,q=E[r+k+i],F=E[r+k]*t;Q[k]=S*M+w*U+h*q+D*F}return Q}}const SM=new Qg;class kM extends JD{interpolate_(A,I,g,C){const Q=super.interpolate_(A,I,g,C);return SM.fromArray(Q).normalize().toArray(Q),Q}}const Sg={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},pB={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ya={9728:PI,9729:Eg,9984:zi,9985:As,9986:cE,9987:IB},La={33071:kg,33648:yE,10497:TB},vi={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ko={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},GC={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},lM={CUBICSPLINE:void 0,LINEAR:ZB,STEP:SQ},Wi={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function MM(B){return B.DefaultMaterial===void 0&&(B.DefaultMaterial=new ZE({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:eC})),B.DefaultMaterial}function TC(B,A,I){for(const g in I.extensions)B[g]===void 0&&(A.userData.gltfExtensions=A.userData.gltfExtensions||{},A.userData.gltfExtensions[g]=I.extensions[g])}function SC(B,A){A.extras!==void 0&&(typeof A.extras=="object"?Object.assign(B.userData,A.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+A.extras))}function yM(B,A,I){let g=!1,C=!1,Q=!1;for(let e=0,t=A.length;e<t;e++){const a=A[e];if(a.POSITION!==void 0&&(g=!0),a.NORMAL!==void 0&&(C=!0),a.COLOR_0!==void 0&&(Q=!0),g&&C&&Q)break}if(!g&&!C&&!Q)return Promise.resolve(B);const E=[],i=[],o=[];for(let e=0,t=A.length;e<t;e++){const a=A[e];if(g){const s=a.POSITION!==void 0?I.getDependency("accessor",a.POSITION):B.attributes.position;E.push(s)}if(C){const s=a.NORMAL!==void 0?I.getDependency("accessor",a.NORMAL):B.attributes.normal;i.push(s)}if(Q){const s=a.COLOR_0!==void 0?I.getDependency("accessor",a.COLOR_0):B.attributes.color;o.push(s)}}return Promise.all([Promise.all(E),Promise.all(i),Promise.all(o)]).then(function(e){const t=e[0],a=e[1],s=e[2];return g&&(B.morphAttributes.position=t),C&&(B.morphAttributes.normal=a),Q&&(B.morphAttributes.color=s),B.morphTargetsRelative=!0,B})}function UM(B,A){if(B.updateMorphTargets(),A.weights!==void 0)for(let I=0,g=A.weights.length;I<g;I++)B.morphTargetInfluences[I]=A.weights[I];if(A.extras&&Array.isArray(A.extras.targetNames)){const I=A.extras.targetNames;if(B.morphTargetInfluences.length===I.length){B.morphTargetDictionary={};for(let g=0,C=I.length;g<C;g++)B.morphTargetDictionary[I[g]]=g}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function NM(B){let A;const I=B.extensions&&B.extensions[II.KHR_DRACO_MESH_COMPRESSION];if(I?A="draco:"+I.bufferView+":"+I.indices+":"+ji(I.attributes):A=B.indices+":"+ji(B.attributes)+":"+B.mode,B.targets!==void 0)for(let g=0,C=B.targets.length;g<C;g++)A+=":"+ji(B.targets[g]);return A}function ji(B){let A="";const I=Object.keys(B).sort();for(let g=0,C=I.length;g<C;g++)A+=I[g]+":"+B[I[g]]+";";return A}function lo(B){switch(B){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function KM(B){return B.search(/\.jpe?g($|\?)/i)>0||B.search(/^data\:image\/jpeg/)===0?"image/jpeg":B.search(/\.webp($|\?)/i)>0||B.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const JM=new TA;class FM{constructor(A={},I={}){this.json=A,this.extensions={},this.plugins={},this.options=I,this.cache=new $l,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let g=!1,C=!1,Q=-1;typeof navigator<"u"&&(g=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,C=navigator.userAgent.indexOf("Firefox")>-1,Q=C?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||g||C&&Q<98?this.textureLoader=new Qo(this.options.manager):this.textureLoader=new JS(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new JE(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(A){this.extensions=A}setPlugins(A){this.plugins=A}parse(A,I){const g=this,C=this.json,Q=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(E){return E._markDefs&&E._markDefs()}),Promise.all(this._invokeAll(function(E){return E.beforeRoot&&E.beforeRoot()})).then(function(){return Promise.all([g.getDependencies("scene"),g.getDependencies("animation"),g.getDependencies("camera")])}).then(function(E){const i={scene:E[0][C.scene||0],scenes:E[0],animations:E[1],cameras:E[2],asset:C.asset,parser:g,userData:{}};TC(Q,i,C),SC(i,C),Promise.all(g._invokeAll(function(o){return o.afterRoot&&o.afterRoot(i)})).then(function(){A(i)})}).catch(I)}_markDefs(){const A=this.json.nodes||[],I=this.json.skins||[],g=this.json.meshes||[];for(let C=0,Q=I.length;C<Q;C++){const E=I[C].joints;for(let i=0,o=E.length;i<o;i++)A[E[i]].isBone=!0}for(let C=0,Q=A.length;C<Q;C++){const E=A[C];E.mesh!==void 0&&(this._addNodeRef(this.meshCache,E.mesh),E.skin!==void 0&&(g[E.mesh].isSkinnedMesh=!0)),E.camera!==void 0&&this._addNodeRef(this.cameraCache,E.camera)}}_addNodeRef(A,I){I!==void 0&&(A.refs[I]===void 0&&(A.refs[I]=A.uses[I]=0),A.refs[I]++)}_getNodeRef(A,I,g){if(A.refs[I]<=1)return g;const C=g.clone(),Q=(E,i)=>{const o=this.associations.get(E);o!=null&&this.associations.set(i,o);for(const[e,t]of E.children.entries())Q(t,i.children[e])};return Q(g,C),C.name+="_instance_"+A.uses[I]++,C}_invokeOne(A){const I=Object.values(this.plugins);I.push(this);for(let g=0;g<I.length;g++){const C=A(I[g]);if(C)return C}return null}_invokeAll(A){const I=Object.values(this.plugins);I.unshift(this);const g=[];for(let C=0;C<I.length;C++){const Q=A(I[C]);Q&&g.push(Q)}return g}getDependency(A,I){const g=A+":"+I;let C=this.cache.get(g);if(!C){switch(A){case"scene":C=this.loadScene(I);break;case"node":C=this._invokeOne(function(Q){return Q.loadNode&&Q.loadNode(I)});break;case"mesh":C=this._invokeOne(function(Q){return Q.loadMesh&&Q.loadMesh(I)});break;case"accessor":C=this.loadAccessor(I);break;case"bufferView":C=this._invokeOne(function(Q){return Q.loadBufferView&&Q.loadBufferView(I)});break;case"buffer":C=this.loadBuffer(I);break;case"material":C=this._invokeOne(function(Q){return Q.loadMaterial&&Q.loadMaterial(I)});break;case"texture":C=this._invokeOne(function(Q){return Q.loadTexture&&Q.loadTexture(I)});break;case"skin":C=this.loadSkin(I);break;case"animation":C=this._invokeOne(function(Q){return Q.loadAnimation&&Q.loadAnimation(I)});break;case"camera":C=this.loadCamera(I);break;default:if(C=this._invokeOne(function(Q){return Q!=this&&Q.getDependency&&Q.getDependency(A,I)}),!C)throw new Error("Unknown type: "+A);break}this.cache.add(g,C)}return C}getDependencies(A){let I=this.cache.get(A);if(!I){const g=this,C=this.json[A+(A==="mesh"?"es":"s")]||[];I=Promise.all(C.map(function(Q,E){return g.getDependency(A,E)})),this.cache.add(A,I)}return I}loadBuffer(A){const I=this.json.buffers[A],g=this.fileLoader;if(I.type&&I.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+I.type+" buffer type is not supported.");if(I.uri===void 0&&A===0)return Promise.resolve(this.extensions[II.KHR_BINARY_GLTF].body);const C=this.options;return new Promise(function(Q,E){g.load(Eo.resolveURL(I.uri,C.path),Q,void 0,function(){E(new Error('THREE.GLTFLoader: Failed to load buffer "'+I.uri+'".'))})})}loadBufferView(A){const I=this.json.bufferViews[A];return this.getDependency("buffer",I.buffer).then(function(g){const C=I.byteLength||0,Q=I.byteOffset||0;return g.slice(Q,Q+C)})}loadAccessor(A){const I=this,g=this.json,C=this.json.accessors[A];if(C.bufferView===void 0&&C.sparse===void 0){const E=vi[C.type],i=pB[C.componentType],o=C.normalized===!0,e=new i(C.count*E);return Promise.resolve(new WI(e,E,o))}const Q=[];return C.bufferView!==void 0?Q.push(this.getDependency("bufferView",C.bufferView)):Q.push(null),C.sparse!==void 0&&(Q.push(this.getDependency("bufferView",C.sparse.indices.bufferView)),Q.push(this.getDependency("bufferView",C.sparse.values.bufferView))),Promise.all(Q).then(function(E){const i=E[0],o=vi[C.type],e=pB[C.componentType],t=e.BYTES_PER_ELEMENT,a=t*o,s=C.byteOffset||0,n=C.bufferView!==void 0?g.bufferViews[C.bufferView].byteStride:void 0,r=C.normalized===!0;let G,h;if(n&&n!==a){const D=Math.floor(s/n),S="InterleavedBuffer:"+C.bufferView+":"+C.componentType+":"+D+":"+C.count;let w=I.cache.get(S);w||(G=new e(i,D*n,C.count*n/t),w=new gS(G,n/t),I.cache.add(S,w)),h=new po(w,o,s%n/t,r)}else i===null?G=new e(C.count*o):G=new e(i,s,C.count*o),h=new WI(G,o,r);if(C.sparse!==void 0){const D=vi.SCALAR,S=pB[C.sparse.indices.componentType],w=C.sparse.indices.byteOffset||0,k=C.sparse.values.byteOffset||0,M=new S(E[1],w,C.sparse.count*D),U=new e(E[2],k,C.sparse.count*o);i!==null&&(h=new WI(h.array.slice(),h.itemSize,h.normalized));for(let q=0,F=M.length;q<F;q++){const l=M[q];if(h.setX(l,U[q*o]),o>=2&&h.setY(l,U[q*o+1]),o>=3&&h.setZ(l,U[q*o+2]),o>=4&&h.setW(l,U[q*o+3]),o>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return h})}loadTexture(A){const I=this.json,g=this.options,Q=I.textures[A].source,E=I.images[Q];let i=this.textureLoader;if(E.uri){const o=g.manager.getHandler(E.uri);o!==null&&(i=o)}return this.loadTextureImage(A,Q,i)}loadTextureImage(A,I,g){const C=this,Q=this.json,E=Q.textures[A],i=Q.images[I],o=(i.uri||i.bufferView)+":"+E.sampler;if(this.textureCache[o])return this.textureCache[o];const e=this.loadImageSource(I,g).then(function(t){t.flipY=!1,t.name=E.name||i.name||"",t.name===""&&typeof i.uri=="string"&&i.uri.startsWith("data:image/")===!1&&(t.name=i.uri);const s=(Q.samplers||{})[E.sampler]||{};return t.magFilter=Ya[s.magFilter]||Eg,t.minFilter=Ya[s.minFilter]||IB,t.wrapS=La[s.wrapS]||TB,t.wrapT=La[s.wrapT]||TB,C.associations.set(t,{textures:A}),t}).catch(function(){return null});return this.textureCache[o]=e,e}loadImageSource(A,I){const g=this,C=this.json,Q=this.options;if(this.sourceCache[A]!==void 0)return this.sourceCache[A].then(a=>a.clone());const E=C.images[A],i=self.URL||self.webkitURL;let o=E.uri||"",e=!1;if(E.bufferView!==void 0)o=g.getDependency("bufferView",E.bufferView).then(function(a){e=!0;const s=new Blob([a],{type:E.mimeType});return o=i.createObjectURL(s),o});else if(E.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+A+" is missing URI and bufferView");const t=Promise.resolve(o).then(function(a){return new Promise(function(s,n){let r=s;I.isImageBitmapLoader===!0&&(r=function(G){const h=new YI(G);h.needsUpdate=!0,s(h)}),I.load(Eo.resolveURL(a,Q.path),r,void 0,n)})}).then(function(a){return e===!0&&i.revokeObjectURL(o),a.userData.mimeType=E.mimeType||KM(E.uri),a}).catch(function(a){throw console.error("THREE.GLTFLoader: Couldn't load texture",o),a});return this.sourceCache[A]=t,t}assignTexture(A,I,g,C){const Q=this;return this.getDependency("texture",g.index).then(function(E){if(!E)return null;if(g.texCoord!==void 0&&g.texCoord>0&&(E=E.clone(),E.channel=g.texCoord),Q.extensions[II.KHR_TEXTURE_TRANSFORM]){const i=g.extensions!==void 0?g.extensions[II.KHR_TEXTURE_TRANSFORM]:void 0;if(i){const o=Q.associations.get(E);E=Q.extensions[II.KHR_TEXTURE_TRANSFORM].extendTexture(E,i),Q.associations.set(E,o)}}return C!==void 0&&(E.colorSpace=C),A[I]=E,E})}assignFinalMaterial(A){const I=A.geometry;let g=A.material;const C=I.attributes.tangent===void 0,Q=I.attributes.color!==void 0,E=I.attributes.normal===void 0;if(A.isPoints){const i="PointsMaterial:"+g.uuid;let o=this.cache.get(i);o||(o=new Fs,Tg.prototype.copy.call(o,g),o.color.copy(g.color),o.map=g.map,o.sizeAttenuation=!1,this.cache.add(i,o)),g=o}else if(A.isLine){const i="LineBasicMaterial:"+g.uuid;let o=this.cache.get(i);o||(o=new Js,Tg.prototype.copy.call(o,g),o.color.copy(g.color),o.map=g.map,this.cache.add(i,o)),g=o}if(C||Q||E){let i="ClonedMaterial:"+g.uuid+":";C&&(i+="derivative-tangents:"),Q&&(i+="vertex-colors:"),E&&(i+="flat-shading:");let o=this.cache.get(i);o||(o=g.clone(),Q&&(o.vertexColors=!0),E&&(o.flatShading=!0),C&&(o.normalScale&&(o.normalScale.y*=-1),o.clearcoatNormalScale&&(o.clearcoatNormalScale.y*=-1)),this.cache.add(i,o),this.associations.set(o,this.associations.get(g))),g=o}A.material=g}getMaterialType(){return ZE}loadMaterial(A){const I=this,g=this.json,C=this.extensions,Q=g.materials[A];let E;const i={},o=Q.extensions||{},e=[];if(o[II.KHR_MATERIALS_UNLIT]){const a=C[II.KHR_MATERIALS_UNLIT];E=a.getMaterialType(),e.push(a.extendParams(i,Q,I))}else{const a=Q.pbrMetallicRoughness||{};if(i.color=new LA(1,1,1),i.opacity=1,Array.isArray(a.baseColorFactor)){const s=a.baseColorFactor;i.color.fromArray(s),i.opacity=s[3]}a.baseColorTexture!==void 0&&e.push(I.assignTexture(i,"map",a.baseColorTexture,qA)),i.metalness=a.metallicFactor!==void 0?a.metallicFactor:1,i.roughness=a.roughnessFactor!==void 0?a.roughnessFactor:1,a.metallicRoughnessTexture!==void 0&&(e.push(I.assignTexture(i,"metalnessMap",a.metallicRoughnessTexture)),e.push(I.assignTexture(i,"roughnessMap",a.metallicRoughnessTexture))),E=this._invokeOne(function(s){return s.getMaterialType&&s.getMaterialType(A)}),e.push(Promise.all(this._invokeAll(function(s){return s.extendMaterialParams&&s.extendMaterialParams(A,i)})))}Q.doubleSided===!0&&(i.side=Hg);const t=Q.alphaMode||Wi.OPAQUE;if(t===Wi.BLEND?(i.transparent=!0,i.depthWrite=!1):(i.transparent=!1,t===Wi.MASK&&(i.alphaTest=Q.alphaCutoff!==void 0?Q.alphaCutoff:.5)),Q.normalTexture!==void 0&&E!==PC&&(e.push(I.assignTexture(i,"normalMap",Q.normalTexture)),i.normalScale=new dA(1,1),Q.normalTexture.scale!==void 0)){const a=Q.normalTexture.scale;i.normalScale.set(a,a)}return Q.occlusionTexture!==void 0&&E!==PC&&(e.push(I.assignTexture(i,"aoMap",Q.occlusionTexture)),Q.occlusionTexture.strength!==void 0&&(i.aoMapIntensity=Q.occlusionTexture.strength)),Q.emissiveFactor!==void 0&&E!==PC&&(i.emissive=new LA().fromArray(Q.emissiveFactor)),Q.emissiveTexture!==void 0&&E!==PC&&e.push(I.assignTexture(i,"emissiveMap",Q.emissiveTexture,qA)),Promise.all(e).then(function(){const a=new E(i);return Q.name&&(a.name=Q.name),SC(a,Q),I.associations.set(a,{materials:A}),Q.extensions&&TC(C,a,Q),a})}createUniqueName(A){const I=eI.sanitizeNodeName(A||"");return I in this.nodeNamesUsed?I+"_"+ ++this.nodeNamesUsed[I]:(this.nodeNamesUsed[I]=0,I)}loadGeometries(A){const I=this,g=this.extensions,C=this.primitiveCache;function Q(i){return g[II.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(i,I).then(function(o){return ua(o,i,I)})}const E=[];for(let i=0,o=A.length;i<o;i++){const e=A[i],t=NM(e),a=C[t];if(a)E.push(a.promise);else{let s;e.extensions&&e.extensions[II.KHR_DRACO_MESH_COMPRESSION]?s=Q(e):s=ua(new yg,e,I),C[t]={primitive:e,promise:s},E.push(s)}}return Promise.all(E)}loadMesh(A){const I=this,g=this.json,C=this.extensions,Q=g.meshes[A],E=Q.primitives,i=[];for(let o=0,e=E.length;o<e;o++){const t=E[o].material===void 0?MM(this.cache):this.getDependency("material",E[o].material);i.push(t)}return i.push(I.loadGeometries(E)),Promise.all(i).then(function(o){const e=o.slice(0,o.length-1),t=o[o.length-1],a=[];for(let n=0,r=t.length;n<r;n++){const G=t[n],h=E[n];let D;const S=e[n];if(h.mode===Sg.TRIANGLES||h.mode===Sg.TRIANGLE_STRIP||h.mode===Sg.TRIANGLE_FAN||h.mode===void 0)D=Q.isSkinnedMesh===!0?new BS(G,S):new Bg(G,S),D.isSkinnedMesh===!0&&D.normalizeSkinWeights(),h.mode===Sg.TRIANGLE_STRIP?D.geometry=da(D.geometry,is):h.mode===Sg.TRIANGLE_FAN&&(D.geometry=da(D.geometry,$i));else if(h.mode===Sg.LINES)D=new eS(G,S);else if(h.mode===Sg.LINE_STRIP)D=new Yo(G,S);else if(h.mode===Sg.LINE_LOOP)D=new tS(G,S);else if(h.mode===Sg.POINTS)D=new aS(G,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+h.mode);Object.keys(D.geometry.morphAttributes).length>0&&UM(D,Q),D.name=I.createUniqueName(Q.name||"mesh_"+A),SC(D,Q),h.extensions&&TC(C,D,h),I.assignFinalMaterial(D),a.push(D)}for(let n=0,r=a.length;n<r;n++)I.associations.set(a[n],{meshes:A,primitives:n});if(a.length===1)return Q.extensions&&TC(C,a[0],Q),a[0];const s=new vC;Q.extensions&&TC(C,s,Q),I.associations.set(s,{meshes:A});for(let n=0,r=a.length;n<r;n++)s.add(a[n]);return s})}loadCamera(A){let I;const g=this.json.cameras[A],C=g[g.type];if(!C){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return g.type==="perspective"?I=new _I(zn.radToDeg(C.yfov),C.aspectRatio||1,C.znear||1,C.zfar||2e6):g.type==="orthographic"&&(I=new xE(-C.xmag,C.xmag,C.ymag,-C.ymag,C.znear,C.zfar)),g.name&&(I.name=this.createUniqueName(g.name)),SC(I,g),Promise.resolve(I)}loadSkin(A){const I=this.json.skins[A],g=[];for(let C=0,Q=I.joints.length;C<Q;C++)g.push(this._loadNodeShallow(I.joints[C]));return I.inverseBindMatrices!==void 0?g.push(this.getDependency("accessor",I.inverseBindMatrices)):g.push(null),Promise.all(g).then(function(C){const Q=C.pop(),E=C,i=[],o=[];for(let e=0,t=E.length;e<t;e++){const a=E[e];if(a){i.push(a);const s=new TA;Q!==null&&s.fromArray(Q.array,e*16),o.push(s)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',I.joints[e])}return new fo(i,o)})}loadAnimation(A){const g=this.json.animations[A],C=g.name?g.name:"animation_"+A,Q=[],E=[],i=[],o=[],e=[];for(let t=0,a=g.channels.length;t<a;t++){const s=g.channels[t],n=g.samplers[s.sampler],r=s.target,G=r.node,h=g.parameters!==void 0?g.parameters[n.input]:n.input,D=g.parameters!==void 0?g.parameters[n.output]:n.output;r.node!==void 0&&(Q.push(this.getDependency("node",G)),E.push(this.getDependency("accessor",h)),i.push(this.getDependency("accessor",D)),o.push(n),e.push(r))}return Promise.all([Promise.all(Q),Promise.all(E),Promise.all(i),Promise.all(o),Promise.all(e)]).then(function(t){const a=t[0],s=t[1],n=t[2],r=t[3],G=t[4],h=[];for(let D=0,S=a.length;D<S;D++){const w=a[D],k=s[D],M=n[D],U=r[D],q=G[D];if(w===void 0)continue;w.updateMatrix();let F;switch(GC[q.path]){case GC.weights:F=lQ;break;case GC.rotation:F=gB;break;case GC.position:case GC.scale:default:F=MQ;break}const l=w.name?w.name:w.uuid,y=U.interpolation!==void 0?lM[U.interpolation]:ZB,O=[];GC[q.path]===GC.weights?w.traverse(function(d){d.morphTargetInfluences&&O.push(d.name?d.name:d.uuid)}):O.push(l);let u=M.array;if(M.normalized){const d=lo(u.constructor),P=new Float32Array(u.length);for(let H=0,CA=u.length;H<CA;H++)P[H]=u[H]*d;u=P}for(let d=0,P=O.length;d<P;d++){const H=new F(O[d]+"."+GC[q.path],k.array,u,y);U.interpolation==="CUBICSPLINE"&&(H.createInterpolant=function(V){const b=this instanceof gB?kM:JD;return new b(this.times,this.values,this.getValueSize()/3,V)},H.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),h.push(H)}}return new cS(C,void 0,h)})}createNodeMesh(A){const I=this.json,g=this,C=I.nodes[A];return C.mesh===void 0?null:g.getDependency("mesh",C.mesh).then(function(Q){const E=g._getNodeRef(g.meshCache,C.mesh,Q);return C.weights!==void 0&&E.traverse(function(i){if(i.isMesh)for(let o=0,e=C.weights.length;o<e;o++)i.morphTargetInfluences[o]=C.weights[o]}),E})}loadNode(A){const I=this.json,g=this,C=I.nodes[A],Q=g._loadNodeShallow(A),E=[],i=C.children||[];for(let e=0,t=i.length;e<t;e++)E.push(g.getDependency("node",i[e]));const o=C.skin===void 0?Promise.resolve(null):g.getDependency("skin",C.skin);return Promise.all([Q,Promise.all(E),o]).then(function(e){const t=e[0],a=e[1],s=e[2];s!==null&&t.traverse(function(n){n.isSkinnedMesh&&n.bind(s,JM)});for(let n=0,r=a.length;n<r;n++)t.add(a[n]);return t})}_loadNodeShallow(A){const I=this.json,g=this.extensions,C=this;if(this.nodeCache[A]!==void 0)return this.nodeCache[A];const Q=I.nodes[A],E=Q.name?C.createUniqueName(Q.name):"",i=[],o=C._invokeOne(function(e){return e.createNodeMesh&&e.createNodeMesh(A)});return o&&i.push(o),Q.camera!==void 0&&i.push(C.getDependency("camera",Q.camera).then(function(e){return C._getNodeRef(C.cameraCache,Q.camera,e)})),C._invokeAll(function(e){return e.createNodeAttachment&&e.createNodeAttachment(A)}).forEach(function(e){i.push(e)}),this.nodeCache[A]=Promise.all(i).then(function(e){let t;if(Q.isBone===!0?t=new Ks:e.length>1?t=new vC:e.length===1?t=e[0]:t=new iI,t!==e[0])for(let a=0,s=e.length;a<s;a++)t.add(e[a]);if(Q.name&&(t.userData.name=Q.name,t.name=E),SC(t,Q),Q.extensions&&TC(g,t,Q),Q.matrix!==void 0){const a=new TA;a.fromArray(Q.matrix),t.applyMatrix4(a)}else Q.translation!==void 0&&t.position.fromArray(Q.translation),Q.rotation!==void 0&&t.quaternion.fromArray(Q.rotation),Q.scale!==void 0&&t.scale.fromArray(Q.scale);return C.associations.has(t)||C.associations.set(t,{}),C.associations.get(t).nodes=A,t}),this.nodeCache[A]}loadScene(A){const I=this.extensions,g=this.json.scenes[A],C=this,Q=new vC;g.name&&(Q.name=C.createUniqueName(g.name)),SC(Q,g),g.extensions&&TC(I,Q,g);const E=g.nodes||[],i=[];for(let o=0,e=E.length;o<e;o++)i.push(C.getDependency("node",E[o]));return Promise.all(i).then(function(o){for(let t=0,a=o.length;t<a;t++)Q.add(o[t]);const e=t=>{const a=new Map;for(const[s,n]of C.associations)(s instanceof Tg||s instanceof YI)&&a.set(s,n);return t.traverse(s=>{const n=C.associations.get(s);n!=null&&a.set(s,n)}),a};return C.associations=e(Q),Q})}}function RM(B,A,I){const g=A.attributes,C=new sC;if(g.POSITION!==void 0){const i=I.json.accessors[g.POSITION],o=i.min,e=i.max;if(o!==void 0&&e!==void 0){if(C.set(new f(o[0],o[1],o[2]),new f(e[0],e[1],e[2])),i.normalized){const t=lo(pB[i.componentType]);C.min.multiplyScalar(t),C.max.multiplyScalar(t)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const Q=A.targets;if(Q!==void 0){const i=new f,o=new f;for(let e=0,t=Q.length;e<t;e++){const a=Q[e];if(a.POSITION!==void 0){const s=I.json.accessors[a.POSITION],n=s.min,r=s.max;if(n!==void 0&&r!==void 0){if(o.setX(Math.max(Math.abs(n[0]),Math.abs(r[0]))),o.setY(Math.max(Math.abs(n[1]),Math.abs(r[1]))),o.setZ(Math.max(Math.abs(n[2]),Math.abs(r[2]))),s.normalized){const G=lo(pB[s.componentType]);o.multiplyScalar(G)}i.max(o)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}C.expandByVector(i)}B.boundingBox=C;const E=new vg;C.getCenter(E.center),E.radius=C.min.distanceTo(C.max)/2,B.boundingSphere=E}function ua(B,A,I){const g=A.attributes,C=[];function Q(E,i){return I.getDependency("accessor",E).then(function(o){B.setAttribute(i,o)})}for(const E in g){const i=ko[E]||E.toLowerCase();i in B.attributes||C.push(Q(g[E],i))}if(A.indices!==void 0&&!B.index){const E=I.getDependency("accessor",A.indices).then(function(i){B.setIndex(i)});C.push(E)}return SC(B,A),RM(B,A,I),Promise.all(C).then(function(){return A.targets!==void 0?yM(B,A.targets,I):B})}var qM=function(){var B="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",A="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",I=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),g=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var C=WebAssembly.validate(I)?A:B,Q,E=WebAssembly.instantiate(i(C),{}).then(function(D){Q=D.instance,Q.exports.__wasm_call_ctors()});function i(D){for(var S=new Uint8Array(D.length),w=0;w<D.length;++w){var k=D.charCodeAt(w);S[w]=k>96?k-97:k>64?k-39:k+4}for(var M=0,w=0;w<D.length;++w)S[M++]=S[w]<60?g[S[w]]:(S[w]-60)*64+S[++w];return S.buffer.slice(0,M)}function o(D,S,w,k,M,U){var q=Q.exports.sbrk,F=w+3&-4,l=q(F*k),y=q(M.length),O=new Uint8Array(Q.exports.memory.buffer);O.set(M,y);var u=D(l,w,k,y,M.length);if(u==0&&U&&U(l,F,k),S.set(O.subarray(l,l+w*k)),q(l-q(0)),u!=0)throw new Error("Malformed buffer data: "+u)}var e={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},t={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},a=[],s=0;function n(D){var S={object:new Worker(D),pending:0,requests:{}};return S.object.onmessage=function(w){var k=w.data;S.pending-=k.count,S.requests[k.id][k.action](k.value),delete S.requests[k.id]},S}function r(D){for(var S="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i(C))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+o.toString()+h.toString(),w=new Blob([S],{type:"text/javascript"}),k=URL.createObjectURL(w),M=0;M<D;++M)a[M]=n(k);URL.revokeObjectURL(k)}function G(D,S,w,k,M){for(var U=a[0],q=1;q<a.length;++q)a[q].pending<U.pending&&(U=a[q]);return new Promise(function(F,l){var y=new Uint8Array(w),O=s++;U.pending+=D,U.requests[O]={resolve:F,reject:l},U.object.postMessage({id:O,count:D,size:S,source:y,mode:k,filter:M},[y.buffer])})}function h(D){E.then(function(){var S=D.data;try{var w=new Uint8Array(S.count*S.size);o(Q.exports[S.mode],w,S.count,S.size,S.source,Q.exports[S.filter]),self.postMessage({id:S.id,count:S.count,action:"resolve",value:w},[w.buffer])}catch(k){self.postMessage({id:S.id,count:S.count,action:"reject",value:k})}})}return{ready:E,supported:!0,useWorkers:function(D){r(D)},decodeVertexBuffer:function(D,S,w,k,M){o(Q.exports.meshopt_decodeVertexBuffer,D,S,w,k,Q.exports[e[M]])},decodeIndexBuffer:function(D,S,w,k){o(Q.exports.meshopt_decodeIndexBuffer,D,S,w,k)},decodeIndexSequence:function(D,S,w,k){o(Q.exports.meshopt_decodeIndexSequence,D,S,w,k)},decodeGltfBuffer:function(D,S,w,k,M,U){o(Q.exports[t[M]],D,S,w,k,Q.exports[e[U]])},decodeGltfBufferAsync:function(D,S,w,k,M){return a.length>0?G(D,S,w,t[k],e[M]):E.then(function(){var U=new Uint8Array(D*S);return o(Q.exports[t[k]],U,D,S,w,Q.exports[e[M]]),U})}}}();const dM=B=>{const A={nodes:{},materials:{}};return B&&B.traverse(I=>{I.name&&(A.nodes[I.name]=I),I.material&&!A.materials[I.material.name]&&(A.materials[I.material.name]=I.material)}),A},pM=(B,A)=>{const I=RI(void 0),g=eo(pa,()=>new pa(KE));if(A!=null&&A.useDraco){const C=typeof A.useDraco=="string"?A.useDraco:"https://www.gstatic.com/draco/versioned/decoders/1.4.3/",Q=eo(qa,()=>new qa(KE).setDecoderPath(C));g.setDRACOLoader(Q)}return A!=null&&A.useMeshopt&&g.setMeshoptDecoder(qM),g.load(B,C=>{C.scene&&Object.assign(C,dM(C.scene)),I.set(C)}),{gltf:I}};new f;new f;new f;const fM={y:-9.81},FD={y:0},fB=RI(FD),RD=RI({});function Ha(B,A,I){const g=B.slice();return g[14]=A[I],g}function ma(B){let A,I,g,C;function Q(o){B[4](o)}function E(o){B[5](o)}let i={type:"dynamic",$$slots:{default:[uM]},$$scope:{ctx:B}};return B[0]!==void 0&&(i.position=B[0]),B[1]!==void 0&&(i.angularVelocity=B[1]),A=new Tl({props:i}),$C.push(()=>LB(A,"position",Q)),$C.push(()=>LB(A,"angularVelocity",E)),{c(){XA(A.$$.fragment)},l(o){zA(A.$$.fragment,o)},m(o,e){$A(A,o,e),C=!0},p(o,e){const t={};e&131076&&(t.$$scope={dirty:e,ctx:o}),!I&&e&1&&(I=!0,t.position=o[0],uB(()=>I=!1)),!g&&e&2&&(g=!0,t.angularVelocity=o[1],uB(()=>g=!1)),A.$set(t)},i(o){C||(nA(A.$$.fragment,o),C=!0)},o(o){cA(A.$$.fragment,o),C=!1},d(o){AI(A,o)}}}function YM(B){let A,I,g,C,Q;return A=new CB({props:{type:B[14].geometry,attach:"geometry"}}),g=new CB({props:{type:B[14].material,attach:"material"}}),{c(){XA(A.$$.fragment),I=XI(),XA(g.$$.fragment),C=XI()},l(E){zA(A.$$.fragment,E),I=zI(E),zA(g.$$.fragment,E),C=zI(E)},m(E,i){$A(A,E,i),wI(E,I,i),$A(g,E,i),wI(E,C,i),Q=!0},p(E,i){const o={};i&4&&(o.type=E[14].geometry),A.$set(o);const e={};i&4&&(e.type=E[14].material),g.$set(e)},i(E){Q||(nA(A.$$.fragment,E),nA(g.$$.fragment,E),Q=!0)},o(E){cA(A.$$.fragment,E),cA(g.$$.fragment,E),Q=!1},d(E){AI(A,E),E&&EI(I),AI(g,E),E&&EI(C)}}}function ba(B){let A,I;return A=new CB({props:{type:new Bg,castShadow:!0,$$slots:{default:[YM]},$$scope:{ctx:B}}}),{c(){XA(A.$$.fragment)},l(g){zA(A.$$.fragment,g)},m(g,C){$A(A,g,C),I=!0},p(g,C){const Q={};C&131076&&(Q.$$scope={dirty:C,ctx:g}),A.$set(Q)},i(g){I||(nA(A.$$.fragment,g),I=!0)},o(g){cA(A.$$.fragment,g),I=!1},d(g){AI(A,g)}}}function LM(B){let A,I,g=B[2],C=[];for(let E=0;E<g.length;E+=1)C[E]=ba(Ha(B,g,E));const Q=E=>cA(C[E],1,1,()=>{C[E]=null});return{c(){for(let E=0;E<C.length;E+=1)C[E].c();A=xg()},l(E){for(let i=0;i<C.length;i+=1)C[i].l(E);A=xg()},m(E,i){for(let o=0;o<C.length;o+=1)C[o]&&C[o].m(E,i);wI(E,A,i),I=!0},p(E,i){if(i&4){g=E[2];let o;for(o=0;o<g.length;o+=1){const e=Ha(E,g,o);C[o]?(C[o].p(e,i),nA(C[o],1)):(C[o]=ba(e),C[o].c(),nA(C[o],1),C[o].m(A.parentNode,A))}for(UC(),o=g.length;o<C.length;o+=1)Q(o);NC()}},i(E){if(!I){for(let i=0;i<g.length;i+=1)nA(C[i]);I=!0}},o(E){C=C.filter(Boolean);for(let i=0;i<C.length;i+=1)cA(C[i]);I=!1},d(E){mD(C,E),E&&EI(A)}}}function uM(B){let A,I;return A=new ND({props:{shape:"cuboid",restitution:.5,$$slots:{default:[LM]},$$scope:{ctx:B}}}),{c(){XA(A.$$.fragment)},l(g){zA(A.$$.fragment,g)},m(g,C){$A(A,g,C),I=!0},p(g,C){const Q={};C&131076&&(Q.$$scope={dirty:C,ctx:g}),A.$set(Q)},i(g){I||(nA(A.$$.fragment,g),I=!0)},o(g){cA(A.$$.fragment,g),I=!1},d(g){AI(A,g)}}}function HM(B){let A,I,g=B[2]&&ma(B);return{c(){g&&g.c(),A=xg()},l(C){g&&g.l(C),A=xg()},m(C,Q){g&&g.m(C,Q),wI(C,A,Q),I=!0},p(C,[Q]){C[2]?g?(g.p(C,Q),Q&4&&nA(g,1)):(g=ma(C),g.c(),nA(g,1),g.m(A.parentNode,A)):g&&(UC(),cA(g,1,1,()=>{g=null}),NC())},i(C){I||(nA(g),I=!0)},o(C){cA(g),I=!1},d(C){g&&g.d(C),C&&EI(A)}}}function mM(B,A,I){let g,C;GI(B,fB,D=>I(7,g=D));let{position:Q}=A;const{gltf:E}=pM("/dice.glb"),i=va(E,D=>D?Object.values(D.nodes).filter(w=>w.type==="Mesh"):void 0);GI(B,i,D=>I(2,C=D));const o=(D,S)=>D+Math.random()*(S-D);let e=o(4,5),t={x:e,y:e,z:e},a=0,s=o(0,Math.PI),n=o(.07,.13);function r(){g.y||(I(1,t.x=Math.sin(a+s)*e,t),a+=n,requestAnimationFrame(r))}g.y||r();function G(D){Q=D,I(0,Q)}function h(D){t=D,I(1,t)}return B.$$set=D=>{"position"in D&&I(0,Q=D.position)},[Q,t,C,i,G,h]}class Ta extends NI{constructor(A){super(),KI(this,A,mM,HM,lI,{position:0})}}function bM(B){let A,I;return A=new Tk({}),{c(){XA(A.$$.fragment)},l(g){zA(A.$$.fragment,g)},m(g,C){$A(A,g,C),I=!0},i(g){I||(nA(A.$$.fragment,g),I=!0)},o(g){cA(A.$$.fragment,g),I=!1},d(g){AI(A,g)}}}function xa(B){let A,I,g,C;return A=new Ta({props:{position:{x:-2,y:5,z:0}}}),g=new Ta({props:{position:{x:2,y:5,z:0}}}),{c(){XA(A.$$.fragment),I=XI(),XA(g.$$.fragment)},l(Q){zA(A.$$.fragment,Q),I=zI(Q),zA(g.$$.fragment,Q)},m(Q,E){$A(A,Q,E),wI(Q,I,E),$A(g,Q,E),C=!0},p:AB,i(Q){C||(nA(A.$$.fragment,Q),nA(g.$$.fragment,Q),C=!0)},o(Q){cA(A.$$.fragment,Q),cA(g.$$.fragment,Q),C=!1},d(Q){AI(A,Q),Q&&EI(I),AI(g,Q)}}}function TM(B){let A,I,g,C,Q,E,i=B[1],o,e;A=new uk({props:{position:{x:0,y:12,z:14},fov:60,$$slots:{default:[bM]},$$scope:{ctx:B}}}),g=new CB({props:{type:B[0]}}),Q=new Xl({});let t=xa();return{c(){XA(A.$$.fragment),I=XI(),XA(g.$$.fragment),C=XI(),XA(Q.$$.fragment),E=XI(),t.c(),o=xg()},l(a){zA(A.$$.fragment,a),I=zI(a),zA(g.$$.fragment,a),C=zI(a),zA(Q.$$.fragment,a),E=zI(a),t.l(a),o=xg()},m(a,s){$A(A,a,s),wI(a,I,s),$A(g,a,s),wI(a,C,s),$A(Q,a,s),wI(a,E,s),t.m(a,s),wI(a,o,s),e=!0},p(a,[s]){const n={};s&4&&(n.$$scope={dirty:s,ctx:a}),A.$set(n);const r={};s&1&&(r.type=a[0]),g.$set(r),s&2&&lI(i,i=a[1])?(UC(),cA(t,1,1,AB),NC(),t=xa(),t.c(),nA(t,1),t.m(o.parentNode,o)):t.p(a,s)},i(a){e||(nA(A.$$.fragment,a),nA(g.$$.fragment,a),nA(Q.$$.fragment,a),nA(t),e=!0)},o(a){cA(A.$$.fragment,a),cA(g.$$.fragment,a),cA(Q.$$.fragment,a),cA(t),e=!1},d(a){AI(A,a),a&&EI(I),AI(g,a),a&&EI(C),AI(Q,a),a&&EI(E),a&&EI(o),t.d(a)}}}const hE=20;function xM(B,A,I){let g;GI(B,RD,Q=>I(1,g=Q));const C=new ps(16777215,1);return C.position.set(2,10,2),C.castShadow=!0,C.shadow.mapSize.width=2048,C.shadow.mapSize.height=2048,C.shadow.camera.left=-hE,C.shadow.camera.right=hE,C.shadow.camera.top=hE,C.shadow.camera.bottom=-hE,C.shadow.camera.near=.1,C.shadow.camera.far=500,[C,g]}class OM extends NI{constructor(A){super(),KI(this,A,xM,TM,lI,{})}}function ZM(B){let A,I,g,C;return{c(){A=pQ("button"),I=Za("Roll"),this.h()},l(Q){A=fQ(Q,"BUTTON",{class:!0});var E=HE(A);I=Pa(E,"Roll"),E.forEach(EI),this.h()},h(){YB(A,"class","svelte-1sw5rc")},m(Q,E){wI(Q,A,E),Mo(A,I),g||(C=BC(A,"click",B[1]),g=!0)},p:AB,d(Q){Q&&EI(A),g=!1,C()}}}function PM(B){let A,I,g,C;return{c(){A=pQ("button"),I=Za("Reset"),this.h()},l(Q){A=fQ(Q,"BUTTON",{class:!0});var E=HE(A);I=Pa(E,"Reset"),E.forEach(EI),this.h()},h(){YB(A,"class","svelte-1sw5rc")},m(Q,E){wI(Q,A,E),Mo(A,I),g||(C=BC(A,"click",B[2]),g=!0)},p:AB,d(Q){Q&&EI(A),g=!1,C()}}}function vM(B){let A;function I(Q,E){return Q[0].y?PM:ZM}let g=I(B),C=g(B);return{c(){A=pQ("div"),C.c(),this.h()},l(Q){A=fQ(Q,"DIV",{class:!0});var E=HE(A);C.l(E),E.forEach(EI),this.h()},h(){YB(A,"class","container svelte-1sw5rc")},m(Q,E){wI(Q,A,E),C.m(A,null)},p(Q,[E]){g===(g=I(Q))&&C?C.p(Q,E):(C.d(1),C=g(Q),C&&(C.c(),C.m(A,null)))},i:AB,o:AB,d(Q){Q&&EI(A),C.d()}}}function WM(B,A,I){let g;return GI(B,fB,E=>I(0,g=E)),[g,()=>{fB.set(fM)},()=>{fB.set(FD),RD.set({})}]}class jM extends NI{constructor(A){super(),KI(this,A,WM,vM,lI,{})}}function VM(B){let A,I;return A=new OM({}),{c(){XA(A.$$.fragment)},l(g){zA(A.$$.fragment,g)},m(g,C){$A(A,g,C),I=!0},i(g){I||(nA(A.$$.fragment,g),I=!0)},o(g){cA(A.$$.fragment,g),I=!1},d(g){AI(A,g)}}}function _M(B){let A,I,g;function C(E){B[1](E)}let Q={$$slots:{default:[VM]},$$scope:{ctx:B}};return B[0]!==void 0&&(Q.gravity=B[0]),A=new Fl({props:Q}),$C.push(()=>LB(A,"gravity",C)),{c(){XA(A.$$.fragment)},l(E){zA(A.$$.fragment,E)},m(E,i){$A(A,E,i),g=!0},p(E,i){const o={};i&4&&(o.$$scope={dirty:i,ctx:E}),!I&&i&1&&(I=!0,o.gravity=E[0],uB(()=>I=!1)),A.$set(o)},i(E){g||(nA(A.$$.fragment,E),g=!0)},o(E){cA(A.$$.fragment,E),g=!1},d(E){AI(A,E)}}}function XM(B){let A,I,g,C,Q,E;return A=new jM({}),g=new ck({props:{$$slots:{default:[_M]},$$scope:{ctx:B}}}),{c(){XA(A.$$.fragment),I=XI(),XA(g.$$.fragment),C=XI(),Q=pQ("meta"),this.h()},l(i){zA(A.$$.fragment,i),I=zI(i),zA(g.$$.fragment,i),C=zI(i);const o=bD("svelte-1a3q7mc",document.head);Q=fQ(o,"META",{name:!0,content:!0}),o.forEach(EI),this.h()},h(){document.title="3D Dice Roll",YB(Q,"name","description"),YB(Q,"content","Roll dice in 3D.")},m(i,o){$A(A,i,o),wI(i,I,o),$A(g,i,o),wI(i,C,o),Mo(document.head,Q),E=!0},p(i,[o]){const e={};o&5&&(e.$$scope={dirty:o,ctx:i}),g.$set(e)},i(i){E||(nA(A.$$.fragment,i),nA(g.$$.fragment,i),E=!0)},o(i){cA(A.$$.fragment,i),cA(g.$$.fragment,i),E=!1},d(i){AI(A,i),i&&EI(I),AI(g,i),i&&EI(C),EI(Q)}}}function zM(B,A,I){let g;GI(B,fB,Q=>I(0,g=Q));function C(Q){g=Q,fB.set(g)}return[g,C]}class By extends NI{constructor(A){super(),KI(this,A,zM,XM,lI,{})}}export{By as component};