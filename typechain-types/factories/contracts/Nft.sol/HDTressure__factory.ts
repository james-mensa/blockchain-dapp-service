/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  HDTressure,
  HDTressureInterface,
} from "../../../contracts/Nft.sol/HDTressure";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "initialOwner",
        type: "address",
      },
      {
        internalType: "string",
        name: "baseTokenURI",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC721IncorrectOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC721InsufficientApproval",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC721InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "ERC721InvalidOperator",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC721InvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC721InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC721InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC721NonexistentToken",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_fromTokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_toTokenId",
        type: "uint256",
      },
    ],
    name: "BatchMetadataUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "MetadataUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "TokenMinted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "contractURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "safeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002ebe38038062002ebe833981810160405281019062000037919062000429565b816040518060400160405280600a81526020017f5465727261206c616e64000000000000000000000000000000000000000000008152506040518060400160405280600581526020017f546c616e640000000000000000000000000000000000000000000000000000008152508160009081620000b59190620006da565b508060019081620000c79190620006da565b505050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036200013f5760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401620001369190620007d2565b60405180910390fd5b62000150816200016b60201b60201c565b508060089081620001629190620006da565b505050620007ef565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620002728262000245565b9050919050565b620002848162000265565b81146200029057600080fd5b50565b600081519050620002a48162000279565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620002ff82620002b4565b810181811067ffffffffffffffff82111715620003215762000320620002c5565b5b80604052505050565b60006200033662000231565b9050620003448282620002f4565b919050565b600067ffffffffffffffff821115620003675762000366620002c5565b5b6200037282620002b4565b9050602081019050919050565b60005b838110156200039f57808201518184015260208101905062000382565b60008484015250505050565b6000620003c2620003bc8462000349565b6200032a565b905082815260208101848484011115620003e157620003e0620002af565b5b620003ee8482856200037f565b509392505050565b600082601f8301126200040e576200040d620002aa565b5b815162000420848260208601620003ab565b91505092915050565b600080604083850312156200044357620004426200023b565b5b6000620004538582860162000293565b925050602083015167ffffffffffffffff81111562000477576200047662000240565b5b6200048585828601620003f6565b9150509250929050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620004e257607f821691505b602082108103620004f857620004f76200049a565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620005627fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000523565b6200056e868362000523565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620005bb620005b5620005af8462000586565b62000590565b62000586565b9050919050565b6000819050919050565b620005d7836200059a565b620005ef620005e682620005c2565b84845462000530565b825550505050565b600090565b62000606620005f7565b62000613818484620005cc565b505050565b5b818110156200063b576200062f600082620005fc565b60018101905062000619565b5050565b601f8211156200068a576200065481620004fe565b6200065f8462000513565b810160208510156200066f578190505b620006876200067e8562000513565b83018262000618565b50505b505050565b600082821c905092915050565b6000620006af600019846008026200068f565b1980831691505092915050565b6000620006ca83836200069c565b9150826002028217905092915050565b620006e5826200048f565b67ffffffffffffffff811115620007015762000700620002c5565b5b6200070d8254620004c9565b6200071a8282856200063f565b600060209050601f8311600181146200075257600084156200073d578287015190505b620007498582620006bc565b865550620007b9565b601f1984166200076286620004fe565b60005b828110156200078c5784890151825560018201915060208501945060208101905062000765565b86831015620007ac5784890151620007a8601f8916826200069c565b8355505b6001600288020188555050505b505050505050565b620007cc8162000265565b82525050565b6000602082019050620007e96000830184620007c1565b92915050565b6126bf80620007ff6000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c8063715018a6116100ad578063b88d4fde11610071578063b88d4fde146102f2578063c87b56dd1461030e578063e8a3d4851461033e578063e985e9c51461035c578063f2fde38b1461038c57610121565b8063715018a6146102745780638da5cb5b1461027e57806395d89b411461029c578063a1448194146102ba578063a22cb465146102d657610121565b806323b872dd116100f457806323b872dd146101c057806342842e0e146101dc57806342966c68146101f85780636352211e1461021457806370a082311461024457610121565b806301ffc9a71461012657806306fdde0314610156578063081812fc14610174578063095ea7b3146101a4575b600080fd5b610140600480360381019061013b9190611c8b565b6103a8565b60405161014d9190611cd3565b60405180910390f35b61015e6103ba565b60405161016b9190611d7e565b60405180910390f35b61018e60048036038101906101899190611dd6565b61044c565b60405161019b9190611e44565b60405180910390f35b6101be60048036038101906101b99190611e8b565b610468565b005b6101da60048036038101906101d59190611ecb565b61047e565b005b6101f660048036038101906101f19190611ecb565b610580565b005b610212600480360381019061020d9190611dd6565b6105a0565b005b61022e60048036038101906102299190611dd6565b6105b7565b60405161023b9190611e44565b60405180910390f35b61025e60048036038101906102599190611f1e565b6105c9565b60405161026b9190611f5a565b60405180910390f35b61027c610683565b005b610286610697565b6040516102939190611e44565b60405180910390f35b6102a46106c1565b6040516102b19190611d7e565b60405180910390f35b6102d460048036038101906102cf9190611e8b565b610753565b005b6102f060048036038101906102eb9190611fa1565b61084b565b005b61030c60048036038101906103079190612116565b610861565b005b61032860048036038101906103239190611dd6565b61087e565b6040516103359190611d7e565b60405180910390f35b610346610890565b6040516103539190611d7e565b60405180910390f35b61037660048036038101906103719190612199565b610922565b6040516103839190611cd3565b60405180910390f35b6103a660048036038101906103a19190611f1e565b6109b6565b005b60006103b382610a3c565b9050919050565b6060600080546103c990612208565b80601f01602080910402602001604051908101604052809291908181526020018280546103f590612208565b80156104425780601f1061041757610100808354040283529160200191610442565b820191906000526020600020905b81548152906001019060200180831161042557829003601f168201915b5050505050905090565b600061045782610a9d565b5061046182610b25565b9050919050565b61047a8282610475610b62565b610b6a565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036104f05760006040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016104e79190611e44565b60405180910390fd5b600061050483836104ff610b62565b610b7c565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461057a578382826040517f64283d7b00000000000000000000000000000000000000000000000000000000815260040161057193929190612239565b60405180910390fd5b50505050565b61059b83838360405180602001604052806000815250610861565b505050565b6105b36000826105ae610b62565b610b7c565b5050565b60006105c282610a9d565b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361063c5760006040517f89c62b640000000000000000000000000000000000000000000000000000000081526004016106339190611e44565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61068b610d96565b6106956000610e1d565b565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600180546106d090612208565b80601f01602080910402602001604051908101604052809291908181526020018280546106fc90612208565b80156107495780601f1061071e57610100808354040283529160200191610749565b820191906000526020600020905b81548152906001019060200180831161072c57829003601f168201915b5050505050905090565b61075b610d96565b6107658282610ee3565b6107f9816008805461077690612208565b80601f01602080910402602001604051908101604052809291908181526020018280546107a290612208565b80156107ef5780601f106107c4576101008083540402835291602001916107ef565b820191906000526020600020905b8154815290600101906020018083116107d257829003601f168201915b5050505050610f01565b8173ffffffffffffffffffffffffffffffffffffffff167fb9144c96c86541f6fa89c9f2f02495cccf4b08cd6643e26d34ee00aa586558a88260405161083f9190611f5a565b60405180910390a25050565b61085d610856610b62565b8383610f5d565b5050565b61086c84848461047e565b610878848484846110cc565b50505050565b606061088982611283565b9050919050565b60606008805461089f90612208565b80601f01602080910402602001604051908101604052809291908181526020018280546108cb90612208565b80156109185780601f106108ed57610100808354040283529160200191610918565b820191906000526020600020905b8154815290600101906020018083116108fb57829003601f168201915b5050505050905090565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6109be610d96565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610a305760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401610a279190611e44565b60405180910390fd5b610a3981610e1d565b50565b6000634906490660e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610a965750610a9582611396565b5b9050919050565b600080610aa983611478565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610b1c57826040517f7e273289000000000000000000000000000000000000000000000000000000008152600401610b139190611f5a565b60405180910390fd5b80915050919050565b60006004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600033905090565b610b7783838360016114b5565b505050565b600080610b8884611478565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614610bca57610bc981848661167a565b5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610c5b57610c0c6000856000806114b5565b6001600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055505b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614610cde576001600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b846002600086815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4809150509392505050565b610d9e610b62565b73ffffffffffffffffffffffffffffffffffffffff16610dbc610697565b73ffffffffffffffffffffffffffffffffffffffff1614610e1b57610ddf610b62565b6040517f118cdaa7000000000000000000000000000000000000000000000000000000008152600401610e129190611e44565b60405180910390fd5b565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b610efd82826040518060200160405280600081525061173e565b5050565b80600660008481526020019081526020016000209081610f21919061241c565b507ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce782604051610f519190611f5a565b60405180910390a15050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610fce57816040517f5b08ba18000000000000000000000000000000000000000000000000000000008152600401610fc59190611e44565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516110bf9190611cd3565b60405180910390a3505050565b60008373ffffffffffffffffffffffffffffffffffffffff163b111561127d578273ffffffffffffffffffffffffffffffffffffffff1663150b7a02611110610b62565b8685856040518563ffffffff1660e01b81526004016111329493929190612543565b6020604051808303816000875af192505050801561116e57506040513d601f19601f8201168201806040525081019061116b91906125a4565b60015b6111f2573d806000811461119e576040519150601f19603f3d011682016040523d82523d6000602084013e6111a3565b606091505b5060008151036111ea57836040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016111e19190611e44565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161461127b57836040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016112729190611e44565b60405180910390fd5b505b50505050565b606061128e82610a9d565b5060006006600084815260200190815260200160002080546112af90612208565b80601f01602080910402602001604051908101604052809291908181526020018280546112db90612208565b80156113285780601f106112fd57610100808354040283529160200191611328565b820191906000526020600020905b81548152906001019060200180831161130b57829003601f168201915b50505050509050600061133961175a565b9050600081510361134e578192505050611391565b60008251111561138357808260405160200161136b92919061260d565b60405160208183030381529060405292505050611391565b61138c84611771565b925050505b919050565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061146157507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806114715750611470826117da565b5b9050919050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b80806114ee5750600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b156116225760006114fe84610a9d565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415801561156957508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b801561157c575061157a8184610922565b155b156115be57826040517fa9fbf51f0000000000000000000000000000000000000000000000000000000081526004016115b59190611e44565b60405180910390fd5b811561162057838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b836004600085815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b611685838383611844565b61173957600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036116fa57806040517f7e2732890000000000000000000000000000000000000000000000000000000081526004016116f19190611f5a565b60405180910390fd5b81816040517f177e802f000000000000000000000000000000000000000000000000000000008152600401611730929190612631565b60405180910390fd5b505050565b6117488383611905565b61175560008484846110cc565b505050565b606060405180602001604052806000815250905090565b606061177c82610a9d565b50600061178761175a565b905060008151116117a757604051806020016040528060008152506117d2565b806117b1846119fe565b6040516020016117c292919061260d565b6040516020818303038152906040525b915050919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141580156118fc57508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806118bd57506118bc8484610922565b5b806118fb57508273ffffffffffffffffffffffffffffffffffffffff166118e383610b25565b73ffffffffffffffffffffffffffffffffffffffff16145b5b90509392505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036119775760006040517f64a0ae9200000000000000000000000000000000000000000000000000000000815260040161196e9190611e44565b60405180910390fd5b600061198583836000610b7c565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146119f95760006040517f73c6ac6e0000000000000000000000000000000000000000000000000000000081526004016119f09190611e44565b60405180910390fd5b505050565b606060006001611a0d84611acc565b01905060008167ffffffffffffffff811115611a2c57611a2b611feb565b5b6040519080825280601f01601f191660200182016040528015611a5e5781602001600182028036833780820191505090505b509050600082602001820190505b600115611ac1578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a8581611ab557611ab461265a565b5b04945060008503611a6c575b819350505050919050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310611b2a577a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008381611b2057611b1f61265a565b5b0492506040810190505b6d04ee2d6d415b85acef81000000008310611b67576d04ee2d6d415b85acef81000000008381611b5d57611b5c61265a565b5b0492506020810190505b662386f26fc100008310611b9657662386f26fc100008381611b8c57611b8b61265a565b5b0492506010810190505b6305f5e1008310611bbf576305f5e1008381611bb557611bb461265a565b5b0492506008810190505b6127108310611be4576127108381611bda57611bd961265a565b5b0492506004810190505b60648310611c075760648381611bfd57611bfc61265a565b5b0492506002810190505b600a8310611c16576001810190505b80915050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611c6881611c33565b8114611c7357600080fd5b50565b600081359050611c8581611c5f565b92915050565b600060208284031215611ca157611ca0611c29565b5b6000611caf84828501611c76565b91505092915050565b60008115159050919050565b611ccd81611cb8565b82525050565b6000602082019050611ce86000830184611cc4565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611d28578082015181840152602081019050611d0d565b60008484015250505050565b6000601f19601f8301169050919050565b6000611d5082611cee565b611d5a8185611cf9565b9350611d6a818560208601611d0a565b611d7381611d34565b840191505092915050565b60006020820190508181036000830152611d988184611d45565b905092915050565b6000819050919050565b611db381611da0565b8114611dbe57600080fd5b50565b600081359050611dd081611daa565b92915050565b600060208284031215611dec57611deb611c29565b5b6000611dfa84828501611dc1565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611e2e82611e03565b9050919050565b611e3e81611e23565b82525050565b6000602082019050611e596000830184611e35565b92915050565b611e6881611e23565b8114611e7357600080fd5b50565b600081359050611e8581611e5f565b92915050565b60008060408385031215611ea257611ea1611c29565b5b6000611eb085828601611e76565b9250506020611ec185828601611dc1565b9150509250929050565b600080600060608486031215611ee457611ee3611c29565b5b6000611ef286828701611e76565b9350506020611f0386828701611e76565b9250506040611f1486828701611dc1565b9150509250925092565b600060208284031215611f3457611f33611c29565b5b6000611f4284828501611e76565b91505092915050565b611f5481611da0565b82525050565b6000602082019050611f6f6000830184611f4b565b92915050565b611f7e81611cb8565b8114611f8957600080fd5b50565b600081359050611f9b81611f75565b92915050565b60008060408385031215611fb857611fb7611c29565b5b6000611fc685828601611e76565b9250506020611fd785828601611f8c565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61202382611d34565b810181811067ffffffffffffffff8211171561204257612041611feb565b5b80604052505050565b6000612055611c1f565b9050612061828261201a565b919050565b600067ffffffffffffffff82111561208157612080611feb565b5b61208a82611d34565b9050602081019050919050565b82818337600083830152505050565b60006120b96120b484612066565b61204b565b9050828152602081018484840111156120d5576120d4611fe6565b5b6120e0848285612097565b509392505050565b600082601f8301126120fd576120fc611fe1565b5b813561210d8482602086016120a6565b91505092915050565b600080600080608085870312156121305761212f611c29565b5b600061213e87828801611e76565b945050602061214f87828801611e76565b935050604061216087828801611dc1565b925050606085013567ffffffffffffffff81111561218157612180611c2e565b5b61218d878288016120e8565b91505092959194509250565b600080604083850312156121b0576121af611c29565b5b60006121be85828601611e76565b92505060206121cf85828601611e76565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061222057607f821691505b602082108103612233576122326121d9565b5b50919050565b600060608201905061224e6000830186611e35565b61225b6020830185611f4b565b6122686040830184611e35565b949350505050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026122d27fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82612295565b6122dc8683612295565b95508019841693508086168417925050509392505050565b6000819050919050565b600061231961231461230f84611da0565b6122f4565b611da0565b9050919050565b6000819050919050565b612333836122fe565b61234761233f82612320565b8484546122a2565b825550505050565b600090565b61235c61234f565b61236781848461232a565b505050565b5b8181101561238b57612380600082612354565b60018101905061236d565b5050565b601f8211156123d0576123a181612270565b6123aa84612285565b810160208510156123b9578190505b6123cd6123c585612285565b83018261236c565b50505b505050565b600082821c905092915050565b60006123f3600019846008026123d5565b1980831691505092915050565b600061240c83836123e2565b9150826002028217905092915050565b61242582611cee565b67ffffffffffffffff81111561243e5761243d611feb565b5b6124488254612208565b61245382828561238f565b600060209050601f8311600181146124865760008415612474578287015190505b61247e8582612400565b8655506124e6565b601f19841661249486612270565b60005b828110156124bc57848901518255600182019150602085019450602081019050612497565b868310156124d957848901516124d5601f8916826123e2565b8355505b6001600288020188555050505b505050505050565b600081519050919050565b600082825260208201905092915050565b6000612515826124ee565b61251f81856124f9565b935061252f818560208601611d0a565b61253881611d34565b840191505092915050565b60006080820190506125586000830187611e35565b6125656020830186611e35565b6125726040830185611f4b565b8181036060830152612584818461250a565b905095945050505050565b60008151905061259e81611c5f565b92915050565b6000602082840312156125ba576125b9611c29565b5b60006125c88482850161258f565b91505092915050565b600081905092915050565b60006125e782611cee565b6125f181856125d1565b9350612601818560208601611d0a565b80840191505092915050565b600061261982856125dc565b915061262582846125dc565b91508190509392505050565b60006040820190506126466000830185611e35565b6126536020830184611f4b565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fdfea2646970667358221220e2f18bad611bdcb668df5a509048d7fe1d51d0118bc8710982b13f1ad24ba7c164736f6c63430008140033";

type HDTressureConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HDTressureConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class HDTressure__factory extends ContractFactory {
  constructor(...args: HDTressureConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    initialOwner: PromiseOrValue<string>,
    baseTokenURI: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<HDTressure> {
    return super.deploy(
      initialOwner,
      baseTokenURI,
      overrides || {}
    ) as Promise<HDTressure>;
  }
  override getDeployTransaction(
    initialOwner: PromiseOrValue<string>,
    baseTokenURI: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      initialOwner,
      baseTokenURI,
      overrides || {}
    );
  }
  override attach(address: string): HDTressure {
    return super.attach(address) as HDTressure;
  }
  override connect(signer: Signer): HDTressure__factory {
    return super.connect(signer) as HDTressure__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HDTressureInterface {
    return new utils.Interface(_abi) as HDTressureInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HDTressure {
    return new Contract(address, _abi, signerOrProvider) as HDTressure;
  }
}
