import{I as n}from"./Input-GxSPorkN.js";import"./jsx-runtime-u17CrQMm.js";import"./iframe-BerIK4V3.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Yandex-BwNWolUD.js";const h={title:"UI/Input",component:n,tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["text","password","search"]},label:{control:"text"},error:{control:"text"},disabled:{control:"boolean"}},args:{type:"text"}},e={args:{label:"Default Input",placeholder:"Enter text..."}},r={args:{label:"Input with value",value:"Some text",placeholder:"Enter text..."}},a={args:{label:"Disabled Input",value:"Disabled value",disabled:!0}},t={args:{label:"Input with error",error:"This field is required",placeholder:"Enter text..."}},s={args:{type:"search",label:"Search Input",placeholder:"Search..."}},o={args:{type:"password",label:"Password with toggle",value:"secret123"}},l={args:{type:"search",label:"Search with error",error:"No results found",value:"invalid query"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Default Input",
    placeholder: "Enter text..."
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Input with value",
    value: "Some text",
    placeholder: "Enter text..."
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Disabled Input",
    value: "Disabled value",
    disabled: true
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Input with error",
    error: "This field is required",
    placeholder: "Enter text..."
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    type: "search",
    label: "Search Input",
    placeholder: "Search..."
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    type: "password",
    label: "Password with toggle",
    value: "secret123"
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    type: "search",
    label: "Search with error",
    error: "No results found",
    value: "invalid query"
  }
}`,...l.parameters?.docs?.source}}};const g=["Default","WithValue","Disabled","WithError","Search","Password","SearchWithError"];export{e as Default,a as Disabled,o as Password,s as Search,l as SearchWithError,t as WithError,r as WithValue,g as __namedExportsOrder,h as default};
