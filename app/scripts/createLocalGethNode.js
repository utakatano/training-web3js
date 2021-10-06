// https://web3js.readthedocs.io/en/v1.5.2/web3.html#example-local-geth-node
import Web3 from 'web3'

let web3 = new Web3('http://localhost:8545')

// let web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))

web3.setProvider('ws://localhost:8546')

// web3.setProvider(new Web3.providers.WebsocketProvider('ws://localhost:8546'))
