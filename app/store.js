// Almacen de Session (Persiste mientra la ventana este abierta)
export const saveSession = (k,v) => sessionStorage.setItem(k,v)
export const loadSession = (k) => sessionStorage.getItem(k)
export const removeSession = (k) => sessionStorage.removeItem(k)

// Almacen Local (Perdura hasta que se limpie el cache)
export const saveStore = (k,v) => localStorage.setItem(k,v)
export const loadStore = (k) => localStorage.getItem(k)
export const removeStore = (k) => localStorage.removeItem(k)

// Almacen unificado
export const save = (store = localStorage, k, v) => store.setItem(k,v)
export const load = (store = localStorage, k) => store.getItem(k)
export const remove = (store = localStorage, k) => store.removeItem(k)

export const setCookie = (k,v) => document.cookie=`${k}=${v}`