import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  //in the browser and metamask running
  web3 = new Web3(window.web3.currentProvider);

} else {
  const provider = new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/dfde1e2bb8c542ee884246a9fa1925c4');
  web3 = new Web3(provider);
}

export default web3;
