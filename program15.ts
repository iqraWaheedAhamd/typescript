let guestlist=["Ali","Ahmed","Arif"];
for (let i=0; i<guestlist.length; i++){
console.log(`Aslam o Aliakum! How are you? I hope you are doing well and Happy.I cordially you to dinner and residence 7pm ownwords next sunday. I would eagerlly await your presence at the celebration and dance`);
}
    //Define name of the guest who can't make it and the name of the new guest invite
let cancelGuest = "Arif";
let newGuest = "Abdullah";

//print the name of the cancleguest
console.log(cancelGuest + "can't make  it to the dinner.");

//Replace the cancelguest with the newguest 
let index = guestlist.indexOf(cancelGuest);
guestlist[index] = newGuest;

//print the set of the invitation message
for (let i=0; i< guestlist.length; i++){
    console.log("Respected Guest " + guestlist[i] + ", please come to my dinner party!");
} 
export{};
