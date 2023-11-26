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
import type {
  HorsesAuctionMarketplace,
  HorsesAuctionMarketplaceInterface,
} from "../HorsesAuctionMarketplace";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_nftContractAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_siliquaCoinContractAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_commissionPercentage",
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
        internalType: "uint256",
        name: "auctionId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
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
        name: "startingPrice",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
    ],
    name: "AuctionCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "auctionId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "winner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "winningBid",
        type: "uint256",
      },
    ],
    name: "AuctionEnded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "auctionId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "bidder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bidAmount",
        type: "uint256",
      },
    ],
    name: "BidPlaced",
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
    inputs: [
      {
        internalType: "address",
        name: "seller",
        type: "address",
      },
    ],
    name: "approveSeller",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "auctionId",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "auctions",
    outputs: [
      {
        internalType: "uint256",
        name: "auctionId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "startingPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "highestBid",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "highestBidder",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "auctionEndTime",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "ended",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "commissionPercentage",
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
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "startingPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
    ],
    name: "createAuction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_auctionId",
        type: "uint256",
      },
    ],
    name: "endAuction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "nftToken",
    outputs: [
      {
        internalType: "contract HorsesNFT",
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
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
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
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
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
        name: "_auctionId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "bidAmount",
        type: "uint256",
      },
    ],
    name: "placeBid",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "seller",
        type: "address",
      },
    ],
    name: "revokeSellerApproval",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_nftContractAddress",
        type: "address",
      },
    ],
    name: "setNFTContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_siliquaCoinAddress",
        type: "address",
      },
    ],
    name: "setSiliquaCoin",
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
    name: "token",
    outputs: [
      {
        internalType: "contract ISiliquaCoin",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalCommissionEarned",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_newCommissionPercentage",
        type: "uint256",
      },
    ],
    name: "updateCommissionPercentage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052600060065534801561001557600080fd5b50604051620013a8380380620013a8833981016040819052610036916100e3565b61003f33610077565b600180546001600160a01b039485166001600160a01b031991821617909155600280549390941692169190911790915560035561011f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516001600160a01b03811681146100de57600080fd5b919050565b6000806000606084860312156100f857600080fd5b610101846100c7565b925061010f602085016100c7565b9150604084015190509250925092565b611279806200012f6000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c8063a7ccabdf116100ad578063d06fcba811610071578063d06fcba814610334578063d575fe6414610347578063f23a6e6114610350578063f2fde38b1461036f578063fc0c546a1461038257600080fd5b8063a7ccabdf146102ba578063b226a966146102cd578063b9a2de3a146102e0578063bc197c81146102f3578063c73cdd231461032b57600080fd5b806357c90de5116100f457806357c90de5146102545780635ec5d85614610267578063715018a61461027a5780638ce2199e146102825780638da5cb5b1461029557600080fd5b806301ffc9a71461013157806310782f8f1461015957806313bc2b4914610170578063431f21da14610185578063571a26a014610198575b600080fd5b61014461013f366004610e54565b610395565b60405190151581526020015b60405180910390f35b61016260065481565b604051908152602001610150565b61018361017e366004610ea1565b6103cc565b005b610183610193366004610ebc565b6103f6565b6102016101a6366004610eee565b600560208190526000918252604090912080546001820154600283015460038401546004850154958501546006860154600787015460089097015495976001600160a01b039586169794969395909492939116919060ff1689565b60408051998a526001600160a01b0398891660208b01528901969096526060880194909452608087019290925260a086015290921660c084015260e0830191909152151561010082015261012001610150565b610183610262366004610f07565b610654565b610183610275366004610ea1565b6108ce565b610183610941565b610183610290366004610eee565b610955565b6000546001600160a01b03165b6040516001600160a01b039091168152602001610150565b6101836102c8366004610ea1565b6109b3565b6101836102db366004610ea1565b6109dd565b6101836102ee366004610eee565b610a1e565b610312610301366004611060565b63bc197c8160e01b95945050505050565b6040516001600160e01b03199091168152602001610150565b61016260045481565b6001546102a2906001600160a01b031681565b61016260035481565b61031261035e36600461110a565b63f23a6e6160e01b95945050505050565b61018361037d366004610ea1565b610d31565b6002546102a2906001600160a01b031681565b60006001600160e01b03198216630271189760e51b14806103c657506301ffc9a760e01b6001600160e01b03198316145b92915050565b6103d4610daa565b600280546001600160a01b0319166001600160a01b0392909216919091179055565b6001546040516370a0823160e01b815233600482015284916001600160a01b0316906370a0823190602401602060405180830381865afa15801561043e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610462919061116f565b10156104ac5760405162461bcd60e51b8152602060048201526014602482015273496e73756666696369656e742062616c616e636560601b60448201526064015b60405180910390fd5b60408051610120810182526006548152336020820152908101859052606081018490526080810183905260a08101839052600060c082015260e081016104f2834261119e565b81526000602091820181905260068054825260058084526040928390208551815593850151600180860180546001600160a01b03199081166001600160a01b039485161790915587860151600288015560608801516003880155608088015160048089019190915560a08901519488019490945560c088015194870180549091169483169490941790935560e08601516007860155610100909501516008909401805460ff1916941515949094179093555490516323b872dd60e01b81529216916323b872dd916105c991339130918a91016111b1565b600060405180830381600087803b1580156105e357600080fd5b505af11580156105f7573d6000803e3d6000fd5b5050600654604080513381526020810189905290810187905260608101869052608081018590529092507e09646912aaa7019ad837e57cc5c0613299c8432f5268d4450ab8673fe0fa03915060a00160405180910390a250505050565b6000828152600560205260409020600881015460ff16156106af5760405162461bcd60e51b8152602060048201526015602482015274105d58dd1a5bdb88185b1c9958591e48195b991959605a1b60448201526064016104a3565b806007015442106106f65760405162461bcd60e51b8152602060048201526011602482015270105d58dd1a5bdb881a185cc8195b991959607a1b60448201526064016104a3565b806005015482116107685760405162461bcd60e51b815260206004820152603660248201527f42696420616d6f756e74206d75737420626520686967686572207468616e20746044820152751a194818dd5c9c995b9d081a1a59da195cdd08189a5960521b60648201526084016104a3565b60068101546001600160a01b0316156107fe576002546006820154600583015460405163423f6cef60e01b81526001600160a01b039283166004820152602481019190915291169063423f6cef906044016020604051808303816000875af11580156107d8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107fc91906111d5565b505b600254604051632142170760e11b81526001600160a01b03909116906342842e0e90610832903390309087906004016111b1565b6020604051808303816000875af1158015610851573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061087591906111d5565b50600581018290556006810180546001600160a01b0319163390811790915581546040518481527f0e54eff26401bf69b81b26f60bd85ef47f5d85275c1d268d84f68d6897431c479060200160405180910390a3505050565b6108d6610daa565b6001805460405163a22cb46560e01b81526001600160a01b038481166004830152602482019390935291169063a22cb465906044015b600060405180830381600087803b15801561092657600080fd5b505af115801561093a573d6000803e3d6000fd5b5050505050565b610949610daa565b6109536000610e04565b565b61095d610daa565b60648111156109ae5760405162461bcd60e51b815260206004820152601d60248201527f496e76616c696420636f6d6d697373696f6e2070657263656e7461676500000060448201526064016104a3565b600355565b6109bb610daa565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6109e5610daa565b60015460405163a22cb46560e01b81526001600160a01b038381166004830152600060248301529091169063a22cb4659060440161090c565b610a26610daa565b6000818152600560205260409020600881015460ff1615610a815760405162461bcd60e51b8152602060048201526015602482015274105d58dd1a5bdb88185b1c9958591e48195b991959605a1b60448201526064016104a3565b8060070154421015610ad55760405162461bcd60e51b815260206004820152601960248201527f41756374696f6e20686173206e6f742079657420656e6465640000000000000060448201526064016104a3565b60088101805460ff1916600117905560068101546001600160a01b031615610c8257600060646003548360050154610b0d91906111f7565b610b17919061120e565b90506000818360050154610b2b9190611230565b600254600185015460405163423f6cef60e01b81526001600160a01b03918216600482015260248101849052929350169063423f6cef906044016020604051808303816000875af1158015610b84573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ba891906111d5565b508160046000828254610bbb919061119e565b9091555050600154600684015460028501546040516323b872dd60e01b81526001600160a01b03938416936323b872dd93610bff93309392909116916004016111b1565b600060405180830381600087803b158015610c1957600080fd5b505af1158015610c2d573d6000803e3d6000fd5b505050506006830154835460058501546040519081526001600160a01b03909216917fd2aa34a4fdbbc6dff6a3e56f46e0f3ae2a31d7785ff3487aa5c95c642acea5019060200160405180910390a350505050565b600180549082015460028301546040516323b872dd60e01b81526001600160a01b03938416936323b872dd93610cc193309392909116916004016111b1565b600060405180830381600087803b158015610cdb57600080fd5b505af1158015610cef573d6000803e3d6000fd5b50508254604051600080825293509091507fd2aa34a4fdbbc6dff6a3e56f46e0f3ae2a31d7785ff3487aa5c95c642acea5019060200160405180910390a35050565b610d39610daa565b6001600160a01b038116610d9e5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016104a3565b610da781610e04565b50565b6000546001600160a01b031633146109535760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104a3565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600060208284031215610e6657600080fd5b81356001600160e01b031981168114610e7e57600080fd5b9392505050565b80356001600160a01b0381168114610e9c57600080fd5b919050565b600060208284031215610eb357600080fd5b610e7e82610e85565b60008060008060808587031215610ed257600080fd5b5050823594602084013594506040840135936060013592509050565b600060208284031215610f0057600080fd5b5035919050565b60008060408385031215610f1a57600080fd5b50508035926020909101359150565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715610f6857610f68610f29565b604052919050565b600082601f830112610f8157600080fd5b8135602067ffffffffffffffff821115610f9d57610f9d610f29565b8160051b610fac828201610f3f565b9283528481018201928281019087851115610fc657600080fd5b83870192505b84831015610fe557823582529183019190830190610fcc565b979650505050505050565b600082601f83011261100157600080fd5b813567ffffffffffffffff81111561101b5761101b610f29565b61102e601f8201601f1916602001610f3f565b81815284602083860101111561104357600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080600060a0868803121561107857600080fd5b61108186610e85565b945061108f60208701610e85565b9350604086013567ffffffffffffffff808211156110ac57600080fd5b6110b889838a01610f70565b945060608801359150808211156110ce57600080fd5b6110da89838a01610f70565b935060808801359150808211156110f057600080fd5b506110fd88828901610ff0565b9150509295509295909350565b600080600080600060a0868803121561112257600080fd5b61112b86610e85565b945061113960208701610e85565b93506040860135925060608601359150608086013567ffffffffffffffff81111561116357600080fd5b6110fd88828901610ff0565b60006020828403121561118157600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b808201808211156103c6576103c6611188565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6000602082840312156111e757600080fd5b81518015158114610e7e57600080fd5b80820281158282048414176103c6576103c6611188565b60008261122b57634e487b7160e01b600052601260045260246000fd5b500490565b818103818111156103c6576103c661118856fea2646970667358221220a00093e18064ef47fa506d6104655029d1da81a973a97753fdc659064cc84b2064736f6c63430008150033";

export class HorsesAuctionMarketplace__factory extends ContractFactory {
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
    _nftContractAddress: string,
    _siliquaCoinContractAddress: string,
    _commissionPercentage: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<HorsesAuctionMarketplace> {
    return super.deploy(
      _nftContractAddress,
      _siliquaCoinContractAddress,
      _commissionPercentage,
      overrides || {}
    ) as Promise<HorsesAuctionMarketplace>;
  }
  getDeployTransaction(
    _nftContractAddress: string,
    _siliquaCoinContractAddress: string,
    _commissionPercentage: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _nftContractAddress,
      _siliquaCoinContractAddress,
      _commissionPercentage,
      overrides || {}
    );
  }
  attach(address: string): HorsesAuctionMarketplace {
    return super.attach(address) as HorsesAuctionMarketplace;
  }
  connect(signer: Signer): HorsesAuctionMarketplace__factory {
    return super.connect(signer) as HorsesAuctionMarketplace__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HorsesAuctionMarketplaceInterface {
    return new utils.Interface(_abi) as HorsesAuctionMarketplaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HorsesAuctionMarketplace {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as HorsesAuctionMarketplace;
  }
}