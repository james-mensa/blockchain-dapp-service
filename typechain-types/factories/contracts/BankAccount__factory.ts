/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  BankAccount,
  BankAccountInterface,
} from "../../contracts/BankAccount";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address[]",
        name: "owners",
        type: "address[]",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "AccountCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "accountId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "withdrawId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "accountId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "withdrawId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "WithdrawRequested",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "accountId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "withdrawId",
        type: "uint256",
      },
    ],
    name: "approveWithdrawl",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "otherOwners",
        type: "address[]",
      },
    ],
    name: "createAccount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "accountId",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAccounts",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "accountId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "withdrawId",
        type: "uint256",
      },
    ],
    name: "getApprovals",
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
        name: "accountId",
        type: "uint256",
      },
    ],
    name: "getBalance",
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
        name: "accountId",
        type: "uint256",
      },
    ],
    name: "getOwners",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
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
    ],
    name: "getwalletBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "accountBalance",
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
        name: "accountId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "requestWithdrawl",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "sendEther",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "accountId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "withdrawId",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506121a8806100206000396000f3fe60806040526004361061009c5760003560e01c8063867275a511610064578063867275a5146101895780638a48ac03146101c6578063a52a6f9a146101f1578063b6b55f251461021a578063ee4525d514610236578063eff63433146102735761009c565b80631e010439146100a1578063441a3e70146100de57806348c981e214610107578063785e5531146101235780637e78d0091461014c575b600080fd5b3480156100ad57600080fd5b506100c860048036038101906100c39190611604565b61029c565b6040516100d59190611640565b60405180910390f35b3480156100ea57600080fd5b506101056004803603810190610100919061165b565b6102bb565b005b610121600480360381019061011c91906116f9565b6105c6565b005b34801561012f57600080fd5b5061014a6004803603810190610145919061165b565b610676565b005b34801561015857600080fd5b50610173600480360381019061016e9190611764565b610b0c565b6040516101809190611640565b60405180910390f35b34801561019557600080fd5b506101b060048036038101906101ab919061165b565b610b2d565b6040516101bd9190611640565b60405180910390f35b3480156101d257600080fd5b506101db610b61565b6040516101e8919061184f565b60405180910390f35b3480156101fd57600080fd5b506102186004803603810190610213919061165b565b610bf6565b005b610234600480360381019061022f9190611604565b610e47565b005b34801561024257600080fd5b5061025d60048036038101906102589190611604565b610f7e565b60405161026a919061192f565b60405180910390f35b34801561027f57600080fd5b5061029a600480360381019061029591906119b6565b611021565b005b6000806000838152602001908152602001600020600101549050919050565b81813373ffffffffffffffffffffffffffffffffffffffff16600080848152602001908152602001600020600201600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610374576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161036b90611a60565b60405180910390fd5b600080838152602001908152602001600020600201600082815260200190815260200160002060040160009054906101000a900460ff166103ea576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103e190611acc565b60405180910390fd5b6000806000868152602001908152602001600020600201600085815260200190815260200160002060010154905080600080878152602001908152602001600020600101541015610470576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161046790611b38565b60405180910390fd5b8060008087815260200190815260200160002060010160008282546104959190611b87565b925050819055506000808681526020019081526020016000206002016000858152602001908152602001600020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600182016000905560028201600090556004820160006101000a81549060ff0219169055505060003373ffffffffffffffffffffffffffffffffffffffff168260405161053690611bec565b60006040518083038185875af1925050503d8060008114610573576040519150601f19603f3d011682016040523d82523d6000602084013e610578565b606091505b505090508061058657600080fd5b847f56ca301a9219608c91e7bcee90e083c19671d2cdcc96752c7af291cee5f9c8c8426040516105b69190611640565b60405180910390a2505050505050565b60008173ffffffffffffffffffffffffffffffffffffffff16346040516105ec90611bec565b60006040518083038185875af1925050503d8060008114610629576040519150601f19603f3d011682016040523d82523d6000602084013e61062e565b606091505b5050905080610672576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161066990611c4d565b60405180910390fd5b5050565b816000805b6000808481526020019081526020016000206000018054905081101561073b573373ffffffffffffffffffffffffffffffffffffffff1660008085815260200190815260200160002060000182815481106106d9576106d8611c6d565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603610728576001915061073b565b808061073390611c9c565b91505061067b565b508061077c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161077390611d56565b60405180910390fd5b8383600080838152602001908152602001600020600201600082815260200190815260200160002060040160009054906101000a900460ff16156107f5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107ec90611dc2565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff16600080848152602001908152602001600020600201600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16036108ac576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108a390611e2e565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600080848152602001908152602001600020600201600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603610964576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161095b90611e9a565b60405180910390fd5b600080838152602001908152602001600020600201600082815260200190815260200160002060030160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610a18576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a0f90611f2c565b60405180910390fd5b600080600088815260200190815260200160002060020160008781526020019081526020016000209050806002016000815480929190610a5790611c9c565b919050555060018160030160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600160008089815260200190815260200160002060000180549050610adb9190611b87565b816002015403610b035760018160040160006101000a81548160ff0219169083151502179055505b50505050505050565b60008173ffffffffffffffffffffffffffffffffffffffff16319050919050565b6000806000848152602001908152602001600020600201600083815260200190815260200160002060020154905092915050565b6060600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020018280548015610bec57602002820191906000526020600020905b815481526020019060010190808311610bd8575b5050505050905090565b816000805b60008084815260200190815260200160002060000180549050811015610cbb573373ffffffffffffffffffffffffffffffffffffffff166000808581526020019081526020016000206000018281548110610c5957610c58611c6d565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603610ca85760019150610cbb565b8080610cb390611c9c565b915050610bfb565b5080610cfc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cf390611d56565b60405180910390fd5b838380600080848152602001908152602001600020600101541015610d56576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d4d90611b38565b60405180910390fd5b60006003549050600080600089815260200190815260200160002060020160008381526020019081526020016000209050338160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555086816001018190555060036000815480929190610de690611c9c565b919050555081883373ffffffffffffffffffffffffffffffffffffffff167f1f0d204a59639d21245dbaa239dfc9a6227aa86cb614bdda19843c52d155fcfa8a42604051610e35929190611f4c565b60405180910390a45050505050505050565b806000805b60008084815260200190815260200160002060000180549050811015610f0c573373ffffffffffffffffffffffffffffffffffffffff166000808581526020019081526020016000206000018281548110610eaa57610ea9611c6d565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603610ef95760019150610f0c565b8080610f0490611c9c565b915050610e4c565b5080610f4d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f4490611d56565b60405180910390fd5b346000808581526020019081526020016000206001016000828254610f729190611f75565b92505081905550505050565b606060008083815260200190815260200160002060000180548060200260200160405190810160405280929190818152602001828054801561101557602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610fcb575b50505050509050919050565b818160046001838390506110359190611f75565b1115611076576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161106d90611ff5565b60405180910390fd5b60005b82829050811015611219573373ffffffffffffffffffffffffffffffffffffffff168383838181106110ae576110ad611c6d565b5b90506020020160208101906110c39190611764565b73ffffffffffffffffffffffffffffffffffffffff1603611119576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161111090612061565b60405180910390fd5b60006001826111289190611f75565b90505b838390508110156112055783838281811061114957611148611c6d565b5b905060200201602081019061115e9190611764565b73ffffffffffffffffffffffffffffffffffffffff1684848481811061118757611186611c6d565b5b905060200201602081019061119c9190611764565b73ffffffffffffffffffffffffffffffffffffffff16036111f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111e990612061565b60405180910390fd5b80806111fd90611c9c565b91505061112b565b50808061121190611c9c565b915050611079565b50600060018585905061122c9190611f75565b67ffffffffffffffff81111561124557611244612081565b5b6040519080825280602002602001820160405280156112735781602001602082028036833780820191505090505b5090503381868690508151811061128d5761128c611c6d565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250506000600254905060005b825181101561149857600183516112e89190611b87565b8110156113655786868281811061130257611301611c6d565b5b90506020020160208101906113179190611764565b83828151811061132a57611329611c6d565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250505b60026001600085848151811061137e5761137d611c6d565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490501115611405576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113fc90612122565b60405180910390fd5b6001600084838151811061141c5761141b611c6d565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020829080600181540180825580915050600190039060005260206000200160009091909190915055808061149090611c9c565b9150506112d1565b508160008083815260200190815260200160002060000190805190602001906114c292919061151d565b50600260008154809291906114d690611c9c565b9190505550807f1dfea57c7217d8ee2ef44253419f3a05acdf0e6dea69f12e9e2afa2e748e3c8c834260405161150d929190612142565b60405180910390a2505050505050565b828054828255906000526020600020908101928215611596579160200282015b828111156115955782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509160200191906001019061153d565b5b5090506115a391906115a7565b5090565b5b808211156115c05760008160009055506001016115a8565b5090565b600080fd5b600080fd5b6000819050919050565b6115e1816115ce565b81146115ec57600080fd5b50565b6000813590506115fe816115d8565b92915050565b60006020828403121561161a576116196115c4565b5b6000611628848285016115ef565b91505092915050565b61163a816115ce565b82525050565b60006020820190506116556000830184611631565b92915050565b60008060408385031215611672576116716115c4565b5b6000611680858286016115ef565b9250506020611691858286016115ef565b9150509250929050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006116c68261169b565b9050919050565b6116d6816116bb565b81146116e157600080fd5b50565b6000813590506116f3816116cd565b92915050565b60006020828403121561170f5761170e6115c4565b5b600061171d848285016116e4565b91505092915050565b60006117318261169b565b9050919050565b61174181611726565b811461174c57600080fd5b50565b60008135905061175e81611738565b92915050565b60006020828403121561177a576117796115c4565b5b60006117888482850161174f565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6117c6816115ce565b82525050565b60006117d883836117bd565b60208301905092915050565b6000602082019050919050565b60006117fc82611791565b611806818561179c565b9350611811836117ad565b8060005b8381101561184257815161182988826117cc565b9750611834836117e4565b925050600181019050611815565b5085935050505092915050565b6000602082019050818103600083015261186981846117f1565b905092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6118a681611726565b82525050565b60006118b8838361189d565b60208301905092915050565b6000602082019050919050565b60006118dc82611871565b6118e6818561187c565b93506118f18361188d565b8060005b8381101561192257815161190988826118ac565b9750611914836118c4565b9250506001810190506118f5565b5085935050505092915050565b6000602082019050818103600083015261194981846118d1565b905092915050565b600080fd5b600080fd5b600080fd5b60008083601f84011261197657611975611951565b5b8235905067ffffffffffffffff81111561199357611992611956565b5b6020830191508360208202830111156119af576119ae61195b565b5b9250929050565b600080602083850312156119cd576119cc6115c4565b5b600083013567ffffffffffffffff8111156119eb576119ea6115c9565b5b6119f785828601611960565b92509250509250929050565b600082825260208201905092915050565b7f796f7520646964206e6f74206372656174652074686973207265717565737400600082015250565b6000611a4a601f83611a03565b9150611a5582611a14565b602082019050919050565b60006020820190508181036000830152611a7981611a3d565b9050919050565b7f746869732072657175657374206973206e6f7420617070726f76656400000000600082015250565b6000611ab6601c83611a03565b9150611ac182611a80565b602082019050919050565b60006020820190508181036000830152611ae581611aa9565b9050919050565b7f696e73756666696369656e742062616c616e6365000000000000000000000000600082015250565b6000611b22601483611a03565b9150611b2d82611aec565b602082019050919050565b60006020820190508181036000830152611b5181611b15565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611b92826115ce565b9150611b9d836115ce565b9250828203905081811115611bb557611bb4611b58565b5b92915050565b600081905092915050565b50565b6000611bd6600083611bbb565b9150611be182611bc6565b600082019050919050565b6000611bf782611bc9565b9150819050919050565b7f4661696c656420746f2073656e64204574686572000000000000000000000000600082015250565b6000611c37601483611a03565b9150611c4282611c01565b602082019050919050565b60006020820190508181036000830152611c6681611c2a565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000611ca7826115ce565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611cd957611cd8611b58565b5b600182019050919050565b7f796f7520617265206e6f7420616e206f776e6572206f6620746869732061636360008201527f6f756e7400000000000000000000000000000000000000000000000000000000602082015250565b6000611d40602483611a03565b9150611d4b82611ce4565b604082019050919050565b60006020820190508181036000830152611d6f81611d33565b9050919050565b7f74686973207265717565737420697320616c726561647920617070726f766564600082015250565b6000611dac602083611a03565b9150611db782611d76565b602082019050919050565b60006020820190508181036000830152611ddb81611d9f565b9050919050565b7f796f752063616e6e6f7420617070726f76652074686973207265717565737400600082015250565b6000611e18601f83611a03565b9150611e2382611de2565b602082019050919050565b60006020820190508181036000830152611e4781611e0b565b9050919050565b7f74686973207265717565737420646f6573206e6f742065786973740000000000600082015250565b6000611e84601b83611a03565b9150611e8f82611e4e565b602082019050919050565b60006020820190508181036000830152611eb381611e77565b9050919050565b7f796f75206861766520616c726561647920617070726f7665642074686973207260008201527f6571756573740000000000000000000000000000000000000000000000000000602082015250565b6000611f16602683611a03565b9150611f2182611eba565b604082019050919050565b60006020820190508181036000830152611f4581611f09565b9050919050565b6000604082019050611f616000830185611631565b611f6e6020830184611631565b9392505050565b6000611f80826115ce565b9150611f8b836115ce565b9250828201905080821115611fa357611fa2611b58565b5b92915050565b7f6d6178696d756d206f662034206f776e65727320706572206163636f756e7400600082015250565b6000611fdf601f83611a03565b9150611fea82611fa9565b602082019050919050565b6000602082019050818103600083015261200e81611fd2565b9050919050565b7f6e6f206475706c6963617465206f776e65727300000000000000000000000000600082015250565b600061204b601383611a03565b915061205682612015565b602082019050919050565b6000602082019050818103600083015261207a8161203e565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f6561636820757365722063616e20686176652061206d6178206f66203320616360008201527f636f756e74730000000000000000000000000000000000000000000000000000602082015250565b600061210c602683611a03565b9150612117826120b0565b604082019050919050565b6000602082019050818103600083015261213b816120ff565b9050919050565b6000604082019050818103600083015261215c81856118d1565b905061216b6020830184611631565b939250505056fea264697066735822122090f5a97b8089dc086bb0168ab8cbb53ce585d299f3b593175ab34dd97ab8710f64736f6c63430008140033";

type BankAccountConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BankAccountConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BankAccount__factory extends ContractFactory {
  constructor(...args: BankAccountConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BankAccount> {
    return super.deploy(overrides || {}) as Promise<BankAccount>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): BankAccount {
    return super.attach(address) as BankAccount;
  }
  override connect(signer: Signer): BankAccount__factory {
    return super.connect(signer) as BankAccount__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BankAccountInterface {
    return new utils.Interface(_abi) as BankAccountInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BankAccount {
    return new Contract(address, _abi, signerOrProvider) as BankAccount;
  }
}
