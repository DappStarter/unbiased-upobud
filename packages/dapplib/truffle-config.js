require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install indoor olympic seed curve rare remind puppy hunt beauty flip gate'; 
let testAccounts = [
"0x7df2da0bc08956affe9f99fc7b148e856aea89a07dee951c2fde9cc934228c51",
"0x1a179eb6919147f479ea8fbdce145e63aac04703473a96918537473c9aef6d37",
"0x1a21ef2cb81a041c52bead9c43df4fc81db4243b483efe3c99b0657d27442e82",
"0x42d868b3e6c3634b38ab67f4e1905d6307455dbba26c85c8fb3e0f3ee2443f63",
"0x628fbfb202b7c5c630ce777ad88975a8490328201e0237a4162090eda2dca2c5",
"0x34fb6a6763d6798b8a93b2a7b29f59607ba81255fea79af0fb1a79f223fb17bb",
"0x9ae7091dcb50b7d1d46d04fe60ebe4a96f62771f4329e1079db42b66bc64a28a",
"0x21d3d57307aafbf7363d274781c5e0920a5f18d4f3fa74e873fcbacf770d1ace",
"0x4dceac73a613f171af3e3609a1bb4bac2408459e99c97ff96e271e9b506ab431",
"0x6072fbe8b72b95e9d2299cc465027674edcf747836082ba0b22caef31e86351d"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
