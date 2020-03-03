const url = require("url");
let parseUrl = "https://www.google.com/?q=node.js";
let urlObj = url.parse(parseUrl);
console.log(urlObj);

let urlObj1 = {
  host: "www.google.com",
  port: 80,
  protocol: "https",
  search: "?q=node.js",
  query: "q=node.js",
  path: "/"
};
let urlAdress = url.format(urlObj1);
console.log(urlAdress);

let urlAddress2 = url.resolve("https://www.google.com", "/image");
console.log(urlAddress2);

const querystring = require("querystring");
let str = "keyWord=node.js&name=huruji";
let obj = querystring.parse(str);
console.log(obj);

let str1 = querystring.stringify(obj);
console.log(str1);
