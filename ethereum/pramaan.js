import web3 from './web3';
import epramaan from './build/epramaan.json';

const instance = new web3.eth.Contract(
  JSON.parse(epramaan.interface), '0xb4aed76dcB6D135677dB1fd21cDD146Ba3F655C1');

export default instance;
