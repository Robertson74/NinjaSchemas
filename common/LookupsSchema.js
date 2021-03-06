var mongoose = require('mongoose');
var sharedSchema = require('../sharedSchemas');

var lookupsSchema = new mongoose.Schema({
    meta: sharedSchema.metaSchema,
    menuItemTags: [String],
    contactTags: [String],
    roles:[String]
});

module.exports = lookupsSchema;