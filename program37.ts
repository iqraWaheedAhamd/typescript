function make_shirt(size = 'Large', message = 'I love TypeScript') {
    console.log(`You ordered a ${size} size shirt with the message: "${message}"`);
  }
  
  // Call the function to create large shirts with the default message
  make_shirt();
  
  // Call the function to create medium shirts with the default message
  make_shirt('Medium' , 'Hye , Baby!');
  
  // Call the function to create a shirt of any size with a different message
  make_shirt('Small', 'Hello, JavaScript!');
  