<template>
  <div class="container">
    <bulma-table
      name="contact"
      :names="[
        'Фамилия Имя Отчество',
        'Организация',
        'Должность',
        'Телефон',
        'Факс',
      ]"
      :columns="['name', 'company_name', 'post_name', 'phones', 'faxes']"
      :tableData="list"
      tableClasses="is-narrow is-striped fullwidth"
      :headClasses="[
        'min200',
        'is-hidden-mobile',
        'is-hidden-touch',
        'w9 nowrap min130',
        'is-hidden-mobile w9 nowrap min130',
      ]"
      :cellTypes="['text', 'text', 'text', 'phones', 'phones']"
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
  name: "ContactList",
  components: {
    "bulma-table": BulmaTable,
  },
  mixins: [mixin, mixList],
  mounted() {
    this.fetchData("contact/list", "ContactList");
  },
  methods: {
    createList(contacts) {
      let list = [];
      if (contacts) {
        list = contacts.map((c) => {
          const str = [c.name, c.company_name, c.post_name];
          if (c.phones) {
            str.push(c.phones.join(" "));
          }
          if (c.faxes) {
            str.push(c.faxes.join(" "));
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
.min130 {
  min-width: 130px !important;
}

.min200 {
  min-width: 200px !important;
}
</style>
