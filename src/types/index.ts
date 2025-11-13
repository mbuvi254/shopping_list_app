export type Priority = "High" | "Medium" | "Low";

export interface Item {
  name: string;
  price: number;
  qty: number;
  priority: Priority;
}
