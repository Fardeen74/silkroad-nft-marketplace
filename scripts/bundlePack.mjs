import { ThirdwebSDK } from "@thirdweb-dev/sdk"

import dotenv from "dotenv";
dotenv.config();

(async () => {
    const sdk = ThirdwebSDK.fromPrivateKey(process.env.PRIVATE_KEY, "mumbai");

    const packAddress = "0xfB055A267281A4e8CB473a9AF0a6fDD0c665430f";
    const cardAddress = "0x878377A9d3FBEe2320409d61b1283945117f0748";

    const pack = sdk.getContract(packAddress, "pack");

    const card = sdk.getContract(cardAddress, "edition");
    await (await card).setApprovalForAll(packAddress, true);
    console.log("Approved card contract to transfer cards to pack contract");

    const packImage1 = "ipfs://QmY5hnFVo5u1CYR3TP52J8MaKLGCM5uhCEXjR2XcPhr2KP/pack.png";
    const packImage2 = "ipfs://QmR3Wn9HzxS9zLnpGWr2cZXMZdfUshgxGrUfM3UZp5Uudx/pack2.png";

    console.log("Creating pack");
    const createPacks = (await pack).create({
        packMetadata: {
            name: "Pack 01 v2",
            description: "A trading card pack",
            image: packImage1,
        },
        erc1155Rewards: [
            {
                contractAddress: cardAddress,
                tokenId: 0,
                quantityPerReward: 1,
                totalRewards: 10
            },
            {
                contractAddress: cardAddress,
                tokenId: 1,
                quantityPerReward: 1,
                totalRewards: 5
            },
            {
                contractAddress: cardAddress,
                tokenId: 3,
                quantityPerReward: 1,
                totalRewards: 10
            },
            {
                contractAddress: cardAddress,
                tokenId: 4,
                quantityPerReward: 1,
                totalRewards: 10
            },
            {
                contractAddress: cardAddress,
                tokenId: 7,
                quantityPerReward: 1,
                totalRewards: 5
            }
        
        ],
        rewardsPerPack: 5,
    });

    console.log("Packs created");
})();