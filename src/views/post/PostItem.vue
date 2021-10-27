<template>
  <div class="container mw768">
    <bulma-input
      v-model="post.name"
      label
      placeholder="Наименование должности"
      iconLeft="tag"
    ></bulma-input>

    <bulma-switch
      v-model="post.go"
      label="Должность по гражданской обороне"
    ></bulma-switch>

    <bulma-input
      v-model="post.note"
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
import BulmaSwitch from "@/components/BulmaSwitch";
import Post from "@/objects/Post";
import mixItem from "@/mixins/mixItem";
import mixin from "@/mixins/funcs";

export default {
  name: "PostItem",
  components: {
    "bulma-button": BulmaButton,
    "bulma-input": BulmaInput,
    "bulma-switch": BulmaSwitch,
  },
  mixins: [mixin, mixItem],
  data() {
    return {
      title: "",
      post: Post,
    };
  },
  mounted() {
    this.fetchItem("post", "Post", [], [], []);
  },
  methods: {
    submit() {
      this.submitItem("post", "Post", [], []);
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
