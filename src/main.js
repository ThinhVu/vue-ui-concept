import { createApp } from 'vue';
import App from './App.vue';
import useCssDirectives from './directives/css-directives';

const app = createApp(App);
useCssDirectives(app);
window.app = app;
app.mount('#app');
