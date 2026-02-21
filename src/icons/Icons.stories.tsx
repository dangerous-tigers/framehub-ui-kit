import * as Icons from "icons";
import type { ComponentType, SVGProps } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

type IconItem = {
  name: string;
  Component: IconComponent;
};

const iconEntries = Object.entries(Icons) as [string, IconComponent][];

const iconItems: IconItem[] = iconEntries
  .map(([name, Component]) => ({ name, Component }))
  .sort((a, b) => a.name.localeCompare(b.name));

const meta = {
  title: "Icons/All",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Gallery: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))",
        gap: "12px",
        padding: "16px",
      }}
    >
      {iconItems.map(({ name, Component }) => (
        <div
          key={name}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            border: "1px solid #333",
            borderRadius: "2px",
            padding: "10px",
            backgroundColor: "#111",
          }}
        >
          <Component style={{ fontSize: "24px", flexShrink: 0 }} />
          <span style={{ fontSize: "12px", lineHeight: 1.2 }}>{name}</span>
        </div>
      ))}
    </div>
  ),
};
