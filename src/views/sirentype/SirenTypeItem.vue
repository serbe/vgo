<template>
  <div class="container mw768">
    <bulma-input
      v-model="siren_type.name"
      label
      placeholder="Тип сирены"
      iconLeft="tag"
    ></bulma-input>
    <bulma-input
      v-model="siren_type.radius"
      label
      placeholder="Радиус действия сирены (метры)"
      iconLeft="circle-o"
      type="number"
    ></bulma-input>
    <bulma-input
      v-model="siren_type.note"
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
import SirenType from "@/objects/SirenType";
import mixItem from "@/mixins/mixItem";
import mixin from "@/mixins/funcs";

export default {
  name: "SirenTypeItem",
  components: {
    "bulma-button": BulmaButton,
    "bulma-input": BulmaInput,
  },
  mixins: [mixin, mixItem],
  data() {
    return {
      title: "",
      siren_type: SirenType,
    };
  },
  mounted() {
    this.fetchItem("siren_type", "SirenType", [], [], []);
  },
  methods: {
    submit() {
      this.submitItem("siren_type", "SirenType", [], []);
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
