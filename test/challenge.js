const Challenge = artifacts.require("Challenge");

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
    const result = await challenge.receiveArray.call([1]) ;  
    console.log('gas consumed: ' + result.toNumber()) ; 
    assert(result.toNumber() > 100000) ; 
  } ) ; 

} ) ; 

// call contract with less than 100K gas
contract('Challenge', () => {
  it("Should fail when called with lower than required gas", async () => {
    const challenge = await Challenge.deployed() ; 
    const result = await challenge.receiveArray.call( [1,2], {gas: 99999} ) ;  
    console.log('error code: ' + result.toNumber()) ; 
    assert(result.toNumber() === 1) ; 
  } ) ; 

} ) ; 


// call contract with three elements
contract('Challenge', () => {
  it("Should pass when called with three elements", async () => {
    const challenge = await Challenge.deployed() ; 
    const result = await challenge.receiveArray.call([1,2,3]) ;  
    console.log('gas consumed: ' + result.toNumber()) ; 
    assert(result.toNumber() > 100000) ; 
  } ) ; 

} ) ; 



contract('Challenge', () => {
  it("Should pass when called with the max elements allowed: 255", async () => {
    const challenge = await Challenge.deployed() ; 
    // var foo = new Array(5);    // 44 is the max amount of elements, so we stress test with one more
    var array = [];

     for (var i = 1; i <= 255; i++) {
        array.push(i);
        }

    const result = await challenge.receiveArray.call(array) ; 
    console.log('gas consumed: ' + result.toNumber()) ; 
    assert(result.toNumber() > 100000 ) ; 

    // assert.isNotTrue(result,'pass') ; 
  } ) ; 

} ) ; 



