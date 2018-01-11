const ccGeoHelper = require("./ccGeoHelper");

var testme = ccGeoHelper.geocode("2727 Shelby Avenue, Dallas, TX 75219");

// console.log(testme);

var testme2 = ccGeoHelper.radiusSearch({ lat: 32.8074316, lon: -96.81256359999999, distance: 10 });

// console.log(testme2);