const path = require('path'); //build a path for cross platform
const fs = require('fs-extra'); //filesystem module
const solc = require('solc'); ///import compiler module

const buildPath = path.resolve(__dirname, 'build'); //dirname is a constant defined by node gets set to current path directry ..path points directly to .sol file
fs.removeSync(buildPath);

const epramaanPath = path.resolve(__dirname, 'contracts', 'epramaan.sol')
const source = fs.readFileSync(epramaanPath, 'utf8'); //to read the contents or file utf8 is the type of encoding sed in
const output = solc.compile(source, 1).contracts; //1 is the number of contacts we are compiling
fs.ensureDirSync(buildPath);
for (let contract in output) {
  fs.outputJsonSync(path.resolve(buildPath, contract.replace(':', '') + '.json'), output);
}
