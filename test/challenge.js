
const Challenge = artifacts.require("Challenge") ;

contract('Challenge', () => {
  it("Should deploy smart contract properly", async () => {
    const challenge = await Challenge.deployed() ; 
    console.log(challenge.address) ; 

    const Web3 = require('web3') ; 
    web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545/')) ;
    var chainID = await web3.eth.net.getId() ; 
    const addressFrom = '0xA5c713F475BE55D4dC333d4683D3A2eA7504B725' ; 

    console.log('chainID is ' + chainID  ) ; 


   var gasPrice = "10" ; 
   var gasLimit = 150000 ;

   var nonce = await web3.eth.getTransactionCount(addressFrom) ;
   console.log('nonce is ' + nonce ); 

   var rawTransaction = {
   "from": addressFrom,
   "nonce": web3.utils.toHex(nonce),
   "gasPrice": web3.utils.toHex(gasPrice * 1e9),
   "gasLimit": web3.utils.toHex(gasLimit),
   "to": challenge.address,
   "value": 0.001 ,
   "chainId": chainID 
    };


const EthereumTx = require('ethereumjs-tx').Transaction
const privateKey = Buffer.from(
  '5c7a050c7b0e3a6896e9667a6dff3a6b389c665aaed218c352071890c05520ee',
  'hex',
)

// const txParams = {
//  nonce: '0x00',
//  gasPrice: '0x09184e72a000',
//  gasLimit: '0x2710',
//  to: challenge.address,
//  value: '0x00',
//  data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057',
// }

// The second parameter is not necessary if these values are used
const tx = new EthereumTx(rawTransaction, { })
tx.sign(privateKey)
const serializedTx = tx.serialize()

console.log(serializedTx) ; 

web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'), function(err, hash) {
if (!err)
{
console.log('Tx Sent and hash is:  ' + hash);
}
else
{
console.error(err);
}
});
   




  } ) ; 
} ) ; 









/*

contract('Challenge', () => {
  it("Should deploy smart contract properly", async () => {
    const challenge = await Challenge.deployed() ; 
    console.log(challenge.address) ; 
    assert(challenge.address !== ''); 
  } ) ; 
} ) ; 

// call contract with zero elements, should fail
contract('Challenge', () => {
  it("Should fail when called with zero elements", async () => {
    const challenge = await Challenge.deployed() ; 
    const result = await challenge.receiveArray.call([]) ;  
    console.log('return code: ' + result.toNumber()) ; 
    assert(result.toNumber() === 0) ; 
  } ) ; 
} ) ; 

// call contract with one element
contract('Challenge', () => {
  it("Should pass when called with one element", async () => {
    const challenge = await Challenge.deployed() ; 
    let result = await challenge.receiveArray.call(1) ;  
    console.log('gas consumed: ' + result.toNumber()) ; 
    assert(result.toNumber() > 100000) ; 
  } ) ; 
} ) ; 

// call contract with two elements
contract('Challenge', () => {
  it("Should pass when called with two elements", async () => {
    const challenge = await Challenge.deployed() ; 
    var array = [] ;
    array.push(1) ;
    array.push(2) ; 
    const result = await challenge.receiveArray.call( array, {gas: 200000} ) ;  
    console.log('gas consumed: ' + result.toNumber()) ; 
    assert(result.toNumber() > 100000) ; 
  } ) ; 
} ) ; 


// call contract with less than 100K gas
contract('Challenge', () => {
  it("Should fail when called with lower than required gas", async () => {
    const challenge = await Challenge.deployed() ; 
    var array = [] ;
    array.push(1) ;
    array.push(2) ; 
    const result = await challenge.receiveArray.call( array, {gas: 99999} ) ;  
    console.log('error code: ' + result.toNumber()) ; 
    assert(result.toNumber() === 1) ; 
  } ) ; 
} ) ; 


const Web3 = require('web3') ; 

// hardcoded pubkey &  privkey below: (below privkey was defined when starting ganache-cli)
// 0xA5c713F475BE55D4dC333d4683D3A2eA7504B725,0x5c7a050c7b0e3a6896e9667a6dff3a6b389c665aaed218c352071890c05520ee
const addressFrom = '0xA5c713F475BE55D4dC333d4683D3A2eA7504B725' ; 
const privateKey = new Buffer('0x5c7a050c7b0e3a6896e9667a6dff3a6b389c665aaed218c352071890c05520ee', 'hex') ; 

// call contract 2
contract('Challenge', () => {
  it("Call contract 2", async () => {
    const challenge = await Challenge.deployed() ; 
    
   var Tx = require('ethereumjs-tx') ;
   web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545/')) ;
   var gasPrice = "2" ; 
   var gasLimit = 150000 ;
   var amountToSend = "0.01" ; 
   var nonce = web3.eth.getTransactionCount(addressFrom) ;
   var rawTransaction = {
   "from": addressFrom,
   "nonce": web3.utils.toHex(nonce),
   "gasPrice": web3.utils.toHex(gasPrice * 1e9),
   "gasLimit": web3.utils.toHex(gasLimit),
   "to": challenge.address,
   "value": amountToSend ,
   "chainId": 1 //remember to change this
    };

var tx = new Tx(rawTransaction);
tx.sign(privateKey);
var serializedTx = tx.serialize();
console.log('serializedTx : ' + serializedTx);
web3.eth.sendRawTransaction('0x' + serializedTx.toString('hex'), function(err, hash) {
if (!err)
{
console.log('Txn Sent and hash is '+hash);
}
else
{
console.error(err);
}
});
   


  } ) ; 
} ) ; 

*/



