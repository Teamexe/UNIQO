# NFT Marketplace 

Welcome to the NFT Marketplace Project! This repository contains the smart contract code for the NFT marketplace deployed on the Sepholia test network, along with the client-side code using React and Bootstrap. The project utilizes Infura IPFS to store NFT metadata.

## Project Overview

The NFT Marketplace is a decentralized platform that allows users to buy, sell, and trade Non-Fungible Tokens (NFTs) in a secure and transparent manner. The platform is built on the Ethereum blockchain and utilizes Sepholia test network for testing and development purposes.

## Getting Started

To run the project on your local machine, follow the steps below:

1. Clone the repository:

```
git clone <repository-url>
cd repository_name
```

2. Install Dependencies:

```
npm install
```

3. Configure Infura IPFS:

To use Infura IPFS, you will need to create an account on Infura (https://infura.io/) and obtain an API key. Set up your Infura API key in the project to interact with IPFS for storing NFT metadata.

4. Deploy Smart Contract:

Before running the client-side application, you need to deploy the smart contract on the Sepholia test network. You can use tools like Remix or Truffle to deploy the contract.

5. Configure Client-Side:

In the client-side code, update the smart contract address and ABI in the `config.js` file to connect with the deployed contract on the Sepholia test network.



## Running the Client-Side Application

To start the client-side application, run the following command in the terminal:

```
npm start
```

This will launch the React application on your local server. Open your web browser and navigate to `http://localhost:3000/` to access the NFT Marketplace.

## Contribution Guidelines

We welcome contributions to the NFT Marketplace project! If you find any bugs or have suggestions for improvements, feel free to open an issue or submit a pull request.


## License

The NFT Marketplace project is open-source and distributed under the [MIT License](LICENSE).

