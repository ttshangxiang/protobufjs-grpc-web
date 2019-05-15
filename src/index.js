
import {createService, any} from '../protojs'

// 创建rpc
var greeter = createService("Greeter");

greeter.sayHello({ name: 'you' })
.then(function(response) {
  // 解压any
  response = any(response);
  console.log('Greeting:', response.message);
}).catch(function (err) {
  console.error(err);
});