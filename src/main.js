import Vue from 'vue'
import Vuelidate from 'vuelidate'
import 'nprogress/nprogress.css'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

import App from './App.vue'
import router from './router'
import store from './store/store'

Vue.config.productionTip = false;

Vue.use(Vuelidate);

const requireComponent = require.context(
  './components/base', // Относительный путь до каталога компонентов
  true, // Обрабатывать или нет подкаталоги
  /Base[A-Z]\w+\.(vue|js)$/ // Регулярное выражение для определения файлов базовых компонентов
);

requireComponent.keys().forEach(fileName => {
  // Получение конфигурации компонента
  const componentConfig = requireComponent(fileName);

  // Получение имени компонента в PascalCase
  const componentName = upperFirst(
    camelCase(
      // Получаем имя файла независимо от глубины вложенности
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  );

  // Глобальная регистрация компонента
  Vue.component(
    componentName,
    // Поиск опций компонента в `.default`, который будет существовать,
    // если компонент экспортирован с помощью `export default`,
    // иначе будет использован корневой уровень модуля.
    componentConfig.default || componentConfig
  )
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
