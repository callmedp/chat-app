const localStorageFailedState = ["undefined", null, "null"]

export const getStorage = (key) => localStorageFailedState.includes(localStorage.getItem(key)) ? []: JSON.parse(localStorage.getItem(key))

export const setStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value))