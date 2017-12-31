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

const CategorySeed = [
    {CategoryName: "Breads, rolls, biscuits"},
    {CategoryName: "Sweet breads, muffins"},
    {CategoryName: "Cakes"},
    {CategoryName: "Pastries"},
    {CategoryName: "Cookies"},
    {CategoryName: "Candy"},
    {CategoryName: "Coated and uncoated nuts"},
    {CategoryName: "Unroasted nut butters"},
    {CategoryName: "Fruit butters"},
    {CategoryName: "Canned jams or jellies"},
    {CategoryName: "Fruit pies"},
    {CategoryName: "Dehydrated fruit or vegetables, including dried beans"},
    {CategoryName: "Popcorn and popcorn snacks"},
    {CategoryName: "Cereal, including granola"},
    {CategoryName: "Dry mixes"},
    {CategoryName: "Vinegar"},
    {CategoryName: "Pickles"},
    {CategoryName: "Mustard"},
    {CategoryName: "Roasted coffee or dry tea"},
    {CategoryName: "Dried herbs and dried herb mixtures"}
];

db.Category
.remove({})
.then(() => db.Category.collection.insertMany(CategorySeed))
.then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1);
});

