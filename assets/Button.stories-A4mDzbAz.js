import{B as s}from"./Button-j5ECE80c.js";import"./jsx-runtime-u17CrQMm.js";import"./clsx-B-dksMZM.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,m={title:"UI/Button",component:s,argTypes:{variant:{control:"select",options:["primary","secondary","outline","text"]},type:{control:"select",options:["button","reset","submit"]},disabled:{control:"boolean"},children:{control:"text"}}},i=c("Click"),r={args:{children:"Button primary",onClick:i}},e={args:{variant:"secondary",children:"Button secondary"}},t={args:{variant:"outline",children:"Button outline"}},a={args:{variant:"text",children:"Button text"}},n={args:{variant:"primary",disabled:!0,children:"Button disabled"}},o={args:{children:"Button full width",fullWidth:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Button primary",
    onClick: onClickHandler
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    children: "Button secondary"
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    children: "Button outline"
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "text",
    children: "Button text"
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    disabled: true,
    children: "Button disabled"
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Button full width",
    fullWidth: true
  }
}`,...o.parameters?.docs?.source}}};const p=["Primary","Secondary","Outline","Text","Disabled","FullWidth"];export{n as Disabled,o as FullWidth,t as Outline,r as Primary,e as Secondary,a as Text,p as __namedExportsOrder,m as default};
