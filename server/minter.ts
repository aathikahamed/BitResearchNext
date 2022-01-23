// Importing libraries
import { ThirdwebSDK } from "@3rdweb/sdk";
import { ethers } from "ethers";

// Importing private key
require("dotenv").config();

// Instantiate 3rdweb SDK
const sdk = new ThirdwebSDK(
  new ethers.Wallet(
    // Your wallet private key
    process.env.PRIVATE_KEY as string,
    // RPC URL, we'll use Polygon Mumbai
    ethers.getDefaultProvider("https://rinkeby.arbitrum.io/rpc"),
  ),
);

const token = sdk.getTokenModule("0x31EB2a1513D7FF93e36Ea65A2e52355870910692");

// Set the amount of currency you want to mint
// (Actual amount, number of decimals)
const amount = ethers.utils.parseUnits("1000", 18);

// Minting the currency, 1000 Test coin
const mintCurrency = async () => {
  try {
    await token.mint(amount);
    console.log("Minted 1000 RSRH coin");
  } catch (err) {
    console.log(err);
  }
};

// Running the entire thing
mintCurrency();
