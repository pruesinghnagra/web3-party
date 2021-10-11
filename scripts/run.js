const main = async () => {
  // Compiling the smart contract
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal")
  
  // Deploy our contract to local blockchain 
  const waveContract = await waveContractFactory.deploy();

  // Need to wait for contract to be mined
  await waveContract.deployed();

  // Print Address
  console.log("Contract deployed to: ", waveContract.address);
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();