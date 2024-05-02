const mongoose = require('mongoose');




mongoose.connect('mongodb://localhost:27017/contacts', )

.then(() => {
    console.log('Connected to MongoDB');
})
.catch(err => {
    console.log('Error connecting to MongoDB', err);
});
//login
 const loginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },  
    password    : {
        type: String,
        required: true
    },
});
const loginCollection = new mongoose.model('collection1', loginSchema);
module.exports = loginCollection;
//register
const registeSchema= new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    create_password: {
        type: String,
        required: true
    },
    confirm_password: {
        type: String,
        required: true
    },
});
const registercollection = new mongoose.model('collection2', registeSchema);
module.exports = registercollection;
//contact us
const contactUsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    additional_details: {
        type: String,
        required: true
    },
});
const contactUscollection = new mongoose.model('collection3', contactUsSchema);
module.exports = contactUscollection;

