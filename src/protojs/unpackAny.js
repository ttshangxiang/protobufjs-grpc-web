
const typeCache = {}

/**
 * 判断是否是方法
 * @param {object} obj
 */
function isArray (obj) {
  return Object.prototype.toString.call(obj) === '[object Array]'
}

export function unpackAny (o, roots, reg) {
  if (!reg) {
    reg = /^type\.googleapis\.com\//
  }
  const typeUrl = o.typeUrl || o.type_url
  if (typeUrl && reg.test(typeUrl)) {
    const typestr = typeUrl.split('/')[1]
    let type = typeCache[typestr]
    if (!type) {
      if (isArray(roots)) {
        roots.forEach(item => {
          !type && (type = item.lookupType(typestr))
        })
      } else {
        type = roots.lookupType(typestr)
      }
    }
    if (!type) {
      console.error('包含“' + typestr + '”的protojs文件未加载！')
      return o
    }
    typeCache[typestr] = type
    return type.decode(o.value)
  }
  return o
}

export function unpackAnyAll (o, roots, reg) {
  for (let key in o) {
    if (!o.hasOwnProperty(key)) {
      continue
    }
    const value = o[key]
    if (isArray(value)) {
      o[key] = value.map(item => unpackAny(item, roots, reg))
    } else if (value && (value.typeUrl || value.type_url)) {
      o[key] = unpackAny(value, roots, reg)
    }
  }
  return o
}
