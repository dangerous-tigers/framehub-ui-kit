import{j as o}from"./jsx-runtime-u17CrQMm.js";import{c as n}from"./clsx-B-dksMZM.js";const d="_root_18iea_1",c={root:d};function s({className:e,...a}){return o.jsx("div",{"data-slot":"skeleton",className:n(c.root,e),...a})}s.__docgenInfo={description:"",methods:[],displayName:"Skeleton",props:{className:{required:!1,tsType:{name:"string"},description:""}}};const m={title:"UI/Skeleton",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{}},r={args:{},render:e=>o.jsx(s,{...e,style:{height:300,width:300}})},t={render:e=>o.jsx(s,{...e,style:{borderRadius:"50%",height:300,width:300}})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => <Skeleton {...args} style={{
    height: 300,
    width: 300
  }} />
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <Skeleton {...args} style={{
    borderRadius: "50%",
    height: 300,
    width: 300
  }} />
}`,...t.parameters?.docs?.source}}};const p=["DefaultSkeloton","RoundedSkeleton"];export{r as DefaultSkeloton,t as RoundedSkeleton,p as __namedExportsOrder,m as default};
