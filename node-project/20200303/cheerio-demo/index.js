const request = require("request");
const path = require("path");
const config = require("./config");
const analyze = require("./analyze");
const url = require("url");
const fs = require("fs");

function start() {
  request(config.url, (err, res, body) => {
    console.log("start -> body", body.indexOf("<img"));
    if (!err && res) {
      analyze.findImg(body, download);
    }
  });
}

function download(imgUrl, i) {
  console.log("download -> imgUrl", imgUrl);
  if (!imgUrl) return;
  let ext = imgUrl.split(".").pop();
  if (!url.parse(imgUrl).protocol) {
    imgUrl = url.parse(config.url).protocol + imgUrl;
  }
  request(imgUrl).pipe(
    fs.createWriteStream(path.join(config.imgDir, i + "." + ext), {
      encoding: "utf8"
    })
  );
}
start();
