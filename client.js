const express =  require('express');

const port = process.env.PORT || 8081
const server = express();

server.use(express.static('dist'));

server.get('/', (req, res) => {
  const appString = `<!DOCTYPE html>
<html lang="en">
  <head>
    <title>React SSR Demo</title>
  </head>
  <body>
    <div id="root">/div>
    <script src="/assets/bundle.js"></script>
  </body>
</html>`;
  res.send(appString);
});

server.listen(port, () => {
  console.log('listening @ port '+port);
});
