import{X as b,j as I,a9 as L,k as V,o as U,Z as _,aa as R,ab as x,h as E,Y as p}from"./index-a01126e2.js";var K=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],T=function(n){return K.map(function(t){return t.toLowerCase()}).indexOf(n.toLowerCase())!==-1},z=function(n,t,e){Object.keys(t).filter(T).forEach(function(o){var i=t[o];typeof i=="function"&&(o==="onInit"?i(n,e):e.on(o.substring(2),function(a){return i(a,e)}))})},F=function(n,t,e,o){var i=n.modelEvents?n.modelEvents:null,a=Array.isArray(i)?i.join(" "):i;b(o,function(c,d){e&&typeof c=="string"&&c!==d&&c!==e.getContent({format:n.outputFormat})&&e.setContent(c)}),e.on(a||"change input undo redo",function(){t.emit("update:modelValue",e.getContent({format:n.outputFormat}))})},N=function(n,t,e,o,i,a){o.setContent(a()),e.attrs["onUpdate:modelValue"]&&F(t,e,o,i),z(n,e.attrs,o)},D=0,M=function(n){var t=Date.now(),e=Math.floor(Math.random()*1e9);return D++,n+"_"+e+D+String(t)},G=function(n){return n!==null&&n.tagName.toLowerCase()==="textarea"},w=function(n){return typeof n>"u"||n===""?[]:Array.isArray(n)?n:n.split(" ")},k=function(n,t){return w(n).concat(w(t))},H=function(n){return n==null},A=function(){return{listeners:[],scriptId:M("tiny-script"),scriptLoaded:!1}},q=function(){var n=A(),t=function(i,a,c,d){var r=a.createElement("script");r.referrerPolicy="origin",r.type="application/javascript",r.id=i,r.src=c;var s=function(){r.removeEventListener("load",s),d()};r.addEventListener("load",s),a.head&&a.head.appendChild(r)},e=function(i,a,c){n.scriptLoaded?c():(n.listeners.push(c),i.getElementById(n.scriptId)||t(n.scriptId,i,a,function(){n.listeners.forEach(function(d){return d()}),n.scriptLoaded=!0}))},o=function(){n=A()};return{load:e,reinitialize:o}},W=q(),X=function(){return typeof window<"u"?window:global},f=function(){var n=X();return n&&n.tinymce?n.tinymce:null},Y={apiKey:String,cloudChannel:String,id:String,init:Object,initialValue:String,inline:Boolean,modelEvents:[String,Array],plugins:[String,Array],tagName:String,toolbar:[String,Array],modelValue:String,disabled:Boolean,tinymceScriptSrc:String,outputFormat:{type:String,validator:function(n){return n==="html"||n==="text"}}},v=globalThis&&globalThis.__assign||function(){return v=Object.assign||function(n){for(var t,e=1,o=arguments.length;e<o;e++){t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},v.apply(this,arguments)},Z=function(n,t,e,o){return n(o||"div",{id:t,ref:e})},J=function(n,t,e){return n("textarea",{id:t,visibility:"hidden",ref:e})},$=I({props:Y,setup:function(n,t){var e=n.init?v({},n.init):{},o=L(n),i=o.disabled,a=o.modelValue,c=o.tagName,d=V(null),r=null,s=n.id||M("tiny-vue"),C=n.init&&n.init.inline||n.inline,S=!!t.attrs["onUpdate:modelValue"],h=!0,O=n.initialValue?n.initialValue:"",y="",P=function(u){return S?function(){return a!=null&&a.value?a.value:""}:function(){return u?O:y}},g=function(){var u=P(h),l=v(v({},e),{readonly:n.disabled,selector:"#"+s,plugins:k(e.plugins,n.plugins),toolbar:n.toolbar||e.toolbar,inline:C,setup:function(m){r=m,m.on("init",function(B){return N(B,n,t,m,a,u)}),typeof e.setup=="function"&&e.setup(m)}});G(d.value)&&(d.value.style.visibility=""),f().init(l),h=!1};b(i,function(u){var l;r!==null&&(typeof((l=r.mode)===null||l===void 0?void 0:l.set)=="function"?r.mode.set(u?"readonly":"design"):r.setMode(u?"readonly":"design"))}),b(c,function(u){var l;S||(y=r.getContent()),(l=f())===null||l===void 0||l.remove(r),p(function(){return g()})}),U(function(){if(f()!==null)g();else if(d.value&&d.value.ownerDocument){var u=n.cloudChannel?n.cloudChannel:"5",l=n.apiKey?n.apiKey:"no-api-key",m=H(n.tinymceScriptSrc)?"https://cdn.tiny.cloud/1/"+l+"/tinymce/"+u+"/tinymce.min.js":n.tinymceScriptSrc;W.load(d.value.ownerDocument,m,g)}}),_(function(){f()!==null&&f().remove(r)}),C||(R(function(){h||g()}),x(function(){var u;S||(y=r.getContent()),(u=f())===null||u===void 0||u.remove(r)}));var j=function(u){var l;y=r.getContent(),(l=f())===null||l===void 0||l.remove(r),e=v(v({},e),u),p(function(){return g()})};return t.expose({rerender:j}),function(){return C?Z(E,s,d,n.tagName):J(E,s,d)}}});export{$ as E};