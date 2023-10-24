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
import type { LoanPlatform, LoanPlatformInterface } from "../LoanPlatform";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_interestRate",
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
        name: "borrower",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "loanId",
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
        name: "totalAmount",
        type: "uint256",
      },
    ],
    name: "LoanCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "borrower",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "loanId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "repaidAmount",
        type: "uint256",
      },
    ],
    name: "LoanRepaid",
    type: "event",
  },
  {
    inputs: [],
    name: "interestRate",
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
        name: "",
        type: "address",
      },
    ],
    name: "loans",
    outputs: [
      {
        internalType: "uint256",
        name: "loanId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "borrower",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "interest",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "repaidAmount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "active",
        type: "bool",
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
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "repayLoan",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "requestLoan",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newInterestRate",
        type: "uint256",
      },
    ],
    name: "setInterestRate",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "totalLoans",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610b09380380610b0983398101604081905261002f91610064565b600080546001600160a01b039093166001600160a01b031993841617815560018054909316331790925560025560035561009e565b6000806040838503121561007757600080fd5b82516001600160a01b038116811461008e57600080fd5b6020939093015192949293505050565b610a5c806100ad6000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80638da5cb5b1161005b5780638da5cb5b14610168578063ab7b1c8914610193578063cc952b57146101a6578063fc0c546a146101af57600080fd5b80635f84f3021461008d57806373b4086b146100a25780637c3a00fd1461013e5780638d5d342914610155575b600080fd5b6100a061009b3660046108cd565b6101c2565b005b6100fa6100b03660046108e6565b6004602081905260009182526040909120805460018201546002830154600384015494840154600585015460069095015493956001600160a01b0390931694919390919060ff1687565b604080519788526001600160a01b039096166020880152948601939093526060850191909152608084015260a0830152151560c082015260e0015b60405180910390f35b61014760025481565b604051908152602001610135565b6100a06101633660046108cd565b610234565b60015461017b906001600160a01b031681565b6040516001600160a01b039091168152602001610135565b6100a06101a13660046108cd565b61041a565b61014760035481565b60005461017b906001600160a01b031681565b6001546001600160a01b0316331461022f5760405162461bcd60e51b815260206004820152602560248201527f4f6e6c7920746865206f776e65722063616e2063616c6c20746869732066756e60448201526431ba34b7b760d91b60648201526084015b60405180910390fd5b600255565b3360009081526004602052604090206006015460ff161561028c5760405162461bcd60e51b8152602060048201526012602482015271416374697665206c6f616e2065786973747360701b6044820152606401610226565b600060646002548361029e919061092c565b6102a89190610949565b905060006102b6828461096b565b6001546000549192506102d7916001600160a01b0390811691163386610603565b6040516bffffffffffffffffffffffff193360601b1660208201524260348201526054810184905260009060740160408051808303601f19018152828252805160209182012060e084018352808452338285018181528585018a8152606087018a8152608088018a8152600060a08a01818152600160c08c018181529783526004998a90529982209a518b5594518a8a0180546001600160a01b0319166001600160a01b03909216919091179055925160028a015590516003808a01919091559051958801959095559051600587015590516006909501805460ff1916951515959095179094558154909450919290916103d290849061096b565b90915550506040805185815260208101849052829133917f1804eb76dc9809be7ef188388aa1aeb765881fd848377be891234e5c584345fe910160405180910390a350505050565b3360009081526004602052604090206006015460ff1661046d5760405162461bcd60e51b815260206004820152600e60248201526d27379030b1ba34bb32903637b0b760911b6044820152606401610226565b33600090815260046020819052604090912001548111156104d05760405162461bcd60e51b815260206004820152601860248201527f496e76616c69642072657061796d656e7420616d6f756e7400000000000000006044820152606401610226565b6001546000546104ef916001600160a01b039182169133911684610603565b336000908152600460205260409020600201541561052f57336000908152600460205260408120600201805483929061052990849061097e565b90915550505b336000908152600460205260408120600501805483929061055190849061096b565b9091555050336000908152600460208190526040822001805483929061057890849061097e565b9091555050336000908152600460208190526040822001549003610600573360009081526004602090815260409182902060068101805460ff19169055805460018201546005909201549351938452926001600160a01b03909116917fc7ce0a35f17b490de2a317e7fecb2cae86b1abffb03800b2f492823521382698910160405180910390a35b50565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b17905261065d908590610663565b50505050565b60006106b8826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661073d9092919063ffffffff16565b90508051600014806106d95750808060200190518101906106d99190610991565b6107385760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610226565b505050565b606061074c8484600085610754565b949350505050565b6060824710156107b55760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610226565b600080866001600160a01b031685876040516107d191906109d7565b60006040518083038185875af1925050503d806000811461080e576040519150601f19603f3d011682016040523d82523d6000602084013e610813565b606091505b50915091506108248783838761082f565b979650505050505050565b6060831561089e578251600003610897576001600160a01b0385163b6108975760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610226565b508161074c565b61074c83838151156108b35781518083602001fd5b8060405162461bcd60e51b815260040161022691906109f3565b6000602082840312156108df57600080fd5b5035919050565b6000602082840312156108f857600080fd5b81356001600160a01b038116811461090f57600080fd5b9392505050565b634e487b7160e01b600052601160045260246000fd5b808202811582820484141761094357610943610916565b92915050565b60008261096657634e487b7160e01b600052601260045260246000fd5b500490565b8082018082111561094357610943610916565b8181038181111561094357610943610916565b6000602082840312156109a357600080fd5b8151801515811461090f57600080fd5b60005b838110156109ce5781810151838201526020016109b6565b50506000910152565b600082516109e98184602087016109b3565b9190910192915050565b6020815260008251806020840152610a128160408501602087016109b3565b601f01601f1916919091016040019291505056fea2646970667358221220163e49486ebc22f33042c4ba251ef06d939b33295d4c2db193f96089284d996a64736f6c63430008150033";

export class LoanPlatform__factory extends ContractFactory {
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
    _tokenAddress: string,
    _interestRate: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LoanPlatform> {
    return super.deploy(
      _tokenAddress,
      _interestRate,
      overrides || {}
    ) as Promise<LoanPlatform>;
  }
  getDeployTransaction(
    _tokenAddress: string,
    _interestRate: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _tokenAddress,
      _interestRate,
      overrides || {}
    );
  }
  attach(address: string): LoanPlatform {
    return super.attach(address) as LoanPlatform;
  }
  connect(signer: Signer): LoanPlatform__factory {
    return super.connect(signer) as LoanPlatform__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LoanPlatformInterface {
    return new utils.Interface(_abi) as LoanPlatformInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LoanPlatform {
    return new Contract(address, _abi, signerOrProvider) as LoanPlatform;
  }
}
