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
  cancellationOptions: CancellationOption;
}

interface HotelData {
  id: string;
  property: Property;
  offer: Offer;
}

export type {
  Property,
  PreviewImage,
  Rating,
  Promotion,
  Offer,
  Price,
  CancellationOption,
  HotelData
}