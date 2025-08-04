import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "@storybook/test";

import DefaultTextField from "../components/DefaultTextField";

const meta = {
  title: "TextFields/DefaultTextField",
  component: DefaultTextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    iconAlt: { control: "text", description: "아이콘 버튼의 대체 텍스트" },
    iconPath: { control: "text", description: "아이콘 이미지 경로" },
    onIconClick: { action: "clicked", description: "아이콘 버튼 클릭 이벤트" },
    errorMessage: { control: "text", description: "텍스트를 확인해주세요." },
    placeholder: { control: "text", description: "텍스트를 입력해주세요." },
    id: { control: "text", description: "텍스트 필드의 id" },
    onChange: { action: "changed", description: "입력 변경 이벤트" },
    value: { control: "text", description: "" },
    isError: { control: "boolean", description: "에러 상태" },
  },
  args: {
    onChange: fn(),
    onIconClick: fn(),
  },
} satisfies Meta<typeof DefaultTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    errorMessage: "에러 메세지",
    iconPath: "/icons/ic-delete-dark.svg",
    iconAlt: "아이콘 버튼",
    placeholder: "텍스트를 입력해주세요.",
    value: "",
    isError: false,
    id: "email",
  },
};
