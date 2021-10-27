<template>
  <div class="container">
    <bulma-table
      name="education"
      :names="[
        'Обучаемый',
        'Должность ГО ЧС',
        'Начало обучения',
        'Конец обучения',
      ]"
      :columns="['contact_name', 'post_name', 'start_str', 'end_str']"
      :tableData="list"
      tableClasses="is-narrow is-striped fullwidth"
      :headClasses="['', 'is-hidden-mobile', '', 'is-hidden-mobile']"
      :cellTypes="['text', 'text', 'text', 'text']"
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
  name: "EducationList",
  components: {
    "bulma-table": BulmaTable,
  },
  mixins: [mixList],
  mounted() {
    this.fetchData("education/list", "EducationList");
  },
  methods: {
    createList(educations) {
      let list = [];
      if (educations) {
        list = educations.map((e) => {
          const str = [e.contact_name, e.start_str, e.end_str];
          e.str = str.join(" ").toLowerCase();
          return e;
        });
      }
      return list;
    },
  },
};
</script>
