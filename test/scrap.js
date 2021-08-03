

// call contract with zero elements, should fail
/*

contract('Challenge', () => {
  it("Using eth_sendRawTx: should fail when called with zero elements", async () => {
    const challenge = await Challenge.deployed() ; 
    console.log('contract address: ' + challenge.address ) ; 
    // const result = await challenge.receiveArray.call([]) ;  
    // console.log('return code: ' + result.toNumber()) ; 
    // assert(result.toNumber() === 0) ; 
    console.log('accounts: ' + await web3.eth.getAccounts() ) ; 

let data2 = challenge.methods
          .receiveArray()
          .encodeABI();

    const txData = 
       {
        gasLimit: web3.utils.toHex(150000), // 150K gas 
        gasPrice: web3.utils.toHex(10e9), // 10 Gwei, irrelevant for this test case
        to: challenge.address,
        from: addressFrom,
        //    value: web3.utils.toHex(web3.utils.toWei('123', 'wei')) // thanks @abel30567
       // data: challenge.methods.receiveArray().encodeABI()
        data: data2 
        // if you want to send raw data (e.g. contract execution) rather than sending tokens,
        // use 'data' instead of 'value' (thanks @AlecZadikian9001)
        // e.g. myContract.methods.myMethod(123).encodeABI() (thanks @NguyenHoangSon96)
        }

  const sendRawTransaction = txData =>
  // get the number of transactions sent so far so we can create a fresh nonce
  web3.eth.getTransactionCount(addressFrom).then(txCount => {
    const newNonce = web3.utils.toHex(txCount)
    const transaction = new Tx({ ...txData, nonce: newNonce }, { chain: 'development' }) // or 'rinkeby'
    transaction.sign(privateKey)
    const serializedTx = transaction.serialize().toString('hex')
    return web3.eth.sendSignedTransaction('0x' + serializedTx)
    })

sendRawTransaction(txData).then(result =>
  result
    .on('transactionHash', txHash => {
      console.log('transactionHash:', txHash)
    })
    .on('receipt', receipt => {
      console.log('receipt:', receipt)
    })
    .on('confirmation', (confirmationNumber, receipt) => {
      if (confirmationNumber >= 1) {
        console.log('confirmations:', confirmationNumber, receipt)
      }
    })
    .on('error:', error => {
      console.error(error)
    })
   )


  } ) ; 
} ) ; 



npx ganache-cli -m "stereo consider quality wild fat farm symptom bundle laundry side one lemon" --account '0x5c7a050c7b0e3a6896e9667a6dff3a6b389c665aaed218c352071890c05520ee,1000000000000000000' -q &

echo "Stopping local blockchain ganache-cli" 
kill -9 $(lsof -t -i:8545)

*/ 







