let guestlist=["Mahnoor","Momina","Merab"];

//print message about the limited space
console.log("Unfortunately,the new dinner table won't arrive in time and we can only two persons invite to dinner");

//two names remove in the invitation
console.log(`sorry! ${guestlist[0]} , we won't to able to invite you to dinner.`);
guestlist.shift();

//print message remaining guests
for (let i=0; i<guestlist.length; i++){
console.log(`Dear! "${guestlist[i]}", please come to my dinner at my decide place`);
}
export{};




