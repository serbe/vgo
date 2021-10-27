<template>
  <div class="container">
    <bulma-table
      name="department"
      :names="['Наименование отдела', 'Заметка']"
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
  name: "DepartmentList",
  components: {
    "bulma-table": BulmaTable,
  },
  mixins: [mixList],
  mounted() {
    this.fetchData("department/list", "DepartmentList");
  },
  methods: {
    createList(departments) {
      let list = [];
      if (departments) {
        list = departments.map((e) => {
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
