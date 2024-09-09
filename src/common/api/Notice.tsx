import axios from "axios";

async function mainNews(page: number) {
  const size = 7;
  try {
    const res = await axios.get(
      `http://3.39.15.13:80/notice/mainNews?$page=${page}&limit=${size}`
    );
    return res.data;
  } catch (error: any) {
    console.error(error);
  }
}

async function mainNewsOne(page: number, query: string) {
  const size = 7;
  try {
    const res = await axios.get(
      `http://3.39.15.13:80/notice/mainNews/search?query=${query}&page=${page}&limit=${size}`
    );
    return res.data;
  } catch (error: any) {
    console.error(error);
  }
}

async function noticeDetail(id: string) {
  try {
    const res = await axios.get(`http://3.39.15.13:80/notice/mainNews/${id}`);
    return res.data;
  } catch (error: any) {
    console.error(error);
  }
}

async function customer(page: number) {
  const size = 7;
  try {
    const res = await axios.get(
      `http://3.39.15.13:80/notice/customer?$page=${page}&limit=${size}`
    );
    return res.data;
  } catch (error: any) {
    console.error(error);
  }
}
async function customerOne(page: number, query: string) {
  const size = 7;
  try {
    const res = await axios.get(
      `http://3.39.15.13:80/notice/customer/search?query=${query}&page=${page}&limit=${size}`
    );
    return res.data;
  } catch (error: any) {
    console.error(error);
  }
}
async function customerDetail(id: string) {
  try {
    const res = await axios.get(`http://3.39.15.13:80/notice/customer/${id}`);
    return res.data;
  } catch (error: any) {
    console.error(error);
  }
}

async function donation(page: number) {
  const size = 7;
  try {
    const res = await axios.get(
      `http://3.39.15.13:80/mediacenter/donation?$page=${page}&limit=${size}`
    );
    return res.data;
  } catch (error: any) {
    console.error(error);
  }
}

async function donationOne(page: number, query: string) {
  const size = 7;
  try {
    const res = await axios.get(
      `http://3.39.15.13:80/notice/mediacenter/donation?query=${query}&page=${page}&limit=${size}`
    );
    return res.data;
  } catch (error: any) {
    console.error(error);
  }
}
async function donationDetail(id: string) {
  try {
    const res = await axios.get(
      `http://3.39.15.13:80/mediacenter/donation/${id}`
    );
    return res.data;
  } catch (error: any) {
    console.error(error);
  }
}

export {
  mainNews,
  mainNewsOne,
  customer,
  customerOne,
  donation,
  donationOne,
  noticeDetail,
  customerDetail,
  donationDetail,
};
