const app = new Vue({
    data: {
      message: 'Hello from Vue!',
    },
    template: '<div>{{ message }}</div>',
  });
  
  // Perform server-side rendering
  renderer.renderToString(app, (err, html) => {
    if (err) {
      console.error(err);
    } else {
      // `html` contains the rendered HTML
      console.log(html);
    }
  });