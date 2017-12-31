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
  // Message Routes:
  //==========================================


module.exports = router;
