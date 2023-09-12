function show_magicians(magicians) {
    for (let magician of magicians) {
      console.log(magician);
    }
  }
  
  function make_great(magicians) {
    const greatMagicians = [];
    for (let magician of magicians) {
      greatMagicians.push("the Great " + magician);
    }
    return greatMagicians;
  }
  
  // Create an array of magician names
  const magicianNames = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
  
  // Call the function to make the magicians great and store the modified array
  const greatMagicianNames = make_great([...magicianNames]); // Using spread operator to create a copy
  
  // Call the function to show the original names of magicians
  console.log("Original names of magicians:");
  show_magicians(magicianNames);
  
  // Call the function to show the updated names of magicians
  console.log("\nUpdated names of magicians:");
  show_magicians(greatMagicianNames);
  