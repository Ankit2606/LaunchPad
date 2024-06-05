async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const TokenWithPermit = await ethers.getContractFactory("TokenWithPermit");
  const token = await TokenWithPermit.deploy();

  console.log("TokenWithPermit deployed to:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
      console.error(error);
      process.exit(1);
  });