import axios from "axios";

async function policy(page: number) {
  const size = 7;
  try {
    const res = await axios.get(
      `http://3.39.15.13:80/mediacenter/policy?$page=${page}&limit=${size}`
    );
    return res.data;
  } catch (error: any) {
    console.error(error);
  }
}
async function policyOne(page: number, query: string) {
  const size = 7;
  try {
    const res = await axios.get(
      `http://3.39.15.13:80/mediacenter/policy/search?query=${query}&page=${page}&limit=${size}`
    );
    return res.data;
  } catch (error: any) {
    console.error(error);
  }
}

export { policy, policyOne };
