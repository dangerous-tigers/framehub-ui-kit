import{j as p}from"./jsx-runtime-u17CrQMm.js";import{r as i}from"./iframe-DrTDmwcZ.js";import{a as o}from"./Pagination-DWQK8qgZ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./Button-j5ECE80c.js";import"./Card-mOqNzGrZ.js";import"./Checkbox-vLleQWus.js";import"./index-xBUxhtQK.js";import"./index-CMNgBsKx.js";import"./index-bRkgC7ql.js";import"./index-Caj2Zolw.js";import"./index-CnYkroMP.js";import"./Yandex-Sba1K9Wq.js";import"./Input-CnbLinuu.js";import"./InputWithIcon-DO0sarui.js";import"./ModalHeaderWithNext-Dk98n0lU.js";import"./index-BpdQ-knx.js";import"./index-83W1xf30.js";import"./SidebarItem-DM6FsxRl.js";import"./Select-BEQWQDYl.js";import"./index-DmhDt9ll.js";import"./RadioGroup-BknwN0kO.js";import"./index-DgExFEn2.js";import"./ScrollArea-NwBG4bzz.js";import"./overlayscrollbars-react-BXGvC7s2.js";import"./Separator-e2uFO3oR.js";import"./Skeleton-vKApB1LC.js";import"./Swiper-BMwZ5dLi.js";import"./Tabs-DGzofqdb.js";import"./Textarea-Bk5NJ16S.js";const u={title:"UI/Popover",component:o,parameters:{layout:"centered",backgrounds:{default:"black"}},tags:["autodocs"],args:{open:!1,isOwner:!1,isAuthorized:!1,isFollow:!1},argTypes:{open:{control:"boolean",description:"popver state"},onOpenChange:{action:"popover state has been changed`"},editPost:{action:"Calling up textarea for editing post description"},removePost:{action:"post has been removed"},follow:{action:"user has been followed"},unfollow:{action:"user has been unfollowed"},copyLink:{action:"link has been copied"}}},s={args:{...u.args,isOwner:!0,isAuthorized:!0},render:()=>{const[e,r]=i.useState(!1);return p.jsx(o,{isOwner:!0,isAuthorized:!0,open:e,onOpenChange:()=>r(!e)})}},n={args:{...u.args,isOwner:!1,isAuthorized:!0},render:()=>{const[e,r]=i.useState(!1);return p.jsx(o,{isOwner:!1,isAuthorized:!0,isFollow:!1,open:e,onOpenChange:()=>r(!e)})}},t={args:{...u.args,isOwner:!1,isAuthorized:!0},render:()=>{const[e,r]=i.useState(!1);return p.jsx(o,{isOwner:!1,isAuthorized:!0,isFollow:!0,open:e,onOpenChange:()=>r(!e)})}},a={args:{...u.args,isOwner:!1,isAuthorized:!1},render:()=>{const[e,r]=i.useState(!1);return p.jsx(o,{isOwner:!1,isAuthorized:!1,open:e,onOpenChange:()=>r(!e)})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
