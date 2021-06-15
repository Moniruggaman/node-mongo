const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// get

// root call arrow function- type-1
// const rootCall = (req, res) => res.send('Thank you');
// app.get('/', rootCall);

const users = ['asad', 'monir', 'sabed', 'dana', 'sajed'];

// type-2
app.get('/fruits/banana', (req, res) =>{
    res.send({fruit: 'banana', quantity:100, price: 500});
})

// dynamic route url.
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const name = users[id];
    res.send({id, name});
});

// post
app.post('/addUser', (req, res) =>{
    // save to database
    const user = req.body;
    user.id = 55;
    res.send(user);
})


app.listen(4000, () => console.log('listening to port 4000'));