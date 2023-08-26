const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

const nftData = async (req, res) => {
    const address = process.env.ADDRESS;
    const chain = EvmChain.ETHEREUM;
    const response = await Moralis.EvmApi.nft.getWalletNFTs({
        address,
        chain,
    });
    let result = response.result.map(({ _data }) => {
        let Data = {
            chainInfo: _data.chain._chainlistData,
            contractType: _data.contractType,
            tokenId: _data.tokenId,
            tokenUri: _data.tokenUri,
            metadata: _data.metadata,
            name: _data.name,
            symbol: _data.symbol,
            amount: _data.amount,
        }
        return Data
    });

    res.status(200).json({
        Data: result
    })
}


module.exports = nftData;