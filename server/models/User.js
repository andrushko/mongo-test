const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const environment = process.env.NODE_ENV;
const stage = require('../config')[environment];
const seed = require('./seed')

// schema maps to a collection
const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: {
    type: 'Number',
    required: true,
    unique: true
  },
  firstName: {
    type: 'String',
    required: true,
    trim: true,
    unique: false
  },
  lastName: {
    type: 'String',
    required: true,
    trim: true,
    unique: false
  },
  gravatar: {
    type: 'String',
    required: true,
    trim: true,
    unique: false
  },
  email: {
    type: 'String',
    required: true,
    trim: true,
    unique: false
  },
  password: {
    type: 'String',
    required: true,
    trim: true
  }
});

// encrypt password before save
userSchema.pre('save', function(next) {
  const user = this;
  if(!user.isModified || !user.isNew) {
    next();
  } else {
    bcrypt.hash(user.password, stage.saltingRounds, function(err, hash) {
      if (err) {
        console.log('Error hashing password for user', user.name);
        next(err);
      } else {
        user.password = hash;
        next();
      }
    });
  }
});

module.exports = mongoose.model('User', userSchema); // instance of schema
