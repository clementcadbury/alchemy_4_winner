//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Win {
  function win(address a) public {
        (bool success, ) = a.call(
            abi.encodeWithSignature("attempt()")
        );

        require(success);
    }
}