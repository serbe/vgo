<template>
  <div>
    <nav v-if="adding" class="level is-mobile" key="TableNav">
      <div class="level-left">
        <p class="level-item">
          <a class="button" :href="'/' + this.name + '/0'">Добавить</a>
        </p>
      </div>
      <div class="level-rigth">
        <p class="level-item">
          <span class="select">
            <select v-model="rowsSelect">
              <option v-for="(value, index) in options" :key="index">
                {{ value }}
              </option>
            </select>
          </span>
        </p>
      </div>
    </nav>
    <p class="control mb1" v-if="search" key="TableSearch">
      <input
        class="input is-expanded"
        type="search"
        placeholder="Поиск"
        v-model="query"
        autofocus
      />
    </p>
    <bulma-pagination
      v-if="pagination"
      :page="page"
      :allElems="all"
      :perPage="perPage"
      @pagination="filter"
      key="TablePaginationTop"
      size="small"
    ></bulma-pagination>
    <table class="table center-table" :class="tableClass">
      <thead v-if="headClasses" key="TableThead">
        <tr>
          <th
            v-for="(name, index) in head"
            :key="index"
            :class="headClass(index)"
          >
            {{ name }}
          </th>
        </tr>
      </thead>
      <tbody v-if="rows.length" key="TableBody">
        <template v-if="hyper">
          <template v-for="(row, key) in rows">
            <tr :key="key" @click="onClickTr(row)" class="link">
              <bulma-table-tr
                v-for="(name, index) in body"
                :key="index"
                :class="cellClass(index)"
                :type="cellType(index)"
                :value="row[name]"
              />
            </tr>
          </template>
        </template>
        <template v-else>
          <template v-for="(row, key) in rows">
            <tr :key="key">
              <bulma-table-tr
                v-for="(name, index) in body"
                :key="index"
                :class="cellClass(index)"
                :type="cellType(index)"
                :value="row[name]"
              />
            </tr>
          </template>
        </template>
      </tbody>
    </table>
    <bulma-pagination
      v-if="pagination"
      :page="page"
      :allElems="all"
      :perPage="perPage"
      @pagination="filter"
      key="TablePaginationBottom"
      size="small"
    ></bulma-pagination>
  </div>
</template>

<script>
import BulmaPagination from "@/components/BulmaPagination";
import BulmaTableTr from "@/components/BulmaTableTr";

export default {
  name: "BulmaTable",
  components: {
    "bulma-pagination": BulmaPagination,
    "bulma-table-tr": BulmaTableTr,
  },
  data() {
    return {
      query: "",
      page: 1,
      list: [],
      rowsSelect: 50,
      options: [10, 20, 30, 40, 50, 100],
    };
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    columns: Array,
    names: Array,
    tableClasses: String,
    headClasses: Array,
    cellClasses: Array,
    cellTypes: Array,
    tableData: {
      type: Array,
      required: true,
    },
    search: Boolean,
    pagination: Boolean,
    rowsPerPage: {
      type: Number,
      default: 50,
    },
    hyper: Boolean,
    adding: Boolean,
  },
  computed: {
    head() {
      return this.names ? this.names : Object.keys(this.tableData[0]);
    },
    body() {
      return this.columns ? this.columns : Object.keys(this.tableData[0]);
    },
    rows() {
      let result = [];
      if (this.filtered) {
        const tp = this.page;
        const pp = this.perPage;
        result = this.filtered.filter(
          (c, i) => i >= (tp - 1) * pp && i < tp * pp
        );
      }
      return result;
    },
    all() {
      return this.filtered ? this.filtered.length : 0;
    },
    filtered() {
      if (this.tableData) {
        const queryArr = this.query.toLowerCase().split(" ");
        return this.tableData.filter((f) =>
          queryArr.every((q) => f.str.includes(q))
        );
      }
      return [];
    },
    tableClass() {
      return this.tableClasses ? this.tableClasses : "";
    },
    perPage() {
      return Number(this.rowsSelect);
    },
  },
  mounted() {
    if (
      this.pagination &&
      this.rowsPerPage > 0 &&
      this.rowsPerPage !== this.rowsSelect
    ) {
      this.rowsSelect = this.rowsPerPage;
    }
  },
  methods: {
    onClickTr(item) {
      if ("id" in item) {
        this.$router.push(`/${this.name}/${item.id}`);
      }
    },
    headClass(index) {
      return this.headClasses ? this.headClasses[index] : "";
    },
    cellClass(index) {
      return this.cellClasses ? this.cellClasses[index] : this.headClass(index);
    },
    cellType(index) {
      return this.cellTypes ? this.cellTypes[index] : "";
    },
    filter(num) {
      if (num !== this.page) {
        this.page = num;
      }
    },
  },
  watch: {
    query(val) {
      this.query = val;
      this.page = 1;
    },
  },
};
</script>

<style scoped>
.link {
  cursor: pointer !important;
}

.mb1 {
  margin-bottom: 1rem;
}

/*.fixed_table {*/
/*table-layout: fixed !important;*/
/*}*/

.center-table {
  margin: auto;
}

.fullwidth {
  width: 100%;
}

.nowrap {
  white-space: nowrap;
}

.table {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
