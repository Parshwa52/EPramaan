const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const provider = ganache.provider();
const web3 = new Web3(provider);
const {
  interface,
  bytecode
} = require('../compile');

let accounts;
let epramaan;
let abc;
beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();
  // Use one of those accounts to deploy the contract
  epramaan = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
      arguments: ['187C85C8507F6B10314382EB7EC840C0DFD109DCAEF034A5A2FD896391F4C62B']
    })
    .send({
      from: accounts[0],
      gas: '1000000'
    });

  epramaan.setProvider(provider);
});
describe('EPramaan', () => {
  it('deploys a contract', () => {
    console.log(epramaan)
    console.log(accounts);
    assert.ok(epramaan.options.address);
  });
  it('storemap test', async () => {
    await epramaan.methods.storemap('DDC743042ADD646DD6FE9F8D8D8AC23233C2359B45826F93DB05928A1709466D').send({
      from: accounts[1]
    });
    await epramaan.methods.storemap('BE5F82F84E563360D41DB1FAC5E5FB0D623D618A34549383D9E24BB8BDC0F4E1').send({
      from: accounts[2]
    });

    const xyz = await epramaan.methods.hashes(0).call();
    console.log(await epramaan.methods.display().call());
    const boolval = await epramaan.methods.search('BE5F82F84E563360D41DB1FAC5E5FB0D623D618A34549383D9E24BB8BDC0F4E1').send({
      from: accounts[3]
    });
    console.log('hi');
    console.log(boolval);
  });
  it('searchcheck', async () => {});
  it('dsiplay hashes', async () => {})
});
