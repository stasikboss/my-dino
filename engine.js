/*! Engine for My Dino. Includes three.js (https://threejs.org), Copyright 2010-2025 Three.js Authors, MIT License: https://github.com/mrdoob/three.js/blob/dev/LICENSE */
(()=>{var Qu=0,Vc=1,ef=2;var xs=1,tf=2,rr=3,Cn=0,Xt=1,Rt=2,ui=0,ar=1,Wc=2,Xc=3,qc=4,nf=5;var _s=100,sf=101,rf=102,af=103,of=104,lf=200,cf=201,hf=202,uf=203,Yc=204,Zc=205,ff=206,df=207,pf=208,mf=209,gf=210,xf=211,_f=212,yf=213,vf=214,ho=0,uo=1,fo=2,Ys=3,po=4,mo=5,go=6,xo=7,Yo=0,Mf=1,Sf=2,Vn=0,Jc=1,$c=2,Kc=3,jc=4,Qc=5,eh=6,la=7;var th=300,es=301,ys=302,Zo=303,Jo=304,ca=306,Wi=1e3,ti=1001,_o=1002,nn=1003,bf=1004;var ha=1005;var rn=1006,$o=1007;var ts=1008;var vn=1009,nh=1010,ih=1011,or=1012,Ko=1013,Wn=1014,Un=1015,Xn=1016,jo=1017,Qo=1018,lr=1020,sh=35902,rh=35899,ah=1021,oh=1022,Fn=1023,ii=1026,ns=1027,el=1028,tl=1029,is=1030,nl=1031;var il=1033,ua=33776,fa=33777,da=33778,pa=33779,sl=35840,rl=35841,al=35842,ol=35843,ll=36196,cl=37492,hl=37496,ul=37488,fl=37489,ma=37490,dl=37491,pl=37808,ml=37809,gl=37810,xl=37811,_l=37812,yl=37813,vl=37814,Ml=37815,Sl=37816,bl=37817,El=37818,wl=37819,Tl=37820,Al=37821,Rl=36492,Cl=36494,Il=36495,Pl=36283,Ll=36284,ga=36285,Dl=36286;var Dr=2300,yo=2301,lo=2302,Ic=2303,Pc=2400,Lc=2401,Dc=2402;var Ef=3200;var xa=0,wf=1,qn="",$t="srgb",Nr="srgb-linear",Ur="linear",Mt="srgb";var co=7680;var Tf=519,Af=512,Rf=513,Cf=514,Nl=515,If=516,Pf=517,Ul=518,Lf=519,lh=35044;var ch="300 es",Gn=2e3,Zs=2001;function lp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function cp(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Fr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Df(){let n=Fr("canvas");return n.style.display="block",n}var vu={},Js=null;function Or(...n){let e="THREE."+n.shift();Js?Js("log",e,...n):console.log(e,...n)}function Nf(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function qe(...n){n=Nf(n);let e="THREE."+n.shift();if(Js)Js("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Xe(...n){n=Nf(n);let e="THREE."+n.shift();if(Js)Js("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function fs(...n){let e=n.join(" ");e in vu||(vu[e]=!0,qe(...n))}function Uf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Ff={[ho]:uo,[fo]:go,[po]:xo,[Ys]:mo,[uo]:ho,[go]:fo,[xo]:po,[mo]:Ys},si=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ic=Math.PI/180,vo=180/Math.PI;function Ti(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]).toLowerCase()}function it(n,e,t){return Math.max(e,Math.min(t,n))}function hp(n,e){return(n%e+e)%e}function sc(n,e,t){return(1-t)*n+t*e}function ei(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function wt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var mh=class mh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};mh.prototype.isVector2=!0;var ue=mh,ri=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],f=r[a+0],m=r[a+1],x=r[a+2],_=r[a+3];if(u!==_||l!==f||c!==m||h!==x){let p=l*f+c*m+h*x+u*_;p<0&&(f=-f,m=-m,x=-x,_=-_,p=-p);let d=1-o;if(p<.9995){let S=Math.acos(p),T=Math.sin(S);d=Math.sin(d*S)/T,o=Math.sin(o*S)/T,l=l*d+f*o,c=c*d+m*o,h=h*d+x*o,u=u*d+_*o}else{l=l*d+f*o,c=c*d+m*o,h=h*d+x*o,u=u*d+_*o;let S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[a],f=r[a+1],m=r[a+2],x=r[a+3];return e[t]=o*x+h*u+l*m-c*f,e[t+1]=l*x+h*f+c*u-o*m,e[t+2]=c*x+h*m+o*f-l*u,e[t+3]=h*x-o*u-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),u=o(r/2),f=l(i/2),m=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*m*x,this._y=c*m*u-f*h*x,this._z=c*h*x+f*m*u,this._w=c*h*u-f*m*x;break;case"YXZ":this._x=f*h*u+c*m*x,this._y=c*m*u-f*h*x,this._z=c*h*x-f*m*u,this._w=c*h*u+f*m*x;break;case"ZXY":this._x=f*h*u-c*m*x,this._y=c*m*u+f*h*x,this._z=c*h*x+f*m*u,this._w=c*h*u-f*m*x;break;case"ZYX":this._x=f*h*u-c*m*x,this._y=c*m*u+f*h*x,this._z=c*h*x-f*m*u,this._w=c*h*u+f*m*x;break;case"YZX":this._x=f*h*u+c*m*x,this._y=c*m*u+f*h*x,this._z=c*h*x-f*m*u,this._w=c*h*u-f*m*x;break;case"XZY":this._x=f*h*u-c*m*x,this._y=c*m*u-f*h*x,this._z=c*h*x+f*m*u,this._w=c*h*u+f*m*x;break;default:qe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=i+o+u;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(i>o&&i>u){let m=2*Math.sqrt(1+i-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>u){let m=2*Math.sqrt(1+o-i-u);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+u-i-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},gh=class gh{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return rc.copy(this).projectOnVector(e),this.sub(rc)}reflect(e){return this.sub(rc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};gh.prototype.isVector3=!0;var L=gh,rc=new L,Mu=new ri,xh=class xh{constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],m=i[5],x=i[8],_=s[0],p=s[3],d=s[6],S=s[1],T=s[4],y=s[7],w=s[2],M=s[5],C=s[8];return r[0]=a*_+o*S+l*w,r[3]=a*p+o*T+l*M,r[6]=a*d+o*y+l*C,r[1]=c*_+h*S+u*w,r[4]=c*p+h*T+u*M,r[7]=c*d+h*y+u*C,r[2]=f*_+m*S+x*w,r[5]=f*p+m*T+x*M,r[8]=f*d+m*y+x*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,m=c*r-a*l,x=t*u+i*f+s*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/x;return e[0]=u*_,e[1]=(s*c-h*i)*_,e[2]=(o*i-s*a)*_,e[3]=f*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=m*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return fs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ac.makeScale(e,t)),this}rotate(e){return fs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ac.makeRotation(-e)),this}translate(e,t){return fs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ac.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};xh.prototype.isMatrix3=!0;var $e=xh,ac=new $e,Su=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bu=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function up(){let n={enabled:!0,workingColorSpace:Nr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Mt&&(s.r=Ai(s.r),s.g=Ai(s.g),s.b=Ai(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Mt&&(s.r=qs(s.r),s.g=qs(s.g),s.b=qs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===qn?Ur:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return fs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return fs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Nr]:{primaries:e,whitePoint:i,transfer:Ur,toXYZ:Su,fromXYZ:bu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:$t},outputColorSpaceConfig:{drawingBufferColorSpace:$t}},[$t]:{primaries:e,whitePoint:i,transfer:Mt,toXYZ:Su,fromXYZ:bu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:$t}}}),n}var ct=up();function Ai(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function qs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Rs,Mo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Rs===void 0&&(Rs=Fr("canvas")),Rs.width=e.width,Rs.height=e.height;let s=Rs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Rs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Fr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ai(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ai(t[i]/255)*255):t[i]=Ai(t[i]);return{data:t,width:e.width,height:e.height}}else return qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},fp=0,$s=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=Ti(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(oc(s[a].image)):r.push(oc(s[a]))}else r=oc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function oc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Mo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(qe("Texture: Unable to serialize Texture."),{})}var dp=0,lc=new L,mn=class n extends si{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=ti,s=ti,r=rn,a=ts,o=Fn,l=vn,c=n.DEFAULT_ANISOTROPY,h=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=Ti(),this.name="",this.source=new $s(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(lc).x}get height(){return this.source.getSize(lc).y}get depth(){return this.source.getSize(lc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){qe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==th)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wi:e.x=e.x-Math.floor(e.x);break;case ti:e.x=e.x<0?0:1;break;case _o:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wi:e.y=e.y-Math.floor(e.y);break;case ti:e.y=e.y<0?0:1;break;case _o:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=th;mn.DEFAULT_ANISOTROPY=1;var _h=class _h{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],m=l[5],x=l[9],_=l[2],p=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(x-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(x+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(c+1)/2,y=(m+1)/2,w=(d+1)/2,M=(h+f)/4,C=(u+_)/4,v=(x+p)/4;return T>y&&T>w?T<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(T),s=M/i,r=C/i):y>w?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=M/s,r=v/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=C/r,s=v/r),this.set(i,s,r,t),this}let S=Math.sqrt((p-x)*(p-x)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(p-x)/S,this.y=(u-_)/S,this.z=(f-h)/S,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};_h.prototype.isVector4=!0;var Dt=_h,So=class extends si{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new mn(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new $s(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},yn=class extends So{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Br=class extends mn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var bo=class extends mn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var qo=class qo{constructor(e,t,i,s,r,a,o,l,c,h,u,f,m,x,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,u,f,m,x,_,p)}set(e,t,i,s,r,a,o,l,c,h,u,f,m,x,_,p){let d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=m,d[7]=x,d[11]=_,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qo().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Cs.setFromMatrixColumn(e,0).length(),r=1/Cs.setFromMatrixColumn(e,1).length(),a=1/Cs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=a*h,m=a*u,x=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+x*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=x+m*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*h,m=l*u,x=c*h,_=c*u;t[0]=f+_*o,t[4]=x*o-m,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=m*o-x,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*h,m=l*u,x=c*h,_=c*u;t[0]=f-_*o,t[4]=-a*u,t[8]=x+m*o,t[1]=m+x*o,t[5]=a*h,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*h,m=a*u,x=o*h,_=o*u;t[0]=l*h,t[4]=x*c-m,t[8]=f*c+_,t[1]=l*u,t[5]=_*c+f,t[9]=m*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,m=a*c,x=o*l,_=o*c;t[0]=l*h,t[4]=_-f*u,t[8]=x*u+m,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*u+x,t[10]=f-_*u}else if(e.order==="XZY"){let f=a*l,m=a*c,x=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+_,t[5]=a*h,t[9]=m*u-x,t[2]=x*u-m,t[6]=o*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pp,e,mp)}lookAt(e,t,i){let s=this.elements;return En.subVectors(e,t),En.lengthSq()===0&&(En.z=1),En.normalize(),Hi.crossVectors(i,En),Hi.lengthSq()===0&&(Math.abs(i.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),Hi.crossVectors(i,En)),Hi.normalize(),Oa.crossVectors(En,Hi),s[0]=Hi.x,s[4]=Oa.x,s[8]=En.x,s[1]=Hi.y,s[5]=Oa.y,s[9]=En.y,s[2]=Hi.z,s[6]=Oa.z,s[10]=En.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],m=i[13],x=i[2],_=i[6],p=i[10],d=i[14],S=i[3],T=i[7],y=i[11],w=i[15],M=s[0],C=s[4],v=s[8],R=s[12],P=s[1],U=s[5],D=s[9],H=s[13],N=s[2],k=s[6],O=s[10],V=s[14],ee=s[3],J=s[7],ie=s[11],le=s[15];return r[0]=a*M+o*P+l*N+c*ee,r[4]=a*C+o*U+l*k+c*J,r[8]=a*v+o*D+l*O+c*ie,r[12]=a*R+o*H+l*V+c*le,r[1]=h*M+u*P+f*N+m*ee,r[5]=h*C+u*U+f*k+m*J,r[9]=h*v+u*D+f*O+m*ie,r[13]=h*R+u*H+f*V+m*le,r[2]=x*M+_*P+p*N+d*ee,r[6]=x*C+_*U+p*k+d*J,r[10]=x*v+_*D+p*O+d*ie,r[14]=x*R+_*H+p*V+d*le,r[3]=S*M+T*P+y*N+w*ee,r[7]=S*C+T*U+y*k+w*J,r[11]=S*v+T*D+y*O+w*ie,r[15]=S*R+T*H+y*V+w*le,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],m=e[14],x=e[3],_=e[7],p=e[11],d=e[15],S=l*m-c*f,T=o*m-c*u,y=o*f-l*u,w=a*m-c*h,M=a*f-l*h,C=a*u-o*h;return t*(_*S-p*T+d*y)-i*(x*S-p*w+d*M)+s*(x*T-_*w+d*C)-r*(x*y-_*M+p*C)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-i*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],m=e[11],x=e[12],_=e[13],p=e[14],d=e[15],S=t*o-i*a,T=t*l-s*a,y=t*c-r*a,w=i*l-s*o,M=i*c-r*o,C=s*c-r*l,v=h*_-u*x,R=h*p-f*x,P=h*d-m*x,U=u*p-f*_,D=u*d-m*_,H=f*d-m*p,N=S*H-T*D+y*U+w*P-M*R+C*v;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/N;return e[0]=(o*H-l*D+c*U)*k,e[1]=(s*D-i*H-r*U)*k,e[2]=(_*C-p*M+d*w)*k,e[3]=(f*M-u*C-m*w)*k,e[4]=(l*P-a*H-c*R)*k,e[5]=(t*H-s*P+r*R)*k,e[6]=(p*y-x*C-d*T)*k,e[7]=(h*C-f*y+m*T)*k,e[8]=(a*D-o*P+c*v)*k,e[9]=(i*P-t*D-r*v)*k,e[10]=(x*M-_*y+d*S)*k,e[11]=(u*y-h*M-m*S)*k,e[12]=(o*R-a*U-l*v)*k,e[13]=(t*U-i*R+s*v)*k,e[14]=(_*T-x*w-p*S)*k,e[15]=(h*w-u*T+f*S)*k,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,f=r*c,m=r*h,x=r*u,_=a*h,p=a*u,d=o*u,S=l*c,T=l*h,y=l*u,w=i.x,M=i.y,C=i.z;return s[0]=(1-(_+d))*w,s[1]=(m+y)*w,s[2]=(x-T)*w,s[3]=0,s[4]=(m-y)*M,s[5]=(1-(f+d))*M,s[6]=(p+S)*M,s[7]=0,s[8]=(x+T)*C,s[9]=(p-S)*C,s[10]=(1-(f+_))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=Cs.set(s[0],s[1],s[2]).length(),o=Cs.set(s[4],s[5],s[6]).length(),l=Cs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Hn.copy(this);let c=1/a,h=1/o,u=1/l;return Hn.elements[0]*=c,Hn.elements[1]*=c,Hn.elements[2]*=c,Hn.elements[4]*=h,Hn.elements[5]*=h,Hn.elements[6]*=h,Hn.elements[8]*=u,Hn.elements[9]*=u,Hn.elements[10]*=u,t.setFromRotationMatrix(Hn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=Gn,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(i-s),f=(t+e)/(t-e),m=(i+s)/(i-s),x,_;if(l)x=r/(a-r),_=a*r/(a-r);else if(o===Gn)x=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Zs)x=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Gn,l=!1){let c=this.elements,h=2/(t-e),u=2/(i-s),f=-(t+e)/(t-e),m=-(i+s)/(i-s),x,_;if(l)x=1/(a-r),_=a/(a-r);else if(o===Gn)x=-2/(a-r),_=-(a+r)/(a-r);else if(o===Zs)x=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=x,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};qo.prototype.isMatrix4=!0;var mt=qo,Cs=new L,Hn=new mt,pp=new L(0,0,0),mp=new L(1,1,1),Hi=new L,Oa=new L,En=new L,Eu=new mt,wu=new ri,ai=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-it(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(it(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Eu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Eu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wu.setFromEuler(this),this.setFromQuaternion(wu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ai.DEFAULT_ORDER="XYZ";var Ks=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},gp=0,Tu=new L,Is=new ri,vi=new mt,Ba=new L,Mr=new L,xp=new L,_p=new ri,Au=new L(1,0,0),Ru=new L(0,1,0),Cu=new L(0,0,1),Iu={type:"added"},yp={type:"removed"},Ps={type:"childadded",child:null},cc={type:"childremoved",child:null},Kt=class n extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=Ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new L,t=new ai,i=new ri,s=new L(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new mt},normalMatrix:{value:new $e}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ks,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Is.setFromAxisAngle(e,t),this.quaternion.multiply(Is),this}rotateOnWorldAxis(e,t){return Is.setFromAxisAngle(e,t),this.quaternion.premultiply(Is),this}rotateX(e){return this.rotateOnAxis(Au,e)}rotateY(e){return this.rotateOnAxis(Ru,e)}rotateZ(e){return this.rotateOnAxis(Cu,e)}translateOnAxis(e,t){return Tu.copy(e).applyQuaternion(this.quaternion),this.position.add(Tu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Au,e)}translateY(e){return this.translateOnAxis(Ru,e)}translateZ(e){return this.translateOnAxis(Cu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ba.copy(e):Ba.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(Mr,Ba,this.up):vi.lookAt(Ba,Mr,this.up),this.quaternion.setFromRotationMatrix(vi),s&&(vi.extractRotation(s.matrixWorld),Is.setFromRotationMatrix(vi),this.quaternion.premultiply(Is.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Xe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Iu),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yp),cc.child=e,this.dispatchEvent(cc),cc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Iu),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,e,xp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,_p,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Kt.DEFAULT_UP=new L(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ce=class extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}},vp={type:"move"},js=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ce,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ce,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ce,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let p=t.getJointPose(_,i),d=this._getHandJoint(c,_);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,x=.005;c.inputState.pinching&&f>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(vp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ce;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Of={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},Ha={h:0,s:0,l:0};function hc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ge=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,ct.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ct.workingColorSpace){if(e=hp(e,1),t=it(t,0,1),i=it(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=hc(a,r,e+1/3),this.g=hc(a,r,e),this.b=hc(a,r,e-1/3)}return ct.colorSpaceToWorking(this,s),this}setStyle(e,t=$t){function i(r){r!==void 0&&parseFloat(r)<1&&qe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:qe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$t){let i=Of[e.toLowerCase()];return i!==void 0?this.setHex(i,t):qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}copyLinearToSRGB(e){return this.r=qs(e.r),this.g=qs(e.g),this.b=qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$t){return ct.workingToColorSpace(hn.copy(this),e),Math.round(it(hn.r*255,0,255))*65536+Math.round(it(hn.g*255,0,255))*256+Math.round(it(hn.b*255,0,255))}getHexString(e=$t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(hn.copy(this),t);let i=hn.r,s=hn.g,r=hn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=$t){ct.workingToColorSpace(hn.copy(this),e);let t=hn.r,i=hn.g,s=hn.b;return e!==$t?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+t,zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(zi),e.getHSL(Ha);let i=sc(zi.h,Ha.h,t),s=sc(zi.s,Ha.s,t),r=sc(zi.l,Ha.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new ge;ge.NAMES=Of;var Xi=class extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ai,this.environmentIntensity=1,this.environmentRotation=new ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},zn=new L,Mi=new L,uc=new L,Si=new L,Ls=new L,Ds=new L,Pu=new L,fc=new L,dc=new L,pc=new L,mc=new Dt,gc=new Dt,xc=new Dt,wi=class n{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),zn.subVectors(e,t),s.cross(zn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){zn.subVectors(s,t),Mi.subVectors(i,t),uc.subVectors(e,t);let a=zn.dot(zn),o=zn.dot(Mi),l=zn.dot(uc),c=Mi.dot(Mi),h=Mi.dot(uc),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,m=(c*l-o*h)*f,x=(a*h-o*l)*f;return r.set(1-m-x,x,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Si.x),l.addScaledVector(a,Si.y),l.addScaledVector(o,Si.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return mc.setScalar(0),gc.setScalar(0),xc.setScalar(0),mc.fromBufferAttribute(e,t),gc.fromBufferAttribute(e,i),xc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(mc,r.x),a.addScaledVector(gc,r.y),a.addScaledVector(xc,r.z),a}static isFrontFacing(e,t,i,s){return zn.subVectors(i,t),Mi.subVectors(e,t),zn.cross(Mi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),zn.cross(Mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Ls.subVectors(s,i),Ds.subVectors(r,i),fc.subVectors(e,i);let l=Ls.dot(fc),c=Ds.dot(fc);if(l<=0&&c<=0)return t.copy(i);dc.subVectors(e,s);let h=Ls.dot(dc),u=Ds.dot(dc);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Ls,a);pc.subVectors(e,r);let m=Ls.dot(pc),x=Ds.dot(pc);if(x>=0&&m<=x)return t.copy(r);let _=m*c-l*x;if(_<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(i).addScaledVector(Ds,o);let p=h*x-m*u;if(p<=0&&u-h>=0&&m-x>=0)return Pu.subVectors(r,s),o=(u-h)/(u-h+(m-x)),t.copy(s).addScaledVector(Pu,o);let d=1/(p+_+f);return a=_*d,o=f*d,t.copy(i).addScaledVector(Ls,a).addScaledVector(Ds,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},sn=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,kn):kn.fromBufferAttribute(r,a),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),za.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),za.copy(i.boundingBox)),za.applyMatrix4(e.matrixWorld),this.union(za)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sr),ka.subVectors(this.max,Sr),Ns.subVectors(e.a,Sr),Us.subVectors(e.b,Sr),Fs.subVectors(e.c,Sr),ki.subVectors(Us,Ns),Gi.subVectors(Fs,Us),ls.subVectors(Ns,Fs);let t=[0,-ki.z,ki.y,0,-Gi.z,Gi.y,0,-ls.z,ls.y,ki.z,0,-ki.x,Gi.z,0,-Gi.x,ls.z,0,-ls.x,-ki.y,ki.x,0,-Gi.y,Gi.x,0,-ls.y,ls.x,0];return!_c(t,Ns,Us,Fs,ka)||(t=[1,0,0,0,1,0,0,0,1],!_c(t,Ns,Us,Fs,ka))?!1:(Ga.crossVectors(ki,Gi),t=[Ga.x,Ga.y,Ga.z],_c(t,Ns,Us,Fs,ka))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},bi=[new L,new L,new L,new L,new L,new L,new L,new L],kn=new L,za=new sn,Ns=new L,Us=new L,Fs=new L,ki=new L,Gi=new L,ls=new L,Sr=new L,ka=new L,Ga=new L,cs=new L;function _c(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){cs.fromArray(n,r);let o=s.x*Math.abs(cs.x)+s.y*Math.abs(cs.y)+s.z*Math.abs(cs.z),l=e.dot(cs),c=t.dot(cs),h=i.dot(cs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Zt=new L,Va=new ue,Mp=0,_n=class extends si{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Mp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=lh,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Va.fromBufferAttribute(this,t),Va.applyMatrix3(e),this.setXY(t,Va.x,Va.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ei(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=wt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ei(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ei(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ei(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ei(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),s=wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),s=wt(s,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Hr=class extends _n{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var zr=class extends _n{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var st=class extends _n{constructor(e,t,i){super(new Float32Array(e),t,i)}},Sp=new sn,br=new L,yc=new L,qi=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Sp.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;br.subVectors(e,this.center);let t=br.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(br,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(br.copy(e.center).add(yc)),this.expandByPoint(br.copy(e.center).sub(yc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},bp=0,Ln=new mt,vc=new Kt,Os=new L,wn=new sn,Er=new sn,en=new L,Ft=class n extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=Ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lp(e)?zr:Hr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new $e().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,t,i){return Ln.makeTranslation(e,t,i),this.applyMatrix4(Ln),this}scale(e,t,i){return Ln.makeScale(e,t,i),this.applyMatrix4(Ln),this}lookAt(e){return vc.lookAt(e),vc.updateMatrix(),this.applyMatrix4(vc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new st(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];wn.setFromBufferAttribute(r),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let i=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Er.setFromBufferAttribute(o),this.morphTargetsRelative?(en.addVectors(wn.min,Er.min),wn.expandByPoint(en),en.addVectors(wn.max,Er.max),wn.expandByPoint(en)):(wn.expandByPoint(Er.min),wn.expandByPoint(Er.max))}wn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)en.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(en));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)en.fromBufferAttribute(o,c),l&&(Os.fromBufferAttribute(e,c),en.add(Os)),s=Math.max(s,i.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new _n(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let v=0;v<i.count;v++)o[v]=new L,l[v]=new L;let c=new L,h=new L,u=new L,f=new ue,m=new ue,x=new ue,_=new L,p=new L;function d(v,R,P){c.fromBufferAttribute(i,v),h.fromBufferAttribute(i,R),u.fromBufferAttribute(i,P),f.fromBufferAttribute(r,v),m.fromBufferAttribute(r,R),x.fromBufferAttribute(r,P),h.sub(c),u.sub(c),m.sub(f),x.sub(f);let U=1/(m.x*x.y-x.x*m.y);isFinite(U)&&(_.copy(h).multiplyScalar(x.y).addScaledVector(u,-m.y).multiplyScalar(U),p.copy(u).multiplyScalar(m.x).addScaledVector(h,-x.x).multiplyScalar(U),o[v].add(_),o[R].add(_),o[P].add(_),l[v].add(p),l[R].add(p),l[P].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let v=0,R=S.length;v<R;++v){let P=S[v],U=P.start,D=P.count;for(let H=U,N=U+D;H<N;H+=3)d(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let T=new L,y=new L,w=new L,M=new L;function C(v){w.fromBufferAttribute(s,v),M.copy(w);let R=o[v];T.copy(R),T.sub(w.multiplyScalar(w.dot(R))).normalize(),y.crossVectors(M,R);let U=y.dot(l[v])<0?-1:1;a.setXYZW(v,T.x,T.y,T.z,U)}for(let v=0,R=S.length;v<R;++v){let P=S[v],U=P.start,D=P.count;for(let H=U,N=U+D;H<N;H+=3)C(e.getX(H+0)),C(e.getX(H+1)),C(e.getX(H+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new _n(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);let s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,u=new L;if(e)for(let f=0,m=e.count;f<m;f+=3){let x=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),o.add(h),l.add(h),c.add(h),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)en.fromBufferAttribute(e,t),en.normalize(),e.setXYZ(t,en.x,en.y,en.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),m=0,x=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*h;for(let d=0;d<h;d++)f[x++]=c[m++]}return new _n(f,h,u)}if(this.index===null)return qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],m=e(f,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Eo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=lh,this.updateRanges=[],this.version=0,this.uuid=Ti()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},pn=new L,kr=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix4(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)pn.fromBufferAttribute(this,t),pn.applyNormalMatrix(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)pn.fromBufferAttribute(this,t),pn.transformDirection(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ei(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=wt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ei(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ei(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ei(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ei(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),s=wt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),s=wt(s,this.array),r=wt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Or("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new _n(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Or("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Mc=new L,Ep=new L,wp=new $e,xn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Mc.subVectors(i,t).cross(Ep.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Mc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||wp.getNormalMatrix(e),s=this.coplanarPoint(Mc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Tp=0,oi=class extends si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=Ti(),this.name="",this.type="Material",this.blending=ar,this.side=Cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yc,this.blendDst=Zc,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ge(0,0,0),this.blendAlpha=0,this.depthFunc=Ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=co,this.stencilZFail=co,this.stencilZPass=co,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){qe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ge().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new xn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ue().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ue().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ri=class extends oi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Bs,wr=new L,Hs=new L,zs=new L,ks=new ue,Tr=new ue,Bf=new mt,Wa=new L,Ar=new L,Xa=new L,Lu=new ue,Sc=new ue,Du=new ue,Yi=class extends Kt{constructor(e=new Ri){if(super(),this.isSprite=!0,this.type="Sprite",Bs===void 0){Bs=new Ft;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Eo(t,5);Bs.setIndex([0,1,2,0,2,3]),Bs.setAttribute("position",new kr(i,3,0,!1)),Bs.setAttribute("uv",new kr(i,2,3,!1))}this.geometry=Bs,this.material=e,this.center=new ue(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Xe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hs.setFromMatrixScale(this.matrixWorld),Bf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),zs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hs.multiplyScalar(-zs.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;qa(Wa.set(-.5,-.5,0),zs,a,Hs,s,r),qa(Ar.set(.5,-.5,0),zs,a,Hs,s,r),qa(Xa.set(.5,.5,0),zs,a,Hs,s,r),Lu.set(0,0),Sc.set(1,0),Du.set(1,1);let o=e.ray.intersectTriangle(Wa,Ar,Xa,!1,wr);if(o===null&&(qa(Ar.set(-.5,.5,0),zs,a,Hs,s,r),Sc.set(0,1),o=e.ray.intersectTriangle(Wa,Xa,Ar,!1,wr),o===null))return;let l=e.ray.origin.distanceTo(wr);l<e.near||l>e.far||t.push({distance:l,point:wr.clone(),uv:wi.getInterpolation(wr,Wa,Ar,Xa,Lu,Sc,Du,new ue),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function qa(n,e,t,i,s,r){ks.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Tr.x=r*ks.x-s*ks.y,Tr.y=s*ks.x+r*ks.y):Tr.copy(ks),n.copy(e),n.x+=Tr.x,n.y+=Tr.y,n.applyMatrix4(Bf)}var Ei=new L,bc=new L,Ya=new L,Za=new L,Gr=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ei.copy(this.origin).addScaledVector(this.direction,t),Ei.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){bc.copy(e).add(t).multiplyScalar(.5),Ya.copy(t).sub(e).normalize(),Za.copy(this.origin).sub(bc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ya),o=Za.dot(this.direction),l=-Za.dot(Ya),c=Za.lengthSq(),h=Math.abs(1-a*a),u,f,m,x;if(h>0)if(u=a*l-o,f=a*o-l,x=r*h,u>=0)if(f>=-x)if(f<=x){let _=1/h;u*=_,f*=_,m=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*l)+c;else f<=-x?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c):f<=x?(u=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(bc).addScaledVector(Ya,f),m}intersectSphere(e,t){if(e.radius<0)return null;Ei.subVectors(e.center,this.origin);let i=Ei.dot(this.direction),s=Ei.dot(Ei)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ei)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,f=e.y-a.y,m=e.z-a.z,x=t.x-a.x,_=t.y-a.y,p=t.z-a.z,d=i.x-a.x,S=i.y-a.y,T=i.z-a.z,y=Math.abs(l),w=Math.abs(c),M=Math.abs(h),C,v,R,P,U,D,H,N,k,O,V,ee;if(y>=w&&y>=M?(R=l,D=u,k=x,ee=d,l>=0?(C=c,v=h,P=f,U=m,H=_,N=p,O=S,V=T):(C=h,v=c,P=m,U=f,H=p,N=_,O=T,V=S)):w>=M?(R=c,D=f,k=_,ee=S,c>=0?(C=h,v=l,P=m,U=u,H=p,N=x,O=T,V=d):(C=l,v=h,P=u,U=m,H=x,N=p,O=d,V=T)):(R=h,D=m,k=p,ee=T,h>=0?(C=l,v=c,P=u,U=f,H=x,N=_,O=d,V=S):(C=c,v=l,P=f,U=u,H=_,N=x,O=S,V=d)),R===0)return null;let J=C/R,ie=v/R,le=1/R,Be=P-J*D,De=U-ie*D,pt=H-J*k,at=N-ie*k,ut=O-J*ee,j=V-ie*ee,ae=ut*at-j*pt,Te=Be*j-De*ut,Ye=pt*De-at*Be;if(s){if(ae<0||Te<0||Ye<0)return null}else if((ae<0||Te<0||Ye<0)&&(ae>0||Te>0||Ye>0))return null;let Ie=ae+Te+Ye;if(Ie===0)return null;let Ze=le*(ae*D+Te*k+Ye*ee);return(Ie>0?Ze<0:Ze>0)?null:this.at(Ze/Ie,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Gt=class extends oi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=Yo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Nu=new mt,hs=new Gr,Ja=new qi,Uu=new L,$a=new L,Ka=new L,ja=new L,Ec=new L,Qa=new L,Fu=new L,eo=new L,Q=class extends Kt{constructor(e=new Ft,t=new Gt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Qa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Ec.fromBufferAttribute(u,e),a?Qa.addScaledVector(Ec,h):Qa.addScaledVector(Ec.sub(t),h))}t.add(Qa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ja.copy(i.boundingSphere),Ja.applyMatrix4(r),hs.copy(e.ray).recast(e.near),!(Ja.containsPoint(hs.origin)===!1&&(hs.intersectSphere(Ja,Uu)===null||hs.origin.distanceToSquared(Uu)>(e.far-e.near)**2))&&(Nu.copy(r).invert(),hs.copy(e.ray).applyMatrix4(Nu),!(i.boundingBox!==null&&hs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,hs)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,_=f.length;x<_;x++){let p=f[x],d=a[p.materialIndex],S=Math.max(p.start,m.start),T=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let y=S,w=T;y<w;y+=3){let M=o.getX(y),C=o.getX(y+1),v=o.getX(y+2);s=to(this,d,e,i,c,h,u,M,C,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let x=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=x,d=_;p<d;p+=3){let S=o.getX(p),T=o.getX(p+1),y=o.getX(p+2);s=to(this,a,e,i,c,h,u,S,T,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,_=f.length;x<_;x++){let p=f[x],d=a[p.materialIndex],S=Math.max(p.start,m.start),T=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=S,w=T;y<w;y+=3){let M=y,C=y+1,v=y+2;s=to(this,d,e,i,c,h,u,M,C,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let x=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=x,d=_;p<d;p+=3){let S=p,T=p+1,y=p+2;s=to(this,a,e,i,c,h,u,S,T,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function Ap(n,e,t,i,s,r,a,o){let l;if(e.side===Xt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Cn,o),l===null)return null;eo.copy(o),eo.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(eo);return c<t.near||c>t.far?null:{distance:c,point:eo.clone(),object:n}}function to(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,$a),n.getVertexPosition(l,Ka),n.getVertexPosition(c,ja);let h=Ap(n,e,t,i,$a,Ka,ja,Fu);if(h){let u=new L;wi.getBarycoord(Fu,$a,Ka,ja,u),s&&(h.uv=wi.getInterpolatedAttribute(s,o,l,c,u,new ue)),r&&(h.uv1=wi.getInterpolatedAttribute(r,o,l,c,u,new ue)),a&&(h.normal=wi.getInterpolatedAttribute(a,o,l,c,u,new L),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new L,materialIndex:0};wi.getNormal($a,Ka,ja,f.normal),h.face=f,h.barycoord=u}return h}var Vr=class extends mn{constructor(e=null,t=1,i=1,s,r,a,o,l,c=nn,h=nn,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Wr=class extends _n{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Gs=new mt,Ou=new mt,no=[],Bu=new sn,Rp=new mt,Rr=new Q,Cr=new qi,Xr=class extends Q{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Wr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Rp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new sn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Gs),Bu.copy(e.boundingBox).applyMatrix4(Gs),this.boundingBox.union(Bu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new qi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Gs),Cr.copy(e.boundingSphere).applyMatrix4(Gs),this.boundingSphere.union(Cr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Rr.geometry=this.geometry,Rr.material=this.material,Rr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cr.copy(this.boundingSphere),Cr.applyMatrix4(i),e.ray.intersectsSphere(Cr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Gs),Ou.multiplyMatrices(i,Gs),Rr.matrixWorld=Ou,Rr.raycast(e,no);for(let a=0,o=no.length;a<o;a++){let l=no[a];l.instanceId=r,l.object=this,t.push(l)}no.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Wr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Vr(new Float32Array(s*this.count),s,this.count,el,Un));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},us=new qi,Cp=new ue(.5,.5),io=new L,Qs=class{constructor(e=new xn,t=new xn,i=new xn,s=new xn,r=new xn,a=new xn){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Gn,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],m=r[7],x=r[8],_=r[9],p=r[10],d=r[11],S=r[12],T=r[13],y=r[14],w=r[15];if(s[0].setComponents(c-a,m-h,d-x,w-S).normalize(),s[1].setComponents(c+a,m+h,d+x,w+S).normalize(),s[2].setComponents(c+o,m+u,d+_,w+T).normalize(),s[3].setComponents(c-o,m-u,d-_,w-T).normalize(),i)s[4].setComponents(l,f,p,y).normalize(),s[5].setComponents(c-l,m-f,d-p,w-y).normalize();else if(s[4].setComponents(c-l,m-f,d-p,w-y).normalize(),t===Gn)s[5].setComponents(c+l,m+f,d+p,w+y).normalize();else if(t===Zs)s[5].setComponents(l,f,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(e){us.center.set(0,0,0);let t=Cp.distanceTo(e.center);return us.radius=.7071067811865476+t,us.applyMatrix4(e.matrixWorld),this.intersectsSphere(us)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(io.x=s.normal.x>0?e.max.x:e.min.x,io.y=s.normal.y>0?e.max.y:e.min.y,io.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(io)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var qr=class extends mn{constructor(e=[],t=es,i,s,r,a,o,l,c,h){super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ds=class extends mn{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Zi=class extends mn{constructor(e,t,i=Wn,s,r,a,o=nn,l=nn,c,h=ii,u=1){if(h!==ii&&h!==ns)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $s(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},wo=class extends Zi{constructor(e,t=Wn,i=es,s,r,a=nn,o=nn,l,c=ii){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Yr=class extends mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},li=class n extends Ft{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,m=0;x("z","y","x",-1,-1,i,t,e,a,r,0),x("z","y","x",1,-1,i,t,-e,a,r,1),x("x","z","y",1,1,e,i,t,s,a,2),x("x","z","y",1,-1,e,i,-t,s,a,3),x("x","y","z",1,-1,e,t,i,s,r,4),x("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(u,2));function x(_,p,d,S,T,y,w,M,C,v,R){let P=y/C,U=w/v,D=y/2,H=w/2,N=M/2,k=C+1,O=v+1,V=0,ee=0,J=new L;for(let ie=0;ie<O;ie++){let le=ie*U-H;for(let Be=0;Be<k;Be++){let De=Be*P-D;J[_]=De*S,J[p]=le*T,J[d]=N,c.push(J.x,J.y,J.z),J[_]=0,J[p]=0,J[d]=M>0?1:-1,h.push(J.x,J.y,J.z),u.push(Be/C),u.push(1-ie/v),V+=1}}for(let ie=0;ie<v;ie++)for(let le=0;le<C;le++){let Be=f+le+k*ie,De=f+le+k*(ie+1),pt=f+(le+1)+k*(ie+1),at=f+(le+1)+k*ie;l.push(Be,De,at),l.push(De,pt,at),ee+=6}o.addGroup(m,ee,R),m+=ee,f+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Zr=class n extends Ft{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,f=t,m=2*u+f,x=i*2+r,_=s+1,p=new L,d=new L;for(let S=0;S<=x;S++){let T=0,y=0,w=0,M=0;if(S<=i){let R=S/i,P=R*Math.PI/2;y=-h-e*Math.cos(P),w=e*Math.sin(P),M=-e*Math.cos(P),T=R*u}else if(S<=i+r){let R=(S-i)/r;y=-h+R*t,w=e,M=0,T=u+R*f}else{let R=(S-i-r)/i,P=R*Math.PI/2;y=h+e*Math.sin(P),w=e*Math.cos(P),M=e*Math.sin(P),T=u+f+R*u}let C=Math.max(0,Math.min(1,T/m)),v=0;S===0?v=.5/s:S===x&&(v=-.5/s);for(let R=0;R<=s;R++){let P=R/s,U=P*Math.PI*2,D=Math.sin(U),H=Math.cos(U);d.x=-w*H,d.y=y,d.z=w*D,o.push(d.x,d.y,d.z),p.set(-w*H,M,w*D),p.normalize(),l.push(p.x,p.y,p.z),c.push(P+v,C)}if(S>0){let R=(S-1)*_;for(let P=0;P<s;P++){let U=R+P,D=R+P+1,H=S*_+P,N=S*_+P+1;a.push(U,D,H),a.push(D,N,H)}}}this.setIndex(a),this.setAttribute("position",new st(o,3)),this.setAttribute("normal",new st(l,3)),this.setAttribute("uv",new st(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Dn=class n extends Ft{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new L,h=new ue;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let m=i+u/t*s;c.x=e*Math.cos(m),c.y=e*Math.sin(m),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new st(a,3)),this.setAttribute("normal",new st(o,3)),this.setAttribute("uv",new st(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ht=class n extends Ft{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],m=[],x=0,_=[],p=i/2,d=0;S(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new st(u,3)),this.setAttribute("normal",new st(f,3)),this.setAttribute("uv",new st(m,2));function S(){let y=new L,w=new L,M=0,C=(t-e)/i;for(let v=0;v<=r;v++){let R=[],P=v/r,U=P*(t-e)+e;for(let D=0;D<=s;D++){let H=D/s,N=H*l+o,k=Math.sin(N),O=Math.cos(N);w.x=U*k,w.y=-P*i+p,w.z=U*O,u.push(w.x,w.y,w.z),y.set(k,C,O).normalize(),f.push(y.x,y.y,y.z),m.push(H,1-P),R.push(x++)}_.push(R)}for(let v=0;v<s;v++)for(let R=0;R<r;R++){let P=_[R][v],U=_[R+1][v],D=_[R+1][v+1],H=_[R][v+1];(e>0||R!==0)&&(h.push(P,U,H),M+=3),(t>0||R!==r-1)&&(h.push(U,D,H),M+=3)}c.addGroup(d,M,0),d+=M}function T(y){let w=x,M=new ue,C=new L,v=0,R=y===!0?e:t,P=y===!0?1:-1;for(let D=1;D<=s;D++)u.push(0,p*P,0),f.push(0,P,0),m.push(.5,.5),x++;let U=x;for(let D=0;D<=s;D++){let N=D/s*l+o,k=Math.cos(N),O=Math.sin(N);C.x=R*O,C.y=p*P,C.z=R*k,u.push(C.x,C.y,C.z),f.push(0,P,0),M.x=k*.5+.5,M.y=O*.5*P+.5,m.push(M.x,M.y),x++}for(let D=0;D<s;D++){let H=w+D,N=U+D;y===!0?h.push(N,N+1,H):h.push(N+1,N,H),v+=3}c.addGroup(d,v,y===!0?1:2),d+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ci=class n extends ht{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Tn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){qe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],f=i[s+1]-h,m=(a-h)/f;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ue:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new L,s=[],r=[],a=[],o=new L,l=new mt;for(let m=0;m<=e;m++){let x=m/e;s[m]=this.getTangentAt(x,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(it(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(o,x))}a[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(it(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(m=-m);for(let x=1;x<=e;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],m*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},er=class extends Tn{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ue){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,m=c-this.aY;l=f*h-m*u+this.aX,c=f*u+m*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},To=class extends er{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function hh(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,m=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,m*=h,s(a,o,f,m)},calc:function(r){let a=r*r,o=a*r;return n+e*r+t*a+i*o}}}var Hu=new L,zu=new L,wc=new hh,Tc=new hh,Ac=new hh,tr=class extends Tn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new L){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(zu.subVectors(s[0],s[1]).add(s[0]),c=zu);let u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Hu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Hu),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(u),m),_=Math.pow(u.distanceToSquared(f),m),p=Math.pow(f.distanceToSquared(h),m);_<1e-4&&(_=1),x<1e-4&&(x=_),p<1e-4&&(p=_),wc.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,x,_,p),Tc.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,x,_,p),Ac.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,x,_,p)}else this.curveType==="catmullrom"&&(wc.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Tc.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Ac.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(wc.calc(l),Tc.calc(l),Ac.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ku(n,e,t,i,s){let r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}function Ip(n,e){let t=1-n;return t*t*e}function Pp(n,e){return 2*(1-n)*n*e}function Lp(n,e){return n*n*e}function Pr(n,e,t,i){return Ip(n,e)+Pp(n,t)+Lp(n,i)}function Dp(n,e){let t=1-n;return t*t*t*e}function Np(n,e){let t=1-n;return 3*t*t*n*e}function Up(n,e){return 3*(1-n)*n*n*e}function Fp(n,e){return n*n*n*e}function Lr(n,e,t,i,s){return Dp(n,e)+Np(n,t)+Up(n,i)+Fp(n,s)}var Jr=class extends Tn{constructor(e=new ue,t=new ue,i=new ue,s=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ue){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Lr(e,s.x,r.x,a.x,o.x),Lr(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ao=class extends Tn{constructor(e=new L,t=new L,i=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new L){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Lr(e,s.x,r.x,a.x,o.x),Lr(e,s.y,r.y,a.y,o.y),Lr(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},$r=class extends Tn{constructor(e=new ue,t=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ro=class extends Tn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Kr=class extends Tn{constructor(e=new ue,t=new ue,i=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ue){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Pr(e,s.x,r.x,a.x),Pr(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Co=class extends Tn{constructor(e=new L,t=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new L){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Pr(e,s.x,r.x,a.x),Pr(e,s.y,r.y,a.y),Pr(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},jr=class extends Tn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(ku(o,l.x,c.x,h.x,u.x),ku(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ue().fromArray(s))}return this}},Nc=Object.freeze({__proto__:null,ArcCurve:To,CatmullRomCurve3:tr,CubicBezierCurve:Jr,CubicBezierCurve3:Ao,EllipseCurve:er,LineCurve:$r,LineCurve3:Ro,QuadraticBezierCurve:Kr,QuadraticBezierCurve3:Co,SplineCurve:jr}),Io=class extends Tn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Nc[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Nc[s.type]().fromJSON(s))}return this}},Ji=class extends Io{constructor(e){super(),this.type="Path",this.currentPoint=new ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new $r(this.currentPoint.clone(),new ue(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Kr(this.currentPoint.clone(),new ue(e,t),new ue(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){let o=new Jr(this.currentPoint.clone(),new ue(e,t),new ue(i,s),new ue(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new jr(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,a,o,l),this}absellipse(e,t,i,s,r,a,o,l){let c=new er(e,t,i,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ot=class extends Ji{constructor(e){super(e),this.uuid=Ti(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Ji().fromJSON(s))}return this}};function Op(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=Hf(n,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=Gp(n,e,r,t)),n.length>80*t){o=n[0],l=n[1];let h=o,u=l;for(let f=t;f<s;f+=t){let m=n[f],x=n[f+1];m<o&&(o=m),x<l&&(l=x),m>h&&(h=m),x>u&&(u=x)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Qr(r,a,t,o,l,c,0),a}function Hf(n,e,t,i,s){let r;if(s===Qp(n,e,t,i)>0)for(let a=e;a<t;a+=i)r=Gu(a/i|0,n[a],n[a+1],r);else for(let a=t-i;a>=e;a-=i)r=Gu(a/i|0,n[a],n[a+1],r);return r&&nr(r,r.next)&&(ta(r),r=r.next),r}function ps(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(nr(t,t.next)||Ut(t.prev,t,t.next)===0)){if(ta(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Qr(n,e,t,i,s,r,a){if(!n)return;!a&&r&&Yp(n,i,s,r);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?Hp(n,i,s,r):Bp(n)){e.push(l.i,n.i,c.i),ta(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=zp(ps(n),e),Qr(n,e,t,i,s,r,2)):a===2&&kp(n,e,t,i,s,r):Qr(ps(n),e,t,i,s,r,1);break}}}function Bp(n){let e=n.prev,t=n,i=n.next;if(Ut(e,t,i)>=0)return!1;let s=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=Math.min(s,r,a),u=Math.min(o,l,c),f=Math.max(s,r,a),m=Math.max(o,l,c),x=i.next;for(;x!==e;){if(x.x>=h&&x.x<=f&&x.y>=u&&x.y<=m&&Ir(s,o,r,l,a,c,x.x,x.y)&&Ut(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function Hp(n,e,t,i){let s=n.prev,r=n,a=n.next;if(Ut(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,f=a.y,m=Math.min(o,l,c),x=Math.min(h,u,f),_=Math.max(o,l,c),p=Math.max(h,u,f),d=Uc(m,x,e,t,i),S=Uc(_,p,e,t,i),T=n.prevZ,y=n.nextZ;for(;T&&T.z>=d&&y&&y.z<=S;){if(T.x>=m&&T.x<=_&&T.y>=x&&T.y<=p&&T!==s&&T!==a&&Ir(o,h,l,u,c,f,T.x,T.y)&&Ut(T.prev,T,T.next)>=0||(T=T.prevZ,y.x>=m&&y.x<=_&&y.y>=x&&y.y<=p&&y!==s&&y!==a&&Ir(o,h,l,u,c,f,y.x,y.y)&&Ut(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;T&&T.z>=d;){if(T.x>=m&&T.x<=_&&T.y>=x&&T.y<=p&&T!==s&&T!==a&&Ir(o,h,l,u,c,f,T.x,T.y)&&Ut(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;y&&y.z<=S;){if(y.x>=m&&y.x<=_&&y.y>=x&&y.y<=p&&y!==s&&y!==a&&Ir(o,h,l,u,c,f,y.x,y.y)&&Ut(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function zp(n,e){let t=n;do{let i=t.prev,s=t.next.next;!nr(i,s)&&kf(i,t,t.next,s)&&ea(i,s)&&ea(s,i)&&(e.push(i.i,t.i,s.i),ta(t),ta(t.next),t=n=s),t=t.next}while(t!==n);return ps(t)}function kp(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&$p(a,o)){let l=Gf(a,o);a=ps(a,a.next),l=ps(l,l.next),Qr(a,e,t,i,s,r,0),Qr(l,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function Gp(n,e,t,i){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*i,l=r<a-1?e[r+1]*i:n.length,c=Hf(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Jp(c))}s.sort(Vp);for(let r=0;r<s.length;r++)t=Wp(s[r],t);return t}function Vp(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Wp(n,e){let t=Xp(n,e);if(!t)return e;let i=Gf(t,n);return ps(i,i.next),ps(t,t.next)}function Xp(n,e){let t=e,i=n.x,s=n.y,r=-1/0,a;if(nr(n,t))return t;do{if(nr(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===i))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(i>=t.x&&t.x>=l&&i!==t.x&&zf(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let u=Math.abs(s-t.y)/(i-t.x);ea(t,n)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&qp(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function qp(n,e){return Ut(n.prev,n,e.prev)<0&&Ut(e.next,n,n.next)<0}function Yp(n,e,t,i){let s=n;do s.z===0&&(s.z=Uc(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Zp(s)}function Zp(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let a=i,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,t*=2}while(e>1);return n}function Uc(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Jp(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function zf(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function Ir(n,e,t,i,s,r,a,o){return!(n===a&&e===o)&&zf(n,e,t,i,s,r,a,o)}function $p(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Kp(n,e)&&(ea(n,e)&&ea(e,n)&&jp(n,e)&&(Ut(n.prev,n,e.prev)||Ut(n,e.prev,e))||nr(n,e)&&Ut(n.prev,n,n.next)>0&&Ut(e.prev,e,e.next)>0)}function Ut(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function nr(n,e){return n.x===e.x&&n.y===e.y}function kf(n,e,t,i){let s=ro(Ut(n,e,t)),r=ro(Ut(n,e,i)),a=ro(Ut(t,i,n)),o=ro(Ut(t,i,e));return!!(s!==r&&a!==o||s===0&&so(n,t,e)||r===0&&so(n,i,e)||a===0&&so(t,n,i)||o===0&&so(t,e,i))}function so(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function ro(n){return n>0?1:n<0?-1:0}function Kp(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&kf(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function ea(n,e){return Ut(n.prev,n,n.next)<0?Ut(n,e,n.next)>=0&&Ut(n,n.prev,e)>=0:Ut(n,e,n.prev)<0||Ut(n,n.next,e)<0}function jp(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Gf(n,e){let t=Fc(n.i,n.x,n.y),i=Fc(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Gu(n,e,t,i){let s=Fc(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function ta(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Fc(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Qp(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var Oc=class{static triangulate(e,t,i=2){return Op(e,t,i)}},ni=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Vu(e),Wu(i,e);let a=e.length;t.forEach(Vu);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Wu(i,t[l]);let o=Oc.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Vu(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Wu(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var hi=class n extends Ft{constructor(e=new Ot([new ue(.5,.5),new ue(-.5,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new st(s,3)),this.setAttribute("uv",new st(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:m-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,d=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:e0,T,y=!1,w,M,C,v;if(d){T=d.getSpacedPoints(h),y=!0,f=!1;let oe=d.isCatmullRomCurve3?d.closed:!1;w=d.computeFrenetFrames(h,oe),M=new L,C=new L,v=new L}f||(p=0,m=0,x=0,_=0);let R=o.extractPoints(c),P=R.shape,U=R.holes;if(!ni.isClockWise(P)){P=P.reverse();for(let oe=0,de=U.length;oe<de;oe++){let pe=U[oe];ni.isClockWise(pe)&&(U[oe]=pe.reverse())}}function H(oe){let pe=10000000000000001e-36,me=oe[0];for(let ye=1;ye<=oe.length;ye++){let Ve=ye%oe.length,Ge=oe[Ve],Je=Ge.x-me.x,Ke=Ge.y-me.y,F=Je*Je+Ke*Ke,_t=Math.max(Math.abs(Ge.x),Math.abs(Ge.y),Math.abs(me.x),Math.abs(me.y)),ot=pe*_t*_t;if(F<=ot){oe.splice(Ve,1),ye--;continue}me=Ge}}H(P),U.forEach(H);let N=U.length,k=P;for(let oe=0;oe<N;oe++){let de=U[oe];P=P.concat(de)}function O(oe,de,pe){return de||Xe("ExtrudeGeometry: vec does not exist"),oe.clone().addScaledVector(de,pe)}let V=P.length;function ee(oe,de,pe){let me,ye,Ve,Ge=oe.x-de.x,Je=oe.y-de.y,Ke=pe.x-oe.x,F=pe.y-oe.y,_t=Ge*Ge+Je*Je,ot=Ge*F-Je*Ke;if(Math.abs(ot)>Number.EPSILON){let I=Math.sqrt(_t),b=Math.sqrt(Ke*Ke+F*F),G=de.x-Je/I,q=de.y+Ge/I,$=pe.x-F/b,xe=pe.y+Ke/b,_e=(($-G)*F-(xe-q)*Ke)/(Ge*F-Je*Ke);me=G+Ge*_e-oe.x,ye=q+Je*_e-oe.y;let K=me*me+ye*ye;if(K<=2)return new ue(me,ye);Ve=Math.sqrt(K/2)}else{let I=!1;Ge>Number.EPSILON?Ke>Number.EPSILON&&(I=!0):Ge<-Number.EPSILON?Ke<-Number.EPSILON&&(I=!0):Math.sign(Je)===Math.sign(F)&&(I=!0),I?(me=-Je,ye=Ge,Ve=Math.sqrt(_t)):(me=Ge,ye=Je,Ve=Math.sqrt(_t/2))}return new ue(me/Ve,ye/Ve)}let J=[];for(let oe=0,de=k.length,pe=de-1,me=oe+1;oe<de;oe++,pe++,me++)pe===de&&(pe=0),me===de&&(me=0),J[oe]=ee(k[oe],k[pe],k[me]);let ie=[],le,Be=J.concat();for(let oe=0,de=N;oe<de;oe++){let pe=U[oe];le=[];for(let me=0,ye=pe.length,Ve=ye-1,Ge=me+1;me<ye;me++,Ve++,Ge++)Ve===ye&&(Ve=0),Ge===ye&&(Ge=0),le[me]=ee(pe[me],pe[Ve],pe[Ge]);ie.push(le),Be=Be.concat(le)}let De;if(p===0)De=ni.triangulateShape(k,U);else{let oe=[],de=[];for(let pe=0;pe<p;pe++){let me=pe/p,ye=m*Math.cos(me*Math.PI/2),Ve=x*Math.sin(me*Math.PI/2)+_;for(let Ge=0,Je=k.length;Ge<Je;Ge++){let Ke=O(k[Ge],J[Ge],Ve);Te(Ke.x,Ke.y,-ye),me===0&&oe.push(Ke)}for(let Ge=0,Je=N;Ge<Je;Ge++){let Ke=U[Ge];le=ie[Ge];let F=[];for(let _t=0,ot=Ke.length;_t<ot;_t++){let I=O(Ke[_t],le[_t],Ve);Te(I.x,I.y,-ye),me===0&&F.push(I)}me===0&&de.push(F)}}De=ni.triangulateShape(oe,de)}let pt=De.length,at=x+_;for(let oe=0;oe<V;oe++){let de=f?O(P[oe],Be[oe],at):P[oe];y?(C.copy(w.normals[0]).multiplyScalar(de.x),M.copy(w.binormals[0]).multiplyScalar(de.y),v.copy(T[0]).add(C).add(M),Te(v.x,v.y,v.z)):Te(de.x,de.y,0)}for(let oe=1;oe<=h;oe++)for(let de=0;de<V;de++){let pe=f?O(P[de],Be[de],at):P[de];y?(C.copy(w.normals[oe]).multiplyScalar(pe.x),M.copy(w.binormals[oe]).multiplyScalar(pe.y),v.copy(T[oe]).add(C).add(M),Te(v.x,v.y,v.z)):Te(pe.x,pe.y,u/h*oe)}for(let oe=p-1;oe>=0;oe--){let de=oe/p,pe=m*Math.cos(de*Math.PI/2),me=x*Math.sin(de*Math.PI/2)+_;for(let ye=0,Ve=k.length;ye<Ve;ye++){let Ge=O(k[ye],J[ye],me);Te(Ge.x,Ge.y,u+pe)}for(let ye=0,Ve=U.length;ye<Ve;ye++){let Ge=U[ye];le=ie[ye];for(let Je=0,Ke=Ge.length;Je<Ke;Je++){let F=O(Ge[Je],le[Je],me);y?Te(F.x,F.y+T[h-1].y,T[h-1].x+pe):Te(F.x,F.y,u+pe)}}}ut(),j();function ut(){let oe=s.length/3;if(f){let de=0,pe=V*de;for(let me=0;me<pt;me++){let ye=De[me];Ye(ye[2]+pe,ye[1]+pe,ye[0]+pe)}de=h+p*2,pe=V*de;for(let me=0;me<pt;me++){let ye=De[me];Ye(ye[0]+pe,ye[1]+pe,ye[2]+pe)}}else{for(let de=0;de<pt;de++){let pe=De[de];Ye(pe[2],pe[1],pe[0])}for(let de=0;de<pt;de++){let pe=De[de];Ye(pe[0]+V*h,pe[1]+V*h,pe[2]+V*h)}}i.addGroup(oe,s.length/3-oe,0)}function j(){let oe=s.length/3,de=0;ae(k,de),de+=k.length;for(let pe=0,me=U.length;pe<me;pe++){let ye=U[pe];ae(ye,de),de+=ye.length}i.addGroup(oe,s.length/3-oe,1)}function ae(oe,de){let pe=oe.length;for(;--pe>=0;){let me=pe,ye=pe-1;ye<0&&(ye=oe.length-1);for(let Ve=0,Ge=h+p*2;Ve<Ge;Ve++){let Je=V*Ve,Ke=V*(Ve+1),F=de+me+Je,_t=de+ye+Je,ot=de+ye+Ke,I=de+me+Ke;Ie(F,_t,ot,I)}}}function Te(oe,de,pe){l.push(oe),l.push(de),l.push(pe)}function Ye(oe,de,pe){Ze(oe),Ze(de),Ze(pe);let me=s.length/3,ye=S.generateTopUV(i,s,me-3,me-2,me-1);bt(ye[0]),bt(ye[1]),bt(ye[2])}function Ie(oe,de,pe,me){Ze(oe),Ze(de),Ze(me),Ze(de),Ze(pe),Ze(me);let ye=s.length/3,Ve=S.generateSideWallUV(i,s,ye-6,ye-3,ye-2,ye-1);bt(Ve[0]),bt(Ve[1]),bt(Ve[3]),bt(Ve[1]),bt(Ve[2]),bt(Ve[3])}function Ze(oe){s.push(l[oe*3+0]),s.push(l[oe*3+1]),s.push(l[oe*3+2])}function bt(oe){r.push(oe.x),r.push(oe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return t0(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];i.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Nc[s.type]().fromJSON(s)),new n(i,e.options)}},e0={generateTopUV:function(n,e,t,i,s){let r=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new ue(r,a),new ue(o,l),new ue(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],f=e[s*3],m=e[s*3+1],x=e[s*3+2],_=e[r*3],p=e[r*3+1],d=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ue(a,1-l),new ue(c,1-u),new ue(f,1-x),new ue(_,1-d)]:[new ue(o,1-l),new ue(h,1-u),new ue(m,1-x),new ue(p,1-d)]}};function t0(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Nn=class n extends Ft{constructor(e=[new ue(0,-.5),new ue(.5,0),new ue(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=it(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,u=new L,f=new ue,m=new L,x=new L,_=new L,p=0,d=0;for(let S=0;S<=e.length-1;S++)switch(S){case 0:p=e[S+1].x-e[S].x,d=e[S+1].y-e[S].y,m.x=d*1,m.y=-p,m.z=d*0,_.copy(m),m.normalize(),l.push(m.x,m.y,m.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:p=e[S+1].x-e[S].x,d=e[S+1].y-e[S].y,m.x=d*1,m.y=-p,m.z=d*0,x.copy(m),m.x+=_.x,m.y+=_.y,m.z+=_.z,m.normalize(),l.push(m.x,m.y,m.z),_.copy(x)}for(let S=0;S<=t;S++){let T=i+S*h*s,y=Math.sin(T),w=Math.cos(T);for(let M=0;M<=e.length-1;M++){u.x=e[M].x*y,u.y=e[M].y,u.z=e[M].x*w,a.push(u.x,u.y,u.z),f.x=S/t,f.y=M/(e.length-1),o.push(f.x,f.y);let C=l[3*M+0]*y,v=l[3*M+1],R=l[3*M+0]*w;c.push(C,v,R)}}for(let S=0;S<t;S++)for(let T=0;T<e.length-1;T++){let y=T+S*e.length,w=y,M=y+e.length,C=y+e.length+1,v=y+1;r.push(w,M,v),r.push(C,v,M)}this.setIndex(r),this.setAttribute("position",new st(a,3)),this.setAttribute("uv",new st(o,2)),this.setAttribute("normal",new st(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}};var Vt=class n extends Ft{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,u=e/o,f=t/l,m=[],x=[],_=[],p=[];for(let d=0;d<h;d++){let S=d*f-a;for(let T=0;T<c;T++){let y=T*u-r;x.push(y,-S,0),_.push(0,0,1),p.push(T/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let S=0;S<o;S++){let T=S+c*d,y=S+c*(d+1),w=S+1+c*(d+1),M=S+1+c*d;m.push(T,y,M),m.push(y,w,M)}this.setIndex(m),this.setAttribute("position",new st(x,3)),this.setAttribute("normal",new st(_,3)),this.setAttribute("uv",new st(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var na=class n extends Ft{constructor(e=new Ot([new ue(0,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new st(s,3)),this.setAttribute("normal",new st(r,3)),this.setAttribute("uv",new st(a,2));function c(h){let u=s.length/3,f=h.extractPoints(t),m=f.shape,x=f.holes;ni.isClockWise(m)===!1&&(m=m.reverse());for(let p=0,d=x.length;p<d;p++){let S=x[p];ni.isClockWise(S)===!0&&(x[p]=S.reverse())}let _=ni.triangulateShape(m,x);for(let p=0,d=x.length;p<d;p++){let S=x[p];m=m.concat(S)}for(let p=0,d=m.length;p<d;p++){let S=m[p];s.push(S.x,S.y,0),r.push(0,0,1),a.push(S.x,S.y)}for(let p=0,d=_.length;p<d;p++){let S=_[p],T=S[0]+u,y=S[1]+u,w=S[2]+u;i.push(T,y,w),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return n0(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];i.push(a)}return new n(i,e.curveSegments)}};function n0(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var St=class n extends Ft{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new L,f=new L,m=[],x=[],_=[],p=[];for(let d=0;d<=i;d++){let S=[],T=d/i,y=a+T*o,w=e*Math.cos(y),M=Math.sqrt(e*e-w*w),C=0;d===0&&a===0?C=.5/t:d===i&&l===Math.PI&&(C=-.5/t);for(let v=0;v<=t;v++){let R=v/t,P=s+R*r;u.x=-M*Math.cos(P),u.y=w,u.z=M*Math.sin(P),x.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),p.push(R+C,1-T),S.push(c++)}h.push(S)}for(let d=0;d<i;d++)for(let S=0;S<t;S++){let T=h[d][S+1],y=h[d][S],w=h[d+1][S],M=h[d+1][S+1];(d!==0||a>0)&&m.push(T,y,M),(d!==i-1||l<Math.PI)&&m.push(y,w,M)}this.setIndex(m),this.setAttribute("position",new st(x,3)),this.setAttribute("normal",new st(_,3)),this.setAttribute("uv",new st(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Tt=class n extends Ft{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],u=[],f=new L,m=new L,x=new L;for(let _=0;_<=i;_++){let p=a+_/i*o;for(let d=0;d<=s;d++){let S=d/s*r;m.x=(e+t*Math.cos(p))*Math.cos(S),m.y=(e+t*Math.cos(p))*Math.sin(S),m.z=t*Math.sin(p),c.push(m.x,m.y,m.z),f.x=e*Math.cos(S),f.y=e*Math.sin(S),x.subVectors(m,f).normalize(),h.push(x.x,x.y,x.z),u.push(d/s),u.push(_/i)}}for(let _=1;_<=i;_++)for(let p=1;p<=s;p++){let d=(s+1)*_+p-1,S=(s+1)*(_-1)+p-1,T=(s+1)*(_-1)+p,y=(s+1)*_+p;l.push(d,S,y),l.push(S,T,y)}this.setIndex(l),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function vs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Xu(s))s.isRenderTargetTexture?(qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Xu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function un(n){let e={};for(let t=0;t<n.length;t++){let i=vs(n[t]);for(let s in i)e[s]=i[s]}return e}function Xu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function i0(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function uh(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}var Vf={clone:vs,merge:un},s0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,r0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,An=class extends oi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=s0,this.fragmentShader=r0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vs(e.uniforms),this.uniformsGroups=i0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new ge().setHex(s.value);break;case"v2":this.uniforms[i].value=new ue().fromArray(s.value);break;case"v3":this.uniforms[i].value=new L().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Dt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new $e().fromArray(s.value);break;case"m4":this.uniforms[i].value=new mt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Po=class extends An{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},an=class extends oi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xa,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},je=class extends an{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return it(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ia=class extends oi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xa,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=Yo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Lo=class extends oi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ef,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Do=class extends oi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Vs(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Rc(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var $i=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},No=class extends $i{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pc,endingEnd:Pc}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Lc:r=e,o=2*t-i;break;case Dc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Lc:a=e,l=2*i-t;break;case Dc:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,m=this._weightNext,x=(i-t)/(s-t),_=x*x,p=_*x,d=-f*p+2*f*_-f*x,S=(1+f)*p+(-1.5-2*f)*_+(-.5+f)*x+1,T=(-1-m)*p+(1.5+m)*_+.5*x,y=m*p-m*_;for(let w=0;w!==o;++w)r[w]=d*a[h+w]+S*a[c+w]+T*a[l+w]+y*a[u+w];return r}},Uo=class extends $i{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(s-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},Fo=class extends $i{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Oo=class extends $i{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let x=(i-t)/(s-t),_=1-x;for(let p=0;p!==o;++p)r[p]=a[c+p]*_+a[l+p]*x;return r}let f=o*2,m=e-1;for(let x=0;x!==o;++x){let _=a[c+x],p=a[l+x],d=m*f+x*2,S=u[d],T=u[d+1],y=e*f+x*2,w=h[y],M=h[y+1],C=o0(i,t,S,w,s);r[x]=Wf(C,_,T,M,p)}return r}};function Wf(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function a0(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function o0(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){let o=Wf(r,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let l=a0(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Rn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Vs(t,this.TimeBufferType),this.values=Vs(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Vs(e.times,Array),values:Vs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),Rc(e.settings)&&(i.settings={inTangents:Vs(e.settings.inTangents,Array),outTangents:Vs(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Fo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Uo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new No(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Oo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Dr:t=this.InterpolantFactoryMethodDiscrete;break;case yo:t=this.InterpolantFactoryMethodLinear;break;case lo:t=this.InterpolantFactoryMethodSmooth;break;case Ic:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return qe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Dr;case this.InterpolantFactoryMethodLinear:return yo;case this.InterpolantFactoryMethodSmooth:return lo;case this.InterpolantFactoryMethodBezier:return Ic}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;Rc(this.settings)&&(qu(this.settings.inTangents,e),qu(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Xe("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Xe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Xe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Xe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&cp(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Xe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===lo,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*i,f=u-i,m=u+i;for(let x=0;x!==i;++x){let _=t[u+x];if(_!==t[f+x]||_!==t[m+x]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*i,f=a*i;for(let m=0;m!==i;++m)t[f+m]=t[u+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,Rc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function qu(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}Rn.prototype.ValueTypeName="";Rn.prototype.TimeBufferType=Float32Array;Rn.prototype.ValueBufferType=Float32Array;Rn.prototype.DefaultInterpolation=yo;var Ki=class extends Rn{constructor(e,t,i){super(e,t,i)}};Ki.prototype.ValueTypeName="bool";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=Dr;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;var Bo=class extends Rn{constructor(e,t,i,s){super(e,t,i,s)}};Bo.prototype.ValueTypeName="color";var Ho=class extends Rn{constructor(e,t,i,s){super(e,t,i,s)}};Ho.prototype.ValueTypeName="number";var zo=class extends $i{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)ri.slerpFlat(r,0,a,c-o,a,c,l);return r}},sa=class extends Rn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new zo(this.times,this.values,this.getValueSize(),e)}};sa.prototype.ValueTypeName="quaternion";sa.prototype.InterpolantFactoryMethodSmooth=void 0;var ji=class extends Rn{constructor(e,t,i){super(e,t,i)}};ji.prototype.ValueTypeName="string";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=Dr;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;var ko=class extends Rn{constructor(e,t,i,s){super(e,t,i,s)}};ko.prototype.ValueTypeName="vector";var Go=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let m=c[u],x=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Xf=new Go,Vo=class{constructor(e){this.manager=e!==void 0?e:Xf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Vo.DEFAULT_MATERIAL_NAME="__DEFAULT";var ir=class extends Kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ge(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ra=class extends ir{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Cc=new mt,Yu=new L,Zu=new L,aa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.mapType=vn,this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qs,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Yu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yu),Zu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Cc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Cc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Zs||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Cc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ao=new L,oo=new ri,Qn=new L,oa=class extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=Gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ao,oo,Qn),Qn.x===1&&Qn.y===1&&Qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ao,oo,Qn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(ao,oo,Qn),Qn.x===1&&Qn.y===1&&Qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ao,oo,Qn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Vi=new L,Ju=new ue,$u=new ue,tn=class extends oa{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=vo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ic*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vo*2*Math.atan(Math.tan(ic*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z),Vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z)}getViewSize(e,t){return this.getViewBounds(e,Ju,$u),t.subVectors($u,Ju)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ic*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Bc=class extends aa{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0}},Qi=class extends ir{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Bc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},sr=class extends oa{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Hc=class extends aa{constructor(){super(new sr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ms=class extends ir{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.shadow=new Hc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Ws=-90,Xs=1,Wo=class extends Kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new tn(Ws,Xs,e,t);s.layers=this.layers,this.add(s);let r=new tn(Ws,Xs,e,t);r.layers=this.layers,this.add(r);let a=new tn(Ws,Xs,e,t);a.layers=this.layers,this.add(a);let o=new tn(Ws,Xs,e,t);o.layers=this.layers,this.add(o);let l=new tn(Ws,Xs,e,t);l.layers=this.layers,this.add(l);let c=new tn(Ws,Xs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Gn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Zs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,f,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}},Xo=class extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var fh="\\[\\]\\.:\\/",l0=new RegExp("["+fh+"]","g"),dh="[^"+fh+"]",c0="[^"+fh.replace("\\.","")+"]",h0=/((?:WC+[\/:])*)/.source.replace("WC",dh),u0=/(WCOD+)?/.source.replace("WCOD",c0),f0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",dh),d0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",dh),p0=new RegExp("^"+h0+u0+f0+d0+"$"),m0=["material","materials","bones","map"],zc=class{constructor(e,t,i){let s=i||Lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Lt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(l0,"")}static parseTrackName(e){let t=p0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);m0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){qe("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Xe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Xe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Xe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Xe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Xe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Xe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Lt.Composite=zc;Lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Lt.prototype.GetterByBindingType=[Lt.prototype._getValue_direct,Lt.prototype._getValue_array,Lt.prototype._getValue_arrayElement,Lt.prototype._getValue_toArray];Lt.prototype.SetterByBindingTypeAndVersioning=[[Lt.prototype._setValue_direct,Lt.prototype._setValue_direct_setNeedsUpdate,Lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_array,Lt.prototype._setValue_array_setNeedsUpdate,Lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_arrayElement,Lt.prototype._setValue_arrayElement_setNeedsUpdate,Lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_fromArray,Lt.prototype._setValue_fromArray_setNeedsUpdate,Lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var nv=new Float32Array(1);var Ku=new mt,gs=class{constructor(e,t,i=0,s=1/0){this.ray=new Gr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Ks,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Xe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ku.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ku),this}intersectObject(e,t=!0,i=[]){return kc(e,this,i,t),i.sort(ju),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)kc(e[s],this,i,t);return i.sort(ju),i}};function ju(n,e){return n.distance-e.distance}function kc(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)kc(r[a],e,t,!0)}}var yh=class yh{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};yh.prototype.isMatrix2=!0;var Gc=yh;function ph(n,e,t,i){let s=g0(i);switch(t){case ah:return n*e;case el:return n*e/s.components*s.byteLength;case tl:return n*e/s.components*s.byteLength;case is:return n*e*2/s.components*s.byteLength;case nl:return n*e*2/s.components*s.byteLength;case oh:return n*e*3/s.components*s.byteLength;case Fn:return n*e*4/s.components*s.byteLength;case il:return n*e*4/s.components*s.byteLength;case ua:case fa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case da:case pa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case rl:case ol:return Math.max(n,16)*Math.max(e,8)/4;case sl:case al:return Math.max(n,8)*Math.max(e,8)/2;case ll:case cl:case ul:case fl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case hl:case ma:case dl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case pl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ml:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case gl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case xl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case _l:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case yl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case vl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ml:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Sl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case bl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case El:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case wl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Tl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Al:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Rl:case Cl:case Il:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Pl:case Ll:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ga:case Dl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function g0(n){switch(n){case vn:case nh:return{byteLength:1,components:1};case or:case ih:case Xn:return{byteLength:2,components:1};case jo:case Qo:return{byteLength:2,components:4};case Wn:case Ko:case Un:return{byteLength:4,components:1};case sh:case rh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function dd(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function _0(n){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,h);else{u.sort((m,x)=>m.start-x.start);let f=0;for(let m=1;m<u.length;m++){let x=u[f],_=u[m];_.start<=x.start+x.count+1?x.count=Math.max(x.count,_.start+_.count-x.start):(++f,u[f]=_)}u.length=f+1;for(let m=0,x=u.length;m<x;m++){let _=u[m];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var y0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,v0=`#ifdef USE_ALPHAHASH
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
#endif`,M0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,S0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,b0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,E0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,w0=`#ifdef USE_AOMAP
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
#endif`,T0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,A0=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,R0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,C0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,I0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,P0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,L0=`#ifdef USE_IRIDESCENCE
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
#endif`,D0=`#ifdef USE_BUMPMAP
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
#endif`,N0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,U0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,F0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,O0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,B0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,H0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,z0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,k0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,G0=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,V0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,W0=`vec3 transformedNormal = objectNormal;
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
#endif`,X0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,q0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Y0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Z0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,J0="gl_FragColor = linearToOutputTexel( gl_FragColor );",$0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,K0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,j0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Q0=`#ifdef USE_ENVMAP
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
#endif`,em=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,nm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,im=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,am=`#ifdef USE_GRADIENTMAP
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
}`,om=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hm=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,um=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,fm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,xm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_m=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ym=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mm=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Sm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Em=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Am=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cm=`#if defined( USE_POINTS_UV )
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
#endif`,Im=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Um=`#ifdef USE_MORPHTARGETS
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
#endif`,Fm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Om=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Bm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,km=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Gm=`#ifdef USE_NORMALMAP
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
#endif`,Vm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ym=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Jm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$m=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Km=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ng=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,ig=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,sg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,rg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ag=`#ifdef USE_SKINNING
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
#endif`,og=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lg=`#ifdef USE_SKINNING
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
#endif`,cg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ug=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dg=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,pg=`#ifdef USE_TRANSMISSION
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
#endif`,mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_g=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,yg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vg=`uniform sampler2D t2D;
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
}`,Mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Eg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wg=`#include <common>
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
}`,Tg=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ag=`#define DISTANCE
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
}`,Rg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ig=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pg=`uniform float scale;
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
}`,Lg=`uniform vec3 diffuse;
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
}`,Dg=`#include <common>
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
}`,Ng=`uniform vec3 diffuse;
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
}`,Ug=`#define LAMBERT
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
}`,Fg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Og=`#define MATCAP
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
}`,Bg=`#define MATCAP
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
}`,Hg=`#define NORMAL
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
}`,zg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,kg=`#define PHONG
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
}`,Gg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Vg=`#define STANDARD
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
}`,Wg=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,Xg=`#define TOON
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
}`,qg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,Yg=`uniform float size;
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
}`,Zg=`uniform vec3 diffuse;
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
}`,Jg=`#include <common>
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
}`,$g=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,Kg=`uniform float rotation;
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
}`,jg=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:y0,alphahash_pars_fragment:v0,alphamap_fragment:M0,alphamap_pars_fragment:S0,alphatest_fragment:b0,alphatest_pars_fragment:E0,aomap_fragment:w0,aomap_pars_fragment:T0,batching_pars_vertex:A0,batching_vertex:R0,begin_vertex:C0,beginnormal_vertex:I0,bsdfs:P0,iridescence_fragment:L0,bumpmap_pars_fragment:D0,clipping_planes_fragment:N0,clipping_planes_pars_fragment:U0,clipping_planes_pars_vertex:F0,clipping_planes_vertex:O0,color_fragment:B0,color_pars_fragment:H0,color_pars_vertex:z0,color_vertex:k0,common:G0,cube_uv_reflection_fragment:V0,defaultnormal_vertex:W0,displacementmap_pars_vertex:X0,displacementmap_vertex:q0,emissivemap_fragment:Y0,emissivemap_pars_fragment:Z0,colorspace_fragment:J0,colorspace_pars_fragment:$0,envmap_fragment:K0,envmap_common_pars_fragment:j0,envmap_pars_fragment:Q0,envmap_pars_vertex:em,envmap_physical_pars_fragment:um,envmap_vertex:tm,fog_vertex:nm,fog_pars_vertex:im,fog_fragment:sm,fog_pars_fragment:rm,gradientmap_pars_fragment:am,lightmap_pars_fragment:om,lights_lambert_fragment:lm,lights_lambert_pars_fragment:cm,lights_pars_begin:hm,lights_toon_fragment:fm,lights_toon_pars_fragment:dm,lights_phong_fragment:pm,lights_phong_pars_fragment:mm,lights_physical_fragment:gm,lights_physical_pars_fragment:xm,lights_fragment_begin:_m,lights_fragment_maps:ym,lights_fragment_end:vm,lightprobes_pars_fragment:Mm,logdepthbuf_fragment:Sm,logdepthbuf_pars_fragment:bm,logdepthbuf_pars_vertex:Em,logdepthbuf_vertex:wm,map_fragment:Tm,map_pars_fragment:Am,map_particle_fragment:Rm,map_particle_pars_fragment:Cm,metalnessmap_fragment:Im,metalnessmap_pars_fragment:Pm,morphinstance_vertex:Lm,morphcolor_vertex:Dm,morphnormal_vertex:Nm,morphtarget_pars_vertex:Um,morphtarget_vertex:Fm,normal_fragment_begin:Om,normal_fragment_maps:Bm,normal_pars_fragment:Hm,normal_pars_vertex:zm,normal_vertex:km,normalmap_pars_fragment:Gm,clearcoat_normal_fragment_begin:Vm,clearcoat_normal_fragment_maps:Wm,clearcoat_pars_fragment:Xm,iridescence_pars_fragment:qm,opaque_fragment:Ym,packing:Zm,premultiplied_alpha_fragment:Jm,project_vertex:$m,dithering_fragment:Km,dithering_pars_fragment:jm,roughnessmap_fragment:Qm,roughnessmap_pars_fragment:eg,shadowmap_pars_fragment:tg,shadowmap_pars_vertex:ng,shadowmap_vertex:ig,shadowmask_pars_fragment:sg,skinbase_vertex:rg,skinning_pars_vertex:ag,skinning_vertex:og,skinnormal_vertex:lg,specularmap_fragment:cg,specularmap_pars_fragment:hg,tonemapping_fragment:ug,tonemapping_pars_fragment:fg,transmission_fragment:dg,transmission_pars_fragment:pg,uv_pars_fragment:mg,uv_pars_vertex:gg,uv_vertex:xg,worldpos_vertex:_g,background_vert:yg,background_frag:vg,backgroundCube_vert:Mg,backgroundCube_frag:Sg,cube_vert:bg,cube_frag:Eg,depth_vert:wg,depth_frag:Tg,distance_vert:Ag,distance_frag:Rg,equirect_vert:Cg,equirect_frag:Ig,linedashed_vert:Pg,linedashed_frag:Lg,meshbasic_vert:Dg,meshbasic_frag:Ng,meshlambert_vert:Ug,meshlambert_frag:Fg,meshmatcap_vert:Og,meshmatcap_frag:Bg,meshnormal_vert:Hg,meshnormal_frag:zg,meshphong_vert:kg,meshphong_frag:Gg,meshphysical_vert:Vg,meshphysical_frag:Wg,meshtoon_vert:Xg,meshtoon_frag:qg,points_vert:Yg,points_frag:Zg,shadow_vert:Jg,shadow_frag:$g,sprite_vert:Kg,sprite_frag:jg},we={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},di={basic:{uniforms:un([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:un([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new ge(0)},envMapIntensity:{value:1}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:un([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:un([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:un([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new ge(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:un([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:un([we.points,we.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:un([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:un([we.common,we.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:un([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:un([we.sprite,we.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distance:{uniforms:un([we.common,we.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distance_vert,fragmentShader:nt.distance_frag},shadow:{uniforms:un([we.lights,we.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};di.physical={uniforms:un([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};var Fl={r:0,b:0,g:0},Qg=new mt,pd=new $e;pd.set(-1,0,0,0,1,0,0,0,1);function ex(n,e,t,i,s,r){let a=new ge(0),o=s===!0?0:1,l,c,h=null,u=0,f=null;function m(S){let T=S.isScene===!0?S.background:null;if(T&&T.isTexture){let y=S.backgroundBlurriness>0;T=e.get(T,y)}return T}function x(S){let T=!1,y=m(S);y===null?p(a,o):y&&y.isColor&&(p(y,1),T=!0);let w=n.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(S,T){let y=m(T);y&&(y.isCubeTexture||y.mapping===ca)?(c===void 0&&(c=new Q(new li(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:vs(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,M,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Qg.makeRotationFromEuler(T.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(pd),c.material.toneMapped=ct.getTransfer(y.colorSpace)!==Mt,(h!==y||u!==y.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,f=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Q(new Vt(2,2),new An({name:"BackgroundMaterial",uniforms:vs(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=ct.getTransfer(y.colorSpace)!==Mt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,f=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,T){S.getRGB(Fl,uh(n)),t.buffers.color.setClear(Fl.r,Fl.g,Fl.b,T,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,T=1){a.set(S),o=T,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,p(a,o)},render:x,addToRenderList:_,dispose:d}}function tx(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,a=!1;function o(U,D,H,N,k){let O=!1,V=u(U,N,H,D);r!==V&&(r=V,c(r.object)),O=m(U,N,H,k),O&&x(U,N,H,k),k!==null&&e.update(k,n.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,y(U,D,H,N),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return n.createVertexArray()}function c(U){return n.bindVertexArray(U)}function h(U){return n.deleteVertexArray(U)}function u(U,D,H,N){let k=N.wireframe===!0,O=i[D.id];O===void 0&&(O={},i[D.id]=O);let V=U.isInstancedMesh===!0?U.id:0,ee=O[V];ee===void 0&&(ee={},O[V]=ee);let J=ee[H.id];J===void 0&&(J={},ee[H.id]=J);let ie=J[k];return ie===void 0&&(ie=f(l()),J[k]=ie),ie}function f(U){let D=[],H=[],N=[];for(let k=0;k<t;k++)D[k]=0,H[k]=0,N[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:H,attributeDivisors:N,object:U,attributes:{},index:null}}function m(U,D,H,N){let k=r.attributes,O=D.attributes,V=0,ee=H.getAttributes();for(let J in ee)if(ee[J].location>=0){let le=k[J],Be=O[J];if(Be===void 0&&(J==="instanceMatrix"&&U.instanceMatrix&&(Be=U.instanceMatrix),J==="instanceColor"&&U.instanceColor&&(Be=U.instanceColor)),le===void 0||le.attribute!==Be||Be&&le.data!==Be.data)return!0;V++}return r.attributesNum!==V||r.index!==N}function x(U,D,H,N){let k={},O=D.attributes,V=0,ee=H.getAttributes();for(let J in ee)if(ee[J].location>=0){let le=O[J];le===void 0&&(J==="instanceMatrix"&&U.instanceMatrix&&(le=U.instanceMatrix),J==="instanceColor"&&U.instanceColor&&(le=U.instanceColor));let Be={};Be.attribute=le,le&&le.data&&(Be.data=le.data),k[J]=Be,V++}r.attributes=k,r.attributesNum=V,r.index=N}function _(){let U=r.newAttributes;for(let D=0,H=U.length;D<H;D++)U[D]=0}function p(U){d(U,0)}function d(U,D){let H=r.newAttributes,N=r.enabledAttributes,k=r.attributeDivisors;H[U]=1,N[U]===0&&(n.enableVertexAttribArray(U),N[U]=1),k[U]!==D&&(n.vertexAttribDivisor(U,D),k[U]=D)}function S(){let U=r.newAttributes,D=r.enabledAttributes;for(let H=0,N=D.length;H<N;H++)D[H]!==U[H]&&(n.disableVertexAttribArray(H),D[H]=0)}function T(U,D,H,N,k,O,V){V===!0?n.vertexAttribIPointer(U,D,H,k,O):n.vertexAttribPointer(U,D,H,N,k,O)}function y(U,D,H,N){_();let k=N.attributes,O=H.getAttributes(),V=D.defaultAttributeValues;for(let ee in O){let J=O[ee];if(J.location>=0){let ie=k[ee];if(ie===void 0&&(ee==="instanceMatrix"&&U.instanceMatrix&&(ie=U.instanceMatrix),ee==="instanceColor"&&U.instanceColor&&(ie=U.instanceColor)),ie!==void 0){let le=ie.normalized,Be=ie.itemSize,De=e.get(ie);if(De===void 0)continue;let pt=De.buffer,at=De.type,ut=De.bytesPerElement,j=at===n.INT||at===n.UNSIGNED_INT||ie.gpuType===Ko;if(ie.isInterleavedBufferAttribute){let ae=ie.data,Te=ae.stride,Ye=ie.offset;if(ae.isInstancedInterleavedBuffer){for(let Ie=0;Ie<J.locationSize;Ie++)d(J.location+Ie,ae.meshPerAttribute);U.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ie=0;Ie<J.locationSize;Ie++)p(J.location+Ie);n.bindBuffer(n.ARRAY_BUFFER,pt);for(let Ie=0;Ie<J.locationSize;Ie++)T(J.location+Ie,Be/J.locationSize,at,le,Te*ut,(Ye+Be/J.locationSize*Ie)*ut,j)}else{if(ie.isInstancedBufferAttribute){for(let ae=0;ae<J.locationSize;ae++)d(J.location+ae,ie.meshPerAttribute);U.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ae=0;ae<J.locationSize;ae++)p(J.location+ae);n.bindBuffer(n.ARRAY_BUFFER,pt);for(let ae=0;ae<J.locationSize;ae++)T(J.location+ae,Be/J.locationSize,at,le,Be*ut,Be/J.locationSize*ae*ut,j)}}else if(V!==void 0){let le=V[ee];if(le!==void 0)switch(le.length){case 2:n.vertexAttrib2fv(J.location,le);break;case 3:n.vertexAttrib3fv(J.location,le);break;case 4:n.vertexAttrib4fv(J.location,le);break;default:n.vertexAttrib1fv(J.location,le)}}}}S()}function w(){R();for(let U in i){let D=i[U];for(let H in D){let N=D[H];for(let k in N){let O=N[k];for(let V in O)h(O[V].object),delete O[V];delete N[k]}}delete i[U]}}function M(U){if(i[U.id]===void 0)return;let D=i[U.id];for(let H in D){let N=D[H];for(let k in N){let O=N[k];for(let V in O)h(O[V].object),delete O[V];delete N[k]}}delete i[U.id]}function C(U){for(let D in i){let H=i[D];for(let N in H){let k=H[N];if(k[U.id]===void 0)continue;let O=k[U.id];for(let V in O)h(O[V].object),delete O[V];delete k[U.id]}}}function v(U){for(let D in i){let H=i[D],N=U.isInstancedMesh===!0?U.id:0,k=H[N];if(k!==void 0){for(let O in k){let V=k[O];for(let ee in V)h(V[ee].object),delete V[ee];delete k[O]}delete H[N],Object.keys(H).length===0&&delete i[D]}}}function R(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:P,dispose:w,releaseStatesOfGeometry:M,releaseStatesOfObject:v,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:p,disableUnusedAttributes:S}}function nx(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let f=0;for(let m=0;m<h;m++)f+=c[m];t.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function ix(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==Fn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let v=C===Xn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==vn&&C!==Un&&!v&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(qe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),M=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:x,maxTextureSize:_,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:S,maxVaryings:T,maxFragmentUniforms:y,maxSamples:w,samples:M}}function sx(n){let e=this,t=null,i=0,s=!1,r=!1,a=new xn,o=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let m=u.length!==0||f||i!==0||s;return s=f,i=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,m){let x=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,d=n.get(u);if(!s||x===null||x.length===0||r&&!p)r?h(null):c();else{let S=r?0:i,T=S*4,y=d.clippingState||null;l.value=y,y=h(x,f,T,m);for(let w=0;w!==T;++w)y[w]=t[w];d.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,m,x){let _=u!==null?u.length:0,p=null;if(_!==0){if(p=l.value,x!==!0||p===null){let d=m+_*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<d)&&(p=new Float32Array(d));for(let T=0,y=m;T!==_;++T,y+=4)a.copy(u[T]).applyMatrix4(S,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}var hr=4,rx=6,ax=20,ox=256,_a=new sr,qf=new ge,vh=null,Mh=0,Sh=0,bh=!1,lx=new L,Ms=new L,fr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=lx}=r;vh=this._renderer.getRenderTarget(),Mh=this._renderer.getActiveCubeFace(),Sh=this._renderer.getActiveMipmapLevel(),bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(vh,Mh,Sh),this._renderer.xr.enabled=bh,e.scissorTest=!1,cr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===es||e.mapping===ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vh=this._renderer.getRenderTarget(),Mh=this._renderer.getActiveCubeFace(),Sh=this._renderer.getActiveMipmapLevel(),bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:Xn,format:Fn,colorSpace:Nr,depthBuffer:!1},s=Yf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yf(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=cx(r)),this._blurMaterial=ux(r,e,t),this._ggxMaterial=hx(r,e,t)}return s}_compileMaterial(e){let t=new Q(new Ft,e);this._renderer.compile(t,_a)}_sceneToCubeUV(e,t,i,s,r){let l=new tn(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,m=u.toneMapping;u.getClearColor(qf),u.toneMapping=Vn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Q(new li,new Gt({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,p=_.material,d=!1,S=e.background;S?S.isColor&&(p.color.copy(S),e.background=null,d=!0):(p.color.copy(qf),d=!0);for(let T=0;T<6;T++){let y=T%3;y===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[T],r.y,r.z)):y===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[T]));let w=this._cubeSize;cr(s,y*w,T>2?w:0,w,w),u.setRenderTarget(s),d&&u.render(_,l),u.render(e,l)}u.toneMapping=m,u.autoClear=f,e.background=S}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===es||e.mapping===ys;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;cr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,_a)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=c*1.25,m=u*f,{_lodMax:x}=this,_=this._sizeLods[i],p=3*_*(i>x-hr?i-x+hr:0),d=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=x-t,cr(r,p,d,3*_,2*_),s.setRenderTarget(r),s.render(o,_a),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-i,cr(e,p,d,3*_,2*_),s.setRenderTarget(e),s.render(o,_a)}_blur(e,t,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,a),this._blurPass(r,e,i,i,a)}_blurPass(e,t,i,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-hr?s-this._lodMax+hr:0),f=4*(this._cubeSize-h);cr(t,u,f,3*h,2*h),a.setRenderTarget(t),a.render(l,_a)}};function cx(n){let e=[],t=[],i=n,s=n-hr+1+rx;for(let r=0;r<s;r++){let a=Math.pow(2,i);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,f=6,m=3,x=new Float32Array(m*f*u),_=new Float32Array(m*f*u);for(let d=0;d<u;d++){let S=d%3*2/3-1,T=d>2?0:-1,y=[S,T,0,S+2/3,T,0,S+2/3,T+1,0,S,T,0,S+2/3,T+1,0,S,T+1,0];x.set(y,m*f*d);for(let w=0;w<f;w++){let M=h[w*2]*2-1,C=h[w*2+1]*2-1;d===0?Ms.set(1,C,M):d===1?Ms.set(-M,1,-C):d===2?Ms.set(-M,C,1):d===3?Ms.set(-1,C,-M):d===4?Ms.set(-M,-1,C):Ms.set(M,C,-1),Ms.toArray(_,(d*f+w)*m)}}let p=new Ft;p.setAttribute("position",new _n(x,m)),p.setAttribute("outputDirection",new _n(_,m)),t.push(new Q(p,null)),i>hr&&i--}return{lodMeshes:t,sizeLods:e}}function Yf(n,e,t){let i=new yn(n,e,t);return i.texture.mapping=ca,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function cr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function hx(n,e,t){return new An({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ox,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:zl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function ux(n,e,t){return new An({name:"SphericalGaussianBlur",defines:{SAMPLES:ax,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:zl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Zf(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zl(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Jf(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function zl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Bl=class extends yn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new qr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new li(5,5,5),r=new An({name:"CubemapFromEquirect",uniforms:vs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xt,blending:ui});r.uniforms.tEquirect.value=t;let a=new Q(s,r),o=t.minFilter;return t.minFilter===ts&&(t.minFilter=rn),new Wo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}};function fx(n){let e=new WeakMap,t=new WeakMap,i=null;function s(f,m=!1){return f==null?null:m?a(f):r(f)}function r(f){if(f&&f.isTexture){let m=f.mapping;if(m===Zo||m===Jo)if(e.has(f)){let x=e.get(f).texture;return o(x,f.mapping)}else{let x=f.image;if(x&&x.height>0){let _=new Bl(x.height);return _.fromEquirectangularTexture(n,f),e.set(f,_),f.addEventListener("dispose",c),o(_.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){let m=f.mapping,x=m===Zo||m===Jo,_=m===es||m===ys;if(x||_){let p=t.get(f),d=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return i===null&&(i=new fr(n)),p=x?i.fromEquirectangular(f,p):i.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),p.texture;if(p!==void 0)return p.texture;{let S=f.image;return x&&S&&S.height>0||_&&S&&l(S)?(i===null&&(i=new fr(n)),p=x?i.fromEquirectangular(f):i.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),f.addEventListener("dispose",h),p.texture):null}}}return f}function o(f,m){return m===Zo?f.mapping=es:m===Jo&&(f.mapping=ys),f}function l(f){let m=0,x=6;for(let _=0;_<x;_++)f[_]!==void 0&&m++;return m===x}function c(f){let m=f.target;m.removeEventListener("dispose",c);let x=e.get(m);x!==void 0&&(e.delete(m),x.dispose())}function h(f){let m=f.target;m.removeEventListener("dispose",h);let x=t.get(m);x!==void 0&&(t.delete(m),x.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function dx(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&fs("WebGLRenderer: "+i+" extension not supported."),s}}}function px(n,e,t,i){let s={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let x in f.attributes)e.remove(f.attributes[x]);f.removeEventListener("dispose",a),delete s[f.id];let m=r.get(f);m&&(e.remove(m),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let m in f)e.update(f[m],n.ARRAY_BUFFER)}function c(u){let f=[],m=u.index,x=u.attributes.position,_=0;if(x===void 0)return;if(m!==null){let S=m.array;_=m.version;for(let T=0,y=S.length;T<y;T+=3){let w=S[T+0],M=S[T+1],C=S[T+2];f.push(w,M,M,C,C,w)}}else{let S=x.array;_=x.version;for(let T=0,y=S.length/3-1;T<y;T+=3){let w=T+0,M=T+1,C=T+2;f.push(w,M,M,C,C,w)}}let p=new(x.count>=65535?zr:Hr)(f,1);p.version=_;let d=r.get(u);d&&e.remove(d),r.set(u,p)}function h(u){let f=r.get(u);if(f){let m=u.index;m!==null&&f.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function mx(n,e,t){let i;function s(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){n.drawElements(i,f,r,u*a),t.update(f,i,1)}function c(u,f,m){m!==0&&(n.drawElementsInstanced(i,f,r,u*a,m),t.update(f,i,m))}function h(u,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,m);let _=0;for(let p=0;p<m;p++)_+=f[p];t.update(_,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function gx(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:Xe("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function xx(n,e,t){let i=new WeakMap,s=new Dt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(o);if(f===void 0||f.count!==u){let R=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",R)};f!==void 0&&f.texture.dispose();let m=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],T=0;m===!0&&(T=1),x===!0&&(T=2),_===!0&&(T=3);let y=o.attributes.position.count*T,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let M=new Float32Array(y*w*4*u),C=new Br(M,y,w,u);C.type=Un,C.needsUpdate=!0;let v=T*4;for(let P=0;P<u;P++){let U=p[P],D=d[P],H=S[P],N=y*w*4*P;for(let k=0;k<U.count;k++){let O=k*v;m===!0&&(s.fromBufferAttribute(U,k),M[N+O+0]=s.x,M[N+O+1]=s.y,M[N+O+2]=s.z,M[N+O+3]=0),x===!0&&(s.fromBufferAttribute(D,k),M[N+O+4]=s.x,M[N+O+5]=s.y,M[N+O+6]=s.z,M[N+O+7]=0),_===!0&&(s.fromBufferAttribute(H,k),M[N+O+8]=s.x,M[N+O+9]=s.y,M[N+O+10]=s.z,M[N+O+11]=H.itemSize===4?s.w:1)}}f={count:u,texture:C,size:new ue(y,w)},i.set(o,f),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let m=0;for(let _=0;_<c.length;_++)m+=c[_];let x=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function _x(n,e,t,i,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let m=c.skeleton;r.get(m)!==h&&(m.update(),r.set(m,h))}return f}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var yx={[Jc]:"LINEAR_TONE_MAPPING",[$c]:"REINHARD_TONE_MAPPING",[Kc]:"CINEON_TONE_MAPPING",[jc]:"ACES_FILMIC_TONE_MAPPING",[eh]:"AGX_TONE_MAPPING",[la]:"NEUTRAL_TONE_MAPPING",[Qc]:"CUSTOM_TONE_MAPPING"};function vx(n,e,t,i,s,r){let a=new yn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Ft;c.setAttribute("position",new st([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new st([0,2,0,0,2,0],2));let h=new Po({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Q(c,h),f=new sr(-1,1,1,-1,0,1),m=null,x=null,_=!1,p,d=null,S=[],T=!1;this.setSize=function(y,w){a.setSize(y,w),o!==null&&o.setSize(y,w),l!==null&&l.setSize(y,w);for(let M=0;M<S.length;M++){let C=S[M];C.setSize&&C.setSize(y,w)}},this.setEffects=function(y){S=y,T=S.length>0&&S[0].isRenderPass===!0;let w=a.width,M=a.height;S.length>0&&o===null&&(o=new yn(w,M,{type:Xn,depthBuffer:!1,stencilBuffer:!1}),l=new yn(w,M,{type:Xn,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<S.length;C++){let v=S[C];v.setSize&&v.setSize(w,M)}},this.begin=function(y,w){if(_||y.toneMapping===Vn&&S.length===0)return!1;if(d=w,w!==null){let M=w.width,C=w.height;(a.width!==M||a.height!==C)&&this.setSize(M,C)}return T===!1&&y.setRenderTarget(a),p=y.toneMapping,y.toneMapping=Vn,!0},this.hasRenderPass=function(){return T},this.end=function(y,w){y.toneMapping=p,_=!0;let M=a,C=o;for(let v=0;v<S.length;v++){let R=S[v];R.enabled!==!1&&(R.render(y,C,M,w),R.needsSwap!==!1&&(M=C,C=C===o?l:o))}if(m!==y.outputColorSpace||x!==y.toneMapping){m=y.outputColorSpace,x=y.toneMapping,h.defines={},ct.getTransfer(m)===Mt&&(h.defines.SRGB_TRANSFER="");let v=yx[x];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=M.texture,y.setRenderTarget(d),y.render(u,f),d=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var md=new mn,Th=new Zi(1,1),gd=new Br,xd=new bo,_d=new qr,$f=[],Kf=[],jf=new Float32Array(16),Qf=new Float32Array(9),ed=new Float32Array(4);function dr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=$f[s];if(r===void 0&&(r=new Float32Array(s),$f[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function jt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Qt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function kl(n,e){let t=Kf[e];t===void 0&&(t=new Int32Array(e),Kf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Mx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Sx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2fv(this.addr,e),Qt(t,e)}}function bx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;n.uniform3fv(this.addr,e),Qt(t,e)}}function Ex(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4fv(this.addr,e),Qt(t,e)}}function wx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Qt(t,e)}else{if(jt(t,i))return;ed.set(i),n.uniformMatrix2fv(this.addr,!1,ed),Qt(t,i)}}function Tx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Qt(t,e)}else{if(jt(t,i))return;Qf.set(i),n.uniformMatrix3fv(this.addr,!1,Qf),Qt(t,i)}}function Ax(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Qt(t,e)}else{if(jt(t,i))return;jf.set(i),n.uniformMatrix4fv(this.addr,!1,jf),Qt(t,i)}}function Rx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Cx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2iv(this.addr,e),Qt(t,e)}}function Ix(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;n.uniform3iv(this.addr,e),Qt(t,e)}}function Px(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4iv(this.addr,e),Qt(t,e)}}function Lx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Dx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2uiv(this.addr,e),Qt(t,e)}}function Nx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;n.uniform3uiv(this.addr,e),Qt(t,e)}}function Ux(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4uiv(this.addr,e),Qt(t,e)}}function Fx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Th.compareFunction=t.isReversedDepthBuffer()?Ul:Nl,r=Th):r=md,t.setTexture2D(e||r,s)}function Ox(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||xd,s)}function Bx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||_d,s)}function Hx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||gd,s)}function zx(n){switch(n){case 5126:return Mx;case 35664:return Sx;case 35665:return bx;case 35666:return Ex;case 35674:return wx;case 35675:return Tx;case 35676:return Ax;case 5124:case 35670:return Rx;case 35667:case 35671:return Cx;case 35668:case 35672:return Ix;case 35669:case 35673:return Px;case 5125:return Lx;case 36294:return Dx;case 36295:return Nx;case 36296:return Ux;case 35678:case 36198:case 36298:case 36306:case 35682:return Fx;case 35679:case 36299:case 36307:return Ox;case 35680:case 36300:case 36308:case 36293:return Bx;case 36289:case 36303:case 36311:case 36292:return Hx}}function kx(n,e){n.uniform1fv(this.addr,e)}function Gx(n,e){let t=dr(e,this.size,2);n.uniform2fv(this.addr,t)}function Vx(n,e){let t=dr(e,this.size,3);n.uniform3fv(this.addr,t)}function Wx(n,e){let t=dr(e,this.size,4);n.uniform4fv(this.addr,t)}function Xx(n,e){let t=dr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function qx(n,e){let t=dr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Yx(n,e){let t=dr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Zx(n,e){n.uniform1iv(this.addr,e)}function Jx(n,e){n.uniform2iv(this.addr,e)}function $x(n,e){n.uniform3iv(this.addr,e)}function Kx(n,e){n.uniform4iv(this.addr,e)}function jx(n,e){n.uniform1uiv(this.addr,e)}function Qx(n,e){n.uniform2uiv(this.addr,e)}function e_(n,e){n.uniform3uiv(this.addr,e)}function t_(n,e){n.uniform4uiv(this.addr,e)}function n_(n,e,t){let i=this.cache,s=e.length,r=kl(t,s);jt(i,r)||(n.uniform1iv(this.addr,r),Qt(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Th:a=md;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function i_(n,e,t){let i=this.cache,s=e.length,r=kl(t,s);jt(i,r)||(n.uniform1iv(this.addr,r),Qt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||xd,r[a])}function s_(n,e,t){let i=this.cache,s=e.length,r=kl(t,s);jt(i,r)||(n.uniform1iv(this.addr,r),Qt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||_d,r[a])}function r_(n,e,t){let i=this.cache,s=e.length,r=kl(t,s);jt(i,r)||(n.uniform1iv(this.addr,r),Qt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||gd,r[a])}function a_(n){switch(n){case 5126:return kx;case 35664:return Gx;case 35665:return Vx;case 35666:return Wx;case 35674:return Xx;case 35675:return qx;case 35676:return Yx;case 5124:case 35670:return Zx;case 35667:case 35671:return Jx;case 35668:case 35672:return $x;case 35669:case 35673:return Kx;case 5125:return jx;case 36294:return Qx;case 36295:return e_;case 36296:return t_;case 35678:case 36198:case 36298:case 36306:case 35682:return n_;case 35679:case 36299:case 36307:return i_;case 35680:case 36300:case 36308:case 36293:return s_;case 36289:case 36303:case 36311:case 36292:return r_}}var Ah=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=zx(t.type)}},Rh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=a_(t.type)}},Ch=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},Eh=/(\w+)(\])?(\[|\.)?/g;function td(n,e){n.seq.push(e),n.map[e.id]=e}function o_(n,e,t){let i=n.name,s=i.length;for(Eh.lastIndex=0;;){let r=Eh.exec(i),a=Eh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){td(t,c===void 0?new Ah(o,n,e):new Rh(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new Ch(o),td(t,u)),t=u}}}var ur=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);o_(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function nd(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var l_=37297,c_=0;function h_(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var id=new $e;function u_(n){ct._getMatrix(id,ct.workingColorSpace,n);let e=`mat3( ${id.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(n)){case Ur:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return qe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function sd(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+h_(n.getShaderSource(e),o)}else return r}function f_(n,e){let t=u_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var d_={[Jc]:"Linear",[$c]:"Reinhard",[Kc]:"Cineon",[jc]:"ACESFilmic",[eh]:"AgX",[la]:"Neutral",[Qc]:"Custom"};function p_(n,e){let t=d_[e];return t===void 0?(qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ol=new L;function m_(){ct.getLuminanceCoefficients(Ol);let n=Ol.x.toFixed(4),e=Ol.y.toFixed(4),t=Ol.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function g_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(va).join(`
`)}function x_(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function __(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function va(n){return n!==""}function rd(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ad(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var y_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ih(n){return n.replace(y_,M_)}var v_=new Map;function M_(n,e){let t=nt[e];if(t===void 0){let i=v_.get(e);if(i!==void 0)t=nt[i],qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ih(t)}var S_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function od(n){return n.replace(S_,b_)}function b_(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ld(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var E_={[xs]:"SHADOWMAP_TYPE_PCF",[rr]:"SHADOWMAP_TYPE_VSM"};function w_(n){return E_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var T_={[es]:"ENVMAP_TYPE_CUBE",[ys]:"ENVMAP_TYPE_CUBE",[ca]:"ENVMAP_TYPE_CUBE_UV"};function A_(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":T_[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var R_={[ys]:"ENVMAP_MODE_REFRACTION"};function C_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":R_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var I_={[Yo]:"ENVMAP_BLENDING_MULTIPLY",[Mf]:"ENVMAP_BLENDING_MIX",[Sf]:"ENVMAP_BLENDING_ADD"};function P_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":I_[n.combine]||"ENVMAP_BLENDING_NONE"}function L_(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function D_(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=w_(t),c=A_(t),h=C_(t),u=P_(t),f=L_(t),m=g_(t),x=x_(r),_=s.createProgram(),p,d,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(va).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(va).join(`
`),d.length>0&&(d+=`
`)):(p=[ld(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(va).join(`
`),d=[ld(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vn?"#define TONE_MAPPING":"",t.toneMapping!==Vn?nt.tonemapping_pars_fragment:"",t.toneMapping!==Vn?p_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,f_("linearToOutputTexel",t.outputColorSpace),m_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(va).join(`
`)),a=Ih(a),a=rd(a,t),a=ad(a,t),o=Ih(o),o=rd(o,t),o=ad(o,t),a=od(a),o=od(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===ch?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ch?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let T=S+p+a,y=S+d+o,w=nd(s,s.VERTEX_SHADER,T),M=nd(s,s.FRAGMENT_SHADER,y);s.attachShader(_,w),s.attachShader(_,M),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(U){if(n.debug.checkShaderErrors){let D=s.getProgramInfoLog(_)||"",H=s.getShaderInfoLog(w)||"",N=s.getShaderInfoLog(M)||"",k=D.trim(),O=H.trim(),V=N.trim(),ee=!0,J=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(ee=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,w,M);else{let ie=sd(s,w,"vertex"),le=sd(s,M,"fragment");Xe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+k+`
`+ie+`
`+le)}else k!==""?qe("WebGLProgram: Program Info Log:",k):(O===""||V==="")&&(J=!1);J&&(U.diagnostics={runnable:ee,programLog:k,vertexShader:{log:O,prefix:p},fragmentShader:{log:V,prefix:d}})}s.deleteShader(w),s.deleteShader(M),v=new ur(s,_),R=__(s,_)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let R;this.getAttributes=function(){return R===void 0&&C(this),R};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(_,l_)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=c_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=M,this}var N_=0,Ph=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Lh(e),t.set(e,i)),i}},Lh=class{constructor(e){this.id=N_++,this.code=e,this.usedTimes=0}};function U_(n){return n===is||n===ma||n===ga}function F_(n,e,t,i,s,r){let a=new Ks,o=new Ph,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,f=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,R,P,U,D,H){let N=U.fog,k=D.geometry,O=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?U.environment:null,V=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,ee=e.get(v.envMap||O,V),J=ee&&ee.mapping===ca?ee.image.height:null,ie=m[v.type];v.precision!==null&&(f=i.getMaxPrecision(v.precision),f!==v.precision&&qe("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));let le=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Be=le!==void 0?le.length:0,De=0;k.morphAttributes.position!==void 0&&(De=1),k.morphAttributes.normal!==void 0&&(De=2),k.morphAttributes.color!==void 0&&(De=3);let pt,at,ut,j;if(ie){let Ct=di[ie];pt=Ct.vertexShader,at=Ct.fragmentShader}else{pt=v.vertexShader,at=v.fragmentShader;let Ct=o.getVertexShaderStage(v),yt=o.getFragmentShaderStage(v);o.update(v,Ct,yt),ut=Ct.id,j=yt.id}let ae=n.getRenderTarget(),Te=n.state.buffers.depth.getReversed(),Ye=D.isInstancedMesh===!0,Ie=D.isBatchedMesh===!0,Ze=!!v.map,bt=!!v.matcap,oe=!!ee,de=!!v.aoMap,pe=!!v.lightMap,me=!!v.bumpMap&&v.wireframe===!1,ye=!!v.normalMap,Ve=!!v.displacementMap,Ge=!!v.emissiveMap,Je=!!v.metalnessMap,Ke=!!v.roughnessMap,F=v.anisotropy>0,_t=v.clearcoat>0,ot=v.dispersion>0,I=v.retroreflectivity>0,b=v.iridescence>0,G=v.sheen>0,q=v.transmission>0,$=F&&!!v.anisotropyMap,xe=_t&&!!v.clearcoatMap,_e=_t&&!!v.clearcoatNormalMap,K=_t&&!!v.clearcoatRoughnessMap,se=b&&!!v.iridescenceMap,ve=b&&!!v.iridescenceThicknessMap,He=G&&!!v.sheenColorMap,Ee=G&&!!v.sheenRoughnessMap,Me=!!v.specularMap,ze=!!v.specularColorMap,We=!!v.specularIntensityMap,Qe=q&&!!v.transmissionMap,z=q&&!!v.thicknessMap,Se=!!v.gradientMap,ne=!!v.alphaMap,be=v.alphaTest>0,Ce=!!v.alphaHash,he=!!v.extensions,ke=Vn;v.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(ke=n.toneMapping);let Fe={shaderID:ie,shaderType:v.type,shaderName:v.name,vertexShader:pt,fragmentShader:at,defines:v.defines,customVertexShaderID:ut,customFragmentShaderID:j,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:Ie,batchingColor:Ie&&D._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&D.instanceColor!==null,instancingMorph:Ye&&D.morphTexture!==null,outputColorSpace:ae===null?n.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:ct.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ze,matcap:bt,envMap:oe,envMapMode:oe&&ee.mapping,envMapCubeUVHeight:J,aoMap:de,lightMap:pe,bumpMap:me,normalMap:ye,displacementMap:Ve,emissiveMap:Ge,normalMapObjectSpace:ye&&v.normalMapType===wf,normalMapTangentSpace:ye&&v.normalMapType===xa,packedNormalMap:ye&&v.normalMapType===xa&&U_(v.normalMap.format),metalnessMap:Je,roughnessMap:Ke,anisotropy:F,anisotropyMap:$,clearcoat:_t,clearcoatMap:xe,clearcoatNormalMap:_e,clearcoatRoughnessMap:K,dispersion:ot,retroreflection:I,iridescence:b,iridescenceMap:se,iridescenceThicknessMap:ve,sheen:G,sheenColorMap:He,sheenRoughnessMap:Ee,specularMap:Me,specularColorMap:ze,specularIntensityMap:We,transmission:q,transmissionMap:Qe,thicknessMap:z,gradientMap:Se,opaque:v.transparent===!1&&v.blending===ar&&v.alphaToCoverage===!1,alphaMap:ne,alphaTest:be,alphaHash:Ce,combine:v.combine,mapUv:Ze&&x(v.map.channel),aoMapUv:de&&x(v.aoMap.channel),lightMapUv:pe&&x(v.lightMap.channel),bumpMapUv:me&&x(v.bumpMap.channel),normalMapUv:ye&&x(v.normalMap.channel),displacementMapUv:Ve&&x(v.displacementMap.channel),emissiveMapUv:Ge&&x(v.emissiveMap.channel),metalnessMapUv:Je&&x(v.metalnessMap.channel),roughnessMapUv:Ke&&x(v.roughnessMap.channel),anisotropyMapUv:$&&x(v.anisotropyMap.channel),clearcoatMapUv:xe&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:_e&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:He&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&x(v.sheenRoughnessMap.channel),specularMapUv:Me&&x(v.specularMap.channel),specularColorMapUv:ze&&x(v.specularColorMap.channel),specularIntensityMapUv:We&&x(v.specularIntensityMap.channel),transmissionMapUv:Qe&&x(v.transmissionMap.channel),thicknessMapUv:z&&x(v.thicknessMap.channel),alphaMapUv:ne&&x(v.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(ye||F),vertexNormals:!!k.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!k.attributes.uv&&(Ze||ne),fog:!!N,useFog:v.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||k.attributes.normal===void 0&&ye===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Te,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Be,morphTextureStride:De,numSunLights:R.sun.length,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numSunLightShadows:R.sunShadowMap.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:ke,decodeVideoTexture:Ze&&v.map.isVideoTexture===!0&&ct.getTransfer(v.map.colorSpace)===Mt,decodeVideoTextureEmissive:Ge&&v.emissiveMap.isVideoTexture===!0&&ct.getTransfer(v.emissiveMap.colorSpace)===Mt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Rt,flipSided:v.side===Xt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:he&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(he&&v.extensions.multiDraw===!0||Ie)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Fe.vertexUv1s=l.has(1),Fe.vertexUv2s=l.has(2),Fe.vertexUv3s=l.has(3),l.clear(),Fe}function p(v){let R=[];if(v.shaderID?R.push(v.shaderID):(R.push(v.customVertexShaderID),R.push(v.customFragmentShaderID)),v.defines!==void 0)for(let P in v.defines)R.push(P),R.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(d(R,v),S(R,v),R.push(n.outputColorSpace)),R.push(v.customProgramCacheKey),R.join()}function d(v,R){v.push(R.precision),v.push(R.outputColorSpace),v.push(R.envMapMode),v.push(R.envMapCubeUVHeight),v.push(R.mapUv),v.push(R.alphaMapUv),v.push(R.lightMapUv),v.push(R.aoMapUv),v.push(R.bumpMapUv),v.push(R.normalMapUv),v.push(R.displacementMapUv),v.push(R.emissiveMapUv),v.push(R.metalnessMapUv),v.push(R.roughnessMapUv),v.push(R.anisotropyMapUv),v.push(R.clearcoatMapUv),v.push(R.clearcoatNormalMapUv),v.push(R.clearcoatRoughnessMapUv),v.push(R.iridescenceMapUv),v.push(R.iridescenceThicknessMapUv),v.push(R.sheenColorMapUv),v.push(R.sheenRoughnessMapUv),v.push(R.specularMapUv),v.push(R.specularColorMapUv),v.push(R.specularIntensityMapUv),v.push(R.transmissionMapUv),v.push(R.thicknessMapUv),v.push(R.combine),v.push(R.fogExp2),v.push(R.sizeAttenuation),v.push(R.morphTargetsCount),v.push(R.morphAttributeCount),v.push(R.numSunLights),v.push(R.numDirLights),v.push(R.numPointLights),v.push(R.numSpotLights),v.push(R.numSpotLightMaps),v.push(R.numHemiLights),v.push(R.numRectAreaLights),v.push(R.numSunLightShadows),v.push(R.numDirLightShadows),v.push(R.numPointLightShadows),v.push(R.numSpotLightShadows),v.push(R.numSpotLightShadowsWithMaps),v.push(R.numLightProbes),v.push(R.shadowMapType),v.push(R.toneMapping),v.push(R.numClippingPlanes),v.push(R.numClipIntersection),v.push(R.depthPacking)}function S(v,R){a.disableAll(),R.instancing&&a.enable(0),R.instancingColor&&a.enable(1),R.instancingMorph&&a.enable(2),R.matcap&&a.enable(3),R.envMap&&a.enable(4),R.normalMapObjectSpace&&a.enable(5),R.normalMapTangentSpace&&a.enable(6),R.clearcoat&&a.enable(7),R.iridescence&&a.enable(8),R.alphaTest&&a.enable(9),R.vertexColors&&a.enable(10),R.vertexAlphas&&a.enable(11),R.vertexUv1s&&a.enable(12),R.vertexUv2s&&a.enable(13),R.vertexUv3s&&a.enable(14),R.vertexTangents&&a.enable(15),R.anisotropy&&a.enable(16),R.alphaHash&&a.enable(17),R.batching&&a.enable(18),R.dispersion&&a.enable(19),R.retroreflection&&a.enable(24),R.batchingColor&&a.enable(20),R.gradientMap&&a.enable(21),R.packedNormalMap&&a.enable(22),R.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.reversedDepthBuffer&&a.enable(4),R.skinning&&a.enable(5),R.morphTargets&&a.enable(6),R.morphNormals&&a.enable(7),R.morphColors&&a.enable(8),R.premultipliedAlpha&&a.enable(9),R.shadowMapEnabled&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),R.decodeVideoTextureEmissive&&a.enable(20),R.alphaToCoverage&&a.enable(21),R.numLightProbeGrids>0&&a.enable(22),R.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function T(v){let R=m[v.type],P;if(R){let U=di[R];P=Vf.clone(U.uniforms)}else P=v.uniforms;return P}function y(v,R){let P=h.get(R);return P!==void 0?++P.usedTimes:(P=new D_(n,R,v,s),c.push(P),h.set(R,P)),P}function w(v){if(--v.usedTimes===0){let R=c.indexOf(v);c[R]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function M(v){o.remove(v)}function C(){o.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:T,acquireProgram:y,releaseProgram:w,releaseShaderCache:M,programs:c,dispose:C}}function O_(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function B_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function cd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function hd(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(f){let m=0;return f.isInstancedMesh&&(m+=2),f.isSkinnedMesh&&(m+=1),m}function o(f,m,x,_,p,d){let S=n[e];return S===void 0?(S={id:f.id,object:f,geometry:m,material:x,materialVariant:a(f),groupOrder:_,renderOrder:f.renderOrder,z:p,group:d},n[e]=S):(S.id=f.id,S.object=f,S.geometry=m,S.material=x,S.materialVariant=a(f),S.groupOrder=_,S.renderOrder=f.renderOrder,S.z=p,S.group=d),e++,S}function l(f,m,x,_,p,d,S){S.reversedDepth===!0&&(p=-p);let T=o(f,m,x,_,p,d);x.transmission>0?i.push(T):x.transparent===!0?s.push(T):t.push(T)}function c(f,m,x,_,p,d){let S=o(f,m,x,_,p,d);x.transmission>0?i.unshift(S):x.transparent===!0?s.unshift(S):t.unshift(S)}function h(f,m){t.length>1&&t.sort(f||B_),i.length>1&&i.sort(m||cd),s.length>1&&s.sort(m||cd)}function u(){for(let f=e,m=n.length;f<m;f++){let x=n[f];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function H_(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new hd,n.set(i,[a])):s>=r.length?(a=new hd,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function z_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new ge};break;case"SpotLight":t={position:new L,direction:new L,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":t={color:new ge,position:new L,halfWidth:new L,halfHeight:new L};break}return n[e.id]=t,t}}}function k_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var G_=0;function V_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function W_(n){let e=new z_,t=k_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);let s=new L,r=new mt,a=new mt;function o(c){let h=0,u=0,f=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let m=0,x=0,_=0,p=0,d=0,S=0,T=0,y=0,w=0,M=0,C=0,v=0,R=0,P=0;c.sort(V_);for(let D=0,H=c.length;D<H;D++){let N=c[D],k=N.color,O=N.intensity,V=N.distance,ee=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===is?ee=N.shadow.map.texture:ee=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=k.r*O,u+=k.g*O,f+=k.b*O;else if(N.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(N.sh.coefficients[J],O);P++}else if(N.isSunLight){let J=e.get(N);if(J.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let ie=N.shadow,le=t.get(N);le.shadowIntensity=ie.intensity,le.shadowBias=ie.bias,le.shadowNormalBias=ie.normalBias,le.shadowRadius=ie.radius,le.shadowMapSize.copy(ie.mapSize).multiply(ie.getFrameExtents()),i.sunShadow[x]=le,i.sunShadowMap[x]=ee;let Be=ie.getViewportCount();for(let De=0;De<Be;De++)i.sunShadowMatrix[_+De]=ie.getMatrix(De),i.sunShadowCascade[_+De]=ie._cascadeData[De];_+=Be,x++}i.sun[m]=J,m++}else if(N.isDirectionalLight){let J=e.get(N);if(J.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let ie=N.shadow,le=t.get(N);le.shadowIntensity=ie.intensity,le.shadowBias=ie.bias,le.shadowNormalBias=ie.normalBias,le.shadowRadius=ie.radius,le.shadowMapSize=ie.mapSize,i.directionalShadow[p]=le,i.directionalShadowMap[p]=ee,i.directionalShadowMatrix[p]=N.shadow.matrix,w++}i.directional[p]=J,p++}else if(N.isSpotLight){let J=e.get(N);J.position.setFromMatrixPosition(N.matrixWorld),J.color.copy(k).multiplyScalar(O),J.distance=V,J.coneCos=Math.cos(N.angle),J.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),J.decay=N.decay,i.spot[S]=J;let ie=N.shadow;if(N.map&&(i.spotLightMap[v]=N.map,v++,ie.updateMatrices(N),N.castShadow&&R++),i.spotLightMatrix[S]=ie.matrix,N.castShadow){let le=t.get(N);le.shadowIntensity=ie.intensity,le.shadowBias=ie.bias,le.shadowNormalBias=ie.normalBias,le.shadowRadius=ie.radius,le.shadowMapSize=ie.mapSize,i.spotShadow[S]=le,i.spotShadowMap[S]=ee,C++}S++}else if(N.isRectAreaLight){let J=e.get(N);J.color.copy(k).multiplyScalar(O),J.halfWidth.set(N.width*.5,0,0),J.halfHeight.set(0,N.height*.5,0),i.rectArea[T]=J,T++}else if(N.isPointLight){let J=e.get(N);if(J.color.copy(N.color).multiplyScalar(N.intensity),J.distance=N.distance,J.decay=N.decay,N.castShadow){let ie=N.shadow,le=t.get(N);le.shadowIntensity=ie.intensity,le.shadowBias=ie.bias,le.shadowNormalBias=ie.normalBias,le.shadowRadius=ie.radius,le.shadowMapSize=ie.mapSize,le.shadowCameraNear=ie.camera.near,le.shadowCameraFar=ie.camera.far,i.pointShadow[d]=le,i.pointShadowMap[d]=ee,i.pointShadowMatrix[d]=N.shadow.matrix,M++}i.point[d]=J,d++}else if(N.isHemisphereLight){let J=e.get(N);J.skyColor.copy(N.color).multiplyScalar(O),J.groundColor.copy(N.groundColor).multiplyScalar(O),i.hemi[y]=J,y++}}T>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2):(i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let U=i.hash;(U.sunLength!==m||U.directionalLength!==p||U.pointLength!==d||U.spotLength!==S||U.rectAreaLength!==T||U.hemiLength!==y||U.numSunShadows!==x||U.numDirectionalShadows!==w||U.numPointShadows!==M||U.numSpotShadows!==C||U.numSpotMaps!==v||U.numLightProbes!==P)&&(i.sun.length=m,i.directional.length=p,i.spot.length=S,i.rectArea.length=T,i.point.length=d,i.hemi.length=y,i.sunShadow.length=x,i.sunShadowMap.length=x,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=M,i.pointShadowMap.length=M,i.pointShadowMatrix.length=M,i.spotShadow.length=C,i.spotShadowMap.length=C,i.spotLightMatrix.length=C+v-R,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=P,U.sunLength=m,U.directionalLength=p,U.pointLength=d,U.spotLength=S,U.rectAreaLength=T,U.hemiLength=y,U.numSunShadows=x,U.numDirectionalShadows=w,U.numPointShadows=M,U.numSpotShadows=C,U.numSpotMaps=v,U.numLightProbes=P,i.version=G_++)}function l(c,h){let u=0,f=0,m=0,x=0,_=0,p=0,d=h.matrixWorldInverse;for(let S=0,T=c.length;S<T;S++){let y=c[S];if(y.isSunLight){let w=i.sun[u];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(d),u++}else if(y.isDirectionalLight){let w=i.directional[f];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),f++}else if(y.isSpotLight){let w=i.spot[x];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(d),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),x++}else if(y.isRectAreaLight){let w=i.rectArea[_];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(d),a.identity(),r.copy(y.matrixWorld),r.premultiply(d),a.extractRotation(r),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){let w=i.point[m];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(d),m++}else if(y.isHemisphereLight){let w=i.hemi[p];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(d),p++}}}return{setup:o,setupView:l,state:i}}function ud(n){let e=new W_(n),t=[],i=[],s=[];function r(f){u.camera=f,t.length=0,i.length=0,s.length=0}function a(f){t.push(f)}function o(f){i.push(f)}function l(f){s.push(f)}function c(){e.setup(t)}function h(f){e.setupView(t,f)}let u={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function X_(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new ud(n),e.set(s,[o])):r>=a.length?(o=new ud(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var q_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Y_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Z_=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],J_=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],fd=new mt,ya=new L,wh=new L;function $_(n,e,t){let i=new Qs,s=new ue,r=new ue,a=new Dt,o=new Lo,l=new Do,c={},h=t.maxTextureSize,u={[Cn]:Xt,[Xt]:Cn,[Rt]:Rt},f=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:q_,fragmentShader:Y_}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let x=new Ft;x.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Q(x,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xs;let d=this.type;this.render=function(M,C,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;this.type===tf&&(qe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=xs);let R=n.getRenderTarget(),P=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),D=n.state;D.setBlending(ui),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let H=d!==this.type;H&&C.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(k=>k.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,k=M.length;N<k;N++){let O=M[N],V=O.shadow;if(V===void 0){qe("WebGLShadowMap:",O,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let ee=V.getFrameExtents();s.multiply(ee),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ee.x),s.x=r.x*ee.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ee.y),s.y=r.y*ee.y,V.mapSize.y=r.y));let J=n.state.buffers.depth.getReversed();if(V.camera._reversedDepth=J,V.map===null||H===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===rr){if(O.isPointLight){qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new yn(s.x,s.y,{format:is,type:Xn,minFilter:rn,magFilter:rn,generateMipmaps:!1}),V.map.texture.name=O.name+".shadowMap",V.map.depthTexture=new Zi(s.x,s.y,Un),V.map.depthTexture.name=O.name+".shadowMapDepth",V.map.depthTexture.format=ii,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=nn,V.map.depthTexture.magFilter=nn}else O.isPointLight?(V.map=new Bl(s.x),V.map.depthTexture=new wo(s.x,Wn)):(V.map=new yn(s.x,s.y),V.map.depthTexture=new Zi(s.x,s.y,Wn)),V.map.depthTexture.name=O.name+".shadowMap",V.map.depthTexture.format=ii,this.type===xs?(V.map.depthTexture.compareFunction=J?Ul:Nl,V.map.depthTexture.minFilter=rn,V.map.depthTexture.magFilter=rn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=nn,V.map.depthTexture.magFilter=nn);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let ie=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();O.isPointLight!==!0&&V.updateMatrices(O,v);for(let le=0;le<ie;le++){let Be=V.getCamera(le);if(O.isPointLight){let De=V.camera,pt=V.matrix,at=O.distance||De.far;at!==De.far&&(De.far=at,De.updateProjectionMatrix()),ya.setFromMatrixPosition(O.matrixWorld),De.position.copy(ya),wh.copy(De.position),wh.add(Z_[le]),De.up.copy(J_[le]),De.lookAt(wh),De.updateMatrixWorld(),pt.makeTranslation(-ya.x,-ya.y,-ya.z),fd.multiplyMatrices(De.projectionMatrix,De.matrixWorldInverse),V._frustum.setFromProjectionMatrix(fd,De.coordinateSystem,De.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)n.setRenderTarget(V.map,le),n.clear();else{le===0&&(n.setRenderTarget(V.map),n.clear());let De=V.getViewport(le);a.set(r.x*De.x,r.y*De.y,r.x*De.z,r.y*De.w),D.viewport(a)}i=V.getFrustum(le),y(C,v,Be,O,this.type)}V.isPointLightShadow!==!0&&this.type===rr&&S(V,v),V.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(R,P,U)};function S(M,C){let v=e.update(_);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),M.mapPass===null?M.mapPass=new yn(s.x,s.y,{format:is,type:Xn}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),f.uniforms.shadow_pass.value=M.map.depthTexture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(C,null,v,f,_,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value.set(M.map.width,M.map.height),m.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(C,null,v,m,_,null)}function T(M,C,v,R){let P=null,U=v.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(U!==void 0)P=U;else if(P=v.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let D=P.uuid,H=C.uuid,N=c[D];N===void 0&&(N={},c[D]=N);let k=N[H];k===void 0&&(k=P.clone(),N[H]=k,C.addEventListener("dispose",w)),P=k}if(P.visible=C.visible,P.wireframe=C.wireframe,R===rr?P.side=C.shadowSide!==null?C.shadowSide:C.side:P.side=C.shadowSide!==null?C.shadowSide:u[C.side],P.alphaMap=C.alphaMap,P.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,P.map=C.map,P.clipShadows=C.clipShadows,P.clippingPlanes=C.clippingPlanes,P.clipIntersection=C.clipIntersection,P.displacementMap=C.displacementMap,P.displacementScale=C.displacementScale,P.displacementBias=C.displacementBias,P.wireframeLinewidth=C.wireframeLinewidth,P.linewidth=C.linewidth,v.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let D=n.properties.get(P);D.light=v}return P}function y(M,C,v,R,P){if(M.visible===!1)return;if(M.layers.test(C.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&P===rr)&&(!M.frustumCulled||M.intersectsFrustum(i))){M.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,M.matrixWorld);let H=e.update(M),N=M.material;if(Array.isArray(N)){let k=H.groups;for(let O=0,V=k.length;O<V;O++){let ee=k[O],J=N[ee.materialIndex];if(J&&J.visible){let ie=T(M,J,R,P);M.onBeforeShadow(n,M,C,v,H,ie,ee),n.renderBufferDirect(v,null,H,ie,M,ee),M.onAfterShadow(n,M,C,v,H,ie,ee)}}}else if(N.visible){let k=T(M,N,R,P);M.onBeforeShadow(n,M,C,v,H,k,null),n.renderBufferDirect(v,null,H,k,M,null),M.onAfterShadow(n,M,C,v,H,k,null)}}let D=M.children;for(let H=0,N=D.length;H<N;H++)y(D[H],C,v,R,P)}function w(M){M.target.removeEventListener("dispose",w);for(let v in c){let R=c[v],P=M.target.uuid;P in R&&(R[P].dispose(),delete R[P])}}}function K_(n,e){function t(){let z=!1,Se=new Dt,ne=null,be=new Dt(0,0,0,0);return{setMask:function(Ce){ne!==Ce&&!z&&(n.colorMask(Ce,Ce,Ce,Ce),ne=Ce)},setLocked:function(Ce){z=Ce},setClear:function(Ce,he,ke,Fe,Ct){Ct===!0&&(Ce*=Fe,he*=Fe,ke*=Fe),Se.set(Ce,he,ke,Fe),be.equals(Se)===!1&&(n.clearColor(Ce,he,ke,Fe),be.copy(Se))},reset:function(){z=!1,ne=null,be.set(-1,0,0,0)}}}function i(){let z=!1,Se=!1,ne=null,be=null,Ce=null;return{setReversed:function(he){if(Se!==he){let ke=e.get("EXT_clip_control");he?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),Se=he;let Fe=Ce;Ce=null,this.setClear(Fe)}},getReversed:function(){return Se},setTest:function(he){he?ae(n.DEPTH_TEST):Te(n.DEPTH_TEST)},setMask:function(he){ne!==he&&!z&&(n.depthMask(he),ne=he)},setFunc:function(he){if(Se&&(he=Ff[he]),be!==he){switch(he){case ho:n.depthFunc(n.NEVER);break;case uo:n.depthFunc(n.ALWAYS);break;case fo:n.depthFunc(n.LESS);break;case Ys:n.depthFunc(n.LEQUAL);break;case po:n.depthFunc(n.EQUAL);break;case mo:n.depthFunc(n.GEQUAL);break;case go:n.depthFunc(n.GREATER);break;case xo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}be=he}},setLocked:function(he){z=he},setClear:function(he){Ce!==he&&(Ce=he,Se&&(he=1-he),n.clearDepth(he))},reset:function(){z=!1,ne=null,be=null,Ce=null,Se=!1}}}function s(){let z=!1,Se=null,ne=null,be=null,Ce=null,he=null,ke=null,Fe=null,Ct=null;return{setTest:function(yt){z||(yt?ae(n.STENCIL_TEST):Te(n.STENCIL_TEST))},setMask:function(yt){Se!==yt&&!z&&(n.stencilMask(yt),Se=yt)},setFunc:function(yt,Bn,Kn){(ne!==yt||be!==Bn||Ce!==Kn)&&(n.stencilFunc(yt,Bn,Kn),ne=yt,be=Bn,Ce=Kn)},setOp:function(yt,Bn,Kn){(he!==yt||ke!==Bn||Fe!==Kn)&&(n.stencilOp(yt,Bn,Kn),he=yt,ke=Bn,Fe=Kn)},setLocked:function(yt){z=yt},setClear:function(yt){Ct!==yt&&(n.clearStencil(yt),Ct=yt)},reset:function(){z=!1,Se=null,ne=null,be=null,Ce=null,he=null,ke=null,Fe=null,Ct=null}}}let r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},f={},m=new WeakMap,x=[],_=null,p=!1,d=null,S=null,T=null,y=null,w=null,M=null,C=null,v=new ge(0,0,0),R=0,P=!1,U=null,D=null,H=null,N=null,k=null,O=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,ee=0,J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(J)[1]),V=ee>=1):J.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),V=ee>=2);let ie=null,le={},Be=n.getParameter(n.SCISSOR_BOX),De=n.getParameter(n.VIEWPORT),pt=new Dt().fromArray(Be),at=new Dt().fromArray(De);function ut(z,Se,ne,be){let Ce=new Uint8Array(4),he=n.createTexture();n.bindTexture(z,he),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ke=0;ke<ne;ke++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(Se,0,n.RGBA,1,1,be,0,n.RGBA,n.UNSIGNED_BYTE,Ce):n.texImage2D(Se+ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ce);return he}let j={};j[n.TEXTURE_2D]=ut(n.TEXTURE_2D,n.TEXTURE_2D,1),j[n.TEXTURE_CUBE_MAP]=ut(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[n.TEXTURE_2D_ARRAY]=ut(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),j[n.TEXTURE_3D]=ut(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ae(n.DEPTH_TEST),a.setFunc(Ys),me(!1),ye(Vc),ae(n.CULL_FACE),de(ui);function ae(z){h[z]!==!0&&(n.enable(z),h[z]=!0)}function Te(z){h[z]!==!1&&(n.disable(z),h[z]=!1)}function Ye(z,Se){return f[z]!==Se?(n.bindFramebuffer(z,Se),f[z]=Se,z===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Se),z===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Se),!0):!1}function Ie(z,Se){let ne=x,be=!1;if(z){ne=m.get(Se),ne===void 0&&(ne=[],m.set(Se,ne));let Ce=z.textures;if(ne.length!==Ce.length||ne[0]!==n.COLOR_ATTACHMENT0){for(let he=0,ke=Ce.length;he<ke;he++)ne[he]=n.COLOR_ATTACHMENT0+he;ne.length=Ce.length,be=!0}}else ne[0]!==n.BACK&&(ne[0]=n.BACK,be=!0);be&&n.drawBuffers(ne)}function Ze(z){return _!==z?(n.useProgram(z),_=z,!0):!1}let bt={[_s]:n.FUNC_ADD,[sf]:n.FUNC_SUBTRACT,[rf]:n.FUNC_REVERSE_SUBTRACT};bt[af]=n.MIN,bt[of]=n.MAX;let oe={[lf]:n.ZERO,[cf]:n.ONE,[hf]:n.SRC_COLOR,[Yc]:n.SRC_ALPHA,[gf]:n.SRC_ALPHA_SATURATE,[pf]:n.DST_COLOR,[ff]:n.DST_ALPHA,[uf]:n.ONE_MINUS_SRC_COLOR,[Zc]:n.ONE_MINUS_SRC_ALPHA,[mf]:n.ONE_MINUS_DST_COLOR,[df]:n.ONE_MINUS_DST_ALPHA,[xf]:n.CONSTANT_COLOR,[_f]:n.ONE_MINUS_CONSTANT_COLOR,[yf]:n.CONSTANT_ALPHA,[vf]:n.ONE_MINUS_CONSTANT_ALPHA};function de(z,Se,ne,be,Ce,he,ke,Fe,Ct,yt){if(z===ui){p===!0&&(Te(n.BLEND),p=!1);return}if(p===!1&&(ae(n.BLEND),p=!0),z!==nf){if(z!==d||yt!==P){if((S!==_s||w!==_s)&&(n.blendEquation(n.FUNC_ADD),S=_s,w=_s),yt)switch(z){case ar:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wc:n.blendFunc(n.ONE,n.ONE);break;case Xc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case qc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Xe("WebGLState: Invalid blending: ",z);break}else switch(z){case ar:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Xc:Xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case qc:Xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xe("WebGLState: Invalid blending: ",z);break}T=null,y=null,M=null,C=null,v.set(0,0,0),R=0,d=z,P=yt}return}Ce=Ce||Se,he=he||ne,ke=ke||be,(Se!==S||Ce!==w)&&(n.blendEquationSeparate(bt[Se],bt[Ce]),S=Se,w=Ce),(ne!==T||be!==y||he!==M||ke!==C)&&(n.blendFuncSeparate(oe[ne],oe[be],oe[he],oe[ke]),T=ne,y=be,M=he,C=ke),(Fe.equals(v)===!1||Ct!==R)&&(n.blendColor(Fe.r,Fe.g,Fe.b,Ct),v.copy(Fe),R=Ct),d=z,P=!1}function pe(z,Se){z.side===Rt?Te(n.CULL_FACE):ae(n.CULL_FACE);let ne=z.side===Xt;Se&&(ne=!ne),me(ne),z.blending===ar&&z.transparent===!1?de(ui):de(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);let be=z.stencilWrite;o.setTest(be),be&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Ge(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ae(n.SAMPLE_ALPHA_TO_COVERAGE):Te(n.SAMPLE_ALPHA_TO_COVERAGE)}function me(z){U!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),U=z)}function ye(z){z!==Qu?(ae(n.CULL_FACE),z!==D&&(z===Vc?n.cullFace(n.BACK):z===ef?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Te(n.CULL_FACE),D=z}function Ve(z){z!==H&&(V&&n.lineWidth(z),H=z)}function Ge(z,Se,ne){z?(ae(n.POLYGON_OFFSET_FILL),(N!==Se||k!==ne)&&(N=Se,k=ne,a.getReversed()&&(Se=-Se),n.polygonOffset(Se,ne))):Te(n.POLYGON_OFFSET_FILL)}function Je(z){z?ae(n.SCISSOR_TEST):Te(n.SCISSOR_TEST)}function Ke(z){z===void 0&&(z=n.TEXTURE0+O-1),ie!==z&&(n.activeTexture(z),ie=z)}function F(z,Se,ne){ne===void 0&&(ie===null?ne=n.TEXTURE0+O-1:ne=ie);let be=le[ne];be===void 0&&(be={type:void 0,texture:void 0},le[ne]=be),(be.type!==z||be.texture!==Se)&&(ie!==ne&&(n.activeTexture(ne),ie=ne),n.bindTexture(z,Se||j[z]),be.type=z,be.texture=Se)}function _t(){let z=le[ie];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function ot(){try{n.compressedTexImage2D(...arguments)}catch(z){Xe("WebGLState:",z)}}function I(){try{n.compressedTexImage3D(...arguments)}catch(z){Xe("WebGLState:",z)}}function b(){try{n.texSubImage2D(...arguments)}catch(z){Xe("WebGLState:",z)}}function G(){try{n.texSubImage3D(...arguments)}catch(z){Xe("WebGLState:",z)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(z){Xe("WebGLState:",z)}}function $(){try{n.compressedTexSubImage3D(...arguments)}catch(z){Xe("WebGLState:",z)}}function xe(){try{n.texStorage2D(...arguments)}catch(z){Xe("WebGLState:",z)}}function _e(){try{n.texStorage3D(...arguments)}catch(z){Xe("WebGLState:",z)}}function K(){try{n.texImage2D(...arguments)}catch(z){Xe("WebGLState:",z)}}function se(){try{n.texImage3D(...arguments)}catch(z){Xe("WebGLState:",z)}}function ve(z){return u[z]!==void 0?u[z]:n.getParameter(z)}function He(z,Se){u[z]!==Se&&(n.pixelStorei(z,Se),u[z]=Se)}function Ee(z){pt.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),pt.copy(z))}function Me(z){at.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),at.copy(z))}function ze(z,Se){let ne=c.get(Se);ne===void 0&&(ne=new WeakMap,c.set(Se,ne));let be=ne.get(z);be===void 0&&(be=n.getUniformBlockIndex(Se,z.name),ne.set(z,be))}function We(z,Se){let be=c.get(Se).get(z);l.get(Se)!==be&&(n.uniformBlockBinding(Se,be,z.__bindingPointIndex),l.set(Se,be))}function Qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},u={},ie=null,le={},f={},m=new WeakMap,x=[],_=null,p=!1,d=null,S=null,T=null,y=null,w=null,M=null,C=null,v=new ge(0,0,0),R=0,P=!1,U=null,D=null,H=null,N=null,k=null,pt.set(0,0,n.canvas.width,n.canvas.height),at.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ae,disable:Te,bindFramebuffer:Ye,drawBuffers:Ie,useProgram:Ze,setBlending:de,setMaterial:pe,setFlipSided:me,setCullFace:ye,setLineWidth:Ve,setPolygonOffset:Ge,setScissorTest:Je,activeTexture:Ke,bindTexture:F,unbindTexture:_t,compressedTexImage2D:ot,compressedTexImage3D:I,texImage2D:K,texImage3D:se,pixelStorei:He,getParameter:ve,updateUBOMapping:ze,uniformBlockBinding:We,texStorage2D:xe,texStorage3D:_e,texSubImage2D:b,texSubImage3D:G,compressedTexSubImage2D:q,compressedTexSubImage3D:$,scissor:Ee,viewport:Me,reset:Qe}}function j_(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ue,h=new WeakMap,u=new Set,f,m=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(I,b){return x?new OffscreenCanvas(I,b):Fr("canvas")}function p(I,b,G){let q=1,$=ot(I);if(($.width>G||$.height>G)&&(q=G/Math.max($.width,$.height)),q<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let xe=Math.floor(q*$.width),_e=Math.floor(q*$.height);f===void 0&&(f=_(xe,_e));let K=b?_(xe,_e):f;return K.width=xe,K.height=_e,K.getContext("2d").drawImage(I,0,0,xe,_e),qe("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+xe+"x"+_e+")."),K}else return"data"in I&&qe("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),I;return I}function d(I){return I.generateMipmaps}function S(I){n.generateMipmap(I)}function T(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(I,b,G,q,$,xe=!1){if(I!==null){if(n[I]!==void 0)return n[I];qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let _e;q&&(_e=e.get("EXT_texture_norm16"),_e||qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=b;if(b===n.RED&&(G===n.FLOAT&&(K=n.R32F),G===n.HALF_FLOAT&&(K=n.R16F),G===n.UNSIGNED_BYTE&&(K=n.R8),G===n.UNSIGNED_SHORT&&_e&&(K=_e.R16_EXT),G===n.SHORT&&_e&&(K=_e.R16_SNORM_EXT)),b===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(K=n.R8UI),G===n.UNSIGNED_SHORT&&(K=n.R16UI),G===n.UNSIGNED_INT&&(K=n.R32UI),G===n.BYTE&&(K=n.R8I),G===n.SHORT&&(K=n.R16I),G===n.INT&&(K=n.R32I)),b===n.RG&&(G===n.FLOAT&&(K=n.RG32F),G===n.HALF_FLOAT&&(K=n.RG16F),G===n.UNSIGNED_BYTE&&(K=n.RG8),G===n.UNSIGNED_SHORT&&_e&&(K=_e.RG16_EXT),G===n.SHORT&&_e&&(K=_e.RG16_SNORM_EXT)),b===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(K=n.RG8UI),G===n.UNSIGNED_SHORT&&(K=n.RG16UI),G===n.UNSIGNED_INT&&(K=n.RG32UI),G===n.BYTE&&(K=n.RG8I),G===n.SHORT&&(K=n.RG16I),G===n.INT&&(K=n.RG32I)),b===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(K=n.RGB8UI),G===n.UNSIGNED_SHORT&&(K=n.RGB16UI),G===n.UNSIGNED_INT&&(K=n.RGB32UI),G===n.BYTE&&(K=n.RGB8I),G===n.SHORT&&(K=n.RGB16I),G===n.INT&&(K=n.RGB32I)),b===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),G===n.UNSIGNED_INT&&(K=n.RGBA32UI),G===n.BYTE&&(K=n.RGBA8I),G===n.SHORT&&(K=n.RGBA16I),G===n.INT&&(K=n.RGBA32I)),b===n.RGB&&(G===n.UNSIGNED_SHORT&&_e&&(K=_e.RGB16_EXT),G===n.SHORT&&_e&&(K=_e.RGB16_SNORM_EXT),G===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),G===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),b===n.RGBA){let se=xe?Ur:ct.getTransfer($);G===n.FLOAT&&(K=n.RGBA32F),G===n.HALF_FLOAT&&(K=n.RGBA16F),G===n.UNSIGNED_BYTE&&(K=se===Mt?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT&&_e&&(K=_e.RGBA16_EXT),G===n.SHORT&&_e&&(K=_e.RGBA16_SNORM_EXT),G===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function w(I,b){let G;return I?b===null||b===Wn||b===lr?G=n.DEPTH24_STENCIL8:b===Un?G=n.DEPTH32F_STENCIL8:b===or&&(G=n.DEPTH24_STENCIL8,qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Wn||b===lr?G=n.DEPTH_COMPONENT24:b===Un?G=n.DEPTH_COMPONENT32F:b===or&&(G=n.DEPTH_COMPONENT16),G}function M(I,b){return d(I)===!0||I.isFramebufferTexture&&I.minFilter!==nn&&I.minFilter!==rn?Math.log2(Math.max(b.width,b.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?b.mipmaps.length:1}function C(I){let b=I.target;b.removeEventListener("dispose",C),R(b),b.isVideoTexture&&h.delete(b),b.isHTMLTexture&&u.delete(b)}function v(I){let b=I.target;b.removeEventListener("dispose",v),U(b)}function R(I){let b=i.get(I);if(b.__webglInit===void 0)return;let G=I.source,q=m.get(G);if(q){let $=q[b.__cacheKey];$.usedTimes--,$.usedTimes===0&&P(I),Object.keys(q).length===0&&m.delete(G)}i.remove(I)}function P(I){let b=i.get(I);n.deleteTexture(b.__webglTexture);let G=I.source,q=m.get(G);delete q[b.__cacheKey],a.memory.textures--}function U(I){let b=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(b.__webglFramebuffer[q]))for(let $=0;$<b.__webglFramebuffer[q].length;$++)n.deleteFramebuffer(b.__webglFramebuffer[q][$]);else n.deleteFramebuffer(b.__webglFramebuffer[q]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[q])}else{if(Array.isArray(b.__webglFramebuffer))for(let q=0;q<b.__webglFramebuffer.length;q++)n.deleteFramebuffer(b.__webglFramebuffer[q]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let q=0;q<b.__webglColorRenderbuffer.length;q++)b.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[q]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let G=I.textures;for(let q=0,$=G.length;q<$;q++){let xe=i.get(G[q]);xe.__webglTexture&&(n.deleteTexture(xe.__webglTexture),a.memory.textures--),i.remove(G[q])}i.remove(I)}let D=0;function H(){D=0}function N(){return D}function k(I){D=I}function O(){let I=D;return I>=s.maxTextures&&qe("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),D+=1,I}function V(I){let b=[];return b.push(I.wrapS),b.push(I.wrapT),b.push(I.wrapR||0),b.push(I.magFilter),b.push(I.minFilter),b.push(I.anisotropy),b.push(I.internalFormat),b.push(I.format),b.push(I.type),b.push(I.generateMipmaps),b.push(I.premultiplyAlpha),b.push(I.flipY),b.push(I.unpackAlignment),b.push(I.colorSpace),b.join()}function ee(I,b){let G=i.get(I);if(I.isVideoTexture&&F(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&G.__version!==I.version){let q=I.image;if(q===null)qe("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)qe("WebGLRenderer: Texture marked for update but image is incomplete");else{Te(G,I,b);return}}else I.isExternalTexture&&(G.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+b)}function J(I,b){let G=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&G.__version!==I.version){Te(G,I,b);return}else I.isExternalTexture&&(G.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+b)}function ie(I,b){let G=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&G.__version!==I.version){Te(G,I,b);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+b)}function le(I,b){let G=i.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&G.__version!==I.version){Ye(G,I,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+b)}let Be={[Wi]:n.REPEAT,[ti]:n.CLAMP_TO_EDGE,[_o]:n.MIRRORED_REPEAT},De={[nn]:n.NEAREST,[bf]:n.NEAREST_MIPMAP_NEAREST,[ha]:n.NEAREST_MIPMAP_LINEAR,[rn]:n.LINEAR,[$o]:n.LINEAR_MIPMAP_NEAREST,[ts]:n.LINEAR_MIPMAP_LINEAR},pt={[Af]:n.NEVER,[Lf]:n.ALWAYS,[Rf]:n.LESS,[Nl]:n.LEQUAL,[Cf]:n.EQUAL,[Ul]:n.GEQUAL,[If]:n.GREATER,[Pf]:n.NOTEQUAL};function at(I,b){if(b.type===Un&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===rn||b.magFilter===$o||b.magFilter===ha||b.magFilter===ts||b.minFilter===rn||b.minFilter===$o||b.minFilter===ha||b.minFilter===ts)&&qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,Be[b.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,Be[b.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,Be[b.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,De[b.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,De[b.minFilter]),b.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,pt[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===nn||b.minFilter!==ha&&b.minFilter!==ts||b.type===Un&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(I,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function ut(I,b){let G=!1;I.__webglInit===void 0&&(I.__webglInit=!0,b.addEventListener("dispose",C));let q=b.source,$=m.get(q);$===void 0&&($={},m.set(q,$));let xe=V(b);if(xe!==I.__cacheKey){$[xe]===void 0&&($[xe]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,G=!0),$[xe].usedTimes++;let _e=$[I.__cacheKey];_e!==void 0&&($[I.__cacheKey].usedTimes--,_e.usedTimes===0&&P(b)),I.__cacheKey=xe,I.__webglTexture=$[xe].texture}return G}function j(I,b,G){return Math.floor(Math.floor(I/G)/b)}function ae(I,b,G,q){let xe=I.updateRanges;if(xe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,b.width,b.height,G,q,b.data);else{xe.sort((He,Ee)=>He.start-Ee.start);let _e=0;for(let He=1;He<xe.length;He++){let Ee=xe[_e],Me=xe[He],ze=Ee.start+Ee.count,We=j(Me.start,b.width,4),Qe=j(Ee.start,b.width,4);Me.start<=ze+1&&We===Qe&&j(Me.start+Me.count-1,b.width,4)===We?Ee.count=Math.max(Ee.count,Me.start+Me.count-Ee.start):(++_e,xe[_e]=Me)}xe.length=_e+1;let K=t.getParameter(n.UNPACK_ROW_LENGTH),se=t.getParameter(n.UNPACK_SKIP_PIXELS),ve=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,b.width);for(let He=0,Ee=xe.length;He<Ee;He++){let Me=xe[He],ze=Math.floor(Me.start/4),We=Math.ceil(Me.count/4),Qe=ze%b.width,z=Math.floor(ze/b.width),Se=We,ne=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Qe),t.pixelStorei(n.UNPACK_SKIP_ROWS,z),t.texSubImage2D(n.TEXTURE_2D,0,Qe,z,Se,ne,G,q,b.data)}I.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,K),t.pixelStorei(n.UNPACK_SKIP_PIXELS,se),t.pixelStorei(n.UNPACK_SKIP_ROWS,ve)}}function Te(I,b,G){let q=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(q=n.TEXTURE_3D);let $=ut(I,b),xe=b.source;t.bindTexture(q,I.__webglTexture,n.TEXTURE0+G);let _e=i.get(xe);if(xe.version!==_e.__version||$===!0){if(t.activeTexture(n.TEXTURE0+G),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let ne=ct.getPrimaries(ct.workingColorSpace),be=b.colorSpace===qn?null:ct.getPrimaries(b.colorSpace),Ce=b.colorSpace===qn||ne===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce)}t.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment);let se=p(b.image,!1,s.maxTextureSize);se=_t(b,se);let ve=r.convert(b.format,b.colorSpace),He=r.convert(b.type),Ee=y(b.internalFormat,ve,He,b.normalized,b.colorSpace,b.isVideoTexture);at(q,b);let Me,ze=b.mipmaps,We=b.isVideoTexture!==!0,Qe=_e.__version===void 0||$===!0,z=xe.dataReady,Se=M(b,se);if(b.isDepthTexture)Ee=w(b.format===ns,b.type),Qe&&(We?t.texStorage2D(n.TEXTURE_2D,1,Ee,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,Ee,se.width,se.height,0,ve,He,null));else if(b.isDataTexture)if(ze.length>0){We&&Qe&&t.texStorage2D(n.TEXTURE_2D,Se,Ee,ze[0].width,ze[0].height);for(let ne=0,be=ze.length;ne<be;ne++)Me=ze[ne],We?z&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,Me.width,Me.height,ve,He,Me.data):t.texImage2D(n.TEXTURE_2D,ne,Ee,Me.width,Me.height,0,ve,He,Me.data);b.generateMipmaps=!1}else We?(Qe&&t.texStorage2D(n.TEXTURE_2D,Se,Ee,se.width,se.height),z&&ae(b,se,ve,He)):t.texImage2D(n.TEXTURE_2D,0,Ee,se.width,se.height,0,ve,He,se.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){We&&Qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,Ee,ze[0].width,ze[0].height,se.depth);for(let ne=0,be=ze.length;ne<be;ne++)if(Me=ze[ne],b.format!==Fn)if(ve!==null)if(We){if(z)if(b.layerUpdates.size>0){let Ce=ph(Me.width,Me.height,b.format,b.type);for(let he of b.layerUpdates){let ke=Me.data.subarray(he*Ce/Me.data.BYTES_PER_ELEMENT,(he+1)*Ce/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,he,Me.width,Me.height,1,ve,ke)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,Me.width,Me.height,se.depth,ve,Me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ne,Ee,Me.width,Me.height,se.depth,0,Me.data,0,0);else qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?z&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,Me.width,Me.height,se.depth,ve,He,Me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ne,Ee,Me.width,Me.height,se.depth,0,ve,He,Me.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{We&&Qe&&t.texStorage2D(n.TEXTURE_2D,Se,Ee,ze[0].width,ze[0].height);for(let ne=0,be=ze.length;ne<be;ne++)Me=ze[ne],b.format!==Fn?ve!==null?We?z&&t.compressedTexSubImage2D(n.TEXTURE_2D,ne,0,0,Me.width,Me.height,ve,Me.data):t.compressedTexImage2D(n.TEXTURE_2D,ne,Ee,Me.width,Me.height,0,Me.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?z&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,Me.width,Me.height,ve,He,Me.data):t.texImage2D(n.TEXTURE_2D,ne,Ee,Me.width,Me.height,0,ve,He,Me.data)}else if(b.isDataArrayTexture)if(We){if(Qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,Ee,se.width,se.height,se.depth),z)if(b.layerUpdates.size>0){let ne=ph(se.width,se.height,b.format,b.type);for(let be of b.layerUpdates){let Ce=se.data.subarray(be*ne/se.data.BYTES_PER_ELEMENT,(be+1)*ne/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,be,se.width,se.height,1,ve,He,Ce)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ve,He,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ee,se.width,se.height,se.depth,0,ve,He,se.data);else if(b.isData3DTexture)We?(Qe&&t.texStorage3D(n.TEXTURE_3D,Se,Ee,se.width,se.height,se.depth),z&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ve,He,se.data)):t.texImage3D(n.TEXTURE_3D,0,Ee,se.width,se.height,se.depth,0,ve,He,se.data);else if(b.isFramebufferTexture){if(Qe)if(We)t.texStorage2D(n.TEXTURE_2D,Se,Ee,se.width,se.height);else{let ne=se.width,be=se.height;for(let Ce=0;Ce<Se;Ce++)t.texImage2D(n.TEXTURE_2D,Ce,Ee,ne,be,0,ve,He,null),ne>>=1,be>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in n){let ne=n.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),se.parentNode!==ne){ne.appendChild(se),u.add(b),ne.onpaint=be=>{let Ce=be.changedElements;for(let he of u)Ce.includes(he.image)&&(he.needsUpdate=!0)},ne.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,se);else{let Ce=n.RGBA,he=n.RGBA,ke=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ce,he,ke,se)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ze.length>0){if(We&&Qe){let ne=ot(ze[0]);t.texStorage2D(n.TEXTURE_2D,Se,Ee,ne.width,ne.height)}for(let ne=0,be=ze.length;ne<be;ne++)Me=ze[ne],We?z&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,ve,He,Me):t.texImage2D(n.TEXTURE_2D,ne,Ee,ve,He,Me);b.generateMipmaps=!1}else if(We){if(Qe){let ne=ot(se);t.texStorage2D(n.TEXTURE_2D,Se,Ee,ne.width,ne.height)}z&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve,He,se)}else t.texImage2D(n.TEXTURE_2D,0,Ee,ve,He,se);d(b)&&S(q),_e.__version=xe.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function Ye(I,b,G){if(b.image.length!==6)return;let q=ut(I,b),$=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+G);let xe=i.get($);if($.version!==xe.__version||q===!0){t.activeTexture(n.TEXTURE0+G);let _e=ct.getPrimaries(ct.workingColorSpace),K=b.colorSpace===qn?null:ct.getPrimaries(b.colorSpace),se=b.colorSpace===qn||_e===K?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let ve=b.isCompressedTexture||b.image[0].isCompressedTexture,He=b.image[0]&&b.image[0].isDataTexture,Ee=[];for(let he=0;he<6;he++)!ve&&!He?Ee[he]=p(b.image[he],!0,s.maxCubemapSize):Ee[he]=He?b.image[he].image:b.image[he],Ee[he]=_t(b,Ee[he]);let Me=Ee[0],ze=r.convert(b.format,b.colorSpace),We=r.convert(b.type),Qe=y(b.internalFormat,ze,We,b.normalized,b.colorSpace),z=b.isVideoTexture!==!0,Se=xe.__version===void 0||q===!0,ne=$.dataReady,be=M(b,Me);at(n.TEXTURE_CUBE_MAP,b);let Ce;if(ve){z&&Se&&t.texStorage2D(n.TEXTURE_CUBE_MAP,be,Qe,Me.width,Me.height);for(let he=0;he<6;he++){Ce=Ee[he].mipmaps;for(let ke=0;ke<Ce.length;ke++){let Fe=Ce[ke];b.format!==Fn?ze!==null?z?ne&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,ke,0,0,Fe.width,Fe.height,ze,Fe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,ke,Qe,Fe.width,Fe.height,0,Fe.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,ke,0,0,Fe.width,Fe.height,ze,We,Fe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,ke,Qe,Fe.width,Fe.height,0,ze,We,Fe.data)}}}else{if(Ce=b.mipmaps,z&&Se){Ce.length>0&&be++;let he=ot(Ee[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,be,Qe,he.width,he.height)}for(let he=0;he<6;he++)if(He){z?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ee[he].width,Ee[he].height,ze,We,Ee[he].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Qe,Ee[he].width,Ee[he].height,0,ze,We,Ee[he].data);for(let ke=0;ke<Ce.length;ke++){let Ct=Ce[ke].image[he].image;z?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,ke+1,0,0,Ct.width,Ct.height,ze,We,Ct.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,ke+1,Qe,Ct.width,Ct.height,0,ze,We,Ct.data)}}else{z?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,ze,We,Ee[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Qe,ze,We,Ee[he]);for(let ke=0;ke<Ce.length;ke++){let Fe=Ce[ke];z?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,ke+1,0,0,ze,We,Fe.image[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,ke+1,Qe,ze,We,Fe.image[he])}}}d(b)&&S(n.TEXTURE_CUBE_MAP),xe.__version=$.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function Ie(I,b,G,q,$,xe){let _e=r.convert(G.format,G.colorSpace),K=r.convert(G.type),se=y(G.internalFormat,_e,K,G.normalized,G.colorSpace),ve=i.get(b),He=i.get(G);if(He.__renderTarget=b,!ve.__hasExternalTextures){let Ee=Math.max(1,b.width>>xe),Me=Math.max(1,b.height>>xe);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?t.texImage3D($,xe,se,Ee,Me,b.depth,0,_e,K,null):t.texImage2D($,xe,se,Ee,Me,0,_e,K,null)}t.bindFramebuffer(n.FRAMEBUFFER,I),Ke(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,$,He.__webglTexture,0,Je(b)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,$,He.__webglTexture,xe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ze(I,b,G){if(n.bindRenderbuffer(n.RENDERBUFFER,I),b.depthBuffer){let q=b.depthTexture,$=q&&q.isDepthTexture?q.type:null,xe=w(b.stencilBuffer,$),_e=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ke(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Je(b),xe,b.width,b.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,Je(b),xe,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,xe,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,_e,n.RENDERBUFFER,I)}else{let q=b.textures;for(let $=0;$<q.length;$++){let xe=q[$],_e=r.convert(xe.format,xe.colorSpace),K=r.convert(xe.type),se=y(xe.internalFormat,_e,K,xe.normalized,xe.colorSpace);Ke(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Je(b),se,b.width,b.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,Je(b),se,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,se,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function bt(I,b,G){let q=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=i.get(b.depthTexture);if($.__renderTarget=b,(!$.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),q){if($.__webglInit===void 0&&($.__webglInit=!0,b.depthTexture.addEventListener("dispose",C)),$.__webglTexture===void 0){$.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),at(n.TEXTURE_CUBE_MAP,b.depthTexture);let ve=r.convert(b.depthTexture.format),He=r.convert(b.depthTexture.type),Ee;b.depthTexture.format===ii?Ee=n.DEPTH_COMPONENT24:b.depthTexture.format===ns&&(Ee=n.DEPTH24_STENCIL8);for(let Me=0;Me<6;Me++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,Ee,b.width,b.height,0,ve,He,null)}}else ee(b.depthTexture,0);let xe=$.__webglTexture,_e=Je(b),K=q?n.TEXTURE_CUBE_MAP_POSITIVE_X+G:n.TEXTURE_2D,se=b.depthTexture.format===ns?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(b.depthTexture.format===ii)Ke(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,K,xe,0,_e):n.framebufferTexture2D(n.FRAMEBUFFER,se,K,xe,0);else if(b.depthTexture.format===ns)Ke(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,K,xe,0,_e):n.framebufferTexture2D(n.FRAMEBUFFER,se,K,xe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function oe(I){let b=i.get(I),G=I.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==I.depthTexture){let q=I.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),q){let $=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,q.removeEventListener("dispose",$)};q.addEventListener("dispose",$),b.__depthDisposeCallback=$}b.__boundDepthTexture=q}if(I.depthTexture&&!b.__autoAllocateDepthBuffer)if(G)for(let q=0;q<6;q++)bt(b.__webglFramebuffer[q],I,q);else{let q=I.texture.mipmaps;q&&q.length>0?bt(b.__webglFramebuffer[0],I,0):bt(b.__webglFramebuffer,I,0)}else if(G){b.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[q]),b.__webglDepthbuffer[q]===void 0)b.__webglDepthbuffer[q]=n.createRenderbuffer(),Ze(b.__webglDepthbuffer[q],I,!1);else{let $=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=b.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,xe),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,xe)}}else{let q=I.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),Ze(b.__webglDepthbuffer,I,!1);else{let $=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,xe),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,xe)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function de(I,b,G){let q=i.get(I);b!==void 0&&Ie(q.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&oe(I)}function pe(I){let b=I.texture,G=i.get(I),q=i.get(b);I.addEventListener("dispose",v);let $=I.textures,xe=I.isWebGLCubeRenderTarget===!0,_e=$.length>1;if(_e||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=b.version,a.memory.textures++),xe){G.__webglFramebuffer=[];for(let K=0;K<6;K++)if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer[K]=[];for(let se=0;se<b.mipmaps.length;se++)G.__webglFramebuffer[K][se]=n.createFramebuffer()}else G.__webglFramebuffer[K]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer=[];for(let K=0;K<b.mipmaps.length;K++)G.__webglFramebuffer[K]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(_e)for(let K=0,se=$.length;K<se;K++){let ve=i.get($[K]);ve.__webglTexture===void 0&&(ve.__webglTexture=n.createTexture(),a.memory.textures++)}if(I.samples>0&&Ke(I)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let K=0;K<$.length;K++){let se=$[K];G.__webglColorRenderbuffer[K]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[K]);let ve=r.convert(se.format,se.colorSpace),He=r.convert(se.type),Ee=y(se.internalFormat,ve,He,se.normalized,se.colorSpace,I.isXRRenderTarget===!0),Me=Je(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,Me,Ee,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.RENDERBUFFER,G.__webglColorRenderbuffer[K])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),Ze(G.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(xe){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),at(n.TEXTURE_CUBE_MAP,b);for(let K=0;K<6;K++)if(b.mipmaps&&b.mipmaps.length>0)for(let se=0;se<b.mipmaps.length;se++)Ie(G.__webglFramebuffer[K][se],I,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,se);else Ie(G.__webglFramebuffer[K],I,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);d(b)&&S(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let K=0,se=$.length;K<se;K++){let ve=$[K],He=i.get(ve),Ee=n.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ee=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ee,He.__webglTexture),at(Ee,ve),Ie(G.__webglFramebuffer,I,ve,n.COLOR_ATTACHMENT0+K,Ee,0),d(ve)&&S(Ee)}t.unbindTexture()}else{let K=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(K=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(K,q.__webglTexture),at(K,b),b.mipmaps&&b.mipmaps.length>0)for(let se=0;se<b.mipmaps.length;se++)Ie(G.__webglFramebuffer[se],I,b,n.COLOR_ATTACHMENT0,K,se);else Ie(G.__webglFramebuffer,I,b,n.COLOR_ATTACHMENT0,K,0);d(b)&&S(K),t.unbindTexture()}I.depthBuffer&&oe(I)}function me(I){let b=I.textures;for(let G=0,q=b.length;G<q;G++){let $=b[G];if(d($)){let xe=T(I),_e=i.get($).__webglTexture;t.bindTexture(xe,_e),S(xe),t.unbindTexture()}}}let ye=[],Ve=[];function Ge(I){if(I.samples>0){if(Ke(I)===!1){let b=I.textures,G=I.width,q=I.height,$=n.COLOR_BUFFER_BIT,xe=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=i.get(I),K=b.length>1;if(K)for(let ve=0;ve<b.length;ve++)t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);let se=I.texture.mipmaps;se&&se.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let ve=0;ve<b.length;ve++){if(I.resolveDepthBuffer&&(I.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),K){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_e.__webglColorRenderbuffer[ve]);let He=i.get(b[ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,He,0)}n.blitFramebuffer(0,0,G,q,0,0,G,q,$,n.NEAREST),l===!0&&(ye.length=0,Ve.length=0,ye.push(n.COLOR_ATTACHMENT0+ve),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(ye.push(xe),Ve.push(xe),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ve)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ye))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),K)for(let ve=0;ve<b.length;ve++){t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,_e.__webglColorRenderbuffer[ve]);let He=i.get(b[ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,He,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let b=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function Je(I){return Math.min(s.maxSamples,I.samples)}function Ke(I){let b=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function F(I){let b=a.render.frame;h.get(I)!==b&&(h.set(I,b),I.update())}function _t(I,b){let G=I.colorSpace,q=I.format,$=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||G!==Nr&&G!==qn&&(ct.getTransfer(G)===Mt?(q!==Fn||$!==vn)&&qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xe("WebGLTextures: Unsupported texture color space:",G)),b}function ot(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=H,this.getTextureUnits=N,this.setTextureUnits=k,this.setTexture2D=ee,this.setTexture2DArray=J,this.setTexture3D=ie,this.setTextureCube=le,this.rebindTextures=de,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=Ke,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Q_(n,e){function t(i,s=qn){let r,a=ct.getTransfer(s);if(i===vn)return n.UNSIGNED_BYTE;if(i===jo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Qo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===sh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===rh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===nh)return n.BYTE;if(i===ih)return n.SHORT;if(i===or)return n.UNSIGNED_SHORT;if(i===Ko)return n.INT;if(i===Wn)return n.UNSIGNED_INT;if(i===Un)return n.FLOAT;if(i===Xn)return n.HALF_FLOAT;if(i===ah)return n.ALPHA;if(i===oh)return n.RGB;if(i===Fn)return n.RGBA;if(i===ii)return n.DEPTH_COMPONENT;if(i===ns)return n.DEPTH_STENCIL;if(i===el)return n.RED;if(i===tl)return n.RED_INTEGER;if(i===is)return n.RG;if(i===nl)return n.RG_INTEGER;if(i===il)return n.RGBA_INTEGER;if(i===ua||i===fa||i===da||i===pa)if(a===Mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ua)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ua)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===fa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===da)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===pa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===sl||i===rl||i===al||i===ol)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===sl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===rl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===al)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ol)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ll||i===cl||i===hl||i===ul||i===fl||i===ma||i===dl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ll||i===cl)return a===Mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===hl)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===ul)return r.COMPRESSED_R11_EAC;if(i===fl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ma)return r.COMPRESSED_RG11_EAC;if(i===dl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===pl||i===ml||i===gl||i===xl||i===_l||i===yl||i===vl||i===Ml||i===Sl||i===bl||i===El||i===wl||i===Tl||i===Al)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===pl)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ml)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===gl)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===xl)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===_l)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===yl)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===vl)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ml)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Sl)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===bl)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===El)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===wl)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Tl)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Al)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Rl||i===Cl||i===Il)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Rl)return a===Mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Cl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Il)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Pl||i===Ll||i===ga||i===Dl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Pl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ll)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ga)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Dl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===lr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var ey=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ty=`
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

}`,Dh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Yr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new An({vertexShader:ey,fragmentShader:ty,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Q(new Vt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Nh=class extends si{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,m=null,x=null,_=typeof XRWebGLBinding<"u",p=new Dh,d={},S=t.getContextAttributes(),T=null,y=null,w=[],M=[],C=new ue,v=null,R=null,P=new tn;P.viewport=new Dt;let U=new tn;U.viewport=new Dt;let D=[P,U],H=new Xo,N=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ae=w[j];return ae===void 0&&(ae=new js,w[j]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(j){let ae=w[j];return ae===void 0&&(ae=new js,w[j]=ae),ae.getGripSpace()},this.getHand=function(j){let ae=w[j];return ae===void 0&&(ae=new js,w[j]=ae),ae.getHandSpace()};function O(j){let ae=M.indexOf(j.inputSource);if(ae===-1)return;let Te=w[ae];Te!==void 0&&(Te.update(j.inputSource,j.frame,c||a),Te.dispatchEvent({type:j.type,data:j.inputSource}))}function V(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",ee);for(let j=0;j<w.length;j++){let ae=M[j];ae!==null&&(M[j]=null,w[j].disconnect(ae))}N=null,k=null,p.reset();for(let j in d)delete d[j];if(e.setRenderTarget(T),m=null,f=null,u=null,s=null,y=null,ut.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(C.width,C.height,!1),R!==null){let j=R.camera;j.fov=R.fov,j.zoom=R.zoom,j.updateProjectionMatrix(),R=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",V),s.addEventListener("inputsourceschange",ee),S.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,Ye=null,Ie=null;S.depth&&(Ie=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Te=S.stencil?ns:ii,Ye=S.stencil?lr:Wn);let Ze={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Ze),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new yn(f.textureWidth,f.textureHeight,{format:Fn,type:vn,depthTexture:new Zi(f.textureWidth,f.textureHeight,Ye,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Te={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,Te),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new yn(m.framebufferWidth,m.framebufferHeight,{format:Fn,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ut.setContext(s),ut.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ee(j){for(let ae=0;ae<j.removed.length;ae++){let Te=j.removed[ae],Ye=M.indexOf(Te);Ye>=0&&(M[Ye]=null,w[Ye].disconnect(Te))}for(let ae=0;ae<j.added.length;ae++){let Te=j.added[ae],Ye=M.indexOf(Te);if(Ye===-1){for(let Ze=0;Ze<w.length;Ze++)if(Ze>=M.length){M.push(Te),Ye=Ze;break}else if(M[Ze]===null){M[Ze]=Te,Ye=Ze;break}if(Ye===-1)break}let Ie=w[Ye];Ie&&Ie.connect(Te)}}let J=new L,ie=new L;function le(j,ae,Te){J.setFromMatrixPosition(ae.matrixWorld),ie.setFromMatrixPosition(Te.matrixWorld);let Ye=J.distanceTo(ie),Ie=ae.projectionMatrix.elements,Ze=Te.projectionMatrix.elements,bt=Ie[14]/(Ie[10]-1),oe=Ie[14]/(Ie[10]+1),de=(Ie[9]+1)/Ie[5],pe=(Ie[9]-1)/Ie[5],me=(Ie[8]-1)/Ie[0],ye=(Ze[8]+1)/Ze[0],Ve=bt*me,Ge=bt*ye,Je=Ye/(-me+ye),Ke=Je*-me;if(ae.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ke),j.translateZ(Je),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ie[10]===-1)j.projectionMatrix.copy(ae.projectionMatrix),j.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{let F=bt+Je,_t=oe+Je,ot=Ve-Ke,I=Ge+(Ye-Ke),b=de*oe/_t*F,G=pe*oe/_t*F;j.projectionMatrix.makePerspective(ot,I,b,G,F,_t),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Be(j,ae){ae===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ae.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let ae=j.near,Te=j.far;p.texture!==null&&(p.depthNear>0&&(ae=p.depthNear),p.depthFar>0&&(Te=p.depthFar)),H.near=U.near=P.near=ae,H.far=U.far=P.far=Te,(N!==H.near||k!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),N=H.near,k=H.far),H.layers.mask=j.layers.mask|6,P.layers.mask=H.layers.mask&-5,U.layers.mask=H.layers.mask&-3;let Ye=j.parent,Ie=H.cameras;Be(H,Ye);for(let Ze=0;Ze<Ie.length;Ze++)Be(Ie[Ze],Ye);Ie.length===2?le(H,P,U):H.projectionMatrix.copy(P.projectionMatrix),R===null&&j.isPerspectiveCamera&&(R={camera:j,fov:j.fov,zoom:j.zoom}),De(j,H,Ye)};function De(j,ae,Te){Te===null?j.matrix.copy(ae.matrixWorld):(j.matrix.copy(Te.matrixWorld),j.matrix.invert(),j.matrix.multiply(ae.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ae.projectionMatrix),j.projectionMatrixInverse.copy(ae.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=vo*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=j)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(H)},this.getCameraTexture=function(j){return d[j]};let pt=null;function at(j,ae){if(h=ae.getViewerPose(c||a),x=ae,h!==null){let Te=h.views;m!==null&&(e.setRenderTargetFramebuffer(y,m.framebuffer),e.setRenderTarget(y));let Ye=!1;Te.length!==H.cameras.length&&(H.cameras.length=0,Ye=!0);for(let oe=0;oe<Te.length;oe++){let de=Te[oe],pe=null;if(m!==null)pe=m.getViewport(de);else{let ye=u.getViewSubImage(f,de);pe=ye.viewport,oe===0&&(e.setRenderTargetTextures(y,ye.colorTexture,ye.depthStencilTexture),e.setRenderTarget(y))}let me=D[oe];me===void 0&&(me=new tn,me.layers.enable(oe),me.viewport=new Dt,D[oe]=me),me.matrix.fromArray(de.transform.matrix),me.matrix.decompose(me.position,me.quaternion,me.scale),me.projectionMatrix.fromArray(de.projectionMatrix),me.projectionMatrixInverse.copy(me.projectionMatrix).invert(),me.viewport.set(pe.x,pe.y,pe.width,pe.height),oe===0&&(H.matrix.copy(me.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Ye===!0&&H.cameras.push(me)}let Ie=s.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=i.getBinding();let oe=u.getDepthInformation(Te[0]);oe&&oe.isValid&&oe.texture&&p.init(oe,s.renderState)}if(Ie&&Ie.includes("camera-access")&&_){e.state.unbindTexture(),u=i.getBinding();for(let oe=0;oe<Te.length;oe++){let de=Te[oe].camera;if(de){let pe=d[de];pe||(pe=new Yr,d[de]=pe);let me=u.getCameraImage(de);pe.sourceTexture=me}}}}for(let Te=0;Te<w.length;Te++){let Ye=M[Te],Ie=w[Te];Ye!==null&&Ie!==void 0&&Ie.update(Ye,ae,c||a)}pt&&pt(j,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),x=null}let ut=new dd;ut.setAnimationLoop(at),this.setAnimationLoop=function(j){pt=j},this.dispose=function(){}}},ny=new mt,yd=new $e;yd.set(-1,0,0,0,1,0,0,0,1);function iy(n,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,uh(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,S,T,y){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(p,d):d.isMeshLambertMaterial?(r(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),h(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,y)):d.isMeshMatcapMaterial?(r(p,d),x(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),_(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,S,T):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Xt&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Xt&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let S=e.get(d),T=S.envMap,y=S.envMapRotation;T&&(p.envMap.value=T,p.envMapRotation.value.setFromMatrix4(ny.makeRotationFromEuler(y)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(yd),p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,S,T){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*S,p.scale.value=T*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,S){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Xt&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.retroreflectivity>0&&(p.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,d){d.matcap&&(p.matcap.value=d.matcap)}function _(p,d){let S=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function sy(n,e,t,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,w){let M=w.program;i.uniformBlockBinding(y,M)}function c(y,w){let M=s[y.id];M===void 0&&(p(y),M=h(y),s[y.id]=M,y.addEventListener("dispose",S));let C=w.program;i.updateUBOMapping(y,C);let v=e.render.frame;r[y.id]!==v&&(f(y),r[y.id]=v)}function h(y){let w=u();y.__bindingPointIndex=w;let M=n.createBuffer(),C=y.__size,v=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,C,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,M),M}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Xe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let w=s[y.id],M=y.uniforms,C=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let v=0,R=M.length;v<R;v++){let P=M[v];if(Array.isArray(P))for(let U=0,D=P.length;U<D;U++)m(P[U],v,U,C);else m(P,v,0,C)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(y,w,M,C){if(_(y,w,M,C)===!0){let v=y.__offset,R=y.value;if(Array.isArray(R)){let P=0;for(let U=0;U<R.length;U++){let D=R[U],H=d(D);x(D,y.__data,P),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(P+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(R,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,y.__data)}}function x(y,w,M){typeof y=="number"||typeof y=="boolean"?w[0]=y:y.isMatrix3?(w[0]=y.elements[0],w[1]=y.elements[1],w[2]=y.elements[2],w[3]=0,w[4]=y.elements[3],w[5]=y.elements[4],w[6]=y.elements[5],w[7]=0,w[8]=y.elements[6],w[9]=y.elements[7],w[10]=y.elements[8],w[11]=0):ArrayBuffer.isView(y)?w.set(new y.constructor(y.buffer,y.byteOffset,w.length)):y.toArray(w,M)}function _(y,w,M,C){let v=y.value,R=w+"_"+M;if(C[R]===void 0)return typeof v=="number"||typeof v=="boolean"?C[R]=v:ArrayBuffer.isView(v)?C[R]=v.slice():C[R]=v.clone(),!0;{let P=C[R];if(typeof v=="number"||typeof v=="boolean"){if(P!==v)return C[R]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(P.equals(v)===!1)return P.copy(v),!0}}return!1}function p(y){let w=y.uniforms,M=0,C=16;for(let R=0,P=w.length;R<P;R++){let U=Array.isArray(w[R])?w[R]:[w[R]];for(let D=0,H=U.length;D<H;D++){let N=U[D],k=Array.isArray(N.value)?N.value:[N.value];for(let O=0,V=k.length;O<V;O++){let ee=k[O],J=d(ee),ie=M%C,le=ie%J.boundary,Be=ie+le;M+=le,Be!==0&&C-Be<J.storage&&(M+=C-Be),N.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=M,M+=J.storage}}}let v=M%C;return v>0&&(M+=C-v),y.__size=M,y.__cache={},this}function d(y){let w={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(w.boundary=4,w.storage=4):y.isVector2?(w.boundary=8,w.storage=8):y.isVector3||y.isColor?(w.boundary=16,w.storage=12):y.isVector4?(w.boundary=16,w.storage=16):y.isMatrix3?(w.boundary=48,w.storage=48):y.isMatrix4?(w.boundary=64,w.storage=64):y.isTexture?qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(w.boundary=16,w.storage=y.byteLength):qe("WebGLRenderer: Unsupported uniform value type.",y),w}function S(y){let w=y.target;w.removeEventListener("dispose",S);let M=a.indexOf(w.__bindingPointIndex);a.splice(M,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function T(){for(let y in s)n.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:T}}var ry=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),fi=null;function ay(){return fi===null&&(fi=new Vr(ry,16,16,is,Xn),fi.name="DFG_LUT",fi.minFilter=rn,fi.magFilter=rn,fi.wrapS=ti,fi.wrapT=ti,fi.generateMipmaps=!1,fi.needsUpdate=!0),fi}var Hl=class{constructor(e={}){let{canvas:t=Df(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:m=vn}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=a;let _=m,p=new Set([il,nl,tl]),d=new Set([vn,Wn,or,lr,jo,Qo]),S=new Uint32Array(4),T=new Int32Array(4),y=new L,w=null,M=null,C=[],v=[],R=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,U=!1,D=null,H=null,N=null,k=null;this._outputColorSpace=$t;let O=0,V=0,ee=null,J=-1,ie=null,le=new Dt,Be=new Dt,De=null,pt=new ge(0),at=0,ut=t.width,j=t.height,ae=1,Te=null,Ye=null,Ie=new Dt(0,0,ut,j),Ze=new Dt(0,0,ut,j),bt=!1,oe=new Qs,de=!1,pe=!1,me=new mt,ye=new L,Ve=new Dt,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Je=!1;function Ke(){return ee===null?ae:1}let F=i;function _t(A,B){return t.getContext(A,B)}let ot,I,b,G,q,$,xe,_e,K,se,ve,He,Ee,Me,ze,We,Qe,z,Se,ne,be,Ce,he;try{let A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Ct,!1),t.addEventListener("webglcontextrestored",yt,!1),t.addEventListener("webglcontextcreationerror",Bn,!1),F===null){let B="webgl2";if(F=_t(B,A),F===null)throw _t(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ke()}catch(A){throw t.removeEventListener("webglcontextlost",Ct,!1),t.removeEventListener("webglcontextrestored",yt,!1),t.removeEventListener("webglcontextcreationerror",Bn,!1),Xe("WebGLRenderer: "+A.message),A}function ke(){ot=new dx(F),ot.init(),be=new Q_(F,ot),I=new ix(F,ot,e,be),b=new K_(F,ot),I.reversedDepthBuffer&&f&&b.buffers.depth.setReversed(!0),H=F.createFramebuffer(),N=F.createFramebuffer(),k=F.createFramebuffer(),G=new gx(F),q=new O_,$=new j_(F,ot,b,q,I,be,G),xe=new fx(P),_e=new _0(F),Ce=new tx(F,_e),K=new px(F,_e,G,Ce),se=new _x(F,K,_e,Ce,G),z=new xx(F,I,$),ze=new sx(q),ve=new F_(P,xe,ot,I,Ce,ze),He=new iy(P,q),Ee=new H_,Me=new X_(ot),Qe=new ex(P,xe,b,se,x,l),We=new $_(P,se,I),he=new sy(F,G,I,b),Se=new nx(F,ot,G),ne=new mx(F,ot,G),G.programs=ve.programs,P.capabilities=I,P.extensions=ot,P.properties=q,P.renderLists=Ee,P.shadowMap=We,P.state=b,P.info=G}_!==vn&&(R=new vx(_,t.width,t.height,o,s,r));let Fe=new Nh(P,F);this.xr=Fe,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let A=ot.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=ot.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(A){A!==void 0&&(ae=A,this.setSize(ut,j,!1))},this.getSize=function(A){return A.set(ut,j)},this.setSize=function(A,B,Y=!0){if(Fe.isPresenting){qe("WebGLRenderer: Can't change size while VR device is presenting.");return}ut=A,j=B,t.width=Math.floor(A*ae),t.height=Math.floor(B*ae),Y===!0&&(t.style.width=A+"px",t.style.height=B+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(ut*ae,j*ae).floor()},this.setDrawingBufferSize=function(A,B,Y){ut=A,j=B,ae=Y,t.width=Math.floor(A*Y),t.height=Math.floor(B*Y),this.setViewport(0,0,A,B)},this.setEffects=function(A){if(_===vn){Xe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let B=0;B<A.length;B++)if(A[B].isOutputPass===!0){qe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(le)},this.getViewport=function(A){return A.copy(Ie)},this.setViewport=function(A,B,Y,W){A.isVector4?Ie.set(A.x,A.y,A.z,A.w):Ie.set(A,B,Y,W),b.viewport(le.copy(Ie).multiplyScalar(ae).round())},this.getScissor=function(A){return A.copy(Ze)},this.setScissor=function(A,B,Y,W){A.isVector4?Ze.set(A.x,A.y,A.z,A.w):Ze.set(A,B,Y,W),b.scissor(Be.copy(Ze).multiplyScalar(ae).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(A){b.setScissorTest(bt=A)},this.setOpaqueSort=function(A){Te=A},this.setTransparentSort=function(A){Ye=A},this.getClearColor=function(A){return A.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor(...arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha(...arguments)},this.clear=function(A=!0,B=!0,Y=!0){let W=0;if(A){let X=!1;if(ee!==null){let Re=ee.texture.format;X=p.has(Re)}if(X){let Re=ee.texture.type,Le=d.has(Re),Ae=Qe.getClearColor(),Ne=Qe.getClearAlpha(),Oe=Ae.r,tt=Ae.g,lt=Ae.b;Le?(S[0]=Oe,S[1]=tt,S[2]=lt,S[3]=Ne,F.clearBufferuiv(F.COLOR,0,S)):(T[0]=Oe,T[1]=tt,T[2]=lt,T[3]=Ne,F.clearBufferiv(F.COLOR,0,T))}else W|=F.COLOR_BUFFER_BIT}B&&(W|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(W|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&F.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),D=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Ct,!1),t.removeEventListener("webglcontextrestored",yt,!1),t.removeEventListener("webglcontextcreationerror",Bn,!1),Qe.dispose(),Ee.dispose(),Me.dispose(),q.dispose(),xe.dispose(),se.dispose(),Ce.dispose(),he.dispose(),ve.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",uu),Fe.removeEventListener("sessionend",fu),os.stop()};function Ct(A){A.preventDefault(),Or("WebGLRenderer: Context Lost."),U=!0}function yt(){Or("WebGLRenderer: Context Restored."),U=!1;let A=G.autoReset,B=We.enabled,Y=We.autoUpdate,W=We.needsUpdate,X=We.type;ke(),G.autoReset=A,We.enabled=B,We.autoUpdate=Y,We.needsUpdate=W,We.type=X}function Bn(A){Xe("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Kn(A){let B=A.target;B.removeEventListener("dispose",Kn),tp(B)}function tp(A){np(A),q.remove(A)}function np(A){let B=q.get(A).programs;B!==void 0&&(B.forEach(function(Y){ve.releaseProgram(Y)}),A.isShaderMaterial&&ve.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,Y,W,X,Re){B===null&&(B=Ge);let Le=X.isMesh&&X.matrixWorld.determinantAffine()<0,Ae=rp(A,B,Y,W,X);b.setMaterial(W,Le);let Ne=Y.index,Oe=1;if(W.wireframe===!0){if(Ne=K.getWireframeAttribute(Y),Ne===void 0)return;Oe=2}let tt=Y.drawRange,lt=Y.attributes.position,Ue=tt.start*Oe,vt=(tt.start+tt.count)*Oe;Re!==null&&(Ue=Math.max(Ue,Re.start*Oe),vt=Math.min(vt,(Re.start+Re.count)*Oe)),Ne!==null?(Ue=Math.max(Ue,0),vt=Math.min(vt,Ne.count)):lt!=null&&(Ue=Math.max(Ue,0),vt=Math.min(vt,lt.count));let Yt=vt-Ue;if(Yt<0||Yt===1/0)return;Ce.setup(X,W,Ae,Y,Ne);let Pt,At=Se;if(Ne!==null&&(Pt=_e.get(Ne),At=ne,At.setIndex(Pt)),X.isMesh)W.wireframe===!0?(b.setLineWidth(W.wireframeLinewidth*Ke()),At.setMode(F.LINES)):At.setMode(F.TRIANGLES);else if(X.isLine){let ln=W.linewidth;ln===void 0&&(ln=1),b.setLineWidth(ln*Ke()),X.isLineSegments?At.setMode(F.LINES):X.isLineLoop?At.setMode(F.LINE_LOOP):At.setMode(F.LINE_STRIP)}else X.isPoints?At.setMode(F.POINTS):X.isSprite&&At.setMode(F.TRIANGLES);if(X.isBatchedMesh)if(ot.get("WEBGL_multi_draw"))At.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let ln=X._multiDrawStarts,Pe=X._multiDrawCounts,dn=X._multiDrawCount,ft=Ne?_e.get(Ne).bytesPerElement:1,Pn=q.get(W).currentProgram.getUniforms();for(let jn=0;jn<dn;jn++)Pn.setValue(F,"_gl_DrawID",jn),At.render(ln[jn]/ft,Pe[jn])}else if(X.isInstancedMesh)At.renderInstances(Ue,Yt,X.count);else if(Y.isInstancedBufferGeometry){let ln=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Pe=Math.min(Y.instanceCount,ln);At.renderInstances(Ue,Yt,Pe)}else At.render(Ue,Yt)};function hu(A,B,Y,W){D!==null&&A.isNodeMaterial&&D.setObject(W,A),de===!0&&ze.setState(A,Y,!1),A.transparent===!0&&A.side===Rt&&A.forceSinglePass===!1?(A.side=Xt,A.needsUpdate=!0,Fa(A,B,W),A.side=Cn,A.needsUpdate=!0,Fa(A,B,W),A.side=Rt):Fa(A,B,W)}this.compile=function(A,B,Y=null){Y===null&&(Y=A),D!==null&&D.renderStart(A,B,Y),M=Me.get(Y),M.init(B),v.push(M),Y.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(M.pushLight(X),X.castShadow&&M.pushShadow(X))}),A!==Y&&A.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(M.pushLight(X),X.castShadow&&M.pushShadow(X))}),M.setupLights(),D!==null&&D.updateLights(M.state.lightsArray),pe=this.localClippingEnabled,de=ze.init(this.clippingPlanes,pe),de===!0&&ze.setGlobalState(this.clippingPlanes,B),D!==null&&We.render(M.state.shadowsArray,Y,B);let W=new Set;return A.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let Re=X.material;if(Re)if(Array.isArray(Re))for(let Le=0;Le<Re.length;Le++){let Ae=Re[Le];hu(Ae,Y,B,X),W.add(Ae)}else hu(Re,Y,B,X),W.add(Re)}),M=v.pop(),D!==null&&D.renderEnd(),W},this.compileAsync=function(A,B,Y=null){let W=this.compile(A,B,Y);return new Promise(X=>{function Re(){if(W.forEach(function(Le){let Ne=q.get(Le).currentProgram;(Ne===void 0||Ne.isReady())&&W.delete(Le)}),W.size===0){X(A);return}setTimeout(Re,10)}ot.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let tc=null;function ip(A){tc&&tc(A)}function uu(){os.stop()}function fu(){os.start()}let os=new dd;os.setAnimationLoop(ip),typeof self<"u"&&os.setContext(self),this.setAnimationLoop=function(A){tc=A,Fe.setAnimationLoop(A),A===null?os.stop():os.start()},Fe.addEventListener("sessionstart",uu),Fe.addEventListener("sessionend",fu),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){Xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;D!==null&&D.renderStart(A,B);let Y=Fe.enabled===!0&&Fe.isPresenting===!0,W=R!==null&&(ee===null||Y)&&R.begin(P,ee);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(B),B=Fe.getCamera()),A.isScene===!0&&A.onBeforeRender(P,A,B,ee),M=Me.get(A,v.length),M.init(B),M.state.textureUnits=$.getTextureUnits(),v.push(M),me.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),oe.setFromProjectionMatrix(me,Gn,B.reversedDepth),pe=this.localClippingEnabled,de=ze.init(this.clippingPlanes,pe),w=Ee.get(A,C.length),w.init(),C.push(w),Fe.enabled===!0&&Fe.isPresenting===!0){let Le=P.xr.getDepthSensingMesh();Le!==null&&nc(Le,B,-1/0,P.sortObjects)}nc(A,B,0,P.sortObjects),w.finish(),D!==null&&D.updateLights(M.state.lightsArray),P.sortObjects===!0&&w.sort(Te,Ye),Je=Fe.enabled===!1||Fe.isPresenting===!1||Fe.hasDepthSensing()===!1,Je&&Qe.addToRenderList(w,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),de===!0&&ze.beginShadows();let X=M.state.shadowsArray;if(We.render(X,A,B),de===!0&&ze.endShadows(),(W&&R.hasRenderPass())===!1){let Le=w.opaque,Ae=w.transmissive;if(M.setupLights(),B.isArrayCamera){let Ne=B.cameras;if(Ae.length>0)for(let Oe=0,tt=Ne.length;Oe<tt;Oe++){let lt=Ne[Oe];pu(Le,Ae,A,lt)}Je&&Qe.render(A);for(let Oe=0,tt=Ne.length;Oe<tt;Oe++){let lt=Ne[Oe];du(w,A,lt,lt.viewport)}}else Ae.length>0&&pu(Le,Ae,A,B),Je&&Qe.render(A),du(w,A,B)}ee!==null&&V===0&&($.updateMultisampleRenderTarget(ee),$.updateRenderTargetMipmap(ee)),W&&R.end(P),A.isScene===!0&&A.onAfterRender(P,A,B),Ce.resetDefaultState(),J=-1,ie=null,v.pop(),v.length>0?(M=v[v.length-1],$.setTextureUnits(M.state.textureUnits),de===!0&&ze.setGlobalState(P.clippingPlanes,M.state.camera)):M=null,C.pop(),C.length>0?w=C[C.length-1]:w=null,D!==null&&D.renderEnd()};function nc(A,B,Y,W){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)Y=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLightProbeGrid)M.pushLightProbeGrid(A);else if(A.isLight)M.pushLight(A),A.castShadow&&M.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(oe)){W&&Ve.setFromMatrixPosition(A.matrixWorld).applyMatrix4(me);let Le=se.update(A),Ae=A.material;Ae.visible&&w.push(A,Le,Ae,Y,Ve.z,null,B)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(oe))){let Le=se.update(A),Ae=A.material;if(W&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ve.copy(A.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Ve.copy(Le.boundingSphere.center)),Ve.applyMatrix4(A.matrixWorld).applyMatrix4(me)),Array.isArray(Ae)){let Ne=Le.groups;for(let Oe=0,tt=Ne.length;Oe<tt;Oe++){let lt=Ne[Oe],Ue=Ae[lt.materialIndex];Ue&&Ue.visible&&w.push(A,Le,Ue,Y,Ve.z,lt,B)}}else Ae.visible&&w.push(A,Le,Ae,Y,Ve.z,null,B)}}let Re=A.children;for(let Le=0,Ae=Re.length;Le<Ae;Le++)nc(Re[Le],B,Y,W)}function du(A,B,Y,W){let{opaque:X,transmissive:Re,transparent:Le}=A;M.setupLightsView(Y),de===!0&&ze.setGlobalState(P.clippingPlanes,Y),W&&b.viewport(le.copy(W)),X.length>0&&Ua(X,B,Y),Re.length>0&&Ua(Re,B,Y),Le.length>0&&Ua(Le,B,Y),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function pu(A,B,Y,W){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[W.id]===void 0){let Ue=ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[W.id]=new yn(1,1,{generateMipmaps:!0,type:Ue?Xn:vn,minFilter:ts,samples:Math.max(4,I.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ct.workingColorSpace})}let Re=M.state.transmissionRenderTarget[W.id],Le=W.viewport||le;Re.setSize(Le.z*P.transmissionResolutionScale,Le.w*P.transmissionResolutionScale);let Ae=P.getRenderTarget(),Ne=P.getActiveCubeFace(),Oe=P.getActiveMipmapLevel();P.setRenderTarget(Re),P.getClearColor(pt),at=P.getClearAlpha(),at<1&&P.setClearColor(16777215,.5),P.clear(),Je&&Qe.render(Y);let tt=P.toneMapping;P.toneMapping=Vn;let lt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),M.setupLightsView(W),de===!0&&ze.setGlobalState(P.clippingPlanes,W),Ua(A,Y,W),$.updateMultisampleRenderTarget(Re),$.updateRenderTargetMipmap(Re),ot.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let vt=0,Yt=B.length;vt<Yt;vt++){let Pt=B[vt],{object:At,geometry:ln,material:Pe,group:dn}=Pt;if(Pe.side===Rt&&At.layers.test(W.layers)){let ft=Pe.side;Pe.side=Xt,Pe.needsUpdate=!0,mu(At,Y,W,ln,Pe,dn),Pe.side=ft,Pe.needsUpdate=!0,Ue=!0}}Ue===!0&&($.updateMultisampleRenderTarget(Re),$.updateRenderTargetMipmap(Re))}P.setRenderTarget(Ae,Ne,Oe),P.setClearColor(pt,at),lt!==void 0&&(W.viewport=lt),P.toneMapping=tt}function Ua(A,B,Y){let W=B.isScene===!0?B.overrideMaterial:null;for(let X=0,Re=A.length;X<Re;X++){let Le=A[X],{object:Ae,geometry:Ne,group:Oe}=Le,tt=Le.material;tt.allowOverride===!0&&W!==null&&(tt=W),Ae.layers.test(Y.layers)&&mu(Ae,B,Y,Ne,tt,Oe)}}function mu(A,B,Y,W,X,Re){D!==null&&X.isNodeMaterial&&D.setObject(A,X),A.onBeforeRender(P,B,Y,W,X,Re),A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(P,B,Y,W,A,Re),X.transparent===!0&&X.side===Rt&&X.forceSinglePass===!1?(X.side=Xt,X.needsUpdate=!0,P.renderBufferDirect(Y,B,W,X,A,Re),X.side=Cn,X.needsUpdate=!0,P.renderBufferDirect(Y,B,W,X,A,Re),X.side=Rt):P.renderBufferDirect(Y,B,W,X,A,Re),A.onAfterRender(P,B,Y,W,X,Re)}function Fa(A,B,Y){B.isScene!==!0&&(B=Ge);let W=q.get(A),X=M.state.lights,Re=M.state.shadowsArray,Le=X.state.version,Ae=ve.getParameters(A,X.state,Re,B,Y,M.state.lightProbeGridArray),Ne=ve.getProgramCacheKey(Ae),Oe=W.programs;W.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?B.environment:null,W.fog=B.fog;let tt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;W.envMap=xe.get(A.envMap||W.environment,tt),W.envMapRotation=W.environment!==null&&A.envMap===null?B.environmentRotation:A.envMapRotation,Oe===void 0&&(A.addEventListener("dispose",Kn),Oe=new Map,W.programs=Oe);let lt=Oe.get(Ne);if(lt!==void 0){if(W.currentProgram===lt&&W.lightsStateVersion===Le)return xu(A,Ae),lt}else Ae.uniforms=ve.getUniforms(A),D!==null&&A.isNodeMaterial&&D.build(A,Y,Ae),A.onBeforeCompile(Ae,P),lt=ve.acquireProgram(Ae,Ne),Oe.set(Ne,lt),W.uniforms=Ae.uniforms;let Ue=W.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ue.clippingPlanes=ze.uniform),xu(A,Ae),W.needsLights=op(A),W.lightsStateVersion=Le,W.needsLights&&(Ue.ambientLightColor.value=X.state.ambient,Ue.lightProbe.value=X.state.probe,Ue.sunLights.value=X.state.sun,Ue.sunLightShadows.value=X.state.sunShadow,Ue.directionalLights.value=X.state.directional,Ue.directionalLightShadows.value=X.state.directionalShadow,Ue.spotLights.value=X.state.spot,Ue.spotLightShadows.value=X.state.spotShadow,Ue.rectAreaLights.value=X.state.rectArea,Ue.ltc_1.value=X.state.rectAreaLTC1,Ue.ltc_2.value=X.state.rectAreaLTC2,Ue.pointLights.value=X.state.point,Ue.pointLightShadows.value=X.state.pointShadow,Ue.hemisphereLights.value=X.state.hemi,Ue.sunShadowMatrix.value=X.state.sunShadowMatrix,Ue.sunShadowCascade.value=X.state.sunShadowCascade,Ue.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ue.spotLightMatrix.value=X.state.spotLightMatrix,Ue.spotLightMap.value=X.state.spotLightMap,Ue.pointShadowMatrix.value=X.state.pointShadowMatrix),W.lightProbeGrid=M.state.lightProbeGridArray.length>0,W.currentProgram=lt,W.uniformsList=null,lt}function gu(A){if(A.uniformsList===null){let B=A.currentProgram.getUniforms();A.uniformsList=ur.seqWithValue(B.seq,A.uniforms)}return A.uniformsList}function xu(A,B){let Y=q.get(A);Y.outputColorSpace=B.outputColorSpace,Y.batching=B.batching,Y.batchingColor=B.batchingColor,Y.instancing=B.instancing,Y.instancingColor=B.instancingColor,Y.instancingMorph=B.instancingMorph,Y.skinning=B.skinning,Y.morphTargets=B.morphTargets,Y.morphNormals=B.morphNormals,Y.morphColors=B.morphColors,Y.morphTargetsCount=B.morphTargetsCount,Y.numClippingPlanes=B.numClippingPlanes,Y.numIntersection=B.numClipIntersection,Y.vertexAlphas=B.vertexAlphas,Y.vertexTangents=B.vertexTangents,Y.toneMapping=B.toneMapping}function sp(A,B){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;y.setFromMatrixPosition(B.matrixWorld);for(let Y=0,W=A.length;Y<W;Y++){let X=A[Y];if(X.texture!==null&&X.boundingBox.containsPoint(y))return X}return null}function rp(A,B,Y,W,X){B.isScene!==!0&&(B=Ge),$.resetTextureUnits();let Re=B.fog,Le=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?B.environment:null,Ae=ee===null?P.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:ct.workingColorSpace,Ne=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Oe=xe.get(W.envMap||Le,Ne),tt=W.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,lt=!!Y.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ue=!!Y.morphAttributes.position,vt=!!Y.morphAttributes.normal,Yt=!!Y.morphAttributes.color,Pt=Vn;W.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Pt=P.toneMapping);let At=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ln=At!==void 0?At.length:0,Pe=q.get(W),dn=M.state.lights;if(de===!0&&(pe===!0||A!==ie)){let It=A===ie&&W.id===J;ze.setState(W,A,It)}let ft=!1;W.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==dn.state.version||Pe.outputColorSpace!==Ae||X.isBatchedMesh&&Pe.batching===!1||!X.isBatchedMesh&&Pe.batching===!0||X.isBatchedMesh&&Pe.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Pe.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Pe.instancing===!1||!X.isInstancedMesh&&Pe.instancing===!0||X.isSkinnedMesh&&Pe.skinning===!1||!X.isSkinnedMesh&&Pe.skinning===!0||X.isInstancedMesh&&Pe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Pe.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Pe.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Pe.instancingMorph===!1&&X.morphTexture!==null||Pe.envMap!==Oe||W.fog===!0&&Pe.fog!==Re||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==ze.numPlanes||Pe.numIntersection!==ze.numIntersection)||Pe.vertexAlphas!==tt||Pe.vertexTangents!==lt||Pe.morphTargets!==Ue||Pe.morphNormals!==vt||Pe.morphColors!==Yt||Pe.toneMapping!==Pt||Pe.morphTargetsCount!==ln||!!Pe.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(ft=!0):(ft=!0,Pe.__version=W.version);let Pn=Pe.currentProgram;ft===!0&&(Pn=Fa(W,B,X),D&&W.isNodeMaterial&&D.onUpdateProgram(W,Pn,Pe));let jn=!1,Fi=!1,Ts=!1,Et=Pn.getUniforms(),Wt=Pe.uniforms;if(b.useProgram(Pn.program)&&(jn=!0,Fi=!0,Ts=!0),W.id!==J&&(J=W.id,Fi=!0),Pe.needsLights){let It=sp(M.state.lightProbeGridArray,X);Pe.lightProbeGrid!==It&&(Pe.lightProbeGrid=It,Fi=!0)}if(jn||ie!==A){b.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Et.setValue(F,"projectionMatrix",A.projectionMatrix),Et.setValue(F,"viewMatrix",A.matrixWorldInverse);let Bi=Et.map.cameraPosition;Bi!==void 0&&Bi.setValue(F,ye.setFromMatrixPosition(A.matrixWorld)),I.logarithmicDepthBuffer&&Et.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Et.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),ie!==A&&(ie=A,Fi=!0,Ts=!0)}if(Pe.needsLights&&(dn.state.sunShadowMap.length>0&&Et.setValue(F,"sunShadowMap",dn.state.sunShadowMap,$),dn.state.directionalShadowMap.length>0&&Et.setValue(F,"directionalShadowMap",dn.state.directionalShadowMap,$),dn.state.spotShadowMap.length>0&&Et.setValue(F,"spotShadowMap",dn.state.spotShadowMap,$),dn.state.pointShadowMap.length>0&&Et.setValue(F,"pointShadowMap",dn.state.pointShadowMap,$)),X.isSkinnedMesh){Et.setOptional(F,X,"bindMatrix"),Et.setOptional(F,X,"bindMatrixInverse");let It=X.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),Et.setValue(F,"boneTexture",It.boneTexture,$))}X.isBatchedMesh&&(Et.setOptional(F,X,"batchingTexture"),Et.setValue(F,"batchingTexture",X._matricesTexture,$),Et.setOptional(F,X,"batchingIdTexture"),Et.setValue(F,"batchingIdTexture",X._indirectTexture,$),Et.setOptional(F,X,"batchingColorTexture"),X._colorsTexture!==null&&Et.setValue(F,"batchingColorTexture",X._colorsTexture,$));let Oi=Y.morphAttributes;if((Oi.position!==void 0||Oi.normal!==void 0||Oi.color!==void 0)&&z.update(X,Y,Pn),(Fi||Pe.receiveShadow!==X.receiveShadow)&&(Pe.receiveShadow=X.receiveShadow,Et.setValue(F,"receiveShadow",X.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&B.environment!==null&&(Wt.envMapIntensity.value=B.environmentIntensity),Wt.dfgLUT!==void 0&&(Wt.dfgLUT.value=ay()),Fi){if(Et.setValue(F,"toneMappingExposure",P.toneMappingExposure),Pe.needsLights&&ap(Wt,Ts),Re&&W.fog===!0&&He.refreshFogUniforms(Wt,Re),He.refreshMaterialUniforms(Wt,W,ae,j,M.state.transmissionRenderTarget[A.id]),Pe.needsLights&&Pe.lightProbeGrid){let It=Pe.lightProbeGrid;Wt.probesSH.value=It.texture,Wt.probesMin.value.copy(It.boundingBox.min),Wt.probesMax.value.copy(It.boundingBox.max),Wt.probesResolution.value.copy(It.resolution)}ur.upload(F,gu(Pe),Wt,$)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ur.upload(F,gu(Pe),Wt,$),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Et.setValue(F,"center",X.center),Et.setValue(F,"modelViewMatrix",X.modelViewMatrix),Et.setValue(F,"normalMatrix",X.normalMatrix),Et.setValue(F,"modelMatrix",X.matrixWorld),W.uniformsGroups!==void 0){let It=W.uniformsGroups;for(let Bi=0,As=It.length;Bi<As;Bi++){let yu=It[Bi];he.update(yu,Pn),he.bind(yu,Pn)}}return Pn}function ap(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.sunLights.needsUpdate=B,A.sunLightShadows.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function op(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(A,B,Y){let W=q.get(A);W.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),q.get(A.texture).__webglTexture=B,q.get(A.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:Y,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,B){let Y=q.get(A);Y.__webglFramebuffer=B,Y.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(A,B=0,Y=0){ee=A,O=B,V=Y;let W=null,X=!1,Re=!1;if(A){let Ae=q.get(A);if(Ae.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(F.FRAMEBUFFER,Ae.__webglFramebuffer),le.copy(A.viewport),Be.copy(A.scissor),De=A.scissorTest,b.viewport(le),b.scissor(Be),b.setScissorTest(De),J=-1;return}else if(Ae.__webglFramebuffer===void 0)$.setupRenderTarget(A);else if(Ae.__hasExternalTextures)$.rebindTextures(A,q.get(A.texture).__webglTexture,q.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let tt=A.depthTexture;if(Ae.__boundDepthTexture!==tt){if(tt!==null&&q.has(tt)&&(A.width!==tt.image.width||A.height!==tt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(A)}}let Ne=A.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Re=!0);let Oe=q.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Oe[B])?W=Oe[B][Y]:W=Oe[B],X=!0):A.samples>0&&$.useMultisampledRTT(A)===!1?W=q.get(A).__webglMultisampledFramebuffer:Array.isArray(Oe)?W=Oe[Y]:W=Oe,le.copy(A.viewport),Be.copy(A.scissor),De=A.scissorTest}else le.copy(Ie).multiplyScalar(ae).floor(),Be.copy(Ze).multiplyScalar(ae).floor(),De=bt;if(Y!==0&&(W=H),b.bindFramebuffer(F.FRAMEBUFFER,W)&&b.drawBuffers(A,W),b.viewport(le),b.scissor(Be),b.setScissorTest(De),X){let Ae=q.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ae.__webglTexture,Y)}else if(Re){let Ae=B;for(let Ne=0;Ne<A.textures.length;Ne++){let Oe=q.get(A.textures[Ne]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ne,Oe.__webglTexture,Y,Ae)}}else if(A!==null&&Y!==0){let Ae=q.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ae.__webglTexture,Y)}J=-1};function _u(A){let B=q.get(A);return(B.__readFormat!==A.format||B.__readType!==A.type)&&(B.__readFormat=A.format,B.__readType=A.type,B.__formatReadable=I.textureFormatReadable(A.format),B.__typeReadable=I.textureTypeReadable(A.type)),B}this.readRenderTargetPixels=function(A,B,Y,W,X,Re,Le,Ae=0){if(!(A&&A.isWebGLRenderTarget)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=q.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(Ne=Ne[Le]),Ne){b.bindFramebuffer(F.FRAMEBUFFER,Ne);try{let Oe=A.textures[Ae],tt=Oe.format,lt=Oe.type;A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ae);let Ue=_u(Oe);if(Ue.__formatReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ue.__typeReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-W&&Y>=0&&Y<=A.height-X&&F.readPixels(B,Y,W,X,be.convert(tt),be.convert(lt),Re)}finally{let Oe=ee!==null?q.get(ee).__webglFramebuffer:null;b.bindFramebuffer(F.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(A,B,Y,W,X,Re,Le,Ae=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=q.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(Ne=Ne[Le]),Ne)if(B>=0&&B<=A.width-W&&Y>=0&&Y<=A.height-X){b.bindFramebuffer(F.FRAMEBUFFER,Ne);let Oe=A.textures[Ae],tt=Oe.format,lt=Oe.type;A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ae);let Ue=_u(Oe);if(Ue.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ue.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let vt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,vt),F.bufferData(F.PIXEL_PACK_BUFFER,Re.byteLength,F.STREAM_READ),F.readPixels(B,Y,W,X,be.convert(tt),be.convert(lt),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Yt=ee!==null?q.get(ee).__webglFramebuffer:null;b.bindFramebuffer(F.FRAMEBUFFER,Yt);let Pt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Uf(F,Pt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,vt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Re),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(vt),F.deleteSync(Pt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,B=null,Y=0){let W=Math.pow(2,-Y),X=Math.floor(A.image.width*W),Re=Math.floor(A.image.height*W),Le=B!==null?B.x:0,Ae=B!==null?B.y:0;$.setTexture2D(A,0),F.copyTexSubImage2D(F.TEXTURE_2D,Y,0,0,Le,Ae,X,Re),b.unbindTexture()},this.copyTextureToTexture=function(A,B,Y=null,W=null,X=0,Re=0){let Le,Ae,Ne,Oe,tt,lt,Ue,vt,Yt,Pt=A.isCompressedTexture?A.mipmaps[Re]:A.image;if(Y!==null)Le=Y.max.x-Y.min.x,Ae=Y.max.y-Y.min.y,Ne=Y.isBox3?Y.max.z-Y.min.z:1,Oe=Y.min.x,tt=Y.min.y,lt=Y.isBox3?Y.min.z:0;else{let Wt=Math.pow(2,-X);Le=Math.floor(Pt.width*Wt),Ae=Math.floor(Pt.height*Wt),A.isDataArrayTexture?Ne=Pt.depth:A.isData3DTexture?Ne=Math.floor(Pt.depth*Wt):Ne=1,Oe=0,tt=0,lt=0}W!==null?(Ue=W.x,vt=W.y,Yt=W.z):(Ue=0,vt=0,Yt=0);let At=be.convert(B.format),ln=be.convert(B.type),Pe;B.isData3DTexture?($.setTexture3D(B,0),Pe=F.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?($.setTexture2DArray(B,0),Pe=F.TEXTURE_2D_ARRAY):($.setTexture2D(B,0),Pe=F.TEXTURE_2D),b.activeTexture(F.TEXTURE0),b.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,B.flipY),b.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),b.pixelStorei(F.UNPACK_ALIGNMENT,B.unpackAlignment);let dn=b.getParameter(F.UNPACK_ROW_LENGTH),ft=b.getParameter(F.UNPACK_IMAGE_HEIGHT),Pn=b.getParameter(F.UNPACK_SKIP_PIXELS),jn=b.getParameter(F.UNPACK_SKIP_ROWS),Fi=b.getParameter(F.UNPACK_SKIP_IMAGES);b.pixelStorei(F.UNPACK_ROW_LENGTH,Pt.width),b.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Pt.height),b.pixelStorei(F.UNPACK_SKIP_PIXELS,Oe),b.pixelStorei(F.UNPACK_SKIP_ROWS,tt),b.pixelStorei(F.UNPACK_SKIP_IMAGES,lt);let Ts=A.isDataArrayTexture||A.isData3DTexture,Et=B.isDataArrayTexture||B.isData3DTexture;if(A.isDepthTexture){let Wt=q.get(A),Oi=q.get(B),It=q.get(Wt.__renderTarget),Bi=q.get(Oi.__renderTarget);b.bindFramebuffer(F.READ_FRAMEBUFFER,It.__webglFramebuffer),b.bindFramebuffer(F.DRAW_FRAMEBUFFER,Bi.__webglFramebuffer);for(let As=0;As<Ne;As++)Ts&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,q.get(A).__webglTexture,X,lt+As),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,q.get(B).__webglTexture,Re,Yt+As)),F.blitFramebuffer(Oe,tt,Le,Ae,Ue,vt,Le,Ae,F.DEPTH_BUFFER_BIT,F.NEAREST);b.bindFramebuffer(F.READ_FRAMEBUFFER,null),b.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(X!==0||A.isRenderTargetTexture||q.has(A)){let Wt=q.get(A),Oi=q.get(B);b.bindFramebuffer(F.READ_FRAMEBUFFER,N),b.bindFramebuffer(F.DRAW_FRAMEBUFFER,k);for(let It=0;It<Ne;It++)Ts?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Wt.__webglTexture,X,lt+It):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Wt.__webglTexture,X),Et?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Oi.__webglTexture,Re,Yt+It):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Oi.__webglTexture,Re),X!==0?F.blitFramebuffer(Oe,tt,Le,Ae,Ue,vt,Le,Ae,F.COLOR_BUFFER_BIT,F.NEAREST):Et?F.copyTexSubImage3D(Pe,Re,Ue,vt,Yt+It,Oe,tt,Le,Ae):F.copyTexSubImage2D(Pe,Re,Ue,vt,Oe,tt,Le,Ae);b.bindFramebuffer(F.READ_FRAMEBUFFER,null),b.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Et?A.isDataTexture||A.isData3DTexture?F.texSubImage3D(Pe,Re,Ue,vt,Yt,Le,Ae,Ne,At,ln,Pt.data):B.isCompressedArrayTexture?F.compressedTexSubImage3D(Pe,Re,Ue,vt,Yt,Le,Ae,Ne,At,Pt.data):F.texSubImage3D(Pe,Re,Ue,vt,Yt,Le,Ae,Ne,At,ln,Pt):A.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Re,Ue,vt,Le,Ae,At,ln,Pt.data):A.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Re,Ue,vt,Pt.width,Pt.height,At,Pt.data):F.texSubImage2D(F.TEXTURE_2D,Re,Ue,vt,Le,Ae,At,ln,Pt);b.pixelStorei(F.UNPACK_ROW_LENGTH,dn),b.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ft),b.pixelStorei(F.UNPACK_SKIP_PIXELS,Pn),b.pixelStorei(F.UNPACK_SKIP_ROWS,jn),b.pixelStorei(F.UNPACK_SKIP_IMAGES,Fi),Re===0&&B.generateMipmaps&&F.generateMipmap(Pe),b.unbindTexture()},this.initRenderTarget=function(A){q.get(A).__webglFramebuffer===void 0&&$.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?$.setTextureCube(A,0):A.isData3DTexture?$.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?$.setTexture2DArray(A,0):$.setTexture2D(A,0),b.unbindTexture()},this.resetState=function(){O=0,V=0,ee=null,b.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}};var Gl=class extends Xi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new li;e.deleteAttribute("uv");let t=new an({side:Xt}),i=new an,s=new Qi(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Q(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Xr(e,i,6),o=new Kt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Q(e,pr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Q(e,pr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Q(e,pr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new Q(e,pr(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let f=new Q(e,pr(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let m=new Q(e,pr(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function pr(n){return new ia({color:0,emissive:16777215,emissiveIntensity:n})}function Fh(n,e={}){let t=new Hl({canvas:n,antialias:!0,alpha:!!e.alpha,preserveDrawingBuffer:!!e.preserve,powerPreference:"high-performance"});return t.outputColorSpace=$t,t.toneMapping=la,t.toneMappingExposure=e.exposure??.92,t.shadowMap.enabled=!0,t.shadowMap.type=xs,e.alpha&&t.setClearColor(0,0),t}var Uh=new WeakMap;function Oh(n){if(Uh.has(n))return Uh.get(n);let e=new fr(n),t=e.fromScene(new Gl,.04).texture;return e.dispose(),Uh.set(n,t),t}function Bh(n,e={}){let t=new ce;n.add(t);let i=new ra(e.sky??16774114,e.ground??12159594,e.hemi??.55),s=new ms(e.keyColor??16773340,e.key??2.9);s.position.set(-2.2,4.2,3.4),s.castShadow=!0,s.shadow.mapSize.set(e.shadowSize??2048,e.shadowSize??2048),s.shadow.camera.left=-3,s.shadow.camera.right=3,s.shadow.camera.top=3.4,s.shadow.camera.bottom=-1.2,s.shadow.camera.near=.5,s.shadow.camera.far=14,s.shadow.bias=-4e-4,s.shadow.normalBias=.02,s.shadow.radius=6;let r=new ms(e.fillColor??13624063,e.fill??.55);r.position.set(3,2,2.5);let a=new ms(e.rimColor??16774888,e.rim??1.3);return a.position.set(1.5,3,-4),t.add(i,s,s.target,r,a),{group:t,hemi:i,key:s,fill:r,rim:a}}var g=(n=0,e=0,t=0)=>new L(n,e,t),vd=new ge;function Ma(n,e){let t=new ge(n);return e>0?t.lerp(vd.set("#ffffff"),e):t.lerp(vd.set("#2a1830"),-e),t}var Ci=new Map;function te(n,e={}){let t="skin"+n+JSON.stringify(e);if(Ci.has(t))return Ci.get(t);let i=new je({color:new ge(n),roughness:e.roughness??.5,metalness:0,sheen:e.sheen??.3,sheenRoughness:.6,sheenColor:Ma(n,.35),clearcoat:e.clearcoat??.12,clearcoatRoughness:.45,side:e.side??Cn,transparent:!!e.transparent,opacity:e.opacity??1});return i.userData.shared=!0,Ci.set(t,i),i}function re(n,e={}){let t="gl"+n+JSON.stringify(e);if(Ci.has(t))return Ci.get(t);let i=new je({color:new ge(n),roughness:e.roughness??.22,metalness:e.metalness??0,clearcoat:1,clearcoatRoughness:.08,transparent:!!e.transparent,opacity:e.opacity??1,transmission:e.transmission??0,thickness:e.thickness??0,ior:e.ior??1.45,emissive:e.emissive?new ge(e.emissive):new ge(0),emissiveIntensity:e.emissiveIntensity??0});return i.userData.shared=!0,Ci.set(t,i),i}function Mn(n,e={}){let t="mt"+n+JSON.stringify(e);if(Ci.has(t))return Ci.get(t);let i=new an({color:new ge(n),roughness:e.roughness??.85,metalness:e.metalness??0,map:e.map||null,transparent:!!e.transparent,opacity:e.opacity??1,side:e.side??Cn,emissive:e.emissive?new ge(e.emissive):new ge(0),emissiveIntensity:e.emissiveIntensity??0});return i.userData.shared=!0,Ci.set(t,i),i}var Ss=(n,e={})=>new Gt({color:new ge(n),transparent:!!e.transparent,opacity:e.opacity??1,depthWrite:e.depthWrite??!0,map:e.map||null,toneMapped:e.toneMapped??!0}),Hh=new Map;function zh(n){if(!Hh.has(n)){let e=new St(1,n,Math.round(n*.66));e.userData.shared=!0,Hh.set(n,e)}return Hh.get(n)}function Z(n,e,t,i,s={}){let r=new Q(zh(s.seg||44),i);return r.position.copy(e),r.scale.set(t.x,t.y,t.z),s.rot&&r.rotation.set(s.rot.x||0,s.rot.y||0,s.rot.z||0),r.castShadow=s.shadow!==!1,r.receiveShadow=!0,s.part&&(r.userData.part=s.part),n.add(r),r.surf=a=>oy(r,a),r}function oy(n,e){let t=n.quaternion.clone(),i=e.clone().applyQuaternion(t.clone().invert()).normalize(),s=n.scale,r=1/Math.sqrt((i.x/1)**2+(i.y/1)**2+(i.z/1)**2),o=1/g(i.x/s.x,i.y/s.y,i.z/s.z).length(),l=g(i.x*o,i.y*o,i.z*o),c=g(l.x/(s.x*s.x),l.y/(s.y*s.y),l.z/(s.z*s.z)).applyQuaternion(t).normalize();return{p:l.applyQuaternion(t).add(n.position),n:c}}function Ii(n,e,t=g(0,1,0)){let i=e.clone().normalize(),s=t.clone().cross(i);s.lengthSq()<1e-6&&(s=g(1,0,0)),s.normalize();let r=i.clone().cross(s).normalize();return n.quaternion.setFromRotationMatrix(new mt().makeBasis(s,r,i)),n}function et(n,e,t,i,s={}){let r=new tr(e,!1,"centripetal"),a=s.tubular||64,o=s.radial||28,l=r.computeFrenetFrames(a,!1),c=[],h=[],u=_=>{let p=_*(t.length-1),d=Math.min(t.length-2,Math.floor(p)),S=p-d,T=t[d],y=t[d+1];return T+(y-T)*(S*S*(3-2*S))};for(let _=0;_<=a;_++){let p=_/a,d=r.getPointAt(p),S=l.normals[_],T=l.binormals[_],y=u(p);for(let w=0;w<o;w++){let M=w/o*Math.PI*2,C=Math.cos(M),v=Math.sin(M);c.push(d.x+y*(C*S.x+v*T.x),d.y+y*(C*S.y+v*T.y),d.z+y*(C*S.z+v*T.z))}}for(let _=0;_<a;_++)for(let p=0;p<o;p++){let d=_*o+p,S=(_+1)*o+p,T=(_+1)*o+(p+1)%o,y=_*o+(p+1)%o;h.push(d,S,y,S,T,y)}let f=new Ft;f.setAttribute("position",new st(c,3)),f.setIndex(h),f.computeVertexNormals();let m=new ce,x=new Q(f,i);if(x.castShadow=s.shadow!==!1,x.receiveShadow=!0,s.part&&(x.userData.part=s.part),m.add(x),s.caps!==!1){let _=new Q(zh(32),i);_.position.copy(r.getPointAt(0)),_.scale.setScalar(t[0]),_.castShadow=!0;let p=new Q(zh(32),i);p.position.copy(r.getPointAt(1)),p.scale.setScalar(t[t.length-1]),p.castShadow=!0,s.part&&(_.userData.part=s.part,p.userData.part=s.part),m.add(_,p)}return m.curve=r,m.rAt=u,n.add(m),m}function gt(n,e,t,i,s={}){let r=new hi(e,{depth:t,bevelEnabled:!0,bevelThickness:s.bevel??t*.6,bevelSize:s.bevelSize??t*.6,bevelSegments:s.bevelSeg??3,curveSegments:s.curveSeg??16,steps:1});r.translate(0,0,-t/2),s.bend&&kh(r,s.bend),r.computeVertexNormals();let a=new Q(r,i);return a.castShadow=s.shadow!==!1,a.receiveShadow=!0,s.part&&(a.userData.part=s.part),n.add(a),a}function kh(n,e){let t=n.attributes.position,i=1/e;for(let s=0;s<t.count;s++){let r=t.getY(s),a=t.getZ(s),o=r*e;t.setY(s,(i-a)*Math.sin(o)),t.setZ(s,i-(i-a)*Math.cos(o))}t.needsUpdate=!0}function Bt(n,e,t,i,s={}){let r=[];for(let c=0;c<=18;c++){let h=c/18,u=t*Math.pow(1-h,s.power??.85)+t*.06*(1-h);r.push(new ue(Math.max(5e-4,u*(c===18?0:1)),h*e))}r[18].x=1e-4;let o=new Nn(r,s.radial||24);s.curve&&kh(o,s.curve),o.computeVertexNormals();let l=new Q(o,i);return l.castShadow=!0,l.receiveShadow=!0,s.part&&(l.userData.part=s.part),n.add(l),l}function Nt(n,e){let t=new Ot,i=n.length;for(let s=0;s<i;s++){let r=n[(s-1+i)%i],a=n[s],o=n[(s+1)%i],l=new ue().subVectors(r,a).normalize(),c=new ue().subVectors(o,a).normalize(),h=Math.min(e,a.distanceTo(r)/2.2,a.distanceTo(o)/2.2),u=a.clone().addScaledVector(l,h),f=a.clone().addScaledVector(c,h);s===0?t.moveTo(u.x,u.y):t.lineTo(u.x,u.y),t.quadraticCurveTo(a.x,a.y,f.x,f.y)}return t.closePath(),t}var fe=(n,e)=>new ue(n,e);function Jt(n,e,t,i={}){let s=document.createElement("canvas");s.width=n,s.height=e;let r=s.getContext("2d");t(r,n,e);let a=new ds(s);return a.colorSpace=i.linear?qn:$t,a.anisotropy=8,i.repeat&&(a.wrapS=a.wrapT=Wi,a.repeat.set(i.repeat[0],i.repeat[1])),a.needsUpdate=!0,a}function ss(n,e=128,t=0){return Jt(e,e,(i,s)=>{let r=i.createRadialGradient(s/2,s/2,s*t,s/2,s/2,s/2),a=new ge(n),o=`${Math.round(a.r*255)},${Math.round(a.g*255)},${Math.round(a.b*255)}`;r.addColorStop(0,`rgba(${o},1)`),r.addColorStop(.5,`rgba(${o},.55)`),r.addColorStop(1,`rgba(${o},0)`),i.fillStyle=r,i.fillRect(0,0,s,s)})}function Md(n,e,t,i,s,r={}){let a=new Q(new Vt(t.x??t,t.y??t),new Gt({map:e,transparent:!0,depthWrite:!1,opacity:r.opacity??1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-4}));return a.position.copy(i).addScaledVector(s,r.lift??.004),Ii(a,s),a.renderOrder=r.order??2,n.add(a),a}function qt(n){let e=n>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function bs(n){n.traverse(e=>{e.geometry&&!e.geometry.userData.shared&&!e.isSprite&&e.geometry.dispose();let t=Array.isArray(e.material)?e.material:e.material?[e.material]:[];for(let i of t)i.userData.shared||i.dispose()})}var Gh=new Map;function Vh(n,e){let t=n.toFixed(3)+":"+e.toFixed(3);if(!Gh.has(t)){let i=new St(n,36,16,0,Math.PI*2,0,e);i.userData.shared=!0,Gh.set(t,i)}return Gh.get(t)}var Wh=new Map;function Sd(n){if(!Wh.has(n)){let e=new St(n,36,14,0,Math.PI*2,0,Math.PI/2);e.userData.shared=!0,Wh.set(n,e)}return Wh.get(n)}function pi(n,e,t,i,s,r,a={}){let o=new ce;o.position.copy(e).addScaledVector(t,-i*(a.sink??.42)),Ii(o,t),a.roll&&o.rotateZ(a.roll),n.add(o);let l=new Q(new St(i,36,24),re("#fbfcff",{roughness:.18}));l.castShadow=!1,o.add(l);let c=new ce;o.add(c);let h=new Q(Vh(i*1.012,.74),re(s,{roughness:.28}));h.rotation.x=Math.PI/2,c.add(h);let u=new Q(Vh(i*1.008,.79),re("#20142a",{roughness:.3}));u.rotation.x=Math.PI/2,c.add(u);let f=new Q(Vh(i*1.02,.42),re("#0d0a14",{roughness:.15}));f.rotation.x=Math.PI/2,c.add(f);let m=new Q(new St(i*.2,16,12),Ss("#ffffff",{toneMapped:!1}));m.position.set(-i*.3,i*.34,i*.95),c.add(m);let x=new Q(new St(i*.08,12,8),Ss("#ffffff",{toneMapped:!1}));x.position.set(i*.26,-i*.22,i*.99),c.add(x);let _=i*1.1,p=new Q(Sd(_),r);p.castShadow=!1;let d=new ce;d.rotation.z=Math.PI;let S=new Q(Sd(_),r);S.castShadow=!1,d.add(S),o.add(p,d);let T=new Q(new Tt(_*1,i*.07,8,40,Math.PI),re("#2a1a2e",{roughness:.4}));p.add(T),T.rotation.x=Math.PI/2;let y=Math.PI*.78,w=new Tt(i*.6,i*.1,10,36,y);w.rotateZ(Math.PI/2-y/2),w.translate(0,-i*.22,0);{let v=w.attributes.position,R=i*1.13;for(let P=0;P<v.count;P++){let U=v.getX(P),D=v.getY(P);v.setZ(P,v.getZ(P)+Math.sqrt(Math.max(0,R*R-U*U-D*D)))}w.computeVertexNormals()}let M=new Q(w,re("#2a1a2e",{roughness:.4}));M.visible=!1,o.add(M);let C={g:o,look:c,upper:p,lower:S,lash:T,happyArc:M,r:i};return C.set=(v,R,P=0)=>{let H=Math.max(1-v,R>.5?1:0);p.rotation.x=Math.min(1.45,-.78+(1.45- -.78)*H+.3*P),S.rotation.x=-1.15+.25*H,M.visible=R>.5,T.visible=H>.55&&R<=.5},C.set(1,0,0),C}function Pi(n,e,t,i,s={}){let r=new ce;r.position.copy(e),Ii(r,t),n.add(r);let a=re(s.lineHex||"#3a1f2a",{roughness:.45}),o=Math.PI*(s.arc??.62),l=new Tt(i*.55,i*(s.thick??.075),12,48,o);if(l.rotateZ(-Math.PI/2-o/2),l.translate(0,i*.55,0),s.R){let _=l.attributes.position;for(let p=0;p<_.count;p++){let d=_.getX(p),S=_.getY(p);_.setZ(p,_.getZ(p)-(d*d+S*S)/(2*s.R))}l.computeVertexNormals()}let c=new Q(l,a);c.position.set(0,0,i*.01),r.add(c);let h=new ce;r.add(h);let u=new Q(new St(1,40,24),re("#5a1626",{roughness:.5}));u.scale.set(i*.42,i*.36,i*.22),h.add(u);let f=new Q(new St(1,32,16),re("#ff7f96",{roughness:.4}));f.scale.set(i*.26,i*.13,i*.16),f.position.set(0,-i*.2,i*.08),h.add(f),h.position.set(0,i*.08,-i*.06);let m=new Q(new Tt(1,.09,10,48),a);m.scale.set(i*.42,i*.36,i*.3),h.add(m);let x={g:r,smile:c,open:h,cav:u,w:i,value:0,onSet:null};return x.set=_=>{x.value=_;let p=Math.max(.02,_);h.scale.set(.75+.25*_,p,1),h.visible=_>.04,c.visible=_<.35,x.onSet&&x.onSet(_)},x.set(0),x}var Xh=null;function mi(n,e,t,i){Xh=Xh||ss("#ff6f8e",128);for(let s of t){let r=e.surf(s);Md(n,Xh,i,r.p,r.n,{opacity:.55,lift:.006})}}function ly(n,e,t){return Jt(64,256,(i,s,r)=>{for(let a=0;a<t;a++)i.fillStyle=a%2?e:n,i.fillRect(0,r*a/t,s,r/t+1)})}var bd={party(){let n=new ce,e=new Q(new ci(.22,.52,48,1,!0),new je({map:ly("#ff5d8f","#fff4d6",8),roughness:.4,clearcoat:.6,side:Rt}));e.position.y=.26,e.castShadow=!0,n.add(e);let t=new Q(new Tt(.215,.03,12,48),re("#ffd35c"));t.rotation.x=Math.PI/2,t.position.y=.01,n.add(t),Z(n,g(0,.55,0),g(.075,.075,.075),te("#ffd35c",{sheen:.9,roughness:.8}),{seg:32});for(let i=0;i<8;i++){let s=i/8*Math.PI*2;Z(n,g(Math.cos(s)*.06,.56+Math.sin(i)*.02,Math.sin(s)*.06),g(.04,.04,.04),te("#ffe58a",{sheen:1,roughness:.9}),{seg:16})}return n},cap(){let n=new ce,e=new Q(new St(.3,48,24,0,Math.PI*2,0,Math.PI/2),re("#ff4b5c",{roughness:.45}));e.scale.set(1,.72,1),e.castShadow=!0,n.add(e);let t=gt(n,Nt([fe(-.24,0),fe(.24,0),fe(.2,.26),fe(-.2,.26)],.1),.02,re("#d8303f",{roughness:.5}),{bevel:.01,bevelSize:.01});t.rotation.x=-Math.PI/2+.12,t.position.set(0,.02,.22),Z(n,g(0,.22,0),g(.045,.03,.045),re("#fff6e6"),{seg:20});let i=new Q(new Tt(.3,.018,10,48),re("#fff6e6"));i.rotation.x=Math.PI/2,i.position.y=.04,n.add(i);let s=new Ot;for(let a=0;a<10;a++){let o=Math.PI/2+a*Math.PI/5,l=a%2?.035:.075;a?s.lineTo(Math.cos(o)*l,Math.sin(o)*l):s.moveTo(Math.cos(o)*l,Math.sin(o)*l)}let r=gt(n,s,.012,re("#ffd35c"),{bevel:.006,bevelSize:.006});return r.position.set(0,.12,.27),r.rotation.x=-.35,n},explorer(){let n=new ce,e=new Q(new ht(.46,.46,.03,64),te("#d9bf86",{roughness:.75,sheen:.4}));e.position.y=.02,e.castShadow=!0,n.add(e);let t=new Q(new St(.29,48,24,0,Math.PI*2,0,Math.PI/2),te("#e8d19a",{roughness:.75,sheen:.4}));t.scale.set(1,1.1,1),t.position.y=.03,t.castShadow=!0,n.add(t);let i=new Q(new ht(.292,.292,.07,64,1,!0),te("#7a5a32",{roughness:.7}));return i.position.y=.07,n.add(i),Z(n,g(0,.34,0),g(.035,.03,.035),te("#d9bf86"),{seg:16}),n},crown(){let n=new ce,e=new je({color:"#ffc43a",metalness:.85,roughness:.28,clearcoat:.6}),t=new Q(new ht(.26,.27,.13,48,1,!0),e);t.position.y=.06,t.material.side=Rt,n.add(t);for(let s=0;s<6;s++){let r=s/6*Math.PI*2,a=new Q(new ci(.06,.15,24),e);a.position.set(Math.cos(r)*.25,.19,Math.sin(r)*.25),n.add(a),Z(n,g(Math.cos(r)*.25,.28,Math.sin(r)*.25),g(.028,.028,.028),e,{seg:16}),Z(n,g(Math.cos(r+.52)*.27,.06,Math.sin(r+.52)*.27),g(.035,.035,.02),re(s%2?"#ff4b5c":"#4fb8ff",{roughness:.1}),{seg:20}).lookAt(Math.cos(r+.52)*2,.06,Math.sin(r+.52)*2)}let i=new Q(new Tt(.265,.018,10,48),e);return i.rotation.x=Math.PI/2,i.position.y=0,n.add(i),n},flower(){let n=new ce,e=new ce;e.position.set(.18,.06,.08),e.rotation.set(-.5,0,-.4),n.add(e);for(let i=0;i<6;i++){let s=i/6*Math.PI*2,r=Z(e,g(Math.cos(s)*.09,Math.sin(s)*.09,0),g(.075,.05,.025),te("#ff9ec4",{sheen:.6}),{seg:24});r.rotation.z=s}Z(e,g(0,0,.02),g(.055,.055,.04),te("#ffd35c",{sheen:.7}),{seg:24});let t=Z(n,g(.06,.02,0),g(.09,.03,.05),te("#5cbf55"),{seg:20});return t.rotation.z=.6,n},chef(){let n=new ce,e=te("#ffffff",{sheen:.6,roughness:.75}),t=new Q(new ht(.25,.26,.16,48),e);t.position.y=.08,t.castShadow=!0,n.add(t);for(let[i,s,r,a]of[[0,.3,0,.2],[-.15,.25,.05,.16],[.15,.25,.05,.16],[0,.26,-.13,.16],[0,.24,.14,.15]])Z(n,g(i,s,r),g(a,a*.9,a),e,{seg:32});return n}};function Vl(n){if(!bd[n])return null;let e=bd[n]();return e.traverse(t=>{t.isMesh&&(t.castShadow=!0,t.userData.part="head")}),e}function Ed(n,e){let t=new ce,i=re("#2b2f45",{roughness:.3}),s=new je({color:"#bfe6ff",roughness:.05,transmission:0,transparent:!0,opacity:.28,clearcoat:1}),r=[];for(let a of n){let o=new L;a.g.getWorldPosition(o),e.worldToLocal(o);let l=new L(0,0,1).applyQuaternion(a.g.quaternion).normalize(),c=o.clone().addScaledVector(l,a.r*1.35),h=new Q(new Tt(a.r*1.3,a.r*.13,12,40),i);h.position.copy(c),h.lookAt(c.clone().add(l)),t.add(h);let u=new Q(new Dn(a.r*1.25,40),s);u.position.copy(c),u.lookAt(c.clone().add(l)),t.add(u),r.push({c,n:l,r:a.r})}if(r.length===2){let[a,o]=r,l=o.c.clone().sub(a.c).normalize(),c=a.c.clone().addScaledVector(l,a.r*1.3),h=o.c.clone().addScaledVector(l,-o.r*1.3),u=c.clone().add(h).multiplyScalar(.5).add(g(0,a.r*.25,a.r*.15));et(t,[c,u,h],[a.r*.12,a.r*.12,a.r*.12],i,{tubular:16,radial:10,caps:!1})}return t.traverse(a=>{a.isMesh&&(a.userData.part="head")}),t}function xt(n,e){let t=new ce;return e&&t.position.copy(e),n.add(t),t}function gi(n,e,t,i,s){for(let[r,a]of t){let o=e.surf(r),l=Z(n,o.p,g(i*a,i*a*.8,i*.28),s,{seg:24,shadow:!1});Ii(l,o.n),l.position.addScaledVector(o.n,-i*.12)}}function Li(n,e,t){let i=new ce;i.position.copy(e);let s=t.clone().normalize().add(g(0,1,0)).normalize();return i.quaternion.setFromUnitVectors(g(0,1,0),s),n.add(i),i}function mr(n,e,t,i,s,r=3,a=re("#fff8ec",{roughness:.3})){for(let o=0;o<r;o++){let l=r===1?0:o/(r-1)-.5;Z(n,g(e+l*s,t,i),g(.042,.032,.03),a,{seg:16,shadow:!1})}}function Di(n){let e=new ce;e.name=n;let t=xt(e),i=xt(t),s=xt(i);return{sp:n,root:e,jump:t,body:i,torso:s,eyes:[],parts:[],extra:{},legs:[]}}function xi(n,e,t,i){let s=xt(n.body,e);return n.legs.push({g:s,side:t,front:i,hip:e.clone()}),[s,r=>r.clone().sub(e)]}function cy(){let n=Di("trex"),e={body:"#5fbf4a",belly:"#e8f5b2",spot:"#3f8f34",claw:"#fff6e6"},t=te(e.body),i=te(e.belly,{sheen:.3}),s=te(e.spot),r=n.torso,a=Z(r,g(0,.66,-.02),g(.5,.55,.44),t,{part:"belly"});Z(r,g(0,.6,.16),g(.37,.43,.3),i,{part:"belly"});for(let T of[.45,.6,.75]){let y=new Q(new Tt(.29,.012,8,40,1.9),te("#cfe39a"));y.rotation.set(Math.PI/2+.05,0,Math.PI/2-.95),y.position.set(0,T,.14),y.scale.set(1,1.05,1),r.add(y)}gi(r,a,[[g(-.85,.35,.3),1],[g(.9,.15,.25),.8],[g(.7,.55,-.35),1.1],[g(-.6,.65,-.4),.9]],.07,s);for(let T of[-1,1]){let[y,w]=xi(n,g(T*.3,.42,.03),T,1);Z(y,w(g(T*.3,.38,.02)),g(.21,.24,.23),t,{part:"legs"}),et(y,[w(g(T*.3,.32,.05)),w(g(T*.31,.08,.09))],[.15,.135],t,{part:"legs"}),Z(y,w(g(T*.31,.06,.15)),g(.17,.08,.22),t,{part:"legs"});for(let C of[-1,0,1]){let v=Bt(y,.07,.035,re(e.claw,{roughness:.3}),{radial:12});v.position.copy(w(g(T*.31+C*.075,.05,.33))),v.rotation.x=Math.PI/2-.3}let M=xt(r,g(T*.35,.86,.24));et(M,[g(0,0,0),g(T*.07,-.08,.12),g(T*.08,-.16,.17)],[.075,.062,.05],t,{part:"arms"}),Z(M,g(T*.085,-.19,.19),g(.06,.055,.06),t,{part:"arms"});for(let C of[-1,1]){let v=Bt(M,.045,.02,re(e.claw),{radial:10});v.position.set(T*.085+C*.025,-.23,.2),v.rotation.x=Math.PI}n.extra[T<0?"armL":"armR"]=M}let o=xt(n.body,g(.12,.5,-.3)),l=et(o,[g(0,0,0),g(.35,-.16,-.22),g(.72,-.28,-.18),g(.98,-.32,.02)],[.26,.17,.09,.035],t,{part:"tail"});gi(o,{surf:T=>({p:l.curve.getPointAt(.45).clone().add(g(0,.15,0)),n:g(.2,1,.3).normalize()})},[[g(0,1,0),.9]],.06,s),n.tail=o,Z(n.body,g(0,1,0),g(.34,.26,.32),t,{part:"head"});let c=xt(n.body,g(0,1.06,0));n.head=c;let h=Z(c,g(0,.36,-.1),g(.42,.4,.42),t,{part:"head"}),u=Z(c,g(0,.27,.3),g(.3,.22,.42),t,{part:"face"}),f=Z(c,g(0,.31,.6),g(.22,.15,.18),t,{part:"face"}),m=Z(c,g(0,.1,.24),g(.27,.12,.4),t,{part:"face"});Z(c,g(0,.07,.24),g(.2,.06,.32),i,{part:"face",shadow:!1});for(let[T,y,w]of[[.76,-.12,.065],[.68,-.34,.075],[.52,-.48,.07]]){let M=Bt(c,w*1.4,w,te(e.spot),{radial:16,part:"head"});M.position.set(0,T,y),M.rotation.x=-.6}for(let[T,y,w]of[[1.13,-.36,.07],[.98,-.44,.065],[.82,-.47,.06]]){let M=Bt(r,w*1.4,w,te(e.spot),{radial:16,part:"belly"});M.position.set(0,T,y),M.rotation.x=-1}gi(c,h,[[g(-.35,1,-.3),1],[g(.2,1,-.25),.8],[g(-.9,.3,-.3),.7],[g(.9,.3,-.3),.7]],.06,s),gi(c,u,[[g(-.6,.8,.1),.6],[g(.6,.8,.15),.55]],.05,s);for(let T of[-1,1]){let y=h.surf(g(T*.58,.42,.72));n.eyes.push(pi(c,y.p,y.n,.13,"#c9862f",t,{sink:.48}));let w=y.n.clone().multiplyScalar(-.035),M=et(c,[y.p.clone().add(g(-T*.1,.12,0)).add(w),y.p.clone().add(g(0,.155,.01)).add(w),y.p.clone().add(g(T*.1,.12,-.02)).add(w)],[.022,.032,.02],t,{tubular:16,radial:12});n.extra[T<0?"browL":"browR"]=M;let C=f.surf(g(T*.42,.55,.85)),v=Z(c,C.p,g(.03,.02,.022),re("#1f3a1a"),{seg:12,shadow:!1});Ii(v,C.n)}let x=f.surf(g(0,-.72,.7));n.mouth=Pi(c,x.p.clone().add(g(0,-.005,.01)),g(0,-.28,1).normalize(),.36,{R:.3,arc:.68,thick:.05});let _=.36,p=Math.PI*.68,d=new ce;n.mouth.g.add(d);for(let T of[-.8,-.48,-.16,.16,.48,.8]){let y=T*p/2,w=.55*_*Math.sin(y),M=.55*_*(1-Math.cos(y)),C=Bt(d,.06,.03,re("#fffaf0",{roughness:.22}),{radial:12});C.position.set(w,M+.012,-(w*w+M*M)/(2*.3)+.016),C.rotation.x=Math.PI}mi(c,h,[g(-.82,-.05,.6),g(.82,-.05,.6)],.18);let S=h.surf(g(0,1,-.05));return n.hat=Li(c,S.p,S.n),n.hatScale=1.1,n.headTop=n.hat,n.mouthAnchor=n.mouth.g,n.turn=-.3,n.headYaw=-.08,n}function hy(){let n=Di("trike"),e={body:"#f29b38",frill:"#ffcf55",spot:"#d77b20",horn:"#fff3dc",beak:"#c98a4b",snout:"#f7b65c"},t=te(e.body),i=te(e.frill),s=te(e.spot),r=re(e.horn,{roughness:.32}),a=n.torso,o=Z(a,g(.08,.6,-.36),g(.62,.47,.68),t,{part:"back"});gi(a,o,[[g(.7,.6,-.2),1.1],[g(.95,.2,-.3),.8],[g(-.6,.65,-.5),.9],[g(.3,.9,-.6),1]],.075,s);for(let M of[-1,1]){{let[C,v]=xi(n,g(M*.24,.56,0),M,1);et(C,[v(g(M*.24,.56,0)),v(g(M*.31,.08,.15))],[.165,.145],t,{part:"legs"}),Z(C,v(g(M*.31,.06,.2)),g(.17,.075,.19),t,{part:"legs"});let R=v(g(M*.31,.05,.37));mr(C,R.x,R.y,R.z,.16)}{let[C,v]=xi(n,g(M*.3,.54,-.74),M,0);et(C,[v(g(M*.3,.54,-.74)),v(g(M*.37,.08,-.74))],[.16,.14],t,{part:"legs"}),Z(C,v(g(M*.37,.06,-.69)),g(.16,.07,.18),t,{part:"legs"})}}let l=xt(n.body,g(.5,.58,-.82));et(l,[g(0,0,0),g(.22,-.12,-.16),g(.46,-.3,-.12),g(.62,-.38,.04)],[.2,.13,.07,.03],t,{part:"tail"}),n.tail=l;let c=xt(n.body,g(0,.8,.2));n.head=c;let h=new Ot,u=.66,f=9;h.moveTo(-u*.98,-.06);for(let M=0;M<f;M++){let C=Math.PI-M*Math.PI/f,v=Math.PI-(M+1)*Math.PI/f,R=(C+v)/2;h.quadraticCurveTo(Math.cos(R)*u*1.2,Math.sin(R)*u*1.2+0,Math.cos(v)*u*.98,Math.sin(v)*u*.98)}h.quadraticCurveTo(.3,-.22,0,-.18),h.quadraticCurveTo(-.3,-.22,-u*.98,-.06);let m=gt(c,h,.05,i,{part:"frill",bevel:.03,bevelSize:.03});m.position.set(0,.3,-.1),m.rotation.x=-.32;for(let M=0;M<7;M++){let C=Math.PI*(.12+M*.76/6),v=Z(m,g(Math.cos(C)*.6,Math.sin(C)*.6,.05),g(.06,.06,.02),s,{seg:20,shadow:!1})}let x=Z(c,g(0,.16,.16),g(.42,.37,.37),t,{part:"head"}),_=Z(c,g(0,.02,.4),g(.25,.18,.18),te(e.snout),{part:"face"});for(let M of[-1,1]){let C=x.surf(g(M*.46,.4,.82));n.eyes.push(pi(c,C.p,C.n,.143,"#7a4a1e",t,{sink:.38}));let v=x.surf(g(M*.42,.85,.45)),R=Bt(c,.46,.075,r,{curve:1.3,part:"horns"});R.position.copy(v.p).addScaledVector(v.n,-.02),R.rotation.set(.2,0,-M*.22),Z(c,v.p,g(.085,.05,.085),t,{seg:20,part:"horns"})}let p=_.surf(g(0,.8,.6)),d=Bt(c,.17,.065,r,{curve:1.6,part:"horns"});d.position.copy(p.p).addScaledVector(p.n,-.02),d.rotation.x=.45;let S=Bt(c,.1,.075,re(e.beak,{roughness:.35}),{curve:-2}),T=_.surf(g(0,-.4,1));S.position.copy(T.p).add(g(0,.02,-.02)),S.rotation.x=Math.PI*.72;let y=x.surf(g(0,-.55,.85));n.mouth=Pi(c,y.p.clone().add(g(0,.02,.04)),y.n,.3,{R:.3,arc:.55}),mi(c,x,[g(-.78,-.12,.62),g(.78,-.12,.62)],.17);let w=x.surf(g(0,1,.25));return n.hat=Li(c,w.p,w.n),n.hatScale=.95,n.headTop=n.hat,n.mouthAnchor=n.mouth.g,n}function uy(){let n=Di("stego"),e={body:"#45b0a5",belly:"#d5f0c2",plate:"#ff8257",plate2:"#ffb48e",spike:"#fff3dc",spot:"#2f8c82"},t=te(e.body),i=te(e.belly,{sheen:.3}),s=te(e.plate,{roughness:.5}),r=te(e.spot),a=n.torso,o=Z(a,g(0,.62,-.38),g(.5,.48,.8),t,{part:"back"});Z(a,g(0,.46,-.3),g(.42,.32,.66),i,{part:"belly"}),gi(a,o,[[g(.9,.3,.1),1],[g(.95,.2,-.5),.8],[g(-.9,.3,-.2),1],[g(.8,.4,.6),.7]],.07,r);let l=(p,d)=>Nt([fe(0,d),fe(p*.5,d*.42),fe(p*.3,0),fe(-p*.3,0),fe(-p*.5,d*.42)],Math.min(p,d)*.18),c=[.22,.3,.36,.38,.33,.25,.18];for(let p=0;p<c.length;p++){let d=.22-p*.22,S=o.surf(g(0,1,(d+.38)/.8));for(let T of[-1,1]){let y=c[p]*(T<0?1:.86),w=gt(a,l(y*.95,y),.035,T<0?s:te(e.plate2,{roughness:.5}),{part:"plates",bevel:.02,bevelSize:.02});w.rotation.y=Math.PI/2,w.rotation.x=0,w.position.set(T*.065,S.p.y-.06,d+(T<0?0:-.11)),w.rotateX(-T*.12)}}for(let[p,d]of[[-1,.1],[1,.1],[-1,-.82],[1,-.82]]){let[S,T]=xi(n,g(p*.2,.54,d-.04),p,d>0?1:0);et(S,[T(g(p*.2,.54,d-.04)),T(g(p*.26,.08,d+.02))],[.14,.125],t,{part:"legs"}),Z(S,T(g(p*.26,.06,d+.06)),g(.15,.07,.17),t,{part:"legs"});let y=T(g(p*.26,.05,d+.2));mr(S,y.x,y.y,y.z,.14)}let h=xt(n.body,g(0,.6,-1.08)),u=et(h,[g(0,0,0),g(0,.04,-.34),g(0,.16,-.64),g(0,.3,-.86)],[.24,.15,.08,.04],t,{part:"tail"});for(let[p,d]of[[-1,.78],[1,.78],[-1,.92],[1,.92]]){let S=u.curve.getPointAt(d),T=Bt(h,.24,.045,re(e.spike,{roughness:.3}),{part:"spikes"});T.position.copy(S),T.rotation.set(-.5,0,-p*1.1)}n.tail=h,Z(n.body,g(0,.6,.26),g(.26,.26,.32),t,{part:"head"});let f=xt(n.body,g(0,.58,.46));n.head=f;let m=Z(f,g(0,.06,.12),g(.28,.25,.32),t,{part:"head"});gi(f,m,[[g(0,1,-.2),.8],[g(-.5,.8,-.3),.6]],.05,r);for(let p of[-1,1]){let d=m.surf(g(p*.58,.45,.72));n.eyes.push(pi(f,d.p,d.n,.114,"#4f7a2a",t,{sink:.36}))}let x=m.surf(g(0,-.38,1));n.mouth=Pi(f,x.p,x.n,.22,{R:.26}),mi(f,m,[g(-.8,-.05,.6),g(.8,-.05,.6)],.12);let _=m.surf(g(0,1,.1));return n.hat=Li(f,_.p,_.n),n.hatScale=.72,n.headTop=n.hat,n.mouthAnchor=n.mouth.g,n.turn=-.75,n.headYaw=.6,n}function fy(){let n=Di("brachio"),e={body:"#9787ef",belly:"#e4defe",spot:"#b9afff",dark:"#7766d6"},t=te(e.body),i=te(e.belly,{sheen:.3}),s=te(e.spot),r=n.torso,a=Z(r,g(0,.76,-.42),g(.5,.44,.74),t,{part:"back",rot:{x:.14}});Z(r,g(0,.56,-.4),g(.4,.26,.6),i,{part:"belly",rot:{x:.14}}),gi(r,a,[[g(.9,.5,0),1.1],[g(.85,.4,-.6),.8],[g(-.85,.5,-.3),1],[g(.3,1,-.4),.9]],.08,s);for(let[m,x,_]of[[-1,0,.66],[1,0,.66],[-1,-.84,.6],[1,-.84,.6]]){let[p,d]=xi(n,g(m*.2,_,x),m,x>-.4?1:0);et(p,[d(g(m*.2,_,x)),d(g(m*.25,.08,x+.04))],[.15,.135],t,{part:"legs"}),Z(p,d(g(m*.25,.06,x+.08)),g(.16,.07,.18),t,{part:"legs"});let S=d(g(m*.25,.05,x+.23));mr(p,S.x,S.y,S.z,.14)}let o=xt(n.body,g(0,.68,-1.1));et(o,[g(0,0,0),g(.04,-.1,-.34),g(.14,-.3,-.62),g(.3,-.46,-.78)],[.22,.14,.07,.035],t,{part:"tail"}),n.tail=o;let l=et(r,[g(0,.78,-.16),g(0,1.04,.16),g(0,1.42,.3),g(0,1.84,.34),g(0,2.08,.28)],[.36,.26,.19,.155,.135],t,{part:"neck"});gi(r,{surf:m=>({p:l.curve.getPointAt(.55).clone().add(g(.17,0,0)),n:g(1,.1,.2).normalize()})},[[g(1,0,0),.7]],.06,s),n.extra.neck=l;let c=xt(r,g(0,2.1,.3));n.head=c;let h=Z(c,g(0,.06,.13),g(.27,.23,.31),t,{part:"head"});Z(c,g(0,.21,.02),g(.15,.13,.15),t,{part:"head"});for(let m of[-1,1]){let x=h.surf(g(m*.58,.5,.7));n.eyes.push(pi(c,x.p,x.n,.111,"#6a4fc9",t,{sink:.36}));let _=h.surf(g(m*.2,.55,1));Z(c,_.p,g(.018,.014,.014),re("#3a2a7a"),{seg:12,shadow:!1})}let u=h.surf(g(0,-.35,1));n.mouth=Pi(c,u.p,u.n,.21,{R:.26}),mi(c,h,[g(-.8,-.05,.6),g(.8,-.05,.6)],.11);let f=h.surf(g(0,1,-.2));return n.hat=Li(c,f.p.clone().add(g(0,.02,0)),f.n),n.hatScale=.7,n.headTop=n.hat,n.mouthAnchor=n.mouth.g,n.turn=-.55,n.headYaw=.5,n}function dy(){let n=Di("elephant"),e={body:"#a3b3d1",ear:"#f6b3c3",tusk:"#fff7e8",nail:"#fbf3e6",dark:"#8494b6"},t=te(e.body),i=te(e.ear,{sheen:.3}),s=n.torso;Z(s,g(0,.68,-.24),g(.56,.52,.6),t,{part:"belly"});for(let[x,_]of[[-1,.08],[1,.08],[-1,-.56],[1,-.56]]){let[p,d]=xi(n,g(x*.27,.5,_),x,_>0?1:0);et(p,[d(g(x*.27,.5,_)),d(g(x*.28,.07,_+.02))],[.175,.165],t,{part:"legs"});let S=d(g(x*.28,.05,_+.19));mr(p,S.x,S.y,S.z,.18)}let r=xt(n.body,g(.1,.8,-.8));et(r,[g(0,0,0),g(.08,-.15,-.06),g(.14,-.36,-.06)],[.03,.026,.024],t,{part:"tail",radial:12}),Z(r,g(.14,-.42,-.06),g(.045,.07,.045),te("#58627a"),{seg:20}),n.tail=r;let a=xt(n.body,g(0,1.02,.1));n.head=a;let o=Z(a,g(0,.24,.14),g(.46,.43,.42),t,{part:"head"}),l=Nt([fe(0,.26),fe(.3,.42),fe(.5,.3),fe(.52,-.05),fe(.38,-.32),fe(.12,-.36),fe(0,-.12)],.16),c=Nt([fe(.04,.2),fe(.29,.33),fe(.43,.24),fe(.44,-.04),fe(.33,-.26),fe(.13,-.28),fe(.04,-.08)],.13);for(let x of[-1,1]){let _=xt(a,g(x*.34,.3,.02)),p=xt(_);p.scale.x=x;let d=gt(p,l,.05,t,{part:"ears",bevel:.025,bevelSize:.025}),S=gt(p,c,.02,i,{part:"ears",bevel:.012,bevelSize:.012});S.position.z=.035,_.rotation.y=x*.55,n.extra[x<0?"earL":"earR"]=_}for(let x of[-1,1]){let _=o.surf(g(x*.44,.36,.85));n.eyes.push(pi(a,_.p,_.n,.137,"#5a6f96",t,{sink:.38}))}let h=xt(a,g(0,.08,.46)),u=et(h,[g(0,.04,0),g(0,-.2,.13),g(0,-.42,.17),g(.03,-.58,.14),g(.1,-.64,.07)],[.17,.14,.115,.095,.088],t,{part:"trunk"});{let x=u.curve.getPointAt(1),_=u.curve.getTangentAt(1),p=Z(h,x.clone().addScaledVector(_,.07),g(.07,.07,.03),te(e.dark),{seg:24,shadow:!1});Ii(p,_)}n.trunk=h;for(let x of[-1,1]){let _=Bt(a,.2,.04,re(e.tusk,{roughness:.3}),{curve:-2.4,part:"trunk"});_.position.set(x*.17,.02,.42),_.rotation.set(Math.PI*.82,x*.25,x*.2)}let f=o.surf(g(.36,-.62,.72));n.mouth=Pi(a,f.p,f.n,.17,{R:.3,arc:.55}),mi(a,o,[g(-.66,-.08,.75),g(.66,-.08,.75)],.18);let m=o.surf(g(0,1,.1));return n.hat=Li(a,m.p,m.n),n.hatScale=1.05,n.headTop=n.hat,n.mouthAnchor=n.mouth.g,n}function py(){let n=Di("lion"),e={body:"#f2b53e",mane:"#cf6a2a",mane2:"#e8853a",muzzle:"#fff0c9",nose:"#6e3428",ear:"#ffb3a7"},t=te(e.body),i=te(e.mane,{sheen:.8,roughness:.7}),s=te(e.mane2,{sheen:.8,roughness:.7}),r=te(e.muzzle,{sheen:.4}),a=n.torso;Z(a,g(0,.52,-.12),g(.46,.52,.42),t,{part:"belly"}),Z(a,g(0,.56,.14),g(.3,.38,.28),r,{part:"belly"});for(let d of[-1,1]){Z(n.body,g(d*.36,.26,-.1),g(.22,.22,.3),t,{part:"legs"});let[S,T]=xi(n,g(d*.18,.52,.18),d,1);et(S,[T(g(d*.18,.52,.18)),T(g(d*.19,.1,.25))],[.125,.11],t,{part:"paws"}),Z(S,T(g(d*.19,.065,.31)),g(.14,.075,.17),t,{part:"paws"});for(let y of[-1,0,1])Z(S,T(g(d*.19+y*.055,.06,.465)),g(.03,.03,.02),te("#e3a032"),{seg:12,shadow:!1})}let o=xt(n.body,g(.3,.16,-.38)),c=et(o,[g(0,0,0),g(.38,.02,.22),g(.5,.26,.42),g(.46,.5,.5)],[.055,.05,.045,.04],t,{part:"tail",radial:14}).curve.getPointAt(1);Z(o,c.clone().add(g(0,.07,0)),g(.1,.13,.1),i,{part:"tail"}),n.tail=o;let h=xt(n.body,g(0,1,.08));n.head=h;let u=g(0,.2,0);Z(h,u.clone().add(g(0,0,-.12)),g(.52,.5,.2),s,{part:"mane"});let f=qt(7);for(let d=0;d<18;d++){let S=d/18*Math.PI*2;Z(h,u.clone().add(g(Math.cos(S)*.52,Math.sin(S)*.5,-.04)),g(1,1,1).multiplyScalar(.16+f()*.04),d%2?i:s,{part:"mane",seg:32})}for(let d=0;d<14;d++){let S=(d+.5)/14*Math.PI*2;Z(h,u.clone().add(g(Math.cos(S)*.42,Math.sin(S)*.4,-.16)),g(1,1,1).multiplyScalar(.2),i,{part:"mane",seg:32})}let m=Z(h,g(0,.2,.12),g(.41,.39,.37),t,{part:"face"});for(let d of[-1,1]){let S=xt(h,g(d*.29,.52,.06));Z(S,g(0,0,0),g(.12,.12,.08),t,{part:"mane"}),Z(S,g(0,0,.05),g(.065,.065,.03),te(e.ear),{seg:24}),n.extra[d<0?"earL":"earR"]=S,Z(h,g(d*.095,.06,.43),g(.125,.1,.09),r,{part:"face"});let T=m.surf(g(d*.42,.42,.82));n.eyes.push(pi(h,T.p,T.n,.13,"#b5761e",t,{sink:.36}));for(let[y,w]of[[.07,.03],[.12,0],[.09,-.04]])Z(h,g(d*y,.06+w,.52),g(.012,.012,.01),re("#8a5a2a"),{seg:10,shadow:!1})}Z(h,g(0,-.04,.39),g(.08,.06,.06),r,{part:"face"});let x=Nt([fe(-.075,.03),fe(.075,.03),fe(0,-.055)],.025),_=gt(h,x,.04,re(e.nose,{roughness:.3}),{bevel:.02,bevelSize:.02});_.position.set(0,.13,.5),_.rotation.x=-.25,n.mouth=Pi(h,g(0,.015,.5),g(0,-.1,1).normalize(),.14,{R:.2,arc:.7}),mi(h,m,[g(-.72,-.02,.68),g(.72,-.02,.68)],.16);let p=m.surf(g(0,1,0));return n.hat=Li(h,p.p.clone().add(g(0,.08,0)),p.n),n.hatScale=1.05,n.headTop=n.hat,n.mouthAnchor=n.mouth.g,n.gait="scoot",n}function my(){let n=Di("penguin"),e={body:"#2f3e5c",belly:"#fffaf2",beak:"#ffa53b",feet:"#ff9a2e"},t=te(e.body,{sheen:.7}),i=te(e.belly,{sheen:.35}),s=re(e.beak,{roughness:.3}),r=xt(n.body,g(0,.35,0));n.head=r;let a=Z(r,g(0,.45,0),g(.56,.8,.5),t,{part:"belly"}),o=Z(r,g(0,.37,.12),g(.45,.66,.42),i,{part:"belly"}),l=Bt(r,.14,.05,t,{curve:-3});l.position.set(0,1.22,.02),l.rotation.z=.2;let c=Bt(r,.11,.04,t,{curve:-3});c.position.set(.04,1.21,0),c.rotation.z=-.4;for(let p of[-1,1]){let d=xt(n.body,g(p*.5,1.08,0)),S=Z(d,g(p*.07,-.3,0),g(.09,.36,.2),t,{part:"flippers"});S.rotation.z=p*.28,n.extra[p<0?"finL":"finR"]=d;let[T,y]=xi(n,g(p*.18,.1,.16),p,1);Z(T,y(g(p*.18,.04,.24)),g(.16,.05,.2),re(e.feet,{roughness:.4}),{part:"feet"});let w=o.surf(g(p*.42,.78,.8));n.eyes.push(pi(r,w.p,w.n,.125,"#33466e",i,{sink:.38}))}let h=o.surf(g(0,.56,1)),u=xt(r,h.p.clone().add(g(0,0,-.04))),f=Bt(u,.22,.1,s,{radial:24});f.rotation.x=Math.PI/2-.15,f.scale.set(1.25,1,.8);let m=xt(u,g(0,-.025,0)),x=Bt(m,.15,.075,s,{radial:24});x.rotation.x=Math.PI/2+.12,x.scale.set(1.15,1,.6);let _=Z(u,g(0,-.02,.06),g(.06,.03,.06),re("#5a1626"),{seg:20,shadow:!1});return n.mouth={g:u,value:0,set(p){this.value=p,m.rotation.x=p*.55,f.rotation.x=Math.PI/2-.15-p*.12,_.visible=p>.05}},n.mouth.set(0),mi(r,o,[g(-.66,.5,.6),g(.66,.5,.6)],.17),n.hat=Li(r,g(0,1.24,0),g(0,1,0)),n.hatScale=1,n.headTop=n.hat,n.mouthAnchor=u,n.gait="waddle",n}function gy(){let n=Di("anky"),e={body:"#5b8def",belly:"#dfe9ff",armor:"#ffcf6b",armor2:"#f2b347",spot:"#4373cf",beak:"#3d5fa8"},t=te(e.body),i=te(e.belly,{sheen:.3}),s=te(e.armor,{roughness:.5}),r=te(e.armor2,{roughness:.5}),a=n.torso,o=Z(a,g(0,.54,-.34),g(.62,.4,.78),t,{part:"armor"});Z(a,g(0,.4,-.3),g(.5,.26,.64),i,{part:"belly"});for(let p=0;p<5;p++){let d=.75-p*.36;for(let[S,T]of[[-1,.55],[-.62,1],[-.25,1],[.25,1],[.62,1],[1,.55]]){if(Math.abs(S)>.9&&(p===0||p===4))continue;let y=o.surf(g(S,T,d+(Math.abs(S)>.9?.18:0))),w=.08-Math.abs(S)*.02,M=Z(a,y.p,g(w*1.15,w*1.15,w*.55),(p+Math.round(S*3))%2?s:r,{seg:24,part:"armor"});Ii(M,y.n);let C=Bt(a,w*.9,w*.75,(p+Math.round(S*3))%2?s:r,{radial:14,part:"armor"});C.position.copy(y.p).addScaledVector(y.n,w*.25),C.quaternion.setFromUnitVectors(g(0,1,0),y.n)}}for(let p of[-1,1])for(let d=0;d<5;d++){let S=o.surf(g(p,.08,.62-d*.32)),T=Bt(a,.15-Math.abs(d-2)*.02,.055,r,{radial:14,part:"armor"});T.position.copy(S.p).addScaledVector(S.n,-.02),T.quaternion.setFromUnitVectors(g(0,1,0),S.n.clone().add(g(0,.25,0)).normalize())}for(let[p,d]of[[-1,.12],[1,.12],[-1,-.8],[1,-.8]]){let[S,T]=xi(n,g(p*.34,.4,d),p,d>0?1:0);et(S,[T(g(p*.34,.4,d)),T(g(p*.38,.08,d+.02))],[.15,.14],t,{part:"legs"}),Z(S,T(g(p*.38,.06,d+.06)),g(.16,.07,.17),t,{part:"legs"});let y=T(g(p*.38,.05,d+.21));mr(S,y.x,y.y,y.z,.14)}let l=xt(n.body,g(0,.48,-1.04)),h=et(l,[g(0,0,0),g(.02,-.04,-.3),g(.08,-.12,-.6),g(.14,-.2,-.82)],[.2,.13,.08,.06],t,{part:"tail"}).curve.getPointAt(1);Z(l,h.clone().add(g(.02,0,-.08)),g(.15,.1,.13),r,{part:"club"});for(let p of[-1,1])Z(l,h.clone().add(g(p*.11+.02,0,-.06)),g(.1,.085,.11),s,{part:"club"});n.tail=l,Z(n.body,g(0,.52,.36),g(.3,.27,.3),t,{part:"head"});let u=xt(n.body,g(0,.56,.5));n.head=u;let f=Z(u,g(0,.07,.14),g(.35,.27,.32),t,{part:"head"}),m=Z(u,g(0,0,.34),g(.21,.15,.14),te("#79a3f4"),{part:"face"});gi(u,f,[[g(-.5,1,-.3),.8],[g(.5,1,-.3),.8],[g(0,1,-.5),.6]],.05,s);for(let p of[-1,1]){let d=f.surf(g(p*.9,.35,-.5)),S=Bt(u,.13,.05,r,{radial:14,part:"head"});S.position.copy(d.p).addScaledVector(d.n,-.02),S.quaternion.setFromUnitVectors(g(0,1,0),g(p*.8,.25,-.55).normalize());let T=f.surf(g(p*.58,.5,.68));n.eyes.push(pi(u,T.p,T.n,.112,"#3a5aa8",t,{sink:.36}));let y=m.surf(g(p*.5,.6,.8));Z(u,y.p,g(.018,.014,.014),re("#23366a"),{seg:12,shadow:!1})}let x=m.surf(g(0,-.32,1));n.mouth=Pi(u,x.p,x.n,.21,{R:.22,arc:.62}),mi(u,f,[g(-.8,-.1,.6),g(.8,-.1,.6)],.13);let _=f.surf(g(0,1,.05));return n.hat=Li(u,_.p,_.n),n.hatScale=.78,n.headTop=n.hat,n.mouthAnchor=n.mouth.g,n.turn=-.6,n.headYaw=.5,n}function xy(){let n=Di("kangaroo"),e={body:"#d98a52",belly:"#f8dcc0",dark:"#b86a3a",ear:"#ffb3a7",nose:"#5a3426"},t=te(e.body,{sheen:.5}),i=te(e.belly,{sheen:.4}),s=te(e.dark,{sheen:.5}),r=n.torso;Z(r,g(0,.6,-.06),g(.37,.42,.34),t,{part:"belly"}),Z(r,g(0,.96,0),g(.27,.32,.25),t,{part:"belly"}),Z(r,g(0,.74,.1),g(.25,.4,.25),i,{part:"belly"});for(let _ of[-1,1]){let[p,d]=xi(n,g(_*.24,.44,-.08),_,1);Z(p,d(g(_*.27,.38,-.02)),g(.19,.27,.27),t,{part:"legs"}),et(p,[d(g(_*.29,.3,-.14)),d(g(_*.3,.1,-.16))],[.1,.075],t,{part:"legs"}),Z(p,d(g(_*.29,.06,.08)),g(.12,.07,.3),s,{part:"feet"});let S=d(g(_*.29,.045,.37));mr(p,S.x,S.y,S.z,.08,2)}for(let _ of[-1,1]){let p=xt(r,g(_*.21,1,.16));et(p,[g(0,0,0),g(_*.04,-.12,.08),g(_*.03,-.22,.12)],[.065,.052,.045],t,{part:"arms"}),Z(p,g(_*.03,-.26,.13),g(.052,.05,.05),s,{part:"arms"}),n.extra[_<0?"armL":"armR"]=p}let a=xt(n.body,g(0,.34,-.3));et(a,[g(0,0,0),g(.06,-.17,-.26),g(.2,-.26,-.56),g(.42,-.28,-.8)],[.19,.15,.1,.045],t,{part:"tail"}),n.tail=a,Z(n.body,g(0,1.2,.02),g(.15,.15,.14),t,{part:"head"});let o=xt(n.body,g(0,1.3,.04));n.head=o;let l=Z(o,g(0,.13,0),g(.28,.255,.25),t,{part:"head"}),c=Z(o,g(0,.03,.2),g(.15,.125,.2),t,{part:"face"}),h=Z(o,g(0,-.005,.25),g(.115,.085,.16),i,{part:"face",shadow:!1}),u=c.surf(g(0,.45,1)),f=Z(o,u.p.clone().add(g(0,0,-.015)),g(.055,.04,.035),re(e.nose,{roughness:.3}),{seg:24});for(let _ of[-1,1]){let p=xt(o,g(_*.13,.27,-.04)),d=Z(p,g(_*.03,.17,0),g(.075,.2,.045),t,{part:"ears"});d.rotation.z=-_*.22;let S=Z(p,g(_*.03,.17,.03),g(.045,.15,.02),te(e.ear),{seg:24,shadow:!1});S.rotation.z=-_*.22,n.extra[_<0?"earL":"earR"]=p;let T=l.surf(g(_*.55,.42,.72));n.eyes.push(pi(o,T.p,T.n,.1,"#6b3d1e",t,{sink:.36}))}let m=h.surf(g(0,-.35,.95));n.mouth=Pi(o,m.p,m.n,.13,{R:.16,arc:.7}),mi(o,l,[g(-.78,-.2,.6),g(.78,-.2,.6)],.11);let x=l.surf(g(0,1,-.1));return n.hat=Li(o,x.p,x.n),n.hatScale=.82,n.headTop=n.hat,n.mouthAnchor=n.mouth.g,n.turn=-.6,n.headYaw=.42,n.gait="hop",n}var _y={trex:cy,trike:hy,stego:uy,brachio:fy,anky:gy,elephant:dy,lion:py,penguin:my,kangaroo:xy},Td=["trex","trike","stego","brachio","anky","elephant","lion","penguin","kangaroo"];function Sa(n,e=2){let t=_y[n](),i=[.74,.87,1][e],s=[1.2,1.08,1][e];return t.root.scale.setScalar(i),t.head.scale.setScalar(s),t.turn&&(t.body.rotation.y=t.turn),t.headYaw&&(t.head.rotation.y=t.headYaw),t.stage=e,t.root.traverse(r=>{r.isMesh&&(r.castShadow=r.castShadow!==!1)}),t}function ba(n,e){if(n.outfitObj&&(n.outfitObj.parent.remove(n.outfitObj),n.outfitObj=null),!e)return;if(e==="glasses"){n.head.updateMatrixWorld(!0);let i=Ed(n.eyes,n.head);n.head.add(i),n.outfitObj=i;return}let t=Vl(e);t&&(t.scale.setScalar(n.hatScale||1),n.hat.add(t),t.position.y=-vy(n,(yy[e]||.25)*(n.hatScale||1)),n.outfitObj=t)}var yy={party:.22,cap:.3,explorer:.29,crown:.27,flower:.22,chef:.26},wd=new gs;function vy(n,e){let t=[];if(n.head.traverse(o=>{o.isMesh&&o.userData.part==="head"&&o.geometry.type==="SphereGeometry"&&t.push(o)}),!t.length)return 0;let i=n.root;for(;i.parent;)i=i.parent;i.updateMatrixWorld(!0);let s=new L(0,-1,0).transformDirection(n.hat.matrixWorld),r=new L;n.hat.getWorldScale(r);let a=[];for(let o=0;o<8;o++){let l=o/8*Math.PI*2;wd.set(n.hat.localToWorld(new L(Math.cos(l)*e,.4,Math.sin(l)*e)),s);let c=wd.intersectObjects(t,!1)[0];c&&a.push(c.distance/r.y-.4)}return a.length<3?0:(a.sort((o,l)=>o-l),Math.max(0,Math.min(.22,a[a.length>>1]*.8)))}var Ea=new L;function On(n,e,t,i,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;Ea.copy(e),Ea[i]=0,Ea.normalize();let c=.5*a/(a+o),h=1-Ea.angleTo(n)/l;return Math.sign(Ea[t])===1?h*c:o/(a+o)+c+c*(1-h)}var _i=class n extends li{constructor(e=1,t=1,i=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new L,c=new L,h=new L(e,t,i).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,m=this.attributes.uv.array,x=u.length/6,_=new L,p=.5/a;for(let d=0,S=0;d<u.length;d+=3,S+=2)switch(l.fromArray(u,d),c.copy(l),c.x-=Math.sign(c.x)*p,c.y-=Math.sign(c.y)*p,c.z-=Math.sign(c.z)*p,c.normalize(),u[d+0]=h.x*Math.sign(l.x)+c.x*r,u[d+1]=h.y*Math.sign(l.y)+c.y*r,u[d+2]=h.z*Math.sign(l.z)+c.z*r,f[d+0]=c.x,f[d+1]=c.y,f[d+2]=c.z,Math.floor(d/x)){case 0:_.set(1,0,0),m[S+0]=On(_,c,"z","y",r,i),m[S+1]=1-On(_,c,"y","z",r,t);break;case 1:_.set(-1,0,0),m[S+0]=1-On(_,c,"z","y",r,i),m[S+1]=1-On(_,c,"y","z",r,t);break;case 2:_.set(0,1,0),m[S+0]=1-On(_,c,"x","z",r,e),m[S+1]=On(_,c,"z","x",r,i);break;case 3:_.set(0,-1,0),m[S+0]=1-On(_,c,"x","z",r,e),m[S+1]=1-On(_,c,"z","x",r,i);break;case 4:_.set(0,0,1),m[S+0]=1-On(_,c,"x","y",r,e),m[S+1]=1-On(_,c,"y","x",r,t);break;case 5:_.set(0,0,-1),m[S+0]=On(_,c,"x","y",r,e),m[S+1]=1-On(_,c,"y","x",r,t);break}}static fromJSON(e){return new n(e.width,e.height,e.depth,e.segments,e.radius)}};var qh=new Map,Sn=(n,e)=>(qh.has(n)||qh.set(n,e()),qh.get(n)),Yh=(n,e,t)=>Sn("wd"+n+e,()=>Jt(256,256,(i,s,r)=>{i.fillStyle=n,i.fillRect(0,0,s,r);let a=qt(3);for(let o=0;o<4;o++)for(let l=0;l<4;l++){let c=l*64+(o%2?32:0)+16,h=o*64+16;i.fillStyle=e,i.beginPath(),i.arc(c,h,7,0,7),i.fill(),i.fillStyle=t,i.beginPath(),i.arc(c+32,h+32,3.5,0,7),i.fill()}for(let o=0;o<1800;o++)i.fillStyle=`rgba(120,70,30,${.012+a()*.02})`,i.fillRect(a()*s,a()*r,1.5,1.5)},{repeat:[10,6]})),Ad=()=>Sn("ws",()=>Jt(256,256,(n,e,t)=>{n.fillStyle="#cfc6fb",n.fillRect(0,0,e,t);let i=(s,r,a,o)=>{n.fillStyle=o,n.beginPath();for(let l=0;l<10;l++){let c=-Math.PI/2+l*Math.PI/5,h=l%2?a*.45:a;n[l?"lineTo":"moveTo"](s+Math.cos(c)*h,r+Math.sin(c)*h)}n.closePath(),n.fill()};for(let s=0;s<4;s++)for(let r=0;r<4;r++){let a=r*64+(s%2?32:0)+16,o=s*64+18;i(a,o,9,"#f6f0ff"),n.fillStyle="#b9aef5",n.beginPath(),n.arc(a+32,o+30,4,0,7),n.fill()}},{repeat:[10,6]})),Zh=(n,e,t=6)=>Sn("wood"+n+e,()=>Jt(512,512,(i,s,r)=>{let a=qt(11),o=r/t;for(let l=0;l<t;l++){let c=.9+a()*.2,h=new ge(n).lerp(new ge(e),a());h.multiplyScalar(c),i.fillStyle="#"+h.getHexString(),i.fillRect(0,l*o,s,o);for(let f=0;f<18;f++){i.strokeStyle=`rgba(90,45,15,${.05+a()*.08})`,i.lineWidth=1+a()*2,i.beginPath();let m=l*o+a()*o;i.moveTo(0,m);for(let x=0;x<=s;x+=32)i.lineTo(x,m+Math.sin(x*.02+f)*3*a());i.stroke()}i.fillStyle="rgba(70,35,10,.35)",i.fillRect(0,l*o,s,3);let u=a()*s;i.fillRect(u,l*o,3,o)}},{repeat:[3,4]})),wa=(n,e,t=8,i)=>Sn("tiles"+n+e+t+i,()=>Jt(512,512,(s,r,a)=>{s.fillStyle=e,s.fillRect(0,0,r,a);let o=r/t,l=qt(5);for(let c=0;c<t;c++)for(let h=0;h<t;h++){let u=new ge(i&&(h+c)%2?i:n).multiplyScalar(.96+l()*.06),f=s.createLinearGradient(h*o,c*o,h*o+o,c*o+o);f.addColorStop(0,"#"+u.clone().lerp(new ge("#fff"),.25).getHexString()),f.addColorStop(1,"#"+u.getHexString()),s.fillStyle=f;let m=3;s.beginPath(),s.roundRect(h*o+m,c*o+m,o-m*2,o-m*2,6),s.fill()}},{repeat:[4,4]})),Rd=()=>Sn("grass",()=>Jt(512,512,(n,e,t)=>{n.fillStyle="#86c95a",n.fillRect(0,0,e,t);let i=qt(9);for(let s=0;s<2600;s++){let r=i()*e,a=i()*t,o=6+i()*10;n.strokeStyle=i()<.5?"rgba(70,140,40,.5)":"rgba(170,225,110,.5)",n.lineWidth=2,n.beginPath(),n.moveTo(r,a),n.lineTo(r+(i()-.5)*4,a-o),n.stroke()}for(let s=0;s<40;s++){let r=i()*e,a=i()*t,o=["#fff6cf","#ffd35c","#ff9ec4","#ffffff"][i()*4|0];for(let l=0;l<5;l++)n.fillStyle=o,n.beginPath(),n.arc(r+Math.cos(l*1.26)*4,a+Math.sin(l*1.26)*4,3.2,0,7),n.fill();n.fillStyle="#ffb11f",n.beginPath(),n.arc(r,a,2.4,0,7),n.fill()}},{repeat:[8,8]})),Cd=()=>Sn("sand",()=>Jt(512,512,(n,e,t)=>{n.fillStyle="#ecc98e",n.fillRect(0,0,e,t);let i=qt(13);for(let s=0;s<5e3;s++)n.fillStyle=i()<.5?"rgba(160,110,50,.25)":"rgba(255,245,220,.4)",n.fillRect(i()*e,i()*t,2,2);for(let s=0;s<30;s++)n.fillStyle="rgba(150,105,55,.5)",n.beginPath(),n.ellipse(i()*e,i()*t,5+i()*6,3+i()*4,i()*3,0,7),n.fill()},{repeat:[8,8]})),Wl=(n,e,t)=>Sn("sky"+n+t,()=>Jt(8,512,(i,s,r)=>{let a=i.createLinearGradient(0,0,0,r);a.addColorStop(0,n),a.addColorStop(.55,e),a.addColorStop(1,t),i.fillStyle=a,i.fillRect(0,0,s,r)})),Jh=n=>Sn("view"+n,()=>Jt(512,512,(e,t,i)=>{let s=qt(n?21:4),r=e.createLinearGradient(0,0,0,i);if(n?(r.addColorStop(0,"#141c4d"),r.addColorStop(1,"#3a4aa0")):(r.addColorStop(0,"#5cb6f5"),r.addColorStop(.75,"#bfe6ff"),r.addColorStop(1,"#e8f7ff")),e.fillStyle=r,e.fillRect(0,0,t,i),n){for(let l=0;l<70;l++)e.fillStyle=`rgba(255,250,220,${.4+s()*.6})`,e.beginPath(),e.arc(s()*t,s()*i*.7,.8+s()*1.8,0,7),e.fill();let o=e.createRadialGradient(340,150,10,340,150,120);o.addColorStop(0,"rgba(255,240,180,.55)"),o.addColorStop(1,"rgba(255,240,180,0)"),e.fillStyle=o,e.fillRect(0,0,t,i),e.fillStyle="#ffe9a6",e.beginPath(),e.arc(340,150,52,0,7),e.fill(),e.fillStyle="#2a3a8a",e.beginPath(),e.arc(365,130,46,0,7),e.fill()}else{let o=e.createRadialGradient(110,110,10,110,110,110);o.addColorStop(0,"rgba(255,250,210,.95)"),o.addColorStop(1,"rgba(255,250,210,0)"),e.fillStyle=o,e.fillRect(0,0,t,i),e.fillStyle="#ffe26a",e.beginPath(),e.arc(110,110,34,0,7),e.fill();for(let[l,c,h]of[[330,90,1],[420,160,.7]]){e.fillStyle="#ffffff";for(let[u,f,m]of[[0,0,26],[26,-10,30],[54,2,24],[24,10,26]])e.beginPath(),e.arc(l+u*h,c+f*h,m*h,0,7),e.fill()}e.fillStyle="#a7735a",e.beginPath(),e.moveTo(250,400),e.lineTo(330,250),e.lineTo(370,250),e.lineTo(460,400),e.fill(),e.fillStyle="#ff7a3d",e.beginPath(),e.moveTo(330,250),e.quadraticCurveTo(350,275,370,250),e.fill(),e.fillStyle="rgba(230,235,240,.9)";for(let[l,c,h]of[[350,228,12],[360,205,16],[348,180,18]])e.beginPath(),e.arc(l,c,h,0,7),e.fill()}let a=(o,l,c,h)=>{e.fillStyle=l,e.beginPath(),e.moveTo(0,i);for(let u=0;u<=t;u+=8)e.lineTo(u,o-Math.sin(u*h+c)*24-Math.sin(u*h*2.3)*10);e.lineTo(t,i),e.fill()};if(a(380,n?"#203070":"#a6dc76",1,.012),a(440,n?"#1a275c":"#6db447",2.2,.009),!n){e.strokeStyle="#8a5a2b",e.lineWidth=12,e.lineCap="round",e.beginPath(),e.moveTo(140,470),e.quadraticCurveTo(120,360,160,290),e.stroke(),e.fillStyle="#3fae5a";for(let o of[-2.6,-1.9,-1.2,-.5,.2])e.save(),e.translate(160,290),e.rotate(o),e.beginPath(),e.ellipse(48,0,50,13,0,0,7),e.fill(),e.restore()}})),Id=()=>Sn("paw",()=>Jt(256,256,(n,e,t)=>{n.fillStyle="#fff4e0",n.fillRect(0,0,e,t);let i=n.createRadialGradient(128,128,20,128,128,150);i.addColorStop(0,"#ffe8c4"),i.addColorStop(1,"#ffcf96"),n.fillStyle=i,n.fillRect(10,10,e-20,t-20),n.fillStyle="#b06d3a",n.beginPath(),n.ellipse(128,160,34,40,0,0,7),n.fill();for(let[s,r,a]of[[78,92,-.45],[128,70,0],[178,92,.45]])n.save(),n.translate(s,r),n.rotate(a),n.beginPath(),n.ellipse(0,0,16,34,0,0,7),n.fill(),n.restore()})),Xl=(n,e,t)=>Sn("rug"+n,()=>Jt(512,512,(i,s,r)=>{let a=s/2,o=r/2,l=[[250,n],[215,e],[190,n],[160,t],[130,n],[96,e],[70,n]];for(let[h,u]of l)i.fillStyle=u,i.beginPath(),i.arc(a,o,h,0,7),i.fill();i.setLineDash([14,10]),i.strokeStyle="rgba(255,255,255,.75)",i.lineWidth=6,i.beginPath(),i.arc(a,o,112,0,7),i.stroke();let c=qt(2);for(let h=0;h<3e3;h++)i.fillStyle=`rgba(0,0,0,${c()*.05})`,i.fillRect(c()*s,c()*r,2,2)})),Zn=(n,e,t=8,i=!1)=>Sn("st"+n+e+t+i,()=>Jt(256,256,(s,r,a)=>{for(let o=0;o<t;o++)s.fillStyle=o%2?e:n,i?s.fillRect(r*o/t,0,r/t+1,a):s.fillRect(0,a*o/t,r,a/t+1)})),ql=(n,e,t=1)=>{let i=document.createElement("canvas");i.width=512,i.height=256;let s=i.getContext("2d");s.fillStyle=n,s.fillRect(0,0,512,256);let r=qt(t);for(let o=0;o<26;o++){s.fillStyle=e,s.globalAlpha=.75+r()*.25;let l=r()*512,c=30+r()*200,h=10+r()*18,u=8+r()*14,f=r()*3;for(let m of[-512,0,512])s.beginPath(),s.ellipse(l+m,c,h,u,f,0,7),s.fill()}s.globalAlpha=1;let a=new ds(i);return a.colorSpace=$t,a.anisotropy=8,a.wrapS=Wi,{tex:a,canvas:i,g:s}},Pd=()=>Sn("straw",()=>Jt(256,256,(n,e,t)=>{n.fillStyle="#c99a52",n.fillRect(0,0,e,t);let i=qt(17);for(let s=0;s<500;s++){n.strokeStyle=i()<.5?"rgba(255,225,150,.7)":"rgba(120,80,30,.5)",n.lineWidth=2+i()*2;let r=i()*e,a=i()*t,o=i()*3;n.beginPath(),n.moveTo(r,a),n.lineTo(r+Math.cos(o)*30,a+Math.sin(o)*30),n.stroke()}},{repeat:[3,1]})),Ld=()=>Sn("weave",()=>Jt(256,256,(n,e,t)=>{n.fillStyle="#c98a4b",n.fillRect(0,0,e,t);for(let i=0;i<8;i++)for(let s=0;s<8;s++)n.fillStyle=(s+i)%2?"#e3ad6b":"#b9783c",n.beginPath(),n.roundRect(s*32+2,i*32+2,28,28,8),n.fill()},{repeat:[6,2]})),Ta=(n,e)=>Sn("bl"+n+e,()=>Jt(128,128,(t,i,s)=>{t.fillStyle=e,t.fillRect(0,0,i,s),t.strokeStyle="rgba(255,255,255,.7)",t.lineWidth=8,t.strokeRect(8,8,i-16,s-16),t.fillStyle="#ffffff",t.font="700 84px Fredoka, Varela Round, sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText(n,i/2,s/2+4)}));var Ht=-2.3;function dt(n,e,t,i,s,r,a={}){let o=new Q(new _i(e,t,i,a.seg??4,a.r??Math.min(e,t,i)*.18),s);return o.position.copy(r),a.rot&&o.rotation.set(a.rot.x||0,a.rot.y||0,a.rot.z||0),o.castShadow=a.shadow!==!1,o.receiveShadow=!0,n.add(o),o}function rs(n,e,t,i,s={}){let r=new Nn(e.map(([o,l])=>fe(o,l)),s.seg??48),a=new Q(r,t);return a.position.copy(i),a.castShadow=s.shadow!==!1,a.receiveShadow=!0,s.scale&&a.scale.copy(s.scale),n.add(a),a}function gr(n,e={}){return new an({map:n,roughness:e.roughness??.85,metalness:0,color:e.color?new ge(e.color):new ge("#ffffff")})}function Yl(n,e,t,i={}){let s=new Q(new Vt(22,10),gr(e,{roughness:.95}));s.position.set(0,4.6,Ht),s.receiveShadow=!0,n.add(s);let r=new Q(new Vt(22,16),gr(t,{roughness:i.floorRough??.7}));r.rotation.x=-Math.PI/2,r.position.set(0,0,Ht+8),r.receiveShadow=!0,n.add(r);let a=new Q(new Vt(22,.9),new Gt({map:Wl("rgba(60,30,20,0)","rgba(60,30,20,0.08)","rgba(60,30,20,0.28)"),transparent:!0,depthWrite:!1}));if(a.position.set(0,.45,Ht+.01),n.add(a),i.base&&dt(n,22,i.baseH??.16,.08,Mn(i.base,{roughness:.6}),g(0,(i.baseH??.16)/2,Ht+.04),{r:.02,shadow:!1}),i.wains){let o=Mn(i.wains,{roughness:.75}),l=new Q(new Vt(22,i.wainsH),o);l.position.set(0,i.wainsH/2,Ht+.02),l.receiveShadow=!0,n.add(l);let c=dt(n,22,.08,.1,Mn(i.rail,{roughness:.5}),g(0,i.wainsH,Ht+.05),{r:.03,shadow:!1}),h=[];for(let u=-10;u<=10;u+=1.1)h.push(dt(n,.86,i.wainsH-.42,.03,Mn(Ma(i.wains,.12).getStyle(),{roughness:.7}),g(u,i.wainsH/2+.06,Ht+.035),{r:.012,shadow:!1}));return{wall:s,floor:r,panel:l,rail:c,panels:h}}return{wall:s,floor:r}}function Fd(n,e,t,i,s,r,a){let o=new ce;o.position.set(e,t,Ht),n.add(o);let l=te("#fff8ee",{roughness:.45,sheen:.2}),c=Nt([fe(-i/2,-s/2),fe(i/2,-s/2),fe(i/2,s/2),fe(-i/2,s/2)],.12),h=new Ji,u=i-.2,f=s-.2;h.moveTo(-u/2,-f/2),h.lineTo(u/2,-f/2),h.lineTo(u/2,f/2),h.lineTo(-u/2,f/2),h.lineTo(-u/2,-f/2),c.holes.push(h);let m=gt(o,c,.08,l,{bevel:.035,bevelSize:.035});m.position.z=.08;let x=new Q(new Vt(u,f),new Gt({map:Jh(r),toneMapped:!1}));x.position.z=.02,o.add(x),dt(o,.06,f,.05,l,g(0,0,.09),{r:.02}),dt(o,u,.06,.05,l,g(0,0,.09),{r:.02});let _=new Q(new Vt(u,f),new je({color:"#ffffff",roughness:.05,transparent:!0,opacity:.14,clearcoat:1}));if(_.position.z=.07,o.add(_),dt(o,i+.3,.1,.32,l,g(0,-s/2-.04,.16),{r:.04}),a){let p=new Q(new ht(.03,.03,i+1,16),re("#d9a441",{metalness:.6,roughness:.3}));p.rotation.z=Math.PI/2,p.position.set(0,s/2+.22,.32),o.add(p);for(let d of[-1,1])Z(o,g(d*(i/2+.5),s/2+.22,.32),g(.06,.06,.06),re("#d9a441",{metalness:.6,roughness:.3}),{seg:16});for(let d of[-1,1]){let T=s+.5,y=new Vt(.55,T,40,30),w=y.attributes.position;for(let v=0;v<w.count;v++){let R=w.getX(v),U=(w.getY(v)+T/2)/T,D=1-.45*Math.exp(-((U-.32)**2)/.012);w.setX(v,R*D+d*(1-D)*.12),w.setZ(v,Math.sin((R/.55+.5)*Math.PI*5)*.045*(.6+.4*U))}y.computeVertexNormals();let M=new Q(y,new je({color:a,roughness:.75,sheen:.8,sheenColor:Ma(a,.4),side:Rt}));M.position.set(d*(i/2+.22),.02,.36),M.castShadow=!0,M.receiveShadow=!0,o.add(M);let C=new Q(new Tt(.1,.022,8,24),re("#d9a441",{metalness:.5,roughness:.3}));C.position.set(d*(i/2+.24),-s/2+.32*(s+.5)-.2,.4),C.scale.set(1.3,.6,1),o.add(C)}}return o}function Dd(n,e,t=1){let i=new ce;i.position.copy(e),i.scale.setScalar(t),n.add(i),rs(i,[[0,0],[.2,0],[.24,.05],[.27,.36],[.31,.38],[.31,.44],[.27,.44],[.25,.4],[0,.4]],te("#ff8a5c",{roughness:.5,sheen:.2}),g(0,0,0)),Z(i,g(0,.41,0),g(.25,.04,.25),Mn("#6b4424"),{seg:24});let s=Nt([fe(0,0),fe(.11,.18),fe(.06,.48),fe(0,.56),fe(-.06,.48),fe(-.11,.18)],.05),r=qt(4);for(let a=0;a<9;a++){let o=a/9*Math.PI*2+r()*.3,l=gt(i,s,.012,te(a%2?"#3fae5a":"#5cc46a",{roughness:.45}),{bevel:.008,bevelSize:.008,bend:1.4});l.position.set(Math.cos(o)*.05,.42,Math.sin(o)*.05),l.rotation.set(0,-o+Math.PI/2,0),l.rotateX(.5+r()*.4),l.scale.setScalar(.9+r()*.5)}return i}function Nd(n,e,t,i,s,r="#ffc83d"){let a=new ce;a.position.copy(e),n.add(a);let o=Nt([fe(-t/2,-i/2),fe(t/2,-i/2),fe(t/2,i/2),fe(-t/2,i/2)],.06),l=new Ji,c=t-.14,h=i-.14;l.moveTo(-c/2,-h/2),l.lineTo(c/2,-h/2),l.lineTo(c/2,h/2),l.lineTo(-c/2,h/2),l.lineTo(-c/2,-h/2),o.holes.push(l),gt(a,o,.05,new je({color:r,metalness:.5,roughness:.35,clearcoat:.6}),{bevel:.02,bevelSize:.02}).position.z=.05;let u=new Q(new Vt(c,h),gr(s,{roughness:.6}));return u.position.z=.02,a.add(u),a}var Ud=[{wall:["#ffe2c2","#ffc99a","#ffd9b4"],wains:"#f7c391",rail:"#e9a96e",rug:["#ff9a8f","#fff2df","#ffd35c"]},{wall:["#dff5e8","#b8e6cb","#cdeedb"],wains:"#a8dcc0",rail:"#7cc3a0",rug:["#6fc4a0","#fff7e8","#ffd35c"]},{wall:["#dcefff","#b5d9fa","#cbe4fd"],wains:"#a9cdef",rail:"#7fb1e0",rug:["#6aaeee","#fff6e6","#ffd35c"]},{wall:["#ece4ff","#d3c4ff","#e0d6ff"],wains:"#c9b8f5",rail:"#a993ea",rug:["#b29af0","#fff4ff","#ffd35c"]},{wall:["#fff4c8","#ffe28a","#ffecb0"],wains:"#ffd970",rail:"#f2bf3c",rug:["#ff9a5c","#fff8e6","#7cc85a"]}];function My(){let n=new ce,e=Yl(n,Yh("#ffe2c2","#ffc99a","#ffd9b4"),Zh("#e3a46c","#c98a50"),{wains:"#f7c391",wainsH:1.15,rail:"#e9a96e",base:"#d98e55"});Fd(n,-.75,2.75,1.25,1.1,!1,"#ff9a9a"),Nd(n,g(.82,2.85,Ht+.03),.6,.6,Id()),Nd(n,g(2.7,2.4,Ht+.03),.8,.6,Jh(!1),"#e9b96e"),Dd(n,g(1.15,0,-1.2),1.15),Dd(n,g(-3.4,0,-1.4),1.4);let t=new Q(new ht(1.25,1.25,.02,72),gr(Xl("#ff9a8f","#fff2df","#ffd35c"),{roughness:.95}));t.scale.set(1.25,1,.75),t.position.set(0,.012,.15),t.receiveShadow=!0,n.add(t);let i=o=>{let l=Ud[o]||Ud[0];e.wall.material.map=Yh(...l.wall),e.wall.material.needsUpdate=!0,t.material.map=Xl(...l.rug),t.material.needsUpdate=!0,e.panel&&(e.panel.material=Mn(l.wains,{roughness:.75})),e.rail&&(e.rail.material=Mn(l.rail,{roughness:.5}));for(let c of e.panels||[])c.material=Mn(Ma(l.wains,.12).getStyle(),{roughness:.7});return l.wall[0]};[["\u05D0","#ff5d8f"],["\u05D1","#4fb8ff"],["\u05D2","#7cc85a"]].forEach(([o,l],c)=>{let h=new Q(new _i(.24,.24,.24,4,.035),new je({map:Ta(o,l),roughness:.45,clearcoat:.4}));h.position.set(-1.15+c*.27-(c===2?.13:0),.12+(c===2?.24:0),-.45+(c===1?.06:0)),h.rotation.y=.4+c*.3,h.castShadow=!0,h.receiveShadow=!0,n.add(h)});let r=new Q(new St(.17,48,32),new je({map:Zn("#4fb8ff","#ffffff",6,!0),roughness:.35,clearcoat:.7}));r.position.set(1,.17,.55),r.rotation.z=.5,r.castShadow=!0,n.add(r);let a=te("#7fc6bc",{roughness:.75,sheen:.7});dt(n,2,.42,.8,a,g(-3,.3,-1.75),{r:.15}),dt(n,2,.75,.25,a,g(-3,.75,-2.08),{r:.12});for(let o of[-1,1])dt(n,.25,.6,.8,a,g(-3+o*1,.45,-1.75),{r:.12});return dt(n,.5,.35,.18,te("#ffd35c",{sheen:.6,roughness:.8}),g(-3.4,.68,-1.9),{r:.1,rot:{z:.2}}),{group:n,wall:"#ffe2c2",setTheme:i}}function Sy(){let n=new ce;Yl(n,wa("#e9f7f0","#ffffff",10),wa("#f6e3bd","#e8cf9a",6,"#e2c084"),{base:"#6fb79c"});let e=te("#f9fffd",{roughness:.35,sheen:.15,clearcoat:.4}),t=te("#7fd1bd",{roughness:.45,clearcoat:.3}),i=re("#cfd8e2",{metalness:.8,roughness:.25});dt(n,.9,2.1,.75,e,g(-1.25,1.05,-1.75),{r:.14}),dt(n,.86,.02,.02,re("#c7d3cf"),g(-1.25,1.42,-1.37),{r:.005,shadow:!1}),dt(n,.06,.38,.06,i,g(-.92,1.72,-1.33),{r:.03}),dt(n,.06,.55,.06,i,g(-.92,1,-1.33),{r:.03});let s=[["#ff4b5c",-1.42,1.85],["#ffd35c",-1.2,1.68],["#4fb8ff",-1.48,1.05]];for(let[h,u,f]of s){let m=Z(n,g(u,f,-1.36),g(.06,.06,.03),re(h),{seg:20})}dt(n,2.2,.85,.7,t,g(1.55,.43,-1.85),{r:.06}),dt(n,2.3,.08,.8,te("#fffaf0",{roughness:.3,clearcoat:.6}),g(1.55,.9,-1.82),{r:.03});for(let h of[.95,1.55,2.15])dt(n,.5,.62,.03,te("#95ddca",{roughness:.4}),g(h,.44,-1.49),{r:.04,shadow:!1}),dt(n,.14,.04,.05,i,g(h,.66,-1.46),{r:.02});rs(n,[[0,0],[.12,0],[.22,.04],[.3,.14],[.32,.16],[.3,.17],[.2,.08],[0,.06]],re("#ffffff",{roughness:.2}),g(1.25,.94,-1.8));for(let[h,u,f,m]of[[1.15,-1.8,"#ff4b5c",.1],[1.33,-1.78,"#ffd35c",.1],[1.25,-1.9,"#7cc85a",.095],[1.23,-1.75,"#ff9f43",.085]])Z(n,g(h,1.12+(m-.08),u),g(m,m,m),re(f,{roughness:.35}),{seg:32});dt(n,1.3,.06,.3,te("#e9a96e",{roughness:.5}),g(.75,2.45,Ht+.15),{r:.02});let r=(h,u,f,m)=>{let x=new Q(new ht(.13,.13,u,32),new je({color:"#ffffff",transmission:.6,roughness:.08,thickness:.1,transparent:!0,opacity:.6}));x.position.set(h,2.48+u/2,Ht+.15),n.add(x),Z(n,g(h,2.48+u+.02,Ht+.15),g(.14,.04,.14),re(f),{seg:24});for(let _=0;_<4;_++)Z(n,g(h+(_%2-.5)*.1,2.52+(_>>1)*.08,Ht+.15),g(.05,.035,.05),te(m),{seg:16})};r(.35,.3,"#ff5d8f","#c27e48"),r(.75,.24,"#4fb8ff","#ffd35c"),r(1.1,.28,"#7cc85a","#ff9f43");let a=new ce;a.position.set(-.2,3.1,Ht+.04),n.add(a);let o=new Q(new ht(.28,.28,.06,48),te("#ffffff",{roughness:.3}));o.rotation.x=Math.PI/2,a.add(o);let l=new Q(new Tt(.28,.035,12,48),re("#ff8a5c"));l.position.z=.02,a.add(l);for(let h=0;h<12;h++){let u=h/12*Math.PI*2;Z(a,g(Math.cos(u)*.21,Math.sin(u)*.21,.035),g(.014,.014,.01),re("#1b2430"),{seg:8,shadow:!1})}dt(a,.025,.15,.015,re("#1b2430"),g(0,.06,.045),{r:.007,shadow:!1});let c=dt(a,.02,.2,.015,re("#1b2430"),g(.06,.03,.05),{r:.006,shadow:!1});c.rotation.z=-.9,dt(n,.5,.06,.5,te("#ffd35c",{roughness:.5}),g(-2.8,.8,-.9),{r:.03});for(let[h,u]of[[-.2,-.2],[.2,-.2],[-.2,.2],[.2,.2]])dt(n,.05,.78,.05,te("#e9a96e"),g(-2.8+h,.4,-.9+u),{r:.02});return{group:n}}function by(){let n=new ce;Yl(n,wa("#d7f0ff","#ffffff",10),wa("#9fd5ee","#ffffff",8),{base:"#7cc3e6"});let e=te("#ffffff",{roughness:.18,clearcoat:1,sheen:0}),t=new ce;n.add(t);let i=new Q(new _i(2.4,.74,1.5,6,.34),e);i.position.set(0,.42,-.15),i.castShadow=!0,i.receiveShadow=!0,t.add(i);let s=new Q(new _i(2.5,.12,1.6,6,.06),e);s.position.set(0,.78,-.15),s.receiveShadow=!0,t.add(s);let r=new Q(new Vt(2.2,1.35),new je({color:"#8fd4f4",roughness:.05,clearcoat:1,transparent:!0,opacity:.95}));r.rotation.x=-Math.PI/2,r.position.set(0,.8,-.15),t.add(r);let a=te("#ffffff",{roughness:.3,sheen:.8,clearcoat:.5}),o=qt(8),l=new ce;t.add(l);for(let D=0;D<70;D++){let H=o()*Math.PI*2,N=.45+o()*.62,k=Math.cos(H)*N*1.5,O=-.15+Math.sin(H)*N*.8;if(Math.abs(k)>1.08||Math.abs(O+.15)>.62)continue;let V=.07+o()*.11;Z(l,g(k,.81+V*.35,O),g(V,V*.8,V),a,{seg:20,shadow:!1})}for(let D of[-1,1])for(let H of[-1,1])rs(t,[[0,0],[.09,0],[.11,.06],[.07,.14],[.09,.2],[0,.2]],re("#ffc83d",{metalness:.6,roughness:.3}),g(D*.95,-.02,-.15+H*.5),{seg:20});let c=new ce;c.position.set(.95,.84,.42),c.rotation.y=-.6,n.add(c),Z(c,g(0,.09,0),g(.13,.09,.11),re("#ffd23a",{roughness:.3}),{seg:32}),Z(c,g(.07,.2,0),g(.07,.07,.07),re("#ffd23a",{roughness:.3}),{seg:32});let h=Bt(c,.06,.03,re("#ff8a2a"),{radial:12});h.position.set(.13,.19,0),h.rotation.z=-Math.PI/2;for(let D of[-1,1])Z(c,g(.1,.23,D*.04),g(.012,.012,.012),re("#1b2430"),{seg:8,shadow:!1});let u=new ce;u.position.set(-.75,2.75,Ht+.03),n.add(u);let f=new Q(new Tt(.42,.05,16,64),new je({color:"#ffc43a",metalness:.8,roughness:.25}));f.scale.set(.8,1,1),u.add(f);let m=new Q(new Dn(.42,48),new je({color:"#dff4ff",metalness:1,roughness:.04}));m.scale.set(.8,1,1),m.position.z=-.01,u.add(m);let x=new Q(new ht(.025,.025,.8,16),re("#dfe7ef",{metalness:.8,roughness:.2}));x.rotation.z=Math.PI/2,x.position.set(.85,2.95,Ht+.12),n.add(x);let _=new Vt(.6,.85,20,20);{let D=_.attributes.position;for(let H=0;H<D.count;H++){let N=D.getX(H),k=D.getY(H);D.setZ(H,Math.sin(N*9)*.015+(k>.38,0))}_.computeVertexNormals()}let p=new Q(_,new je({map:Zn("#ff8fbf","#ffd0e4",10),roughness:.9,sheen:1,sheenColor:new ge("#ffe0ee"),side:Rt}));p.position.set(.85,2.55,Ht+.14),p.castShadow=!0,n.add(p),dt(n,.9,.05,.22,e,g(1.6,2,Ht+.11),{r:.02});for(let[D,H,N]of[[1.35,.32,"#7fd1c7"],[1.6,.24,"#ff9ec4"],[1.82,.28,"#ffd35c"]])rs(n,[[0,0],[.07,0],[.08,.02],[.08,H*.8],[.04,H*.9],[.035,H],[0,H]],re(N,{roughness:.25}),g(D,2.03,Ht+.11),{seg:24});let d=new Q(new ht(.025,.025,2.8,16),re("#dfe7ef",{metalness:.8,roughness:.2}));d.rotation.z=Math.PI/2,d.position.set(0,3,.75),n.add(d);let S=new ce;n.add(S);let T=new Vt(2.7,3,60,20),y=T.attributes.position,w=Float32Array.from(y.array),M=new Q(T,new je({map:Zn("#bfe9ff","#ffffff",14,!0),roughness:.6,sheen:.5,side:Rt,transparent:!0,opacity:.97}));M.position.set(0,1.5,.78),M.castShadow=!0,S.add(M);let C=[];for(let D=0;D<10;D++){let H=new Q(new Tt(.05,.012,8,20),re("#ffffff"));H.position.set(0,3,.75),S.add(H),C.push(H)}let v=1,R=D=>{v=D;let H=2.7,N=-1.35,k=.18;for(let O=0;O<y.count;O++){let V=(w[O*3]+H/2)/H,ee=k+(H-k)*(1-D),J=N+V*ee,ie=(.05+.1*D)*Math.sin(V*Math.PI*(14+10*D));y.setX(O,J-0),y.setZ(O,ie)}y.needsUpdate=!0,T.computeVertexNormals(),M.position.x=0,C.forEach((O,V)=>{O.position.x=N+V/9*(k+(H-k)*(1-D))}),S.visible=!0};R(1);let P=new ce;P.position.set(-1.55,0,.45),n.add(P),rs(P,[[0,0],[.18,0],[.22,.04],[.26,.24],[.3,.27],[.27,.3],[.2,.26],[0,.24]],te("#ffffff",{roughness:.25,clearcoat:.8}),g(0,0,0));let U=new Q(new Tt(.235,.05,16,40),te("#ff9ec4",{roughness:.4,clearcoat:.5}));return U.rotation.x=Math.PI/2,U.position.y=.3,P.add(U),{group:n,tub:{shell:i,foam:l},setCurtain:R,petY:.02,petZ:-.12}}function Ey(){let n=new ce;Yl(n,Ad(),Zh("#c99a74","#a8794f"),{wains:"#a59bf0",wainsH:1,rail:"#8f84e6",base:"#7d72d6"}),Fd(n,-.8,2.75,1.2,1.05,!0,"#8f84e6");let e=te("#9c8ff2",{roughness:.55,sheen:.4}),t=dt(n,2.3,1.45,.16,e,g(0,.8,-1.55),{r:.08});for(let[p,d]of[[-.7,"#fff3c4"],[0,"#ffe08a"],[.7,"#fff3c4"]]){let S=new Ot;for(let y=0;y<10;y++){let w=Math.PI/2+y*Math.PI/5,M=y%2?.06:.13;y?S.lineTo(Math.cos(w)*M,Math.sin(w)*M):S.moveTo(Math.cos(w)*M,Math.sin(w)*M)}gt(n,S,.03,re(d,{roughness:.35}),{bevel:.015,bevelSize:.015}).position.set(p,1.3,-1.45)}dt(n,2.3,.32,1.9,te("#8578e0",{roughness:.5}),g(0,.2,-.55),{r:.08}),dt(n,2.2,.26,1.85,te("#fffaf0",{roughness:.7,sheen:.5}),g(0,.46,-.55),{r:.11}),dt(n,.95,.24,.45,te("#ffffff",{roughness:.8,sheen:.8}),g(-.45,.68,-1.25),{r:.11,rot:{x:-.25}});let i=new ce;n.add(i);let s=new _i(2.3,.18,1.35,6,.08);{let p=s.attributes.position;for(let d=0;d<p.count;d++){let S=p.getX(d),T=p.getZ(d);p.setY(d,p.getY(d)+Math.sin(S*4+T*3)*.02)}s.computeVertexNormals()}let r=new Q(s,new je({map:Zn("#ff9a9a","#ffb8b0",12,!0),roughness:.8,sheen:1,sheenColor:new ge("#ffe2dc")}));r.castShadow=!0,r.receiveShadow=!0,i.add(r);let a=dt(i,2.32,.12,.2,te("#fff3e6",{roughness:.8,sheen:.8}),g(0,.04,-.6),{r:.06});dt(n,.6,.6,.5,te("#e9b17a",{roughness:.5}),g(1.55,.3,-1.6),{r:.06}),dt(n,.08,.04,.04,re("#ffc43a",{metalness:.6}),g(1.55,.38,-1.34),{r:.015});let o=new ce;o.position.set(1.55,.6,-1.6),n.add(o),rs(o,[[0,0],[.16,0],[.16,.04],[.04,.06],[.03,.4],[0,.4]],re("#ffc43a",{metalness:.5,roughness:.3}),g(0,0,0),{seg:24});let l=new je({color:"#fff1c4",roughness:.7,emissive:new ge("#ffd27a"),emissiveIntensity:.9,side:Rt,transmission:0}),c=new Q(new ht(.14,.24,.28,32,1,!0),l);c.position.y=.48,o.add(c);let h=g(1.55,1.05,-1.5),u=new ce;u.position.set(.95,3.95,-.9),n.add(u);let f=new Q(new ht(.012,.012,1,8),re("#ffffff"));f.rotation.z=Math.PI/2,u.add(f);let m=[];for(let[p,d,S,T]of[[-.45,.5,"#ffe08a","star"],[0,.75,"#ff9ec4","moon"],[.45,.55,"#9fdcff","star"]]){let y=new Q(new ht(.004,.004,d,6),Ss("#ffffff"));y.position.set(p,-d/2,0),u.add(y);let w=new ce;w.position.set(p,-d-.1,0),u.add(w);let M;if(T==="star"){M=new Ot;for(let C=0;C<10;C++){let v=Math.PI/2+C*Math.PI/5,R=C%2?.05:.11;C?M.lineTo(Math.cos(v)*R,Math.sin(v)*R):M.moveTo(Math.cos(v)*R,Math.sin(v)*R)}}else M=new Ot,M.absarc(0,0,.11,Math.PI*.3,Math.PI*1.7,!1),M.absarc(.05,0,.09,Math.PI*1.6,Math.PI*.4,!0);gt(w,M,.03,re(S,{roughness:.3}),{bevel:.015,bevelSize:.015}),m.push(w)}let x=p=>{u.rotation.y=Math.sin(p*.4)*.5,m.forEach((d,S)=>{d.rotation.y=Math.sin(p*.9+S)*.8})},_=new Q(new ht(1.2,1.2,.02,64),gr(Xl("#b9b0ff","#fff3e6","#ffe08a"),{roughness:.95}));return _.scale.set(1.4,1,.55),_.position.set(0,.012,.85),_.receiveShadow=!0,n.add(_),dt(n,1.2,.06,.28,te("#e9b17a"),g(2.8,1.9,Ht+.14),{r:.02}),Z(n,g(2.5,2.07,Ht+.15),g(.12,.12,.12),re("#ff5d8f"),{seg:24}),dt(n,.22,.22,.22,re("#4fb8ff",{roughness:.4}),g(2.85,2.04,Ht+.15),{r:.03}),{group:n,blanket:i,lampAt:h,shadeMat:l,update:x,petY:.58,petZ:-.5}}function Kh(n){let e=new ce,t=new Q(new Dn(30,64),gr(n?Cd():Rd(),{roughness:.95}));t.rotation.x=-Math.PI/2,t.receiveShadow=!0,e.add(t);let i=new Gt({map:n?Wl("#6fc0f7","#cfeeff","#fff2d6"):Wl("#5cb4f5","#bfe6ff","#f2fbff"),side:Xt,toneMapped:!1,depthWrite:!1}),s=new Q(new St(40,32,16),i);e.add(s);let r=_=>te(_,{roughness:.8,sheen:.3}),a=n?[[-9,-14,7,2.6,"#f2d39b"],[6,-16,9,3.2,"#e8c286"],[16,-12,6,2.2,"#f2d39b"],[-18,-10,6,2,"#e8c286"]]:[[-9,-14,7,2.6,"#a6dc76"],[6,-16,9,3.2,"#8fd062"],[16,-12,6,2.2,"#a6dc76"],[-18,-10,6,2,"#8fd062"]];for(let[_,p,d,S,T]of a)Z(e,g(_,-.2,p),g(d,S,d*.7),r(T),{seg:48,shadow:!1});let o=new ce;o.position.set(n?3.5:-4.2,0,-9),e.add(o),rs(o,[[0,3],[.55,3],[.7,2.85],[1.6,1.4],[2.8,.2],[3,0],[0,0]],te("#a87458",{roughness:.85}),g(0,0,0),{seg:48}),rs(o,[[0,2.98],[.6,2.98],[.66,2.9],[.8,2.55],[.5,2.6],[0,2.7]],re("#ff6a2a",{emissive:"#ff5a1a",emissiveIntensity:.6,roughness:.4}),g(0,.02,0),{seg:32});for(let _ of[.3,1.4,2.6]){let p=et(o,[g(Math.cos(_)*.65,2.85,Math.sin(_)*.65),g(Math.cos(_)*1,2.2,Math.sin(_)*1),g(Math.cos(_)*1.3,1.6,Math.sin(_)*1.3)],[.12,.09,.05],re("#ff7a3d",{emissive:"#ff5a1a",emissiveIntensity:.4}),{tubular:16,radial:10})}let l=[];for(let _=0;_<6;_++){let p=Z(o,g(0,3.2,0),g(.4,.4,.4),te("#eef1f5",{roughness:.9,sheen:.5}),{seg:24,shadow:!1});p.userData.ph=_/6,l.push(p)}let c=(_,p,d,S)=>{let T=new ce;if(T.position.set(_,0,p),T.scale.setScalar(d),e.add(T),S){let w=et(T,[g(0,0,0),g(.15,1.2,0),g(.05,2.4,.1),g(-.25,3.2,.1)],[.16,.13,.11,.09],te("#b07a44",{roughness:.8}),{tubular:32,radial:16}).curve.getPointAt(1),M=Nt([fe(0,0),fe(.25,.4),fe(.12,1.3),fe(0,1.5),fe(-.12,1.3),fe(-.25,.4)],.12);for(let C=0;C<7;C++){let v=C/7*Math.PI*2,R=gt(T,M,.02,te(C%2?"#3fae5a":"#5cc46a",{roughness:.45}),{bevel:.01,bevelSize:.01,bend:-.9});R.position.copy(w),R.rotation.set(0,-v,0),R.rotateX(1.1)}for(let[C,v]of[[.1,.1],[-.08,.12],[.02,-.1]])Z(T,w.clone().add(g(C,-.12,v)),g(.09,.1,.09),te("#8a5a2b"),{seg:16})}else{et(T,[g(0,0,0),g(.05,.8,0),g(0,1.4,0)],[.18,.14,.12],te("#a8723d",{roughness:.85}),{tubular:16,radial:14});let y=te("#4fb85a",{roughness:.65,sheen:.5});for(let[w,M,C,v]of[[0,1.9,0,.75],[-.5,1.6,.1,.55],[.5,1.65,.05,.55],[.1,2.35,-.05,.5],[0,1.6,-.45,.55]])Z(T,g(w,M,C),g(v,v*.9,v),y,{seg:32});for(let[w,M,C]of[[.3,1.8,.62],[-.4,1.5,.55],[.55,2.2,.3]])Z(T,g(w,M,C),g(.08,.08,.08),re("#ff4b5c"),{seg:16})}};n?(c(-2.6,-3.5,.9,!0),c(3.2,-4.5,1.1,!0)):(c(-2.4,-3.2,1,!1),c(2.8,-4.2,1.15,!0),c(-6,-6,1.3,!1),c(6.5,-7,1.2,!1));let h=te(n?"#c9a16a":"#b9b2a8",{roughness:.9});for(let[_,p,d]of[[-1.4,-.9,.22],[1.5,-1.2,.3],[-2.2,.2,.18]])Z(e,g(_,d*.4,p),g(d*1.3,d,d),h,{seg:24});if(!n)for(let[_,p]of[[1.3,.4],[-1.2,.5],[.8,-.8],[-.7,-1.2],[2,-.3]]){let d=new ce;d.position.set(_,0,p),e.add(d),et(d,[g(0,0,0),g(0,.2,0)],[.012,.01],te("#3f9a3a"),{tubular:4,radial:6});let S=["#ff9ec4","#fff3c4","#ffd35c"][(Math.abs(_*10)|0)%3];for(let T=0;T<5;T++){let y=T/5*Math.PI*2;Z(d,g(Math.cos(y)*.04,.22,Math.sin(y)*.04),g(.035,.015,.035),te(S),{seg:12,shadow:!1})}Z(d,g(0,.225,0),g(.022,.015,.022),te("#ffb11f"),{seg:10,shadow:!1})}let u=[];for(let[_,p,d,S]of[[-4,6.5,-14,1.6],[3,7.5,-16,2],[9,6.2,-14,1.4],[-10,7.2,-15,1.7]]){let T=new ce;T.position.set(_,p,d),T.scale.setScalar(S),e.add(T);for(let[y,w,M]of[[0,0,.6],[.6,.2,.7],[1.2,0,.55],[.6,-.1,.6]])Z(T,g(y,w,0),g(M,M*.8,M*.7),te("#ffffff",{roughness:.9,sheen:.4}),{seg:24,shadow:!1});u.push(T)}let f=new Q(new St(1.2,32,16),new Gt({color:"#fff3a6",toneMapped:!1}));f.position.set(n?-7:7,9,-20),e.add(f);let m=new Yi(new Ri({map:ss("#fff3b0",128),transparent:!0,depthWrite:!1,toneMapped:!1,opacity:.8}));return m.scale.set(9,9,1),m.position.copy(f.position),e.add(m),{group:e,update:_=>{l.forEach(p=>{let d=(_*.12+p.userData.ph)%1;p.position.set(Math.sin(d*4)*.3,3.2+d*2.4,0),p.scale.setScalar(.25+d*.7),p.material.opacity=1,p.visible=d<.92}),u.forEach((p,d)=>{p.position.x+=Math.sin(_*.05+d)*.002})},outdoor:!0}}function wy(){let n=new ce,e=[];for(let c=0;c<=24;c++){let h=c/24*Math.PI/2;e.push(g(0,1.6-Math.cos(h)*1.6,-Math.sin(h)*1.6+1.6))}let t=[g(0,0,8),g(0,0,0),...Array.from({length:24},(c,h)=>{let u=(h+1)/24*Math.PI/2;return g(0,1.6-Math.cos(u)*1.6,-Math.sin(u)*1.6)}),g(0,9,-1.6)],i=new Ft,s=30,r=[],a=[];t.forEach(c=>{r.push(-s/2,c.y,c.z-1.2,s/2,c.y,c.z-1.2)});for(let c=0;c<t.length-1;c++){let h=c*2;a.push(h,h+1,h+2,h+1,h+3,h+2)}i.setAttribute("position",new st(r,3)),i.setIndex(a),i.computeVertexNormals();let o=new Q(i,new an({color:"#ffd9ae",roughness:.95,side:Rt}));o.receiveShadow=!0,n.add(o);let l=qt(12);for(let c=0;c<18;c++){let h=new Yi(new Ri({map:ss(l()<.5?"#fff3c4":"#ffc6d9",64),transparent:!0,depthWrite:!1,opacity:.6,toneMapped:!1})),u=.3+l()*.6;h.scale.set(u,u,1),h.position.set((l()-.5)*7,1.2+l()*3.5,-2.6),n.add(h)}return{group:n,studio:!0}}var Aa={home:My,kitchen:Sy,bath:by,bed:Ey,play:()=>Kh(!1),album:()=>Kh(!1),dig:()=>Kh(!0),studio:wy};var zt=(n,e,t,i=.06,s=4)=>new _i(n,e,t,s,i);function rt(n,e,t,i,s){let r=new Q(e,t);return i&&r.position.copy(i),s&&r.rotation.set(s.x||0,s.y||0,s.z||0),r.castShadow=!0,r.receiveShadow=!0,n.add(r),r}function Ra(n,e,t,i,s=48){return rt(n,new Nn(e.map(([r,a])=>fe(r,a)),s),t,i)}function Ca(n,e){let t=new Ot;for(let i=0;i<10;i++){let s=Math.PI/2+i*Math.PI/5,r=i%2?e:n;i?t.lineTo(Math.cos(s)*r,Math.sin(s)*r):t.moveTo(Math.cos(s)*r,Math.sin(s)*r)}return t}var xr={meat(){let n=new ce,e=Z(n,g(.12,.12,0),g(.34,.27,.27),te("#c9573e",{roughness:.45,clearcoat:.5}),{rot:{z:.5}});Z(n,g(.18,.2,.12),g(.18,.1,.1),te("#e4825f",{roughness:.4,clearcoat:.6}),{rot:{z:.5}}),et(n,[g(-.12,-.05,0),g(-.42,-.25,0)],[.06,.055],te("#fff6e6",{roughness:.35}));for(let[t,i]of[[-.03,.05],[.05,-.04]])Z(n,g(-.45+t,-.27+i,0),g(.08,.08,.08),te("#fff6e6",{roughness:.35}));return n},fish(){let n=new ce;return Z(n,g(0,0,0),g(.42,.22,.13),re("#5ab4ec",{roughness:.25})),Z(n,g(.02,-.06,.02),g(.34,.12,.11),re("#d9f1ff",{roughness:.25})),gt(n,Nt([fe(0,0),fe(.22,.18),fe(.18,0),fe(.22,-.18)],.04),.04,re("#3d97d6",{roughness:.3}),{bevel:.02,bevelSize:.02}).position.set(.36,0,0),gt(n,Nt([fe(-.1,0),fe(.12,0),fe(0,.12)],.03),.02,re("#3d97d6"),{bevel:.01,bevelSize:.01}).position.set(0,.19,0),Z(n,g(-.27,.06,.1),g(.05,.05,.03),re("#ffffff"),{seg:16}),Z(n,g(-.28,.06,.125),g(.028,.028,.02),re("#1b2430"),{seg:12}),n.rotation.z=.15,n},fern(){let n=new ce,e=et(n,[g(0,-.4,0),g(.04,0,.02),g(-.02,.4,.04)],[.02,.016,.01],te("#2f8a3a"),{tubular:24,radial:8}),t=Nt([fe(0,0),fe(.05,.04),fe(.17,.02),fe(.19,0),fe(.17,-.02),fe(.05,-.04)],.02);for(let i=0;i<9;i++){let s=.08+i*.1,r=e.curve.getPointAt(s),a=1-s*.6;for(let o of[-1,1]){let l=gt(n,t,.008,te(i%2?"#4fb85a":"#63c66a",{roughness:.45}),{bevel:.004,bevelSize:.004});l.position.copy(r),l.scale.setScalar(a),l.rotation.set(0,0,o<0?Math.PI-.35:.35)}}return n},leaves(){let n=new ce,e=et(n,[g(-.4,-.35,0),g(0,0,.02),g(.38,.32,0)],[.03,.025,.015],te("#8a5a2b",{roughness:.8}),{tubular:24,radial:10}),t=Nt([fe(0,0),fe(.08,.06),fe(.1,.18),fe(0,.3),fe(-.1,.18),fe(-.08,.06)],.05);return[[.15,.6],[.35,-.8],[.55,.7],[.75,-.6],[.95,.3]].forEach(([i,s],r)=>{let a=gt(n,t,.01,te(r%2?"#3fae5a":"#5cc46a",{roughness:.4}),{bevel:.006,bevelSize:.006,bend:1.5});a.position.copy(e.curve.getPointAt(i)),a.rotation.set(.3,0,s)}),n},fruit(){let n=new ce;Ra(n,[[0,-.02],[.2,.02],[.32,.16],[.34,.3],[.28,.46],[.15,.52],[.06,.48],[0,.45]],re("#ff3b4e",{roughness:.25}),g(0,-.25,0),48),et(n,[g(0,.18,0),g(.03,.32,0)],[.022,.018],te("#6b4424"),{tubular:6,radial:8});let e=gt(n,Nt([fe(0,0),fe(.08,.06),fe(.16,0),fe(.08,-.06)],.04),.01,te("#4fb85a"),{bevel:.006,bevelSize:.006,bend:2});return e.position.set(.04,.29,0),e.rotation.z=.4,Z(n,g(-.14,.12,.22),g(.06,.09,.03),new Gt({color:"#ffffff",transparent:!0,opacity:.55}),{seg:16,shadow:!1}),n},grass(){let n=new ce;Z(n,g(0,-.3,0),g(.34,.08,.2),Mn("#6b4424"));let e=qt(5);for(let t=0;t<14;t++){let i=(e()-.5)*.5,s=(e()-.5)*.18,r=.4+e()*.3,a=Nt([fe(-.03,0),fe(.03,0),fe(.002,r)],.006),o=gt(n,a,.008,te(e()<.5?"#5cbf55":"#86d46a",{roughness:.45}),{bevel:.004,bevelSize:.004,bend:.8+e()});o.position.set(i,-.3,s),o.rotation.set(0,e()*3,(e()-.5)*.4)}return n},sponge(){let n=new ce;rt(n,zt(.62,.36,.3,.1),te("#ffd23a",{roughness:.8,sheen:.3}),g(0,0,0),{z:.15});let e=qt(3);for(let t=0;t<16;t++)Z(n,g((e()-.5)*.5,(e()-.5)*.26,.15),g(.025+e()*.02,.02,.01),Mn("#d9a51a"),{seg:10,shadow:!1});for(let[t,i,s]of[[.22,.28,.1],[.05,.3,.07],[.32,.12,.06]])Z(n,g(t,i,.05),g(s,s,s),new je({color:"#ffffff",roughness:.05,transmission:.4,transparent:!0,opacity:.8,clearcoat:1,iridescence:.6}),{seg:24});return n},shower(){let n=new ce,e=re("#e6edf4",{metalness:.85,roughness:.2});et(n,[g(.05,-.45,0),g(.08,-.05,0),g(0,.2,.05)],[.05,.045,.05],e,{tubular:16,radial:16});let t=new ce;t.position.set(-.05,.3,.08),t.rotation.set(.6,0,.3),n.add(t),rt(t,new ht(.2,.12,.12,40),e),rt(t,new ht(.19,.19,.02,40),re("#cfd8e2"),g(0,.07,0));for(let i=0;i<12;i++){let s=i/12*Math.PI*2;Z(t,g(Math.cos(s)*.11,.08,Math.sin(s)*.11),g(.012,.006,.012),re("#7f8c99"),{seg:8,shadow:!1})}for(let[i,s,r]of[[-.2,0,.3],[-.1,-.1,.35],[-.28,-.12,.25],[-.16,-.25,.32]])Z(n,g(i,s,r),g(.03,.05,.03),re("#5cc3ff",{roughness:.05}),{seg:16});return n},towel(){let n=new ce,e=new je({map:Zn("#7fd1c7","#c9f1ea",8),roughness:.9,sheen:1,sheenColor:new ge("#e9fffb")});return rt(n,zt(.7,.16,.5,.07),e,g(0,-.12,0)),rt(n,zt(.7,.16,.5,.07),e,g(.03,.04,-.02),{y:.1}),rt(n,zt(.7,.16,.5,.07),e,g(-.02,.2,.01),{y:-.08}),n},brush(){let n=new ce;n.rotation.z=-.7,rt(n,zt(.09,.8,.06,.03),re("#4fb8ff",{roughness:.3}),g(0,0,0)),rt(n,zt(.1,.18,.02,.01),re("#ffffff"),g(0,.32,.05));for(let e=0;e<4;e++)for(let t=0;t<2;t++)rt(n,new ht(.012,.012,.1,6),re(e%2?"#ffffff":"#9fe0ff"),g(-.025+t*.05,.25+e*.045,.1),{x:Math.PI/2});return et(n,[g(-.03,.27,.16),g(0,.33,.18),g(.03,.38,.16)],[.03,.035,.025],te("#7fe0b0",{roughness:.3}),{tubular:12,radial:12}),n},potty(){let n=new ce;Ra(n,[[0,0],[.3,0],[.36,.06],[.42,.36],[.48,.4],[.44,.44],[.34,.4],[0,.38]],te("#ffffff",{roughness:.2,clearcoat:.9}),g(0,-.22,0));let e=rt(n,new Tt(.39,.07,16,48),te("#ff9ec4",{roughness:.35,clearcoat:.5}),g(0,.2,0),{x:Math.PI/2});return n.userData.dir=g(.2,.9,1),n},soap(){let n=new ce;rt(n,zt(.6,.24,.36,.11),re("#ff9ec4",{roughness:.3}),g(0,-.1,0));for(let[e,t,i]of[[-.12,.18,.11],[.1,.24,.13],[.26,.12,.08],[-.02,.36,.07]])Z(n,g(e,t,.03),g(i,i,i),new je({color:"#ffffff",roughness:.05,transmission:.4,transparent:!0,opacity:.85,clearcoat:1,iridescence:.8}),{seg:24});return n},lamp(){let n=new ce;return Ra(n,[[0,0],[.24,0],[.24,.05],[.05,.08],[.04,.5],[0,.5]],re("#ffc43a",{metalness:.5,roughness:.3}),g(0,-.45,0),32),rt(n,new ht(.2,.34,.38,40,1,!0),new je({color:"#fff1c4",emissive:"#ffd27a",emissiveIntensity:.6,roughness:.7,side:Rt}),g(0,.18,0)),Z(n,g(0,.05,0),g(.08,.08,.08),new Gt({color:"#fff8d0"}),{seg:16}),n},book(){let n=new ce;n.rotation.set(.5,-.3,0);let e=te("#ff8a5c",{roughness:.5,clearcoat:.3});for(let i of[-1,1]){let s=new ce;s.rotation.y=i*-.25,n.add(s),rt(s,zt(.42,.56,.03,.012),e,g(i*.22,0,-.02)),rt(s,zt(.39,.52,.05,.01),te("#fffaf0",{roughness:.8}),g(i*.21,0,.02));for(let r=0;r<4;r++)rt(s,zt(.26,.02,.01,.005),Mn("#c9bfae"),g(i*.21,.15-r*.08,.05))}return gt(n,Ca(.08,.035),.015,re("#ffd35c"),{bevel:.007,bevelSize:.007}).position.set(.2,-.17,.06),n},mic(){let n=new ce;n.rotation.z=-.35,Z(n,g(0,.24,0),g(.18,.18,.18),new je({color:"#ff9ec4",roughness:.6,sheen:.8,sheenColor:new ge("#ffd9e8")})),rt(n,new Tt(.18,.025,10,40),re("#ffd35c",{metalness:.5}),g(0,.2,0),{x:Math.PI/2}),rt(n,new ht(.07,.05,.5,24),re("#ff5d8f",{roughness:.3}),g(0,-.15,0));for(let[e,t]of[[.3,.9],[.42,.6]]){let i=rt(n,new Tt(e,.022,8,32,1.3),re("#4fb8ff"),g(0,.24,0));i.rotation.z=-.65,i.material=i.material.clone(),i.material.transparent=!0,i.material.opacity=t}return n},hanger(){let n=new ce;et(n,[g(-.45,-.12,0),g(0,.16,0),g(.45,-.12,0)],[.025,.025,.025],re("#c98a4b"),{tubular:24,radial:10}),et(n,[g(-.45,-.12,0),g(.45,-.12,0)],[.022,.022],re("#c98a4b"),{tubular:4,radial:10}),et(n,[g(0,.16,0),g(0,.28,0),g(.07,.38,0),g(.12,.3,0)],[.018,.018,.018,.016],re("#cfd8e2",{metalness:.8}),{tubular:16,radial:8});let e=Nt([fe(-.3,.1),fe(-.12,.16),fe(.12,.16),fe(.3,.1),fe(.36,-.02),fe(.2,-.06),fe(.18,-.42),fe(-.18,-.42),fe(-.2,-.06),fe(-.36,-.02)],.05);return gt(n,e,.04,te("#ff5d8f",{roughness:.6,sheen:.6}),{bevel:.02,bevelSize:.02}).position.set(0,-.2,.03),gt(n,Ca(.08,.035),.015,re("#ffd35c"),{bevel:.006,bevelSize:.006}).position.set(0,-.36,.08),n},paint(){let n=new ce;rt(n,new ht(.16,.16,.56,32),te("#ff9ec4",{roughness:.8,sheen:.8}),g(0,.18,0),{z:Math.PI/2});for(let e of[-1,1])rt(n,new ht(.05,.05,.04,20),re("#cfd8e2",{metalness:.7,roughness:.3}),g(e*.3,.18,0),{z:Math.PI/2});et(n,[g(.3,.18,0),g(.38,.18,0),g(.38,-.02,0),g(0,-.08,0),g(0,-.2,0)],[.025,.025,.025,.025,.025],re("#cfd8e2",{metalness:.7,roughness:.3}),{tubular:24,radial:10}),rt(n,new ht(.055,.06,.34,20),re("#4fb8ff",{roughness:.35}),g(0,-.36,0));for(let[e,t]of[[-.12,"#7cc85a"],[.02,"#ffd23a"],[.15,"#4fb8ff"]])Z(n,g(e,.36,.06),g(.05,.03,.05),re(t),{seg:16});return n.userData.dir=g(.3,.35,1),n},gift(){let n=new ce,e=te("#ff7aa8",{roughness:.45,clearcoat:.4}),t=te("#ff9ec4",{roughness:.45,clearcoat:.4}),i=re("#ffd23a",{roughness:.3});rt(n,zt(.62,.46,.62,.06),e,g(0,-.1,0)),rt(n,zt(.7,.14,.7,.05),t,g(0,.18,0)),rt(n,zt(.12,.6,.64,.03),i,g(0,-.03,0)),rt(n,zt(.64,.6,.12,.03),i,g(0,-.03,0));for(let s of[-1,1])rt(n,new Tt(.11,.04,12,28),i,g(s*.11,.33,0),{z:s*.5,y:.2}).scale.set(1,.75,.6);return Z(n,g(0,.29,0),g(.06,.05,.06),i,{seg:20}),n.userData.dir=g(.35,.45,1),n},ball(){let n=new ce;return rt(n,new St(.4,48,32),new je({map:Zn("#4fb8ff","#ffffff",6,!0),roughness:.3,clearcoat:.8}),g(0,0,0),{z:.5,x:.3}),n},egg(){let n=new ce,e=ql("#fff5e2","#7cc85a",4);return Ra(n,Array.from({length:33},(t,i)=>{let s=i/32;return[Math.max(1e-4,Math.sin(Math.PI*s)**.62*.36*(1-.12*s)),s*.86]}),new je({map:e.tex,roughness:.35,clearcoat:.6}),g(0,-.43,0),48),n},home(){let n=new ce;return rt(n,zt(.7,.5,.6,.06),te("#ffe3c2",{roughness:.5}),g(0,-.15,0)),rt(n,new ci(.6,.38,4),te("#ff6b6b",{roughness:.4,clearcoat:.4}),g(0,.28,0),{y:Math.PI/4}).scale.set(1.05,1,.95),rt(n,zt(.18,.3,.05,.03),te("#c98a4b"),g(0,-.25,.3)),rt(n,zt(.15,.15,.04,.02),re("#9fdcff"),g(.2,-.05,.3)),gt(n,Nt([fe(0,-.08),fe(.09,.02),fe(.05,.08),fe(0,.04),fe(-.05,.08),fe(-.09,.02)],.03),.03,re("#ff5d8f"),{bevel:.015,bevelSize:.015}).position.set(-.2,-.05,.31),n.userData.dir=g(.4,.35,1),n},kitchen(){let n=new ce;Ra(n,[[0,0],[.18,0],[.38,.12],[.44,.3],[.45,.32],[.4,.31],[.34,.2],[0,.16]],re("#7fd1c7",{roughness:.25}),g(0,-.25,0));for(let[e,t,i,s]of[[-.12,0,"#ff3b4e",.13],[.14,.02,"#ffd23a",.12],[.02,-.12,"#6cc24a",.12],[.02,.12,"#ff9f43",.11]])Z(n,g(e,.08+s*.6,t),g(s,s,s),re(i,{roughness:.3}),{seg:24});return n.userData.dir=g(.2,.8,1),n},bath(){let n=new ce;rt(n,zt(.9,.36,.5,.15),te("#ffffff",{roughness:.2,clearcoat:1}),g(0,-.15,0));for(let[e,t,i]of[[-.25,.08,.14],[0,.12,.17],[.25,.07,.13],[.12,.25,.1],[-.12,.24,.1]])Z(n,g(e,t,.05),g(i,i*.9,i),te("#ffffff",{sheen:.8,roughness:.4}),{seg:24});return Z(n,g(.32,.2,.2),g(.08,.06,.07),re("#ffd23a"),{seg:20}),n.userData.dir=g(.2,.6,1),n},bed(){let n=new ce,e=new Ot;e.absarc(0,0,.36,Math.PI*.25,Math.PI*1.75,!1),e.absarc(.16,0,.3,Math.PI*1.65,Math.PI*.35,!0);let t=gt(n,e,.12,re("#ffd35c",{roughness:.3}),{bevel:.06,bevelSize:.05});return t.rotation.z=-.4,t.position.set(-.05,.05,0),gt(n,Ca(.1,.045),.04,re("#fff3c4"),{bevel:.02,bevelSize:.02}).position.set(.32,.28,.05),gt(n,Ca(.06,.027),.03,re("#fff3c4"),{bevel:.015,bevelSize:.015}).position.set(.36,-.12,.05),n},play(){let n=new ce;return rt(n,zt(.36,.36,.36,.06),new je({map:Ta("\u05D0","#ff5d8f"),roughness:.4,clearcoat:.4}),g(-.2,-.2,0),{y:.3}),rt(n,zt(.36,.36,.36,.06),new je({map:Ta("\u05D1","#4fb8ff"),roughness:.4,clearcoat:.4}),g(.2,-.2,.05),{y:-.3}),rt(n,new St(.2,32,24),new je({map:Zn("#ffd35c","#ffffff",6,!0),roughness:.3,clearcoat:.8}),g(0,.18,0),{z:.6}),n},album(){let n=new ce;return rt(n,zt(.62,.8,.1,.04),te("#ff8a5c",{roughness:.45,clearcoat:.4}),g(0,0,0)),rt(n,zt(.56,.74,.08,.02),te("#fffaf0"),g(.03,0,-.03)),rt(n,zt(.36,.28,.02,.02),te("#fff3dc"),g(0,.15,.06)),Z(n,g(-.05,.12,.08),g(.06,.06,.02),te("#6cc24a"),{seg:16}),gt(n,Ca(.13,.06),.04,re("#ffd35c"),{bevel:.02,bevelSize:.02}).position.set(0,-.2,.07),n.rotation.y=-.3,n},needFood(){return xr.fruit()},needClean(){let n=new ce;for(let[e,t,i]of[[-.12,-.08,.26],[.2,.12,.2],[.18,-.22,.13]])Z(n,g(e,t,0),g(i,i,i),new je({color:"#d6f2ff",roughness:.05,clearcoat:1,iridescence:.9,iridescenceIOR:1.3}),{seg:32});return n},needEnergy(){return xr.bed()},needFun(){return xr.ball()}};function Es(n){let e=null;return n.startsWith("hat:")?(e=Vl(n.slice(4)),e&&(e.userData.dir=g(.3,.6,1))):xr[n]&&(e=xr[n]()),e?(e.traverse(t=>{t.isMesh&&(t.castShadow=!0)}),e):null}var NS=Object.keys(xr);var In=(n,e,t)=>n+(e-n)*t;function fn(n,e){if(e){e.parent&&e.parent.remove(e);try{bs(e)}catch{}}}var tu=n=>Math.max(0,Math.min(1,n)),gn=n=>(n=tu(n),n*n*(3-2*n)),on=n=>Math.sin(Math.PI*tu(n)),kt=(n,e,t)=>tu((n-e)/(t-e)),Qh=(n,e)=>{let t=e-n;for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;return t},jh={hop:.55,squish:.35,wiggle:.7,shake:.5,nod:.64};function Ty(){return{y:0,sq:0,roll:0,pitch:0,yaw:0,hYaw:0,hPitch:0,hRoll:0,mouth:-1,open:-1,happy:-1,wide:0,arms:0,wave:0,ears:0,tail:0,love:0,legKick:null,look:null}}var Od={purr:{dur:1.9,run(n,e){let t=on(n);e.happy=1,e.hRoll+=.24*t,e.hPitch-=.08*t,e.roll+=.05*t,e.tail+=1.6*t,e.sq-=.025*t,e.ears+=.3*t}},giggle:{dur:1.5,run(n,e){let t=1-gn(kt(n,.6,1));e.y+=Math.abs(Math.sin(n*Math.PI*7))*.05*t,e.roll+=Math.sin(n*Math.PI*9)*.07*t,e.mouth=Math.max(e.mouth,(.5+.4*Math.abs(Math.sin(n*Math.PI*11)))*t),e.happy=1,e.arms+=1.3*t,e.tail+=2*t}},sneeze:{dur:1.6,run(n,e,t,i){if(n<.5){let s=gn(kt(n,0,.5));e.hPitch-=.3*s,e.open=1-.65*s,e.mouth=Math.max(e.mouth,.3*s),e.sq-=.035*s,e.wide=.3*s}else if(n<.64){let s=on(kt(n,.5,.64));e.hPitch+=.32*s,e.mouth=1,e.open=0,e.sq+=.07*s,t.fired||(t.fired=!0,i.burstAt("drop","mouth",14),i.cue("sneeze"))}else{let s=kt(n,.64,1);e.hPitch+=.08*(1-s),e.open=s<.25?.15:-1,e.happy=s>.35?1:-1,e.mouth=Math.max(e.mouth,.2*(1-s))}}},lookback:{dur:2,run(n,e,t){let i=gn(kt(n,0,.28))*(1-gn(kt(n,.72,1)));e.hYaw+=t.side*1*i,e.yaw+=t.side*.4*i,e.tail+=3.5*i,e.wide=.6*i,e.mouth=Math.max(e.mouth,.25*i)}},stomp:{dur:1,run(n,e,t){e.legKick={side:t.side,amt:on(kt(n,0,.55))},e.y+=on(kt(n,.55,1))*.1,e.happy=n>.5?1:-1,e.roll+=-t.side*.06*on(kt(n,0,.55))}},shakehead:{dur:1,run(n,e){let t=1-n;e.hYaw+=Math.sin(n*Math.PI*6)*.38*t,e.ears+=Math.sin(n*Math.PI*12)*1.4*t,e.open=n<.6?.45:-1}},dizzy:{dur:3.2,run(n,e,t,i,s){if(e.yaw+=Math.PI*2*gn(kt(n,0,.3)),n>.3){let r=1-gn(kt(n,.75,1));e.roll+=Math.sin(s*7)*.14*r,e.hRoll+=Math.sin(s*7+1.2)*.2*r,e.open=n<.85?.3:-1,e.mouth=Math.max(e.mouth,.3*r)}!t.fired&&n>.28&&(t.fired=!0,i.stars(2),i.cue("dizzy"))}},yawn:{dur:2.6,run(n,e){let t=on(kt(n,.05,.9));e.mouth=Math.max(e.mouth,Math.pow(t,.6)),e.open=1-.85*t,e.hPitch-=.26*t,e.arms+=2.2*t,e.sq-=.05*t,e.wave+=.6*t}},stretch:{dur:1.8,run(n,e){let t=on(n);e.sq-=.08*t,e.arms+=2.4*t,e.hPitch-=.22*t,e.mouth=Math.max(e.mouth,.55*t),e.open=1-.7*t}},dance:{dur:4.4,run(n,e,t){let i=gn(kt(n,0,.08))*(1-gn(kt(n,.9,1))),s=n*4.4*2.2;e.y+=Math.abs(Math.sin(s*Math.PI))*.07*i,e.roll+=Math.sin(s*Math.PI)*.12*i,e.hRoll+=Math.sin(s*Math.PI+.8)*.17*i,e.yaw+=Math.sin(s*Math.PI*.5)*.25*i,e.arms+=1.6*i,e.tail+=2.5*i,e.wave+=i,e.mouth=Math.max(e.mouth,.35*i),e.happy=Math.floor(s)%4<2?1:-1,e.legKick={side:Math.floor(s)%2?1:-1,amt:.6*i*Math.abs(Math.sin(s*Math.PI))}}},lookaround:{dur:3.4,run(n,e){let t=on(n);e.hYaw+=Math.sin(n*Math.PI*2)*.75*t,e.hPitch-=.1*t,e.wide=.3*t}},surprise:{dur:.9,run(n,e){let t=on(n);e.wide=t,e.mouth=Math.max(e.mouth,.65*t),e.y+=on(kt(n,0,.45))*.08,e.sq-=.04*t}},love:{dur:2.2,run(n,e){let t=Math.pow(on(n),.5);e.love=Math.max(e.love,t),e.hRoll+=Math.sin(n*Math.PI*3)*.1*t,e.mouth=Math.max(e.mouth,.2*t),e.tail+=2*t}},wave:{dur:1.6,run(n,e){let t=on(n);e.wave+=1.6*t,e.happy=1,e.hRoll+=Math.sin(n*Math.PI*4)*.08*t}},header:{dur:.8,run(n,e){e.hPitch+=n<.35?-.3*gn(n/.35):.35*on(kt(n,.35,.8))-.3*(1-kt(n,.35,.5)),e.y+=on(kt(n,.2,.7))*.1,e.happy=n>.4?1:-1}},shakedry:{dur:1.3,run(n,e,t,i){let s=on(n);e.roll+=Math.sin(n*Math.PI*14)*.13*s,e.hRoll+=Math.sin(n*Math.PI*14+.6)*.2*s,e.ears+=Math.sin(n*Math.PI*16)*1.4*s,e.open=.2,e.tail+=3*s,!t.fired&&n>.25&&(t.fired=!0,i.burstAt("drop","center",18,{spread:1}))}},eat:{dur:99,run(n,e,t){let i=t.ctl;i&&(i.mouth>=0&&(e.mouth=Math.max(e.mouth,i.mouth)),i.happy&&(e.happy=1),i.open>=0&&(e.open=i.open),e.hYaw+=i.turn||0,e.hPitch+=i.pitch||0,e.love=Math.max(e.love,i.love||0),i.done&&(t.end=!0))}}},Bd=Object.keys(Od),Ia=null,Pa=null;function Ay(){let n=new Ot;return n.moveTo(0,-.5),n.bezierCurveTo(-.15,-.35,-.62,-.05,-.55,.25),n.bezierCurveTo(-.5,.55,-.12,.6,0,.32),n.bezierCurveTo(.12,.6,.5,.55,.55,.25),n.bezierCurveTo(.62,-.05,.15,-.35,0,-.5),n}function Hd(){return Ia||(Ia=new hi(Ay(),{depth:.14,bevelEnabled:!0,bevelThickness:.08,bevelSize:.06,bevelSegments:3,curveSegments:14}),Ia.center(),Ia.userData.shared=!0),Ia}function zd(){if(!Pa){let n=new Ot;for(let e=0;e<10;e++){let t=Math.PI/2+e*Math.PI/5,i=e%2?.42:1;e?n.lineTo(Math.cos(t)*i,Math.sin(t)*i):n.moveTo(Math.cos(t)*i,Math.sin(t)*i)}Pa=new hi(n,{depth:.2,bevelEnabled:!0,bevelThickness:.1,bevelSize:.08,bevelSegments:2,curveSegments:4}),Pa.center(),Pa.userData.shared=!0}return Pa}var Ry=re("#ff4f86",{roughness:.25,emissive:"#ff3d77",emissiveIntensity:.25}),Cy=re("#ffd23a",{roughness:.25,emissive:"#ffb800",emissiveIntensity:.35});function Iy(n){return n._hearts||(n._hearts=n.eyes.map(e=>{let t=new Q(Hd(),Ry);return t.position.set(0,0,e.r*1.02),t.scale.setScalar(.001),t.visible=!1,t.castShadow=!1,e.g.add(t),t})),n._hearts}function nu(){return{x:0,y:0,z:0,yaw:0,target:null,amt:0,phase:0,resolve:null,speed:1,locked:!1,run:!1,pause:0}}function kd(n,e){let t=n.friend;if(!t)return;let i=n.anim,s=n.t,r=new Set(n.stateEl?Array.from(n.stateEl.classList):[]);for(let O of Object.keys(jh))r.has(O)&&!i.prev.has(O)&&(i[O+"T"]=1e-4);i.prev=r;let a=r.has("sleep"),o=r.has("happy"),l=r.has("wide"),c=r.has("blink");i.sleep=In(i.sleep,a?1:0,Math.min(1,e*4)),i.happy=In(i.happy,o?1:0,Math.min(1,e*14));let h=a||c?0:1;i.open=In(i.open,h,Math.min(1,e*(c?40:18))),i.talk=In(i.talk,r.has("talk")?1:0,Math.min(1,e*22)),i.tilt=In(i.tilt,r.has("tilt")?1:r.has("listen")?-1:0,Math.min(1,e*6)),i.excited=In(i.excited,r.has("excited")?1:0,Math.min(1,e*6));let u=Ty();if(!a)for(let O of n.actions){O.t+=e;let V=Od[O.name],ee=O.t/(O.dur||V.dur);if(ee>=1||O.end){O.done=!0;continue}V.run(ee,u,O,n,s)}n.actions=n.actions.filter(O=>!O.done);let f=n.walk;Py(n,t,e,f);let m=t.gait||(t.legs.length===2?"biped":"quad"),x=m==="hop",_=x?f.phase*.62:f.phase;u.y+=Math.abs(Math.sin(_))*(x?.16:m==="waddle"?.025:.035)*f.amt,x&&(u.pitch+=.12*f.amt),u.roll+=Math.sin(_)*(m==="waddle"?.13:m==="scoot"?.05:.035)*f.amt;let p=Math.floor(_/Math.PI);p!==f.stepIdx&&(f.stepIdx=p,f.amt>.45&&f.y<.02&&n.cue("step"));let d=u.open>=0?Math.min(i.open,u.open):i.open,S=u.happy>=0?Math.max(u.happy,i.happy):i.happy;for(let O of t.eyes)O.set(d,u.love>.3?0:S,i.sleep),O.g.scale.setScalar(1+(l?.12:0)+u.wide*.14);if(u.love>.01||t._hearts){let O=Iy(t);for(let V of O)V.visible=u.love>.01,V.scale.setScalar(t.eyes[0].r*1.7*u.love*(1+.12*Math.sin(s*12)))}let T=Math.min(1,i.talk*(o&&!r.has("talk")?0:1));n.game&&n.game.mouth&&(u.mouth=Math.max(u.mouth,n.game.mouth)),t.mouth.set(u.mouth>=0?Math.max(T,u.mouth):T);let y=0,w=0,M=0,C=0,v=0;for(let O of Object.keys(jh)){let V=O+"T";if(!i[V])continue;i[V]+=e;let ee=i[V]/jh[O];if(ee>=1){i[V]=0;continue}O==="hop"&&(y=Math.sin(Math.min(1,ee/.7)*Math.PI)*.32,ee>.7&&(w=Math.sin((ee-.7)/.3*Math.PI)*.08)),O==="squish"&&(w=Math.sin(ee*Math.PI)*.1),O==="wiggle"&&(M=Math.sin(ee*Math.PI*10)*.08*(1-ee)),O==="shake"&&(C=Math.sin(ee*Math.PI*6)*.3*(1-ee)),O==="nod"&&(v=Math.sin(ee*Math.PI*4)*.14)}let R=Math.sin(s*(a?1.4:2.1))*(a?.026:.014);t.jump.position.y=y+u.y-i.sleep*.13;let P=w+u.sq;t.body.scale.set(1+P*.6,1-P+R,1+P*.6),t.body.rotation.z=M+u.roll+Math.sin(s*.7)*.012,t.body.rotation.x=u.pitch,t.root.rotation.y=f.yaw+u.yaw;let U=t.headYaw||0,D=0,H=0,N=n.lookOverride||(n.look?n.lookW:null);if(N&&!a){let O=new L;t.head.getWorldPosition(O);let V=N.clone().sub(O),ee=t.root.rotation.y+(t.turn||0)+U;D=Math.max(-.6,Math.min(.6,Qh(ee,Math.atan2(V.x,V.z))*.5)),H=Math.max(-.35,Math.min(.35,-Math.atan2(V.y,Math.hypot(V.x,V.z))*.45))}t._yaw=In(t._yaw||0,D,Math.min(1,e*6)),t._pitch=In(t._pitch||0,H,Math.min(1,e*6)),t.head.rotation.y=U+t._yaw+C+u.hYaw+Math.sin(s*.5)*.04*(1-i.sleep),t.head.rotation.x=t._pitch+v+u.hPitch+i.sleep*.24+Math.sin(s*.9)*.015,t.head.rotation.z=i.tilt*.18+u.hRoll+Math.sin(s*.6)*.02;for(let O of t.eyes){let V=N?t._yaw*1.2:Math.sin(s*.33)*.08,ee=N?t._pitch*1.2:0;O.look.rotation.y=In(O.look.rotation.y,V,Math.min(1,e*10)),O.look.rotation.x=In(O.look.rotation.x,ee,Math.min(1,e*10))}let k=i.excited+u.tail*.5;if(t.tail){let O=1.9+k*5;t.tail.rotation.y=Math.sin(s*O)*(.12+Math.min(1.5,k)*.14)*(1-i.sleep*.8)}if(t.extra.earL){let O=Math.sin(s*2.2)*.06+(Math.sin(s*.7)>.93?Math.sin(s*30)*.12:0)+Math.sin(s*20)*.25*Math.min(1,Math.abs(u.ears))*Math.sign(u.ears||1);t.sp==="lion"||t.sp==="kangaroo"?(t.extra.earL.rotation.set(0,0,O),t.extra.earR.rotation.set(0,0,-O)):(t.extra.earL.rotation.y=-.55-O,t.extra.earR.rotation.y=.55+O)}if(t.trunk&&(t.trunk.rotation.x=Math.sin(s*1.3)*.08-i.talk*.12-u.wave*.5-Math.max(0,u.mouth)*.15),t.extra.finL){let O=(i.excited+u.arms*.6)*Math.sin(s*22)*.35+Math.sin(s*1.5)*.04;t.extra.finL.rotation.z=-O-.05-u.wave*.9,t.extra.finR.rotation.z=O+.05+u.wave*.3*Math.sin(s*9)}if(t.extra.armL){let O=Math.sin(s*3)*.08+(i.excited+u.arms*.5)*Math.sin(s*18)*.4;t.extra.armL.rotation.x=O-u.wave*.6,t.extra.armR.rotation.x=-O-u.wave*(1.2+.35*Math.sin(s*10))}for(let O of t.legs){let V=m==="biped"||m==="waddle"||m==="scoot"?O.side>0?0:Math.PI:(O.front?1:0)^(O.side>0?1:0)?0:Math.PI,ee=Math.sin(_+V)*(m==="scoot"?.4:.5)*f.amt,J=0;x&&(ee=Math.abs(Math.sin(_))*.55*f.amt),m==="waddle"&&(J=Math.max(0,Math.sin(_+V))*.06*f.amt,ee*=.4),u.legKick&&u.legKick.side===O.side&&(O.front||t.legs.length<=2)&&(ee-=.7*u.legKick.amt,J+=.05*u.legKick.amt),u.wave>.05&&O.front&&O.side>0&&t.legs.length===4&&(ee-=.9*Math.min(1,u.wave)*(.8+.2*Math.sin(s*10)),J+=.08*Math.min(1,u.wave)),O.g.rotation.x=In(O.g.rotation.x,ee,Math.min(1,e*16)),O.g.position.y=O.hip.y+J}}function Py(n,e,t,i){if(i.locked)return;let s=e.turn||0,r=0;if(i.pause>0)i.pause-=t;else if(i.target){let o=i.target.x-i.x,l=i.target.z-i.z,c=Math.hypot(o,l);if(c<.015){i.x=i.target.x,i.z=i.target.z,i.target=null;let h=i.resolve;i.resolve=null,h&&h()}else{r=Math.atan2(o,l)-s;let h=Qh(i.yaw,r);if(i.yaw+=Math.sign(h)*Math.min(Math.abs(h),t*7),Math.abs(h)<.7){let u=.9*i.speed*(e.inner?e.inner.scale.x:1),f=Math.min(c,u*t*(1-Math.abs(h)/.7*.6));i.x+=o/c*f,i.z+=l/c*f}i.amt=In(i.amt,1,Math.min(1,t*8)),i.phase+=t*9*i.amt*i.speed;return}}let a=Qh(i.yaw,r);i.yaw+=Math.sign(a)*Math.min(Math.abs(a),t*5),i.amt=In(i.amt,0,Math.min(1,t*8)),i.amt>.02&&(i.phase+=t*9*i.amt)}var iu=new St(1,12,8);iu.userData.shared=!0;function bn(n,e,t,i=8,s={}){let r=s.scale||1;for(let a=0;a<i;a++){let o=iu,l=s.color||"#ffffff",c=.03,h,u=.9,f=-6,m=0,x=!0,_=Math.random()*Math.PI*2,p=Math.random();if(e==="crumb")c=.022+Math.random()*.025,h=g(Math.cos(_)*.9,.6+p*1.2,Math.sin(_)*.5+.5),u=.8+Math.random()*.4;else if(e==="drop"){l=s.color||"#dff4ff",c=.018+Math.random()*.02;let T=s.spread||.5;h=g((Math.random()-.5)*1.6*T*2,.3+p*.9,1.2+Math.random()*.8),u=.6+Math.random()*.3,f=-5}else if(e==="spark")o=zd(),l=s.color||"#ffd23a",c=.04+Math.random()*.03,h=g(Math.cos(_)*.7,.7+p*1,Math.sin(_)*.4+.3),u=.9+Math.random()*.4,f=-1.5,m=6;else if(e==="heart")o=Hd(),l=s.color||"#ff5d8f",c=.06+Math.random()*.03,h=g((Math.random()-.5)*.5,.6+p*.4,.2),u=1.2+Math.random()*.3,f=.2;else if(e==="bubble")l="#eafaff",c=.03+Math.random()*.04,h=g((Math.random()-.5)*.4,.3+p*.4,(Math.random()-.5)*.3),u=1.6+Math.random(),f=.2;else continue;let d=new Gt({color:new ge(l),transparent:!0,opacity:e==="bubble"?.55:1,depthWrite:!1}),S=new Q(o,d);S.position.copy(t).add(g((Math.random()-.5)*.06,(Math.random()-.5)*.06,(Math.random()-.5)*.06)),S.scale.setScalar(c*r),S.rotation.set(Math.random()*3,Math.random()*3,Math.random()*3),S.renderOrder=5,n.scene.add(S),n.parts.push({m:S,vel:h.multiplyScalar(r),life:u,age:0,g:f*r,spin:m,fade:x,base:c*r,kind:e})}}function Ly(n,e){if(n.parts.length){for(let t of n.parts){t.age+=e,t.vel.y+=t.g*e,t.kind==="bubble"&&(t.vel.x+=Math.sin(t.age*5+t.base*100)*e*.4),t.m.position.addScaledVector(t.vel,e),t.spin&&(t.m.rotation.z+=t.spin*e,t.m.rotation.y+=t.spin*e*.5);let i=t.age/t.life;t.kind==="heart"&&t.m.scale.setScalar(t.base*(.6+.6*Math.min(1,i*3))),t.m.material.opacity=(t.kind==="bubble"?.55:1)*(1-gn(kt(i,.6,1))),t.m.position.y<.01&&t.kind==="crumb"&&(t.m.position.y=.01,t.vel.set(0,0,0),t.g=0),i>=1&&(t.dead=!0,n.scene.remove(t.m),t.m.material.dispose())}n.parts=n.parts.filter(t=>!t.dead)}}function Gd(n,e){let t=n.friend;if(!t)return;let i=new ce,s=4;for(let r=0;r<s;r++){let a=new Q(zd(),Cy);a.scale.setScalar(.06),a.castShadow=!1,i.add(a)}i.position.y=.12,t.hat.add(i),n.effects.push({age:0,update(r){this.age+=r;let a=Math.min(1,this.age*4)*(1-gn(kt(this.age,e-.4,e)));return i.children.forEach((o,l)=>{let c=this.age*5+l/s*Math.PI*2;o.position.set(Math.cos(c)*.32,Math.sin(c*2)*.03,Math.sin(c)*.32),o.rotation.y=c*2,o.scale.setScalar(.06*a+1e-4)}),this.age>=e?(i.parent&&i.parent.remove(i),!1):!0},cancel(){i.parent&&i.parent.remove(i)}})}function yi(n,e){let t=n.friend,i=new L;return t&&(e==="mouth"?t.mouthAnchor.getWorldPosition(i):e==="head"?t.hat.getWorldPosition(i):(t.body.getWorldPosition(i),i.y+=(t.height||1.4)*.45*t.inner.scale.x)),i}function eu(n){let e=n.friend,t=yi(n,"mouth"),i=new L(0,0,1).transformDirection(e.mouthAnchor.matrixWorld);return i.y*=.5,i.z=Math.max(.35,i.z),i.normalize(),{p:t,n:i}}function Vd(n,e,t,i){return new Promise(s=>{let r=n.friend,a=r&&Es(e);if(!a){s();return}a.updateMatrixWorld(!0);let o=new sn().setFromObject(a),l=o.getSize(new L),c=o.getCenter(new L),h=new ce;h.add(a),a.position.sub(c),h.userData.fx=!0;let u=.36*r.inner.scale.x,f=n.walk;if(f.target){f.target=null;let v=f.resolve;f.resolve=null,v&&v()}let m=u/Math.max(l.x,l.y,l.z);h.scale.setScalar(m),n.scene.add(h);let x=eu(n),_=()=>(x=eu(n),x.p.clone().addScaledVector(x.n,t?.17:.45)),p=_(),d=i?i.clone():x.p.clone().add(g(.1,-.75,.9)),S={name:"eat",t:0,dur:99,ctl:{mouth:0,happy:!1,open:-1,turn:0,pitch:0}};n.actions=n.actions.filter(v=>v.name!=="eat"),n.actions.push(S);let T=S.ctl,y=[.4,.62,.84],w=0,M=null,C={meat:"#c9573e",fish:"#9fdcff",fruit:"#ff4b5c",grass:"#6cc24a",leaves:"#5cbf55",fern:"#4caf50"}[e]||"#e9b46a";n.effects.push({age:0,update(v){this.age+=v;let R=this.age;if(p=_(),R<.38){let P=gn(R/.38);return h.position.lerpVectors(d,p,P),h.position.y+=Math.sin(P*Math.PI)*.25,h.rotation.y+=v*4,T.mouth=t?.9*P:0,T.open=t?-1:1-.5*P,T.turn=t?0:-.55*P,!0}if(t){y.find((D,H)=>H===w&&R>=D)!==void 0&&(w++,h.scale.multiplyScalar(.62),bn(n,"crumb",x.p.clone().addScaledVector(x.n,.08),7,{color:C}),n.cue("chomp1"),w===3&&(h.visible=!1));let U=y.some(D=>R>=D-.03&&R<D+.08);if(h.visible&&(h.position.lerp(x.p.clone().addScaledVector(x.n,.17-.05*w),Math.min(1,v*12)),h.rotation.y+=v*1.5),R<.95)T.mouth=U?.08:.85;else if(R<1.4)T.mouth=.08+.28*Math.abs(Math.sin((R-.95)*16)),T.happy=!0,T.pitch=Math.sin((R-.95)*16)*.03;else if(R<2)T.mouth=.35*on(kt(R,1.4,2)),T.happy=!0,T.love=t==="love"?on(kt(R,1.4,2)):0,this.yum||(this.yum=!0,n.cue("yum"),bn(n,"spark",yi(n,"head"),5));else return T.done=!0,fn(n,h),s(),!1;return!0}return M||(M=g((Math.random()-.5)*.4,.4,.6)),T.turn=-.6+Math.sin(R*16)*.12*(1-kt(R,.4,1)),T.mouth=0,T.open=.55,M.y-=6*v,h.position.addScaledVector(M,v),h.rotation.z+=v*5,h.position.y<.12&&(h.position.y=.12,M.y=Math.abs(M.y)*.35,M.x*=.7,M.z*=.7),R>1.2&&(this.faded||(this.faded=!0,h.traverse(P=>{P.material&&(P.material=P.material.clone(),P.material.userData.shared=!1,P.material.transparent=!0)})),h.traverse(P=>{P.material&&(P.material.opacity=Math.max(0,1-(R-1.2)*2))})),R>1.7?(T.done=!0,fn(n,h),s(),!1):!0},cancel(){fn(n,h),s()}})})}function Wd(n,e){let t=n.friend;if(!t)return;let i=Es("ball");if(!i)return;let s=new ce;s.add(i),s.userData.fx=!0;let r=.14*t.inner.scale.x/.4;s.scale.setScalar(r);let a=.4*r;n.scene.add(s);let o=yi(n,"head").add(g(0,.05,.25)),l=e?e.clone():o.clone().add(g(.2,-1.2,1.4)),c=null,h="fly",u=0;n.effects.push({age:0,update(f){if(this.age+=f,h==="fly"){let x=gn(this.age/.45);return s.position.lerpVectors(l,o,x),s.position.y+=Math.sin(x*Math.PI)*.4,s.rotation.x-=f*8,this.age>=.45&&(h="free",n.act("header"),n.cue("boing"),bn(n,"spark",o.clone(),6),c=g((Math.random()<.5?-1:1)*(.7+Math.random()*.5),2.6,.9)),!0}c.y-=6.5*f,s.position.addScaledVector(c,f),s.rotation.z-=c.x*f/a,s.rotation.x+=c.z*f/a,s.position.y<a&&(s.position.y=a,c.y<-.4?(c.y=-c.y*.55,u++,n.cue("bounce")):c.y=0,c.x*=.92,c.z*=.92);let m=this.age>4.2;return this.age>3.6&&s.scale.setScalar(r*Math.max(.001,1-(this.age-3.6)/.6)),m?(fn(n,s),!1):!0},cancel(){fn(n,s)}})}function Dy(){let n=new ce,e=new je({color:new ge("#ff9ec4"),roughness:.4,sheen:.6,side:Rt,emissive:new ge("#ff6fa8"),emissiveIntensity:.15}),t=new Gt({color:new ge("#fff3a8"),side:Rt}),i=(a,o)=>{let l=new ce;n.add(l);let c=o?Nt([fe(0,0),fe(.5,.25),fe(.62,.62),fe(.2,.55)],.18):Nt([fe(0,0),fe(.42,-.12),fe(.4,-.45),fe(.1,-.38)],.14),h=new Q(new na(c,10),e);h.scale.x=a,l.add(h);let u=new Q(new Dn(o?.1:.07,16),t);return u.position.set(a*(o?.33:.25),o?.33:-.22,.002),l.add(u),l},s=[i(1,!0),i(-1,!0),i(1,!1),i(-1,!1)],r=new Q(new Zr(.05,.45,4,10),re("#4a3a66"));n.add(r);for(let a of[-1,1]){let o=new Q(new ht(.008,.008,.28,5),Ss("#4a3a66"));o.position.set(a*.06,.34,0),o.rotation.z=-a*.4,n.add(o)}return n.rotation.x=-.45,{g:n,wings:s}}function Xd(n){return new Promise(e=>{if(!n.friend){e();return}let i=Dy(),s=new ce;s.add(i.g),s.scale.setScalar(.3),s.userData.fx=!0,n.scene.add(s);let r=8,a=!1;n.effects.push({age:0,update(o){this.age+=o;let l=this.age,c=yi(n,"head"),h=eu(n).p.clone().add(g(0,.12,.08)),u;if(l<1.4){let m=gn(l/1.4);u=new L(1.8,c.y+.6,.6).lerp(c.clone().add(g(.5,.25,.3)),m),u.y+=Math.sin(l*6)*.06}else if(l<4.6){let m=(l-1.4)*1.9;u=c.clone().add(g(Math.cos(m)*.55,.22+Math.sin(m*2)*.12,.25+Math.sin(m)*.3))}else if(l<5){let m=gn((l-4.6)/.4),x=3.2*1.9;u=c.clone().add(g(Math.cos(x)*.55,.22+Math.sin(x*2)*.12,.25+Math.sin(x)*.3)).lerp(h,m)}else if(l<6)u=h,a||(a=!0,n.act("surprise"),n.cue("giggle"));else{let m=(l-6)/2;u=h.clone().add(g(-m*2.4,m*1.6+Math.sin(l*6)*.05,m*.4)),this.giggled||(this.giggled=!0,n.act("giggle"))}s.position.copy(u);let f=l>5&&l<6?Math.sin(l*6)*.3+.6:Math.sin(l*28)*.9;return i.wings[0].rotation.y=f,i.wings[2].rotation.y=f*.8,i.wings[1].rotation.y=-f,i.wings[3].rotation.y=-f*.8,s.rotation.y=Math.sin(l*2)*.6,n.lookOverride=l<6.3?u:null,l>=r?(fn(n,s),n.lookOverride=null,e(),!1):!0},cancel(){fn(n,s),e()}})})}function qd(n,e){n.effects.length&&(n.effects=n.effects.filter(t=>t.update(e)!==!1)),Ly(n,e)}function Yd(n){let e=n.effects.slice();n.effects.length=0;for(let t of e)if(t.cancel)try{t.cancel()}catch{}for(let t of n.parts)n.scene.remove(t.m),t.m.material.dispose();n.parts.length=0,n.lookOverride=null;for(let t of n.scene.children.slice())t.userData.fx&&fn(n,t)}var Ny=(()=>{let n=new je({color:new ge("#ffffff"),roughness:.35,sheen:1,sheenColor:new ge("#dff4ff"),clearcoat:.6});return n.userData.shared=!0,n})();function Zd(n,e){let t=n.friend;if(!t||!e||!e.object)return;if(t._foam=t._foam||[],t._foam.length>=46){let o=t._foam.shift();o.parent&&o.parent.remove(o)}let i=e.object.parent,s=new L;i.getWorldScale(s);let r=new ce;r.position.copy(i.worldToLocal(e.point.clone()));let a=1/Math.max(.001,s.x);for(let o=0;o<3;o++){let l=new Q(iu,Ny),c=(.035+Math.random()*.03)*a;l.scale.setScalar(c),l.position.set((Math.random()-.5)*.07*a,(Math.random()-.3)*.05*a,(Math.random()-.5)*.07*a),l.castShadow=!1,r.add(l)}r.userData.born=n.t,i.add(r),t._foam.push(r)}function Jd(n,e){let t=n.friend;if(!t||!t._foam||!t._foam.length)return 0;let i=0;for(;i<e&&t._foam.length;){let s=t._foam.splice(Math.floor(Math.random()*t._foam.length),1)[0],r=new L;s.getWorldPosition(r),s.parent&&s.parent.remove(s),bn(n,"bubble",r,2),i++}return t._foam.length}function su(n){let e=n.friend;if(!(!e||!e._foam)){for(let t of e._foam)t.parent&&t.parent.remove(t);e._foam=[]}}function Zl(n){let e=n.screenToWorld(0,60,0)||g(-2,3,0),t=n.screenToWorld(innerWidth,innerHeight,0)||g(2,0,0);return{left:e.x,right:t.x,top:e.y,halfW:(t.x-e.x)/2}}function Fy(n,e){n.updateMatrixWorld(!0);let t=new sn().setFromObject(n),i=t.getSize(new L),s=t.getCenter(new L),r=new ce;return r.add(n),n.position.sub(s),r.scale.setScalar(e/Math.max(i.x,i.y,i.z)),r.userData.fx=!0,r}function jd(n){let e=n.friend,t=e.inner.scale.x;return{h:(e.height||1.6)*t,w:(e.width||1.4)*t}}function $d(n){let e=new L;return n.friend.mouthAnchor.getWorldPosition(e),e}function Oy(n,e){let t=e.foods,i=new Set(e.diet),s=[],r=n.walk,a=0,o=1.2,l=null,c=!1,h=0,u=null,f=0;r.locked=!0,r.x=0,r.z=.2,r.y=0,r.yaw=0;let m=jd(n).w*.45,x={mouth:0,items:s,pointer(_,p){let d=n.screenToWorld(p,innerHeight*.6,r.z);d&&(l=d.x)},update(_){let p=Zl(n),d=n.friend.turn||0;u==null&&++f>2&&(u=$d(n).x-r.x);let T=(l==null?r.x:Math.max(p.left+m,Math.min(p.right-m,l-(u||0))))-r.x;if(Math.abs(T)>.03){let M=Math.sign(T)*Math.min(Math.abs(T),2.6*_);r.x+=M;let C=(T>0?Math.PI/2:-Math.PI/2)*.75-d;r.yaw+=(C-r.yaw)*Math.min(1,_*10),r.amt+=(1-r.amt)*Math.min(1,_*10),r.phase+=_*14}else r.yaw+=(0-r.yaw)*Math.min(1,_*6),r.amt+=(0-r.amt)*Math.min(1,_*8),r.amt>.02&&(r.phase+=_*10);if(!c&&(o-=_)<=0&&s.length<2){o=1.6+Math.random()*1.2;let M=Math.random()<.7,C=t.filter(P=>i.has(P)===M),v=C[Math.floor(Math.random()*C.length)]||t[0],R=Fy(Es(v),.58);R.position.set(p.left+.4+Math.random()*(p.right-p.left-.8),p.top+.3,r.z+.15),n.scene.add(R),s.push({m:R,f:v,good:i.has(v),vy:-.7-Math.random()*.2,spin:(Math.random()-.5)*3,state:"fall",age:0})}let y=$d(n),w=0;for(let M of s)M.age+=_,M.state==="fall"?(M.m.position.y+=M.vy*_,M.m.rotation.z+=M.spin*_,M.m.rotation.y+=_,Math.abs(M.m.position.x-y.x)<.5&&M.m.position.y-y.y<.9&&M.m.position.y>y.y-.2&&M.good&&(w=1),Math.abs(M.m.position.x-y.x)<.46&&M.m.position.y-y.y<.2&&M.m.position.y-y.y>-.26&&(M.good?(M.state="eaten",M.age=0,a++,bn(n,"crumb",y.clone().add(g(0,0,.1)),7,{color:"#ffcf7a"}),bn(n,"spark",y.clone().add(g(0,.4,0)),5),n.cue("chomp1"),n.act("love",{dur:1.2}),e.onScore&&e.onScore(a),a>=e.goal&&!c&&(c=!0,setTimeout(()=>e.onDone&&e.onDone(),900))):(M.state="bounce",M.age=0,M.vx=(M.m.position.x<y.x?-1:1)*1.2,M.vy=2.2,n.act("shakehead"),n.cue("nope"),e.onYuck&&e.onYuck(M.f))),M.m.position.y<.2&&(M.state="bounce",M.age=0,M.vx=(Math.random()-.5)*.6,M.vy=1.2)):M.state==="eaten"?(M.m.scale.multiplyScalar(.8),M.m.position.lerp(y,.4),M.age>.25&&(M.dead=!0)):M.state==="bounce"&&(M.vy-=7*_,M.m.position.x+=M.vx*_,M.m.position.y+=M.vy*_,M.m.rotation.z+=6*_,M.m.position.y<.2&&(M.m.position.y=.2,M.vy=Math.abs(M.vy)*.4,M.vx*=.6),M.age>1.2&&M.m.scale.multiplyScalar(.85),M.age>1.6&&(M.dead=!0)),M.dead&&fn(n,M.m);for(let M=s.length-1;M>=0;M--)s[M].dead&&s.splice(M,1);h+=(w-h)*Math.min(1,_*10),x.mouth=h*.9},stop(){for(let _ of s)fn(n,_.m);s.length=0}};return x}function By(){let n=new ce;return Z(n,g(0,.12,0),g(.26,.17,.22),te("#9aa3ad",{roughness:.8})),Z(n,g(.12,.08,.06),g(.14,.1,.13),te("#b8c0c8",{roughness:.8})),n}function Hy(){let n=new ce,e=new Q(new ht(.16,.16,.62,20),te("#a86b3c",{roughness:.75}));e.rotation.x=Math.PI/2,e.position.y=.16,e.castShadow=!0,n.add(e);for(let t of[-.31,.31]){let i=new Q(new Dn(.155,20),te("#e8c08a",{roughness:.7}));i.position.set(0,.16,t+Math.sign(t)*.001),i.rotation.y=t>0?0:Math.PI,n.add(i)}return n}function zy(){let n=new ce;for(let e=0;e<4;e++){let t=new Q(new ci(.03,.18+Math.random()*.1,5),te("#5cbf4a",{roughness:.8}));t.position.set((Math.random()-.5)*.12,.09,(Math.random()-.5)*.08),t.rotation.z=(Math.random()-.5)*.5,n.add(t)}if(Math.random()<.5){let e=new Q(new St(.045,10,8),re(["#ff7aa8","#ffd23a","#ffffff","#b28cff"][Math.floor(Math.random()*4)]));e.position.y=.26,n.add(e)}return n.userData.fx=!0,n}var La=null;function Kd(){if(!La){let t=new Ot;for(let i=0;i<10;i++){let s=Math.PI/2+i*Math.PI/5,r=i%2?.42:1;i?t.lineTo(Math.cos(s)*r,Math.sin(s)*r):t.moveTo(Math.cos(s)*r,Math.sin(s)*r)}La=new hi(t,{depth:.25,bevelEnabled:!0,bevelThickness:.12,bevelSize:.1,bevelSegments:3,curveSegments:4}),La.center(),La.userData.shared=!0}let n=new Q(La,re("#ffd23a",{roughness:.2,emissive:"#ffb000",emissiveIntensity:.35}));n.scale.setScalar(.24),n.castShadow=!0;let e=new ce;return e.add(n),e.userData.fx=!0,e}function ky(n,e){let t=n.walk,i=[],s=0,r=1,a=0,o=!1,l=0,c=0,h=e.speed||1.5,u=jd(n);t.locked=!0,t.run=!0,t.z=.2,t.y=0;let f=n.friend.turn||0,m=Zl(n),x=()=>u.h*.95+.26+Math.random()*.3;t.x=m.left+u.w*.65+.2,t.yaw=Math.PI/2-f;for(let p=0;p<9;p++){let d=zy();d.position.set(m.left+(m.right-m.left)*p/8,0,t.z+.5+Math.random()*.4),n.scene.add(d),i.push({m:d,kind:"tuft"})}let _={pointer(p){p==="down"&&t.y<=.001&&!o&&(a=3.7,n.cue("jump"),n.act("surprise",{dur:.6}))},update(p){let d=Zl(n);if(t.x=d.left+u.w*.65+.2,t.amt=1,t.phase+=p*12*(t.y>0?.3:1),t.yaw=Math.PI/2-f,(t.y>0||a>0)&&(a-=9.5*p,t.y=Math.max(0,t.y+a*p),t.y===0&&(a=0)),c>0&&(c-=p),!o&&(r-=p)<=0){r=1.7+Math.random()*.7;let y=l++%3===2?"star":Math.random()<.5?"rock":"log",w;y==="star"?(w=Kd(),w.position.set(d.right+.4,x(),t.z)):(w=y==="rock"?By():Hy(),w.scale.setScalar(1.35),w.userData.fx=!0,w.position.set(d.right+.4,0,t.z),w.traverse(C=>{C.isMesh&&(C.castShadow=!0)})),n.scene.add(w);let M={m:w,kind:y,hit:!1};if(i.push(M),y!=="star"&&Math.random()<.6){let C=Kd();C.position.set(d.right+.4,x(),t.z),n.scene.add(C),i.push({m:C,kind:"star"})}}let S=t.x,T=t.y+u.h*.45;for(let y of i){if(y.m.position.x-=h*p*(y.kind==="tuft",1),y.kind==="tuft"){y.m.position.x<d.left-.3&&(y.m.position.x=d.right+.3);continue}y.kind==="star"?(y.m.rotation.y+=p*3,!y.hit&&Math.abs(y.m.position.x-S)<u.w*.4+.1&&Math.abs(y.m.position.y-T)<u.h*.5+.1&&(y.hit=!0,s++,y.dead=!0,bn(n,"spark",y.m.position.clone(),8),n.cue("star"),e.onScore&&e.onScore(s),s>=e.goal&&!o&&(o=!0,t.run=!1,setTimeout(()=>e.onDone&&e.onDone(),900)))):!y.hit&&Math.abs(y.m.position.x-S)<Math.min(u.w*.3,.3)&&t.y<.3&&(y.hit=!0,c=.5,n.act("shakehead"),n.cue("bump")),y.m.position.x<d.left-.6&&(y.dead=!0),y.dead&&fn(n,y.m)}for(let y=i.length-1;y>=0;y--)i[y].dead&&i.splice(y,1);_.mouth=t.y>.05?.5:0},stop(){for(let p of i)fn(n,p.m);i.length=0,t.run=!1}};return _}var Gy=(()=>{let n=new je({color:new ge("#ffffff"),roughness:.04,metalness:0,transmission:0,transparent:!0,opacity:.38,iridescence:1,iridescenceIOR:1.35,clearcoat:1,side:Cn,depthWrite:!1});return n.userData.shared=!0,n})(),Qd=new St(1,32,20);Qd.userData.shared=!0;var Da=null;function Vy(){if(Da)return Da;let n=Jt(256,256,(e,t)=>{let i=t/2,s=e.createRadialGradient(i,i,0,i,i,i);s.addColorStop(0,"rgba(220,245,255,0.10)"),s.addColorStop(.62,"rgba(200,236,255,0.22)"),s.addColorStop(.84,"rgba(150,215,255,0.65)"),s.addColorStop(.93,"rgba(255,255,255,0.95)"),s.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=s,e.fillRect(0,0,t,t);let r=e.createLinearGradient(0,0,t,t);r.addColorStop(0,"rgba(255,140,200,0.55)"),r.addColorStop(.5,"rgba(255,230,120,0.35)"),r.addColorStop(1,"rgba(120,200,255,0.55)"),e.globalCompositeOperation="source-atop",e.lineWidth=t*.05,e.strokeStyle=r,e.beginPath(),e.arc(i,i,i*.88,0,Math.PI*2),e.stroke(),e.globalCompositeOperation="source-over",e.fillStyle="rgba(255,255,255,0.95)",e.beginPath(),e.ellipse(i*.62,i*.56,i*.17,i*.1,-.7,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(i*.86,i*.4,i*.05,0,Math.PI*2),e.fill()});return Da=new Ri({map:n,transparent:!0,depthWrite:!1}),Da.userData.shared=!0,Da}function Wy(n,e){let t=n.walk;t.locked=!0,t.x=0,t.z=.2,t.y=0,t.yaw=0,t.amt=0;let i=[],s=.2,r=0,a=null,o=0,l={mouth:0,count:0,pointer(c,h,u){if(c!=="down")return;let f=null,m=1e9;for(let x of i){if(x.dead)continue;let _=n.worldToScreen(x.m.position),p=n.worldToScreen(x.m.position.clone().add(g(x.r,0,0))),d=Math.abs(p.x-_.x)+22,S=Math.hypot(_.x-h,_.y-u);S<d&&S<m&&(m=S,f=x)}f&&(f.dead=!0,fn(n,f.m),bn(n,"bubble",f.m.position.clone(),6),bn(n,"spark",f.m.position.clone(),4),n.cue("pop"),a=f.m.position.clone(),o=1.2,r++,e.onPop&&e.onPop(r))},resetCount(){r=0},update(c){let h=Zl(n);if((s-=c)<=0&&i.filter(u=>!u.dead).length<(e.max||7)){s=.5+Math.random()*.6;let u=.2+Math.random()*.13,f=new Q(Qd,Gy);f.scale.setScalar(u),f.renderOrder=4,f.userData.fx=!0;let m=new Yi(Vy());m.scale.setScalar(2.08),m.renderOrder=5,f.add(m),f.position.set(h.left+.3+Math.random()*(h.right-h.left-.6),.2,t.z+.4+Math.random()*.3),n.scene.add(f),i.push({m:f,r:u,vy:.32+Math.random()*.22,ph:Math.random()*6,age:0})}for(let u of i){if(u.dead)continue;u.age+=c,u.m.position.y+=u.vy*c,u.m.position.x+=Math.sin(u.age*1.6+u.ph)*.25*c;let f=1+Math.sin(u.age*5+u.ph)*.04;u.m.scale.set(u.r*f,u.r/f,u.r),u.m.position.y>h.top+.4&&(u.dead=!0,fn(n,u.m))}for(let u=i.length-1;u>=0;u--)i[u].dead&&i.splice(u,1);o>0?(o-=c,n.lookOverride=a,l.mouth=.5*Math.min(1,o*2)):(n.lookOverride=null,l.mouth=0)},stop(){for(let c of i)fn(n,c.m);i.length=0,n.lookOverride=null}};return l}var ru={catch:Oy,jump:ky,bubbles:Wy};var Xy=new Set(["head","face","horns","frill","mane","ears","trunk","beak"]),$l=1.75,au={home:{key:2.8,hemi:.55,sky:16773599,ground:12946274,exposure:.92},kitchen:{key:2.7,hemi:.62,sky:15990777,ground:13083754,exposure:.92},bath:{key:2.6,hemi:.68,sky:15924223,ground:9421788,exposure:.93},bed:{key:2.5,hemi:.55,sky:15986431,ground:10123868,exposure:.92},play:{key:3,hemi:.75,sky:14676479,ground:8372053,exposure:.95},album:{key:3,hemi:.75,sky:14676479,ground:8372053,exposure:.95},dig:{key:3,hemi:.75,sky:15267583,ground:14200945,exposure:.95},studio:{key:2.6,hemi:.7,sky:16774114,ground:15315068,exposure:.95}},E={ready:!1,renderer:null,canvas:null,scene:null,camera:null,L:null,rooms:{},room:null,roomName:"",friend:null,friendKey:"",petHolder:null,contact:null,stateEl:null,stageEl:null,safe:{top:80,bottom:170},layout:"normal",look:null,lookW:new L,clock:{last:0,getDelta(){let n=performance.now(),e=this.last?(n-this.last)/1e3:0;return this.last=n,e}},t:0,anim:{open:0,happy:0,sleep:0,talk:0,jump:0,squash:0,wiggle:0,shake:0,nod:0,tilt:0,excited:0,prev:new Set,blink:0},dpr:1,dprMax:2,frameAvg:16,frameN:0,dark:0,darkTarget:0,blanket:0,blanketTarget:0,curtain:1,curtainTarget:1,hidden:!1,egg:null,onFrame:null,boundsCache:null,boundsAt:0,paused:!1,busyUntil:0,actions:[],effects:[],parts:[],walk:nu(),lookOverride:null,cue:()=>{},game:null};window.DinoEngine=E;E.init=(n,e={})=>{E.canvas=n,E.renderer=Fh(n,{}),E.dprMax=Math.min(e.maxDpr||2,window.devicePixelRatio||1),E.dpr=Math.min(E.dprMax,e.startDpr||E.dprMax),E.renderer.setPixelRatio(E.dpr),E.scene=new Xi,E.scene.environment=Oh(E.renderer),E.scene.environmentIntensity=.45,E.L=Bh(E.scene,{shadowSize:e.shadowSize||2048}),E.L.lamp=new Qi("#ffcf7a",0,4.5,1.6),E.scene.add(E.L.lamp),E.L.night=new Qi("#9aa8ff",0,5.5,2),E.L.night.position.set(.6,2.4,2.2),E.scene.add(E.L.night),E.camera=new tn(36,1,.1,120),E.petHolder=new ce,E.scene.add(E.petHolder);let t=new Q(new Vt(1,1),new Gt({map:ss("#4a2a1a",128),transparent:!0,opacity:.42,depthWrite:!1}));t.rotation.x=-Math.PI/2,t.renderOrder=1,E.contact=t,E.petHolder.add(t),E.resize(),addEventListener("resize",()=>E.resize()),E.ready=!0,E.loop()};E.setSafe=(n,e,t)=>{E.safeTarget={top:n,bottom:e},(!t||E.paused)&&(E.safe={top:n,bottom:e},E.frame())};E.setStateEl=n=>{E.stateEl=n};E.setStageEl=n=>{E.stageEl=n};E.resize=()=>{let n=innerWidth,e=innerHeight;E.renderer.setSize(n,e,!1),E.canvas.style.width=n+"px",E.canvas.style.height=e+"px",E.camera.aspect=n/e,E.frame()};function lu(n){return E.rooms[n]||(E.rooms[n]=Aa[n](),E.rooms[n].group.visible=!1,E.scene.add(E.rooms[n].group)),E.rooms[n]}E.setRoom=n=>{if(n==="album"&&(n="play"),Aa[n]||(n="home"),E.roomName===n)return;E.room&&(E.room.group.visible=!1),E.room=lu(n),E.room.group.visible=!0,E.roomName=n,E.calm();let e=au[n]||au.home;E.L.key.intensity=e.key,E.L.hemi.intensity=e.hemi,E.L.hemi.color.setHex(e.sky),E.L.hemi.groundColor.setHex(e.ground),E.renderer.toneMappingExposure=e.exposure,E.scene.background=E.room.outdoor||E.room.studio?null:new ge(E.room.wall||"#ffe2c2"),E.room.studio&&(E.scene.background=new ge("#ffd9ae")),E.darkTarget=0,E.dark=0,E.blanketTarget=0,E.curtainTarget=1,E.room.setCurtain&&E.room.setCurtain(1),E.frame()};E.warm=(n,e)=>{let t=n.slice(),i=r=>window.requestIdleCallback?requestIdleCallback(r,{timeout:600}):setTimeout(r,60),s=()=>{if(!t.length){e&&e();return}let r=t.shift();try{if(!Aa[r]){i(s);return}let a=lu(r),o=E.renderer.extensions.has("KHR_parallel_shader_compile")?E.renderer.compileAsync(a.group,E.camera,E.scene):E.renderer.compile(a.group,E.camera,E.scene);Promise.resolve(o).catch(()=>{}).then(()=>i(s))}catch{i(s)}};i(s)};E.setPet=(n,e={})=>{let t=n+":"+(e.stage??2)+":"+(e.outfit||"");if(E.friendKey===t&&E.friend)return;if(E.friend&&(E.petHolder.remove(E.friend.root),bs(E.friend.root)),E.friendKey=t,!n){E.friend=null;return}let i=Sa(n,2);Ql(i),ec(i,e.stage??2),ba(i,e.outfit),E.petHolder.add(i.root),E.friend=i,E.calm(),E.boundsCache=null,E.frame()};E.setOutfit=n=>{E.friend&&(ba(E.friend,n),E.friendKey=E.friendKey.replace(/:[^:]*$/,":"+(n||"")))};E.hidePet=n=>{E.hidden=n};function Ql(n){n.root.updateMatrixWorld(!0);let e=new sn().setFromObject(n.root),t=e.max.y,i=e.max.x-e.min.x,s=$l/Math.max(t,i*.85);n.norm=s,n.base=new ce,n.base.add(n.root),n.root.position.x=-((e.max.x+e.min.x)/2)*.55,n.base.scale.setScalar(s),n.width=i*s,n.height=t*s;let r=n.root;n.root=n.base,n.inner=r}function ec(n,e){let t=[.74,.87,1][e],i=[1.2,1.08,1][e];n.inner.scale.setScalar(t),n.head.scale.setScalar(i),n.stage=e}var qy=new Set(["purr","giggle","sneeze","lookback","stomp","dizzy","shakehead"]);E.calm=()=>{E.actions=[],Yd(E),su(E);let n=E.walk;if(n.resolve){let e=n.resolve;n.resolve=null,e()}E.walk=nu()};E.act=(n,e={})=>{let t=E.friend;if(!t||!Bd.includes(n))return;n!=="eat"&&(E.actions=E.actions.filter(s=>s.name!==n)),qy.has(n)&&E.walk.target&&!E.walk.locked&&(E.walk.pause=Math.max(E.walk.pause||0,1.8));let i={name:n,t:0,side:e.side||1,dur:e.dur||0};if(n==="lookback"&&t.tail&&!e.side){let s=new L,r=new L;t.tail.getWorldPosition(s),t.head.getWorldPosition(r),i.side=s.x>=r.x?1:-1}E.actions.push(i)};E.busyActing=()=>E.actions.length>0||!!E.walk.target||E.effects.length>0;E.burstAt=(n,e,t=8,i={})=>{let s=yi(E,e==="nose"?"mouth":e);if(e==="mouth"||e==="nose"){let r=E.friend,a=new L(0,0,1).transformDirection(r.mouthAnchor.matrixWorld);s.addScaledVector(a,.08)}bn(E,n,s,t,i)};E.burstScreen=(n,e,t,i=8,s={})=>{let r=E.screenToWorld(e,t,yi(E,"center").z+.3);r&&bn(E,n,r,i,s)};E.stars=n=>Gd(E,n);E.foamAt=(n,e)=>{let t=E.hit(n,e);return t&&Zd(E,t),!!t};E.popFoam=n=>Jd(E,n);E.clearFoam=()=>su(E);E.screenToWorld=(n,e,t=.3)=>{vr.setFromCamera(new ue(n/innerWidth*2-1,-(e/innerHeight)*2+1),E.camera);let i=new L;return vr.ray.intersectPlane(new xn(new L(0,0,1),-t),i)?i:null};E.feed=(n,e,t)=>{if(!E.friend)return Promise.resolve();let i=t?E.screenToWorld(t.x,t.y,yi(E,"mouth").z+.25):null;return Vd(E,n,e,i)};E.ball=n=>{let e=n?E.screenToWorld(n.x,n.y,yi(E,"head").z+.6):null;Wd(E,e)};E.butterfly=()=>Xd(E);E.setTheme=(n,e)=>{if(!Aa[n])return;let t=lu(n);t.setTheme&&(t.wall=t.setTheme(e),E.room===t&&(E.scene.background=new ge(t.wall)))};E.celebrate=()=>{let n=E.friend;if(!n)return;let e=n.inner.scale.x;bn(E,"spark",yi(E,"head"),16),E.act("stretch"),E.effects.push({age:0,update(t){this.age+=t;let i=Math.min(1,this.age/1.3),s=i<.35?.84+.26*(i/.35):1.1-.1*Math.min(1,(i-.35)/.65)+Math.sin((i-.35)*18)*.03*(1-i);return E.friend!==n?!1:(n.inner.scale.setScalar(e*s),i>=1?(n.inner.scale.setScalar(e),!1):!0)},cancel(){E.friend===n&&n.inner.scale.setScalar(e)}})};E.walkable=()=>E.roomName==="home"||E.roomName==="kitchen";E.walkRange=()=>{let n=E.friend;if(!n||!E.pxPerUnit)return 0;let e=innerWidth/2/E.pxPerUnit;return Math.max(0,e-(n.width||1.4)*n.inner.scale.x*.55-.05)};E.walkTo=(n,e=0,t=1)=>new Promise(i=>{let s=E.walk;if(!E.friend||!E.walkable()){i();return}if(s.resolve){let r=s.resolve;s.resolve=null,r()}s.target={x:n,z:e},s.speed=t,s.resolve=i});E.enter=n=>{let e=E.friend;if(!e||!E.walkable())return Promise.resolve();let t=innerWidth/2/(E.pxPerUnit||200);return E.walk.x=n*Math.min(1.8,t*.8),E.walk.z=-.1,E.walk.yaw=n>0?-Math.PI/2-(e.turn||0):Math.PI/2-(e.turn||0),E.walkTo(0,0,1.3)};E.wander=async()=>{if(!E.friend||!E.walkable()||E.walk.target)return;let n=E.walkRange();if(n<.4){E.act("lookaround");return}let e=Math.random()<.5?-1:1;await E.walkTo(e*n*(.6+Math.random()*.4),-.1-Math.random()*.12,.8),E.walkable()&&(E.act("lookaround"),await new Promise(t=>setTimeout(t,2600)),E.walkable()&&await E.walkTo(0,0,.9))};E.startGame=(n,e={})=>!E.friend||!ru[n]?!1:(E.stopGame(),E.setRoom("play"),E.setLayout("game"),E.calm(),E.game=ru[n](E,e),!0);E.stopGame=()=>{if(E.game){try{E.game.stop()}catch{}E.game=null,E.calm()}};E.gamePointer=(n,e,t)=>{E.game&&E.game.pointer(n,e,t)};E.setLayout=n=>{E.layout!==n&&(E.layout=n,E.frame())};E.setFit=(n,e)=>{E.fit=n?{bottom:n.bottom,h:n.height,worldH:e}:null,E.frame()};E.frame=()=>{if(!E.camera)return;let n=innerWidth,e=innerHeight,t=E.safe.top,i=E.safe.bottom,s=Math.max(120,e-t-i),r=E.layout==="game",a=E.layout==="small"||r,l=Math.min(s*(r||a?.3:.74)/$l,n*(r?.52:a?.4:.92)/($l*1.15));E.roomName==="bath"&&!a&&(l=Math.min(l,n*.98/2.6)),E.roomName==="bed"&&!a&&(l=Math.min(l,n*.98/2.35));let c=E.fit;c&&(l=Math.min(c.h/c.worldH,n*.92/($l*1.15)));let h=E.camera.fov*Math.PI/180,f=e/l/(2*Math.tan(h/2)),m=E.roomName==="bed"?.55:0;E.camera.position.set(0,1.25+m,f),E.camera.lookAt(0,.95+m*.9,0),E.camera.clearViewOffset(),E.camera.updateProjectionMatrix(),E.camera.updateMatrixWorld();let x=E.roomName==="bed"&&!a?.5:0,p=(1-new L(0,x,0).project(E.camera).y)/2*e,d=c?c.bottom-c.h*.03:r?e-Math.max(36,e*.07):e-i-(a?10:Math.max(14,s*.05)),S=p-d;E.camera.setViewOffset(n,e,0,S,n,e),E.camera.updateProjectionMatrix(),E.pxPerUnit=l};function Yy(n){return E.stateEl?E.stateEl.classList.contains(n):!1}var _r=(n,e,t)=>n+(e-n)*t;function Zy(n){kd(E,n)}function Jy(n){let e=E.friend,t=E.stageEl?E.stageEl.classList:null,i=E.hidden||t&&t.contains("gone")||E.egg;if(E.petHolder.visible=!i,!e)return;let s=0,r=0,a=0;E.room&&E.room.petY!=null&&E.roomName!=="play"&&(r=E.room.petY,a=E.room.petZ||0),E.roomName==="bath"&&(r=Math.max(r,1.04-$y(e))),E.roomName==="bed"&&(r-=E.blanket*.12),(E.walkable()||E.game)&&(s+=E.walk.x,a+=E.walk.z,r+=E.walk.y||0),E.petHolder.position.set(s,r,a);let o=(e.width||1.4)*e.inner.scale.x;E.contact.scale.set(o*1.15,.9*e.inner.scale.x,1),E.contact.position.set(0,.006,0),E.contact.visible=E.roomName!=="bath"}function $y(n){if(n._mouthY!=null)return n._mouthY;let e=E.petHolder.position.clone();E.petHolder.position.set(0,0,0),E.petHolder.updateMatrixWorld(!0);let t=new L;return n.mouthAnchor.getWorldPosition(t),E.petHolder.position.copy(e),E.petHolder.updateMatrixWorld(!0),n._mouthY=t.y,t.y}var Jn={keyDay:new ge(16773340),moon:new ge(11122943),sky:new ge,nightSky:new ge(7305432),fillDay:new ge(13624063),nightFill:new ge(5924560),rimDay:new ge(16774888)};E.dark=0;function Ky(n){let e=E.room;if(e){if(e.update&&e.update(E.t),E.dark=_r(E.dark,E.darkTarget,Math.min(1,n*3)),E.roomName==="bed"){let t=au.bed,i=E.dark;E.L.key.intensity=t.key*(1-.9*i),E.L.key.color.lerpColors(Jn.keyDay,Jn.moon,i),E.L.hemi.intensity=t.hemi*(1-.6*i),E.L.hemi.color.lerpColors(Jn.sky.setHex(t.sky),Jn.nightSky,i),E.L.fill.color.lerpColors(Jn.fillDay,Jn.nightFill,i),E.L.fill.intensity=.55*(1-.55*i),E.L.rim.color.lerpColors(Jn.rimDay,Jn.moon,i),E.L.rim.intensity=1.3*(1-.2*i),E.renderer.toneMappingExposure=t.exposure*(1-.3*i),E.scene.environmentIntensity=.45*(1-.75*i),e.lampAt&&(E.L.lamp.position.copy(e.lampAt),E.L.lamp.intensity=3.2*(1-i),e.shadeMat.emissiveIntensity=.9*(1-i)+.05),E.L.night.intensity=2.6*i,E.blanket=_r(E.blanket,E.blanketTarget,Math.min(1,n*3)),e.blanket&&(e.blanket.position.set(0,.62+E.blanket*0,.15-(1-E.blanket)*0),e.blanket.visible=E.blanket>.02,e.blanket.scale.set(1,1,Math.max(.05,E.blanket)),e.blanket.position.z=-.55+.68*.5*(1+E.blanket)-.2)}else E.wasNight&&(E.L.lamp.intensity=0,E.L.night.intensity=0,E.scene.environmentIntensity=.45,E.L.fill.color.copy(Jn.fillDay),E.L.fill.intensity=.55,E.L.key.color.copy(Jn.keyDay),E.L.rim.color.copy(Jn.rimDay),E.L.rim.intensity=1.3);if(E.wasNight=E.roomName==="bed",e.setCurtain){let t=E.curtain;E.curtain=_r(E.curtain,E.curtainTarget,Math.min(1,n*4)),Math.abs(t-E.curtain)>.001&&e.setCurtain(E.curtain)}}}E.setDark=n=>{E.darkTarget=n?1:0};E.setBlanket=n=>{E.blanketTarget=n?1:0};E.setCurtain=n=>{E.curtainTarget=n?0:1};E.loop=()=>{let n=()=>{if(requestAnimationFrame(n),E.paused||document.hidden){E.clock.getDelta();return}let e=Math.min(.06,E.clock.getDelta());E.t+=e;let t=E.safeTarget;if(t&&(Math.abs(t.top-E.safe.top)>.5||Math.abs(t.bottom-E.safe.bottom)>.5)){let r=Math.min(1,e*7);E.safe={top:_r(E.safe.top,t.top,r),bottom:_r(E.safe.bottom,t.bottom,r)},E.frame()}E.game&&E.game.update(e),Jy(e),Zy(e),qd(E,e),Ky(e),E.egg&&E.egg.update(e),E.onFrame&&E.onFrame(e);let i=performance.now();E.renderer.render(E.scene,E.camera);let s=performance.now()-i+e*1e3*.25;i>E.busyUntil&&(E.frameAvg=E.frameAvg*.95+e*1e3*.05),++E.frameN%90===0&&(E.frameAvg>26&&E.dpr>1?(E.dpr=Math.max(1,E.dpr-.25),E.dprMax=E.dpr,E.renderer.setPixelRatio(E.dpr),E.resize()):E.frameAvg<17.5&&E.dpr<E.dprMax&&(E.dpr=Math.min(E.dprMax,E.dpr+.25),E.renderer.setPixelRatio(E.dpr),E.resize()))};requestAnimationFrame(n)};var Ui=new L;function Jl(n,e){return n.updateWorldMatrix(!0,!1),Ui.set(0,0,0),e&&Ui.copy(e),n.localToWorld(Ui),Ui.project(E.camera),{x:(Ui.x+1)/2*innerWidth,y:(1-Ui.y)/2*innerHeight}}E.project=n=>{let e=E.friend;if(!e)return{x:innerWidth/2,y:innerHeight*.45};if(n==="mouth")return Jl(e.mouthAnchor);if(n==="headTop")return e.outfitObj&&e.outfitObj.parent===e.hat?Jl(e.hat,g(0,.5,0)):Jl(e.hat,g(0,.08,0));if(n==="center"){let t=E.bounds();return{x:(t.left+t.right)/2,y:(t.top+t.bottom)/2}}return Jl(e.root)};E.worldToScreen=n=>(Ui.copy(n).project(E.camera),{x:(Ui.x+1)/2*innerWidth,y:(1-Ui.y)/2*innerHeight});E.bounds=()=>{let n=E.friend;if(!n)return{left:0,top:0,right:0,bottom:0};let e=performance.now();if(E.boundsCache&&e-E.boundsAt<120)return E.boundsCache;n.root.updateMatrixWorld(!0);let t=new sn;n.root.traverse(r=>{if(r.isMesh&&r.visible&&r!==E.contact){r.geometry.computeBoundingBox&&!r.geometry.boundingBox&&r.geometry.computeBoundingBox();let a=r.geometry.boundingBox.clone().applyMatrix4(r.matrixWorld);t.union(a)}});let i=[];for(let r of[t.min.x,t.max.x])for(let a of[t.min.y,t.max.y])for(let o of[t.min.z,t.max.z])i.push(E.worldToScreen(g(r,a,o)));let s={left:Math.min(...i.map(r=>r.x)),right:Math.max(...i.map(r=>r.x)),top:Math.min(...i.map(r=>r.y)),bottom:Math.max(...i.map(r=>r.y))};return E.boundsCache=s,E.boundsAt=e,s};var vr=new gs;E.hit=(n,e)=>{let t=E.friend;if(!t||!E.petHolder.visible)return null;vr.setFromCamera(new ue(n/innerWidth*2-1,-(e/innerHeight)*2+1),E.camera);let i=vr.intersectObject(t.root,!0);for(let s of i){let r=s.object,a=null,o=!1;for(;r;)!a&&r.userData.part&&(a=r.userData.part),r===t.head&&(o=!0),r=r.parent;if(s.object.visible)return{part:a||(o?"head":"belly"),head:o||Xy.has(a),point:s.point,object:s.object}}return null};E.lookAt=(n,e)=>{if(n==null){E.look=null;return}vr.setFromCamera(new ue(n/innerWidth*2-1,-(e/innerHeight)*2+1),E.camera);let t=new xn(new L(0,0,1),-.8),i=new L;vr.ray.intersectPlane(t,i)&&(E.look=!0,E.lookW.copy(i))};var Na=.56,Ni=32,ou=.05,jl=n=>{let e=(n*Ni%2+2)%2;return e<1?1-2*e:-1+2*(e-1)};function ep(n,e={}){let t=jy[n]||["#fff5e2","#9edc8a"],i=ql(t[0],t[1],n.length*7),s=new je({map:i.tex,roughness:.35,clearcoat:.6,sheen:.2}),r=new an({color:"#fff3df",roughness:.6,side:Xt}),a=32,o=64,l=(x,_,p)=>{let d=[];for(let w=0;w<=a;w++){let M=x+(_-x)*w/a,C=Math.sin(Math.PI*M)**.62*.42*(1-.12*M);d.push(new ue(Math.max(1e-4,C),M))}let S=new Nn(d,o),T=S.attributes.position,y=S.attributes.uv;for(let w=0;w<=o;w++)for(let M=0;M<=a;M++){let C=w*(a+1)+M;if(y.setY(C,x+(_-x)*M/a),M===p){let v=w/o;T.setY(C,T.getY(C)-jl(v)*ou),y.setY(C,y.getY(C)-jl(v)*ou)}}return S},c=new ce,h=l(0,Na,a),u=new Q(h,s);u.castShadow=!0,c.add(u);let f=new Q(h,r);f.scale.setScalar(.985),u.add(f);let m=new ce;if(m.position.y=Na,!e.noTop){let x=l(Na,1,0);x.translate(0,-Na,0);let _=new Q(x,s);_.castShadow=!0,m.add(_);let p=new Q(x,r);p.scale.setScalar(.985),_.add(p),c.add(m)}return{egg:c,bottom:u,topG:m,paint:i,mat:s}}function Kl(n,e,t){let i=n.g,s=n.canvas.width,r=n.canvas.height,a=ou*r,o=(1-Na)*r;i.strokeStyle="#4a3226",i.lineWidth=5,i.lineJoin="round",i.lineCap="round";for(let l=e;l<t;l++){let c=(l%Ni+Ni)%Ni,h=c*s/Ni,u=h+s/Ni,f=o+jl(c/Ni)*a,m=o+jl((c+1)/Ni)*a;i.beginPath(),i.moveTo(h,f),i.lineTo(u,m),i.stroke()}n.tex.needsUpdate=!0}E.showEgg=(n,e)=>{E.clearEgg();let t=new ce;E.scene.add(t);let i={g:t,taps:0,born:e,sp:n,wob:0,phase:"wait",tt:0};if(e){let s=new Q(new Nn([[0,0],[.5,0],[.62,.08],[.7,.42],[.74,.46],[.7,.48],[.64,.12],[0,.1]].map(([o,l])=>new ue(o,l)),64),new an({map:Ld(),roughness:.85,side:Rt}));s.scale.set(1,1,.8),s.castShadow=!0,s.receiveShadow=!0,t.add(s);let r=new ce;r.position.y=.45,t.add(r);let a=new Q(new St(.68,48,24,0,Math.PI*2,0,Math.PI/2),new je({map:Zn("#ff9ec4","#ffd0e4",10),roughness:.85,sheen:1,sheenColor:new ge("#ffe6f0"),side:Rt}));a.scale.set(1,.5,.82),a.castShadow=!0,r.add(a),Object.assign(i,{blanket:r})}else{let s=new Q(new Tt(.52,.2,20,48),new an({map:Pd(),roughness:1}));s.rotation.x=Math.PI/2,s.scale.set(1,1,.75),s.position.y=.14,s.castShadow=!0,s.receiveShadow=!0,t.add(s);let r=qt(3);for(let o=0;o<40;o++){let l=r()*Math.PI*2,c=new Q(new ht(.008,.008,.35,5),new an({color:r()<.5?"#e5bd75":"#b88a45",roughness:1}));c.position.set(Math.cos(l)*(.5+r()*.2),.2+r()*.12,Math.sin(l)*(.5+r()*.2)),c.rotation.set(r()*3,r()*3,r()*3),t.add(c)}let a=ep(n);a.egg.position.y=.12,t.add(a.egg),Object.assign(i,a)}i.update=s=>{if(i.tt+=s,i.phase==="wait"){i.wob=Math.max(0,i.wob-s*3);let r=Math.sin(i.tt*2.2)>.85?Math.sin(i.tt*18)*.05:0,a=Math.sin(i.tt*30)*.12*i.wob+r;i.egg&&(i.egg.rotation.z=a,i.egg.scale.set(1+i.wob*.05,1-i.wob*.06,1+i.wob*.05)),i.blanket&&(i.blanket.position.y=.45+Math.max(0,Math.sin(i.tt*3))*.03+i.wob*.06,i.blanket.rotation.z=a*.5)}else if(i.phase==="open"){let r=Math.min(1,(i.tt-i.t0)/.9);if(i.topG&&(i.topG.position.set(r*.6,.56+r*1.4-r*r*1,r*.3),i.topG.rotation.z=-r*2.2,i.topG.visible=r<1,i.bottom.scale.setScalar(1-Math.max(0,r-.4)*1.4),i.bottom.visible=r<.98),i.blanket&&(i.blanket.position.set(-r*.9,.45+Math.sin(r*Math.PI)*.8,.2*r),i.blanket.rotation.z=r*1.6,i.blanket.visible=r<1),i.pet){let a=Math.min(1,r*1.4),o=a<1?a*1.12:1+Math.sin((r-.71)*10)*.04*(1-r);i.pet.scale.setScalar(Math.max(.01,o))}if(r>=1&&i.done){let a=i.done;i.done=null,a()}}i.rig&&(i.mt=_r(i.mt||0,Yy("talk")?1:0,Math.min(1,s*22)),i.rig.mouth.set(i.mt),i.rig.head.rotation.z=Math.sin(i.tt*1.6)*.06,i.phase==="open"&&i.tt-i.t0>1&&(i.pet.position.y=(i.born?.15:.1)+Math.abs(Math.sin(i.tt*2.4))*.03))},E.egg=i,E.petHolder.visible=!1};E.crack=()=>{let n=E.egg;!n||n.phase!=="wait"||(n.taps++,n.wob=1,n.paint&&(n.taps===1?Kl(n.paint,-5,5):(Kl(n.paint,-11,-5),Kl(n.paint,5,11))))};E.hatch=()=>new Promise(n=>{let e=E.egg;if(!e){n();return}e.phase="open",e.t0=e.tt;let t=Sa(e.sp,2);Ql(t),ec(t,0);for(let s of t.eyes)s.set(1,1,0);let i=new ce;i.add(t.root),i.position.y=e.born?.15:.1,i.scale.setScalar(.01),e.g.add(i),e.pet=i,e.rig=t,e.done=n});E.clearEgg=()=>{E.egg&&(E.scene.remove(E.egg.g),bs(E.egg.g),E.egg=null)};var jy={trex:["#fff5e2","#7cc85a"],trike:["#fff5e2","#f2a33a"],stego:["#fff5e2","#45b0a5"],brachio:["#fff5e2","#9787ef"],anky:["#fff5e2","#5b8def"],penguin:["#f4f8ff","#9fb4d8"]},$n=null,ws=null,as=null,Qy=null,yr=new Map;function ev(){if($n)return;let n=document.createElement("canvas");$n=Fh(n,{alpha:!0,preserve:!0}),$n.setPixelRatio(1),ws=new Xi,ws.environment=Oh($n),ws.environmentIntensity=.5,Qy=Bh(ws,{shadowSize:1024,hemi:.75}),as=new tn(30,1,.1,50)}function cu(n,e,t,i={}){if(ev(),$n.getContext().isContextLost())return bs(n),"";let s=i.crop?1.5:1,r=Math.round(e*s),a=Math.round(t*s);$n.setSize(r,a,!1),ws.add(n),n.updateMatrixWorld(!0);let o=new sn().setFromObject(n),l=o.getSize(new L),c=o.getCenter(new L);as.aspect=r/a;let h=as.fov*Math.PI/180,u=l.y/(2*Math.tan(h/2)),f=l.x/(2*Math.tan(h/2)*as.aspect),m=Math.max(u,f)*(i.margin??1.18)+l.z/2,x=(i.dir||g(0,.18,1)).normalize();as.position.copy(c).addScaledVector(x,m),as.lookAt(c),as.updateProjectionMatrix(),$n.render(ws,as);let _=i.crop?tv(r,a,e,t,i.pad??.06):$n.domElement.toDataURL("image/png");return ws.remove(n),bs(n),_}function tv(n,e,t,i,s){let r=$n.getContext(),a=new Uint8Array(n*e*4);r.readPixels(0,0,n,e,r.RGBA,r.UNSIGNED_BYTE,a);let o=n,l=-1,c=e,h=-1;for(let y=0;y<e;y++)for(let w=0;w<n;w++)a[(y*n+w)*4+3]>24&&(w<o&&(o=w),w>l&&(l=w),y<c&&(c=y),y>h&&(h=y));if(l<0)return $n.domElement.toDataURL("image/png");let u=o,f=e-1-h,m=l-o+1,x=h-c+1,_=document.createElement("canvas");_.width=t,_.height=i;let p=Math.min(t*(1-2*s)/m,i*(1-2*s)/x),d=m*p,S=x*p,T=_.getContext("2d");return T.imageSmoothingQuality="high",T.drawImage($n.domElement,u,f,m,x,(t-d)/2,(i-S)/2,d,S),_.toDataURL("image/png")}E.snapshot=(n,e={})=>{let t=[n,e.stage??2,e.outfit||"",e.pose||"",e.w||360].join(":");if(yr.has(t))return yr.get(t);let i=Sa(n,2);if(Ql(i),ec(i,e.stage??2),ba(i,e.outfit),e.pose==="happy")for(let c of i.eyes)c.set(1,1,0);if(e.pose==="sleep"){for(let c of i.eyes)c.set(0,0,1);i.head.rotation.x=.2}e.pose==="talk"&&i.mouth.set(.8);let s=new ce;s.add(i.root);let r=new Q(new Vt(1,1),new Gt({map:ss("#4a2a1a",128),transparent:!0,opacity:.35,depthWrite:!1}));r.rotation.x=-Math.PI/2,r.scale.set((i.width||1.4)*1.1*i.inner.scale.x,.8*i.inner.scale.x,1),r.position.y=.004,s.add(r);let a=e.w||360,o=Math.round(a*(e.ratio??1.08)),l=cu(s,a,o,{margin:e.margin??1.1});return l&&yr.set(t,l),l};E.icon=(n,e=160)=>{let t="icon:"+n+":"+e;if(yr.has(t))return yr.get(t);let i=Es(n);if(!i)return"";let s=cu(i,e,e,{margin:1.3,dir:i.userData.dir||g(.35,.5,1),crop:!0});return s&&yr.set(t,s),s};E.hatchling=(n,e=1024,t={})=>{let i=new ce,s=ep(n,{noTop:!0}),r=t.eggScale??1.5;s.egg.scale.setScalar(r),s.egg.position.y=.02,i.add(s.egg),Kl(s.paint,0,Ni);let a=Sa(n,2);Ql(a),ec(a,0),ba(a,t.outfit);for(let l of a.eyes)l.set(1,t.pose==="happy"?1:0,0);return t.pose==="talk"&&a.mouth.set(.8),a.root.position.y=.12*r,t.turn!=null&&(a.inner.rotation.y=t.turn),i.add(a.root),cu(i,e,Math.round(e*(t.ratio??1)),{margin:t.margin??1.02,dir:t.dir||g(0,.16,1)})};E.friends=Td;var KS=E;})();
