import{j as p}from"./jsx-runtime-u17CrQMm.js";import{r as i}from"./iframe-BerIK4V3.js";import{a as o}from"./Pagination-iVJNLRSZ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Button-j5ECE80c.js";import"./Card-JMwn3dm2.js";import"./Checkbox-CDtp9C13.js";import"./index-BvVtafns.js";import"./index-CwhXJyow.js";import"./index-CG91jSbu.js";import"./index-CSvOQBku.js";import"./index-CAjnP1Zc.js";import"./Yandex-BwNWolUD.js";import"./Input-GxSPorkN.js";import"./InputWithIcon-DO0sarui.js";import"./ModalHeaderWithNext-C5OZadEU.js";import"./index-D8ymNV9c.js";import"./index-Bd8wJBrk.js";import"./SidebarItem-vifa-bt0.js";import"./Select-BqaTTBk-.js";import"./index-B0Ke_CAe.js";import"./RadioGroup-F9tKyKQs.js";import"./index-COiOmbbm.js";import"./ScrollArea-CJ83wOVu.js";import"./overlayscrollbars-react-6FC7PIpN.js";import"./Separator-e2uFO3oR.js";import"./Skeleton-vKApB1LC.js";import"./Swiper-APncDPt7.js";import"./Tabs-BTajPDHu.js";import"./Textarea-ClpU8vOi.js";const u={title:"UI/Popover",component:o,parameters:{layout:"centered",backgrounds:{default:"black"}},tags:["autodocs"],args:{open:!1,isOwner:!1,isAuthorized:!1,isFollow:!1},argTypes:{open:{control:"boolean",description:"popver state"},onOpenChange:{action:"popover state has been changed`"},editPost:{action:"Calling up textarea for editing post description"},removePost:{action:"post has been removed"},follow:{action:"user has been followed"},unfollow:{action:"user has been unfollowed"},copyLink:{action:"link has been copied"}}},s={args:{...u.args,isOwner:!0,isAuthorized:!0},render:()=>{const[e,r]=i.useState(!1);return p.jsx(o,{isOwner:!0,isAuthorized:!0,open:e,onOpenChange:()=>r(!e)})}},n={args:{...u.args,isOwner:!1,isAuthorized:!0},render:()=>{const[e,r]=i.useState(!1);return p.jsx(o,{isOwner:!1,isAuthorized:!0,isFollow:!1,open:e,onOpenChange:()=>r(!e)})}},t={args:{...u.args,isOwner:!1,isAuthorized:!0},render:()=>{const[e,r]=i.useState(!1);return p.jsx(o,{isOwner:!1,isAuthorized:!0,isFollow:!0,open:e,onOpenChange:()=>r(!e)})}},a={args:{...u.args,isOwner:!1,isAuthorized:!1},render:()=>{const[e,r]=i.useState(!1);return p.jsx(o,{isOwner:!1,isAuthorized:!1,open:e,onOpenChange:()=>r(!e)})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...meta.args,
    isOwner: true,
    isAuthorized: true
  },
  render: () => {
    const [open, setOpen] = useState(false);
    return <Popover isOwner={true} isAuthorized={true} open={open} onOpenChange={() => setOpen(!open)} />;
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...meta.args,
    isOwner: false,
    isAuthorized: true
  },
  render: () => {
    const [open, setOpen] = useState(false);
    return <Popover isOwner={false} isAuthorized={true} isFollow={false} open={open} onOpenChange={() => setOpen(!open)} />;
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...meta.args,
    isOwner: false,
    isAuthorized: true
  },
  render: () => {
    const [open, setOpen] = useState(false);
    return <Popover isOwner={false} isAuthorized={true} isFollow={true} open={open} onOpenChange={() => setOpen(!open)} />;
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...meta.args,
    isOwner: false,
    isAuthorized: false
  },
  render: () => {
    const [open, setOpen] = useState(false);
    return <Popover isOwner={false} isAuthorized={false} open={open} onOpenChange={() => setOpen(!open)} />;
  }
}`,...a.parameters?.docs?.source}}};const D=["OwnerPopover","ViewerPopoverFollow","ViewerPopoverUnfollow","UnauthorizedPopover"];export{s as OwnerPopover,a as UnauthorizedPopover,n as ViewerPopoverFollow,t as ViewerPopoverUnfollow,D as __namedExportsOrder,u as default};
