import axios from "axios";

async function notice() {
  try {
    const res = await axios.get(`http://3.39.15.13:80/introduction/hello`);
    return res.data;
  } catch (error: any) {
    console.error(error);
  }
}

export { notice };
