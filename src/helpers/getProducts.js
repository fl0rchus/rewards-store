import { headers, urlProducts } from "./variables";

export async function getProducts() {
  try {
    const response = await fetch(urlProducts, { method: "GET", headers });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default getProducts;
