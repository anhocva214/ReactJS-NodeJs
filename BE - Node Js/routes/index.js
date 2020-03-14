var express = require('express');
var router = express.Router();
const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'products',
  password: '122112',
  port: 5432,
})


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// get data from postgreSql
router.get('/getdata', (req, res, next) => {
  pool.query('SELECT * FROM product_info', (err, data) => {
    if (err) {
      console.log(err);
    }
    else {
      // console.log(data);
      res.send(data.rows);
    }
  });

})


router.get('/add', (req, res, next)=>{
  res.render('add', {});
})

router.post('/add', (req, res, next)=>{
  var product_name = req.body.product_name;
  var product_price = req.body.product_price;
  var product_img = req.body.product_img;

  pool.query('INSERT INTO product_info (product_name, product_price, product_img) VALUES ($1, $2, $3) ', [product_name, product_price, product_img], (err, resp)=>{
    if (err){
      console.log(err);
    }
    else{
      res.send("gửi thành công");
    }
  })

  
})

module.exports = router;
