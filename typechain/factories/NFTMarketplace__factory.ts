/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
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
        name: "_siliquaCoin",
        type: "address",
      },
      {
        internalType: "address",
        name: "_artNFT",
        type: "address",
      },
      {
        internalType: "address",
        name: "_gotLandsNFT",
        type: "address",
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
        name: "price",
        type: "uint256",
      },
    ],
    name: "NFTSold",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approveArtNFT",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "approveGoTLandsNFT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "artNFT",
    outputs: [
      {
        internalType: "contract ArtNFT",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "artNFTPrice",
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
    name: "buyArtNFT",
    outputs: [],
    stateMutability: "nonpayable",
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
    ],
    name: "buyGoTLandsNFT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "gotLandsNFT",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "handlePayment",
    outputs: [],
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "price",
        type: "uint256",
      },
    ],
    name: "sellArtNFT",
    outputs: [],
    stateMutability: "nonpayable",
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
    ],
    name: "sellGoTLandsNFT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "siliquaCoin",
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
    name: "withdrawFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200148a3803806200148a8339810160408190526200003491620000ef565b6200003f3362000082565b600180546001600160a01b039485166001600160a01b03199182161790915560028054938516938216939093179092556003805491909316911617905562000139565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516001600160a01b0381168114620000ea57600080fd5b919050565b6000806000606084860312156200010557600080fd5b6200011084620000d2565b92506200012060208501620000d2565b91506200013060408501620000d2565b90509250925092565b61134180620001496000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c8063715018a611610097578063c6c0b01b11610066578063c6c0b01b146101ed578063cccb4b2614610200578063f2fde38b14610213578063faf39eae1461022657600080fd5b8063715018a6146101ae5780638da5cb5b146101b6578063a219b4b6146101c7578063a2ade52b146101da57600080fd5b80634f3aabf5116100d35780634f3aabf514610147578063586044781461015a57806365c550cb1461018857806368e202a61461019b57600080fd5b806324600fc3146100fa578063417670411461010457806344215b1a14610134575b600080fd5b610102610239565b005b600254610117906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b600154610117906001600160a01b031681565b6101026101553660046111b2565b610329565b61017a6101683660046111b2565b60046020526000908152604090205481565b60405190815260200161012b565b6101026101963660046111b2565b610435565b6101026101a93660046111cb565b6104fe565b6101026106ee565b6000546001600160a01b0316610117565b600354610117906001600160a01b031681565b6101026101e83660046111b2565b610702565b6101026101fb3660046111b2565b6107d0565b61010261020e3660046111cb565b610bdc565b610102610221366004611202565b610d5d565b6101026102343660046111cb565b610dd6565b610241611108565b6001546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a0823190602401602060405180830381865afa15801561028a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102ae9190611226565b60015460405163a9059cbb60e01b8152336004820152602481018390529192506001600160a01b03169063a9059cbb906044015b6020604051808303816000875af1158015610301573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610325919061123f565b5050565b610331611108565b6002546040516331a9108f60e11b81526004810183905230916001600160a01b031690636352211e90602401602060405180830381865afa15801561037a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061039e9190611261565b6001600160a01b0316146103cd5760405162461bcd60e51b81526004016103c49061127e565b60405180910390fd5b60025460405163095ea7b360e01b8152306004820152602481018390526001600160a01b039091169063095ea7b3906044015b600060405180830381600087803b15801561041a57600080fd5b505af115801561042e573d6000803e3d6000fd5b5050505050565b61043d611108565b6001546040516370a0823160e01b815230600482015282916001600160a01b0316906370a0823190602401602060405180830381865afa158015610485573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104a99190611226565b10156104c75760405162461bcd60e51b81526004016103c4906112a5565b60015460405163a9059cbb60e01b8152336004820152602481018390526001600160a01b039091169063a9059cbb906044016102e2565b600354604051627eeac760e11b81523360048201526024810184905282916001600160a01b03169062fdd58e90604401602060405180830381865afa15801561054b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061056f9190611226565b101561058d5760405162461bcd60e51b81526004016103c4906112a5565b600081116105ce5760405162461bcd60e51b815260206004820152600e60248201526d125b9d985b1a5908185b5bdd5b9d60921b60448201526064016103c4565b600354604051637921219560e11b81526001600160a01b039091169063f242432a906106049033903090879087906004016112d3565b600060405180830381600087803b15801561061e57600080fd5b505af1158015610632573d6000803e3d6000fd5b505060015460405163095ea7b360e01b8152306004820152602481018590526001600160a01b03909116925063095ea7b391506044016020604051808303816000875af1158015610687573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106ab919061123f565b506040805183815260208101839052339130917ff6ccc0cf89c21c54724ea6ef2ec01da8fe33a1cebe06607e160fd78483eba30291015b60405180910390a35050565b6106f6611108565b6107006000611162565b565b61070a611108565b600354604051627eeac760e11b8152306004820152602481018390526000916001600160a01b03169062fdd58e90604401602060405180830381865afa158015610758573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061077c9190611226565b116107995760405162461bcd60e51b81526004016103c49061127e565b60035460405163a22cb46560e01b8152336004820152600160248201526001600160a01b039091169063a22cb46590604401610400565b6002546040516331a9108f60e11b8152600481018390526000916001600160a01b031690636352211e90602401602060405180830381865afa15801561081a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061083e9190611261565b6001600160a01b0316036108645760405162461bcd60e51b81526004016103c49061127e565b6000818152600460205260409020546108b45760405162461bcd60e51b8152602060048201526012602482015271546f6b656e206e6f7420666f722073616c6560701b60448201526064016103c4565b6000818152600460208190526040918290205460015492516370a0823160e01b81523392810192909252916001600160a01b0316906370a0823190602401602060405180830381865afa15801561090f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109339190611226565b10156109515760405162461bcd60e51b81526004016103c4906112a5565b600081815260046020819052604091829020546001549251636eb1769f60e11b81523392810192909252306024830152916001600160a01b03169063dd62ed3e90604401602060405180830381865afa1580156109b2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109d69190611226565b1015610a1d5760405162461bcd60e51b8152602060048201526016602482015275496e73756666696369656e7420616c6c6f77616e636560501b60448201526064016103c4565b6002546040516331a9108f60e11b8152600481018390526000916001600160a01b031690636352211e90602401602060405180830381865afa158015610a67573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a8b9190611261565b6001546000848152600460208190526040918290205491516323b872dd60e01b815233918101919091526001600160a01b038085166024830152604482019290925292935016906323b872dd906064016020604051808303816000875af1158015610afa573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b1e919061123f565b50600254604051632142170760e11b81526001600160a01b03838116600483015233602483015260448201859052909116906342842e0e90606401600060405180830381600087803b158015610b7357600080fd5b505af1158015610b87573d6000803e3d6000fd5b505050600083815260046020908152604091829020548251868152918201526001600160a01b038416925033917ff6ccc0cf89c21c54724ea6ef2ec01da8fe33a1cebe06607e160fd78483eba30291016106e2565b6002546040516331a9108f60e11b81526004810184905233916001600160a01b031690636352211e90602401602060405180830381865afa158015610c25573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c499190611261565b6001600160a01b031614610c9f5760405162461bcd60e51b815260206004820152601860248201527f596f7520646f6e2774206f776e207468697320746f6b656e000000000000000060448201526064016103c4565b60008111610cdf5760405162461bcd60e51b815260206004820152600d60248201526c496e76616c696420707269636560981b60448201526064016103c4565b600082815260046020819052604091829020839055600254915163095ea7b360e01b81523091810191909152602481018490526001600160a01b039091169063095ea7b390604401600060405180830381600087803b158015610d4157600080fd5b505af1158015610d55573d6000803e3d6000fd5b505050505050565b610d65611108565b6001600160a01b038116610dca5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016103c4565b610dd381611162565b50565b600354604051627eeac760e11b81523060048201526024810184905282916001600160a01b03169062fdd58e90604401602060405180830381865afa158015610e23573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e479190611226565b1015610e955760405162461bcd60e51b815260206004820152601760248201527f496e76616c696420746f6b656e206f7220616d6f756e7400000000000000000060448201526064016103c4565b6001546040516370a0823160e01b815233600482015282916001600160a01b0316906370a0823190602401602060405180830381865afa158015610edd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f019190611226565b1015610f1f5760405162461bcd60e51b81526004016103c4906112a5565b600154604051636eb1769f60e11b815233600482015230602482015282916001600160a01b03169063dd62ed3e90604401602060405180830381865afa158015610f6d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f919190611226565b1015610fd85760405162461bcd60e51b8152602060048201526016602482015275496e73756666696369656e7420616c6c6f77616e636560501b60448201526064016103c4565b6001546040516323b872dd60e01b8152336004820152306024820181905260448201849052916001600160a01b0316906323b872dd906064016020604051808303816000875af1158015611030573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611054919061123f565b50600354604051637921219560e11b81526001600160a01b039091169063f242432a9061108b9084903390889088906004016112d3565b600060405180830381600087803b1580156110a557600080fd5b505af11580156110b9573d6000803e3d6000fd5b505060408051868152602081018690526001600160a01b03851693503392507ff6ccc0cf89c21c54724ea6ef2ec01da8fe33a1cebe06607e160fd78483eba302910160405180910390a3505050565b6000546001600160a01b031633146107005760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016103c4565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156111c457600080fd5b5035919050565b600080604083850312156111de57600080fd5b50508035926020909101359150565b6001600160a01b0381168114610dd357600080fd5b60006020828403121561121457600080fd5b813561121f816111ed565b9392505050565b60006020828403121561123857600080fd5b5051919050565b60006020828403121561125157600080fd5b8151801515811461121f57600080fd5b60006020828403121561127357600080fd5b815161121f816111ed565b6020808252600d908201526c24b73b30b634b2103a37b5b2b760991b604082015260600190565b602080825260149082015273496e73756666696369656e742062616c616e636560601b604082015260600190565b6001600160a01b0394851681529290931660208301526040820152606081019190915260a06080820181905260009082015260c0019056fea2646970667358221220dcb636c972da730711306ecf10a4efc6494402b0307205955d072c63b4acc92164736f6c63430008150033";

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
    _siliquaCoin: string,
    _artNFT: string,
    _gotLandsNFT: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NFTMarketplace> {
    return super.deploy(
      _siliquaCoin,
      _artNFT,
      _gotLandsNFT,
      overrides || {}
    ) as Promise<NFTMarketplace>;
  }
  getDeployTransaction(
    _siliquaCoin: string,
    _artNFT: string,
    _gotLandsNFT: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _siliquaCoin,
      _artNFT,
      _gotLandsNFT,
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
