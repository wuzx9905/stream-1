const {Readable} = require('stream')

const inStream = new Readable()

inStream.push('ABCDEFG')
inStream.push('HIJKLMN')

inStream.push(null);

inStream.pipe(process.stdout);