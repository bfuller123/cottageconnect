const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/cottageconnect",
    {
        useMongoClient: true
    }
);

db.Cottage.find()
.then(data => {

    let merchant1Id = data[1]._id;
    let merchant2Id = data[2]._id;
    let merchant3Id = data[5]._id;

    const InventorySeed = [
        {
            productName: "Breakfast #1",
            description: "Egg and bacon",
            sortOrder: 1,
            cottageID: merchant1Id
        },
        {
            productName: "Breakfast #2",
            description: "Egg, sausage, and bacon",
            sortOrder: 2,
            cottageID: merchant1Id
        },
        {
            productName: "Breakfast #3",
            description: "Spam, eggs, sausage and spam",
            sortOrder: 3,
            cottageID: merchant1Id
        },
        {
            productName: "Breakfast #4",
            description: "Egg, bacon, and spam",
            sortOrder: 4,
            cottageID: merchant2Id
        },
        {
            productName: "Breakfast #5",
            description: "Egg, bacon, sausage, and spam",
            sortOrder: 5,
            cottageID: merchant2Id
        },
        {
            productName: "Breakfast #6",
            description: "Spam, bacon, sausage, and spam",
            sortOrder: 6,
            cottageID: merchant2Id
        },
        {
            productName: "Breakfast #7",
            description: "Spam, egg, spam, spam, bacon, and spam",
            sortOrder: 7,
            cottageID: merchant3Id
        },
        {
            productName: "Breakfast #8",
            description: "Spam, spam, spam, egg, and spam",
            sortOrder: 8,
            cottageID: merchant3Id
        },
        {
            productName: "Breakfast #9",
            description: "Lobster Thermidor a Crevette with a mornay sauce served in a Provencale manner with shallots and aubergines garnished with truffle pate, brandy and with a fried egg on top and spam",
            sortOrder: 9,
            cottageID: merchant3Id
        },

    ];

    db.Inventory
    .remove({})
    .then(() => db.Inventory.collection.insertMany(InventorySeed))
    .then(data => {
        console.log(data.insertedIds.length + " inventory records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
});
