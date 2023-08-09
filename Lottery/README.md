# Lottery

## Project Motivation

Lottery is a decentralized Ethereum smart contract-based application that allows players to participate in a lottery game. The application consists of both frontend (React) and backend (Solidity) components.

The Lottery smart contract keeps track of the addresses of players who want to participate in the lottery and the address of the manager who created the game. Only the manager has the authority to pick a winner from the pool of players.

## Key Features

- Players can enter the lottery by sending Ether to the smart contract.
- The manager (the creator of the lottery) can close the lottery and initiate the winner selection process.
- The smart contract will automatically pick a random winner from the list of participants once the lottery is closed.
- The winner will be rewarded with the total amount of Ether collected from all the players.
- The manager can start a new round of the lottery after the previous round has completed.

## Getting started

### Key Dependencies & Platforms

- [Solidity](https://docs.soliditylang.org/en/v0.8.21/): The smart contract language used to implement the lottery's backend logic.
- [Ethereum](https://ethereum.org/en/): The blockchain platform on which the Lottery smart contract is deployed.
- [React](https://react.dev/learn): The frontend framework used to build the user interface for interacting with the smart contract.
- [Web3.js](https://web3js.org/): The JavaScript library used to interact with the Ethereum blockchain from the frontend.

### Running locally

#### Prerequisites

To run the Lottery application locally, you need the following:

- `Node.js` and `npm`: Install Node.js and npm on your machine.
- `Ethereum Wallet`: Install an Ethereum wallet, such as MetaMask, to interact with the smart contract on the Ethereum blockchain.

#### Configuration (Backend)

1. Open the `deploy.js` file in the `Lottery-Backend\lottery-react` directory.
2. Replace the placeholders `YOUR_MNEMONIC` and `YOUR_INFURA_URL` with your Ethereum wallet mnemonic and Infura API URL respectively. This allows the script to deploy the smart contract to the Ethereum network.
3. Save and close the `deploy.js` file.

#### Deployment

1. Run the deployment script:

```bash
    node deploy.js
```

2. After successful deployment, note the smart contract address and ABI (Application Binary Interface) displayed in the terminal.

#### Configuration (Frontend)

1. Open the `lottery.js` file in the `Lottery-Fronted\lottery-react\src` directory.
2. Replace the placeholders `YOUR_SMART_CONTRACT_ADDRESS` and `YOUR_SMART_CONTRACT_ABI` with the actual smart contract address and ABI obtained during the deployment.
3. Save and close the lottery.js file.

#### Running the Application (Frontend)

1. Navigate to the frontend directory:

```bash
    cd Lottery-Fronted\lottery-react
```

2. Install frontend dependencies:

```bash
    npm install
```

3. Start the React frontend application:

```bash
    npm start
```

4. Access the application at `http://localhost:3000` in your web browser.

## Usage

1. Create a campaign by providing details such as minimum contribution and campaign description.
2. Contribute to campaigns using your Ethereum wallet.
3. Campaign managers can create spending requests for project expenses.
4. Contributors vote on spending requests to approve or reject them.
5. Campaign managers can finalize spending requests after they are approved.

## Acknowledgments

This project was developed while completing the Ethereum and Solidity course on Udemy. You can find my course certificate [here](https://www.udemy.com/certificate/UC-a1f05ea5-10b8-4bda-bce4-ce417407f4d0/).
