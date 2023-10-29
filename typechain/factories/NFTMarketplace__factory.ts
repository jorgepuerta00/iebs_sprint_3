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
  NFTMarketplace,
  NFTMarketplaceInterface,
} from "../NFTMarketplace";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_siliquaCoinAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_nftContractAddress",
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
        indexed: false,
        internalType: "uint256",
        name: "newCommissionPercentage",
        type: "uint256",
      },
    ],
    name: "CommissionPercentageUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newNFTContractAddress",
        type: "address",
      },
    ],
    name: "NFTContractUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "listingId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: true,
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
        name: "price",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "status",
        type: "string",
      },
    ],
    name: "NFTListed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "listingId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: true,
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
        name: "price",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "status",
        type: "string",
      },
    ],
    name: "NFTListingCancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "listingId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: true,
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
        name: "price",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "status",
        type: "string",
      },
    ],
    name: "NFTPurchased",
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
        name: "newSiliquaCoinAddress",
        type: "address",
      },
    ],
    name: "SiliquaCoinUpdated",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_listingId",
        type: "uint256",
      },
    ],
    name: "cancelListing",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "getActiveListings",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "listingId",
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
            name: "price",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isActive",
            type: "bool",
          },
        ],
        internalType: "struct NFTMarketplace.Listing[]",
        name: "activeListings",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "listNFT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "listingId",
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
    name: "listings",
    outputs: [
      {
        internalType: "uint256",
        name: "listingId",
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
        name: "price",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isActive",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nftToken",
    outputs: [
      {
        internalType: "contract GoTLandsNFT",
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
        name: "_listingId",
        type: "uint256",
      },
    ],
    name: "purchaseNFT",
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
    name: "siliquaCoinContract",
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
        internalType: "contract SiliquaCoin",
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
  "0x608060405260006007553480156200001657600080fd5b5060405162001789380380620017898339810160408190526200003991620000ed565b620000443362000080565b60018055600280546001600160a01b039384166001600160a01b031991821617909155600380549490931693169290921790556004556200012e565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516001600160a01b0381168114620000e857600080fd5b919050565b6000806000606084860312156200010357600080fd5b6200010e84620000d0565b92506200011e60208501620000d0565b9150604084015190509250925092565b61164b806200013e6000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c8063a7ccabdf116100b8578063d06fcba81161007c578063d06fcba814610298578063d575fe64146102ab578063de74e57b146102b4578063f23a6e611461033b578063f2fde38b1461035a578063fc0c546a1461036d57600080fd5b8063a7ccabdf1461021e578063b0136c8d14610231578063b226a96614610244578063bc197c8114610257578063c73cdd231461028f57600080fd5b8063715018a6116100ff578063715018a6146101b257806387c35bc0146101ba5780638ce2199e146101cf5780638da5cb5b146101e25780639405dfdd1461020757600080fd5b806301ffc9a71461013c578063150bde031461016457806329c9fcda14610179578063305a67a81461018c5780635ec5d8561461019f575b600080fd5b61014f61014a36600461118a565b610380565b60405190151581526020015b60405180910390f35b6101776101723660046111bb565b6103b7565b005b6101776101873660046111e9565b6106a6565b61017761019a3660046111bb565b6106f8565b6101776101ad3660046111e9565b610906565b610177610978565b6101c261098c565b60405161015b9190611206565b6101776101dd3660046111bb565b610b39565b6000546001600160a01b03165b6040516001600160a01b03909116815260200161015b565b61021060075481565b60405190815260200161015b565b61017761022c3660046111e9565b610bcd565b61017761023f366004611289565b610c1f565b6101776102523660046111e9565b610fd0565b6102766102653660046113ec565b63bc197c8160e01b95945050505050565b6040516001600160e01b0319909116815260200161015b565b61021060055481565b6002546101ef906001600160a01b031681565b61021060045481565b6103046102c23660046111bb565b60066020526000908152604090208054600182015460028301546003840154600485015460059095015493946001600160a01b03909316939192909160ff1686565b604080519687526001600160a01b0390951660208701529385019290925260608401526080830152151560a082015260c00161015b565b61027661034936600461149a565b63f23a6e6160e01b95945050505050565b6101776103683660046111e9565b611011565b6003546101ef906001600160a01b031681565b60006001600160e01b03198216630271189760e51b14806103b157506301ffc9a760e01b6001600160e01b03198316145b92915050565b6103bf611087565b60075481106104085760405162461bcd60e51b815260206004820152601060248201526f125108191bd95cdb89dd08195e1a5cdd60821b60448201526064015b60405180910390fd5b6000818152600660205260409020600581015460ff166104625760405162461bcd60e51b81526020600482015260156024820152744c697374696e67206973206e6f742061637469766560581b60448201526064016103ff565b6000606460045483600401546104789190611519565b6104829190611530565b6003546001840154600480860154604051632142170760e11b815233928101929092526001600160a01b039283166024830152604482015292935016906342842e0e906064016020604051808303816000875af11580156104e7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061050b9190611552565b5060035460405163423f6cef60e01b8152306004820152602481018390526001600160a01b039091169063423f6cef906044016020604051808303816000875af115801561055d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105819190611552565b5080600560008282546105949190611574565b909155505060028054908301546003840154604051637f4c824d60e11b81526001600160a01b039093169263fe99049a926105d792309233929190600401611587565b600060405180830381600087803b1580156105f157600080fd5b505af1158015610605573d6000803e3d6000fd5b5050505060058201805460ff19169055600182015460028301546003840154600485015460408051938452602084019290925282820152608060608301819052600990830152681c1d5c98da185cd95960ba1b60a0830152516001600160a01b0390921691339186917f0a06a6f449435029a2c06dbea66356ac3f4f0584a73ff7f22ef368c144a012a79181900360c00190a450506106a360018055565b50565b6106ae6110e0565b600380546001600160a01b0319166001600160a01b0383169081179091556040517f6eee81a43bf9442f55a05941b6e18df1a7bcf02125d1e7b93ba7342aa72ef20e90600090a250565b610700611087565b60075481106107465760405162461bcd60e51b8152602060048201526012602482015271125b9d985b1a59081b1a5cdd1a5b99c8125160721b60448201526064016103ff565b600081815260066020526040902060018101546001600160a01b031633146107bf5760405162461bcd60e51b815260206004820152602660248201527f4f6e6c79207468652073656c6c65722063616e2063616e63656c20746865206c604482015265697374696e6760d01b60648201526084016103ff565b600581015460ff1661080b5760405162461bcd60e51b81526020600482015260156024820152744c697374696e67206973206e6f742061637469766560581b60448201526064016103ff565b60028054908201546003830154604051637f4c824d60e11b81526001600160a01b039093169263fe99049a9261084992309233929190600401611587565b600060405180830381600087803b15801561086357600080fd5b505af1158015610877573d6000803e3d6000fd5b50505060058201805460ff1916905550600281015460038201546004830154604051339286927f6d0ecfb1e9c08e774b62b396633297074ab554950a2f8ece9cd32392582c39a0926108f492919091825260208201526060604082018190526009908201526818d85b98d95b1b195960ba1b608082015260a00190565b60405180910390a4506106a360018055565b61090e6110e0565b60025460405163a22cb46560e01b81526001600160a01b038381166004830152600160248301529091169063a22cb465906044015b600060405180830381600087803b15801561095d57600080fd5b505af1158015610971573d6000803e3d6000fd5b5050505050565b6109806110e0565b61098a600061113a565b565b60606000805b6007548110156109d65760008181526006602052604090206005015460ff16156109c457816109c0816115b0565b9250505b806109ce816115b0565b915050610992565b508067ffffffffffffffff8111156109f0576109f06112b5565b604051908082528060200260200182016040528015610a6557816020015b610a526040518060c001604052806000815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000151581525090565b815260200190600190039081610a0e5790505b5091506000805b600754811015610b335760008181526006602052604090206005015460ff1615610b2157600081815260066020908152604091829020825160c0810184528154815260018201546001600160a01b031692810192909252600281015492820192909252600382015460608201526004820154608082015260059091015460ff16151560a08201528451859084908110610b0757610b076115c9565b60200260200101819052508180610b1d906115b0565b9250505b80610b2b816115b0565b915050610a6c565b50505090565b610b416110e0565b6064811115610b925760405162461bcd60e51b815260206004820152601d60248201527f496e76616c696420636f6d6d697373696f6e2070657263656e7461676500000060448201526064016103ff565b60048190556040518181527f7e3665a83046ac3c4ec146cf309edab9d75086c48761909ce868f5c65743f4f19060200160405180910390a150565b610bd56110e0565b600280546001600160a01b0319166001600160a01b0383169081179091556040517ff2610996d245d9b77e4ff84c2174eea0b76fb44c422218404f66e28816d78fb990600090a250565b610c27611087565b6002546040516331a9108f60e11b81526004810185905233916001600160a01b031690636352211e90602401602060405180830381865afa158015610c70573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c9491906115df565b6001600160a01b031614610cea5760405162461bcd60e51b815260206004820152601860248201527f596f7520646f6e2774206f776e207468697320746f6b656e000000000000000060448201526064016103ff565b600254604051627eeac760e11b81523360048201526024810185905283916001600160a01b03169062fdd58e90604401602060405180830381865afa158015610d37573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d5b91906115fc565b1015610da05760405162461bcd60e51b8152602060048201526014602482015273496e73756666696369656e742062616c616e636560601b60448201526064016103ff565b6000606460045483610db29190611519565b610dbc9190611530565b600354604051632142170760e11b8152336004820152306024820152604481018390529192506001600160a01b0316906342842e0e906064016020604051808303816000875af1158015610e14573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e389190611552565b50600254604051637f4c824d60e11b81526001600160a01b039091169063fe99049a90610e6f903390309089908990600401611587565b600060405180830381600087803b158015610e8957600080fd5b505af1158015610e9d573d6000803e3d6000fd5b505050508060056000828254610eb39190611574565b90915550506040805160c081018252600780548083523360208085018281528587018b815260608088018c81526080808a018d8152600160a0808d0182815260009b8c526006808b529b8f90209d518e559751918d0180546001600160a01b0319166001600160a01b0390931692909217909155945160028c0155915160038b0155905160048a015592516005909801805460ff191698151598909817909755945487518b81529283018a905296820186905294810192909252651b1a5cdd195960d21b938201939093528793917f17e0f11c4bcec098f0fa71675a26636c8b4d923dfc6b337aff247d171ddb1df5910160405180910390a460078054906000610fbc836115b0565b919050555050610fcb60018055565b505050565b610fd86110e0565b60025460405163a22cb46560e01b81526001600160a01b038381166004830152600060248301529091169063a22cb46590604401610943565b6110196110e0565b6001600160a01b03811661107e5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016103ff565b6106a38161113a565b6002600154036110d95760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016103ff565b6002600155565b6000546001600160a01b0316331461098a5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016103ff565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006020828403121561119c57600080fd5b81356001600160e01b0319811681146111b457600080fd5b9392505050565b6000602082840312156111cd57600080fd5b5035919050565b6001600160a01b03811681146106a357600080fd5b6000602082840312156111fb57600080fd5b81356111b4816111d4565b602080825282518282018190526000919060409081850190868401855b8281101561127c57815180518552868101516001600160a01b0316878601528581015186860152606080820151908601526080808201519086015260a09081015115159085015260c09093019290850190600101611223565b5091979650505050505050565b60008060006060848603121561129e57600080fd5b505081359360208301359350604090920135919050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff811182821017156112f4576112f46112b5565b604052919050565b600082601f83011261130d57600080fd5b8135602067ffffffffffffffff821115611329576113296112b5565b8160051b6113388282016112cb565b928352848101820192828101908785111561135257600080fd5b83870192505b8483101561137157823582529183019190830190611358565b979650505050505050565b600082601f83011261138d57600080fd5b813567ffffffffffffffff8111156113a7576113a76112b5565b6113ba601f8201601f19166020016112cb565b8181528460208386010111156113cf57600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080600060a0868803121561140457600080fd5b853561140f816111d4565b9450602086013561141f816111d4565b9350604086013567ffffffffffffffff8082111561143c57600080fd5b61144889838a016112fc565b9450606088013591508082111561145e57600080fd5b61146a89838a016112fc565b9350608088013591508082111561148057600080fd5b5061148d8882890161137c565b9150509295509295909350565b600080600080600060a086880312156114b257600080fd5b85356114bd816111d4565b945060208601356114cd816111d4565b93506040860135925060608601359150608086013567ffffffffffffffff8111156114f757600080fd5b61148d8882890161137c565b634e487b7160e01b600052601160045260246000fd5b80820281158282048414176103b1576103b1611503565b60008261154d57634e487b7160e01b600052601260045260246000fd5b500490565b60006020828403121561156457600080fd5b815180151581146111b457600080fd5b808201808211156103b1576103b1611503565b6001600160a01b0394851681529290931660208301526040820152606081019190915260800190565b6000600182016115c2576115c2611503565b5060010190565b634e487b7160e01b600052603260045260246000fd5b6000602082840312156115f157600080fd5b81516111b4816111d4565b60006020828403121561160e57600080fd5b505191905056fea2646970667358221220bbc438dd2eace247464eebf8110e8b0f964952e5bfe712076354486cdf06553b64736f6c63430008150033";

export class NFTMarketplace__factory extends ContractFactory {
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
    _siliquaCoinAddress: string,
    _nftContractAddress: string,
    _commissionPercentage: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NFTMarketplace> {
    return super.deploy(
      _siliquaCoinAddress,
      _nftContractAddress,
      _commissionPercentage,
      overrides || {}
    ) as Promise<NFTMarketplace>;
  }
  getDeployTransaction(
    _siliquaCoinAddress: string,
    _nftContractAddress: string,
    _commissionPercentage: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _siliquaCoinAddress,
      _nftContractAddress,
      _commissionPercentage,
      overrides || {}
    );
  }
  attach(address: string): NFTMarketplace {
    return super.attach(address) as NFTMarketplace;
  }
  connect(signer: Signer): NFTMarketplace__factory {
    return super.connect(signer) as NFTMarketplace__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NFTMarketplaceInterface {
    return new utils.Interface(_abi) as NFTMarketplaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NFTMarketplace {
    return new Contract(address, _abi, signerOrProvider) as NFTMarketplace;
  }
}