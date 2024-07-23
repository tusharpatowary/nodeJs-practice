const app = require ('./app')

const port = 8000;
app.listen(port, () => {
  console.log(`Your App running on port ${port}...`);
});

