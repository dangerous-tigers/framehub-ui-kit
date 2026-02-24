import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as x}from"./iframe-DI9DgLHm.js";import{c as T}from"./clsx-B-dksMZM.js";import{M as u}from"./HomeOutline-I1_eo1q6.js";import"./preload-helper-PPVm8Dsz.js";const q="_btn_1f02e_1",I="_disabled_1f02e_20",M="_fullWidth_1f02e_26",S="_primary_1f02e_31",N="_secondary_1f02e_53",R="_outline_1f02e_76",j="_text_1f02e_102",w="_sm_1f02e_124",H="_md_1f02e_130",E="_lg_1f02e_136",W="_active_1f02e_142",t={btn:q,disabled:I,fullWidth:M,primary:S,secondary:N,outline:R,text:j,sm:w,md:H,lg:E,active:W};function P(e,s){const{as:n,variant:l="primary",size:d="md",className:c,disabled:a,children:_,fullWidth:b,isActive:y,...h}=e,p=n||"button",g=T(t.btn,t[l],t[d],{[t.fullWidth]:b,[t.disabled]:a,[t.active]:y},c),v={ref:s,className:g,...p==="button"?{disabled:a}:{"aria-disabled":a},...h};return r.jsx(p,{...v,children:_})}const f=x.forwardRef(P);f.__docgenInfo={description:"",methods:[],displayName:"PolymorphicButton",props:{as:{required:!1,tsType:{name:"E"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'outline' | 'text'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'text'"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},isActive:{required:!1,tsType:{name:"boolean"},description:""}}};const z="_item_xiw1z_1",A={item:z};function m({as:e,label:s,href:n,pathname:l,component:d,isMobile:c,buttonHandler:a}){return r.jsxs(f,{as:e,href:n,isActive:l===n,variant:"text",className:A.item,onClick:a,children:[d," ",c?"":s]},s)}m.__docgenInfo={description:"",methods:[],displayName:"SidebarItem",props:{as:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:""},label:{required:!0,tsType:{name:"string"},description:""},href:{required:!0,tsType:{name:"string"},description:""},pathname:{required:!0,tsType:{name:"string"},description:""},component:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},isMobile:{required:!0,tsType:{name:"boolean"},description:""},buttonHandler:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const U={title:"UI/SidebarItem",component:m,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{}},o={args:{label:"Home",href:"/home",pathname:"/home",component:r.jsx(u,{}),isMobile:!1},render:e=>r.jsx(m,{...e})},i={args:{label:"Home",href:"/home",pathname:"/home",component:r.jsx(u,{}),isMobile:!0},render:e=>r.jsx(m,{...e,isMobile:!0})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Home",
    href: "/home",
    pathname: "/home",
    component: <HomeOutline />,
    isMobile: false
  },
  render: args => <SidebarItem {...args} />
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Home",
    href: "/home",
    pathname: "/home",
    component: <HomeOutline />,
    isMobile: true
  },
  render: args => <SidebarItem {...args} isMobile={true} />
}`,...i.parameters?.docs?.source}}};const $=["DefaultSidebarItem","MobileSidebarItem"];export{o as DefaultSidebarItem,i as MobileSidebarItem,$ as __namedExportsOrder,U as default};
