const mongoose = require('mongoose');
// to connect to mongoDb

async function connectToMongoDB(url) {
    return mongoose.connect(url);
    
}


module.exports={
    connectToMongoDB,
};