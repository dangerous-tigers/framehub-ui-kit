import type { Meta, StoryObj } from "@storybook/react-vite";

import { Scroll } from "./Scroll";

const meta: Meta<typeof Scroll> = {
  title: "UI/Scroll",
  component: Scroll,
};

export default meta;

type Story = StoryObj<typeof Scroll>;

const items = Array.from({ length: 24 }, (_, index) => `Item ${index + 1}`);

export const Primary: Story = {
  render: () => (
    <div
      style={{ height: "280px", width: "320px", border: "1px solid #3f3f46" }}
    >
      <Scroll>
        <div style={{ padding: "12px", display: "grid", gap: "8px" }}>
          {items.map((item) => (
            <div
              key={item}
              style={{
                padding: "8px 10px",
                borderRadius: "6px",
                background: "#1f1f23",
                color: "#f4f4f5",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </Scroll>
    </div>
  ),
};

export const TextContent: Story = {
  render: () => (
    <div
      style={{ height: "240px", width: "540px", border: "1px solid #3f3f46" }}
    >
      <Scroll>
        <div style={{ padding: "16px", color: "#e4e4e7", lineHeight: 1.5 }}>
          {Array.from({ length: 14 }, (_, index) => (
            <p key={index}>
              Scroll story paragraph {index + 1}. This content is intentionally
              long to demonstrate vertical scrolling behavior inside the
              component viewport.
            </p>
          ))}
        </div>
      </Scroll>
    </div>
  ),
};
