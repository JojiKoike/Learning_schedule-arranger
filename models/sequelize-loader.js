'use strict';
var express = require('express');
const Sequelize = require('sequelize');

var app = express();

var isLocalDevEnv = app.get('env') === "development" || app.get('env') === "test"
var config = isLocalDevEnv ? require('../config.json') : "";
var DB_URL = isLocalDevEnv ? config.DB_URL : process.env.DB_URL;

const sequelize = new Sequelize(DB_URL);

module.exports = {
  database: sequelize,
  Sequelize: Sequelize
}