'use strict';

//create the keypair
var Keypair = require("stellar-base").Keypair;

//create the account
var newAccount = Keypair.random();

//log to screen
console.log("New key pair created!");
console.log(" Account ID: " + newAccount.accountId());
console.log(" Seed: "+ newAccount.seed());