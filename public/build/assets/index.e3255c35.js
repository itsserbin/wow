import{C as Te}from"./app.d33e4a32.js";import{aY as Oe,y as Ae,I as je,A as vt,G as we,ak as me,w as _t}from"./___vite-browser-external_commonjs-proxy.2503c6f8.js";var Pe=typeof global=="object"&&global&&global.Object===Object&&global;const Jt=Pe;var Se=typeof self=="object"&&self&&self.Object===Object&&self,Ce=Jt||Se||Function("return this")();const T=Ce;var Ee=T.Symbol;const m=Ee;var Xt=Object.prototype,Ie=Xt.hasOwnProperty,xe=Xt.toString,B=m?m.toStringTag:void 0;function Le(t){var e=Ie.call(t,B),r=t[B];try{t[B]=void 0;var n=!0}catch{}var o=xe.call(t);return n&&(e?t[B]=r:delete t[B]),o}var De=Object.prototype,Me=De.toString;function Fe(t){return Me.call(t)}var Ue="[object Null]",Re="[object Undefined]",$t=m?m.toStringTag:void 0;function q(t){return t==null?t===void 0?Re:Ue:$t&&$t in Object(t)?Le(t):Fe(t)}function I(t){return t!=null&&typeof t=="object"}var Be=Array.isArray;const F=Be;function W(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var Ge="[object AsyncFunction]",Ne="[object Function]",He="[object GeneratorFunction]",Ke="[object Proxy]";function Zt(t){if(!W(t))return!1;var e=q(t);return e==Ne||e==He||e==Ge||e==Ke}var ze=T["__core-js_shared__"];const et=ze;var Tt=function(){var t=/[^.]+$/.exec(et&&et.keys&&et.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function qe(t){return!!Tt&&Tt in t}var We=Function.prototype,Ye=We.toString;function L(t){if(t!=null){try{return Ye.call(t)}catch{}try{return t+""}catch{}}return""}var Je=/[\\^$.*+?()[\]{}|]/g,Xe=/^\[object .+?Constructor\]$/,Ze=Function.prototype,Qe=Object.prototype,Ve=Ze.toString,ke=Qe.hasOwnProperty,tr=RegExp("^"+Ve.call(ke).replace(Je,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function er(t){if(!W(t)||qe(t))return!1;var e=Zt(t)?tr:Xe;return e.test(L(t))}function rr(t,e){return t==null?void 0:t[e]}function D(t,e){var r=rr(t,e);return er(r)?r:void 0}var nr=D(T,"WeakMap");const at=nr;var Ot=Object.create,ar=function(){function t(){}return function(e){if(!W(e))return{};if(Ot)return Ot(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}();const or=ar;function ir(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}var sr=function(){try{var t=D(Object,"defineProperty");return t({},"",{}),t}catch{}}();const At=sr;function cr(t,e){for(var r=-1,n=t==null?0:t.length;++r<n&&e(t[r],r,t)!==!1;);return t}var ur=9007199254740991,fr=/^(?:0|[1-9]\d*)$/;function lr(t,e){var r=typeof t;return e=e==null?ur:e,!!e&&(r=="number"||r!="symbol"&&fr.test(t))&&t>-1&&t%1==0&&t<e}function Qt(t,e,r){e=="__proto__"&&At?At(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r}function ut(t,e){return t===e||t!==t&&e!==e}var pr=Object.prototype,dr=pr.hasOwnProperty;function Vt(t,e,r){var n=t[e];(!(dr.call(t,e)&&ut(n,r))||r===void 0&&!(e in t))&&Qt(t,e,r)}function Q(t,e,r,n){var o=!r;r||(r={});for(var a=-1,s=e.length;++a<s;){var c=e[a],u=n?n(r[c],t[c],c,r,t):void 0;u===void 0&&(u=t[c]),o?Qt(r,c,u):Vt(r,c,u)}return r}var gr=9007199254740991;function kt(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=gr}function ft(t){return t!=null&&kt(t.length)&&!Zt(t)}var hr=Object.prototype;function V(t){var e=t&&t.constructor,r=typeof e=="function"&&e.prototype||hr;return t===r}function yr(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}var br="[object Arguments]";function jt(t){return I(t)&&q(t)==br}var te=Object.prototype,vr=te.hasOwnProperty,_r=te.propertyIsEnumerable,$r=jt(function(){return arguments}())?jt:function(t){return I(t)&&vr.call(t,"callee")&&!_r.call(t,"callee")};const ee=$r;function Tr(){return!1}var re=typeof exports=="object"&&exports&&!exports.nodeType&&exports,wt=re&&typeof module=="object"&&module&&!module.nodeType&&module,Or=wt&&wt.exports===re,mt=Or?T.Buffer:void 0,Ar=mt?mt.isBuffer:void 0,jr=Ar||Tr;const H=jr;var wr="[object Arguments]",mr="[object Array]",Pr="[object Boolean]",Sr="[object Date]",Cr="[object Error]",Er="[object Function]",Ir="[object Map]",xr="[object Number]",Lr="[object Object]",Dr="[object RegExp]",Mr="[object Set]",Fr="[object String]",Ur="[object WeakMap]",Rr="[object ArrayBuffer]",Br="[object DataView]",Gr="[object Float32Array]",Nr="[object Float64Array]",Hr="[object Int8Array]",Kr="[object Int16Array]",zr="[object Int32Array]",qr="[object Uint8Array]",Wr="[object Uint8ClampedArray]",Yr="[object Uint16Array]",Jr="[object Uint32Array]",d={};d[Gr]=d[Nr]=d[Hr]=d[Kr]=d[zr]=d[qr]=d[Wr]=d[Yr]=d[Jr]=!0;d[wr]=d[mr]=d[Rr]=d[Pr]=d[Br]=d[Sr]=d[Cr]=d[Er]=d[Ir]=d[xr]=d[Lr]=d[Dr]=d[Mr]=d[Fr]=d[Ur]=!1;function Xr(t){return I(t)&&kt(t.length)&&!!d[q(t)]}function lt(t){return function(e){return t(e)}}var ne=typeof exports=="object"&&exports&&!exports.nodeType&&exports,N=ne&&typeof module=="object"&&module&&!module.nodeType&&module,Zr=N&&N.exports===ne,rt=Zr&&Jt.process,Qr=function(){try{var t=N&&N.require&&N.require("util").types;return t||rt&&rt.binding&&rt.binding("util")}catch{}}();const U=Qr;var Pt=U&&U.isTypedArray,Vr=Pt?lt(Pt):Xr;const pt=Vr;var kr=Object.prototype,tn=kr.hasOwnProperty;function ae(t,e){var r=F(t),n=!r&&ee(t),o=!r&&!n&&H(t),a=!r&&!n&&!o&&pt(t),s=r||n||o||a,c=s?yr(t.length,String):[],u=c.length;for(var i in t)(e||tn.call(t,i))&&!(s&&(i=="length"||o&&(i=="offset"||i=="parent")||a&&(i=="buffer"||i=="byteLength"||i=="byteOffset")||lr(i,u)))&&c.push(i);return c}function oe(t,e){return function(r){return t(e(r))}}var en=oe(Object.keys,Object);const rn=en;var nn=Object.prototype,an=nn.hasOwnProperty;function ie(t){if(!V(t))return rn(t);var e=[];for(var r in Object(t))an.call(t,r)&&r!="constructor"&&e.push(r);return e}function dt(t){return ft(t)?ae(t):ie(t)}function on(t){var e=[];if(t!=null)for(var r in Object(t))e.push(r);return e}var sn=Object.prototype,cn=sn.hasOwnProperty;function un(t){if(!W(t))return on(t);var e=V(t),r=[];for(var n in t)n=="constructor"&&(e||!cn.call(t,n))||r.push(n);return r}function gt(t){return ft(t)?ae(t,!0):un(t)}var fn=D(Object,"create");const K=fn;function ln(){this.__data__=K?K(null):{},this.size=0}function pn(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var dn="__lodash_hash_undefined__",gn=Object.prototype,hn=gn.hasOwnProperty;function yn(t){var e=this.__data__;if(K){var r=e[t];return r===dn?void 0:r}return hn.call(e,t)?e[t]:void 0}var bn=Object.prototype,vn=bn.hasOwnProperty;function _n(t){var e=this.__data__;return K?e[t]!==void 0:vn.call(e,t)}var $n="__lodash_hash_undefined__";function Tn(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=K&&e===void 0?$n:e,this}function x(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}x.prototype.clear=ln;x.prototype.delete=pn;x.prototype.get=yn;x.prototype.has=_n;x.prototype.set=Tn;function On(){this.__data__=[],this.size=0}function k(t,e){for(var r=t.length;r--;)if(ut(t[r][0],e))return r;return-1}var An=Array.prototype,jn=An.splice;function wn(t){var e=this.__data__,r=k(e,t);if(r<0)return!1;var n=e.length-1;return r==n?e.pop():jn.call(e,r,1),--this.size,!0}function mn(t){var e=this.__data__,r=k(e,t);return r<0?void 0:e[r][1]}function Pn(t){return k(this.__data__,t)>-1}function Sn(t,e){var r=this.__data__,n=k(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this}function j(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}j.prototype.clear=On;j.prototype.delete=wn;j.prototype.get=mn;j.prototype.has=Pn;j.prototype.set=Sn;var Cn=D(T,"Map");const z=Cn;function En(){this.size=0,this.__data__={hash:new x,map:new(z||j),string:new x}}function In(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function tt(t,e){var r=t.__data__;return In(e)?r[typeof e=="string"?"string":"hash"]:r.map}function xn(t){var e=tt(this,t).delete(t);return this.size-=e?1:0,e}function Ln(t){return tt(this,t).get(t)}function Dn(t){return tt(this,t).has(t)}function Mn(t,e){var r=tt(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this}function M(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}M.prototype.clear=En;M.prototype.delete=xn;M.prototype.get=Ln;M.prototype.has=Dn;M.prototype.set=Mn;function se(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}var Fn=oe(Object.getPrototypeOf,Object);const ce=Fn;function Un(){this.__data__=new j,this.size=0}function Rn(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r}function Bn(t){return this.__data__.get(t)}function Gn(t){return this.__data__.has(t)}var Nn=200;function Hn(t,e){var r=this.__data__;if(r instanceof j){var n=r.__data__;if(!z||n.length<Nn-1)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new M(n)}return r.set(t,e),this.size=r.size,this}function A(t){var e=this.__data__=new j(t);this.size=e.size}A.prototype.clear=Un;A.prototype.delete=Rn;A.prototype.get=Bn;A.prototype.has=Gn;A.prototype.set=Hn;function Kn(t,e){return t&&Q(e,dt(e),t)}function zn(t,e){return t&&Q(e,gt(e),t)}var ue=typeof exports=="object"&&exports&&!exports.nodeType&&exports,St=ue&&typeof module=="object"&&module&&!module.nodeType&&module,qn=St&&St.exports===ue,Ct=qn?T.Buffer:void 0,Et=Ct?Ct.allocUnsafe:void 0;function Wn(t,e){if(e)return t.slice();var r=t.length,n=Et?Et(r):new t.constructor(r);return t.copy(n),n}function Yn(t,e){for(var r=-1,n=t==null?0:t.length,o=0,a=[];++r<n;){var s=t[r];e(s,r,t)&&(a[o++]=s)}return a}function fe(){return[]}var Jn=Object.prototype,Xn=Jn.propertyIsEnumerable,It=Object.getOwnPropertySymbols,Zn=It?function(t){return t==null?[]:(t=Object(t),Yn(It(t),function(e){return Xn.call(t,e)}))}:fe;const ht=Zn;function Qn(t,e){return Q(t,ht(t),e)}var Vn=Object.getOwnPropertySymbols,kn=Vn?function(t){for(var e=[];t;)se(e,ht(t)),t=ce(t);return e}:fe;const le=kn;function ta(t,e){return Q(t,le(t),e)}function pe(t,e,r){var n=e(t);return F(t)?n:se(n,r(t))}function ot(t){return pe(t,dt,ht)}function ea(t){return pe(t,gt,le)}var ra=D(T,"DataView");const it=ra;var na=D(T,"Promise");const st=na;var aa=D(T,"Set");const ct=aa;var xt="[object Map]",oa="[object Object]",Lt="[object Promise]",Dt="[object Set]",Mt="[object WeakMap]",Ft="[object DataView]",ia=L(it),sa=L(z),ca=L(st),ua=L(ct),fa=L(at),E=q;(it&&E(new it(new ArrayBuffer(1)))!=Ft||z&&E(new z)!=xt||st&&E(st.resolve())!=Lt||ct&&E(new ct)!=Dt||at&&E(new at)!=Mt)&&(E=function(t){var e=q(t),r=e==oa?t.constructor:void 0,n=r?L(r):"";if(n)switch(n){case ia:return Ft;case sa:return xt;case ca:return Lt;case ua:return Dt;case fa:return Mt}return e});const R=E;var la=Object.prototype,pa=la.hasOwnProperty;function da(t){var e=t.length,r=new t.constructor(e);return e&&typeof t[0]=="string"&&pa.call(t,"index")&&(r.index=t.index,r.input=t.input),r}var ga=T.Uint8Array;const X=ga;function yt(t){var e=new t.constructor(t.byteLength);return new X(e).set(new X(t)),e}function ha(t,e){var r=e?yt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}var ya=/\w*$/;function ba(t){var e=new t.constructor(t.source,ya.exec(t));return e.lastIndex=t.lastIndex,e}var Ut=m?m.prototype:void 0,Rt=Ut?Ut.valueOf:void 0;function va(t){return Rt?Object(Rt.call(t)):{}}function _a(t,e){var r=e?yt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}var $a="[object Boolean]",Ta="[object Date]",Oa="[object Map]",Aa="[object Number]",ja="[object RegExp]",wa="[object Set]",ma="[object String]",Pa="[object Symbol]",Sa="[object ArrayBuffer]",Ca="[object DataView]",Ea="[object Float32Array]",Ia="[object Float64Array]",xa="[object Int8Array]",La="[object Int16Array]",Da="[object Int32Array]",Ma="[object Uint8Array]",Fa="[object Uint8ClampedArray]",Ua="[object Uint16Array]",Ra="[object Uint32Array]";function Ba(t,e,r){var n=t.constructor;switch(e){case Sa:return yt(t);case $a:case Ta:return new n(+t);case Ca:return ha(t,r);case Ea:case Ia:case xa:case La:case Da:case Ma:case Fa:case Ua:case Ra:return _a(t,r);case Oa:return new n;case Aa:case ma:return new n(t);case ja:return ba(t);case wa:return new n;case Pa:return va(t)}}function Ga(t){return typeof t.constructor=="function"&&!V(t)?or(ce(t)):{}}var Na="[object Map]";function Ha(t){return I(t)&&R(t)==Na}var Bt=U&&U.isMap,Ka=Bt?lt(Bt):Ha;const za=Ka;var qa="[object Set]";function Wa(t){return I(t)&&R(t)==qa}var Gt=U&&U.isSet,Ya=Gt?lt(Gt):Wa;const Ja=Ya;var Xa=1,Za=2,Qa=4,de="[object Arguments]",Va="[object Array]",ka="[object Boolean]",to="[object Date]",eo="[object Error]",ge="[object Function]",ro="[object GeneratorFunction]",no="[object Map]",ao="[object Number]",he="[object Object]",oo="[object RegExp]",io="[object Set]",so="[object String]",co="[object Symbol]",uo="[object WeakMap]",fo="[object ArrayBuffer]",lo="[object DataView]",po="[object Float32Array]",go="[object Float64Array]",ho="[object Int8Array]",yo="[object Int16Array]",bo="[object Int32Array]",vo="[object Uint8Array]",_o="[object Uint8ClampedArray]",$o="[object Uint16Array]",To="[object Uint32Array]",f={};f[de]=f[Va]=f[fo]=f[lo]=f[ka]=f[to]=f[po]=f[go]=f[ho]=f[yo]=f[bo]=f[no]=f[ao]=f[he]=f[oo]=f[io]=f[so]=f[co]=f[vo]=f[_o]=f[$o]=f[To]=!0;f[eo]=f[ge]=f[uo]=!1;function J(t,e,r,n,o,a){var s,c=e&Xa,u=e&Za,i=e&Qa;if(r&&(s=o?r(t,n,o,a):r(t)),s!==void 0)return s;if(!W(t))return t;var v=F(t);if(v){if(s=da(t),!c)return ir(t,s)}else{var g=R(t),h=g==ge||g==ro;if(H(t))return Wn(t,c);if(g==he||g==de||h&&!o){if(s=u||h?{}:Ga(t),!c)return u?ta(t,zn(s,t)):Qn(t,Kn(s,t))}else{if(!f[g])return o?t:{};s=Ba(t,g,c)}}a||(a=new A);var _=a.get(t);if(_)return _;a.set(t,s),Ja(t)?t.forEach(function(l){s.add(J(l,e,r,l,t,a))}):za(t)&&t.forEach(function(l,p){s.set(p,J(l,e,r,p,t,a))});var y=i?u?ea:ot:u?gt:dt,b=v?void 0:y(t);return cr(b||t,function(l,p){b&&(p=l,l=t[p]),Vt(s,p,J(l,e,r,p,t,a))}),s}var Oo=1,Ao=4;function G(t){return J(t,Oo|Ao)}var jo="__lodash_hash_undefined__";function wo(t){return this.__data__.set(t,jo),this}function mo(t){return this.__data__.has(t)}function Z(t){var e=-1,r=t==null?0:t.length;for(this.__data__=new M;++e<r;)this.add(t[e])}Z.prototype.add=Z.prototype.push=wo;Z.prototype.has=mo;function Po(t,e){for(var r=-1,n=t==null?0:t.length;++r<n;)if(e(t[r],r,t))return!0;return!1}function So(t,e){return t.has(e)}var Co=1,Eo=2;function ye(t,e,r,n,o,a){var s=r&Co,c=t.length,u=e.length;if(c!=u&&!(s&&u>c))return!1;var i=a.get(t),v=a.get(e);if(i&&v)return i==e&&v==t;var g=-1,h=!0,_=r&Eo?new Z:void 0;for(a.set(t,e),a.set(e,t);++g<c;){var y=t[g],b=e[g];if(n)var l=s?n(b,y,g,e,t,a):n(y,b,g,t,e,a);if(l!==void 0){if(l)continue;h=!1;break}if(_){if(!Po(e,function(p,$){if(!So(_,$)&&(y===p||o(y,p,r,n,a)))return _.push($)})){h=!1;break}}else if(!(y===b||o(y,b,r,n,a))){h=!1;break}}return a.delete(t),a.delete(e),h}function Io(t){var e=-1,r=Array(t.size);return t.forEach(function(n,o){r[++e]=[o,n]}),r}function xo(t){var e=-1,r=Array(t.size);return t.forEach(function(n){r[++e]=n}),r}var Lo=1,Do=2,Mo="[object Boolean]",Fo="[object Date]",Uo="[object Error]",Ro="[object Map]",Bo="[object Number]",Go="[object RegExp]",No="[object Set]",Ho="[object String]",Ko="[object Symbol]",zo="[object ArrayBuffer]",qo="[object DataView]",Nt=m?m.prototype:void 0,nt=Nt?Nt.valueOf:void 0;function Wo(t,e,r,n,o,a,s){switch(r){case qo:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case zo:return!(t.byteLength!=e.byteLength||!a(new X(t),new X(e)));case Mo:case Fo:case Bo:return ut(+t,+e);case Uo:return t.name==e.name&&t.message==e.message;case Go:case Ho:return t==e+"";case Ro:var c=Io;case No:var u=n&Lo;if(c||(c=xo),t.size!=e.size&&!u)return!1;var i=s.get(t);if(i)return i==e;n|=Do,s.set(t,e);var v=ye(c(t),c(e),n,o,a,s);return s.delete(t),v;case Ko:if(nt)return nt.call(t)==nt.call(e)}return!1}var Yo=1,Jo=Object.prototype,Xo=Jo.hasOwnProperty;function Zo(t,e,r,n,o,a){var s=r&Yo,c=ot(t),u=c.length,i=ot(e),v=i.length;if(u!=v&&!s)return!1;for(var g=u;g--;){var h=c[g];if(!(s?h in e:Xo.call(e,h)))return!1}var _=a.get(t),y=a.get(e);if(_&&y)return _==e&&y==t;var b=!0;a.set(t,e),a.set(e,t);for(var l=s;++g<u;){h=c[g];var p=t[h],$=e[h];if(n)var O=s?n($,p,h,e,t,a):n(p,$,h,t,e,a);if(!(O===void 0?p===$||o(p,$,r,n,a):O)){b=!1;break}l||(l=h=="constructor")}if(b&&!l){var S=t.constructor,C=e.constructor;S!=C&&"constructor"in t&&"constructor"in e&&!(typeof S=="function"&&S instanceof S&&typeof C=="function"&&C instanceof C)&&(b=!1)}return a.delete(t),a.delete(e),b}var Qo=1,Ht="[object Arguments]",Kt="[object Array]",Y="[object Object]",Vo=Object.prototype,zt=Vo.hasOwnProperty;function ko(t,e,r,n,o,a){var s=F(t),c=F(e),u=s?Kt:R(t),i=c?Kt:R(e);u=u==Ht?Y:u,i=i==Ht?Y:i;var v=u==Y,g=i==Y,h=u==i;if(h&&H(t)){if(!H(e))return!1;s=!0,v=!1}if(h&&!v)return a||(a=new A),s||pt(t)?ye(t,e,r,n,o,a):Wo(t,e,u,r,n,o,a);if(!(r&Qo)){var _=v&&zt.call(t,"__wrapped__"),y=g&&zt.call(e,"__wrapped__");if(_||y){var b=_?t.value():t,l=y?e.value():e;return a||(a=new A),o(b,l,r,n,a)}}return h?(a||(a=new A),Zo(t,e,r,n,o,a)):!1}function be(t,e,r,n,o){return t===e?!0:t==null||e==null||!I(t)&&!I(e)?t!==t&&e!==e:ko(t,e,r,n,be,o)}var ti="[object Map]",ei="[object Set]",ri=Object.prototype,ni=ri.hasOwnProperty;function ai(t){if(t==null)return!0;if(ft(t)&&(F(t)||typeof t=="string"||typeof t.splice=="function"||H(t)||pt(t)||ee(t)))return!t.length;var e=R(t);if(e==ti||e==ei)return!t.size;if(V(t))return!ie(t).length;for(var r in t)if(ni.call(t,r))return!1;return!0}function qt(t,e){return be(t,e)}var oi=Object.defineProperty,ii=Object.defineProperties,si=Object.getOwnPropertyDescriptors,Wt=Object.getOwnPropertySymbols,ci=Object.prototype.hasOwnProperty,ui=Object.prototype.propertyIsEnumerable,Yt=(t,e,r)=>e in t?oi(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,fi=(t,e)=>{for(var r in e||(e={}))ci.call(e,r)&&Yt(t,r,e[r]);if(Wt)for(var r of Wt(e))ui.call(e,r)&&Yt(t,r,e[r]);return t},li=(t,e)=>ii(t,si(e));function pi(t){return(t.match(/[a-zA-Z0-9]+/g)||[]).map(e=>`${e.charAt(0).toUpperCase()}${e.slice(1)}`).join("")}var P=(t,e)=>{const r={chartData:{type:Object,required:!0},options:{type:Object,required:!1},chartId:{default:t,type:String},width:{default:400,type:Number},height:{default:400,type:Number},cssClasses:{type:String,default:""},styles:{type:Object},plugins:{type:Array,default:()=>[]},onLabelsUpdate:{type:Function},onChartUpdate:{type:Function},onChartDestroy:{type:Function},onChartRender:{type:Function}},n=pi(t);return Oe({name:n,props:r,emits:{"labels:update":()=>!0,"chart:update":o=>!0,"chart:destroy":()=>!0,"chart:render":o=>!0},setup(o,{emit:a,expose:s}){const c=Ae(null),u=`${o.chartId}`;let i=je(null);vt(()=>o.chartData,v,{deep:!0}),vt(()=>o.options,l=>{i.value&&l&&(i.value.options=G(l),y())},{deep:!0});function v(l){if(i.value){let p=i.value;qt(l.labels,i.value.data.labels)||(p.data.labels=l.labels,h()),qt(l.datasets,i.value.data.datasets)||l.datasets.forEach(($,O)=>{var S,C;if(ai($))p.data.datasets=[];else{const ve=G(p.data),_e=Object.keys((C=(S=ve.datasets)==null?void 0:S[O])!=null?C:{}),$e=Object.keys($);_e.filter(w=>w!=="_meta"&&$e.indexOf(w)===-1).forEach(w=>{p.data.datasets[O]&&delete p.data.datasets[O][w]});for(const w in $){const bt=G($[w]);p.data.datasets[O]||(p.data.datasets[O]={}),$.hasOwnProperty(w)&&bt!=null&&p&&(p.data.datasets[O][w]=bt)}}}),y()}else i.value&&b(),g()}function g(){c.value?(i.value=new Te(c.value,{data:G(o.chartData),type:e,options:G(o.options),plugins:o.plugins}),_()):console.error(`Error on component ${n}, canvas cannot be rendered. Check if the render appends server-side`)}function h(){a("labels:update"),o.onLabelsUpdate&&o.onLabelsUpdate()}function _(){i.value&&(a("chart:render",i.value),o.onChartRender&&o.onChartRender(i.value))}function y(){i.value&&(i.value.update(),a("chart:update",i.value),o.onChartUpdate&&o.onChartUpdate(i.value))}function b(){i.value&&i.value.destroy(),a("chart:destroy"),o.onChartDestroy&&o.onChartDestroy()}return we(g),me(()=>{i.value&&i.value.destroy()}),s({canvasRef:c,renderChart:g,chartInstance:i,canvasId:u,update:y}),()=>_t("div",{style:li(fi({maxWidth:"100%"},o.styles),{position:"relative"}),class:o.cssClasses},[_t("canvas",{style:{maxWidth:"100%",maxHeight:"100%"},id:u,width:o.width,height:o.height,ref:c})])}})};P("bar-chart","bar");P("doughnut-chart","doughnut");var bi=P("line-chart","line");P("pie-chart","pie");P("polar-chart","polarArea");P("radar-chart","radar");P("bubble-chart","bubble");P("scatter-chart","scatter");export{bi as L};
