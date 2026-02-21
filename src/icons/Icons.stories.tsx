import * as Icons from "icons";
import { useEffect, useState, type ComponentType, type SVGProps } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "components";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

type IconItem = {
  name: string;
  Component: IconComponent;
  componentName: string;
};

const iconEntries = Object.entries(Icons) as [string, IconComponent][];

const iconItems: IconItem[] = iconEntries
  .map(([name, Component]) => ({
    name: `${name}`,
    Component,
    componentName: `<${name} />`,
  }))
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
  render: () => {
    const [copiedIcon, setCopiedIcon] = useState<string | null>(null);
    const [isHovered, setIsHovered] = useState("");

    useEffect(() => {
      if (!copiedIcon) return;

      const id = setTimeout(() => setCopiedIcon(null), 2000);
      return () => clearTimeout(id);
    }, [copiedIcon]);
    return (
      <div>
        {copiedIcon && (
          <div
            style={{
              position: "fixed",
              top: "16px",
              right: "16px",
              backgroundColor: "#333",
              color: "white",
              padding: "8px 12px",
              borderRadius: "4px",
              zIndex: 1000,
            }}
          >
            Скопировано: {copiedIcon}
          </div>
        )}
        <h2 style={{ textAlign: "center" }}>
          Нажмите на иконку, чтобы скопировать код
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))",
            gap: "12px",
            padding: "16px",
          }}
        >
          {iconItems.map(({ name, Component, componentName }) => (
            <Button
              key={name}
              variant="outline"
              onMouseEnter={() => setIsHovered(name)}
              onMouseLeave={() => setIsHovered("")}
              onClick={() => {
                navigator.clipboard.writeText(componentName);
                setCopiedIcon(componentName);
                setTimeout(() => setCopiedIcon(null), 2000);
              }}
              style={{
                padding: 0,
                border: "none",
                color: "white",
              }}
            >
              <div
                key={name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  border: "1px solid #333",
                  borderRadius: "2px",
                  padding: "10px",
                  backgroundColor: isHovered === name ? "#333" : "#222",
                }}
              >
                <Component style={{ fontSize: "24px", flexShrink: 0 }} />
                <span style={{ fontSize: "11px", lineHeight: 1.2 }}>
                  {name}
                </span>
              </div>
            </Button>
          ))}
        </div>
      </div>
    );
  },
};
