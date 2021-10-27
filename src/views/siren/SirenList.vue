<template>
  <div class="container">
    <bulma-table
      name="siren"
      :names="['Тип сирены', 'Адрес', 'Ответственный', 'Телефоны']"
      :columns="['siren_type_name', 'address', 'contact_name', 'phones']"
      :tableData="list"
      tableClasses="is-narrow is-striped fullwidth"
      :headClasses="['', 'is-hidden-mobile', '', 'nowrap']"
      :cellTypes="['text', 'text', 'text', 'array']"
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
  name: "SirenList",
  components: {
    "bulma-table": BulmaTable,
  },
  mixins: [mixList],
  mounted() {
    this.fetchData("siren/list", "SirenList");
  },
  methods: {
    createList(sirens) {
      let list = [];
      if (sirens) {
        list = sirens.map((e) => {
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
