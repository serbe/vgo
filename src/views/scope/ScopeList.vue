<template>
  <div class="container">
    <bulma-table
      name="scope"
      :names="['Сфера деятельности', 'Заметка']"
      :columns="['name', 'note']"
      :tableData="list"
      tableClasses="is-narrow is-striped fullwidth"
      :headClasses="['', 'is-hidden-mobile']"
      :cellTypes="['text', 'text']"
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
  name: "ScopeList",
  components: {
    "bulma-table": BulmaTable,
  },
  mixins: [mixList],
  mounted() {
    this.fetchData("scope/list", "ScopeList");
  },
  methods: {
    createList(scopes) {
      let list = [];
      if (scopes) {
        list = scopes.map((e) => {
          const str = [e.name, e.note];
          e.str = str.join(" ").toLowerCase();
          return e;
        });
      }
      return list;
    },
  },
};
</script>
