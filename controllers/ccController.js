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
      .find(req.query)
      .sort({ sortOrder: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //==========================================
  // ccMessage Routes:
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
