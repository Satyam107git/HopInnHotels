const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const User = require('../../models/User');
const RoomDetail = require('../../models/RoomDetail');

router.post(
  '/',
  [
    auth,
    [
      check('roomType', 'Please select room').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
   
      const roomDetails = new RoomDetail({
        roomType: req.body.roomType,
        arrivalDate: req.body.arrivalDate,
        departureDate: req.body.departureDate,
        user: req.user.id,
      });
      console.log(roomDetails)
      await roomDetails.save();
      res.json(roomDetails);
    } catch (err) {
      console.log(err.message);
      res.status(500).send('Server Error');
    }
  }
);



module.exports = router;