import { Meta, StoryObj } from '@storybook/react';
import HotelCard from './HotelCard.component';

const meta: Meta<typeof HotelCard> = {
  title: 'Components/HotelCard',
  component: HotelCard,
  argTypes: {
    imageUrl: {
      type: 'string'
    },
    promotionTitle: {
      type: 'string'
    },
    title: {
      type: 'string'
    },
    address: {
      type: 'string'
    },
    name: {
      type: 'string'
    },
    canCancellation: {
      type: 'boolean'
    },
    rateType: {
      type: 'string'
    },
    rateValue: {
      type: 'number'
    },
    currency: {
      type: 'string'
    },
    amount: {
      type: 'number'
    },
    saving: {
      type: 'number'
    },
  }
};

export default meta;

type Story = StoryObj<typeof HotelCard>;

export const HotelCardComponent: Story = {
  args: {
    imageUrl: 'https://unsplash.it/145/125/?random',
    promotionTitle: 'Exclusive Deal',
    title: 'Courtyard by Marriott Sydney-North Ryde',
    address: '7-11 Talavera Rd, North Ryde',
    name: 'Deluxe Balcony Room',
    canCancellation: true,
    rateType: 'star',
    rateValue: 4.5,
    currency: 'AUD',
    amount: 329,
    saving: 30,
  }
};