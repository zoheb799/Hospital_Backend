const mongoose = require('mongoose');
const DB = process.env.DATABASE;

mongoose.connect(DB).then(() => {
   console.log('conn successful');   
}).catch((err) => console.log('no conn'));