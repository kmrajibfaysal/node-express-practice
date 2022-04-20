const express = require('express');

const cors = require('cors');

// Express app initialization
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// data
const users = [
  {
    id: 1,
    name: 'Farin',
    email: 'kmrajibfaysal@gmail.com',
    phone: '012222211',
    job: 'Developer',
  },
  {
    id: 2,
    name: 'Faysal',
    email: 'Faysal@gmail.com',
    phone: '012222211',
    job: 'Developer',
  },
  {
    id: 3,
    name: 'Rajib',
    email: 'Rajib@gmail.com',
    phone: '012222211',
    job: 'Developer',
  },
  {
    id: 4,
    name: 'Ratul',
    email: 'kmrajibfaysal@Ratul.com',
    phone: '012222211',
    job: 'Developer',
  },
  {
    id: 5,
    name: 'Rafiul',
    email: 'Rafiul@gmail.com',
    phone: '012222211',
    job: 'Developer',
  },
  {
    id: 6,
    name: 'abul',
    email: 'abul@gmail.com',
    phone: '012222211',
    job: 'Developer',
  },
];

// handling requests and response
app.get('/', (req, res) => {
  res.send('Hi there it is express app, calling you asap! Hui mia ki');
});

app.get('/users', (req, res) => {
  console.log('query', req.query);
  res.send(users);
});

app.get('/user/:id', (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);
  user ? res.send(user) : res.send('404 Not found!');
});

app.get('/fruits', (req, res) => {
  res.send(['mango', 'Lichi', 'banana']);
});

app.get('/*', (req, res) => {
  res.send('404 Not found!');
});

// Post req
app.post('/user', (req, res) => {
  console.log('Request', req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});

// Watch dog

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
