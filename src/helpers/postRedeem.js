import { urlRedeem, headers } from "./variables";

async function postRedeem(productId) {
  try {
    const response = await fetch(urlRedeem, {
      method: "POST",
      headers,
      body: JSON.stringify({ productId: productId }),
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default postRedeem;
