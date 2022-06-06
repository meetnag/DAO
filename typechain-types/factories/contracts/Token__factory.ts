/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
  BigNumberish,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Token, TokenInterface } from "../../contracts/Token";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "address",
        name: "initialAccount",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "initialBalance",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
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
        name: "amount",
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
        name: "owner",
        type: "address",
      },
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
    name: "approveInternal",
    outputs: [],
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
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "amount",
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
        name: "amount",
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
    name: "transferInternal",
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
];

const _bytecode =
  "0x608060405260405162002493380380620024938339818101604052810190620000299190620005d9565b8383816003908051906020019062000043929190620002ec565b5080600490805190602001906200005c929190620002ec565b5050506200007f620000736200009b60201b60201c565b620000a360201b60201c565b6200009182826200016960201b60201c565b505050506200082b565b600033905090565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415620001dc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620001d390620006ea565b60405180910390fd5b620001f060008383620002e260201b60201c565b80600260008282546200020491906200073b565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546200025b91906200073b565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620002c29190620007a9565b60405180910390a3620002de60008383620002e760201b60201c565b5050565b505050565b505050565b828054620002fa90620007f5565b90600052602060002090601f0160209004810192826200031e57600085556200036a565b82601f106200033957805160ff19168380011785556200036a565b828001600101855582156200036a579182015b82811115620003695782518255916020019190600101906200034c565b5b5090506200037991906200037d565b5090565b5b80821115620003985760008160009055506001016200037e565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200040582620003ba565b810181811067ffffffffffffffff82111715620004275762000426620003cb565b5b80604052505050565b60006200043c6200039c565b90506200044a8282620003fa565b919050565b600067ffffffffffffffff8211156200046d576200046c620003cb565b5b6200047882620003ba565b9050602081019050919050565b60005b83811015620004a557808201518184015260208101905062000488565b83811115620004b5576000848401525b50505050565b6000620004d2620004cc846200044f565b62000430565b905082815260208101848484011115620004f157620004f0620003b5565b5b620004fe84828562000485565b509392505050565b600082601f8301126200051e576200051d620003b0565b5b815162000530848260208601620004bb565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620005668262000539565b9050919050565b620005788162000559565b81146200058457600080fd5b50565b60008151905062000598816200056d565b92915050565b6000819050919050565b620005b3816200059e565b8114620005bf57600080fd5b50565b600081519050620005d381620005a8565b92915050565b60008060008060808587031215620005f657620005f5620003a6565b5b600085015167ffffffffffffffff811115620006175762000616620003ab565b5b620006258782880162000506565b945050602085015167ffffffffffffffff811115620006495762000648620003ab565b5b620006578782880162000506565b93505060406200066a8782880162000587565b92505060606200067d87828801620005c2565b91505092959194509250565b600082825260208201905092915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000620006d2601f8362000689565b9150620006df826200069a565b602082019050919050565b600060208201905081810360008301526200070581620006c3565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600062000748826200059e565b915062000755836200059e565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156200078d576200078c6200070c565b5b828201905092915050565b620007a3816200059e565b82525050565b6000602082019050620007c0600083018462000798565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200080e57607f821691505b60208210811415620008255762000824620007c6565b5b50919050565b611c58806200083b6000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c806370a08231116100a25780639dc29fac116100715780639dc29fac146102cf578063a457c2d7146102eb578063a9059cbb1461031b578063dd62ed3e1461034b578063f2fde38b1461037b57610116565b806370a0823114610259578063715018a6146102895780638da5cb5b1461029357806395d89b41146102b157610116565b806323b872dd116100e957806323b872dd146101a3578063313ce567146101d357806339509351146101f157806340c10f191461022157806356189cb41461023d57610116565b806306fdde031461011b578063095ea7b31461013957806318160ddd14610169578063222f5be014610187575b600080fd5b610123610397565b6040516101309190611226565b60405180910390f35b610153600480360381019061014e91906112e1565b610429565b604051610160919061133c565b60405180910390f35b61017161044c565b60405161017e9190611366565b60405180910390f35b6101a1600480360381019061019c9190611381565b610456565b005b6101bd60048036038101906101b89190611381565b610466565b6040516101ca919061133c565b60405180910390f35b6101db610495565b6040516101e891906113f0565b60405180910390f35b61020b600480360381019061020691906112e1565b61049e565b604051610218919061133c565b60405180910390f35b61023b600480360381019061023691906112e1565b6104d5565b005b61025760048036038101906102529190611381565b6104e3565b005b610273600480360381019061026e919061140b565b6104f3565b6040516102809190611366565b60405180910390f35b61029161053b565b005b61029b6105c3565b6040516102a89190611447565b60405180910390f35b6102b96105ed565b6040516102c69190611226565b60405180910390f35b6102e960048036038101906102e491906112e1565b61067f565b005b610305600480360381019061030091906112e1565b61068d565b604051610312919061133c565b60405180910390f35b610335600480360381019061033091906112e1565b610704565b604051610342919061133c565b60405180910390f35b61036560048036038101906103609190611462565b610727565b6040516103729190611366565b60405180910390f35b6103956004803603810190610390919061140b565b6107ae565b005b6060600380546103a6906114d1565b80601f01602080910402602001604051908101604052809291908181526020018280546103d2906114d1565b801561041f5780601f106103f45761010080835404028352916020019161041f565b820191906000526020600020905b81548152906001019060200180831161040257829003601f168201915b5050505050905090565b6000806104346108a6565b90506104418185856108ae565b600191505092915050565b6000600254905090565b610461838383610a79565b505050565b6000806104716108a6565b905061047e858285610cfa565b610489858585610a79565b60019150509392505050565b60006012905090565b6000806104a96108a6565b90506104ca8185856104bb8589610727565b6104c59190611532565b6108ae565b600191505092915050565b6104df8282610d86565b5050565b6104ee8383836108ae565b505050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6105436108a6565b73ffffffffffffffffffffffffffffffffffffffff166105616105c3565b73ffffffffffffffffffffffffffffffffffffffff16146105b7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105ae906115d4565b60405180910390fd5b6105c16000610ee6565b565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600480546105fc906114d1565b80601f0160208091040260200160405190810160405280929190818152602001828054610628906114d1565b80156106755780601f1061064a57610100808354040283529160200191610675565b820191906000526020600020905b81548152906001019060200180831161065857829003601f168201915b5050505050905090565b6106898282610fac565b5050565b6000806106986108a6565b905060006106a68286610727565b9050838110156106eb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106e290611666565b60405180910390fd5b6106f882868684036108ae565b60019250505092915050565b60008061070f6108a6565b905061071c818585610a79565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6107b66108a6565b73ffffffffffffffffffffffffffffffffffffffff166107d46105c3565b73ffffffffffffffffffffffffffffffffffffffff161461082a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610821906115d4565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561089a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610891906116f8565b60405180910390fd5b6108a381610ee6565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561091e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109159061178a565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561098e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109859061181c565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610a6c9190611366565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610ae9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ae0906118ae565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610b59576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b5090611940565b60405180910390fd5b610b64838383611183565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610bea576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610be1906119d2565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610c7d9190611532565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610ce19190611366565b60405180910390a3610cf4848484611188565b50505050565b6000610d068484610727565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610d805781811015610d72576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d6990611a3e565b60405180910390fd5b610d7f84848484036108ae565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610df6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ded90611aaa565b60405180910390fd5b610e0260008383611183565b8060026000828254610e149190611532565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610e699190611532565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610ece9190611366565b60405180910390a3610ee260008383611188565b5050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561101c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161101390611b3c565b60405180910390fd5b61102882600083611183565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156110ae576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110a590611bce565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600260008282546111059190611bee565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161116a9190611366565b60405180910390a361117e83600084611188565b505050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b838110156111c75780820151818401526020810190506111ac565b838111156111d6576000848401525b50505050565b6000601f19601f8301169050919050565b60006111f88261118d565b6112028185611198565b93506112128185602086016111a9565b61121b816111dc565b840191505092915050565b6000602082019050818103600083015261124081846111ed565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006112788261124d565b9050919050565b6112888161126d565b811461129357600080fd5b50565b6000813590506112a58161127f565b92915050565b6000819050919050565b6112be816112ab565b81146112c957600080fd5b50565b6000813590506112db816112b5565b92915050565b600080604083850312156112f8576112f7611248565b5b600061130685828601611296565b9250506020611317858286016112cc565b9150509250929050565b60008115159050919050565b61133681611321565b82525050565b6000602082019050611351600083018461132d565b92915050565b611360816112ab565b82525050565b600060208201905061137b6000830184611357565b92915050565b60008060006060848603121561139a57611399611248565b5b60006113a886828701611296565b93505060206113b986828701611296565b92505060406113ca868287016112cc565b9150509250925092565b600060ff82169050919050565b6113ea816113d4565b82525050565b600060208201905061140560008301846113e1565b92915050565b60006020828403121561142157611420611248565b5b600061142f84828501611296565b91505092915050565b6114418161126d565b82525050565b600060208201905061145c6000830184611438565b92915050565b6000806040838503121561147957611478611248565b5b600061148785828601611296565b925050602061149885828601611296565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806114e957607f821691505b602082108114156114fd576114fc6114a2565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061153d826112ab565b9150611548836112ab565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561157d5761157c611503565b5b828201905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006115be602083611198565b91506115c982611588565b602082019050919050565b600060208201905081810360008301526115ed816115b1565b9050919050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000611650602583611198565b915061165b826115f4565b604082019050919050565b6000602082019050818103600083015261167f81611643565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006116e2602683611198565b91506116ed82611686565b604082019050919050565b60006020820190508181036000830152611711816116d5565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000611774602483611198565b915061177f82611718565b604082019050919050565b600060208201905081810360008301526117a381611767565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000611806602283611198565b9150611811826117aa565b604082019050919050565b60006020820190508181036000830152611835816117f9565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6000611898602583611198565b91506118a38261183c565b604082019050919050565b600060208201905081810360008301526118c78161188b565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b600061192a602383611198565b9150611935826118ce565b604082019050919050565b600060208201905081810360008301526119598161191d565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b60006119bc602683611198565b91506119c782611960565b604082019050919050565b600060208201905081810360008301526119eb816119af565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b6000611a28601d83611198565b9150611a33826119f2565b602082019050919050565b60006020820190508181036000830152611a5781611a1b565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000611a94601f83611198565b9150611a9f82611a5e565b602082019050919050565b60006020820190508181036000830152611ac381611a87565b9050919050565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b6000611b26602183611198565b9150611b3182611aca565b604082019050919050565b60006020820190508181036000830152611b5581611b19565b9050919050565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b6000611bb8602283611198565b9150611bc382611b5c565b604082019050919050565b60006020820190508181036000830152611be781611bab565b9050919050565b6000611bf9826112ab565b9150611c04836112ab565b925082821015611c1757611c16611503565b5b82820390509291505056fea26469706673582212201ad4455a4025bd31832c064c4e5194077491896342b93e2f39e2673c1c597e6d64736f6c63430008080033";

type TokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Token__factory extends ContractFactory {
  constructor(...args: TokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name: string,
    symbol: string,
    initialAccount: string,
    initialBalance: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<Token> {
    return super.deploy(
      name,
      symbol,
      initialAccount,
      initialBalance,
      overrides || {}
    ) as Promise<Token>;
  }
  override getDeployTransaction(
    name: string,
    symbol: string,
    initialAccount: string,
    initialBalance: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name,
      symbol,
      initialAccount,
      initialBalance,
      overrides || {}
    );
  }
  override attach(address: string): Token {
    return super.attach(address) as Token;
  }
  override connect(signer: Signer): Token__factory {
    return super.connect(signer) as Token__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenInterface {
    return new utils.Interface(_abi) as TokenInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Token {
    return new Contract(address, _abi, signerOrProvider) as Token;
  }
}
