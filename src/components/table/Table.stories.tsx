import { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";

import { Select } from "../select/Select";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./Table";

const roleOptions = [
  { value: "Admin", label: "Admin" },
  { value: "Editor", label: "Editor" },
  { value: "User", label: "User" },
];

const meta = {
  title: "UI/Table",
  component: Table,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Static: Story = {
  render: () => (
    <div style={{ width: "760px" }}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>Alex Carter</TableCell>
            <TableCell>alex@site.dev</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2</TableCell>
            <TableCell>Emma Flores</TableCell>
            <TableCell>emma@site.dev</TableCell>
            <TableCell>Pending</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>3</TableCell>
            <TableCell>Mark Stone</TableCell>
            <TableCell>mark@site.dev</TableCell>
            <TableCell>Blocked</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  ),
};

const TableWithSelect = () => {
  const [alexRole, setAlexRole] = useState("Admin");
  const [emmaRole, setEmmaRole] = useState("Editor");
  const [markRole, setMarkRole] = useState("User");

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>1</TableCell>
          <TableCell>Alex Carter</TableCell>
          <TableCell>alex@site.dev</TableCell>
          <TableCell>
            <Select
              options={roleOptions}
              value={alexRole}
              onValueChange={setAlexRole}
              disabled={false}
              variant={"text"}
              width={"96px"}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>2</TableCell>
          <TableCell>Emma Flores</TableCell>
          <TableCell>emma@site.dev</TableCell>
          <TableCell>
            <Select
              options={roleOptions}
              value={emmaRole}
              onValueChange={setEmmaRole}
              disabled={false}
              variant={"text"}
              width={"96px"}
            />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>3</TableCell>
          <TableCell>Mark Stone</TableCell>
          <TableCell>mark@site.dev</TableCell>
          <TableCell>
            <Select
              options={roleOptions}
              value={markRole}
              onValueChange={setMarkRole}
              disabled={false}
              variant={"text"}
              width={"96px"}
            />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export const WithSelect: Story = {
  render: () => <TableWithSelect />,
};
