// server-entry.js
const Vue = require('vue');
const App = require('./components/MyComponent.vue');

module.exports = function createApp() {
  return new Vue({
    render: (h) => h(App),
  });
};
