const mongoose = require('mongoose');
const User = require('./models/user');

mongoose.connect('mongodb+srv://Annany:Yki1tBhPk0hD4KSa@tsf12.iquwv.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message)); 

const seedUsers = [
    {
        name: 'Annany',
        email: 'annany1@gmail.com',
        credits: 1000
    },
    {
        name: 'Ram',
        email: 'ram19@gmail.com',
        credits: 7000
    },
    {
        name: 'Yashi',
        email: 'yashi@gmail.com',
        credits: 4500
    },
    {
        name: 'Alisba',
        email: 'ios@yahoo.com',
        credits: 8500
    },
    {
        name: 'Kanika',
        email: 'kanika@gmail.com',
        credits: 7500
    },
    {
        name: 'Parth',
        email: 'Parth@yahoo.com',
        credits: 6900
    },
    {
        name: 'Karan',
        email: 'karan09@gmail.com',
        credits: 3000
    },
    {
        name: 'Aman',
        email: 'aman32@yahoo.com',
        credits: 2100
    },
    {
        name: 'Sagar',
        email: 'sagar87@gmail.com',
        credits: 5300
	}
]

User.insertMany(seedUsers)
    .then(res => console.log(res))
    .catch(err => console.log(err))
