import { Meta, StoryObj } from '@storybook/react';
import Rating from './Rating.component';

const meta: Meta<typeof Rating> = {
  title: 'Components/Rating',
  component: Rating,
  argTypes: {
    value: {
      control: {
        type: 'number',
        min: 0,
        max: 5,
      },
    },
    type: {
      control: {
        type: 'radio',
        options: ['self', 'star'],
      },
    },
  },
}

export default meta;

type Story = StoryObj<typeof Rating>;

export const RatingComponent: Story = {
  args: {
    value: 3,
    type: 'self'
  }
};
