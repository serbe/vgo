<template>
  <div class="container">
    <bulma-table
      name="kind"
      :names="['Тип тренировки', 'Сокращенное наименование', 'Заметка']"
      :columns="['name', 'short_name', 'note']"
      :tableData="list"
      tableClasses="is-narrow is-striped fullwidth"
      :headClasses="['', '', 'is-hidden-mobile']"
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
  name: "KindList",
  components: {
    "bulma-table": BulmaTable,
  },
  mixins: [mixList],
  mounted() {
    this.fetchData("kind/list", "KindList");
  },
  methods: {
    createList(kinds) {
      let list = [];
      if (kinds) {
        list = kinds.map((e) => {
          const str = [e.name, e.short_name, e.note];
          const ne = e;
          ne.str = str.join(" ").toLowerCase();
          return ne;
        });
      }
      return list;
    },
  },
};
</script>
