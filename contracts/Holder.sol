// contracts/Holder.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC1155/IERC1155.sol';
import "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Holder is ERC1155Holder, Ownable {

    IERC1155 private _IERC1155;
    
    constructor(IERC1155 ERC1155Address) {
        _IERC1155 = ERC1155Address;
    }
    
    function transferItems(uint256 _itemId, uint256 _amount) external {
        require(_IERC1155.balanceOf(address(this), _itemId) >= _amount);
        _IERC1155.safeTransferFrom(address(this), msg.sender, _itemId, _amount, "");
    }

}