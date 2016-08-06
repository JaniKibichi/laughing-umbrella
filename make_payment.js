
//Initialize
var StellarBase = require("stellar-base");

//define account
var keypair = StellarBase.Keypair.fromSeed('SBOWQOQ3DFJZTAEPMSBHVZC7IUNFUDHU7X5G2GWUQHGUFHQKTUCS47HX');
var account = new StellarBase.Account(keypair.accountId(),"11458955565858816");

//define asset, amount 
var asset = StellarBase.Asset.native();
var amount = "100";

//Build the transaction
var transaction = new StellarBase.TransactionBuilder(account)
.addOperation(StellarBase.Operation.payment({
    destination: StellarBase.Keypair.random().accountId(), 
    asset: asset, 
    amount: amount 
  }))
  .build();

//console log
console.log(transaction.toEnvelope().toXDR().toString("base64"));