function UserData() {
   try {
      validateUserAge(25)
      validateUserAge('invalid') // This will throw error
      validateUserAge(25) // Not execute
   } catch (error) {
      console.log('Error:', error.message)
   }
}

function validateUserAge(age) {
   if (typeof age !== 'number') {
      throw new Error('Age must be a number')
   }
   console.log('User Age is valid')
}
// validateUserAge()
UserData()