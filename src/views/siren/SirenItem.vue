<template>
  <div class="container mw768">
    <div class="columns">
      <div class="column is-half">
        <bulma-input
          v-model="siren.num_pass"
          label
          placeholder="Серийный номер"
          iconLeft="tag"
        ></bulma-input>
      </div>
      <div class="column is-half">
        <bulma-select
          :list="siren_types"
          :selected-item="siren.siren_type"
          label="Тип сирены"
          item-name="siren_type"
          @select="onSelect"
          iconLeft="tag"
        ></bulma-select>
      </div>
    </div>

    <bulma-input
      v-model="siren.address"
      label
      placeholder="Адрес"
      iconLeft="address-card"
    ></bulma-input>
    <bulma-select
      :list="contacts"
      :selected-item="siren.contact"
      label="Контактное лицо"
      item-name="contact"
      @select="onSelect"
      iconLeft="user"
    ></bulma-select>
    <bulma-select
      :list="companys"
      :selected-item="siren.company"
      label="Организация"
      item-name="company"
      @select="onSelect"
      iconLeft="building"
    ></bulma-select>

    <div class="columns">
      <div class="column is-half">
        <bulma-input
          v-model="siren.latitude"
          label
          placeholder="Широта"
          iconLeft="tag"
        ></bulma-input>
      </div>
      <div class="column is-half">
        <bulma-input
          v-model="siren.longitude"
          label
          placeholder="Долгота"
          iconLeft="tag"
        ></bulma-input>
      </div>
    </div>
    <bulma-input
      v-model="siren.note"
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
import BulmaSelect from "@/components/BulmaSelect";
import SelectItem from "@/objects/SelectItem";
import Siren from "@/objects/Siren";
import mixItem from "@/mixins/mixItem";
import mixin from "@/mixins/funcs";

export default {
  name: "SirenItem",
  components: {
    "bulma-button": BulmaButton,
    "bulma-input": BulmaInput,
    "bulma-select": BulmaSelect,
  },
  mixins: [mixin, mixItem],
  data() {
    return {
      title: "",
      siren: Siren,
      siren_types: [SelectItem],
      contacts: [SelectItem],
      companys: [SelectItem],
    };
  },
  mounted() {
    this.fetchItem(
      "siren",
      "Siren",
      [],
      ["siren_type", "contact", "company"],
      []
    );
  },
  methods: {
    submit() {
      this.submitItem("siren", "Siren", [], []);
    },
    onSelect(item, itemName) {
      this.siren[itemName] = item;
      this.siren[`${itemName}_id`] = item.id;
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
