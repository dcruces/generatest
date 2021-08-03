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
