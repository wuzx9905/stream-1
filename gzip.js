const fs = require("fs")
const zlib = require("zlib")
const {Transform} = require("stream")
const crypto = require("crypto")

const file = process.argv[2];

const reportProgress = new Transform({
    transform(chunk, encoding, callback) {
        process.stdout.write(".");
        callback(null,chunk);
    }
})

fs.createReadStream(file)
    .pipe(crypto.createCipheriv("aes192","123456","BinaryLike"))
    .pipe(zlib.createGzip())
    .pipe(reportProgress)
    .pipe(fs.createWriteStream(file + ".gz"))
    .on("finish", () => console.log("Done"))