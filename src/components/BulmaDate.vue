<template>
  <div class="field">
    <label v-if="getLabel" class="label" key="DateLabel">{{ getLabel }}</label>
    <div class="field has-addons">
      <p class="control">
        <span class="select">
          <select v-model="day" @change="changeDate">
            <option v-for="item in dayList" :key="item" :value="item">
              {{ item }}
            </option>
          </select>
        </span>
      </p>
      <p class="control">
        <span class="select">
          <select v-model="month" @change="changeDate">
            <option v-for="item in monthList" :key="item" :value="item">
              {{ item }}
            </option>
          </select>
        </span>
      </p>
      <p class="control">
        <span class="select">
          <select v-model="year" @change="changeDate">
            <option v-for="item in yearList" :key="item" :value="item">
              {{ item }}
            </option>
          </select>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BulmaDate',
  props: {
    value: {
      type: String,
      required: true,
    },
    label: String,
  },
  data() {
    return {
      year: 0,
      month: 0,
      day: 0,
    };
  },
  watch: {
    value(val) {
      const arr = val.split('-');
      if (arr.length === 3) {
        [this.year, this.month, this.day] = arr;
      }
    },
  },
  computed: {
    getLabel() {
      return this.label ? this.label : false;
    },
    yearList() {
      const currentYear = new Date().getFullYear();
      const list = [];
      for (let i = currentYear; i > currentYear - 100; i -= 1) {
        list.push(i.toString());
      }
      return list;
    },
    monthList() {
      const list = [];
      for (let i = 1; i < 13; i += 1) {
        list.push(i.toString().length === 1 ? `0${i}` : i.toString());
      }
      return list;
    },
    dayList() {
      const days = new Date(this.year, this.month, 0).getDate();
      const list = [];
      for (let i = 1; i <= days; i += 1) {
        list.push(i.toString().length === 1 ? `0${i}` : i.toString());
      }
      return list;
    },
  },
  methods: {
    changeDate() {
      const date = `${this.year}-${this.month}-${this.day}`;
      if (date.length === 10) {
        this.$emit('input', date);
      }
    },
  },
};
</script>

<style scoped>
/* option {
  font-size: 13px !important;
  text-align: center !important;
} */
</style>
