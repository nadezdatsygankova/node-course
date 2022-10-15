// const square = (x) => {
//     return x * x;
// }

// const square = (x) => x * x;

// console.log(square(3));


const event = {
  name: 'Birthday party',
  guest: ['mike', 'kate'],
  printList(){
    console.log("Event is " + this.name);
    this.guest.forEach((guestOne) =>{
      console.log('Guest ' + guestOne + ' ' + this.name)
    })
  }
}

event.printList();