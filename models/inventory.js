// Make use of the Mongoose ORM
const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new InventorySchema object
const InventorySchema = new Schema({

    productName: {type: String, required: true},
    description: {type: String, required: false},
    sortOrder: {type: Number, required: false},

    // `cottageID` is a foreign key that stores an Cottage id
    cottageID: {type: Schema.Types.ObjectId, ref: "Cottage", required: true}
});

// This creates our model from the above schema, using mongoose's model method
const Inventory = mongoose.model("Inventory", InventorySchema);

// Export the Note model
module.exports = Inventory;
