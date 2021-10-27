<template>
  <div class="container w300">
    <div class="content has-text-centered">
      <h2>Авторизация</h2>
    </div>
    <p v-if="$route.query.redirect" key="redirect">You need to login first.</p>
    <bulma-input
      v-model="name"
      label
      placeholder="Имя пользователя"
      iconLeft="user"
    ></bulma-input>
    <bulma-input
      v-model="pass"
      type="password"
      label
      placeholder="Пароль"
      iconLeft="lock"
      @keyup="onKeyup"
    ></bulma-input>
    <div class="field is-grouped pt10">
      <bulma-button
        text="Вход"
        color="primary"
        @click="login"
        class="pl20"
      ></bulma-button>
      <bulma-button
        text="Закрыть"
        @click="close_login"
        class="pl20"
        color="light"
      ></bulma-button>
    </div>
    <p v-if="error" class="error" key="error">Bad login information</p>
  </div>
</template>

<script>
import BulmaInput from "@/components/BulmaInput";
import BulmaButton from "@/components/BulmaButton";
import mixItem from "@/mixins/mixItem";

export default {
  name: "LoginPage",
  components: {
    "bulma-input": BulmaInput,
    "bulma-button": BulmaButton,
  },
  data() {
    return {
      name: "",
      pass: "",
      error: false,
      rememberMe: true,
    };
  },
  mixins: [mixItem],
  methods: {
    login() {
      const data = {
        username: this.name,
        password: this.pass,
      };
      this.$store.dispatch("login", data).then(() => {
        this.$router.back();
      });
    },
    close_login() {
      this.$router.back();
    },
    onKeyup(event) {
      if (event.event.key === "Enter") {
        this.login();
      }
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
}

.w300 {
  width: 300px !important;
}

.pt10 {
  padding-top: 10px;
}

.pl20 {
  padding-left: 20px;
}
</style>
