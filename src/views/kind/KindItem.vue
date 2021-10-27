<template>
  <div class="container mw768">
    <bulma-input
      v-model="kind.name"
      label
      placeholder="Наименование типа тренировки"
      iconLeft="tag"
    ></bulma-input>

    <bulma-input
      v-model="kind.short_name"
      label
      placeholder="Сокращенное наименование"
      iconLeft="tag"
    ></bulma-input>

    <bulma-input
      v-model="kind.note"
      label
      placeholder="Заметка"
      iconLeft="comment"
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
import BulmaInput from "@/components/BulmaInput";
import Kind from "@/objects/Kind";
import mixItem from "@/mixins/mixItem";
import mixin from "@/mixins/funcs";

export default {
  name: "KindItem",
  components: {
    "bulma-button": BulmaButton,
    "bulma-input": BulmaInput,
  },
  mixins: [mixin, mixItem],
  data() {
    return {
      title: "",
      kind: Kind,
    };
  },
  mounted() {
    this.fetchItem("kind", "Kind", [], [], []);
  },
  methods: {
    submit() {
      this.submitItem("kind", "Kind", [], []);
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
