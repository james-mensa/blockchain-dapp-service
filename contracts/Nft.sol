// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TressureLandNFT is ERC721, ERC721URIStorage, ERC721Burnable, Ownable {
    string private _baseTokenURI;

    constructor(
        address initialOwner,
        string memory baseTokenURI
    ) ERC721("Tressure Lands", "TLand") Ownable(initialOwner) {
        _baseTokenURI = baseTokenURI;
    }

    event TokenMinted(address indexed account, uint256 tokenId);

    function safeMint(address to,uint256 _id) public onlyOwner {
        _safeMint(to, _id);
        _setTokenURI(_id, _baseTokenURI);
        emit TokenMinted(to, _id);
        
    }

    // The following functions are overrides required by Solidity.
    function tokenURI(
        uint256 tokenId
    ) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }
      function contractURI() public view returns (string memory) {
        return _baseTokenURI;
        
    }

    function supportsInterface(
        bytes4 interfaceId
    ) public view override(ERC721, ERC721URIStorage) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}
