const util = require("util");
let obj = {
  keyWord: "node.js",
  name: "ztry",
  a: {
    b: 1
  }
};
let str = util.inspect(obj);
console.log(str);
let str1 = util.inspect(obj, { depth: null, colors: true });
console.log(str1);

// dns
const dns = require("dns");
let domain = "sephirex.club";
let ipAddress = "";
dns.resolve(domain, (err, address) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(address);
  ipAddress = address;
  console.log("ipAddress", ipAddress[0]);
});
dns.reverse("121.37.165.128", (err, domain) => {
  console.log(domain);
});
