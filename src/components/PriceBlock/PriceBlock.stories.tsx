import { Meta, StoryObj } from '@storybook/react';
import PriceBlock from './PriceBlock.component';

const meta: Meta<typeof PriceBlock> = {
  title: 'Components/PriceBlock',
  component: PriceBlock,
  argTypes: {
    currency: {
      type: 'string'
    },
    amount: {
      type: 'number'
    },
    saving: {
      type: 'number'
    }
  }
};
export default meta;

type Story = StoryObj<typeof PriceBlock>;

export const PriceBlockComponent: Story = {
  args: {
    currency: 'AUD',
    amount: 329,
    saving: 30
  },
};