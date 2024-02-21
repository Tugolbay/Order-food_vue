export interface Product {
  title: string;
  description: string;
  price: number;
  quantity: number;
}

export const data: Product[] = [
  {
    title: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
    quantity: 1,
  },
  {
    title: "Schnitzel",
    description: "A german specialty!",
    price: 16.0,
    quantity: 1,
  },
  {
    title: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
    quantity: 1,
  },
  {
    title: "Green Bowl",
    description: "Healthy...and green...",
    price: 19.99,
    quantity: 1,
  },
];
