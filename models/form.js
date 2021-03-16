const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const formSchema = new Schema ({
    firstName: {
        type: 'string',
        required: true
    },
    lastName: {
        type: 'string',
        required: true
    },
    email: {
        type: 'string',
        required: true
    },
    subject: {
        type: 'string',
        enum: ['Maths KS3', 'Maths GCSE', 'Maths AS/A Level', 'Piano Classical', 'Piano Jazz', 'Classical Guitar'],
        required: true
    },
    comment: {
        type: 'string',
        required: true
    }
});

const Form = mongoose.model('Form', formSchema);

module.exports = Form;