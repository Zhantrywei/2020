const fs = require("fs");
const path = require("path");
// fs.writeFile("test.txt", "中文", () => {});

fs.open("./demo.js", "r", (err, fd) => {
  var readBuffer = new Buffer(1024),
    offset = 0,
    len = readBuffer.length,
    filePosition = 100;
  fs.read(fd, readBuffer, offset, len, filePosition, (err, readByte) => {
    console.log("读取数据总数：" + readByte + " bytes");
    console.log(readBuffer.slice(0, readByte));
  });
});
