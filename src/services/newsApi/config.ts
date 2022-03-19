import Axios from "axios";
import { KEY_NEWS_API } from "../../configs/keyNewsApi";

export const newsApi = Axios.create({
  baseURL: "https://newsapi.org/v2",
  headers: {
    Authorization: KEY_NEWS_API,
  },
});
