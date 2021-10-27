import request from "@/request";

export default {
  data() {
    return {
      fetched: false,
      config: {
        headers: { "Cache-Control": "no-cache" },
        baseURL: "/api/go/",
      },
      list: [],
    };
  },
  methods: {
    fetchData(url, name) {
      if (!name) {
        name = url;
      }
      if (!this.fetched) {
        request.get(url).then((r) => {
          this.list = this.createList(r.data[name]);
          this.fetched = true;
        });
      }
    },
    fetchShortData(url, name) {
      if (!name) {
        name = url;
      }
      request.get(url).then((r) => {
        this[name] = r.data[name];
      });
    },
  },
};
