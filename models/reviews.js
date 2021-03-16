const mongoose = require('mongoose');

//Schema is used to define the structure of the documents that's stores inside the collection
//Schema is a constructor function
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    name: {
        type: 'string',
        required: true
    },
    subject: {
        type: 'string', 
        required: true
    },
    comment: {
        type: 'string',
        required: true
    }
}, { timestamps: true });

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;