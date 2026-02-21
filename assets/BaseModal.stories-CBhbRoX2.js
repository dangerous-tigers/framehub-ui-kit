import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as x}from"./iframe-BerIK4V3.js";import{a as f}from"./Yandex-BwNWolUD.js";import{M as a,a as C,b as g,s as m,T as j,C as y}from"./ModalHeaderWithNext-C5OZadEU.js";import{B as o}from"./Button-j5ECE80c.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BvVtafns.js";import"./index-CwhXJyow.js";import"./index-CG91jSbu.js";import"./index-D8ymNV9c.js";import"./index-Bd8wJBrk.js";import"./index-CAjnP1Zc.js";import"./clsx-B-dksMZM.js";const{fn:h}=__STORYBOOK_MODULE_TEST__,w={title:"UI/Modal",component:a,parameters:{layout:"centered"}},r={args:{open:!0,onOpenChange:h(),children:e.jsxs("div",{children:[e.jsx("p",{children:"Modal content"}),e.jsx(o,{onClick:h(),children:"cancel"}),e.jsx(o,{onClick:h(),children:"save"})]})}},i={render:()=>{const[t,n]=x.useState(!1),l=()=>{n(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:()=>n(!0),children:"Open modal"}),e.jsx(a,{size:"sm",onOpenChange:l,open:t,header:e.jsx(C,{title:"Modal title",onClose:l}),children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"24px"},children:[e.jsx("p",{children:"We have sent a link to confirm your email to epam@epam.com"}),e.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"8px"},children:[e.jsx(o,{onClick:l,children:"Cancel"}),e.jsx(o,{onClick:()=>{alert("Save"),n(!1)},children:"Save"})]})]})})]})}},d={render:()=>{const[t,n]=x.useState(!1),l=()=>{n(!1)},u=()=>{alert("Next clicked")},s=()=>{alert("Back clicked")};return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:()=>n(!0),children:"Open modal"}),e.jsx(a,{size:"md",onOpenChange:l,open:t,header:e.jsx(g,{title:"Cropping",onBack:s,onNext:u}),children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"24px"},children:e.jsx("p",{children:"Crop content here"})})})]})}},c={render:()=>{const[t,n]=x.useState(!1),l=()=>{n(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:()=>n(!0),children:"Open modal"}),e.jsx(a,{size:"lg",onOpenChange:l,open:t,header:e.jsx(C,{title:"2 258 Following",onClose:l}),children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px",padding:"24px"},children:[e.jsx("p",{children:"List of followers"}),[...Array(20).fill(null)].map((u,s)=>e.jsx("div",{children:e.jsxs("p",{children:["user ",s]})},s)),e.jsx("div",{style:{display:"flex",justifyContent:"flex-end",gap:"8px"},children:e.jsx(o,{onClick:l,children:"Close"})})]})})]})}},p={render:()=>{const[t,n]=x.useState(!1),l=()=>{n(!1)};return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>n(!0),children:"Open modal"}),e.jsx(a,{size:"xl",onOpenChange:l,open:t,header:e.jsxs(e.Fragment,{children:[e.jsx(o,{className:m.iconButton,onClick:()=>{alert("Back")},type:"button","aria-label":"Back",children:e.jsx(f,{})}),e.jsx(j,{asChild:!0,children:e.jsx("h2",{className:m.title,children:"Filters"})}),e.jsx(y,{asChild:!0,children:e.jsx(o,{onClick:()=>{alert("Next")},children:"Next"})})]}),children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"24px"},children:[e.jsx("p",{children:"We have sent a link to confirm your email to epam@epam.com"}),e.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"8px"},children:[e.jsx(o,{onClick:l,children:"Cancel"}),e.jsx(o,{onClick:()=>{alert("Save"),n(!1)},children:"Save"})]})]})})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    onOpenChange: fn(),
    children: <div>
        <p>Modal content</p>
        <Button onClick={fn()}>cancel</Button>
        <Button onClick={fn()}>save</Button>
      </div>
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const handleClose = () => {
      setOpen(false);
    };
    return <>
        <Button onClick={() => setOpen(true)}>Open modal</Button>
        <Modal size="sm" onOpenChange={handleClose} open={open} header={<ModalHeaderWithClose title="Modal title" onClose={handleClose} />}>
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          padding: "24px"
        }}>
            <p>We have sent a link to confirm your email to epam@epam.com</p>
            <div style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "8px"
          }}>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={() => {
              alert("Save");
              setOpen(false);
            }}>
                Save
              </Button>
            </div>
          </div>
        </Modal>
      </>;
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const handleClose = () => {
      setOpen(false);
    };
    const handleNext = () => {
      alert("Next clicked");
    };
    const handleBack = () => {
      alert("Back clicked");
    };
    return <>
        <Button onClick={() => setOpen(true)}>Open modal</Button>
        <Modal size="md" onOpenChange={handleClose} open={open} header={<ModalHeaderWithNext title="Cropping" onBack={handleBack} onNext={handleNext} />}>
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          padding: "24px"
        }}>
            <p>Crop content here</p>
          </div>
        </Modal>
      </>;
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const handleClose = () => {
      setOpen(false);
    };
    return <>
        <Button onClick={() => setOpen(true)}>Open modal</Button>
        <Modal size="lg" onOpenChange={handleClose} open={open} header={<ModalHeaderWithClose title="2 258 Following" onClose={handleClose} />}>
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          padding: "24px"
        }}>
            <p>List of followers</p>
            {[...Array(20).fill(null)].map((_, index) => <div key={index}>
                <p>user {index}</p>
              </div>)}
            <div style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "8px"
          }}>
              <Button onClick={handleClose}>Close</Button>
            </div>
          </div>
        </Modal>
      </>;
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const handleClose = () => {
      setOpen(false);
    };
    return <>
        <button onClick={() => setOpen(true)}>Open modal</button>
        <Modal size="xl" onOpenChange={handleClose} open={open} header={<>
              <Button className={styles.iconButton} onClick={() => {
          alert("Back");
        }} type="button" aria-label="Back">
                <ArrowIosBackOutline />
              </Button>
              <Dialog.Title asChild>
                <h2 className={styles.title}>{"Filters"}</h2>
              </Dialog.Title>
              <Dialog.Close asChild>
                <Button onClick={() => {
            alert("Next");
          }}>
                  Next
                </Button>
              </Dialog.Close>
            </>}>
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          padding: "24px"
        }}>
            <p>We have sent a link to confirm your email to epam@epam.com</p>
            <div style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "8px"
          }}>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={() => {
              alert("Save");
              setOpen(false);
            }}>
                Save
              </Button>
            </div>
          </div>
        </Modal>
      </>;
  }
}`,...p.parameters?.docs?.source}}};const T=["Primary","ConfirmModal","CropModal","FollowersModal","FiltersModal"];export{i as ConfirmModal,d as CropModal,p as FiltersModal,c as FollowersModal,r as Primary,T as __namedExportsOrder,w as default};
