// grpc-web + protobufjs
import grpc from 'grpc-web'

/**
 * 判断是否是方法
 * @param {object} obj
 */
function isFunction (obj) {
  return Object.prototype.toString.call(obj) === '[object Function]'
}

/**
 * 创建grpc-web需要的MethodInfo
 * @param {Method} method protobufjs的Method
 * @returns grpc.web.AbstractClientBase.MethodInfo
 */
function createMethodInfo (method) {
  return new grpc.AbstractClientBase.MethodInfo(null, arg => arg, arg => arg)
}

/**
 * 创建protobufjs需要的rpcImpl
 * @param {string} hostname 服务器名
 * @param {*} credentials  credentials to be used to connect to the server (暂时未用到)
 * @param {object} options Options for the client
 * @param {object} metadata User defined call metadata
 */
function createRpcImpl (hostname, credentials, options, metadata) {
  if (!options) options = {}
  options['format'] = 'text'
  if (!metadata) metadata = {}
  const _client = new grpc.GrpcWebClientBase(options)
  return function (method, requestData, callback) {
    const url = hostname + '/' + method.parent.fullName.slice(1) + '/' + method.name
    _client.rpcCall(url, requestData, metadata, createMethodInfo(method), callback)
  }
}

export default createRpcImpl
