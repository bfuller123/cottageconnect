const db = require("../models");

// Defining methods for the ccController
module.exports = {

  //==========================================
  // Cottage Routes:
  //==========================================

  findAllMerchants: function(req, res) {
    db.Cottage
      .find({isMerchant: true})
      .sort({businessName: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllCustomers: function(req, res) {
    db.Cottage
      .find({isCustomer: true})
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createCottage: function(req, res) {
    db.Cottage
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findCottageById: function(req, res) {
    db.Cottage
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateCottage: function(req, res) {
    db.Cottage
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeCottage: function(req, res) {
    db.Cottage
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //==========================================
  // Inventory Routes:
  //==========================================

  findMerchantInventory: function(req, res) {
    db.Inventory
      .find({cottageId: req.params.id})
      .sort({ sortOrder: 1 }) 
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateInventory: function(req, res) {
    db.Inventory
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createInventory: function(req, res) {
    db.Inventory
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeInventory: function(req, res) {
    db.Inventory
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //==========================================
  // Category Routes:
  //==========================================

  findAllCategories: function(req, res) {
    db.Category
      .find({})
      .sort({categoryName: 1 }) 
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateCategory: function(req, res) {
    db.Category
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createCategory: function(req, res) {
    db.Category
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeCategory: function(req, res) {
    db.Category
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //==========================================
  // Saved Searches Routes:
  //==========================================

  findSavedSearches: function(req, res) {
    db.SavedSearches
      .find({customerId: req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateSavedSearches: function(req, res) {
    db.SavedSearches
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createSavedSearches: function(req, res) {
    db.SavedSearches
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeSavedSearches: function(req, res) {
    db.SavedSearches
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //==========================================
  // Saved Merchants Routes:
  //==========================================

  findSavedMerchants: function(req, res) {
    db.SavedMerchants
      .find({customerId: req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateSavedMerchants: function(req, res) {
    db.SavedMerchants
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createSavedMerchants: function(req, res) {
    db.SavedMerchants
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeSavedMerchants: function(req, res) {
    db.SavedMerchants
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //==========================================
  // Message Routes:
  //==========================================

  findMessagesTo: function(req, res) {
    db.ccMessage
      .find(req.query)
      .sort({ sortOrder: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findMessagesFrom: function(req, res) {
    db.ccMessage
      .find(req.query)
      .sort({ sortOrder: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findMerchantReviews: function(req, res) {
    db.ccMessage
      .find(req.query)
      .sort({ sortOrder: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }

};
