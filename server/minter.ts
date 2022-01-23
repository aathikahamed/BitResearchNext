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
    ethers.getDefaultProvider("https://polygon-rpc.com/"),
  ),
);

const token = sdk.getTokenModule("0x119189133a12FB40340573F6482244Aa9f24a64b");

// Set the amount of currency you want to mint
// (Actual amount, number of decimals)
const amount = ethers.utils.parseUnits("10", 18);

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
