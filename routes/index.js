var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST home page. */
router.post('/', function(req, res, next) {
  res.status(200).json({
    type: `POST`
  })
});

/* PUT home page. */
router.put('/', function(req, res, next) {
  res.status(200).json({
    type: `POST`
  })
});

/* DELETE home page. */
router.delete('/', function(req, res, next) {
  res.status(200).json({
    type: `DELETE`
  })
});

module.exports = router;
