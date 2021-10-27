<template>
  <div class="container">
    <bulma-table
      name="company"
      :names="[
        'Наименование',
        'Адрес',
        'Сфера деятельности',
        'Телефон',
        'Факс',
        'Тренировки',
      ]"
      :columns="[
        'name',
        'address',
        'scope_name',
        'phones',
        'faxes',
        'practices',
      ]"
      :tableData="list"
      tableClasses="is-narrow is-striped fullwidth"
      :headClasses="[
        '',
        'is-hidden-touch',
        'is-hidden-mobile',
        'w9 nowrap min130',
        'is-hidden-touch w9 nowrap min130',
        'is-hidden-touch is-hidden-desktop-only w9 nowrap min90',
      ]"
      :cellTypes="['text', 'text', 'text', 'phones', 'phones', 'array']"
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
import mixin from "@/mixins/funcs";

export default {
  name: "CompanyList",
  components: {
    "bulma-table": BulmaTable,
  },
  mixins: [mixin, mixList],
  mounted() {
    this.fetchData("company/list", "CompanyList");
  },
  methods: {
    createList(companys) {
      let list = [];
      if (companys) {
        list = companys.map((c) => {
          const str = [c.name, c.address, c.scope_name];
          if (c.phones) {
            str.push(c.phones.join(" "));
          }
          if (c.faxes) {
            str.push(c.faxes.join(" "));
          }
          if (c.practices) {
            str.push(c.practices.join(" "));
          }
          const nc = c;
          nc.str = str.join(" ").toLowerCase();
          return nc;
        });
      }
      return list;
    },
  },
};
</script>

<style>
.min90 {
  min-width: 90px !important;
}

.min130 {
  min-width: 130px !important;
}
</style>
