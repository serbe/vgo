<template>
  <div class="container mw768">
    <bulma-select
      :list="contacts"
      :selected-item="education.contact"
      label="Полное имя обучаемого"
      item-name="contact"
      @select="onSelect"
      iconLeft="user"
    ></bulma-select>

    <bulma-select
      :list="posts"
      :selected-item="education.post"
      label="Должность ГО ЧС"
      item-name="post"
      @select="onSelect"
      iconLeft="tag"
    ></bulma-select>

    <div class="columns">
      <div class="column">
        <bulma-date
          v-model="education.start_date"
          label="Дата начала обучения"
        ></bulma-date>
      </div>

      <div class="column">
        <bulma-date
          v-model="education.end_date"
          label="Дата конца обучения"
        ></bulma-date>
      </div>
    </div>

    <bulma-input
      label="Заметка"
      placeholder="Заметка"
      iconLeft="comment"
      v-model="education.note"
    ></bulma-input>

    <div class="field is-grouped is-grouped-centered">
      <div class="control">
        <bulma-button
          text="Сохранить"
          color="primary"
          @click="submit"
        ></bulma-button>
      </div>
      <div class="control">
        <bulma-button text="Закрыть" @click="close"></bulma-button>
      </div>
      <div class="control">
        <bulma-button
          text="Удалить"
          color="danger"
          onclick="return confirm('Вы действительно хотите удалить эту запись?');"
        ></bulma-button>
      </div>
    </div>
  </div>
</template>

<script>
import BulmaButton from "@/components/BulmaButton";
import BulmaDate from "@/components/BulmaDate";
import BulmaInput from "@/components/BulmaInput";
import BulmaSelect from "@/components/BulmaSelect";
import Education from "@/objects/Education";
import SelectItem from "@/objects/SelectItem";
import mixItem from "@/mixins/mixItem";
import mixin from "@/mixins/funcs";

export default {
  name: "EducationItem",
  components: {
    "bulma-button": BulmaButton,
    "bulma-date": BulmaDate,
    "bulma-input": BulmaInput,
    "bulma-select": BulmaSelect,
  },
  mixins: [mixin, mixItem],
  data() {
    return {
      title: "",
      education: Education,
      contacts: [SelectItem],
      posts: [SelectItem],
    };
  },
  mounted() {
    this.fetchItem("education", "Education", [], ["contact", "post"], []);
  },
  methods: {
    submit() {
      this.submitItem("education", "Education", [], []);
    },
    onSelect(item, itemName) {
      this.education[itemName] = item;
      this.education[`${itemName}_id`] = item.id;
    },
    delete() {},
  },
};
</script>

<style scoped>
.columns {
  margin-bottom: -0.25rem !important;
}

.field .is-grouped {
  margin-bottom: 0 !important;
}

.w300 {
  width: 300px !important;
}
</style>
