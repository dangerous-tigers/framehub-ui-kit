import { useState } from "react";
import { fn } from "storybook/test";

import { ArrowIosBackOutline } from "icons";
import * as Dialog from "@radix-ui/react-dialog";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { Modal, type Props } from "./BaseModal";
import { ModalHeaderWithClose } from "./ModalHeaderWithClose";
import { ModalHeaderWithNext } from "./ModalHeaderWithNext";

import styles from "./ModalHeader.module.scss";
import { Button } from "../button/Button";

const meta = {
  title: "UI/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    open: true,
    onOpenChange: fn(),
    children: (
      <div>
        <p>Modal content</p>
        <Button onClick={fn()}>cancel</Button>
        <Button onClick={fn()}>save</Button>
      </div>
    ),
  },
};

export const ConfirmModal: StoryObj<Props> = {
  render: () => {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
      setOpen(false);
    };

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open modal</Button>
        <Modal
          size="sm"
          onOpenChange={handleClose}
          open={open}
          header={
            <ModalHeaderWithClose title="Modal title" onClose={handleClose} />
          }
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              padding: "24px",
            }}
          >
            <p>We have sent a link to confirm your email to epam@epam.com</p>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "8px",
              }}
            >
              <Button onClick={handleClose}>Cancel</Button>
              <Button
                onClick={() => {
                  alert("Save");
                  setOpen(false);
                }}
              >
                Save
              </Button>
            </div>
          </div>
        </Modal>
      </>
    );
  },
};

// Модалка с кнопками Back и Next (для crop/filters)
export const CropModal: StoryObj<Props> = {
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

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open modal</Button>
        <Modal
          size="md"
          onOpenChange={handleClose}
          open={open}
          header={
            <ModalHeaderWithNext
              title="Cropping"
              onBack={handleBack}
              onNext={handleNext}
            />
          }
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              padding: "24px",
            }}
          >
            <p>Crop content here</p>
          </div>
        </Modal>
      </>
    );
  },
};

// Большая модалка со списком (followers)
export const FollowersModal: StoryObj<Props> = {
  render: () => {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
      setOpen(false);
    };

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open modal</Button>
        <Modal
          size="lg"
          onOpenChange={handleClose}
          open={open}
          header={
            <ModalHeaderWithClose
              title="2 258 Following"
              onClose={handleClose}
            />
          }
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              padding: "24px",
            }}
          >
            <p>List of followers</p>
            {[...Array(20).fill(null)].map((_, index) => (
              <div key={index}>
                <p>user {index}</p>
              </div>
            ))}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "8px",
              }}
            >
              <Button onClick={handleClose}>Close</Button>
            </div>
          </div>
        </Modal>
      </>
    );
  },
};
export const FiltersModal: StoryObj<Props> = {
  render: () => {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
      setOpen(false);
    };

    return (
      <>
        <button onClick={() => setOpen(true)}>Open modal</button>
        <Modal
          size="xl"
          onOpenChange={handleClose}
          open={open}
          header={
            <>
              <Button
                className={styles.iconButton}
                onClick={() => {
                  alert("Back");
                }}
                type="button"
                aria-label="Back"
              >
                <ArrowIosBackOutline />
              </Button>
              <Dialog.Title asChild>
                <h2 className={styles.title}>{"Filters"}</h2>
              </Dialog.Title>
              <Dialog.Close asChild>
                <Button
                  onClick={() => {
                    alert("Next");
                  }}
                >
                  Next
                </Button>
              </Dialog.Close>
            </>
          }
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              padding: "24px",
            }}
          >
            <p>We have sent a link to confirm your email to epam@epam.com</p>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "8px",
              }}
            >
              <Button onClick={handleClose}>Cancel</Button>
              <Button
                onClick={() => {
                  alert("Save");
                  setOpen(false);
                }}
              >
                Save
              </Button>
            </div>
          </div>
        </Modal>
      </>
    );
  },
};
