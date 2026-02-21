import{j as o}from"./jsx-runtime-u17CrQMm.js";import{S as t}from"./SidebarItem-DM6FsxRl.js";import{d as s}from"./Yandex-Sba1K9Wq.js";import"./iframe-DrTDmwcZ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";const c={title:"UI/SidebarItem",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{}},e={args:{label:"Home",href:"/home",pathname:"/home",component:o.jsx(s,{}),isMobile:!1},render:a=>o.jsx(t,{...a})},r={args:{label:"Home",href:"/home",pathname:"/home",component:o.jsx(s,{}),isMobile:!0},render:a=>o.jsx(t,{...a,isMobile:!0})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Home",
    href: "/home",
    pathname: "/home",
    component: <HomeOutline />,
    isMobile: false
  },
  render: args => <SidebarItem {...args} />
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Home",
    href: "/home",
    pathname: "/home",
    component: <HomeOutline />,
    isMobile: true
  },
  render: args => <SidebarItem {...args} isMobile={true} />
}`,...r.parameters?.docs?.source}}};const b=["DefaultSidebarItem","MobileSidebarItem"];export{e as DefaultSidebarItem,r as MobileSidebarItem,b as __namedExportsOrder,c as default};
