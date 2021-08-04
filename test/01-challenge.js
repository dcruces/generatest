
const Challenge = artifacts.require("Challenge") ;

contract('Challenge', () => 
{
  it("Using sendSignedTx: should consume gas between 100k and 120K", async () => {
    const challenge = await Challenge.deployed() ; 

    const Web3 = require('web3') ; 
    web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545/')) ;
    const addressFrom = '0xA5c713F475BE55D4dC333d4683D3A2eA7504B725' ; 

    var nonce = await web3.eth.getTransactionCount(addressFrom) ;
  
  // calling function with one argument
        let data = await web3.eth.abi.encodeFunctionCall
        (
        
          {
            name: 'receiveArray',
            type: 'function',
            inputs: [ {
                        type: 'bytes',
                        name: '_array'
                     } ]
          },[1] 
        
        );
 
 // Sending 120K gas in the transaction
   var rawTransaction = {
   "from": addressFrom,
   "nonce": web3.utils.toHex(nonce),
   "gasPrice": web3.utils.toHex(20000000001),
   "gasLimit": web3.utils.toHex(120000),
   "to": challenge.address,
   "value": '0x00',
   "data" : data, 
   "chainId": 1 // this was set in ganache-cli startup
    };


const EthereumTx = require('ethereumjs-tx').Transaction
const privateKey = Buffer.from(
  '5c7a050c7b0e3a6896e9667a6dff3a6b389c665aaed218c352071890c05520ee',
  'hex',
)

const tx = new EthereumTx(rawTransaction, { })
tx.sign(privateKey)
const serializedTx = tx.serialize()


await web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'), function(err, hash) {
if (!err)
{
 
web3.eth.getTransactionReceipt( hash, function(err, res)
 {
   console.log('gas used is: ' + res.gasUsed ) ; 
   assert(res.gasUsed > 100000) ; 
  }
     ) ; 

} 

  } ) ; // end sendSignedTx

} ) ; // end it

} ) ; // end challenge


contract('Challenge', () => 
{
  it("Using sendSignedTx: should fail if gas sent is lower than 100K", async () => {
    const challenge = await Challenge.deployed() ; 

    const Web3 = require('web3') ; 
    web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545/')) ;
    const addressFrom = '0xA5c713F475BE55D4dC333d4683D3A2eA7504B725' ; 

    var nonce = await web3.eth.getTransactionCount(addressFrom) ;
  
  // calling function with one argument
        let data = await web3.eth.abi.encodeFunctionCall
        (
        
          {
            name: 'receiveArray',
            type: 'function',
            inputs: [ {
                        type: 'bytes',
                        name: '_array'
                     } ]
          },[1] 
        
        );
 
 // Sending 99K gas in the transaction
   var rawTransaction = {
   "from": addressFrom,
   "nonce": web3.utils.toHex(nonce),
   "gasPrice": web3.utils.toHex(20000000001),
   "gasLimit": web3.utils.toHex(99000),
   "to": challenge.address,
   "value": '0x00',
   "data" : data, 
   "chainId": 1 // this was set in ganache-cli startup
    };


const EthereumTx = require('ethereumjs-tx').Transaction
const privateKey = Buffer.from(
  '5c7a050c7b0e3a6896e9667a6dff3a6b389c665aaed218c352071890c05520ee',
  'hex',
)

const tx = new EthereumTx(rawTransaction, { })
tx.sign(privateKey)
const serializedTx = tx.serialize()


await web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'), function(err, hash) {
if (!err)
{
 
web3.eth.getTransactionReceipt( hash, function(err, res)
 {
   console.log('gas used is: ' + res.gasUsed ) ; 
   assert(res.gasUsed < 100000) ; 
  }
     ) ; 

} 

  } ) ; // end sendSignedTx

} ) ; // end it

} ) ; // end challenge





