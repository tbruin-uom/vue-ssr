// Your CMS page with SSJS
const createApp = require('./server-entry.js');

// Create a new Vue instance for each request
const app = createApp();

// Render the app to HTML
const html = renderToString(app);

// Output the HTML or use it as needed within your CMS page
print(html);
