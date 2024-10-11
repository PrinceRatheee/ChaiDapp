// scripts/deploy.js

const hre = require("hardhat");

async function main() {
  // Get the contract factory for 'Chai' (capitalized)
  const ChaiFactory = await hre.ethers.getContractFactory("Chai"); // Ensure "Chai" matches your contract name

  // Deploy the contract
  const chai = await ChaiFactory.deploy();

  // Wait for the deployment to be mined
  await chai.waitForDeployment();

  console.log("Deployed contract address:", await chai.getAddress());
}

// Execute the main function and handle errors
main().catch((error) => {
  console.error("Error deploying contract:", error);
  process.exitCode = 1;
});
