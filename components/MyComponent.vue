<!-- MyComponent.vue -->
<template>
    <div>
      <h1>{{ title }}</h1>
      <p>{{ content }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: 'Hello, SSR!',
        content: 'This is server-side rendered content.',
      };
    },
  };
  </script>
  