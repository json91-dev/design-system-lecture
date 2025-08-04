import type { Meta, StoryObj } from "@storybook/react-vite";

import IconButton from "../components/IconButton";
import { fn } from "@storybook/test";

const meta = {
  title: "Button/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    alt: { control: "text", description: "아이콘 버튼의 대체 텍스트" },
    iconPath: { control: "text", description: "아이콘 이미지 경로" },
    onClick: { action: "clicked", description: "아이콘 버튼 클릭 이벤트" },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    alt: "아이콘 버튼",
    iconPath: "/icons/ic-delete-dark.svg",
  },
};
