console.log('script start')

setTimeout(() => {
   console.log('setTimeout')
}, 0)

Promise.resolve().then(() => {
   console.log('Promise 1')
}).then(() => {
   console.log('Promise 2')
})

console.log('Script End')