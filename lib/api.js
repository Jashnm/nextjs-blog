const fetcher = (url) => fetch(url).then((res) => res.json());
const API = process.env.API_URL;

export default async (apiUrl) => {
  return await fetcher(`${API}/${apiUrl}`);
};
