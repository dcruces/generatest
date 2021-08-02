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


