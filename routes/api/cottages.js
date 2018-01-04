const router = require("express").Router();
const ccController = require("../../controllers/ccController");


//==========================================
// Cottage Routes:
//==========================================

// Matches with "/api/cottages/merchants"
router.route("/merchants")
	.get(ccController.findAllMerchants)
	.post(ccController.createCottage);

// Matches with "/api/cottages/customers
router.route("/customers")
	.get(ccController.findAllCustomers)
	.post(ccController.createCottage);

// Matches with "/api/cottages/cottages/:id
router.route("/cottages/:id")
	.get(ccController.findCottageById)
	.put(ccController.updateCottage)
	.delete(ccController.removeCottage);

//==========================================
// Inventory Routes:
//==========================================

// Matches with "/api/cottages/inventories/:id
router.route("/inventories/:id")
	.get(ccController.findMerchantInventory)
	.put(ccController.updateInventory)
	.delete(ccController.removeInventory);

router.route("/inventories")
	.post(ccController.createInventory);

//==========================================
// Category Routes:
//==========================================

// Matches with "/api/cottages/categories/:id
router.route("/categories/:id")
	.put(ccController.updateCategory)
	.delete(ccController.removeCategory);

router.route("/categories")
	.get(ccController.findAllCategories)
	.post(ccController.createCategory);

  //==========================================
  // Saved Searches Routes:
  //==========================================

// Matches with "/api/cottages/savedsearches/:id

router.route("/savedsearches/:id")
	.get(ccController.findSavedSearches)
	.put(ccController.updateSavedSearches)
	.delete(ccController.removeSavedSearches);

router.route("/savedsearches")
	.post(ccController.createSavedSearches);

  //==========================================
  // Saved Merchants Routes:
  //==========================================

// Matches with "/api/cottages/savedmerchants/:id
router.route("/savedmerchants/:id")
	.get(ccController.findSavedMerchants)
	.put(ccController.updateSavedMerchants)
	.delete(ccController.removeSavedMerchants);

router.route("/savedmerchants")
	.post(ccController.createSavedMerchants);

  //==========================================
  // Message Routes:
  //==========================================

// Matches with "/api/cottages/emailsto/:id
router.route("/emailsto/:id")
	.get(ccController.findMessagesTo);

// Matches with "/api/cottages/emailsto/:id
router.route("/emailsfrom/:id")
	.get(ccController.findMessagesFrom);

// Matches with "/api/cottages/emailsto/:id
router.route("/merchantreviews/:id")
	.get(ccController.findMerchantReviews);

// Matches with "/api/ccmessages
router.route("/ccmessages")
	.post(ccController.createMessage);

// Matches with "/api/ccmessages/:id
router.route("/ccmessages/:id")
	.put(ccController.updateMessage)
	.delete(ccController.removeMessage);

module.exports = router;
