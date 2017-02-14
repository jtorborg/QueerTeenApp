var express = require('express');
var router = express.Router();
var pg = require('pg');

var config = {
    database: 'hackgap'
};

// initialize the database connection pool
var pool = new pg.Pool(config);

//modules
var testModule = require('../modules/testModule.js');
console.log(testModule.test("\n\n\n\ntestRoute.js: testing module connection"));

router.get('/', function(req, res) {

    pool.connect(function(err, client, done) {

        if (err) {
            console.log('Error connecting the DB', err);
            res.sendStatus(500);
            done();
            return;

        } //end of if statement
        client.query('SELECT * FROM volunteers;', function(err, result) {
            done();
            if (err) {
                console.log('err', err);
                res.sendStatus(500);
                return;
            } //end of if

            res.send(result.rows); //!!!@@@send back to AJAX success
        }); //end of client query
    }); //end
  }); //end of router get
// //AJAX requests:
// router.delete('/:id', function(req, res) {
//     var id = req.params.id;
//     pg.connect(connectionString, function(err, client, done) {
//         if (err) {
//             res.sendStatus(500);
//             console.log("\n \n \n \n!!!HEY ERROR CONSOLE LOG HERE!!!\n error in DELTE, pg.connect\n", err, "\n \n \n \n");
//         }
//
//         //To manage strings and refrences cleaner
//         var refrenceValues = [id];
//         var queryString = 'DELETE FROM testbase WHERE id = $1';
//
//         client.query(queryString, refrenceValues,
//             function(err, result) {
//                 done();
//                 if (err) {
//                     console.log("\n \n \n \n!!!HEY ERROR CONSOLE LOG HERE!!!\n error in DELETE, client.query: ", err, "\n \n \n \n");
//                     res.sendStatus(500);
//                     return;
//                 }
//                 res.sendStatus(200);
//             });
//     });
// });
//
// router.get('/', function(req, res) {
//     pg.connect(connectionString, function(err, client, done) {
//         if (err) {
//             res.sendStatus(500);
//             console.log("\n \n \n \n!!!HEY ERROR CONSOLE LOG HERE!!!\n error in GET, pg.connect", err, "\n \n \n \n");
//         }
//
//         //To manage strings and refrences cleaner
//         var queryStringGET = 'SELECT * FROM testbase';
//
//         client.query(queryStringGET,
//             function(err, result) {
//                 done(); //closes connection, I only can have ten :(
//                 if (err) {
//                     res.sendStatus(500);
//                     console.log("\n \n \n \n!!!HEY ERROR CONSOLE LOG HERE!!!\n error in GET, client.query: ", err, "\n \n \n \n");
//                     return;
//                 }
//                 res.send(result.rows);
//             });
//     });
// });
//
// router.post('/', function(req, res) {
//     var item = req.body;
//
//     pg.connect(connectionString, function(err, client, done) {
//         if (err) {
//             res.sendStatus(500);
//             console.log("\n \n \n \n!!!HEY ERROR CONSOLE LOG HERE!!!\n error in POST, pg.connect", err, "\n \n \n \n");
//         }
//
//         //To manage strings and refrences cleaner
//         var queryString = 'INSERT INTO testbase (item_name, item_amount) VALUES ($1, $2)';
//         var refrenceValues = [item.item_name, (item.item_amount)];
//
//
//         client.query(queryString, refrenceValues,
//
//             function(err, result) {
//                 done();
//                 if (err) {
//                     res.sendStatus(500);
//                     console.log("\n \n \n \n!!!HEY ERROR CONSOLE LOG HERE!!!\n error in POST, client.query: ", err, "\n \n \n \n");
//                     return;
//                 }
//                 res.send(result.rows);
//             });
//     });
// });
//
// router.put('/:id', function(req, res) {
//     var id = req.params.id;
//     var rowValue = req.body;
//
//     pg.connect(connectionString, function(err, client, done) {
//         if (err) {
//             console.log("\n \n \n \n!!!HEY ERROR CONSOLE LOG HERE!!!\n error in PUT, pg.connect", err, "\n \n \n \n");
//             res.sendStatus(500);
//         }
//
//         //To manage strings and refrences cleaner
//         var queryString = 'UPDATE testbase SET item_name = $1, item_amount = $2 WHERE id = $3';
//         var refrenceValues = [rowValue.item_name, rowValue.item_amount, id];
//
//         client.query(queryString, refrenceValues,
//
//             function(err, result) {
//                 done();
//                 if (err) {
//                     res.sendStatus(500);
//                     console.log("\n \n \n \n!!!HEY ERROR CONSOLE LOG HERE!!!\n error in PUT, client.query: ", err, "\n \n \n \n");
//                     return;
//                 }
//                 res.sendStatus(200);
//
//             });
//
//     });
//
// });



module.exports = router;
