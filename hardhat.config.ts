import {HardhatUserConfig} from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

require("dotenv").config();
// @ts-ignore
const config: HardhatUserConfig = {
    solidity: "0.8.18",
    networks: {
        goerli: {
            url: process.env.ALCHEMY_GOERLI_URL,
            // @ts-ignore
            accounts: [process.env.GOERLI_PRIVATE_KEY]
        }
    },
    etherscan: {
        apiKey: process.env.ETHERSCAN_KEY
    }
};

export default config;
