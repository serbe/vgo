<template>
  <div class="container">
    <bulma-table
      name="certificate"
      :names="['Номер', 'ФИО', 'УМЦ', 'Дата', 'Заметка']"
      :columns="['num', 'contact_name', 'company_name', 'cert_date', 'note']"
      :tableData="list"
      tableClasses="is-narrow is-striped fullwidth"
      :headClasses="['', '', 'is-hidden-mobile', 'nowrap', 'is-hidden-mobile']"
      :cellTypes="['text', 'text', 'text', 'text', 'text']"
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
  name: "CertificateList",
  components: {
    "bulma-table": BulmaTable,
  },
  mixins: [mixList],
  mounted() {
    this.fetchData("certificate/list", "CertificateList");
  },
  methods: {
    createList(certificates) {
      let list = [];
      if (certificates) {
        list = certificates.map((e) => {
          const str = [
            e.num,
            e.contact_name,
            e.company_name,
            e.cert_date,
            e.note,
          ];
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
