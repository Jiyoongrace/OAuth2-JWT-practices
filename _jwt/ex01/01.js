const jwt = require('jsonwebtoken');
require("dotenv").config();

//
// sign & verify
//

const options1 = {
    algorithm: 'HS256'
};

const options2 = {
    algorithm: 'HS256',
    expiresIn: '24h' // 24hours  
};

const token1 = jwt.sign({ id: 1, name: 'jiyoon', profileImage: 'profile.jpg' }, process.env.ACCESS_TOKEN_SECRET, options1);
const token2 = jwt.sign({ id: 1, name: 'jiyoon', profileImage: 'profile.jpg' }, process.env.ACCESS_TOKEN_SECRET, options2);

const verified1 = jwt.verify(token1, process.env.ACCESS_TOKEN_SECRET);
console.log(token1);
console.log(verified1);

const verified2 = jwt.verify(token2, process.env.ACCESS_TOKEN_SECRET);
console.log(token2);
console.log(verified2);
