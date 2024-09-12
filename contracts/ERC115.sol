// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract ZKGemsERC1155 is ERC1155 {
    uint256 public constant GOLD = 0;
    string public _base_uri="https://amber-managing-angelfish-602.mypinata.cloud/ipfs/QmREVSf4yFUYFtLjuGisEkdNfV344XrCBcmQAEw7R6Nqz4";

    constructor()
        ERC1155(
            "https://amber-managing-angelfish-602.mypinata.cloud/ipfs/QmREVSf4yFUYFtLjuGisEkdNfV344XrCBcmQAEw7R6Nqz4"
        )
    {
        _mint(msg.sender, GOLD, 10 ** 18, "");
    }

    event TokenMinted(address indexed account, uint256 tokenId, uint256 amount);

    function mint(address account, uint256 amount,uint256 _id) external {
        _setURI(_base_uri);
        _mint(account, _id, amount, "");
        emit TokenMinted(account, _id, amount);
     
    }
      function contractURI() public view returns (string memory) {
        return _base_uri;
        
    }
    function uri(uint256 _id) public view override returns (string memory){
        return _base_uri;
    }
}
