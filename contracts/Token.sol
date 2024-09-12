// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract BetaCoin is ERC20 {
    address public owner;
    string private _metadataURI;

    constructor(address  _owner, uint256 initialSupply, string memory initialMetadataURI) ERC20("USDT", "USDT") {
        _mint(_owner, initialSupply);
        owner = _owner;
        _metadataURI = initialMetadataURI;
    }

    
    function deposit() external payable {
        require(msg.value > 0, "Value sent must be greater than 0");

       
        uint256 tokensToMint = msg.value;

      
        _mint(msg.sender, tokensToMint);
    }

    function send(address payable _to) public payable {
        (bool sent,) = _to.call{value: msg.value}("");
        require(sent, "Failed to send Ether");
    }

    // Fallback function to receive Ether
    receive() external payable {}

    function mint(address account, uint256 amount) external {
        _mint(account, amount);
    }

    function contractURI() public view returns (string memory) {
        return _metadataURI;
    }
}
