import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

const fetcher = (url) => axiosInstance.get(url).then((res) => res.data);

export default fetcher;
