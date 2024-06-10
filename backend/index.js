const express = require("express");
const { ethers } = require("ethers");
const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");
const erc20Routes = require("./src/routes/ERC20/erc20routes");

require("dotenv").config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;


app.use("/erc20", erc20Routes);

const startServer = async () => {
  await Moralis.start({
    apiKey: process.env.MORALIS_API_KEY,
  });

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
