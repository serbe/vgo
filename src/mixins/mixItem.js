import request from "@/request";

export default {
  data() {
    return {
      fetched: false,
    };
  },
  methods: {
    fetchItem(name, response, arrays, values, childrens) {
      if (!this.fetched) {
        request.get(`${name}/item/${this.$route.params.id}`).then((r) => {
          this[name] = this.removeNull(r.data[response]);
          arrays.forEach((e) => {
            this[name][e] = this.checkArray(this[name][e]);
          });
          values.forEach((e) => {
            this.fetchSelect(name, `${e}s`, e, `${e}_id`);
          });
          childrens.forEach((e) => {
            this.fetchChildren(name, e[0], e[1]);
          });
        });
      }
    },
    fetchSelect(root, list, item, value) {
      request.get(`${item}/select`).then((r) => {
        this[list] = r.data.SelectItem;
        this.setSelect(root, list, item, value);
      });
    },
    fetchChildren(root, children, name) {
      request.get(`${root}/list/${children}/${this[root].id}`).then((r) => {
        this[`${children}s`] = r.data[name];
      });
    },
    setSelect(root, list, item, value) {
      this[root][item] = this[list].find((v) => v.id === this[root][value]);
    },
    removeNull(values) {
      Object.keys(values).forEach((key) => {
        if (values[key] === null) {
          values[key] = "";
        }
      });
      return values;
    },
    postItem(url, data) {
      request.post(url, data).then().catch();
      // .catch(e => console.log("error post", e));
    },
    cleanFields(values) {
      Object.keys(values).forEach((key) => {
        if (
          !Array.isArray(values[key]) &&
          (values[key] === undefined || values[key] === "")
        ) {
          delete values[key];
        }
      });
      return values;
    },
    submitItem(name, jsonName, stringChildrens, numberChildrens) {
      let values = {};
      values[jsonName] = this[name];
      stringChildrens.forEach((e) => {
        values[jsonName][e] = values[jsonName][e].filter((e) => e !== "");
      });
      numberChildrens.forEach((e) => {
        values[jsonName][e] = values[jsonName][e]
          .filter((e) => e !== "")
          .map((e) => parseInt(e, 10));
      });
      values[jsonName] = this.cleanFields(values[jsonName]);
      let url = `${name}/item/${this.$route.params.id}`;
      this.postItem(url, values);
      this.close();
    },
  },
};
