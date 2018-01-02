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

const cottageSeed = [
    {
        userName: "CottageTest1",
        password: "CottageTest1PWD",
        isMerchant: false,
        isActiveCustomer: true,
        businessName: "",
        website: "",
        email: "cottagetest1@cottageconnect.com",
        address:"2727 Shelby Ave. Apt. J, Dallas TX 75219",
        longitude: 0,
        latitude: 0,
        phoneNumber:"214-214-2141",
        firstName:"John", 
        middleName:"Jonah", 
        lastName:"Jameson",
        dateAdded: new Date(Date.now())
    },
    {
        userName: "CottageTest2",
        password: "CottageTest2PWD",
        isMerchant: true,
        isActiveCustomer: false,
        businessName: "Peter Porker, The Incredible Spider-Ham",
        website: "http://www.microsoft.com",
        email: "cottagetest2@cottageconnect.com",
        address:"2727 Reagan Ave. Apt. 222. Dallas TX 75219",
        longitude: -96.775661234,
        latitude: 32.841941234,
        phoneNumber:"214-412-1234",
        firstName:"Peter", 
        lastName:"Parker",
        dateAdded: new Date(Date.now())
    },


    {
        userName: "CottageTest3",
        password: "CottageTest3PWD",
        isMerchant: true,
        isActiveCustomer: true,
        businessName: "Turkey's R US",
        website: "http://www.gobblegobble.com",
        email: "cottagetest3@cottageconnect.com",
        address:"2727 West Wilson Ave., Waco, TX 76219",
        phoneNumber:"214-442-2334",
        firstName:"Rhonda", 
        lastName:"Fonda",
        dateAdded: new Date(Date.now())
    },

    {
        userName: "CottageTest4",
        password: "CottageTest4PWD",
        isMerchant: false,
        isActiveCustomer: false,
        businessName: "Famous Turkey Jerky Tails",
        website: "http://www.google.com",
        email: "cottagetest4@cottageconnect.com",
        address:"12531 Plano Parkway, Dallas TX 75287",
        longitude: -96.7234,
        latitude: 32.4234,
        phoneNumber:"972-432-6742",
        firstName:"Bob", 
        lastName:"Gambini",
        dateAdded: new Date(Date.now())
    },

    {
        userName: "CottageTest5",
        password: "CottageTest5PWD",
        isMerchant: false,
        isActiveCustomer: true,
        email: "cottagetest5@cottageconnect.com",
        address:"Dallas, TX",
        firstName:"Wanda", 
        lastName:"Fish",
        dateAdded: new Date(Date.now())
    },

    {
        userName: "CottageTest6",
        password: "CottageTest6PWD",
        isMerchant: true,
        isActiveCustomer: false,
        businessName: "Total Tamales",
        website: "http://www.ojedas.com",
        email: "cottagetest6@cottageconnect.com",
        address:"4123 Maple Ave., Dallas, TX 75219",
        phoneNumber:"214-528-4512",
        firstName:"Alejandro", 
        lastName:"Ojeda",
        dateAdded: new Date(Date.now())
    }
];

db.Cottage
.remove({})
.then(() => db.Cottage.collection.insertMany(cottageSeed))
.then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1);
});
