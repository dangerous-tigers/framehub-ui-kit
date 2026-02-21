import{j as n}from"./jsx-runtime-u17CrQMm.js";import{R as s}from"./RadioGroup-BknwN0kO.js";import"./iframe-DrTDmwcZ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-xBUxhtQK.js";import"./index-CMNgBsKx.js";import"./index-bRkgC7ql.js";import"./index-DgExFEn2.js";import"./index-DmhDt9ll.js";import"./index-BpdQ-knx.js";import"./index-Caj2Zolw.js";import"./index-CnYkroMP.js";const D={title:"UI/RadioButtonGroup",component:s,args:{ariaLabel:"Options",required:!0,items:[{value:"a",label:"Option A"},{value:"b",label:"Option B"},{value:"c",label:"Option C",disabled:!0}]}},e={render:t=>n.jsx(s,{...t})},a={args:{items:[{value:"1",label:"Enabled"},{value:"2",label:"Disabled",disabled:!0}]}},r={args:{items:Array.from({length:6}).map((t,o)=>({value:`v${o}`,label:`Option ${o+1}`}))}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
