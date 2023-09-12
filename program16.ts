let guests = ["Ali","Ahmed","Arif"];
console.log("Hey everyone , I found a bigger dinner table!");

//Add the newguest of the array by using the unshift print the element start of the array
 guests.unshift('Ayesha');

//Add the new guest middle of the array splice add/remove of element
 guests.splice( 2,0, 'Aleesha');

//print one newguest end of the array by using the push method index
guests.push('Areeba');

// print of new set of invitation
 for (let i=0; i < guests.length; i++){
    console.log(`Dear ${guests[i]}, please come to my dinner at my place on saturday! `);
 }
 

