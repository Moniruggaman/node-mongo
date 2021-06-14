const express = require('express');


const app = express();

// root call arrow function- type-1
// const rootCall = (req, res) => res.send('Thank you');
// app.get('/', rootCall);

// type-2
app.get('/', (req, res) =>{
    res.send('i know how to open node server ');
})

app.listen(4000, () => console.log('listening to port 4000'));