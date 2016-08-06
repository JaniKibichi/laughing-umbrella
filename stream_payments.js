'use strict';
//initiate eventsource
var EventSource = require('eventsource');

//follow payments using EventStream
var es = new EventSource('https://horizon-testnet.stellar.org/accounts/GCK54HA7P5SGMLM5Y5ODULBAGDCQVT7IOWFNR7MD2GE7MRJLVJ2FQWYU/payments');

es.onmessage = function(message){
	//if we have a payment message return parsed JSON 
	var result = message.data ? JSON.parse(message.data) : message;
	console.log('New payment:');
	console.log(result);
};

es.onerror = function(error){
  var paymenterror = error;
  console.log('An error occured!');
  console.log(paymenterror);
};
