var util = require('util');
var Logger = require('devnull');
var logger = new Logger({namespacing : 0});
var City = require('../models/City');

CityController = function (app, mongoose, config) {
    var City = mongoose.model('City');

    /**
     * List recent blog posts
     */
    app.get('/city/list/:page/?', function(req, res, next) {
        util.log(req.method + " request to url : " + req.route.path);
        var offset = 0;
        if (typeof req.params.page !== 'undefined')
            offset = req.params.page*30;
        var query = City.find({}).sort({'createDate': -1}).skip(offset).limit(30);
        query.execFind(function(err, cities) {
            if (!err) {
                res.render('city-list', {
                    title: "Cities",
                    cities: cities
                });
            } else {
                res.status(500);
                res.render('500', {
                    err: err,
                    url: req.url
                });
            }
        });
    });

    app.get('/city/loadCity/:index/?', function(req, res, next) {
        util.log(req.method + " request to url : " + req.route.path);
        var query = City.find({}).sort({'createDate': -1}).skip(index).limit(30);
        query.execFind(function(err, cities) {
            if (!err) {
                res.render('city-list', {
                    title: "Cities",
                    cities: cities,

                });
            } else {
                res.status(500);
                res.render('500', {
                    err: err,
                    url: req.url
                });
            }
        });
    });
}

module.exports = CityController;