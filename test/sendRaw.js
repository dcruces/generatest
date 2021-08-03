
const Web3 = require('web3') ; 
web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545/')) ;
// const chainID = await web3.eth.net.getId() ; 
const addressFrom = '0xA5c713F475BE55D4dC333d4683D3A2eA7504B725' ; 


web3.eth.net.getId().
    then( (chainID) => {
    console.log('chain id is: ' + chainID ); 


web3.eth.getTransactionCount(addressFrom).
    then( (nonce) => {
    console.log('nonce is: ' + nonce ); 

   var gasPrice = "10" ; 
   var gasLimit = 150000 ;
  
   var rawTransaction = {
   "from": addressFrom,
   "nonce": web3.utils.toHex(nonce),
   "gasPrice": web3.utils.toHex(gasPrice * 1e9),
   "gasLimit": web3.utils.toHex(gasLimit),
   "to": '0x9aa23bcdb51785e79eaff318e7db61b0befbd905',
   "value": 0.001 ,
   "chainId": chainID 
    };
   const EthereumTx = require('ethereumjs-tx').Transaction
   const privateKey = Buffer.from(
  '5c7a050c7b0e3a6896e9667a6dff3a6b389c665aaed218c352071890c05520ee',
  'hex',
   )
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






     } ).
    catch(console.error);
     




     } ).
    catch(console.error);


// const txParams = {
//  nonce: '0x00',
//  gasPrice: '0x09184e72a000',
//  gasLimit: '0x2710',
//  to: challenge.address,
//  value: '0x00',
//  data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057',
// }

// The second parameter is not necessary if these values are used



 