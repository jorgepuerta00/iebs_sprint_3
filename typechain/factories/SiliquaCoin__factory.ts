/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SiliquaCoin, SiliquaCoinInterface } from "../SiliquaCoin";

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
        internalType: "uint256",
        name: "initialSupply",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
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
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "description",
        type: "string",
      },
    ],
    name: "ProposalCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "result",
        type: "bool",
      },
    ],
    name: "ProposalExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "ethAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
    ],
    name: "TokensPurchased",
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "voter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "vote",
        type: "bool",
      },
    ],
    name: "Voted",
    type: "event",
  },
  {
    inputs: [],
    name: "MIN_TOKENS_TO_PROPOSE",
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
    name: "TOKEN_TO_ETH_RATE",
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
    name: "VOTING_PERIOD",
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
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "claimTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_description",
        type: "string",
      },
    ],
    name: "createProposal",
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
        internalType: "uint256",
        name: "_proposalId",
        type: "uint256",
      },
    ],
    name: "executeProposal",
    outputs: [],
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
        name: "",
        type: "address",
      },
    ],
    name: "lastClaimedTimestamp",
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
    name: "nextProposalId",
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
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
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
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "proposals",
    outputs: [
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "yesVotes",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "noVotes",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "executed",
        type: "bool",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "safeTransfer",
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
    name: "safeTransferFrom",
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
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_proposalId",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_vote",
        type: "bool",
      },
    ],
    name: "voteOnProposal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001f0e38038062001f0e833981016040819052620000349162000278565b8282600362000044838262000379565b50600462000053828262000379565b505050620000706200006a6200009260201b60201c565b62000096565b6005805460ff60a01b19169055620000893382620000e8565b5050506200046d565b3390565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b038216620001435760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b806002600082825462000157919062000445565b90915550506001600160a01b038216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b505050565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001db57600080fd5b81516001600160401b0380821115620001f857620001f8620001b3565b604051601f8301601f19908116603f01168101908282118183101715620002235762000223620001b3565b816040528381526020925086838588010111156200024057600080fd5b600091505b8382101562000264578582018301518183018401529082019062000245565b600093810190920192909252949350505050565b6000806000606084860312156200028e57600080fd5b83516001600160401b0380821115620002a657600080fd5b620002b487838801620001c9565b94506020860151915080821115620002cb57600080fd5b50620002da86828701620001c9565b925050604084015190509250925092565b600181811c908216806200030057607f821691505b6020821081036200032157634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620001ae57600081815260208120601f850160051c81016020861015620003505750805b601f850160051c820191505b8181101562000371578281556001016200035c565b505050505050565b81516001600160401b03811115620003955762000395620001b3565b620003ad81620003a68454620002eb565b8462000327565b602080601f831160018114620003e55760008415620003cc5750858301515b600019600386901b1c1916600185901b17855562000371565b600085815260208120601f198616915b828110156200041657888601518255948401946001909101908401620003f5565b5085821015620004355787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b808201808211156200046757634e487b7160e01b600052601160045260246000fd5b92915050565b611a91806200047d6000396000f3fe6080604052600436106101e75760003560e01c806342966c68116101025780638da5cb5b11610095578063b1610d7e11610064578063b1610d7e146105dd578063b6de6d1f146105f4578063dd62ed3e14610611578063f2fde38b1461063157600080fd5b80638da5cb5b1461056057806395d89b4114610588578063a457c2d71461059d578063a9059cbb146105bd57600080fd5b806370a08231116100d157806370a08231146104e0578063715018a61461051657806379cc67901461052b5780638456cb591461054b57600080fd5b806342966c681461046c57806348c54b9d1461048c57806349c2a1a6146104a15780635c975abb146104c157600080fd5b80632ab09d141161017a5780633f4ba83a116101495780633f4ba83a146103f757806340c10f191461040c578063423f6cef1461042c57806342842e0e1461044c57600080fd5b80632ab09d141461038f578063313ce567146103a5578063375379f3146103c157806339509351146103d757600080fd5b80630d61b519116101b65780630d61b519146103185780631614665c1461033a57806318160ddd1461035a57806323b872dd1461036f57600080fd5b8063013cf08b1461025157806302ee0efb1461028b57806306fdde03146102c6578063095ea7b3146102e857600080fd5b3661024c576101f4610651565b3460006102036103e88361153e565b905061020f33826106a5565b604080518381526020810183905233917f8fafebcaf9d154343dad25669bfa277f4fbacd7ac6b0c4fed522580e040a0f33910160405180910390a2005b600080fd5b34801561025d57600080fd5b5061027161026c366004611555565b610765565b6040516102829594939291906115b4565b60405180910390f35b34801561029757600080fd5b506102b86102a6366004611609565b60066020526000908152604090205481565b604051908152602001610282565b3480156102d257600080fd5b506102db61081f565b604051610282919061162b565b3480156102f457600080fd5b5061030861030336600461163e565b6108b1565b6040519015158152602001610282565b34801561032457600080fd5b50610338610333366004611555565b6108cb565b005b34801561034657600080fd5b50610338610355366004611668565b6109fa565b34801561036657600080fd5b506002546102b8565b34801561037b57600080fd5b5061030861038a36600461169d565b610b5c565b34801561039b57600080fd5b506102b860085481565b3480156103b157600080fd5b5060405160128152602001610282565b3480156103cd57600080fd5b506102b86103e881565b3480156103e357600080fd5b506103086103f236600461163e565b610b80565b34801561040357600080fd5b50610338610ba2565b34801561041857600080fd5b5061033861042736600461163e565b610bb2565b34801561043857600080fd5b5061030861044736600461163e565b610bcc565b34801561045857600080fd5b5061030861046736600461169d565b610bea565b34801561047857600080fd5b50610338610487366004611555565b610bff565b34801561049857600080fd5b50610338610c0c565b3480156104ad57600080fd5b506103386104bc3660046116ef565b610cca565b3480156104cd57600080fd5b50600554600160a01b900460ff16610308565b3480156104ec57600080fd5b506102b86104fb366004611609565b6001600160a01b031660009081526020819052604090205490565b34801561052257600080fd5b50610338610dab565b34801561053757600080fd5b5061033861054636600461163e565b610dbd565b34801561055757600080fd5b50610338610dd2565b34801561056c57600080fd5b506005546040516001600160a01b039091168152602001610282565b34801561059457600080fd5b506102db610de2565b3480156105a957600080fd5b506103086105b836600461163e565b610df1565b3480156105c957600080fd5b506103086105d836600461163e565b610e6c565b3480156105e957600080fd5b506102b862093a8081565b34801561060057600080fd5b506102b868056bc75e2d6310000081565b34801561061d57600080fd5b506102b861062c3660046117a0565b610e7a565b34801561063d57600080fd5b5061033861064c366004611609565b610ea5565b600554600160a01b900460ff16156106a35760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064015b60405180910390fd5b565b6001600160a01b0382166106fb5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161069a565b806002600082825461070d91906117d3565b90915550506001600160a01b038216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35b5050565b600760205260009081526040902080548190610780906117e6565b80601f01602080910402602001604051908101604052809291908181526020018280546107ac906117e6565b80156107f95780601f106107ce576101008083540402835291602001916107f9565b820191906000526020600020905b8154815290600101906020018083116107dc57829003601f168201915b505050506001830154600284015460038501546005909501549394919390925060ff1685565b60606003805461082e906117e6565b80601f016020809104026020016040519081016040528092919081815260200182805461085a906117e6565b80156108a75780601f1061087c576101008083540402835291602001916108a7565b820191906000526020600020905b81548152906001019060200180831161088a57829003601f168201915b5050505050905090565b6000336108bf818585610f20565b60019150505b92915050565b6000818152600760205260409020600181015442101561091f5760405162461bcd60e51b815260206004820152600f60248201526e2b37ba34b733903737ba1037bb32b960891b604482015260640161069a565b600581015460ff16156109675760405162461bcd60e51b815260206004820152601060248201526f105b1c9958591e48195e1958dd5d195960821b604482015260640161069a565b60058101805460ff191660011790556003810154600282015411156109c45760408051838152600160208201527f948f4a9cd986f1118c3fbd459f7a22b23c0693e1ca3ef06a6a8be5aa7d39cc0391015b60405180910390a15050565b60408051838152600060208201527f948f4a9cd986f1118c3fbd459f7a22b23c0693e1ca3ef06a6a8be5aa7d39cc0391016109b8565b600082815260076020526040902060018101544210610a505760405162461bcd60e51b81526020600482015260126024820152712b37ba34b733903832b934b7b21037bb32b960711b604482015260640161069a565b33600090815260048201602052604090205460ff1615610aa25760405162461bcd60e51b815260206004820152600d60248201526c105b1c9958591e481d9bdd1959609a1b604482015260640161069a565b3360009081526004820160205260409020805460ff191660011790558115610af25733600090815260208190526040902054816002016000828254610ae791906117d3565b90915550610b1b9050565b33600090815260208190526040902054816003016000828254610b1591906117d3565b90915550505b60408051848152831515602082015233917f749addf8eadeff63c43be59c27331be5c6d4fc9e82bbfbcf162321c9b35a95b4910160405180910390a2505050565b600033610b6a858285611044565b610b758585856110be565b506001949350505050565b6000336108bf818585610b938383610e7a565b610b9d91906117d3565b610f20565b610baa611262565b6106a36112bc565b610bba611262565b610bc2610651565b61076182826106a5565b6000610bd6610651565b610be08383610e6c565b5060019392505050565b6000610bf4610651565b610b75848484610b5c565b610c093382611311565b50565b610c14610651565b6000610c226012600a611904565b610c2d90600161153e565b3360009081526006602052604090205490915062015180904290610c529083906117d3565b1115610caa5760405162461bcd60e51b815260206004820152602160248201527f596f752063616e20636c61696d20746f6b656e73206f6e6365207065722064616044820152607960f81b606482015260840161069a565b610cb433836106a5565b5050336000908152600660205260409020429055565b3360009081526020819052604090205468056bc75e2d631000001115610d285760405162461bcd60e51b8152602060048201526013602482015272496e73756666696369656e7420746f6b656e7360681b604482015260640161069a565b600854600090815260076020526040902080610d448382611961565b50610d5262093a80426117d3565b60018201556008546040517f9c770c289ab5bf7e57cb1d23c8ceae993aea46eb64847072fd3d78ca60d3e43291610d8a918590611a21565b60405180910390a160088054906000610da283611a42565b91905055505050565b610db3611262565b6106a36000611443565b610dc8823383611044565b6107618282611311565b610dda611262565b6106a3611495565b60606004805461082e906117e6565b60003381610dff8286610e7a565b905083811015610e5f5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b606482015260840161069a565b610b758286868403610f20565b6000336108bf8185856110be565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b610ead611262565b6001600160a01b038116610f125760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161069a565b610c0981611443565b505050565b6001600160a01b038316610f825760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161069a565b6001600160a01b038216610fe35760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161069a565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b60006110508484610e7a565b905060001981146110b857818110156110ab5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604482015260640161069a565b6110b88484848403610f20565b50505050565b6001600160a01b0383166111225760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161069a565b6001600160a01b0382166111845760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161069a565b6001600160a01b038316600090815260208190526040902054818110156111fc5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161069a565b6001600160a01b03848116600081815260208181526040808320878703905593871680835291849020805487019055925185815290927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a36110b8565b6005546001600160a01b031633146106a35760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161069a565b6112c46114d8565b6005805460ff60a01b191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b6001600160a01b0382166113715760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161069a565b6001600160a01b038216600090815260208190526040902054818110156113e55760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b606482015260840161069a565b6001600160a01b0383166000818152602081815260408083208686039055600280548790039055518581529192917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a3505050565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b61149d610651565b6005805460ff60a01b1916600160a01b1790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586112f43390565b600554600160a01b900460ff166106a35760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b604482015260640161069a565b634e487b7160e01b600052601160045260246000fd5b80820281158282048414176108c5576108c5611528565b60006020828403121561156757600080fd5b5035919050565b6000815180845260005b8181101561159457602081850181015186830182015201611578565b506000602082860101526020601f19601f83011685010191505092915050565b60a0815260006115c760a083018861156e565b905085602083015284604083015283606083015282151560808301529695505050505050565b80356001600160a01b038116811461160457600080fd5b919050565b60006020828403121561161b57600080fd5b611624826115ed565b9392505050565b602081526000611624602083018461156e565b6000806040838503121561165157600080fd5b61165a836115ed565b946020939093013593505050565b6000806040838503121561167b57600080fd5b823591506020830135801515811461169257600080fd5b809150509250929050565b6000806000606084860312156116b257600080fd5b6116bb846115ed565b92506116c9602085016115ed565b9150604084013590509250925092565b634e487b7160e01b600052604160045260246000fd5b60006020828403121561170157600080fd5b813567ffffffffffffffff8082111561171957600080fd5b818401915084601f83011261172d57600080fd5b81358181111561173f5761173f6116d9565b604051601f8201601f19908116603f01168101908382118183101715611767576117676116d9565b8160405282815287602084870101111561178057600080fd5b826020860160208301376000928101602001929092525095945050505050565b600080604083850312156117b357600080fd5b6117bc836115ed565b91506117ca602084016115ed565b90509250929050565b808201808211156108c5576108c5611528565b600181811c908216806117fa57607f821691505b60208210810361181a57634e487b7160e01b600052602260045260246000fd5b50919050565b600181815b8085111561185b57816000190482111561184157611841611528565b8085161561184e57918102915b93841c9390800290611825565b509250929050565b600082611872575060016108c5565b8161187f575060006108c5565b8160018114611895576002811461189f576118bb565b60019150506108c5565b60ff8411156118b0576118b0611528565b50506001821b6108c5565b5060208310610133831016604e8410600b84101617156118de575081810a6108c5565b6118e88383611820565b80600019048211156118fc576118fc611528565b029392505050565b600061162460ff841683611863565b601f821115610f1b57600081815260208120601f850160051c8101602086101561193a5750805b601f850160051c820191505b8181101561195957828155600101611946565b505050505050565b815167ffffffffffffffff81111561197b5761197b6116d9565b61198f8161198984546117e6565b84611913565b602080601f8311600181146119c457600084156119ac5750858301515b600019600386901b1c1916600185901b178555611959565b600085815260208120601f198616915b828110156119f3578886015182559484019460019091019084016119d4565b5085821015611a115787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b828152604060208201526000611a3a604083018461156e565b949350505050565b600060018201611a5457611a54611528565b506001019056fea26469706673582212201d03e953fc4ce10147cce654e3f5de89d050fd1fb62bff9f16ff6ce70fea771064736f6c63430008150033";

export class SiliquaCoin__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    name: string,
    symbol: string,
    initialSupply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SiliquaCoin> {
    return super.deploy(
      name,
      symbol,
      initialSupply,
      overrides || {}
    ) as Promise<SiliquaCoin>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    initialSupply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name,
      symbol,
      initialSupply,
      overrides || {}
    );
  }
  attach(address: string): SiliquaCoin {
    return super.attach(address) as SiliquaCoin;
  }
  connect(signer: Signer): SiliquaCoin__factory {
    return super.connect(signer) as SiliquaCoin__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SiliquaCoinInterface {
    return new utils.Interface(_abi) as SiliquaCoinInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SiliquaCoin {
    return new Contract(address, _abi, signerOrProvider) as SiliquaCoin;
  }
}
