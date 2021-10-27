let baseURL = "/api/go/";

export default {
  get(url) {
    const settings = {
      method: "GET",
      headers: { "Cache-Control": "no-cache" },
    };
    return fetch(baseURL + url, settings).then((r) => r.json());
  },
  post(url, data) {
    const settings = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    return fetch(baseURL + url, settings).then((r) => r.json());
  },
};
