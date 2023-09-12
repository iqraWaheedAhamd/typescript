const places_to_visit=["Museums", "fortress" , "Badshahi Mosque", "Packges Mall"];

//print orignal array
console.log(places_to_visit);
//print the alphabetical oder without modifying the actual list\n (next line pe move k liye)
const new_array = places_to_visit.slice();
new_array.sort();
console.log("Alphabetcal oder");
console.log(new_array);



