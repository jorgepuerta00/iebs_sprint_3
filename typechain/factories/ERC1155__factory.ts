/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC1155, ERC1155Interface } from "../ERC1155";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "uri_",
        type: "string",
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
        name: "account",
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
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
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
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
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
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
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
        name: "id",
        type: "uint256",
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
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
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
        internalType: "address",
        name: "account",
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
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
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
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
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
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200162b3803806200162b83398101604081905262000034916200006e565b6200003f8162000046565b506200029e565b6002620000548282620001d2565b5050565b634e487b7160e01b600052604160045260246000fd5b600060208083850312156200008257600080fd5b82516001600160401b03808211156200009a57600080fd5b818501915085601f830112620000af57600080fd5b815181811115620000c457620000c462000058565b604051601f8201601f19908116603f01168101908382118183101715620000ef57620000ef62000058565b8160405282815288868487010111156200010857600080fd5b600093505b828410156200012c57848401860151818501870152928501926200010d565b600086848301015280965050505050505092915050565b600181811c908216806200015857607f821691505b6020821081036200017957634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620001cd57600081815260208120601f850160051c81016020861015620001a85750805b601f850160051c820191505b81811015620001c957828155600101620001b4565b5050505b505050565b81516001600160401b03811115620001ee57620001ee62000058565b6200020681620001ff845462000143565b846200017f565b602080601f8311600181146200023e5760008415620002255750858301515b600019600386901b1c1916600185901b178555620001c9565b600085815260208120601f198616915b828110156200026f578886015182559484019460019091019084016200024e565b50858210156200028e5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b61137d80620002ae6000396000f3fe608060405234801561001057600080fd5b50600436106100875760003560e01c80634e1273f41161005b5780634e1273f41461010a578063a22cb4651461012a578063e985e9c51461013d578063f242432a1461017957600080fd5b8062fdd58e1461008c57806301ffc9a7146100b25780630e89341c146100d55780632eb2c2d6146100f5575b600080fd5b61009f61009a366004610b40565b61018c565b6040519081526020015b60405180910390f35b6100c56100c0366004610b83565b610225565b60405190151581526020016100a9565b6100e86100e3366004610ba7565b610275565b6040516100a99190610c06565b610108610103366004610d65565b610309565b005b61011d610118366004610e0f565b610355565b6040516100a99190610f15565b610108610138366004610f28565b61047f565b6100c561014b366004610f64565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205460ff1690565b610108610187366004610f97565b61048e565b60006001600160a01b0383166101fc5760405162461bcd60e51b815260206004820152602a60248201527f455243313135353a2061646472657373207a65726f206973206e6f742061207660448201526930b634b21037bbb732b960b11b60648201526084015b60405180910390fd5b506000818152602081815260408083206001600160a01b03861684529091529020545b92915050565b60006001600160e01b03198216636cdb3d1360e11b148061025657506001600160e01b031982166303a24d0760e21b145b8061021f57506301ffc9a760e01b6001600160e01b031983161461021f565b60606002805461028490610ffc565b80601f01602080910402602001604051908101604052809291908181526020018280546102b090610ffc565b80156102fd5780601f106102d2576101008083540402835291602001916102fd565b820191906000526020600020905b8154815290600101906020018083116102e057829003601f168201915b50505050509050919050565b6001600160a01b0385163314806103255750610325853361014b565b6103415760405162461bcd60e51b81526004016101f390611036565b61034e85858585856104d3565b5050505050565b606081518351146103ba5760405162461bcd60e51b815260206004820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e677468604482015268040dad2e6dac2e8c6d60bb1b60648201526084016101f3565b6000835167ffffffffffffffff8111156103d6576103d6610c19565b6040519080825280602002602001820160405280156103ff578160200160208202803683370190505b50905060005b84518110156104775761044a85828151811061042357610423611084565b602002602001015185838151811061043d5761043d611084565b602002602001015161018c565b82828151811061045c5761045c611084565b6020908102919091010152610470816110b0565b9050610405565b509392505050565b61048a3383836106b0565b5050565b6001600160a01b0385163314806104aa57506104aa853361014b565b6104c65760405162461bcd60e51b81526004016101f390611036565b61034e8585858585610790565b81518351146105355760405162461bcd60e51b815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e677468206044820152670dad2e6dac2e8c6d60c31b60648201526084016101f3565b6001600160a01b03841661055b5760405162461bcd60e51b81526004016101f3906110c9565b3360005b845181101561064257600085828151811061057c5761057c611084565b60200260200101519050600085838151811061059a5761059a611084565b602090810291909101810151600084815280835260408082206001600160a01b038e1683529093529190912054909150818110156105ea5760405162461bcd60e51b81526004016101f39061110e565b6000838152602081815260408083206001600160a01b038e8116855292528083208585039055908b16825281208054849290610627908490611158565b925050819055505050508061063b906110b0565b905061055f565b50846001600160a01b0316866001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb878760405161069292919061116b565b60405180910390a46106a88187878787876108ba565b505050505050565b816001600160a01b0316836001600160a01b0316036107235760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2073657474696e6720617070726f76616c20737461747573604482015268103337b91039b2b63360b91b60648201526084016101f3565b6001600160a01b03838116600081815260016020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b0384166107b65760405162461bcd60e51b81526004016101f3906110c9565b3360006107c285610a1e565b905060006107cf85610a1e565b90506000868152602081815260408083206001600160a01b038c168452909152902054858110156108125760405162461bcd60e51b81526004016101f39061110e565b6000878152602081815260408083206001600160a01b038d8116855292528083208985039055908a1682528120805488929061084f908490611158565b909155505060408051888152602081018890526001600160a01b03808b16928c821692918816917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a46108af848a8a8a8a8a610a69565b505050505050505050565b6001600160a01b0384163b156106a85760405163bc197c8160e01b81526001600160a01b0385169063bc197c81906108fe9089908990889088908890600401611199565b6020604051808303816000875af1925050508015610939575060408051601f3d908101601f19168201909252610936918101906111f7565b60015b6109e557610945611214565b806308c379a00361097e5750610959611230565b806109645750610980565b8060405162461bcd60e51b81526004016101f39190610c06565b505b60405162461bcd60e51b815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e2d455243313135356044820152732932b1b2b4bb32b91034b6b83632b6b2b73a32b960611b60648201526084016101f3565b6001600160e01b0319811663bc197c8160e01b14610a155760405162461bcd60e51b81526004016101f3906112ba565b50505050505050565b60408051600180825281830190925260609160009190602080830190803683370190505090508281600081518110610a5857610a58611084565b602090810291909101015292915050565b6001600160a01b0384163b156106a85760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e6190610aad9089908990889088908890600401611302565b6020604051808303816000875af1925050508015610ae8575060408051601f3d908101601f19168201909252610ae5918101906111f7565b60015b610af457610945611214565b6001600160e01b0319811663f23a6e6160e01b14610a155760405162461bcd60e51b81526004016101f3906112ba565b80356001600160a01b0381168114610b3b57600080fd5b919050565b60008060408385031215610b5357600080fd5b610b5c83610b24565b946020939093013593505050565b6001600160e01b031981168114610b8057600080fd5b50565b600060208284031215610b9557600080fd5b8135610ba081610b6a565b9392505050565b600060208284031215610bb957600080fd5b5035919050565b6000815180845260005b81811015610be657602081850181015186830182015201610bca565b506000602082860101526020601f19601f83011685010191505092915050565b602081526000610ba06020830184610bc0565b634e487b7160e01b600052604160045260246000fd5b601f8201601f1916810167ffffffffffffffff81118282101715610c5557610c55610c19565b6040525050565b600067ffffffffffffffff821115610c7657610c76610c19565b5060051b60200190565b600082601f830112610c9157600080fd5b81356020610c9e82610c5c565b604051610cab8282610c2f565b83815260059390931b8501820192828101915086841115610ccb57600080fd5b8286015b84811015610ce65780358352918301918301610ccf565b509695505050505050565b600082601f830112610d0257600080fd5b813567ffffffffffffffff811115610d1c57610d1c610c19565b604051610d33601f8301601f191660200182610c2f565b818152846020838601011115610d4857600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080600060a08688031215610d7d57600080fd5b610d8686610b24565b9450610d9460208701610b24565b9350604086013567ffffffffffffffff80821115610db157600080fd5b610dbd89838a01610c80565b94506060880135915080821115610dd357600080fd5b610ddf89838a01610c80565b93506080880135915080821115610df557600080fd5b50610e0288828901610cf1565b9150509295509295909350565b60008060408385031215610e2257600080fd5b823567ffffffffffffffff80821115610e3a57600080fd5b818501915085601f830112610e4e57600080fd5b81356020610e5b82610c5c565b604051610e688282610c2f565b83815260059390931b8501820192828101915089841115610e8857600080fd5b948201945b83861015610ead57610e9e86610b24565b82529482019490820190610e8d565b96505086013592505080821115610ec357600080fd5b50610ed085828601610c80565b9150509250929050565b600081518084526020808501945080840160005b83811015610f0a57815187529582019590820190600101610eee565b509495945050505050565b602081526000610ba06020830184610eda565b60008060408385031215610f3b57600080fd5b610f4483610b24565b915060208301358015158114610f5957600080fd5b809150509250929050565b60008060408385031215610f7757600080fd5b610f8083610b24565b9150610f8e60208401610b24565b90509250929050565b600080600080600060a08688031215610faf57600080fd5b610fb886610b24565b9450610fc660208701610b24565b93506040860135925060608601359150608086013567ffffffffffffffff811115610ff057600080fd5b610e0288828901610cf1565b600181811c9082168061101057607f821691505b60208210810361103057634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602e908201527f455243313135353a2063616c6c6572206973206e6f7420746f6b656e206f776e60408201526d195c881bdc88185c1c1c9bdd995960921b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600182016110c2576110c261109a565b5060010190565b60208082526025908201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604082015264647265737360d81b606082015260800190565b6020808252602a908201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60408201526939103a3930b739b332b960b11b606082015260800190565b8082018082111561021f5761021f61109a565b60408152600061117e6040830185610eda565b82810360208401526111908185610eda565b95945050505050565b6001600160a01b0386811682528516602082015260a0604082018190526000906111c590830186610eda565b82810360608401526111d78186610eda565b905082810360808401526111eb8185610bc0565b98975050505050505050565b60006020828403121561120957600080fd5b8151610ba081610b6a565b600060033d111561122d5760046000803e5060005160e01c5b90565b600060443d101561123e5790565b6040516003193d81016004833e81513d67ffffffffffffffff816024840111818411171561126e57505050505090565b82850191508151818111156112865750505050505090565b843d87010160208285010111156112a05750505050505090565b6112af60208286010187610c2f565b509095945050505050565b60208082526028908201527f455243313135353a204552433131353552656365697665722072656a656374656040820152676420746f6b656e7360c01b606082015260800190565b6001600160a01b03868116825285166020820152604081018490526060810183905260a06080820181905260009061133c90830184610bc0565b97965050505050505056fea2646970667358221220a546689916c01c5ab28c1c847462ad7df4f863f098e0307df615f6972d4141a264736f6c63430008150033";

export class ERC1155__factory extends ContractFactory {
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
    uri_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC1155> {
    return super.deploy(uri_, overrides || {}) as Promise<ERC1155>;
  }
  getDeployTransaction(
    uri_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(uri_, overrides || {});
  }
  attach(address: string): ERC1155 {
    return super.attach(address) as ERC1155;
  }
  connect(signer: Signer): ERC1155__factory {
    return super.connect(signer) as ERC1155__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1155Interface {
    return new utils.Interface(_abi) as ERC1155Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155 {
    return new Contract(address, _abi, signerOrProvider) as ERC1155;
  }
}
