export default ({ body }) => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <title>React SSR Demo</title>
  </head>
  <body>
    <div id="root">${body}</div>
    <script src="/assets/bundle.js"></script>
  </body>
</html>`;
};
