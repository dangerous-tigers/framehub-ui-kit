import { Meta, StoryObj } from "@storybook/react-vite";
import { SidebarItem } from "./SidebarItem";
import { HomeOutline } from "../../icons";

const meta = {
  title: "UI/SidebarItem",
  component: SidebarItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof SidebarItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultSidebarItem: Story = {
  args: {
    label: "Home",
    href: "/home",
    pathname: "/home",
    component: <HomeOutline />,
    isMobile: false,
  },
  render: (args) => <SidebarItem {...args} />,
};

export const MobileSidebarItem: Story = {
  args: {
    label: "Home",
    href: "/home",
    pathname: "/home",
    component: <HomeOutline />,
    isMobile: true,
  },
  render: (args) => <SidebarItem {...args} isMobile={true} />,
};
