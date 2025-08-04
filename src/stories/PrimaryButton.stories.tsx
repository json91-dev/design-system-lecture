import type { Meta, StoryObj } from "@storybook/react-vite";

import PrimaryButton from "../components/PrimaryButton";

const meta = {
  title: "Button/PrimaryButton",
  component: PrimaryButton,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-[360px]">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked", description: "버튼 클릭 이벤트" },
    children: { control: "text", description: "버튼 텍스트" },
    theme: {
      control: "select",
      options: ["dark", "light", "social", "text"],
      description: "버튼 테마",
    },
    disabled: {
      control: "boolean",
      description: "버튼 비활성화 여부",
    },
  },
} satisfies Meta<typeof PrimaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {
    children: "Button",
    onClick: () => {},
    theme: "dark",
    disabled: false,
  },
};

export const Light: Story = {
  args: {
    children: "Button",
    onClick: () => {},
    theme: "light",
    disabled: false,
  },
};

export const Text: Story = {
  args: {
    children: "Button",
    onClick: () => {},
    theme: "text",
    disabled: false,
  },
};

export const Social: Story = {
  args: {
    children: "Button",
    onClick: () => {},
    theme: "social",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: "Button",
    onClick: () => {},
    theme: "dark",
    disabled: true,
  },
};
