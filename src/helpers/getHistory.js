import { urlHistory, headers } from "./variables";

async function getHistory() {
  try {
    const response = await fetch(urlHistory, { method: "GET", headers });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default getHistory;
