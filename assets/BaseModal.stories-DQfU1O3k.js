import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as l,R as te}from"./iframe-oNzeYWiy.js";import{P as C,c as h,u as b,a as oe,b as ae,d as se}from"./index-D2eCPaX4.js";import{u as B}from"./index-0h_eL4yk.js";import{u as re}from"./index-CbDiCkaK.js";import{P as le,R as ie,h as ce,u as de,F as pe,D as ue}from"./index-BMu_5-Dq.js";import{P as S}from"./index-5ZrMyhdf.js";import{M as fe,a as A}from"./Close-Dbtg-Ael.js";import{B as d}from"./Button-j5ECE80c.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BSdHZ0AU.js";import"./index-Bow462F3.js";import"./index-B_Yw3QjR.js";import"./clsx-B-dksMZM.js";var N="Dialog",[W]=oe(N),[me,p]=W(N),q=n=>{const{__scopeDialog:t,children:o,open:s,defaultOpen:a,onOpenChange:r,modal:c=!0}=n,i=l.useRef(null),f=l.useRef(null),[k,M]=re({prop:s,defaultProp:a??!1,onChange:r,caller:N});return e.jsx(me,{scope:t,triggerRef:i,contentRef:f,contentId:B(),titleId:B(),descriptionId:B(),open:k,onOpenChange:M,onOpenToggle:l.useCallback(()=>M(ne=>!ne),[M]),modal:c,children:o})};q.displayName=N;var $="DialogTrigger",xe=l.forwardRef((n,t)=>{const{__scopeDialog:o,...s}=n,a=p($,o),r=b(t,a.triggerRef);return e.jsx(C.button,{type:"button","aria-haspopup":"dialog","aria-expanded":a.open,"aria-controls":a.contentId,"data-state":w(a.open),...s,ref:r,onClick:h(n.onClick,a.onOpenToggle)})});xe.displayName=$;var T="DialogPortal",[ge,L]=W(T,{forceMount:void 0}),z=n=>{const{__scopeDialog:t,forceMount:o,children:s,container:a}=n,r=p(T,t);return e.jsx(ge,{scope:t,forceMount:o,children:l.Children.map(s,c=>e.jsx(S,{present:o||r.open,children:e.jsx(le,{asChild:!0,container:a,children:c})}))})};z.displayName=T;var O="DialogOverlay",H=l.forwardRef((n,t)=>{const o=L(O,n.__scopeDialog),{forceMount:s=o.forceMount,...a}=n,r=p(O,n.__scopeDialog);return r.modal?e.jsx(S,{present:s||r.open,children:e.jsx(Ce,{...a,ref:t})}):null});H.displayName=O;var he=ae("DialogOverlay.RemoveScroll"),Ce=l.forwardRef((n,t)=>{const{__scopeDialog:o,...s}=n,a=p(O,o);return e.jsx(ie,{as:he,allowPinchZoom:!0,shards:[a.contentRef],children:e.jsx(C.div,{"data-state":w(a.open),...s,ref:t,style:{pointerEvents:"auto",...s.style}})})}),m="DialogContent",G=l.forwardRef((n,t)=>{const o=L(m,n.__scopeDialog),{forceMount:s=o.forceMount,...a}=n,r=p(m,n.__scopeDialog);return e.jsx(S,{present:s||r.open,children:r.modal?e.jsx(ve,{...a,ref:t}):e.jsx(ye,{...a,ref:t})})});G.displayName=m;var ve=l.forwardRef((n,t)=>{const o=p(m,n.__scopeDialog),s=l.useRef(null),a=b(t,o.contentRef,s);return l.useEffect(()=>{const r=s.current;if(r)return ce(r)},[]),e.jsx(V,{...n,ref:a,trapFocus:o.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:h(n.onCloseAutoFocus,r=>{r.preventDefault(),o.triggerRef.current?.focus()}),onPointerDownOutside:h(n.onPointerDownOutside,r=>{const c=r.detail.originalEvent,i=c.button===0&&c.ctrlKey===!0;(c.button===2||i)&&r.preventDefault()}),onFocusOutside:h(n.onFocusOutside,r=>r.preventDefault())})}),ye=l.forwardRef((n,t)=>{const o=p(m,n.__scopeDialog),s=l.useRef(!1),a=l.useRef(!1);return e.jsx(V,{...n,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:r=>{n.onCloseAutoFocus?.(r),r.defaultPrevented||(s.current||o.triggerRef.current?.focus(),r.preventDefault()),s.current=!1,a.current=!1},onInteractOutside:r=>{n.onInteractOutside?.(r),r.defaultPrevented||(s.current=!0,r.detail.originalEvent.type==="pointerdown"&&(a.current=!0));const c=r.target;o.triggerRef.current?.contains(c)&&r.preventDefault(),r.detail.originalEvent.type==="focusin"&&a.current&&r.preventDefault()}})}),V=l.forwardRef((n,t)=>{const{__scopeDialog:o,trapFocus:s,onOpenAutoFocus:a,onCloseAutoFocus:r,...c}=n,i=p(m,o),f=l.useRef(null),k=b(t,f);return de(),e.jsxs(e.Fragment,{children:[e.jsx(pe,{asChild:!0,loop:!0,trapped:s,onMountAutoFocus:a,onUnmountAutoFocus:r,children:e.jsx(ue,{role:"dialog",id:i.contentId,"aria-describedby":i.descriptionId,"aria-labelledby":i.titleId,"data-state":w(i.open),...c,ref:k,onDismiss:()=>i.onOpenChange(!1)})}),e.jsxs(e.Fragment,{children:[e.jsx(je,{titleId:i.titleId}),e.jsx(De,{contentRef:f,descriptionId:i.descriptionId})]})]})}),E="DialogTitle",P=l.forwardRef((n,t)=>{const{__scopeDialog:o,...s}=n,a=p(E,o);return e.jsx(C.h2,{id:a.titleId,...s,ref:t})});P.displayName=E;var K="DialogDescription",U=l.forwardRef((n,t)=>{const{__scopeDialog:o,...s}=n,a=p(K,o);return e.jsx(C.p,{id:a.descriptionId,...s,ref:t})});U.displayName=K;var Y="DialogClose",Z=l.forwardRef((n,t)=>{const{__scopeDialog:o,...s}=n,a=p(Y,o);return e.jsx(C.button,{type:"button",...s,ref:t,onClick:h(n.onClick,()=>a.onOpenChange(!1))})});Z.displayName=Y;function w(n){return n?"open":"closed"}var J="DialogTitleWarning",[Xe,Q]=se(J,{contentName:m,titleName:E,docsSlug:"dialog"}),je=({titleId:n})=>{const t=Q(J),o=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return l.useEffect(()=>{n&&(document.getElementById(n)||console.error(o))},[o,n]),null},_e="DialogDescriptionWarning",De=({contentRef:n,descriptionId:t})=>{const s=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Q(_e).contentName}}.`;return l.useEffect(()=>{const a=n.current?.getAttribute("aria-describedby");t&&a&&(document.getElementById(t)||console.warn(s))},[s,n,t]),null},Oe=q,Ne=z,ke=H,Me=G,I=P,Be=U,X=Z;const Re="_overlay_3isjf_1",be="_overlayShow_3isjf_1",Se="_content_3isjf_9",Te="_contentShow_3isjf_1",Ee="_body_3isjf_38",Pe="_closeButton_3isjf_45",we="_divider_3isjf_67",x={overlay:Re,overlayShow:be,content:Se,contentShow:Te,"content--sm":"_content--sm_3isjf_25","content--md":"_content--md_3isjf_28","content--lg":"_content--lg_3isjf_31","content--xl":"_content--xl_3isjf_34",body:Ee,closeButton:Pe,divider:we},g=({header:n,children:t,size:o="md",showDivider:s=!0,className:a,portal:r=!0,...c})=>{const i=x[`content--${o}`]||"",f=r?Ne:te.Fragment;return e.jsx(Oe,{...c,children:e.jsxs(f,{children:[e.jsx(ke,{className:x.overlay}),e.jsxs(Me,{"aria-describedby":"modal",className:`${x.content} ${i} ${a||""}`,children:[e.jsx(Be,{id:"modal"}),e.jsx(P,{}),n&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:x.header,children:n}),s&&e.jsx("div",{className:x.divider})]}),e.jsx("div",{className:x.body,children:t})]})]})})};g.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{header:{required:!1,tsType:{name:"ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:`| 'sm' // Размер для confirm modal
| 'md' // Размер по умолчанию/crop modal
| 'lg' // Размер для followers
| 'xl'`,elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},showDivider:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},portal:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const Ie="_header_1emcx_1",Fe="_title_1emcx_10",Ae="_iconButton_1emcx_16",u={header:Ie,title:Fe,iconButton:Ae},F=({title:n,onClose:t,onKeyPress:o})=>e.jsxs("div",{className:u.header,children:[e.jsx(I,{asChild:!0,children:e.jsx("h2",{className:u.title,children:n})}),e.jsx(X,{className:u.iconButton,"aria-label":"Close",type:"button",onClick:t,onKeyUp:o,children:e.jsx(fe,{})})]});F.__docgenInfo={description:"",methods:[],displayName:"ModalHeaderWithClose",props:{title:{required:!0,tsType:{name:"string"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onKeyPress:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"e"}],return:{name:"void"}}},description:""}}};const ee=({title:n,titleNext:t="Next",onBack:o,onNext:s,nextDisabled:a=!1})=>e.jsxs("div",{className:u.header,children:[e.jsx("button",{className:u.iconButton,onClick:o,type:"button","aria-label":"Back",children:e.jsx(A,{})}),e.jsx(I,{asChild:!0,children:e.jsx("h2",{className:u.title,children:n})}),e.jsx(d,{variant:"text",onClick:s,disabled:a,fullWidth:!1,children:t})]});ee.__docgenInfo={description:"",methods:[],displayName:"ModalHeaderWithNext",props:{title:{required:!0,tsType:{name:"string"},description:""},titleNext:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Next"',computed:!1}},onBack:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onNext:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},nextDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const{fn:R}=__STORYBOOK_MODULE_TEST__,en={title:"UI/Modal",component:g,parameters:{layout:"centered"}},v={args:{open:!0,onOpenChange:R(),children:e.jsxs("div",{children:[e.jsx("p",{children:"Modal content"}),e.jsx(d,{onClick:R(),children:"cancel"}),e.jsx(d,{onClick:R(),children:"save"})]})}},y={render:()=>{const[n,t]=l.useState(!1),o=()=>{t(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(d,{onClick:()=>t(!0),children:"Open modal"}),e.jsx(g,{size:"sm",onOpenChange:o,open:n,header:e.jsx(F,{title:"Modal title",onClose:o}),children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"24px"},children:[e.jsx("p",{children:"We have sent a link to confirm your email to epam@epam.com"}),e.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"8px"},children:[e.jsx(d,{onClick:o,children:"Cancel"}),e.jsx(d,{onClick:()=>{alert("Save"),t(!1)},children:"Save"})]})]})})]})}},j={render:()=>{const[n,t]=l.useState(!1),o=()=>{t(!1)},s=()=>{alert("Next clicked")},a=()=>{alert("Back clicked")};return e.jsxs(e.Fragment,{children:[e.jsx(d,{onClick:()=>t(!0),children:"Open modal"}),e.jsx(g,{size:"md",onOpenChange:o,open:n,header:e.jsx(ee,{title:"Cropping",onBack:a,onNext:s}),children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"24px"},children:e.jsx("p",{children:"Crop content here"})})})]})}},_={render:()=>{const[n,t]=l.useState(!1),o=()=>{t(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(d,{onClick:()=>t(!0),children:"Open modal"}),e.jsx(g,{size:"lg",onOpenChange:o,open:n,header:e.jsx(F,{title:"2 258 Following",onClose:o}),children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px",padding:"24px"},children:[e.jsx("p",{children:"List of followers"}),[...Array(20).fill(null)].map((s,a)=>e.jsx("div",{children:e.jsxs("p",{children:["user ",a]})},a)),e.jsx("div",{style:{display:"flex",justifyContent:"flex-end",gap:"8px"},children:e.jsx(d,{onClick:o,children:"Close"})})]})})]})}},D={render:()=>{const[n,t]=l.useState(!1),o=()=>{t(!1)};return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>t(!0),children:"Open modal"}),e.jsx(g,{size:"xl",onOpenChange:o,open:n,header:e.jsxs(e.Fragment,{children:[e.jsx(d,{className:u.iconButton,onClick:()=>{alert("Back")},type:"button","aria-label":"Back",children:e.jsx(A,{})}),e.jsx(I,{asChild:!0,children:e.jsx("h2",{className:u.title,children:"Filters"})}),e.jsx(X,{asChild:!0,children:e.jsx(d,{onClick:()=>{alert("Next")},children:"Next"})})]}),children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"24px"},children:[e.jsx("p",{children:"We have sent a link to confirm your email to epam@epam.com"}),e.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"8px"},children:[e.jsx(d,{onClick:o,children:"Cancel"}),e.jsx(d,{onClick:()=>{alert("Save"),t(!1)},children:"Save"})]})]})})]})}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    onOpenChange: fn(),
    children: <div>
        <p>Modal content</p>
        <Button onClick={fn()}>cancel</Button>
        <Button onClick={fn()}>save</Button>
      </div>
  }
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};const nn=["Primary","ConfirmModal","CropModal","FollowersModal","FiltersModal"];export{y as ConfirmModal,j as CropModal,D as FiltersModal,_ as FollowersModal,v as Primary,nn as __namedExportsOrder,en as default};
