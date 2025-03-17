import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  title: 'Components/Tooltip',
  component: 'my-tooltip',
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  name: 'default state',
  args: {},
  render: () => {
    return `<my-tooltip text="Some test text for the tooltip">
      <p>Some child text!</p>
    </my-tooltip>`;
  },
};
