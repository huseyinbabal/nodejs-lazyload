module.exports = function (mongoose) {
    var Schema = mongoose.Schema,
            util = require('util'),
            config = require('config'),
            City;

    City = new Schema({
        city:{
            type:String,
            required:true
        },
        loc:{
            type:[Number],
            required:true
        },
        pop:{
            type:String,
            required:true
        },
        state:{
            type:Number,
            required:true
        },
        createDate:{
            type:Date,
            required:false,
            default: Date.now
        }
    });
    return mongoose.model('City', City, 'city');
}

