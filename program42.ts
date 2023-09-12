function show_magicians(magicians) {
    for (let magician of magicians) {
      console.log(magician);
    }
  }
  
  function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
      magicians[i] = "the Great " + magicians[i];
    }
  }
  
  // Create an array of magician names
  const magicianNames = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
  
  // Call the function to make the magicians great
  make_great(magicianNames);
  
  // Call the function to show the updated names of magicians
  show_magicians(magicianNames);
  