const fs = require("fs/promises");
import { ethers } from "hardhat";

async function main() {
  const AllSigners = await ethers.getSigners();
  // const BankAccount = await ethers.getContractFactory("BankAccount", AllSigners[0]);
  // const bankAccount = await BankAccount.deploy();
  // await bankAccount.deployed();

  const Token = await ethers.getContractFactory("BetaCoin", AllSigners[0]);
  const initialSupply = ethers.utils.parseEther("10000000000000000000");
   const initialNonce = await ethers.provider.getTransactionCount(AllSigners[0].address);
   //const token = await Token.deploy("0x76dDA41f855bF72775A78EA66972F9b58c51d35F",initialSupply,'https://amber-managing-angelfish-602.mypinata.cloud/ipfs/QmPqiuTrejfavCAyJthCL9Uk9aD9vC2DMHRvB5uxT2cefD');
  
  const Nft = await ethers.getContractFactory("TressureLandNFT", AllSigners[0]);
  const ntf = await Nft.deploy(
    "0x76dDA41f855bF72775A78EA66972F9b58c51d35F",
    "https://amber-managing-angelfish-602.mypinata.cloud/ipfs/QmbxmNRCjLXiR3KHbsbuFAiBhnzfVG1Vf8vGzAPCnabGGQ"
  );
  // const Gems = await ethers.getContractFactory("ZKGemsERC1155", AllSigners[0]);
  // const gems = await Gems.deploy();
  // await gems.deployed();
  await ntf.deployed();
  //  await token.deployed();

  
  // writeDeploymentInfo(bankAccount);
  //writeDeploymentInfoToken(token,"token");
   writeDeploymentInfoToken(ntf, "nft");
//  writeDeploymentInfoToken(gems, "erc1155");

  console.log({initialNonce})
}

async function writeDeploymentInfo(contract: any) {
  const data = {
    contract: {
      address: contract.address,
      signerAddress: contract.signer.address,
      abi: contract.interface.format(),
    },
  };
  const content = JSON.stringify(data, null, 2);
  await fs.writeFile("deployment.json", content, { encoding: "utf-8" });
}

async function writeDeploymentInfoToken(contract: any, fileName: string) {
  const data = {
    contract: {
      address: contract.address,
      signerAddress: contract.signer.address,
      abi: contract.interface.format(),
    },
  };
  const content = JSON.stringify(data, null, 2);
  await fs.writeFile(`${fileName}.json`, content, { encoding: "utf-8" });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
