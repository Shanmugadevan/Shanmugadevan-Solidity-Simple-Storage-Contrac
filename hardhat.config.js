require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
require("./tasks/block-number")
require("solidity-coverage")
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
	const accounts = await hre.ethers.getSigners();

	for (const account of accounts) {
		console.log(account.address);
	}
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const ROPSTEN_RPC_URL = process.env.ROPSTEN_RPC_URL;
const ROPSTEN_PRIVATE_KEY = process.env.ROPSTEN_PRIVATE_KEY;
module.exports = {
	solidity: "0.8.9",
	defaultNetwork: "hardhat",
	networks: {
		ropsten: {
			url: ROPSTEN_RPC_URL,
			accounts: [ROPSTEN_PRIVATE_KEY],
			chainId: 3,
		},
	},
};
