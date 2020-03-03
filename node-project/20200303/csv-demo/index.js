const csv = require("csv");
const generator = csv.generate({ seed: 1, columns: 2, length: 20 });
const parser = csv.parse();
let transformer = csv.transform(data => data.map(value => value.toUpperCase()));
let stringifier = csv.stringify();
generator.on("readable", () => {
  while ((data = generator.read())) {
    parser.write(data);
  }
});

// 解析生成的csv
parser.on("readable", () => {
  while ((data = parser.read())) {
    transformer.write(data);
  }
});

// csv->txt
transformer.on("readable", () => {
  while ((data = transformer.read())) {
    stringifier.write(data);
  }
});

stringifier.on("readable", () => {
  while ((data = transformer.read())) {
    process.stdout.write(data);
  }
});
