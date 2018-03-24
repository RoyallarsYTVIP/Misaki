const Sequelize = require("sequelize");
const Database = require("../structures/Database.js");

const settings = Database.db.define("settings", {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
    allowNull: false,
    unique: true
  }, 
  prefix: {
    type: Sequelize.STRING,
    defaultValue: "m.",
    allowNull: false
  }, 
  modRole: {
    type: Sequelize.STRING,
    defaultValue: "Moderator",
    allowNull: false
  }, 
  adminRole: {
    type: Sequelize.STRING,
    defaultValue: "Administrator",
    allowNull: false
  }, 
  systemNotice: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
    allowNull: false
  }, 
  levelNotice: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false
  }, 
  welcomeEnabled: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false
  }, 
  welcomeChannel: {
    type: Sequelize.STRING,
    defaultValue: "welcome",
    allowNull: false
  }, 
  welcomeType: {
    type: Sequelize.STRING,
    defaultValue: "text",
    allowNull: false
  }, 
  socialSystem: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false
  }, 
  socialInventory: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false
  }, 
  dailyTime: {
    type: Sequelize.INTEGER,
    defaultValue: 24,
    allowNull: false
  }, 
  dailyPoints: {
    type: Sequelize.INTEGER,
    defaultValue: 250,
    allowNull: false
  }, 
  minPoints: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
    allowNull: false
  }, 
  maxPoints: {
    type: Sequelize.INTEGER,
    defaultValue: 20,
    allowNull: false
  },
  tokenPrice: {
    type: Sequelize.INTEGER,
    defaultValue: 100,
    allowNull: false
  }
});


module.exports = settings;