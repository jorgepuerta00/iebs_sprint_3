// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Receiver.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract GoTLandsNFT is ERC1155, Ownable {
  string public collectionName;
  mapping(uint256 => address) private _tokenOwners;

  uint256 public constant WESTEROS = 0;
  uint256 public constant THE_NORTH = 1;
  uint256 public constant THE_VALE = 2;
  uint256 public constant THE_IRON_ISLANDS = 3;
  uint256 public constant THE_RIVERLANDS = 4;
  uint256 public constant THE_WESTERLANDS = 5;
  uint256 public constant THE_STORMLANDS = 6;
  uint256 public constant THE_REACH = 7;
  uint256 public constant KINGS_LANDING = 8;

  constructor(
    string memory _collectionName
  ) ERC1155("https://westeros.example/api/land/{id}.json") {
    collectionName = _collectionName;

    _mint(msg.sender, WESTEROS, 1, "");
    _mint(msg.sender, THE_NORTH, 5000, "");
    _mint(msg.sender, THE_VALE, 20000, "");
    _mint(msg.sender, THE_IRON_ISLANDS, 50000, "");
    _mint(msg.sender, THE_RIVERLANDS, 80000, "");
    _mint(msg.sender, THE_WESTERLANDS, 2000, "");
    _mint(msg.sender, THE_STORMLANDS, 30000, "");
    _mint(msg.sender, THE_REACH, 3000, "");
    _mint(msg.sender, KINGS_LANDING, 10, "");
  }

  // get the owner of a token
  function ownerOf(uint256 id) public view returns (address) {
    return _tokenOwners[id];
  }

  // mint tokens to an address (only callable by the owner)
  function mint(address account, uint256 id, uint256 amount) public onlyOwner {
    _mint(account, id, amount, "");
    _tokenOwners[id] = account;
  }

  // mintbatch tokens to an address (only callable by the owner)
  function mintBatch(
    address to,
    uint256[] memory ids,
    uint256[] memory amounts
  ) public onlyOwner {
    _mintBatch(to, ids, amounts, "");
  }

  // set the URI for all token types
  function setURI(string memory newURI) external onlyOwner {
    _setURI(newURI);
  }

  // safe transfer tokens
  function transferFrom(
    address from,
    address to,
    uint256 id,
    uint256 amount
  ) public virtual {
    safeTransferFrom(from, to, id, amount, "");
  }

  // safe batch transfer tokens
  function batchTransferFrom(
    address from,
    address to,
    uint256[] memory ids,
    uint256[] memory amount
  ) public virtual {
    safeBatchTransferFrom(from, to, ids, amount, "");
  }
}