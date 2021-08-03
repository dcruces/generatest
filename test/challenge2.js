const Web3 = require('web3');
const EthUtil = require('ethereumjs-util');
const EthTx = require('ethereumjs-tx');


async function test() {

    let web3Api = new Web3(new Web3.providers.HttpProvider("http://localhost:8545/"));
    let _nonce ;
    try{
        _nonce = await web3Api.eth.getTransactionCount(" ");
    } catch (error) {
        console.error(error);
        return process.exit(1);
    }

    try{
        let data = web3Api.eth.abi.encodeFunctionCall(
        {
            name: 'receiveArray',
            type: 'function',
            inputs: [{
                type: 'uint256',
                name: '_mtcnWeis'
            }]
        },
        [web3Api.utils.toWei(avgAskPrice.toString().replace('.', ''))]);

        let txParams = {
            nonce: EthUtil.bufferToHex(_nonce),
            gasPrice: EthUtil.bufferToHex(config.gasPrice),
            gasLimit: EthUtil.bufferToHex(config.gasLimit),
            to: oracleParam.value,
            value: '0x00',
            data: data,
        };

        let tx = new EthTx(txParams);
        tx.sign(new Buffer(config.privateKey, 'hex'));
        let receipt = await web3Api.eth.sendSignedTransaction('0x' + tx.serialize().toString('hex'));

        console.info('AVG Ask Price: ' + avgAskPrice + ' Hash: ' + receipt.blockHash);
        return process.exit(0);
    } catch(error) {
        console.error(error);
        return process.exit(1);
    }

}

test()

ANOTHER BELOW

module.exports = function() { 

    this.sendToBC = function(a,b,callback) 

    {
        const util = require('ethereumjs-util');    
        var Tx = require('ethereumjs-tx');
        var privateKey = new Buffer('b470e4eaac750bd65150070e0e3d5b0547e98cdac4150019daf3e4ce077b19b1', 'hex') ; 
        var Web3 = require('web3');
        web3 = new Web3(new Web3.providers.HttpProvider('https://kovan.infura.io/neFUmy0oo8dFX3HIk31F'));

        web3.eth.getTransactionCount('0x093D25372E51A0d186989083E3b15225d215813A', function(error, _nonce){
    if (error) return (error,'') ; 
    if(!error)
       {
         var dataOut = '0x8d6cc56d' + data ; 
         
         var rawTx = {
            nonce: _nonce,
            gasPrice: '0x4A817C800', // 20000000000 weis
            gasLimit: '0xF37E', // 62334
            to: '0x31d94f548d9e8b6f4ae3e447014a22f0d9cdf1b2', 
            value: '0x00', 
            data: dataOut  
                      }

        var tx = new Tx(rawTx);
        tx.sign(privateKey);
        var serializedTx = tx.serialize();
        
        web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'), function(err, hash) {
        if (!err) callback ('',hash) ; 
           else callback(err,''); 
        }); // end send signed tx


       } // End not error getting nonce


}) ; // End getTransactionCount




    } // end sendToBC


} // end exports
