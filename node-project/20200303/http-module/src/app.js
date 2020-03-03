const http = require("http");

// http.createServer()返回的是http模块封装的一个基于事件的http服务器
// const server = http.createServer((req, res) => {
//   // req是http.IncomingMessage的实例，res是http.ServerResponse的实例
//   res.writeHead(200, { "content-type": "text/plain" });
//   res.end("Hello Node.js!");
// });
/**
 * http.Server的事件主要有：
 * 1. request：req , res
 * 2. connection: tcp连接建立，触发，提供一个socket，是net.Socket的实例
 * 3. close：关闭触发
 */

// 等同于下边的代码
// const server = new http.Server();
// server.on("request", (req, res) => {
//   res.writeHead(200, { "content-type": "text/plain" });
//   res.end("Hello Node.js new");
// });

/**
 * http.IncomingMessage是HTTP请求的信息，3个事件
 * 1. data：chunk参数
 * 2. end: 传输结束触发
 * 3. close: 结束触发
 */

const server = http.createServer((req, res) => {
  let data = "";
  req.on("data", chunk => {
    data += chunk;
    console.log("chunk: ", chunk);
  });
  req.on("end", () => {
    let method = req.method;
    let url = req.url;
    let headers = JSON.stringify(req.headers);
    let httpVersion = req.httpVersion;
    res.writeHead(200, {
      "content-type": "text/html"
    });
    let dataHtml = `<p>data: ${data}</p>`;
    let methodHtml = `<p>method: ${method}</p>`;
    let urlHtml = `<p>url: ${url}</p>`;
    let headersHtml = `<p>headers: ${headers}</p>`;
    let httpVersionHtml = `<p>httpVersion: ${httpVersion}</p>`;
    res.end(dataHtml + methodHtml + urlHtml + headersHtml + httpVersionHtml);
  });
});

server.listen(3001, () => {
  console.log("listening port 3001");
});
