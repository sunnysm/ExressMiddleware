const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  res
    .send({
      data: [
        {
          fname: 'Sunny',
          lname: 'Attwal',
          email: 'sunny.zion16@gmail.com',
          password: 'password',
        },
      ],
      totalRecord: 102,
    })
    .sendStatus(200);
});

module.exports = router;
