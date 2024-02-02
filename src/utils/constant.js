// export const arbitrumId = 42161;
// export const bscId = 56;
// export const polygonId = 137;
// export const mainnetId = 1;
// export const optimismId = 10;

export const arbitrumId = 42161;
export const bscId = 97;
export const polygonId = 80001;
export const mainnetId = 1;
export const optimismId = 10;

export const chainLogos = {
    [mainnetId]: "/assets/images/polygon.png",
    [bscId]: "/assets/images/polygon.png",
    [polygonId]: "/assets/images/polygon.png",
    [arbitrumId]: "/assets/images/arbitrum.png",
    [optimismId]: "/assets/images/oplogosmall.png"
}

export const categoryIcons = {
    "popular": "/assets/icons/popular.svg",
    "ai": "/assets/icons/icons8-ai-64.png",
    "web3": "/assets/icons/icons8-web3-64.png",
    "defi": "/assets/icons/gaming.svg",
    "nfts": "/assets/icons/icons8-nft-64.png",
    "tools": "assets/icons/icons8-tools-64.png",
    "public goods": "/assets/icons/icons8-publicgoods-47.png",
    "scholarships": "//assets/icons/icons8-scholarship-64.png",
    "infrastructure": "/assets/icons/icons8-infrastructure-64.png",
    "entertainment": "icons8-entertainment-64.png",
    "events": "/assets/icons/icons8-events-48.png",
    "gamefi": "/assets/icons/icons8-gamefi-64.png"
}

export const contractAddresses = {
    [mainnetId]: "0x1cC5Ccd855Eb55311b03734ff3A0fF67ce54b713",
    [bscId]: "0x64893916187dA6A4d643e84468984BD6945c870f",
    [polygonId]: "0xea6910176595890b4E0eE19440f5A4E5af4FDd48",
    [arbitrumId]: "0x0FE6Aff847e18853ddC0fC02a8e2F7c867585916",
    [optimismId]: "0xBBD52136eFB864692554996aaB7D52c2c8f43520"
}

export const qfRoundsAddresses = {
    [mainnetId]: "0x1cC5Ccd855Eb55311b03734ff3A0fF67ce54b713",
    [bscId]: "0xf6e16272A91d994d24652303190aAC73cc62a4Db",
    [polygonId]: "0x4187062B3117B28CFe71c4f7b9686Ac8E169AD1B",
    [arbitrumId]: "0x0FE6Aff847e18853ddC0fC02a8e2F7c867585916",
    [optimismId]: "0xBBD52136eFB864692554996aaB7D52c2c8f43520"
}

export const defaultEthLink = {
    [mainnetId]: "https://etherscan.io/address/",
    [bscId]: "https://bscscan.com/address/",
    [polygonId]: "https://polygonscan.com/address/",
    [arbitrumId]: "https://arbiscan.io/address/",
    [optimismId]: "https://optimistic.etherscan.io/address/"
}

export const subgraphURLs = {
    // [bscId]: "https://api.thegraph.com/subgraphs/name/kilros0817/youbuild-bsc",
    [polygonId]: "https://api.thegraph.com/subgraphs/name/kilros0817/youbuildpolygon",
}

export const contriTokens = {
    [bscId]: [
        {
            "name": "USDT",
            "address": "0x11E3008c59b8A55B7525150c61b12b3Fd2415a77"
        },
        {
            "name": "USDC",
            "address": "0x5C2D5798Ba7D59C381FaED3A7A3565c0d51b81a8"
        }
    ],
    [polygonId]: [
        {
            "name": "USDT",
            "address": "0xC0447C56964CBF539B5d645C013DE488CcfC21C1"
        },
        {
            "name": "USDC",
            "address": "0xb82F2BD8cc846DFdfDa0D3D846f7EAe5d1d871cf"
        }
    ],

}