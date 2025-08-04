import type { Meta, StoryObj } from "@storybook/react-vite";

import TagList from "../components/TagList";

const meta = {
  title: "Button/TagList",
  component: TagList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    tagList: {
      control: "object",
      description: "태그 목록",
      defaultValue: ["tag1", "tag2", "tag3"],
    },
    onTagClick: {
      action: "clicked",
      description: "태그 클릭 이벤트",
      defaultValue: () => {},
    },
  },
} satisfies Meta<typeof TagList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tagList: ["tag1", "tag2", "tag3"],
    onTagClick: () => {},
  },
};
