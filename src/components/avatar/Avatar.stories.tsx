import { Avatar } from "./Avatar";
import { Meta, StoryObj } from "@storybook/react-vite";
import { action } from "storybook/actions";

const meta: Meta<typeof Avatar> = {
  title: "UI/Avatar",
  component: Avatar,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["xs", "s", "m", "l", "xl", "xxl"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const XS: Story = {
  args: {
    size: "xs",
  },
  render: (args) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar {...args} />
      POST LIKE
    </div>
  ),
};

export const S: Story = {
  args: {
    size: "s",
  },
  render: (args) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar {...args} />
      MAIN SIZE
    </div>
  ),
};

export const M: Story = {
  args: {
    size: "m",
  },
  render: (args) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar {...args} />
      MESSANGER
    </div>
  ),
};

export const L: Story = {
  args: {
    size: "l",
  },
  render: (args) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar {...args} />
      ADMNIN
    </div>
  ),
};

export const XL: Story = {
  args: {
    size: "xl",
  },
  render: (args) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar {...args} />
      PROFILE SETTINGS
    </div>
  ),
};

export const XXL: Story = {
  args: {
    size: "xxl",
  },
  render: (args) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar {...args} />
      PROFILE
    </div>
  ),
};
