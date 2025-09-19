const mongoose = require ('mongoose');

// mongoose is mongoDb ODM object data modelling library in nodejs

const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true,
    
    },
    redirectUrl: {
        type: String,
        required: true,
    },
    visitHistory: [{timestamp: {
        type: Number
    }}],

    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    }

 },

 {timestamps: true}

);

const URL = mongoose.model('url',urlSchema)

module.exports= URL;