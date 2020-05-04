import fetch from "node-fetch";

export async function getSortedPostsData() {
  const API =
    "https://hifi-corner.herokuapp.com/api/v1/products?minPrice=100&maxPrice=8000";
  const res = await fetch(API);
  return res.json();
}
