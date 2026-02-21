import{j as u}from"./jsx-runtime-u17CrQMm.js";import{r as c}from"./iframe-BerIK4V3.js";import{j as p,k as g}from"./Yandex-BwNWolUD.js";import{S as d}from"./Select-BqaTTBk-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./index-CwhXJyow.js";import"./index-CG91jSbu.js";import"./index-BvVtafns.js";import"./index-B0Ke_CAe.js";import"./index-Bd8wJBrk.js";import"./index-D8ymNV9c.js";import"./index-CSvOQBku.js";const e=[{value:"English",label:"United Kingdom flag",icon:p},{value:"Russian",label:"Russian flag",icon:g}],l={title:"UI/Select",component:d,parameters:{layout:"centered",backgrounds:{default:"black"}},tags:["autodocs"],args:{options:[{value:"English",label:"United Kingdom flag",icon:p},{value:"Russian",label:"Russian flag",icon:g}],value:"",disabled:!1,variant:"default",width:"210px"},argTypes:{options:{control:!1,description:"options"},value:{control:"text",description:"selected value"},onValueChange:{action:"has been changed"},placeholder:{control:"text",description:"if nothing is selected"},disabled:{control:"boolean",description:"is disabled"}}},a={args:{...l.args},render:()=>{const[o,i]=c.useState(String(e[0].label));return u.jsx(d,{options:e,disabled:!1,variant:"default",width:"210px",value:o,onValueChange:m=>i(m)})}},n={args:{...l.args,disabled:!1,options:[{value:"0",label:"Nullish"},{value:"5",label:"Five"},{value:"10",label:"Ten"},{value:"20",label:"Twenty"}],value:"0",variant:"text",width:"64px"}},s={args:{value:"English",disabled:!0}},t={args:{...l.args,disabled:!1,variant:"icon",width:"64px"},render:()=>{const[o,i]=c.useState(String(e[0].label));return u.jsx(d,{options:e,disabled:!1,value:o,onValueChange:i,width:"64px",variant:"icon"})}},r={args:{...l.args,disabled:!0,variant:"icon",width:"64px"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`[{
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
}`,...r.parameters?.docs?.source}}};const C=["langs","WithValue","WithText","WithValueDisabled","WithIcon","WithIconDisabled"];export{t as WithIcon,r as WithIconDisabled,n as WithText,a as WithValue,s as WithValueDisabled,C as __namedExportsOrder,l as default,e as langs};
