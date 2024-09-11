let timeout, interval;

console.log("linea 1")
timeout = setTimeout(() => {
    console.log("linea 2")
}, 2)
console.log("linea 3")
interval = setInterval(() => {
    console.log("linea 4")
}, 2000)
console.log("linea 5")
console.log("linea 6")
console.log("linea 7")

setTimeout(() => {
        clearTimeout(timeout)
        clearInterval(interval)
    }, 15000)