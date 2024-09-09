import axios from "axios";

async function mainBuisness(page: number) {
  const size = 7;
  try {
    const res = await axios.get(
      `http://3.39.15.13:80/mediacenter/mainBuisness?$page=${page}&limit=${size}`
    );
    return res.data;
  } catch (error: any) {
    console.error(error);
  }
}
async function activityOne(page: number, query: string) {
  const size = 7;
  try {
    const res = await axios.get(
      `http://3.39.15.13:80/mediacenter/mainBuisness/search?query=${query}&page=${page}&limit=${size}`
    );
    return res.data;
  } catch (error: any) {
    console.error(error);
  }
}

async function activityDetail(id: string) {
  try {
    const res = await axios.get(
      `http://3.39.15.13:80/mediacenter/mainBuisness/${id}`
    );
    return res.data;
  } catch (error: any) {
    console.error(error);
  }
}

export { mainBuisness, activityOne, activityDetail };
