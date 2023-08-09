# Kickstart

Kickstart is a decentralized crowdfunding platform built on Ethereum using Solidity smart contracts. This project showcases my proficiency in Ethereum, Solidity, web3.js, Next.js, and Semantic UI through the development of a crowdfunding application.

## Project Motivation

The Kickstart project was developed as part of my journey to learn Ethereum and Solidity. Through this project, I gained hands-on experience in building decentralized applications (DApps) and understanding the principles of blockchain-based crowdfunding.

## Key Features

- Create and manage crowdfunding campaigns using Ethereum smart contracts.
- Contribute to campaigns by sending Ether to the campaign contract.
- Campaign managers can create spending requests, specifying the recipient and amount.
- Contributors vote on spending requests to ensure transparency and consensus.
- View detailed information about campaigns, contributions, and spending requests.
- Responsive and user-friendly interface powered by Semantic UI and Next.js.

## Key Dependencies & Platforms

- [Solidity](https://docs.soliditylang.org/en/v0.8.21/): Smart contract language for Ethereum.
- [Ethereum](https://ethereum.org/en/): Decentralized blockchain platform.
- [web3.js](https://web3js.org/): JavaScript library for interacting with Ethereum from the frontend.
- [Next.js](https://nextjs.org/): React framework for building server-rendered applications.
- [Semantic UI](https://semantic-ui.com/): Stylish and responsive CSS framework.

## Getting Started

### Prerequisites

- `Node.js` and `npm`: Install Node.js and npm on your machine.
- `Ethereum wallet` (e.g., MetaMask): Install an Ethereum wallet to interact with the blockchain.

### Configuration (Backend)

1. Compile the Kickstart smart contract:

```bash
    node ethereum/compile.js
```

2. Deploy the Kickstart smart contract: During deployment, input your Ethereum wallet mnemonic and Infura API URL as prompted.

```bash
    node ethereum/deploy.js
```

3. Copy the deployed contract address

4. Open the ethereum/factory.js file

5. Replace `ADDRESS` with the actual address of the deployed CampaignFactory contract

6. Open the ethereum/web3.js file and replace `YOUR_INFURA_URL` with your Infura API URL

### Running Tests

Run the test suite:

```bash
    npm run test
```

### Running the Frontend

1. Install frontend dependencies:

```bash
    npm install
```

2. Start the Next.js frontend application:

```bash
    npm run dev
```

3. Access the application at `http://localhost:3000` in your web browser.

## Acknowledgments

This project was developed while completing the Ethereum and Solidity course on Udemy. You can find my course certificate [here](https://www.udemy.com/certificate/UC-a1f05ea5-10b8-4bda-bce4-ce417407f4d0/).
