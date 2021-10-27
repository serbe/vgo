<template>
  <td>
    <template v-if="type === 'text'">{{ value }}</template>
    <template v-else-if="type === 'array'">
      <span v-for="(item, index) in value" :key="index">
        {{ item }}
        <br />
      </span>
    </template>
    <template v-else-if="type === 'phones'">
      <span v-for="(item, index) in value" :key="index">
        {{ telephone(item) }}
        <br />
      </span>
    </template>
    <template v-else-if="type === 'checkbox'">
      <input type="checkbox" disabled :checked="value" />
    </template>
    <template v-else>{{ value }}</template>
  </td>
</template>

<script>
export default {
  name: "BulmaTableTr",
  props: {
    type: {
      type: String,
      default: "text",
    },
    value: {
      required: false,
    },
    cellClass: Array,
  },
  methods: {
    telephone(value) {
      if (value) {
        let v = value.toString(10);
        if (v.length > 0) {
          v = v.replace(/[^0-9]/g, "");
          if (v.length === 10) {
            v = v.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, "+7 $1 $2-$3-$4");
          }
          if (v.length === 11) {
            if (v[0] === "8") {
              v = `7${v.slice(1)}`;
            }
            v = v.replace(
              /(\d)(\d{3})(\d{3})(\d{2})(\d{2})/,
              "+$1 $2 $3-$4-$5"
            );
          }
          if (v.length === 7) {
            v = v.replace(/(\d{3})(\d{2})(\d{2})/, "$1-$2-$3");
          }
        }
        return v;
      }
    },
  },
};
</script>
