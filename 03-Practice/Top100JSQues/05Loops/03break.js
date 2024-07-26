
// break statement
for (let i = 0; i <= 5; i++) {
   if (i === 3) {
      break
   }
   console.log(i)
} // 0 1 2

console.log('Continue statement')

for (let i = 0; i <= 5; i++) {
   if (i === 3) {
      console.log('con')
      continue
   }
   console.log(i)
} // 0 1 2 con 4 5

// it will pass this iteration