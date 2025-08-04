import type { Meta, StoryObj } from "@storybook/react-vite";

import TagButton from "../components/TagButton";

const meta = {
  title: "Button/TagButton",
  component: TagButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "버튼의 텍스트",
      defaultValue: "button",
    },
    onClick: {
      action: "clicked",
      description: "태그 버튼 클릭 이벤트",
      defaultValue: () => {},
    },
    isChecked: {
      control: "boolean",
      description: "태그 버튼 체크 여부",
      defaultValue: false,
    },
  },
} satisfies Meta<typeof TagButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "button",
    onClick: () => {},
    isChecked: false,
  },
};
