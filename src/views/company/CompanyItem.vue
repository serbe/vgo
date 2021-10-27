<template>
  <div class="container mw768">
    <bulma-input
      v-model="company.name"
      label
      placeholder="Наименование организации"
      iconLeft="building"
    ></bulma-input>

    <bulma-select
      :list="scopes"
      :selected-item="company.scope"
      item-name="scope"
      label="Сфера деятельности"
      @select="onSelect"
      iconLeft="tag"
    ></bulma-select>

    <bulma-input
      v-model="company.address"
      label
      placeholder="Адрес"
      iconLeft="address-card"
    ></bulma-input>

    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label">Электронный адрес</label>
          <bulma-input
            v-for="(email, index) in company.emails"
            :key="index"
            v-model="company.emails[index]"
            type="email"
            placeholder="Электронный адрес"
            iconLeft="envelope"
            autocomplete="email"
            @blur="onBlur('emails', 'email')"
            pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
            error="Неправильный email"
          ></bulma-input>
        </div>
      </div>

      <div class="column">
        <div class="field">
          <label class="label">Телефон</label>
          <bulma-input
            v-for="(phone, index) in company.phones"
            :key="index"
            v-model="company.phones[index]"
            type="tel"
            placeholder="Телефон"
            iconLeft="phone"
            autocomplete="tel"
            @blur="onBlur('phones', 'phone')"
          ></bulma-input>
        </div>
      </div>

      <div class="column">
        <div class="field">
          <label class="label">Факс</label>
          <bulma-input
            v-for="(fax, index) in company.faxes"
            :key="index"
            v-model="company.faxes[index]"
            type="tel"
            placeholder="Факс"
            iconLeft="phone"
            autocomplete="tel"
            @blur="onBlur('faxes', 'phone')"
          ></bulma-input>
        </div>
      </div>
    </div>

    <div class="field" v-if="company.practices.length > 0" key="practices">
      <label class="label">Тренировки</label>
      <bulma-input
        v-for="practice in company.practices"
        :key="practice.id"
        :value="
          practice.date_str +
          ' - ' +
          practice.kind_name +
          ' - ' +
          practice.topic
        "
        :hyper="'/practice/' + practice.id"
        iconLeft="history"
        readonly
      ></bulma-input>
    </div>

    <div class="field" v-if="company.contacts.length > 0" key="contacts">
      <label class="label">Сотрудники</label>
      <bulma-input
        v-for="contact in company.contacts"
        :key="contact.id"
        :value="contact.name + ' - ' + contact.post_name"
        :hyper="'/contact/' + contact.id"
        iconLeft="user"
        readonly
      ></bulma-input>
    </div>

    <bulma-input
      v-model="company.note"
      label
      placeholder="Заметка"
      iconLeft="sticky-note"
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
        <bulma-button text="Закрыть" v-on:click.once="close"></bulma-button>
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
import Company from "@/objects/Company";
import SelectItem from "@/objects/SelectItem";
import mixItem from "@/mixins/mixItem";
import mixin from "@/mixins/funcs";

export default {
  name: "CompanyItem",
  components: {
    "bulma-button": BulmaButton,
    "bulma-input": BulmaInput,
    "bulma-select": BulmaSelect,
  },
  mixins: [mixin, mixItem],
  data() {
    return {
      title: "",
      company: Company,
      scopes: [SelectItem],
    };
  },
  mounted() {
    this.fetchItem(
      "company",
      "Company",
      ["emails", "phones", "faxes"],
      ["scope"],
      [["practice", "PracticeList"]]
    );
  },
  methods: {
    onBlur(arr) {
      this.company[arr] = this.checkArray(this.company[arr]);
    },
    onSelect(item) {
      this.scope = item;
      this.company.scope_id = item.id;
    },
    submit() {
      this.submitItem("company", "Company", ["emails"], ["phones", "faxes"]);
    },
    delete() {},
    customLabel(val) {
      return val.name;
    },
  },
};
</script>
