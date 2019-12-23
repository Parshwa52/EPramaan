const fs = require('fs');
const qrcode = require('qrcode');

run().catch(error => console.error(error.stack));

async function run() {
  const res = await qrcode.toDataURL('http://asyncawait.net');
  console.log(res);
  fs.writeFileSync('./qr.html', `<img src="${res}">`);
  console.log('Wrote to ./qr.html');
}
