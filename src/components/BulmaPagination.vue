<template>
  <div>
    <nav v-if="max > 1" ref="pagination" :class="classList" key="Pagination">
      <a
        class="pagination-previous"
        v-if="value > 1"
        @click="onClick(value - 1)"
        key="PaginationPrev"
        >Назад</a
      >
      <a
        class="pagination-next"
        v-if="value < max"
        @click="onClick(value + 1)"
        key="PaginationNext"
        >Далее</a
      >
      <ul class="pagination-list">
        <li v-if="value !== 1" key="li1">
          <a class="pagination-link" @click="onClick(1)">1</a>
        </li>
        <li v-if="value > 3" key="li2">
          <span class="pagination-ellipsis">&hellip;</span>
        </li>
        <li v-if="value > 2" key="li3">
          <a class="pagination-link" @click="onClick(value - 1)">{{
            value - 1
          }}</a>
        </li>
        <li>
          <a class="pagination-link is-current">{{ value }}</a>
        </li>
        <li v-if="value < max - 1" key="li4">
          <a class="pagination-link" @click="onClick(value + 1)">{{
            value + 1
          }}</a>
        </li>
        <li v-if="value < max - 2" key="li5">
          <span class="pagination-ellipsis">&hellip;</span>
        </li>
        <li v-if="value !== max" key="li6">
          <a class="pagination-link" @click="onClick(max)">{{ max }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "BulmaPagination",
  props: {
    allElems: {
      type: Number,
      required: true,
    },
    page: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      required: true,
    },
    size: {
      type: String,
      validator: (value) =>
        !value || ["small", "medium", "large"].includes(value),
    },
    rounded: Boolean,
    position: {
      type: String,
      validator: (value) => !value || ["centered", "right"].includes(value),
    },
  },
  computed: {
    value() {
      return this.page > this.max ? this.onClick(this.max) : this.page;
    },
    max() {
      return this.allElems % this.perPage === 0
        ? (this.allElems / this.perPage) | 0
        : ((this.allElems / this.perPage) | 0) + 1;
    },
    classList() {
      return {
        pagination: true,
        [`is-${this.position}`]: this.position,
        [`is-${this.size}`]: this.size,
      };
    },
  },
  methods: {
    onClick(num) {
      this.$emit("pagination", num);
      window.scrollTo(0, 0);
    },
  },
};
</script>
