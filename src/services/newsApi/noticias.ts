import { newsApi } from "./config";

export const getTopHeadlines = async () => {
  try {
    const response = await fetch(
      "https://newsapi.org/v2/top-headlines?country=br",
      {
        method: "GET",
        headers: {
          "x-api-key": "a7c47d67d09b410298a02f830d42c34a",
        },
      }
    );

    const body = await response.json();

    console.log(body);

    return body; // json
  } catch (error) {
    return {
      message: "Erro ao tentar consumir api",
    };
  }
};
