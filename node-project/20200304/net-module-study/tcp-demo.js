const net = require("net");
const server = net.createServer(socket => {
  console.log("connect");
  server.maxConnections = 3;
  server.getConnections((err, count) => {
    if (err) {
      console.log(err);
    }
    console.log("count: ", count);
  });
  var address = socket.address();
  console.log("socket msg: ", JSON.stringify(address));

  socket.on("data", data => {
    console.log(data.toString());
  });
});
const test = [
  //小伴龙
  {
    appname: "xbl",
    packageName: "com.xiaobanlong.main",
    name: "小伴龙"
  },
  //小伴龙拼音
  {
    appname: "xblpy",
    packageName: "com.youban.xblpy",
    name: "小伴龙拼音"
  },
  //小伴龙玩数学
  {
    appname: "xblmath",
    packageName: "com.youban.ProjectMath",
    name: "小伴龙玩数学"
  },
  // 小伴龙英语
  {
    appname: "xblenglish",
    packageName: "com.youban.xblenglish",
    name: "小伴龙英语"
  }
];

server.listen(18001, () => {
  console.log("server is listening");
  var address = server.address();
  console.log("port: ", address.port);
  console.log("address: ", address.address);
  console.log("family: ", address.family);
});

// server.listen(18001);
// server.on("listening", () => {
//   console.log("server is listening");
// });
