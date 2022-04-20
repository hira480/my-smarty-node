const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from my smrty personal smarty pant')
});

const users = [
    { id: 1, name: 'Rofiq', email: 'rofiq@gmail.com', phone: '0181567890' },
    { id: 2, name: 'shofiq', email: 'shofiq@gmail.com', phone: '0181560890' },
    { id: 3, name: 'jobbar', email: 'jobbar@gmail.com', phone: '0181457890' },
    { id: 4, name: 'salam', email: 'salam@gmail.com', phone: '0181512390' },
    { id: 5, name: 'borkot', email: 'borkot@gmail.com', phone: '0180967890' },
    { id: 6, name: 'helal', email: 'helal@gmail.com', phone: '0181567290' },
    { id: 7, name: 'motin', email: 'motin@gmail.com', phone: '0180567890' },
]

app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const match = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(match);
    }
    else {
        res.send(users);
    }
});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
});

app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'oranges'])
});

app.post('/users', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);

    res.send(user);
})

app.get('/fryits/mango/fazle', (req, res) => {
    res.send('titing titing pom pom');
})

app.listen(port, () => {
    console.log('Listening to Port', port);
})