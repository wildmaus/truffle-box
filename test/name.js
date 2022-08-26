const { BN, constants, expectEvent, expectRevert, time, snapshot, balance } = require('@openzeppelin/test-helpers');
const { assert, expect } = require("chai");
const EthCrypto = require('eth-crypto');

const Token = artifacts.require("Token");

const DECIMALS = new BN(10).pow(new BN(18));
const TOTAL_SUPPLY = new BN("100000000000").mul(DECIMALS);
const DAY = 60 * 60 * 24;

contract("Name", async (accounts) => {
    let [owner, alice, bob] = accounts;
    let token, snapshotA, tx;

    before("deploy tokens", async () => {
        token = await Token.new(owner, TOTAL_SUPPLY);
        snapshotA = await snapshot();
    });

    beforeEach("return to snapshot", async () => {
        await snapshotA.restore();
    });

    it("", async () => {
    });

});
