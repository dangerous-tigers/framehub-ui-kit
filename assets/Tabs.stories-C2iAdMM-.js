import{j as n}from"./jsx-runtime-u17CrQMm.js";import{c as P}from"./clsx-B-dksMZM.js";import{r as d}from"./iframe-DI9DgLHm.js";import{P as h,c as y,a as L}from"./index-HO5rLgvm.js";import{R as F,I as B,c as R}from"./index-CxIi1JC9.js";import{P as G}from"./index-Cs1DAl4F.js";import{u as $}from"./index-DDi9tdwT.js";import{u as K}from"./index-B3mVtBAn.js";import{u as z}from"./index-CnVpZzZk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CwyOuwL6.js";import"./index-DVYZujwu.js";import"./index-BNJ_6G53.js";import"./index-nzF18tQy.js";var T="Tabs",[O]=L(T,[R]),_=R(),[W,N]=O(T),j=d.forwardRef((t,r)=>{const{__scopeTabs:s,value:a,onValueChange:e,defaultValue:l,orientation:o="horizontal",dir:u,activationMode:b="automatic",...v}=t,c=$(u),[i,m]=K({prop:a,onChange:e,defaultProp:l??"",caller:T});return n.jsx(W,{scope:s,baseId:z(),value:i,onValueChange:m,orientation:o,dir:c,activationMode:b,children:n.jsx(h.div,{dir:c,"data-orientation":o,...v,ref:r})})});j.displayName=T;var C="TabsList",k=d.forwardRef((t,r)=>{const{__scopeTabs:s,loop:a=!0,...e}=t,l=N(C,s),o=_(s);return n.jsx(F,{asChild:!0,...o,orientation:l.orientation,dir:l.dir,loop:a,children:n.jsx(h.div,{role:"tablist","aria-orientation":l.orientation,...e,ref:r})})});k.displayName=C;var M="TabsTrigger",V=d.forwardRef((t,r)=>{const{__scopeTabs:s,value:a,disabled:e=!1,...l}=t,o=N(M,s),u=_(s),b=w(o.baseId,a),v=q(o.baseId,a),c=a===o.value;return n.jsx(B,{asChild:!0,...u,focusable:!e,active:c,children:n.jsx(h.button,{type:"button",role:"tab","aria-selected":c,"aria-controls":v,"data-state":c?"active":"inactive","data-disabled":e?"":void 0,disabled:e,id:b,...l,ref:r,onMouseDown:y(t.onMouseDown,i=>{!e&&i.button===0&&i.ctrlKey===!1?o.onValueChange(a):i.preventDefault()}),onKeyDown:y(t.onKeyDown,i=>{[" ","Enter"].includes(i.key)&&o.onValueChange(a)}),onFocus:y(t.onFocus,()=>{const i=o.activationMode!=="manual";!c&&!e&&i&&o.onValueChange(a)})})})});V.displayName=M;var D="TabsContent",I=d.forwardRef((t,r)=>{const{__scopeTabs:s,value:a,forceMount:e,children:l,...o}=t,u=N(D,s),b=w(u.baseId,a),v=q(u.baseId,a),c=a===u.value,i=d.useRef(c);return d.useEffect(()=>{const m=requestAnimationFrame(()=>i.current=!1);return()=>cancelAnimationFrame(m)},[]),n.jsx(G,{present:e||c,children:({present:m})=>n.jsx(h.div,{"data-state":c?"active":"inactive","data-orientation":u.orientation,role:"tabpanel","aria-labelledby":b,hidden:!m,id:v,tabIndex:0,...o,ref:r,style:{...t.style,animationDuration:i.current?"0s":void 0},children:m&&l})})});I.displayName=D;function w(t,r){return`${t}-trigger-${r}`}function q(t,r){return`${t}-content-${r}`}var H=j,Q=k,U=V,J=I;const X="_triggerList_1bbeb_1",Y="_trigger_1bbeb_1",Z="_content_1bbeb_87",x={triggerList:X,trigger:Y,content:Z},ee=t=>{const[r,s]=d.useState(!1);return d.useEffect(()=>{const a=window.matchMedia(t);s(a.matches);const e=()=>s(a.matches);return a.addEventListener("change",e),()=>a.removeEventListener("change",e)},[t]),r},E=({defaultValue:t,tabs:r,handleTabChange:s})=>{const a=ee("(max-width: 768px)");return n.jsxs(H,{orientation:a?"vertical":"horizontal",defaultValue:t,children:[n.jsx(Q,{className:x.triggerList,children:r.map(e=>n.jsx(U,{value:e.value,className:x.trigger,disabled:e.disabled,onClick:()=>s(e.value),"data-direction":!0,children:n.jsx("span",{children:e.label})},e.value))}),r.map(e=>n.jsx(J,{value:e.value,className:x.content,children:e.content},e.value))]})};E.__docgenInfo={description:"",methods:[],displayName:"TabsClient",props:{defaultValue:{required:!0,tsType:{name:"string"},description:""},handleTabChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(tabValue: string) => void",signature:{arguments:[{type:{name:"string"},name:"tabValue"}],return:{name:"void"}}},description:""},tabs:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"content",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:`{
  value: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}[]`},description:""}}};const A=t=>{const{className:r,defaultValue:s,tabs:a,handleTabChange:e}=t;return n.jsx("div",{className:P(r),children:n.jsx(E,{handleTabChange:e,tabs:a,defaultValue:s||a[0].value})})};A.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{className:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},handleTabChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(tabValue: string) => void",signature:{arguments:[{type:{name:"string"},name:"tabValue"}],return:{name:"void"}}},description:""},tabs:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"content",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:`{
  value: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}[]`},description:""}}};const ge={title:"UI/Tabs",component:A,parameters:{layout:"centered"}},S=[{value:"movies",label:"Movies",content:n.jsx("div",{children:"Содержимое Movies"})},{value:"books",label:"Books",content:n.jsx("div",{children:"Содержимое Books"})},{value:"music",label:"Music",content:n.jsx("div",{children:"Содержимое Music"}),disabled:!0}],ae=[{value:"movies",label:"Movies",content:n.jsx("div",{children:"Содержимое Movies"})},{value:"books",label:"Books",content:n.jsx("div",{children:"Содержимое Books"})},{value:"music",label:"Music",content:n.jsx("div",{children:"Содержимое Music"})}],p={args:{defaultValue:"movies",tabs:S}},g={args:{defaultValue:"books",tabs:S}},f={args:{defaultValue:"books",tabs:ae}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: "movies",
    tabs: tabsData
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: "books",
    tabs: tabsData
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: "books",
    tabs: tabsDataNotDisabled
  }
}`,...f.parameters?.docs?.source}}};const fe=["Default","WithDisabledTab","NotDisabledTab"];export{p as Default,f as NotDisabledTab,g as WithDisabledTab,fe as __namedExportsOrder,ge as default};
