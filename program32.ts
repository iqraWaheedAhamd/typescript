
function checkUsernames() {
    // Make a list of current users
    const currentUsers = ['John', 'Jane', 'Alex', 'Mike', 'Sarah'];
  
    // Make a list of new users
    const newUsers = ['Bob', 'Mike', 'Jack', 'ALEx', 'Anna'];
  
    // Convert all current usernames to lowercase for case-insensitive comparison
    const lowercaseCurrentUsers = currentUsers.map(user => user.toLowerCase());
  
    // Loop through the new_users list
    for (let newUser of newUsers) {
      // Convert the new username to lowercase for case-insensitive comparison
      const lowercaseNewUser = newUser.toLowerCase();
  
      // Check if the new username is already used
      if (lowercaseCurrentUsers.includes(lowercaseNewUser)) {
        console.log(`Username '${newUser}' is already taken. Please enter a new username.`);
      } else {
        console.log(`Username '${newUser}' is available.`);
      }
    }
  }
  
  // Run the function to check the usernames
  checkUsernames();
  