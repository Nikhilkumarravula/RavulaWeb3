// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
   const Flash= await hre.ethers.getContractFactory("flashloan");
   const flash=await Flash.deploy("0xc4dCB5126a3AfEd129BC3668Ea19285A9f56D15D");
   await flash.deployed();
   console.log("Flash loan contract deployed: ", flash.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
