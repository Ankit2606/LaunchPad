const express = require('express');
const { ethers } = require('ethers');
require('dotenv').config();

const app = express();
app.use(express.json());

const provider = new ethers.providers.JsonRpcProvider(process.env.SEPOLIA_RPC_URL);
const privateKey = process.env.PRIVATE_KEY;
const wallet = new ethers.Wallet(privateKey, provider);

const tokenAddress = 'your_contract_address_here';
const tokenAbi = [
    // add the ABI of your contract here
];

const tokenContract = new ethers.Contract(tokenAddress, tokenAbi, wallet);

app.post('/permit', async (req, res) => {
    const { owner, spender, value, nonce, deadline, v, r, s } = req.body;
    try {
        const tx = await tokenContract.permit(owner, spender, value, deadline, v, r, s);
        await tx.wait();
        res.send({ success: true, transactionHash: tx.hash });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
