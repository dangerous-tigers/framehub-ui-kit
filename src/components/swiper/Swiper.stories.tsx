// Tabs.stories.tsx
import React from "react";

import { Meta, StoryObj } from "@storybook/react-vite";
import { Swiper } from "./Swiper";

const mockSlides = [
  <div
    style={{
      backgroundColor: "var(--red-500)",
      height: "200px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      fontSize: "24px",
    }}
  >
    Slide 1
  </div>,
  <div
    style={{
      backgroundColor: "var(--green-500)",
      height: "200px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      fontSize: "24px",
    }}
  >
    Slide 2
  </div>,
];

const meta: Meta<typeof Swiper> = {
  title: "UI/Swiper",
  component: Swiper,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Swiper>;

export const Default: Story = {
  args: {
    slides: mockSlides,
  },
};
