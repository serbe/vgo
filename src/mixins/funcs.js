export default {
  methods: {
    checkArray(values) {
      let newValues = values ? values.filter((e) => e !== "") : [];
      newValues.push("");
      return newValues;
    },
    stringArray(values) {
      return values.filter((e) => e !== "");
    },
    numberArray(values) {
      return values.filter((e) => e !== "").map((e) => parseInt(e, 10));
    },
    close() {
      this.$router.back();
    },
  },
};
