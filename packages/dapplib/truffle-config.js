require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena fog sugar noodle ribbon remember hour grace glove flee that'; 
let testAccounts = [
"0x784233844fe23e84a82ac0d32909ceace1bb4fdf14af574b86985c2a1225efaa",
"0xe99412a4df1766d8f4c094dd40d836bd9e9bce4fea84f7146de4c7d19750c487",
"0xb8a34fe85f668f5107b056c979b5d58d232aebf8971b680f003c8dd7f38507f6",
"0x60a49368f48106d68ce0dfa065143b378834b0874da281ec54e309e5580441cf",
"0x518ae8b991aa3aa293efc8ab336a6c9a9af7546a983766fc8e97909bd98368b0",
"0x90abbbb7e94c7d5ba7121a4079a4a6d3f02a5ae54a93e9fe2e05d475467817a0",
"0xa8dd090a4f4a0675eecb1d3402178c3704f7dd052fd183c5ca33b0b8a1c00408",
"0x9a469dc832f641168ab2b49bab59795a316ac386ce04064ab8e37edc4ccf7acf",
"0x2b67bcd601c26aa6def61f425a8ba8652c3eaf842bde857777d64426cdd1308f",
"0xacb88f2d8af5c061ec44a96db37c37754abf15193f0dd9f1539f3cd05e27c781"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

