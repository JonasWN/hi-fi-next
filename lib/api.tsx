import fetch from "node-fetch";

interface Iobject {
  category: string;
  description: string;
  images: string;
  make: string;
  model: string;
  price: number;
  sku: string;
}

export const getData = async (url: string): Promise<Iobject[]> => {
  const res = await fetch(url);
  const data = await res.json();

  return data;
};
