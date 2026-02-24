import{j as r}from"./jsx-runtime-u17CrQMm.js";import{c as _}from"./clsx-B-dksMZM.js";const p="_root_1g8nl_1",g="_root__xs_1g8nl_4",u="_root__s_1g8nl_8",v="_root__m_1g8nl_12",f="_root__l_1g8nl_16",y="_root__xl_1g8nl_20",I="_root__xxl_1g8nl_24",c={root:p,root__xs:g,root__s:u,root__m:v,root__l:f,root__xl:y,root__xxl:I},S=""+new URL("avatar-placeholder-tymNs9Gt.png",import.meta.url).href;function s({url:e,size:m="m",className:d}){const x=e||S;return r.jsx("img",{className:_(c.root,c[`root__${m}`],d),src:x,alt:"user-avatar"})}s.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{src:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},url:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},size:{required:!1,tsType:{name:"union",raw:'"xs" | "s" | "m" | "l" | "xl" | "xxl"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"s"'},{name:"literal",value:'"m"'},{name:"literal",value:'"l"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"xxl"'}]},description:"",defaultValue:{value:'"m"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const A={title:"UI/Avatar",component:s,argTypes:{size:{control:{type:"select"},options:["xs","s","m","l","xl","xxl"]}}},n={args:{size:"xs"},render:e=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[r.jsx(s,{...e}),"POST LIKE"]})},a={args:{size:"s"},render:e=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[r.jsx(s,{...e}),"MAIN SIZE"]})},t={args:{size:"m"},render:e=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[r.jsx(s,{...e}),"MESSANGER"]})},l={args:{size:"l"},render:e=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[r.jsx(s,{...e}),"ADMNIN"]})},o={args:{size:"xl"},render:e=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[r.jsx(s,{...e}),"PROFILE SETTINGS"]})},i={args:{size:"xxl"},render:e=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[r.jsx(s,{...e}),"PROFILE"]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: "xs"
  },
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }}>
      <Avatar {...args} />
      POST LIKE
    </div>
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: "s"
  },
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }}>
      <Avatar {...args} />
      MAIN SIZE
    </div>
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: "m"
  },
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }}>
      <Avatar {...args} />
      MESSANGER
    </div>
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: "l"
  },
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }}>
      <Avatar {...args} />
      ADMNIN
    </div>
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: "xl"
  },
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }}>
      <Avatar {...args} />
      PROFILE SETTINGS
    </div>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    size: "xxl"
  },
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }}>
      <Avatar {...args} />
      PROFILE
    </div>
}`,...i.parameters?.docs?.source}}};const z=["XS","S","M","L","XL","XXL"];export{l as L,t as M,a as S,o as XL,n as XS,i as XXL,z as __namedExportsOrder,A as default};
