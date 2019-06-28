
import createRpcImpl from './createRpcImpl'
import protoRoot from './protoRoot'
import { unpackAnyAll } from './unpackAny'
import modifyRpcCall from './modifyRpcCall'
import ConversionOptions from './ConversionOptions'

// 修改rpcCall
modifyRpcCall({
  beforeRequest (request, requestCtor, method) {
    return [null, request];
  },
  afterResponse (response, responseCtor, method) {
    if (!response) {
      const msg = method.fullName + '=>错误提示信息：接口返回null';
      return [TypeError(msg)];
    }
    if (response.code != 0) {
      const msg = method.fullName + '=>错误提示信息：'+ response.msg;
      return [TypeError(msg)];
    }
    // 返回数据添加默认值
    response = responseCtor.toObject(response, ConversionOptions);

    return [null, response];
  }
})

const defaultRpcImpl = createRpcImpl(window.defaultUrl, null);

// $root
export const $root = protoRoot
// 提供给devtools使用
window.__DEVTOOLS_PROTO_JSON_STRING__ = JSON.stringify($root.toJSON({keepComments: true}));

export function createService (serviceName, rpcImpl) {
  const Service = protoRoot.lookup(serviceName)
  return Service.create(rpcImpl || defaultRpcImpl)
}

// 解开any
export function any (o) {
  return unpackAnyAll(o, protoRoot)
}
