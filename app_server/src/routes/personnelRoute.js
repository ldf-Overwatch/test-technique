const express = require('express');
const personnelController = require('../controllers/personnelController');

const router = express.Router();

router
  .route('/')
  .get(personnelController.listPersonnelController)
  .post(personnelController.createPersonnelController);

router.route('/:id').delete(personnelController.deletePersonnelController);

module.exports = router;
