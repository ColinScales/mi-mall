export default {
  // 获取storage中的某一项
  getItem (storage_key, key, module_name) {
    if (module_name) {
      let val
      val = this.getItem(storage_key, module_name)
      if (val) return val[key]
    }
    return this.getStorage(storage_key)[key]
  },
  // 设置storage中的某一项
  setItem (storage_key, key, value, module_name) {
    if (module_name) {
      let val = this.getItem(storage_key, module_name)
      val[key] = value
      this.setItem(storage_key, module_name, val)
    } else {
      let val = this.getStorage(storage_key)
      val[key] = value
      window.sessionStorage.setItem(storage_key, JSON.stringify(val))
    }
  },
  // 删除storage中的某一项
  clearItem (storage_key, key, module_name) {
    if (module_name) {
      let val = this.getItem(storage_key, module_name)
      delete val[key]
      this.setItem(storage_key, module_name, val)
    } else {
      let val = this.getStorage(storage_key)
      delete val[key]
      window.sessionStorage.setItem(storage_key, JSON.stringify(val))
    }
  },
  // 获取storage
  getStorage (key) {
    return JSON.parse(window.sessionStorage.getItem(key) || '{}')
  }
}