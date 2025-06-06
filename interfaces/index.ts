export type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount?: string; // Optional, as not all properties may have a discount
}

export interface PropertyType {
  type: string;
  icon: string;
}
