const mongoose = require("mongoose");
const db = require("../");
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
        userName: "Sleepy",
        isMerchant: false,
        isActiveCustomer: true,
        businessName: "",
        website: "",
        email: "cottagetest1@cottageconnect.com",
        streetAddress1:"2727 Shelby Ave.",
        streetAddress2: "Apt. J",
        city: "Dallas",
        stateOrProvince: "TX",
        zipCode: "75219",
        county: "Dallas",
        longitude: 0,
        latitude: 0,
        phoneNumber:"214-214-2141",
        firstName:"John", 
        middleName:"Jonah", 
        lastName:"Jameson",
        dateAdded: new Date(Date.now())
    },
    {
        userName: "Bashful",
        isMerchant: true,
        isActiveCustomer: false,
        businessName: "Peter Porker, The Incredible Spider-Ham",
        website: "http://www.microsoft.com",
        email: "cottagetest2@cottageconnect.com",
        streetAddress1:"2727 Reagan Ave",
        streetAddress2: "Apt. 222",
        city: "Dallas",
        stateOrProvince: "TX",
        zipCode: "75219",
        county: "Dallas",
        longitude: -96.775661234,
        latitude: 32.841941234,
        phoneNumber:"214-412-1234",
        firstName:"Peter", 
        lastName:"Parker",
        dateAdded: new Date(Date.now())
    },
    {
        userName: "Grumpy",
        isMerchant: true,
        isActiveCustomer: true,
        businessName: "Turkey's R US",
        website: "http://www.gobblegobble.com",
        email: "cottagetest3@cottageconnect.com",
        streetAddress1:"2727 West Wilson Ave",
        city: "Waco",
        stateOrProvince: "TX",
        zipCode: "76219",
        county: "Waco",
        phoneNumber:"214-442-2334",
        firstName:"Rhonda", 
        lastName:"Fonda",
        dateAdded: new Date(Date.now())
    },
    {
        userName: "Dopey",
        isMerchant: false,
        isActiveCustomer: false,
        businessName: "Famous Turkey Jerky Tails",
        website: "http://www.google.com",
        email: "cottagetest4@cottageconnect.com",
        streetAddress1:"12531 Plano Parkway",
        city: "Dallas",
        stateOrProvince: "TX",
        zipCode: "75287",
        county: "Dallas",        
        longitude: -96.7234,
        latitude: 32.4234,
        phoneNumber:"972-432-6742",
        firstName:"Bob", 
        lastName:"Gambini",
        dateAdded: new Date(Date.now())
    },

    {
        userName: "Sneezy",
        isMerchant: false,
        isActiveCustomer: true,
        email: "cottagetest5@cottageconnect.com",
        city: "Dallas",
        stateOrProvince:"TX",
        firstName:"Wanda", 
        lastName:"Fish",
        dateAdded: new Date(Date.now())
    },

    {
        userName: "Doc",
        isMerchant: true,
        isActiveCustomer: false,
        businessName: "Total Tamales",
        website: "http://www.ojedas.com",
        email: "cottagetest6@cottageconnect.com",
        streetAddress1:"4123 Maple Ave.",
        city: "Dallas", 
        stateOrProvince: "TX",
        zipCode: "75219",
        phoneNumber:"214-528-4512",
        firstName:"Alejandro", 
        lastName:"Ojeda",
        dateAdded: new Date(Date.now())
    },
    {
        userName: "AlbertMariaCuriousCoffee",
        isMerchant: true,
        isActiveCustomer: false,
        businessName: "Curious Coffee",
        website: "",
        email: "CuriousCoffee@cottageconnect.com",
        streetAddress1:"5414 Alton Ave",
        streetAddress2: "",
        city: "Dallas",
        stateOrProvince: "TX",
        zipCode: "75214",
        county: "Dallas",
        longitude: 0,
        latitude: 0,
        phoneNumber:"214-214-2141",
        firstName:"Albert",
        middleName:"Munich",
        lastName:"Munich",
        dateAdded: new Date(Date.now())
      },
      {
        userName: "BurgerBob",
        isMerchant: true,
        isActiveCustomer: false,
        businessName: "Bob's Bundt Cakes",
        website: "",
        email: "BBundts@cottageconnect.com",
        streetAddress1:"901 Main St",
        streetAddress2: "",
        city: "Dallas",
        stateOrProvince: "TX",
        zipCode: "75202",
        county: "Dallas",
        longitude: 0,
        latitude: 0,
        phoneNumber:"214-214-2141",
        firstName:"Bob",
        middleName:"Munich",
        lastName:"Belcher",
        dateAdded: new Date(Date.now())
      },
      {
        userName: "TeddySpaghetti",
        isMerchant: true,
        isActiveCustomer: false,
        businessName: "Teddy's Teas",
        website: "",
        email: "TTs@cottageconnect.com",
        streetAddress1:"3511 Oak Lawn",
        streetAddress2: "",
        city: "Dallas",
        stateOrProvince: "TX",
        zipCode: "75219",
        county: "Dallas",
        longitude: 0,
        latitude: 0,
        phoneNumber:"214-214-2141",
        firstName:"Teddy",
        middleName:"Munich",
        lastName:"Spaghetti",
        dateAdded: new Date(Date.now())
      },
      {
        userName: "MorticianMort",
        isMerchant: true,
        isActiveCustomer: false,
        businessName: "Discount Flowers",
        website: "",
        email: "DiscountFlowers@cottageconnect.com",
        streetAddress1:"4901 Bryan St",
        streetAddress2: "",
        city: "Dallas",
        stateOrProvince: "TX",
        zipCode: "75206",
        county: "Dallas",
        longitude: 0,
        latitude: 0,
        phoneNumber:"214-214-2141",
        firstName:"Mort",
        middleName:"Munich",
        lastName:"Mortician",
        dateAdded: new Date(Date.now())
      },
      {
        userName: "TinaBelcher",
        isMerchant: true,
        isActiveCustomer: false,
        businessName: "Tina's Teas",
        website: "",
        email: "TinaTea@cottageconnect.com",
        streetAddress1:"5844 Abrams Rd",
        streetAddress2: "",
        city: "Dallas",
        stateOrProvince: "TX",
        zipCode: "75214",
        county: "Dallas",
        longitude: 0,
        latitude: 0,
        phoneNumber:"214-214-2141",
        firstName:"Tina",
        middleName:"Munich",
        lastName:"Belcher",
        dateAdded: new Date(Date.now())
      },
      {
        userName: "Felix",
        isMerchant: true,
        isActiveCustomer: false,
        businessName: "Felix and the Faux Flowers",
        website: "",
        email: "FauxFlowers@cottageconnect.com",
        streetAddress1:"4234 Maple Ave",
        streetAddress2: "",
        city: "Dallas",
        stateOrProvince: "TX",
        zipCode: "75219",
        county: "Dallas",
        longitude: 0,
        latitude: 0,
        phoneNumber:"214-214-2141",
        firstName:"Felix",
        middleName:"Munich",
        lastName:"Fishoder",
        dateAdded: new Date(Date.now())
      },
      {
        userName: "Calvin",
        isMerchant: true,
        isActiveCustomer: false,
        businessName: "Calvin's Coffee",
        website: "",
        email: "CoffeeCalvin@cottageconnect.com",
        streetAddress1:"4560 W Mockingbird Ln",
        streetAddress2: "",
        city: "Dallas",
        stateOrProvince: "TX",
        zipCode: "75209",
        county: "Dallas",
        longitude: 0,
        latitude: 0,
        phoneNumber:"214-214-2141",
        firstName:"Calvin",
        middleName:"Munich",
        lastName:"Fishoder",
        dateAdded: new Date(Date.now())
      },
      {
        userName: "Aziz",
        isMerchant: true,
        isActiveCustomer: false,
        businessName: "Aziz and the Apple Tree",
        website: "",
        email: "Appleman@cottageconnect.com",
        streetAddress1:"220 N Main St",
        streetAddress2: "",
        city: "Grapevine",
        stateOrProvince: "TX",
        zipCode: "76051",
        county: "Tarrant",
        longitude: 0,
        latitude: 0,
        phoneNumber:"214-214-2141",
        firstName:"Aziz",
        middleName:"Munich",
        lastName:"Ansari",
        dateAdded: new Date(Date.now())
      },
      {
        userName: "Ron",
        isMerchant: true,
        isActiveCustomer: false,
        businessName: "Food and Stuff",
        website: "",
        email: "RonSwanson@cottageconnect.com",
        streetAddress1:"919 W Northwest Hwy",
        streetAddress2: "",
        city: "Grapevine",
        stateOrProvince: "TX",
        zipCode: "76051",
        county: "Tarrant",
        longitude: 0,
        latitude: 0,
        phoneNumber:"214-214-2141",
        firstName:"Ron",
        middleName:"Ulysses",
        lastName:"Swanson",
        dateAdded: new Date(Date.now())
      },
      {
        userName: "Tammy",
        isMerchant: true,
        isActiveCustomer: false,
        businessName: "Hot Tammale Candy",
        website: "",
        email: "TammySwanson@cottageconnect.com",
        streetAddress1:"1702 Small St",
        streetAddress2: "",
        city: "Grand Prarie",
        stateOrProvince: "TX",
        zipCode: "75050",
        county: "Dallas",
        longitude: 0,
        latitude: 0,
        phoneNumber:"214-214-2141",
        firstName:"Tammy",
        middleName:"Munich",
        lastName:"Swanson",
        dateAdded: new Date(Date.now())
      },
      {
        userName: "Pepper",
        isMerchant: true,
        isActiveCustomer: false,
        businessName: "Jimmy Junior Jalapenos",
        website: "",
        email: "JJu@cottageconnect.com",
        streetAddress1:"2505 S Belt Line Rd",
        streetAddress2: "",
        city: "Grand Prarie",
        stateOrProvince: "TX",
        zipCode: "75052",
        county: "Dallas",
        longitude: 0,
        latitude: 0,
        phoneNumber:"214-214-2141",
        firstName:"Jimmy Jr",
        middleName:"Munich",
        lastName:"Pesto",
        dateAdded: new Date(Date.now())
      },
      {
        userName: "Linda",
        isMerchant: true,
        isActiveCustomer: false,
        businessName: "Little Baby Scones",
        website: "",
        email: "Linda@cottageconnect.com",
        streetAddress1:"501 W Main St",
        streetAddress2: "",
        city: "Grand Prarie",
        stateOrProvince: "TX",
        zipCode: "75050",
        county: "Dallas",
        longitude: 0,
        latitude: 0,
        phoneNumber:"214-214-2141",
        firstName:"Linda",
        middleName:"Munich",
        lastName:"Belcher",
        dateAdded: new Date(Date.now())
      },
      {
        userName: "Louise",
        isMerchant: true,
        isActiveCustomer: false,
        businessName: "Cookie Cottage",
        website: "",
        email: "CookieCottage@cottageconnect.com",
        streetAddress1:"224 E Virginia St",
        streetAddress2: "",
        city: "McKinney",
        stateOrProvince: "TX",
        zipCode: "75069",
        county: "Collin",
        longitude: 0,
        latitude: 0,
        phoneNumber:"214-214-2141",
        firstName:"Louise",
        middleName:"Munich",
        lastName:"Belcher",
        dateAdded: new Date(Date.now())
      },
      {
        userName: "Flubber",
        isMerchant: true,
        isActiveCustomer: false,
        businessName: "Zeke's Blamo Butterscotch Candy",
        website: "",
        email: "Zeke@cottageconnect.com",
        streetAddress1:"1301 N Tennessee St",
        streetAddress2: "",
        city: "McKinney",
        stateOrProvince: "TX",
        zipCode: "75069",
        county: "Collin",
        longitude: 0,
        latitude: 0,
        phoneNumber:"214-214-2141",
        firstName:"Zeke",
        middleName:"",
        lastName:"",
        dateAdded: new Date(Date.now())
    },
    {
        userName: "Tammi",
        isMerchant: true,
        isActiveCustomer: false,
        businessName: "TamTam Buns",
        website: "",
        email: "Tammy@cottageconnect.com",
        streetAddress1:"1330 N Mcdonald St",
        streetAddress2: "",
        city: "McKinney",
        stateOrProvince: "TX",
        zipCode: "75071",
        county: "Collin",
        longitude: 0,
        latitude: 0,
        phoneNumber:"214-214-2141",
        firstName:"Tammy",
        middleName:"",
        lastName:"",
        dateAdded: new Date(Date.now())
    },{
        userName: "Nope",
        isMerchant: true,
        isActiveCustomer: false,
        businessName: "Gerry",
        website: "",
        email: "Gerry@cottageconnect.com",
        streetAddress1:"4550 Eldorado Pkwy",
        streetAddress2: "",
        city: "McKinney",
        stateOrProvince: "TX",
        zipCode: "75070",
        county: "Collin",
        longitude: 0,
        latitude: 0,
        phoneNumber:"214-214-2141",
        firstName:"Gerry",
        middleName:"",
        lastName:"Gergich",
        dateAdded: new Date(Date.now())
    },
    {
        userName: "BeanGoliath",
        isMerchant: true,
        isActiveCustomer: false,
        businessName: "Smash Coffee",
        website: "",
        email: "SmashC@email.com",
        streetAddress1:"1710 Woodcreek Dr",
        streetAddress2: "",
        city: "Richardson",
        stateOrProvince: "TX",
        zipCode: "75082",
        county: "Dallas",
        longitude: 0,
        latitude: 0,
        phoneNumber:"214-972-1111",
        firstName:"Bruce",
        middleName:"",
        lastName:"Banner",
        dateAdded: new Date(Date.now())
        },
        {
        userName: "WebHead",
        isMerchant: true,
        isActiveCustomer: false,
        businessName: "Pete's pies",
        website: "",
        email: "Petey@email.com",
        streetAddress1:"636 Newberry Dr",
        streetAddress2: "",
        city: "Richardson",
        stateOrProvince: "TX",
        zipCode: "75080",
        county: "Dallas",
        longitude: 0,
        latitude: 0,
        phoneNumber:"214-972-1111",
        firstName:"Peter",
        middleName:"",
        lastName:"Parker",
        dateAdded: new Date(Date.now())
        },
        {
        userName: "Goldilocks",
        isMerchant: true,
        isActiveCustomer: false,
        businessName: "Golden Apple Pies",
        website: "",
        email: "Odinson@email.com",
        streetAddress1:"1520 Richardson Drive",
        streetAddress2: "",
        city: "Richardson",
        stateOrProvince: "TX",
        zipCode: "75080",
        county: "Dallas",
        longitude: 0,
        latitude: 0,
        phoneNumber:"214-972-1111",
        firstName:"Donald",
        middleName:"",
        lastName:"Blake",
        dateAdded: new Date(Date.now())
        },
        {
        userName: "MadeintheUSA",
        isMerchant: true,
        isActiveCustomer: false,
        businessName: "Shield Cakes",
        website: "",
        email: "StarsAndStripes@email.com",
        streetAddress1:"4317 Upland Way",
        streetAddress2: "",
        city: "Garland",
        stateOrProvince: "TX",
        zipCode: "75042",
        county: "Dallas",
        longitude: 0,
        latitude: 0,
        phoneNumber:"214-972-1111",
        firstName:"Steve",
        middleName:"",
        lastName:"Rogers",
        dateAdded: new Date(Date.now())
        },
        {
        userName: "Agamotto",
        isMerchant: true,
        isActiveCustomer: false,
        businessName: "Mystic Tea",
        website: "",
        email: "RubyRings@email.com",
        streetAddress1:"714 Echo Dr",
        streetAddress2: "",
        city: "Garland",
        stateOrProvince: "TX",
        zipCode: "75040",
        county: "Dallas",
        longitude: 0,
        latitude: 0,
        phoneNumber:"214-972-1111",
        firstName:"Stephen",
        middleName:"",
        lastName:"Strange",
        dateAdded: new Date(Date.now())
        },
        {
        userName: "BigBrain",
        isMerchant: true,
        isActiveCustomer: false,
        businessName: "Out of this World candies",
        website: "",
        email: "Fantastic@email.com",
        streetAddress1:"3417 Meadow Oaks Dr",
        streetAddress2: "",
        city: "Garland",
        stateOrProvince: "TX",
        zipCode: "75043",
        county: "Dallas",
        longitude: 0,
        latitude: 0,
        phoneNumber:"214-972-1111",
        firstName:"Reed",
        middleName:"",
        lastName:"Richards",
        dateAdded: new Date(Date.now())
        },
        {
        userName: "SpaceGirl",
        isMerchant: true,
        isActiveCustomer: false,
        businessName: "Danver Popcorn",
        website: "",
        email: "TheCaptain@email.com",
        streetAddress1:"1101 Canoe Ln",
        streetAddress2: "",
        city: "Plano",
        stateOrProvince: "TX",
        zipCode: "75023",
        county: "Collin",
        longitude: 0,
        latitude: 0,
        phoneNumber:"214-972-1111",
        firstName:"Carol",
        middleName:"",
        lastName:"Danvers",
        dateAdded: new Date(Date.now())
        },
        {
        userName: "Goddess",
        isMerchant: true,
        isActiveCustomer: false,
        businessName: "Truth Coffee",
        website: "",
        email: "Empowered@email.com",
        streetAddress1:"1521 Cherbourg Dr",
        streetAddress2: "",
        city: "Plano",
        stateOrProvince: "TX",
        zipCode: "75075",
        county: "Collin",
        longitude: 0,
        latitude: 0,
        phoneNumber:"214-972-1111",
        firstName:"Diana",
        middleName:"",
        lastName:"Prince",
        dateAdded: new Date(Date.now())
        },
        {
        userName: "TechGuy",
        isMerchant: true,
        isActiveCustomer: false,
        businessName: "Stark Jam",
        website: "",
        email: "TStark@email.com",
        streetAddress1:"2825 Prairie Creek Dr",
        streetAddress2: "",
        city: "Plano",
        stateOrProvince: "TX",
        zipCode: "75075",
        county: "Collin",
        longitude: 0,
        latitude: 0,
        phoneNumber:"214-972-1111",
        firstName:"Tony",
        middleName:"",
        lastName:"Stark",
        dateAdded: new Date(Date.now())
        },
        {
        userName: "ToughStuff",
        isMerchant: true,
        isActiveCustomer: false,
        businessName: "Luke's Hard Candies",
        website: "",
        email: "IHaveThePower@email.com",
        streetAddress1:"14590 Berklee Dr",
        streetAddress2: "",
        city: "Addison",
        stateOrProvince: "TX",
        zipCode: "75001",
        county: "Dallas",
        longitude: 0,
        latitude: 0,
        phoneNumber:"214-972-1111",
        firstName:"Luke",
        middleName:"",
        lastName:"Cage",
        dateAdded: new Date(Date.now())
        },
        {
        userName: "ZenMan",
        isMerchant: true,
        isActiveCustomer: false,
        businessName: "K'un Lun Herbs",
        website: "",
        email: "Relax@email.com",
        streetAddress1:"5055 Addison Cir",
        streetAddress2: "411",
        city: "Addison",
        stateOrProvince: "TX",
        zipCode: "75001",
        county: "Dallas",
        longitude: 0,
        latitude: 0,
        phoneNumber:"214-972-1111",
        firstName:"Dany",
        middleName:"",
        lastName:"Rand",
        dateAdded: new Date(Date.now())
        },
        {
        userName: "Fearless",
        isMerchant: true,
        isActiveCustomer: false,
        businessName: "Zip Line Croissants",
        website: "",
        email: "BlindBaker@email.com",
        streetAddress1:"15819 Spectrum",
        streetAddress2: "178",
        city: "Addison",
        stateOrProvince: "TX",
        zipCode: "75001",
        county: "Dallas",
        longitude: 0,
        latitude: 0,
        phoneNumber:"214-972-1111",
        firstName:"Matt",
        middleName:"",
        lastName:"Murdock",
        dateAdded: new Date(Date.now())
        },
        {
        userName: "CatLover",
        isMerchant: true,
        isActiveCustomer: false,
        businessName: "Ethereal Vinegar",
        website: "",
        email: "zerocalgal@email.com",
        streetAddress1:"3309 Highland Meadow Dr",
        streetAddress2: "",
        city: "Farmers Branch",
        stateOrProvince: "TX",
        zipCode: "75234",
        county: "Dallas",
        longitude: 0,
        latitude: 0,
        phoneNumber:"214-972-1111",
        firstName:"Kitty",
        middleName:"",
        lastName:"Pryde",
        dateAdded: new Date(Date.now())
        },
        {
        userName: "Acrobat",
        isMerchant: true,
        isActiveCustomer: false,
        businessName: "Circus pretzels",
        website: "",
        email: "amIblue@email.com",
        streetAddress1:"13201 Glad Acres Dr",
        streetAddress2: "",
        city: "Dallas",
        stateOrProvince: "TX",
        zipCode: "75234",
        county: "Dallas",
        longitude: 0,
        latitude: 0,
        phoneNumber:"214-972-1111",
        firstName:"Kurt",
        middleName:"",
        lastName:"Wagner",
        dateAdded: new Date(Date.now())
        },
        {
        userName: "AbsOfOsmium",
        isMerchant: true,
        isActiveCustomer: false,
        businessName: "Osmium Cut Granola",
        website: "",
        email: "gentlegiant@email.com",
        streetAddress1:"3047 Cameo Ln",
        streetAddress2: "",
        city: "Farmers Branch",
        stateOrProvince: "TX",
        zipCode: "75234",
        county: "Dallas",
        longitude: 0,
        latitude: 0,
        phoneNumber:"214-972-1111",
        firstName:"Peter",
        middleName:"",
        lastName:"Rasputin",
        dateAdded: new Date(Date.now())
        },
        {
        userName: "BirdWatcher",
        isMerchant: true,
        isActiveCustomer: false,
        businessName: "Bobbi's Rice Cakes",
        website: "",
        email: "whoneedspowers@email.com",
        streetAddress1:"1520 Old Orchard Dr",
        streetAddress2: "",
        city: "Irving",
        stateOrProvince: "TX",
        zipCode: "75061",
        county: "Dallas",
        longitude: 0,
        latitude: 0,
        phoneNumber:"214-972-1111",
        firstName:"Barbara",
        middleName:"",
        lastName:"Morse",
        dateAdded: new Date(Date.now())
        },
        {
        userName: "StrongGirl",
        isMerchant: true,
        isActiveCustomer: false,
        businessName: "Molly's Jellied Jams",
        website: "",
        email: "Ilikesillyhats@email.com",
        streetAddress1:"2408 Summer Place Dr",
        streetAddress2: "",
        city: "Irving",
        stateOrProvince: "TX",
        zipCode: "75062",
        county: "Dallas",
        longitude: 0,
        latitude: 0,
        phoneNumber:"214-972-1111",
        firstName:"Molly",
        middleName:"",
        lastName:"Hayes",
        dateAdded: new Date(Date.now())
        },
        {
        userName: "WheelMan",
        isMerchant: true,
        isActiveCustomer: false,
        businessName: "Brain Food",
        website: "",
        email: "Xtreme@email.com",
        streetAddress1:"9321 Vista Cir",
        streetAddress2: "",
        city: "Irving",
        stateOrProvince: "TX",
        zipCode: "75063",
        county: "Dallas",
        longitude: 0,
        latitude: 0,
        phoneNumber:"214-972-1111",
        firstName:"Chuck",
        middleName:"",
        lastName:"Xavier",
        dateAdded: new Date(Date.now())
        },
        {
        userName: "SurferDude",
        isMerchant: true,
        isActiveCustomer: false,
        businessName: "Cosmic Mustards",
        website: "",
        email: "silverknight@email.com",
        streetAddress1:"1827 Gateway Cir",
        streetAddress2: "",
        city: "Grand Prairie",
        stateOrProvince: "TX",
        zipCode: "75051",
        county: "Dallas",
        longitude: 0,
        latitude: 0,
        phoneNumber:"214-972-1111",
        firstName:"Noran",
        middleName:"",
        lastName:"Radd",
        dateAdded: new Date(Date.now())
        },
        {
        userName: "BowEnthusiast",
        isMerchant: true,
        isActiveCustomer: false,
        businessName: "Precision Baking",
        website: "",
        email: "GArrow@email.com",
        streetAddress1:"1203 Morningside Dr",
        streetAddress2: "",
        city: "Grand Prairie",
        stateOrProvince: "TX",
        zipCode: "75052",
        county: "Dallas",
        longitude: 0,
        latitude: 0,
        phoneNumber:"214-972-1111",
        firstName:"Oliver",
        middleName:"",
        lastName:"Queen",
        dateAdded: new Date(Date.now())
        },
        {
        userName: "Meow",
        isMerchant: true,
        isActiveCustomer: false,
        businessName: "Purr-fect whipped chocolate pretzels",
        website: "",
        email: "catnipper@email.com",
        streetAddress1:"422 Hampton Cir",
        streetAddress2: "",
        city: "Grand Prairie",
        stateOrProvince: "TX",
        zipCode: "75052",
        county: "Dallas",
        longitude: 0,
        latitude: 0,
        phoneNumber:"214-972-1111",
        firstName:"Selina",
        middleName:"",
        lastName:"Kyle",
        dateAdded: new Date(Date.now())
        },
        {
        userName: "Speedie",
        isMerchant: true,
        isActiveCustomer: false,
        businessName: "Granola on the go!",
        website: "",
        email: "speedforcerules@email.com",
        streetAddress1:"16907 Park Hill Dr",
        streetAddress2: "",
        city: "Dallas",
        stateOrProvince: "TX",
        zipCode: "75248",
        county: "Dallas",
        longitude: 0,
        latitude: 0,
        phoneNumber:"214-972-1111",
        firstName:"Barry",
        middleName:"",
        lastName:"Allen",
        dateAdded: new Date(Date.now())
        },
        {
        userName: "IT_Guy",
        isMerchant: true,
        isActiveCustomer: false,
        businessName: "Technically perfect fruit pies",
        website: "",
        email: "seriouscyborg@email.com",
        streetAddress1:"8272 Milroy Ln",
        streetAddress2: "",
        city: "Dallas",
        stateOrProvince: "TX",
        zipCode: "75231",
        county: "Dallas",
        longitude: 0,
        latitude: 0,
        phoneNumber:"214-972-1111",
        firstName:"Victor",
        middleName:"",
        lastName:"Stone",
        dateAdded: new Date(Date.now())
        },
        {
        userName: "TooCoolForSchool",
        isMerchant: true,
        isActiveCustomer: false,
        businessName: "Indestructible pastries!",
        website: "",
        email: "farmboyfromouterspace@email.com",
        streetAddress1:"8253 Folcroft Ln",
        streetAddress2: "",
        city: "Dallas",
        stateOrProvince: "TX",
        zipCode: "75231",
        county: "Dallas",
        longitude: 0,
        latitude: 0,
        phoneNumber:"214-972-1111",
        firstName:"Kal",
        middleName:"Clark",
        lastName:"El",
        dateAdded: new Date(Date.now())
        },
        {
        userName: "Emo_Bat",
        isMerchant: true,
        isActiveCustomer: false,
        businessName: "The Dark Chocolate",
        website: "",
        email: "billionaireEmo@email.com",
        streetAddress1:"3715 Whitehall Dr",
        streetAddress2: "",
        city: "Dallas",
        stateOrProvince: "TX",
        zipCode: "75229",
        county: "Dallas",
        longitude: 0,
        latitude: 0,
        phoneNumber:"214-972-1111",
        firstName:"Bruce",
        middleName:"",
        lastName:"Wayne",
        dateAdded: new Date(Date.now())
        },
        {
        userName: "DapperDanMan",
        isMerchant: true,
        isActiveCustomer: false,
        businessName: "Your Penny's Worth Tea",
        website: "",
        email: "theultimatebutler@email.com",
        streetAddress1:"5819 E University Blvd",
        streetAddress2: "5819A",
        city: "Dallas",
        stateOrProvince: "TX",
        zipCode: "75206",
        county: "Dallas",
        longitude: 0,
        latitude: 0,
        phoneNumber:"214-972-1111",
        firstName:"Alfred",
        middleName:"",
        lastName:"Pennyworth",
        dateAdded: new Date(Date.now())
        },
        {
        userName: "TestPilot",
        isMerchant: true,
        isActiveCustomer: false,
        businessName: "Emerald pistachios",
        website: "",
        email: "thetruelantern@email.com",
        streetAddress1:"2111 Holt Rd",
        streetAddress2: "",
        city: "Arlington",
        stateOrProvince: "TX",
        zipCode: "76006",
        county: "Tarrant",
        longitude: 0,
        latitude: 0,
        phoneNumber:"214-972-1111",
        firstName:"Hal",
        middleName:"",
        lastName:"Jordan",
        dateAdded: new Date(Date.now())
        },
        {
        userName: "TheTruthIsOutThere",
        isMerchant: true,
        isActiveCustomer: false,
        businessName: "The Truth is Nuts",
        website: "",
        email: "pagliacci_was_a_joke@email.com",
        streetAddress1:"1908 Mossy Oak St",
        streetAddress2: "",
        city: "Arlington",
        stateOrProvince: "TX",
        zipCode: "76012",
        county: "Tarrant",
        longitude: 0,
        latitude: 0,
        phoneNumber:"214-972-1111",
        firstName:"Walter",
        middleName:"",
        lastName:"Kovacs",
        dateAdded: new Date(Date.now())
        },
        {
        userName: "BatCrazy",
        isMerchant: true,
        isActiveCustomer: false,
        businessName: "",
        website: "",
        email: "battygirl@email.com",
        streetAddress1:"2105 Inverness Dr",
        streetAddress2: "",
        city: "Arlington",
        stateOrProvince: "TX",
        zipCode: "76012",
        county: "Tarrant",
        longitude: 0,
        latitude: 0,
        phoneNumber:"214-972-1111",
        firstName:"Cassandra",
        middleName:"",
        lastName:"Cain",
        dateAdded: new Date(Date.now())
        },
        {
        userName: "ThePhysicist",
        isMerchant: true,
        isActiveCustomer: false,
        businessName: "Atomic Bread",
        website: "",
        email: "limitless_and_bored@email.com",
        streetAddress1:"2208 Park Springs Ct",
        streetAddress2: "",
        city: "Arlington",
        stateOrProvince: "TX",
        zipCode: "76013",
        county: "Tarrant",
        longitude: 0,
        latitude: 0,
        phoneNumber:"214-972-1111",
        firstName:"Jon",
        middleName:"",
        lastName:"Osterman",
        dateAdded: new Date(Date.now())
        },
      {
        userName: "AimeeA",
        isMerchant: true,
        isActiveCustomer: false,
        businessName: "Aimee's Coffee",
        website: "",
        email: "AimeesCoffee@cottageconnect.com",
        streetAddress1:"6195 W. Main St",
        streetAddress2: "",
        city: "Frisco",
        stateOrProvince: "TX",
        zipCode: "75034",
        county: "Collin",
        longitude: 0,
        latitude: 0,
        phoneNumber:"214-312-1235",
        firstName:"Aimee",
        middleName:"",
        lastName:"Black",
        dateAdded: new Date(Date.now())
      },
       {
        userName: "BrianB",
        isMerchant: true,
        isActiveCustomer: false,
        businessName: "Beans by Brian",
        website: "",
        email: "BeansByBrian@cottageconnect.com",
        streetAddress1:"2422 N. Henderson Ave",
        streetAddress2: "",
        city: "Dallas",
        stateOrProvince: "TX",
        zipCode: "75206",
        county: "Dallas",
        longitude: 0,
        latitude: 0,
        phoneNumber:"",
        firstName:"Brian",
        middleName:"",
        lastName:"Stevens",
        dateAdded: new Date(Date.now())
      },
      {
        userName: "Jaimee",
        isMerchant: true,
        isActiveCustomer: false,
        businessName: "Jaimee's Jams",
        website: "",
        email: "JaimeesJams@cottageconnect.com",
        streetAddress1:"6606 Skillman St",
        streetAddress2: "",
        city: "Dallas",
        stateOrProvince: "TX",
        zipCode: "75231",
        county: "Dallas",
        longitude: 0,
        latitude: 0,
        phoneNumber:"",
        firstName:"Jaimee",
        middleName:"",
        lastName:"",
        dateAdded: new Date(Date.now())
      },
       {
        userName: "Piper's Popcorn",
        isMerchant: true,
        isActiveCustomer: false,
        businessName: "Piper's Popcorn",
        website: "",
        email: "PipersPopcorn@cottageconnect.com",
        streetAddress1:"",
        streetAddress2: "",
        city: "Dallas",
        stateOrProvince: "TX",
        zipCode: "75204",
        county: "Dallas",
        longitude: 0,
        latitude: 0,
        phoneNumber:"",
        firstName:"Piper",
        middleName:"",
        lastName:"Harris",
        dateAdded: new Date(Date.now())
      },
       {
        userName: "Spencer",
        isMerchant: true,
        isActiveCustomer: false,
        businessName: "Sweet Candies",
        website: "",
        email: "SweetCandies@cottageconnect.com",
        streetAddress1:"15255  Montfort Dr",
        streetAddress2: "",
        city: "Dallas",
        stateOrProvince: "TX",
        zipCode: "75248",
        county: "Dallas",
        longitude: 0,
        latitude: 0,
        phoneNumber:"",
        firstName:"Spencer",
        middleName:"",
        lastName:"Jefferson",
        dateAdded: new Date(Date.now())
      },
      {
        userName: "TheBreadMan",
        isMerchant: true,
        isActiveCustomer: false,
        businessName: "The Bread Man",
        website: "",
        email: "TheBreadMan@cottageconnect.com",
        streetAddress1:"8008 Cedar Springs Rd",
        streetAddress2: "",
        city: "Dallas",
        stateOrProvince: "TX",
        zipCode: "75235",
        county: "Dallas",
        longitude: 0,
        latitude: 0,
        phoneNumber:"214-332-7890",
        firstName:"",
        middleName:"",
        lastName:"",
        dateAdded: new Date(Date.now())
      },
        {
        userName: "Nuts for Butter",
        isMerchant: true,
        isActiveCustomer: false,
        businessName: "Nuts for Butter",
        website: "",
        email: "NeedAnEmail@noidont.com",
        streetAddress1:"3105 Forest Ln",
        streetAddress2: "",
        city: "Dallas",
        stateOrProvince: "TX",
        zipCode: "75234",
        county: "Dallas",
        longitude: 0,
        latitude: 0,
        phoneNumber:"214-332-7891",
        firstName:"Oliver",
        middleName:"",
        lastName:"Smith",
        dateAdded: new Date(Date.now())
      },
       {
        userName: "Monica",
        isMerchant: true,
        isActiveCustomer: false,
        businessName: "Pies by Monica",
        website: "PiesbyMonica@cottageconnect.com",
        email: "yesyou@do.com",
        streetAddress1:"5525 S. Buckner Blvd",
        streetAddress2: "",
        city: "Dallas",
        stateOrProvince: "",
        zipCode: "75227",
        county: "Dallas",
        longitude: 0,
        latitude: 0,
        phoneNumber:"214-977-8444",
        firstName:"Monica",
        middleName:"",
        lastName:"Geller",
        dateAdded: new Date(Date.now())
      },
       {
        userName: "OnlyGranola",
        isMerchant: true,
        isActiveCustomer: false,
        businessName: "OnlyGranola",
        website: "",
        email: "OnlyGranola@cottageconnect.com",
        streetAddress1:"18253 Marsh Lane",
        streetAddress2: "",
        city: "Dallas",
        stateOrProvince: "TX",
        zipCode: "75287",
        county: "Dallas",
        longitude: 0,
        latitude: 0,
        phoneNumber:"214-954-0044",
        firstName:"Craig",
        middleName:"",
        lastName:"Webber",
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

