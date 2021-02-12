<template>
  <div class="">
    <form @submit.prevent="">
      <h3 class="title is-3">Авторизация</h3>
      <div class="grid">
        <label class="block">
          <span>Имя пользователя</span>
          <input
            type="text"
            v-model="name"
            class="block rounded"
            autocomplete="udds-login"
          />
        </label>
        <label class="block">
          <span>Пароль</span>
          <input
            type="password"
            v-model="pass"
            class="block rounded"
            autocomplete="udds-password"
          />
        </label>
        <div class="block mt-2">
          <button type="button" class="btn btn-blue" :onClick="submit">
            Отправить
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { login } from "../../services/auth";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "LoginPage",
  setup() {
    const name = ref("");
    const pass = ref("");
    const router = useRouter();

    const submit = () =>
      login(name.value, pass.value).then((result) => {
        if (result) router.back();
      });

    return {
      name,
      pass,
      submit,
    };
  },
});
</script>
