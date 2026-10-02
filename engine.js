/*! Engine for My Dino. Includes three.js (https://threejs.org), Copyright 2010-2025 Three.js Authors, MIT License: https://github.com/mrdoob/three.js/blob/dev/LICENSE */
(()=>{var ju=0,Gl=1,Qu=2;var gs=1,ef=2,ir=3,Rn=0,Xt=1,Rt=2,hi=0,sr=1,Vl=2,Wl=3,Xl=4,tf=5;var xs=100,nf=101,sf=102,rf=103,af=104,of=200,cf=201,lf=202,hf=203,ql=204,Yl=205,uf=206,ff=207,df=208,pf=209,mf=210,gf=211,xf=212,_f=213,yf=214,ho=0,uo=1,fo=2,Xs=3,po=4,mo=5,go=6,xo=7,Yo=0,vf=1,Mf=2,Gn=0,Zl=1,Jl=2,$l=3,Kl=4,jl=5,Ql=6,aa=7;var eh=300,Qi=301,_s=302,Zo=303,Jo=304,oa=306,Vi=1e3,ei=1001,_o=1002,nn=1003,Sf=1004;var ca=1005;var rn=1006,$o=1007;var es=1008;var yn=1009,th=1010,nh=1011,rr=1012,Ko=1013,Vn=1014,Nn=1015,Wn=1016,jo=1017,Qo=1018,ar=1020,ih=35902,sh=35899,rh=1021,ah=1022,Un=1023,ni=1026,ts=1027,ec=1028,tc=1029,ns=1030,nc=1031;var ic=1033,la=33776,ha=33777,ua=33778,fa=33779,sc=35840,rc=35841,ac=35842,oc=35843,cc=36196,lc=37492,hc=37496,uc=37488,fc=37489,da=37490,dc=37491,pc=37808,mc=37809,gc=37810,xc=37811,_c=37812,yc=37813,vc=37814,Mc=37815,Sc=37816,bc=37817,Ec=37818,wc=37819,Tc=37820,Ac=37821,Rc=36492,Cc=36494,Ic=36495,Pc=36283,Lc=36284,pa=36285,Dc=36286;var Pr=2300,yo=2301,co=2302,Cl=2303,Il=2400,Pl=2401,Ll=2402;var bf=3200;var ma=0,Ef=1,Xn="",$t="srgb",Lr="srgb-linear",Dr="linear",Mt="srgb";var lo=7680;var wf=519,Tf=512,Af=513,Rf=514,Nc=515,Cf=516,If=517,Uc=518,Pf=519,oh=35044;var ch="300 es",kn=2e3,qs=2001;function rp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ap(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Nr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Lf(){let n=Nr("canvas");return n.style.display="block",n}var yu={},Ys=null;function Ur(...n){let e="THREE."+n.shift();Ys?Ys("log",e,...n):console.log(e,...n)}function Df(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function qe(...n){n=Df(n);let e="THREE."+n.shift();if(Ys)Ys("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Xe(...n){n=Df(n);let e="THREE."+n.shift();if(Ys)Ys("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function us(...n){let e=n.join(" ");e in yu||(yu[e]=!0,qe(...n))}function Nf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Uf={[ho]:uo,[fo]:go,[po]:xo,[Xs]:mo,[uo]:ho,[go]:fo,[xo]:po,[mo]:Xs},ii=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var nl=Math.PI/180,vo=180/Math.PI;function wi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[t&63|128]+ln[t>>8&255]+"-"+ln[t>>16&255]+ln[t>>24&255]+ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]).toLowerCase()}function it(n,e,t){return Math.max(e,Math.min(t,n))}function op(n,e){return(n%e+e)%e}function il(n,e,t){return(1-t)*n+t*e}function Qn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function wt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ph=class ph{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ph.prototype.isVector2=!0;var ue=ph,si=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3],f=r[a+0],m=r[a+1],x=r[a+2],_=r[a+3];if(u!==_||c!==f||l!==m||h!==x){let d=c*f+l*m+h*x+u*_;d<0&&(f=-f,m=-m,x=-x,_=-_,d=-d);let p=1-o;if(d<.9995){let y=Math.acos(d),T=Math.sin(y);p=Math.sin(p*y)/T,o=Math.sin(o*y)/T,c=c*p+f*o,l=l*p+m*o,h=h*p+x*o,u=u*p+_*o}else{c=c*p+f*o,l=l*p+m*o,h=h*p+x*o,u=u*p+_*o;let y=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=y,l*=y,h*=y,u*=y}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[a],f=r[a+1],m=r[a+2],x=r[a+3];return e[t]=o*x+h*u+c*m-l*f,e[t+1]=c*x+h*f+l*u-o*m,e[t+2]=l*x+h*m+o*f-c*u,e[t+3]=h*x-o*u-c*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(s/2),u=o(r/2),f=c(i/2),m=c(s/2),x=c(r/2);switch(a){case"XYZ":this._x=f*h*u+l*m*x,this._y=l*m*u-f*h*x,this._z=l*h*x+f*m*u,this._w=l*h*u-f*m*x;break;case"YXZ":this._x=f*h*u+l*m*x,this._y=l*m*u-f*h*x,this._z=l*h*x-f*m*u,this._w=l*h*u+f*m*x;break;case"ZXY":this._x=f*h*u-l*m*x,this._y=l*m*u+f*h*x,this._z=l*h*x+f*m*u,this._w=l*h*u-f*m*x;break;case"ZYX":this._x=f*h*u-l*m*x,this._y=l*m*u+f*h*x,this._z=l*h*x-f*m*u,this._w=l*h*u+f*m*x;break;case"YZX":this._x=f*h*u+l*m*x,this._y=l*m*u+f*h*x,this._z=l*h*x-f*m*u,this._w=l*h*u-f*m*x;break;case"XZY":this._x=f*h*u-l*m*x,this._y=l*m*u-f*h*x,this._z=l*h*x+f*m*u,this._w=l*h*u+f*m*x;break;default:qe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=i+o+u;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(i>o&&i>u){let m=2*Math.sqrt(1+i-o-u);this._w=(h-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>u){let m=2*Math.sqrt(1+o-i-u);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+u-i-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-i*l,this._z=r*h+a*l+i*c-s*o,this._w=a*h-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},mh=class mh{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*i),h=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+c*l+a*u-o*h,this.y=i+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return sl.copy(this).projectOnVector(e),this.sub(sl)}reflect(e){return this.sub(sl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};mh.prototype.isVector3=!0;var L=mh,sl=new L,vu=new si,gh=class gh{constructor(e,t,i,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l)}set(e,t,i,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],u=i[7],f=i[2],m=i[5],x=i[8],_=s[0],d=s[3],p=s[6],y=s[1],T=s[4],v=s[7],E=s[2],w=s[5],C=s[8];return r[0]=a*_+o*y+c*E,r[3]=a*d+o*T+c*w,r[6]=a*p+o*v+c*C,r[1]=l*_+h*y+u*E,r[4]=l*d+h*T+u*w,r[7]=l*p+h*v+u*C,r[2]=f*_+m*y+x*E,r[5]=f*d+m*T+x*w,r[8]=f*p+m*v+x*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-i*r*h+i*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,f=o*c-h*r,m=l*r-a*c,x=t*u+i*f+s*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/x;return e[0]=u*_,e[1]=(s*l-h*i)*_,e[2]=(o*i-s*a)*_,e[3]=f*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-o*t)*_,e[6]=m*_,e[7]=(i*c-l*t)*_,e[8]=(a*t-i*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return us("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(rl.makeScale(e,t)),this}rotate(e){return us("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(rl.makeRotation(-e)),this}translate(e,t){return us("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(rl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};gh.prototype.isMatrix3=!0;var $e=gh,rl=new $e,Mu=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Su=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cp(){let n={enabled:!0,workingColorSpace:Lr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Mt&&(s.r=Ti(s.r),s.g=Ti(s.g),s.b=Ti(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Mt&&(s.r=Ws(s.r),s.g=Ws(s.g),s.b=Ws(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Xn?Dr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return us("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return us("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Lr]:{primaries:e,whitePoint:i,transfer:Dr,toXYZ:Mu,fromXYZ:Su,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:$t},outputColorSpaceConfig:{drawingBufferColorSpace:$t}},[$t]:{primaries:e,whitePoint:i,transfer:Mt,toXYZ:Mu,fromXYZ:Su,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:$t}}}),n}var lt=cp();function Ti(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ws(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ts,Mo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ts===void 0&&(Ts=Nr("canvas")),Ts.width=e.width,Ts.height=e.height;let s=Ts.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ts}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Nr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ti(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ti(t[i]/255)*255):t[i]=Ti(t[i]);return{data:t,width:e.width,height:e.height}}else return qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},lp=0,Zs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=wi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(al(s[a].image)):r.push(al(s[a]))}else r=al(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function al(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Mo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(qe("Texture: Unable to serialize Texture."),{})}var hp=0,ol=new L,pn=class n extends ii{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=ei,s=ei,r=rn,a=es,o=Un,c=yn,l=n.DEFAULT_ANISOTROPY,h=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=wi(),this.name="",this.source=new Zs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ol).x}get height(){return this.source.getSize(ol).y}get depth(){return this.source.getSize(ol).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){qe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==eh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vi:e.x=e.x-Math.floor(e.x);break;case ei:e.x=e.x<0?0:1;break;case _o:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vi:e.y=e.y-Math.floor(e.y);break;case ei:e.y=e.y<0?0:1;break;case _o:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=eh;pn.DEFAULT_ANISOTROPY=1;var xh=class xh{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],m=c[5],x=c[9],_=c[2],d=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(x-d)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(x+d)<.1&&Math.abs(l+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(l+1)/2,v=(m+1)/2,E=(p+1)/2,w=(h+f)/4,C=(u+_)/4,M=(x+d)/4;return T>v&&T>E?T<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(T),s=w/i,r=C/i):v>E?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=w/s,r=M/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=C/r,s=M/r),this.set(i,s,r,t),this}let y=Math.sqrt((d-x)*(d-x)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(d-x)/y,this.y=(u-_)/y,this.z=(f-h)/y,this.w=Math.acos((l+m+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};xh.prototype.isVector4=!0;var Dt=xh,So=class extends ii{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new pn(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Zs(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},_n=class extends So{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Fr=class extends pn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var bo=class extends pn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var qo=class qo{constructor(e,t,i,s,r,a,o,c,l,h,u,f,m,x,_,d){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l,h,u,f,m,x,_,d)}set(e,t,i,s,r,a,o,c,l,h,u,f,m,x,_,d){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=m,p[7]=x,p[11]=_,p[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qo().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/As.setFromMatrixColumn(e,0).length(),r=1/As.setFromMatrixColumn(e,1).length(),a=1/As.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=a*h,m=a*u,x=o*h,_=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=m+x*l,t[5]=f-_*l,t[9]=-o*c,t[2]=_-f*l,t[6]=x+m*l,t[10]=a*c}else if(e.order==="YXZ"){let f=c*h,m=c*u,x=l*h,_=l*u;t[0]=f+_*o,t[4]=x*o-m,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=m*o-x,t[6]=_+f*o,t[10]=a*c}else if(e.order==="ZXY"){let f=c*h,m=c*u,x=l*h,_=l*u;t[0]=f-_*o,t[4]=-a*u,t[8]=x+m*o,t[1]=m+x*o,t[5]=a*h,t[9]=_-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let f=a*h,m=a*u,x=o*h,_=o*u;t[0]=c*h,t[4]=x*l-m,t[8]=f*l+_,t[1]=c*u,t[5]=_*l+f,t[9]=m*l-x,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let f=a*c,m=a*l,x=o*c,_=o*l;t[0]=c*h,t[4]=_-f*u,t[8]=x*u+m,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=m*u+x,t[10]=f-_*u}else if(e.order==="XZY"){let f=a*c,m=a*l,x=o*c,_=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+_,t[5]=a*h,t[9]=m*u-x,t[2]=x*u-m,t[6]=o*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(up,e,fp)}lookAt(e,t,i){let s=this.elements;return bn.subVectors(e,t),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),Bi.crossVectors(i,bn),Bi.lengthSq()===0&&(Math.abs(i.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),Bi.crossVectors(i,bn)),Bi.normalize(),Oa.crossVectors(bn,Bi),s[0]=Bi.x,s[4]=Oa.x,s[8]=bn.x,s[1]=Bi.y,s[5]=Oa.y,s[9]=bn.y,s[2]=Bi.z,s[6]=Oa.z,s[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],u=i[5],f=i[9],m=i[13],x=i[2],_=i[6],d=i[10],p=i[14],y=i[3],T=i[7],v=i[11],E=i[15],w=s[0],C=s[4],M=s[8],R=s[12],P=s[1],U=s[5],D=s[9],H=s[13],N=s[2],k=s[6],O=s[10],V=s[14],ee=s[3],J=s[7],ie=s[11],ce=s[15];return r[0]=a*w+o*P+c*N+l*ee,r[4]=a*C+o*U+c*k+l*J,r[8]=a*M+o*D+c*O+l*ie,r[12]=a*R+o*H+c*V+l*ce,r[1]=h*w+u*P+f*N+m*ee,r[5]=h*C+u*U+f*k+m*J,r[9]=h*M+u*D+f*O+m*ie,r[13]=h*R+u*H+f*V+m*ce,r[2]=x*w+_*P+d*N+p*ee,r[6]=x*C+_*U+d*k+p*J,r[10]=x*M+_*D+d*O+p*ie,r[14]=x*R+_*H+d*V+p*ce,r[3]=y*w+T*P+v*N+E*ee,r[7]=y*C+T*U+v*k+E*J,r[11]=y*M+T*D+v*O+E*ie,r[15]=y*R+T*H+v*V+E*ce,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],m=e[14],x=e[3],_=e[7],d=e[11],p=e[15],y=c*m-l*f,T=o*m-l*u,v=o*f-c*u,E=a*m-l*h,w=a*f-c*h,C=a*u-o*h;return t*(_*y-d*T+p*v)-i*(x*y-d*E+p*w)+s*(x*T-_*E+p*C)-r*(x*v-_*w+d*C)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-i*(r*h-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],m=e[11],x=e[12],_=e[13],d=e[14],p=e[15],y=t*o-i*a,T=t*c-s*a,v=t*l-r*a,E=i*c-s*o,w=i*l-r*o,C=s*l-r*c,M=h*_-u*x,R=h*d-f*x,P=h*p-m*x,U=u*d-f*_,D=u*p-m*_,H=f*p-m*d,N=y*H-T*D+v*U+E*P-w*R+C*M;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/N;return e[0]=(o*H-c*D+l*U)*k,e[1]=(s*D-i*H-r*U)*k,e[2]=(_*C-d*w+p*E)*k,e[3]=(f*w-u*C-m*E)*k,e[4]=(c*P-a*H-l*R)*k,e[5]=(t*H-s*P+r*R)*k,e[6]=(d*v-x*C-p*T)*k,e[7]=(h*C-f*v+m*T)*k,e[8]=(a*D-o*P+l*M)*k,e[9]=(i*P-t*D-r*M)*k,e[10]=(x*w-_*v+p*y)*k,e[11]=(u*v-h*w-m*y)*k,e[12]=(o*R-a*U-c*M)*k,e[13]=(t*U-i*R+s*M)*k,e[14]=(_*T-x*E-d*y)*k,e[15]=(h*E-u*T+f*y)*k,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+i,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,f=r*l,m=r*h,x=r*u,_=a*h,d=a*u,p=o*u,y=c*l,T=c*h,v=c*u,E=i.x,w=i.y,C=i.z;return s[0]=(1-(_+p))*E,s[1]=(m+v)*E,s[2]=(x-T)*E,s[3]=0,s[4]=(m-v)*w,s[5]=(1-(f+p))*w,s[6]=(d+y)*w,s[7]=0,s[8]=(x+T)*C,s[9]=(d-y)*C,s[10]=(1-(f+_))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=As.set(s[0],s[1],s[2]).length(),o=As.set(s[4],s[5],s[6]).length(),c=As.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Bn.copy(this);let l=1/a,h=1/o,u=1/c;return Bn.elements[0]*=l,Bn.elements[1]*=l,Bn.elements[2]*=l,Bn.elements[4]*=h,Bn.elements[5]*=h,Bn.elements[6]*=h,Bn.elements[8]*=u,Bn.elements[9]*=u,Bn.elements[10]*=u,t.setFromRotationMatrix(Bn),i.x=a,i.y=o,i.z=c,this}makePerspective(e,t,i,s,r,a,o=kn,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(i-s),f=(t+e)/(t-e),m=(i+s)/(i-s),x,_;if(c)x=r/(a-r),_=a*r/(a-r);else if(o===kn)x=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===qs)x=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=kn,c=!1){let l=this.elements,h=2/(t-e),u=2/(i-s),f=-(t+e)/(t-e),m=-(i+s)/(i-s),x,_;if(c)x=1/(a-r),_=a/(a-r);else if(o===kn)x=-2/(a-r),_=-(a+r)/(a-r);else if(o===qs)x=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=x,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};qo.prototype.isMatrix4=!0;var mt=qo,As=new L,Bn=new mt,up=new L(0,0,0),fp=new L(1,1,1),Bi=new L,Oa=new L,bn=new L,bu=new mt,Eu=new si,ri=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-it(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(it(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(it(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return bu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Eu.setFromEuler(this),this.setFromQuaternion(Eu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ri.DEFAULT_ORDER="XYZ";var Js=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},dp=0,wu=new L,Rs=new si,yi=new mt,Ba=new L,yr=new L,pp=new L,mp=new si,Tu=new L(1,0,0),Au=new L(0,1,0),Ru=new L(0,0,1),Cu={type:"added"},gp={type:"removed"},Cs={type:"childadded",child:null},cl={type:"childremoved",child:null},Kt=class n extends ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new L,t=new ri,i=new si,s=new L(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new mt},normalMatrix:{value:new $e}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Js,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Rs.setFromAxisAngle(e,t),this.quaternion.multiply(Rs),this}rotateOnWorldAxis(e,t){return Rs.setFromAxisAngle(e,t),this.quaternion.premultiply(Rs),this}rotateX(e){return this.rotateOnAxis(Tu,e)}rotateY(e){return this.rotateOnAxis(Au,e)}rotateZ(e){return this.rotateOnAxis(Ru,e)}translateOnAxis(e,t){return wu.copy(e).applyQuaternion(this.quaternion),this.position.add(wu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tu,e)}translateY(e){return this.translateOnAxis(Au,e)}translateZ(e){return this.translateOnAxis(Ru,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ba.copy(e):Ba.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(yr,Ba,this.up):yi.lookAt(Ba,yr,this.up),this.quaternion.setFromRotationMatrix(yi),s&&(yi.extractRotation(s.matrixWorld),Rs.setFromRotationMatrix(yi),this.quaternion.premultiply(Rs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Xe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cu),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gp),cl.child=e,this.dispatchEvent(cl),cl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cu),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,e,pp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,mp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=s,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Kt.DEFAULT_UP=new L(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var le=class extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}},xp={type:"move"},$s=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new le,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new le,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new le,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let _ of e.hand.values()){let d=t.getJointPose(_,i),p=this._getHandJoint(l,_);d!==null&&(p.matrix.fromArray(d.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=d.radius),p.visible=d!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,x=.005;l.inputState.pinching&&f>m+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(xp)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new le;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Ff={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},Ha={h:0,s:0,l:0};function ll(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ge=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,lt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=lt.workingColorSpace){if(e=op(e,1),t=it(t,0,1),i=it(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=ll(a,r,e+1/3),this.g=ll(a,r,e),this.b=ll(a,r,e-1/3)}return lt.colorSpaceToWorking(this,s),this}setStyle(e,t=$t){function i(r){r!==void 0&&parseFloat(r)<1&&qe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:qe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$t){let i=Ff[e.toLowerCase()];return i!==void 0?this.setHex(i,t):qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}copyLinearToSRGB(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$t){return lt.workingToColorSpace(hn.copy(this),e),Math.round(it(hn.r*255,0,255))*65536+Math.round(it(hn.g*255,0,255))*256+Math.round(it(hn.b*255,0,255))}getHexString(e=$t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(hn.copy(this),t);let i=hn.r,s=hn.g,r=hn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=$t){lt.workingToColorSpace(hn.copy(this),e);let t=hn.r,i=hn.g,s=hn.b;return e!==$t?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Hi),this.setHSL(Hi.h+e,Hi.s+t,Hi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Hi),e.getHSL(Ha);let i=il(Hi.h,Ha.h,t),s=il(Hi.s,Ha.s,t),r=il(Hi.l,Ha.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new ge;ge.NAMES=Ff;var Wi=class extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ri,this.environmentIntensity=1,this.environmentRotation=new ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Hn=new L,vi=new L,hl=new L,Mi=new L,Is=new L,Ps=new L,Iu=new L,ul=new L,fl=new L,dl=new L,pl=new Dt,ml=new Dt,gl=new Dt,Ei=class n{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Hn.subVectors(e,t),s.cross(Hn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Hn.subVectors(s,t),vi.subVectors(i,t),hl.subVectors(e,t);let a=Hn.dot(Hn),o=Hn.dot(vi),c=Hn.dot(hl),l=vi.dot(vi),h=vi.dot(hl),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,m=(l*c-o*h)*f,x=(a*h-o*c)*f;return r.set(1-m-x,x,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(e,t,i,s,r,a,o,c){return this.getBarycoord(e,t,i,s,Mi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Mi.x),c.addScaledVector(a,Mi.y),c.addScaledVector(o,Mi.z),c)}static getInterpolatedAttribute(e,t,i,s,r,a){return pl.setScalar(0),ml.setScalar(0),gl.setScalar(0),pl.fromBufferAttribute(e,t),ml.fromBufferAttribute(e,i),gl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(pl,r.x),a.addScaledVector(ml,r.y),a.addScaledVector(gl,r.z),a}static isFrontFacing(e,t,i,s){return Hn.subVectors(i,t),vi.subVectors(e,t),Hn.cross(vi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),Hn.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Is.subVectors(s,i),Ps.subVectors(r,i),ul.subVectors(e,i);let c=Is.dot(ul),l=Ps.dot(ul);if(c<=0&&l<=0)return t.copy(i);fl.subVectors(e,s);let h=Is.dot(fl),u=Ps.dot(fl);if(h>=0&&u<=h)return t.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(i).addScaledVector(Is,a);dl.subVectors(e,r);let m=Is.dot(dl),x=Ps.dot(dl);if(x>=0&&m<=x)return t.copy(r);let _=m*l-c*x;if(_<=0&&l>=0&&x<=0)return o=l/(l-x),t.copy(i).addScaledVector(Ps,o);let d=h*x-m*u;if(d<=0&&u-h>=0&&m-x>=0)return Iu.subVectors(r,s),o=(u-h)/(u-h+(m-x)),t.copy(s).addScaledVector(Iu,o);let p=1/(d+_+f);return a=_*p,o=f*p,t.copy(i).addScaledVector(Is,a).addScaledVector(Ps,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},sn=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,zn):zn.fromBufferAttribute(r,a),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),za.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),za.copy(i.boundingBox)),za.applyMatrix4(e.matrixWorld),this.union(za)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vr),ka.subVectors(this.max,vr),Ls.subVectors(e.a,vr),Ds.subVectors(e.b,vr),Ns.subVectors(e.c,vr),zi.subVectors(Ds,Ls),ki.subVectors(Ns,Ds),os.subVectors(Ls,Ns);let t=[0,-zi.z,zi.y,0,-ki.z,ki.y,0,-os.z,os.y,zi.z,0,-zi.x,ki.z,0,-ki.x,os.z,0,-os.x,-zi.y,zi.x,0,-ki.y,ki.x,0,-os.y,os.x,0];return!xl(t,Ls,Ds,Ns,ka)||(t=[1,0,0,0,1,0,0,0,1],!xl(t,Ls,Ds,Ns,ka))?!1:(Ga.crossVectors(zi,ki),t=[Ga.x,Ga.y,Ga.z],xl(t,Ls,Ds,Ns,ka))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Si=[new L,new L,new L,new L,new L,new L,new L,new L],zn=new L,za=new sn,Ls=new L,Ds=new L,Ns=new L,zi=new L,ki=new L,os=new L,vr=new L,ka=new L,Ga=new L,cs=new L;function xl(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){cs.fromArray(n,r);let o=s.x*Math.abs(cs.x)+s.y*Math.abs(cs.y)+s.z*Math.abs(cs.z),c=e.dot(cs),l=t.dot(cs),h=i.dot(cs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Zt=new L,Va=new ue,_p=0,xn=class extends ii{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_p++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=oh,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Va.fromBufferAttribute(this,t),Va.applyMatrix3(e),this.setXY(t,Va.x,Va.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Qn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=wt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),s=wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),s=wt(s,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Or=class extends xn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Br=class extends xn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var st=class extends xn{constructor(e,t,i){super(new Float32Array(e),t,i)}},yp=new sn,Mr=new L,_l=new L,Xi=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):yp.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Mr.subVectors(e,this.center);let t=Mr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Mr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_l.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Mr.copy(e.center).add(_l)),this.expandByPoint(Mr.copy(e.center).sub(_l))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},vp=0,Pn=new mt,yl=new Kt,Us=new L,En=new sn,Sr=new sn,en=new L,Ft=class n extends ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=wi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rp(e)?Br:Or)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new $e().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,t,i){return Pn.makeTranslation(e,t,i),this.applyMatrix4(Pn),this}scale(e,t,i){return Pn.makeScale(e,t,i),this.applyMatrix4(Pn),this}lookAt(e){return yl.lookAt(e),yl.updateMatrix(),this.applyMatrix4(yl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new st(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];En.setFromBufferAttribute(r),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Sr.setFromBufferAttribute(o),this.morphTargetsRelative?(en.addVectors(En.min,Sr.min),En.expandByPoint(en),en.addVectors(En.max,Sr.max),En.expandByPoint(en)):(En.expandByPoint(Sr.min),En.expandByPoint(Sr.max))}En.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)en.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(en));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)en.fromBufferAttribute(o,l),c&&(Us.fromBufferAttribute(e,l),en.add(Us)),s=Math.max(s,i.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new xn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let M=0;M<i.count;M++)o[M]=new L,c[M]=new L;let l=new L,h=new L,u=new L,f=new ue,m=new ue,x=new ue,_=new L,d=new L;function p(M,R,P){l.fromBufferAttribute(i,M),h.fromBufferAttribute(i,R),u.fromBufferAttribute(i,P),f.fromBufferAttribute(r,M),m.fromBufferAttribute(r,R),x.fromBufferAttribute(r,P),h.sub(l),u.sub(l),m.sub(f),x.sub(f);let U=1/(m.x*x.y-x.x*m.y);isFinite(U)&&(_.copy(h).multiplyScalar(x.y).addScaledVector(u,-m.y).multiplyScalar(U),d.copy(u).multiplyScalar(m.x).addScaledVector(h,-x.x).multiplyScalar(U),o[M].add(_),o[R].add(_),o[P].add(_),c[M].add(d),c[R].add(d),c[P].add(d))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let M=0,R=y.length;M<R;++M){let P=y[M],U=P.start,D=P.count;for(let H=U,N=U+D;H<N;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let T=new L,v=new L,E=new L,w=new L;function C(M){E.fromBufferAttribute(s,M),w.copy(E);let R=o[M];T.copy(R),T.sub(E.multiplyScalar(E.dot(R))).normalize(),v.crossVectors(w,R);let U=v.dot(c[M])<0?-1:1;a.setXYZW(M,T.x,T.y,T.z,U)}for(let M=0,R=y.length;M<R;++M){let P=y[M],U=P.start,D=P.count;for(let H=U,N=U+D;H<N;H+=3)C(e.getX(H+0)),C(e.getX(H+1)),C(e.getX(H+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new xn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);let s=new L,r=new L,a=new L,o=new L,c=new L,l=new L,h=new L,u=new L;if(e)for(let f=0,m=e.count;f<m;f+=3){let x=e.getX(f+0),_=e.getX(f+1),d=e.getX(f+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,d),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,x),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,d),o.add(h),c.add(h),l.add(h),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(d,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)en.fromBufferAttribute(e,t),en.normalize(),e.setXYZ(t,en.x,en.y,en.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h),m=0,x=0;for(let _=0,d=c.length;_<d;_++){o.isInterleavedBufferAttribute?m=c[_]*o.data.stride+o.offset:m=c[_]*h;for(let p=0;p<h;p++)f[x++]=l[m++]}return new xn(f,h,u)}if(this.index===null)return qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,i);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let f=l[h],m=e(f,i);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let m=l[u];h.push(m.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Eo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=oh,this.updateRanges=[],this.version=0,this.uuid=wi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},dn=new L,Hr=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Qn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=wt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Qn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Qn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Qn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Qn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),s=wt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),s=wt(s,this.array),r=wt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ur("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new xn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ur("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},vl=new L,Mp=new L,Sp=new $e,gn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=vl.subVectors(i,t).cross(Mp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(vl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Sp.getNormalMatrix(e),s=this.coplanarPoint(vl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},bp=0,ai=class extends ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=wi(),this.name="",this.type="Material",this.blending=sr,this.side=Rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ql,this.blendDst=Yl,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ge(0,0,0),this.blendAlpha=0,this.depthFunc=Xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=lo,this.stencilZFail=lo,this.stencilZPass=lo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){qe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ge().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new gn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ue().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ue().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ai=class extends ai{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Fs,br=new L,Os=new L,Bs=new L,Hs=new ue,Er=new ue,Of=new mt,Wa=new L,wr=new L,Xa=new L,Pu=new ue,Ml=new ue,Lu=new ue,qi=class extends Kt{constructor(e=new Ai){if(super(),this.isSprite=!0,this.type="Sprite",Fs===void 0){Fs=new Ft;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Eo(t,5);Fs.setIndex([0,1,2,0,2,3]),Fs.setAttribute("position",new Hr(i,3,0,!1)),Fs.setAttribute("uv",new Hr(i,2,3,!1))}this.geometry=Fs,this.material=e,this.center=new ue(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Xe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Os.setFromMatrixScale(this.matrixWorld),Of.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Bs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Os.multiplyScalar(-Bs.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;qa(Wa.set(-.5,-.5,0),Bs,a,Os,s,r),qa(wr.set(.5,-.5,0),Bs,a,Os,s,r),qa(Xa.set(.5,.5,0),Bs,a,Os,s,r),Pu.set(0,0),Ml.set(1,0),Lu.set(1,1);let o=e.ray.intersectTriangle(Wa,wr,Xa,!1,br);if(o===null&&(qa(wr.set(-.5,.5,0),Bs,a,Os,s,r),Ml.set(0,1),o=e.ray.intersectTriangle(Wa,Xa,wr,!1,br),o===null))return;let c=e.ray.origin.distanceTo(br);c<e.near||c>e.far||t.push({distance:c,point:br.clone(),uv:Ei.getInterpolation(br,Wa,wr,Xa,Pu,Ml,Lu,new ue),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function qa(n,e,t,i,s,r){Hs.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Er.x=r*Hs.x-s*Hs.y,Er.y=s*Hs.x+r*Hs.y):Er.copy(Hs),n.copy(e),n.x+=Er.x,n.y+=Er.y,n.applyMatrix4(Of)}var bi=new L,Sl=new L,Ya=new L,Za=new L,zr=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,t),bi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Sl.copy(e).add(t).multiplyScalar(.5),Ya.copy(t).sub(e).normalize(),Za.copy(this.origin).sub(Sl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ya),o=Za.dot(this.direction),c=-Za.dot(Ya),l=Za.lengthSq(),h=Math.abs(1-a*a),u,f,m,x;if(h>0)if(u=a*c-o,f=a*o-c,x=r*h,u>=0)if(f>=-x)if(f<=x){let _=1/h;u*=_,f*=_,m=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=r,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*c)+l;else f<=-x?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-c),r),m=-u*u+f*(f+2*c)+l):f<=x?(u=0,f=Math.min(Math.max(-r,-c),r),m=f*(f+2*c)+l):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-c),r),m=-u*u+f*(f+2*c)+l);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Sl).addScaledVector(Ya,f),m}intersectSphere(e,t){if(e.radius<0)return null;bi.subVectors(e.center,this.origin);let i=bi.dot(this.direction),s=bi.dot(bi)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,u=e.x-a.x,f=e.y-a.y,m=e.z-a.z,x=t.x-a.x,_=t.y-a.y,d=t.z-a.z,p=i.x-a.x,y=i.y-a.y,T=i.z-a.z,v=Math.abs(c),E=Math.abs(l),w=Math.abs(h),C,M,R,P,U,D,H,N,k,O,V,ee;if(v>=E&&v>=w?(R=c,D=u,k=x,ee=p,c>=0?(C=l,M=h,P=f,U=m,H=_,N=d,O=y,V=T):(C=h,M=l,P=m,U=f,H=d,N=_,O=T,V=y)):E>=w?(R=l,D=f,k=_,ee=y,l>=0?(C=h,M=c,P=m,U=u,H=d,N=x,O=T,V=p):(C=c,M=h,P=u,U=m,H=x,N=d,O=p,V=T)):(R=h,D=m,k=d,ee=T,h>=0?(C=c,M=l,P=u,U=f,H=x,N=_,O=p,V=y):(C=l,M=c,P=f,U=u,H=_,N=x,O=y,V=p)),R===0)return null;let J=C/R,ie=M/R,ce=1/R,Be=P-J*D,De=U-ie*D,pt=H-J*k,at=N-ie*k,ut=O-J*ee,j=V-ie*ee,ae=ut*at-j*pt,Te=Be*j-De*ut,Ye=pt*De-at*Be;if(s){if(ae<0||Te<0||Ye<0)return null}else if((ae<0||Te<0||Ye<0)&&(ae>0||Te>0||Ye>0))return null;let Ie=ae+Te+Ye;if(Ie===0)return null;let Ze=ce*(ae*D+Te*k+Ye*ee);return(Ie>0?Ze<0:Ze>0)?null:this.at(Ze/Ie,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Gt=class extends ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=Yo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Du=new mt,ls=new zr,Ja=new Xi,Nu=new L,$a=new L,Ka=new L,ja=new L,bl=new L,Qa=new L,Uu=new L,eo=new L,Q=class extends Kt{constructor(e=new Ft,t=new Gt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Qa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(bl.fromBufferAttribute(u,e),a?Qa.addScaledVector(bl,h):Qa.addScaledVector(bl.sub(t),h))}t.add(Qa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ja.copy(i.boundingSphere),Ja.applyMatrix4(r),ls.copy(e.ray).recast(e.near),!(Ja.containsPoint(ls.origin)===!1&&(ls.intersectSphere(Ja,Nu)===null||ls.origin.distanceToSquared(Nu)>(e.far-e.near)**2))&&(Du.copy(r).invert(),ls.copy(e.ray).applyMatrix4(Du),!(i.boundingBox!==null&&ls.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ls)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,_=f.length;x<_;x++){let d=f[x],p=a[d.materialIndex],y=Math.max(d.start,m.start),T=Math.min(o.count,Math.min(d.start+d.count,m.start+m.count));for(let v=y,E=T;v<E;v+=3){let w=o.getX(v),C=o.getX(v+1),M=o.getX(v+2);s=to(this,p,e,i,l,h,u,w,C,M),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{let x=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let d=x,p=_;d<p;d+=3){let y=o.getX(d),T=o.getX(d+1),v=o.getX(d+2);s=to(this,a,e,i,l,h,u,y,T,v),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,_=f.length;x<_;x++){let d=f[x],p=a[d.materialIndex],y=Math.max(d.start,m.start),T=Math.min(c.count,Math.min(d.start+d.count,m.start+m.count));for(let v=y,E=T;v<E;v+=3){let w=v,C=v+1,M=v+2;s=to(this,p,e,i,l,h,u,w,C,M),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{let x=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let d=x,p=_;d<p;d+=3){let y=d,T=d+1,v=d+2;s=to(this,a,e,i,l,h,u,y,T,v),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}}};function Ep(n,e,t,i,s,r,a,o){let c;if(e.side===Xt?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,e.side===Rn,o),c===null)return null;eo.copy(o),eo.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(eo);return l<t.near||l>t.far?null:{distance:l,point:eo.clone(),object:n}}function to(n,e,t,i,s,r,a,o,c,l){n.getVertexPosition(o,$a),n.getVertexPosition(c,Ka),n.getVertexPosition(l,ja);let h=Ep(n,e,t,i,$a,Ka,ja,Uu);if(h){let u=new L;Ei.getBarycoord(Uu,$a,Ka,ja,u),s&&(h.uv=Ei.getInterpolatedAttribute(s,o,c,l,u,new ue)),r&&(h.uv1=Ei.getInterpolatedAttribute(r,o,c,l,u,new ue)),a&&(h.normal=Ei.getInterpolatedAttribute(a,o,c,l,u,new L),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new L,materialIndex:0};Ei.getNormal($a,Ka,ja,f.normal),h.face=f,h.barycoord=u}return h}var kr=class extends pn{constructor(e=null,t=1,i=1,s,r,a,o,c,l=nn,h=nn,u,f){super(null,a,o,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Gr=class extends xn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},zs=new mt,Fu=new mt,no=[],Ou=new sn,wp=new mt,Tr=new Q,Ar=new Xi,Vr=class extends Q{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Gr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,wp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new sn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,zs),Ou.copy(e.boundingBox).applyMatrix4(zs),this.boundingBox.union(Ou)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,zs),Ar.copy(e.boundingSphere).applyMatrix4(zs),this.boundingSphere.union(Ar)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Tr.geometry=this.geometry,Tr.material=this.material,Tr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ar.copy(this.boundingSphere),Ar.applyMatrix4(i),e.ray.intersectsSphere(Ar)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,zs),Fu.multiplyMatrices(i,zs),Tr.matrixWorld=Fu,Tr.raycast(e,no);for(let a=0,o=no.length;a<o;a++){let c=no[a];c.instanceId=r,c.object=this,t.push(c)}no.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Gr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new kr(new Float32Array(s*this.count),s,this.count,ec,Nn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<i.length;l++)a+=i[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},hs=new Xi,Tp=new ue(.5,.5),io=new L,Ks=class{constructor(e=new gn,t=new gn,i=new gn,s=new gn,r=new gn,a=new gn){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=kn,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],f=r[6],m=r[7],x=r[8],_=r[9],d=r[10],p=r[11],y=r[12],T=r[13],v=r[14],E=r[15];if(s[0].setComponents(l-a,m-h,p-x,E-y).normalize(),s[1].setComponents(l+a,m+h,p+x,E+y).normalize(),s[2].setComponents(l+o,m+u,p+_,E+T).normalize(),s[3].setComponents(l-o,m-u,p-_,E-T).normalize(),i)s[4].setComponents(c,f,d,v).normalize(),s[5].setComponents(l-c,m-f,p-d,E-v).normalize();else if(s[4].setComponents(l-c,m-f,p-d,E-v).normalize(),t===kn)s[5].setComponents(l+c,m+f,p+d,E+v).normalize();else if(t===qs)s[5].setComponents(c,f,d,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(e){hs.center.set(0,0,0);let t=Tp.distanceTo(e.center);return hs.radius=.7071067811865476+t,hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(io.x=s.normal.x>0?e.max.x:e.min.x,io.y=s.normal.y>0?e.max.y:e.min.y,io.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(io)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Wr=class extends pn{constructor(e=[],t=Qi,i,s,r,a,o,c,l,h){super(e,t,i,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},fs=class extends pn{constructor(e,t,i,s,r,a,o,c,l){super(e,t,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Yi=class extends pn{constructor(e,t,i=Vn,s,r,a,o=nn,c=nn,l,h=ni,u=1){if(h!==ni&&h!==ts)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,s,r,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},wo=class extends Yi{constructor(e,t=Vn,i=Qi,s,r,a=nn,o=nn,c,l=ni){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,s,r,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Xr=class extends pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},oi=class n extends Ft{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],f=0,m=0;x("z","y","x",-1,-1,i,t,e,a,r,0),x("z","y","x",1,-1,i,t,-e,a,r,1),x("x","z","y",1,1,e,i,t,s,a,2),x("x","z","y",1,-1,e,i,-t,s,a,3),x("x","y","z",1,-1,e,t,i,s,r,4),x("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new st(l,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(u,2));function x(_,d,p,y,T,v,E,w,C,M,R){let P=v/C,U=E/M,D=v/2,H=E/2,N=w/2,k=C+1,O=M+1,V=0,ee=0,J=new L;for(let ie=0;ie<O;ie++){let ce=ie*U-H;for(let Be=0;Be<k;Be++){let De=Be*P-D;J[_]=De*y,J[d]=ce*T,J[p]=N,l.push(J.x,J.y,J.z),J[_]=0,J[d]=0,J[p]=w>0?1:-1,h.push(J.x,J.y,J.z),u.push(Be/C),u.push(1-ie/M),V+=1}}for(let ie=0;ie<M;ie++)for(let ce=0;ce<C;ce++){let Be=f+ce+k*ie,De=f+ce+k*(ie+1),pt=f+(ce+1)+k*(ie+1),at=f+(ce+1)+k*ie;c.push(Be,De,at),c.push(De,pt,at),ee+=6}o.addGroup(m,ee,R),m+=ee,f+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},qr=class n extends Ft{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],c=[],l=[],h=t/2,u=Math.PI/2*e,f=t,m=2*u+f,x=i*2+r,_=s+1,d=new L,p=new L;for(let y=0;y<=x;y++){let T=0,v=0,E=0,w=0;if(y<=i){let R=y/i,P=R*Math.PI/2;v=-h-e*Math.cos(P),E=e*Math.sin(P),w=-e*Math.cos(P),T=R*u}else if(y<=i+r){let R=(y-i)/r;v=-h+R*t,E=e,w=0,T=u+R*f}else{let R=(y-i-r)/i,P=R*Math.PI/2;v=h+e*Math.sin(P),E=e*Math.cos(P),w=e*Math.sin(P),T=u+f+R*u}let C=Math.max(0,Math.min(1,T/m)),M=0;y===0?M=.5/s:y===x&&(M=-.5/s);for(let R=0;R<=s;R++){let P=R/s,U=P*Math.PI*2,D=Math.sin(U),H=Math.cos(U);p.x=-E*H,p.y=v,p.z=E*D,o.push(p.x,p.y,p.z),d.set(-E*H,w,E*D),d.normalize(),c.push(d.x,d.y,d.z),l.push(P+M,C)}if(y>0){let R=(y-1)*_;for(let P=0;P<s;P++){let U=R+P,D=R+P+1,H=y*_+P,N=y*_+P+1;a.push(U,D,H),a.push(D,N,H)}}}this.setIndex(a),this.setAttribute("position",new st(o,3)),this.setAttribute("normal",new st(c,3)),this.setAttribute("uv",new st(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Ln=class n extends Ft{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new L,h=new ue;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let m=i+u/t*s;l.x=e*Math.cos(m),l.y=e*Math.sin(m),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new st(a,3)),this.setAttribute("normal",new st(o,3)),this.setAttribute("uv",new st(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ht=class n extends Ft{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],m=[],x=0,_=[],d=i/2,p=0;y(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new st(u,3)),this.setAttribute("normal",new st(f,3)),this.setAttribute("uv",new st(m,2));function y(){let v=new L,E=new L,w=0,C=(t-e)/i;for(let M=0;M<=r;M++){let R=[],P=M/r,U=P*(t-e)+e;for(let D=0;D<=s;D++){let H=D/s,N=H*c+o,k=Math.sin(N),O=Math.cos(N);E.x=U*k,E.y=-P*i+d,E.z=U*O,u.push(E.x,E.y,E.z),v.set(k,C,O).normalize(),f.push(v.x,v.y,v.z),m.push(H,1-P),R.push(x++)}_.push(R)}for(let M=0;M<s;M++)for(let R=0;R<r;R++){let P=_[R][M],U=_[R+1][M],D=_[R+1][M+1],H=_[R][M+1];(e>0||R!==0)&&(h.push(P,U,H),w+=3),(t>0||R!==r-1)&&(h.push(U,D,H),w+=3)}l.addGroup(p,w,0),p+=w}function T(v){let E=x,w=new ue,C=new L,M=0,R=v===!0?e:t,P=v===!0?1:-1;for(let D=1;D<=s;D++)u.push(0,d*P,0),f.push(0,P,0),m.push(.5,.5),x++;let U=x;for(let D=0;D<=s;D++){let N=D/s*c+o,k=Math.cos(N),O=Math.sin(N);C.x=R*O,C.y=d*P,C.z=R*k,u.push(C.x,C.y,C.z),f.push(0,P,0),w.x=k*.5+.5,w.y=O*.5*P+.5,m.push(w.x,w.y),x++}for(let D=0;D<s;D++){let H=E+D,N=U+D;v===!0?h.push(N,N+1,H):h.push(N+1,N,H),M+=3}l.addGroup(p,M,v===!0?1:2),p+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ci=class n extends ht{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var wn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){qe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=i[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===a)return s/(r-1);let h=i[s],f=i[s+1]-h,m=(a-h)/f;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new ue:new L);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new L,s=[],r=[],a=[],o=new L,c=new mt;for(let m=0;m<=e;m++){let x=m/e;s[m]=this.getTangentAt(x,new L)}r[0]=new L,a[0]=new L;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),f<=l&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(it(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(c.makeRotationAxis(o,x))}a[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(it(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(m=-m);for(let x=1;x<=e;x++)r[x].applyMatrix4(c.makeRotationAxis(s[x],m*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},js=class extends wn{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new ue){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,m=l-this.aY;c=f*h-m*u+this.aX,l=f*u+m*h+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},To=class extends js{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function lh(){let n=0,e=0,t=0,i=0;function s(r,a,o,c){n=r,e=o,t=-3*r+3*a-2*o-c,i=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let f=(a-r)/l-(o-r)/(l+h)+(o-a)/h,m=(o-a)/h-(c-a)/(h+u)+(c-o)/u;f*=h,m*=h,s(a,o,f,m)},calc:function(r){let a=r*r,o=a*r;return n+e*r+t*a+i*o}}}var Bu=new L,Hu=new L,El=new lh,wl=new lh,Tl=new lh,Qs=class extends wn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new L){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Hu.subVectors(s[0],s[1]).add(s[0]),l=Hu);let u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Bu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Bu),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,x=Math.pow(l.distanceToSquared(u),m),_=Math.pow(u.distanceToSquared(f),m),d=Math.pow(f.distanceToSquared(h),m);_<1e-4&&(_=1),x<1e-4&&(x=_),d<1e-4&&(d=_),El.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,x,_,d),wl.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,x,_,d),Tl.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,x,_,d)}else this.curveType==="catmullrom"&&(El.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),wl.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Tl.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return i.set(El.calc(c),wl.calc(c),Tl.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function zu(n,e,t,i,s){let r=(i-e)*.5,a=(s-t)*.5,o=n*n,c=n*o;return(2*t-2*i+r+a)*c+(-3*t+3*i-2*r-a)*o+r*n+t}function Ap(n,e){let t=1-n;return t*t*e}function Rp(n,e){return 2*(1-n)*n*e}function Cp(n,e){return n*n*e}function Cr(n,e,t,i){return Ap(n,e)+Rp(n,t)+Cp(n,i)}function Ip(n,e){let t=1-n;return t*t*t*e}function Pp(n,e){let t=1-n;return 3*t*t*n*e}function Lp(n,e){return 3*(1-n)*n*n*e}function Dp(n,e){return n*n*n*e}function Ir(n,e,t,i,s){return Ip(n,e)+Pp(n,t)+Lp(n,i)+Dp(n,s)}var Yr=class extends wn{constructor(e=new ue,t=new ue,i=new ue,s=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ue){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Ir(e,s.x,r.x,a.x,o.x),Ir(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ao=class extends wn{constructor(e=new L,t=new L,i=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new L){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Ir(e,s.x,r.x,a.x,o.x),Ir(e,s.y,r.y,a.y,o.y),Ir(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Zr=class extends wn{constructor(e=new ue,t=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ro=class extends wn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Jr=class extends wn{constructor(e=new ue,t=new ue,i=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ue){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Cr(e,s.x,r.x,a.x),Cr(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Co=class extends wn{constructor(e=new L,t=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new L){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Cr(e,s.x,r.x,a.x),Cr(e,s.y,r.y,a.y),Cr(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$r=class extends wn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(zu(o,c.x,l.x,h.x,u.x),zu(o,c.y,l.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ue().fromArray(s))}return this}},Dl=Object.freeze({__proto__:null,ArcCurve:To,CatmullRomCurve3:Qs,CubicBezierCurve:Yr,CubicBezierCurve3:Ao,EllipseCurve:js,LineCurve:Zr,LineCurve3:Ro,QuadraticBezierCurve:Jr,QuadraticBezierCurve3:Co,SplineCurve:$r}),Io=class extends wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Dl[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Dl[s.type]().fromJSON(s))}return this}},Zi=class extends Io{constructor(e){super(),this.type="Path",this.currentPoint=new ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Zr(this.currentPoint.clone(),new ue(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Jr(this.currentPoint.clone(),new ue(e,t),new ue(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){let o=new Yr(this.currentPoint.clone(),new ue(e,t),new ue(i,s),new ue(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new $r(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,s,r,a,o,c),this}absellipse(e,t,i,s,r,a,o,c){let l=new js(e,t,i,s,r,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ot=class extends Zi{constructor(e){super(e),this.uuid=wi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Zi().fromJSON(s))}return this}};function Np(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=Bf(n,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(i&&(r=Hp(n,e,r,t)),n.length>80*t){o=n[0],c=n[1];let h=o,u=c;for(let f=t;f<s;f+=t){let m=n[f],x=n[f+1];m<o&&(o=m),x<c&&(c=x),m>h&&(h=m),x>u&&(u=x)}l=Math.max(h-o,u-c),l=l!==0?32767/l:0}return Kr(r,a,t,o,c,l,0),a}function Bf(n,e,t,i,s){let r;if(s===$p(n,e,t,i)>0)for(let a=e;a<t;a+=i)r=ku(a/i|0,n[a],n[a+1],r);else for(let a=t-i;a>=e;a-=i)r=ku(a/i|0,n[a],n[a+1],r);return r&&er(r,r.next)&&(Qr(r),r=r.next),r}function ds(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(er(t,t.next)||Ut(t.prev,t,t.next)===0)){if(Qr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Kr(n,e,t,i,s,r,a){if(!n)return;!a&&r&&Wp(n,i,s,r);let o=n;for(;n.prev!==n.next;){let c=n.prev,l=n.next;if(r?Fp(n,i,s,r):Up(n)){e.push(c.i,n.i,l.i),Qr(n),n=l.next,o=l.next;continue}if(n=l,n===o){a?a===1?(n=Op(ds(n),e),Kr(n,e,t,i,s,r,2)):a===2&&Bp(n,e,t,i,s,r):Kr(ds(n),e,t,i,s,r,1);break}}}function Up(n){let e=n.prev,t=n,i=n.next;if(Ut(e,t,i)>=0)return!1;let s=e.x,r=t.x,a=i.x,o=e.y,c=t.y,l=i.y,h=Math.min(s,r,a),u=Math.min(o,c,l),f=Math.max(s,r,a),m=Math.max(o,c,l),x=i.next;for(;x!==e;){if(x.x>=h&&x.x<=f&&x.y>=u&&x.y<=m&&Rr(s,o,r,c,a,l,x.x,x.y)&&Ut(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function Fp(n,e,t,i){let s=n.prev,r=n,a=n.next;if(Ut(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,u=r.y,f=a.y,m=Math.min(o,c,l),x=Math.min(h,u,f),_=Math.max(o,c,l),d=Math.max(h,u,f),p=Nl(m,x,e,t,i),y=Nl(_,d,e,t,i),T=n.prevZ,v=n.nextZ;for(;T&&T.z>=p&&v&&v.z<=y;){if(T.x>=m&&T.x<=_&&T.y>=x&&T.y<=d&&T!==s&&T!==a&&Rr(o,h,c,u,l,f,T.x,T.y)&&Ut(T.prev,T,T.next)>=0||(T=T.prevZ,v.x>=m&&v.x<=_&&v.y>=x&&v.y<=d&&v!==s&&v!==a&&Rr(o,h,c,u,l,f,v.x,v.y)&&Ut(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;T&&T.z>=p;){if(T.x>=m&&T.x<=_&&T.y>=x&&T.y<=d&&T!==s&&T!==a&&Rr(o,h,c,u,l,f,T.x,T.y)&&Ut(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;v&&v.z<=y;){if(v.x>=m&&v.x<=_&&v.y>=x&&v.y<=d&&v!==s&&v!==a&&Rr(o,h,c,u,l,f,v.x,v.y)&&Ut(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Op(n,e){let t=n;do{let i=t.prev,s=t.next.next;!er(i,s)&&zf(i,t,t.next,s)&&jr(i,s)&&jr(s,i)&&(e.push(i.i,t.i,s.i),Qr(t),Qr(t.next),t=n=s),t=t.next}while(t!==n);return ds(t)}function Bp(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Yp(a,o)){let c=kf(a,o);a=ds(a,a.next),c=ds(c,c.next),Kr(a,e,t,i,s,r,0),Kr(c,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function Hp(n,e,t,i){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*i,c=r<a-1?e[r+1]*i:n.length,l=Bf(n,o,c,i,!1);l===l.next&&(l.steiner=!0),s.push(qp(l))}s.sort(zp);for(let r=0;r<s.length;r++)t=kp(s[r],t);return t}function zp(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function kp(n,e){let t=Gp(n,e);if(!t)return e;let i=kf(t,n);return ds(i,i.next),ds(t,t.next)}function Gp(n,e){let t=e,i=n.x,s=n.y,r=-1/0,a;if(er(n,t))return t;do{if(er(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===i))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,c=a.x,l=a.y,h=1/0;t=a;do{if(i>=t.x&&t.x>=c&&i!==t.x&&Hf(s<l?i:r,s,c,l,s<l?r:i,s,t.x,t.y)){let u=Math.abs(s-t.y)/(i-t.x);jr(t,n)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&Vp(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function Vp(n,e){return Ut(n.prev,n,e.prev)<0&&Ut(e.next,n,n.next)<0}function Wp(n,e,t,i){let s=n;do s.z===0&&(s.z=Nl(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Xp(s)}function Xp(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let a=i,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,t*=2}while(e>1);return n}function Nl(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function qp(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Hf(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function Rr(n,e,t,i,s,r,a,o){return!(n===a&&e===o)&&Hf(n,e,t,i,s,r,a,o)}function Yp(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Zp(n,e)&&(jr(n,e)&&jr(e,n)&&Jp(n,e)&&(Ut(n.prev,n,e.prev)||Ut(n,e.prev,e))||er(n,e)&&Ut(n.prev,n,n.next)>0&&Ut(e.prev,e,e.next)>0)}function Ut(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function er(n,e){return n.x===e.x&&n.y===e.y}function zf(n,e,t,i){let s=ro(Ut(n,e,t)),r=ro(Ut(n,e,i)),a=ro(Ut(t,i,n)),o=ro(Ut(t,i,e));return!!(s!==r&&a!==o||s===0&&so(n,t,e)||r===0&&so(n,i,e)||a===0&&so(t,n,i)||o===0&&so(t,e,i))}function so(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function ro(n){return n>0?1:n<0?-1:0}function Zp(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&zf(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function jr(n,e){return Ut(n.prev,n,n.next)<0?Ut(n,e,n.next)>=0&&Ut(n,n.prev,e)>=0:Ut(n,e,n.prev)<0||Ut(n,n.next,e)<0}function Jp(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function kf(n,e){let t=Ul(n.i,n.x,n.y),i=Ul(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function ku(n,e,t,i){let s=Ul(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Qr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Ul(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function $p(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var Fl=class{static triangulate(e,t,i=2){return Np(e,t,i)}},ti=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Gu(e),Vu(i,e);let a=e.length;t.forEach(Gu);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,Vu(i,t[c]);let o=Fl.triangulate(i,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function Gu(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Vu(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var li=class n extends Ft{constructor(e=new Ot([new ue(.5,.5),new ue(-.5,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){let l=e[o];a(l)}this.setAttribute("position",new st(s,3)),this.setAttribute("uv",new st(r,2)),this.computeVertexNormals();function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:m-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,d=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Kp,T,v=!1,E,w,C,M;if(p){T=p.getSpacedPoints(h),v=!0,f=!1;let oe=p.isCatmullRomCurve3?p.closed:!1;E=p.computeFrenetFrames(h,oe),w=new L,C=new L,M=new L}f||(d=0,m=0,x=0,_=0);let R=o.extractPoints(l),P=R.shape,U=R.holes;if(!ti.isClockWise(P)){P=P.reverse();for(let oe=0,de=U.length;oe<de;oe++){let pe=U[oe];ti.isClockWise(pe)&&(U[oe]=pe.reverse())}}function H(oe){let pe=10000000000000001e-36,me=oe[0];for(let ye=1;ye<=oe.length;ye++){let Ve=ye%oe.length,Ge=oe[Ve],Je=Ge.x-me.x,Ke=Ge.y-me.y,F=Je*Je+Ke*Ke,_t=Math.max(Math.abs(Ge.x),Math.abs(Ge.y),Math.abs(me.x),Math.abs(me.y)),ot=pe*_t*_t;if(F<=ot){oe.splice(Ve,1),ye--;continue}me=Ge}}H(P),U.forEach(H);let N=U.length,k=P;for(let oe=0;oe<N;oe++){let de=U[oe];P=P.concat(de)}function O(oe,de,pe){return de||Xe("ExtrudeGeometry: vec does not exist"),oe.clone().addScaledVector(de,pe)}let V=P.length;function ee(oe,de,pe){let me,ye,Ve,Ge=oe.x-de.x,Je=oe.y-de.y,Ke=pe.x-oe.x,F=pe.y-oe.y,_t=Ge*Ge+Je*Je,ot=Ge*F-Je*Ke;if(Math.abs(ot)>Number.EPSILON){let I=Math.sqrt(_t),S=Math.sqrt(Ke*Ke+F*F),G=de.x-Je/I,q=de.y+Ge/I,$=pe.x-F/S,xe=pe.y+Ke/S,_e=(($-G)*F-(xe-q)*Ke)/(Ge*F-Je*Ke);me=G+Ge*_e-oe.x,ye=q+Je*_e-oe.y;let K=me*me+ye*ye;if(K<=2)return new ue(me,ye);Ve=Math.sqrt(K/2)}else{let I=!1;Ge>Number.EPSILON?Ke>Number.EPSILON&&(I=!0):Ge<-Number.EPSILON?Ke<-Number.EPSILON&&(I=!0):Math.sign(Je)===Math.sign(F)&&(I=!0),I?(me=-Je,ye=Ge,Ve=Math.sqrt(_t)):(me=Ge,ye=Je,Ve=Math.sqrt(_t/2))}return new ue(me/Ve,ye/Ve)}let J=[];for(let oe=0,de=k.length,pe=de-1,me=oe+1;oe<de;oe++,pe++,me++)pe===de&&(pe=0),me===de&&(me=0),J[oe]=ee(k[oe],k[pe],k[me]);let ie=[],ce,Be=J.concat();for(let oe=0,de=N;oe<de;oe++){let pe=U[oe];ce=[];for(let me=0,ye=pe.length,Ve=ye-1,Ge=me+1;me<ye;me++,Ve++,Ge++)Ve===ye&&(Ve=0),Ge===ye&&(Ge=0),ce[me]=ee(pe[me],pe[Ve],pe[Ge]);ie.push(ce),Be=Be.concat(ce)}let De;if(d===0)De=ti.triangulateShape(k,U);else{let oe=[],de=[];for(let pe=0;pe<d;pe++){let me=pe/d,ye=m*Math.cos(me*Math.PI/2),Ve=x*Math.sin(me*Math.PI/2)+_;for(let Ge=0,Je=k.length;Ge<Je;Ge++){let Ke=O(k[Ge],J[Ge],Ve);Te(Ke.x,Ke.y,-ye),me===0&&oe.push(Ke)}for(let Ge=0,Je=N;Ge<Je;Ge++){let Ke=U[Ge];ce=ie[Ge];let F=[];for(let _t=0,ot=Ke.length;_t<ot;_t++){let I=O(Ke[_t],ce[_t],Ve);Te(I.x,I.y,-ye),me===0&&F.push(I)}me===0&&de.push(F)}}De=ti.triangulateShape(oe,de)}let pt=De.length,at=x+_;for(let oe=0;oe<V;oe++){let de=f?O(P[oe],Be[oe],at):P[oe];v?(C.copy(E.normals[0]).multiplyScalar(de.x),w.copy(E.binormals[0]).multiplyScalar(de.y),M.copy(T[0]).add(C).add(w),Te(M.x,M.y,M.z)):Te(de.x,de.y,0)}for(let oe=1;oe<=h;oe++)for(let de=0;de<V;de++){let pe=f?O(P[de],Be[de],at):P[de];v?(C.copy(E.normals[oe]).multiplyScalar(pe.x),w.copy(E.binormals[oe]).multiplyScalar(pe.y),M.copy(T[oe]).add(C).add(w),Te(M.x,M.y,M.z)):Te(pe.x,pe.y,u/h*oe)}for(let oe=d-1;oe>=0;oe--){let de=oe/d,pe=m*Math.cos(de*Math.PI/2),me=x*Math.sin(de*Math.PI/2)+_;for(let ye=0,Ve=k.length;ye<Ve;ye++){let Ge=O(k[ye],J[ye],me);Te(Ge.x,Ge.y,u+pe)}for(let ye=0,Ve=U.length;ye<Ve;ye++){let Ge=U[ye];ce=ie[ye];for(let Je=0,Ke=Ge.length;Je<Ke;Je++){let F=O(Ge[Je],ce[Je],me);v?Te(F.x,F.y+T[h-1].y,T[h-1].x+pe):Te(F.x,F.y,u+pe)}}}ut(),j();function ut(){let oe=s.length/3;if(f){let de=0,pe=V*de;for(let me=0;me<pt;me++){let ye=De[me];Ye(ye[2]+pe,ye[1]+pe,ye[0]+pe)}de=h+d*2,pe=V*de;for(let me=0;me<pt;me++){let ye=De[me];Ye(ye[0]+pe,ye[1]+pe,ye[2]+pe)}}else{for(let de=0;de<pt;de++){let pe=De[de];Ye(pe[2],pe[1],pe[0])}for(let de=0;de<pt;de++){let pe=De[de];Ye(pe[0]+V*h,pe[1]+V*h,pe[2]+V*h)}}i.addGroup(oe,s.length/3-oe,0)}function j(){let oe=s.length/3,de=0;ae(k,de),de+=k.length;for(let pe=0,me=U.length;pe<me;pe++){let ye=U[pe];ae(ye,de),de+=ye.length}i.addGroup(oe,s.length/3-oe,1)}function ae(oe,de){let pe=oe.length;for(;--pe>=0;){let me=pe,ye=pe-1;ye<0&&(ye=oe.length-1);for(let Ve=0,Ge=h+d*2;Ve<Ge;Ve++){let Je=V*Ve,Ke=V*(Ve+1),F=de+me+Je,_t=de+ye+Je,ot=de+ye+Ke,I=de+me+Ke;Ie(F,_t,ot,I)}}}function Te(oe,de,pe){c.push(oe),c.push(de),c.push(pe)}function Ye(oe,de,pe){Ze(oe),Ze(de),Ze(pe);let me=s.length/3,ye=y.generateTopUV(i,s,me-3,me-2,me-1);bt(ye[0]),bt(ye[1]),bt(ye[2])}function Ie(oe,de,pe,me){Ze(oe),Ze(de),Ze(me),Ze(de),Ze(pe),Ze(me);let ye=s.length/3,Ve=y.generateSideWallUV(i,s,ye-6,ye-3,ye-2,ye-1);bt(Ve[0]),bt(Ve[1]),bt(Ve[3]),bt(Ve[1]),bt(Ve[2]),bt(Ve[3])}function Ze(oe){s.push(c[oe*3+0]),s.push(c[oe*3+1]),s.push(c[oe*3+2])}function bt(oe){r.push(oe.x),r.push(oe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return jp(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];i.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Dl[s.type]().fromJSON(s)),new n(i,e.options)}},Kp={generateTopUV:function(n,e,t,i,s){let r=e[t*3],a=e[t*3+1],o=e[i*3],c=e[i*3+1],l=e[s*3],h=e[s*3+1];return[new ue(r,a),new ue(o,c),new ue(l,h)]},generateSideWallUV:function(n,e,t,i,s,r){let a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[i*3],h=e[i*3+1],u=e[i*3+2],f=e[s*3],m=e[s*3+1],x=e[s*3+2],_=e[r*3],d=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new ue(a,1-c),new ue(l,1-u),new ue(f,1-x),new ue(_,1-p)]:[new ue(o,1-c),new ue(h,1-u),new ue(m,1-x),new ue(d,1-p)]}};function jp(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Dn=class n extends Ft{constructor(e=[new ue(0,-.5),new ue(.5,0),new ue(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=it(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],h=1/t,u=new L,f=new ue,m=new L,x=new L,_=new L,d=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:d=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,m.x=p*1,m.y=-d,m.z=p*0,_.copy(m),m.normalize(),c.push(m.x,m.y,m.z);break;case e.length-1:c.push(_.x,_.y,_.z);break;default:d=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,m.x=p*1,m.y=-d,m.z=p*0,x.copy(m),m.x+=_.x,m.y+=_.y,m.z+=_.z,m.normalize(),c.push(m.x,m.y,m.z),_.copy(x)}for(let y=0;y<=t;y++){let T=i+y*h*s,v=Math.sin(T),E=Math.cos(T);for(let w=0;w<=e.length-1;w++){u.x=e[w].x*v,u.y=e[w].y,u.z=e[w].x*E,a.push(u.x,u.y,u.z),f.x=y/t,f.y=w/(e.length-1),o.push(f.x,f.y);let C=c[3*w+0]*v,M=c[3*w+1],R=c[3*w+0]*E;l.push(C,M,R)}}for(let y=0;y<t;y++)for(let T=0;T<e.length-1;T++){let v=T+y*e.length,E=v,w=v+e.length,C=v+e.length+1,M=v+1;r.push(E,w,M),r.push(C,M,w)}this.setIndex(r),this.setAttribute("position",new st(a,3)),this.setAttribute("uv",new st(o,2)),this.setAttribute("normal",new st(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}};var Vt=class n extends Ft{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),c=Math.floor(s),l=o+1,h=c+1,u=e/o,f=t/c,m=[],x=[],_=[],d=[];for(let p=0;p<h;p++){let y=p*f-a;for(let T=0;T<l;T++){let v=T*u-r;x.push(v,-y,0),_.push(0,0,1),d.push(T/o),d.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<o;y++){let T=y+l*p,v=y+l*(p+1),E=y+1+l*(p+1),w=y+1+l*p;m.push(T,v,w),m.push(v,E,w)}this.setIndex(m),this.setAttribute("position",new st(x,3)),this.setAttribute("normal",new st(_,3)),this.setAttribute("uv",new st(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var ea=class n extends Ft{constructor(e=new Ot([new ue(0,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(i),this.setAttribute("position",new st(s,3)),this.setAttribute("normal",new st(r,3)),this.setAttribute("uv",new st(a,2));function l(h){let u=s.length/3,f=h.extractPoints(t),m=f.shape,x=f.holes;ti.isClockWise(m)===!1&&(m=m.reverse());for(let d=0,p=x.length;d<p;d++){let y=x[d];ti.isClockWise(y)===!0&&(x[d]=y.reverse())}let _=ti.triangulateShape(m,x);for(let d=0,p=x.length;d<p;d++){let y=x[d];m=m.concat(y)}for(let d=0,p=m.length;d<p;d++){let y=m[d];s.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let d=0,p=_.length;d<p;d++){let y=_[d],T=y[0]+u,v=y[1]+u,E=y[2]+u;i.push(T,v,E),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Qp(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];i.push(a)}return new n(i,e.curveSegments)}};function Qp(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var St=class n extends Ft{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new L,f=new L,m=[],x=[],_=[],d=[];for(let p=0;p<=i;p++){let y=[],T=p/i,v=a+T*o,E=e*Math.cos(v),w=Math.sqrt(e*e-E*E),C=0;p===0&&a===0?C=.5/t:p===i&&c===Math.PI&&(C=-.5/t);for(let M=0;M<=t;M++){let R=M/t,P=s+R*r;u.x=-w*Math.cos(P),u.y=E,u.z=w*Math.sin(P),x.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),d.push(R+C,1-T),y.push(l++)}h.push(y)}for(let p=0;p<i;p++)for(let y=0;y<t;y++){let T=h[p][y+1],v=h[p][y],E=h[p+1][y],w=h[p+1][y+1];(p!==0||a>0)&&m.push(T,v,w),(p!==i-1||c<Math.PI)&&m.push(v,E,w)}this.setIndex(m),this.setAttribute("position",new st(x,3)),this.setAttribute("normal",new st(_,3)),this.setAttribute("uv",new st(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Tt=class n extends Ft{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let c=[],l=[],h=[],u=[],f=new L,m=new L,x=new L;for(let _=0;_<=i;_++){let d=a+_/i*o;for(let p=0;p<=s;p++){let y=p/s*r;m.x=(e+t*Math.cos(d))*Math.cos(y),m.y=(e+t*Math.cos(d))*Math.sin(y),m.z=t*Math.sin(d),l.push(m.x,m.y,m.z),f.x=e*Math.cos(y),f.y=e*Math.sin(y),x.subVectors(m,f).normalize(),h.push(x.x,x.y,x.z),u.push(p/s),u.push(_/i)}}for(let _=1;_<=i;_++)for(let d=1;d<=s;d++){let p=(s+1)*_+d-1,y=(s+1)*(_-1)+d-1,T=(s+1)*(_-1)+d,v=(s+1)*_+d;c.push(p,y,v),c.push(y,T,v)}this.setIndex(c),this.setAttribute("position",new st(l,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function ys(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Wu(s))s.isRenderTargetTexture?(qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Wu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function un(n){let e={};for(let t=0;t<n.length;t++){let i=ys(n[t]);for(let s in i)e[s]=i[s]}return e}function Wu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function e0(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function hh(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}var Gf={clone:ys,merge:un},t0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,n0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Tn=class extends ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=t0,this.fragmentShader=n0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ys(e.uniforms),this.uniformsGroups=e0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new ge().setHex(s.value);break;case"v2":this.uniforms[i].value=new ue().fromArray(s.value);break;case"v3":this.uniforms[i].value=new L().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Dt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new $e().fromArray(s.value);break;case"m4":this.uniforms[i].value=new mt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Po=class extends Tn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},an=class extends ai{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ma,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},je=class extends an{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return it(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ta=class extends ai{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ma,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=Yo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Lo=class extends ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Do=class extends ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ks(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Al(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Ji=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},No=class extends Ji{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Il,endingEnd:Il}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Pl:r=e,o=2*t-i;break;case Ll:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Pl:a=e,c=2*i-t;break;case Ll:a=1,c=i+s[1]-s[0];break;default:a=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,m=this._weightNext,x=(i-t)/(s-t),_=x*x,d=_*x,p=-f*d+2*f*_-f*x,y=(1+f)*d+(-1.5-2*f)*_+(-.5+f)*x+1,T=(-1-m)*d+(1.5+m)*_+.5*x,v=m*d-m*_;for(let E=0;E!==o;++E)r[E]=p*a[h+E]+y*a[l+E]+T*a[c+E]+v*a[u+E];return r}},Uo=class extends Ji{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(i-t)/(s-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[l+f]*u+a[c+f]*h;return r}},Fo=class extends Ji{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Oo=class extends Ji{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let x=(i-t)/(s-t),_=1-x;for(let d=0;d!==o;++d)r[d]=a[l+d]*_+a[c+d]*x;return r}let f=o*2,m=e-1;for(let x=0;x!==o;++x){let _=a[l+x],d=a[c+x],p=m*f+x*2,y=u[p],T=u[p+1],v=e*f+x*2,E=h[v],w=h[v+1],C=s0(i,t,y,E,s);r[x]=Vf(C,_,T,w,d)}return r}};function Vf(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function i0(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function s0(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){let o=Vf(r,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let c=i0(r,e,t,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var An=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ks(t,this.TimeBufferType),this.values=ks(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ks(e.times,Array),values:ks(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),Al(e.settings)&&(i.settings={inTangents:ks(e.settings.inTangents,Array),outTangents:ks(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Fo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Uo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new No(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Oo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Pr:t=this.InterpolantFactoryMethodDiscrete;break;case yo:t=this.InterpolantFactoryMethodLinear;break;case co:t=this.InterpolantFactoryMethodSmooth;break;case Cl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return qe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Pr;case this.InterpolantFactoryMethodLinear:return yo;case this.InterpolantFactoryMethodSmooth:return co;case this.InterpolantFactoryMethodBezier:return Cl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;Al(this.settings)&&(Xu(this.settings.inTangents,e),Xu(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Xe("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Xe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){Xe("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Xe("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&ap(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Xe("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===co,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let u=o*i,f=u-i,m=u+i;for(let x=0;x!==i;++x){let _=t[u+x];if(_!==t[f+x]||_!==t[m+x]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*i,f=a*i;for(let m=0;m!==i;++m)t[f+m]=t[u+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,c=a*i,l=0;l!==i;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,Al(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Xu(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}An.prototype.ValueTypeName="";An.prototype.TimeBufferType=Float32Array;An.prototype.ValueBufferType=Float32Array;An.prototype.DefaultInterpolation=yo;var $i=class extends An{constructor(e,t,i){super(e,t,i)}};$i.prototype.ValueTypeName="bool";$i.prototype.ValueBufferType=Array;$i.prototype.DefaultInterpolation=Pr;$i.prototype.InterpolantFactoryMethodLinear=void 0;$i.prototype.InterpolantFactoryMethodSmooth=void 0;var Bo=class extends An{constructor(e,t,i,s){super(e,t,i,s)}};Bo.prototype.ValueTypeName="color";var Ho=class extends An{constructor(e,t,i,s){super(e,t,i,s)}};Ho.prototype.ValueTypeName="number";var zo=class extends Ji{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)si.slerpFlat(r,0,a,l-o,a,l,c);return r}},na=class extends An{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new zo(this.times,this.values,this.getValueSize(),e)}};na.prototype.ValueTypeName="quaternion";na.prototype.InterpolantFactoryMethodSmooth=void 0;var Ki=class extends An{constructor(e,t,i){super(e,t,i)}};Ki.prototype.ValueTypeName="string";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=Pr;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;var ko=class extends An{constructor(e,t,i,s){super(e,t,i,s)}};ko.prototype.ValueTypeName="vector";var Go=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let m=l[u],x=l[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Wf=new Go,Vo=class{constructor(e){this.manager=e!==void 0?e:Wf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Vo.DEFAULT_MATERIAL_NAME="__DEFAULT";var tr=class extends Kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ge(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ia=class extends tr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Rl=new mt,qu=new L,Yu=new L,sa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.mapType=yn,this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ks,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;qu.setFromMatrixPosition(e.matrixWorld),t.position.copy(qu),Yu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Yu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Rl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Rl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===qs||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Rl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ao=new L,oo=new si,jn=new L,ra=class extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ao,oo,jn),jn.x===1&&jn.y===1&&jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ao,oo,jn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(ao,oo,jn),jn.x===1&&jn.y===1&&jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ao,oo,jn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Gi=new L,Zu=new ue,Ju=new ue,tn=class extends ra{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=vo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(nl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vo*2*Math.atan(Math.tan(nl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z)}getViewSize(e,t){return this.getViewBounds(e,Zu,Ju),t.subVectors(Ju,Zu)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(nl*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Ol=class extends sa{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0}},ji=class extends tr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Ol}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},nr=class extends ra{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Bl=class extends sa{constructor(){super(new nr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ps=class extends tr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.shadow=new Bl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Gs=-90,Vs=1,Wo=class extends Kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new tn(Gs,Vs,e,t);s.layers=this.layers,this.add(s);let r=new tn(Gs,Vs,e,t);r.layers=this.layers,this.add(r);let a=new tn(Gs,Vs,e,t);a.layers=this.layers,this.add(a);let o=new tn(Gs,Vs,e,t);o.layers=this.layers,this.add(o);let c=new tn(Gs,Vs,e,t);c.layers=this.layers,this.add(c);let l=new tn(Gs,Vs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===kn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===qs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let d=!1;e.isWebGLRenderer===!0?d=e.state.buffers.depth.getReversed():d=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,f,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}},Xo=class extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var uh="\\[\\]\\.:\\/",r0=new RegExp("["+uh+"]","g"),fh="[^"+uh+"]",a0="[^"+uh.replace("\\.","")+"]",o0=/((?:WC+[\/:])*)/.source.replace("WC",fh),c0=/(WCOD+)?/.source.replace("WCOD",a0),l0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fh),h0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fh),u0=new RegExp("^"+o0+c0+l0+h0+"$"),f0=["material","materials","bones","map"],Hl=class{constructor(e,t,i){let s=i||Lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Lt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(r0,"")}static parseTrackName(e){let t=u0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);f0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=i(o.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){qe("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Xe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Xe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Xe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Xe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){Xe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;Xe("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Lt.Composite=Hl;Lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Lt.prototype.GetterByBindingType=[Lt.prototype._getValue_direct,Lt.prototype._getValue_array,Lt.prototype._getValue_arrayElement,Lt.prototype._getValue_toArray];Lt.prototype.SetterByBindingTypeAndVersioning=[[Lt.prototype._setValue_direct,Lt.prototype._setValue_direct_setNeedsUpdate,Lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_array,Lt.prototype._setValue_array_setNeedsUpdate,Lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_arrayElement,Lt.prototype._setValue_arrayElement_setNeedsUpdate,Lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_fromArray,Lt.prototype._setValue_fromArray_setNeedsUpdate,Lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var tv=new Float32Array(1);var $u=new mt,ms=class{constructor(e,t,i=0,s=1/0){this.ray=new zr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Js,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Xe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return $u.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($u),this}intersectObject(e,t=!0,i=[]){return zl(e,this,i,t),i.sort(Ku),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)zl(e[s],this,i,t);return i.sort(Ku),i}};function Ku(n,e){return n.distance-e.distance}function zl(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)zl(r[a],e,t,!0)}}var _h=class _h{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};_h.prototype.isMatrix2=!0;var kl=_h;function dh(n,e,t,i){let s=d0(i);switch(t){case rh:return n*e;case ec:return n*e/s.components*s.byteLength;case tc:return n*e/s.components*s.byteLength;case ns:return n*e*2/s.components*s.byteLength;case nc:return n*e*2/s.components*s.byteLength;case ah:return n*e*3/s.components*s.byteLength;case Un:return n*e*4/s.components*s.byteLength;case ic:return n*e*4/s.components*s.byteLength;case la:case ha:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ua:case fa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case rc:case oc:return Math.max(n,16)*Math.max(e,8)/4;case sc:case ac:return Math.max(n,8)*Math.max(e,8)/2;case cc:case lc:case uc:case fc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case hc:case da:case dc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case pc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case mc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case gc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case xc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case _c:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case yc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case vc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Mc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Sc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case bc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ec:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case wc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Tc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ac:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Rc:case Cc:case Ic:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Pc:case Lc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case pa:case Dc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function d0(n){switch(n){case yn:case th:return{byteLength:1,components:1};case rr:case nh:case Wn:return{byteLength:2,components:1};case jo:case Qo:return{byteLength:2,components:4};case Vn:case Ko:case Nn:return{byteLength:4,components:1};case ih:case sh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function fd(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function m0(n){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,h),o.onUploadCallback();let m;if(l instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=n.SHORT;else if(l instanceof Uint32Array)m=n.UNSIGNED_INT;else if(l instanceof Int32Array)m=n.INT;else if(l instanceof Int8Array)m=n.BYTE;else if(l instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,c,l){let h=c.array,u=c.updateRanges;if(n.bindBuffer(l,o),u.length===0)n.bufferSubData(l,0,h);else{u.sort((m,x)=>m.start-x.start);let f=0;for(let m=1;m<u.length;m++){let x=u[f],_=u[m];_.start<=x.start+x.count+1?x.count=Math.max(x.count,_.start+_.count-x.start):(++f,u[f]=_)}u.length=f+1;for(let m=0,x=u.length;m<x;m++){let _=u[m];n.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var g0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,x0=`#ifdef USE_ALPHAHASH
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
#endif`,_0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,y0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,v0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,M0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,S0=`#ifdef USE_AOMAP
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
#endif`,b0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,E0=`#ifdef USE_BATCHING
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
#endif`,w0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,T0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,A0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,R0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,C0=`#ifdef USE_IRIDESCENCE
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
#endif`,I0=`#ifdef USE_BUMPMAP
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
#endif`,P0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,L0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,D0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,N0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,U0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,F0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,O0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,B0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,H0=`#define PI 3.141592653589793
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
} // validated`,z0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,k0=`vec3 transformedNormal = objectNormal;
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
#endif`,G0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,V0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,W0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,X0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,q0="gl_FragColor = linearToOutputTexel( gl_FragColor );",Y0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Z0=`#ifdef USE_ENVMAP
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
#endif`,J0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,$0=`#ifdef USE_ENVMAP
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
#endif`,K0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,j0=`#ifdef USE_ENVMAP
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
#endif`,Q0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,em=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,im=`#ifdef USE_GRADIENTMAP
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
}`,sm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,am=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,om=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,cm=`#ifdef USE_ENVMAP
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
#endif`,lm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,um=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dm=`PhysicalMaterial material;
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
#endif`,pm=`uniform sampler2D dfgLUT;
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
}`,mm=`
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
#endif`,gm=`#if defined( RE_IndirectDiffuse )
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
#endif`,xm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_m=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,ym=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Em=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Tm=`#if defined( USE_POINTS_UV )
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
#endif`,Am=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Im=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lm=`#ifdef USE_MORPHTARGETS
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
#endif`,Dm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Um=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Fm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Om=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Hm=`#ifdef USE_NORMALMAP
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
#endif`,zm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,km=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ym=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$m=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Km=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tg=`float getShadowMask() {
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
}`,ng=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ig=`#ifdef USE_SKINNING
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
#endif`,sg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rg=`#ifdef USE_SKINNING
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
#endif`,ag=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,og=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hg=`#ifdef USE_TRANSMISSION
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
#endif`,ug=`#ifdef USE_TRANSMISSION
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
#endif`,fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,gg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xg=`uniform sampler2D t2D;
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
}`,_g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sg=`#include <common>
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
}`,bg=`#if DEPTH_PACKING == 3200
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
}`,Eg=`#define DISTANCE
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
}`,wg=`#define DISTANCE
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
}`,Tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ag=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rg=`uniform float scale;
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
}`,Cg=`uniform vec3 diffuse;
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
}`,Ig=`#include <common>
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
}`,Pg=`uniform vec3 diffuse;
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
}`,Lg=`#define LAMBERT
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
}`,Dg=`#define LAMBERT
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
}`,Ng=`#define MATCAP
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
}`,Ug=`#define MATCAP
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
}`,Fg=`#define NORMAL
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
}`,Og=`#define NORMAL
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
}`,Bg=`#define PHONG
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
}`,Hg=`#define PHONG
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
}`,zg=`#define STANDARD
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
}`,kg=`#define STANDARD
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
}`,Gg=`#define TOON
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
}`,Vg=`#define TOON
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
}`,Wg=`uniform float size;
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
}`,Xg=`uniform vec3 diffuse;
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
}`,qg=`#include <common>
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
}`,Yg=`uniform vec3 color;
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
}`,Zg=`uniform float rotation;
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
}`,Jg=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:g0,alphahash_pars_fragment:x0,alphamap_fragment:_0,alphamap_pars_fragment:y0,alphatest_fragment:v0,alphatest_pars_fragment:M0,aomap_fragment:S0,aomap_pars_fragment:b0,batching_pars_vertex:E0,batching_vertex:w0,begin_vertex:T0,beginnormal_vertex:A0,bsdfs:R0,iridescence_fragment:C0,bumpmap_pars_fragment:I0,clipping_planes_fragment:P0,clipping_planes_pars_fragment:L0,clipping_planes_pars_vertex:D0,clipping_planes_vertex:N0,color_fragment:U0,color_pars_fragment:F0,color_pars_vertex:O0,color_vertex:B0,common:H0,cube_uv_reflection_fragment:z0,defaultnormal_vertex:k0,displacementmap_pars_vertex:G0,displacementmap_vertex:V0,emissivemap_fragment:W0,emissivemap_pars_fragment:X0,colorspace_fragment:q0,colorspace_pars_fragment:Y0,envmap_fragment:Z0,envmap_common_pars_fragment:J0,envmap_pars_fragment:$0,envmap_pars_vertex:K0,envmap_physical_pars_fragment:cm,envmap_vertex:j0,fog_vertex:Q0,fog_pars_vertex:em,fog_fragment:tm,fog_pars_fragment:nm,gradientmap_pars_fragment:im,lightmap_pars_fragment:sm,lights_lambert_fragment:rm,lights_lambert_pars_fragment:am,lights_pars_begin:om,lights_toon_fragment:lm,lights_toon_pars_fragment:hm,lights_phong_fragment:um,lights_phong_pars_fragment:fm,lights_physical_fragment:dm,lights_physical_pars_fragment:pm,lights_fragment_begin:mm,lights_fragment_maps:gm,lights_fragment_end:xm,lightprobes_pars_fragment:_m,logdepthbuf_fragment:ym,logdepthbuf_pars_fragment:vm,logdepthbuf_pars_vertex:Mm,logdepthbuf_vertex:Sm,map_fragment:bm,map_pars_fragment:Em,map_particle_fragment:wm,map_particle_pars_fragment:Tm,metalnessmap_fragment:Am,metalnessmap_pars_fragment:Rm,morphinstance_vertex:Cm,morphcolor_vertex:Im,morphnormal_vertex:Pm,morphtarget_pars_vertex:Lm,morphtarget_vertex:Dm,normal_fragment_begin:Nm,normal_fragment_maps:Um,normal_pars_fragment:Fm,normal_pars_vertex:Om,normal_vertex:Bm,normalmap_pars_fragment:Hm,clearcoat_normal_fragment_begin:zm,clearcoat_normal_fragment_maps:km,clearcoat_pars_fragment:Gm,iridescence_pars_fragment:Vm,opaque_fragment:Wm,packing:Xm,premultiplied_alpha_fragment:qm,project_vertex:Ym,dithering_fragment:Zm,dithering_pars_fragment:Jm,roughnessmap_fragment:$m,roughnessmap_pars_fragment:Km,shadowmap_pars_fragment:jm,shadowmap_pars_vertex:Qm,shadowmap_vertex:eg,shadowmask_pars_fragment:tg,skinbase_vertex:ng,skinning_pars_vertex:ig,skinning_vertex:sg,skinnormal_vertex:rg,specularmap_fragment:ag,specularmap_pars_fragment:og,tonemapping_fragment:cg,tonemapping_pars_fragment:lg,transmission_fragment:hg,transmission_pars_fragment:ug,uv_pars_fragment:fg,uv_pars_vertex:dg,uv_vertex:pg,worldpos_vertex:mg,background_vert:gg,background_frag:xg,backgroundCube_vert:_g,backgroundCube_frag:yg,cube_vert:vg,cube_frag:Mg,depth_vert:Sg,depth_frag:bg,distance_vert:Eg,distance_frag:wg,equirect_vert:Tg,equirect_frag:Ag,linedashed_vert:Rg,linedashed_frag:Cg,meshbasic_vert:Ig,meshbasic_frag:Pg,meshlambert_vert:Lg,meshlambert_frag:Dg,meshmatcap_vert:Ng,meshmatcap_frag:Ug,meshnormal_vert:Fg,meshnormal_frag:Og,meshphong_vert:Bg,meshphong_frag:Hg,meshphysical_vert:zg,meshphysical_frag:kg,meshtoon_vert:Gg,meshtoon_frag:Vg,points_vert:Wg,points_frag:Xg,shadow_vert:qg,shadow_frag:Yg,sprite_vert:Zg,sprite_frag:Jg},we={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},fi={basic:{uniforms:un([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:un([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new ge(0)},envMapIntensity:{value:1}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:un([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:un([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:un([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new ge(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:un([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:un([we.points,we.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:un([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:un([we.common,we.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:un([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:un([we.sprite,we.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distance:{uniforms:un([we.common,we.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distance_vert,fragmentShader:nt.distance_frag},shadow:{uniforms:un([we.lights,we.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};fi.physical={uniforms:un([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};var Fc={r:0,b:0,g:0},$g=new mt,dd=new $e;dd.set(-1,0,0,0,1,0,0,0,1);function Kg(n,e,t,i,s,r){let a=new ge(0),o=s===!0?0:1,c,l,h=null,u=0,f=null;function m(y){let T=y.isScene===!0?y.background:null;if(T&&T.isTexture){let v=y.backgroundBlurriness>0;T=e.get(T,v)}return T}function x(y){let T=!1,v=m(y);v===null?d(a,o):v&&v.isColor&&(d(v,1),T=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(y,T){let v=m(T);v&&(v.isCubeTexture||v.mapping===oa)?(l===void 0&&(l=new Q(new oi(1,1,1),new Tn({name:"BackgroundCubeMaterial",uniforms:ys(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(E,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4($g.makeRotationFromEuler(T.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(dd),l.material.toneMapped=lt.getTransfer(v.colorSpace)!==Mt,(h!==v||u!==v.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,f=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Q(new Vt(2,2),new Tn({name:"BackgroundMaterial",uniforms:ys(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=lt.getTransfer(v.colorSpace)!==Mt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,f=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function d(y,T){y.getRGB(Fc,hh(n)),t.buffers.color.setClear(Fc.r,Fc.g,Fc.b,T,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,T=1){a.set(y),o=T,d(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,d(a,o)},render:x,addToRenderList:_,dispose:p}}function jg(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,a=!1;function o(U,D,H,N,k){let O=!1,V=u(U,N,H,D);r!==V&&(r=V,l(r.object)),O=m(U,N,H,k),O&&x(U,N,H,k),k!==null&&e.update(k,n.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,v(U,D,H,N),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return n.createVertexArray()}function l(U){return n.bindVertexArray(U)}function h(U){return n.deleteVertexArray(U)}function u(U,D,H,N){let k=N.wireframe===!0,O=i[D.id];O===void 0&&(O={},i[D.id]=O);let V=U.isInstancedMesh===!0?U.id:0,ee=O[V];ee===void 0&&(ee={},O[V]=ee);let J=ee[H.id];J===void 0&&(J={},ee[H.id]=J);let ie=J[k];return ie===void 0&&(ie=f(c()),J[k]=ie),ie}function f(U){let D=[],H=[],N=[];for(let k=0;k<t;k++)D[k]=0,H[k]=0,N[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:H,attributeDivisors:N,object:U,attributes:{},index:null}}function m(U,D,H,N){let k=r.attributes,O=D.attributes,V=0,ee=H.getAttributes();for(let J in ee)if(ee[J].location>=0){let ce=k[J],Be=O[J];if(Be===void 0&&(J==="instanceMatrix"&&U.instanceMatrix&&(Be=U.instanceMatrix),J==="instanceColor"&&U.instanceColor&&(Be=U.instanceColor)),ce===void 0||ce.attribute!==Be||Be&&ce.data!==Be.data)return!0;V++}return r.attributesNum!==V||r.index!==N}function x(U,D,H,N){let k={},O=D.attributes,V=0,ee=H.getAttributes();for(let J in ee)if(ee[J].location>=0){let ce=O[J];ce===void 0&&(J==="instanceMatrix"&&U.instanceMatrix&&(ce=U.instanceMatrix),J==="instanceColor"&&U.instanceColor&&(ce=U.instanceColor));let Be={};Be.attribute=ce,ce&&ce.data&&(Be.data=ce.data),k[J]=Be,V++}r.attributes=k,r.attributesNum=V,r.index=N}function _(){let U=r.newAttributes;for(let D=0,H=U.length;D<H;D++)U[D]=0}function d(U){p(U,0)}function p(U,D){let H=r.newAttributes,N=r.enabledAttributes,k=r.attributeDivisors;H[U]=1,N[U]===0&&(n.enableVertexAttribArray(U),N[U]=1),k[U]!==D&&(n.vertexAttribDivisor(U,D),k[U]=D)}function y(){let U=r.newAttributes,D=r.enabledAttributes;for(let H=0,N=D.length;H<N;H++)D[H]!==U[H]&&(n.disableVertexAttribArray(H),D[H]=0)}function T(U,D,H,N,k,O,V){V===!0?n.vertexAttribIPointer(U,D,H,k,O):n.vertexAttribPointer(U,D,H,N,k,O)}function v(U,D,H,N){_();let k=N.attributes,O=H.getAttributes(),V=D.defaultAttributeValues;for(let ee in O){let J=O[ee];if(J.location>=0){let ie=k[ee];if(ie===void 0&&(ee==="instanceMatrix"&&U.instanceMatrix&&(ie=U.instanceMatrix),ee==="instanceColor"&&U.instanceColor&&(ie=U.instanceColor)),ie!==void 0){let ce=ie.normalized,Be=ie.itemSize,De=e.get(ie);if(De===void 0)continue;let pt=De.buffer,at=De.type,ut=De.bytesPerElement,j=at===n.INT||at===n.UNSIGNED_INT||ie.gpuType===Ko;if(ie.isInterleavedBufferAttribute){let ae=ie.data,Te=ae.stride,Ye=ie.offset;if(ae.isInstancedInterleavedBuffer){for(let Ie=0;Ie<J.locationSize;Ie++)p(J.location+Ie,ae.meshPerAttribute);U.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ie=0;Ie<J.locationSize;Ie++)d(J.location+Ie);n.bindBuffer(n.ARRAY_BUFFER,pt);for(let Ie=0;Ie<J.locationSize;Ie++)T(J.location+Ie,Be/J.locationSize,at,ce,Te*ut,(Ye+Be/J.locationSize*Ie)*ut,j)}else{if(ie.isInstancedBufferAttribute){for(let ae=0;ae<J.locationSize;ae++)p(J.location+ae,ie.meshPerAttribute);U.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ae=0;ae<J.locationSize;ae++)d(J.location+ae);n.bindBuffer(n.ARRAY_BUFFER,pt);for(let ae=0;ae<J.locationSize;ae++)T(J.location+ae,Be/J.locationSize,at,ce,Be*ut,Be/J.locationSize*ae*ut,j)}}else if(V!==void 0){let ce=V[ee];if(ce!==void 0)switch(ce.length){case 2:n.vertexAttrib2fv(J.location,ce);break;case 3:n.vertexAttrib3fv(J.location,ce);break;case 4:n.vertexAttrib4fv(J.location,ce);break;default:n.vertexAttrib1fv(J.location,ce)}}}}y()}function E(){R();for(let U in i){let D=i[U];for(let H in D){let N=D[H];for(let k in N){let O=N[k];for(let V in O)h(O[V].object),delete O[V];delete N[k]}}delete i[U]}}function w(U){if(i[U.id]===void 0)return;let D=i[U.id];for(let H in D){let N=D[H];for(let k in N){let O=N[k];for(let V in O)h(O[V].object),delete O[V];delete N[k]}}delete i[U.id]}function C(U){for(let D in i){let H=i[D];for(let N in H){let k=H[N];if(k[U.id]===void 0)continue;let O=k[U.id];for(let V in O)h(O[V].object),delete O[V];delete k[U.id]}}}function M(U){for(let D in i){let H=i[D],N=U.isInstancedMesh===!0?U.id:0,k=H[N];if(k!==void 0){for(let O in k){let V=k[O];for(let ee in V)h(V[ee].object),delete V[ee];delete k[O]}delete H[N],Object.keys(H).length===0&&delete i[D]}}}function R(){P(),a=!0,r!==s&&(r=s,l(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:P,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfObject:M,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:d,disableUnusedAttributes:y}}function Qg(n,e,t){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function a(c,l,h){h!==0&&(n.drawArraysInstanced(i,c,l,h),t.update(l,i,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,h);let f=0;for(let m=0;m<h;m++)f+=l[m];t.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function ex(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==Un&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let M=C===Wn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==yn&&C!==Nn&&!M&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(qe("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),d=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:x,maxTextureSize:_,maxCubemapSize:d,maxAttributes:p,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:v,maxSamples:E,samples:w}}function tx(n){let e=this,t=null,i=0,s=!1,r=!1,a=new gn,o=new $e,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let m=u.length!==0||f||i!==0||s;return s=f,i=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,m){let x=u.clippingPlanes,_=u.clipIntersection,d=u.clipShadows,p=n.get(u);if(!s||x===null||x.length===0||r&&!d)r?h(null):l();else{let y=r?0:i,T=y*4,v=p.clippingState||null;c.value=v,v=h(x,f,T,m);for(let E=0;E!==T;++E)v[E]=t[E];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,m,x){let _=u!==null?u.length:0,d=null;if(_!==0){if(d=c.value,x!==!0||d===null){let p=m+_*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(d===null||d.length<p)&&(d=new Float32Array(p));for(let T=0,v=m;T!==_;++T,v+=4)a.copy(u[T]).applyMatrix4(y,o),a.normal.toArray(d,v),d[v+3]=a.constant}c.value=d,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,d}}var cr=4,nx=6,ix=20,sx=256,ga=new nr,Xf=new ge,yh=null,vh=0,Mh=0,Sh=!1,rx=new L,vs=new L,hr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=rx}=r;yh=this._renderer.getRenderTarget(),vh=this._renderer.getActiveCubeFace(),Mh=this._renderer.getActiveMipmapLevel(),Sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(yh,vh,Mh),this._renderer.xr.enabled=Sh,e.scissorTest=!1,or(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qi||e.mapping===_s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yh=this._renderer.getRenderTarget(),vh=this._renderer.getActiveCubeFace(),Mh=this._renderer.getActiveMipmapLevel(),Sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:Wn,format:Un,colorSpace:Lr,depthBuffer:!1},s=qf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qf(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=ax(r)),this._blurMaterial=cx(r,e,t),this._ggxMaterial=ox(r,e,t)}return s}_compileMaterial(e){let t=new Q(new Ft,e);this._renderer.compile(t,ga)}_sceneToCubeUV(e,t,i,s,r){let c=new tn(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,m=u.toneMapping;u.getClearColor(Xf),u.toneMapping=Gn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Q(new oi,new Gt({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,d=_.material,p=!1,y=e.background;y?y.isColor&&(d.color.copy(y),e.background=null,p=!0):(d.color.copy(Xf),p=!0);for(let T=0;T<6;T++){let v=T%3;v===0?(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[T],r.y,r.z)):v===1?(c.up.set(0,0,l[T]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[T],r.z)):(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[T]));let E=this._cubeSize;or(s,v*E,T>2?E:0,E,E),u.setRenderTarget(s),p&&u.render(_,c),u.render(e,c)}u.toneMapping=m,u.autoClear=f,e.background=y}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Qi||e.mapping===_s;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;or(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,ga)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let c=a.uniforms,l=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),f=l*1.25,m=u*f,{_lodMax:x}=this,_=this._sizeLods[i],d=3*_*(i>x-cr?i-x+cr:0),p=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=m,c.mipInt.value=x-t,or(r,d,p,3*_,2*_),s.setRenderTarget(r),s.render(o,ga),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=x-i,or(e,d,p,3*_,2*_),s.setRenderTarget(e),s.render(o,ga)}_blur(e,t,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,a),this._blurPass(r,e,i,i,a)}_blurPass(e,t,i,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-i;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-cr?s-this._lodMax+cr:0),f=4*(this._cubeSize-h);or(t,u,f,3*h,2*h),a.setRenderTarget(t),a.render(c,ga)}};function ax(n){let e=[],t=[],i=n,s=n-cr+1+nx;for(let r=0;r<s;r++){let a=Math.pow(2,i);e.push(a);let o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],u=6,f=6,m=3,x=new Float32Array(m*f*u),_=new Float32Array(m*f*u);for(let p=0;p<u;p++){let y=p%3*2/3-1,T=p>2?0:-1,v=[y,T,0,y+2/3,T,0,y+2/3,T+1,0,y,T,0,y+2/3,T+1,0,y,T+1,0];x.set(v,m*f*p);for(let E=0;E<f;E++){let w=h[E*2]*2-1,C=h[E*2+1]*2-1;p===0?vs.set(1,C,w):p===1?vs.set(-w,1,-C):p===2?vs.set(-w,C,1):p===3?vs.set(-1,C,-w):p===4?vs.set(-w,-1,C):vs.set(w,C,-1),vs.toArray(_,(p*f+E)*m)}}let d=new Ft;d.setAttribute("position",new xn(x,m)),d.setAttribute("outputDirection",new xn(_,m)),t.push(new Q(d,null)),i>cr&&i--}return{lodMeshes:t,sizeLods:e}}function qf(n,e,t){let i=new _n(n,e,t);return i.texture.mapping=oa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function or(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function ox(n,e,t){return new Tn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:sx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:zc(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function cx(n,e,t){return new Tn({name:"SphericalGaussianBlur",defines:{SAMPLES:ix,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:zc(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Yf(){return new Tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zc(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Zf(){return new Tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function zc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Bc=class extends _n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Wr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new oi(5,5,5),r=new Tn({name:"CubemapFromEquirect",uniforms:ys(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xt,blending:hi});r.uniforms.tEquirect.value=t;let a=new Q(s,r),o=t.minFilter;return t.minFilter===es&&(t.minFilter=rn),new Wo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}};function lx(n){let e=new WeakMap,t=new WeakMap,i=null;function s(f,m=!1){return f==null?null:m?a(f):r(f)}function r(f){if(f&&f.isTexture){let m=f.mapping;if(m===Zo||m===Jo)if(e.has(f)){let x=e.get(f).texture;return o(x,f.mapping)}else{let x=f.image;if(x&&x.height>0){let _=new Bc(x.height);return _.fromEquirectangularTexture(n,f),e.set(f,_),f.addEventListener("dispose",l),o(_.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){let m=f.mapping,x=m===Zo||m===Jo,_=m===Qi||m===_s;if(x||_){let d=t.get(f),p=d!==void 0?d.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return i===null&&(i=new hr(n)),d=x?i.fromEquirectangular(f,d):i.fromCubemap(f,d),d.texture.pmremVersion=f.pmremVersion,t.set(f,d),d.texture;if(d!==void 0)return d.texture;{let y=f.image;return x&&y&&y.height>0||_&&y&&c(y)?(i===null&&(i=new hr(n)),d=x?i.fromEquirectangular(f):i.fromCubemap(f),d.texture.pmremVersion=f.pmremVersion,t.set(f,d),f.addEventListener("dispose",h),d.texture):null}}}return f}function o(f,m){return m===Zo?f.mapping=Qi:m===Jo&&(f.mapping=_s),f}function c(f){let m=0,x=6;for(let _=0;_<x;_++)f[_]!==void 0&&m++;return m===x}function l(f){let m=f.target;m.removeEventListener("dispose",l);let x=e.get(m);x!==void 0&&(e.delete(m),x.dispose())}function h(f){let m=f.target;m.removeEventListener("dispose",h);let x=t.get(m);x!==void 0&&(t.delete(m),x.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function hx(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&us("WebGLRenderer: "+i+" extension not supported."),s}}}function ux(n,e,t,i){let s={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let x in f.attributes)e.remove(f.attributes[x]);f.removeEventListener("dispose",a),delete s[f.id];let m=r.get(f);m&&(e.remove(m),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function c(u){let f=u.attributes;for(let m in f)e.update(f[m],n.ARRAY_BUFFER)}function l(u){let f=[],m=u.index,x=u.attributes.position,_=0;if(x===void 0)return;if(m!==null){let y=m.array;_=m.version;for(let T=0,v=y.length;T<v;T+=3){let E=y[T+0],w=y[T+1],C=y[T+2];f.push(E,w,w,C,C,E)}}else{let y=x.array;_=x.version;for(let T=0,v=y.length/3-1;T<v;T+=3){let E=T+0,w=T+1,C=T+2;f.push(E,w,w,C,C,E)}}let d=new(x.count>=65535?Br:Or)(f,1);d.version=_;let p=r.get(u);p&&e.remove(p),r.set(u,d)}function h(u){let f=r.get(u);if(f){let m=u.index;m!==null&&f.version<m.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function fx(n,e,t){let i;function s(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,f){n.drawElements(i,f,r,u*a),t.update(f,i,1)}function l(u,f,m){m!==0&&(n.drawElementsInstanced(i,f,r,u*a,m),t.update(f,i,m))}function h(u,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,m);let _=0;for(let d=0;d<m;d++)_+=f[d];t.update(_,i,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function dx(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:Xe("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function px(n,e,t){let i=new WeakMap,s=new Dt;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(o);if(f===void 0||f.count!==u){let R=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",R)};f!==void 0&&f.texture.dispose();let m=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],T=0;m===!0&&(T=1),x===!0&&(T=2),_===!0&&(T=3);let v=o.attributes.position.count*T,E=1;v>e.maxTextureSize&&(E=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let w=new Float32Array(v*E*4*u),C=new Fr(w,v,E,u);C.type=Nn,C.needsUpdate=!0;let M=T*4;for(let P=0;P<u;P++){let U=d[P],D=p[P],H=y[P],N=v*E*4*P;for(let k=0;k<U.count;k++){let O=k*M;m===!0&&(s.fromBufferAttribute(U,k),w[N+O+0]=s.x,w[N+O+1]=s.y,w[N+O+2]=s.z,w[N+O+3]=0),x===!0&&(s.fromBufferAttribute(D,k),w[N+O+4]=s.x,w[N+O+5]=s.y,w[N+O+6]=s.z,w[N+O+7]=0),_===!0&&(s.fromBufferAttribute(H,k),w[N+O+8]=s.x,w[N+O+9]=s.y,w[N+O+10]=s.z,w[N+O+11]=H.itemSize===4?s.w:1)}}f={count:u,texture:C,size:new ue(v,E)},i.set(o,f),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let m=0;for(let _=0;_<l.length;_++)m+=l[_];let x=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(n,"morphTargetBaseInfluence",x),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function mx(n,e,t,i,s){let r=new WeakMap;function a(l){let h=s.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let m=l.skeleton;r.get(m)!==h&&(m.update(),r.set(m,h))}return f}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var gx={[Zl]:"LINEAR_TONE_MAPPING",[Jl]:"REINHARD_TONE_MAPPING",[$l]:"CINEON_TONE_MAPPING",[Kl]:"ACES_FILMIC_TONE_MAPPING",[Ql]:"AGX_TONE_MAPPING",[aa]:"NEUTRAL_TONE_MAPPING",[jl]:"CUSTOM_TONE_MAPPING"};function xx(n,e,t,i,s,r){let a=new _n(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new Ft;l.setAttribute("position",new st([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new st([0,2,0,0,2,0],2));let h=new Po({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Q(l,h),f=new nr(-1,1,1,-1,0,1),m=null,x=null,_=!1,d,p=null,y=[],T=!1;this.setSize=function(v,E){a.setSize(v,E),o!==null&&o.setSize(v,E),c!==null&&c.setSize(v,E);for(let w=0;w<y.length;w++){let C=y[w];C.setSize&&C.setSize(v,E)}},this.setEffects=function(v){y=v,T=y.length>0&&y[0].isRenderPass===!0;let E=a.width,w=a.height;y.length>0&&o===null&&(o=new _n(E,w,{type:Wn,depthBuffer:!1,stencilBuffer:!1}),c=new _n(E,w,{type:Wn,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<y.length;C++){let M=y[C];M.setSize&&M.setSize(E,w)}},this.begin=function(v,E){if(_||v.toneMapping===Gn&&y.length===0)return!1;if(p=E,E!==null){let w=E.width,C=E.height;(a.width!==w||a.height!==C)&&this.setSize(w,C)}return T===!1&&v.setRenderTarget(a),d=v.toneMapping,v.toneMapping=Gn,!0},this.hasRenderPass=function(){return T},this.end=function(v,E){v.toneMapping=d,_=!0;let w=a,C=o;for(let M=0;M<y.length;M++){let R=y[M];R.enabled!==!1&&(R.render(v,C,w,E),R.needsSwap!==!1&&(w=C,C=C===o?c:o))}if(m!==v.outputColorSpace||x!==v.toneMapping){m=v.outputColorSpace,x=v.toneMapping,h.defines={},lt.getTransfer(m)===Mt&&(h.defines.SRGB_TRANSFER="");let M=gx[x];M&&(h.defines[M]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,v.setRenderTarget(p),v.render(u,f),p=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var pd=new pn,wh=new Yi(1,1),md=new Fr,gd=new bo,xd=new Wr,Jf=[],$f=[],Kf=new Float32Array(16),jf=new Float32Array(9),Qf=new Float32Array(4);function ur(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Jf[s];if(r===void 0&&(r=new Float32Array(s),Jf[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function jt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Qt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function kc(n,e){let t=$f[e];t===void 0&&(t=new Int32Array(e),$f[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function _x(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function yx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2fv(this.addr,e),Qt(t,e)}}function vx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;n.uniform3fv(this.addr,e),Qt(t,e)}}function Mx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4fv(this.addr,e),Qt(t,e)}}function Sx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Qt(t,e)}else{if(jt(t,i))return;Qf.set(i),n.uniformMatrix2fv(this.addr,!1,Qf),Qt(t,i)}}function bx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Qt(t,e)}else{if(jt(t,i))return;jf.set(i),n.uniformMatrix3fv(this.addr,!1,jf),Qt(t,i)}}function Ex(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Qt(t,e)}else{if(jt(t,i))return;Kf.set(i),n.uniformMatrix4fv(this.addr,!1,Kf),Qt(t,i)}}function wx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Tx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2iv(this.addr,e),Qt(t,e)}}function Ax(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;n.uniform3iv(this.addr,e),Qt(t,e)}}function Rx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4iv(this.addr,e),Qt(t,e)}}function Cx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Ix(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2uiv(this.addr,e),Qt(t,e)}}function Px(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;n.uniform3uiv(this.addr,e),Qt(t,e)}}function Lx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4uiv(this.addr,e),Qt(t,e)}}function Dx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(wh.compareFunction=t.isReversedDepthBuffer()?Uc:Nc,r=wh):r=pd,t.setTexture2D(e||r,s)}function Nx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||gd,s)}function Ux(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||xd,s)}function Fx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||md,s)}function Ox(n){switch(n){case 5126:return _x;case 35664:return yx;case 35665:return vx;case 35666:return Mx;case 35674:return Sx;case 35675:return bx;case 35676:return Ex;case 5124:case 35670:return wx;case 35667:case 35671:return Tx;case 35668:case 35672:return Ax;case 35669:case 35673:return Rx;case 5125:return Cx;case 36294:return Ix;case 36295:return Px;case 36296:return Lx;case 35678:case 36198:case 36298:case 36306:case 35682:return Dx;case 35679:case 36299:case 36307:return Nx;case 35680:case 36300:case 36308:case 36293:return Ux;case 36289:case 36303:case 36311:case 36292:return Fx}}function Bx(n,e){n.uniform1fv(this.addr,e)}function Hx(n,e){let t=ur(e,this.size,2);n.uniform2fv(this.addr,t)}function zx(n,e){let t=ur(e,this.size,3);n.uniform3fv(this.addr,t)}function kx(n,e){let t=ur(e,this.size,4);n.uniform4fv(this.addr,t)}function Gx(n,e){let t=ur(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Vx(n,e){let t=ur(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Wx(n,e){let t=ur(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Xx(n,e){n.uniform1iv(this.addr,e)}function qx(n,e){n.uniform2iv(this.addr,e)}function Yx(n,e){n.uniform3iv(this.addr,e)}function Zx(n,e){n.uniform4iv(this.addr,e)}function Jx(n,e){n.uniform1uiv(this.addr,e)}function $x(n,e){n.uniform2uiv(this.addr,e)}function Kx(n,e){n.uniform3uiv(this.addr,e)}function jx(n,e){n.uniform4uiv(this.addr,e)}function Qx(n,e,t){let i=this.cache,s=e.length,r=kc(t,s);jt(i,r)||(n.uniform1iv(this.addr,r),Qt(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=wh:a=pd;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function e_(n,e,t){let i=this.cache,s=e.length,r=kc(t,s);jt(i,r)||(n.uniform1iv(this.addr,r),Qt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||gd,r[a])}function t_(n,e,t){let i=this.cache,s=e.length,r=kc(t,s);jt(i,r)||(n.uniform1iv(this.addr,r),Qt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||xd,r[a])}function n_(n,e,t){let i=this.cache,s=e.length,r=kc(t,s);jt(i,r)||(n.uniform1iv(this.addr,r),Qt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||md,r[a])}function i_(n){switch(n){case 5126:return Bx;case 35664:return Hx;case 35665:return zx;case 35666:return kx;case 35674:return Gx;case 35675:return Vx;case 35676:return Wx;case 5124:case 35670:return Xx;case 35667:case 35671:return qx;case 35668:case 35672:return Yx;case 35669:case 35673:return Zx;case 5125:return Jx;case 36294:return $x;case 36295:return Kx;case 36296:return jx;case 35678:case 36198:case 36298:case 36306:case 35682:return Qx;case 35679:case 36299:case 36307:return e_;case 35680:case 36300:case 36308:case 36293:return t_;case 36289:case 36303:case 36311:case 36292:return n_}}var Th=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Ox(t.type)}},Ah=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=i_(t.type)}},Rh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},bh=/(\w+)(\])?(\[|\.)?/g;function ed(n,e){n.seq.push(e),n.map[e.id]=e}function s_(n,e,t){let i=n.name,s=i.length;for(bh.lastIndex=0;;){let r=bh.exec(i),a=bh.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){ed(t,l===void 0?new Th(o,n,e):new Ah(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new Rh(o),ed(t,u)),t=u}}}var lr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);s_(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function td(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var r_=37297,a_=0;function o_(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var nd=new $e;function c_(n){lt._getMatrix(nd,lt.workingColorSpace,n);let e=`mat3( ${nd.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(n)){case Dr:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return qe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function id(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+o_(n.getShaderSource(e),o)}else return r}function l_(n,e){let t=c_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var h_={[Zl]:"Linear",[Jl]:"Reinhard",[$l]:"Cineon",[Kl]:"ACESFilmic",[Ql]:"AgX",[aa]:"Neutral",[jl]:"Custom"};function u_(n,e){let t=h_[e];return t===void 0?(qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Oc=new L;function f_(){lt.getLuminanceCoefficients(Oc);let n=Oc.x.toFixed(4),e=Oc.y.toFixed(4),t=Oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function d_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_a).join(`
`)}function p_(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function m_(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function _a(n){return n!==""}function sd(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var g_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ch(n){return n.replace(g_,__)}var x_=new Map;function __(n,e){let t=nt[e];if(t===void 0){let i=x_.get(e);if(i!==void 0)t=nt[i],qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ch(t)}var y_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ad(n){return n.replace(y_,v_)}function v_(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function od(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var M_={[gs]:"SHADOWMAP_TYPE_PCF",[ir]:"SHADOWMAP_TYPE_VSM"};function S_(n){return M_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var b_={[Qi]:"ENVMAP_TYPE_CUBE",[_s]:"ENVMAP_TYPE_CUBE",[oa]:"ENVMAP_TYPE_CUBE_UV"};function E_(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":b_[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var w_={[_s]:"ENVMAP_MODE_REFRACTION"};function T_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":w_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var A_={[Yo]:"ENVMAP_BLENDING_MULTIPLY",[vf]:"ENVMAP_BLENDING_MIX",[Mf]:"ENVMAP_BLENDING_ADD"};function R_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":A_[n.combine]||"ENVMAP_BLENDING_NONE"}function C_(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function I_(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=S_(t),l=E_(t),h=T_(t),u=R_(t),f=C_(t),m=d_(t),x=p_(r),_=s.createProgram(),d,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(_a).join(`
`),d.length>0&&(d+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(_a).join(`
`),p.length>0&&(p+=`
`)):(d=[od(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_a).join(`
`),p=[od(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gn?"#define TONE_MAPPING":"",t.toneMapping!==Gn?nt.tonemapping_pars_fragment:"",t.toneMapping!==Gn?u_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,l_("linearToOutputTexel",t.outputColorSpace),f_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_a).join(`
`)),a=Ch(a),a=sd(a,t),a=rd(a,t),o=Ch(o),o=sd(o,t),o=rd(o,t),a=ad(a),o=ad(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,d=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,p=["#define varying in",t.glslVersion===ch?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ch?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let T=y+d+a,v=y+p+o,E=td(s,s.VERTEX_SHADER,T),w=td(s,s.FRAGMENT_SHADER,v);s.attachShader(_,E),s.attachShader(_,w),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(U){if(n.debug.checkShaderErrors){let D=s.getProgramInfoLog(_)||"",H=s.getShaderInfoLog(E)||"",N=s.getShaderInfoLog(w)||"",k=D.trim(),O=H.trim(),V=N.trim(),ee=!0,J=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(ee=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,E,w);else{let ie=id(s,E,"vertex"),ce=id(s,w,"fragment");Xe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+k+`
`+ie+`
`+ce)}else k!==""?qe("WebGLProgram: Program Info Log:",k):(O===""||V==="")&&(J=!1);J&&(U.diagnostics={runnable:ee,programLog:k,vertexShader:{log:O,prefix:d},fragmentShader:{log:V,prefix:p}})}s.deleteShader(E),s.deleteShader(w),M=new lr(s,_),R=m_(s,_)}let M;this.getUniforms=function(){return M===void 0&&C(this),M};let R;this.getAttributes=function(){return R===void 0&&C(this),R};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(_,r_)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=a_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=w,this}var P_=0,Ih=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Ph(e),t.set(e,i)),i}},Ph=class{constructor(e){this.id=P_++,this.code=e,this.usedTimes=0}};function L_(n){return n===ns||n===da||n===pa}function D_(n,e,t,i,s,r){let a=new Js,o=new Ih,c=new Set,l=[],h=new Map,u=i.logarithmicDepthBuffer,f=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function _(M,R,P,U,D,H){let N=U.fog,k=D.geometry,O=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?U.environment:null,V=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,ee=e.get(M.envMap||O,V),J=ee&&ee.mapping===oa?ee.image.height:null,ie=m[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&qe("WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let ce=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Be=ce!==void 0?ce.length:0,De=0;k.morphAttributes.position!==void 0&&(De=1),k.morphAttributes.normal!==void 0&&(De=2),k.morphAttributes.color!==void 0&&(De=3);let pt,at,ut,j;if(ie){let Ct=fi[ie];pt=Ct.vertexShader,at=Ct.fragmentShader}else{pt=M.vertexShader,at=M.fragmentShader;let Ct=o.getVertexShaderStage(M),yt=o.getFragmentShaderStage(M);o.update(M,Ct,yt),ut=Ct.id,j=yt.id}let ae=n.getRenderTarget(),Te=n.state.buffers.depth.getReversed(),Ye=D.isInstancedMesh===!0,Ie=D.isBatchedMesh===!0,Ze=!!M.map,bt=!!M.matcap,oe=!!ee,de=!!M.aoMap,pe=!!M.lightMap,me=!!M.bumpMap&&M.wireframe===!1,ye=!!M.normalMap,Ve=!!M.displacementMap,Ge=!!M.emissiveMap,Je=!!M.metalnessMap,Ke=!!M.roughnessMap,F=M.anisotropy>0,_t=M.clearcoat>0,ot=M.dispersion>0,I=M.retroreflectivity>0,S=M.iridescence>0,G=M.sheen>0,q=M.transmission>0,$=F&&!!M.anisotropyMap,xe=_t&&!!M.clearcoatMap,_e=_t&&!!M.clearcoatNormalMap,K=_t&&!!M.clearcoatRoughnessMap,se=S&&!!M.iridescenceMap,ve=S&&!!M.iridescenceThicknessMap,He=G&&!!M.sheenColorMap,Ee=G&&!!M.sheenRoughnessMap,Me=!!M.specularMap,ze=!!M.specularColorMap,We=!!M.specularIntensityMap,Qe=q&&!!M.transmissionMap,z=q&&!!M.thicknessMap,Se=!!M.gradientMap,ne=!!M.alphaMap,be=M.alphaTest>0,Ce=!!M.alphaHash,he=!!M.extensions,ke=Gn;M.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(ke=n.toneMapping);let Fe={shaderID:ie,shaderType:M.type,shaderName:M.name,vertexShader:pt,fragmentShader:at,defines:M.defines,customVertexShaderID:ut,customFragmentShaderID:j,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Ie,batchingColor:Ie&&D._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&D.instanceColor!==null,instancingMorph:Ye&&D.morphTexture!==null,outputColorSpace:ae===null?n.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:lt.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:Ze,matcap:bt,envMap:oe,envMapMode:oe&&ee.mapping,envMapCubeUVHeight:J,aoMap:de,lightMap:pe,bumpMap:me,normalMap:ye,displacementMap:Ve,emissiveMap:Ge,normalMapObjectSpace:ye&&M.normalMapType===Ef,normalMapTangentSpace:ye&&M.normalMapType===ma,packedNormalMap:ye&&M.normalMapType===ma&&L_(M.normalMap.format),metalnessMap:Je,roughnessMap:Ke,anisotropy:F,anisotropyMap:$,clearcoat:_t,clearcoatMap:xe,clearcoatNormalMap:_e,clearcoatRoughnessMap:K,dispersion:ot,retroreflection:I,iridescence:S,iridescenceMap:se,iridescenceThicknessMap:ve,sheen:G,sheenColorMap:He,sheenRoughnessMap:Ee,specularMap:Me,specularColorMap:ze,specularIntensityMap:We,transmission:q,transmissionMap:Qe,thicknessMap:z,gradientMap:Se,opaque:M.transparent===!1&&M.blending===sr&&M.alphaToCoverage===!1,alphaMap:ne,alphaTest:be,alphaHash:Ce,combine:M.combine,mapUv:Ze&&x(M.map.channel),aoMapUv:de&&x(M.aoMap.channel),lightMapUv:pe&&x(M.lightMap.channel),bumpMapUv:me&&x(M.bumpMap.channel),normalMapUv:ye&&x(M.normalMap.channel),displacementMapUv:Ve&&x(M.displacementMap.channel),emissiveMapUv:Ge&&x(M.emissiveMap.channel),metalnessMapUv:Je&&x(M.metalnessMap.channel),roughnessMapUv:Ke&&x(M.roughnessMap.channel),anisotropyMapUv:$&&x(M.anisotropyMap.channel),clearcoatMapUv:xe&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:_e&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:He&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&x(M.sheenRoughnessMap.channel),specularMapUv:Me&&x(M.specularMap.channel),specularColorMapUv:ze&&x(M.specularColorMap.channel),specularIntensityMapUv:We&&x(M.specularIntensityMap.channel),transmissionMapUv:Qe&&x(M.transmissionMap.channel),thicknessMapUv:z&&x(M.thicknessMap.channel),alphaMapUv:ne&&x(M.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(ye||F),vertexNormals:!!k.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!k.attributes.uv&&(Ze||ne),fog:!!N,useFog:M.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||k.attributes.normal===void 0&&ye===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Te,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Be,morphTextureStride:De,numSunLights:R.sun.length,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numSunLightShadows:R.sunShadowMap.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:ke,decodeVideoTexture:Ze&&M.map.isVideoTexture===!0&&lt.getTransfer(M.map.colorSpace)===Mt,decodeVideoTextureEmissive:Ge&&M.emissiveMap.isVideoTexture===!0&&lt.getTransfer(M.emissiveMap.colorSpace)===Mt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Rt,flipSided:M.side===Xt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:he&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(he&&M.extensions.multiDraw===!0||Ie)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Fe.vertexUv1s=c.has(1),Fe.vertexUv2s=c.has(2),Fe.vertexUv3s=c.has(3),c.clear(),Fe}function d(M){let R=[];if(M.shaderID?R.push(M.shaderID):(R.push(M.customVertexShaderID),R.push(M.customFragmentShaderID)),M.defines!==void 0)for(let P in M.defines)R.push(P),R.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(p(R,M),y(R,M),R.push(n.outputColorSpace)),R.push(M.customProgramCacheKey),R.join()}function p(M,R){M.push(R.precision),M.push(R.outputColorSpace),M.push(R.envMapMode),M.push(R.envMapCubeUVHeight),M.push(R.mapUv),M.push(R.alphaMapUv),M.push(R.lightMapUv),M.push(R.aoMapUv),M.push(R.bumpMapUv),M.push(R.normalMapUv),M.push(R.displacementMapUv),M.push(R.emissiveMapUv),M.push(R.metalnessMapUv),M.push(R.roughnessMapUv),M.push(R.anisotropyMapUv),M.push(R.clearcoatMapUv),M.push(R.clearcoatNormalMapUv),M.push(R.clearcoatRoughnessMapUv),M.push(R.iridescenceMapUv),M.push(R.iridescenceThicknessMapUv),M.push(R.sheenColorMapUv),M.push(R.sheenRoughnessMapUv),M.push(R.specularMapUv),M.push(R.specularColorMapUv),M.push(R.specularIntensityMapUv),M.push(R.transmissionMapUv),M.push(R.thicknessMapUv),M.push(R.combine),M.push(R.fogExp2),M.push(R.sizeAttenuation),M.push(R.morphTargetsCount),M.push(R.morphAttributeCount),M.push(R.numSunLights),M.push(R.numDirLights),M.push(R.numPointLights),M.push(R.numSpotLights),M.push(R.numSpotLightMaps),M.push(R.numHemiLights),M.push(R.numRectAreaLights),M.push(R.numSunLightShadows),M.push(R.numDirLightShadows),M.push(R.numPointLightShadows),M.push(R.numSpotLightShadows),M.push(R.numSpotLightShadowsWithMaps),M.push(R.numLightProbes),M.push(R.shadowMapType),M.push(R.toneMapping),M.push(R.numClippingPlanes),M.push(R.numClipIntersection),M.push(R.depthPacking)}function y(M,R){a.disableAll(),R.instancing&&a.enable(0),R.instancingColor&&a.enable(1),R.instancingMorph&&a.enable(2),R.matcap&&a.enable(3),R.envMap&&a.enable(4),R.normalMapObjectSpace&&a.enable(5),R.normalMapTangentSpace&&a.enable(6),R.clearcoat&&a.enable(7),R.iridescence&&a.enable(8),R.alphaTest&&a.enable(9),R.vertexColors&&a.enable(10),R.vertexAlphas&&a.enable(11),R.vertexUv1s&&a.enable(12),R.vertexUv2s&&a.enable(13),R.vertexUv3s&&a.enable(14),R.vertexTangents&&a.enable(15),R.anisotropy&&a.enable(16),R.alphaHash&&a.enable(17),R.batching&&a.enable(18),R.dispersion&&a.enable(19),R.retroreflection&&a.enable(24),R.batchingColor&&a.enable(20),R.gradientMap&&a.enable(21),R.packedNormalMap&&a.enable(22),R.vertexNormals&&a.enable(23),M.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.reversedDepthBuffer&&a.enable(4),R.skinning&&a.enable(5),R.morphTargets&&a.enable(6),R.morphNormals&&a.enable(7),R.morphColors&&a.enable(8),R.premultipliedAlpha&&a.enable(9),R.shadowMapEnabled&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),R.decodeVideoTextureEmissive&&a.enable(20),R.alphaToCoverage&&a.enable(21),R.numLightProbeGrids>0&&a.enable(22),R.hasPositionAttribute&&a.enable(23),M.push(a.mask)}function T(M){let R=m[M.type],P;if(R){let U=fi[R];P=Gf.clone(U.uniforms)}else P=M.uniforms;return P}function v(M,R){let P=h.get(R);return P!==void 0?++P.usedTimes:(P=new I_(n,R,M,s),l.push(P),h.set(R,P)),P}function E(M){if(--M.usedTimes===0){let R=l.indexOf(M);l[R]=l[l.length-1],l.pop(),h.delete(M.cacheKey),M.destroy()}}function w(M){o.remove(M)}function C(){o.dispose()}return{getParameters:_,getProgramCacheKey:d,getUniforms:T,acquireProgram:v,releaseProgram:E,releaseShaderCache:w,programs:l,dispose:C}}function N_(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function U_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function cd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ld(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(f){let m=0;return f.isInstancedMesh&&(m+=2),f.isSkinnedMesh&&(m+=1),m}function o(f,m,x,_,d,p){let y=n[e];return y===void 0?(y={id:f.id,object:f,geometry:m,material:x,materialVariant:a(f),groupOrder:_,renderOrder:f.renderOrder,z:d,group:p},n[e]=y):(y.id=f.id,y.object=f,y.geometry=m,y.material=x,y.materialVariant=a(f),y.groupOrder=_,y.renderOrder=f.renderOrder,y.z=d,y.group=p),e++,y}function c(f,m,x,_,d,p,y){y.reversedDepth===!0&&(d=-d);let T=o(f,m,x,_,d,p);x.transmission>0?i.push(T):x.transparent===!0?s.push(T):t.push(T)}function l(f,m,x,_,d,p){let y=o(f,m,x,_,d,p);x.transmission>0?i.unshift(y):x.transparent===!0?s.unshift(y):t.unshift(y)}function h(f,m){t.length>1&&t.sort(f||U_),i.length>1&&i.sort(m||cd),s.length>1&&s.sort(m||cd)}function u(){for(let f=e,m=n.length;f<m;f++){let x=n[f];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:u,sort:h}}function F_(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new ld,n.set(i,[a])):s>=r.length?(a=new ld,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function O_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new ge};break;case"SpotLight":t={position:new L,direction:new L,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":t={color:new ge,position:new L,halfWidth:new L,halfHeight:new L};break}return n[e.id]=t,t}}}function B_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var H_=0;function z_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function k_(n){let e=new O_,t=B_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new L);let s=new L,r=new mt,a=new mt;function o(l){let h=0,u=0,f=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let m=0,x=0,_=0,d=0,p=0,y=0,T=0,v=0,E=0,w=0,C=0,M=0,R=0,P=0;l.sort(z_);for(let D=0,H=l.length;D<H;D++){let N=l[D],k=N.color,O=N.intensity,V=N.distance,ee=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===ns?ee=N.shadow.map.texture:ee=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=k.r*O,u+=k.g*O,f+=k.b*O;else if(N.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(N.sh.coefficients[J],O);P++}else if(N.isSunLight){let J=e.get(N);if(J.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let ie=N.shadow,ce=t.get(N);ce.shadowIntensity=ie.intensity,ce.shadowBias=ie.bias,ce.shadowNormalBias=ie.normalBias,ce.shadowRadius=ie.radius,ce.shadowMapSize.copy(ie.mapSize).multiply(ie.getFrameExtents()),i.sunShadow[x]=ce,i.sunShadowMap[x]=ee;let Be=ie.getViewportCount();for(let De=0;De<Be;De++)i.sunShadowMatrix[_+De]=ie.getMatrix(De),i.sunShadowCascade[_+De]=ie._cascadeData[De];_+=Be,x++}i.sun[m]=J,m++}else if(N.isDirectionalLight){let J=e.get(N);if(J.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let ie=N.shadow,ce=t.get(N);ce.shadowIntensity=ie.intensity,ce.shadowBias=ie.bias,ce.shadowNormalBias=ie.normalBias,ce.shadowRadius=ie.radius,ce.shadowMapSize=ie.mapSize,i.directionalShadow[d]=ce,i.directionalShadowMap[d]=ee,i.directionalShadowMatrix[d]=N.shadow.matrix,E++}i.directional[d]=J,d++}else if(N.isSpotLight){let J=e.get(N);J.position.setFromMatrixPosition(N.matrixWorld),J.color.copy(k).multiplyScalar(O),J.distance=V,J.coneCos=Math.cos(N.angle),J.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),J.decay=N.decay,i.spot[y]=J;let ie=N.shadow;if(N.map&&(i.spotLightMap[M]=N.map,M++,ie.updateMatrices(N),N.castShadow&&R++),i.spotLightMatrix[y]=ie.matrix,N.castShadow){let ce=t.get(N);ce.shadowIntensity=ie.intensity,ce.shadowBias=ie.bias,ce.shadowNormalBias=ie.normalBias,ce.shadowRadius=ie.radius,ce.shadowMapSize=ie.mapSize,i.spotShadow[y]=ce,i.spotShadowMap[y]=ee,C++}y++}else if(N.isRectAreaLight){let J=e.get(N);J.color.copy(k).multiplyScalar(O),J.halfWidth.set(N.width*.5,0,0),J.halfHeight.set(0,N.height*.5,0),i.rectArea[T]=J,T++}else if(N.isPointLight){let J=e.get(N);if(J.color.copy(N.color).multiplyScalar(N.intensity),J.distance=N.distance,J.decay=N.decay,N.castShadow){let ie=N.shadow,ce=t.get(N);ce.shadowIntensity=ie.intensity,ce.shadowBias=ie.bias,ce.shadowNormalBias=ie.normalBias,ce.shadowRadius=ie.radius,ce.shadowMapSize=ie.mapSize,ce.shadowCameraNear=ie.camera.near,ce.shadowCameraFar=ie.camera.far,i.pointShadow[p]=ce,i.pointShadowMap[p]=ee,i.pointShadowMatrix[p]=N.shadow.matrix,w++}i.point[p]=J,p++}else if(N.isHemisphereLight){let J=e.get(N);J.skyColor.copy(N.color).multiplyScalar(O),J.groundColor.copy(N.groundColor).multiplyScalar(O),i.hemi[v]=J,v++}}T>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2):(i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let U=i.hash;(U.sunLength!==m||U.directionalLength!==d||U.pointLength!==p||U.spotLength!==y||U.rectAreaLength!==T||U.hemiLength!==v||U.numSunShadows!==x||U.numDirectionalShadows!==E||U.numPointShadows!==w||U.numSpotShadows!==C||U.numSpotMaps!==M||U.numLightProbes!==P)&&(i.sun.length=m,i.directional.length=d,i.spot.length=y,i.rectArea.length=T,i.point.length=p,i.hemi.length=v,i.sunShadow.length=x,i.sunShadowMap.length=x,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=C,i.spotShadowMap.length=C,i.spotLightMatrix.length=C+M-R,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=P,U.sunLength=m,U.directionalLength=d,U.pointLength=p,U.spotLength=y,U.rectAreaLength=T,U.hemiLength=v,U.numSunShadows=x,U.numDirectionalShadows=E,U.numPointShadows=w,U.numSpotShadows=C,U.numSpotMaps=M,U.numLightProbes=P,i.version=H_++)}function c(l,h){let u=0,f=0,m=0,x=0,_=0,d=0,p=h.matrixWorldInverse;for(let y=0,T=l.length;y<T;y++){let v=l[y];if(v.isSunLight){let E=i.sun[u];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(p),u++}else if(v.isDirectionalLight){let E=i.directional[f];E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),f++}else if(v.isSpotLight){let E=i.spot[x];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),x++}else if(v.isRectAreaLight){let E=i.rectArea[_];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),a.identity(),r.copy(v.matrixWorld),r.premultiply(p),a.extractRotation(r),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){let E=i.point[m];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),m++}else if(v.isHemisphereLight){let E=i.hemi[d];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(p),d++}}}return{setup:o,setupView:c,state:i}}function hd(n){let e=new k_(n),t=[],i=[],s=[];function r(f){u.camera=f,t.length=0,i.length=0,s.length=0}function a(f){t.push(f)}function o(f){i.push(f)}function c(f){s.push(f)}function l(){e.setup(t)}function h(f){e.setupView(t,f)}let u={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function G_(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new hd(n),e.set(s,[o])):r>=a.length?(o=new hd(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var V_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,W_=`uniform sampler2D shadow_pass;
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
}`,X_=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],q_=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],ud=new mt,xa=new L,Eh=new L;function Y_(n,e,t){let i=new Ks,s=new ue,r=new ue,a=new Dt,o=new Lo,c=new Do,l={},h=t.maxTextureSize,u={[Rn]:Xt,[Xt]:Rn,[Rt]:Rt},f=new Tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:V_,fragmentShader:W_}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let x=new Ft;x.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Q(x,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gs;let p=this.type;this.render=function(w,C,M){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||w.length===0)return;this.type===ef&&(qe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=gs);let R=n.getRenderTarget(),P=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),D=n.state;D.setBlending(hi),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let H=p!==this.type;H&&C.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(k=>k.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,k=w.length;N<k;N++){let O=w[N],V=O.shadow;if(V===void 0){qe("WebGLShadowMap:",O,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let ee=V.getFrameExtents();s.multiply(ee),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ee.x),s.x=r.x*ee.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ee.y),s.y=r.y*ee.y,V.mapSize.y=r.y));let J=n.state.buffers.depth.getReversed();if(V.camera._reversedDepth=J,V.map===null||H===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===ir){if(O.isPointLight){qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new _n(s.x,s.y,{format:ns,type:Wn,minFilter:rn,magFilter:rn,generateMipmaps:!1}),V.map.texture.name=O.name+".shadowMap",V.map.depthTexture=new Yi(s.x,s.y,Nn),V.map.depthTexture.name=O.name+".shadowMapDepth",V.map.depthTexture.format=ni,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=nn,V.map.depthTexture.magFilter=nn}else O.isPointLight?(V.map=new Bc(s.x),V.map.depthTexture=new wo(s.x,Vn)):(V.map=new _n(s.x,s.y),V.map.depthTexture=new Yi(s.x,s.y,Vn)),V.map.depthTexture.name=O.name+".shadowMap",V.map.depthTexture.format=ni,this.type===gs?(V.map.depthTexture.compareFunction=J?Uc:Nc,V.map.depthTexture.minFilter=rn,V.map.depthTexture.magFilter=rn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=nn,V.map.depthTexture.magFilter=nn);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let ie=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();O.isPointLight!==!0&&V.updateMatrices(O,M);for(let ce=0;ce<ie;ce++){let Be=V.getCamera(ce);if(O.isPointLight){let De=V.camera,pt=V.matrix,at=O.distance||De.far;at!==De.far&&(De.far=at,De.updateProjectionMatrix()),xa.setFromMatrixPosition(O.matrixWorld),De.position.copy(xa),Eh.copy(De.position),Eh.add(X_[ce]),De.up.copy(q_[ce]),De.lookAt(Eh),De.updateMatrixWorld(),pt.makeTranslation(-xa.x,-xa.y,-xa.z),ud.multiplyMatrices(De.projectionMatrix,De.matrixWorldInverse),V._frustum.setFromProjectionMatrix(ud,De.coordinateSystem,De.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)n.setRenderTarget(V.map,ce),n.clear();else{ce===0&&(n.setRenderTarget(V.map),n.clear());let De=V.getViewport(ce);a.set(r.x*De.x,r.y*De.y,r.x*De.z,r.y*De.w),D.viewport(a)}i=V.getFrustum(ce),v(C,M,Be,O,this.type)}V.isPointLightShadow!==!0&&this.type===ir&&y(V,M),V.needsUpdate=!1}p=this.type,d.needsUpdate=!1,n.setRenderTarget(R,P,U)};function y(w,C){let M=e.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null?w.mapPass=new _n(s.x,s.y,{format:ns,type:Wn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(C,null,M,f,_,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value.set(w.map.width,w.map.height),m.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(C,null,M,m,_,null)}function T(w,C,M,R){let P=null,U=M.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)P=U;else if(P=M.isPointLight===!0?c:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let D=P.uuid,H=C.uuid,N=l[D];N===void 0&&(N={},l[D]=N);let k=N[H];k===void 0&&(k=P.clone(),N[H]=k,C.addEventListener("dispose",E)),P=k}if(P.visible=C.visible,P.wireframe=C.wireframe,R===ir?P.side=C.shadowSide!==null?C.shadowSide:C.side:P.side=C.shadowSide!==null?C.shadowSide:u[C.side],P.alphaMap=C.alphaMap,P.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,P.map=C.map,P.clipShadows=C.clipShadows,P.clippingPlanes=C.clippingPlanes,P.clipIntersection=C.clipIntersection,P.displacementMap=C.displacementMap,P.displacementScale=C.displacementScale,P.displacementBias=C.displacementBias,P.wireframeLinewidth=C.wireframeLinewidth,P.linewidth=C.linewidth,M.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let D=n.properties.get(P);D.light=M}return P}function v(w,C,M,R,P){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&P===ir)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,w.matrixWorld);let H=e.update(w),N=w.material;if(Array.isArray(N)){let k=H.groups;for(let O=0,V=k.length;O<V;O++){let ee=k[O],J=N[ee.materialIndex];if(J&&J.visible){let ie=T(w,J,R,P);w.onBeforeShadow(n,w,C,M,H,ie,ee),n.renderBufferDirect(M,null,H,ie,w,ee),w.onAfterShadow(n,w,C,M,H,ie,ee)}}}else if(N.visible){let k=T(w,N,R,P);w.onBeforeShadow(n,w,C,M,H,k,null),n.renderBufferDirect(M,null,H,k,w,null),w.onAfterShadow(n,w,C,M,H,k,null)}}let D=w.children;for(let H=0,N=D.length;H<N;H++)v(D[H],C,M,R,P)}function E(w){w.target.removeEventListener("dispose",E);for(let M in l){let R=l[M],P=w.target.uuid;P in R&&(R[P].dispose(),delete R[P])}}}function Z_(n,e){function t(){let z=!1,Se=new Dt,ne=null,be=new Dt(0,0,0,0);return{setMask:function(Ce){ne!==Ce&&!z&&(n.colorMask(Ce,Ce,Ce,Ce),ne=Ce)},setLocked:function(Ce){z=Ce},setClear:function(Ce,he,ke,Fe,Ct){Ct===!0&&(Ce*=Fe,he*=Fe,ke*=Fe),Se.set(Ce,he,ke,Fe),be.equals(Se)===!1&&(n.clearColor(Ce,he,ke,Fe),be.copy(Se))},reset:function(){z=!1,ne=null,be.set(-1,0,0,0)}}}function i(){let z=!1,Se=!1,ne=null,be=null,Ce=null;return{setReversed:function(he){if(Se!==he){let ke=e.get("EXT_clip_control");he?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),Se=he;let Fe=Ce;Ce=null,this.setClear(Fe)}},getReversed:function(){return Se},setTest:function(he){he?ae(n.DEPTH_TEST):Te(n.DEPTH_TEST)},setMask:function(he){ne!==he&&!z&&(n.depthMask(he),ne=he)},setFunc:function(he){if(Se&&(he=Uf[he]),be!==he){switch(he){case ho:n.depthFunc(n.NEVER);break;case uo:n.depthFunc(n.ALWAYS);break;case fo:n.depthFunc(n.LESS);break;case Xs:n.depthFunc(n.LEQUAL);break;case po:n.depthFunc(n.EQUAL);break;case mo:n.depthFunc(n.GEQUAL);break;case go:n.depthFunc(n.GREATER);break;case xo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}be=he}},setLocked:function(he){z=he},setClear:function(he){Ce!==he&&(Ce=he,Se&&(he=1-he),n.clearDepth(he))},reset:function(){z=!1,ne=null,be=null,Ce=null,Se=!1}}}function s(){let z=!1,Se=null,ne=null,be=null,Ce=null,he=null,ke=null,Fe=null,Ct=null;return{setTest:function(yt){z||(yt?ae(n.STENCIL_TEST):Te(n.STENCIL_TEST))},setMask:function(yt){Se!==yt&&!z&&(n.stencilMask(yt),Se=yt)},setFunc:function(yt,On,$n){(ne!==yt||be!==On||Ce!==$n)&&(n.stencilFunc(yt,On,$n),ne=yt,be=On,Ce=$n)},setOp:function(yt,On,$n){(he!==yt||ke!==On||Fe!==$n)&&(n.stencilOp(yt,On,$n),he=yt,ke=On,Fe=$n)},setLocked:function(yt){z=yt},setClear:function(yt){Ct!==yt&&(n.clearStencil(yt),Ct=yt)},reset:function(){z=!1,Se=null,ne=null,be=null,Ce=null,he=null,ke=null,Fe=null,Ct=null}}}let r=new t,a=new i,o=new s,c=new WeakMap,l=new WeakMap,h={},u={},f={},m=new WeakMap,x=[],_=null,d=!1,p=null,y=null,T=null,v=null,E=null,w=null,C=null,M=new ge(0,0,0),R=0,P=!1,U=null,D=null,H=null,N=null,k=null,O=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,ee=0,J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(J)[1]),V=ee>=1):J.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),V=ee>=2);let ie=null,ce={},Be=n.getParameter(n.SCISSOR_BOX),De=n.getParameter(n.VIEWPORT),pt=new Dt().fromArray(Be),at=new Dt().fromArray(De);function ut(z,Se,ne,be){let Ce=new Uint8Array(4),he=n.createTexture();n.bindTexture(z,he),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ke=0;ke<ne;ke++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(Se,0,n.RGBA,1,1,be,0,n.RGBA,n.UNSIGNED_BYTE,Ce):n.texImage2D(Se+ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ce);return he}let j={};j[n.TEXTURE_2D]=ut(n.TEXTURE_2D,n.TEXTURE_2D,1),j[n.TEXTURE_CUBE_MAP]=ut(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[n.TEXTURE_2D_ARRAY]=ut(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),j[n.TEXTURE_3D]=ut(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ae(n.DEPTH_TEST),a.setFunc(Xs),me(!1),ye(Gl),ae(n.CULL_FACE),de(hi);function ae(z){h[z]!==!0&&(n.enable(z),h[z]=!0)}function Te(z){h[z]!==!1&&(n.disable(z),h[z]=!1)}function Ye(z,Se){return f[z]!==Se?(n.bindFramebuffer(z,Se),f[z]=Se,z===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Se),z===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Se),!0):!1}function Ie(z,Se){let ne=x,be=!1;if(z){ne=m.get(Se),ne===void 0&&(ne=[],m.set(Se,ne));let Ce=z.textures;if(ne.length!==Ce.length||ne[0]!==n.COLOR_ATTACHMENT0){for(let he=0,ke=Ce.length;he<ke;he++)ne[he]=n.COLOR_ATTACHMENT0+he;ne.length=Ce.length,be=!0}}else ne[0]!==n.BACK&&(ne[0]=n.BACK,be=!0);be&&n.drawBuffers(ne)}function Ze(z){return _!==z?(n.useProgram(z),_=z,!0):!1}let bt={[xs]:n.FUNC_ADD,[nf]:n.FUNC_SUBTRACT,[sf]:n.FUNC_REVERSE_SUBTRACT};bt[rf]=n.MIN,bt[af]=n.MAX;let oe={[of]:n.ZERO,[cf]:n.ONE,[lf]:n.SRC_COLOR,[ql]:n.SRC_ALPHA,[mf]:n.SRC_ALPHA_SATURATE,[df]:n.DST_COLOR,[uf]:n.DST_ALPHA,[hf]:n.ONE_MINUS_SRC_COLOR,[Yl]:n.ONE_MINUS_SRC_ALPHA,[pf]:n.ONE_MINUS_DST_COLOR,[ff]:n.ONE_MINUS_DST_ALPHA,[gf]:n.CONSTANT_COLOR,[xf]:n.ONE_MINUS_CONSTANT_COLOR,[_f]:n.CONSTANT_ALPHA,[yf]:n.ONE_MINUS_CONSTANT_ALPHA};function de(z,Se,ne,be,Ce,he,ke,Fe,Ct,yt){if(z===hi){d===!0&&(Te(n.BLEND),d=!1);return}if(d===!1&&(ae(n.BLEND),d=!0),z!==tf){if(z!==p||yt!==P){if((y!==xs||E!==xs)&&(n.blendEquation(n.FUNC_ADD),y=xs,E=xs),yt)switch(z){case sr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vl:n.blendFunc(n.ONE,n.ONE);break;case Wl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Xl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Xe("WebGLState: Invalid blending: ",z);break}else switch(z){case sr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Wl:Xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xl:Xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xe("WebGLState: Invalid blending: ",z);break}T=null,v=null,w=null,C=null,M.set(0,0,0),R=0,p=z,P=yt}return}Ce=Ce||Se,he=he||ne,ke=ke||be,(Se!==y||Ce!==E)&&(n.blendEquationSeparate(bt[Se],bt[Ce]),y=Se,E=Ce),(ne!==T||be!==v||he!==w||ke!==C)&&(n.blendFuncSeparate(oe[ne],oe[be],oe[he],oe[ke]),T=ne,v=be,w=he,C=ke),(Fe.equals(M)===!1||Ct!==R)&&(n.blendColor(Fe.r,Fe.g,Fe.b,Ct),M.copy(Fe),R=Ct),p=z,P=!1}function pe(z,Se){z.side===Rt?Te(n.CULL_FACE):ae(n.CULL_FACE);let ne=z.side===Xt;Se&&(ne=!ne),me(ne),z.blending===sr&&z.transparent===!1?de(hi):de(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);let be=z.stencilWrite;o.setTest(be),be&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Ge(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ae(n.SAMPLE_ALPHA_TO_COVERAGE):Te(n.SAMPLE_ALPHA_TO_COVERAGE)}function me(z){U!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),U=z)}function ye(z){z!==ju?(ae(n.CULL_FACE),z!==D&&(z===Gl?n.cullFace(n.BACK):z===Qu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Te(n.CULL_FACE),D=z}function Ve(z){z!==H&&(V&&n.lineWidth(z),H=z)}function Ge(z,Se,ne){z?(ae(n.POLYGON_OFFSET_FILL),(N!==Se||k!==ne)&&(N=Se,k=ne,a.getReversed()&&(Se=-Se),n.polygonOffset(Se,ne))):Te(n.POLYGON_OFFSET_FILL)}function Je(z){z?ae(n.SCISSOR_TEST):Te(n.SCISSOR_TEST)}function Ke(z){z===void 0&&(z=n.TEXTURE0+O-1),ie!==z&&(n.activeTexture(z),ie=z)}function F(z,Se,ne){ne===void 0&&(ie===null?ne=n.TEXTURE0+O-1:ne=ie);let be=ce[ne];be===void 0&&(be={type:void 0,texture:void 0},ce[ne]=be),(be.type!==z||be.texture!==Se)&&(ie!==ne&&(n.activeTexture(ne),ie=ne),n.bindTexture(z,Se||j[z]),be.type=z,be.texture=Se)}function _t(){let z=ce[ie];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function ot(){try{n.compressedTexImage2D(...arguments)}catch(z){Xe("WebGLState:",z)}}function I(){try{n.compressedTexImage3D(...arguments)}catch(z){Xe("WebGLState:",z)}}function S(){try{n.texSubImage2D(...arguments)}catch(z){Xe("WebGLState:",z)}}function G(){try{n.texSubImage3D(...arguments)}catch(z){Xe("WebGLState:",z)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(z){Xe("WebGLState:",z)}}function $(){try{n.compressedTexSubImage3D(...arguments)}catch(z){Xe("WebGLState:",z)}}function xe(){try{n.texStorage2D(...arguments)}catch(z){Xe("WebGLState:",z)}}function _e(){try{n.texStorage3D(...arguments)}catch(z){Xe("WebGLState:",z)}}function K(){try{n.texImage2D(...arguments)}catch(z){Xe("WebGLState:",z)}}function se(){try{n.texImage3D(...arguments)}catch(z){Xe("WebGLState:",z)}}function ve(z){return u[z]!==void 0?u[z]:n.getParameter(z)}function He(z,Se){u[z]!==Se&&(n.pixelStorei(z,Se),u[z]=Se)}function Ee(z){pt.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),pt.copy(z))}function Me(z){at.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),at.copy(z))}function ze(z,Se){let ne=l.get(Se);ne===void 0&&(ne=new WeakMap,l.set(Se,ne));let be=ne.get(z);be===void 0&&(be=n.getUniformBlockIndex(Se,z.name),ne.set(z,be))}function We(z,Se){let be=l.get(Se).get(z);c.get(Se)!==be&&(n.uniformBlockBinding(Se,be,z.__bindingPointIndex),c.set(Se,be))}function Qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},u={},ie=null,ce={},f={},m=new WeakMap,x=[],_=null,d=!1,p=null,y=null,T=null,v=null,E=null,w=null,C=null,M=new ge(0,0,0),R=0,P=!1,U=null,D=null,H=null,N=null,k=null,pt.set(0,0,n.canvas.width,n.canvas.height),at.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ae,disable:Te,bindFramebuffer:Ye,drawBuffers:Ie,useProgram:Ze,setBlending:de,setMaterial:pe,setFlipSided:me,setCullFace:ye,setLineWidth:Ve,setPolygonOffset:Ge,setScissorTest:Je,activeTexture:Ke,bindTexture:F,unbindTexture:_t,compressedTexImage2D:ot,compressedTexImage3D:I,texImage2D:K,texImage3D:se,pixelStorei:He,getParameter:ve,updateUBOMapping:ze,uniformBlockBinding:We,texStorage2D:xe,texStorage3D:_e,texSubImage2D:S,texSubImage3D:G,compressedTexSubImage2D:q,compressedTexSubImage3D:$,scissor:Ee,viewport:Me,reset:Qe}}function J_(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ue,h=new WeakMap,u=new Set,f,m=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(I,S){return x?new OffscreenCanvas(I,S):Nr("canvas")}function d(I,S,G){let q=1,$=ot(I);if(($.width>G||$.height>G)&&(q=G/Math.max($.width,$.height)),q<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let xe=Math.floor(q*$.width),_e=Math.floor(q*$.height);f===void 0&&(f=_(xe,_e));let K=S?_(xe,_e):f;return K.width=xe,K.height=_e,K.getContext("2d").drawImage(I,0,0,xe,_e),qe("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+xe+"x"+_e+")."),K}else return"data"in I&&qe("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),I;return I}function p(I){return I.generateMipmaps}function y(I){n.generateMipmap(I)}function T(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(I,S,G,q,$,xe=!1){if(I!==null){if(n[I]!==void 0)return n[I];qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let _e;q&&(_e=e.get("EXT_texture_norm16"),_e||qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=S;if(S===n.RED&&(G===n.FLOAT&&(K=n.R32F),G===n.HALF_FLOAT&&(K=n.R16F),G===n.UNSIGNED_BYTE&&(K=n.R8),G===n.UNSIGNED_SHORT&&_e&&(K=_e.R16_EXT),G===n.SHORT&&_e&&(K=_e.R16_SNORM_EXT)),S===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(K=n.R8UI),G===n.UNSIGNED_SHORT&&(K=n.R16UI),G===n.UNSIGNED_INT&&(K=n.R32UI),G===n.BYTE&&(K=n.R8I),G===n.SHORT&&(K=n.R16I),G===n.INT&&(K=n.R32I)),S===n.RG&&(G===n.FLOAT&&(K=n.RG32F),G===n.HALF_FLOAT&&(K=n.RG16F),G===n.UNSIGNED_BYTE&&(K=n.RG8),G===n.UNSIGNED_SHORT&&_e&&(K=_e.RG16_EXT),G===n.SHORT&&_e&&(K=_e.RG16_SNORM_EXT)),S===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(K=n.RG8UI),G===n.UNSIGNED_SHORT&&(K=n.RG16UI),G===n.UNSIGNED_INT&&(K=n.RG32UI),G===n.BYTE&&(K=n.RG8I),G===n.SHORT&&(K=n.RG16I),G===n.INT&&(K=n.RG32I)),S===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(K=n.RGB8UI),G===n.UNSIGNED_SHORT&&(K=n.RGB16UI),G===n.UNSIGNED_INT&&(K=n.RGB32UI),G===n.BYTE&&(K=n.RGB8I),G===n.SHORT&&(K=n.RGB16I),G===n.INT&&(K=n.RGB32I)),S===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),G===n.UNSIGNED_INT&&(K=n.RGBA32UI),G===n.BYTE&&(K=n.RGBA8I),G===n.SHORT&&(K=n.RGBA16I),G===n.INT&&(K=n.RGBA32I)),S===n.RGB&&(G===n.UNSIGNED_SHORT&&_e&&(K=_e.RGB16_EXT),G===n.SHORT&&_e&&(K=_e.RGB16_SNORM_EXT),G===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),G===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),S===n.RGBA){let se=xe?Dr:lt.getTransfer($);G===n.FLOAT&&(K=n.RGBA32F),G===n.HALF_FLOAT&&(K=n.RGBA16F),G===n.UNSIGNED_BYTE&&(K=se===Mt?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT&&_e&&(K=_e.RGBA16_EXT),G===n.SHORT&&_e&&(K=_e.RGBA16_SNORM_EXT),G===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function E(I,S){let G;return I?S===null||S===Vn||S===ar?G=n.DEPTH24_STENCIL8:S===Nn?G=n.DEPTH32F_STENCIL8:S===rr&&(G=n.DEPTH24_STENCIL8,qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Vn||S===ar?G=n.DEPTH_COMPONENT24:S===Nn?G=n.DEPTH_COMPONENT32F:S===rr&&(G=n.DEPTH_COMPONENT16),G}function w(I,S){return p(I)===!0||I.isFramebufferTexture&&I.minFilter!==nn&&I.minFilter!==rn?Math.log2(Math.max(S.width,S.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?S.mipmaps.length:1}function C(I){let S=I.target;S.removeEventListener("dispose",C),R(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&u.delete(S)}function M(I){let S=I.target;S.removeEventListener("dispose",M),U(S)}function R(I){let S=i.get(I);if(S.__webglInit===void 0)return;let G=I.source,q=m.get(G);if(q){let $=q[S.__cacheKey];$.usedTimes--,$.usedTimes===0&&P(I),Object.keys(q).length===0&&m.delete(G)}i.remove(I)}function P(I){let S=i.get(I);n.deleteTexture(S.__webglTexture);let G=I.source,q=m.get(G);delete q[S.__cacheKey],a.memory.textures--}function U(I){let S=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(S.__webglFramebuffer[q]))for(let $=0;$<S.__webglFramebuffer[q].length;$++)n.deleteFramebuffer(S.__webglFramebuffer[q][$]);else n.deleteFramebuffer(S.__webglFramebuffer[q]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[q])}else{if(Array.isArray(S.__webglFramebuffer))for(let q=0;q<S.__webglFramebuffer.length;q++)n.deleteFramebuffer(S.__webglFramebuffer[q]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let q=0;q<S.__webglColorRenderbuffer.length;q++)S.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[q]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let G=I.textures;for(let q=0,$=G.length;q<$;q++){let xe=i.get(G[q]);xe.__webglTexture&&(n.deleteTexture(xe.__webglTexture),a.memory.textures--),i.remove(G[q])}i.remove(I)}let D=0;function H(){D=0}function N(){return D}function k(I){D=I}function O(){let I=D;return I>=s.maxTextures&&qe("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),D+=1,I}function V(I){let S=[];return S.push(I.wrapS),S.push(I.wrapT),S.push(I.wrapR||0),S.push(I.magFilter),S.push(I.minFilter),S.push(I.anisotropy),S.push(I.internalFormat),S.push(I.format),S.push(I.type),S.push(I.generateMipmaps),S.push(I.premultiplyAlpha),S.push(I.flipY),S.push(I.unpackAlignment),S.push(I.colorSpace),S.join()}function ee(I,S){let G=i.get(I);if(I.isVideoTexture&&F(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&G.__version!==I.version){let q=I.image;if(q===null)qe("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)qe("WebGLRenderer: Texture marked for update but image is incomplete");else{Te(G,I,S);return}}else I.isExternalTexture&&(G.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+S)}function J(I,S){let G=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&G.__version!==I.version){Te(G,I,S);return}else I.isExternalTexture&&(G.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+S)}function ie(I,S){let G=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&G.__version!==I.version){Te(G,I,S);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+S)}function ce(I,S){let G=i.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&G.__version!==I.version){Ye(G,I,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+S)}let Be={[Vi]:n.REPEAT,[ei]:n.CLAMP_TO_EDGE,[_o]:n.MIRRORED_REPEAT},De={[nn]:n.NEAREST,[Sf]:n.NEAREST_MIPMAP_NEAREST,[ca]:n.NEAREST_MIPMAP_LINEAR,[rn]:n.LINEAR,[$o]:n.LINEAR_MIPMAP_NEAREST,[es]:n.LINEAR_MIPMAP_LINEAR},pt={[Tf]:n.NEVER,[Pf]:n.ALWAYS,[Af]:n.LESS,[Nc]:n.LEQUAL,[Rf]:n.EQUAL,[Uc]:n.GEQUAL,[Cf]:n.GREATER,[If]:n.NOTEQUAL};function at(I,S){if(S.type===Nn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===rn||S.magFilter===$o||S.magFilter===ca||S.magFilter===es||S.minFilter===rn||S.minFilter===$o||S.minFilter===ca||S.minFilter===es)&&qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,Be[S.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,Be[S.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,Be[S.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,De[S.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,De[S.minFilter]),S.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,pt[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===nn||S.minFilter!==ca&&S.minFilter!==es||S.type===Nn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(I,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function ut(I,S){let G=!1;I.__webglInit===void 0&&(I.__webglInit=!0,S.addEventListener("dispose",C));let q=S.source,$=m.get(q);$===void 0&&($={},m.set(q,$));let xe=V(S);if(xe!==I.__cacheKey){$[xe]===void 0&&($[xe]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,G=!0),$[xe].usedTimes++;let _e=$[I.__cacheKey];_e!==void 0&&($[I.__cacheKey].usedTimes--,_e.usedTimes===0&&P(S)),I.__cacheKey=xe,I.__webglTexture=$[xe].texture}return G}function j(I,S,G){return Math.floor(Math.floor(I/G)/S)}function ae(I,S,G,q){let xe=I.updateRanges;if(xe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,G,q,S.data);else{xe.sort((He,Ee)=>He.start-Ee.start);let _e=0;for(let He=1;He<xe.length;He++){let Ee=xe[_e],Me=xe[He],ze=Ee.start+Ee.count,We=j(Me.start,S.width,4),Qe=j(Ee.start,S.width,4);Me.start<=ze+1&&We===Qe&&j(Me.start+Me.count-1,S.width,4)===We?Ee.count=Math.max(Ee.count,Me.start+Me.count-Ee.start):(++_e,xe[_e]=Me)}xe.length=_e+1;let K=t.getParameter(n.UNPACK_ROW_LENGTH),se=t.getParameter(n.UNPACK_SKIP_PIXELS),ve=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let He=0,Ee=xe.length;He<Ee;He++){let Me=xe[He],ze=Math.floor(Me.start/4),We=Math.ceil(Me.count/4),Qe=ze%S.width,z=Math.floor(ze/S.width),Se=We,ne=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Qe),t.pixelStorei(n.UNPACK_SKIP_ROWS,z),t.texSubImage2D(n.TEXTURE_2D,0,Qe,z,Se,ne,G,q,S.data)}I.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,K),t.pixelStorei(n.UNPACK_SKIP_PIXELS,se),t.pixelStorei(n.UNPACK_SKIP_ROWS,ve)}}function Te(I,S,G){let q=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(q=n.TEXTURE_3D);let $=ut(I,S),xe=S.source;t.bindTexture(q,I.__webglTexture,n.TEXTURE0+G);let _e=i.get(xe);if(xe.version!==_e.__version||$===!0){if(t.activeTexture(n.TEXTURE0+G),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let ne=lt.getPrimaries(lt.workingColorSpace),be=S.colorSpace===Xn?null:lt.getPrimaries(S.colorSpace),Ce=S.colorSpace===Xn||ne===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce)}t.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment);let se=d(S.image,!1,s.maxTextureSize);se=_t(S,se);let ve=r.convert(S.format,S.colorSpace),He=r.convert(S.type),Ee=v(S.internalFormat,ve,He,S.normalized,S.colorSpace,S.isVideoTexture);at(q,S);let Me,ze=S.mipmaps,We=S.isVideoTexture!==!0,Qe=_e.__version===void 0||$===!0,z=xe.dataReady,Se=w(S,se);if(S.isDepthTexture)Ee=E(S.format===ts,S.type),Qe&&(We?t.texStorage2D(n.TEXTURE_2D,1,Ee,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,Ee,se.width,se.height,0,ve,He,null));else if(S.isDataTexture)if(ze.length>0){We&&Qe&&t.texStorage2D(n.TEXTURE_2D,Se,Ee,ze[0].width,ze[0].height);for(let ne=0,be=ze.length;ne<be;ne++)Me=ze[ne],We?z&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,Me.width,Me.height,ve,He,Me.data):t.texImage2D(n.TEXTURE_2D,ne,Ee,Me.width,Me.height,0,ve,He,Me.data);S.generateMipmaps=!1}else We?(Qe&&t.texStorage2D(n.TEXTURE_2D,Se,Ee,se.width,se.height),z&&ae(S,se,ve,He)):t.texImage2D(n.TEXTURE_2D,0,Ee,se.width,se.height,0,ve,He,se.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){We&&Qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,Ee,ze[0].width,ze[0].height,se.depth);for(let ne=0,be=ze.length;ne<be;ne++)if(Me=ze[ne],S.format!==Un)if(ve!==null)if(We){if(z)if(S.layerUpdates.size>0){let Ce=dh(Me.width,Me.height,S.format,S.type);for(let he of S.layerUpdates){let ke=Me.data.subarray(he*Ce/Me.data.BYTES_PER_ELEMENT,(he+1)*Ce/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,he,Me.width,Me.height,1,ve,ke)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,Me.width,Me.height,se.depth,ve,Me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ne,Ee,Me.width,Me.height,se.depth,0,Me.data,0,0);else qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?z&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,Me.width,Me.height,se.depth,ve,He,Me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ne,Ee,Me.width,Me.height,se.depth,0,ve,He,Me.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{We&&Qe&&t.texStorage2D(n.TEXTURE_2D,Se,Ee,ze[0].width,ze[0].height);for(let ne=0,be=ze.length;ne<be;ne++)Me=ze[ne],S.format!==Un?ve!==null?We?z&&t.compressedTexSubImage2D(n.TEXTURE_2D,ne,0,0,Me.width,Me.height,ve,Me.data):t.compressedTexImage2D(n.TEXTURE_2D,ne,Ee,Me.width,Me.height,0,Me.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?z&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,Me.width,Me.height,ve,He,Me.data):t.texImage2D(n.TEXTURE_2D,ne,Ee,Me.width,Me.height,0,ve,He,Me.data)}else if(S.isDataArrayTexture)if(We){if(Qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,Ee,se.width,se.height,se.depth),z)if(S.layerUpdates.size>0){let ne=dh(se.width,se.height,S.format,S.type);for(let be of S.layerUpdates){let Ce=se.data.subarray(be*ne/se.data.BYTES_PER_ELEMENT,(be+1)*ne/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,be,se.width,se.height,1,ve,He,Ce)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ve,He,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ee,se.width,se.height,se.depth,0,ve,He,se.data);else if(S.isData3DTexture)We?(Qe&&t.texStorage3D(n.TEXTURE_3D,Se,Ee,se.width,se.height,se.depth),z&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ve,He,se.data)):t.texImage3D(n.TEXTURE_3D,0,Ee,se.width,se.height,se.depth,0,ve,He,se.data);else if(S.isFramebufferTexture){if(Qe)if(We)t.texStorage2D(n.TEXTURE_2D,Se,Ee,se.width,se.height);else{let ne=se.width,be=se.height;for(let Ce=0;Ce<Se;Ce++)t.texImage2D(n.TEXTURE_2D,Ce,Ee,ne,be,0,ve,He,null),ne>>=1,be>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in n){let ne=n.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),se.parentNode!==ne){ne.appendChild(se),u.add(S),ne.onpaint=be=>{let Ce=be.changedElements;for(let he of u)Ce.includes(he.image)&&(he.needsUpdate=!0)},ne.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,se);else{let Ce=n.RGBA,he=n.RGBA,ke=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ce,he,ke,se)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ze.length>0){if(We&&Qe){let ne=ot(ze[0]);t.texStorage2D(n.TEXTURE_2D,Se,Ee,ne.width,ne.height)}for(let ne=0,be=ze.length;ne<be;ne++)Me=ze[ne],We?z&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,ve,He,Me):t.texImage2D(n.TEXTURE_2D,ne,Ee,ve,He,Me);S.generateMipmaps=!1}else if(We){if(Qe){let ne=ot(se);t.texStorage2D(n.TEXTURE_2D,Se,Ee,ne.width,ne.height)}z&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve,He,se)}else t.texImage2D(n.TEXTURE_2D,0,Ee,ve,He,se);p(S)&&y(q),_e.__version=xe.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function Ye(I,S,G){if(S.image.length!==6)return;let q=ut(I,S),$=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+G);let xe=i.get($);if($.version!==xe.__version||q===!0){t.activeTexture(n.TEXTURE0+G);let _e=lt.getPrimaries(lt.workingColorSpace),K=S.colorSpace===Xn?null:lt.getPrimaries(S.colorSpace),se=S.colorSpace===Xn||_e===K?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let ve=S.isCompressedTexture||S.image[0].isCompressedTexture,He=S.image[0]&&S.image[0].isDataTexture,Ee=[];for(let he=0;he<6;he++)!ve&&!He?Ee[he]=d(S.image[he],!0,s.maxCubemapSize):Ee[he]=He?S.image[he].image:S.image[he],Ee[he]=_t(S,Ee[he]);let Me=Ee[0],ze=r.convert(S.format,S.colorSpace),We=r.convert(S.type),Qe=v(S.internalFormat,ze,We,S.normalized,S.colorSpace),z=S.isVideoTexture!==!0,Se=xe.__version===void 0||q===!0,ne=$.dataReady,be=w(S,Me);at(n.TEXTURE_CUBE_MAP,S);let Ce;if(ve){z&&Se&&t.texStorage2D(n.TEXTURE_CUBE_MAP,be,Qe,Me.width,Me.height);for(let he=0;he<6;he++){Ce=Ee[he].mipmaps;for(let ke=0;ke<Ce.length;ke++){let Fe=Ce[ke];S.format!==Un?ze!==null?z?ne&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,ke,0,0,Fe.width,Fe.height,ze,Fe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,ke,Qe,Fe.width,Fe.height,0,Fe.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,ke,0,0,Fe.width,Fe.height,ze,We,Fe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,ke,Qe,Fe.width,Fe.height,0,ze,We,Fe.data)}}}else{if(Ce=S.mipmaps,z&&Se){Ce.length>0&&be++;let he=ot(Ee[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,be,Qe,he.width,he.height)}for(let he=0;he<6;he++)if(He){z?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ee[he].width,Ee[he].height,ze,We,Ee[he].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Qe,Ee[he].width,Ee[he].height,0,ze,We,Ee[he].data);for(let ke=0;ke<Ce.length;ke++){let Ct=Ce[ke].image[he].image;z?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,ke+1,0,0,Ct.width,Ct.height,ze,We,Ct.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,ke+1,Qe,Ct.width,Ct.height,0,ze,We,Ct.data)}}else{z?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,ze,We,Ee[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Qe,ze,We,Ee[he]);for(let ke=0;ke<Ce.length;ke++){let Fe=Ce[ke];z?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,ke+1,0,0,ze,We,Fe.image[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,ke+1,Qe,ze,We,Fe.image[he])}}}p(S)&&y(n.TEXTURE_CUBE_MAP),xe.__version=$.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function Ie(I,S,G,q,$,xe){let _e=r.convert(G.format,G.colorSpace),K=r.convert(G.type),se=v(G.internalFormat,_e,K,G.normalized,G.colorSpace),ve=i.get(S),He=i.get(G);if(He.__renderTarget=S,!ve.__hasExternalTextures){let Ee=Math.max(1,S.width>>xe),Me=Math.max(1,S.height>>xe);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?t.texImage3D($,xe,se,Ee,Me,S.depth,0,_e,K,null):t.texImage2D($,xe,se,Ee,Me,0,_e,K,null)}t.bindFramebuffer(n.FRAMEBUFFER,I),Ke(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,$,He.__webglTexture,0,Je(S)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,$,He.__webglTexture,xe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ze(I,S,G){if(n.bindRenderbuffer(n.RENDERBUFFER,I),S.depthBuffer){let q=S.depthTexture,$=q&&q.isDepthTexture?q.type:null,xe=E(S.stencilBuffer,$),_e=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ke(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Je(S),xe,S.width,S.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,Je(S),xe,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,xe,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,_e,n.RENDERBUFFER,I)}else{let q=S.textures;for(let $=0;$<q.length;$++){let xe=q[$],_e=r.convert(xe.format,xe.colorSpace),K=r.convert(xe.type),se=v(xe.internalFormat,_e,K,xe.normalized,xe.colorSpace);Ke(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Je(S),se,S.width,S.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,Je(S),se,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,se,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function bt(I,S,G){let q=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=i.get(S.depthTexture);if($.__renderTarget=S,(!$.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q){if($.__webglInit===void 0&&($.__webglInit=!0,S.depthTexture.addEventListener("dispose",C)),$.__webglTexture===void 0){$.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),at(n.TEXTURE_CUBE_MAP,S.depthTexture);let ve=r.convert(S.depthTexture.format),He=r.convert(S.depthTexture.type),Ee;S.depthTexture.format===ni?Ee=n.DEPTH_COMPONENT24:S.depthTexture.format===ts&&(Ee=n.DEPTH24_STENCIL8);for(let Me=0;Me<6;Me++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,Ee,S.width,S.height,0,ve,He,null)}}else ee(S.depthTexture,0);let xe=$.__webglTexture,_e=Je(S),K=q?n.TEXTURE_CUBE_MAP_POSITIVE_X+G:n.TEXTURE_2D,se=S.depthTexture.format===ts?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(S.depthTexture.format===ni)Ke(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,K,xe,0,_e):n.framebufferTexture2D(n.FRAMEBUFFER,se,K,xe,0);else if(S.depthTexture.format===ts)Ke(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,K,xe,0,_e):n.framebufferTexture2D(n.FRAMEBUFFER,se,K,xe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function oe(I){let S=i.get(I),G=I.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==I.depthTexture){let q=I.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),q){let $=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,q.removeEventListener("dispose",$)};q.addEventListener("dispose",$),S.__depthDisposeCallback=$}S.__boundDepthTexture=q}if(I.depthTexture&&!S.__autoAllocateDepthBuffer)if(G)for(let q=0;q<6;q++)bt(S.__webglFramebuffer[q],I,q);else{let q=I.texture.mipmaps;q&&q.length>0?bt(S.__webglFramebuffer[0],I,0):bt(S.__webglFramebuffer,I,0)}else if(G){S.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[q]),S.__webglDepthbuffer[q]===void 0)S.__webglDepthbuffer[q]=n.createRenderbuffer(),Ze(S.__webglDepthbuffer[q],I,!1);else{let $=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=S.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,xe),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,xe)}}else{let q=I.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),Ze(S.__webglDepthbuffer,I,!1);else{let $=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,xe),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,xe)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function de(I,S,G){let q=i.get(I);S!==void 0&&Ie(q.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&oe(I)}function pe(I){let S=I.texture,G=i.get(I),q=i.get(S);I.addEventListener("dispose",M);let $=I.textures,xe=I.isWebGLCubeRenderTarget===!0,_e=$.length>1;if(_e||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=S.version,a.memory.textures++),xe){G.__webglFramebuffer=[];for(let K=0;K<6;K++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[K]=[];for(let se=0;se<S.mipmaps.length;se++)G.__webglFramebuffer[K][se]=n.createFramebuffer()}else G.__webglFramebuffer[K]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let K=0;K<S.mipmaps.length;K++)G.__webglFramebuffer[K]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(_e)for(let K=0,se=$.length;K<se;K++){let ve=i.get($[K]);ve.__webglTexture===void 0&&(ve.__webglTexture=n.createTexture(),a.memory.textures++)}if(I.samples>0&&Ke(I)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let K=0;K<$.length;K++){let se=$[K];G.__webglColorRenderbuffer[K]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[K]);let ve=r.convert(se.format,se.colorSpace),He=r.convert(se.type),Ee=v(se.internalFormat,ve,He,se.normalized,se.colorSpace,I.isXRRenderTarget===!0),Me=Je(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,Me,Ee,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.RENDERBUFFER,G.__webglColorRenderbuffer[K])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),Ze(G.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(xe){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),at(n.TEXTURE_CUBE_MAP,S);for(let K=0;K<6;K++)if(S.mipmaps&&S.mipmaps.length>0)for(let se=0;se<S.mipmaps.length;se++)Ie(G.__webglFramebuffer[K][se],I,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,se);else Ie(G.__webglFramebuffer[K],I,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);p(S)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let K=0,se=$.length;K<se;K++){let ve=$[K],He=i.get(ve),Ee=n.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ee=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ee,He.__webglTexture),at(Ee,ve),Ie(G.__webglFramebuffer,I,ve,n.COLOR_ATTACHMENT0+K,Ee,0),p(ve)&&y(Ee)}t.unbindTexture()}else{let K=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(K=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(K,q.__webglTexture),at(K,S),S.mipmaps&&S.mipmaps.length>0)for(let se=0;se<S.mipmaps.length;se++)Ie(G.__webglFramebuffer[se],I,S,n.COLOR_ATTACHMENT0,K,se);else Ie(G.__webglFramebuffer,I,S,n.COLOR_ATTACHMENT0,K,0);p(S)&&y(K),t.unbindTexture()}I.depthBuffer&&oe(I)}function me(I){let S=I.textures;for(let G=0,q=S.length;G<q;G++){let $=S[G];if(p($)){let xe=T(I),_e=i.get($).__webglTexture;t.bindTexture(xe,_e),y(xe),t.unbindTexture()}}}let ye=[],Ve=[];function Ge(I){if(I.samples>0){if(Ke(I)===!1){let S=I.textures,G=I.width,q=I.height,$=n.COLOR_BUFFER_BIT,xe=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=i.get(I),K=S.length>1;if(K)for(let ve=0;ve<S.length;ve++)t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);let se=I.texture.mipmaps;se&&se.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let ve=0;ve<S.length;ve++){if(I.resolveDepthBuffer&&(I.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),K){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_e.__webglColorRenderbuffer[ve]);let He=i.get(S[ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,He,0)}n.blitFramebuffer(0,0,G,q,0,0,G,q,$,n.NEAREST),c===!0&&(ye.length=0,Ve.length=0,ye.push(n.COLOR_ATTACHMENT0+ve),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(ye.push(xe),Ve.push(xe),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ve)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ye))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),K)for(let ve=0;ve<S.length;ve++){t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,_e.__webglColorRenderbuffer[ve]);let He=i.get(S[ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,He,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&c){let S=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function Je(I){return Math.min(s.maxSamples,I.samples)}function Ke(I){let S=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function F(I){let S=a.render.frame;h.get(I)!==S&&(h.set(I,S),I.update())}function _t(I,S){let G=I.colorSpace,q=I.format,$=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||G!==Lr&&G!==Xn&&(lt.getTransfer(G)===Mt?(q!==Un||$!==yn)&&qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xe("WebGLTextures: Unsupported texture color space:",G)),S}function ot(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=H,this.getTextureUnits=N,this.setTextureUnits=k,this.setTexture2D=ee,this.setTexture2DArray=J,this.setTexture3D=ie,this.setTextureCube=ce,this.rebindTextures=de,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=Ke,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function $_(n,e){function t(i,s=Xn){let r,a=lt.getTransfer(s);if(i===yn)return n.UNSIGNED_BYTE;if(i===jo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Qo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ih)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===sh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===th)return n.BYTE;if(i===nh)return n.SHORT;if(i===rr)return n.UNSIGNED_SHORT;if(i===Ko)return n.INT;if(i===Vn)return n.UNSIGNED_INT;if(i===Nn)return n.FLOAT;if(i===Wn)return n.HALF_FLOAT;if(i===rh)return n.ALPHA;if(i===ah)return n.RGB;if(i===Un)return n.RGBA;if(i===ni)return n.DEPTH_COMPONENT;if(i===ts)return n.DEPTH_STENCIL;if(i===ec)return n.RED;if(i===tc)return n.RED_INTEGER;if(i===ns)return n.RG;if(i===nc)return n.RG_INTEGER;if(i===ic)return n.RGBA_INTEGER;if(i===la||i===ha||i===ua||i===fa)if(a===Mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===la)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===la)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ha)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ua)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===fa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===sc||i===rc||i===ac||i===oc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===sc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===rc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ac)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===oc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===cc||i===lc||i===hc||i===uc||i===fc||i===da||i===dc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===cc||i===lc)return a===Mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===hc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===uc)return r.COMPRESSED_R11_EAC;if(i===fc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===da)return r.COMPRESSED_RG11_EAC;if(i===dc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===pc||i===mc||i===gc||i===xc||i===_c||i===yc||i===vc||i===Mc||i===Sc||i===bc||i===Ec||i===wc||i===Tc||i===Ac)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===pc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===mc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===gc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===xc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===_c)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===yc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===vc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Mc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Sc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===bc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ec)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===wc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Tc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ac)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Rc||i===Cc||i===Ic)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Rc)return a===Mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Cc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ic)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Pc||i===Lc||i===pa||i===Dc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Pc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Lc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===pa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Dc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ar?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var K_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,j_=`
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

}`,Lh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Xr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Tn({vertexShader:K_,fragmentShader:j_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Q(new Vt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Dh=class extends ii{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,m=null,x=null,_=typeof XRWebGLBinding<"u",d=new Lh,p={},y=t.getContextAttributes(),T=null,v=null,E=[],w=[],C=new ue,M=null,R=null,P=new tn;P.viewport=new Dt;let U=new tn;U.viewport=new Dt;let D=[P,U],H=new Xo,N=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ae=E[j];return ae===void 0&&(ae=new $s,E[j]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(j){let ae=E[j];return ae===void 0&&(ae=new $s,E[j]=ae),ae.getGripSpace()},this.getHand=function(j){let ae=E[j];return ae===void 0&&(ae=new $s,E[j]=ae),ae.getHandSpace()};function O(j){let ae=w.indexOf(j.inputSource);if(ae===-1)return;let Te=E[ae];Te!==void 0&&(Te.update(j.inputSource,j.frame,l||a),Te.dispatchEvent({type:j.type,data:j.inputSource}))}function V(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",ee);for(let j=0;j<E.length;j++){let ae=w[j];ae!==null&&(w[j]=null,E[j].disconnect(ae))}N=null,k=null,d.reset();for(let j in p)delete p[j];if(e.setRenderTarget(T),m=null,f=null,u=null,s=null,v=null,ut.stop(),i.isPresenting=!1,e.setPixelRatio(M),e.setSize(C.width,C.height,!1),R!==null){let j=R.camera;j.fov=R.fov,j.zoom=R.zoom,j.updateProjectionMatrix(),R=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",V),s.addEventListener("inputsourceschange",ee),y.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,Ye=null,Ie=null;y.depth&&(Ie=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Te=y.stencil?ts:ni,Ye=y.stencil?ar:Vn);let Ze={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Ze),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new _n(f.textureWidth,f.textureHeight,{format:Un,type:yn,depthTexture:new Yi(f.textureWidth,f.textureHeight,Ye,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Te={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,Te),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new _n(m.framebufferWidth,m.framebufferHeight,{format:Un,type:yn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),ut.setContext(s),ut.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return d.getDepthTexture()};function ee(j){for(let ae=0;ae<j.removed.length;ae++){let Te=j.removed[ae],Ye=w.indexOf(Te);Ye>=0&&(w[Ye]=null,E[Ye].disconnect(Te))}for(let ae=0;ae<j.added.length;ae++){let Te=j.added[ae],Ye=w.indexOf(Te);if(Ye===-1){for(let Ze=0;Ze<E.length;Ze++)if(Ze>=w.length){w.push(Te),Ye=Ze;break}else if(w[Ze]===null){w[Ze]=Te,Ye=Ze;break}if(Ye===-1)break}let Ie=E[Ye];Ie&&Ie.connect(Te)}}let J=new L,ie=new L;function ce(j,ae,Te){J.setFromMatrixPosition(ae.matrixWorld),ie.setFromMatrixPosition(Te.matrixWorld);let Ye=J.distanceTo(ie),Ie=ae.projectionMatrix.elements,Ze=Te.projectionMatrix.elements,bt=Ie[14]/(Ie[10]-1),oe=Ie[14]/(Ie[10]+1),de=(Ie[9]+1)/Ie[5],pe=(Ie[9]-1)/Ie[5],me=(Ie[8]-1)/Ie[0],ye=(Ze[8]+1)/Ze[0],Ve=bt*me,Ge=bt*ye,Je=Ye/(-me+ye),Ke=Je*-me;if(ae.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ke),j.translateZ(Je),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ie[10]===-1)j.projectionMatrix.copy(ae.projectionMatrix),j.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{let F=bt+Je,_t=oe+Je,ot=Ve-Ke,I=Ge+(Ye-Ke),S=de*oe/_t*F,G=pe*oe/_t*F;j.projectionMatrix.makePerspective(ot,I,S,G,F,_t),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Be(j,ae){ae===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ae.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let ae=j.near,Te=j.far;d.texture!==null&&(d.depthNear>0&&(ae=d.depthNear),d.depthFar>0&&(Te=d.depthFar)),H.near=U.near=P.near=ae,H.far=U.far=P.far=Te,(N!==H.near||k!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),N=H.near,k=H.far),H.layers.mask=j.layers.mask|6,P.layers.mask=H.layers.mask&-5,U.layers.mask=H.layers.mask&-3;let Ye=j.parent,Ie=H.cameras;Be(H,Ye);for(let Ze=0;Ze<Ie.length;Ze++)Be(Ie[Ze],Ye);Ie.length===2?ce(H,P,U):H.projectionMatrix.copy(P.projectionMatrix),R===null&&j.isPerspectiveCamera&&(R={camera:j,fov:j.fov,zoom:j.zoom}),De(j,H,Ye)};function De(j,ae,Te){Te===null?j.matrix.copy(ae.matrixWorld):(j.matrix.copy(Te.matrixWorld),j.matrix.invert(),j.matrix.multiply(ae.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ae.projectionMatrix),j.projectionMatrixInverse.copy(ae.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=vo*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(j){c=j,f!==null&&(f.fixedFoveation=j),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=j)},this.hasDepthSensing=function(){return d.texture!==null},this.getDepthSensingMesh=function(){return d.getMesh(H)},this.getCameraTexture=function(j){return p[j]};let pt=null;function at(j,ae){if(h=ae.getViewerPose(l||a),x=ae,h!==null){let Te=h.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let Ye=!1;Te.length!==H.cameras.length&&(H.cameras.length=0,Ye=!0);for(let oe=0;oe<Te.length;oe++){let de=Te[oe],pe=null;if(m!==null)pe=m.getViewport(de);else{let ye=u.getViewSubImage(f,de);pe=ye.viewport,oe===0&&(e.setRenderTargetTextures(v,ye.colorTexture,ye.depthStencilTexture),e.setRenderTarget(v))}let me=D[oe];me===void 0&&(me=new tn,me.layers.enable(oe),me.viewport=new Dt,D[oe]=me),me.matrix.fromArray(de.transform.matrix),me.matrix.decompose(me.position,me.quaternion,me.scale),me.projectionMatrix.fromArray(de.projectionMatrix),me.projectionMatrixInverse.copy(me.projectionMatrix).invert(),me.viewport.set(pe.x,pe.y,pe.width,pe.height),oe===0&&(H.matrix.copy(me.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Ye===!0&&H.cameras.push(me)}let Ie=s.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=i.getBinding();let oe=u.getDepthInformation(Te[0]);oe&&oe.isValid&&oe.texture&&d.init(oe,s.renderState)}if(Ie&&Ie.includes("camera-access")&&_){e.state.unbindTexture(),u=i.getBinding();for(let oe=0;oe<Te.length;oe++){let de=Te[oe].camera;if(de){let pe=p[de];pe||(pe=new Xr,p[de]=pe);let me=u.getCameraImage(de);pe.sourceTexture=me}}}}for(let Te=0;Te<E.length;Te++){let Ye=w[Te],Ie=E[Te];Ye!==null&&Ie!==void 0&&Ie.update(Ye,ae,l||a)}pt&&pt(j,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),x=null}let ut=new fd;ut.setAnimationLoop(at),this.setAnimationLoop=function(j){pt=j},this.dispose=function(){}}},Q_=new mt,_d=new $e;_d.set(-1,0,0,0,1,0,0,0,1);function ey(n,e){function t(d,p){d.matrixAutoUpdate===!0&&d.updateMatrix(),p.value.copy(d.matrix)}function i(d,p){p.color.getRGB(d.fogColor.value,hh(n)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function s(d,p,y,T,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(d,p):p.isMeshLambertMaterial?(r(d,p),p.envMap&&(d.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(d,p),u(d,p)):p.isMeshPhongMaterial?(r(d,p),h(d,p),p.envMap&&(d.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(d,p),f(d,p),p.isMeshPhysicalMaterial&&m(d,p,v)):p.isMeshMatcapMaterial?(r(d,p),x(d,p)):p.isMeshDepthMaterial?r(d,p):p.isMeshDistanceMaterial?(r(d,p),_(d,p)):p.isMeshNormalMaterial?r(d,p):p.isLineBasicMaterial?(a(d,p),p.isLineDashedMaterial&&o(d,p)):p.isPointsMaterial?c(d,p,y,T):p.isSpriteMaterial?l(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map,t(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.bumpMap&&(d.bumpMap.value=p.bumpMap,t(p.bumpMap,d.bumpMapTransform),d.bumpScale.value=p.bumpScale,p.side===Xt&&(d.bumpScale.value*=-1)),p.normalMap&&(d.normalMap.value=p.normalMap,t(p.normalMap,d.normalMapTransform),d.normalScale.value.copy(p.normalScale),p.side===Xt&&d.normalScale.value.negate()),p.displacementMap&&(d.displacementMap.value=p.displacementMap,t(p.displacementMap,d.displacementMapTransform),d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,d.emissiveMapTransform)),p.specularMap&&(d.specularMap.value=p.specularMap,t(p.specularMap,d.specularMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let y=e.get(p),T=y.envMap,v=y.envMapRotation;T&&(d.envMap.value=T,d.envMapRotation.value.setFromMatrix4(Q_.makeRotationFromEuler(v)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&d.envMapRotation.value.premultiply(_d),d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap&&(d.lightMap.value=p.lightMap,d.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,d.lightMapTransform)),p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,d.aoMapTransform))}function a(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,p.map&&(d.map.value=p.map,t(p.map,d.mapTransform))}function o(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function c(d,p,y,T){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*y,d.scale.value=T*.5,p.map&&(d.map.value=p.map,t(p.map,d.uvTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function l(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map,t(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function h(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function u(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function f(d,p){d.metalness.value=p.metalness,p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,d.metalnessMapTransform)),d.roughness.value=p.roughness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,d.roughnessMapTransform)),p.envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function m(d,p,y){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,d.sheenColorMapTransform)),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,d.sheenRoughnessMapTransform))),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,d.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(d.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xt&&d.clearcoatNormalScale.value.negate())),p.dispersion>0&&(d.dispersion.value=p.dispersion),p.retroreflectivity>0&&(d.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,d.iridescenceMapTransform)),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=y.texture,d.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,d.transmissionMapTransform)),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(d.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(d.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,d.specularColorMapTransform)),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,d.specularIntensityMapTransform))}function x(d,p){p.matcap&&(d.matcap.value=p.matcap)}function _(d,p){let y=e.get(p).light;d.referencePosition.value.setFromMatrixPosition(y.matrixWorld),d.nearDistance.value=y.shadow.camera.near,d.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ty(n,e,t,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,E){let w=E.program;i.uniformBlockBinding(v,w)}function l(v,E){let w=s[v.id];w===void 0&&(d(v),w=h(v),s[v.id]=w,v.addEventListener("dispose",y));let C=E.program;i.updateUBOMapping(v,C);let M=e.render.frame;r[v.id]!==M&&(f(v),r[v.id]=M)}function h(v){let E=u();v.__bindingPointIndex=E;let w=n.createBuffer(),C=v.__size,M=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,C,M),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,w),w}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Xe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let E=s[v.id],w=v.uniforms,C=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let M=0,R=w.length;M<R;M++){let P=w[M];if(Array.isArray(P))for(let U=0,D=P.length;U<D;U++)m(P[U],M,U,C);else m(P,M,0,C)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(v,E,w,C){if(_(v,E,w,C)===!0){let M=v.__offset,R=v.value;if(Array.isArray(R)){let P=0;for(let U=0;U<R.length;U++){let D=R[U],H=p(D);x(D,v.__data,P),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(P+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(R,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,M,v.__data)}}function x(v,E,w){typeof v=="number"||typeof v=="boolean"?E[0]=v:v.isMatrix3?(E[0]=v.elements[0],E[1]=v.elements[1],E[2]=v.elements[2],E[3]=0,E[4]=v.elements[3],E[5]=v.elements[4],E[6]=v.elements[5],E[7]=0,E[8]=v.elements[6],E[9]=v.elements[7],E[10]=v.elements[8],E[11]=0):ArrayBuffer.isView(v)?E.set(new v.constructor(v.buffer,v.byteOffset,E.length)):v.toArray(E,w)}function _(v,E,w,C){let M=v.value,R=E+"_"+w;if(C[R]===void 0)return typeof M=="number"||typeof M=="boolean"?C[R]=M:ArrayBuffer.isView(M)?C[R]=M.slice():C[R]=M.clone(),!0;{let P=C[R];if(typeof M=="number"||typeof M=="boolean"){if(P!==M)return C[R]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(P.equals(M)===!1)return P.copy(M),!0}}return!1}function d(v){let E=v.uniforms,w=0,C=16;for(let R=0,P=E.length;R<P;R++){let U=Array.isArray(E[R])?E[R]:[E[R]];for(let D=0,H=U.length;D<H;D++){let N=U[D],k=Array.isArray(N.value)?N.value:[N.value];for(let O=0,V=k.length;O<V;O++){let ee=k[O],J=p(ee),ie=w%C,ce=ie%J.boundary,Be=ie+ce;w+=ce,Be!==0&&C-Be<J.storage&&(w+=C-Be),N.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=w,w+=J.storage}}}let M=w%C;return M>0&&(w+=C-M),v.__size=w,v.__cache={},this}function p(v){let E={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(E.boundary=4,E.storage=4):v.isVector2?(E.boundary=8,E.storage=8):v.isVector3||v.isColor?(E.boundary=16,E.storage=12):v.isVector4?(E.boundary=16,E.storage=16):v.isMatrix3?(E.boundary=48,E.storage=48):v.isMatrix4?(E.boundary=64,E.storage=64):v.isTexture?qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(E.boundary=16,E.storage=v.byteLength):qe("WebGLRenderer: Unsupported uniform value type.",v),E}function y(v){let E=v.target;E.removeEventListener("dispose",y);let w=a.indexOf(E.__bindingPointIndex);a.splice(w,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function T(){for(let v in s)n.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:c,update:l,dispose:T}}var ny=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ui=null;function iy(){return ui===null&&(ui=new kr(ny,16,16,ns,Wn),ui.name="DFG_LUT",ui.minFilter=rn,ui.magFilter=rn,ui.wrapS=ei,ui.wrapT=ei,ui.generateMipmaps=!1,ui.needsUpdate=!0),ui}var Hc=class{constructor(e={}){let{canvas:t=Lf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:m=yn}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=a;let _=m,d=new Set([ic,nc,tc]),p=new Set([yn,Vn,rr,ar,jo,Qo]),y=new Uint32Array(4),T=new Int32Array(4),v=new L,E=null,w=null,C=[],M=[],R=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,U=!1,D=null,H=null,N=null,k=null;this._outputColorSpace=$t;let O=0,V=0,ee=null,J=-1,ie=null,ce=new Dt,Be=new Dt,De=null,pt=new ge(0),at=0,ut=t.width,j=t.height,ae=1,Te=null,Ye=null,Ie=new Dt(0,0,ut,j),Ze=new Dt(0,0,ut,j),bt=!1,oe=new Ks,de=!1,pe=!1,me=new mt,ye=new L,Ve=new Dt,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Je=!1;function Ke(){return ee===null?ae:1}let F=i;function _t(A,B){return t.getContext(A,B)}let ot,I,S,G,q,$,xe,_e,K,se,ve,He,Ee,Me,ze,We,Qe,z,Se,ne,be,Ce,he;try{let A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Ct,!1),t.addEventListener("webglcontextrestored",yt,!1),t.addEventListener("webglcontextcreationerror",On,!1),F===null){let B="webgl2";if(F=_t(B,A),F===null)throw _t(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ke()}catch(A){throw t.removeEventListener("webglcontextlost",Ct,!1),t.removeEventListener("webglcontextrestored",yt,!1),t.removeEventListener("webglcontextcreationerror",On,!1),Xe("WebGLRenderer: "+A.message),A}function ke(){ot=new hx(F),ot.init(),be=new $_(F,ot),I=new ex(F,ot,e,be),S=new Z_(F,ot),I.reversedDepthBuffer&&f&&S.buffers.depth.setReversed(!0),H=F.createFramebuffer(),N=F.createFramebuffer(),k=F.createFramebuffer(),G=new dx(F),q=new N_,$=new J_(F,ot,S,q,I,be,G),xe=new lx(P),_e=new m0(F),Ce=new jg(F,_e),K=new ux(F,_e,G,Ce),se=new mx(F,K,_e,Ce,G),z=new px(F,I,$),ze=new tx(q),ve=new D_(P,xe,ot,I,Ce,ze),He=new ey(P,q),Ee=new F_,Me=new G_(ot),Qe=new Kg(P,xe,S,se,x,c),We=new Y_(P,se,I),he=new ty(F,G,I,S),Se=new Qg(F,ot,G),ne=new fx(F,ot,G),G.programs=ve.programs,P.capabilities=I,P.extensions=ot,P.properties=q,P.renderLists=Ee,P.shadowMap=We,P.state=S,P.info=G}_!==yn&&(R=new xx(_,t.width,t.height,o,s,r));let Fe=new Dh(P,F);this.xr=Fe,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let A=ot.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=ot.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(A){A!==void 0&&(ae=A,this.setSize(ut,j,!1))},this.getSize=function(A){return A.set(ut,j)},this.setSize=function(A,B,Y=!0){if(Fe.isPresenting){qe("WebGLRenderer: Can't change size while VR device is presenting.");return}ut=A,j=B,t.width=Math.floor(A*ae),t.height=Math.floor(B*ae),Y===!0&&(t.style.width=A+"px",t.style.height=B+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(ut*ae,j*ae).floor()},this.setDrawingBufferSize=function(A,B,Y){ut=A,j=B,ae=Y,t.width=Math.floor(A*Y),t.height=Math.floor(B*Y),this.setViewport(0,0,A,B)},this.setEffects=function(A){if(_===yn){Xe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let B=0;B<A.length;B++)if(A[B].isOutputPass===!0){qe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(ce)},this.getViewport=function(A){return A.copy(Ie)},this.setViewport=function(A,B,Y,W){A.isVector4?Ie.set(A.x,A.y,A.z,A.w):Ie.set(A,B,Y,W),S.viewport(ce.copy(Ie).multiplyScalar(ae).round())},this.getScissor=function(A){return A.copy(Ze)},this.setScissor=function(A,B,Y,W){A.isVector4?Ze.set(A.x,A.y,A.z,A.w):Ze.set(A,B,Y,W),S.scissor(Be.copy(Ze).multiplyScalar(ae).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(A){S.setScissorTest(bt=A)},this.setOpaqueSort=function(A){Te=A},this.setTransparentSort=function(A){Ye=A},this.getClearColor=function(A){return A.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor(...arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha(...arguments)},this.clear=function(A=!0,B=!0,Y=!0){let W=0;if(A){let X=!1;if(ee!==null){let Re=ee.texture.format;X=d.has(Re)}if(X){let Re=ee.texture.type,Le=p.has(Re),Ae=Qe.getClearColor(),Ne=Qe.getClearAlpha(),Oe=Ae.r,tt=Ae.g,ct=Ae.b;Le?(y[0]=Oe,y[1]=tt,y[2]=ct,y[3]=Ne,F.clearBufferuiv(F.COLOR,0,y)):(T[0]=Oe,T[1]=tt,T[2]=ct,T[3]=Ne,F.clearBufferiv(F.COLOR,0,T))}else W|=F.COLOR_BUFFER_BIT}B&&(W|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(W|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&F.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),D=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Ct,!1),t.removeEventListener("webglcontextrestored",yt,!1),t.removeEventListener("webglcontextcreationerror",On,!1),Qe.dispose(),Ee.dispose(),Me.dispose(),q.dispose(),xe.dispose(),se.dispose(),Ce.dispose(),he.dispose(),ve.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",hu),Fe.removeEventListener("sessionend",uu),as.stop()};function Ct(A){A.preventDefault(),Ur("WebGLRenderer: Context Lost."),U=!0}function yt(){Ur("WebGLRenderer: Context Restored."),U=!1;let A=G.autoReset,B=We.enabled,Y=We.autoUpdate,W=We.needsUpdate,X=We.type;ke(),G.autoReset=A,We.enabled=B,We.autoUpdate=Y,We.needsUpdate=W,We.type=X}function On(A){Xe("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function $n(A){let B=A.target;B.removeEventListener("dispose",$n),jd(B)}function jd(A){Qd(A),q.remove(A)}function Qd(A){let B=q.get(A).programs;B!==void 0&&(B.forEach(function(Y){ve.releaseProgram(Y)}),A.isShaderMaterial&&ve.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,Y,W,X,Re){B===null&&(B=Ge);let Le=X.isMesh&&X.matrixWorld.determinantAffine()<0,Ae=np(A,B,Y,W,X);S.setMaterial(W,Le);let Ne=Y.index,Oe=1;if(W.wireframe===!0){if(Ne=K.getWireframeAttribute(Y),Ne===void 0)return;Oe=2}let tt=Y.drawRange,ct=Y.attributes.position,Ue=tt.start*Oe,vt=(tt.start+tt.count)*Oe;Re!==null&&(Ue=Math.max(Ue,Re.start*Oe),vt=Math.min(vt,(Re.start+Re.count)*Oe)),Ne!==null?(Ue=Math.max(Ue,0),vt=Math.min(vt,Ne.count)):ct!=null&&(Ue=Math.max(Ue,0),vt=Math.min(vt,ct.count));let Yt=vt-Ue;if(Yt<0||Yt===1/0)return;Ce.setup(X,W,Ae,Y,Ne);let Pt,At=Se;if(Ne!==null&&(Pt=_e.get(Ne),At=ne,At.setIndex(Pt)),X.isMesh)W.wireframe===!0?(S.setLineWidth(W.wireframeLinewidth*Ke()),At.setMode(F.LINES)):At.setMode(F.TRIANGLES);else if(X.isLine){let cn=W.linewidth;cn===void 0&&(cn=1),S.setLineWidth(cn*Ke()),X.isLineSegments?At.setMode(F.LINES):X.isLineLoop?At.setMode(F.LINE_LOOP):At.setMode(F.LINE_STRIP)}else X.isPoints?At.setMode(F.POINTS):X.isSprite&&At.setMode(F.TRIANGLES);if(X.isBatchedMesh)if(ot.get("WEBGL_multi_draw"))At.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let cn=X._multiDrawStarts,Pe=X._multiDrawCounts,fn=X._multiDrawCount,ft=Ne?_e.get(Ne).bytesPerElement:1,In=q.get(W).currentProgram.getUniforms();for(let Kn=0;Kn<fn;Kn++)In.setValue(F,"_gl_DrawID",Kn),At.render(cn[Kn]/ft,Pe[Kn])}else if(X.isInstancedMesh)At.renderInstances(Ue,Yt,X.count);else if(Y.isInstancedBufferGeometry){let cn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Pe=Math.min(Y.instanceCount,cn);At.renderInstances(Ue,Yt,Pe)}else At.render(Ue,Yt)};function lu(A,B,Y,W){D!==null&&A.isNodeMaterial&&D.setObject(W,A),de===!0&&ze.setState(A,Y,!1),A.transparent===!0&&A.side===Rt&&A.forceSinglePass===!1?(A.side=Xt,A.needsUpdate=!0,Fa(A,B,W),A.side=Rn,A.needsUpdate=!0,Fa(A,B,W),A.side=Rt):Fa(A,B,W)}this.compile=function(A,B,Y=null){Y===null&&(Y=A),D!==null&&D.renderStart(A,B,Y),w=Me.get(Y),w.init(B),M.push(w),Y.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(w.pushLight(X),X.castShadow&&w.pushShadow(X))}),A!==Y&&A.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(w.pushLight(X),X.castShadow&&w.pushShadow(X))}),w.setupLights(),D!==null&&D.updateLights(w.state.lightsArray),pe=this.localClippingEnabled,de=ze.init(this.clippingPlanes,pe),de===!0&&ze.setGlobalState(this.clippingPlanes,B),D!==null&&We.render(w.state.shadowsArray,Y,B);let W=new Set;return A.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let Re=X.material;if(Re)if(Array.isArray(Re))for(let Le=0;Le<Re.length;Le++){let Ae=Re[Le];lu(Ae,Y,B,X),W.add(Ae)}else lu(Re,Y,B,X),W.add(Re)}),w=M.pop(),D!==null&&D.renderEnd(),W},this.compileAsync=function(A,B,Y=null){let W=this.compile(A,B,Y);return new Promise(X=>{function Re(){if(W.forEach(function(Le){let Ne=q.get(Le).currentProgram;(Ne===void 0||Ne.isReady())&&W.delete(Le)}),W.size===0){X(A);return}setTimeout(Re,10)}ot.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let el=null;function ep(A){el&&el(A)}function hu(){as.stop()}function uu(){as.start()}let as=new fd;as.setAnimationLoop(ep),typeof self<"u"&&as.setContext(self),this.setAnimationLoop=function(A){el=A,Fe.setAnimationLoop(A),A===null?as.stop():as.start()},Fe.addEventListener("sessionstart",hu),Fe.addEventListener("sessionend",uu),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){Xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;D!==null&&D.renderStart(A,B);let Y=Fe.enabled===!0&&Fe.isPresenting===!0,W=R!==null&&(ee===null||Y)&&R.begin(P,ee);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(B),B=Fe.getCamera()),A.isScene===!0&&A.onBeforeRender(P,A,B,ee),w=Me.get(A,M.length),w.init(B),w.state.textureUnits=$.getTextureUnits(),M.push(w),me.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),oe.setFromProjectionMatrix(me,kn,B.reversedDepth),pe=this.localClippingEnabled,de=ze.init(this.clippingPlanes,pe),E=Ee.get(A,C.length),E.init(),C.push(E),Fe.enabled===!0&&Fe.isPresenting===!0){let Le=P.xr.getDepthSensingMesh();Le!==null&&tl(Le,B,-1/0,P.sortObjects)}tl(A,B,0,P.sortObjects),E.finish(),D!==null&&D.updateLights(w.state.lightsArray),P.sortObjects===!0&&E.sort(Te,Ye),Je=Fe.enabled===!1||Fe.isPresenting===!1||Fe.hasDepthSensing()===!1,Je&&Qe.addToRenderList(E,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),de===!0&&ze.beginShadows();let X=w.state.shadowsArray;if(We.render(X,A,B),de===!0&&ze.endShadows(),(W&&R.hasRenderPass())===!1){let Le=E.opaque,Ae=E.transmissive;if(w.setupLights(),B.isArrayCamera){let Ne=B.cameras;if(Ae.length>0)for(let Oe=0,tt=Ne.length;Oe<tt;Oe++){let ct=Ne[Oe];du(Le,Ae,A,ct)}Je&&Qe.render(A);for(let Oe=0,tt=Ne.length;Oe<tt;Oe++){let ct=Ne[Oe];fu(E,A,ct,ct.viewport)}}else Ae.length>0&&du(Le,Ae,A,B),Je&&Qe.render(A),fu(E,A,B)}ee!==null&&V===0&&($.updateMultisampleRenderTarget(ee),$.updateRenderTargetMipmap(ee)),W&&R.end(P),A.isScene===!0&&A.onAfterRender(P,A,B),Ce.resetDefaultState(),J=-1,ie=null,M.pop(),M.length>0?(w=M[M.length-1],$.setTextureUnits(w.state.textureUnits),de===!0&&ze.setGlobalState(P.clippingPlanes,w.state.camera)):w=null,C.pop(),C.length>0?E=C[C.length-1]:E=null,D!==null&&D.renderEnd()};function tl(A,B,Y,W){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)Y=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLightProbeGrid)w.pushLightProbeGrid(A);else if(A.isLight)w.pushLight(A),A.castShadow&&w.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(oe)){W&&Ve.setFromMatrixPosition(A.matrixWorld).applyMatrix4(me);let Le=se.update(A),Ae=A.material;Ae.visible&&E.push(A,Le,Ae,Y,Ve.z,null,B)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(oe))){let Le=se.update(A),Ae=A.material;if(W&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ve.copy(A.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Ve.copy(Le.boundingSphere.center)),Ve.applyMatrix4(A.matrixWorld).applyMatrix4(me)),Array.isArray(Ae)){let Ne=Le.groups;for(let Oe=0,tt=Ne.length;Oe<tt;Oe++){let ct=Ne[Oe],Ue=Ae[ct.materialIndex];Ue&&Ue.visible&&E.push(A,Le,Ue,Y,Ve.z,ct,B)}}else Ae.visible&&E.push(A,Le,Ae,Y,Ve.z,null,B)}}let Re=A.children;for(let Le=0,Ae=Re.length;Le<Ae;Le++)tl(Re[Le],B,Y,W)}function fu(A,B,Y,W){let{opaque:X,transmissive:Re,transparent:Le}=A;w.setupLightsView(Y),de===!0&&ze.setGlobalState(P.clippingPlanes,Y),W&&S.viewport(ce.copy(W)),X.length>0&&Ua(X,B,Y),Re.length>0&&Ua(Re,B,Y),Le.length>0&&Ua(Le,B,Y),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function du(A,B,Y,W){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[W.id]===void 0){let Ue=ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[W.id]=new _n(1,1,{generateMipmaps:!0,type:Ue?Wn:yn,minFilter:es,samples:Math.max(4,I.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:lt.workingColorSpace})}let Re=w.state.transmissionRenderTarget[W.id],Le=W.viewport||ce;Re.setSize(Le.z*P.transmissionResolutionScale,Le.w*P.transmissionResolutionScale);let Ae=P.getRenderTarget(),Ne=P.getActiveCubeFace(),Oe=P.getActiveMipmapLevel();P.setRenderTarget(Re),P.getClearColor(pt),at=P.getClearAlpha(),at<1&&P.setClearColor(16777215,.5),P.clear(),Je&&Qe.render(Y);let tt=P.toneMapping;P.toneMapping=Gn;let ct=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),w.setupLightsView(W),de===!0&&ze.setGlobalState(P.clippingPlanes,W),Ua(A,Y,W),$.updateMultisampleRenderTarget(Re),$.updateRenderTargetMipmap(Re),ot.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let vt=0,Yt=B.length;vt<Yt;vt++){let Pt=B[vt],{object:At,geometry:cn,material:Pe,group:fn}=Pt;if(Pe.side===Rt&&At.layers.test(W.layers)){let ft=Pe.side;Pe.side=Xt,Pe.needsUpdate=!0,pu(At,Y,W,cn,Pe,fn),Pe.side=ft,Pe.needsUpdate=!0,Ue=!0}}Ue===!0&&($.updateMultisampleRenderTarget(Re),$.updateRenderTargetMipmap(Re))}P.setRenderTarget(Ae,Ne,Oe),P.setClearColor(pt,at),ct!==void 0&&(W.viewport=ct),P.toneMapping=tt}function Ua(A,B,Y){let W=B.isScene===!0?B.overrideMaterial:null;for(let X=0,Re=A.length;X<Re;X++){let Le=A[X],{object:Ae,geometry:Ne,group:Oe}=Le,tt=Le.material;tt.allowOverride===!0&&W!==null&&(tt=W),Ae.layers.test(Y.layers)&&pu(Ae,B,Y,Ne,tt,Oe)}}function pu(A,B,Y,W,X,Re){D!==null&&X.isNodeMaterial&&D.setObject(A,X),A.onBeforeRender(P,B,Y,W,X,Re),A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(P,B,Y,W,A,Re),X.transparent===!0&&X.side===Rt&&X.forceSinglePass===!1?(X.side=Xt,X.needsUpdate=!0,P.renderBufferDirect(Y,B,W,X,A,Re),X.side=Rn,X.needsUpdate=!0,P.renderBufferDirect(Y,B,W,X,A,Re),X.side=Rt):P.renderBufferDirect(Y,B,W,X,A,Re),A.onAfterRender(P,B,Y,W,X,Re)}function Fa(A,B,Y){B.isScene!==!0&&(B=Ge);let W=q.get(A),X=w.state.lights,Re=w.state.shadowsArray,Le=X.state.version,Ae=ve.getParameters(A,X.state,Re,B,Y,w.state.lightProbeGridArray),Ne=ve.getProgramCacheKey(Ae),Oe=W.programs;W.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?B.environment:null,W.fog=B.fog;let tt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;W.envMap=xe.get(A.envMap||W.environment,tt),W.envMapRotation=W.environment!==null&&A.envMap===null?B.environmentRotation:A.envMapRotation,Oe===void 0&&(A.addEventListener("dispose",$n),Oe=new Map,W.programs=Oe);let ct=Oe.get(Ne);if(ct!==void 0){if(W.currentProgram===ct&&W.lightsStateVersion===Le)return gu(A,Ae),ct}else Ae.uniforms=ve.getUniforms(A),D!==null&&A.isNodeMaterial&&D.build(A,Y,Ae),A.onBeforeCompile(Ae,P),ct=ve.acquireProgram(Ae,Ne),Oe.set(Ne,ct),W.uniforms=Ae.uniforms;let Ue=W.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ue.clippingPlanes=ze.uniform),gu(A,Ae),W.needsLights=sp(A),W.lightsStateVersion=Le,W.needsLights&&(Ue.ambientLightColor.value=X.state.ambient,Ue.lightProbe.value=X.state.probe,Ue.sunLights.value=X.state.sun,Ue.sunLightShadows.value=X.state.sunShadow,Ue.directionalLights.value=X.state.directional,Ue.directionalLightShadows.value=X.state.directionalShadow,Ue.spotLights.value=X.state.spot,Ue.spotLightShadows.value=X.state.spotShadow,Ue.rectAreaLights.value=X.state.rectArea,Ue.ltc_1.value=X.state.rectAreaLTC1,Ue.ltc_2.value=X.state.rectAreaLTC2,Ue.pointLights.value=X.state.point,Ue.pointLightShadows.value=X.state.pointShadow,Ue.hemisphereLights.value=X.state.hemi,Ue.sunShadowMatrix.value=X.state.sunShadowMatrix,Ue.sunShadowCascade.value=X.state.sunShadowCascade,Ue.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ue.spotLightMatrix.value=X.state.spotLightMatrix,Ue.spotLightMap.value=X.state.spotLightMap,Ue.pointShadowMatrix.value=X.state.pointShadowMatrix),W.lightProbeGrid=w.state.lightProbeGridArray.length>0,W.currentProgram=ct,W.uniformsList=null,ct}function mu(A){if(A.uniformsList===null){let B=A.currentProgram.getUniforms();A.uniformsList=lr.seqWithValue(B.seq,A.uniforms)}return A.uniformsList}function gu(A,B){let Y=q.get(A);Y.outputColorSpace=B.outputColorSpace,Y.batching=B.batching,Y.batchingColor=B.batchingColor,Y.instancing=B.instancing,Y.instancingColor=B.instancingColor,Y.instancingMorph=B.instancingMorph,Y.skinning=B.skinning,Y.morphTargets=B.morphTargets,Y.morphNormals=B.morphNormals,Y.morphColors=B.morphColors,Y.morphTargetsCount=B.morphTargetsCount,Y.numClippingPlanes=B.numClippingPlanes,Y.numIntersection=B.numClipIntersection,Y.vertexAlphas=B.vertexAlphas,Y.vertexTangents=B.vertexTangents,Y.toneMapping=B.toneMapping}function tp(A,B){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;v.setFromMatrixPosition(B.matrixWorld);for(let Y=0,W=A.length;Y<W;Y++){let X=A[Y];if(X.texture!==null&&X.boundingBox.containsPoint(v))return X}return null}function np(A,B,Y,W,X){B.isScene!==!0&&(B=Ge),$.resetTextureUnits();let Re=B.fog,Le=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?B.environment:null,Ae=ee===null?P.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:lt.workingColorSpace,Ne=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Oe=xe.get(W.envMap||Le,Ne),tt=W.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,ct=!!Y.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ue=!!Y.morphAttributes.position,vt=!!Y.morphAttributes.normal,Yt=!!Y.morphAttributes.color,Pt=Gn;W.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Pt=P.toneMapping);let At=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,cn=At!==void 0?At.length:0,Pe=q.get(W),fn=w.state.lights;if(de===!0&&(pe===!0||A!==ie)){let It=A===ie&&W.id===J;ze.setState(W,A,It)}let ft=!1;W.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==fn.state.version||Pe.outputColorSpace!==Ae||X.isBatchedMesh&&Pe.batching===!1||!X.isBatchedMesh&&Pe.batching===!0||X.isBatchedMesh&&Pe.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Pe.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Pe.instancing===!1||!X.isInstancedMesh&&Pe.instancing===!0||X.isSkinnedMesh&&Pe.skinning===!1||!X.isSkinnedMesh&&Pe.skinning===!0||X.isInstancedMesh&&Pe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Pe.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Pe.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Pe.instancingMorph===!1&&X.morphTexture!==null||Pe.envMap!==Oe||W.fog===!0&&Pe.fog!==Re||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==ze.numPlanes||Pe.numIntersection!==ze.numIntersection)||Pe.vertexAlphas!==tt||Pe.vertexTangents!==ct||Pe.morphTargets!==Ue||Pe.morphNormals!==vt||Pe.morphColors!==Yt||Pe.toneMapping!==Pt||Pe.morphTargetsCount!==cn||!!Pe.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(ft=!0):(ft=!0,Pe.__version=W.version);let In=Pe.currentProgram;ft===!0&&(In=Fa(W,B,X),D&&W.isNodeMaterial&&D.onUpdateProgram(W,In,Pe));let Kn=!1,Ui=!1,Es=!1,Et=In.getUniforms(),Wt=Pe.uniforms;if(S.useProgram(In.program)&&(Kn=!0,Ui=!0,Es=!0),W.id!==J&&(J=W.id,Ui=!0),Pe.needsLights){let It=tp(w.state.lightProbeGridArray,X);Pe.lightProbeGrid!==It&&(Pe.lightProbeGrid=It,Ui=!0)}if(Kn||ie!==A){S.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Et.setValue(F,"projectionMatrix",A.projectionMatrix),Et.setValue(F,"viewMatrix",A.matrixWorldInverse);let Oi=Et.map.cameraPosition;Oi!==void 0&&Oi.setValue(F,ye.setFromMatrixPosition(A.matrixWorld)),I.logarithmicDepthBuffer&&Et.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Et.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),ie!==A&&(ie=A,Ui=!0,Es=!0)}if(Pe.needsLights&&(fn.state.sunShadowMap.length>0&&Et.setValue(F,"sunShadowMap",fn.state.sunShadowMap,$),fn.state.directionalShadowMap.length>0&&Et.setValue(F,"directionalShadowMap",fn.state.directionalShadowMap,$),fn.state.spotShadowMap.length>0&&Et.setValue(F,"spotShadowMap",fn.state.spotShadowMap,$),fn.state.pointShadowMap.length>0&&Et.setValue(F,"pointShadowMap",fn.state.pointShadowMap,$)),X.isSkinnedMesh){Et.setOptional(F,X,"bindMatrix"),Et.setOptional(F,X,"bindMatrixInverse");let It=X.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),Et.setValue(F,"boneTexture",It.boneTexture,$))}X.isBatchedMesh&&(Et.setOptional(F,X,"batchingTexture"),Et.setValue(F,"batchingTexture",X._matricesTexture,$),Et.setOptional(F,X,"batchingIdTexture"),Et.setValue(F,"batchingIdTexture",X._indirectTexture,$),Et.setOptional(F,X,"batchingColorTexture"),X._colorsTexture!==null&&Et.setValue(F,"batchingColorTexture",X._colorsTexture,$));let Fi=Y.morphAttributes;if((Fi.position!==void 0||Fi.normal!==void 0||Fi.color!==void 0)&&z.update(X,Y,In),(Ui||Pe.receiveShadow!==X.receiveShadow)&&(Pe.receiveShadow=X.receiveShadow,Et.setValue(F,"receiveShadow",X.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&B.environment!==null&&(Wt.envMapIntensity.value=B.environmentIntensity),Wt.dfgLUT!==void 0&&(Wt.dfgLUT.value=iy()),Ui){if(Et.setValue(F,"toneMappingExposure",P.toneMappingExposure),Pe.needsLights&&ip(Wt,Es),Re&&W.fog===!0&&He.refreshFogUniforms(Wt,Re),He.refreshMaterialUniforms(Wt,W,ae,j,w.state.transmissionRenderTarget[A.id]),Pe.needsLights&&Pe.lightProbeGrid){let It=Pe.lightProbeGrid;Wt.probesSH.value=It.texture,Wt.probesMin.value.copy(It.boundingBox.min),Wt.probesMax.value.copy(It.boundingBox.max),Wt.probesResolution.value.copy(It.resolution)}lr.upload(F,mu(Pe),Wt,$)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(lr.upload(F,mu(Pe),Wt,$),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Et.setValue(F,"center",X.center),Et.setValue(F,"modelViewMatrix",X.modelViewMatrix),Et.setValue(F,"normalMatrix",X.normalMatrix),Et.setValue(F,"modelMatrix",X.matrixWorld),W.uniformsGroups!==void 0){let It=W.uniformsGroups;for(let Oi=0,ws=It.length;Oi<ws;Oi++){let _u=It[Oi];he.update(_u,In),he.bind(_u,In)}}return In}function ip(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.sunLights.needsUpdate=B,A.sunLightShadows.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function sp(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(A,B,Y){let W=q.get(A);W.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),q.get(A.texture).__webglTexture=B,q.get(A.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:Y,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,B){let Y=q.get(A);Y.__webglFramebuffer=B,Y.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(A,B=0,Y=0){ee=A,O=B,V=Y;let W=null,X=!1,Re=!1;if(A){let Ae=q.get(A);if(Ae.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(F.FRAMEBUFFER,Ae.__webglFramebuffer),ce.copy(A.viewport),Be.copy(A.scissor),De=A.scissorTest,S.viewport(ce),S.scissor(Be),S.setScissorTest(De),J=-1;return}else if(Ae.__webglFramebuffer===void 0)$.setupRenderTarget(A);else if(Ae.__hasExternalTextures)$.rebindTextures(A,q.get(A.texture).__webglTexture,q.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let tt=A.depthTexture;if(Ae.__boundDepthTexture!==tt){if(tt!==null&&q.has(tt)&&(A.width!==tt.image.width||A.height!==tt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(A)}}let Ne=A.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Re=!0);let Oe=q.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Oe[B])?W=Oe[B][Y]:W=Oe[B],X=!0):A.samples>0&&$.useMultisampledRTT(A)===!1?W=q.get(A).__webglMultisampledFramebuffer:Array.isArray(Oe)?W=Oe[Y]:W=Oe,ce.copy(A.viewport),Be.copy(A.scissor),De=A.scissorTest}else ce.copy(Ie).multiplyScalar(ae).floor(),Be.copy(Ze).multiplyScalar(ae).floor(),De=bt;if(Y!==0&&(W=H),S.bindFramebuffer(F.FRAMEBUFFER,W)&&S.drawBuffers(A,W),S.viewport(ce),S.scissor(Be),S.setScissorTest(De),X){let Ae=q.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ae.__webglTexture,Y)}else if(Re){let Ae=B;for(let Ne=0;Ne<A.textures.length;Ne++){let Oe=q.get(A.textures[Ne]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ne,Oe.__webglTexture,Y,Ae)}}else if(A!==null&&Y!==0){let Ae=q.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ae.__webglTexture,Y)}J=-1};function xu(A){let B=q.get(A);return(B.__readFormat!==A.format||B.__readType!==A.type)&&(B.__readFormat=A.format,B.__readType=A.type,B.__formatReadable=I.textureFormatReadable(A.format),B.__typeReadable=I.textureTypeReadable(A.type)),B}this.readRenderTargetPixels=function(A,B,Y,W,X,Re,Le,Ae=0){if(!(A&&A.isWebGLRenderTarget)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=q.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(Ne=Ne[Le]),Ne){S.bindFramebuffer(F.FRAMEBUFFER,Ne);try{let Oe=A.textures[Ae],tt=Oe.format,ct=Oe.type;A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ae);let Ue=xu(Oe);if(Ue.__formatReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ue.__typeReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-W&&Y>=0&&Y<=A.height-X&&F.readPixels(B,Y,W,X,be.convert(tt),be.convert(ct),Re)}finally{let Oe=ee!==null?q.get(ee).__webglFramebuffer:null;S.bindFramebuffer(F.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(A,B,Y,W,X,Re,Le,Ae=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=q.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(Ne=Ne[Le]),Ne)if(B>=0&&B<=A.width-W&&Y>=0&&Y<=A.height-X){S.bindFramebuffer(F.FRAMEBUFFER,Ne);let Oe=A.textures[Ae],tt=Oe.format,ct=Oe.type;A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ae);let Ue=xu(Oe);if(Ue.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ue.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let vt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,vt),F.bufferData(F.PIXEL_PACK_BUFFER,Re.byteLength,F.STREAM_READ),F.readPixels(B,Y,W,X,be.convert(tt),be.convert(ct),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Yt=ee!==null?q.get(ee).__webglFramebuffer:null;S.bindFramebuffer(F.FRAMEBUFFER,Yt);let Pt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Nf(F,Pt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,vt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Re),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(vt),F.deleteSync(Pt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,B=null,Y=0){let W=Math.pow(2,-Y),X=Math.floor(A.image.width*W),Re=Math.floor(A.image.height*W),Le=B!==null?B.x:0,Ae=B!==null?B.y:0;$.setTexture2D(A,0),F.copyTexSubImage2D(F.TEXTURE_2D,Y,0,0,Le,Ae,X,Re),S.unbindTexture()},this.copyTextureToTexture=function(A,B,Y=null,W=null,X=0,Re=0){let Le,Ae,Ne,Oe,tt,ct,Ue,vt,Yt,Pt=A.isCompressedTexture?A.mipmaps[Re]:A.image;if(Y!==null)Le=Y.max.x-Y.min.x,Ae=Y.max.y-Y.min.y,Ne=Y.isBox3?Y.max.z-Y.min.z:1,Oe=Y.min.x,tt=Y.min.y,ct=Y.isBox3?Y.min.z:0;else{let Wt=Math.pow(2,-X);Le=Math.floor(Pt.width*Wt),Ae=Math.floor(Pt.height*Wt),A.isDataArrayTexture?Ne=Pt.depth:A.isData3DTexture?Ne=Math.floor(Pt.depth*Wt):Ne=1,Oe=0,tt=0,ct=0}W!==null?(Ue=W.x,vt=W.y,Yt=W.z):(Ue=0,vt=0,Yt=0);let At=be.convert(B.format),cn=be.convert(B.type),Pe;B.isData3DTexture?($.setTexture3D(B,0),Pe=F.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?($.setTexture2DArray(B,0),Pe=F.TEXTURE_2D_ARRAY):($.setTexture2D(B,0),Pe=F.TEXTURE_2D),S.activeTexture(F.TEXTURE0),S.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,B.flipY),S.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),S.pixelStorei(F.UNPACK_ALIGNMENT,B.unpackAlignment);let fn=S.getParameter(F.UNPACK_ROW_LENGTH),ft=S.getParameter(F.UNPACK_IMAGE_HEIGHT),In=S.getParameter(F.UNPACK_SKIP_PIXELS),Kn=S.getParameter(F.UNPACK_SKIP_ROWS),Ui=S.getParameter(F.UNPACK_SKIP_IMAGES);S.pixelStorei(F.UNPACK_ROW_LENGTH,Pt.width),S.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Pt.height),S.pixelStorei(F.UNPACK_SKIP_PIXELS,Oe),S.pixelStorei(F.UNPACK_SKIP_ROWS,tt),S.pixelStorei(F.UNPACK_SKIP_IMAGES,ct);let Es=A.isDataArrayTexture||A.isData3DTexture,Et=B.isDataArrayTexture||B.isData3DTexture;if(A.isDepthTexture){let Wt=q.get(A),Fi=q.get(B),It=q.get(Wt.__renderTarget),Oi=q.get(Fi.__renderTarget);S.bindFramebuffer(F.READ_FRAMEBUFFER,It.__webglFramebuffer),S.bindFramebuffer(F.DRAW_FRAMEBUFFER,Oi.__webglFramebuffer);for(let ws=0;ws<Ne;ws++)Es&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,q.get(A).__webglTexture,X,ct+ws),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,q.get(B).__webglTexture,Re,Yt+ws)),F.blitFramebuffer(Oe,tt,Le,Ae,Ue,vt,Le,Ae,F.DEPTH_BUFFER_BIT,F.NEAREST);S.bindFramebuffer(F.READ_FRAMEBUFFER,null),S.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(X!==0||A.isRenderTargetTexture||q.has(A)){let Wt=q.get(A),Fi=q.get(B);S.bindFramebuffer(F.READ_FRAMEBUFFER,N),S.bindFramebuffer(F.DRAW_FRAMEBUFFER,k);for(let It=0;It<Ne;It++)Es?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Wt.__webglTexture,X,ct+It):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Wt.__webglTexture,X),Et?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Fi.__webglTexture,Re,Yt+It):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Fi.__webglTexture,Re),X!==0?F.blitFramebuffer(Oe,tt,Le,Ae,Ue,vt,Le,Ae,F.COLOR_BUFFER_BIT,F.NEAREST):Et?F.copyTexSubImage3D(Pe,Re,Ue,vt,Yt+It,Oe,tt,Le,Ae):F.copyTexSubImage2D(Pe,Re,Ue,vt,Oe,tt,Le,Ae);S.bindFramebuffer(F.READ_FRAMEBUFFER,null),S.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Et?A.isDataTexture||A.isData3DTexture?F.texSubImage3D(Pe,Re,Ue,vt,Yt,Le,Ae,Ne,At,cn,Pt.data):B.isCompressedArrayTexture?F.compressedTexSubImage3D(Pe,Re,Ue,vt,Yt,Le,Ae,Ne,At,Pt.data):F.texSubImage3D(Pe,Re,Ue,vt,Yt,Le,Ae,Ne,At,cn,Pt):A.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Re,Ue,vt,Le,Ae,At,cn,Pt.data):A.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Re,Ue,vt,Pt.width,Pt.height,At,Pt.data):F.texSubImage2D(F.TEXTURE_2D,Re,Ue,vt,Le,Ae,At,cn,Pt);S.pixelStorei(F.UNPACK_ROW_LENGTH,fn),S.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ft),S.pixelStorei(F.UNPACK_SKIP_PIXELS,In),S.pixelStorei(F.UNPACK_SKIP_ROWS,Kn),S.pixelStorei(F.UNPACK_SKIP_IMAGES,Ui),Re===0&&B.generateMipmaps&&F.generateMipmap(Pe),S.unbindTexture()},this.initRenderTarget=function(A){q.get(A).__webglFramebuffer===void 0&&$.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?$.setTextureCube(A,0):A.isData3DTexture?$.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?$.setTexture2DArray(A,0):$.setTexture2D(A,0),S.unbindTexture()},this.resetState=function(){O=0,V=0,ee=null,S.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}};var Gc=class extends Wi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new oi;e.deleteAttribute("uv");let t=new an({side:Xt}),i=new an,s=new ji(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Q(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Vr(e,i,6),o=new Kt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new Q(e,fr(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new Q(e,fr(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let h=new Q(e,fr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new Q(e,fr(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let f=new Q(e,fr(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let m=new Q(e,fr(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function fr(n){return new ta({color:0,emissive:16777215,emissiveIntensity:n})}function Uh(n,e={}){let t=new Hc({canvas:n,antialias:!0,alpha:!!e.alpha,preserveDrawingBuffer:!!e.preserve,powerPreference:"high-performance"});return t.outputColorSpace=$t,t.toneMapping=aa,t.toneMappingExposure=e.exposure??.92,t.shadowMap.enabled=!0,t.shadowMap.type=gs,e.alpha&&t.setClearColor(0,0),t}var Nh=new WeakMap;function Fh(n){if(Nh.has(n))return Nh.get(n);let e=new hr(n),t=e.fromScene(new Gc,.04).texture;return e.dispose(),Nh.set(n,t),t}function Oh(n,e={}){let t=new le;n.add(t);let i=new ia(e.sky??16774114,e.ground??12159594,e.hemi??.55),s=new ps(e.keyColor??16773340,e.key??2.9);s.position.set(-2.2,4.2,3.4),s.castShadow=!0,s.shadow.mapSize.set(e.shadowSize??2048,e.shadowSize??2048),s.shadow.camera.left=-3,s.shadow.camera.right=3,s.shadow.camera.top=3.4,s.shadow.camera.bottom=-1.2,s.shadow.camera.near=.5,s.shadow.camera.far=14,s.shadow.bias=-4e-4,s.shadow.normalBias=.02,s.shadow.radius=6;let r=new ps(e.fillColor??13624063,e.fill??.55);r.position.set(3,2,2.5);let a=new ps(e.rimColor??16774888,e.rim??1.3);return a.position.set(1.5,3,-4),t.add(i,s,s.target,r,a),{group:t,hemi:i,key:s,fill:r,rim:a}}var g=(n=0,e=0,t=0)=>new L(n,e,t),yd=new ge;function ya(n,e){let t=new ge(n);return e>0?t.lerp(yd.set("#ffffff"),e):t.lerp(yd.set("#2a1830"),-e),t}var Ri=new Map;function te(n,e={}){let t="skin"+n+JSON.stringify(e);if(Ri.has(t))return Ri.get(t);let i=new je({color:new ge(n),roughness:e.roughness??.5,metalness:0,sheen:e.sheen??.3,sheenRoughness:.6,sheenColor:ya(n,.35),clearcoat:e.clearcoat??.12,clearcoatRoughness:.45,side:e.side??Rn,transparent:!!e.transparent,opacity:e.opacity??1});return i.userData.shared=!0,Ri.set(t,i),i}function re(n,e={}){let t="gl"+n+JSON.stringify(e);if(Ri.has(t))return Ri.get(t);let i=new je({color:new ge(n),roughness:e.roughness??.22,metalness:e.metalness??0,clearcoat:1,clearcoatRoughness:.08,transparent:!!e.transparent,opacity:e.opacity??1,transmission:e.transmission??0,thickness:e.thickness??0,ior:e.ior??1.45,emissive:e.emissive?new ge(e.emissive):new ge(0),emissiveIntensity:e.emissiveIntensity??0});return i.userData.shared=!0,Ri.set(t,i),i}function vn(n,e={}){let t="mt"+n+JSON.stringify(e);if(Ri.has(t))return Ri.get(t);let i=new an({color:new ge(n),roughness:e.roughness??.85,metalness:e.metalness??0,map:e.map||null,transparent:!!e.transparent,opacity:e.opacity??1,side:e.side??Rn,emissive:e.emissive?new ge(e.emissive):new ge(0),emissiveIntensity:e.emissiveIntensity??0});return i.userData.shared=!0,Ri.set(t,i),i}var Ms=(n,e={})=>new Gt({color:new ge(n),transparent:!!e.transparent,opacity:e.opacity??1,depthWrite:e.depthWrite??!0,map:e.map||null,toneMapped:e.toneMapped??!0}),Bh=new Map;function Hh(n){if(!Bh.has(n)){let e=new St(1,n,Math.round(n*.66));e.userData.shared=!0,Bh.set(n,e)}return Bh.get(n)}function Z(n,e,t,i,s={}){let r=new Q(Hh(s.seg||44),i);return r.position.copy(e),r.scale.set(t.x,t.y,t.z),s.rot&&r.rotation.set(s.rot.x||0,s.rot.y||0,s.rot.z||0),r.castShadow=s.shadow!==!1,r.receiveShadow=!0,s.part&&(r.userData.part=s.part),n.add(r),r.surf=a=>sy(r,a),r}function sy(n,e){let t=n.quaternion.clone(),i=e.clone().applyQuaternion(t.clone().invert()).normalize(),s=n.scale,r=1/Math.sqrt((i.x/1)**2+(i.y/1)**2+(i.z/1)**2),o=1/g(i.x/s.x,i.y/s.y,i.z/s.z).length(),c=g(i.x*o,i.y*o,i.z*o),l=g(c.x/(s.x*s.x),c.y/(s.y*s.y),c.z/(s.z*s.z)).applyQuaternion(t).normalize();return{p:c.applyQuaternion(t).add(n.position),n:l}}function Ci(n,e,t=g(0,1,0)){let i=e.clone().normalize(),s=t.clone().cross(i);s.lengthSq()<1e-6&&(s=g(1,0,0)),s.normalize();let r=i.clone().cross(s).normalize();return n.quaternion.setFromRotationMatrix(new mt().makeBasis(s,r,i)),n}function et(n,e,t,i,s={}){let r=new Qs(e,!1,"centripetal"),a=s.tubular||64,o=s.radial||28,c=r.computeFrenetFrames(a,!1),l=[],h=[],u=_=>{let d=_*(t.length-1),p=Math.min(t.length-2,Math.floor(d)),y=d-p,T=t[p],v=t[p+1];return T+(v-T)*(y*y*(3-2*y))};for(let _=0;_<=a;_++){let d=_/a,p=r.getPointAt(d),y=c.normals[_],T=c.binormals[_],v=u(d);for(let E=0;E<o;E++){let w=E/o*Math.PI*2,C=Math.cos(w),M=Math.sin(w);l.push(p.x+v*(C*y.x+M*T.x),p.y+v*(C*y.y+M*T.y),p.z+v*(C*y.z+M*T.z))}}for(let _=0;_<a;_++)for(let d=0;d<o;d++){let p=_*o+d,y=(_+1)*o+d,T=(_+1)*o+(d+1)%o,v=_*o+(d+1)%o;h.push(p,y,v,y,T,v)}let f=new Ft;f.setAttribute("position",new st(l,3)),f.setIndex(h),f.computeVertexNormals();let m=new le,x=new Q(f,i);if(x.castShadow=s.shadow!==!1,x.receiveShadow=!0,s.part&&(x.userData.part=s.part),m.add(x),s.caps!==!1){let _=new Q(Hh(32),i);_.position.copy(r.getPointAt(0)),_.scale.setScalar(t[0]),_.castShadow=!0;let d=new Q(Hh(32),i);d.position.copy(r.getPointAt(1)),d.scale.setScalar(t[t.length-1]),d.castShadow=!0,s.part&&(_.userData.part=s.part,d.userData.part=s.part),m.add(_,d)}return m.curve=r,m.rAt=u,n.add(m),m}function gt(n,e,t,i,s={}){let r=new li(e,{depth:t,bevelEnabled:!0,bevelThickness:s.bevel??t*.6,bevelSize:s.bevelSize??t*.6,bevelSegments:s.bevelSeg??3,curveSegments:s.curveSeg??16,steps:1});r.translate(0,0,-t/2),s.bend&&zh(r,s.bend),r.computeVertexNormals();let a=new Q(r,i);return a.castShadow=s.shadow!==!1,a.receiveShadow=!0,s.part&&(a.userData.part=s.part),n.add(a),a}function zh(n,e){let t=n.attributes.position,i=1/e;for(let s=0;s<t.count;s++){let r=t.getY(s),a=t.getZ(s),o=r*e;t.setY(s,(i-a)*Math.sin(o)),t.setZ(s,i-(i-a)*Math.cos(o))}t.needsUpdate=!0}function Bt(n,e,t,i,s={}){let r=[];for(let l=0;l<=18;l++){let h=l/18,u=t*Math.pow(1-h,s.power??.85)+t*.06*(1-h);r.push(new ue(Math.max(5e-4,u*(l===18?0:1)),h*e))}r[18].x=1e-4;let o=new Dn(r,s.radial||24);s.curve&&zh(o,s.curve),o.computeVertexNormals();let c=new Q(o,i);return c.castShadow=!0,c.receiveShadow=!0,s.part&&(c.userData.part=s.part),n.add(c),c}function Nt(n,e){let t=new Ot,i=n.length;for(let s=0;s<i;s++){let r=n[(s-1+i)%i],a=n[s],o=n[(s+1)%i],c=new ue().subVectors(r,a).normalize(),l=new ue().subVectors(o,a).normalize(),h=Math.min(e,a.distanceTo(r)/2.2,a.distanceTo(o)/2.2),u=a.clone().addScaledVector(c,h),f=a.clone().addScaledVector(l,h);s===0?t.moveTo(u.x,u.y):t.lineTo(u.x,u.y),t.quadraticCurveTo(a.x,a.y,f.x,f.y)}return t.closePath(),t}var fe=(n,e)=>new ue(n,e);function Jt(n,e,t,i={}){let s=document.createElement("canvas");s.width=n,s.height=e;let r=s.getContext("2d");t(r,n,e);let a=new fs(s);return a.colorSpace=i.linear?Xn:$t,a.anisotropy=8,i.repeat&&(a.wrapS=a.wrapT=Vi,a.repeat.set(i.repeat[0],i.repeat[1])),a.needsUpdate=!0,a}function is(n,e=128,t=0){return Jt(e,e,(i,s)=>{let r=i.createRadialGradient(s/2,s/2,s*t,s/2,s/2,s/2),a=new ge(n),o=`${Math.round(a.r*255)},${Math.round(a.g*255)},${Math.round(a.b*255)}`;r.addColorStop(0,`rgba(${o},1)`),r.addColorStop(.5,`rgba(${o},.55)`),r.addColorStop(1,`rgba(${o},0)`),i.fillStyle=r,i.fillRect(0,0,s,s)})}function vd(n,e,t,i,s,r={}){let a=new Q(new Vt(t.x??t,t.y??t),new Gt({map:e,transparent:!0,depthWrite:!1,opacity:r.opacity??1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-4}));return a.position.copy(i).addScaledVector(s,r.lift??.004),Ci(a,s),a.renderOrder=r.order??2,n.add(a),a}function qt(n){let e=n>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function va(n){n.traverse(e=>{e.geometry&&!e.geometry.userData.shared&&e.geometry.dispose();let t=Array.isArray(e.material)?e.material:e.material?[e.material]:[];for(let i of t)i.userData.shared||i.dispose()})}var kh=new Map;function Gh(n,e){let t=n.toFixed(3)+":"+e.toFixed(3);if(!kh.has(t)){let i=new St(n,36,16,0,Math.PI*2,0,e);i.userData.shared=!0,kh.set(t,i)}return kh.get(t)}var Vh=new Map;function Md(n){if(!Vh.has(n)){let e=new St(n,36,14,0,Math.PI*2,0,Math.PI/2);e.userData.shared=!0,Vh.set(n,e)}return Vh.get(n)}function di(n,e,t,i,s,r,a={}){let o=new le;o.position.copy(e).addScaledVector(t,-i*(a.sink??.42)),Ci(o,t),a.roll&&o.rotateZ(a.roll),n.add(o);let c=new Q(new St(i,36,24),re("#fbfcff",{roughness:.18}));c.castShadow=!1,o.add(c);let l=new le;o.add(l);let h=new Q(Gh(i*1.012,.74),re(s,{roughness:.28}));h.rotation.x=Math.PI/2,l.add(h);let u=new Q(Gh(i*1.008,.79),re("#20142a",{roughness:.3}));u.rotation.x=Math.PI/2,l.add(u);let f=new Q(Gh(i*1.02,.42),re("#0d0a14",{roughness:.15}));f.rotation.x=Math.PI/2,l.add(f);let m=new Q(new St(i*.2,16,12),Ms("#ffffff",{toneMapped:!1}));m.position.set(-i*.3,i*.34,i*.95),l.add(m);let x=new Q(new St(i*.08,12,8),Ms("#ffffff",{toneMapped:!1}));x.position.set(i*.26,-i*.22,i*.99),l.add(x);let _=i*1.1,d=new Q(Md(_),r);d.castShadow=!1;let p=new le;p.rotation.z=Math.PI;let y=new Q(Md(_),r);y.castShadow=!1,p.add(y),o.add(d,p);let T=new Q(new Tt(_*1,i*.07,8,40,Math.PI),re("#2a1a2e",{roughness:.4}));d.add(T),T.rotation.x=Math.PI/2;let v=Math.PI*.78,E=new Tt(i*.6,i*.1,10,36,v);E.rotateZ(Math.PI/2-v/2),E.translate(0,-i*.22,0);{let M=E.attributes.position,R=i*1.13;for(let P=0;P<M.count;P++){let U=M.getX(P),D=M.getY(P);M.setZ(P,M.getZ(P)+Math.sqrt(Math.max(0,R*R-U*U-D*D)))}E.computeVertexNormals()}let w=new Q(E,re("#2a1a2e",{roughness:.4}));w.visible=!1,o.add(w);let C={g:o,look:l,upper:d,lower:y,lash:T,happyArc:w,r:i};return C.set=(M,R,P=0)=>{let H=Math.max(1-M,R>.5?1:0);d.rotation.x=Math.min(1.45,-.78+(1.45- -.78)*H+.3*P),y.rotation.x=-1.15+.25*H,w.visible=R>.5,T.visible=H>.55&&R<=.5},C.set(1,0,0),C}function Ii(n,e,t,i,s={}){let r=new le;r.position.copy(e),Ci(r,t),n.add(r);let a=re(s.lineHex||"#3a1f2a",{roughness:.45}),o=Math.PI*(s.arc??.62),c=new Tt(i*.55,i*(s.thick??.075),12,48,o);if(c.rotateZ(-Math.PI/2-o/2),c.translate(0,i*.55,0),s.R){let _=c.attributes.position;for(let d=0;d<_.count;d++){let p=_.getX(d),y=_.getY(d);_.setZ(d,_.getZ(d)-(p*p+y*y)/(2*s.R))}c.computeVertexNormals()}let l=new Q(c,a);l.position.set(0,0,i*.01),r.add(l);let h=new le;r.add(h);let u=new Q(new St(1,40,24),re("#5a1626",{roughness:.5}));u.scale.set(i*.42,i*.36,i*.22),h.add(u);let f=new Q(new St(1,32,16),re("#ff7f96",{roughness:.4}));f.scale.set(i*.26,i*.13,i*.16),f.position.set(0,-i*.2,i*.08),h.add(f),h.position.set(0,i*.08,-i*.06);let m=new Q(new Tt(1,.09,10,48),a);m.scale.set(i*.42,i*.36,i*.3),h.add(m);let x={g:r,smile:l,open:h,cav:u,w:i,value:0,onSet:null};return x.set=_=>{x.value=_;let d=Math.max(.02,_);h.scale.set(.75+.25*_,d,1),h.visible=_>.04,l.visible=_<.35,x.onSet&&x.onSet(_)},x.set(0),x}var Wh=null;function pi(n,e,t,i){Wh=Wh||is("#ff6f8e",128);for(let s of t){let r=e.surf(s);vd(n,Wh,i,r.p,r.n,{opacity:.55,lift:.006})}}function ry(n,e,t){return Jt(64,256,(i,s,r)=>{for(let a=0;a<t;a++)i.fillStyle=a%2?e:n,i.fillRect(0,r*a/t,s,r/t+1)})}var Sd={party(){let n=new le,e=new Q(new ci(.22,.52,48,1,!0),new je({map:ry("#ff5d8f","#fff4d6",8),roughness:.4,clearcoat:.6,side:Rt}));e.position.y=.26,e.castShadow=!0,n.add(e);let t=new Q(new Tt(.215,.03,12,48),re("#ffd35c"));t.rotation.x=Math.PI/2,t.position.y=.01,n.add(t),Z(n,g(0,.55,0),g(.075,.075,.075),te("#ffd35c",{sheen:.9,roughness:.8}),{seg:32});for(let i=0;i<8;i++){let s=i/8*Math.PI*2;Z(n,g(Math.cos(s)*.06,.56+Math.sin(i)*.02,Math.sin(s)*.06),g(.04,.04,.04),te("#ffe58a",{sheen:1,roughness:.9}),{seg:16})}return n},cap(){let n=new le,e=new Q(new St(.3,48,24,0,Math.PI*2,0,Math.PI/2),re("#ff4b5c",{roughness:.45}));e.scale.set(1,.72,1),e.castShadow=!0,n.add(e);let t=gt(n,Nt([fe(-.24,0),fe(.24,0),fe(.2,.26),fe(-.2,.26)],.1),.02,re("#d8303f",{roughness:.5}),{bevel:.01,bevelSize:.01});t.rotation.x=-Math.PI/2+.12,t.position.set(0,.02,.22),Z(n,g(0,.22,0),g(.045,.03,.045),re("#fff6e6"),{seg:20});let i=new Q(new Tt(.3,.018,10,48),re("#fff6e6"));i.rotation.x=Math.PI/2,i.position.y=.04,n.add(i);let s=new Ot;for(let a=0;a<10;a++){let o=Math.PI/2+a*Math.PI/5,c=a%2?.035:.075;a?s.lineTo(Math.cos(o)*c,Math.sin(o)*c):s.moveTo(Math.cos(o)*c,Math.sin(o)*c)}let r=gt(n,s,.012,re("#ffd35c"),{bevel:.006,bevelSize:.006});return r.position.set(0,.12,.27),r.rotation.x=-.35,n},explorer(){let n=new le,e=new Q(new ht(.46,.46,.03,64),te("#d9bf86",{roughness:.75,sheen:.4}));e.position.y=.02,e.castShadow=!0,n.add(e);let t=new Q(new St(.29,48,24,0,Math.PI*2,0,Math.PI/2),te("#e8d19a",{roughness:.75,sheen:.4}));t.scale.set(1,1.1,1),t.position.y=.03,t.castShadow=!0,n.add(t);let i=new Q(new ht(.292,.292,.07,64,1,!0),te("#7a5a32",{roughness:.7}));return i.position.y=.07,n.add(i),Z(n,g(0,.34,0),g(.035,.03,.035),te("#d9bf86"),{seg:16}),n},crown(){let n=new le,e=new je({color:"#ffc43a",metalness:.85,roughness:.28,clearcoat:.6}),t=new Q(new ht(.26,.27,.13,48,1,!0),e);t.position.y=.06,t.material.side=Rt,n.add(t);for(let s=0;s<6;s++){let r=s/6*Math.PI*2,a=new Q(new ci(.06,.15,24),e);a.position.set(Math.cos(r)*.25,.19,Math.sin(r)*.25),n.add(a),Z(n,g(Math.cos(r)*.25,.28,Math.sin(r)*.25),g(.028,.028,.028),e,{seg:16}),Z(n,g(Math.cos(r+.52)*.27,.06,Math.sin(r+.52)*.27),g(.035,.035,.02),re(s%2?"#ff4b5c":"#4fb8ff",{roughness:.1}),{seg:20}).lookAt(Math.cos(r+.52)*2,.06,Math.sin(r+.52)*2)}let i=new Q(new Tt(.265,.018,10,48),e);return i.rotation.x=Math.PI/2,i.position.y=0,n.add(i),n},flower(){let n=new le,e=new le;e.position.set(.18,.06,.08),e.rotation.set(-.5,0,-.4),n.add(e);for(let i=0;i<6;i++){let s=i/6*Math.PI*2,r=Z(e,g(Math.cos(s)*.09,Math.sin(s)*.09,0),g(.075,.05,.025),te("#ff9ec4",{sheen:.6}),{seg:24});r.rotation.z=s}Z(e,g(0,0,.02),g(.055,.055,.04),te("#ffd35c",{sheen:.7}),{seg:24});let t=Z(n,g(.06,.02,0),g(.09,.03,.05),te("#5cbf55"),{seg:20});return t.rotation.z=.6,n},chef(){let n=new le,e=te("#ffffff",{sheen:.6,roughness:.75}),t=new Q(new ht(.25,.26,.16,48),e);t.position.y=.08,t.castShadow=!0,n.add(t);for(let[i,s,r,a]of[[0,.3,0,.2],[-.15,.25,.05,.16],[.15,.25,.05,.16],[0,.26,-.13,.16],[0,.24,.14,.15]])Z(n,g(i,s,r),g(a,a*.9,a),e,{seg:32});return n}};function Vc(n){if(!Sd[n])return null;let e=Sd[n]();return e.traverse(t=>{t.isMesh&&(t.castShadow=!0,t.userData.part="head")}),e}function bd(n,e){let t=new le,i=re("#2b2f45",{roughness:.3}),s=new je({color:"#bfe6ff",roughness:.05,transmission:0,transparent:!0,opacity:.28,clearcoat:1}),r=[];for(let a of n){let o=new L;a.g.getWorldPosition(o),e.worldToLocal(o);let c=new L(0,0,1).applyQuaternion(a.g.quaternion).normalize(),l=o.clone().addScaledVector(c,a.r*1.35),h=new Q(new Tt(a.r*1.3,a.r*.13,12,40),i);h.position.copy(l),h.lookAt(l.clone().add(c)),t.add(h);let u=new Q(new Ln(a.r*1.25,40),s);u.position.copy(l),u.lookAt(l.clone().add(c)),t.add(u),r.push({c:l,n:c,r:a.r})}if(r.length===2){let[a,o]=r,c=o.c.clone().sub(a.c).normalize(),l=a.c.clone().addScaledVector(c,a.r*1.3),h=o.c.clone().addScaledVector(c,-o.r*1.3),u=l.clone().add(h).multiplyScalar(.5).add(g(0,a.r*.25,a.r*.15));et(t,[l,u,h],[a.r*.12,a.r*.12,a.r*.12],i,{tubular:16,radial:10,caps:!1})}return t.traverse(a=>{a.isMesh&&(a.userData.part="head")}),t}function xt(n,e){let t=new le;return e&&t.position.copy(e),n.add(t),t}function mi(n,e,t,i,s){for(let[r,a]of t){let o=e.surf(r),c=Z(n,o.p,g(i*a,i*a*.8,i*.28),s,{seg:24,shadow:!1});Ci(c,o.n),c.position.addScaledVector(o.n,-i*.12)}}function Pi(n,e,t){let i=new le;i.position.copy(e);let s=t.clone().normalize().add(g(0,1,0)).normalize();return i.quaternion.setFromUnitVectors(g(0,1,0),s),n.add(i),i}function dr(n,e,t,i,s,r=3,a=re("#fff8ec",{roughness:.3})){for(let o=0;o<r;o++){let c=r===1?0:o/(r-1)-.5;Z(n,g(e+c*s,t,i),g(.042,.032,.03),a,{seg:16,shadow:!1})}}function Li(n){let e=new le;e.name=n;let t=xt(e),i=xt(t),s=xt(i);return{sp:n,root:e,jump:t,body:i,torso:s,eyes:[],parts:[],extra:{},legs:[]}}function gi(n,e,t,i){let s=xt(n.body,e);return n.legs.push({g:s,side:t,front:i,hip:e.clone()}),[s,r=>r.clone().sub(e)]}function ay(){let n=Li("trex"),e={body:"#5fbf4a",belly:"#e8f5b2",spot:"#3f8f34",claw:"#fff6e6"},t=te(e.body),i=te(e.belly,{sheen:.3}),s=te(e.spot),r=n.torso,a=Z(r,g(0,.66,-.02),g(.5,.55,.44),t,{part:"belly"});Z(r,g(0,.6,.16),g(.37,.43,.3),i,{part:"belly"});for(let T of[.45,.6,.75]){let v=new Q(new Tt(.29,.012,8,40,1.9),te("#cfe39a"));v.rotation.set(Math.PI/2+.05,0,Math.PI/2-.95),v.position.set(0,T,.14),v.scale.set(1,1.05,1),r.add(v)}mi(r,a,[[g(-.85,.35,.3),1],[g(.9,.15,.25),.8],[g(.7,.55,-.35),1.1],[g(-.6,.65,-.4),.9]],.07,s);for(let T of[-1,1]){let[v,E]=gi(n,g(T*.3,.42,.03),T,1);Z(v,E(g(T*.3,.38,.02)),g(.21,.24,.23),t,{part:"legs"}),et(v,[E(g(T*.3,.32,.05)),E(g(T*.31,.08,.09))],[.15,.135],t,{part:"legs"}),Z(v,E(g(T*.31,.06,.15)),g(.17,.08,.22),t,{part:"legs"});for(let C of[-1,0,1]){let M=Bt(v,.07,.035,re(e.claw,{roughness:.3}),{radial:12});M.position.copy(E(g(T*.31+C*.075,.05,.33))),M.rotation.x=Math.PI/2-.3}let w=xt(r,g(T*.35,.86,.24));et(w,[g(0,0,0),g(T*.07,-.08,.12),g(T*.08,-.16,.17)],[.075,.062,.05],t,{part:"arms"}),Z(w,g(T*.085,-.19,.19),g(.06,.055,.06),t,{part:"arms"});for(let C of[-1,1]){let M=Bt(w,.045,.02,re(e.claw),{radial:10});M.position.set(T*.085+C*.025,-.23,.2),M.rotation.x=Math.PI}n.extra[T<0?"armL":"armR"]=w}let o=xt(n.body,g(.12,.5,-.3)),c=et(o,[g(0,0,0),g(.35,-.16,-.22),g(.72,-.28,-.18),g(.98,-.32,.02)],[.26,.17,.09,.035],t,{part:"tail"});mi(o,{surf:T=>({p:c.curve.getPointAt(.45).clone().add(g(0,.15,0)),n:g(.2,1,.3).normalize()})},[[g(0,1,0),.9]],.06,s),n.tail=o,Z(n.body,g(0,1,0),g(.34,.26,.32),t,{part:"head"});let l=xt(n.body,g(0,1.06,0));n.head=l;let h=Z(l,g(0,.36,-.1),g(.42,.4,.42),t,{part:"head"}),u=Z(l,g(0,.27,.3),g(.3,.22,.42),t,{part:"face"}),f=Z(l,g(0,.31,.6),g(.22,.15,.18),t,{part:"face"}),m=Z(l,g(0,.1,.24),g(.27,.12,.4),t,{part:"face"});Z(l,g(0,.07,.24),g(.2,.06,.32),i,{part:"face",shadow:!1});for(let[T,v,E]of[[.76,-.12,.065],[.68,-.34,.075],[.52,-.48,.07]]){let w=Bt(l,E*1.4,E,te(e.spot),{radial:16,part:"head"});w.position.set(0,T,v),w.rotation.x=-.6}for(let[T,v,E]of[[1.13,-.36,.07],[.98,-.44,.065],[.82,-.47,.06]]){let w=Bt(r,E*1.4,E,te(e.spot),{radial:16,part:"belly"});w.position.set(0,T,v),w.rotation.x=-1}mi(l,h,[[g(-.35,1,-.3),1],[g(.2,1,-.25),.8],[g(-.9,.3,-.3),.7],[g(.9,.3,-.3),.7]],.06,s),mi(l,u,[[g(-.6,.8,.1),.6],[g(.6,.8,.15),.55]],.05,s);for(let T of[-1,1]){let v=h.surf(g(T*.58,.42,.72));n.eyes.push(di(l,v.p,v.n,.13,"#c9862f",t,{sink:.48}));let E=v.n.clone().multiplyScalar(-.035),w=et(l,[v.p.clone().add(g(-T*.1,.12,0)).add(E),v.p.clone().add(g(0,.155,.01)).add(E),v.p.clone().add(g(T*.1,.12,-.02)).add(E)],[.022,.032,.02],t,{tubular:16,radial:12});n.extra[T<0?"browL":"browR"]=w;let C=f.surf(g(T*.42,.55,.85)),M=Z(l,C.p,g(.03,.02,.022),re("#1f3a1a"),{seg:12,shadow:!1});Ci(M,C.n)}let x=f.surf(g(0,-.72,.7));n.mouth=Ii(l,x.p.clone().add(g(0,-.005,.01)),g(0,-.28,1).normalize(),.36,{R:.3,arc:.68,thick:.05});let _=.36,d=Math.PI*.68,p=new le;n.mouth.g.add(p);for(let T of[-.8,-.48,-.16,.16,.48,.8]){let v=T*d/2,E=.55*_*Math.sin(v),w=.55*_*(1-Math.cos(v)),C=Bt(p,.06,.03,re("#fffaf0",{roughness:.22}),{radial:12});C.position.set(E,w+.012,-(E*E+w*w)/(2*.3)+.016),C.rotation.x=Math.PI}pi(l,h,[g(-.82,-.05,.6),g(.82,-.05,.6)],.18);let y=h.surf(g(0,1,-.05));return n.hat=Pi(l,y.p,y.n),n.hatScale=1.1,n.headTop=n.hat,n.mouthAnchor=n.mouth.g,n.turn=-.3,n.headYaw=-.08,n}function oy(){let n=Li("trike"),e={body:"#f29b38",frill:"#ffcf55",spot:"#d77b20",horn:"#fff3dc",beak:"#c98a4b",snout:"#f7b65c"},t=te(e.body),i=te(e.frill),s=te(e.spot),r=re(e.horn,{roughness:.32}),a=n.torso,o=Z(a,g(.08,.6,-.36),g(.62,.47,.68),t,{part:"back"});mi(a,o,[[g(.7,.6,-.2),1.1],[g(.95,.2,-.3),.8],[g(-.6,.65,-.5),.9],[g(.3,.9,-.6),1]],.075,s);for(let w of[-1,1]){{let[C,M]=gi(n,g(w*.24,.56,0),w,1);et(C,[M(g(w*.24,.56,0)),M(g(w*.31,.08,.15))],[.165,.145],t,{part:"legs"}),Z(C,M(g(w*.31,.06,.2)),g(.17,.075,.19),t,{part:"legs"});let R=M(g(w*.31,.05,.37));dr(C,R.x,R.y,R.z,.16)}{let[C,M]=gi(n,g(w*.3,.54,-.74),w,0);et(C,[M(g(w*.3,.54,-.74)),M(g(w*.37,.08,-.74))],[.16,.14],t,{part:"legs"}),Z(C,M(g(w*.37,.06,-.69)),g(.16,.07,.18),t,{part:"legs"})}}let c=xt(n.body,g(.5,.58,-.82));et(c,[g(0,0,0),g(.22,-.12,-.16),g(.46,-.3,-.12),g(.62,-.38,.04)],[.2,.13,.07,.03],t,{part:"tail"}),n.tail=c;let l=xt(n.body,g(0,.8,.2));n.head=l;let h=new Ot,u=.66,f=9;h.moveTo(-u*.98,-.06);for(let w=0;w<f;w++){let C=Math.PI-w*Math.PI/f,M=Math.PI-(w+1)*Math.PI/f,R=(C+M)/2;h.quadraticCurveTo(Math.cos(R)*u*1.2,Math.sin(R)*u*1.2+0,Math.cos(M)*u*.98,Math.sin(M)*u*.98)}h.quadraticCurveTo(.3,-.22,0,-.18),h.quadraticCurveTo(-.3,-.22,-u*.98,-.06);let m=gt(l,h,.05,i,{part:"frill",bevel:.03,bevelSize:.03});m.position.set(0,.3,-.1),m.rotation.x=-.32;for(let w=0;w<7;w++){let C=Math.PI*(.12+w*.76/6),M=Z(m,g(Math.cos(C)*.6,Math.sin(C)*.6,.05),g(.06,.06,.02),s,{seg:20,shadow:!1})}let x=Z(l,g(0,.16,.16),g(.42,.37,.37),t,{part:"head"}),_=Z(l,g(0,.02,.4),g(.25,.18,.18),te(e.snout),{part:"face"});for(let w of[-1,1]){let C=x.surf(g(w*.46,.4,.82));n.eyes.push(di(l,C.p,C.n,.143,"#7a4a1e",t,{sink:.38}));let M=x.surf(g(w*.42,.85,.45)),R=Bt(l,.46,.075,r,{curve:1.3,part:"horns"});R.position.copy(M.p).addScaledVector(M.n,-.02),R.rotation.set(.2,0,-w*.22),Z(l,M.p,g(.085,.05,.085),t,{seg:20,part:"horns"})}let d=_.surf(g(0,.8,.6)),p=Bt(l,.17,.065,r,{curve:1.6,part:"horns"});p.position.copy(d.p).addScaledVector(d.n,-.02),p.rotation.x=.45;let y=Bt(l,.1,.075,re(e.beak,{roughness:.35}),{curve:-2}),T=_.surf(g(0,-.4,1));y.position.copy(T.p).add(g(0,.02,-.02)),y.rotation.x=Math.PI*.72;let v=x.surf(g(0,-.55,.85));n.mouth=Ii(l,v.p.clone().add(g(0,.02,.04)),v.n,.3,{R:.3,arc:.55}),pi(l,x,[g(-.78,-.12,.62),g(.78,-.12,.62)],.17);let E=x.surf(g(0,1,.25));return n.hat=Pi(l,E.p,E.n),n.hatScale=.95,n.headTop=n.hat,n.mouthAnchor=n.mouth.g,n}function cy(){let n=Li("stego"),e={body:"#45b0a5",belly:"#d5f0c2",plate:"#ff8257",plate2:"#ffb48e",spike:"#fff3dc",spot:"#2f8c82"},t=te(e.body),i=te(e.belly,{sheen:.3}),s=te(e.plate,{roughness:.5}),r=te(e.spot),a=n.torso,o=Z(a,g(0,.62,-.38),g(.5,.48,.8),t,{part:"back"});Z(a,g(0,.46,-.3),g(.42,.32,.66),i,{part:"belly"}),mi(a,o,[[g(.9,.3,.1),1],[g(.95,.2,-.5),.8],[g(-.9,.3,-.2),1],[g(.8,.4,.6),.7]],.07,r);let c=(d,p)=>Nt([fe(0,p),fe(d*.5,p*.42),fe(d*.3,0),fe(-d*.3,0),fe(-d*.5,p*.42)],Math.min(d,p)*.18),l=[.22,.3,.36,.38,.33,.25,.18];for(let d=0;d<l.length;d++){let p=.22-d*.22,y=o.surf(g(0,1,(p+.38)/.8));for(let T of[-1,1]){let v=l[d]*(T<0?1:.86),E=gt(a,c(v*.95,v),.035,T<0?s:te(e.plate2,{roughness:.5}),{part:"plates",bevel:.02,bevelSize:.02});E.rotation.y=Math.PI/2,E.rotation.x=0,E.position.set(T*.065,y.p.y-.06,p+(T<0?0:-.11)),E.rotateX(-T*.12)}}for(let[d,p]of[[-1,.1],[1,.1],[-1,-.82],[1,-.82]]){let[y,T]=gi(n,g(d*.2,.54,p-.04),d,p>0?1:0);et(y,[T(g(d*.2,.54,p-.04)),T(g(d*.26,.08,p+.02))],[.14,.125],t,{part:"legs"}),Z(y,T(g(d*.26,.06,p+.06)),g(.15,.07,.17),t,{part:"legs"});let v=T(g(d*.26,.05,p+.2));dr(y,v.x,v.y,v.z,.14)}let h=xt(n.body,g(0,.6,-1.08)),u=et(h,[g(0,0,0),g(0,.04,-.34),g(0,.16,-.64),g(0,.3,-.86)],[.24,.15,.08,.04],t,{part:"tail"});for(let[d,p]of[[-1,.78],[1,.78],[-1,.92],[1,.92]]){let y=u.curve.getPointAt(p),T=Bt(h,.24,.045,re(e.spike,{roughness:.3}),{part:"spikes"});T.position.copy(y),T.rotation.set(-.5,0,-d*1.1)}n.tail=h,Z(n.body,g(0,.6,.26),g(.26,.26,.32),t,{part:"head"});let f=xt(n.body,g(0,.58,.46));n.head=f;let m=Z(f,g(0,.06,.12),g(.28,.25,.32),t,{part:"head"});mi(f,m,[[g(0,1,-.2),.8],[g(-.5,.8,-.3),.6]],.05,r);for(let d of[-1,1]){let p=m.surf(g(d*.58,.45,.72));n.eyes.push(di(f,p.p,p.n,.114,"#4f7a2a",t,{sink:.36}))}let x=m.surf(g(0,-.38,1));n.mouth=Ii(f,x.p,x.n,.22,{R:.26}),pi(f,m,[g(-.8,-.05,.6),g(.8,-.05,.6)],.12);let _=m.surf(g(0,1,.1));return n.hat=Pi(f,_.p,_.n),n.hatScale=.72,n.headTop=n.hat,n.mouthAnchor=n.mouth.g,n.turn=-.75,n.headYaw=.6,n}function ly(){let n=Li("brachio"),e={body:"#9787ef",belly:"#e4defe",spot:"#b9afff",dark:"#7766d6"},t=te(e.body),i=te(e.belly,{sheen:.3}),s=te(e.spot),r=n.torso,a=Z(r,g(0,.76,-.42),g(.5,.44,.74),t,{part:"back",rot:{x:.14}});Z(r,g(0,.56,-.4),g(.4,.26,.6),i,{part:"belly",rot:{x:.14}}),mi(r,a,[[g(.9,.5,0),1.1],[g(.85,.4,-.6),.8],[g(-.85,.5,-.3),1],[g(.3,1,-.4),.9]],.08,s);for(let[m,x,_]of[[-1,0,.66],[1,0,.66],[-1,-.84,.6],[1,-.84,.6]]){let[d,p]=gi(n,g(m*.2,_,x),m,x>-.4?1:0);et(d,[p(g(m*.2,_,x)),p(g(m*.25,.08,x+.04))],[.15,.135],t,{part:"legs"}),Z(d,p(g(m*.25,.06,x+.08)),g(.16,.07,.18),t,{part:"legs"});let y=p(g(m*.25,.05,x+.23));dr(d,y.x,y.y,y.z,.14)}let o=xt(n.body,g(0,.68,-1.1));et(o,[g(0,0,0),g(.04,-.1,-.34),g(.14,-.3,-.62),g(.3,-.46,-.78)],[.22,.14,.07,.035],t,{part:"tail"}),n.tail=o;let c=et(r,[g(0,.78,-.16),g(0,1.04,.16),g(0,1.42,.3),g(0,1.84,.34),g(0,2.08,.28)],[.36,.26,.19,.155,.135],t,{part:"neck"});mi(r,{surf:m=>({p:c.curve.getPointAt(.55).clone().add(g(.17,0,0)),n:g(1,.1,.2).normalize()})},[[g(1,0,0),.7]],.06,s),n.extra.neck=c;let l=xt(r,g(0,2.1,.3));n.head=l;let h=Z(l,g(0,.06,.13),g(.27,.23,.31),t,{part:"head"});Z(l,g(0,.21,.02),g(.15,.13,.15),t,{part:"head"});for(let m of[-1,1]){let x=h.surf(g(m*.58,.5,.7));n.eyes.push(di(l,x.p,x.n,.111,"#6a4fc9",t,{sink:.36}));let _=h.surf(g(m*.2,.55,1));Z(l,_.p,g(.018,.014,.014),re("#3a2a7a"),{seg:12,shadow:!1})}let u=h.surf(g(0,-.35,1));n.mouth=Ii(l,u.p,u.n,.21,{R:.26}),pi(l,h,[g(-.8,-.05,.6),g(.8,-.05,.6)],.11);let f=h.surf(g(0,1,-.2));return n.hat=Pi(l,f.p.clone().add(g(0,.02,0)),f.n),n.hatScale=.7,n.headTop=n.hat,n.mouthAnchor=n.mouth.g,n.turn=-.55,n.headYaw=.5,n}function hy(){let n=Li("elephant"),e={body:"#a3b3d1",ear:"#f6b3c3",tusk:"#fff7e8",nail:"#fbf3e6",dark:"#8494b6"},t=te(e.body),i=te(e.ear,{sheen:.3}),s=n.torso;Z(s,g(0,.68,-.24),g(.56,.52,.6),t,{part:"belly"});for(let[x,_]of[[-1,.08],[1,.08],[-1,-.56],[1,-.56]]){let[d,p]=gi(n,g(x*.27,.5,_),x,_>0?1:0);et(d,[p(g(x*.27,.5,_)),p(g(x*.28,.07,_+.02))],[.175,.165],t,{part:"legs"});let y=p(g(x*.28,.05,_+.19));dr(d,y.x,y.y,y.z,.18)}let r=xt(n.body,g(.1,.8,-.8));et(r,[g(0,0,0),g(.08,-.15,-.06),g(.14,-.36,-.06)],[.03,.026,.024],t,{part:"tail",radial:12}),Z(r,g(.14,-.42,-.06),g(.045,.07,.045),te("#58627a"),{seg:20}),n.tail=r;let a=xt(n.body,g(0,1.02,.1));n.head=a;let o=Z(a,g(0,.24,.14),g(.46,.43,.42),t,{part:"head"}),c=Nt([fe(0,.26),fe(.3,.42),fe(.5,.3),fe(.52,-.05),fe(.38,-.32),fe(.12,-.36),fe(0,-.12)],.16),l=Nt([fe(.04,.2),fe(.29,.33),fe(.43,.24),fe(.44,-.04),fe(.33,-.26),fe(.13,-.28),fe(.04,-.08)],.13);for(let x of[-1,1]){let _=xt(a,g(x*.34,.3,.02)),d=xt(_);d.scale.x=x;let p=gt(d,c,.05,t,{part:"ears",bevel:.025,bevelSize:.025}),y=gt(d,l,.02,i,{part:"ears",bevel:.012,bevelSize:.012});y.position.z=.035,_.rotation.y=x*.55,n.extra[x<0?"earL":"earR"]=_}for(let x of[-1,1]){let _=o.surf(g(x*.44,.36,.85));n.eyes.push(di(a,_.p,_.n,.137,"#5a6f96",t,{sink:.38}))}let h=xt(a,g(0,.08,.46)),u=et(h,[g(0,.04,0),g(0,-.2,.13),g(0,-.42,.17),g(.03,-.58,.14),g(.1,-.64,.07)],[.17,.14,.115,.095,.088],t,{part:"trunk"});{let x=u.curve.getPointAt(1),_=u.curve.getTangentAt(1),d=Z(h,x.clone().addScaledVector(_,.07),g(.07,.07,.03),te(e.dark),{seg:24,shadow:!1});Ci(d,_)}n.trunk=h;for(let x of[-1,1]){let _=Bt(a,.2,.04,re(e.tusk,{roughness:.3}),{curve:-2.4,part:"trunk"});_.position.set(x*.17,.02,.42),_.rotation.set(Math.PI*.82,x*.25,x*.2)}let f=o.surf(g(.36,-.62,.72));n.mouth=Ii(a,f.p,f.n,.17,{R:.3,arc:.55}),pi(a,o,[g(-.66,-.08,.75),g(.66,-.08,.75)],.18);let m=o.surf(g(0,1,.1));return n.hat=Pi(a,m.p,m.n),n.hatScale=1.05,n.headTop=n.hat,n.mouthAnchor=n.mouth.g,n}function uy(){let n=Li("lion"),e={body:"#f2b53e",mane:"#cf6a2a",mane2:"#e8853a",muzzle:"#fff0c9",nose:"#6e3428",ear:"#ffb3a7"},t=te(e.body),i=te(e.mane,{sheen:.8,roughness:.7}),s=te(e.mane2,{sheen:.8,roughness:.7}),r=te(e.muzzle,{sheen:.4}),a=n.torso;Z(a,g(0,.52,-.12),g(.46,.52,.42),t,{part:"belly"}),Z(a,g(0,.56,.14),g(.3,.38,.28),r,{part:"belly"});for(let p of[-1,1]){Z(n.body,g(p*.36,.26,-.1),g(.22,.22,.3),t,{part:"legs"});let[y,T]=gi(n,g(p*.18,.52,.18),p,1);et(y,[T(g(p*.18,.52,.18)),T(g(p*.19,.1,.25))],[.125,.11],t,{part:"paws"}),Z(y,T(g(p*.19,.065,.31)),g(.14,.075,.17),t,{part:"paws"});for(let v of[-1,0,1])Z(y,T(g(p*.19+v*.055,.06,.465)),g(.03,.03,.02),te("#e3a032"),{seg:12,shadow:!1})}let o=xt(n.body,g(.3,.16,-.38)),l=et(o,[g(0,0,0),g(.38,.02,.22),g(.5,.26,.42),g(.46,.5,.5)],[.055,.05,.045,.04],t,{part:"tail",radial:14}).curve.getPointAt(1);Z(o,l.clone().add(g(0,.07,0)),g(.1,.13,.1),i,{part:"tail"}),n.tail=o;let h=xt(n.body,g(0,1,.08));n.head=h;let u=g(0,.2,0);Z(h,u.clone().add(g(0,0,-.12)),g(.52,.5,.2),s,{part:"mane"});let f=qt(7);for(let p=0;p<18;p++){let y=p/18*Math.PI*2;Z(h,u.clone().add(g(Math.cos(y)*.52,Math.sin(y)*.5,-.04)),g(1,1,1).multiplyScalar(.16+f()*.04),p%2?i:s,{part:"mane",seg:32})}for(let p=0;p<14;p++){let y=(p+.5)/14*Math.PI*2;Z(h,u.clone().add(g(Math.cos(y)*.42,Math.sin(y)*.4,-.16)),g(1,1,1).multiplyScalar(.2),i,{part:"mane",seg:32})}let m=Z(h,g(0,.2,.12),g(.41,.39,.37),t,{part:"face"});for(let p of[-1,1]){let y=xt(h,g(p*.29,.52,.06));Z(y,g(0,0,0),g(.12,.12,.08),t,{part:"mane"}),Z(y,g(0,0,.05),g(.065,.065,.03),te(e.ear),{seg:24}),n.extra[p<0?"earL":"earR"]=y,Z(h,g(p*.095,.06,.43),g(.125,.1,.09),r,{part:"face"});let T=m.surf(g(p*.42,.42,.82));n.eyes.push(di(h,T.p,T.n,.13,"#b5761e",t,{sink:.36}));for(let[v,E]of[[.07,.03],[.12,0],[.09,-.04]])Z(h,g(p*v,.06+E,.52),g(.012,.012,.01),re("#8a5a2a"),{seg:10,shadow:!1})}Z(h,g(0,-.04,.39),g(.08,.06,.06),r,{part:"face"});let x=Nt([fe(-.075,.03),fe(.075,.03),fe(0,-.055)],.025),_=gt(h,x,.04,re(e.nose,{roughness:.3}),{bevel:.02,bevelSize:.02});_.position.set(0,.13,.5),_.rotation.x=-.25,n.mouth=Ii(h,g(0,.015,.5),g(0,-.1,1).normalize(),.14,{R:.2,arc:.7}),pi(h,m,[g(-.72,-.02,.68),g(.72,-.02,.68)],.16);let d=m.surf(g(0,1,0));return n.hat=Pi(h,d.p.clone().add(g(0,.08,0)),d.n),n.hatScale=1.05,n.headTop=n.hat,n.mouthAnchor=n.mouth.g,n.gait="scoot",n}function fy(){let n=Li("penguin"),e={body:"#2f3e5c",belly:"#fffaf2",beak:"#ffa53b",feet:"#ff9a2e"},t=te(e.body,{sheen:.7}),i=te(e.belly,{sheen:.35}),s=re(e.beak,{roughness:.3}),r=xt(n.body,g(0,.35,0));n.head=r;let a=Z(r,g(0,.45,0),g(.56,.8,.5),t,{part:"belly"}),o=Z(r,g(0,.37,.12),g(.45,.66,.42),i,{part:"belly"}),c=Bt(r,.14,.05,t,{curve:-3});c.position.set(0,1.22,.02),c.rotation.z=.2;let l=Bt(r,.11,.04,t,{curve:-3});l.position.set(.04,1.21,0),l.rotation.z=-.4;for(let d of[-1,1]){let p=xt(n.body,g(d*.5,1.08,0)),y=Z(p,g(d*.07,-.3,0),g(.09,.36,.2),t,{part:"flippers"});y.rotation.z=d*.28,n.extra[d<0?"finL":"finR"]=p;let[T,v]=gi(n,g(d*.18,.1,.16),d,1);Z(T,v(g(d*.18,.04,.24)),g(.16,.05,.2),re(e.feet,{roughness:.4}),{part:"feet"});let E=o.surf(g(d*.42,.78,.8));n.eyes.push(di(r,E.p,E.n,.125,"#33466e",i,{sink:.38}))}let h=o.surf(g(0,.56,1)),u=xt(r,h.p.clone().add(g(0,0,-.04))),f=Bt(u,.22,.1,s,{radial:24});f.rotation.x=Math.PI/2-.15,f.scale.set(1.25,1,.8);let m=xt(u,g(0,-.025,0)),x=Bt(m,.15,.075,s,{radial:24});x.rotation.x=Math.PI/2+.12,x.scale.set(1.15,1,.6);let _=Z(u,g(0,-.02,.06),g(.06,.03,.06),re("#5a1626"),{seg:20,shadow:!1});return n.mouth={g:u,value:0,set(d){this.value=d,m.rotation.x=d*.55,f.rotation.x=Math.PI/2-.15-d*.12,_.visible=d>.05}},n.mouth.set(0),pi(r,o,[g(-.66,.5,.6),g(.66,.5,.6)],.17),n.hat=Pi(r,g(0,1.24,0),g(0,1,0)),n.hatScale=1,n.headTop=n.hat,n.mouthAnchor=u,n.gait="waddle",n}function dy(){let n=Li("anky"),e={body:"#5b8def",belly:"#dfe9ff",armor:"#ffcf6b",armor2:"#f2b347",spot:"#4373cf",beak:"#3d5fa8"},t=te(e.body),i=te(e.belly,{sheen:.3}),s=te(e.armor,{roughness:.5}),r=te(e.armor2,{roughness:.5}),a=n.torso,o=Z(a,g(0,.54,-.34),g(.62,.4,.78),t,{part:"armor"});Z(a,g(0,.4,-.3),g(.5,.26,.64),i,{part:"belly"});for(let d=0;d<5;d++){let p=.75-d*.36;for(let[y,T]of[[-1,.55],[-.62,1],[-.25,1],[.25,1],[.62,1],[1,.55]]){if(Math.abs(y)>.9&&(d===0||d===4))continue;let v=o.surf(g(y,T,p+(Math.abs(y)>.9?.18:0))),E=.08-Math.abs(y)*.02,w=Z(a,v.p,g(E*1.15,E*1.15,E*.55),(d+Math.round(y*3))%2?s:r,{seg:24,part:"armor"});Ci(w,v.n);let C=Bt(a,E*.9,E*.75,(d+Math.round(y*3))%2?s:r,{radial:14,part:"armor"});C.position.copy(v.p).addScaledVector(v.n,E*.25),C.quaternion.setFromUnitVectors(g(0,1,0),v.n)}}for(let d of[-1,1])for(let p=0;p<5;p++){let y=o.surf(g(d,.08,.62-p*.32)),T=Bt(a,.15-Math.abs(p-2)*.02,.055,r,{radial:14,part:"armor"});T.position.copy(y.p).addScaledVector(y.n,-.02),T.quaternion.setFromUnitVectors(g(0,1,0),y.n.clone().add(g(0,.25,0)).normalize())}for(let[d,p]of[[-1,.12],[1,.12],[-1,-.8],[1,-.8]]){let[y,T]=gi(n,g(d*.34,.4,p),d,p>0?1:0);et(y,[T(g(d*.34,.4,p)),T(g(d*.38,.08,p+.02))],[.15,.14],t,{part:"legs"}),Z(y,T(g(d*.38,.06,p+.06)),g(.16,.07,.17),t,{part:"legs"});let v=T(g(d*.38,.05,p+.21));dr(y,v.x,v.y,v.z,.14)}let c=xt(n.body,g(0,.48,-1.04)),h=et(c,[g(0,0,0),g(.02,-.04,-.3),g(.08,-.12,-.6),g(.14,-.2,-.82)],[.2,.13,.08,.06],t,{part:"tail"}).curve.getPointAt(1);Z(c,h.clone().add(g(.02,0,-.08)),g(.15,.1,.13),r,{part:"club"});for(let d of[-1,1])Z(c,h.clone().add(g(d*.11+.02,0,-.06)),g(.1,.085,.11),s,{part:"club"});n.tail=c,Z(n.body,g(0,.52,.36),g(.3,.27,.3),t,{part:"head"});let u=xt(n.body,g(0,.56,.5));n.head=u;let f=Z(u,g(0,.07,.14),g(.35,.27,.32),t,{part:"head"}),m=Z(u,g(0,0,.34),g(.21,.15,.14),te("#79a3f4"),{part:"face"});mi(u,f,[[g(-.5,1,-.3),.8],[g(.5,1,-.3),.8],[g(0,1,-.5),.6]],.05,s);for(let d of[-1,1]){let p=f.surf(g(d*.9,.35,-.5)),y=Bt(u,.13,.05,r,{radial:14,part:"head"});y.position.copy(p.p).addScaledVector(p.n,-.02),y.quaternion.setFromUnitVectors(g(0,1,0),g(d*.8,.25,-.55).normalize());let T=f.surf(g(d*.58,.5,.68));n.eyes.push(di(u,T.p,T.n,.112,"#3a5aa8",t,{sink:.36}));let v=m.surf(g(d*.5,.6,.8));Z(u,v.p,g(.018,.014,.014),re("#23366a"),{seg:12,shadow:!1})}let x=m.surf(g(0,-.32,1));n.mouth=Ii(u,x.p,x.n,.21,{R:.22,arc:.62}),pi(u,f,[g(-.8,-.1,.6),g(.8,-.1,.6)],.13);let _=f.surf(g(0,1,.05));return n.hat=Pi(u,_.p,_.n),n.hatScale=.78,n.headTop=n.hat,n.mouthAnchor=n.mouth.g,n.turn=-.6,n.headYaw=.5,n}function py(){let n=Li("kangaroo"),e={body:"#d98a52",belly:"#f8dcc0",dark:"#b86a3a",ear:"#ffb3a7",nose:"#5a3426"},t=te(e.body,{sheen:.5}),i=te(e.belly,{sheen:.4}),s=te(e.dark,{sheen:.5}),r=n.torso;Z(r,g(0,.6,-.06),g(.37,.42,.34),t,{part:"belly"}),Z(r,g(0,.96,0),g(.27,.32,.25),t,{part:"belly"}),Z(r,g(0,.74,.1),g(.25,.4,.25),i,{part:"belly"});for(let _ of[-1,1]){let[d,p]=gi(n,g(_*.24,.44,-.08),_,1);Z(d,p(g(_*.27,.38,-.02)),g(.19,.27,.27),t,{part:"legs"}),et(d,[p(g(_*.29,.3,-.14)),p(g(_*.3,.1,-.16))],[.1,.075],t,{part:"legs"}),Z(d,p(g(_*.29,.06,.08)),g(.12,.07,.3),s,{part:"feet"});let y=p(g(_*.29,.045,.37));dr(d,y.x,y.y,y.z,.08,2)}for(let _ of[-1,1]){let d=xt(r,g(_*.21,1,.16));et(d,[g(0,0,0),g(_*.04,-.12,.08),g(_*.03,-.22,.12)],[.065,.052,.045],t,{part:"arms"}),Z(d,g(_*.03,-.26,.13),g(.052,.05,.05),s,{part:"arms"}),n.extra[_<0?"armL":"armR"]=d}let a=xt(n.body,g(0,.34,-.3));et(a,[g(0,0,0),g(.06,-.17,-.26),g(.2,-.26,-.56),g(.42,-.28,-.8)],[.19,.15,.1,.045],t,{part:"tail"}),n.tail=a,Z(n.body,g(0,1.2,.02),g(.15,.15,.14),t,{part:"head"});let o=xt(n.body,g(0,1.3,.04));n.head=o;let c=Z(o,g(0,.13,0),g(.28,.255,.25),t,{part:"head"}),l=Z(o,g(0,.03,.2),g(.15,.125,.2),t,{part:"face"}),h=Z(o,g(0,-.005,.25),g(.115,.085,.16),i,{part:"face",shadow:!1}),u=l.surf(g(0,.45,1)),f=Z(o,u.p.clone().add(g(0,0,-.015)),g(.055,.04,.035),re(e.nose,{roughness:.3}),{seg:24});for(let _ of[-1,1]){let d=xt(o,g(_*.13,.27,-.04)),p=Z(d,g(_*.03,.17,0),g(.075,.2,.045),t,{part:"ears"});p.rotation.z=-_*.22;let y=Z(d,g(_*.03,.17,.03),g(.045,.15,.02),te(e.ear),{seg:24,shadow:!1});y.rotation.z=-_*.22,n.extra[_<0?"earL":"earR"]=d;let T=c.surf(g(_*.55,.42,.72));n.eyes.push(di(o,T.p,T.n,.1,"#6b3d1e",t,{sink:.36}))}let m=h.surf(g(0,-.35,.95));n.mouth=Ii(o,m.p,m.n,.13,{R:.16,arc:.7}),pi(o,c,[g(-.78,-.2,.6),g(.78,-.2,.6)],.11);let x=c.surf(g(0,1,-.1));return n.hat=Pi(o,x.p,x.n),n.hatScale=.82,n.headTop=n.hat,n.mouthAnchor=n.mouth.g,n.turn=-.6,n.headYaw=.42,n.gait="hop",n}var my={trex:ay,trike:oy,stego:cy,brachio:ly,anky:dy,elephant:hy,lion:uy,penguin:fy,kangaroo:py},wd=["trex","trike","stego","brachio","anky","elephant","lion","penguin","kangaroo"];function Ma(n,e=2){let t=my[n](),i=[.74,.87,1][e],s=[1.2,1.08,1][e];return t.root.scale.setScalar(i),t.head.scale.setScalar(s),t.turn&&(t.body.rotation.y=t.turn),t.headYaw&&(t.head.rotation.y=t.headYaw),t.stage=e,t.root.traverse(r=>{r.isMesh&&(r.castShadow=r.castShadow!==!1)}),t}function Sa(n,e){if(n.outfitObj&&(n.outfitObj.parent.remove(n.outfitObj),n.outfitObj=null),!e)return;if(e==="glasses"){n.head.updateMatrixWorld(!0);let i=bd(n.eyes,n.head);n.head.add(i),n.outfitObj=i;return}let t=Vc(e);t&&(t.scale.setScalar(n.hatScale||1),n.hat.add(t),t.position.y=-xy(n,(gy[e]||.25)*(n.hatScale||1)),n.outfitObj=t)}var gy={party:.22,cap:.3,explorer:.29,crown:.27,flower:.22,chef:.26},Ed=new ms;function xy(n,e){let t=[];if(n.head.traverse(o=>{o.isMesh&&o.userData.part==="head"&&o.geometry.type==="SphereGeometry"&&t.push(o)}),!t.length)return 0;let i=n.root;for(;i.parent;)i=i.parent;i.updateMatrixWorld(!0);let s=new L(0,-1,0).transformDirection(n.hat.matrixWorld),r=new L;n.hat.getWorldScale(r);let a=[];for(let o=0;o<8;o++){let c=o/8*Math.PI*2;Ed.set(n.hat.localToWorld(new L(Math.cos(c)*e,.4,Math.sin(c)*e)),s);let l=Ed.intersectObjects(t,!1)[0];l&&a.push(l.distance/r.y-.4)}return a.length<3?0:(a.sort((o,c)=>o-c),Math.max(0,Math.min(.22,a[a.length>>1]*.8)))}var ba=new L;function Fn(n,e,t,i,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;ba.copy(e),ba[i]=0,ba.normalize();let l=.5*a/(a+o),h=1-ba.angleTo(n)/c;return Math.sign(ba[t])===1?h*l:o/(a+o)+l+l*(1-h)}var xi=class n extends oi{constructor(e=1,t=1,i=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new L,l=new L,h=new L(e,t,i).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,m=this.attributes.uv.array,x=u.length/6,_=new L,d=.5/a;for(let p=0,y=0;p<u.length;p+=3,y+=2)switch(c.fromArray(u,p),l.copy(c),l.x-=Math.sign(l.x)*d,l.y-=Math.sign(l.y)*d,l.z-=Math.sign(l.z)*d,l.normalize(),u[p+0]=h.x*Math.sign(c.x)+l.x*r,u[p+1]=h.y*Math.sign(c.y)+l.y*r,u[p+2]=h.z*Math.sign(c.z)+l.z*r,f[p+0]=l.x,f[p+1]=l.y,f[p+2]=l.z,Math.floor(p/x)){case 0:_.set(1,0,0),m[y+0]=Fn(_,l,"z","y",r,i),m[y+1]=1-Fn(_,l,"y","z",r,t);break;case 1:_.set(-1,0,0),m[y+0]=1-Fn(_,l,"z","y",r,i),m[y+1]=1-Fn(_,l,"y","z",r,t);break;case 2:_.set(0,1,0),m[y+0]=1-Fn(_,l,"x","z",r,e),m[y+1]=Fn(_,l,"z","x",r,i);break;case 3:_.set(0,-1,0),m[y+0]=1-Fn(_,l,"x","z",r,e),m[y+1]=1-Fn(_,l,"z","x",r,i);break;case 4:_.set(0,0,1),m[y+0]=1-Fn(_,l,"x","y",r,e),m[y+1]=1-Fn(_,l,"y","x",r,t);break;case 5:_.set(0,0,-1),m[y+0]=Fn(_,l,"x","y",r,e),m[y+1]=1-Fn(_,l,"y","x",r,t);break}}static fromJSON(e){return new n(e.width,e.height,e.depth,e.segments,e.radius)}};var Xh=new Map,Mn=(n,e)=>(Xh.has(n)||Xh.set(n,e()),Xh.get(n)),qh=(n,e,t)=>Mn("wd"+n+e,()=>Jt(256,256,(i,s,r)=>{i.fillStyle=n,i.fillRect(0,0,s,r);let a=qt(3);for(let o=0;o<4;o++)for(let c=0;c<4;c++){let l=c*64+(o%2?32:0)+16,h=o*64+16;i.fillStyle=e,i.beginPath(),i.arc(l,h,7,0,7),i.fill(),i.fillStyle=t,i.beginPath(),i.arc(l+32,h+32,3.5,0,7),i.fill()}for(let o=0;o<1800;o++)i.fillStyle=`rgba(120,70,30,${.012+a()*.02})`,i.fillRect(a()*s,a()*r,1.5,1.5)},{repeat:[10,6]})),Td=()=>Mn("ws",()=>Jt(256,256,(n,e,t)=>{n.fillStyle="#cfc6fb",n.fillRect(0,0,e,t);let i=(s,r,a,o)=>{n.fillStyle=o,n.beginPath();for(let c=0;c<10;c++){let l=-Math.PI/2+c*Math.PI/5,h=c%2?a*.45:a;n[c?"lineTo":"moveTo"](s+Math.cos(l)*h,r+Math.sin(l)*h)}n.closePath(),n.fill()};for(let s=0;s<4;s++)for(let r=0;r<4;r++){let a=r*64+(s%2?32:0)+16,o=s*64+18;i(a,o,9,"#f6f0ff"),n.fillStyle="#b9aef5",n.beginPath(),n.arc(a+32,o+30,4,0,7),n.fill()}},{repeat:[10,6]})),Yh=(n,e,t=6)=>Mn("wood"+n+e,()=>Jt(512,512,(i,s,r)=>{let a=qt(11),o=r/t;for(let c=0;c<t;c++){let l=.9+a()*.2,h=new ge(n).lerp(new ge(e),a());h.multiplyScalar(l),i.fillStyle="#"+h.getHexString(),i.fillRect(0,c*o,s,o);for(let f=0;f<18;f++){i.strokeStyle=`rgba(90,45,15,${.05+a()*.08})`,i.lineWidth=1+a()*2,i.beginPath();let m=c*o+a()*o;i.moveTo(0,m);for(let x=0;x<=s;x+=32)i.lineTo(x,m+Math.sin(x*.02+f)*3*a());i.stroke()}i.fillStyle="rgba(70,35,10,.35)",i.fillRect(0,c*o,s,3);let u=a()*s;i.fillRect(u,c*o,3,o)}},{repeat:[3,4]})),Ea=(n,e,t=8,i)=>Mn("tiles"+n+e+t+i,()=>Jt(512,512,(s,r,a)=>{s.fillStyle=e,s.fillRect(0,0,r,a);let o=r/t,c=qt(5);for(let l=0;l<t;l++)for(let h=0;h<t;h++){let u=new ge(i&&(h+l)%2?i:n).multiplyScalar(.96+c()*.06),f=s.createLinearGradient(h*o,l*o,h*o+o,l*o+o);f.addColorStop(0,"#"+u.clone().lerp(new ge("#fff"),.25).getHexString()),f.addColorStop(1,"#"+u.getHexString()),s.fillStyle=f;let m=3;s.beginPath(),s.roundRect(h*o+m,l*o+m,o-m*2,o-m*2,6),s.fill()}},{repeat:[4,4]})),Ad=()=>Mn("grass",()=>Jt(512,512,(n,e,t)=>{n.fillStyle="#86c95a",n.fillRect(0,0,e,t);let i=qt(9);for(let s=0;s<2600;s++){let r=i()*e,a=i()*t,o=6+i()*10;n.strokeStyle=i()<.5?"rgba(70,140,40,.5)":"rgba(170,225,110,.5)",n.lineWidth=2,n.beginPath(),n.moveTo(r,a),n.lineTo(r+(i()-.5)*4,a-o),n.stroke()}for(let s=0;s<40;s++){let r=i()*e,a=i()*t,o=["#fff6cf","#ffd35c","#ff9ec4","#ffffff"][i()*4|0];for(let c=0;c<5;c++)n.fillStyle=o,n.beginPath(),n.arc(r+Math.cos(c*1.26)*4,a+Math.sin(c*1.26)*4,3.2,0,7),n.fill();n.fillStyle="#ffb11f",n.beginPath(),n.arc(r,a,2.4,0,7),n.fill()}},{repeat:[8,8]})),Rd=()=>Mn("sand",()=>Jt(512,512,(n,e,t)=>{n.fillStyle="#ecc98e",n.fillRect(0,0,e,t);let i=qt(13);for(let s=0;s<5e3;s++)n.fillStyle=i()<.5?"rgba(160,110,50,.25)":"rgba(255,245,220,.4)",n.fillRect(i()*e,i()*t,2,2);for(let s=0;s<30;s++)n.fillStyle="rgba(150,105,55,.5)",n.beginPath(),n.ellipse(i()*e,i()*t,5+i()*6,3+i()*4,i()*3,0,7),n.fill()},{repeat:[8,8]})),Wc=(n,e,t)=>Mn("sky"+n+t,()=>Jt(8,512,(i,s,r)=>{let a=i.createLinearGradient(0,0,0,r);a.addColorStop(0,n),a.addColorStop(.55,e),a.addColorStop(1,t),i.fillStyle=a,i.fillRect(0,0,s,r)})),Zh=n=>Mn("view"+n,()=>Jt(512,512,(e,t,i)=>{let s=qt(n?21:4),r=e.createLinearGradient(0,0,0,i);if(n?(r.addColorStop(0,"#141c4d"),r.addColorStop(1,"#3a4aa0")):(r.addColorStop(0,"#5cb6f5"),r.addColorStop(.75,"#bfe6ff"),r.addColorStop(1,"#e8f7ff")),e.fillStyle=r,e.fillRect(0,0,t,i),n){for(let c=0;c<70;c++)e.fillStyle=`rgba(255,250,220,${.4+s()*.6})`,e.beginPath(),e.arc(s()*t,s()*i*.7,.8+s()*1.8,0,7),e.fill();let o=e.createRadialGradient(340,150,10,340,150,120);o.addColorStop(0,"rgba(255,240,180,.55)"),o.addColorStop(1,"rgba(255,240,180,0)"),e.fillStyle=o,e.fillRect(0,0,t,i),e.fillStyle="#ffe9a6",e.beginPath(),e.arc(340,150,52,0,7),e.fill(),e.fillStyle="#2a3a8a",e.beginPath(),e.arc(365,130,46,0,7),e.fill()}else{let o=e.createRadialGradient(110,110,10,110,110,110);o.addColorStop(0,"rgba(255,250,210,.95)"),o.addColorStop(1,"rgba(255,250,210,0)"),e.fillStyle=o,e.fillRect(0,0,t,i),e.fillStyle="#ffe26a",e.beginPath(),e.arc(110,110,34,0,7),e.fill();for(let[c,l,h]of[[330,90,1],[420,160,.7]]){e.fillStyle="#ffffff";for(let[u,f,m]of[[0,0,26],[26,-10,30],[54,2,24],[24,10,26]])e.beginPath(),e.arc(c+u*h,l+f*h,m*h,0,7),e.fill()}e.fillStyle="#a7735a",e.beginPath(),e.moveTo(250,400),e.lineTo(330,250),e.lineTo(370,250),e.lineTo(460,400),e.fill(),e.fillStyle="#ff7a3d",e.beginPath(),e.moveTo(330,250),e.quadraticCurveTo(350,275,370,250),e.fill(),e.fillStyle="rgba(230,235,240,.9)";for(let[c,l,h]of[[350,228,12],[360,205,16],[348,180,18]])e.beginPath(),e.arc(c,l,h,0,7),e.fill()}let a=(o,c,l,h)=>{e.fillStyle=c,e.beginPath(),e.moveTo(0,i);for(let u=0;u<=t;u+=8)e.lineTo(u,o-Math.sin(u*h+l)*24-Math.sin(u*h*2.3)*10);e.lineTo(t,i),e.fill()};if(a(380,n?"#203070":"#a6dc76",1,.012),a(440,n?"#1a275c":"#6db447",2.2,.009),!n){e.strokeStyle="#8a5a2b",e.lineWidth=12,e.lineCap="round",e.beginPath(),e.moveTo(140,470),e.quadraticCurveTo(120,360,160,290),e.stroke(),e.fillStyle="#3fae5a";for(let o of[-2.6,-1.9,-1.2,-.5,.2])e.save(),e.translate(160,290),e.rotate(o),e.beginPath(),e.ellipse(48,0,50,13,0,0,7),e.fill(),e.restore()}})),Cd=()=>Mn("paw",()=>Jt(256,256,(n,e,t)=>{n.fillStyle="#fff4e0",n.fillRect(0,0,e,t);let i=n.createRadialGradient(128,128,20,128,128,150);i.addColorStop(0,"#ffe8c4"),i.addColorStop(1,"#ffcf96"),n.fillStyle=i,n.fillRect(10,10,e-20,t-20),n.fillStyle="#b06d3a",n.beginPath(),n.ellipse(128,160,34,40,0,0,7),n.fill();for(let[s,r,a]of[[78,92,-.45],[128,70,0],[178,92,.45]])n.save(),n.translate(s,r),n.rotate(a),n.beginPath(),n.ellipse(0,0,16,34,0,0,7),n.fill(),n.restore()})),Xc=(n,e,t)=>Mn("rug"+n,()=>Jt(512,512,(i,s,r)=>{let a=s/2,o=r/2,c=[[250,n],[215,e],[190,n],[160,t],[130,n],[96,e],[70,n]];for(let[h,u]of c)i.fillStyle=u,i.beginPath(),i.arc(a,o,h,0,7),i.fill();i.setLineDash([14,10]),i.strokeStyle="rgba(255,255,255,.75)",i.lineWidth=6,i.beginPath(),i.arc(a,o,112,0,7),i.stroke();let l=qt(2);for(let h=0;h<3e3;h++)i.fillStyle=`rgba(0,0,0,${l()*.05})`,i.fillRect(l()*s,l()*r,2,2)})),Yn=(n,e,t=8,i=!1)=>Mn("st"+n+e+t+i,()=>Jt(256,256,(s,r,a)=>{for(let o=0;o<t;o++)s.fillStyle=o%2?e:n,i?s.fillRect(r*o/t,0,r/t+1,a):s.fillRect(0,a*o/t,r,a/t+1)})),qc=(n,e,t=1)=>{let i=document.createElement("canvas");i.width=512,i.height=256;let s=i.getContext("2d");s.fillStyle=n,s.fillRect(0,0,512,256);let r=qt(t);for(let o=0;o<26;o++){s.fillStyle=e,s.globalAlpha=.75+r()*.25;let c=r()*512,l=30+r()*200,h=10+r()*18,u=8+r()*14,f=r()*3;for(let m of[-512,0,512])s.beginPath(),s.ellipse(c+m,l,h,u,f,0,7),s.fill()}s.globalAlpha=1;let a=new fs(i);return a.colorSpace=$t,a.anisotropy=8,a.wrapS=Vi,{tex:a,canvas:i,g:s}},Id=()=>Mn("straw",()=>Jt(256,256,(n,e,t)=>{n.fillStyle="#c99a52",n.fillRect(0,0,e,t);let i=qt(17);for(let s=0;s<500;s++){n.strokeStyle=i()<.5?"rgba(255,225,150,.7)":"rgba(120,80,30,.5)",n.lineWidth=2+i()*2;let r=i()*e,a=i()*t,o=i()*3;n.beginPath(),n.moveTo(r,a),n.lineTo(r+Math.cos(o)*30,a+Math.sin(o)*30),n.stroke()}},{repeat:[3,1]})),Pd=()=>Mn("weave",()=>Jt(256,256,(n,e,t)=>{n.fillStyle="#c98a4b",n.fillRect(0,0,e,t);for(let i=0;i<8;i++)for(let s=0;s<8;s++)n.fillStyle=(s+i)%2?"#e3ad6b":"#b9783c",n.beginPath(),n.roundRect(s*32+2,i*32+2,28,28,8),n.fill()},{repeat:[6,2]})),wa=(n,e)=>Mn("bl"+n+e,()=>Jt(128,128,(t,i,s)=>{t.fillStyle=e,t.fillRect(0,0,i,s),t.strokeStyle="rgba(255,255,255,.7)",t.lineWidth=8,t.strokeRect(8,8,i-16,s-16),t.fillStyle="#ffffff",t.font="700 84px Fredoka, Varela Round, sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText(n,i/2,s/2+4)}));var Ht=-2.3;function dt(n,e,t,i,s,r,a={}){let o=new Q(new xi(e,t,i,a.seg??4,a.r??Math.min(e,t,i)*.18),s);return o.position.copy(r),a.rot&&o.rotation.set(a.rot.x||0,a.rot.y||0,a.rot.z||0),o.castShadow=a.shadow!==!1,o.receiveShadow=!0,n.add(o),o}function ss(n,e,t,i,s={}){let r=new Dn(e.map(([o,c])=>fe(o,c)),s.seg??48),a=new Q(r,t);return a.position.copy(i),a.castShadow=s.shadow!==!1,a.receiveShadow=!0,s.scale&&a.scale.copy(s.scale),n.add(a),a}function pr(n,e={}){return new an({map:n,roughness:e.roughness??.85,metalness:0,color:e.color?new ge(e.color):new ge("#ffffff")})}function Yc(n,e,t,i={}){let s=new Q(new Vt(22,10),pr(e,{roughness:.95}));s.position.set(0,4.6,Ht),s.receiveShadow=!0,n.add(s);let r=new Q(new Vt(22,16),pr(t,{roughness:i.floorRough??.7}));r.rotation.x=-Math.PI/2,r.position.set(0,0,Ht+8),r.receiveShadow=!0,n.add(r);let a=new Q(new Vt(22,.9),new Gt({map:Wc("rgba(60,30,20,0)","rgba(60,30,20,0.08)","rgba(60,30,20,0.28)"),transparent:!0,depthWrite:!1}));if(a.position.set(0,.45,Ht+.01),n.add(a),i.base&&dt(n,22,i.baseH??.16,.08,vn(i.base,{roughness:.6}),g(0,(i.baseH??.16)/2,Ht+.04),{r:.02,shadow:!1}),i.wains){let o=vn(i.wains,{roughness:.75}),c=new Q(new Vt(22,i.wainsH),o);c.position.set(0,i.wainsH/2,Ht+.02),c.receiveShadow=!0,n.add(c);let l=dt(n,22,.08,.1,vn(i.rail,{roughness:.5}),g(0,i.wainsH,Ht+.05),{r:.03,shadow:!1}),h=[];for(let u=-10;u<=10;u+=1.1)h.push(dt(n,.86,i.wainsH-.42,.03,vn(ya(i.wains,.12).getStyle(),{roughness:.7}),g(u,i.wainsH/2+.06,Ht+.035),{r:.012,shadow:!1}));return{wall:s,floor:r,panel:c,rail:l,panels:h}}return{wall:s,floor:r}}function Ud(n,e,t,i,s,r,a){let o=new le;o.position.set(e,t,Ht),n.add(o);let c=te("#fff8ee",{roughness:.45,sheen:.2}),l=Nt([fe(-i/2,-s/2),fe(i/2,-s/2),fe(i/2,s/2),fe(-i/2,s/2)],.12),h=new Zi,u=i-.2,f=s-.2;h.moveTo(-u/2,-f/2),h.lineTo(u/2,-f/2),h.lineTo(u/2,f/2),h.lineTo(-u/2,f/2),h.lineTo(-u/2,-f/2),l.holes.push(h);let m=gt(o,l,.08,c,{bevel:.035,bevelSize:.035});m.position.z=.08;let x=new Q(new Vt(u,f),new Gt({map:Zh(r),toneMapped:!1}));x.position.z=.02,o.add(x),dt(o,.06,f,.05,c,g(0,0,.09),{r:.02}),dt(o,u,.06,.05,c,g(0,0,.09),{r:.02});let _=new Q(new Vt(u,f),new je({color:"#ffffff",roughness:.05,transparent:!0,opacity:.14,clearcoat:1}));if(_.position.z=.07,o.add(_),dt(o,i+.3,.1,.32,c,g(0,-s/2-.04,.16),{r:.04}),a){let d=new Q(new ht(.03,.03,i+1,16),re("#d9a441",{metalness:.6,roughness:.3}));d.rotation.z=Math.PI/2,d.position.set(0,s/2+.22,.32),o.add(d);for(let p of[-1,1])Z(o,g(p*(i/2+.5),s/2+.22,.32),g(.06,.06,.06),re("#d9a441",{metalness:.6,roughness:.3}),{seg:16});for(let p of[-1,1]){let T=s+.5,v=new Vt(.55,T,40,30),E=v.attributes.position;for(let M=0;M<E.count;M++){let R=E.getX(M),U=(E.getY(M)+T/2)/T,D=1-.45*Math.exp(-((U-.32)**2)/.012);E.setX(M,R*D+p*(1-D)*.12),E.setZ(M,Math.sin((R/.55+.5)*Math.PI*5)*.045*(.6+.4*U))}v.computeVertexNormals();let w=new Q(v,new je({color:a,roughness:.75,sheen:.8,sheenColor:ya(a,.4),side:Rt}));w.position.set(p*(i/2+.22),.02,.36),w.castShadow=!0,w.receiveShadow=!0,o.add(w);let C=new Q(new Tt(.1,.022,8,24),re("#d9a441",{metalness:.5,roughness:.3}));C.position.set(p*(i/2+.24),-s/2+.32*(s+.5)-.2,.4),C.scale.set(1.3,.6,1),o.add(C)}}return o}function Ld(n,e,t=1){let i=new le;i.position.copy(e),i.scale.setScalar(t),n.add(i),ss(i,[[0,0],[.2,0],[.24,.05],[.27,.36],[.31,.38],[.31,.44],[.27,.44],[.25,.4],[0,.4]],te("#ff8a5c",{roughness:.5,sheen:.2}),g(0,0,0)),Z(i,g(0,.41,0),g(.25,.04,.25),vn("#6b4424"),{seg:24});let s=Nt([fe(0,0),fe(.11,.18),fe(.06,.48),fe(0,.56),fe(-.06,.48),fe(-.11,.18)],.05),r=qt(4);for(let a=0;a<9;a++){let o=a/9*Math.PI*2+r()*.3,c=gt(i,s,.012,te(a%2?"#3fae5a":"#5cc46a",{roughness:.45}),{bevel:.008,bevelSize:.008,bend:1.4});c.position.set(Math.cos(o)*.05,.42,Math.sin(o)*.05),c.rotation.set(0,-o+Math.PI/2,0),c.rotateX(.5+r()*.4),c.scale.setScalar(.9+r()*.5)}return i}function Dd(n,e,t,i,s,r="#ffc83d"){let a=new le;a.position.copy(e),n.add(a);let o=Nt([fe(-t/2,-i/2),fe(t/2,-i/2),fe(t/2,i/2),fe(-t/2,i/2)],.06),c=new Zi,l=t-.14,h=i-.14;c.moveTo(-l/2,-h/2),c.lineTo(l/2,-h/2),c.lineTo(l/2,h/2),c.lineTo(-l/2,h/2),c.lineTo(-l/2,-h/2),o.holes.push(c),gt(a,o,.05,new je({color:r,metalness:.5,roughness:.35,clearcoat:.6}),{bevel:.02,bevelSize:.02}).position.z=.05;let u=new Q(new Vt(l,h),pr(s,{roughness:.6}));return u.position.z=.02,a.add(u),a}var Nd=[{wall:["#ffe2c2","#ffc99a","#ffd9b4"],wains:"#f7c391",rail:"#e9a96e",rug:["#ff9a8f","#fff2df","#ffd35c"]},{wall:["#dff5e8","#b8e6cb","#cdeedb"],wains:"#a8dcc0",rail:"#7cc3a0",rug:["#6fc4a0","#fff7e8","#ffd35c"]},{wall:["#dcefff","#b5d9fa","#cbe4fd"],wains:"#a9cdef",rail:"#7fb1e0",rug:["#6aaeee","#fff6e6","#ffd35c"]},{wall:["#ece4ff","#d3c4ff","#e0d6ff"],wains:"#c9b8f5",rail:"#a993ea",rug:["#b29af0","#fff4ff","#ffd35c"]},{wall:["#fff4c8","#ffe28a","#ffecb0"],wains:"#ffd970",rail:"#f2bf3c",rug:["#ff9a5c","#fff8e6","#7cc85a"]}];function _y(){let n=new le,e=Yc(n,qh("#ffe2c2","#ffc99a","#ffd9b4"),Yh("#e3a46c","#c98a50"),{wains:"#f7c391",wainsH:1.15,rail:"#e9a96e",base:"#d98e55"});Ud(n,-.75,2.75,1.25,1.1,!1,"#ff9a9a"),Dd(n,g(.82,2.85,Ht+.03),.6,.6,Cd()),Dd(n,g(2.7,2.4,Ht+.03),.8,.6,Zh(!1),"#e9b96e"),Ld(n,g(1.15,0,-1.2),1.15),Ld(n,g(-3.4,0,-1.4),1.4);let t=new Q(new ht(1.25,1.25,.02,72),pr(Xc("#ff9a8f","#fff2df","#ffd35c"),{roughness:.95}));t.scale.set(1.25,1,.75),t.position.set(0,.012,.15),t.receiveShadow=!0,n.add(t);let i=o=>{let c=Nd[o]||Nd[0];e.wall.material.map=qh(...c.wall),e.wall.material.needsUpdate=!0,t.material.map=Xc(...c.rug),t.material.needsUpdate=!0,e.panel&&(e.panel.material=vn(c.wains,{roughness:.75})),e.rail&&(e.rail.material=vn(c.rail,{roughness:.5}));for(let l of e.panels||[])l.material=vn(ya(c.wains,.12).getStyle(),{roughness:.7});return c.wall[0]};[["\u05D0","#ff5d8f"],["\u05D1","#4fb8ff"],["\u05D2","#7cc85a"]].forEach(([o,c],l)=>{let h=new Q(new xi(.24,.24,.24,4,.035),new je({map:wa(o,c),roughness:.45,clearcoat:.4}));h.position.set(-1.15+l*.27-(l===2?.13:0),.12+(l===2?.24:0),-.45+(l===1?.06:0)),h.rotation.y=.4+l*.3,h.castShadow=!0,h.receiveShadow=!0,n.add(h)});let r=new Q(new St(.17,48,32),new je({map:Yn("#4fb8ff","#ffffff",6,!0),roughness:.35,clearcoat:.7}));r.position.set(1,.17,.55),r.rotation.z=.5,r.castShadow=!0,n.add(r);let a=te("#7fc6bc",{roughness:.75,sheen:.7});dt(n,2,.42,.8,a,g(-3,.3,-1.75),{r:.15}),dt(n,2,.75,.25,a,g(-3,.75,-2.08),{r:.12});for(let o of[-1,1])dt(n,.25,.6,.8,a,g(-3+o*1,.45,-1.75),{r:.12});return dt(n,.5,.35,.18,te("#ffd35c",{sheen:.6,roughness:.8}),g(-3.4,.68,-1.9),{r:.1,rot:{z:.2}}),{group:n,wall:"#ffe2c2",setTheme:i}}function yy(){let n=new le;Yc(n,Ea("#e9f7f0","#ffffff",10),Ea("#f6e3bd","#e8cf9a",6,"#e2c084"),{base:"#6fb79c"});let e=te("#f9fffd",{roughness:.35,sheen:.15,clearcoat:.4}),t=te("#7fd1bd",{roughness:.45,clearcoat:.3}),i=re("#cfd8e2",{metalness:.8,roughness:.25});dt(n,.9,2.1,.75,e,g(-1.25,1.05,-1.75),{r:.14}),dt(n,.86,.02,.02,re("#c7d3cf"),g(-1.25,1.42,-1.37),{r:.005,shadow:!1}),dt(n,.06,.38,.06,i,g(-.92,1.72,-1.33),{r:.03}),dt(n,.06,.55,.06,i,g(-.92,1,-1.33),{r:.03});let s=[["#ff4b5c",-1.42,1.85],["#ffd35c",-1.2,1.68],["#4fb8ff",-1.48,1.05]];for(let[h,u,f]of s){let m=Z(n,g(u,f,-1.36),g(.06,.06,.03),re(h),{seg:20})}dt(n,2.2,.85,.7,t,g(1.55,.43,-1.85),{r:.06}),dt(n,2.3,.08,.8,te("#fffaf0",{roughness:.3,clearcoat:.6}),g(1.55,.9,-1.82),{r:.03});for(let h of[.95,1.55,2.15])dt(n,.5,.62,.03,te("#95ddca",{roughness:.4}),g(h,.44,-1.49),{r:.04,shadow:!1}),dt(n,.14,.04,.05,i,g(h,.66,-1.46),{r:.02});ss(n,[[0,0],[.12,0],[.22,.04],[.3,.14],[.32,.16],[.3,.17],[.2,.08],[0,.06]],re("#ffffff",{roughness:.2}),g(1.25,.94,-1.8));for(let[h,u,f,m]of[[1.15,-1.8,"#ff4b5c",.1],[1.33,-1.78,"#ffd35c",.1],[1.25,-1.9,"#7cc85a",.095],[1.23,-1.75,"#ff9f43",.085]])Z(n,g(h,1.12+(m-.08),u),g(m,m,m),re(f,{roughness:.35}),{seg:32});dt(n,1.3,.06,.3,te("#e9a96e",{roughness:.5}),g(.75,2.45,Ht+.15),{r:.02});let r=(h,u,f,m)=>{let x=new Q(new ht(.13,.13,u,32),new je({color:"#ffffff",transmission:.6,roughness:.08,thickness:.1,transparent:!0,opacity:.6}));x.position.set(h,2.48+u/2,Ht+.15),n.add(x),Z(n,g(h,2.48+u+.02,Ht+.15),g(.14,.04,.14),re(f),{seg:24});for(let _=0;_<4;_++)Z(n,g(h+(_%2-.5)*.1,2.52+(_>>1)*.08,Ht+.15),g(.05,.035,.05),te(m),{seg:16})};r(.35,.3,"#ff5d8f","#c27e48"),r(.75,.24,"#4fb8ff","#ffd35c"),r(1.1,.28,"#7cc85a","#ff9f43");let a=new le;a.position.set(-.2,3.1,Ht+.04),n.add(a);let o=new Q(new ht(.28,.28,.06,48),te("#ffffff",{roughness:.3}));o.rotation.x=Math.PI/2,a.add(o);let c=new Q(new Tt(.28,.035,12,48),re("#ff8a5c"));c.position.z=.02,a.add(c);for(let h=0;h<12;h++){let u=h/12*Math.PI*2;Z(a,g(Math.cos(u)*.21,Math.sin(u)*.21,.035),g(.014,.014,.01),re("#1b2430"),{seg:8,shadow:!1})}dt(a,.025,.15,.015,re("#1b2430"),g(0,.06,.045),{r:.007,shadow:!1});let l=dt(a,.02,.2,.015,re("#1b2430"),g(.06,.03,.05),{r:.006,shadow:!1});l.rotation.z=-.9,dt(n,.5,.06,.5,te("#ffd35c",{roughness:.5}),g(-2.8,.8,-.9),{r:.03});for(let[h,u]of[[-.2,-.2],[.2,-.2],[-.2,.2],[.2,.2]])dt(n,.05,.78,.05,te("#e9a96e"),g(-2.8+h,.4,-.9+u),{r:.02});return{group:n}}function vy(){let n=new le;Yc(n,Ea("#d7f0ff","#ffffff",10),Ea("#9fd5ee","#ffffff",8),{base:"#7cc3e6"});let e=te("#ffffff",{roughness:.18,clearcoat:1,sheen:0}),t=new le;n.add(t);let i=new Q(new xi(2.4,.74,1.5,6,.34),e);i.position.set(0,.42,-.15),i.castShadow=!0,i.receiveShadow=!0,t.add(i);let s=new Q(new xi(2.5,.12,1.6,6,.06),e);s.position.set(0,.78,-.15),s.receiveShadow=!0,t.add(s);let r=new Q(new Vt(2.2,1.35),new je({color:"#8fd4f4",roughness:.05,clearcoat:1,transparent:!0,opacity:.95}));r.rotation.x=-Math.PI/2,r.position.set(0,.8,-.15),t.add(r);let a=te("#ffffff",{roughness:.3,sheen:.8,clearcoat:.5}),o=qt(8),c=new le;t.add(c);for(let D=0;D<70;D++){let H=o()*Math.PI*2,N=.45+o()*.62,k=Math.cos(H)*N*1.5,O=-.15+Math.sin(H)*N*.8;if(Math.abs(k)>1.08||Math.abs(O+.15)>.62)continue;let V=.07+o()*.11;Z(c,g(k,.81+V*.35,O),g(V,V*.8,V),a,{seg:20,shadow:!1})}for(let D of[-1,1])for(let H of[-1,1])ss(t,[[0,0],[.09,0],[.11,.06],[.07,.14],[.09,.2],[0,.2]],re("#ffc83d",{metalness:.6,roughness:.3}),g(D*.95,-.02,-.15+H*.5),{seg:20});let l=new le;l.position.set(.95,.84,.42),l.rotation.y=-.6,n.add(l),Z(l,g(0,.09,0),g(.13,.09,.11),re("#ffd23a",{roughness:.3}),{seg:32}),Z(l,g(.07,.2,0),g(.07,.07,.07),re("#ffd23a",{roughness:.3}),{seg:32});let h=Bt(l,.06,.03,re("#ff8a2a"),{radial:12});h.position.set(.13,.19,0),h.rotation.z=-Math.PI/2;for(let D of[-1,1])Z(l,g(.1,.23,D*.04),g(.012,.012,.012),re("#1b2430"),{seg:8,shadow:!1});let u=new le;u.position.set(-.75,2.75,Ht+.03),n.add(u);let f=new Q(new Tt(.42,.05,16,64),new je({color:"#ffc43a",metalness:.8,roughness:.25}));f.scale.set(.8,1,1),u.add(f);let m=new Q(new Ln(.42,48),new je({color:"#dff4ff",metalness:1,roughness:.04}));m.scale.set(.8,1,1),m.position.z=-.01,u.add(m);let x=new Q(new ht(.025,.025,.8,16),re("#dfe7ef",{metalness:.8,roughness:.2}));x.rotation.z=Math.PI/2,x.position.set(.85,2.95,Ht+.12),n.add(x);let _=new Vt(.6,.85,20,20);{let D=_.attributes.position;for(let H=0;H<D.count;H++){let N=D.getX(H),k=D.getY(H);D.setZ(H,Math.sin(N*9)*.015+(k>.38,0))}_.computeVertexNormals()}let d=new Q(_,new je({map:Yn("#ff8fbf","#ffd0e4",10),roughness:.9,sheen:1,sheenColor:new ge("#ffe0ee"),side:Rt}));d.position.set(.85,2.55,Ht+.14),d.castShadow=!0,n.add(d),dt(n,.9,.05,.22,e,g(1.6,2,Ht+.11),{r:.02});for(let[D,H,N]of[[1.35,.32,"#7fd1c7"],[1.6,.24,"#ff9ec4"],[1.82,.28,"#ffd35c"]])ss(n,[[0,0],[.07,0],[.08,.02],[.08,H*.8],[.04,H*.9],[.035,H],[0,H]],re(N,{roughness:.25}),g(D,2.03,Ht+.11),{seg:24});let p=new Q(new ht(.025,.025,2.8,16),re("#dfe7ef",{metalness:.8,roughness:.2}));p.rotation.z=Math.PI/2,p.position.set(0,3,.75),n.add(p);let y=new le;n.add(y);let T=new Vt(2.7,3,60,20),v=T.attributes.position,E=Float32Array.from(v.array),w=new Q(T,new je({map:Yn("#bfe9ff","#ffffff",14,!0),roughness:.6,sheen:.5,side:Rt,transparent:!0,opacity:.97}));w.position.set(0,1.5,.78),w.castShadow=!0,y.add(w);let C=[];for(let D=0;D<10;D++){let H=new Q(new Tt(.05,.012,8,20),re("#ffffff"));H.position.set(0,3,.75),y.add(H),C.push(H)}let M=1,R=D=>{M=D;let H=2.7,N=-1.35,k=.18;for(let O=0;O<v.count;O++){let V=(E[O*3]+H/2)/H,ee=k+(H-k)*(1-D),J=N+V*ee,ie=(.05+.1*D)*Math.sin(V*Math.PI*(14+10*D));v.setX(O,J-0),v.setZ(O,ie)}v.needsUpdate=!0,T.computeVertexNormals(),w.position.x=0,C.forEach((O,V)=>{O.position.x=N+V/9*(k+(H-k)*(1-D))}),y.visible=!0};R(1);let P=new le;P.position.set(-1.55,0,.45),n.add(P),ss(P,[[0,0],[.18,0],[.22,.04],[.26,.24],[.3,.27],[.27,.3],[.2,.26],[0,.24]],te("#ffffff",{roughness:.25,clearcoat:.8}),g(0,0,0));let U=new Q(new Tt(.235,.05,16,40),te("#ff9ec4",{roughness:.4,clearcoat:.5}));return U.rotation.x=Math.PI/2,U.position.y=.3,P.add(U),{group:n,tub:{shell:i,foam:c},setCurtain:R,petY:.02,petZ:-.12}}function My(){let n=new le;Yc(n,Td(),Yh("#c99a74","#a8794f"),{wains:"#a59bf0",wainsH:1,rail:"#8f84e6",base:"#7d72d6"}),Ud(n,-.8,2.75,1.2,1.05,!0,"#8f84e6");let e=te("#9c8ff2",{roughness:.55,sheen:.4}),t=dt(n,2.3,1.45,.16,e,g(0,.8,-1.55),{r:.08});for(let[d,p]of[[-.7,"#fff3c4"],[0,"#ffe08a"],[.7,"#fff3c4"]]){let y=new Ot;for(let v=0;v<10;v++){let E=Math.PI/2+v*Math.PI/5,w=v%2?.06:.13;v?y.lineTo(Math.cos(E)*w,Math.sin(E)*w):y.moveTo(Math.cos(E)*w,Math.sin(E)*w)}gt(n,y,.03,re(p,{roughness:.35}),{bevel:.015,bevelSize:.015}).position.set(d,1.3,-1.45)}dt(n,2.3,.32,1.9,te("#8578e0",{roughness:.5}),g(0,.2,-.55),{r:.08}),dt(n,2.2,.26,1.85,te("#fffaf0",{roughness:.7,sheen:.5}),g(0,.46,-.55),{r:.11}),dt(n,.95,.24,.45,te("#ffffff",{roughness:.8,sheen:.8}),g(-.45,.68,-1.25),{r:.11,rot:{x:-.25}});let i=new le;n.add(i);let s=new xi(2.3,.18,1.35,6,.08);{let d=s.attributes.position;for(let p=0;p<d.count;p++){let y=d.getX(p),T=d.getZ(p);d.setY(p,d.getY(p)+Math.sin(y*4+T*3)*.02)}s.computeVertexNormals()}let r=new Q(s,new je({map:Yn("#ff9a9a","#ffb8b0",12,!0),roughness:.8,sheen:1,sheenColor:new ge("#ffe2dc")}));r.castShadow=!0,r.receiveShadow=!0,i.add(r);let a=dt(i,2.32,.12,.2,te("#fff3e6",{roughness:.8,sheen:.8}),g(0,.04,-.6),{r:.06});dt(n,.6,.6,.5,te("#e9b17a",{roughness:.5}),g(1.55,.3,-1.6),{r:.06}),dt(n,.08,.04,.04,re("#ffc43a",{metalness:.6}),g(1.55,.38,-1.34),{r:.015});let o=new le;o.position.set(1.55,.6,-1.6),n.add(o),ss(o,[[0,0],[.16,0],[.16,.04],[.04,.06],[.03,.4],[0,.4]],re("#ffc43a",{metalness:.5,roughness:.3}),g(0,0,0),{seg:24});let c=new je({color:"#fff1c4",roughness:.7,emissive:new ge("#ffd27a"),emissiveIntensity:.9,side:Rt,transmission:0}),l=new Q(new ht(.14,.24,.28,32,1,!0),c);l.position.y=.48,o.add(l);let h=g(1.55,1.05,-1.5),u=new le;u.position.set(.95,3.95,-.9),n.add(u);let f=new Q(new ht(.012,.012,1,8),re("#ffffff"));f.rotation.z=Math.PI/2,u.add(f);let m=[];for(let[d,p,y,T]of[[-.45,.5,"#ffe08a","star"],[0,.75,"#ff9ec4","moon"],[.45,.55,"#9fdcff","star"]]){let v=new Q(new ht(.004,.004,p,6),Ms("#ffffff"));v.position.set(d,-p/2,0),u.add(v);let E=new le;E.position.set(d,-p-.1,0),u.add(E);let w;if(T==="star"){w=new Ot;for(let C=0;C<10;C++){let M=Math.PI/2+C*Math.PI/5,R=C%2?.05:.11;C?w.lineTo(Math.cos(M)*R,Math.sin(M)*R):w.moveTo(Math.cos(M)*R,Math.sin(M)*R)}}else w=new Ot,w.absarc(0,0,.11,Math.PI*.3,Math.PI*1.7,!1),w.absarc(.05,0,.09,Math.PI*1.6,Math.PI*.4,!0);gt(E,w,.03,re(y,{roughness:.3}),{bevel:.015,bevelSize:.015}),m.push(E)}let x=d=>{u.rotation.y=Math.sin(d*.4)*.5,m.forEach((p,y)=>{p.rotation.y=Math.sin(d*.9+y)*.8})},_=new Q(new ht(1.2,1.2,.02,64),pr(Xc("#b9b0ff","#fff3e6","#ffe08a"),{roughness:.95}));return _.scale.set(1.4,1,.55),_.position.set(0,.012,.85),_.receiveShadow=!0,n.add(_),dt(n,1.2,.06,.28,te("#e9b17a"),g(2.8,1.9,Ht+.14),{r:.02}),Z(n,g(2.5,2.07,Ht+.15),g(.12,.12,.12),re("#ff5d8f"),{seg:24}),dt(n,.22,.22,.22,re("#4fb8ff",{roughness:.4}),g(2.85,2.04,Ht+.15),{r:.03}),{group:n,blanket:i,lampAt:h,shadeMat:c,update:x,petY:.58,petZ:-.5}}function $h(n){let e=new le,t=new Q(new Ln(30,64),pr(n?Rd():Ad(),{roughness:.95}));t.rotation.x=-Math.PI/2,t.receiveShadow=!0,e.add(t);let i=new Gt({map:n?Wc("#6fc0f7","#cfeeff","#fff2d6"):Wc("#5cb4f5","#bfe6ff","#f2fbff"),side:Xt,toneMapped:!1,depthWrite:!1}),s=new Q(new St(40,32,16),i);e.add(s);let r=_=>te(_,{roughness:.8,sheen:.3}),a=n?[[-9,-14,7,2.6,"#f2d39b"],[6,-16,9,3.2,"#e8c286"],[16,-12,6,2.2,"#f2d39b"],[-18,-10,6,2,"#e8c286"]]:[[-9,-14,7,2.6,"#a6dc76"],[6,-16,9,3.2,"#8fd062"],[16,-12,6,2.2,"#a6dc76"],[-18,-10,6,2,"#8fd062"]];for(let[_,d,p,y,T]of a)Z(e,g(_,-.2,d),g(p,y,p*.7),r(T),{seg:48,shadow:!1});let o=new le;o.position.set(n?3.5:-4.2,0,-9),e.add(o),ss(o,[[0,3],[.55,3],[.7,2.85],[1.6,1.4],[2.8,.2],[3,0],[0,0]],te("#a87458",{roughness:.85}),g(0,0,0),{seg:48}),ss(o,[[0,2.98],[.6,2.98],[.66,2.9],[.8,2.55],[.5,2.6],[0,2.7]],re("#ff6a2a",{emissive:"#ff5a1a",emissiveIntensity:.6,roughness:.4}),g(0,.02,0),{seg:32});for(let _ of[.3,1.4,2.6]){let d=et(o,[g(Math.cos(_)*.65,2.85,Math.sin(_)*.65),g(Math.cos(_)*1,2.2,Math.sin(_)*1),g(Math.cos(_)*1.3,1.6,Math.sin(_)*1.3)],[.12,.09,.05],re("#ff7a3d",{emissive:"#ff5a1a",emissiveIntensity:.4}),{tubular:16,radial:10})}let c=[];for(let _=0;_<6;_++){let d=Z(o,g(0,3.2,0),g(.4,.4,.4),te("#eef1f5",{roughness:.9,sheen:.5}),{seg:24,shadow:!1});d.userData.ph=_/6,c.push(d)}let l=(_,d,p,y)=>{let T=new le;if(T.position.set(_,0,d),T.scale.setScalar(p),e.add(T),y){let E=et(T,[g(0,0,0),g(.15,1.2,0),g(.05,2.4,.1),g(-.25,3.2,.1)],[.16,.13,.11,.09],te("#b07a44",{roughness:.8}),{tubular:32,radial:16}).curve.getPointAt(1),w=Nt([fe(0,0),fe(.25,.4),fe(.12,1.3),fe(0,1.5),fe(-.12,1.3),fe(-.25,.4)],.12);for(let C=0;C<7;C++){let M=C/7*Math.PI*2,R=gt(T,w,.02,te(C%2?"#3fae5a":"#5cc46a",{roughness:.45}),{bevel:.01,bevelSize:.01,bend:-.9});R.position.copy(E),R.rotation.set(0,-M,0),R.rotateX(1.1)}for(let[C,M]of[[.1,.1],[-.08,.12],[.02,-.1]])Z(T,E.clone().add(g(C,-.12,M)),g(.09,.1,.09),te("#8a5a2b"),{seg:16})}else{et(T,[g(0,0,0),g(.05,.8,0),g(0,1.4,0)],[.18,.14,.12],te("#a8723d",{roughness:.85}),{tubular:16,radial:14});let v=te("#4fb85a",{roughness:.65,sheen:.5});for(let[E,w,C,M]of[[0,1.9,0,.75],[-.5,1.6,.1,.55],[.5,1.65,.05,.55],[.1,2.35,-.05,.5],[0,1.6,-.45,.55]])Z(T,g(E,w,C),g(M,M*.9,M),v,{seg:32});for(let[E,w,C]of[[.3,1.8,.62],[-.4,1.5,.55],[.55,2.2,.3]])Z(T,g(E,w,C),g(.08,.08,.08),re("#ff4b5c"),{seg:16})}};n?(l(-2.6,-3.5,.9,!0),l(3.2,-4.5,1.1,!0)):(l(-2.4,-3.2,1,!1),l(2.8,-4.2,1.15,!0),l(-6,-6,1.3,!1),l(6.5,-7,1.2,!1));let h=te(n?"#c9a16a":"#b9b2a8",{roughness:.9});for(let[_,d,p]of[[-1.4,-.9,.22],[1.5,-1.2,.3],[-2.2,.2,.18]])Z(e,g(_,p*.4,d),g(p*1.3,p,p),h,{seg:24});if(!n)for(let[_,d]of[[1.3,.4],[-1.2,.5],[.8,-.8],[-.7,-1.2],[2,-.3]]){let p=new le;p.position.set(_,0,d),e.add(p),et(p,[g(0,0,0),g(0,.2,0)],[.012,.01],te("#3f9a3a"),{tubular:4,radial:6});let y=["#ff9ec4","#fff3c4","#ffd35c"][(Math.abs(_*10)|0)%3];for(let T=0;T<5;T++){let v=T/5*Math.PI*2;Z(p,g(Math.cos(v)*.04,.22,Math.sin(v)*.04),g(.035,.015,.035),te(y),{seg:12,shadow:!1})}Z(p,g(0,.225,0),g(.022,.015,.022),te("#ffb11f"),{seg:10,shadow:!1})}let u=[];for(let[_,d,p,y]of[[-4,6.5,-14,1.6],[3,7.5,-16,2],[9,6.2,-14,1.4],[-10,7.2,-15,1.7]]){let T=new le;T.position.set(_,d,p),T.scale.setScalar(y),e.add(T);for(let[v,E,w]of[[0,0,.6],[.6,.2,.7],[1.2,0,.55],[.6,-.1,.6]])Z(T,g(v,E,0),g(w,w*.8,w*.7),te("#ffffff",{roughness:.9,sheen:.4}),{seg:24,shadow:!1});u.push(T)}let f=new Q(new St(1.2,32,16),new Gt({color:"#fff3a6",toneMapped:!1}));f.position.set(n?-7:7,9,-20),e.add(f);let m=new qi(new Ai({map:is("#fff3b0",128),transparent:!0,depthWrite:!1,toneMapped:!1,opacity:.8}));return m.scale.set(9,9,1),m.position.copy(f.position),e.add(m),{group:e,update:_=>{c.forEach(d=>{let p=(_*.12+d.userData.ph)%1;d.position.set(Math.sin(p*4)*.3,3.2+p*2.4,0),d.scale.setScalar(.25+p*.7),d.material.opacity=1,d.visible=p<.92}),u.forEach((d,p)=>{d.position.x+=Math.sin(_*.05+p)*.002})},outdoor:!0}}function Sy(){let n=new le,e=[];for(let l=0;l<=24;l++){let h=l/24*Math.PI/2;e.push(g(0,1.6-Math.cos(h)*1.6,-Math.sin(h)*1.6+1.6))}let t=[g(0,0,8),g(0,0,0),...Array.from({length:24},(l,h)=>{let u=(h+1)/24*Math.PI/2;return g(0,1.6-Math.cos(u)*1.6,-Math.sin(u)*1.6)}),g(0,9,-1.6)],i=new Ft,s=30,r=[],a=[];t.forEach(l=>{r.push(-s/2,l.y,l.z-1.2,s/2,l.y,l.z-1.2)});for(let l=0;l<t.length-1;l++){let h=l*2;a.push(h,h+1,h+2,h+1,h+3,h+2)}i.setAttribute("position",new st(r,3)),i.setIndex(a),i.computeVertexNormals();let o=new Q(i,new an({color:"#ffd9ae",roughness:.95,side:Rt}));o.receiveShadow=!0,n.add(o);let c=qt(12);for(let l=0;l<18;l++){let h=new qi(new Ai({map:is(c()<.5?"#fff3c4":"#ffc6d9",64),transparent:!0,depthWrite:!1,opacity:.6,toneMapped:!1})),u=.3+c()*.6;h.scale.set(u,u,1),h.position.set((c()-.5)*7,1.2+c()*3.5,-2.6),n.add(h)}return{group:n,studio:!0}}var Ta={home:_y,kitchen:yy,bath:vy,bed:My,play:()=>$h(!1),album:()=>$h(!1),dig:()=>$h(!0),studio:Sy};var zt=(n,e,t,i=.06,s=4)=>new xi(n,e,t,s,i);function rt(n,e,t,i,s){let r=new Q(e,t);return i&&r.position.copy(i),s&&r.rotation.set(s.x||0,s.y||0,s.z||0),r.castShadow=!0,r.receiveShadow=!0,n.add(r),r}function Aa(n,e,t,i,s=48){return rt(n,new Dn(e.map(([r,a])=>fe(r,a)),s),t,i)}function Ra(n,e){let t=new Ot;for(let i=0;i<10;i++){let s=Math.PI/2+i*Math.PI/5,r=i%2?e:n;i?t.lineTo(Math.cos(s)*r,Math.sin(s)*r):t.moveTo(Math.cos(s)*r,Math.sin(s)*r)}return t}var mr={meat(){let n=new le,e=Z(n,g(.12,.12,0),g(.34,.27,.27),te("#c9573e",{roughness:.45,clearcoat:.5}),{rot:{z:.5}});Z(n,g(.18,.2,.12),g(.18,.1,.1),te("#e4825f",{roughness:.4,clearcoat:.6}),{rot:{z:.5}}),et(n,[g(-.12,-.05,0),g(-.42,-.25,0)],[.06,.055],te("#fff6e6",{roughness:.35}));for(let[t,i]of[[-.03,.05],[.05,-.04]])Z(n,g(-.45+t,-.27+i,0),g(.08,.08,.08),te("#fff6e6",{roughness:.35}));return n},fish(){let n=new le;return Z(n,g(0,0,0),g(.42,.22,.13),re("#5ab4ec",{roughness:.25})),Z(n,g(.02,-.06,.02),g(.34,.12,.11),re("#d9f1ff",{roughness:.25})),gt(n,Nt([fe(0,0),fe(.22,.18),fe(.18,0),fe(.22,-.18)],.04),.04,re("#3d97d6",{roughness:.3}),{bevel:.02,bevelSize:.02}).position.set(.36,0,0),gt(n,Nt([fe(-.1,0),fe(.12,0),fe(0,.12)],.03),.02,re("#3d97d6"),{bevel:.01,bevelSize:.01}).position.set(0,.19,0),Z(n,g(-.27,.06,.1),g(.05,.05,.03),re("#ffffff"),{seg:16}),Z(n,g(-.28,.06,.125),g(.028,.028,.02),re("#1b2430"),{seg:12}),n.rotation.z=.15,n},fern(){let n=new le,e=et(n,[g(0,-.4,0),g(.04,0,.02),g(-.02,.4,.04)],[.02,.016,.01],te("#2f8a3a"),{tubular:24,radial:8}),t=Nt([fe(0,0),fe(.05,.04),fe(.17,.02),fe(.19,0),fe(.17,-.02),fe(.05,-.04)],.02);for(let i=0;i<9;i++){let s=.08+i*.1,r=e.curve.getPointAt(s),a=1-s*.6;for(let o of[-1,1]){let c=gt(n,t,.008,te(i%2?"#4fb85a":"#63c66a",{roughness:.45}),{bevel:.004,bevelSize:.004});c.position.copy(r),c.scale.setScalar(a),c.rotation.set(0,0,o<0?Math.PI-.35:.35)}}return n},leaves(){let n=new le,e=et(n,[g(-.4,-.35,0),g(0,0,.02),g(.38,.32,0)],[.03,.025,.015],te("#8a5a2b",{roughness:.8}),{tubular:24,radial:10}),t=Nt([fe(0,0),fe(.08,.06),fe(.1,.18),fe(0,.3),fe(-.1,.18),fe(-.08,.06)],.05);return[[.15,.6],[.35,-.8],[.55,.7],[.75,-.6],[.95,.3]].forEach(([i,s],r)=>{let a=gt(n,t,.01,te(r%2?"#3fae5a":"#5cc46a",{roughness:.4}),{bevel:.006,bevelSize:.006,bend:1.5});a.position.copy(e.curve.getPointAt(i)),a.rotation.set(.3,0,s)}),n},fruit(){let n=new le;Aa(n,[[0,-.02],[.2,.02],[.32,.16],[.34,.3],[.28,.46],[.15,.52],[.06,.48],[0,.45]],re("#ff3b4e",{roughness:.25}),g(0,-.25,0),48),et(n,[g(0,.18,0),g(.03,.32,0)],[.022,.018],te("#6b4424"),{tubular:6,radial:8});let e=gt(n,Nt([fe(0,0),fe(.08,.06),fe(.16,0),fe(.08,-.06)],.04),.01,te("#4fb85a"),{bevel:.006,bevelSize:.006,bend:2});return e.position.set(.04,.29,0),e.rotation.z=.4,Z(n,g(-.14,.12,.22),g(.06,.09,.03),new Gt({color:"#ffffff",transparent:!0,opacity:.55}),{seg:16,shadow:!1}),n},grass(){let n=new le;Z(n,g(0,-.3,0),g(.34,.08,.2),vn("#6b4424"));let e=qt(5);for(let t=0;t<14;t++){let i=(e()-.5)*.5,s=(e()-.5)*.18,r=.4+e()*.3,a=Nt([fe(-.03,0),fe(.03,0),fe(.002,r)],.006),o=gt(n,a,.008,te(e()<.5?"#5cbf55":"#86d46a",{roughness:.45}),{bevel:.004,bevelSize:.004,bend:.8+e()});o.position.set(i,-.3,s),o.rotation.set(0,e()*3,(e()-.5)*.4)}return n},sponge(){let n=new le;rt(n,zt(.62,.36,.3,.1),te("#ffd23a",{roughness:.8,sheen:.3}),g(0,0,0),{z:.15});let e=qt(3);for(let t=0;t<16;t++)Z(n,g((e()-.5)*.5,(e()-.5)*.26,.15),g(.025+e()*.02,.02,.01),vn("#d9a51a"),{seg:10,shadow:!1});for(let[t,i,s]of[[.22,.28,.1],[.05,.3,.07],[.32,.12,.06]])Z(n,g(t,i,.05),g(s,s,s),new je({color:"#ffffff",roughness:.05,transmission:.4,transparent:!0,opacity:.8,clearcoat:1,iridescence:.6}),{seg:24});return n},shower(){let n=new le,e=re("#e6edf4",{metalness:.85,roughness:.2});et(n,[g(.05,-.45,0),g(.08,-.05,0),g(0,.2,.05)],[.05,.045,.05],e,{tubular:16,radial:16});let t=new le;t.position.set(-.05,.3,.08),t.rotation.set(.6,0,.3),n.add(t),rt(t,new ht(.2,.12,.12,40),e),rt(t,new ht(.19,.19,.02,40),re("#cfd8e2"),g(0,.07,0));for(let i=0;i<12;i++){let s=i/12*Math.PI*2;Z(t,g(Math.cos(s)*.11,.08,Math.sin(s)*.11),g(.012,.006,.012),re("#7f8c99"),{seg:8,shadow:!1})}for(let[i,s,r]of[[-.2,0,.3],[-.1,-.1,.35],[-.28,-.12,.25],[-.16,-.25,.32]])Z(n,g(i,s,r),g(.03,.05,.03),re("#5cc3ff",{roughness:.05}),{seg:16});return n},towel(){let n=new le,e=new je({map:Yn("#7fd1c7","#c9f1ea",8),roughness:.9,sheen:1,sheenColor:new ge("#e9fffb")});return rt(n,zt(.7,.16,.5,.07),e,g(0,-.12,0)),rt(n,zt(.7,.16,.5,.07),e,g(.03,.04,-.02),{y:.1}),rt(n,zt(.7,.16,.5,.07),e,g(-.02,.2,.01),{y:-.08}),n},brush(){let n=new le;n.rotation.z=-.7,rt(n,zt(.09,.8,.06,.03),re("#4fb8ff",{roughness:.3}),g(0,0,0)),rt(n,zt(.1,.18,.02,.01),re("#ffffff"),g(0,.32,.05));for(let e=0;e<4;e++)for(let t=0;t<2;t++)rt(n,new ht(.012,.012,.1,6),re(e%2?"#ffffff":"#9fe0ff"),g(-.025+t*.05,.25+e*.045,.1),{x:Math.PI/2});return et(n,[g(-.03,.27,.16),g(0,.33,.18),g(.03,.38,.16)],[.03,.035,.025],te("#7fe0b0",{roughness:.3}),{tubular:12,radial:12}),n},potty(){let n=new le;Aa(n,[[0,0],[.3,0],[.36,.06],[.42,.36],[.48,.4],[.44,.44],[.34,.4],[0,.38]],te("#ffffff",{roughness:.2,clearcoat:.9}),g(0,-.22,0));let e=rt(n,new Tt(.39,.07,16,48),te("#ff9ec4",{roughness:.35,clearcoat:.5}),g(0,.2,0),{x:Math.PI/2});return n.userData.dir=g(.2,.9,1),n},soap(){let n=new le;rt(n,zt(.6,.24,.36,.11),re("#ff9ec4",{roughness:.3}),g(0,-.1,0));for(let[e,t,i]of[[-.12,.18,.11],[.1,.24,.13],[.26,.12,.08],[-.02,.36,.07]])Z(n,g(e,t,.03),g(i,i,i),new je({color:"#ffffff",roughness:.05,transmission:.4,transparent:!0,opacity:.85,clearcoat:1,iridescence:.8}),{seg:24});return n},lamp(){let n=new le;return Aa(n,[[0,0],[.24,0],[.24,.05],[.05,.08],[.04,.5],[0,.5]],re("#ffc43a",{metalness:.5,roughness:.3}),g(0,-.45,0),32),rt(n,new ht(.2,.34,.38,40,1,!0),new je({color:"#fff1c4",emissive:"#ffd27a",emissiveIntensity:.6,roughness:.7,side:Rt}),g(0,.18,0)),Z(n,g(0,.05,0),g(.08,.08,.08),new Gt({color:"#fff8d0"}),{seg:16}),n},book(){let n=new le;n.rotation.set(.5,-.3,0);let e=te("#ff8a5c",{roughness:.5,clearcoat:.3});for(let i of[-1,1]){let s=new le;s.rotation.y=i*-.25,n.add(s),rt(s,zt(.42,.56,.03,.012),e,g(i*.22,0,-.02)),rt(s,zt(.39,.52,.05,.01),te("#fffaf0",{roughness:.8}),g(i*.21,0,.02));for(let r=0;r<4;r++)rt(s,zt(.26,.02,.01,.005),vn("#c9bfae"),g(i*.21,.15-r*.08,.05))}return gt(n,Ra(.08,.035),.015,re("#ffd35c"),{bevel:.007,bevelSize:.007}).position.set(.2,-.17,.06),n},mic(){let n=new le;n.rotation.z=-.35,Z(n,g(0,.24,0),g(.18,.18,.18),new je({color:"#ff9ec4",roughness:.6,sheen:.8,sheenColor:new ge("#ffd9e8")})),rt(n,new Tt(.18,.025,10,40),re("#ffd35c",{metalness:.5}),g(0,.2,0),{x:Math.PI/2}),rt(n,new ht(.07,.05,.5,24),re("#ff5d8f",{roughness:.3}),g(0,-.15,0));for(let[e,t]of[[.3,.9],[.42,.6]]){let i=rt(n,new Tt(e,.022,8,32,1.3),re("#4fb8ff"),g(0,.24,0));i.rotation.z=-.65,i.material=i.material.clone(),i.material.transparent=!0,i.material.opacity=t}return n},hanger(){let n=new le;et(n,[g(-.45,-.12,0),g(0,.16,0),g(.45,-.12,0)],[.025,.025,.025],re("#c98a4b"),{tubular:24,radial:10}),et(n,[g(-.45,-.12,0),g(.45,-.12,0)],[.022,.022],re("#c98a4b"),{tubular:4,radial:10}),et(n,[g(0,.16,0),g(0,.28,0),g(.07,.38,0),g(.12,.3,0)],[.018,.018,.018,.016],re("#cfd8e2",{metalness:.8}),{tubular:16,radial:8});let e=Nt([fe(-.3,.1),fe(-.12,.16),fe(.12,.16),fe(.3,.1),fe(.36,-.02),fe(.2,-.06),fe(.18,-.42),fe(-.18,-.42),fe(-.2,-.06),fe(-.36,-.02)],.05);return gt(n,e,.04,te("#ff5d8f",{roughness:.6,sheen:.6}),{bevel:.02,bevelSize:.02}).position.set(0,-.2,.03),gt(n,Ra(.08,.035),.015,re("#ffd35c"),{bevel:.006,bevelSize:.006}).position.set(0,-.36,.08),n},paint(){let n=new le;rt(n,new ht(.16,.16,.56,32),te("#ff9ec4",{roughness:.8,sheen:.8}),g(0,.18,0),{z:Math.PI/2});for(let e of[-1,1])rt(n,new ht(.05,.05,.04,20),re("#cfd8e2",{metalness:.7,roughness:.3}),g(e*.3,.18,0),{z:Math.PI/2});et(n,[g(.3,.18,0),g(.38,.18,0),g(.38,-.02,0),g(0,-.08,0),g(0,-.2,0)],[.025,.025,.025,.025,.025],re("#cfd8e2",{metalness:.7,roughness:.3}),{tubular:24,radial:10}),rt(n,new ht(.055,.06,.34,20),re("#4fb8ff",{roughness:.35}),g(0,-.36,0));for(let[e,t]of[[-.12,"#7cc85a"],[.02,"#ffd23a"],[.15,"#4fb8ff"]])Z(n,g(e,.36,.06),g(.05,.03,.05),re(t),{seg:16});return n.userData.dir=g(.3,.35,1),n},gift(){let n=new le,e=te("#ff7aa8",{roughness:.45,clearcoat:.4}),t=te("#ff9ec4",{roughness:.45,clearcoat:.4}),i=re("#ffd23a",{roughness:.3});rt(n,zt(.62,.46,.62,.06),e,g(0,-.1,0)),rt(n,zt(.7,.14,.7,.05),t,g(0,.18,0)),rt(n,zt(.12,.6,.64,.03),i,g(0,-.03,0)),rt(n,zt(.64,.6,.12,.03),i,g(0,-.03,0));for(let s of[-1,1])rt(n,new Tt(.11,.04,12,28),i,g(s*.11,.33,0),{z:s*.5,y:.2}).scale.set(1,.75,.6);return Z(n,g(0,.29,0),g(.06,.05,.06),i,{seg:20}),n.userData.dir=g(.35,.45,1),n},ball(){let n=new le;return rt(n,new St(.4,48,32),new je({map:Yn("#4fb8ff","#ffffff",6,!0),roughness:.3,clearcoat:.8}),g(0,0,0),{z:.5,x:.3}),n},egg(){let n=new le,e=qc("#fff5e2","#7cc85a",4);return Aa(n,Array.from({length:33},(t,i)=>{let s=i/32;return[Math.max(1e-4,Math.sin(Math.PI*s)**.62*.36*(1-.12*s)),s*.86]}),new je({map:e.tex,roughness:.35,clearcoat:.6}),g(0,-.43,0),48),n},home(){let n=new le;return rt(n,zt(.7,.5,.6,.06),te("#ffe3c2",{roughness:.5}),g(0,-.15,0)),rt(n,new ci(.6,.38,4),te("#ff6b6b",{roughness:.4,clearcoat:.4}),g(0,.28,0),{y:Math.PI/4}).scale.set(1.05,1,.95),rt(n,zt(.18,.3,.05,.03),te("#c98a4b"),g(0,-.25,.3)),rt(n,zt(.15,.15,.04,.02),re("#9fdcff"),g(.2,-.05,.3)),gt(n,Nt([fe(0,-.08),fe(.09,.02),fe(.05,.08),fe(0,.04),fe(-.05,.08),fe(-.09,.02)],.03),.03,re("#ff5d8f"),{bevel:.015,bevelSize:.015}).position.set(-.2,-.05,.31),n.userData.dir=g(.4,.35,1),n},kitchen(){let n=new le;Aa(n,[[0,0],[.18,0],[.38,.12],[.44,.3],[.45,.32],[.4,.31],[.34,.2],[0,.16]],re("#7fd1c7",{roughness:.25}),g(0,-.25,0));for(let[e,t,i,s]of[[-.12,0,"#ff3b4e",.13],[.14,.02,"#ffd23a",.12],[.02,-.12,"#6cc24a",.12],[.02,.12,"#ff9f43",.11]])Z(n,g(e,.08+s*.6,t),g(s,s,s),re(i,{roughness:.3}),{seg:24});return n.userData.dir=g(.2,.8,1),n},bath(){let n=new le;rt(n,zt(.9,.36,.5,.15),te("#ffffff",{roughness:.2,clearcoat:1}),g(0,-.15,0));for(let[e,t,i]of[[-.25,.08,.14],[0,.12,.17],[.25,.07,.13],[.12,.25,.1],[-.12,.24,.1]])Z(n,g(e,t,.05),g(i,i*.9,i),te("#ffffff",{sheen:.8,roughness:.4}),{seg:24});return Z(n,g(.32,.2,.2),g(.08,.06,.07),re("#ffd23a"),{seg:20}),n.userData.dir=g(.2,.6,1),n},bed(){let n=new le,e=new Ot;e.absarc(0,0,.36,Math.PI*.25,Math.PI*1.75,!1),e.absarc(.16,0,.3,Math.PI*1.65,Math.PI*.35,!0);let t=gt(n,e,.12,re("#ffd35c",{roughness:.3}),{bevel:.06,bevelSize:.05});return t.rotation.z=-.4,t.position.set(-.05,.05,0),gt(n,Ra(.1,.045),.04,re("#fff3c4"),{bevel:.02,bevelSize:.02}).position.set(.32,.28,.05),gt(n,Ra(.06,.027),.03,re("#fff3c4"),{bevel:.015,bevelSize:.015}).position.set(.36,-.12,.05),n},play(){let n=new le;return rt(n,zt(.36,.36,.36,.06),new je({map:wa("\u05D0","#ff5d8f"),roughness:.4,clearcoat:.4}),g(-.2,-.2,0),{y:.3}),rt(n,zt(.36,.36,.36,.06),new je({map:wa("\u05D1","#4fb8ff"),roughness:.4,clearcoat:.4}),g(.2,-.2,.05),{y:-.3}),rt(n,new St(.2,32,24),new je({map:Yn("#ffd35c","#ffffff",6,!0),roughness:.3,clearcoat:.8}),g(0,.18,0),{z:.6}),n},album(){let n=new le;return rt(n,zt(.62,.8,.1,.04),te("#ff8a5c",{roughness:.45,clearcoat:.4}),g(0,0,0)),rt(n,zt(.56,.74,.08,.02),te("#fffaf0"),g(.03,0,-.03)),rt(n,zt(.36,.28,.02,.02),te("#fff3dc"),g(0,.15,.06)),Z(n,g(-.05,.12,.08),g(.06,.06,.02),te("#6cc24a"),{seg:16}),gt(n,Ra(.13,.06),.04,re("#ffd35c"),{bevel:.02,bevelSize:.02}).position.set(0,-.2,.07),n.rotation.y=-.3,n},needFood(){return mr.fruit()},needClean(){let n=new le;for(let[e,t,i]of[[-.12,-.08,.26],[.2,.12,.2],[.18,-.22,.13]])Z(n,g(e,t,0),g(i,i,i),new je({color:"#d6f2ff",roughness:.05,clearcoat:1,iridescence:.9,iridescenceIOR:1.3}),{seg:32});return n},needEnergy(){return mr.bed()},needFun(){return mr.ball()}};function Ss(n){let e=null;return n.startsWith("hat:")?(e=Vc(n.slice(4)),e&&(e.userData.dir=g(.3,.6,1))):mr[n]&&(e=mr[n]()),e?(e.traverse(t=>{t.isMesh&&(t.castShadow=!0)}),e):null}var DS=Object.keys(mr);var Cn=(n,e,t)=>n+(e-n)*t,eu=n=>Math.max(0,Math.min(1,n)),mn=n=>(n=eu(n),n*n*(3-2*n)),on=n=>Math.sin(Math.PI*eu(n)),kt=(n,e,t)=>eu((n-e)/(t-e)),jh=(n,e)=>{let t=e-n;for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;return t},Kh={hop:.55,squish:.35,wiggle:.7,shake:.5,nod:.64};function by(){return{y:0,sq:0,roll:0,pitch:0,yaw:0,hYaw:0,hPitch:0,hRoll:0,mouth:-1,open:-1,happy:-1,wide:0,arms:0,wave:0,ears:0,tail:0,love:0,legKick:null,look:null}}var Fd={purr:{dur:1.9,run(n,e){let t=on(n);e.happy=1,e.hRoll+=.24*t,e.hPitch-=.08*t,e.roll+=.05*t,e.tail+=1.6*t,e.sq-=.025*t,e.ears+=.3*t}},giggle:{dur:1.5,run(n,e){let t=1-mn(kt(n,.6,1));e.y+=Math.abs(Math.sin(n*Math.PI*7))*.05*t,e.roll+=Math.sin(n*Math.PI*9)*.07*t,e.mouth=Math.max(e.mouth,(.5+.4*Math.abs(Math.sin(n*Math.PI*11)))*t),e.happy=1,e.arms+=1.3*t,e.tail+=2*t}},sneeze:{dur:1.6,run(n,e,t,i){if(n<.5){let s=mn(kt(n,0,.5));e.hPitch-=.3*s,e.open=1-.65*s,e.mouth=Math.max(e.mouth,.3*s),e.sq-=.035*s,e.wide=.3*s}else if(n<.64){let s=on(kt(n,.5,.64));e.hPitch+=.32*s,e.mouth=1,e.open=0,e.sq+=.07*s,t.fired||(t.fired=!0,i.burstAt("drop","mouth",14),i.cue("sneeze"))}else{let s=kt(n,.64,1);e.hPitch+=.08*(1-s),e.open=s<.25?.15:-1,e.happy=s>.35?1:-1,e.mouth=Math.max(e.mouth,.2*(1-s))}}},lookback:{dur:2,run(n,e,t){let i=mn(kt(n,0,.28))*(1-mn(kt(n,.72,1)));e.hYaw+=t.side*1*i,e.yaw+=t.side*.4*i,e.tail+=3.5*i,e.wide=.6*i,e.mouth=Math.max(e.mouth,.25*i)}},stomp:{dur:1,run(n,e,t){e.legKick={side:t.side,amt:on(kt(n,0,.55))},e.y+=on(kt(n,.55,1))*.1,e.happy=n>.5?1:-1,e.roll+=-t.side*.06*on(kt(n,0,.55))}},shakehead:{dur:1,run(n,e){let t=1-n;e.hYaw+=Math.sin(n*Math.PI*6)*.38*t,e.ears+=Math.sin(n*Math.PI*12)*1.4*t,e.open=n<.6?.45:-1}},dizzy:{dur:3.2,run(n,e,t,i,s){if(e.yaw+=Math.PI*2*mn(kt(n,0,.3)),n>.3){let r=1-mn(kt(n,.75,1));e.roll+=Math.sin(s*7)*.14*r,e.hRoll+=Math.sin(s*7+1.2)*.2*r,e.open=n<.85?.3:-1,e.mouth=Math.max(e.mouth,.3*r)}!t.fired&&n>.28&&(t.fired=!0,i.stars(2),i.cue("dizzy"))}},yawn:{dur:2.6,run(n,e){let t=on(kt(n,.05,.9));e.mouth=Math.max(e.mouth,Math.pow(t,.6)),e.open=1-.85*t,e.hPitch-=.26*t,e.arms+=2.2*t,e.sq-=.05*t,e.wave+=.6*t}},stretch:{dur:1.8,run(n,e){let t=on(n);e.sq-=.08*t,e.arms+=2.4*t,e.hPitch-=.22*t,e.mouth=Math.max(e.mouth,.55*t),e.open=1-.7*t}},dance:{dur:4.4,run(n,e,t){let i=mn(kt(n,0,.08))*(1-mn(kt(n,.9,1))),s=n*4.4*2.2;e.y+=Math.abs(Math.sin(s*Math.PI))*.07*i,e.roll+=Math.sin(s*Math.PI)*.12*i,e.hRoll+=Math.sin(s*Math.PI+.8)*.17*i,e.yaw+=Math.sin(s*Math.PI*.5)*.25*i,e.arms+=1.6*i,e.tail+=2.5*i,e.wave+=i,e.mouth=Math.max(e.mouth,.35*i),e.happy=Math.floor(s)%4<2?1:-1,e.legKick={side:Math.floor(s)%2?1:-1,amt:.6*i*Math.abs(Math.sin(s*Math.PI))}}},lookaround:{dur:3.4,run(n,e){let t=on(n);e.hYaw+=Math.sin(n*Math.PI*2)*.75*t,e.hPitch-=.1*t,e.wide=.3*t}},surprise:{dur:.9,run(n,e){let t=on(n);e.wide=t,e.mouth=Math.max(e.mouth,.65*t),e.y+=on(kt(n,0,.45))*.08,e.sq-=.04*t}},love:{dur:2.2,run(n,e){let t=Math.pow(on(n),.5);e.love=Math.max(e.love,t),e.hRoll+=Math.sin(n*Math.PI*3)*.1*t,e.mouth=Math.max(e.mouth,.2*t),e.tail+=2*t}},wave:{dur:1.6,run(n,e){let t=on(n);e.wave+=1.6*t,e.happy=1,e.hRoll+=Math.sin(n*Math.PI*4)*.08*t}},header:{dur:.8,run(n,e){e.hPitch+=n<.35?-.3*mn(n/.35):.35*on(kt(n,.35,.8))-.3*(1-kt(n,.35,.5)),e.y+=on(kt(n,.2,.7))*.1,e.happy=n>.4?1:-1}},shakedry:{dur:1.3,run(n,e,t,i){let s=on(n);e.roll+=Math.sin(n*Math.PI*14)*.13*s,e.hRoll+=Math.sin(n*Math.PI*14+.6)*.2*s,e.ears+=Math.sin(n*Math.PI*16)*1.4*s,e.open=.2,e.tail+=3*s,!t.fired&&n>.25&&(t.fired=!0,i.burstAt("drop","center",18,{spread:1}))}},eat:{dur:99,run(n,e,t){let i=t.ctl;i&&(i.mouth>=0&&(e.mouth=Math.max(e.mouth,i.mouth)),i.happy&&(e.happy=1),i.open>=0&&(e.open=i.open),e.hYaw+=i.turn||0,e.hPitch+=i.pitch||0,e.love=Math.max(e.love,i.love||0),i.done&&(t.end=!0))}}},Od=Object.keys(Fd),Ca=null,Ia=null;function Ey(){let n=new Ot;return n.moveTo(0,-.5),n.bezierCurveTo(-.15,-.35,-.62,-.05,-.55,.25),n.bezierCurveTo(-.5,.55,-.12,.6,0,.32),n.bezierCurveTo(.12,.6,.5,.55,.55,.25),n.bezierCurveTo(.62,-.05,.15,-.35,0,-.5),n}function Bd(){return Ca||(Ca=new li(Ey(),{depth:.14,bevelEnabled:!0,bevelThickness:.08,bevelSize:.06,bevelSegments:3,curveSegments:14}),Ca.center(),Ca.userData.shared=!0),Ca}function Hd(){if(!Ia){let n=new Ot;for(let e=0;e<10;e++){let t=Math.PI/2+e*Math.PI/5,i=e%2?.42:1;e?n.lineTo(Math.cos(t)*i,Math.sin(t)*i):n.moveTo(Math.cos(t)*i,Math.sin(t)*i)}Ia=new li(n,{depth:.2,bevelEnabled:!0,bevelThickness:.1,bevelSize:.08,bevelSegments:2,curveSegments:4}),Ia.center(),Ia.userData.shared=!0}return Ia}var wy=re("#ff4f86",{roughness:.25,emissive:"#ff3d77",emissiveIntensity:.25}),Ty=re("#ffd23a",{roughness:.25,emissive:"#ffb800",emissiveIntensity:.35});function Ay(n){return n._hearts||(n._hearts=n.eyes.map(e=>{let t=new Q(Bd(),wy);return t.position.set(0,0,e.r*1.02),t.scale.setScalar(.001),t.visible=!1,t.castShadow=!1,e.g.add(t),t})),n._hearts}function tu(){return{x:0,y:0,z:0,yaw:0,target:null,amt:0,phase:0,resolve:null,speed:1,locked:!1,run:!1,pause:0}}function zd(n,e){let t=n.friend;if(!t)return;let i=n.anim,s=n.t,r=new Set(n.stateEl?Array.from(n.stateEl.classList):[]);for(let O of Object.keys(Kh))r.has(O)&&!i.prev.has(O)&&(i[O+"T"]=1e-4);i.prev=r;let a=r.has("sleep"),o=r.has("happy"),c=r.has("wide"),l=r.has("blink");i.sleep=Cn(i.sleep,a?1:0,Math.min(1,e*4)),i.happy=Cn(i.happy,o?1:0,Math.min(1,e*14));let h=a||l?0:1;i.open=Cn(i.open,h,Math.min(1,e*(l?40:18))),i.talk=Cn(i.talk,r.has("talk")?1:0,Math.min(1,e*22)),i.tilt=Cn(i.tilt,r.has("tilt")?1:r.has("listen")?-1:0,Math.min(1,e*6)),i.excited=Cn(i.excited,r.has("excited")?1:0,Math.min(1,e*6));let u=by();if(!a)for(let O of n.actions){O.t+=e;let V=Fd[O.name],ee=O.t/(O.dur||V.dur);if(ee>=1||O.end){O.done=!0;continue}V.run(ee,u,O,n,s)}n.actions=n.actions.filter(O=>!O.done);let f=n.walk;Ry(n,t,e,f);let m=t.gait||(t.legs.length===2?"biped":"quad"),x=m==="hop",_=x?f.phase*.62:f.phase;u.y+=Math.abs(Math.sin(_))*(x?.16:m==="waddle"?.025:.035)*f.amt,x&&(u.pitch+=.12*f.amt),u.roll+=Math.sin(_)*(m==="waddle"?.13:m==="scoot"?.05:.035)*f.amt;let d=Math.floor(_/Math.PI);d!==f.stepIdx&&(f.stepIdx=d,f.amt>.45&&f.y<.02&&n.cue("step"));let p=u.open>=0?Math.min(i.open,u.open):i.open,y=u.happy>=0?Math.max(u.happy,i.happy):i.happy;for(let O of t.eyes)O.set(p,u.love>.3?0:y,i.sleep),O.g.scale.setScalar(1+(c?.12:0)+u.wide*.14);if(u.love>.01||t._hearts){let O=Ay(t);for(let V of O)V.visible=u.love>.01,V.scale.setScalar(t.eyes[0].r*1.7*u.love*(1+.12*Math.sin(s*12)))}let T=Math.min(1,i.talk*(o&&!r.has("talk")?0:1));n.game&&n.game.mouth&&(u.mouth=Math.max(u.mouth,n.game.mouth)),t.mouth.set(u.mouth>=0?Math.max(T,u.mouth):T);let v=0,E=0,w=0,C=0,M=0;for(let O of Object.keys(Kh)){let V=O+"T";if(!i[V])continue;i[V]+=e;let ee=i[V]/Kh[O];if(ee>=1){i[V]=0;continue}O==="hop"&&(v=Math.sin(Math.min(1,ee/.7)*Math.PI)*.32,ee>.7&&(E=Math.sin((ee-.7)/.3*Math.PI)*.08)),O==="squish"&&(E=Math.sin(ee*Math.PI)*.1),O==="wiggle"&&(w=Math.sin(ee*Math.PI*10)*.08*(1-ee)),O==="shake"&&(C=Math.sin(ee*Math.PI*6)*.3*(1-ee)),O==="nod"&&(M=Math.sin(ee*Math.PI*4)*.14)}let R=Math.sin(s*(a?1.4:2.1))*(a?.026:.014);t.jump.position.y=v+u.y-i.sleep*.13;let P=E+u.sq;t.body.scale.set(1+P*.6,1-P+R,1+P*.6),t.body.rotation.z=w+u.roll+Math.sin(s*.7)*.012,t.body.rotation.x=u.pitch,t.root.rotation.y=f.yaw+u.yaw;let U=t.headYaw||0,D=0,H=0,N=n.lookOverride||(n.look?n.lookW:null);if(N&&!a){let O=new L;t.head.getWorldPosition(O);let V=N.clone().sub(O),ee=t.root.rotation.y+(t.turn||0)+U;D=Math.max(-.6,Math.min(.6,jh(ee,Math.atan2(V.x,V.z))*.5)),H=Math.max(-.35,Math.min(.35,-Math.atan2(V.y,Math.hypot(V.x,V.z))*.45))}t._yaw=Cn(t._yaw||0,D,Math.min(1,e*6)),t._pitch=Cn(t._pitch||0,H,Math.min(1,e*6)),t.head.rotation.y=U+t._yaw+C+u.hYaw+Math.sin(s*.5)*.04*(1-i.sleep),t.head.rotation.x=t._pitch+M+u.hPitch+i.sleep*.24+Math.sin(s*.9)*.015,t.head.rotation.z=i.tilt*.18+u.hRoll+Math.sin(s*.6)*.02;for(let O of t.eyes){let V=N?t._yaw*1.2:Math.sin(s*.33)*.08,ee=N?t._pitch*1.2:0;O.look.rotation.y=Cn(O.look.rotation.y,V,Math.min(1,e*10)),O.look.rotation.x=Cn(O.look.rotation.x,ee,Math.min(1,e*10))}let k=i.excited+u.tail*.5;if(t.tail){let O=1.9+k*5;t.tail.rotation.y=Math.sin(s*O)*(.12+Math.min(1.5,k)*.14)*(1-i.sleep*.8)}if(t.extra.earL){let O=Math.sin(s*2.2)*.06+(Math.sin(s*.7)>.93?Math.sin(s*30)*.12:0)+Math.sin(s*20)*.25*Math.min(1,Math.abs(u.ears))*Math.sign(u.ears||1);t.sp==="lion"||t.sp==="kangaroo"?(t.extra.earL.rotation.set(0,0,O),t.extra.earR.rotation.set(0,0,-O)):(t.extra.earL.rotation.y=-.55-O,t.extra.earR.rotation.y=.55+O)}if(t.trunk&&(t.trunk.rotation.x=Math.sin(s*1.3)*.08-i.talk*.12-u.wave*.5-Math.max(0,u.mouth)*.15),t.extra.finL){let O=(i.excited+u.arms*.6)*Math.sin(s*22)*.35+Math.sin(s*1.5)*.04;t.extra.finL.rotation.z=-O-.05-u.wave*.9,t.extra.finR.rotation.z=O+.05+u.wave*.3*Math.sin(s*9)}if(t.extra.armL){let O=Math.sin(s*3)*.08+(i.excited+u.arms*.5)*Math.sin(s*18)*.4;t.extra.armL.rotation.x=O-u.wave*.6,t.extra.armR.rotation.x=-O-u.wave*(1.2+.35*Math.sin(s*10))}for(let O of t.legs){let V=m==="biped"||m==="waddle"||m==="scoot"?O.side>0?0:Math.PI:(O.front?1:0)^(O.side>0?1:0)?0:Math.PI,ee=Math.sin(_+V)*(m==="scoot"?.4:.5)*f.amt,J=0;x&&(ee=Math.abs(Math.sin(_))*.55*f.amt),m==="waddle"&&(J=Math.max(0,Math.sin(_+V))*.06*f.amt,ee*=.4),u.legKick&&u.legKick.side===O.side&&(O.front||t.legs.length<=2)&&(ee-=.7*u.legKick.amt,J+=.05*u.legKick.amt),u.wave>.05&&O.front&&O.side>0&&t.legs.length===4&&(ee-=.9*Math.min(1,u.wave)*(.8+.2*Math.sin(s*10)),J+=.08*Math.min(1,u.wave)),O.g.rotation.x=Cn(O.g.rotation.x,ee,Math.min(1,e*16)),O.g.position.y=O.hip.y+J}}function Ry(n,e,t,i){if(i.locked)return;let s=e.turn||0,r=0;if(i.pause>0)i.pause-=t;else if(i.target){let o=i.target.x-i.x,c=i.target.z-i.z,l=Math.hypot(o,c);if(l<.015){i.x=i.target.x,i.z=i.target.z,i.target=null;let h=i.resolve;i.resolve=null,h&&h()}else{r=Math.atan2(o,c)-s;let h=jh(i.yaw,r);if(i.yaw+=Math.sign(h)*Math.min(Math.abs(h),t*7),Math.abs(h)<.7){let u=.9*i.speed*(e.inner?e.inner.scale.x:1),f=Math.min(l,u*t*(1-Math.abs(h)/.7*.6));i.x+=o/l*f,i.z+=c/l*f}i.amt=Cn(i.amt,1,Math.min(1,t*8)),i.phase+=t*9*i.amt*i.speed;return}}let a=jh(i.yaw,r);i.yaw+=Math.sign(a)*Math.min(Math.abs(a),t*5),i.amt=Cn(i.amt,0,Math.min(1,t*8)),i.amt>.02&&(i.phase+=t*9*i.amt)}var nu=new St(1,12,8);nu.userData.shared=!0;function Sn(n,e,t,i=8,s={}){let r=s.scale||1;for(let a=0;a<i;a++){let o=nu,c=s.color||"#ffffff",l=.03,h,u=.9,f=-6,m=0,x=!0,_=Math.random()*Math.PI*2,d=Math.random();if(e==="crumb")l=.022+Math.random()*.025,h=g(Math.cos(_)*.9,.6+d*1.2,Math.sin(_)*.5+.5),u=.8+Math.random()*.4;else if(e==="drop"){c=s.color||"#dff4ff",l=.018+Math.random()*.02;let T=s.spread||.5;h=g((Math.random()-.5)*1.6*T*2,.3+d*.9,1.2+Math.random()*.8),u=.6+Math.random()*.3,f=-5}else if(e==="spark")o=Hd(),c=s.color||"#ffd23a",l=.04+Math.random()*.03,h=g(Math.cos(_)*.7,.7+d*1,Math.sin(_)*.4+.3),u=.9+Math.random()*.4,f=-1.5,m=6;else if(e==="heart")o=Bd(),c=s.color||"#ff5d8f",l=.06+Math.random()*.03,h=g((Math.random()-.5)*.5,.6+d*.4,.2),u=1.2+Math.random()*.3,f=.2;else if(e==="bubble")c="#eafaff",l=.03+Math.random()*.04,h=g((Math.random()-.5)*.4,.3+d*.4,(Math.random()-.5)*.3),u=1.6+Math.random(),f=.2;else continue;let p=new Gt({color:new ge(c),transparent:!0,opacity:e==="bubble"?.55:1,depthWrite:!1}),y=new Q(o,p);y.position.copy(t).add(g((Math.random()-.5)*.06,(Math.random()-.5)*.06,(Math.random()-.5)*.06)),y.scale.setScalar(l*r),y.rotation.set(Math.random()*3,Math.random()*3,Math.random()*3),y.renderOrder=5,n.scene.add(y),n.parts.push({m:y,vel:h.multiplyScalar(r),life:u,age:0,g:f*r,spin:m,fade:x,base:l*r,kind:e})}}function Cy(n,e){if(n.parts.length){for(let t of n.parts){t.age+=e,t.vel.y+=t.g*e,t.kind==="bubble"&&(t.vel.x+=Math.sin(t.age*5+t.base*100)*e*.4),t.m.position.addScaledVector(t.vel,e),t.spin&&(t.m.rotation.z+=t.spin*e,t.m.rotation.y+=t.spin*e*.5);let i=t.age/t.life;t.kind==="heart"&&t.m.scale.setScalar(t.base*(.6+.6*Math.min(1,i*3))),t.m.material.opacity=(t.kind==="bubble"?.55:1)*(1-mn(kt(i,.6,1))),t.m.position.y<.01&&t.kind==="crumb"&&(t.m.position.y=.01,t.vel.set(0,0,0),t.g=0),i>=1&&(t.dead=!0,n.scene.remove(t.m),t.m.material.dispose())}n.parts=n.parts.filter(t=>!t.dead)}}function kd(n,e){let t=n.friend;if(!t)return;let i=new le,s=4;for(let r=0;r<s;r++){let a=new Q(Hd(),Ty);a.scale.setScalar(.06),a.castShadow=!1,i.add(a)}i.position.y=.12,t.hat.add(i),n.effects.push({age:0,update(r){this.age+=r;let a=Math.min(1,this.age*4)*(1-mn(kt(this.age,e-.4,e)));return i.children.forEach((o,c)=>{let l=this.age*5+c/s*Math.PI*2;o.position.set(Math.cos(l)*.32,Math.sin(l*2)*.03,Math.sin(l)*.32),o.rotation.y=l*2,o.scale.setScalar(.06*a+1e-4)}),this.age>=e?(i.parent&&i.parent.remove(i),!1):!0}})}function _i(n,e){let t=n.friend,i=new L;return t&&(e==="mouth"?t.mouthAnchor.getWorldPosition(i):e==="head"?t.hat.getWorldPosition(i):(t.body.getWorldPosition(i),i.y+=(t.height||1.4)*.45*t.inner.scale.x)),i}function Qh(n){let e=n.friend,t=_i(n,"mouth"),i=new L(0,0,1).transformDirection(e.mouthAnchor.matrixWorld);return i.y*=.5,i.z=Math.max(.35,i.z),i.normalize(),{p:t,n:i}}function Gd(n,e,t,i){return new Promise(s=>{let r=n.friend,a=r&&Ss(e);if(!a){s();return}a.updateMatrixWorld(!0);let o=new sn().setFromObject(a),c=o.getSize(new L),l=o.getCenter(new L),h=new le;h.add(a),a.position.sub(l),h.userData.fx=!0;let u=.36*r.inner.scale.x,f=n.walk;if(f.target){f.target=null;let M=f.resolve;f.resolve=null,M&&M()}let m=u/Math.max(c.x,c.y,c.z);h.scale.setScalar(m),n.scene.add(h);let x=Qh(n),_=()=>(x=Qh(n),x.p.clone().addScaledVector(x.n,t?.17:.45)),d=_(),p=i?i.clone():x.p.clone().add(g(.1,-.75,.9)),y={name:"eat",t:0,dur:99,ctl:{mouth:0,happy:!1,open:-1,turn:0,pitch:0}};n.actions=n.actions.filter(M=>M.name!=="eat"),n.actions.push(y);let T=y.ctl,v=[.4,.62,.84],E=0,w=null,C={meat:"#c9573e",fish:"#9fdcff",fruit:"#ff4b5c",grass:"#6cc24a",leaves:"#5cbf55",fern:"#4caf50"}[e]||"#e9b46a";n.effects.push({age:0,update(M){this.age+=M;let R=this.age;if(d=_(),R<.38){let P=mn(R/.38);return h.position.lerpVectors(p,d,P),h.position.y+=Math.sin(P*Math.PI)*.25,h.rotation.y+=M*4,T.mouth=t?.9*P:0,T.open=t?-1:1-.5*P,T.turn=t?0:-.55*P,!0}if(t){v.find((D,H)=>H===E&&R>=D)!==void 0&&(E++,h.scale.multiplyScalar(.62),Sn(n,"crumb",x.p.clone().addScaledVector(x.n,.08),7,{color:C}),n.cue("chomp1"),E===3&&(h.visible=!1));let U=v.some(D=>R>=D-.03&&R<D+.08);if(h.visible&&(h.position.lerp(x.p.clone().addScaledVector(x.n,.17-.05*E),Math.min(1,M*12)),h.rotation.y+=M*1.5),R<.95)T.mouth=U?.08:.85;else if(R<1.4)T.mouth=.08+.28*Math.abs(Math.sin((R-.95)*16)),T.happy=!0,T.pitch=Math.sin((R-.95)*16)*.03;else if(R<2)T.mouth=.35*on(kt(R,1.4,2)),T.happy=!0,T.love=t==="love"?on(kt(R,1.4,2)):0,this.yum||(this.yum=!0,n.cue("yum"),Sn(n,"spark",_i(n,"head"),5));else return T.done=!0,n.scene.remove(h),s(),!1;return!0}return w||(w=g((Math.random()-.5)*.4,.4,.6)),T.turn=-.6+Math.sin(R*16)*.12*(1-kt(R,.4,1)),T.mouth=0,T.open=.55,w.y-=6*M,h.position.addScaledVector(w,M),h.rotation.z+=M*5,h.position.y<.12&&(h.position.y=.12,w.y=Math.abs(w.y)*.35,w.x*=.7,w.z*=.7),R>1.2&&(this.faded||(this.faded=!0,h.traverse(P=>{P.material&&(P.material=P.material.clone(),P.material.transparent=!0)})),h.traverse(P=>{P.material&&(P.material.opacity=Math.max(0,1-(R-1.2)*2))})),R>1.7?(T.done=!0,n.scene.remove(h),s(),!1):!0}})})}function Vd(n,e){let t=n.friend;if(!t)return;let i=Ss("ball");if(!i)return;let s=new le;s.add(i),s.userData.fx=!0;let r=.14*t.inner.scale.x/.4;s.scale.setScalar(r);let a=.4*r;n.scene.add(s);let o=_i(n,"head").add(g(0,.05,.25)),c=e?e.clone():o.clone().add(g(.2,-1.2,1.4)),l=null,h="fly",u=0;n.effects.push({age:0,update(f){if(this.age+=f,h==="fly"){let x=mn(this.age/.45);return s.position.lerpVectors(c,o,x),s.position.y+=Math.sin(x*Math.PI)*.4,s.rotation.x-=f*8,this.age>=.45&&(h="free",n.act("header"),n.cue("boing"),Sn(n,"spark",o.clone(),6),l=g((Math.random()<.5?-1:1)*(.7+Math.random()*.5),2.6,.9)),!0}l.y-=6.5*f,s.position.addScaledVector(l,f),s.rotation.z-=l.x*f/a,s.rotation.x+=l.z*f/a,s.position.y<a&&(s.position.y=a,l.y<-.4?(l.y=-l.y*.55,u++,n.cue("bounce")):l.y=0,l.x*=.92,l.z*=.92);let m=this.age>4.2;return this.age>3.6&&s.scale.setScalar(r*Math.max(.001,1-(this.age-3.6)/.6)),m?(n.scene.remove(s),!1):!0}})}function Iy(){let n=new le,e=new je({color:new ge("#ff9ec4"),roughness:.4,sheen:.6,side:Rt,emissive:new ge("#ff6fa8"),emissiveIntensity:.15}),t=new Gt({color:new ge("#fff3a8"),side:Rt}),i=(a,o)=>{let c=new le;n.add(c);let l=o?Nt([fe(0,0),fe(.5,.25),fe(.62,.62),fe(.2,.55)],.18):Nt([fe(0,0),fe(.42,-.12),fe(.4,-.45),fe(.1,-.38)],.14),h=new Q(new ea(l,10),e);h.scale.x=a,c.add(h);let u=new Q(new Ln(o?.1:.07,16),t);return u.position.set(a*(o?.33:.25),o?.33:-.22,.002),c.add(u),c},s=[i(1,!0),i(-1,!0),i(1,!1),i(-1,!1)],r=new Q(new qr(.05,.45,4,10),re("#4a3a66"));n.add(r);for(let a of[-1,1]){let o=new Q(new ht(.008,.008,.28,5),Ms("#4a3a66"));o.position.set(a*.06,.34,0),o.rotation.z=-a*.4,n.add(o)}return n.rotation.x=-.45,{g:n,wings:s}}function Wd(n){return new Promise(e=>{if(!n.friend){e();return}let i=Iy(),s=new le;s.add(i.g),s.scale.setScalar(.3),s.userData.fx=!0,n.scene.add(s);let r=8,a=!1;n.effects.push({age:0,update(o){this.age+=o;let c=this.age,l=_i(n,"head"),h=Qh(n).p.clone().add(g(0,.12,.08)),u;if(c<1.4){let m=mn(c/1.4);u=new L(1.8,l.y+.6,.6).lerp(l.clone().add(g(.5,.25,.3)),m),u.y+=Math.sin(c*6)*.06}else if(c<4.6){let m=(c-1.4)*1.9;u=l.clone().add(g(Math.cos(m)*.55,.22+Math.sin(m*2)*.12,.25+Math.sin(m)*.3))}else if(c<5){let m=mn((c-4.6)/.4),x=3.2*1.9;u=l.clone().add(g(Math.cos(x)*.55,.22+Math.sin(x*2)*.12,.25+Math.sin(x)*.3)).lerp(h,m)}else if(c<6)u=h,a||(a=!0,n.act("surprise"),n.cue("giggle"));else{let m=(c-6)/2;u=h.clone().add(g(-m*2.4,m*1.6+Math.sin(c*6)*.05,m*.4)),this.giggled||(this.giggled=!0,n.act("giggle"))}s.position.copy(u);let f=c>5&&c<6?Math.sin(c*6)*.3+.6:Math.sin(c*28)*.9;return i.wings[0].rotation.y=f,i.wings[2].rotation.y=f*.8,i.wings[1].rotation.y=-f,i.wings[3].rotation.y=-f*.8,s.rotation.y=Math.sin(c*2)*.6,n.lookOverride=c<6.3?u:null,c>=r?(n.scene.remove(s),n.lookOverride=null,e(),!1):!0}})})}function Xd(n,e){n.effects.length&&(n.effects=n.effects.filter(t=>t.update(e)!==!1)),Cy(n,e)}function qd(n){n.effects.length=0;for(let e of n.parts)n.scene.remove(e.m),e.m.material.dispose();n.parts.length=0,n.lookOverride=null;for(let e of n.scene.children.slice())e.userData.fx&&n.scene.remove(e)}var Py=(()=>{let n=new je({color:new ge("#ffffff"),roughness:.35,sheen:1,sheenColor:new ge("#dff4ff"),clearcoat:.6});return n.userData.shared=!0,n})();function Yd(n,e){let t=n.friend;if(!t||!e||!e.object)return;if(t._foam=t._foam||[],t._foam.length>=46){let o=t._foam.shift();o.parent&&o.parent.remove(o)}let i=e.object.parent,s=new L;i.getWorldScale(s);let r=new le;r.position.copy(i.worldToLocal(e.point.clone()));let a=1/Math.max(.001,s.x);for(let o=0;o<3;o++){let c=new Q(nu,Py),l=(.035+Math.random()*.03)*a;c.scale.setScalar(l),c.position.set((Math.random()-.5)*.07*a,(Math.random()-.3)*.05*a,(Math.random()-.5)*.07*a),c.castShadow=!1,r.add(c)}r.userData.born=n.t,i.add(r),t._foam.push(r)}function Zd(n,e){let t=n.friend;if(!t||!t._foam||!t._foam.length)return 0;let i=0;for(;i<e&&t._foam.length;){let s=t._foam.splice(Math.floor(Math.random()*t._foam.length),1)[0],r=new L;s.getWorldPosition(r),s.parent&&s.parent.remove(s),Sn(n,"bubble",r,2),i++}return t._foam.length}function iu(n){let e=n.friend;if(!(!e||!e._foam)){for(let t of e._foam)t.parent&&t.parent.remove(t);e._foam=[]}}function Da(n){let e=n.screenToWorld(0,60,0)||g(-2,3,0),t=n.screenToWorld(innerWidth,innerHeight,0)||g(2,0,0);return{left:e.x,right:t.x,top:e.y,halfW:(t.x-e.x)/2}}function Dy(n,e){n.updateMatrixWorld(!0);let t=new sn().setFromObject(n),i=t.getSize(new L),s=t.getCenter(new L),r=new le;return r.add(n),n.position.sub(s),r.scale.setScalar(e/Math.max(i.x,i.y,i.z)),r.userData.fx=!0,r}function Ny(n){let e=n.friend,t=e.inner.scale.x;return{h:(e.height||1.6)*t,w:(e.width||1.4)*t}}function Uy(n){let e=new L;return n.friend.mouthAnchor.getWorldPosition(e),e}function Fy(n,e){let t=e.foods,i=new Set(e.diet),s=[],r=n.walk,a=0,o=1.2,c=0,l=!1,h=0;r.locked=!0,r.x=0,r.z=.2,r.y=0,r.yaw=0;let u={mouth:0,items:s,pointer(f,m){let x=n.screenToWorld(m,innerHeight*.6,r.z);if(x){let _=Da(n);c=Math.max(_.left+.35,Math.min(_.right-.35,x.x))}},update(f){let m=Da(n),x=n.friend.turn||0,_=c-r.x;if(Math.abs(_)>.03){let y=Math.sign(_)*Math.min(Math.abs(_),2.6*f);r.x+=y;let T=(_>0?Math.PI/2:-Math.PI/2)*.75-x;r.yaw+=(T-r.yaw)*Math.min(1,f*10),r.amt+=(1-r.amt)*Math.min(1,f*10),r.phase+=f*14}else r.yaw+=(0-r.yaw)*Math.min(1,f*6),r.amt+=(0-r.amt)*Math.min(1,f*8),r.amt>.02&&(r.phase+=f*10);if(!l&&(o-=f)<=0&&s.length<2){o=1.6+Math.random()*1.2;let y=Math.random()<.7,T=t.filter(w=>i.has(w)===y),v=T[Math.floor(Math.random()*T.length)]||t[0],E=Dy(Ss(v),.58);E.position.set(m.left+.4+Math.random()*(m.right-m.left-.8),m.top+.3,r.z+.15),n.scene.add(E),s.push({m:E,f:v,good:i.has(v),vy:-.7-Math.random()*.2,spin:(Math.random()-.5)*3,state:"fall",age:0})}let d=Uy(n),p=0;for(let y of s)y.age+=f,y.state==="fall"?(y.m.position.y+=y.vy*f,y.m.rotation.z+=y.spin*f,y.m.rotation.y+=f,Math.abs(y.m.position.x-d.x)<.5&&y.m.position.y-d.y<.9&&y.m.position.y>d.y-.2&&y.good&&(p=1),Math.abs(y.m.position.x-d.x)<.46&&y.m.position.y-d.y<.2&&y.m.position.y-d.y>-.26&&(y.good?(y.state="eaten",y.age=0,a++,Sn(n,"crumb",d.clone().add(g(0,0,.1)),7,{color:"#ffcf7a"}),Sn(n,"spark",d.clone().add(g(0,.4,0)),5),n.cue("chomp1"),n.act("love",{dur:1.2}),e.onScore&&e.onScore(a),a>=e.goal&&!l&&(l=!0,setTimeout(()=>e.onDone&&e.onDone(),900))):(y.state="bounce",y.age=0,y.vx=(y.m.position.x<d.x?-1:1)*1.2,y.vy=2.2,n.act("shakehead"),n.cue("nope"),e.onYuck&&e.onYuck(y.f))),y.m.position.y<.2&&(y.state="bounce",y.age=0,y.vx=(Math.random()-.5)*.6,y.vy=1.2)):y.state==="eaten"?(y.m.scale.multiplyScalar(.8),y.m.position.lerp(d,.4),y.age>.25&&(y.dead=!0)):y.state==="bounce"&&(y.vy-=7*f,y.m.position.x+=y.vx*f,y.m.position.y+=y.vy*f,y.m.rotation.z+=6*f,y.m.position.y<.2&&(y.m.position.y=.2,y.vy=Math.abs(y.vy)*.4,y.vx*=.6),y.age>1.2&&y.m.scale.multiplyScalar(.85),y.age>1.6&&(y.dead=!0)),y.dead&&n.scene.remove(y.m);for(let y=s.length-1;y>=0;y--)s[y].dead&&s.splice(y,1);h+=(p-h)*Math.min(1,f*10),u.mouth=h*.9},stop(){for(let f of s)n.scene.remove(f.m);s.length=0}};return u}function Oy(){let n=new le;return Z(n,g(0,.12,0),g(.26,.17,.22),te("#9aa3ad",{roughness:.8})),Z(n,g(.12,.08,.06),g(.14,.1,.13),te("#b8c0c8",{roughness:.8})),n}function By(){let n=new le,e=new Q(new ht(.16,.16,.62,20),te("#a86b3c",{roughness:.75}));e.rotation.x=Math.PI/2,e.position.y=.16,e.castShadow=!0,n.add(e);for(let t of[-.31,.31]){let i=new Q(new Ln(.155,20),te("#e8c08a",{roughness:.7}));i.position.set(0,.16,t+Math.sign(t)*.001),i.rotation.y=t>0?0:Math.PI,n.add(i)}return n}function Hy(){let n=new le;for(let e=0;e<4;e++){let t=new Q(new ci(.03,.18+Math.random()*.1,5),te("#5cbf4a",{roughness:.8}));t.position.set((Math.random()-.5)*.12,.09,(Math.random()-.5)*.08),t.rotation.z=(Math.random()-.5)*.5,n.add(t)}if(Math.random()<.5){let e=new Q(new St(.045,10,8),re(["#ff7aa8","#ffd23a","#ffffff","#b28cff"][Math.floor(Math.random()*4)]));e.position.y=.26,n.add(e)}return n.userData.fx=!0,n}var Pa=null;function Jd(){if(!Pa){let t=new Ot;for(let i=0;i<10;i++){let s=Math.PI/2+i*Math.PI/5,r=i%2?.42:1;i?t.lineTo(Math.cos(s)*r,Math.sin(s)*r):t.moveTo(Math.cos(s)*r,Math.sin(s)*r)}Pa=new li(t,{depth:.25,bevelEnabled:!0,bevelThickness:.12,bevelSize:.1,bevelSegments:3,curveSegments:4}),Pa.center(),Pa.userData.shared=!0}let n=new Q(Pa,re("#ffd23a",{roughness:.2,emissive:"#ffb000",emissiveIntensity:.35}));n.scale.setScalar(.24),n.castShadow=!0;let e=new le;return e.add(n),e.userData.fx=!0,e}function zy(n,e){let t=n.walk,i=[],s=0,r=1,a=0,o=!1,c=0,l=0,h=e.speed||1.5,u=Ny(n);t.locked=!0,t.run=!0,t.z=.2,t.y=0;let f=n.friend.turn||0,m=Da(n),x=()=>u.h*.95+.26+Math.random()*.3;t.x=m.left+u.w*.65+.2,t.yaw=Math.PI/2-f;for(let d=0;d<9;d++){let p=Hy();p.position.set(m.left+(m.right-m.left)*d/8,0,t.z+.5+Math.random()*.4),n.scene.add(p),i.push({m:p,kind:"tuft"})}let _={pointer(d){d==="down"&&t.y<=.001&&!o&&(a=3.7,n.cue("jump"),n.act("surprise",{dur:.6}))},update(d){let p=Da(n);if(t.x=p.left+u.w*.65+.2,t.amt=1,t.phase+=d*12*(t.y>0?.3:1),t.yaw=Math.PI/2-f,(t.y>0||a>0)&&(a-=9.5*d,t.y=Math.max(0,t.y+a*d),t.y===0&&(a=0)),l>0&&(l-=d),!o&&(r-=d)<=0){r=1.7+Math.random()*.7;let v=c++%3===2?"star":Math.random()<.5?"rock":"log",E;v==="star"?(E=Jd(),E.position.set(p.right+.4,x(),t.z)):(E=v==="rock"?Oy():By(),E.scale.setScalar(1.35),E.userData.fx=!0,E.position.set(p.right+.4,0,t.z),E.traverse(C=>{C.isMesh&&(C.castShadow=!0)})),n.scene.add(E);let w={m:E,kind:v,hit:!1};if(i.push(w),v!=="star"&&Math.random()<.6){let C=Jd();C.position.set(p.right+.4,x(),t.z),n.scene.add(C),i.push({m:C,kind:"star"})}}let y=t.x,T=t.y+u.h*.45;for(let v of i){if(v.m.position.x-=h*d*(v.kind==="tuft",1),v.kind==="tuft"){v.m.position.x<p.left-.3&&(v.m.position.x=p.right+.3);continue}v.kind==="star"?(v.m.rotation.y+=d*3,!v.hit&&Math.abs(v.m.position.x-y)<u.w*.4+.1&&Math.abs(v.m.position.y-T)<u.h*.5+.1&&(v.hit=!0,s++,v.dead=!0,Sn(n,"spark",v.m.position.clone(),8),n.cue("star"),e.onScore&&e.onScore(s),s>=e.goal&&!o&&(o=!0,t.run=!1,setTimeout(()=>e.onDone&&e.onDone(),900)))):!v.hit&&Math.abs(v.m.position.x-y)<u.w*.3&&t.y<.3&&(v.hit=!0,l=.5,n.act("shakehead"),n.cue("bump")),v.m.position.x<p.left-.6&&(v.dead=!0),v.dead&&n.scene.remove(v.m)}for(let v=i.length-1;v>=0;v--)i[v].dead&&i.splice(v,1);_.mouth=t.y>.05?.5:0},stop(){for(let d of i)n.scene.remove(d.m);i.length=0,t.run=!1}};return _}var ky=(()=>{let n=new je({color:new ge("#ffffff"),roughness:.04,metalness:0,transmission:0,transparent:!0,opacity:.38,iridescence:1,iridescenceIOR:1.35,clearcoat:1,side:Rn,depthWrite:!1});return n.userData.shared=!0,n})(),$d=new St(1,32,20);$d.userData.shared=!0;var La=null;function Gy(){if(La)return La;let n=Jt(256,256,(e,t)=>{let i=t/2,s=e.createRadialGradient(i,i,0,i,i,i);s.addColorStop(0,"rgba(220,245,255,0.10)"),s.addColorStop(.62,"rgba(200,236,255,0.22)"),s.addColorStop(.84,"rgba(150,215,255,0.65)"),s.addColorStop(.93,"rgba(255,255,255,0.95)"),s.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=s,e.fillRect(0,0,t,t);let r=e.createLinearGradient(0,0,t,t);r.addColorStop(0,"rgba(255,140,200,0.55)"),r.addColorStop(.5,"rgba(255,230,120,0.35)"),r.addColorStop(1,"rgba(120,200,255,0.55)"),e.globalCompositeOperation="source-atop",e.lineWidth=t*.05,e.strokeStyle=r,e.beginPath(),e.arc(i,i,i*.88,0,Math.PI*2),e.stroke(),e.globalCompositeOperation="source-over",e.fillStyle="rgba(255,255,255,0.95)",e.beginPath(),e.ellipse(i*.62,i*.56,i*.17,i*.1,-.7,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(i*.86,i*.4,i*.05,0,Math.PI*2),e.fill()});return La=new Ai({map:n,transparent:!0,depthWrite:!1}),La.userData.shared=!0,La}function Vy(n,e){let t=n.walk;t.locked=!0,t.x=0,t.z=.2,t.y=0,t.yaw=0,t.amt=0;let i=[],s=.2,r=0,a=null,o=0,c={mouth:0,count:0,pointer(l,h,u){if(l!=="down")return;let f=null,m=1e9;for(let x of i){if(x.dead)continue;let _=n.worldToScreen(x.m.position),d=n.worldToScreen(x.m.position.clone().add(g(x.r,0,0))),p=Math.abs(d.x-_.x)+22,y=Math.hypot(_.x-h,_.y-u);y<p&&y<m&&(m=y,f=x)}f&&(f.dead=!0,n.scene.remove(f.m),Sn(n,"bubble",f.m.position.clone(),6),Sn(n,"spark",f.m.position.clone(),4),n.cue("pop"),a=f.m.position.clone(),o=1.2,r++,e.onPop&&e.onPop(r))},resetCount(){r=0},update(l){let h=Da(n);if((s-=l)<=0&&i.filter(u=>!u.dead).length<(e.max||7)){s=.5+Math.random()*.6;let u=.2+Math.random()*.13,f=new Q($d,ky);f.scale.setScalar(u),f.renderOrder=4,f.userData.fx=!0;let m=new qi(Gy());m.scale.setScalar(2.08),m.renderOrder=5,f.add(m),f.position.set(h.left+.3+Math.random()*(h.right-h.left-.6),.2,t.z+.4+Math.random()*.3),n.scene.add(f),i.push({m:f,r:u,vy:.32+Math.random()*.22,ph:Math.random()*6,age:0})}for(let u of i){if(u.dead)continue;u.age+=l,u.m.position.y+=u.vy*l,u.m.position.x+=Math.sin(u.age*1.6+u.ph)*.25*l;let f=1+Math.sin(u.age*5+u.ph)*.04;u.m.scale.set(u.r*f,u.r/f,u.r),u.m.position.y>h.top+.4&&(u.dead=!0,n.scene.remove(u.m))}for(let u=i.length-1;u>=0;u--)i[u].dead&&i.splice(u,1);o>0?(o-=l,n.lookOverride=a,c.mouth=.5*Math.min(1,o*2)):(n.lookOverride=null,c.mouth=0)},stop(){for(let l of i)n.scene.remove(l.m);i.length=0,n.lookOverride=null}};return c}var su={catch:Fy,jump:zy,bubbles:Vy};var Wy=new Set(["head","face","horns","frill","mane","ears","trunk","beak"]),Jc=1.75,ru={home:{key:2.8,hemi:.55,sky:16773599,ground:12946274,exposure:.92},kitchen:{key:2.7,hemi:.62,sky:15990777,ground:13083754,exposure:.92},bath:{key:2.6,hemi:.68,sky:15924223,ground:9421788,exposure:.93},bed:{key:2.5,hemi:.55,sky:15986431,ground:10123868,exposure:.92},play:{key:3,hemi:.75,sky:14676479,ground:8372053,exposure:.95},album:{key:3,hemi:.75,sky:14676479,ground:8372053,exposure:.95},dig:{key:3,hemi:.75,sky:15267583,ground:14200945,exposure:.95},studio:{key:2.6,hemi:.7,sky:16774114,ground:15315068,exposure:.95}},b={ready:!1,renderer:null,canvas:null,scene:null,camera:null,L:null,rooms:{},room:null,roomName:"",friend:null,friendKey:"",petHolder:null,contact:null,stateEl:null,stageEl:null,safe:{top:80,bottom:170},layout:"normal",look:null,lookW:new L,clock:{last:0,getDelta(){let n=performance.now(),e=this.last?(n-this.last)/1e3:0;return this.last=n,e}},t:0,anim:{open:0,happy:0,sleep:0,talk:0,jump:0,squash:0,wiggle:0,shake:0,nod:0,tilt:0,excited:0,prev:new Set,blink:0},dpr:1,dprMax:2,frameAvg:16,frameN:0,dark:0,darkTarget:0,blanket:0,blanketTarget:0,curtain:1,curtainTarget:1,hidden:!1,egg:null,onFrame:null,boundsCache:null,boundsAt:0,paused:!1,busyUntil:0,actions:[],effects:[],parts:[],walk:tu(),lookOverride:null,cue:()=>{},game:null};window.DinoEngine=b;b.init=(n,e={})=>{b.canvas=n,b.renderer=Uh(n,{}),b.dprMax=Math.min(e.maxDpr||2,window.devicePixelRatio||1),b.dpr=Math.min(b.dprMax,e.startDpr||b.dprMax),b.renderer.setPixelRatio(b.dpr),b.scene=new Wi,b.scene.environment=Fh(b.renderer),b.scene.environmentIntensity=.45,b.L=Oh(b.scene,{shadowSize:e.shadowSize||2048}),b.L.lamp=new ji("#ffcf7a",0,4.5,1.6),b.scene.add(b.L.lamp),b.L.night=new ji("#9aa8ff",0,5.5,2),b.L.night.position.set(.6,2.4,2.2),b.scene.add(b.L.night),b.camera=new tn(36,1,.1,120),b.petHolder=new le,b.scene.add(b.petHolder);let t=new Q(new Vt(1,1),new Gt({map:is("#4a2a1a",128),transparent:!0,opacity:.42,depthWrite:!1}));t.rotation.x=-Math.PI/2,t.renderOrder=1,b.contact=t,b.petHolder.add(t),b.resize(),addEventListener("resize",()=>b.resize()),b.ready=!0,b.loop()};b.setSafe=(n,e,t)=>{b.safeTarget={top:n,bottom:e},(!t||b.paused)&&(b.safe={top:n,bottom:e},b.frame())};b.setStateEl=n=>{b.stateEl=n};b.setStageEl=n=>{b.stageEl=n};b.resize=()=>{let n=innerWidth,e=innerHeight;b.renderer.setSize(n,e,!1),b.canvas.style.width=n+"px",b.canvas.style.height=e+"px",b.camera.aspect=n/e,b.frame()};function ou(n){return b.rooms[n]||(b.rooms[n]=Ta[n](),b.rooms[n].group.visible=!1,b.scene.add(b.rooms[n].group)),b.rooms[n]}b.setRoom=n=>{if(n==="album"&&(n="play"),Ta[n]||(n="home"),b.roomName===n)return;b.room&&(b.room.group.visible=!1),b.room=ou(n),b.room.group.visible=!0,b.roomName=n,b.calm();let e=ru[n]||ru.home;b.L.key.intensity=e.key,b.L.hemi.intensity=e.hemi,b.L.hemi.color.setHex(e.sky),b.L.hemi.groundColor.setHex(e.ground),b.renderer.toneMappingExposure=e.exposure,b.scene.background=b.room.outdoor||b.room.studio?null:new ge(b.room.wall||"#ffe2c2"),b.room.studio&&(b.scene.background=new ge("#ffd9ae")),b.darkTarget=0,b.dark=0,b.blanketTarget=0,b.curtainTarget=1,b.room.setCurtain&&b.room.setCurtain(1),b.frame()};b.warm=(n,e)=>{let t=n.slice(),i=r=>window.requestIdleCallback?requestIdleCallback(r,{timeout:600}):setTimeout(r,60),s=()=>{if(!t.length){e&&e();return}let r=t.shift();try{if(!Ta[r]){i(s);return}let a=ou(r),o=b.renderer.extensions.has("KHR_parallel_shader_compile")?b.renderer.compileAsync(a.group,b.camera,b.scene):b.renderer.compile(a.group,b.camera,b.scene);Promise.resolve(o).catch(()=>{}).then(()=>i(s))}catch{i(s)}};i(s)};b.setPet=(n,e={})=>{let t=n+":"+(e.stage??2)+":"+(e.outfit||"");if(b.friendKey===t&&b.friend)return;if(b.friend&&(b.petHolder.remove(b.friend.root),va(b.friend.root)),b.friendKey=t,!n){b.friend=null;return}let i=Ma(n,2);jc(i),Qc(i,e.stage??2),Sa(i,e.outfit),b.petHolder.add(i.root),b.friend=i,b.calm(),b.boundsCache=null,b.frame()};b.setOutfit=n=>{b.friend&&(Sa(b.friend,n),b.friendKey=b.friendKey.replace(/:[^:]*$/,":"+(n||"")))};b.hidePet=n=>{b.hidden=n};function jc(n){n.root.updateMatrixWorld(!0);let e=new sn().setFromObject(n.root),t=e.max.y,i=e.max.x-e.min.x,s=Jc/Math.max(t,i*.85);n.norm=s,n.base=new le,n.base.add(n.root),n.root.position.x=-((e.max.x+e.min.x)/2)*.55,n.base.scale.setScalar(s),n.width=i*s,n.height=t*s;let r=n.root;n.root=n.base,n.inner=r}function Qc(n,e){let t=[.74,.87,1][e],i=[1.2,1.08,1][e];n.inner.scale.setScalar(t),n.head.scale.setScalar(i),n.stage=e}var Xy=new Set(["purr","giggle","sneeze","lookback","stomp","dizzy","shakehead"]);b.calm=()=>{b.actions=[],qd(b),iu(b);let n=b.walk;if(n.resolve){let e=n.resolve;n.resolve=null,e()}b.walk=tu()};b.act=(n,e={})=>{let t=b.friend;if(!t||!Od.includes(n))return;n!=="eat"&&(b.actions=b.actions.filter(s=>s.name!==n)),Xy.has(n)&&b.walk.target&&!b.walk.locked&&(b.walk.pause=Math.max(b.walk.pause||0,1.8));let i={name:n,t:0,side:e.side||1,dur:e.dur||0};if(n==="lookback"&&t.tail&&!e.side){let s=new L,r=new L;t.tail.getWorldPosition(s),t.head.getWorldPosition(r),i.side=s.x>=r.x?1:-1}b.actions.push(i)};b.busyActing=()=>b.actions.length>0||!!b.walk.target||b.effects.length>0;b.burstAt=(n,e,t=8,i={})=>{let s=_i(b,e==="nose"?"mouth":e);if(e==="mouth"||e==="nose"){let r=b.friend,a=new L(0,0,1).transformDirection(r.mouthAnchor.matrixWorld);s.addScaledVector(a,.08)}Sn(b,n,s,t,i)};b.burstScreen=(n,e,t,i=8,s={})=>{let r=b.screenToWorld(e,t,_i(b,"center").z+.3);r&&Sn(b,n,r,i,s)};b.stars=n=>kd(b,n);b.foamAt=(n,e)=>{let t=b.hit(n,e);return t&&Yd(b,t),!!t};b.popFoam=n=>Zd(b,n);b.clearFoam=()=>iu(b);b.screenToWorld=(n,e,t=.3)=>{_r.setFromCamera(new ue(n/innerWidth*2-1,-(e/innerHeight)*2+1),b.camera);let i=new L;return _r.ray.intersectPlane(new gn(new L(0,0,1),-t),i)?i:null};b.feed=(n,e,t)=>{if(!b.friend)return Promise.resolve();let i=t?b.screenToWorld(t.x,t.y,_i(b,"mouth").z+.25):null;return Gd(b,n,e,i)};b.ball=n=>{let e=n?b.screenToWorld(n.x,n.y,_i(b,"head").z+.6):null;Vd(b,e)};b.butterfly=()=>Wd(b);b.setTheme=(n,e)=>{if(!Ta[n])return;let t=ou(n);t.setTheme&&(t.wall=t.setTheme(e),b.room===t&&(b.scene.background=new ge(t.wall)))};b.celebrate=()=>{let n=b.friend;if(!n)return;let e=n.inner.scale.x;Sn(b,"spark",_i(b,"head"),16),b.act("stretch"),b.effects.push({age:0,update(t){this.age+=t;let i=Math.min(1,this.age/1.3),s=i<.35?.84+.26*(i/.35):1.1-.1*Math.min(1,(i-.35)/.65)+Math.sin((i-.35)*18)*.03*(1-i);return b.friend!==n?!1:(n.inner.scale.setScalar(e*s),i>=1?(n.inner.scale.setScalar(e),!1):!0)}})};b.walkable=()=>b.roomName==="home"||b.roomName==="kitchen";b.walkRange=()=>{let n=b.friend;if(!n||!b.pxPerUnit)return 0;let e=innerWidth/2/b.pxPerUnit;return Math.max(0,e-(n.width||1.4)*n.inner.scale.x*.55-.05)};b.walkTo=(n,e=0,t=1)=>new Promise(i=>{let s=b.walk;if(!b.friend||!b.walkable()){i();return}if(s.resolve){let r=s.resolve;s.resolve=null,r()}s.target={x:n,z:e},s.speed=t,s.resolve=i});b.enter=n=>{let e=b.friend;if(!e||!b.walkable())return Promise.resolve();let t=innerWidth/2/(b.pxPerUnit||200);return b.walk.x=n*Math.min(1.8,t*.8),b.walk.z=-.1,b.walk.yaw=n>0?-Math.PI/2-(e.turn||0):Math.PI/2-(e.turn||0),b.walkTo(0,0,1.3)};b.wander=async()=>{if(!b.friend||!b.walkable()||b.walk.target)return;let n=b.walkRange();if(n<.4){b.act("lookaround");return}let e=Math.random()<.5?-1:1;await b.walkTo(e*n*(.6+Math.random()*.4),-.1-Math.random()*.12,.8),b.walkable()&&(b.act("lookaround"),await new Promise(t=>setTimeout(t,2600)),b.walkable()&&await b.walkTo(0,0,.9))};b.startGame=(n,e={})=>!b.friend||!su[n]?!1:(b.stopGame(),b.setRoom("play"),b.setLayout("game"),b.calm(),b.game=su[n](b,e),!0);b.stopGame=()=>{if(b.game){try{b.game.stop()}catch{}b.game=null,b.calm()}};b.gamePointer=(n,e,t)=>{b.game&&b.game.pointer(n,e,t)};b.setLayout=n=>{b.layout!==n&&(b.layout=n,b.frame())};b.setFit=(n,e)=>{b.fit=n?{bottom:n.bottom,h:n.height,worldH:e}:null,b.frame()};b.frame=()=>{if(!b.camera)return;let n=innerWidth,e=innerHeight,t=b.safe.top,i=b.safe.bottom,s=Math.max(120,e-t-i),r=b.layout==="game",a=b.layout==="small"||r,c=Math.min(s*(r||a?.3:.74)/Jc,n*(r?.52:a?.4:.92)/(Jc*1.15));b.roomName==="bath"&&!a&&(c=Math.min(c,n*.98/2.6)),b.roomName==="bed"&&!a&&(c=Math.min(c,n*.98/2.35));let l=b.fit;l&&(c=Math.min(l.h/l.worldH,n*.92/(Jc*1.15)));let h=b.camera.fov*Math.PI/180,f=e/c/(2*Math.tan(h/2)),m=b.roomName==="bed"?.55:0;b.camera.position.set(0,1.25+m,f),b.camera.lookAt(0,.95+m*.9,0),b.camera.clearViewOffset(),b.camera.updateProjectionMatrix(),b.camera.updateMatrixWorld();let x=b.roomName==="bed"&&!a?.5:0,d=(1-new L(0,x,0).project(b.camera).y)/2*e,p=l?l.bottom-l.h*.03:r?e-Math.max(36,e*.07):e-i-(a?10:Math.max(14,s*.05)),y=d-p;b.camera.setViewOffset(n,e,0,y,n,e),b.camera.updateProjectionMatrix(),b.pxPerUnit=c};function qy(n){return b.stateEl?b.stateEl.classList.contains(n):!1}var gr=(n,e,t)=>n+(e-n)*t;function Yy(n){zd(b,n)}function Zy(n){let e=b.friend,t=b.stageEl?b.stageEl.classList:null,i=b.hidden||t&&t.contains("gone")||b.egg;if(b.petHolder.visible=!i,!e)return;let s=0,r=0,a=0;b.room&&b.room.petY!=null&&b.roomName!=="play"&&(r=b.room.petY,a=b.room.petZ||0),b.roomName==="bath"&&(r=Math.max(r,1.04-Jy(e))),b.roomName==="bed"&&(r-=b.blanket*.12),(b.walkable()||b.game)&&(s+=b.walk.x,a+=b.walk.z,r+=b.walk.y||0),b.petHolder.position.set(s,r,a);let o=(e.width||1.4)*e.inner.scale.x;b.contact.scale.set(o*1.15,.9*e.inner.scale.x,1),b.contact.position.set(0,.006,0),b.contact.visible=b.roomName!=="bath"}function Jy(n){if(n._mouthY!=null)return n._mouthY;let e=b.petHolder.position.clone();b.petHolder.position.set(0,0,0),b.petHolder.updateMatrixWorld(!0);let t=new L;return n.mouthAnchor.getWorldPosition(t),b.petHolder.position.copy(e),b.petHolder.updateMatrixWorld(!0),n._mouthY=t.y,t.y}var Zn={keyDay:new ge(16773340),moon:new ge(11122943),sky:new ge,nightSky:new ge(7305432),fillDay:new ge(13624063),nightFill:new ge(5924560),rimDay:new ge(16774888)};b.dark=0;function $y(n){let e=b.room;if(e){if(e.update&&e.update(b.t),b.dark=gr(b.dark,b.darkTarget,Math.min(1,n*3)),b.roomName==="bed"){let t=ru.bed,i=b.dark;b.L.key.intensity=t.key*(1-.9*i),b.L.key.color.lerpColors(Zn.keyDay,Zn.moon,i),b.L.hemi.intensity=t.hemi*(1-.6*i),b.L.hemi.color.lerpColors(Zn.sky.setHex(t.sky),Zn.nightSky,i),b.L.fill.color.lerpColors(Zn.fillDay,Zn.nightFill,i),b.L.fill.intensity=.55*(1-.55*i),b.L.rim.color.lerpColors(Zn.rimDay,Zn.moon,i),b.L.rim.intensity=1.3*(1-.2*i),b.renderer.toneMappingExposure=t.exposure*(1-.3*i),b.scene.environmentIntensity=.45*(1-.75*i),e.lampAt&&(b.L.lamp.position.copy(e.lampAt),b.L.lamp.intensity=3.2*(1-i),e.shadeMat.emissiveIntensity=.9*(1-i)+.05),b.L.night.intensity=2.6*i,b.blanket=gr(b.blanket,b.blanketTarget,Math.min(1,n*3)),e.blanket&&(e.blanket.position.set(0,.62+b.blanket*0,.15-(1-b.blanket)*0),e.blanket.visible=b.blanket>.02,e.blanket.scale.set(1,1,Math.max(.05,b.blanket)),e.blanket.position.z=-.55+.68*.5*(1+b.blanket)-.2)}else b.wasNight&&(b.L.lamp.intensity=0,b.L.night.intensity=0,b.scene.environmentIntensity=.45,b.L.fill.color.copy(Zn.fillDay),b.L.fill.intensity=.55,b.L.key.color.copy(Zn.keyDay),b.L.rim.color.copy(Zn.rimDay),b.L.rim.intensity=1.3);if(b.wasNight=b.roomName==="bed",e.setCurtain){let t=b.curtain;b.curtain=gr(b.curtain,b.curtainTarget,Math.min(1,n*4)),Math.abs(t-b.curtain)>.001&&e.setCurtain(b.curtain)}}}b.setDark=n=>{b.darkTarget=n?1:0};b.setBlanket=n=>{b.blanketTarget=n?1:0};b.setCurtain=n=>{b.curtainTarget=n?0:1};b.loop=()=>{let n=()=>{if(requestAnimationFrame(n),b.paused||document.hidden){b.clock.getDelta();return}let e=Math.min(.06,b.clock.getDelta());b.t+=e;let t=b.safeTarget;if(t&&(Math.abs(t.top-b.safe.top)>.5||Math.abs(t.bottom-b.safe.bottom)>.5)){let r=Math.min(1,e*7);b.safe={top:gr(b.safe.top,t.top,r),bottom:gr(b.safe.bottom,t.bottom,r)},b.frame()}b.game&&b.game.update(e),Zy(e),Yy(e),Xd(b,e),$y(e),b.egg&&b.egg.update(e),b.onFrame&&b.onFrame(e);let i=performance.now();b.renderer.render(b.scene,b.camera);let s=performance.now()-i+e*1e3*.25;i>b.busyUntil&&(b.frameAvg=b.frameAvg*.95+e*1e3*.05),++b.frameN%90===0&&(b.frameAvg>26&&b.dpr>1?(b.dpr=Math.max(1,b.dpr-.25),b.dprMax=b.dpr,b.renderer.setPixelRatio(b.dpr),b.resize()):b.frameAvg<17.5&&b.dpr<b.dprMax&&(b.dpr=Math.min(b.dprMax,b.dpr+.25),b.renderer.setPixelRatio(b.dpr),b.resize()))};requestAnimationFrame(n)};var Ni=new L;function Zc(n,e){return n.updateWorldMatrix(!0,!1),Ni.set(0,0,0),e&&Ni.copy(e),n.localToWorld(Ni),Ni.project(b.camera),{x:(Ni.x+1)/2*innerWidth,y:(1-Ni.y)/2*innerHeight}}b.project=n=>{let e=b.friend;if(!e)return{x:innerWidth/2,y:innerHeight*.45};if(n==="mouth")return Zc(e.mouthAnchor);if(n==="headTop")return e.outfitObj&&e.outfitObj.parent===e.hat?Zc(e.hat,g(0,.5,0)):Zc(e.hat,g(0,.08,0));if(n==="center"){let t=b.bounds();return{x:(t.left+t.right)/2,y:(t.top+t.bottom)/2}}return Zc(e.root)};b.worldToScreen=n=>(Ni.copy(n).project(b.camera),{x:(Ni.x+1)/2*innerWidth,y:(1-Ni.y)/2*innerHeight});b.bounds=()=>{let n=b.friend;if(!n)return{left:0,top:0,right:0,bottom:0};let e=performance.now();if(b.boundsCache&&e-b.boundsAt<120)return b.boundsCache;n.root.updateMatrixWorld(!0);let t=new sn;n.root.traverse(r=>{if(r.isMesh&&r.visible&&r!==b.contact){r.geometry.computeBoundingBox&&!r.geometry.boundingBox&&r.geometry.computeBoundingBox();let a=r.geometry.boundingBox.clone().applyMatrix4(r.matrixWorld);t.union(a)}});let i=[];for(let r of[t.min.x,t.max.x])for(let a of[t.min.y,t.max.y])for(let o of[t.min.z,t.max.z])i.push(b.worldToScreen(g(r,a,o)));let s={left:Math.min(...i.map(r=>r.x)),right:Math.max(...i.map(r=>r.x)),top:Math.min(...i.map(r=>r.y)),bottom:Math.max(...i.map(r=>r.y))};return b.boundsCache=s,b.boundsAt=e,s};var _r=new ms;b.hit=(n,e)=>{let t=b.friend;if(!t||!b.petHolder.visible)return null;_r.setFromCamera(new ue(n/innerWidth*2-1,-(e/innerHeight)*2+1),b.camera);let i=_r.intersectObject(t.root,!0);for(let s of i){let r=s.object,a=null,o=!1;for(;r;)!a&&r.userData.part&&(a=r.userData.part),r===t.head&&(o=!0),r=r.parent;if(s.object.visible)return{part:a||"belly",head:o||Wy.has(a),point:s.point,object:s.object}}return null};b.lookAt=(n,e)=>{if(n==null){b.look=null;return}_r.setFromCamera(new ue(n/innerWidth*2-1,-(e/innerHeight)*2+1),b.camera);let t=new gn(new L(0,0,1),-.8),i=new L;_r.ray.intersectPlane(t,i)&&(b.look=!0,b.lookW.copy(i))};var Na=.56,Di=32,au=.05,Kc=n=>{let e=(n*Di%2+2)%2;return e<1?1-2*e:-1+2*(e-1)};function Kd(n,e={}){let t=Ky[n]||["#fff5e2","#9edc8a"],i=qc(t[0],t[1],n.length*7),s=new je({map:i.tex,roughness:.35,clearcoat:.6,sheen:.2}),r=new an({color:"#fff3df",roughness:.6,side:Xt}),a=32,o=64,c=(x,_,d)=>{let p=[];for(let E=0;E<=a;E++){let w=x+(_-x)*E/a,C=Math.sin(Math.PI*w)**.62*.42*(1-.12*w);p.push(new ue(Math.max(1e-4,C),w))}let y=new Dn(p,o),T=y.attributes.position,v=y.attributes.uv;for(let E=0;E<=o;E++)for(let w=0;w<=a;w++){let C=E*(a+1)+w;if(v.setY(C,x+(_-x)*w/a),w===d){let M=E/o;T.setY(C,T.getY(C)-Kc(M)*au),v.setY(C,v.getY(C)-Kc(M)*au)}}return y},l=new le,h=c(0,Na,a),u=new Q(h,s);u.castShadow=!0,l.add(u);let f=new Q(h,r);f.scale.setScalar(.985),u.add(f);let m=new le;if(m.position.y=Na,!e.noTop){let x=c(Na,1,0);x.translate(0,-Na,0);let _=new Q(x,s);_.castShadow=!0,m.add(_);let d=new Q(x,r);d.scale.setScalar(.985),_.add(d),l.add(m)}return{egg:l,bottom:u,topG:m,paint:i,mat:s}}function $c(n,e,t){let i=n.g,s=n.canvas.width,r=n.canvas.height,a=au*r,o=(1-Na)*r;i.strokeStyle="#4a3226",i.lineWidth=5,i.lineJoin="round",i.lineCap="round";for(let c=e;c<t;c++){let l=(c%Di+Di)%Di,h=l*s/Di,u=h+s/Di,f=o+Kc(l/Di)*a,m=o+Kc((l+1)/Di)*a;i.beginPath(),i.moveTo(h,f),i.lineTo(u,m),i.stroke()}n.tex.needsUpdate=!0}b.showEgg=(n,e)=>{b.clearEgg();let t=new le;b.scene.add(t);let i={g:t,taps:0,born:e,sp:n,wob:0,phase:"wait",tt:0};if(e){let s=new Q(new Dn([[0,0],[.5,0],[.62,.08],[.7,.42],[.74,.46],[.7,.48],[.64,.12],[0,.1]].map(([o,c])=>new ue(o,c)),64),new an({map:Pd(),roughness:.85,side:Rt}));s.scale.set(1,1,.8),s.castShadow=!0,s.receiveShadow=!0,t.add(s);let r=new le;r.position.y=.45,t.add(r);let a=new Q(new St(.68,48,24,0,Math.PI*2,0,Math.PI/2),new je({map:Yn("#ff9ec4","#ffd0e4",10),roughness:.85,sheen:1,sheenColor:new ge("#ffe6f0"),side:Rt}));a.scale.set(1,.5,.82),a.castShadow=!0,r.add(a),Object.assign(i,{blanket:r})}else{let s=new Q(new Tt(.52,.2,20,48),new an({map:Id(),roughness:1}));s.rotation.x=Math.PI/2,s.scale.set(1,1,.75),s.position.y=.14,s.castShadow=!0,s.receiveShadow=!0,t.add(s);let r=qt(3);for(let o=0;o<40;o++){let c=r()*Math.PI*2,l=new Q(new ht(.008,.008,.35,5),new an({color:r()<.5?"#e5bd75":"#b88a45",roughness:1}));l.position.set(Math.cos(c)*(.5+r()*.2),.2+r()*.12,Math.sin(c)*(.5+r()*.2)),l.rotation.set(r()*3,r()*3,r()*3),t.add(l)}let a=Kd(n);a.egg.position.y=.12,t.add(a.egg),Object.assign(i,a)}i.update=s=>{if(i.tt+=s,i.phase==="wait"){i.wob=Math.max(0,i.wob-s*3);let r=Math.sin(i.tt*2.2)>.85?Math.sin(i.tt*18)*.05:0,a=Math.sin(i.tt*30)*.12*i.wob+r;i.egg&&(i.egg.rotation.z=a,i.egg.scale.set(1+i.wob*.05,1-i.wob*.06,1+i.wob*.05)),i.blanket&&(i.blanket.position.y=.45+Math.max(0,Math.sin(i.tt*3))*.03+i.wob*.06,i.blanket.rotation.z=a*.5)}else if(i.phase==="open"){let r=Math.min(1,(i.tt-i.t0)/.9);if(i.topG&&(i.topG.position.set(r*.6,.56+r*1.4-r*r*1,r*.3),i.topG.rotation.z=-r*2.2,i.topG.visible=r<1,i.bottom.scale.setScalar(1-Math.max(0,r-.4)*1.4),i.bottom.visible=r<.98),i.blanket&&(i.blanket.position.set(-r*.9,.45+Math.sin(r*Math.PI)*.8,.2*r),i.blanket.rotation.z=r*1.6,i.blanket.visible=r<1),i.pet){let a=Math.min(1,r*1.4),o=a<1?a*1.12:1+Math.sin((r-.71)*10)*.04*(1-r);i.pet.scale.setScalar(Math.max(.01,o))}if(r>=1&&i.done){let a=i.done;i.done=null,a()}}i.rig&&(i.mt=gr(i.mt||0,qy("talk")?1:0,Math.min(1,s*22)),i.rig.mouth.set(i.mt),i.rig.head.rotation.z=Math.sin(i.tt*1.6)*.06,i.phase==="open"&&i.tt-i.t0>1&&(i.pet.position.y=(i.born?.15:.1)+Math.abs(Math.sin(i.tt*2.4))*.03))},b.egg=i,b.petHolder.visible=!1};b.crack=()=>{let n=b.egg;!n||n.phase!=="wait"||(n.taps++,n.wob=1,n.paint&&(n.taps===1?$c(n.paint,-5,5):($c(n.paint,-11,-5),$c(n.paint,5,11))))};b.hatch=()=>new Promise(n=>{let e=b.egg;if(!e){n();return}e.phase="open",e.t0=e.tt;let t=Ma(e.sp,2);jc(t),Qc(t,0);for(let s of t.eyes)s.set(1,1,0);let i=new le;i.add(t.root),i.position.y=e.born?.15:.1,i.scale.setScalar(.01),e.g.add(i),e.pet=i,e.rig=t,e.done=n});b.clearEgg=()=>{b.egg&&(b.scene.remove(b.egg.g),va(b.egg.g),b.egg=null)};var Ky={trex:["#fff5e2","#7cc85a"],trike:["#fff5e2","#f2a33a"],stego:["#fff5e2","#45b0a5"],brachio:["#fff5e2","#9787ef"],anky:["#fff5e2","#5b8def"],penguin:["#f4f8ff","#9fb4d8"]},Jn=null,bs=null,rs=null,jy=null,xr=new Map;function Qy(){if(Jn)return;let n=document.createElement("canvas");Jn=Uh(n,{alpha:!0,preserve:!0}),Jn.setPixelRatio(1),bs=new Wi,bs.environment=Fh(Jn),bs.environmentIntensity=.5,jy=Oh(bs,{shadowSize:1024,hemi:.75}),rs=new tn(30,1,.1,50)}function cu(n,e,t,i={}){if(Qy(),Jn.getContext().isContextLost())return va(n),"";let s=i.crop?1.5:1,r=Math.round(e*s),a=Math.round(t*s);Jn.setSize(r,a,!1),bs.add(n),n.updateMatrixWorld(!0);let o=new sn().setFromObject(n),c=o.getSize(new L),l=o.getCenter(new L);rs.aspect=r/a;let h=rs.fov*Math.PI/180,u=c.y/(2*Math.tan(h/2)),f=c.x/(2*Math.tan(h/2)*rs.aspect),m=Math.max(u,f)*(i.margin??1.18)+c.z/2,x=(i.dir||g(0,.18,1)).normalize();rs.position.copy(l).addScaledVector(x,m),rs.lookAt(l),rs.updateProjectionMatrix(),Jn.render(bs,rs);let _=i.crop?ev(r,a,e,t,i.pad??.06):Jn.domElement.toDataURL("image/png");return bs.remove(n),va(n),_}function ev(n,e,t,i,s){let r=Jn.getContext(),a=new Uint8Array(n*e*4);r.readPixels(0,0,n,e,r.RGBA,r.UNSIGNED_BYTE,a);let o=n,c=-1,l=e,h=-1;for(let v=0;v<e;v++)for(let E=0;E<n;E++)a[(v*n+E)*4+3]>24&&(E<o&&(o=E),E>c&&(c=E),v<l&&(l=v),v>h&&(h=v));if(c<0)return Jn.domElement.toDataURL("image/png");let u=o,f=e-1-h,m=c-o+1,x=h-l+1,_=document.createElement("canvas");_.width=t,_.height=i;let d=Math.min(t*(1-2*s)/m,i*(1-2*s)/x),p=m*d,y=x*d,T=_.getContext("2d");return T.imageSmoothingQuality="high",T.drawImage(Jn.domElement,u,f,m,x,(t-p)/2,(i-y)/2,p,y),_.toDataURL("image/png")}b.snapshot=(n,e={})=>{let t=[n,e.stage??2,e.outfit||"",e.pose||"",e.w||360].join(":");if(xr.has(t))return xr.get(t);let i=Ma(n,2);if(jc(i),Qc(i,e.stage??2),Sa(i,e.outfit),e.pose==="happy")for(let l of i.eyes)l.set(1,1,0);if(e.pose==="sleep"){for(let l of i.eyes)l.set(0,0,1);i.head.rotation.x=.2}e.pose==="talk"&&i.mouth.set(.8);let s=new le;s.add(i.root);let r=new Q(new Vt(1,1),new Gt({map:is("#4a2a1a",128),transparent:!0,opacity:.35,depthWrite:!1}));r.rotation.x=-Math.PI/2,r.scale.set((i.width||1.4)*1.1*i.inner.scale.x,.8*i.inner.scale.x,1),r.position.y=.004,s.add(r);let a=e.w||360,o=Math.round(a*(e.ratio??1.08)),c=cu(s,a,o,{margin:e.margin??1.1});return c&&xr.set(t,c),c};b.icon=(n,e=160)=>{let t="icon:"+n+":"+e;if(xr.has(t))return xr.get(t);let i=Ss(n);if(!i)return"";let s=cu(i,e,e,{margin:1.3,dir:i.userData.dir||g(.35,.5,1),crop:!0});return s&&xr.set(t,s),s};b.hatchling=(n,e=1024,t={})=>{let i=new le,s=Kd(n,{noTop:!0}),r=t.eggScale??1.5;s.egg.scale.setScalar(r),s.egg.position.y=.02,i.add(s.egg),$c(s.paint,0,Di);let a=Ma(n,2);jc(a),Qc(a,0),Sa(a,t.outfit);for(let c of a.eyes)c.set(1,t.pose==="happy"?1:0,0);return t.pose==="talk"&&a.mouth.set(.8),a.root.position.y=.12*r,t.turn!=null&&(a.inner.rotation.y=t.turn),i.add(a.root),cu(i,e,Math.round(e*(t.ratio??1)),{margin:t.margin??1.02,dir:t.dir||g(0,.16,1)})};b.friends=wd;var $S=b;})();
