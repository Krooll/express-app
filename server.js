const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');

const app = express();

app.engine('hbs', hbs({ extname: 'hbs', layoutsDir: './layouts', defaultLayout: 'main' }));

app.set('view engine', '.hbs');
app.engine('hbs', hbs({ extname: 'hbs', layoutsDir: './layouts', defaultLayout: 'dark' }));

app.use(express.static(path.join(__dirname, '/public')));

app.post('/contact/send-message', (req, res) => {
  res.json(req.body);
});

app.get('/hello/:name', (req, res) => {
  res.render('hello', { name: req.params.name });
});

app.get('/', (req, res) => {
  res.render('index', { layout: 'main' })
});

app.get('/about', (req, res) => {
  res.render('about', { layout: 'dark' })
});

app.get('/contact', (req, res) => {
  res.render('contact', { layout: 'main' })
});

app.get('/info', (req, res) => {
  res.render('info', { layout: 'dark' })
});

app.get('/history', (req, res) => {
  res.render('history', { layout: 'main' })
});

app.use((req, res) => {
    res.status(404).send('404 not found...');
});

app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});