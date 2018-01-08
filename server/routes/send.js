const express = require('express');
const router2 = new express.Router();

// router2.get('/info/:id', function(req, res){
//   console.log(req.params.id);
//   res.end();
// });

const ccController = require("../controllers/ccController");



	router2.post('/info', function(req, res){
	  let newName = req.query.firstName + ' The Man!' + req.query.lastName;
	  res.send(newName);
	// });


	//==========================================
	// Cottage Routes:
	//==========================================

	// Matches with "/api/cottages/merchants"
	router2.route("/merchants")
		.get(ccController.findAllMerchants)
		.post(ccController.createCottage);

	// Matches with "/api/cottages/customers
	router2.route("/customers")
		.get(ccController.findAllCustomers)
		.post(ccController.createCottage);

	// Matches with "/api/cottages/cottages/:id
	// for a specific merchant
	router2.route("/cottages/:id")
		.get(ccController.findCottageById)
		.put(ccController.updateCottage)
		.delete(ccController.removeCottage);

	// Route for performing a merchant search
	// Receives a JSON containing a .query
	// which contains the search criteria
	router2.route("/searchmerchants")
		.get(ccController.searchMerchants);

	//==========================================
	// Inventory Routes:
	//==========================================

	// Matches with "/api/cottages/inventories/:id
	router2.route("/inventories/:id")
		.get(ccController.findMerchantInventory)
		.put(ccController.updateInventory)
		.delete(ccController.removeInventory);

	router2.route("/inventories")
		.post(ccController.createInventory);

	//==========================================
	// Category Routes:
	//==========================================

	// Matches with "/api/cottages/categories/:id
	router2.route("/categories/:id")
		.put(ccController.updateCategory)
		.delete(ccController.removeCategory);

	router2.route("/categories")
		.get(ccController.findAllCategories)
		.post(ccController.createCategory);

	  //==========================================
	  // Saved Searches Routes:
	  //==========================================

	// Matches with "/api/cottages/savedsearches/:id
	router2.route("/savedsearches/:id")
		.get(ccController.findSavedSearches)
		.put(ccController.updateSavedSearches)
		.delete(ccController.removeSavedSearches);

	router2.route("/savedsearches")
		.post(ccController.createSavedSearches);

	  //==========================================
	  // Saved Merchants Routes:
	  //==========================================

	// Matches with "/api/cottages/savedmerchants/:id
	router2.route("/savedmerchants/:id")
		.get(ccController.findSavedMerchants)
		.put(ccController.updateSavedMerchants)
		.delete(ccController.removeSavedMerchants);

	router2.route("/savedmerchants")
		.post(ccController.createSavedMerchants);

	  //==========================================
	  // Message Routes:
	  //==========================================

	// Matches with "/api/cottages/emailsto/:id
	router2.route("/emailsto/:id")
		.get(ccController.findMessagesTo);

	// Matches with "/api/cottages/emailsto/:id
	router2.route("/emailsfrom/:id")
		.get(ccController.findMessagesFrom);

	// Matches with "/api/cottages/emailsto/:id
	router2.route("/merchantreviews/:id")
		.get(ccController.findMerchantReviews);

	// Matches with "/api/ccmessages
	router2.route("/ccmessages")
		.post(ccController.createMessage);

	// Matches with "/api/ccmessages/:id
	router2.route("/ccmessages/:id")
		.put(ccController.updateMessage)
		.delete(ccController.removeMessage);

});


module.exports = router2;