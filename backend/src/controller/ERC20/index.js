const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");
require("dotenv").config();

const fetchERC20TokenAndBalance = async (req, res) => {
  const address = "0x3c905aC275240085FD295E8c493BF9A8aFE4cE75";
  try {
    const response = await Moralis.EvmApi.token.getWalletTokenBalances({
      "chain": EvmChain.SEPOLIA,
      address
    });
    res.status(200).json({
      response,
    });
  } catch (error) {
    console.error(error);
    res.status(500);
    res.json({ error: error.message });
  }
};

module.exports = { fetchERC20TokenAndBalance };