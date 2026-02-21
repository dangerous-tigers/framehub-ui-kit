import{j as a}from"./jsx-runtime-u17CrQMm.js";import{T as r}from"./Tabs-BTajPDHu.js";import"./clsx-B-dksMZM.js";import"./iframe-BerIK4V3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BvVtafns.js";import"./index-CwhXJyow.js";import"./index-CG91jSbu.js";import"./index-COiOmbbm.js";import"./index-B0Ke_CAe.js";import"./index-D8ymNV9c.js";import"./index-CAjnP1Zc.js";const x={title:"UI/Tabs",component:r,parameters:{layout:"centered"}},t=[{value:"movies",label:"Movies",content:a.jsx("div",{children:"Содержимое Movies"})},{value:"books",label:"Books",content:a.jsx("div",{children:"Содержимое Books"})},{value:"music",label:"Music",content:a.jsx("div",{children:"Содержимое Music"}),disabled:!0}],i=[{value:"movies",label:"Movies",content:a.jsx("div",{children:"Содержимое Movies"})},{value:"books",label:"Books",content:a.jsx("div",{children:"Содержимое Books"})},{value:"music",label:"Music",content:a.jsx("div",{children:"Содержимое Music"})}],e={args:{defaultValue:"movies",tabs:t}},s={args:{defaultValue:"books",tabs:t}},o={args:{defaultValue:"books",tabs:i}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: "movies",
    tabs: tabsData
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: "books",
    tabs: tabsData
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: "books",
    tabs: tabsDataNotDisabled
  }
}`,...o.parameters?.docs?.source}}};const g=["Default","WithDisabledTab","NotDisabledTab"];export{e as Default,o as NotDisabledTab,s as WithDisabledTab,g as __namedExportsOrder,x as default};
