<template>
  <div class="container">
    <bulma-table
      name="practice"
      :names="['Дата тренировки', 'Тип тренировки', 'Организация']"
      :columns="['date_str', 'kind_name', 'company_name']"
      :tableData="list"
      tableClasses="is-narrow is-striped fullwidth"
      :headClasses="['nowrap', '', 'is-hidden-mobile']"
      :cellTypes="['text', 'text', 'text']"
      pagination
      hyper
      search
      adding
    ></bulma-table>
  </div>
</template>

<script>
import BulmaTable from "@/components/BulmaTable";
import mixList from "@/mixins/mixList";

export default {
  name: "PracticeList",
  components: {
    "bulma-table": BulmaTable,
  },
  mixins: [mixList],
  mounted() {
    this.fetchData("practice/list", "PracticeList");
  },
  methods: {
    createList(practices) {
      let list = [];
      if (practices) {
        list = practices.map((e) => {
          const str = [e.date_str, e.kind_name, e.company_name];
          e.str = str.join(" ").toLowerCase();
          return e;
        });
      }
      return list;
    },
  },
};
</script>
