import{j as n}from"./jsx-runtime-u17CrQMm.js";import{R as s}from"./RadioGroup-F9tKyKQs.js";import"./iframe-BerIK4V3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BvVtafns.js";import"./index-CwhXJyow.js";import"./index-CG91jSbu.js";import"./index-COiOmbbm.js";import"./index-B0Ke_CAe.js";import"./index-D8ymNV9c.js";import"./index-CSvOQBku.js";import"./index-CAjnP1Zc.js";const D={title:"UI/RadioButtonGroup",component:s,args:{ariaLabel:"Options",required:!0,items:[{value:"a",label:"Option A"},{value:"b",label:"Option B"},{value:"c",label:"Option C",disabled:!0}]}},e={render:t=>n.jsx(s,{...t})},a={args:{items:[{value:"1",label:"Enabled"},{value:"2",label:"Disabled",disabled:!0}]}},r={args:{items:Array.from({length:6}).map((t,o)=>({value:`v${o}`,label:`Option ${o+1}`}))}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => <RadioButtonGroup {...args} />
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      value: "1",
      label: "Enabled"
    }, {
      value: "2",
      label: "Disabled",
      disabled: true
    }]
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    items: Array.from({
      length: 6
    }).map((_, i) => ({
      value: \`v\${i}\`,
      label: \`Option \${i + 1}\`
    }))
  }
}`,...r.parameters?.docs?.source}}};const x=["Default","WithDisabled","ManyOptions"];export{e as Default,r as ManyOptions,a as WithDisabled,x as __namedExportsOrder,D as default};
