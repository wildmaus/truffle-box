// SPDX-License-Identifier: MIT

pragma solidity 0.8.16;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TestToken is ERC20 {
    constructor() ERC20("test", "TEST") {}

    function mint(address to, uint256 amount) external {
        _mint(to, amount);
    }
}