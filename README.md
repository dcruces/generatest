# generatest

English
Goal: Evaluate knowledge of the Ethereum environment and related libraries.

Statement: Develop a smart contract with a method that receives an array of bytes and that its execution has a cost of between 100,000 and 120,000 gas units.

Demonstration: The smart contract must be tested with Truffle or Hardhat. Whatever the environment chosen, all actions involving the smart contract must be performed both with direct JSON-RPC interactions (i.e. through the eth_sendRawTransaction method) and with the mechanism proposed by the underlying library (e.g. using Truffle's _migrations_).

Requirements: The challenge will be tested through the command `yarn test`

Bonus: Minimize direct project dependencies

Estimated time: 2-3 hours

------------ 0 ---------------------
# STEPS TO RUN

1- Pre-requisites: 
   node shall be installed, version v16.2.0 or higher
   yarn shall be installed, version 1.22.10 or higher
   Linux or Mac computer (it was not tested on MS Windows so can't guarantee will work in this target OS)

2- Make sure to have your local port TCP 8545 free as this will be used by the local blockchain (ganache-cli)

3- Position in the root of the project; and execute 'yarn test'


