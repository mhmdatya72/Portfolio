export const safeStorage = {
  getItem(key) {
    try {
      return window.localStorage.getItem(key)
    } catch (e) {
      return null
    }
  },
  setItem(key, value) {
    try {
      window.localStorage.setItem(key, value)
    } catch (e) {
      /* ignore blocked storage */
    }
  },
  sGet(key) {
    try {
      return window.sessionStorage.getItem(key)
    } catch (e) {
      return null
    }
  },
  sSet(key, value) {
    try {
      window.sessionStorage.setItem(key, value)
    } catch (e) {
      /* ignore blocked storage */
    }
  },
  sRemove(key) {
    try {
      window.sessionStorage.removeItem(key)
    } catch (e) {
      /* ignore blocked storage */
    }
  },
}