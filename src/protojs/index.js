
import createRpcImpl from './createRpcImpl'
import protoRoot from './protoRoot'
import { unpackAnyAll } from './unpackAny'

const defaultRpcImpl = createRpcImpl('http://localhost:3000', null, {
  // 拦截
  intercept: function (err, response, callback) {
    // 通用的判断判断等...
    callback(err, response)
  }
})

export function createService (serviceName, rpcImpl) {
  const Service = protoRoot.lookup(serviceName)
  return Service.create(rpcImpl || defaultRpcImpl)
}

export function any (o) {
  return unpackAnyAll(o, protoRoot)
}
