/**
 * 魔改rpcCall，文件位置，node_modules/protobufjs/src/rpc/service.js
 */
import protobuf from 'protobufjs/light'
import util from 'protobufjs/src/util/minimal'

function modifyRpcCall ({beforeRequest, afterResponse}) {

  protobuf.rpc.Service.prototype.rpcCall = function rpcCall(method, requestCtor, responseCtor, request, callback) {

    if (!request)
      throw TypeError("request must be specified");
  
    var self = this;
    if (!callback)
      return util.asPromise(rpcCall, self, method, requestCtor, responseCtor, request);
  
    if (!self.rpcImpl) {
      setTimeout(function () { callback(Error("already ended")); }, 0);
      return undefined;
    }
  
    
    try {
      // 监听request
      if (beforeRequest) {
        const [err, result] = beforeRequest(request, requestCtor, method);
        if (err) {
          self.emit("error", err, method);
          return callback(err);
        }
        if (result) {
          request = result;
        }
      }
      const requestData = requestCtor[self.requestDelimited ? "encodeDelimited" : "encode"](request).finish();
  
      return self.rpcImpl(
        method,
        requestData,
        function rpcCallback(err, response) {
  
          if (err) {
            self.emit("error", err, method);
            return callback(err);
          }
  
          if (response === null) {
            self.end(/* endedByRPC */ true);
            return undefined;
          }
  
          if (!(response instanceof responseCtor)) {
            try {
              response = responseCtor[self.responseDelimited ? "decodeDelimited" : "decode"](response);
            } catch (err) {
              self.emit("error", err, method);
              return callback(err);
            }
          }
  
          // 监听response
          if (afterResponse) {
            const [err, result] = afterResponse(response, responseCtor, method);
            if (err) {
              self.emit("error", err, method);
              return callback(err);
            }
            if (result) {
              response = result;
            }
          }
  
          self.emit("data", response, method);
          return callback(null, response);
        }
      );
    } catch (err) {
      self.emit("error", err, method);
      setTimeout(function () { callback(err); }, 0);
      return undefined;
    }
  };
}

export default modifyRpcCall;
