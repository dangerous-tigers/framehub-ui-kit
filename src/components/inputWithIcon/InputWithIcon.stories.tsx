// Tabs.stories.tsx
import React from "react";

import { Meta, StoryObj } from "@storybook/react-vite";
import { InputWithIcon } from "./InputWithIcon";
import { Search } from "../../icons";

const meta: Meta<typeof InputWithIcon> = {
  title: "UI/InputWithIcon",
  component: InputWithIcon,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof InputWithIcon>;

export const SearchInput: Story = {
  args: {
    placeholder: "Whith search icon",
    icon: <Search />,
  },
};
