// Allows us to use ES6 in our migrations and tests.
var HDWalletProvider = require("truffle-hdwallet-provider");

var infura_apikey = "d25842c7cb1c42a3aefb62eb7937482d";
var mnemonic = "access carpet olympic service heart tissue lucky pill dress ball half share";
//var address = "0x94e1E6DbEf0936d494B7B23C47F80dfA195e28Fa"

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*' // Match any network id
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/b13e328e12fa4a1bb93c4097b7241e6e")
      },
      network_id: 3,
      //from: address,
      gas: 4000000
    }
  }
}
