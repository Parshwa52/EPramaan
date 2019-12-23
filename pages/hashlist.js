const crypto = require('crypto');
const fs = require('fs');
const len = 4096;
const pos = 0;const offset =0;
const file = './blockchain.pdf';
const buff = Buffer.alloc(len);

fs.open(file, 'r', (err, fd) => {
 fs.read(fd, buff, offset, len, pos, (err, bytes, buff) => {
 const hash = crypto
 .createHash('whirlpool')
 .update(buff)
 .digest('hex');
 console.log(hash);
 /* prints following hash
  ea8f4f1c979cd850bde3dd731b283c31ed6658c3e01
  d3f47538967e07a9d37cfca8cf22e744bd6f14977b9
  c81fc116c4009dd93018ff5526602e35b2e305f1ac
 */
 });
});
