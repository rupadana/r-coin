const { ethers } = require("hardhat");

async function main() {
    const Token = await ethers.getContractFactory('Token');
    console.log('Deploying Token...');
    const tkn = await Token.deploy();
    await tkn.deployed();
    console.log('Token deployed to:', tkn.address);


}


main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });