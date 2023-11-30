// server-entry.js
const Vue = require('./node_modules/vue');
const App = require('./components/MyComponent.vue');

module.exports = function createApp() {
  return new Vue({
    render: (h) => h(App),
  });
};
