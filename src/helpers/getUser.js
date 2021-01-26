import { urlUser, headers } from "./variables";

async function getUser() {
  try {
    const response = await fetch(urlUser, { method: "GET", headers });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default getUser;
