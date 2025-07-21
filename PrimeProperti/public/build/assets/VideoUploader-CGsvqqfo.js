import{j as o,r as m,c as S}from"./app-B8KKp99w.js";import{R as O}from"./quill.snow-Br08MWFX.js";import{G as N}from"./index-HDiv5rXN.js";function Ue({value:e,onChange:t}){const r={toolbar:[[{font:[]},{size:[]}],[{header:[1,2,3,!1]}],["bold","italic","underline","strike"],[{color:[]},{background:[]}],[{script:"sub"},{script:"super"}],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],[{align:[]},{direction:"rtl"}],["link","image","video"],["blockquote","code-block"],["clean"]]};return o.jsx("div",{className:"bg-white border border-gray-300 rounded-md overflow-hidden",children:o.jsx(O,{theme:"snow",value:e,onChange:t,modules:r})})}function _(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"20 6 9 17 4 12"},child:[]}]})(e)}function H(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"},child:[]}]})(e)}function G(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"3 6 5 6 21 6"},child:[]},{tag:"path",attr:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"},child:[]},{tag:"line",attr:{x1:"10",y1:"11",x2:"10",y2:"17"},child:[]},{tag:"line",attr:{x1:"14",y1:"11",x2:"14",y2:"17"},child:[]}]})(e)}function Q(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"},child:[]},{tag:"polyline",attr:{points:"17 8 12 3 7 8"},child:[]},{tag:"line",attr:{x1:"12",y1:"3",x2:"12",y2:"15"},child:[]}]})(e)}function q(e){return N({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"},child:[]}]})(e)}let J={data:""},K=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||J,X=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Y=/\/\*[^]*?\*\/|  +/g,A=/\n+/g,w=(e,t)=>{let r="",s="",n="";for(let a in e){let i=e[a];a[0]=="@"?a[1]=="i"?r=a+" "+i+";":s+=a[1]=="f"?w(i,a):a+"{"+w(i,a[1]=="k"?"":t)+"}":typeof i=="object"?s+=w(i,t?t.replace(/([^,])+/g,d=>a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,d):d?d+" "+c:c)):a):i!=null&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),n+=w.p?w.p(a,i):a+":"+i+";")}return r+(t&&n?t+"{"+n+"}":n)+s},g={},D=e=>{if(typeof e=="object"){let t="";for(let r in e)t+=r+D(e[r]);return t}return e},Z=(e,t,r,s,n)=>{let a=D(e),i=g[a]||(g[a]=(c=>{let u=0,h=11;for(;u<c.length;)h=101*h+c.charCodeAt(u++)>>>0;return"go"+h})(a));if(!g[i]){let c=a!==e?e:(u=>{let h,b,v=[{}];for(;h=X.exec(u.replace(Y,""));)h[4]?v.shift():h[3]?(b=h[3].replace(A," ").trim(),v.unshift(v[0][b]=v[0][b]||{})):v[0][h[1]]=h[2].replace(A," ").trim();return v[0]})(e);g[i]=w(n?{["@keyframes "+i]:c}:c,r?"":"."+i)}let d=r&&g.g?g.g:null;return r&&(g.g=g[i]),((c,u,h,b)=>{b?u.data=u.data.replace(b,c):u.data.indexOf(c)===-1&&(u.data=h?c+u.data:u.data+c)})(g[i],t,s,d),i},ee=(e,t,r)=>e.reduce((s,n,a)=>{let i=t[a];if(i&&i.call){let d=i(r),c=d&&d.props&&d.props.className||/^go/.test(d)&&d;i=c?"."+c:d&&typeof d=="object"?d.props?"":w(d,""):d===!1?"":d}return s+n+(i??"")},"");function C(e){let t=this||{},r=e.call?e(t.p):e;return Z(r.unshift?r.raw?ee(r,[].slice.call(arguments,1),t.p):r.reduce((s,n)=>Object.assign(s,n&&n.call?n(t.p):n),{}):r,K(t.target),t.g,t.o,t.k)}let B,V,E;C.bind({g:1});let y=C.bind({k:1});function te(e,t,r,s){w.p=t,B=e,V=r,E=s}function j(e,t){let r=this||{};return function(){let s=arguments;function n(a,i){let d=Object.assign({},a),c=d.className||n.className;r.p=Object.assign({theme:V&&V()},d),r.o=/ *go\d+/.test(c),d.className=C.apply(r,s)+(c?" "+c:"");let u=e;return e[0]&&(u=d.as||e,delete d.as),E&&u[0]&&E(d),B(u,d)}return n}}var re=e=>typeof e=="function",L=(e,t)=>re(e)?e(t):e,ae=(()=>{let e=0;return()=>(++e).toString()})(),oe=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),se=20,P=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,se)};case 1:return{...e,toasts:e.toasts.map(a=>a.id===t.toast.id?{...a,...t.toast}:a)};case 2:let{toast:r}=t;return P(e,{type:e.toasts.find(a=>a.id===r.id)?1:0,toast:r});case 3:let{toastId:s}=t;return{...e,toasts:e.toasts.map(a=>a.id===s||s===void 0?{...a,dismissed:!0,visible:!1}:a)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(a=>a.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let n=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+n}))}}},ie=[],M={toasts:[],pausedAt:void 0},U=e=>{M=P(M,e),ie.forEach(t=>{t(M)})},ne=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(r==null?void 0:r.id)||ae()}),$=e=>(t,r)=>{let s=ne(t,e,r);return U({type:2,toast:s}),s.id},p=(e,t)=>$("blank")(e,t);p.error=$("error");p.success=$("success");p.loading=$("loading");p.custom=$("custom");p.dismiss=e=>{U({type:3,toastId:e})};p.remove=e=>U({type:4,toastId:e});p.promise=(e,t,r)=>{let s=p.loading(t.loading,{...r,...r==null?void 0:r.loading});return typeof e=="function"&&(e=e()),e.then(n=>{let a=t.success?L(t.success,n):void 0;return a?p.success(a,{id:s,...r,...r==null?void 0:r.success}):p.dismiss(s),n}).catch(n=>{let a=t.error?L(t.error,n):void 0;a?p.error(a,{id:s,...r,...r==null?void 0:r.error}):p.dismiss(s)}),e};var le=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,de=y`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ce=y`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,pe=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${le} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${de} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${ce} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,ue=y`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,me=j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${ue} 1s linear infinite;
`,fe=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,he=y`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,xe=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${fe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${he} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,ge=j("div")`
  position: absolute;
`,ye=j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,be=y`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ve=j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${be} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,we=({toast:e})=>{let{icon:t,type:r,iconTheme:s}=e;return t!==void 0?typeof t=="string"?m.createElement(ve,null,t):t:r==="blank"?null:m.createElement(ye,null,m.createElement(me,{...s}),r!=="loading"&&m.createElement(ge,null,r==="error"?m.createElement(pe,{...s}):m.createElement(xe,{...s})))},je=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ke=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,Ne="0%{opacity:0;} 100%{opacity:1;}",$e="0%{opacity:1;} 100%{opacity:0;}",Fe=j("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Ce=j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Me=(e,t)=>{let r=e.includes("top")?1:-1,[s,n]=oe()?[Ne,$e]:[je(r),ke(r)];return{animation:t?`${y(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${y(n)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}};m.memo(({toast:e,position:t,style:r,children:s})=>{let n=e.height?Me(e.position||t||"top-center",e.visible):{opacity:0},a=m.createElement(we,{toast:e}),i=m.createElement(Ce,{...e.ariaProps},L(e.message,e));return m.createElement(Fe,{className:e.className,style:{...n,...r,...e.style}},typeof s=="function"?s({icon:a,message:i}):m.createElement(m.Fragment,null,a,i))});te(m.createElement);C`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;function ze({videos:e,setVideos:t}){const[r,s]=m.useState([]),[n,a]=m.useState(0),[i,d]=m.useState(!1),[c,u]=m.useState(null),h=l=>{if(l.target.files){const f=Array.from(l.target.files);s(x=>[...x,...f])}},b=l=>{s(f=>f.filter((x,k)=>k!==l))},v=async l=>{if(l.preventDefault(),d(!0),a(0),r.length===0){p.error("Please select at least one video file"),d(!1);return}try{for(const f of r){const x=new FormData;x.append("video",f);const k=await S.post(route("video.upload"),x,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:F=>{const R=Math.round(F.loaded*100/(F.total||1));a(R)}});t(F=>[...F,k.data])}s([]),p.success("Videos uploaded successfully!")}catch{p.error("Failed to upload video(s)")}finally{d(!1),a(0)}},I=async l=>{if(confirm("Are you sure?"))try{await S.delete(route("video.delete",{filename:l})),t(f=>f.filter(x=>x.name!==l)),p.success("Video deleted")}catch{p.error("Failed to delete video")}},T=async l=>{try{const f=`${window.location.origin}/storage/videos/${l}`;await navigator.clipboard.writeText(f),u(l),setTimeout(()=>u(null),2e3),p.success("Video URL copied!")}catch{p.error("Failed to copy video URL")}},z=l=>{const x=["Bytes","KB","MB","GB"],k=Math.floor(Math.log(l)/Math.log(1024));return(l/Math.pow(1024,k)).toFixed(2)+" "+x[k]},W=l=>{const f=Math.floor(l/60),x=Math.floor(l%60);return`${f}:${x<10?"0":""}${x}`};return o.jsxs("div",{className:"bg-white rounded-lg shadow p-6 mb-8",children:[o.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Video Upload"}),o.jsxs("form",{onSubmit:v,className:"space-y-4",children:[o.jsxs("div",{className:"border-2 border-dashed p-6 text-center",children:[o.jsx(Q,{className:"w-10 h-10 text-gray-400 mx-auto mb-3"}),o.jsx("p",{className:"text-sm text-gray-500 mb-2",children:"Drag or select multiple video files"}),o.jsxs("label",{className:"cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium",children:["Select Videos",o.jsx("input",{type:"file",accept:"video/*",multiple:!0,onChange:h,className:"hidden"})]}),o.jsx("p",{className:"text-xs text-gray-500 mt-2",children:"MP4, WebM. Max 100MB"})]}),r.length>0&&o.jsxs("div",{children:[o.jsx("p",{className:"font-semibold mb-2",children:"Selected Videos:"}),r.map((l,f)=>o.jsxs("div",{className:"flex justify-between items-center bg-gray-100 p-2 rounded mb-2",children:[o.jsxs("div",{children:[o.jsx("p",{className:"text-sm font-medium truncate",children:l.name}),o.jsx("p",{className:"text-xs text-gray-500",children:z(l.size)})]}),o.jsx("button",{onClick:()=>b(f),type:"button",className:"text-red-500 hover:text-red-700",children:o.jsx(q,{})})]},f))]}),i&&o.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2.5",children:o.jsx("div",{className:"bg-blue-600 h-2.5 rounded-full",style:{width:`${n}%`}})}),o.jsx("button",{type:"submit",disabled:i||r.length===0,className:`w-full py-2 px-4 rounded-md text-white font-medium ${i?"bg-blue-400":"bg-blue-600 hover:bg-blue-700"}`,children:i?`Uploading... ${n}%`:`Upload ${r.length} Video(s)`})]}),o.jsxs("div",{className:"mt-8",children:[o.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Uploaded Videos"}),e.length===0?o.jsx("p",{className:"text-gray-500",children:"No videos uploaded yet."}):o.jsx("div",{className:"space-y-4",children:e.map(l=>o.jsxs("div",{className:"border rounded overflow-hidden",children:[o.jsx("div",{className:"relative pt-[56.25%] bg-black",children:o.jsx("video",{controls:!0,className:"absolute inset-0 w-full h-full",children:o.jsx("source",{src:l.url,type:"video/mp4"})})}),o.jsxs("div",{className:"p-4 bg-white flex justify-between items-center",children:[o.jsxs("div",{children:[o.jsx("p",{className:"font-medium text-sm truncate",children:l.name}),o.jsxs("p",{className:"text-xs text-gray-500",children:[z(l.size)," • ",W(l.duration)]})]}),o.jsxs("div",{className:"flex gap-2",children:[o.jsx("button",{onClick:()=>T(l.name),title:"Copy URL",children:c===l.name?o.jsx(_,{className:"text-green-500"}):o.jsx(H,{})}),o.jsx("button",{onClick:()=>I(l.name),title:"Delete",className:"text-red-500 hover:text-red-700",children:o.jsx(G,{})})]})]})]},l.name))})]})]})}export{Ue as Q,ze as V};
