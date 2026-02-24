import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as E}from"./iframe-DI9DgLHm.js";import{c as n}from"./clsx-B-dksMZM.js";import{M as j,a as D,b as T}from"./EyeOutline-BbUeiohv.js";import"./preload-helper-PPVm8Dsz.js";const N="_root_409vb_1",W="_withError_409vb_6",C="_disabled_409vb_9",q="_label_409vb_13",P="_inputContainer_409vb_22",R="_input_409vb_22",L="_leftIcon_409vb_26",M="_withLeftIcon_409vb_42",$="_withRightIcon_409vb_45",V="_leftIconColorWhite_409vb_85",k="_rightIcon_409vb_90",H="_errorText_409vb_124",e={root:N,withError:W,disabled:C,label:q,inputContainer:P,input:R,leftIcon:L,withLeftIcon:M,withRightIcon:$,leftIconColorWhite:V,rightIcon:k,errorText:H},v=I=>{const{type:m="text",label:_,error:b,disabled:a,...w}=I,[t,f]=E.useState(!1),x=m==="search",g=m==="password",s=!!b,y=g&&t?"text":m,S=()=>{a||f(o=>!o)};return r.jsxs("div",{className:n(e.root,{[e.withError]:s,[e.disabled]:a}),children:[r.jsxs("label",{children:[_&&r.jsx("span",{className:e.label,children:_}),r.jsxs("div",{className:e.inputContainer,children:[x&&r.jsx(j,{className:n(e.leftIcon,{[e.leftIconColorWhite]:b}),"aria-hidden":"true"}),r.jsx("input",{type:y,className:n(e.input,{[e.withLeftIcon]:x,[e.withRightIcon]:g}),"aria-invalid":s,"aria-describedby":s?`${w.name}-error`:void 0,disabled:a,onKeyDown:o=>{o.key==="Enter"&&o.preventDefault()},...w}),g&&r.jsx("button",{type:"button",onClick:S,className:n(e.rightIcon,{[e.disabled]:a}),"aria-label":t?"Hide password":"Show password","aria-pressed":t,"aria-disabled":a,disabled:a,children:t?r.jsx(D,{}):r.jsx(T,{})})]})]}),s&&r.jsx("p",{id:`${w.name}-error`,className:e.errorText,role:"alert","aria-live":"polite",children:b})]})};v.__docgenInfo={description:"- `type?` — тип поля ввода (`'text'`, `'password'`, `'search'`, `'email'`)\n- `label?` — метка над полем\n- `error?` — сообщение об ошибке\n- `disabled?` — отключает поле\n\nНаследует все пропсы `<input>`.",methods:[],displayName:"Input",props:{type:{required:!1,tsType:{name:"union",raw:'"text" | "password" | "search" | "email"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"password"'},{name:"literal",value:'"search"'},{name:"literal",value:'"email"'}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}}};const B={title:"UI/Input",component:v,tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["text","password","search"]},label:{control:"text"},error:{control:"text"},disabled:{control:"boolean"}},args:{type:"text"}},l={args:{label:"Default Input",placeholder:"Enter text..."}},i={args:{label:"Input with value",value:"Some text",placeholder:"Enter text..."}},c={args:{label:"Disabled Input",value:"Disabled value",disabled:!0}},d={args:{label:"Input with error",error:"This field is required",placeholder:"Enter text..."}},p={args:{type:"search",label:"Search Input",placeholder:"Search..."}},u={args:{type:"password",label:"Password with toggle",value:"secret123"}},h={args:{type:"search",label:"Search with error",error:"No results found",value:"invalid query"}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Default Input",
    placeholder: "Enter text..."
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Input with value",
    value: "Some text",
    placeholder: "Enter text..."
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Disabled Input",
    value: "Disabled value",
    disabled: true
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Input with error",
    error: "This field is required",
    placeholder: "Enter text..."
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    type: "search",
    label: "Search Input",
    placeholder: "Search..."
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    type: "password",
    label: "Password with toggle",
    value: "secret123"
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    type: "search",
    label: "Search with error",
    error: "No results found",
    value: "invalid query"
  }
}`,...h.parameters?.docs?.source}}};const F=["Default","WithValue","Disabled","WithError","Search","Password","SearchWithError"];export{l as Default,c as Disabled,u as Password,p as Search,h as SearchWithError,d as WithError,i as WithValue,F as __namedExportsOrder,B as default};
