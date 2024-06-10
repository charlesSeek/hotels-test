interface PreviewImage {
  url: string;
  caption: string;
  imageType: string;
}

interface Rating {
  ratingValue: number;
  ratingType: 'star' | 'self';
}

interface Property {
  propertyId: string;
  title: string;
  address: string[];
  previewImage: PreviewImage;
  rating: Rating;
}

interface Promotion {
  title: string;
  type: string;
}

interface Price {
  amount: number;
  currency: string;
}

interface CancellationOption {
  cancellationType: 'NOT_REFUNDABLE' | 'FREE_CANCELLATION'
}

interface Offer {
  promotion: Promotion;
  name: string;
  displayPrice: Price;
  savings: Price | null;
  cancellationOption: CancellationOption;
}

interface HotelData {
  id: string;
  property: Property;
  offer: Offer;
}

type HotelProps = {
  id: string;
  imageUrl: string;
  promotionTitle: string;
  title: string;
  address: string;
  name: string;
  canCancellation: boolean;
  rateType: 'self' | 'star';
  rateValue: number;
  currency: string;
  amount: number;
  saving: number | null;
}

export type {
  Property,
  PreviewImage,
  Rating,
  Promotion,
  Offer,
  Price,
  CancellationOption,
  HotelData,
  HotelProps
}