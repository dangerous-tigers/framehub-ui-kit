import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as l}from"./clsx-B-dksMZM.js";const p="_root_11843_1",c={root:p};function o({orientation:r="horizontal",decorative:n,className:s,...i}){return e.jsx("div",{role:n?"presentation":"separator","aria-orientation":n?void 0:r,"data-orientation":r,className:l(c.root,s),...i})}o.__docgenInfo={description:"",methods:[],displayName:"Separator",props:{orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},decorative:{required:!1,tsType:{name:"boolean"},description:""}}};const u={title:"UI/Separator",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{}},a={args:{orientation:"vertical"},render:r=>e.jsx("div",{style:{height:"300px"},children:e.jsx(o,{...r})})},t={args:{orientation:"horizontal"},render:r=>e.jsx("div",{style:{width:"300px"},children:e.jsx(o,{...r})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: "vertical"
  },
  render: args => <div style={{
    height: "300px"
  }}>
      <Separator {...args} />
    </div>
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: "horizontal"
  },
  render: args => <div style={{
    width: "300px"
  }}>
      <Separator {...args} />
    </div>
}`,...t.parameters?.docs?.source}}};const g=["VerticalSeparator","HorizontalSeparator"];export{t as HorizontalSeparator,a as VerticalSeparator,g as __namedExportsOrder,u as default};
