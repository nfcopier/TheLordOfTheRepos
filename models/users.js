var assert = require('assert')
var db = require('../db')

exports.insert = function(user, callback) {
  // Get the users collection
  var collection = db.get().collection('users')
  // Insert a user
  collection.insert(user, function(err, result) {
    assert.equal(err, null)
    assert.equal(1, result.result.n)
    assert.equal(1, result.ops.length)
    console.log('Inserted 1 document into the users collection')
    callback(result)
  })
}

exports.find = function(id, callback) {
  // Get the users collection
  var collection = db.get().collection('users')
  // Find a user
  collection.findOne({'_id': id}, function(err, document) {
    assert.equal(err, null)
    console.log('Found 1 user document')
    callback(document)
  })
}

exports.update = function(user, callback) {
  // Get the users collection
  var collection = db.get().collection('users')
  user._id = user._id
  // Update the user
  collection.update({'_id': user._id}, user, function(err, result) {
    assert.equal(err, null)
    assert.equal(1, result.result.n)
    console.log('Updated 1 document in the users collection')
    callback()
  });
};

exports.addSearch = function(userId, search, callback) {
  var collection = db.get().collection('users');
  //check to see if searches array exsits and if this search is already there
  collection.findOne({'_id': userId}, function(err, document) {
    assert.equal(err, null);
    if(!document.searches || document.searches.indexOf(search) === -1) {
    //Add the search
      collection.update(
        {'_id': userId},
        { $push: { searches: search }},
        function(err, result) {
          assert.equal(err, null);
          assert.equal(1, result.result.n);
          console.log('Added 1 saved search to a user document');
        });
    }
    callback();
  });
};

exports.removeSearch = function(userId, search, callback) {
  var collection = db.get().collection('users');
  collection.update(
    {'_id': userId},
    { $pull: {searches: search }},
    function(err, result) {
      assert.equal(err, null);
      assert.equal(1, result.result.n);
      console.log('Removed 1 saved search from a user document');
      callback();
    });
};
