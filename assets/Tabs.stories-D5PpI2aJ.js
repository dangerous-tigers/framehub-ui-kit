import{j as a}from"./jsx-runtime-u17CrQMm.js";import{T as r}from"./Tabs-DGzofqdb.js";import"./clsx-B-dksMZM.js";import"./iframe-DrTDmwcZ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-xBUxhtQK.js";import"./index-CMNgBsKx.js";import"./index-bRkgC7ql.js";import"./index-DgExFEn2.js";import"./index-DmhDt9ll.js";import"./index-BpdQ-knx.js";import"./index-CnYkroMP.js";const x={title:"UI/Tabs",component:r,parameters:{layout:"centered"}},t=[{value:"movies",label:"Movies",content:a.jsx("div",{children:"Содержимое Movies"})},{value:"books",label:"Books",content:a.jsx("div",{children:"Содержимое Books"})},{value:"music",label:"Music",content:a.jsx("div",{children:"Содержимое Music"}),disabled:!0}],i=[{value:"movies",label:"Movies",content:a.jsx("div",{children:"Содержимое Movies"})},{value:"books",label:"Books",content:a.jsx("div",{children:"Содержимое Books"})},{value:"music",label:"Music",content:a.jsx("div",{children:"Содержимое Music"})}],e={args:{defaultValue:"movies",tabs:t}},s={args:{defaultValue:"books",tabs:t}},o={args:{defaultValue:"books",tabs:i}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
