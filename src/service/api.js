import axios from "axios";

async function getData() {
  // const res = await axios.get('http://localhost:3000/api/data')
  const res = await axios.get(
    "https://superfon-api-vercel.vercel.app/api/data",
  );
  return res.data;
}
async function getNavLinks() {
  // const res = await axios.get('http://localhost:3000/api/navlinks')
  const res = await axios.get(
    "https://superfon-api-vercel.vercel.app/api/navlinks",
  );
  return res.data;
}
async function getMenuItems() {
  // const res = await axios.get('http://localhost:3000/api/menuitems')
  const res = await axios.get(
    "https://superfon-api-vercel.vercel.app/api/menuitems",
  );
  return res.data;
}
async function getStoreData() {
  // const res = await axios.get('http://localhost:3000/api/storelocation')
  const res = await axios.get(
    "https://superfon-api-vercel.vercel.app/api/storelocation",
  );
  return res.data;
}

async function getData3() {
  // const res = await axios.get('http://localhost:3000/api/alldata3')
  const res = await axios.get(
    "https://superfon-api-vercel.vercel.app/api/alldata3",
  );
  return res.data;
}

export { getData, getData3, getNavLinks, getMenuItems, getStoreData };
