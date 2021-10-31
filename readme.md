### Buat Smart Contract
Installing hardhat
```
npm install -D hardhat
```

create empty hardhat config

```
npx hardhat
```
> change the solidity version in hardhat.config.js to solidity : 0.8

Installing the dependencies
```
npm install -D @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle ethereum-waffle chai
```

import the @nomiclabs/hardhat-waffle to the hardhat.config.js
```
require('@nomiclabs/hardhat-waffle')

module.exports = {
    ...
}
```

## Create Contracts
create the contract on contracts/Token.sol

## Compiling the Smart Contract
```
npx hardhat compile
```

## Running test
```
npx hardhat test
```


## Deploy Smart Contract
```
npx hardhat run scripts/deploy.js
```
> it will be deploy to localhost

```
npx hardhat run scripts/deploy.js --network testnet
```

> it will be deploy to testnet network