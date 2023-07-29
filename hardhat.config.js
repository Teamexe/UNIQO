/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
   solidity: "0.8.9",
   defaultNetwork: "polygon_mumbai",
   networks: {
      hardhat: {},
      polygon_mumbai: {
         url:"https://polygon-mumbai.g.alchemy.com/v2/c37MWCzmUr3K0CVcgS2mfeZ9DAQgtcGF",
         accounts: ["0x258b8f3d22938f29c979727c3f22e17a551ac1a0f425ac7f768fd6a803a0484f"]
      }
   },
}