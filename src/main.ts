import { createApp } from 'vue';
import { router, setupRouter } from '/@/router';
import App from './App.vue';

const bootstrap = async () => {
  const app = createApp(App);

  setupRouter(app);

  await router.isReady();

  app.mount('#app');
};

bootstrap();
