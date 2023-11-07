import{j as h}from"./jsx-runtime-ffb262ed.js";import{r as a,R as b}from"./index-76fb7be0.js";import{C as y,P as I}from"./chart-02fd948e.js";import{s as v,J as K}from"./styled-components.browser.esm-7e430b1e.js";const R="label";function g(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function O(e,t){const s=e.options;s&&t&&Object.assign(s,t)}function w(e,t){e.labels=t}function E(e,t){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:R;const o=[];e.datasets=t.map(r=>{const c=e.datasets.find(d=>d[s]===r[s]);return!c||!r.data||o.includes(c)?{...r}:(o.push(c),Object.assign(c,r),c)})}function P(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:R;const s={labels:[],datasets:[]};return w(s,e.labels),E(s,e.datasets,t),s}function N(e,t){const{height:s=150,width:o=300,redraw:r=!1,datasetIdKey:c,type:d,data:u,options:i,plugins:_=[],fallbackContent:j,updateMode:m,...x}=e,l=a.useRef(null),n=a.useRef(),f=()=>{l.current&&(n.current=new y(l.current,{type:d,data:P(u,c),options:i&&{...i},plugins:_}),g(t,n.current))},p=()=>{g(t,null),n.current&&(n.current.destroy(),n.current=null)};return a.useEffect(()=>{!r&&n.current&&i&&O(n.current,i)},[r,i]),a.useEffect(()=>{!r&&n.current&&w(n.current.config.data,u.labels)},[r,u.labels]),a.useEffect(()=>{!r&&n.current&&u.datasets&&E(n.current.config.data,u.datasets,c)},[r,u.datasets]),a.useEffect(()=>{n.current&&(r?(p(),setTimeout(f)):n.current.update(m))},[r,i,u.labels,u.datasets,m]),a.useEffect(()=>{n.current&&(p(),setTimeout(f))},[d]),a.useEffect(()=>(f(),()=>p()),[]),b.createElement("canvas",Object.assign({ref:l,role:"img",height:s,width:o},x),j)}const T=a.forwardRef(N);function W(e,t){return y.register(t),a.forwardRef((s,o)=>b.createElement(T,Object.assign({},s,{ref:o,type:e})))}const k=W("pie",I),q=v.div.withConfig({displayName:"ResultChartstyles__Wrapper",componentId:"sc-e7epfi-0"})(["display:flex;justify-content:center;align-items:center;width:90%;height:90%;max-width:250px;max-height:250px;"]),C=e=>{const{correctCount:t,incorrectCount:s,...o}=e,{color:r}=K();return h.jsx(q,{role:"graphics-document",...o,children:h.jsx(k,{data:{labels:["정답","오답"],datasets:[{label:"퀴즈 결과",data:[t,s],backgroundColor:[r.success[400],r.error[400]],borderColor:[r.success[400],r.error[400]],borderWidth:1}]}})})};try{C.displayName="ResultChart",C.__docgenInfo={description:"",displayName:"ResultChart",props:{correctCount:{defaultValue:null,description:"",name:"correctCount",required:!0,type:{name:"number"}},incorrectCount:{defaultValue:null,description:"",name:"incorrectCount",required:!0,type:{name:"number"}}}}}catch{}export{C as R};
//# sourceMappingURL=ResultChart-f831aac1.js.map
