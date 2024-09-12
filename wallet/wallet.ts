const { ethers } = require("hardhat");

const phrase =
  "second hurt cage chef betray add ketchup finish myself crunch muffin humble"; // Replace with your actual mnemonic phrase
// Create a wallet from the mnemonic
const DefaultP = ethers.Wallet.fromMnemonic(phrase);
const wallet = new ethers.Wallet(
  "ad74092f0b545b4a91b7974e22b918d72e24827402ff235e287105173a78e3ae"
);
const Default = new ethers.Wallet(
  "8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63"
);

// Get the address of the wallet
// console.log('Wallet Address:', { W: wallet.address, D: Default.address, p: DefaultP.address });

async function sendTransaction() {
    try {
      console.log("Transaction");
      const provider = new ethers.providers.JsonRpcProvider(
       "https://klaytn-baobab.blockpi.network/v1/rpc/public"
    // "https://services.zkrypto.com/sepolia/rpc/"
      );
  
      const senderWallet = new ethers.Wallet(
        "0xe1ab99879e69f9d48bb60293cdb78ba96e98138ee8e8960ddf90efa353275ea1",
        provider
      );
      const senderBalanceBefore = await provider.getBalance(senderWallet.address);
      console.log({ senderWallet: senderWallet });
      const recipientAddress = "0x76dDA41f855bF72775A78EA66972F9b58c51d35F";
      const amountToSend = ethers.utils.parseEther("30");
  
      // Check balances before the transaction
      const recipientBalanceBefore = await provider.getBalance(recipientAddress);
      console.log(
        "Sender balance before:",
        ethers.utils.formatEther(senderBalanceBefore)
      );
      console.log(
        "Recipient balance before:",
        ethers.utils.formatEther(recipientBalanceBefore)
      );
  
      const nonce = await provider.getTransactionCount(senderWallet.address);
      const gasPrice = await provider.getGasPrice(); // Fetch the current gas price
  
      const transaction = {
        to: recipientAddress,
        value: amountToSend,
        nonce: nonce,
        gasPrice: gasPrice, // Set the gas price
        gasLimit: 31000, // Adjust gas limit as needed
      };
  
      // Sign the transaction
      const signedTransaction = await senderWallet.signTransaction(transaction);
  
      // Send the signed transaction to the Ethereum network
      const transactionResponse = await provider.sendTransaction(
        signedTransaction
      );
      console.log("Transaction sent:", transactionResponse.hash);
  
      // Wait for the transaction to be mined
      await transactionResponse.wait();
  
      // Check balances after the transaction
      const senderBalanceAfter = await provider.getBalance(senderWallet.address);
      const recipientBalanceAfter = await provider.getBalance(recipientAddress);
      console.log(
        "Sender balance after:",
        ethers.utils.formatEther(senderBalanceAfter)
      );
      console.log(
        "Recipient balance after:",
        ethers.utils.formatEther(recipientBalanceAfter)
      );
    } catch (error) {
      console.error("Error sending transaction:", error);
    }
  }
  

async function getBalance() {
  try {
    const provider = new ethers.providers.JsonRpcProvider(
      "https://rpc.ankr.com/klaytn_testnet"
    //  "http://192.168.40.15:8545"
    );

    const senderWallet = new ethers.Wallet(
      "0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6",
      provider
    );
    console.log(senderWallet.address)
    const senderBalanceBefore = await provider.getBalance(senderWallet.address);
    console.log({balance: senderBalanceBefore,address:senderWallet.address });

  } catch (error) {
    console.error("Error sending transaction:", error);
  }
}
// Call the function to send the transaction
  getBalance();
    //  sendTransaction()

