import{j as u}from"./jsx-runtime-u17CrQMm.js";import{r as c}from"./iframe-oNzeYWiy.js";import{S as d}from"./Select-DJ0btyKq.js";import{M as p,a as g}from"./FlagUnitedKingdom-BkM3T3fu.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-BSdHZ0AU.js";import"./index-Bow462F3.js";import"./index-BdQq_4o_.js";import"./index-D2eCPaX4.js";import"./index-BXX2hiaZ.js";import"./index-D3D3Iyxz.js";import"./index-BMu_5-Dq.js";import"./index-B_Yw3QjR.js";import"./index-0h_eL4yk.js";import"./index-CVhsok95.js";import"./index-CEXiGUzp.js";import"./index-CbDiCkaK.js";import"./index-a4G2RdJ8.js";import"./ArrowIosDownOutline-dnR-RL02.js";const e=[{value:"English",label:"United Kingdom flag",icon:p},{value:"Russian",label:"Russian flag",icon:g}],l={title:"UI/Select",component:d,parameters:{layout:"centered",backgrounds:{default:"black"}},tags:["autodocs"],args:{options:[{value:"English",label:"United Kingdom flag",icon:p},{value:"Russian",label:"Russian flag",icon:g}],value:"",disabled:!1,variant:"default",width:"210px"},argTypes:{options:{control:!1,description:"options"},value:{control:"text",description:"selected value"},onValueChange:{action:"has been changed"},placeholder:{control:"text",description:"if nothing is selected"},disabled:{control:"boolean",description:"is disabled"}}},a={args:{...l.args},render:()=>{const[o,i]=c.useState(String(e[0].label));return u.jsx(d,{options:e,disabled:!1,variant:"default",width:"210px",value:o,onValueChange:m=>i(m)})}},n={args:{...l.args,disabled:!1,options:[{value:"0",label:"Nullish"},{value:"5",label:"Five"},{value:"10",label:"Ten"},{value:"20",label:"Twenty"}],value:"0",variant:"text",width:"64px"}},s={args:{value:"English",disabled:!0}},t={args:{...l.args,disabled:!1,variant:"icon",width:"64px"},render:()=>{const[o,i]=c.useState(String(e[0].label));return u.jsx(d,{options:e,disabled:!1,value:o,onValueChange:i,width:"64px",variant:"icon"})}},r={args:{...l.args,disabled:!0,variant:"icon",width:"64px"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`[{
  value: "English",
  label: "United Kingdom flag",
  icon: FlagUnitedKingdom
}, {
  value: "Russian",
  label: "Russian flag",
  icon: FlagRussia
}]`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...meta.args
  },
  render: () => {
    const [value, setValue] = useState<string>(String(langs[0].label));
    return <Select options={langs} disabled={false} variant={"default"} width={"210px"} value={value} onValueChange={event => setValue(event)} />;
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...meta.args,
    disabled: false,
    options: [{
      value: "0",
      label: "Nullish"
    }, {
      value: "5",
      label: "Five"
    }, {
      value: "10",
      label: "Ten"
    }, {
      value: "20",
      label: "Twenty"
    }],
    value: "0",
    variant: "text",
    width: "64px"
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    value: "English",
    disabled: true
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...meta.args,
    disabled: false,
    variant: "icon",
    width: "64px"
  },
  render: () => {
    const [value, setValue] = useState<string>(String(langs[0].label));
    return <Select options={langs} disabled={false} value={value} onValueChange={setValue} width={"64px"} variant={"icon"} />;
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...meta.args,
    disabled: true,
    variant: "icon",
    width: "64px"
  }
}`,...r.parameters?.docs?.source}}};const M=["langs","WithValue","WithText","WithValueDisabled","WithIcon","WithIconDisabled"];export{t as WithIcon,r as WithIconDisabled,n as WithText,a as WithValue,s as WithValueDisabled,M as __namedExportsOrder,l as default,e as langs};
