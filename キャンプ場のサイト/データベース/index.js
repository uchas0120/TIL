
```javascript
const mongoose = require('mongoose');
const Campground = require('../models/campground');
const cities = require('./cities');
const { descriptors, places } = require('./seedHelpers');

mongoose.connect('mongodb://localhost:27017/yelp-camp',
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => {
        console.log('MongoDBコネクションOK!!');
    })
    .catch(err => {
        console.log('MongoDBコネクションエラー！！');
        console.log(err);
    });

const sample = array => array[Math.floor(Math.random() * array.length)];

    const seedDB = async () => {
        await Campground.deleteMany({});
        for (let i = 0; i < 50; i++) {
            const price = Math.floor(Math.random() * 200) + 1000;
            const camp = new Campground({
                location: `${sample(cities).prefecture}${sample(cities).city}`,
                title: `${sample(descriptors)}・${sample(places)}`,
                image: 'https://source.unsplash.com/collection/483251',
                description: `木曾路はすべて山の中である。あるところは岨づたいに行く崖の道であり、あるところは数十間の深さに臨む木曾川の岸であり、あるところは山の尾をめぐる谷の入り口である。一筋の街道はこの深い森林地帯を貫いていた。`,
                price
            });
        await camp.save();
        }
    }

    seedDB().then(() => {
        mongoose.connection.close();
    });
```
