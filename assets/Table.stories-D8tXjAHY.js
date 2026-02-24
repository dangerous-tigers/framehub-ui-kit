import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as m}from"./iframe-DI9DgLHm.js";import{S as b}from"./Select-3frTCAxk.js";import{c as r}from"./clsx-B-dksMZM.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CwyOuwL6.js";import"./index-DVYZujwu.js";import"./index-BdQq_4o_.js";import"./index-HO5rLgvm.js";import"./index-BNJ_6G53.js";import"./index-DDi9tdwT.js";import"./index-_8RWAErI.js";import"./index-nzF18tQy.js";import"./index-CnVpZzZk.js";import"./index-B9QI0F6H.js";import"./index-CgEVi-N4.js";import"./index-B3mVtBAn.js";import"./index-B1aXv8Dc.js";import"./ArrowIosDownOutline-COdXxriD.js";const C="_container_1smmk_1",v="_table_1smmk_7",f="_header_1smmk_16",w="_body_1smmk_20",y="_row_1smmk_34",R="_head_1smmk_16",S="_cell_1smmk_53",d={container:C,table:v,header:f,body:w,row:y,head:R,cell:S};function c({className:a,...s}){return e.jsx("div",{"data-slot":"table-container",className:r(d.container,a),children:e.jsx("table",{"data-slot":"table",className:r(d.table,a),...s})})}function h({className:a,...s}){return e.jsx("thead",{"data-slot":"table-header",className:r(d.header,a),...s})}function T({className:a,...s}){return e.jsx("tbody",{"data-slot":"table-body",className:r(d.body,a),...s})}function t({className:a,...s}){return e.jsx("tr",{"data-slot":"table-row",className:r(d.row,a),...s})}function n({className:a,...s}){return e.jsx("th",{"data-slot":"table-head",className:r(d.head,a),...s})}function l({className:a,...s}){return e.jsx("td",{"data-slot":"table-cell",className:r(d.cell,a),...s})}c.__docgenInfo={description:"",methods:[],displayName:"Table"};T.__docgenInfo={description:"",methods:[],displayName:"TableBody"};l.__docgenInfo={description:"",methods:[],displayName:"TableCell"};n.__docgenInfo={description:"",methods:[],displayName:"TableHead"};h.__docgenInfo={description:"",methods:[],displayName:"TableHeader"};t.__docgenInfo={description:"",methods:[],displayName:"TableRow"};const x=[{value:"Admin",label:"Admin"},{value:"Editor",label:"Editor"},{value:"User",label:"User"}],K={title:"UI/Table",component:c,tags:["autodocs"],parameters:{layout:"centered"}},o={render:()=>e.jsx("div",{style:{width:"760px"},children:e.jsxs(c,{children:[e.jsx(h,{children:e.jsxs(t,{children:[e.jsx(n,{children:"ID"}),e.jsx(n,{children:"Name"}),e.jsx(n,{children:"Email"}),e.jsx(n,{children:"Status"})]})}),e.jsxs(T,{children:[e.jsxs(t,{children:[e.jsx(l,{children:"1"}),e.jsx(l,{children:"Alex Carter"}),e.jsx(l,{children:"alex@site.dev"}),e.jsx(l,{children:"Active"})]}),e.jsxs(t,{children:[e.jsx(l,{children:"2"}),e.jsx(l,{children:"Emma Flores"}),e.jsx(l,{children:"emma@site.dev"}),e.jsx(l,{children:"Pending"})]}),e.jsxs(t,{children:[e.jsx(l,{children:"3"}),e.jsx(l,{children:"Mark Stone"}),e.jsx(l,{children:"mark@site.dev"}),e.jsx(l,{children:"Blocked"})]})]})]})})},k=()=>{const[a,s]=m.useState("Admin"),[j,p]=m.useState("Editor"),[u,_]=m.useState("User");return e.jsxs(c,{children:[e.jsx(h,{children:e.jsxs(t,{children:[e.jsx(n,{children:"ID"}),e.jsx(n,{children:"Name"}),e.jsx(n,{children:"Email"}),e.jsx(n,{children:"Role"})]})}),e.jsxs(T,{children:[e.jsxs(t,{children:[e.jsx(l,{children:"1"}),e.jsx(l,{children:"Alex Carter"}),e.jsx(l,{children:"alex@site.dev"}),e.jsx(l,{children:e.jsx(b,{options:x,value:a,onValueChange:s,disabled:!1,variant:"text",width:"96px"})})]}),e.jsxs(t,{children:[e.jsx(l,{children:"2"}),e.jsx(l,{children:"Emma Flores"}),e.jsx(l,{children:"emma@site.dev"}),e.jsx(l,{children:e.jsx(b,{options:x,value:j,onValueChange:p,disabled:!1,variant:"text",width:"96px"})})]}),e.jsxs(t,{children:[e.jsx(l,{children:"3"}),e.jsx(l,{children:"Mark Stone"}),e.jsx(l,{children:"mark@site.dev"}),e.jsx(l,{children:e.jsx(b,{options:x,value:u,onValueChange:_,disabled:!1,variant:"text",width:"96px"})})]})]})]})},i={render:()=>e.jsx(k,{})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "760px"
  }}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>Alex Carter</TableCell>
            <TableCell>alex@site.dev</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2</TableCell>
            <TableCell>Emma Flores</TableCell>
            <TableCell>emma@site.dev</TableCell>
            <TableCell>Pending</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>3</TableCell>
            <TableCell>Mark Stone</TableCell>
            <TableCell>mark@site.dev</TableCell>
            <TableCell>Blocked</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <TableWithSelect />
}`,...i.parameters?.docs?.source}}};const L=["Static","WithSelect"];export{o as Static,i as WithSelect,L as __namedExportsOrder,K as default};
