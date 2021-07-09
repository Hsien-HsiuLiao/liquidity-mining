const UnderlyingToken = artifacts.require('UnderlyingToken.sol');
const GovernanceToken = artifacts.require('GovernanceToken.sol');
const LiquidityPool = artifacts.require('LiquidityPool.sol');

module.exports = async function (deployer) {
    await deployer.deploy(UnderlyingToken);
    await deployer.deploy(GovernanceToken);
    const underlyingToken = await UnderlyingToken.deployed();
    const governanceToken = await GovernanceToken.deployed();

    await deployer.deploy(LiquidityPool, underlyingToken.address, governanceToken.address);

  };
  