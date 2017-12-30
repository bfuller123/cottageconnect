// Make use of the Mongoose ORM
const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new MerchantSchema object
const CottageSchema = new Schema({

    userName: {type: String, required: true, index: {unique: true}},
    password: {type: String, required: true},
    isMerchant: {type: Boolean, default: false},
    isCustomer: {type: Boolean, default: false},
    businessName: {type: String, required: false},
    businessCategory: {type: String, required: false},
    website: {type: String, required: false},
    email: {type: String, required: false},
    streetAddress1:{type: String, required: false},
    streetAddress2:{type: String, required: false},
    city:{type: String, required: false},
    state:{type: String, required: false},
    county:{type: String, required: false},
    zipCode:{type: String, required: false},
    country:{type: String, required: false},
    longitude: {type: Number, required: false},
    latitude: {type: Number, required: false, default: 0},
    phoneNumber:{type: String, required: false, default: 0},
    firstName:{type: String, required: false}, 
    middleName:{type: String, required: false}, 
    lastName:{type: String, required: false}
});

// This creates our model from the above schema, using mongoose's model method
const Cottage = mongoose.model("Cottage", CottageSchema);

// Export the Article model
module.exports = Cottage;
