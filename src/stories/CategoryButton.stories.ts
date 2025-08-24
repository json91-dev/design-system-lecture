import type { Meta, StoryObj } from "@storybook/react-vite";

import CategoryButton from "../components/CategoryButton";
import { fn } from "@storybook/test";

const meta = {
  title: "Button/CategoryButton",
  component: CategoryButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    iconAlt: { control: "text", description: "아이콘 버튼의 대체 텍스트" },
    iconPath: { control: "text", description: "아이콘 이미지 경로" },
    onClick: { action: "clicked", description: "아이콘 버튼 클릭 이벤트" },
    text: { control: "text", description: "버튼 텍스트" },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof CategoryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconAlt: "icon",
    text: "카테고리",
    iconPath: "https://kr.object.ncloudstorage.com/icons/ic-category.svg",
    onClick: fn(),
  },
};
