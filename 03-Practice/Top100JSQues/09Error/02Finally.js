
try {
   
   let result = name + 10
   console.log(result) // error because name is not defined

} catch (error) {
   console.log('Error' , error.message)
}
finally {
   console.log('Finally statement occured')
}