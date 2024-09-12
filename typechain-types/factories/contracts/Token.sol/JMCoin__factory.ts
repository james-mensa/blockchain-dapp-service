/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  JMCoin,
  JMCoinInterface,
} from "../../../contracts/Token.sol/JMCoin";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "initialSupply",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "initialMetadataURI",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientAllowance",
    type: "error",
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
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientBalance",
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
    name: "ERC20InvalidApprover",
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
    name: "ERC20InvalidReceiver",
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
    name: "ERC20InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSpender",
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
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
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
        indexed: false,
        internalType: "uint256",
        name: "value",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
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
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "metadataURI",
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
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "address payable",
        name: "_to",
        type: "address",
      },
    ],
    name: "send",
    outputs: [],
    stateMutability: "payable",
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
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001f5238038062001f528339818101604052810190620000379190620005c1565b6040518060400160405280600881526020017f42657461436f696e0000000000000000000000000000000000000000000000008152506040518060400160405280600881526020017f42657461436f696e0000000000000000000000000000000000000000000000008152508160039081620000b4919062000868565b508060049081620000c6919062000868565b505050620000db33836200013660201b60201c565b33600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600690816200012d919062000868565b50505062000a86565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603620001ab5760006040517fec442f05000000000000000000000000000000000000000000000000000000008152600401620001a2919062000994565b60405180910390fd5b620001bf60008383620001c360201b60201c565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603620002195780600260008282546200020c9190620009e0565b92505081905550620002ef565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015620002a8578381836040517fe450d38c0000000000000000000000000000000000000000000000000000000081526004016200029f9392919062000a2c565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036200033a578060026000828254039250508190555062000387565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620003e6919062000a69565b60405180910390a3505050565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b6200041c8162000407565b81146200042857600080fd5b50565b6000815190506200043c8162000411565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b62000497826200044c565b810181811067ffffffffffffffff82111715620004b957620004b86200045d565b5b80604052505050565b6000620004ce620003f3565b9050620004dc82826200048c565b919050565b600067ffffffffffffffff821115620004ff57620004fe6200045d565b5b6200050a826200044c565b9050602081019050919050565b60005b83811015620005375780820151818401526020810190506200051a565b60008484015250505050565b60006200055a6200055484620004e1565b620004c2565b90508281526020810184848401111562000579576200057862000447565b5b6200058684828562000517565b509392505050565b600082601f830112620005a657620005a562000442565b5b8151620005b884826020860162000543565b91505092915050565b60008060408385031215620005db57620005da620003fd565b5b6000620005eb858286016200042b565b925050602083015167ffffffffffffffff8111156200060f576200060e62000402565b5b6200061d858286016200058e565b9150509250929050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200067a57607f821691505b60208210810362000690576200068f62000632565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620006fa7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82620006bb565b620007068683620006bb565b95508019841693508086168417925050509392505050565b6000819050919050565b600062000749620007436200073d8462000407565b6200071e565b62000407565b9050919050565b6000819050919050565b620007658362000728565b6200077d620007748262000750565b848454620006c8565b825550505050565b600090565b6200079462000785565b620007a18184846200075a565b505050565b5b81811015620007c957620007bd6000826200078a565b600181019050620007a7565b5050565b601f8211156200081857620007e28162000696565b620007ed84620006ab565b81016020851015620007fd578190505b620008156200080c85620006ab565b830182620007a6565b50505b505050565b600082821c905092915050565b60006200083d600019846008026200081d565b1980831691505092915050565b60006200085883836200082a565b9150826002028217905092915050565b620008738262000627565b67ffffffffffffffff8111156200088f576200088e6200045d565b5b6200089b825462000661565b620008a8828285620007cd565b600060209050601f831160018114620008e05760008415620008cb578287015190505b620008d785826200084a565b86555062000947565b601f198416620008f08662000696565b60005b828110156200091a57848901518255600182019150602085019450602081019050620008f3565b868310156200093a578489015162000936601f8916826200082a565b8355505b6001600288020188555050505b505050505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200097c826200094f565b9050919050565b6200098e816200096f565b82525050565b6000602082019050620009ab600083018462000983565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000620009ed8262000407565b9150620009fa8362000407565b925082820190508082111562000a155762000a14620009b1565b5b92915050565b62000a268162000407565b82525050565b600060608201905062000a43600083018662000983565b62000a52602083018562000a1b565b62000a61604083018462000a1b565b949350505050565b600060208201905062000a80600083018462000a1b565b92915050565b6114bc8062000a966000396000f3fe6080604052600436106100e15760003560e01c806340c10f191161007f57806395d89b411161005957806395d89b41146102c0578063a9059cbb146102eb578063d0e30db014610328578063dd62ed3e14610332576100e8565b806340c10f191461022f57806370a08231146102585780638da5cb5b14610295576100e8565b806318160ddd116100bb57806318160ddd1461018057806323b872dd146101ab578063313ce567146101e85780633e58c58c14610213576100e8565b806303ee438c146100ed57806306fdde0314610118578063095ea7b314610143576100e8565b366100e857005b600080fd5b3480156100f957600080fd5b5061010261036f565b60405161010f9190610ef5565b60405180910390f35b34801561012457600080fd5b5061012d610401565b60405161013a9190610ef5565b60405180910390f35b34801561014f57600080fd5b5061016a60048036038101906101659190610fb0565b610493565b604051610177919061100b565b60405180910390f35b34801561018c57600080fd5b506101956104b6565b6040516101a29190611035565b60405180910390f35b3480156101b757600080fd5b506101d260048036038101906101cd9190611050565b6104c0565b6040516101df919061100b565b60405180910390f35b3480156101f457600080fd5b506101fd6104ef565b60405161020a91906110bf565b60405180910390f35b61022d60048036038101906102289190611118565b6104f8565b005b34801561023b57600080fd5b5061025660048036038101906102519190610fb0565b6105a8565b005b34801561026457600080fd5b5061027f600480360381019061027a9190611145565b610646565b60405161028c9190611035565b60405180910390f35b3480156102a157600080fd5b506102aa61068e565b6040516102b79190611181565b60405180910390f35b3480156102cc57600080fd5b506102d56106b4565b6040516102e29190610ef5565b60405180910390f35b3480156102f757600080fd5b50610312600480360381019061030d9190610fb0565b610746565b60405161031f919061100b565b60405180910390f35b610330610769565b005b34801561033e57600080fd5b506103596004803603810190610354919061119c565b6107be565b6040516103669190611035565b60405180910390f35b60606006805461037e9061120b565b80601f01602080910402602001604051908101604052809291908181526020018280546103aa9061120b565b80156103f75780601f106103cc576101008083540402835291602001916103f7565b820191906000526020600020905b8154815290600101906020018083116103da57829003601f168201915b5050505050905090565b6060600380546104109061120b565b80601f016020809104026020016040519081016040528092919081815260200182805461043c9061120b565b80156104895780601f1061045e57610100808354040283529160200191610489565b820191906000526020600020905b81548152906001019060200180831161046c57829003601f168201915b5050505050905090565b60008061049e610845565b90506104ab81858561084d565b600191505092915050565b6000600254905090565b6000806104cb610845565b90506104d885828561085f565b6104e38585856108f3565b60019150509392505050565b60006012905090565b60008173ffffffffffffffffffffffffffffffffffffffff163460405161051e9061126d565b60006040518083038185875af1925050503d806000811461055b576040519150601f19603f3d011682016040523d82523d6000602084013e610560565b606091505b50509050806105a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161059b906112ce565b60405180910390fd5b5050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610638576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161062f9061133a565b60405180910390fd5b61064282826109e7565b5050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6060600480546106c39061120b565b80601f01602080910402602001604051908101604052809291908181526020018280546106ef9061120b565b801561073c5780601f106107115761010080835404028352916020019161073c565b820191906000526020600020905b81548152906001019060200180831161071f57829003601f168201915b5050505050905090565b600080610751610845565b905061075e8185856108f3565b600191505092915050565b600034116107ac576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107a3906113cc565b60405180910390fd5b60003490506107bb33826109e7565b50565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b61085a8383836001610a69565b505050565b600061086b84846107be565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146108ed57818110156108dd578281836040517ffb8f41b20000000000000000000000000000000000000000000000000000000081526004016108d4939291906113ec565b60405180910390fd5b6108ec84848484036000610a69565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036109655760006040517f96c6fd1e00000000000000000000000000000000000000000000000000000000815260040161095c9190611181565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036109d75760006040517fec442f050000000000000000000000000000000000000000000000000000000081526004016109ce9190611181565b60405180910390fd5b6109e2838383610c40565b505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610a595760006040517fec442f05000000000000000000000000000000000000000000000000000000008152600401610a509190611181565b60405180910390fd5b610a6560008383610c40565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603610adb5760006040517fe602df05000000000000000000000000000000000000000000000000000000008152600401610ad29190611181565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610b4d5760006040517f94280d62000000000000000000000000000000000000000000000000000000008152600401610b449190611181565b60405180910390fd5b81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508015610c3a578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610c319190611035565b60405180910390a35b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610c92578060026000828254610c869190611452565b92505081905550610d65565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610d1e578381836040517fe450d38c000000000000000000000000000000000000000000000000000000008152600401610d15939291906113ec565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610dae5780600260008282540392505081905550610dfb565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610e589190611035565b60405180910390a3505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610e9f578082015181840152602081019050610e84565b60008484015250505050565b6000601f19601f8301169050919050565b6000610ec782610e65565b610ed18185610e70565b9350610ee1818560208601610e81565b610eea81610eab565b840191505092915050565b60006020820190508181036000830152610f0f8184610ebc565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610f4782610f1c565b9050919050565b610f5781610f3c565b8114610f6257600080fd5b50565b600081359050610f7481610f4e565b92915050565b6000819050919050565b610f8d81610f7a565b8114610f9857600080fd5b50565b600081359050610faa81610f84565b92915050565b60008060408385031215610fc757610fc6610f17565b5b6000610fd585828601610f65565b9250506020610fe685828601610f9b565b9150509250929050565b60008115159050919050565b61100581610ff0565b82525050565b60006020820190506110206000830184610ffc565b92915050565b61102f81610f7a565b82525050565b600060208201905061104a6000830184611026565b92915050565b60008060006060848603121561106957611068610f17565b5b600061107786828701610f65565b935050602061108886828701610f65565b925050604061109986828701610f9b565b9150509250925092565b600060ff82169050919050565b6110b9816110a3565b82525050565b60006020820190506110d460008301846110b0565b92915050565b60006110e582610f1c565b9050919050565b6110f5816110da565b811461110057600080fd5b50565b600081359050611112816110ec565b92915050565b60006020828403121561112e5761112d610f17565b5b600061113c84828501611103565b91505092915050565b60006020828403121561115b5761115a610f17565b5b600061116984828501610f65565b91505092915050565b61117b81610f3c565b82525050565b60006020820190506111966000830184611172565b92915050565b600080604083850312156111b3576111b2610f17565b5b60006111c185828601610f65565b92505060206111d285828601610f65565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061122357607f821691505b602082108103611236576112356111dc565b5b50919050565b600081905092915050565b50565b600061125760008361123c565b915061126282611247565b600082019050919050565b60006112788261124a565b9150819050919050565b7f4661696c656420746f2073656e64204574686572000000000000000000000000600082015250565b60006112b8601483610e70565b91506112c382611282565b602082019050919050565b600060208201905081810360008301526112e7816112ab565b9050919050565b7f4f6e6c79206f776e65722063616e206d696e7400000000000000000000000000600082015250565b6000611324601383610e70565b915061132f826112ee565b602082019050919050565b6000602082019050818103600083015261135381611317565b9050919050565b7f56616c75652073656e74206d7573742062652067726561746572207468616e2060008201527f3000000000000000000000000000000000000000000000000000000000000000602082015250565b60006113b6602183610e70565b91506113c18261135a565b604082019050919050565b600060208201905081810360008301526113e5816113a9565b9050919050565b60006060820190506114016000830186611172565b61140e6020830185611026565b61141b6040830184611026565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061145d82610f7a565b915061146883610f7a565b92508282019050808211156114805761147f611423565b5b9291505056fea26469706673582212204475504ba558852c9fc176583f13f18cbd06ee48f1c5fd332d54f5ecb23b517864736f6c63430008140033";

type JMCoinConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: JMCoinConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class JMCoin__factory extends ContractFactory {
  constructor(...args: JMCoinConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    initialSupply: PromiseOrValue<BigNumberish>,
    initialMetadataURI: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<JMCoin> {
    return super.deploy(
      initialSupply,
      initialMetadataURI,
      overrides || {}
    ) as Promise<JMCoin>;
  }
  override getDeployTransaction(
    initialSupply: PromiseOrValue<BigNumberish>,
    initialMetadataURI: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      initialSupply,
      initialMetadataURI,
      overrides || {}
    );
  }
  override attach(address: string): JMCoin {
    return super.attach(address) as JMCoin;
  }
  override connect(signer: Signer): JMCoin__factory {
    return super.connect(signer) as JMCoin__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): JMCoinInterface {
    return new utils.Interface(_abi) as JMCoinInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): JMCoin {
    return new Contract(address, _abi, signerOrProvider) as JMCoin;
  }
}
