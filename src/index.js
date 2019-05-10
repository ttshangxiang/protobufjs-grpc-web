
const createRpcImpl = require('./createRpcImpl');
const { unpackAll } = require('./unpack');

// 加载proto
const root = require('./protos/greeter.proto');
var Greeter = root.lookup("Greeter");
// 创建rpc
var greeter = Greeter.create(createRpcImpl('http://localhost:3000'));

greeter.sayHello({ name: 'you' })
.then(function(response) {
  // 解压any
  response = unpackAll(response, [root]);
  console.log('Greeting:', response.message);
}).catch(function (err) {
  console.error(err);
});