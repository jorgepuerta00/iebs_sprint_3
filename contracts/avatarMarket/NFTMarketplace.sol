// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "./../AvatarNFT.sol";
import "./../SiliquaCoin.sol";

contract AvatarMarketplace is
  Ownable,
  ReentrancyGuard,
  ERC1155Holder,
  Pausable
{
  AvatarNFT public nftToken;
  ISiliquaCoin public token;
  uint256 public commissionPercentage;
  uint256 public totalCommissionEarned;

  struct Listing {
    uint256 listingId;
    address seller;
    uint256 tokenId;
    uint256 price;
    bool isActive;
  }

  mapping(uint256 => Listing) public listings;
  uint256 public listingId = 0;

  event NFTListed(
    uint256 indexed listingId,
    address indexed seller,
    uint256 indexed tokenId,
    uint256 price,
    string status
  );

  event NFTPurchased(
    uint256 indexed listingId,
    address indexed buyer,
    address indexed seller,
    uint256 tokenId,
    uint256 price,
    string status
  );

  event NFTListingCancelled(
    uint256 indexed listingId,
    address indexed seller,
    uint256 indexed tokenId,
    uint256 price,
    string status
  );

  event NFTContractUpdated(address indexed newNFTContractAddress);
  event SiliquaCoinUpdated(address indexed newSiliquaCoinAddress);
  event CommissionPercentageUpdated(uint256 newCommissionPercentage);

  constructor(
    address _siliquaCoinAddress,
    address _nftContractAddress,
    uint256 _commissionPercentage
  ) {
    nftToken = AvatarNFT(_nftContractAddress);
    token = ISiliquaCoin(_siliquaCoinAddress);
    commissionPercentage = _commissionPercentage;
  }

  function listNFT(
    uint256 _tokenId,
    uint256 _price
  ) external nonReentrant whenNotPaused {
    require(nftToken.ownerOf(_tokenId) == msg.sender, "Only owner can sell");

    // Transfer the NFT tokens to the contract
    nftToken.transferFrom(msg.sender, address(this), _tokenId);

    // Create a new listing
    listings[listingId] = Listing(
      listingId,
      msg.sender,
      _tokenId,
      _price,
      true
    );

    emit NFTListed(listingId, msg.sender, _tokenId, _price, "listed");
    listingId++;
  }

  function cancelListing(
    uint256 _listingId
  ) external nonReentrant whenNotPaused {
    require(_listingId < listingId, "Invalid listing ID");
    Listing storage listing = listings[_listingId];
    require(
      msg.sender == listing.seller,
      "Only the seller can cancel the listing"
    );
    require(listing.isActive, "Listing is not active");

    // Transfer the NFT tokens back to the seller
    nftToken.transferFrom(address(this), msg.sender, listing.tokenId);

    // Deactivate the listing
    listing.isActive = false;

    // Emit an event indicating the cancellation of the listing
    emit NFTListingCancelled(
      _listingId,
      msg.sender,
      listing.tokenId,
      listing.price,
      "cancelled"
    );
  }

  function purchaseNFT(
    uint256 _listingId
  ) external payable nonReentrant whenNotPaused {
    require(_listingId < listingId, "ID doesn't exist");
    Listing storage listing = listings[_listingId];
    require(listing.isActive, "Listing is not active");
    require(msg.value == listing.price, "Incorrect price");

    // Calculate commission amount
    uint256 feeAmount = (listing.price * commissionPercentage) / 100;
    totalCommissionEarned += feeAmount;

    // Transfer commission from the sale price
    payable(owner()).transfer(feeAmount);

    // Transfer the remaining amount to the seller
    uint256 sellerAmount = listing.price - feeAmount;
    payable(listing.seller).transfer(sellerAmount);

    // Transfer the NFT to the buyer
    nftToken.safeTransferFrom(address(this), msg.sender, listing.tokenId);

    // Send 1 SiliquaCoin as a reward to the buyer
    token.safeTransfer(msg.sender, 1e18); // 1 SiliquaCoin

    // Send 1 SiliquaCoin as a reward to the seller
    token.safeTransfer(listing.seller, 1e18); // 1 SiliquaCoin

    // Update the listing as inactive
    listing.isActive = false;
    emit NFTPurchased(
      _listingId,
      msg.sender,
      listing.seller,
      listing.tokenId,
      msg.value,
      "purchased"
    );
  }

  function getActiveListings()
    external
    view
    whenNotPaused
    returns (Listing[] memory activeListings)
  {
    uint256 activeListingCount = 0;
    for (uint256 i = 0; i < listingId; i++) {
      if (listings[i].isActive) {
        activeListingCount++;
      }
    }

    activeListings = new Listing[](activeListingCount);
    uint256 currentIndex = 0;
    for (uint256 i = 0; i < listingId; i++) {
      if (listings[i].isActive) {
        activeListings[currentIndex] = listings[i];
        currentIndex++;
      }
    }

    return activeListings;
  }

  function setNFTContract(
    address _nftContractAddress
  ) external onlyOwner whenNotPaused {
    nftToken = AvatarNFT(_nftContractAddress);
    emit NFTContractUpdated(_nftContractAddress);
  }

  function setSiliquaCoin(
    address _siliquaCoinAddress
  ) external onlyOwner whenNotPaused {
    token = ISiliquaCoin(_siliquaCoinAddress);
    emit SiliquaCoinUpdated(_siliquaCoinAddress);
  }

  function updateCommissionPercentage(
    uint256 _newCommissionPercentage
  ) external onlyOwner whenNotPaused {
    // Ensure the commission percentage is within a valid range
    require(_newCommissionPercentage <= 100, "Invalid commission percentage");
    commissionPercentage = _newCommissionPercentage;
    emit CommissionPercentageUpdated(_newCommissionPercentage);
  }

  function pause() public onlyOwner {
    _pause();
  }

  function unpause() public onlyOwner {
    _unpause();
  }
}