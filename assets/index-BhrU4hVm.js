(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ka="170",Nl=0,xo=1,Ul=2,Hc=1,Wc=2,yn=3,An=0,Tt=1,on=2,kn=0,Ei=1,yo=2,vo=3,Mo=4,Fl=5,Jn=100,Ol=101,Bl=102,kl=103,zl=104,Vl=200,Gl=201,Hl=202,Wl=203,jr=204,Kr=205,ql=206,Xl=207,Yl=208,jl=209,Kl=210,$l=211,Zl=212,Ql=213,Jl=214,$r=0,Zr=1,Qr=2,Ci=3,Jr=4,ea=5,ta=6,na=7,za=0,eh=1,th=2,zn=0,nh=1,ih=2,sh=3,rh=4,ah=5,oh=6,ch=7,So="attached",lh="detached",qc=300,Ii=301,Li=302,ia=303,sa=304,ar=306,Pi=1e3,On=1001,er=1002,Rt=1003,Xc=1004,rs=1005,Ot=1006,Ys=1007,Mn=1008,En=1009,Yc=1010,jc=1011,us=1012,Va=1013,ni=1014,Qt=1015,ms=1016,Ga=1017,Ha=1018,Di=1020,Kc=35902,$c=1021,Zc=1022,Gt=1023,Qc=1024,Jc=1025,bi=1026,Ni=1027,Wa=1028,qa=1029,el=1030,Xa=1031,Ya=1033,js=33776,Ks=33777,$s=33778,Zs=33779,ra=35840,aa=35841,oa=35842,ca=35843,la=36196,ha=37492,ua=37496,da=37808,fa=37809,pa=37810,ma=37811,ga=37812,_a=37813,xa=37814,ya=37815,va=37816,Ma=37817,Sa=37818,wa=37819,Aa=37820,Ea=37821,Qs=36492,ba=36494,Ta=36495,tl=36283,Ra=36284,Ca=36285,Ia=36286,hh=2200,uh=2201,dh=2202,ds=2300,fs=2301,dr=2302,Si=2400,wi=2401,tr=2402,ja=2500,fh=2501,ph=0,nl=1,La=2,mh=3200,gh=3201,Ka=0,_h=1,Fn="",yt="srgb",It="srgb-linear",or="linear",tt="srgb",oi=7680,wo=519,xh=512,yh=513,vh=514,il=515,Mh=516,Sh=517,wh=518,Ah=519,Pa=35044,Ao="300 es",Sn=2e3,nr=2001;class ri{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Eo=1234567;const cs=Math.PI/180,Ui=180/Math.PI;function Jt(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mt[r&255]+Mt[r>>8&255]+Mt[r>>16&255]+Mt[r>>24&255]+"-"+Mt[e&255]+Mt[e>>8&255]+"-"+Mt[e>>16&15|64]+Mt[e>>24&255]+"-"+Mt[t&63|128]+Mt[t>>8&255]+"-"+Mt[t>>16&255]+Mt[t>>24&255]+Mt[n&255]+Mt[n>>8&255]+Mt[n>>16&255]+Mt[n>>24&255]).toLowerCase()}function wt(r,e,t){return Math.max(e,Math.min(t,r))}function $a(r,e){return(r%e+e)%e}function Eh(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function bh(r,e,t){return r!==e?(t-r)/(e-r):0}function ls(r,e,t){return(1-t)*r+t*e}function Th(r,e,t,n){return ls(r,e,1-Math.exp(-t*n))}function Rh(r,e=1){return e-Math.abs($a(r,e*2)-e)}function Ch(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Ih(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Lh(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Ph(r,e){return r+Math.random()*(e-r)}function Dh(r){return r*(.5-Math.random())}function Nh(r){r!==void 0&&(Eo=r);let e=Eo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Uh(r){return r*cs}function Fh(r){return r*Ui}function Oh(r){return(r&r-1)===0&&r!==0}function Bh(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function kh(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function zh(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),d=a((e-n)/2),p=s((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":r.set(o*h,c*u,c*d,o*l);break;case"YZY":r.set(c*d,o*h,c*u,o*l);break;case"ZXZ":r.set(c*u,c*d,o*h,o*l);break;case"XZX":r.set(o*h,c*g,c*p,o*l);break;case"YXY":r.set(c*p,o*h,c*g,o*l);break;case"ZYZ":r.set(c*g,c*p,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function $t(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function et(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Vh={DEG2RAD:cs,RAD2DEG:Ui,generateUUID:Jt,clamp:wt,euclideanModulo:$a,mapLinear:Eh,inverseLerp:bh,lerp:ls,damp:Th,pingpong:Rh,smoothstep:Ch,smootherstep:Ih,randInt:Lh,randFloat:Ph,randFloatSpread:Dh,seededRandom:Nh,degToRad:Uh,radToDeg:Fh,isPowerOfTwo:Oh,ceilPowerOfTwo:Bh,floorPowerOfTwo:kh,setQuaternionFromProperEuler:zh,normalize:et,denormalize:$t};class Pe{constructor(e=0,t=0){Pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Le{constructor(e,t,n,i,s,a,o,c,l){Le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l)}set(e,t,n,i,s,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],_=i[0],m=i[3],f=i[6],M=i[1],w=i[4],x=i[7],L=i[2],b=i[5],T=i[8];return s[0]=a*_+o*M+c*L,s[3]=a*m+o*w+c*b,s[6]=a*f+o*x+c*T,s[1]=l*_+h*M+u*L,s[4]=l*m+h*w+u*b,s[7]=l*f+h*x+u*T,s[2]=d*_+p*M+g*L,s[5]=d*m+p*w+g*b,s[8]=d*f+p*x+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*s*h+n*o*c+i*s*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*s,p=l*s-a*c,g=t*u+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*l-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=d*_,e[4]=(h*t-i*c)*_,e[5]=(i*s-o*t)*_,e[6]=p*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(fr.makeScale(e,t)),this}rotate(e){return this.premultiply(fr.makeRotation(-e)),this}translate(e,t){return this.premultiply(fr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const fr=new Le;function sl(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ps(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Gh(){const r=ps("canvas");return r.style.display="block",r}const bo={};function as(r){r in bo||(bo[r]=!0,console.warn(r))}function Hh(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Wh(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function qh(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ze={enabled:!0,workingColorSpace:It,spaces:{},convert:function(r,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===tt&&(r.r=wn(r.r),r.g=wn(r.g),r.b=wn(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===tt&&(r.r=Ti(r.r),r.g=Ti(r.g),r.b=Ti(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Fn?or:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function wn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ti(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const To=[.64,.33,.3,.6,.15,.06],Ro=[.2126,.7152,.0722],Co=[.3127,.329],Io=new Le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lo=new Le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ze.define({[It]:{primaries:To,whitePoint:Co,transfer:or,toXYZ:Io,fromXYZ:Lo,luminanceCoefficients:Ro,workingColorSpaceConfig:{unpackColorSpace:yt},outputColorSpaceConfig:{drawingBufferColorSpace:yt}},[yt]:{primaries:To,whitePoint:Co,transfer:tt,toXYZ:Io,fromXYZ:Lo,luminanceCoefficients:Ro,outputColorSpaceConfig:{drawingBufferColorSpace:yt}}});let ci;class Xh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ci===void 0&&(ci=ps("canvas")),ci.width=e.width,ci.height=e.height;const n=ci.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ci}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ps("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=wn(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(wn(t[n]/255)*255):t[n]=wn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Yh=0;class rl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=Jt(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(pr(i[a].image)):s.push(pr(i[a]))}else s=pr(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function pr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Xh.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jh=0;class xt extends ri{constructor(e=xt.DEFAULT_IMAGE,t=xt.DEFAULT_MAPPING,n=On,i=On,s=Ot,a=Mn,o=Gt,c=En,l=xt.DEFAULT_ANISOTROPY,h=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jh++}),this.uuid=Jt(),this.name="",this.source=new rl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pi:e.x=e.x-Math.floor(e.x);break;case On:e.x=e.x<0?0:1;break;case er:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pi:e.y=e.y-Math.floor(e.y);break;case On:e.y=e.y<0?0:1;break;case er:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}xt.DEFAULT_IMAGE=null;xt.DEFAULT_MAPPING=qc;xt.DEFAULT_ANISOTROPY=1;class je{constructor(e=0,t=0,n=0,i=1){je.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],g=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(l+1)/2,x=(p+1)/2,L=(f+1)/2,b=(h+d)/4,T=(u+_)/4,I=(g+m)/4;return w>x&&w>L?w<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(w),i=b/n,s=T/n):x>L?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=b/i,s=I/i):L<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(L),n=T/s,i=I/s),this.set(n,i,s,t),this}let M=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-_)/M,this.z=(d-h)/M,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Kh extends ri{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new je(0,0,e,t),this.scissorTest=!1,this.viewport=new je(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ot,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new xt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new rl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ii extends Kh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class al extends xt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $h extends xt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class en{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=s[a+0],p=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==d||l!==p||h!==g){let m=1-o;const f=c*d+l*p+h*g+u*_,M=f>=0?1:-1,w=1-f*f;if(w>Number.EPSILON){const L=Math.sqrt(w),b=Math.atan2(L,f*M);m=Math.sin(m*b)/L,o=Math.sin(o*b)/L}const x=o*M;if(c=c*m+d*x,l=l*m+p*x,h=h*m+g*x,u=u*m+_*x,m===1-o){const L=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=L,l*=L,h*=L,u*=L}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[a],d=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+h*u+c*p-l*d,e[t+1]=c*g+h*d+l*u-o*p,e[t+2]=l*g+h*p+o*d-c*u,e[t+3]=h*g-o*u-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(s/2),d=c(n/2),p=c(i/2),g=c(s/2);switch(a){case"XYZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"YZX":this._x=d*h*u+l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u-d*p*g;break;case"XZY":this._x=d*h*u-l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-l)*p,this._z=(a-i)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+l)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(s-l)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(s+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-s*c,this._y=i*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Po.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Po.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-s*i),u=2*(s*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-s*u,this.z=i+c*u+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return mr.copy(this).projectOnVector(e),this.sub(mr)}reflect(e){return this.sub(mr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mr=new C,Po=new en;class nn{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Xt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Xt):Xt.fromBufferAttribute(s,a),Xt.applyMatrix4(e.matrixWorld),this.expandByPoint(Xt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vs.copy(n.boundingBox)),vs.applyMatrix4(e.matrixWorld),this.union(vs)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xt),Xt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($i),Ms.subVectors(this.max,$i),li.subVectors(e.a,$i),hi.subVectors(e.b,$i),ui.subVectors(e.c,$i),Cn.subVectors(hi,li),In.subVectors(ui,hi),Wn.subVectors(li,ui);let t=[0,-Cn.z,Cn.y,0,-In.z,In.y,0,-Wn.z,Wn.y,Cn.z,0,-Cn.x,In.z,0,-In.x,Wn.z,0,-Wn.x,-Cn.y,Cn.x,0,-In.y,In.x,0,-Wn.y,Wn.x,0];return!gr(t,li,hi,ui,Ms)||(t=[1,0,0,0,1,0,0,0,1],!gr(t,li,hi,ui,Ms))?!1:(Ss.crossVectors(Cn,In),t=[Ss.x,Ss.y,Ss.z],gr(t,li,hi,ui,Ms))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const fn=[new C,new C,new C,new C,new C,new C,new C,new C],Xt=new C,vs=new nn,li=new C,hi=new C,ui=new C,Cn=new C,In=new C,Wn=new C,$i=new C,Ms=new C,Ss=new C,qn=new C;function gr(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){qn.fromArray(r,s);const o=i.x*Math.abs(qn.x)+i.y*Math.abs(qn.y)+i.z*Math.abs(qn.z),c=e.dot(qn),l=t.dot(qn),h=n.dot(qn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Zh=new nn,Zi=new C,_r=new C;class cn{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Zh.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zi.subVectors(e,this.center);const t=Zi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Zi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_r.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zi.copy(e.center).add(_r)),this.expandByPoint(Zi.copy(e.center).sub(_r))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pn=new C,xr=new C,ws=new C,Ln=new C,yr=new C,As=new C,vr=new C;class gs{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pn.copy(this.origin).addScaledVector(this.direction,t),pn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){xr.copy(e).add(t).multiplyScalar(.5),ws.copy(t).sub(e).normalize(),Ln.copy(this.origin).sub(xr);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ws),o=Ln.dot(this.direction),c=-Ln.dot(ws),l=Ln.lengthSq(),h=Math.abs(1-a*a);let u,d,p,g;if(h>0)if(u=a*c-o,d=a*o-c,g=s*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,p=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-c),s),p=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+l):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-c),s),p=-u*u+d*(d+2*c)+l);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(xr).addScaledVector(ws,d),p}intersectSphere(e,t){pn.subVectors(e.center,this.origin);const n=pn.dot(this.direction),i=pn.dot(pn)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,pn)!==null}intersectTriangle(e,t,n,i,s){yr.subVectors(t,e),As.subVectors(n,e),vr.crossVectors(yr,As);let a=this.direction.dot(vr),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ln.subVectors(this.origin,e);const c=o*this.direction.dot(As.crossVectors(Ln,As));if(c<0)return null;const l=o*this.direction.dot(yr.cross(Ln));if(l<0||c+l>a)return null;const h=-o*Ln.dot(vr);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class De{constructor(e,t,n,i,s,a,o,c,l,h,u,d,p,g,_,m){De.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l,h,u,d,p,g,_,m)}set(e,t,n,i,s,a,o,c,l,h,u,d,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=s,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new De().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/di.setFromMatrixColumn(e,0).length(),s=1/di.setFromMatrixColumn(e,1).length(),a=1/di.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=a*h,p=a*u,g=o*h,_=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+g*l,t[5]=d-_*l,t[9]=-o*c,t[2]=_-d*l,t[6]=g+p*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*h,p=c*u,g=l*h,_=l*u;t[0]=d+_*o,t[4]=g*o-p,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=_+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*h,p=c*u,g=l*h,_=l*u;t[0]=d-_*o,t[4]=-a*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*h,p=a*u,g=o*h,_=o*u;t[0]=c*h,t[4]=g*l-p,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=p*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,p=a*l,g=o*c,_=o*l;t[0]=c*h,t[4]=_-d*u,t[8]=g*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=a*c,p=a*l,g=o*c,_=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=a*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qh,e,Jh)}lookAt(e,t,n){const i=this.elements;return Ut.subVectors(e,t),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),Pn.crossVectors(n,Ut),Pn.lengthSq()===0&&(Math.abs(n.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),Pn.crossVectors(n,Ut)),Pn.normalize(),Es.crossVectors(Ut,Pn),i[0]=Pn.x,i[4]=Es.x,i[8]=Ut.x,i[1]=Pn.y,i[5]=Es.y,i[9]=Ut.y,i[2]=Pn.z,i[6]=Es.z,i[10]=Ut.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],M=n[3],w=n[7],x=n[11],L=n[15],b=i[0],T=i[4],I=i[8],A=i[12],v=i[1],R=i[5],B=i[9],F=i[13],W=i[2],X=i[6],G=i[10],j=i[14],V=i[3],te=i[7],re=i[11],ve=i[15];return s[0]=a*b+o*v+c*W+l*V,s[4]=a*T+o*R+c*X+l*te,s[8]=a*I+o*B+c*G+l*re,s[12]=a*A+o*F+c*j+l*ve,s[1]=h*b+u*v+d*W+p*V,s[5]=h*T+u*R+d*X+p*te,s[9]=h*I+u*B+d*G+p*re,s[13]=h*A+u*F+d*j+p*ve,s[2]=g*b+_*v+m*W+f*V,s[6]=g*T+_*R+m*X+f*te,s[10]=g*I+_*B+m*G+f*re,s[14]=g*A+_*F+m*j+f*ve,s[3]=M*b+w*v+x*W+L*V,s[7]=M*T+w*R+x*X+L*te,s[11]=M*I+w*B+x*G+L*re,s[15]=M*A+w*F+x*j+L*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+s*c*u-i*l*u-s*o*d+n*l*d+i*o*p-n*c*p)+_*(+t*c*p-t*l*d+s*a*d-i*a*p+i*l*h-s*c*h)+m*(+t*l*u-t*o*p-s*a*u+n*a*p+s*o*h-n*l*h)+f*(-i*o*h-t*c*u+t*o*d+i*a*u-n*a*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],M=u*m*l-_*d*l+_*c*p-o*m*p-u*c*f+o*d*f,w=g*d*l-h*m*l-g*c*p+a*m*p+h*c*f-a*d*f,x=h*_*l-g*u*l+g*o*p-a*_*p-h*o*f+a*u*f,L=g*u*c-h*_*c-g*o*d+a*_*d+h*o*m-a*u*m,b=t*M+n*w+i*x+s*L;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/b;return e[0]=M*T,e[1]=(_*d*s-u*m*s-_*i*p+n*m*p+u*i*f-n*d*f)*T,e[2]=(o*m*s-_*c*s+_*i*l-n*m*l-o*i*f+n*c*f)*T,e[3]=(u*c*s-o*d*s-u*i*l+n*d*l+o*i*p-n*c*p)*T,e[4]=w*T,e[5]=(h*m*s-g*d*s+g*i*p-t*m*p-h*i*f+t*d*f)*T,e[6]=(g*c*s-a*m*s-g*i*l+t*m*l+a*i*f-t*c*f)*T,e[7]=(a*d*s-h*c*s+h*i*l-t*d*l-a*i*p+t*c*p)*T,e[8]=x*T,e[9]=(g*u*s-h*_*s-g*n*p+t*_*p+h*n*f-t*u*f)*T,e[10]=(a*_*s-g*o*s+g*n*l-t*_*l-a*n*f+t*o*f)*T,e[11]=(h*o*s-a*u*s-h*n*l+t*u*l+a*n*p-t*o*p)*T,e[12]=L*T,e[13]=(h*_*i-g*u*i+g*n*d-t*_*d-h*n*m+t*u*m)*T,e[14]=(g*o*i-a*_*i-g*n*c+t*_*c+a*n*m-t*o*m)*T,e[15]=(a*u*i-h*o*i+h*n*c-t*u*c-a*n*d+t*o*d)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,u=o+o,d=s*l,p=s*h,g=s*u,_=a*h,m=a*u,f=o*u,M=c*l,w=c*h,x=c*u,L=n.x,b=n.y,T=n.z;return i[0]=(1-(_+f))*L,i[1]=(p+x)*L,i[2]=(g-w)*L,i[3]=0,i[4]=(p-x)*b,i[5]=(1-(d+f))*b,i[6]=(m+M)*b,i[7]=0,i[8]=(g+w)*T,i[9]=(m-M)*T,i[10]=(1-(d+_))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=di.set(i[0],i[1],i[2]).length();const a=di.set(i[4],i[5],i[6]).length(),o=di.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Yt.copy(this);const l=1/s,h=1/a,u=1/o;return Yt.elements[0]*=l,Yt.elements[1]*=l,Yt.elements[2]*=l,Yt.elements[4]*=h,Yt.elements[5]*=h,Yt.elements[6]*=h,Yt.elements[8]*=u,Yt.elements[9]*=u,Yt.elements[10]*=u,t.setFromRotationMatrix(Yt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=Sn){const c=this.elements,l=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let p,g;if(o===Sn)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===nr)p=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Sn){const c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(a-s),d=(t+e)*l,p=(n+i)*h;let g,_;if(o===Sn)g=(a+s)*u,_=-2*u;else if(o===nr)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const di=new C,Yt=new De,Qh=new C(0,0,0),Jh=new C(1,1,1),Pn=new C,Es=new C,Ut=new C,Do=new De,No=new en;class sn{constructor(e=0,t=0,n=0,i=sn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(wt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-wt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(wt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Do.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Do,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return No.setFromEuler(this),this.setFromQuaternion(No,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sn.DEFAULT_ORDER="XYZ";class ol{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let eu=0;const Uo=new C,fi=new en,mn=new De,bs=new C,Qi=new C,tu=new C,nu=new en,Fo=new C(1,0,0),Oo=new C(0,1,0),Bo=new C(0,0,1),ko={type:"added"},iu={type:"removed"},pi={type:"childadded",child:null},Mr={type:"childremoved",child:null};class ot extends ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eu++}),this.uuid=Jt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ot.DEFAULT_UP.clone();const e=new C,t=new sn,n=new en,i=new C(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new De},normalMatrix:{value:new Le}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ol,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fi.setFromAxisAngle(e,t),this.quaternion.multiply(fi),this}rotateOnWorldAxis(e,t){return fi.setFromAxisAngle(e,t),this.quaternion.premultiply(fi),this}rotateX(e){return this.rotateOnAxis(Fo,e)}rotateY(e){return this.rotateOnAxis(Oo,e)}rotateZ(e){return this.rotateOnAxis(Bo,e)}translateOnAxis(e,t){return Uo.copy(e).applyQuaternion(this.quaternion),this.position.add(Uo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fo,e)}translateY(e){return this.translateOnAxis(Oo,e)}translateZ(e){return this.translateOnAxis(Bo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?bs.copy(e):bs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(Qi,bs,this.up):mn.lookAt(bs,Qi,this.up),this.quaternion.setFromRotationMatrix(mn),i&&(mn.extractRotation(i.matrixWorld),fi.setFromRotationMatrix(mn),this.quaternion.premultiply(fi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ko),pi.child=e,this.dispatchEvent(pi),pi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(iu),Mr.child=e,this.dispatchEvent(Mr),Mr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(mn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ko),pi.child=e,this.dispatchEvent(pi),pi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,e,tu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,nu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ot.DEFAULT_UP=new C(0,1,0);ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jt=new C,gn=new C,Sr=new C,_n=new C,mi=new C,gi=new C,zo=new C,wr=new C,Ar=new C,Er=new C,br=new je,Tr=new je,Rr=new je;class Zt{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),jt.subVectors(e,t),i.cross(jt);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){jt.subVectors(i,t),gn.subVectors(n,t),Sr.subVectors(e,t);const a=jt.dot(jt),o=jt.dot(gn),c=jt.dot(Sr),l=gn.dot(gn),h=gn.dot(Sr),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,p=(l*c-o*h)*d,g=(a*h-o*c)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,_n)===null?!1:_n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getInterpolation(e,t,n,i,s,a,o,c){return this.getBarycoord(e,t,n,i,_n)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,_n.x),c.addScaledVector(a,_n.y),c.addScaledVector(o,_n.z),c)}static getInterpolatedAttribute(e,t,n,i,s,a){return br.setScalar(0),Tr.setScalar(0),Rr.setScalar(0),br.fromBufferAttribute(e,t),Tr.fromBufferAttribute(e,n),Rr.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(br,s.x),a.addScaledVector(Tr,s.y),a.addScaledVector(Rr,s.z),a}static isFrontFacing(e,t,n,i){return jt.subVectors(n,t),gn.subVectors(e,t),jt.cross(gn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jt.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),jt.cross(gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Zt.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Zt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;mi.subVectors(i,n),gi.subVectors(s,n),wr.subVectors(e,n);const c=mi.dot(wr),l=gi.dot(wr);if(c<=0&&l<=0)return t.copy(n);Ar.subVectors(e,i);const h=mi.dot(Ar),u=gi.dot(Ar);if(h>=0&&u<=h)return t.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(mi,a);Er.subVectors(e,s);const p=mi.dot(Er),g=gi.dot(Er);if(g>=0&&p<=g)return t.copy(s);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(gi,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return zo.subVectors(s,i),o=(u-h)/(u-h+(p-g)),t.copy(i).addScaledVector(zo,o);const f=1/(m+_+d);return a=_*f,o=d*f,t.copy(n).addScaledVector(mi,a).addScaledVector(gi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const cl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dn={h:0,s:0,l:0},Ts={h:0,s:0,l:0};function Cr(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Se{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ze.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,ze.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ze.workingColorSpace){if(e=$a(e,1),t=wt(t,0,1),n=wt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Cr(a,s,e+1/3),this.g=Cr(a,s,e),this.b=Cr(a,s,e-1/3)}return ze.toWorkingColorSpace(this,i),this}setStyle(e,t=yt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yt){const n=cl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wn(e.r),this.g=wn(e.g),this.b=wn(e.b),this}copyLinearToSRGB(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yt){return ze.fromWorkingColorSpace(St.copy(this),e),Math.round(wt(St.r*255,0,255))*65536+Math.round(wt(St.g*255,0,255))*256+Math.round(wt(St.b*255,0,255))}getHexString(e=yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ze.workingColorSpace){ze.fromWorkingColorSpace(St.copy(this),t);const n=St.r,i=St.g,s=St.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ze.workingColorSpace){return ze.fromWorkingColorSpace(St.copy(this),t),e.r=St.r,e.g=St.g,e.b=St.b,e}getStyle(e=yt){ze.fromWorkingColorSpace(St.copy(this),e);const t=St.r,n=St.g,i=St.b;return e!==yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Dn),this.setHSL(Dn.h+e,Dn.s+t,Dn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Dn),e.getHSL(Ts);const n=ls(Dn.h,Ts.h,t),i=ls(Dn.s,Ts.s,t),s=ls(Dn.l,Ts.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const St=new Se;Se.NAMES=cl;let su=0;class tn extends ri{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:su++}),this.uuid=Jt(),this.name="",this.blending=Ei,this.side=An,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jr,this.blendDst=Kr,this.blendEquation=Jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=Ci,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oi,this.stencilZFail=oi,this.stencilZPass=oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ei&&(n.blending=this.blending),this.side!==An&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==jr&&(n.blendSrc=this.blendSrc),this.blendDst!==Kr&&(n.blendDst=this.blendDst),this.blendEquation!==Jn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ci&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Dt extends tn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=za,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pt=new C,Rs=new Pe;class Ct{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Pa,this.updateRanges=[],this.gpuType=Qt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Rs.fromBufferAttribute(this,t),Rs.applyMatrix3(e),this.setXY(t,Rs.x,Rs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix3(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=$t(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$t(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$t(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$t(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$t(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),s=et(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pa&&(e.usage=this.usage),e}}class ll extends Ct{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class hl extends Ct{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ct extends Ct{constructor(e,t,n){super(new Float32Array(e),t,n)}}let ru=0;const zt=new De,Ir=new ot,_i=new C,Ft=new nn,Ji=new nn,_t=new C;class Lt extends ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ru++}),this.uuid=Jt(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sl(e)?hl:ll)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Le().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zt.makeRotationFromQuaternion(e),this.applyMatrix4(zt),this}rotateX(e){return zt.makeRotationX(e),this.applyMatrix4(zt),this}rotateY(e){return zt.makeRotationY(e),this.applyMatrix4(zt),this}rotateZ(e){return zt.makeRotationZ(e),this.applyMatrix4(zt),this}translate(e,t,n){return zt.makeTranslation(e,t,n),this.applyMatrix4(zt),this}scale(e,t,n){return zt.makeScale(e,t,n),this.applyMatrix4(zt),this}lookAt(e){return Ir.lookAt(e),Ir.updateMatrix(),this.applyMatrix4(Ir.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_i).negate(),this.translate(_i.x,_i.y,_i.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ct(n,3))}else{for(let n=0,i=t.count;n<i;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Ft.setFromBufferAttribute(s),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,Ft.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,Ft.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(Ft.min),this.boundingBox.expandByPoint(Ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(Ft.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ji.setFromBufferAttribute(o),this.morphTargetsRelative?(_t.addVectors(Ft.min,Ji.min),Ft.expandByPoint(_t),_t.addVectors(Ft.max,Ji.max),Ft.expandByPoint(_t)):(Ft.expandByPoint(Ji.min),Ft.expandByPoint(Ji.max))}Ft.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)_t.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(_t));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)_t.fromBufferAttribute(o,l),c&&(_i.fromBufferAttribute(e,l),_t.add(_i)),i=Math.max(i,n.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ct(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let I=0;I<n.count;I++)o[I]=new C,c[I]=new C;const l=new C,h=new C,u=new C,d=new Pe,p=new Pe,g=new Pe,_=new C,m=new C;function f(I,A,v){l.fromBufferAttribute(n,I),h.fromBufferAttribute(n,A),u.fromBufferAttribute(n,v),d.fromBufferAttribute(s,I),p.fromBufferAttribute(s,A),g.fromBufferAttribute(s,v),h.sub(l),u.sub(l),p.sub(d),g.sub(d);const R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(R),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(R),o[I].add(_),o[A].add(_),o[v].add(_),c[I].add(m),c[A].add(m),c[v].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let I=0,A=M.length;I<A;++I){const v=M[I],R=v.start,B=v.count;for(let F=R,W=R+B;F<W;F+=3)f(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const w=new C,x=new C,L=new C,b=new C;function T(I){L.fromBufferAttribute(i,I),b.copy(L);const A=o[I];w.copy(A),w.sub(L.multiplyScalar(L.dot(A))).normalize(),x.crossVectors(b,A);const R=x.dot(c[I])<0?-1:1;a.setXYZW(I,w.x,w.y,w.z,R)}for(let I=0,A=M.length;I<A;++I){const v=M[I],R=v.start,B=v.count;for(let F=R,W=R+B;F<W;F+=3)T(e.getX(F+0)),T(e.getX(F+1)),T(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ct(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new C,s=new C,a=new C,o=new C,c=new C,l=new C,h=new C,u=new C;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?p=c[_]*o.data.stride+o.offset:p=c[_]*h;for(let f=0;f<h;f++)d[g++]=l[p++]}return new Ct(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Lt,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],p=e(d,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],u=s[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vo=new De,Xn=new gs,Cs=new cn,Go=new C,Is=new C,Ls=new C,Ps=new C,Lr=new C,Ds=new C,Ho=new C,Ns=new C;class ne extends ot{constructor(e=new Lt,t=new Dt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Ds.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],u=s[c];h!==0&&(Lr.fromBufferAttribute(u,e),a?Ds.addScaledVector(Lr,h):Ds.addScaledVector(Lr.sub(t),h))}t.add(Ds)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Cs.copy(n.boundingSphere),Cs.applyMatrix4(s),Xn.copy(e.ray).recast(e.near),!(Cs.containsPoint(Xn.origin)===!1&&(Xn.intersectSphere(Cs,Go)===null||Xn.origin.distanceToSquared(Go)>(e.far-e.near)**2))&&(Vo.copy(s).invert(),Xn.copy(e.ray).applyMatrix4(Vo),!(n.boundingBox!==null&&Xn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Xn)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=a[m.materialIndex],M=Math.max(m.start,p.start),w=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=M,L=w;x<L;x+=3){const b=o.getX(x),T=o.getX(x+1),I=o.getX(x+2);i=Us(this,f,e,n,l,h,u,b,T,I),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const M=o.getX(m),w=o.getX(m+1),x=o.getX(m+2);i=Us(this,a,e,n,l,h,u,M,w,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=a[m.materialIndex],M=Math.max(m.start,p.start),w=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let x=M,L=w;x<L;x+=3){const b=x,T=x+1,I=x+2;i=Us(this,f,e,n,l,h,u,b,T,I),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const M=m,w=m+1,x=m+2;i=Us(this,a,e,n,l,h,u,M,w,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function au(r,e,t,n,i,s,a,o){let c;if(e.side===Tt?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,e.side===An,o),c===null)return null;Ns.copy(o),Ns.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Ns);return l<t.near||l>t.far?null:{distance:l,point:Ns.clone(),object:r}}function Us(r,e,t,n,i,s,a,o,c,l){r.getVertexPosition(o,Is),r.getVertexPosition(c,Ls),r.getVertexPosition(l,Ps);const h=au(r,e,t,n,Is,Ls,Ps,Ho);if(h){const u=new C;Zt.getBarycoord(Ho,Is,Ls,Ps,u),i&&(h.uv=Zt.getInterpolatedAttribute(i,o,c,l,u,new Pe)),s&&(h.uv1=Zt.getInterpolatedAttribute(s,o,c,l,u,new Pe)),a&&(h.normal=Zt.getInterpolatedAttribute(a,o,c,l,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new C,materialIndex:0};Zt.getNormal(Is,Ls,Ps,d.normal),h.face=d,h.barycoord=u}return h}class Be extends Lt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new ct(l,3)),this.setAttribute("normal",new ct(h,3)),this.setAttribute("uv",new ct(u,2));function g(_,m,f,M,w,x,L,b,T,I,A){const v=x/T,R=L/I,B=x/2,F=L/2,W=b/2,X=T+1,G=I+1;let j=0,V=0;const te=new C;for(let re=0;re<G;re++){const ve=re*R-F;for(let Ne=0;Ne<X;Ne++){const Qe=Ne*v-B;te[_]=Qe*M,te[m]=ve*w,te[f]=W,l.push(te.x,te.y,te.z),te[_]=0,te[m]=0,te[f]=b>0?1:-1,h.push(te.x,te.y,te.z),u.push(Ne/T),u.push(1-re/I),j+=1}}for(let re=0;re<I;re++)for(let ve=0;ve<T;ve++){const Ne=d+ve+X*re,Qe=d+ve+X*(re+1),q=d+(ve+1)+X*(re+1),Q=d+(ve+1)+X*re;c.push(Ne,Qe,Q),c.push(Qe,q,Q),V+=6}o.addGroup(p,V,A),p+=V,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Be(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fi(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Et(r){const e={};for(let t=0;t<r.length;t++){const n=Fi(r[t]);for(const i in n)e[i]=n[i]}return e}function ou(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function ul(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ze.workingColorSpace}const cu={clone:Fi,merge:Et};var lu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bn extends tn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lu,this.fragmentShader=hu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fi(e.uniforms),this.uniformsGroups=ou(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class dl extends ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De,this.coordinateSystem=Sn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Nn=new C,Wo=new Pe,qo=new Pe;class bt extends dl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ui*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ui*2*Math.atan(Math.tan(cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Nn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Nn.x,Nn.y).multiplyScalar(-e/Nn.z),Nn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Nn.x,Nn.y).multiplyScalar(-e/Nn.z)}getViewSize(e,t){return this.getViewBounds(e,Wo,qo),t.subVectors(qo,Wo)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(cs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const xi=-90,yi=1;class uu extends ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new bt(xi,yi,e,t);i.layers=this.layers,this.add(i);const s=new bt(xi,yi,e,t);s.layers=this.layers,this.add(s);const a=new bt(xi,yi,e,t);a.layers=this.layers,this.add(a);const o=new bt(xi,yi,e,t);o.layers=this.layers,this.add(o);const c=new bt(xi,yi,e,t);c.layers=this.layers,this.add(c);const l=new bt(xi,yi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===nr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class fl extends xt{constructor(e,t,n,i,s,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Ii,super(e,t,n,i,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class du extends ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new fl(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ot}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Be(5,5,5),s=new bn({name:"CubemapFromEquirect",uniforms:Fi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tt,blending:kn});s.uniforms.tEquirect.value=t;const a=new ne(i,s),o=t.minFilter;return t.minFilter===Mn&&(t.minFilter=Ot),new uu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const Pr=new C,fu=new C,pu=new Le;class Zn{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Pr.subVectors(n,t).cross(fu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Pr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||pu.getNormalMatrix(e),i=this.coplanarPoint(Pr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yn=new cn,Fs=new C;class Za{constructor(e=new Zn,t=new Zn,n=new Zn,i=new Zn,s=new Zn,a=new Zn){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Sn){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],p=i[8],g=i[9],_=i[10],m=i[11],f=i[12],M=i[13],w=i[14],x=i[15];if(n[0].setComponents(c-s,d-l,m-p,x-f).normalize(),n[1].setComponents(c+s,d+l,m+p,x+f).normalize(),n[2].setComponents(c+a,d+h,m+g,x+M).normalize(),n[3].setComponents(c-a,d-h,m-g,x-M).normalize(),n[4].setComponents(c-o,d-u,m-_,x-w).normalize(),t===Sn)n[5].setComponents(c+o,d+u,m+_,x+w).normalize();else if(t===nr)n[5].setComponents(o,u,_,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yn)}intersectsSprite(e){return Yn.center.set(0,0,0),Yn.radius=.7071067811865476,Yn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Fs.x=i.normal.x>0?e.max.x:e.min.x,Fs.y=i.normal.y>0?e.max.y:e.min.y,Fs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Fs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function pl(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function mu(r){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,u=l.byteLength,d=r.createBuffer();r.bindBuffer(c,d),r.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=r.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=r.HALF_FLOAT:p=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=r.SHORT;else if(l instanceof Uint32Array)p=r.UNSIGNED_INT;else if(l instanceof Int32Array)p=r.INT;else if(l instanceof Int8Array)p=r.BYTE;else if(l instanceof Uint8Array)p=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(r.bindBuffer(l,o),u.length===0)r.bufferSubData(l,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];r.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(r.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:s,update:a}}class Gn extends Lt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,d=t/c,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const M=f*d-a;for(let w=0;w<l;w++){const x=w*u-s;g.push(x,-M,0),_.push(0,0,1),m.push(w/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let M=0;M<o;M++){const w=M+l*f,x=M+l*(f+1),L=M+1+l*(f+1),b=M+1+l*f;p.push(w,x,b),p.push(x,L,b)}this.setIndex(p),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(_,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gn(e.width,e.height,e.widthSegments,e.heightSegments)}}var gu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_u=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,xu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Su=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Au=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Eu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ru=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cu=`#ifdef USE_IRIDESCENCE
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
#endif`,Iu=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Lu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Pu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Du=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Uu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ou=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ku=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
} // validated`,zu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,Vu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Gu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ju=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Ku=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$u=`#ifdef USE_ENVMAP
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
#endif`,Zu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qu=`#ifdef USE_ENVMAP
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
#endif`,Ju=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ed=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,td=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,id=`#ifdef USE_GRADIENTMAP
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
}`,sd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ad=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,od=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,cd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,ld=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ud=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,pd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,md=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_d=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Md=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ad=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ed=`#if defined( USE_POINTS_UV )
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
#endif`,bd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Td=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Id=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ld=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Pd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
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
vec3 nonPerturbedNormal = normal;`,Nd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ud=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Od=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bd=`#ifdef USE_NORMALMAP
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
#endif`,kd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,qd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$d=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Qd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Jd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ef=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,tf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rf=`#ifdef USE_SKINNING
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
#endif`,af=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,of=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lf=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hf=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,uf=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ff=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_f=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,wf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Af=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Ef=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,bf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rf=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cf=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,If=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Lf=`uniform vec3 diffuse;
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
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Df=`#define LAMBERT
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Uf=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ff=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Of=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Bf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,kf=`#define PHONG
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Vf=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Hf=`#define TOON
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wf=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,qf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Yf=`uniform vec3 color;
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
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Kf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:gu,alphahash_pars_fragment:_u,alphamap_fragment:xu,alphamap_pars_fragment:yu,alphatest_fragment:vu,alphatest_pars_fragment:Mu,aomap_fragment:Su,aomap_pars_fragment:wu,batching_pars_vertex:Au,batching_vertex:Eu,begin_vertex:bu,beginnormal_vertex:Tu,bsdfs:Ru,iridescence_fragment:Cu,bumpmap_pars_fragment:Iu,clipping_planes_fragment:Lu,clipping_planes_pars_fragment:Pu,clipping_planes_pars_vertex:Du,clipping_planes_vertex:Nu,color_fragment:Uu,color_pars_fragment:Fu,color_pars_vertex:Ou,color_vertex:Bu,common:ku,cube_uv_reflection_fragment:zu,defaultnormal_vertex:Vu,displacementmap_pars_vertex:Gu,displacementmap_vertex:Hu,emissivemap_fragment:Wu,emissivemap_pars_fragment:qu,colorspace_fragment:Xu,colorspace_pars_fragment:Yu,envmap_fragment:ju,envmap_common_pars_fragment:Ku,envmap_pars_fragment:$u,envmap_pars_vertex:Zu,envmap_physical_pars_fragment:cd,envmap_vertex:Qu,fog_vertex:Ju,fog_pars_vertex:ed,fog_fragment:td,fog_pars_fragment:nd,gradientmap_pars_fragment:id,lightmap_pars_fragment:sd,lights_lambert_fragment:rd,lights_lambert_pars_fragment:ad,lights_pars_begin:od,lights_toon_fragment:ld,lights_toon_pars_fragment:hd,lights_phong_fragment:ud,lights_phong_pars_fragment:dd,lights_physical_fragment:fd,lights_physical_pars_fragment:pd,lights_fragment_begin:md,lights_fragment_maps:gd,lights_fragment_end:_d,logdepthbuf_fragment:xd,logdepthbuf_pars_fragment:yd,logdepthbuf_pars_vertex:vd,logdepthbuf_vertex:Md,map_fragment:Sd,map_pars_fragment:wd,map_particle_fragment:Ad,map_particle_pars_fragment:Ed,metalnessmap_fragment:bd,metalnessmap_pars_fragment:Td,morphinstance_vertex:Rd,morphcolor_vertex:Cd,morphnormal_vertex:Id,morphtarget_pars_vertex:Ld,morphtarget_vertex:Pd,normal_fragment_begin:Dd,normal_fragment_maps:Nd,normal_pars_fragment:Ud,normal_pars_vertex:Fd,normal_vertex:Od,normalmap_pars_fragment:Bd,clearcoat_normal_fragment_begin:kd,clearcoat_normal_fragment_maps:zd,clearcoat_pars_fragment:Vd,iridescence_pars_fragment:Gd,opaque_fragment:Hd,packing:Wd,premultiplied_alpha_fragment:qd,project_vertex:Xd,dithering_fragment:Yd,dithering_pars_fragment:jd,roughnessmap_fragment:Kd,roughnessmap_pars_fragment:$d,shadowmap_pars_fragment:Zd,shadowmap_pars_vertex:Qd,shadowmap_vertex:Jd,shadowmask_pars_fragment:ef,skinbase_vertex:tf,skinning_pars_vertex:nf,skinning_vertex:sf,skinnormal_vertex:rf,specularmap_fragment:af,specularmap_pars_fragment:of,tonemapping_fragment:cf,tonemapping_pars_fragment:lf,transmission_fragment:hf,transmission_pars_fragment:uf,uv_pars_fragment:df,uv_pars_vertex:ff,uv_vertex:pf,worldpos_vertex:mf,background_vert:gf,background_frag:_f,backgroundCube_vert:xf,backgroundCube_frag:yf,cube_vert:vf,cube_frag:Mf,depth_vert:Sf,depth_frag:wf,distanceRGBA_vert:Af,distanceRGBA_frag:Ef,equirect_vert:bf,equirect_frag:Tf,linedashed_vert:Rf,linedashed_frag:Cf,meshbasic_vert:If,meshbasic_frag:Lf,meshlambert_vert:Pf,meshlambert_frag:Df,meshmatcap_vert:Nf,meshmatcap_frag:Uf,meshnormal_vert:Ff,meshnormal_frag:Of,meshphong_vert:Bf,meshphong_frag:kf,meshphysical_vert:zf,meshphysical_frag:Vf,meshtoon_vert:Gf,meshtoon_frag:Hf,points_vert:Wf,points_frag:qf,shadow_vert:Xf,shadow_frag:Yf,sprite_vert:jf,sprite_frag:Kf},ie={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},an={basic:{uniforms:Et([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Et([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Se(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Et([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Et([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Et([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new Se(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Et([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Et([ie.points,ie.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Et([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Et([ie.common,ie.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Et([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Et([ie.sprite,ie.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:Et([ie.common,ie.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:Et([ie.lights,ie.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};an.physical={uniforms:Et([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const Os={r:0,b:0,g:0},jn=new sn,$f=new De;function Zf(r,e,t,n,i,s,a){const o=new Se(0);let c=s===!0?0:1,l,h,u=null,d=0,p=null;function g(M){let w=M.isScene===!0?M.background:null;return w&&w.isTexture&&(w=(M.backgroundBlurriness>0?t:e).get(w)),w}function _(M){let w=!1;const x=g(M);x===null?f(o,c):x&&x.isColor&&(f(x,1),w=!0);const L=r.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(M,w){const x=g(w);x&&(x.isCubeTexture||x.mapping===ar)?(h===void 0&&(h=new ne(new Be(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:Fi(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:Tt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),jn.copy(w.backgroundRotation),jn.x*=-1,jn.y*=-1,jn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(jn.y*=-1,jn.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4($f.makeRotationFromEuler(jn)),h.material.toneMapped=ze.getTransfer(x.colorSpace)!==tt,(u!==x||d!==x.version||p!==r.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,p=r.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new ne(new Gn(2,2),new bn({name:"BackgroundMaterial",uniforms:Fi(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=ze.getTransfer(x.colorSpace)!==tt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||p!==r.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,p=r.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function f(M,w){M.getRGB(Os,ul(r)),n.buffers.color.setClear(Os.r,Os.g,Os.b,w,a)}return{getClearColor:function(){return o},setClearColor:function(M,w=1){o.set(M),c=w,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,f(o,c)},render:_,addToRenderList:m}}function Qf(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,a=!1;function o(v,R,B,F,W){let X=!1;const G=u(F,B,R);s!==G&&(s=G,l(s.object)),X=p(v,F,B,W),X&&g(v,F,B,W),W!==null&&e.update(W,r.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,x(v,R,B,F),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return r.createVertexArray()}function l(v){return r.bindVertexArray(v)}function h(v){return r.deleteVertexArray(v)}function u(v,R,B){const F=B.wireframe===!0;let W=n[v.id];W===void 0&&(W={},n[v.id]=W);let X=W[R.id];X===void 0&&(X={},W[R.id]=X);let G=X[F];return G===void 0&&(G=d(c()),X[F]=G),G}function d(v){const R=[],B=[],F=[];for(let W=0;W<t;W++)R[W]=0,B[W]=0,F[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:B,attributeDivisors:F,object:v,attributes:{},index:null}}function p(v,R,B,F){const W=s.attributes,X=R.attributes;let G=0;const j=B.getAttributes();for(const V in j)if(j[V].location>=0){const re=W[V];let ve=X[V];if(ve===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(ve=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(ve=v.instanceColor)),re===void 0||re.attribute!==ve||ve&&re.data!==ve.data)return!0;G++}return s.attributesNum!==G||s.index!==F}function g(v,R,B,F){const W={},X=R.attributes;let G=0;const j=B.getAttributes();for(const V in j)if(j[V].location>=0){let re=X[V];re===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(re=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(re=v.instanceColor));const ve={};ve.attribute=re,re&&re.data&&(ve.data=re.data),W[V]=ve,G++}s.attributes=W,s.attributesNum=G,s.index=F}function _(){const v=s.newAttributes;for(let R=0,B=v.length;R<B;R++)v[R]=0}function m(v){f(v,0)}function f(v,R){const B=s.newAttributes,F=s.enabledAttributes,W=s.attributeDivisors;B[v]=1,F[v]===0&&(r.enableVertexAttribArray(v),F[v]=1),W[v]!==R&&(r.vertexAttribDivisor(v,R),W[v]=R)}function M(){const v=s.newAttributes,R=s.enabledAttributes;for(let B=0,F=R.length;B<F;B++)R[B]!==v[B]&&(r.disableVertexAttribArray(B),R[B]=0)}function w(v,R,B,F,W,X,G){G===!0?r.vertexAttribIPointer(v,R,B,W,X):r.vertexAttribPointer(v,R,B,F,W,X)}function x(v,R,B,F){_();const W=F.attributes,X=B.getAttributes(),G=R.defaultAttributeValues;for(const j in X){const V=X[j];if(V.location>=0){let te=W[j];if(te===void 0&&(j==="instanceMatrix"&&v.instanceMatrix&&(te=v.instanceMatrix),j==="instanceColor"&&v.instanceColor&&(te=v.instanceColor)),te!==void 0){const re=te.normalized,ve=te.itemSize,Ne=e.get(te);if(Ne===void 0)continue;const Qe=Ne.buffer,q=Ne.type,Q=Ne.bytesPerElement,_e=q===r.INT||q===r.UNSIGNED_INT||te.gpuType===Va;if(te.isInterleavedBufferAttribute){const ae=te.data,Ee=ae.stride,Re=te.offset;if(ae.isInstancedInterleavedBuffer){for(let Oe=0;Oe<V.locationSize;Oe++)f(V.location+Oe,ae.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Oe=0;Oe<V.locationSize;Oe++)m(V.location+Oe);r.bindBuffer(r.ARRAY_BUFFER,Qe);for(let Oe=0;Oe<V.locationSize;Oe++)w(V.location+Oe,ve/V.locationSize,q,re,Ee*Q,(Re+ve/V.locationSize*Oe)*Q,_e)}else{if(te.isInstancedBufferAttribute){for(let ae=0;ae<V.locationSize;ae++)f(V.location+ae,te.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ae=0;ae<V.locationSize;ae++)m(V.location+ae);r.bindBuffer(r.ARRAY_BUFFER,Qe);for(let ae=0;ae<V.locationSize;ae++)w(V.location+ae,ve/V.locationSize,q,re,ve*Q,ve/V.locationSize*ae*Q,_e)}}else if(G!==void 0){const re=G[j];if(re!==void 0)switch(re.length){case 2:r.vertexAttrib2fv(V.location,re);break;case 3:r.vertexAttrib3fv(V.location,re);break;case 4:r.vertexAttrib4fv(V.location,re);break;default:r.vertexAttrib1fv(V.location,re)}}}}M()}function L(){I();for(const v in n){const R=n[v];for(const B in R){const F=R[B];for(const W in F)h(F[W].object),delete F[W];delete R[B]}delete n[v]}}function b(v){if(n[v.id]===void 0)return;const R=n[v.id];for(const B in R){const F=R[B];for(const W in F)h(F[W].object),delete F[W];delete R[B]}delete n[v.id]}function T(v){for(const R in n){const B=n[R];if(B[v.id]===void 0)continue;const F=B[v.id];for(const W in F)h(F[W].object),delete F[W];delete B[v.id]}}function I(){A(),a=!0,s!==i&&(s=i,l(s.object))}function A(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:I,resetDefaultState:A,dispose:L,releaseStatesOfGeometry:b,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function Jf(r,e,t){let n;function i(l){n=l}function s(l,h){r.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,u){u!==0&&(r.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,n,1)}function c(l,h,u,d){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)a(l[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function ep(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(T){return!(T!==Gt&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const I=T===ms&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==En&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Qt&&!I)}function c(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),f=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),w=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,b=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:x,vertexTextures:L,maxSamples:b}}function tp(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Zn,o=new Le,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=r.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):l();else{const M=s?0:n,w=M*4;let x=f.clippingState||null;c.value=x,x=h(g,d,w,p);for(let L=0;L!==w;++L)x[L]=t[L];f.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const f=p+_*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let w=0,x=p;w!==_;++w,x+=4)a.copy(u[w]).applyMatrix4(M,o),a.normal.toArray(m,x),m[x+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function np(r){let e=new WeakMap;function t(a,o){return o===ia?a.mapping=Ii:o===sa&&(a.mapping=Li),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ia||o===sa)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new du(c.height);return l.fromEquirectangularTexture(r,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Qa extends dl{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ai=4,Xo=[.125,.215,.35,.446,.526,.582],ei=20,Dr=new Qa,Yo=new Se;let Nr=null,Ur=0,Fr=0,Or=!1;const Qn=(1+Math.sqrt(5))/2,vi=1/Qn,jo=[new C(-Qn,vi,0),new C(Qn,vi,0),new C(-vi,0,Qn),new C(vi,0,Qn),new C(0,Qn,-vi),new C(0,Qn,vi),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class Ko{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Nr=this._renderer.getRenderTarget(),Ur=this._renderer.getActiveCubeFace(),Fr=this._renderer.getActiveMipmapLevel(),Or=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Nr,Ur,Fr),this._renderer.xr.enabled=Or,e.scissorTest=!1,Bs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ii||e.mapping===Li?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nr=this._renderer.getRenderTarget(),Ur=this._renderer.getActiveCubeFace(),Fr=this._renderer.getActiveMipmapLevel(),Or=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:ms,format:Gt,colorSpace:It,depthBuffer:!1},i=$o(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$o(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ip(s)),this._blurMaterial=sp(s,e,t)}return i}_compileMaterial(e){const t=new ne(this._lodPlanes[0],e);this._renderer.compile(t,Dr)}_sceneToCubeUV(e,t,n,i){const o=new bt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Yo),h.toneMapping=zn,h.autoClear=!1;const p=new Dt({name:"PMREM.Background",side:Tt,depthWrite:!1,depthTest:!1}),g=new ne(new Be,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Yo),_=!0);for(let f=0;f<6;f++){const M=f%3;M===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):M===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));const w=this._cubeSize;Bs(i,M*w,f>2?w:0,w,w),h.setRenderTarget(i),_&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ii||e.mapping===Li;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zo());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new ne(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Bs(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Dr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=jo[(i-s-1)%jo.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ne(this._lodPlanes[i],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ei-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):ei;m>ei&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ei}`);const f=[];let M=0;for(let T=0;T<ei;++T){const I=T/_,A=Math.exp(-I*I/2);f.push(A),T===0?M+=A:T<m&&(M+=2*A)}for(let T=0;T<f.length;T++)f[T]=f[T]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:w}=this;d.dTheta.value=g,d.mipInt.value=w-n;const x=this._sizeLods[i],L=3*x*(i>w-Ai?i-w+Ai:0),b=4*(this._cubeSize-x);Bs(t,L,b,3*x,2*x),c.setRenderTarget(t),c.render(u,Dr)}}function ip(r){const e=[],t=[],n=[];let i=r;const s=r-Ai+1+Xo.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let c=1/o;a>r-Ai?c=Xo[a-r+Ai-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,M=new Float32Array(_*g*p),w=new Float32Array(m*g*p),x=new Float32Array(f*g*p);for(let b=0;b<p;b++){const T=b%3*2/3-1,I=b>2?0:-1,A=[T,I,0,T+2/3,I,0,T+2/3,I+1,0,T,I,0,T+2/3,I+1,0,T,I+1,0];M.set(A,_*g*b),w.set(d,m*g*b);const v=[b,b,b,b,b,b];x.set(v,f*g*b)}const L=new Lt;L.setAttribute("position",new Ct(M,_)),L.setAttribute("uv",new Ct(w,m)),L.setAttribute("faceIndex",new Ct(x,f)),e.push(L),i>Ai&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function $o(r,e,t){const n=new ii(r,e,t);return n.texture.mapping=ar,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Bs(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function sp(r,e,t){const n=new Float32Array(ei),i=new C(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:ei,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ja(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Zo(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ja(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Qo(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Ja(){return`

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
	`}function rp(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===ia||c===sa,h=c===Ii||c===Li;if(l||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Ko(r)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return l&&p&&p.height>0||h&&p&&i(p)?(t===null&&(t=new Ko(r)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function ap(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&as("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function op(r,e,t,n){const i={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)e.remove(_[m])}d.removeEventListener("dispose",a),delete i[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)e.update(d[g],r.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)e.update(_[m],r.ARRAY_BUFFER)}}function l(u){const d=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const M=p.array;_=p.version;for(let w=0,x=M.length;w<x;w+=3){const L=M[w+0],b=M[w+1],T=M[w+2];d.push(L,b,b,T,T,L)}}else if(g!==void 0){const M=g.array;_=g.version;for(let w=0,x=M.length/3-1;w<x;w+=3){const L=w+0,b=w+1,T=w+2;d.push(L,b,b,T,T,L)}}else return;const m=new(sl(d)?hl:ll)(d,1);m.version=_;const f=s.get(u);f&&e.remove(f),s.set(u,m)}function h(u){const d=s.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function cp(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,p){r.drawElements(n,p,s,d*a),t.update(p,n,1)}function l(d,p,g){g!==0&&(r.drawElementsInstanced(n,p,s,d*a,g),t.update(p,n,g))}function h(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function u(d,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/a,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,d,0,_,0,g);let f=0;for(let M=0;M<g;M++)f+=p[M]*_[M];t.update(f,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function lp(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function hp(r,e,t){const n=new WeakMap,i=new je;function s(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let v=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var p=v;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let L=o.attributes.position.count*x,b=1;L>e.maxTextureSize&&(b=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const T=new Float32Array(L*b*4*u),I=new al(T,L,b,u);I.type=Qt,I.needsUpdate=!0;const A=x*4;for(let R=0;R<u;R++){const B=f[R],F=M[R],W=w[R],X=L*b*4*R;for(let G=0;G<B.count;G++){const j=G*A;g===!0&&(i.fromBufferAttribute(B,G),T[X+j+0]=i.x,T[X+j+1]=i.y,T[X+j+2]=i.z,T[X+j+3]=0),_===!0&&(i.fromBufferAttribute(F,G),T[X+j+4]=i.x,T[X+j+5]=i.y,T[X+j+6]=i.z,T[X+j+7]=0),m===!0&&(i.fromBufferAttribute(W,G),T[X+j+8]=i.x,T[X+j+9]=i.y,T[X+j+10]=i.z,T[X+j+11]=W.itemSize===4?i.w:1)}}d={count:u,texture:I,size:new Pe(L,b)},n.set(o,d),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(r,"morphTargetBaseInfluence",_),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function up(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}class ml extends xt{constructor(e,t,n,i,s,a,o,c,l,h=bi){if(h!==bi&&h!==Ni)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===bi&&(n=ni),n===void 0&&h===Ni&&(n=Di),super(null,i,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Rt,this.minFilter=c!==void 0?c:Rt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const gl=new xt,Jo=new ml(1,1),_l=new al,xl=new $h,yl=new fl,ec=[],tc=[],nc=new Float32Array(16),ic=new Float32Array(9),sc=new Float32Array(4);function Hi(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=ec[i];if(s===void 0&&(s=new Float32Array(i),ec[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function mt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function gt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function cr(r,e){let t=tc[e];t===void 0&&(t=new Int32Array(e),tc[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function dp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function fp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;r.uniform2fv(this.addr,e),gt(t,e)}}function pp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;r.uniform3fv(this.addr,e),gt(t,e)}}function mp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;r.uniform4fv(this.addr,e),gt(t,e)}}function gp(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;sc.set(n),r.uniformMatrix2fv(this.addr,!1,sc),gt(t,n)}}function _p(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;ic.set(n),r.uniformMatrix3fv(this.addr,!1,ic),gt(t,n)}}function xp(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;nc.set(n),r.uniformMatrix4fv(this.addr,!1,nc),gt(t,n)}}function yp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function vp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;r.uniform2iv(this.addr,e),gt(t,e)}}function Mp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;r.uniform3iv(this.addr,e),gt(t,e)}}function Sp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;r.uniform4iv(this.addr,e),gt(t,e)}}function wp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Ap(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;r.uniform2uiv(this.addr,e),gt(t,e)}}function Ep(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;r.uniform3uiv(this.addr,e),gt(t,e)}}function bp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;r.uniform4uiv(this.addr,e),gt(t,e)}}function Tp(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Jo.compareFunction=il,s=Jo):s=gl,t.setTexture2D(e||s,i)}function Rp(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||xl,i)}function Cp(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||yl,i)}function Ip(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||_l,i)}function Lp(r){switch(r){case 5126:return dp;case 35664:return fp;case 35665:return pp;case 35666:return mp;case 35674:return gp;case 35675:return _p;case 35676:return xp;case 5124:case 35670:return yp;case 35667:case 35671:return vp;case 35668:case 35672:return Mp;case 35669:case 35673:return Sp;case 5125:return wp;case 36294:return Ap;case 36295:return Ep;case 36296:return bp;case 35678:case 36198:case 36298:case 36306:case 35682:return Tp;case 35679:case 36299:case 36307:return Rp;case 35680:case 36300:case 36308:case 36293:return Cp;case 36289:case 36303:case 36311:case 36292:return Ip}}function Pp(r,e){r.uniform1fv(this.addr,e)}function Dp(r,e){const t=Hi(e,this.size,2);r.uniform2fv(this.addr,t)}function Np(r,e){const t=Hi(e,this.size,3);r.uniform3fv(this.addr,t)}function Up(r,e){const t=Hi(e,this.size,4);r.uniform4fv(this.addr,t)}function Fp(r,e){const t=Hi(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Op(r,e){const t=Hi(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Bp(r,e){const t=Hi(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function kp(r,e){r.uniform1iv(this.addr,e)}function zp(r,e){r.uniform2iv(this.addr,e)}function Vp(r,e){r.uniform3iv(this.addr,e)}function Gp(r,e){r.uniform4iv(this.addr,e)}function Hp(r,e){r.uniform1uiv(this.addr,e)}function Wp(r,e){r.uniform2uiv(this.addr,e)}function qp(r,e){r.uniform3uiv(this.addr,e)}function Xp(r,e){r.uniform4uiv(this.addr,e)}function Yp(r,e,t){const n=this.cache,i=e.length,s=cr(t,i);mt(n,s)||(r.uniform1iv(this.addr,s),gt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||gl,s[a])}function jp(r,e,t){const n=this.cache,i=e.length,s=cr(t,i);mt(n,s)||(r.uniform1iv(this.addr,s),gt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||xl,s[a])}function Kp(r,e,t){const n=this.cache,i=e.length,s=cr(t,i);mt(n,s)||(r.uniform1iv(this.addr,s),gt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||yl,s[a])}function $p(r,e,t){const n=this.cache,i=e.length,s=cr(t,i);mt(n,s)||(r.uniform1iv(this.addr,s),gt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||_l,s[a])}function Zp(r){switch(r){case 5126:return Pp;case 35664:return Dp;case 35665:return Np;case 35666:return Up;case 35674:return Fp;case 35675:return Op;case 35676:return Bp;case 5124:case 35670:return kp;case 35667:case 35671:return zp;case 35668:case 35672:return Vp;case 35669:case 35673:return Gp;case 5125:return Hp;case 36294:return Wp;case 36295:return qp;case 36296:return Xp;case 35678:case 36198:case 36298:case 36306:case 35682:return Yp;case 35679:case 36299:case 36307:return jp;case 35680:case 36300:case 36308:case 36293:return Kp;case 36289:case 36303:case 36311:case 36292:return $p}}class Qp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Lp(t.type)}}class Jp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Zp(t.type)}}class em{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Br=/(\w+)(\])?(\[|\.)?/g;function rc(r,e){r.seq.push(e),r.map[e.id]=e}function tm(r,e,t){const n=r.name,i=n.length;for(Br.lastIndex=0;;){const s=Br.exec(n),a=Br.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){rc(t,l===void 0?new Qp(o,r,e):new Jp(o,r,e));break}else{let u=t.map[o];u===void 0&&(u=new em(o),rc(t,u)),t=u}}}class Js{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);tm(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function ac(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const nm=37297;let im=0;function sm(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const oc=new Le;function rm(r){ze._getMatrix(oc,ze.workingColorSpace,r);const e=`mat3( ${oc.elements.map(t=>t.toFixed(4))} )`;switch(ze.getTransfer(r)){case or:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function cc(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+sm(r.getShaderSource(e),a)}else return i}function am(r,e){const t=rm(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function om(r,e){let t;switch(e){case nh:t="Linear";break;case ih:t="Reinhard";break;case sh:t="Cineon";break;case rh:t="ACESFilmic";break;case oh:t="AgX";break;case ch:t="Neutral";break;case ah:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ks=new C;function cm(){ze.getLuminanceCoefficients(ks);const r=ks.x.toFixed(4),e=ks.y.toFixed(4),t=ks.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lm(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(os).join(`
`)}function hm(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function um(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function os(r){return r!==""}function lc(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hc(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Da(r){return r.replace(dm,pm)}const fm=new Map;function pm(r,e){let t=Fe[e];if(t===void 0){const n=fm.get(e);if(n!==void 0)t=Fe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Da(t)}const mm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uc(r){return r.replace(mm,gm)}function gm(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function dc(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function _m(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Hc?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Wc?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===yn&&(e="SHADOWMAP_TYPE_VSM"),e}function xm(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ii:case Li:e="ENVMAP_TYPE_CUBE";break;case ar:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ym(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Li:e="ENVMAP_MODE_REFRACTION";break}return e}function vm(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case za:e="ENVMAP_BLENDING_MULTIPLY";break;case eh:e="ENVMAP_BLENDING_MIX";break;case th:e="ENVMAP_BLENDING_ADD";break}return e}function Mm(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Sm(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=_m(t),l=xm(t),h=ym(t),u=vm(t),d=Mm(t),p=lm(t),g=hm(s),_=i.createProgram();let m,f,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(os).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(os).join(`
`),f.length>0&&(f+=`
`)):(m=[dc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(os).join(`
`),f=[dc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zn?"#define TONE_MAPPING":"",t.toneMapping!==zn?Fe.tonemapping_pars_fragment:"",t.toneMapping!==zn?om("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,am("linearToOutputTexel",t.outputColorSpace),cm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(os).join(`
`)),a=Da(a),a=lc(a,t),a=hc(a,t),o=Da(o),o=lc(o,t),o=hc(o,t),a=uc(a),o=uc(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Ao?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ao?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const w=M+m+a,x=M+f+o,L=ac(i,i.VERTEX_SHADER,w),b=ac(i,i.FRAGMENT_SHADER,x);i.attachShader(_,L),i.attachShader(_,b),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(R){if(r.debug.checkShaderErrors){const B=i.getProgramInfoLog(_).trim(),F=i.getShaderInfoLog(L).trim(),W=i.getShaderInfoLog(b).trim();let X=!0,G=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(X=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,L,b);else{const j=cc(i,L,"vertex"),V=cc(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+B+`
`+j+`
`+V)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(F===""||W==="")&&(G=!1);G&&(R.diagnostics={runnable:X,programLog:B,vertexShader:{log:F,prefix:m},fragmentShader:{log:W,prefix:f}})}i.deleteShader(L),i.deleteShader(b),I=new Js(i,_),A=um(i,_)}let I;this.getUniforms=function(){return I===void 0&&T(this),I};let A;this.getAttributes=function(){return A===void 0&&T(this),A};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(_,nm)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=im++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=b,this}let wm=0;class Am{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Em(e),t.set(e,n)),n}}class Em{constructor(e){this.id=wm++,this.code=e,this.usedTimes=0}}function bm(r,e,t,n,i,s,a){const o=new ol,c=new Am,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(A){return l.add(A),A===0?"uv":`uv${A}`}function m(A,v,R,B,F){const W=B.fog,X=F.geometry,G=A.isMeshStandardMaterial?B.environment:null,j=(A.isMeshStandardMaterial?t:e).get(A.envMap||G),V=j&&j.mapping===ar?j.image.height:null,te=g[A.type];A.precision!==null&&(p=i.getMaxPrecision(A.precision),p!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",p,"instead."));const re=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ve=re!==void 0?re.length:0;let Ne=0;X.morphAttributes.position!==void 0&&(Ne=1),X.morphAttributes.normal!==void 0&&(Ne=2),X.morphAttributes.color!==void 0&&(Ne=3);let Qe,q,Q,_e;if(te){const Je=an[te];Qe=Je.vertexShader,q=Je.fragmentShader}else Qe=A.vertexShader,q=A.fragmentShader,c.update(A),Q=c.getVertexShaderID(A),_e=c.getFragmentShaderID(A);const ae=r.getRenderTarget(),Ee=r.state.buffers.depth.getReversed(),Re=F.isInstancedMesh===!0,Oe=F.isBatchedMesh===!0,lt=!!A.map,We=!!A.matcap,ft=!!j,U=!!A.aoMap,Bt=!!A.lightMap,Ve=!!A.bumpMap,Ge=!!A.normalMap,we=!!A.displacementMap,st=!!A.emissiveMap,Me=!!A.metalnessMap,E=!!A.roughnessMap,y=A.anisotropy>0,O=A.clearcoat>0,K=A.dispersion>0,Z=A.iridescence>0,Y=A.sheen>0,xe=A.transmission>0,oe=y&&!!A.anisotropyMap,ue=O&&!!A.clearcoatMap,qe=O&&!!A.clearcoatNormalMap,J=O&&!!A.clearcoatRoughnessMap,de=Z&&!!A.iridescenceMap,Ae=Z&&!!A.iridescenceThicknessMap,be=Y&&!!A.sheenColorMap,fe=Y&&!!A.sheenRoughnessMap,He=!!A.specularMap,Ue=!!A.specularColorMap,nt=!!A.specularIntensityMap,P=xe&&!!A.transmissionMap,se=xe&&!!A.thicknessMap,H=!!A.gradientMap,$=!!A.alphaMap,he=A.alphaTest>0,ce=!!A.alphaHash,Ce=!!A.extensions;let ht=zn;A.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(ht=r.toneMapping);const vt={shaderID:te,shaderType:A.type,shaderName:A.name,vertexShader:Qe,fragmentShader:q,defines:A.defines,customVertexShaderID:Q,customFragmentShaderID:_e,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:p,batching:Oe,batchingColor:Oe&&F._colorsTexture!==null,instancing:Re,instancingColor:Re&&F.instanceColor!==null,instancingMorph:Re&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ae===null?r.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:It,alphaToCoverage:!!A.alphaToCoverage,map:lt,matcap:We,envMap:ft,envMapMode:ft&&j.mapping,envMapCubeUVHeight:V,aoMap:U,lightMap:Bt,bumpMap:Ve,normalMap:Ge,displacementMap:d&&we,emissiveMap:st,normalMapObjectSpace:Ge&&A.normalMapType===_h,normalMapTangentSpace:Ge&&A.normalMapType===Ka,metalnessMap:Me,roughnessMap:E,anisotropy:y,anisotropyMap:oe,clearcoat:O,clearcoatMap:ue,clearcoatNormalMap:qe,clearcoatRoughnessMap:J,dispersion:K,iridescence:Z,iridescenceMap:de,iridescenceThicknessMap:Ae,sheen:Y,sheenColorMap:be,sheenRoughnessMap:fe,specularMap:He,specularColorMap:Ue,specularIntensityMap:nt,transmission:xe,transmissionMap:P,thicknessMap:se,gradientMap:H,opaque:A.transparent===!1&&A.blending===Ei&&A.alphaToCoverage===!1,alphaMap:$,alphaTest:he,alphaHash:ce,combine:A.combine,mapUv:lt&&_(A.map.channel),aoMapUv:U&&_(A.aoMap.channel),lightMapUv:Bt&&_(A.lightMap.channel),bumpMapUv:Ve&&_(A.bumpMap.channel),normalMapUv:Ge&&_(A.normalMap.channel),displacementMapUv:we&&_(A.displacementMap.channel),emissiveMapUv:st&&_(A.emissiveMap.channel),metalnessMapUv:Me&&_(A.metalnessMap.channel),roughnessMapUv:E&&_(A.roughnessMap.channel),anisotropyMapUv:oe&&_(A.anisotropyMap.channel),clearcoatMapUv:ue&&_(A.clearcoatMap.channel),clearcoatNormalMapUv:qe&&_(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&_(A.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&_(A.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&_(A.iridescenceThicknessMap.channel),sheenColorMapUv:be&&_(A.sheenColorMap.channel),sheenRoughnessMapUv:fe&&_(A.sheenRoughnessMap.channel),specularMapUv:He&&_(A.specularMap.channel),specularColorMapUv:Ue&&_(A.specularColorMap.channel),specularIntensityMapUv:nt&&_(A.specularIntensityMap.channel),transmissionMapUv:P&&_(A.transmissionMap.channel),thicknessMapUv:se&&_(A.thicknessMap.channel),alphaMapUv:$&&_(A.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Ge||y),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!X.attributes.uv&&(lt||$),fog:!!W,useFog:A.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ee,skinning:F.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Ne,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:A.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:ht,decodeVideoTexture:lt&&A.map.isVideoTexture===!0&&ze.getTransfer(A.map.colorSpace)===tt,decodeVideoTextureEmissive:st&&A.emissiveMap.isVideoTexture===!0&&ze.getTransfer(A.emissiveMap.colorSpace)===tt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===on,flipSided:A.side===Tt,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Ce&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&A.extensions.multiDraw===!0||Oe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return vt.vertexUv1s=l.has(1),vt.vertexUv2s=l.has(2),vt.vertexUv3s=l.has(3),l.clear(),vt}function f(A){const v=[];if(A.shaderID?v.push(A.shaderID):(v.push(A.customVertexShaderID),v.push(A.customFragmentShaderID)),A.defines!==void 0)for(const R in A.defines)v.push(R),v.push(A.defines[R]);return A.isRawShaderMaterial===!1&&(M(v,A),w(v,A),v.push(r.outputColorSpace)),v.push(A.customProgramCacheKey),v.join()}function M(A,v){A.push(v.precision),A.push(v.outputColorSpace),A.push(v.envMapMode),A.push(v.envMapCubeUVHeight),A.push(v.mapUv),A.push(v.alphaMapUv),A.push(v.lightMapUv),A.push(v.aoMapUv),A.push(v.bumpMapUv),A.push(v.normalMapUv),A.push(v.displacementMapUv),A.push(v.emissiveMapUv),A.push(v.metalnessMapUv),A.push(v.roughnessMapUv),A.push(v.anisotropyMapUv),A.push(v.clearcoatMapUv),A.push(v.clearcoatNormalMapUv),A.push(v.clearcoatRoughnessMapUv),A.push(v.iridescenceMapUv),A.push(v.iridescenceThicknessMapUv),A.push(v.sheenColorMapUv),A.push(v.sheenRoughnessMapUv),A.push(v.specularMapUv),A.push(v.specularColorMapUv),A.push(v.specularIntensityMapUv),A.push(v.transmissionMapUv),A.push(v.thicknessMapUv),A.push(v.combine),A.push(v.fogExp2),A.push(v.sizeAttenuation),A.push(v.morphTargetsCount),A.push(v.morphAttributeCount),A.push(v.numDirLights),A.push(v.numPointLights),A.push(v.numSpotLights),A.push(v.numSpotLightMaps),A.push(v.numHemiLights),A.push(v.numRectAreaLights),A.push(v.numDirLightShadows),A.push(v.numPointLightShadows),A.push(v.numSpotLightShadows),A.push(v.numSpotLightShadowsWithMaps),A.push(v.numLightProbes),A.push(v.shadowMapType),A.push(v.toneMapping),A.push(v.numClippingPlanes),A.push(v.numClipIntersection),A.push(v.depthPacking)}function w(A,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),A.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),A.push(o.mask)}function x(A){const v=g[A.type];let R;if(v){const B=an[v];R=cu.clone(B.uniforms)}else R=A.uniforms;return R}function L(A,v){let R;for(let B=0,F=h.length;B<F;B++){const W=h[B];if(W.cacheKey===v){R=W,++R.usedTimes;break}}return R===void 0&&(R=new Sm(r,v,A,s),h.push(R)),R}function b(A){if(--A.usedTimes===0){const v=h.indexOf(A);h[v]=h[h.length-1],h.pop(),A.destroy()}}function T(A){c.remove(A)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:L,releaseProgram:b,releaseShaderCache:T,programs:h,dispose:I}}function Tm(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,c){r.get(a)[o]=c}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Rm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function fc(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function pc(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,p,g,_,m){let f=r[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},r[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),e++,f}function o(u,d,p,g,_,m){const f=a(u,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function c(u,d,p,g,_,m){const f=a(u,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function l(u,d){t.length>1&&t.sort(u||Rm),n.length>1&&n.sort(d||fc),i.length>1&&i.sort(d||fc)}function h(){for(let u=e,d=r.length;u<d;u++){const p=r[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:c,finish:h,sort:l}}function Cm(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new pc,r.set(n,[a])):i>=s.length?(a=new pc,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function Im(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Se};break;case"SpotLight":t={position:new C,direction:new C,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new C,halfWidth:new C,halfHeight:new C};break}return r[e.id]=t,t}}}function Lm(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Pm=0;function Dm(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Nm(r){const e=new Im,t=Lm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new C);const i=new C,s=new De,a=new De;function o(l){let h=0,u=0,d=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,M=0,w=0,x=0,L=0,b=0,T=0;l.sort(Dm);for(let A=0,v=l.length;A<v;A++){const R=l[A],B=R.color,F=R.intensity,W=R.distance,X=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=B.r*F,u+=B.g*F,d+=B.b*F;else if(R.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(R.sh.coefficients[G],F);T++}else if(R.isDirectionalLight){const G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const j=R.shadow,V=t.get(R);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=X,n.directionalShadowMatrix[p]=R.shadow.matrix,M++}n.directional[p]=G,p++}else if(R.isSpotLight){const G=e.get(R);G.position.setFromMatrixPosition(R.matrixWorld),G.color.copy(B).multiplyScalar(F),G.distance=W,G.coneCos=Math.cos(R.angle),G.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),G.decay=R.decay,n.spot[_]=G;const j=R.shadow;if(R.map&&(n.spotLightMap[L]=R.map,L++,j.updateMatrices(R),R.castShadow&&b++),n.spotLightMatrix[_]=j.matrix,R.castShadow){const V=t.get(R);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=X,x++}_++}else if(R.isRectAreaLight){const G=e.get(R);G.color.copy(B).multiplyScalar(F),G.halfWidth.set(R.width*.5,0,0),G.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=G,m++}else if(R.isPointLight){const G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),G.distance=R.distance,G.decay=R.decay,R.castShadow){const j=R.shadow,V=t.get(R);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,V.shadowCameraNear=j.camera.near,V.shadowCameraFar=j.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=R.shadow.matrix,w++}n.point[g]=G,g++}else if(R.isHemisphereLight){const G=e.get(R);G.skyColor.copy(R.color).multiplyScalar(F),G.groundColor.copy(R.groundColor).multiplyScalar(F),n.hemi[f]=G,f++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ie.LTC_FLOAT_1,n.rectAreaLTC2=ie.LTC_FLOAT_2):(n.rectAreaLTC1=ie.LTC_HALF_1,n.rectAreaLTC2=ie.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==p||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==f||I.numDirectionalShadows!==M||I.numPointShadows!==w||I.numSpotShadows!==x||I.numSpotMaps!==L||I.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=x+L-b,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=T,I.directionalLength=p,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=f,I.numDirectionalShadows=M,I.numPointShadows=w,I.numSpotShadows=x,I.numSpotMaps=L,I.numLightProbes=T,n.version=Pm++)}function c(l,h){let u=0,d=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,M=l.length;f<M;f++){const w=l[f];if(w.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(w.isSpotLight){const x=n.spot[p];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),p++}else if(w.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(m),a.identity(),s.copy(w.matrixWorld),s.premultiply(m),a.extractRotation(s),x.halfWidth.set(w.width*.5,0,0),x.halfHeight.set(0,w.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(w.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(m),d++}else if(w.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(w.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function mc(r){const e=new Nm(r),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function Um(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new mc(r),e.set(i,[o])):s>=a.length?(o=new mc(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class Fm extends tn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=mh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Om extends tn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Bm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,km=`uniform sampler2D shadow_pass;
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
}`;function zm(r,e,t){let n=new Za;const i=new Pe,s=new Pe,a=new je,o=new Fm({depthPacking:gh}),c=new Om,l={},h=t.maxTextureSize,u={[An]:Tt,[Tt]:An,[on]:on},d=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:Bm,fragmentShader:km}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Lt;g.setAttribute("position",new Ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ne(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hc;let f=this.type;this.render=function(b,T,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const A=r.getRenderTarget(),v=r.getActiveCubeFace(),R=r.getActiveMipmapLevel(),B=r.state;B.setBlending(kn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const F=f!==yn&&this.type===yn,W=f===yn&&this.type!==yn;for(let X=0,G=b.length;X<G;X++){const j=b[X],V=j.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const te=V.getFrameExtents();if(i.multiply(te),s.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/te.x),i.x=s.x*te.x,V.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/te.y),i.y=s.y*te.y,V.mapSize.y=s.y)),V.map===null||F===!0||W===!0){const ve=this.type!==yn?{minFilter:Rt,magFilter:Rt}:{};V.map!==null&&V.map.dispose(),V.map=new ii(i.x,i.y,ve),V.map.texture.name=j.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const re=V.getViewportCount();for(let ve=0;ve<re;ve++){const Ne=V.getViewport(ve);a.set(s.x*Ne.x,s.y*Ne.y,s.x*Ne.z,s.y*Ne.w),B.viewport(a),V.updateMatrices(j,ve),n=V.getFrustum(),x(T,I,V.camera,j,this.type)}V.isPointLightShadow!==!0&&this.type===yn&&M(V,I),V.needsUpdate=!1}f=this.type,m.needsUpdate=!1,r.setRenderTarget(A,v,R)};function M(b,T){const I=e.update(_);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new ii(i.x,i.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(T,null,I,d,_,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(T,null,I,p,_,null)}function w(b,T,I,A){let v=null;const R=I.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(R!==void 0)v=R;else if(v=I.isPointLight===!0?c:o,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const B=v.uuid,F=T.uuid;let W=l[B];W===void 0&&(W={},l[B]=W);let X=W[F];X===void 0&&(X=v.clone(),W[F]=X,T.addEventListener("dispose",L)),v=X}if(v.visible=T.visible,v.wireframe=T.wireframe,A===yn?v.side=T.shadowSide!==null?T.shadowSide:T.side:v.side=T.shadowSide!==null?T.shadowSide:u[T.side],v.alphaMap=T.alphaMap,v.alphaTest=T.alphaTest,v.map=T.map,v.clipShadows=T.clipShadows,v.clippingPlanes=T.clippingPlanes,v.clipIntersection=T.clipIntersection,v.displacementMap=T.displacementMap,v.displacementScale=T.displacementScale,v.displacementBias=T.displacementBias,v.wireframeLinewidth=T.wireframeLinewidth,v.linewidth=T.linewidth,I.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const B=r.properties.get(v);B.light=I}return v}function x(b,T,I,A,v){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&v===yn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,b.matrixWorld);const F=e.update(b),W=b.material;if(Array.isArray(W)){const X=F.groups;for(let G=0,j=X.length;G<j;G++){const V=X[G],te=W[V.materialIndex];if(te&&te.visible){const re=w(b,te,A,v);b.onBeforeShadow(r,b,T,I,F,re,V),r.renderBufferDirect(I,null,F,re,b,V),b.onAfterShadow(r,b,T,I,F,re,V)}}}else if(W.visible){const X=w(b,W,A,v);b.onBeforeShadow(r,b,T,I,F,X,null),r.renderBufferDirect(I,null,F,X,b,null),b.onAfterShadow(r,b,T,I,F,X,null)}}const B=b.children;for(let F=0,W=B.length;F<W;F++)x(B[F],T,I,A,v)}function L(b){b.target.removeEventListener("dispose",L);for(const I in l){const A=l[I],v=b.target.uuid;v in A&&(A[v].dispose(),delete A[v])}}}const Vm={[$r]:Zr,[Qr]:ta,[Jr]:na,[Ci]:ea,[Zr]:$r,[ta]:Qr,[na]:Jr,[ea]:Ci};function Gm(r,e){function t(){let P=!1;const se=new je;let H=null;const $=new je(0,0,0,0);return{setMask:function(he){H!==he&&!P&&(r.colorMask(he,he,he,he),H=he)},setLocked:function(he){P=he},setClear:function(he,ce,Ce,ht,vt){vt===!0&&(he*=ht,ce*=ht,Ce*=ht),se.set(he,ce,Ce,ht),$.equals(se)===!1&&(r.clearColor(he,ce,Ce,ht),$.copy(se))},reset:function(){P=!1,H=null,$.set(-1,0,0,0)}}}function n(){let P=!1,se=!1,H=null,$=null,he=null;return{setReversed:function(ce){if(se!==ce){const Ce=e.get("EXT_clip_control");se?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT);const ht=he;he=null,this.setClear(ht)}se=ce},getReversed:function(){return se},setTest:function(ce){ce?ae(r.DEPTH_TEST):Ee(r.DEPTH_TEST)},setMask:function(ce){H!==ce&&!P&&(r.depthMask(ce),H=ce)},setFunc:function(ce){if(se&&(ce=Vm[ce]),$!==ce){switch(ce){case $r:r.depthFunc(r.NEVER);break;case Zr:r.depthFunc(r.ALWAYS);break;case Qr:r.depthFunc(r.LESS);break;case Ci:r.depthFunc(r.LEQUAL);break;case Jr:r.depthFunc(r.EQUAL);break;case ea:r.depthFunc(r.GEQUAL);break;case ta:r.depthFunc(r.GREATER);break;case na:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}$=ce}},setLocked:function(ce){P=ce},setClear:function(ce){he!==ce&&(se&&(ce=1-ce),r.clearDepth(ce),he=ce)},reset:function(){P=!1,H=null,$=null,he=null,se=!1}}}function i(){let P=!1,se=null,H=null,$=null,he=null,ce=null,Ce=null,ht=null,vt=null;return{setTest:function(Je){P||(Je?ae(r.STENCIL_TEST):Ee(r.STENCIL_TEST))},setMask:function(Je){se!==Je&&!P&&(r.stencilMask(Je),se=Je)},setFunc:function(Je,Wt,un){(H!==Je||$!==Wt||he!==un)&&(r.stencilFunc(Je,Wt,un),H=Je,$=Wt,he=un)},setOp:function(Je,Wt,un){(ce!==Je||Ce!==Wt||ht!==un)&&(r.stencilOp(Je,Wt,un),ce=Je,Ce=Wt,ht=un)},setLocked:function(Je){P=Je},setClear:function(Je){vt!==Je&&(r.clearStencil(Je),vt=Je)},reset:function(){P=!1,se=null,H=null,$=null,he=null,ce=null,Ce=null,ht=null,vt=null}}}const s=new t,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,M=null,w=null,x=null,L=null,b=null,T=new Se(0,0,0),I=0,A=!1,v=null,R=null,B=null,F=null,W=null;const X=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,j=0;const V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(V)[1]),G=j>=1):V.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),G=j>=2);let te=null,re={};const ve=r.getParameter(r.SCISSOR_BOX),Ne=r.getParameter(r.VIEWPORT),Qe=new je().fromArray(ve),q=new je().fromArray(Ne);function Q(P,se,H,$){const he=new Uint8Array(4),ce=r.createTexture();r.bindTexture(P,ce),r.texParameteri(P,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(P,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ce=0;Ce<H;Ce++)P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY?r.texImage3D(se,0,r.RGBA,1,1,$,0,r.RGBA,r.UNSIGNED_BYTE,he):r.texImage2D(se+Ce,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,he);return ce}const _e={};_e[r.TEXTURE_2D]=Q(r.TEXTURE_2D,r.TEXTURE_2D,1),_e[r.TEXTURE_CUBE_MAP]=Q(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[r.TEXTURE_2D_ARRAY]=Q(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),_e[r.TEXTURE_3D]=Q(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ae(r.DEPTH_TEST),a.setFunc(Ci),Ve(!1),Ge(xo),ae(r.CULL_FACE),U(kn);function ae(P){h[P]!==!0&&(r.enable(P),h[P]=!0)}function Ee(P){h[P]!==!1&&(r.disable(P),h[P]=!1)}function Re(P,se){return u[P]!==se?(r.bindFramebuffer(P,se),u[P]=se,P===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=se),P===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=se),!0):!1}function Oe(P,se){let H=p,$=!1;if(P){H=d.get(se),H===void 0&&(H=[],d.set(se,H));const he=P.textures;if(H.length!==he.length||H[0]!==r.COLOR_ATTACHMENT0){for(let ce=0,Ce=he.length;ce<Ce;ce++)H[ce]=r.COLOR_ATTACHMENT0+ce;H.length=he.length,$=!0}}else H[0]!==r.BACK&&(H[0]=r.BACK,$=!0);$&&r.drawBuffers(H)}function lt(P){return g!==P?(r.useProgram(P),g=P,!0):!1}const We={[Jn]:r.FUNC_ADD,[Ol]:r.FUNC_SUBTRACT,[Bl]:r.FUNC_REVERSE_SUBTRACT};We[kl]=r.MIN,We[zl]=r.MAX;const ft={[Vl]:r.ZERO,[Gl]:r.ONE,[Hl]:r.SRC_COLOR,[jr]:r.SRC_ALPHA,[Kl]:r.SRC_ALPHA_SATURATE,[Yl]:r.DST_COLOR,[ql]:r.DST_ALPHA,[Wl]:r.ONE_MINUS_SRC_COLOR,[Kr]:r.ONE_MINUS_SRC_ALPHA,[jl]:r.ONE_MINUS_DST_COLOR,[Xl]:r.ONE_MINUS_DST_ALPHA,[$l]:r.CONSTANT_COLOR,[Zl]:r.ONE_MINUS_CONSTANT_COLOR,[Ql]:r.CONSTANT_ALPHA,[Jl]:r.ONE_MINUS_CONSTANT_ALPHA};function U(P,se,H,$,he,ce,Ce,ht,vt,Je){if(P===kn){_===!0&&(Ee(r.BLEND),_=!1);return}if(_===!1&&(ae(r.BLEND),_=!0),P!==Fl){if(P!==m||Je!==A){if((f!==Jn||x!==Jn)&&(r.blendEquation(r.FUNC_ADD),f=Jn,x=Jn),Je)switch(P){case Ei:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case yo:r.blendFunc(r.ONE,r.ONE);break;case vo:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Mo:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Ei:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case yo:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case vo:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Mo:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}M=null,w=null,L=null,b=null,T.set(0,0,0),I=0,m=P,A=Je}return}he=he||se,ce=ce||H,Ce=Ce||$,(se!==f||he!==x)&&(r.blendEquationSeparate(We[se],We[he]),f=se,x=he),(H!==M||$!==w||ce!==L||Ce!==b)&&(r.blendFuncSeparate(ft[H],ft[$],ft[ce],ft[Ce]),M=H,w=$,L=ce,b=Ce),(ht.equals(T)===!1||vt!==I)&&(r.blendColor(ht.r,ht.g,ht.b,vt),T.copy(ht),I=vt),m=P,A=!1}function Bt(P,se){P.side===on?Ee(r.CULL_FACE):ae(r.CULL_FACE);let H=P.side===Tt;se&&(H=!H),Ve(H),P.blending===Ei&&P.transparent===!1?U(kn):U(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),s.setMask(P.colorWrite);const $=P.stencilWrite;o.setTest($),$&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),st(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ae(r.SAMPLE_ALPHA_TO_COVERAGE):Ee(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(P){v!==P&&(P?r.frontFace(r.CW):r.frontFace(r.CCW),v=P)}function Ge(P){P!==Nl?(ae(r.CULL_FACE),P!==R&&(P===xo?r.cullFace(r.BACK):P===Ul?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ee(r.CULL_FACE),R=P}function we(P){P!==B&&(G&&r.lineWidth(P),B=P)}function st(P,se,H){P?(ae(r.POLYGON_OFFSET_FILL),(F!==se||W!==H)&&(r.polygonOffset(se,H),F=se,W=H)):Ee(r.POLYGON_OFFSET_FILL)}function Me(P){P?ae(r.SCISSOR_TEST):Ee(r.SCISSOR_TEST)}function E(P){P===void 0&&(P=r.TEXTURE0+X-1),te!==P&&(r.activeTexture(P),te=P)}function y(P,se,H){H===void 0&&(te===null?H=r.TEXTURE0+X-1:H=te);let $=re[H];$===void 0&&($={type:void 0,texture:void 0},re[H]=$),($.type!==P||$.texture!==se)&&(te!==H&&(r.activeTexture(H),te=H),r.bindTexture(P,se||_e[P]),$.type=P,$.texture=se)}function O(){const P=re[te];P!==void 0&&P.type!==void 0&&(r.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function K(){try{r.compressedTexImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Z(){try{r.compressedTexImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Y(){try{r.texSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xe(){try{r.texSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function oe(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ue(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function qe(){try{r.texStorage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{r.texStorage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function de(){try{r.texImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ae(){try{r.texImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function be(P){Qe.equals(P)===!1&&(r.scissor(P.x,P.y,P.z,P.w),Qe.copy(P))}function fe(P){q.equals(P)===!1&&(r.viewport(P.x,P.y,P.z,P.w),q.copy(P))}function He(P,se){let H=l.get(se);H===void 0&&(H=new WeakMap,l.set(se,H));let $=H.get(P);$===void 0&&($=r.getUniformBlockIndex(se,P.name),H.set(P,$))}function Ue(P,se){const $=l.get(se).get(P);c.get(se)!==$&&(r.uniformBlockBinding(se,$,P.__bindingPointIndex),c.set(se,$))}function nt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},te=null,re={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,M=null,w=null,x=null,L=null,b=null,T=new Se(0,0,0),I=0,A=!1,v=null,R=null,B=null,F=null,W=null,Qe.set(0,0,r.canvas.width,r.canvas.height),q.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ae,disable:Ee,bindFramebuffer:Re,drawBuffers:Oe,useProgram:lt,setBlending:U,setMaterial:Bt,setFlipSided:Ve,setCullFace:Ge,setLineWidth:we,setPolygonOffset:st,setScissorTest:Me,activeTexture:E,bindTexture:y,unbindTexture:O,compressedTexImage2D:K,compressedTexImage3D:Z,texImage2D:de,texImage3D:Ae,updateUBOMapping:He,uniformBlockBinding:Ue,texStorage2D:qe,texStorage3D:J,texSubImage2D:Y,texSubImage3D:xe,compressedTexSubImage2D:oe,compressedTexSubImage3D:ue,scissor:be,viewport:fe,reset:nt}}function gc(r,e,t,n){const i=Hm(n);switch(t){case $c:return r*e;case Qc:return r*e;case Jc:return r*e*2;case Wa:return r*e/i.components*i.byteLength;case qa:return r*e/i.components*i.byteLength;case el:return r*e*2/i.components*i.byteLength;case Xa:return r*e*2/i.components*i.byteLength;case Zc:return r*e*3/i.components*i.byteLength;case Gt:return r*e*4/i.components*i.byteLength;case Ya:return r*e*4/i.components*i.byteLength;case js:case Ks:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case $s:case Zs:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case aa:case ca:return Math.max(r,16)*Math.max(e,8)/4;case ra:case oa:return Math.max(r,8)*Math.max(e,8)/2;case la:case ha:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ua:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case da:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case fa:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case pa:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case ma:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case ga:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case _a:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case xa:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case ya:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case va:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Ma:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Sa:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case wa:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Aa:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Ea:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Qs:case ba:case Ta:return Math.ceil(r/4)*Math.ceil(e/4)*16;case tl:case Ra:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Ca:case Ia:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Hm(r){switch(r){case En:case Yc:return{byteLength:1,components:1};case us:case jc:case ms:return{byteLength:2,components:1};case Ga:case Ha:return{byteLength:2,components:4};case ni:case Va:case Qt:return{byteLength:4,components:1};case Kc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function Wm(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Pe,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,y){return p?new OffscreenCanvas(E,y):ps("canvas")}function _(E,y,O){let K=1;const Z=Me(E);if((Z.width>O||Z.height>O)&&(K=O/Math.max(Z.width,Z.height)),K<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const Y=Math.floor(K*Z.width),xe=Math.floor(K*Z.height);u===void 0&&(u=g(Y,xe));const oe=y?g(Y,xe):u;return oe.width=Y,oe.height=xe,oe.getContext("2d").drawImage(E,0,0,Y,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+Y+"x"+xe+")."),oe}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),E;return E}function m(E){return E.generateMipmaps}function f(E){r.generateMipmap(E)}function M(E){return E.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?r.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(E,y,O,K,Z=!1){if(E!==null){if(r[E]!==void 0)return r[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Y=y;if(y===r.RED&&(O===r.FLOAT&&(Y=r.R32F),O===r.HALF_FLOAT&&(Y=r.R16F),O===r.UNSIGNED_BYTE&&(Y=r.R8)),y===r.RED_INTEGER&&(O===r.UNSIGNED_BYTE&&(Y=r.R8UI),O===r.UNSIGNED_SHORT&&(Y=r.R16UI),O===r.UNSIGNED_INT&&(Y=r.R32UI),O===r.BYTE&&(Y=r.R8I),O===r.SHORT&&(Y=r.R16I),O===r.INT&&(Y=r.R32I)),y===r.RG&&(O===r.FLOAT&&(Y=r.RG32F),O===r.HALF_FLOAT&&(Y=r.RG16F),O===r.UNSIGNED_BYTE&&(Y=r.RG8)),y===r.RG_INTEGER&&(O===r.UNSIGNED_BYTE&&(Y=r.RG8UI),O===r.UNSIGNED_SHORT&&(Y=r.RG16UI),O===r.UNSIGNED_INT&&(Y=r.RG32UI),O===r.BYTE&&(Y=r.RG8I),O===r.SHORT&&(Y=r.RG16I),O===r.INT&&(Y=r.RG32I)),y===r.RGB_INTEGER&&(O===r.UNSIGNED_BYTE&&(Y=r.RGB8UI),O===r.UNSIGNED_SHORT&&(Y=r.RGB16UI),O===r.UNSIGNED_INT&&(Y=r.RGB32UI),O===r.BYTE&&(Y=r.RGB8I),O===r.SHORT&&(Y=r.RGB16I),O===r.INT&&(Y=r.RGB32I)),y===r.RGBA_INTEGER&&(O===r.UNSIGNED_BYTE&&(Y=r.RGBA8UI),O===r.UNSIGNED_SHORT&&(Y=r.RGBA16UI),O===r.UNSIGNED_INT&&(Y=r.RGBA32UI),O===r.BYTE&&(Y=r.RGBA8I),O===r.SHORT&&(Y=r.RGBA16I),O===r.INT&&(Y=r.RGBA32I)),y===r.RGB&&O===r.UNSIGNED_INT_5_9_9_9_REV&&(Y=r.RGB9_E5),y===r.RGBA){const xe=Z?or:ze.getTransfer(K);O===r.FLOAT&&(Y=r.RGBA32F),O===r.HALF_FLOAT&&(Y=r.RGBA16F),O===r.UNSIGNED_BYTE&&(Y=xe===tt?r.SRGB8_ALPHA8:r.RGBA8),O===r.UNSIGNED_SHORT_4_4_4_4&&(Y=r.RGBA4),O===r.UNSIGNED_SHORT_5_5_5_1&&(Y=r.RGB5_A1)}return(Y===r.R16F||Y===r.R32F||Y===r.RG16F||Y===r.RG32F||Y===r.RGBA16F||Y===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function x(E,y){let O;return E?y===null||y===ni||y===Di?O=r.DEPTH24_STENCIL8:y===Qt?O=r.DEPTH32F_STENCIL8:y===us&&(O=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ni||y===Di?O=r.DEPTH_COMPONENT24:y===Qt?O=r.DEPTH_COMPONENT32F:y===us&&(O=r.DEPTH_COMPONENT16),O}function L(E,y){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Rt&&E.minFilter!==Ot?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function b(E){const y=E.target;y.removeEventListener("dispose",b),I(y),y.isVideoTexture&&h.delete(y)}function T(E){const y=E.target;y.removeEventListener("dispose",T),v(y)}function I(E){const y=n.get(E);if(y.__webglInit===void 0)return;const O=E.source,K=d.get(O);if(K){const Z=K[y.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&A(E),Object.keys(K).length===0&&d.delete(O)}n.remove(E)}function A(E){const y=n.get(E);r.deleteTexture(y.__webglTexture);const O=E.source,K=d.get(O);delete K[y.__cacheKey],a.memory.textures--}function v(E){const y=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(y.__webglFramebuffer[K]))for(let Z=0;Z<y.__webglFramebuffer[K].length;Z++)r.deleteFramebuffer(y.__webglFramebuffer[K][Z]);else r.deleteFramebuffer(y.__webglFramebuffer[K]);y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer[K])}else{if(Array.isArray(y.__webglFramebuffer))for(let K=0;K<y.__webglFramebuffer.length;K++)r.deleteFramebuffer(y.__webglFramebuffer[K]);else r.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let K=0;K<y.__webglColorRenderbuffer.length;K++)y.__webglColorRenderbuffer[K]&&r.deleteRenderbuffer(y.__webglColorRenderbuffer[K]);y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const O=E.textures;for(let K=0,Z=O.length;K<Z;K++){const Y=n.get(O[K]);Y.__webglTexture&&(r.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(O[K])}n.remove(E)}let R=0;function B(){R=0}function F(){const E=R;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),R+=1,E}function W(E){const y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}function X(E,y){const O=n.get(E);if(E.isVideoTexture&&we(E),E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){const K=E.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(O,E,y);return}}t.bindTexture(r.TEXTURE_2D,O.__webglTexture,r.TEXTURE0+y)}function G(E,y){const O=n.get(E);if(E.version>0&&O.__version!==E.version){q(O,E,y);return}t.bindTexture(r.TEXTURE_2D_ARRAY,O.__webglTexture,r.TEXTURE0+y)}function j(E,y){const O=n.get(E);if(E.version>0&&O.__version!==E.version){q(O,E,y);return}t.bindTexture(r.TEXTURE_3D,O.__webglTexture,r.TEXTURE0+y)}function V(E,y){const O=n.get(E);if(E.version>0&&O.__version!==E.version){Q(O,E,y);return}t.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+y)}const te={[Pi]:r.REPEAT,[On]:r.CLAMP_TO_EDGE,[er]:r.MIRRORED_REPEAT},re={[Rt]:r.NEAREST,[Xc]:r.NEAREST_MIPMAP_NEAREST,[rs]:r.NEAREST_MIPMAP_LINEAR,[Ot]:r.LINEAR,[Ys]:r.LINEAR_MIPMAP_NEAREST,[Mn]:r.LINEAR_MIPMAP_LINEAR},ve={[xh]:r.NEVER,[Ah]:r.ALWAYS,[yh]:r.LESS,[il]:r.LEQUAL,[vh]:r.EQUAL,[wh]:r.GEQUAL,[Mh]:r.GREATER,[Sh]:r.NOTEQUAL};function Ne(E,y){if(y.type===Qt&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Ot||y.magFilter===Ys||y.magFilter===rs||y.magFilter===Mn||y.minFilter===Ot||y.minFilter===Ys||y.minFilter===rs||y.minFilter===Mn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(E,r.TEXTURE_WRAP_S,te[y.wrapS]),r.texParameteri(E,r.TEXTURE_WRAP_T,te[y.wrapT]),(E===r.TEXTURE_3D||E===r.TEXTURE_2D_ARRAY)&&r.texParameteri(E,r.TEXTURE_WRAP_R,te[y.wrapR]),r.texParameteri(E,r.TEXTURE_MAG_FILTER,re[y.magFilter]),r.texParameteri(E,r.TEXTURE_MIN_FILTER,re[y.minFilter]),y.compareFunction&&(r.texParameteri(E,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(E,r.TEXTURE_COMPARE_FUNC,ve[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Rt||y.minFilter!==rs&&y.minFilter!==Mn||y.type===Qt&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");r.texParameterf(E,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Qe(E,y){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",b));const K=y.source;let Z=d.get(K);Z===void 0&&(Z={},d.set(K,Z));const Y=W(y);if(Y!==E.__cacheKey){Z[Y]===void 0&&(Z[Y]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Z[Y].usedTimes++;const xe=Z[E.__cacheKey];xe!==void 0&&(Z[E.__cacheKey].usedTimes--,xe.usedTimes===0&&A(y)),E.__cacheKey=Y,E.__webglTexture=Z[Y].texture}return O}function q(E,y,O){let K=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(K=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(K=r.TEXTURE_3D);const Z=Qe(E,y),Y=y.source;t.bindTexture(K,E.__webglTexture,r.TEXTURE0+O);const xe=n.get(Y);if(Y.version!==xe.__version||Z===!0){t.activeTexture(r.TEXTURE0+O);const oe=ze.getPrimaries(ze.workingColorSpace),ue=y.colorSpace===Fn?null:ze.getPrimaries(y.colorSpace),qe=y.colorSpace===Fn||oe===ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let J=_(y.image,!1,i.maxTextureSize);J=st(y,J);const de=s.convert(y.format,y.colorSpace),Ae=s.convert(y.type);let be=w(y.internalFormat,de,Ae,y.colorSpace,y.isVideoTexture);Ne(K,y);let fe;const He=y.mipmaps,Ue=y.isVideoTexture!==!0,nt=xe.__version===void 0||Z===!0,P=Y.dataReady,se=L(y,J);if(y.isDepthTexture)be=x(y.format===Ni,y.type),nt&&(Ue?t.texStorage2D(r.TEXTURE_2D,1,be,J.width,J.height):t.texImage2D(r.TEXTURE_2D,0,be,J.width,J.height,0,de,Ae,null));else if(y.isDataTexture)if(He.length>0){Ue&&nt&&t.texStorage2D(r.TEXTURE_2D,se,be,He[0].width,He[0].height);for(let H=0,$=He.length;H<$;H++)fe=He[H],Ue?P&&t.texSubImage2D(r.TEXTURE_2D,H,0,0,fe.width,fe.height,de,Ae,fe.data):t.texImage2D(r.TEXTURE_2D,H,be,fe.width,fe.height,0,de,Ae,fe.data);y.generateMipmaps=!1}else Ue?(nt&&t.texStorage2D(r.TEXTURE_2D,se,be,J.width,J.height),P&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,J.width,J.height,de,Ae,J.data)):t.texImage2D(r.TEXTURE_2D,0,be,J.width,J.height,0,de,Ae,J.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ue&&nt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,se,be,He[0].width,He[0].height,J.depth);for(let H=0,$=He.length;H<$;H++)if(fe=He[H],y.format!==Gt)if(de!==null)if(Ue){if(P)if(y.layerUpdates.size>0){const he=gc(fe.width,fe.height,y.format,y.type);for(const ce of y.layerUpdates){const Ce=fe.data.subarray(ce*he/fe.data.BYTES_PER_ELEMENT,(ce+1)*he/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,H,0,0,ce,fe.width,fe.height,1,de,Ce)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,H,0,0,0,fe.width,fe.height,J.depth,de,fe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,H,be,fe.width,fe.height,J.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?P&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,H,0,0,0,fe.width,fe.height,J.depth,de,Ae,fe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,H,be,fe.width,fe.height,J.depth,0,de,Ae,fe.data)}else{Ue&&nt&&t.texStorage2D(r.TEXTURE_2D,se,be,He[0].width,He[0].height);for(let H=0,$=He.length;H<$;H++)fe=He[H],y.format!==Gt?de!==null?Ue?P&&t.compressedTexSubImage2D(r.TEXTURE_2D,H,0,0,fe.width,fe.height,de,fe.data):t.compressedTexImage2D(r.TEXTURE_2D,H,be,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?P&&t.texSubImage2D(r.TEXTURE_2D,H,0,0,fe.width,fe.height,de,Ae,fe.data):t.texImage2D(r.TEXTURE_2D,H,be,fe.width,fe.height,0,de,Ae,fe.data)}else if(y.isDataArrayTexture)if(Ue){if(nt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,se,be,J.width,J.height,J.depth),P)if(y.layerUpdates.size>0){const H=gc(J.width,J.height,y.format,y.type);for(const $ of y.layerUpdates){const he=J.data.subarray($*H/J.data.BYTES_PER_ELEMENT,($+1)*H/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,$,J.width,J.height,1,de,Ae,he)}y.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,de,Ae,J.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,be,J.width,J.height,J.depth,0,de,Ae,J.data);else if(y.isData3DTexture)Ue?(nt&&t.texStorage3D(r.TEXTURE_3D,se,be,J.width,J.height,J.depth),P&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,de,Ae,J.data)):t.texImage3D(r.TEXTURE_3D,0,be,J.width,J.height,J.depth,0,de,Ae,J.data);else if(y.isFramebufferTexture){if(nt)if(Ue)t.texStorage2D(r.TEXTURE_2D,se,be,J.width,J.height);else{let H=J.width,$=J.height;for(let he=0;he<se;he++)t.texImage2D(r.TEXTURE_2D,he,be,H,$,0,de,Ae,null),H>>=1,$>>=1}}else if(He.length>0){if(Ue&&nt){const H=Me(He[0]);t.texStorage2D(r.TEXTURE_2D,se,be,H.width,H.height)}for(let H=0,$=He.length;H<$;H++)fe=He[H],Ue?P&&t.texSubImage2D(r.TEXTURE_2D,H,0,0,de,Ae,fe):t.texImage2D(r.TEXTURE_2D,H,be,de,Ae,fe);y.generateMipmaps=!1}else if(Ue){if(nt){const H=Me(J);t.texStorage2D(r.TEXTURE_2D,se,be,H.width,H.height)}P&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,de,Ae,J)}else t.texImage2D(r.TEXTURE_2D,0,be,de,Ae,J);m(y)&&f(K),xe.__version=Y.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function Q(E,y,O){if(y.image.length!==6)return;const K=Qe(E,y),Z=y.source;t.bindTexture(r.TEXTURE_CUBE_MAP,E.__webglTexture,r.TEXTURE0+O);const Y=n.get(Z);if(Z.version!==Y.__version||K===!0){t.activeTexture(r.TEXTURE0+O);const xe=ze.getPrimaries(ze.workingColorSpace),oe=y.colorSpace===Fn?null:ze.getPrimaries(y.colorSpace),ue=y.colorSpace===Fn||xe===oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const qe=y.isCompressedTexture||y.image[0].isCompressedTexture,J=y.image[0]&&y.image[0].isDataTexture,de=[];for(let $=0;$<6;$++)!qe&&!J?de[$]=_(y.image[$],!0,i.maxCubemapSize):de[$]=J?y.image[$].image:y.image[$],de[$]=st(y,de[$]);const Ae=de[0],be=s.convert(y.format,y.colorSpace),fe=s.convert(y.type),He=w(y.internalFormat,be,fe,y.colorSpace),Ue=y.isVideoTexture!==!0,nt=Y.__version===void 0||K===!0,P=Z.dataReady;let se=L(y,Ae);Ne(r.TEXTURE_CUBE_MAP,y);let H;if(qe){Ue&&nt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,se,He,Ae.width,Ae.height);for(let $=0;$<6;$++){H=de[$].mipmaps;for(let he=0;he<H.length;he++){const ce=H[he];y.format!==Gt?be!==null?Ue?P&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,he,0,0,ce.width,ce.height,be,ce.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,he,He,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?P&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,he,0,0,ce.width,ce.height,be,fe,ce.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,he,He,ce.width,ce.height,0,be,fe,ce.data)}}}else{if(H=y.mipmaps,Ue&&nt){H.length>0&&se++;const $=Me(de[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,se,He,$.width,$.height)}for(let $=0;$<6;$++)if(J){Ue?P&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,de[$].width,de[$].height,be,fe,de[$].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,He,de[$].width,de[$].height,0,be,fe,de[$].data);for(let he=0;he<H.length;he++){const Ce=H[he].image[$].image;Ue?P&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,he+1,0,0,Ce.width,Ce.height,be,fe,Ce.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,he+1,He,Ce.width,Ce.height,0,be,fe,Ce.data)}}else{Ue?P&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,be,fe,de[$]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,He,be,fe,de[$]);for(let he=0;he<H.length;he++){const ce=H[he];Ue?P&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,he+1,0,0,be,fe,ce.image[$]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,he+1,He,be,fe,ce.image[$])}}}m(y)&&f(r.TEXTURE_CUBE_MAP),Y.__version=Z.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function _e(E,y,O,K,Z,Y){const xe=s.convert(O.format,O.colorSpace),oe=s.convert(O.type),ue=w(O.internalFormat,xe,oe,O.colorSpace),qe=n.get(y),J=n.get(O);if(J.__renderTarget=y,!qe.__hasExternalTextures){const de=Math.max(1,y.width>>Y),Ae=Math.max(1,y.height>>Y);Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?t.texImage3D(Z,Y,ue,de,Ae,y.depth,0,xe,oe,null):t.texImage2D(Z,Y,ue,de,Ae,0,xe,oe,null)}t.bindFramebuffer(r.FRAMEBUFFER,E),Ge(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,K,Z,J.__webglTexture,0,Ve(y)):(Z===r.TEXTURE_2D||Z>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,K,Z,J.__webglTexture,Y),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ae(E,y,O){if(r.bindRenderbuffer(r.RENDERBUFFER,E),y.depthBuffer){const K=y.depthTexture,Z=K&&K.isDepthTexture?K.type:null,Y=x(y.stencilBuffer,Z),xe=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,oe=Ve(y);Ge(y)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,oe,Y,y.width,y.height):O?r.renderbufferStorageMultisample(r.RENDERBUFFER,oe,Y,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,Y,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,xe,r.RENDERBUFFER,E)}else{const K=y.textures;for(let Z=0;Z<K.length;Z++){const Y=K[Z],xe=s.convert(Y.format,Y.colorSpace),oe=s.convert(Y.type),ue=w(Y.internalFormat,xe,oe,Y.colorSpace),qe=Ve(y);O&&Ge(y)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,qe,ue,y.width,y.height):Ge(y)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,qe,ue,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,ue,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ee(E,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(y.depthTexture);K.__renderTarget=y,(!K.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),X(y.depthTexture,0);const Z=K.__webglTexture,Y=Ve(y);if(y.depthTexture.format===bi)Ge(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0,Y):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0);else if(y.depthTexture.format===Ni)Ge(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0,Y):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Re(E){const y=n.get(E),O=E.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==E.depthTexture){const K=E.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),K){const Z=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,K.removeEventListener("dispose",Z)};K.addEventListener("dispose",Z),y.__depthDisposeCallback=Z}y.__boundDepthTexture=K}if(E.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Ee(y.__webglFramebuffer,E)}else if(O){y.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[K]),y.__webglDepthbuffer[K]===void 0)y.__webglDepthbuffer[K]=r.createRenderbuffer(),ae(y.__webglDepthbuffer[K],E,!1);else{const Z=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Y=y.__webglDepthbuffer[K];r.bindRenderbuffer(r.RENDERBUFFER,Y),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=r.createRenderbuffer(),ae(y.__webglDepthbuffer,E,!1);else{const K=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=y.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,Z)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Oe(E,y,O){const K=n.get(E);y!==void 0&&_e(K.__webglFramebuffer,E,E.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),O!==void 0&&Re(E)}function lt(E){const y=E.texture,O=n.get(E),K=n.get(y);E.addEventListener("dispose",T);const Z=E.textures,Y=E.isWebGLCubeRenderTarget===!0,xe=Z.length>1;if(xe||(K.__webglTexture===void 0&&(K.__webglTexture=r.createTexture()),K.__version=y.version,a.memory.textures++),Y){O.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[oe]=[];for(let ue=0;ue<y.mipmaps.length;ue++)O.__webglFramebuffer[oe][ue]=r.createFramebuffer()}else O.__webglFramebuffer[oe]=r.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let oe=0;oe<y.mipmaps.length;oe++)O.__webglFramebuffer[oe]=r.createFramebuffer()}else O.__webglFramebuffer=r.createFramebuffer();if(xe)for(let oe=0,ue=Z.length;oe<ue;oe++){const qe=n.get(Z[oe]);qe.__webglTexture===void 0&&(qe.__webglTexture=r.createTexture(),a.memory.textures++)}if(E.samples>0&&Ge(E)===!1){O.__webglMultisampledFramebuffer=r.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let oe=0;oe<Z.length;oe++){const ue=Z[oe];O.__webglColorRenderbuffer[oe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,O.__webglColorRenderbuffer[oe]);const qe=s.convert(ue.format,ue.colorSpace),J=s.convert(ue.type),de=w(ue.internalFormat,qe,J,ue.colorSpace,E.isXRRenderTarget===!0),Ae=Ve(E);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ae,de,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,O.__webglColorRenderbuffer[oe])}r.bindRenderbuffer(r.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=r.createRenderbuffer(),ae(O.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Y){t.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture),Ne(r.TEXTURE_CUBE_MAP,y);for(let oe=0;oe<6;oe++)if(y.mipmaps&&y.mipmaps.length>0)for(let ue=0;ue<y.mipmaps.length;ue++)_e(O.__webglFramebuffer[oe][ue],E,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ue);else _e(O.__webglFramebuffer[oe],E,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(y)&&f(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let oe=0,ue=Z.length;oe<ue;oe++){const qe=Z[oe],J=n.get(qe);t.bindTexture(r.TEXTURE_2D,J.__webglTexture),Ne(r.TEXTURE_2D,qe),_e(O.__webglFramebuffer,E,qe,r.COLOR_ATTACHMENT0+oe,r.TEXTURE_2D,0),m(qe)&&f(r.TEXTURE_2D)}t.unbindTexture()}else{let oe=r.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(oe=E.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(oe,K.__webglTexture),Ne(oe,y),y.mipmaps&&y.mipmaps.length>0)for(let ue=0;ue<y.mipmaps.length;ue++)_e(O.__webglFramebuffer[ue],E,y,r.COLOR_ATTACHMENT0,oe,ue);else _e(O.__webglFramebuffer,E,y,r.COLOR_ATTACHMENT0,oe,0);m(y)&&f(oe),t.unbindTexture()}E.depthBuffer&&Re(E)}function We(E){const y=E.textures;for(let O=0,K=y.length;O<K;O++){const Z=y[O];if(m(Z)){const Y=M(E),xe=n.get(Z).__webglTexture;t.bindTexture(Y,xe),f(Y),t.unbindTexture()}}}const ft=[],U=[];function Bt(E){if(E.samples>0){if(Ge(E)===!1){const y=E.textures,O=E.width,K=E.height;let Z=r.COLOR_BUFFER_BIT;const Y=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xe=n.get(E),oe=y.length>1;if(oe)for(let ue=0;ue<y.length;ue++)t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let ue=0;ue<y.length;ue++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Z|=r.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Z|=r.STENCIL_BUFFER_BIT)),oe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,xe.__webglColorRenderbuffer[ue]);const qe=n.get(y[ue]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,qe,0)}r.blitFramebuffer(0,0,O,K,0,0,O,K,Z,r.NEAREST),c===!0&&(ft.length=0,U.length=0,ft.push(r.COLOR_ATTACHMENT0+ue),E.depthBuffer&&E.resolveDepthBuffer===!1&&(ft.push(Y),U.push(Y),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,U)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ft))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),oe)for(let ue=0;ue<y.length;ue++){t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,xe.__webglColorRenderbuffer[ue]);const qe=n.get(y[ue]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.TEXTURE_2D,qe,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){const y=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[y])}}}function Ve(E){return Math.min(i.maxSamples,E.samples)}function Ge(E){const y=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function we(E){const y=a.render.frame;h.get(E)!==y&&(h.set(E,y),E.update())}function st(E,y){const O=E.colorSpace,K=E.format,Z=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||O!==It&&O!==Fn&&(ze.getTransfer(O)===tt?(K!==Gt||Z!==En)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),y}function Me(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=B,this.setTexture2D=X,this.setTexture2DArray=G,this.setTexture3D=j,this.setTextureCube=V,this.rebindTextures=Oe,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Ge}function qm(r,e){function t(n,i=Fn){let s;const a=ze.getTransfer(i);if(n===En)return r.UNSIGNED_BYTE;if(n===Ga)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Ha)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Kc)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Yc)return r.BYTE;if(n===jc)return r.SHORT;if(n===us)return r.UNSIGNED_SHORT;if(n===Va)return r.INT;if(n===ni)return r.UNSIGNED_INT;if(n===Qt)return r.FLOAT;if(n===ms)return r.HALF_FLOAT;if(n===$c)return r.ALPHA;if(n===Zc)return r.RGB;if(n===Gt)return r.RGBA;if(n===Qc)return r.LUMINANCE;if(n===Jc)return r.LUMINANCE_ALPHA;if(n===bi)return r.DEPTH_COMPONENT;if(n===Ni)return r.DEPTH_STENCIL;if(n===Wa)return r.RED;if(n===qa)return r.RED_INTEGER;if(n===el)return r.RG;if(n===Xa)return r.RG_INTEGER;if(n===Ya)return r.RGBA_INTEGER;if(n===js||n===Ks||n===$s||n===Zs)if(a===tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===js)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ks)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$s)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Zs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===js)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ks)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$s)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Zs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ra||n===aa||n===oa||n===ca)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ra)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===aa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===oa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ca)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===la||n===ha||n===ua)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===la||n===ha)return a===tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ua)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===da||n===fa||n===pa||n===ma||n===ga||n===_a||n===xa||n===ya||n===va||n===Ma||n===Sa||n===wa||n===Aa||n===Ea)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===da)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fa)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===pa)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ma)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ga)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_a)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xa)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ya)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===va)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ma)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Sa)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wa)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Aa)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ea)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qs||n===ba||n===Ta)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Qs)return a===tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ba)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ta)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===tl||n===Ra||n===Ca||n===Ia)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Qs)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ra)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ca)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ia)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Di?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class Xm extends bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class dt extends ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ym={type:"move"};class kr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ym)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new dt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const jm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Km=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class $m{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new xt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new bn({vertexShader:jm,fragmentShader:Km,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ne(new Gn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Zm extends ri{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,g=null;const _=new $m,m=t.getContextAttributes();let f=null,M=null;const w=[],x=[],L=new Pe;let b=null;const T=new bt;T.viewport=new je;const I=new bt;I.viewport=new je;const A=[T,I],v=new Xm;let R=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Q=w[q];return Q===void 0&&(Q=new kr,w[q]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(q){let Q=w[q];return Q===void 0&&(Q=new kr,w[q]=Q),Q.getGripSpace()},this.getHand=function(q){let Q=w[q];return Q===void 0&&(Q=new kr,w[q]=Q),Q.getHandSpace()};function F(q){const Q=x.indexOf(q.inputSource);if(Q===-1)return;const _e=w[Q];_e!==void 0&&(_e.update(q.inputSource,q.frame,l||a),_e.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",X);for(let q=0;q<w.length;q++){const Q=x[q];Q!==null&&(x[q]=null,w[q].disconnect(Q))}R=null,B=null,_.reset(),e.setRenderTarget(f),p=null,d=null,u=null,i=null,M=null,Qe.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",W),i.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(L),i.renderState.layers===void 0){const Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,Q),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new ii(p.framebufferWidth,p.framebufferHeight,{format:Gt,type:En,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,_e=null,ae=null;m.depth&&(ae=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=m.stencil?Ni:bi,_e=m.stencil?Di:ni);const Ee={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:s};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(Ee),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new ii(d.textureWidth,d.textureHeight,{format:Gt,type:En,depthTexture:new ml(d.textureWidth,d.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Qe.setContext(i),Qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X(q){for(let Q=0;Q<q.removed.length;Q++){const _e=q.removed[Q],ae=x.indexOf(_e);ae>=0&&(x[ae]=null,w[ae].disconnect(_e))}for(let Q=0;Q<q.added.length;Q++){const _e=q.added[Q];let ae=x.indexOf(_e);if(ae===-1){for(let Re=0;Re<w.length;Re++)if(Re>=x.length){x.push(_e),ae=Re;break}else if(x[Re]===null){x[Re]=_e,ae=Re;break}if(ae===-1)break}const Ee=w[ae];Ee&&Ee.connect(_e)}}const G=new C,j=new C;function V(q,Q,_e){G.setFromMatrixPosition(Q.matrixWorld),j.setFromMatrixPosition(_e.matrixWorld);const ae=G.distanceTo(j),Ee=Q.projectionMatrix.elements,Re=_e.projectionMatrix.elements,Oe=Ee[14]/(Ee[10]-1),lt=Ee[14]/(Ee[10]+1),We=(Ee[9]+1)/Ee[5],ft=(Ee[9]-1)/Ee[5],U=(Ee[8]-1)/Ee[0],Bt=(Re[8]+1)/Re[0],Ve=Oe*U,Ge=Oe*Bt,we=ae/(-U+Bt),st=we*-U;if(Q.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(st),q.translateZ(we),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ee[10]===-1)q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const Me=Oe+we,E=lt+we,y=Ve-st,O=Ge+(ae-st),K=We*lt/E*Me,Z=ft*lt/E*Me;q.projectionMatrix.makePerspective(y,O,K,Z,Me,E),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function te(q,Q){Q===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Q.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let Q=q.near,_e=q.far;_.texture!==null&&(_.depthNear>0&&(Q=_.depthNear),_.depthFar>0&&(_e=_.depthFar)),v.near=I.near=T.near=Q,v.far=I.far=T.far=_e,(R!==v.near||B!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),R=v.near,B=v.far),T.layers.mask=q.layers.mask|2,I.layers.mask=q.layers.mask|4,v.layers.mask=T.layers.mask|I.layers.mask;const ae=q.parent,Ee=v.cameras;te(v,ae);for(let Re=0;Re<Ee.length;Re++)te(Ee[Re],ae);Ee.length===2?V(v,T,I):v.projectionMatrix.copy(T.projectionMatrix),re(q,v,ae)};function re(q,Q,_e){_e===null?q.matrix.copy(Q.matrixWorld):(q.matrix.copy(_e.matrixWorld),q.matrix.invert(),q.matrix.multiply(Q.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ui*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(q){c=q,d!==null&&(d.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let ve=null;function Ne(q,Q){if(h=Q.getViewerPose(l||a),g=Q,h!==null){const _e=h.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let ae=!1;_e.length!==v.cameras.length&&(v.cameras.length=0,ae=!0);for(let Re=0;Re<_e.length;Re++){const Oe=_e[Re];let lt=null;if(p!==null)lt=p.getViewport(Oe);else{const ft=u.getViewSubImage(d,Oe);lt=ft.viewport,Re===0&&(e.setRenderTargetTextures(M,ft.colorTexture,d.ignoreDepthValues?void 0:ft.depthStencilTexture),e.setRenderTarget(M))}let We=A[Re];We===void 0&&(We=new bt,We.layers.enable(Re),We.viewport=new je,A[Re]=We),We.matrix.fromArray(Oe.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Oe.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(lt.x,lt.y,lt.width,lt.height),Re===0&&(v.matrix.copy(We.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ae===!0&&v.cameras.push(We)}const Ee=i.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")){const Re=u.getDepthInformation(_e[0]);Re&&Re.isValid&&Re.texture&&_.init(e,Re,i.renderState)}}for(let _e=0;_e<w.length;_e++){const ae=x[_e],Ee=w[_e];ae!==null&&Ee!==void 0&&Ee.update(ae,Q,l||a)}ve&&ve(q,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const Qe=new pl;Qe.setAnimationLoop(Ne),this.setAnimationLoop=function(q){ve=q},this.dispose=function(){}}}const Kn=new sn,Qm=new De;function Jm(r,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,ul(r)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,M,w,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),u(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),_(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,M,w):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Tt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Tt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const M=e.get(f),w=M.envMap,x=M.envMapRotation;w&&(m.envMap.value=w,Kn.copy(x),Kn.x*=-1,Kn.y*=-1,Kn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Kn.y*=-1,Kn.z*=-1),m.envMapRotation.value.setFromMatrix4(Qm.makeRotationFromEuler(Kn)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,M,w){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=w*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Tt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const M=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function eg(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,w){const x=w.program;n.uniformBlockBinding(M,x)}function l(M,w){let x=i[M.id];x===void 0&&(g(M),x=h(M),i[M.id]=x,M.addEventListener("dispose",m));const L=w.program;n.updateUBOMapping(M,L);const b=e.render.frame;s[M.id]!==b&&(d(M),s[M.id]=b)}function h(M){const w=u();M.__bindingPointIndex=w;const x=r.createBuffer(),L=M.__size,b=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,L,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,w,x),x}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const w=i[M.id],x=M.uniforms,L=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,w);for(let b=0,T=x.length;b<T;b++){const I=Array.isArray(x[b])?x[b]:[x[b]];for(let A=0,v=I.length;A<v;A++){const R=I[A];if(p(R,b,A,L)===!0){const B=R.__offset,F=Array.isArray(R.value)?R.value:[R.value];let W=0;for(let X=0;X<F.length;X++){const G=F[X],j=_(G);typeof G=="number"||typeof G=="boolean"?(R.__data[0]=G,r.bufferSubData(r.UNIFORM_BUFFER,B+W,R.__data)):G.isMatrix3?(R.__data[0]=G.elements[0],R.__data[1]=G.elements[1],R.__data[2]=G.elements[2],R.__data[3]=0,R.__data[4]=G.elements[3],R.__data[5]=G.elements[4],R.__data[6]=G.elements[5],R.__data[7]=0,R.__data[8]=G.elements[6],R.__data[9]=G.elements[7],R.__data[10]=G.elements[8],R.__data[11]=0):(G.toArray(R.__data,W),W+=j.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,B,R.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(M,w,x,L){const b=M.value,T=w+"_"+x;if(L[T]===void 0)return typeof b=="number"||typeof b=="boolean"?L[T]=b:L[T]=b.clone(),!0;{const I=L[T];if(typeof b=="number"||typeof b=="boolean"){if(I!==b)return L[T]=b,!0}else if(I.equals(b)===!1)return I.copy(b),!0}return!1}function g(M){const w=M.uniforms;let x=0;const L=16;for(let T=0,I=w.length;T<I;T++){const A=Array.isArray(w[T])?w[T]:[w[T]];for(let v=0,R=A.length;v<R;v++){const B=A[v],F=Array.isArray(B.value)?B.value:[B.value];for(let W=0,X=F.length;W<X;W++){const G=F[W],j=_(G),V=x%L,te=V%j.boundary,re=V+te;x+=te,re!==0&&L-re<j.storage&&(x+=L-re),B.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=x,x+=j.storage}}}const b=x%L;return b>0&&(x+=L-b),M.__size=x,M.__cache={},this}function _(M){const w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=48,w.storage=48):M.isMatrix4?(w.boundary=64,w.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),w}function m(M){const w=M.target;w.removeEventListener("dispose",m);const x=a.indexOf(w.__bindingPointIndex);a.splice(x,1),r.deleteBuffer(i[w.id]),delete i[w.id],delete s[w.id]}function f(){for(const M in i)r.deleteBuffer(i[M]);a=[],i={},s={}}return{bind:c,update:l,dispose:f}}class tg{constructor(e={}){const{canvas:t=Gh(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const M=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yt,this.toneMapping=zn,this.toneMappingExposure=1;const x=this;let L=!1,b=0,T=0,I=null,A=-1,v=null;const R=new je,B=new je;let F=null;const W=new Se(0);let X=0,G=t.width,j=t.height,V=1,te=null,re=null;const ve=new je(0,0,G,j),Ne=new je(0,0,G,j);let Qe=!1;const q=new Za;let Q=!1,_e=!1;const ae=new De,Ee=new De,Re=new C,Oe=new je,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function ft(){return I===null?V:1}let U=n;function Bt(S,D){return t.getContext(S,D)}try{const S={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ka}`),t.addEventListener("webglcontextlost",$,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",ce,!1),U===null){const D="webgl2";if(U=Bt(D,S),U===null)throw Bt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Ve,Ge,we,st,Me,E,y,O,K,Z,Y,xe,oe,ue,qe,J,de,Ae,be,fe,He,Ue,nt,P;function se(){Ve=new ap(U),Ve.init(),Ue=new qm(U,Ve),Ge=new ep(U,Ve,e,Ue),we=new Gm(U,Ve),Ge.reverseDepthBuffer&&d&&we.buffers.depth.setReversed(!0),st=new lp(U),Me=new Tm,E=new Wm(U,Ve,we,Me,Ge,Ue,st),y=new np(x),O=new rp(x),K=new mu(U),nt=new Qf(U,K),Z=new op(U,K,st,nt),Y=new up(U,Z,K,st),be=new hp(U,Ge,E),J=new tp(Me),xe=new bm(x,y,O,Ve,Ge,nt,J),oe=new Jm(x,Me),ue=new Cm,qe=new Um(Ve),Ae=new Zf(x,y,O,we,Y,p,c),de=new zm(x,Y,Ge),P=new eg(U,st,Ge,we),fe=new Jf(U,Ve,st),He=new cp(U,Ve,st),st.programs=xe.programs,x.capabilities=Ge,x.extensions=Ve,x.properties=Me,x.renderLists=ue,x.shadowMap=de,x.state=we,x.info=st}se();const H=new Zm(x,U);this.xr=H,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const S=Ve.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Ve.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(S){S!==void 0&&(V=S,this.setSize(G,j,!1))},this.getSize=function(S){return S.set(G,j)},this.setSize=function(S,D,k=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=S,j=D,t.width=Math.floor(S*V),t.height=Math.floor(D*V),k===!0&&(t.style.width=S+"px",t.style.height=D+"px"),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(G*V,j*V).floor()},this.setDrawingBufferSize=function(S,D,k){G=S,j=D,V=k,t.width=Math.floor(S*k),t.height=Math.floor(D*k),this.setViewport(0,0,S,D)},this.getCurrentViewport=function(S){return S.copy(R)},this.getViewport=function(S){return S.copy(ve)},this.setViewport=function(S,D,k,z){S.isVector4?ve.set(S.x,S.y,S.z,S.w):ve.set(S,D,k,z),we.viewport(R.copy(ve).multiplyScalar(V).round())},this.getScissor=function(S){return S.copy(Ne)},this.setScissor=function(S,D,k,z){S.isVector4?Ne.set(S.x,S.y,S.z,S.w):Ne.set(S,D,k,z),we.scissor(B.copy(Ne).multiplyScalar(V).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(S){we.setScissorTest(Qe=S)},this.setOpaqueSort=function(S){te=S},this.setTransparentSort=function(S){re=S},this.getClearColor=function(S){return S.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor.apply(Ae,arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha.apply(Ae,arguments)},this.clear=function(S=!0,D=!0,k=!0){let z=0;if(S){let N=!1;if(I!==null){const ee=I.texture.format;N=ee===Ya||ee===Xa||ee===qa}if(N){const ee=I.texture.type,le=ee===En||ee===ni||ee===us||ee===Di||ee===Ga||ee===Ha,pe=Ae.getClearColor(),me=Ae.getClearAlpha(),Te=pe.r,Ie=pe.g,ge=pe.b;le?(g[0]=Te,g[1]=Ie,g[2]=ge,g[3]=me,U.clearBufferuiv(U.COLOR,0,g)):(_[0]=Te,_[1]=Ie,_[2]=ge,_[3]=me,U.clearBufferiv(U.COLOR,0,_))}else z|=U.COLOR_BUFFER_BIT}D&&(z|=U.DEPTH_BUFFER_BIT),k&&(z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",$,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),ue.dispose(),qe.dispose(),Me.dispose(),y.dispose(),O.dispose(),Y.dispose(),nt.dispose(),P.dispose(),xe.dispose(),H.dispose(),H.removeEventListener("sessionstart",lo),H.removeEventListener("sessionend",ho),Hn.stop()};function $(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const S=st.autoReset,D=de.enabled,k=de.autoUpdate,z=de.needsUpdate,N=de.type;se(),st.autoReset=S,de.enabled=D,de.autoUpdate=k,de.needsUpdate=z,de.type=N}function ce(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ce(S){const D=S.target;D.removeEventListener("dispose",Ce),ht(D)}function ht(S){vt(S),Me.remove(S)}function vt(S){const D=Me.get(S).programs;D!==void 0&&(D.forEach(function(k){xe.releaseProgram(k)}),S.isShaderMaterial&&xe.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,k,z,N,ee){D===null&&(D=lt);const le=N.isMesh&&N.matrixWorld.determinant()<0,pe=Ll(S,D,k,z,N);we.setMaterial(z,le);let me=k.index,Te=1;if(z.wireframe===!0){if(me=Z.getWireframeAttribute(k),me===void 0)return;Te=2}const Ie=k.drawRange,ge=k.attributes.position;let Xe=Ie.start*Te,it=(Ie.start+Ie.count)*Te;ee!==null&&(Xe=Math.max(Xe,ee.start*Te),it=Math.min(it,(ee.start+ee.count)*Te)),me!==null?(Xe=Math.max(Xe,0),it=Math.min(it,me.count)):ge!=null&&(Xe=Math.max(Xe,0),it=Math.min(it,ge.count));const rt=it-Xe;if(rt<0||rt===1/0)return;nt.setup(N,z,pe,k,me);let Pt,Ke=fe;if(me!==null&&(Pt=K.get(me),Ke=He,Ke.setIndex(Pt)),N.isMesh)z.wireframe===!0?(we.setLineWidth(z.wireframeLinewidth*ft()),Ke.setMode(U.LINES)):Ke.setMode(U.TRIANGLES);else if(N.isLine){let ye=z.linewidth;ye===void 0&&(ye=1),we.setLineWidth(ye*ft()),N.isLineSegments?Ke.setMode(U.LINES):N.isLineLoop?Ke.setMode(U.LINE_LOOP):Ke.setMode(U.LINE_STRIP)}else N.isPoints?Ke.setMode(U.POINTS):N.isSprite&&Ke.setMode(U.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Ke.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ve.get("WEBGL_multi_draw"))Ke.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const ye=N._multiDrawStarts,dn=N._multiDrawCounts,$e=N._multiDrawCount,qt=me?K.get(me).bytesPerElement:1,ai=Me.get(z).currentProgram.getUniforms();for(let Nt=0;Nt<$e;Nt++)ai.setValue(U,"_gl_DrawID",Nt),Ke.render(ye[Nt]/qt,dn[Nt])}else if(N.isInstancedMesh)Ke.renderInstances(Xe,rt,N.count);else if(k.isInstancedBufferGeometry){const ye=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,dn=Math.min(k.instanceCount,ye);Ke.renderInstances(Xe,rt,dn)}else Ke.render(Xe,rt)};function Je(S,D,k){S.transparent===!0&&S.side===on&&S.forceSinglePass===!1?(S.side=Tt,S.needsUpdate=!0,ys(S,D,k),S.side=An,S.needsUpdate=!0,ys(S,D,k),S.side=on):ys(S,D,k)}this.compile=function(S,D,k=null){k===null&&(k=S),f=qe.get(k),f.init(D),w.push(f),k.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),S!==k&&S.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();const z=new Set;return S.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ee=N.material;if(ee)if(Array.isArray(ee))for(let le=0;le<ee.length;le++){const pe=ee[le];Je(pe,k,N),z.add(pe)}else Je(ee,k,N),z.add(ee)}),w.pop(),f=null,z},this.compileAsync=function(S,D,k=null){const z=this.compile(S,D,k);return new Promise(N=>{function ee(){if(z.forEach(function(le){Me.get(le).currentProgram.isReady()&&z.delete(le)}),z.size===0){N(S);return}setTimeout(ee,10)}Ve.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let Wt=null;function un(S){Wt&&Wt(S)}function lo(){Hn.stop()}function ho(){Hn.start()}const Hn=new pl;Hn.setAnimationLoop(un),typeof self<"u"&&Hn.setContext(self),this.setAnimationLoop=function(S){Wt=S,H.setAnimationLoop(S),S===null?Hn.stop():Hn.start()},H.addEventListener("sessionstart",lo),H.addEventListener("sessionend",ho),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(D),D=H.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,D,I),f=qe.get(S,w.length),f.init(D),w.push(f),Ee.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),q.setFromProjectionMatrix(Ee),_e=this.localClippingEnabled,Q=J.init(this.clippingPlanes,_e),m=ue.get(S,M.length),m.init(),M.push(m),H.enabled===!0&&H.isPresenting===!0){const ee=x.xr.getDepthSensingMesh();ee!==null&&ur(ee,D,-1/0,x.sortObjects)}ur(S,D,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(te,re),We=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,We&&Ae.addToRenderList(m,S),this.info.render.frame++,Q===!0&&J.beginShadows();const k=f.state.shadowsArray;de.render(k,S,D),Q===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,N=m.transmissive;if(f.setupLights(),D.isArrayCamera){const ee=D.cameras;if(N.length>0)for(let le=0,pe=ee.length;le<pe;le++){const me=ee[le];fo(z,N,S,me)}We&&Ae.render(S);for(let le=0,pe=ee.length;le<pe;le++){const me=ee[le];uo(m,S,me,me.viewport)}}else N.length>0&&fo(z,N,S,D),We&&Ae.render(S),uo(m,S,D);I!==null&&(E.updateMultisampleRenderTarget(I),E.updateRenderTargetMipmap(I)),S.isScene===!0&&S.onAfterRender(x,S,D),nt.resetDefaultState(),A=-1,v=null,w.pop(),w.length>0?(f=w[w.length-1],Q===!0&&J.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function ur(S,D,k,z){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)k=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||q.intersectsSprite(S)){z&&Oe.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ee);const le=Y.update(S),pe=S.material;pe.visible&&m.push(S,le,pe,k,Oe.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||q.intersectsObject(S))){const le=Y.update(S),pe=S.material;if(z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Oe.copy(S.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),Oe.copy(le.boundingSphere.center)),Oe.applyMatrix4(S.matrixWorld).applyMatrix4(Ee)),Array.isArray(pe)){const me=le.groups;for(let Te=0,Ie=me.length;Te<Ie;Te++){const ge=me[Te],Xe=pe[ge.materialIndex];Xe&&Xe.visible&&m.push(S,le,Xe,k,Oe.z,ge)}}else pe.visible&&m.push(S,le,pe,k,Oe.z,null)}}const ee=S.children;for(let le=0,pe=ee.length;le<pe;le++)ur(ee[le],D,k,z)}function uo(S,D,k,z){const N=S.opaque,ee=S.transmissive,le=S.transparent;f.setupLightsView(k),Q===!0&&J.setGlobalState(x.clippingPlanes,k),z&&we.viewport(R.copy(z)),N.length>0&&xs(N,D,k),ee.length>0&&xs(ee,D,k),le.length>0&&xs(le,D,k),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function fo(S,D,k,z){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[z.id]===void 0&&(f.state.transmissionRenderTarget[z.id]=new ii(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?ms:En,minFilter:Mn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ze.workingColorSpace}));const ee=f.state.transmissionRenderTarget[z.id],le=z.viewport||R;ee.setSize(le.z,le.w);const pe=x.getRenderTarget();x.setRenderTarget(ee),x.getClearColor(W),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear(),We&&Ae.render(k);const me=x.toneMapping;x.toneMapping=zn;const Te=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),f.setupLightsView(z),Q===!0&&J.setGlobalState(x.clippingPlanes,z),xs(S,k,z),E.updateMultisampleRenderTarget(ee),E.updateRenderTargetMipmap(ee),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let ge=0,Xe=D.length;ge<Xe;ge++){const it=D[ge],rt=it.object,Pt=it.geometry,Ke=it.material,ye=it.group;if(Ke.side===on&&rt.layers.test(z.layers)){const dn=Ke.side;Ke.side=Tt,Ke.needsUpdate=!0,po(rt,k,z,Pt,Ke,ye),Ke.side=dn,Ke.needsUpdate=!0,Ie=!0}}Ie===!0&&(E.updateMultisampleRenderTarget(ee),E.updateRenderTargetMipmap(ee))}x.setRenderTarget(pe),x.setClearColor(W,X),Te!==void 0&&(z.viewport=Te),x.toneMapping=me}function xs(S,D,k){const z=D.isScene===!0?D.overrideMaterial:null;for(let N=0,ee=S.length;N<ee;N++){const le=S[N],pe=le.object,me=le.geometry,Te=z===null?le.material:z,Ie=le.group;pe.layers.test(k.layers)&&po(pe,D,k,me,Te,Ie)}}function po(S,D,k,z,N,ee){S.onBeforeRender(x,D,k,z,N,ee),S.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(x,D,k,z,S,ee),N.transparent===!0&&N.side===on&&N.forceSinglePass===!1?(N.side=Tt,N.needsUpdate=!0,x.renderBufferDirect(k,D,z,N,S,ee),N.side=An,N.needsUpdate=!0,x.renderBufferDirect(k,D,z,N,S,ee),N.side=on):x.renderBufferDirect(k,D,z,N,S,ee),S.onAfterRender(x,D,k,z,N,ee)}function ys(S,D,k){D.isScene!==!0&&(D=lt);const z=Me.get(S),N=f.state.lights,ee=f.state.shadowsArray,le=N.state.version,pe=xe.getParameters(S,N.state,ee,D,k),me=xe.getProgramCacheKey(pe);let Te=z.programs;z.environment=S.isMeshStandardMaterial?D.environment:null,z.fog=D.fog,z.envMap=(S.isMeshStandardMaterial?O:y).get(S.envMap||z.environment),z.envMapRotation=z.environment!==null&&S.envMap===null?D.environmentRotation:S.envMapRotation,Te===void 0&&(S.addEventListener("dispose",Ce),Te=new Map,z.programs=Te);let Ie=Te.get(me);if(Ie!==void 0){if(z.currentProgram===Ie&&z.lightsStateVersion===le)return go(S,pe),Ie}else pe.uniforms=xe.getUniforms(S),S.onBeforeCompile(pe,x),Ie=xe.acquireProgram(pe,me),Te.set(me,Ie),z.uniforms=pe.uniforms;const ge=z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(ge.clippingPlanes=J.uniform),go(S,pe),z.needsLights=Dl(S),z.lightsStateVersion=le,z.needsLights&&(ge.ambientLightColor.value=N.state.ambient,ge.lightProbe.value=N.state.probe,ge.directionalLights.value=N.state.directional,ge.directionalLightShadows.value=N.state.directionalShadow,ge.spotLights.value=N.state.spot,ge.spotLightShadows.value=N.state.spotShadow,ge.rectAreaLights.value=N.state.rectArea,ge.ltc_1.value=N.state.rectAreaLTC1,ge.ltc_2.value=N.state.rectAreaLTC2,ge.pointLights.value=N.state.point,ge.pointLightShadows.value=N.state.pointShadow,ge.hemisphereLights.value=N.state.hemi,ge.directionalShadowMap.value=N.state.directionalShadowMap,ge.directionalShadowMatrix.value=N.state.directionalShadowMatrix,ge.spotShadowMap.value=N.state.spotShadowMap,ge.spotLightMatrix.value=N.state.spotLightMatrix,ge.spotLightMap.value=N.state.spotLightMap,ge.pointShadowMap.value=N.state.pointShadowMap,ge.pointShadowMatrix.value=N.state.pointShadowMatrix),z.currentProgram=Ie,z.uniformsList=null,Ie}function mo(S){if(S.uniformsList===null){const D=S.currentProgram.getUniforms();S.uniformsList=Js.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function go(S,D){const k=Me.get(S);k.outputColorSpace=D.outputColorSpace,k.batching=D.batching,k.batchingColor=D.batchingColor,k.instancing=D.instancing,k.instancingColor=D.instancingColor,k.instancingMorph=D.instancingMorph,k.skinning=D.skinning,k.morphTargets=D.morphTargets,k.morphNormals=D.morphNormals,k.morphColors=D.morphColors,k.morphTargetsCount=D.morphTargetsCount,k.numClippingPlanes=D.numClippingPlanes,k.numIntersection=D.numClipIntersection,k.vertexAlphas=D.vertexAlphas,k.vertexTangents=D.vertexTangents,k.toneMapping=D.toneMapping}function Ll(S,D,k,z,N){D.isScene!==!0&&(D=lt),E.resetTextureUnits();const ee=D.fog,le=z.isMeshStandardMaterial?D.environment:null,pe=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:It,me=(z.isMeshStandardMaterial?O:y).get(z.envMap||le),Te=z.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ie=!!k.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),ge=!!k.morphAttributes.position,Xe=!!k.morphAttributes.normal,it=!!k.morphAttributes.color;let rt=zn;z.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(rt=x.toneMapping);const Pt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Ke=Pt!==void 0?Pt.length:0,ye=Me.get(z),dn=f.state.lights;if(Q===!0&&(_e===!0||S!==v)){const kt=S===v&&z.id===A;J.setState(z,S,kt)}let $e=!1;z.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==dn.state.version||ye.outputColorSpace!==pe||N.isBatchedMesh&&ye.batching===!1||!N.isBatchedMesh&&ye.batching===!0||N.isBatchedMesh&&ye.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&ye.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&ye.instancing===!1||!N.isInstancedMesh&&ye.instancing===!0||N.isSkinnedMesh&&ye.skinning===!1||!N.isSkinnedMesh&&ye.skinning===!0||N.isInstancedMesh&&ye.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&ye.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&ye.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&ye.instancingMorph===!1&&N.morphTexture!==null||ye.envMap!==me||z.fog===!0&&ye.fog!==ee||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==J.numPlanes||ye.numIntersection!==J.numIntersection)||ye.vertexAlphas!==Te||ye.vertexTangents!==Ie||ye.morphTargets!==ge||ye.morphNormals!==Xe||ye.morphColors!==it||ye.toneMapping!==rt||ye.morphTargetsCount!==Ke)&&($e=!0):($e=!0,ye.__version=z.version);let qt=ye.currentProgram;$e===!0&&(qt=ys(z,D,N));let ai=!1,Nt=!1,ji=!1;const at=qt.getUniforms(),rn=ye.uniforms;if(we.useProgram(qt.program)&&(ai=!0,Nt=!0,ji=!0),z.id!==A&&(A=z.id,Nt=!0),ai||v!==S){we.buffers.depth.getReversed()?(ae.copy(S.projectionMatrix),Wh(ae),qh(ae),at.setValue(U,"projectionMatrix",ae)):at.setValue(U,"projectionMatrix",S.projectionMatrix),at.setValue(U,"viewMatrix",S.matrixWorldInverse);const Tn=at.map.cameraPosition;Tn!==void 0&&Tn.setValue(U,Re.setFromMatrixPosition(S.matrixWorld)),Ge.logarithmicDepthBuffer&&at.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&at.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),v!==S&&(v=S,Nt=!0,ji=!0)}if(N.isSkinnedMesh){at.setOptional(U,N,"bindMatrix"),at.setOptional(U,N,"bindMatrixInverse");const kt=N.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),at.setValue(U,"boneTexture",kt.boneTexture,E))}N.isBatchedMesh&&(at.setOptional(U,N,"batchingTexture"),at.setValue(U,"batchingTexture",N._matricesTexture,E),at.setOptional(U,N,"batchingIdTexture"),at.setValue(U,"batchingIdTexture",N._indirectTexture,E),at.setOptional(U,N,"batchingColorTexture"),N._colorsTexture!==null&&at.setValue(U,"batchingColorTexture",N._colorsTexture,E));const Ki=k.morphAttributes;if((Ki.position!==void 0||Ki.normal!==void 0||Ki.color!==void 0)&&be.update(N,k,qt),(Nt||ye.receiveShadow!==N.receiveShadow)&&(ye.receiveShadow=N.receiveShadow,at.setValue(U,"receiveShadow",N.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(rn.envMap.value=me,rn.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&D.environment!==null&&(rn.envMapIntensity.value=D.environmentIntensity),Nt&&(at.setValue(U,"toneMappingExposure",x.toneMappingExposure),ye.needsLights&&Pl(rn,ji),ee&&z.fog===!0&&oe.refreshFogUniforms(rn,ee),oe.refreshMaterialUniforms(rn,z,V,j,f.state.transmissionRenderTarget[S.id]),Js.upload(U,mo(ye),rn,E)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Js.upload(U,mo(ye),rn,E),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&at.setValue(U,"center",N.center),at.setValue(U,"modelViewMatrix",N.modelViewMatrix),at.setValue(U,"normalMatrix",N.normalMatrix),at.setValue(U,"modelMatrix",N.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const kt=z.uniformsGroups;for(let Tn=0,Rn=kt.length;Tn<Rn;Tn++){const _o=kt[Tn];P.update(_o,qt),P.bind(_o,qt)}}return qt}function Pl(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function Dl(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(S,D,k){Me.get(S.texture).__webglTexture=D,Me.get(S.depthTexture).__webglTexture=k;const z=Me.get(S);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=k===void 0,z.__autoAllocateDepthBuffer||Ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,D){const k=Me.get(S);k.__webglFramebuffer=D,k.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,k=0){I=S,b=D,T=k;let z=!0,N=null,ee=!1,le=!1;if(S){const me=Me.get(S);if(me.__useDefaultFramebuffer!==void 0)we.bindFramebuffer(U.FRAMEBUFFER,null),z=!1;else if(me.__webglFramebuffer===void 0)E.setupRenderTarget(S);else if(me.__hasExternalTextures)E.rebindTextures(S,Me.get(S.texture).__webglTexture,Me.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const ge=S.depthTexture;if(me.__boundDepthTexture!==ge){if(ge!==null&&Me.has(ge)&&(S.width!==ge.image.width||S.height!==ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(S)}}const Te=S.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(le=!0);const Ie=Me.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ie[D])?N=Ie[D][k]:N=Ie[D],ee=!0):S.samples>0&&E.useMultisampledRTT(S)===!1?N=Me.get(S).__webglMultisampledFramebuffer:Array.isArray(Ie)?N=Ie[k]:N=Ie,R.copy(S.viewport),B.copy(S.scissor),F=S.scissorTest}else R.copy(ve).multiplyScalar(V).floor(),B.copy(Ne).multiplyScalar(V).floor(),F=Qe;if(we.bindFramebuffer(U.FRAMEBUFFER,N)&&z&&we.drawBuffers(S,N),we.viewport(R),we.scissor(B),we.setScissorTest(F),ee){const me=Me.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,me.__webglTexture,k)}else if(le){const me=Me.get(S.texture),Te=D||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,me.__webglTexture,k||0,Te)}A=-1},this.readRenderTargetPixels=function(S,D,k,z,N,ee,le){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=Me.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&le!==void 0&&(pe=pe[le]),pe){we.bindFramebuffer(U.FRAMEBUFFER,pe);try{const me=S.texture,Te=me.format,Ie=me.type;if(!Ge.textureFormatReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ge.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-z&&k>=0&&k<=S.height-N&&U.readPixels(D,k,z,N,Ue.convert(Te),Ue.convert(Ie),ee)}finally{const me=I!==null?Me.get(I).__webglFramebuffer:null;we.bindFramebuffer(U.FRAMEBUFFER,me)}}},this.readRenderTargetPixelsAsync=async function(S,D,k,z,N,ee,le){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=Me.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&le!==void 0&&(pe=pe[le]),pe){const me=S.texture,Te=me.format,Ie=me.type;if(!Ge.textureFormatReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ge.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=S.width-z&&k>=0&&k<=S.height-N){we.bindFramebuffer(U.FRAMEBUFFER,pe);const ge=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ge),U.bufferData(U.PIXEL_PACK_BUFFER,ee.byteLength,U.STREAM_READ),U.readPixels(D,k,z,N,Ue.convert(Te),Ue.convert(Ie),0);const Xe=I!==null?Me.get(I).__webglFramebuffer:null;we.bindFramebuffer(U.FRAMEBUFFER,Xe);const it=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Hh(U,it,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ge),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ee),U.deleteBuffer(ge),U.deleteSync(it),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,D=null,k=0){S.isTexture!==!0&&(as("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,S=arguments[1]);const z=Math.pow(2,-k),N=Math.floor(S.image.width*z),ee=Math.floor(S.image.height*z),le=D!==null?D.x:0,pe=D!==null?D.y:0;E.setTexture2D(S,0),U.copyTexSubImage2D(U.TEXTURE_2D,k,0,0,le,pe,N,ee),we.unbindTexture()},this.copyTextureToTexture=function(S,D,k=null,z=null,N=0){S.isTexture!==!0&&(as("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,S=arguments[1],D=arguments[2],N=arguments[3]||0,k=null);let ee,le,pe,me,Te,Ie,ge,Xe,it;const rt=S.isCompressedTexture?S.mipmaps[N]:S.image;k!==null?(ee=k.max.x-k.min.x,le=k.max.y-k.min.y,pe=k.isBox3?k.max.z-k.min.z:1,me=k.min.x,Te=k.min.y,Ie=k.isBox3?k.min.z:0):(ee=rt.width,le=rt.height,pe=rt.depth||1,me=0,Te=0,Ie=0),z!==null?(ge=z.x,Xe=z.y,it=z.z):(ge=0,Xe=0,it=0);const Pt=Ue.convert(D.format),Ke=Ue.convert(D.type);let ye;D.isData3DTexture?(E.setTexture3D(D,0),ye=U.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(E.setTexture2DArray(D,0),ye=U.TEXTURE_2D_ARRAY):(E.setTexture2D(D,0),ye=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,D.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,D.unpackAlignment);const dn=U.getParameter(U.UNPACK_ROW_LENGTH),$e=U.getParameter(U.UNPACK_IMAGE_HEIGHT),qt=U.getParameter(U.UNPACK_SKIP_PIXELS),ai=U.getParameter(U.UNPACK_SKIP_ROWS),Nt=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,rt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,rt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,me),U.pixelStorei(U.UNPACK_SKIP_ROWS,Te),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ie);const ji=S.isDataArrayTexture||S.isData3DTexture,at=D.isDataArrayTexture||D.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const rn=Me.get(S),Ki=Me.get(D),kt=Me.get(rn.__renderTarget),Tn=Me.get(Ki.__renderTarget);we.bindFramebuffer(U.READ_FRAMEBUFFER,kt.__webglFramebuffer),we.bindFramebuffer(U.DRAW_FRAMEBUFFER,Tn.__webglFramebuffer);for(let Rn=0;Rn<pe;Rn++)ji&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Me.get(S).__webglTexture,N,Ie+Rn),S.isDepthTexture?(at&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Me.get(D).__webglTexture,N,it+Rn),U.blitFramebuffer(me,Te,ee,le,ge,Xe,ee,le,U.DEPTH_BUFFER_BIT,U.NEAREST)):at?U.copyTexSubImage3D(ye,N,ge,Xe,it+Rn,me,Te,ee,le):U.copyTexSubImage2D(ye,N,ge,Xe,it+Rn,me,Te,ee,le);we.bindFramebuffer(U.READ_FRAMEBUFFER,null),we.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else at?S.isDataTexture||S.isData3DTexture?U.texSubImage3D(ye,N,ge,Xe,it,ee,le,pe,Pt,Ke,rt.data):D.isCompressedArrayTexture?U.compressedTexSubImage3D(ye,N,ge,Xe,it,ee,le,pe,Pt,rt.data):U.texSubImage3D(ye,N,ge,Xe,it,ee,le,pe,Pt,Ke,rt):S.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,N,ge,Xe,ee,le,Pt,Ke,rt.data):S.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,N,ge,Xe,rt.width,rt.height,Pt,rt.data):U.texSubImage2D(U.TEXTURE_2D,N,ge,Xe,ee,le,Pt,Ke,rt);U.pixelStorei(U.UNPACK_ROW_LENGTH,dn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,$e),U.pixelStorei(U.UNPACK_SKIP_PIXELS,qt),U.pixelStorei(U.UNPACK_SKIP_ROWS,ai),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Nt),N===0&&D.generateMipmaps&&U.generateMipmap(ye),we.unbindTexture()},this.copyTextureToTexture3D=function(S,D,k=null,z=null,N=0){return S.isTexture!==!0&&(as("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,z=arguments[1]||null,S=arguments[2],D=arguments[3],N=arguments[4]||0),as('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,D,k,z,N)},this.initRenderTarget=function(S){Me.get(S).__webglFramebuffer===void 0&&E.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?E.setTextureCube(S,0):S.isData3DTexture?E.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?E.setTexture2DArray(S,0):E.setTexture2D(S,0),we.unbindTexture()},this.resetState=function(){b=0,T=0,I=null,we.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=ze._getUnpackColorSpace()}}class eo{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Se(e),this.density=t}clone(){return new eo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ng extends ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ig{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Pa,this.updateRanges=[],this.version=0,this.uuid=Jt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const At=new C;class to{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=$t(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=$t(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=$t(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=$t(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=$t(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),s=et(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Ct(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new to(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const _c=new C,xc=new je,yc=new je,sg=new C,vc=new De,zs=new C,zr=new cn,Mc=new De,Vr=new gs;class rg extends ne{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=So,this.bindMatrix=new De,this.bindMatrixInverse=new De,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new nn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,zs),this.boundingBox.expandByPoint(zs)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new cn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,zs),this.boundingSphere.expandByPoint(zs)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zr.copy(this.boundingSphere),zr.applyMatrix4(i),e.ray.intersectsSphere(zr)!==!1&&(Mc.copy(i).invert(),Vr.copy(e.ray).applyMatrix4(Mc),!(this.boundingBox!==null&&Vr.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Vr)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new je,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===So?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===lh?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;xc.fromBufferAttribute(i.attributes.skinIndex,e),yc.fromBufferAttribute(i.attributes.skinWeight,e),_c.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=yc.getComponent(s);if(a!==0){const o=xc.getComponent(s);vc.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(sg.copy(_c).applyMatrix4(vc),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class vl extends ot{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ml extends xt{constructor(e=null,t=1,n=1,i,s,a,o,c,l=Rt,h=Rt,u,d){super(null,a,o,c,l,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Sc=new De,ag=new De;class no{constructor(e=[],t=[]){this.uuid=Jt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new De)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new De;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:ag;Sc.multiplyMatrices(o,t[s]),Sc.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new no(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ml(t,e,e,Gt,Qt);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new vl),this.bones.push(a),this.boneInverses.push(new De().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Na extends Ct{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Mi=new De,wc=new De,Vs=[],Ac=new nn,og=new De,es=new ne,ts=new cn;class cg extends ne{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Na(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,og)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new nn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Mi),Ac.copy(e.boundingBox).applyMatrix4(Mi),this.boundingBox.union(Ac)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new cn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Mi),ts.copy(e.boundingSphere).applyMatrix4(Mi),this.boundingSphere.union(ts)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(es.geometry=this.geometry,es.material=this.material,es.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ts.copy(this.boundingSphere),ts.applyMatrix4(n),e.ray.intersectsSphere(ts)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Mi),wc.multiplyMatrices(n,Mi),es.matrixWorld=wc,es.raycast(e,Vs);for(let a=0,o=Vs.length;a<o;a++){const c=Vs[a];c.instanceId=s,c.object=this,t.push(c)}Vs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Na(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ml(new Float32Array(i*this.count),i,this.count,Wa,Qt));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Sl extends tn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ir=new C,sr=new C,Ec=new De,ns=new gs,Gs=new cn,Gr=new C,bc=new C;class io extends ot{constructor(e=new Lt,t=new Sl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)ir.fromBufferAttribute(t,i-1),sr.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ir.distanceTo(sr);e.setAttribute("lineDistance",new ct(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gs.copy(n.boundingSphere),Gs.applyMatrix4(i),Gs.radius+=s,e.ray.intersectsSphere(Gs)===!1)return;Ec.copy(i).invert(),ns.copy(e.ray).applyMatrix4(Ec);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=l){const f=h.getX(_),M=h.getX(_+1),w=Hs(this,e,ns,c,f,M);w&&t.push(w)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(p),f=Hs(this,e,ns,c,_,m);f&&t.push(f)}}else{const p=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=l){const f=Hs(this,e,ns,c,_,_+1);f&&t.push(f)}if(this.isLineLoop){const _=Hs(this,e,ns,c,g-1,p);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Hs(r,e,t,n,i,s){const a=r.geometry.attributes.position;if(ir.fromBufferAttribute(a,i),sr.fromBufferAttribute(a,s),t.distanceSqToSegment(ir,sr,Gr,bc)>n)return;Gr.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Gr);if(!(c<e.near||c>e.far))return{distance:c,point:bc.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const Tc=new C,Rc=new C;class lg extends io{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Tc.fromBufferAttribute(t,i),Rc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Tc.distanceTo(Rc);e.setAttribute("lineDistance",new ct(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class hg extends io{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class wl extends tn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Cc=new De,Ua=new gs,Ws=new cn,qs=new C;class ug extends ot{constructor(e=new Lt,t=new wl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ws.copy(n.boundingSphere),Ws.applyMatrix4(i),Ws.radius+=s,e.ray.intersectsSphere(Ws)===!1)return;Cc.copy(i).invert(),Ua.copy(e.ray).applyMatrix4(Cc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let g=d,_=p;g<_;g++){const m=l.getX(g);qs.fromBufferAttribute(u,m),Ic(qs,m,c,i,e,t,this)}}else{const d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=d,_=p;g<_;g++)qs.fromBufferAttribute(u,g),Ic(qs,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ic(r,e,t,n,i,s,a){const o=Ua.distanceSqToPoint(r);if(o<t){const c=new C;Ua.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class rr extends Lt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],a=[],o=[],c=[],l=new C,h=new Pe;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const p=n+u/t*i;l.x=e*Math.cos(p),l.y=e*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new ct(a,3)),this.setAttribute("normal",new ct(o,3)),this.setAttribute("uv",new ct(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ht extends Lt{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],p=[];let g=0;const _=[],m=n/2;let f=0;M(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new ct(u,3)),this.setAttribute("normal",new ct(d,3)),this.setAttribute("uv",new ct(p,2));function M(){const x=new C,L=new C;let b=0;const T=(t-e)/n;for(let I=0;I<=s;I++){const A=[],v=I/s,R=v*(t-e)+e;for(let B=0;B<=i;B++){const F=B/i,W=F*c+o,X=Math.sin(W),G=Math.cos(W);L.x=R*X,L.y=-v*n+m,L.z=R*G,u.push(L.x,L.y,L.z),x.set(X,T,G).normalize(),d.push(x.x,x.y,x.z),p.push(F,1-v),A.push(g++)}_.push(A)}for(let I=0;I<i;I++)for(let A=0;A<s;A++){const v=_[A][I],R=_[A+1][I],B=_[A+1][I+1],F=_[A][I+1];(e>0||A!==0)&&(h.push(v,R,F),b+=3),(t>0||A!==s-1)&&(h.push(R,B,F),b+=3)}l.addGroup(f,b,0),f+=b}function w(x){const L=g,b=new Pe,T=new C;let I=0;const A=x===!0?e:t,v=x===!0?1:-1;for(let B=1;B<=i;B++)u.push(0,m*v,0),d.push(0,v,0),p.push(.5,.5),g++;const R=g;for(let B=0;B<=i;B++){const W=B/i*c+o,X=Math.cos(W),G=Math.sin(W);T.x=A*G,T.y=m*v,T.z=A*X,u.push(T.x,T.y,T.z),d.push(0,v,0),b.x=X*.5+.5,b.y=G*.5*v+.5,p.push(b.x,b.y),g++}for(let B=0;B<i;B++){const F=L+B,W=R+B;x===!0?h.push(W,W+1,F):h.push(W+1,W,F),I+=3}l.addGroup(f,I,x===!0?1:2),f+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ht(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class si extends Ht{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new si(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Wi extends Lt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],a=[];o(i),l(n),h(),this.setAttribute("position",new ct(s,3)),this.setAttribute("normal",new ct(s.slice(),3)),this.setAttribute("uv",new ct(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const w=new C,x=new C,L=new C;for(let b=0;b<t.length;b+=3)p(t[b+0],w),p(t[b+1],x),p(t[b+2],L),c(w,x,L,M)}function c(M,w,x,L){const b=L+1,T=[];for(let I=0;I<=b;I++){T[I]=[];const A=M.clone().lerp(x,I/b),v=w.clone().lerp(x,I/b),R=b-I;for(let B=0;B<=R;B++)B===0&&I===b?T[I][B]=A:T[I][B]=A.clone().lerp(v,B/R)}for(let I=0;I<b;I++)for(let A=0;A<2*(b-I)-1;A++){const v=Math.floor(A/2);A%2===0?(d(T[I][v+1]),d(T[I+1][v]),d(T[I][v])):(d(T[I][v+1]),d(T[I+1][v+1]),d(T[I+1][v]))}}function l(M){const w=new C;for(let x=0;x<s.length;x+=3)w.x=s[x+0],w.y=s[x+1],w.z=s[x+2],w.normalize().multiplyScalar(M),s[x+0]=w.x,s[x+1]=w.y,s[x+2]=w.z}function h(){const M=new C;for(let w=0;w<s.length;w+=3){M.x=s[w+0],M.y=s[w+1],M.z=s[w+2];const x=m(M)/2/Math.PI+.5,L=f(M)/Math.PI+.5;a.push(x,1-L)}g(),u()}function u(){for(let M=0;M<a.length;M+=6){const w=a[M+0],x=a[M+2],L=a[M+4],b=Math.max(w,x,L),T=Math.min(w,x,L);b>.9&&T<.1&&(w<.2&&(a[M+0]+=1),x<.2&&(a[M+2]+=1),L<.2&&(a[M+4]+=1))}}function d(M){s.push(M.x,M.y,M.z)}function p(M,w){const x=M*3;w.x=e[x+0],w.y=e[x+1],w.z=e[x+2]}function g(){const M=new C,w=new C,x=new C,L=new C,b=new Pe,T=new Pe,I=new Pe;for(let A=0,v=0;A<s.length;A+=9,v+=6){M.set(s[A+0],s[A+1],s[A+2]),w.set(s[A+3],s[A+4],s[A+5]),x.set(s[A+6],s[A+7],s[A+8]),b.set(a[v+0],a[v+1]),T.set(a[v+2],a[v+3]),I.set(a[v+4],a[v+5]),L.copy(M).add(w).add(x).divideScalar(3);const R=m(L);_(b,v+0,M,R),_(T,v+2,w,R),_(I,v+4,x,R)}}function _(M,w,x,L){L<0&&M.x===1&&(a[w]=M.x-1),x.x===0&&x.z===0&&(a[w]=L/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function f(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wi(e.vertices,e.indices,e.radius,e.details)}}class so extends Wi{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new so(e.radius,e.detail)}}class Oi extends Wi{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Oi(e.radius,e.detail)}}class Bi extends Wi{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Bi(e.radius,e.detail)}}class ti extends Lt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new C,d=new C,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const M=[],w=f/n;let x=0;f===0&&a===0?x=.5/t:f===n&&c===Math.PI&&(x=-.5/t);for(let L=0;L<=t;L++){const b=L/t;u.x=-e*Math.cos(i+b*s)*Math.sin(a+w*o),u.y=e*Math.cos(a+w*o),u.z=e*Math.sin(i+b*s)*Math.sin(a+w*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(b+x,1-w),M.push(l++)}h.push(M)}for(let f=0;f<n;f++)for(let M=0;M<t;M++){const w=h[f][M+1],x=h[f][M],L=h[f+1][M],b=h[f+1][M+1];(f!==0||a>0)&&p.push(w,x,b),(f!==n-1||c<Math.PI)&&p.push(x,L,b)}this.setIndex(p),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(_,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ti(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ro extends Wi{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ro(e.radius,e.detail)}}class ki extends Lt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],c=[],l=[],h=new C,u=new C,d=new C;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const _=g/i*s,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/i),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const _=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,f=(i+1)*(p-1)+g,M=(i+1)*p+g;a.push(_,m,M),a.push(m,f,M)}this.setIndex(a),this.setAttribute("position",new ct(o,3)),this.setAttribute("normal",new ct(c,3)),this.setAttribute("uv",new ct(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ki(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Vn extends tn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ka,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ln extends Vn{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return wt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ye extends tn{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ka,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=za,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Xs(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function dg(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function fg(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Lc(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let c=0;c!==e;++c)i[a++]=r[o+c]}return i}function Al(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}class _s{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class pg extends _s{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Si,endingEnd:Si}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case wi:s=e,o=2*t-n;break;case tr:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case wi:a=e,c=2*n-t;break;case tr:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,f=-d*m+2*d*_-d*g,M=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,w=(-1-p)*m+(1.5+p)*_+.5*g,x=p*m-p*_;for(let L=0;L!==o;++L)s[L]=f*a[h+L]+M*a[l+L]+w*a[c+L]+x*a[u+L];return s}}class El extends _s{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[l+d]*u+a[c+d]*h;return s}}class mg extends _s{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class hn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Xs(t,this.TimeBufferType),this.values=Xs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Xs(e.times,Array),values:Xs(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new mg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new El(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new pg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ds:t=this.InterpolantFactoryMethodDiscrete;break;case fs:t=this.InterpolantFactoryMethodLinear;break;case dr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ds;case this.InterpolantFactoryMethodLinear:return fs;case this.InterpolantFactoryMethodSmooth:return dr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&dg(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===dr,s=e.length-1;let a=1;for(let o=1;o<s;++o){let c=!1;const l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{const u=o*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[p+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const u=o*n,d=a*n;for(let p=0;p!==n;++p)t[d+p]=t[u+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}hn.prototype.TimeBufferType=Float32Array;hn.prototype.ValueBufferType=Float32Array;hn.prototype.DefaultInterpolation=fs;class qi extends hn{constructor(e,t,n){super(e,t,n)}}qi.prototype.ValueTypeName="bool";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=ds;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;class bl extends hn{}bl.prototype.ValueTypeName="color";class zi extends hn{}zi.prototype.ValueTypeName="number";class gg extends _s{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let l=e*o;for(let h=l+o;l!==h;l+=4)en.slerpFlat(s,0,a,l-o,a,l,c);return s}}class Vi extends hn{InterpolantFactoryMethodLinear(e){return new gg(this.times,this.values,this.getValueSize(),e)}}Vi.prototype.ValueTypeName="quaternion";Vi.prototype.InterpolantFactoryMethodSmooth=void 0;class Xi extends hn{constructor(e,t,n){super(e,t,n)}}Xi.prototype.ValueTypeName="string";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=ds;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;class Gi extends hn{}Gi.prototype.ValueTypeName="vector";class Fa{constructor(e="",t=-1,n=[],i=ja){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Jt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(xg(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(hn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);const h=fg(c);c=Lc(c,1,h),l=Lc(l,1,h),!i&&c[0]===0&&(c.push(s),l.push(l[0])),a.push(new zi(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],h=l.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,p,g,_){if(p.length!==0){const m=[],f=[];Al(p,m,f,g),m.length!==0&&_.push(new u(d,m,f))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)p[d[g].morphTargets[_]]=-1;for(const _ in p){const m=[],f=[];for(let M=0;M!==d[g].morphTargets.length;++M){const w=d[g];m.push(w.time),f.push(w.morphTarget===_?1:0)}i.push(new zi(".morphTargetInfluence["+_+"]",m,f))}c=p.length*a}else{const p=".bones["+t[u].name+"]";n(Gi,p+".position",d,"pos",i),n(Vi,p+".quaternion",d,"rot",i),n(Gi,p+".scale",d,"scl",i)}}return i.length===0?null:new this(s,c,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function _g(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return zi;case"vector":case"vector2":case"vector3":case"vector4":return Gi;case"color":return bl;case"quaternion":return Vi;case"bool":case"boolean":return qi;case"string":return Xi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function xg(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=_g(r.type);if(r.times===void 0){const t=[],n=[];Al(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Bn={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class yg{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const vg=new yg;class Yi{constructor(e){this.manager=e!==void 0?e:vg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Yi.DEFAULT_MATERIAL_NAME="__DEFAULT";const xn={};class Mg extends Error{constructor(e,t){super(e),this.response=t}}class Tl extends Yi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Bn.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(xn[e]!==void 0){xn[e].push({onLoad:t,onProgress:n,onError:i});return}xn[e]=[],xn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=xn[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0;let _=0;const m=new ReadableStream({start(f){M();function M(){u.read().then(({done:w,value:x})=>{if(w)f.close();else{_+=x.byteLength;const L=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let b=0,T=h.length;b<T;b++){const I=h[b];I.onProgress&&I.onProgress(L)}f.enqueue(x),M()}},w=>{f.error(w)})}}});return new Response(m)}else throw new Mg(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{Bn.add(e,l);const h=xn[e];delete xn[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onLoad&&p.onLoad(l)}}).catch(l=>{const h=xn[e];if(h===void 0)throw this.manager.itemError(e),l;delete xn[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Sg extends Yi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Bn.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=ps("img");function c(){h(),Bn.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class wg extends Yi{constructor(e){super(e)}load(e,t,n,i){const s=new xt,a=new Sg(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class lr extends ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Ag extends lr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ot.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Se(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Hr=new De,Pc=new C,Dc=new C;class ao{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.map=null,this.mapPass=null,this.matrix=new De,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Za,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Pc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Pc),Dc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Dc),t.updateMatrixWorld(),Hr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Hr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Eg extends ao{constructor(){super(new bt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ui*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class bg extends lr{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ot.DEFAULT_UP),this.updateMatrix(),this.target=new ot,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Eg}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Nc=new De,is=new C,Wr=new C;class Tg extends ao{constructor(){super(new bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Pe(4,2),this._viewportCount=6,this._viewports=[new je(2,1,1,1),new je(0,1,1,1),new je(3,1,1,1),new je(1,1,1,1),new je(3,0,1,1),new je(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),is.setFromMatrixPosition(e.matrixWorld),n.position.copy(is),Wr.copy(n.position),Wr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Wr),n.updateMatrixWorld(),i.makeTranslation(-is.x,-is.y,-is.z),Nc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nc)}}class hr extends lr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Tg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Rg extends ao{constructor(){super(new Qa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Rl extends lr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ot.DEFAULT_UP),this.updateMatrix(),this.target=new ot,this.shadow=new Rg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class hs{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Cg extends Yi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Bn.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(l=>{t&&t(l),s.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return Bn.add(e,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Bn.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Bn.add(e,c),s.manager.itemStart(e)}}class Ig{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Uc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Uc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Uc(){return performance.now()}class Lg{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,a;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[s+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,a=i;s!==a;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){en.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const a=this._workIndex*s;en.multiplyQuaternionsFlat(e,a,e,t,e,n),en.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,s){const a=1-i;for(let o=0;o!==s;++o){const c=t+o;e[c]=e[c]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,s){for(let a=0;a!==s;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const oo="\\[\\]\\.:\\/",Pg=new RegExp("["+oo+"]","g"),co="[^"+oo+"]",Dg="[^"+oo.replace("\\.","")+"]",Ng=/((?:WC+[\/:])*)/.source.replace("WC",co),Ug=/(WCOD+)?/.source.replace("WCOD",Dg),Fg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",co),Og=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",co),Bg=new RegExp("^"+Ng+Ug+Fg+Og+"$"),kg=["material","materials","bones","map"];class zg{constructor(e,t,n){const i=n||Ze.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ze{constructor(e,t,n){this.path=t,this.parsedPath=n||Ze.parseTrackName(t),this.node=Ze.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ze.Composite(e,t,n):new Ze(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Pg,"")}static parseTrackName(e){const t=Bg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);kg.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Ze.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[i];if(a===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ze.Composite=zg;Ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ze.prototype.GetterByBindingType=[Ze.prototype._getValue_direct,Ze.prototype._getValue_array,Ze.prototype._getValue_arrayElement,Ze.prototype._getValue_toArray];Ze.prototype.SetterByBindingTypeAndVersioning=[[Ze.prototype._setValue_direct,Ze.prototype._setValue_direct_setNeedsUpdate,Ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_array,Ze.prototype._setValue_array_setNeedsUpdate,Ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_arrayElement,Ze.prototype._setValue_arrayElement_setNeedsUpdate,Ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_fromArray,Ze.prototype._setValue_fromArray_setNeedsUpdate,Ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Vg{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,a=s.length,o=new Array(a),c={endingStart:Si,endingEnd:Si};for(let l=0;l!==a;++l){const h=s[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=uh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,a=s/i,o=i/s;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const c=o.parameterPositions,l=o.sampleValues;return c[0]=s,c[1]=s+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const c=(e-s)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case fh:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulateAdditive(o);break;case ja:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const a=n===dh;if(e===0)return s===-1?i:a&&(s&1)===1?t-i:i;if(n===hh){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,s+=Math.abs(o);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=wi,i.endingEnd=wi):(e?i.endingStart=this.zeroSlopeAtStart?wi:Si:i.endingStart=tr,t?i.endingEnd=this.zeroSlopeAtEnd?wi:Si:i.endingEnd=tr)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,c=a.sampleValues;return o[0]=s,c[0]=t,o[1]=s+e,c[1]=n,this}}const Gg=new Float32Array(1);class Hg extends ri{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==s;++u){const d=i[u],p=d.name;let g=h[p];if(g!==void 0)++g.referenceCount,a[u]=g;else{if(g=a[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,p));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;g=new Lg(Ze.create(n,p,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,p),a[u]=g}o[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,a=this._actionsByClip,o=a[s],c=o.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;const u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new El(new Float32Array(2),new Float32Array(2),1,Gg),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let a=typeof e=="string"?Fa.findByName(i,e):e;const o=a!==null?a.uuid:e,c=this._actionsByClip[o];let l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=ja),c!==void 0){const u=c.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;const h=new Vg(this,a,t,n);return this._bindAction(h,l),this._addInactiveAction(h,o,s),h}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?Fa.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,s,a);const o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const a=s.knownActions;for(let o=0,c=a.length;o!==c;++o){const l=a[o];this._deactivateAction(l);const h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const a in s){const o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ka}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ka);const ut={LOADING:"LOADING",MAIN_MENU:"MAIN_MENU",EXPLORATION:"EXPLORATION",CHALLENGE:"CHALLENGE",PAUSED:"PAUSED",TOPIC_SELECT:"TOPIC_SELECT"};class Wg{constructor(){this.mode=ut.LOADING,this.listeners=new Map,this.level=1,this.xp=0,this.xpToNextLevel=100,this.tokens=0,this.totalScore=0,this.totalStars=0,this.unlockedRooms=["lines_angles","triangles","quadrilaterals","circles","perimeter","area"],this.topicStats={},this.initDefaultTopicStats(),this.currentTopic=null,this.currentRoom="Central Courtyard",this.challengeScore=0,this.challengeLives=3,this.challengeCombo=0,this.challengeMaxCombo=0,this.challengeCorrectCount=0,this.challengeTotalQuestions=10,this.challengeTimeRemaining=30,this.isTimerRunning=!1,this.settings={bgmVolume:.6,sfxVolume:.8,graphicsQuality:"medium",showHints:!0}}initDefaultTopicStats(){["lines_angles","triangles","quadrilaterals","circles","perimeter","area","surface_area","volume","pythagoras","coordinates","symmetry","shapes_3d","mixed"].forEach((t,n)=>{this.topicStats[t]||(this.topicStats[t]={unlocked:n<6,stars:0,bestScore:0,timesCompleted:0,accuracy:0})})}setMode(e){const t=this.mode;this.mode=e,this.emit("modeChanged",{newMode:e,oldMode:t})}addXP(e){this.xp+=e;let t=!1;for(;this.xp>=this.xpToNextLevel;)this.xp-=this.xpToNextLevel,this.level+=1,this.xpToNextLevel=Math.round(100*Math.pow(1.25,this.level-1)),t=!0,this.checkLevelUnlocks();this.emit("xpChanged",{xp:this.xp,xpToNextLevel:this.xpToNextLevel,level:this.level,leveledUp:t,added:e}),t&&this.emit("levelUp",{level:this.level})}addTokens(e){this.tokens+=e,this.emit("tokensChanged",{tokens:this.tokens,added:e})}addScore(e){this.totalScore+=e,this.emit("scoreChanged",{totalScore:this.totalScore})}checkLevelUnlocks(){this.level>=2&&this.topicStats.surface_area&&(this.topicStats.surface_area.unlocked=!0),this.level>=3&&this.topicStats.volume&&(this.topicStats.volume.unlocked=!0),this.level>=4&&this.topicStats.pythagoras&&(this.topicStats.pythagoras.unlocked=!0),this.level>=5&&this.topicStats.coordinates&&(this.topicStats.coordinates.unlocked=!0),this.level>=6&&this.topicStats.symmetry&&(this.topicStats.symmetry.unlocked=!0),this.level>=7&&this.topicStats.shapes_3d&&(this.topicStats.shapes_3d.unlocked=!0),this.level>=8&&this.topicStats.mixed&&(this.topicStats.mixed.unlocked=!0)}updateTopicProgress(e,t,n,i){this.topicStats[e]||(this.topicStats[e]={unlocked:!0,stars:0,bestScore:0,timesCompleted:0,accuracy:0});const s=this.topicStats[e];s.timesCompleted+=1,t>s.stars&&(s.stars=t),n>s.bestScore&&(s.bestScore=n),i>s.accuracy&&(s.accuracy=i),this.totalStars=Object.values(this.topicStats).reduce((a,o)=>a+(o.stars||0),0),this.emit("progressUpdated",{topicId:e,stats:s,totalStars:this.totalStars})}on(e,t){this.listeners.has(e)||this.listeners.set(e,[]),this.listeners.get(e).push(t)}off(e,t){if(!this.listeners.has(e))return;const n=this.listeners.get(e).filter(i=>i!==t);this.listeners.set(e,n)}emit(e,t){this.listeners.has(e)&&this.listeners.get(e).forEach(n=>{try{n(t)}catch(i){console.error(`Error in GameState event listener '${e}':`,i)}})}exportSaveData(){return{version:1,level:this.level,xp:this.xp,xpToNextLevel:this.xpToNextLevel,tokens:this.tokens,totalScore:this.totalScore,totalStars:this.totalStars,topicStats:this.topicStats,settings:this.settings}}importSaveData(e){return!e||typeof e!="object"?!1:(this.level=e.level||1,this.xp=e.xp||0,this.xpToNextLevel=e.xpToNextLevel||100,this.tokens=e.tokens||0,this.totalScore=e.totalScore||0,this.totalStars=e.totalStars||0,e.topicStats&&(this.topicStats=Object.assign(this.topicStats,e.topicStats)),e.settings&&(this.settings=Object.assign(this.settings,e.settings)),this.checkLevelUnlocks(),this.emit("stateLoaded",this.exportSaveData()),!0)}}class qg{constructor(e){this.gameState=e,this.storageKey="GEOMETRY_QUEST_3D_SAVE_V1",this.autoSaveInterval=null}init(){this.load(),this.gameState.on("xpChanged",()=>this.save()),this.gameState.on("tokensChanged",()=>this.save()),this.gameState.on("progressUpdated",()=>this.save()),this.gameState.on("scoreChanged",()=>this.save()),this.autoSaveInterval=setInterval(()=>{this.save()},3e4)}save(){try{const e=this.gameState.exportSaveData(),t=JSON.stringify(e);return localStorage.setItem(this.storageKey,t),!0}catch(e){return console.warn("Failed to save game data to localStorage:",e),!1}}load(){try{const e=localStorage.getItem(this.storageKey);if(!e)return!1;const t=JSON.parse(e);if(t&&typeof t=="object"&&this.gameState.importSaveData(t))return console.log("Progress successfully loaded from save."),!0}catch(e){console.error("Save data corrupted, resetting to safe defaults:",e),this.reset()}return!1}reset(){try{localStorage.removeItem(this.storageKey),console.log("Save data wiped.")}catch(e){console.warn("Error clearing localStorage:",e)}}}class Xg{constructor(e){this.gameState=e,this.ctx=null,this.bgmGain=null,this.sfxGain=null,this.masterGain=null,this.bgmInterval=null,this.isBgmPlaying=!1,this.audioBuffers=new Map,this.isMuted=!1,this.initAudioContext()}initAudioContext(){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(1,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination),this.bgmGain=this.ctx.createGain(),this.bgmGain.gain.setValueAtTime(this.gameState.settings.bgmVolume,this.ctx.currentTime),this.bgmGain.connect(this.masterGain),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.setValueAtTime(this.gameState.settings.sfxVolume,this.ctx.currentTime),this.sfxGain.connect(this.masterGain))}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(e=>console.warn("Audio resume blocked:",e))}setBgmVolume(e){this.bgmGain&&this.ctx&&this.bgmGain.gain.setValueAtTime(Math.max(0,Math.min(1,e)),this.ctx.currentTime),this.gameState.settings.bgmVolume=e}setSfxVolume(e){this.sfxGain&&this.ctx&&this.sfxGain.gain.setValueAtTime(Math.max(0,Math.min(1,e)),this.ctx.currentTime),this.gameState.settings.sfxVolume=e}playClick(){if(this.resume(),!!this.ctx)try{const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(800,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(400,this.ctx.currentTime+.05),t.gain.setValueAtTime(.3,this.ctx.currentTime),t.gain.linearRampToValueAtTime(.001,this.ctx.currentTime+.05),e.connect(t),t.connect(this.sfxGain),e.start(),e.stop(this.ctx.currentTime+.06)}catch{}}playJump(){if(this.resume(),!!this.ctx)try{const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(160,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(450,this.ctx.currentTime+.15),t.gain.setValueAtTime(.25,this.ctx.currentTime),t.gain.linearRampToValueAtTime(.001,this.ctx.currentTime+.16),e.connect(t),t.connect(this.sfxGain),e.start(),e.stop(this.ctx.currentTime+.16)}catch{}}playToken(){if(this.resume(),!!this.ctx)try{const e=this.ctx.currentTime;[523.25,659.25,783.99,1046.5].forEach((t,n)=>{const i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(t,e+n*.04),s.gain.setValueAtTime(0,e),s.gain.setValueAtTime(.2,e+n*.04),s.gain.exponentialRampToValueAtTime(.001,e+n*.04+.18),i.connect(s),s.connect(this.sfxGain),i.start(e+n*.04),i.stop(e+n*.04+.2)})}catch{}}playCorrect(){if(this.resume(),!!this.ctx)try{const e=this.ctx.currentTime;[587.33,739.99,880,1174.66].forEach((n,i)=>{const s=this.ctx.createOscillator(),a=this.ctx.createGain();s.type="triangle",s.frequency.setValueAtTime(n,e+i*.06),a.gain.setValueAtTime(0,e),a.gain.setValueAtTime(.3,e+i*.06),a.gain.exponentialRampToValueAtTime(.001,e+i*.06+.35),s.connect(a),a.connect(this.sfxGain),s.start(e+i*.06),s.stop(e+i*.06+.36)})}catch{}}playWrong(){if(this.resume(),!!this.ctx)try{const e=this.ctx.currentTime;[311.13,293.66,277.18].forEach((n,i)=>{const s=this.ctx.createOscillator(),a=this.ctx.createGain();s.type="sawtooth",s.frequency.setValueAtTime(n,e+i*.09),a.gain.setValueAtTime(0,e),a.gain.setValueAtTime(.2,e+i*.09),a.gain.exponentialRampToValueAtTime(.001,e+i*.09+.22),s.connect(a),a.connect(this.sfxGain),s.start(e+i*.09),s.stop(e+i*.09+.23)})}catch{}}playLevelUp(){if(this.resume(),!!this.ctx)try{const e=this.ctx.currentTime;[440,554.37,659.25,880,1108.73,1318.51].forEach((n,i)=>{const s=this.ctx.createOscillator(),a=this.ctx.createGain();s.type="triangle",s.frequency.setValueAtTime(n,e+i*.08),a.gain.setValueAtTime(0,e),a.gain.setValueAtTime(.35,e+i*.08),a.gain.exponentialRampToValueAtTime(.001,e+i*.08+.45),s.connect(a),a.connect(this.sfxGain),s.start(e+i*.08),s.stop(e+i*.08+.46)})}catch{}}playChallengeComplete(){if(this.resume(),!!this.ctx)try{const e=this.ctx.currentTime;[523.25,659.25,783.99,1046.5,1318.51].forEach((n,i)=>{const s=this.ctx.createOscillator(),a=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(n,e+i*.1),a.gain.setValueAtTime(0,e),a.gain.setValueAtTime(.4,e+i*.1),a.gain.exponentialRampToValueAtTime(.001,e+i*.1+.6),s.connect(a),a.connect(this.sfxGain),s.start(e+i*.1),s.stop(e+i*.1+.62)})}catch{}}playGameOver(){if(this.resume(),!!this.ctx)try{const e=this.ctx.currentTime;[440,392,349.23,311.13,261.63].forEach((n,i)=>{const s=this.ctx.createOscillator(),a=this.ctx.createGain();s.type="triangle",s.frequency.setValueAtTime(n,e+i*.15),a.gain.setValueAtTime(0,e),a.gain.setValueAtTime(.3,e+i*.15),a.gain.exponentialRampToValueAtTime(.001,e+i*.15+.4),s.connect(a),a.connect(this.sfxGain),s.start(e+i*.15),s.stop(e+i*.15+.42)})}catch{}}startAmbientBgm(){if(this.isBgmPlaying||!this.ctx)return;this.isBgmPlaying=!0,this.resume();const e=[261.63,293.66,329.63,392,440,523.25,587.33,659.25];let t=0;const n=()=>{if(!(!this.isBgmPlaying||!this.ctx))try{const i=this.ctx.currentTime,s=e[t%e.length],a=e[(t+2)%e.length],o=e[(t+4)%e.length];[s,a,o].forEach(c=>{const l=this.ctx.createOscillator(),h=this.ctx.createGain();l.type="sine",l.frequency.setValueAtTime(c,i),h.gain.setValueAtTime(.001,i),h.gain.linearRampToValueAtTime(.06,i+.8),h.gain.linearRampToValueAtTime(.001,i+3.8),l.connect(h),h.connect(this.bgmGain),l.start(i),l.stop(i+4)}),t=(t+1+Math.floor(Math.random()*2))%e.length}catch{}};n(),this.bgmInterval=setInterval(n,3800)}stopAmbientBgm(){this.isBgmPlaying=!1,this.bgmInterval&&(clearInterval(this.bgmInterval),this.bgmInterval=null)}}function Fc(r,e){if(e===ph)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===La||e===nl){let t=r.getIndex();if(t===null){const a=[],o=r.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===La)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class Yg extends Yi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Qg(t)}),this.register(function(t){return new Jg(t)}),this.register(function(t){return new c0(t)}),this.register(function(t){return new l0(t)}),this.register(function(t){return new h0(t)}),this.register(function(t){return new t0(t)}),this.register(function(t){return new n0(t)}),this.register(function(t){return new i0(t)}),this.register(function(t){return new s0(t)}),this.register(function(t){return new Zg(t)}),this.register(function(t){return new r0(t)}),this.register(function(t){return new e0(t)}),this.register(function(t){return new o0(t)}),this.register(function(t){return new a0(t)}),this.register(function(t){return new Kg(t)}),this.register(function(t){return new u0(t)}),this.register(function(t){return new d0(t)})}load(e,t,n,i){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=hs.extractUrlBase(e);a=hs.resolveURL(l,this.path)}else a=hs.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new Tl(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,a,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const a={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Cl){try{a[ke.KHR_BINARY_GLTF]=new f0(e)}catch(u){i&&i(u);return}s=JSON.parse(a[ke.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new b0(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case ke.KHR_MATERIALS_UNLIT:a[u]=new $g;break;case ke.KHR_DRACO_MESH_COMPRESSION:a[u]=new p0(s,this.dracoLoader);break;case ke.KHR_TEXTURE_TRANSFORM:a[u]=new m0;break;case ke.KHR_MESH_QUANTIZATION:a[u]=new g0;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function jg(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const ke={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Kg{constructor(e){this.parser=e,this.name=ke.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const h=new Se(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],It);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Rl(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new hr(h),l.distance=u;break;case"spot":l=new bg(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,vn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class $g{constructor(){this.name=ke.KHR_MATERIALS_UNLIT}getMaterialType(){return Dt}extendParams(e,t,n){const i=[];e.color=new Se(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],It),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,yt))}return Promise.all(i)}}class Zg{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class Qg{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ln}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Pe(o,o)}return Promise.all(s)}}class Jg{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ln}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class e0{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ln}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class t0{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ln}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Se(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],It)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,yt)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class n0{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ln}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class i0{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ln}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Se().setRGB(o[0],o[1],o[2],It),Promise.all(s)}}class s0{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ln}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class r0{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ln}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Se().setRGB(o[0],o[1],o[2],It),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,yt)),Promise.all(s)}}class a0{constructor(e){this.parser=e,this.name=ke.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ln}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}}class o0{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ln}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class c0{constructor(e){this.parser=e,this.name=ke.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class l0{constructor(e){this.parser=e,this.name=ke.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class h0{constructor(e){this.parser=e,this.name=ke.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class u0{constructor(e){this.name=ke.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(p){return p.buffer}):a.ready.then(function(){const p=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(p),h,u,d,i.mode,i.filter),p})})}else return null}}class d0{constructor(e){this.name=ke.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==Vt.TRIANGLES&&l.mode!==Vt.TRIANGLE_STRIP&&l.mode!==Vt.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,p=[];for(const g of u){const _=new De,m=new C,f=new en,M=new C(1,1,1),w=new cg(g.geometry,g.material,d);for(let x=0;x<d;x++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&f.fromBufferAttribute(c.ROTATION,x),c.SCALE&&M.fromBufferAttribute(c.SCALE,x),w.setMatrixAt(x,_.compose(m,f,M));for(const x in c)if(x==="_COLOR_0"){const L=c[x];w.instanceColor=new Na(L.array,L.itemSize,L.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,c[x]);ot.prototype.copy.call(w,g),this.parser.assignFinalMaterial(w),p.push(w)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}}const Cl="glTF",ss=12,Oc={JSON:1313821514,BIN:5130562};class f0{constructor(e){this.name=ke.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ss),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Cl)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-ss,s=new DataView(e,ss);let a=0;for(;a<i;){const o=s.getUint32(a,!0);a+=4;const c=s.getUint32(a,!0);if(a+=4,c===Oc.JSON){const l=new Uint8Array(e,ss+a,o);this.content=n.decode(l)}else if(c===Oc.BIN){const l=ss+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class p0{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ke.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const h in a){const u=Oa[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=Oa[h]||h.toLowerCase();if(a[h]!==void 0){const d=n.accessors[e.attributes[h]],p=Ri[d.componentType];l[u]=p.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(p){for(const g in p.attributes){const _=p.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}u(p)},o,l,It,d)})})}}class m0{constructor(){this.name=ke.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class g0{constructor(){this.name=ke.KHR_MESH_QUANTIZATION}}class Il extends _s{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,u=(n-t)/h,d=u*u,p=d*u,g=e*l,_=g-l,m=-2*p+3*d,f=p-d,M=1-m,w=f-d+u;for(let x=0;x!==o;x++){const L=a[_+x+o],b=a[_+x+c]*h,T=a[g+x+o],I=a[g+x]*h;s[x]=M*L+w*b+m*T+f*I}return s}}const _0=new en;class x0 extends Il{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return _0.fromArray(s).normalize().toArray(s),s}}const Vt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ri={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Bc={9728:Rt,9729:Ot,9984:Xc,9985:Ys,9986:rs,9987:Mn},kc={33071:On,33648:er,10497:Pi},qr={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Oa={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Un={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},y0={CUBICSPLINE:void 0,LINEAR:fs,STEP:ds},Xr={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function v0(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Vn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:An})),r.DefaultMaterial}function $n(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function vn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function M0(r,e,t){let n=!1,i=!1,s=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;a.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;o.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function S0(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function w0(r){let e;const t=r.extensions&&r.extensions[ke.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Yr(t.attributes):e=r.indices+":"+Yr(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Yr(r.targets[n]);return e}function Yr(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Ba(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function A0(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const E0=new De;class b0{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new jg,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?this.textureLoader=new wg(this.options.manager):this.textureLoader=new Cg(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Tl(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return $n(s,o,i),vn(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,h]of a.children.entries())s(h,o.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ke.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,a){n.load(hs.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=qr[i.type],o=Ri[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new Ct(l,a,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],c=qr[i.type],l=Ri[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(p&&p!==u){const f=Math.floor(d/p),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count;let w=t.cache.get(M);w||(_=new l(o,f*p,i.count*p/h),w=new ig(_,p/h),t.cache.add(M,w)),m=new to(w,c,d%p/h,g)}else o===null?_=new l(i.count*c):_=new l(o,d,i.count*c),m=new Ct(_,c,g);if(i.sparse!==void 0){const f=qr.SCALAR,M=Ri[i.sparse.indices.componentType],w=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,L=new M(a[1],w,i.sparse.count*f),b=new l(a[2],x,i.sparse.count*c);o!==null&&(m=new Ct(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let T=0,I=L.length;T<I;T++){const A=L[T];if(m.setX(A,b[T*c]),c>=2&&m.setY(A,b[T*c+1]),c>=3&&m.setZ(A,b[T*c+2]),c>=4&&m.setW(A,b[T*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,a=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(s.samplers||{})[a.sampler]||{};return h.magFilter=Bc[d.magFilter]||Ot,h.minFilter=Bc[d.minFilter]||Mn,h.wrapS=kc[d.wrapS]||Pi,h.wrapT=kc[d.wrapT]||Pi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Rt&&h.minFilter!==Ot,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=i.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new xt(_);m.needsUpdate=!0,d(m)}),t.load(hs.resolveURL(u,s.path),g,void 0,p)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),vn(u,a),u.userData.mimeType=a.mimeType||A0(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[ke.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[ke.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=s.associations.get(a);a=s.extensions[ke.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new wl,tn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Sl,tn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Vn}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let a;const o={},c=s.extensions||{},l=[];if(c[ke.KHR_MATERIALS_UNLIT]){const u=i[ke.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,s,t))}else{const u=s.pbrMetallicRoughness||{};if(o.color=new Se(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],It),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,yt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=on);const h=s.alphaMode||Xr.OPAQUE;if(h===Xr.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Xr.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Dt&&(l.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Pe(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;o.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&a!==Dt&&(l.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Dt){const u=s.emissiveFactor;o.emissive=new Se().setRGB(u[0],u[1],u[2],It)}return s.emissiveTexture!==void 0&&a!==Dt&&l.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,yt)),Promise.all(l).then(function(){const u=new a(o);return s.name&&(u.name=s.name),vn(u,s),t.associations.set(u,{materials:e}),s.extensions&&$n(i,u,s),u})}createUniqueName(e){const t=Ze.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[ke.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return zc(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],h=w0(l),u=i[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[ke.KHR_DRACO_MESH_COMPRESSION]?d=s(l):d=zc(new Lt,l,t),i[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const h=a[c].material===void 0?v0(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let p=0,g=h.length;p<g;p++){const _=h[p],m=a[p];let f;const M=l[p];if(m.mode===Vt.TRIANGLES||m.mode===Vt.TRIANGLE_STRIP||m.mode===Vt.TRIANGLE_FAN||m.mode===void 0)f=s.isSkinnedMesh===!0?new rg(_,M):new ne(_,M),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===Vt.TRIANGLE_STRIP?f.geometry=Fc(f.geometry,nl):m.mode===Vt.TRIANGLE_FAN&&(f.geometry=Fc(f.geometry,La));else if(m.mode===Vt.LINES)f=new lg(_,M);else if(m.mode===Vt.LINE_STRIP)f=new io(_,M);else if(m.mode===Vt.LINE_LOOP)f=new hg(_,M);else if(m.mode===Vt.POINTS)f=new ug(_,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&S0(f,s),f.name=t.createUniqueName(s.name||"mesh_"+e),vn(f,s),m.extensions&&$n(i,f,m),t.assignFinalMaterial(f),u.push(f)}for(let p=0,g=u.length;p<g;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return s.extensions&&$n(i,u[0],s),u[0];const d=new dt;s.extensions&&$n(i,d,s),t.associations.set(d,{meshes:e});for(let p=0,g=u.length;p<g;p++)d.add(u[p]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new bt(Vh.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Qa(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),vn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){const u=a[l];if(u){o.push(u);const d=new De;s!==null&&d.fromArray(s.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new no(o,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const p=i.channels[u],g=i.samplers[p.sampler],_=p.target,m=_.node,f=i.parameters!==void 0?i.parameters[g.input]:g.input,M=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",f)),c.push(this.getDependency("accessor",M)),l.push(g),h.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],p=u[1],g=u[2],_=u[3],m=u[4],f=[];for(let M=0,w=d.length;M<w;M++){const x=d[M],L=p[M],b=g[M],T=_[M],I=m[M];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const A=n._createAnimationTracks(x,L,b,T,I);if(A)for(let v=0;v<A.length;v++)f.push(A[v])}return new Fa(s,void 0,f)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,E0)});for(let p=0,g=u.length;p<g;p++)h.add(u[p]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(s.isBone===!0?h=new vl:l.length>1?h=new dt:l.length===1?h=l[0]:h=new ot,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(s.name&&(h.userData.name=s.name,h.name=a),vn(h,s),s.extensions&&$n(n,h,s),s.matrix!==void 0){const u=new De;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new dt;n.name&&(s.name=i.createUniqueName(n.name)),vn(s,n),n.extensions&&$n(t,s,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)s.add(c[h]);const l=h=>{const u=new Map;for(const[d,p]of i.associations)(d instanceof tn||d instanceof xt)&&u.set(d,p);return h.traverse(d=>{const p=i.associations.get(d);p!=null&&u.set(d,p)}),u};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){const a=[],o=e.name?e.name:e.uuid,c=[];Un[s.path]===Un.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(Un[s.path]){case Un.weights:l=zi;break;case Un.rotation:l=Vi;break;case Un.position:case Un.scale:l=Gi;break;default:switch(n.itemSize){case 1:l=zi;break;case 2:case 3:default:l=Gi;break}break}const h=i.interpolation!==void 0?y0[i.interpolation]:fs,u=this._getArrayFromAccessor(n);for(let d=0,p=c.length;d<p;d++){const g=new l(c[d]+"."+Un[s.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Ba(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Vi?x0:Il;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function T0(r,e,t){const n=e.attributes,i=new nn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new C(c[0],c[1],c[2]),new C(l[0],l[1],l[2])),o.normalized){const h=Ba(Ri[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new C,c=new C;for(let l=0,h=s.length;l<h;l++){const u=s[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){const _=Ba(Ri[d.componentType]);c.multiplyScalar(_)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;const a=new cn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function zc(r,e,t){const n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(c){r.setAttribute(o,c)})}for(const a in n){const o=Oa[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return ze.workingColorSpace!==It&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ze.workingColorSpace}" not supported.`),vn(r,e),T0(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?M0(r,e.targets,t):r})}class R0{constructor(){this.loader=new Yg,this.models=new Map,this.textures=new Map,this.loadedCount=0,this.totalAssets=0}async loadAll(e){const n="./".endsWith("/")?"./":".//",i=[{key:"player",path:`${n}models/player.glb`},{key:"teacher",path:`${n}models/teacher.glb`},{key:"building",path:`${n}models/building.glb`},{key:"desk",path:`${n}models/desk.glb`},{key:"coin",path:`${n}models/coin.glb`}];e&&e(20,"Constructing 3D Geometry Academy...");const s=i.map(async a=>{try{const o=await this.loadGLB(a.path);this.models.set(a.key,o)}catch{this.models.set(a.key,null)}});await Promise.allSettled(s),e&&e(60,"Generating Mathematical Architecture..."),await new Promise(a=>setTimeout(a,100)),e&&e(85,"Synthesizing Audio Frequencies..."),await new Promise(a=>setTimeout(a,100)),e&&e(100,"Academy Ready!")}loadGLB(e){return new Promise((t,n)=>{const i=setTimeout(()=>{n(new Error("Optional asset not present"))},300);this.loader.load(e,s=>{clearTimeout(i),t(s)},void 0,s=>{clearTimeout(i),n(s)})})}getModel(e){return this.models.get(e)||null}createProceduralPlayer(){const e=new dt;e.name="ProceduralPlayer";const t=new Ye({color:16767916}),n=new Ye({color:4415982}),i=new Ye({color:1976635}),s=new Ye({color:988970}),a=new Ye({color:4859920}),o=new Ye({color:16196997}),c=new Be(.55,.65,.32),l=new ne(c,n);l.position.y=.95,l.castShadow=!0,e.add(l);const h=new Be(.12,.3,.04),u=new Ye({color:16758531}),d=new ne(h,u);d.position.set(0,.98,.17),e.add(d);const p=new Be(.42,.48,.2),g=new ne(p,o);g.position.set(0,.96,-.22),g.castShadow=!0,e.add(g);const _=new ti(.24,16,16),m=new ne(_,t);m.position.y=1.48,m.castShadow=!0,e.add(m);const f=new ti(.26,16,16,0,Math.PI*2,0,Math.PI*.55),M=new ne(f,a);M.position.set(0,1.5,0),e.add(M);const w=new Ht(.18,.18,.08,16),x=new Be(.42,.02,.42),L=new Ye({color:3804323}),b=new ne(w,L),T=new ne(x,L);b.position.set(0,1.68,0),T.position.set(0,1.72,0),e.add(b),e.add(T);const I=new dt;I.position.set(-.36,1.2,0);const A=new Be(.14,.52,.14),v=new ne(A,n);v.position.y=-.24,v.castShadow=!0,I.add(v),e.add(I),e.leftArm=I;const R=new dt;R.position.set(.36,1.2,0);const B=new ne(A,n);B.position.y=-.24,B.castShadow=!0,R.add(B),e.add(R),e.rightArm=R;const F=new dt;F.position.set(-.16,.65,0);const W=new Be(.18,.6,.18),X=new ne(W,i);X.position.y=-.3,X.castShadow=!0,F.add(X);const G=new Be(.19,.1,.28),j=new ne(G,s);j.position.set(0,-.6,.05),F.add(j),e.add(F),e.leftLeg=F;const V=new dt;V.position.set(.16,.65,0);const te=new ne(W,i);te.position.y=-.3,te.castShadow=!0,V.add(te);const re=new ne(G,s);return re.position.set(0,-.6,.05),V.add(re),e.add(V),e.rightLeg=V,e}createProceduralTeacher(){const e=new dt;e.name="TeacherNPC";const t=new Ye({color:7473591}),n=new Ye({color:16758531}),i=new Ye({color:16769213}),s=new Ye({color:14870768}),a=new Ye({color:9132587}),o=new Ht(.35,.55,1.3,16),c=new ne(o,t);c.position.y=.85,c.castShadow=!0,e.add(c);const l=new Be(.45,.8,.38),h=new ne(l,n);h.position.set(0,1.1,.05),e.add(h);const u=new ti(.25,16,16),d=new ne(u,i);d.position.y=1.65,e.add(d);const p=new si(.18,.35,12),g=new ne(p,s);g.rotation.x=Math.PI,g.position.set(0,1.45,.16),e.add(g);const _=new ti(.27,16,16,0,Math.PI*2,0,Math.PI*.6),m=new ne(_,s);m.position.set(0,1.67,0),e.add(m);const f=new Be(.5,.04,.5),M=new ne(f,t);M.position.set(0,1.88,0),e.add(M);const w=new Ht(.025,.025,1.6,8),x=new ne(w,a);x.position.set(.48,.8,.2),x.rotation.z=-.15,e.add(x);const L=new Bi(.08),b=new Dt({color:16765286}),T=new ne(L,b);return T.position.set(.59,1.55,.2),e.add(T),e}}class C0{constructor(){this.colliders=[],this.radius=.55,this.height=1.8}addBoxCollider(e){this.colliders.push(e)}addMeshCollider(e){e.updateMatrixWorld(!0);const t=new nn().setFromObject(e);this.colliders.push(t)}clear(){this.colliders=[]}resolveMovement(e,t){const n=e.clone();return n.x+=t.x,this.checkCollisionAt(n)&&(n.x=e.x),n.z+=t.z,this.checkCollisionAt(n)&&(n.z=e.z),n.y+=t.y,n.y<0&&(n.y=0),n.x=Math.max(-110,Math.min(110,n.x)),n.z=Math.max(-110,Math.min(110,n.z)),n}checkCollisionAt(e){const t=new nn(new C(e.x-this.radius,e.y+.1,e.z-this.radius),new C(e.x+this.radius,e.y+this.height,e.z+this.radius));for(let n=0;n<this.colliders.length;n++)if(t.intersectsBox(this.colliders[n]))return!0;return!1}}class I0{constructor(e,t){this.scene=e,this.collisionSystem=t,this.animatedObjects=[],this.initLighting(),this.initSky(),this.initGround(),this.initCourtyardFountain(),this.initFoliageAndDecorations()}initLighting(){const e=new Ag(14477311,2042173,.75);e.position.set(0,50,0),this.scene.add(e);const t=new Rl(16774102,1.25);t.position.set(45,60,35),t.castShadow=!0,t.shadow.mapSize.width=2048,t.shadow.mapSize.height=2048,t.shadow.camera.near=.5,t.shadow.camera.far=160;const n=65;t.shadow.camera.left=-n,t.shadow.camera.right=n,t.shadow.camera.top=n,t.shadow.camera.bottom=-n,t.shadow.bias=-5e-4,this.scene.add(t);const i=[5032432,16196997,16758531];[{x:-12,z:-12,color:i[0]},{x:12,z:-12,color:i[1]},{x:0,z:12,color:i[2]}].forEach(s=>{const a=new hr(s.color,1.2,18,1.5);a.position.set(s.x,3.5,s.z),this.scene.add(a)})}initSky(){const e=new ti(150,32,24),t=`
      varying vec3 vWorldPosition;
      void main() {
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPosition.xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,n=`
      uniform vec3 topColor;
      uniform vec3 bottomColor;
      uniform float offset;
      uniform float exponent;
      varying vec3 vWorldPosition;
      void main() {
        float h = normalize(vWorldPosition + offset).y;
        gl_FragColor = vec4(mix(bottomColor, topColor, max(pow(max(h, 0.0), exponent), 0.0)), 1.0);
      }
    `,i={topColor:{value:new Se(990528)},bottomColor:{value:new Se(2636651)},offset:{value:33},exponent:{value:.6}},s=new bn({vertexShader:t,fragmentShader:n,uniforms:i,side:Tt}),a=new ne(e,s);this.scene.add(a)}initGround(){const e=new Gn(240,240),t=new Ye({color:1717029}),n=new ne(e,t);n.rotation.x=-Math.PI/2,n.receiveShadow=!0,this.scene.add(n);const i=new rr(26,48),s=new Ye({color:14213852}),a=new ne(i,s);a.rotation.x=-Math.PI/2,a.position.set(0,.02,0),a.receiveShadow=!0,this.scene.add(a);const o=[0,Math.PI/3,2*Math.PI/3,Math.PI,4*Math.PI/3,5*Math.PI/3],c=new Ye({color:11913667});o.forEach(m=>{const f=new Gn(6,45),M=new ne(f,c);M.rotation.x=-Math.PI/2,M.rotation.z=m,M.position.set(Math.sin(m)*35,.03,Math.cos(m)*35),M.receiveShadow=!0,this.scene.add(M)});const l=new Ye({color:4020864}),h=new Be(240,6,2),u=new Be(2,6,240),d=new ne(h,l);d.position.set(0,3,-118),this.scene.add(d),this.collisionSystem.addMeshCollider(d);const p=new ne(h,l);p.position.set(0,3,118),this.scene.add(p),this.collisionSystem.addMeshCollider(p);const g=new ne(u,l);g.position.set(-118,3,0),this.scene.add(g),this.collisionSystem.addMeshCollider(g);const _=new ne(u,l);_.position.set(118,3,0),this.scene.add(_),this.collisionSystem.addMeshCollider(_)}initCourtyardFountain(){const e=new dt;e.position.set(0,0,0);const t=new Ht(5.2,5.5,.8,24),n=new Ye({color:4674921}),i=new ne(t,n);i.position.y=.4,i.castShadow=!0,i.receiveShadow=!0,e.add(i),this.collisionSystem.addMeshCollider(i);const s=new rr(4.8,24),a=new Dt({color:4770532,transparent:!0,opacity:.85}),o=new ne(s,a);o.rotation.x=-Math.PI/2,o.position.y=.78,e.add(o);const c=new Ht(1.2,1.4,2.2,16),l=new ne(c,n);l.position.y=1.1,e.add(l);const h=new Oi(1.2,0),u=new Vn({color:16758531,metalness:.8,roughness:.2,emissive:16753152,emissiveIntensity:.25}),d=new ne(h,u);d.position.y=3.2,d.castShadow=!0,e.add(d);const p=new ki(1.8,.08,12,32),g=new Dt({color:5032432}),_=new ne(p,g),m=new ne(p,g);_.position.y=3.2,m.position.y=3.2,e.add(_),e.add(m),this.scene.add(e),this.animatedObjects.push(f=>{d.rotation.y=f*.8,d.rotation.x=Math.sin(f*.5)*.4,d.position.y=3.2+Math.sin(f*2)*.15,_.rotation.x=f*1.2,_.rotation.y=f*.6,m.rotation.z=f*1,m.rotation.y=-f*.8})}initFoliageAndDecorations(){[{x:-18,z:18},{x:18,z:18},{x:-18,z:-18},{x:18,z:-18},{x:-38,z:8},{x:38,z:8},{x:-38,z:-8},{x:38,z:-8},{x:0,z:38},{x:-28,z:45},{x:28,z:45}].forEach(n=>{this.createTree(n.x,n.z)}),[{x:-9,z:0,rot:Math.PI/2},{x:9,z:0,rot:-Math.PI/2},{x:0,z:-9,rot:0}].forEach(n=>{this.createBench(n.x,n.z,n.rot)})}createTree(e,t){const n=new dt;n.position.set(e,0,t);const i=new Ht(.3,.45,2.5,8),s=new Ye({color:6045747}),a=new ne(i,s);a.position.y=1.25,a.castShadow=!0,n.add(a),this.collisionSystem.addMeshCollider(a);const o=new Ye({color:2976335}),c=new Ye({color:4231532}),l=new ne(new si(2.4,2.8,7),o);l.position.y=3.2,l.castShadow=!0,n.add(l);const h=new ne(new si(1.8,2.4,7),c);h.position.y=4.6,h.castShadow=!0,n.add(h),this.scene.add(n)}createBench(e,t,n){const i=new dt;i.position.set(e,0,t),i.rotation.y=n;const s=new Ye({color:9741240}),a=new ne(new Be(2.4,.2,.7),s);a.position.y=.5,a.castShadow=!0,i.add(a);const o=new ne(new Be(.3,.4,.6),s);o.position.set(-.9,.2,0),i.add(o);const c=new ne(new Be(.3,.4,.6),s);c.position.set(.9,.2,0),i.add(c),this.scene.add(i),this.collisionSystem.addMeshCollider(a)}update(e,t){this.animatedObjects.forEach(n=>n(t))}}class L0{constructor(e,t){this.scene=e,this.collisionSystem=t,this.terminals=[],this.animatedProps=[],this.wallMat=new Ye({color:2374485}),this.wallTrimMat=new Ye({color:5032432}),this.pedestalMat=new Ye({color:988970}),this.goldMat=new Vn({color:16758531,metalness:.7,roughness:.3}),this.woodMat=new Ye({color:7877903}),this.blackboardMat=new Ye({color:1980975})}createThemedRoom(e){const{id:t,name:n,x:i,z:s,width:a=16,depth:o=16,height:c=7,floorColor:l=1976635,symbol:h="triangle",pedestalColor:u=4415982,doorSide:d="south"}=e,p=new dt;p.position.set(i,0,s);const g=new Gn(a-.4,o-.4),_=new Ye({color:l}),m=new ne(g,_);m.rotation.x=-Math.PI/2,m.position.y=.05,m.receiveShadow=!0,p.add(m);const f=.8,M=a/2,w=o/2,x=4.2,L=4.5,b=(B,F,W,X)=>{const G=new Be(B,c,F),j=new ne(G,this.wallMat);j.position.set(W,c/2,X),j.castShadow=!0,j.receiveShadow=!0,p.add(j),this.collisionSystem.addMeshCollider(j)},T=(B,F,W)=>{const G=((B?a:o)-x)/2,j=B?new Be(G,c,f):new Be(f,c,G),V=new ne(j,this.wallMat),te=new ne(j,this.wallMat);B?(V.position.set(F-(x+G)/2,c/2,W),te.position.set(F+(x+G)/2,c/2,W)):(V.position.set(F,c/2,W-(x+G)/2),te.position.set(F,c/2,W+(x+G)/2)),V.castShadow=!0,te.castShadow=!0,p.add(V),p.add(te),this.collisionSystem.addMeshCollider(V),this.collisionSystem.addMeshCollider(te);const re=c-L,ve=B?new Be(x,re,f):new Be(f,re,x),Ne=new ne(ve,this.wallMat);Ne.position.set(F,L+re/2,W),p.add(Ne);const Qe=new Dt({color:u}),q=B?new Be(x+.3,.2,f+.2):new Be(f+.2,.2,x+.3),Q=new ne(q,Qe);Q.position.set(F,L,W),p.add(Q)};d==="south"?(T(!0,0,w),b(a,f,0,-w),b(f,o,-M,0),b(f,o,M,0)):d==="north"?(T(!0,0,-w),b(a,f,0,w),b(f,o,-M,0),b(f,o,M,0)):d==="west"?(T(!1,-M,0),b(f,o,M,0),b(a,f,0,-w),b(a,f,0,w)):(T(!1,M,0),b(f,o,-M,0),b(a,f,0,-w),b(a,f,0,w));const I=new Be(6,1.2,.3),A=new Ye({color:988970}),v=new ne(I,A);v.position.set(0,L+1.2,d==="south"?w+.2:-w-.2),p.add(v);const R=this.createPedestal(p,0,0,n,t,h,u);return this.terminals.push(R),this.addRoomDecorations(p,h,a,o,u),this.scene.add(p),p}createPedestal(e,t,n,i,s,a,o){const c=new dt;c.position.set(t,0,n);const l=new Ht(1.3,1.6,.4,8),h=new ne(l,this.pedestalMat);h.position.y=.2,h.castShadow=!0,c.add(h);const u=new Ht(.7,.9,1.1,8),d=new ne(u,this.pedestalMat);d.position.y=.95,d.castShadow=!0,c.add(d);const p=new ki(1.2,.08,12,24),g=new Dt({color:o}),_=new ne(p,g);_.rotation.x=Math.PI/2,_.position.y=.42,c.add(_);const m=new Vn({color:o,emissive:o,emissiveIntensity:.4,metalness:.5,roughness:.2});let f;switch(a){case"triangle":f=new si(.7,1,3);break;case"quadrilateral":f=new Be(.8,.8,.8);break;case"circle":f=new ki(.55,.18,16,32);break;case"pythagoras":f=new ro(.8);break;case"shapes_3d":f=new so(.75);break;case"mixed":f=new Oi(.8);break;default:f=new Bi(.75);break}const M=new ne(f,m);M.position.y=2.1,M.castShadow=!0,c.add(M);const w=new hr(o,1.5,8,2);return w.position.set(0,2.1,0),c.add(w),e.add(c),this.animatedProps.push(x=>{M.rotation.y=x*1.5,M.rotation.x=Math.sin(x*2)*.2,M.position.y=2.1+Math.sin(x*2.5)*.12,_.rotation.z=x*.8}),{topicId:s,topicName:i,worldPosition:new C().setFromMatrixPosition(c.matrixWorld),group:c,radius:2.8}}addRoomDecorations(e,t,n,i,s){const a=n/2,o=i/2,c=new Ht(.4,.4,6.5,8);[{x:-a+1.2,z:-o+1.2},{x:a-1.2,z:-o+1.2},{x:-a+1.2,z:o-1.2},{x:a-1.2,z:o-1.2}].forEach(_=>{const m=new ne(c,this.pedestalMat);m.position.set(_.x,3.25,_.z),e.add(m),this.collisionSystem.addMeshCollider(m)});const h=new Be(4.5,2.5,.1),u=new ne(h,this.blackboardMat);u.position.set(0,3.6,-o+.45),e.add(u);const d=new Oi(1.4,1),p=new Dt({color:s,wireframe:!0}),g=new ne(d,p);g.position.set(-a+3.2,3.2,-o+3.2),e.add(g),this.animatedProps.push(_=>{g.rotation.x=_*.6,g.rotation.y=_*.9})}createClassroom(e,t){const n=new dt;n.position.set(e,0,t);const i=20,s=18,a=new Gn(i-.4,s-.4),o=new Ye({color:3359061}),c=new ne(a,o);c.rotation.x=-Math.PI/2,c.position.y=.05,c.receiveShadow=!0,n.add(c);for(let u=0;u<3;u++)for(let d=0;d<3;d++){const p=(d-1)*4.8,g=(u-1)*3.8+2,_=new ne(new Be(2.4,1.2,1.1),this.woodMat);_.position.set(p,.6,g),_.castShadow=!0,n.add(_),this.collisionSystem.addMeshCollider(_);const m=new ne(new Be(.8,.8,.8),this.woodMat);m.position.set(p,.4,g+1.1),n.add(m)}const l=new ne(new Be(2.2,1.4,1.2),this.woodMat);l.position.set(0,.7,-5.5),l.castShadow=!0,n.add(l),this.collisionSystem.addMeshCollider(l);const h=new ne(new Be(10,3.2,.15),this.blackboardMat);h.position.set(0,3.8,-8.6),n.add(h),this.scene.add(n)}createEntranceArch(e,t){const n=new dt;n.position.set(e,0,t);const i=new Ye({color:1976635}),s=new Vn({color:16758531,metalness:.8}),a=new ne(new Be(2.2,9,2.2),i);a.position.set(-6,4.5,0),a.castShadow=!0,n.add(a),this.collisionSystem.addMeshCollider(a);const o=new ne(new Be(2.2,9,2.2),i);o.position.set(6,4.5,0),o.castShadow=!0,n.add(o),this.collisionSystem.addMeshCollider(o);const c=new ne(new Be(15,2.2,2.6),i);c.position.set(0,9.6,0),c.castShadow=!0,n.add(c);const l=new ne(new Bi(1.2),s);l.position.set(0,11.5,0),n.add(l),this.scene.add(n)}update(e,t){this.animatedProps.forEach(n=>n(t))}}class P0{constructor(e,t,n,i){this.scene=e,this.collisionSystem=t,this.assetManager=n,this.audioManager=i,this.collectibles=[],this.terminals=[],this.teacherNPC=null,this.animatedObjects=[],this.init()}init(){this.environment=new I0(this.scene,this.collisionSystem),this.building=new L0(this.scene,this.collisionSystem),this.constructAcademyWings(),this.spawnTeacherNPC(),this.spawnCollectibles()}constructAcademyWings(){this.building.createEntranceArch(0,50),this.building.createClassroom(25,32),[{id:"lines_angles",name:"Lines & Angles Pavilion",x:-36,z:-32,floorColor:1981066,symbol:"octahedron",pedestalColor:3718648,doorSide:"south"},{id:"triangles",name:"Triangle Domain",x:0,z:-48,floorColor:8591427,symbol:"triangle",pedestalColor:16007006,doorSide:"south"},{id:"quadrilaterals",name:"Quadrilateral Hall",x:36,z:-32,floorColor:1332013,symbol:"quadrilateral",pedestalColor:2278750,doorSide:"south"},{id:"circles",name:"Circle Sanctuary",x:52,z:0,floorColor:7346805,symbol:"circle",pedestalColor:14239471,doorSide:"west"},{id:"perimeter",name:"Perimeter Chamber",x:-52,z:0,floorColor:8138002,symbol:"octahedron",pedestalColor:16347926,doorSide:"east"},{id:"area",name:"Area Laboratory",x:-52,z:32,floorColor:3560212,symbol:"quadrilateral",pedestalColor:8702998,doorSide:"east"},{id:"surface_area",name:"Surface Area Vault",x:-76,z:-18,floorColor:1265226,symbol:"shapes_3d",pedestalColor:1357990,doorSide:"east"},{id:"volume",name:"Volume Dimension",x:-76,z:18,floorColor:1516884,symbol:"shapes_3d",pedestalColor:3900150,doorSide:"east"},{id:"pythagoras",name:"Pythagorean Temple",x:-25,z:32,floorColor:7421714,symbol:"pythagoras",pedestalColor:15381256,doorSide:"north"},{id:"coordinates",name:"Cartesian Coordinate Observatory",x:52,z:-32,floorColor:3223169,symbol:"octahedron",pedestalColor:6514417,doorSide:"west"},{id:"symmetry",name:"Symmetry Mirror Wing",x:52,z:32,floorColor:4988309,symbol:"circle",pedestalColor:11032055,doorSide:"west"},{id:"shapes_3d",name:"3D Polyhedra Lab",x:76,z:0,floorColor:413243,symbol:"shapes_3d",pedestalColor:1096065,doorSide:"west"},{id:"mixed",name:"Grand Master Geometry Arena",x:0,z:-84,width:24,depth:24,height:10,floorColor:4524554,symbol:"mixed",pedestalColor:16758531,doorSide:"south"}].forEach(t=>{this.building.createThemedRoom(t)}),this.terminals=this.building.terminals}spawnTeacherNPC(){const e=this.assetManager.getModel("teacher");let t;e&&e.scene?(t=e.scene,t.scale.set(1.1,1.1,1.1)):t=this.assetManager.createProceduralTeacher();const n=new dt;n.position.set(0,0,7.5),n.rotation.y=Math.PI,n.add(t),this.scene.add(n),this.collisionSystem.addMeshCollider(t);const i=new Bi(.35),s=new Dt({color:16758531}),a=new ne(i,s);a.position.set(0,2.5,0),n.add(a),this.teacherNPC={name:"Teacher Archimedes",position:new C(0,0,7.5),radius:3.5,group:n,icon:a},this.animatedObjects.push(o=>{a.rotation.y=o*2,a.position.y=2.5+Math.sin(o*3)*.1})}spawnCollectibles(){const e=[{type:"triangle",color:16196997,geo:new si(.45,.7,3),score:25},{type:"circle",color:5032432,geo:new ki(.35,.1,12,24),score:25},{type:"cube",color:3065014,geo:new Be(.55,.55,.55),score:50},{type:"star",color:16758531,geo:new Oi(.4),score:100}];[{x:-7,z:7},{x:7,z:7},{x:-7,z:-7},{x:7,z:-7},{x:0,z:22},{x:0,z:-22},{x:-22,z:0},{x:22,z:0},{x:-18,z:-18},{x:18,z:-18},{x:-18,z:18},{x:18,z:18},{x:-30,z:12},{x:30,z:12},{x:-30,z:-12},{x:30,z:-12},{x:0,z:35},{x:-12,z:42},{x:12,z:42},{x:0,z:-65}].forEach((n,i)=>{const s=e[i%e.length],a=new Vn({color:s.color,emissive:s.color,emissiveIntensity:.5,metalness:.6,roughness:.3}),o=new ne(s.geo,a);o.position.set(n.x,1.2,n.z),o.castShadow=!0,this.scene.add(o);const c=new hr(s.color,.8,4);c.position.set(n.x,1.2,n.z),this.scene.add(c),this.collectibles.push({id:`token_${i}`,type:s.type,score:s.score,mesh:o,light:c,collected:!1,pos:new C(n.x,1.2,n.z)})})}checkCollectibles(e,t){this.collectibles.forEach(n=>{!n.collected&&n.pos.distanceTo(e)<1.6&&(n.collected=!0,n.mesh.visible=!1,n.light.visible=!1,this.audioManager&&this.audioManager.playToken(),t&&t(n))})}update(e,t){this.environment.update(e,t),this.building.update(e,t),this.animatedObjects.forEach(n=>n(t)),this.collectibles.forEach((n,i)=>{n.collected||(n.mesh.rotation.y=t*2+i,n.mesh.rotation.x=Math.sin(t*2+i)*.3,n.mesh.position.y=1.2+Math.sin(t*3+i)*.2)})}}class D0{constructor(e){this.camera=e,this.keys={forward:!1,backward:!1,left:!1,right:!1,sprint:!1,jump:!1,interact:!1},this.touchVector=new Pe(0,0),this.isTouchActive=!1,this.onInteractCallback=null,this.onPauseCallback=null,this.onTopicsCallback=null,this.initListeners(),this.initTouchControls()}initListeners(){window.addEventListener("keydown",e=>{this.handleKeyDown(e)}),window.addEventListener("keyup",e=>{this.handleKeyUp(e)})}handleKeyDown(e){switch(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.code)&&e.preventDefault(),e.code){case"KeyW":case"ArrowUp":this.keys.forward=!0;break;case"KeyS":case"ArrowDown":this.keys.backward=!0;break;case"KeyA":case"ArrowLeft":this.keys.left=!0;break;case"KeyD":case"ArrowRight":this.keys.right=!0;break;case"ShiftLeft":case"ShiftRight":this.keys.sprint=!0;break;case"Space":this.keys.jump=!0;break;case"KeyE":!this.keys.interact&&this.onInteractCallback&&this.onInteractCallback(),this.keys.interact=!0;break;case"Escape":this.onPauseCallback&&this.onPauseCallback();break;case"KeyM":this.onTopicsCallback&&this.onTopicsCallback();break}}handleKeyUp(e){switch(e.code){case"KeyW":case"ArrowUp":this.keys.forward=!1;break;case"KeyS":case"ArrowDown":this.keys.backward=!1;break;case"KeyA":case"ArrowLeft":this.keys.left=!1;break;case"KeyD":case"ArrowRight":this.keys.right=!1;break;case"ShiftLeft":case"ShiftRight":this.keys.sprint=!1;break;case"Space":this.keys.jump=!1;break;case"KeyE":this.keys.interact=!1;break}}initTouchControls(){const e="ontouchstart"in window||navigator.maxTouchPoints>0,t=document.getElementById("mobile-controls");if(e&&t){t.classList.remove("hidden");const n=document.getElementById("joystick-zone"),i=document.getElementById("joystick-thumb");let s=0,a=0;const o=40;n.addEventListener("touchstart",u=>{u.touches[0];const d=n.getBoundingClientRect();s=d.left+d.width/2,a=d.top+d.height/2,this.isTouchActive=!0},{passive:!1}),n.addEventListener("touchmove",u=>{if(!this.isTouchActive)return;const d=u.touches[0];let p=d.clientX-s,g=d.clientY-a;const _=Math.hypot(p,g);_>o&&(p=p/_*o,g=g/_*o),i.style.transform=`translate(calc(-50% + ${p}px), calc(-50% + ${g}px))`,this.touchVector.set(p/o,g/o),u.preventDefault()},{passive:!1});const c=()=>{this.isTouchActive=!1,this.touchVector.set(0,0),i.style.transform="translate(-50%, -50%)"};n.addEventListener("touchend",c),n.addEventListener("touchcancel",c);const l=document.getElementById("btn-mobile-jump"),h=document.getElementById("btn-mobile-interact");l&&(l.addEventListener("touchstart",()=>{this.keys.jump=!0}),l.addEventListener("touchend",()=>{this.keys.jump=!1})),h&&h.addEventListener("touchstart",()=>{this.onInteractCallback&&this.onInteractCallback()})}}getMoveDirection(e){const t=new C;let n=0,i=0;if(this.keys.forward&&(n+=1),this.keys.backward&&(n-=1),this.keys.right&&(i+=1),this.keys.left&&(i-=1),this.isTouchActive&&(i+=this.touchVector.x,n-=this.touchVector.y),n===0&&i===0)return t;const s=new C;e.getWorldDirection(s),s.y=0,s.normalize();const a=new C;return a.crossVectors(e.up,s).negate().normalize(),t.addScaledVector(s,n),t.addScaledVector(a,i),t.normalize(),t}}class Vc{constructor(e,t=null){this.mesh=e,this.gltfData=t,this.mixer=null,this.actions={},this.currentAction=null,this.state="idle",this.animTime=0,t&&t.animations&&t.animations.length>0&&this.initGltfAnimations()}initGltfAnimations(){this.mixer=new Hg(this.mesh),this.gltfData.animations.forEach(e=>{const t=e.name.toLowerCase(),n=this.mixer.clipAction(e);t.includes("idle")?this.actions.idle=n:t.includes("run")?this.actions.run=n:t.includes("walk")?this.actions.walk=n:t.includes("jump")?this.actions.jump=n:this.actions.idle||(this.actions.idle=n)}),this.actions.idle&&(this.actions.idle.play(),this.currentAction=this.actions.idle)}setState(e){if(this.state!==e&&(this.state=e,this.mixer)){const t=this.actions[e]||this.actions.idle;t&&t!==this.currentAction&&(this.currentAction&&this.currentAction.fadeOut(.2),t.reset().fadeIn(.2).play(),this.currentAction=t)}}update(e,t,n,i){this.mixer&&this.mixer.update(e),i?t?this.setState(n?"run":"walk"):this.setState("idle"):this.setState("jump"),this.mesh.leftArm&&this.mesh.rightArm&&this.mesh.leftLeg&&this.mesh.rightLeg&&this.updateProceduralBones(e,t,n,i)}updateProceduralBones(e,t,n,i){const s=n?16:10;if(t&&i){this.animTime+=e*s;const a=Math.sin(this.animTime);this.mesh.leftLeg.rotation.x=a*(n?.8:.5),this.mesh.rightLeg.rotation.x=-a*(n?.8:.5),this.mesh.leftArm.rotation.x=-a*(n?.8:.5),this.mesh.rightArm.rotation.x=a*(n?.8:.5),this.mesh.position.y=Math.abs(Math.sin(this.animTime*2))*(n?.08:.04),this.mesh.rotation.z=Math.sin(this.animTime)*.04}else if(!i)this.mesh.leftLeg.rotation.x=.5,this.mesh.rightLeg.rotation.x=-.3,this.mesh.leftArm.rotation.x=-.9,this.mesh.rightArm.rotation.x=-.9,this.mesh.rotation.z=0;else{this.animTime+=e*2.5;const a=Math.sin(this.animTime);this.mesh.leftArm.rotation.x=a*.05,this.mesh.rightArm.rotation.x=-a*.05,this.mesh.leftLeg.rotation.x=0,this.mesh.rightLeg.rotation.x=0,this.mesh.position.y=a*.02,this.mesh.rotation.z=0}}}class N0{constructor(e,t,n,i){this.scene=e,this.assetManager=t,this.collisionSystem=n,this.audioManager=i,this.position=new C(0,0,15),this.velocity=new C(0,0,0),this.targetRotationY=0,this.currentRotationY=0,this.walkSpeed=7.5,this.runSpeed=12.5,this.jumpForce=9.5,this.gravity=-24,this.isGrounded=!0,this.group=new dt,this.group.position.copy(this.position),this.scene.add(this.group),this.initMesh()}initMesh(){const e=this.assetManager.getModel("player");e&&e.scene?(this.mesh=e.scene,this.mesh.scale.set(1,1,1),this.mesh.traverse(t=>{t.isMesh&&(t.castShadow=!0,t.receiveShadow=!0)}),this.group.add(this.mesh),this.animation=new Vc(this.mesh,e)):(this.mesh=this.assetManager.createProceduralPlayer(),this.group.add(this.mesh),this.animation=new Vc(this.mesh,null))}setController(e){this.controller=e}teleport(e,t=0){this.position.copy(e),this.velocity.set(0,0,0),this.group.position.copy(this.position),this.currentRotationY=t,this.targetRotationY=t,this.group.rotation.y=t}update(e,t){if(!this.controller)return;const n=this.controller.getMoveDirection(t),i=n.lengthSq()>.001,s=this.controller.keys.sprint&&i,a=s?this.runSpeed:this.walkSpeed,o=new C;i&&(o.x=n.x*a*e,o.z=n.z*a*e,this.targetRotationY=Math.atan2(n.x,n.z));let c=this.targetRotationY-this.currentRotationY;for(;c>Math.PI;)c-=Math.PI*2;for(;c<-Math.PI;)c+=Math.PI*2;this.currentRotationY+=c*Math.min(1,e*14),this.group.rotation.y=this.currentRotationY,this.isGrounded&&this.controller.keys.jump&&(this.velocity.y=this.jumpForce,this.isGrounded=!1,this.audioManager&&this.audioManager.playJump()),this.isGrounded||(this.velocity.y+=this.gravity*e),o.y=this.velocity.y*e;const l=this.collisionSystem.resolveMovement(this.position,o);l.y<=.001?(l.y=0,this.velocity.y=0,this.isGrounded=!0):this.isGrounded=!1,this.position.copy(l),this.group.position.copy(this.position),this.animation&&this.animation.update(e,i,s,this.isGrounded)}}class U0{constructor(e,t,n){this.camera=e,this.target=t,this.domElement=n,this.yaw=0,this.pitch=.28,this.distance=6,this.minDistance=2,this.maxDistance=11,this.targetDistance=6,this.minPitch=-.1,this.maxPitch=1.1,this.currentPosition=new C,this.currentLookAt=new C,this.heightOffset=1.4,this.isDragging=!1,this.prevMouseX=0,this.prevMouseY=0,this.initControls()}initControls(){this.domElement.addEventListener("mousedown",n=>{this.isDragging=!0,this.prevMouseX=n.clientX,this.prevMouseY=n.clientY}),window.addEventListener("mousemove",n=>{if(!this.isDragging)return;const i=n.clientX-this.prevMouseX,s=n.clientY-this.prevMouseY;this.yaw-=i*.005,this.pitch+=s*.005,this.pitch=Math.max(this.minPitch,Math.min(this.maxPitch,this.pitch)),this.prevMouseX=n.clientX,this.prevMouseY=n.clientY}),window.addEventListener("mouseup",()=>{this.isDragging=!1});let e=0,t=0;this.domElement.addEventListener("touchstart",n=>{n.touches.length===1&&(e=n.touches[0].clientX,t=n.touches[0].clientY)},{passive:!0}),this.domElement.addEventListener("touchmove",n=>{if(n.touches.length===1){const i=n.touches[0].clientX-e,s=n.touches[0].clientY-t;e>window.innerWidth*.35&&(this.yaw-=i*.006,this.pitch+=s*.006,this.pitch=Math.max(this.minPitch,Math.min(this.maxPitch,this.pitch))),e=n.touches[0].clientX,t=n.touches[0].clientY}},{passive:!0}),this.domElement.addEventListener("wheel",n=>{this.targetDistance+=n.deltaY*.005,this.targetDistance=Math.max(this.minDistance,Math.min(this.maxDistance,this.targetDistance))},{passive:!0})}reset(){this.yaw=0,this.pitch=.28,this.targetDistance=6}update(e,t=[]){if(!this.target||!this.target.position)return;this.distance+=(this.targetDistance-this.distance)*Math.min(1,e*8);const n=this.target.position.clone(),i=new C(n.x,n.y+this.heightOffset,n.z),s=this.distance*Math.cos(this.pitch),a=this.distance*Math.sin(this.pitch),o=new C(n.x+s*Math.sin(this.yaw),n.y+this.heightOffset+a,n.z+s*Math.cos(this.yaw));o.y<.6&&(o.y=.6);let c=this.distance;const l=o.clone().sub(i).normalize(),h=new gs(i,l);if(t&&t.length>0)for(const d of t){const p=new C;if(h.intersectBox(d,p)){const g=i.distanceTo(p)-.4;g>.5&&g<c&&(c=g)}}const u=new C(n.x+c*Math.cos(this.pitch)*Math.sin(this.yaw),n.y+this.heightOffset+c*Math.sin(this.pitch),n.z+c*Math.cos(this.pitch)*Math.cos(this.yaw));u.y<.6&&(u.y=.6),this.currentPosition.lerp(u,Math.min(1,e*12)),this.currentLookAt.lerp(i,Math.min(1,e*12)),this.camera.position.copy(this.currentPosition),this.camera.lookAt(this.currentLookAt)}}class F0{constructor(e,t,n){this.world=e,this.gameState=t,this.audioManager=n,this.promptEl=document.getElementById("interaction-prompt"),this.promptTextEl=document.getElementById("interaction-text"),this.currentInteractable=null,this.onInteractTriggered=null,this.promptEl&&this.promptEl.addEventListener("click",()=>{this.triggerInteraction()})}update(e){if(this.gameState.mode!=="EXPLORATION"){this.hidePrompt(),this.currentInteractable=null;return}let t=null,n=1/0;if(this.world.teacherNPC){const i=e.distanceTo(this.world.teacherNPC.position);i<this.world.teacherNPC.radius&&i<n&&(n=i,t={type:"npc",name:this.world.teacherNPC.name,label:"TALK TO TEACHER ARCHIMEDES",target:this.world.teacherNPC})}this.world.terminals&&this.world.terminals.length>0&&this.world.terminals.forEach(i=>{var o;const s=new C;i.group.getWorldPosition(s);const a=e.distanceTo(s);if(a<i.radius&&a<n){n=a;const c=(o=this.gameState.topicStats[i.topicId])==null?void 0:o.unlocked;t={type:"terminal",topicId:i.topicId,topicName:i.topicName,isUnlocked:c,label:c?`ENTER ${i.topicName.toUpperCase()}`:`LOCKED (${i.topicName})`,target:i}}}),t?(this.currentInteractable=t,this.showPrompt(t.label)):(this.currentInteractable=null,this.hidePrompt())}showPrompt(e){this.promptTextEl&&(this.promptTextEl.textContent=e),this.promptEl&&this.promptEl.classList.remove("hidden")}hidePrompt(){this.promptEl&&this.promptEl.classList.add("hidden")}triggerInteraction(){this.currentInteractable&&(this.audioManager&&this.audioManager.playClick(),this.onInteractTriggered&&this.onInteractTriggered(this.currentInteractable))}}const O0=[{id:"la_1",topic:"lines_angles",difficulty:"easy",question:"What type of angle measures exactly 90 degrees?",options:["Acute angle","Right angle","Obtuse angle","Straight angle"],correctAnswer:"Right angle",explanation:"A right angle measures exactly 90°. It forms a square corner where two perpendicular lines meet.",xp:20,diagram:{type:"angle",value:90,label:"90°"}},{id:"la_2",topic:"lines_angles",difficulty:"easy",question:"An angle measuring less than 90 degrees is called what?",options:["Acute angle","Obtuse angle","Reflex angle","Right angle"],correctAnswer:"Acute angle",explanation:"Any angle between 0° and 90° is defined as an acute angle.",xp:20,diagram:{type:"angle",value:45,label:"45°"}},{id:"la_3",topic:"lines_angles",difficulty:"easy",question:"What is the sum of two complementary angles?",options:["90 degrees","180 degrees","270 degrees","360 degrees"],correctAnswer:"90 degrees",explanation:"Complementary angles always add up to 90° (a right angle).",xp:20,diagram:{type:"complementary",a:35,b:55}},{id:"la_4",topic:"lines_angles",difficulty:"easy",question:"What is the sum of two supplementary angles on a straight line?",options:["90 degrees","180 degrees","360 degrees","100 degrees"],correctAnswer:"180 degrees",explanation:"Supplementary angles form a straight line and always sum to 180°.",xp:20,diagram:{type:"supplementary",a:110,b:70}},{id:"la_5",topic:"lines_angles",difficulty:"easy",question:"Two lines that never intersect and remain equidistant are called:",options:["Parallel lines","Perpendicular lines","Intersecting lines","Skew lines"],correctAnswer:"Parallel lines",explanation:"Parallel lines lie in the same plane and never meet, no matter how far extended.",xp:20,diagram:{type:"parallel_lines"}},{id:"la_6",topic:"lines_angles",difficulty:"medium",question:"If angle A and angle B are complementary, and angle A is 38°, what is angle B?",options:["52°","62°","142°","42°"],correctAnswer:"52°",explanation:"Complementary angles add to 90°. Angle B = 90° - 38° = 52°.",xp:25,diagram:{type:"complementary",a:38,b:52}},{id:"la_7",topic:"lines_angles",difficulty:"medium",question:"If two lines intersect, what is true about the vertically opposite angles?",options:["They are equal","They sum to 90°","They sum to 180°","They are always acute"],correctAnswer:"They are equal",explanation:"Vertically opposite (vertical) angles created by two intersecting straight lines are always equal in measure.",xp:25,diagram:{type:"vertical_angles",angle:65}},{id:"la_8",topic:"lines_angles",difficulty:"medium",question:"An angle measuring 135 degrees is classified as:",options:["Obtuse angle","Acute angle","Reflex angle","Straight angle"],correctAnswer:"Obtuse angle",explanation:"An obtuse angle is greater than 90° and less than 180°. 135° falls strictly in this range.",xp:25,diagram:{type:"angle",value:135,label:"135°"}},{id:"la_9",topic:"lines_angles",difficulty:"medium",question:"An angle measuring 240 degrees is classified as:",options:["Reflex angle","Obtuse angle","Straight angle","Full rotation"],correctAnswer:"Reflex angle",explanation:"A reflex angle measures strictly between 180° and 360°.",xp:25,diagram:{type:"angle",value:240,label:"240°"}},{id:"la_10",topic:"lines_angles",difficulty:"medium",question:"Two lines that intersect at an angle of 90 degrees are called:",options:["Perpendicular lines","Parallel lines","Collinear lines","Concurrent lines"],correctAnswer:"Perpendicular lines",explanation:"Perpendicular lines meet or intersect at exactly 90 degrees (right angles).",xp:25,diagram:{type:"perpendicular"}},{id:"la_11",topic:"lines_angles",difficulty:"medium",question:"If one angle on a straight line is 74°, what is its supplementary adjacent angle?",options:["106°","116°","16°","96°"],correctAnswer:"106°",explanation:"Straight line angles sum to 180°. 180° - 74° = 106°.",xp:25,diagram:{type:"supplementary",a:74,b:106}},{id:"la_12",topic:"lines_angles",difficulty:"medium",question:"When a transversal cuts two parallel lines, alternate interior angles are:",options:["Equal","Supplementary","Complementary","Unequal"],correctAnswer:"Equal",explanation:"Alternate interior angles formed by a transversal cutting two parallel lines are always congruent (equal).",xp:25,diagram:{type:"transversal",angle:50}},{id:"la_13",topic:"lines_angles",difficulty:"hard",question:"When a transversal intersects two parallel lines, consecutive (co-interior) interior angles are:",options:["Supplementary (sum to 180°)","Equal","Complementary (sum to 90°)","Sum to 360°"],correctAnswer:"Supplementary (sum to 180°)",explanation:"Consecutive interior angles on the same side of a transversal between parallel lines sum to 180°.",xp:35,diagram:{type:"transversal_cointerior",angle:60}},{id:"la_14",topic:"lines_angles",difficulty:"hard",question:"What is the sum of angles around a single point on a 2D plane?",options:["360 degrees","180 degrees","270 degrees","720 degrees"],correctAnswer:"360 degrees",explanation:"A complete rotation around a point in a plane is always equal to 360° (or 2π radians).",xp:35,diagram:{type:"point_angles"}},{id:"la_15",topic:"lines_angles",difficulty:"hard",question:"If two supplementary angles are in the ratio 2 : 3, what is the measure of the smaller angle?",options:["72°","108°","36°","60°"],correctAnswer:"72°",explanation:"2x + 3x = 180° => 5x = 180° => x = 36°. Smaller angle = 2 * 36° = 72°.",xp:35},{id:"la_16",topic:"lines_angles",difficulty:"hard",question:"An angle is 24° more than its complement. What is the measure of the angle?",options:["57°","33°","66°","48°"],correctAnswer:"57°",explanation:"Let angle be x. x + (x - 24°) = 90° => 2x = 114° => x = 57°. (Complement is 33°).",xp:35},{id:"la_17",topic:"lines_angles",difficulty:"expert",question:"If an angle is equal to one-fifth of its supplement, what is the angle measure?",options:["30°","36°","150°","25°"],correctAnswer:"30°",explanation:"Let angle be x. Supplement = 180 - x. x = (180 - x)/5 => 5x = 180 - x => 6x = 180° => x = 30°.",xp:45},{id:"la_18",topic:"lines_angles",difficulty:"expert",question:"A line segment has how many endpoints?",options:["2 endpoints","1 endpoint","0 endpoints","Infinite endpoints"],correctAnswer:"2 endpoints",explanation:"A line segment is bounded by exactly 2 distinct endpoints, whereas a ray has 1 endpoint and a line has none.",xp:45},{id:"la_19",topic:"lines_angles",difficulty:"expert",question:"What is the measure of the angle formed by the hands of a clock at exactly 3:30?",options:["75°","90°","60°","85°"],correctAnswer:"75°",explanation:"At 3:30, minute hand is at 6 (180°), hour hand is halfway between 3 and 4 (90° + 15° = 105°). Difference = 180° - 105° = 75°.",xp:45},{id:"la_20",topic:"lines_angles",difficulty:"expert",question:"If three angles around a point are (2x)°, (3x)°, and (4x)°, what is the value of x?",options:["40°","36°","45°","30°"],correctAnswer:"40°",explanation:"Angles around a point sum to 360°. 2x + 3x + 4x = 9x = 360° => x = 40°.",xp:45}],B0=[{id:"tri_1",topic:"triangles",difficulty:"easy",question:"What is the sum of interior angles in any triangle?",options:["180°","360°","90°","270°"],correctAnswer:"180°",explanation:"In Euclidean geometry, the three interior angles of any triangle always add up to exactly 180°.",xp:20,diagram:{type:"triangle",a:60,b:60,c:60,label:"Equilateral"}},{id:"tri_2",topic:"triangles",difficulty:"easy",question:"A triangle with three equal sides and three equal angles is called:",options:["Equilateral triangle","Isosceles triangle","Scalene triangle","Right triangle"],correctAnswer:"Equilateral triangle",explanation:"An equilateral triangle has 3 congruent sides and 3 equal interior angles of 60° each.",xp:20,diagram:{type:"triangle",a:60,b:60,c:60,label:"a = b = c"}},{id:"tri_3",topic:"triangles",difficulty:"easy",question:"A triangle with at least two equal sides is called:",options:["Isosceles triangle","Scalene triangle","Equilateral triangle","Obtuse triangle"],correctAnswer:"Isosceles triangle",explanation:"An isosceles triangle has two sides of equal length and the angles opposite those sides are equal.",xp:20,diagram:{type:"triangle",a:70,b:70,c:40,label:"Isosceles"}},{id:"tri_4",topic:"triangles",difficulty:"easy",question:"A triangle where all three sides have different lengths is called:",options:["Scalene triangle","Isosceles triangle","Equilateral triangle","Right triangle"],correctAnswer:"Scalene triangle",explanation:"A scalene triangle has three sides of completely different lengths and all angles are different.",xp:20},{id:"tri_5",topic:"triangles",difficulty:"easy",question:"What is the formula for the area of a triangle?",options:["(1/2) × base × height","base × height","2 × (base + height)","side²"],correctAnswer:"(1/2) × base × height",explanation:"The area of any triangle is half the product of its base and perpendicular height: Area = (1/2) * b * h.",xp:20},{id:"tri_6",topic:"triangles",difficulty:"medium",question:"If two angles of a triangle are 45° and 65°, what is the third angle?",options:["70°","80°","60°","90°"],correctAnswer:"70°",explanation:"Angles sum to 180°. Third angle = 180° - (45° + 65°) = 180° - 110° = 70°.",xp:25,diagram:{type:"triangle",a:45,b:65,c:70}},{id:"tri_7",topic:"triangles",difficulty:"medium",question:"In an isosceles triangle, the vertex angle is 40°. What is the measure of each base angle?",options:["70°","80°","60°","50°"],correctAnswer:"70°",explanation:"Remaining angle sum = 180° - 40° = 140°. Since base angles are equal: 140° / 2 = 70° each.",xp:25},{id:"tri_8",topic:"triangles",difficulty:"medium",question:"A right-angled triangle has one angle measuring 35°. What is the other acute angle?",options:["55°","45°","65°","35°"],correctAnswer:"55°",explanation:"In a right triangle, the two acute angles are complementary (sum to 90°). 90° - 35° = 55°.",xp:25,diagram:{type:"right_triangle",a:35,b:55}},{id:"tri_9",topic:"triangles",difficulty:"medium",question:"What is the area of a triangle with base 12 cm and height 8 cm?",options:["48 cm²","96 cm²","20 cm²","24 cm²"],correctAnswer:"48 cm²",explanation:"Area = (1/2) * base * height = (1/2) * 12 * 8 = 48 cm².",xp:25},{id:"tri_10",topic:"triangles",difficulty:"medium",question:"According to the Triangle Inequality Theorem, the sum of lengths of any two sides must be:",options:["Greater than the third side","Equal to the third side","Less than the third side","Half the third side"],correctAnswer:"Greater than the third side",explanation:"For any valid triangle with sides a, b, c: a + b > c, a + c > b, and b + c > a.",xp:25},{id:"tri_11",topic:"triangles",difficulty:"medium",question:"Which of the following sets of side lengths CAN form a valid triangle?",options:["5 cm, 7 cm, 10 cm","3 cm, 4 cm, 8 cm","2 cm, 3 cm, 6 cm","1 cm, 2 cm, 3 cm"],correctAnswer:"5 cm, 7 cm, 10 cm",explanation:"Check triangle inequality: 5 + 7 = 12 > 10. For 3,4,8: 3+4=7 < 8 (invalid). For 1,2,3: 1+2=3 not > 3 (degenerate).",xp:25},{id:"tri_12",topic:"triangles",difficulty:"hard",question:"An exterior angle of a triangle is 115°. If one opposite interior angle is 45°, what is the other opposite interior angle?",options:["70°","65°","80°","55°"],correctAnswer:"70°",explanation:"Exterior Angle Theorem states that the exterior angle equals the sum of two opposite interior angles: 115° = 45° + x => x = 70°.",xp:35},{id:"tri_13",topic:"triangles",difficulty:"hard",question:"What is the area of an equilateral triangle with side length 6 cm?",options:["9√3 cm²","18√3 cm²","36√3 cm²","9 cm²"],correctAnswer:"9√3 cm²",explanation:"Area of equilateral triangle = (√3 / 4) * s² = (√3 / 4) * 36 = 9√3 cm² (~15.59 cm²).",xp:35},{id:"tri_14",topic:"triangles",difficulty:"hard",question:"The angles of a triangle are in the ratio 2 : 3 : 4. What is the measure of the largest angle?",options:["80°","60°","40°","90°"],correctAnswer:"80°",explanation:"2x + 3x + 4x = 9x = 180° => x = 20°. Largest angle = 4 * 20° = 80°.",xp:35},{id:"tri_15",topic:"triangles",difficulty:"hard",question:"The point where the three medians of a triangle intersect is called the:",options:["Centroid","Incenter","Circumcenter","Orthocenter"],correctAnswer:"Centroid",explanation:"The Centroid is the point of concurrency of the three medians. It divides each median in a 2:1 ratio.",xp:35},{id:"tri_16",topic:"triangles",difficulty:"expert",question:"The point of concurrency of the three altitudes of a triangle is called the:",options:["Orthocenter","Centroid","Circumcenter","Incenter"],correctAnswer:"Orthocenter",explanation:"The Orthocenter is the intersection point of all three perpendicular altitudes drawn from vertices to opposite sides.",xp:45},{id:"tri_17",topic:"triangles",difficulty:"expert",question:"Using Heron's formula, what is the area of a triangle with sides 7 cm, 8 cm, and 9 cm?",options:["12√5 cm²","6√5 cm²","24 cm²","14√3 cm²"],correctAnswer:"12√5 cm²",explanation:"Semi-perimeter s = (7+8+9)/2 = 12. Area = √(12 * (12-7) * (12-8) * (12-9)) = √(12 * 5 * 4 * 3) = √720 = 12√5 cm².",xp:45},{id:"tri_18",topic:"triangles",difficulty:"expert",question:"In any triangle, the side opposite the largest angle is always:",options:["The longest side","The shortest side","Equal to half perimeter","Perpendicular"],correctAnswer:"The longest side",explanation:"In any triangle, larger angles are always opposite longer sides, and conversely.",xp:45},{id:"tri_19",topic:"triangles",difficulty:"expert",question:"If the sides of a triangle are 6, 8, and 10, what type of triangle is it?",options:["Right-angled triangle","Acute triangle","Obtuse triangle","Equilateral triangle"],correctAnswer:"Right-angled triangle",explanation:"Check Pythagorean theorem: 6² + 8² = 36 + 64 = 100 = 10². Thus it is exactly a right-angled triangle.",xp:45},{id:"tri_20",topic:"triangles",difficulty:"expert",question:"The circumcenter of a right-angled triangle lies:",options:["At the midpoint of the hypotenuse","Inside the triangle","At the right angle vertex","Outside the triangle"],correctAnswer:"At the midpoint of the hypotenuse",explanation:"By Thales' theorem, the circumcenter of every right triangle is located exactly at the midpoint of its hypotenuse.",xp:45}],k0=[{id:"quad_1",topic:"quadrilaterals",difficulty:"easy",question:"What is the sum of interior angles in any four-sided polygon (quadrilateral)?",options:["360°","180°","540°","720°"],correctAnswer:"360°",explanation:"Any quadrilateral can be split into 2 triangles, giving an interior angle sum of 2 × 180° = 360°.",xp:20},{id:"quad_2",topic:"quadrilaterals",difficulty:"easy",question:"A quadrilateral with 4 equal sides and 4 right angles is a:",options:["Square","Rectangle","Rhombus","Trapezoid"],correctAnswer:"Square",explanation:"A square is a regular quadrilateral with four equal sides and four 90° interior angles.",xp:20,diagram:{type:"rectangle",w:80,h:80,label:"Square (s=s)"}},{id:"quad_3",topic:"quadrilaterals",difficulty:"easy",question:"A quadrilateral with opposite sides equal and 4 right angles is a:",options:["Rectangle","Trapezoid","Kite","Rhombus"],correctAnswer:"Rectangle",explanation:"A rectangle has opposite sides equal and parallel with four 90° interior angles.",xp:20,diagram:{type:"rectangle",w:120,h:70,label:"Rectangle (L, W)"}},{id:"quad_4",topic:"quadrilaterals",difficulty:"easy",question:"A parallelogram with all 4 sides equal in length is called a:",options:["Rhombus","Rectangle","Trapezoid","Scalene quad"],correctAnswer:"Rhombus",explanation:"A rhombus is an equilateral parallelogram where all four sides have equal length.",xp:20},{id:"quad_5",topic:"quadrilaterals",difficulty:"easy",question:"A quadrilateral with exactly one pair of parallel sides is called a:",options:["Trapezoid (Trapezium)","Parallelogram","Kite","Rectangle"],correctAnswer:"Trapezoid (Trapezium)",explanation:"A trapezoid (or trapezium) is defined by having at least (or exactly) one pair of opposite parallel sides.",xp:20},{id:"quad_6",topic:"quadrilaterals",difficulty:"medium",question:"What is true about the diagonals of a rectangle?",options:["They are equal in length and bisect each other","They are perpendicular","They are unequal","They bisect the angles"],correctAnswer:"They are equal in length and bisect each other",explanation:"The diagonals of a rectangle are equal in length and cut each other into equal halves (bisect).",xp:25},{id:"quad_7",topic:"quadrilaterals",difficulty:"medium",question:"What is true about the diagonals of a rhombus?",options:["They bisect each other perpendicularly at 90°","They are always equal in length","They never intersect","They sum to 360°"],correctAnswer:"They bisect each other perpendicularly at 90°",explanation:"A key property of a rhombus is that its diagonals are perpendicular bisectors of each other.",xp:25},{id:"quad_8",topic:"quadrilaterals",difficulty:"medium",question:"If three angles of a quadrilateral are 90°, 85°, and 75°, what is the fourth angle?",options:["110°","100°","120°","115°"],correctAnswer:"110°",explanation:"Sum = 360°. Fourth angle = 360° - (90° + 85° + 75°) = 360° - 250° = 110°.",xp:25},{id:"quad_9",topic:"quadrilaterals",difficulty:"medium",question:"In a parallelogram, consecutive (adjacent) angles are always:",options:["Supplementary (sum to 180°)","Equal","Complementary (sum to 90°)","Sum to 360°"],correctAnswer:"Supplementary (sum to 180°)",explanation:"Because opposite sides are parallel, consecutive interior angles are co-interior and sum to 180°.",xp:25},{id:"quad_10",topic:"quadrilaterals",difficulty:"medium",question:"If one angle of a parallelogram is 65°, what are the measures of the other three angles?",options:["115°, 65°, 115°","65°, 65°, 65°","125°, 65°, 125°","90°, 90°, 115°"],correctAnswer:"115°, 65°, 115°",explanation:"Opposite angles are equal (65°). Adjacent angles are supplementary (180° - 65° = 115°).",xp:25},{id:"quad_11",topic:"quadrilaterals",difficulty:"medium",question:"What is the formula for the area of a trapezoid with parallel bases a and b, and height h?",options:["(1/2) × (a + b) × h","(a + b) × h","a × b × h","(1/2) × a × b"],correctAnswer:"(1/2) × (a + b) × h",explanation:"The area of a trapezoid is the average of the two parallel bases multiplied by height: Area = ((a + b) / 2) * h.",xp:25},{id:"quad_12",topic:"quadrilaterals",difficulty:"hard",question:"What is the formula for the area of a rhombus with diagonals d₁ and d₂?",options:["(1/2) × d₁ × d₂","d₁ × d₂","2 × (d₁ + d₂)","(d₁ + d₂)²"],correctAnswer:"(1/2) × d₁ × d₂",explanation:"Area of a rhombus = (1/2) * d₁ * d₂ because the diagonals split it into four congruent right-angled triangles.",xp:35},{id:"quad_13",topic:"quadrilaterals",difficulty:"hard",question:"A kite has diagonals measuring 10 cm and 16 cm. What is its area?",options:["80 cm²","160 cm²","40 cm²","52 cm²"],correctAnswer:"80 cm²",explanation:"For a kite with perpendicular diagonals: Area = (1/2) * d₁ * d₂ = (1/2) * 10 * 16 = 80 cm².",xp:35},{id:"quad_14",topic:"quadrilaterals",difficulty:"hard",question:"The angles of a quadrilateral are in the ratio 3 : 4 : 5 : 6. What is the smallest angle?",options:["60°","80°","100°","45°"],correctAnswer:"60°",explanation:"3x + 4x + 5x + 6x = 18x = 360° => x = 20°. Smallest angle = 3 * 20° = 60°.",xp:35},{id:"quad_15",topic:"quadrilaterals",difficulty:"hard",question:"In an isosceles trapezoid, which of the following is always true?",options:["The non-parallel sides are equal","All four sides are equal","The diagonals are perpendicular","The opposite angles are equal"],correctAnswer:"The non-parallel sides are equal",explanation:"An isosceles trapezoid has congruent non-parallel legs, equal base angles, and congruent diagonals.",xp:35},{id:"quad_16",topic:"quadrilaterals",difficulty:"expert",question:"A cyclic quadrilateral is a four-sided shape whose vertices all lie on a circle. What is the sum of its opposite angles?",options:["180°","360°","90°","270°"],correctAnswer:"180°",explanation:"Opposite angles of any cyclic quadrilateral inscribed in a circle are always supplementary (sum to 180°).",xp:45},{id:"quad_17",topic:"quadrilaterals",difficulty:"expert",question:"If the diagonals of a parallelogram are equal and perpendicular, the quadrilateral must be a:",options:["Square","Rectangle","Rhombus","Kite"],correctAnswer:"Square",explanation:"Equal diagonals make it a rectangle; perpendicular diagonals make it a rhombus; combining both makes it a square.",xp:45},{id:"quad_18",topic:"quadrilaterals",difficulty:"expert",question:"If a rhombus has side length 10 cm and one diagonal of 12 cm, what is the length of the other diagonal?",options:["16 cm","14 cm","8 cm","18 cm"],correctAnswer:"16 cm",explanation:"Diagonals bisect at 90°. Half diagonal = 6. By Pythagoras: 6² + (d₂/2)² = 10² => 36 + (d₂/2)² = 100 => (d₂/2)² = 64 => d₂/2 = 8 => d₂ = 16 cm.",xp:45},{id:"quad_19",topic:"quadrilaterals",difficulty:"expert",question:"What is the sum of the exterior angles of any convex quadrilateral?",options:["360°","180°","720°","540°"],correctAnswer:"360°",explanation:"The sum of exterior angles of any convex polygon (including quadrilaterals) taken one at each vertex is always 360°.",xp:45},{id:"quad_20",topic:"quadrilaterals",difficulty:"expert",question:"Ptolemy's Theorem for a cyclic quadrilateral with sides a, b, c, d and diagonals p, q states that:",options:["p × q = a × c + b × d","p + q = a + b + c + d","p² + q² = a² + b² + c² + d²","p / q = (a + c) / (b + d)"],correctAnswer:"p × q = a × c + b × d",explanation:"Ptolemy's theorem states that the product of the diagonals of a cyclic quadrilateral equals the sum of the products of opposite sides.",xp:45}],z0=[{id:"circ_1",topic:"circles",difficulty:"easy",question:"What is the relationship between the radius (r) and diameter (d) of a circle?",options:["d = 2r","d = r / 2","d = r²","d = πr"],correctAnswer:"d = 2r",explanation:"The diameter passes through the center and connects two opposite points on the boundary, so d = 2 × r.",xp:20,diagram:{type:"circle",r:50,label:"d = 2r"}},{id:"circ_2",topic:"circles",difficulty:"easy",question:"What is the mathematical constant π (pi) approximately equal to?",options:["3.14159","2.71828","1.61803","1.41421"],correctAnswer:"3.14159",explanation:"Pi (π) is the ratio of circumference to diameter, approximately 3.14159 or 22/7.",xp:20},{id:"circ_3",topic:"circles",difficulty:"easy",question:"What is the formula for the circumference (perimeter) of a circle with radius r?",options:["2πr","πr²","4πr","πd²"],correctAnswer:"2πr",explanation:"Circumference = 2 × π × r (or C = π × d).",xp:20},{id:"circ_4",topic:"circles",difficulty:"easy",question:"What is the formula for the area of a circle with radius r?",options:["πr²","2πr","4πr²","(1/2)πr"],correctAnswer:"πr²",explanation:"The area enclosed by a circle is given by Area = π × r².",xp:20},{id:"circ_5",topic:"circles",difficulty:"easy",question:"A straight line segment connecting any two points on a circle is called a:",options:["Chord","Tangent","Secant","Radius"],correctAnswer:"Chord",explanation:"A chord is a straight line segment whose endpoints both lie on the circular boundary.",xp:20},{id:"circ_6",topic:"circles",difficulty:"medium",question:"What is the longest possible chord in any circle?",options:["Diameter","Radius","Tangent","Arc"],correctAnswer:"Diameter",explanation:"The diameter is the longest chord because it passes directly through the circle's center.",xp:25},{id:"circ_7",topic:"circles",difficulty:"medium",question:"If a circle has a radius of 7 cm, what is its circumference? (Take π = 22/7)",options:["44 cm","22 cm","154 cm","88 cm"],correctAnswer:"44 cm",explanation:"Circumference = 2 × π × r = 2 × (22/7) × 7 = 44 cm.",xp:25},{id:"circ_8",topic:"circles",difficulty:"medium",question:"If a circle has a radius of 7 cm, what is its area? (Take π = 22/7)",options:["154 cm²","44 cm²","308 cm²","77 cm²"],correctAnswer:"154 cm²",explanation:"Area = π × r² = (22/7) × 7² = (22/7) × 49 = 154 cm².",xp:25},{id:"circ_9",topic:"circles",difficulty:"medium",question:"A line that touches a circle at exactly one point without intersecting is a:",options:["Tangent","Secant","Chord","Diameter"],correctAnswer:"Tangent",explanation:"A tangent touches the circle at exactly one point (point of contact) and is perpendicular to the radius at that point.",xp:25},{id:"circ_10",topic:"circles",difficulty:"medium",question:"What is the angle between a tangent to a circle and the radius drawn to the point of contact?",options:["90°","45°","180°","60°"],correctAnswer:"90°",explanation:"The radius meeting a tangent line at the point of contact is always perpendicular (90°).",xp:25},{id:"circ_11",topic:"circles",difficulty:"medium",question:"A portion of the circumference of a circle between two points is called an:",options:["Arc","Sector","Segment","Chord"],correctAnswer:"Arc",explanation:"An arc is a curved portion or continuous piece of a circle's circumference.",xp:25},{id:"circ_12",topic:"circles",difficulty:"hard",question:"What is the region bounded by two radii and the intercepted arc called?",options:["Sector","Segment","Chord","Annulus"],correctAnswer:"Sector",explanation:'A sector is like a "pie slice" bounded by two radii from the center and an arc.',xp:35},{id:"circ_13",topic:"circles",difficulty:"hard",question:"What is the formula for the area of a sector with central angle θ (in degrees) and radius r?",options:["(θ / 360) × πr²","(θ / 180) × πr²","(θ / 360) × 2πr","θ × r²"],correctAnswer:"(θ / 360) × πr²",explanation:"A sector's area is proportional to its central angle: Area = (θ / 360°) × πr².",xp:35},{id:"circ_14",topic:"circles",difficulty:"hard",question:"What is the angle subtended by a semicircle at any point on the circle?",options:["90°","180°","60°","45°"],correctAnswer:"90°",explanation:"By Thales' theorem, any angle inscribed in a semicircle is always a right angle (90°).",xp:35},{id:"circ_15",topic:"circles",difficulty:"hard",question:"If the area of a circle is 36π cm², what is its circumference in terms of π?",options:["12π cm","6π cm","18π cm","24π cm"],correctAnswer:"12π cm",explanation:"πr² = 36π => r² = 36 => r = 6 cm. Circumference = 2πr = 2π(6) = 12π cm.",xp:35},{id:"circ_16",topic:"circles",difficulty:"expert",question:"The angle subtended by an arc at the center is ____ the angle subtended by it at any point on the circumference.",options:["Double","Equal to","Half","Triple"],correctAnswer:"Double",explanation:"The Inscribed Angle Theorem proves that the central angle is twice the measure of the inscribed angle subtending the same arc.",xp:45},{id:"circ_17",topic:"circles",difficulty:"expert",question:"If two circles share the same center point but have different radii, they are called:",options:["Concentric circles","Congruent circles","Orthogonal circles","Eccentric circles"],correctAnswer:"Concentric circles",explanation:"Concentric circles are circles of different sizes with a common center.",xp:45},{id:"circ_18",topic:"circles",difficulty:"expert",question:"What is the length of an arc with central angle 60° in a circle of radius 6 cm?",options:["2π cm","6π cm","π cm","4π cm"],correctAnswer:"2π cm",explanation:"Arc length = (θ / 360) × 2πr = (60 / 360) × 2π(6) = (1/6) × 12π = 2π cm (~6.28 cm).",xp:45},{id:"circ_19",topic:"circles",difficulty:"expert",question:"From an external point P, how many tangents can be drawn to a circle?",options:["Exactly 2","Exactly 1","Infinite","0"],correctAnswer:"Exactly 2",explanation:"From any point outside a circle, exactly two tangents can be drawn, and their lengths from P to the points of tangency are equal.",xp:45},{id:"circ_20",topic:"circles",difficulty:"expert",question:"What is the area of an annulus (ring) with outer radius R = 10 cm and inner radius r = 6 cm?",options:["64π cm²","36π cm²","100π cm²","16π cm²"],correctAnswer:"64π cm²",explanation:"Area of annulus = π(R² - r²) = π(100 - 36) = 64π cm².",xp:45}],V0=[{id:"perim_1",topic:"perimeter",difficulty:"easy",question:"Perimeter is defined as the total distance:",options:["Around the outside edge of a 2D shape","Enclosed inside a shape","Across the center","Of three dimensions"],correctAnswer:"Around the outside edge of a 2D shape",explanation:"Perimeter is the one-dimensional total path length that surrounds a two-dimensional closed shape.",xp:20},{id:"perim_2",topic:"perimeter",difficulty:"easy",question:"What is the formula for the perimeter of a rectangle with length L and width W?",options:["2 × (L + W)","L × W","4 × L × W","L + W"],correctAnswer:"2 × (L + W)",explanation:"A rectangle has two pairs of equal sides: Perimeter = L + W + L + W = 2(L + W).",xp:20},{id:"perim_3",topic:"perimeter",difficulty:"easy",question:"What is the perimeter of a square with side length 8 cm?",options:["32 cm","64 cm","16 cm","24 cm"],correctAnswer:"32 cm",explanation:"Perimeter of a square = 4 × side = 4 × 8 = 32 cm.",xp:20},{id:"perim_4",topic:"perimeter",difficulty:"easy",question:"What is the perimeter of an equilateral triangle with side length 9 cm?",options:["27 cm","18 cm","81 cm","36 cm"],correctAnswer:"27 cm",explanation:"Perimeter = 3 × side = 3 × 9 = 27 cm.",xp:20},{id:"perim_5",topic:"perimeter",difficulty:"easy",question:"A regular pentagon has 5 equal sides of 7 cm each. What is its perimeter?",options:["35 cm","42 cm","49 cm","28 cm"],correctAnswer:"35 cm",explanation:"Perimeter = 5 × 7 cm = 35 cm.",xp:20},{id:"perim_6",topic:"perimeter",difficulty:"medium",question:"A rectangle has a length of 14 cm and a perimeter of 48 cm. What is its width?",options:["10 cm","20 cm","12 cm","14 cm"],correctAnswer:"10 cm",explanation:"2(L + W) = 48 => L + W = 24 => 14 + W = 24 => W = 10 cm.",xp:25},{id:"perim_7",topic:"perimeter",difficulty:"medium",question:"A regular hexagon has a perimeter of 54 cm. What is the length of each side?",options:["9 cm","8 cm","6 cm","12 cm"],correctAnswer:"9 cm",explanation:"A regular hexagon has 6 equal sides. Side = 54 / 6 = 9 cm.",xp:25},{id:"perim_8",topic:"perimeter",difficulty:"medium",question:"What is the perimeter of a right triangle with legs 6 cm and 8 cm?",options:["24 cm","48 cm","20 cm","28 cm"],correctAnswer:"24 cm",explanation:"Hypotenuse c = √(6² + 8²) = √(36 + 64) = 10 cm. Perimeter = 6 + 8 + 10 = 24 cm.",xp:25},{id:"perim_9",topic:"perimeter",difficulty:"medium",question:"What is the perimeter of a regular octagon with side length 4.5 cm?",options:["36 cm","32 cm","40.5 cm","45 cm"],correctAnswer:"36 cm",explanation:"An octagon has 8 sides: 8 × 4.5 = 36 cm.",xp:25},{id:"perim_10",topic:"perimeter",difficulty:"medium",question:"What is the perimeter of a semicircle with radius 7 cm (including the straight diameter base)? (Take π = 22/7)",options:["36 cm","22 cm","44 cm","29 cm"],correctAnswer:"36 cm",explanation:"Curved arc = πr = (22/7) × 7 = 22 cm. Diameter = 2r = 14 cm. Total perimeter = 22 + 14 = 36 cm.",xp:25},{id:"perim_11",topic:"perimeter",difficulty:"medium",question:"A rhombus has a perimeter of 60 cm. What is the length of one side?",options:["15 cm","30 cm","20 cm","10 cm"],correctAnswer:"15 cm",explanation:"All 4 sides of a rhombus are equal: Side = 60 / 4 = 15 cm.",xp:25},{id:"perim_12",topic:"perimeter",difficulty:"hard",question:"An isosceles triangle has a perimeter of 32 cm and a base of 12 cm. What is the length of each equal leg?",options:["10 cm","8 cm","12 cm","14 cm"],correctAnswer:"10 cm",explanation:"Remaining perimeter = 32 - 12 = 20 cm. Equal sides = 20 / 2 = 10 cm each.",xp:35},{id:"perim_13",topic:"perimeter",difficulty:"hard",question:"A rectangular garden is 25 m long and 15 m wide. If fencing costs $8 per meter, what is the total cost to enclose it?",options:["$640","$320","$3,000","$800"],correctAnswer:"$640",explanation:"Perimeter = 2 × (25 + 15) = 2 × 40 = 80 m. Cost = 80 m × $8/m = $640.",xp:35},{id:"perim_14",topic:"perimeter",difficulty:"hard",question:"A square has an area of 144 cm². What is its perimeter?",options:["48 cm","36 cm","24 cm","72 cm"],correctAnswer:"48 cm",explanation:"Side = √144 = 12 cm. Perimeter = 4 × 12 = 48 cm.",xp:35},{id:"perim_15",topic:"perimeter",difficulty:"hard",question:"If the length of a rectangle is tripled and its width is doubled, what happens to its perimeter?",options:["It depends on the original dimensions","It increases 5 times","It increases 6 times","It quadruples"],correctAnswer:"It depends on the original dimensions",explanation:"Original P = 2(L + W). New P = 2(3L + 2W) = 6L + 4W, which depends on the ratio of L to W.",xp:35},{id:"perim_16",topic:"perimeter",difficulty:"expert",question:"A wire in the shape of a circle of radius 14 cm is bent into a square. What is the side length of the square? (π = 22/7)",options:["22 cm","44 cm","11 cm","28 cm"],correctAnswer:"22 cm",explanation:"Wire length = circumference = 2 × (22/7) × 14 = 88 cm. Square side = 88 / 4 = 22 cm.",xp:45},{id:"perim_17",topic:"perimeter",difficulty:"expert",question:"A running track consists of a rectangle 100 m by 64 m with semicircular ends on the two shorter sides. What is the total inside perimeter of the track? (Take π ≈ 3.1416)",options:["401.06 m","328 m","500 m","452.16 m"],correctAnswer:"401.06 m",explanation:"Straight sides = 2 × 100 = 200 m. Two semicircles = full circle with diameter 64 m => C = π × 64 ≈ 201.06 m. Total = 200 + 201.06 = 401.06 m.",xp:45},{id:"perim_18",topic:"perimeter",difficulty:"expert",question:"Two identical squares of perimeter 24 cm each are joined side-by-side to form a rectangle. What is the perimeter of this new rectangle?",options:["36 cm","48 cm","30 cm","42 cm"],correctAnswer:"36 cm",explanation:"Square side = 24 / 4 = 6 cm. New rectangle is 12 cm by 6 cm. Perimeter = 2 × (12 + 6) = 36 cm.",xp:45},{id:"perim_19",topic:"perimeter",difficulty:"expert",question:"An equilateral triangle and a square have the same perimeter. If the side of the triangle is 12 cm, what is the side of the square?",options:["9 cm","8 cm","6 cm","10 cm"],correctAnswer:"9 cm",explanation:"Perimeter = 3 × 12 = 36 cm. Square side = 36 / 4 = 9 cm.",xp:45},{id:"perim_20",topic:"perimeter",difficulty:"expert",question:"What is the perimeter of a regular decagon (10-sided polygon) with side length 3.8 cm?",options:["38 cm","36 cm","40 cm","19 cm"],correctAnswer:"38 cm",explanation:"Perimeter = 10 × 3.8 = 38 cm.",xp:45}],G0=[{id:"area_1",topic:"area",difficulty:"easy",question:"What is the formula for the area of a rectangle with length L and width W?",options:["L × W","2(L + W)","L² + W²","(1/2) L × W"],correctAnswer:"L × W",explanation:"The area of a rectangle is the product of its length and width (A = L × W).",xp:20},{id:"area_2",topic:"area",difficulty:"easy",question:"What is the area of a square with side length 9 cm?",options:["81 cm²","36 cm²","18 cm²","72 cm²"],correctAnswer:"81 cm²",explanation:"Area of square = side² = 9² = 81 cm².",xp:20},{id:"area_3",topic:"area",difficulty:"easy",question:"What is the formula for the area of a parallelogram with base b and vertical height h?",options:["b × h","(1/2) × b × h","2(b + h)","b² × h"],correctAnswer:"b × h",explanation:"The area of a parallelogram is simply base multiplied by perpendicular height (A = b × h).",xp:20},{id:"area_4",topic:"area",difficulty:"easy",question:"What is the area of a triangle with base 10 cm and height 6 cm?",options:["30 cm²","60 cm²","16 cm²","20 cm²"],correctAnswer:"30 cm²",explanation:"Area = (1/2) × 10 × 6 = 30 cm².",xp:20},{id:"area_5",topic:"area",difficulty:"easy",question:"What is the standard unit of measurement for area in the metric system?",options:["Square meters (m²)","Cubic meters (m³)","Meters (m)","Liters (L)"],correctAnswer:"Square meters (m²)",explanation:"Area measures two-dimensional surface space and is always expressed in square units such as m², cm², etc.",xp:20},{id:"area_6",topic:"area",difficulty:"medium",question:"A trapezoid has parallel bases of 12 cm and 18 cm, and height 8 cm. What is its area?",options:["120 cm²","240 cm²","60 cm²","144 cm²"],correctAnswer:"120 cm²",explanation:"Area = ((a + b) / 2) × h = ((12 + 18) / 2) × 8 = 15 × 8 = 120 cm².",xp:25},{id:"area_7",topic:"area",difficulty:"medium",question:"A rhombus has diagonals of length 14 cm and 20 cm. What is its area?",options:["140 cm²","280 cm²","70 cm²","68 cm²"],correctAnswer:"140 cm²",explanation:"Area = (1/2) × d₁ × d₂ = (1/2) × 14 × 20 = 140 cm².",xp:25},{id:"area_8",topic:"area",difficulty:"medium",question:"A rectangle has an area of 96 cm² and a width of 8 cm. What is its length?",options:["12 cm","10 cm","14 cm","16 cm"],correctAnswer:"12 cm",explanation:"Length = Area / Width = 96 / 8 = 12 cm.",xp:25},{id:"area_9",topic:"area",difficulty:"medium",question:"What is the area of a semicircle with radius 14 cm? (Take π = 22/7)",options:["308 cm²","616 cm²","154 cm²","44 cm²"],correctAnswer:"308 cm²",explanation:"Full circle area = πr² = (22/7) × 196 = 616 cm². Semicircle area = 616 / 2 = 308 cm².",xp:25},{id:"area_10",topic:"area",difficulty:"medium",question:"If the side length of a square is doubled, by what factor does its area increase?",options:["4 times","2 times","8 times","16 times"],correctAnswer:"4 times",explanation:"New Area = (2s)² = 4s², which is 4 times the original area.",xp:25},{id:"area_11",topic:"area",difficulty:"medium",question:"A parallelogram has a base of 15 cm and an area of 105 cm². What is its corresponding height?",options:["7 cm","6 cm","8 cm","9 cm"],correctAnswer:"7 cm",explanation:"Height = Area / Base = 105 / 15 = 7 cm.",xp:25},{id:"area_12",topic:"area",difficulty:"hard",question:"A circle of radius 7 cm is inscribed inside a square of side 14 cm. What is the area of the shaded region outside the circle? (π = 22/7)",options:["42 cm²","154 cm²","196 cm²","32 cm²"],correctAnswer:"42 cm²",explanation:"Area of square = 14² = 196 cm². Area of circle = (22/7) × 7² = 154 cm². Shaded region = 196 - 154 = 42 cm².",xp:35},{id:"area_13",topic:"area",difficulty:"hard",question:"What is the area of a regular hexagon with side length 6 cm?",options:["54√3 cm²","36√3 cm²","18√3 cm²","108 cm²"],correctAnswer:"54√3 cm²",explanation:"A regular hexagon comprises 6 equilateral triangles: Area = 6 × ((√3 / 4) × 6²) = 6 × 9√3 = 54√3 cm² (~93.53 cm²).",xp:35},{id:"area_14",topic:"area",difficulty:"hard",question:"The ratio of the areas of two similar triangles is 49 : 81. What is the ratio of their corresponding side lengths?",options:["7 : 9","49 : 81","√7 : 9","14 : 18"],correctAnswer:"7 : 9",explanation:"Ratio of areas = (Ratio of sides)². Thus, ratio of sides = √(49/81) = 7/9.",xp:35},{id:"area_15",topic:"area",difficulty:"hard",question:"What is the area of a right-angled isosceles triangle with hypotenuse 10 cm?",options:["25 cm²","50 cm²","12.5 cm²","100 cm²"],correctAnswer:"25 cm²",explanation:"For right isosceles triangle: a² + a² = c² => 2a² = 100 => a² = 50. Area = (1/2) a² = (1/2) × 50 = 25 cm².",xp:35},{id:"area_16",topic:"area",difficulty:"expert",question:"A pathway 2 meters wide runs around the outside of a rectangular lawn 20 m by 15 m. What is the area of the path alone?",options:["156 m²","300 m²","456 m²","140 m²"],correctAnswer:"156 m²",explanation:"Lawn area = 20 × 15 = 300 m². Outer rectangle = (20+4) × (15+4) = 24 × 19 = 456 m². Path area = 456 - 300 = 156 m².",xp:45},{id:"area_17",topic:"area",difficulty:"expert",question:"What is the area of an equilateral triangle inscribed inside a circle of radius R?",options:["(3√3 / 4) R²","(√3 / 4) R²","3√3 R²","(3 / 2) R²"],correctAnswer:"(3√3 / 4) R²",explanation:"Side length s = R√3. Area = (√3 / 4) s² = (√3 / 4) (3R²) = (3√3 / 4) R².",xp:45},{id:"area_18",topic:"area",difficulty:"expert",question:"Find the area of a sector with radius 12 cm and arc length 10 cm.",options:["60 cm²","120 cm²","30 cm²","72 cm²"],correctAnswer:"60 cm²",explanation:"Area of sector = (1/2) × arc length × radius = (1/2) × 10 × 12 = 60 cm².",xp:45},{id:"area_19",topic:"area",difficulty:"expert",question:"The diagonals of a rhombus are in the ratio 3 : 4 and its area is 216 cm². What is the length of the longer diagonal?",options:["24 cm","18 cm","12 cm","36 cm"],correctAnswer:"24 cm",explanation:"Area = (1/2)(3x)(4x) = 6x² = 216 => x² = 36 => x = 6. Longer diagonal = 4 × 6 = 24 cm.",xp:45},{id:"area_20",topic:"area",difficulty:"expert",question:"If the radius of a circle increases by 50%, by what percentage does its area increase?",options:["125%","50%","100%","225%"],correctAnswer:"125%",explanation:"New Area = π(1.5r)² = 2.25 πr² = 225% of original area. Increase = 225% - 100% = 125%.",xp:45}],H0=[{id:"sa_1",topic:"surface_area",difficulty:"easy",question:"What is the formula for the total surface area of a cube with side length a?",options:["6a²","a³","4a²","12a"],correctAnswer:"6a²",explanation:"A cube has 6 identical square faces, each having area a², so Total Surface Area = 6a².",xp:20},{id:"sa_2",topic:"surface_area",difficulty:"easy",question:"What is the total surface area of a cube with side length 5 cm?",options:["150 cm²","125 cm²","100 cm²","75 cm²"],correctAnswer:"150 cm²",explanation:"TSA = 6 × (5)² = 6 × 25 = 150 cm².",xp:20},{id:"sa_3",topic:"surface_area",difficulty:"easy",question:"What is the formula for the total surface area of a rectangular cuboid with dimensions l, w, and h?",options:["2(lw + wh + hl)","l × w × h","4(l + w + h)","lw + wh + hl"],correctAnswer:"2(lw + wh + hl)",explanation:"A cuboid has 3 pairs of identical opposite faces: TSA = 2(lw + wh + hl).",xp:20},{id:"sa_4",topic:"surface_area",difficulty:"easy",question:"What is the curved (lateral) surface area formula for a cylinder with radius r and height h?",options:["2πrh","πr²h","2πr(r + h)","4πr²"],correctAnswer:"2πrh",explanation:"The curved surface unfolds into a rectangle of length 2πr and width h, so CSA = 2πrh.",xp:20},{id:"sa_5",topic:"surface_area",difficulty:"easy",question:"What is the formula for the total surface area of a sphere with radius r?",options:["4πr²","(4/3)πr³","2πr²","3πr²"],correctAnswer:"4πr²",explanation:"Archimedes proved that the surface area of a sphere is exactly equal to 4 times the area of its great circle: TSA = 4πr².",xp:20},{id:"sa_6",topic:"surface_area",difficulty:"medium",question:"What is the total surface area of a cuboid measuring 4 cm × 3 cm × 2 cm?",options:["52 cm²","24 cm²","48 cm²","26 cm²"],correctAnswer:"52 cm²",explanation:"TSA = 2(4×3 + 3×2 + 2×4) = 2(12 + 6 + 8) = 2(26) = 52 cm².",xp:25},{id:"sa_7",topic:"surface_area",difficulty:"medium",question:"What is the total surface area of a closed cylinder with radius 7 cm and height 10 cm? (Take π = 22/7)",options:["748 cm²","440 cm²","308 cm²","880 cm²"],correctAnswer:"748 cm²",explanation:"TSA = 2πr(r + h) = 2 × (22/7) × 7 × (7 + 10) = 44 × 17 = 748 cm².",xp:25},{id:"sa_8",topic:"surface_area",difficulty:"medium",question:"What is the curved surface area of a cone with radius 7 cm and slant height 10 cm? (π = 22/7)",options:["220 cm²","440 cm²","154 cm²","374 cm²"],correctAnswer:"220 cm²",explanation:"CSA of a cone = πrl = (22/7) × 7 × 10 = 220 cm².",xp:25},{id:"sa_9",topic:"surface_area",difficulty:"medium",question:"What is the surface area of a sphere with radius 7 cm? (Take π = 22/7)",options:["616 cm²","154 cm²","308 cm²","1232 cm²"],correctAnswer:"616 cm²",explanation:"Surface Area = 4πr² = 4 × (22/7) × 49 = 4 × 154 = 616 cm².",xp:25},{id:"sa_10",topic:"surface_area",difficulty:"medium",question:"What is the total surface area of a solid hemisphere with radius r?",options:["3πr²","2πr²","4πr²","(2/3)πr³"],correctAnswer:"3πr²",explanation:"A solid hemisphere has a curved surface of 2πr² plus a circular flat base of πr², giving 2πr² + πr² = 3πr².",xp:25},{id:"sa_11",topic:"surface_area",difficulty:"medium",question:"What is the lateral surface area of a cube with edge length 6 cm?",options:["144 cm²","216 cm²","36 cm²","96 cm²"],correctAnswer:"144 cm²",explanation:"Lateral surface area consists of the 4 vertical side faces: LSA = 4a² = 4 × 36 = 144 cm².",xp:25},{id:"sa_12",topic:"surface_area",difficulty:"hard",question:"A cone has base radius 6 cm and perpendicular height 8 cm. What is its total surface area in terms of π?",options:["96π cm²","60π cm²","36π cm²","120π cm²"],correctAnswer:"96π cm²",explanation:"Slant height l = √(r² + h²) = √(6² + 8²) = 10 cm. TSA = πr(l + r) = π(6)(10 + 6) = 96π cm².",xp:35},{id:"sa_13",topic:"surface_area",difficulty:"hard",question:"If the total surface area of a cube is 294 cm², what is the length of one edge?",options:["7 cm","6 cm","8 cm","9 cm"],correctAnswer:"7 cm",explanation:"6a² = 294 => a² = 49 => a = 7 cm.",xp:35},{id:"sa_14",topic:"surface_area",difficulty:"hard",question:"What is the lateral surface area (area of 4 walls) of a room of length 8 m, width 6 m, and height 3 m?",options:["84 m²","48 m²","96 m²","144 m²"],correctAnswer:"84 m²",explanation:"Area of 4 walls = 2(l + w) × h = 2(8 + 6) × 3 = 2(14) × 3 = 84 m².",xp:35},{id:"sa_15",topic:"surface_area",difficulty:"hard",question:"If the radius of a sphere is tripled, by what factor does its surface area increase?",options:["9 times","3 times","6 times","27 times"],correctAnswer:"9 times",explanation:"Surface area scales with the square of linear dimensions: (3)² = 9 times.",xp:35},{id:"sa_16",topic:"surface_area",difficulty:"expert",question:"Two cubes each of volume 64 cm³ are joined end to end. What is the surface area of the resulting cuboid?",options:["160 cm²","192 cm²","128 cm²","144 cm²"],correctAnswer:"160 cm²",explanation:"Cube edge = ∛64 = 4 cm. Cuboid dimensions: 8 cm × 4 cm × 4 cm. TSA = 2(8×4 + 4×4 + 4×8) = 2(32 + 16 + 32) = 160 cm².",xp:45},{id:"sa_17",topic:"surface_area",difficulty:"expert",question:"What is the total surface area of a square pyramid with base side 10 cm and slant height 13 cm?",options:["360 cm²","260 cm²","100 cm²","460 cm²"],correctAnswer:"360 cm²",explanation:"Base area = 10² = 100 cm². Four triangular faces = 4 × ((1/2) × 10 × 13) = 260 cm². Total = 100 + 260 = 360 cm².",xp:45},{id:"sa_18",topic:"surface_area",difficulty:"expert",question:"A hollow pipe of length 20 cm has an outer radius of 5 cm and inner radius of 4 cm. What is its total surface area? (Take π ≈ 3.14)",options:["1186.92 cm²","1130.4 cm²","565.2 cm²","1256 cm²"],correctAnswer:"1186.92 cm²",explanation:"Outer CSA = 2π(5)(20) = 200π. Inner CSA = 2π(4)(20) = 160π. Two ring bases = 2 × π(5² - 4²) = 18π. Total = 378π ≈ 1186.92 cm².",xp:45},{id:"sa_19",topic:"surface_area",difficulty:"expert",question:"What is the surface area of a right triangular prism with base triangle legs 3 cm and 4 cm (hypotenuse 5 cm) and prism length 10 cm?",options:["132 cm²","120 cm²","144 cm²","96 cm²"],correctAnswer:"132 cm²",explanation:"Two base triangles = 2 × ((1/2) × 3 × 4) = 12 cm². Three rectangular faces = (3 + 4 + 5) × 10 = 120 cm². Total = 132 cm².",xp:45},{id:"sa_20",topic:"surface_area",difficulty:"expert",question:"If the surface area of a sphere is equal to the curved surface area of a cylinder of height 8 cm and radius 4 cm, what is the radius of the sphere?",options:["4 cm","2 cm","8 cm","√8 cm"],correctAnswer:"4 cm",explanation:"Cylinder CSA = 2π(4)(8) = 64π. Sphere Area: 4πR² = 64π => R² = 16 => R = 4 cm.",xp:45}],W0=[{id:"vol_1",topic:"volume",difficulty:"easy",question:"What is the formula for the volume of a cube with side length a?",options:["a³","6a²","3a","a²"],correctAnswer:"a³",explanation:"The volume of a cube is the cube of its side length (V = a × a × a = a³).",xp:20},{id:"vol_2",topic:"volume",difficulty:"easy",question:"What is the volume of a cube with edge length 4 cm?",options:["64 cm³","16 cm³","96 cm³","48 cm³"],correctAnswer:"64 cm³",explanation:"Volume = 4³ = 64 cm³.",xp:20},{id:"vol_3",topic:"volume",difficulty:"easy",question:"What is the formula for the volume of a rectangular cuboid with length l, width w, and height h?",options:["l × w × h","2(lw + wh + hl)","l + w + h","(1/3) l × w × h"],correctAnswer:"l × w × h",explanation:"Volume of cuboid = length × width × height.",xp:20},{id:"vol_4",topic:"volume",difficulty:"easy",question:"What is the formula for the volume of a cylinder with radius r and height h?",options:["πr²h","2πrh","(1/3)πr²h","(4/3)πr³"],correctAnswer:"πr²h",explanation:"Volume of cylinder = Base area × height = πr² × h.",xp:20},{id:"vol_5",topic:"volume",difficulty:"easy",question:"What is the formula for the volume of a cone with radius r and height h?",options:["(1/3)πr²h","πr²h","(4/3)πr³","πrl"],correctAnswer:"(1/3)πr²h",explanation:"The volume of a cone is exactly one-third that of a cylinder with the same base and height.",xp:20},{id:"vol_6",topic:"volume",difficulty:"medium",question:"What is the volume of a cuboid measuring 8 cm by 5 cm by 3 cm?",options:["120 cm³","80 cm³","158 cm³","240 cm³"],correctAnswer:"120 cm³",explanation:"Volume = 8 × 5 × 3 = 120 cm³.",xp:25},{id:"vol_7",topic:"volume",difficulty:"medium",question:"What is the volume of a cylinder with radius 7 cm and height 10 cm? (Take π = 22/7)",options:["1540 cm³","770 cm³","440 cm³","3080 cm³"],correctAnswer:"1540 cm³",explanation:"Volume = πr²h = (22/7) × 7² × 10 = (22/7) × 49 × 10 = 154 × 10 = 1540 cm³.",xp:25},{id:"vol_8",topic:"volume",difficulty:"medium",question:"What is the volume of a sphere with radius r?",options:["(4/3)πr³","4πr²","(2/3)πr³","πr³"],correctAnswer:"(4/3)πr³",explanation:"Volume of a sphere = (4/3)πr³.",xp:25},{id:"vol_9",topic:"volume",difficulty:"medium",question:"What is the volume of a cone with radius 6 cm and height 7 cm? (Take π = 22/7)",options:["264 cm³","792 cm³","132 cm³","528 cm³"],correctAnswer:"264 cm³",explanation:"V = (1/3)πr²h = (1/3) × (22/7) × 36 × 7 = (1/3) × 22 × 36 = 22 × 12 = 264 cm³.",xp:25},{id:"vol_10",topic:"volume",difficulty:"medium",question:"How many liters are equal to 1 cubic meter (1 m³)?",options:["1,000 Liters","100 Liters","10 Liters","10,000 Liters"],correctAnswer:"1,000 Liters",explanation:"1 m³ = 1000 dm³ = 1,000 Liters.",xp:25},{id:"vol_11",topic:"volume",difficulty:"medium",question:"What is the volume of a hemisphere with radius 3 cm in terms of π?",options:["18π cm³","36π cm³","9π cm³","27π cm³"],correctAnswer:"18π cm³",explanation:"Hemisphere volume = (2/3)πr³ = (2/3)π(27) = 18π cm³.",xp:25},{id:"vol_12",topic:"volume",difficulty:"hard",question:"If the side length of a cube is doubled, by what factor does its volume increase?",options:["8 times","4 times","2 times","16 times"],correctAnswer:"8 times",explanation:"New Volume = (2a)³ = 8a³, which is 8 times the original volume.",xp:35},{id:"vol_13",topic:"volume",difficulty:"hard",question:"A right square pyramid has base side 6 cm and height 10 cm. What is its volume?",options:["120 cm³","360 cm³","60 cm³","180 cm³"],correctAnswer:"120 cm³",explanation:"Volume of pyramid = (1/3) × Base Area × Height = (1/3) × (6 × 6) × 10 = (1/3) × 36 × 10 = 120 cm³.",xp:35},{id:"vol_14",topic:"volume",difficulty:"hard",question:"A cylindrical water tank has diameter 4 m and height 7 m. What is its capacity in liters? (π = 22/7)",options:["88,000 Liters","44,000 Liters","176,000 Liters","22,000 Liters"],correctAnswer:"88,000 Liters",explanation:"Radius = 2 m. Volume = (22/7) × 2² × 7 = 88 m³ = 88,000 Liters.",xp:35},{id:"vol_15",topic:"volume",difficulty:"hard",question:"Three solid metal cubes with sides 3 cm, 4 cm, and 5 cm are melted to form a single new cube. What is the side length of the new cube?",options:["6 cm","7 cm","8 cm","5.5 cm"],correctAnswer:"6 cm",explanation:"Total volume = 3³ + 4³ + 5³ = 27 + 64 + 125 = 216 cm³. New side = ∛216 = 6 cm.",xp:35},{id:"vol_16",topic:"volume",difficulty:"expert",question:"What is the volume of a triangular prism with equilateral triangle base of side 4 cm and prism height 10 cm?",options:["40√3 cm³","20√3 cm³","80√3 cm³","60 cm³"],correctAnswer:"40√3 cm³",explanation:"Base area = (√3 / 4) × 4² = 4√3 cm². Volume = Base area × height = 4√3 × 10 = 40√3 cm³ (~69.28 cm³).",xp:45},{id:"vol_17",topic:"volume",difficulty:"expert",question:"A solid metal sphere of radius 6 cm is melted and recast into smaller spheres of radius 2 cm each. How many small spheres are formed?",options:["27","9","18","3"],correctAnswer:"27",explanation:"Number of spheres = (R / r)³ = (6 / 2)³ = 3³ = 27.",xp:45},{id:"vol_18",topic:"volume",difficulty:"expert",question:"A cone and a cylinder have the same radius and the same height. What is the ratio of their volumes?",options:["1 : 3","3 : 1","1 : 2","1 : 4"],correctAnswer:"1 : 3",explanation:"Volume of cone is (1/3)πr²h, volume of cylinder is πr²h. Ratio = 1 : 3.",xp:45},{id:"vol_19",topic:"volume",difficulty:"expert",question:"What is the volume of a regular octahedron with edge length a?",options:["(√2 / 3) a³","(√3 / 3) a³","(1 / 3) a³","√2 a³"],correctAnswer:"(√2 / 3) a³",explanation:"An octahedron consists of two square pyramids of base side a and height a/√2: Volume = 2 × ((1/3) a² (a/√2)) = (√2 / 3) a³.",xp:45},{id:"vol_20",topic:"volume",difficulty:"expert",question:"If the radius of a cylinder is doubled and its height is halved, its volume will:",options:["Double","Remain unchanged","Halve","Quadruple"],correctAnswer:"Double",explanation:"New Volume = π (2r)² (h/2) = π (4r²) (h/2) = 2πr²h = 2 × original volume.",xp:45}],q0=[{id:"pyth_1",topic:"pythagoras",difficulty:"easy",question:"The Pythagorean theorem applies only to which type of triangle?",options:["Right-angled triangle","Equilateral triangle","Isosceles triangle","Scalene acute triangle"],correctAnswer:"Right-angled triangle",explanation:"The Pythagorean theorem (a² + b² = c²) strictly holds for all right-angled triangles.",xp:20,diagram:{type:"pythagoras",a:3,b:4,c:5}},{id:"pyth_2",topic:"pythagoras",difficulty:"easy",question:"What is the Pythagorean equation for a right triangle with legs a, b and hypotenuse c?",options:["a² + b² = c²","a + b = c","a² - b² = c²","ab = c²"],correctAnswer:"a² + b² = c²",explanation:"In any right triangle, the square of the hypotenuse is equal to the sum of the squares of the other two sides.",xp:20},{id:"pyth_3",topic:"pythagoras",difficulty:"easy",question:"In a right triangle with legs 3 cm and 4 cm, what is the length of the hypotenuse?",options:["5 cm","7 cm","6 cm","25 cm"],correctAnswer:"5 cm",explanation:"c = √(3² + 4²) = √(9 + 16) = √25 = 5 cm.",xp:20},{id:"pyth_4",topic:"pythagoras",difficulty:"easy",question:"Which of the following is a classic Pythagorean triple?",options:["3, 4, 5","2, 3, 4","4, 5, 6","1, 2, 3"],correctAnswer:"3, 4, 5",explanation:"3² + 4² = 9 + 16 = 25 = 5².",xp:20},{id:"pyth_5",topic:"pythagoras",difficulty:"easy",question:"In a right triangle, which side is always the longest side?",options:["Hypotenuse","Adjacent leg","Opposite leg","Altitude"],correctAnswer:"Hypotenuse",explanation:"The hypotenuse is opposite the 90° right angle, making it the longest side.",xp:20},{id:"pyth_6",topic:"pythagoras",difficulty:"medium",question:"In a right triangle with hypotenuse 13 cm and one leg 5 cm, what is the length of the other leg?",options:["12 cm","8 cm","10 cm","11 cm"],correctAnswer:"12 cm",explanation:"b = √(13² - 5²) = √(169 - 25) = √144 = 12 cm.",xp:25},{id:"pyth_7",topic:"pythagoras",difficulty:"medium",question:"Which of the following sets of numbers forms a Pythagorean triple?",options:["5, 12, 13","6, 8, 11","7, 9, 12","8, 10, 14"],correctAnswer:"5, 12, 13",explanation:"5² + 12² = 25 + 144 = 169 = 13².",xp:25},{id:"pyth_8",topic:"pythagoras",difficulty:"medium",question:"A 10-meter ladder leans against a vertical wall with its foot 6 meters away from the base. How high up the wall does it reach?",options:["8 meters","4 meters","7 meters","9 meters"],correctAnswer:"8 meters",explanation:"Height = √(10² - 6²) = √(100 - 36) = √64 = 8 meters.",xp:25},{id:"pyth_9",topic:"pythagoras",difficulty:"medium",question:"What is the length of the diagonal of a square with side length 7 cm?",options:["7√2 cm","14 cm","7√3 cm","49 cm"],correctAnswer:"7√2 cm",explanation:"Diagonal = √(s² + s²) = √(2s²) = s√2 = 7√2 cm (~9.9 cm).",xp:25},{id:"pyth_10",topic:"pythagoras",difficulty:"medium",question:"What is the length of the diagonal of a rectangle measuring 8 cm by 15 cm?",options:["17 cm","23 cm","19 cm","16 cm"],correctAnswer:"17 cm",explanation:"Diagonal = √(8² + 15²) = √(64 + 225) = √289 = 17 cm.",xp:25},{id:"pyth_11",topic:"pythagoras",difficulty:"medium",question:"If the sides of a triangle are 9, 40, and 41, is this a right triangle?",options:["Yes, because 9² + 40² = 41²","No, 9² + 40² ≠ 41²","Only if equilateral","Cannot be determined"],correctAnswer:"Yes, because 9² + 40² = 41²",explanation:"9² + 40² = 81 + 1600 = 1681 = 41². It satisfies the converse of the Pythagorean theorem.",xp:25},{id:"pyth_12",topic:"pythagoras",difficulty:"hard",question:"What is the length of the space diagonal of a cube with edge length 5 cm?",options:["5√3 cm","5√2 cm","10 cm","15 cm"],correctAnswer:"5√3 cm",explanation:"3D space diagonal = √(a² + a² + a²) = a√3 = 5√3 cm (~8.66 cm).",xp:35},{id:"pyth_13",topic:"pythagoras",difficulty:"hard",question:"What is the distance between the points (1, 2) and (4, 6) in the Cartesian plane?",options:["5 units","7 units","6 units","25 units"],correctAnswer:"5 units",explanation:"d = √((4-1)² + (6-2)²) = √(3² + 4²) = √(9 + 16) = √25 = 5 units.",xp:35},{id:"pyth_14",topic:"pythagoras",difficulty:"hard",question:"In an equilateral triangle of side 10 cm, what is its perpendicular altitude?",options:["5√3 cm","5√2 cm","5 cm","10√3 cm"],correctAnswer:"5√3 cm",explanation:"Altitude splits base into two 5 cm halves. h = √(10² - 5²) = √(100 - 25) = √75 = 5√3 cm.",xp:35},{id:"pyth_15",topic:"pythagoras",difficulty:"hard",question:"A ship sails 24 km North, then turns and sails 10 km East. How far is the ship from its starting point?",options:["26 km","34 km","28 km","25 km"],correctAnswer:"26 km",explanation:"Distance = √(24² + 10²) = √(576 + 100) = √676 = 26 km.",xp:35},{id:"pyth_16",topic:"pythagoras",difficulty:"expert",question:"In a rectangular prism with dimensions 3 cm, 4 cm, and 12 cm, what is the length of its longest internal space diagonal?",options:["13 cm","15 cm","19 cm","14 cm"],correctAnswer:"13 cm",explanation:"Space diagonal = √(3² + 4² + 12²) = √(9 + 16 + 144) = √169 = 13 cm.",xp:45},{id:"pyth_17",topic:"pythagoras",difficulty:"expert",question:"Which of the following generates a primitive Pythagorean triple for any integers m > n > 0 of opposite parity?",options:["(m² - n²), 2mn, (m² + n²)","(m - n), 2mn, (m + n)","(m² + n²), mn, (m² - n²)","2m, 2n, 2(m+n)"],correctAnswer:"(m² - n²), 2mn, (m² + n²)",explanation:"Euclid's formula states that a = m² - n², b = 2mn, and c = m² + n² always forms a valid Pythagorean triple since (m² - n²)² + (2mn)² = (m² + n²)².",xp:45},{id:"pyth_18",topic:"pythagoras",difficulty:"expert",question:"If a triangle has sides 7, 24, and 25, what is the radius of its inscribed circle (inradius)?",options:["3","4","2","3.5"],correctAnswer:"3",explanation:"For a right triangle: inradius r = (a + b - c) / 2 = (7 + 24 - 25) / 2 = 6 / 2 = 3.",xp:45},{id:"pyth_19",topic:"pythagoras",difficulty:"expert",question:"In a right triangle with legs a and b and hypotenuse c, the altitude h drawn to the hypotenuse satisfies:",options:["h = (a × b) / c","h = (a + b) / c","h = c / (a × b)","h = √(a + b)"],correctAnswer:"h = (a × b) / c",explanation:"Equating triangle area in two ways: (1/2) a b = (1/2) c h => h = (a × b) / c.",xp:45},{id:"pyth_20",topic:"pythagoras",difficulty:"expert",question:"A guy wire connects the top of a 24-meter tower to a point on the ground 18 meters from the base. What is the wire's length?",options:["30 meters","32 meters","28 meters","42 meters"],correctAnswer:"30 meters",explanation:"Wire length = √(24² + 18²) = √(576 + 324) = √900 = 30 meters.",xp:45}],X0=[{id:"coord_1",topic:"coordinates",difficulty:"easy",question:"The point (0, 0) where the X and Y axes intersect is called the:",options:["Origin","Quadrant","Intercept","Vertex"],correctAnswer:"Origin",explanation:"The origin (0, 0) is the central reference point of the 2D Cartesian coordinate plane.",xp:20,diagram:{type:"grid",points:[{x:0,y:0,label:"Origin (0,0)"}]}},{id:"coord_2",topic:"coordinates",difficulty:"easy",question:"In which quadrant does the point (-3, 5) lie?",options:["Quadrant II","Quadrant I","Quadrant III","Quadrant IV"],correctAnswer:"Quadrant II",explanation:"Quadrant II contains points where x < 0 (negative) and y > 0 (positive).",xp:20},{id:"coord_3",topic:"coordinates",difficulty:"easy",question:"In which quadrant does the point (4, -6) lie?",options:["Quadrant IV","Quadrant I","Quadrant II","Quadrant III"],correctAnswer:"Quadrant IV",explanation:"Quadrant IV has positive x and negative y coordinates (x > 0, y < 0).",xp:20},{id:"coord_4",topic:"coordinates",difficulty:"easy",question:"What is the y-coordinate (ordinate) of any point lying on the X-axis?",options:["0","1","-1","Infinity"],correctAnswer:"0",explanation:"All points lying directly on the X-axis have a y-coordinate of exactly 0 (e.g. (x, 0)).",xp:20},{id:"coord_5",topic:"coordinates",difficulty:"easy",question:"What is the formula for the distance between two points (x₁, y₁) and (x₂, y₂)?",options:["√((x₂ - x₁)² + (y₂ - y₁)²)","(x₂ - x₁) + (y₂ - y₁)","(x₂ - x₁)² + (y₂ - y₁)²","√((x₂ + x₁)² + (y₂ + y₁))"],correctAnswer:"√((x₂ - x₁)² + (y₂ - y₁)²)",explanation:"Derived from Pythagoras theorem: Distance d = √((x₂ - x₁)² + (y₂ - y₁)²).",xp:20},{id:"coord_6",topic:"coordinates",difficulty:"medium",question:"What is the midpoint between the points (2, 4) and (6, 10)?",options:["(4, 7)","(8, 14)","(3, 5)","(4, 6)"],correctAnswer:"(4, 7)",explanation:"Midpoint = ((x₁ + x₂)/2, (y₁ + y₂)/2) = ((2+6)/2, (4+10)/2) = (4, 7).",xp:25},{id:"coord_7",topic:"coordinates",difficulty:"medium",question:"What is the slope (gradient m) of the line passing through (1, 2) and (3, 8)?",options:["3","4","2","6"],correctAnswer:"3",explanation:"Slope m = (y₂ - y₁) / (x₂ - x₁) = (8 - 2) / (3 - 1) = 6 / 2 = 3.",xp:25},{id:"coord_8",topic:"coordinates",difficulty:"medium",question:"What is the distance between the points (0, 0) and (-6, 8)?",options:["10","14","2","100"],correctAnswer:"10",explanation:"Distance = √((-6)² + 8²) = √(36 + 64) = √100 = 10.",xp:25},{id:"coord_9",topic:"coordinates",difficulty:"medium",question:"What is the slope of any horizontal line parallel to the X-axis?",options:["0","1","Undefined","Infinity"],correctAnswer:"0",explanation:"A horizontal line has zero vertical change (Δy = 0), so its slope m = 0.",xp:25},{id:"coord_10",topic:"coordinates",difficulty:"medium",question:"What is the slope of any vertical line parallel to the Y-axis?",options:["Undefined","0","1","-1"],correctAnswer:"Undefined",explanation:"A vertical line has zero horizontal change (Δx = 0), resulting in division by zero, so its slope is undefined.",xp:25},{id:"coord_11",topic:"coordinates",difficulty:"medium",question:"If two lines are parallel, what is true about their slopes m₁ and m₂?",options:["m₁ = m₂","m₁ × m₂ = -1","m₁ + m₂ = 0","m₁ = -m₂"],correctAnswer:"m₁ = m₂",explanation:"Parallel lines have the exact same steepness and direction, so their slopes are identical: m₁ = m₂.",xp:25},{id:"coord_12",topic:"coordinates",difficulty:"hard",question:"If two perpendicular non-vertical lines have slopes m₁ and m₂, what is their relationship?",options:["m₁ × m₂ = -1","m₁ = m₂","m₁ + m₂ = 1","m₁ - m₂ = 0"],correctAnswer:"m₁ × m₂ = -1",explanation:"The slopes of perpendicular lines are negative reciprocals of each other: m₁ × m₂ = -1.",xp:35},{id:"coord_13",topic:"coordinates",difficulty:"hard",question:"What is the equation of a line with slope 2 and y-intercept -5 in slope-intercept form?",options:["y = 2x - 5","y = -5x + 2","2x + y = -5","y = 2x + 5"],correctAnswer:"y = 2x - 5",explanation:"Slope-intercept form is y = mx + c. With m = 2 and c = -5: y = 2x - 5.",xp:35},{id:"coord_14",topic:"coordinates",difficulty:"hard",question:"What are the coordinates of the centroid of a triangle with vertices at (1, 2), (4, 6), and (7, 1)?",options:["(4, 3)","(6, 4.5)","(3, 3)","(4, 4)"],correctAnswer:"(4, 3)",explanation:"Centroid = ((x₁+x₂+x₃)/3, (y₁+y₂+y₃)/3) = ((1+4+7)/3, (2+6+1)/3) = (12/3, 9/3) = (4, 3).",xp:35},{id:"coord_15",topic:"coordinates",difficulty:"hard",question:"Three points A, B, and C are collinear if and only if the area of triangle ABC is:",options:["0","1","Positive","Infinite"],correctAnswer:"0",explanation:"If three points lie on the exact same straight line, they enclose zero area.",xp:35},{id:"coord_16",topic:"coordinates",difficulty:"expert",question:"What is the equation of a circle centered at (h, k) with radius r?",options:["(x - h)² + (y - k)² = r²","(x + h)² + (y + k)² = r²","(x - h) + (y - k) = r²","x² + y² = r"],correctAnswer:"(x - h)² + (y - k)² = r²",explanation:"Standard Cartesian circle equation is (x - h)² + (y - k)² = r².",xp:45},{id:"coord_17",topic:"coordinates",difficulty:"expert",question:"What is the perpendicular distance from the point (2, 3) to the line 3x + 4y - 8 = 0?",options:["2 units","3 units","1.5 units","4 units"],correctAnswer:"2 units",explanation:"Distance = |Ax₀ + By₀ + C| / √(A² + B²) = |3(2) + 4(3) - 8| / √(3² + 4²) = |6 + 12 - 8| / 5 = 10 / 5 = 2 units.",xp:45},{id:"coord_18",topic:"coordinates",difficulty:"expert",question:"Point P divides the line segment joining A(1, 3) and B(4, 6) in the ratio 2 : 1. What are the coordinates of P?",options:["(3, 5)","(2.5, 4.5)","(3.5, 5.5)","(2, 4)"],correctAnswer:"(3, 5)",explanation:"Section formula: x = (2×4 + 1×1)/(2+1) = 9/3 = 3. y = (2×6 + 1×3)/(2+1) = 15/3 = 5. P = (3, 5).",xp:45},{id:"coord_19",topic:"coordinates",difficulty:"expert",question:"What is the area of a triangle with vertices at (0, 0), (4, 0), and (0, 6)?",options:["12 sq units","24 sq units","6 sq units","10 sq units"],correctAnswer:"12 sq units",explanation:"Area = (1/2) |x₁(y₂ - y₃) + x₂(y₃ - y₁) + x₃(y₁ - y₂)| = (1/2) |4(6)| = 12 sq units.",xp:45},{id:"coord_20",topic:"coordinates",difficulty:"expert",question:"What is the reflection of the point (5, -3) across the Y-axis?",options:["(-5, -3)","(5, 3)","(-5, 3)","(3, -5)"],correctAnswer:"(-5, -3)",explanation:"Reflecting across the Y-axis negates the x-coordinate while preserving y: (x, y) -> (-x, y) => (-5, -3).",xp:45}],Y0=[{id:"sym_1",topic:"symmetry",difficulty:"easy",question:"How many lines of symmetry does a square have?",options:["4","2","8","1"],correctAnswer:"4",explanation:"A square has 4 lines of symmetry: 2 through the opposite midpoints and 2 along the diagonals.",xp:20},{id:"sym_2",topic:"symmetry",difficulty:"easy",question:"How many lines of symmetry does an equilateral triangle have?",options:["3","1","6","0"],correctAnswer:"3",explanation:"An equilateral triangle has 3 lines of symmetry passing from each vertex to the opposite side's midpoint.",xp:20},{id:"sym_3",topic:"symmetry",difficulty:"easy",question:"How many lines of symmetry does a rectangle (non-square) have?",options:["2","4","1","0"],correctAnswer:"2",explanation:"A rectangle has 2 lines of symmetry connecting midpoints of opposite sides. Diagonals are NOT lines of reflection for a non-square rectangle.",xp:20},{id:"sym_4",topic:"symmetry",difficulty:"easy",question:"How many lines of symmetry does a circle have?",options:["Infinitely many","360","100","4"],correctAnswer:"Infinitely many",explanation:"Every line passing through the center of a circle is a valid line of reflectional symmetry.",xp:20},{id:"sym_5",topic:"symmetry",difficulty:"easy",question:"How many lines of symmetry does a scalene triangle have?",options:["0","1","2","3"],correctAnswer:"0",explanation:"A scalene triangle has sides of unequal length and lacks any line of symmetry.",xp:20},{id:"sym_6",topic:"symmetry",difficulty:"medium",question:"What is the order of rotational symmetry of a square?",options:["4","2","8","1"],correctAnswer:"4",explanation:"A square matches its original orientation 4 times during a full 360° turn (at 90°, 180°, 270°, 360°).",xp:25},{id:"sym_7",topic:"symmetry",difficulty:"medium",question:"What is the angle of rotational symmetry for a regular hexagon?",options:["60°","45°","90°","120°"],correctAnswer:"60°",explanation:"Angle of rotation = 360° / number of sides = 360° / 6 = 60°.",xp:25},{id:"sym_8",topic:"symmetry",difficulty:"medium",question:"How many lines of symmetry does a regular pentagon have?",options:["5","10","1","0"],correctAnswer:"5",explanation:"Every regular n-gon has exactly n lines of reflectional symmetry. For a pentagon, n = 5.",xp:25},{id:"sym_9",topic:"symmetry",difficulty:"medium",question:"Which of the following English capital letters has both vertical and horizontal line symmetry?",options:["H","A","B","P"],correctAnswer:"H",explanation:'The letter "H" is symmetrical across both a vertical midline and a horizontal midline.',xp:25},{id:"sym_10",topic:"symmetry",difficulty:"medium",question:"What is the order of rotational symmetry of a regular octagon?",options:["8","4","6","16"],correctAnswer:"8",explanation:"A regular 8-sided octagon has an order of rotational symmetry equal to 8.",xp:25},{id:"sym_11",topic:"symmetry",difficulty:"medium",question:"How many lines of symmetry does a general parallelogram (non-rhombus, non-rectangle) have?",options:["0","2","1","4"],correctAnswer:"0",explanation:"A general slanted parallelogram has rotational symmetry of order 2, but 0 lines of reflectional symmetry.",xp:25},{id:"sym_12",topic:"symmetry",difficulty:"hard",question:"What is the minimum angle of rotation required for an equilateral triangle to map onto itself?",options:["120°","60°","180°","90°"],correctAnswer:"120°",explanation:"360° / 3 = 120° rotation around the centroid.",xp:35},{id:"sym_13",topic:"symmetry",difficulty:"hard",question:"How many lines of symmetry does a rhombus have?",options:["2","4","1","0"],correctAnswer:"2",explanation:"A rhombus has 2 lines of symmetry along its two perpendicular diagonals.",xp:35},{id:"sym_14",topic:"symmetry",difficulty:"hard",question:"How many lines of symmetry does an isosceles trapezoid have?",options:["1","2","0","4"],correctAnswer:"1",explanation:"An isosceles trapezoid has 1 vertical line of symmetry passing through the midpoints of its parallel bases.",xp:35},{id:"sym_15",topic:"symmetry",difficulty:"hard",question:"Which geometric transformation creates a mirror image across a given line?",options:["Reflection","Translation","Rotation","Dilation"],correctAnswer:"Reflection",explanation:"Reflection produces a mirror image of an object flipped across the line of reflection.",xp:35},{id:"sym_16",topic:"symmetry",difficulty:"expert",question:"A figure that has rotational symmetry of order 1 is considered to have:",options:["No rotational symmetry","Half-turn symmetry","Bilateral symmetry","Point symmetry"],correctAnswer:"No rotational symmetry",explanation:"An order of 1 means the figure only matches itself after a full 360° revolution, which is trivial.",xp:45},{id:"sym_17",topic:"symmetry",difficulty:"expert",question:"Point symmetry around the origin is equivalent to a rotation of what angle?",options:["180°","90°","270°","360°"],correctAnswer:"180°",explanation:"Point reflection in 2D (mapping (x, y) -> (-x, -y)) is identical to a 180° rotation.",xp:45},{id:"sym_18",topic:"symmetry",difficulty:"expert",question:"How many planes of symmetry does a regular tetrahedron have?",options:["6","3","4","12"],correctAnswer:"6",explanation:"A regular tetrahedron possesses exactly 6 planes of reflective symmetry (one for each of its 6 edges).",xp:45},{id:"sym_19",topic:"symmetry",difficulty:"expert",question:"How many planes of symmetry does a cube have?",options:["9","6","12","4"],correctAnswer:"9",explanation:"A cube has 9 planes of symmetry: 3 parallel to pairs of faces and 6 passing through opposite diagonal edges.",xp:45},{id:"sym_20",topic:"symmetry",difficulty:"expert",question:"What is the order of rotational symmetry of a regular decagon?",options:["10","5","20","8"],correctAnswer:"10",explanation:"A regular decagon has 10 rotational positions that map onto itself (36° increments).",xp:45}],j0=[{id:"shape3d_1",topic:"shapes_3d",difficulty:"easy",question:"How many faces (F), vertices (V), and edges (E) does a cube have?",options:["6 Faces, 8 Vertices, 12 Edges","8 Faces, 6 Vertices, 12 Edges","6 Faces, 12 Vertices, 8 Edges","4 Faces, 4 Vertices, 6 Edges"],correctAnswer:"6 Faces, 8 Vertices, 12 Edges",explanation:"A cube has 6 square faces, 8 corner vertices, and 12 straight edges.",xp:20,diagram:{type:"solid",shape:"cube"}},{id:"shape3d_2",topic:"shapes_3d",difficulty:"easy",question:"What is Euler's formula relating Faces (F), Vertices (V), and Edges (E) for any convex polyhedron?",options:["F + V - E = 2","F + E - V = 2","F + V + E = 2","F × V = E + 2"],correctAnswer:"F + V - E = 2",explanation:"Euler's characteristic formula for convex polyhedra states F + V - E = 2 (or F + V = E + 2).",xp:20},{id:"shape3d_3",topic:"shapes_3d",difficulty:"easy",question:"How many vertices does a sphere have?",options:["0","1","2","Infinite"],correctAnswer:"0",explanation:"A sphere is a perfectly smooth continuous curved surface with 0 vertices and 0 edges.",xp:20,diagram:{type:"solid",shape:"sphere"}},{id:"shape3d_4",topic:"shapes_3d",difficulty:"easy",question:"A 3D shape with 2 parallel circular bases connected by a curved surface is a:",options:["Cylinder","Cone","Prism","Sphere"],correctAnswer:"Cylinder",explanation:"A cylinder has 2 flat circular faces and 1 curved continuous surface.",xp:20,diagram:{type:"solid",shape:"cylinder"}},{id:"shape3d_5",topic:"shapes_3d",difficulty:"easy",question:"How many vertices does a cone have?",options:["1 (apex)","0","2","3"],correctAnswer:"1 (apex)",explanation:"A cone has 1 vertex (the apex at the top) and 1 circular edge at the bottom base.",xp:20,diagram:{type:"solid",shape:"cone"}},{id:"shape3d_6",topic:"shapes_3d",difficulty:"medium",question:"How many total Platonic solids (regular convex polyhedra) exist in 3D Euclidean space?",options:["5","6","4","8"],correctAnswer:"5",explanation:"There are exactly 5 Platonic solids: Tetrahedron, Cube (Hexahedron), Octahedron, Dodecahedron, and Icosahedron.",xp:25},{id:"shape3d_7",topic:"shapes_3d",difficulty:"medium",question:"A triangular pyramid (tetrahedron) has how many faces and edges?",options:["4 Faces, 6 Edges","4 Faces, 4 Edges","5 Faces, 8 Edges","6 Faces, 8 Edges"],correctAnswer:"4 Faces, 6 Edges",explanation:"A tetrahedron has 4 triangular faces, 4 vertices, and 6 edges (4 + 4 - 6 = 2).",xp:25},{id:"shape3d_8",topic:"shapes_3d",difficulty:"medium",question:"A polyhedron has 12 vertices and 30 edges. Using Euler's formula, how many faces does it have?",options:["20","18","22","16"],correctAnswer:"20",explanation:"F + V - E = 2 => F + 12 - 30 = 2 => F - 18 = 2 => F = 20 (an Icosahedron).",xp:25},{id:"shape3d_9",topic:"shapes_3d",difficulty:"medium",question:"How many rectangular faces and triangular faces does a triangular prism have?",options:["3 Rectangular faces, 2 Triangular faces","2 Rectangular, 3 Triangular","4 Rectangular, 1 Triangular","5 Rectangular, 0 Triangular"],correctAnswer:"3 Rectangular faces, 2 Triangular faces",explanation:"A triangular prism has 2 parallel triangular bases joined by 3 rectangular lateral faces.",xp:25},{id:"shape3d_10",topic:"shapes_3d",difficulty:"medium",question:"What is the shape of each face of a regular dodecahedron?",options:["Regular pentagon","Equilateral triangle","Square","Regular hexagon"],correctAnswer:"Regular pentagon",explanation:"A regular dodecahedron has 12 identical regular pentagonal faces.",xp:25},{id:"shape3d_11",topic:"shapes_3d",difficulty:"medium",question:"How many faces does a regular icosahedron have?",options:["20","12","8","30"],correctAnswer:"20",explanation:"An icosahedron has 20 equilateral triangular faces and 12 vertices.",xp:25},{id:"shape3d_12",topic:"shapes_3d",difficulty:"hard",question:"What is the dual polyhedron of a regular cube?",options:["Regular Octahedron","Regular Tetrahedron","Regular Dodecahedron","Regular Icosahedron"],correctAnswer:"Regular Octahedron",explanation:"Connecting the centers of the 6 faces of a cube forms an octahedron with 8 faces and 6 vertices.",xp:35},{id:"shape3d_13",topic:"shapes_3d",difficulty:"hard",question:"How many edges does a square pyramid have?",options:["8","6","10","5"],correctAnswer:"8",explanation:"4 base edges + 4 slant edges connecting to the apex = 8 edges total.",xp:35},{id:"shape3d_14",topic:"shapes_3d",difficulty:"hard",question:"How many edges does a pentagonal prism have?",options:["15","10","12","20"],correctAnswer:"15",explanation:"For any n-gonal prism: Edges = 3n. For n = 5: 3 × 5 = 15 edges.",xp:35},{id:"shape3d_15",topic:"shapes_3d",difficulty:"hard",question:"A flat pattern that can be folded to form a 3D solid is called a:",options:["Net","Cross-section","Isometric projection","Tessellation"],correctAnswer:"Net",explanation:"A geometric net is a two-dimensional unfolding that can be folded into a polyhedral 3D shape.",xp:35},{id:"shape3d_16",topic:"shapes_3d",difficulty:"expert",question:"What 2D shape is formed by the cross-section of a cylinder sliced parallel to its base?",options:["Circle","Rectangle","Oval / Ellipse","Triangle"],correctAnswer:"Circle",explanation:"A cross-section cut parallel to the cylinder's circular base produces an identical circle.",xp:45},{id:"shape3d_17",topic:"shapes_3d",difficulty:"expert",question:"How many vertices does a regular dodecahedron have?",options:["20","12","30","24"],correctAnswer:"20",explanation:"A dodecahedron has 12 faces, 30 edges, and 20 vertices (12 + 20 - 30 = 2).",xp:45},{id:"shape3d_18",topic:"shapes_3d",difficulty:"expert",question:"Which Platonic solid is self-dual (its dual is identical to itself)?",options:["Regular Tetrahedron","Cube","Octahedron","Icosahedron"],correctAnswer:"Regular Tetrahedron",explanation:"Connecting the face centers of a 4-faced tetrahedron produces another 4-faced tetrahedron.",xp:45},{id:"shape3d_19",topic:"shapes_3d",difficulty:"expert",question:"What is the sum of all face angles around a vertex in any convex polyhedron?",options:["Strictly less than 360°","Equal to 360°","Greater than 360°","Always 180°"],correctAnswer:"Strictly less than 360°",explanation:"Descartes' angle defect theorem: for a vertex to poke out in 3D, the sum of face angles must be strictly less than 360°.",xp:45},{id:"shape3d_20",topic:"shapes_3d",difficulty:"expert",question:"How many edges does a hexagonal pyramid have?",options:["12","6","18","8"],correctAnswer:"12",explanation:"For any n-gonal pyramid: Edges = 2n. For n = 6: 2 × 6 = 12 edges.",xp:45}],K0=[{id:"mix_1",topic:"mixed",difficulty:"medium",question:"A right triangle has hypotenuse 10 cm and perimeter 24 cm. What is its area?",options:["24 cm²","48 cm²","20 cm²","30 cm²"],correctAnswer:"24 cm²",explanation:"a + b + 10 = 24 => a + b = 14. (a + b)² = a² + 2ab + b² => 14² = 10² + 2ab => 196 = 100 + 2ab => 2ab = 96 => ab = 48. Area = (1/2) ab = 24 cm².",xp:30},{id:"mix_2",topic:"mixed",difficulty:"medium",question:"What is the sum of interior angles of a convex polygon with 7 sides (heptagon)?",options:["900°","720°","1080°","540°"],correctAnswer:"900°",explanation:"Sum = (n - 2) × 180° = (7 - 2) × 180° = 5 × 180° = 900°.",xp:30},{id:"mix_3",topic:"mixed",difficulty:"medium",question:"What is the volume of a cylinder whose height equals its diameter, with radius 3 cm in terms of π?",options:["54π cm³","18π cm³","36π cm³","27π cm³"],correctAnswer:"54π cm³",explanation:"Radius = 3 cm => Diameter = Height = 6 cm. Volume = πr²h = π(3²)(6) = 54π cm³.",xp:30},{id:"mix_4",topic:"mixed",difficulty:"medium",question:"If the circumference of a circle is numerically equal to its area, what is the circle's radius?",options:["2 units","1 unit","4 units","π units"],correctAnswer:"2 units",explanation:"2πr = πr² => 2 = r => r = 2 units.",xp:30},{id:"mix_5",topic:"mixed",difficulty:"hard",question:"What is the distance between the parallel lines 3x + 4y = 10 and 3x + 4y = 25?",options:["3 units","15 units","5 units","2.5 units"],correctAnswer:"3 units",explanation:"Distance = |c₂ - c₁| / √(A² + B²) = |25 - 10| / √(3² + 4²) = 15 / 5 = 3 units.",xp:35},{id:"mix_6",topic:"mixed",difficulty:"hard",question:"A sphere is inscribed inside a cube of side 6 cm. What is the volume of the sphere in terms of π?",options:["36π cm³","72π cm³","288π cm³","18π cm³"],correctAnswer:"36π cm³",explanation:"Diameter = 6 cm => Radius r = 3 cm. Volume = (4/3)π(3³) = (4/3)π(27) = 36π cm³.",xp:35},{id:"mix_7",topic:"mixed",difficulty:"hard",question:"How many diagonals does a regular nonagon (9-sided polygon) have?",options:["27","36","18","24"],correctAnswer:"27",explanation:"Formula for diagonals in an n-gon: D = n(n - 3) / 2. For n = 9: 9(6) / 2 = 27 diagonals.",xp:35},{id:"mix_8",topic:"mixed",difficulty:"hard",question:"What is the measure of each interior angle in a regular octagon?",options:["135°","120°","140°","108°"],correctAnswer:"135°",explanation:"Interior angle = ((n - 2) × 180°) / n = (6 × 180°) / 8 = 1080° / 8 = 135°.",xp:35},{id:"mix_9",topic:"mixed",difficulty:"hard",question:"In a right circular cone, the radius is 5 cm and the volume is 100π cm³. What is its perpendicular height?",options:["12 cm","15 cm","10 cm","8 cm"],correctAnswer:"12 cm",explanation:"V = (1/3)πr²h => 100π = (1/3)π(25)h => 100 = (25/3)h => h = 12 cm.",xp:35},{id:"mix_10",topic:"mixed",difficulty:"hard",question:"What is the area of a square inscribed inside a circle of radius 5 cm?",options:["50 cm²","25 cm²","100 cm²","50√2 cm²"],correctAnswer:"50 cm²",explanation:"The diagonal of the inscribed square equals the diameter: d = 10 cm. Area = d² / 2 = 100 / 2 = 50 cm².",xp:35},{id:"mix_11",topic:"mixed",difficulty:"expert",question:"If the surface area of a sphere is 144π cm², what is its volume in terms of π?",options:["288π cm³","144π cm³","576π cm³","216π cm³"],correctAnswer:"288π cm³",explanation:"4πr² = 144π => r² = 36 => r = 6 cm. Volume = (4/3)π(6³) = (4/3)π(216) = 288π cm³.",xp:45},{id:"mix_12",topic:"mixed",difficulty:"expert",question:"What is the ratio of the volume of a sphere to the volume of its circumscribed cylinder?",options:["2 : 3","1 : 2","3 : 4","1 : 3"],correctAnswer:"2 : 3",explanation:"Sphere volume = (4/3)πr³, Cylinder volume = πr²(2r) = 2πr³. Ratio = (4/3) / 2 = 2/3 (Archimedes' famous result).",xp:45},{id:"mix_13",topic:"mixed",difficulty:"expert",question:"A wire forming an equilateral triangle of side 88 cm is rebent into a circle. What is the circle's radius? (Take π = 22/7)",options:["42 cm","28 cm","21 cm","35 cm"],correctAnswer:"42 cm",explanation:"Perimeter = 3 × 88 = 264 cm. Circumference = 2 × (22/7) × r = 264 => (44/7)r = 264 => r = 42 cm.",xp:45},{id:"mix_14",topic:"mixed",difficulty:"expert",question:"What is the radius of the incircle of a right triangle with legs 9 cm and 12 cm (hypotenuse 15 cm)?",options:["3 cm","4 cm","2 cm","3.5 cm"],correctAnswer:"3 cm",explanation:"Inradius r = (a + b - c)/2 = (9 + 12 - 15)/2 = 6/2 = 3 cm.",xp:45},{id:"mix_15",topic:"mixed",difficulty:"expert",question:"The lengths of two parallel chords in a circle of radius 10 cm are 12 cm and 16 cm on the same side of center. What is the distance between them?",options:["2 cm","4 cm","3 cm","1 cm"],correctAnswer:"2 cm",explanation:"Distance to 16 cm chord = √(10² - 8²) = 6 cm. Distance to 12 cm chord = √(10² - 6²) = 8 cm. Distance between = 8 - 6 = 2 cm.",xp:45},{id:"mix_16",topic:"mixed",difficulty:"expert",question:"What is the volume of a regular tetrahedron with edge length 6 cm?",options:["18√2 cm³","36√2 cm³","9√2 cm³","24√3 cm³"],correctAnswer:"18√2 cm³",explanation:"Tetrahedron volume = (a³ / (6√2)) = 216 / (6√2) = 36 / √2 = 18√2 cm³ (~25.46 cm³).",xp:45},{id:"mix_17",topic:"mixed",difficulty:"expert",question:"The sum of interior angles of a polygon is 1440°. How many sides does it have?",options:["10 sides","12 sides","8 sides","9 sides"],correctAnswer:"10 sides",explanation:"(n - 2) × 180° = 1440° => n - 2 = 8 => n = 10 sides (a decagon).",xp:45},{id:"mix_18",topic:"mixed",difficulty:"expert",question:"If a cone is cut horizontally at half its height, what fraction of the original volume is the smaller top cone?",options:["1 / 8","1 / 4","1 / 2","1 / 16"],correctAnswer:"1 / 8",explanation:"Volume scales with the cube of the scale factor: (1/2)³ = 1/8.",xp:45},{id:"mix_19",topic:"mixed",difficulty:"expert",question:"A circle is inscribed in a square, which is itself inscribed in a larger circle. What is the ratio of the area of the smaller circle to the larger circle?",options:["1 : 2","1 : 4","1 : √2","2 : 3"],correctAnswer:"1 : 2",explanation:"Let square side = 2r. Smaller circle radius = r (Area = πr²). Larger circle radius = r√2 (Area = 2πr²). Ratio = 1 : 2.",xp:45},{id:"mix_20",topic:"mixed",difficulty:"expert",question:"What is the length of the diagonal of a rectangular box measuring 2 cm × 3 cm × 6 cm?",options:["7 cm","6.5 cm","8 cm","9 cm"],correctAnswer:"7 cm",explanation:"Diagonal = √(2² + 3² + 6²) = √(4 + 9 + 36) = √49 = 7 cm.",xp:45}];class $0{constructor(){this.topics={lines_angles:{id:"lines_angles",name:"Lines & Angles",icon:"📐",desc:"Angles, Parallel lines, Complementary & Supplementary angles",questions:O0},triangles:{id:"triangles",name:"Triangles",icon:"🔺",desc:"Types, Angle sum, Centers, Heron's formula & properties",questions:B0},quadrilaterals:{id:"quadrilaterals",name:"Quadrilaterals",icon:"🔷",desc:"Parallelograms, Squares, Rhombuses, Trapezoids & cyclic quads",questions:k0},circles:{id:"circles",name:"Circles",icon:"⭕",desc:"Radius, Tangents, Chords, Inscribed angles, Arcs & Sectors",questions:z0},perimeter:{id:"perimeter",name:"Perimeter",icon:"📏",desc:"Boundary distance of regular & composite 2D figures",questions:V0},area:{id:"area",name:"Area",icon:"🟩",desc:"2D surface space, Shaded regions, Hero formulas & ratios",questions:G0},surface_area:{id:"surface_area",name:"Surface Area",icon:"📦",desc:"Lateral and total surface areas of 3D polyhedra & curves",questions:H0},volume:{id:"volume",name:"Volume",icon:"🧊",desc:"Cubic capacities of prisms, cones, cylinders, & spheres",questions:W0},pythagoras:{id:"pythagoras",name:"Pythagoras Theorem",icon:"📐",desc:"Hypotenuse, Triples, 2D/3D space diagonals & inradius",questions:q0},coordinates:{id:"coordinates",name:"Coordinate Geometry",icon:"📈",desc:"Cartesian plane, Slope, Distance, Midpoints & Circles",questions:X0},symmetry:{id:"symmetry",name:"Symmetry",icon:"🪞",desc:"Reflection lines, Rotational order, Planes of symmetry",questions:Y0},shapes_3d:{id:"shapes_3d",name:"3D Polyhedra",icon:"🎲",desc:"Euler's formula, Platonic solids, Vertices, Nets & duals",questions:j0},mixed:{id:"mixed",name:"Grand Master Arena",icon:"🏆",desc:"Comprehensive multi-disciplinary geometry challenges",questions:K0}}}getTopic(e){return this.topics[e]||null}getAllTopics(){return Object.values(this.topics)}getQuizSet(e,t=10){const n=this.getTopic(e);if(!n||!n.questions||n.questions.length===0)return this.shuffleArray([...this.topics.mixed.questions]).slice(0,t);const i=this.shuffleArray([...n.questions]);return i.slice(0,Math.min(t,i.length)).map(a=>{const o=this.shuffleArray([...a.options]);return{...a,options:o,correctIndex:o.indexOf(a.correctAnswer)}})}shuffleArray(e){const t=[...e];for(let n=t.length-1;n>0;n--){const i=Math.floor(Math.random()*(n+1));[t[n],t[i]]=[t[i],t[n]]}return t}}class Gc{static calculatePoints(e,t,n=30,i=0){let a=1;switch(e){case"medium":a=1.5;break;case"hard":a=2;break;case"expert":a=3;break;default:a=1;break}const o=Math.max(0,Math.min(1,t/n)),c=Math.round(o*50);let l=1;return i>=5?l=3:i>=3&&(l=2),{total:Math.round((100*a+c)*l),basePoints:100,diffMultiplier:a,speedBonus:c,comboMultiplier:l}}static calculateStars(e,t,n){const i=e/t*100;return i>=90&&n>=2?3:i>=65&&n>=1?2:e>=1?1:0}}class Z0{constructor(e,t,n){this.questionManager=e,this.gameState=t,this.audioManager=n,this.questions=[],this.currentIndex=0,this.timeLimit=30,this.timeRemaining=30,this.timerInterval=null,this.isAnswered=!1,this.lives=3,this.score=0,this.combo=0,this.maxCombo=0,this.correctCount=0,this.totalXpEarned=0,this.onTick=null,this.onQuestionChange=null,this.onAnswerFeedback=null,this.onChallengeComplete=null,this.onGameOver=null}startQuiz(e,t=10){this.currentTopicId=e,this.questions=this.questionManager.getQuizSet(e,t),this.currentIndex=0,this.lives=3,this.score=0,this.combo=0,this.maxCombo=0,this.correctCount=0,this.totalXpEarned=0,this.gameState.challengeScore=0,this.gameState.challengeLives=3,this.gameState.challengeCombo=0,this.gameState.challengeTotalQuestions=this.questions.length,this.gameState.currentTopic=e,this.loadQuestion(this.currentIndex)}loadQuestion(e){if(e>=this.questions.length){this.finishChallenge();return}this.currentIndex=e,this.isAnswered=!1,this.timeRemaining=this.timeLimit,this.currentQuestion=this.questions[e],this.startTimer(),this.onQuestionChange&&this.onQuestionChange({question:this.currentQuestion,index:this.currentIndex,total:this.questions.length,lives:this.lives,score:this.score,combo:this.combo})}startTimer(){this.stopTimer(),this.timerInterval=setInterval(()=>{this.timeRemaining-=1,this.onTick&&this.onTick(this.timeRemaining,this.timeLimit),this.timeRemaining<=0&&this.handleTimeout()},1e3)}stopTimer(){this.timerInterval&&(clearInterval(this.timerInterval),this.timerInterval=null)}submitAnswer(e){if(this.isAnswered)return;this.isAnswered=!0,this.stopTimer();const t=e===this.currentQuestion.correctIndex;let n=0,i=0;t?(this.combo+=1,this.combo>this.maxCombo&&(this.maxCombo=this.combo),this.correctCount+=1,n=Gc.calculatePoints(this.currentQuestion.difficulty,this.timeRemaining,this.timeLimit,this.combo).total,this.score+=n,i=this.currentQuestion.xp||25,this.totalXpEarned+=i,this.gameState.addXP(i),this.gameState.addScore(n),this.audioManager&&this.audioManager.playCorrect()):(this.combo=0,this.lives-=1,this.audioManager&&this.audioManager.playWrong()),this.onAnswerFeedback&&this.onAnswerFeedback({isCorrect:t,selectedIndex:e,correctIndex:this.currentQuestion.correctIndex,explanation:this.currentQuestion.explanation,earnedPoints:n,xpEarned:i,livesRemaining:this.lives,combo:this.combo})}handleTimeout(){this.isAnswered||(this.isAnswered=!0,this.stopTimer(),this.combo=0,this.lives-=1,this.audioManager&&this.audioManager.playWrong(),this.onAnswerFeedback&&this.onAnswerFeedback({isCorrect:!1,isTimeout:!0,selectedIndex:-1,correctIndex:this.currentQuestion.correctIndex,explanation:"Time expired! "+this.currentQuestion.explanation,earnedPoints:0,xpEarned:0,livesRemaining:this.lives,combo:this.combo}))}advanceNext(){if(this.lives<=0){this.triggerGameOver();return}this.loadQuestion(this.currentIndex+1)}finishChallenge(){this.stopTimer();const e=Gc.calculateStars(this.correctCount,this.questions.length,this.lives),t=Math.round(this.correctCount/this.questions.length*100),n=100+e*50,i=e>0?2+e:1;this.gameState.addXP(n),this.gameState.addTokens(i),this.gameState.updateTopicProgress(this.currentTopicId,e,this.score,t),this.audioManager&&this.audioManager.playChallengeComplete(),this.onChallengeComplete&&this.onChallengeComplete({topicId:this.currentTopicId,score:this.score,correctCount:this.correctCount,totalQuestions:this.questions.length,accuracy:t,stars:e,xpEarned:this.totalXpEarned+n,tokensEarned:i,maxCombo:this.maxCombo})}triggerGameOver(){this.stopTimer(),this.audioManager&&this.audioManager.playGameOver(),this.onGameOver&&this.onGameOver({topicId:this.currentTopicId,score:this.score,correctCount:this.correctCount,totalQuestions:this.questions.length,accuracy:Math.round(this.correctCount/(this.currentIndex+1)*100),xpEarned:this.totalXpEarned})}}class Q0{constructor(e,t,n){this.questionManager=e,this.gameState=t,this.audioManager=n,this.quizEngine=new Z0(this.questionManager,this.gameState,this.audioManager)}startChallenge(e){this.questionManager.getTopic(e)&&(this.gameState.setMode("CHALLENGE"),this.quizEngine.startQuiz(e,10))}}class J0{constructor(e,t,n){this.gameState=e,this.audioManager=t,this.onAction=n,this.screenEl=document.getElementById("main-menu-screen"),this.btnPlay=document.getElementById("btn-menu-play"),this.btnContinue=document.getElementById("btn-menu-continue"),this.btnTopics=document.getElementById("btn-menu-topics"),this.btnHowToPlay=document.getElementById("btn-menu-howtoplay"),this.btnSettings=document.getElementById("btn-menu-settings"),this.starsEl=document.getElementById("menu-total-stars"),this.levelEl=document.getElementById("menu-player-lvl"),this.tokensEl=document.getElementById("menu-total-tokens"),this.continueInfoEl=document.getElementById("continue-info"),this.init()}init(){var e,t,n,i,s;(e=this.btnPlay)==null||e.addEventListener("click",()=>{this.audioManager.playClick(),this.onAction("play")}),(t=this.btnContinue)==null||t.addEventListener("click",()=>{this.audioManager.playClick(),this.onAction("continue")}),(n=this.btnTopics)==null||n.addEventListener("click",()=>{this.audioManager.playClick(),this.onAction("topics")}),(i=this.btnHowToPlay)==null||i.addEventListener("click",()=>{this.audioManager.playClick(),this.onAction("howtoplay")}),(s=this.btnSettings)==null||s.addEventListener("click",()=>{this.audioManager.playClick(),this.onAction("settings")}),this.updateStats(),this.gameState.on("stateLoaded",()=>this.updateStats()),this.gameState.on("progressUpdated",()=>this.updateStats()),this.gameState.on("xpChanged",()=>this.updateStats()),this.gameState.on("tokensChanged",()=>this.updateStats())}updateStats(){this.starsEl&&(this.starsEl.textContent=`⭐ ${this.gameState.totalStars} / 39 Stars`),this.levelEl&&(this.levelEl.textContent=`🏆 Level ${this.gameState.level}`),this.tokensEl&&(this.tokensEl.textContent=`🪙 ${this.gameState.tokens} Tokens`),this.continueInfoEl&&(this.continueInfoEl.textContent=`Level ${this.gameState.level} • Courtyard`)}show(){var e;this.updateStats(),(e=this.screenEl)==null||e.classList.remove("hidden")}hide(){var e;(e=this.screenEl)==null||e.classList.add("hidden")}}class e_{constructor(e,t,n){this.gameState=e,this.audioManager=t,this.onAction=n,this.hudEl=document.getElementById("hud"),this.levelBadge=document.getElementById("hud-level-badge"),this.titleBadge=document.getElementById("hud-title-badge"),this.xpBar=document.getElementById("hud-xp-bar"),this.xpText=document.getElementById("hud-xp-text"),this.tokensCount=document.getElementById("hud-tokens-count"),this.scoreCount=document.getElementById("hud-score-count"),this.locationName=document.getElementById("hud-location-name"),this.objectiveText=document.getElementById("hud-objective-text"),this.toastEl=document.getElementById("toast"),this.toastMsg=document.getElementById("toast-msg"),this.btnTopics=document.getElementById("btn-hud-topics"),this.btnPause=document.getElementById("btn-hud-pause"),this.init()}init(){var e,t;(e=this.btnTopics)==null||e.addEventListener("click",()=>{this.audioManager.playClick(),this.onAction("topics")}),(t=this.btnPause)==null||t.addEventListener("click",()=>{this.audioManager.playClick(),this.onAction("pause")}),this.gameState.on("xpChanged",n=>{this.updateXP(n.xp,n.xpToNextLevel,n.level)}),this.gameState.on("levelUp",n=>{this.showToast(`🎉 Level Up! You reached Level ${n.level}!`),this.audioManager.playLevelUp()}),this.gameState.on("tokensChanged",n=>{this.tokensCount&&(this.tokensCount.textContent=n.tokens)}),this.gameState.on("scoreChanged",n=>{this.scoreCount&&(this.scoreCount.textContent=n.totalScore)}),this.updateAll()}getTitleForLevel(e){return e>=10?"Archimedes Grand Master":e>=8?"Supreme Dimensionalist":e>=6?"Euclidean Scholar":e>=4?"Pythagorean Adept":e>=2?"Junior Geometer":"Novice Geometer"}updateXP(e,t,n){if(this.levelBadge&&(this.levelBadge.textContent=`LVL ${n}`),this.titleBadge&&(this.titleBadge.textContent=this.getTitleForLevel(n)),this.xpText&&(this.xpText.textContent=`${e} / ${t} XP`),this.xpBar){const i=Math.min(100,Math.round(e/t*100));this.xpBar.style.width=`${i}%`}}updateAll(){this.updateXP(this.gameState.xp,this.gameState.xpToNextLevel,this.gameState.level),this.tokensCount&&(this.tokensCount.textContent=this.gameState.tokens),this.scoreCount&&(this.scoreCount.textContent=this.gameState.totalScore),this.locationName&&(this.locationName.textContent=this.gameState.currentRoom)}setLocation(e){this.locationName&&(this.locationName.textContent=e)}setObjective(e){this.objectiveText&&(this.objectiveText.textContent=e)}showToast(e){!this.toastEl||!this.toastMsg||(this.toastMsg.textContent=e,this.toastEl.classList.remove("hidden"),setTimeout(()=>{this.toastEl.classList.add("hidden")},3500))}show(){var e;this.updateAll(),(e=this.hudEl)==null||e.classList.remove("hidden")}hide(){var e;(e=this.hudEl)==null||e.classList.add("hidden")}}class t_{constructor(e,t,n,i,s){this.questionManager=e,this.gameState=t,this.audioManager=n,this.onSelectTopic=i,this.onClose=s,this.screenEl=document.getElementById("topic-menu-screen"),this.gridEl=document.getElementById("topics-grid"),this.btnClose=document.getElementById("btn-close-topics"),this.btnBack=document.getElementById("btn-back-from-topics"),this.init()}init(){var e,t;(e=this.btnClose)==null||e.addEventListener("click",()=>{this.audioManager.playClick(),this.onClose&&this.onClose()}),(t=this.btnBack)==null||t.addEventListener("click",()=>{this.audioManager.playClick(),this.onClose&&this.onClose()})}render(){if(!this.gridEl)return;this.gridEl.innerHTML="",this.questionManager.getAllTopics().forEach(t=>{const n=this.gameState.topicStats[t.id]||{unlocked:!1,stars:0,bestScore:0},i=n.unlocked,s=document.createElement("div");s.className=`topic-card ${i?"":"locked"}`;let a="";for(let o=1;o<=3;o++)a+=o<=n.stars?"⭐":"☆";s.innerHTML=`
        <div class="topic-card-header">
          <span class="topic-icon">${t.icon}</span>
          <span class="topic-stars">${i?a:"🔒"}</span>
        </div>
        <h4 class="topic-title">${t.name}</h4>
        <p style="font-size: 0.8rem; color: var(--text-muted);">${t.desc}</p>
        <div class="topic-meta">
          <span>${i?`Best: ${n.bestScore}`:"Locked"}</span>
          <span>${i?`${t.questions.length} Qs`:`Req: Level ${this.getUnlockLevel(t.id)}`}</span>
        </div>
      `,i&&s.addEventListener("click",()=>{this.audioManager.playClick(),this.onSelectTopic&&this.onSelectTopic(t.id)}),this.gridEl.appendChild(s)})}getUnlockLevel(e){switch(e){case"surface_area":return 2;case"volume":return 3;case"pythagoras":return 4;case"coordinates":return 5;case"symmetry":return 6;case"shapes_3d":return 7;case"mixed":return 8;default:return 1}}show(){var e;this.render(),(e=this.screenEl)==null||e.classList.remove("hidden")}hide(){var e;(e=this.screenEl)==null||e.classList.add("hidden")}}class n_{constructor(e,t,n){this.gameState=e,this.audioManager=t,this.onComplete=n,this.boxEl=document.getElementById("dialogue-box"),this.textEl=document.getElementById("dialogue-text"),this.btnNext=document.getElementById("btn-dialogue-next"),this.dialogueList=[],this.currentIndex=0,this.isTyping=!1,this.typeInterval=null,this.init()}init(){var e;(e=this.btnNext)==null||e.addEventListener("click",()=>{this.advance()}),window.addEventListener("keydown",t=>{this.gameState.mode==="DIALOGUE"&&t.code==="KeyE"&&this.advance()})}startDialogue(e){this.dialogueList=e||["Welcome to Geometry Academy, young apprentice!","I am Teacher Archimedes. Throughout this campus, you will find 10 specialized Geometry wings.","Step onto the glowing room pedestals to test your knowledge, earn XP, and unlock high-dimensional arenas!","Collect the golden geometric polyhedra scattered around the courtyard for extra bonus tokens.","Explore the grounds, learn the ancient theorems, and become a Master of Geometry Quest 3D!"],this.currentIndex=0,this.gameState.setMode("DIALOGUE"),this.show(),this.showLine(this.dialogueList[this.currentIndex])}showLine(e){if(!this.textEl)return;clearInterval(this.typeInterval),this.textEl.textContent="",this.isTyping=!0;let t=0;this.typeInterval=setInterval(()=>{t<e.length?(this.textEl.textContent+=e[t],t++):(clearInterval(this.typeInterval),this.isTyping=!1)},20)}advance(){if(this.isTyping){clearInterval(this.typeInterval),this.textEl.textContent=this.dialogueList[this.currentIndex],this.isTyping=!1;return}this.audioManager.playClick(),this.currentIndex++,this.currentIndex<this.dialogueList.length?this.showLine(this.dialogueList[this.currentIndex]):(this.hide(),this.gameState.setMode("EXPLORATION"),this.onComplete&&this.onComplete())}show(){var e;(e=this.boxEl)==null||e.classList.remove("hidden")}hide(){var e;clearInterval(this.typeInterval),(e=this.boxEl)==null||e.classList.add("hidden")}}class Kt{static render(e){if(!e||!e.type)return"";switch(e.type){case"angle":return Kt.renderAngle(e.value||90,e.label||"");case"triangle":return Kt.renderTriangle(e);case"right_triangle":case"pythagoras":return Kt.renderRightTriangle(e);case"rectangle":return Kt.renderRectangle(e);case"circle":return Kt.renderCircle(e);case"grid":return Kt.renderCoordinateGrid(e);case"solid":return Kt.render3DSolid(e.shape||"cube");case"complementary":return Kt.renderComplementary(e);case"supplementary":return Kt.renderSupplementary(e);default:return""}}static renderAngle(e,t){const n=e*Math.PI/180,i=80,s=80,a=130,o=s+i*Math.cos(n),c=a-i*Math.sin(n);return`
      <svg viewBox="0 0 260 160" width="220" height="130" xmlns="http://www.w3.org/2000/svg">
        <line x1="${s}" y1="${a}" x2="${s+120}" y2="${a}" stroke="#4cc9f0" stroke-width="4" stroke-linecap="round" />
        <line x1="${s}" y1="${a}" x2="${o}" y2="${c}" stroke="#f72585" stroke-width="4" stroke-linecap="round" />
        <circle cx="${s}" cy="${a}" r="5" fill="#ffb703" />
        ${e===90?`<polyline points="${s},${a-20} ${s+20},${a-20} ${s+20},${a}" fill="none" stroke="#2ec4b6" stroke-width="3" />`:`<path d="M ${s+30} ${a} A 30 30 0 0 0 ${s+30*Math.cos(n)} ${a-30*Math.sin(n)}" fill="none" stroke="#ffb703" stroke-width="3" />`}
        <text x="${s+40}" y="${a-35}" fill="#f8f9fa" font-size="16" font-weight="bold" font-family="sans-serif">${t||e+"°"}</text>
      </svg>
    `}static renderTriangle(e){return`
      <svg viewBox="0 0 240 160" width="220" height="140" xmlns="http://www.w3.org/2000/svg">
        <polygon points="120,25 35,135 205,135" fill="rgba(67, 97, 238, 0.25)" stroke="#4cc9f0" stroke-width="4" stroke-linejoin="round" />
        <circle cx="120" cy="25" r="4" fill="#ffb703" />
        <circle cx="35" cy="135" r="4" fill="#ffb703" />
        <circle cx="205" cy="135" r="4" fill="#ffb703" />
        <text x="120" y="18" fill="#f8f9fa" font-size="14" text-anchor="middle" font-weight="bold">${e.label||"A"}</text>
        <text x="20" y="145" fill="#f8f9fa" font-size="14" font-weight="bold">B</text>
        <text x="215" y="145" fill="#f8f9fa" font-size="14" font-weight="bold">C</text>
      </svg>
    `}static renderRightTriangle(e){const t=e.a||3,n=e.b||4,i=e.c||5;return`
      <svg viewBox="0 0 240 160" width="220" height="140" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,30 50,135 190,135" fill="rgba(247, 37, 133, 0.25)" stroke="#f72585" stroke-width="4" stroke-linejoin="round" />
        <!-- Right angle square -->
        <polyline points="50,115 70,115 70,135" fill="none" stroke="#2ec4b6" stroke-width="3" />
        <text x="25" y="85" fill="#4cc9f0" font-size="15" font-weight="bold">${t}</text>
        <text x="115" y="152" fill="#4cc9f0" font-size="15" font-weight="bold">${n}</text>
        <text x="130" y="75" fill="#ffb703" font-size="16" font-weight="bold">c = ${i}</text>
      </svg>
    `}static renderRectangle(e){return`
      <svg viewBox="0 0 240 150" width="220" height="130" xmlns="http://www.w3.org/2000/svg">
        <rect x="40" y="30" width="160" height="85" rx="4" fill="rgba(46, 196, 182, 0.2)" stroke="#2ec4b6" stroke-width="4" />
        <polyline points="40,45 55,45 55,30" fill="none" stroke="#ffb703" stroke-width="2" />
        <text x="120" y="22" fill="#f8f9fa" font-size="14" text-anchor="middle" font-weight="bold">Length (L)</text>
        <text x="208" y="78" fill="#f8f9fa" font-size="14" font-weight="bold">Width (W)</text>
      </svg>
    `}static renderCircle(e){return`
      <svg viewBox="0 0 220 160" width="200" height="140" xmlns="http://www.w3.org/2000/svg">
        <circle cx="110" cy="80" r="55" fill="rgba(217, 70, 239, 0.2)" stroke="#d946ef" stroke-width="4" />
        <circle cx="110" cy="80" r="4" fill="#ffb703" />
        <line x1="110" y1="80" x2="165" y2="80" stroke="#ffb703" stroke-width="3" stroke-dasharray="4,2" />
        <text x="135" y="74" fill="#ffb703" font-size="14" font-weight="bold">r</text>
        <text x="110" y="152" fill="#f8f9fa" font-size="13" text-anchor="middle" font-weight="bold">${e.label||"Circumference = 2πr"}</text>
      </svg>
    `}static renderCoordinateGrid(e){return`
      <svg viewBox="0 0 220 160" width="200" height="140" xmlns="http://www.w3.org/2000/svg">
        <!-- Grid lines -->
        <line x1="110" y1="10" x2="110" y2="150" stroke="#64748b" stroke-width="3" />
        <line x1="10" y1="80" x2="210" y2="80" stroke="#64748b" stroke-width="3" />
        <!-- Arrows -->
        <polygon points="110,6 106,14 114,14" fill="#64748b" />
        <polygon points="214,80 206,76 206,84" fill="#64748b" />
        <!-- Plotted point -->
        <circle cx="150" cy="45" r="5" fill="#f72585" />
        <text x="156" y="42" fill="#ffb703" font-size="13" font-weight="bold">P(x, y)</text>
        <text x="200" y="96" fill="#94a3b8" font-size="12">X</text>
        <text x="116" y="20" fill="#94a3b8" font-size="12">Y</text>
        <text x="96" y="96" fill="#94a3b8" font-size="12">(0,0)</text>
      </svg>
    `}static renderComplementary(e){return`
      <svg viewBox="0 0 220 150" width="200" height="130" xmlns="http://www.w3.org/2000/svg">
        <line x1="60" y1="120" x2="180" y2="120" stroke="#4cc9f0" stroke-width="4" />
        <line x1="60" y1="120" x2="60" y2="20" stroke="#4cc9f0" stroke-width="4" />
        <line x1="60" y1="120" x2="135" y2="45" stroke="#f72585" stroke-width="3" />
        <polyline points="60,105 75,105 75,120" fill="none" stroke="#2ec4b6" stroke-width="2" />
        <text x="95" y="110" fill="#ffb703" font-size="13" font-weight="bold">∠a</text>
        <text x="70" y="70" fill="#ffb703" font-size="13" font-weight="bold">∠b</text>
        <text x="120" y="20" fill="#f8f9fa" font-size="13" font-weight="bold">a + b = 90°</text>
      </svg>
    `}static renderSupplementary(e){return`
      <svg viewBox="0 0 240 140" width="220" height="120" xmlns="http://www.w3.org/2000/svg">
        <line x1="30" y1="100" x2="210" y2="100" stroke="#4cc9f0" stroke-width="4" />
        <line x1="120" y1="100" x2="80" y2="30" stroke="#f72585" stroke-width="4" />
        <circle cx="120" cy="100" r="4" fill="#ffb703" />
        <text x="65" y="90" fill="#ffb703" font-size="14" font-weight="bold">∠a</text>
        <text x="145" y="90" fill="#2ec4b6" font-size="14" font-weight="bold">∠b</text>
        <text x="120" y="20" fill="#f8f9fa" font-size="14" text-anchor="middle" font-weight="bold">a + b = 180°</text>
      </svg>
    `}static render3DSolid(e){return e==="cylinder"?`
        <svg viewBox="0 0 200 160" width="180" height="140" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="100" cy="35" rx="50" ry="18" fill="rgba(59, 130, 246, 0.3)" stroke="#3b82f6" stroke-width="3" />
          <path d="M 50 35 L 50 115 A 50 18 0 0 0 150 115 L 150 35" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" stroke-width="3" />
          <ellipse cx="100" cy="115" rx="50" ry="18" fill="none" stroke="#3b82f6" stroke-width="2" stroke-dasharray="4,3" />
          <text x="100" y="80" fill="#ffb703" font-size="14" text-anchor="middle" font-weight="bold">V = πr²h</text>
        </svg>
      `:e==="cone"?`
        <svg viewBox="0 0 200 160" width="180" height="140" xmlns="http://www.w3.org/2000/svg">
          <polygon points="100,20 50,120 150,120" fill="rgba(244, 63, 94, 0.2)" stroke="#f43f5e" stroke-width="3" />
          <ellipse cx="100" cy="120" rx="50" ry="16" fill="rgba(244, 63, 94, 0.3)" stroke="#f43f5e" stroke-width="3" />
          <text x="100" y="85" fill="#ffb703" font-size="13" text-anchor="middle" font-weight="bold">V = (1/3)πr²h</text>
        </svg>
      `:`
        <svg viewBox="0 0 200 160" width="180" height="140" xmlns="http://www.w3.org/2000/svg">
          <polygon points="100,20 155,50 100,80 45,50" fill="rgba(16, 185, 129, 0.3)" stroke="#10b981" stroke-width="3" />
          <polygon points="45,50 100,80 100,140 45,110" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" stroke-width="3" />
          <polygon points="155,50 100,80 100,140 155,110" fill="rgba(16, 185, 129, 0.4)" stroke="#10b981" stroke-width="3" />
          <text x="100" y="155" fill="#f8f9fa" font-size="13" text-anchor="middle" font-weight="bold">F:6, V:8, E:12</text>
        </svg>
      `}}class i_{constructor(e,t,n){this.quizEngine=e,this.gameState=t,this.audioManager=n,this.screenEl=document.getElementById("quiz-screen"),this.topicBadge=document.getElementById("quiz-topic-badge"),this.counterEl=document.getElementById("quiz-question-counter"),this.timerText=document.getElementById("quiz-timer-text"),this.timerBar=document.getElementById("quiz-timer-bar"),this.livesContainer=document.getElementById("quiz-lives-container"),this.comboBadge=document.getElementById("quiz-combo-badge"),this.questionText=document.getElementById("quiz-question-text"),this.diagramContainer=document.getElementById("quiz-diagram-container"),this.optionsGrid=document.getElementById("quiz-options-grid"),this.feedbackBar=document.getElementById("quiz-feedback-bar"),this.feedbackIcon=document.getElementById("feedback-icon"),this.feedbackTitle=document.getElementById("feedback-title"),this.feedbackExplanation=document.getElementById("feedback-explanation"),this.btnContinue=document.getElementById("btn-quiz-continue"),this.init()}init(){var e;(e=this.btnContinue)==null||e.addEventListener("click",()=>{this.audioManager.playClick(),this.feedbackBar.classList.add("hidden"),this.quizEngine.advanceNext()}),window.addEventListener("keydown",t=>{var i;if(this.gameState.mode!=="CHALLENGE")return;if(!this.feedbackBar.classList.contains("hidden")){(t.code==="Space"||t.code==="Enter")&&((i=this.btnContinue)==null||i.click());return}const n=t.key.toUpperCase();["1","A"].includes(n)?this.selectOption(0):["2","B"].includes(n)?this.selectOption(1):["3","C"].includes(n)?this.selectOption(2):["4","D"].includes(n)&&this.selectOption(3)}),this.quizEngine.onQuestionChange=t=>this.renderQuestion(t),this.quizEngine.onTick=(t,n)=>this.updateTimer(t,n),this.quizEngine.onAnswerFeedback=t=>this.renderFeedback(t)}renderQuestion(e){var n;const t=e.question;if(this.topicBadge&&(this.topicBadge.textContent=t.topic.replace("_"," ").toUpperCase()),this.counterEl&&(this.counterEl.textContent=`Question ${e.index+1} / ${e.total}`),this.questionText&&(this.questionText.textContent=t.question),this.diagramContainer&&(t.diagram?(this.diagramContainer.innerHTML=Kt.render(t.diagram),this.diagramContainer.classList.remove("hidden")):(this.diagramContainer.innerHTML="",this.diagramContainer.classList.add("hidden"))),this.renderLives(e.lives),this.comboBadge&&(e.combo>=2?(this.comboBadge.textContent=`COMBO x${e.combo>=5?3:2}! 🔥`,this.comboBadge.classList.remove("hidden")):this.comboBadge.classList.add("hidden")),this.optionsGrid){this.optionsGrid.innerHTML="";const i=["A","B","C","D"];t.options.forEach((s,a)=>{const o=document.createElement("button");o.className="option-btn",o.dataset.index=a,o.innerHTML=`
          <span class="opt-letter">${i[a]}</span>
          <span class="opt-text">${s}</span>
        `,o.addEventListener("click",()=>{this.selectOption(a)}),this.optionsGrid.appendChild(o)})}(n=this.feedbackBar)==null||n.classList.add("hidden"),this.updateTimer(30,30)}selectOption(e){this.quizEngine.isAnswered||this.quizEngine.submitAnswer(e)}renderFeedback(e){var n,i;const t=(n=this.optionsGrid)==null?void 0:n.querySelectorAll(".option-btn");t&&t.forEach((s,a)=>{s.disabled=!0,a===e.correctIndex?s.classList.add("correct"):a===e.selectedIndex&&s.classList.add("incorrect")}),this.renderLives(e.livesRemaining),this.feedbackIcon&&(this.feedbackIcon.textContent=e.isCorrect?"✅":"❌"),this.feedbackTitle&&(this.feedbackTitle.textContent=e.isCorrect?`CORRECT! +${e.earnedPoints} pts (+${e.xpEarned} XP)`:e.isTimeout?"TIME OUT!":"INCORRECT!",this.feedbackTitle.style.color=e.isCorrect?"#2ec4b6":"#e63946"),this.feedbackExplanation&&(this.feedbackExplanation.textContent=e.explanation),(i=this.feedbackBar)==null||i.classList.remove("hidden")}renderLives(e){if(!this.livesContainer)return;let t="";for(let n=0;n<3;n++)t+=n<e?'<span class="heart full">❤️</span>':'<span class="heart empty" style="filter: grayscale(1) opacity(0.35);">🖤</span>';this.livesContainer.innerHTML=t}updateTimer(e,t){if(this.timerText&&(this.timerText.textContent=`${e}s`),this.timerBar){const n=Math.max(0,Math.round(e/t*100));this.timerBar.style.width=`${n}%`}}show(){var e;(e=this.screenEl)==null||e.classList.remove("hidden")}hide(){var e;(e=this.screenEl)==null||e.classList.add("hidden")}}class s_{constructor(e,t,n){this.gameState=e,this.audioManager=t,this.onAction=n,this.screenEl=document.getElementById("results-screen"),this.titleEl=document.getElementById("results-title"),this.subtitleEl=document.getElementById("results-subtitle"),this.starsRow=document.getElementById("results-stars-row"),this.scoreVal=document.getElementById("res-score-value"),this.accuracyVal=document.getElementById("res-accuracy-value"),this.correctVal=document.getElementById("res-correct-value"),this.xpVal=document.getElementById("res-xp-value"),this.tokensVal=document.getElementById("res-tokens-value"),this.timeVal=document.getElementById("res-time-value"),this.btnRetry=document.getElementById("btn-res-retry"),this.btnTopics=document.getElementById("btn-res-topics"),this.btnContinue=document.getElementById("btn-res-continue"),this.lastResultData=null,this.init()}init(){var e,t,n;(e=this.btnRetry)==null||e.addEventListener("click",()=>{var i;this.audioManager.playClick(),this.onAction("retry",(i=this.lastResultData)==null?void 0:i.topicId)}),(t=this.btnTopics)==null||t.addEventListener("click",()=>{this.audioManager.playClick(),this.onAction("topics")}),(n=this.btnContinue)==null||n.addEventListener("click",()=>{this.audioManager.playClick(),this.onAction("explore")})}showResults(e,t=!1){if(this.lastResultData=e,t)this.titleEl&&(this.titleEl.textContent="CHALLENGE FAILED",this.titleEl.style.color="#e63946"),this.subtitleEl&&(this.subtitleEl.textContent="You ran out of lives! Review the theorems and try again."),this.starsRow&&(this.starsRow.innerHTML=`
          <span class="star-big star-empty">⭐</span>
          <span class="star-big star-empty">⭐</span>
          <span class="star-big star-empty">⭐</span>
        `),this.tokensVal&&(this.tokensVal.textContent="+0 🪙");else{if(this.titleEl&&(this.titleEl.textContent="CHALLENGE COMPLETE!",this.titleEl.style.color="#ffffff"),this.subtitleEl&&(this.subtitleEl.textContent=`You completed the ${e.topicId.replace("_"," ")} challenge!`),this.starsRow){let n="";for(let i=1;i<=3;i++)n+=`<span class="star-big ${i<=e.stars?"star-gold":"star-empty"}">⭐</span>`;this.starsRow.innerHTML=n}this.tokensVal&&(this.tokensVal.textContent=`+${e.tokensEarned} 🪙`)}this.scoreVal&&(this.scoreVal.textContent=e.score.toLocaleString()),this.accuracyVal&&(this.accuracyVal.textContent=`${e.accuracy}%`),this.correctVal&&(this.correctVal.textContent=`${e.correctCount} / ${e.totalQuestions}`),this.xpVal&&(this.xpVal.textContent=`+${e.xpEarned} XP`),this.timeVal&&(this.timeVal.textContent=`Combo x${e.maxCombo||1}`),this.show()}show(){var e;(e=this.screenEl)==null||e.classList.remove("hidden")}hide(){var e;(e=this.screenEl)==null||e.classList.add("hidden")}}class r_{constructor(e,t,n){this.gameState=e,this.audioManager=t,this.onAction=n,this.screenEl=document.getElementById("pause-screen"),this.btnResume=document.getElementById("btn-pause-resume"),this.btnTopics=document.getElementById("btn-pause-topics"),this.btnSettings=document.getElementById("btn-pause-settings"),this.btnMainMenu=document.getElementById("btn-pause-mainmenu"),this.init()}init(){var e,t,n,i;(e=this.btnResume)==null||e.addEventListener("click",()=>{this.audioManager.playClick(),this.onAction("resume")}),(t=this.btnTopics)==null||t.addEventListener("click",()=>{this.audioManager.playClick(),this.onAction("topics")}),(n=this.btnSettings)==null||n.addEventListener("click",()=>{this.audioManager.playClick(),this.onAction("settings")}),(i=this.btnMainMenu)==null||i.addEventListener("click",()=>{this.audioManager.playClick(),this.onAction("mainmenu")})}show(){var e;(e=this.screenEl)==null||e.classList.remove("hidden")}hide(){var e;(e=this.screenEl)==null||e.classList.add("hidden")}}class a_{constructor(e,t,n,i){this.gameState=e,this.audioManager=t,this.saveSystem=n,this.onClose=i,this.screenEl=document.getElementById("settings-screen"),this.btnClose=document.getElementById("btn-close-settings"),this.btnSave=document.getElementById("btn-save-settings"),this.btnReset=document.getElementById("btn-reset-save"),this.sliderBgm=document.getElementById("setting-bgm-volume"),this.sliderSfx=document.getElementById("setting-sfx-volume"),this.selectGraphics=document.getElementById("setting-graphics"),this.toggleHints=document.getElementById("setting-hints"),this.init()}init(){var e,t,n,i,s,a,o;(e=this.btnClose)==null||e.addEventListener("click",()=>{this.audioManager.playClick(),this.close()}),(t=this.btnSave)==null||t.addEventListener("click",()=>{this.audioManager.playClick(),this.close()}),(n=this.sliderBgm)==null||n.addEventListener("input",c=>{const l=parseFloat(c.target.value)/100;this.audioManager.setBgmVolume(l)}),(i=this.sliderSfx)==null||i.addEventListener("input",c=>{const l=parseFloat(c.target.value)/100;this.audioManager.setSfxVolume(l)}),(s=this.selectGraphics)==null||s.addEventListener("change",c=>{this.gameState.settings.graphicsQuality=c.target.value}),(a=this.toggleHints)==null||a.addEventListener("change",c=>{this.gameState.settings.showHints=c.target.checked;const l=document.querySelector(".hud-controls-helper");l&&(l.style.display=c.target.checked?"flex":"none")}),(o=this.btnReset)==null||o.addEventListener("click",()=>{window.confirm("Are you sure you want to reset all your stars, high scores, and progress?")&&(this.saveSystem.reset(),window.location.reload())})}syncUI(){this.sliderBgm&&(this.sliderBgm.value=Math.round(this.gameState.settings.bgmVolume*100)),this.sliderSfx&&(this.sliderSfx.value=Math.round(this.gameState.settings.sfxVolume*100)),this.selectGraphics&&(this.selectGraphics.value=this.gameState.settings.graphicsQuality||"medium"),this.toggleHints&&(this.toggleHints.checked=this.gameState.settings.showHints!==!1)}close(){this.hide(),this.onClose&&this.onClose()}show(){var e;this.syncUI(),(e=this.screenEl)==null||e.classList.remove("hidden")}hide(){var e;(e=this.screenEl)==null||e.classList.add("hidden")}}class o_{constructor(){this.container=document.getElementById("game-container"),this.clock=new Ig,this.prevTime=performance.now(),this.gameState=new Wg,this.saveSystem=new qg(this.gameState),this.audioManager=new Xg(this.gameState),this.assetManager=new R0,this.collisionSystem=new C0,this.questionManager=new $0,this.challengeManager=new Q0(this.questionManager,this.gameState,this.audioManager),this.initThree()}initThree(){this.scene=new ng,this.scene.background=new Se(988195),this.scene.fog=new eo(988195,.009),this.camera=new bt(60,window.innerWidth/window.innerHeight,.1,300),this.camera.position.set(0,5,20),this.renderer=new tg({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Wc,this.container.appendChild(this.renderer.domElement),window.addEventListener("resize",()=>this.onWindowResize())}async start(){this.saveSystem.init();const e=document.getElementById("loading-screen"),t=document.getElementById("loading-progress-bar"),n=document.getElementById("loading-percent-text"),i=document.getElementById("loading-status-text"),s=document.getElementById("btn-start-loaded");if(await this.assetManager.loadAll((a,o)=>{t&&(t.style.width=`${a}%`),n&&(n.textContent=`${a}%`),i&&(i.textContent=o)}),this.world=new P0(this.scene,this.collisionSystem,this.assetManager,this.audioManager),this.player=new N0(this.scene,this.assetManager,this.collisionSystem,this.audioManager),this.controller=new D0(this.camera),this.player.setController(this.controller),this.tpsCamera=new U0(this.camera,this.player,this.renderer.domElement),this.interactionManager=new F0(this.world,this.gameState,this.audioManager),this.initUI(),this.controller.onInteractCallback=()=>this.interactionManager.triggerInteraction(),this.controller.onPauseCallback=()=>this.togglePause(),this.controller.onTopicsCallback=()=>this.openTopicMenu(),i&&(i.textContent="Academy Ready!"),s){s.classList.remove("hidden");const a=()=>{this.audioManager.resume(),this.audioManager.startAmbientBgm(),e==null||e.classList.add("hidden"),this.mainMenu.show(),this.gameState.setMode(ut.MAIN_MENU)};s.addEventListener("click",a),e==null||e.addEventListener("click",o=>{s.classList.contains("hidden")||a()}),window.addEventListener("keydown",o=>{this.gameState.mode===ut.LOADING&&!s.classList.contains("hidden")&&["Space","Enter","KeyE"].includes(o.code)&&a()})}this.animate()}initUI(){var t,n;this.mainMenu=new J0(this.gameState,this.audioManager,i=>{var s;i==="play"||i==="continue"?this.enterExploration():i==="topics"?this.openTopicMenu():i==="howtoplay"?(s=document.getElementById("howtoplay-screen"))==null||s.classList.remove("hidden"):i==="settings"&&this.settingsScreen.show()}),(t=document.getElementById("btn-close-howtoplay"))==null||t.addEventListener("click",()=>{var i;this.audioManager.playClick(),(i=document.getElementById("howtoplay-screen"))==null||i.classList.add("hidden")}),(n=document.getElementById("btn-back-howtoplay"))==null||n.addEventListener("click",()=>{var i;this.audioManager.playClick(),(i=document.getElementById("howtoplay-screen"))==null||i.classList.add("hidden")}),this.hud=new e_(this.gameState,this.audioManager,i=>{i==="topics"?this.openTopicMenu():i==="pause"&&this.togglePause()}),this.topicMenu=new t_(this.questionManager,this.gameState,this.audioManager,i=>{this.topicMenu.hide(),this.teleportToTopicRoom(i),this.challengeManager.startChallenge(i)},()=>{this.gameState.mode===ut.MAIN_MENU?this.mainMenu.show():this.enterExploration()}),this.dialogueBox=new n_(this.gameState,this.audioManager,()=>{this.enterExploration()}),this.quizScreen=new i_(this.challengeManager.quizEngine,this.gameState,this.audioManager),this.resultsScreen=new s_(this.gameState,this.audioManager,(i,s)=>{this.resultsScreen.hide(),i==="retry"?this.challengeManager.startChallenge(s||"triangles"):i==="topics"?this.openTopicMenu():this.enterExploration()}),this.pauseMenu=new r_(this.gameState,this.audioManager,i=>{this.pauseMenu.hide(),i==="resume"?this.previousMode===ut.CHALLENGE?(this.gameState.setMode(ut.CHALLENGE),this.challengeManager.quizEngine.isAnswered||this.challengeManager.quizEngine.startTimer()):this.enterExploration():i==="topics"?(this.challengeManager.quizEngine.stopTimer(),this.quizScreen.hide(),this.openTopicMenu()):i==="settings"?this.settingsScreen.show():i==="mainmenu"&&(this.challengeManager.quizEngine.stopTimer(),this.hud.hide(),this.quizScreen.hide(),this.mainMenu.show(),this.gameState.setMode(ut.MAIN_MENU))}),this.settingsScreen=new a_(this.gameState,this.audioManager,this.saveSystem,()=>{this.gameState.mode===ut.PAUSED?this.pauseMenu.show():this.gameState.mode===ut.MAIN_MENU&&this.mainMenu.show()}),this.interactionManager.onInteractTriggered=i=>{i.type==="npc"?(this.hud.hide(),this.dialogueBox.startDialogue()):i.type==="terminal"&&(i.isUnlocked?(this.hud.hide(),this.challengeManager.startChallenge(i.topicId)):(this.hud.showToast(`🔒 ${i.topicName} is locked! Raise your level to unlock.`),this.audioManager.playWrong()))};const e=this.challengeManager.quizEngine;e.onChallengeComplete=i=>{this.quizScreen.hide(),this.resultsScreen.showResults(i,!1)},e.onGameOver=i=>{this.quizScreen.hide(),this.resultsScreen.showResults(i,!0)},this.gameState.on("modeChanged",({newMode:i})=>{i===ut.CHALLENGE&&(this.hud.hide(),this.quizScreen.show())})}enterExploration(){this.mainMenu.hide(),this.pauseMenu.hide(),this.resultsScreen.hide(),this.topicMenu.hide(),this.quizScreen.hide(),this.dialogueBox.hide(),this.hud.show(),this.gameState.setMode(ut.EXPLORATION)}togglePause(){this.gameState.mode===ut.EXPLORATION?(this.previousMode=ut.EXPLORATION,this.gameState.setMode(ut.PAUSED),this.pauseMenu.show()):this.gameState.mode===ut.CHALLENGE?(this.previousMode=ut.CHALLENGE,this.challengeManager.quizEngine.stopTimer(),this.gameState.setMode(ut.PAUSED),this.pauseMenu.show()):this.gameState.mode===ut.PAUSED&&(this.pauseMenu.hide(),this.previousMode===ut.CHALLENGE?(this.gameState.setMode(ut.CHALLENGE),this.challengeManager.quizEngine.isAnswered||this.challengeManager.quizEngine.startTimer()):this.enterExploration())}openTopicMenu(){this.mainMenu.hide(),this.pauseMenu.hide(),this.hud.hide(),this.topicMenu.show(),this.gameState.setMode(ut.TOPIC_SELECT)}teleportToTopicRoom(e){const n={lines_angles:{x:-36,z:-26},triangles:{x:0,z:-42},quadrilaterals:{x:36,z:-26},circles:{x:44,z:0},perimeter:{x:-44,z:0},area:{x:-44,z:32},surface_area:{x:-68,z:-18},volume:{x:-68,z:18},pythagoras:{x:-25,z:24},coordinates:{x:44,z:-32},symmetry:{x:44,z:32},shapes_3d:{x:68,z:0},mixed:{x:0,z:-76}}[e]||{x:0,z:10};this.player.teleport(new C(n.x,0,n.z)),this.tpsCamera.reset()}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}animate(){requestAnimationFrame(()=>this.animate());const e=Math.min(this.clock.getDelta(),.1),t=this.clock.getElapsedTime();this.gameState.mode===ut.EXPLORATION?(this.player.update(e,this.camera),this.tpsCamera.update(e,this.collisionSystem.colliders),this.world.update(e,t),this.interactionManager.update(this.player.position),this.world.checkCollectibles(this.player.position,n=>{this.gameState.addTokens(1),this.gameState.addXP(n.score),this.gameState.addScore(n.score*2),this.hud.showToast(`+1 Token! (+${n.score} XP)`)}),this.updatePlayerLocationBanner()):this.world.update(e,t),this.renderer.render(this.scene,this.camera)}updatePlayerLocationBanner(){const e=this.player.position;let t="Central Courtyard";e.z<-65?t="Grand Master Arena":e.z<-35&&Math.abs(e.x)<14?t="Triangle Domain":e.x<-20&&e.z<-18?t="Lines & Angles Pavilion":e.x>20&&e.z<-18?t="Quadrilateral Hall":e.x>38&&Math.abs(e.z)<18?t="Circle Sanctuary":e.x<-38&&Math.abs(e.z)<18?t="Perimeter Chamber":e.x<-38&&e.z>18?t="Area Laboratory":e.x<-15&&e.z>18?t="Pythagorean Temple":e.x>15&&e.z>18?t="Geometry Classroom":e.z>40&&(t="Main Entrance Arch"),this.gameState.currentRoom!==t&&(this.gameState.currentRoom=t,this.hud.setLocation(t))}}window.addEventListener("DOMContentLoaded",()=>{new o_().start().catch(e=>{console.error("Fatal initialization error in Geometry Quest 3D:",e)})});
