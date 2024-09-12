const { ethers } = require("hardhat");
// console.log("testing")
// const proposalNames = ["Proposal 1", "Proposal 2", "Proposal 3"];

// // Convert proposal names to bytes32 format
// const proposalNamesBytes32 = proposalNames.map(name => ethers.utils.formatBytes32String(name));

// // Convert bytes32 format back to string format
// const proposalNamesConverted = proposalNamesBytes32.map(bytes32 => ethers.utils.parseBytes32String(bytes32));

// console.log(proposalNamesConverted);
// console.log({proposalNamesBytes32})

// const provider = new ethers.providers.JsonRpcProvider("YOUR_JSON_RPC_PROVIDER_URL");

// // Create a signer

// async function testI(){

//     const signer =await ethers.getSigners();


//     console.log(signer[0])
// }
// testI();

const proposalNames = ["NDC", "NPP", "CPP"];

// Convert proposal names to bytes32 format
const proposalNamesBytes32 = proposalNames.map(name => ethers.utils.formatBytes32String(name));
const hexNumbers = proposalNamesBytes32.map(hexString => BigInt(hexString));
// Convert bytes32 format back to string format
const proposalNamesConverted = proposalNamesBytes32.map(bytes32 => ethers.utils.parseBytes32String(bytes32));

console.log(hexNumbers);