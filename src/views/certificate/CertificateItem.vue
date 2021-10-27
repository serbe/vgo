<template>
  <div class="container mw768">
    <bulma-input
      v-model="certificate.num"
      label
      placeholder="Серийный номер удостоверения"
      iconLeft="tag"
    ></bulma-input>

    <bulma-select
      :list="contacts"
      :selected-item="certificate.contact"
      item-name="contact"
      label="Полное имя"
      @select="onSelect"
      iconLeft="user"
    ></bulma-select>

    <bulma-select
      :list="companys"
      :selected-item="certificate.company"
      item-name="company"
      label="Учебно методический центр"
      @select="onSelect"
      iconLeft="building"
    ></bulma-select>

    <bulma-date
      v-model="certificate.cert_date"
      label="Дата выдачи"
    ></bulma-date>

    <bulma-input
      v-model="certificate.note"
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
import BulmaDate from "@/components/BulmaDate";
import BulmaInput from "@/components/BulmaInput";
import BulmaSelect from "@/components/BulmaSelect";
import Certificate from "@/objects/Certificate";
import SelectItem from "@/objects/SelectItem";
import mixItem from "@/mixins/mixItem";
import mixin from "@/mixins/funcs";

export default {
  name: "CertificateItem",
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
      certificate: Certificate,
      contacts: [SelectItem],
      companys: [SelectItem],
    };
  },
  mounted() {
    this.fetchItem(
      "certificate",
      "Certificate",
      [],
      ["contact", "company"],
      []
    );
  },
  methods: {
    onSelect(item, itemName) {
      this.certificate[itemName] = item;
      this.certificate[`${itemName}_id`] = item.id;
    },
    submit() {
      this.submitItem("certificate", "Certificate", [], []);
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
