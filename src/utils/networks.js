export const optimism = {
    id: 10,
    name: 'OP Mainnet',
    network: 'optimism',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        alchemy: {
            http: ['https://opt-mainnet.g.alchemy.com/v2'],
            webSocket: ['wss://opt-mainnet.g.alchemy.com/v2'],
        },
        infura: {
            http: ['https://optimism-mainnet.infura.io/v3'],
            webSocket: ['wss://optimism-mainnet.infura.io/ws/v3'],
        },
        default: {
            http: ['https://optimism.meowrpc.com'],
        },
        public: {
            http: ['https://optimism.meowrpc.com'],
        },
    },
    blockExplorers: {
        etherscan: {
            name: 'Etherscan',
            url: 'https://optimistic.etherscan.io',
        },
        default: {
            name: 'Optimism Explorer',
            url: 'https://explorer.optimism.io',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 4286263,
        },
    },
}

export const bscTestnet = {
    id: 97,
    name: 'Binance Smart Chain Testnet',
    network: 'bsc-testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'BNB',
        symbol: 'tBNB',
    },
    rpcUrls: {
        default: { http: ['https://bsc-testnet-rpc.publicnode.com'] },
        public: { http: ['https://bsc-testnet-rpc.publicnode.com'] },
    },
    blockExplorers: {
        etherscan: { name: 'BscScan', url: 'https://testnet.bscscan.com' },
        default: { name: 'BscScan', url: 'https://testnet.bscscan.com' },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 17422483,
        },
    },
    testnet: true,
}
