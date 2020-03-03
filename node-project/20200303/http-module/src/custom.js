const http = require("http");
// nodejs做客户端发送请求
let reqData = "";
// http.request(option[,callback]): 返回一个httpClientRequest实例
// http
//   .request(
//     {
//       host: "127.0.0.1",
//       port: 3001,
//       method: "get"
//     },
//     res => {
//       res.on("data", chunk => {
//         reqData += chunk;
//         console.log("chunk", chunk);
//       });
//       res.on("end", () => {
//         console.log(reqData);
//       });
//     }
//   )
//   .end();

// http.get(option[,callback])
// http
//   .get(
//     {
//       host: "127.0.0.1",
//       port: 3001
//     },
//     res => {
//       res.on("data", chunk => {
//         reqData += chunk;
//         console.log("chunk", chunk);
//       });
//       res.on("end", () => {
//         console.log(reqData);
//       });
//     }
//   )
//   .end();

let option = {
  http: "127.0.0.1",
  port: 3001,
  method: "get"
};

const req = http.request(option);
req.on("response", res => {
  res.on("data", chunk => {
    reqData += chunk;
  });
  res.on("end", () => {
    console.log(reqData);
  });
});
req.end();
