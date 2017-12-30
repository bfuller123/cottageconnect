const router = require("express").Router();
const ccController = require("../../controllers/ccController");

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

module.exports = router;
