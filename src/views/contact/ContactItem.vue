<template>
  <div class="container mw768">
    <bulma-input
      v-model="contact.name"
      label
      placeholder="Полное имя"
      iconLeft="user"
    ></bulma-input>

    <bulma-select
      :list="companys"
      :selected-item="contact.company"
      label="Организация"
      item-name="company"
      @select="onSelect"
      iconLeft="building"
    ></bulma-select>

    <div class="columns">
      <div class="column is-half">
        <bulma-select
          :list="posts"
          :selected-item="contact.post"
          label="Должность"
          item-name="post"
          @select="onSelect"
          iconLeft="tag"
        ></bulma-select>
      </div>

      <div class="column is-half">
        <bulma-select
          :list="departments"
          :selected-item="contact.department"
          label="Отдел"
          item-name="department"
          @select="onSelect"
          iconLeft="tag"
        ></bulma-select>
      </div>
    </div>

    <div class="columns">
      <div class="column is-half">
        <bulma-select
          :list="post_gos"
          :selected-item="contact.post_go"
          label="Должность ГО"
          item-name="post_go"
          @select="onSelect"
          iconLeft="tag"
        ></bulma-select>
      </div>

      <div class="column is-half">
        <bulma-select
          :list="ranks"
          :selected-item="contact.rank"
          label="Звание"
          item-name="rank"
          @select="onSelect"
          iconLeft="tag"
        ></bulma-select>
      </div>
    </div>

    <div class="columns">
      <div class="column is-one-third">
        <bulma-date
          v-model="contact.birthday"
          label="Дата рождения"
        ></bulma-date>
      </div>
    </div>

    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label">Электронный адрес</label>
          <bulma-input
            v-for="(email, index) in contact.emails"
            :key="index"
            v-model="contact.emails[index]"
            type="email"
            placeholder="Электронный адрес"
            iconLeft="envelope"
            autocomplete="email"
            @blur="onBlur('emails')"
            pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
            error="Неправильный email"
          ></bulma-input>
        </div>
      </div>

      <div class="column">
        <div class="field">
          <label class="label">Телефон</label>
          <bulma-input
            v-for="(phone, index) in contact.phones"
            :key="index"
            v-model="contact.phones[index]"
            type="tel"
            placeholder="Телефон"
            iconLeft="phone"
            autocomplete="tel"
            @blur="onBlur('phones')"
          ></bulma-input>
        </div>
      </div>

      <div class="column">
        <div class="field">
          <label class="label">Факс</label>
          <bulma-input
            v-for="(fax, index) in contact.faxes"
            :key="index"
            v-model="contact.faxes[index]"
            type="tel"
            placeholder="Факс"
            iconLeft="fax"
            autocomplete="tel"
            @blur="onBlur('faxes')"
          ></bulma-input>
        </div>
      </div>
    </div>

    <div class="field" v-if="contact.practices" key="practices">
      <label class="label">Тренировки</label>
      <bulma-input
        v-for="practice in contact.practices"
        :key="practice.id"
        :hyper="'/practice/' + practice.id"
        readonly
        :value="
          practice.date_str +
          ' - ' +
          practice.kind.name +
          ' - ' +
          practice.topic
        "
        iconLeft="graduation-cap"
      ></bulma-input>
    </div>

    <bulma-input
      label="Заметка"
      placeholder="Заметка"
      iconLeft="comment"
      v-model="contact.note"
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
import Contact from "@/objects/Contact";
import SelectItem from "@/objects/SelectItem";
import mixin from "@/mixins/funcs";
import mixItem from "@/mixins/mixItem";

export default {
  name: "ContactItem",
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
      contact: Contact,
      companys: [SelectItem],
      posts: [SelectItem],
      post_gos: [SelectItem],
      departments: [SelectItem],
      ranks: [SelectItem],
    };
  },
  mounted() {
    this.fetchItem(
      "contact",
      "Contact",
      ["emails", "phones", "faxes"],
      ["company", "post", "department", "post_go", "rank"],
      []
    );
  },
  methods: {
    onBlur(arr) {
      this.contact[arr] = this.checkArray(this.contact[arr]);
    },
    onSelect(item, itemName) {
      this.contact[itemName] = item;
      this.contact[`${itemName}_id`] = item.id;
    },
    submit() {
      this.submitItem("contact", "Contact", ["emails"], ["phones", "faxes"]);
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
</style>
