//SPDX-License-Identifier: MIT
// pragma solidity >= 0.5.0 <= 0.7.0;
pragma solidity ^0.8.0 ; 

// From the Openzeppelin team, library below to check for overflows and underflows in all math operations
import "../contracts/SafeMath.sol";


contract Challenge 
{

// error codes 
// 0 == wrong array size 
// 1 == gas sent lower than required
 event Error( string message, uint size) ;

 using SafeMath for uint256;

  constructor() public { }

// receives an array of bytes and returns how much total gas was burnt in the transaction
function receiveArray(bytes memory _array) public returns (uint _gasBurnt)
    {
        if ( _array.length < 1 )
           { 
           	 emit Error("Error, array size should be greater than zero", _array.length ) ; 
             return (0) ; 
            } 
     
        // calculate the total gas that was recceived in this transaction so we can burn
        // enough to be within the limits of the requirement: between 100k and 120k
        
        // return ( gasleft() ) ; // 22259 one element, spent till here //  22271 with 2 elements

    	uint  gasAtinit = ( gasleft().add(22738) ).add( ( _array.length -1 ).mul(12) ) ; 


        if ( gasAtinit < 100000 )
           { 
           	 emit Error("Error, gas sent in tx should be greater than 100K ", gasAtinit ) ; 
             return (1) ; 
            } 

    	
    	uint burntGas = 0 ; 
        uint gasToBurn = uint(100000).sub(gasAtinit.sub( gasleft() )) ; 

// each cycle below costs 179 weis
// we burn gas below until the target objective 100k is met

		for (burntGas; burntGas < gasToBurn ; burntGas = burntGas.add(300) )
		{ // do nothing, just iterating to spend weis on each cycle till we get to the target amount  
	    } 

// returns the gas spent
     return ( gasAtinit.sub( gasleft() ) ) ; 

    } // Close receiveArray() 


} // Close Contract Challenge

