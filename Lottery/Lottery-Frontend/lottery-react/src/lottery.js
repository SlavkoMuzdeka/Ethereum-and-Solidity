import web3 from "./web3";

const address = "YOUR_SMART_CONTRACT_ADDRESS";

const abi = ""; //<YOUR_SMART_CONTRACT_ABI>

const contract = new web3.eth.Contract(abi, address);
export default contract;
