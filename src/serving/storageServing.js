/*
 * @Author: wenquan.huang
 * @Date: 2018-12-09 11:16:03
 * @Last Modified by: wq599263163@163.com
 * @Last Modified time: 2019-06-17 20:06:39
 */

class StorageServing {
    constructor() {}
  
    /**
     * 设置 sessionStorage
     * @param value 需要存的值
     * @param key 需要存key名字
     */
    set(key, value, store = window.sessionStorage) {
      try {
        // 把里面的值转换成json对象
        value = JSON.stringify(value);
        // eslint-disable-next-line no-empty
      } catch (e) {}
      if (!key && !value) {
        console.error("key和value必传");
        return;
      }
      store.setItem(key, value);
    }
  
    /**
     * 获取 sessionStorage
     * @param key 需要获取的key
     *  return 返回value
     */
    get(key, store = window.sessionStorage) {
      let value = store.getItem(key) || "";
      if (value) {
        try {
          value = JSON.parse(value);
          // eslint-disable-next-line no-empty
        } catch (e) {}
      }
      return value;
    }
  
    /**
     *  删除 sessionStorage
     * @param key 需要删除是key
     */
    remove(key, store = window.sessionStorage) {
      if (!key) return;
      store.removeItem(key);
    }
    clear(store = window.sessionStorage) {
      store.clear();
    }
  }
  export default new StorageServing();
  