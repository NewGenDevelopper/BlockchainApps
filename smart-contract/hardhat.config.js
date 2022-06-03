require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.4',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/7roGygKuJIjuvRX8Z1Ls3yJIDIFHkSVm',
      accounts: [
        '1f796c1141c3205e81113069ac7e3598fe6bbb78c14bfeead8df75f49a9afcbe',
      ],
    },
  },
}


